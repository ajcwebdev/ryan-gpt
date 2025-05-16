---
showLink: "https://www.youtube.com/watch?v=CQm52h3Ukng"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Remix"
description: ""
publishDate: "2021-12-04"
coverImage: "https://i.ytimg.com/vi/CQm52h3Ukng/sddefault.jpg?v=61aa5dcc"
---

## Chapters

### 00:00:00 - Welcome, Nerves, and Stream Setup

Ryan kicks off the stream by admitting a mix of excitement and nerves after not coding in React for more than a half-hour in a demo context. He compares himself to the polished creators who set up music and countdowns, but instead he’s sipping a drink and waiting for folks to join the chat. He smiles at the contrast between streamed smoothness and real-time jaggedness, assuring viewers that the performance looked flawless on his end, even if it didn’t always translate live.

With everyone settling in, Ryan invites participants to say hello in the chat as he recounts recent streaming hiccups. He reflects on his last session, where he championed performance and smoothness only to find the recording showed jagged frame rates. That misalignment between promise and picture motivates him today: no fancy preamble or music—just honest coding, community interaction, and a promise to dive straight into Remix Run after a quick news roundup.

### 00:06:00 - This Week in JavaScript: Reactive Script and Community

Ryan segues into “This Week in JavaScript,” starting with his recently published article on a fully reactive scripting language built on plain JavaScript syntax. He poses the question of whether a language could enforce reactivity so thoroughly that state never “leaks” when props are destructured. Drawing parallels to how quickly the community embraced Svelte’s syntax, he wonders if developers might similarly accept a reactive-first JavaScript variant, though he acknowledges it could also prove confusing.

He then celebrates the first Solid community meeting—despite Discord’s 25-user cap cutting off overflow attendees—and highlights a Learn with Jason session before pivoting to Builder.io’s impressive Quick-and-PartyTown homepage rebuild. Ryan walks through the e-commerce-style demo, marveling at the interactivity and ultra-low JavaScript payload (just 1.7 KB), and credits PartyTown and optimized analytics for achieving a Lighthouse score of 100 while still serving real ads and embeds.

### 00:12:00 - JavaScript News: Interviews and Insights

Continuing his news roundup, Ryan recounts Ben Awad’s interview with Dan Abramov, noting Abramov’s swift resolution of standard coding questions before addressing a Redux-related prompt that ignited community debate. He empathizes with Redux maintainers balancing promotion and innovation when the library’s relevance is questioned. Ryan encourages viewers to watch the interview clip for its mix of candid humor and insightful perspective on library longevity.

He wraps up the news segment by listing other noteworthy videos: the Learn with Jason Remix introduction by Ryan Florence, Misco’s Builder.io deep dive, and additional talks he’s consumed in the past fortnight. With his “mostly a video-watching week” confession, he clears the stage for the main event: an uninhibited, bias-free exploration of Remix Run, unburdened by corporate ties or proprietary stakes.

### 00:18:00 - First Impressions of Remix Run

Ryan introduces Remix Run by tracing his history with its creators, Ryan Florence and Michael Jackson, from early React Router benchmarks to beta previews. He stresses his outsider perspective—no React Core affiliation—to evaluate Remix on its merits. His familiarity with Solid’s similar nested routing hints at one area of keen interest. Despite having watched every Remix demo, he’s never actually installed it himself, so today offers “true first contact.”

Acknowledging personal biases, Ryan frames nested routing and progressive enhancement (especially around forms) as his focal points. He notes Remix’s adoption of tried-and-true techniques that React could already use, arguing that ease and consistency of implementation often drive adoption more than novelty. With anticipation building, he prepares to dive into code, eager to see how Remix’s approaches feel in practice.

### 00:24:00 - Understanding Nested Routing via Twitter Example

Shifting to an Excalidraw sketch, Ryan unpacks nested routing by likening it to Twitter’s UI: a sidebar that persists as users switch feeds, profile pages, and tweet subviews. He draws three concentric panels—root, main content, and sub-content—and explains how nested routing redraws only the panel where the route changed. This contrasts with naive full-page re-renders or scattershot VDOM updates.

He demonstrates that when navigating between home, profile, or tweet replies, only the affected nested components update, preserving the rest of the page. Ryan highlights how this structure encodes which data to fetch up front—parent and child data load in parallel—avoiding waterfall fetches and excessive script loads. The clarity of route-based data loading underpins both performance gains and code predictability.

### 00:30:00 - Benefits of Nested Routing

Building on the Twitter metaphor, Ryan emphasizes three tiers of component re-rendering: root resets redraw everything; mid-level updates the middle panel only; inner-level touches just the tweet stream. He contrasts this with typical React patterns where developers often “YOLO” all updates and rely on VDOM diffing to cope. This nested model, he argues, is essential for non-VDOM frameworks and offers clear performance dividends.

