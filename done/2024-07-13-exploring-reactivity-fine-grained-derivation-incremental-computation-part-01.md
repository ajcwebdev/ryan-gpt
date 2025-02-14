---
showLink: "https://www.youtube.com/watch?v=kz-p_017Usc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Reactivity: Fine-Grained Derivation & Incremental Computation"
description: ""
publishDate: "2024-07-13"
coverImage: "https://i.ytimg.com/vi/kz-p_017Usc/sddefault.jpg?v=66916d93"
---

## Episode Description

A wide-ranging conversation on fine-grained reactivity, incremental computation, and modern JavaScript framework design, blending practical insights with in-depth explorations of signals, suspense, and application architecture.

## Episode Summary

In this lengthy session, the speaker examines the intricacies of building reactive systems and maintaining application state, focusing especially on how signals, suspense boundaries, and transaction-like approaches can simplify or complicate data flow. They compare different frameworks such as Angular and React, explaining how each one tackles performance and reactivity concerns. Throughout, they highlight the need for careful handling of asynchronous updates, illustrating practical use cases like routing and form editing. The discussion also covers SSR (server-side rendering) implications, showing how developers can optimize loading states while avoiding unnecessary re-renders. By moving between theoretical concepts and hands-on coding strategies, the speaker underscores how these reactivity patterns can fundamentally enhance both developer experience and end-user performance. The conversation concludes by touching on community contributions, future directions for SolidJS, and broader shifts in the JavaScript ecosystem.

## Chapters

### 00:00:00 - Introduction and Stream Setup

In the opening moments, the speaker greets the audience and sets the stage for what will be a comprehensive exploration of reactivity, UI frameworks, and new experiments in code. They share some light personal updates—such as challenges with streaming and picking the right topics—while emphasizing their ongoing work on “reactivity design” and the significance of signals. This section serves as a warm-up, getting listeners acquainted with the speaker’s motivations for taking a deeper look at incremental computation and the ways it can improve developer workflows.

They also discuss behind-the-scenes issues like selecting the correct cover image for the stream and staying motivated to share their work in progress. Although these logistics may seem minor, they illustrate a broader commitment to transparent content creation. The speaker underscores the idea that even familiar topics—such as signals and frameworks—warrant repeated revisits to refine understanding. This candid introduction welcomes the audience into a relaxed yet intellectually driven atmosphere for the rest of the talk.

### 00:15:00 - Recent Projects and Vite Plugin Updates

Shifting from general stream updates, the speaker explains their recent focus on reactivity design, particularly in relation to evolving frameworks and the latest signals APIs. A key milestone includes updates to Solid’s meta-framework layer and the Vite-based plugin ecosystem, highlighting how these tools streamline developer experience. They acknowledge that some features still feel experimental, emphasizing community-driven efforts in addressing bugs and shipping improvements more quickly.

Along the way, the speaker references challenges with dev mode being more volatile than production builds, noting how first impressions in development affect a framework’s perceived stability. Their tone is collaborative, encouraging listeners to join the open-source discussion, contribute bug reports, and help validate new features. Through these remarks, the session underscores that cutting-edge updates rely heavily on user feedback and iterative refinement, shaping a healthier developer ecosystem.

### 00:30:00 - Insights from the JavaScript Community

Here, the spotlight shifts to the broader JavaScript community, looking at new frameworks, proposals, and ongoing debates. The speaker touches on topics such as the “convergence” of signals across popular frameworks, referencing names like React, Angular, and Vue. They recount interactions with library authors, acknowledging how new reactivity designs often spark lively, sometimes contentious, community dialogues.

Additionally, the speaker discusses shared influences in the ecosystem, including efforts to standardize partial hydration and server rendering. Real-world cases—like deploying an application on different hosting providers—surface practical concerns, such as incomplete support for dev features or local debugging. By blending conceptual ideas with practical deployment examples, the conversation remains grounded in real-world development issues. 

### 00:45:00 - Security Incident and Account Recovery Story

In a more personal turn, the speaker recounts the recent experience of losing access to their social media account due to a security breach. They detail the trials of contacting Twitter support, the frustrations of automated responses, and how they eventually regained control with help from well-connected community members. This anecdote underscores the vulnerability even well-known developers face regarding password reuse and two-factor authentication lapses.

The discussion then connects back to open-source collaboration, illustrating how personal networks can intersect with professional spaces. The speaker thanks those who intervened on their behalf, reflecting on how crucial it is to maintain rigorous security practices. Although briefly diverging from the core reactivity theme, this segment highlights the real human aspects of being a developer online and the resilience of community-driven support.

### 01:00:00 - Observations on Framework Personalities

Transitioning from security hurdles, the speaker muses on the distinct “personalities” of JavaScript frameworks. They propose imagining frameworks as if they were people, each with its own philosophy, strengths, and idiosyncrasies. This metaphor provides a lens to examine how Angular, React, Vue, and Svelte each approach design trade-offs—whether prioritizing developer adoption, performance optimization, or progressive feature sets.

Such personification reveals that these libraries aren’t merely technical constructs; they carry organizational ideals and cater to distinct user mindsets. Some frameworks strive for broad familiarity and backward compatibility, while others embrace radical new patterns. The speaker suggests that fully grasping each library’s “values” can clarify why certain features exist or how adoption patterns evolve. This conceptual viewpoint sets a creative, reflective tone, encouraging developers to consider frameworks beyond mere performance metrics.

### 01:15:00 - Signals, Effects, and the Challenge of Memory Leaks

In this segment, attention pivots back to the intricacies of signal-based systems—particularly the importance of controlling effect lifecycles to prevent memory leaks. Drawing on years of hands-on experience with similar reactive models, the speaker underscores the dangers of creating effects in ephemeral contexts or event handlers. Without proper teardown, these signals can accumulate and harm performance over time.

The conversation also highlights how certain frameworks guard against accidental misuses, for example by issuing warnings when an effect lacks an owner or runs in a short-lived scope. The speaker admits that balancing usability with robust safety checks is tricky, noting that many best practices stem from real-world mishaps observed over long development cycles. This cautionary advice underscores the fundamental need for discipline and clarity when working with reactivity.

### 01:30:00 - Async Boundaries and Resource Loading

Diving deeper into advanced reactivity, the speaker revisits the complexities of asynchronous data flows, especially the concept of suspense. They discuss the tension between showing loading indicators for partial updates versus blocking the entire view. Drawing from personal experiments, the speaker evaluates how frameworks like React and Solid handle transitions, where you might want to prevent “tearing” across different parts of the UI.

They explore potential solutions, explaining that while suspense can elegantly handle initial loads, it can also introduce complications for updates. Listeners learn about placeholders, fallback states, and route transitions as key areas where async data can create unexpected quirks. Overall, the segment illustrates the fine line frameworks must walk between staying responsive and preserving a coherent user experience when data arrives at different times.

### 01:45:00 - The New Proposal: “Run Once” Suspense on Updates

Here, the speaker introduces a fresh idea often described as “run once” or “single trigger” suspense, highlighting how it might ease common pitfalls. The notion is that suspense boundaries would only go into their fallback mode on a resource’s initial creation, rather than repeatedly suspending on every subsequent update. This approach aims to improve predictability while still offering placeholders at key moments.

They outline possible trade-offs, including how top-level usage could lock up an entire app, but nested usage offers more granular control. The discussion frames suspense as a dynamic mechanism for async state, arguing that most developers, in practice, might prefer a stable UI that doesn’t keep switching back to spinners. By suggesting a model where suspense triggers once, the speaker opens a potential route toward more intuitive data loading patterns.

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