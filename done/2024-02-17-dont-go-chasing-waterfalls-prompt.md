---
showLink: "https://www.youtube.com/watch?v=hiYQC4XaUu4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Don't Go Chasing Waterfalls"
description: ""
publishDate: "2024-02-17"
coverImage: "https://i.ytimg.com/vi/hiYQC4XaUu4/sddefault.jpg?v=65ce8567"
---

## Episode Description

A wide-ranging conversation about data fetching, performance trade-offs, and emerging approaches in React and other frameworks, with a special focus on avoiding slow-loading pitfalls.

## Episode Summary

This transcript offers a comprehensive discussion of how developers approach data fetching, manage performance, and structure applications across different frameworks. The conversation begins by comparing synchronous versus parallel requests, detailing how even small architectural decisions can lead to noticeable impacts on user experience. Practical scenarios are examined, including examples of how waterfall requests arise when components are nested or when certain patterns unintentionally add multiple fetch cycles. The speaker emphasizes the significance of solutions like route-based loaders, server actions, and caching, highlighting how each can address or sidestep performance bottlenecks. Throughout, there's an in-depth look at React Server Components, along with alternative paradigms like fine-grained reactivity, discussing both their strengths and trade-offs. Concluding observations focus on how modern toolchains, compilers, and emerging patterns aim to streamline data handling, reduce overhead, and boost overall responsiveness in large-scale or frequently updated applications.

## Chapters

### 00:00 - Intro and Overview (0:00 - 15:00)

At the outset, the conversation sets the stage by establishing the core theme: finding practical ways to handle data fetching while maintaining strong performance. The speaker explains how waterfalls—situations in which one request depends on the result of another—can slow load times. A quick greeting and check-in welcome participants, conveying enthusiasm for the topic. Listeners learn that the session aims to clarify common pitfalls in both client-side and server-side fetching, covering everything from frameworks to caching considerations.

The speaker also touches on the significance of fundamentals, such as deciding when to place data-fetching logic within components or at higher levels like routes. This opening segment underscores how easily performance can degrade when data is obtained in sequential layers rather than in parallel. By framing these challenges early, the session promises to walk through the nuances of bridging the client and server in more efficient ways. Attendees are encouraged to participate in chat, underscoring the interactive and exploratory nature of the discussion.

### 15:00 - Understanding Waterfalls and Parallel Requests (15:00 - 30:00)

In this section, the speaker defines the term “waterfall” in the context of network requests, contrasting it with parallel fetching. A simple diagram is described, illustrating how multiple requests can either stack up sequentially, thereby increasing overall latency, or be sent together to minimize wait times. By assessing the timing diagrams, the speaker shows that even small intervals between requests can result in perceptible slowdowns. Participants in chat contribute ideas on the ramifications of limiting parallel requests, highlighting browser constraints and overhead.

Attention then shifts to grouping requests versus leaving them separate. Although a single large request might reduce overhead, it can cause other parts of the application to block while waiting for a slow sub-request. Conversely, multiple parallel requests may each add their own overhead, but they let different sections of the UI render sooner. The conversation explores these trade-offs, concluding that real-world choices often hinge on application size, user expectations, and the criticality of certain data being displayed first.

### 30:00 - Hoisting Data Fetches and Route-Level Loading (30:00 - 45:00)

Here, the speaker highlights the concept of “hoisting” data-fetching logic to a higher level in the routing structure. Rather than nest numerous fetch calls inside deeply nested components, frameworks like Remix and others encourage loading data at a route level so multiple dependencies can be resolved in one go. The discussion acknowledges how, historically, frameworks have sometimes pushed developers to place data-fetch calls where they appeared most convenient, inadvertently forming waterfalls. Hoisting counters this by ensuring parallel fetching and coordinated loading.

