---
showLink: "https://www.youtube.com/watch?v=6RIPfwxj24s"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JavaScript Frameworks in 2023"
description: ""
publishDate: "2023-01-07"
coverImage: "https://i.ytimg.com/vi/6RIPfwxj24s/sddefault.jpg?v=63b71818"
---

## Episode Description

An extensive look at modern JavaScript frameworks, their evolutions, and front-end tooling in 2023.

## Episode Summary

This conversation examines the shifting landscape of JavaScript frameworks and related tools, highlighting new approaches to server-side rendering, reactive state management, and emerging techniques for building high-performance web applications. The speaker compares stalwart solutions like React and Node to up-and-coming tools such as Solid and Deno, noting how each project addresses specific developer pain points. Particular focus is placed on hydration, streaming, signals, and other performance-focused patterns that enhance server rendering and speed initial page load. The discussion also touches on the challenges of balancing next-generation innovations with broader ecosystem compatibility. While some frameworks refine established paradigms, others introduce fresh architectures that demand deeper changes in authoring and mental models. In all, the talk underscores how competition and experimentation continue to expand the possibilities for web development, offering varied paths to creating faster and more efficient user experiences.

## Chapters

### 00:00:00 — Introduction and Initial Thoughts

The host opens by greeting the audience and setting the stage for a wide-ranging discussion on JavaScript frameworks in 2023. They reflect on how the start of a new year often brings an abundance of hot takes about emerging tools and upcoming trends. Observing that every developer has distinct reasons for choosing libraries or frameworks, the speaker points out that real-world metrics—like performance, developer experience, and ecosystem maturity—can vary drastically. Rather than provide a simple answer on which technology is “best,” they intend to explore the considerations that steer these choices.

They acknowledge that many opinions surface at this time of year through blog posts and podcasts, but warn against over-relying on broad pronouncements. Instead, the aim is to consider the core areas where frameworks show meaningful innovation—server rendering, compilation, hydration, and reactivity. The conversation will touch on how each project seeks to solve certain pain points, including SSR complexity, bundling challenges, and developer ergonomics. This introduction sets a collaborative tone for the exchange, inviting listeners to compare findings and form their own evaluations.

### 00:06:00 — Reflecting on 2022 and SSR Developments

The speaker looks back at the highlights of 2022, noting how the year saw a surge of new meta-frameworks focusing on server rendering. They mention how SSR, once an add-on, is now a first-class concern for many libraries. This shift can be traced to React’s initial push around server-side rendering years ago, but other frameworks have since expanded these ideas into more refined solutions. From partial hydration strategies to streaming responses, the ecosystem is investing in advanced rendering pipelines that minimize overhead and optimize page loads.

An important observation is that compiling a meta-framework can take a year or more, which explains why some projects that teased capabilities in 2020 or 2021 only launched stable versions in 2022. The speaker cites SvelteKit, Astro, and others as examples of frameworks that have finally brought robust SSR features to production-ready levels. This momentum has also pushed projects like Quick and Marco to pursue innovative strategies around resumability and partial hydration. By connecting historical context to current releases, the discussion underscores the complex timelines and engineering efforts behind modern SSR solutions.

### 00:12:00 — The Evolving Role of Hydration

Attention turns to hydration as a central challenge in server-side rendered frameworks. While traditional SSR re-renders everything on the client, newer approaches aim to only hydrate interactive components. The speaker points out that once frameworks recognized hydration overhead as a major bottleneck, they began pioneering techniques such as islands architecture and server components. Balancing minimal JavaScript on initial load with strong interactivity is no small task. This leads to debates about trade-offs, such as whether certain SSR solutions are too complicated to configure or fully grasp.

A key takeaway is that hydration complexity directly affects developer workflow. The more advanced the hydration method—whether it be partial, resumable, or compiler-assisted—the more conceptual overhead can be introduced. At the same time, these techniques deliver remarkable gains in performance, especially for larger or more static-heavy sites. The speaker highlights experiments across the ecosystem, from Astro’s island-based approach to React’s server components, each seeking an optimal balance between shipping minimal scripts and retaining a top-tier user experience.

### 00:18:00 — React’s Influence on SSR and Emerging Patterns

