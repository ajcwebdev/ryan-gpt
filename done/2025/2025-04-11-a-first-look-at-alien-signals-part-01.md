---
showLink: "https://www.youtube.com/watch?v=FSxvwln27_U"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Alien Signals"
description: ""
publishDate: "2025-04-11"
coverImage: "https://i.ytimg.com/vi/FSxvwln27_U/maxresdefault.jpg"
---

## Episode Description

A thorough exploration of signals, reactivity, and performance techniques over five hours of live discussion.

## Episode Summary

In this five-hour, in-depth session, the speaker covers fundamental and advanced approaches to reactive programming with signals, drawing comparisons with libraries like Knockout, S.js, and modern frameworks. They examine the core mechanics of push-pull reactivity, ownership graphs, linked lists, and slotting approaches. Throughout, the speaker references benchmarks, implementation trade-offs, and potential pitfalls of different data structures. They address complex concepts like deep watchers, split effects, and mutable vs. immutable rendering, offering real-world examples and highlighting how to efficiently handle large nested data. Interspersed are anecdotes on community projects, frameworks such as Vue, Preact, and Solid, and the future potential of reactive systems in areas like 3D rendering or async data. By the end, the stream paints a comprehensive picture of evolving patterns in JavaScript reactivity, with thoughtful commentary on both low-level algorithmic choices and high-level architectural decisions.

## Chapters

### 00:00:00 - Intro and Stream Setup

In this opening segment, the host greets viewers and explains that the stream started slightly earlier than usual. They mention real-life changes such as having a new baby and juggling family commitments. Technical hiccups arise right away, with a monitor briefly failing to connect, but the host quickly resolves the issue and sets the stage for what will be a long, detailed session. Viewers in the chat drop by to say hello, and the host notes many familiar faces returning after a brief streaming hiatus.

Throughout these first minutes, the host outlines the main topic: a thorough look at signals, reactivity, and upcoming innovations like “alien signals.” They emphasize their passion for performance benchmarks and mention a few related frameworks and libraries that will be referenced later. By laying out the background and disclaiming any organizational chaos up front, the host invites everyone to settle in for a relaxed yet highly technical exploration that promises to cover multiple layers of the reactive programming landscape.

### 00:10:00 - Background on Signals and Observer Pattern

Around this point, the host segues into the fundamentals of reactive programming with signals. They reference the observer pattern from the “Gang of Four” design patterns, explaining how observables and observers form the backbone of most signal-based systems. A key part of the conversation concerns the history and challenges of disposing subscriptions to avoid memory leaks.

In the process, the host talks about different strategies for managing references, such as linking dependencies from both sides—signals keeping track of effects, and effects keeping track of signals. They note how these core ideas date back to early libraries like Knockout, highlighting how modern frameworks have built upon (and sometimes reinvented) these principles. This grounding clarifies the shared roots that shape current implementations of signals across various systems.

### 00:20:00 - S.js, Arrays vs. Sets, and Linked Lists

Transitioning into more concrete discussions, the host recalls the emergence of S.js as an early innovator in performance improvements. By swapping naive array lookups with smarter approaches—such as slotting or linked lists—these libraries achieved considerable speed gains when propagating changes through large dependency graphs. The speaker underscores that baseline arrays and sets often carry hidden costs, prompting deeper investigation into underlying data structures.

They elaborate on concepts like versioning, coloring, and push-pull propagation, explaining each technique’s role in ensuring accurate updates without overcomputing. The conversation highlights that what might look like a simple signal subscription often hides complex decisions on how best to handle dynamic dependencies. By reviewing these historical shifts, the host sets the stage for how emerging libraries (and “alien signals”) refine or replace these older mechanisms.

### 00:30:00 - Introduction to Alien Signals and Initial Impressions

Here, the host delves into the specific library known as Alien Signals, praising its concise code and data-structure-driven approach. They note how Alien Signals employs a pure linked-list mechanism for both ownership (scope) and dependency tracking, leading to highly optimized propagation. This design apparently outperforms many existing implementations in microbenchmarks.

However, the host emphasizes that while top-level speed is exciting, real-world performance may depend more on rendering and application structure. They compare Alien Signals’ approach to well-known libraries like Reactively and Preact Signals, illustrating how each handles subscription lists and effect scopes. The host remarks that Alien Signals’ clarity and minimalism stand out, potentially paving the way for simpler cross-language implementations of reactivity.

### 00:40:00 - Ownership Graphs, Scope, and Cleanup Mechanisms

In this segment, the conversation shifts toward ownership graphs, which arrange signals and effects in a hierarchical structure. The host references how older libraries like S.js originally pioneered scope-based approaches, while more recent solutions now universally adopt them. This leads to a discussion on how Alien Signals and similar libraries track cleanup, ensuring that effects remove themselves when no longer needed.

Addressing practical concerns, the host points out that while ownership is powerful, it can be confusing to newcomers. The audience is reminded that effect scope is typically hidden from the average developer behind simpler APIs like “createRoot” or “effectScope.” Nevertheless, the details matter for advanced use cases, where manual control can significantly improve performance or memory usage. The host highlights that consistent ownership support is now seen as essential in any new reactivity library.

### 00:50:00 - Walking Through Alien Signals’ Source Code

Shifting gears, the host shares their screen to examine core files from the Alien Signals repository. They pick through functions handling node linkage, flag checks, and how subscriptions propagate updates. The commentary points out repeated patterns seen across different libraries—like arrays or sets—now replaced with a purely linked-list arrangement. The speaker notes that although these internals may appear dense, they converge on a minimal, elegant design.

Throughout this walk-through, the host echoes that most code is data-structure manipulation: pushing, appending, or removing nodes while toggling flags for recursion or versioning. They note how small but crucial optimizations add up—removing arrays, sets, or repeated lookups yields big gains. Though not trivial to read, the code’s relative brevity hints that a wide range of developers could adopt or port Alien Signals to other languages.

