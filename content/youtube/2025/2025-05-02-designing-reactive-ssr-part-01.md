---
showLink: "https://www.youtube.com/watch?v=efx9ok0xHGs"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Designing Reactive SSR"
description: ""
publishDate: "2025-05-02"
coverImage: "https://i.ytimg.com/vi/efx9ok0xHGs/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato kicks off his early morning stream with a deep, design-level exploration of reactive server-side rendering (SSR), sharing insights from a decade of framework engineering.

## Episode Summary

In this nearly four-and-a-half-hour stream, Ryan Carniato dives into the core of reactive SSR, contrasting traditional templating with modern compiler-driven approaches. He begins by explaining why he prioritizes design reasoning over live coding, then examines how frameworks—Solid, Svelte, React, and others—generate and hydrate HTML on both server and client. Key topics include the mechanics of streaming strings, managing asynchronous data with suspense boundaries, hierarchical hydration keys, and the trade-offs of pull-based versus push-based rendering. Ryan also teases Solid’s forthcoming “poll-based” SSR, shares experiments with proxy-based hydration, and surveys advances in React Labs’ view transitions and Svelte’s `<await>` blocks. Throughout, he emphasizes pragmatic ergonomics, reactive ownership graphs, and the balance between compiler magic and explicit developer control—offering a rare window into the evolution of modern web frameworks and the next frontier of performant, scalable SSR.

## Chapters

### 00:00:00 – 00:05:15 · Welcome, Stream Setup, and Design Philosophy

Ryan apologizes for running late, invites viewers to say hi in chat, and explains why he focuses on design-level discussions rather than live coding. He highlights the value of “deep dives” to reveal his problem-solving workflow, contrasting it with typical project demos. This opening segment lays out the stream’s structure—an exploration of framework design decisions rather than the creation of a demo app.

He also touches on how streaming schedules are shifting for his family commitments, noting how having a newborn has pushed his JavaScript conversations earlier in the day. This personal context sets the stage: we’ll see shorter, more focused streams that still cover “incredible content,” framed by real-world constraints like school drop-off and pickup.

### 00:05:15 – 00:10:30 · The Role of Compiler Magic vs. Explicit APIs

Ryan compares two schools of framework design: compiler-driven reactivity (e.g. Svelte, Solid) versus runtime approaches (React’s virtual DOM). He demonstrates how simple JSX transforms generate strings on the server, then discusses why React’s single transform works universality at the expense of server-side optimizations. Solid’s dual compilation for client and server, he argues, offers more efficiency by omitting DOM APIs on the server and stitching strings directly.

This leads into a broader philosophy: compiler magic can reduce boilerplate and cleverly infer intent, but must be balanced against the need for explicit, composable APIs. Ryan stresses that while compilers can optimize away escaping costs and static text, they introduce potential edge cases—so understanding both sides (compiler and runtime) is crucial for robust framework design.

### 00:10:30 – 00:15:45 · Asynchronous Challenges in SSR and Streaming

Diving into async data fetching, Ryan outlines why classic SSR blocks on the slowest data source, yielding poor UX and spuriously long “getServerSideProps” calls. He reviews pre-fetching strategies (hoisting data fetching to build time), then shows why streaming with boundaries (à la React Suspense) offers more graceful incremental hydration.

He walks through streaming HTML fragments as they resolve, highlighting pitfalls: naive “string smash” reruns can refetch everything, while eager pre-fetch fails under nested conditions. This section sets up the necessity of discoverable async handling—finding pending operations during streaming, rather than bundling or serializing them all at once.

### 00:15:45 – 00:21:00 · Discover-as-You-Render: Suspense, Boundaries, and Streaming

Here, Ryan examines the “discover-as-you-render” model pioneered by React Suspense and earlier by Marko’s async fragments. He explains how placing suspense boundaries around async subtrees lets you stream out fallback content immediately, then patch in real content as data arrives—preserving HTML order without blocking the entire page.