He explains that defining data loaders at each route boundary allows Remix to fetch all necessary data in parallel as soon as navigation occurs. Compared to Next.js prefetch links or React lazy-loading with caching concerns, nested routing simply provides explicit, declarative load points—no extra tooling required. This explicitness yields predictable load behavior, easier caching, and a flattened request graph.

### 00:36:00 - Setting Up a Remix Project

Ryan switches to his terminal and runs `npx create-remix@latest`, selecting the Remix App Server and TypeScript options. He opts for the “quick start” template, appreciating the straightforward prompts for project name, server target, and language. Within seconds, dependencies install, and the new app scaffolding appears, ready for inspection.

He opens the project in his editor, examining the root files: `remix.config.js`, `public/`, `app/`, and the default `root.tsx` with global styles, metadata hooks, and an Outlet. Noting the split of Document and Layout into separate files, he praises the modularity that lets developers focus on app layout without re-touching server-client boilerplate unless necessary.

### 00:42:00 - Exploring Root and Document Components

Inside `app/root.tsx`, Ryan finds imports for links, meta, scripts, and the `<Outlet />` for child routes. He highlights the `links()` and `meta()` exports that drive document head configuration, then points out the default Document component that injects scroll restoration, live reloading, and script tags. Remix’s `CatchBoundary` and `ErrorBoundary` exports register route-specific error handling, all wired into a tidy page-level API.

He admires how removing `<Scripts />` can disable JavaScript entirely, turning the app into a plain-MPA effortlessly. Comparing to Astro or Quick’s selective hydration, he notes Remix’s more binary approach—script or no script—yet acknowledges the value of that simplicity for many use cases.

### 00:48:00 - Inspecting Entry.server.tsx and Entry.client.tsx

Ryan dives into `entry.server.tsx` and `entry.client.tsx`, pointing out how Remix abstracts universal request and response objects. He appreciates using standard Web Request/Response instead of framework-specific APIs, enabling easy deployment to Cloudflare Workers or Deno. The server entry renders the app to HTML stream, while the client entry hydrates with the same structure, courtesy of React 18 streaming support.

This dual entry setup gives developers access to low-level control without obscuring complexity. Ryan predicts most users will seldom touch these files, but values having them available for custom server logic or special integrations.

### 00:54:00 - Launching the Dev Server and Default UI

Running `npm run dev`, Ryan opens `localhost:3000` to see Remix’s starter UI: a clean welcome page with functional links and a basic form demo. Unlike trivial counters, these examples exercise nested routing, loaders, and actions. He toggles dark mode detection, confirming Remix’s automatic system preference handling.

He tests the form interaction and inspects the network tab, noting JSON responses and full-page reloads when JavaScript is disabled, illustrating progressive enhancement in action. This initial demo foreshadows the power and flexibility of Remix’s APIs.

### 01:00:00 - Exploring Built-In Demos

Perusing the `app/routes/demos` directory, Ryan inspects nested routes like `/demos/about`, `/demos/params`, and `/demos/actions`. He notes the folder-and-file naming that drives file-based routing, then opens the About demo to see an `<Outlet />` swapping only inner content. CSS imports scoped per route and `meta()` hooks for titles underscore per-page configuration.

Ryan shows how route-level `links()` injects stylesheets for a demo, then watches the UI swap seamlessly without touching parent layout. This pattern demonstrates how per-route assets and data load only where needed, promoting granular optimization.

### 01:06:00 - Params Demo and Data Loaders

At `/demos/params`, Ryan examines the dynamic `[id]` route using the `$id.tsx` convention. The `loader()` function simulates data fetches and error throwing, returning JSON or invoking a `Response` redirect. In the component, `useLoaderData()` exposes loader returns in both server and client contexts, abstracting fetch calls into a unified hook.

He triggers valid and invalid IDs to see catch boundaries versus error boundaries, and points out how Remix gracefully handles non-error statuses (e.g. 404) separately from runtime errors. This provides robust UX for both expected and exceptional data states.

### 01:12:00 - Actions Demo and Progressive Enhancement

Switching to `/demos/actions`, Ryan reviews the POST-based form demo. The `action()` export reads `request.formData()`, validates input, and returns either a redirect or a JSON error. Using `useActionData()`, the component reacts to server-side responses without client JavaScript, while still supporting seamless in-page updates when scripts are enabled.

He toggles JavaScript off to show full-page form posts that re-render server HTML, then re-enables scripts to see smooth JSON-driven error messages. This duality exemplifies Remix’s progressive enhancement: one code path supports both MPA and SPA flows with minimal branching.

### 01:18:00 - Form Behavior with and without JavaScript

