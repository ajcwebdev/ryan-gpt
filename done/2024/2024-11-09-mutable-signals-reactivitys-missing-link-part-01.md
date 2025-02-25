---
showLink: "https://www.youtube.com/watch?v=jfZdl3QckMM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Mutable Signals - Reactivity's Missing Link"
description: ""
publishDate: "2024-11-09"
coverImage: "https://i.ytimg.com/vi/jfZdl3QckMM/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation that examines how mutable and immutable signals shape modern reactive programming, touching on performance, data flow, async patterns, and real-world frameworks.

## Episode Summary

This discussion explores the foundations of reactivity, focusing on the relationship between mutable and immutable signals. It begins by introducing core concepts—like how signals, memos, and stores function—and clarifies the differences between immutable updates that replace entire data structures and mutable updates that alter data in place. The conversation emphasizes how granular reactivity allows for more efficient updates and discusses how developers can manage deeper nested data, list transformations, and derived structures without resorting to excessive computation. The talk also tackles async handling, suspense mechanisms, and the tricky balance between immediate versus lazy fetching. By illustrating real-world examples and dissecting trade-offs in various frameworks, the session highlights the importance of understanding both the underlying architecture of reactivity and the practical techniques that developers can use to build performant, maintainable applications.

## Chapters

### 00:00:00 - Introduction and Stream Setup

In the opening minutes, Ryan greets the audience and gets reacquainted with streaming after a brief hiatus. He checks his microphone setup and casually interacts with early joiners in the chat. This part sets a relaxed tone, showing excitement about discussing signals and reactivity. Ryan also mentions sipping on a green smoothie, hinting at the informal nature of the session. His initial remarks underscore his enthusiasm for fine-grained updates in user interfaces and the broader potential of reactive programming.

He briefly references how busy he has been, highlighting new ideas brewing in the Solid ecosystem. The conversation teases a deeper dive into advanced topics around signals, an area Ryan has studied extensively for over a decade. While no code is shown in this short segment, it foreshadows a thorough look at how signals have evolved in frameworks like Knockout, Vue, and Svelte, setting the stage for a deep technical exploration of reactivity.

### 00:06:00 - Catching Up and Reactive Foundations

Here, Ryan touches on past experiences that shaped his understanding of reactive systems. He recalls discovering Knockout JS over a decade ago, noting how it influenced his journey into building Solid. He explains that, historically, many developers used to rely on event emitters or streams for handling state changes, though he prefers the more direct approach signals provide. By outlining this background, he gives context to why fine-grained reactivity stands apart from older FRP (Functional Reactive Programming) concepts.

He then contrasts different schools of thought, including how frameworks like Cycle.js or React’s concurrency model tackle state updates. This creates a foundation for understanding signals as specialized, synchronous value-holding entities that let you compose reactive expressions with minimal overhead. Ryan emphasizes that “signals” in many libraries are essentially immutable at their core but can be used in mutable ways. This piece sets the tone for more nuanced explorations of how signals apply to real-world development scenarios.

### 00:12:00 - Revisiting Event Queues and Scheduling

Ryan examines the intricacies of how JavaScript handles microtasks and macrotasks—topics deeply relevant to reactive systems. He references frameworks employing scheduling tricks like `setImmediate`, `postMessage`, or requestAnimationFrame to control when updates apply. These system-level details explain how frameworks ensure a stable snapshot of state for fine-grained computations. Ryan mentions that each scheduling approach can circumvent pitfalls like event queue overflows or undesired re-renders, especially critical for apps with heavy async logic.

He underscores that reactive libraries often rely on advanced knowledge of scheduling to optimize performance. React’s new `useCache`, for example, tries to coordinate server and client data in ways that deeply integrate with the event loop. While describing these internal mechanics, Ryan clarifies that Solid’s approach focuses on minimal overhead by letting signals propagate changes in a controlled manner. This chapter highlights that beyond the syntax or design patterns, real-world reactivity must handle how JavaScript orchestrates tasks under the hood.

### 00:18:00 - Signals vs. Streams and the Nature of State

Continuing, Ryan discusses the differences between signals and more traditional event streams such as those in RxJS. He points out that streams deliver every intermediate value, while signals hold a single value that stays current. The conversation clarifies how signals guarantee consistency, meaning a consumer sees only the latest state rather than partial transitions. This is essential for UI rendering, where an out-of-date or missed intermediate value usually doesn’t matter as long as the final result is in sync.

