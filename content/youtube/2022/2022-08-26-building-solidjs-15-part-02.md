---
showLink: "https://www.youtube.com/watch?v=jHDzGYHY2ew"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS 1.5"
description: ""
publishDate: "2022-08-26"
coverImage: "https://i.ytimg.com/vi/jHDzGYHY2ew/sddefault.jpg?v=6306bb41"
---

## Episode Description

A comprehensive walk-through of SolidJS 1.5’s new features, design decisions, and broader JavaScript ecosystem trends discussed over nearly four hours of live conversation.

## Episode Summary

This episode offers a detailed look at SolidJS 1.5, highlighting both new and refined features that improve the developer experience and overall framework performance. The conversation begins with an introduction to batching, clarifying how Solid’s revised approach eliminates edge cases and simplifies state updates. Subsequent sections explore resource enhancements, including new storage options and better error handling, which pave the way for more flexible data management. Listeners also learn about server-side rendering optimizations, such as unified streaming logic, making Solid’s SSR significantly faster and more consistent with modern standards. Later on, the host shifts focus to the broader JavaScript landscape, discussing emerging trends in frameworks, routing, and runtime performance. Throughout, there’s a strong emphasis on practical examples, real-world use cases, and the underlying philosophies driving these technical choices. By the episode’s end, it becomes clear how incremental improvements and ongoing collaboration across the ecosystem are shaping the future of web development.

## Chapters

### 01:48:00 - Impact on Code Readability and Recommended Patterns

Shifting from deep mechanics to developer experience, the host shows how simplified batching and refined reactivity improve code readability. With consistent updates, developers can rely on stable intermediate states, writing logic that flows naturally. He underscores that these improved guarantees reduce mental load, especially in large codebases, where multiple signals might interact in unpredictable ways under less robust systems.

He recommends that typical Solid users stick to high-level patterns—like signals, memos, and standard effects—to avoid confusion. By adhering to these default constructs, one naturally sidesteps many edge cases that the new release addresses behind the scenes. Nevertheless, the advanced tools remain there for those who need granular control. Ultimately, the host emphasizes that 1.5 fosters consistent, maintainable code without forcing developers to entirely relinquish low-level capabilities.

### 01:54:00 - Batching Improvements and Removing Old Code

Here, the host recounts an anecdote about how simplifying batching logic led to extensive code deletions in Solid’s core. Initially, multiple overlapping batching mechanisms existed to handle different scenarios, but this complexity occasionally collided with mutable data patterns. With 1.5, the team realized that a single, robust approach sufficed, letting them remove extraneous paths and unify updates across synchronous and asynchronous contexts.

He highlights the advantages of such cleanups: fewer obscure bugs, a smaller code footprint, and easier maintenance. The improved approach also increases transparency for contributors, who now have a clearer view of how all updates funnel through Solid’s pipeline. This moment exemplifies how targeted refactoring can yield significant boosts in reliability and performance, all while making the framework more approachable to future collaborators.

### 02:00:00 - SSR Overview and Initial Thoughts

Transitioning to server-side rendering, the host explains that Solid’s early SSR implementations were relatively rudimentary, relying on a pseudo-DOM and full reactivity in Node. This approach proved slow, placing Solid behind specialized SSR frameworks like Marco and Svelte in raw rendering speed. Over time, the Solid team tackled these shortcomings, progressively streamlining SSR until it could rival or outperform many established solutions.

He reminds listeners that SSR is crucial for SEO, user experience on slow networks, and certain enterprise demands. Solid’s goal has been to minimize overhead while still leveraging features like suspense. This context lays the groundwork for describing how 1.5 unifies string rendering, streaming, and concurrency. The host sets up the next sections by emphasizing that SSR has been a challenging yet rewarding frontier for Solid’s evolution.

### 02:06:00 - Evolution of Solid’s SSR: From DOM to String

Here, the host recounts the incremental path to string-based SSR. Initially, Solid used a DOM-like structure in Node, but that introduced overhead and complexity for each render. By switching to a string concatenation approach, performance improved, although further challenges arose around asynchrony and suspense. Recognizing these hurdles, the team began consolidating code paths, aiming for a single SSR solution that covers streaming and synchronous cases alike.

He underscores that every iteration demanded careful coordination with hydration on the client side, ensuring the reconnected application state matches what was rendered on the server. Tools like asynchronous rendering revealed new edge cases, particularly around partial updates and streaming boundaries. Ultimately, each refinement in SSR logic not only sharpened raw performance metrics but also made the developer experience more seamless, bridging the server-client divide in a more predictable manner.

### 02:12:00 - Streaming Logic and Defer Stream

