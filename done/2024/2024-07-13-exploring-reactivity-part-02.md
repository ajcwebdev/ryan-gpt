---
showLink: "https://www.youtube.com/watch?v=kz-p_017Usc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Reactivity: Fine-Grained Derivation & Incremental Computation"
description: ""
publishDate: "2024-07-13"
coverImage: "https://i.ytimg.com/vi/kz-p_017Usc/sddefault.jpg?v=66916d93"
---

### 02:00:00 - Tearing, Consistency, and Developer Experience

This chapter tackles the perennial question of “tearing,” where partial UI updates can expose inconsistent states to end users. The speaker details scenarios in which an update to one part of a tree might happen while another part still shows older data. They contrast systems that adopt an all-or-nothing approach—holding updates for consistency—against those favoring incremental changes that risk temporarily mismatched state.

The speaker positions transitions and concurrency approaches as powerful ways to mitigate tearing, referencing lessons learned from React’s concurrency features. However, they stress that even with these improvements, developers must remain careful. By enumerating pros and cons, the speaker helps the audience see how advanced reactivity can elegantly solve or inadvertently create user experience problems, depending on one’s pattern choices.

### 02:15:00 - Local Versus Global Data and The “Latest” Debate

Shifting focus, the speaker addresses the nuance of localizing data within components versus placing everything into global or root-level signals. One spark for this debate is the “latest” approach, where a resource always returns the most recent data instead of reverting to a loading state. Although many developers find this simpler, it can conflict with deeper suspense mechanics.

They illustrate how local states may occasionally reintroduce complexities if updates aren’t carefully orchestrated. The chapter examines how real-world tasks—like dynamic forms or controlled inputs—intersect with these decisions. By weighing convenience against potential mismatch scenarios, the speaker shows that architectural choices in reactivity are often about trade-offs, pushing developers to be strategic in how they bind or share data.

### 02:30:00 - Derived State and “Create Computed” Pitfalls

Here, the session zeroes in on derived state, highlighting the classic example of “create computed” in Solid. This function synchronizes one signal’s changes into another, but can feel awkward in a lazy, fine-grained system. The speaker references complicated patterns where one might accidentally trigger multiple updates or lose clarity on the data’s directionality.

By dissecting these pitfalls, the speaker underscores that advanced reactivity often favors a purely declarative style—where outputs stay derived from inputs rather than forcing synchronization. Listeners gain insights into how ephemeral editing states and form-handling code might move back and forth between signals, sometimes leading to surprising behaviors. That said, the speaker remains optimistic that refined primitives can lessen the friction if carefully designed.

### 02:45:00 - Writable Memos and Store Wrappers

Advancing the discussion, the talk explores a new concept tentatively called “create writable,” giving developers a memo-like structure that can still be overridden. This is particularly useful for transient or user-editable data, providing a local override for an otherwise derived value. The speaker asserts that such a primitive could streamline everyday tasks like form editing or data preview before committing final updates to a global store.

To illustrate, they walk through how ephemeral state might merge with main application state. The goal is to avoid unnecessary synchronization complexities while preserving the convenience of direct user inputs. Alongside store wrappers, this concept helps unify the approach to partial data editing and ephemeral local changes, aiming for a clearer mental model when switching between system and user states.

### 03:00:00 - Deep vs. Shallow Reactivity and Performance

In these minutes, conversation turns to the cost of tracking every nested property in a data structure, contrasted with shallow approaches that rebuild large chunks at once. Although fine-grained reactivity can bring big performance wins, it sometimes leads to complicated code to handle deep nesting and resets. The speaker acknowledges that frameworks like Vue or Svelte handle reactivity at varying depths, while Solid uses stores for deeper tracking.

They advise developers to be strategic: pushing reactivity too aggressively into large nested objects can hamper maintainability. Sometimes, a targeted approach—where only specific properties become reactive—may be preferable. Balancing design clarity with performance is the central refrain, cautioning that a purely “react everything” mentality might degrade readability and invite subtle bugs.

### 03:15:00 - Incremental Computation and Diff-Based Signals

Here, the speaker reviews patterns from other libraries—like Signia from TLDraw—that use incremental diffs to update values. They marvel at how these systems generate minimal new objects, applying only targeted changes. Yet they also note that for frameworks already supporting fine-grained updates, the overhead of building and propagating diffs could outweigh benefits.

This leads to a lively exploration of whether truly incremental solutions make sense in a system that already tracks dependencies at a granular level. Real usage may favor direct store mutations over complex layering of patches. Listeners are encouraged to keep an open mind but also consider the complexity cost of bridging multiple diff passes in advanced workflows like data visualizations or multi-user collaboration.

