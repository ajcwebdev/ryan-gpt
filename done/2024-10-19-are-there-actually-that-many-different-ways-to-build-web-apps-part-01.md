---
showLink: "https://www.youtube.com/watch?v=ja4LIaxxUeA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Are There Actually That Many Different Ways to Build Web Apps?"
description: ""
publishDate: "2024-10-19"
coverImage: "https://i.ytimg.com/vi/ja4LIaxxUeA/maxresdefault.jpg"
---

## Episode Description

A wide-ranging exploration of modern web app architectures, performance trade-offs, and reactive programming patterns, with an emphasis on using signals and server-driven workflows.

## Episode Summary

This conversation examines different strategies and models for building complex web applications, focusing on how data and state ownership affect performance, reusability, and developer experience. The speaker compares single-page apps, server component approaches, and fully stateful server setups, highlighting the trade-offs each method introduces for page load, client interactivity, and mutation handling. Various technologies, including frameworks like Solid, React, and LiveView, are discussed for their unique ways of handling hydration, caching, and asynchronous updates. Throughout, the speaker addresses advanced topics such as resumability, optimistic UI patterns, and architectural constraints that arise when integrating server-driven reactivity. By considering real-world examples, code snippets, and potential future directions, the transcript offers insights into how developers can weigh infrastructure requirements against performance goals and user expectations.

## Chapters

### 00:00 - 06:00 &nbsp; Early Intro and Context Setting

In the first few minutes, the speaker greets viewers and explains that this session continues an ongoing discussion about web components, server-driven rendering, and performance nuances. They acknowledge recent streams have been dense with technical insights and set the stage for a deeper look into how frameworks manage data, state, and rendering across the client and server.

They then revisit a comment from a previous session about reporting performance “bugs” to browser teams. This prompts reflections on how performance issues are sometimes treated as baseline realities rather than errors, illustrating that frameworks and browser vendors often take different perspectives on what constitutes a fixable bug versus a fundamental limitation. It sets the tone for a conversation focused on architectural decisions and trade-offs.

### 06:00 - 12:00 &nbsp; Revisiting Web Components and Framework Nuances

As the conversation moves forward, the speaker recaps the web components debate, emphasizing that simply migrating from one framework to “web components” does not inherently optimize performance or reduce JavaScript. Instead, the speaker notes that web components alone do not represent an architecture—understanding the underlying approach, like using Lit or another library, truly determines efficiency.

They explore how rewriting an application from React to web components might indirectly improve performance because developers rewrite and refine code, rather than any inherent speed from web components. The speaker stresses that actual gains often come from reevaluating the entire system, from data flow to bundling strategies, rather than the wrapper technology itself.

### 12:00 - 18:00 &nbsp; Solid Framework Updates and Hackathon Highlights

Here, attention shifts to recent developments in the Solid ecosystem. The speaker mentions SolidHack, an ongoing hackathon that features bounties and prizes to encourage community contributions. These bounties cover tasks like completing missing documentation or building new integrations, all aimed at strengthening the Solid ecosystem.

They provide a quick status update on other Solid projects, such as Solid Start and the router, hinting at recent releases and bug fixes. The hackathon serves a dual purpose: rewarding community excellence and filling gaps in libraries or documentation. It showcases the collaborative nature of open-source development and the enthusiasm around Solid’s future.

### 18:00 - 24:00 &nbsp; Balancing Performance and Browser Constraints

In this segment, the speaker addresses concerns about micro-optimizations and whether certain browser behaviors—like for/let loops—truly qualify as “bugs.” They illustrate that frameworks and the underlying platform naturally have different responsibilities, and some performance differences may simply be design trade-offs.

They also talk about advanced scenarios where developers might obsess over small performance metrics, realizing that using a specialized approach to micro-benchmarks usually reveals trade-offs that don’t necessarily translate to real-world user experiences. This part underscores the importance of pragmatic decision-making rather than chasing small percentage gains.

