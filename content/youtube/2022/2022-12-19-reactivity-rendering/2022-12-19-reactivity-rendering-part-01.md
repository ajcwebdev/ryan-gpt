---
showLink: "https://www.youtube.com/watch?v=R5AcOtxIdMk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Reactivity & Rendering"
description: ""
publishDate: "2022-12-19"
coverImage: "https://i.ytimg.com/vi/R5AcOtxIdMk/maxresdefault.jpg"
---

## Episode Description

A dynamic discussion on reactivity, signals, and performance in modern JavaScript frameworks.

## Episode Summary

This session explores the fundamentals and nuances of reactive programming, focusing on how different frameworks implement signals, state management, and rendering strategies. It begins by outlining core concepts of reactivity—namely signals, effects, and computed values—then contrasts these with alternative approaches such as RxJS streams. Throughout, the speaker explains how these reactive models intersect with component-based libraries, examining real-world examples in React, Preact, Vue, Svelte, and others. Along the way, listeners learn about trade-offs in design, memory usage, and performance overhead, including how frameworks balance the cost of updates and component boundaries. The conversation concludes with a look at emerging patterns and potential innovations, suggesting that signals and fine-grained reactivity could inspire more powerful rendering architectures, server-component models, and future framework designs.

## Chapters

### 00:00 - 06:00 — Initial Setup and Motivation

In the opening segment, the speaker greets the audience and explains the spontaneous nature of the stream. He highlights the ongoing debates on Twitter around reactivity, signals, and how different JavaScript frameworks handle state changes. By establishing the backdrop of recent online discussions, he underscores the importance of clarifying misconceptions and illustrating why signals are garnering renewed attention, despite having existed in various forms for more than a decade.

He introduces the main topics to be covered, emphasizing the practical differences between signals, observables, and more traditional state management approaches. Listeners hear his intention to demystify these concepts by drawing on historical references, code examples, and modern-day scenarios. The speaker’s aim is to walk through the distinctions between runtime and compiled reactivity while touching on frameworks like Knockout, Vue, React, and others.

### 06:00 - 12:00 — Defining Reactivity and Signals

Here, the speaker dives into what “reactivity” truly means, referencing historical implementations like Knockout and the impact they had on early front-end development. He notes that signals—sometimes called observables in older contexts—have existed for years but have evolved with new APIs and nomenclature. By drawing a line between “fine-grained reactivity” (signals) and “stream-based reactivity” (RxJS), he highlights how each model excels at particular tasks.

The conversation zeroes in on the building blocks of signals: state, computed (or memoized) values, and effects. He uses simple examples to show how signals capture dependencies and trigger updates only where needed. This discussion lays a foundation for understanding more advanced frameworks that combine these concepts with virtual DOM or compile-time optimizations.

### 12:00 - 18:00 — Contrasting Signals with RxJS

Shifting focus, the speaker explains the key differences between fine-grained reactivity and RxJS-style streams. He describes RxJS observables as push-based, event-driven sequences of data, which often involve chaining multiple operators to manage flows like debouncing or combining streams. While powerful, RxJS can be overly complex for scenarios that merely require reactive templating.

By contrast, signals shine in UI scenarios where dependencies must be tracked more directly, such as updating a specific DOM node based on a single reactive source. The speaker presents concrete examples of how signals reduce boilerplate and mental overhead. At the same time, he recognizes RxJS as a robust tool for async operations, cautioning that the best choice often depends on the type of data manipulation needed.

### 18:00 - 24:00 — Historical Context and MobX Influences

In this section, the speaker underscores how libraries like MobX popularized certain patterns, particularly the distinction between observable state, computed derivations, and side effects. He notes that this three-part breakdown appears in nearly all modern reactive systems, including React Hooks, even if the latter takes a less granular approach. Historical references to frameworks like Knockout and Microsoft’s early Rx efforts reveal how these concepts traveled from desktop to front-end environments.

