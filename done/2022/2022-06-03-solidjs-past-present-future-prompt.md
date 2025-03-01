---
showLink: "https://www.youtube.com/watch?v=dOgnQ9SuKYk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS: Past, Present, Future"
description: ""
publishDate: "2022-06-03"
coverImage: "https://i.ytimg.com/vi/dOgnQ9SuKYk/maxresdefault.jpg"
---

## Episode Description

An overview of SolidJS's early development, performance optimizations, community growth, and future roadmap for reactive web applications, all through the lens of its creator’s experiences.

## Episode Summary

This conversation traces the origins and evolution of SolidJS from its experimental roots to its current status as a high-performance framework with a growing community. The speaker recounts experimenting with various reactive approaches and the decision to incorporate JSX, revealing the challenges of balancing flexibility and speed. He highlights the significance of open-source collaboration, describing how community-driven improvements helped SolidJS refine its server-side rendering and hydration techniques. The discussion also covers the emergence of new ideas like resumability and partial hydration, setting the stage for future iterations. Ultimately, this conversation underscores the framework’s commitment to preserving developer freedom while pushing the boundaries of performance and flexibility. SolidJS embraces both traditional runtime strengths and forward-looking compilation strategies, offering a distinctive path for building responsive, efficient web applications.

## Chapters

### 00:00 – 06:00 Introduction and Early Motivation

In this opening segment, the speaker sets the stage by describing how a personal project—creating a wedding website—sparked interest in simplifying the process of building web applications. He outlines the limitations of then-popular frameworks and libraries, including KnockoutJS, emphasizing the need for a more intuitive, performance-focused approach. By touching on CoffeeScript and early architectural experiments, he shows how curiosity and practical necessity guided him to explore fundamental reactivity patterns. This portion stresses the importance of learning from existing solutions while keeping an eye on new possibilities.

The speaker also provides a sense of context for why he started streaming about SolidJS’s broader story, aiming to bring clarity to the framework’s origins. He explains that many of the insights and development decisions emerged from real-world experimentation, not purely theoretical or academic exercises. The desire to balance ease of use with raw performance sets the tone for the rest of the conversation, as he looks back at the surprising twists that would shape SolidJS over time.

### 06:00 – 12:00 Exploring Early Prototypes

During these minutes, the focus shifts toward the speaker’s initial forays into reactive programming, highlighted by his attempts to build something akin to a personal framework layered on top of KnockoutJS. He mentions tinkering with mutable and immutable approaches, toggling between different path-based and proxy-driven techniques. Detailed benchmarks—like spinning circles on a web page—demonstrate the intense performance goals that led to many of SolidJS’s core ideas. This section underscores the speaker’s relentless pursuit of speed, even at the earliest stages.

He also discusses how class-based components and two-way data binding influenced early prototypes. Through trial and error, he realized the complexities of deep nesting and the overhead of certain techniques. The conversation delves into manual template parsing strategies and how that exploration helped refine his understanding of the potential and limits of reactive rendering. This back-and-forth experimentation laid the groundwork for novel ideas around partial updates and the seeds of the eventual store mechanism.

### 12:00 – 18:00 Transitioning Away from Two-Way Binding

Here, the speaker recalls the critical point when he decided to remove two-way binding from his early framework attempts. This change, while seemingly small, opened new possibilities for more predictable state management and a clearer mental model. He touches on the difficulties of cleaning up after reactive proxies and the importance of disposing of subscriptions correctly. The conversation reveals that direct mutation and path-based updates carried hidden maintenance costs that became clearer over time.

By stepping away from two-way binding, the project gained a more intentional structure. This shift showed how rethinking common patterns could streamline the framework and improve reliability. Though some performance overhead disappeared, new challenges arose in designing a predictable API that felt good for developers. These reflections illustrate how seemingly minor architectural decisions can have profound ripple effects, shaping everything from library ergonomics to community acceptance.

### 18:00 – 24:00 Early Benchmarks and Knockout Influences

In this segment, the speaker turns his attention to testing performance head-to-head against established libraries like Knockout. He walks through how he used specific benchmarks, including the popular JS Framework Benchmark, to measure the trade-offs of different reactive strategies. Observing that Knockout was already strong in certain areas, he adapted and refined his own proxy-based solution to match or exceed those metrics. This phase spotlights the obsession with micro-optimizations that would become central to SolidJS’s identity.