### 24:00 - 30:00 &nbsp; Classifying App Architectures into Three Buckets

The speaker proposes that high-level web app architectures can be grouped into three main categories: single-page apps with client-side state, server component-based approaches (like Astro or React Server Components), and fully stateful servers (like Phoenix LiveView). They note that each category handles data flow, routing, and interactivity differently.

Breaking them into these categories clarifies which side—client or server—ultimately “owns” the state for rendering and interaction. This taxonomy helps developers see patterns and trade-offs: single-page apps excel at local ephemeral control, server components optimize for data efficiency, and stateful servers handle persistent connections and real-time updates but may face scalability or infrastructure hurdles.

### 30:00 - 36:00 &nbsp; Highlighting Trade-Offs: SPA vs. Server Components vs. LiveView

Next, they compare how each of these three architectures tackles key challenges like navigation, page load performance, and handling user-driven mutations. Single-page apps shine at immediate, local updates, but can suffer initial-load complexity. Server components can reduce client-side JavaScript but may involve repeated data or template transfers.

Stateful servers, exemplified by LiveView in Elixir, offer a unified state model with minimal client code, yet demand persistent infrastructure. The speaker underscores that “best” depends on each project’s needs, with page load times, concurrency requirements, and developer familiarity often driving the ultimate choice.

### 36:00 - 42:00 &nbsp; Edge Cases and the Role of Web Sockets

Diving into real-time interactions, the speaker notes that once web sockets or long polling for real-time communication enter the picture, architecture boundaries can blur. Whether a single-page app or server-driven approach, adding real-time events means building some layer of persistent connection or polling.

In practice, server-based solutions like LiveView reduce the complexity of state syncing by centralizing logic, though they might not be feasible for large-scale apps that rely on horizontally scaling stateless servers. The discussion reiterates how real-time features highlight each framework’s core design and limitations.

### 42:00 - 48:00 &nbsp; Crafting Mental Models for Client vs. Server Data

During this interval, the focus is on how data flows across client and server boundaries. The speaker proposes that the question of “who owns the state?” is fundamental. They break down the complexities of ephemeral UI states, optimistic updates, and concurrency, pointing out how frameworks must define clear rules for updating each side.

They reflect on how ephemeral states, like a checkbox or local form entries, may not need server involvement, whereas main application data likely belongs on the server. This ongoing tension shapes architectural strategies, whether you’re building an e-commerce site, a chat app, or any real-time tool.

### 48:00 - 54:00 &nbsp; Code Examples and Infrastructure Observations

Here, the speaker references code snippets and existing demos, using them to illustrate revalidation patterns, client-side caching, and advanced caching strategies. They emphasize that while certain meta-frameworks provide easy defaults—like invalidating an entire query after each mutation—this can be optimized.

They also note that building custom caching wrappers around fetches, or employing single-flight mutations, introduces its own set of implementation details. Observations from Next.js and React come into play, clarifying that performance often improves when you minimize redundant data round-trips and handle partial updates gracefully.

### 54:00 - 01:00:00 &nbsp; The Complexity of Universal Caching Approaches

As the first hour concludes, the speaker acknowledges attempts to unify client and server caching in a single pattern can be intricate. Wrapping server functions in client-side caches doesn’t guarantee the same logic applies when the server is hit directly through an endpoint. 

They briefly mention Next.js’s `use cache` feature, highlighting that server-level caching may operate differently from client-level caching. Even naming conventions in frameworks—like “cache” or “loader”—shape how developers perceive these features. Ultimately, universal caching solutions must handle revalidation, hydration, and server endpoints with consistent logic.

### 01:00:00 - 01:06:00 &nbsp; Deepening the Discussion on Next’s `use cache`

Early in the second hour, they discuss how Next.js’s proposed `use cache` works, possibly adding a direct approach to memoizing server function outputs. However, the speaker points out potential complexity when dealing with arguments and how best to handle ephemeral states or revalidation. 

