---
showLink: "https://www.youtube.com/watch?v=zgY7ql1xwW4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Web UI's in Rust w/ Greg Johnston"
description: ""
publishDate: "2022-12-03"
coverImage: "https://i.ytimg.com/vi/zgY7ql1xwW4/sddefault.jpg?v=6387ffbc"
---

## Episode Description

An in-depth conversation covering Rust for web UI, memory safety, reactivity, WASM, and the evolution of JavaScript frameworks for large-scale applications.

## Episode Summary

This wide-ranging discussion begins by introducing the guest speaker’s background and interest in Rust, exploring how its ownership model and memory safety features can offer advantages in certain scenarios. The conversation then shifts into practical examples of building user interfaces in Rust, highlighting the language’s synergy with WebAssembly to unlock high-performance possibilities directly in the browser. Various Rust frameworks and their relationship to existing JavaScript libraries are contrasted, demonstrating how differing reactivity approaches influence state handling and rendering. The participants discuss the broader trends shaping web development, focusing on reactivity, server-side rendering, and how large-scale adoption considerations drive different architectural choices. By weaving together experiences from JavaScript, Angular, React, and more, the talk underscores how Rust fits into the modern landscape while acknowledging its potential trade-offs in everyday application development. Overall, it paints a picture of a rapidly evolving ecosystem where performance, memory safety, and developer ergonomics all intersect to shape the future of building web interfaces.

## Chapters

Below are 61 chapters spanning approximately five hours and three minutes of content. Each chapter covers a 5-minute block, except the final one, which captures the last few minutes.

### 00:00 – 00:05 Introduction and Context

The conversation starts with a warm welcome and a quick overview of what to expect. The host introduces the speaker, mentions the day’s topic—Rust for web UI—and sets the stage for an in-depth exploration of how Rust can intersect with modern front-end needs. They also share brief observations on how JavaScript has dominated the browser, leading to questions about alternative languages that compile to WebAssembly. The opening frames the episode as a journey into performance, memory safety, and emerging web technologies.

### 00:05 – 00:10 Early Impressions of Rust

Attention turns to first impressions of Rust. The guest recalls how they struggled with manual memory management in other languages and felt drawn to Rust’s compile-time checks. Rust’s ownership and borrowing concepts are highlighted as major strengths for avoiding runtime errors. They emphasize that Rust’s syntax might feel unfamiliar to web developers coming from JavaScript. However, the reliability gained by catching errors early is often worth the learning curve. This sets the tone for why Rust, despite initial friction, can be appealing.

### 00:10 – 00:15 Memory Safety and Borrow Checker Basics

Discussion moves to Rust’s most defining feature: the borrow checker. Concrete examples illustrate how it prevents common bugs in C/C++ by prohibiting invalid references and data races. This level of safety eases worries about certain classes of production failures. They compare this to JavaScript, where a dynamic runtime and garbage collector remove many manual concerns. Yet Rust’s strict approach yields a more predictable performance profile and can help avoid subtle memory issues. The audience hears why many see Rust as a safer foundation.

### 00:15 – 00:20 Contrasting TypeScript and Rust Typing

Typescript often arises as a natural transition from JavaScript. The conversation now spotlights the contrast between TypeScript’s structural typing and Rust’s more rigid, ownership-based model. Each has merits, but they solve distinct problems in distinct ways. While TypeScript helps catch type mismatches, Rust enforces memory correctness and strict mutability. The speaker suggests TypeScript can feel awkward when retrofitting types to a dynamic language. Conversely, Rust was designed from the start with its system-level constraints in mind.

### 00:20 – 00:25 Setting Up a Basic Rust Project

Attention turns to practicalities: how to begin a Rust project for the web. The talk describes `cargo` as Rust’s build tool and touches on choosing targets for compiling to WebAssembly. Steps include creating a new Rust package and configuring it properly. They note that, unlike JavaScript, Rust code must pass the compiler’s stringent checks before running. This can slow first iterations but often leads to more stable results once it compiles. The mention of trunk or similar tools hints at seamless development cycles.

### 00:25 – 00:30 Working with WebAssembly

The conversation addresses how Rust compiles to WASM, bridging the gap between systems-level code and the browser environment. Importantly, participants highlight that WASM itself lacks direct DOM access, relying on JavaScript glue code for most interactions. They compare standard JavaScript bundlers to the specialized pipeline needed for WASM. While some find the extra steps daunting, the potential performance gains and the possibility of sharing Rust code between server and client are seen as key motivators.

### 00:30 – 00:35 Overcoming DOM Bottlenecks

