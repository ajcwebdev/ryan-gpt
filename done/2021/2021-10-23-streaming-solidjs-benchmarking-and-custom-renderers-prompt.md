---
showLink: "https://www.youtube.com/watch?v=Yi_MJ8cVCCs"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS - Benchmarking and Custom Renderers"
description: ""
publishDate: "2021-10-23"
coverImage: "https://i.ytimg.com/vi/Yi_MJ8cVCCs/sddefault.jpg?v=6172edbd"
---

## Episode Description

Ryan Carniato surveys JavaScript framework performance benchmarking history, from early VDOM tests through snapshot and animation suites, and reveals how SolidJS’s new custom renderer optimizes every platform.

## Episode Summary

In this nearly three-hour livestream, Ryan Carniato traces the roots of JavaScript framework benchmarking, explaining why SolidJS began as a metrics-driven experiment and how fine-grained reactivity reshaped performance expectations. He kicks off by recounting Twitter exchanges—from Jason Miller’s Preact compiler experiments to XState’s reflections on React’s useEffect mental model—to frame reactivity as a universal language. The discussion moves through classic animation (circle spinner), snapshot (DB-mon) and list-based (JS Framework Benchmark) tests, exposing the biases and cheats of each approach. Carniato then demonstrates how he tuned Solid’s reconcile algorithm to match or exceed VDOM libraries across scenarios, even live-coding a universal DOM renderer that highlights Solid’s platform-agnostic design. Along the way, he offers guidelines on fair baselines, profiling in Chrome DevTools, and preventing common cheats, wrapping up with a preview of Solid 1.2’s advances and upcoming community events.

## Chapters

### 00:00:00 – Introduction & Benchmarking Origins

In the opening minutes, Ryan Carniato welcomes viewers to his SolidJS stream and sets the stage by emphasizing the importance of measurable performance. He introduces benchmarking as the heart of Solid’s creation, noting that without clear metrics, no new framework could gain traction. Carniato reveals that Solid began as an exploration of fine-grained reactivity, though he suspected few would adopt it without tangible proof. He invites chat participation and outlines the session: revisiting framework benchmarking history, sharing recent community insights, and unveiling new Solid 1.2 features that extend its reactive core beyond the DOM.

Building on that introduction, Carniato explains his criteria for recommending frameworks: confidence in their performance before inviting others to try them. He describes how early tweets from figures like Preact’s Jason Miller and XState’s David Khourshid sparked conversations about reactivity as a composable language. By framing reactivity’s primitives—signals, derivations, reactions—as a concise vocabulary, he argues it becomes feasible to compile reactive code to multiple targets. These opening remarks underline the talk’s dual goals: charting a historical narrative and demonstrating how Solid turns those lessons into cutting-edge custom renderers.

### 00:06:00 – React Hooks & Mental Models

As the stream progresses, Carniato examines the mental model challenges of React’s useEffect hook and dependency arrays. Citing David Khourshid’s jokes about effects feeling too imperative or too declarative, he unpacks why developers often jam logic into monolithic effects or wrestle with ESLint rules. He contrasts React’s escape-hatch approach—refs, callbacks, and dependency whitelists—with reactive systems’ inherent granularity, where computations automatically track dependencies. Carniato notes that breaking effects into multiple reactive computations removes awkward conditional logic and aligns more naturally with developers’ expectations.

He then surveys the community’s calls to simplify React’s dependency management—debates about compiler-driven arrays versus explicit hooks—and explains why reactivity frameworks like Vue adopt whitelists through watch and on operators. Carniato concludes that while React’s memoized functions suit its VDOM architecture, pushing React toward reactive primitives may be both impractical and unnecessary. He frames this tension as the backdrop for today’s deep dive into benchmarking: understanding each approach’s trade-offs requires careful, context-aware performance tests.

### 00:12:00 – Early Frameworks & Live Tutorials

Carniato journeys back to pre-React days, spotlighting frameworks like Knockout.js, Angular, and Ember. He reminisces about Knockout’s pioneering live tutorials—editable code editors with a “fix my code” button that predated modern in-browser learning platforms. Despite its “horrid” data-binding syntax, Knockout’s computed observables and live diffing foreshadowed Vue’s Composition API and React Hooks. He highlights how those early tutorials offered split-pane views of template, code, and output, teaching users through incremental diffs rather than lengthy prose.

