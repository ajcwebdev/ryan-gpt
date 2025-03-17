---
showLink: "https://www.youtube.com/watch?v=A2TiLvCDKSg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Fine-Grained Reactivity w/ Milo"
description: ""
publishDate: "2023-02-18"
coverImage: "https://i.ytimg.com/vi/A2TiLvCDKSg/sddefault.jpg?v=63eef14c"
---

## Episode Description

A broad-ranging conversation on modern JavaScript and reactivity, featuring insights on signals, meta-framework evolution, and the vibrant ecosystem shaping today’s web development.

## Episode Summary

This transcript offers a sweeping look into the world of JavaScript development, focusing on reactivity, signals, and meta-frameworks. It opens by introducing updates in the Solid and TanStack communities, highlighting the growing interest in signals as a means of efficient state management. The discussion then shifts to the technical intricacies of fine-grained reactivity, comparing push- and pull-based paradigms. Listeners learn how these patterns influence everything from framework design to next-generation server function approaches. Midway, core contributors shed light on the ongoing work in Solid’s reactivity, uncovering how incremental improvements can substantially boost performance and developer experience. The conversation closes with a broad overview of ecosystem trends, from server components to potential cross-language integrations. Enthusiasts and professionals alike will gain a fuller understanding of where JavaScript frameworks stand today, the architectural decisions shaping them, and how a collaborative community continues to push these boundaries forward.

## Chapters

### 00:00:00 - Introduction and Stream Setup

In the first six minutes, the host greets the audience, explains that there is no formal starting screen, and casually checks in with chat participants on both YouTube and Twitch. He mentions having a new monitor and notices how crisp the picture is now. Early on, he references a recent Syntax podcast episode, reflecting on whether what he said there was coherent and approachable. He is pleased with how well it turned out, noting a balance between technical depth and accessibility in that interview. The casual banter emphasizes the open, conversational vibe of the stream, with the host frequently checking for chat messages and welcoming viewers as they trickle in.

This segment also unveils the outline for the day’s discussion: a deep dive into current JavaScript trends, developments in reactivity, and the significance of server functions. The host highlights a guest speaker who will join an hour later to talk about reactivity progress, referencing the technical contributions that keep the ecosystem evolving. The tone is relaxed yet anticipatory, promising a substantial exploration of the state of JavaScript frameworks, the ongoing community debates around compilers, syntax, and next-generation solutions. Overall, these first minutes establish a friendly, inclusive atmosphere, inviting viewers to settle in for a multifaceted conversation.

### 00:06:00 - Pre-Show Announcements and Plans

As the stream continues, the host begins a series of informal announcements. He explains his approach to livestreaming, acknowledging that some might prefer more polished “starting soon” screens or musical interludes, but he opts to engage directly with the audience instead. A few jokes and casual remarks about personal routines, plus some talk about posting the link to social media, underscore the unfiltered, community-driven atmosphere. The sense that viewers are co-developers in the conversation is clear, as chat requests links and resources that he then posts.

A good portion of this segment covers details around scheduling: the host outlines how he will tackle the main topics—JavaScript news, reactivity improvements, and special guest discussions—before circling back to current events in the JS landscape. He teases the arrival of multiple guests, including an important announcement that will come before the featured discussion on reactivity. This portion sets an expectant tone, signaling that significant developments around frameworks, ecosystem shifts, and new tool releases will be shared.

### 00:12:00 - Introducing the First Guest: Big News Teaser

Around the 12-minute mark, the host transitions from housekeeping items into formally introducing the first surprise guest: Tanner Linsley, known for the TanStack libraries. Before Tanner actually appears, the host sets context by highlighting how crucial collaboration is within the JavaScript framework ecosystem. He hints at a major update that will involve both Solid and TanStack, building excitement without giving away immediate details. He also touches on other high-level topics—like server functions and reactive patterns—to foreshadow the direction of the conversation.

