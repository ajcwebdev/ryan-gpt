---
showLink: "https://www.youtube.com/watch?v=veKm9MDVVg8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Functions & Server Actions"
description: ""
publishDate: "2023-12-02"
coverImage: "https://i.ytimg.com/vi/veKm9MDVVg8/maxresdefault.jpg"
---

## Episode Description

A far-ranging live discussion exploring advanced server-side JavaScript topics, including routing frameworks, server function patterns, streaming mechanics, and the evolving future of web development.

## Episode Summary

This extensive session delves into the intricacies of modern JavaScript frameworks, focusing on how server functions, routing, and reactivity combine to create powerful full-stack experiences. Beginning with technical glitches and banter about coconut water, the speaker transitions into the historical context of remote procedure calls (RPCs) and how those ideas have resurfaced in modern tools like Remix and Solid. Comparisons are drawn to GraphQL, highlighting the appeal of co-locating server and client logic, while acknowledging the complexities of versioning and state management. Detailed explorations of streaming responses illustrate how partial data can be sent progressively to the client for enhanced interactivity. The speaker also tackles practical form handling, authentication workflows, and redirects, illustrating how server functions integrate smoothly with form submissions, error handling, and optimistic UI updates. Wrapping up with a forward-looking perspective, the talk foreshadows next steps for Solid Start, potential synergy with other libraries, and the broader trend of shifting more logic to server-side frameworks to improve developer experience. Throughout, the conversation emphasizes that clarity, flexibility, and an adaptable architecture are paramount as the JavaScript ecosystem continues to evolve.

## Chapters

### 00:00:00 — Initial Audio Confusion & Casual Greetings

In these opening moments, the host encounters unexpected echoes and audio feedback loops that briefly derail the start of the show. Viewers witness the unfiltered nature of live streaming as the presenter troubleshoots potential causes, toggles microphone settings, and peers into hidden tabs. While the technical hiccup persists, the host good-naturedly apologizes, using the situation to engage with the audience through chat. This improvisational segment establishes a relaxed, conversational tone, reminding everyone that live coding and live discussions often come with spontaneous obstacles.

Once the echo subsides, the speaker greets viewers properly, remarking on how close they came to canceling the stream. A conversation about beverages, specifically a pink-tinted coconut water, sets a friendly stage and highlights the casual side of tech discourse. Despite the shaky kickoff, the speaker remains optimistic about covering topics such as server function development and forthcoming Solid Start updates. This initial window underscores the community-driven nature of the content, as real-time input from chat helps steer the conversation forward.

### 00:06:00 — Stream Setup & Chat Interaction

Here, the speaker refines their streaming environment, checking microphone levels and confirming that viewers can hear them clearly. They reintroduce the day’s main focus—unpacking changes in Solid Start, an emerging framework aimed at providing a streamlined full-stack experience. The speaker describes last-minute commits and code checks, reflecting a coder’s typical rush to ensure their demos function correctly. These few minutes convey both the excitement and unpredictability of live sessions, showcasing how real-world code updates can happen right before going on air.

Simultaneously, the streamer encourages the chat to weigh in with immediate feedback about the audio and upcoming discussion topics. Interactivity forms a key part of the broadcast, with casual banter about coding routines, beverage preferences, and viewer readiness. By weaving small talk into deeper tech hints, the host builds rapport and sets a welcoming stage for a complex discussion on server functions. This portion underlines how user engagement adds energy to live technical explorations, enriching both the host’s focus and the audience’s sense of involvement.

### 00:12:00 — Revisiting RPC & Early Web Protocols

Transitioning toward more substantial content, the speaker introduces the concept of remote procedure calls (RPC) and their historical significance. They reference SOAP and XML-based services as cornerstones of earlier eras, explaining how these once-popular methods were ultimately replaced by more RESTful patterns. Emphasizing the cyclical nature of technology, they point out that RPC-like structures have made a comeback, especially when JavaScript exists on both server and client. The conversation weaves in reminiscences about enterprise-level systems where multiple protocols clashed and shaped modern best practices.

These reflections reveal a larger theme of how once-scorned ideas can regain prominence under new circumstances. In particular, the speaker cites the expanded role of JavaScript in backend environments, paving the way for simpler, function-oriented calls that mirror local function usage. While old SOAP implementations relied on verbose XML, modern frameworks compress those principles into flexible, language-level abstractions. This segment effectively lays groundwork for the subsequent exploration of how frameworks like Solid Start adopt and refine these earlier strategies in a streamlined, developer-friendly fashion.

