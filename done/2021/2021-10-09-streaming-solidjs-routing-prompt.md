---
showLink: "https://www.youtube.com/watch?v=YxroH_MXuhw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS: Routing"
description: ""
publishDate: "2021-10-09"
coverImage: "https://i.ytimg.com/vi/YxroH_MXuhw/sddefault.jpg?v=6160aebc"
---

## Episode Description

Ryan Carniato explores SolidJS routing, covering control flow fundamentals, performance trade-offs, partial hydration, nested routing with Solid App Router, suspense transitions, and advanced reactivity internals.

## Episode Summary

In this nearly three-hour livestream, Ryan Carniato dives deep into routing as the backbone of web applications built with SolidJS. He begins by setting the stage with recent JavaScript events—Jamstack Conf takeaways, Astro’s partial hydration model, and component memoization patterns in React and Vue. From there, he examines the zero-kilobyte JavaScript hype versus real-world performance constraints, using network vs. execution timing and an eBay case study to illustrate streaming and partial hydration benefits. Shifting to SolidJS specifics, Ryan unpacks control flow mechanisms: signals, effects, and DOM updates, then demonstrates efficient list rendering via the `<For>` helper and benchmarks keyed vs. non-keyed diffing. He introduces simple hash-based routing before unveiling the nested capabilities of Solid App Router, including lazy route loading, suspense-driven data fetching with `createResource`, and seamless UX via suspense transitions. In the final third, Ryan unveils the inner workings of Solid’s reactivity primitives—`createSignal`, `createComputed`, `createRenderEffect`, and `createEffect`—alongside lifecycle strategies, server-side rendering with streaming, and hydration mechanics. The stream closes with community Q\&A, content requests, and next-stream planning.

## Chapters

### 00:00:00 - Introduction & Stream Overview

Ryan Carniato kicks off the stream by welcoming viewers and outlining the night’s agenda: a deep exploration of routing in SolidJS and its ties to control flow. He emphasizes routing’s critical role as the web’s backbone and hints at tying it later to Solid’s suspense and transition systems. Early community shout-outs and small talk give way to context setting, where Ryan connects routing with control flow fundamentals—covering why understanding reactive boundaries and update propagation is key before building any robust client-side router.

In this introduction, Ryan also teases a tour through recent JavaScript events—Jamstack Conf highlights, Astro’s rising popularity, and emerging patterns that influence routing choices. He frames the conversation around practical concerns: network performance, partial hydration, and how SolidJS can leverage fine-grained reactivity. The segment establishes both technical context and viewer engagement, setting the stage for hands-on demos and code deep dives to follow.

### 00:05:00 - Jamstack Conf & Astro Insights

Diving into current JavaScript happenings, Ryan shares takeaways from Jamstack Conf and how Netlify’s sponsorship of SolidJS has elevated his interest. He discusses award-winning talks at the conference—especially those highlighting partial hydration patterns and islands architecture—and notes shout-outs his day-job framework, Marko, received for innovation. Observing the convergence between multi-page and single-page apps, he outlines how Astro’s zero or reduced JavaScript philosophy resonates with these emerging server/client hybrid approaches.

Ryan then contextualizes these trends with component-based reasoning: drawing parallels to Dan Abramov’s guidance on `React.memo` and how hoisting state or passing static children can isolate updates. He illustrates that, with islands, you can push static content down into stateful components to avoid shipping unnecessary JavaScript. This deepens viewers’ understanding of why partial hydration and intelligent bundling are foundational to modern routing strategies.

### 00:10:00 - Component Memoization & Reactive Boundaries

Continuing his tangent on components, Ryan explores Vue’s newly introduced `V.memo` and how reactive systems define component boundaries very differently from VDOM-centric frameworks. He notes the tension in Vue between its virtual DOM’s affinity for granular components and its reactive system’s preference for fewer boundaries, leading to abstraction leaks. In contrast, SolidJS treats components as inert reactive boundaries, using referential checks and stores for internal mutations.

Ryan further critiques common VDOM patterns—like React’s `cloneElement`—as necessary but awkward abstraction leaks that expose the underlying node structure. He underscores that whether in React, Vue, or Solid, effective memoization and boundary placement are key to isolating state changes and avoiding costly re-renders, especially when routing decisions determine which components should hydrate or update on navigation.

### 00:15:00 - Zero-Kilobyte JS vs. Performance Realities