The conversation situates React at the center of many of these shifts, particularly because of React’s large user base and the introduction of server components. While some frameworks have championed SSR for years, React’s backing brings server-side innovations to mainstream attention. The speaker notes that React’s experimental moves—like concurrent rendering and streaming—compel the wider community to revisit architecture fundamentals. As a result, numerous libraries try to offer analogous capabilities, whether via built-in features or custom compile steps.

Yet, React’s vast ecosystem can also delay consensus on best practices, as seen with the lengthy rollout of server components and the challenges in shaping community adoption. The speaker observes that the biggest leaps in SSR come when the approach is thoroughly integrated into the framework, rather than tacked on. This synergy of design fosters consistent patterns across routing, data fetching, and transitions. By reflecting on React’s role in setting broad directions, the speaker underscores how competition and cross-pollination fuel constant innovation among frameworks.

### 00:24:00 — Signals, State Management, and the Trend Toward Reactivity

A discussion emerges around signals, the low-level reactive primitives that power frameworks like Solid and partially appear in solutions like Preact’s signals. Signals are described as the new wave of state management, supplanting the virtual DOM’s broad re-renders with fine-grained updates. The speaker references Angular developers’ interest in signals, seeing them as potentially a standard approach that might echo how the virtual DOM became widespread years ago. By grouping granular updates closer to the data, frameworks can cut overhead and produce smoother user interfaces.

This state-driven approach contrasts with React’s emphasis on component rerenders and memoization hooks. While React tries to optimize re-renders, signals aim to bypass them altogether when no relevant state changes occur. The speaker explains how frameworks like Solid built around signals can deliver major performance gains in real-world scenarios like large lists or frequent updates. Yet, adopting signals often demands learning a fresh mental model. Attendees are encouraged to weigh whether these performance perks are worth adjusting established patterns around components and hooks.

### 00:30:00 — Async Consistency, Suspense, and Transitions

Attention shifts to managing asynchronous behavior in modern frameworks, focusing on patterns like Suspense and concurrent rendering. This aims to keep interfaces responsive while data loads occur in parallel. The speaker notes that React 18 introduced these patterns, but other frameworks, such as Solid and SvelteKit, have variants of suspense or transitional APIs. The conversation highlights potential complexities around caching data, partial rendering, and user experience during transitions from one data state to another.

An important consideration is that frameworks handle async differently. Some utilize wrapper components to track loading states, others prefer compile-time analysis, and still others rely on reactive signals to unify sync and async updates. The speaker underlines that concurrency can yield major performance wins—improving time to interactive and reducing blocking operations—yet each implementation has edge cases. The session encourages the audience to test real workloads to see if complexities introduced by advanced async patterns align with their performance goals.

### 00:36:00 — Server Rendering Performance Gains: String Output and Streaming

The speaker delves into server rendering performance, stressing the difference between string-based output and virtual DOM-based approaches. Compiling templates to strings, as seen in frameworks like Solid, Svelte, and Quick, can outperform virtual DOM approaches on the server, drastically speeding up SSR. Precomputing HTML sections spares the overhead of creating DOM nodes in memory. Concurrently, streaming lets servers gradually push HTML to the client, reducing perceived load times and enabling partial or out-of-order data fetching.

Mention is made of React 18 adding streaming support, aligning with certain next-gen SSR frameworks like Marco, which emphasized streaming for years. Quick, Astro, and others have also introduced ways to stream content in real time. These methods align with the idea of shipping minimal JavaScript on first render, making SSR not just about SEO but genuinely better user experiences. An underlying theme is that each framework invests in performance at different levels, with some focusing on smaller breakthroughs while others rework entire rendering pipelines.

### 00:42:00 — Hydration vs. Resumability: Islands, Server Components, and Routing

Focus shifts to advanced hydration strategies like islands architecture, used by Astro and others, and React’s server components. These aim to load only the necessary scripts for interactive sections. Another approach, championed by Quick, is resumability, which avoids repeated client rendering altogether. While these patterns promise faster startups, they often introduce complexities in routing, data flow, and mental models. The speaker emphasizes that frameworks must unify SSR logic and client transitions to prevent repeated overhead or abrupt user experiences.

