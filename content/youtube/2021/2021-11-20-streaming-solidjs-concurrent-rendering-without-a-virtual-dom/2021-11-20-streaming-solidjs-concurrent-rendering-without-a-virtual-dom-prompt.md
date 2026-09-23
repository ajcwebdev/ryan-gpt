---
showLink: "https://www.youtube.com/watch?v=Hdc5QqPfFH8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS: Concurrent Rendering without a Virtual DOM"
description: ""
publishDate: "2021-11-20"
coverImage: "https://i.ytimg.com/vi/Hdc5QqPfFH8/sddefault.jpg?v=619818b5"
---

## Episode Description

Ryan Carniato explores SolidJS's concurrent rendering model, demonstrating fine-grained scheduling and streaming without a virtual DOM, comparing it to React's approach.

## Episode Summary

In this stream, Ryan Carniato reflects on his live-streaming setup and format, then transitions into a “This Week in JavaScript” segment covering React 18 beta, Netlify’s \$105 M Series D, and emerging routing libraries like React Location and Remix. He addresses community debates on SolidJS versus React’s virtual DOM, then unveils a live demo illustrating Solid’s concurrent rendering without a virtual DOM. By building a circles animation benchmark, he shows how heavy computations normally freeze the UI, then uses Solid’s `startTransition` API and a React-derived scheduler to prioritize animation over expensive updates. Ryan contrasts glitch-free rendering via Solid’s fine-grained reactivity with React’s Fiber pipeline, mapping signals, memos, and effects onto dual-queue scheduling. In Q\&A he clarifies the roles of `createComputed`, `createEffect`, and context, discusses virtual DOM trade-offs, and wraps up with reflections on future framework patterns and community feedback.

## Chapters

### 00:00:00 - Stream Introduction and Format Reflection

Ryan opens the stream by greeting viewers and musing on improving his introduction sequence—possibly with music or a custom interstitial to replace his usual off-the-cuff ramble. He jokes about having started with minimal StreamYard gear and considers upgrading to better hardware to enhance production value. As chat gradually populates, he shares recent thoughts on pacing his content, weighing the benefits of shorter, more focused sessions against the depth offered by marathon three-hour deep dives, and hints at experimenting with new formats to boost engagement and encourage creative audience interactions.

Once the early viewers settle in, Ryan invites chat participation and explains his tendency to field every question before pivoting into substantive content. He sets expectations for the stream’s structure—balancing Q\&A responsiveness with a planned demonstration—and teases that today’s focus will be a hands-on demo showcasing animations and scheduling techniques in SolidJS. With that roadmap in place, he segues into the weekly news roundup, promising to pivot quickly from conversation starters to an in-depth exploration of Solid’s concurrent rendering mechanics.

### 00:06:00 - This Week in JavaScript: React 18 Beta and Industry News

Transitioning into “This Week in JavaScript,” Ryan highlights the React 18 beta release as the week’s marquee event, noting that the long-anticipated features like streaming and Suspense were conceived years ago during the React 16 era. He underscores the unification of server and client rendering under a single Suspense-driven model, pointing out that SolidJS users have effectively enjoyed these capabilities for two years. While he refrains from exhaustive feature coverage—acknowledging many viewers are already familiar—he expresses genuine excitement for React’s official adoption of concurrent paradigms and suspense-based streaming.

Ryan then shifts focus to deployment platforms, spotlighting Netlify’s \$105 million Series D round and drawing comparisons to Vercel’s recent funding. He observes that both companies are bulking up through acquisitions, positioning themselves as all-in-one solutions for modern web applications. Emphasizing the escalating investment in this space, he suggests these platforms will continue to drive innovation in continuous deployment, edge functions, and integrated developer tooling, and hints that SolidJS can capitalize on their growing capabilities.

### 00:12:00 - Router Ecosystem and Community Updates

