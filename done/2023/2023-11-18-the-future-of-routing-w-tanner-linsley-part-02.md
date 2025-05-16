---
showLink: "https://www.youtube.com/watch?v=lrejTB07FOM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Routing w/ Tanner Linsley"
description: ""
publishDate: "2023-11-18"
coverImage: "https://i.ytimg.com/vi/lrejTB07FOM/maxresdefault.jpg"
---

### 02:06:00 - Discussion of Parallel vs. Sequential Fetching

This segment centers on how routers can manage multiple fetch operations. The speakers propose that parallel fetching is typically the best default, especially for large dashboards. However, certain steps—like authentication checks—must happen before child routes proceed. By specifying these dependencies at the route level, developers prevent overlapping or redundant calls.

They also mention patterns like “prefetch on hover,” pointing out that concurrency is rarely an issue if the underlying cache is robust. Once a piece of data is fetched, any further route loading that references it won’t refetch the same resource. The group encourages listeners to group data logic where it makes sense logically, rather than chaining asynchronous calls in child components.

### 02:12:00 - Edge Rendering and Modern Hosting

Here, the conversation expands to edge computing providers like Netlify, Cloudflare, and Vercel. They discuss how a router typically runs in a serverless context, but edge deployments require specialized bundling and a global server presence. The host mentions that frameworks increasingly offer “edge-ready” adapters so the same route definitions can run anywhere.

They explore how streaming partial responses from the edge might yield near-instant global TTFB. However, not all apps need that level of distribution, and certain data compliance regulations may complicate edge hosting. Ultimately, the router remains oblivious to these complexities, focusing purely on route logic, while the platform specifics handle networking. This separation reflects the broader trend of layering architecture.

### 02:18:00 - Potential Future Directions for Routing

The pair speculates on emerging trends that might affect routing design. Server components, a hallmark of newer React versions, could shift data responsibilities away from the client, altering how prefetch or partial hydration work. Svelte also experiments with a more integrated approach to signals, potentially making transitions and concurrency simpler.

Tanner highlights that TanStack Router might gradually add optional features for partial HTML updates or advanced streaming, so long as they don’t bloat the core. The host echoes that minimal overhead is key, especially if 90% of users only need fundamentals. This chunk of conversation emphasizes how forward-looking libraries remain, balancing immediate needs with the promise of emerging APIs.

### 02:24:00 - Reflecting on Transitions, Suspense, and Complexity

At this point, they circle back to transitions in detail. Although transitions can smooth user interactions, Tanner warns that they also introduce complexity, as developers must decide which updates to prioritize. If everything runs in a transition, users might wait too long for simple UI feedback. Conversely, if transitions are rarely used, some asynchronous operations may block the interface.

The speakers remind the audience that these are design choices, not universal truths. They propose using transitions thoughtfully, perhaps limiting them to route changes or large data fetches. Smaller updates, like form field validation, might stay synchronous. They reiterate that building a stable, predictable user experience hinges on making sure each route’s load process remains straightforward and consistent.

### 02:30:00 - Demo Insights and Example Applications

Moving into a more hands-on perspective, the host and Tanner outline typical examples. They mention classic to-do apps or admin dashboards, showing how TanStack Router’s typed structure clarifies big setups with complex branching. In these demos, child routes often represent nested details or sub-collections, while parent routes handle shared state like authentication or layout.

Listeners gain a glimpse of how small “load” functions can pre-warm queries so sub-routes render instantly. On the client side, multiple nested components can call the same cached data without duplicating requests. By stepping through these patterns, they illustrate how the entire architecture flows when each route is well-defined.

### 02:36:00 - Addressing Nested Layouts and UI Compositions

This chapter zooms into nested layouts, a concept where a parent route holds a broad UI shell, while child routes fill specific areas. They note that multiple frameworks treat layout routes differently: some rely on special folder names, others define layout components directly in config. Tanner mentions that with TanStack Router, each route can have its own “element,” optionally referencing parent contexts.

