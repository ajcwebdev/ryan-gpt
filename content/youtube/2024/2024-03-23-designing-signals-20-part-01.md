---
showLink: "https://www.youtube.com/watch?v=sMbICJUGJj4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Designing Signals 2.0"
description: ""
publishDate: "2024-03-23"
coverImage: "https://i.ytimg.com/vi/sMbICJUGJj4/maxresdefault.jpg"
---

## Episode Description

An in-depth exploration of advanced reactive signals, Solid 2.0’s evolving design, and broader framework challenges, spanning over five hours of lively technical discussion.

## Episode Summary

This conversation offers a thorough look into how modern JavaScript frameworks are adopting and refining signal-based reactivity, with a special focus on Solid’s upcoming 2.0 enhancements. Beginning with a foundational recap of push versus pull systems, the host illustrates the complexities of synchronous and asynchronous updates, as well as the intricate ownership model that underpins fine-grained rendering. The discussion then connects these core reactive concepts to emerging solutions in concurrency, resource handling, error boundaries, and the role of Suspense. Throughout, various real-world examples—ranging from small demos to large-scale apps—highlight the strengths and challenges of different approaches. By drawing on personal development experiences, ongoing community collaborations, and insights from other frameworks, the talk showcases how reactivity, when carefully designed, can power both high performance and a fluent developer experience across a wide spectrum of use cases.

## Chapters

### 00:00 - 00:15 Introduction, Setup, and Initial Chat

In the opening moments, the speaker greets the audience and confirms that the microphone is functioning. There is an immediate sense of excitement in the virtual room, with participants already chatting about signals, new releases, and the ongoing developments in the ecosystem. The speaker addresses past technical glitches and expresses optimism about the day’s topic. Early on, viewers can sense the speaker’s eagerness to return to fundamental discussions around reactivity and the groundwork that has led to Solid’s feature set. These few minutes serve as an informal welcome, setting a relaxed yet highly focused tone.

During this interval, the speaker also remarks on recent birthdays and community milestones, showing the close-knit nature of the listeners and contributors. Viewers learn there is a strong community presence in chat, reflected in rapid-fire greetings and comments. Although no deep technical points are introduced just yet, the speaker hints at important themes: the upcoming major version changes, reactivity foundations, and the synergy between personal focus and community needs. This early segment underscores that the conversation to follow will be thorough, with a clear path back to the “roots” of reactive programming.

### 00:15 - 00:30 Push and Pull Systems Overview

Here, the speaker dives into the core concepts of push-based and pull-based reactivity. They illustrate how simple code examples can track dependencies, demonstrating a straightforward push approach where updates propagate immediately to subscribed listeners. Emphasis is placed on the differences between naive implementations—such as a 50-line example library—and production-grade frameworks that add optimizations like memoization. Listeners learn about potential pitfalls, including unnecessary re-renders or “diamond problems,” which occur when multiple computations depend on shared or branching state. These anecdotal scenarios clarify why “push-only” models often need refinement.

The speaker contrasts this with a rudimentary pull-based system, showing how each value is fetched on demand rather than pushed. To illustrate, they walk through short scripts that exemplify repetitive polling and memorization strategies. This side-by-side comparison of push and pull underscores how each method impacts developer experience and performance. By highlighting flaws—such as cluttered code or over-reliance on effects—the host foreshadows the evolution of push-pull hybrids. Though technical in nature, this segment ensures both new and experienced listeners can grasp why frameworks must refine basic reactivity patterns.

### 00:30 - 00:45 Eager vs. Lazy Computations and Scheduling

Building on the earlier groundwork, the conversation turns to scheduling and the contrast between “eager” and “lazy” signal computations. The speaker points out that Solid has historically taken an eager approach, applying updates immediately. While this can be beneficial for certain synchronous guarantees, it may become inefficient or overly complex once concurrency and partial rendering are considered. Using a hypothetical example of updated data flowing through a hierarchy, the speaker shows how eager signals always recompute entire paths even when only a few nodes have genuinely changed.

The talk then highlights the reasons some frameworks opt for lazy evaluation, which can defer work until a specific value is accessed. This helps avoid redundant recalculations but also removes the assurance of a simple “pure phase” before effects run. Alongside concurrency concerns, the speaker notes that deferring computations can produce subtle issues around transitions or user interactions, creating the need for more advanced scheduling. This period of the chat underscores how seemingly small design choices, like when to compute a value, ripple into larger architectural decisions in reactive libraries.