Shifting to performance, Ryan challenges the hype around “zero-kilobyte JavaScript,” arguing the real metric is loading only the code you need when you need it. He contrasts lazy loading with partial hydration, explaining that identifying islands for hydration must be distinct from deferring script downloads. The segment cites historical benchmarks—like Adiaz Mani’s “Real Cost of JavaScript” series—demonstrating that on lower-end devices, JavaScript execution time can match or exceed network download time.

Ryan quantifies the impact: tens of milliseconds per 10 KB of JS on fast 3G, meaning hundreds of milliseconds lost for larger bundles. He proposes that execution bottlenecks on CPU-constrained devices are as critical as bundle size, and that routing, by dictating when and what code to fetch, becomes a powerful lever for optimizing both network and CPU costs.

### 00:20:00 - eBay Case Study & Marco’s Streaming Approach

Through a compelling case study, Ryan examines how eBay replaced legacy jQuery with Marco’s streaming and partial hydration to slash its homepage’s initial JavaScript from roughly 500 KB to about 70 KB. He details how Marco’s architecture—built for streaming content and hydrating interactive islands—became the blueprint for aggressive performance gains on a large e-commerce site. Ryan underscores the importance of streaming HTML and deferring hydration scripts only where interactivity is required.

He ties this back to routing: on a traditional multi-page app, navigation can bypass heavy client routers and focus hydration only on the new route’s islands. This strategy yields win-win scenarios—both parse time and execution time drop, and network payloads shrink, delivering a snappier user experience even on slower connections.

### 00:25:00 - Introducing Control Flow in SolidJS

Returning to SolidJS fundamentals, Ryan introduces a basic example to demystify control flow. He shows a dynamic list where users can type items and add them to an array, demonstrating how SolidJS compiles JSX into fine-grained DOM updates. By toggling between naive text-node concatenation and signal-driven text content updates, he reveals how createEffect under the hood attaches to text node `.data` for lightning-fast updates.

Ryan uses this to illustrate that while attribute updates are easy to visualize, structural updates—like toggling DOM nodes—require understanding how reactive primitives trigger only the necessary DOM mutations. This preview of control flow mechanics lays the groundwork for why routing, which often toggles entire view regions, benefits from the same granular update logic.

### 00:30:00 - Optimizing DOM Updates with the `<For>` Helper

Delving deeper into lists, Ryan contrasts mapping arrays to spans versus using SolidJS’s `<For>` directive. He shows that a naive map re-renders all list items on each update, causing flicker and excessive DOM churn. By switching to `<For>`, which compares references and diff-checks only changed items, the list updates smoothly: new items glow in without redrawing siblings.

He also discusses `<Index>` for primitive lists, where reference-based checks collapse to value checks. This segment demonstrates how SolidJS’s built-in helpers manage keyed comparisons efficiently without a VDOM, giving developers direct control over iteration performance and update scope.

### 00:35:00 - Keyed vs. Non-Keyed List Diffing Benchmarks

Ryan broadens the lens to compare keyed and non-keyed list diffing across frameworks using popular JS benchmarks. He explains how non-keyed updates can outperform keyed on certain operations—like wholesale table replacements or row swaps—because they reuse existing DOM nodes and update their content. However, he cautions that non-keyed approaches risk UI tearing and misaligned state when elements carry their own interactive state or animations.

Despite vanilla JS optimizations in micro-benchmarks, Ryan argues that most modern frameworks favor keyed diffing for correctness and predictable behavior. He reinforces that SolidJS’s mutation-based approach, combined with referential checks, delivers both the performance of non-keyed updates and the safety of keyed lists.

### 00:40:00 - Building a Simple Router with `<Switch>` & Hash Routing

Pivoting to routing demonstrations, Ryan unveils a minimal SolidJS router built with `<Switch>` and `<Match>` components. He uses a hash-change listener to drive a signal representing the current route, then conditionally renders pages based on string matches. This tiny router showcases how to handle basic single-page navigation without external dependencies and underscores Solid’s control-flow primitives that make conditional rendering trivial.

He walks through the code sandbox, illustrating how the router signal updates on `hashchange` events and how `<Match>` re-evaluations trigger DOM swaps only where needed. While not production-grade, this example cements the concept that routing can be as lightweight or as full-featured as your application demands.

### 00:45:00 - Solid App Router: Nested Routes & Outlets

Introducing the official Solid App Router, Ryan explains file-based and nested route definitions. He shows how a `Routes` array with path-component mappings, along with `<Outlet>` placeholders, enables shared layouts for pages like user lists and user detail views. Nested routing means that parent layouts stay mounted when navigating between sub-routes, preventing unnecessary DOM remounts and preserving state.

