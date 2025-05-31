---
showLink: "https://www.youtube.com/watch?v=p9pwHyM5Z98"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS in React? Reconciling Disparate Worlds"
description: ""
publishDate: "2023-01-21"
coverImage: "https://i.ytimg.com/vi/p9pwHyM5Z98/maxresdefault.jpg"
---

## Episode Description

A far-ranging four-and-a-half-hour discussion contrasting React’s top-down rendering and SolidJS’s fine-grained reactivity, touching on advanced compiler tricks, state management, streaming, and audience Q&A.

## Episode Summary

Spanning 4.5 hours, this extensive broadcast examines React and SolidJS at multiple levels—covering everything from basic component rendering patterns to cutting-edge compiler transformations. Early in the conversation, the speaker presents simple examples like interval-based counters, contrasting how React’s re-renders differ from Solid’s single-run setups. Midway, the focus expands to deeper topics such as immutability, nested data, and bridging the gap between React’s top-down updates and Solid’s fine-grained signals. The host emphasizes real-world scenarios, delving into shared references, external state libraries, and how advanced streaming techniques can supercharge performance. Later, the discussion navigates broader framework ecosystems, referencing Svelte and Vue’s compiler approaches, along with new server-first designs in Remix and Solid Start. Throughout, the speaker underscores practical concerns like debugging complexities and potential pitfalls when mixing fundamentally different patterns. A lively final Q&A ties everything together, spanning micro frontends, the impact of economic shifts on open-source contributions, and potential avenues for next-generation frameworks. By session’s end, the stream offers a sweeping perspective on modern JavaScript development, balancing pragmatism and innovation in everything from data fetching to partial hydration.

## Chapters

### 00:00:00 - Introduction and Stream Setup

The speaker greets viewers and outlines the day’s agenda, emphasizing a comparison between React’s virtual DOM approach and SolidJS’s fine-grained reactivity. He sets a casual, welcoming tone, inviting questions from chat to guide the session’s direction. This segment also includes a brief mention of the real-time format, highlighting spontaneous “improv” moments that can arise.

He explains that both React and SolidJS share a similar syntax on the surface, yet internally they are worlds apart. With housekeeping out of the way, the host readies some initial examples to showcase the fundamental differences. The audience is encouraged to participate, reinforcing that live interaction will shape this extended deep dive.

### 00:06:00 - Initial Thoughts on React’s Render Model

Here, the speaker starts describing React’s top-down reconciliation process, explaining that each function component can re-run on every state change. He highlights the typical pitfalls, like setting up intervals inside the component body, which can lead to infinite loops or exponential timers.

He also lays the groundwork for deeper comparisons, noting that React’s simplicity on the surface belies many underlying rules. Hooks, dependencies, and closures all interact in ways that can catch developers by surprise. By the end of this chapter, listeners gain a sense of why nuanced knowledge is required to use React effectively.

### 00:12:00 - SolidJS Basics and Single-Run Setups

Shifting attention to Solid, the host describes how its components behave more like “setup” functions that run once. Signals and effects coordinate UI updates without re-running the entire component. This approach reduces side-effect headaches, as demonstrated by a minimal counter that smoothly increments.

He clarifies that Solid’s focus on reactivity often allows for simpler mental models—no repeated cleanup of intervals or closures. Still, it demands some conceptual shifts: developers must understand how signals propagate changes. Here, the speaker also underscores that while Solid borrows JSX syntax from React, the runtime is entirely distinct, kicking off the core theme of “similar looks, vastly different mechanics.”

### 00:18:00 - Comparing Counters in React and Solid

To ground the discussion, the host codes live examples of counters. In React, each render re-creates the function scope, and the developer must carefully manage intervals or risk duplications. By contrast, Solid localizes intervals in a single-run space, avoiding repeated setups.

He demonstrates how in React, `useState` plus `useEffect` can sometimes cause unexpected behavior if not orchestrated correctly. Meanwhile, the Solid version simply relies on a signal and a one-time effect. This side-by-side examination shows how a seemingly simple feature can highlight deep framework contrasts.

### 00:24:00 - Hooks and Dependency Arrays

The conversation pivots to React’s hooks. The speaker tackles `useEffect`, detailing how dependency arrays determine whether an effect runs too frequently or not at all. Stale closures arise if the developer isn’t careful. He references Dan Abramov’s in-depth blog posts on properly handling intervals and closures within React.

Meanwhile, viewers see how Solid effectively replaces the need for these patterns by automatically tracking dependencies. The host cautions that React’s approach, although powerful, can feel verbose and error-prone for novices. This leads to pondering how two libraries that look alike can be so different under the hood.

### 00:30:00 - Understanding Re-Render vs. Reactive Updates