He also describes the “diamond problem” and glitch-free updates, demonstrating how fine-grained systems ensure consistent data flow without extra recalculations. Through these historical and technical anecdotes, the speaker lays the groundwork for why signals have re-entered the spotlight and how they connect to proven techniques from years past.

### 24:00 - 30:00 — Integrating Reactivity into Virtual DOM Systems

Now the conversation pivots to how signals and reactivity integrate—or sometimes clash—with virtual DOM libraries. The speaker highlights that while React or Preact can adopt signals, they typically rely on a component re-render model, which re-runs entire functions when state changes. He notes that signals, by design, seek to update only the parts of the interface that depend on the changing data.

The presenter provides code examples showing how libraries like Preact Signals and Recoil attempt to refine granular updates within a VDOM paradigm. This segment offers insight into where certain optimizations shine and where they fall short, demonstrating both the power and the trade-offs of marrying signals with a virtual DOM component hierarchy.

### 30:00 - 36:00 — Example Walkthrough: Minimizing Re-Renders

Zooming into concrete examples, the speaker shows how a simple list and a counter can reveal subtle performance pitfalls. He illustrates how a standard VDOM approach might trigger unnecessary re-renders of unrelated components or data structures, especially when they share parent-level state. By refactoring or using signals, it is possible to isolate reactivity so that only the relevant parts update.

He contrasts typical React or Preact code—where large sections of the tree might re-run—with a signals-based approach that localizes each change. This deeper demonstration clarifies why signals are considered a more precise tool for managing state, pointing out that while certain patterns can emulate these gains in VDOM libraries, they often require manual memorization or splitting code into extra components.

### 36:00 - 42:00 — Vue’s Hybrid Model and Benchmarks

Moving on, the speaker addresses how Vue blends a signals-like system under the hood with a compiler and virtual DOM approach. He references Vue’s transformation from version 2 to version 3 and describes how it refines performance through advanced optimizations, such as caching rendered fragments. Real-world benchmarks are brought up, showing where Vue excels and how it compares to fine-grained libraries like Solid.

He acknowledges that Vue’s approach represents a middle ground, achieving impressive efficiency via a hybrid model of reactivity and VDOM. Although not purely fine-grained at the UI level, Vue’s directive-based system often yields competitive performance, particularly when developers leverage features like `v-memo` or carefully break down components.

### 42:00 - 48:00 — Svelte’s Compiled Reactivity Approach

Here, attention shifts to Svelte, a framework that compiles reactivity away rather than running it in real time. The speaker shows how Svelte’s single-file components handle updates via automatic dirty-checking. Because each component’s state is tracked at compile time, Svelte can optimize the final output into straightforward DOM instructions without needing a general-purpose reactive engine.

However, Svelte’s approach also limits some of the dynamic capabilities that signals afford. The speaker points out that while the compiled model is extremely efficient, it may lack the flexibility to handle deeply nested reactivity or quickly switch dependencies at runtime. This trade-off again demonstrates that each framework’s choices are shaped by distinct philosophies around developer experience and performance goals.

### 48:00 - 54:00 — Deeper Look at Data Structures and Nested Updates

In this segment, the speaker explores the complexities of updating nested data structures. He explains how frameworks like Solid and Vue can target individual properties within an object, triggering only the minimal UI updates needed. By contrast, systems that rely on re-rendering entire components or subtrees can become less efficient when dealing with large or deeply nested data.

He highlights examples in which a single property change—such as toggling a checkbox within an array of items—should only affect the related DOM element. In more granular reactivity systems, that update can stay localized. In less granular ones, entire lists or parent components might re-run. This detail underscores the importance of aligning the data model with the reactivity engine for optimal performance.

### 54:00 - 1:00:00 — Control Flow and Conditional Dependencies

The conversation now focuses on how signals manage branching logic, such as toggling between different states or expressions. The speaker shows that with fine-grained systems, dependencies can shift seamlessly without re-runs of unrelated computations. For instance, toggling “show full name” can suspend any checks on the hidden “last name” portion, preventing redundant calculations.