Testing again with JavaScript disabled, Ryan clicks the “answer” button and witnesses a traditional post-back and full reload. He re-enables scripts to see the error hunt handled client-side, with no full refresh—just a JSON payload. He remarks on the ease of wrapping each interaction in a `<Form>` and how Remix’s conventions simplify robust form-driven UIs.

This demo sparks questions about scaling actions across many forms, and Ryan acknowledges the trade-offs: a single `action()` per route keeps things straightforward for 95% of cases, though more granular endpoints might suit complex apps. He appreciates having both redirect and JSON options in one API.

### 01:24:00 - Recap of Remix’s Core Patterns

Ryan summarizes Remix’s key building blocks: file-based nested routing, per-route `loader()` and `action()` exports, `links()` and `meta()` hooks, and `<Outlet />` placement for layout. He notes how this model mirrors Solid’s patterns, making cross-framework learning easier. Remix’s progressive enhancement gives developers intuitive control over when pages behave like MPAs versus SPAs.

He applauds the uniform page-level API for head tags, assets, data loading, and error handling. This consistency reduces boilerplate compared to mixing Helmet, custom fetch hooks, and ad-hoc routing setups in React alone.

### 01:30:00 - Planning a Hacker News Remix Clone

Ryan announces a goal: port his familiar Hacker News demo into Remix. He’ll follow the official tutorial for core features, then recreate the front page list. He locates his Solid starter code for nav and story components, confident that similarity in router and data patterns will make the task smooth.

He outlines steps: copy styles into `app/styles/global.css`, adapt Solid’s `<Nav>` and `<Story>` components to React/Remix syntax, configure layout with `<Outlet />`, then wire up a wildcard route and `loader()` to fetch live Hacker News APIs.

### 01:36:00 - Porting the Nav Component

Copying Solid’s `<Nav>` code into `app/components/Nav.tsx`, Ryan swaps `class=` for `className=`, `<a href>` becomes `<Link to>`, and removes `server:` directives. He imports Remix’s `Link`, then drops the component into `root.tsx` around `<Outlet />`. A quick dev reload shows the styled nav bar appearing atop the default page.

With the nav integrated, he confirms that children render below it. He remarks that migrating Solid code to Remix is “identical” except for minor JSX and router API changes, a testament to shared nested routing lineage.

### 01:42:00 - Defining the Wildcard Route

Ryan creates `app/routes/$wild.tsx` to catch `/news/…` paths, renaming `index.tsx` and `$wild.tsx` appropriately. He exports a default component, an empty `loader()`, and uses `useLoaderData()` to confirm route matching. Testing `/news`, `/news/top`, and `/` reveals that Remix file conventions drive nested routing automatically.

He troubleshoots why `/news/top` matched last route instead of wildcard—discovering that Remix file naming requires `$wild.tsx` (not `$wildcard`). Renaming fixes matching, illustrating the importance of filename conventions in file-based routing.

### 01:48:00 - Implementing the Stories Loader

In `$wild.tsx`, Ryan writes a `loader()` that parses `params.wild` and the `page` query via `new URL(request.url)`. He converts the page param to number, defaults to 1, and calls a `getStories(section, page)` helper. This helper, placed in `app/api.ts`, fetches from the Hacker News API endpoint, maps results to a `Story` type, and returns an array.

He handles TypeScript quirks by casting API story types, then returns the mapped data. Back in the component, `useLoaderData<Story[]>()` yields stories ready for rendering.

### 01:54:00 - Typing and Fetch Mapping in api.ts

Creating `app/api.ts`, Ryan defines the `Story` interface and implements `getStories(section, page)` as an async function that fetches the correct Hacker News endpoint (`news`, `newest`, etc.) based on a section map. He JSON-parses the response and maps fields (`title`, `url`, etc.) into the `Story` shape, returning a typed array.

Type assertion workarounds resolve mismatches between the API’s `kids` field and expected types. He remarks that TypeScript can be “a jackass” but appreciates static types for robust data handling. Once compiled, `loader()` now receives fully typed story data.

### 02:00:00 - Building the Story Component

Ryan reconstructs `<Story>` in `app/components/Story.tsx`, copying Solid’s rendering logic into a React component. He wraps the content in `<div className>` and uses props to display story number, title link, domain, and meta info (score, byline). Each chapter link and date formatting functions map directly from his Solid example.

With `Story` imported in `$wild.tsx`, he maps over `stories`, rendering each with a unique `key={story.id}`. A terminal rebuild and page reload reveal the Hacker News front page populated with live data.

### 02:06:00 - Testing Pagination and Query Params