Delving deeper, the host spotlights the `deferStream` feature, explaining how it delays the initial data flush so that certain sections of the app can render more server-side content before sending. This mechanism merges the benefits of purely synchronous SSR with streaming updates. If certain data arrives slowly, fallback UI can be pushed to the client, then replaced once the awaited data finalizes server-side, reducing the complexity of purely client-driven transitions.

He compares this to React’s approach to streaming and suspense, but clarifies that Solid’s reactivity allows fine-tuned control of what gets streamed and when. Through this approach, developers can choose how partial states appear, ensuring a graceful user experience with minimal flicker. Emphasizing real-world benefits, the host mentions that `deferStream` stands as a prime example of how SSR in Solid can dynamically adapt to application needs without heavy overhead.

### 02:18:00 - Converging SSR Approaches and Code Unification

Next, the host explains that separate code paths for render-to-string async and streaming are now unified under one system. Essentially, `renderToStream` forms the core, while synchronous rendering becomes a specialized case that flushes at the end. This significantly reduces code duplication, making the SSR logic easier to maintain and optimize. Features like error boundaries also benefit, since they operate consistently whether or not streaming is involved.

By eliminating branching logic, the Solid team can focus on a single, optimized SSR engine. The host notes that consistency across synchronous and streaming modes also helps developers. They no longer need separate mental models for each approach, nor do they risk subtle mismatches in how hydration is handled. This alignment paves the way for future enhancements—such as improved partial hydration—making Solid’s SSR story more robust and future-proof.

### 02:24:00 - Performance Benchmarks and Serialization Libraries

Shifting to raw numbers, the host recalls performance benchmarking sessions with other frameworks, such as Marco and Svelte. While Solid’s rendering engine proved lightning-fast, peripheral factors like JSON serialization or bundler overhead still affected total throughput. He highlights a high-speed serialization library borrowed from the Marco ecosystem, achieving dramatic reductions in server-side data processing time.

He notes that even if the core SSR logic is optimal, real-world performance depends on factors like data size, caching, and how the server interacts with third-party services. The host stresses that these benchmarks guide improvements but don’t tell the full story. By continually iterating, Solid’s SSR can inch closer to the upper limits of what’s possible in JavaScript-based rendering, without sacrificing developer-friendly abstractions.

### 02:30:00 - Unified SSR and Future Directions

Here, the host reiterates that unifying streaming and traditional SSR forms a stepping stone toward more innovative techniques, including potential resumability. He contrasts this with newer experiments from frameworks like Quick and Marco, which take different architectures for partial or delayed hydration. Although Solid 1.5 doesn’t implement resumability, it sets a stronger foundation for exploring that territory in subsequent releases.

He emphasizes how thoroughly SSR improvements were tested in production-like scenarios, evaluating various fallback strategies and error conditions. The outcome is a stable base that can scale from small projects to large enterprise applications. Concluding this chapter, he implies that continuing research and collaboration with other frameworks will drive further SSR innovation, aiming to narrow performance gaps and streamline the developer experience even more in future versions of Solid.

### 02:36:00 - Resource Enhancements: New Storage and States

Shifting back to client APIs, the host dives into the expanded resource options in Solid 1.5. He spotlights a new `state` field that cleanly distinguishes different phases—loading, error, or success—improving type-safety and logic branches. This simplifies how developers handle asynchronous data, especially in complex apps that rely on resource-based patterns. While suspense and error boundaries remain recommended, more granular checks are now easier to write.

Next, he introduces an experimental “storage” configuration, letting developers customize how resource data is stored internally. By combining signals or stores, it’s possible to fine-tune updates, reconcile changes, or provide caching without rewriting the resource logic. This effectively grants more advanced control for real-time applications or large data sets. The host points out that such flexibility is key to bridging simple “fetch and render” use cases with robust, production-level data handling approaches.

### 02:42:00 - Stores in Resources: Fine-Grained Data Updates

The host explains a powerful pattern: combining resources with store-driven reactivity. Instead of discarding old data whenever new results arrive from the server, a reconciliation step can intelligently patch existing structures. This preserves user-specific transformations or local edits, all while keeping data in sync with a remote source. Such an approach addresses a common request to unify fully reactive stores and resource fetching in a more seamless manner.

He offers a code snippet showing how reconciling an array of items can update only the changed segments rather than re-rendering everything. This drastically reduces overhead for large lists with frequently refreshed data. While advanced in concept, the host presents it as an elegant solution for complex apps. He mentions that future Solid Start integrations aim to make this pattern more turnkey, allowing developers to harness granular updates with minimal boilerplate.

### 02:48:00 - Initial Value vs. Server-Only Fetch

Discussing server-side integration, the host introduces a new SSR feature that allows skipping client fetch for certain resources. By designating the initial load as server-only, one can embed fully resolved data into HTML, avoiding a duplicate request when hydration begins. He explains that this appeals to frameworks like Astro or custom solutions where data is already fetched on the server. Developers can thus unify SSR logic with client reactivity while preventing needless round trips.

