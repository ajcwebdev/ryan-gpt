---
showLink: "https://www.youtube.com/watch?v=Fp9duJd6Txc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Creating a VDOM-less Renderer with Preact Signals"
description: ""
publishDate: "2022-10-29"
coverImage: "https://i.ytimg.com/vi/Fp9duJd6Txc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging live session exploring reactivity fundamentals, custom libraries with Preact signals, and the evolving landscape of frameworks like Next.js in modern web development.

## Episode Summary

This thorough conversation begins with a look at travel challenges and streaming plans, setting a relaxed tone for a deep technical exploration. Early on, the speaker experiments with building a custom renderer using Preact’s signal system, touching on core ideas such as fine-grained reactivity, tree shaking, and code splitting. Discussions then expand to consider performance benchmarks, highlighting memory usage, update speed, and how to mix different reactive paradigms. Midway, the focus shifts toward broader ecosystem considerations, like the intricacies of open-source funding and the tensions between major frameworks and deployment platforms. The speaker closes by reflecting on Next.js announcements and server components, weighing the effects of corporate alignment on open-source collaboration. Across these many hours, listeners gain both hands-on coding insights and a nuanced perspective on the future of JavaScript frameworks.

## Chapters

### 00:00 - 06:00 — Intro, Travel Woes, and Stream Setup

In the first few minutes, the host greets everyone and explains why this stream is a special opportunity, noting they will be busy traveling in the coming weeks. They mention a recent trip to Poland and describe the challenges of missed connections and limited sleep. This personal backdrop sets a friendly, informal tone, with the speaker settling in, opening chat windows, and ensuring all their streaming gear is ready.

They describe how a green-screen setup came about for streaming consistency, reflecting on lighting quirks that cause visual flickers. A sense of anticipation builds as they promise interesting technical content for the session. Viewers also learn about the streamer’s hectic schedule, highlighting that Friday streams will be paused for a while. The stage is set for a thorough exploration of reactivity and framework building that will follow.

### 06:00 - 12:00 — Preact Signals and Reactivity Overview

The speaker shifts attention to the main topic: creating a VDOM-less renderer using Preact’s Signals. They outline previous attempts at similar experiments with libraries like Vue, Knockout, and MobX, explaining how each offered partial insights but left space for more refined solutions. By referencing prior work, they show how frameworks can share a core renderer based on reactivity.

They introduce their library “dom expressions” and discuss its utility in making framework-agnostic renderers. Listeners get a sense of what building a reactive renderer entails, including the need for smaller, composable pieces that can be swapped out. This sparks curiosity about the unique steps required to adapt Preact Signals for the same approach, foreshadowing hands-on coding examples.

### 12:00 - 18:00 — Framework-Agnostic Renderer Goals

Focus falls on the vision of framework-agnostic reactivity, rooted in the idea that each system—be it Solid or Vue—could be built from a shared renderer. The host recounts how their initial aim was to test different reactive runtimes without strictly committing to a single approach. This builds a story of exploration, revealing a passion for discovering optimal design patterns.

They underscore how current solutions sometimes create overhead or mismatches when bridging reactivity and rendering. The speaker suggests that by treating the reactivity layer as a distinct concern, developers unlock unique performance advantages. The concept of hooking into any library’s effect system or state management stands out, hinting at broad possibilities for future expansions and library collaborations.

### 18:00 - 24:00 — Maintenance Costs and Solid’s Core Decisions

Here, the speaker acknowledges the practical side: maintaining a universal library can be cumbersome. They contrast the benefits of reusability with the added challenge of ensuring compatibility across many frameworks. Solid, for instance, has advanced features like transitions and suspense that go beyond simpler DOM rendering layers, suggesting that not everything is easy to generalize.

In parallel, they highlight how some features, such as advanced server-side rendering, or more nuanced performance optimizations, might need deeper integration. Even so, a consistent approach to reactivity remains valuable, exemplified by the memory of older experiments with RxJS, MobX, and other tools. The speaker sets expectations: building a robust, easy-to-maintain layer is still an evolving process.

### 24:00 - 30:00 — Revisiting a Preact Signals Sandbox

To ground the theory, the speaker opens an older code sandbox testing Preact Signals. They reflect on earlier attempts to see if signals from Preact could replicate the fine-grained updates typical of Solid. Recounting that everything mostly worked, they highlight a few missing features such as “untrack,” which can be important for more advanced patterns.