Routing is highlighted as the next frontier in these hydration discussions. Some frameworks embrace multi-page approaches, refreshing server-rendered HTML fully, while others pursue a hybrid approach that retains certain state or reuses parts of the client. Navigations thus become an opportunity to apply streaming, partial updates, or server components. These experiments help developers decide how to split pages into separate modules, measuring trade-offs between simplicity, performance, and consistency. Ultimately, integrated solutions that handle hydration at both macro and micro levels may offer the best results.

### 00:48:00 — Tooling and Compilation: The Rise of Pre-Optimized Code

As the conversation progresses, the speaker covers the role of compilation. In their view, ahead-of-time transformations now shape how frameworks assemble output for both server and client. This covers everything from TypeScript type checks to specialized Babel or SWC passes that remove extraneous code. React’s “Forget” compiler, Svelte’s compile step, and Vue’s upcoming “Vapor Mode” all illustrate a push to pre-optimize code. By generating more direct JavaScript for each component, these pipelines reduce run-time overhead.

Yet compilation can also complicate debugging and increase build times, so frameworks must strike a balance between raw speed and developer ergonomics. The speaker notes that while some frameworks rely on universal bundlers like Vite, others build custom pipelines to handle unique reactivity or SSR features. The underlying question: will these compilers converge on standard transforms, or continue to diverge as each project pursues specialized capabilities? The outcome could influence how quickly new features propagate across the ecosystem.

### 00:54:00 — Reviewing React’s Ecosystem: Next, Remix, Hydrogen, and Beyond

Attention returns to React’s ecosystem, which includes Next.js, Remix, and Shopify’s Hydrogen. The speaker points out that Next remains the flagship for SSR in React, but Remix introduced new perspectives on data loading via web-standard forms and server-based mutations. Meanwhile, Hydrogen explored an early form of server components for e-commerce. While these frameworks are partially overlapping in goals, each targets slightly different developer preferences, from fully featured routing to minimal overhead or specialized commerce features.

A notable takeaway is that React’s community fragmentation can spur innovation or confusion. Some developers want a unified approach to SSR and data fetching, while others appreciate specialized solutions. Remix’s emphasis on progressive enhancement resonates with older principles of multi-page apps, whereas Next focuses on near-complete integration with Vercel’s deployment environment. The mention of Redwood, Blitz, and other opinionated stacks shows that React’s ecosystem fosters many flavors, each trading off flexibility for curated experiences.

### 01:00:00 — Viewpoints on Angular’s Evolution

Angular enters the discussion as a large, established framework undergoing its own revamp. The speaker recalls that after years of iterative updates like Ivy, Angular’s team now aims to modernize server-side rendering with Angular Universal and refine state management using signals. Despite Angular’s earlier reputation for lagging behind in SSR, their leadership is rethinking approaches to zone.js and hydration so the framework can stay competitive. While some watchers discounted Angular in favor of React or Vue, it still commands significant user share.

The takeaway is that Angular’s unique position—backed by Google and widely used in enterprise—means any big shift can cause ripple effects. If Angular successfully embraces signals, advanced hydration, or better tooling, that could reshape how countless enterprise teams build. The speaker highlights the importance of staying aware of Angular’s direction, even for those outside its ecosystem. By observing Angular’s reactivity experiments and universal rendering, developers gain perspective on how broad adoption influences frameworks’ commitment to performance and DX changes.

### 01:06:00 — Vue, Nuxt, and the Planned Vapor Mode

Conversation turns to Vue, a prominent framework that completed its transition to Vue 3 after a lengthy rollout. The speaker describes how Vue has stabilized core features like script setup and advanced TypeScript integration via Volar. Nuxt 3, the official meta-framework, similarly took time to mature but now provides a polished developer experience with auto-imports and server-rendering defaults. The synergy between Vue 3 and Nuxt 3 paves the way for complex production apps, with stable, high-level patterns reminiscent of Angular but more lightweight.

A major upcoming development for Vue is “Vapor Mode,” an experimental compiler that removes the virtual DOM in favor of fine-grained reactivity. Inspired partly by Solid, this mode promises to reduce rendering overhead for larger components. However, it may limit access to older Vue patterns and libraries. The plan includes bridging vaporized subtrees with standard Vue code, so teams can gradually adopt advanced performance features. With strong backward compatibility, Vue’s approach aims to expand performance capabilities without forcing abrupt rewrites.

