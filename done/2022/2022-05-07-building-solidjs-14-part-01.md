---
showLink: "https://www.youtube.com/watch?v=2UPX0HZxXEQ"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS 1.4"
description: ""
publishDate: "2022-05-07"
coverImage: "https://i.ytimg.com/vi/2UPX0HZxXEQ/maxresdefault.jpg"
---

## Episode Description

A detailed exploration of SolidJS 1.4’s upcoming features, along with in-depth discussions on React’s evolving ecosystem and performance strategies for modern JavaScript frameworks.

## Episode Summary

This transcript features an in-depth conversation about the evolution of SolidJS and broader trends in the JavaScript world, led by Ryan Carniato. It begins by examining recent experiments and significant developments in React, Vue, and other frameworks, highlighting how approaches to routing, streaming, and reactivity are converging or diverging. The discussion then shifts to major enhancements in SolidJS 1.4, including refined store behavior, improved resource handling, and new server-side streaming capabilities. Ryan elaborates on the complexities of implementing top-level arrays in stores, managing deferred data, and ensuring consistent batching for mutable operations. Throughout, he addresses potential pitfalls of mutable proxies, clarifies advanced reactivity concepts, and provides practical code examples. By connecting these technical insights to real-world scenarios, the conversation underscores how these refined patterns empower developers to create more streamlined, efficient, and reliable web applications.

## Chapters

### 00:00 - 06:00 Introduction and Initial Greetings

In these opening moments, Ryan welcomes everyone to the stream and notes the enthusiastic audience already active in the chat. He mentions he will be talking about new developments in SolidJS, setting the stage for a comprehensive discussion of framework performance, upcoming features, and best practices. Ryan also talks briefly about his personal setup, revealing his casual streaming environment and lighthearted banter about things like anime-inspired stream thumbnails.

He stresses that many interesting updates are in store, particularly in areas like server-side rendering, improved store capabilities, and new hooks within SolidJS. This introduction not only warms up the audience but primes them for a deeper exploration of JavaScript ecosystem trends, ensuring listeners understand there will be both practical coding insights and theoretical performance analyses.

### 06:00 - 12:00 Service Worker Rendering and Astro Example

Ryan introduces a novel example of rendering Astro pages within a service worker, showcasing partial offline modes. He marvels at how certain pages can be served instantly from the worker while others still rely on server fetches, representing a flexible hybrid approach. This demonstration illustrates the forward-thinking nature of modern web frameworks in distributing logic and rendering across multiple layers, including the edge and the browser.

He reflects on broader possibilities of distributing compute across different infrastructure layers: main server, edge workers, and service workers. While acknowledging some challenges, Ryan expresses excitement about how these approaches might unify multi-page and single-page paradigms in the future. This segment underscores the ingenuity developers are employing to enhance performance, resilience, and user experience.

### 12:00 - 18:00 Reflecting on the Solid Hackathon Results

Shifting focus to community-driven developments, Ryan recaps the recent Solid Hackathon and praises the remarkable contributions, including new UI component libraries, form utilities, and robust state management solutions. He underlines how such active community initiatives serve as accelerators, filling gaps in the ecosystem and bringing fresh perspectives from talented new maintainers.

Ryan points out that these efforts not only yield tangible tools—like Hope UI and material design ports—but also foster camaraderie and collective learning. By highlighting specific successes, such as the creation of headless component libraries and advanced table solutions, he shows how the hackathon has laid a strong foundation for Solid’s continued growth and flexibility.

### 18:00 - 24:00 Next.js Router Teaser and Server Components

Ryan moves on to discuss Next.js’s teased new nested router, linking it to the broader trend of shifting from monolithic rendering to more granular, nested data fetching. He notes that frameworks like Ember, React Router’s early days, and Solid have utilized nested routing techniques for years, illustrating how the React ecosystem seems to be circling back to established patterns.

He also connects these ideas to the emerging React server components model, which operates like partial page reloads. Although the React community is forging its own path, Ryan highlights parallels in concurrency and partial hydration approaches that Solid and other frameworks already employ. By sharing experiences and examples, he underscores the interplay of well-established ideas and ongoing innovation in the JavaScript world.

### 24:00 - 30:00 Nuxt, Edge Deployments, and Balancing Rendering Strategies

Turning to the Vue ecosystem, Ryan touches on how Nuxt has been pioneering advanced server-edge deployment strategies. He underscores that nearly all frameworks—Remix, Astro, SvelteKit, and SolidStart—are converging on a standard request-response pattern with Vite under the hood. Yet, Nuxt is forging ahead with deeper integrations, focusing on robust deployment, and thus potentially leading the charge in edge-based optimizations.

