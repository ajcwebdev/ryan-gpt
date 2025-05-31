---
showLink: "https://www.youtube.com/watch?v=n3YtxzHRjI0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring the World of Marko w/ Michael Rawlings"
description: ""
publishDate: "2023-10-21"
coverImage: "https://i.ytimg.com/vi/n3YtxzHRjI0/maxresdefault.jpg"
---

## Episode Description

A lively conversation about the Marko framework, its history, and advanced front-end topics, featuring Michael Rawlings and extensive discussions on architecture and performance.

## Episode Summary

This episode focuses on the evolution of Marko, a cutting-edge framework originally developed at eBay for server-side rendering and partial hydration. It begins by introducing Michael Rawlings, a key contributor to the project, who recounts how he joined the Marko team and helped shape various releases, including Versions 4 and 5. Throughout the discussion, participants highlight Marko’s compiler-based approach, streaming capabilities, and its relationship to other frameworks like React, Svelte, and Solid. The conversation touches on advanced topics such as resumability, serialization, and the importance of thorough planning for large-scale migrations. They also reflect on the complexities of TypeScript integration, balancing powerful optimizations with a smooth developer experience. By the end, listeners gain an appreciation for the innovations driving Marko’s next iteration and the broader implications for modern web development.

## Chapters

### 00:00:00 — Introduction and Conference Recap

The episode opens with a friendly greeting as the host welcomes everyone and briefly recaps a recent conference they attended, Netlify Compose. He mentions the unique atmosphere of the event, combining talks from enterprise customers and developers discussing practical solutions for web applications. This sets the tone for the stream, indicating that they will explore both high-level themes and specific, real-world approaches. Listeners are invited to join in the chat, share their own experiences, and get comfortable for an in-depth conversation on modern web tooling.

The host shares impressions from meeting various industry professionals, highlighting the difference between past Jamstack-themed conferences and the broader, more enterprise-focused Netlify Compose. Mentions of interesting releases and new router solutions create a sense of anticipation for deeper technical discussions. The initial lighthearted banter helps establish rapport with viewers, who tune in across multiple streaming platforms. The stage is set for a dynamic session, soon to introduce the stream’s special guest: Michael Rawlings, a prominent member of the Marko team.

### 00:06:00 — Welcoming the Community and Checking Tech

In this segment, the host addresses the audience, encouraging participation through chat messages on both YouTube and Twitch. He double-checks his streaming settings, lighting, and audio quality, underscoring the importance of a smooth viewing experience. Jokes about mislabeled names and references to orange juice create a casual ambiance, while the host updates watchers on technical matters. This transitional portion eases everyone into the more substantial material on frameworks and performance that is soon to follow.

Viewers chime in with questions about streaming resolution, references to last year's Jamstack conference, and general community chatter. The host multitasks: posting links on social media, confirming platform stability, and responding to playful jabs from the chat. This back-and-forth fosters a sense of friendly engagement. In between, the host mentions the upcoming topics, teasing insights into Marko’s capabilities and how the framework addresses both developer and business needs. It’s a brief interlude that primes everyone for the main conversation ahead.

### 00:12:00 — Framework Banter and Highlander Jokes

Conversation shifts as the host humorously proclaims that “there can only be one best framework,” likening the fervor for different JavaScript libraries to a Highlander-style standoff. Listeners learn about tensions within organizations like eBay, where developers might prefer React for job market considerations. This opens an important discussion about technology choices driven by hiring demands and developers’ future prospects. The host underscores that, from a purely technical perspective, other solutions can sometimes outperform React in certain enterprise applications.

Personal anecdotes highlight the political side of framework adoption. The host recalls interviews with eBay engineers who migrated from Marko to React, revealing underlying motivations that have little to do with pure performance metrics. The conversation illustrates how personal career goals and ecosystem popularity can override specialized optimizations and advanced features. This interplay between marketplace realities and technical merit underscores the complexities that large-scale organizations face when choosing or retaining a particular framework.

### 00:18:00 — Introducing Michael Rawlings and His Role

