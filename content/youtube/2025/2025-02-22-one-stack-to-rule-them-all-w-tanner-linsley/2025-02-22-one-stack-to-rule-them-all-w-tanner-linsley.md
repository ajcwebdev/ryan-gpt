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

### 02:24:00 - Overlapping Philosophies

Delving into parallels between query caching, data loading, and server context, they reveal how consistent patterns emerge across frameworks. Signals in Solid or reducers in React ultimately revolve around the same state management fundamentals.

Tanner mentions how TanStack’s design aims to centralize logic in the router or query client, reducing repetition in apps. Ryan affirms that building around reactivity fosters clarity, whether one is working with a store in Solid or hooks in React.

### 02:30:00 - Marco’s Influence on Streaming

Ryan credits the Marco team at eBay for pioneering streaming SSR in JavaScript years before React took it mainstream. This influences how Solid and TanStack approach partial hydration and streaming updates.

Tanner underscores that such historical insights shape how developers tackle concurrency, data waterfalls, and user experience. Understanding these precedents prevents reinventing flawed patterns and keeps modern libraries grounded in proven techniques.

### 02:36:00 - Shifts in React Marketing

Reflecting on the React community, Tanner highlights how React’s official messaging can shape overall industry direction. He recalls the strong marketing push behind hooks, contrasting it with the quieter rollout of advanced features like RSCs.

Ryan suggests that marketing shortfalls, rather than purely technical obstacles, can explain confusion around React’s stance on frameworks and RSC viability. Meanwhile, smaller ecosystems like Solid pivot more quickly with concise messaging on new features.

### 02:42:00 - The Ecosystem Challenge

Both men recognize that React’s success owes much to its extensive ecosystem, but that same scale can hinder fast change. They encourage a more transparent channel between React core, library authors, and end users.

Examples of friction include the Create React App deprecation and uncertain RSC integration with bundlers. They remain hopeful that clearer communication—plus an evolving spirit of collaboration—will unify the community around more consistent tooling and approaches.

### 02:48:00 - The Future of Compiler Innovations

Ryan muses about compilers for React, Svelte, and Solid that remove runtime overhead. As frameworks converge on signals or partial hydration, the boundary between compile-time and runtime code is blurred further.

Tanner suggests that advanced compilers and discreet rendering models may eventually unify, but he sees near-term expansions focusing on bridging userland solutions—like integrated dev tools and optimized code-splitting—rather than a single universal compiler.

### 02:54:00 - Reevaluating GraphQL in Modern Apps

Returning to data fetching, they revisit GraphQL’s once-dominant position, citing Apollo and Relay as complex solutions overshadowed by simpler JSON-based patterns. Normalized caching remains niche for specialized use cases.

Tanner notes TRPC and server functions overshadow monolithic GraphQL in some circles, thanks to type-safety and minimal overhead. Ryan echoes that composition of smaller endpoints or specialized loaders can match GraphQL’s flexibility without the heavier client runtime.

### 03:00:00 - Minimizing Double Data Issues

Ryan touches on persistent challenges of sending the same data from client to server and back. He explains how refined SSR approaches, such as streaming or partial hydration, try to limit duplication.

Tanner points out that single-flight or incremental resource strategies can also reduce re-fetching. The pair foresees a future where dynamic routing frameworks handle these patterns out of the box, making manual synchronization rare.

### 03:06:00 - Context on Resume-Ability

Ryan briefly mentions the concept of “resume-ability,” referencing frameworks like Qwik that skip certain hydration steps. He admits Solid has not prioritized it, focusing instead on granular reactivity and async expansions.

They acknowledge that the wide variety of SSR methodologies—streaming, partial hydration, MPAs—can cause developer confusion. Ultimately, solutions must address app-specific performance needs, reaffirming no single method universally wins.

### 03:12:00 - Summarizing the 2.0 Changes in Solid

Ryan recaps major shifts in Solid 2.0, centering on colorless async that no longer forces devs to separate sync from async logic. This unified approach means data flow remains stable even as new async signals appear.

Error boundaries no longer dismantle entire component trees and can self-heal. Tanner says it’s an impressive leap for user experience and developer productivity. Chat observers compare it to the direction React may explore with upcoming compilers.

