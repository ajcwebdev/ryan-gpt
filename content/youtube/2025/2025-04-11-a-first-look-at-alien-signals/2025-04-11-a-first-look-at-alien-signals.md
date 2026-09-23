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

### 02:20:00 - A Deeper Look at View Vapor and Svelte 5

Shifting focus to a pair of frameworks that combine reactive strategies with compile-time optimizations, the host examines Vue vapor and Svelte 5. Both aim to reduce overhead by narrowing updates and skipping large sections of code. The host says this incremental approach can yield top JS framework benchmark scores, yet might not fully reflect day-to-day coding complexities.

They caution that compiled reactivity, while appealing, often lacks the freeform dynamic nature that purely runtime solutions enjoy. For instance, deeply nested reactive stores might pose challenges unless thoroughly analyzed at compile time. Ultimately, the host praises these frameworks for driving innovation but notes ongoing trade-offs among dynamic features, performance, and developer ergonomics.

### 02:30:00 - “Deep” Watchers Revisited: Performance Implications

Here, the host dedicates time to deep watchers, referencing Vue’s advice to avoid “deep: true” unless absolutely necessary. They share a real test that constructs massive nested objects to see how libraries handle updates. Vue’s naive deep watchers can balloon to seconds of overhead, whereas simpler solutions degrade more gracefully.

The host then explores alternatives, such as splitting watchers across multiple layers or restricting depth. They underscore that even the best systems can struggle if required to track everything. For large-scale data changes, a strategic approach—like swapping entire objects or using specialized sub-signals—keeps overhead in check. These examples demonstrate how “deep” can be both powerful and perilous if misused.

### 02:40:00 - Solid Primitives for Deep Tracking

The conversation highlights specific userland libraries within the Solid ecosystem that attempt to handle deep tracking with minimal overhead. By only registering signals at certain levels or leveraging a shallow approach, these primitives avoid scanning every property. The speaker references “trackStore” and others, showing how they can drastically reduce creation time from seconds to milliseconds for complex objects.

They stress that these are still advanced patterns, not always necessary in typical apps. Nevertheless, such experiments highlight the extent of customization possible when you fully embrace fine-grained reactivity. Listeners learn that controlling how and when data is tracked can lead to major efficiency gains but also demands careful planning and potential constraints on object shape.

### 02:50:00 - Combining Strategies for Optimal Depth Handling

Extending the deep-tracking conversation, the host outlines a hybrid approach: partial traversal at creation time plus on-demand linking whenever new updates occur. This ensures large objects aren’t eagerly converted into thousands of signals but still handle scattered writes gracefully. The host credits contributor Fabio for inspiring part of this solution, showing how collaborative R&D moves the ecosystem forward.

In demonstration, the host times object creation and updates, revealing nearly zero overhead once everything links up. Still, they warn that if you frequently add big, brand-new sub-objects, you’ll incur a higher cost again. Ultimately, the takeaway is that no single method universally solves deep tracking. Yet careful, modular design can yield near-instant updates without scanning entire data trees on every write.

### 03:00:00 - Benchmarks vs. Real App Scenarios

Returning to the question of how these optimizations relate to real-world usage, the host underscores the difference between extreme microbenchmarks and typical day-to-day tasks. They note that while watchers or partial signals can slash overhead in contrived demonstrations, many applications rarely push data structures that large. Smaller real data sets may never exhibit the same dramatic slowdown.

Still, for those with large forms, nested configurations, or concurrency requirements, these refined deep-tracking patterns can be game-changers. The speaker believes that signals-based frameworks must continue fine-tuning to handle advanced use cases so that devs never feel forced back to manual libraries or immutability. Balancing universal usability with specialized performance is a prime design challenge.

### 03:10:00 - This Week in JavaScript: Rapid-Fire News

At this juncture, the stream transitions to a broader segment labeled “This Week in JavaScript,” covering recent happenings in the ecosystem. The host mentions new framework releases, updated libraries, and interesting blog posts. They highlight tailwind-based quickstart templates for Solid, noting how these tools simplify building modern, reactive apps.

