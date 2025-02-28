---
showLink: "https://www.youtube.com/watch?v=yAUlw5GL7jw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS NYC Meetup Dec 2022"
description: ""
publishDate: "2022-12-14"
coverImage: "https://i.ytimg.com/vi/yAUlw5GL7jw/maxresdefault.jpg"
---

## Episode Description

SolidJS experts discuss advanced strategies for building reactivity-driven web apps, exploring foundational signals, server rendering, partial hydration, and a lively community Q&A.

## Episode Summary

This session begins with a brief introduction to the meetup and a high-level overview of SolidJS, highlighting its unique reactivity model that avoids unnecessary re-renders. The presentation then explores the framework’s progressive approach to server-side rendering (SSR), including streaming and partial hydration. Along the way, speakers address practical aspects such as handling data with nested routing, deploying on edge platforms, and using new server-oriented primitives. The conversation transitions into a deeper examination of how JSX transforms work for components in Solid, emphasizing how signals flow through props without needing to re-run entire components. Finally, an extensive Q&A covers best practices, explains how Solid compares to other frameworks like Svelte, and underscores the evolving vision behind Solid’s meta framework, SolidStart. Throughout, the session underscores how fine-grained reactivity, clever design patterns, and community-driven tools converge to create a performant and accessible developer experience.

## Chapters

### 00:00 - 06:00: Opening and Introductions

In these first minutes, attendees gather in the venue and the host welcomes everyone to the meetup. There is a friendly exchange as they set up a live stream, ensuring that remote viewers can follow along. Eric Goldstein, the principal engineer at Babbel, expresses excitement about hosting the SolidJS core team members. Familiar faces reunite after some time apart, reflecting the supportive nature of developer communities and the enthusiasm for in-person events. The mood is casual yet focused, with everyone anticipating the talks that are about to begin.

As the session proceeds, Eric introduces himself and outlines the schedule, highlighting the three presentations planned for the night. He hints that the content will revolve around advanced topics in SolidJS, including new primitives and performance optimizations. After acknowledging the presence of both new and returning attendees, Eric hands the stage over to David DiBiase. Dave’s role in the SolidJS ecosystem is teased, and the atmosphere is set for a deep exploration of how Solid functions under the hood.  

### 06:00 - 12:00: SolidJS Overview by David DiBiase

Dave begins his portion by succinctly explaining SolidJS and the reasons behind its popularity. He references the project’s accolades, including the InfoWorld Bossie Award and the Open Source Awards for Breakthrough of the Year, underscoring the community’s validation of Solid’s unique value. He mentions how Solid’s foundations were established by Ryan Carniato, tying in Ryan’s background with Marco.js and Netlify. Dave’s introduction highlights key features: tiny bundle size, rapid performance, and a strong ecosystem of sponsors. Listeners learn how SolidJS has attracted a diverse array of supporters, from large cloud providers to enthusiastic individual contributors.

He then emphasizes that while SolidJS appears React-like on the surface, its underpinnings are fundamentally different. Dave highlights the benefits of using fine-grained reactivity to avoid unnecessary re-renders. He touches on the significance of building smaller, more focused state updates, explaining how Solid’s signals differ from the more familiar React hooks approach. By showcasing statistics, like the growing number of GitHub stars, Dave illustrates the framework’s upward trajectory. This segment neatly sets the stage for Ryan Carniato’s more in-depth demonstration to follow.

### 12:00 - 18:00: Transition to Ryan’s Presentation

Wrapping up his remarks, Dave invites Ryan Carniato to elaborate further on SolidJS, especially the newly minted developments. Before Ryan jumps in, there is a brief interlude where the attendees discuss logistics—ensuring the audio and video feeds are running smoothly. The core members make a few lighthearted jokes about the behind-the-scenes process of streaming, creating a relaxed atmosphere. Even with the technical checks, the crowd remains eager to learn from Ryan, whose expertise in reactivity and SSR is well known in the community.

