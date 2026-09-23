---
showLink: "https://www.youtube.com/watch?v=eZAcJc_eR1M"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Designing Concurrent Transitions"
description: ""
publishDate: "2025-08-26"
coverImage: "https://i.ytimg.com/vi/eZAcJc_eR1M/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato explores the design challenges of concurrent transitions in reactive frameworks, comparing React, Solid, and Svelte approaches to async state management.

## Episode Summary

Ryan Carniato walks through the fundamental problem of handling asynchronous state in UI frameworks, identifying four core strategies: tearing (showing inconsistent state), bailing out (showing fallbacks via Suspense), holding in the past (transitions), and predicting the future (optimistic updates). He builds simple examples demonstrating each approach's trade-offs, then dives deep into how transitions work mechanically — forking reactive graph nodes, cloning signals, and merging state back when async resolves. He compares React's component-tree-based approach with Solid's signal-graph-based approach, arguing that fine-grained reactivity enables isolated parallel transitions without full entanglement. A significant portion covers why actions complicate transitions due to unpredictable server-side effects, and why React's decision to entangle all transition pending states is actually logical for correctness. He previews Solid 2.0's transition implementation, demonstrates independent transitions running in parallel, and discusses optimistic update APIs inspired by React's useOptimistic. The stream also covers Solid ecosystem growth, Svelte's async model comparison, web component attribute/property tensions, and broader industry topics.

## Chapters

### 00:00:00 - Stream Introduction and Motivation

Ryan opens the stream explaining this is an impromptu session driven by weeks of design work documented across eight HackMD documents. He notes he hasn't streamed in three weeks due to deep focus on concurrency and transition design for Solid 2.0, and wants to talk through the concepts to regain clarity after extended solo work.

He mentions that Solid first shipped transitions in version 0.15.0 back in December 2019, inspired by React's concurrent mode experiments. The core mechanism hasn't been substantially updated since around version 1.1-1.2, making this redesign for 2.0 a significant undertaking built on years of accumulated understanding.

### 00:04:15 - What Are Transitions and Why Do They Exist

Ryan establishes foundational vocabulary by explaining the three primary ways frameworks handle async state: tearing (updated sync state with stale async state), bailing out (showing fallbacks like Suspense), and holding in the past (keeping old UI until new data is ready). He demonstrates each with live examples, showing how tearing provides immediate feedback but inconsistent UI, while Suspense provides consistency but can be jarring when data already exists.

He explains a fourth option — predicting the future via optimistic updates — and notes it shares characteristics with bailing out but avoids the jarring experience. Through interactive demos, he shows why holding in the past lacks immediate feedback, requiring explicit pending indicators, and why users perceive transition-based loading as faster even when total load time is longer due to psychological thresholds around 200-400 milliseconds.

### 00:20:15 - The Mechanics of Holding State in the Past

Ryan demonstrates the fundamental challenge of implementing "hold in the past" behavior by manually forking state in a simple Solid example. He creates separate signals for the current ID and next ID, showing how you must prevent synchronous state updates from leaking into the UI while async operations resolve. This manual forking approach works but doesn't scale because every derived piece of state in the chain must also be forked.

He explains why transitions are inherently global rather than local — they originate from where state is written, not where it's read, making component-level holding insufficient. The discussion covers why frameworks need dedicated async primitives to handle race conditions, and why naive data fetching with create effect creates multiple failure modes including incorrect loading counters and out-of-order responses.

### 00:35:40 - Designing Transitions for Signal-Based Systems

Ryan outlines the algorithmic approach to implementing transitions in a signal-based reactive system. The process involves creating a transition on the next microtask, cloning notified signals and their downstream dependencies, running the pure computation queue separately from side effects, collecting unresolved async nodes, and eventually merging cloned state back to the main graph when all promises resolve.

He contrasts this with React's approach of re-rendering component subtrees off-screen, emphasizing that Solid's signal graph allows following data dependencies rather than the UI tree. This decoupling means components don't need to re-render for transitions to work. He discusses the critical detail that cloned nodes must not include children or cleanup functions to avoid prematurely disposing the currently visible UI.

### 00:50:00 - Single Future, Entanglement, and Multiple Transitions

Ryan explains the concept of "single future" transitions where overlapping transitions become entangled rather than maintaining independent parallel state. He argues against treating transitions as true transactions, noting that rollback is impractical when multiple async operations become intertwined — if the first succeeds and the second fails, you can't cleanly undo just one.

He discusses why signal-based systems have an advantage here: the reactive dependency graph reveals exactly which state changes overlap, allowing isolated transitions to run independently while entangling only when they share graph nodes. This is fundamentally different from React's component-based approach where co-location in the UI tree determines entanglement scope regardless of actual data dependencies.

### 01:00:00 - API Design Challenges and TypeScript Friction

Ryan walks through his HackMD design documents covering the transition API shape, including how to handle async functions within transitions using a resume mechanism. He explores the possibility of using generators instead of callbacks for better control flow, referencing MobX's long-running unsolved TypeScript typing problem with their flow API.

