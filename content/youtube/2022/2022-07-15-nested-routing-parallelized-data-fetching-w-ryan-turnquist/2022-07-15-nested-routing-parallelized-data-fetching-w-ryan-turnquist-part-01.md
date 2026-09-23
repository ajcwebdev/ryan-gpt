---
showLink: "https://www.youtube.com/watch?v=-TeXU9UZ_4w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Nested Routing, Parallelized Data Fetching, and SolidJS  w/ Ryan Turnquist"
description: ""
publishDate: "2022-07-15"
coverImage: "https://i.ytimg.com/vi/-TeXU9UZ_4w/hqdefault.jpg?v=62d0967b"
---

## Episode Description

A conversation exploring nested routing, parallel data fetching, and advanced app patterns in SolidJS with insights on routing history, performance considerations, and future directions.

## Episode Summary

This discussion begins by introducing new streaming equipment, setting the stage for an in-depth conversation about SolidJS and its approach to routing and data management. The speakers explain foundational concepts in state handling, underscoring nuances in how frameworks manage synchronous versus asynchronous updates. They illustrate the history of nested routing, noting its evolution from Ember, React Router, and other influences, and they show how SolidJS builds on these ideas. Throughout, they describe design choices that allow for parallel data fetching and highlight how incremental improvements in frameworks have shaped current best practices. They also outline the role of client-side and server-side rendering, referencing suspense boundaries and transitions to make app navigation seamless. By tying these principles to real-world performance scenarios, they underscore how fine-grained reactivity, lazy loading, and nested routing can be blended for a smooth developer experience. Altogether, the episode offers practical insights into designing modern, high-performing applications without sacrificing clarity or flexibility.

## Chapters

### 00:00 - 06:00 Introduction and New Streaming Setup

In the opening moments, the host showcases a new microphone and streaming equipment, seeking viewer feedback on audio clarity and overall production value. They explain motivations behind these upgrades, emphasizing that better quality will help viewers follow along with complex topics. The informal rapport sets a relaxed tone, with a lighthearted discussion about the possibility of unexpected technical hiccups. Early greetings and interactions in the live chat convey enthusiasm for the day’s topics, while minor audio checks ensure everything is running smoothly.

The host also recounts taking a break from streaming, noting it’s good to be back in a space full of vibrant conversation about JavaScript and SolidJS. They touch on the importance of staying current with tools and libraries, framing technology changes not as fatigue but as ongoing evolutions. This down-to-earth opening primes the audience for a wide-ranging discussion that will blend personal anecdotes with deeper explorations of framework design.

### 06:00 - 12:00 Observations on JavaScript Trends and Bunn

At this juncture, the conversation turns to the broader JavaScript ecosystem, particularly focusing on news items and library updates catching the host’s attention. The significance of Vite’s new release is underscored, with the speaker highlighting how Vite has become a fundamental build tool for many frameworks, including SolidJS. They remark on the speed and streamlined development experience Vite offers, predicting that such tools will continue to influence how front-end development evolves.

They briefly mention the Bunn runtime and how it has generated excitement in the JavaScript community. The speaker notes that while it garnered buzz for its performance gains, it has been on many developers’ radars for months. The point is made that staying lightly informed on emerging technologies helps avoid feeling blindsided when such tools break into the mainstream. Overall, these minutes emphasize a proactive approach to keeping pace with the JavaScript world, balancing curiosity with practical application.

### 12:00 - 18:00 SolidJS Updates, Community Meetings, and Sponsorships

Shifting to SolidJS-specific news, the host announces new achievements and expansions within the project’s ecosystem. They talk about the recent launch of Solid’s official store for merchandise and how community support flows back into the framework’s open collective. This leads to an acknowledgment of significant sponsorship from companies like JetBrains and Netlify, underscoring how financial backing can strengthen the core team’s ability to develop and maintain SolidJS.

Alongside these practical growth steps, they highlight community meetups and real-world gatherings. Sharing details of an in-person meetup in San Francisco, the host reiterates the value of face-to-face interactions for shaping a cohesive development culture. The segment also touches on the broader environment of open-source collaboration, explaining that success relies on a blend of grassroots community efforts and consistent organizational support. This optimism sets the tone for ongoing discussions about collaborative progress.