Ryan steps up and begins by acknowledging the variety of experience levels in the room. He wants to ensure that both newcomers and seasoned Solid developers can glean insights from what he has prepared. There is a mention of live coding, a signature part of Ryan’s style, but he jokes about not having a proper mic stand for a one-handed coding session. Despite these minor hiccups, the friendly banter and strong community spirit set a comfortable tone for a deep technical dive.

### 18:00 - 24:00: Origins of SolidJS and Reactivity Philosophy

Ryan starts with a historical perspective on how he first conceived of SolidJS in 2016. He describes his early frustration with class-based approaches like React’s original model, recalling his admiration for libraries such as Knockout.js. He wanted to bring back the concept of fine-grained reactivity, emphasizing direct and minimal overhead when updating state. Ryan underscores that performance isn’t the only benefit: the real advantage is straightforward mental models, where code organization is separate from execution life cycles.

He points out how many frameworks conflate code structure with runtime considerations, making it harder to reason about application updates. A large portion of discussions in certain communities, he notes, revolve around preventing needless re-renders, which can overshadow more interesting subjects like user experience or application design. This reflection leads directly into an explanation of Solid’s guiding principle: code should run only once if it doesn’t need to run again. These remarks clarify the impetus for SolidJS’s approach, where top-down rendering and reactivity are carefully split apart.

### 24:00 - 30:00: Fine-Grained Reactivity Explained

Ryan moves into a more technical segment, illustrating fine-grained reactivity with concise code examples. He demonstrates how signals in Solid provide a clean read-write tuple, serving as a fundamental building block for more complex scenarios. Using a console-logging snippet, he reveals how triggers re-run only the minimal amount of code necessary, in stark contrast to a virtual DOM approach that might re-render entire components. This dynamic becomes evident in how signals and effects work together, capturing subscriptions at runtime rather than requiring manual dependency arrays.

He shows a small snippet that captures the essence of tracking state changes with a global context stack, adding or removing subscribers as signals are read. Though these lines of code are short, Ryan underscores their power and clarity. This deep dive into how signals form the basis of controlled updates sets the scene for the next step: applying this to JSX. Attendees now see the synergy between runtime reactivity and the convenience of a compiled syntax like JSX.

### 30:00 - 36:00: Transforming Vanilla JS into JSX

Building on his reactivity explanation, Ryan executes a live-coding demonstration. He starts with a vanilla JavaScript setup, manually creating DOM elements and appending them to the document body. This serves as a baseline for showing how signals, tied to a basic `createSignal`, can update text content in an effect. With the audience following along, he progressively shifts the code from raw DOM manipulation to JSX. Each time he introduces a new layer, he highlights how the compiler still produces minimal overhead, simply generating direct DOM calls instead of a virtual DOM tree.

He then refactors the example into a standalone function, effectively a “component” that only runs once. By passing signals around, Ryan illustrates how each component instance can maintain its own state or share global state, depending on how signals are instantiated. This dynamic approach to state encapsulation underscores the key difference: in Solid, reactivity is managed at a more granular level, ensuring the code is both efficient and expressive. The crowd follows closely as he returns to the console output, demonstrating that top-level logs run only once, even when user interactions change the state.

### 36:00 - 42:00: Passing Props and Fine-Grained Updates

Ryan continues by showing how properties, like a counter’s value or event handlers, are passed down through multiple layers of components without re-running parent code. He explains that Solid encourages a straightforward pattern: place state where it logically belongs, and let the reactivity system handle updates. No special “memoization” is necessary—simply read signals where they are needed, and watch only the relevant DOM nodes re-render.

As Ryan modifies the example to pass props through nested components, he highlights how each instance has a unique signal. He emphasizes that if you move signal creation outside a function, all instances will share that state. This clarity is something he appreciates from a personal developer standpoint, having spent years working with complicated re-render rules in other libraries. At this point, the audience sees an entire small application working without any repeated calls to top-level functions—just granular updates triggered by relevant changes.

### 42:00 - 48:00: Discussion of Solid’s Reactive Advantage

