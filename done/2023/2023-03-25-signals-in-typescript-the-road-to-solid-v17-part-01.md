---
showLink: "https://www.youtube.com/watch?v=2fW6JaJHoCE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Signals in TypeScript: The Road to Solid v1.7"
description: ""
publishDate: "2023-03-25"
coverImage: "https://i.ytimg.com/vi/2fW6JaJHoCE/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation covering SolidJS, TypeScript intricacies, React’s evolving ecosystem, and broader JavaScript frameworks, spanning over five hours of in-depth exploration.

## Episode Summary

This extensive discussion centers on advanced JavaScript frameworks and libraries, highlighting SolidJS, React’s latest developments, and TypeScript’s evolving role in shaping modern application design. The speaker shares insights on optimizing code, balancing strict type definitions with dynamic JavaScript patterns, and adapting to new rendering paradigms. They address common hurdles in framework development, from routing complexities to server and client synchronization. The conversation also looks at performance considerations, reflecting on how shifting toward server components and fine-grained reactivity changes the way developers structure and deploy applications. In particular, the talk underscores how different frameworks converge on similar performance patterns and how new compilation techniques can improve or replace existing APIs. Throughout, there is a clear emphasis on practical solutions, collaboration within the community, and maintaining flexibility in the face of ongoing JavaScript evolution.  

## Chapters

### 00:00:00 – Introducing the Stream and Initial Setup

In the opening moments, the speaker greets viewers and explains the purpose of the session, acknowledging the live stream format and interactive chat. They set the stage by outlining various topics, ranging from upcoming releases to TypeScript complexities in SolidJS and beyond. The speaker also discusses how community feedback shaped the focus of this stream, with particular mention of challenges in library development. These initial minutes serve to orient participants, inviting them to stay engaged for a multifaceted discussion.

During this segment, there is brief mention of recent online conversations about signals, reactive systems, and cross-framework comparisons. The speaker hints at lengthy Twitter Spaces debates, referencing multiple developers who participated in those discussions. They emphasize the relaxed atmosphere, noting that it takes time for viewers to trickle in and bypass pre-roll advertisements. Overall, this section underscores the casual yet informative environment, emphasizing how real-time questions from the chat might steer the conversation in unexpected directions.

### 00:10:00 – SolidJS 1.7 Overview and TypeScript Hesitations

As the stream progresses, the speaker introduces SolidJS version 1.7, highlighting the motivation behind its delayed release. They explain that a major part of the delay stems from complex TypeScript issues, including the challenge of ensuring consistent typing for signals, props, and other reactive elements. The speaker candidly admits not being a TypeScript expert but credits contributors who guided critical decisions. This lays the groundwork for deeper explorations of how a typed environment can impact framework design.

They stress the significance of accurate TypeScript definitions in fostering developer confidence and preventing subtle bugs. Illustrating how typed code can become akin to a painting process, the speaker underscores the difficulty in balancing strong constraints with JavaScript’s inherent flexibility. Despite personal reservations, they acknowledge TypeScript’s value as a powerful form of auto-linting and a means to detect errors earlier. This viewpoint foreshadows the more detailed discussions to come about pushing SolidJS to align better with TypeScript conventions.

### 00:20:00 – Early Reflections on Solid’s Growth and Community Feedback

Here, the speaker pivots to reminisce on SolidJS’s earlier versions and how server rendering and reactivity formed the backbone of its 1.0 release. They recall post-launch refinements through versions 1.3 to 1.5, addressing issues discovered only once real-world projects scaled up. By referencing specific bug fixes—such as mutable proxies and batching—they reveal how maintaining a lightweight, high-performance approach demanded careful negotiation of each additional feature or patch.

The community’s increasing usage of SolidJS, including enterprise adopters, surprised the speaker by revealing unexpected edge cases. This prompts a reflection on how frameworks evolve from experimental playgrounds to dependable production tools. They also note the formation of a reactivity working group and the decision to gather broader input from experienced developers. The speaker emphasizes that staying receptive to such feedback remains crucial for ensuring SolidJS remains efficient, intuitive, and forward-looking.

### 00:30:00 – Shaping SolidJS 2.0 and Refined TypeScript Integration

Discussion turns to SolidJS 2.0 as an overarching goal, introducing deeper changes to the reactivity model. The speaker mentions that while 1.7 includes key signals adjustments, the larger 2.0 release is set to incorporate bigger breaking changes. They underscore the tension between ensuring backward compatibility and not hampering the performance gains that reactivity offers. Alongside these technical deliberations, the speaker points out that type definitions will play an even greater role in clarifying the library’s usage patterns.

