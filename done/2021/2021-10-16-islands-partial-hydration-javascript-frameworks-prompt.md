---
showLink: "https://www.youtube.com/watch?v=Q0mXYbA86Qo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Islands, Partial Hydration, & JavaScript Frameworks"
description: ""
publishDate: "2021-10-16"
coverImage: "https://i.ytimg.com/vi/Q0mXYbA86Qo/sddefault.jpg?v=6169b8a0"
---

## Episode Description

Ryan Carniato explores JavaScript’s journey from static pages to SPAs and SSR—covering framework sizes, islands architecture, resumable hydration, and future hybrid approaches.

## Episode Summary

Over nearly three hours, Ryan Carniato surveys the evolution of web architectures, starting with static HTML and guestbooks, moving through server-rendered partial updates, SPA client-side rendering, and static site generation. He reviews his JavaScript framework size analysis—comparing Vue, Svelte, Solid, React, and Preact—then outlines performance budgets from enterprise contexts like eBay. Diving into islands architecture with Astro, he demonstrates how manual islands reduce JavaScript payloads, before exploring Qwik’s granular, resumable hydration and React server components. He spotlights Marco’s compiler-driven partial hydration and HTML streaming techniques, comparing nine rendering methods and discussing future synthesis: smart hydration, resumable frameworks, and seamless MPA-to-SPA transitions. Closing with a Solid SSR roadmap and micro-frontend strategies, he addresses viewer questions on module federation, design trade-offs, and emerging tools. This deep dive equips developers to evaluate architecture choices, optimize payloads, and anticipate the next wave of JavaScript framework innovation.

## Chapters

### 00:00:00 – Introduction and Overview

Ryan begins by welcoming viewers to his stream focused on partial hydration—also known as “islands”—highlighting its complexity in today’s JavaScript framework landscape. He acknowledges common confusion around expensive or asynchronous hydration operations and promises a novel approach: live visualizations using finger-crafted Excalibur drawings on a laptop trackpad. By sharing this spontaneous, improvisational style, Ryan sets expectations for an exploratory session, inviting questions and chat interaction. This opening establishes both the technical theme and the interactive, community-driven atmosphere he aims to foster throughout the stream.

After setting up his tools and workspace, Ryan outlines the structure of the session: a brief “Week in JavaScript” segment before a deep dive into hydration strategies, framework size benchmarks, and architectural patterns. He admits prior explanations sometimes obscure key ideas and hopes hands-on visuals will clarify complex concepts. By framing his sermon as an open, “rambling” conversation, he humanizes the tutorial, lowering barriers for viewers to flag misunderstandings. This candid introduction assures audiences that learning will be iterative and collaborative, preparing them for the layered journey ahead.

### 00:06:00 – Framework Size Analysis Foundations

Building on his new article, Ryan revisits Evan Yu’s benchmark methodology for comparing framework payloads using the classic To-Do MVC example. He outlines the process: separating the vendor runtime chunk (Vue’s roughly 17 KB vs. Svelte’s 1.85 KB) from component-specific code, then extrapolating how component size scales with instance count. This approach highlights the point at which component overhead cancels out initial runtime savings—around nineteen to-do apps for Svelte vs. Vue. By anchoring the discussion in a tangible scenario, Ryan gears up viewers for richer, more nuanced size comparisons.

He then cautions about compression effects—Gzip and Brotli amplify common patterns, so benchmarks may overstate real-world differences. Noting that shared logic and repeated template snippets compress disproportionately, he urges viewers to treat raw byte comparisons as directional rather than absolute. This nuanced assessment ensures audiences appreciate both the utility and limitations of microbenchmarks. With a clear understanding of initial metrics and contextual caveats, Ryan lays a solid foundation for extending the analysis to include Solid, React, and Preact implementations.

### 00:12:00 – Extending Benchmarks: Solid, Preact, and React

At this juncture, Ryan broadens the payload comparison to encompass Solid, Preact, and React, responding to community requests for a comprehensive benchmark. He explains his rationale: evaluating minimal implementations rather than default class-based examples ensures representative results. By hand-coding the leanest possible Preact and React hooks versions and leveraging Solid’s compiler optimizations, he isolates true framework overhead. This hands-on approach underscores differences in state management—immutable structural cloning for Preact/React versus Solid’s mutable store syntax—revealing how architectural choices shape component footprint.