### 03:30:00 - Trello Demo and Real-World Optimistic Updates

Practical demonstrations re-emerge through the lens of a Trello-like application featuring drag-and-drop columns. The speaker explains how optimistic UI updates can become tricky when reordering items and merging them with server-supplied data. In frameworks lacking a solid reactivity model, developers often replicate entire lists, re-diffing and re-rendering excessively.

By contrast, a more nuanced approach can detect minimal changes, avoiding a cascade of re-renders. However, the speaker concedes that orchestrating incremental merges, local overrides, and synchronous resets remains non-trivial. Through Trello’s example, the audience sees how these advanced reactive patterns move beyond simple counters or to-do lists, addressing real software design complexities like partial concurrency and user-driven reordering.

### 03:45:00 - Local Diffing vs. Broadcast Diffing

Continuing with the Trello analogy, the speaker distinguishes local diffing—where updates are merged in a single step—from broadcast diffing, in which partial changes propagate through multiple derived states. They highlight that frameworks might face performance bottlenecks if they attempt to recalculate entire subtrees on every small edit. Alternatively, performing a single top-level diff can be more efficient, but also more restrictive in logic flow.

The conversation repeatedly underscores the tension between clean abstraction and raw performance. Some solutions revolve around precomputing transitions, while others yield greater developer control at the risk of more complex code. Concluding this section, the speaker suggests that while future innovations may ease this conflict, current best practices involve thoughtful compromise between readability and speed.

### 04:00:00 - Framework Comparisons and Angular’s Signals

Shifting to a broader view, the speaker references Minko Gechev’s talk on Angular signals, marking a convergence with ideas found in React, Solid, and Vue. They summarize how Angular’s upcoming transformations are closing gaps with other signal-based frameworks, especially around fine-grained updates and server optimizations. Yet they also acknowledge Angular’s unique vantage: large enterprise teams reliant on stable, predictable releases.

A sense emerges that modern Angular is stepping into the same reactivity era that Solid has pioneered. The speaker praises the Angular team’s methodical approach, pointing out how stability remains a hallmark for enterprise use. Although Angular’s syntax and architectural style differ from a typical fine-grained library, the conceptual alignment signals an industry-wide shift toward more advanced state management patterns.

### 04:15:00 - Transitions, Event Replay, and Partial Hydration

The spotlight returns to transitions—special phases when a user navigates or triggers updates—allowing frameworks to coordinate large changes without blocking UI responsiveness. The speaker highlights event replay, a pattern where user interactions are queued until the app is ready to process them. They also note the rising interest in partial hydration techniques, led by libraries like Astro and Quick, which ship minimal JavaScript until the user interacts.

These ideas illustrate how reactivity extends beyond just updating counters in real time. By combining transitions, replay, and partial hydration, developers can finely tune how and when their apps load code. Such measures reduce CPU usage and network demands, improving perceived speed. However, they also introduce more conceptual layers that must be well-documented for developers to master.

### 04:30:00 - Summarizing the Paths to Convergence

Now the speaker synthesizes multiple strands, noting that nearly every major player—React, Vue, Angular, Svelte—favors signals or a variant of them. They reflect on how standardization efforts are trying to unify reactivity concepts at the language or browser level, though the approach remains contentious. From Misko Hevery’s resumability to Marko’s streaming strategies, the future evidently points toward more advanced incremental rendering.

At the same time, the speaker acknowledges ongoing debates around consistency, concurrency, and performance. While some frameworks chase ultimate efficiency, others prefer developer ergonomics. The result is a lively ecosystem where no “one size fits all” solution has emerged, yet cross-pollination of ideas brings frameworks ever closer together. By the end of this segment, listeners have a clear sense of reactivity’s unifying momentum.

### 04:45:00 - Closing Thoughts and Community Engagement

In the final chapter, the speaker fields closing queries and muses on the open-source community’s role in shaping tomorrow’s solutions. They urge developers to share concrete scenarios—like the Trello board or complex forms—that push reactivity to its limits, driving new features or refinements. They end with gratitude toward maintainers and contributors who keep these projects evolving at a rapid clip, ensuring that small experiments can become robust solutions for production.

With a mixture of relief and anticipation, the session wraps up by underlining the importance of collaboration. Framework authors rely on user experiences to validate bold proposals like “run once” suspense or new store abstractions. Inviting the audience to partake in future development, the speaker signs off, leaving behind a sense of empowerment for those eager to explore advanced reactivity patterns on their own.