### 03:18:00 - Revisiting Effects vs. Events

Ryan dives into a more theoretical discussion on splitting effects: separating dependency tracking from side-effect execution. This provides a stable, predictable model for async behavior and error handling.

Tanner admires how this leads to fewer re-renders, highlighting the synergy with advanced concurrency. He likens it to features often requested by React devs, validating Solid’s method of scheduling and creating consistent user interfaces at scale.

### 03:24:00 - Handling Edge Cases in Async

The talk shifts to tricky edge cases, like multiple async calls resolving in unexpected orders. Ryan notes that splitting effect phases can quell illusions of ordering that lead to data flickers or missed updates.

They consider ways to unify user code and internal framework logic to handle partial results gracefully. Optimistic updates, cancellation tokens, and stale-while-revalidate patterns factor into building robust experiences with minimal boilerplate.

### 03:30:00 - RSC Parallel in Solid’s Approach

Tanner draws parallels to RSC’s desire for partial server generation. Ryan clarifies that Solid’s advanced signals can replicate or surpass RSC’s incremental revelation, but from a client-first vantage.

He concedes RSC is impressive for large dynamic apps, but many devs might prefer local caching and granular updates. Both see universal streaming primitives as key, giving frameworks a standard tool to handle incremental data arrival.

### 03:36:00 - Local vs. Server State Management

They discuss how local state is more comprehensive when close to user interactions, while server-driven solutions require advanced caching and session management to be equally swift. This tension underscores different architectural styles in RSC or classic SPAs.

In the end, they say developers must weigh trade-offs: a server’s broad perspective vs. the client’s immediate knowledge of user context. The duo repeatedly emphasizes the user’s real-time state at the keyboard matters most for performance decisions.

### 03:42:00 - Revisiting Hype Around Astro

Ryan mentions Astro’s success as a partial solution that excels at static site generation but struggles with shared, persistent client state. He praises Astro for static content while acknowledging that complex apps require richer client-side strategies.

Tanner adds that Astro meets a specific niche, which is why some teams love it for doc sites or marketing pages. However, more interactive use cases benefit from the patterns that Solid Start or TanStack Start can handle.

### 03:48:00 - Possible Future of TanStack CLI

Tanner envisions a future CLI that scaffolds new apps, letting devs pick their framework of choice—React, Solid, or others. The underlying build pipeline remains the same, harnessing Vite and universal router support.

Ryan responds enthusiastically, relating it to how Solid Start was always meant to be a thin Vite wrapper. This direction expands multi-framework synergy and lowers mental overhead for devs moving between ecosystems.

### 03:54:00 - Cross-Community Collaboration

They commend contributors from the Angular and TRPC communities, who help shape server function middleware in a manner that suits multiple frameworks. The synergy among these diverse players speaks to open standards forming in real time.

Ryan notes that building consistent, well-documented primitives fosters large-scale adoption. The conversation highlights that real progress emerges when maintainers share knowledge across repositories, bridging the gap between distinct frameworks and third-party libraries.

### 04:00:00 - The Impact of Larger Players

Questions arise about big corporate involvement in open source projects, referencing how Next.js soared thanks to Vercel’s marketing muscle. Tanner praises smaller teams who remain nimble but acknowledges the power of large sponsors in fueling widespread adoption.

Ryan calls out that TanStack’s community-driven approach maintains independence. He believes this sense of ownership and alignment with user needs can be more sustainable long term, even as big names define much of the broader conversation.

### 04:06:00 - Data Visualization and UI Challenges

Tanner briefly recalls his experiences with data-intensive React apps, suggesting that a client-first approach remains vital for real-time dashboards. Large streaming data sets reveal how client caching can outperform server-led solutions.

Ryan ties it back to specialized front-end frameworks, which shine when performance constraints are tight. The session underscores that no single approach trivially handles huge data flows, reaffirming the significance of building flexible, specialized features.

### 04:12:00 - Reintroducing SSR for Documentation Sites

Tanner shares a personal use case of SSR for marketing or documentation pages that load markdown. He wonders if RSC is truly beneficial for static content, questioning if a simpler static approach might suffice.

Ryan suggests incremental or partial pre-rendering can match RSC’s performance benefits. Both see RSC as overkill if data rarely changes, and they emphasize that “just enough” SSR can often be more straightforward and still deliver quick load times.

