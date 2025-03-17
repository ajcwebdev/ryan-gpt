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

### 00:00 – 06:00 Introduction and Stream Setup

In the first six minutes, the host greets the audience, explains that there is no formal starting screen, and casually checks in with chat participants on both YouTube and Twitch. He mentions having a new monitor and notices how crisp the picture is now. Early on, he references a recent Syntax podcast episode, reflecting on whether what he said there was coherent and approachable. He is pleased with how well it turned out, noting a balance between technical depth and accessibility in that interview. The casual banter emphasizes the open, conversational vibe of the stream, with the host frequently checking for chat messages and welcoming viewers as they trickle in.

This segment also unveils the outline for the day’s discussion: a deep dive into current JavaScript trends, developments in reactivity, and the significance of server functions. The host highlights a guest speaker who will join an hour later to talk about reactivity progress, referencing the technical contributions that keep the ecosystem evolving. The tone is relaxed yet anticipatory, promising a substantial exploration of the state of JavaScript frameworks, the ongoing community debates around compilers, syntax, and next-generation solutions. Overall, these first minutes establish a friendly, inclusive atmosphere, inviting viewers to settle in for a multifaceted conversation.

### 06:00 – 12:00 Pre-Show Announcements and Plans

As the stream continues, the host begins a series of informal announcements. He explains his approach to livestreaming, acknowledging that some might prefer more polished “starting soon” screens or musical interludes, but he opts to engage directly with the audience instead. A few jokes and casual remarks about personal routines, plus some talk about posting the link to social media, underscore the unfiltered, community-driven atmosphere. The sense that viewers are co-developers in the conversation is clear, as chat requests links and resources that he then posts.

A good portion of this segment covers details around scheduling: the host outlines how he will tackle the main topics—JavaScript news, reactivity improvements, and special guest discussions—before circling back to current events in the JS landscape. He teases the arrival of multiple guests, including an important announcement that will come before the featured discussion on reactivity. This portion sets an expectant tone, signaling that significant developments around frameworks, ecosystem shifts, and new tool releases will be shared.

### 12:00 – 18:00 Introducing the First Guest: Big News Teaser

Around the 12-minute mark, the host transitions from housekeeping items into formally introducing the first surprise guest: Tanner Linsley, known for the TanStack libraries. Before Tanner actually appears, the host sets context by highlighting how crucial collaboration is within the JavaScript framework ecosystem. He hints at a major update that will involve both Solid and TanStack, building excitement without giving away immediate details. He also touches on other high-level topics—like server functions and reactive patterns—to foreshadow the direction of the conversation.

The second half of this chapter focuses on community synergy. The host references the difficulty of building advanced framework features independently, emphasizing how shared efforts can tackle everything from bundling complexities to new rendering paradigms. He highlights the growing sense that reactivity, once seen as a fringe or advanced concern, is rising to center stage in modern JavaScript. Through anecdotal asides, he illustrates that many capabilities currently appearing in top frameworks echo the lessons from older libraries and reactive systems, suggesting an ongoing cycle of innovation and refinement.

### 18:00 – 24:00 Welcoming Tanner Linsley and TanStack Origins

Tanner Linsley joins the stream, greeting the audience and remarking on this being his first appearance here. He briefly recounts the origins of TanStack—how it started as React Query and evolved into multiple widely adopted libraries like React Table, React Charts, and more. Tanner describes being “addicted” to building open source, explaining that many of these tools trace back to challenges he encountered while running Nozzle, a specialized SEO analytics platform.

The conversation moves into Tanner’s journey away from purely React-centric tools toward more framework-agnostic solutions. He touches on the complexity of implementing adapters for different ecosystems, revealing that the goal was to allow advanced features like data-fetching or routing to be available outside React. This push toward universal design has led to a richer perspective on reactivity patterns, as well as sometimes surprising performance or developer-experience gains when using signals or specialized reactivity mechanisms.

### 24:00 – 30:00 Agnostic Tools and the Future of Reactivity

As they continue talking, Tanner and the host delve deeper into how TanStack Query became “agnostic” and the broader implications for reactivity and state management. Tanner acknowledges that once a library is unbound from React’s constraints, fascinating new performance and design possibilities emerge—particularly around signals. He contrasts React’s longstanding reliance on immutability with the more direct, mutable approaches found in signals-based systems. This leads him to reflect on how code felt simpler and more efficient when employing signals, though challenges remain in bridging them seamlessly into React’s ecosystem.

They also note that while universal libraries sound ideal, certain aspects—like routing—require more specialized integration with each framework’s rendering model. The host mentions that frameworks like React or Solid handle these core tasks differently, so the ultimate abstraction might still differ slightly from library to library. A nuanced discussion emerges on how an agnostic library must sometimes accept small compromises or adapt to fit each environment’s unique rendering or state management style, affecting how code is structured and tested.

### 30:00 – 36:00 Jamstack Conf Flashback and the Big Reveal Setup

Around the half-hour mark, both speakers reminisce about Jamstack Conf, where an impromptu gathering at Theo’s place produced a now-infamous photo featuring themselves and other JavaScript notables huddled around a computer. They mention the synergy and idea exchange that happens in these spontaneous meetups, recalling how certain feature proposals or library integrations gain momentum once like-minded community members gather offline. The host teases that these informal collaborations are crucial incubators for the groundbreaking developments they plan to announce.

Leading into the eventual “big reveal,” the conversation transitions to more practical concerns. They talk about balancing competing demands: building core library features versus maintaining deployment adapters, ensuring Windows compatibility, and tackling monorepo complexities. The host implies he has grown weary of meta-framework maintenance overhead, a sentiment that resonates with Tanner, who faces similar issues. They set the stage for a collaborative solution that could merge or re-platform major framework pieces under a single, more stable ecosystem foundation.

### 36:00 – 42:00 Tanner Announces Astro Partnership and Shared Roadmap