### 00:18:00 — Evolution of Server Functions in Frameworks

Now the speaker pivots to how server functions are applied in current frameworks. They recall experimenting with prototypes that directly expose server calls as simple function imports, eliminating the need for additional endpoints. The significance of naming conventions—like a special suffix to mark server-only code—comes up, illustrating how developers ensure that secure or expensive operations stay off the client side. They cite Remix as an example, describing how its approach to server loaders influenced parallel ideas in Solid Start.

Throughout this segment, the speaker underscores the importance of balancing user-friendliness with robust security. A single function that can run on both ends simplifies development but requires attention to bundling and serialization. These constraints shape the design choices in Solid Start, prompting features such as specialized placeholders (e.g., `server$`) or compiler hints. By referencing real-world code patterns, the conversation highlights practical steps for bridging front-end logic with deeper backend processes, all while preserving the clarity that developers need for maintenance and performance tuning.

### 00:24:00 — Compiler Mechanisms & Syntax Choices

Here, the speaker dives into how frameworks like Solid manage the behind-the-scenes magic that separates server code from client code. Special annotations or suffix-based naming ensure that certain functions never travel to the browser. By exposing only a small wrapper or URL reference on the client, the heavier lifting—database connections, secure operations—remains tucked away on the server. The speaker elaborates on how the bundler or compiler dissects code, removing or rewriting sections to keep final client bundles lean and private data hidden.

Throughout this detailed explanation, they remark on potential pitfalls: a single misplaced quote or an improperly named file can break the build in subtle ways. Still, the benefits of integrated compilers are immense, ranging from improved type safety to simplified mental models for developers. Real-world anecdotes help demonstrate how small slip-ups can cause confusing errors, reinforcing the utility of well-defined conventions and developer tooling. Listeners gain insight into how thoughtful syntax rules and robust compilation pipelines form the backbone of modern server-function frameworks.

### 00:30:00 — Nested Routers & Data Hoisting Strategies

At this juncture, the focus shifts to routing and data handling, especially in nested layouts. The host outlines how a framework like Solid can “hoist” data-fetching logic up the route hierarchy, preventing component-level repetition or waterfall fetches. This practice contrasts with React’s universal re-renders, suggesting a more targeted approach that updates only necessary parts of the interface. References to Sapper and older design patterns illustrate the continuing quest for efficient data retrieval, now significantly simplified by reactivity.

While discussing these architectural decisions, the speaker stresses the importance of parallel data loading. By fetching multiple data sources simultaneously, users see critical information more quickly. The conversation highlights the synergy between partial reactivity—where each property can update independently—and advanced router features. With fewer forced reloads, developers can craft interfaces that feel snappy and robust. This section underscores that seemingly small design choices in routing and data scoping can profoundly influence both user experience and application performance.

### 00:36:00 — RPC Resurgence & TypeScript Synergy

Returning to the broader theme of remote procedure calls, the host points out that their revival in JavaScript frameworks feels natural because front-end and back-end code are now written in the same language. TypeScript further smooths this process by ensuring consistent type definitions across both realms. The speaker highlights TRPC as a library that exemplifies how typed calls reduce errors and foster a more confident developer workflow. This synergy contrasts sharply with older techniques involving JSON transformations and manual code maintenance.

However, the speaker warns that heavy coupling between client and server can pose problems if versions drift apart or if offline scenarios arise. They also note that frameworks must carefully manage closures and references to avoid leaking sensitive data. For instance, a function that captures environment variables should never appear in a client bundle. By detailing these caveats, the host shows how reintroducing RPC patterns in a fully typed environment can be powerful yet requires mindfulness about security and long-term maintainability.

### 00:42:00 — Initial Prototypes & Compiler Refinements

Here, the talk delves into how the speaker first implemented server functions in Solid using proxies and file-based detection. Early versions allowed direct calls to the server without extra endpoints, but the design lacked the polish that a dedicated compiler approach eventually delivered. Over time, they refined the process, letting the compiler strip server code from client bundles while preserving essential function signatures. The journey from rough prototypes to more elegant solutions underscores the iterative nature of open-source development.