Ryan dives into the router landscape, discussing Tanner Linsley’s new React Location project built on the TanStack router. He notes its emphasis on query-parameter–driven routing—an approach not widely seen—and contrasts it with React Router’s default preloading strategy and Remix’s imminent open-sourcing. He highlights how parallelized data fetching and nested routing patterns vary across frameworks, and considers how libraries like React Query and SWR intersect with transitions and streaming, underscoring the emergence of diverse meta-framework strategies ahead of a potential convergence around React 18’s concurrent model.

Switching gears, he addresses ongoing Twitter chatter: Dan Abramov’s AMA that hinted at SolidJS as a “threat,” followed by Paul Henschel’s critique of non-VDOM architectures in 3D contexts. Ryan recounts fielding questions about Solid’s unique approach, clarifying that while SolidJS shares some features with React, it occupies a distinct niche—favoring fine-grained reactivity over virtual-DOM diffing. He teases that a live demo will concretely demonstrate how Solid achieves concurrent rendering without a VDOM, setting the stage to clear up misconceptions in real time.

### 00:18:00 - Debates on Framework Paradigms and SolidJS’s Role

Ryan recounts a heated Twitter exchange with Paul Henschel, creator of React Three Fiber demos, who asserted that virtual DOM is essential for scheduling and avoiding slow paints. Frustrated by pervasive misconceptions, Ryan challenged the claim that SolidJS cannot stream updates without a VDOM. He explains that Solid’s fine-grained update hooks mirror React’s scheduling abilities, and that reactivity internals—rather than a virtual-DOM abstraction—actually enable queued, interruptible rendering. Admitting he hadn’t communicated this clearly in his Finland talk, he commits to a live walkthrough to prove that concurrent rendering and no-VDOM can coexist.

He emphasizes that the upcoming demo will let viewers visually grasp how a non-VDOM architecture delivers streaming updates under load. By directly comparing Solid’s performance to a high-speed virtual-DOM implementation on the JS framework benchmark, he aims to debunk the myth that VDOM is the only viable approach for non-blocking UI work. With community skepticism in mind, Ryan readies a practical example to show exactly how Solid’s scheduler queues and executes tasks.

### 00:24:00 - Introduction to Concurrent Rendering Demo

Ryan transitions from discourse to demo mode, explaining he’ll build on Jeremy Ashkenas’s classic “circles” benchmark to illustrate performance. He outlines the demo’s structure: a collection of animated circles driven by sine and cosine for motion, paired with an independent counter updating at intervals. This setup simulates heavy computational work interleaved with rendering, highlighting UI freezes when updates collide with animations. He posts a link to the initial sandbox code in chat and labels key variables—signal S for circle count and C for center count—to clarify the code’s logic before diving into modifications.

He notes that the default behavior—animating circles and updating counts synchronously—can overwhelm the main thread, causing visible stutters. To prepare for scheduling, he wraps the demo in Solid’s optional concurrent flag, illustrating how tree-shaking keeps the core lean if scheduling is not enabled. By deferring the demo’s code splitting, viewers will soon see how enabling scheduling and adjusting priority levels can smooth UI updates without sacrificing the reactive simplicity of SolidJS.

### 00:30:00 - Building the Circles Performance Benchmark

With the base demo live, Ryan ramps up the circle count to stress-test the UI. He incrementally increases from 20 to 50, to 100, and finally 500 circles, observing that the animation remains smooth until reaching hardware limits around a hundred items. Pushing to 500, however, causes noticeable frame drops as the counter’s interval updates compete for main-thread time. By highlighting the glitching behavior at scale, he underscores rule number one: no amount of scheduling can overcome fundamental hardware constraints—or “slow paints”—and sets the stage for demonstrating how to mitigate this.

He explains that although the sine-cosine animations are relatively lightweight, tying every count update directly into the render loop introduces enough overhead to interrupt the smooth rotation motion. The goal is to show that even simple arithmetic logic coupled with frequent updates can degrade performance under heavy load. This benchmark thus provides a clear visual before/after comparison to showcase the benefits of priority-based rendering in SolidJS.

### 00:36:00 - Implementing Scheduling and startTransition