They also touch on usage of context providers. The host remarks that careful layering can reduce repeated data fetches, yet too many layers can complicate the code. They suggest that a healthy balance between route-level providers and local components fosters clarity, especially in large, multi-team projects.

### 02:42:00 - Q&A: Handling Queries and Search States

Audience members pose further questions on advanced search states. The speakers explore how to differentiate between ephemeral UI filters and permanent search parameters that belong in the URL. They warn that mixing the two can lead to user confusion or stale links. If a filter is crucial for deep-linking or sharable URLs, it should likely be a query param; if it’s purely ephemeral, local state might suffice.

They reinforce that typed definitions can keep query usage consistent. By specifying a search param’s type as optional or mandatory, route-level checks can ensure data is valid. The host points out that adopting these patterns from the beginning helps avoid creeping ambiguity as the app grows.

### 02:48:00 - Revisiting File-Based Routing Generators

Focus returns to the notion of code generation for file-based routes. Tanner elaborates on how a small script can parse folders, produce a typed route tree, and fuse it with the main config. He highlights that the overhead is minimal if done correctly—only changing when file paths themselves move. The host nods in agreement, adding that frameworks like Next.js handle this behind the scenes, but more custom setups can require manual scripts.

The conversation clarifies that code generation merges convenience with power, letting developers maintain a mental map of routes in the folder structure while preserving type safety. They recall times when purely manual config files became unwieldy, praising automation for bridging the gap between large, dynamic route trees and a single source of truth.

### 02:54:00 - Serving Different Platforms and Runtimes

The group next explores how certain projects want to serve multiple platforms: classic web, mobile web, and sometimes even React Native. They remark that if route logic is abstracted from the rendering environment, teams could theoretically share a single route definition across platforms. Although not trivial, it cuts duplication, ensuring consistent URLs and data fetches.

Tanner admits he’s focused mostly on React-based solutions, but the principle stands: having routing logic in a universal layer fosters code reuse. The host envisions new front-end frameworks building on this idea, especially if server components become more portable. They conclude that while multiple platform rendering is still niche, typed route definitions can help unify code.

### 03:00:00 - Deep Dive into Parallel Data Loading Patterns

At the three-hour mark, they resume a technical deep dive on parallel data loading. They emphasize that partial hydration or concurrency is easier if the router can declare queries up front. By grouping queries per route, loading can start in parallel as soon as the user hovers a link or triggers a route transition.

They illustrate how resource caching lines up with route changes. If data is already in cache, the page transition is instantaneous. If not, a suspense boundary reveals a loading placeholder. The talk shifts to best practices for combining these placeholders with transitions so the user rarely sees jarring reloads.

### 03:06:00 - Q&A: Project Examples and Edge Cases

Another wave of audience questions revolves around large-scale applications that have to juggle multiple data sources. The host highlights a situation where different APIs serve unique aspects of the UI—like user profiles, permissions, and reporting dashboards. TanStack Router can unify these into an overarching route definition, but the data calls might live in specialized services.

Tanner reiterates that modular design wins again: the router orchestrates top-level route transitions, while each child route references whichever service it needs. Listeners hear that carefully layering data calls, caching, and route definitions forms a stable backbone. The host warns that messy handling of concurrency leads to cryptic race conditions, especially if you mix different data libraries haphazardly.

### 03:12:00 - Talk of Future Integrations

Attention shifts to possible expansions in TanStack libraries. Tanner muses that once React Query and the router firmly stabilize, new integrations could appear for concurrency, analytics, or advanced logging. The host adds that hooking up A/B testing or feature flags is simpler when route definitions are typed, since you can annotate which segments belong to an experiment.

They also glance toward community-driven packages that might fill niche gaps, such as deeper SSR or integration with specialized hosting. The conversation implies that while TanStack Router strives for a complete set of routing essentials, it remains open to extension so that users can shape it to highly specific use cases.

