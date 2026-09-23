---
showLink: "https://www.youtube.com/watch?v=C83XD19-1jg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "2-way Binding and REPL Diving"
description: ""
publishDate: "2021-10-30"
coverImage: "https://i.ytimg.com/vi/C83XD19-1jg/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato’s stream navigates recent JavaScript news—Solid 1.20, Next.js 12, edge streaming demos—and examines two-way binding, reactivity patterns, and framework compilation.

## Episode Summary

In this nearly three-hour live stream, Ryan Carniato begins with a quick personal update and then dives into a tweet that reignited the long-standing debate over two-way data binding versus one-way reactive flows. He celebrates the release of Solid 1.20—with built-in support for custom renderers that unlock native and non-DOM targets—and demonstrates its performance by benchmarking against other frameworks. Next.js 12’s edge-streaming capabilities take center stage as Ryan builds a Hacker News clone on Vercel using Cloudflare’s streaming underpinnings. He then unpacks why out-of-order HTML streaming, partial hydration, and zero-JS payloads dramatically improve perceived performance. Returning to binding, he contrasts controlled, uncontrolled, and hybrid form patterns across Solid, Vue, Svelte, and Marco, revealing pitfalls in fine-grained reactivity and proxy-based nested updates. Finally, through REPL “diving,” he compares each framework’s compiled output—both client and server—before mapping out future roadmap priorities for Solid and Marco.

## Chapters

### 00:00:00 – 00:06:00 • Opening Remarks and Stream Setup

Ryan kicks off the session by greeting viewers and teasing a more free-form, topical stream than usual. He explains that he’s been swamped with speaking engagements and a major Solid 1.20 feature rollout, so he may ramble—inviting chat participation to steer the conversation. By framing the stream around his Twitter feed, he sets expectations that today’s episode will hop between JavaScript ecosystem highlights rather than deep dives into a single library.

In this opening segment, viewers get a window into Ryan’s hectic week and the broad scope of topics he plans to cover. He emphasizes that today’s format is driven by real-time discussion: if the chat wants to drill into any topic—be it performance benchmarks, API design, or streaming GraphQL—he’s ready to jump in. This sets a collaborative tone and primes the audience for a dynamic, audience-guided journey.

### 00:06:00 – 00:12:00 • Twitter-Inspired Topic Kickoff

The conversation launches from Kyle Shevlin’s tweet: “What makes two-way binding suddenly okay?” Ryan recalls React’s initial triumph in rejecting two-way binding in favor of one-way data flow and the “verbosity is a feature” mantra. He frames today’s exploration as a chance to question long-held opinions, reminding viewers that every platform evolves and it’s vital to revisit past decisions with fresh eyes.

Here, Ryan underlines the importance of remaining intellectually flexible rather than dogmatic. By acknowledging React’s historical role in reducing bugs through a clear data-flow model, he honors its contributions while signaling an openness to reconsider two-way binding in contexts where tooling and performance characteristics have shifted dramatically in recent years.

### 00:12:00 – 00:18:00 • Revisiting Two-Way Binding Debates

Building on the tweet, Ryan digs into the nuances of binding patterns. He revisits how Angular’s digest cycle struggled with two-way binding and how early fine-grained reactive libraries like KnockoutJS faced their own challenges, albeit in different areas. This paves the way for a more technical contrast: when is two-way binding a performance liability versus a developer convenience?

By weaving history with technical insight, Ryan illustrates that binding paradigms have trade-offs at every level—from dirty-check loops to subscription overhead in reactive stores. He encourages viewers to consider both runtime cost and mental model clarity when evaluating binding options in modern frameworks.

### 00:18:00 – 00:24:00 • Solid 1.20 and Native Renderer Support

Ryan celebrates the Solid 1.20 release, unveiling first-class custom renderer hooks that open the door to truly native targets—iOS, Android, WebGL, Canvas, or even embedded devices. He explains that the new API is so flexible it doesn’t presume DOM semantics, enabling frameworks like Solid to power GUI layers beyond the browser.

He then shares early benchmark results: using Solid’s naive custom renderer, he joins the JS Framework Benchmark leaderboard on par with Inferno. This proof-of-concept underscores Solid’s hallmark—ultra-fast reactivity with minimal overhead—while hinting at a burgeoning ecosystem of cross-platform apps built on the same core reactive model.

### 00:24:00 – 00:30:00 • Solid’s Custom Renderer Benchmark

Turning to raw numbers, Ryan walks through his JS Framework Benchmark run: Solid’s custom renderer scores above Svelte and rivals other VDOM-based libraries despite a minimal DOM implementation. He drills into how Solid compiles fine-grained updates into direct DOM operations—no VDOM diffing—and why that architecture shines in this comparison.

