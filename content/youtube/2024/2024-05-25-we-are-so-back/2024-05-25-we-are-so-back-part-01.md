---
showLink: "https://www.youtube.com/watch?v=VdDJbrh23zo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "We Are So Back"
description: ""
publishDate: "2024-05-25"
coverImage: "https://i.ytimg.com/vi/VdDJbrh23zo/maxresdefault.jpg"
---

## Episode Description

A broad discussion covering emerging JavaScript framework features, performance benchmarks, and the evolving role of compilers in React and similar libraries.

## Episode Summary

This conversation explores multiple facets of modern web development, focusing on new innovations in React, the React compiler, and the concept of signals for fine-grained state management. The speaker compares various frameworks, highlighting their approaches to performance optimization, bundling strategies, and development paradigms. They discuss topics like server components, partial hydration, file-based routing, and the intricacies of data serialization. Throughout the discussion, the speaker references real-world benchmarking and the complexities of shipping features at scale. They also touch on community reactions to cutting-edge ideas, underscoring the importance of open collaboration and tooling improvements. In essence, the transcript provides insight into the current and future landscape of JavaScript frameworks, emphasizing the value of evolving standards, developer ergonomics, and performance-oriented design choices.

## Chapters

### 00:00 - 00:20 Introduction and Recent Framework Developments

In the opening segment, the host greets viewers and sets the stage for a long-form exploration of modern JavaScript frameworks. The conversation begins by acknowledging the fast-paced nature of web development, where new features and releases continuously reshape the ecosystem. There is a brief mention of personal updates and the reasons for a gap since the previous stream, laying out the context for the topics to come. Early chat interactions hint at the breadth of topics—spanning bundling, server components, and performance tooling.

They also emphasize the pressures on framework authors to keep projects fresh while maintaining stable releases for critical features. From discussing updates to tools like Vite, to describing ongoing changes in React, the host highlights the delicate balance between shipping new capabilities and ensuring they remain practical for developers. This sets an optimistic tone for delving into deeper technical intricacies later in the conversation.

### 00:20 - 00:40 Solid Start 1.0 and Meta-Framework Ambitions

Attention turns toward Solid Start 1.0, the meta-framework for Solid. The host recounts the multi-year journey to refine server functions, routing, and a wide range of features before arriving at a stable release. The conversation underscores how filing down rough edges often involves countless iterative improvements and bug fixes, especially around dev server caching or routing edge cases.

Beyond the day-to-day coding, they reflect on how meta-frameworks must balance newcomer-friendly ergonomics with the complexities of real-world deployments. Solid Start’s approach seeks to maintain the minimalism Solid is known for, while adding enough structure to handle streaming, serverless functions, and advanced deployment scenarios. This chapter closes by celebrating the sense of relief and accomplishment after a major push to production readiness.

### 00:40 - 01:00 React Conf Recap and Emerging Trends

Shifting the spotlight to React, the speaker recounts how React Conf introduced new features like updates to React Router and server components. They touch on community reactions to the developments—both excitement over potential gains and confusion about how new abstractions fit into existing code. This leads to reflections on balancing compositional flexibility with a desire for simpler mental models.

The host also brings up the broader tension between partial hydration techniques and fully powered single-page applications. While React is exploring new ways to unify server and client logic, developers wonder whether these solutions can address performance pitfalls at scale. The segment underscores the central role React plays in shaping best practices, even as smaller frameworks explore more specialized, fine-grained solutions.

### 01:00 - 01:20 Server-Driven Approaches and Edge Deployments

Focus turns to the idea of server-driven UIs, highlighting the interplay between streaming data from the server and the rapidly growing emphasis on edge functions. The host points to past attempts that struggled with persistent server states but notes renewed interest as edge platforms mature. They mention different streaming formats, from server-sent events to advanced caching, showing how infrastructure can influence architectural decisions.

Throughout this section, the conversation grapples with the trade-offs of caching data at the edge versus relying on the client. The host explains that modern frameworks increasingly provide adapter systems to support multiple providers, reflecting a broader industry push to avoid lock-in. The core takeaway is that rendering and deployment strategies are tightly intertwined, nudging framework authors to unify solutions for everything from basic content sites to complex AI-driven experiences.

