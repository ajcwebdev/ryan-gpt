---
showLink: "https://www.youtube.com/watch?v=xnmvxWEK25I"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Signals 2.0: The Future of Signals"
description: ""
publishDate: "2025-02-15"
coverImage: "https://i.ytimg.com/vi/xnmvxWEK25I/maxresdefault.jpg"
---

## Episode Description

A far-reaching exploration of next-generation signals, reactivity models, and the evolving landscape of JavaScript frameworks.

## Episode Summary

This transcript captures a thorough conversation about advanced reactivity techniques, focusing on pushing signals beyond standard paradigms to address asynchronous behavior, self-healing error boundaries, and mutable data streams. Throughout roughly six hours of content, Ryan Carniato examines key challenges in state synchronization, discusses the intricacies of push-versus-pull updates, and demonstrates cutting-edge approaches that create new possibilities for frameworks like Solid. He compares established patterns, references how React’s philosophy has shifted, and highlights how newer primitives facilitate more predictable, finer-grained updates. Along the way, he touches on performance, immutability, concurrency, and emergent best practices shaped by ongoing experimentation. The result is a comprehensive look at Signal 2.0 concepts, revealing compelling ways to handle UI updates, handle errors, and unify server and client data in modern web development.

## Chapters

### 00:00:00 - Introduction and Initial Context

In this opening segment, Ryan Carniato greets the audience and outlines the main objectives for the stream. He sets the tone by explaining that “Signals 2.0” represents a fresh stage in signal-based reactivity, hinting at the deeper topics ahead, including error boundaries and asynchronous updates. He also acknowledges the community’s interest in next-level performance gains.

He emphasizes how this conversation will showcase several months of internal experimentation, providing an honest account of development struggles and conceptual breakthroughs. It becomes clear that the next few hours aim to frame a broader reactivity model, one that challenges assumptions around component rendering and unify push-pull data interactions in novel ways.

### 00:06:00 - Revisiting Basic Signals

Here, Ryan revisits fundamental signal behaviors to ensure everyone shares a baseline understanding. He describes the nature of signals as the core state primitives, underlining how they function synchronously and propagate changes without re-rendering entire components. By recapping established patterns, he paves the way for deeper, more advanced material.

In doing so, he notes how signal logic typically remains consistent and predictable. This reliability is contrasted with scenarios requiring a more complex approach, such as when asynchronous events or nested updates prompt a more nuanced reactivity flow. This chapter helps clarify how existing systems already leverage signals effectively.

### 00:12:00 - Pushing Signals into Async Territory

In this section, the conversation shifts to the crux of the new proposals: the ability to handle asynchronous operations within signals themselves. Ryan introduces the concept of “throwing on read,” explaining how an async signal can suspend when data is not yet ready, much like standard suspense in React.

He demonstrates sample code that reveals signals returning a non-nullable state while internally managing promises and error states. By illustrating parallel and nested fetch requests, he shows how to maintain a consistent data layer without unwieldy logic branching. This development signals a major leap forward for granular reactivity under async loads.

### 00:18:00 - Self-Healing Error Boundaries

Ryan next dives into the mechanics of error handling within signals. He explains how the library can track failures localized to each effect or derived computation, preventing full-tree unmounting. These “self-healing” boundaries allow partial resolution while unaffected parts of the UI remain intact.

He presents an example of nested components, each holding its own error boundary. Upon encountering an error, the boundary captures and displays a fallback, yet can gracefully clear itself once the underlying issue resolves. This structured error approach goes beyond typical try-catch, reducing the possibility of user-facing disruptions.

### 00:24:00 - Inversion of Control: Effects and Memos

Here, Ryan revisits fundamental distinctions among signals, memos, and effects. He underscores how signals are the single source of truth for state changes, while memos and effects operate distinctly, one on the pure side and the other on the side-effectful side. He clarifies that pushing logic into derived signals can streamline data flow.

