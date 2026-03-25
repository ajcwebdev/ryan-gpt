---
showLink: "https://www.youtube.com/watch?v=jHDzGYHY2ew"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS 1.5"
description: ""
publishDate: "2022-08-26"
coverImage: "https://i.ytimg.com/vi/jHDzGYHY2ew/sddefault.jpg?v=6306bb41"
---

## Episode Description

A comprehensive walk-through of SolidJS 1.5’s new features, design decisions, and broader JavaScript ecosystem trends discussed over nearly four hours of live conversation.

## Episode Summary

This episode offers a detailed look at SolidJS 1.5, highlighting both new and refined features that improve the developer experience and overall framework performance. The conversation begins with an introduction to batching, clarifying how Solid’s revised approach eliminates edge cases and simplifies state updates. Subsequent sections explore resource enhancements, including new storage options and better error handling, which pave the way for more flexible data management. Listeners also learn about server-side rendering optimizations, such as unified streaming logic, making Solid’s SSR significantly faster and more consistent with modern standards. Later on, the host shifts focus to the broader JavaScript landscape, discussing emerging trends in frameworks, routing, and runtime performance. Throughout, there’s a strong emphasis on practical examples, real-world use cases, and the underlying philosophies driving these technical choices. By the episode’s end, it becomes clear how incremental improvements and ongoing collaboration across the ecosystem are shaping the future of web development.

## Chapters

### 00:00:00 - Introduction and Goals

In this opening segment, the host sets the stage for the discussion, welcoming viewers to the stream and explaining that the primary focus is on SolidJS 1.5. He describes the unique aim of walking through implementation details and design decisions rather than simply listing new features. Listeners gain insight into the motivation behind the release, including longstanding goals around simplifying reactivity and improving overall framework consistency. The tone is casual yet technical, with an invitation for viewers to pose questions.

As more people join, the host briefly touches on the value of interactive live streams, encouraging everyone to share feedback or clarifications in real time. He mentions the excitement of unveiling features that have been in development for months. This sets an inclusive atmosphere, promising a thorough examination of each topic. The host makes it clear that the stream will move beyond surface-level explanations, revealing the thinking that underpins each change in SolidJS 1.5.

### 00:06:00 - Early Observations and Project Background

Here, the conversation shifts to a short retrospective on SolidJS’s evolution. The host recalls earlier releases, outlining how various bug fixes and incremental updates built the foundation for 1.5. He notes that many of the improvements stem directly from user feedback and real-world application scenarios. This historical context gives listeners a richer perspective on why certain technical decisions were made and how the Solid community’s involvement shaped the framework’s trajectory.

He also points out the project’s community-driven nature, emphasizing the importance of open collaboration on GitHub and social channels. Describing SolidJS’s journey from smaller fixes to major updates reveals the intricate interplay between user needs and technical possibilities. By underscoring past challenges—such as occasional regressions or limitations in earlier releases—the host provides a clear backdrop against which the new 1.5 features can truly shine.

### 00:12:00 - Bug Fixes and CreateMutable Issues

Delving into specific bugs, the host explains how attempts to fix long-standing batching issues inadvertently broke `createMutable`, a rarely used yet still important feature. He details the ramifications of that breakage, highlighting how internal changes to Solid’s batching mechanism led to unexpected outcomes for users relying on mutable data structures. This frank account showcases the complexity of balancing new features with existing capabilities in a reactive framework.

He then describes the investigative process behind identifying and addressing this bug, illustrating the depth of testing required. Discussions within the community and thorough debugging sessions guided the resolution. The host also clarifies how these explorations laid groundwork for broader improvements, illuminating how a single bug often triggers wider architectural considerations. This section underscores the reality that even small oversights can have large implications, prompting more robust solutions in the end.

### 00:18:00 - Contrasting Design Choices and API Boundaries

