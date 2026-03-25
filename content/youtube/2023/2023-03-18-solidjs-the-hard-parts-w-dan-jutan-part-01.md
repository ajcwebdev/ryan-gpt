---
showLink: "https://www.youtube.com/watch?v=E3jYGTB50LE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS - The Hard Parts w/ Dan Jutan"
description: ""
publishDate: "2023-03-18"
coverImage: "https://i.ytimg.com/vi/E3jYGTB50LE/sddefault.jpg?v=6414ae11"
---

## Episode Description

A wide-ranging conversation exploring SolidJS concepts, React comparisons, and advanced front-end patterns, including reactivity, context, and server-side rendering techniques.

## Episode Summary

In this in-depth discussion, the speakers compare and contrast SolidJS with other popular libraries, illustrating how nuanced front-end concepts shape the developer experience. They begin by examining Solid’s core ideas—signals, memos, and effects—highlighting the importance of read-write segregation, contextual state, and how reactive data flows through applications. Along the way, they briefly reference React’s approach, touching on the use of hooks, effects, and concurrency. Topics such as code extraction, data fetching, and SSR also arise, with the conversation clarifying key points about resources and suspense boundaries. Further on, they explore transitions, routing, and the growing role of streaming or async SSR. The episode closes by addressing documentation challenges and the evolving mindset needed to master modern JavaScript frameworks, reinforcing how reactivity’s fine-grained control can both simplify and complicate design choices.  

## Chapters

### 00:00:00 – Initial Greetings and Stream Setup

In the first seven minutes, the host welcomes viewers and provides quick updates, setting a relaxed tone for the session. Briefly touching on scheduling and recent activities, they mention juggling various commitments and share an offhand remark about feeling under the weather. The conversation is casual, yet it underscores the presenter’s passion for technology. Background noises and small talk about daily life transitions fill these opening moments, illustrating the friendly environment in which the stream takes place.

Moving beyond these preliminaries, the host outlines the day’s main themes, such as reactivity in SolidJS, advanced teaching strategies, and potential comparisons with React. An initial reference to open-source involvement leads into the broader agenda, suggesting that deep exploration of signals, stores, and resources is on the horizon. Listeners get a quick taste of the technical focus to come, preparing them for the next chapters, which promise detailed discussions on how best to navigate complex front-end development tasks.

### 00:07:00 – Introducing Dan and Teaching SolidJS Basics

During this segment, the host invites Dan onto the stream, giving him time to share his background and explain his role in the SolidJS ecosystem. They discuss the importance of clear documentation for any framework, highlighting recent efforts to improve Solid’s docs and community resources. Dan notes that his passion lies in explaining complex ideas with accessible examples, bridging the gap between novice developers and expert practitioners.

The conversation then turns to fundamental learning strategies for SolidJS, emphasizing the need for conceptual clarity. Dan and the host reflect on the cognitive load inherent in advanced front-end work, suggesting that straightforward, incremental explanations best serve newcomers. They hint at upcoming topics like signals, stores, and context, foreshadowing deeper dives into the reactive core. This chapter closes with the sentiment that good teaching underpins the success of any open-source project, shaping not only adoption but developer satisfaction.

### 00:14:00 – Signals, Tracking, and Reactivity Foundations

In this section, they begin by laying out the core principle of signals within SolidJS. Dan describes how signals establish a unique “tracking” context, allowing changes to propagate only to components or functions that consume them. They contrast this approach with classic patterns in React, explaining that while React re-renders entire components, Solid tracks computations down to finer details. The discussion showcases the efficiency gains from focusing updates rather than repeating large-scale renders.

Moving forward, they illustrate how signals nest or chain together, providing granular insights into data flows. Examples include simple counters and more intricate derived signals, where logic compounds user inputs or state changes. By detailing how these nested, read-write elements can remain independent, the speakers stress that reactivity is both flexible and performant. Overall, they portray signals as the core building block of Solid, one that underpins more advanced ideas yet to be tackled.

### 00:21:00 – Effects, Memos, and Reactive Propagation

Around the 21-minute mark, the focus shifts toward effects and memos—two additional pillars of Solid’s reactivity system. The hosts outline how “createEffect” and “createMemo” build on the tracking pattern, allowing side effects or computed values to respond automatically. They highlight that understanding these primitives is crucial for optimizing performance, as they let developers isolate updates and keep UI in sync with changing data. Moreover, they show parallels to React’s useEffect and useMemo, clarifying that mental models can sometimes transfer between libraries.