Michael Rawlings officially joins the discussion, greeted as a key thinker behind Marko’s trajectory. His contributions focus on exploring new ideas, even if they sometimes turn out to be unproductive paths. The host playfully teases Michael about generating “bad ideas,” emphasizing that the creative process often requires testing many concepts before finding a viable approach. Michael’s position on the Marko team involves heavy collaboration with fellow developers like Dylan, iterating on compiler features and advanced rendering techniques.

Listeners learn about Michael’s break from active development when he took paternity leave. Upon returning, he proposed dramatic shifts in how Marko handled its hydration strategy, effectively introducing the concept of resumability within the framework. This pivot led to multiple internal iterations of Marko 6. The host credits Michael with championing radical ideas that align with broader trends in the community, including competition with other projects pushing for minimal or deferred hydration. This sets the stage for a deeper look into Marko’s development journey.

### 00:24:00 — Marko’s Early Resumability Vision

Michael delves into the backstory of proposing resumability around March 2021, a time when Marko was seeking to refine its async handling and hydration approach. He recounts how he stumbled upon a potential path to minimize or even remove startup JavaScript on the client, an approach that was simultaneously emerging under different names in other frameworks. In Marko’s case, they were still shaping the precise implementation, illustrating an innovation that paralleled progress in projects like Qwik.

This discussion highlights the independent yet convergent evolution of ideas such as partial hydration, out-of-order streaming, and the possibility of skipping a large hydration step entirely. Michael’s narrative shows Marko’s strong compiler-based foundation, enabling them to attempt cutting-edge strategies without sacrificing existing features. Although progress toward Marko 6 proved time-consuming, the potential payoff promised a truly modern solution that might redefine how developers perceive server-client boundaries. Each experimental branch left a lasting imprint on Marko’s design.

### 00:30:00 — The EBay Connection and Team Dynamics

Michael and the host recount the historical context of Marko’s creation at eBay, tracing it back to original architect Patrick Steele-Idem. Marko’s open-source status and its advanced features were early outliers in the JavaScript ecosystem. As Patrick departed for Amazon, a smaller team took over, including Michael, Dylan, and occasionally others. They faced the monumental task of maintaining eBay’s live platform while pushing the framework forward. This chapter of Marko’s story underscores the blend of corporate investment and pioneering spirit.

They reference earlier versions of Marko—3, 4, and 5—explaining key upgrades in speed and architecture. Version 4, for instance, introduced a unification of server rendering and client interactivity, removing the separate “widgets” module. Michael recalls two-person teams overseeing major migrations across the massive eBay codebase, a process that sometimes took years. This reveals both Marko’s strong performance pedigree and the organizational complexity behind changing frameworks at scale, where business units and developer motivations often intersect.

### 00:36:00 — Marco Did It First: Islands and Streaming

A running joke, “Marco did it first,” arises when comparing Marko’s longstanding techniques to newer frameworks. Features like out-of-order streaming, partial hydration, and single-file components were present in Marko nearly a decade ago. The host references older blog posts showing Marko’s progressive streaming akin to BigPipe, demonstrating an advanced approach to server-side rendering long before popular solutions like React Suspense. Listeners gain insight into Marko’s place as a foundational innovator that shaped today’s competitive front-end space.

They highlight how Marko’s compiler orchestrates these features, letting developers write nearly pure HTML while automatically handling optimized DOM updates. The conversation touches on eBay’s performance gains, including real-world use cases of Marko outpacing other frameworks in load times and network constraints. Michael stresses that these capabilities evolved steadily, backed by eBay’s large-scale usage. This comprehensive background helps listeners see how Marko’s “islands” approach has been central to its identity, foreshadowing continued innovations in the upcoming Marko 6.

### 00:42:00 — Embedding Compiler Hooks and Transformations

Michael reflects on the original draw that led him to Marko: its compiler hooks. As a freelance developer building a content management tool, he found Marko’s extensibility ideal for customizing HTML transformations. He describes how such hooks enabled advanced dynamic behaviors—like inline editing—without rewriting standard markup. The ability to intercept and manipulate templates during compile time offered both convenience and power, a combination that resonated with his ethos of staying close to actual HTML while layering functionality.