Attention turns to Solid’s design philosophy, particularly its emphasis on keeping certain APIs advanced or “expert-only.” The host acknowledges the tension between offering powerful, low-level constructs like mutable data helpers and encouraging best practices for typical applications. He explains why these APIs exist, highlighting specialized scenarios requiring direct access to lower-level functionalities. This contextualizes why they remain in the framework, despite recommendations to rely on higher-level reactive primitives most of the time.

He illustrates how seemingly minor design decisions can protect beginners from complexity while still empowering advanced developers. The host points out that minimal friction for day-to-day coding remains a priority, yet the flexibility is there for those who truly need it. This segment underscores a broader design tension: balancing approachability with extensibility, ensuring advanced features don’t clutter typical workflows but remain available for specialized use cases.

### 00:24:00 - Balancing Reactivity and Imperative Needs

Here, the host tackles the often-tricky middle ground between purely declarative reactivity and the occasional imperative code required for real-world integrations. He talks about bridging gaps—such as interfacing with external libraries or legacy systems that lack reactive patterns. Through practical examples, he demonstrates how Solid’s reactivity can be temporarily paused, or how certain APIs let developers move in and out of declarative paradigms with ease.

He underscores that while SolidJS champions a reactive approach, the framework is not dogmatic. Instead, it seeks to smooth transitions for developers who must manage incremental migrations or hybrid codebases. This conversation resonates with many in the audience who grapple with partial rewrites or external dependencies, showing that SolidJS 1.5 remains pragmatic, even as it sharpens the reactive core to be more robust and efficient.

### 00:30:00 - Top-Level Arrays and Store Updates

Shifting focus to a major enhancement, the host spotlights how top-level arrays in stores became a reality. He describes how this new feature clarifies data management, allowing developers to handle arrays more naturally without cumbersome nesting. This improvement encourages more modular code structures, where signals and stores can be mixed effectively. The host recounts user experiences and test cases that proved the value of giving arrays first-class treatment in the store API.

He recalls earlier approaches that forced arrays deep into objects, leading to confusion and making code less elegant. Now, with simpler patterns, developers gain intuitive ways to update and read from arrays while still benefiting from Solid’s fine-grained reactivity. This segment underscores how a seemingly small tweak—allowing arrays to be top-level store entries—can significantly reduce boilerplate. The host also hints at upcoming expansions that further refine how data structures integrate with signals.

### 00:36:00 - Addressing Batching and Undefined Errors

The host turns to the concept of batching, recounting a tricky scenario involving errors that were thrown as `undefined`. He explains that Solid’s prior attempts to unify updates under a single pass sometimes produced unexpected results. Developers throwing falsy values triggered edge cases in error boundaries or resource loading states. This confusion sparked deeper conversations about how signals and error handling should gracefully align with user expectations.

Walking through the fix, he describes implementing a fallback mechanic to construct a more informative error object if something undefined is thrown. This approach prevents silent failures while preserving the concise nature of Solid’s reactivity. He underscores that while edge cases like this are rare, addressing them builds user confidence. The resolution also indicates broader improvements to internal consistency, ensuring that reactivity-based features like error boundaries and resources remain robust.

### 00:42:00 - Boolean Attributes and DOM Consistency

Discussing boolean attributes in JSX, the host examines a subtle design conundrum: when should a boolean prop become a string in the DOM, and when should it remain `true` or `false`? Comparing Solid’s behavior to React and other libraries, he shows how frameworks differ in interpreting HTML booleans. He clarifies why Solid occasionally departs from standard HTML, opting for a consistent developer experience or improved performance in certain scenarios.

He explains that while some want strict HTML alignment, others prefer direct boolean usage in props for simpler logic. Balancing these demands involves analyzing how attributes behave, whether for standard DOM elements or custom components. Ultimately, Solid’s approach remains pragmatic: it aims to keep code readable and reactive updates fast. For specialized needs, developers can still manage booleans manually. This nuanced discussion highlights the intricacies of bridging the DOM’s quirks with modern reactive patterns.

### 00:48:00 - Revisiting Symbols in Stores

