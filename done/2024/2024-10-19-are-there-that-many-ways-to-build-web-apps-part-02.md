---
showLink: "https://www.youtube.com/watch?v=ja4LIaxxUeA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Are There Actually That Many Different Ways to Build Web Apps?"
description: ""
publishDate: "2024-10-19"
coverImage: "https://i.ytimg.com/vi/ja4LIaxxUeA/maxresdefault.jpg"
---

## Episode Description

A wide-ranging exploration of modern web app architectures, performance trade-offs, and reactive programming patterns, with an emphasis on using signals and server-driven workflows.

## Episode Summary

This conversation examines different strategies and models for building complex web applications, focusing on how data and state ownership affect performance, reusability, and developer experience. The speaker compares single-page apps, server component approaches, and fully stateful server setups, highlighting the trade-offs each method introduces for page load, client interactivity, and mutation handling. Various technologies, including frameworks like Solid, React, and LiveView, are discussed for their unique ways of handling hydration, caching, and asynchronous updates. Throughout, the speaker addresses advanced topics such as resumability, optimistic UI patterns, and architectural constraints that arise when integrating server-driven reactivity. By considering real-world examples, code snippets, and potential future directions, the transcript offers insights into how developers can weigh infrastructure requirements against performance goals and user expectations.

## Chapters

### 02:24:00 - 02:30:00 &nbsp; Skepticism About “Universal” Solutions

In this segment, the speaker conveys caution about frameworks promising to solve every problem elegantly. They emphasize that universal solutions inevitably involve trade-offs, whether in code complexity, maintenance overhead, or performance quirks. The talk references older patterns like ASP.NET’s view state, highlighting the pitfalls of naive “all-state-in-one-place” approaches.

The speaker argues that real-world scenarios quickly test the boundaries of a single pattern, illustrating why incremental or mix-and-match strategies often emerge in production. They encourage developers to keep a critical eye on “magic bullet” claims.

### 02:30:00 - 02:36:00 &nbsp; Return to Resumability Concepts

The speaker then takes another look at resumability, examining how advanced compilers might skip shipping large swaths of client code if it’s only needed when a user triggers certain events. They mention frameworks that partially hydrate the DOM, deferring script execution until absolutely necessary.

Yet, they reiterate the complexities: distinguishing ephemeral UI tweaks from actual data changes is non-trivial. They stress that while resumability can significantly reduce initial overhead, it requires carefully analyzing an app’s usage patterns and acceptance of complex build pipelines.

### 02:36:00 - 02:42:00 &nbsp; The Promise and Cost of Full LiveView in JS

Looping back to Elixir’s LiveView, the speaker speculates on a hypothetical JavaScript live view approach. While a signals-based system might handle partial updates, full concurrency and robust scalability remain elusive without a platform like Beam. The idea of porting concurrency models into Node or Deno is intriguing but still immature.

They also mention that the ephemeral, serverless mindset conflicts with long-running socket connections. This mismatch in infrastructure highlights that building a fully stateful system in JavaScript requires specialized hosting and new runtime capabilities, far from the typical shared-nothing approach used by many providers.

### 02:42:00 - 02:48:00 &nbsp; Pre-Conclusion Thoughts on Multiple Approaches

Closing in on the halfway mark, the speaker restates that choosing an approach—be it a single-page app, server components, or stateful servers—isn’t simply about raw performance. It also involves practical considerations like developer familiarity, organizational deployment constraints, and how critical real-time updates are to the user experience.

They highlight that many frameworks continue to evolve, merging features once thought to be exclusive. Meanwhile, everyday developers often weigh reliability and maintainability over pushing the boundaries of minimal JavaScript or near-instant reactivity across the network.

### 02:48:00 - 02:54:00 &nbsp; Interlude: Checking Chat and Gathering Feedback

In this lighter phase, the speaker briefly looks at chat interactions, responding to a few viewers. They encourage people to like and subscribe, then offer thanks for general participation. They also mention the possibility of guests joining future streams, especially those building advanced Solid ecosystem tools.

