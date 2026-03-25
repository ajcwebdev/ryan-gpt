---
showLink: "https://www.youtube.com/watch?v=g584AIL1HtI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ Signals"
description: ""
publishDate: "2023-03-04"
coverImage: "https://i.ytimg.com/vi/g584AIL1HtI/sddefault.jpg?v=6402482e"
---

## Episode Description

A wide-ranging conversation exploring reactive programming, signals, and modern JavaScript frameworks, touching on performance, history, tooling, and upcoming innovations in the ecosystem.

## Episode Summary

This extended conversation spans a broad range of topics related to reactive programming, signals, and how different JavaScript frameworks have evolved their own approaches. Starting with a historical view of libraries like Knockout, Angular, and React, it highlights how early challenges shaped today’s solutions. The speaker explains the fine-grained nature of signals, the role of memoization, and how frameworks such as Vue, MobX, and Solid tackled these concepts differently over time. There is in-depth discussion around React’s paradigm versus newer signal-based models, examining both technical and philosophical trade-offs. The speaker also addresses various community responses, development tools, and potential future directions, including compiler-based optimizations and stricter linting or runtime checks. Throughout, the conversation underscores how developers can manage complexity more effectively, from small-scale performance gains to overarching architectural decisions. By the end, the speaker shares ideas on possible upcoming changes in Solid’s API and how the community might handle future evolution.

## Chapters

### 00:00:00 - Intro and Stream Setup

In this opening segment, the host greets viewers and briefly apologizes for a delayed and less-organized start to the stream. They talk about the week’s overall busyness, sharing the usual housekeeping tasks such as sending out social media notices and waiting for people to join. This is a relaxed period where the speaker sets the tone for a long-format talk, acknowledging the audience’s presence and letting everyone settle in. Background chatter also covers mild banter with the chat, discussing ongoing projects and small personal updates.

During these initial minutes, the host hints at the topics that will come up later, including Angular’s adoption of signals, various experiments in reactivity, and a planned discussion about recent events within the web development community. The atmosphere is casual and inviting, reflecting a desire to dive into technical themes without rushing. Before fully launching into the core subject, the speaker tests audio and video aspects, ensuring everything works. The host also mentions Solid 1.7 in passing, foreshadowing a more in-depth exploration of reactivity changes coming later in the stream.

### 00:05:00 - Angular Signals Announcement

Around the five-minute mark, the conversation pivots to Angular’s announcement of signals, which caught the attention of multiple JavaScript communities. The speaker explains how Angular, once perceived as lagging behind modern reactivity trends, has introduced a new fine-grained reactivity system. This shift sparks renewed excitement for developers who recall older reactive solutions in other libraries. By pointing to various tweets and blog posts, the host shows that Angular’s move has reignited debates about the future direction of frameworks that historically relied on different patterns.

The speaker contextualizes Angular’s decision by noting changes in the Angular team itself, highlighting how new contributors have brought fresh perspectives on signals, hydration, and more. A few well-known figures in the Angular and broader community are mentioned, establishing the significance of this transition. While not getting lost in the details just yet, the speaker conveys the idea that Angular’s signals concept aligns with a growing industry-wide trend toward granular reactivity—one that other frameworks like Vue, Solid, Preact, and Quick have also embraced or experimented with.

### 00:10:00 - React Community Reactions

In this time window, attention shifts to how React developers and core team members responded to the rise of “signals hype.” The host pulls up tweets and discussions from key individuals in the React ecosystem, illustrating the varied responses—ranging from curiosity and open-mindedness to skepticism and outright dismissal. These quotes underscore that React’s leadership has reasons for its current architectural choices, including scheduling, immediate mode, and concurrency features. Yet, the host suggests these new signals discussions are opening doors to re-explore design decisions made ten years prior.

The speaker identifies a central question: does the signals approach place undue focus on performance optimization at the expense of a simpler programming model, or can it deliver better clarity and developer experience? By referencing commentary from Andrew Clark, Dan Abramov, and others, the host illustrates how the React team has historically rationalized their re-render model and what they term the “React philosophy.” This sets up a broader theme: to what degree do older concerns about reactivity—like messy two-way binding—still apply, and how might signals libraries today prove such concerns outdated?

### 00:15:00 - Deconstructing “Reactive Programming Is a Dead End”