The session shifts to a conceptual overview: Ryan sums up the “reactive advantage” by listing how components run once, signals are independent, and there is no virtual DOM overhead. He underscores how each piece of code—whether reading from or writing to signals—stays confined to its proper scope, decreasing the mental burden on developers. Because reactivity is baked in at a fundamental level, the architectural decisions around global state management or performance trade-offs are simplified.

Ryan contrasts this with the myriad of concerns that arise in typical component-based frameworks: memorizing everything from parent to child, passing context around, or reconciling large swaths of the DOM. He argues that Solid changes the game by aligning user and system mental models, leading to fewer pitfalls. After establishing these points, he transitions to a more advanced topic: SolidStart, the meta framework for SSR and beyond.

### 48:00 - 54:00: Introducing SolidStart as a Meta Framework

Pivoting to the bigger picture, Ryan talks about the motivation behind creating SolidStart. He references Next.js, SvelteKit, and Remix, acknowledging that server-side rendering has become an essential feature of modern development. Despite initially being reluctant to craft a meta framework, the Solid team recognized the importance of server rendering and the desire for a streamlined developer experience.

He explains how SolidStart is designed to avoid duplicating work done by the ecosystem. Instead, it embraces Vite’s powerful plugin system and file-based routing to seamlessly handle server builds and client builds in a single configuration. This approach enables vertical plugins that unify dev, SSR, and client concerns, letting developers add only the features they need without contending with separate build processes. Ryan highlights that reusability and modular design are key; if you want file-based routing, you simply pull in the relevant plugin, and you’re set.

### 54:00 - 60:00: Server Functions and the Promise of RPC

Ryan delves into one of SolidStart’s experimental features: server functions. He shows how writing a function in a `$server.js` file can provide type safety across network boundaries, offering a taste of “RPC-like” simplicity. Instead of working with raw REST endpoints, developers can call these server functions directly, enjoying full TypeScript support. This pattern unifies front-end and back-end code, simplifying tasks like verifying arguments or validating forms.

He next describes how this concept extends to resource fetching. Within the context of routing, developers can leverage `createServerData` to fetch data on the server while still benefiting from Solid’s fine-grained reactivity in the client. By marrying SSR with partial hydration, content can be fetched before it ever hits the browser, but updated in a granular way if needed. Attendees appear excited by the idea that they can maintain a robust separation of responsibilities without sacrificing performance or developer ergonomics.

### 60:00 - 66:00: Exploring Data Primitives and Optimistic UI

The conversation moves to how these new server primitives enable advanced data scenarios, like form handling and optimistic UI. Ryan explains that with a function-based approach, developers can unify validation, state updates, and re-fetching logic without scattering it across multiple files. An example is toggling items in a to-do list: the local state updates immediately, and the server call re-validates or re-syncs data behind the scenes, all while avoiding clunky prop drilling.

He showcases how `createServerActions` handle asynchronous flows gracefully, allowing Solid to track pending states and revert if an error arises. By focusing on signals, partial hydration, and well-defined boundaries, SolidStart aims to capture the best of traditional MPA setups and modern single-page interactivity. This portion illustrates how bridging these worlds can be seamless if the fundamentals—like granular reactivity—remain consistent.

### 66:00 - 72:00: Emphasizing Flexibility and Building Blocks

During this interval, Ryan stresses how the goal of Solid is not to box developers into a single approach. Much of Solid’s power derives from letting people compose solutions using lower-level primitives. For instance, server functions can handle a wide range of use cases, from straightforward data fetching to more complex scenarios like file uploads or managing web sockets. Ryan points out that the community continuously experiments, refining the process so that only necessary abstractions are elevated into the core.

He cites real-world examples where teams mix Solid’s built-in reactivity with external libraries to produce specialized solutions, highlighting how easily Solid can fit into existing codebases. This flexibility sets Solid apart—rather than forcing large rewrites, it welcomes incremental adoption. The conversation then shifts toward SSR performance, clarifying that because of the minimal overhead, SolidStart can handle large-scale applications without forcing a single pattern for data loading or routing.

### 72:00 - 78:00: Hacker News Demo and SSR Options