Shortly after 36 minutes, the major announcement surfaces: Tanner and the host reveal a partnership involving Astro, TanStack, and Solid that aims to unify meta-framework development around Astro’s platform capabilities. They explain that Astro provides a robust SSR layer, multiple deployment adapters, and flexible plugin systems. This shared foundation would power “tanstack start” and a reworked “solid start,” letting each framework focus on its unique routing and reactivity solutions without rewriting an entire build pipeline or set of adapters.

The conversation highlights that this synergy does not kill the separate identities of TanStack or Solid. Instead, it centralizes the lower-level aspects—like SSR, bundling, and the creation of server endpoints—on Astro. Each project can then concentrate on delivering the best router, signals, or data management experience for its respective community. This incremental approach reflects the belief that adopting server rendering or serverless architecture should be gradual, not an all-or-nothing rewrite, enabling existing SPAs to evolve gracefully.

### 42:00 – 48:00 The Challenges of Agnostic Routing

During these six minutes, the two dive into the intricacies of routing across frameworks. Tanner recounts earlier attempts to build a single agnostic router for React, Solid, and others, only to confront insurmountable differences in reactivity, component structures, and server integration. They explain that routing is deeply tied to how data updates flow and how SSR is managed, making universal solutions either overly constrained or incomplete. This underscores why they now plan to adapt separate router libraries—TanStack Router for React, Solid Router for Solid—while still borrowing central ideas like type safety and search parameter validation.

At the same time, they see benefits in standardizing certain core concepts. For instance, a compile-based macro system for server calls, dubbed “bling,” could map neatly across Solid Start and TanStack Start. This macro approach, which they describe more thoroughly later, toggles code between client and server seamlessly without forcing a rigid file structure. Such uniform tooling can ease cross-pollination of ideas without forcing fundamental architecture changes on each framework.

### 48:00 – 54:00 Building a Next-Generation Meta-Framework Platform

Focusing on the synergy with Astro, they detail how a stable “platform” emerges: Astro manages the SSR environment and adapters for various hosts, while each framework supplies only the route-level details and reactivity. The host stresses that this is not a single monolith. Developers retain the option to skip or replace any piece of the meta-framework. Still, for many, the pre-configured solution ensures tasks like edge deployment or serverless integration “just work” without extensive manual tooling.

They contrast this approach with Next.js or Remix, which handle everything top to bottom. That might be too opinionated for certain teams, and also burdens smaller open-source projects with monstrous maintenance burdens. By focusing on the minimal, optional layering, Astro-based solutions can reduce duplication while letting advanced users swap out or modify parts as needed. This flexible, layered mindset resonates with both speakers, who prefer unbundled but composable systems.

### 54:00 – 1:00:00 The Realities of Maintaining Meta-Frameworks

In this segment, they discuss the burdens of meta-framework maintenance. The host recalls spending countless hours fixing Windows path issues, adjusting configurations for different hosting platforms, and triaging bizarre edge cases. Although building a proof-of-concept is exciting, real-world usage demands endless bug fixes for OS-specific quirks, monorepo complexities, and user-provided configurations. The repetition is draining, leaving fewer cycles for deeper innovation on reactivity or routing logic.

Tanner agrees, noting that library authors frequently underestimate infrastructure tasks when they attempt a full-stack meta-framework. He sees how Astro’s dedicated team and investment let them handle that platform layer more thoroughly. Their combined efforts can offload the tedium from framework authors, letting them push boundaries on features like advanced type safety in routing or concurrency in reactivity. The resulting synergy could rival heavily funded proprietary solutions but remain community-driven.

### 1:00:00 – 1:06:00 Bling Macros and File-Splitting Innovations

As the conversation crosses the hour mark, they outline the “bling” macros—akin to $server or $split—allowing developers to chunk code across client and server within a single file. The host acknowledges the divide: some prefer strict file-based boundaries, while others enjoy co-locating server logic inline. They emphasize that building these macros at the bundler or compiler level gives developers maximum flexibility. A single file can incorporate client-only islands, server routes, or code-split chunks on demand.

They also mention partial hydration and the drive for monolithic code that seamlessly distributes across edge or data centers. While each framework approaches this differently, the macro technique stands out for letting the developer explicitly mark boundaries. The discussion highlights a future where shipping code to the edge or a worker becomes trivial, once these signals and macros handle partial bundling behind the scenes. A universal system like Astro plus bling can unify the final output.

### 1:06:00 – 1:12:00 Sharing or Splitting Routers for Different Frameworks

Here they detail how “TanStack Start” might focus on React-based routing, while “Solid Start” remains specialized for Solid’s fine-grained signals. Both projects, though, could rely on common building blocks under the Astro platform or share a universal approach to server calls. Each library retains its unique mental model—React’s set-state approach vs. Solid’s reactive signals—yet gains consistent deployment patterns. This ensures minimal friction whether an app is partially an SPA or fully SSR.

They highlight previous attempts to unify routing at a core level, describing them as less than ideal. Routing logic ties so closely to each framework’s reactivity that a single codebase inevitably bends or compromises someone’s performance. By dividing at a strategic layer—where frameworks handle ephemeral routing details—shared lower-level capabilities can remain stable. Thus, developers see consistent patterns for isomorphic code, file-based routing, or progressive enhancement, yet remain free to adopt the precise style that suits them.

### 1:12:00 – 1:18:00 Minimalism vs. Convention in Meta-Frameworks

During these minutes, they acknowledge that some prefer explicit structural patterns—like file-based routing—while others want as few constraints as possible. Solid Start historically tried to remain minimal, deferring decisions to the user, whereas frameworks like Next or SvelteKit enforce strong conventions out of the box. With Astro as the base, either stance is feasible, because one can choose to auto-generate routes from a folder structure or declare them inline with macros.

They suggest the future ecosystem might see multiple layers atop the shared platform, each more or less opinionated. A Redwood or T3-like template might emerge for extremely strict patterns, while library authors can maintain near-complete freedom. This layered approach means no single meta-framework is forced upon everyone. Instead, the “meta” part evolves into an opt-in ecosystem that fully automates the complexities of SSR, bundling, and deployments, while letting each team define their own architectural style.