They also mention upcoming conferences or documentary projects about major ecosystem players like Vite. This news portion situates the technical deep-dives in a broader context, reminding viewers that innovation is constant in front-end development. Despite the intensity of the earlier hour, the speaker remains enthusiastic, weaving quick commentary on each update.

### 03:20:00 - Vite Documentary and Meta-Framework Shifts

Focusing on the Vite documentary trailer, the host expresses excitement about how Vite simplified bundling and dev experiences. They recall earlier eras of more cumbersome tooling and note how new approaches like esbuild or bundlers in Rust further push boundaries. A mention of how each generation of meta-frameworks has integrated or replaced prior layering reflects a larger theme: performance meets developer convenience.

Alongside that, they share glimpses of upcoming events, such as ViteConf, pondering whether they can attend. The host underscores that many big leaps in front-end tooling came from frameworks deciding to replace or embed entire bundling flows. As watchers now see Vite as standard, new contenders similarly approach or overshadow it, mirroring cyclical change in the ecosystem.

### 03:30:00 - Validity and Low-Overhead Libraries

The stream zooms in on an example: Valibot, a client-side validation library significantly smaller than established alternatives like Zod. The host praises the compact size (around one kilobyte) and sees it as emblematic of a trend toward specialized micro-libraries. This resonates with the discussion of signals, where smaller but more focused solutions can outperform bigger, generalized ones.

They emphasize that shipping 15 kilobytes of validation code was often too heavy for typical forms, leading many devs to keep logic on the server. With ultra-light client libraries, form checking or nested data validation can be done in real time without punishing performance. The host draws parallels to how advanced reactivity systems likewise shrink overhead by targeting precise tasks.

### 03:40:00 - React Server Components and Breaking Points

Addressing the continuing evolution of React, the host highlights dissatisfaction in parts of the community over server components. They reference tweets from recognized contributors voicing frustration with emergent complexities and preludes to concurrency features. While acknowledging React’s massive ecosystem, the host suggests that certain design constraints can box developers in, limiting performance or clarity.

The conversation touches upon alternative approaches like Preact for simpler use cases, or fully reactive frameworks as a fresh start. Despite React’s success, the host believes new voices will keep questioning current patterns and shaping the next wave of UI library design. In their view, frustration and experimentation are catalysts for progress.

### 03:50:00 - The Compiler vs. Runtime Debate

A deeper conversation arises around whether a compiler can replace complex runtime reactivity. Referencing the partial approaches in Svelte or how React’s new compiler might flatten dependency checks, the host sees potential but also real limitations for nested data. Even if a compiler can precompute stable reads, runtime changes remain tricky, especially when data shapes vary across multiple files or modules.

They recall that advanced reactivity sometimes demands dynamic graphs built on the fly. A purely static or single-file approach may fail to connect the dots in real-world architecture. The host concludes that while compile-time optimizations can yield spectacular benchmark gains, certain dynamic use cases may still need robust runtime solutions. The final word is that synergy between compilation and runtime is the next frontier.

### 04:00:00 - Strengthening the Solid Ecosystem

During this phase, the host shifts attention to Solid’s ecosystem growth. They highlight new official or community-maintained libraries, focusing on integration with popular routing and data-fetching solutions. Specific mentions of TanStack collaborations show how developers can now mix React-based tooling and Solid seamlessly, bridging the gap for incremental adoption.

Anecdotes include folks using Solid for advanced interactive apps, praising granular reactivity as more intuitive than forced immutability. While acknowledging that Solid is still comparatively niche, the host credits each new plugin or starter kit for reducing friction. They remain convinced that real adoption hinges on strong tooling, making ecosystem momentum a top priority.

### 04:10:00 - Hybrid Approaches and Module Federation

Here, the conversation touches on advanced integration techniques, such as Module Federation, enabling partial rewrites from React to Solid. The host highlights tools like the TanStack CLI that allow teams to keep their existing React code while gradually migrating performance-critical components to Solid. They see this as a practical approach for large companies wanting to test new frameworks without a risky full rewrite.

While not endorsing indefinite multi-framework codebases, the host recognizes that bridging strategies help break monoliths. They humorously equate this to the promise once attached to Web Components, except with more tangible control over reactivity. Through this angle, watchers see how iterative migrations might sustain Solid’s rising presence.

