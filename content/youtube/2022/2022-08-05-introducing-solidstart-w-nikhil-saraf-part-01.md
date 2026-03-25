---
showLink: "https://www.youtube.com/watch?v=eAwuPvRXNdY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Introducing SolidStart w/ Nikhil Saraf"
description: ""
publishDate: "2022-08-05"
coverImage: "https://i.ytimg.com/vi/eAwuPvRXNdY/sddefault.jpg?v=62eaa4d2"
---

## Episode Description

A wide-ranging conversation about SolidStart’s server-side rendering, server functions, and progressive enhancement, highlighting new approaches to building modern web applications.

## Episode Summary

This extended recording features an in-depth discussion about the creation and evolution of SolidStart, a meta framework that expands Solid.js with server-side rendering, routing, and powerful data handling mechanisms. The participants share their experiences with building and refining these tools, emphasizing how server functions enable secure calls, how forms can deliver full progressive enhancement, and how optimistic UI transitions improve user interactions. They also address platform-specific deployments, showing examples of how adapters work for services like Cloudflare, Netlify, and others. Timestamps highlight short segments that each introduce a fresh aspect of the conversation: from understanding the project’s background, to exploring advanced state management and server-handling techniques, and even covering new experiments in partial hydration and islands architecture. The lively exchange concludes with broader reflections on the state of JavaScript frameworks, tooling complexities, and the future directions that SolidStart may take in web development.

## Chapters

### 00:00:00 – Introduction and Early Context

In the initial minutes, the host greets viewers and confirms that the long-awaited conversation about SolidStart is underway. They provide background on how the project began, describing how early efforts focused on a Hacker News demo and basic SSR examples in Solid. The discussion then underscores the importance of having a robust meta framework around Solid.js, rather than expecting developers to piece together custom solutions. Listeners learn that significant efforts have gone into refining server-side rendering, routing, and data handling to create an integrated developer experience for Solid.

There is also mention of how personal motivations influenced the decision to begin working on SolidStart. The speakers highlight the tension between devoting time to a meta framework versus focusing solely on core features, and they reflect on lessons learned from other projects like Next.js or Remix. This foundation-setting portion clarifies that SolidStart is intended to streamline how developers organize and deploy Solid apps, offering a consistent approach to routing, code splitting, and server functions without duplicating code or creating one-off custom setups.

### 00:06:00 – Project Goals and Collaboration

Here, the conversation shifts to the goals of collaboration among the Solid core team and community contributors. They discuss how building a meta framework is a major undertaking, involving not just bundling and routing, but also a deeper integration of server-client logic. This point highlights complexities like ensuring Hot Module Replacement works smoothly, testing multiple adapters for various hosting providers, and catering to diverse use cases. There is a realization that a great developer experience must accommodate different preferences for structure, SSR, and static generation.

Listeners also hear about the synergy between core Solid contributors and new team members who bring fresh perspectives. The hosts explain that incremental improvements in SSR or custom rendering features often require holistic rethinking of how apps are composed. They credit the direct feedback loop with users for shaping SolidStart’s direction, emphasizing the need to strike a balance between offering “batteries included” and retaining enough flexibility for specialized needs. This segment sets the stage for deeper dives into how these objectives guided design decisions.

### 00:12:00 – Revisiting Hacker News and SPA Foundations

In this timeframe, the hosts revisit the Hacker News demo, which served as a foundational SPA example for Solid. They describe how it once relied on a standard Vite template, employing single-page routing and client-side data fetching. Although fully functional, it omitted server-side rendering and deeper integration with SolidStart’s emerging features. Demonstrating how quickly a basic client-rendered project could be ported into SolidStart reveals the framework’s compatibility with existing Solid apps.

Attendees learn that SolidStart aims to streamline common tasks like project setup, routing structures, and file-based code splitting. With a simple toggle in configuration, the conversation shows how one can shift from purely client-side rendering to full SSR or a hybrid approach. This flexibility allows for a gentle migration path—developers can bring their prior single-page code, keep it working as-is, then enable server rendering once they see the benefits in performance or SEO. It underscores that minimal code changes can unlock new capabilities.