A central worry about WebAssembly has been the perceived slowdown crossing from WASM to the DOM. The guest dispels some myths, explaining that while bridging strings and complex data structures is not free, the overhead may be smaller than expected. They emphasize architecture: a carefully structured application can reduce the calls into the DOM. Fine-grained updates can be orchestrated to mitigate bridging costs. The group hints that strategies from modern JS frameworks can inform effective WASM-based approaches.

### 00:35 – 00:40 Introducing Reactive Frameworks in Rust

Conversation shifts to Rust frameworks that embrace reactivity, such as Leptos and Sycamore. Inspired by the signals concept in JavaScript’s Solid, they aim to let developers write granular, state-driven code with minimal overhead. Participants outline the difference between coarse-grained approaches like Redux and finer-grained signals. They emphasize that Rust’s strict memory model complicates typical JavaScript patterns. These Rust frameworks solve it by carefully managing references to avoid concurrency pitfalls.

### 00:40 – 00:45 Case Study: U (Yew) and the Virtual DOM

Yew is mentioned as one of the earliest Rust/WASM UI libraries, employing a virtual DOM model reminiscent of React. This approach appealed to those who found Rust ownership rules tricky, as it presents a simpler mental model. Yet the conversation notes that a virtual DOM can bring overhead. Rust’s memory constraints might conflict with large-scale VDOM manipulations, driving new frameworks to experiment with signals or more direct DOM manipulation for speed.

### 00:45 – 00:50 Building a Simple Counter in Vanilla Rust/WASM

They walk through creating a bare-bones example: showing a count and increment/decrement buttons. This code highlights the necessity of bridging JavaScript events with Rust references, plus the friction around Rust’s strict references in callbacks. Working with small demos clarifies the overhead of repeated `.clone()` calls for state. Despite feeling clumsy, it illuminates how memory safety yields predictable runtime performance. The example also illustrates that a straightforward pattern is sometimes more verbose in Rust.

### 00:50 – 00:55 Rethinking State Sharing with Message Passing

Instead of sharing a mutable reference, they discuss an Elm-like approach: dispatching messages into a central loop, which updates state in one place. This feels reminiscent of Redux or Elm’s update function, ensuring no conflicting mutations. They highlight how this model blends well with Rust’s design, allowing multiple immutable references while a single function mutates underlying data. Though it can be verbose, it centralizes control and prevents accidental shared-state problems.

### 00:55 – 01:00 Elm-Style Architecture in Rust

Focus turns to frameworks like Yew in its “traditional” mode, which organizes code into `Model`, `Msg`, and `update`. The compilation-based macro expansions let Rust developers produce HTML-like templates, bridging the gap between compiled code and DOM operations. They point out that while this pattern is clean, it requires a virtual DOM or some mechanism to re-render after each update. The conversation underscores how Elm-inspired patterns ensure immutability, but can become cumbersome for smaller, more dynamic updates.

### 01:00 – 01:05 Sycamore’s Signal-Based Approach

Shifting to Sycamore, they describe how it uses a signal-based system inspired by Solid. Initially, older versions demanded manual clones of signals for closures, mimicking React’s hooks pattern in some ways. The newest release introduced a clever lifetime system, removing some overhead around references. They compare it to how Rust tries to keep memory safe while providing an ergonomic signal-driven UI. Listeners learn about the complexities of ownership in reactive code.

### 01:05 – 01:10 Leptos and Fine-Grained Reactivity

Leptos took lessons from Sycamore and Solid, using a unique runtime to store signals in a central registry. This allows copying small IDs instead of large data structures, easing memory concerns and dynamic scoping. They mention how Leptos attempts server-side rendering and even progressive enhancement. Some impetus comes from experiences of developers craving Rust’s reliability for both back-end and front-end. The conversation reveals that server and client can unify under Rust’s single-language approach.

### 01:10 – 01:15 Performance Talk: JS Framework Benchmarks

Attention shifts to the famous JS framework benchmark, comparing everything from React to smaller, more specialized libraries. WASM-based tools like Leptos, Sycamore, and Yew have begun appearing on these charts, sometimes outperforming popular JavaScript options. They explain that raw DOM manipulation is still the largest factor, so well-architected Rust frameworks can compete. Overhead bridging from WASM to the DOM remains a real consideration, but innovative frameworks manage to stay on par with top JS contenders.

### 01:15 – 01:20 Server-Side Rust vs. Node or Deno

Rust’s strengths shine on the server. The group mentions that Rust code often handles greater concurrency with fewer resources than Node. Freed from garbage collection, Rust yields smaller latencies under heavy loads, as seen in benchmarks for high-traffic apps. In discussing single-language stacks, they acknowledge the draw of JavaScript on both client and server. Rust, however, can unify certain back-end tasks and compile them into fast microservices. The conversation underscores the synergy of Rust from top to bottom.