This enhancement is framed as an advanced use case, typically for those constructing specialized integrations or building custom meta-frameworks on top of Solid. The host clarifies that, out of the box, many apps benefit more from the default resource approach. However, having the option to treat the client as purely a reactivity layer—while the server handles data fetching—opens more pathways for optimization and architectural creativity.

### 02:54:00 - Reflecting on SSG, Caching, and Potential Integrations

The conversation broadens to static site generation (SSG) and caching. The host acknowledges that Solid’s resource patterns can be adapted for pre-rendering with minimal fuss, but some advanced caching strategies may require custom code. He mentions the possibility of community-driven solutions that wrap resource logic in robust caching layers, akin to TanStack Query’s approach in React. Each approach aims to streamline repeated fetches or handle offline scenarios gracefully.

He admits that official caching integrations remain a work in progress, as the team weighs universal patterns against custom configurations for diverse application needs. Nonetheless, by exposing resource internals and offering straightforward hooks, Solid empowers developers to roll out bespoke caching solutions. The host envisages a future where third-party libraries fill these gaps, further leveling the playing field with specialized data-fetching libraries in other ecosystems.

### 03:00:00 - Final Thoughts on 1.5 and Developer Reception

As the discussion winds back to Solid 1.5 as a whole, the host underscores that the release represents months of incremental yet impactful refinements. Each fix—from undefined error handling to streamlined batching—removes rough edges, helping developers write clearer, more reliable code. Community feedback has been overwhelmingly positive, especially from those transitioning large applications who appreciate how the improvements scale without forcing rewrites.

He highlights that, in aggregate, these modifications strengthen Solid’s core tenets: performance, fine-grained reactivity, and a welcoming developer experience. The host credits contributors for testing pre-releases and filing detailed issues that guided final optimizations. He closes by stating that while 1.5 is a milestone, there’s still plenty on the horizon. The momentum built around Solid’s recent updates positions it to tackle bigger technical leaps, such as future reactivity enhancements or partial hydration.

### 03:06:00 - This Week in JavaScript: Resumability and Framework Trends

Shifting gears, the host addresses broader JavaScript ecosystem news. He focuses on the concept of resumability, as championed by frameworks like Quick and Marco. While Solid does not yet implement fully resumable hydration, the host sees potential in merging fine-grained reactivity with advanced server-side approaches. Reflecting on current research, he envisions frameworks converging on a more fluid way to “pause” and “resume” rendering between server and client.

He contrasts resumability with standard hydration, pointing out that the latter typically runs a full pass of client-side code, whereas resumability aims to skip large chunks of reexecution. Noting that each framework has different underlying assumptions—like whether to store partial states in the HTML—the host remains optimistic about collaborative experimentation. He encourages watchers to follow the conversation, anticipating that these breakthroughs could become the next significant shift in web development paradigms.

### 03:12:00 - Comparing Quick, Marco, and the Potential for Solid

Here, the host discusses Quick’s lazy-loading approach and Marco’s compiler-driven strategy, framing both as distinct yet parallel explorations of the same goal. Quick sees bundling as an avenue to split code for minimal initial payloads, while Marco invests heavily in compiler magic to optimize server and client integration. Each method offers lessons for Solid on how reactivity might adapt to partial hydration or paused execution states.

He recognizes that some adjustments—potentially involving more advanced compilation steps—would be necessary for Solid to embrace full resumability. However, the host underscores that Solid’s push-pull reactivity is already well-suited for partial updates. By merging these mechanical strengths with carefully orchestrated code-splitting, the door opens for an approach that could rival Quick or Marco’s performance. He advises a watch-and-wait mindset, as more concrete decisions will evolve through the broader ecosystem’s findings.

### 03:18:00 - Astro, Islands, and Cross-Framework Collaboration

Next, the host celebrates ongoing synergy with Astro, an islands-focused static site generator that integrates multiple front-end frameworks. Solid’s fine-grained reactivity pairs well with Astro’s approach to partial hydration, enabling interactive segments without overloading the initial page load. He cites real-world apps and user testimonials highlighting how these complementary tools combine for a smoother developer experience and faster site performance.

He clarifies that Astro’s content-centric perspective tackles a different set of problems compared to full-blown meta-frameworks. Yet, the two projects share a mutual interest in reducing unnecessary JavaScript. This shared ethos fosters cross-pollination of ideas about shipping less code to the browser, optimizing bundling, and easing migrations from older systems. By bridging their respective focuses—content rendering for Astro, tight reactivity for Solid—both communities push forward the boundaries of modern web tooling.

### 03:24:00 - Netlify, Vercel, and Emerging Edge Runtimes

