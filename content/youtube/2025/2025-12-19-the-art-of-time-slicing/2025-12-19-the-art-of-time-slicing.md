---
showLink: "https://www.youtube.com/watch?v=YNdrWgWuUOc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Art of Time Slicing"
description: ""
publishDate: "2025-12-19"
coverImage: "https://i.ytimg.com/vi/YNdrWgWuUOc/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato explores time slicing mechanics, JavaScript event loop scheduling, and demonstrates why async graph primitives in Solid 2.0 may eliminate the need for traditional time slicing.

## Episode Summary

In this extensive stream, Ryan Carniato breaks down the JavaScript event loop — covering macro tasks, micro tasks, request animation frame, request idle callback, scheduler.yield, and scheduler.postTask — to build a foundation for understanding time slicing in UI frameworks. He then examines two classic concurrent rendering demos: the "radar" row-update benchmark and the Sierpinski triangle, demonstrating through timeline diagrams why both fail to showcase meaningful time slicing benefits. The core insight is that DOM updates (the "brown bar") dominate execution time in most scenarios, making framework-level interruption of computation (the "blue bar") largely irrelevant. Ryan then presents an alternative approach using Solid 2.0's `createAsync` primitive, which allows developers to explicitly mark expensive computations as async, achieving consistent non-tearing UI updates without time slicing overhead. The stream also covers Solid ecosystem news, the React server component security vulnerability, Ryan Florence's performance benchmarking observations, and a philosophical discussion about crash-early versus graceful-degradation engineering approaches.

## Chapters

### 00:00:00 - Introduction and Stream Setup

Ryan welcomes viewers and sets the stage for exploring the CPU side of transitions and time slicing, topics he's been circling around in previous streams about async signals and implicit versus explicit transitions. He notes this is his last stream of the year and encourages viewers to like and subscribe early.

The discussion frames the key distinction between transitions as a general envelope for handling async work transactionally, versus time slicing as specifically preemptive scheduling. Ryan emphasizes that you can have concurrent behavior without interruption — simply by deferring and scheduling work appropriately — and that time slicing adds the ability to interrupt in-progress work when higher-priority input arrives.

### 00:06:06 - The JavaScript Event Loop Deep Dive

Ryan walks through the evolution of the JavaScript event loop, starting with the basic first-in-first-out task queue and how browser tasks like painting interleave with developer-scheduled tasks. He covers `setTimeout`, `requestAnimationFrame` (which sneaks work in before the next paint), and the trick of combining both to schedule work after a paint cycle.