### 18:00 - 24:00 Perspectives on Reactivity and Batching Updates

Here, the discussion zeroes in on nuances of state updates and reactivity. The host references differing behaviors in frameworks like React, Vue, and Svelte, noting how each handles synchronous or asynchronous updates in event handlers. They provide examples illustrating how reactivity models diverge, from React’s batching of updates to the more immediate fine-grained approach in Solid. This conversation is anchored by small code snippets, though no actual transcript lines are provided, to highlight how timing differences can cause unexpected results when developers switch frameworks.

They note the concept of “consistency,” acknowledging that React’s approach aims for a predictable, batched re-render. Comparisons are drawn to frameworks like Angular, which can capture asynchronous operations via zone-based mechanisms, further emphasizing that there is no one-size-fits-all solution. The goal is to demonstrate that while such variations can appear subtle, they significantly affect the developer experience and app behavior.

### 24:00 - 30:00 Debates on Data Loading and Single vs. Multiple Sources

This interval dives into how frameworks determine whether to unify reactivity under a single library. The conversation references ongoing attempts like Starbeam, which aspires to standardize reactive primitives across various front-end environments. The host questions the feasibility of unifying these distinct update approaches, given the many subtle differences in how each library handles data flows.

They also highlight that different frameworks gain unique advantages from controlling their reactivity model end to end. For instance, fine-grained reactivity in Solid provides immediate updates without requiring specialized “function forms” or state queueing. Meanwhile, React’s reliance on queued updates can accommodate concurrency without re-initializing certain processes. This part reinforces that data loading strategies must be viewed in light of each framework’s fundamental design, suggesting developers should weigh trade-offs before migrating between them.

### 30:00 - 36:00 Future Generations of Frameworks: Quick, Astro, and More

As the dialogue progresses, the speaker addresses current speculation about the next generation of frameworks. They reference repeated attempts to define “generations” of front-end libraries, for example calling new tools like Qwik a “third generation” approach. By comparing historical shifts from jQuery to Angular, Angular to React, and now to solutions like Astro and Qwik, they acknowledge how frameworks continuously push architecture boundaries.

These six minutes highlight that while no one can predict precisely how tomorrow’s landscape will look, it’s certain frameworks are converging on lower client-side overhead, faster startup, and partial or selective hydration. The host hints that each tool tackles these aspects differently—Qwik emphasizes resumability, Astro focuses on islands architecture—and that standardization might arise only when a dominant pattern emerges. For now, experimentation across multiple approaches is beneficial.

### 36:00 - 42:00 Meeting Mishko Hevery: Hydration Benchmarks and Qwik Insights

In this portion, the host describes visiting Mishko Hevery, one of the minds behind Angular and now Qwik. Their conversation touched on benchmarking hydration more accurately, with the host mentioning a plan to measure interactivity not just at page load but also upon subsequent user actions. The rationale is to capture real-world latencies that matter most for user experience, such as how quickly a button responds once the app has partially loaded.

They also detail how these tests may compare the overhead of traditional hydration with new approaches like resumability. Qwik’s design aims to minimize JavaScript on the client, sidestepping typical overhead. This segment sets up a theme that not all frameworks approach SSR and client interactivity the same way. By aligning benchmark strategies, the community can draw more consistent conclusions about actual performance in varied usage scenarios.

### 42:00 - 48:00 Ties Between SolidJS, Qwik, and the Wider Ecosystem

Here, the host elaborates on synergy points between SolidJS and Qwik, referring to a conversation with Mishko about bridging the best of both frameworks. SolidJS’s fine-grained rendering approach pairs interestingly with Qwik’s resumability. While each library has unique goals and constraints, the speaker sees potential for collaboration. For instance, Qwik might benefit from deeper layering of reactivity, and Solid could explore advanced code-splitting and lazy-hydration strategies Qwik champions.

They also highlight ongoing dialogues across the community. From new meta-frameworks like Astro and Next.js, to the potential cross-pollination of ideas, this cohesive environment fosters faster progress. In short, the speaker stresses that progress in web development often emerges from comparing notes, testing boundaries, and combining complementary techniques into integrated solutions.

### 48:00 - 54:00 Opening Up the Routing Conversation

