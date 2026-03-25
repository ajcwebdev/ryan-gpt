---
showLink: "https://www.youtube.com/watch?v=nY7k3ql5mss"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Bringing the Bling w/ Tanner Linsley"
description: ""
publishDate: "2023-04-15"
coverImage: "https://i.ytimg.com/vi/nY7k3ql5mss/sddefault.jpg?v=64382ae2"
---

## Episode Description

A sweeping conversation exploring open-source work, React’s evolution, and modern web development strategies for large-scale projects, featuring insights from both host and guest contributors.

## Episode Summary

This discussion begins by setting the stage with casual introductions, highlighting the guest’s background in audio engineering, WordPress, and his early shift into Angular and React development. As the episode unfolds, the conversation covers the motivations behind building libraries such as React Query and the significance of data fetching patterns. The hosts consider the trade-offs in maintaining open-source tools, discuss the hurdles of sustainable project development, and note how new technologies like React Server Components and bling might influence future workflows. The dialogue repeatedly returns to the importance of performance, from server-side streaming to new bundler techniques and potential frameworks. Despite technical complexity, the speakers emphasize how strong community support and careful abstractions can unify developer experience across multiple environments. By the end, the episode underscores ongoing efforts toward more composable solutions for routing, deploying, and writing modern, scalable JavaScript applications.

## Chapters

### 00:00:00 - Introductions and Starting Context

In these opening moments, the host greets viewers, mentions battling a headache, and acknowledges a lively chat full of eager participants. The guest, Tanner Linsley, soon joins the call, prompting a brief exchange on everyday life before easing into more technical themes. This casual start sets a friendly tone for the episode, inviting listeners to settle in for a thorough and wide-ranging discussion.

Conversation quickly shifts toward housekeeping items like waiting out pre-roll ads and letting the audience gather. The host also teases upcoming topics, including server functions, bundlers, and routing. Though nothing deeply technical surfaces in these minutes, the rapport between host and guest establishes a comfortable, approachable vibe that persists throughout the stream. It's a warm beginning that ensures everyone is ready for a deep dive into web development discussions.

### 00:09:00 - Tanner’s Early Background and Angular Memories

During this segment, Tanner reflects on his first exposure to web technologies and how that led him to work with HTML, CSS, and eventually PHP and WordPress. He paints a vivid picture of transitioning from audio engineering and film studies into software, detailing the career pivot that brought him into the programming world. This journey underscores how varied experiences can shape a person’s developer identity.

Angular JS enters the conversation next, illustrating the contrast between older approaches like jQuery and the more “magical” feel of two-way data binding. Tanner recounts discovering the performance drawbacks of Angular’s dirty checking mechanism and recalls the fervor around the possibility of building iPhone apps with Ionic and Angular. These reflections reveal the industry’s evolving patterns while laying the groundwork for the more advanced React-focused content to come.

### 00:18:00 - Meeting Future Co-Founders and the Angular to React Switch

Here, Tanner describes how he crossed paths with his future nozzle.io co-founders during a local tech meetup that also included notable community members like Kent C. Dodds. He notes the collaborative atmosphere, emphasizing how gatherings can spark long-term partnerships and innovative ideas. This portion showcases the broader ecosystem’s importance in shaping an entrepreneur’s path.

The conversation then turns to the decision to leave Angular JS for React, which at the time seemed relatively novel. The guest compares the performance benefits of React’s virtual DOM and structural rendering to Angular’s digest cycles. He highlights how rewriting an application in React afforded major speed improvements, a decision that proved pivotal for nozzle.io’s front-end technology. The recollections set the scene for deeper explorations of modern library design and open-source contributions.

### 00:27:00 - The Birth of React Table and the Allure of Open Source

In this portion, Tanner recounts the seeds of his open-source engagement. Despite dabbling in small Angular-based libraries, he soon gravitated to React. He discusses building React Table to handle complex data grids, partly due to limited existing solutions at the time. This library, designed for advanced data manipulation, began to fill a niche for many React developers.

The guest underscores the excitement that comes from community adoption, watching side projects steadily grow in popularity. This discovery phase led to a deeper involvement with open source, demonstrating how a single pain point can inspire a widely embraced solution. The remarks paint a clear picture of the open-source ecosystem’s collaborative spirit and the practical impetus behind new library creation.

### 00:36:00 - Founding Nozzle and Encountering Real-World Complexity

