---
showLink: "https://www.youtube.com/watch?v=p16CQPTHS8g"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "One Stack to Rule Them All w/ Tanner Linsley"
description: ""
publishDate: "2025-02-22"
coverImage: "https://i.ytimg.com/vi/p16CQPTHS8g/maxresdefault.jpg"
---

## Episode Description

A wide-ranging livestream exploring new meta-framework developments, TanStack Router for Solid, and advanced concepts in front-end reactive systems.

## Episode Summary

This transcript captures an extensive conversation led by Ryan Carniato, featuring Tanner Linsley, that spans over five hours and focuses on the evolution of meta-frameworks, cutting-edge routing solutions, and the importance of well-structured tooling in modern web development. They discuss TanStack Router for Solid, highlighting a type-safe approach that bridges ecosystems, and explore how incremental adoption of server-oriented solutions influences performance and developer experience. Alongside these technical details, the speakers emphasize the merits of community-driven collaboration and the value of maintaining libraries that adapt to shifting industry standards. Over the course of this stream, topics range from the intricacies of async reactivity to practical deployment strategies, revealing how different frameworks, from React to Solid and beyond, tackle common challenges with unique perspectives. Ultimately, the dialogue underscores a commitment to empowering developers with flexible, approachable solutions for building robust, high-performance applications.

## Chapters

### 00:00:00 - Introduction and Early Context

The stream opens with Ryan Carniato greeting the audience and explaining he’s running slightly behind schedule. Viewers gather on multiple platforms, with anticipation building for a significant announcement regarding TanStack Router and its impact on SolidJS.

Ryan teases the collaborative efforts that have been brewing for the past month, setting a friendly, enthusiastic tone. Chat participants chime in, expressing excitement for the upcoming technical deep dive and the synergy between Ryan and Tanner’s shared development goals.

### 00:06:00 - Welcoming Tanner Linsley

As the clock reaches six minutes, Tanner joins the livestream, greeting viewers across various channels. Ryan mentions Tanner’s track record in crafting popular libraries like React Query and how those experiences are now fueling new innovations within the TanStack ecosystem.

The discussion establishes a relaxed yet focused vibe, with Tanner commenting on how he and Ryan have been trying to coordinate this session for weeks. Enthusiasm swells in the chat, prompting Tanner to highlight the strong community interest in bridging React and Solid workflows.

### 00:12:00 - Reflecting on Past Collaborations

Ryan and Tanner reminisce about previous streams, recalling conversations about routing fundamentals and the complexities they faced working on frameworks and data-fetching libraries. They emphasize the unique challenges and benefits of experimenting across different ecosystems.

Shared humor emerges as they joke about naming recurring segments. The two reflect on the synergy required to balance developer experience with performance goals, acknowledging how these insights inform current efforts to optimize routing and SSR strategies in both Solid and React.

### 00:18:00 - Early Attempts at a Solid Router

Tanner touches on an earlier experiment to create a Solid adapter for TanStack Router, recalling how the codebase was too different at the time. He explains that improvements in the underlying router architecture made the new adapter far more feasible.

Ryan notes significant changes in Solid’s ecosystem—particularly around server-side rendering—have also paved the way for a more seamless router integration. The conversation illustrates how incremental improvements in multiple libraries can converge to produce robust new functionality.

### 00:24:00 - Announcement: TanStack Solid Router

Tanner officially unveils the long-awaited tanstack-solid-router package, revealing it is complete, thoroughly tested, and ready for use. The chat erupts with excitement as he details how the type safety extends to link generation and anchor tags, mirroring the React approach.

They praise Burke and Brinley for their significant roles in bringing the project to life in just three weeks. Ryan’s enthusiasm is evident as he anticipates the synergy between TanStack Solid Router and Solid’s capabilities, setting the stage for deeper technical specifics.

### 00:30:00 - TanStack Router’s Core Concepts

Tanner dives into the fundamentals of TanStack Router: a framework-agnostic, type-safe solution that transcends React boundaries. He underscores the unique architecture that manages route context outside the framework, simplifying advanced tasks like parallel data loading and nested layouts.

Listeners hear how the router extends type-checking even to route URL strings, ensuring compile-time safety. This resonates with developers who often lament runtime navigation errors. Ryan highlights the parallel between TanStack Router’s approach and existing loader-based patterns.

