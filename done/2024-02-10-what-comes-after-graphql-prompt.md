---
showLink: "https://www.youtube.com/watch?v=gfKrdN1RzoI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "What Comes After GraphQL?"
description: ""
publishDate: "2024-02-10"
coverImage: "https://i.ytimg.com/vi/gfKrdN1RzoI/maxresdefault.jpg"
---

## Episode Description

An in-depth conversation exploring modern approaches to web development, touching on GraphQL, server components, caching strategies, single-flight mutations, and practical patterns for building interactive apps.

## Episode Summary

This discussion begins by examining the motivation and features behind GraphQL, including how schemas and denormalized caches help streamline data fetching in complex applications. It then compares alternative solutions like tRPC, TanStack Query, and Remix-style loaders, highlighting trade-offs in cache management and client- versus server-side coordination. The conversation shifts toward single-flight mutations and how they eliminate extra network requests, improving both user experience and performance. Along the way, it addresses server components, their potential value, and whether they truly replace data-centric models or simply present a different method. Throughout, the speaker emphasizes practical strategies—such as consolidating data needs and streaming partial responses—to achieve more efficient rendering without complicating workflows. By the end, the conversation underscores that no single technology reigns supreme, and developers should choose the most suitable approach based on application needs, deployment requirements, and desired developer experience.

## Chapters

### 00:00 – 00:15 | Introducing the Topic and GraphQL Background

In this opening segment, the host sets the stage by reflecting on past experiences with data-fetching in web applications, citing personal work with ORMs and initial excitement about GraphQL. The discussion covers how GraphQL addressed the shortcomings of REST—especially around n+1 queries and overfetching—by allowing clients to specify exactly the data they require. It also explores how GraphQL’s schema-centric approach helped large organizations unify diverse backends under a single, type-safe contract.

By illustrating the historical context, the speaker demonstrates why GraphQL felt so transformative upon release. They note that technologies like Relay and Apollo capitalized on GraphQL’s flexibility, enabling developers to co-locate data requirements with UI components. However, they acknowledge that, while these tools were powerful, they introduced added complexity through normalized caching and sophisticated query merging. This sets the foundation for a deeper look at alternative patterns and emerging methods in subsequent chapters.

### 00:15 – 00:30 | The Rise of Query Caching and tRPC

Here, the conversation transitions to how developers tried to reduce the complexity of fully normalized GraphQL clients. The speaker highlights libraries like Urql or React Query, which simplified client-side caching by using a query-based approach rather than deeply normalized data. They explain that query caching often proves sufficient for many applications, even though it may not reach GraphQL’s peak efficiency in certain edge cases.

The focus then shifts to tRPC, a library that uses TypeScript on both client and server to provide end-to-end type safety without the overhead of a separate GraphQL schema. Through examples of typical SaaS use cases, the speaker shows why smaller teams especially appreciate tRPC’s simpler approach. Although it lacks some of GraphQL’s advanced capabilities, its streamlined nature often meets practical needs and can integrate nicely with solutions like TanStack Query for caching and invalidation.

### 00:30 – 00:45 | Remix-Style Loaders and the Shift in Data Patterns

During these minutes, attention moves to Remix-style loaders and actions—an approach that centralizes data retrieval at the route level. The speaker draws parallels to older getServerSideProps patterns in Next.js, highlighting that the remix approach aims for clarity and directness, though it sometimes leads to re-fetching entire pages. By comparing it to query caching systems, they underscore how different philosophies prioritize simplicity or granularity.

They also credit Remix for championing “optimistic updates” using ephemeral states that avoid messy client-side cache writes. This approach, they note, eliminates reams of boilerplate typical in older caching libraries. Still, the speaker concedes that some advanced usage requires a combination of route-level data loading and local solutions for partial updates, prompting broader questions about whether an even more unified model could exist.

### 00:45 – 01:00 | GraphQL, React Query, and the Sweet Spot

In this section, the speaker returns to the advantages of GraphQL’s sophisticated cache and fine-grained updates, noting that it still stands as a pinnacle of efficiency for large-scale or multi-team environments. They point out, however, that many developers don’t need that level of complexity, since simpler approaches can solve most day-to-day problems. This naturally connects to a discussion of React Query and tRPC, which provide type-safe, granular caching patterns at a fraction of GraphQL’s overhead.

The speaker contrasts these techniques with solutions like Remix loaders, observing how each approach sits on a spectrum of complexity. While GraphQL excels in specific enterprise scenarios, the majority of mid-sized apps can comfortably reside in a “sweet spot” where React Query or tRPC handle caching and type validation with fewer pitfalls. They acknowledge that no single approach fits everyone, but encourage deeper exploration of simpler paradigms for everyday work.

### 01:00 – 01:15 | Revisiting Server Components and Their Motivation

