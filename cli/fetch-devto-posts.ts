import { env } from 'node:process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const DEVTO_API_BASE_URL = 'https://dev.to/api'
const ARTICLES_PER_PAGE = 1000
const DETAIL_CONCURRENCY = 1
const DETAIL_REQUEST_DELAY_MS = 500
const MAX_RETRIES = 4
const DEFAULT_USERNAME = 'ryansolid'

interface DevtoArticleIndex {
  id: number
  slug: string
  published_at: string | null
  published_timestamp?: string | null
  created_at?: string | null
}

interface DevtoUser {
  name?: string | null
  username?: string | null
  twitter_username?: string | null
  github_username?: string | null
  user_id?: number | null
  website_url?: string | null
  profile_image?: string | null
  profile_image_90?: string | null
}

interface DevtoOrganization {
  name?: string | null
  username?: string | null
  slug?: string | null
  profile_image?: string | null
  profile_image_90?: string | null
}

interface DevtoArticleDetail extends DevtoArticleIndex {
  type_of?: string | null
  title?: string | null
  description?: string | null
  readable_publish_date?: string | null
  path?: string | null
  url?: string | null
  collection_id?: number | null
  language?: string | null
  subforem_id?: number | null
  cover_image?: string | null
  social_image?: string | null
  canonical_url?: string | null
  edited_at?: string | null
  crossposted_at?: string | null
  reading_time_minutes?: number | null
  tag_list?: string[] | string | null
  tags?: string[] | string | null
  body_markdown: string | null
  user?: DevtoUser | null
  organization?: DevtoOrganization | null
}

interface ArticleFetchResult {
  article?: DevtoArticleDetail
  error?: Error
  id: number
}

interface ImportStats {
  listed: number
  fetched: number
  created: number
  updated: number
  skipped: number
  failed: number
}

type WriteResult = 'created' | 'updated' | 'skipped'
type FrontmatterScalar = boolean | number | string
type FrontmatterValue = FrontmatterScalar | FrontmatterObject | FrontmatterValue[]
type FrontmatterObject = Record<string, FrontmatterValue | undefined>

function getRequestHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'accept': 'application/json'
  }

  const devtoApiKey = env['DEVTO_API_KEY']
  if (devtoApiKey) {
    headers['api-key'] = devtoApiKey
  }

  return headers
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function parseRetryAfterMs(retryAfter: string | null): number | null {
  if (!retryAfter) {
    return null
  }

  const seconds = Number(retryAfter)
  if (Number.isFinite(seconds)) {
    return Math.max(0, seconds * 1000)
  }

  const timestamp = Date.parse(retryAfter)
  if (Number.isNaN(timestamp)) {
    return null
  }

  return Math.max(0, timestamp - Date.now())
}

function toError(error: unknown): Error {
  return error instanceof Error ? error : new Error(String(error))
}

async function fetchWithRetry(url: string): Promise<Response> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    let response: Response

    try {
      response = await fetch(url, { headers: getRequestHeaders() })
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        throw toError(error)
      }

      const delayMs = 500 * 2 ** (attempt - 1)
      console.warn(`Network error fetching ${url}. Retrying in ${delayMs}ms...`)
      await sleep(delayMs)
      continue
    }

    if (response.ok) {
      return response
    }

    const responseBody = await response.text()
    const shouldRetry = response.status === 429 || response.status >= 500
    if (!shouldRetry || attempt === MAX_RETRIES) {
      throw new Error(`DEV.to API request failed (${response.status}) for ${url}: ${responseBody}`)
    }

    const retryAfterMs = parseRetryAfterMs(response.headers.get('retry-after'))
    const delayMs = retryAfterMs ?? 500 * 2 ** (attempt - 1)
    console.warn(`DEV.to returned ${response.status} for ${url}. Retrying in ${delayMs}ms...`)
    await sleep(delayMs)
  }

  throw new Error(`DEV.to API request failed for ${url}`)
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetchWithRetry(url)
  return response.json() as Promise<T>
}

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  mapper: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  if (items.length === 0) {
    return []
  }

  const results = new Array<R>(items.length)
  let nextIndex = 0

  async function worker() {
    while (true) {
      const currentIndex = nextIndex
      nextIndex += 1

      if (currentIndex >= items.length) {
        return
      }

      results[currentIndex] = await mapper(items[currentIndex], currentIndex)
    }
  }

  const workerCount = Math.min(concurrency, items.length)
  await Promise.all(Array.from({ length: workerCount }, () => worker()))
  return results
}