He highlights how this domain is becoming increasingly unified, with many frameworks adopting specialized adapters to run seamlessly in serverless and edge environments. Ryan views Nuxt's approach as an intriguing model of implementing layered compute, drawing parallels to service worker solutions while acknowledging that in-depth performance comparisons remain an ongoing experiment.

### 30:00 - 36:00 React’s Resumability Debate and Mishko’s Perspective

Ryan dives into Mishko Hevery’s recent articles on resumability and hydration, explaining how these address the longstanding performance hurdles associated with large-scale applications. Although Ryan notes that hydration topics can seem dry or niche, the potential impact on project architectures is significant, especially for developers seeking to optimize resource usage and initial load times.

He mentions the healthy debate between Mishko’s standpoint—frameworks should take responsibility for performance—and other voices arguing that developers themselves must optimize. Ryan frames this tension as an ongoing push-and-pull, with new bundler-driven features inching frameworks closer to delivering highly optimized, partial-hydration solutions that require minimal developer intervention.

### 36:00 - 42:00 Introducing React’s `useEvent` and Compiler Hints

Shifting attention to React’s experimental `useEvent` hook, Ryan dissects how it addresses stale closure issues by providing stable references for callback-based logic. He clarifies that while React has had patterns like `useCallback` and `useRef`, `useEvent` represents a more explicit approach, indicating that the React team is inching closer to a compilation-focused future.

He interprets `useEvent` as a sign of React’s continuing move toward advanced memoization and automatic code transformation—an evolution of the “React Forget” project. Ryan explains that in principle, React is increasingly adopting patterns that look reminiscent of fine-grained reactivity, even as they retain their distinct top-down rendering model. This point underscores subtle convergences between React and frameworks like Solid, albeit through different underlying mechanics.

### 42:00 - 48:00 Comparing React Hooks and Solid’s Fine-Grained Signals

Continuing the conversation on React hooks versus fine-grained reactivity, Ryan demonstrates a key difference: Solid’s signals remove the need for repetitive hook calls such as `useCallback` or `useMemo`. He shares code snippets where React’s approach demands explicit dependency arrays, while Solid’s model simply tracks each relevant signal automatically.

Ryan fields questions about the underlying mental models, emphasizing that React’s compiler-based solution is heading toward partial memorization in a top-down system. Meanwhile, Solid’s approach naturally eliminates stale closures with fewer layers of indirection. This segment clarifies how each framework arrives at glitch-free updates, even if they differ in API design and rendering patterns.

### 48:00 - 54:00 Nested Routing, Streaming, and Remix’s Changing Stance

Ryan addresses Remix’s shift toward streaming, despite earlier skepticism from its core team. He outlines how streaming not only speeds up perceived load time by sending partial HTML in chunks but also enables parallelizing server-side rendering with data fetching. This approach can diminish latency and deliver parts of the application faster.

He further notes that Remix’s earlier position downplaying streaming’s benefits has changed as more developers realize the advantages of partial hydration and incremental rendering. By using server streams and suspense boundaries, frameworks can progressively fill in page sections, a strategy Ryan praises for its flexibility and performance gains when properly managed.

### 54:00 - 1:00:00 Coordinating Suspense, Data Fetching, and SSR

Shifting toward Solid’s own SSR mechanics, Ryan delves into how Solid’s streaming pairs with suspense to allow granular control over what data must be ready before sending the shell to the client. He explains that, unlike a traditional blocking approach, streaming lets the framework handle placeholders intelligently, filling in critical data first while deferring less essential parts.

He showcases how Solid’s SSR pipeline manages concurrency: it can render outer shells on the server, send them down to the browser for immediate interaction, and fill in nested components as data becomes available. This method exemplifies modern SSR’s move toward composable concurrency, where high-level control flows and partial hydration meet seamless user experiences.

### 1:00:00 - 1:06:00 Resource Deferred Streaming in SolidJS

Ryan introduces a new feature for SolidJS resources: the ability to mark a resource as “defer stream,” which tells the framework to wait for certain data before sending the initial HTML. He highlights a practical use case: authenticating a user or performing minimal checks that are essential for a correct initial render.

By selectively deferring some resources, developers can ensure specific data is fetched and validated without forfeiting the performance benefits of streaming. Ryan stresses how this feature simply queues promises and flushes them once certain conditions are met—allowing for a flexible balance between immediate rendering and gating critical data.