Ryan now walks the audience through a Hacker News demo implemented with SolidStart. Initially, he shows a fully client-rendered approach, reminiscent of a traditional single-page app. The audience sees the characteristic loading spinners and subsequent fetch requests as JavaScript boots up. Then, with a single configuration change, Ryan flips on SSR, demonstrating how the same codebase can serve pre-rendered HTML right away, eliminating the initial loading delay.

He clarifies that because of Solid’s fine-grained reactivity, switching from a pure client app to an SSR app is straightforward. The discussion covers nuances such as how the server pre-renders data for the initial load, while subsequent navigations happen on the client, preserving state. It offers a glimpse of how developers can calibrate the approach to suit their performance and SEO needs. As he toggles back and forth, it becomes evident that the transition is minimal in code yet significant in user experience.

### 78:00 - 84:00: Islands, Partial Hydration, and MPA Behavior

Shifting gears, Ryan shows how SolidStart can adopt an island-based architecture, inspired partly by Astro’s methodology. He toggles settings to reduce the JavaScript shipped to the client, effectively turning parts of the page into static content. Only interactive regions—“islands”—send their code to the browser. This approach lessens overall payload significantly but still allows certain zones to remain reactive. It’s especially handy for content-heavy websites, which only need small pockets of interactivity like search boxes or comment sections.

He highlights that this partial hydration concept merges with nested routing, letting the framework do fine-grained DOM updates while shipping minimal JavaScript for large swaths of the page. Despite its experimental status, the demonstration is compelling—audience members see how quickly the page loads, even as interactive elements remain dynamic. Ryan underscores that it’s all about matching the solution to the use case, whether you need single-page app transitions or plain multi-page refreshes.

### 84:00 - 90:00: Deep Dive into Island-Based Routing

Ryan pushes the island concept further by adding a router to preserve client-side transitions, despite the heavy reliance on static segments. The discussion highlights how any portion of a Solid application can be turned into an island, preserving or discarding state as needed. Behind the scenes, Solid uses micromorph—courtesy of the Astro team—to diff HTML across navigations, so that only essential pieces get replaced.

He clarifies that the advanced technique of partial hydration does not preclude global or shared states—signals can be “hoisted” or pulled up to track higher-level data. If carefully managed, partial hydration and nested routing can coexist with more complex interactions, like multi-step forms. Some participants are surprised that large swaths of a page can remain static, yet transitions feel nearly instant. This portion cements the idea that SolidStart can scale from minimal JavaScript sites to sophisticated SPAs.

### 90:00 - 96:00: Real-World Example and Performance Metrics

During this segment, Ryan references a real-world movies demo from Addy Osmani, adapted to showcase how partial hydration and island-based routing reduce JavaScript footprints. Attendees learn that measured payload size can shrink dramatically, sometimes beating out alternative frameworks like SvelteKit. By effectively mixing MPA architecture with strategic client-side enhancements, Solid achieves top-tier performance while retaining a modern developer experience.

Ryan points out that performance metrics like Imp (Interaction to Next Paint) matter for user-centric design. He describes how streaming, SSR, and island optimizations combined allow sites to meet stringent performance criteria across a range of device capabilities. This portion culminates with a broader reflection on how the lines between static and dynamic pages are blurring. Despite the sometimes-intimidating complexity, Solid offers the building blocks to tailor solutions to precise user needs.

### 96:00 - 102:00: Reflecting on Architectural Shifts

Ryan compares the present wave of partial hydration solutions to the early era of single-page applications. He notes how frameworks like Next.js, Astro, and Quick are each exploring distinct angles. Solid’s approach blends a robust reactivity model with a flexible meta framework, opening the door to new patterns. This readiness to experiment is balanced by a commitment to maintain existing paradigms, so developers can still build typical SSR setups or go for a multi-page approach.

He mentions eBay’s longstanding experience with partial hydration to highlight how industry giants have been solving these challenges. The question now is how to unify or standardize these patterns. Ryan confesses that while some features remain in early phases, the broader vision of bridging MPA simplicity with SPA fluidity drives the project forward. There is a sense of excitement as the community imagines new ways for library authors and large companies alike to tap into this flexible, high-performance ecosystem.

