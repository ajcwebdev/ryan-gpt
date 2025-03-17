---
showLink: "https://www.youtube.com/watch?v=adXqweWZcNA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Components? Building SolidJS v1.6"
description: ""
publishDate: "2022-10-22"
coverImage: "https://i.ytimg.com/vi/adXqweWZcNA/maxresdefault.jpg"
---

## Episode Description

This extended live stream covers SolidJS v1.6, partial hydration, server components, and performance techniques in a wide-ranging technical discussion spanning nearly five hours.

## Episode Summary

This comprehensive session opens by introducing the latest additions in SolidJS version 1.6, highlighting how partial hydration and advanced server components expand the framework’s capabilities. The conversation then shifts to performance topics—ranging from fine-grained reactivity strategies to the nuances of merging props—revealing how different optimizations impact both the development experience and application efficiency. Throughout the single, in-depth discussion, Ryan Carniato examines design trade-offs, compares SolidJS with alternative approaches, and provides insights into the challenges of scaling JavaScript frameworks for real-world use cases. The streamer also explores historical influences, from the evolution of Knockout to modern contenders like Marco and Qwik, tying them back to current architectural patterns. Interwoven are candid observations on the complexities of testing, streaming, and micro-frontend design. By the end, viewers gain a thorough perspective on how these emerging ideas shape the future of web development, underscoring SolidJS’s role in that rapidly changing landscape.

## Chapters

### 00:00:00 - Initial Greetings and Setup

In this segment, Ryan welcomes viewers and explains the slight delay in starting, mentioning that he had to borrow headphones. He interacts casually with the live chat, encouraging everyone to say hello and share how they are doing. Viewers get a sense of his spontaneous streaming style as he sorts out the last-minute details, like posting on social media. He double-checks audio and screen sharing to ensure everything functions smoothly before properly kicking off the day’s session.

Ryan outlines the main goals for the stream: discussing SolidJS version 1.6, unveiling new features, and demonstrating partial hydration and server component ideas. He also teases that unexpected discoveries popped up right before going live, providing a sense of excitement about the latest developments. Throughout these first minutes, the atmosphere is relaxed and communal, as viewers settle in for a long-form, detail-rich technical exploration focusing on how SolidJS continues to evolve and accommodate fresh architectural concepts.

### 00:06:00 - Solid 1.6 Overview and Feature Roadmap

Ryan shifts into a more structured introduction of SolidJS 1.6, emphasizing that many of the changes stem from ongoing work in Solid Start. He highlights how meta-framework experimentation unveiled key shortcomings or new opportunities, driving the addition of fresh features. The impetus for partial hydration and server component-like capabilities emerges from real-world usage, especially documentation needs and island architecture demos.

He also touches on how these features can be introduced without imposing breaking changes, explaining that much of the new functionality acts as an additional “layer” surrounding existing code. Ryan underscores the stable nature of Solid’s core, with new features mostly wrapping around preexisting behaviors. These observations prepare viewers for deeper technical dives, which will appear in subsequent chapters, as the conversation builds toward the intricate details of merges, spreads, and advanced hydration methods.

### 00:12:00 - Spreads and Fine-Grained Reactivity Challenges

Here, Ryan details how Solid handles spreads, describing why something as simple as the spread operator can become complex under a fine-grained reactive paradigm. He illustrates how typical JSX usage in React-like libraries often reruns components to detect changes, whereas Solid aims to optimize at a more granular level. He explains that in frameworks with a virtual DOM, spreads hold less complexity, but in Solid, they must be carefully orchestrated to track reactivity without triggering entire re-renders.

Elaborating on how the compiler in Solid merges or de-optimizes spread props, Ryan demonstrates how certain patterns can force the creation of proxies to track changes. He walks through examples of dynamic property assignment and the complexities that arise when props might be added or removed. By showing short code snippets, Ryan clarifies how these new approaches in version 1.6 make Solid more predictable while retaining its performance edge, reflecting the delicate balance between developer ergonomics and low-level optimization.

### 00:18:00 - Proxy Mechanics and Performance Implications

At this point, Ryan digs deeper into the internal workings of proxies, explaining how they allow Solid to observe changing object shapes. He contrasts naive merging approaches—where properties get combined into a single object—against more sophisticated designs that track property subscriptions. The conversation reveals why straightforward merges might break reactivity or miss newly added fields, highlighting that proxies help preserve the dynamic nature of data.

He also touches on overhead considerations, emphasizing that not every scenario warrants the cost of these dynamic subscriptions. By enumerating conditions under which proxies do or do not get created, Ryan shows how Solid tries to maintain performance balance. This tension underpins why advanced frameworks often spend years polishing edge cases, revealing that every subtle feature, like object spreads, demands extensive forethought to remain both user-friendly and efficient.

