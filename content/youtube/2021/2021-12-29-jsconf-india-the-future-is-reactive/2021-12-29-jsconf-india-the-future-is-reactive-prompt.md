---
showLink: "https://www.youtube.com/watch?v=vHy7GRpTpm8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JSConf India - The Future is Reactive"
description: ""
publishDate: "2021-12-29"
coverImage: "https://i.ytimg.com/vi/vHy7GRpTpm8/maxresdefault.jpg"
---

## Episode Description

A talk that explains how fine-grained reactivity powers modern JavaScript UI frameworks, with a focus on building more efficient and predictable applications.

## Episode Summary

This presentation focuses on the concepts, advantages, and practical applications of fine-grained reactivity in building modern JavaScript user interfaces. It demonstrates how signals, effects, and derived computations can be leveraged to automatically synchronize and update UI elements without the overhead of repeated component re-renders. With references to Knockout, MobX, Svelte, Vue, and React, the speaker shows how these frameworks implement reactivity under different names and APIs but revolve around similar core ideas. He then introduces the foundational principles behind Solid, a fast and efficient UI library that uses these reactive principles to compile down to minimal DOM updates. Throughout, the speaker illustrates how reactivity provides clearer mental models and improved performance, whether by reducing unnecessary computations or streamlining state management. By the end, listeners gain insight into how reactivity underpins cutting-edge frameworks, setting the stage for future advancements in JavaScript development.

## Chapters

### 00:00:00 - Introduction and Foundations

In the opening moments, the speaker frames reactivity as the bedrock of many modern JavaScript UI frameworks. He underscores the importance of modeling relationships between data points that stay in sync over time, comparing reactivity to the continual calculations found in spreadsheet formulas. By using jokes and basic examples, he reduces the complexity often associated with reactive programming, clarifying that it’s more than a buzzword. This context sets up the talk to explore how reactivity shapes the way developers approach building dynamic interfaces. Along the way, he references the notion that reactivity is a universal language, guiding both data flow and UI behavior across frameworks.

The speaker outlines several core traits that make reactivity compelling, particularly its declarative nature and the ease with which it handles dynamic user interactions. Instead of relying on manually orchestrated state updates, a reactive system ensures that code describing one variable’s relationship to another remains valid as time progresses. This approach reduces accidental complexity by letting developers focus on the logic rather than the intricacies of event handling. By highlighting these qualities, the speaker sets the stage for deeper exploration into the mechanics and real-world impacts of reactivity.

### 00:05:00 - Signals and Their Role in Fine-Grained Reactivity

In this segment, the focus shifts to signals, which are presented as the fundamental building blocks of a reactive system. The speaker showcases how a signal holds a single piece of state with a getter and setter, allowing easy subscription and propagation of changes. By contrasting signals with reactive streams and enumerating frameworks that use them—such as Knockout, MobX, Vue, and Svelte—he illustrates their broad adoption. Each example reveals how signals simplify synchronization, letting developers represent shifting data without the boilerplate required by more traditional observer patterns.

The conversation highlights the elegance of fine-grained updates, whereby only the areas of an application tied to changing signals are re-evaluated, rather than triggering a sweeping re-render. This localized approach offers both performance benefits and clearer mental models. The speaker demonstrates that while each framework labels signals differently—ref, observable, or atom—the concept remains the same. Emphasis is placed on how these structures, though simple, form the basis for more advanced computations, enabling developers to manage state more intuitively and effectively.

### 00:10:00 - Effects as Side-Effectful Reactions

The next portion explores effects, which handle work that must occur whenever a signal’s value changes. Rather than forcing developers to manually track dependencies, effects automatically run in response to updates, triggering functions that reflect the new state. The speaker describes how frameworks register and clean up these subscriptions behind the scenes. By maintaining a stack of active observers, signals can pinpoint exactly which computations need refreshing. This mechanism eliminates extra steps and ensures that UIs or data pipelines remain coherent as underlying values shift.

Examples from different libraries highlight the universal nature of effects, where each system introduces subtle distinctions but retains the same core logic. Whether labeled as watchers, reactions, or auto-runs, these constructs unify both data binding and application workflow. By simplifying how changes propagate, effects turn reactive code into a predictable series of cause-and-effect relationships. This fluidity enhances maintainability, as developers can be confident that individual pieces of the system won’t fall out of sync, a critical feature for complex interfaces or rapidly evolving data streams.

### 00:15:00 - Derived Values and Computed State