By dissecting the benchmark steps, he demonstrates that performance diversity in reactive frameworks often stems from architectural choices—batching strategies, update scheduling, and compilation techniques—rather than purely raw algorithmic speed. Viewers gain a behind-the-scenes look at what fuels Solid’s reputation as “fast by default.”

### 00:30:00 – 00:36:00 • Next.js 12: Edge Streaming Arrives

Next.js 12’s launch is the week’s biggest headline for many, and Ryan confesses mixed emotions as a performance purist. He applauds Vercel’s end-to-end platform—deployments, CDN, and now real streaming on the Edge via Cloudflare Workers—while noting his usual skepticism around framework size and build times.

The demo of Next.js 12 streaming SSR on the Edge thrills him: out-of-order HTML, progressive JS delivery, and server-side streamed React 18 suspense. This marks the realization of streaming patterns Ryan has championed for years, now production-ready on a major meta-framework with global Edge distribution.

### 00:36:00 – 00:42:00 • Streaming Demo Showdown

Fueled by Next.js excitement, Ryan pivots to his own Hacker News demo built with Solid’s streaming SSR on Vercel. He contrasts React 18’s streamed example with his Solid version—smaller payload, faster paint, true partial hydration—and invites viewers to benchmark themselves.

This side-by-side showdown crystallizes the streaming value proposition: while both demos send HTML chunks to the client, Solid’s minimal runtime and compiled suspense boundaries yield a leaner, snappier experience. Ryan encourages hands-on testing, confident that Solid’s approach “blows it out of the water.”

### 00:42:00 – 00:48:00 • Edge Platforms and Streaming Support

Digging into platform nuances, Ryan surveys who really enables true HTML streaming today. While AWS Lambda and Netlify on AWS lack streaming support, Cloudflare Workers pioneered it, and Bercel now layers streaming atop Workers. He touches on Heroku (no streaming) and others (hit or miss), stressing the importance of native streaming hooks in serverless runtimes.

For developers, this means picking the right Edge vendor is as crucial as framework choice. Ryan urges the community to pressure platforms for robust streaming APIs—only then will seamless, real-world streaming adoption accelerate beyond toy demos.

### 00:48:00 – 00:54:00 • Bercel’s Performance Investments

Ryan lauds Vercel’s relentless focus on build and runtime performance: from hiring the SWC author to revamping their Webpack tooling, they’ve committed heavy R\&D toward speed. Even if Next.js sometimes carries “bloat” by default, Vercel’s optimizations—streaming, Edge functions, on-demand ISR—signal a serious bid to shrink the web’s performance tail.

He cautions that large teams and extensive meta-framework features come with complexity, but the payoff is turnkey streaming and global scaling. For enterprises and hobbyists alike, Vercel’s platform now embodies the cutting edge of modern web delivery.

### 00:54:00 – 01:00:00 • Streaming’s Technical Advantages

Here Ryan gives a mini-lecture on why HTTP streaming beats traditional SSR and CSR cascades. He sketches the waterfall: page → JS → hydration → data fetch versus streaming’s out-of-order delivery where the head, CSS, and initial markup ship immediately, JavaScript streams next, and data interleaves as it arrives.

This deep dive explains how streaming minimizes round trips, leverages native browser parsing, and delivers Jamstack-style caching plus dynamic data loading—all without blocking on hydration. Even on slow networks, streaming equals or surpasses static SSR by decoupling render and data delivery.

### 01:00:00 – 01:06:00 • Jamstack Meets Streaming

By co‐locating static assets at the CDN edge while streaming dynamic HTML, developers get the best of Jamstack (instant cache hits, scale) and SSR (live data, SEO). Ryan highlights real-world latency variability—databases aren’t always sub-10 ms—and shows how streaming gracefully surfaces loading indicators without freezing the page.

He reiterates that streaming yields zero upfront latency on data, preserves HTTP caching semantics, and natively handles suspense fallbacks. For global audiences on inconsistent networks, this pattern can be a game-changer.

### 01:06:00 – 01:12:00 • Partial Hydration with Zero JS

Building on streaming, Ryan teases Marco’s partial hydration model: interleaving HTML streaming with on-the-fly hydration directives, shipping zero kilobytes of framework code until needed. This approach combines Reactivity’s preload speed with client-side interactivity, squeezing maximal performance from minimal JavaScript.

By showing how suspense boundaries serialize to HTML and hydrate individually, he paints a vision of ultra-lean SPAs where only the user-interacted parts ever pull in JS, dramatically shrinking bundle sizes and boosting Core Web Vitals scores.

### 01:12:00 – 01:18:00 • Wrapping Up Streaming Insights

