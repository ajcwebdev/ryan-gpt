---
showLink: "https://www.youtube.com/watch?v=FB_kBYO_vIw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Compilation in JavaScript Frameworks"
description: ""
publishDate: "2021-12-11"
coverImage: "https://i.ytimg.com/vi/FB_kBYO_vIw/sddefault.jpg?v=61b38de9"
---

## Episode Description

A broad conversation on compilation, performance, reactivity, and design trade-offs in modern JavaScript frameworks, spanning more than three hours of detailed discussion.

## Episode Summary

In this extended session, the speaker addresses multiple aspects of modern JavaScript frameworks, focusing on how compilation and reactivity can optimize performance and improve developer experience. The talk begins with historical perspectives on tools and methodologies, touching on early templating approaches and state management in libraries like Knockout and AngularJS. Moving forward, it highlights how modern frameworks leverage compile-time transformations—examining Svelte, Solid, React, and others—to reduce code size and improve runtime efficiency. The speaker emphasizes the importance of analyzing static and dynamic parts of an application, along with strategies like partial hydration for enhanced loading speed. Throughout, real-world insights on trade-offs, from maintainability to composition, frame a nuanced overview of cutting-edge directions in JavaScript library design. This comprehensive discussion serves as both a survey of current solutions and a look at future possibilities in framework-driven compilation.

## Chapters

### 00:00:00 – 00:06:00 Introduction and Stream Setup

The talk opens with a casual greeting and a brief mention of the presenter’s recent workload, particularly late-night development tasks focusing on error boundaries and suspense in server-side rendering scenarios. He notes the complexity of streaming error boundaries and the challenges of integrating them with frameworks that support suspense. The conversation underscores the speaker’s efforts to manage these intricacies alongside a busy work week, hinting at the depth of the technical insights that will follow.

In setting the stage, the presenter references grappling with a GraphQL client built for a specific framework, describing how it must support features like streaming and partial hydration without sending unnecessary JavaScript to the client. He explains that certain tools lack streaming support, requiring incremental cache updates rather than assuming full data is available all at once. This opening sets an exploratory tone: the talk is poised to traverse diverse topics, from server rendering complexities to isomorphic data handling.

### 00:06:00 – 00:12:00 Early Discussion on Streaming and Error Handling

Here, the presenter transitions to the nuances of streaming in frameworks like Solid and Remix. He describes how errors are handled within streaming boundaries, referencing personal experiments with different techniques. Remix’s way of handling error boundaries serves as a useful comparison, illustrating how frameworks differ in their approach to server and client interactions. The discussion underscores that streaming, though powerful for user experience, demands careful thought around when and how data arrives, particularly in partial-hydration scenarios.

The speaker also reveals how new features in certain hosting providers, like Cloudflare, offer advanced APIs for readable streams, creating fresh possibilities for real-time SSR output. These emerging browser and server capabilities prompt further innovation, allowing frameworks to expand their approach to dealing with errors and rendering. By highlighting ongoing collaboration and beta testing, he anticipates a phase in which JavaScript libraries capitalize on platform-level streaming to streamline rendering pipelines while gracefully managing exceptions.

### 00:12:00 – 00:18:00 Reflecting on Remix and Hacker News Clones

In this segment, the focus moves to the speaker’s Hacker News demo built on Remix. He describes how Remix’s routing and data-loading methodology resemble those of his own framework experiences. Building a Hacker News clone served as a performance test, ensuring the capacity to handle nested routes efficiently and keep data fetching streamlined. The demo’s relatively smooth construction illustrates Remix’s effectiveness and parallels capabilities found in Solid Start.

The presenter elaborates on external interest, noting that Remix’s creators had similar demonstrations that sparked debates about real-world performance. Comparisons to Next.js React server components illuminate nuanced differences in streaming approaches. He references community discussions and acknowledges how demo projects, while illustrative, sometimes fail to represent practical complexities. The speaker’s insights underscore his interest in frameworks that integrate robust routing, data loading, and minimal overhead, setting the stage for broader comparisons among popular libraries.

### 00:18:00 – 00:24:00 Performance Comparisons and Demo Adjustments

Turning to performance metrics, the speaker recounts how certain frameworks showcased impressive results by strategically disabling client-side JavaScript in demos. While that approach can boost Lighthouse scores, he regards it as a trick rather than a genuine reflection of day-to-day usage, since full interactivity usually demands shipping JavaScript. A conversation with Remix’s creators led to deeper insights about code-splitting and rehydration behaviors, revealing how small changes in script tags can drastically affect perceived performance.