### 04:18:00 - Evading Double Data with SSG

They highlight how static site generation can sidestep the double-data problem if content is determined at build time. This is especially appealing to teams that rely on CDNs or want predictable deploy processes.

Tanner’s recollection of React Static reveals that code-split, SSG-based patterns are still relevant. Ryan notes Solid Start and TanStack Start are morphing to incorporate that approach seamlessly, bridging a gap from pure SPA to fully static.

### 04:24:00 - Customizing SSR Entry Points

Tanner elaborates on fallback shells, pre-rendering certain routes, and forcibly leaving others for dynamic loading. The conversation underscores that total SSR isn’t always essential. Instead, frameworks can craft partial SSR to optimize the developer’s use case.

Ryan shares how Solid Start experimented with advanced modes that interweave island architecture, streaming, and fallback routes. This ensures apps can remain dynamic where needed and still benefit from SSR for crucial initial loads.

### 04:30:00 - Revisiting the Potential of React

Tanner defends React’s future, stating that behind the scenes, the team at Meta is intensifying focus on client performance through a compiler. He believes React’s massive user base ensures the ecosystem remains vital.

Ryan concurs that React’s brand power and momentum won’t diminish, though fragmentation might persist if marketing messages aren’t clearer. He hopes continued synergy among library authors fosters better outcomes, even if official docs lag behind community needs.

### 04:36:00 - Interplay of Signals and Components

Ryan notes that while React’s mental model revolves around re-rendering components, signals-based frameworks achieve reactivity in smaller increments. This difference underpins the diverging paths of React, Solid, and soon Angular with signals.

Tanner suggests that frameworks might eventually unify around a compiled signals approach. He sees the progressive shift happening in Vue and Svelte, though React’s timeline remains uncertain. The chat ponders how each community responds to these changes.

### 04:42:00 - Emphasizing Collaboration over Competition

They highlight that libraries like TanStack Router and Solid Query gain strength not by displacing existing tools, but by offering new solutions and patterns. A developer’s choice depends on requirements, not brand loyalty.

Ryan warns against zero-sum thinking, reminding viewers that front-end tech thrives on cross-pollination. Strong ideas—like parallel data fetching—shouldn’t remain siloed. This collaborative mentality resonates with many in the chat, relieved to see fewer framework wars.

### 04:48:00 - Q&A on Developer Preferences

The hosts pause to address repeated chat questions about learning paths: “Should I switch from React to Solid?” or “When is TanStack Router stable?” Both emphasize shipping stable versions soon, but suggest devs pick tools that fit their immediate needs.

They note that migrating an entire codebase rarely makes sense unless performance or maintainability are severely lacking. Providing reassurance, they highlight how fresh innovations eventually filter back into major ecosystems, letting devs adopt them incrementally.

### 04:54:00 - Near-Term Roadmap and CLI Vision

Tanner shares short-term goals: refine TanStack Start’s SPA mode, unify server function plugins with Nitro’s new updates, and simplify the file-based approach to code splitting. Ryan sees parallels in Solid Start, praising the synergy.

They both mention the dream of a future CLI that auto-configures serverless, static, or partial SSR modes with minimal setup. This real-time approach to generating a tailored environment is poised to transform developer onboarding.

### 05:00:00 - Wrapping Up the Technical Deep Discussion

As the session stretches past five hours, they reflect on how far the ecosystem has come. Tanner references the complexity of topics covered—routing, SSR, streaming, concurrency—yet remarks these are all solvable with collaborative iteration.

Ryan thanks the audience for staying engaged, noting the robust synergy among viewers bridging React, Solid, Svelte, and Angular communities. He reaffirms his stance that meta-frameworks and router abstractions yield better apps, bridging old friction points.

### 05:06:00 - Conclusion and Final Thoughts

In the final minutes, Ryan and Tanner exchange gratitude for each other’s work. They commend the maintainers who handle updates, fix bugs, and unify designs across repos, underscoring that none of these advancements happen in isolation.

They sign off by reiterating the official release of TanStack Solid Router. Ryan invites watchers to experiment, share feedback, and anticipate further synergy between Solid Start and TanStack Start. The session concludes with a sense of optimism and forward momentum.