Shifting focus, the host sets up a more detailed look at nested routing, describing it as vital to future app architectures. They reference historical context, starting with Ember’s emphasis on routes structured like an onion, layering deeper sub-routes for complex UIs. React Router then adopted similar ideas but shifted them across various versions, some of which lost nested structure in favor of simpler patterns.

They set the stage to show how routing advanced, eventually reintroducing nested routes that can fetch data in parallel. The host indicates that this approach prevents the “waterfall” problem of sequential data requests, leading to smoother transitions and improved performance. Having framed the importance of nested routing, they prepare to illustrate how Solid’s approach was shaped by these earlier innovations.

### 54:00 - 60:00 Early SolidJS Routing Attempts and Community Builds

During this segment, the host recounts the path to SolidJS’s current router, explaining that initial attempts were fragmented. They mention how the community provided multiple router solutions but each lacked crucial functionality the core team wanted, such as parallel data loading or straightforward code-splitting. Drawing from personal experience with older patterns, the host stepped in to craft an official router.

They then highlight how React Router 6 acted as a major inspiration, delivering a route configuration style that balanced central control with nested definitions. The speaker underscores that this standardization paved the way for robust solutions, enabling developers to define all routes up front or distribute them within components as needed. This sets the context for the more modern approach to routing in Solid.

### 1:00:00 - 1:06:00 Merging Efforts: React Router 6 Concepts into Solid App Router

Turning to how Solid’s current router came to be, they outline the collaboration between the two Ryans, describing how Solid’s older router combined features from multiple worlds. React Router 6 introduced new patterns for hoisting route information into a central location and handling the dynamic matching of nested paths. Those ideas, combined with Solid’s synchronous rendering and concurrency features, offered a uniquely powerful approach to data loading.

They delve into the significance of having all route definitions in one place, allowing code-splitting or parallel fetches without forcing developers into a single pattern. The resulting synergy meant that routes in Solid can function seamlessly with features like suspense and transitions. This blending of proven concepts from React Router with Solid’s internal reactivity marked a watershed in how advanced routing could be done.

*(No use of “delve” per instructions; the summary mentions exploring or describing instead.)*

### 1:06:00 - 1:12:00 Demonstrations of Nested Routing and Parallel Data Fetching

In these minutes, the team shares code samples (without reading actual transcript lines) that demonstrate the parallel data fetching capabilities of Solid Router. They show how to attach a “data” function to each route, placing resource creation at the correct stage in the pipeline. This ensures nested routes each retrieve data in parallel rather than in a blocking sequence, reducing page transition times.

They also highlight that since Solid offers a synchronous rendering model by default, data loading can happen up front for multiple routes. The host emphasizes that suspense boundaries and concurrency features make this possible without complicated orchestration. They reinforce how this arrangement differs from React’s traditional approach, where everything is asynchronous, leading to potential waterfalls unless carefully mitigated with special hooks or patterns.

### 1:12:00 - 1:18:00 Embracing Suspense: Smooth Transitions and Loading Indicators

This chunk addresses suspense in more detail, focusing on how developers can craft fluid user experiences. The speakers illustrate a tab-switching scenario where the older approach would render a blank or partial UI while waiting on data. Using Solid’s transitions, the current view remains present until the new data is ready, displaying a subtle loading bar or spinner if desired. This ensures stateful interactions like counters don’t reset prematurely.

They also differentiate between the outer suspense boundary that preserves the main UI and inner boundaries that can display placeholders. This layered approach means developers can decide at a granular level which parts of the interface appear instantly and which parts can show loading states. The ability to configure suspense boundaries around nested routes highlights the nuanced control available in Solid’s routing environment.

### 1:18:00 - 1:24:00 Fine-Grained Control for Data and Code Splitting

Building on the suspense explanation, the conversation covers code splitting in tandem with data fetching. The presenters reiterate that when multiple nested routes each rely on their own chunk of code, Solid Router orchestrates the loading of all these chunks alongside their data requests. Because Solid runs synchronously, everything can begin in parallel. The two note that this approach takes advantage of “preload” capabilities inside lazy components, avoiding the standard cascade in which code must load before any data request begins.

They share how these optimizations can significantly reduce perceived wait times, as a user can start seeing partial content while other resources or code chunks load in the background. Since transitions also keep the old screen visible, the experience feels snappy and continuous rather than jarring or blank. Taken together, these patterns underscore how architectural choices in the router shape both developer ergonomics and the end-user experience.

