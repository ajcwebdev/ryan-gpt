---
showLink: "https://www.youtube.com/watch?v=jfT7aEoeaGE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Fresh"
description: ""
publishDate: "2022-07-08"
coverImage: "https://i.ytimg.com/vi/jfT7aEoeaGE/maxresdefault.jpg"
---

## Episode Description

A comprehensive discussion covering modern JavaScript frameworks, performance strategies, and the speaker’s first impressions of Deno’s new Fresh framework, all explored in a nearly four-hour session.

## Episode Summary

In this extended conversation, the speaker provides a wide-ranging examination of modern web development, focusing particularly on JavaScript frameworks, server-side rendering approaches, and performance optimization techniques. Beginning with observations about e-commerce demands and user experience, the speaker highlights why speed and resource efficiency are increasingly critical. They compare various frameworks—such as React, Astro, and Marco—and examine the architectural differences that affect how each handles hydration and data fetching. Along the way, they introduce Deno’s Fresh framework, illustrating how its island-based architecture streamlines server-client interactions and potentially reduces payload size. The talk further explores partial hydration concepts, route handling, documentation challenges, and open-source sustainability. Throughout, the speaker balances theoretical insights with real-world examples, underscoring how these technologies are evolving to handle large-scale applications more responsively while maintaining developer flexibility.

## Chapters

### 00:00 - 06:00 Introduction and Initial Observations  

The speaker opens by explaining that it has been a while since their last live session, mentioning recent personal travels and a desire to catch up on the ever-changing JavaScript ecosystem. They briefly touch on what they missed while away, referencing performance testing streams and new features in various libraries. Highlighting e-commerce as a sector highly sensitive to performance metrics, the speaker sets the stage for how site speed directly influences user experience and revenue. This frames the overall theme: the importance of efficient frameworks.

They note that their primary interests revolve around frameworks, server-side rendering, and hydration costs that arise once JavaScript hits the client. Early on, they connect current innovations—such as Bun, Deno Deploy, and Cloudflare Workers—with an emphasis on how these runtimes are shaping server performance. The speaker anticipates that improved routing and partial hydration strategies will help unify multipage (MPA) and single-page (SPA) approaches. This segment introduces the main goal of the discussion: to explore toolchains and frameworks with an eye toward real-world performance gains.

### 06:00 - 12:00 E-Commerce Performance and MPA vs. SPA  

Building on the e-commerce example, the speaker describes how large sites prioritize minimal page-load times to ensure better user engagement and sales conversions. They recount specific performance tests comparing Amazon, Walmart, and a Marco-based prototype for Kroger, illustrating how shipping less JavaScript can dramatically boost real-world metrics. The significance of multipage applications (MPAs) becomes apparent: although single-page apps have reigned in developer popularity, MPAs are often better at serving critical, content-heavy pages efficiently.

They emphasize that focusing on micro-optimizations—like partial hydration and selective script loading—can yield substantial benefits. The speaker also highlights how frameworks must balance user experience with developer ergonomics, acknowledging that engineering teams face tough decisions when handling large codebases. As an overarching theme, the segment underscores that the MPA versus SPA debate remains unresolved, and developers should tailor solutions based on project requirements. This chapter lays groundwork for deeper dives into the performance considerations intrinsic to each architectural pattern.

### 12:00 - 18:00 Early Framework Evolution and Documentation  

The conversation shifts to the evolution of frameworks, from early libraries such as Knockout to modern tools like React, Vue, Svelte, and Solid. The speaker notes how React transformed front-end thinking, introducing component-based architectures that influenced many subsequent frameworks. They bring up how the shift toward SSR and hydration introduced added complexity, stressing that thorough documentation becomes paramount. This leads to reflections on Rich Harris’s emphasis on docs for Svelte and Dan Abramov’s extensive work documenting React’s latest features.

They point out how documentation is not just a reference but also a comprehensive guide that shapes how developers think about and implement frameworks. The speaker mentions the considerable effort going into React’s new documentation, praising the attention to detail. They highlight the ongoing challenge of making complex SSR solutions understandable, especially given the range of build tools and configurations now available. The segment ends by stressing that well-organized docs help teams adopt advanced techniques—like partial hydration—without feeling overwhelmed.