While not diving into new technical content, this break underscores the collaborative nature of live coding sessions and the ongoing community conversation that spans multiple streams and projects.

### 02:54:00 - 03:00:00 &nbsp; The Complexity of Real-Time Shared State

The speaker resumes deeper technical talk about real-time shared state. They note that “signals” alone don’t automatically solve asynchronous event-driven updates across multiple clients. Instead, developers must carefully orchestrate event flows so that relevant data updates propagate only where needed.

They contrast single-user local reactivity with multi-user concurrency, asserting that distributed state requires more than hooking up signals. This leads to a discussion of how frameworks might blend signals for local rendering with streams or event buses for cross-client coordination.

### 03:00:00 - 03:06:00 &nbsp; Solid Hackathon Winners and New Primitives

In this time block, attention shifts back to the Solid hackathon, congratulating winners who contributed new documentation or libraries. Notably, they highlight a new “solid events” package, which introduces event-driven patterns that differ from signals. This fosters more flexible or stream-like solutions, complementing Solid’s standard reactivity model.

They briefly describe how an event emitter approach can chain transformations, offering advanced patterns not well-served by the default createSignal or createResource. The speaker celebrates how community members actively experiment with the ecosystem, building novel primitives and open-sourcing them for others.

### 03:06:00 - 03:12:00 &nbsp; Overlaps with X State and Reactive Libraries

Moving into potential synergy, the speaker suggests that event-driven solutions like the new “solid events” might align with state machine libraries such as X State. They note that many real-world tasks, from complex form handling to orchestration workflows, can benefit from an event-based approach. 

They also emphasize that signals remain excellent for straightforward cases but might not handle every advanced scenario. Having multiple reactivity strategies in one ecosystem broadens the framework’s appeal and addresses developer demands for more powerful control flows.

### 03:12:00 - 03:18:00 &nbsp; JavaScript as a Shared Language and the Beam Question

The discussion shifts to how bridging client and server with JavaScript remains a major advantage. The speaker acknowledges that languages like Elixir can outperform JavaScript for concurrency, but JavaScript’s ubiquity in the browser keeps it central for many teams. 

They muse about possible future runtimes, like WASI or a specialized JS on Beam, that could unify concurrency and universal code. However, these remain experimental, and they stress that immediate solutions mostly revolve around carefully orchestrating Node or Deno processes.

### 03:18:00 - 03:24:00 &nbsp; Navigating Platform Constraints

Here, the speaker reiterates that typical hosting solutions—like serverless or managed containers—can limit the feasibility of persistent websockets or single-state servers. Traditional load balancers often reroute requests unpredictably, making a truly shared memory model unattainable. 

They show that while specialized hosting or advanced distributed systems can approximate stateful concurrency, it demands unique orchestration. This reality check is important for developers who envision LiveView-like solutions but must deal with everyday cloud providers.

### 03:24:00 - 03:30:00 &nbsp; Summarizing the Realities of Large-Scale Applications

The speaker summarizes a key insight: large-scale apps can’t simply adopt the perfect architectural pattern without addressing deployment, caching, concurrency, and code organization. They remind listeners that every solution presents trade-offs, whether in consistency, performance, or ease of development.

They also address the near-mythical quest for a single approach that’s both high performance at scale and easy to maintain. In practice, teams layer solutions, using partial hydration or partial server-based rendering, matching their specific product requirements.

### 03:30:00 - 03:36:00 &nbsp; Building an Ideal Unified Model?

In this interval, the speaker imagines a theoretical system combining partial hydration, client-driven interactions, and a stateful backend. They outline how signals might unify those layers, but quickly acknowledge that bridging asynchronous boundaries remains tricky. 

They examine how projects like Qwik, Marco, and Solid push boundaries, often requiring advanced compilers or specialized runtime logic. The speaker hints that exploring “just enough” compilation to cut down unnecessary bundling could yield balanced solutions, though no easy path exists yet.

### 03:36:00 - 03:42:00 &nbsp; ASP.NET Memories and Potential Modern Parallels