The second half of this chapter focuses on community synergy. The host references the difficulty of building advanced framework features independently, emphasizing how shared efforts can tackle everything from bundling complexities to new rendering paradigms. He highlights the growing sense that reactivity, once seen as a fringe or advanced concern, is rising to center stage in modern JavaScript. Through anecdotal asides, he illustrates that many capabilities currently appearing in top frameworks echo the lessons from older libraries and reactive systems, suggesting an ongoing cycle of innovation and refinement.

### 00:18:00 - Welcoming Tanner Linsley and TanStack Origins

Tanner Linsley joins the stream, greeting the audience and remarking on this being his first appearance here. He briefly recounts the origins of TanStack—how it started as React Query and evolved into multiple widely adopted libraries like React Table, React Charts, and more. Tanner describes being “addicted” to building open source, explaining that many of these tools trace back to challenges he encountered while running Nozzle, a specialized SEO analytics platform.

The conversation moves into Tanner’s journey away from purely React-centric tools toward more framework-agnostic solutions. He touches on the complexity of implementing adapters for different ecosystems, revealing that the goal was to allow advanced features like data-fetching or routing to be available outside React. This push toward universal design has led to a richer perspective on reactivity patterns, as well as sometimes surprising performance or developer-experience gains when using signals or specialized reactivity mechanisms.

### 00:24:00 - Agnostic Tools and the Future of Reactivity

As they continue talking, Tanner and the host delve deeper into how TanStack Query became “agnostic” and the broader implications for reactivity and state management. Tanner acknowledges that once a library is unbound from React’s constraints, fascinating new performance and design possibilities emerge—particularly around signals. He contrasts React’s longstanding reliance on immutability with the more direct, mutable approaches found in signals-based systems. This leads him to reflect on how code felt simpler and more efficient when employing signals, though challenges remain in bridging them seamlessly into React’s ecosystem.

They also note that while universal libraries sound ideal, certain aspects—like routing—require more specialized integration with each framework’s rendering model. The host mentions that frameworks like React or Solid handle these core tasks differently, so the ultimate abstraction might still differ slightly from library to library. A nuanced discussion emerges on how an agnostic library must sometimes accept small compromises or adapt to fit each environment’s unique rendering or state management style, affecting how code is structured and tested.

### 00:30:00 - Jamstack Conf Flashback and the Big Reveal Setup

Around the half-hour mark, both speakers reminisce about Jamstack Conf, where an impromptu gathering at Theo’s place produced a now-infamous photo featuring themselves and other JavaScript notables huddled around a computer. They mention the synergy and idea exchange that happens in these spontaneous meetups, recalling how certain feature proposals or library integrations gain momentum once like-minded community members gather offline. The host teases that these informal collaborations are crucial incubators for the groundbreaking developments they plan to announce.

Leading into the eventual “big reveal,” the conversation transitions to more practical concerns. They talk about balancing competing demands: building core library features versus maintaining deployment adapters, ensuring Windows compatibility, and tackling monorepo complexities. The host implies he has grown weary of meta-framework maintenance overhead, a sentiment that resonates with Tanner, who faces similar issues. They set the stage for a collaborative solution that could merge or re-platform major framework pieces under a single, more stable ecosystem foundation.

### 00:36:00 - Tanner Announces Astro Partnership and Shared Roadmap

Shortly after 36 minutes, the major announcement surfaces: Tanner and the host reveal a partnership involving Astro, TanStack, and Solid that aims to unify meta-framework development around Astro’s platform capabilities. They explain that Astro provides a robust SSR layer, multiple deployment adapters, and flexible plugin systems. This shared foundation would power “tanstack start” and a reworked “solid start,” letting each framework focus on its unique routing and reactivity solutions without rewriting an entire build pipeline or set of adapters.

The conversation highlights that this synergy does not kill the separate identities of TanStack or Solid. Instead, it centralizes the lower-level aspects—like SSR, bundling, and the creation of server endpoints—on Astro. Each project can then concentrate on delivering the best router, signals, or data management experience for its respective community. This incremental approach reflects the belief that adopting server rendering or serverless architecture should be gradual, not an all-or-nothing rewrite, enabling existing SPAs to evolve gracefully.