The conversation touches on an internal debate about using symbols within store implementations. Symbols play a role in differentiating internal fields from user data, but they can also pose challenges for introspection or debugging. The host outlines suggestions from the community that proposed removing certain symbols to streamline store handling, comparing potential performance trade-offs against the clarity of the developer experience.

He ultimately reveals that after thorough benchmarking, the team decided to keep symbols in place for now. Performance considerations weighed heavily, as removing them introduced overhead that could degrade apps handling large data sets. Still, the transparency issue remains on the team’s radar, emphasizing that balancing performance with discoverability is an ongoing concern. The decision provides a window into how user feedback and real-world testing shape the final design.

### 00:54:00 - The Working Group and the Future of Solid

Here, the host introduces SolidJS’s working group, describing it as a dedicated space for community members to discuss, propose, and evaluate potential changes. By centralizing ideas around Solid’s reactive core, the framework’s evolution becomes more collaborative. Examples include new proposals for concurrency, updated reactivity mechanisms, and advanced features like store improvements. This open process helps maintain Solid’s momentum while keeping changes transparent.

He reiterates the importance of synergy among core maintainers, contributors, and end users. The working group fosters deeper dialogues that transform wish lists into fully explored solutions. Interested developers can follow or join discussions to stay informed or even champion new ideas. This segment underscores how a structured forum contributes to shaping Solid’s roadmap, ensuring alignment among the rapidly growing user base and the volunteer-driven core team.

### 01:00:00 - Quality of Life Upgrades and Project Organization

As the conversation pivots, the host showcases several quality-of-life improvements introduced in 1.5. He highlights the project’s transition to a pnpm workspace and turbo repo, boosting speed and developer productivity. By unifying scripts and dependencies, contributors gain a smoother on-ramp, enabling them to compile, test, and build Solid’s codebase more efficiently. This move underscores the project’s commitment to modern tooling that fosters a friendly developer experience.

He credits core team members who spearheaded these enhancements, emphasizing that organizational improvements often yield outsized returns for open source communities. A standardized workspace prevents common pitfalls, letting more people confidently fix bugs or propose features. These behind-the-scenes infrastructure changes signal a strategic push to expand Solid’s contributor base, aligning well with future plans to accelerate development and maintain high code quality.

### 01:06:00 - Children Helpers and Enhanced Array Handling

Next, the host details newly added utilities for managing children in Solid’s JSX. The `toArray` helper simplifies tasks like iterating over child nodes, improving compatibility with React-like patterns. He illustrates how this minor extension allows developers porting code from React to adopt a more direct syntax without excessive boilerplate. These small conveniences collectively reduce friction for those transitioning from other libraries.

He acknowledges that while Solid’s philosophy differs from virtual DOM frameworks, bridging these small gaps eases adoption. Simplifying child processing especially benefits complex UI components, where nested structures can be frequent. By adding array-focused APIs, the framework lowers mental overhead. This segment emphasizes how iterative enhancements—though not always headline-grabbing—play a crucial role in refining the day-to-day workflow of Solid developers.

### 01:12:00 - Node Next and TypeScript Builds

The discussion shifts to TypeScript build compatibility, specifically regarding Node Next module resolution. The host describes new explicit extension exports throughout Solid’s packages, which cater to modern bundlers and Node’s evolving loading rules. By adding these fields, the library sidesteps potential import conflicts, ensuring a smoother experience for both Node-based servers and advanced bundlers that rely on Node Next behavior.

He credits community contributors for taking the initiative on these changes, emphasizing how updates often come from real-world frictions encountered by production users. This addition is part of Solid’s broader strategy to stay at the forefront of JavaScript tooling trends. While it might be invisible to many, better alignment with Node Next and TypeScript ensures that Solid remains agile, supporting a range of environments where modern module resolution is crucial.

### 01:18:00 - Keyed Control Flow in TypeScript