This segment reveals how certain reactive primitives simplify certain operations, while the absence of key methods can complicate them. The host muses that sometimes experimental features might be dropped from libraries, making it crucial to lock dependencies if you rely on those specifics. This builds anticipation for the upcoming live coding to reintroduce or adapt such capabilities.

### 30:00 - 36:00 — Overview of dom-expressions Setup

Attention returns to the user’s own build environment. The speaker outlines the folder structure of their library, detailing how “dom-expressions” compiles to a framework-specific runtime. They describe specialized exports for JSX, HyperScript, and template literal transformations. Each approach has its own trade-offs in bundle size or developer ergonomics.

Listeners hear about how, historically, generic code can be tricky to tree-shake, prompting a bundling strategy that merges only the symbols used. The speaker reveals small complexities like nested package.json files and older build pipelines. This behind-the-scenes look at the library’s tooling clarifies the puzzle pieces that will soon form the custom Preact signals renderer.

### 36:00 - 42:00 — Tying in Babel, TypeScript, and Build Steps

Next, the host delves into the build configurations with Babel, touching on how older setups differ from modern plugin approaches. They point out potential friction around TypeScript’s declarations, which sometimes complicate bundling. Despite not being a huge fan of overhead, the speaker sees the value in typed definitions for large codebases.

They emphasize the importance of externalizing dependencies like “preact-signals-core,” preventing them from bloating the final bundle. This underscores how thoughtful build steps can substantially improve the developer and user experience. In parallel, they note the intention to produce minimal overhead for end consumers, further underscoring a deep focus on efficiency.

### 42:00 - 48:00 — Interplay Between Reactivity and Ownership Graphs

Shifting to reactivity fundamentals, the speaker introduces the concept of “ownership” in reactive systems. Most frameworks, they note, track dependencies but skip an ownership mechanism. Solid’s approach extends reactivity to track nesting of effects, enabling automatic disposal when a parent stops.

They highlight complexities around context APIs, pointing out that each child effect must register itself for potential cleanup. Pre-empting the coding portion, the host warns that “untrack” is absent in Preact signals, which might pose hurdles in advanced use cases. The conversation previews design intricacies like disposal, effect queueing, and the difference between an effect framework and typical observer patterns.

### 48:00 - 54:00 — Dangers of Over-Memoization and Dep Arrays

Attention turns to patterns in React vs. reactivity-based frameworks. The speaker observes how React’s dependency arrays risk over-memoization, while signals can lead to unintended direct updates. They find parallels: each approach must carefully decide when to recalculate. However, reactivity is more implicit, reducing mental overhead for developers—until edge cases require “untrack.”

The host exemplifies typical pitfalls: destructuring signals can trigger re-renders or track dependencies unintentionally. This clarifies why certain frameworks push for minimal mutable APIs. A nuanced note arises: reactivity is both powerful and risky. Wrong usage easily leads to inconsistent states, so thorough design or compiler assistance is often recommended.

### 54:00 - 60:00 — Building Another Framework from Scratch

At this point, the speaker references a previous stream called “Petite Solid,” where they built a micro-view library from the ground up. They reminisce about how it showcased every step, from writing a templating approach to hooking in reactivity. Although it was niche, they found it highly instructive for understanding the interplay between signals and the DOM.

Listeners hear that the current session aims for a more high-level approach—porting an existing library structure to Preact signals. A sense of excitement emerges: while building from scratch is enlightening, bridging an existing reactivity system highlights real-world constraints. The conversation transitions into tackling actual code tasks soon.

### 60:00 - 66:00 — Reflecting on Past Live Streams and Tooling

The speaker jokes about their prior attempts at live coding and how they sometimes stumble with tooling. They recall streams about React Server Components that drew minimal attention months ago, compared to simpler Next.js content that resonated more. This highlights the unpredictability of developer interest.

They also express a personal preference for straightforward tools, sometimes resisting new build pipelines. Whether it’s code editors, bundlers, or plugin frameworks, they mention how each has a learning curve that can trip developers up. As the session builds toward coding, the speaker suggests that sometimes hacking things quickly can yield deeper insights than relying on heavy tooling from the start.

### 66:00 - 72:00 — Adding Preact Signals to a Library