Here, the speaker draws a historical parallel to ASP.NET’s approach, which once tried to maintain massive “view states” for partial updates. They note that modern frameworks learned to avoid such heavy-handed serialization. However, new compilation-based approaches can reintroduce partial server round-trips in a more controlled, fine-grained way.

They propose that if these round-trips remain small and efficiently targeted, they might avoid the performance pitfalls of older systems. Yet the engineering overhead of ensuring minimal overhead remains a challenge that only a few frameworks can manage reliably.

### 03:42:00 - 03:48:00 &nbsp; Reflecting on Marco 6, Qwik, and the Future

Returning to the ongoing front-end evolution, the speaker comments on how Marco 6 tries to achieve server-compiled partial updates in a developer-friendly manner, contrasting it with Qwik’s approach of dollar-sign annotations. They note that each method aims to reduce client overhead while supporting advanced use cases like incremental rendering and streaming.

They conclude that the next few years will clarify whether these compilation-heavy approaches gain mainstream traction or remain niche. This open question highlights how framework authors continuously experiment with “the perfect balance” of SSR, partial hydration, and developer experience.

### 03:48:00 - 03:54:00 &nbsp; The Late-Stream Observations on Routing

Around this point, the speaker touches on routing complexities again, explaining how adding client-side routing significantly changes the trade-offs. A framework that relies on static or MPA patterns can drastically reduce JavaScript, but once internal navigation is fully client-driven, rehydrating or rewriting DOM sections becomes unavoidable.

They affirm that advanced frameworks have tried “render-once, navigate many,” but it often reintroduces the client’s overhead. The conversation reiterates that architecture must prioritize either minimal JavaScript or flexible routing, rarely excelling equally at both without major engineering effort.

### 03:54:00 - 04:00:00 &nbsp; Re-Merging with the Solid Community Focus

As the four-hour mark nears, they circle back to the Solid community. The speaker again praises the hackathon efforts, encouraging participants to keep experimenting with new libraries, event systems, and caching solutions. 

They reference recent code releases that show how Solid’s design invites both straightforward usage for typical apps and advanced usage for boundary-pushing prototypes. The speaker believes Solid’s unique reactivity model can host creative solutions from simpler caching to partial server-driven state.

### 04:00:00 - 04:06:00 &nbsp; Adapting to Modern Build Tools and Deployments

The speaker reflects on how bundlers, TypeScript, and complex tree-shaking often shape a developer’s approach more than they realize. Tools that initially simplified code might now hinder advanced partial loading or server-only logic. 

They advise listeners to review their build configurations carefully before adopting advanced patterns, like code-splitting or resumability. It’s crucial that bundlers correctly interpret dynamic imports or interpret custom directives, or else developers risk shipping entire frameworks unnecessarily to the client.

### 04:06:00 - 04:12:00 &nbsp; Community Projects and Ongoing Experiments

During these minutes, the speaker highlights a few community-driven experiments. They mention individuals who are prototyping stateful servers in Node or exploring personal forks of frameworks that add ephemeral reactivity. Each experiment tests how far standard JavaScript can go without the concurrency model found in Elixir.

They also share anecdotes of small but valuable community contributions—like new tutorials or typed definitions for server functions. Through these, the transcript demonstrates how open-source thrives on iterative improvements and shared knowledge.

### 04:12:00 - 04:18:00 &nbsp; Revisiting Astro, HTMX, and Minimal JS Stacks

The talk swings back to minimal JS solutions, acknowledging that tools like Astro are still best suited for content-focused pages, gradually adding interactivity via islands. Meanwhile, HTMX or Turbo can do partial page updates with minimal overhead, but can’t fully replicate the fluid transitions of a well-optimized SPA. 

The speaker envisions continued cross-pollination: frameworks borrowing from minimal strategies to trim initial loads while supporting robust interactions where needed. They see no single approach conquering all use cases but anticipate more flexible tools ahead.

### 04:18:00 - 04:24:00 &nbsp; Reflecting on Past and Future Directions

Here, the speaker contemplates their personal journey from being drawn to React’s partial updates to exploring signals in Solid. They mention how evolving knowledge shapes decisions, referencing how many frameworks have shifted from global re-renders to more granular solutions over time.

