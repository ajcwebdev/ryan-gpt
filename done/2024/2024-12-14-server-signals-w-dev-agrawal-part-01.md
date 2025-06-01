---
showLink: "https://www.youtube.com/watch?v=zKXfcE7oTRY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Signals w/ Dev Agrawal"
description: ""
publishDate: "2024-12-14"
coverImage: "https://i.ytimg.com/vi/zKXfcE7oTRY/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation about real-time reactivity, server-side signals, and the evolving JavaScript ecosystem, featuring in-depth discussions on frameworks, libraries, and advanced development patterns.

## Episode Summary

In this session, the host and guest explore a variety of intricate topics revolving around real-time capabilities and state management in modern JavaScript frameworks. They begin by examining the historical context of full-stack reactivity, referencing older tools such as Meteor and Angular, then transition into how these insights inform present-day libraries like Solid and React. Key segments delve into WebSocket-based synchronization, local-first collaboration, and new ways to handle mutable or immutable approaches to storing data. The conversation also highlights potential overlaps with cutting-edge infrastructure, including Cloudflare Durable Objects, while emphasizing user-centric design principles. Throughout, the speakers share personal anecdotes and professional experiences that enrich their technical explanations. Their discussion ultimately provides insights on scaling, synchronization, and the future of reactive programming, delivering a comprehensive picture of an ever-evolving front-end ecosystem.

## Chapters

### 00:00 – Introduction and Setting the Stage

In the opening moments, the host welcomes everyone back and notes a brief absence from streaming. He mentions having spent time researching framework ideas, particularly those relevant to authors of libraries or tools. He then introduces the special guest, Dev, highlighting his work and contributions within the Solid community and beyond.  

The discussion emphasizes how the guest’s background in various frameworks shaped his perspective on reactivity and data flow. They also preview the day’s agenda—primarily focusing on server signals and the concept of full-stack reactivity. This groundwork lays the foundation for a deeply technical conversation about how modern apps can stay in sync across front end and back end.

### 06:00 – Guest’s Background: Meteor, Angular, and Beyond

Dev shares how he first discovered web development in high school, working with Adobe Dreamweaver and older ASP or PHP textbooks. He recalls a pivotal moment switching from jQuery to backbone and eventually encountering Meteor, which offered a groundbreaking real-time development approach.  

They discuss how these early experiences, along with stints in Angular and TypeScript, informed Dev’s fascination with reactivity. The host and Dev remark on the interesting historical shift from monoliths to microservices and back, noting how Meteor, in particular, inspired new patterns for synchronizing state across distributed systems.

### 12:00 – The Move to React and Hooks

Conversation moves to Dev’s migration projects, detailing how he tackled angular-to-react codebases and discovered the utility of React Hooks. Both highlight how React's mental model has historically leaned toward an immutable style, leaving a gap when it comes to granular, real-time changes.  

The host also recounts challenges with older client-side approaches and the shift in industry practices that React catalyzed. They note that while React stabilized a universal pattern, it also introduced new complexities for state management, which has fueled continued research into alternative strategies.

### 18:00 – Full-Stack Reactivity: Meteor’s Influence

Here, Dev and the host reflect on Meteor’s groundbreaking features, such as live data sync across the client and server. They explain how Meteor’s approach, though ahead of its time, lacked robust solutions for scaling with technologies like serverless or big data.  

The conversation underscores Meteor’s tracker system, revealing early attempts to unify the client and server’s data flow through “pub/sub” mechanics. While those concepts didn’t take over the broader market, they seeded the interest in modern frameworks aiming to unify real-time reactivity with partial or full SSR strategies.

### 24:00 – Server Components vs. Server Signals

The chat transitions to React Server Components and how they differ from live reactivity approaches. The host points out that RSC attempts to unify client and server code but lacks persistent connectivity. Dev underscores how “server signals” might make stateful servers possible, contrasting them with RSC’s stateless boundaries.  

They also hint at potential future directions, mentioning how frameworks like Qwik or Marko have toyed with resumable concepts that could pair with server signals. The discussion sets up deeper dives into how such systems would handle concurrency, streaming, and updates.

### 30:00 – Introducing Solid Socket and Dev’s Work

Dev provides an overview of his latest library, Solid Socket, which extends Solid Start with WebSocket-based synchronization. Using an example of a shared counter, he demonstrates how the library keeps multiple clients in sync with minimal boilerplate.  