### 00:24:00 - Developer Experience and Low-End Device Support

In this chapter, Ryan describes scenarios where developers target extremely low-power or older hardware—like IoT devices or older versions of JavaScript engines—which may not support proxies at all. He recounts how certain companies or hobbyists found Solid viable because its fine-grained approach avoids the heavy overhead common in virtual DOM libraries. Yet, the reliance on proxies could present a stumbling block if the runtime lacks support.

Ryan then explains measures implemented in Solid 1.6, such as selectively avoiding proxies when property shapes cannot change dynamically. He introduces symbolic markers to detect whether an object is already proxied, preventing redundant wrapping and thereby lowering overhead. This design shows how deeply the framework must adapt to varying runtime capabilities, reflecting Solid’s commitment to minimal overhead even in constrained environments, while still supporting mainstream developer needs.

### 00:30:00 - Balancing Fine-Grained Reactivity with Usability

Ryan reflects on the broader trade-offs inherent in fine-grained reactivity. Although achieving pinpoint updates can yield excellent performance, complexity arises when features like spreads require advanced subscription logic or partial de-optimizations. He reiterates that the true power of Solid lies not necessarily in being fine-grained everywhere, but in enabling developers to choose the right level of granularity for any scenario.

He also contrasts Solid’s fine-grained model with libraries that rely on re-rendering entire components. The conversation touches on how each approach yields different mental models and performance profiles. Ryan notes that while Solid can appear more complex internally, the outcome is often a more straightforward application architecture, once developers grasp the fundamental principles. This persistent tension—maximizing efficiency versus maintaining intuitive code—remains a recurring theme in the stream.

### 00:36:00 - Introduction to Partial Hydration Concepts

Ryan transitions to discuss partial hydration, offering a conceptual overview of how frameworks like Astro, Marco, and Qwik attempt to minimize client-side JavaScript by only hydrating interactive components. He references the architecture behind eBay’s Marco framework and how it pioneered out-of-order streaming and selective hydration years ago, inspired in part by Facebook’s BigPipe. This sets the stage for understanding the motivations behind modern solutions.

He emphasizes the difference between conventional hydration—where the entire page’s markup is bootstrapped—to partial hydration, where only specific interactive “islands” load their accompanying code. Ryan clarifies that this doesn’t just reduce bundle size; it also cuts down on redundant server data, providing notable performance benefits. Listeners gain insight into how the industry arrived at partial hydration as a practical solution for large-scale applications that value speed and minimal overhead.

### 00:42:00 - Astro’s Island Approach and MPA vs. SPA Trade-Offs

Diving further into partial hydration, Ryan spotlights Astro’s approach, which separates static content from small pockets of interactive code. He explains how this allows large portions of a page to remain untouched by JavaScript, slashing payload sizes for relatively static sites. He compares this multi-page app (MPA) architecture to single-page apps (SPA), highlighting that SPAs inherently carry the full client-side framework, which can be more costly in certain contexts.

He contrasts eBay’s experiences with partial hydration—reducing 80% of JavaScript on pages that rarely update—with typical SPA overhead. While the MPA model yields strong performance benefits, it lacks immediate client-side transitions. However, the discussion reveals how new solutions aim to fuse MPA’s performance advantages with an SPA-like experience, hinting at deeper synergy between server-driven and client-driven models that Solid Start is beginning to implement.

### 00:48:00 - Islands in Single-Page Apps and React Server Components

Here, Ryan examines the difficulty of applying island architecture within a single-page app. The conversation highlights that shipping partial JavaScript only to certain subsections is relatively straightforward in an MPA model, but complex if you also want spa-like client navigation. This naturally flows into how React server components represent a related but different approach, allowing the server to handle large static areas and keep only essential interactive code on the client.

He notes that React server components try to unify MPA-level optimization with partial client behavior. The complexity arises in retaining local component states during navigation. This dual approach—eliminating unnecessary JavaScript yet preserving advanced client-side transitions—has driven substantial experimentation. Ryan sets the stage for how Solid has sought an alternative route, blending the best of both worlds while maintaining minimal re-renders and precise hydration boundaries.

### 00:54:00 - Introducing Solid’s Island-Hydration Mechanisms

Ryan begins dissecting how Solid Start integrates partial hydration into its architecture. He references prior streams and demos, especially the Hacker News example used at recent conferences. By recapping the foundation of islands in Solid, he shows how the approach overlaps with older experiments like Fresh in the Preact ecosystem, albeit with fine-grained reactivity in mind.