He contrasts this with approaches that rely on explicit dependency arrays or full component re-renders, noting the added overhead or complexity. By illustrating these patterns in code, he reinforces why signals-based frameworks tend to handle conditional logic with minimal fuss while still preserving clarity. This sets the stage for discussions about optimizing large-scale applications.

### 1:00:00 - 1:06:00 — React’s Philosophy and “Pure” Rendering

At the hour mark, the focus turns to why React continues to favor a “render everything as a pure function” approach. The speaker notes that React encourages immutability and functional rendering to maintain a clean mental model. This design prioritizes predictability and debuggability, even if it sometimes leads to heavier re-renders that signals-based systems could skip.

He stresses that while signals avoid re-running components, React’s approach offers a consistent top-down paradigm that many developers appreciate. The speaker does not frame one method as definitively superior; rather, he underscores that each has trade-offs. React’s popularity partially stems from the simplicity and reliability of re-running pure functions with updated props, whereas signals treat updates as smaller, more targeted side effects.

### 1:06:00 - 1:12:00 — Hybrid Solutions and Complexity

Pivoting back to hybrid approaches, the speaker discusses how tools like MobX, Recoil, or Preact Signals inject fine-grained updates into a virtual DOM ecosystem. While these solutions can minimize certain re-renders, they also introduce additional complexity. Developers must decide how and where to store signals or atoms and be mindful of memory overhead from multiple reactive wrappers.

He acknowledges that these hybrid libraries can bridge the gap for teams invested in React or Preact, offering partial performance and DX gains without fully overhauling their stack. Yet each library adds its own trade-offs, whether it’s upfront learning curve, mental overhead, or puzzle-like configuration around hooking state into components.

### 1:12:00 - 1:18:00 — Glitch-Free Updates and Scheduling

The speaker dives into the concept of glitch-free updates, referencing frameworks that handle dependency resolution in a topological manner. Listeners learn that advanced reactive systems can sort out the order in which signals should compute to avoid inconsistent states. This ensures, for example, that derived values do not render intermediate steps or fire multiple unnecessary effects.

Additionally, he addresses scheduling concerns. Some frameworks batch updates for efficiency, while others proceed in a synchronous manner. The conversation underscores that reactivity entails not just detecting changes but orchestrating them to avoid race conditions or redundant computations. Handling synchronous versus asynchronous flows emerges as another dimension in choosing a reactive library.

### 1:18:00 - 1:24:00 — Compiler vs. Runtime Trade-Offs

In this segment, discussion returns to the comparison between frameworks that rely on a runtime (like Solid) versus those that compile away reactivity (like Svelte). Each method brings distinct benefits and constraints. A runtime approach can allow for more dynamic changes in dependency graphs, while compiled outputs generally reduce bundle sizes and overhead, though they can be less flexible.

He clarifies that the term “magic” has sometimes been applied to compiled frameworks, but the main difference lies in shifting logic from runtime to build time. Many developers appreciate not having to manually manage dependencies, while others prefer the explicit control that runtime reactivity offers. These choices influence not just performance, but also ecosystem tooling and library development.

### 1:24:00 - 1:30:00 — Memory Overhead and Ecosystem Shifts

The speaker notes that each additional reactive wrapper or effect can carry a memory cost. With large-scale apps, unbounded creation of observers can lead to bloat. He highlights solutions that group computations or scope reactivity to avoid performance bottlenecks. This detail helps clarify that “fine-grained” need not mean “infinite watchers” but rather targeted updates that minimize overhead.

The discussion also touches on how major frameworks consider reactivity under the hood. Projects like Angular with its upcoming signals feature and Vue with continued reactivity enhancements show that even well-established solutions see value in more granular updates. As these shifts occur, older approaches or libraries may converge on similar ideas, gradually raising the bar for what developers can expect from state management.

### 1:30:00 - 1:36:00 — Server-Side Rendering Implications

Turning toward SSR, the speaker underscores how signals and other reactive models can optimize hydration phases. Frameworks that avoid re-running entire components on load can significantly cut down on startup overhead. He mentions the potential for skipping client-side templates entirely if the data never changes, a strategy that some frameworks explore through partial hydration or selective reactivity.