### 00:42:00 - The Challenges of Agnostic Routing

During these six minutes, the two dive into the intricacies of routing across frameworks. Tanner recounts earlier attempts to build a single agnostic router for React, Solid, and others, only to confront insurmountable differences in reactivity, component structures, and server integration. They explain that routing is deeply tied to how data updates flow and how SSR is managed, making universal solutions either overly constrained or incomplete. This underscores why they now plan to adapt separate router libraries—TanStack Router for React, Solid Router for Solid—while still borrowing central ideas like type safety and search parameter validation.

At the same time, they see benefits in standardizing certain core concepts. For instance, a compile-based macro system for server calls, dubbed “bling,” could map neatly across Solid Start and TanStack Start. This macro approach, which they describe more thoroughly later, toggles code between client and server seamlessly without forcing a rigid file structure. Such uniform tooling can ease cross-pollination of ideas without forcing fundamental architecture changes on each framework.

### 00:48:00 - Building a Next-Generation Meta-Framework Platform

Focusing on the synergy with Astro, they detail how a stable “platform” emerges: Astro manages the SSR environment and adapters for various hosts, while each framework supplies only the route-level details and reactivity. The host stresses that this is not a single monolith. Developers retain the option to skip or replace any piece of the meta-framework. Still, for many, the pre-configured solution ensures tasks like edge deployment or serverless integration “just work” without extensive manual tooling.

They contrast this approach with Next.js or Remix, which handle everything top to bottom. That might be too opinionated for certain teams, and also burdens smaller open-source projects with monstrous maintenance burdens. By focusing on the minimal, optional layering, Astro-based solutions can reduce duplication while letting advanced users swap out or modify parts as needed. This flexible, layered mindset resonates with both speakers, who prefer unbundled but composable systems.

### 00:54:00 - The Realities of Maintaining Meta-Frameworks

In this segment, they discuss the burdens of meta-framework maintenance. The host recalls spending countless hours fixing Windows path issues, adjusting configurations for different hosting platforms, and triaging bizarre edge cases. Although building a proof-of-concept is exciting, real-world usage demands endless bug fixes for OS-specific quirks, monorepo complexities, and user-provided configurations. The repetition is draining, leaving fewer cycles for deeper innovation on reactivity or routing logic.

Tanner agrees, noting that library authors frequently underestimate infrastructure tasks when they attempt a full-stack meta-framework. He sees how Astro’s dedicated team and investment let them handle that platform layer more thoroughly. Their combined efforts can offload the tedium from framework authors, letting them push boundaries on features like advanced type safety in routing or concurrency in reactivity. The resulting synergy could rival heavily funded proprietary solutions but remain community-driven.

### 01:00:00 - Bling Macros and File-Splitting Innovations

As the conversation crosses the hour mark, they outline the “bling” macros—akin to $server or $split—allowing developers to chunk code across client and server within a single file. The host acknowledges the divide: some prefer strict file-based boundaries, while others enjoy co-locating server logic inline. They emphasize that building these macros at the bundler or compiler level gives developers maximum flexibility. A single file can incorporate client-only islands, server routes, or code-split chunks on demand.

They also mention partial hydration and the drive for monolithic code that seamlessly distributes across edge or data centers. While each framework approaches this differently, the macro technique stands out for letting the developer explicitly mark boundaries. The discussion highlights a future where shipping code to the edge or a worker becomes trivial, once these signals and macros handle partial bundling behind the scenes. A universal system like Astro plus bling can unify the final output.

### 01:06:00 - Sharing or Splitting Routers for Different Frameworks

Here they detail how “TanStack Start” might focus on React-based routing, while “Solid Start” remains specialized for Solid’s fine-grained signals. Both projects, though, could rely on common building blocks under the Astro platform or share a universal approach to server calls. Each library retains its unique mental model—React’s set-state approach vs. Solid’s reactive signals—yet gains consistent deployment patterns. This ensures minimal friction whether an app is partially an SPA or fully SSR.