They imagine scenarios where developers want to pass arguments to a cached server function, highlighting that building robust caching that accounts for dynamic parameters and expired data is far from trivial. Tools like time-based or tag-based invalidation add another layer of decisions.

### 01:06:00 - 01:12:00 &nbsp; Contrasting Wrappers and Compiler-Driven APIs

Continuing on Next.js and caching, the speaker notes how these features often rely on a combination of runtime and compiler transformations. They point out that while a wrapper function might appear sufficient, it can fail if there’s no direct call path on the server side. Compiler-level approaches can track usage more precisely but can also reduce flexibility.

This leads into bigger questions about how frameworks like Solid or Next might compile away complexities, or how developers might need to manually specify certain caching behaviors. The tension between automated transforms and explicit code is a recurring theme in modern frameworks.

### 01:12:00 - 01:18:00 &nbsp; Developer Experience vs. Technical Constraints

In this segment, the conversation moves toward how caching design inevitably impacts developer experience. The speaker concedes that a purely magical system might look great in demos, but advanced users demand ways to override or fine-tune caching, revalidation, and concurrency. 

They reiterate that many attempts at universal caching hit stumbling blocks—especially in SSR or SSG contexts—because the server and client have different lifecycle events. The speaker suggests a middle ground of default, easy-to-use APIs combined with escape hatches for specialized needs.

### 01:18:00 - 01:24:00 &nbsp; Transitioning to Real-Time Signals and Their Use Cases

After extensive caching talk, attention shifts to signal-based data flow. Signals excel at local reactivity, but the speaker notes that on the server side, signals do not inherently handle event-driven or continuous flows well. They require a subscriber to be present, which might not align with certain real-time or asynchronous patterns.

The speaker ponders whether signals or event emitters are more suitable for reactive backends and references ongoing experiments in the Solid community, hinting at new approaches for bridging these gaps. They underscore that not every real-time scenario maps neatly to signal-based logic.

### 01:24:00 - 01:30:00 &nbsp; Potential for LiveView-Like Models in JavaScript

Reflecting on how LiveView in Elixir centralizes state on the server, the speaker wonders if JavaScript can adopt similar patterns. They detail how LiveView eschews typical hydration or client-side complexity, using a single model for data flow. Yet they admit that fully stateful servers are often impractical in typical JavaScript deployments, where serverless or CDN-based scaling is common.

This prompts them to consider a “best of both worlds” scenario, potentially leveraging signals for partial updates but still acknowledging that stateful concurrency requires more than just a reactive library. Real-time apps often face deployment constraints that JavaScript ecosystems may not solve as elegantly as Erlang/Elixir’s Beam environment.

### 01:30:00 - 01:36:00 &nbsp; Weighing Page Load vs. Real-Time Interaction Costs

Here, the speaker circles back to fundamental trade-offs around page load times. Single-page apps might have heavier initial downloads but excel at dynamic updates. Server-side approaches minimize that cost but can require frequent re-renders if data changes repeatedly.

They point out that real-time or stateful interactions demand infrastructure that can handle persistent connections or advanced caching logic. For large-scale or distributed architectures, ephemeral server connections complicate these patterns further, leading to a rich interplay between developer preferences and realistic infrastructure setups.

### 01:36:00 - 01:42:00 &nbsp; Revisiting Resumability, Quick, and Other Techniques

As the discussion flows, the speaker returns to how frameworks like Quick or Marco attempt to minimize overhead by partially hydrating or resuming state. They acknowledge that truly optimizing initial page load often involves advanced compilation strategies and granular splitting of server versus client code.

While some frameworks try to automate these steps, the speaker cautions that each approach comes with complexity. Larger applications quickly challenge naive assumptions about what remains on the server, what needs to run client-side, and how to keep these processes in sync without bloating bundles.

### 01:42:00 - 01:48:00 &nbsp; Single-Flight Mutations and Action-Based Patterns