### 00:36:00 - Comparison with Existing Solid Router

Ryan acknowledges Solid’s existing router solutions, explaining that the new TanStack variation offers advanced type features and multi-framework support. He clarifies that each router addresses different needs, and usage will depend on specific project goals.

Tanner comments on the synergy that might unfold if the core capabilities of both router implementations converge or share low-level pieces. They see potential for bridging unique features like single-flight mutations and advanced streaming across different router ecosystems.

### 00:42:00 - File-Based Routing Possibilities

The topic shifts to file-based routing, with Tanner explaining that TanStack Router can rely on a dedicated Vite plugin. This approach embraces conventions to streamline code splitting and loader extraction. Ryan mentions how modern frameworks converge around file-based patterns.

They highlight the practicality of toggling between a code-based or file-based setup, depending on developer preference. Automatic code splitting, route-level caching, and parallel fetching are showcased as robust solutions to performance pitfalls and complex application structures.

### 00:48:00 - Relationship with Solid Start

Ryan recalls the design philosophy behind Solid Start, built to remain agnostic of any specific router. This paved the way for easy TanStack Router integration. He emphasizes that adopting a new router doesn’t require rewriting the entire meta-framework.

Tanner underlines how Solid Start’s flexible composition of SSR, server functions, and SPA modes aligns with his own approach in TanStack Start. The conversation highlights how these design principles foster better developer experiences and reduce lock-in.

### 00:54:00 - Breaking Down Vinci and Nitro

They pivot to technical underpinnings, mentioning how Vinci once underpinned Solid Start’s SSR process. Tanner explains that Vite 6 eventually superseded many custom solutions, allowing them to shift to Nitro and pure Vite plugins for server functions.

With Nitro’s environment APIs, both TanStack and Solid Start can unify dev experiences without hacky multi-process approaches. This shift demonstrates how shared insights produce simpler, more maintainable meta-framework tooling, bridging previously divergent code paths.

### 01:00:00 - The Unification Effort

The conversation deepens as they describe the collaborative environment in which both Solid and TanStack maintainers co-develop. Tools like file-based routing for TanStack Router can also power Angular or Vue in the future, thanks to a universal approach.

Ryan praises Burke, Brinley, Manuel, and others who keep multiple frameworks in sync. Tanner sees no reason to silo progress, pointing out that knowledge-sharing leads to more robust libraries. The synergy underscores an ethos of building beyond individual frameworks.

### 01:06:00 - Philosophies on Data Fetching

Moving into data fetching, they revisit how GraphQL once dominated but eventually faced the practical elegance of simpler solutions like React Query. Normalized caching is acknowledged as a niche solution, while document-level caching often suffices for typical apps.

Tanner notes that single-flight or server-driven data approaches can complement these client caching models. Ryan adds that Solid’s resource primitives align with TanStack’s emphasis on clarity. Both see the future of data as a composable mix of client, server, and streaming solutions.

### 01:12:00 - RSCs and Alternatives

They explore React Server Components (RSCs), framing them as one possible path for server-heavy architectures. Tanner contends that streams and incremental rendering can accomplish similar objectives without a steep buy-in. Ryan compares RSC strengths to simpler SSG patterns.

There’s acknowledgment that RSC adoption might be slow, as many teams already solve data fetching elegantly with existing approaches. The conversation emphasizes bridging these solutions so that developers can pick the level of server integration that fits their applications.

### 01:18:00 - Benefits of SPA-Focused Frameworks

Ryan points to Remix, SvelteKit, and Solid Start as examples of frameworks championing the single-page application ethos with optional server features. This client-first approach often reduces state complexity and fosters a more fluid user experience.

Tanner voices an appreciation for flexible frameworks, praising how client behavior can remain the focal point for many web apps. They believe that layering server features on top, instead of starting from the server, is an easier mental model for most developers.

### 01:24:00 - SPA Mode in TanStack Start

Tanner outlines plans to solidify an SPA mode in TanStack Start, letting teams default to client rendering while selectively opting into SSR or streaming. The notion of toggling from a purely static index.html to more advanced server features emerges.