They highlight previous attempts to unify routing at a core level, describing them as less than ideal. Routing logic ties so closely to each framework’s reactivity that a single codebase inevitably bends or compromises someone’s performance. By dividing at a strategic layer—where frameworks handle ephemeral routing details—shared lower-level capabilities can remain stable. Thus, developers see consistent patterns for isomorphic code, file-based routing, or progressive enhancement, yet remain free to adopt the precise style that suits them.

### 01:12:00 - Minimalism vs. Convention in Meta-Frameworks

During these minutes, they acknowledge that some prefer explicit structural patterns—like file-based routing—while others want as few constraints as possible. Solid Start historically tried to remain minimal, deferring decisions to the user, whereas frameworks like Next or SvelteKit enforce strong conventions out of the box. With Astro as the base, either stance is feasible, because one can choose to auto-generate routes from a folder structure or declare them inline with macros.

They suggest the future ecosystem might see multiple layers atop the shared platform, each more or less opinionated. A Redwood or T3-like template might emerge for extremely strict patterns, while library authors can maintain near-complete freedom. This layered approach means no single meta-framework is forced upon everyone. Instead, the “meta” part evolves into an opt-in ecosystem that fully automates the complexities of SSR, bundling, and deployments, while letting each team define their own architectural style.

### 01:18:00 - The Incremental Adoption Philosophy

Here, they highlight the central thesis that adopting server rendering or advanced reactivity should be incremental. Many existing apps remain client-heavy SPAs, and a forced rewrite to a brand-new server framework is unrealistic. Instead, bridging solutions let developers place just the critical logic on the server. Over time, one might adopt more SSR patterns or partial hydration, but the path remains flexible. TanStack Start and Solid Start, built on Astro, will prioritize backward-compatible transitions.

This fosters an environment where an older codebase can experiment with new features—like server calls or partial bundling—without fully discarding existing architecture. Both speakers applaud this design since it matches the real-world pace of refactoring. They also hint that aligning with Astro’s approach ensures each step is well-supported, given Astro’s focus on blending static and dynamic content seamlessly. The extended conversation underscores a recurring theme: balancing cutting-edge possibilities with practical maintainability.

### 01:24:00 - Announcement Reactions and Community Excitement

By this point, chat responses begin to flood in with excitement about the new “tanstack start” and “solid start” synergy, plus the Astro base platform. Tanner and the host read a few comments, noting how many developers have long requested type-safe routing and more robust SSR. They see strong enthusiasm for the separation of concerns that places minimal overhead on each project. Some watchers ask about file-based routes, or how server actions might differ from existing solutions. The hosts briefly confirm that a specialized approach to file-based routing could emerge, but they want it to remain optional.

In these final minutes of Tanner’s segment, the conversation circles back to the theme of unifying the ecosystem. By ensuring an underlying platform addresses cross-cutting concerns—like environmental variables, endpoint design, and serverless adaptation—framework authors can concentrate on delivering deeper features. This resonates strongly with viewers who have struggled juggling multiple tools. The upbeat tone indicates a shared sense of relief, knowing these new collaborations may finally streamline daily developer workflows.

### 01:30:00 - Wrapping with Tanner and Q&A

Tanner starts to wind down his time on the stream, answering a few last chat questions. He explains that although “tanstack router” might not be ported to every framework, its underlying concepts—like type-safe route definitions—will likely inspire improvements in Solid Router and Quick, among others. Another question concerns progressive enhancement for forms, which they confirm is a priority. They intend to unify the server function macros with standard web patterns, removing reliance on heavy JavaScript overhead.

Additionally, Tanner clarifies that the name “TanStack Start” may be a placeholder or brand umbrella, while the actual package could be modular. He sees an underlying architecture that can push “headless” concepts further, meaning minimal assumptions about theming or data structures. By the end of the segment, the chat is brimming with enthusiasm, and the host thanks Tanner for unveiling this major cross-project initiative. This closure transitions smoothly to the upcoming deep-dive on reactivity, setting the stage for the next guest.

### 01:36:00 - Milo’s Arrival and Future of Fine-Grained Reactivity

