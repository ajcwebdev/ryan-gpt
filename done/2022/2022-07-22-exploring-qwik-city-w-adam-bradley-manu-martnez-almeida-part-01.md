---
showLink: "https://www.youtube.com/watch?v=XoeJisRJjlo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida"
description: ""
publishDate: "2022-07-22"
coverImage: "https://i.ytimg.com/vi/XoeJisRJjlo/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation with the Qwik core team explores their new Qwik City meta framework, covering routing, data fetching patterns, and the evolution of modern web development practices.

## Episode Summary

This transcript features an in-depth look at emerging front-end technologies, focusing on the Qwik framework and its meta layer Qwik City. It begins by outlining the motivations behind Qwik’s architectural choices, emphasizing performance, lazy-loading, and the minimal JavaScript needed on initial page load. The discussion moves into the practicalities of SSR, describing how Qwik City handles routing, data fetching, and layout composition without incurring a significant client-side payload. Comparisons to other approaches—such as islands, partial hydration, and progressive enhancement—highlight the different philosophies shaping modern web frameworks. As the conversation unfolds, the speakers share real-world examples, including a demonstration of building a Hacker News clone, to illustrate Qwik City’s strengths and trade-offs. Throughout, they address technical hurdles—like deploying to serverless platforms and ensuring robust streaming support—while also underscoring the importance of developer experience and the evolving ecosystem that surrounds performance-focused frameworks.

## Chapters

### 00:00 - 05:55 – Stream Introduction and Setup

In the opening minutes, the host greets the audience and lays out the day’s agenda, explaining that the stream will spotlight the Qwik team’s latest developments. He mentions past experiences with Qwik and how the technology has evolved quickly since his last deep dive. These introductory moments orient listeners to the background context, particularly regarding the streamer’s prior attempts at building demos and benchmarking them. The conversation underscores the anticipation and enthusiasm around Qwik, framing it as a technology designed to challenge established norms in performance-driven web development.

The host also takes time to discuss his streaming setup, highlighting new audio and video equipment while inviting the audience to chime in through chat. This interactive element sets a casual yet engaging tone, encouraging viewers to participate and ask questions. By offering glimpses into both his technical environment and the day’s planned content, the host creates a foundation for a conversation that will blend hands-on code exploration with theoretical insights about modern framework design.

### 05:55 - 11:50 – Welcoming Adam and Manu from the Qwik Team

During this segment, the host formally introduces Adam Bradley and Manu Martínez-Almeida, two core Qwik contributors. They share short professional histories, citing their experiences working on frameworks like Ionic and Stencil, and how that led them to develop Qwik and Qwik City under Builder.io. The pair explains how their collective background has shaped their decisions around architecture, performance benchmarks, and the challenges of large-scale web solutions.

Listeners learn about the overarching goals of Qwik: primarily zero kilobyte JavaScript on initial load and an easy, composable developer experience. This portion also touches on the layering concept that Qwik uses—how the framework decouples server and client logic through distinct tooling. By emphasizing dogfooding and iteration, Adam and Manu hint at the rapid pace of Qwik’s enhancements, hinting at bigger shifts soon to come.

### 11:50 - 17:45 – Origins of Qwik and the Optimizer

Here, the conversation dives into the earliest stages of Qwik’s creation. Manu discusses how the initial vision for an ultra-fast, resumable framework set the path for experimenting with a Rust-powered optimizer. Building from the foundation of “zero JS” became a guiding principle, leading to design choices like the dollar-sign conventions that developers now see in Qwik’s code. This unique syntax allows the compiler to identify which parts of the code are interactive and which remain static.

Adam provides details on Qwik’s approach of ignoring traditional single-file components and focusing on local transformations. He highlights the incremental improvement Qwik enjoyed through months of feedback, where repeatedly refining the Rust optimizer brought significant developer-experience gains. The chapter concludes with both Adam and Manu expressing pride in how far Qwik has come, noting that their quest for a streamlined approach drove them to think differently about server and client boundaries.

### 17:45 - 23:40 – Qwik City: A Meta Framework on Qwik