### 00:45 - 01:00 Ownership Model, Disposal, and Hierarchical Reactivity

In this segment, the focus shifts to the ownership model at the heart of fine-grained frameworks like Solid. Listeners learn how each effect or memo “owns” child computations, enabling automatic cleanup and preventing memory leaks. The speaker explains that, by nesting reactive contexts, frameworks can isolate updates to just the relevant parts of the UI. This approach eliminates the need for frequent component re-renders. Practical examples reveal how signals automatically disconnect dependencies or dispose entire nested trees when conditions change, such as toggling an element on or off.

The discussion also touches on advanced scenarios, like error boundaries and context providers, showing how Solid extends the same ownership tree to unify multiple concerns. Developers gain insights into the significance of grouping reactive logic under a single root, which then spawns “child” computations as needed. The speaker emphasizes how this approach contrasts with more traditional solutions that rely on global structures or complicated lifecycle events. It emerges that ownership is a powerful means to keep code both tidy and efficient, paving the way for robust user experiences.

### 01:00 - 01:15 Structural Control Flow vs. Component-Based Rendering

Here, the conversation spotlights how Solid forgoes conventional component-centric re-renders in favor of fine-grained, data-driven updates at each decision branch. Illustrating with if-else blocks and loops, the speaker highlights how references to signals drive reactivity at precisely the points where content actually varies. This is distinctly different from the “big chunk” approach, where entire components re-run on a signal update. The structural method yields extraordinary performance by cutting out needless re-checks, without forcing developers to break their apps into multiple components.

By walking through code fragments, the speaker demonstrates how each conditional region manages its own reactive scope. Whenever a controlling signal changes, only the expressions within that logic path recalculate. Listeners see that this also applies to advanced features like Suspense and error boundaries, reducing complexity by sharing a single underlying ownership model. This section shows how structural flow elevates reactivity beyond simple parent-child component trees, enabling a leaner path from data to DOM updates with minimal overhead or developer fuss.

### 01:15 - 01:30 Async Handling and Null Checks in Reactive Systems

As the speaker transitions into asynchronous data flows, they examine the common pain point of null checking in resources or fetched data. Examples include retrieving user objects and having to guard against null at every reference. Suspense boundaries in React, or show blocks in other frameworks, handle this by blocking sections of the UI until data is available. The speaker proposes a more granular approach, where only the final consumption of an async resource needs to pause or fallback, letting the rest of the page remain responsive.

The conversation broadens to discuss how frameworks can unify derived values, lazy fetching, and partial rendering to eliminate “waterfall” loading. Attendees hear that a more resilient design would allow separate async branches to fetch simultaneously, avoiding sequential blockages. There is also mention of potential future APIs or experimental ideas—like throwing within computations—that auto-suspend just the small portion needing data. This period underscores the speaker’s push to reduce boilerplate null checks and unify the reading of async information into a smooth, reactive paradigm.

### 01:30 - 01:45 Introducing Create Async and Synchronization Challenges

In this block, the speaker outlines a new primitive concept tentatively named `createAsync`. Envisioned to act similarly to `createMemo` but specifically for asynchronous operations, it would begin fetching the moment it’s defined, sidestepping lazy pitfalls that cause waterfall delays. The objective: let the rest of the app keep working while each async memo runs in parallel. This contrasts with existing solutions that often re-check multiple times or rely on complicated effect logic to coordinate data flows.

However, synchronization issues crop up when developers also want to modify values that are derived. The speaker introduces the idea of a “writable” layer on top of an async resource—allowing ephemeral updates yet still maintaining a consistent graph of dependencies. Listeners learn that synchronization between top-level (fetched) data and local modifications can cause partial reactivity to break down if not done carefully. Though the concept is still forming, it signals a broader ambition to let developers avoid manually wiring everything with bridging effects, offering a more integrated, reactive approach for complex asynchronous workflows.

### 01:45 - 02:00 Batching, Auto-Memoization, and Global Scheduling

Attention turns to batching strategies, including how some frameworks automatically coalesce state updates to prevent thrashing. The speaker references React, Vue, and others that batch on microtasks, while older Solid versions typically propagate changes immediately. Switching to a push-pull architecture invites new methods of deferring computations, letting frameworks group multiple updates. The speaker discusses improved scheduling where only relevant computations recalculate, reducing the frequency of large-scale re-renders.