### 00:18:00 – SSR Toggle and Key Framework Features

Now the discussion highlights the minimal steps needed to turn on server-side rendering in SolidStart. By changing a single flag in the Vite configuration, an application that was a fully client-rendered single page transforms into an SSR-capable project. The presenters describe how data loading mechanisms, streaming, and partial hydration become readily available, showcasing the synergy of Solid’s reactivity model with server-driven content. They touch on the difference between HTML-first approaches versus shipping minimal static HTML and hooking data on the client.

In exploring these features, emphasis is placed on how SSR can improve initial load times and SEO by delivering fully rendered markup. Yet, the conversation also acknowledges possible trade-offs, including the overhead of server calls or complexities around caching. They revisit the significance of streaming, referencing how Solid introduced streaming SSR capabilities early in its development. This flexible model becomes vital for multi-tier apps that want to progressively display data without blocking the entire rendering pipeline.

### 00:24:00 – Server Functions and Isomorphic Data Fetching

The hosts move on to discuss the pivotal addition of server functions, which allow developers to mark any code as strictly server-only while still calling it in a convenient client-like manner. This leads to an insightful explanation of how “RPC-like” patterns emerge naturally, enabling secure database or external API calls without exposing credentials. By compiling these functions away from the client bundle, the app fosters a safer environment, as sensitive code never arrives in users’ browsers.

Concrete examples illustrate how a developer can import a “server” function in a component, call it with certain parameters, and seamlessly retrieve results. On the server, the code interacts with environment variables, databases, or file systems. On the client, the same call transforms into a lightweight fetch. The conversation reveals that this feature drew inspiration from other frameworks experimenting with RPC approaches, bridging the gap between purely isomorphic data fetching and specialized server-endpoints, all while preserving type safety and consistent flow.

### 00:30:00 – Fine-Grained vs. Full-Page Updates

In discussing data loading, the presenters highlight Solid’s long-standing preference for fine-grained reactivity. Unlike frameworks that rely on heavy caching solutions or manual cache invalidation, Solid updates data at a more granular level. The talk covers how resources and signals coordinate to re-render only the affected components. This approach offers performance gains, particularly where large re-renders can degrade the user experience. They contrast the overhead of patching caches in typical client state management solutions with Solid’s simpler approach.

Listeners hear how large SSR frameworks often re-fetch entire pages or forcibly re-run entire react trees. Solid’s partial reactivity keeps everything carefully scoped, so when a single resource updates, only its dependent sections re-evaluate. They also emphasize that SolidStart continues to tap into this design philosophy—server function calls can trigger partial re-fetching, and the results feed straight into reactive data structures. This leads to more fluid transitions, whether an app relies on progressive hydration or a hybrid server-client data strategy.

### 00:36:00 – Actions, Forms, and Mutations

Focusing on user interactions, the conversation introduces the concept of createServerAction—SolidStart’s approach to mutations. By returning a specialized store that tracks pending states, errors, or successful completions, it effectively acts like a “useMutation” hook. Developers attach this to forms or custom function calls, bridging server calls with reactivity. The advantage is that, as soon as a form is submitted, the data is processed on the server, and the result triggers an automatic invalidation of relevant data sources.

They share examples of how this seamlessly integrates with progressive enhancement. Even if JavaScript is disabled, forms still post to the server and redirect, ensuring universal accessibility. Once JavaScript is enabled, the same form triggers optimistic updates, partial invalidations, or state transitions in real time. Each action object can hold temporary states—like whether a record is “deleting” or “updating”—giving the UI immediate feedback. This synergy helps craft responsive, low-latency interactions while retaining server security boundaries.

### 00:42:00 – Progressive Enhancement and Optimistic UI

