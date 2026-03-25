---
showLink: "https://www.youtube.com/watch?v=87D15Gu1d6w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS v1.8"
description: ""
publishDate: "2023-10-06"
coverImage: "https://i.ytimg.com/vi/87D15Gu1d6w/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation about SolidJS v1.8, covering new serialization methods, hydration improvements, and the evolving ecosystem of reactive JavaScript frameworks.

## Episode Summary

This transcript provides an in-depth exploration of SolidJS 1.8 and its broader context in the JavaScript ecosystem. It begins by laying out motivations behind the latest release, such as improved serialization and the groundwork for potential “resumability” features. As the discussion progresses, topics turn to hydration intricacies, including difficulties posed by streaming data and the complexities involved in reconciling server-rendered code with client updates. The speaker also addresses potential pitfalls in creating reactive libraries, highlighting trade-offs between developer experience and raw performance. Real-world scenarios, like working with class lists and edge-cases in transitions or resources, illustrate challenges faced by maintainers and users alike. Throughout, references to community experiments, other frameworks’ approaches, and larger platform trends help underline why these updates matter. By the end, the discussion situates SolidJS within a quickly evolving landscape, suggesting that the project’s next phases will hinge on refining core primitives and balancing developer-friendly features with minimal overhead.

## Chapters

### 00:00:00 - Introduction and Stream Setup

In this opening segment, Ryan greets viewers and explains that he is experimenting with a different streaming resolution. He highlights a desire to cut down on unnecessary costs while maintaining decent quality, acknowledging that 1080p streaming may not be crucial for the type of content he presents. Listeners hear early chat greetings and learn that several viewers are curious about upcoming changes in SolidJS. Ryan briefly mentions bugs he's experienced with chat systems and streaming platforms, setting the stage for a deep technical conversation about building SolidJS v1.8.

He transitions into talking about the broader software ecosystem, alluding to alternative methods of shipping JavaScript frameworks. Ryan expresses interest in how frameworks manage code-splitting and lazy-loading, referencing ideas like “mini apps” and connectivity constraints in certain regions. Although he quickly clarifies that the main purpose of the stream is to focus on the upcoming SolidJS release, these opening minutes set a relaxed pace. They also foreshadow the depth of discussion on how Solid approaches technical hurdles, especially around performance and user experience.

### 00:06:00 - Overview of SolidJS v1.8 Goals

Ryan shifts focus to a high-level overview of the SolidJS v1.8 release, emphasizing that much of the work centers on internal improvements rather than flashy new features. He describes how these internal changes lay the groundwork for potential future developments, including more advanced solutions for streaming and data serialization. By tying performance objectives to real-world funding initiatives, such as the Chrome Aurora program, Ryan underscores how Solid’s development is partly driven by measurable metrics like Core Web Vitals.

He then explains why the team is deconstructing existing asynchronous patterns in Solid, specifically around `createResource`, to better separate concerns like serialization, data propagation, and streaming. This separation is portrayed as a stepping stone for bigger refinements in 2.0, including potential rewrites of certain core pieces. The conversation also touches on collaborative efforts with other developers, highlighting work on universal reactive primitives that might extend beyond Solid. Listeners get a sense that v1.8 is a quiet but crucial iteration, paving a smoother path toward major enhancements.

### 00:12:00 - New Serialization and Islands Concerns

Here, Ryan delves into practical examples showcasing Solid’s new serialization approach. He references a Hacker News demo built with Astro, noting the challenges of serializing data in nested or recursive structures when employing an “islands” architecture. He clarifies how repeated data might be streamed multiple times if each nested component re-serializes the same payload, negatively affecting performance. Solid’s updated serializer aims to solve this by de-duplicating identical objects, ensuring no repeated payloads appear in the final HTML.

Ryan walks through how the new deduplication mechanism works at runtime, using a weak map on the server and a reference array on the client. This pairing ensures that deeply nested data structures—be they objects, promises, or sets—get serialized only once. Although some overhead exists in script complexity, he argues the benefits of smaller repeated data far outweigh extra lines of code. This thorough explanation sets the tone for how Solid 1.8 invests in internal plumbing, giving developers more robust and efficient server-to-client data handling.

### 00:18:00 - Streaming and Out-of-Order Rendering