He further explains that real-world complexities, such as enabling user interaction for features like upvotes or comment submissions, inevitably reintroduce JavaScript to the page. This reality tempers some early claims about zero-JS performance. The speaker’s measured perspective credits Remix for allowing JavaScript-free builds but posits that one must balance minimal script loads against essential interactivity. Throughout, the conversation emphasizes that developer workflows and user experience goals should guide decisions about hydration and script usage.

### 00:24:00 – 00:30:00 Rust, WebAssembly, and Framework Speed

The topic shifts to the growing interest in Rust and WebAssembly for JavaScript frameworks, pondering whether rewriting libraries like React in Rust could yield significant performance gains. The speaker references a benchmark comparing Rust-based approaches against hyper-optimized JavaScript libraries, highlighting that Rust tools, while fast, still face overhead when interfacing with the DOM. He notes that some Rust frameworks show promising results, even outpacing popular libraries, but complexities in bridging WebAssembly and the browser remain a key hurdle.

He presents a broader view, acknowledging that although WASM can offer lower-level control, JavaScript’s decades of optimization—both in VMs and in libraries—remains formidable. Thanks to advanced tooling and the dynamic nature of the language, many JavaScript solutions already approach near-native speeds. Questions persist about whether WebAssembly frameworks will ever fully surpass these fine-tuned JS approaches. Despite that uncertainty, the speaker expresses excitement about Rust-based experiments, suggesting such initiatives could shape future libraries or specialized scenarios requiring extreme performance.

### 00:30:00 – 00:36:00 Dan Abramov, Benchmark Realities, and React Use Cases

The conversation segues into an anecdote involving Dan Abramov and discussions around React’s optimization stories. The presenter recounts how real-world performance issues at scale led to identifying subtle bugs through user interactions such as “likes” dropping. This story underscores the limitations of micro-benchmarks: while they measure specific scenarios, large-scale applications require metrics tied to actual user behaviors. He contrasts isolated tests against production analytics, emphasizing that genuine performance improvements often emerge only when analyzing live usage data.

Tying these observations back to frameworks, the speaker highlights that while fine-grained benchmarks offer insights, enterprise settings may require a more holistic perspective. He praises the transparency of React’s development cycle, where new features are tested in real codebases before official release. This perspective resonates with the iterative nature of frameworks that must evolve in response to vast and varied production needs. Ultimately, ephemeral performance gains on contrived tests can mislead if they ignore how real users interact with applications.

### 00:36:00 – 00:42:00 React Conf and the Compiler Narrative

Attention turns to React Conf and its announcements, particularly around server components reaching stability. The speaker notes that, while many had followed earlier React experimental features, official releases always generate renewed excitement. He then points to a fresh discussion that overshadowed stable updates: the possibility of compiler-driven memoization. By referencing both Svelte and React server components, he contrasts how different ecosystems handle the separation of static and dynamic elements, acknowledging that each approach offers strengths and pitfalls.

He calls this wave of “compiler hype” a long time coming, mentioning that advanced transformations in Svelte and Angular have existed for years. However, React’s sheer popularity amplifies interest in compilation-based optimizations. The speaker emphasizes that consistent patterns—like analyzing static template parts—already appear in multiple frameworks, though React’s pivot has piqued mainstream curiosity. As discussions swirl about advanced compilers possibly replacing manual performance tweaks, the speaker recommends monitoring ongoing developments to see where React’s approach lands in real-world apps.

### 00:42:00 – 00:48:00 The Roots of Compilation in JavaScript Frameworks

This chapter delves into the historical underpinnings of compilation within JavaScript frameworks, tracing back to CoffeeScript and TypeScript, where developers first embraced transpilers to fill gaps in language features. The presenter reminds listeners that bundlers like Webpack and Rollup also emerged, enabling tree-shaking and code splitting. Over time, these tools evolved from simple bundlers into sophisticated build systems, playing an integral role in the modern development pipeline.