Finally, the host starts bridging the code. They add “@preact/signals-core” to their dependencies, double-check versions, and anticipate how effect disposal might differ from solutions like Vue’s or Solid’s. They note minor differences in naming, such as “dispose” vs. “stop,” referencing how libraries handle teardown logic.

They mention that some advanced patterns, like untracked reading, may need creative solutions in the absence of a built-in method. The host warns that certain advanced tasks might lead them to rewrite or monkey-patch parts of Preact signals. Listeners sense the complexities of mixing lower-level reactivity with a flexible rendering approach.

### 72:00 - 78:00 — Observing Code Layout and Package Exports

During these minutes, the streamer shows off the library’s folder structure: “client,” “core,” and “lib.” Each directory has distinct responsibilities for re-exporting or bundling specialized runtime features. By pointing at code referencing “hyper DOM expressions,” they reveal how the library supports multiple templating styles without rewriting each from scratch.

Such a layout also helps tree shaking, ensuring any final build includes only the code actually used. Despite the older Babel pipeline, the system remains functional. The speaker hints that rewriting everything in a more modern approach might yield improvements, but for the current experiment, the existing setup suffices.

### 78:00 - 84:00 — Handling Cleanup and Effects

Moving deeper, the speaker navigates the “lib” folder to demonstrate how “root” constructs handle disposal arrays. They highlight how each root can register nested effects, making it easier to manage large reactive trees. This design parallels Solid’s ownership concept, letting parent scopes control the lifecycle of child computations.

Listeners hear about parallels to typical effect logic: clearing dependencies, re-running code, and hooking into parent disposals. However, they note that Preact signals might differ in scheduling or deferral, requiring a small shim. An understanding emerges that cross-library bridging demands reconciling unique scheduling patterns, especially around synchronous or asynchronous effect re-execution.

### 84:00 - 90:00 — Computed Signals and Lazy Execution

The host examines a “createMemo” or computed function, comparing how various libraries handle lazy vs. eager evaluation. In some systems, running a function twice is necessary at initialization to capture dependencies properly. They show that Preact’s approach might differ, so a small hack might ensure everything aligns.

They contemplate removing extra function calls if Preact signals are synchronous enough. This reveals that not all reactive frameworks share the same staging rules. A portion of the conversation underscores the delicate dance between ensuring correct dependencies and preventing double computation, especially at library boundaries where patterns can clash.

### 90:00 - 96:00 — Fine-Grained Selector Patterns

The conversation shifts to a more specialized pattern: “createSelector,” which solid uses to track items in a list individually. The host recalls scenarios where updating a subset—like marking a single row “selected”—should not re-run an entire list. This underscores the hallmark of fine-grained reactivity: minimal re-rendering.

Listeners learn how signals behind the scenes store metadata in maps, linking specific IDs to each subscriber. The discussion highlights how advanced patterns let you handle large data sets efficiently by localizing updates. It’s a key reason fine-grained solutions beat naive VDOM approaches in certain benchmarks, showcasing the real power behind reactivity.

### 96:00 - 102:00 — Minimizing Re-Renders and The “Show” Component

Here, the host emphasizes one big advantage of fine-grained reactivity: controlling re-renders at a very granular level. They contrast it to VDOM libraries that might reconsider an entire tree or rely on heuristics. By crafting small logic blocks and “Show” components, you can toggle or conditionally render sections without calling a global update cycle.

They also mention untrack again, crucial for preventing certain expressions from tying in where not intended. This cautionary note warns how nested conditionals or partial computations can cause unintentional expansions of the reactive graph, leading to extra overhead. The short message: done right, reactivity yields huge benefits; done sloppily, it can breed confusion.

### 102:00 - 108:00 — Suspense, Lazy Imports, and Easy Async Patterns

Attention turns to Suspense and lazy loading. The host clarifies that in reactive systems, you barely need elaborate logic to fetch data or import modules. Instead, signals handle pause and resume elegantly, letting the system skip heavy re-renders. One snippet: “import a module, set a signal, and watch the UI update seamlessly.”

They note that while React uses Suspense for this orchestration, a deeper reactive library can do so with simpler solutions. That said, orchestration features like Suspense are still valuable for advanced tasks like coordinating multiple asynchronous data sources. The speaker draws parallels to how the same logic can be trivially replaced by signals in the right scenario.