Ryan enables Solid’s scheduling flag and imports the `enableScheduling` helper, which integrates a React-derived scheduler into the demo. He then wraps the counter’s update logic inside `startTransition`, lowering its priority relative to the animation. Switching the sandbox to 500 circles, he demonstrates the difference: with scheduling off, the counter updates freeze the animation; with scheduling on, the numbers update in the background, and the circle motion remains uninterrupted, confirming that priority lowering effectively defers non-critical work.

He explains that this feature lives behind an opt-in to keep core bundle size minimal—around 1–1.5 kB of additional scripts only included when scheduling is used. Viewers see that the counter’s interval now yields to the animation, running updates off-screen and applying them only when render capacity allows. This experiment validates that concurrent rendering semantics can be layered atop Solid’s reactivity without any virtual-DOM overhead.

### 00:42:00 - Handling Heavy Workloads with Transitions

Next, Ryan tackles the heavy workload of adding hundreds of circles at once. He demonstrates that even with scheduling on, abruptly jumping from 20 to 500 circles induces a brief pause as the system processes creation logic. To alleviate this, he wraps the circle-count update—the dropdown handler—in `startTransition`, deferring box additions as a low-priority task. When switching to 500 again, viewers observe the circles appearing progressively: the animation continues smoothly while new circles populate the canvas in the background, illustrating true streaming insertion.

He highlights that streams of updates can now be buffered and committed incrementally, so UI responsiveness is preserved. Rather than blocking on a monolithic DOM-creation step, Solid’s scheduler slices the work into manageable chunks, interleaved with higher-priority animation ticks. This time-slicing pattern ensures heavy batch operations no longer lock the main thread, providing a practical demonstration of non-blocking concurrent rendering without a virtual DOM.

### 00:48:00 - Glitch-Free Rendering and Reactive Signals

After showcasing the core demo, Ryan revisits the principle of glitch-free execution. He underscores that any heavy computation—whether rendering or pure data processing—can stall the UI if run synchronously. While scheduling defers work, it cannot alter raw hardware limits: extremely heavy tasks will still take measurable time. The key, he argues, is isolating non-critical updates and running them at lower priority, ensuring critical animation and interaction loops remain glitch-free even under load.

He introduces a simple counter example with a deliberate timeout to visualize tear states: clicking rapidly yields inconsistent intermediate values, revealing how asynchronous updates can break UI consistency when not contained. This sets up the need for controlled update boundaries—like transitions and Suspense—as tools to maintain coherent state while juggling multiple streams of work. By framing this challenge, Ryan prepares to contrast Solid’s approach with React’s dual-phase commit pipeline.

### 00:54:00 - Comparing React’s Fiber Pipeline to SolidJS Reactivity

Ryan sketches React’s internal pipeline: event → setState → render (pure computation) → diff & commit (virtual-DOM reconciliation) → run effects. He explains that React’s pure render functions can be invoked arbitrarily, then patch the DOM in a separate commit phase, and finally flush side-effects. This model supports interruptible work but relies on a virtual DOM to accumulate and apply changes, and React currently restarts work when preempted, lacking fine-grained resumption.

He contrasts this with Solid’s reactive graph: signals trigger memos for pure calculations, render effects create DOM nodes once, and effect hooks manage side-effects. All updates queue into two buckets—high and low priority—and Solid uses the same scheduler library to yield between tasks. By mapping Solid primitives to React phases, Ryan illustrates that non-VDOM concurrent rendering is simply a different way of orchestrating event queues and update priorities, rather than an impossible feat without a virtual DOM.

### 01:00:00 - Scheduling Mechanics and the React Scheduler Port

Diving deeper, Ryan opens Solid’s scheduler code, which is a port of React’s scheduler. He walks through the `scheduleCallback` function that uses `window.postMessage` for cooperative multitasking, checking deadlines, and leveraging `isInputPending` to detect user interactions. He explains how scheduled tasks receive a time budget and yield back to the browser when that budget elapses, ensuring animations and input remain responsive. Viewers see that Solid’s default synchronous queue simply runs updates immediately, whereas with scheduling enabled, work is split into chunks based on remaining time.

