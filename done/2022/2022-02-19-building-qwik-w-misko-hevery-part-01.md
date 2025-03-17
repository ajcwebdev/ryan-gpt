---
showLink: "https://www.youtube.com/watch?v=lY6e7Hw4uVo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Qwik w/ Misko Hevery"
description: ""
publishDate: "2022-02-19"
coverImage: "https://i.ytimg.com/vi/lY6e7Hw4uVo/sddefault.jpg?v=620fedfa"
---

## Episode Description

An engaging exploration of Qwik’s resumable architecture, progressive hydration, and the future of web development with Misko Hevery and Ryan Carniato.

## Episode Summary

In this conversation, Misko Hevery and Ryan Carniato examine Qwik, a cutting-edge JavaScript framework designed to minimize hydration costs and improve page interactivity. They discuss the underlying principles of resumable applications, emphasizing how Qwik only sends and executes essential code in the browser. The conversation covers complexities around breaking large applications into smaller chunks, the nuances of managing persistent and transient state, as well as routing considerations that rely on server-side rendering for speed and efficiency. Additionally, they touch on the importance of developer experience, describing how Qwik’s syntax aims to feel familiar while offering advanced performance optimizations. Throughout the discussion, Misko and Ryan compare Qwik’s approach with other frameworks, highlighting the future potential of this architecture and how it may reshape the way developers build interactive sites.

## Chapters

### 00:00 - 06:00 — Initial Introductions and Context

In these opening moments, Ryan Carniato sets the stage by greeting viewers and acknowledging the unusual timing of the stream. He briefly touches on recent JavaScript happenings, including various technologies he’s been following, such as React Server Components and Marko. The conversation establishes the theme of performance-driven innovations and frameworks that aim to reduce the overhead of sending and executing large bundles on the client.

Misko Hevery then joins, introducing himself as the creator of Angular and Qwik. He expresses excitement about this new framework and begins to preview its core idea: doing work on the server so the client can load minimal JavaScript. The casual atmosphere encourages questions from the chat, foreshadowing a deep technical dive into how Qwik tackles challenges other frameworks face.

### 06:00 - 12:00 — The Concept of Resumability

At this point, Misko elaborates on the concept of resumability, which he contrasts with the more common notion of replaying an application in the browser. He clarifies that frameworks like React and Vue generally re-execute all or most of the components at startup, whereas Qwik aims to “resume” an application from where the server left off, eliminating much redundant reprocessing.

He underscores the benefits of such an approach, especially in modern, complex applications. By embedding state in the HTML, Qwik can immediately continue the logic that began on the server. This initial outline of resumability sets a new bar for JavaScript efficiency, hinting at more detailed explorations of lazy code loading and partial hydration techniques.

### 12:00 - 18:00 — Progressive Hydration Foundations

Misko and Ryan shift focus toward progressive hydration, distinguishing it from traditional strategies that require all components to hydrate eagerly. They touch on how many frameworks do some form of SSR but then download and parse nearly all code before reattaching event listeners. Progressive hydration, by contrast, loads code only upon specific interactions or visibility triggers.

They compare partial and progressive hydration, highlighting that partial hydration identifies which pieces of code need to run at all, while progressive hydration brings in those pieces bit by bit. This interplay underscores Qwik’s ability to remain lightweight at initial load, presenting possibilities for large-scale performance gains that remain seamless to end users.

### 18:00 - 24:00 — Breaking the Application into Chunks

During these minutes, Misko addresses the technical process of splitting an application’s code into small, lazy-loaded segments. He emphasizes how Qwik automatically handles granularity that developers previously had to orchestrate by hand with tools like dynamic imports. The compiler’s role becomes paramount, as it must extract and reference functions in separate files based on interactions, ensuring each bundle remains as small as necessary.

Ryan notes that this approach is distinct from conventional bundling, which generally focuses on route-level splits. Here, Qwik systematically pulls code apart at a more detailed level. The result is that when a user clicks a certain button, only the specific logic for that button downloads, rather than the entire component tree.

### 24:00 - 30:00 — Reimagining Bootstrapping and Listeners

The discussion pivots to how Qwik ditches the notion of a centralized bootstrap function. Unlike typical frameworks, where a global hydrate call re-renders everything, Qwik’s event handlers act as micro entry points. These micro entry points tie into HTML attributes that encode both which code to load and what state data the code relies on.