Recognizing that streaming is a passion of his, Ryan circles back to two-way binding—promising to revisit the original tweet now that the streaming context is clear. He frames suspense-powered streaming and Edge delivery as part of a larger “universal SSR” model where frameworks adapt per client: bots get full HTML, edges stream, and clients hydrate normally.

This synthesis underscores Ryan’s meta-framework philosophy: write once, render sync, async, or streamed based on execution context, ensuring both developer ergonomics and runtime performance align.

### 01:18:00 – 01:24:00 • Two-Way Binding Safety Explored

Diving into a Svelte blog post on safe two-way binding, Ryan argues that while many frameworks now line up on controlled input syntax, the true pitfalls emerge in full reactive contexts. He highlights that shallow two-way binding for form fields is harmless, but deep nested reactivity—proxies, shared objects—can spawn hard-to-trace update cycles.

By contrasting Angular’s digest loops with naive fine-grained binding, he shows that performance problems often hide beneath correct-looking code. The key safety lever is shallow, local binding or explicit reassignments, not global mutable stores.

### 01:24:00 – 01:30:00 • Fine-Grained Reactivity Pitfalls

Using Solid’s `createMutable` store, Ryan demonstrates how careless nested updates can cascade through a dependency graph, causing unintended renders far from the original mutation point. He walks through an object‐in‐object example where swapping nested properties triggers “butterfly effect” updates across unrelated components.

This live code proof underscores why immutability proponents frown on deep mutability in reactive systems: without compile‐time guarantees, you lose introspection, interception, and predictable performance budgets.

### 01:30:00 – 01:36:00 • Mutable Stores and Unpredictable Updates

Expanding on nested reactivity, Ryan shows how view’s virtual DOM masks some performance spikes—VDOM diffs handle wasted re‐renders gracefully—whereas Solid’s direct DOM updates pay the full cost. He underscores that every performance gain from fine-grained reactivity brings a heightened need for clear immutability contracts or compile-time enforcement.

The segment drives home a central tension: raw speed versus safe defaults. When every reactive write maps to a DOM patch, you must guard your mutation paths diligently.

### 01:36:00 – 01:42:00 • Compile-Time Safeguards

Turning to compiled frameworks, Ryan explains how Svelte and Marco bake shallow reactivity into the compilation pipeline: nested values aren’t magically reactive, and bindings only update when explicitly reassigned in the same component. This “explicit capture” model prevents accidental cross‐component updates while retaining performance.

He affirms that compile-time wiring sacrifices some runtime flexibility, but the resulting safety nets drastically reduce the mental overhead of tracking state sources in complex apps.

### 01:42:00 – 01:48:00 • Benefits in Simple Forms

Pausing theory, Ryan sketches a basic form input example across frameworks: signals plus manual `onInput` in Solid; `v-model` in Vue; `bind:value` in Svelte; and `bind:value` with `attributes` tag in Marco. He confirms that for trivial cases—text fields, checkboxes—two-way binding is a perfectly reasonable ergonomics boost.

However, he cautions that as soon as validation, masking, or async side-effects appear, the elegance dissolves and you often revert to controlled or uncontrolled patterns under the hood.

### 01:48:00 – 01:54:00 • Framework Two-Way Binding Demos

In a whirlwind REPL comparison, Ryan opens Solid, Vue, Svelte, and Marco “playgrounds” to implement identical two-way bound inputs. He highlights relative brevity—Svelte and Marco shine with concise syntax—while Solid’s explicit tuple signals and Vue’s directive APIs carry more ceremony.

This head-to-head reveals that while syntax varies, all frameworks converge on the same underlying requirements: a value prop plus an update callback, wired at compile time or runtime into a single two-way binding ferrule.

### 01:54:00 – 02:00:00 • REPL Deep Dive Introduction

Shifting from forms to internals, Ryan sets up another REPL blitz: comparing how each framework compiles a simple reactive counter (state + memo + effect) and logs update timings. He teases that insights here will illuminate differences in scheduling—microtask batching, flush timing, and execution order.

By promising to unleash Dan Abramov–style microbenchmarks across Vista, Solid, Svelte, and React, he primes viewers for a meticulous cross-framework output dissection.

### 02:00:00 – 02:06:00 • Reactive Primitives Benchmark

Executing the benchmark, Ryan shows React’s batched state updates that all log at once (0,0,0), Vue’s isolated reactive updates but deferred effects (1,2,0), Svelte’s hybrid timing, and Solid’s immediate consistency (1,2,2). Each behavior maps to a deliberate design choice: intuitive consistency versus flush control versus ergonomics.

This micro-benchmark crystallizes why “which reactive model is right” depends on desired guarantees: solid consistency at the cost of immediate re-renders, or deferred effects that feel more like native JS.