Moving on, the speaker introduces derived values—often referred to as computed or memoized data—which minimize redundant calculations in reactive systems. By caching results, derived values recalculate only when their dependencies change, reducing overhead and improving efficiency. Through examples like concatenating a user’s first and last name, the talk demonstrates how memoized computations can power dynamic displays in various parts of an application. This approach prevents wasted work, ensuring that code depending on multiple signals updates only when relevant inputs have changed.

The speaker also addresses real-world scenarios where operations might be more intensive than string concatenation. By leveraging derived values, developers can perform heavier tasks—like filtering large datasets or calculating mathematical results—without repeating that work unless necessary. This pattern underlines the flexibility of fine-grained reactivity, allowing any logic to be encapsulated as a stand-alone computation. As an added benefit, derived values can further subdivide an application’s state, letting different UI components access the transformed output without incurring additional expense or risking inconsistent data.

### 00:20:00 - Synchronous Execution and the Early Days of Reactive Libraries

In this section, the talk shifts to the broader historical perspective of fine-grained reactivity in JavaScript, referencing early frameworks that attempted to unify state and view layers. These pioneering efforts often ran into unpredictable execution flows or infinite loops, especially when two-way data binding was prevalent. The speaker contrasts this with a synchronous model, where each update runs to completion before the next begins, ensuring consistency. This idea of glitch-free execution underscores how reactivity can feel much more natural when updates happen in a controlled, step-by-step manner.

By establishing clear rules for when computations fire and in what order, a framework can seamlessly handle complex data relationships. The talk emphasizes that, beyond resolving uncertainty, synchronous updates enable advanced features like partial rendering and granular subscriptions. Rather than discarding reactive ideas in favor of a virtual DOM or other reconciler, the speaker suggests that well-managed reactivity can deliver better performance and a simpler mental model. The goal is to maintain a stable, logical flow without sacrificing the ability to compose and reuse reactive behaviors.

### 00:25:00 - Building an Entire UI with Reactivity

Here, the conversation spotlights a crucial insight: a UI can be built entirely through nested effects that update only the parts of the DOM affected by specific state changes. The speaker shares how this concept departs from the component-based architecture in frameworks like React, where entire components may re-render regardless of how little has changed. Instead, with fine-grained reactivity, each piece of the interface subscribes to the signals it needs, so only those elements update when their dependent data shifts.

The presenter compares this onion-like approach to a hierarchy of effects, each nested within the scope that needs its results. This arrangement removes the pressure on developers to break down their applications purely for performance reasons, allowing them to structure code for clarity. With each reactive unit tethered to a specific state, updates cascade precisely where required, without flooding the rest of the system. This streamlined model underpins the key advantage of fine-grained reactivity: it respects boundaries imposed by the data itself, not arbitrary divisions in the code.

### 00:30:00 - Solid’s Compilation Strategy and Component Independence

The spotlight then turns to Solid’s approach, where JSX compiles directly to low-level DOM instructions. Instead of reconciling a virtual DOM, Solid produces specialized functions that manipulate only the nodes tied to changing signals. The talk walks through code samples that show how a seemingly normal JSX component, including context and state, compiles into small, efficient DOM operations. Through console logs and incremental updates, the speaker illustrates how each piece of data tracking is independent of higher-level structures like components.

This design allows components to run only once, establishing subscriptions that persist indefinitely. Even if a component is nested within other components, the reactive framework ensures that it re-renders only the exact fragments of the DOM that require changes. Unlike systems bound to a refresh cycle at the component level, Solid’s fine-grained architecture centers on state rather than function calls. By demonstrating real-time counters and context usage, the speaker highlights how minimal overhead and precise updates improve user experience and code readability.

### 00:35:00 - The Future of Reactivity and Universal Applications

As the talk nears its conclusion, the speaker emphasizes that reactivity is increasingly recognized as a universal pattern for synchronizing state across different platforms. Whether rendering to the DOM, mobile apps, or custom backends, signals and effects remain a dependable foundation. The talk references projects that convert reactive code into multiple frameworks or adopt partial hydration strategies, enabling smaller bundles and faster loads. By focusing on relationships between data sources and outputs, frameworks can analyze dependencies to streamline JavaScript delivery without losing functionality.

Ultimately, reactivity serves as a shared language that unifies diverse libraries under a common paradigm. The ease of tracking and updating state fosters a more consistent development experience, while also enabling advanced scheduling or concurrent rendering techniques. Closing remarks underscore that the power and versatility of fine-grained reactivity are only beginning to be fully realized. New iterations of libraries like Solid continue to push boundaries, hinting that the future of JavaScript development may revolve around these reactive techniques, revolutionizing the way we think about building interactive experiences.