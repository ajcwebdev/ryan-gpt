---
showLink: "https://www.youtube.com/watch?v=4TdOEe6liSE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Revisiting SolidScript: Reactive Compilation"
description: ""
publishDate: "2024-08-17"
coverImage: "https://i.ytimg.com/vi/4TdOEe6liSE/sddefault.jpg?v=66be2a3e"
---

## Episode Description

A deep dive into reactive compilation, async patterns, and modern framework challenges, with hands-on examples and real-world insights spanning a wide-ranging live stream.

## Episode Summary

In this session, the speaker walks through the intricacies of compiled reactivity, runtime systems, and the trade-offs each approach entails. They begin by discussing runtime signals, Svelte’s compiler strategies, and how best to handle granular updates in JavaScript. The conversation then explores evolving trends—like “runes” in Svelte or new primitives in Solid—and the implications for cross-file reactivity and local mutation control. Throughout, the speaker also touches on advanced optimization ideas, explaining how SSR can omit runtime reactivity for speed and how effect splitting can be leveraged for clearer execution. Real-time difficulties with platform streaming and monetization tools add practical color, revealing the everyday hurdles developers face. By the end, the talk offers a thoughtful perspective on balancing simplicity against powerful abstractions and warns that future frameworks must be genuinely transformative to supplant entrenched norms.

## Chapters

### 00:00 - 05:00 — Initial Setup and Monetization Hurdles

In these first minutes, the speaker grapples with streaming logistics, aiming to go live on multiple platforms simultaneously. They run into errors tying Twitter (or “X”) to their stream, eventually concluding that a premium subscription is required. This quick frustration underscores how basic tasks—especially trying to unify multiple media channels—can be surprisingly cumbersome. These complications reveal a recurring theme of platform-level obstacles modern developers often confront.

Alongside platform quirks, the speaker shares vexing issues with YouTube’s monetization panel. Broken modals and lackluster support create an environment where even a seasoned developer must resort to ad-hoc debugging. By highlighting such everyday setbacks, the speaker sets the stage for a broader conversation on complexity, overhead, and how these small frictions mirror bigger challenges in framework design and tooling.

### 05:00 - 10:00 — Attempts to Stream on X and Splitting Audiences

Here, the discussion zeroes in on the desire for broader reach. The speaker reflects on potential downsides of audience “splitting” by streaming across multiple platforms, weighing the pros of visibility on Twitter against the friction of premium-only broadcasts. Despite earlier frustrations, the speaker acknowledges that platforms like Twitter can provide significant exposure due to a large following.

Meanwhile, the conversation touches on broader growth strategies in content creation. The speaker mentions how complicated it is to manage scattered communities, including Twitch, YouTube, and Twitter. These reflections highlight a recurring tension in modern online work: balancing convenience, cost, and the capacity for real-time technical hiccups against the promise of expanded reach.

### 10:00 - 15:00 — YouTube Debugging and JavaScript Console Hurdles

The speaker dives into debugging a mysterious issue on YouTube’s administrative console. Opening browser dev tools, they inspect JavaScript stack traces for clues on monetization errors. Despite attempts such as clearing cache storage and unregistering service workers, the problem remains unsolved, illustrating how platform-specific black boxes often impede direct fixes.

By narrating each step, they showcase a typical developer’s day: complex third-party dashboards, cryptic errors, and uncertain solutions. In parallel, there’s an undercurrent of curiosity about whether these large-scale platforms use advanced front-end patterns like incremental DOM or modern reactive systems. This moment anchors the broader theme of balancing powerful abstractions—like signals or reactivity—with the realities of big enterprise infrastructures.

### 15:00 - 20:00 — Introduction to Compiled Reactivity vs. Runtime Systems

Shifting gears, the speaker tackles the concept of compiled reactivity, recalling older Svelte approaches that analyzed code to track dependencies. They contrast that with runtime signals, noting that frameworks like Solid can handle dynamic dependencies via a more direct function-call model. The conversation emphasizes trade-offs in explicitly declaring relationships versus letting a compiler infer them.

At the heart of this discussion lies the question of how to handle complicated, real-world scenarios like asynchronous calls or conditionals. Although automated detection can simplify syntax, it can also lead to hidden edge cases—like re-running fetches when only part of the state changes. The speaker underscores the importance of mindful code organization, even in systems promising near-magical reactivity.

### 20:00 - 25:00 — Async Nuances and Avoiding Unexpected Reruns

Digging deeper, the speaker provides examples where an async function reads multiple signals—potentially causing the entire chain to re-run whenever any one of them changes. This pitfall drives home why some developers prefer a more explicit approach. While a compiler might automatically detect dependencies, it can’t always know which updates should be “hot” or “cold.”

Emphasizing real-world complexity, they recall experiences with Knockout and callback-based reactivity, demonstrating how easy it is to trigger unnecessary computations. Ultimately, they show that whether the system is compiled or runtime-driven, developers must still handle asynchronous flows carefully. The conversation ends on a practical note: compiler magic has limits when it encounters real application logic.