Focusing on a key new feature, the host reveals how Solid now supports keyed control flow for conditionals like `<Show>`. He explains that by adding a `keyed` prop, developers can decide whether child nodes should recreate entirely when data changes, or simply update in place. This granular control is especially helpful for complex scenarios involving dynamic or rapidly changing data. The improvement addresses a longstanding request from TypeScript users wanting tighter type guarantees.

He demonstrates how keyed control flow can solve tricky UI states, preventing undesired resets or partial re-renders. Additionally, the new approach seamlessly integrates with TypeScript’s narrowing, avoiding type-safety pitfalls that arose from earlier approaches. While not every use case demands keyed flows, the feature stands as evidence of Solid’s adaptability. It harmonizes reactivity with code clarity, letting developers opt in to more explicit reconstructions only when necessary.

### 01:24:00 - The Role of TypeScript in API Design

In this segment, the host explores how TypeScript’s requirements shape—and occasionally complicate—API design. He admits that building library-level definitions often consumes more effort than using TypeScript in everyday applications. Rather than bending core concepts to fit static types, the Solid team prefers to finalize clean, logical APIs first, then handle type definitions. This stance occasionally sparks debate among those who want perfect type safety from the outset.

He points out that trade-offs are inevitable. While TypeScript aids clarity and prevents bugs, certain reactive patterns don’t map neatly onto static type checks. In Solid’s view, this mismatch should be approached pragmatically, with minimal friction to typical usage. The host still affirms that recent changes—like keyed control flow—demonstrate ongoing efforts to ensure typed code remains pleasant to write. Ultimately, the framework’s approach balances developer ergonomics with the inherent realities of typed reactivity.

### 01:30:00 - Memos, Effects, and Push-Pull Reactivity

The conversation dives into the intricacies of memos and effects. The host clarifies how Solid’s “push-pull” approach to reactivity allows signals to be either lazily or eagerly updated. This ensures consistent values, even when code runs in a batch. By marking dependencies as “dirty,” memos recalculate on demand, avoiding repeated computations. Meanwhile, effects remain free of direct dependencies, serving as side effects that trigger whenever relevant signals change.

He illustrates scenarios where layered memos prevent unnecessary re-renders in deeply nested data flows. By layering signals, memos, and effects in a directed graph, Solid can minimize overhead, recalculating nodes only when genuinely required. This pattern contrasts with purely push-based solutions, adding a level of finesse for complex applications. Listeners glean a clear sense of how Solid achieves high performance at scale by carefully orchestrating these reactive building blocks.

### 01:36:00 - Real-World Examples of Sequences and Data Mutation

Expanding on the theory, the host uses tangible code snippets to show how single operations can cascade updates through a reactive graph. He details how removing and reinserting elements in a mutable array can create intermediate states unless the framework handles sequencing properly. Solid 1.5’s refined approach ensures such operations commit in a logical order, preventing partial or contradictory states when multiple changes happen in quick succession.

He further discusses how these improvements particularly benefit developer experience, eliminating the confusion of manually managing transitional states in a data array. While immutable patterns remain ideal for many applications, mutable arrays serve specialized cases where direct element manipulation is essential. By demonstrating both patterns side by side, the host underscores that Solid now better accommodates a wide range of strategies, giving developers freedom without losing the benefits of fine-grained reactivity.

### 01:42:00 - Interpreting Inconsistent Updates and Diamond Problems

This section delves into a classic reactive challenge: the “diamond problem,” where two dependencies converge on a single node. The host explains how Solid’s push-pull mechanism solves inconsistent updates, ensuring that if one branch recalculates an intermediate value, the second branch also recalculates before finalizing any dependent nodes. This fine-grained approach avoids subtle race conditions that might arise in purely push-based or purely pull-based architectures.

He walks through hypothetical data flows to demonstrate how concurrency or nested computations can complicate chain reactions. Solid’s approach systematically marks each memo or effect as dirty, checking them in depth-first order and recalculating only when needed. This careful orchestration provides a stable environment, even in complex UI states. The example cements an understanding that beneath Solid’s intuitive signals lies a sophisticated system ensuring correctness and performance.