By contrasting signals with streams, Ryan explains how each model suits different tasks. Observables shine in dataflow scenarios where you must process every emitted value, but UI frameworks often just need the current state in a stable form. He underscores that signals’ approach to state as “always up to date” powers incremental rendering, making them a natural fit for frameworks like Solid or Svelte’s new compiler features. This segment underlines signals’ special role in reactive UIs.

### 00:24:00 - Immutable vs. Mutable Signals Overview

Shifting focus, Ryan addresses how signals appear immutable at their core because each update references a new “version,” yet they can be used in mutable ways. He walks through simpler code examples to illustrate how reactivity doesn’t necessarily mean adopting full immutability. Sometimes, selectively mutating nested structures can be more performant. This dual perspective sets up an interesting tension between frameworks like React, which emphasize immutability, and older libraries like Knockout, which mutate data but still track dependencies.

Ryan highlights that immutable signals resemble pure functions—think React’s state updates—while mutable signals can optimize for fewer diffs. The conversation then transitions into the complexities of combining these approaches, especially in large data sets. He shows that merging them is not trivial, especially when you need to keep references stable. These fundamentals preview advanced sections later on where Ryan dissects deeper patterns for storing and deriving data in real apps.

### 00:30:00 - Nested Reactivity: Users and Properties

Here, Ryan describes a scenario where user data contains multiple layers, such as name and address. He contrasts two strategies: reassigning the entire user object on every change versus surgically updating individual properties. By nesting signals—one for the user as a whole and another for the user’s name—you can reduce unnecessary computations. A change to the user’s name only triggers an update where it’s read, rather than rewriting the entire user object.

He emphasizes how frameworks like Svelte or Vue now adopt a similar nested approach through proxies or specialized watchers. React, by contrast, typically re-renders entire components based on shallow diffs, an approach that can be less efficient. This example lays groundwork for a thorough discussion on how store or proxy-based reactivity can elegantly handle partial updates, bridging the gap between purely immutable data flows and pragmatic, mutable structures.

### 00:36:00 - Immutable Patterns and Diffs

Ryan demonstrates how an immutable approach would entail copying an entire user object whenever a single field changes. This ensures easy reference checks but can lead to large-scale diffing. He acknowledges that many frameworks rely on immutability for simpler mental models but notes the performance penalty of re-checking everything. This segment illuminates trade-offs: immutability streamlines certain aspects of state management but can hamper fine-grained optimization.

He clarifies that frameworks often adopt either immutability for clarity or mutability for performance. The best approach depends on the app's complexity. Immutable structures can become burdensome at scale, whereas mutable reactivity elegantly handles localized changes if used carefully. This framing sets the stage for deeper dives into advanced constructs—like store proxies—capable of merging the best of both worlds: immutability’s predictability with mutability’s speed.

### 00:42:00 - Introducing Reactive Stores and Proxies

Ryan transitions to the concept of “stores,” which are specialized proxies that enable nested reactivity with minimal boilerplate. He contrasts these with the older technique of passing signals everywhere. By simply writing to nested properties, stores can trigger granular updates to exactly where changes matter. This approach streamlines large state structures, letting developers avoid top-to-bottom re-renders whenever small parts of the data transform.

He also addresses the potential pitfalls of two-way data binding or uncontrolled mutations. Ryan notes that, used judiciously, store proxies can yield huge performance gains but might introduce confusion if references are overwritten or if objects appear mutated outside the store. The rest of the talk promises to cover solutions for these issues, especially around applying merges or diffs when external data (like a server response) enters the local store ecosystem.

### 00:48:00 - Toward Fine-Grained Updates in Lists

Expanding beyond single objects, Ryan illustrates how signals and proxies apply to arrays or collections. He contrasts an immutable approach—replacing the entire array and re-checking each element—to a mutable store, which simply updates the changed item. This ensures that only a single row or object triggers an update in the UI, rather than recalculating or diffing the entire collection. He emphasizes how beneficial this is in large data sets.

He then dives into array operations like push, pop, or splice, showing that a store-based approach can selectively notify only affected indices. This nuance scales gracefully, letting you shift or reorder elements without reprocessing everything else. This discussion also touches on the concept of “keyed” rendering, an idea he revisits later in more detail. For now, the main takeaway is that bridging mutable array updates with reactive signals yields notably leaner updates than naive immutability.