Misko and Ryan delve into the idea that each click listener becomes its own application start, making the system far more modular. Listeners reference their needed code and data, so tapping a button instantly pulls in only the relevant functionality. This granular method improves performance but also requires a new mindset for how developers structure and maintain app logic.

### 30:00 - 36:00 — State Serialization and Restoration

Here, the talk zeroes in on how Qwik handles state by serializing relevant data in the server-rendered HTML. By embedding references into HTML attributes, Qwik can rehydrate only the parts of the state that need to be active. Misko showcases an example of how the framework wraps data in proxies, preserving reactivity without replaying any code.

Because each component’s state can be stored and restored independently, Qwik avoids replaying entire component trees. Ryan highlights the potential value of injecting real-time server data seamlessly into the client, with Qwik picking up precisely where the server left off. This targeted hydration underscores the framework’s ability to remain efficient across complex stateful interactions.

### 36:00 - 42:00 — Fine-Grained Reactivity Meets Resumability

In this segment, the two speakers explore the harmony between fine-grained reactivity—a hallmark of frameworks like Solid—and Qwik’s resumable architecture. Misko notes that while reactivity typically requires a first run on the client to establish dependencies, Qwik shifts that initial run onto the server. Once relationships between data and components have been captured, Qwik simply ships those details to the client for instantaneous continuity.

This design avoids re-running reactive code in the browser, saving time and resources. Ryan expresses enthusiasm over witnessing runtime reactivity operate effectively within Qwik, asserting that it provides a much-needed efficiency layer without sacrificing flexibility or developer familiarity.

### 42:00 - 48:00 — Out-of-Order Rendering Challenges

The discussion deepens around out-of-order rendering. Misko explains that if a user clicks a button to update certain state, Qwik pinpoints precisely which components subscribe to that state and re-renders only those. It never climbs the entire component hierarchy to recalculate the whole UI. This approach differs dramatically from frameworks that rely on top-level re-render calls to ascertain changes.

Maintaining a stable reference graph for reactivity demands the clever usage of proxies and attribute-based subscriptions. Misko details how each piece of the page knows exactly which data it depends on, enabling surgical updates without incurring a heavy runtime cost. The conversation underscores how out-of-order rendering can foster substantial performance gains at scale.

### 48:00 - 54:00 — Managing Slots and Projected Content

At this point, Misko highlights Qwik’s handling of projections, often referred to as “slots” in other frameworks. Instead of re-renders trickling down from parent to child, Qwik stashes projected children in a separate DOM container until they’re needed. This ensures that any toggling of visibility—such as revealing or hiding more text—doesn’t trigger unnecessary re-renders across the entire parent component.

Ryan notes that such a mechanism can differ from how React or Vue handle children, especially with features like conditional rendering or advanced slot usage. Despite these differences, Misko underscores that Qwik’s approach is geared toward preserving the minimal client bundle philosophy, guaranteeing that UI segments not in active use remain effectively inert until requested.

### 54:00 - 1:00:00 — Side Effects and Observers

As they progress, the focus shifts to side effects, akin to React’s useEffect or Solid’s createEffect. Misko shows that Qwik employs a watch system, letting developers observe particular pieces of state without re-running an entire subtree of components. This watch is determined during the server render, collecting dependencies into a list that Qwik can reference later.

Through an example of cart data being updated, Misko reveals how Qwik identifies the precise watchers that must re-run. This design further cements the principle that no part of the application is activated unless the user’s actions warrant it. Ryan chimes in, reflecting on how such a streamlined approach keeps code minimal and enhances perceived performance for end users.

### 1:00:00 - 1:06:00 — Overcoming Serializability Hurdles

During these minutes, Misko addresses how Qwik deals with JavaScript objects that don’t serialize easily, such as functions capturing complex closures or runtime-specific constructs. While the framework focuses on serializing vital data, developers can rely on Qwik’s specialized logic to handle or recreate dynamic behaviors on the client as needed.

Although not all edge cases have been fully explored, Misko emphasizes that Qwik’s layered system of proxies, watchers, and chunked code loading provides a strong foundation. This approach retains the natural feeling of writing typical JavaScript, while working under the hood to ensure that minimal code travels over the network.

### 1:06:00 - 1:12:00 — Ideal Bundles and Pre-Fetching Strategies

