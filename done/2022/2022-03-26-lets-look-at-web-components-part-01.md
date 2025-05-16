---
showLink: "https://www.youtube.com/watch?v=BEWkLXU1Wlc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Let's look at Web Components"
description: ""
publishDate: "2022-03-26"
coverImage: "https://i.ytimg.com/vi/BEWkLXU1Wlc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging exploration of web components, their practical applications, and how they compare to modern JavaScript frameworks, spanning performance, tooling, and future possibilities.

## Episode Summary

This discussion begins by establishing the host’s personal background working with web technologies and early experiences with web components. From there, it examines the fundamental building blocks—HTML templates, custom elements, and the shadow DOM—highlighting how each piece fits into a developer’s toolkit. The conversation then turns toward various libraries and frameworks, referencing both historical and modern solutions like Polymer, Skate, and Lit, to show how the ecosystem has evolved. Throughout, the speaker weighs performance concerns, tooling complexities, and architectural trade-offs that influence decisions on whether to adopt web components or rely on established frameworks. Attention is also given to topics such as progressive enhancement, style scoping, partial hydration, and server-side rendering, all of which offer insight into how these technologies integrate into today’s web landscape. Ultimately, the host addresses the broader notion of “future proofing” in web development, recognizing that innovation inevitably outpaces standardization, while still affirming that web components hold strong value in specific contexts and use cases.

## Chapters

### 00:00 - 00:06 • Introduction and Stream Setup

The session opens with the host setting the stage for a deep conversation about web components and their place in modern development. He mentions his previous experience and hints that this topic can be divisive, partly because web components occupy a lower-level space than typical frameworks. There is also some light banter about technical hiccups, including a temporary issue with screen sharing and permission settings. Viewers are welcomed into the live stream, and the host encourages them to participate in the chat as the session kicks off.

Within these first minutes, the host signals that this talk will roam through various angles—how web components differ from framework components, how performance factors into design decisions, and how they either align with or challenge modern app-building practices. His mention of controversies around using the “platform” in contrast to popular libraries sets up the core discussion. The segment culminates with a sense of enthusiasm, as the host readies his screen to begin sharing examples and insights about these fundamental browser features.

### 00:06 - 00:12 • Recent Developments and Context in JavaScript

Turning attention to the broader JavaScript world, the host recaps notable happenings and personal revelations from the past few weeks. He touches on hydration strategies, referencing discussions with figures like Misko Hevery and insights into advanced techniques like resumability. There is a mention of frameworks that claim to bypass or minimize the traditional hydration overhead by serializing event listeners, foreshadowing a possible future where large rerenders are less common.

The speaker underscores how quickly evolving the JS scene can be, particularly around server-side rendering and streaming. He highlights the complexities of measuring performance, referencing situations where Chrome’s DevTools might mask true server timings, leading to misunderstandings of frameworks’ throughput. These musings set a backdrop for why web standards and user-land tools often diverge, showing how measuring real-world scenarios can challenge or confirm long-held assumptions. The foundation is laid for a deeper reflection on how web components fit into this performance narrative.

### 00:12 - 00:18 • Streaming, Framework Tensions, and React Ecosystem

In this segment, the host delves into the advantages of streaming server rendering. He recounts discussions with framework authors who initially doubted the benefits, only to reconsider once real-device measurements showed streaming’s positive impact. The conversation references well-known figures like Ryan Florence from Remix, highlighting the importance of empirical testing versus relying solely on local DevTools. This line of thought underscores the subtle interplay of network latency, rendering speeds, and the difficulties of simulating these factors accurately in desktop-only throttling tools.

The focus then shifts to the broader React ecosystem and how the React team’s direction, in collaboration with frameworks like Next.js, can create tension with third-party libraries. The host points out that React’s roadmap has always included big changes, such as concurrent rendering and server components, which can drastically alter how routing or data fetching is approached. He describes how Remix and Next.js may be diverging in vision, with each staking its claim to be the future of React-based development. This background provides a fitting segue into how web components tackle or avoid these same complexities.

### 00:18 - 00:24 • The Rise of New Ideas in React and Other Libraries

Here, the host expands on ongoing shifts in the React community, noting how suspense and transitions evolve alongside server components. He reaffirms that mainstream libraries often chase the same high-level goals, such as more efficient hydration or partial rendering, but differ in how they implement them. By contrasting Remix’s approach with Next.js’s close alignment to React core, the host reveals a strategic landscape where multiple solutions aim to solve the same fundamental problems, each claiming unique advantages.