As the conversation progresses, they address pitfalls of overusing or incorrectly structuring effects. Dan emphasizes a structured approach: keep logic minimal inside effects and avoid conflating side-effect code with standard rendering. By using memos for derived values and signals for the raw data, developers can ensure code remains clear and modular. These fine-grained practices minimize unnecessary re-runs, illustrating the elegance and power of a well-designed reactive architecture.

### 00:28:00 – Props, Context, and Nested Reactive Patterns

The presenters now transition to the topic of passing data around components. Dan describes how props in SolidJS are themselves reactive if they wrap signals, letting them update smoothly without re-rendering entire trees. This underscores the advantage of fine-grained tracking over broad diff checks. They also mention how Solid uses getters or proxies depending on whether an object’s shape remains static or can change dynamically, giving an inside look at how the framework balances performance with flexibility.

Further, they introduce context as a mechanism to share state across distant sections of an app. This conversation highlights typical patterns: global singletons for truly universal data and context providers for scoping to certain areas. Dan and the host emphasize the nuanced difference between context in Solid and React, pointing out that solid-level reactivity frees developers from re-renders that often plague large-scale React apps. Overall, they show how Solid’s design fosters both local and global reactive flows without cumbersome overhead.

### 00:35:00 – Create Store, Proxies, and Immutable vs. Mutable Debate

Here, they dig into Solid’s store functionality, showing how proxies enable nested reactivity with minimal boilerplate. The host explains that while signals alone handle single values elegantly, stores give a straightforward approach for arrays and objects. They compare this to more traditional patterns, referencing libraries like MobX, which also leverage proxies under the hood. The conversation highlights that carefully choosing between signals, stores, or custom patterns can lead to more understandable code in different contexts.

Attention then turns to mutable vs. immutable philosophies. While Solid generally champions a read-write split for clarity, some developers prefer object mutations for simpler data flows. Dan and the host consider trade-offs: an immutable approach can be clearer for large teams but might introduce overhead for repeated transformations. Mutability can be more intuitive for small or specialized tasks, yet risks unexpected side effects. Listeners are left with the sense that each approach has valid use cases within Solid’s flexible system.

### 00:42:00 – Data Fetching with CreateResource and Suspense Introduction

After elaborating on local reactivity, they shift to the broader challenge of data fetching. The host outlines createResource, Solid’s approach to handling asynchronous calls in a reactive manner. By treating fetched data as a stable “resource” that can re-fetch when triggers change, it supports advanced scenarios like race condition handling. Dan describes how its API parallels React Query, allowing for dynamic parameters, caching, and progress indicators.

They also drop initial hints about Suspense—showing how Solid can coordinate async data and interface elements with placeholders or transitions. This sets the stage for deeper exploration of how streaming and server-side concepts mesh with reactivity. Attendees get the message that createResource is a powerful gateway to more sophisticated SSR approaches and concurrency patterns, bridging the gap between local states and remote requests in a straightforward, composable manner.

### 00:49:00 – Nested Suspense, Error Boundaries, and Fine-Grained Updates

As they move past simpler fetching, Dan and the host probe deeper into advanced techniques. They highlight how Suspense can isolate individual parts of the interface, letting some sections display placeholders while others load fully. They contrast this with a single, top-level fallback that blocks the entire page. Error boundaries enter the mix, offering a safety net if an async operation fails. By nesting these elements strategically, developers gain granular control over error handling and loading states.

They demonstrate how fine-grained reactivity dovetails with Suspense, allowing separate data regions to resolve in parallel. This segment showcases the elegant interplay of multiple primitives—signals for tracking, stores for structure, and Suspense for async orchestration. In bridging these ideas, they convey that modern front-end architectures involve more than just reactivity or single-page illusions; it’s about orchestrating many smaller components, each with unique lifecycle behaviors, to create smooth user experiences.

### 00:56:00 – Solid’s Approach to Context vs. Global State Patterns