Listeners learn that partial hydration in Solid is realized through specialized elements that skip standard hydration markers, preventing over-serialization. Ryan describes the practical benefits: significantly smaller payloads, simpler HTML, and the ability to expand or refine interactive sections without ballooning the final bundle. This introduction paves the way for deeper breakdowns of how exactly the code organizes these islands, how children remain static, and how minimal scripts get loaded only when truly necessary.

### 01:00:00 - Technical Breakdown: `noHydration` and `hydration`

In this section, Ryan demystifies two key tags introduced in Solid’s codebase—`noHydration` and `hydration`. He explains that `noHydration` is not entirely new, but has been highlighted more explicitly for 1.6. This tag signals that a region of the markup requires no client setup, avoiding the usual ID markers and serialization overhead.

He contrasts `noHydration` with the new `hydration` mechanisms that let developers define where client interactivity should occur. By bridging these two concepts, Solid effectively toggles which portions of the DOM remain purely static. Ryan underscores how such additions offer a smooth developer experience: large swaths of the UI can be server-rendered and untouched by JavaScript, while specific “islands” handle dynamic features.

### 01:06:00 - Island Components and Child Content Handling

Ryan showcases how to wrap a component in an “island” with a simple import, effectively telling the compiler to limit hydration to that component. This approach transforms how children of these islands remain server-controlled, toggling back and forth between server and client logic. He highlights that Solid’s strategy neatly avoids any need for separate files or drastically different syntax to define which parts belong on which side.

He provides code samples where a `Toggle` component is isolated, leaving surrounding content to remain inert. The demonstration clarifies how data never has to be serialized if the child never moves to the client. At the same time, the minimal script for toggling state loads only when required. The audience sees how straightforward it can be to embed interactive widgets into otherwise static sections, a hallmark of partial hydration done efficiently.

### 01:12:00 - Handling Context and Persistence in Islands

Here, Ryan addresses one of the major challenges in partial hydration: sharing state or context across segregated client islands. He explains that Solid’s new approach cleverly re-injects owner contexts during the hydration phase, preventing context boundaries from fragmenting. Despite the physical separation between client-hydrated sections, Solid can still deliver cohesive global or nested context where needed.

He references dynamic examples where repeated components, like counters, each have their own context, but still coordinate under a single provider. By ensuring the parent’s context reattaches seamlessly, developers can maintain sophisticated state-sharing patterns without reintroducing the entire application’s overhead. This seamless bridging solves a historical hurdle for partial hydration, showing how advanced frameworks preserve developer ergonomics while splitting the page into logical hydration zones.

### 01:18:00 - Fine-Grained Islands and Future Server Components

Ryan puts these incremental pieces together, illustrating how partial hydration edges toward the same space that React server components aim to fill. By building islands that preserve context, only ship minimal JavaScript, and maintain reactivity boundaries, Solid Start effectively creates a transitional style app that can appear single-page-like without shipping an entire framework to the browser.

He likens this to “server components in 10 kilobytes,” highlighting how smaller bundles become feasible when large blocks of UI remain server-only. The conversation also notes that streaming is still supported, including out-of-order streaming, though further refinements are on the roadmap. This cohesive vision—merging the MPA’s performance benefits and the SPA’s user experience—demonstrates why Ryan calls partial hydration the next major wave in modern front-end architecture.

### 01:24:00 - Example: Streaming Hacker News Demo with Islands

Ryan shifts focus to demonstrate partial hydration in practice, referencing his Hacker News clone built in Solid Start. He highlights the app’s small JavaScript footprint, which is comparable to Astro’s partial-hydration model. Yet, the application benefits from client-side routing akin to a single-page app. This merges quick page transitions with minimal downloaded code.

He discusses how the page structure remains mostly static. Only toggling comments or navigating nested views triggers minimal JavaScript loads. Ryan reveals that because it’s all handled within Solid’s routing system, you can still enjoy quick transitions without losing server-driven data. The snippet underscores how each interactive portion is island-ified, while entire comment threads remain unhydrated, saving substantial overhead.

### 01:30:00 - Islands, MPA Navigation, and Advanced Techniques

Continuing with the Hacker News example, Ryan touches on the synergy between multi-page navigation and incremental client-side enhancements. He explains that typical MPA experiences reload entire pages. However, Solid Start can intercept link clicks, fetch only new segments from the server, and instantly swap them in the DOM. He parallels this approach to older systems like Turbo or TurboLinks but emphasizes the finer granularity and modern reactivity that come from combining partial hydration with signals.