### 108:00 - 114:00 — Templating Differences and Compiler Advantages

The streamer underscores how the library supports multiple templating forms—JSX, HyperScript, or tag template literals—each with distinct runtime overhead. With hyper-scripting, the user must handle reactivity manually, leading to bigger bundles for advanced behaviors. In contrast, a compiler approach, like Solid’s, inserts minimal runtime pieces automatically.

They reiterate that although the library does ship these different methods, they personally prefer a build step for production use. The host sees open-source value in shipping them anyway, so anyone can spin up quick experiments in a code pen. This fosters a no-compile playground, albeit at the expense of code size efficiency.

### 114:00 - 120:00 — Cloning the View xJSX Approach

As coding continues, the speaker references their earlier “viewrx-jsx” project. They plan to copy that scaffolding and systematically replace Vue’s reactivity calls with Preact signals. Because the code is built to be modular, they expect minimal friction, but they also anticipate minor function signature mismatches or missing features.

This leads to reflection on how smaller libraries might provide enough coverage for simpler scenarios, but more complex data flows require advanced pieces like transitions or nested computations. The host clarifies how this difference has guided Solid’s specialized expansions beyond the generic “dom-expressions” core, foretelling possible trade-offs as they integrate Preact signals.

### 120:00 - 126:00 — Babel, TypeScript Quirks, and Blind Refactoring

The speaker acknowledges some rough edges. They might have to patch type definitions or ignore them. They remark that while they value TypeScript in large projects, they find it intrusive or tedious during rapid prototyping. This leads to comedic mentions of sprinkling “as unknown as any” just to silence TypeScript’s complaints.

Listeners see how live coding can involve repeated build attempts, small test runs, and debugging typical TypeScript friction. The host jokes that historically they coded “blind,” trusting logic more than compiler assistance. Though they see the benefits for larger teams, they emphasize efficiency in the moment.

### 126:00 - 132:00 — Untrack: The Missing Piece

Back to advanced reactivity, the streamer hones in on “untrack” and how it’s missing from Preact signals. They stress that if your library lacks a direct method, you might hack around it or do partial solutions. Real examples might be array map functions that need untracked reads, or complex nesting that leads to unexpected re-renders.

Without “untrack,” one must carefully avoid data reads inside tracked computations, or risk performance hits. They exemplify how “untrack” in libraries like Solid or Vue can isolate certain expressions. Despite the potential pitfalls, the speaker remains upbeat, believing Preact signals can still power the main aspects of a reactive renderer.

### 132:00 - 138:00 — Testing Basic Library Builds

During this segment, the host tries the first build of their Preact signals library. They walk through standard steps: “npm install,” “npm run build,” watch for errors, correct naming mistakes, and double-check externalization. They highlight pitfalls like typos in the package name or version mismatches that can break the build pipeline.

A moment of triumph arises when the library compiles without major crashes. The speaker warns that it doesn’t guarantee correctness but is at least a good sign. Their next step, they say, is to test an actual app in a sandbox environment to see if the new build works in practice.

### 138:00 - 144:00 — Code Sandbox Demo and Quick Hello World

To confirm success, they open a Code Sandbox and install the newly published “preact-rx-jsx” package. They replicate a simple “Hello World” or “counter” example to confirm the signals update the DOM. Observing that updates flow smoothly, the host celebrates that it “just works,” though they remain cautious about untracked scenarios or deeper patterns.

They highlight the difference between local testing and a real deployment environment. This step cements that basic reactivity and fine-grained rendering are indeed functional. The talk of ephemeral code experiments fosters a sense that developers can now push boundaries using Preact signals in a more direct, no-VDOM setup.

### 144:00 - 150:00 — Benchmark Preparation with JS Framework Benchmark

Eager to gauge performance, the speaker mentions the widely recognized “JS Framework Benchmark.” They plan to pit normal Preact, Preact signals, and this new “preact-rx-jsx” approach against each other. Past experience suggests that eliminating the VDOM yields big speed wins, but memory usage or partial updates might vary.

They recall experiences building hundreds of benchmarks—like “knockout-jsx,” “mobx-jsx,” and so on—each overshadowing the original library in update times. The speaker’s excitement builds: can Preact signals-based rendering hit near-Solid performance levels? This teases the audience with a potentially big reveal once the tests complete.