Ryan spotlights how nested routes are critical for performance: without a client-side router, each page swap requires redrawing headers or navigation bars. With Solid App Router’s outlet hierarchy, only the child segments re-render, delivering faster transitions and cleaner code organization.

### 00:50:00 - Lazy Loading Routes & Suspense Fallbacks

To keep initial bundles lean, Ryan demonstrates lazy loading route components with `lazy()` imports. He wraps route outlets in `<Suspense>` boundaries to display custom fallbacks while fetching JavaScript. This approach parallelizes code downloads with data fetching, ensuring the UI remains responsive even as new route code arrives.

He shows how nested `<Suspense>` boundaries can isolate loading states to specific sections: top-level fallbacks cover entire page loads, while inner boundaries handle component-level lazy loading. This fine-grained suspense usage aligns with Solid’s reactive model, making route transitions feel instantaneous.

### 00:55:00 - Data Functions: Route-Based Resource Fetching

Ryan introduces “data functions” as route-scoped fetchers that run alongside lazy components. By conventionally co-locating `users.data.ts` files, developers can define `createResource` hooks that fetch JSON in parallel with code imports. Suspense boundaries then await both component and data promises, eliminating waterfall fetch patterns.

This pattern mirrors Remix’s loader functions but in a framework-agnostic way. It ensures that when a user navigates, both JavaScript and server data requests fire immediately, with Suspense managing fallbacks. The result is near-instant hydration: the UI shows structure first, then seamlessly fills in dynamic content.

### 01:00:00 - Using Suspense Transitions for Navigation

Moving beyond static fallbacks, Ryan showcases Solid’s `useTransition` hook to coordinate route changes. Instead of instantly swapping content into a loading state, transitions delay updates until all async reads resolve. He demonstrates a navigation button that triggers a transition: the old view persists and remains interactive until the new route’s code and data are ready.

This technique minimizes layout shifts and prevents “white flash” loading screens. Empirical tests in his office showed overwhelming preference for transitions, with users perceiving navigations as faster—even when total load time was identical. Transitions thus become a core UX pattern for reactive routers.

### 01:05:00 - Nested Suspense Boundaries & Granular Loading

Ryan drills into nested Suspense examples, adding a live counter to prove that outer views can continue updating while child sections load. By placing `<Suspense>` inside route components, only specific parts of the UI suspend, leaving the rest fully interactive. This localized fallback strategy lets critical UI elements stay live even as slower resources or lazy components fetch in the background.

He highlights the contrast with naive approaches: if you wrap the entire application in a single Suspense, every navigation triggers a global spinner. Nested boundaries restore control, enabling rich loading states—e.g., a blog article can show its header and body immediately while comments load beneath.

### 01:10:00 - Caching Considerations: SWR vs. Route-Driven Fetching

Discussing data staleness, Ryan critiques SWR-style libraries that “optimistically” display cached data, then pop in fresh updates. He recounts Facebook’s internal findings where stale-first UX eroded trust, causing users to hard-refresh pages. Instead, he proposes leveraging routing intent: treat navigation as an indication to fetch fresh data, while only revalidating cached values for back/forward or tab switches.

He suggests route-scoped caches keyed to the URL, so that actions like form submissions or navigations automatically invalidate just the affected data functions. This minimizes reliance on heavy global state managers and aligns fetch behavior with user expectations, improving both performance and reliability.

### 01:15:00 - Deep Dive: `createEffect`, `createMemo` & Scheduling

Peeling back SolidJS’s reactive core, Ryan contrasts `createSignal`, `createComputed`, `createRenderEffect`, and `createEffect`. He explains how `createComputed` represents pure derivations that recompute synchronously, while `createRenderEffect` handles DOM-creation side effects at render time. `createEffect` hooks run last in the render queue, ideal for user-defined reactions.

He reveals build-time optimizations: if no `createEffect` calls exist, bundlers can tree-shake away effect-queuing code, shrinking runtimes. Suspense integration tracks owning suspense boundaries for each computation so that effects created during loading defer until after fallbacks resolve, preserving correct lifecycle semantics in async flows.

### 01:20:00 - Lifecycle Hooks & DOM Mounting Strategies