### 1:18:00 – 1:24:00 The Incremental Adoption Philosophy

Here, they highlight the central thesis that adopting server rendering or advanced reactivity should be incremental. Many existing apps remain client-heavy SPAs, and a forced rewrite to a brand-new server framework is unrealistic. Instead, bridging solutions let developers place just the critical logic on the server. Over time, one might adopt more SSR patterns or partial hydration, but the path remains flexible. TanStack Start and Solid Start, built on Astro, will prioritize backward-compatible transitions.

This fosters an environment where an older codebase can experiment with new features—like server calls or partial bundling—without fully discarding existing architecture. Both speakers applaud this design since it matches the real-world pace of refactoring. They also hint that aligning with Astro’s approach ensures each step is well-supported, given Astro’s focus on blending static and dynamic content seamlessly. The extended conversation underscores a recurring theme: balancing cutting-edge possibilities with practical maintainability.

### 1:24:00 – 1:30:00 Announcement Reactions and Community Excitement

By this point, chat responses begin to flood in with excitement about the new “tanstack start” and “solid start” synergy, plus the Astro base platform. Tanner and the host read a few comments, noting how many developers have long requested type-safe routing and more robust SSR. They see strong enthusiasm for the separation of concerns that places minimal overhead on each project. Some watchers ask about file-based routes, or how server actions might differ from existing solutions. The hosts briefly confirm that a specialized approach to file-based routing could emerge, but they want it to remain optional.

In these final minutes of Tanner’s segment, the conversation circles back to the theme of unifying the ecosystem. By ensuring an underlying platform addresses cross-cutting concerns—like environmental variables, endpoint design, and serverless adaptation—framework authors can concentrate on delivering deeper features. This resonates strongly with viewers who have struggled juggling multiple tools. The upbeat tone indicates a shared sense of relief, knowing these new collaborations may finally streamline daily developer workflows.

### 1:30:00 – 1:36:00 Wrapping with Tanner and Q&A

Tanner starts to wind down his time on the stream, answering a few last chat questions. He explains that although “tanstack router” might not be ported to every framework, its underlying concepts—like type-safe route definitions—will likely inspire improvements in Solid Router and Quick, among others. Another question concerns progressive enhancement for forms, which they confirm is a priority. They intend to unify the server function macros with standard web patterns, removing reliance on heavy JavaScript overhead.

Additionally, Tanner clarifies that the name “TanStack Start” may be a placeholder or brand umbrella, while the actual package could be modular. He sees an underlying architecture that can push “headless” concepts further, meaning minimal assumptions about theming or data structures. By the end of the segment, the chat is brimming with enthusiasm, and the host thanks Tanner for unveiling this major cross-project initiative. This closure transitions smoothly to the upcoming deep-dive on reactivity, setting the stage for the next guest.

### 1:36:00 – 1:42:00 Milo’s Arrival and Future of Fine-Grained Reactivity

Shortly after Tanner departs, the second guest, Milo, is introduced. The host offers background on Milo’s long-standing contributions to Solid’s ecosystem, noting that despite Milo’s relatively young age and newness to college, he’s deeply involved in rewriting Solid’s core reactivity. Milo recounts his first interactions with Solid, from building an experimental renderer to taking over the Playground rewrite. This personal backstory highlights Milo’s methodical approach and deep curiosity about performance.

The conversation broadens to the impetus behind overhauling Solid’s reactivity. The host explains that Solid’s current algorithm, though fast, carries historical baggage from iterative tweaks over the years. Milo saw an opportunity for a more mathematically elegant solution, inspired by frameworks like MobX, S.js, or even Rust-based incremental compilers. This sets the stage for a thorough talk on push vs. pull reactivity and how lazy evaluation might outperform traditional scheduling.

### 1:42:00 – 1:48:00 The Diamond Problem and Lazy vs. Eager Updates

Milo and the host begin explaining the classic diamond dependency problem: a signal “A” flows to “B” and “C,” which then converge at “D.” In naive systems, “D” might re-run multiple times, or updates might reach “D” in the wrong order. Milo contrasts push-based approaches, which propagate changes downward as soon as a source updates, with pull-based approaches, which recalculate values only when needed. The duo references older frameworks that either updated too eagerly or forced multiple recalculations.

They underscore that Solid historically relied on a hybrid method, layering different logic over time. Milo’s new approach, code-named X reactivity, simplifies the algorithm. The core idea is to color or mark nodes as potentially dirty, then recalculate them lazily when an effect or component requests the final value. This ensures minimal redundant updates, especially in large or branching graphs. They reference everyday challenges like re-checking multiple memos or effects and how lazy evaluation can drastically cut overhead.

### 1:48:00 – 1:54:00 Pushing vs. Pulling: Hybrid Approaches Explained

Continuing the explanation, they delve into how pure push or pure pull can be insufficient. With pure push, one might repeatedly update nodes in the wrong sequence, triggering multiple re-renders. With pure pull, the framework might not know which nodes to recheck without scanning everything. Milo’s solution is a hybrid “mark and sweep” method. When a source changes, it flags downstream nodes as “dirty” or “maybe dirty,” then only fully recalculates them upon request, ensuring correctness and eliminating extraneous passes.

The host contributes anecdotal examples of how messy a graph can get with nested logic or dynamic dependencies. Milo notes that success requires distinguishing states such as “red” (definitely out-of-date), “green” (potentially out-of-date), and “clean” (fully up-to-date). When an effect or memo demands a value, the system systematically checks whether the path upward includes any truly “red” nodes. If so, it re-evaluates in a controlled manner. The outcome is less overhead for stable branches of the graph and more immediate re-checking only where needed.

### 1:54:00 – 2:00:00 Equality Checks and Show Components