He then recounts how React’s 2013 release upended these paradigms by championing a Virtual DOM: “just re-render everything” but diff it cheaply in memory. Although React claimed real-world gains, Carniato resisted the idea that the DOM was fundamentally slow. His love for granular updates spurred him to author initial JSFiddle benchmarks, measuring circle animations to prove that direct reactivity could outperform wholesale re-renders. This section sets up the core theme: every new innovation—from live tutorials to VDOM—spurred fresh performance tests.

### 00:18:00 – Spinning Circles & Early Benchmarks

In this chapter, Carniato dives into the famed “circle spinner” benchmarks—online demos originally authored by Jeremy Ashkenas to compare Backbone and Ember animation speeds. He explains how these JSFiddle tests measured only framework overhead, ignoring paint and layout, yet sparked dozens of forks adding React, Vue, and Knockout. Observing wildly divergent results on different machines, Carniato recognized the need for more rigorous, repeatable testing. He recounts how he began tuning Solid’s templating engine on his own laptop, iterating until it achieved sub-8 ms loops on an M1 Mac.

He shares live measurements: Backbone at \~7.8 ms, Inferno at \~5.4 ms, vanilla JS at \~5 ms, Solid at \~7–8 ms, and Lit slightly slower. As tests added CPU throttling, the spread widened—Backbone at \~40 ms vs. Solid at \~9 ms—demonstrating that browser throttling can mask framework behavior. Carniato emphasizes that over time, framework overhead ceased to be the bottleneck; GPUs and browser engines took center stage. Yet these early benchmarks validated reactivity’s promise and propelled Solid’s performance tuning.

### 00:24:00 – Animation vs. Snapshot vs. List Tests

Carniato categorizes runtime benchmarks into three types: animation, snapshot, and list (ToDo-MVC-style) tests. Animation benchmarks—like the circle spinner—stress granular updates, while snapshot benchmarks flood the view with large data blobs to test full re-renders. List benchmarks simulate typical CRUD operations on tables or lists, reflecting real-world UI interactions. He argues each type exposes different trade-offs: animation shows fine-grained strengths, snapshot highlights diffing algorithms, and list tests surface reconciliation and memory allocations.

Using examples, Carniato illustrates how early snapshot tests—such as DB-mon by Ryan Florence—claimed Virtual DOM superiority through spamming large tables, measuring repaint rates and memory use. He notes that while snapshot suites demonstrated VDOM gains, they often omitted paint costs and relied on rigged scenarios. By understanding these categories, framework authors can design fairer tests, avoid one-size-fits-all conclusions, and choose benchmarks that align with their applications’ real update patterns.

### 00:30:00 – Snapshot Deep Dive & Reconcile Algorithm

Focusing on snapshot benchmarks, Carniato revisits the DB-mon test that measured hundreds of rows and columns updating en masse. He demonstrates variations in mutation rates—from 0% to 100%—and shows how frameworks like React, Inferno, and Vanilla JS compare. While Virtual DOM libraries excel under full re-render workloads, fine-grained systems suffer without specialized algorithms. Carniato introduces Solid’s `reconcile()` function, designed to diff data blobs efficiently with optional keys and merge strategies, matching VDOM speeds in these harsh scenarios.

He discusses common cheats—non-keyed updates that recycle DOM nodes, deferred rendering, or microtask tricks—and the pitfalls they introduce for form controls, animations, and web components. Solid’s reconcile merges key and index strategies to ensure both performance and correctness. Carniato highlights how accurate benchmarks demand real-world patterns—node recycling and key checks matter—and previews how Solid’s snapshot performance became competitive with the fastest VDOM solutions.

### 00:36:00 – JS Framework Benchmark Origins

In this segment, Carniato presents the JS Framework Benchmark—ToDo-MVC-style CRUD tests maintained by Stefan Krause—as the industry’s most popular list benchmark. He covers its genesis around 2016–17, when community members first ported React, Angular, Vue, and others to a consistent ToDo interface. Each implementation performs row creation, replacement, partial updates, selection, swaps, removals, and clearing operations, plus measures load times and memory usage. Krause’s stewardship and wide community buy-in make it a de facto standard for fair comparisons.

Carniato recounts how maintainers like Dan Abramov, Evan You, Rich Harris, and community contributors submit optimized implementations under strict guidelines—preventing manual DOM hacks or model view-state shortcuts. He notes Angular’s sparse participation and the later additions of Stencil, Alpine, and Web Components demos. This chapter establishes the benchmark’s authority, explaining its balanced weightings and how it tests both creation and update scenarios in a reproducible Puppeteer-driven suite.