The group then assesses how route-level strategies can address complexities such as user permissions, nested routes, and caching. When each route segment handles its own required data, the outcome can be parallel requests or even streaming responses. This structure avoids blocking deeper levels of the UI while top-level data is still being retrieved. Ultimately, the speaker suggests that hoisting fetches can reduce complexity, centralizing concerns and cutting down on hidden sequential calls that degrade user experience.

### 45:00 - Trade-Offs of Grouping and Streaming (45:00 - 1:00:00)

At this juncture, the speaker outlines a recurring tension in modern web architecture: whether to combine data into single responses or to let each piece arrive on its own. Large requests could potentially block everything if a single part of that data is slow, but multiple small requests may trigger overheads or concurrency limits. The speaker shows how streaming can mitigate these pains by pushing partial data as soon as it’s available, sidestepping the classic bottleneck of waiting for all requests to complete.

Concrete examples are referenced—such as streaming partial HTML or sending progressive data to the client. Different frameworks adopt varied approaches, from route-level “defer” APIs to granular caching strategies. Through illustrative diagrams, the speaker notes how a streaming approach helps websites remain responsive, preventing a slow third-party data source from stalling an entire page. Although streaming is powerful, it adds complexity, demanding that developers define sensible loading boundaries and adopt placeholders or fallback states for partial content.

### 1:00:00 - Client Waterfalls vs. Server Waterfalls (1:00:00 - 1:15:00)

Around this time, the conversation zeroes in on the distinction between client-induced and server-induced waterfalls. The speaker underscores that not all waterfalls are equally detrimental—sometimes, certain requests must happen in sequence for legitimate reasons, such as reading user authentication data before querying user-specific resources. On the other hand, many waterfalls are unintentional results of naïve component design. The speaker references how frameworks like React, Remix, Solid, or others each tackle such waterfalls differently, depending on their built-in caching or route logic.

The discussion also emphasizes that server waterfalls can still be problematic when data originates from distant databases or microservices, especially if that data needs to pass through multiple internal layers. Even if everything is happening “off the client,” each step adds latency. The speaker advises that the best solution often lies in anticipating dependencies and grouping them earlier, so the system can either parallelize requests or streamline how they’re returned. This approach can include caching layers that temporarily store results, reducing further round trips.

### 1:15:00 - React Server Components: Hopes and Realities (1:15:00 - 1:30:00)

This segment ventures into React Server Components, explaining their promise to unify server and client code. The speaker addresses the notion that server waterfalls may be “less harmful” than those on the client, but clarifies that they still add time if multiple server actions depend on each other. Practical points come up: how data is serialized, how component boundaries act as natural breakpoints, and whether server components truly eliminate the need for a separate data-fetching strategy.

The conversation acknowledges that React Server Components can be appealing for simplified code, letting developers focus on “just React” without explicit effect hooks or specialized data libraries. Yet participants note that advanced use cases often still require route loaders or query libraries. A real-world example of reading files on the server reveals that local data fetches can appear straightforward yet cause hidden waterfalls if nested incorrectly. The group concludes by urging care when adopting server components, emphasizing the pitfalls of assumption-driven design.

### 1:30:00 - Parallelization Tactics and Async Components (1:30:00 - 1:45:00)

In this section, attention shifts to the mechanics of async components and how they block or allow parallel execution. The speaker points out that writing `await` inside React components can introduce hidden sequential processes: once the component suspends, nothing beneath it proceeds until that data resolves. Meanwhile, promise-based parallelization can reduce overall load times, letting siblings fetch data at once. The speaker presents a nuanced take, showing that while async/await is friendly to read, it can inadvertently hamper concurrency if used inside nested trees.

Examples highlight how frameworks circumvent these challenges. Tools such as Suspense let developers specify placeholders and boundaries, so parts of the UI display while other parts load. Still, the speaker warns that a single large boundary might block an entire page behind a spinner. Granular approaches—where each section has its own fallback—require more planning but yield better user experience. Ultimately, the segment conveys how small code decisions, like an `async` function in a component, can ripple into big performance outcomes.