Around the fifteen-minute mark, the host delves into historical arguments against reactive systems. One recurring refrain is that dynamic subscriptions create complexity, leading some prominent developers to label reactivity as a potential “dead end.” The speaker references past frameworks—like Knockout, Meteor, and older Angular—to show how inadequate or naïve implementations of reactivity allowed cyclical updates or performance traps. Critics pointed out how subscription webs could cause confusion when events ping-ponged through components.

The speaker explains how modern libraries address these pitfalls through unidirectional data flow and enforced derivations, citing MobX and Vue 3’s approach to reactivity as major breakthroughs. A significant piece is how these systems manage effects and ownership to avoid memory leaks. By detailing the evolution from basic push-based updates to push-pull hybrids, the host argues that current frameworks have largely solved older “gotchas.” This frames the next phase of discussion: whether signals—viewed through the lens of modern engineering—are indeed a step forward rather than a return to flawed patterns.

### 00:20:00 - Historical Trail: Knockout, Vue, and MobX

Here, the speaker outlines the lineage of reactive programming in the JavaScript world, starting with Knockout’s pioneering concepts and continuing through Vue’s and MobX’s advanced approaches. Knockout introduced the idea of observable properties and computeds but lacked sophisticated ways to handle memory disposal or prevent cyclical updates. The speaker emphasizes how MobX’s derivations improved this, effectively guaranteeing unidirectional updates if used correctly. Vue integrated reactivity under the hood early on, though it initially chose to hide these mechanisms behind a simple “just update the data” model.

Although Vue’s older versions avoided explicit signals, its reactivity was still there, using watchers and a cleverly managed system. The host describes how many were unaware that Vue’s internals essentially paralleled reactive flows in other libraries. The talk highlights how SJS, Surplus, and various lesser-known projects further refined the approach, introducing ownership trees to automate cleaning up subscriptions. This background helps illustrate how signals, though sometimes viewed as a new concept, are in fact the culmination of years of incremental innovation across the community.

### 00:25:00 - React’s “Immediate Mode” versus Retained Mode

Beginning around the 25-minute mark, the conversation compares React’s “immediate mode” approach to rendering with older retained-mode concepts. Drawing on analogies from graphics programming, the speaker explains that React tries to re-render everything each time, akin to a game loop that draws a new frame. Older frameworks used a retained-mode approach, where stateful DOM objects were mutated directly. Though immediate mode can appear less efficient at first, React’s scheduling—via time slicing and concurrent rendering—aims to keep user interfaces responsive.

Yet, the speaker points out that fine-grained reactivity spares the need for large-scale re-renders, focusing only on parts of the UI that change. This leads back to the central question: is the immediate-mode mindset simpler or more predictable, or does it overlook potential performance and clarity gains from signals? The host notes that Angular’s pivot may signal an industry desire to combine the predictability of unidirectional data flow with the pinpoint efficiency of reactive updates. The trade-off lies in deciding between a uniform re-render approach versus something more granular and carefully optimized.

### 00:30:00 - Revisiting Old React Debates

The speaker reflects on how React’s early justifications for throwing out two-way binding and adopting components with top-down data flow shaped a generation of developers. In the mid-2010s, various experiments in reactivity, like Meteor or Elm’s signals, were overshadowed once React popularized its new paradigm. The conversation highlights that React’s fundamental premise addressed the complexity caused by earlier frameworks’ multi-directional binding. Yet, these historically valid critiques might no longer apply if signals are implemented with modern checks and strict unidirectional data paths.

Because React successfully solved widespread pain points, many in its community see signals as revisiting territory React “already fixed.” The host poses a counterpoint: reactivity has evolved considerably since React’s inception, introducing disposal scopes, lazy computations, and controlled side effects. The question becomes whether React’s legacy narrative—“we overcame older reactive pitfalls”—might be incomplete, now that libraries like Vue, MobX, and Solid demonstrate stable, unidirectional reactivity with minimal overhead. This tension underpins the ongoing debates, as captured by numerous tweets and blog posts that the speaker references.

### 00:35:00 - The Influence of Compile-Time Approaches

Around this point, the speaker highlights how compilers and advanced build setups open new horizons for reactivity. Svelte, for instance, compiles away its reactivity, making it invisible at runtime. Similarly, Vue’s “Vapor mode” and experiments in compilers for Solid and React show potential to automate or heavily optimize reactivity. By analyzing code patterns and eliminating repeated computations, these compilers aim to merge the convenience of signals with minimal developer overhead.