The speakers delve further into how progressive enhancement shapes SolidStart’s design. Using forms as a base, they show that the entire page can work with or without JavaScript. On the client, however, the same endpoints enable optimistic UI patterns. This means a user can see changes instantly—such as a new item added or a field updated—before the server confirms it. Once the server response arrives, it reconciles the final state. If an error happens, the UI can revert automatically.

They share real-world usage scenarios to highlight how forms, resource invalidation, and concurrency controls unify. Multiple submissions can coexist, each with its own pending state, so large-scale applications handle complex interactions gracefully. They compare this approach to heavier solutions like Apollo or React Query, where developers often resort to manual cache rewrites. With SolidStart, the conversation underscores that data transformations and UI transitions flow from an integrated system, letting developers write minimal glue code for advanced user experiences.

### 00:48:00 – Error Handling and Boundaries

Error handling emerges as another essential piece, particularly when dealing with server functions. This segment describes how thrown errors on the server can be caught in the client, reconstituted, and displayed either in a localized error state or escalated to a global boundary. They note that not all errors warrant a full page fallback—a validation error, for instance, might only require a small message near a form field. SolidStart’s approach complements Solid’s existing error boundaries to achieve flexible error scenarios.

They mention specialized “server error” types that help strip out sensitive information before errors reach the user. If a database connection string or environment secret appears in an exception message, the framework ensures production builds hide it. This keeps vital information secure while still giving developers enough context during development. Listeners are encouraged to adopt custom error classes for domain-specific messages or HTTP status codes, showcasing that SolidStart’s error boundary integration extends seamlessly from route data to actions.

### 00:54:00 – Authentication and Sessions

Authentication concerns enter the spotlight, where they walk through a typical login route. In SolidStart, each page can define a server data function that checks session cookies or tokens. If the user is unauthenticated, a quick redirect is thrown, forcing them to the login form. This structure mimics popular solutions like NextAuth or Remix, but keeps everything in the same environment. They highlight examples of reading and writing cookies or retrieving user details from a server environment.

Using dynamic session retrieval, the presenters demonstrate how to ensure restricted routes remain fully protected. On the server side, data functions or actions can call requireUserId, short-circuiting the request with a redirect if authentication fails. Because of the integrated route-based approach, the rest of the component never executes. This strategy fosters clarity, letting developers read or set sessions from standard code blocks while trusting that the browser never sees privileged data. The conversation underscores how cohesive session management spares duplicative setup.

### 01:00:00 – Adapters and Deployment Targets

The talk now covers SolidStart’s adapters for hosts like Netlify, Vercel, Cloudflare Workers, and Deno Deploy. Each platform provides a distinct environment, from Node-based servers to edge workers with specific APIs. Adapters abstract away differences so that a single codebase can compile and deploy seamlessly. The team reveals how each environment imposes constraints—such as how one reads request headers or writes responses—and how SolidStart’s architecture ensures minimal friction in bridging these platform variations.

They discuss practical examples like deploying a Hacker News clone to Netlify Edge or Vercel Edge. The process involves hooking into platform-specific build APIs, ensuring SSR responses remain quick and data fetching stays secure. By using the request/response model, SolidStart aligns well with serverless paradigms. This conversation also acknowledges that advanced features like incremental static regeneration or specialized caching may require extra steps. Nonetheless, the existence of multiple adapters demonstrates the framework’s commitment to flexible and widely compatible deployments.

### 01:06:00 – Cloudflare Workers and Durable Objects

Cloudflare’s environment stands out for offering durable objects and KV storage—services that let developers maintain stateful logic in a global, edge-distributed context. This chapter shows how a chatroom or collaborative application can keep persistent data in a single location. By combining SolidStart’s server functions with Cloudflare’s durable objects, developers create real-time applications where new socket connections join the same “room.” Data remains consistent across sessions, all managed at the edge for low-latency updates.

They walk through a sample project where each server function receives an env parameter granting access to Cloudflare’s KV and durable object bindings. The conversation clarifies that these features unify with Solid’s approach, letting code run seamlessly on the server side. They demonstrate how to handle concurrency, membership tracking, and WebSocket messaging with minimal overhead. Because the framework handles route definitions and compilation, the developer focuses mainly on domain logic, letting Cloudflare’s platform deliver global scale and performance.