The conversation highlights that reactivity influences not just front-end performance but also how teams approach server-rendered pages. Knowing which parts of an application require interactive updates allows developers to send minimal JavaScript for non-interactive sections. This can drastically improve time-to-interactive, especially on slower networks.

### 1:36:00 - 1:42:00 — Example: Large To-Do Applications

Returning to a real-world angle, the speaker references sizable to-do list apps that demonstrate how localizing reactivity can keep most of the interface static. Only the sections that truly change—like toggling an individual item—re-render. This pattern can be extended to filters, search, or any logic that selectively updates the UI.

He shows how signals-based libraries implement these patterns more intuitively, often letting developers write straightforward code without additional memorization or side-effect disclaimers. Meanwhile, purely component-based approaches might require more splitting into smaller segments or hooking into advanced memo APIs. This underscores the daily, practical implications of reactivity choices.

### 1:42:00 - 1:48:00 — Composition and Data Binding Details

In this interval, the speaker addresses how composition differs in frameworks with reactivity built into the language versus separate store utilities. He explains that while Svelte seamlessly compiles local variables into reactive statements, frameworks like Solid rely on explicit signal imports. Both approaches aim to preserve composition, but they differ in how the developer manages passing or exposing state.

Additionally, he covers data binding philosophies, from two-way binding to one-way flow with explicit set functions. Listeners learn that different frameworks favor different patterns to balance clarity, maintainability, and performance. The speaker points out that constraints in some frameworks help avoid unintentional complexity at scale.

### 1:48:00 - 1:54:00 — React’s Static Mental Model

Here, the conversation zeroes in on why React continues to value a “static mental model,” where each component re-renders based on new props or state. He references Dan Abramov’s writings about predictability, unidirectional data flow, and immutability forming React’s core philosophy. Signals, by contrast, handle updates more fluidly, but at the cost of partial mutability.

The speaker clarifies that both worlds can coexist: React prioritizes a style of programming that is easy to reason about from a purely functional perspective, while signals aim for minimal and precise updates. This philosophical tension shapes how React’s team thinks about adopting or rejecting deeper reactivity. Instead of discarding its roots, React opts for incremental improvements that preserve the top-down approach.

### 1:54:00 - 2:00:00 — Hybrid Patterns and Library Ecosystems

Attention shifts back to libraries seeking “the best of both worlds.” The presenter mentions that Recoil, Jotai, and even Preact Signals can integrate with React-like APIs, but each demands careful usage to avoid double rendering or memory overhead. He notes that large codebases already reliant on React might find these solutions viable stepping stones, even if they don’t match the elegance of fully fine-grained systems.

He reiterates that merging the reactive paradigm with a top-down rendering engine is inherently complex. Each library has carved its own path, whether by hooking directly into React’s scheduling or by layering specialized wrappers. These solutions raise interesting possibilities for developers who need higher performance without discarding an existing framework wholesale.

### 2:00:00 - 2:06:00 — Topological Sorting and Scheduling Nuances

The speaker revisits the technical underpinnings of reactive scheduling, examining how frameworks order updates to avoid conflicting computations. This ensures that derived state always reflects the most recent input changes. He touches on how some libraries group updates into batches, while others rely on synchronous cycles.

Within a signals context, he clarifies that each “signal” might push changes immediately, but an intelligent scheduler can hold off rendering until all relevant updates have been processed. This approach balances user experience, ensuring smooth updates, with performance, preventing thrashing or partial states. The audience gains insight into how these details shape real-time interactions like drag-and-drop or continuous input fields.

### 2:06:00 - 2:12:00 — Evolving Frameworks and Future Directions

Here, the discussion turns to the future of reactive frameworks. The speaker points out that Angular is exploring signals, Quick is refining a runtime reactivity approach, and even Vue may push deeper into compiler-driven optimizations through Vapor. These developments suggest a new wave of libraries that emphasize partial hydration, minimal JavaScript, and smarter runtime checks.