Ryan continues examining the nuances of streaming data serialization, remarking how Solid’s method integrates with out-of-order streaming. He revisits older versions of Solid’s server-rendering code, contrasting the new approach with past hacks that used array structures to store promise resolutions. By simplifying the logic into a dedicated serializer, Solid 1.8 removes complexities around blocking and deferring promises, establishing a more straightforward path for resources that must be ready before the initial HTML flush.

He highlights how streaming can bring partial content to the browser earlier, improving perceived performance on slow connections. At the same time, Ryan recognizes the intricacies of error handling during streaming, citing potential fallback strategies if a connection breaks mid-stream. He notes that while partial hydration strategies have proven valuable, they also introduce edge cases requiring careful testing. Throughout, Ryan stresses how foundational adjustments in 1.8 address immediate issues and set the stage for more resilient solutions in subsequent versions.

### 00:24:00 - Compiler Nuances and JSX Transform

The conversation turns briefly to bundler-level concerns. Ryan discusses how certain transformations, particularly for clients like Bun or Deno, can complicate Solid’s specialized JSX compilation. He points out that relying on a “standard” JSX transform, originally designed for React, leads to suboptimal or broken outcomes when used with Solid. These transformations lack the intelligence Solid needs to produce optimized DOM expressions, thereby negating the performance benefits that define Solid’s architecture.

Ryan explains that special care must be taken to integrate Babel or dedicated SWC plugins for Solid’s syntax. While some developers desire a “no-build” approach or universal transforms, he stresses that deeper compilation is essential to achieve the minimal overhead Solid prides itself on. He mentions ongoing experimentation to expand Solid’s compiler support to platforms like Bun, but warns that full integration involves more than just toggling a pragma. This clarifies why specialized tooling remains a cornerstone of Solid’s performance story.

### 00:30:00 - Debunking Misconceptions and Fine-Grained Reactivity

Ryan addresses common misunderstandings that come from broad comparisons among frameworks. He jokes about how people sometimes reduce Solid to a “React clone” or claim it has two-way binding, underscoring that such assessments usually come from surface-level impressions. In reality, Solid’s approach to reactivity is more akin to libraries like Knockout or advanced pattern matching that extends beyond React’s mental model. He emphasizes that distinguishing true mechanical differences is crucial to appreciating how Solid uniquely optimizes rendering.

Listeners also hear about interactions with other ecosystems, like Angular’s signals and potential overlaps with Solid’s fine-grained approach. Ryan suggests that the introduction of signals alone doesn’t guarantee the same performance improvements unless the entire render pipeline supports fine-grained updates. He references real-world examples of partial or incomplete adoptions, showing how subtle differences in architecture can impact outcomes. This segment underscores the complexity of adopting signals widely, requiring deeper changes than simply adding a new reactive primitive.

### 00:36:00 - Hydration Improvements and Lazy Loading Fixes

Ryan’s focus returns to 1.8’s upcoming release, clarifying that while it has no massive headline features, it reworks pivotal internals. He highlights improvements to hydration, mentioning how top-level fragments and lazy components have historically caused edge-case hydration bugs. By modifying how arrays and child nodes are gathered during hydration, Solid 1.8 resolves common issues of mismatch or duplication, making hydration more consistent in scenarios where multiple nested components share overlapping DOM structures.

He recounts how certain complicated permutations involving portals or lazy loading once led to unpredictable behavior. The updated approach now references the actual DOM range at the time each component hydrates, rather than relying on complex guesswork. This addition might slightly increase overhead but dramatically reduces errors when reassembling server-rendered markup on the client. Ryan describes it as a careful balance between performance and correctness, noting that real-world usage often favors fewer surprises during rehydration.

### 00:42:00 - HTML Parsing Quirks and Template Tricks

In these moments, Ryan dives deeper into the intricacies of HTML parsing rules and how self-healing behaviors in browsers can introduce unexpected elements like `<tbody>` tags. He explains how browsers often normalize markup, potentially adding or removing tags behind the scenes. Although beneficial when incrementally building DOM in JavaScript, it can lead to mismatches in server-rendered HTML. This mismatch is tricky to detect, prompting Ryan to comment that rigorous validation is too costly to perform in production.

He highlights small performance optimizations, such as omitting unnecessary closing tags or using single-character markers for comments. While they may seem trivial, these choices shave off bytes and speed up parsing. Yet each optimization must be carefully vetted to avoid breaking validators or support edge cases. The discussion touches on how Solid’s compiler leverages HTML quirks to streamline generated output. These remarks underscore the level of detail required to push performance boundaries in real-world scenarios.