He notes that a fallback shell approach is in progress, enabling partial pre-rendering. Ryan compares this to Solid Start’s pattern, where devs pick the level of server involvement. Both see these advanced customization points as crucial for real-world apps.

### 01:30:00 - Single Flight Mutations and SSR

Ryan brings up Solid Start’s single-flight mutation approach, illustrating how the router or server functions can handle data concurrency. Tanner comments on how TanStack Router could adopt similar logic, though details differ across frameworks.

They brainstorm potential expansions of single-flight to unify loaders, mutations, and caching in a single pipeline. This sparks speculation on deeper synergy between TanStack Router, Solid’s advanced reactivity, and future server function evolutions.

### 01:36:00 - Potential for Cross-Framework Adapters

Tanner jokes about a scenario where React and Solid can coexist in the same application using TanStack Router. Ryan highlights the nuanced differences in SSR protocols that make direct concurrency complicated but not theoretically impossible.

They acknowledge a universal build might be too ambitious but see incremental bridging as feasible. The concept of writing a single codebase that toggles between frameworks is no longer purely hypothetical, given the improved layering in modern bundlers and compilers.

### 01:42:00 - Expanding Ecosystem with Angular and Vue

The conversation shifts to a future where Angular, Vue, and Svelte might also adopt TanStack Router. Tanner remarks that once Solid found its way in, other frameworks could follow, given the router’s decoupled design.

Ryan mentions seeing similar patterns in the router scenes across multiple frameworks. They predict that as more communities unify around signals and parallel data loading, bridging solutions will gain momentum, reducing fragmentation among JavaScript ecosystems.

### 01:48:00 - Transitioning Focus: Solid 2.0

Ryan transitions to Solid 2.0, explaining how the newly introduced async primitives expand what’s possible in userland. He draws parallels to the conceptual leaps React is making with RSCs, but clarifies Solid’s approach is natively reactive.

Tanner is impressed by the demonstration of self-healing error boundaries and granular updates. The discussion underscores that advanced concurrency patterns can be first-class in Solid, raising interesting questions about merging or translating these ideas to other ecosystems.

### 01:54:00 - Breaking Down Async Signals

Ryan illustrates how Solid’s new signals can stream updates in real time without re-rendering entire components. This approach sidesteps typical VDOM overhead, letting devs finely tune each data path.

He describes how the throw-catch mechanism for errors integrates seamlessly with Suspense, offering a more graceful fallback approach. The chat responds favorably, intrigued by the potential to unify or stack these patterns with TanStack data libraries.

### 02:00:00 - Views on the React 19 Poll

They reference a poll by Ryan Florence revealing an even split among React devs regarding server-first, loader/action-based, or pure SPA patterns. Ryan sees this as indicative of React’s fractured story, while Solid tries to remain flexible.

Tanner notes that React Router 7 aims to unify some tensions, but acknowledges that distinct mental models persist. This poll underscores the need for frameworks that gracefully accommodate multiple philosophies rather than forcing an all-in approach.

### 02:06:00 - Aligning with Remix and Next

Ryan addresses how frameworks like Remix and Next.js each push a different style: loader-based for Remix, RSC-based for Next. Both reflect attempts to solve double-data issues and performance bottlenecks but from diverging angles.

Tanner outlines how TanStack Start tries to remain open-ended: supporting SSR only if needed and offering fine-grained data loading akin to Remix or Next. This shared ethos resonates with the chat, which welcomes more minimal, flexible approaches.

### 02:12:00 - The Agnostic Build System Vision

Tanner and Ryan recall how they both set out wanting to avoid building a meta-framework but eventually recognized it as key to delivering deeper synergy. They reference analog for Angular, also built on similar principles.

They see a future where universal primitives for SSR, file routing, and server functions exist, simply toggled per framework. Even new proposals around environment APIs in Vite or Nitro strengthen the prospect of one shared architectural foundation.

### 02:18:00 - Observing Community Reactions

The pair addresses the surging interest in TanStack Router, acknowledging it arises from a strong desire in the community for typed routing and advanced SSR capabilities. Chat messages highlight developer relief at a possible end to router fragmentation.

Ryan thanks community members who have tested alpha releases, found edge-case bugs, and provided feedback that shaped the final solution. Tanner reiterates that continuous user-driven iteration keeps TanStack projects relevant and resilient.