Around 56 minutes in, the conversation returns to broader state management concerns. They compare context-based solutions to simply exporting signals as singletons, clarifying that while either method provides global sharing, context decouples components from a specific file import. This difference may not matter for small apps but can be a game-changer for large systems or libraries. The host notes that dependency injection is effectively part of context usage, making code more modular.

They share real-world anecdotes about how developers often over-rely on global states, inadvertently tying unrelated modules together. Dan points out that context fosters a healthy separation of concerns, limiting unintended side effects. Combined with selective reactivity, Solid ensures that changes only touch relevant components. By dividing ownership logically, the code remains more maintainable even as the application grows. The conclusion is that thoughtful scoping—whether with context or discrete signals—provides flexibility without performance downsides.

### 01:03:00 – Introduction to SSR Modes in Solid and Suspense’s Role

At this point, they pivot toward server-side rendering (SSR) in Solid, explaining that it supports multiple modes: synchronous string rendering, asynchronous, and streaming. They emphasize that suspense is key in all of them, dictating when the server “pauses” to wait for data. They recall older SSR approaches in frameworks like Next.js, where devs manually fetched data before rendering. Solid’s SSR, however, fetches data as it renders, gating partial output via Suspense boundaries.

They illustrate how each SSR style addresses different needs. Sync SSR is simpler but can block the entire page. Async SSR defers sending anything until data arrives, reminiscent of double-render or partial hydration techniques. Streaming SSR sends HTML chunks in waves, updating placeholders as resources complete. Throughout, Dan underscores that Solid’s core reactivity remains consistent, bridging the gap between server and client. The result is a more unified model for building truly dynamic user experiences.

### 01:10:00 – Exploring Render to String, Async, and Streaming SSR

Diving further into SSR specifics, the host notes how “renderToStringAsync” gives developers the power to start streaming once critical data resolves. They compare it to older methods that forcibly wait for all data before sending the page. By harnessing Suspense to manage partial loading, devs can optimize time-to-first-byte, sending stable content quickly while deferring heavier or optional parts. The conversation emphasizes that reactivity does not disappear on the server—signals remain relevant, though side effects differ.

They paint a scenario of nested Suspense boundaries, describing how partial HTML can flow to the client, then gracefully update as more data arrives. Dan underscores that this approach does not rely on specialized compilers or proprietary server runtimes. Instead, it’s a logical extension of Solid’s design. Ultimately, they showcase a continuum: from the simplest “render and wait” all the way to advanced chunked streaming, all orchestrated by the same primitive reactivity that powers local UI reactivity on the client.

### 01:17:00 – Handling Race Conditions and Resource Caching

Continuing the SSR discussion, the speakers address real-world challenges like race conditions, which arise if the user triggers multiple fetches in quick succession. They explain how createResource’s built-in capabilities handle stale data or concurrency. This leads to a brief discussion of caching: while Solid does not include a built-in global cache, it provides hooks for libraries to add such functionality. They compare it to React Query again, emphasizing that “resource” is a stable identity that can be revalidated or mutated.

They also consider incremental data loading, like deferring certain fields or sections until the user scrolls or expands a panel. Because Solid ties reactivity to usage, a user who never navigates to certain areas may never trigger the associated fetch. By carefully combining resource patterns with dynamic imports, devs keep overhead minimal. Listeners gain insight into how to design flexible apps that perform gracefully under varied usage conditions, leaning on signals to unify state transitions.

### 01:24:00 – Deeper Look at Suspense Boundaries and Nesting Logic

Here, the conversation circles back to the intricacies of nested Suspense. The host explains that each boundary can function autonomously, which proves invaluable when partial data is sufficient to render core parts of a screen. Meanwhile, other subtrees might remain in a fallback state. The speakers illustrate the difference between a large boundary that suspends everything and multiple targeted boundaries. They argue that multiple smaller boundaries lead to better user experience, letting at least some UI remain interactive.

Continuing with specifics, they examine how boundaries chain together on the server. If a child boundary resolves earlier than its parent, it can still stream updates. Or if it’s slower, the parent might have already shown a partial response. These patterns enable advanced streaming SSR that once was only conceptual. By dissecting concurrency flow, the pair show how Suspense fosters real-time user feedback rather than forcing an all-or-nothing approach. This approach underscores Solid’s mission to unify synchronous code with asynchronous realities.

### 01:31:00 – Introducing Transitions for Concurrent UI Updates