Expanding on the TypeScript emphasis, the speaker describes how internal refactoring might simplify the type system for third-party library authors. Observing that community-driven libraries often encounter friction, they plan to unify or standardize typing across official packages. The speaker also comments that the line between “just letting JavaScript do its job” versus “enforcing rigorous types” can be difficult to maintain. Ultimately, they propose a future where typed and untyped worlds coexist without adding undue complexity for new or advanced developers.

### 00:40:00 – Signals, Functions, and Eliminating Ambiguities

In this segment, the speaker dives into a recurring problem: developers passing functions around inadvertently, causing confusion about which parts of the code should be reactive. They cite numerous GitHub issues where people attempted to treat signals as normal objects or passed them as children, leading to unexpected rendering behaviors. By restricting certain patterns through stricter TypeScript definitions, the SolidJS team aims to guide newcomers away from these pitfalls and ensure more predictable composition.

They illustrate how these changes foster local reasoning, where a developer doesn’t have to worry about the entire tree’s reactivity state. The speaker references real-world confusion around the “show” component and how function signatures forced illusions of possible null values. TypeScript, acting as an advanced linting tool, can now refuse certain invalid operations. This approach, while breaking older code, sets a clearer standard for future designs, ultimately resulting in more maintainable, readable, and reliable applications.

### 00:50:00 – Input Elements, Event Handlers, and Browser Inconsistencies

Attention shifts to the nuance of input events and how React diverges from raw DOM behavior. The speaker notes that in standard JavaScript, onChange triggers on blur, whereas React coalesces behavior to simulate immediate updates. In SolidJS, using onInput is more accurate for real-time reflection of user input, but TypeScript’s type definitions often hamper direct property access on targets. The new approach in Solid 1.7 normalizes the event’s target, simplifying how developers retrieve values.

They acknowledge that addressing subtle differences—like the distinction between target and currentTarget—proves crucial for a smooth developer experience. By merging advanced type checks with expected DOM usage, the library can reduce friction for authors who anticipate immediate real-time updates. Yet, the speaker concedes that aspects of event delegation can sometimes complicate the type system. Overall, these clarifications underscore the complexity of bridging raw browser APIs with the strong typing demanded by modern JavaScript development.

### 01:00:00 – Null Assertions and Control Flow Challenges

At this juncture, the discussion becomes more complex, focusing on how the SolidJS “show” component interacts with TypeScript’s attempts to narrow types. If a piece of data is conditionally displayed, TypeScript may still consider it possibly null, forcing developers to add exclamation marks or checks. The speaker reveals that attempts to fix this by inferring non-null status can introduce other problems, like reactivity inconsistencies when data changes out of band.

They weigh the pros and cons of various solutions, from returning stale data to forcibly throwing runtime errors. The conversation highlights a deeper tension between a runtime that can change data unpredictably and a type system that wants static assurance. While strictly accurate typing might demand defensive checks or function callbacks, the speaker remains mindful that each approach brings trade-offs for both performance and DX. Finding a balance that pleases all TypeScript enthusiasts without undermining reactivity remains a nuanced undertaking.

### 01:10:00 – Keyed vs. Non-Keyed Rendering and Performance Considerations

Here, the speaker delves into a performance pitfall where using keyed rendering can trigger complete rerenders, reminiscent of approaches in older virtual DOM frameworks. Although keyed strategies provide better type-narrowing, especially for TypeScript, they undermine the fine-grained updates that SolidJS typically employs. This observation highlights how developers might unintentionally degrade performance just to avoid extra type checks.

Hoping to provide clarity, the speaker explains that SolidJS’s approach optimizes partial rendering and allows only the specific parts of the DOM to update. By restricting function-based children in certain scenarios, the framework can strike a healthy compromise between typed correctness and incremental updates. Nonetheless, there remains a faction of TypeScript users who favor keyed patterns for guaranteed type safety. Balancing these two desires—efficient reactivity and robust typing—shapes many of the 1.7 design choices.

### 01:20:00 – Error Handling Shifts: From onError to catchError

Continuing the 1.7 release notes, the speaker identifies the shift away from `onError` to a new `catchError` primitive. This modification arises from confusion when multiple sibling components registered separate error callbacks that might conflict. The new approach, likened to a try-catch structure, encourages a single primary handler to maintain predictable error boundaries.