### 18:00 - 24:00 Universal Rendering and Reactive Models  

Here, the speaker delves into the idea of universal rendering, noting that reactivity engines like Solid and even older libraries like MobX can potentially drive multiple rendering outputs. They mention Yehuda Katz’s new universal rendering proposal, likening it to how Solid’s reactive core can theoretically map to various renderers. The conversation underscores that “universal” solutions are tempting but often clash with the fundamental differences in how frameworks handle state updates.

They illustrate these divergences through an example: rewriting a React component in four frameworks yields different console logs and update timings due to variance in reactivity. The speaker emphasizes that no single approach can satisfy all frameworks simultaneously, even though standardizing on certain runtime aspects is beneficial. This section highlights the difficulty of bridging libraries with dissimilar update models and the trade-offs that developers must consider when aiming for more portable, universal architectures.

### 24:00 - 30:00 Performance Benchmarks and Multi-Front Runtimes  

Performance metrics again take center stage as the speaker talks about Lighthouse scores, user flow tests, and real user monitoring (RUM). They warn that simple benchmarks can be misleading, demonstrating how partial hydration or lazy loading can “cheat” a metric. The speaker also addresses the complexities faced by large organizations like Facebook, describing how debugging performance regressions can extend far beyond basic page speed tests and into deeper application logic.

They then turn attention to how multiple JavaScript runtimes—Node, Deno, Bun, and Cloudflare Workers—are converging on standard APIs. This is important because frameworks built for Node historically had to rewrite or polyfill features to run on other runtimes. With standardized request-response objects and similar Edge infrastructure, the lines between deployment targets are becoming more blurred. This trend can ultimately accelerate performance optimizations while giving developers more choices in how and where to run code.

### 30:00 - 36:00 Bun’s Emergence and Future of Tooling  

Bun’s growing popularity arises here as the speaker highlights how it combines a bundler, transpiler, and runtime in one high-performance package. They describe Bun’s sudden star-count explosion on GitHub, attributing it to the community’s eagerness for a drop-in speed improvement. The speaker praises Bun’s single-minded focus on speed, noting that its creator continually patches any performance regressions compared to Node.

They point out that tools like Bun, ESBuild, and SWC have changed the JavaScript build ecosystem, reducing compile times drastically. For frameworks like Solid, a specialized compiler is crucial, so the speaker muses about whether Bun could accommodate advanced transformations. Despite Bun’s appeal, the speaker acknowledges potential sustainability issues for one-maintainer projects and advises watchers to contribute or support such efforts. This chapter concludes with optimism that Bun and related tools will keep raising performance standards across the ecosystem.

### 36:00 - 42:00 Tying Open Source to Sustainability  

Shifting focus, the speaker addresses the broader challenges of open-source governance, especially for individuals or small teams. They mention that many popular libraries—like TanStack and astro—rely on a handful of core maintainers, all of whom must balance day jobs with open-source responsibilities. The speaker credits corporate sponsorships, philanthropic models, and employing maintainers directly as partial but not universally perfect solutions.

They also hint at the subtle tension between the “punk rock” ethos of open source and large corporate involvement. While significant corporate backing offers stability and resources for improvement, it can raise concerns about authenticity or over-commercialization. The speaker encourages contributors to engage responsibly—filing issues, submitting small PRs, or providing documentation fixes—emphasizing that each step, no matter how modest, supports project longevity. They wrap up by reaffirming that each open-source ecosystem must experiment to find sustainable, equitable pathways.

### 42:00 - 48:00 T3 Stack and Self-Created Frameworks  

The conversation moves toward specialized frameworks like create-t3-app, developed by Theo and his community. The speaker finds it fascinating that a community organically assembled an opinionated React stack integrating next.js, TRPC, Prisma, and other tools. This “grassroots meta-framework” contrasts with top-down corporate solutions by offering tight TypeScript integration and developer-centered defaults.

They highlight the flexibility of modern build tooling, which allows communities to unify existing best-of-breed components. This approach reduces friction for developers who share similar preferences, while still benefiting from proven libraries. The speaker draws parallels to RedwoodJS, explaining how both aim to simplify React-based full-stack development. Ultimately, this segment underscores the growing ease with which developers can craft new frameworks from preexisting parts, shaping ecosystems around specific user or project needs.

