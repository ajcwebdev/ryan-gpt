import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import GithubSlugger from 'github-slugger'

interface EpisodeData {
  filePath: string
  title: string
  publishDate: string
  showLink: string
  chapters: Array<{
    timestamp: string
    title: string
  }>
}

async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  console.log(`Scanning directory: ${dir}`)
  const dirEntries = await readdir(dir, { withFileTypes: true })
  const mdFiles: string[] = []

  const filePromises = dirEntries.map(async (entry) => {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      return getAllMarkdownFiles(fullPath)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      return [fullPath]
    }
    return []
  })

  const results = await Promise.all(filePromises)
  return results.flat()
}

function parseFrontmatter(content: string): Record<string, string> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!frontmatterMatch) {
    console.log('No frontmatter found')
    return {}
  }

  const frontmatter: Record<string, string> = {}
  const lines = frontmatterMatch[1].split('\n')
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
      frontmatter[key] = value
    }
  })

  console.log(`Parsed frontmatter with ${Object.keys(frontmatter).length} fields`)
  return frontmatter
}

function extractChapters(content: string): Array<{ timestamp: string; title: string }> {
  const chaptersSection = content.split('## Chapters')[1]
  if (!chaptersSection) {
    console.log('No chapters section found')
    return []
  }

  const chapterLines = chaptersSection.split('\n').filter(line => line.startsWith('###'))
  const chapters: Array<{ timestamp: string; title: string }> = []

  chapterLines.forEach(line => {
    console.log(`Processing chapter line: ${line}`)
    
    const timestampMatch = line.match(/###\s+(\d+:\d{2}(?::\d{2})?)/)
    if (!timestampMatch) {
      console.log(`No timestamp found in line: ${line}`)
      return
    }

    const timestamp = timestampMatch[1]
    let remainingText = line.substring(timestampMatch.index! + timestampMatch[0].length)
    
    remainingText = remainingText.replace(/^\s*[-–—]\s*\d+:\d{2}(?::\d{2})?\s*/, '')
    
    remainingText = remainingText.replace(/^\s*[-–—:•|·]\s*/, '')
    
    const title = remainingText.trim()
    
    if (title) {
      chapters.push({ timestamp, title })
      console.log(`Extracted chapter: ${timestamp} - ${title}`)
    }
  })

  console.log(`Found ${chapters.length} chapters`)
  return chapters
}

async function parseEpisodeFile(filePath: string): Promise<EpisodeData | null> {
  console.log(`Parsing file: ${filePath}`)
  try {
    const content = await readFile(filePath, 'utf8')
    const frontmatter = parseFrontmatter(content)
    const chapters = extractChapters(content)

    if (!frontmatter.title || !frontmatter.publishDate || !frontmatter.showLink) {
      console.error(`Missing required frontmatter in ${filePath}`)
      return null
    }

    console.log(`Successfully parsed episode: ${frontmatter.title}`)
    return {
      filePath,
      title: frontmatter.title,
      publishDate: frontmatter.publishDate,
      showLink: frontmatter.showLink,
      chapters
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error)
    return null
  }
}

function convertTimestampToSeconds(timestamp: string): number {
  const parts = timestamp.split(':').map(Number)
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1]
  }
  return parts[0] * 3600 + parts[1] * 60 + parts[2]
}

function generateChapterLink(showLink: string, timestamp: string): string {
  const seconds = convertTimestampToSeconds(timestamp)
  const link = showLink.includes('youtube.com') ? `${showLink}&t=${seconds}s` : showLink
  console.log(`Generated chapter link: ${link}`)
  return link
}

function generateGitHubLink(filePath: string, chapterTitle: string): string {
  const slugger = new GithubSlugger()
  const relativePath = relative(process.cwd(), filePath)
  const anchorId = slugger.slug(`${chapterTitle}`)
  const link = `https://github.com/ajcwebdev/ryan-gpt/blob/main/${relativePath}#${anchorId}`
  console.log(`Generated GitHub link with slug: ${anchorId}`)
  return link
}

async function createChaptersMarkdown(): Promise<void> {
  console.log('Starting chapters markdown generation...')
  
  const baseDir = join(process.cwd(), 'done')
  const mdFiles = await getAllMarkdownFiles(baseDir)
  console.log(`Found ${mdFiles.length} markdown files`)

  const episodePromises = mdFiles.map(parseEpisodeFile)
  const episodes = (await Promise.all(episodePromises))
    .filter((episode): episode is EpisodeData => episode !== null)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))

  console.log(`Successfully parsed ${episodes.length} episodes`)

  let markdown = '# All Episodes and Chapters\n\n'
  markdown += 'A comprehensive list of all episodes with direct links to chapters.\n\n'

  const episodesByYear = episodes.reduce<Record<string, EpisodeData[]>>((acc, episode) => {
    const year = episode.publishDate.substring(0, 4)
    if (!acc[year]) acc[year] = []
    acc[year].push(episode)
    return acc
  }, {})

  const years = Object.keys(episodesByYear).sort((a, b) => b.localeCompare(a))
  console.log(`Processing episodes for years: ${years.join(', ')}`)

  years.forEach(year => {
    markdown += `## ${year}\n\n`
    console.log(`Processing year ${year} with ${episodesByYear[year].length} episodes`)
    
    episodesByYear[year].forEach(episode => {
      const relativePath = relative(process.cwd(), episode.filePath)
      const episodeLink = `https://github.com/ajcwebdev/ryan-gpt/blob/main/${relativePath}`
      
      markdown += `### [${episode.title}](${episodeLink})\n`
      markdown += `*Published: ${episode.publishDate}* | [Watch on YouTube](${episode.showLink})\n\n`
      
      if (episode.chapters.length > 0) {
        markdown += '#### Chapters:\n'
        episode.chapters.forEach(chapter => {
          const chapterVideoLink = generateChapterLink(episode.showLink, chapter.timestamp)
          const chapterGitHubLink = generateGitHubLink(episode.filePath, `${chapter.timestamp} - ${chapter.title}`)
          
          markdown += `- **${chapter.timestamp}** - [${chapter.title}](${chapterGitHubLink}) | [Watch](${chapterVideoLink})\n`
        })
        markdown += '\n'
      } else {
        markdown += '*No chapters available*\n\n'
      }
    })
  })

  const outputPath = join(process.cwd(), 'chapters.md')
  await writeFile(outputPath, markdown, 'utf8')
  console.log(`Successfully created ${outputPath}`)
  console.log(`Total episodes processed: ${episodes.length}`)
  console.log(`Total chapters extracted: ${episodes.reduce((sum, ep) => sum + ep.chapters.length, 0)}`)
}

export { createChaptersMarkdown }