### 01:20 - 01:40 React Router V7, Future Directions, and Code Splitting

Here, the host dives into React Router v7’s new features and how it incorporates a form of server components. By toggling between client and server loaders, developers can choose where data fetching and rendering take place. This approach potentially offers a migration path for teams that want partial server-rendered content without fully rewriting to a new paradigm.

The discussion then broadens to code splitting and route-based bundling, pivotal for performance optimization. The host highlights how file-based routing helps generate split bundles automatically, ensuring that only essential code is loaded. They point out that while dynamic imports can achieve similar goals, well-structured file-based routes make it simpler to manage preload hints, network requests, and caching strategies. It’s a testament to the practical advantages of these conventions.

### 01:40 - 02:00 React Compiler “Forget” and Fine-Grained Rendering

Attention shifts to the long-awaited React compiler, often referred to as “React Forget,” and how it aims to optimize rendering. The host explains that while the compiler can automate memoization, it may not match the raw performance of signal-based approaches seen in frameworks like Solid or Svelte. Nevertheless, its main advantage lies in improving real-world apps where developers seldom optimize every component by hand.

They also reflect on how the compiler’s transformations compare to older paradigms, like how Svelte and others do specialized compile-time checks. The speaker notes that React’s approach must remain backward compatible with existing designs, complicating the end result. Despite debates over whether the compiler truly competes with signals, the consensus is that it can reduce render cycles in typical React apps, a valuable step for those deeply invested in the ecosystem.

### 02:00 - 02:20 Performance Benchmarks and Comparisons

In this segment, the host digs into performance benchmarks. They run the JS Framework Benchmark for multiple frameworks, including React with and without the new compiler optimizations. The results confirm that the React compiler’s impact on an already heavily optimized setup is often marginal, though it shines in everyday scenarios with less hand-tuned code.

The conversation highlights how these micro-benchmarks can be misleading, yet they remain a fascinating laboratory to measure raw speed. The host emphasizes that real applications rarely match the benchmark’s shape, but the improvements in React 19 or “Forget” signal an overall trend. Even slight gains can be meaningful at scale, providing a strong incentive to adopt new tooling whenever it lowers overhead for typical components.

### 02:20 - 02:40 Signals vs. Compiler Optimizations

The host returns to the fine-grained reactivity topic, contrasting signals-based designs with compiler-based memoization. They use illustrative examples of toggling checkboxes or updating arrays, demonstrating how signals can update just one piece of UI without re-running the entire component tree. By contrast, React typically re-runs many components, though smart caching reduces the impact.

Still, the host acknowledges that developer experience and ecosystem maturity heavily influence which approach teams pick. Compiler optimizations may help React code remain familiar while boosting performance. Meanwhile, signals-based frameworks offer a streamlined mental model for partial updates. This chapter underlines that each technique has benefits, and real-world teams must weigh trade-offs around code organization, debugging, and library interoperability.

### 02:40 - 03:00 Async Handling, Streaming, and Data Loading Strategies

As the conversation progresses, the speaker examines different strategies for handling asynchronous data. They reference suspense, transitions, and partial hydration from frameworks like React, Svelte, Solid, and more specialized tools. The goal is to clarify how each approach deals with blocking, race conditions, and minimal re-render overhead when data arrives.

The host describes an experimental mode in Solid where data can stream directly to the client, bypassing full server-side rendering. On fast networks, it can outperform some SSR patterns by letting the client start rendering sooner. However, the same approach might falter on slow connections, prompting an ongoing quest for a “universal approach.” This interplay of streaming, caching, and fallback rendering shapes each framework’s identity.

### 03:00 - 03:20 React Transition APIs and Fine-Grained Alternatives

The spotlight returns to React’s transition APIs, showcasing how they allow multiple updates to be grouped and rendered in one go, preventing excessive intermediate states. The host experiments with transitions in both React and Solid to show how user interactions can feel more responsive. This underscores a key difference in approach: React relies on scheduling and concurrency, whereas some signal-based frameworks track dependencies at the node level.