Here, the speaker dives into the concept of “re-rendering” in React, clarifying it doesn’t always mean expensive DOM operations. Instead, it’s the cost of re-running user-defined logic. This is contrasted against Solid, where only specific computations update in reaction to signals.

He comments on how performance bottlenecks might appear in large React applications if re-renders trigger heavy computations or recalculate big data structures. He notes that a careful developer can mitigate these costs with memoization but must be judicious about `useCallback` and `useMemo`. By contrast, Solid’s default model sidesteps most such overhead, moving these complexities into its reactivity system.

### 00:36:00 - Immutability vs. Mutability: A Deeper Dive

The host now foregrounds the debate around immutable data, typically championed by React, and mutable signals, central to Solid’s approach. He explains that React’s immutability provides predictability and powerful debugging tools, but may incur extra overhead when large data structures are updated.

Solid’s proxies and signals let developers change data in-place, limiting the scope of updates to only affected pieces of the DOM. This conversation also nods to advanced React libraries like Immer, which adopt proxy-like patterns to retain the immutability contract. Each choice has performance and developer-experience trade-offs, setting up a central theme for the rest of the session.

### 00:42:00 - Managing Nested Data and Redux-Like Patterns

The speaker transitions to how complex, nested objects fare in React versus Solid. He uses a user/address example to illustrate React’s need for structural cloning, re-checking each layer of the tree. In Solid, direct property mutation triggers minimal updates.

He also discusses external state libraries—Redux, MobX, or Jotai—describing how they attempt more granular updates within React’s re-render system. Some rely on referencing slices or storing data in external atoms, while Solid handles such granularity by default. This segment underscores how each ecosystem solves data management, sometimes converging on reactive principles reminiscent of Solid.

### 00:48:00 - React Solid State: Initial Experiments

Pivoting to personal projects, the host introduces “React Solid State,” an early attempt to merge Solid’s reactivity into a React context. Though it demonstrated fine-grained updates in a React environment, it demanded specialized wrappers and forced `react.memo` usage to isolate re-renders. He describes how concurrency in React 18 further complicated these hacks.

Through code snippets, viewers grasp that bridging the frameworks can yield partial successes but also unearth many corner cases—like the mismatch between Solid’s one-time setup and React’s repeated function calls. This exploration paved the way for deeper recognition of each library’s inherent design.

### 00:54:00 - Challenges of Component Children and Portals

Next, the speaker elaborates on passing Solid children into a React component—or vice versa—and how it reveals fundamental differences in node representation. React uses virtual elements, while Solid expects real DOM nodes. The host walks the audience through potential solutions involving portals or specialized props that track these node types.

He clarifies that while such bridging is technically possible, it strains each library’s life cycle rules. React must reevaluate the child on every re-render, whereas Solid might have already locked down references. This highlights a recurring conclusion: “similar syntax does not equal seamless interop,” a recurring takeaway in the entire talk.

### 01:00:00 - Contexts and Ownership Across Frameworks

Here, contexts come into focus. React’s Context API relies on parent-to-child usage, whereas Solid uses an owner-based approach to figure out which signals belong where. He describes how injecting Solid inside React leads to scenarios where the child might mount before the parent effect, complicating where the context truly lives.

Attendees learn about advanced “owner” object manipulation to preserve Solid’s context. This is especially relevant in multi-portal setups or micro frontend designs, where cross-framework context can be a headache. By the end, it’s clear that context sharing is a prime example of how strongly the frameworks diverge.

### 01:06:00 - Svelte, Vue, and Compiler Approaches

Shifting gears, the host speaks on how Svelte and Vue solve reactivity. Svelte compiles away overhead, letting developers write what appears to be regular JavaScript but is deeply transformed. Vue’s Composition API similarly fosters reactivity, though it can appear more manual compared to Svelte.

He acknowledges that, ironically, Svelte’s “it’s just JavaScript” slogan can hide sophisticated compilation. Both frameworks underscore how compilers increasingly shape modern front-end development. Whether one manipulates signals at runtime (Solid) or compiles them away (Svelte), advanced transformations are becoming standard, bridging some conceptual gaps between frameworks.

### 01:12:00 - SSR and Streaming Foundations

The speaker now lays the groundwork for server-side rendering (SSR) and streaming. In React, SSR historically entailed rendering the app on the server, then sending HTML to the client to hydrate. However, new features like concurrent rendering and streaming can deliver partial HTML in chunks. Similarly, Solid has had streaming SSR capabilities, letting signals directly manage which parts of the DOM appear first.

He notes that both frameworks aim to improve time-to-first-byte and user perceived performance, although their underlying mechanisms differ. By referencing Next.js and Astro, the host provides a broader context of how SSR is evolving, with partial hydration becoming the next frontier.

### 01:18:00 - Remix’s Data Loading and Deferred Patterns