He also compares Svelte’s `<await>` tag, which decentralizes async to the template layer but requires explicit promise blocks, against Suspense’s inversion of control: children can declare async needs, and parents decide when and how to show fallbacks. This inversion simplifies granular UX coordination for both client and server.

### 00:21:00 – 00:26:15 · The Problem with “String Smash” and Reruns

Ryan recounts Solid’s original SSR approach—“string smash” the entire template and rerun components on new async resolution—and shows why it’s fast but redundant. He demonstrates that rerunning nested suspense boundaries costs extra compute, though benchmarks mask it when synchronous. As Solid’s streaming got extremely speedy, he began questioning whether re-execution was necessary at all.

He teases a “pull-based” SSR idea: instead of rerunning whole components, maintain an ownership graph of async holes and pull in resolved fragments one by one, combining them until no promises remain. This concept promises zero re-execution, aligning server streaming more closely with Solid’s client reactivity model.

### 00:26:15 – 00:31:30 · Introducing Pull-Based SSR: Concept and Pseudocode

In this detailed segment, Ryan shares pseudocode for a pull-based SSR loop that:

1. Renders template fragments with holes for any async calls.
2. Collects promises for unresolved holes.
3. Awaits all current promises, then retries only those hole-render functions under their original reactive ownership.
4. Repeats until no promises remain, streaming out each resolved segment.

He explains how this approach avoids re-running user components entirely, treating async data fetches like pull-only effects—streaming incrementally without pushing or rerunning unaffected parts.

### 00:31:30 – 00:36:45 · Hydration Keys: Hierarchical IDs for Consistency

Ryan shifts to hydration: how do you match up server-rendered nodes with client-side reactivity? Solid’s solution uses hierarchical hydration keys—unique IDs derived from component nesting counters—to locate each DOM node during hydration. He compares this to React’s internal fiber-based `useId`, noting both frameworks independently arrived at similar tree-based ID schemes.

He also explores a proxy-based hydration experiment: intercept DOM calls via proxies to reconstruct actual elements at hydration time, potentially eliminating serialized IDs altogether. Although elegant, he cautions proxies add client overhead and complexity around lazy-loaded code, so it remains a trade-off versus static IDs.

### 00:36:45 – 00:42:00 · Component vs. Owner-Graph IDs: Trade-offs and Edge Cases

Digging deeper, Ryan contrasts component-level IDs (coarse) with full reactive ownership-graph IDs (fine-grained). He shows that while comp-based keys work in most apps, edge cases—like deeply nested conditionals with dynamic sibling counts—break assumptions. Owner-graph IDs, derived from every reactive node’s position, ensure absolute stability but require keeping extra metadata in production code.

He highlights how compiler-based transforms could auto-inject IDs at call sites (e.g., `$fetch`) yet sacrifice composability, whereas runtime hierarchical IDs remain generic and extensible by user-land APIs.

### 00:42:00 – 00:47:15 · Balancing Compilation Magic and Developer Control

Ryan recounts Solid’s minimal compilation philosophy—using JSX transforms sparingly to retain flexibility—compared to heavy compiler-driven frameworks. He argues that explicit APIs (`createSignal`, `createEffect`) paired with optional plugins (e.g., single-file components) offer a middle path: sufficient ergonomics without locking users into opaque transforms.

He also notes how frameworks evolve: what once seemed “unacceptable” (like magic signals) becomes mainstream over a decade. Designers must balance novelty against learnability and ecosystem readiness, anticipating which abstractions will become future primitives.

### 00:47:15 – 00:52:30 · Asynchronous Guards vs. Suspense Boundaries

Returning to async ergonomics, Ryan examines “async guards”—explicit checks around promises—and why they fail to express cross-component coordination without suspense. He shows that marking certain blocks as “guarded” prevents fallbacks at unwanted points but forces developers to manually sprinkle guard syntax everywhere, undermining composability.