### 48:00 - 54:00 Embracing Passion Projects in Tech Careers  

Reflecting on personal journeys, the speaker discusses how working on open-source side projects can yield unexpected professional dividends. They share anecdotes about personal projects that landed them roles at companies like Netlify, eBay, or others, stressing that genuine enthusiasm often sparks opportunities. Yet, they caution that such dedication may not be sustainable for everyone, especially those balancing family or other commitments.

They remind listeners that motivation differs across individuals: some thrive on passion projects, while others prefer stable corporate paths. Nevertheless, open source offers a unique outlet to develop expertise, collaborate globally, and build a visible portfolio. They advise newcomers to begin by using a library, identifying friction points, and filing targeted issues or PRs. In concluding, they underscore that sustainable enthusiasm drives innovation, shaping both personal growth and the overall open-source landscape.

### 54:00 - 1:00:00 Routing, Reactivity, and Looking Ahead  

Transitioning back to technical deep-dives, the speaker touches on advanced routing topics, referencing recent streams and discussions involving React Router’s creators and the complexities of partial data-loading. They link routing changes to broader goals in performance, noting that the next wave of solutions must handle SSR, code-splitting, and parallel data fetching seamlessly.

Reactivity frameworks like Solid or Svelte revolve around updating minimal parts of the DOM, but each handles state differently. The conversation reaffirms that deeper synergy between routing and reactivity can further reduce overhead, especially if data-loading logic shifts into server-driven components. The speaker cites the potential to unify MPA-like server transitions with finer-grained in-browser state updates, bridging the gap between page-based frameworks and modern SPA reactivity. This sets up further exploration of how tools such as Fresh try to reconcile these demands.

### 1:00:00 - 1:06:00 Introduction to Deno’s Fresh  

At this point, the speaker formally introduces Fresh, Deno’s new island-based framework built on Preact. They outline its main selling points: no explicit build step, on-demand compilation, and a strong focus on delivering minimal JavaScript to the client. The speaker sees Fresh as Deno’s attempt to spotlight an MPA approach that uses partial hydration concepts by default, distinguishing it from typical SSR frameworks.

They also admire how Fresh organizes code with a clear separation between server-only routes and interactive “islands,” praising the convenience of not worrying about bundler configurations. This approach highlights a “server by default” philosophy, letting developers bring in client-side code selectively, which can reduce client payload. The speaker anticipates that this approach might become more common, as other frameworks strive to unify the quick load times of MPAs with the smooth transitions found in SPAs.

### 1:06:00 - 1:12:00 Setting up a Fresh Project  

The speaker walks through the initial steps of creating a Fresh project with Deno’s command-line tooling. They note how the framework scaffolds a basic file structure, clearly demarcating routes from “islands.” This layout simplifies the mental model: any component living outside the islands folder runs purely on the server, while interactive widgets go inside islands. The speaker contrasts this approach with Astro’s or Next.js’s patterns, explaining that Fresh’s minimal bundling is a distinctive experience.

During setup, they address import maps and how Deno fetches dependencies directly from URLs, removing the conventional node_modules directory. Although it feels unfamiliar at first, the speaker grows to appreciate the tidy structure. They briefly discuss how this could influence local debugging habits, referencing the learning curve in exploring code without a traditional package manager. By the end of the segment, the project runs locally, validating that “no build step” indeed works in practice.

### 1:12:00 - 1:18:00 Building the Hacker News Example: Initial Steps  

The speaker decides to adapt their classic Hacker News performance test to Fresh, explaining that this example is a reliable way to test recursive partial hydration. They outline how previous frameworks—Astro, SvelteKit, Remix—handle data fetching and dynamic routing, anticipating that Fresh’s route-based folder structure will work similarly. This test includes rendering story lists, top-level data, and nested comments.

They start by creating the first route to fetch and display top Hacker News stories. The speaker references how Fresh conveniently auto-injects props into components for server-rendered data, skipping heavy boilerplate. They set up a basic layout file and integrate global CSS. Fresh’s “zero config” style emerges once again, as no specialized webpack or Vite settings appear necessary. Despite encountering small differences in function signatures, they confirm that the fundamental SSR approach is fairly straightforward.