### 01:12:00 – WebSockets and Real-Time APIs

Shifting to real-time communication, the hosts illustrate how SolidStart integrates with WebSockets. By designating a server function to handle an upgraded request, developers get both the client and server endpoints for messaging. This approach merges typical WebSocket pairing with the convenience of Solid’s compiled boundaries, ensuring secret keys or logic remain hidden. They share code snippets for ping-pong examples, showcasing how data flows back and forth instantly while the rest of the page remains static or partially hydrated.

They explore multi-user scenarios, explaining how each connection can be uniquely identified and tracked for presence lists, chat rooms, or collaborative editing. For Cloudflare-based apps, the server function can link to a durable object, maintaining shared state across multiple WebSocket sessions. This underscores that real-time infrastructure does not require separate frameworks—SolidStart accommodates these workloads natively. Listeners learn how a developer can unify user authentication, real-time updates, and SSR routes in a consistent and secure manner.

### 01:18:00 – SSE (Server-Sent Events) Integration

The dialogue then touches on server-sent events (SSE) as a lighter alternative to WebSockets for one-way streaming. They reveal how SolidStart provides an eventStream helper that configures the correct response headers and sets up a readable stream. When the server enqueues data, clients receive discrete “messages” without needing a two-way channel. This can be ideal for scenarios like progress updates or real-time logs, where the client only needs to listen for changes.

They compare SSE to the partial streaming SSR approach, clarifying that SSE is separate—intended for ongoing push notifications that continue after the main page is loaded. The code example demonstrates using an event source on the client, which ties neatly into Solid signals for instant UI updates. Because it’s all built on standard web primitives, developers enjoy broad compatibility. The hosts highlight that mixing SSE with server actions can produce a dynamic interface that remains reactive from initial load to incremental updates.

### 01:24:00 – Flexibility and Philosophical Underpinnings

Pausing to reflect, the participants emphasize that a core goal of SolidStart is developer freedom. They note how frameworks often dictate singular patterns for data fetching or SSR, whereas SolidStart tries to unify fundamental building blocks—like resources, actions, and server functions—so developers can combine them as needed. This approach fosters an environment where you can start with a purely client-driven code and, through minimal changes, adopt SSR, partial hydration, or streaming.

They credit earlier influences, from GraphQL’s separation of queries and mutations to Remix’s emphasis on progressive enhancement. SolidStart merges these concepts while retaining Solid’s hallmark of fine-grained reactivity. The discussion underscores that each feature—file-based routing, server actions, streaming—arrived organically from user demands rather than forced design. The aim is a cohesive set of primitives that can handle everything from static blogs to highly interactive, real-time apps. This philosophical clarity guides the rest of the conversation.

### 01:30:00 – Transitioning Existing Projects

Conversation resumes with detailed instructions on migrating existing React or plain Solid applications into SolidStart. They illustrate how a developer can rename or reorganize files to slot into the new routing system. Code splitting becomes seamless thanks to the file-based approach, which automatically produces parallel bundles. Meanwhile, server functions reduce the need for external REST or GraphQL layers. This lowers overhead, as you don’t have to maintain an entirely separate codebase for server endpoints.

They stress that the incremental adoption path is deliberate. If a team already has a functioning client-driven solution, they can integrate a few server actions for secure calls without rewriting everything. Over time, they can further adopt SSR or streaming. The key message is that SolidStart’s structure—combining pages, data, and advanced server capabilities—scales from small prototypes to large enterprise applications. That said, it’s not locked into any single style, reinforcing the theme of flexible building blocks.

### 01:36:00 – Nested Routing and Data Parallelism

A hallmark of Solid’s router is the concept of nested routes that can independently fetch or wait on data. They describe how each route segment has a routeData function, which resolves in parallel, delivering a highly responsive user experience. Listeners hear about the parallels to React’s remix, but also how Solid had early experiments in parallel data loading. The conversation underscores that SolidStart’s design merges these threads, letting one quickly harness advanced routing features without duplicating logic.