As they pass the hour-and-fifty-minute mark, the conversation spotlights the importance of equality checks. Milo provides a simple example: a numeric signal “A” goes from 123 to 122, but a derived boolean “B” checking “A > 50” doesn’t actually change. Without a refinement step, an effect depending on “B” might re-run unnecessarily. Milo’s approach ensures the system verifies that “B” remains true, so any downstream effect remains clean. They clarify how this logic extends to “show” components, a common UI pattern that toggles visibility.

The pair observes that frameworks lacking these checks can degrade user experience by re-rendering stable content. The host references how older solutions like React rely on diffing or memoization, whereas signals-based libraries can short-circuit updates when no real change occurs. This sets up a deeper reflection on how these optimizations accumulate to make large or heavily interactive apps more performant, reducing flicker and unnecessary computations for end users.

### 2:00:00 – 2:06:00 Microbenchmarks and Real-World Complexity

As they continue, the discussion turns to benchmarks that measure reactivity. The host mentions the infamous “CellX benchmark,” which constructs artificially deep or branching reactive graphs—conditions rarely seen in typical UIs. Many library authors highlight this test to showcase speed, but the duo points out that it doesn’t necessarily reflect real usage. Milo and the host emphasize that an approach can excel in certain contrived scenarios yet struggle in dynamic, branching, or partial-updating scenarios.

They also mention how some frameworks use versioning systems to skip updates in large graphs, performing well in specialized tests but faltering in everyday code. The overall lesson is that reactive performance must be judged across multiple shapes of dependency graphs. Real apps often involve partial rendering and dynamic routes, so a single benchmark can be misleading. Both guests stress the value of deeper analysis and diverse test cases that mirror real-world usage.

### 2:06:00 – 2:12:00 Next-Gen Solid Reactivity and Community Influence

Here, Milo reveals that the planned new Solid core is being developed in collaboration with authors from similar reactive libraries—such as Maverick—which successfully integrated many of the same concepts. The synergy between multiple open-source maintainers fosters best practices that could soon become the norm in fine-grained reactivity. The host praises Milo’s methodical approach, noting how the codebase shrank in complexity while improving performance.

They also reflect on community-driven innovation: the new reactivity engine, partially called “reactively,” has influenced not just Solid’s roadmap but other frameworks exploring signals. This cross-pollination underscores how open collaboration can speed progress. The host points out that historically, solid-like reactivity was viewed as niche, overshadowed by React’s popular model. Seeing momentum around signals now, with interest from preact, angular, or others, validates the belief that the fine-grained approach yields tangible gains for both developer ergonomics and runtime efficiency.

### 2:12:00 – 2:18:00 Potential Implications for Angular and Others

Shifting focus, they note how Angular’s new signals-based reactivity arrived on the scene, mirroring many ideas from Solid. While details differ, the overall shift away from two-way binding or heavy immutability signals a new norm across big players. The host mentions that Angular once had a more top-down architecture, but these changes could drastically modernize it. He anticipates further alignment in how frameworks mark and track changes at a low level, even if they maintain different surface APIs or class-based patterns.

They mention that for massive corporate codebases, adopting signals can be tricky because it touches fundamental assumptions about how data flows. Nonetheless, the pair sees a pattern emerging: major frameworks gradually incorporate signals, even if disguised behind different terms. This consistent direction underscores that reactivity’s major benefits—eager-lazy hybrids, equality checks, partial updates—are simply too strong to ignore. Over time, each ecosystem evolves a unique brand of signals while converging on the same underlying techniques.

### 2:18:00 – 2:24:00 Resource Loading and Async Model Challenges

In this segment, the conversation pivots to asynchronous reactivity. While controlling synchrony is already complex, layering in network requests or other async logic can complicate the system. They mention that in Solid, resources are used for data fetching, but hooking them into fine-grained reactivity can produce off-timing or partial states. Milo explains that the new core architecture might unify resource logic with the base reactivity, allowing smoother transitions between data states and better support for features like suspense.

They highlight a broader question of how to time the re-evaluation of resource-dependent components. Should they re-run in the same batch or push an update into the next tick? Issues like concurrency or race conditions pop up, prompting solutions like deferred computations or re-check steps. The chat logs reveal developer curiosity about how these advanced patterns might reduce complexity for real apps. Both see promise in continuing to refine the boundary between synchronous and asynchronous signals.

### 2:24:00 – 2:30:00 Transition Models and Progressive Enhancements

Here, Milo elaborates on transitions, referencing the idea that certain state changes can be deferred for smooth UX, akin to React’s “startTransition.” He describes a potential extension where the reactivity system can schedule heavy computations after painting the critical path, ensuring the UI stays responsive. The host notes that historically, Solid’s minimal overhead made transitions less urgent, but the new reactivity might open the door to more formal scheduling. The synergy between transitions and lazy reactivity suggests deeper optimization routes.

A separate discussion arises around form submissions and progressive enhancement, reminiscent of Remix or SvelteKit actions. The host admits that bridging these with a purely reactive approach is tricky, as some data changes are ephemeral or triggered outside normal signals. Milo sees potential in macros or specialized primitives that let developers mark certain events as transient, ensuring the broader reactivity graph doesn’t misread ephemeral states. This underscores how advanced scheduling ties into everyday tasks, like handling user interactions gracefully.

### 2:30:00 – 2:36:00 Drawbacks of Overusing Effects

As the conversation continues, they address a common developer pitfall: relying on too many effects. Milo insists that signals become most powerful when logic is declared as simple transformations, not stuffed into large effect blocks. Overusing effects can reintroduce the complexity of “setState” sprawl or condition-based re-renders, undermining the clarity signals can provide. The host illustrates with real code examples how novice developers might chain multiple signals and effects, inadvertently creating loops or race conditions.

They also mention that transitions can mitigate some of these issues, but fundamentally, a well-designed reactive system encourages a more declarative style: each piece of state derived from the minimal input signals, free of extraneous side effects. The pair recommends carefully evaluating each effect, ensuring it truly belongs outside a memo or resource. This design ethos yields simpler mental models and fosters better performance because each re-computation is tightly scoped to its actual dependencies.

