---
showLink: "https://www.youtube.com/watch?v=I6L29qSTaFA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Components Are Pure Overhead"
description: ""
publishDate: "2022-09-08"
coverImage: "https://i.ytimg.com/vi/I6L29qSTaFA/maxresdefault.jpg"
---

## Episode Description

Explore a thorough discussion of modern JavaScript frameworks, reactivity, and component-based design, analyzing trade-offs and insights into performance and future directions.

## Episode Summary

This transcript captures a wide-ranging conversation about how different JavaScript frameworks approach component-based design and reactivity. The speaker compares earlier approaches like Angular’s dirty checking with modern implementations that integrate signals, examining how UI libraries handle rendering, state management, and list updates. Various techniques for updating the DOM are discussed, highlighting differences between virtual DOM methods, granular reactivity, and the implications of choosing keyed or non-keyed rendering strategies. Throughout, the conversation emphasizes trade-offs in library design, focusing on the limitations of granular reactivity and the overhead of component-based architectures. It then explores new developments in the field, such as Preact’s signal-based API, emphasizing how technical choices can enhance both developer experience and overall performance across real-world scenarios.

## Chapters

### 00:00:00 - Initial Greetings and Bonus Stream Context  

In this opening segment, the host greets the audience and explains that this is an unscheduled bonus stream, separate from a planned session happening the next day. He highlights a spontaneous decision to address hot topics in the JavaScript ecosystem, particularly focusing on newly released features. By setting a casual but curious tone, he gives viewers a sense of what to expect in the coming discussion. It becomes clear that the aim is to explore the technicalities behind certain performance considerations in modern frameworks.  

He also touches on why this topic cannot wait, noting that recent developments in Preact have spurred excitement and debate. The host references a scheduled conversation about designing a language but clarifies that today’s talk will focus on reactivity and the nuances of how frameworks handle state. Viewers learn that this session is meant to set foundational knowledge, so the subsequent day’s talk can progress without interruptions. The short introduction lays a roadmap for a deep technical session ahead, peppered with personal insights.

### 00:06:00 - Anticipating Framework News and Signals  

In these minutes, the host mentions major performance tricks teased by the Preact team, specifically around their new Signals feature. He highlights a sense of inevitability—given his interest in reactivity, it was impossible to avoid discussing signals. He alludes to a background of repeated conversations on stream about frameworks that utilize fine-grained reactivity. These frameworks, such as Knockout and Vue, have long had features reminiscent of what Preact is now introducing, and that history forms a basis for this deeper discussion.  

The host then sets expectations, stressing that while the news is “hot,” a thorough breakdown requires background knowledge. He briefly touches on the tension between the React team’s view of scheduling and suspense, contrasted with more granular approaches. As an example, he cites how React’s upcoming features differ from the signals concept in smaller libraries like Solid. This section underscores the importance of understanding each solution’s unique trade-offs, preparing listeners for a more comprehensive analysis to follow.

### 00:12:00 - Revisiting Fundamentals: Simple Counter in Vanilla JavaScript  

Here, the host demonstrates the basics of state and rendering by writing a simple counter with pure JavaScript. He creates a button element, initializes a numeric count, and updates the button text on click. This back-to-basics exercise is meant to highlight what frameworks ultimately attempt to simplify or optimize. By showing manual state changes and direct DOM manipulation, he illustrates how everything, at its core, involves tracking data and reflecting it in user interfaces.  

He points out that while this approach works fine for trivial examples, it quickly becomes cumbersome for larger applications. The manual process of binding, reading from the DOM, and enforcing updates can lead to repeated logic and possible errors. This demonstration sets the stage: frameworks abstract away the fiddly parts, but understanding vanilla JavaScript reveals the fundamental tasks behind any rendering system. The conversation thus transitions into how different libraries automate or optimize this underlying workflow.

### 00:18:00 - From Polling to Event-Based Updates  

Moving forward, the host dives into a naive polling approach, showing how one might repeatedly check a value at intervals and update the DOM whenever the number changes. He uses a setInterval function to poll the counter’s state, resulting in periodic updates that feel sluggish. Though inefficient, this method underscores the principle of detecting changes over time. It shows how older frameworks, such as AngularJS in its early forms, used similar ideas with “dirty checking,” constantly polling for modifications.  

He contrasts that model with a more direct event-based mechanism, where clicking the button triggers a function to update the text immediately. This eliminates the inherent delay and repeated checks of polling, delivering a smoother result. Each approach—polling versus event-based—reveals the trade-off between simplicity and efficiency. Polling can be simpler to conceptualize but wastes resources by constantly re-checking. Meanwhile, responding to specific events is more elegant but also demands careful design to handle more complex interactions.

### 00:24:00 - First Steps Toward a Reactive Mindset  