### 03:18:00 - SSR’s Ongoing Challenges

As the session continues, the pair acknowledges that SSR remains a recurring topic because it’s a complicated area. They reflect on how SSR can vary widely: some teams do static exports, others do dynamic streaming, and still others do partial HTML fragments. Each approach demands a different style of route definition and data orchestration.

Listeners hear that streaming SSR merges best with route-level concurrency. Yet, not everyone needs it. For many, prerendering simple pages might suffice. The host points out that this conversation is cyclical; every few years, the industry rediscovers partial rendering. Tanner jokes that while some approaches come and go, typed route definitions remain evergreen.

### 03:24:00 - Potential Pitfalls and Overengineering

This chapter covers potential overengineering pitfalls. Both speakers stress that not every app benefits from highly sophisticated routing or data orchestration. Smaller projects might do fine with simpler solutions, reloading on each navigation. They recount seeing devs prematurely adopt multi-layer caching and streaming, only to get bogged down in debugging.

They recommend aligning complexity with real user needs. If an app is mostly static, layered caching might be pointless. Conversely, large dashboards or multi-tenant sites typically see big wins from advanced routing logic. The main takeaway is that careful scoping and incremental adoption can prevent wasted effort.

### 03:30:00 - Key Insights for Maintainability

Here, they summarize crucial points for teams seeking maintainable routing structures. The host advises beginning with a well-typed core, ensuring that route definitions are consistent and discoverable. Tanner seconds this, proposing that the clarity gained by typed routes drastically reduces onboarding friction. Instead of searching through code, new developers can rely on type hints and route trees to understand available paths.

They also mention that synergy between route definitions and data libraries fosters a single source of truth. By bridging route transitions to caching logic, accidental re-fetches drop and concurrency becomes simpler. The conversation emphasizes that each route stands as a small contract, ensuring stable behavior no matter how the application scales.

### 03:36:00 - Q&A: Handling Auth and Permissions

Viewers pose questions about authentication flows. The host discusses how certain libraries define “protected routes,” which block access or redirect unauthorized users. Tanner recommends hooking an auth check at a top-level route or a specialized loader, so children automatically inherit or handle rejections. He emphasizes that typed route definitions can integrate user roles or scopes, guaranteeing consistent checks.

They remind the audience that while it’s easy to block routes on the client, robust security also requires server-side checks. A synergy between client transitions and server validations ensures that even if JavaScript is disabled or manipulated, the user can’t bypass restrictions. The conversation underscores that no single route library can solve auth entirely; it must partner with an authentication mechanism.

### 03:42:00 - Observing Shifts in the JavaScript Landscape

As the event proceeds, the group zooms out to observe how the JavaScript community transforms. They note an uptick in typed solutions, with TypeScript nearly standard in large codebases. Tanner believes this shift aligns with the complexity of modern front-end apps, where advanced features demand stricter guardrails. The host references new frameworks like Svelte or Solid forging unique paths with signals or partial hydration.

They tie these developments to routing, explaining that each new approach must eventually incorporate sophisticated route definitions if it aims to handle real apps. The synergy between data fetching, concurrency, and typed routing emerges as a common denominator across ecosystems. The discussion pinpoints universal user stories—dashboards, wizards, content sites—that drive innovation in routing features.

### 03:48:00 - Debugging Real-World Routing Issues

Listeners inquire about debugging advanced route systems. The host recounts scenarios where a combination of file-based logic, nested contexts, and parallel fetches can create entangled errors. Tanner offers tips: keep each route’s responsibility isolated, rely on logs or dev tools, and ensure consistent naming. He adds that typed definitions often highlight anomalies early.

They mention that good library design includes robust error messages to reduce guesswork. Observing which route transitions triggered which data calls helps identify bottlenecks or stuck states. The segment provides a reality check that even the best-typed router can’t fix all developer mistakes, but proper instrumentation streamlines corrections.