This segment also uncovers the tension between synchronous memo computations and the side effects triggered by state changes. Ryan discusses how the advanced design splits effect execution into two halves, ensuring asynchronous transitions do not interrupt or reorder logic unpredictably. The conversation lays groundwork for a safer signal-based architecture.

### 00:30:00 - Parallel Fetching and Avoiding Waterfalls

Next, Ryan demonstrates how multiple asynchronous operations can run in tandem, sidestepping the “waterfall” pattern common in older data-fetching approaches. He shows that each async signal fetch can initiate eagerly, so that UI reads will suspend only when truly necessary.

He draws parallels to the concurrency challenges in frameworks like React but points out that signals’ fine-grained nature allows more precise updates. By only re-checking each effect or memo, the system avoids re-rendering entire trees. This highlights how integrated async logic inside signals can deliver more robust and efficient data flows.

### 00:36:00 - Handling Diamond and Flag Problems

Ryan references two well-known scenarios in reactivity: the “diamond problem,” where parallel branches converge, and the “flag problem,” where dependencies cascade in a particular sequence. Both can lead to redundant or untimely fetches if not carefully managed.

He explains how a specialized model that mixes push and pull logic—coupled with specialized scheduling—protects the system from re-fetching or inconsistent states. By ensuring each derived node eagerly schedules its async operations, the library sidesteps many of the pitfalls that hamper typical re-render-driven frameworks.

### 00:42:00 - Influence of React’s Ideas

At this juncture, Ryan acknowledges how React’s pioneering notions—like throwing promises in suspense—helped inspire the new signals approach. Yet he notes that React’s re-render model limits certain opportunities for deeper concurrency and self-healing.

He contrasts React’s focus on transitions and fiber with the direct control signals afford, describing how signals localize updates to individual computations. This allows advanced patterns, such as partial rerendering or more flexible parallel fetches, to surface with minimal overhead and code complexity.

### 00:48:00 - Mutable Derivations and Projections

The discussion turns to “mutable” reactivity, or derived stores, which let developers project data into new shapes while keeping granular updates. Ryan clarifies that older patterns relied on creating “computed” or “selector” signals that might lead to tearing if the underlying data changed unpredictably.

He introduces the idea of a “projection,” akin to a store-based diff, so that updates to the base store reflect only the minimal changes in derived structures. This ensures wide-scale reusability of transformations without forcing an entire tree of effects to reevaluate, illustrating another dimension of signals’ evolving capabilities.

### 00:54:00 - Stores vs. Signals

Here, Ryan carefully distinguishes between direct signals—simple read-write functions—and store objects that wrap nested data in proxies. He explains that while signals work great for single values or simpler states, stores are often advantageous when dealing with deeply nested structures.

He highlights how the new approach eliminates certain overheads by only creating proxies when necessary. Furthermore, advanced store transformations let devs manipulate large, tree-like states with minimal re-computation. The emphasis remains on a clearer read-write distinction that preserves reactivity with lower performance costs.

### 01:00:00 - Bridging Server and Client

Ryan provides examples of bridging the server and client via signals, building on the foundational “throw on read” pattern. He describes potential server actions, which behave like tiny remote procedure calls but remain integrated into the same signal-based architecture.

This approach allows the library to manage full user interactions and fetch cycles without shifting between disjoint paradigms. Ryan stresses how, in the new model, the client can keep its interactive state while the server seamlessly handles updates, giving a more integrated developer experience.

### 01:06:00 - Suspense Boundaries in Complex Apps

In this segment, Ryan revisits suspense, describing how placing suspense boundaries in nested structures still allows partial content to load. The new signals approach ensures each boundary only re-checks relevant data, saving computations across unaffected regions.

He showcases a scenario with multiple parallel fetches below each boundary, each isolating potential load failures or delays. This localized fallback strategy improves user experience by preventing entire screens from going blank. The chapter emphasizes how signals simplify nested suspense patterns beyond typical frameworks.