In the top of `$wild.tsx`, Ryan uses `new URL(request.url).searchParams.get('page')` to handle pagination. He logs parsed `section` and `page` to confirm param extraction. Testing `/news?page=2` yields page 2 stories, demonstrating seamless integration of query parameters in server loaders.

He notes React Router’s `useSearchParams` alternative but opts for platform-agnostic URL parsing in the loader. This approach requires no extra hooks and runs on both server and client, aligning with Remix’s “use the platform” philosophy.

### 02:12:00 - Finalizing the Story List and Styles

With data hooked up, Ryan tweaks CSS classes imported from global styles, ensuring mobile responsiveness and dark-mode compatibility. He removes demo artifacts, cleans up console logs, and adds fallback UI for no-JavaScript scenarios. Once satisfied, he tests page reloads and client-side navigation, confirming both paths work identically.

He marvels at how minimal changes were required—two dozen lines of code to port his entire front page into Remix. The combination of file-based routing, inline loaders, and components makes for a concise, maintainable codebase.

### 02:18:00 - Deploying to Netlify

Switching gears to deployment, Ryan initializes a new Netlify site with `netlify init`, selecting “Remix Hacker News” and the Remix App Server adapter. He copies his `app/` folder into the new project, runs `npm install`, and verifies `npm run build` and `npm run start` locally.

Confident, he runs `netlify deploy --prod`, watches the build logs, then visits the live URL. The Hacker News clone appears instantly, demonstrating seamless migration from development to production with minimal configuration.

### 02:24:00 - Production QA and Minor Fixes

On the Netlify production URL, Ryan tests navigation, pagination, and dark mode. Spotting a stray `<h3>` text from a leftover demo, he quickly updates it in `components/Nav.tsx`, re-builds, and re-deploys. Live updates reflect instantly, illustrating the rapid feedback loop.

He confirms that JavaScript-off form submissions and loader-driven data fetch both work in production, praising Remix’s consistency across environments. With deployment smooth, he turns to performance profiling.

### 02:30:00 - Measuring Bundle Size and Payload

Opening Chrome DevTools, Ryan inspects the built app’s initial JavaScript payload (\~63.9 KB) via the “Network” filter. He compares to Astro’s 13.5 KB and Preact’s 22 KB demos, noting Remix’s larger footprint but acknowledging its full-feature capabilities.

He checks module preloads for route chunks, confirming only necessary bundles load for navigation. The chunk for `/news` is fetched on demand, keeping initial payload lean and enabling efficient code splitting.

### 02:36:00 - Performance Profiling: Lighthouse Scores

Ryan runs Lighthouse on both dev and prod builds. The Remix Hacker News demo scores 99–100 for performance on desktop, with first contentful paint around 300 ms and load times under 400 ms. He attributes hydration delays to React client boot, noting about 300–350 ms added compared to server-only rendering.

On Fast 3G emulation, FCP shifts to \~1.2 s—still respectable for a full SSR site. He observes hydration tails of 250–300 ms, highlighting React’s heavier client-side startup versus pure MPA or island frameworks.

### 02:42:00 - Comparing Framework Spectrums

Ryan sketches a spectrum from traditional MPAs (Rails, Hotwire) through islands frameworks (Astro, Quick) to SPAs (Next.js, SvelteKit, Remix, SolidStart). He draws a mountain representing the “transitional app” ideal—minimal JS, live interactivity, parallel data fetch.

He warns that while frameworks close to the summit make promising strides, a significant chasm remains. Compiler-driven approaches (Mitosis, Qwik) and analytics-driven splits (Quick) each tackle different aspects. Bridging the entire gap—from zero-JS MPAs to full SPAs—will require further innovation and cross-pollination of techniques.

### 02:48:00 - Future of Hydration and Lazy Loading

Discussing hydration strategies, Ryan speculates on Remix leveraging React 18 Suspense and streaming—starting data fetches immediately, streaming SSR content, and filling in lazily. He compares Qwik’s resumable hydration and compiler insights behind Qwik’s island model, noting that true partial hydration remains a frontier.

He outlines challenges in balancing prefetching, code splitting, and bundle granularity. While Qwik and Astro automate minimal JS shipping, frameworks like Remix and Next.js will need more sophisticated bundlers or compiler hooks to edge closer to the “zero-down” ideal.

### 02:54:00 - Final Thoughts and Wrap-Up

In the closing minutes, Ryan emphasizes that while Remix is an excellent progression for React apps—standardizing nested routing, data APIs, and progressive enhancement—the broader web still has far to travel. He encourages developers to embrace current tools while watching advances in compiler-driven hydration and automated code splitting.

He thanks viewers, fields any last questions, and teases future sessions on Qwik 6 and Astro’s next island innovations. With optimism for continued evolution, he signs off, grateful for the community’s shared climb toward faster, simpler web experiences.