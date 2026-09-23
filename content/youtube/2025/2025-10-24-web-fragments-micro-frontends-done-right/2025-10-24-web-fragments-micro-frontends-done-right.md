---
showLink: "https://www.youtube.com/watch?v=sneufVyPfiY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Web Fragments: Micro-Frontends Done Right?"
description: ""
publishDate: "2025-10-24"
coverImage: "https://i.ytimg.com/vi/sneufVyPfiY/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato explores React Server Component performance benchmarks, introduces Cloudflare's Web Fragments micro-frontend architecture, and discusses async-first framework design.

## Episode Summary

Ryan Carniato begins by analyzing a detailed benchmarking article comparing React data-fetching approaches, examining how client-side rendering, server-side rendering, and React Server Components with streaming affect metrics like LCP and interactivity. He concludes that streaming and suspense drive the real performance gains, not server components alone. He then publishes a piece on "isomorphic first" architecture, arguing that frameworks like SolidStart, TanStack Start, and SvelteKit share a common pattern built on streaming SSR, server functions, and isomorphic preloaders. Tanner Linsley joins to discuss this direction and the potential for server components within an isomorphic model. The stream's centerpiece features Igor Minar and Natalia from Cloudflare presenting Web Fragments, a micro-frontend solution combining Docker-like JavaScript virtualization with shadow DOM isolation, enabling independently deployed fragments to coexist seamlessly. Ryan then covers Tanner's critique of framework directives, explores what an async-first reactive framework would look like, demonstrates Solid 2.0's graph-based `isPending` utility, and addresses HTML parser quirks that cause hydration errors.

## Chapters

### 00:00:00 - Stream Setup and React Server Component Performance Analysis

Ryan opens the stream with brief technical difficulties before diving into a detailed benchmarking article examining whether React Server Components actually improve performance. He walks through the article's methodology, which uses Chrome DevTools with CPU and network throttling to measure LCP, interactivity time, and other metrics across different data-fetching approaches.

The analysis progresses from basic client-side rendering through server-side rendering without data fetching, then to server-side data fetching without streaming. Ryan highlights how fetching data on the server without streaming actually pushes back JavaScript loading and hydration, making the page feel slower despite theoretically faster total times. He explains why this was the state of the art during the Next.js Pages Router era and why many developers had a negative perception of server-side rendering at the time.

### 00:23:49 - Server Components, Streaming Results, and the Streaming Conclusion

The discussion continues through the article's Next.js benchmarks, comparing Pages Router and App Router approaches. Ryan examines how React Server Components with streaming finally deliver the expected performance improvements, combining fast LCP from server rendering with reduced interactivity gaps. He notes that the article's conclusion credits server components, but argues the real benefit comes from streaming and suspense rather than the component model itself.

Ryan points out that TanStack Start achieves similar performance in React without server components, using streaming alone. He critiques the conflation of streaming benefits with server component architecture and discusses the broader implications for framework design. The segment transitions into Ryan publishing his "isomorphic first" architecture article, arguing that modern frameworks like SolidStart, SvelteKit, and TanStack Start have converged on the same pattern of streaming SSR, server functions, and isomorphic preloaders.

### 00:52:43 - Isomorphic First Architecture and TanStack Start Discussion

Tanner Linsley joins the stream to discuss the isomorphic-first architecture that both SolidStart and TanStack Start share. Ryan traces the timeline of server functions across frameworks, from Solid's introduction in 2022 through Quick, Next.js, and eventually Svelte adopting them. They discuss how this architecture reflects the reality of post-initial-load app behavior where the client manages routing and state.

The conversation explores a novel approach to server components within an isomorphic model, where server functions return dynamic HTML templates that can be hoisted, preloaded, and composed without the waterfall problems of traditional React Server Components. They discuss how this treats server components as actual components rather than server elements, and how the client remains a single tree while the server rendering stays granular and controllable through data-fetching primitives rather than component composition.

### 01:24:07 - Web Fragments Introduction and Micro-Frontend Architecture

Ryan introduces the Web Fragments topic and welcomes Igor Minar and Natalia from Cloudflare. Igor explains how Web Fragments draws inspiration from backend microservices and Docker containerization, providing both micro-frontends and JavaScript virtualization for the browser. Natalia shares her background exploring micro-frontend solutions since 2017, including the limitations of module federation for large enterprise platforms.

The team demonstrates their e-commerce demo application where a React shell hosts a Next.js catalog fragment and a Quick shopping cart fragment, all running independently but composing seamlessly. They show the "piercing" feature where server-rendered fragments appear instantly through non-existent client-side rendered content, making fragments interactive before the legacy host application even loads. The demonstration reveals cross-fragment communication using Broadcast Channel API and shows how fragments maintain full functionality while being completely independent in their technology stacks and deployment.

### 01:46:09 - Web Fragments Technical Deep Dive: Virtualization and Reframing

Igor demonstrates the core virtualization technology called "reframing" that powers Web Fragments. He shows how JavaScript executes in hidden iframes while DOM operations are monkey-patched to target shadow roots in the main document, creating an illusion that tricks frameworks into believing they're running in standalone documents. The demonstration reveals how document.body, querySelector, and appendChild all work correctly within the virtualized environment.