Now, the host explores how React’s server components entered the picture, originally thought of as a natural evolution beyond GraphQL. They describe how a single request could, in theory, gather all necessary data on the server, sidestepping the client waterfalls typical of naive REST patterns. This leads to a recap of how React server components promise to reduce bundle sizes by pushing more logic to the server, leaving only essential interactive pieces on the client.

Yet the conversation highlights recurring questions: Do server components truly simplify data flows, or simply shift complexity? The speaker points out that standard REST or tRPC approaches can already achieve single-request data aggregation if carefully structured. They also mention how the React approach might encourage scattering data requirements across multiple files, introducing compiler-level or architectural complexities reminiscent of GraphQL fragments, suggesting that “pure” solutions are seldom straightforward.

### 01:15 – 01:30 | Single-Flight Mutations: A Practical Alternative

In this portion, the speaker unveils an approach they call “single-flight mutations,” which allows posting data to the server and streaming back exactly what the new route needs—without a second round trip. They describe how this technique improves performance by merging mutation and subsequent data fetch into one transaction, reducing the typical post-and-then-get sequence. This idea mirrors some benefits claimed by React server components, but it can be implemented using plain server functions and minimal overhead.

The discussion details how such mutations integrate neatly with frameworks that provide route-level caching and actions. By associating cache invalidation keys with specific server endpoints, developers can achieve granular updates without writing specialized client-side logic. The speaker walks through an example of editing notes or to-do items, illustrating how partial streams can enhance user experience while maintaining robust developer ergonomics—no new architecture is strictly required.

### 01:30 – 01:45 | Demonstrating Solid’s Approach with Server Functions

Shifting to a concrete example, the host showcases how Solid Start implements single-flight mutations with server functions. They walk through route definitions, form submissions, and action endpoints, revealing that the same system covers both SSR and client-side rendering modes. The host underscores the significance of these isomorphic functions, as they can be called from any environment and return typed data without requiring a separate code generation step.

They also emphasize how this approach gracefully handles edge cases like partial invalidation, parallel data fetching, and seamless streaming transitions. By drawing a direct comparison to frameworks like Remix, they note how optimistic UI updates remain simple, with ephemeral states that do not require manual cache rewriting. Listeners get a glimpse into the synergy between typed server functions and front-end reactivity, a pattern that offers a middle ground between elaborate GraphQL setups and naive fetch calls.

### 01:45 – 02:00 | Code-Splitting, Bundle Size, and Performance Metrics

Here, the conversation shifts to the topic of bundle size and how “islands” or partial hydration strategies affect the final amount of JavaScript sent to the client. The speaker references examples, noting that code needed for a particular route is only fetched when a user navigates there. They show how libraries like Marked or date formatters are excluded unless the user visits editing components, illustrating how modern bundlers can keep initial page loads lean.

The discussion underscores that sophisticated client-side caching isn't always the only path to a quick initial render. By carefully splitting code and streaming only essential pieces, developers can significantly shrink their app's footprint. The speaker highlights real project stats, including a Solid Start application that weighs in at a few dozen kilobytes, and compares these results to large frameworks that default to sending more code, championing a thoughtful approach to code distribution.

### 02:00 – 02:15 | Islands Architecture in Other Frameworks

Continuing with performance themes, the host examines how “islands” architecture has been adapted in various frameworks. They mention Astro, Fresh, and Marco, each employing strategies that hydrate only the interactive components. This method differs from React server components by treating non-dynamic portions of a page as static HTML, which can be served quickly and without hydration cost.

The speaker praises these approaches for their ability to drastically improve Lighthouse scores in heavily content-focused pages like news sites or blogs. They point out that while Astro and Fresh emphasize static content, they do still allow advanced dynamic behavior, making them a compelling alternative for those who want to limit JavaScript overhead. The takeaway is that frameworks are converging on solutions that trim costs in different ways, illustrating a wealth of viable architectural patterns.

### 02:15 – 02:30 | Server Components vs. Alternative Rendering Models

In this segment, the talk zeroes in on how React’s server components differ from patterns in frameworks like Solid or Quick, where reactivity and resumability can shift the conversation. The speaker stresses the importance of clarifying terms: not every solution that runs components on the server is exactly the same as React’s “server components” architecture. Some frameworks, for example, can promote or demote components between server and client contexts without rigid boundaries.

They highlight that these distinctions matter for routing, data consistency, and state management. Certain frameworks handle partial updates by sending small data patches; others rely on re-running entire sections of a page. Ultimately, each approach reflects a particular philosophy—whether it be highly data-centric or heavily view-centric. The conversation encourages listeners to look at deeper structural choices rather than just focusing on buzzwords like “server components.”

### 02:30 – 02:45 | Infrastructure Costs and Trade-Offs