The discussion reveals deep tension between ideal API design and TypeScript constraints, particularly around typing generator yields that return promise values. Ryan notes that browser async context (AsyncLocalStorage equivalent) could eventually eliminate the need for resume functions, but current solutions require explicit context passing after await boundaries.

### 01:14:00 - View Transitions, Optimistic Updates, and React's useOptimistic

Ryan explores integrating the browser's View Transition API with framework transitions, explaining why the async nature of start view transition creates awkward timing conflicts with synchronous framework rendering. He then pivots to discussing optimistic state management, inspired by React's useOptimistic, proposing a Solid equivalent built on mutable projections.

The key insight is that optimistic state and transition pending indicators can share the same mechanism — ephemeral state that automatically reverts when transitions complete. He describes how Solid's projection technology enables fine-grained optimistic updates without cloning entire data structures, making patterns like the Trello drag-and-drop demo significantly simpler and more performant than equivalent React implementations.

### 01:27:00 - Why Actions Make Transitions Fundamentally Harder

Ryan draws timeline diagrams showing the full lifecycle of mutations: client initiation, server execution, data refetching, and UI update. He demonstrates how timing mismatches between overlapping actions can cause optimistic updates to briefly duplicate or flash incorrectly when transitions don't properly entangle the post and get phases of the cycle.

He defends React's decision to entangle all transition pending states as logically necessary for correctness with optimistic updates, while noting that without optimistic updates the inconsistencies are generally acceptable to users. His proposed solution for Solid leverages the reactive dependency graph to detect entanglement through shared optimistic state, potentially allowing independent actions to resolve separately when they don't share data dependencies.

### 02:36:00 - Live Demo of Solid 2.0 Transitions Implementation

Ryan showcases a working prototype of Solid 2.0's transition system using raw DOM manipulation without JSX compilation. The demo features two independent components each with incrementing IDs, async data fetching, optimistic pending states, and a global counter. He demonstrates that clicking one component's button multiple times correctly entangles those transitions while the other component remains completely independent.

He walks through the implementation code, explaining how graph cloning works, how transitions detect entanglement through shared reactive nodes, and how the merge process disposes original nodes while preserving new values. He also shows the difference between create effect (which holds consistently without tearing) and create render effect (which participates in transition node collection for UI rendering).

### 03:13:00 - Comparing Svelte's Async Model with Solid's Approach

Ryan examines Svelte's async handling by testing their REPL with a counter alongside async data. He confirms that Svelte successfully keeps unrelated state updating during async operations, similar to transitions but implemented through a more localized mechanism. He analyzes the compiled output, noting that Svelte appears to use both compile-time graph analysis and some runtime behavior to determine which state to hold.

The key difference he identifies is that Svelte's approach is more localized — it holds state within component boundaries and injects pending state locally rather than supporting the global scope that transitions require. While this works well for most cases, it cannot support patterns where a counter and async data share the same effect scope while behaving differently.

### 03:31:00 - Solid Ecosystem Growth and Framework Stability

Ryan shares that Solid's npm downloads have more than doubled in the past six months despite no major releases, attributing the growth largely to TanStack's adoption of Solid as a first-class citizen alongside React. He highlights that TanStack DB, devtools, and other libraries ship Solid support within a week of React releases.

He makes an extended case for Solid's remarkable stability, noting that the core technology hasn't fundamentally changed since 2018 while every other major framework has undergone two to three significant architectural shifts. He argues this stability came from focusing on mechanics and performance first rather than developer ergonomics, and from studying solutions that could be created rather than just those that existed.

### 03:47:00 - This Week in JavaScript: Industry News and AI Discussion

Ryan covers several industry topics including Ryan Florence and Michael Jackson's work on Remix, where they claim AI is writing almost all of their framework code. He discusses a study shared by Rich Harris showing experienced open-source developers were actually 19% slower with AI tools despite perceiving themselves as 20% faster, and reflects on the tension between AI-optimized framework design and quality of output.

He also covers Dominic Gannaway's departure from Vercel and the Svelte team, Angular's work on deep signals using a path-based approach, and the broader question of whether frameworks should optimize for AI code generation. Ryan expresses skepticism about AI's utility for the kind of deeply interconnected, thought-intensive work that framework development requires.

### 04:59:00 - Web Component Tensions and DOM State Management

Ryan discusses a recently fixed Chrome performance bug where import node was significantly slower than clone node, requiring frameworks to add detection logic for custom elements. He explains the broader tension between frameworks and web platform purists regarding whether the DOM should be the source of truth for state, using form input value binding as a concrete example.

He demonstrates three approaches to a simple counter with reset: pure framework state, pure DOM state, and a hybrid approach. The hybrid reveals how the split between value attributes (default values) and value properties (current values) creates surprising behavior that most frameworks paper over with special-casing. He discusses Solid 2.0's plan to default to attributes everywhere while supporting explicit property access, and questions whether the 38% of developers who want no special-casing truly understand the implications for everyday input handling.