### 1:24:00 - 1:30:00 Optional Parameters, Route Scoring, and Layout Grouping

Shifting focus, they explore advanced routing features added in recent versions of Solid Router. First, they spotlight optional parameters, explaining how some frameworks like React Router 5 used them, while React Router 6 initially omitted them. They show how Solid’s approach can define multiple route patterns within a single configuration object, allowing multiple URL structures to point to the same component instance.

Next, the team highlights route scoring, describing how the router calculates which route definition matches best. This eliminates the need for ordering routes carefully or relying on “exact” matches. They also reference grouping routes under a shared layout, demonstrating how child routes automatically inherit or compose layout components. Such capabilities provide a cleaner structure when building complex apps with repeated page sections.

### 1:30:00 - 1:36:00 Protected Routes and Authorization Wrappers

Here, they examine a common use case: protecting certain areas of an application behind authentication gates. The demonstration shows how developers can wrap multiple children within a special “ProtectedRoute” component, which checks auth status and redirects to a login page if the user is not authenticated. The speaker explains that because each route is simply an object returning data or layout definitions, a small snippet can handle authorization logic at a shared level.

They stress that this approach prevents repeated checks in each child route, offering a single place to handle redirection. They also mention the potential for asynchronous checks—like verifying tokens or session data—by using Suspense or parent route data. This architecture keeps consistent user flows while centralizing rules that define who can access a particular page.

### 1:36:00 - 1:42:00 Parent and Child Data Interdependence

Next, the conversation delves into ways child routes can access data loaded at a parent route level. They point out that parent route data can pass down signals via a “useRouteData” hook or by referencing “parentData.” This means if a parent fetches a user record, a child route can reuse that record rather than making a second network call. Though they advise caution about introducing unnecessary waterfalls, they also see value in consolidating resource creation for nested pages.

By describing how data flows downward through multiple layers, they convey that Solid’s fine-grained approach avoids typical re-renders. Each child route only updates if its specific data changes. This fosters both performance optimizations and logical code organization, as developers can keep domain-level data at higher levels and rely on consistent signals throughout sub-routes.

### 1:42:00 - 1:48:00 Actions, Mutations, and the Fine-Grained Approach

Focusing on potential expansions, the host references how React and some frameworks differentiate loaders from actions. They explain that Solid avoids this approach, instead favoring granular resources that can be updated independently. This means a single page might have multiple “createResource” calls for different data segments or user-initiated actions. The speaker shows how each resource can be a small slice of logic, avoiding the large, monolithic “loader” concept.

They also mention how advanced mutation handling might remain a meta-framework concern. By not folding everything into the router, Solid can maintain a simpler, more composable core. This approach resonates with patterns from libraries like React Query and TRPC. The final note is that Solid Start, the forthcoming meta-framework, leverages these principles to supply a flexible server-client data flow, though full details await future updates.

### 1:48:00 - 1:54:00 The Road to File-Based Routing

During these six minutes, the host teases how file-based routing can simplify developer workflows, even while using nested routing concepts. By generating route objects from file structures, developers skip writing repetitive boilerplate. Solid’s approach merges seamlessly with the existing router, letting users define advanced nesting or parallel data fetching in straightforward file hierarchies.

They acknowledge that frameworks like Next.js, SvelteKit, and Nuxt have popularized file-based routing. Solid aims to replicate that convenience while preserving fine-grained reactivity. This highlights a major impetus behind the upcoming Solid Start release. By bridging known patterns with the unique qualities of Solid, the host expects a powerful developer experience that eliminates the usual friction around advanced routing features.

### 1:54:00 - 2:00:00 Balancing MPA and SPA Approaches

Here, they address the challenge of bridging multi-page apps (MPAs) and single-page apps (SPAs). The speakers talk about wanting the best of both worlds: minimal JavaScript usage like in an MPA, but fluid transitions typical of SPAs. They observe that certain new frameworks attempt to load only partial scripts, performing progressive or partial hydration. This approach can reduce overhead but remains tricky to perfect.

They describe older solutions like TurboLinks from Rails, acknowledging that the concept of reusing layout sections between requests has existed for years. Yet the modern push toward specialized reactivity patterns can amplify those ideas, producing more seamless user experiences. The host anticipates that final answers will require not just a router solution but also consistent patterns for streaming, data prefetching, and incremental hydration.