Diving into code metrics, he highlights that Preact bundles a tiny core but grows when including hooks, while Solid’s JSX compilation yields compact, incremental updates. Ryan points out how component size differentials flip at scale: Solid dominates up to ten components, Preact excels from ten to 113, and Vue eventually catches up beyond that threshold. This phase of analysis crystallizes the interplay of compiler optimizations, reactivity models, and bundling granularity, equipping developers to select frameworks aligned with their component complexity and performance budgets.

### 00:18:00 – Performance Budgets and eBay Context

Shifting focus from microbenchmarks to real-world constraints, Ryan recounts his eBay experience managing performance budgets in the late 2000s. He explains that eBay’s pages had strict size and load-time targets—directly correlated to sales revenue—which guided decisions when moving services to Node.js. These performance budgets demanded that pages never regress from decade-old targets, embedding a discipline that still drives modern architecture debates around single-page vs. multi-page apps.

He connects this enterprise perspective to the hydration and islands conversation: initial page payloads should ideally remain under 130 KB to accommodate slower networks and devices. Ryan demonstrates that, within this budget, most modern frameworks—even Vue, React, Svelte, and Solid—offer enough headroom to craft full-featured experiences without sacrificing performance. By reframing framework size discussions through the lens of real-world budgets, he underscores why partial hydration and islands architecture have become essential optimization strategies.

### 00:24:00 – The Static HTML Era and Guestbooks

Traveling back to the mid-1990s, Ryan paints a nostalgic picture of the “static HTML” era. He recalls building personal band websites on platforms like Tripod, where every page was a hand-coded HTML file uploaded via FTP. Simple features—such as image maps, table layouts, background colors, and visitor counters—delighted users and offered an accessible on-ramp for 12-year-old developers dipping toes into the web.

He also describes the era’s only interactivity: guestbooks implemented via CGI scripts in Perl. These forms appended new entries to static HTML files, creating a faux-dynamic experience. This historical context illustrates how developers once reluctantly reintroduced server-side scripting just to capture user input. By highlighting these early constraints and clunky workarounds, Ryan sets the stage for appreciating the architectural leaps that followed—culminating in today’s nuanced hydration techniques.

### 00:30:00 – CGI to Server-Side Rendering and Update Panels

As web applications grew more complex, Ryan explains how CGI and early server-side technologies (Perl, PHP, ASP) enabled on-demand HTML generation. He demonstrates the “update panel” pattern—predecessor to modern hotwire/turbo approaches—where only portions of a page were refreshed via asynchronous requests, rather than full reloads. These partial replacements eased some pain but introduced clunky focus restoration and fragmented state management.

He walks through a visual mock-up of a typical enterprise page segmented into header, navigation, sidebar, content panel, and footer, each defined as discrete “update panels.” JavaScript triggered asynchronous calls to fetch new HTML partials, which replaced only the affected panel. Despite improvements over full-page reloads, these patterns still felt cumbersome, inspiring later frameworks to seek smoother, more granular hydration solutions.

### 00:36:00 – Rise of Client-Side Rendering and SPAs

In the late 2000s, Ryan recalls the renaissance of client-side rendering with libraries like jQuery, Knockout.js, and Backbone.js. He details how these tools shifted rendering responsibility from the server to the browser—initially blank pages loaded JavaScript that built entire views, enabling seamless interactions and richer user experiences. This “magic” of AJAX-driven UIs transformed e-commerce, social platforms, and web apps.

However, as developers adopted SPAs, they encountered new challenges: initial blank screens led to slower perceived loads, and full JavaScript bundles became unwieldy. Ryan traces how community reactions spurred the next wave of optimizations—server-side rendering, hydration, and static site generation—each aiming to blend SPA interactivity with improved performance.

### 00:42:00 – Server-Side Rendering and Hydration in SPAs

Ryan delves into the emergence of server-side rendering (SSR) for SPAs, explaining that apps began running on the server to send fully populated HTML to the client, then “hydrating” the same app code in the browser to pick up where the server left off. Early SSR implementations often caused flicker and redundant work, but iterative refinements—such as React’s hydrate API and smart diffing—largely eliminated visual artifacts.

He describes the dual-execution cost: running components twice—once on the server, once on the client—thus bloating bundles and slowing hydration. This inefficiency reignited interest in shipping less JavaScript up front, catalyzing exploration of partial hydration and “islands” approaches that would follow.