### 2:36:00 – 2:42:00 Code Transformations and Batching Nuances

Touching on code-level details again, Milo shares how the new engine eliminates the clunky batching logic that once plagued earlier Solid versions. Instead of manually scheduling sets, the system’s lazy marking and coloring ensure consistent final states, even if multiple signals update in one pass. The host recounts how the previous system introduced friction for developers expecting immediate reads or writes. The fresh approach spares them from dealing with “wrappers” or “untrack” hacks.

They also highlight challenges with more advanced concurrency models. The host references React’s time-slicing as a different strategy altogether, but wonders if that overhead is necessary in a well-tuned signals system. Milo believes that fine-grained updates avoid the need to break rendering into multiple slices, so long as the reactivity engine is efficient. The conversation closes by reiterating that simpler illusions of concurrency—like transitions—often suffice without the global complexity of a full scheduler.

### 2:42:00 – 2:48:00 The Broader Shift Toward Pull-Based Mechanisms

Now they parse the subtle shift from push-based to pull-based reactivity across libraries. Milo notes that old-school observers hammered downstream subscribers constantly, while new methods wait to compute until an effect or component truly demands fresh data. This “pull on demand” style can transform how code is structured, enabling more advanced features like off-screen rendering or partial hydration. Developers can hide elements, leaving them uncomputed until the user reveals them, drastically cutting unneeded calculations in large apps.

The host references an example of a virtualized list, where hundreds of elements are tracked but only a fraction display at once. Under pure push, every update might propagate through the entire list, while lazy pulling only recalculates visible items. This approach can yield major speedups. They see synergy with new techniques like islands or server components, each relying on partial updates rather than global re-renders. The conversation suggests these reactivity changes could lead the next wave of performance gains.

### 2:48:00 – 2:54:00 Memory Management and Graph Cleanups

Within this six-minute window, Milo details the memory considerations of a large reactive graph. Each node, whether a memo or effect, holds references to parents and children. The new system aims to minimize the overhead of re-linking these references on every re-run. They mention an optimization in “reactively” that avoids rebuilding source arrays unless dependencies truly change. This tactic prevents the creation of new arrays or the removal and re-addition of references, cutting down on garbage collection churn.

They also address a user question about whether stale nodes remain dirty forever if no effect requests them. Milo explains that the system’s coloring approach discards them from the active queue, leaving them dormant without incurring repeated overhead. Only once demanded do they recheck whether their ancestors changed. This cyclical conversation about referencing, unsubscribing, and dynamic dependencies highlights the complexities behind building a robust, large-scale reactive library that remains memory efficient.

### 2:54:00 – 3:00:00 Lessons from Benchmarks and Evolution of Reactivity

Approaching the three-hour mark, they reflect on how frameworks historically tested algorithms with microbenchmarks. While these help refine certain aspects, real apps demand attention to edge conditions like partial updates, dynamic branches, and concurrency. Milo jokes that “if everything in your app depends on one signal, you can cheat with version checks,” but that hardly models typical UIs. The host cites how certain libraries show stellar results on contrived tests but struggle in practice, reinforcing the importance of a balanced approach.

They also see the silver lining: each library’s attempts to outdo others in benchmarks produce side benefits. Innovators discover new ways to short-circuit updates or handle concurrency, eventually leading to cross-pollination. Whether from Angular signals, Quick’s resumability, or Solid’s fine-grained reactivity, the entire ecosystem benefits from these incremental leaps. The conclusion to this reflective passage is that sustained iteration, plus open discussion about trade-offs, pushes the boundaries of performance further than any single library could alone.

### 3:00:00 – 3:06:00 Transitioning to Broader Community Topics

Now the host shifts the stream’s focus away from purely reactivity to the general JavaScript news segment. He thanks Milo again for diving deep into the technical underpinnings, applauding how thoroughly Milo explained the complex push-pull, lazy-labeled approach. Milo remains on screen briefly for some final remarks, mentioning ongoing tasks around transitions and resource reads. The synergy with potential compile-time macros and partial bundling also arises, marking a potential future quest for even more advanced SSR or edge distribution.

The host reads a few chat messages praising the new reactivity approach. Some viewers share excitement about code cleanliness, while others ask about complicated use cases. The conversation underscores that no single solution fits every scenario, but the new architecture paves the way for flexible, advanced patterns. The host hints at a more robust conversation about memory usage or concurrency in upcoming streams, suggesting this is merely the beginning of a multi-month push to finalize the new core.

### 3:06:00 – 3:12:00 React Documentary Shout-Out and Ecosystem Reflection

At this juncture, the host references the recently released React documentary, praising its production values and historical overview of React’s inception. He points out that React once faced skepticism but revolutionized how developers conceptualize rendering. The documentary, he says, reminds him that once-edge ideas can later become standard. This parallels the path signals have taken, going from obscure to mainstream interest across frameworks. He also mentions a Q&A session featuring Dan Abramov’s words about frameworks competing on ideas, not just code.

Linking it back to fine-grained reactivity, the host states that the greatest triumph is not a single library’s dominance but the survival of valuable concepts. He sees a resonance with how React overcame older mindsets around two-way binding, and how signals now challenge a decade of immutable, top-down updates. The chat offers anecdotes of how people used Knockout or MobX in the past, reinforcing the cyclical nature of ideas in front-end development.

### 3:12:00 – 3:18:00 Reflecting on Collaboration vs. Competition

The host expands on Dan Abramov’s quote that “We win not when React wins, but when the idea survives.” He contemplates how this principle guided Solid’s creation: it wasn’t about dethroning React but preserving the powerful patterns of granular reactivity. The host describes the lonely early years of maintaining an alternative approach, uncertain if anyone else would care. He credits React Hooks for normalizing functional composition, making more advanced signal-based systems easier to grasp.