The conversation now moves to Qwik’s bundling and how it yields optimal loading strategies. Misko explains that since Qwik naturally splits code at very granular boundaries, it becomes trivial for a subsequent build step to recombine related chunks into ideal bundles. Bundlers can use statistical data on user interactions to craft efficient groupings, preventing network waterfalls.

Ryan grasps the flexibility here: developers can unify or separate chunks based on typical user paths or probable click patterns. This introduces a unique level of control, as no single chunk is unnecessarily large, yet the bundle can still adapt to real-world usage data. The result is a system carefully tuned for both fast loads and speedy interactions.

### 1:12:00 - 1:18:00 — Technical Nuances of Build Processes

Here, they turn to practical build pipelines. Misko points out how the framework’s compiler identifies “dollar sign” functions—those marked for lazy loading—and moves them into separate files. Code that closes over local variables is transformed so Qwik can track which data to resurrect upon client-side interaction.

Ryan notes the complexity of generating server and client builds, each employing different module formats. Yet, Qwik seamlessly merges them by embedding references in the HTML, bridging the gap between server-rendered state and client hydration. This part reveals the deeper complexities that Qwik abstracts away, letting developers focus on writing straightforward code.

### 1:18:00 - 1:24:00 — Routing Considerations and Isolates

The topic shifts to routing, a crucial part of any modern app. Misko envisions an approach without shipping a massive client-side router. Instead, Qwik might treat each outlet as an isolated zone, so fetching a new page or sub-route only replaces a specific portion of the DOM rather than reloading or rehydrating the entire app.

Ryan compares this with traditional multi-page apps and more advanced single-page frameworks. Misko acknowledges that refined solutions are still under development. Yet the underlying principle remains consistent: reduce JavaScript by avoiding any universal router script and let the server handle routing logic, weaving it neatly into Qwik’s lightweight approach.

### 1:24:00 - 1:30:00 — The Future of MPA and SPA Convergence

In this interval, Ryan and Misko reflect on how Qwik’s design merges the best elements of multi-page apps (MPAs) with the interactivity of single-page apps (SPAs). By focusing on server-side transitions while persisting client state in the DOM, Qwik avoids the performance pitfalls of large SPA bundles while still offering seamless interactions.

They contemplate how similar solutions—like Astro or older systems that tried partial page updates—sometimes fell short because they lacked a complete mechanism for fine-grained data synchronization. In contrast, Qwik’s resumable approach ensures that once code is loaded, it remains reactive and does not demand repeated re-execution of an entire application tree.

### 1:30:00 - 1:36:00 — Minimizing Downloaded JavaScript

During these minutes, the conversation focuses on the core problem Qwik seeks to solve: large amounts of JavaScript that must be downloaded, parsed, and executed before a site becomes interactive. Ryan recalls experiences with frameworks that mitigate this somewhat, but never as effectively as truly skipping code until it’s needed.

Misko reiterates the importance of shipping as close to zero JavaScript as possible initially, enabling near-instant time-to-interactive. Later, the framework loads precisely the code required for a given user action. This approach distinguishes Qwik from others that rely on partial or delayed hydration but still eventually download large sections of the codebase.

### 1:36:00 - 1:42:00 — Handling Edge Cases and Larger Apps

The discussion turns practical once again, addressing how Qwik can scale to more substantial applications with intricate user flows. Ryan voices the kind of skepticism many developers have: can Qwik remain manageable when dealing with complex states, heavy user interactions, or multiple back-end data sources?

Misko reassures that Qwik’s key premise—distributing logic into micro-chunks—makes it inherently scalable. By preventing massive monoliths of code from ever loading simultaneously, Qwik aims to keep performance consistent. The pair acknowledge that sophisticated patterns may require a bit more planning, but the payoff in speed is substantial.

### 1:42:00 - 1:48:00 — Comparing Framework Philosophies

At this juncture, Misko references opinions from other leading framework authors. He recounts both enthusiasm and skepticism around the idea that reactivity and resumability can coexist so effortlessly. Ryan draws parallels to approaches from Solid and Marko, underscoring how multiple projects are converging toward similar server-driven strategies.

They note that a portion of the community remains uncertain, preferring to wait for stable proofs of concept. However, the excitement for truly minimal JavaScript solutions grows. Misko restates that Qwik’s approach was painstakingly designed to handle the intricacies of stateful apps, and the conversation teases future developments that might make these designs even more approachable.