Further details emerge about Marko’s early architecture, revealing that its streaming foundation, AST manipulations, and code output were all designed for performance at scale. Michael’s anecdote underscores the synergy between a template-driven approach and the advanced transformations possible through the compiler. From small marketing sites to enterprise platforms like eBay, these mechanisms showcased a robust adaptability. The conversation underlines that compiler-driven frameworks can deliver both developer-friendly syntax and sophisticated optimization paths, a theme that persists throughout Marko’s evolution.

### 00:48:00 — Transition from Marko 3 to Marko 4

The discussion moves to the period following Marko’s open-sourcing and the eventual shift to Marko 4. Michael joined the team shortly after the release of Marko 3, quickly noticing areas that needed refinement. This led to proposals like integrating “widgets” into the main framework. Marko 4 unified the developer experience, eliminating the need for separate packages to handle interactive components. The host recounts how blog posts announcing Marko 4 garnered attention, highlighting performance benchmarks that dwarfed React’s server-render speed.

They recall how eBay’s large-scale migration from Marko 3 to Marko 4 took nearly two years, overseen by just a handful of core maintainers. Despite sparse public fanfare during that period, Marko was quietly becoming a backbone of eBay’s front-end stack. The result was a more consolidated runtime, streaming-friendly partial hydration, and a smaller JavaScript footprint. This was also when “Marco did it first” claims began circulating, as other frameworks only started catching on to similar features years later.

### 00:54:00 — Marko 5 and the Road to Marko 6

Michael explains that Marko 5 mainly focused on updating the compiler’s internals, transitioning from custom systems to Babel for parsing and transformations. This shift gave developers a more standard toolchain without altering most runtime APIs. While Marko 5 seemed under the radar, it paved the way for the ambitious Marko 6 vision, targeting advanced hydration and reactivity at compile time. The host acknowledges that Marko 5 ironically felt like a stepping-stone release, keeping the project stable for eBay’s production apps.

Attention then turns to Marko 6, which introduces an overhauled approach to signals, reactivity, and “resumability.” They describe how iteration upon iteration tried to strike the right balance between cutting-edge performance and straightforward developer ergonomics. Although progress has been slower than hoped, the synergy among the Marko core team keeps the project on track. Marko 6 aims to revolutionize the way data flows and re-renders across server-client boundaries, ensuring minimal overhead without sacrificing the simplicity of plain HTML syntax.

### 1:00:00 — Deepening the TypeScript Story

At this juncture, Michael shifts focus to one of the most requested features: first-class TypeScript support. He outlines the hurdles of merging a dedicated templating language with TypeScript’s static analysis, especially given Marko’s compiler transformations. The conversation reveals that while early prototypes existed, they needed to handle complex generics and cross-template inference. The team recognized that giving developers type-safe code completions, refactoring, and error checking in Marko files was crucial for adoption at both eBay and the broader community.

They note that implementing TypeScript in Marko demanded extensive collaboration, especially with Babel-based tooling. Michael praises Dylan’s work on sophisticated solutions that unify compiled Marko output and type definitions, permitting consistent editing experiences across different files. The new language server offers features such as autocompletion and advanced IntelliSense inside Marko templates. Listeners get a glimpse of the internal complexities, highlighting why a straightforward approach never sufficed. The potential payoff, however, is enormous: full typing in a purely template-first framework.

### 1:06:00 — Type Narrowing and Future Compiler Plans

Michael illustrates how Marko’s TypeScript integration can handle scenarios like conditional logic in templates, narrowing types based on `if` conditions. This approach surpasses the typical static checks in JSX, thanks to Marko’s specialized AST and deeper compiler introspection. The host reacts enthusiastically, marveling at the fluid developer experience. They compare Marko’s generics handling to emerging solutions in Svelte and note that Marko’s approach brings unique advantages from years of internal compiler development.

