---
showLink: "https://www.youtube.com/watch?v=iOqPj-CjoV0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "MPAs vs SPAs"
description: ""
publishDate: "2023-08-12"
coverImage: "https://i.ytimg.com/vi/iOqPj-CjoV0/sddefault.jpg?v=64d414da"
---

## Episode Description

Discussion about multi-page apps, single-page apps, performance, signals, transitions, and framework evolutions, with technical insights spanning nearly five hours.

## Episode Summary

Throughout this session, the speaker compares multi-page app (MPA) and single-page app (SPA) approaches, highlighting how each evolved and why both remain prominent. Early on, they discuss how conventional server-rendered websites eventually gave way to fully client-rendered experiences, and why that shift happened. As the talk progresses, performance trade-offs, emerging techniques like streaming and resumability, and advanced concepts such as signals all come into focus. The speaker also reviews how modern frameworks strive to unify or blur the lines between client and server responsibilities, often using small hydration islands or partial rendering for efficiency. By the end, there’s a deep look at persistent state, routing, transitions, and the broader quest to balance developer experience with end-user performance. All of these reflections underscore the complexity of web development today.

## Chapters

### 00:00:00 — Introduction and Initial Context

In the opening segment, the host greets the audience and explains plans for discussing multi-page apps (MPAs) versus single-page apps (SPAs). There is a brief mention of recent travel, conferences, and the general desire to resume a more stable streaming schedule. The speaker references community chatter about how certain frameworks manage navigation and rendering. This context sets the tone for the conversation: they aim to bridge knowledge gaps and share practical viewpoints gleaned from professional experience in web development.

The speaker emphasizes that MPAs, historically seen as “normal websites,” have gained renewed interest because of performance and complexity concerns around SPAs. They note that while single-page apps shaped modern web dev, upcoming changes in frameworks and browser APIs have many developers reexamining older patterns. The conversation invites participants to join the chat with questions or opinions, signaling that the next several hours will provide both a retrospective and forward-looking examination of these architectural approaches.

### 00:10:00 - Revisiting the Roots of Web Rendering

Here, the speaker discusses the earliest days of the web, when static HTML pages and basic server-side scripts powered most sites. They point out that MPAs were essentially the only model for a time, with each navigation requiring a full page load. The audience learns about how these techniques, though simple, were sufficient for many early use cases. By illustrating how older technologies like Perl scripts and early CGI bins worked, the speaker situates MPAs as the default web paradigm before JavaScript had matured.

The speaker then briefly covers transitional developments like PHP, Rails, and .NET, highlighting how server-based forms and postbacks introduced a basic level of dynamism. They mention how partial page updates began appearing once “Ajax” changed the way data could be fetched without full reloads. This segment underscores that managing state was cumbersome in the past—leading to complicated patterns where server and client had to continuously hand information back and forth. The groundwork is laid for understanding why client-side frameworks eventually rose to prominence.

### 00:20:00 - Emergence of Single-Page Apps

During this chapter, attention turns to the origins of the SPA model. The speaker recounts how early JavaScript libraries—later evolving into sophisticated frameworks—gave developers a new means of handling interactions directly in the browser. By keeping state on the client, these tools sidestepped constant page reloads, resulting in smoother experiences for complex applications. The mention of simpler code organization and a more “app-like” approach helps clarify why SPAs captured so much excitement in the early 2010s.

The presenter also recounts that SPAs brought challenges like hydration, bundling, and a potential overload of JavaScript on the client. They remark on how, despite these issues, the compelling nature of fluid interactions and the alignment with mobile-app mentalities pushed more teams to adopt client-heavy stacks. Many organizations embraced this new style, finding success but also grappling with performance bottlenecks on slower devices or networks. This sets the stage for the renewed interest in server-side approaches.

### 00:30:00 - Performance Concerns and the Cost of JavaScript

As the conversation deepens, the speaker highlights the mounting criticisms of SPAs, centering on large JavaScript bundles that strain both network bandwidth and device CPUs. They reference studies showing a direct correlation between heavy scripts and decreased user engagement, particularly on low-end phones. This marks the beginning of a larger debate over how to strike a balance between robust interactivity and minimal overhead. The mention of “zero kilobytes of JS” as an idealized trend signals a push to reduce client work.