### 1:45:00 - Avoiding Data Over-Fetching (1:45:00 - 2:00:00)

As the conversation unfolds, the issue of over-fetching enters the spotlight. The speaker recounts how repeating the same data calls in multiple places can pile on network requests, straining both performance and user bandwidth. The group considers solutions like shared caching, data loaders at the route level, and specialized libraries such as TanStack Query. Each approach aims to unify repeated requests so the application doesn’t send duplicates. By focusing on data reuse, the speaker argues that apps become both faster and more maintainable.

Frameworks often provide built-in caching that can recognize when two requests have the same key, returning a previously fetched result. Still, a robust design should weigh how quickly data becomes stale and whether partial updates can handle fast-moving data. In some scenarios—like social feeds or collaborative apps—developers might prefer real-time updates that skip caching entirely. The speaker emphasizes that the “right” solution depends on domain-specific demands, user expectations for instant accuracy, and the complexity of the data being presented.

### 2:00:00 - Single-Flight Mutations and Unified RPC (2:00:00 - 2:15:00)

During this chapter, the focus moves to how single-flight mutations, sometimes called server actions, can streamline data interactions. When a user updates information, the app triggers a request and simultaneously receives the new state in one response. This approach sidesteps the classic post-then-get pattern, potentially eliminating a common waterfall. The speaker shows how it works in frameworks like Remix or Solid Start, which let developers define an “action” function that both commits changes and returns updated data in the same round trip.

By relying on server functions or RPC-like calls, these frameworks simplify logic. The user effectively “submits” changes, and the framework merges new data back into the existing client cache, so the UI updates immediately. Such designs reduce complexity and can offer optimistic interactions, where the screen reflects changes before the server confirmation arrives. The participants discuss edge cases, like error handling and rollbacks, but generally praise these single-flight approaches for cutting through typical multi-step requests that slow the user experience.

### 2:15:00 - GraphQL Influences and Future Directions (2:15:00 - 2:30:00)

Here, GraphQL surfaces as a key reference point for shaping new data strategies. The conversation acknowledges GraphQL’s success in bundling multiple queries into one structured request, as well as its historical “N+1” problem. The speaker describes how modern approaches, including data loaders, partial hydration, and streaming, have inherited or refined many ideas from GraphQL. They emphasize that while GraphQL introduced the notion of a single endpoint that returns exactly what’s needed, other patterns now achieve similar results with fewer specialized tools.

Attendees note that GraphQL remains appealing for enterprise-scale applications with numerous microservices, but caution that it can be overkill for simpler projects. The speaker highlights how smaller frameworks can replicate the best aspects of GraphQL—like partial responses and minimal over-fetching—without adopting an entire schema and query language. This bridging of worlds is seen as a sign that different communities share the same underlying goal: letting developers request the minimal amount of data while serving it to the UI as quickly as possible.

### 2:30:00 - Composability vs. Practical Packaging (2:30:00 - 2:45:00)

The focus shifts to the concept of composability, particularly around server components. Some argue that the ability to distribute server-side logic throughout a component tree feels more cohesive, but the speaker underscores the friction in shipping truly reusable server components as NPM packages. Each hosting platform or build system may handle caching or route definitions differently, making universal components awkward to implement. The discussion weighs how forcing data-fetch logic into third-party libraries can hinder adaptability in larger, more complex deployments.

Participants note that best practices still often favor smaller abstractions—like exporting load or fetch functions from a library—so teams can plug them into their own caching or route setups. This is especially relevant when data queries need to be consistent across multiple endpoints or require advanced caching layers. The speaker concludes that composability is easiest within a single organization or codebase that shares platform assumptions. Attempting a universal server-component library is possible, but rarely yields the straightforward reusability developers might expect.

### 2:45:00 - Compiler Innovations in React and Beyond (2:45:00 - 3:00:00)