### 00:48:00 - Class Handling and the Future of `classList`

Ryan turns to `classList`, candidly calling it one of his biggest design regrets. He explains how `classList` can clash with the standard `class` prop, leading to edge cases where they override each other or merge unpredictably. Though many frameworks have tried to unify class management elegantly, the interplay with spreads and SSR can become awkward, creating confusion for both library authors and end users.

He outlines potential paths forward, such as moving `classList` into a directive-like syntax to isolate its behavior. However, he also notes how seamlessly toggling classes is desirable for performance, so removing it outright could degrade experience. Ryan assures listeners that future versions might refine this area, but warns it’s not a simple fix. This portion of the transcript highlights how even seemingly small design decisions can spiral into major points of friction in a reactive, performance-centric library.

### 00:54:00 - Directives and TypeScript Tree-Shaking Woes

Ryan discusses directives more broadly, admitting they can be awkward due to how TypeScript handles tree-shaking at compile time. If a directive is imported but appears unused from TypeScript’s perspective, it might get removed prematurely, causing the actual directive logic to vanish. This is not just a bundler puzzle but a fundamental constraint of TypeScript’s architecture. He recounts attempts to patch or override these behaviors, revealing how custom directives can quickly become a minefield for typing and compilation.

Still, directives can address certain low-level DOM needs. They offer a neat way to specify specialized behaviors without polluting element props. Yet, that neatness evaporates once developers want to pass these directives through component boundaries or spread them across multiple levels. Ryan suggests that rethinking how directives are registered or applied might be necessary for better ergonomics. Nonetheless, he advises caution, pointing to real usage patterns that sometimes fall apart once the code is separated into distinct modules.

### 01:00:00 - Reactive Callbacks and Untracking

Ryan explores potential hazards when event handlers are invoked inside reactive scopes. He cautions that developers can unintentionally capture signals, triggering unexpected updates or re-renders. While powerful in the right contexts, signals can cause confusion if you assume an event remains static. Ryan highlights how features like `untrack` prevent signals from being read when you don’t want them to be, letting developers separate user-driven actions from automated reactivity.

He likens the design constraints of these issues to Svelte’s scope-based reactivity versus a more stack-based approach in frameworks like Solid. Each method has trade-offs, especially when bridging user-defined callbacks that can traverse multiple layers of the application. Ryan stresses that library authors often untrack or isolate user code, preventing accidental signal subscriptions. Overall, it’s a reminder that while reactivity can be incredibly efficient, it demands careful structuring to avoid hidden dependencies and performance pitfalls.

### 01:06:00 - Asynchronous Life Cycles and `onCleanup`

Ryan dives into how JavaScript’s synchronous execution model affects `onCleanup` usage in asynchronous flows. Placing `onCleanup` after an `await` statement simply doesn’t work because once the function suspends, the reactive scope effectively ends. He notes that developers expecting cleanup logic to run after async tasks complete may be surprised by this limitation, which is inherent to the language itself rather than a Solid-specific quirk.

He mentions that Solid sometimes emits dev-mode warnings for these scenarios, but can’t catch all edge cases. Not everyone realizes that reacting to signals inside asynchronous code demands deliberate patterns, or you risk side effects persisting unexpectedly. The conversation solidifies that bridging reactivity and async logic is never fully seamless. Developers must ensure their mental models match how signals and scopes genuinely behave under the hood, rather than relying on intuitive guesswork.

### 01:12:00 - Resource Mutation Challenges

Ryan acknowledges that `createResource` was initially designed for straightforward data fetching, not complex deep mutation. He notes that once you deal with more sophisticated scenarios—like partial object updates—you can’t simply patch nested keys. Instead, you must replace the entire resource value. Though external store options help, these patterns can become messy, reflecting a gap between “quick fetch” use cases and advanced data management.

He hints that splitting out resource logic from the store layer might be on the roadmap for Solid 2.0. By allowing more granularity, developers could merge server-fetched data into local state without forcibly reassigning entire objects. This shift reflects lessons learned from trying to blend two concerns—data fetching and local updates—into one API. Ryan’s broader point is that while `createResource` can handle many tasks, truly advanced scenarios merit more modular design.