### 00:48:00 – Static Site Generation (SSG) Approach

Turning to static site generation, Ryan outlines how tools like Next.js and Nuxt.js pre-render pages at build time, producing lightweight HTML that clients can hydrate on demand. By decoupling build-time rendering from run-time interactivity, SSG offered a middle ground: fast initial loads with selective hydration of dynamic components.

He notes modern extensions—such as ISR (Incremental Static Regeneration)—allow pages to be updated post-deploy, blurring lines between SSG and SSR. Nevertheless, the underlying trade-off remains: when and where to render, and how much JavaScript to send. Static site generation proved powerful for content-driven sites but left room for more granular hydration strategies.

### 00:54:00 – Astro and Islands Architecture

Ryan introduces Astro as a pioneer in the “islands” architecture: manually designating interactive components (islands) within otherwise static HTML pages. He demos an Astro example where only a small JavaScript bundle is sent for a counter component when it enters the viewport, leaving the rest of the page purely static. This manual approach slashes initial payloads by shipping only necessary code.

He highlights Astro’s framework agnosticism—supporting React, Vue, Solid, and Svelte islands—while acknowledging the two-app feel: static pages plus framework code. Nonetheless, Astro’s model underscores the power of isolating interactivity, laying groundwork for more automated, compiler-driven techniques.

### 01:00:00 – Qwik and Resumable Hydration

Next, Ryan explores Qwik, an ambitious framework by Misko Hevery focused on “resumable” hydration. He demos a To-Do MVC where a tiny loader waits for user interactions (clicks, inputs) before fetching only the event handlers and component code needed to fulfill that action. Each component is split into template, events, and state—serialized into HTML for granular lazy loading.

This out-of-order, on-demand approach yields near-instant interactivity with minimal initial JavaScript. Qwik’s injection-based dependency system identifies data dependencies at compile time, enabling precise code-splitting. While the API remains evolving, Qwik exemplifies the extreme end of state-driven hydration optimization.

### 01:06:00 – React Server Components and Hybrid Boundaries

Although not a full framework discussion, Ryan touches on React Server Components as a related innovation: marking components for server execution only, streaming HTML to the client without hydration for static parts. He contrasts this with islands and resumable techniques, noting that RSC still requires client bundles for dynamic components and doesn’t fully eliminate hydration costs.

By comparing RSC’s binary server-vs-client boundaries with Astro’s manual islands and Qwik’s on-demand loading, he underscores a spectrum of options—each balancing complexity, performance, and developer ergonomics. This survey primes viewers for the next deep dive into compiler-powered partial hydration.

### 01:12:00 – Marco Framework: History and Philosophy

Ryan turns to Marco (formerly Mitosis), a reactive-language framework dating back to 2012. He recounts its origins at eBay, where streaming and fine-grained reactivity were pioneered to meet stringent performance budgets. Marco’s design emphasizes server-first rendering, async data fetching with `<await>` tags, and file-based routing that auto-discovers components—minimizing boilerplate for MPA-style apps.

He highlights Marco’s core philosophy: using a compiler for cross-template analysis to detect stateful code, then serializing only the minimal inputs required for hydration. This compiler-driven approach foreshadows true partial hydration, promising seamless transitions between server and client without manual island annotations.

### 01:18:00 – Marco File-Based Routing and Async Rendering

Diving into code, Ryan demonstrates Marco’s page definitions using `/pages/[category].tsx` syntax. Each page fetches data asynchronously in a `<await>` block, streaming placeholder content before resolving. He shows how layout components wrap pages with shared headers and nav links, all auto-registered by the file system router.

This server-driven streaming model lets viewers perceive content immediately while data arrives, then client hydration is applied selectively to stateful components (such as comment toggles). By leveraging multiple `<await>` boundaries, Marco achieves progressive loading without explicit island markers, streamlining developer workflow.

### 01:24:00 – Marco Streaming Hacker News Demo

Ryan runs the Marco Hacker News demo, showcasing in-order streaming of server-rendered HTML. Upon navigation, the page loads static nav and loading spinners first, then streams list items into hidden containers before revealing them via a small runtime script. This technique avoids flicker, emulates SPA fluidity, and requires zero client-side JavaScript for purely static components.

He then toggles comments to trigger hydration: only the comment-toggle component’s code (roughly 1.5 KB) is fetched and executed. By serializing state and template boundaries, Marco circumvents the “double-data” problem inherent in many SSR setups, proving that granular streaming and hydration can coexist elegantly.