He also touches on the emerging wave of multi-framework approaches, pointing out how React server components could shape routing and data-loading conventions in ways that break from current client-oriented norms. This signals a philosophical pivot: where once routers were treated as ancillary libraries, now they are integral to the design of server-driven rendering flows. The stage is set to examine how web components, with their standard-based approach, either complement or clash with these evolving design patterns in mainstream frameworks.

### 00:24 - 00:30 • Vue’s Alternative Rendering Mode and Broader Implications

Attention shifts momentarily to the Vue ecosystem, where an alternative compile target reminiscent of Solid’s methodology is being explored. The host explains that many frameworks, from Vue to Svelte to Solid, share foundational ideas in reactivity but implement them uniquely. This new potential rendering mode in Vue indicates a willingness among framework creators to experiment with dropping or reducing the virtual DOM layer when possible, hinting at an ongoing search for performance gains.

He recognizes that while Vue has historically opted for a virtual DOM approach, the underlying reactivity system could easily support a more direct rendering mode. The conversation notes that adopting such a mode isn’t merely about speed; it also reflects how frameworks aim to balance developer ergonomics with high-end performance. The audience learns that these developments tie into a broader narrative of platform capabilities versus user-land innovation, foreshadowing a pivot to web components, where standard APIs also make performance promises but come with trade-offs.

### 00:30 - 00:36 • Transition to Web Components Discussion

Having laid out the context of server rendering debates, the React ecosystem’s evolution, and glimpses of Vue’s experiments, the host finally pivots fully to web components. He recalls that they represent a suite of standards—HTML templates, custom elements, shadow DOM, and module imports—and acknowledges that complete cross-browser support arrived only recently. Despite years of speculation about a “breakthrough moment,” the technology is still finding its place.

The host notes that, in principle, web components allow for a truly native way to define and reuse elements without external frameworks. However, he hints at deeper problems: authoring complexity, performance overhead, and limited synergy with advanced features like SSR. As he invites listeners to assess real-world viability, he prepares to demonstrate the core APIs—revealing the straightforward yet sometimes verbose approach required to build interactive widgets from the ground up.

### 00:36 - 00:42 • Creating a Basic Custom Element (Code Demo)

In this block, the host begins a live coding demonstration of how to craft a custom element from scratch. He shows the essential class inheritance from `HTMLElement` and outlines `connectedCallback` and `disconnectedCallback` methods, explaining how they manage an element’s lifecycle within the DOM. By displaying a console log and updating a small counter, he illustrates that developers have direct, granular control over everything from property handling to intervals for dynamic updates.

He highlights the difference between managing DOM nodes manually versus writing a typical framework component. The demonstration underscores web components’ minimal abstraction, letting authors manipulate elements in precise ways. As watchers see multiple instances of the custom element on the page, the speaker clarifies how scoping works and addresses challenges like attribute reflection. This example underscores both the power and the verbosity of the raw API, foreshadowing why frameworks or libraries often wrap these core capabilities.

### 00:42 - 00:48 • Templates, Cloning, and Style Isolation

Continuing the demo, the host introduces HTML templates, showing how one can create a `<template>` element, populate it with markup, then clone and insert it. He underscores how templates remain inert until explicitly rendered, contrasting them with the direct approach used earlier. This technique simplifies the insertion of more complex structures, providing partial relief from manual node creation.

He then segues into shadow DOM, explaining how `attachShadow` fosters style encapsulation and slot-based composition. Viewers see that any markup placed within the shadow root remains scoped, preventing global CSS collisions. The host demonstrates how named slots transclude light DOM content, revealing the often-praised isolation web components provide. However, he clarifies potential pitfalls—such as unintentional style or node duplication—and points out that advanced tasks often lead developers to more specialized libraries for ergonomic reasons.

### 00:48 - 00:54 • Slotting and the Realities of Shadow DOM

The host dives deeper into the mechanics of slotting, showing how elements inserted outside of a web component’s shadow root appear in specific slot positions within it. He clarifies that content remains owned by the light DOM, so styles and event lifecycles can behave in nuanced ways. This approach provides strong encapsulation but can complicate scenarios where a parent might wish to conditionally render or manipulate slotted content.

He observes that while shadow DOM solves certain styling conflicts elegantly, it can create friction if developers expect to programmatically hide or remove child nodes. The conversation points to how frameworks like Lit smooth over these complexities, offering directive-based solutions. Even so, the host hints at the ever-present tension: the DOM-centric nature of web components sometimes clashes with application-centric needs, where parent components want greater control over child rendering. This tension sets the stage for exploring libraries designed to mitigate these pain points.