Listeners learn how using persistent islands helps maintain local states, so interactive elements do not reset on navigation. He emphasizes that while the approach is intricate at the implementation level, the developer experience remains straightforward. Ryan calls attention to the underlying complexities that were hidden from the user, praising the meticulous design that keeps code expressive and readable.

### 01:36:00 - Solid Movies Demo and Single-Page Feel

Ryan showcases a second example: the “Solid Movies” app. Taking inspiration from a popular set of “Movies” demos in Next, Angular, and SvelteKit, he replicates an app that loads and displays film data. Despite employing partial hydration and multi-page illusions, the user flow behaves very much like an SPA. The system fetches new HTML in the background, merges updates, and preserves minimal interactive JavaScript in small increments.

He points out how certain details, like search inputs, require more advanced island management and context bridging to retain focus or avoid losing state on transitions. By systematically applying these techniques, Ryan underscores how Solid can achieve a near-seamless client experience while still shipping far less JavaScript compared to typical single-page frameworks, making it compelling for performance-minded developers.

### 01:42:00 - Balancing Simplicity and Scalability

Here, Ryan reflects on the difficulty of deciding how much complexity to place on the server or the client. He acknowledges that multi-page transitions powered by partial HTML swaps can be more challenging to debug than standard SPA approaches. However, for large-scale production sites focusing on SEO and speed, the payoff in cutting bundle size is substantial.

He also praises ongoing efforts to push streaming boundaries, explaining how each fresh breakthrough unearths new edge cases. As developers weigh simpler client solutions against advanced streaming or partial hydration approaches, Ryan emphasizes that the biggest leaps in performance often come from architectural changes rather than micro-optimizations. The segment clarifies that these patterns can also shift how developers think about caching, data retrieval, and truly global state management.

### 01:48:00 - Advances in Context Preservation and Reactivity

As he continues describing new frontiers, Ryan highlights how partial hydration sets the stage for deeper reactivity patterns. Solutions like Qwik and Marco, for instance, have taken the approach even further with resumability or streaming logic. Solid’s method focuses on maintaining the developer-friendly illusions of typical frameworks, but with surgical control over the JavaScript that ships.

He reiterates how the approach to context—embedding reactivity even across islands—demonstrates that these advanced capabilities need not sacrifice code clarity. Ryan sees parallels to how React server components also aim for a more refined server-client boundary, yet expresses that Solid is forging its own identity, leveraging fine-grained signals and compiler integration. The conversation underscores the potential synergy or divergence among these next-generation systems.

### 01:54:00 - Historical Influences: Knockout, Facebook’s BigPipe, and More

At this juncture, Ryan zooms out to discuss the historical lineage that led to partial hydration. He references older techniques like BigPipe at Facebook and advanced streaming solutions built at eBay with Marco since 2014. While they did not gain the same popularity as React, they laid important groundwork for multi-part rendering and selective hydration.

Knockout also gets a nod, as it introduced powerful reactivity concepts that have since been refined by frameworks like Solid. By tracing these origins, Ryan shows that many so-called “new” ideas actually stem from earlier experiments in large enterprise environments. He underscores that the success of partial hydration arises partly from revisiting older architectural patterns with modern tooling and renewed emphasis on shipping less JavaScript.

### 02:00:00 - The Developer’s Journey: Complexity vs. Convenience

Ryan explores the tension between developers who want minimal mental overhead and those who crave the smallest possible payload. Not every team needs advanced partial hydration, especially if they can handle an SPA within tight deadlines. However, for performance-critical or large-scale apps, these complexities can yield immense savings.

He maintains that frameworks should offer layered approaches, letting novices follow simpler patterns while experts optimize heavily. This resonates with the ethos behind Solid: giving a path for advanced partial hydration without forcing every user to adopt the technique. Ryan hints that future ecosystem tooling will smooth these transitions, ensuring that the complexity behind advanced streaming or island-based patterns remains optional yet accessible.

### 02:06:00 - Personal Reflections on Documentation and DX

The conversation shifts momentarily to Ryan’s personal experiences writing documentation for Solid Start. He jokes about how the tedium of writing extensive docs led team members to experiment with islands simply to make the docs site more impressive. He conveys a lighthearted tone about the synergy between documentation demands and architecture experimentation.

Ryan also praises those who excel at writing clear documentation, admitting that not everyone on the team shares the same enthusiasm for it. This window into the project’s internal workflows shows how cutting-edge features sometimes emerge from practical necessities—like wanting a site to load fast or appear innovative—rather than from a purely theoretical standpoint. Such real-life motivations often shape the next leaps in framework evolution.