During this segment, the host begins to pivot from direct DOM manipulation toward a reactive approach. He underscores that changes should often be expressed in terms of state rather than tightly coupling the logic to each event handler. By showcasing how one might wrap the state and invoke an “update” function on assignment, he demonstrates how modern frameworks automate these tasks. This emerging pattern isolates stateful data from the view, clarifying how an application’s data can drive its user interface.  

He also acknowledges some complexities that arise, such as stale closures if the state is defined incorrectly, leading to repeated or missed updates. React famously encountered such issues, prompting patterns like “function setState” or hooks. This moment exemplifies how frameworks refine raw ideas into cohesive patterns. Placing logic into a well-defined structure helps ensure developers do not manually track every change. The conversation stays grounded in code, providing practical glimpses into the transformations from simple to sophisticated patterns.

### 00:30:00 - Angular’s Dirty Checking and the Evolving Change Management Landscape  

Here, the host mentions how older Angular versions used a method akin to continuous polling, known as dirty checking. He outlines that Angular would repeatedly loop over data, comparing old and new values to see if anything changed. While this might appear inefficient, early versions leveraged clever strategies to make it usable in everyday apps. Nonetheless, when more elements or properties were involved, the performance overhead could accumulate, provoking a shift in how change detection was handled.  

This leads to broader historical notes on how the community moved away from pure dirty checking to more refined strategies. Libraries such as Vue adopted a reactive data model that tracked mutations at a fine-grained level, and React took another route, focusing on reconciling trees of components. The host draws these comparisons to show that, regardless of approach, each library must figure out how to detect changes and synchronize them with the DOM. This fundamental concern influences every major JS framework.

### 00:36:00 - React’s Influence: One-Pass, Two-Pass, and Reactive Rendering  

In this interval, the host compares the single-pass approach seen in libraries like Svelte or Lit to the two-pass rendering approach used by React or Preact. Single-pass often retains previous state in memory and updates DOM elements directly in one go, whereas two-pass approaches first generate a virtual representation of the UI, then compare it to the current state before making final DOM changes. Both methods strive to reduce redundant operations but tackle the challenge from different angles.  

He underlines that neither approach is universally superior; each has pros and cons around memory usage, creation overhead, and incremental updates. For instance, Svelte compiles away much of the overhead, while React’s virtual DOM offers flexibility for advanced features like concurrent rendering. Contextualizing these strategies helps reveal how frameworks meet diverse performance needs. This sets the tone for understanding more granular library designs, including those employing signals and advanced caching to optimize specific usage patterns.

### 00:42:00 - Vue’s Reactive Core and Its Place in the Conversation  

Attention shifts toward Vue, highlighting its long-standing mix of a virtual DOM with a reactive data layer. The host notes that Vue often remained overlooked in superficial comparisons, even though it has shaped many design ideas now appearing in Preact’s signals. By tying data reactivity to a templating system, Vue found ways to effectively manage updates without forcing developers to track dependencies manually. Yet, for maximum performance, Vue still requires certain trade-offs, especially in complex use cases.  

He underscores that Vue has devoted significant effort to bridging the gap between its reactive system and the overhead of a virtual DOM. Recent developments, such as Vue 3.2’s improvements, demonstrate a push to make reactivity more explicit and powerful. There is also mention of how internal optimization like `vmemo` can help mitigate repeated renders. This segment paints Vue as a hybrid solution, weaving reactivity and a tree diffing mechanism. It becomes a model for how frameworks might balance ergonomics and speed.

### 00:48:00 - Components, MVC, and the Shift to Unifying Logic and Views  

Here, the host gives a historical recap of Model-View-Controller patterns, specifically the hurdles of separating “view models” from actual UI components. Early frameworks often stored application state in separate structures, requiring manual binding or large-scale synchronization. React famously merged the idea of data models and presentation into components, a move that dramatically changed how developers thought about data flow. This blending of logic and structure set the template for modern UI frameworks, influencing everything from hooks to single-file components.  

However, the host cautions that tying state too closely to components has pitfalls, such as re-rendering entire sections unnecessarily. The conversation highlights attempts by older frameworks to handle complex relationships among models, addresses, and user data, often resulting in tangled code. By unifying logic within components, React simplified one layer but introduced new complexities around memoization and concurrency. This background is crucial for understanding why reactivity at the data layer is seen as a compelling way to fine-tune performance without oversimplifying architecture.

### 00:54:00 - The Rise of Granular Reactivity and Its Trade-Offs  

During these minutes, the discussion zeros in on the concept of “granular reactivity,” where each piece of state updates independently. Frameworks like Knockout pioneered this idea, letting developers bind data directly to UI elements without redrawing everything. Yet, it wasn’t always efficient or intuitive, prompting many refinements over time. The host stresses that while granular updates can drastically cut down redundant rendering, they might introduce overhead in other places, such as memory usage or complex subscription management.  