### 00:54 - 01:00 • Early Web Component Libraries: Polymer and Skate

Shifting from raw APIs, the host recounts the pioneering role of Polymer, an early Google-backed library that provided polyfills before broad browser support existed. Polymer introduced property definitions, elaborate templating syntax, and a comprehensive approach to data binding, although it often felt verbose and coupled to non-standard HTML imports. This historical perspective reveals the first attempts to unify web component usage within a structured framework, paving the way for future solutions.

He then mentions Skate, a lighter library that embraced existing renderers like Preact or React, bypassing the need to adopt a Polymer-style monolith. Skate exemplifies an attempt to stay close to the platform while tapping community-favored tools. Despite these efforts, the host notes that even Skate’s approach clashed with certain reactivity models. This glimpse into older libraries shows how the quest for ergonomic web components spurred many experiments, eventually guiding the ecosystem toward more refined frameworks like Lit and Stencil.

### 01:00 - 01:06 • Stencil, Lit, and Authoring Experiences

The host introduces Stencil, explaining how it brings JSX to the web component realm, operating somewhat like a specialized React class component generator. He highlights its popularity in certain enterprise settings, praising the robust tooling for bundling and the integrated approach to shipping design systems. This demonstrates one path to achieving “just enough” framework-like ergonomics while maintaining the standard-based essence of custom elements.

Lit takes a slightly different tack, capitalizing on tagged template literals rather than JSX. Its hallmark is a succinct syntax, combining class fields and decorators to declare reactive properties. The host contrasts Lit’s precompiled templates with the lower-level approach of plain custom elements, emphasizing how Lit significantly reduces the boilerplate needed to manage DOM operations and attribute updates. Both Stencil and Lit prove that real productivity can be achieved atop native APIs, although each library introduces unique performance and workflow trade-offs.

### 01:06 - 01:12 • Lit Playground and Exploring Shadow DOM Slotting

The host visits the Lit playground, showcasing step-by-step tutorials that elegantly demonstrate key concepts like property binding, style scoping, and dynamic updates. He commends Lit’s approach to building a coherent online learning resource, making the technology more accessible to those who might otherwise be daunted by manual DOM manipulations. This environment underscores how standard features like slots integrate with Lit’s reactivity, offering a relatively gentle onramp.

Diving into example code, the host draws parallels between Lit’s slot-based content projection and patterns found in frameworks like Vue or Svelte. He notes that, while the shadow DOM ensures robust encapsulation, it complicates tasks like controlling parent-level rendering or conditionally showing child elements. Consequently, frameworks that adopt a purely slot-based model find it tricky to handle features like advanced control flow or deeply nested data. These considerations further illustrate the strengths and inherent constraints that come with the web component model.

### 01:12 - 01:18 • Solid’s Custom Element Approach

Shifting the spotlight, the host outlines how Solid, known for its fine-grained reactivity, provides a straightforward method to generate custom elements. By calling a function that wraps a standard Solid component, developers can define custom tags with minimal boilerplate. This underscores that even libraries without an explicit web component focus can offer a bridging layer, letting users integrate advanced reactivity within a native custom element boundary.

He reflects on his initial belief that Solid would mainly be used this way—treating web components as the base container while letting a reactive core handle dynamic updates. Over time, however, practical needs prompted a more integrated approach, revealing how complex tasks like SSR or advanced hydration push developers to rely on the library’s own solution rather than purely platform APIs. This highlights a recurring theme: though custom elements can be a powerful option, real-world scenarios often benefit from additional abstractions beyond raw standards.

### 01:18 - 01:24 • Comparing Libraries and Performance Metrics

Introducing a resource called webcomponents.dev, the host shares an overview of numerous libraries that target custom element creation—from minimal solutions like Prism or Atomico to more established choices such as Lit and Stencil. This aggregator provides data on everything from bundle size to runtime performance, revealing a wide variety of trade-offs. He stresses that performance depends heavily on use case—some libraries prioritize small initial cost but scale poorly, while others sacrifice minimal overhead for a more powerful feature set.

He highlights benchmarks that track how quickly libraries handle table updates, memory usage, or creation overhead, illustrating that no single approach is unilaterally superior. Some compilers embed the runtime into each component, making them highly optimized for a handful of elements but bloated for larger sets. Others, like Stencil or Lit, centralize a runtime cost but remain lighter when using multiple components. The host sets the stage for a deeper dive into how these performance numbers tie back to fundamental architectural choices and, ultimately, the viability of web components for large-scale apps.