Attention turns toward the evolving compilers and optimizing techniques in React and other frameworks. The speaker references how React’s upcoming compiler aims to reduce unnecessary re-renders while preserving the “just JavaScript” feel of the code. However, complexities arise because dynamic features like keys, context, and deeply nested state can challenge static analysis. The potential for more advanced optimizations is promising, yet the speaker cautions that auto-memoization sometimes leads to surprising edges where updated data fails to trigger or triggers incorrectly.

Framework authors invest in compilers partly to spare developers from manually optimizing. Svelte, for example, has long used compilation to rewrite reactive statements, generating minimal DOM operations. Solid’s approach focuses on fine-grained signals, removing the overhead of a virtual DOM. Similarly, Quick is experimenting with resumable hydration that cuts initial JavaScript payloads. All of these reflect a larger shift: frameworks increasingly shift more intelligence into build steps, aiming to deliver high-performance user experiences without requiring cumbersome manual tuning.

### 3:00:00 - Emerging Patterns: Resumability and Islands (3:00:00 - 3:15:00)

This segment explores how resumability—a concept championed by Quick and partially mirrored by frameworks like Astro—allows applications to load only what the user truly needs. By capturing the state of each component on the server, the client can pick up interaction from that point, bypassing full re-initialization. The speaker explains that the biggest gain is reducing large hydration costs, though it requires careful tracking of event bindings and serialized states. Islands architecture also arises, limiting JavaScript usage to only dynamic parts of a page.

Though these approaches differ in style, they share a goal: reducing the overhead of shipping or running JavaScript code unnecessarily. Whether it’s partial hydration that replaces entire blocks with static HTML or fine-grained signals that only re-render a button’s immediate label, each technique tries to streamline performance. However, complexities emerge in analyzing the structure of pages and how user interactions might propagate changes. The participants concur that these new paradigms will likely shape the next wave of web frameworks, emphasizing real-time user experiences without wasting compute power.

### 3:15:00 - Practical Benchmark Insights (3:15:00 - 3:30:00)

Here, the speaker references performance benchmarks like the popular JS Framework Benchmark, comparing how frameworks fare under specific operations such as row creation, row swapping, and row removal. They highlight that frameworks adopting signals or compile-time optimizations often excel at partial updates, whereas purely virtual-DOM solutions can struggle with bulk changes. Listeners hear that clever scheduling and minimal re-renders can elevate performance, but small differences in approach—like how a framework handles keyed lists—can create large variances in results.

Behind the numbers, the talk addresses that real-world apps rarely match the benchmark’s repetitive tasks. Yet the speaker insists these evaluations remain important for diagnosing fundamental overheads. They mention memory usage, especially when frameworks must track dependencies in complex data flows. This interplay of speed versus memory underscores that every architectural choice can shape performance. The chapter ends with a reminder that while benchmarks guide best practices, developers should always confirm that an approach suits their specific user needs and domain constraints.

### 3:30:00 - Caching Layers and Data Lifecycles (3:30:00 - 3:45:00)

In this section, the discussion circles back to caching and how data lifecycles drive application architecture. The speaker underscores the importance of revalidating data at appropriate intervals, whether it’s short-living content like chat messages or more static information such as product lists. Listeners learn that adopting advanced layers, such as stale-while-revalidate or incremental static regeneration, can strike a balance between immediate responsiveness and not over-taxing external services with repetitive calls.

The conversation points out that caching can quickly become the trickiest piece of a large-scale system. As apps grow, caching must account for user authentication, geographic distribution, and multi-tier data sources. The speaker shows that a naive approach—caching everything indefinitely—will cause data to drift out of sync, causing user confusion. On the flip side, invalidating caches too often negates the performance benefits. The group concludes that planning data lifecycles in advance is crucial, whether you use route-level loaders, server actions, or specialized libraries.

### 3:45:00 - Dealing with Complex Interactive Scenarios (3:45:00 - 4:00:00)