### 01:30:00 – Comparative Analysis of Rendering Methods

Summarizing nine rendering approaches—from static HTML and CDN folders, to update-panel MPAs, SPAs, SSR, SSG, islands, resumable hydration, and streaming—Ryan maps each technique’s pros and cons. He argues that no single method dominates; rather, context dictates the optimal strategy. Enterprise contexts benefit from strict streaming budgets, whereas content sites thrive on SSG.

He encourages viewers to weigh factors like network latency, client CPU, developer DX, and routing complexity. By cataloging methods side by side, Ryan empowers teams to tailor architecture—mixing and matching islands, streaming, and compiler optimizations—to their specific performance and UX goals.

### 01:36:00 – Future Vision: Smart Hydration and Framework Evolution

Looking ahead, Ryan outlines three pillars for next-generation hydration frameworks: compiler-driven state analysis (à la Marco), resumable hydration boundaries (inspired by Qwik), and intelligent lazy loading decoupled from hydration triggers (beyond Astro’s manual islands). He advocates leveraging fine-grained reactivity—signals, memos, and derivations—to serialize only what’s necessary at both render and re -render phases.

By unifying streaming HTML, multi-boundary hydration, and DSL-level state insights, he predicts frameworks will seamlessly bridge MPA and SPA worlds. This hybrid future could deliver dynamic interactivity without bulk, offering both dev comfort and end-user performance across varied application scales.

### 01:42:00 – Solid SSR Roadmap: Streaming and Async Hydration

Ryan maps out Solid’s forthcoming SSR enhancements: full streaming HTML support to unify sync and async rendering modes, followed by multi-boundary hydration via nested routing. He explains how component cloning at compile time already minimizes hydration code, and true streaming will allow Solid to serve partial updates without blocking on its runtime.

He envisions leveraging file-based nested routes to skip top-level template code on route changes—effectively partial hydration for SPAs. This roadmap promises to bring Solid’s developer ergonomics together with cutting-edge performance, narrowing the gap between specialized MPA frameworks and SPA-centric toolchains.

### 01:48:00 – Micro Frontends with Streaming iFrames (MicroFrame)

Introducing MicroFrame, an experimental “streaming iframe” component from the Marco team, Ryan shows how entire micro frontends can be streamed into host pages as HTML, avoiding traditional iframe pitfalls (SEO, resize, separate connections). MicroFrame uses standard `<div>` containers and server streams to interweave HTML from multiple services, preserving accessibility and performance.

He argues that HTML, not JavaScript, is the ultimate micro-service contract—once HTML streams, client-side hydration for dynamic islands can still apply. This pattern combines the modularity of iframes with the efficiency of streaming, offering a compelling architecture for large-scale, distributed web ecosystems.

### 01:54:00 – Module Federation vs. MicroFrame Approaches

Addressing module federation, Ryan contrasts it with MicroFrame. While module federation solves bundle sharing and lazy loading in Webpack ecosystems, it often suffers waterfall requests and requires client-side coordination. MicroFrame’s server-driven streaming sidesteps these issues by treating HTML as the interface, enabling parallel data delivery and simplifying dependency management.

He acknowledges that module federation remains powerful—especially for existing React applications—but suggests that server-centric streaming may offer a more resilient path for micro-frontend integration, particularly when combined with fine-grained hydration and edge-optimized delivery.

### 02:00:00 – Challenges and Developer Experience in Hydration

Ryan reflects on the developer ergonomics of advanced hydration techniques. He notes that while frameworks like React, Astro, and Qwik push boundaries, each introduces cognitive overhead—new APIs, serialization markers, or compiler conventions. He stresses the importance of DX in adoption: hydration strategies must integrate smoothly with familiar patterns or risk fragmentation.

By advocating clearer conventions (e.g., React hooks naming, `<await>` blocks in Marco, or explicit islands in Astro), he believes frameworks can strike the right balance between analytical complexity and intuitive design. This user-centric perspective is key to widespread uptake of next-gen hydration models.

### 02:06:00 – The Path from MPA to SPA: Bridging the Gap

Ryan revisits the MPA vs. SPA debate, likening it to two mountains separated by a deep valley. He points out that while SPA advocates celebrate client-side dynamism, MPA proponents cling to server-first simplicity. The “valley” represents the hard problems of hydration and streaming—challenges embraced by innovators like Misko Hevery and Patricio Cardenas in Qwik and Marco, respectively.