### 1:06:00 - 1:12:00 Fine-Tuning SSR with Defer Stream and Partial Responses

Building on the “defer stream” concept, Ryan shows how partial hydration techniques can skip sending placeholder HTML for crucial data. When a resource is marked to wait, Solid merges the final content into the initial stream, reducing layout shifts and extra client-side patches. This approach effectively brings together the best of fully-blocked SSR and live streaming.

Ryan walks through code samples that illustrate how an application can show placeholders in some areas while skipping them in others, letting certain sections appear complete if the data arrives quickly. The result is a more polished user experience: essential content appears instantly, while non-critical data streams in later, all handled seamlessly by suspense boundaries.

### 1:12:00 - 1:18:00 Stale Resource Reads and Selective Opt-Out of Suspense

Ryan discusses another SSR improvement: “stale resource reads.” This lets developers read from a resource without triggering a new suspense fallback if the resource has previously loaded. He explains how sometimes a placeholder is unnecessary for subsequent updates, since partial or outdated content is preferable to a loading spinner.

By offering a “latest” read mode, Solid can keep showing the old data while silently refreshing in the background, avoiding abrupt UI resets. Ryan highlights how this fine-grained approach to reactivity, combined with transitions, gives developers detailed control over whether certain data triggers placeholders or remains visible during reloading.

### 1:18:00 - 1:24:00 Unpacking the “Latest” Resource Mode with Code Examples

Ryan dives deeper into the “latest” resource mode by demonstrating a scenario with user profiles and post timelines. He shows how, once data has loaded at least once, future fetch calls can bypass suspense placeholders, leaving the existing content visible until fresh data arrives. This helps preserve layout consistency and reduces flickering during navigation or updates.

He underscores that this approach complements existing transitions. In practice, developers can continue employing placeholders and loading states for initial fetches, while subsequent fetches adopt a more subtle update path. This flexibility embodies Solid’s broader philosophy: giving developers the building blocks to craft experiences that balance clarity, performance, and fluidity.

### 1:24:00 - 1:30:00 The Internal Implementation of “Latest” and Its Simplicity

To illustrate the underlying simplicity, Ryan walks through the few lines of code behind “latest” resource reads. He points out how Solid already tracks resolved values and errors, making it trivial to expose a raw signal that bypasses suspense logic. Once the resource has valid data, it remains accessible without forcing a placeholder fallback.

In discussing this, Ryan emphasizes that advanced features in Solid are frequently straightforward abstractions atop its existing fine-grained reactivity. As a result, developers gain sophisticated SSR controls without contending with convoluted APIs or performance penalties, reaffirming Solid’s balance of power and minimalism.

### 1:30:00 - 1:36:00 Introduction to Store Improvements in 1.4

Ryan shifts focus to the major enhancements coming to SolidJS stores in version 1.4. He outlines how SolidJS’s store approach was originally envisioned as an all-encompassing solution, akin to React’s class-based state. Over time, developers gravitated toward multiple signals rather than a single object store, leading Ryan to rethink how arrays and nesting should behave in stores.

He announces that top-level arrays in stores will now fully support reactivity without forcing complex immutable transformations. Ryan calls this a big quality-of-life improvement, as developers can keep straightforward array operations while still benefiting from Solid’s fine-grained updates and minimal overhead.

### 1:36:00 - 1:42:00 Delving into Proxy-Based Tracking for Arrays

Ryan explains the nuances of Solid’s store implementation, which relies on JavaScript proxies. He notes that arrays are inherently tricky since they often require diffing or reconciling elements, especially when items are sorted, spliced, or shifted. Rather than track each index individually, Solid has historically taken an untracked approach for performance, triggering one pass to reconcile changes.

However, this had led to limitations at the top level. Ryan clarifies how version 1.4 addresses the constraint by introducing a mechanism that selectively tracks an array’s length and new or deleted properties, improving the ability to respond to changes in nested structures. The result is more intuitive reactivity while keeping overhead minimal.

### 1:42:00 - 1:48:00 Showcasing Top-Level Array Support with Example Code

Through a to-do list example, Ryan demonstrates how developers can now declare an array as a store’s root and update it with push or splice without losing reactivity. He contrasts it with older approaches where one had to store everything inside a single object or revert to signals for array manipulation.