This leads to an explanation of global scheduling flags—like a “flush sync” function—that forcibly updates state in real time, bypassing default scheduling. Viewers discover that frameworks balance auto-batching with developer control, so animations or DOM measurements still work seamlessly. In tandem, automatic memoization can detect unchanged primitives or reference-equal objects. Yet advanced use cases, such as deeply nested data or expensive CPU tasks, still benefit from manual hints. Ultimately, the speaker reveals that a synergy of global batching and carefully chosen manual signals often yields the best performance.

### 02:00 - 02:15 Revisiting Ownership and Nested Effects for Large Applications

Returning to the idea of hierarchical reactivity, the speaker reaffirms that ownership is crucial for large-scale applications. By nesting effects, computations, or context, each boundary can automatically clean up child dependencies. The speaker stresses that such a system is more than a memory safeguard: it also clarifies application flow when sections of the DOM appear or disappear based on user input. This is how “control flow” shapes the app’s architecture, diminishing the need for global watchers or ephemeral lifecycle calls.

Concrete examples emerge of how multiple data streams—whether from form inputs or server fetches—fit into the same ownership hierarchy without tangling. The concept of “run with owner” is briefly touched upon, illustrating advanced usage where developers sidestep the default scope to share or embed reactive blocks in novel ways. The speaker emphasizes that while many frameworks replicate some version of ownership behind the scenes, explicitly using it in Solid’s model encourages a more predictable, maintainable code organization for both novices and experts.

### 02:15 - 02:30 Differences in Reactivity Across Libraries

In this section, the talk branches into an overview of how different libraries handle reactivity. The speaker references older frameworks like Knockout, more recent ones like Vue and Svelte, and even Angular’s forthcoming signal-based approach. By examining how each library chooses to push or pull updates, or how they model memory disposal, listeners gain a panoramic sense of the ecosystem. The speaker highlights that while fundamental constraints exist—like ensuring consistent data flow—each project tailors solutions to its own design goals.

Particular attention is given to frameworks that have only partially adopted signal concepts, such as Preact Signals or certain lesser-known libraries. The speaker contrasts them with Solid’s more “push-pull” approach, pointing out subtle differences in performance implications, especially around concurrency. Some frameworks lean heavily on lazy calculations; others prefer immediate updates. By tracing these variations, the speaker paints a nuanced picture of an evolving ecosystem that is gradually converging on signals—but still differs in how each project balances developer experience with raw computational efficiency.

### 02:30 - 02:45 Tackling Async Waterfalls and Proposed “Create Writable”

Having established the complexities of asynchrony, the speaker delves further into solutions for those “waterfall” effects, where data must sequentially load. A “createAsync” approach can help parallelize fetches, but local edits still pose a challenge if the underlying data changes. To address this, a new concept—sometimes referred to as “createWritable”—is introduced. It would permit derived state to be overwritten in a controlled fashion, granting ephemeral updates without breaking the signal graph. This is particularly powerful for form data or optimistic UI patterns.

Listeners hear examples of how such an approach could transform complex tasks like building Trello-like boards or multi-step wizards that merge local changes with re-fetched resources. Instead of writing synchronization code in effects, developers would rely on specialized primitives that handle merges or diffs. This fosters a more declarative style, where each piece of state can be traced to its origin while still allowing user-driven modifications. The speaker makes it clear, however, that these ideas remain experimental, underscoring a future direction aimed at smoothing out advanced reactivity use cases.

### 02:45 - 03:00 Framework Benchmarks and Performance Nuances

The speaker shifts to performance comparisons, referencing well-known benchmark suites. They mention how proxy-based solutions, though convenient for deep reactivity, can carry overhead. Various libraries like Svelte 5 or Vue’s Vapor experiment use proxies differently. Even small overheads can add up in hot paths, though some frameworks see only negligible slowdowns. The host reiterates that while raw benchmarks often guide library decisions, real-world usage is typically dominated by rendering or network overheads, not minute differences in reactive bookkeeping.

A recurring theme is that each approach—proxies, getters, or “immutable plus memo”—offers trade-offs in code clarity and speed. The speaker recounts anecdotal examples of developers hitting performance bottlenecks only after writing inefficient solutions. In most practical scenarios, frameworks remain sufficiently fast until extreme edge cases arise. Ultimately, the conversation underscores that a well-designed signal architecture can mitigate many potential pitfalls. Performance gains then become less about base reactivity overhead and more about removing entire layers of repeated computations that a system like Solid can optimize away.