function getDatePrefix(article: Pick<DevtoArticleIndex, 'published_at' | 'published_timestamp' | 'created_at'>): string | null {
  const rawDate = article.published_at ?? article.published_timestamp ?? article.created_at ?? null
  if (!rawDate) {
    return null
  }

  const parsedDate = new Date(rawDate)
  if (Number.isNaN(parsedDate.getTime())) {
    return null
  }

  return parsedDate.toISOString().slice(0, 10)
}

function normalizeTags(tags: DevtoArticleDetail['tags'], tagList: DevtoArticleDetail['tag_list']): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => tag.trim()).filter(Boolean)
  }

  if (typeof tags === 'string') {
    return tags.split(',').map((tag) => tag.trim()).filter(Boolean)
  }

  if (Array.isArray(tagList)) {
    return tagList.map((tag) => tag.trim()).filter(Boolean)
  }

  if (typeof tagList === 'string') {
    return tagList.split(',').map((tag) => tag.trim()).filter(Boolean)
  }

  return []
}

function compactObject<T extends Record<string, unknown>>(value: T): Record<string, FrontmatterValue> {
  const compactedEntries = Object.entries(value)
    .flatMap(([key, entryValue]) => {
      if (entryValue === undefined || entryValue === null) {
        return []
      }

      if (Array.isArray(entryValue)) {
        const compactedArray = entryValue
          .filter((item) => item !== undefined && item !== null)
          .map((item) => {
            if (Array.isArray(item)) {
              return item.filter((nestedItem) => nestedItem !== undefined && nestedItem !== null) as FrontmatterValue[]
            }

            if (typeof item === 'object') {
              const compactedItem = compactObject(item as Record<string, unknown>)
              return Object.keys(compactedItem).length > 0 ? compactedItem : undefined
            }

            return item as FrontmatterScalar
          })
          .filter((item): item is FrontmatterValue => item !== undefined)

        return compactedArray.length > 0 ? [[key, compactedArray]] : []
      }

      if (typeof entryValue === 'object') {
        const compactedObject = compactObject(entryValue as Record<string, unknown>)
        return Object.keys(compactedObject).length > 0 ? [[key, compactedObject]] : []
      }

      return [[key, entryValue as FrontmatterScalar]]
    })

  return Object.fromEntries(compactedEntries)
}

function formatYamlScalar(value: FrontmatterScalar): string {
  if (typeof value === 'string') {
    return JSON.stringify(value)
  }

  return String(value)
}

function appendYamlLine(lines: string[], key: string, value: FrontmatterValue, indent = 0) {
  const spacing = ' '.repeat(indent)

  if (Array.isArray(value)) {
    if (value.length === 0) {
      lines.push(`${spacing}${key}: []`)
      return
    }

    lines.push(`${spacing}${key}:`)
    for (const item of value) {
      if (Array.isArray(item)) {
        lines.push(`${spacing}  -`)
        item.forEach((nestedItem, index) => appendYamlArrayItem(lines, nestedItem, indent + 4, index === 0))
      } else if (typeof item === 'object') {
        lines.push(`${spacing}  -`)
        for (const [nestedKey, nestedValue] of Object.entries(item)) {
          appendYamlLine(lines, nestedKey, nestedValue, indent + 4)
        }
      } else {
        lines.push(`${spacing}  - ${formatYamlScalar(item)}`)
      }
    }
    return
  }

  if (typeof value === 'object') {
    lines.push(`${spacing}${key}:`)
    for (const [nestedKey, nestedValue] of Object.entries(value)) {
      appendYamlLine(lines, nestedKey, nestedValue, indent + 2)
    }
    return
  }

  lines.push(`${spacing}${key}: ${formatYamlScalar(value)}`)
}