While exploring the limits of Knockout’s reactivity model, the speaker also explains how early experiments exposed difficulties with large-scale data updates. Handling deep nesting, complex component hierarchies, or advanced routing frequently revealed unforeseen bottlenecks. Throughout this phase, a blend of admiration for Knockout’s strengths and awareness of its shortcomings fueled incremental improvements in his own approach, gradually inching toward the clarity and performance that SolidJS is known for today.

### 24:00 – 30:00 Introducing Compiled Templates and Class Components

During these minutes, the speaker highlights how he wrote custom parsing tools that would effectively compile templates into minimal DOM instructions. Originally inspired by libraries like Riot, he explored ways to reduce overhead by pre-processing HTML, mapping expressions, and then wiring them to deeply nested proxies. This technique gave a glimpse of the compiler-oriented future, even while the final iteration of SolidJS would not rely as heavily on complex compilation steps.

Concurrently, the conversation features a look at class-based components, an approach once seen as the most logical path for well-structured code. The speaker recalls frustration with how classes worked in practice, especially when layered with custom proxy systems. He sought direct solutions for routing and state synchronization, illustrating a transition away from purely object-oriented designs. This chapter underlines the tension between intuitive patterns and the realities of performance constraints that shaped SolidJS’s evolving architecture.

### 30:00 – 36:00 Balancing Mutable vs. Immutable State

At this point, the speaker focuses on the tension between mutable and immutable state management. Initially, he attempted multiple strategies, including deep proxy traps and immutability with cloning or reconciling changes. He recognized that while mutable stores offered impressive speed, they introduced complexities in disposal and debugging. Immutable strategies, reminiscent of libraries like Immer, brought clarity but at the cost of raw performance.

This discussion makes clear that SolidJS did not arrive at its store and signal pattern overnight. Instead, it resulted from carefully balancing the simplicity of object-based reactivity with the robust guarantees of functional approaches. Ultimately, the speaker saw that providing an explicit set function was a cleaner separation of concerns. This insight paved the way for a user-friendly API—one that was still capable of powering the remarkable speed benchmarks SolidJS would achieve later on.

### 36:00 – 42:00 Introducing JSX and Shifting Paradigms

Here, the speaker shares how he integrated JSX support and why that decision became a turning point for the project. By moving from string-based templating to a Babel transform that could handle JSX, the framework became more approachable to developers experienced with React. Yet behind the scenes, the code generation was anything but ordinary, producing fine-grained, reactive bindings rather than a virtual DOM. This period marked a cultural shift, as JSX carried both familiarity and skepticism within the JavaScript community.

The conversation also touches on the trial-and-error process of reading ASTs with Acorn or Babel, piecing together compiled output that would match real-world use cases. Although tricky to implement, this new flow validated that JSX could be statically analyzed and turned into efficient DOM operations. It signaled a move away from older CoffeeScript prototypes toward something modern that could engage a broader audience, thus propelling the framework closer to mainstream recognition.

### 42:00 – 48:00 First Open Source Release and Initial Community Reaction

Moving into this section, the speaker recounts the moment SolidJS became publicly available and how it integrated into the JS Framework Benchmark for the first time. These early releases showcased competitive performance results, grabbing the attention of performance enthusiasts. Yet the path to gaining wider acceptance was bumpy. Skeptics questioned the library’s claims, and skeptics from other frameworks often doubted whether SolidJS could really be both fast and maintainable.

He explains that the initial community was small, but the promising benchmark numbers sparked curiosity. People started testing it in their own projects, prompting the speaker to refine the codebase for broader, real-world usage rather than just micro-benchmarks. During this period, the library grew in confidence and clarity, honing an API that balanced the directness of signals with the approachability of a React-inspired syntax, laying the foundation for further community-driven evolution.

### 48:00 – 54:00 Overcoming Skepticism and the Role of Benchmarks

In these minutes, the speaker dives into the highs and lows of trying to spread the word about SolidJS through public forums, such as Twitter, Hacker News, and Reddit. He reveals how early skepticism from influential JavaScript voices served as a kind of stress test for the project’s ideas. Benchmark results, especially the JS Framework Benchmark, helped validate the approach, but detractors still emerged, either citing concerns about maturity or questioning the real-world benefits of micro-optimizations.

