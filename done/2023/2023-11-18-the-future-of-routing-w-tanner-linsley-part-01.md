---
showLink: "https://www.youtube.com/watch?v=lrejTB07FOM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Routing w/ Tanner Linsley"
description: ""
publishDate: "2023-11-18"
coverImage: "https://i.ytimg.com/vi/lrejTB07FOM/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation on routing strategies, data fetching, and advanced application architecture, featuring Tanner Linsley’s perspective.

## Episode Summary

This discussion spans multiple topics that illustrate how JavaScript frameworks continue to evolve, particularly around routing and data management. It begins by outlining the differences between single-page apps and server-side rendered approaches, then examines how typed route definitions can simplify complex systems. The conversation highlights strategies to reduce duplication in data-fetching code, including ways to handle preloading, avoid waterfalls, and manage parallel requests. Later segments describe how server-side rendering and suspense transitions address performance bottlenecks, and why the ecosystem is converging on new universal patterns. Throughout the talk, references to file-system routing, code-splitting, and cache integration underscore the complexity of building full-featured frameworks. The guests also look at how advanced tooling—ranging from custom libraries to emerging standards—fits into developers’ workflows. The final takeaways revolve around the trade-offs that come with more powerful abstractions, and how teams can decide which tools or methodologies best fit their applications.

## Chapters

### 00:00:00 - Introduction and Context

In the first few minutes, the host sets the scene by greeting viewers and explaining the main topic: modern routing patterns in JavaScript-based web applications. He mentions the unique challenges of coordinating data retrieval, UI rendering, and navigation flow, hinting that these would be major themes. The conversation reveals how the ecosystem has matured, with multiple libraries offering specialized functionality instead of one-size-fits-all solutions.

The speaker also provides some historical background on how routing evolved from simple page transitions to robust systems capable of handling nested routes, advanced caching, and typed definitions. It is evident that the talk will emphasize both the conceptual underpinnings of these patterns and their day-to-day impact on developers. Right away, the participant signals an eagerness to explore how typed route definitions reduce confusion in large codebases.

### 00:06:00 - Early Influences on Router Design

During this segment, the discussion moves into the motivations behind various router implementations. The host recounts how third-party libraries, such as React Query and React Router, nudged developers to rethink data-loading logic and route matching. Single-page apps demanded new techniques for keeping track of URL states and for ensuring that expensive fetch calls weren’t needlessly repeated.

Tanner joins in with personal anecdotes on how these challenges shaped his own work. He explains that while React Router was highly influential, its internal architecture left less room for deeply integrated type inference. By describing initial experiments and proof-of-concept libraries, Tanner underscores how building a router from the ground up often reveals subtle constraints and trade-offs otherwise hidden by typical usage.

### 00:12:00 - Complex Dashboards and the Birth of TanStack Router

Here, the focus turns to how real-world dashboards exposed major holes in established routing solutions. Tanner details the pressures of developing large enterprise apps with intricate user flows, many of which hinge on specialized data retrieval. He highlights the limitations of relying solely on pathnames, recalling that route parameters often fail to capture the full complexity of an application’s internal state.

The segment touches on advanced scenarios like user permission checks, multi-step wizards, and search filters that require deeper logic than just simple path matching. Attendees learn how these requirements shaped TanStack Router’s type-first model, where search parameters and route definitions share a single, coherent interface. The conversation reveals a philosophy that route configuration should unify data constraints, queries, and UI entry points.

### 00:18:00 - TypeScript as a Driving Force

The speakers dig into the significance of TypeScript at this juncture, noting how it has become almost standard for large-scale JavaScript projects. Tanner points out that early attempts to retrofit strong types into existing router libraries were cumbersome. Type-checking dynamic segments or retrieving typed data from nested routes felt clumsy, motivating him to build a system that could infer types seamlessly from route definitions.

They emphasize that a well-typed system eliminates much guesswork, particularly when dozens of routes interconnect. Rather than rely on repetitive type assertions or manual casts, TanStack Router tries to derive them automatically. This leads to broader points about how typed tooling can smooth out complex workflows in React, making it less error-prone to reason about deeply nested components and their data dependencies.

### 00:24:00 - Search Parameters and Validation

Attention shifts to a recurring pain point: effectively handling search parameters for filtering and dynamic querying. The host highlights that unlike path parameters, query params aren’t strictly hierarchical, which complicates the router’s job. Tanner describes how TanStack Router addresses this by declaring search param schemas at each route level, if needed, which can bubble up or combine with parent routes.

The group acknowledges that many frameworks sidestep this challenge by leaving it to the developer. However, pulling it directly into the router definition enforces predictable behavior and helps centralize logic. They weigh the pros and cons of including robust search param support, concluding that while it raises complexity, it also opens the door to more powerful custom behaviors.

### 00:30:00 - File-System Routing vs. Config Files

Around the half-hour mark, file-system routing enters the conversation. The host references how Next.js popularized folder-based routing, which often feels intuitive for simpler apps. Tanner, however, explains the subtle friction that arises when trying to maintain type inference across large route trees. He describes a code-generating approach that can automatically compile directory structures into typed router definitions.