Comparing Solid’s async guards and React’s `useDeferredValue` or Svelte’s `<await>`, he reaffirms that implicit, discover-as-you-render boundaries remain the cleanest mechanism for consistent UX across both initial SSR and hydration.

### 00:52:30 – 00:57:45 · Hydration Without IDs: Proxy-Based Proof-of-Concept

Ryan demos a proof-of-concept where hydration proxies intercept element creation, deferring real DOM node attachment until after reactive bindings run. By cloning a server-rendered template and weaving in event handlers and text updates via proxies, he shows it’s possible to hydrate without explicit IDs—purely through call-order matching.

He cautions this incurs client-side proxy overhead and complicates debugging, but it elegantly leverages JavaScript’s dynamic dispatch to reconstruct the DOM tree in place, hinting at future hybrid approaches that blend static IDs with selective proxying.

### 00:57:45 – 01:03:00 · Solid’s 2.0 SSR Roadmap: Poll-Based and Hybrid Designs

Outlining Solid 2.0’s SSR plans, Ryan shares two key improvements:

1. **Poll-Based SSR:** The pull model avoids re-execution by re-running only async holes, matching streaming behavior to client reactivity.
2. **Hybrid Hydration IDs:** Keeping runtime IDs but omitting serialization by default, swapping to proxy-hydration for tree matching—trading server-render speed against client-hydrate simplicity.

He explains that while Solid’s existing “re-render on async” is blazing fast, the new compiler and runtime changes will smooth out hydration mismatches and reduce overall complexity in application code.

### 01:03:00 – 01:08:15 · React Labs’ View Transitions and Activities

Switching gears, Ryan surveys React Labs’ experimental `ViewTransition` API: a high-level component that wraps navigational changes, suspense fallbacks, or any state-driven UI block to animate between “old” and “new” states. He praises its simple `<ViewTransition trigger="navigation">…</ViewTransition>` syntax and built-in cross-fade, shared-element, and list animations.

He also highlights the companion `Activity` primitive—preserving offscreen UI state while unmounting its DOM and pausing its effects—enabling instant “tab” toggles without remounts. Ryan notes both APIs elegantly cover common needs (routing transitions, tab switches) while sidestepping custom hooks or third-party libs.

### 01:08:15 – 01:13:30 · Svelte’s `<await>` Tag vs. Suspense

Ryan examines Svelte’s `<await>` block, which embeds promise handling directly into templates: `<{#await data()}><Loading/>{:then d}<DataTable {d}/>{/await>`. He shows how this localizes async UI without explicit boundaries, but each block independently handles its loading, error, and success states, risking multiple spinners and boilerplate.

Contrasting with Suspense’s fallback boundaries, he argues `<await>` offers explicit developer control but requires more ceremony to coordinate multiple data sources. He underscores the perennial trade-off: domain-specific syntax versus generic, composable primitives like Suspense.

### 01:13:30 – 01:18:45 · Type-Ahead Fetching, Deferred Values, and Flag Problems

Addressing the “type-ahead” scenario, Ryan unpacks how sequential fetches on keystrokes can cascade (the flag problem) and produce outdated results. He reviews React’s `useDeferredValue` and Solid’s `createResource` “latest” mode, both of which tear state until the final promise resolves, preventing waterfalls and stale UI.

He emphasizes that any async UX primitive must solve three challenges—non-nullable returns, no accidental waterfalls, and predictable updates—while preserving mental models for developers. He previews Solid 2.0’s refined approach, combining eager fetch with implicit boundary coordination.

### 01:18:45 – 01:24:00 · Debugging Hydration Mismatches and Compiler Limits

Ryan walks through a real-world hydration mismatch caused by grouping attribute holes versus insertions out of sequence. He shows Solid’s compiler currently coalesces attributes into minimal templates for SSR, but must reorder binds, classes, and values for optimal HTML size—leading to client-server shape disparities.