This segment underscores how performance numbers alone can be both a boon and a burden. Although speed draws attention, it can also invite claims that optimizations are “cheats” or corner-case scenarios. Yet the speaker explains that real use cases inspired his optimization strategies from the start. He highlights how engaging with critique often led to deeper insights, pushing SolidJS to refine its architecture and solidify a developer-focused story beyond simple raw performance.

### 54:00 – 1:00:00 Shaping the Reactive Core and Abandoning Class APIs

Here, the speaker discusses the pivotal move away from class components, transitioning toward a design that placed signals and effects front and center. He highlights how React Hooks’ introduction validated certain choices and accelerated the refinement of SolidJS’s own API for tracking state updates. By adopting a more functional style, SolidJS reduced layers of abstraction and made the workflow more intuitive, bridging the gap between the old class-based model and the fresh, signal-focused approach.

Abandoning classes also meant rethinking life cycle concepts. Instead of relying on object methods, developers could define behavior through composable primitives. This paradigm removed hidden states and unpredictable side effects, making the framework’s performance advantages more accessible. The speaker also acknowledges that dropping classes wasn't universally welcomed; some developers preferred the traditional structure. Nonetheless, this design pivot created a more streamlined, maintainable codebase and set the tone for future enhancements.

### 1:00:00 – 1:06:00 Community Growth and Logo Redesign

In this segment, the speaker highlights a turning point in SolidJS’s community engagement. Recognizing that even a high-performance library needs a relatable brand, he asked for help in designing a new logo. This simple request brought fresh contributors, including a community manager, and prompted a move to Discord. As more developers joined, collaborations stretched beyond design tasks to contributions on docs, ecosystem libraries, and real-world examples.

He notes that broadening community participation wasn’t just about aesthetics. It showed how shared ownership made SolidJS more than a solo experiment. Rapidly, the user base grew, encouraging others to write their own libraries and expansions. This shift from quiet internal work to public collaboration spurred new ideas for routing, server rendering, and more. The team approach sparked a sense of momentum, forming the backbone for subsequent waves of innovation within the project.

### 1:06:00 – 1:12:00 Introducing Solid Router and Ecosystem Libraries

During these minutes, discussion turns to the early steps in building out a full ecosystem, beginning with the first iteration of a router inspired by React Router. The speaker recalls how important routing was for developer adoption, as single-page application needs had grown more complex. While the initial attempt borrowed heavily from React-based patterns, continued experimentation led to nested routing and parallel data loading, all handled through reactivity rather than a virtual DOM.

He also underscores how other contributors started bringing their own ideas and utilities into the SolidJS fold. Whether building real-world demos or crafting specialized data libraries, these efforts illustrated the flexibility of the framework’s core architecture. The speaker expresses gratitude that, unlike in prior years, SolidJS no longer had to solve every challenge alone. Having an expanding network of extensions validated the potential for large-scale, production-ready apps to flourish on top of Solid’s reactive foundations.

### 1:12:00 – 1:18:00 Shift to Server-Side Rendering Strategies

In this chapter, the speaker describes the impetus to expand SolidJS beyond client-only rendering. Noting how older frameworks, such as Marco, had already demonstrated streaming and partial hydration, he set out to give SolidJS robust server-side capabilities. He shares how initial attempts involving JS DOM or Link DOM were slow and clunky, prompting a deeper dive into generating simple strings rather than reactivity-laden structures for the server output.

This conversation illustrates how focusing on incremental improvements made it feasible for SolidJS to handle server rendering at scale. The speaker explains that once he separated the purely reactive bits from the rendering pipeline, performance gains began to surface. As server rendering became more streamlined, the framework's potential audience widened, particularly among those who valued SEO and load time benefits. This step foreshadowed the advanced hydration techniques that would later become a hallmark of the project.

### 1:18:00 – 1:24:00 Achieving Streaming and Edge Deployments

Here, the speaker recalls the breakthroughs that enabled SolidJS to perform streaming on platforms like Cloudflare, Vercel, and eventually Netlify. By aligning with the Suspense model, the framework could orchestrate parallel data fetching on the server, sending chunks to the client progressively. Listeners learn about the challenges of translating dynamic states into streaming chunks that remain synchronized once the JavaScript takes over in the browser.