Shortly after Tanner departs, the second guest, Milo, is introduced. The host offers background on Milo’s long-standing contributions to Solid’s ecosystem, noting that despite Milo’s relatively young age and newness to college, he’s deeply involved in rewriting Solid’s core reactivity. Milo recounts his first interactions with Solid, from building an experimental renderer to taking over the Playground rewrite. This personal backstory highlights Milo’s methodical approach and deep curiosity about performance.

The conversation broadens to the impetus behind overhauling Solid’s reactivity. The host explains that Solid’s current algorithm, though fast, carries historical baggage from iterative tweaks over the years. Milo saw an opportunity for a more mathematically elegant solution, inspired by frameworks like MobX, S.js, or even Rust-based incremental compilers. This sets the stage for a thorough talk on push vs. pull reactivity and how lazy evaluation might outperform traditional scheduling.

### 01:42:00 - The Diamond Problem and Lazy vs. Eager Updates

Milo and the host begin explaining the classic diamond dependency problem: a signal “A” flows to “B” and “C,” which then converge at “D.” In naive systems, “D” might re-run multiple times, or updates might reach “D” in the wrong order. Milo contrasts push-based approaches, which propagate changes downward as soon as a source updates, with pull-based approaches, which recalculate values only when needed. The duo references older frameworks that either updated too eagerly or forced multiple recalculations.

They underscore that Solid historically relied on a hybrid method, layering different logic over time. Milo’s new approach, code-named X reactivity, simplifies the algorithm. The core idea is to color or mark nodes as potentially dirty, then recalculate them lazily when an effect or component requests the final value. This ensures minimal redundant updates, especially in large or branching graphs. They reference everyday challenges like re-checking multiple memos or effects and how lazy evaluation can drastically cut overhead.

### 01:48:00 - Pushing vs. Pulling: Hybrid Approaches Explained

Continuing the explanation, they delve into how pure push or pure pull can be insufficient. With pure push, one might repeatedly update nodes in the wrong sequence, triggering multiple re-renders. With pure pull, the framework might not know which nodes to recheck without scanning everything. Milo’s solution is a hybrid “mark and sweep” method. When a source changes, it flags downstream nodes as “dirty” or “maybe dirty,” then only fully recalculates them upon request, ensuring correctness and eliminating extraneous passes.

The host contributes anecdotal examples of how messy a graph can get with nested logic or dynamic dependencies. Milo notes that success requires distinguishing states such as “red” (definitely out-of-date), “green” (potentially out-of-date), and “clean” (fully up-to-date). When an effect or memo demands a value, the system systematically checks whether the path upward includes any truly “red” nodes. If so, it re-evaluates in a controlled manner. The outcome is less overhead for stable branches of the graph and more immediate re-checking only where needed.

### 01:54:00 - Equality Checks and Show Components

As they pass the hour-and-fifty-minute mark, the conversation spotlights the importance of equality checks. Milo provides a simple example: a numeric signal “A” goes from 123 to 122, but a derived boolean “B” checking “A > 50” doesn’t actually change. Without a refinement step, an effect depending on “B” might re-run unnecessarily. Milo’s approach ensures the system verifies that “B” remains true, so any downstream effect remains clean. They clarify how this logic extends to “show” components, a common UI pattern that toggles visibility.

The pair observes that frameworks lacking these checks can degrade user experience by re-rendering stable content. The host references how older solutions like React rely on diffing or memoization, whereas signals-based libraries can short-circuit updates when no real change occurs. This sets up a deeper reflection on how these optimizations accumulate to make large or heavily interactive apps more performant, reducing flicker and unnecessary computations for end users.

### 02:00:00 - Microbenchmarks and Real-World Complexity

As they continue, the discussion turns to benchmarks that measure reactivity. The host mentions the infamous “CellX benchmark,” which constructs artificially deep or branching reactive graphs—conditions rarely seen in typical UIs. Many library authors highlight this test to showcase speed, but the duo points out that it doesn’t necessarily reflect real usage. Milo and the host emphasize that an approach can excel in certain contrived scenarios yet struggle in dynamic, branching, or partial-updating scenarios.