### 01:20 – 01:25 Trade-Offs for Rust in Front-End

Participants weigh whether Rust is overkill in a browser environment. Memory safety is less critical on a sandboxed tab, but the performance gains may matter for data-heavy or graphics-intensive apps like Figma. They note that for everyday forms or simpler UI, JavaScript might suffice. Larger teams might prefer well-known React or Svelte ecosystems. Rust appeals more strongly when memory control or performance is paramount, especially for complex use cases.

### 01:25 – 01:30 Progressive Enhancement with Rust

They highlight a strategy for bridging the initial load time issue. Apps can render with server-driven HTML so users see content instantly, then WASM code hydrates UI interactions seamlessly. This approach means gracefully degrading if WASM isn’t supported. The conversation frames it as a path to shipping Rust UI without sacrificing user experience on slow networks or older devices. Real-world examples reaffirm the method’s viability.

### 01:30 – 01:35 Q&A on Migration Concerns

Listeners submit questions about whether it’s worth migrating an existing React or Angular app to Rust. The general consensus: only if you have performance-critical needs that justify the cost. Tools to ease rewriting remain immature. They emphasize that partial integration is sometimes possible—embedding small Rust/WASM modules for CPU-heavy tasks. Complete rewrites can be expensive. The talk suggests starting with incremental adoption in critical hotspots.

### 01:35 – 01:40 Evolution of Reactivity Concepts

The conversation takes a historical view. Signals existed in early frameworks like Knockout, and React introduced a component-based approach. Meanwhile, Angular used RxJS streams, which can feel cumbersome for everyday UI tasks. From these roots, modern frameworks like Svelte, Solid, and the Rust-based Sycamore or Leptos have embraced auto-tracked signals. Attendees discover how subtle implementation details—like avoiding explicit subscription arrays—improve ergonomics.

### 01:40 – 01:45 Overhead of VDOM vs. Fine-Grained Updates

They compare the overhead of re-rendering entire component trees in React’s VDOM to fine-grained reactivity. A library like Solid pinpoints exactly which parts of the DOM change. Rust frameworks mimic that for optimal performance. But the group acknowledges that a VDOM can be easier for new developers, who see a simple “render the whole tree” model. Fine-grained reactivity demands a deeper grasp of dependencies. This trade-off drives differences among frameworks.

### 01:45 – 01:50 Angular Signals and Future Trends

They mention Angular’s move to signals, a sign that Google’s flagship framework wants more efficient updates. This parallels industry discussions about dropping large-scale re-renders in favor of targeted computations. Speculation arises: as major frameworks adopt signals, the lines blur between Rust-based and JavaScript-based approaches. Some wonder if we’ll see universal reactivity patterns across multiple languages and ecosystems, reshaping how we build front-ends.

### 01:50 – 01:55 Discussion on Developer Experience

Framework choices often hinge on ergonomics and familiarity. Some argue that Rust’s advanced features can frighten front-end devs, while others insist that once mastered, Rust leads to more stable code. They note that TypeScript, for example, is popular partly because it extends plain JS. Rust is a bigger leap, requiring new patterns and mental models. Whether or not teams adopt it depends on their priorities and risk tolerance.

### 01:55 – 02:00 The Momentum Behind Rust

Attendees learn that Rust is no longer a niche systems language. With corporate backing from browsers and big tech, its community has grown. The show mentions that many devs find rust-analyzer and cargo on par with JavaScript’s tooling. Excitement stems from Rust’s consistent ranking as the “most loved language” in certain surveys. While still overshadowed by JavaScript in sheer usage, Rust’s ecosystem expansions—like for the front end—point to ongoing adoption in new domains.

### 02:00 – 02:05 Breaking Down a Larger Rust/WASM Example

They briefly present a more complex example—possibly a to-do or small UI with forms. This showcases how signals manage state while trunk or cargo-leptos handle hot reloading. Listeners see how all the pieces fit. When forms submit, server functions can unify the back-end and front-end logic, leaning on Rust’s typed data structures. This reveals a powerful synergy: strongly typed validations flow seamlessly between client and server.

### 02:05 – 02:10 Optimistic UI and Server Functions

Adopting patterns reminiscent of Remix or React server components, Rust-based frameworks experiment with server functions. They share data safely, then push updates to the front end with minimal overhead. Optimistic UI is possible when signals update immediately, with server confirmation following. The conversation likens it to SvelteKit or Next.js patterns, showing that Rust frameworks aim to match modern developer expectations for a fluid user experience.