Moving along, the speaker outlines a pattern called single-flight mutations: instead of making a request, awaiting it, and then refetching data, you bundle the fetch into a single round trip. This can drastically cut down on bandwidth and time. In Solid Start, the speaker notes how they revalidate the entire data set by default, though advanced users might optimize further.

They offer up examples of partial updates versus returning just the changed item to the client. Both approaches are valid; the trade-off is complexity versus bandwidth. This conversation touches again on how frameworks can make simple defaults easy, while enabling power users to handle more granular updates.

### 01:48:00 - 01:54:00 &nbsp; Framework-Specific APIs for Caching and Mutation

Here, the focus returns to code-level examples in Solid or Remix. The speaker underscores that “cache” naming often confuses new developers; it might handle reactivity, short-lived deduping, or SSG-like back-forward caching. They highlight that frameworks each have unique definitions of “loader” or “action,” sometimes merging or splitting these concerns differently.

They also explore naming conflicts—why “cache” might be misleading and how “query” or “loader” might be more intuitive. This segment captures the tension in designing universal terminology for distinct steps in data fetching, mutation, and invalidation.

### 01:54:00 - 02:00:00 &nbsp; Thoughts on Extending or Replacing Built-In Cache APIs

Heading toward the two-hour mark, the speaker contemplates building on top of the existing cache or query APIs, such as layering persistent storage or local session data. They note how purely hooking into these wrappers can break revalidation flows if done improperly. This leads to a discussion of how advanced caching typically requires custom logic or a more extensible API design.

They speculate on future frameworks or library improvements, pointing out that while many attempt universal solutions, real-world apps often need purposeful overrides for nuanced use cases. The speaker highlights that certain advanced scenarios—like offline modes—stretch frameworks in unexpected ways.

### 02:00:00 - 02:06:00 &nbsp; Reflecting on Server Components and Missing Pieces

In this short section, the speaker circles back to server component approaches, acknowledging that they promise reduced client bundle sizes but can complicate user-driven mutations. They mention that React’s server components or Astro-like setups often face double serialization issues unless carefully managed.

They also recognize there might be ways around these pitfalls, but they remain challenging to implement. The speaker confesses that server components continue to interest them, yet each attempt reveals deeper intricacies in bridging client interaction and SSR performance gains.

### 02:06:00 - 02:12:00 &nbsp; Real-Time Considerations: HTMX, Turbo, and Similar Tools

Returning briefly to real-time or partial-page updates, the speaker notes how tools like HTMX let you swap HTML fragments dynamically without a heavy JavaScript footprint. They compare these to the more integrated approaches from Next.js or Remix. 

Despite the allure of partial-page swapping, they emphasize that it doesn’t solve deeper synchronization problems or ephemeral state handling. Ultimately, you still confront the question of how local UI states and server data remain aligned over time.

### 02:12:00 - 02:18:00 &nbsp; Summarizing the Three-Fold Architecture Breakdown

Around this point, the speaker concisely revisits the earlier classification: SPA, server components, and fully stateful servers. They underscore how crucial it is to match your architecture to your needs. If your primary bottleneck is initial page load, an island or server component model might help; if you need real-time concurrency, a stateful server approach could be best.

However, these categories aren’t rigid. Many frameworks allow features of one category to appear in another. The main goal is clarity on which part of the stack owns state and handles rendering, particularly as applications grow in complexity.

### 02:18:00 - 02:24:00 &nbsp; Practical Tips on Balancing Client and Server Loads

Here, the conversation shifts to more concrete tips. For instance, single-page apps can mitigate slow initial loads by code-splitting, preloading, or employing advanced bundling. Server-centric solutions rely on caching layers, while LiveView-like setups demand consistent network connections and robust concurrency management.

They reiterate that each approach thrives when aligned with the right constraints. For many typical apps—like e-commerce or content sites—server-side logic plus minimal client code might suffice. For specialized use cases, more advanced architecture pays off but also requires deeper engineering efforts.