He underscores a universal pattern: each wave of innovation, from Angular’s early successes to React’s dominance, builds on underappreciated roots. The host applauds those continuing to push front-end boundaries through open-source collaboration. Even if Solid, or another signals-based library, never becomes ubiquitous, the fact that signals now appear in Angular or Quick suggests the underlying idea has prevailed. This broader communal spirit echoes throughout the conversation: frameworks rise and fall, but good concepts live on.

### 3:18:00 – 3:24:00 Industry Shifts and React’s Next Moves

Entering the next six-minute block, the host comments on Andrew Clark joining Vercel, fueling speculation that React and Next.js might become even more intertwined. He imagines scenarios where Remix, Gatsby, or other React-based solutions must adapt to a more officially sanctioned Next-like approach. The conversation outlines how a single meta-framework could overshadow smaller players if the React team’s focus remains primarily on Next. At the same time, competition among these frameworks may drive beneficial incremental improvements.

He also touches on React’s newly unveiled server function approach, akin to the $server macros seen in Solid or Quick. The host calls it a sign that React is trying to keep pace with patterns others have championed. Nonetheless, he stresses that the “React core team = Next.js” dynamic can complicate the ecosystem. The takeaway is that React’s success has them pivoting in multiple directions—server components, concurrency, partial hydration—while other frameworks unify around simpler, more explicit solutions.

### 3:24:00 – 3:30:00 Expanding on Server Functions and SSR Patterns

The host reiterates that server functions—like those in Blitz, Solid Start, Quick, or new React proposals—emphasize a shift to center-stack logic. By enabling developers to call server code as though it were local, friction around data fetching or validating forms decreases. He suggests these patterns might soon converge, so any framework that lacks them risks falling behind. At the same time, he sees standardization challenges; each solution currently has its own compile-time approach.

He envisions a near future where “server$” syntax or an equivalent is as ubiquitous as “import” statements, bridging the final gap between front-end and back-end code. He muses on the potential for universal specs, imagining a scenario where front-end devs can write a single line that handles all networking behind the scenes. This hints at an ecosystem shift, taking the best parts of each library’s solution—like $server for Solid or useServer for React—and forging widely accepted conventions.

### 3:30:00 – 3:36:00 Addressing Community Feedback on Over-Compilation

Responding to critiques that frameworks distort JavaScript semantics, the host notes an ongoing conversation triggered by Rich Harris. Some developers argue that macro-based or compile-based transformations break the “it’s just JavaScript” ethos. Yet, the host contends that Svelte set a precedent by adopting single-file components, re-purposing let and const for reactive lines, and so on. Over time, these “magical” transformations became acceptable because they solve real problems elegantly.

He also recalls that early attempts at truly distinct DSLs, like Marco’s custom file syntax, faced steeper adoption barriers. Developers preferred illusions that everything was standard JS, even if under the hood major transformations occurred. This underscores how the community’s comfort with slight illusions has expanded, provided they bring tangible benefits. The host predicts that macros for server functions, partial bundling, or advanced reactivity are merely the next wave in that continuum of pragmatic, if somewhat magical, transformations.

### 3:36:00 – 3:42:00 Concerns About Tooling and Code Clarity

During this stretch, the host raises potential pitfalls. New macros or $server calls might confuse developers if the boundaries between client and server vanish. He suggests Astro’s separate .astro files or Remix’s file-based approach as ways to clarify which environment executes each block. By contrast, fully inline macros could lead to code that looks normal but compiles drastically differently. He stresses that each framework must communicate these boundaries effectively, preventing developer mistakes like referencing insecure variables in server code.

Additionally, the host references continuing discussions about the best path forward. Some prefer strict separation—like calling the server from an explicit file—while others appreciate inline convenience. The host sees legitimate use cases for each, hoping the ecosystem’s next steps yield consistent and intuitive patterns. He emphasizes that developer confusion ultimately correlates with poor mental models, so frameworks must remain transparent about transformations.

### 3:42:00 – 3:48:00 React as a Spec vs. Library or Framework

Here, the host circles back to React’s metamorphosis. With new proposals like “use server” or official SSR solutions, React looks less like a minimal library and more like a spec or platform. He humorously imagines a “Can I use React?” site that tracks next-level features akin to browser APIs. The tension arises where remix or other libraries must keep up with official merges, or risk seeming outdated. The host suggests that if React formalizes certain macros or server boundaries, it effectively sets a standard that others feel pressured to adopt.

He clarifies he is not necessarily against React shaping new standards, but acknowledges the complexities. On one hand, official directives could unify the ecosystem. On the other, they risk overshadowing alternative solutions or ignoring patterns that smaller libraries have validated. He leaves open the question whether a single “react spec” is beneficial or if multiple approaches can coexist under a broader umbrella of compile-time transformations.

### 3:48:00 – 3:54:00 Ecosystem Turbulence and Future Outlook

As the fourth hour nears, the host comments on how this potential shift by React may disrupt established workflows. There’s a possibility that next year or two will see major realignment as projects scramble to incorporate the new server function specs or updated concurrency tools. He references the unstoppable wave of signals-based solutions crossing into React’s territory, speculating that React might one day adopt them more openly.

He also underscores that some advanced users or large-scale apps may stick with older patterns indefinitely. Despite the hype, rewriting entire codebases to chase ephemeral gains can be risky. The host acknowledges that a stable approach—like the incremental adoption championed by TanStack Start or Solid Start—might resonate more with teams who cannot afford churn. The overall tone is of cautious optimism: big changes are coming, but real adoption depends on bridging the gap for existing code.

### 3:54:00 – 4:00:00 Revisiting the Community Collaboration Theme

In this section, the host reiterates that at scale, it’s better to unify efforts than to see each library re-implement the same SSR adapter or Windows path fix. That conviction underpinned his collaboration with Tanner and Astro. Reflecting on the synergy of specialized roles, the host notes how likely it is that next year will witness an explosion of cross-framework solutions, from serverless expansions to custom macros.