Now the speaker touches on the reality that advanced server-driven solutions often require new infrastructure considerations, such as server-side caches or durable objects. They note that while these capabilities can bring big wins in performance or code simplicity, they may also move developers away from purely stateless, globally distributed approaches. As a result, smaller teams or projects might find it excessive to manage these caching layers.

They further point out that frameworks like Solid Start attempt to solve “just enough” so that the developer can remain agnostic of deeper platform choices, unless their app truly needs them. This leads to reflections on how we reached the modern era of server-driven UIs and the hidden costs behind each approach. Listeners gain a clearer perspective on potential infrastructure demands, from serverless backends to persistent data objects, enabling better-informed decisions.

### 02:45 – 03:00 | Revisiting Performance Benchmarks and Wasm

During this interval, the conversation explores performance discussions that branch outside of React-based solutions, including mentions of frameworks built in WebAssembly (Leptos in Rust, for instance). The speaker highlights a Hacker News benchmark as a yardstick for how well different rendering models handle large amounts of content. Observations show that Wasm-based solutions can match or exceed some JavaScript frameworks in certain metrics, though startup overhead may differ.

These examples reinforce the importance of measuring real-world scenarios and acknowledging that many tools can achieve fast initial loads and responsive updates. The host urges developers to test their workloads rather than rely solely on hype or partial data. By looking beyond the standard JavaScript ecosystem, they show that innovative approaches can challenge long-held assumptions about SSR, hydration, and overall performance.

### 03:00 – 03:15 | Reflecting on React’s Original Philosophy

Shifting gears, the host delves into React’s early principles, recalling the era when React touted explicitness, minimal abstractions, and a component-based perspective that simplified the old MVC world. The speaker laments how those ideals, once heralded by early adopters, have become more convoluted with hooks, complex concurrency features, and intricate compiler tools.

The conversation underscores that a similar spirit animates frameworks like Solid, which adopt signals to handle data reactivity without sacrificing React’s core mantra of unidirectional flow. They credit React for laying a foundation but observe how new frameworks try to preserve clarity while advancing performance techniques. The segment invites the audience to appreciate React’s history and see how its guiding concepts still shape modern front-end development, albeit in unexpected ways.

### 03:15 – 03:30 | Lowercase Anchors, Routing, and Composability

In these minutes, the talk tackles a seemingly small yet meaningful detail: whether to use a dedicated `<Link>` component or a standard `<a>` tag for client-side navigation. The host discusses how frameworks like Svelte embrace regular anchor tags, delegating routing logic behind the scenes, while others define custom link components to handle base paths or route transitions.

They argue that relying on standard HTML elements can improve composability and let external design systems integrate more seamlessly. Nevertheless, frameworks that route via components may offer convenience features like automatic base path handling. This gentle debate encapsulates larger questions about when to wrap native elements and when to keep them intact to preserve web fundamentals.

### 03:30 – 03:45 | Weighing Server Actions and Their Limitations

Here, the focus returns to server actions—those special calls that unify data updating and logic on the back end. The speaker contrasts them with conventional REST or tRPC, noting how frameworks like Next or Remix aim to hide the idea of explicit endpoints. While server actions reduce boilerplate, they also tie the developer to a specific approach for posting data and fetching results.

Questions arise about whether such actions can handle stateful scenarios elegantly or if the broader ecosystem truly needs to adopt shared caching servers. The host emphasizes that no single solution excels at every scale. They suggest combining simpler approaches—like ephemeral states for optimistic updates—with single-flight mutations or partial streaming for heavier workloads, so long as the trade-offs remain transparent.

### 03:45 – 04:00 | Practical Examples and Conclusion on Data Handling

In this segment, the host revisits code examples from earlier demonstrations, emphasizing how isomorphic functions in Solid Start or similar frameworks let teams unify their code. They walk through a to-do list scenario, showing how optimistic updates, single-flight mutations, and streaming responses can transform the user experience while remaining comprehensible to developers.

By contrasting both simpler and more advanced approaches, the speaker highlights how a balanced architecture emerges. Some apps can lean on robust caching and server-driven partial updates, while others thrive using minimal calls and ephemeral states. The overarching theme is flexibility—choosing an approach that matches each project’s unique needs, rather than chasing one-size-fits-all solutions.

### 04:00 – 04:13 | Final Thoughts and Future Directions

In the closing portion, the speaker touches on the promise of stateful backends and edge-based services, speculating about new frontiers where signals could run both client- and server-side. They note that, while big infrastructure shifts often come with steep learning curves, the end goal—faster experiences for end users—remains constant.

Wrapping up, the host thanks the audience and reflects on the ongoing debates around server components, GraphQL, and simpler mutation-driven models. The takeaway is that developers should stay curious, test fresh ideas, and adapt patterns that serve genuine application requirements. Even as frameworks continue evolving at a rapid pace, the principles of clarity, efficiency, and maintainability guide every architectural decision.