function appendYamlArrayItem(lines: string[], value: FrontmatterValue, indent = 0, inline = false) {
  const spacing = ' '.repeat(indent)

  if (Array.isArray(value)) {
    if (inline) {
      lines.push(`${spacing}-`)
    }

    value.forEach((item, index) => appendYamlArrayItem(lines, item, inline ? indent + 2 : indent, index === 0))
    return
  }

  if (typeof value === 'object') {
    if (inline) {
      lines.push(`${spacing}-`)
    }

    for (const [nestedKey, nestedValue] of Object.entries(value)) {
      appendYamlLine(lines, nestedKey, nestedValue, inline ? indent + 2 : indent)
    }
    return
  }

  lines.push(`${spacing}${inline ? '- ' : ''}${formatYamlScalar(value)}`)
}

function serializeFrontmatter(frontmatter: FrontmatterObject): string {
  const compactedFrontmatter = compactObject(frontmatter)
  const lines = ['---']

  for (const [key, value] of Object.entries(compactedFrontmatter)) {
    appendYamlLine(lines, key, value)
  }

  lines.push('---')
  return lines.join('\n')
}

function stripLeadingFrontmatter(markdown: string): string {
  const normalized = markdown.replace(/^\uFEFF/, '')
  const frontmatterMatch = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)

  if (!frontmatterMatch) {
    return normalized
  }

  if (!/^[A-Za-z0-9_-]+:\s/m.test(frontmatterMatch[1])) {
    return normalized
  }

  return normalized.slice(frontmatterMatch[0].length).replace(/^\r?\n+/, '')
}

function buildFrontmatter(article: DevtoArticleDetail): string {
  const publishDate = getDatePrefix(article) ?? undefined
  const tags = normalizeTags(article.tags, article.tag_list)

  const frontmatter: FrontmatterObject = {
    title: article.title ?? undefined,
    description: article.description ?? undefined,
    slug: article.slug,
    url: article.url ?? undefined,
    publishDate,
    tags,
    coverImage: article.cover_image ?? undefined,
    socialImage: article.social_image ?? undefined
  }

  return serializeFrontmatter(frontmatter)
}

function formatImportedMarkdown(article: DevtoArticleDetail): string {
  const body = stripLeadingFrontmatter(article.body_markdown ?? '')
  const frontmatter = buildFrontmatter(article)
  return `${frontmatter}\n\n${body.replace(/^\r?\n+/, '')}`
}

function normalizeMarkdown(markdown: string): string {
  return markdown.endsWith('\n') ? markdown : `${markdown}\n`
}

function getRelativeOutputPath(article: DevtoArticleDetail, reservedPaths: Set<string>): string | null {
  const datePrefix = getDatePrefix(article)
  if (!datePrefix) {
    return null
  }

  const slug = article.slug?.trim() || `article-${article.id}`
  const year = datePrefix.slice(0, 4)
  const basePath = join('content', 'blog', year, `${datePrefix}-${slug}.md`)

  if (!reservedPaths.has(basePath)) {
    reservedPaths.add(basePath)
    return basePath
  }

  const collisionPath = join('content', 'blog', year, `${datePrefix}-${slug}-${article.id}.md`)
  reservedPaths.add(collisionPath)
  return collisionPath
}

async function writeMarkdownFile(relativePath: string, markdown: string): Promise<WriteResult> {
  const filePath = join(process.cwd(), relativePath)
  const normalizedMarkdown = normalizeMarkdown(markdown)

  await mkdir(dirname(filePath), { recursive: true })

  let existingContent: string | null = null
  try {
    existingContent = await readFile(filePath, 'utf8')
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException
    if (nodeError.code !== 'ENOENT') {
      throw error
    }
  }

  if (existingContent === normalizedMarkdown) {
    return 'skipped'
  }

  await writeFile(filePath, normalizedMarkdown, 'utf8')
  return existingContent === null ? 'created' : 'updated'
}