Attention turns to Qwik City, described as the meta framework atop Qwik. Adam compares it to how Next.js layers on React, explaining that Qwik City aims to unify routing, data fetching, and page layout with minimal overhead. The team’s objective is to maintain Qwik’s philosophy of shipping minimal JavaScript, so they meticulously avoid monolithic code that typically appears in single-page apps. Steve’s tweet about “zero extra KB” for Qwik City becomes a point of discussion, underlining the surprise many developers feel at a full-featured meta framework carrying effectively no runtime cost.

Manu clarifies that Qwik City capitalizes on Qwik’s core approach of lazy loading everything from components to event handlers. The conversation illustrates how code splitting is essentially baked in at the atomic level: each event listener can function independently, resulting in impressively small overall payloads. They also preview how Qwik City will further push boundaries by bridging MPA and SPA modes, enabling a truly hybrid experience.

### 23:40 - 29:35 – SSR Benchmarks and Qwik’s Philosophy

In this window, the trio examines server-side rendering considerations. Adam notes how Qwik City’s rendering pipeline remains minimal because it trusts Qwik’s lazy loader to handle dynamic imports. The conversation moves into how Qwik’s architecture sidesteps typical bundler hacks that other frameworks must manage. Adam recounts attempts where he almost reimplemented solutions that Qwik inherently solves, reaffirming the uniqueness of Qwik’s model.

A deeper look reveals Qwik’s approach to SSR—where the idea is not merely about generating strings faster but avoiding unnecessary runtime code and ensuring transitions remain fluid. Adam points to early performance targets that spurred them to keep rethinking typical solutions for routing and rendering. These minutes offer insight into the core philosophy that Qwik City inherits from Qwik, aiming to drastically reduce the cost of interactivity.

### 29:35 - 35:30 – Data Fetching Patterns and Resource Components

This section transitions into a hands-on exploration of Qwik’s new data fetching APIs. Manu outlines how onGet handlers and “useEndpoint” let developers fetch server data and hydrate it in the UI without shipping extra JavaScript. The host compares it to other frameworks’ loader patterns, but notes how Qwik’s approach leans on partial hydration, ensuring only essential code ever reaches the client.

They discuss the “Resource” component that gracefully handles loading, success, and error states. It is reminiscent of Svelte’s await block, but the Qwik version integrates seamlessly into Qwik City’s file-based routing. The panel clarifies that this still works in an MPA paradigm—requests are made server-side, and only necessary bits go to the client. The segment highlights Qwik’s strong story for server fetching in a lean, composable fashion.

### 35:30 - 41:25 – Hybrid Single-Page and Multi-Page Navigation

Building on data fetching, the conversation shifts to how Qwik City unifies MPA and SPA behaviors. Manu reveals that turning on SPA navigation can be as simple as adding a single Qwik “link” component or a click handler, because Qwik resumes application state exactly where the server left off. This is possible without preloading an entire code bundle as typical SPAs do.

They compare it to how other frameworks force an early decision about whether to adopt an MPA or SPA, whereas Qwik City allows users to toggle these modes on a per-link basis. By employing a consistent SSR approach, Qwik City can handle partial re-renders client-side, bridging the gap between purely static pages and dynamic, JavaScript-driven flows. The presenters emphasize that this hybrid model broadens developer options rather than narrowing them.

### 41:25 - 47:20 – Breaking Down the Basic Starter

At this juncture, the host creates a new Qwik City application using the CLI, showcasing how the starter template includes routes, components, and a minimal folder structure. They note that everything adheres to Qwik’s convention-based style, from the root TSX file to layout components and endpoints. Adam’s impetus to keep everything small is exemplified in Qwik City’s minimal runtime footprint.

The host runs the dev server and walks through the scaffolded pages. He points out how local navigation triggers no extra network fetches, except for required interactive segments. Manu highlights how initial SSR is baked in, explaining that for static sections of the page, absolutely no JavaScript is sent. The conversation frames these defaults as crucial to Qwik’s mission of “shipping nothing until necessary.”

### 47:20 - 53:15 – Extending the Starter and Route Layouts

Attention focuses on how the default starter demonstrates nested routes, layout components, and named layouts. The host examines various placeholders in the code, like MDX support and nested folder structures, explaining how Qwik City stitches it all together at build time. Manu explains Qwik’s approach to layering components in an “always SSR first” mindset that then increments to client-side logic only if a user action demands it.