### 00:42:00 – Frameworks in the JS Benchmark

Continuing on the JS Framework Benchmark, Carniato reviews the current leaderboard: Solid, Inferno, and Mikado at the front, followed by Preact, React, Vue, and others clustered within milliseconds of each other. He highlights how improvements in Chrome and V8 shift leaderboard positions over time, and how geometric mean weightings can favor certain operations. Carniato praises Stefan’s categorization flags—manual DOM, view-state on model, animation frame hacks—and how they surface frameworks’ unique optimizations or divergences from idiomatic usage.

He emphasizes that as frameworks converge on performance, memory usage becomes the next battleground. Solid’s store-based implementation and fine-grained signals deliver low memory overhead, but flagged differences in clear-rows tests reveal opportunities for event delegation or batch updates. Carniato advises authors to examine each operation’s weight—select-row vs. partial update vs. clear-rows—and align optimizations with their libraries’ intended use cases.

### 00:48:00 – Vanilla JS Baseline & DOM Tricks

Shifting focus, Carniato inspects the vanilla JS implementation that serves as the benchmark’s baseline. He details six approaches to clearing table rows—loop removal, backward iteration, `innerHTML=''`, document fragments, `Range` API, and textContent resets—and explains why `textContent=''` emerged as the fastest. By profiling each method in Chrome DevTools, he teaches viewers how to discover expensive DOM operations and avoid unnecessary layout triggers, such as reading computed properties.

Carniato further illustrates grouping attribute updates into batched operations rather than individual diffs, explaining that a simple 10-property diff on each element adds negligible overhead compared to raw creation costs. This deep dive into vanilla optimizations underscores his mantra: every framework should perform between an optimal vanilla implementation and a minimal innerHTML baseline. Techniques like document fragments and node cloning can help, but choosing the right baseline is critical for fair benchmarking.

### 00:54:00 – Animation Benchmark Resurgence

With React Concurrent Mode’s arrival, animation benchmarks have returned to prominence. Carniato demonstrates the Sierpinski Triangle benchmark, where nested delay functions compound exponentially at each recursion level. By inserting artificial CPU slowdowns in each triangle segment, this test stresses scheduling and non-blocking renders. He critiques common community forks that skip slowdown injection—thereby invalidating the comparison—and shows how true benchmarks must simulate realistic work queues.

He reviews React 15’s blocking behavior versus React 16’s fiber scheduler, highlighting how concurrent rendering splits long tasks into smaller units to maintain interactivity. By comparing Solid’s fine-grained updates, which naturally batch and interrupt effects, Carniato argues that similar non-blocking patterns can be achieved without a complete scheduler rewrite. He encourages viewers to script proper slowdowns and verify metrics locally rather than trusting incomplete demos.

### 01:00:00 – 3D & Custom Rendering Demos

Carniato explores cutting-edge demos that push framework boundaries into 3D space, such as react-three-fiber’s block grids and Loom element experiments. He critiques Paul Henschel’s fiber-based 3D demo, noting that GPU rendering costs dominate DOM scheduling overhead. By porting the example to Solid, Joe Pias demonstrates orders-of-magnitude higher object counts—tens of thousands of blocks—by leveraging direct WebGL calls and Solid’s reactive primitives only for data flow.

This chapter illustrates how custom renderers can delegate heavy lifting to specialized engines (Canvas, WebGL, mobile bridges) while Solid components act as lightweight orchestrators. Carniato explains that the ideal renderer decouples component logic from underlying drawing APIs, enabling seamless portability. These demos foreshadow Solid’s upcoming universal rendering capabilities, where authors can target any platform by implementing a minimal set of DOM-like methods.

### 01:06:00 – Motivations & Community Impact

Reflecting on his journey, Carniato shares how benchmarking shaped his career trajectory: from private experiments to open-sourcing Solid to contribute to the JS Framework Benchmark. He recalls quitting social media for years, then joining Twitter in 2019 to evangelize Solid’s performance. Early excitement around React Hooks helped Solid gain traction, but it was consistent benchmark showings that cemented credibility among maintainers and companies like eBay.