They further analyze how transitions mesh with streaming and server components, revealing potential synergy or overlaps. Reflecting on the user experience of transitions, the conversation highlights that while concurrency can smooth out updates, it also adds complexity. Framework authors must ensure that features like transitions fit cohesively with routing, data-fetching, and partial hydration efforts.

### 03:20 - 03:40 File-Based Routing Debates

Discussion shifts to the pros and cons of file-based routing, with the host acknowledging how it can simplify bundle splitting, preload tags, and route-driven architecture. They note that many developers have grown skeptical of file-based routing, worrying about its potential rigidity. Yet the speaker points out that, behind the scenes, meta-frameworks rely on such structures for a good reason: it keeps dynamic imports organized and consistent.

Exploring alternatives, they mention code-based or configuration-based routing but argue these often miss the automatic synergy of file-based approaches. This leads to an examination of how frameworks like Solid Start, Next.js, or TanStack Start each implement routing conventions. Ultimately, the conversation underscores that file-based routing remains prevalent, primarily because it handles large-scale modular projects in a predictable way.

### 03:40 - 04:00 The Role of Adapters and Multi-Platform Deployments

Adapters re-enter the conversation, as the host explains how frameworks handle deployments across various providers (e.g., Netlify, Vercel, or AWS). Adapters wrap platform-specific features while preserving framework abstractions like server functions or streaming. This approach lets developers focus on their core code, trusting that each adapter can handle unique caching rules or serverless restrictions.

They reiterate that standardizing server logic is critical for wide adoption. Without adapters, frameworks risk being siloed to certain hosting environments. The speaker praises the open-source community’s role in maintaining these adapters, citing examples where big players like Next.js or Remix handle advanced patterns like partial prerendering or cache revalidation. Ultimately, multi-provider adaptability is seen as indispensable for modern web apps.

### 04:00 - 04:20 Server-Side Signals and Live Updating Concepts

Here, the speaker entertains the idea of “signals on the server,” akin to how LiveView or Phoenix handle persistent sessions. They describe ways to push minimal updates over the network, potentially reducing the overhead of full re-renders. Although frameworks typically use server functions or stateful endpoints, the notion of real-time server signals sparks curiosity.

This prompts questions about underlying protocols—SSE, WebSockets, or custom streams. They note that frameworks like Solid Start can theoretically unify such patterns through specialized hooks, offering partial reactivity from server to client. While the approach remains experimental, it highlights an appetite for new patterns that handle multi-device interactivity without complicated round-trip logic. The chapter concludes with the host acknowledging that such ideas, if refined, might shape future meta-framework design.

### 04:20 - 04:40 Handling Async Iterables and Potential Use Cases

Expanding on server-side signals, the conversation touches on async iterables, discussing how they could integrate with standard fetch or streaming APIs. By sending data in chunks, the client could react incrementally, similar to how streaming works in frameworks implementing advanced SSR. The host ponders whether these streams might replace or augment typical request-response cycles.

They also mention how async iterables could open doors for real-time dashboards or collaborative apps, where small updates continuously arrive from the server. The complexity, however, lies in bridging these streams with frameworks’ existing reactivity, ensuring type safety and avoiding an explosion of custom code. The takeaway is that incremental streaming aligns with the direction modern frameworks are headed, though practical details remain in flux.

### 04:40 - 05:00 Closing Thoughts on Ecosystem, Community, and Future Plans

In the final segment, the host reflects on broader community dynamics. They acknowledge that “ecosystem” now extends beyond core libraries to a massive network of design systems, component kits, and open-source maintainers. New initiatives such as fellowship programs in the Solid community aim to support crucial libraries, mirroring how React or Vue ecosystems benefit from sustained developer involvement.

Wrapping up, the speaker thanks everyone for following along through hours of discussions. They emphasize the importance of collaboration and transparency in shaping the next generation of web frameworks. Looking ahead, the host teases future deep dives on transitions, streaming, server signals, and more. With that, they sign off, leaving viewers with a sense of how quickly the JavaScript world is evolving and how vital it is to keep sharing findings and progress.