They also touch on compiling advanced generics, hooking into Babel, and bridging the gap where TypeScript’s default capabilities fall short. While some limitations persist—like unknown child components—the team plans further improvements. They reaffirm that Marko’s compiler-based approach, coupled with well-structured metadata caches, sets the stage for even richer introspection across component boundaries. These deep integrations promise a future where Marko’s typed templates can outshine many conventional single-file component setups.

### 1:12:00 — Introducing Marko Run and Its Purpose

Attention turns to Marko Run, a new meta framework built on Vite. They highlight how Marko historically required manual setup for both server rendering and client bundling, often tackled with tools like webpack or the older lasso bundler. Marko Run streamlines this setup, similar to frameworks like Next.js or SvelteKit. By consolidating routing, bundling, and server logic, it aims to lower entry barriers for developers, removing guesswork around build pipelines and configuration.

The host explains how Marko Run is intended for both open-source enthusiasts and eBay’s internal teams, ensuring consistent investment and maintenance. For internal teams, Marko Run replaces custom boilerplates with a standard approach, allowing new apps to come online quickly. Externally, this means minimal friction for anyone curious about Marko’s advanced features. The conversation frames Marko Run as an all-in-one solution, yet flexible enough to fit seamlessly into different organizational needs, from small experiments to enterprise-scale applications.

### 1:18:00 — Walking Through a Marko Run Project

The host demonstrates how to start a new Marko Run project, using CLI commands like `npm init marco`. The default scaffold creates directories for routes, layouts, and handlers, each with “plus” convention filenames such as `+page.marko` or `+layout.marko`. This structure emulates known patterns from other frameworks, letting the file tree define routing and middleware logic. The conversation points out easy streaming defaults and automated bundle splitting, crucial for multi-page apps that still want dynamic interactions.

They break down how `+handler.marko` or `+middleware.marko` files can intercept requests, giving developers fine-grained control over authentication or business logic. Marko’s partial hydration means each page can remain mostly server-rendered, with selective interactivity for specific components. This approach caters to different performance requirements without forcing a single-page application model. Real-time route exploration, displayed at a special URL, helps visualize the app’s structure and bundle sizes. Listeners see that Marko Run aims to balance convention with the advanced features that set Marko apart.

### 1:24:00 — Embracing MPA Patterns and Hybrid Approaches

They compare Marko Run’s MPA-first model to popular solutions like React-based Next.js or the SvelteKit MPA approach. Despite not relying on universal client-side routing, Marko retains the ability to incorporate transitions and partial updates where necessary. This resonates with developers who prefer multi-page flows but still want selective reactivity and minimal JavaScript payloads. The talk underscores the synergy between Marko’s streaming capability and Marko Run’s routing, offering a fluid experience for building e-commerce platforms or complex dashboards.

Questions about client-side routing arise, prompting mentions of potential future enhancements. They reference approaches akin to Astro’s partial hydration or transitions that keep persistent components alive across route changes. While not in Marko Run’s initial scope, it remains on the radar. They also discuss the recent popularity of “view transitions,” indicating that advanced page-to-page animations might become simpler as browsers implement related standards. The segment concludes by underscoring Marko’s adaptability to either purely server-driven flows or more nuanced hybrid solutions.

### 1:30:00 — Marko 6 Compatibility Layers

Michael reveals an upcoming compatibility layer allowing Marko 6 components to coexist with Marko 5, ensuring a smoother migration for eBay’s extensive codebase. Internally dubbed the “interop translator,” this mechanism selectively compiles components based on recognized syntax. If a file uses older class APIs, it routes compilation to Marko 5’s translator. If it detects newer tags-based syntax, it compiles to Marko 6. This approach accommodates large teams, reducing friction by letting them incrementally adopt new features.

He details how child components rendered by Marko 5 could be dynamically swapped for Marko 6, using a bridging script that handles differences between the two runtimes. This means no forced rewrites for legacy code, although full Marko 6 benefits, such as advanced signals, require rewriting older components. Nonetheless, partial adoption can unlock modern patterns in isolated sections. Listeners gain a sense of Marko’s careful path forward—balancing ambitious redesigns with real-world demands of large legacy platforms.