### 01:12:00 - Laziness and Caching Strategies

Now the conversation shifts to performance optimization by leveraging lazily computed signals. Ryan underscores that “caching” is naturally integral when signals only re-run computations upon relevant changes. This fosters a sense of efficient reactivity with minimal overhead.

He contrasts typical reactive libraries that re-compute eagerly, clarifying that the signals library carefully schedules updates. By tracking dependencies at a granular level, the approach avoids superfluous recalculations, boosting responsiveness even under heavy load or frequent data changes.

### 01:18:00 - Eager vs. Deferred Fetches

Here, Ryan clarifies the difference between eagerly starting parallel fetches and waiting until a read to initiate them. Eager approaches solve the diamond problem, ensuring everything is requested up front, while deferring can lead to waterfalls.

By describing both patterns, he shows how signals can adapt to whichever style suits the application’s needs. In some cases, deferring is still desirable for performance or resource management. Signals remain flexible by letting developers define exactly when a fetch begins and how errors or successes propagate.

### 01:24:00 - Integrating with Existing Libraries

Ryan examines how these new primitives integrate with external libraries like routing or data caching solutions. He suggests that advanced reactivity pairs nicely with established systems, sometimes replacing or enhancing parts of frameworks that handle data invalidation or query caching.

He recognizes that a vibrant ecosystem means devs often rely on specialized libraries. By weaving signals more deeply into userland code, bridging data flows and UI remains straightforward, letting existing solutions benefit from signals’ granular updates.

### 01:30:00 - Handling Cleanup and Resource Management

Moving forward, Ryan dives into resource cleanup: disposing subscriptions, canceling fetches, and halting side effects. He notes the library’s emphasis on dividing pure computations from side-effectful ones to avoid entangled logic. This ensures external resources only open when needed.

He highlights how, if a component or effect is unmounted, the library can gracefully tear down open intervals, timeouts, or streams. This avoids memory leaks or stale requests. The conversation underscores that predictable cleanup is key to robust, production-ready apps.

### 01:36:00 - Real-World Scaling and Performance

Ryan shifts to practical scaling issues: how do these ideas fare in large apps with many signals or massive data sets? He emphasizes that fine-grained reactivity shines when harnessed carefully. Not everything must be a store or memo; strategic usage keeps overhead minimal.

He references tests and benchmarks that reveal impressive speed-ups over older approaches. The new system’s scheduling choices, partial updates, and lazy computations can yield performance benefits even as apps grow, provided devs structure code with clarity.

### 01:42:00 - Aligning with Browser APIs

Ryan discusses how signals might interact with or replace certain browser-based abstractions, such as DOM events or Intersection Observers. He points out that while some integrations remain beyond the library’s scope, the fine-grained approach can unify event listening with minimal overhead.

He argues that this synergy offers potential for adopting signals at a lower level, though library authors must consider the overhead of bridging direct DOM APIs with reactivity. Even so, the general direction remains to let signals coordinate scheduling rather than rely heavily on external watchers.

### 01:48:00 - Router-Level Hoisting and Code Splitting

Turning to advanced routing concerns, Ryan revisits how code splitting can inadvertently cause request waterfalls. He mentions that a router’s job often includes preloading or parallelizing code and data fetches to keep transitions smooth.

He explains how signals help by eagerly registering fetch operations outside of direct reads, removing artificial blockages. The routing layer can orchestrate code bundles while signals manage data concurrency. It’s a pattern that ensures dynamic routing remains both powerful and simple to reason about.

### 01:54:00 - Transitioning from Legacy Patterns

Here, Ryan acknowledges that devs coming from older reactivity or “create effect” centric patterns may need to rethink how code is structured. The library’s introduction of new primitives, like createAsync or advanced store operations, requires changes to mental models.