### 01:12:00 — Preact and Fresh: Smaller Footprint Alternatives

Shifting focus, the speaker addresses Preact, a popular minimal React alternative. Preact has introduced signals as well, letting developers selectively optimize rendering at the leaves. While Preact’s ecosystem is smaller than React’s, the project emphasizes seamless compatibility with existing tools. The speaker notes that Preact’s official meta-framework, Fresh, prioritizes fast startup times by leaning on Deno, no-build setups, and islands-based hydration. Though still maturing, Fresh exemplifies how smaller frameworks can simplify prototyping and stress minimal overhead.

Despite smaller adoption, Preact consistently draws attention from devs wanting to reduce large bundle sizes. The speaker connects Preact’s signals approach to broader trends in fine-grained state updates, highlighting that even incremental steps can yield big performance gains. However, advanced SSR or streaming may be less of a core focus compared to heavier frameworks. Nonetheless, Preact’s niche is well-defined: deliver a React-like DX without the extensive runtime, making it attractive when minimal kilobytes and simpler mental models are paramount.

### 01:18:00 — Solid’s Emergence and Solid Start’s Goals

The topic shifts to Solid, which the speaker knows intimately, discussing its emphasis on granular reactivity and compile-time optimizations. Solid was architected to bypass the virtual DOM entirely for faster client updates. Its server-side story evolves around Solid Start, a meta-framework akin to Remix or SvelteKit. Through server functions, transitions, and partial hydration, Solid aims to merge best practices in SSR with the performance benefits of signals. The result is a system that can match or surpass heavier ecosystems while staying relatively small.

Challenges include finalizing Solid Start’s stable release, making server components more ergonomic, and unifying advanced streaming approaches. The speaker outlines a near-future goal of updating Solid’s core reactivity to improve lazy evaluations for large lists and specialized use cases like virtualization. Although version 2.0 might not drastically alter the public API, it will refine internal scheduling and suspense logic. By gradually layering advanced SSR features, Solid strives to balance immediate developer familiarity with next-level performance gains in both server and client contexts.

### 01:24:00 — Lit and Web Components Discussion

The conversation pivots briefly to Lit, an established library for authoring web components. Developed by Google’s Polymer team, Lit focuses on platform-native solutions, albeit with a minimal templating approach. Its community aims to standardize certain patterns—like declarative Shadow DOM and server rendering—that remain tricky for web components. While some tout the purity of relying on built-in browser APIs, the speaker cautions that advanced SSR or streaming solutions often require specialized steps that break from the universal web component ideal.

The speaker also references smaller projects like Eleventy’s WebC and custom polyfills that blend web components into traditional MPA workflows. Although web components can be an excellent fit for embedding reusable widgets, their monolithic use in large-scale SPAs or SSR setups introduces challenges around hydration and shadow-bound state. The conversation closes by acknowledging that Lit offers robust tooling for certain tasks, but frameworks like Vue or React typically integrate more advanced SSR patterns and larger plugin ecosystems.

### 01:30:00 — Ongoing Work in Marco and the Promise of Resumability

Marco, a framework used heavily at eBay, appears as an intriguing but lengthy project. Its upcoming Marco 6 aims to unify streaming, fine-grained reactivity, and partial hydration under a single architecture. However, repeated delays highlight how challenging it is to combine so many advanced ideas at once. The speaker offers anecdotal insight, praising Marco’s team as brilliant yet noting that tackling streaming, reactivity, and SSR simultaneously can prolong development cycles beyond typical open-source expectations.

Despite slow progress, Marco remains influential in conversations on resumability, shipping minimal client code, and seamlessly rendering large e-commerce sites. The underlying concept—send HTML, keep only relevant interactive bits on the client—aligns with designs also pursued by Quick. Because eBay’s business depends on performance at scale, Marco’s approach to partial hydration stands out as a real-world test. The talk implies that once Marco 6 lands, it may raise the bar for integrated SSR strategies across the entire JavaScript ecosystem.

### 01:36:00 — Quick and Quick City: A Focus on Resumable Apps