Yet, the host acknowledges that compiler-driven frameworks can introduce friction if they impose constraints on how developers structure code. Tools like React Forget promise near-magical performance by analyzing dependencies, but the complexity of controlling reactivity behind the scenes could also hide potential pitfalls. Even so, the speaker believes that standardizing on signals or a signals-like data model makes these next-gen compiler optimizations easier. The conversation sets the stage for how frameworks might unify around the concept of signals under the hood, with or without explicitly exposing them to users.

### 00:40:00 - Parsing the Solid, Surplus, and SJS Story

Here, the speaker explains Solid’s foundation in SJS and Surplus, which introduced key concepts like push-pull reactivity, disposal scopes, and partial hydration techniques. Surplus specifically showcased fine-grained updates that bypass the virtual DOM, influencing Solid’s eventual design. The host credits SJS for a circuit-like approach to reactivity, where changes propagate across a graph in a single clock cycle. This eliminates many anomalies from older libraries, reducing the chance of loops or stale data.

The speaker clarifies that Surplus and SJS laid the groundwork for Solid’s streamlined approach, removing the overhead of a component-based re-render loop. This deep lineage challenges assumptions that signals must be ephemeral or high-maintenance. The conversation also underscores that multi-level disposal—where reactive computations automatically clean up children when parents are re-created—helps keep memory usage in check. Listeners gain a clearer understanding that Solid’s approach didn’t emerge overnight; it evolved through a rich history of smaller, incremental breakthroughs in reactivity.

### 00:45:00 - Vue 3 and Composition

In these minutes, the focus shifts to Vue 3’s Composition API and how it aligns with or differs from classic “signals.” Though Evan You initially hid reactivity in Vue 2 behind a more conventional object-based interface, Vue 3 made it explicit via refs and reactive objects. The speaker notes how many Vue developers never realized that Vue essentially used signals internally, only exposed in a user-friendly manner. Composition API then brought partial control over reactivity, combining the best of React hooks and fine-grained updates.

Yet, Vue’s reliance on a virtual DOM means that even with signals-like reactivity, updates may happen at a component granularity. The host explores how Vue tries to optimize these updates, but there remain trade-offs compared to purely fine-grained solutions. Still, the conversation underscores that Vue 3’s approach, along with ideas like Vue Vapor, demonstrates how reactivity, compilation, and partial hydration can converge. By weaving Vue’s story alongside Angular’s signals or Solid’s underlying model, the speaker paints a portrait of an ecosystem steadily embracing more granular reactivity patterns.

### 00:50:00 - The React Documentary Perspective

Around the 50-minute mark, the speaker references the React documentary, noting how it documents the early struggles of the React team to convey their radical new concept. They recall how figures like Pete Hunt, Jordan Walke, and Jing Chen fought skepticism from a community accustomed to MVC and two-way bindings. The documentary reveals React’s “eureka moments,” such as ditching templates, adopting JSX, and normalizing re-renders as the path to simpler mental models.

Despite React’s resounding success, the host remarks that times have changed. Many headaches React once solved can now be addressed with more advanced reactive systems, harnessing advanced scheduling or compiler-based strategies. The documentary still highlights timeless lessons on data flow, unidirectionality, and co-locating logic. Yet, the speaker suggests that React’s unwavering reliance on a virtual DOM and forced re-renders may feel increasingly restrictive to developers who see signals as a more direct path to predictable updates.

### 00:55:00 - Community Dialogue on Scaling and Large Teams

Here, the conversation tackles whether signals truly scale to massive codebases with hundreds of engineers, a topic central to major framework adoptions. The speaker presents quotes from well-known developers stating that real “enterprise scale” concerns may differ from small-scale performance gains. Angular’s willingness to adopt signals, however, hints that large teams might find them beneficial if properly structured. The notion that signals or fine-grained reactivity might become tangled or cyclical can be mitigated through modern disposal scopes and explicit derivation rules.

Listeners learn that frameworks like Angular weigh production stability, backward compatibility, and developer retraining when introducing new patterns. If Angular’s signals pass rigorous scrutiny, it could validate signals for big organizations once skeptical of reactivity. The speaker points out that frameworks must handle edge cases, advanced scheduling, and debugging tools before large teams can fully embrace them. This sets up the practical question: is the biggest challenge of signals technical, or is it persuading major companies and dev teams used to a React-like approach?