### 03:54:00 - Wrapping Up Key Architectural Themes

Around the end of the third hour, the speakers begin consolidating their architectural insights. They repeat that typed route definitions serve as a guiding principle: it’s not just about auto-complete, but about embedding domain knowledge in a single place. By pairing this with robust data fetching—be it React Query or another tool—apps become more consistent and easier to extend.

They highlight concurrency, streaming, and partial rendering as optional but powerful techniques. The main caution is to remain pragmatic. If a feature addresses an actual user need, adopt it wholeheartedly. Otherwise, keep the architecture minimal. The segment ends with an affirmation that well-chosen library stacks can significantly boost developer productivity.

### 04:00:00 - Extended Listener Engagement

In these minutes, additional listener topics are addressed, often involving real deployment stories. The host shares one scenario where an older codebase adopted typed routes mid-project, halving bug reports related to path mismatches. Tanner chimes in with parallel anecdotes from teams that replaced ad-hoc solutions and discovered fewer regressions during big refactors.

They also point out that small teams and startups often appreciate typed routing even more than large corporations, as it enables them to move quickly without stumbling into untyped pitfalls. This resonates with audience members in chat, who mention successful transitions to typed route setups on small but crucial applications.

### 04:06:00 - Thoughts on Future Releases

Listeners prod Tanner about next steps for TanStack Router. He hints at incremental enhancements, such as deeper integration with transitions, an even more refined approach to search params, and better docs. However, he also clarifies that the library remains stable: large breaking changes aren’t imminent.

They banter about tangential features like code splitting for route definitions or bridging into new frameworks. The host encourages him to keep options open, noting that the ecosystem evolves swiftly. Overall, the mood is optimistic about continuing improvements without losing the library’s lightweight nature.

### 04:12:00 - Advice for Large-Scale Implementations

With the session drawing closer to its conclusion, the speakers condense their advice for big projects. They advise starting with stable fundamentals—good typing, route structure, and a recognized data-fetch library. Then, selectively layer advanced features like concurrency or streaming only as required. The host notes that incremental adoption helps avoid meltdown when deadlines loom.

Tanner emphasizes communication among team members. If everyone aligns on how route definitions work, the learning curve shrinks drastically. They highlight that code reviews become easier when each route’s shape and data constraints are explicit. This fosters a culture of consistency that scales no matter how many contributors join.

### 04:18:00 - Revisiting Alternative Solutions

Briefly, they circle back to competing or alternative solutions. Mentioning existing routers like Remix or Next.js, they point out each has a different philosophy on file-based vs. config-based approaches. The host notes that many devs jump between frameworks, so a “router agnostic” perspective can help them transition. Tanner reiterates that TanStack Router tries to remain minimal, leaving big architectural decisions to the developer.

They also nod to emergent offerings that fuse client and server in new ways. While acknowledging that many ideas are still experimental, the speakers agree that they push the conversation forward, often surfacing fresh angles on concurrency or typed logic. They wrap up by appreciating the dynamic nature of the web ecosystem.

### 04:24:00 - Final Observations and Sign-Off

In the final chapter, the host thanks Tanner for sharing his journey on routing, data loading, and the impetus behind TanStack Router’s design. They restate the importance of typed route definitions, integrated concurrency, and modular data caching. Closing thoughts reflect on how the community’s needs shape library features over time.

Both speakers share enthusiasm for continued growth in front-end tools, where multiple frameworks and specialized libraries collaborate across boundaries. They see typed routing as a unifying thread that might one day become standard. Listeners leave with an impression of an ecosystem that prizes flexibility, performance, and developer experience above all else.

### 04:30:00 - Conclusion

The session formally ends as the host reiterates key takeaways and thanks participants for tuning in. He reminds viewers where to find additional resources, urging them to try out TanStack Router and experiment with typed route definitions in their own codebases. The overarching message is to remain curious, keep an eye on evolving standards, and pick solutions that align with real-world project requirements.