He underscores the importance of community feedback and collaboration—whether React Router’s Ryan Florence refining snapshot tests, or Vue’s Evan You optimizing the 3.2 composition API implementation. By contributing robust ports and championing best practices, authors across ecosystems have elevated the quality of benchmark submissions. Carniato encourages viewers to join Discord channels, propose new tests, and maintain open dialogues to ensure benchmarks remain fair and representative.

### 01:12:00 – Custom Renderers & Platform Agnosticism

Turning to Solid 1.2’s highlight, Carniato introduces custom renderers that allow Solid components to target any host environment. He explains that Solid’s compile-time JSX transforms generate calls to a pluggable renderer API—functions like `createElement`, `createText`, `setProperty`, `insertNode`, and `removeNode`. By swapping which module these calls import from (e.g., `solid-js/dom` vs `solid-js/universal`), developers can render to DOM, mobile bridges, Canvas, or WebGL with no changes to component code.

He walks through a minimalist DOM renderer implementation: mapping each DOM-like method to `document.createElement`, `textNode.data = …`, or `node[camelProp] = value`. With only a few dozen lines of code and a small Babel config tweak (`generate: 'universal'`), this renderer runs the JS Framework Benchmark alongside Solid’s default. Carniato highlights how Universal JSX preserves fine-grained reactivity and control flows (`<For>`, `<Show>`, `<Suspense>`) across arbitrary hosts.

### 01:18:00 – Building & Configuring the Universal Renderer

In this hands-on segment, Carniato codes a custom “universal” renderer from scratch. He scaffolds a new `solid-universal` package, adjusts Rollup and Babel presets to point JSX transforms at it, and defines the minimal host API. As he types `createElement`, `createText`, `setProperty`, and event handlers, viewers see how Solid’s compiler injects calls to these methods. The stream features live debugging—resolving missing imports and type errors—demonstrating a real-world approach to experimentation.

Carniato then runs the demo in a fresh browser tab. The same ToDo MVC interface appears, now powered by his custom renderer. Buttons respond, rows update, and class toggles operate seamlessly—all without DOM-specific imports. This exercise underlines Solid’s design philosophy: components remain platform-agnostic, with rendering details abstracted into interchangeable backends.

### 01:24:00 – Performance Results for Universal Renderer

Next, Carniato benchmarks the universal renderer against Solid’s default DOM engine and Svelte. He runs the JS Framework Benchmark’s performance suite—create, update, swap, clear, append operations—and reveals surprising results: the naive renderer, despite lacking event delegation or advanced batching, matches or outpaces many frameworks. Solid-proper still leads overall, but the custom layer clocks in near Inferno’s speed, demonstrating that Solid’s core reactivity can shine even on minimal host APIs.

He discusses how missing event delegation (per-row handlers) slightly inflates update costs, and notes that pure DOM calls without Solid’s optimizations still perform admirably. This real-time comparison validates Solid’s universal slots as more than a theoretical feature: with minimal code, developers can achieve production-grade performance on any target environment.

### 01:30:00 – Handling Build Hiccups & Tooling

Carniato walks through common pitfalls when wiring up a custom renderer: misconfigured Rollup plugins, TypeScript complaints about missing exports, and stale module caches. He demonstrates how to clear `node_modules`, reinstall dependencies, and adjust import paths. Live troubleshooting of build failures and server errors illustrates best practices for local experimentation. These lessons equip viewers to avoid frustrating “ghost folders” and unexpected rollup behaviors when customizing Solid’s compiler settings.

He emphasizes the importance of isolating your renderer code in a standalone package to prevent conflicts with Solid’s main distribution, and shows how incremental rebuilds and dedicated dev servers accelerate iteration. By sharing his workflow—installing beta Solid releases, updating dependencies, and verifying browser console logs—Carniato provides a template for anyone extending Solid’s toolchain.

### 01:36:00 – Deep Performance Analysis

Revisiting benchmark tables, Carniato dissects individual test metrics: createRow, replaceRows, partialUpdate, selectRow, swapRow, removeRow, createMany, appendToLarge, and clearRows. He highlights cases where the universal renderer outperforms Svelte on partial updates, attributing gains to Solid’s signal batching. Conversely, he points out table clears and row swaps where per-row class toggles or list reconciliation costs dominate. These nuanced insights help authors prioritize optimizations based on their UIs’ most common operations.

He also explains how geometric means can mask individual outliers—one slow test can drag averages lower—so profiling each case is crucial. By cross-referencing CMS-style workflows (sorting, filtering, pagination) with benchmark weights, Carniato advises selecting the most impactful optimizations for your application’s usage patterns.