Concrete statistics underscore the topic: average page sizes have grown substantially, with JavaScript playing a sizable role. The speaker cites data showing how parsing and executing JavaScript can dominate load times, especially on global, lower-tier devices. They also reflect on how companies like eBay and Amazon heavily optimize site speed due to measurable revenue impacts. This leads to renewed questioning of whether shifting more tasks back to the server, reminiscent of MPAs, might reclaim lost performance benefits.

### 00:40:00 - Server-Side Rendering Revisited

In this chapter, the speaker describes how frameworks began to reintroduce server-side rendering (SSR) to address some SPA pitfalls. They highlight that early SSR solutions let developers send HTML initially, then “hydrate” it in the client to regain interactivity. While this boosted perceived performance, it also introduced complexities like the so-called “double data” problem, where code or state has to be duplicated on both sides. This reality makes SSR a nuanced compromise, not an outright fix.

The speaker walks through how streaming and incremental rendering can mitigate some hydration pains. They note that streaming partial content helps pages appear faster, though dynamic or interactive parts still need client-side logic. However, they caution that SSR often inflates bundle sizes because components must run on both server and client. This chapter underscores that while SSR is a valuable piece of the puzzle, teams must accept certain trade-offs related to code complexity and duplication.

### 00:50:00 - The Rise of Islands Architecture

Here, the concept of “islands architecture” takes center stage. The speaker explains how frameworks like Astro allow websites to deliver mostly static pages punctuated by discrete interactive “islands.” By limiting JavaScript to only necessary features, sites potentially stay lightweight while preserving rich elements like toggles or menus. This approach offers a compelling middle path between full-blown SPAs and classic MPAs, delivering server-rendered HTML with just enough client-side functionality.

Examples from e-commerce or content-heavy sites illustrate how islands reduce overhead. Each interactive portion hydrates individually, significantly cutting the cost of loading entire frameworks for minor features. The speaker also mentions that islands can nest, enabling more complex scenarios like server layouts combined with small reactive widgets. This mix-and-match pattern highlights a fresh perspective: adopting a server-first methodology for overall rendering but sprinkling in interactive components where they provide real value.

### 01:00:00 - Navigating State Between Server and Client

Moving further, the discussion zeroes in on handling application state when mixing server and client render strategies. The speaker notes that MPAs historically forced repeated page reloads, complicating shared state management, while SPAs typically unify state in one place but risk shipping massive bundles. Islands-based or partial-hydration solutions raise new questions: Where should ongoing state live? Does the server remain the single source of truth, or does each island track local data?

Proposed patterns involve pushing non-critical interactions to client islands while main data rendering stays on the server. However, the speaker acknowledges that bridging these models without confusion is tricky. They reflect on older approaches like Microsoft’s postback system, or rails-based architectures, and emphasize how each iteration attempts to unify the developer’s mental model. Keeping state consistent across navigations remains a core design problem, driving many of the next-generation frameworks to innovate in this space.

### 01:10:00 - Addressing Accessibility and Navigation Nuances

In this segment, the speaker touches on accessibility and user experience, reminding listeners that MPAs and SPAs handle native browser events differently. They highlight common pitfalls: some single-page apps break fundamental behaviors like the back button or middle-click, reducing user trust. Meanwhile, purely server-driven sites can appear more stable but lack some of the fluid transitions that modern users expect.

Focus management and announcements for screen readers become particular concerns when frameworks override native navigation. The speaker underscores that any approach—SPA, MPA, or hybrid—must respect the basic contract of the web for consistent accessibility. They mention that new browser APIs and evolving patterns can help unify transitions and reduce jarring reloads, but note that such features are still in flux. This chapter underscores the importance of balancing dynamic features with user-friendly, inclusive design.

### 01:20:00 - The View Transition API and Page Animations

During this portion, the speaker shifts to the emerging View Transition API, describing how it aims to bring native transitions to the web without heavy manual animations. They outline how developers might soon define shared elements between pages and let the browser handle smooth cross-fades or slides. Although this feels reminiscent of single-page transitions, the API is designed to work even with distinct page loads, theoretically blending MPA reliability with client-side polish.