Around this time, the hosts pivot to the concept of transitions—another advanced feature paralleling React’s startTransition or useTransition. They clarify that transitions differ from normal updates by allowing user interactions on the “old” screen while the new data processes in the background. This pattern eliminates abrupt UI changes that leave the user with partial or blank content. The conversation underscores that transitions rely on underlying Suspense mechanics, forging a line between synchronous reactivity and asynchronous data resolution.

They offer concrete examples: clicking a tab in a complex dashboard while still interacting with the previous tab’s data. Under normal updates, the page might switch states mid-keystroke, causing confusion. With transitions, Solid forks the reactive graph, letting the old state remain fully functional until the new one is ready. The presenters emphasize that this concurrency is not a hack but a fundamental property that advanced reactivity confers, neatly sidestepping re-renders that hamper user experience.

### 01:38:00 – Forking Reactive Graphs and Managing Offscreen Updates

During this interval, they delve into how transitions effectively “fork” the reactive data. One version continues as the user’s live page, while the future version quietly resolves in memory. Listeners learn that once data completes, the system merges changes from the old state so that no user input is lost. Dan highlights that this approach requires careful design—particularly around side effects—since they run in parallel. Yet, used correctly, it allows near-instant interactivity while the system fetches or computes behind the scenes.

They note that illusions of concurrency arise from scheduling: the transition is lower priority, deferring official commits until the Suspense boundaries complete. This advanced technique ensures that user keystrokes or button clicks don’t stall while a massive data recalculation occurs. The host clarifies that in practice, fine-grained reactivity avoids large re-render blocks anyway, but transitions add an extra layer of control. It’s the logical next step for sophisticated user experiences, especially in data-heavy or interactive apps.

### 01:45:00 – Untracked Computations, Defer, and Tearing Cases

The speakers next address situations where devs might want to ignore reactivity or deliberately allow “tearing,” a phenomenon where some parts of the UI update out of sync. They highlight Solid’s untrack function and mention that resources offer a `.latest` property to skip re-suspending in certain scenarios. While such features may appear to break the rules, they can be vital for advanced edge cases like type-ahead search, where stale data is acceptable if it boosts responsiveness.

They also discuss how untrack merges with transitions, letting developers selectively exempt computations from concurrency logic. This can help with performance or user interface illusions that require partial updates, though it must be used sparingly. Ultimately, the hosts warn that giving too much power to developers can lead to inconsistent states if misused, but recognized patterns, such as partial hydration, can turn a mild hack into a refined approach. Each mention underscores how well Solid’s design fosters careful trade-offs instead of rigid constraints.

### 01:52:00 – Balancing Complexity and Teaching Advanced Patterns

Around this point, they pause to reflect on how best to teach these intricate ideas. Dan notes that official docs often must simplify the language, whereas real-world examples show how transitions, untracking, and Suspense nest together. The host remarks that bridging conceptual leaps—like from basic signals to streaming SSR—demands consistent terminology and progressive examples, so beginners aren’t overwhelmed by advanced concurrency features too soon.

They discuss the importance of scaffolding: introducing signals, then effects, then context, then Suspense, and finally transitions or untrack. Each layer builds on the last, preserving a sense of control. They compare it to React’s slow shift from class components to hooks, which took time for widespread acceptance. In both frameworks, good guides highlight not just how features work but why they exist. The hosts affirm that a strong educational path is as essential as the reactivity model itself.

### 01:59:00 – Late-Stage Example: Combining Router, Suspense, and Data

Here, the stream touches on bridging Solid Start’s file-based routing with advanced asynchronous flows. While not diving too deep into code, the speakers outline how each route can specify resources. Once the user navigates, a transition can kick in, letting the old page remain interactive while new route data streams in. They mention that this “just works” because everything uses the same createResource and Suspense pattern. The host also references possible tricky corners, like parallel data loading or partial hydration for sub-routes.

They make it clear that though Solid Start isn’t fully stable yet, the underlying principles remain sound. Developers get the sense that integrated solutions—routing plus reactivity plus SSR—yield a streamlined workflow. Wrapping up this segment, the presenters underscore that no special compilers or advanced APIs beyond the standard core are required for concurrency. Everything leans on signals, effects, and Suspense, forming a cohesive experience bridging client and server.