### 00:54:00 - Wrapping Data Structures and the Limits of Diffing

Ryan highlights how advanced reactive libraries can keep track of each piece of nested data for minimal re-renders. Yet he warns that complicated merges or diffing logic can get unwieldy if you must account for every external data shape. He points out that reconciling new server responses with existing store data sometimes demands custom merging strategies—particularly if multiple references exist in the store for a single item. 

He underscores that naive diffing might inadvertently produce duplicated objects or break references that the UI depends on. Ryan explains that while some frameworks rely on top-level immutability to keep logic simpler, store-based frameworks need robust strategies for partial updates. This tension—how to handle incoming data that might reorder or rename elements—leads to a deeper conversation on data patching, which is set to emerge in forthcoming sections.

### 01:00:00 - Early Explorations of Derived, Mutable State

Ryan shares an early prototype he built to handle writable derived signals, recalling older patterns from Knockout JS. The idea is that you can read a computed value, like a user’s full name, and also write back to underlying signals—splitting the user’s first and last name. While recognized as advanced or “two-way” reactivity, he notes it can be trickier to handle in practice, especially when developers expect immutability in certain flows.

He adds that partial solutions exist—like custom memo or store wrappers—but warns that such patterns can introduce subtle bugs if not carefully designed. This conversation foreshadows the complexity of building a universal reactive system that seamlessly handles every data shape. Ryan aims to unify these patterns in Solid’s next iteration, though he acknowledges that full “two-way” derivations demand cautious usage to avoid confusing, circular dependencies.

### 01:06:00 - The Evolution of CreateSignal and CreateStore

Turning practical, Ryan surveys how Solid’s APIs have changed, especially around signals. Previously, Solid provided createSignal for single values and createStore for nested objects, each with their own rules. He discusses an experimental path for unify them so a single method could handle deeply nested data or act as a memo-like derivative. While powerful, such unification can lead to edge cases if not clearly documented.

He revisits challenges from older frameworks, pointing out that confusion around “writable” computations often arises when devs try to do advanced synchronization. The final plan in upcoming Solid releases is to keep a relatively simple set of core primitives, guiding advanced usage through patterns rather than forcing them into a single, magical function. By separating concepts but still allowing deeper integrations, Solid hopes to avoid repeating mistakes from older two-way binding systems.

### 01:12:00 - Data Mapping in UI Components

Ryan shifts gears to discuss how signals impact UI rendering loops, such as mapping over lists of items. He categorizes common methods: keyed, non-keyed, index-based, or a direct repetition approach. Each has performance and usability implications, particularly around shifting or removing elements. This breakdown explains why frameworks often push devs to specify keys or indexes, so that DOM elements match the correct items.

He clarifies that for mutable reactivity—like in Solid’s store—a carefully chosen approach can produce minimal overhead. For instance, if only the item’s content changes, you don’t need to re-run the entire map. Non-keyed approaches are simpler if items never reorder, but can cause jarring UI state issues when items do shift. Meanwhile, keyed approaches track identity more accurately, though the overhead might not always pay off. He concludes that the best choice depends heavily on data shape and usage patterns.

### 01:18:00 - Example: Key by Index vs. Key by ID

Ryan offers a tangible example comparing index-based rendering, where elements shift up and down in the DOM, to keyed rendering, which preserves each element’s identity. He explains how index-based updates might inadvertently cause re-renders or lost state if the items move. Meanwhile, keyed rendering better aligns each item with its DOM node but can be more costly to set up for certain data.

He notes that frameworks like React default to a map function where each child must specify a key. In Solid, non-keyed mapping is used selectively for performance reasons in stable lists. Ryan underscores that, conceptually, the difference is often negligible for small sets, but in bigger or dynamic lists, this design choice affects how the UI updates. This is particularly relevant for table or grid updates in enterprise scenarios.

### 01:24:00 - The Four Quadrants of List Mapping

Ryan introduces a mental model where list rendering can be split into four quadrants: keyed or non-keyed, and mutable or immutable data. He explains that each quadrant optimizes for slightly different usage patterns. Non-keyed operations might suffice if you always replace entire arrays. Keyed setups protect complex internal state like form inputs or expansions. Similarly, data that is deeply mutable benefits from specialized operations like repeat or for loops in Solid, while purely immutable data may always rely on a straightforward map.