They illustrate potential pitfalls with asynchronous data fetching, highlighting that the View Transition API can momentarily freeze the page if not carefully orchestrated. The speaker suggests that developers preload data or finalize states before triggering transitions to avoid blocking interactions. They also predict that widespread support for these APIs may gradually reduce the perceived gap between MPA and SPA fluidity, making it easier to adopt server-centric architectures without losing interactive flair.

### 01:30:00 - Experimenting with Astro’s View Transitions

Here, the conversation moves to a live demonstration of Astro’s experimental view transitions. The speaker shares how a small client-side router, roughly a few kilobytes, can enable fade or slide animations between distinct pages. This example underscores Astro’s principle of shipping minimal JavaScript while delivering polished interactions. The speaker tests toggles and navigation, observing how each island or portion of content updates gracefully.

They highlight that Astro’s approach auto-detects matching elements, allowing for seamless cross-page transitions without requiring heavy manual markup. Still, advanced uses—like persistent DOM elements for complex state—remain a work in progress. The demonstration reveals how the distinction between classic full-page reloads and slick spa-like transitions can blur, raising hopes that future frameworks might unify these patterns in a lightweight, accessible manner.

### 01:40:00 - Preserving Component State Across Navigations

As the speaker deepens the conversation on transitions, they address the core difficulty of persisting state across page loads. They discuss how a simple text input or video player can maintain its place if the DOM element remains intact, but that typically requires a client router. The speaker explores how frameworks might reconcile partial server renders with full continuity in the browser, focusing on details like reference IDs or serialized props to keep components stable.

They note that accomplishing robust state preservation means capturing not just data but also user interface details—like scroll position or form entries. The speaker references frameworks that do partial or no re-mounting, which can keep the user experience smooth. However, they acknowledge that bridging all these aspects demands considerable architectural nuance. By demonstrating small code snippets and discussing upcoming features in tools like Astro or Solid, the speaker unveils the complexities of next-gen page transitions.

### 01:50:00 - MPA vs. SPA: Ongoing Community Debates

This chapter explores the broader community debates sparked by various frameworks claiming either “zero JavaScript” or “optimal hydration.” The speaker mentions recent public statements suggesting single-page apps might be a relic of earlier web eras, while others defend them as essential for dynamic client experiences. They observe that arguments often oversimplify or misrepresent the capabilities of modern SSR frameworks.

Though some see MPAs as a “return to basics,” the speaker clarifies that truly zero-JS sites are rare once complex logic or interactive features come into play. Meanwhile, large SPAs can frustrate users on slower devices or networks. The talk highlights that solutions typically land somewhere in the middle, employing a server-first approach augmented by carefully sprinkled scripts. Developers must decide how to incorporate streaming, code splitting, or partial rendering to meet both performance and feature demands.

### 02:00:00 - Scripting Optimizations and Code Splitting

Switching gears, the speaker outlines strategies for reducing JS overhead, including code splitting, lazy loading, and tree shaking. They show how, for most sites, the largest portion of client code belongs to the main application bundle. Breaking that bundle into smaller parts loaded only when needed can yield real gains, but it requires mindful planning and dynamic imports to avoid user-facing hiccups.

They address that even sophisticated splitting doesn’t entirely solve the hydration cost. If the main page is large and rehydration is mandatory, the chunked code must be processed at some point. The speaker suggests using multiple techniques—like streaming server outputs, concurrency for partial hydration, and frameworks offering partial routing—to combine minimal initial loads with just-in-time downloads. This section showcases how a layered approach is essential for genuinely improving perceived performance.

### 02:10:00 - Resumability and Quick-Like Approaches

In this segment, the speaker introduces the notion of resumability, referencing how frameworks like Qwik aim to skip hydration entirely and continue from a server-rendered state. This technique can slash startup times by avoiding repeated parsing of code. The speaker compares it to more conventional solutions that must re-run component initialization or event binding on the client.

They caution that while resumability shows promise, it also demands specialized architecture. For instance, Qwik has a distinct mental model where components resume rather than rehydrate. The speaker implies that many devs find the concept intriguing, yet it may not be a universal fit for every use case. They close by noting that, as always, real-world constraints—like caching, dynamic data, or user interactions—affect how viable this path is in production scenarios.

### 02:20:00 - React Server Components and Their Influence