They also highlight unique features, such as exclamation points on layout files to break out of stacking and define wholly separate shells. Real-world scenarios like documentation layouts help illustrate why Qwik City’s flexible system is needed. The host notes that in more traditional frameworks, slicing layouts typically involves complex guard logic or specialized route definitions, whereas Qwik’s version remains straightforward.

### 53:15 - 59:10 – Implementing Head and SEO Features

In this stretch, the team explores how Qwik City injects metadata. The host stumbles upon “useDocumentHead” and clarifies how it merges head information from nested layouts. Adam compares it to Remix’s approach of layered data, so child routes can update meta tags without rewriting a global head. The result is an efficient system for building dynamic meta tags that can scale with large, multi-page applications.

Manu underscores that Qwik’s static analysis ensures no additional overhead for managing the document head. The discussion includes references to customizing the HTML tag, body attributes, and prerendered SEO data. The group comments on how the framework’s local-by-default philosophy keeps code physically and conceptually close to where it’s used, reducing confusion around global imports or scattered page wrappers.

### 59:10 - 01:05:05 – Migrating a Hacker News Demo

Here, the host begins porting an older Hacker News demo into Qwik City. He notes that while the original version used a rudimentary router, Qwik City’s structure is cleaner. He systematically replaces custom route logic with Qwik’s file-based system, highlighting the new data-fetching idioms. Step by step, he removes unneeded components like footers or placeholders, illustrating how Qwik City organizes a typical project.

Manu periodically offers suggestions on how to properly define endpoints and integrate advanced Qwik features. Listeners learn how Qwik City maps request parameters and query strings, ensuring minimal client code. This portion reveals that the meta framework gracefully handles path patterns and location objects without requiring a specialized library, reinforcing Qwik City’s promise of minimal overhead.

### 01:05:05 - 01:11:00 – Hands-On Data Fetching for Hacker News

Continuing the migration, the host implements an onGet handler that fetches data from a remote API. Manu clarifies that if a developer wants to isolate sensitive logic from the client, Qwik City’s approach ensures only the server side runs it. The host compares it to Remix or SvelteKit, pointing out the subtle distinctions that let Qwik remain exceptionally granular in lazy-loading.

They talk about the differences in controlling re-fetches or invalidations. While Qwik City does not yet offer the same built-in patterns as some frameworks for refreshing after mutations, it supports the fundamentals needed for a stable approach. This segment emphasizes that Qwik’s partial hydration concept extends to data, so no state is shipped if it’s not interactively needed.

### 01:11:00 - 01:17:10 – Creating a Resource Component for HN Stories

Over these minutes, the host demonstrates the Qwik “Resource” component to handle data states such as pending, resolved, and error. He draws parallels to Svelte’s “await” block, praising Qwik’s straightforward API. Manu discusses how Qwik seamlessly merges SSR results with client logic, guaranteeing an instantly rendered page that then hydrates selectively.

They also reveal that Qwik City’s build-time analysis ensures only the relevant interactive code arrives on the client. The host points out how major frameworks often require a single large bundle even for small interactions, something Qwik systematically avoids. This underscores Qwik’s underlying emphasis on shipping minimal JavaScript—particularly valuable for global audiences on slower connections.

### 01:17:10 - 01:23:15 – Partial, Progressive, and Resumable Concepts

The discussion ventures into deeper architectural territory, focusing on how Qwik addresses partial hydration, progressive loading, and truly resumable execution. Manu remarks that Qwik avoided bridging certain code paths for a long time, but recently introduced partial mechanisms to keep SSR data off the client if not needed. The host applauds this milestone, calling it a major leap that clarifies Qwik’s stance on shipping zero extraneous bytes.

In broad strokes, they highlight how modern frameworks are converging on similar concepts under different names: from React’s selective hydration to Astro’s islands. Qwik’s resumable approach differs because an interaction can skip repeated client boot-up costs. These minutes bring context to how Qwik City’s design flows from the framework’s deeper architectural aims.

### 01:23:15 - 01:29:10 – Drilling Into Lazy Loading Details

Here, Adam and Manu explain lazy loading’s trade-offs, acknowledging that while it defers initial load costs, it might cause momentary interactions to lag if not pre-fetched. They describe how Qwik City tries to predict user actions by analyzing events, so code for likely interactions is quietly fetched ahead of time. This system tries to keep the best of both worlds: minimal on first render and near-instant response for common user paths.

