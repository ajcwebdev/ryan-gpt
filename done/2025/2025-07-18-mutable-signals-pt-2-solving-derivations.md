---
showLink: "https://www.youtube.com/watch?v=J0O69dGljx8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Mutable Signals Pt 2 - Solving Derivations"
description: ""
publishDate: "2025-07-18"
coverImage: "https://i.ytimg.com/vi/J0O69dGljx8/sddefault.jpg?v=68797f29"
---

## Episode Description

Ryan Carniato explores mutable reactivity primitives, detailing how stores and projections solve derived state problems in fine-grained reactive frameworks.

## Episode Summary

Ryan Carniato continues his deep exploration of mutable signals, focusing on how stores and projections work as derived reactive primitives in Solid 2.0. He begins by examining why mutable reactivity and stores exist, contrasting immutable signal approaches with incremental computation (like Signia/TLDraw) and nested signal models (as shown in Jovi De Croock's Preact article). He explains the historical evolution from Knockout's manual view-model mapping through to proxy-based stores that automatically handle fine-grained updates. The stream identifies key store qualities: stable references, source guarding, reconcilability, and concurrency safety. Ryan reveals how projections act as derived mutable state, enabling granular overrides atop stores without mutating their sources, using a firewall mechanism that prevents expensive recomputation. He demonstrates projection behavior with live examples showing pass-through updates, selective override tracking, and property deletion. The stream concludes with a "This Week in JavaScript" segment discussing React performance debates, the "fast enough" narrative, and speculation about Remix's future direction.

## Chapters

### 00:00:00 - Stream Opening and Framework Philosophy

Ryan opens the stream with casual greetings and a discussion about his approach to sharing work, emphasizing that he only presents ideas when he has working prototypes to demonstrate. He reflects on the current state of framework discussions online, including criticism directed at frameworks that make bold claims without showing working implementations.

The conversation shifts to a broader philosophical point about respecting JavaScript's inherent semantics when designing reactive systems. Ryan argues that trying to "beautify" code by warping JavaScript's fundamental behavior through compilers creates long-term problems, using Svelte's evolution from runes to classes as a key example of how fighting the language's nature eventually forces breaking changes.

### 00:16:00 - Signals, Composition, and the Function Problem

Ryan examines why reactive primitives ultimately reduce to function calls regardless of syntactic sugar. He walks through how Svelte's runes, Vue's ref sugar, and various proposals all attempt to hide the underlying function-based nature of signals, but composition always requires the ability to pass reactivity around, which demands function wrappers.

He discusses how classes became Svelte's solution for composition not because classes are inherently the right abstraction, but because they provided statically analyzable syntax that the compiler could process. Ryan argues this illustrates the tension between ergonomic syntax and the underlying mechanics of reactivity, noting that signals are fundamentally functions regardless of how they're wrapped.

### 00:32:00 - The Case for Nested Signals and Stores

Drawing from Jovi De Croock's article on Preact signals, Ryan explains the nested signals pattern where each domain model contains its own signals. He compares this to the old Knockout approach of creating view models with observable properties, showing how it enables fine-grained updates that bypass component re-rendering entirely.

Ryan demonstrates the practical problem this pattern creates when synchronizing with server data: developers must manually map raw data into reactive models, diff existing models against new data, and maintain reference stability. He explains how this mapping complexity motivated the creation of proxy-based stores in Solid, which automatically handle the reactive wrapping that was previously done by hand in Knockout-era frameworks.

### 00:48:00 - Incremental Computation and Diff-Based Approaches

Ryan examines Signia (TLDraw's library) as an alternative approach using incremental computation, where diffs are communicated through signal chains rather than full state replacements. He explains how this avoids repeated clone-then-diff cycles by passing patch descriptions downstream, allowing each node to create its own patches from incoming patches.

However, he identifies significant downsides: diffs are essentially events requiring history management, the API becomes complex with switch statements handling different operation types, and signals can be lossy, requiring reconciliation strategies. Ryan concludes that while incremental computation makes sense for systems feeding back into React's diffing, there should be a better approach for fine-grained reactive systems.

### 01:04:00 - Why Stores and Signals Are Fundamentally Different

Ryan makes the case that stores and signals should remain separate primitives because they have fundamentally different semantics. Signals are immutable and return next values, while stores mutate existing state. He demonstrates the deep mutability problem where nested stores can be written from anywhere in the component tree, recreating the issues that led React developers to embrace unidirectional data flow.

The discussion covers how Solid's tuple-based API naturally encourages separating read and write concerns, implementing command-query separation without requiring immutability. Ryan explains that the produce API becoming Solid 2.0's default store setter preserves fine-grained update information that would be lost through immutable cloning, while the separation of setter from store maintains predictable data flow.

### 01:20:00 - Store Qualities: Stable References and Source Guarding

Ryan identifies the essential properties stores should have, starting with stable references where the same object placed in multiple locations maintains identity. He compares behavior across frameworks, finding that Solid and Vue mutate the original reference (maintaining identity but risking source corruption), while Svelte clones on assignment (losing identity but protecting sources).

He proposes a solution that achieves both: proxying a reference to the object rather than the object itself, which preserves identity, enables source guarding, and maintains diffability. Ryan demonstrates through live examples that this approach keeps referential equality between store locations, guards against external mutation, and still supports reconciliation with immutable data sources.

### 01:38:00 - Snapshots and the Unwrap Problem

With source guarding preventing direct mutation of underlying objects, Ryan explains why the old "unwrap" API no longer works and introduces the snapshot concept as its replacement. Snapshots produce immutable views of store state at a point in time, applying copy-on-write semantics only where mutations have occurred.

He demonstrates how snapshots maintain referential equality for unchanged subtrees while properly reflecting mutations through tree cloning. This effectively gives stores immer-like snapshot capabilities, enabling integration with immutable systems like Redux or XState while keeping the fine-grained reactive internals optimized for direct signal updates.

### 01:52:00 - The Projection Problem: Derived Mutable State

Ryan reveals the core technical challenge that motivated his recent research: projections (derived stores) were mutating their source stores, creating problems for SSR's pull-based rendering and Milo's push-based reactive system. Writing to a projection that flows back to its source creates the classic effect-in-computation problem where downstream renders see stale values.

He walks through his journey of attempting various solutions: immutable cloning (breaks pass-through updates from underlying stores), automatic diffing on every assignment (expensive for array operations), and event-based diffs (requires complex branching logic). Each approach revealed fundamental trade-offs between declarative state description and efficient granular updates.

### 02:08:00 - Designing Store and Projection Semantics

Ryan systematically categorizes the properties stores and projections must have versus those that are optional. Stores must have reference identity; projections must have reference identity, source guarding, and reconcilability. He argues stores and projections should share the same core primitive to avoid confusing divergent behaviors.

The discussion covers how this maps to Solid 2.0's unified API where passing a value to create store produces a regular store, while passing a function produces a writable projection. Ryan draws parallels to how create signal works with plain values versus functions, emphasizing the elegant symmetry where the setter form matches the derived form across both immutable and mutable primitives.

### 02:26:00 - Array Operations and the Limits of Auto-Diffing

Ryan analyzes the JS framework benchmark operations to determine whether automatic diffing on every store write would be acceptable performance-wise. He finds that creation and primitive updates carry no diff overhead, but array replacements, removes, and shifts create problematic scenarios where proxies trigger per-index comparisons requiring expensive model lookups.

He identifies a key insight: proxy traps cannot distinguish between moves and sets within arrays, making automatic diffing fundamentally limited for mutable operations. However, he discovers that existing proxy values can be detected as moves, providing a shortcut. Ultimately, he concludes that while always-diff is close to viable, the edge cases around array manipulation make it inappropriate as a default.

### 02:43:00 - The SSR and Concurrency Constraints

Ryan explains how working simultaneously on Milo's push-based reactive system and a pull-based SSR mechanism exposed the projection mutation problem. In SSR's single-pass rendering, any write that triggers re-evaluation of already-resolved content is catastrophic. Similarly, push-based systems cannot retroactively update already-processed nodes.

He details why concurrency safety requires signals to own their data rather than serving as mere event emitters. In Solid's concurrent rendering model, forked reactive graphs need signals that can provide previous, current, or future values depending on which transaction context is reading. This makes the previous-value parameter in memo setters not just convenient but architecturally essential for safe concurrent rendering.

### 03:00:00 - Pass-Through: The Key Projection Requirement

Ryan demonstrates why projections must support pass-through from their underlying store for properties they don't override. If a projection only overrides property A, updates to property B on the source store should flow through the projection to any downstream listeners without the projection re-executing.

He explains why immutable cloning breaks this requirement: cloning severs the connection to the source store, preventing pass-through updates. The solution requires projections to maintain dual tracking, subscribing to both their own override signals and the underlying store signals, selecting the appropriate value based on whether an override exists for each property.

### 03:15:00 - The Firewall Mechanism Explained

Ryan demonstrates the complete projection primitive through a detailed live example, showing how updating individual signals triggers only the affected derived properties while store updates pass through without running the projection. He walks through each update scenario: signal changes trigger projection re-evaluation for dependent properties, store changes on non-overridden properties pass through directly, and overridden properties completely shield the projection from underlying store updates.

The firewall mechanism works by notifying the entire graph of potential changes without actually scheduling effects. Only when something pulls from the projection does it evaluate, and the projection computation always returns undefined so its subscribers only get notified through the individual property signals that actually changed. This prevents the thousand-subscriber problem where a store change would otherwise trigger all downstream computations.

### 03:36:00 - Advanced Projection Behaviors and Edge Cases

Ryan explores additional projection capabilities including property override, deletion, and reset behaviors. He demonstrates that overriding a projection property completely shields it from underlying store updates, deleting a projected property removes it from the projection's shape entirely, and resetting a value back to the store's value removes the override.

He discusses writable projections and the potential for circular dependencies, noting that while theoretically possible, the natural top-to-bottom code writing pattern makes infinite loops unlikely in practice. The conversation touches on how projections relate to existing patterns like router query params and optimistic updates, with Ryan noting that most real-world projection use cases involve deriving enhanced state from async data sources.

### 03:48:00 - Practical Implications and Bundle Size Considerations

Ryan reflects on the practical implications of projections, explaining that while the primitive is powerful, most developers will encounter it through higher-level patterns like async store derivation and optimistic updates rather than direct store-over-store projection. He emphasizes that diffs are better modeled as events at system boundaries rather than carried through the reactive graph.

The discussion turns to bundle size trade-offs, with Ryan noting that stores and projections are now considered base primitives in Solid's signal library rather than optional add-ons. He acknowledges the size increase but contextualizes it against Svelte's growing runtime and the diminishing relevance of sub-kilobyte differences when the functionality gap is significant.

### 04:32:00 - This Week in JavaScript: The "Fast Enough" Debate

Ryan addresses a viral Twitter thread about React performance, examining the "fast enough" narrative that has become common in framework discussions. He argues that while no one would market their framework as "fast enough," this framing conveniently dismisses performance-focused alternatives by reducing the conversation to raw speed rather than architectural confidence.

He highlights Aaron from Zero's framing that framework overhead consumes budget that could go toward application features, and notes the irony that React originally used performance claims to gain adoption. Ryan suggests the "fast enough" argument reveals more about rhetorical positioning than technical reality, since the same people would never accept "fast enough" as a feature for their own products.

### 04:47:00 - Adding Layers, Removing Layers, and Remix Speculation

Ryan responds to Ryan Florence's tweets suggesting that components, hooks, and signals all have fundamental limitations, questioning what alternative architecture Remix might be pursuing. He engages with Florence's suggestion of removing execution context and dependency tracking, arguing that the DOM's retained-mode nature fundamentally requires some form of state scoping.

The stream concludes with speculation that Remix may be heading toward an HTMX-like approach prioritizing simplicity over performance, potentially competing more with Astro than with React frameworks. Ryan closes with appreciation for Greg Johnston's kind words about their collaborative stream on Leptos and Rust, reflecting on the importance of knowledge sharing across the framework community.