### 25:00 - 30:00 — Svelte’s History and the Emergence of Runes

The speaker revisits Svelte’s evolution, from its early days of analyzing let statements for reactive assignment to its more recent plans for “runes.” They note how single-file constraints initially prevented state from leaking across boundaries, effectively simplifying certain aspects of global reactivity. Now, with the possibility of shared signals or store-like structures, Svelte’s approach is moving closer to what frameworks like Solid have been doing.

There’s also a nod to the difficulties faced by Vue’s “ref sugar,” hinting that bridging the gap between automatically reactive variables and explicit functions is never trivial. This part of the conversation highlights a key theme: each framework’s unique journey toward advanced reactivity, often shaped by user demands and the complexities of sharing or isolating state.

### 30:00 - 35:00 — Read-Write Segregation and Local Mutation Control

Next, they address the principle of read-write segregation—strongly enforced in some frameworks like Solid. By segregating getters and setters, frameworks achieve clearer unidirectional data flow and ensure that only specific parts of the code can mutate state. Svelte’s former single-file approach, where reactivity couldn’t inherently leak across scopes, is pointed out as perhaps an even stricter example of this idea.

The speaker praises the simplicity of preventing uncontrolled writes, especially when passing data through multiple nested components. Not only does it aid debugging, but it also offers developers a way to see exactly where data can change. This conversation leads to broader reflections on using function-based actions or specialized store primitives to guard against accidental cross-scope mutations.

### 35:00 - 40:00 — Stores, Global State, and the Difficulty of Passing References

They pivot to discussing how to handle global or shared data, a longstanding challenge in reactive systems. One reason Svelte’s single-file logic was so appealing is that it naturally discouraged large-scale shared state unless explicitly bundled in a store. The speaker muses on the trade-offs: while global stores solve passing references everywhere, they can easily become a stealthy form of two-way binding.

Examples emerge, highlighting how data might be mutated in child components without the parent’s explicit knowledge. The speaker underscores the importance of controlling these updates, cautioning that too much implicit reactivity leads to code that’s hard to trace or reason about. By pointing to solutions like read-write segregation, they show a path for safer, more predictable architecture.

### 40:00 - 45:00 — Deeper Look at Setters and “Projecting” State

Here, the conversation explores setter functions, praising their power in untracking unwanted dependencies. The speaker illustrates that direct assignments often read data along the way, unintentionally creating a reactive chain. Conversely, using a setter function can short-circuit that reactivity, making the system more controlled.

They introduce the notion of “projection” or “projected state,” discussing how advanced transformations—like reconciling new server data—can integrate with reactivity. In these scenarios, function-based updates shine: devs can precisely define how old state merges or discards incoming data. This chapter draws a clear line between naive assignment and carefully designed set operations that reduce unintended reactivity overhead.

### 45:00 - 50:00 — Compiler Transformations and Potential Overhead

As the focus returns to compilers, the speaker notes how the best transformations eliminate unnecessary reactive nodes if the code doesn’t actually use them. This concept sounds attractive in theory, but as soon as a snippet references a deeper property or conditionally triggers reactivity, the compiler must keep track of more than one might expect.

They caution against overengineering, observing that while certain compile-time optimizations can drastically speed up benchmarks, real-world apps often require additional logic. Thus, frameworks must strike a balance between aggressively inlining or removing reactivity and preserving flexibility for advanced use cases. This balancing act mirrors the overall tension in building universal solutions.

### 50:00 - 55:00 — Embracing Runtime vs. Compile-Time in SSR

Venturing into server-side rendering, the speaker compares fully compiled reactivity (removing signals on the server) with runtime-based SSR, where reactivity is still processed but overshadowed by ephemeral concerns. Solid’s SSR approach, for instance, discards reactivity overhead in many cases, improving performance significantly.

They highlight that developer experience remains a core factor. Some frameworks want to keep server logic minimal or ephemeral, while others prefer a single consistent model across client and server. Achieving the perfect synergy can be challenging; the speaker suggests that each approach has to weigh developer ergonomics against raw efficiency gains.

### 55:00 - 01:00:00 — Strictness, Warnings, and Limiting Foot-Guns

Now, the speaker contemplates introducing stricter modes in frameworks like Solid. They mention top-level async in components, which can cause hidden re-renders or states that become unexpectedly tracked. A potential solution might be to require explicit untracking or to warn about certain patterns at build time.

However, they note that many users are drawn to “free” patterns where code seems simpler at first glance. Stricter frameworks must justify each restriction, often citing clarity and future-proofing. By surfacing these pitfalls early, frameworks can reduce developer confusion later. Still, the conversation concedes that no single rule set can prevent all tricky code paths.

### 01:00:00 - 01:05:00 — Microtask Batching vs. Immediate Updates

This segment discusses microtask batching, exploring whether updates should coalesce automatically. Automatic batching can smooth performance but might surprise developers used to signals reflecting changes immediately. Solid historically updates synchronously, letting developers see each state change at once, though at potential expense of larger-scale optimizations.