### 2:00:00 - 2:06:00 Prototype for Hybrid Routing: Minimal Client JavaScript

Showcasing an experimental build, the presenters examine how Solid’s router can selectively hydrate only the routing logic on the client. In that prototype, the server sends HTML for each route, but the client intercepts navigation clicks, updating just the changed portion of the DOM. With only around 1.4 KB of JavaScript loaded, the user experiences fast transitions without a full page reload.

They clarify, however, that the demonstration doesn’t include advanced state sharing or partial hydration complexities. It’s a first step to illustrate feasibility: the router can function in a near-MPA setup, only mounting critical logic client side. Achieving robust interactions with persistent data or shared global state would require deeper hydration. Still, this small example underscores the potential for frameworks like Solid to unify both MPA and SPA features.

### 2:06:00 - 2:12:00 Limitations and Challenges in Hybrid Models

This segment scrutinizes the shortcomings of the minimal-JS approach. The host explains that while simple layouts can do well with near-zero client code, real-world apps typically need global state, complex user interactions, or push updates that can’t be handled purely server side. They suggest that additional code for context providers or advanced data reactivity might offset any saved kilobytes.

They also observe that bridging these patterns with streaming or partial hydration complicates the picture. As soon as multiple user actions or dynamic app sections become necessary, the approach demands robust client code. Even so, the prototype stands as an enlightening proof of concept. It indicates that Solid can deliver truly minimal footprints when the use case aligns—though full-blown frameworks likely require more than a single kilobyte of JavaScript.

### 2:12:00 - 2:18:00 Coordinating with Other Framework Teams

The host reflects on how routing breakthroughs often come from collaboration across projects. They name frameworks like Astro, Qwik City, and Next.js, all exploring fresh routing paradigms. Noting that each tool invests differently in islands architecture, streaming partials, or resumable components, the host underscores the importance of standardizing approaches.

By sharing prototypes and design patterns, the broader ecosystem can develop best practices that eventually filter down to all frameworks. The host reiterates a desire for more developers to join discussions about advanced routing. They mention that while progress might be uneven, consistent communication helps unify efforts. The ultimate goal: a more cohesive sense of how to handle SSR, hydration, data loading, and transitions under a single conceptual umbrella.

### 2:18:00 - 2:24:00 Revisiting the Solid Router’s Evolution

As the conversation loops back to the progress made with Solid Router, the participants recount the incremental changes in recent releases. They note the significance of decoupling anchor tags from the rest of the framework, allowing immediate linking logic without waiting for hydration. This departure from older patterns fosters a smoother bridging of SSR and client-side routing, reminiscent of strategies seen in SvelteKit or other advanced frameworks.

They also highlight that these incremental updates accumulate into a comprehensive solution. Each small feature—optional parameters, route scoring, data function chaining—aims to refine developer experience. The host sees these refinements as stepping stones to a future where routing automatically optimizes for performance and minimal code without sacrificing advanced use cases.

### 2:24:00 - 2:30:00 SSR Performance Considerations and Bun

Turning to performance, the speakers address how server runtimes like Bun may affect SSR speed for frameworks such as Solid. They discuss that although performance improvements in a runtime can yield big gains, results rarely multiply linearly. If a particular step in rendering is significantly accelerated, a different bottleneck may still limit the overall benefit. Nonetheless, they remain open to exploring Bun or similar tools to reduce time on the server side.

They also mention that cost savings and responsiveness might matter more for large-scale applications handling many requests, or for those running in distributed edge environments. Even if Solid is already efficient, combining it with a faster runtime can help push boundaries further. In short, runtime optimizations and framework-level performance strategies complement each other but require careful measurement to gauge real-world impact.

### 2:30:00 - 2:36:00 Reflecting on Collaboration and Community Feedback

Here, the host describes the joys and challenges of open-source work. They express gratitude for the synergy between core maintainers and contributors, referencing how community patches or feature requests often spark major improvements. They also acknowledge that it can be daunting for new contributors to jump into a sophisticated codebase. Encouraging smaller pull requests or direct discussions in chat, they believe these incremental steps grow both user confidence and the project’s long-term viability.