### 03:00 - 03:15 Evolution Toward Solid 2.0

Entering the third hour, the speaker formally addresses “Signals 2.0,” a planned overhaul of Solid’s reactivity at the core level. They reveal that, after years of focusing on side projects like SolidStart, attention is shifting back to fundamentals. The proposed changes bring lazy signal evaluation, refined concurrency handling, and improved async flows. The host hopes to strike a balance between synchronous clarity and scheduling flexibility, improving developer control around transitions and server-streaming scenarios.

While the pivot to 2.0 might appear subtle, it demands deep introspection of how every memo, effect, and resource is processed. The speaker emphasizes that building a new reactive core is no small feat: internal algorithms for dependency tracking, partial invalidations, and ownership must be re-tooled. With concurrency becoming more common, they also plan to build transitions directly into the new system, unifying the “pure” and “effectful” phases. The speaker expresses cautious optimism, acknowledging that incremental releases will involve considerable community feedback and testing.

### 03:15 - 03:30 Rebuilding the Signals Package from Scratch

Discussing the practical work behind Solid 2.0, the speaker references a repository dedicated to next-generation signals. It starts with the bare essentials—`createSignal`, `createEffect`, `createMemo`—then incorporates new ideas like `createAsync`. They mention collaboration with contributors who are experimenting with scheduling modes, transitions, and advanced error handling. The speaker shares that early prototypes show promising performance, even if some features, such as concurrency or auto-lazy checks, remain incomplete.

Listeners learn that rewriting signals is more than a code exercise: it’s a chance to refine teaching, unify error boundaries, and finally integrate concepts like partial hydration or resumability. The speaker reiterates how a fresh start grants freedom to discard legacy quirks. However, caution persists. Migrating existing apps must remain as frictionless as possible, so the community can adopt 2.0 without major rewrites. The general sentiment is that a stable, powerful signals core will unleash new patterns, from simpler resource fetching to elegantly scheduling side effects.

### 03:30 - 03:45 Angular, Wiz, and the Industry Shift Toward Signals

At this juncture, the conversation pivots to broader industry news: Angular is actively embracing signals, and Google’s Wiz framework is being integrated with Angular. The speaker explains that Wiz has powered large-scale Google services like Search and Photos, employing resumability in a less developer-friendly way. Angular’s newly added signals aim to merge these philosophies, delivering performance and a better programming experience. Viewers witness how “signals mania” has swept across most major frameworks, each adapting the concept to their unique architectural needs.

The speaker highlights that large companies like Google have historically faced tough constraints around app size, cross-team coordination, and partial rendering strategies. By adopting signals, they can isolate updates, significantly cut overhead, and skip entire swaths of re-processing. There is clear enthusiasm about combining Wiz’s advanced hydration approach with Angular’s more developer-centric design. This convergence underscores how signals are transforming enterprise-scale front ends, suggesting a new standard for performance and maintainability across major framework communities.

### 03:45 - 04:00 The Reality of Building Massive Apps at Scale

Shifting the lens to real-world enterprise development, the speaker acknowledges that even the best frameworks can falter under mounting complexity. They cite examples where large companies, including Google and eBay, must juggle team size, ad integrations, and monolithic codebases. Performance remains a common concern, but the underlying reasons are often organizational rather than purely technical. Framework designers can only go so far in safeguarding performance if product teams add enormous payloads or extra scripts.

Nevertheless, the speaker believes that new reactivity approaches—like signals combined with partial hydration or resumability—can protect performance from developer missteps. Even in massive teams, these fine-grained updates enforce boundaries on how code intermingles. The speaker also describes potential skepticism, pointing to social media threads criticizing slow load times on popular apps. Ultimately, listeners come away with the realization that while frameworks supply powerful tooling, the final word on performance depends equally on product decisions, usage patterns, and organizational priorities.

### 04:00 - 04:15 Reflection on Community Contributions and Solid Start’s Journey

Now the speaker takes a more personal turn, discussing the effort behind building SolidStart from scratch and reaching its 1.0 milestone. They recall the earliest commits and the three-year path of writing code, rewriting it, and handling community feedback. It was never just one person’s job; a rotating cast of volunteers, core team members, and open-source champions all helped solve pressing issues. This communal energy and generosity, the speaker says, is what turned a fledgling framework into a production-ready SSR solution.