This chapter dives into React Server Components (RSCs), describing how they split rendering responsibilities between server-only and client-enabled pieces. The speaker observes that this push from the React team attempts to reduce client overhead by offloading more logic to the server side. They mention that Next.js app directory is a popular vehicle for exploring RSCs, even though it remains a work in progress.

Despite the excitement, the speaker notes potential complexity: server components can lead to tricky mental models around data fetching, partial hydration, and the separation of pure UI from interactive code. Skeptics worry that new layers could hamper straightforward debugging. Yet the speaker acknowledges that RSCs might solve real performance pains for large-scale apps dealing with heavy data on every route. This segment highlights how React’s evolving architecture echoes the broader industry shift toward server-heavy solutions.

### 02:30:00 - Comparing Islands, RSCs, and Hybrid Models

Continuing the discussion, the speaker contrasts islands-based approaches with React Server Components. They clarify that both aim to reduce the client’s initial JavaScript load by serving pre-rendered HTML. Islands typically define small interactive zones, while RSCs blur the boundary, letting the server handle large portions of the UI. Listeners gain insight into how these patterns converge on similar goals—better performance, simpler routing, and a focus on shipping less code to the browser.

They also describe the tension between “stateless” server rendering and persistent client state. Some propose letting the server handle heavier data tasks while the browser keeps ephemeral or UI-specific state. Others prefer client-driven logic for greater fluidity. The conversation underscores that frameworks differ in how they orchestrate these interactions, with each approach reflecting different philosophies on data flow, user event handling, and code splitting.

### 02:40:00 - Technical Deep-Dive on Signals (Without the Word “delve”)

Here, the speaker moves to a more technical breakdown of signals. Signals, as used in frameworks like Solid or Angular’s next iteration, represent a reactive primitive that can track changes to individual values instead of entire component trees. This granular approach stands in contrast to React’s typical “re-render the whole function.” By isolating specific data changes, signals can dramatically cut the cost of updates, preventing unnecessary computations.

They highlight how signals create direct relationships between data and UI elements. A single changed value triggers only the parts of the DOM that rely on it. This can deliver near-vanilla performance while retaining a declarative style. Still, adopting signals across a codebase requires a shift in mind-set, since developers must treat each piece of data as a distinct reactive unit. The segment foreshadows how signals might factor heavily in forthcoming versions of various frameworks.

### 02:50:00 - Framework Comparisons and Demos

Transitioning to demonstrations, the speaker references how different frameworks, from React to Vue and Svelte, handle updates. They show that React’s default triggers full renders unless memoization is used, while Vue and Svelte re-run entire components. Meanwhile, frameworks like Solid or Qwik might only re-run the specific reactive slice. These distinctions clarify where performance bottlenecks can arise.

With code examples, the speaker shows how a single button press can force multiple renders in some libraries but only one in a signals-based architecture. In each illustration, the relationship between data and reactivity reveals subtle differences in design. The audience sees how the choice of library has real implications for large-scale apps seeking to optimize for speed. Ultimately, the talk underscores that deeper knowledge of each library’s update model is crucial for well-optimized solutions.

### 03:00:00 - The Ongoing Evolution of Svelte and Angular

Midway through the session, the speaker touches on upcoming changes in Svelte and Angular. For Svelte, mention is made of possible compilation improvements, hinting that Svelte 5 might incorporate signals under the hood. Meanwhile, Angular’s plans revolve around a shift to a more fine-grained reactivity system to combat performance lags in large apps. Both frameworks appear intent on matching or surpassing performance benchmarks seen in lesser-known but faster libraries.

The speaker underscores that these changes are part of an ongoing arms race in the JavaScript ecosystem. Each major framework wants to simplify developer experience, lighten the client bundle, and stay relevant in an era where edge computing and serverless infrastructures continue to expand. By weaving in official announcements, community chatter, and personal insights, the host paints a picture of an industry steadily converging on smaller, more reactive patterns across the board.

### 03:10:00 - The Importance of Community Feedback

In this stretch, the talk focuses on community influence. The speaker recalls times when user outcry over performance regressions prompted frameworks to adopt new techniques. They highlight that frameworks like React didn’t always anticipate how big the JavaScript overhead might become, leading users to explore alternatives. As interest in more server-driven solutions grows, community requests for better SSR, caching, and minimal JS remain loud and persistent.