Addressing recent announcements, the host looks at edge runtimes competing in the broader hosting space. Netlify’s custom Next.js edge runtime, for instance, adds features that Vercel does not natively support. The host observes that while edge computing has promise for low-latency experiences, each platform’s unique constraints may create fragmentation. He mentions testing Solid Start on these providers, noting that it often integrates more smoothly than one might expect.

He remains guarded about potential friction between specialized feature sets and developer adoption. While competition can spur innovation, it also risks duplication of effort or confusion for novices trying to pick the “best” provider. Ultimately, the host sees progress: more advanced capabilities and user choice. He underscores that whichever edge service a developer chooses, Solid’s direction aims to remain as hosting-agnostic as possible, letting users tap into high-performance environments without vendor lock-in.

### 03:30:00 - Bun, Deno, and the Race for Runtime Supremacy

Switching to JavaScript runtimes, the host talks about Bun’s newfound funding and Deno’s ongoing claims to speed and correctness. He highlights the potential for these platforms to push Node-like environments in fresh directions—whether through faster bundling or more complete browser API support. Still, he cautions watchers to note early-phase marketing hype: real-world benchmarks remain the gold standard, requiring neutral tests and deeper scrutiny.

He briefly addresses controversies, like how each runtime markets itself and the swirling debates about full production readiness. Tension among Deno, Bun, and Node fosters rapid iteration, but also potential fragmentation if each pursues incompatible features. Nonetheless, the host views competition as largely positive, guessing it will lead to better tooling for frameworks like Solid. He advises developers to keep an eye on these evolving capabilities, especially for tasks where raw runtime performance is paramount.

### 03:36:00 - The Value of Collaboration and Community Spirit

Taking a step back, the host comments on the atmosphere of open collaboration in some corners of the community. He contrasts friendlier relationships—such as Astro developers teaming with Quick or Svelte—with more contentious rivalries that sometimes flare up in social media or performance claims. He attributes part of this disparity to different objectives: building ecosystem synergy versus dominating the market.

He underscores that frameworks evolve faster when open dialogue replaces zero-sum thinking. Cross-project benchmarks, shared repositories, and healthy debate often yield better, more informed solutions. The host expresses optimism that the majority of JavaScript framework authors are committed to mutual learning. Whether focusing on SSR or advanced reactivity, these alliances can amplify breakthroughs, ultimately benefiting everyone writing modern web applications.

### 03:42:00 - Routing Innovations and Svelte’s New File Structure

Turning to routing, the host spotlights Svelte’s newly proposed file structure and “plus” routes. While the design has sparked debate, he sees these changes as a logical attempt to unify layouts, dynamic segments, and nested routes within the constraints of file-based routing. Svelte’s approach shares conceptual ground with frameworks like Next.js, Remix, and Solid Start, each seeking a balance between explicit code organization and developer convenience.

He discusses the complexity of deciding how to nest routes and where to store layout logic. Overly prescriptive conventions can impose strict patterns, but too much freedom leads to confusion. Svelte’s plus-based layout notation tries to reduce clutter, using an opt-in approach for new route files. Though not yet final, the host commends the Svelte team for iterating publicly. Routing, after all, shapes how entire apps are built, so each incremental refinement matters significantly.

### 03:48:00 - Shared Element Transitions and MPA Experiments

The host next highlights a demo using the upcoming Shared Element Transition API to animate page switches, even on multi-page apps. Though the API’s MPA support remains incomplete, early prototypes hint at a future where pages transition smoothly without the overhead of single-page frameworks. He emphasizes how this could reshape the notion of “page reload,” letting developers keep the performance benefits of MPAs with a user experience closer to SPAs.

He acknowledges potential challenges in slow network environments, where graceful transitions could still collide with real loading delays. Nonetheless, as browsers refine these APIs, frameworks can unify advanced animations and partial rendering, bridging historically separate worlds. The host muses that shared element transitions might become another impetus—like the History API once was—for forging new patterns in front-end architecture. For now, these demos remain a compelling glimpse into the future of web navigation.

### 03:54:00 - Wrapping Up and Future Outlook

In the final segment, the host summarizes key takeaways from nearly four hours of discussion. SolidJS 1.5 emerges as a meaningful release: it simplifies batching, enhances resources, unifies SSR, and introduces greater TypeScript clarity. Coupled with ongoing collaborations and experiments across the JavaScript landscape, the host believes Solid is well-positioned for continued growth. He reiterates that these iterative, community-driven changes ensure Solid remains user-friendly while tackling advanced use cases.

Before signing off, he thanks viewers for staying through the entire deep dive and invites them to explore the new features in their own projects. He hints that upcoming releases will address more sophisticated topics like partial hydration and potential compiler changes, aiming to keep pace with broader framework innovations. Closing on a note of optimism, the host expresses gratitude for everyone’s contributions and excitement about what lies ahead for Solid and the JavaScript community at large.