### 01:00:00 - Benchmark Insights and Reactivity Marketing

At this juncture, the speaker revisits their famous stance on benchmarks, explaining how they initially rely on raw numbers to gauge feasibility. They outline the “reactivity bench” tradition, referencing older tests from libraries like MobX and Knockout. Observing that many modern solutions are extremely fast, the host warns that benchmark gains often remain invisible in typical app rendering.

Simultaneously, they affirm that microbenchmark results still matter to library authors pushing theoretical limits. From the host’s perspective, performance claims double as marketing, catching community attention. The conversation points out the well-known JS framework benchmark and other specialized tests—each with pitfalls and biases. Ultimately, the host encourages watchers to focus on bigger patterns and trade-offs, rather than raw speed alone.

### 01:10:00 - “Cellx” Stress Tests and Practical Relevance

Pivoting to a specific suite of stress tests called “Cellx,” the host critiques its extremes. They illustrate that chaining a thousand computed signals can produce unrealistic scenarios, hardly seen in real apps. Yet such scenarios do pinpoint differences in library approaches. The host describes how libraries like Preact Signals or Reactively handle them, sometimes hitting call-stack limits or recursion issues.

They acknowledge that while these large tests may be artificial, they do highlight memory or scheduling overhead. The real puzzle is balancing artificially large benchmarks with everyday tasks—creating or removing rows, partially updating data, or toggling a single boolean in deeply nested objects. The host underscores that no perfect test exists, urging a careful interpretation of results and healthy skepticism about absolute claims.

### 01:20:00 - The JS Framework Benchmark: Reality Check

Here, the host moves on to the well-known JS framework benchmark that tests row creation, selection, swapping, and deletion in large tables. They comment on how frameworks near the top have essentially plateaued in speed, with microseconds of difference. Mentioning Svelte, Vue vapor, and Solid, the host shows that small variations can reorder standings, generating “winner claims” that might not hold across different machines.

The host explains that these benchmarks mostly measure DOM operations, overshadowing micro-optimizations in reactivity. While frameworks can skip or speed certain steps, the final results often rest on the browser’s own overhead. They stress that the benefit of advanced signals sometimes emerges only at scale or in unusual data patterns. For typical tasks, most top-tier frameworks deliver comparable performance.

### 01:30:00 - The “Cheating” Debate and Create Selector

The speaker next recounts how some frameworks optimize the “select row” test by introducing specialized primitives akin to Solid’s `createSelector`. This allows updating only the row actually selected, skipping a full list diff. They highlight a past complaint that Solid is “cheating,” yet argue that these specialized tools solve real-world selection scenarios where toggling a single item is common.

They advise that adding a single boolean to every item in a large list is a recognized pattern. By letting signals detect precisely which items changed, one can bypass re-rendering a thousand rows. The host clarifies that “cheating” is a harsh term—some solutions simply fine-tune the reactivity system for known interactions like selection states. In practice, it can meaningfully boost performance for UI patterns typical of large data grids.

### 01:40:00 - Reflecting on Historical Knockout Oversight

Turning philosophical, the host muses on how Knockout’s signal-based approach existed over a decade ago but fell out of favor during React’s ascension. They recall how, between 2014 and 2021, hardly anyone referenced Knockout, though it had many forward-thinking ideas. Now, with current frameworks rediscovering signals, Knockout is cited as a precursor well ahead of its time.

This historical reflection underscores how trends can overshadow proven technology. The host points out that certain design elements, like automatic subscriptions and unwrapping proxies, faced condemnation before reemerging in popular forms. They urge watchers to appreciate that fundamental patterns often cycle back, even as the ecosystem moves on to new syntax or tooling.

### 01:50:00 - The Promise and Limitations of Signals Proposals

In this section, the host touches on the ongoing push to standardize signals in TC39. They explain that the proposal started with big hopes around debugging capabilities, performance boosts, and cross-framework synergy. However, frameworks differ on scheduling, ownership, and advanced features like transitions. The result is slower progress than many expected.

They also note how well-known voices from RxJS or web component communities want user-friendly primitives, while others prefer low-level building blocks. The host sees potential if signals become part of the JavaScript language, especially for powerful dev tools or time-travel debugging. Yet concerns remain about complexity and how to unify scheduling across varied frameworks.

### 02:00:00 - Ownership and Deep Reactivity Challenges

The discussion now shifts to how deep reactivity complicates a signals library. The host highlights that, at first glance, signals might look simple: updating one variable triggers a dependent effect. However, deeper needs—such as tracking nested properties or arrays—demand more robust solutions. They compare naive approaches that do full scans of large objects to advanced techniques with partial updates.

By referencing advanced store designs, the host shows how granular tracking can keep updates targeted, but also create an explosion of signals. They walk through historical attempts to handle big nested data structures, illustrating the memory or performance overhead each solution faces. The lesson is that while signals shine for small or moderate data, heavy nesting requires specialized patterns.

### 02:10:00 - Splitting Effects and React-Style Dependency Arrays

Pivoting to the idea of “split effects,” the host notes that React’s hooks approach forced explicit dependencies via arrays. This can be simpler for new users but leads to pitfalls with missing or excess dependencies. The host references how Vue watchers similarly require specifying dependencies, bridging the gap between naive watch-all effects and more advanced auto-tracking.

They point out that some prefer the convenience of letting reactivity auto-track everything, but that can cause unpredictable performance or frequent re-triggers. Others prefer explicit, typed dependencies to prevent accidental overhead. The host acknowledges that no single approach is universally right, and frameworks keep evolving to combine or refine these approaches for better developer experiences.