He highlights subtle but meaningful changes: iterating over arrays in for loops or calling array helpers now automatically taps into newly tracked properties. When combined with Solid’s typical performance optimizations, it becomes easier to manage dynamic lists, a core use case in many real-world applications.

### 1:48:00 - 1:54:00 Balancing Proxy Overhead and Fine-Grained Updates

Ryan addresses concerns about potential overhead. He explains that handling each array index individually would balloon complexity whenever large arrays undergo mutation. Instead, Solid’s approach allows for a quick reconciliation pass, typically more efficient for real-world usage where multiple indices can change at once.

He points out that, by default, Solid tries to avoid expensive lookups on every mutation, and the 1.4 improvements cleverly preserve performance while introducing top-level reactivity. Ultimately, the store abstraction remains consistent with Solid’s ethos: pay minimal costs when changes occur, yet keep a fluid interface for everyday developers.

### 1:54:00 - 2:00:00 Revisiting `createMutable` and Batching Updates

Ryan acknowledges that `createMutable`—Solid’s mutable proxy helper—has historically lacked certain batching features. He describes its original intent: to let developers integrate external state machines or libraries that demand direct mutation but still emit signals for Solid’s reactive system.

However, issues with array operations like pop, shift, and splice sometimes caused partial re-renders in the middle of transformations. Ryan shares how 1.4 solves this by injecting implicit batching within these native array methods, preventing accidental mid-operation state from leaking into the UI. This fix ensures consistent, glitch-free updates.

### 2:00:00 - 2:06:00 `modifyMutable` and Reconcile Operations

Elaborating on improvements for mutable scenarios, Ryan introduces `modifyMutable`, a convenience function that wraps reconciliation or manual mutations in a batched context. Previously, developers had to remember to call `batch` explicitly, or else risk partial incomplete states.

He uses real-world examples, showing how reconciling array differences with a single function call now respects fine-grained reactivity without extra overhead. This approach simplifies advanced patterns like state machine integrations or merging external data, ensuring that all changes appear atomically to the rest of the application.

### 2:06:00 - 2:12:00 Strengthening Consistency and Glitch-Free Batches

In refining store behavior, Ryan addresses a long-standing quirk: stores sometimes leaked intermediate states during transitions or explicit batches. He stresses that frameworks like React handle this by postponing updates, maintaining a consistent snapshot, whereas Solid typically updates immediately.

Ryan reveals that 1.4 finally makes stores fully consistent with Solid’s glitch-free model, ensuring no partial updates break the contract. By allowing top-level arrays, thorough batching, and consistent proxies, developers can rely on predictable reactivity patterns, even in complex transitions or nested calls.

### 2:12:00 - 2:18:00 Revisiting React’s Consistency and Svelte’s Approach

Ryan compares Solid’s new approach to the well-known debate of glitch freedom, referencing React’s logic of unifying state in a single re-render pass. He touches on how frameworks like Svelte interpret changes more immediately, but also implement certain scheduling to avoid flickering.

He highlights that these differences reflect deeper philosophical choices about reactivity. Solid’s pursuit of perfect consistency demands careful coordination, culminating in a solution where signals, stores, and transitions all work in harmony. This consistent foundation, Ryan argues, is key to robust performance and a simpler mental model once the underlying rules are understood.

### 2:18:00 - 2:24:00 Compiler Innovations for Custom Renderers

Ryan shifts gears to talk about an unexpected but powerful feature: combining multiple custom renderers in a single application. He applauds Nikhil’s approach to mixing 3D library rendering with standard HTML elements, compiled seamlessly through separate Babel plugins. This technique opens the door to new heights in specialized rendering, from terminals to gaming engines.

He expresses enthusiasm that Solid’s compiler can split code at a granular level, assigning sections of the JSX tree to the appropriate renderer. By orchestrating multi-compiler pipelines, developers have the option to merge cutting-edge web rendering with exotic environments, all while retaining Solid’s reactivity and SSR capabilities.

### 2:24:00 - 2:30:00 Wrapping Up Key Changes in 1.4

Returning to the main theme, Ryan provides a recap of the improvements included in the upcoming release. He mentions deprecating `className` and `htmlFor` in favor of standard HTML attributes, simplifying Solid code to avoid confusion with React-based JSX. He also hints at TypeScript refinements, such as more explicit handling of children in component types.

Summarizing, Ryan sees version 1.4 as an inflection point that provides better SSR support, top-level arrays, refined mutable batching, and deeper consistency across all reactivity layers. He underscores that these feature additions enhance both developer ergonomics and the overall robustness of the framework.