He also alludes to frameworks like Marco, which aim to compile away large chunks of runtime logic, potentially leading to minimal overhead in the browser. The speaker underscores that while no single solution is guaranteed to dominate, the direction is clear: more granular updates, less re-rendering, and a deeper focus on shipping less code for better performance.

### 2:12:00 - 2:18:00 — Server Components and Resumability

In these minutes, the speaker mentions server components—a pattern that shifts more work onto the server, reducing what must happen in the browser. He gives a brief look at how signals can mesh with server-side rendering to skip hydration for static sections. The result can be a significantly smaller JavaScript payload, faster startup times, and more scalable apps.

He refers to technologies like resumability, explaining how frameworks such as Quick or Marco attempt to “pause” component states on the server and “resume” them in the browser without a heavy re-run. While still experimental, these concepts hint at a future where reactivity is orchestrated across server and client for maximum efficiency.

### 2:18:00 - 2:24:00 — Solid’s Approach in Depth

Shifting focus, the speaker uses Solid as a prime example of a fully runtime, fine-grained reactive system. He notes that Solid’s compiler does minimal transformations, leaving signals at the heart of how updates propagate. The result is a system where components do not re-run, and changes are localized to exactly the data binding in question.

He reiterates that while this approach can yield impressive performance, it also demands thoughtful architecture, especially for large, complex applications. Yet, for many use cases, Solid’s model matches developer intuition, cutting out the need for extra memorization or advanced patterns. This part highlights how fine-grained reactivity meets real-world demands for clarity and efficiency.

### 2:24:00 - 2:30:00 — Nesting, Composition, and DX

The conversation continues with a look at deeper nesting scenarios and advanced composition patterns in Solid. He shows how signals and computed values stack neatly, producing intuitive flows even for nested objects or arrays. This can feel more natural than relying on top-level states or repeated memo calls.

Developer experience (DX) is a recurring theme, as the speaker notes how frictionless it can be to write updates when the framework natively tracks dependencies. The trade-off is that new learners might need time to grasp how signals differ from typical Redux-style or component-based states. Nonetheless, the payoff is a significantly smoother path to building complex UIs.

### 2:30:00 - 2:36:00 — Community and Ecosystem Growth

In this portion, the speaker addresses community-driven documentation, toolkits, and the value of shared knowledge. He points out that building an ecosystem around a reactive framework involves explaining both the big-picture benefits and the subtle, real-world scenarios. Articles, tutorials, and open discussions help developers climb the learning curve more smoothly.

He calls on enthusiasts to contribute tutorials or clarifications that extend beyond official docs. By fostering a community where questions can be answered and best practices shared, the potential of signals-based frameworks can be realized more broadly. He wraps up by stressing that strong documentation is essential for any technology that aims to shift common paradigms in front-end development.

### 2:36:00 - 2:42:00 — Q&A on Practical Usage

As the session nears its conclusion, the speaker answers a few listener questions about employing signals in existing React codebases, memory usage in large projects, and whether partial reactivity can replace standard approaches. He reiterates that each method has its place, cautioning that partial transitions often add complexity before they yield clear benefits.

He also highlights the importance of conceptual alignment within a team. If developers treat signals or reactivity as magical black boxes, confusion can arise. Adopting them effectively requires a mental model that embraces the idea of tracking individual data flows. Done well, however, signals can offer an elegant development experience.

### 2:42:00 - 2:46:12 — Final Thoughts and Wrap-Up

In the final minutes, the speaker thanks viewers for tuning in and reflects on the key takeaways: signals are not new but are receiving a surge of attention for good reason. They enable targeted UI updates, can reduce both conceptual overhead and runtime cost, and fit well with partial or full SSR. While frameworks differ in their approaches—runtime, compiler, or hybrid—the trend is toward more granular, efficient change detection.

He closes by hinting at ongoing experiments in bridging signals with server components, advanced scheduling, and compositional patterns. The talk ends on a note of possibility, suggesting that the full potential of signals is still being uncovered, and that community discussions are essential for pushing reactivity to its next stage of evolution.