The speaker explains that offering both modes—immediate vs. batch—could accommodate different needs. They mention that React’s concurrency model is partly designed around this scheduling, whereas smaller frameworks often keep a straightforward approach. The tension echoes a broader theme: simplicity vs. advanced performance strategies that add complexity.

### 01:05:00 - 01:10:00 — Ownership and Disposal within Reactive Trees

Moving on, the speaker details ownership trees, or how each reactive piece disposes itself when no longer needed. Solid has historically let you create new “roots,” but disposal might not always be tied to a parent scope. They’re now considering default disposal with the parent, ensuring a more logical hierarchy.

This design choice aids memory management and cleanliness, crucial for dynamic UIs that create and destroy many reactive scopes. By refining the ownership model, frameworks can help developers avoid leaks and the accidental persistence of signals long after a component unmounts or a data flow finishes.

### 01:10:00 - 01:15:00 — Lazy Memos and Beyond

They discuss lazy memoization, which only re-computes on demand, highlighting potential performance boosts by not recalculating until some part of the app actually reads the value. This approach is especially attractive for ephemeral data that might not be displayed every render cycle.

Yet, the speaker reveals that in typical DOM-based applications, hierarchical structures usually short-circuit reactivity anyway. True laziness might matter most in specialized scenarios or large parallel computations. The conversation underscores that advanced features, while powerful, require careful justification to avoid complexity that doesn’t always pay off.

### 01:15:00 - 01:20:00 — Deprecating APIs and Streamlining the Surface Area

Here, the speaker notes plans to deprecate certain Solid APIs—like `createResource`—in favor of a more unified solution called `createAsync`. They also question whether `createComputer` (a specialized pattern for writing signals in pure time) remains necessary. The overarching goal is to reduce the number of distinct helpers, focusing on consistent, composable building blocks.

Such changes present a major version upgrade path, meaning existing code bases might need to adapt. Nonetheless, by consolidating multiple primitives into simpler ones, framework authors hope to clarify best practices and ensure a more cohesive developer experience in the future.

### 01:20:00 - 01:25:00 — Merging Signals, Stores, and Projection

Continuing on the theme of unification, the speaker examines how an all-in-one approach might merge ephemeral signals with deeper store objects. In this vision, reactivity can either be purely derived (like a memo) or openly mutable (like a store). Clever “projection” functions transform data sets, reconciling large arrays from a server into local states.

They showcase how something like “createStore + reconcile” can handle partial updates with minimal overhead and maximum clarity. By pushing for a smaller set of powerful primitives, the speaker believes code bases can become more intuitive, albeit with an initial learning curve.

### 01:25:00 - 01:30:00 — Replacing CreateResource with CreateAsync

Delving further, the speaker shares how `createAsync` might encompass the roles of `createResource`, bridging SSR, caching, and loading states seamlessly. Rather than forcing separate patterns for data fetching vs. local mutation, a consistent approach uses signals or store updates that handle everything from error tracking to revalidation.

While advanced usage—like partial concurrency or offline scenarios—remains possible, the simpler default is to let the data fetch logic remain consistent with the rest of the reactivity model. This approach also aligns well with derived or “projection” stores, giving developers more expressive power without extra syntactic clutter.

### 01:30:00 - 01:35:00 — Split Effects and Scheduling

The speaker returns to the idea of splitting an effect into two halves: a “pure” front half that gathers dependencies, and a “side effectful” back half that executes once all tracking is resolved. This design is reminiscent of how frameworks like React separate render phases from commit phases, ensuring no double rendering loops.

In practice, splitting effects can improve predictability. Developers know exactly when data is read vs. when DOM updates or side effects occur. The segment concludes that while it adds a conceptual layer, it potentially solves confusion around async data or rapidly changing signals.

### 01:35:00 - 01:40:00 — Debating On-Mount and Other Lifecycle Methods

Lifecycle conveniences like `onMount` become tricky in a split-phase world. The speaker notes that `onMount` historically gave a place to run code once a component fully renders. However, with advanced effect scheduling, reading reactive data within `onMount` might inadvertently track or re-run it. The question is whether to keep `onMount` or merge it into a generic effect approach.

They acknowledge that many devs love simple, explicit lifecycle hooks, so removing them could be controversial. Still, if the underlying model has changed enough, maintaining older hooks might introduce confusion or half-baked solutions that complicate debugging.

### 01:40:00 - 01:45:00 — Potential Removals and Transformations Toward Solid 2.0

A broader summary emerges about possible removals in a forthcoming Solid 2.0. Utilities like `batch`, `createMutable`, or `onError` might move to legacy or be replaced by newer patterns. This consolidation pushes developers toward a more standard, albeit more opinionated, approach across the library.

The speaker underscores that a major version jump is the opportunity to unify behaviors, handle any backward-compatibility layers elegantly, and refine nomenclature to reduce confusion. While migration can be disruptive, it also opens a path to a cleaner, more maintainable foundation.