### 02:06:00 – 02:12:00 • Consistency vs Ergonomics

Ryan unpacks the pros and cons of each timing model. Vue’s deferred effects avoid surprises in simple scripts but can confuse newcomers expecting immediate signal reads. Svelte aligns with native JS assignment semantics but breaks referential consistency within a single render cycle. Solid and React deliver uniform, glitch-free updates but demand users learn batching intricacies.

The discussion highlights that frameworks embed opinions not just in syntax but in fundamental reactive contracts, shaping developer expectations from “first spark” onward.

### 02:12:00 – 02:18:00 • Controlled vs Uncontrolled Components

Returning to components, Ryan contrasts controlled inputs—where parent state is the sole source of truth—with uncontrolled inputs—where internal state reigns. He explains that controlled patterns maximize predictability at the cost of boilerplate, whereas uncontrolled patterns offer simplicity until edge cases (reset, validation, synchronization) bite you.

This lays the groundwork for “controllable” components—ones that seamlessly support both modes without forcing library users into one camp.

### 02:18:00 – 02:24:00 • Controllable Components Complexity

Ryan live-codes a “ControllableInput” in Solid: auto-detecting whether `value` and `onInput` props exist to toggle between internal signals and parent-driven updates. He shows the required logic—reactive checks, conditional effects, and fallback handlers—can quickly balloon, undermining the ergonomics two-way binding promises.

This demo reveals why most frameworks stop at simple controlled or uncontrolled patterns, leaving “controllable” libraries to solve this painful synchronization problem.

### 02:24:00 – 02:30:00 • Marco’s Binding Syntax Magic

Pivoting to Marco, Ryan unveils its `attributes` tag and `bind:value` syntax: with a single `bind:value={foo}` declaration, Marco’s compiler generates all the conditional wiring under the hood. Whether the component is controlled or uncontrolled, the same markup “just works,” cutting boilerplate and eliminating sync edge cases.

He argues this is the sweet spot: declarative, ergonomic, yet firmly grounded in fine-grained reactivity without runtime library overhead.

### 02:30:00 – 02:36:00 • Event Forwarding in Vue & Svelte

Investigating Vue and Svelte, Ryan shows how both frameworks funnel component events through DOM-level forwarding or generated callbacks. In Vue, `v-bind` and `v-on` on components proxy through custom event emitters, while Svelte’s `bind:` sugar wraps `createEventDispatcher` under the hood.

Mapping these patterns exposes that, even with syntactic sugar, developers eventually face the same principle: props in + events out = two-way communication, all mediated by compile-time transforms or minimal runtime.

### 02:36:00 – 02:42:00 • Declarative Reactive Binding

Ryan revisits Marco’s “let:” API preview, showing how it merges fine-grained reactivity into a virtual DOM host. By compiling reactive signals into attribute directives, Marco achieves VDOM interoperability with zero runtime cost for dependencies—essentially the Compile-Time Reactivity pattern he’s long envisioned for general-purpose frameworks.

This segment underscores that compile-time tooling can democratize reactive patterns across diverse render targets without sacrificing performance.

### 02:42:00 – 02:48:00 • Meta-Frameworks and Abstraction

Surveying the broader landscape, Ryan admires Ember’s deep binding model, Astro’s MPA-centric static rendering with island hydration, and Remix’s route-driven data loading. Each occupies a unique niche—framework-agnostic routing, generalized rendering, or strong defaults—but none obviate the need for targeted optimizations in streaming and hydration.

He cautions that abstraction often multiplies complexity (the “15th standard” problem), yet celebrates projects that consolidate best practices into cohesive DX experiences.

### 02:48:00 – 02:54:00 • Framework-Agnostic Limitations

Drilling into the vision of universal SSR, Ryan highlights efforts like Vite’s plugin SSR and web-component-based frameworks. While agnostic approaches promise code reuse, they must still contend with divergent update models—VDOM vs. fine-grained, nested reactivity vs. props-in/events-out—and perilously broad API surfaces.

He predicts that only by co-designing compiler transforms, routing, and hydration strategies can true cross-framework unification emerge.

### 02:54:00 – 02:58:50 • Looking Ahead and Farewell

In the closing minutes, Ryan outlines his Solid Start and Marco SSR roadmaps: smoother CLI tooling, better Netlify/Vercel integrations, and richer debug/inspector support. He reiterates that while meta-frameworks power the mass market, core innovations in reactive primitives and streaming are where he’ll continue to push the industry forward.

He thanks viewers for the marathon session, invites final questions, and signs off—promising that the conversation on binding, streaming, and compilation will continue shaping frontend performance for years to come.