### 01:42:00 – Bundle Size & Load Times

Shifting focus to startup metrics, Carniato compares bundle sizes: the universal renderer grows by roughly 800 bytes over Solid’s default DOM runtime. He attributes this to inlining minimal host APIs versus Solid’s built-in tree-shaking of unused imports. Script load times remain identical across setups, confirming that small byte differences do not affect parse or compile phases significantly. This data reassures authors that custom renderers incur negligible startup costs.

He then reveals memory benchmark results: JS Framework Benchmark’s memory tests for createRow, updateRow, replaceRows, clearRows, and appendRows. The universal renderer shows a modest uptick in allocations—primarily due to per-row event handler functions—but stays within the same footprint as Svelte. Carniato stresses that delegate-based handler injection and pooling could recoup these bytes, offering a clear roadmap for future refinements.

### 01:48:00 – Profiling & Regression Detection

In this chapter, Carniato turns to Solid’s internal bench suite (`bench/` folder) for regression hunting. He runs headless benchmarks measuring creation, update, and deletion operations on nested lists, comparing Solid’s stable release against experimental versions. With each V8 update, scores fluctuate, prompting targeted optimizations. Carniato demonstrates using Chrome DevTools’ CPU and Memory profilers to identify expensive reactive graph traversals, then refines effect queuing and batching to shave milliseconds off core operations.

He recounts a month-long side project exploring alternative reactive scheduling—notification queues vs depth-first effect graphs—to support concurrent transitions. While some variants achieved raw speed gains, they compromised interruptibility. Ultimately, Solid retained its existing queuing mechanism, balancing performance and responsiveness. This introspection highlights the trade-offs inherent in reactive engine design.

### 01:54:00 – Reactivity Models Explored

Carniato shares his experiments with alternative reactivity models—custom schedulers, fine-tuned effect graphs, and microtask tricks—conducted off-stream. He documents four prototype engines, each emphasizing different optimizations: minimal queue overhead, direct graph walks, or batched updates. Although some designs ran faster in synthetic benchmarks, they broke under concurrent scenarios, lacking Solid’s ability to interrupt and resume tasks during transitions. These revelations underscore that benchmark speed alone cannot justify ditching proven reactive semantics.

He concludes that while micro-optimizations can yield marginal gains, maintainability, correctness, and developer ergonomics must guide architectural choices. By preserving simple, interruptible depth-first effect queues, Solid retains consistent performance across animation, snapshot, and list workloads, without sacrificing real-time interactivity.

### 02:00:00 – Nested Computation Benchmarks

Turning to the “CellX” nested computation test, Carniato showcases a pathological benchmark that creates deep dependency chains—50+ levels of memos and computed values nest. He compares Solid, MobX, Knockout, and S.js, revealing varying warm-up times and performance plateaus. While some systems crash under extreme depths, Solid maintains stable update times around 2 ms per cycle, reflecting its efficient signal graph implementation. MobX lags slightly behind, and older dirty-checking engines fall further back.

Carniato cautions that real applications rarely nest so deeply, but such benchmarks expose memory patterns and graph traversal costs. He encourages framework authors to test edge cases—large reactive trees, cross-component dependencies—to uncover latent bottlenecks and validate garbage collection behavior under stress.

### 02:06:00 – Real-World Demo & Hydration

Next, Carniato revisits the “Real-World Demo” benchmark, comparing server-rendered applications across frameworks. He notes how Solid’s SvelteKit-like implementation benefits from streaming SSR and minimal hydration code, resulting in smaller bundle size and faster client render compared to React and Vue. Disparities in hydration strategy—DOM diffing vs direct node reuse—translate into measurable first-interactive times. Carniato underscores that hydration timing, code splitting, and streaming support are as vital as raw runtime speed.

He advises authors to optimize server pipelines for progressive hydration and to profile network and CPU contributions separately. Only by treating SSR and client hydration as a unified performance surface can frameworks deliver seamless user experiences on slow connections and devices.

### 02:12:00 – Snapshot vs List vs Animation Redux

Reiterating benchmark categories, Carniato synthesizes lessons across animation, snapshot, and list tests. He reminds viewers that animation benchmarks reward fine-grained updates but ignore creation costs. Snapshot suites favor fast diffing algorithms but obscure incremental change performance. List-based CRUD tests offer the most balanced view, combining creation, update, and removal under realistic patterns. By cross-referencing results, developers can choose the right tests for their UIs and avoid over-optimizing for edge cases.