### 2:30:00 - 2:36:00 Reflecting on Solid’s Ongoing Evolution

Ryan takes a moment to reflect on how Solid has grown from early experiments to a widely admired framework. He notes that user feedback has driven many of the changes in 1.4, from resource enhancements to store fixes. Meanwhile, advanced users have pushed the boundaries of SSR, transitions, and streaming, revealing new use cases for partial hydration.

He highlights that as Solid matures, it retains its original promises: developer experience that remains approachable and performance that matches or surpasses the fastest in class. Ryan credits the community for bridging real-world needs with creative solutions, ensuring that the framework stays on the cutting edge of reactive web development.

### 2:36:00 - 2:42:00 Handling External Libraries and Edge Cases

Delving into advanced questions, Ryan explores how certain third-party libraries can interoperate with Solid’s system. He reiterates that `createMutable` was partly designed to facilitate stateful libraries that rely on direct mutation rather than returning new objects. This bridging pattern can keep external logic intact while exposing reactivity for the rest of the app.

Additionally, he clarifies that some advanced data structures—like weak sets or typed arrays—are not directly handled by default. Developers can, however, craft custom solutions or augment the store system for specialized use cases. Ryan underscores that focusing on common arrays, objects, and signals covers the majority of applications, without bloating the library core.

### 2:42:00 - 2:48:00 Revisiting SSR Logic and Conclusion of Store Features

Ryan revisits earlier SSR discussions, connecting them to store updates. He explains that consistent batching, partial hydration, and new streaming techniques all link seamlessly with store-based reactivity. Whether data changes arise from user actions or server-driven updates, the framework can coordinate them cleanly.

He concludes the store segment by emphasizing the user-centric philosophy of Solid 1.4: powerful new features remain optional, letting developers adopt them piecemeal. This flexible approach ensures that improvements do not impose unnecessary complexity—an important principle for those upgrading from earlier releases.

### 2:48:00 - 2:54:00 Revisiting Batching, Reactivity, and Overall Performance

Ryan zooms out to restate the importance of glitch-free reactivity and consistent states. He underscores that performance is a holistic endeavor, requiring careful orchestration of how signals propagate changes. The 1.4 release polishes edge cases that previously could have caused partial UI updates to appear at the wrong time.

He reiterates that while small changes like deferring certain array events or splitting new data properties might seem arcane, they collectively strengthen Solid’s guarantees. Developers can trust that transitions, suspense boundaries, and store updates behave predictably, minimizing surprises in real-world deployments.

### 2:54:00 - 3:00:00 Comparisons to Other Ecosystems and Final Thoughts

In these minutes, Ryan touches on how other ecosystems solve similar problems. He praises Vue’s approach to bridging mutable patterns with a reactivity system but clarifies that Solid’s performance edge stems from leaning heavily on compile-time transformations and granular signals. He also briefly mentions Svelte’s approach, noting that each framework embraces different trade-offs.

He encourages developers to remain open-minded and experiment with frameworks like React, Solid, Svelte, or Vue, each offering unique solutions. He expresses satisfaction that concepts once considered niche—like partial hydration or streaming—are now more widely accepted across JavaScript communities.

### 3:00:00 - 3:06:00 Future of Solid Start and Potential Roadmap

Ryan gives a sneak peek into ongoing work on Solid Start, the official meta-framework for building Solid applications. He hints at more advanced SSR techniques, better integration with multi-part deployments, and a growing plugin ecosystem. His goal is to keep refining developer workflows so that tasks like routing, data fetching, and build setups become increasingly seamless.

He emphasizes how the new features in Solid 1.4 and beyond are closely aligned with Solid Start’s vision, ensuring that the meta-framework can provide robust defaults without stifling advanced customizations. The synergy between Solid’s core reactivity and Start’s production-focused tooling underlines a bright future for the framework’s ecosystem.

### 3:06:00 - 3:12:16 Closing Remarks and Next Steps

In the final segment, Ryan wraps up the stream by thanking viewers for their engagement. He reminds everyone that he will be away for a short while, meaning no stream the following week. Nevertheless, he looks forward to returning with deeper discussions about Solid Start and the latest progress on 1.4 features.

He leaves listeners with an optimistic note on the direction of JavaScript and front-end frameworks. With streaming, refined SSR, improved store logic, and resilient concurrency models, developers have more options than ever to create fast and dynamic apps. Ryan’s enthusiasm for the vibrant community efforts and upcoming releases shines through in this closing farewell.