### 102:00 - 108:00: Wrapping Up the SolidStart Demo

As Ryan concludes the live demonstration, he reiterates the key elements that SolidStart offers: server functions, partial hydration, nested routing, and streaming SSR. He advises the audience that while some corners remain rough, especially in documentation and edge cases, the foundational principles are solid—pun intended. The entire approach aims to serve varied use cases, from small websites with minimal JavaScript to large interactive apps requiring advanced concurrency.

He invites curious developers to try out SolidStart in its beta form, encouraging them to report issues and contribute ideas. With that call to action, Ryan emphasizes the importance of community feedback in driving the framework’s evolution. He wraps by hinting at other resources, including his YouTube channel, where he regularly codes and explores new features live. The segment closes on a note of communal optimism, bridging the gap between experimental enthusiasm and real-world practicality.

### 108:00 - 114:00: Introduction to JSX Transforms with Moshe

Moshe takes the stage next, pivoting to a focused talk on how Solid’s JSX transform handles components. He begins by citing Ryan’s earlier demonstration, where code is compiled to direct DOM manipulation. Moshe intends to dissect how prop passing works under the hood—particularly when signals are involved. He references the confusion that can arise when Solid novices destructure props, only to find that reactivity is lost.

In these early minutes, Moshe makes it clear that he’ll be examining the compile-time details that keep reactivity intact without re-running entire components. He showcases how signals are turned into getters, ensuring that the data is subscribed to updates behind the scenes. This sets up the crux of the conversation: bridging a user-friendly developer experience with a finely tuned runtime mechanism.  

### 114:00 - 120:00: Examining How Component Props Become Getters

Moshe illustrates a simple snippet: a parent passing a `count` prop into a child, which reads `props.count`. He shows how Solid’s compiler transforms that access into a getter function, referencing a shared signal. The key idea is that Solid never needs to re-run the entire component if only `count` changes—it merely updates the relevant DOM nodes. This is starkly different from frameworks that rely on re-rendering at the component level.

He explains how the compiler decides which props should become getters and which remain static. If the compiler detects that a prop is derived from a signal, it wraps it accordingly. If it’s a fixed value, no wrapping occurs. Because of runtime tracking, changes “bubble” only to the exact place needed. Moshe emphasizes that this model drastically reduces overhead and keeps code easier to read, once developers grasp the core principle.

### 120:00 - 126:00: The Pitfalls of Destructuring and Advanced Cases

In this segment, Moshe addresses a common point of confusion: destructuring props prematurely. He describes how if you destructure inside your component’s top-level function, you’re effectively reading the signal once, losing reactivity. Only by destructuring within a tracked scope, like an effect, can updates propagate correctly. He acknowledges that some Babel plugins can help mitigate this, but for many developers, it’s a simpler practice to reference `props.xxx` directly in the JSX.

Additionally, he touches on special-case handling like `ref`, which is passed as a function rather than a static property. This ensures that reference logic, such as connecting a DOM node, remains dynamic. Moshe’s emphasis remains on clarity: while these features make Solid powerful, it’s crucial for developers to understand how the transform is working to avoid mistakes. By the end of this portion, the audience has a clearer view of how everything ties back to the signals-first architecture.

### 126:00 - 132:00: Q&A Kickoff and Signal Passing Clarifications

As Moshe concludes, a Q&A session ensues. The crowd raises hands, while online viewers in chat also post their queries. The first wave of questions revolves around best practices for passing signals, clarifying when to pass a raw value versus a function. Moshe reiterates the benefits of passing signals by reference, but notes the convenience of letting the compiler handle potential reactivity in ordinary-looking props.

Attendees also show interest in using signals to manage complex nested objects and how to track only the properties that change. Moshe references Solid’s store utilities, which add deeper reactivity with nested proxies. This conversation bridges nicely into a broader debate on performance and the mental model. The Q&A fosters a back-and-forth dynamic that reveals the audience’s enthusiasm for truly understanding the nuts and bolts of reactivity.

### 132:00 - 138:00: Islands, Edge Deployment, and SSR Follow-Up Questions