He reassures viewers that the ongoing work in compiler analysis, resumable hydration, and island orchestration will build the bridge between MPA’s reliability and SPA’s interactivity. This optimistic outlook frames the next few years as a transformative era for web frameworks.

### 02:12:00 – Reflection on Ecosystem Progress and Innovations

Pausing for reflection, Ryan surveys the rapid innovation he’s witnessed—from early update panels and Ajax demos to modern islands and resumable hydration. He credits community figures (Evan You, Rich Harris, Dan Abramov) for pushing boundaries and acknowledges that each new tool is built on the shoulders of prior experiments.

This retrospective underscores that no single framework “owns” performance or developer experience; instead, an ecosystem of complementary approaches will yield the most robust solutions. By staying aware of emerging techniques, teams can mix paradigms to satisfy both user and business needs.

### 02:18:00 – Community Interactions and Viewer Feedback

Opening the floor, Ryan fields viewer questions on topics ranging from stream-mode demos in local setups to module federation’s viability. He shares tips for debugging streaming HTML in DevTools, emphasizes the importance of production builds for accurate measurements, and recommends using incognito windows to avoid incidental third-party scripts.

This live troubleshooting session highlights the value of community engagement for surfacing edge cases and refining best practices. By addressing real-world developer challenges, Ryan demonstrates how dialogue between framework authors and users drives continuous improvement.

### 02:24:00 – Stream Structure and Future Content Ideas

Encouraging ongoing collaboration, Ryan solicits suggestions for upcoming streams—building lightweight Alpine or Petite-Vue clones, exploring microfrontend orchestrators, or showcasing universal renderers. He admires suggestions like Jack Herrington’s MicroFrame demos and module federation explorations, acknowledging both their potential and inherent complexity.

He emphasizes that a healthy framework ecosystem thrives on experimentation and shared learnings. By iterating on novel ideas in public streams, authors can empower developers to adopt cutting-edge patterns while avoiding common pitfalls.

### 02:30:00 – Q\&A: Solid Assets and Ecosystem Roadmap

In the final Q\&A, Ryan fields specific questions about Solid’s future SSR features, expressing both excitement and healthy caution. He admits that full partial hydration in Solid will require significant compiler investment—akin to Marco’s deep analysis—but outlines pragmatic short-term goals: streaming HTML, async islands via nested routing, and improved code-splitting.

This roadmap conversation illustrates how real-world constraints—team bandwidth, user expectations, and existing feature sets—shape framework evolution, reminding viewers that progress often unfolds in iterative phases rather than overnight revolutions.

### 02:36:00 – Q\&A: Micro Frontends and Streaming Strategies

Returning to micro-frontend discussions, Ryan elaborates on MicroFrame’s server-side HTML streaming model and contrasts it with client-driven module federation. He clarifies that MicroFrame’s streaming iframes are agnostic to framework choice, enabling React, Solid, or Marco services to be embedded seamlessly without additional client bundles.

By addressing audience concerns about performance, SEO, and accessibility, he underscores that architectural innovation must also respect practical trade-offs. This segment cements streaming HTML as a unifying technique for both page composition and hydration strategies.

### 02:42:00 – Closing Thoughts and Future Streams

As the session draws to a close, Ryan reiterates his gratitude to the Marco team, eBay colleagues, and community contributors who have advanced hydration research. He reminds viewers that while the path to perfect partial hydration and hybrid MPA-SPA experiences remains challenging, steady progress is underway.

He pledges to continue experimenting with new ideas—streaming advances, island automation, and compiler optimizations—while sharing findings in future streams. With that, he signs off, inviting viewers to subscribe for ongoing deep dives into the frontiers of JavaScript framework design.

### 02:48:00 – Final Wrap-up and Goodbyes

In the final minutes, Ryan wraps up loose ends: highlighting key takeaways, reiterating resources (blog posts, GitHub repos), and thanking everyone for their time and engagement. He encourages viewers to join the Discord, contribute to discussions, and propose experimental projects for upcoming streams.

The session ends on a collaborative note, with Ryan promising to incorporate audience feedback and deliver fresh tutorials on emerging technologies. His closing lines reinforce a community-first ethos: by sharing struggles and successes openly, developers collectively chart the future of the web.