The conversation highlights Remix’s loader system, which merges server data fetching with route-based conventions. The speaker points out how Remix’s new “defer” and “await” patterns let developers receive partial data asynchronously, improving the UX on slower requests. He compares this to Solid’s resource approach, showing conceptual overlaps.

He praises the synergy between streaming HTML and advanced concurrency, where placeholders can be replaced once data arrives. This approach can feel more integrated than traditional “fetch in componentDidMount” patterns. Observers learn that frameworks increasingly unify server logic with client rendering, hinting at a more seamless future.

### 01:24:00 - Partial Hydration and Out-of-Order Streaming

Here, the host zooms in on partial hydration. In classical SSR, the server sends a complete HTML snapshot, which the client hydrates all at once. But partial hydration focuses on smaller islands of interactivity. He references how Astro championed this concept by letting each component or section hydrate independently.

Solid Start also experiments with streaming, letting slow data chunks load separately. This approach can drastically lower initial JavaScript execution. By breaking the monolith of client-side logic, frameworks aim to deliver faster user experiences—especially for large or content-heavy sites that previously dragged under big bundles.

### 01:30:00 - User Questions on Real-Time Performance

Audience questions revolve around real-time data and how React’s re-render cycles affect table updates or live dashboards. The speaker reaffirms that React can handle these scenarios with memoization but warns it can grow cumbersome. In Solid, signals automatically isolate the changes to relevant DOM elements.

The Q&A references actual enterprise usage: large dashboards with hundreds of concurrent updates. The host suggests that frameworks with fine-grained reactivity can reduce wasted calculations, though devs must still pay attention to data shapes. This audience-driven segment highlights the practical stakes behind the broader theoretical comparisons.

### 01:36:00 - Compiler vs. Runtime: Svelte, Solid, and Quick

Moving deeper into compiler-based frameworks, the host explains how Svelte merges reactive declarations at build time, while Solid defers them to a runtime. Quick, a newer entrant, tries to combine the best of both by serializing states and resuming without re-running code. He underscores that each approach is searching for the “holy grail” of performance and developer ergonomics.

He acknowledges that diving into advanced compilation adds complexity. Some devs prefer explicit JavaScript, while others embrace DSL-like syntaxes for major performance gains. The conversation touches on how next-gen compilers might unify the best aspects, but likely at the cost of heavier build steps or restricted patterns in code.

### 01:42:00 - Challenges with Server Components

Here, the speaker addresses React Server Components. He notes that mixing server and client logic in the same file can lead to confusion, requiring the bundler or compiler to separate them into distinct outputs. This parallels Solid’s server actions, which effectively hoist server functions away from client code.

He shares that these transformations can reduce duplication and limit client-side payloads. Still, clarity demands that developers grasp where code runs. The audience hears about real scenarios where server components produce a beneficial DX but also risk masking architecture complexities. The thread underscores that “magic” features seldom come free.

### 01:48:00 - Historical Views: From Class Components to Hooks

The talk revisits React’s history. The host recalls class components, which had lifecycle methods like `componentDidMount`, replaced by hooks in 2018. This shift improved modularity but also introduced the nuance of “rules of hooks” and dependency arrays. He contends that while simpler in principle, hooks can lead to subtle bugs.

He then contrasts Solid’s steady state from the start: signals and effects. Because Solid never underwent a fundamental lifecycle shift, it lacks the legacy baggage of classes or separate function patterns. This reflection provides a window into how each library’s evolution influenced current complexities and trade-offs.

### 01:54:00 - MobX, Jotai, Valtio: React’s Reactive Libraries

The host surveys the React ecosystem’s attempts to emulate fine-grained reactivity. MobX was among the earliest, wrapping data in observables. Jotai and Valtio rely on atomic or proxy-based stores, letting components watch only relevant slices. He notes that these libraries approximate the “Solid effect” but still run within React’s overarching re-render loop.

This segment clarifies that React, while flexible, doesn’t provide these patterns out of the box. Many alternative libraries fill that gap, but each new abstraction can complicate debugging. In concluding, the speaker affirms that React devs clearly crave more targeted updates, driving continuous community experimentation.

### 02:00:00 - Benchmarks and the DBMon Example

Benchmarks like DBMon (Database Monitor) come up, illustrating massive data updates at a rapid rate. The speaker recollects how libraries like Knockout once performed poorly due to naive reactive strategies. Modern frameworks or solutions that effectively skip unnecessary re-renders can excel, showcasing how architecture profoundly impacts results.

He cautions that while benchmarks can illuminate performance ceilings, real apps often differ. Astro, Quick, and Next.js all produce strong numbers but via differing methodologies. The overarching lesson is that both approach and implementation detail matter. A well-crafted reactive library can outdo naive VDOM usage, yet code structure remains a key factor.