In a deeper exploration of Quick, the speaker explains how Quick and its meta-framework Quick City target partial loading and resumability. By splitting code at component boundaries and deferring client execution, Quick hopes to solve large apps’ slow startup times. The speaker points out that Quick invests heavily in micro-frontend-like containers, letting developers incorporate older technology or large sections without rewriting. This modular approach, while powerful, can raise authoring complexity and requires new mental models for routing and data flow.

The impetus behind Quick’s approach is that typical hydration can be wasteful when only portions of a page require interactivity. Resumability aims to skip re-rendering entirely on load, relying on the server-sent HTML plus lazy code fetching. The speaker clarifies that while Quick can theoretically handle many advanced SSR scenarios, it remains in beta. Releasing a stable 1.0 demands refining performance edge cases, out-of-order streaming, and ensuring good developer experience. Still, Quick’s big bet on code-splitting and minimal client overhead is seen as a possible next frontier in SSR.

### 01:42:00 — Astro’s Rise and Its MPA Model with Islands

The speaker shifts focus to Astro, describing it as a meta-framework that embraces minimal client JavaScript by design. It builds pages as primarily static sites, then selectively hydrates sections as islands. This approach resonates with simpler MPA philosophies while still allowing complex interactive widgets. Astro’s SSR capabilities have also matured, enabling advanced use cases for those needing server data or dynamic routes. Its template language provides an HTML-centric authoring experience, but developers can embed React, Svelte, Solid, or Preact as needed.

Astro’s tremendous growth in 2022 underscores how many sites are largely static, with only a fraction needing reactivity. The speaker highlights that Astro has become a solid choice for blogs, documentation, and marketing pages, yet can also integrate more interactive views when necessary. The next wave of Astro improvements likely includes more robust form handling, potential transitions, and deeper partial hydration. By bridging both static site generation and targeted reactivity, Astro stands as a prime example of how modern frameworks can unify old-school and new-school approaches.

### 01:48:00 — Considering Edge Deployments, Databases, and Monolithic vs. Split Architectures

The conversation addresses edge computing and how frameworks handle distributed deployments. Although frameworks claim to support edge hosting, real-world apps often require data from central databases, limiting edge advantages. The speaker references how Next.js or SvelteKit can deploy code at the edge, but large data stores remain anchored to specific regions. Quick or Astro sometimes rely on universal fetch patterns but still grapple with cold starts and size constraints on edge functions.

The speaker envisions a future where frameworks can split logic across multiple functions more seamlessly. Micro-frontends do this at an organizational level, but it can be complex or unwieldy for performance. Automated solutions that detect which routes can truly run at the edge might emerge, optimizing builds behind the scenes. The question remains whether these patterns will become mainstream or remain a specialized niche. As data solutions such as D1 or R2 evolve, the possibilities for geographically distributed applications could expand considerably.

### 01:54:00 — Emerging Rust-Based Frameworks (Leptos, Sycamore) and Wasm

Shifting from JavaScript to Rust, the speaker remarks on new projects like Leptos and Sycamore, which compile to WebAssembly but replicate fine-grained reactivity models. Despite typical overhead for loading Wasm, these frameworks demonstrate remarkable speed in client benchmarks. Their architecture draws heavily from existing reactive ideas, aiming to show that advanced performance can be achieved with alternative languages. Nevertheless, the speaker cautions that Rust-based solutions lack the large ecosystems of JS frameworks, making them niche for now.

Still, the progress of Leptos and Sycamore indicates that as WebAssembly matures, cross-language solutions might become increasingly competitive. They already rival some established libraries in raw throughput. However, constraints remain around bundling, debugging, and bridging JavaScript APIs. The talk concludes that these Rust frameworks are worth watching for specialized use cases or as a proof of concept for hyper-optimized front ends. Over time, Wasm could reshape how developers think about performance, especially if future standards reduce friction in DOM interactions.

### 02:00:00 — AI, Code Mods, and the Future of Migration

Brief commentary touches on AI-driven tooling such as ChatGPT or code-mod automation. While the speaker jokes that AI might help teams avoid rewriting entire stacks, the more realistic scenario is using machine learning to streamline migrations between framework versions or across libraries. The potential for advanced code mods could reduce the pain of adopting new SSR strategies, hooking into transitions, or rewriting certain legacy components. Although still early, the speaker sees value in assisting developers through tedious refactors.