The conversation also highlights that granular systems can either be extremely powerful or dangerously intricate. They allow pinpoint updates but can balloon in complexity if overused or structured poorly. Achieving robust solutions typically requires thoughtful design to prevent infinite loops or an explosion of watchers. This segment notes that React’s approach diverged by defaulting to larger re-renders, letting developers add memoization selectively, while more reactive libraries do the reverse. Understanding both philosophies is key when choosing a framework for large or fast-evolving projects.

### 01:00:00 - Memory Overhead and the Cost of Components  

Now the host introduces the notion that components themselves can be an overhead cost. He references experiments in which authors tested performance by creating more components than typical, observing how different libraries scaled under heavy nesting. Some results revealed that certain reactivity-based systems slow dramatically as the component count rises, while virtual DOM libraries remain relatively unaffected. The conversation highlights trade-offs in memory usage, set-up costs, and potential gains in update speed.  

He uses real-world examples and benchmarks to illustrate that overhead can stem from either reactivity subscriptions or repeated rendering calculations. React’s function components, for instance, add minimal overhead on creation, but reactivity-first solutions sometimes pay extra to monitor each node. These nuances matter for applications with thousands of interactive elements. Developers often must weigh the architectural benefits of isolating logic in many small components versus the potential performance penalties of overly granular structures.

### 01:06:00 - Avoiding Over-Memoization and Balancing Rendering  

During this segment, the host underscores a recurring issue: developers often rely too heavily on memoization in pursuit of micro-optimizations. In React, for instance, overusing `useMemo` or `memo` can create new layers of complexity and hidden costs. Similarly, in fine-grained reactive systems, wrapping every single calculation in a computed or signal can lead to overhead that outweighs the benefits. The goal is to find a comfortable middle ground where only genuinely expensive operations are cached.  

He relates how Solid addresses this by grouping updates and preserving minimal reactivity for essential changes. By default, not every piece of data is a separate subscription, which helps manage overhead. This discussion points to a universal truth: while frameworks may differ in strategies, a thoughtful approach to caching and state separation is paramount. Whether using top-down rendering or granular effects, balancing the cost of “remembering” computations against the speed of redrawing keeps an app both snappy and maintainable.

### 01:12:00 - The Hydration Problem and Resumability  

Attention shifts briefly to server-side rendering and hydration, explaining that frameworks must re-run components on the client to “hydrate” the UI. The host cites Mishko Hevery’s concept of “resumability,” where instead of replaying every component, the framework picks up exactly where the server left off. Solutions like Qwik illustrate how cutting down on re-renders dramatically improves load times and performance. React’s approach often involves replaying or partially replaying components, which can be substantial overhead for large applications.  

He mentions that frameworks employing granular reactivity can, in theory, skip creating entire subsets of the app during hydration. However, implementing such an approach demands tight integration between the compiler or runtime and the UI layer. Each approach, whether from React or newer libraries, aims to lessen the cost of bootstrapping an already-rendered page. This underscores how the same basic principle—avoid re-doing unnecessary work—drives the evolution of server-side rendering and hydration, extending beyond the realm of typical single-page apps.

### 01:18:00 - Revisiting the Complexity of Lists and Keys  

The host dives into a central issue for UI frameworks: rendering lists efficiently. He contrasts naive by-index approaches, which can break animations or input states, with keyed approaches that retain identity. The talk explains how frameworks like React encourage unique keys to identify elements in a list, ensuring that reordering preserves internal state. This is essential for transitions, forms, and embedded components that rely on stable references, even if their visual position changes.  

He then clarifies that keyed approaches come with a cost, since the library must perform deeper comparisons to reconcile items correctly. Meanwhile, non-keyed approaches can skip certain steps but risk mismatched UI states. This tension influences how reactivity interacts with list rendering, especially when partial or granular updates are desired. The explanation emphasizes that regardless of whether a library is reactivity-first or reliant on a virtual DOM, the intricacies of list processing remain a shared and complex hurdle.

### 01:24:00 - Immutable Data, Mutation, and Reconciliation  

In this timeframe, the conversation transitions to discussing immutable data versus mutable updates. The host explains that React popularized immutability, requiring new object or array references to signal changes. This ties in with keyed reconciliation, where frameworks compare references and keys to decide how to patch the DOM. However, deeper changes can necessitate shallow or deep clones, leading to overhead for large structures. Libraries like Vue or Angular can use watchers or proxies for more granular detection.  