They also discuss how open-source governance and collaboration fuel these projects. People build experimental features, share benchmarks, and refine best practices collectively. This communal energy shapes the frameworks, driving them beyond marketing slogans to truly address developer pain points. The speaker encourages listeners to remain active in GitHub issues, Discord groups, and other channels so that future releases reflect real-world challenges and insights, rather than isolated core-team perspectives.

### 03:20:00 - Jamstack’s Legacy and Its Shifting Landscape

Addressing a separate yet related topic, the speaker reflects on the idea of Jamstack—originally coined to emphasize client-side JavaScript, reusable APIs, and prebuilt markup. They note that Netlify, once a major promoter of Jamstack, has moved away from the term, indicating it has effectively become mainstream or redundant. The conversation points out that many modern frameworks integrate Jamstack-like concepts, making the label less distinctive than before.

The speaker acknowledges that although Jamstack branding may have faded, its influence persists in widely adopted practices like CDN-first hosting and serverless functions. They link this evolution to the broader theme of balancing server-side rendering with minimal client code. As older terms lose traction, new patterns such as “islands architecture” or “streaming SSR” fill the gap, continuing the mission of providing fast and efficient sites without overloading clients.

### 03:30:00 - Solid Framework Updates and Directions

Shifting attention to the Solid framework, the speaker details ongoing work to unify experimental branches, highlighting merges intended to stabilize advanced features like partial hydration and concurrency. They mention performance benchmarks, advanced compilation, and the complexities of aligning new techniques with existing code. Listeners gain an inside look at the iterative process of refining a cutting-edge library before it’s widely promoted for production.

The speaker shares personal observations on how Solid’s approach to signals influences the broader conversation, with some frameworks considering signals as well. They reveal behind-the-scenes challenges, such as balancing developer ergonomics with advanced optimizations, or reconciling server-based routing with robust client interactions. This chapter reveals that even smaller projects, once purely experimental, now aim to tackle the same scale of demands as behemoths like React, but with a more focused, granular approach.

### 03:40:00 - Embracing Multiple Rendering Strategies

The speaker highlights how no single approach—MPA, SPA, islands, SSR, or resumability—offers a one-size-fits-all solution. Different pages on the same site may benefit from different techniques. An e-commerce checkout flow might rely heavily on dynamic client state, while a blog section could be purely static. The speaker reiterates that frameworks increasingly allow mixing and matching strategies to meet page-by-page demands.

This flexibility points to a future where “hybrid” or “transitional” apps become routine. Developers could default to a server-driven architecture but enable quick, client-only transitions in critical interaction areas. The talk underscores that diagnosing real-world performance issues, testing solutions, and collecting metrics remain vital. The speaker envisions a developer landscape where knowledge of multiple rendering modes is essential for building robust, engaging websites that scale to diverse audiences and device constraints.

### 03:50:00 - Potential Standards for Reactive Primitives

Here, the conversation examines possibilities for standardizing reactive primitives at the browser level. The speaker mentions growing interest from web platform engineers in signals or similar systems. They imagine that if the browser offered a lightweight mechanism for tracking value changes, frameworks could unify around it, reducing the overhead of implementing reactivity multiple times. Yet real challenges remain, such as ensuring it stays flexible enough for diverse library needs.

They clarify that any standard would need to focus on core capabilities—like reading and setting a reactive value—without forcing a single reactivity model. But bridging different frameworks’ philosophies could be tricky. The speaker draws parallels to earlier attempts at standardizing module systems, acknowledging that widespread adoption depends on practical benefit, not just theoretical elegance. Attendees are left to consider whether the future of front-end might revolve around an official, low-level reactivity API.

### 04:00:00 - Demo: Reactive Behavior and Benchmarks

In this segment, the speaker references live demos or code samples that reveal how small changes in state can trigger or skip re-renders. By walking through micro-benchmarks, they compare how frameworks handle tasks like table row updates or element swapping. Observers see how certain implementations edge closer to raw vanilla JS performance, indicating just how optimized modern solutions have become.

Nevertheless, the speaker cautions that these benchmarks only measure specific operations. Real sites have wide-ranging tasks, from user authentication to streaming content. A blazing-fast table update might not translate to a better user experience if the rest of the site remains under-optimized. Hence, the talk underscores that while these micro-measurements can guide framework design, holistic performance planning should factor in caching, concurrency, and consistent throughput under real-world conditions.