He then explains `setImmediate` (Node's non-standard attempt at high-priority task insertion), the micro task queue and its critical property of fully draining before any macro task runs, and how frameworks leverage micro tasks for batching state updates. The discussion covers why promises were designed to always resolve asynchronously, the mutation observer polyfill trick for IE11, and how async functions implicitly create micro task delays even without explicit awaits.

### 00:48:44 - Request Idle Callback, Scheduler.yield, and PostTask

Ryan covers the newer scheduling primitives: `requestIdleCallback` for lowest-priority background work that only runs when the browser is free, and how React's old scheduler polyfilled this using `requestAnimationFrame` with deadline-based work chunking. He then explains `scheduler.yield`, which allows a running task to pause mid-execution, flush the micro task queue, yield to higher-priority browser tasks, and then resume.

The section also explores `scheduler.postTask` with its three priority levels (user-blocking, user-visible, background), giving developers explicit control over macro task priority for the first time. Ryan connects these primitives back to framework scheduling, noting how they provide the building blocks that make time slicing technically possible in the browser environment.

### 01:06:38 - The Radar Demo: Why This Benchmark Is Useless

Ryan examines the classic row-update benchmark comparing React's concurrent rendering against synchronous frameworks like Solid. Through detailed timeline diagrams in Excalidraw, he breaks down each update into four phases: click event, event handler/setState, framework computation (blue), and DOM update (brown). He shows that in naive implementations, multiple rapid clicks stack up wastefully.

The critical insight emerges through the diagrams: time slicing can only interrupt the framework computation phase, but in this demo, the DOM update phase dominates total execution time. As row count increases to make the demo visually interesting, the DOM work grows disproportionately, making framework-level interruption nearly irrelevant. Ryan concludes this demo shows nothing meaningful about time slicing — at best it demonstrates the subjective difference between blocking-but-fast versus non-blocking-but-laggy update patterns.

### 01:55:04 - The Sierpinski Triangle: A Better But Now Broken Demo

Ryan turns to the Sierpinski triangle demo, which was historically the strongest showcase for time slicing. He explains its clever design: CSS-driven animations for smooth movement, memoized components that skip re-rendering for animation updates, but expensive synchronous computation cascading through the component tree when the counter updates each second. This makes the framework computation phase genuinely large relative to DOM updates.

However, he reveals that React's current scheduling no longer deprioritizes transitions below normal updates, making the demo significantly less impressive than the original React Fiber version. Through a conversation with React team member Ricky Hanlon, Ryan confirms that the team has shifted away from using time slicing for CPU prioritization, focusing instead on async coordination. Neither the radar demo nor the triangle demo now effectively demonstrates time slicing benefits.

### 02:59:47 - Solving It Without Time Slicing: The Async Graph Approach

Ryan demonstrates an alternative solution using Solid 2.0's `createAsync` primitive. Instead of relying on the framework to automatically interrupt synchronous work, developers explicitly mark expensive computations as async. He first shows the naive `createEffect` + `setTimeout` approach, which causes visible tearing as nodes update independently, then reveals how `createAsync` solves this by making the reactive graph aware of pending async operations.

Because Solid 2.0 uses implicit transitions, all async values automatically hold their previous committed state until the entire dependency graph settles, producing consistent non-tearing updates with zero special syntax. Ryan argues this reverses the mechanism — instead of the framework magically splitting synchronous work, developers identify expensive work and the graph handles coordination automatically, with essentially no performance overhead compared to synchronous Solid.

### 03:29:34 - Solid 2.0 Async Primitives in JSX: The Full Vision

Ryan showcases several demos of Solid 2.0's async system rendered in JSX, including a multiply demo with five independent async computations settling together, and Ryan Florence's cascading dropdown demo with dependent async data fetches. He highlights three key primitives: `Loading` for initial load states, `isPending` for update-in-progress indicators, and `pending()` for reading optimistic/latest values.

The design philosophy is "uncolored async" — signals that happen to resolve asynchronously look identical to synchronous signals from the consuming component's perspective, with no null checks needed since types remain non-nullable. Ryan connects this to broader patterns around derived state, automatic parallel fetching of nested async components, and how this approach makes generic reusable components with reasonable loading/pending behavior trivially composable.

### 04:20:17 - This Week in JavaScript: Solid Ecosystem and Industry News

Ryan covers Solid's growth trajectory from 250K to over 1.2 million weekly npm downloads, enterprise adoption at companies like Bloomberg, Comcast/Xfinity for TV apps, Bell Canada's new TV platform built on Lightning JS and Solid, and Cursor IDE's desktop app using Solid. He discusses the Bun/Anthropic acquisition, the relationship between Solid Start and TanStack Start, and how research funded through Solid ripples out to benefit the broader ecosystem.

A significant portion covers the React server component security vulnerabilities allowing remote code execution, and Ryan shares that the Solid team proactively audited their own server function implementation, determining the same attack vector doesn't apply due to architectural differences in how they serialize data between client and server. He reflects on the broader challenges of responsible disclosure in open source.

### 05:19:44 - Ryan Florence's Performance Arc and Framework Philosophy

Ryan analyzes Ryan Florence's recent thread tracing React's performance problems back to Redux's context blocking and the resulting memoization arms race. While Florence advocates for manual update control using event targets and direct DOM manipulation, Carniato argues this approach addresses symptoms rather than root causes — developers will eventually over-call manual updates just as they over-triggered re-renders.

The discussion connects to Aaron Boodman's observation about software engineering preferring crash-early behavior versus ops preferring graceful degradation, which Ryan maps onto the Solid-versus-React philosophical divide. He closes with a look at the Replay.io time-travel debugger that helped him fix a subtle timing bug in Solid 2.0's transition system, demonstrating the tool's ability to step forward and backward through recorded browser execution.