### 01:18:00 - Transitions, Suspense, and State Mismatches

Ryan addresses how transitions—used to batch signal updates—may skip showing certain intermediate states like “refreshing.” He compares this to React’s concurrent rendering, where certain ephemeral loading or error states don’t appear if they’re bypassed by faster transitions. Many developers love built-in loading flags on resources, but these can conflict with transitions in real apps, leading to hidden reactivity flows.

He reflects that unifying resource states (e.g., “loading,” “refreshing,” “error”) with global concurrency features complicates everything. Suspense boundaries or top-level transitions can override local indicators, making data feel out of sync. He suggests that a more cohesive approach, possibly reminiscent of how frameworks like React handle global app states, might be better than partial wrappers. Even so, combining transitions, streaming, and strong reactivity remains intricate, hinting at deeper future refactors for Solid’s async architecture.

### 01:24:00 - Community Feedback and 2.0 Aspirations

Ryan revisits how user requests reveal Solid’s 1.x limitations, particularly around concurrency, streaming, and reactivity. While 1.8 solves hydration consistency, it doesn’t reinvent the asynchronous model. He sees 1.8 as a stepping stone, fixing immediate friction points and cleaning up code. Down the line, a bigger 2.0 overhaul could reshape the library’s approach to tasks like data fetching, transitions, and partial updates, guided by the lessons learned in 1.x.

He stresses caution in rolling out sweeping changes. The community has gotten comfortable with existing APIs, even if they’re occasionally clumsy. Introducing new primitives or deprecating old ones demands a thoughtful path to avoid breakage. Nonetheless, the prospect of streamlining advanced reactivity, controlling transitions more intuitively, and eliminating resource confusion motivates the Solid team. It’s a balance of incremental growth and innovative leaps—an approach that has kept Solid stable while still pushing boundaries.

### 01:30:00 - Platform Constraints and Streaming Deployments

At this point, Ryan dives into the broader ecosystem again, noting how serverless providers differ in their support for streaming. AWS historically lagged in streaming capabilities, while platforms like Vercel implemented workarounds to enable partial hydration. Now that serverless streaming is more accessible, Solid can lean on it for better SSR performance. This synergy between frameworks and infrastructure lays the groundwork for quick, fluid user experiences across diverse hosting environments.

Ryan highlights that streaming is not just about faster time-to-first-byte; error handling and fallback strategies come into play when connections drop or data arrives in unexpected order. Solid’s approach aims to unify the server’s perspective with the client’s, ensuring minimal overhead in rehydrating or replaying missed segments. Though still an evolving space, it’s clear that robust streaming solutions must coordinate between runtime frameworks and deployment platforms for truly seamless delivery.

### 01:36:00 - Microtask Batching and Fine-Grained Control

Ryan describes how Solid batches microtasks so multiple updates can be sent in a single flush. This technique avoids injecting repeated scripts or data chunks for each resolved promise, enabling better compression and network performance. It’s a subtle optimization that underscores Solid’s meticulous approach to shaping HTML outputs, especially critical when dealing with complex, nested data structures in real-world apps.

He acknowledges that these micro-optimizations demand careful orchestration of tasks—like ensuring promises that depend on each other don’t prematurely flush partial data. It’s an intricate dance that highlights the importance of well-chosen data structures and scheduling logic in Solid’s runtime. The net outcome is fewer roundtrips, smaller payloads, and a smoother experience during progressive rendering. Ryan connects this to broader goals of reduce-anything-possible, focusing on speed from both a developer and end-user perspective.

### 01:42:00 - Guarding Hydration Scripts and Micro Front-Ends

Ryan then addresses how Solid now includes better guards to avoid re-initializing global scripts multiple times in micro front-end setups. When different pieces of an app load concurrently, they can accidentally import the same hydration logic. This leads to conflicts if the same scripts fight over shared state. Solid 1.8 fixes this by checking whether critical scripts already exist before injecting new ones.

He notes that micro front-ends bring unique challenges because each sub-application can carry its own dependencies and initialization code. Simple checks—like verifying if a global function is defined—prevent duplication but can’t guarantee full harmony when each front-end chunk reconfigures global state. Nonetheless, these incremental improvements reduce collisions that once plagued advanced deployments. For large-scale enterprise teams, such measures also reduce confusion when multiple sub-apps rely on the same reactivity library.