During this window, Tanner elaborates on nozzle.io, explaining how it tracks SEO-related data by scraping search results and aggregating ranking statistics. He describes the hurdles of dealing with massive data sets, which pushed him to refine performance-sensitive components and adopt better caching patterns. His insights show how real-world demands shape library features.

Listeners gain a tangible sense of how entire business models can rest on efficient table rendering and robust data fetching solutions. Working on nozzle.io offered the testing ground for specialized tools like React Table and, later, React Query. By highlighting an actual commercial product’s needs, Tanner illustrates that open-source libraries often originate from genuine constraints rather than pure hobbyist experimentation.

### 00:45:00 - Redux Days and the Genesis of React Query

Here, the discussion pivots to the era when Redux ruled state management in React. Tanner describes initially storing asynchronous data within Redux and how that led him to draft a specialized approach for loading and caching server data. He recalls the complexities of designing a custom state machine logic to orchestrate fetches and responses.

From those challenges, React Query emerged as an alternative that focused on server-state handling. Tanner walks through the thought process behind building a dedicated data-fetching library rather than contorting Redux to fit a use case it never fully embraced. This segment captures how real project constraints fuel the invention of new patterns, reflecting the community’s broader move from general-purpose Redux toward more specialized solutions.

### 00:54:00 - React Query’s Rapid Adoption and Influential Design

In these minutes, Tanner addresses the meteoric rise of React Query upon its public release. He conveys surprise at how quickly the library captured the community’s imagination, noting that it arrived at a perfect confluence of developer frustration with boilerplate-heavy approaches. This swift growth underscores the pent-up appetite for a straightforward yet capable solution.

He also highlights React Query’s unique stance on cache invalidation, emphasizing simplicity over granular optimizations. While it allows advanced patterns like optimistic updates, the default flow often involves refetching data post-mutation. The conversation reveals how freeing developers from managing complicated caches influenced how people built and thought about data synchronization, marking a turning point for modern React architecture.

### 01:03:00 - SWR, GraphQL, and the Ecosystem of Data Fetching

Shifting to the broader ecosystem, both host and guest mention SWR from Vercel and compare it to React Query. They explore how each solution tackles remote data and address overlapping features like caching and caching invalidation. These parallels show the direction the community was heading, with multiple libraries coalescing around promise-based requests and simplified revalidation cycles.

GraphQL also comes up as an interesting contrast, with query-based tools like Apollo introducing normalized caches. Tanner explains why React Query deliberately avoided deep normalization, believing that simpler strategies often suffice in real applications. This segment provides a panoramic view of how varied approaches—REST, GraphQL, or otherwise—benefit from consistent patterns around data fetching and synchronization.

### 01:12:00 - Modern Server-Side Considerations and Streaming

During this chapter, the conversation expands to include server-side performance strategies, such as streaming HTML for partial hydration. The host draws historical parallels, noting that older frameworks had also toyed with streaming to improve load times. Tanner and the host acknowledge evolving best practices, from server-sent events to the potential for React Server Components.

They reflect on how frameworks like Remix embrace a simpler approach to invalidation by reloading data in the background rather than writing complex caches. The pair stress that, while advanced caching is occasionally essential, many real-world cases benefit from simpler patterns, underscoring how carefully chosen trade-offs can produce both better user experiences and developer ergonomics.

### 01:21:00 - From Single-Page Apps to MPA Approaches

Here, the dialogue shifts to a higher-level perspective on front-end development. Tanner contrasts how single-page apps dominated the ecosystem, empowering front-end teams to spin up stand-alone experiences independent of legacy back ends. Yet he notes a renewed interest in multi-page application philosophies where server-driven page loading can yield better SEO or streamlined code splitting.

They discuss how frameworks like Next and Remix blend client-side reactivity with server-generated routes, bridging the gap between an MPA architecture and a seamless spa-like feel. These comments spotlight the industry’s cyclical nature, repeatedly rediscovering patterns—like server rendering—that older frameworks once championed. The segment concludes by suggesting that modern tooling can fluidly mix paradigms, giving teams nuanced control over user experiences.

### 01:30:00 - Marketing Sites vs. Application Platforms

Conversation narrows to the distinction between marketing-centric websites and complex application dashboards like nozzle.io. Tanner points out that for marketing pages, SEO and immediate load times may trump heavy client interactivity, making static or partially server-rendered setups ideal. Conversely, data-intense dashboards thrive on client-side reactivity and sophisticated caching for large-scale data visualization.