async function fetchArticleIndex(username: string): Promise<DevtoArticleIndex[]> {
  const articlesById = new Map<number, DevtoArticleIndex>()

  for (let page = 1; ; page++) {
    const params = new URLSearchParams({
      username,
      state: 'all',
      per_page: String(ARTICLES_PER_PAGE),
      page: String(page)
    })

    const url = `${DEVTO_API_BASE_URL}/articles?${params.toString()}`
    const pageArticles = await fetchJson<DevtoArticleIndex[]>(url)

    console.log(`Fetched article index page ${page} with ${pageArticles.length} item(s).`)

    if (pageArticles.length === 0) {
      break
    }

    for (const article of pageArticles) {
      articlesById.set(article.id, article)
    }

    if (pageArticles.length < ARTICLES_PER_PAGE) {
      break
    }
  }

  return [...articlesById.values()]
}

async function fetchArticleDetail(article: DevtoArticleIndex): Promise<ArticleFetchResult> {
  try {
    const detail = await fetchJson<DevtoArticleDetail>(`${DEVTO_API_BASE_URL}/articles/${article.id}`)
    return {
      article: {
        ...article,
        ...detail
      },
      id: article.id
    }
  } catch (error) {
    return {
      error: toError(error),
      id: article.id
    }
  } finally {
    await sleep(DETAIL_REQUEST_DELAY_MS)
  }
}

function printSummary(username: string, stats: ImportStats) {
  console.log(`DEV.to import complete for ${username}.`)
  console.log(`Listed: ${stats.listed}`)
  console.log(`Fetched: ${stats.fetched}`)
  console.log(`Created: ${stats.created}`)
  console.log(`Updated: ${stats.updated}`)
  console.log(`Skipped: ${stats.skipped}`)
  console.log(`Failed: ${stats.failed}`)
}

export async function fetchDevtoPosts(username = DEFAULT_USERNAME): Promise<void> {
  const normalizedUsername = username.trim() || DEFAULT_USERNAME
  console.log(`Fetching DEV.to posts for "${normalizedUsername}"...`)

  const articles = await fetchArticleIndex(normalizedUsername)
  if (articles.length === 0) {
    console.log(`No DEV.to posts found for "${normalizedUsername}".`)
    return
  }

  const stats: ImportStats = {
    listed: articles.length,
    fetched: 0,
    created: 0,
    updated: 0,
    skipped: 0,
    failed: 0
  }

  const reservedPaths = new Set<string>()
  const fetchResults = await mapWithConcurrency(articles, DETAIL_CONCURRENCY, fetchArticleDetail)

  for (const result of fetchResults) {
    if (result.error) {
      stats.failed += 1
      console.error(`Failed to fetch article ${result.id}: ${result.error.message}`)
      continue
    }

    const article = result.article
    if (!article) {
      stats.failed += 1
      console.error(`Missing article payload for article ${result.id}.`)
      continue
    }

    stats.fetched += 1

    if (!article.body_markdown?.trim()) {
      stats.skipped += 1
      console.warn(`Skipping article ${article.id} because body_markdown is empty.`)
      continue
    }

    const relativePath = getRelativeOutputPath(article, reservedPaths)
    if (!relativePath) {
      stats.skipped += 1
      console.warn(`Skipping article ${article.id} because no valid publish date was available.`)
      continue
    }

    const writeResult = await writeMarkdownFile(relativePath, formatImportedMarkdown(article))
    stats[writeResult] += 1

    if (writeResult === 'created') {
      console.log(`Created ${relativePath}`)
    } else if (writeResult === 'updated') {
      console.log(`Updated ${relativePath}`)
    } else {
      console.log(`Unchanged ${relativePath}`)
    }
  }

  printSummary(normalizedUsername, stats)
}