The session continues with more advanced questions. One attendee asks how partial hydration works under edge deployment scenarios—particularly for e-commerce solutions needing rapid response times from servers distributed worldwide. Ryan clarifies that calls can happen from the edge or the client, depending on how data primitives are configured. He discusses the potential trade-offs of always funneling calls through an edge function, acknowledging that latency might shift from user devices to the function’s location.

Another question focuses on merging multi-page app behavior with persistent state. Ryan reiterates that partial hydration is still experimental, so certain aspects like maintaining context across navigations may need creative solutions. He envisions a future with improved caching strategies and advanced edge compute, but acknowledges the present necessity of mixing older techniques like SSG or traditional caching for best results. Despite the complexities, it’s clear the community sees great promise in these emerging patterns.

### 138:00 - 144:00: Comparing Solid and Svelte Approaches

An online question appears about comparing Solid’s compiled reactivity with Svelte’s approach. Ryan addresses the philosophical differences, noting that Svelte compiles entire components into optimized code, relying on assignment-based triggers. Solid, on the other hand, leans on a lean runtime for fine-grained reactivity, requiring little beyond a small signal mechanism. He jokes that the two frameworks often appear in the same sentences because of their small footprint and performance, but they tackle the problem at different layers.

Attendees appreciate the straightforward explanation that Svelte’s compiler tries to handle nearly everything, while Solid’s reactivity is a smaller, more focused piece layered under the JSX transform. This clarifies why certain patterns in Svelte feel more “baked in,” whereas Solid encourages a slightly lower-level, signals-first approach. While each library has distinct philosophies, Ryan underscores that both aim to improve the developer experience and push performance boundaries.

### 144:00 - 150:00: Documentation Challenges and Community Efforts

The Q&A shifts toward documentation and ease of adoption. One participant notes that SolidJS can appear intimidating, with advanced terminology around signals and partial hydration. Ryan and Dave mention how the community is working to refine docs, aiming for a more welcoming, beginner-friendly tone. They mention that the original Solid docs were created quickly and targeted a more technically inclined audience. Plans to overhaul the documentation are ongoing, but progress is slow due to limited volunteer bandwidth.

They also highlight the Solid Fellowship Program, which offers a small stipend to contributors who focus on docs and other community efforts. The question leads to an open invitation for anyone skilled in writing or teaching to join. The message is clear: as the project evolves in technical sophistication, it needs equal support in educational resources. The conversation wraps up with renewed energy around making Solid more accessible without sacrificing its core power.

### 150:00 - 156:00: Closing Remarks and Meet-and-Greet

With time winding down, the organizers announce they will end the live stream soon to allow for in-person mingling and one-on-one questions. They thank everyone for attending, both physically and online, and share gratitude for Babbel hosting. Eric exchanges T-shirts with the SolidJS team in a friendly gesture of community partnership. There is a sense of camaraderie in the room as people applaud and prepare for informal discussions.

Before concluding, the speakers encourage attendees to visit the SolidJS Discord and GitHub for more information, offering ways to stay involved. A final thanks goes out to the remote audience, acknowledging their questions and participation. The session formally closes with expressions of mutual appreciation, but attendees linger, excited to chat about everything from doc improvements to potential PRs. It encapsulates the vibrant, open-source spirit that SolidJS embodies.

### 156:00 - 150:47 (2:24:00 - 2:30:47): Post-Stream Conversations

In these concluding minutes off-camera, participants exchange contact information and continue exploring topics mentioned during the talks. Some ask for deeper guidance on advanced forms of SSR, while others chat about how to best get started with the newly introduced server functions. There’s a renewed appreciation for how the SolidJS community balances technical depth with friendly collaboration.

Participants also discuss future meetups and the possibility of additional streaming events, reflecting a collective eagerness to learn more. The final vibe is relaxed yet inspiring—people have new strategies to try, code to experiment with, and a supportive circle of developers to reach out to. While the official event wraps up, the conversation keeps flowing, capturing the essence of a dynamic community poised to shape the next wave of modern web development.