The host remarks on how the modern ecosystem often tries to unify these scenarios under one umbrella, yet practical concerns frequently require distinct solutions. This chapter offers an unfiltered look at real business needs, illustrating that success can depend on a precise alignment of framework features, server-rendering capabilities, and deployment approaches tailored to specific use cases.

### 01:39:00 - The Origins of React Location and Routing Complexities

In these moments, Tanner explains his frustration with default router solutions like React Router, especially around search parameters and complex URL states. He traces React Location’s early development, describing attempts to proxy or wrap React Router’s internals to gain more control. These experiments eventually culminated in building an entirely separate router to handle intricacies like type-safe search queries.

The host nods in agreement, noting how advanced apps often tie deeply interactive UIs to the query string, requiring consistent state across multiple nested routes. This highlights how crucial well-engineered routing is for large-scale client-side apps, revealing a world of challenges not always apparent in simpler, content-focused sites.

### 01:48:00 - From React Location to TanStack Router

The conversation proceeds with Tanner’s path to TanStack Router, extending the foundational ideas from React Location. He articulates the importance of type safety, describing how the library infers route types for robust developer tooling. These capabilities arose from a desire to unify advanced search-parameter state with nested route structures under one cohesive solution.

They briefly discuss the difficulty of maintaining a router that stands apart from major frameworks like Next or Remix. With those established projects controlling their own built-in routing, an external router must deliver unique value to attract users. Tanner’s perspective clarifies that TanStack Router aims to fill a specialized need for teams that want tight control over their routing logic, separate from a monolithic meta-framework.

### 01:57:00 - The Bling Macro Concept and Agnostic Build Systems

Shifting gears, the host references an emerging technique called bling, a macro-based approach designed for server-client code boundaries. Both participants explore how bundlers could handle specialized function calls, automatically splitting out the server portion from client code. They note how advanced solutions like quick or certain Next.js features similarly separate browser from server.

This leads to broader reflections on bundlers and frameworks stepping in with their own macros or decorators. Tanner highlights that building an independent router or library requires bundler-agnostic ways to handle code extraction. This outlook hints at how bridging the server-client gap could be simplified, especially for those who prefer custom solutions over integrated frameworks like Remix or Next.

### 02:06:00 - Rethinking “Framework” Definitions and Deployment Adapters

Here, the discussion addresses the trifecta of what makes a meta-framework: a router, a build system, and a deployment model. Tanner and the host note how each piece often requires specialized adapters, typically re-implemented by various frameworks. They praise Astro’s approach as a “meta-bundler” that aims for neutrality, letting teams choose their own front-end paradigms.

Conversations about universal deployment highlight the headaches of rewriting Node or serverless adapters multiple times. The pair foresee a future where a single toolkit could handle all major hosting providers without the overhead of repeated custom integrations. They praise how this would enhance maintainability and reduce fragmentation, building on Astro’s example of bridging flexible build pipelines to broad deployment targets.

### 02:15:00 - The Server Dollar Sign Proposal and RPC Patterns

In this portion, they focus on server functions labeled with a dollar sign suffix, reminiscent of certain patterns in quick or older server-driven concepts. The host explains that “server dollar sign” acts as a macro that allows direct calling of server logic from the client, effectively bridging front-end calls into an RPC-like architecture. This streamlines data mutations without writing conventional REST endpoints.

They also mention inspiration from Telefunc, TRPC, and other RPC-based solutions. Tanner and the host praise how this approach reclaims typical complexities around input validation and endpoint declarations, letting developers treat remote calls as local asynchronous functions. The conversation conveys excitement about how simplified function calls might improve both developer experience and code organization across large apps.

### 02:24:00 - Integrations with TRPC, Svelte, and Angular

Expanding upon the same idea, the speakers explore potential in hooking the server dollar sign approach into TRPC, enabling typed client-server calls in multiple frameworks. They note how TRPC’s generative capabilities align well with the macro concept—mapping an interface on the server to typed hooks in the client.

They also mention Angular and Svelte as potential adopters, underscoring how the underlying mechanism is relatively framework-agnostic. This unifying angle reflects their overarching theme: standardizing macros or function-based calls could drastically reduce friction in multi-framework environments. These remarks highlight the strong possibility of cross-community collaboration if the approach gains traction.