He illustrates how such transformations grew more advanced when frameworks began to use compile-time analysis for templating and performance improvements. By removing unused code or rewriting conditional blocks, these compilers made applications leaner. The speaker mentions that the synergy of Babel, Rollup, and other modern tools helps developers create optimized bundles that adapt to various execution environments. This historical viewpoint illuminates why compile-time features now stand at the heart of next-generation JavaScript frameworks, blending performance benefits with improved developer ergonomics.

### 00:48:00 – 00:54:00 Tree-Shaking and Dead Code Elimination

In a practical illustration, the speaker showcases Rollup’s ability to remove dead code by statically analyzing unused functions and branches. He highlights a simple example where toggling a boolean condition leads Rollup to discard an entire code path at build time. This demonstration underscores how modern bundlers optimize payload size, shipping only the functionality a particular application needs. The speaker stresses that while this can appear magical, the mechanics remain straightforward: strictly defined imports and exports empower the bundler’s analysis.

He also points out that bundlers’ intelligent pruning can slash considerable bytes from final bundles, particularly in large-scale apps where many optional features remain dormant. This synergy between static analysis and module boundaries exemplifies how build tools do more than polyfill or compress—they actively reshape code to enhance performance. He concludes that these approaches set the stage for advanced transformations, from removing unnecessary runtime checks to merging or reordering logic for faster load times.

### 00:54:00 – 01:00:00 Templating Origins and Early Data Binding

Turning to the evolution of templating, the speaker looks back at early libraries like Backbone and Knockout, which introduced patterns for updating the DOM based on data models. In Knockout, for instance, data-bind attributes allowed developers to specify how UI elements mirrored changes in underlying observables, even though the initial page load involved a string-based template or direct DOM scanning. This approach paved the way for more declarative patterns and prepared the ecosystem for frameworks that would soon automate larger parts of the update cycle.

He recalls Knockout’s mechanism of walking the DOM to find “for each” loops or other directives, highlighting how it foreshadowed today’s component-based thinking. Although these methods could be less efficient, they represented a milestone in bridging server-rendered pages with client interactivity. By contrasting them with the dynamic capabilities that later became standard, the speaker underscores the impressive progress made in performance and ergonomics. This reflection on legacy solutions clarifies why modern compilers and fine-grained reactivity are so transformative.

### 01:00:00 – 01:06:00 Transition to React, JSX, and Lit Templating

Shifting to React’s era, the presenter touches upon JSX as a critical innovation that allowed developers to write XML-like structures directly in their JavaScript. This compilation transforms inline elements and attributes into function calls, commonly known as hyperscript. He notes that while React popularized this pattern, other frameworks adopted similar transforms, each placing emphasis on different aspects of the component lifecycle. This marked a turning point where templating left the realm of raw HTML or string parsing and became part of a build process.

He then brings up Lit, which uses tagged template literals to parse static and dynamic content. By cloning a single template and updating only the dynamic portions, Lit achieves improved performance. In comparing these approaches, the speaker highlights that all these templating solutions share a common objective: to separate static HTML sections from mutable data. Each framework, however, enforces its own conventions and trade-offs—some leaning into runtime transformations while others rely on compiler directives to optimize rendering and updates.

### 01:06:00 – 01:12:00 Solid’s Compilation Approach

The talk zeroes in on Solid and how its compiler transforms JSX into efficient structures that forgo a traditional virtual DOM. By compiling once to create a static template, Solid then places dynamic expressions in granular reactive wrappers. This allows only the relevant parts of the interface to update, as opposed to rerunning an entire component tree. The approach strikes a balance between compile-time and runtime, aiming to maintain transparent code that resembles hand-written DOM manipulation while delivering top-tier performance.

He exemplifies how Solid’s compilation yields cloneable HTML fragments, augmented by minimal JavaScript for data bindings. Rather than generating a separate render pass, each reactive expression directly links to a specific DOM insertion point. This granular reactivity avoids overhead associated with scanning or diffing large swaths of UI, reflecting a core principle: updates should be as localized as possible. The speaker notes that combining compile-time knowledge with fine-grained reactivity is key to Solid’s lean, fast-rendering outcome.

### 01:12:00 – 01:18:00 Svelte’s Approach and Generated Code

Attention pivots to Svelte, known for its minimal runtime philosophy. Svelte compiles each component into concise JavaScript that includes lifecycle-like blocks for creation, mounting, updating, and teardown. The presenter points out that while Svelte’s code generation can appear more verbose than some alternatives, the actual runtime library remains exceptionally small. This shift places the work of reactivity at build time, turning local variables into tracked state when assignments occur and weaving in watchers where needed.