Looking ahead, the question is whether AI or advanced code tooling can unify the drastically different paradigms of frameworks like React, Solid, and Quick. Possibly specialized code transformations can detect patterns and generate partial-hydration-friendly code. Nonetheless, these capabilities likely need deeper framework-level data, plus manual oversight. The talk positions AI as a supplement rather than a full solution, hinting that developers will still make critical decisions about architecture while machine learning handles mechanical conversions.

### 02:06:00 — Reflecting on Hype vs. Reality: Rising Stars of JS

The host references annual “Rising Stars” surveys that track GitHub star trends. Tools like Bun and Astro surged in popularity, while others like Solid, SvelteKit, and Quick also showed steady climbs. The speaker warns that GitHub stars, though indicative of excitement, do not alone signify production readiness. The mention of Redwood, Blitz, and other niche frameworks highlights ongoing fragmentation and healthy competition. Observing these surges helps identify where developer attention and potential ecosystem growth might converge.

The conversation stresses that momentum can shift quickly. Projects that capture a hype wave often must deliver on stability, documentation, and community support to retain users. The speaker sees 2023 as especially dynamic, with frameworks jostling to refine SSR, streaming, or partial hydration while balancing real-world demands. Meanwhile, more established technologies maintain large user bases. Listeners are urged to watch these star metrics, but also weigh maturity, leadership, and overall synergy with their existing stacks before committing.

### 02:12:00 — Updates in React Compiler and Core Team Changes

The speaker mentions personnel changes in the React ecosystem, including the departure of engineers who spearheaded React Forget and Inferno. This signals how large organizations like Meta often redistribute or lose core contributors, sometimes slowing external releases. React’s compiler aspirations remain in development, but it’s unclear how soon it might unify memoization or drastically improve performance. Such transitions can disrupt community expectations, reminding developers that open-source roadmaps and corporate timetables do not always align.

The example of Dominic Gannaway, Inferno’s creator, shows how performance-minded individuals might pivot to new roles, such as optimizing large financial platforms. The speaker notes that big performance ideas can surface in different domains, eventually feeding back into open-source. When top engineers shift focus, it can catalyze specialized solutions or cause future frameworks to adopt their breakthroughs. At the same time, React’s broad user base ensures continuity, even as it awaits the next major compiler milestone or advanced concurrency feature.

### 02:18:00 — Bun’s JSX Experiment: The Punning Controversy

In a lively segment, the speaker highlights how Bun introduced “punning” for JSX, letting developers write syntactic sugar like `<boop>` compiling down to conventional elements. This sparked debate in the ecosystem, particularly regarding tooling compatibility. Many rely on standardized JSX transforms via Babel, TypeScript, or SWC. Bun’s decision to forge ahead with custom syntax challenges the consensus-based approach. Supporters argue that tools should serve developers’ needs, not restrict them. Critics fear fracturing the community or complicating editors and formatters.

From the speaker’s view, small steps like these can test the boundaries of established norms. Framework authors often wish to explore innovative syntax or skip certain boilerplate, yet confront friction from rigid tooling. Although this punning feature might remain niche, it underscores tension between stable ecosystems and the desire to push language boundaries. The end result could be a push for more flexible standards that accommodate new ideas without upending existing pipelines, though no resolution appears imminent.

### 02:24:00 — Micro Frontends, Interop, and Wrapping Frameworks

The discussion pivots to transitional strategies for teams with large React codebases wanting to try newer frameworks. Some opt for micro frontend architectures, though the speaker calls these setups unwieldy. Others use specialized wrappers to embed Solid components inside React or vice versa, passing children across boundaries. By carefully bridging DOM nodes, each framework can manage its own rendering logic while still nesting within a larger page. This approach, while clever, raises complexities for SSR or shared context.

Despite potential friction, such incremental migration strategies illustrate a real need. Enterprises often cannot rewrite entire applications in one go. Wrappers that let teams test new paradigms on a portion of the UI might spur phased adoption. The speaker shares a working example of Reactify, allowing a React environment to mount Solid subcomponents. Although SSR integration remains non-trivial, it demonstrates that advanced reactivity can slip into established stacks. Ultimately, these bridging layers show how developers combine stable platforms with cutting-edge solutions in practical ways.