### 02:33:00 - The Role of React Server Components and Emerging Patterns

Here, talk shifts toward how React Server Components (RSCs) alter typical client-server boundaries. The host recounts that RSCs effectively treat server logic as part of the component tree, streaming partial UI chunks to the browser. Tanner admits he has only recently begun examining these patterns due to user demand and interest in advanced routing.

They question whether RSCs should remain a React-only feature or evolve as a universal concept. The host references how he and others have toyed with making them more general, especially in ecosystems like Astro. The conversation remains open-ended but points to a near-future where universal server components might become a regular part of JavaScript meta-frameworks.

### 02:42:00 - Navigating the Client-Heavy vs. Server-Heavy Spectrum

In these minutes, Tanner reiterates that many production apps, especially dashboards, remain dominantly client-side and do not prioritize SSR. Still, newly accessible server-first patterns suggest future expansions. The duo note how advanced solutions should accommodate each side of the spectrum—pure SPAs for data-intensive apps, SSR for content-heavy pages, and flexible bridging in between.

They also address developer adoption curves, pointing out that complicated architecture changes typically happen slowly. By enabling incremental migration strategies, the community stands a better chance of seeing widespread acceptance. This practical approach resonates with the earlier theme of offering both robust performance and an approachable developer experience.

### 02:51:00 - Revisiting Router Challenges with Bling and RSCs

Turning again to the router puzzle, both participants emphasize that React Server Components particularly need thorough integration with routing. They mention next.js’s brand-new app directory approach as evidence of a deeper synergy between routing and server-first rendering. Tanner stresses that TanStack Router aims to provide the building blocks for those wanting to craft high-control solutions.

They speculate on how incremental adoption might look: starting with an SPA mentality, then layering in server code over time. Bling’s “function call as an RPC” model gets another highlight, underscoring how hooking it into a well-structured router could yield a well-orchestrated system for streaming UI partials. This portion hints that future enhancements to TanStack Router hinge on clarifying how it might mesh with React’s server model.

### 03:00:00 - Astro as the Meta-Bundler for Cross-Framework Needs

During this segment, the host offers updates on moving certain solid start projects to Astro, praising Astro’s robust integration system and ease of bridging to multiple environments. He explains that by offloading the adapter logic to Astro’s well-maintained pipeline, they hope to reduce duplication across numerous deployment targets.

Tanner sees parallels for potential TanStack products, lauding the idea that a single “universal bundler” can handle complex app code, route definitions, and function-based APIs. Their mutual excitement underscores Astro’s rising status as an accommodating hub, especially for developers wanting to craft sophisticated front ends without locking into a single meta-framework.

### 03:09:00 - Incremental Migration and the Unbundling of Adapters

The conversation reveals a step-by-step plan for the host’s projects: decoupling “start” frameworks from the underlying bundler to allow simpler incremental migrations. This approach prevents developers from retooling their entire codebases overnight. Tanner agrees, praising the practicality of letting teams experiment with new architecture while retaining proven libraries.

They reiterate that maintaining wide sets of environment adapters can be overwhelming, so concentrating that effort in a single place—like Astro—frees library authors to focus on domain-specific tasks. The segment ends with a sense of optimism that better separation of concerns can lead to more stable and user-friendly development experiences across frameworks.

### 03:18:00 - Bling’s Flexible Design and Potential Usage Examples

Here, the host spotlights examples of bling in action, where code-splitting macros let developers inline server requests, lazy-load components, or define RPC endpoints in a single file. They chuckle at how a toy demonstration showcased surprisingly powerful patterns, even letting one codebase define an entire multi-page app with integrated data queries.

Tanner calls it a “library maintainer’s dream,” noting how trivial it can be to pivot from local logic to remote calls. They debate the learning curve, especially if newcomers see everything stacked in one file. Still, they agree that the sheer flexibility fosters advanced usage. It signals a future where meticulously configured folder structures might be optional rather than mandatory.

### 03:27:00 - Potential Drawbacks and the Need for Compiler Clarity

At this juncture, both participants address potential pitfalls of such a flexible system. They note that piling numerous macros and inlined modules could confuse developers used to file-based conventions. The host acknowledges that a robust compiler must carefully track what runs on the server, the client, or both.

There’s a shared agreement that some degree of “magic” can be helpful but must remain discoverable. Documentation and intuitive error handling become critical. Listeners come away with the understanding that while new macros offer powerful capabilities, they demand careful design and communication to remain approachable.