They then outline the importance of bridging time zones and schedules, given that many open-source communities are global. Regular streams, recorded discussions, and timely documentation updates help keep everyone aligned. Indeed, the earlier remarks about advanced routing features highlight how a single request can blossom into an extensive conversation that benefits the entire user base once the changes are published.

### 2:36:00 - 2:42:00 Expanding on Fine-Grained Reactivity as a Core Pillar

In this time slot, the speakers reiterate that Solid’s design is rooted in fine-grained signals, which stands in contrast to frameworks reliant on entire component re-renders. They explain that everything else, from routing to streaming SSR, is built with these signals in mind. The approach can yield huge performance gains but requires careful library architecture to avoid unexpected triggers.

They also observe that because of this reactivity model, certain patterns like optional route parameters or partial code splitting become surprisingly easier. Each component or route can track exactly the signals it uses. This specificity avoids overhead from broad re-renders. However, the host also notes that adopting these patterns means a mental shift for developers used to reactive systems that rely on hooks or watchers, requiring some rethinking of best practices.

### 2:42:00 - 2:48:00 Comparisons to React Server Components and SSG

Here, the team explores parallels between Solid’s SSR approach and React’s server components. They note that React’s approach aims to skip large parts of the client bundle by doing more work server side. While Solid’s data functions and partial hydration can produce similar results, the speakers see differences in implementation details and developer ergonomics. They mention that React’s concurrency model can influence how data streams in, whereas Solid’s synchronous rendering avoids certain complexities.

At the same time, they acknowledge that server-side generation (SSG) remains a popular approach for static sites. Combining SSG with partial or selective hydration can lead to minimal overhead. They stress that the choice between SSR, SSG, or client-only rendering depends on the app’s nature, whether it’s heavily interactive or mostly content-driven. Solid aims to support each scenario gracefully, though the ideal solution for tomorrow’s complex applications might still evolve.

### 2:48:00 - 2:54:00 Wrapping Up Advanced Routing and Q&A

As the session nears its final stretch, they circle back to advanced routing strategies, encouraging questions from the live chat. Listeners inquire about nuanced scenarios: bridging authentication with streaming or merging large caches across route boundaries. The hosts give reasoned answers, indicating that many real-world complexities revolve around how data is cached and revalidated. They remind viewers that while the official router focuses on minimal overhead and powerful patterns, certain specialized caching or session logic might live in dedicated libraries.

They also restate the importance of covering common use cases—like protected routes—within the core router docs, since developers routinely face these scenarios. Finally, they reflect on how these concepts tie into the upcoming Solid Start meta-framework, which will unify routing, data loading, and SSR in a more prescriptive manner for those who want a complete solution.

### 2:54:00 - 3:00:00 Looking Ahead: Solid Start and Other Framework Streams

In these minutes, the host previews upcoming content. They plan to appear on external streams discussing the rationale behind creating new frameworks. Meanwhile, the following week’s stream will dive into Qwik City, showcasing how Qwik’s meta-framework handles routing and SSR. This cements the notion that cross-project collaboration is a central theme of the modern JavaScript ecosystem.

They also promise deeper dives into Solid Start itself, acknowledging that progress has been more methodical than some might expect. Releasing stable, polished tools takes time, and the host wants to ensure that each piece—from file-based routing to advanced actions—performs consistently. With so many threads converging, there’s an eagerness to roll out content demonstrating how Solid Start harnesses the best routing ideas discussed throughout the session.

### 3:00:00 - 3:06:47 Closing Remarks, Acknowledgments, and Future Conversations

In the final chapter, the hosts thank participants for a vibrant, extended conversation covering nested routing, data management, SSR, and performance. They note the synergy of thoughtful questions from the chat, which spurred nuanced explanations. The main takeaways center on how Solid’s router merges proven patterns from React Router, Ember, and others, then refines them with fine-grained reactivity and concurrency features.

They encourage viewers to follow upcoming streams, both on their own channel and those of colleagues in the broader ecosystem. A reference is made to exploring parallel data fetching, bridging MPA and SPA patterns, and clarifying advanced SSR techniques. With final goodbyes, the discussion concludes on an optimistic note, reflecting the ongoing excitement for how routing and state management solutions evolve under Solid’s design philosophy.