### 1:48:00 - 1:54:00 — AI-Driven Bundle Optimizations?

Ryan reads a viewer question about harnessing analytics or even AI for bundle optimization. Misko points out that the conceptual approach already uses a form of statistical learning, gathering interaction data to shape bundling decisions. By collecting real user metrics, developers can automatically unify or split code according to usage patterns.

Although the mention of AI is partly humorous, it underscores an important principle: with Qwik’s fine-grained chunking, data-driven packaging becomes simpler than typical frameworks. The conversation hints that as usage data grows, so too does the potential for automated bundling strategies, ensuring an optimal user experience with minimal developer micromanagement.

### 1:54:00 - 2:00:00 — HTMX, Streaming, and Other Techniques

In this section, the speakers field questions comparing Qwik to tools like HTMX, which uses small JavaScript snippets to fetch server-rendered fragments. Ryan clarifies that Qwik’s objective differs: once code is loaded, the app stays in the client’s memory for seamless interactivity, whereas HTMX often hits the server repeatedly for partial updates.

They touch on the topic of streaming, noting that Qwik can adopt streaming ideas but has chosen to focus first on its core approach of skipping full replays in the browser. In this sense, Qwik’s design complements streaming SSR but prioritizes extreme code-splitting and direct event-based loading as its hallmark features.

### 2:00:00 - 2:06:00 — Further Refining the Router Model

The conversation returns to the idea of a server-centric router. Misko reiterates that by leveraging partial DOM replacements—isolates—Qwik can update only the necessary portion of the page. This avoids a complete reload, bridging the gap between a traditional MPA and the fluidity of an SPA. Implementation details remain under active development, but the conceptual framework is laid out.

Ryan expresses enthusiasm at the notion, envisioning how advanced nested routing might look in Qwik. He points out that many frameworks are converging on the idea of seamlessly swapping out portions of the DOM without rehydrating everything, and Qwik’s underlying design makes that transition smoother.

### 2:06:00 - 2:12:00 — MPA, SPA, and Transitional Apps

As the session enters its final stages, they reflect on the broad spectrum of app models—MPA, SPA, transitional, and everything in between. Misko and Ryan question how best to categorize Qwik, acknowledging that existing labels often fail to capture the nuance of shipping nearly zero JavaScript and then progressively loading precisely what’s needed.

They address the possibility of forging new terminology to describe frameworks that do both server and client roles in a far more dynamic manner. The notion of “resumable plus progressive hydration plus advanced routing” emerges as a future direction that the broader developer community might soon rally behind.

### 2:12:00 - 2:18:00 — Reflecting on Developer Experience

The dialogue shifts to DX—developer experience. Misko acknowledges the potential complexity of a system that must handle advanced code splitting, state serialization, and reactivity across server-client boundaries. Yet he emphasizes that Qwik attempts to hide much of the complexity from developers, letting them write code in a style similar to React or other JSX-driven libraries.

Ryan agrees, asserting that frameworks succeed when they combine performance with ease of use. Although a mental shift is required, Qwik’s approach need not be convoluted. As more demos and documentation emerge, the path toward mainstream adoption looks more viable.

### 2:18:00 - 2:24:00 — Engaging a Wider Community

During these minutes, they acknowledge the role of education and community building. Qwik, like any new approach, faces hurdles in explaining why it’s different and how it surpasses longstanding assumptions about hydration. Misko points out that only by showing real-world performance gains do people generally come around to new frameworks.

Ryan, known for his educational efforts, underscores the importance of clarifying the underlying concepts, from runtime reactivity to granular code splitting. They see a future where developers have more options to build highly interactive pages without sacrificing initial load time.

### 2:24:00 - 2:32:48 — Closing Thoughts and Next Steps

As the stream concludes, both speakers reiterate their excitement about Qwik’s potential to redefine how modern web apps load and run. They express enthusiasm for further exploration of routing, advanced bundling strategies, and handling edge cases with complex data or large user interfaces.

Ryan wraps up with final thanks, appreciating Misko’s generosity in sharing in-depth knowledge of Qwik’s underpinnings. They invite more questions and anticipate further collaborative discussions that could lead to new innovations and shared insights across different frameworks. The conversation ends on a note of anticipation for the growing ecosystem around resumable, progressive web applications.