The speaker illustrates how small breakthroughs—like introducing `$` at the end of server function names—helped signal that certain code shouldn’t appear in the client build. This visual cue, while seemingly minor, significantly reduced confusion. They also emphasize the importance of concurrency checks and parallel data fetching, which earlier prototypes often mishandled. The narrative reminds listeners that framework features typically evolve through trial, user feedback, and repeated real-world testing, eventually leading to stable, well-documented conventions.

### 00:48:00 — GraphQL Parallels & Streaming Insights

As the host continues, they compare server functions to GraphQL mutations, noting how each approach centralizes logic for data changes. The advantage is a single location where developers declare their intentions—such as updating a user record—alongside definitions of what gets returned. Yet server functions can go a step further by streaming partial results, effectively drip-feeding data to the client. This capability allows large or time-consuming operations to deliver progress updates instead of waiting for everything to finalize.

Practical examples involve returning objects containing promises that resolve in sequence, illustrating how frameworks manage chunked responses. Although not every app needs streaming, it’s a compelling feature for chat systems or dashboards where incremental updates enhance user experience. The host acknowledges that advanced streaming must be carefully designed to avoid performance bottlenecks. By highlighting these parallels to GraphQL and typical REST patterns, the speaker conveys that server functions represent an evolution, merging benefits of typed schema definitions with real-time interactivity.

### 00:54:00 — Live Demo & JSON vs. JavaScript APIs

Around this point, the speaker attempts a live demo, aiming to reveal the structure of network calls made by Solid’s server functions. They open the browser’s dev tools to inspect fetch requests, showcasing how returned data might be serialized in a mix of JSON and JavaScript references. The intention is to prove that a single function call can deliver complex, partially streamed results, which the client reassembles dynamically. This demonstration underscores the raw power behind these server function abstractions.

However, the speaker also encounters minor hiccups during the live test, such as unexpected bundler behaviors or configuration quirks. They remark on how dev servers handle individual files differently in client and server contexts, reminding developers to remain vigilant when analyzing network payloads. Nevertheless, viewers see enough to confirm that server responses can indeed contain specialized code for reactivity, not just static JSON. This multi-phase demonstration reaffirms that modern frameworks have transcended simple REST conventions, forging more interactive data flows.

### 01:00:00 — Dealing with Quotes & Dev Mode Quirks

Stepping into a debugging tangent, the speaker realizes that something as trivial as inconsistent quote usage (`'` vs. `"`) can break the server bundling. They recount how discovering the issue required scanning through logs, verifying that the function never made it to the server side. This real-world mishap highlights the fragility of certain compiler assumptions, despite advanced features. Listeners learn that, while these frameworks automate much, small code style details still carry weight.

The speaker also touches on dev mode differences, where a local development server might behave differently than a production build. Some references load from separate files or streams, leading to potential confusion during debugging. In the process, watchers see the manual steps one might take—like peeking at network requests—to confirm that calls truly reach the backend. Though these struggles can feel tedious, they exemplify the day-to-day reality of building with cutting-edge tooling, wherein finishing touches often revolve around alignment of syntax and config.

### 01:06:00 — Client-Only Mode & SSR Variations

In this segment, the host clarifies that Solid Start supports multiple rendering modes: pure client-side rendering (CSR), traditional SSR, and eventually more advanced server component strategies. They show how toggling SSR off can help confirm whether certain server functions still compile and execute. This flexibility allows developers to adopt progressive enhancements without rewriting entire apps. Those familiar with “create-react-app” can view this as a next-generation solution that integrates advanced server calls seamlessly when needed.

Through hands-on examples, the speaker explains potential pitfalls when combining SSR with server functions. If a route lacks the right suspense boundary, or if certain imports are missing, devs might experience blank screens or incomplete fetches. These details underscore that SSR extends beyond simply pre-rendering HTML; it requires a carefully orchestrated pipeline to fetch data, maintain user state, and hydrate client elements. The conversation gives watchers a clearer sense of how to incrementally adopt server features for performance gains while managing complexity.

### 01:12:00 — Error Handling & Form Data

Here, the focus shifts to how frameworks can elegantly handle errors. The speaker reveals that if a server function detects an invalid input or a failed operation, it can “throw” a specialized response object. This approach mimics established HTTP practices—like returning a 302 redirect—but merges them with typed logic at the code level. As a result, developers need only a single function call to both handle database writes and reroute the user if something goes awry.