The host underscores the complexity of deciding which modules to prefetch, referencing advanced analytics-based solutions that track user flow. Qwik’s approach, in contrast, starts simple—prefetch likely paths and refine further if usage data suggests it. These minutes reveal the pragmatic side of building a meta framework that balances theoretical purity with real-world constraints.

### 01:29:10 - 01:35:05 – Integrating Comments and Collapsible Toggles

As the Hacker News demo expands, the host attempts to incorporate nested comments. This part shows how Qwik’s local reactivity allows toggling open/closed states without re-rendering entire pages. The host is especially excited by minimal code needed, as the toggle component handles state in isolation while the overall page remains static.

Manu elaborates that each toggle’s click handler only downloads the relevant snippet of JavaScript, so hundreds of collapsible comment threads won't balloon the bundle. The conversation showcases how this design neatly solves issues that plague typical single-page approaches, where mounting many interactive widgets leads to large, multi-megabyte downloads.

### 01:35:05 - 01:41:10 – Confirming Minimal Serialization in Qwik

In these minutes, the host inspects the page’s HTML, verifying Qwik’s partial hydration. He highlights how the only serialized parts belong to the small toggle states and not entire arrays of data. Manu explains that this “noSerialize” trick they once needed has been folded into the compiler. As a result, Qwik can detect which reactive stores must remain on the client.

Listeners learn the significance of removing large data structures from the final bundle and the page’s HTML, reducing memory usage. They reflect on frameworks that must re-run or re-deserialize everything on load. Meanwhile, Qwik stays finely grained, shipping only the signals essential for interactive bits.

### 01:41:10 - 01:47:05 – Weighing SSR Performance and Community Feedback

The conversation shifts to SSR raw performance. The host notes that Qwik uses Domino instead of JS DOM, but acknowledges that native string concatenation can speed up SSR dramatically if properly implemented. Manu hints at future refactors that might push Qwik’s SSR performance further. They also mention plans to refine streaming, vital for large pages.

The speakers praise the community’s rapid feedback loop in Qwik’s Discord. Frequent early adopters help pinpoint edge cases, spurring repeated improvements. This synergy between framework authors and engaged developers fosters momentum. Everyone agrees that once Qwik City documentation aligns with current features, the adoption curve could accelerate.

### 01:47:05 - 01:53:00 – Reflecting on Benchmarks and Next Steps

Here, they bring up the complexities of popular benchmarks that measure re-renders or 10,000-row tables. While partial or resumable frameworks can score well or poorly depending on the scenario, the host warns that traditional benchmarks do not always capture Qwik’s advantage of skipping hydration altogether. He shares a similar perspective on streaming, describing how straightforward numeric comparisons rarely reveal user experience benefits.

Manu speaks to short-term priorities—improving SSR string performance, refining the client runtime, and introducing single-page transitions. The segment ends with a broader acknowledgment that though Qwik remains a work-in-progress, the fundamentals are in place for robust performance in real applications.

### 01:53:00 - 01:59:20 – Sneak Peek into Single-Page Routing

Manu briefly reveals a proof of concept for Qwik City’s single-page routing. The host marvels that it only required minimal code changes, like injecting a small click handler on link components. Because Qwik can resume at the clicked element, massive top-down hydration is unnecessary. They note that more advanced scenarios like partial “HTML streaming” updates could also be possible, continuing Qwik’s pattern of localizing logic.

In explaining the reactivity, they emphasize that toggling from MPA to SPA is not a big switch in Qwik. Instead, it evolves from Qwik’s principle of capturing context at SSR and reusing it selectively. They compare that to other frameworks that require a single carve-out for spaMode or offline shells, praising Qwik’s organic bridging between conventional and modern patterns.

### 01:59:20 - 02:05:00 – Qwik City Deployment Options

Attention shifts to deployment strategies, including Netlify, Express, and Cloudflare. Adam notes that building Qwik City as a Vite plugin grants the benefits of the broader ecosystem for bundling, asset processing, and dev experiences. The team aims to supply small middleware wrappers for each platform, sidestepping complicated config files typical of other meta frameworks.

The host attempts a quick Netlify deploy, noticing that the entire code structure remains straightforward. They acknowledge that advanced serverless use cases might require manual steps to enable streaming on certain providers. Nevertheless, Qwik City’s minimal overhead means improved cold starts and resource usage on ephemeral instances.