### 04:10:00 - Svelte 5 and View Vapor: The Performance Race

Turning back to Svelte, the speaker mentions rumors and early tests suggesting Svelte 5 may compete at the top of the performance charts, thanks to new compilation strategies. They also note that Vue is experimenting with advanced optimization under a project labeled “Vapor.” Both frameworks appear determined to match or surpass top-tier reactivity libraries, consolidating a trend: every major ecosystem wants best-in-class speeds.

The speaker reflects on the historical roles of React, Vue, and Svelte, underscoring that React once stood apart in popularity but faced criticism over slow default updates. Now, as performance gains become the norm, the playing field tightens. Future releases could see all these libraries bunched near the upper limits of what JavaScript can achieve on the DOM. The result is an exciting but also challenging environment, where each library continuously refines techniques to hold onto or climb the performance ladder.

### 04:20:00 - Replacing React vs. Replacing TypeScript?

At this juncture, the speaker muses on broader disruptions in the tooling ecosystem. Replacing React is hard enough given its massive community; replacing TypeScript, with its near-ubiquitous usage, is arguably even more challenging. They compare how some new type systems, or languages transpiling to JavaScript, aim to fix perceived gaps, yet struggle against the network effect of existing tooling and tutorials.

Listeners learn that certain futuristic compilers could unify reactivity, code transformation, and type checks, but entrenched patterns remain formidable. Projects such as esno or other experimental type systems reflect developer dissatisfaction with TypeScript’s constraints, yet the momentum behind a well-established standard is difficult to shift. Ultimately, the speaker suggests that while innovation abounds, practical usage still depends on community buy-in and robust ecosystem support, just as it does with front-end frameworks.

### 04:30:00 - Q&A on Framework Internals

During a question-and-answer interlude, the speaker fields inquiries on the nuts and bolts of frameworks like Solid, Svelte, and Qwik. Topics include how complicated concurrency logic is implemented, or whether advanced techniques like streaming can break existing patterns. There are clarifications about how different routing layers overlap with SSR, along with best practices to avoid “waterfall” data fetches.

One recurring theme is the relationship between purely synchronous reactivity and asynchronous tasks, such as data fetching. The speaker describes how frameworks juggle immediate computations with queued updates for slow operations, ensuring the UI remains consistent. Listeners interested in the nitty-gritty details hear suggestions about carefully sequencing effects and using structured lifecycles. This exchange highlights that bridging SSR, signals, and concurrency remains an area of ongoing research and iteration.

### 04:40:00 - Final Thoughts on Architecture and Trade-Offs

Winding down the session, the speaker reaffirms that no silver-bullet approach has definitively replaced everything else. They show that MPAs, SPAs, islands, and partial or streaming SSR each answer specific demands. The crucial lesson is to be aware of context—application scale, user hardware, and development resources—before committing to any single approach. The talk reminds developers that the best solutions often combine multiple ideas in ways that suit a project’s unique challenges.

By revisiting the conversation’s key points, the host underscores that the front-end ecosystem is cyclical: older patterns resurface with modern tooling, and advanced features appear to fix classic pitfalls. Whether it’s zero-JS illusions or hyper-optimized frameworks, all these innovations push the web forward in performance and user experience. Listeners are encouraged to keep learning and experimenting, as new transitions, reactivity systems, and server-side capabilities continue to refine what is possible in web applications.

### 04:50:00 - Closing Remarks and Future Streams

In the final minutes, the speaker thanks the audience for their contributions and enthusiasm throughout the near five-hour exploration. They mention upcoming plans for more technical sessions, acknowledging that the conversation has raised enough questions to fill future episodes. Brief references are made to open-source efforts, code merges, and new demonstration sites that showcase advanced MPAs, SPAs, and everything in between.

To wrap up, the host encourages developers to engage with their chosen frameworks’ communities, track proposals for signals or new rendering APIs, and keep an eye on evolving browser capabilities. They hint that the discussion around multi-page versus single-page architecture is far from over, as new tools emerge to blur these lines further. The session closes on an optimistic note, suggesting that with careful choice and a willingness to adapt, web developers can leverage the best parts of both paradigms to create efficient, engaging online experiences.