### 02:06:00 – Real-World Production Apps and Bleeding Edge Warnings

The host next recounts anecdotes of startups and production teams already using Solid Start. They mention that while occasional bugs emerge—especially around server interactions—those who adopt Solid’s approach can fix or contribute upstream. Dan reiterates that any “bleeding edge” technology has growing pains, but an engaged community and well-maintained code mitigate most hurdles. They encourage people to weigh the trade-offs between immediate reliability and future-proof performance.

Additionally, they discuss how advanced reactivity sometimes challenges typical debugging habits. Tools like the DevTools can visualize signals, but devs may need to shift mental models away from monolithic re-renders. Nevertheless, once the mental switch is made, building large-scale apps with minimal overhead becomes intuitive. The conversation urges early adopters to share feedback, bridging stable releases with robust production readiness. They conclude that features like SSR streaming can pay off significantly for interactive or data-heavy websites.

### 02:13:00 – Comparing React’s Hooks to Solid’s Signals

Returning briefly to cross-framework comparisons, Dan and the host highlight key contrasts between React’s hooks and Solid’s signals. They note that React’s system couples state and rendering, re-invoking entire components whenever a relevant state changes. Solid, by contrast, directly updates the portion of the DOM that truly depends on each signal. They demonstrate that while React developers can replicate certain behaviors with useMemo or useEffect, the mental overhead is higher.

They also review React’s context approach, which triggers re-renders in all consumers unless carefully optimized. Solid’s read-write separation, in combination with context, circumvents that overhead. While some advanced React solutions like Redux or custom hooks do approach fine-grained updates, Solid’s design bakes it in from the start. Wrapping up, they affirm that, for experienced React devs, mastering Solid’s mental model isn’t too large a leap, especially once the impetus for signals is fully understood.

### 02:20:00 – Resource vs. Show Component, Memos, and Templating

In this slot, the chat touches on control flow components like `<For>` and `<Show>`. They describe how Solid’s approach is not a compiler-level directive but a standard component that harnesses signals and memos internally. Dan clarifies that novices should see these blocks as performance-friendly replacements for mapping arrays or conditionally rendering content. Because they rely on reactivity, partial changes do not produce large-scale DOM churn.

They give an example of toggling a large data set. If mapped, each item might re-render. With `<For>`, only the modified entries update. Similarly, `<Show>` is explained as a more declarative way to handle conditionals, beyond a simple ternary. In essence, these specialized components reduce boilerplate while respecting Solid’s computed logic. The participants confirm that the same outcomes are achievable with raw JavaScript, but built-in control flows are safer and more ergonomic.

### 02:27:00 – Handling Large Forms and External State Integrations

Moving along, they consider practical usage patterns for forms or external state libraries. The host notes that complex forms often combine local signals for ephemeral fields, store-based signals for app-wide state, and transitions or Suspense for server validation. They highlight that Solid can collaborate with solutions like Zod or Yup, hooking reactivity into the data schema. This interplay ensures real-time feedback, partial validation, and immediate UI updates.

They also mention bridging to external sources like RxJS or Svelte stores. With Solid’s from() utility, it’s straightforward to unify multiple reactivity systems. Whether bridging a push-based stream or a more imperative API, signals remain the core aggregator. The conversation underscores how composability extends beyond the boundaries of a single ecosystem. If something emits data changes, Solid can treat it as a signal. This seamless integration shows that reactivity is not an isolated pattern but a universal approach to state handling.

### 02:34:00 – Advanced Reactions, createRenderEffect, and Lifecycle Nuances

Here, they highlight specialized primitives like createRenderEffect, explaining that it runs side effects during rendering, bridging the client-server boundary in SSR scenarios. While typically recommended only for library authors, understanding it clarifies how Solid attaches updates to the DOM. They connect this to complexities like “layout effects” in React, underscoring that controlling timing is an advanced but essential skill for certain tasks, such as measuring elements or coordinating animations.

They also note that createReaction extends Solid’s reactivity further, capturing dependencies without triggering an immediate side effect. Developers might use it to handle lazy integrations or wrap transitions around third-party libraries that expect imperative updates. The hosts caution that once you move beyond signals, effects, and memos, code may become more specialized. This advanced territory is typically for library creators or developers with specific domain constraints, not everyday app logic.