The chat explores how file-system conventions can be a double-edged sword: while it’s easy to grasp for small projects, advanced nesting or multi-tenant setups may get cluttered. They also compare the mental overhead of editing config objects against reorganizing physical files. The speakers conclude that each approach has its place, but advanced setups may demand more explicit typed configs rather than purely relying on folder naming.

### 00:36:00 - Handling Lazy Loading and Suspense

In this segment, the topic broadens to performance concerns. Lazy loading is often used to reduce the initial bundle size, and the router must manage when to preload routes versus when to fetch them on demand. Tanner remarks that TanStack Router doesn’t automatically code-split each route but allows developers to orchestrate lazy loading as needed.

They also bring up React Suspense, a fundamental feature for parallel data loading. By integrating route-level data fetches with Suspense boundaries, the team can ensure that only critical sections block rendering. The group notes that while this pattern can significantly improve perceived performance, it has pitfalls if not carefully planned—especially when multiple nested components each declare their own boundaries.

### 00:42:00 - Preloading and Prefetching Strategies

Next, the conversation homes in on prefetching, exploring how a router can initiate data requests upon link hover or intersection. This technique, popularized by frameworks like Gatsby, yields instant page transitions at the cost of some overhead. Tanner describes how TanStack Router hooks into link components to trigger early fetches, storing responses in a client-side cache to avoid repeated requests.

They debate how far prefetching should be taken, agreeing that it depends on app size and user behavior. Too much prefetching can bloat memory usage, while too little might leave the user waiting. Listeners learn that frameworks are increasingly adopting a “sensible default plus escape hatches” approach, letting them fine-tune prefetch logic for distinct user pathways.

### 00:48:00 - SSR Trade-Offs and Streaming

Here, the conversation pivots toward server-side rendering (SSR) once again. The speakers outline how SSR might help with SEO or first contentful paint, but can also introduce complexities in data handling and hydration. They explain that when SSR merges with advanced streaming, frameworks must carefully coordinate partial HTML dispatch to avoid mismatches.

Tanner walks through an example of partially rendered HTML that includes placeholders for data not yet fetched. Once those resources arrive, the server flushes additional chunks down the wire. The host points out that while this can lead to speedier load times, it increases design complexity and requires a deeper understanding of server-client synchronization.

### 00:54:00 - Transitions and React’s Approach

Transition APIs in React come under scrutiny at this point, as the pair discusses how transitions can reduce UI jank during state changes. They contrast transitions with standard synchronous updates, illustrating how user input remains responsive while data loads in the background. Tanner suggests that while the concept is powerful, it can become unwieldy if one tries to manage multiple overlapping transitions.

Meanwhile, the host references the experience from other frameworks, where fine-grained reactivity can inherently smooth out updates without complicated scheduling. They highlight that these differences in approach matter for router design, since route changes often trigger data fetches, re-renders, or suspense boundaries. The group underscores that each library’s mental model of rendering shapes how you set up your routes.

### 01:00:00 - Universal Patterns vs. Framework-Specific Solutions

The hour mark prompts a reflection on universal patterns that transcend individual libraries. The speakers note that numerous frameworks—React, Svelte, Solid, and others—have converged on the idea that route definitions must incorporate data loading. They mention that while some build this directly into the router, others prefer an external library that addresses caching or parallel queries.

They also look at how server components in React or new variants in Svelte might reshape these patterns. The host argues that universal abstractions only go so far before each framework’s paradigm diverges. Nonetheless, certain best practices, such as route-level data orchestration, appear consistently beneficial. The panel underscores that real success means flexible building blocks, whether you adopt them via routing, a data library, or a specialized bundler plugin.

### 01:06:00 - From React Location to Today’s TanStack Router

During these minutes, Tanner recounts the journey from his earlier React Location library to the current TanStack Router. He discusses rewriting path utilities, splitting logic into smaller modules, and refining the approach to search params. By focusing on type safety throughout the entire route tree, he minimized friction for developers who want strong invariants around parameter usage.

They discuss how grouping these functionalities into one place fosters a uniform mental model, especially if your application grows horizontally. The host applauds the synergy between TanStack Router and React Query, praising how the two libraries dovetail seamlessly. The conversation reiterates that these solutions emerged from real production demands, not merely theoretical design.

### 01:12:00 - Eliminating Loaders in Favor of a Lean Core

The talk shifts to how TanStack Router originally integrated data loaders but eventually removed them. Tanner shares why he decided the library shouldn’t double as a caching system, preferring to rely on established tools like React Query for that. He found that the minimal “load” function for route transitions was enough to handle basic prefetch scenarios, leaving heavier caching to a dedicated library.

The host agrees that decoupling fosters composability, since many teams already have data-fetching or caching solutions in place. They note that advanced features such as offline caching or multi-tier states demand a more robust approach than a router can easily provide. This philosophy, they argue, is indicative of the broader JavaScript ecosystem’s preference for small, focused modules that combine to form a flexible stack.

### 01:18:00 - Comparing Solutions in Other Frameworks