Yet it also came at a cost. The speaker recounts episodes of intense scrutiny, public drama, and personal doubt. Some contributors left or reduced involvement, and certain controversies forced the community to question whether an official meta-framework was worth the challenge. Nevertheless, the team resolved to persist, refining architecture choices and ensuring SolidStart upheld the same performance ethos as core Solid. This passage underscores that shipping a major feature isn’t just about code; it’s about building trust, forging a vision, and integrating countless lessons learned along the way.

### 04:15 - 04:30 Acknowledgments, Grants, and the Realities of Open Source Funding

Here, the speaker outlines the difficulties of maintaining an open-source project with limited resources. While large companies might fund dozens of developers, Solid mainly depends on a handful of dedicated contributors, sponsorship programs, and occasional grants. Even with the strong endorsement of services like Netlify, each new feature or fix requires volunteer time, and no single organization can cover all ecosystem needs. The host expresses gratitude toward sponsor companies and individuals whose support elevates Solid from a side project to a legitimate community resource.

The conversation then explores parallels with other frameworks that have followed similar paths, like Vue. Although they eventually found sustainable models, the speaker emphasizes that each community’s journey is unique. For Solid, the priority remains providing a stellar developer experience rather than chasing monetization. Yet to keep pace with major players, the project must continuously improve tooling, docs, and features like transitions or new fetch primitives. This broad, reflective perspective highlights the balancing act of building advanced software within the constraints of open-source funding and volunteer availability.

### 04:30 - 04:45 Closing the Chapter on “Clown Town” and SolidStart’s 1.0 Release

In a heartfelt moment, the speaker revisits a past controversy where outsiders derided the SolidStart project with dismissive nicknames. They explain the personal significance of naming the release “Welcome to Clown Town,” reclaiming a phrase once used to belittle the effort. Despite the hardship and negative public comments, the team persevered, culminating in a robust 1.0 release that earned praise from many corners of the JavaScript community. By publicly thanking all contributors, including those who left or faced criticism, the speaker underscores the unity and resilience of open-source collaboration.

They recount that some of the toughest trials bonded the community more strongly, reaffirming why SolidStart needed to exist. Gathering code from closed PRs, bridging new docs, or reconciling different visions was a massive labor that eventually paid off. The speaker’s focus is now on celebrating the final product, proud of how features like file-based routing, server functions, and single-flight mutations reflect the project’s determined spirit. The segment ends on an uplifting note, signaling that the community looks ahead confidently to future developments in Solid’s ecosystem.

### 04:45 - 05:00 Future Plans, Documentation, and Maintaining Momentum

As the talk nears its conclusion, the speaker offers a glimpse of what’s next for Solid and its community. They mention ongoing plans to finalize the new documentation site, ensuring every guide is accurate and up to date. Tests for advanced islands features, concurrency improvements, and partial hydration remain in progress, hinting at a busy roadmap. The speaker also points to areas where they hope to see more community involvement, such as building additional integrations and refining developer tooling.

In discussing these plans, the host underscores the drive to polish existing features rather than chase flashy additions. The dream is to hand developers a complete, intuitive environment where reactivity seamlessly stretches from server logic to user interactions. By shoring up documentation and smoothing rough edges, the team hopes to open SolidStart to a broader audience of both hobbyists and large-scale app developers. This chapter ends with a sense of optimism, illustrating that while the path has been winding, a clear direction now guides ongoing progress.

### 05:00 - 05:09:51 Final Remarks and Sign-Off

In these closing minutes, the speaker rounds up loose ends and prepares to sign off. They offer thanks to chat participants who stuck around through the entire conversation, acknowledging how interactive comments shaped the flow of the discussion. The speaker also expresses excitement for upcoming guest appearances, mentioning that future streams may feature industry experts from frameworks like Wiz or Angular. This final commentary ties back to the night’s big themes: open collaboration, thoughtful design, and a relentless push for improvement.

Before ending, the host makes a final note about how swiftly the ecosystem is evolving, with new frameworks, signals proposals, and advanced compiler techniques reaching mainstream status. The parting message is hopeful: even after five hours of intricate technical talk, there remains room to innovate, particularly in asynchronous reactivity and developer experience. The speaker signs off with gratitude for all listeners, confident that the shared insights, collective victories, and occasional hurdles encountered along the journey will continue spurring progress in the months ahead.