This section highlights the allure of streaming in modern web development: it combines fast initial paint with interactive readiness for complex data. The speaker is candid about how these features took time to refine, involving both internal experimentation and community feedback. Collaboration with hosting providers also played a role, ensuring that SolidJS could deliver its streaming features on serverless or edge infrastructures. The approach demonstrated SolidJS’s adaptability to next-generation hosting environments.

### 1:24:00 – 1:30:00 Encounters with Skeptical Audiences Online

During this interval, the speaker addresses the challenges of attracting broader adoption in a skeptical ecosystem. Early interactions on platforms like Hacker News often featured dismissive remarks, with some commenters suggesting it was futile to attempt a new JavaScript framework. Despite the naysayers, the speaker emphasizes how these critiques helped fine-tune messaging and highlight weaknesses. Engaging directly in public discussions clarified SolidJS’s value proposition for both critics and supporters.

This portion conveys the emotional toll and the resilience needed to champion an emerging technology in crowded spaces. While some recognized the potential in raw benchmarks and thoughtful design, others cited concerns about maturity, ecosystem depth, or the need for a “killer feature.” Still, the speaker views these dialogues as productive feedback loops, shaping better documentation, more comprehensive examples, and stronger community involvement, ultimately fortifying SolidJS’s standing.

### 1:30:00 – 1:36:00 1.0 Release and the Turning Point

Here, the conversation spotlights a major milestone: SolidJS reaching version 1.0. Despite many underlying concepts being stable for years, this official release symbolized readiness for real production use. Almost overnight, developer sentiment shifted—people became more open to evaluating a framework that looked polished and complete. The speaker recounts how the 1.0 label signaled not just technical maturity but also a commitment to backward compatibility and long-term support.

This moment catalyzed significant momentum: more contributors flocked to the project, and the broader JavaScript community began citing SolidJS in discussions about next-generation performance strategies. The speaker notes that while 1.0 included essential features like robust SSR, the real impact lay in public perception. It became easier to position SolidJS as an established choice rather than a perpetual “research project,” creating a surge in interest and real-world experiments.

### 1:36:00 – 1:42:00 Reflecting on SolidJS’s Unique Position

In this segment, the speaker explores how SolidJS sits within a matrix of established frameworks like React, Vue, Angular, and emerging ones like Svelte and Qwik. He distinguishes SolidJS by pointing to its fine-grained reactivity and lack of reliance on a virtual DOM, arguing that it offers a different balance of values than frameworks that revolve around components. This approach has implications for scaling, code organization, and performance tuning.

The speaker references how other frameworks have begun to adopt some concepts that SolidJS pioneered, such as partial hydration and granular updates. While acknowledging that each community has distinct philosophies, he suggests that SolidJS can coexist with other advanced approaches without mimicking them outright. Drawing parallels to past shifts in front-end practices, he highlights how incremental movement toward certain reactive patterns indicates a healthy exchange of ideas in the broader ecosystem.

### 1:42:00 – 1:48:00 Ongoing Dialogue with Other Framework Authors

During these minutes, the speaker talks about how open lines of communication with authors of frameworks like Marco, Qwik, and Svelte informed SolidJS’s development. He describes exchanging ideas about compilation approaches, micro-optimizations, and potential alternatives to typical hydration. These interactions underscored that no single solution dominates every use case, but everyone can learn from each other's innovations.

He provides examples of how cross-pollination accelerates progress: from streaming techniques borrowed from older frameworks to new concurrency patterns in modern libraries. Instead of creating rivalry, these conversations stimulate continuous refinement. The speaker is candid about the importance of reading code from other projects, benchmarking them under similar conditions, and translating their insights to improve SolidJS. This willingness to share ensures that the community as a whole advances front-end technology collectively.

### 1:48:00 – 1:54:00 The Role of Community-Driven Enhancements

Here, the speaker highlights how crucial user contributions have become, particularly in areas like server-rendering optimizations. He recounts a notable scenario in which a community member identified a slow escape algorithm during string concatenation. Fixing this single bottleneck delivered significant performance gains, showcasing the power of open-source collaboration. This example illustrates that beyond frameworks themselves, incremental improvements can be decisive.