### 01:00:00 - Performance Benchmarks and Design Philosophy

After the one-hour mark, performance benchmarks enter the spotlight, with references to older tests like dbmon, js-framework-benchmark, and more. The host discusses how fine-grained reactivity libraries often outperform or match top virtual DOM contenders, especially when dealing with large updates or repeated rendering. These figures are used to rebut claims that signals cause overhead or hamper rendering speed. Instead, they show that, in many cases, signals-based frameworks prove highly efficient.

However, the speaker warns that raw performance numbers do not fully capture developer experience or code clarity. Benchmarks only measure certain operations—like creating 10,000 rows—without reflecting everyday patterns. Still, the data underscores that well-implemented signals can manage complex UIs without performance bottlenecks. By comparing test results across Surplus, Solid, Inferno, and others, the host illustrates that reactivity needn’t be slow. For many, this performance equivalency or superiority removes the last big barrier to accepting signals as a mainline approach.

### 01:05:00 - The Compiler Future, React Forget, and Svelte

Moving beyond raw benchmarks, the discussion shifts to how compilers might rewrite JavaScript code for optimal rendering. “React Forget” is highlighted as an ongoing project to memoize React components automatically, aiming to cut down on spurious renders. This approach tries to replicate the performance benefits of signals without shifting React’s fundamental mental model. Similarly, Svelte’s compiler uses a different strategy, generating tightly optimized code with minimal runtime overhead.

The speaker ponders whether React might eventually adopt signals under the hood, allowing a compile step to manage them invisibly. They reference comments from Andrew Clark suggesting partial acceptance of signals if hidden from userland. Meanwhile, other frameworks, such as Dominic Gannaway’s upcoming research framework, appear to treat signals as a low-level building block, further hidden behind standard React-like syntax. As the host explains, this convergence hints that reactivity plus compilers might define the next generation of JavaScript UI frameworks.

### 01:10:00 - Dan Abramov’s Feedback and Developer Experience

Around this point, the speaker spotlights Dan Abramov’s public commentary on Twitter, addressing misconceptions about signals and reactivity. Dan’s critiques center on maintaining a clean mental model for developers, advocating that one should not have to think too deeply about performance. Yet, the host notes an irony: React’s hooks already push developers toward certain mental hoops, like dependency arrays and potential over-renders. For some, signals appear more straightforward than carefully memorizing or structuring component logic.

The speaker shares examples where React’s forced mental model collides with dynamic data or large-scale UI changes, sometimes requiring advanced memorization or state management solutions. They emphasize that Dan Abramov’s points are rooted in React’s core philosophies, not personal preference alone. By examining these nuanced debates, the conversation illustrates how top-level framework architects see reactivity and weigh the trade-offs. Listeners gain an appreciation for how important mindshare, developer experience, and existing ecosystem momentum are when introducing new primitives like signals.

### 01:15:00 - Controlling Complexity: Store vs. Component Boundaries

At around the 75-minute mark, discussion turns to the architectural question of where state should live—in large shared stores or subdivided by components. Signal-based libraries allow extremely granular updates, making it less necessary to split state into multiple smaller components purely for performance. The speaker cites how this can simplify refactoring: developers can centralize code first, then break it into more maintainable chunks later without suffering performance hits.

This stands in contrast to React’s re-render approach, which often nudges devs to break down components to avoid unnecessary updates. While not inherently wrong, that structure can be forced by performance concerns rather than domain logic. The host views signals as a way to unify state ownership and data flow, letting developers reorganize code for their own clarity. Observers see it as bridging the best of both worlds—unidirectional flow without being locked into a hierarchy determined by render cycles.

### 01:20:00 - Showcasing Code Transformations

Around 80 minutes in, the speaker pulls up snippets comparing React code to an equivalent signals-based solution, demonstrating how small or large control flow transformations can simplify logic. For instance, instead of storing ephemeral pieces of data in multiple places, a single signal or computed can feed multiple parts of the UI. The conversation also explores how compilers might transform a declarative signals syntax into a more traditional imperative sequence behind the scenes.

These examples underscore that a signals-based approach can feel very intuitive once developers stop thinking about re-renders. Listeners see how the compositional power of signals can reduce boilerplate, though the speaker admits some devs prefer the mental clarity of re-running an entire component. Specific code snippets highlight the differences in a side-by-side format, illustrating how the impetus to preserve a purely functional appearance can be reconciled with deeper reactive mechanics.