Addressing requests for lifecycle hooks, Ryan recounts his initial resistance to mounting events in SolidJS. With no vDOM to detect attachments, he proposed simple patterns—like `setTimeout(fn, 0)` for “after render” hooks—and later offered a mutation-observer primitive for true connect/disconnect tracking. He explains how Solid’s directives can wrap these primitives, giving developers concise hooks for integrating third-party libraries or performing one-time setup tasks.

Ryan also draws parallels to React’s `useEffect`: both frameworks grapple with scheduling side effects without explicit lifecycle methods. Solid’s three primitive abstractions—pure computations, render effects, and user effects—map directly to most use cases, minimizing cognitive overhead and enabling granular control over when and how DOM interactions occur.

### 01:25:00 - Server-Side Rendering & HTML Streaming

Turning to SSR, Ryan demonstrates how Solid’s hydrate-aware runtime reuses same reactive code on the server. In HTML streaming mode, the primary bundle and initial data functions run server-side, serializing resolved values into the stream. Suspense fallbacks render as placeholders on the server only when data isn’t instantly available, then seamlessly swap out when hydration completes in the browser.

He contrasts this with client-only hydration: streaming removes an entire waterfall, beginning data fetches earlier and shipping HTML chunks as they’re ready. Lazy route components pause hydration until their code arrives, but thanks to the same Suspense semantics, no full-page reloads or flickers occur.

### 01:30:00 - Hydration Strategy & Lazy Component Handling

Ryan details tribal knowledge around hydration: while static HTML can skip Suspense boundaries entirely if data preloads server-side, lazy components require a pause-resume strategy. Solid’s hydrate scheduler detects missing code chunks during hydration, suspends until those modules load, then resumes DOM reconciliation without triggering user-visible fallbacks.

He emphasizes that hydration behavior mirrors native browser navigation: fast responses hold the prior page in place until everything’s ready. This parity of experience—SSR streaming on the server, Suspense transitions on the client—yields predictable UX across network and CPU environments.

### 01:35:00 - Internals: Effect Queuing & Runtime Optimizations

For advanced users, Ryan inspects the source of Solid’s effect system. He opens the code for `createEffect`, showing how each call registers a computation, tags its parent Suspense boundary, and pushes it onto a global queue. During render, non-user effects run first to build the DOM graph, followed by user effects that may trigger additional updates.

He also highlights how bundlers eliminate unreachable code paths—like transition logic if never imported—making Solid’s runtime both feature-rich and slim. This section demonstrates the marriage of fine-grained reactivity with modern build-tool ingenuity to deliver performant applications.

### 02:23:26 - Community Suggestions & Future Content Planning

As the clock advances, Ryan solicits viewer feedback: Which SolidJS topics should he cover next? He weighs ideas like CMS integrations, Astro comparisons, or deeper real-world demos. Listeners in chat mention Reactivity Graph inspection, SSR edge cases, and advanced Solid Start configurations. Ryan encourages folks to drop thoughts in Discord or YouTube comments, spotlighting how community input shapes future streams.

He reflects on last-minute prep challenges—linking up demos and orchestrating code sandboxes—and invites collaborators to share boilerplate patterns or sample APIs. This collaborative atmosphere underscores SolidJS’s open-source ethos, turning the livestream into a two-way conversation rather than a one-way lecture.

### 02:29:26 - Stream Planning Insights & Collaboration Requests

Ryan discusses behind-the-scenes workflows: balancing spontaneous coding with polished demos, choosing interview guests, and integrating Replay.io for debugging. He mentions past streams—Astro previews, Suspense deep dives—and teases potential workshops on Solid Start and component libraries. Viewers are urged to contribute starter repos or sandbox examples to enrich future broadcasts.

He also addresses stream accessibility—code font sizes, mobile-friendly layouts—and plans to refine visuals based on viewer feedback. By involving the audience in production decisions, Ryan demystifies the streaming process and fosters a sense of shared ownership over the SolidJS learning journey.

### 02:34:45 - Final Thoughts & Farewell

In the closing minutes, Ryan thanks everyone for sticking through the deep technical rabbit hole and invites last-minute questions. He reiterates channel links—Discord, GitHub discussions—and points to upcoming hangouts or conference talks. With a nod to the weekend ahead, he signs off with enthusiasm, promising to see viewers next week for fresh SolidJS insights.

The farewell combines gratitude, community plugs, and a reminder that routing, reactivity, and performance optimizations remain a collaborative adventure. As the stream fades, viewers depart equipped with both conceptual frameworks and practical code patterns for building high-performance, reactive SPAs and MPAs with SolidJS.