He unpacks how Svelte’s compiled output manipulates a context array for state updates, performing “dirty checks” to decide whether to reflect changes in the DOM. This resembles React’s setState mechanics but is orchestrated purely by the generated code, sidestepping a large core runtime. Despite these advantages, the speaker acknowledges potential downsides: Svelte’s transformations can limit advanced composition patterns, requiring separate store mechanisms. Yet for many use cases, Svelte’s strategy of shipping only the code needed at runtime remains highly attractive.

### 01:18:00 – 01:24:00 Comparing Fine-Grained Reactivity and Compiler Tricks

Here, the talk dives into how frameworks like Solid and Vue employ fine-grained reactivity, contrasting it with Svelte’s approach. In fine-grained systems, each reactive datum triggers only the updates relevant to that piece of data, preventing unnecessary recalculations. The presenter outlines how this granular control can often remove the need for explicit memoization or tricky user-land optimizations like React’s memo. Instead, the framework’s internal mechanism inherently avoids over-rendering, leading to smoother performance across large codebases.

He explains that, in frameworks using top-down rendering, developers frequently rely on memo or computed blocks to narrow update scopes. By contrast, a fine-grained approach relies on each node or expression holding a reference to its dependencies, recalculating only when those dependencies change. The compiler plays a vital role here: by identifying static sections and slotting dynamic expressions precisely, it ensures minimal overhead. This synergy of compilation and reactivity exemplifies a modern push toward lightweight yet powerful UI updates.

### 01:24:00 – 01:30:00 Server-Side Rendering and Hydration Basics

In this interval, focus shifts to how frameworks handle server-side rendering (SSR) and hydration. The presenter notes that on the server, many frameworks render content to strings, escaping data to prevent security issues. He contrasts Svelte’s compiled SSR code, which simply outputs static HTML plus minimal scripts, with other frameworks that embed placeholders or markers for subsequent client hydration. With SSR becoming mainstream, the efficiency of sending minimal markup for quick first paints is crucial.

He stresses the challenge of rehydrating complex pages: the client must match rendered HTML to interactive components, attaching listeners without unnecessary re-rendering. Some frameworks rely on a virtual DOM to compare server output to client state, while others store instructions to skip re-creation of static nodes. The speaker highlights that language-level analysis, as done by compilers, helps reduce hydration overhead by tying dynamic expressions directly to the correct DOM chunks, sparing the client from broad scanning.

### 01:30:00 – 01:36:00 Control Flow, Composition, and Svelte vs. React

Here, the talk addresses how frameworks handle control flow, such as loops and conditionals, alongside compositional strategies. The speaker contrasts React’s top-down approach with Svelte’s single-file scaffolding. React’s usage of component boundaries fosters reusability but may trigger unnecessary updates unless carefully memoized. Meanwhile, Svelte’s compile-time approach might automatically prevent extraneous redraws but can lack React’s flexible patterns for advanced composition. Those trade-offs underline how each framework tailors code reuse and performance differently.

He adds that some solutions, like Solid, do not treat each block of logic as a re-rendering boundary but rather attach updates at the smallest possible level. This allows developers to nest logic and even localize state in ways that avoid re-render storms. Whether a developer prefers a single-file style (Svelte) or a library-like approach (React) often comes down to project complexity and personal preference. The underlying mechanism—identifying which parts must update—remains the universal challenge.

### 01:36:00 – 01:42:00 Automatic Partial Hydration and Marco’s Approach

As the conversation evolves, the speaker focuses on frameworks like Marco, which automatically detect stateful versus non-stateful portions of a page. This feature can skip shipping JavaScript for static segments, effectively implementing partial hydration without extra developer effort. He lauds Marco’s ability to produce minimal scripts, thanks to ahead-of-time knowledge of where interactivity resides. This goes beyond simply toggling off JavaScript altogether; it’s a nuanced analysis that discerns which parts of a page will never change.

He explains how Marco compiles each piece of a template into distinct segments for server and client usage. If a component’s data never mutates after load, the client can omit the logic for updating it. This approach transforms multi-page applications by reducing overhead on each route. Tying back to earlier discussions, he situates Marco as an example of how frameworks can reduce transmitted code through advanced compilation, surpassing simpler island models by automating the detection of interactive elements.