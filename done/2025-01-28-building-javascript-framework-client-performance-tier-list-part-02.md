---
showLink: "https://www.youtube.com/watch?v=E5amN0_1XyE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building JavaScript Framework Client Performance Tier List"
description: ""
publishDate: "2025-01-28"
coverImage: "https://i.ytimg.com/vi/E5amN0_1XyE/sddefault.jpg"
---

### 17:00 - 24:00 • Inferno and the Quest for Pure Speed

During this span, the conversation highlights Inferno, a library that seems to skip an entire performance tier by using high-level compiler optimizations. The speaker recalls how Inferno proved that the virtual DOM could be pushed far beyond React’s typical limitations, shocking many developers who believed they had reached the apex of speed. Details emerge about how Inferno’s creator leveraged static analysis on JSX to reduce overhead, eventually joining the React core team to work on specialized optimizations at Facebook.

This is where the speaker underscores the first real sign of “A-tier” performance in a virtual DOM context. While other libraries were slowly climbing from D-tier to C-tier, Inferno demonstrated that with enough low-level analysis and targeted transformations, a virtual DOM could rival or even surpass frameworks built on entirely different architectures. This marked a key turning point, sparking broader questions about how far creative compiler techniques could be taken.

### 24:00 - 30:00 • Web Components and Lit’s Emergence

The focus shifts to the rise of Lit (originally LitElement and lit-html), which ushered in a new technique for updating DOM nodes. By leveraging tagged template literals and minimal overhead, Lit sidestepped some of the common pitfalls of larger virtual DOM systems, placing it in the same upper echelon as Inferno. The speaker highlights how web components add complexity and often degrade performance, but Lit’s minimalistic rendering approach counteracts much of that overhead.

This segment underscores how small, focused libraries can excel in raw rendering scenarios by avoiding entire classes of heavy operations. Although web components don’t necessarily solve all architectural issues, Lit’s performance showed that even in a non-trivial environment, careful design can yield “A-tier” results. The conversation illustrates that the ecosystem was beginning to diversify beyond simple React alternatives, branching into robust new patterns and standards-based practices.

### 30:00 - 36:00 • Fine-Grained Reactivity Revisited

Here, the speaker circles back to frameworks relying on signals and fine-grained reactivity, such as Alpine.js. Despite sharing philosophical roots with Knockout in terms of pinpoint updates, Alpine.js ends up labeled closer to “F-tier” for its slow templating and suboptimal partial re-rendering. The speaker draws a contrast between genuinely fast reactivity systems and those that merely adopt similar language without fully optimizing under the hood.

By looking at Solid.js, the speaker then underscores a modern take on fine-grained updates, revealing how its architecture outpaces traditional re-renders seen in React. Solid embraces signals to achieve highly efficient updates, vaulting it into “S-tier.” This conversation also revisits some historical frameworks, noting how the original concept of signals never truly disappeared—it simply re-emerged, refined through years of collective learning and improved browser APIs.

### 36:00 - 42:00 • Compilation and Alternative Languages

As the timeline reaches the late 2010s, the speaker reviews how frameworks built with languages like Rust and C#, including Blazor and Yew, enter the scene. Blazor’s web solution struggles mightily in terms of raw client performance, positioning it alongside Alpine in the lowest tier. Meanwhile, Yew, which models itself loosely on React, fares better but still contends with the overhead of WebAssembly communication boundaries.

This discussion broadens the perspective to include not just JavaScript performance but also how compile-to-WASM workflows affect rendering speed. Though certain frameworks can match mid-tier performance, it highlights the inherent trade-offs in bridging language ecosystems. Rust-based projects like Yew and Leptos reveal how each new approach attempts to crack the code of high-performance UI rendering, sometimes succeeding in unexpected ways.

### 42:00 - 48:00 • Svelte 3 and the Rise of Compilers

Attention turns to Svelte’s jump from version 2 to version 3, showcasing how compiler-driven transformations can systematically cut away overhead. Although Svelte 3 doesn’t fully break into top-tier performance in every scenario, it elevates the framework to a comfortable “B-tier.” The speaker compares Svelte’s approach with other compiler-assisted libraries, noting that while the jump was significant, some architectures—like Solid’s—still manage to surpass it by focusing on granular updates rather than re-rendering entire components.

By emphasizing the architectural shift from a purely runtime system to a mostly compile-time approach, the speaker reinforces that frameworks can offload significant work before the code even runs in the browser. This shift to compilers is illustrated as both a convenience and a performance boon, although it comes with the complexity of building and maintaining more advanced tooling.

### 48:00 - 54:00 • The Block DOM Concept and Million.js

In this chapter, the speaker spotlights Million.js, a library that pushes the idea of a “block DOM” to achieve near top-tier performance. While it uses concepts similar to Inferno’s and Solid’s approach—optimizing static parts of the DOM and focusing on minimal overhead—Million.js takes that ethos a step further by reducing repeated computations. The conversation addresses how partial re-render strategies and advanced static analysis can catapult a framework into “S-tier” territory, at least in raw benchmarks.

Though the speaker points out that real-world usage requires more than just raw speed, frameworks like Million.js show how developers continue to test the boundaries of what’s possible. With a heavy emphasis on low-level DOM operations and an aversion to repeated patching, the block DOM technique showcases how knowledge from older libraries can be combined with modern compiler insights for a new level of efficiency.

### 54:00 - 1:02:26 • Modern Signals, Svelte 5, and Final Thoughts

Wrapping up, the conversation arrives at the newest frontiers: Svelte 5 and Vue’s unreleased “Vapor.” Both adopt signals-based architectures reminiscent of Solid.js, promising a leap into “S-tier” performance. The speaker notes that as these frameworks incorporate more granular updates, the entire line between compiler-based optimization and runtime reactivity continues to blur, signaling a new era for high-performance rendering.

In closing, the speaker reflects on how each decade of innovation seems to circle back to fundamental concepts from older frameworks. Whether it’s signals or partial DOM updates, many of today’s breakthroughs have roots in those early days of Knockout and AngularJS, simply refined through years of experimentation. The overarching takeaway is that chasing optimal client-side performance is a never-ending journey, guided by a mixture of fresh ideas and rediscovered techniques.