While many developers rely on standard error boundaries instead, the updated primitive provides advanced control for those building custom solutions. The speaker illustrates how the new `catchError` fosters a more linear path of error handling—developers wrap code segments much like nested try-catch blocks. By reducing guesswork about the order of error resolution, SolidJS moves closer to a more transparent design that better aligns with typical debugging workflows.

### 01:30:00 – Dev Tools Performance and Store Serialization

Attention turns to the improved dev tools performance in development mode. Previously, large stores with tens of thousands of items could significantly slow down debugging because of how identifiers were created. Removing these unique ID generators, which dev tools did not ultimately require, results in faster inspections of reactive graphs and memory usage. This optimization highlights the speaker’s ongoing mission to refine the developer experience without sacrificing speed or clarity.

The speaker also references a new serializer for server-side data, derived from community work to handle circular references and large data structures more efficiently. Performance benchmarks demonstrate how this updated approach outpaces many typical JSON-based serializers. Although real-world impact may vary, these refinements underscore SolidJS’s emphasis on low overhead solutions. Carefully curated third-party contributions play a vital role, reflecting a broader ecosystem effort to push the boundaries of both client and server performance.

### 01:40:00 – Handling DOM Cloning and Template Validation

Pivoting to template-based rendering, the speaker addresses tricky scenarios where the browser automatically inserts certain elements (like `<tbody>` in `<table>`) or escapes code inside `<noscript>`. These behaviors can conflict with a framework’s internal logic, which assumes unaltered templates. By adding compile-time checks or runtime validations, SolidJS aims to catch mismatched tags and ensure templates remain consistent.

They note how such corner cases may appear only when hydration attempts to match server-generated HTML with client expectations. The conversation references how older approaches might rely on a simpler VDOM diff, but SolidJS’s approach merges partial hydration with direct DOM cloning. This methodology can be sensitive to small changes introduced by browser quirks. Consequently, the speaker highlights efforts in 1.7 and beyond to refine these checks and guarantee a more foolproof hydration process.

### 01:50:00 – View Vapor Inspiration and Template Optimization

The speaker next mentions a new reference point called “View Vapor,” showcasing how the Vue community similarly leverages template cloning and direct DOM manipulation. Observing that these patterns align closely with what SolidJS has done, the speaker underscores a shared momentum among frameworks. They note that template-based rendering can drastically reduce overhead compared to naive approaches.

They reflect on early decisions in SolidJS about limiting or trimming whitespace around text nodes. While it helped improve performance and reduce hydration anomalies, it also complicated cases with precisely spaced content. By comparing with approaches from other projects, including Vue Vapor, the speaker sees an opportunity for synergy. Each framework’s experiments inform the others’ strategies for bridging the gap between convenient markup, user expectations, and minimal runtime overhead.

### 02:00:00 – Tree Shaking Adventures and Rollup Nuances

During this interval, the speaker narrates their deep investigation into how Rollup handles tree shaking, especially in scenarios where transitional flags or branching logic exist. They highlight the delicate interplay between JavaScript code transformations and bundler optimizations. Removing certain expressions or rewriting conditions from logical OR statements to ternaries made a surprising difference in final bundle size.

They also mention that try-catch blocks can interfere with dead code elimination, preventing Rollup from removing inactive branches. This discovery led to code reorganizations in SolidJS, ensuring hydration and transition features can be fully removed if unused. While the changes yield a few hundred bytes of savings, they illustrate the speaker’s laser-focused attention on minimal overhead. The overall lesson is that each bundler version might require reevaluating these patterns to keep bundle sizes as small as possible.

### 02:10:00 – Granular Transition Checks and Shared Config

Continuing the bundler theme, the speaker describes how SolidJS uses a global or shared configuration object to note when features like hydration or advanced transitions become active. At one point, changes in Rollup’s behavior caused entire chunks of transition code to remain in the final build, inflating output size. By explicitly setting certain object keys to `undefined`, they restored the ability to tree-shake these features when not in use.

These refinements highlight the complexity of shipping multiple optional features. SolidJS must track each capability—like concurrency or suspense—to remove overhead for projects that don’t require them. The speaker celebrates that, with these adjustments, minimal builds remain exceedingly small. Ultimately, this approach exemplifies the library’s ethos of providing advanced functionality while ensuring a light footprint for users who only need core reactivity and straightforward rendering.