He points out that Solid differentiates normal updates from transition updates, assigning them to high- or low-priority queues. When a transition is active, low-priority tasks enter the scheduler’s callback loop and yield whenever necessary. This architecture empowers SolidJS to perform non-blocking transitions and streaming insertion of UI fragments, mirroring React’s intent without requiring a virtual-DOM diff.

### 01:06:00 - Fine-Grained Resumable Updates and Nested Suspense

Ryan showcases Solid’s resumable update capabilities with a nested Suspense demo. He creates two nested components wrapped in a `Delay` helper that waits before rendering its children. Viewers see that when each delayed boundary resolves, only the affected subtree updates—Solid does not re-render parent components or unrelated branches. This fine-grained resumption contrasts with React’s current approach, where preempted renders restart from the root of the subtree, illustrating Solid’s efficiency for complex UI graphs.

He emphasizes that Solid’s reactive hooks—`createSignal`, `createMemo`, and `createRenderEffect`—work seamlessly with Suspense boundaries. Components can stream data fetches off-screen and commit only when all dependencies are ready, avoiding tear states. By containing asynchronous branching within explicit boundaries, developers maintain consistent UI while taking full advantage of concurrent rendering patterns.

### 01:12:00 - Q\&A: createComputed, createEffect, and Context Usage

In Q\&A, Ryan clarifies the distinctions among Solid’s three core primitives. `createEffect` always runs as a side-effect and belongs to the low-priority (blue) queue, intended for DOM mutations and external interactions. `createMemo` computes pure values in the high-priority (red) queue and caches results for downstream signals. `createComputed` also runs in the red queue but is reserved for synchronizing signals that depend on others, without causing side-effects. He notes `createRenderEffect` straddles both worlds: it initially builds DOM ahead of time (red) then applies updates (blue).

He also addresses context usage in SolidJS, emphasizing there is virtually no performance overhead compared to React. Context providers simply preserve signal graphs within defined boundaries, aiding features like scheduling and Suspense. Ryan encourages developers to leverage context for global stores, reassuring that Solid’s design accommodates large-scale applications without the pitfalls of implicit, uncontrolled reactivity.

### 01:18:00 - Community Feedback on Virtual DOM and Use Cases

Ryan revisits community objections that a virtual DOM is necessary for concurrent rendering, specifically for cloning and swapping actual DOM nodes. He acknowledges use cases—such as React Three Fiber’s 3D pipelines and server-side prerendering—where scheduling and buffering off-screen work can benefit from a diffing abstraction. However, he argues most applications rarely perform such massive batch operations that cannot be handled by fine-grained reactivity and explicit transitions.

He explains that SolidJS offers the primitives to implement VDOM-like buffering if desired, but opts for a leaner core to avoid unnecessary indirections. By front-loading DOM creation and isolating side-effects, Solid achieves a comparable runtime with fewer allocations. Ryan stresses that reactivity itself is a minimal event graph—developers choose when to form boundaries or defer work—making Solid a versatile platform for diverse performance patterns.

### 01:23:00 - Final Thoughts and Stream Wrap-Up

As the session winds down, Ryan summarizes the key takeaways: concurrent rendering is not exclusive to virtual-DOM frameworks; fine-grained signals, memos, and effects can be orchestrated via a scheduler to yield non-blocking updates. He reiterates that heavy computations still obey hardware limits, but explicit transitions preserve UI responsiveness. He encourages viewers to experiment with Solid’s scheduling flag, Suspense boundaries, and reactive primitives to find the best fit for their apps.

Thanking everyone for attending, Ryan announces he’ll wrap up early to reclaim personal time after a brisk, focused stream. He invites the community to share feedback on documentation, demos, and future topics, before signing off with a promise to continue refining stream format and delivering practical insights into SolidJS’s evolving concurrent rendering capabilities.