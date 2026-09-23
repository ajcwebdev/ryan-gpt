---
showLink: "https://www.youtube.com/watch?v=ori9xZhvNlc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Designing Async-First Signals"
description: ""
publishDate: "2025-11-22"
coverImage: "https://i.ytimg.com/vi/ori9xZhvNlc/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato explores designing async-first signals for Solid 2.0, analyzing React and Svelte's approaches to transitions, consistency, and deferred disposal.

## Episode Summary

Ryan Carniato shares his recent breakthroughs in designing an async-first reactive system for Solid 2.0. He begins by examining how JavaScript handles asynchronous operations and why frameworks like React invested early in features like Suspense and transitions. After analyzing Svelte's compiler-based async model and React's transition-based approach, he identifies key tradeoffs around consistency, state timing, and the distinction between code "inside" versus "outside" the reactive system. He reveals that async introduces unavoidable inconsistencies in derived values within event handlers, suggesting React's deferred state updates may have been the right call all along. His solution combines Milo's R3 reactive algorithm (using height-ordered execution) with a novel deferred disposal technique that keeps both old and new UI branches alive simultaneously without forking the reactive graph — achieving transition-like behavior with no explicit transition API. He also reviews Joe Savona's React Conf talk on rendering performance, noting that externalizing state into stores proved more impactful than algorithmic improvements alone.

## Chapters

### 00:00:00 - Introduction and Setting the Stage

Ryan opens the stream acknowledging he's been deep in R&D for Solid 2.0 and warns that today's content may be controversial. He explains that he was close to moving Solid 2.0 into alpha but had revelations in recent weeks that caused him to rethink fundamental design decisions. He draws parallels between discovery and invention in framework design, suggesting that different frameworks often converge on similar solutions because the underlying problems have consistent properties.

He reflects on his background in computer engineering and digital circuit logic, explaining how describing systems as a "state of being" rather than procedural instructions resonates with his approach to reactive programming. This philosophical foundation informs his perspective on why retained-mode reactivity and signals appeal to him over immediate-mode approaches like React's virtual DOM.

### 00:17:54 - JavaScript's Async Model and Early Framework Approaches

Ryan discusses JavaScript's unique single-threaded concurrency model built around an event loop and scheduler rather than multi-threading. He notes that this model, while simple, handles IO-bound workloads effectively — which is why Node.js succeeded on the server. He credits React as one of the earliest frameworks to seriously invest in async primitives like Suspense and transitions around 2017-2018, recognizing that React's forward-thinking approach to async has driven many of the innovations the ecosystem now benefits from.

He demonstrates Suspense's power as an inversion of control mechanism, where the application developer decides where loading boundaries appear rather than individual components managing their own loading states. He shows how nested Suspense boundaries allow progressive rendering, and explains how Suspense also provides natural streaming boundaries for server-side rendering — drawing parallels to Marco's async fragments from 2014.

### 00:36:57 - Transitions, Holding State, and the Four Async Modes

Ryan introduces the four fundamental async UI modes: show placeholder (Suspense), hold in the past (transitions), show the future (optimistic updates), and tearing (the default). He demonstrates transitions using his tab-switching example, showing how they keep the current page live and updating while loading the next page off-screen. He explains why holding behavior is crucial for perceived performance and user trust, drawing on his experience building React Native apps where content-to-content transitions felt smoother than placeholder-based approaches.

He discusses the difficulty of implementing transitions correctly, noting that even experienced developers frequently make mistakes with the API. This observation, combined with Svelte's approach of making async holding behavior automatic, begins to shift his thinking about whether transitions should be explicit or implicit in framework design.

### 00:51:28 - Svelte's Async Model and the Path to Async-First Design

Ryan examines Svelte's compiler-based async approach, where derived values automatically hold until all async computations resolve without requiring explicit transition wrappers. He recreates Svelte's demo in Solid to illustrate the tearing problem that occurs without such mechanisms. While initially dismissive of Svelte's approach due to its compiler dependency, conversations with Ricky Hanleon and analysis of React's action-based patterns convince him that if actions and transitions are the future, the framework should handle this behavior by default rather than requiring developers to opt in.

He explores the composition challenges through Ryan Florence's cascading select demo, showing how Svelte's simpler API allows developers to write straightforward derived state chains. He recognizes that React's approach of building transitions into event handlers via actions creates a world where developers are already in a transition context, making explicit transition wrappers unnecessary overhead.

### 01:09:18 - Consistency, Derived Values, and the Case for Deferred Updates

Ryan presents his consistency research across frameworks, showing how React (0,0,0), Vue (1,2,0), Svelte (1,0,0), and Solid (1,2,2) all produce different results when reading state immediately after setting it. He explains that while signals frameworks converged on Vue's model of updating source signals eagerly but deferring DOM updates, introducing async breaks this guarantee — derived values may return stale data when their upstream dependencies involve async computation, potentially causing crashes in event handlers.

This leads to his controversial conclusion that React's approach of keeping set-state values in the past until flush may have been correct all along. He demonstrates with concrete examples how async-derived values can create dangerous inconsistencies outside the reactive graph, arguing that the only safe default is to defer all value commits. He frames this as a distinction between "inside the system" (where the reactive graph guarantees consistency) and "outside the system" (event handlers and imperative code) where different rules must apply.