He acknowledges this could feel overwhelming, but it helps clarify why certain frameworks produce better results in specific tasks. By identifying your quadrant—immutable-keyed, immutable-non-keyed, mutable-keyed, or mutable-non-keyed—you can pick the best approach to list handling. This framework is a blueprint for devs to reason about subtle performance behaviors, especially in advanced UI libraries. It sets up the broader conversation on how reactivity’s fine-grained approach can unify otherwise separate strategies.

### 01:30:00 - Filter, Reduce, and Other Array Methods

Moving from map, Ryan explores how filtering or reducing data interacts with reactive systems. A naive implementation might re-run the entire filter logic whenever a single item changes, which can be wasteful. He contrasts this with specialized approaches that track only certain items, skipping re-checking everything. However, he notes that bridging these partial checks with a final derived result can get complicated: some operations, like reduce, naturally need a complete pass.

He mentions that certain reactive libraries provide optimized helpers for map but not necessarily for filter or reduce, because the latter inherently require more global awareness of the dataset. Creating partial “patches” or diffs for them becomes complex. Ryan suggests that while advanced caching or incremental computations can help, real gains come primarily from focusing on map-like transformations. Other operations might see diminishing returns unless you have a highly specialized scenario.

### 01:36:00 - Immutable Diffs vs. Store Proxies

Ryan circles back to the tension between applying fully immutable diffs—like a Redux approach—and adopting store proxies. He explains that frameworks using immutability often rely on big library calls like Immer, which produce patches that represent changes. By applying these patches, the system can figure out minimal modifications. However, store-based reactivity can skip generating or interpreting patches, as changes occur locally.

He acknowledges that for certain patterns—like time travel or collaborative editing—patch-based approaches are valuable. But if an application mainly needs real-time, fine-grained UI updates, store proxies can be more direct. The crux is knowing your data flow: if you continuously merge external snapshots, a patch system might be simpler. If local, incremental updates rule, a store is likely more efficient. This conversation underscores the interplay between purely immutable flows and partial, mutable approaches.

### 01:42:00 - Potential Pitfalls in Data Cloning

Here, Ryan examines the complexities of automatic cloning when you set a new object into a store. If a library tries to protect original data by always creating deep copies, it can break reference checks or hamper incremental updates. On the flip side, referencing external objects directly can lead to side effects if both the store and outside code mutate them.

He outlines scenarios where naive cloning duplicates the same object multiple times or merges them incorrectly if it perceives a matching ID. This can get especially messy with server responses that contain shared references, like multiple entries for the same user. The lesson is that “just clone it” can cause as many issues as it solves, hinting that frameworks must carefully handle references. That nuance foreshadows additional advanced techniques covered later.

### 01:48:00 - Creating a Balanced Diffing Mechanism

Ryan debates whether it’s worth implementing a custom approach to handle partial or full diffs on store data, referencing patterns from Immer. He describes how advanced frameworks might keep partial references in a weak map, ensuring identical objects map to the same proxy. Yet this can still be fraught with edge cases, especially if objects mutate in-between sets.

The overarching theme is that any universal mechanism could be too heavyweight or too incomplete to handle all possible data flows. Ryan suggests that for smaller apps, simply reassigning data might suffice, while for large systems, advanced store manipulation or patch-based merging might be necessary. This concluding note acknowledges no “one size fits all.” Instead, each project’s complexity determines whether you can rely on simpler immutability or must adopt a more granular store approach.

### 01:54:00 - Async Challenges: Lazy vs. Eager Fetching

Transitioning into asynchronous topics, Ryan addresses how lazy evaluation can cause waterfalls in data fetching. If you have multiple async calls dependent on each other, lazy signals might wait for the first fetch to complete before starting the second. This leads to slower sequential updates. By contrast, eager fetching triggers all async operations up front, potentially speeding up resolution but forcing you to handle partial states.

He highlights that certain frameworks rely on “throwing” to indicate pending data, which can compound these waterfall problems unless carefully orchestrated. Ryan points out that solutions like suspense or transitions can help but often require complex coordination. In practice, devs may guard with “isPending” checks to avoid double fetching. This reveals a trade-off: asynchronous laziness can reduce extraneous calls but might stall dependent operations without strategic guard logic.

### 02:00:00 - The Realities of Tearing and Suspense