He salutes the open-source spirit that fosters such synergy. With smaller library authors and large corporate backers all experimenting, the outcome is a rich marketplace of ideas. The host sees fewer hard lines between frameworks, replaced by a common substrate—like Astro for server tasks or signals for reactivity—that many can share. While subtle differences remain in syntax or mental models, the unifying push suggests a more interconnected future for JavaScript.

### 4:00:00 – 4:06:00 Less Formal Wrap-Up and Twitch Interactions

After four hours, the conversation adopts a more relaxed vibe as the host scrolls through chat, fielding a range of spontaneous questions. He recaps earlier announcements for latecomers, from TanStack’s new direction to Solid’s reactivity revamp. Viewers also ask about smaller details—like tailwind integrations or potential Redwood-like expansions for Solid. The host encourages them to explore the official docs or community-maintained packages, underscoring the impressive volunteer contributions that keep the ecosystem vibrant.

He also throws in a few personal anecdotes: mention of birthday coincidences with Tanner, jokes about upcoming barbecue meals, or describing random ideas from the chat. This section exemplifies the open mic style of the stream, reminding viewers it’s an informal setting to hang out, not merely a polished lecture. The mood is light, and the host occasionally glances at the clock, acknowledging the length but noting that more content remains to be covered.

### 4:06:00 – 4:12:00 Revisiting “JS Framework Benchmark” Tropes

Discussion moves briefly to the JS Framework Benchmark, referencing how some libraries excel in specific tasks, while others see minimal differences in real apps. The host reiterates that microbenchmarks can highlight interesting angles but rarely capture everyday complexities. People still post results like “Solid is fastest,” or “Preact signals shine,” yet each scenario might only represent a narrow slice.

They mention potential upcoming modifications to that benchmark, possibly incorporating more dynamic changes that reflect user interactions. The host welcomes such expansions, noting that bridging ephemeral usage might better illustrate concurrency or partial updates. He points out that each library’s marketing sometimes oversells a single metric, making a healthy dose of skepticism warranted. Nonetheless, these benchmarks can be fun conversation starters and nudge library authors to pursue continuous improvements.

### 4:12:00 – 4:18:00 Fielding Community Package Questions

Another cluster of chat messages focuses on the variety of Solid or TanStack community libraries for charts, tables, or forms. The host runs through newly updated resources, praising the volunteer effort behind them. He explains that, as with React, each library gains momentum once enough stable packages exist for common tasks: whether it’s a UI component kit or authentication wrapper. The community’s heavy involvement in building these is a key marker of library maturity.

He highlights how small gaps remain—for instance, cross-platform solutions or official React Native alternatives. The host clarifies that some options exist, like NativeScript or Capacitor, though they do not fully replicate React Native’s ecosystem. It’s a trade-off of relatively younger frameworks. Yet the conversation remains optimistic, referencing the wave of expansions around XState or Flowbite that demonstrate an accelerating pace.

### 4:18:00 – 4:24:00 The “New Framework” Critique

Turning to a comedic note, the host addresses the recurring complaint: “Why do we need another JavaScript framework?” He recognizes it’s a common comment on social media whenever Solid or others gain traction. From his vantage point, competition in the ecosystem fosters innovation. He has also personally experienced the slog of building something different only to have critics dismiss it as “yet another toy.”

Nonetheless, the host has seen attitudes soften. Many developers now appreciate how a specialized approach to reactivity or partial hydration can yield real benefits. The conversation again comes full circle to signals: the concept that frameworks labeled “niche” are now influencing big players. He suggests the question of “why another library?” is misguided, as new solutions regularly catalyze improvements across the board.

### 4:24:00 – 4:30:00 Revisiting the Past: Knockout and Old Tools

In this chapter, the host recalls Knockout.js, a pioneer in reactive approaches. He muses that if the ecosystem had embraced those ideas earlier, hooks and signals might have become mainstream faster. Instead, it took React’s success to prove that a simpler mental model—like pure functional components—had wide appeal. Then frameworks like Solid refined the reactivity. He underscores that historical perspective fosters humility: good ideas can be overshadowed by other factors, but if they’re truly valuable, they often resurface in time.

He also marvels at younger developers who never experienced the older era. They might assume React’s model is the baseline. The host finds it entertaining to see them amazed by signals, which existed conceptually a decade prior. He suggests that understanding history can help developers pick the best tool today, aware that older code is not necessarily obsolete—some concepts, like granular reactivity, simply needed a fresh reintroduction.

### 4:30:00 – 4:36:00 Vercel’s Influence and The Evolving Next Ecosystem

The host digs more into Vercel’s role, highlighting how acquiring top React engineers indicates a push toward shaping the next iteration of the React ecosystem. He speculates on how Remix or other frameworks will handle potential overshadowing by official Next-based solutions. Meanwhile, watchers in chat debate the pros and cons of next-centric React design vs. an unbundled approach. He clarifies that such tensions are not new: some see tight integration as synergy, others as stifling diversity.

He acknowledges that, from a business standpoint, unifying around Next might streamline corporate usage. The entire conversation circles around the fact that React never provided an official router or meta-framework, letting third parties fill that gap. Now with Vercel’s next-level integration, the lines blur. Where some see a renewed impetus to keep up, others sense React drifting from “library” to “platform.” The host frames it as a natural outcome of near-ubiquitous adoption.

### 4:36:00 – 4:42:00 Gauging the Impact on Startup Ecosystem

During these minutes, the host addresses startup adoption patterns. He notes that for new teams, adopting Next might be the path of least resistance, given its strong brand recognition and built-in synergy with React. This leaves smaller frameworks or meta-framework alternatives competing on features or developer experience. If they prove enough of a leap forward—like cutting significant overhead or offering simpler concurrency—teams might consider them. However, inertia is strong, and many prefer the known quantity of Next unless a truly compelling advantage emerges.