### 1:18:00 - 1:24:00 Handling API Requests and Dynamic Params  

Next, the speaker examines how Fresh handles dynamic routing, noting that files in the routes folder can represent parameterized paths. They find an API route example and compare it to how other frameworks define endpoints. The conversation highlights how Fresh allows for custom handlers in each route file, bridging server logic and front-end rendering without additional plugins.

They implement the standard Hacker News data-fetch logic, verifying that fetch is built into Deno’s environment. The speaker underscores how easily they can pull in external data, pass it to the route’s default component, and produce a fully rendered page. They confirm that this flow simplifies building server-driven pages, reinforcing Fresh’s mission to keep everything typed, structured, and minimal. By now, the example successfully displays top stories, albeit with navigation still needing refinement.

### 1:24:00 - 1:30:00 Layout, Headers, and Basic CSS  

As the speaker refines the example, they focus on creating a consistent layout component for the site’s header, central wrapper, and shared styles. They notice that Fresh lacks a single “document” file, so each route includes whatever meta tags it needs, supplemented by a built-in `<Head>` component. The speaker imports global CSS and clarifies how to position styles for site-wide usage.

They remark on minor details like class naming, color variables, and the challenges of ensuring proper accessibility. Even though Fresh does not enforce a specific CSS strategy, the speaker praises its straightforward linking from the `<Head>` block. The process underscores Fresh’s preference for standard web features—HTML modules, link tags, and so on—rather than heavy customization. This design choice keeps the mental overhead low, letting the developer shift quickly from styling to routing or data-fetching tasks.

### 1:30:00 - 1:36:00 Navigating Between Pages  

Having constructed a basic index page, the speaker tackles multi-page navigation. They confirm that Fresh’s route-based approach auto-generates navigation between `/` and other defined routes, but that deeper customization requires manual links in the layout. The speaker updates anchor tags and verifies that the MPA transitions work as expected, reloading pages on the server side.

They contrast this to SPA solutions like Remix or Next.js, which support client-side routing for seamless transitions. Fresh, however, prioritizes smaller JavaScript bundles, so it adheres more to a traditional MPA model. The speaker sees this as acceptable for many content-driven websites, especially given the performance trade-offs. By finishing the basic nav, they inch closer to a complete Hacker News clone that demonstrates Fresh’s approach to minimal client-side code.

### 1:36:00 - 1:42:00 Introducing Interactive Islands  

In this segment, the speaker moves from static pages to interactive components. They explain that Fresh uses “islands” for client interactivity—only the code in an island folder is bundled and shipped to the browser. As a test, they implement a simple comment component that relies on state to expand or collapse nested replies. The speaker references partial hydration theories, clarifying that each island hydrates independently.

They note how, once an island is placed into a route component, Fresh automatically serializes its props and includes a hydration script. This architecture can drastically reduce total JavaScript if the site only needs a few widgets. Comparing it to Astro’s islands or Marco’s finer-grained approach, the speaker sees that Fresh’s model remains relatively easy to implement for standard scenarios. Each island is essentially a self-contained Preact snippet, preserving good developer experience while sparing the rest of the page from rehydration.

### 1:42:00 - 1:48:00 Recursive Comments and Partial Hydration Challenges  

Eager to optimize further, the speaker attempts a more sophisticated pattern: nesting comment components within client toggles so that only the show/hide logic lives in an island. They explain that frameworks like Astro, Quick, and Marco can handle “recursive partial hydration,” passing server-rendered content to smaller interactive boundaries. The aim is to remove data serialization overhead for each nested comment.

However, they run into issues: Fresh crashes when the server component tries to wrap itself in an island recursively. The speaker suspects that Fresh might lack or has not yet fully implemented deeper support for nested partial hydration. Though the approach fails, the test clarifies areas for potential improvement in Fresh’s code-splitting or hydration strategy. Despite this hiccup, the speaker notes the dramatic benefits such a pattern can bring to massive comment trees, referencing eBay’s success with similar concepts in Marco.