He emphasizes that no single benchmark captures all real-world needs; a healthy suite should include all three categories, plus SSR and bundle-size assessments. Solid’s consistency across these domains exemplifies the benefits of an integrated reactive engine.

### 02:18:00 – Community & Maintainer Roles

Carniato pays tribute to the many contributors who keep benchmarks fair and current: Stefan Krause’s stewardship of the JS Framework Benchmark; Dan Abramov’s React Hooks guidance; Evan You’s Vue 3.2 PR; Rich Harris’s rethinking reactivity talk; and Jason Miller’s Preact experiments. He highlights how each maintainer’s domain expertise elevates test quality, from snapshot fairness to animation realism. This collaborative culture ensures benchmarks evolve alongside frameworks rather than ossify obsolete scenarios.

He calls on viewers to file issues, propose new tests, and submit pull requests—benchmarks are living documents that require community vigilant oversight. By participating, developers help define meaningful performance narratives that guide both framework evolution and real-world application design.

### 02:24:00 – Best Practices for Authors

Drawing on three hours of insights, Carniato distills key recommendations for framework authors: always include an optimal vanilla baseline and an `innerHTML` fallback; use Chrome DevTools to profile both CPU and paint times; expose clear categorization flags to prevent cheats; and maintain a dedicated benchmark suite for regression detection. He underscores the importance of test reproducibility—locking browser versions, using headless runners, and sharing exact code samples.

He also advises balancing micro-optimizations with ergonomics: avoid premature complexity, favor straightforward effect queuing that supports interrupts, and document any host-specific renderer decisions. By following these guidelines, authors can present transparent, trust-worthy performance claims that resonate with both technical and non-technical audiences.

### 02:30:00 – Future of Solid & Benchmarks

In the final technical segment, Carniato previews upcoming SolidJS enhancements: first-class support for universal JSX renderers, refined transition scheduling, and optional tree-shaking for unused control flows. He explains how future versions will streamline custom renderer creation, reduce boilerplate, and integrate event delegation patterns natively. These features promise to close the small performance and memory gaps observed in today’s benchmarks.

Looking ahead, Carniato expresses his hope for new benchmark categories—mobile device tests, accessibility-impact measurements, and network-aware hydration timings. He invites the community to innovate beyond CRUD tables, exploring benchmarks that reflect emerging web patterns like microfrontends, offline-first apps, and WebXR experiences.

### 02:36:00 – Q\&A Prelude & Workflow Tips

As the stream nears its close, Carniato takes audience questions on Twitch chat and shares workflow optimizations: using VS Code snippets for boilerplate, setting up CI pipelines for auto-bench runs, and leveraging GitHub Actions to compare PR performance diffs. He recommends isolating benchmark code in separate repos to avoid cross-contamination and using versioned Chrome Docker images for deterministic results.

He also shares personal habits—batching updates with Solid’s `untracked` API for rare exceptions, and employing Chrome’s Performance panel for flame chart analysis rather than relying solely on raw numbers. These tips equip framework authors and app developers to integrate performance testing smoothly into everyday development.

### 02:42:00 – Upcoming Talks & Community Events

In closing, Carniato announces his upcoming conference appearances—remote talks at HolyJS Russia (Nov 3) and JSConf India (Nov 15)—and plans to prerecord sessions due to time zone constraints. He teases future livestream topics, from deep-dive debugging to mobile bridge integrations and case studies of Solid in production. He encourages viewers to suggest guests—from Solid ecosystem maintainers to third-party library authors—to diversify perspectives and cover fresh use cases.

This forward look underscores Carniato’s commitment to continuous learning and community engagement. By combining benchmark rigor with open conversations and real-world demos, he aims to keep SolidJS at the forefront of reactive innovation.

### 02:48:00 – Final Wrap-Up & Thanks

As the clock passes the three-hour mark, Carniato thanks everyone for sticking through the marathon session, from early participants in the chat to weekend viewers catching the recording. He expresses gratitude for community feedback that shaped Solid’s evolution and for the many contributors who maintain benchmark suites. With a final reminder to explore benchmark repositories and documentation, he signs off—inviting viewers to join the Discord, file issues, and stay tuned for the next stream, confident that performance conversations will only grow richer.