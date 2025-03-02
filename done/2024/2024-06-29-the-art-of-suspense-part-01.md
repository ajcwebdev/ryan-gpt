---
showLink: "https://www.youtube.com/watch?v=k3RU0ayAdW4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Art of Suspense"
description: ""
publishDate: "2024-06-29"
coverImage: "https://i.ytimg.com/vi/k3RU0ayAdW4/maxresdefault.jpg"
---

## Episode Description

A freewheeling exploration of modern JavaScript frameworks, performance optimizations, and the complexities of handling asynchronous data, all woven into a dynamic five-hour session.

## Episode Summary

This discussion begins by setting the stage with friendly introductions and light banter, giving listeners a chance to settle into the relaxed environment. It then moves into a thoughtful examination of performance benchmarking, showcasing various strategies and the trade-offs they entail. The conversation broadens to include concurrency concerns, emphasizing the significance of fine-grained reactivity and consistent scheduling. Next, it addresses practical applications of suspense, exploring how different approaches to handling asynchronous data can affect both user experience and developer workflows. Along the way, the speakers compare emerging technologies like server components and compilers, underscoring the tension between providing a smooth developer experience and delivering top-tier performance. They also reflect on broader industry trends, including the motivations behind framework decisions and the evolving sentiment toward new tools. By the end, this extensive exchange provides a multifaceted view of today’s JavaScript landscape, offering insights into both current best practices and future possibilities for those passionate about building robust, efficient web applications.

## Chapters

### 00:00 – 00:15:00 — Introduction and Initial Banter  

In this opening segment, the host greets the audience and sets a relaxed, informal tone. A few puns and jokes break the ice, underscoring the spontaneity of a live stream format. The speaker recounts recent travel experiences, offering a quick personal update that helps listeners feel connected. While acknowledging a slight gap between streams, they quickly pivot to the day’s planned topics. Early mentions of performance testing and scheduling foreshadow the in-depth technical discussions that follow. Questions from the live chat shape the conversation, ensuring the session stays interactive. By the end of this section, listeners gain a sense of the speaker’s ongoing projects, their approach to engagement, and a glimpse of more advanced topics on the horizon.

The speaker also highlights how streaming introduces inherent delays between comments and responses, influencing the pace and flow of live interactions. Sharing anecdotes about recent travels—from family vacations to conference engagements—adds a personal layer to the proceedings. This warm introduction eases listeners into the more technically demanding material ahead, fostering an atmosphere of curiosity and open conversation.  

### 00:15:00 – 00:30:00 — Compiler Discussion and Benchmarking Approaches  

Here, the focus shifts to the new React compiler, with particular attention given to how it optimizes unmemoized code. The speaker contrasts compiler-driven optimizations against manually optimized code, drawing on concrete examples and benchmarks that highlight the potential benefits and limitations. Listeners learn about memory usage, payload sizes, and how these metrics vary across different build strategies. This section underscores how even small overheads can matter when scaled to large applications.

The conversation then broadens to examine the complexities of evaluating frameworks through generic benchmarks, likening it to stress-testing an engine or test-driving a car. While such tests can reveal overhead, they don’t always capture real-world app scenarios. The speaker emphasizes that application logic typically dominates performance costs, making general benchmarks an imperfect yet still valuable reference. Throughout, curiosity from the chat prompts clarifications, illustrating the continual interplay between theoretical performance gains and practical developer trade-offs.  

### 00:30:00 – 00:45:00 — Lazy vs. Eager Execution and Scheduling Models  

Building on the benchmarking insights, the discussion turns toward lazy signal execution versus eager approaches in frameworks such as Solid, Preact, and Angular. The host highlights how fine-grained reactivity can be influenced by whether computations run immediately or wait until the last moment of necessity. This segment carefully outlines how each approach can produce distinct update patterns, potentially affecting the developer’s mental model, especially in asynchronous contexts.

The trade-off becomes clear: lazy signals can cut unnecessary work for certain use cases, but might complicate debugging or concurrency control. The speaker also raises a pivotal scheduling question—whether it’s better for computations to happen during a so-called “pure” phase, or if it’s feasible to allow partial or post-render updates. By drawing lines between React’s rendering approach and how Solid schedules reactive operations, listeners gain a deeper appreciation of the nuanced mechanics underlying each framework’s design.  