They foresee further incremental improvements rather than abrupt revolutions. The conversation suggests the most promising road is one where developer experience is balanced with performance, offering defaults that work well but allowing experts to drill down into advanced caching or partial hydration.

### 04:24:00 - 04:30:00 &nbsp; Wrapping Up on Architecture Choices

As the session approaches four and a half hours, the speaker tries to synthesize the wide-ranging themes. They stress the triad of architecture categories once more, emphasizing that choosing among them depends on scaling needs, user experience goals, and team expertise. 

They mention that frameworks often allow mixing: adding interactive islands to an otherwise SSR-first site or chunking data in an SPA to mimic server behaviors. This nuanced approach demonstrates that no single solution solves all problems but that knowledge of multiple methods is empowering.

### 04:30:00 - 04:36:00 &nbsp; Final Thoughts on Signals as a Universal Mechanism

Returning to signals, the speaker discusses the tension between signals’ synchronous nature and real-world async flows. They mention that new libraries in the Solid ecosystem attempt to unify events and signals, but pure signals often struggle with concurrency unless carefully adapted. 

They still see signals as a robust foundation for local reactivity, noting that advanced usage demands layering event systems or external data sources for truly dynamic scenarios. This part underscores that signals are a potent but partial piece of large-scale puzzle-solving.

### 04:36:00 - 04:42:00 &nbsp; Checking in on Chat and Future Stream Plans

During these minutes, the speaker takes another pause to address chat questions, encouraging watchers to share feedback and highlight new community projects. They briefly mention the possibility of upcoming guests who will demonstrate real-time solutions or advanced caching prototypes.

They use this time to ensure the community feels included, reminding everyone that open-source thrives when people collaborate, report issues, and push creative experiments. This fosters a sense of community-driven progress in the evolving landscape of web development.

### 04:42:00 - 04:48:00 &nbsp; Revisiting Code Snippets and Demo Showcases

The speaker then revisits code examples from earlier in the stream, clarifying a few details. They show how single-flight mutations or manual cache writes can reduce bandwidth while still enabling quick interactions. This reaffirms that thoughtful APIs help developers handle advanced cases without adding undue boilerplate.

They also hint at potential future expansions, including hooking into server-based concurrency models or bridging more complex offline states. Each scenario highlights the interplay of low-level details and high-level convenience features, further illustrating the session’s emphasis on trade-offs.

### 04:48:00 - 04:54:00 &nbsp; Encouraging Community Innovation

In this section, the speaker praises the creative libraries emerging around Solid, React, or even purely event-driven solutions. They encourage anyone intrigued to contribute to existing projects or start their own experiments, noting that hackathons often lead to widely adopted libraries.

They see a bright future in blending serverless paradigms, partial hydration, or offline caching, so long as the community openly shares successes and pitfalls. This theme of collaborative problem-solving underscores how the ecosystem matures over time.

### 04:54:00 - 05:00:00 &nbsp; Reflecting on the Broad Range of Topics

As the five-hour mark nears, the speaker acknowledges just how many topics have been covered—from web component misunderstandings to advanced caching and from single-page app benchmarks to server concurrency. They remark that this complexity is both the allure and challenge of modern web development, requiring careful consideration of every layer.

They reiterate that broad knowledge helps one choose the right tools and patterns, whether it’s a personal project or enterprise-scale application. It’s a reminder that the discussion aims to illuminate trade-offs rather than prescribe a single best approach.

### 05:00:00 - 05:05:06 &nbsp; Stream Conclusion and Parting Remarks

In the final moments, the speaker wraps up the session with gratitude for everyone who stayed through the entire, lengthy conversation. They express excitement for future streams and the ongoing hackathon, inviting viewers to keep exploring new possibilities and returning for more discussions.

They sign off by reinforcing the theme that architecture, performance, and developer experience are all interlinked, and that the web ecosystem continues evolving with each innovative idea or community contribution. This note of optimism and collaboration closes out the expansive, five-hour exploration of modern web development challenges and potential solutions.