The discussion also underscores how forms can tie directly into server actions, bypassing the need for separate REST endpoints. When a user submits credentials, the server function processes the data and either sets a session or dispatches an error. This design preserves the simplicity of HTML forms while integrating advanced reactivity. The speaker hints that the same pattern extends to progressive enhancement: with JavaScript enabled, pages can update in place; without JS, they degrade gracefully, refreshing in classic HTML style.

### 01:18:00 — Login Example & Redirect Mechanics

Continuing with a concrete login scenario, the speaker describes how to wire up server actions that authenticate a user. A simple call to `login()` verifies credentials, sets session cookies, and optionally throws a redirect to route the user to a dashboard. TypeScript definitions can indicate whether the function resolves to an error object or returns nothing (on success), ensuring better clarity at the code level. The demonstration emphasizes how minimal code can achieve robust flows, saving developers from boilerplate.

The speaker points out that such direct integration fosters a unified mental model: there’s no labyrinth of separated endpoints or specialized data stores to track. By flattening everything into a single function, devs can quickly reason about user flows. In tandem, they highlight the server’s ability to override default browser redirects, ensuring that full page reloads only happen when truly needed. This portion underscores how carefully orchestrated form submissions and server calls can create fluid, user-friendly authentication journeys.

### 01:24:00 — Progressive Enhancement & No-JS Fallbacks

During this timeframe, the speaker explores progressive enhancement in detail. They show how forms automatically produce standard POST requests when JavaScript is disabled, yet dynamically intercept them when JS is present. Rather than requiring two separate code paths, a single server function can accommodate both scenarios. Listeners gain insight into how this design pattern merges the best of old-school web reliability with modern interactivity, bridging the gap between minimal HTML submissions and high-powered reactivity.

Moreover, they note the accessibility benefits: screen readers and non-traditional browsers still function seamlessly, relying on the HTML fallback. Meanwhile, typical users enjoy a JavaScript-enhanced experience, complete with instant feedback and partial page updates. This approach aligns with a broader principle of building resilient web apps that degrade gracefully. The discussion cements the idea that new frameworks need not discard tried-and-true web fundamentals; instead, they enrich them with localized logic that sits elegantly on top of universal standards.

### 01:30:00 — Optimistic UI & To-Do MVC Patterns

Moving to a well-known to-do app example, the speaker highlights how “optimistic UI” can be realized with server actions. When a user adds an item or toggles its completion, the interface instantly updates, assuming success. In parallel, the server function handles the actual write, and if it fails, the client can roll back changes. This technique conveys a snappy feel to end users, crucial for tasks that benefit from immediate visual feedback—like to-do list modifications or chat messages.

They underscore how typed server functions ensure consistent error objects and unify data shapes across client and server. Combined with a global reactivity system, each to-do item can reflect partial states—pending, confirmed, or errored. The straightforward code fosters confidence that concurrency issues won’t lead to half-updated UI. Listeners witness how these frameworks handle the real-world complexities of user interactions, confirming that advanced use cases, once requiring custom solutions, can be addressed by official library patterns.

### 01:36:00 — Cache Invalidation & Data Coherence

Cache invalidation surfaces as a key concern in modern apps. The speaker describes how a robust router might allow partial revalidation of only those resources affected by a mutation. If a user updates one record, the framework reloads associated data without discarding the rest. This strategy minimizes extraneous fetches, an improvement over naive page-wide refreshes. By referencing solutions like TanStack Query, the speaker shows how successful ideas from third-party libraries can inform official caching APIs in Solid Start.

They also confirm that developers can fine-tune which segments of state to refresh. In a large application, such granular control avoids bottlenecks and preserves user experience during frequent updates. This design aligns well with forms or APIs that handle data for multiple routes. The segment emphasizes how reactivity extends beyond one-off reads; it underpins a holistic approach to data coherence. By ensuring each subset of data remains current, frameworks deliver fast, stable, and user-focused experiences.

### 01:42:00 — Throwing Responses & Router Collaboration

Here, the speaker reiterates that server functions can “throw” specialized responses containing metadata about redirects, errors, or revalidation commands. By encoding these conditions in a single object, the framework can unify routing logic. For instance, if an action needs to redirect back to a list page and invalidate a specific cache key, it can do so through one cohesive flow. This pattern spares developers from gluing multiple steps together, enabling cleaner, more declarative code.

The conversation highlights the synergy between server responses and router transitions on the client. When the router detects a particular header or code, it automatically triggers a navigation event or partial re-render. Because these triggers are typed and standardized, the user rarely faces ambiguous states or half-finished updates. This approach merges the reliability of formal status codes (like 302) with the dynamic nature of a single-page app. It exemplifies the ongoing convergence between server-centric workflows and modern client expectations.