He also talks about the synergy between maintainers and the broader ecosystem, where specialized libraries and adapter packages appear organically. Once fundamental performance needs are met, innovators can focus on polishing developer experiences or building new features. This chapter underscores that SolidJS is no longer a lone developer’s experiment—it has blossomed into a robust community-led initiative, constantly evolving through shared ingenuity.

### 1:54:00 – 2:00:00 Influences on Other Projects and Partial Hydration

During this portion, the speaker delves into examples of how SolidJS has subtly influenced other frameworks. From the idea of skipping components altogether to the possibility of bridging reactivity with advanced compilation, the conversation touches on new patterns that might soon become mainstream. References to Vue’s exploratory “vapor” mode and Qwik’s approach to progressive hydration underscore how fine-grained reactivity has gained broader traction.

He observes that while frameworks like React remain steadfast in their philosophies, other libraries appear more willing to rethink fundamental concepts. This signals a wave of emerging solutions that draw on SolidJS’s success with signals, minimal overhead, and concurrency. Though no single library dictates the future, the speaker takes pride in seeing SolidJS’s breakthroughs resonate, expanding the community’s collective imagination for building responsive, efficient web apps.

### 2:00:00 – 2:06:00 Future Directions: Resumability and New Reactivity

In this chapter, the focus shifts toward the next frontier for SolidJS: designing a reactivity system that supports serialization and deserialization of state, enabling resumable hydration and more advanced dev tooling. The speaker explains why the ability to “pause” and “resume” state on different platforms—edge, server, client—opens up new possibilities for scaling apps without re-running expensive code. He outlines the need for fine-tuned concurrency and how forging multiple forks of state can handle complex transitions more gracefully.

These concepts extend beyond simple performance improvements, touching on better hot-module reloading and deeper debugging capabilities. The speaker acknowledges the complexity: building a more flexible reactive core means rethinking how signals and memos evaluate. However, he believes that the continued focus on fine-grained rendering positions SolidJS to innovate faster than solutions tied to heavier compilation or big monolithic design patterns.

### 2:06:00 – 2:12:00 Solid Start Beta and Server-Centric Patterns

Here, the speaker reveals his excitement about Solid Start, a project aiming to merge server-first concepts with SolidJS’s reactivity. He draws parallels to Remix-style routing and React Query, highlighting that it offers the convenience of single-codebase data loading while maintaining strong performance benefits. Features like progressive form enhancement and reliable server state transitions signal that SolidJS is positioning itself for modern app workloads.

He envisions a tight integration with streaming and edge deployments, where Solid Start ensures data flows seamlessly from server to client. This approach frees developers to place more logic on the server, speeding initial page load and simplifying API boundaries. The speaker teases that once documentation and final polishing align, Solid Start’s beta release will unlock new creative options for building advanced web experiences, leveraging everything learned about concurrency and reactivity thus far.

### 2:12:00 – 2:18:00 The Balance Between Compiler and Runtime Approaches

During these minutes, the speaker addresses the ongoing discussion about whether frameworks should lean on compilers or rely primarily on runtime logic. He contrasts SolidJS’s approach to that of frameworks like Svelte or Marco, which extensively analyze and transform code. While acknowledging that heavy compilation can yield performance gains, he emphasizes SolidJS’s preference for retaining escape hatches, ensuring that developers can directly manipulate the DOM when needed.

He clarifies that a minimal Babel transform for JSX is not the same as a deep code analysis that dictates an app’s architecture. SolidJS positions itself as flexible enough for a range of patterns, from classic single-page apps to partial hydration experiments, without cornering developers into strict design rules. The speaker suggests that while he admires advanced compilation strategies, SolidJS will keep runtime reactivity at its core to preserve freedom and simplicity.

### 2:18:00 – 2:24:00 Building Teams and Working Groups for Version 2.0

In this segment, the speaker outlines a collaborative roadmap for SolidJS 2.0, pointing to the establishment of specialized teams or “working groups.” These groups will tackle essential challenges like concurrency, reactivity serialization, and dev tools. By decentralizing these tasks, the project can move faster, drawing on the expertise of community members who have been experimenting with custom libraries or forging advanced server-rendering solutions.

He reiterates that this structured approach is a step up from earlier days when development often happened in silos. The speaker believes that well-defined working groups will keep SolidJS nimble, ensuring that new ideas funnel into the mainline project without being blocked by a single gatekeeper. This plan marks a shift in governance, showing that SolidJS’s next phase hinges on the collective intelligence of its growing user base and contributor ecosystem.