At this point, they turn to how different frameworks handle these concepts. References to Remix, Next.js, and even older generations of React Router crop up. Tanner clarifies why he believes TanStack Router can stand alone and still serve as a backbone for more opinionated solutions. Meanwhile, the host highlights how Solid or Svelte might incorporate similar patterns by hooking into signals or stores.

Listeners glean an overview of how routing decisions intersect with hydration, partial rendering, and truly offline scenarios. Despite variations in syntax or library responsibilities, the fundamental obstacles remain: controlling data concurrency, orchestrating transitions, and mapping complex route definitions effectively. They tease that each ecosystem is converging on a shared set of best practices.

### 01:24:00 - Q&A: Nested Routes and Parallel Data

An audience Q&A section emerges, focusing on specific challenges. Listeners ask about nested routes that share data dependencies or how to run parallel requests effectively without forcing a second wave of fetches. Tanner suggests that if each child route references the same underlying query, a well-designed cache layer prevents duplication.

The speakers also describe the importance of consolidating route logic at the top level to avoid the dreaded “waterfall effect,” in which each nested component triggers a new request only after the parent finishes. They emphasize that a combination of preloading, suspense boundaries, and a robust caching solution can mitigate these pitfalls. Ultimately, they propose that clarity often comes from unifying route logic and data logic in predictable ways.

### 01:30:00 - SSR Details and Edge Cases

In this segment, a more technical breakdown of SSR intricacies returns. The host outlines how partial hydration can load a skeleton of the page, then bring in interactive features. Tanner explains that SSR has hidden edge cases—some related to user authentication, others tied to environment-specific modules—that can break naive assumptions. He points out the need for an SSR strategy that gracefully degrades if certain data can’t be fetched in time.

They also look at how transitions differ on the server, acknowledging that you can stream partial HTML, but the client often expects a stable root container. The conversation underscores how SSR remains a higher-complexity feature that not every app needs. For mission-critical or SEO-heavy apps, though, it can be invaluable.

### 01:36:00 - Exploring Form Actions and Server Functions

Talk shifts to a pattern popularized by Remix, in which form actions use the URL to encapsulate data updates. The host references the convenience of removing JavaScript from the critical path for basic form submissions. Tanner relays that while TanStack Router doesn’t directly implement this, it can integrate with form-based workflows by bridging server endpoints into route transitions.

They debate the line between minimal overhead and robust client-side reactivity. If a site’s forms remain simple, form actions can speed up development. However, apps with real-time validation or dynamic field changes often require a more advanced approach that merges server calls with local state. This highlights the variety of use cases a router must accommodate, from full client control to near-complete server orchestration.

### 01:42:00 - Modular vs. Monolithic Approaches

Here, they revisit whether a single, monolithic framework is better than picking specialized tools. The host suggests that a narrower library can sometimes excel in its domain—like TanStack Router focusing purely on routing and type inference—rather than bundling everything. Tanner notes that creating a one-stop framework can stifle creativity and hamper the ability to pivot when new patterns emerge.

They contrast older frameworks that tried to handle state, routing, data fetch, and SSR in one place. While that approach seemed neat for beginners, it occasionally trapped advanced users who needed deeper customization. The conversation thus underscores how modern JavaScript embraces small, composable libraries that can be replaced or upgraded independently.

### 01:48:00 - Handling Offline Scenarios and Edge Devices

As the conversation continues, listeners inquire about offline or edge-device scenarios. Tanner acknowledges that some teams want routers to coordinate local caches or handle network disruptions gracefully. The host remarks that such cross-cutting concerns are often better tackled by libraries dedicated to offline storage or synchronization, rather than overloading the router.

They talk about progressive web apps (PWAs) and the necessity of integrating service workers. While the router can help identify the correct route patterns, it doesn’t directly manage resource lifecycles. The pair concludes that multi-layer architectures allow for specialization: a well-typed router is perfect for shaping the request flow, while another library or service manages actual caching of data packets offline.

### 01:54:00 - Revisiting Suspense and Streaming in Practice

Moving back to performance topics, the speakers re-examine how suspense-driven streaming might look in real deployments. They outline a scenario of partial HTML rendering where the server responds immediately with core layout elements, then trickles in content for sub-routes. This avoids blocking while heavier fetches complete, all coordinated by the route definitions that specify data boundaries.

Tanner acknowledges that debugging partial rendering can be tricky, especially if concurrency or user interactions cause multiple data requests. They note that these advanced mechanisms push the boundaries of what a router can do out of the box. However, the potential for snappier experiences often outweighs the added mental overhead.

### 02:00:00 - Chaptered Q&A and Extended Listener Questions

Around the two-hour mark, further questions address everything from deployment strategies to advanced TypeScript features. The host underscores that a strong local dev experience often carries over to production. By having typed routes, one catches subtle errors earlier. Meanwhile, the environment integration or build pipeline can remain flexible, as the router itself only expects well-defined route configurations.

Tanner clarifies that while file-based approaches are popular, TanStack Router’s approach suits teams who want granular control over how modules load or how search params are handled. In principle, a code generator can replicate the convenience of file-based setups without sacrificing type safety. Nonetheless, each team must weigh immediate gains against long-term maintainability.