### 01:45:28 - The Is-Pending API and Unified Async Affordances

Ryan introduces his unified `isPending` API concept, which allows developers to query whether any expression in the reactive graph has uncommitted changes — regardless of whether the pending state comes from async data fetching or from being held in a transition. He demonstrates how this eliminates the need for separate pending indicators for transitions versus data loading, since both cases represent the same fundamental question: "is this value up to date?" He contrasts this with Svelte's global `effect.pending`, arguing that per-expression pending queries are essential for component composition.

He explains how this API design means Suspense only handles initial loading states, while subsequent updates use `isPending` for affordances like disabled buttons or loading spinners. This separation makes the mental model clearer: Suspense defines layout boundaries for initial loads, while `isPending` handles all update-time loading indicators throughout the application.

### 02:25:29 - R3's Height-Ordered Reactivity and Why It Fits

Ryan explains Milo Kemp's R3 reactive algorithm, which uses topological height ordering to achieve O(1) propagation guarantees. Instead of the traditional push-pull-push coloring algorithm, R3 assigns each reactive node a height based on its dependency depth and queues updates in height order, ensuring nodes execute after their dependencies without multiple graph traversals. He explains how R3 falls back to push-pull marking only when dynamic dependencies create out-of-order situations, making it no worse than existing algorithms in edge cases while being faster in common cases.

He reveals why R3 becomes particularly attractive in an async-first world: because state changes are deferred rather than applied immediately, there's no need for the eager notification that forced his previous transition implementations to fork the reactive graph. This eliminates the expensive cloning operation that made transitions impractical as a default behavior, as demonstrated by React's transition performance penalty in the JS Framework Benchmark.

### 02:43:01 - Deferred Disposal: The Key Innovation

Ryan presents his breakthrough insight: instead of forking the reactive graph for transitions, simply defer the disposal of pure computations (memos) until after determining whether async is involved. Since memos are pure and side-effect-free, keeping both the old and new branches alive temporarily costs almost nothing — the old branch continues receiving updates while the new branch resolves its async dependencies. Only render effects (which produce DOM side effects) need special handling, reading committed values to maintain visual consistency while the system settles.

He explains how this approach combines the simplicity of Solid 1.0's transition model with systematic guarantees that eliminate the bugs present in earlier implementations. The resulting code is roughly half the size of his previous implementation (900 lines versus 2100), and benchmarks show minimal overhead over raw R3 performance. He emphasizes that this isn't forking — it's simply changing the timing of when disposal occurs, which makes transition-like behavior essentially free.

### 03:58:01 - Live Demos of the Async-First System

Ryan demonstrates his working prototypes, starting with the async holding example that replicates Svelte's behavior but with React-style entanglement guarantees. He shows how clicking multiple times stabilizes to only the final result, how `isPending` provides loading indicators without any transition wrapper, and how parallel async operations remain independent when their reactive graphs don't overlap. He then demonstrates the cascading select demo, showing how uncontrolled inputs naturally tear (updating immediately) while derived async state holds consistently — all without explicit transitions.

He walks through the code structure, emphasizing that the compiled output contains no special async handling — it's purely the reactive system's natural behavior. The split between pure computation phases and render effect phases, combined with deferred disposal, produces the desired behavior without compiler analysis, framework-specific blocks, or explicit transition APIs.

### 04:53:06 - Reviewing Joe Savona's React Rendering Performance Talk

Ryan watches and comments on Joe Savona's React Conf talk about incremental computation and rendering performance. He notes that React's experiment used a single state variable in context — essentially a stress test for their diffing capability — and that the React compiler's memoization improvements represent the best-case scenario for that approach. He's particularly intrigued by React's "Fir" prototype, speculating it may use static dependency graphs similar to R3's height-ordered approach.

The most significant finding, in Ryan's view, is that simply externalizing state into a store dramatically outperformed all rendering algorithm improvements — confirming that fine-grained reactive frameworks like Solid already solve this problem by default. He argues that React's path forward essentially involves making their internal architecture more signal-like while maintaining their existing component API, representing a fundamental shift in React's identity even if the external interface remains unchanged.

### 05:49:32 - This Week in JavaScript and Community Updates

Ryan covers recent community developments, celebrating Solid reaching one million weekly npm downloads — a milestone achieved during a year without major releases. He discusses the TanStack Start hackathon supporting Solid, new tooling integrations like React Grab being built with Solid, and the growing adoption of Solid in React ecosystem tooling. He compares download trends across frameworks, noting Preact's surprising position as the second most downloaded framework and the dramatic gap between React and everyone else.

He touches on several community discussions including the htmx team reversing their "no more versions" stance, Svelte's adoption of server functions (which Solid pioneered), and the political dynamics around framework funding. He closes by noting his plans to implement full JSX compilation for the new async-first system, expressing confidence that the direction — while requiring controversial tradeoffs like deferred state updates — will produce a significantly cleaner and more powerful developer experience.