They remark on how this approach preserves the developer experience of local signals while routing changes through a shared, stateful server process. The host expresses excitement about simplifying distributed real-time apps, something that historically required specialized tooling like LiveView or Meteor.

### 36:00 – Practical Considerations and Scaling

Attention turns to the scaling question: how does a WebSocket-based persistent approach handle thousands of connections? Dev shares comparisons with solutions from Elixir’s LiveView and emphasises node’s inherent event-driven model. They recognize that scaling real-time systems often involves trade-offs, highlighting the emergent interest in solutions such as Cloudflare Durable Objects.  

The conversation circles around how reactivity can be extended across clusters, including potential ways to replicate signals. The host acknowledges that while not everyone needs massive concurrency, these technologies open new possibilities for collaborative software.

### 42:00 – Collaborative Demos: Presence and Real-Time Updates

Dev showcases presence tracking as an example feature. By broadcasting user cursors or statuses in real time, he illustrates how small amounts of state can greatly enhance user experience in team applications. A few lines of code—signals on the server with minimal ceremony—achieve what older frameworks needed extensive boilerplate for.  

They also discuss further expansions: real-time dashboards, partial offline experiences, and continuous deployments. The host praises Dev’s solutions for bridging the user experience gap that has existed in real-time state management, historically requiring specialized libraries or heavy abstractions.

### 48:00 – Reconciling, Durable Objects, and Potential Pitfalls

The host raises topics like concurrency, conflict resolution, and how server signals differ from purely immutable or client-managed states. Dev explains that merging updates is easier when the server is authoritative, but certain edge cases remain.  

They briefly touch on possibilities for hooking reactivity into a system like Cloudflare’s Durable Objects. Both note that while it’s promising, widespread adoption may hinge on standardizing these advanced server-oriented concepts. They conclude that real-time syncing demands both a well-designed library and an underlying runtime that can handle ephemeral connections gracefully.

### 54:00 – Deeper into Conflict Resolution and Sync Engines

The conversation continues with advanced scenarios where users can queue multiple updates or operate offline, requiring specialized ways to track version conflicts. Dev references CRDTs and event logs, recalling how Meteor or older systems used similar structures.  

They discuss whether the problem is generalizable or must always be application-specific. The host observes that devs often just accept “eventual consistency” as enough, but as apps grow more collaborative, more refined solutions like transaction logs or partial concurrency logic become essential.

### 60:00 – Envisioning the Future: A Real-Time-Ready Ecosystem

At this point, they imagine a world where the default approach to building apps includes a simplified path to real-time reactivity. Server signals, or some refined variant, might become standard. Dev highlights the difficulty of bridging every edge case but remains optimistic about incremental improvements, especially with help from community experiments.  

Reflecting on older frameworks, they suggest it may take an entire ecosystem shift—both in tooling and infrastructure—to normalize stateful server connections. The host sees potential synergy with new deployment environments, such as partykit or jam socket, that revolve around ephemeral node-like processes for global sync.

### 66:00 – Quick Segue into Solid’s Future

The conversation pivots to the broader solid ecosystem. The host recalls the impetus for building advanced features like createProjection or better store mutation for complex data flows. Dev relates these developments to his experiments with presence and partial updates, highlighting their synergy with signals.  

They note that while not everyone needs deep concurrency solutions, having it accessible fosters creativity. They also preview upcoming next steps for solid, including refined reactivity, possible new store patterns, and reevaluations of features like partial hydration or server functions.

### 72:00 – Solid Sockets: Technical Underpinnings

They return specifically to Solid Socket’s mechanics, discussing the Babel plugin that allows the server to treat signals seamlessly. Dev notes that while signals were originally designed for client scenarios, enabling them on the server required minimal but crucial changes, like reintroducing certain transformations that the runtime usually avoids.  

Technical intricacies of hooking up events or presence data—like reading client signals on the server—are laid out. The host underscores that by aligning with existing patterns, developers gain real-time powers without rewriting their mental model.

### 78:00 – A Deeper Example: Presence in a Collaborative To-Do App

Dev recounts a to-do list demo, where multiple clients see changes in real time, including cursor sharing. The host praises the minimal code required to achieve a multi-user scenario. They compare it to older approaches in which websockets demanded custom store logic or manual subscription.  

Listeners also learn how advanced synchronization can remain modular. Dev points out that presence is just a single example: the same patterns can be extended to chat, collaborative text editing, or concurrency-laden dashboards.