He also acknowledges that performance, once a “nice to have,” is increasingly a priority for user experience and SEO. This can open the door to frameworks that champion signals or partial hydration, as they tangibly reduce client overhead. Still, decision-makers often weigh hiring availability or the developer community. The conversation reveals an ecosystem in flux, with multiple forces shaping the path from novices to enterprise migrations.

### 4:42:00 – 4:48:00 Summarizing Potential Future Directions

Approaching the four-hour-45-minute mark, the host attempts to tie threads together. He suspects that by next year, more frameworks will have server function macros, partial hydration strategies, and signals-based updates. Meanwhile, React might push forward concurrency and server components, albeit with a heavier overhead that suits large-scale apps. The next wave of sub-100KB solutions will try to match or exceed Next’s developer experience but with speed or memory usage benefits.

He also anticipates Astro’s star rising as a universal platform for multiple frameworks, bridging smaller niche libraries into mainstream usage. If these solutions deliver seamless deployment across Netlify, Vercel, or AWS, they stand to unify the ecosystem. A flurry of Q&A from chat hovers around these topics, reflecting equal excitement and uncertainty. The host states that only time will clarify which approach becomes the widely accepted standard.

### 4:48:00 – 4:54:00 Lighthearted Pizza Debate and Stream Atmosphere

At this stage, the conversation takes a playful detour into a pizza-topping debate sparked by a tweet from Jason Miller. The host jokes about maximum topping counts before the flavor balance collapses. Drawing parallels, he likens too many library abstractions to an overloaded pizza—sometimes less is more. The chat erupts with personal topping preferences, and the host shares a story of working at a pizza place, developing a philosophy that five toppings is often too many unless carefully balanced.

This comedic break demonstrates the stream’s relaxed, community-driven nature. It also underscores that after lengthy deep dives, some levity keeps morale high. The host glances at chat, reading out amusing topping combos. Listeners enjoy the reprieve from intense technical talk, though the underlying analogy remains: oversimplification or overcomplication both hamper quality, be it pizza or code. The parallel resonates with viewers, who revel in the informal banter.

### 4:54:00 – 5:00:00 Final Notes on Ongoing Community Projects

In these minutes, the host returns to a few final community highlights: new UI kits, upcoming alpha versions of reactivity libraries, and Astro’s improved documentation. He praises the collaborative spirit that has fueled these developments, from minor documentation PRs to entire rewrites of core modules. The host encourages watchers to jump in if they have interest, ensuring them that open-source maintainers often welcome help with bug triage, testing, or even feature planning.

He mentions that being part of an open-source community fosters learning far beyond what tutorials can convey, as one grapples with real constraints and user feedback. He sees tangible proof in folks like Milo, who started by experimenting with Solid and ended up reshaping its internals. This championing of contributors sets a hopeful tone: new participants might drive the next wave of meta-framework or reactivity breakthroughs. The host celebrates that future as an ongoing, collective journey.

### 5:00:00 – 5:06:00 Wrapping Up Extended Q&A

As the stream enters its fifth hour, more people trickle off, but a dedicated crowd remains. The host fields final questions on topics like code-splitting best practices, differences between progressive enhancement in Remix vs. Solid Start, and minor issues with environment variables. He addresses each briefly, often referencing the shared macros or “bling” approach as a solution. Though the conversation is winding down, the steady engagement underscores how thoroughly these topics resonate.

He also does a last round of thanks for subscriptions on Twitch and welcomes newcomers from different time zones who hopped on mid-discussion. The wide span of topics—from advanced concurrency to personal anecdotes—illustrates the variety that a multi-hour stream can encompass. Frequent self-referential humor and nods to chat reveal a comfortable, communal setting where watchers shape the direction as much as the host does.

### 5:06:00 – 5:12:00 Closing Remarks and Sign-Off Prep

The host announces that the stream has gone longer than anticipated, acknowledging how engrossing the Q&A segments became. He outlines upcoming content plans: a possible interview with Angular’s signals team, deeper dives into the next steps of “bling” macros, and maybe a fully dedicated session on new resource patterns. He thanks the audience for their patience, remarking that the final part of the discussion has been more freeform.

He also encourages watchers to catch the Syntax podcast interview he recently did, praising its blend of technical detail and broader accessibility. Wrapping up, he suggests that these kinds of open conversations—often lasting multiple hours—foster real insight that shorter tutorials may miss. By following chat’s lead and meandering through tangents, they uncovered a wide range of advanced front-end topics while maintaining an informal vibe.

### 5:12:00 – 5:18:00 Last Viewers and Post-Stream Plans

In this next block, the host muses over how exhausted everyone must be after such a dense session. He recaps the day’s big announcements: collaborations with Tanner Linsley, the shift to Astro-based meta-framework solutions, and Milo’s reactivity breakthroughs. He jokes about how watch times soared as they repeatedly teased “just one more topic.” He also double-checks whether any major news items from the JavaScript world remained unmentioned.

Chat questions lighten up, with people praising the thoroughness of the deep reactivity explanation. A few mention that the session should be split into chapters for easier replay—ironic given the real transcript is indeed massive. The host concurs but warns it might not happen due to time constraints. He thanks random supporters by name, reading their handles out loud, then hints at after-stream dinner plans.

### 5:18:00 – 5:24:00 Farewell and Final Wrap

As the stream’s final minutes tick down, the host offers personal thanks to major contributors like Nikhil, Milo, and the broader Solid Start community. He salutes the chat for thoughtful questions and engaged dialogue, reaffirming the sense of co-creation that defines these sessions. He briefly mentions future collaborations, possible live coding, and any big upcoming releases.

Finally, the host calls it a day, wishing everyone a good evening. He jokes about continuing for another hour if not for real-life commitments, then officially signs off. A fade-out or abrupt end is implied as the transcript stops at 05:32:24. Viewers leave with a sense of thorough coverage, from the intricacies of fine-grained reactivity to the swirl of meta-framework collaborations, crowned by a dash of pizza humor.