### 01:48:00 — Comparing Remix & Next.js Approaches

At this point, the speaker invokes Remix and Next.js as contrasting examples of how frameworks handle server-client coordination. Remix centralizes logic in loaders and actions, encouraging a more “server-first” mindset, while Next.js historically leaned on client-driven fetches. The conversation emphasizes that, despite these philosophies, each environment grapples with similar core issues: bundling, streaming, and consistent data flow. Solid Start aims to unify the best of both, offering an opinionated yet flexible approach.

Through real-world anecdotes, the speaker underscores that frameworks often overlap in essential patterns. For instance, Next’s new server components approximate the notion of server-driven UI slices. Meanwhile, Remix introduced forms that directly map to server actions. These shared evolutions reflect a broader industry trend toward simpler, function-based server calls. By examining these parallels, the speaker clarifies that the differences lie mostly in routing and bundling decisions, rather than entirely distinct technologies, suggesting ample room for cross-pollination.

### 01:54:00 — Handling Session Context & Security

Security concerns surface as the speaker turns attention to session handling. They illustrate how a server function can read cookies or tokens, retrieving user information before performing updates. This ensures that sensitive data or roles remain entirely behind server logic. Crucially, the client bundle sees only a minimal reference to the action, never exposing full session details or secrets. This careful design aligns with best practices for user privacy and safe credential storage.

The host highlights that once a user is authenticated, subsequent server calls automatically inherit the session context. This means an app can show personalized dashboards or handle resource-based permissions without extra configuration. By centralizing session checks, the framework streamlines multi-route security. This segment helps watchers understand how server actions integrate with broader authentication flows, supporting everything from basic logins to token-based or third-party identity providers, all under a unified data access model.

### 02:00:00 — Islands Architecture & Hybrid Rendering

Moving beyond SSR, the speaker touches on “islands” architecture, where only parts of the page remain interactive while the rest is static HTML. They mention Astro, which selectively hydrates components, as an example of delivering minimal JavaScript. By pairing this approach with server functions, pages can load quickly yet still handle dynamic interactions for key elements. This concept echoes partial hydration strategies, bridging large static content with smaller reactive clusters.

However, the speaker concedes that hooking server actions into an island-based system can get tricky, especially when streaming entire route transitions. Maintaining global state across separate interactive “islands” demands a consistent data flow and reactivity model. Still, they see potential for future frameworks or versions of Solid Start to unify server components, partial hydration, and island strategies. This forward-thinking outline assures viewers that, even though these techniques are still maturing, the fundamentals of reactivity and server-driven logic pave a clear path forward.

### 02:06:00 — Router Enhancements & Pre-Fetching

Here, the discussion centers on router improvements, such as pre-fetching route data to avoid waiting during navigation. The speaker explains how Solid Start’s new router can load essential information before the user transitions to a page, eliminating jarring spinners. By hooking pre-fetch logic into server functions, the code keeps bundle sizes manageable and avoids extraneous calls. This synergy is reminiscent of older strategies in Ember or Sapper, updated with a modern reactivity spin.

Listeners learn that an optimal router not only simplifies code but can drastically affect perceived performance. When each route’s data arrives early, users feel immediate responsiveness. By clarifying boundaries between route definitions and server function calls, developers gain more fine-grained control over caching, hydration, and rendering steps. This segment underscores how robust routing remains the backbone of any meta framework, tying together data logic, user flows, and progressive enhancement in one cohesive system.

### 02:12:00 — Caching Strategies & Parallelized Fetches

Expanding on caching, the host delves into advanced patterns for parallelized resource requests. They stress that not every route will rely on a single data source; some pages might display complex dashboards or multiple APIs. By orchestrating parallel calls within server functions, the framework ensures minimal waiting for large data sets. This yields a more efficient pipeline than serially fetching each dataset, a pattern that can degrade user experience with cumulative delays.

They also mention how a global or route-level cache can unify these data calls, preventing redundant refetches for items that are still valid. Large enterprises or data-heavy apps especially benefit from these granular controls, as partial updates keep resource usage in check. Integrating concurrency logic at the framework level spares developers from manual logic around promises or error handling. The conversation here exemplifies how a synergy of reactivity, caching, and routing fosters truly scalable experiences.