He discusses potential compiler enhancements to align insertion order with runtime behavior, ensuring hydration trees match without IDs or proxies. This deep dive highlights the subtle complexity of marrying build-time transforms with runtime graph consistency.

### 01:24:00 – 01:29:15 · Ownership-Graph Serialization and Resumability

Returning to resumability, Ryan talks about serializing entire reactive graphs—node IDs, dependencies, and values—so client hydration need not run any user code. He explains how Solid’s ownership model could be extended: every signal, memo, and effect gets a stable ID; on hydration, only graph links and values are restored.

While he acknowledges this resembles Quaal’s resumability proposals (e.g. Qwik), he questions whether shipping full serialization is worth the complexity, given current bundler hash mismatches and code-split chunking. He leaves it as an open research area.

### 01:29:15 – 01:34:30 · Proxy-Based Hydration Revisited: Benefits and Drawbacks

Ryan revisits his hydration-proxy demo, reflecting on its advantages—no serialized IDs, accurate tree matching, and dynamic interception—and its drawbacks: per-element proxy cost, lazy chunk loading race conditions, and maintenance overhead. He contrasts this with ID-based hydration, which is simpler and more predictable, suggesting hybrid approaches may blend proxies for dev tools and IDs for production.

He stresses that either path requires new compiler support to inject ownership contexts or track call-site relationships—reaffirming that Solid 2.0’s SSR revamp will tackle both hydration and streaming in one cohesive package.

### 01:34:30 – 01:39:45 · SvelteKit’s Async SSR Proposal

Scanning the Svelte community, Ryan highlights SvelteKit’s new async SSR API: allowing top-level `async` functions in components, `<await>` blocks in scripts, and built-in streaming. He walks through a demo where nested fetches under suspense automatically stream HTML fragments, then scale up to full page rendering without external loading gates.

He applauds SvelteKit’s minimal syntax—shifting boilerplate into compiler transforms—but questions UX quirks (e.g., parallel spinners, error handling) that emerge when multiple `<await>` blocks run simultaneously. He calls for clearer guidelines on grouping and fallback coordination.

### 01:39:45 – 01:45:00 · React Server Components: Composition vs. Mutability

Ryan and Dan Abramov’s BlueSky thread on React Server Components revisits old debates: should data fetching be hoisted to route-level loader functions or embedded within components? Dan argues for multiple render trees, each tailored to its UI needs, minimizing over-fetching; Ryan counters that fine-grained mutations become burdensome when each UI fragment requires its own server contract.

They explore hybrid models—route-based data vs. component-based Server Components—and the tension between single-round-trip bulk data and granular updates. Ryan speculates on ways to combine both: static payloads for initial load, with client-side RPCs for micro-muts.

### 01:45:00 – 01:50:15 · The Cost of Universal Code and Two-Way Contracts

Delving into Server Component tooling, Ryan notes the burden of maintaining server-only, client-only, and universal modules, each with distinct imports and lint rules. He shows how small UI changes necessitate touching both server queries and client renderers, repeating boilerplate and risking drift.

He suggests improved DX would come from clearer file-system conventions or explicit annotations (e.g., `use client`, `use server`) that let linters and bundlers enforce safety, reducing cognitive load and enabling resilient code sharing.

### 01:50:15 – 01:55:30 · Progressive Enhancement vs. Graceful Degradation

Returning to hydration mismatches, Ryan contrasts progressive enhancement—shipping minimal JS that hydrates selectively—with appetites for graceful degradation, where client-side errors or missing assets auto-recover. He weighs the merits of shipping only essential hydration shards versus full hydration scripts, arguing that critical UX path must be fully robust while secondary features can lazily load.

This conversation touches on resumability again, exploring whether fully streaming HTML plus minimal inline scripts could achieve “good enough” interactivity without massive JS bundles.