The deep dive covers how script tags are made inert through HTML spec behavior around internal execution slots, how the gateway middleware routes requests between fragments and the host application, and how CSS isolation is achieved through declarative shadow DOM. Igor shows Cloudflare's production dashboard running Web Fragments, including the piercing effect and even nesting the massive Zero Trust dashboard as a fragment within the main dashboard, demonstrating the technology working at enterprise scale with applications containing hundreds of routes.

### 02:19:10 - Fragment Communication, Isolation Details, and Production Usage

The stream addresses audience questions about state sharing between fragments, authentication, content security policies, and local storage isolation. Igor and Natalia explain that fragments share the same origin, DOM, browser location, and history, while JavaScript execution is fully isolated through reframing. They discuss their approach to CSP policies per fragment and how routing works with multiple vanilla framework routers operating simultaneously.

Igor demonstrates the performance overhead using Ryan's Solid Sierpinski triangle demo running inside a Web Fragment, showing negligible performance impact from the virtualization layer. The conversation covers the Cloudflare dashboard modernization strategy, where they're incrementally replacing an eight-year-old monolithic React SPA by wrapping it as a fragment within a new shell, and their roadmap toward 1.0 including multi-fragment SSR support, out-of-order streaming, and potential browser standardization efforts for writable DOM and scoped custom element registries.

### 03:25:24 - Out-of-Order Streaming for Fragments and Standards Discussion

Igor and Ryan discuss a planned feature for multiplexing multiple HTML streams through a single HTTP connection, enabling out-of-order streaming across fragments. The approach would flush available content from each fragment immediately, mark where more content will arrive, and route subsequent chunks to the correct fragment locations on the client side, similar to how framework-level out-of-order streaming works with suspense boundaries.

The conversation covers the Web Fragments roadmap including atomic DOM move operations, scoped custom element registries, shadow realms for potential browser-native virtualization, and writable DOM standardization. Igor shares concerns about long-term sustainability of the monkey-patching approach, drawing parallels to Zone.js breaking when async/await was introduced. The segment concludes with the guests departing and Ryan reflecting on how Web Fragments completes a story that teams like eBay's Marco team had been working toward for years.

### 03:49:03 - Framework Directives Debate and Use Client Controversy

Ryan examines Tanner Linsley's blog post arguing against framework directives like "use client" and "use server," alongside responses from the broader community. He traces the history of server function syntax from Solid's dollar-sign convention through Quick's approach to React's directives, explaining how Jared from Bun originally convinced him that directives were a sound mechanical approach for bundler handling.

The analysis weighs both sides: directives provide self-identifying scope declarations that prevent misuse and aid composition, but they overload existing JavaScript syntax in ways that create ecosystem confusion and tooling lock-in. Ryan argues that much of the community's frustration stems specifically from "use client" forcing developers to denote what they consider the default behavior, rather than from "use server" which marks a genuinely special environment. He connects this back to the isomorphic-first discussion, suggesting the controversy would largely disappear if frameworks only required server-specific directives.

### 04:17:54 - Designing an Async-First Framework

Ryan presents his thought experiment on what a framework designed around async-first principles would look like. He argues that transitions would need to be implicit in every event handler and effect callback, that pending state would be determined by querying the reactive graph rather than from a global flag, and that state changes would need to apply asynchronously like React's batching model to prevent torn states across entangled async operations.

The technical exploration covers how push-based reactive algorithms like Milo's R3 become more attractive in this model since deferred commits eliminate the need for early stabilization on reads. Ryan draws diagrams comparing signal notification patterns across standard push-pull systems, React's batched approach, and R3's single-pass traversal. He demonstrates that while theoretically superior, the performance differences between reactive algorithms rarely translate to meaningful real-world impact, especially once concurrency features add their own overhead.

### 05:17:22 - Solid 2.0 isPending Demo and Reactive Graph Composition

Ryan demonstrates Solid 2.0's `isPending` utility, showing how it can query any node in the reactive graph to determine if its value is transitioning. He builds on the Ryan Florence cascading select demo, adding a third dropdown and modifying dependency rules to show how the reactive graph enables compositional pending states without explicit transition wiring.

The demonstration highlights that `isPending` works identically whether transitions are present or not, making it a universal mechanism for building loading affordances in components. Ryan argues this approach is superior for design components because suspense boundaries create inner-wins behavior that fragments loading control, while `isPending` lets component authors handle loading states locally. He contrasts this with imperative approaches, questioning how procedural loading-state management would scale when composing multiple interdependent components.

### 05:43:39 - This Week in JavaScript, Hydration Errors, and Stream Wrap-Up

Ryan covers miscellaneous topics including the Vite documentary, his channel reaching 20,000 subscribers, and community reactions to Remix 3's imperative patterns. He addresses a viral tweet complaining about React hydration errors from invalid HTML nesting, explaining that this is a fundamental web platform issue where the HTML parser auto-corrects malformed markup in ways that break declarative UI frameworks' assumptions about DOM structure.

The discussion expands into how HTML, JavaScript, and CSS all share a forgiving design philosophy that creates complications for modern frameworks, drawing parallels to TypeScript adding strictness to JavaScript. Ryan reflects on the tension between immediate-mode and retained-mode rendering approaches, noting that even immediate-mode systems eventually implement retention for performance. The stream closes with Ryan previewing upcoming Solid 2.0 work and noting that Svelte community members have already opened PRs for `isPending`-like utilities inspired by his demonstrations.