They delve into how routeData can be declared inline with components. The synergy between data loading and component rendering ensures the code is co-located, simplifying maintenance. If a developer needs multiple data sources—like user info, a list of items, and configuration details—they can define multiple server data calls in the same file or across nested segments. This arrangement reduces the typical “waterfall” effect. The bigger picture is that nested routing plus partial reactivity yields a streamlined, fast user experience.

### 01:42:00 – Streaming: Async vs. Immediate Rendering

Expanding on streaming, they revisit how Solid’s server rendering can render “asynchronously” by waiting for all data, or can “stream” partial HTML as data loads. The latter technique is popular because it speeds up perceived load times for slow or large data sets. Viewers hear examples of an e-commerce site that quickly shows top-level layout or product info, then trickles in user-specific recommendations. SolidStart bakes in the ability to toggle between these modes at both the route and resource level.

However, the team acknowledges that streaming complicates how error boundaries or partial hydration play out. If some data fails mid-stream, the UI might show placeholders that get replaced by fallback messages. They discuss how the system must handle early flushes of HTML that do not disrupt the rest of the page. Despite these complexities, participants champion streaming for delivering a more dynamic, “app-like” feel even on initial load. This segment clarifies that SolidStart aspires to unify cutting-edge SSR patterns for real-world use.

### 01:48:00 – Handling Edge Cases and Transition Management

They next address transitional states, particularly concurrency and race conditions. Because multiple actions might be in flight, the UI can become inconsistent if updates arrive out of order. The conversation describes how transitions in Solid queue changes so that they settle in a known final state. This prevents flickering or stale data. The speakers highlight how forms, server actions, and signals coordinate so that even complex multi-step flows remain predictable.

They also point out that partial re-renders triggered by updated resources typically handle concurrency gracefully—no separate library or manual merges are required. In contrast, older solutions might require explicit “component is unmounted” checks or re-checking data validity. Solid’s approach eliminates a large class of common pitfalls. Combined with typed server functions, transitions can alert the developer immediately if arguments or returns mismatch. Through consistent design, advanced concurrency remains approachable, letting teams focus on user-centric logic rather than brittle patchwork code.

### 01:54:00 – Example Projects and Real Deployment Stories

Here, the hosts share success stories from developers who deployed apps using SolidStart in a production or near-production setting. They note how quickly users managed to port existing code, praising the shallow learning curve for those familiar with React’s mental model. Real-world feedback—like the need for partial data loading, error overlays, or improved dev tooling—drove new features in the framework. By responding swiftly to community suggestions, the team refined everything from session handling to the default file-based routing structure.

Another anecdote covers a user migrating a big form-based admin dashboard. Thanks to createServerAction, secure endpoints replaced precarious client-level fetch calls. The result: fewer back-and-forth requests, simpler authentication logic, and immediate SSR benefits. The conversation highlights that while official documentation is still maturing, early adopters collaborate in Discord or GitHub to smooth out rough edges. Ultimately, these deployment stories confirm SolidStart’s potential for diverse scenarios, from small side projects to mission-critical enterprise apps.

### 02:00:00 – Type Safety and TS Integration

Now the focus shifts to TypeScript integration. The conversation stresses that strong type definitions give developers added confidence when calling server functions or editing resource signatures. They show how, with minimal syntax, routeData and server actions can infer input shapes, guaranteeing that misused parameters cause compilation errors. This fosters reliability, especially when building large codebases that rely on shared models between client and server.

They also underscore how the entire pipeline benefits from TS’s intelligence. For instance, if a developer modifies a database schema, calls to server functions referencing old fields will surface immediate type errors. In prior approaches, these mistakes might only appear at runtime. Because SolidStart leans on Vite’s environment for building the final bundle, a single build step can unify the entire codebase. In short, robust type safety enhances maintainability and reduces the bug-prone divide between client-side code and server-side logic.