As the session deepens, attention shifts to highly interactive features like drag-and-drop Kanban boards or real-time text editing. The speaker explains that while minimal JavaScript might work for simple tasks, advanced interactions often demand client-only updates or optimistic rendering. Such cases can be harder to reconcile with an MPA-like pattern or purely server-based rendering. Examples from existing frameworks demonstrate how delicate concurrency can be: if updates must remain in sync for all connected users, the server round trip might be too large a bottleneck.

For these scenarios, the group underscores that partial updates from the server may still help, but many developers combine server logic with robust client-side state managers. The user experience depends on immediate feedback, such as dragging a card smoothly without waiting for every small step to confirm. Summarizing the trade-off, the speaker points to either handling these interactions entirely on the client or employing specialized real-time protocols. The complexity intensifies, but so does the potential for rich, dynamic user experiences.

### 4:00:00 - Reflecting on HTMX and Classic Approaches (4:00:00 - 4:15:00)

During this interval, the conversation spotlights HTMX and older, form-based paradigms, contrasting them with JavaScript-heavy SPAs. While acknowledging that minimal or no JavaScript can simplify certain performance concerns, the speaker questions whether advanced interactions—like drag-and-drop or complex client validation—become cumbersome without an in-browser state. HTMX’s progressive enhancement allows partial server responses, making it an interesting middle ground. Yet the speaker notes that sophisticated, real-time features might push developers toward heavier client involvement anyway.

Listeners hear an anecdote about how simpler frameworks can sometimes re-create user experiences reminiscent of early server-driven sites, minus the large overhead. The speaker also discusses how HTMX can yield surprisingly interactive pages by cleverly injecting HTML fragments. Still, large-scale data manipulation or offline-first experiences remain challenging. Ultimately, the conversation frames HTMX as a helpful solution for content-centric sites or forms that rarely require intricate client-only logic, cautioning that each approach has its sweet spot.

### 4:15:00 - Current and Future Compiler Work (4:15:00 - 4:30:00)

Nearing the session’s close, the speaker reviews ongoing compiler enhancements across multiple ecosystems. They mention that React’s upcoming compiler seeks to eliminate repeated re-renders by scanning code for side-effect-free operations. Meanwhile, frameworks like Svelte and Solid rely on compile-time or build-time transformations to optimize direct DOM manipulations. The speaker explains that these optimizations can reduce mental overhead—developers no longer micromanage updates with useMemo or explicit caches, if the compiler can figure it out automatically.

However, the speaker also clarifies that no compiler can handle every edge case. If code violates a framework’s rules, like mutating props or performing synchronous DOM reads mid-render, optimizations may fail or produce unexpected results. This encourages consistent patterns around data flows and side effects. A few success stories are highlighted, including advanced production apps that benefited from faster run times and smaller bundle sizes. The general sentiment is that compilers remain an exciting frontier, with tangible improvements on the horizon.

### 4:30:00 - Closing Thoughts and Upcoming Developments (4:30:00 - 4:48:54)

In the final portion, the speaker offers a wrap-up of the multifaceted talk. After covering waterfalls, caching, streaming, server components, single-flight mutations, and compiler optimizations, the conversation circles back to the user experience. Each choice in how data travels—be it a route-level loader, a server-only approach, or a set of client-side caches—affects how quickly users see meaningful content and how smoothly interactions proceed. The speaker reiterates that developers must weigh app requirements, data volatility, and team expertise before committing to a particular design.

As the discussion winds down, participants exchange final reflections on how frameworks continue to evolve in 2024 and beyond. There’s optimism about new tools that simplify overhead and unify the once-disparate worlds of server and client logic. At the same time, the speaker highlights that improvements in compilers, streaming, and reactivity are far from finished. Viewers are thanked for tuning in, and a hint is given about upcoming events and possible announcements, bringing the session to a close with an eye on the future.