They also mention how some frameworks use versioning systems to skip updates in large graphs, performing well in specialized tests but faltering in everyday code. The overall lesson is that reactive performance must be judged across multiple shapes of dependency graphs. Real apps often involve partial rendering and dynamic routes, so a single benchmark can be misleading. Both guests stress the value of deeper analysis and diverse test cases that mirror real-world usage.

### 02:06:00 - Next-Gen Solid Reactivity and Community Influence

Here, Milo reveals that the planned new Solid core is being developed in collaboration with authors from similar reactive libraries—such as Maverick—which successfully integrated many of the same concepts. The synergy between multiple open-source maintainers fosters best practices that could soon become the norm in fine-grained reactivity. The host praises Milo’s methodical approach, noting how the codebase shrank in complexity while improving performance.

They also reflect on community-driven innovation: the new reactivity engine, partially called “reactively,” has influenced not just Solid’s roadmap but other frameworks exploring signals. This cross-pollination underscores how open collaboration can speed progress. The host points out that historically, solid-like reactivity was viewed as niche, overshadowed by React’s popular model. Seeing momentum around signals now, with interest from preact, angular, or others, validates the belief that the fine-grained approach yields tangible gains for both developer ergonomics and runtime efficiency.

### 02:12:00 - Potential Implications for Angular and Others

Shifting focus, they note how Angular’s new signals-based reactivity arrived on the scene, mirroring many ideas from Solid. While details differ, the overall shift away from two-way binding or heavy immutability signals a new norm across big players. The host mentions that Angular once had a more top-down architecture, but these changes could drastically modernize it. He anticipates further alignment in how frameworks mark and track changes at a low level, even if they maintain different surface APIs or class-based patterns.

They mention that for massive corporate codebases, adopting signals can be tricky because it touches fundamental assumptions about how data flows. Nonetheless, the pair sees a pattern emerging: major frameworks gradually incorporate signals, even if disguised behind different terms. This consistent direction underscores that reactivity’s major benefits—eager-lazy hybrids, equality checks, partial updates—are simply too strong to ignore. Over time, each ecosystem evolves a unique brand of signals while converging on the same underlying techniques.

### 02:18:00 - Resource Loading and Async Model Challenges

In this segment, the conversation pivots to asynchronous reactivity. While controlling synchrony is already complex, layering in network requests or other async logic can complicate the system. They mention that in Solid, resources are used for data fetching, but hooking them into fine-grained reactivity can produce off-timing or partial states. Milo explains that the new core architecture might unify resource logic with the base reactivity, allowing smoother transitions between data states and better support for features like suspense.

They highlight a broader question of how to time the re-evaluation of resource-dependent components. Should they re-run in the same batch or push an update into the next tick? Issues like concurrency or race conditions pop up, prompting solutions like deferred computations or re-check steps. The chat logs reveal developer curiosity about how these advanced patterns might reduce complexity for real apps. Both see promise in continuing to refine the boundary between synchronous and asynchronous signals.

### 02:24:00 - Transition Models and Progressive Enhancements

Here, Milo elaborates on transitions, referencing the idea that certain state changes can be deferred for smooth UX, akin to React’s “startTransition.” He describes a potential extension where the reactivity system can schedule heavy computations after painting the critical path, ensuring the UI stays responsive. The host notes that historically, Solid’s minimal overhead made transitions less urgent, but the new reactivity might open the door to more formal scheduling. The synergy between transitions and lazy reactivity suggests deeper optimization routes.

A separate discussion arises around form submissions and progressive enhancement, reminiscent of Remix or SvelteKit actions. The host admits that bridging these with a purely reactive approach is tricky, as some data changes are ephemeral or triggered outside normal signals. Milo sees potential in macros or specialized primitives that let developers mark certain events as transient, ensuring the broader reactivity graph doesn’t misread ephemeral states. This underscores how advanced scheduling ties into everyday tasks, like handling user interactions gracefully.