### 04:20:00 - Convergent APIs and Future Collaboration

The speaker marvels at how partial adoption fosters collaboration, referencing how different frameworks share conceptually similar features such as signals or store-like patterns. They praise cross-pollination, where ideas pioneered in one library migrate to others. Even tension over “cheating” in benchmarks or specialized macros is reframed as healthy competition to refine best practices.

They also note that collaboration goes beyond code, referencing overlapping communities. Authors from Vue, Svelte, and Solid frequently chat, exchange performance tests, or debate API shapes. The host calls this synergy essential for the JavaScript ecosystem’s growth, contrasting it favorably with older eras when frameworks felt more siloed and combative.

### 04:30:00 - SSR, Resumability, and Edge Deployments

The conversation returns to heavier technical territory, referencing streaming server-side rendering (SSR) and the concept of resumability. The host addresses how partial hydration and near-instant handoff can reduce overhead by reviving state on the client without re-computing everything. They describe how advanced signals can keep track of ephemeral UI changes or session data.

Edge deployments come into focus, too, as frameworks adapt to distributed compute. The host imagines a future where entire chunks of the app run on the edge, quickly pre-rendering. Minimizing JS on the client remains a priority, so focusing on performance at scale might push more data operations to the server. The host reaffirms reactivity as a potential key to bridging the server-client boundary seamlessly.

### 04:40:00 - Async Nuances and Transitioning States

The stream digs into complexities of async reactivity. The host notes that while signals elegantly handle synchronous state, transitions and placeholders require separate logic. They revisit how frameworks like React or Svelte handle suspension or fallback states, while more specialized solutions manage it through queueing updates.

Detailed examples include an async request that partially loads data, leaving certain reactive paths “blocked.” The host explains how watchers, ownership, and control flow can interplay. While some frameworks unify these patterns, others treat them distinctly to prevent confusion. This underscores that asynchronous reactivity is still a frontier, where even top libraries find new patterns to experiment with.

### 04:50:00 - Reflecting on Community Questions and Feedback

Near the tail end, the host addresses recurring community concerns. They mention a common user question: “Do we really need signals for every single piece of state?” The host suggests that a balanced approach—mixing signals with occasional simpler forms or static data—often suffices. They also discuss how typed systems like TypeScript can integrate or clash with certain reactivity features.

They share personal anecdotes of prior enterprise-level apps, describing the challenges of scaling large codebases with custom reactive solutions. Some watchers mention frustrations with auto-batching or complicated queueing, leading the host to empathize with calls for simpler mental models. The overarching message is that good design patterns emerge from both theory and hands-on trial.

### 05:00:00 - Summaries, Synthesis, and Key Takeaways

As the discussion draws closer to its conclusion, the host begins wrapping up big themes. They recap how signals differ from standard mutable state, highlighting their unique ability to pinpoint updates at any nested level. They restate that while microbenchmarks are valuable, real applications usually hinge on broad architectural choices rather than minor numeric differences.

In synthesizing the lessons, the host encourages developers to explore advanced techniques like createSelector or partial deep watchers but to remain mindful of real project requirements. The session also underscores that frameworks across the board—React, Vue, Svelte, Solid—pursue a better developer experience. The speaker expresses optimism that ongoing experimentation in reactivity and compiled optimizations will produce even more breakthroughs in the future.

### 05:10:00 - Final Thoughts and Closing (05:12:17 total duration)

In the final moments, the host checks for lingering comments in the chat, thanks viewers for sticking around through over five hours of highly technical content, and briefly reiterates future plans. They mention possibly returning in a week or two for more deep technical explorations or an update on new reactivity breakthroughs. A note of gratitude surfaces for everyone who contributed to the chat and helped shape the conversation.

They close by congratulating the community for pushing these innovations, from alien signals to new SSR paradigms and beyond. Viewers are left with an open invitation to try out different libraries, share findings, and keep collectively moving the front end forward. With a final wave and promise to see everyone again, the host ends the session on a friendly and collaborative note.