### 00:45:00 – 01:00:00 — Asynchronous Challenges and the Art of Holding State  

Attention shifts to how frameworks handle asynchronous data while maintaining UI consistency. The speaker outlines three main strategies—blocking, staying in the past, or displaying a placeholder—each with its own benefits and trade-offs. An illustrative scenario features a user’s name and a stylized image derived from it: if the text updates before the image finishes loading, should the UI wait or proceed with partial data? 

In dissecting such puzzles, the stream underscores that not all use cases share the same expectations. Some prefer immediate changes, even if it means brief misalignment, while others demand strict consistency. The host highlights that achieving a “hold” strategy—where the UI waits for everything to sync—often involves duplicating or hoisting state. This reveals how even a seemingly simple challenge can escalate in complexity, forcing a reevaluation of default framework behaviors versus more advanced patterns like transitions or fine-grained concurrency.  

### 01:00:00 – 01:15:00 — Transactions, Transitions, and Controlled Tearing  

Here, the speaker introduces the notion of treating async flows as “transactions” or “transitions,” reflecting a shared lineage with React’s concurrency features. They explain how blocking the entire UI during an async operation can frustrate users, but letting the view tear in inconsistent ways can be equally jarring. By grouping certain changes inside transitions, developers can preserve responsiveness for interactive elements while deferring updates that require longer server round trips.

This section also unpacks how frameworks balance immediate user feedback with synchronous consistency. The host acknowledges that advanced concurrency control can complicate the mental model, yet underscores how such techniques can drastically improve perceived performance and user experience. They examine the potential pitfalls—like locked states if transactions become too aggressive—offering a glimpse into ongoing research aimed at refining these patterns for real-world apps.  

### 01:15:00 – 01:30:00 — Framework Trade-offs and Server Components  

Turning toward server components, the conversation explores how React’s experimental approach handles data fetching and UI updates across client-server boundaries. Listeners learn about potential benefits, such as reduced client bundle sizes and faster initial rendering, balanced against challenges like complex server-client coordination. The host points out how “pure” rendering models often break down once asynchronous logic enters the picture, leading to a complicated set of trade-offs.

Throughout this chapter, the speaker draws connections to older patterns like multi-page architectures and attempts to resurrect them with modern tools. They highlight how transitions, caching, and routing all factor into building a truly reactive experience, whether the logic resides on the server or the client. This segment lays the groundwork for understanding how concurrency and data fetching are interwoven in next-generation frameworks.  

### 01:30:00 – 01:45:00 — Ecosystem Tensions: React, Remix, and Competing Paradigms  

This portion dives into the tension between new architectural patterns—like server components or resumability—and frameworks that champion more traditional single-page app approaches. Remix emerges as an example that heavily relies on loaders and actions for data updates, while Next.js demonstrates a more integrated RSC strategy. The host acknowledges that each solution has limitations, from dealing with fetch waterfalls to maintaining proper state across boundaries.

A key observation is how frameworks can converge on similar ideas—such as concurrency or code-splitting—despite starting from different philosophical standpoints. The speaker suggests that “hoisting” data logic often remains a critical technique no matter the platform. Conversation also touches on how large players like Meta or Vercel shape broader adoption trends, and the ways smaller frameworks must navigate these shifting technological waters.  

### 01:45:00 – 02:00:00 — Practical Insights on Suspense and Holding Patterns  

Here, the speaker recounts personal experiments with building or emulating features akin to React’s suspense. Through examples, they explain how a system that blocks until async data arrives avoids certain pitfalls but risks freezing the entire app if used too liberally. Additional nuance arises in partial updates: if only one section of a page is waiting on data, does the rest remain interactive?

This segment illustrates how incremental adoption of suspense can yield more user-friendly experiences. The host notes that patterns like transitional states or placeholders serve as valuable tools to maintain responsiveness. They also hint that a purely consistent approach might necessitate complex “forked state” structures, unless the framework provides higher-level primitives to unify concurrency and partial rendering.  