### 84:00 – Scaling Real-Time Projects with Infrastructure

They loop back to the complexities of scaling, acknowledging that a single server with in-memory signals works nicely, but horizontal scaling is more complex. Dev outlines a prospective approach—persisted signals—tying them to on-storage watchers or a shared DB.  

Though not trivial, the approach allows signals to replicate across multiple server instances. The host reiterates that big concurrency solutions often require advanced runtime features. Yet these partial solutions are valuable for smaller apps or proof-of-concepts, bridging a key gap in developer experience.

### 90:00 – Bridging Offline, Event Logs, and CRDTs

The conversation moves toward local-first or offline-friendly designs. They highlight how advanced event-based architectures can unify client, server, and data store updates. Dev details using logs that automatically replicate. This pattern, though flexible, leaves conflict resolution up to user-defined logic.  

The host acknowledges the complexity, noting how Elm or RxJS tried to unify push-based flows. They see a continuum, from purely local to purely server-driven, but realize each approach demands nuance for partial merges or reordering of updates.

### 96:00 – Wrapping Up Real-Time Solutions

Here, they begin summarizing the main takeaways on real-time reactivity. Dev emphasizes that the newest generation of tools aims to keep code simple while offering advanced collaborative features. The host appreciates how these solutions free developers from bridging client and server states by hand.  

They briefly mention the synergy with new ephemeral hosting models, repeating that signals can pair with technologies like Cloudflare Durable Objects for large-scale concurrency. Concluding this segment, both agree that more experimentation and real-world usage will refine the approach.

### 102:00 – Introduction to Solid Events

The host prompts Dev to discuss another library: Solid Events. Dev outlines how events differ from signals, focusing on a push-based stream of discrete updates. They recall how older FRP frameworks distinguished continuous behaviors from discrete events, and how modern signals lean toward behaviors.  

Solid Events let users define event emitters or topics, seamlessly hooking them into Solid’s reactive graph. By bridging these two worlds, developers can reason about state changes more precisely, especially for one-off or synchronous triggers.

### 108:00 – Creating a Shared Syntax for Signals and Events

Dev delves further into the event library’s design, highlighting how it sidesteps the need for constant re-checking. Instead, events can coordinate concurrency or advanced logic, reminiscent of RxJS but with a simpler API. The host references older attempts at bridging streams with signals, acknowledging complexities around repeated values or quick consecutive triggers.  

They illustrate how separate primitives for “pull-based” signals and “push-based” events can yield a cleaner mental model, especially for advanced real-time tasks. The host is intrigued by the potential for combining these with store or partial hydration features.

### 114:00 – Event Composition and FRP Heritage

They map out parallels to FRP concepts from Haskell, Elm, and older JavaScript libraries. Dev shows sample code that uses event transformations, partitions, or merges, akin to streams. While reminiscent of RxJS, the host underscores that the new library stays smaller and more targeted for Solid’s needs.  

Listeners hear how these compositional techniques reduce dependence on side effects. In place of hooking signals with effects manually, devs can rely on event chains for a more explicit data flow.

### 120:00 – The Drag-and-Drop Example

Dev demonstrates a drag-and-drop scenario using events rather than raw signals or large sets of side effects. The code, though verbose, clarifies each step: mousedown, mousemove, drop acceptance. The host notes that, for complex interactions, purely reactive styles can become tricky.  

They compare to older Angular or RxJS patterns, seeing parallels but also praising the simpler structure that emerges when events handle branching logic. This approach can help maintain a cleaner, more analyzable code graph for user interactions.

### 126:00 – Observing Different Takes on Reactivity

The two reflect on how frameworks approach reactivity differently. Solid focuses on straightforward signals and direct mutations, while React relies heavily on immutability and re-renders. Libraries like RxJS pivoted entirely on push-based streams.  

Dev’s new library merges aspects from both push and pull systems, hoping to solve advanced real-time tasks without burying users in operators. The host acknowledges that writing such code can be more verbose but yields transparent, easily testable logic.

### 132:00 – Event Subscriptions, Listeners, and Memory Cleanup

They walk through the library’s technical details for subscribing and unsubscribing. Dev underscores how Solid’s root disposal naturally handles event subscriptions, preventing memory leaks. The host muses that simpler memory management was a hallmark of older frameworks like Meteor, praising how these patterns still hold up in modern contexts.  

They also consider performance: events can reduce overhead by preventing signals from updating on repeated identical values, thus sparing the system from unnecessary computations.