### 2:24:00 – 2:30:00 Serving Multiple Paths: Apps and Islands

During these minutes, the conversation explores how SolidJS can serve both large-scale app development and the budding popularity of islands architecture in static site generators. The speaker reveals that while advanced SSR remains a focal point, some enthusiasts are already using SolidJS within Astro or similar setups for partial client hydration. He notes that even though the official solution is still evolving, the underlying fine-grained reactivity fosters an easier path to incremental updates.

This segment highlights how the framework’s performance fundamentals make it well-suited for diverse patterns. Instead of forcing every feature into a single paradigm, the speaker envisions SolidJS as a go-to engine that can integrate with whichever approach suits a project’s domain. From complex multi-page server transitions to quick client interactions, the reactive core remains consistent and adaptable, echoing the philosophy of meeting developers where they are.

### 2:30:00 – 2:36:00 Roadmap Priorities: Hydration, Data, and Concurrency

In this chapter, the speaker pinpoints the three major technical focus areas before SolidJS can fully embrace its next wave of features: refined hydration, robust data-loading solutions, and concurrent rendering improvements. The mention of concurrency underscores that while SolidJS can already handle partial concurrency, unlocking multiple concurrent forks requires deeper changes to the reactive engine. These enhancements will unify everything from HMR experiences to seamless transitions.

He underscores that simplifying complex tasks—like selectively hydrating only certain portions of the DOM—will transform developer workflows. Coupled with an evolved data-fetching layer, the synergy between server, edge, and client code becomes more fluid. By circling back to fundamentals, SolidJS ensures its solutions stay true to their original aims of performance and clarity, extending them with minimal friction. This forward-looking plan aligns with a vision of continued experimentation and community-based iteration.

### 2:36:00 – 2:42:00 Embracing Community Ecosystem Growth

Here, the speaker reiterates the importance of an expansive ecosystem, mentioning popular component libraries that have already appeared in SolidJS form, from material UI implementations to advanced table and virtual list utilities. These libraries demonstrate that the community’s energy spans both style and functionality, providing real production-ready solutions. The conversation also touches on how contributions are validated through consistent benchmarks, ensuring each new layer meets the framework’s high performance bar.

He points out that while SolidJS has always excelled at being a minimal runtime, it’s the growing library scene that helps it serve a wide range of use cases. From design systems to complex data grids, each offering proves that SolidJS can anchor large-scale projects without forfeiting simplicity. This synergy shows that the project’s open nature thrives when experts can craft specialized packages, reinforcing the idea that community is integral to SolidJS’s long-term viability.

### 2:42:00 – 2:48:00 The Bigger Picture: MPA vs. SPA Convergence

During these minutes, the speaker reflects on how modern web development increasingly blurs the lines between multi-page and single-page applications. He suggests that advanced hydration strategies, streaming, and concurrency are converging to form a “best of both worlds” scenario. Traditional SPAs used to require heavy JavaScript up front, but with server-side streaming and partial hydration, developers can ship code more judiciously.

He views SolidJS as sitting at the crossroads of these evolutions, ready to supply a highly optimized mechanism for updating UI without overshadowing more classical page transitions. By eliminating the bloat historically associated with large client bundles, SolidJS fosters experiences that feel both immediate and resource-efficient. The conversation notes that these changes reflect a wider shift in the ecosystem, as more frameworks experiment with bridging the gap between MPA simplicity and SPA interactivity.

### 2:48:00 – 2:52:13 Closing Thoughts and Upcoming Adventures

In the final segment, the speaker wraps up by reiterating his plans for a short hiatus to travel, noting the importance of recharging before tackling the next wave of SolidJS features. He voices confidence in the community’s ability to maintain steady progress on projects like Solid Start and new documentation resources. This concluding note emphasizes the project’s transition into a collective effort rather than a single developer’s labor of love.

He signs off with gratitude for everyone who has contributed to SolidJS or offered feedback—whether encouraging or critical. Looking ahead, the speaker hints that fresh streaming approaches, concurrency strategies, and a refined reactivity engine are all on the horizon. He remains convinced that by preserving developer flexibility and focusing on performance, SolidJS will continue to thrive as a unique and influential option in the ever-evolving JavaScript ecosystem.