He believes the payoff is significant: less duplication, fewer mysteries around state updates, and more consistent concurrency. However, he concedes that effectively communicating these shifts requires robust documentation, examples, and possibly codemods to ease migration.

### 02:00:00 - Avoiding Over-Fetching

Ryan addresses a common pitfall in data-driven applications: over-fetching leads to wasted bandwidth and needless complexity. By wiring up fetch calls directly to signals, devs can precisely track when data is stale or still relevant.

He references simple state toggles that indicate “loading” or “fresh.” Because the library ties these states to read dependencies, the system inherently avoids re-fetching unless a genuine update occurs. It’s a major step toward more deterministic data usage.

### 02:06:00 - Immutable vs. Mutable Debate

In this segment, Ryan broadens the discussion to functional immutability and whether signals can remain purely functional. He acknowledges that fully immutable architectures simplify certain reasoning but can introduce overhead in large-scale data transformations.

He explains how the new approach merges these worlds, letting developers keep immutability at the boundaries but apply granular mutation inside the library for efficiency. It’s a pragmatic mix, ensuring devs don’t sacrifice performance or clarity when data is massive or rapidly changing.

### 02:12:00 - Self-Healing in Practice

Ryan returns to the self-healing concept, describing a real example of user interactions that lead to partial failures. Instead of blanking the entire interface, only the affected region falls back, while unaffected signals continue seamlessly.

He outlines how a boundary “remembers” its errors until an updated signal invalidates them. The boundary then resets automatically, adopting fresh data without forcing the entire UI to re-run. This drastically reduces user frustration and boosts perceived stability.

### 02:18:00 - Error Boundaries vs. Traditional Try-Catch

Here, Ryan dissects how error boundaries differ from or surpass typical try-catch usage. Traditional blocks trap runtime issues but do not gracefully handle asynchronous data errors at the UI layer. In signals, an error boundary captures thrown promises, feed loops, and more.

He shows that each boundary knows precisely which dependencies triggered the error. This localized knowledge allows the system to re-check and recover only where needed. The talk highlights how this is more powerful than global catch blocks in asynchronous flows.

### 02:24:00 - Granular Scheduling Mechanics

Ryan focuses on the scheduling internals, describing a queue that tracks which effects or memos need updating. He points out the delicate balance between lazy evaluation and immediate scheduling, ensuring consistent states but avoiding unnecessary re-runs.

He emphasizes the importance of only re-checking computations that might have changed, which helps large apps remain responsive. The library’s layered approach to effect queues also ensures that partial failures and concurrent fetches remain isolated from global re-renders.

### 02:30:00 - The Evolution of Solid’s Core

Ryan recounts how Solid has progressed from proving signals could match React’s capabilities to pushing far beyond them. Early efforts focused on composability and dev experience. Now, the shift to advanced concurrency has unlocked new patterns that React’s re-render model struggles to replicate.

He shares personal anecdotes of building, rewriting, and refactoring Solid’s internals over years, showing how the library is now poised to embrace some of the boldest reactivity shifts in the JavaScript ecosystem.

### 02:36:00 - Realigning with Community Feedback

Here, Ryan details the role user feedback played in forging the new design. Bugs discovered by engaged community members forced rethinking of how asynchronous updates are scheduled, revealing corner cases and potential misuses.

He talks about alpha testers spotting issues right away, such as incomplete error propagation. This iterative back-and-forth refined the approach, ensuring real-world usage guided the final shape of the signals system, rather than theoretical designs alone.

### 02:42:00 - Removing the Need for Null Checks

Ryan highlights a pleasant byproduct of non-nullable async signals: eliminating repeated checks for “undefined” or “null” states in code. With “throw on read,” signals always return a resolved value or cleanly suspend, so developers skip the typical if-check clutter.

He underscores how significantly this clarifies logic in a codebase, reducing redundant conditions. The library’s approach simplifies reading data while still ensuring reliable fallback pathways if data remains incomplete or errors occur.