Ryan explains that “tearing” occurs when the UI shows a mix of old and new data during an asynchronous update. While frameworks like React introduced concurrency to mitigate abrupt falls to loading spinners, developers in other libraries face similar issues. He notes that even with signals, ignoring partial states can lead to data misalignment, especially if changes happen at multiple levels.

This is where suspense—a concept from React—enters. Suspending a portion of the UI until data is ready can unify the user experience but demands that the rest of the app handle the waiting. Ryan contends that not everyone wants this fallback approach, and some prefer fine-grained or partial rendering. He concludes that each method—full suspense or partial guards—has merits and pitfalls, and it depends on whether the application can gracefully handle stale or partial data.

### 02:06:00 - Guarding Async Reads with Latest or Pending Checks

Ryan advocates that controlling how you read async signals can avert double-fetches or UI flicker. A “latest” helper might allow you to read the last resolved value without forcibly re-fetching. However, he cautions that if a memo or store has never resolved, reading “latest” would yield undefined or throw an error. Hence, devs often add a fallback or try-catch to gracefully handle that first missing value.

He reiterates that frameworks differ in providing built-in solutions. React might rely on custom hooks for stale-while-refresh behaviors, while Solid may add simpler built-ins like `.latest` or `isPending`. The main principle is to separate the “throwing fetch” from the reading logic, ensuring a better developer experience. Even so, each approach demands forethought about synchronous reading and the potential for tearing during transitions.

### 02:12:00 - Scheduling Considerations in Solid

Ryan delves deeper into how Solid’s runtime schedules updates across signals, stores, and effects. By default, Solid tries to propagate changes synchronously so the UI remains consistent. Yet advanced concurrency or batching strategies require a queueing system to avoid partial states. He notes that deciding between immediate or queued updates can drastically affect the user experience, especially for animations or form inputs.

He compares this approach to React’s concurrency model, where rendering is often deferred, and updates can be interrupted. Solid, however, tends to prefer a more direct model that sidesteps the complexities of tracking partial states. The discussion references how the new version of Solid might unify certain scheduling rules so that all side effects remain predictable. Ultimately, it’s about striking a balance between performance, consistency, and developer clarity.

### 02:18:00 - Revisiting the Value of Lazy Computations

Ryan addresses whether lazy memos—computations that run only when read—are truly essential. While beneficial for rarely accessed branches, real-world apps often need immediate data. He recalls that many user-facing tasks require stable values, so lazy logic might rarely bring substantial gains. That said, in specialized scenarios or bridging with other libraries, lazy evaluation can reduce wasted calculations.

He highlights how Solid historically uses eager evaluation, triggering computations immediately when dependencies update. This ensures no “inconsistent states” between signals. Some frameworks do rely on lazy pull-based strategies, but Ryan concludes that, for UI frameworks, the advantage is minimal. The conversation hints that future releases might keep a mostly eager approach while still allowing advanced devs to opt in to lazy patterns if needed.

### 02:24:00 - Shifting Focus to Practical Code and Benchmarks

Ryan teases a pivot to more pragmatic demonstrations, referencing performance benchmarks like JS Framework Benchmark or DBMon. These tests illustrate how architectural decisions—keyed updates, store-based reactivity, partial diffs—impact real metrics under heavy loads. He mentions that some approaches are only micro-optimizations, while others significantly reduce CPU usage by skipping re-renders.

He also points to the Solid team’s ongoing work in adapting or removing older code like createMutable. The goal is to unify user-facing APIs while preserving the same fine-grained performance advantages. This includes reconciling newly fetched data or supporting partial concurrency. By referencing known benchmarks, Ryan reassures listeners that these patterns aren’t theoretical; they have demonstrable impact on speed and efficiency.

### 02:30:00 - Complexity of Merging External Data

Diving back into the data side, Ryan outlines how developers merge remote server data into a local store. A naive approach might blow away carefully tracked signals or replace references that the UI depends on. He emphasizes the importance of “reconcile” or “patch” functions, which try to maintain existing objects unless they truly differ. Yet no universal approach suits all needs, especially if server data is partially keyed or missing unique identifiers.

He suggests advanced strategies like manually specifying keys for lists or providing custom equality checks. Ryan reiterates that storing data in a mutable structure doesn’t remove the complexity of merges. Instead, it grants more control. The developer must decide how much of the server payload overrides the local version. This conversation clarifies that building robust, reactive data models is as much an app-level challenge as it is a framework-level concern.