He also points to the advantage of purely mutable approaches in reactive libraries, where updating a single nested property triggers only the relevant subscribers. Yet that model also requires careful design to avoid losing track of changes. We see that no single solution wins outright: immutability simplifies understanding changes but may cause extra object creation, while mutable paradigms excel at partial updates but risk complexity. This highlights the push and pull every framework contends with when deciding on internal data handling.

### 01:30:00 - Merging Reactivity with a Virtual DOM: The Case of Vue  

Vue exemplifies an attempt to blend a granular data system with a tree-diffing mechanism. The host notes that while Vue has matured, earlier benchmarks showed it falling behind purely virtual DOM or purely reactive approaches on certain operations. Over time, Vue refined how it interacts with watchers, employing optimizations like hoisting static nodes and introducing features such as `v-memo`. This yields a more efficient rendering cycle while keeping a comfortable developer experience that merges the best of each paradigm.  

He describes how Vue’s compiler and runtime handle partial reactivity, intercepting changes at the component boundary or even within expressions. Although potentially intricate, the system can deliver performance that rivals more specialized libraries. Key improvements in Vue 3.x illustrate a commitment to bridging the gap between a purely reactive approach and the conventional VDOM workflow. This serves as a template for how other frameworks, seeking a middle ground, might unify advanced state management with flexible, component-based design.

### 01:36:00 - Exploration of State Management Libraries in React  

Attention shifts to React and the ecosystem of third-party state solutions that arose, such as MobX, Redux, and newer libraries like Jotai or Zustand. Each aims to improve data flows in React, which by default re-renders entire components whenever state changes. MobX, for instance, introduced a reactive model that wraps data in observable objects, auto-tracking usage within the UI. While it can reduce boilerplate compared to Redux, the library introduces a separate subscription model that must coexist with React’s own.  

He stresses that these libraries cannot truly redefine React’s internal rendering mechanism. They often offer ergonomic improvements or localized performance boosts but still rely on React’s reconciliation loop under the hood. Thus, while global state can be managed more elegantly, a fundamental re-architecture of React is rarely possible from an external library. This underlines why adding signals to React or attaching them to Preact is more nuanced than simply plugging in a new store or data layer.

### 01:42:00 - Benchmarks: JS Framework Benchmark and Real-World Implications  

Here, the host brings up the widely referenced JS Framework Benchmark. This tool measures how quickly libraries handle operations like creating large tables, selecting rows, and swapping elements. He highlights that many variables—creation costs, partial updates, memory usage—affect rankings. While reactivity can excel at partial updates, it may stumble when thousands of components need to be created. Conversely, a well-optimized virtual DOM can keep creation overhead low but might not match granular reactivity’s speed in localized changes.  

He warns listeners that benchmarks can be misleading if interpreted without context. For example, a library may score well under certain conditions while faltering under others. The synergy between real-world code organization and underlying framework mechanisms is crucial. This discussion emphasizes that raw performance alone does not guarantee the best developer experience or maintainability. Instead, frameworks aim to offer balanced solutions that handle typical use cases efficiently and still allow specialized optimizations for more demanding scenarios.

### 01:48:00 - Hybrid Systems and Compilation Strategies  

Continuing on performance themes, the host notes that some frameworks combine elements of compilation with partial reactivity or a simplified virtual DOM. Svelte, for instance, compiles templates to direct DOM instructions, removing the need for a universal VDOM. Meanwhile, others might have a build step that precomputes certain aspects, then a runtime layer that does final adjustments. These hybrid strategies illustrate the creativity driving framework evolution, each attempting to eliminate overhead where possible without sacrificing flexibility.  

He mentions how advanced compilers can detect which parts of a template reference stable data, hoisting them into static structures and auto-generating minimal updates for dynamic sections. Even React is inching toward more compiler-friendly approaches, though it remains heavily tied to runtime features like hooks. The conversation suggests that as compilers advance, libraries will get better at skipping entire swaths of work. This ongoing refinement converges on the central principle: optimize everything that’s predictable and lighten the load for the dynamic parts.

### 01:54:00 - Preact Signals as a First-Party State Solution  

The host finally directs focus to Preact’s newly announced Signals. He draws parallels with MobX-like reactivity but underscores that this time, it’s officially integrated into Preact’s core. This allows developers to define signals outside components, maintain them globally, and reference them within the virtual DOM. The crucial difference is that Preact can now intercept these signals, either re-rendering components or updating specific DOM segments without the user doing extra work.  

He describes how this approach offers a powerful convenience: signals handle data tracking automatically. As a result, the code feels simpler than juggling multiple hooks or context providers. He also notes that while signals can localize updates, the performance improvement depends on usage patterns. In simpler scenarios, it might mirror hooking into a global store, but in more complex ones, signals can reduce full component rerenders. This sets the stage for a deeper comparison between signals and other reactivity-based strategies.