### 03:36:00 - Reflecting on HPC Costs and Recursive Server Loops

In this section, they touch on real-world cautionary tales, such as a developer’s accidental infinite recursion that caused a huge cloud bill. Tanner and the host reference stories of unstoppable serverless loops when code inadvertently calls back to itself. They highlight the tension between infinite scalability and the lack of built-in cost caps on certain platforms.

This anecdote underscores how seemingly small mistakes—like referencing the local environment in a top-level await—can balloon into major liabilities. Tanner empathizes with cloud providers seeking to streamline solutions while also preventing catastrophic misconfigurations. It’s a sobering reminder that advanced features come with complexities worth carefully planning around.

### 03:45:00 - Revisiting Bundler Wars: ESBuild, SWC, and RS Pack

The conversation drifts toward bundler performance, including mention of Rust-based solutions like SWC or RS Pack and Go-based ESBuild. Both the host and Tanner point out that while speed matters, developer experience and plugin ecosystems also factor heavily. They recall the wave of hype around next-gen bundlers promising massive speedups, yet underscore that many teams remain on Webpack due to plugin availability.

They question if there’s a tipping point where near-instant performance stops delivering meaningful improvements relative to ecosystem friction. The talk closes with a balanced perspective: while sub-second start times are beneficial, rewriting large codebases for marginal gains can be a hard sell without compelling additional features.

### 03:54:00 - Angular’s Resurgence with Signals and the Importance of Collaboration

Attention turns briefly to Angular, which is now embracing reactivity through signals. The host praises Angular’s willingness to modernize and compares it to similar reactivity proposals in other frameworks. This discussion highlights a broader push across the JavaScript world to integrate advanced state-handling techniques once only found in smaller ecosystems.

They celebrate the open-source community’s growing cross-pollination, seeing potential for more synergy as frameworks learn from each other. They also mention the impetus for big players like Google to maintain relevance by folding in best practices. The overarching conclusion is that collaborative, iterative improvements often outshine siloed innovation.

### 04:03:00 - Summation of Bling’s Appeal and Future Standardization

During this chapter, they restate bling’s potential to unify patterns for server functions across frameworks. The conversation briefly dips into the idea of standardizing macros at the bundler level, preventing each meta-framework from reinventing similar solutions. Tanner and the host see promise in repeated patterns that reduce boilerplate for developers.

However, they admit that partial adoption is more realistic initially. As with React Query’s early traction, widespread usage often starts with smaller community-driven libraries before scaling to official endorsements or “standardization.” Listeners gain a sense of the iterative path that new conventions follow before maturing into mainstream tools.

### 04:12:00 - Considerations for Next Steps in Routing and Server Components

They revisit the concept of bridging universal routing with server component streaming, acknowledging that many unknowns remain. The host mentions ongoing experiments in pulling server component logic into frameworks like Solid or Astro, requiring careful design of partial rendering and ephemeral states.

Tanner reiterates that he’s paused finalizing TanStack Router to see how server components evolve. He wants to avoid shipping major releases only to break them immediately when RSC patterns solidify. This transparent approach underscores the real tension between shipping stable libraries and responding to rapidly shifting technology demands.

### 04:21:00 - Conferences, Travel Plans, and Community Gatherings

In these minutes, the host and Tanner discuss upcoming speaking engagements at conferences including Reactathon, JSNation, and more. They mention the excitement of in-person events for meeting community members and exchanging ideas. This portion also highlights the logistical challenges of balancing travel with active development.

They each outline the topics they aim to present, such as server components, routing, and advanced bundling approaches. This lighthearted moment shows them stepping away from the dense technical specifics and looking forward to real-world gatherings where these concepts can be shared directly with colleagues and fans.

### 04:30:00 - Wrapping Up and Final Thoughts

As the conversation draws to a close, Tanner and the host summarize key highlights—namely the synergy of flexible routing, server function macros, and powerful bundler integrations that empower modern applications. They encourage the community to keep experimenting and collaborating on everything from TanStack Router to Astro-based deployment solutions.

They offer thanks to the viewers for hanging in for the lengthy stream, reaffirming that no single approach rules the day. Instead, thoughtful composition of tools and community-driven refinements keep the ecosystem vibrant. With that, they sign off, promising to continue exploring advanced frameworks, new patterns, and incremental improvements in the ever-evolving landscape of web development.