---
showLink: "https://www.youtube.com/watch?v=8bpjU_NzbyI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Week in JavaScript Conferences"
description: ""
publishDate: "2025-10-10"
coverImage: "https://i.ytimg.com/vi/8bpjU_NzbyI/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato reviews React Conf, watches Remix Jam live, and discusses signals vs React's model, open source funding, and the state of JavaScript frameworks.

## Episode Summary

Ryan Carniato spends nearly six hours covering a packed week of JavaScript conferences. He begins by reflecting on React Conf, praising the technical depth of new features like view transitions, fragment APIs, and React 19.2, while noting what he sees as a fundamental philosophical tension between React's component-centric model and the signal-based approach used by Solid, Svelte, and others. He highlights moments from the conference panels where developers seemed to ask for signal-like capabilities without using the word "signals." The stream then shifts to a live watch-along of Remix Jam, where Ryan Florence and Michael Jackson unveil Remix 3's new component model featuring run-once setup scopes, a DOM event system, manual fine-grained updates, type-safe routing, and an iframe-inspired "frames" architecture for server rendering and partial revalidation. Carniato analyzes each design choice in real time, comparing them to patterns from Cycle.js, RxJS, and htmx. He closes with thoughts on Vue/Vite's monetization plans, a JSX templating proposal for Solid, the new React Foundation announcement, and the controversy surrounding Vercel's CEO and its impact on open source funding.

## Chapters

### 00:00:00 - Stream Setup and Conference Overview

Ryan opens the stream after participating in a VConf panel and explains that he's been watching multiple JavaScript conferences simultaneously, including React Conf, VConf, JavaScript Days, and the upcoming Remix Jam. He discusses logistics for watching the Remix Jam stream on a delay at increased playback speed so the audience can catch the talk while still covering other topics.

The conversation touches on his recent JavaScript Days talk about the future of signals and async handling, and he mentions his reluctance to travel with a young baby at home. Chat interaction establishes the plan for the stream's structure across the many topics queued up for discussion.

### 00:15:00 - Signals, Reactivity, and the Fundamental Framework Divide

Ryan presents his core thesis about why signals matter, arguing that the dependency graph knowledge they provide is what makes them powerful rather than raw performance. He contrasts the "UI equals state" philosophy of React with the signal-based view that state and UI should be conceptually separate, drawing an analogy to calculus where React has "taken the derivative" and collapsed two distinct concerns into one.

He discusses how compilers like React Compiler and Svelte's approach attempt to pull graph analysis into compile time, but argues that runtime reactivity offers more dynamic flexibility. The conversation references Dominic Gannaway's Ripple framework as an interesting middle ground that preserves React's mental model while achieving granular updates, and touches on the ongoing tension between "just JavaScript" advocates and the reality that all frameworks add abstraction layers.

### 00:30:00 - React Conf Deep Dive: Innovation, Fear, and Community Dynamics

Ryan shares his extensive notes on React Conf, expressing genuine admiration for the technical depth of React's work on view transitions, fragment APIs, and native platform unification. He estimates React's ecosystem involves roughly 2,000 active contributors compared to Solid's 40, explaining why React can accomplish so much across so many fronts while smaller frameworks can still be fundamentally better in specific dimensions.

He identifies a recurring theme of "fear" at the conference, pointing to moments where panelists seemed anxious about signals and AI rather than embracing them. He plays a clip from the Kent C. Dodds panel where Tanner Linsley asks for external store improvements and deep context selectors, essentially describing signal capabilities while others explicitly note that nobody said the word "signals." Ryan sees this as emblematic of the community's reluctance to acknowledge the architectural shift underway.

### 00:45:00 - React's Evolving Model and the AI Question

Ryan argues that React has effectively reinvented itself as a new framework multiple times across its history, from mixins to classes to HOCs to hooks to the compiler era. He pushes back on the notion that AI should constrain framework evolution, noting that if React keeps changing its best practices with each generation, AI training data becomes stale regardless. He frames this as a broader concern about fear-driven conservatism limiting ambition.

The discussion shifts to the architectural implications of React's new async patterns and how design systems may need complete refactoring to take advantage of action-based APIs. Ryan shares his notes on how the React team seems to be flipping from a memoization-first library to something more explicitly reactive, a shift that hasn't fully propagated to the broader community. He argues that personalization and linked interactive experiences represent unsolved architectural challenges that should drive framework development forward rather than AI concerns.

### 01:00:00 - Joe Savona's Performance Talk and External Stores

Ryan discusses Joe Savona's React Conf talk about performance investigation into different rendering approaches, noting that the conclusion about external stores being the best option essentially validates the signal-based model. He references his own article categorizing benchmark types and explains how signals-based libraries scale differently than virtual DOM approaches depending on whether the UI has many interactive points versus frequent structural changes.

He expresses relief that React is not adopting signals, seeing it as validation that the two approaches represent genuinely different paradigms rather than one being a strict superset of the other. The conversation touches on various benchmark characteristics and why the specific type of test matters enormously when comparing rendering strategies.

### 01:16:00 - Remix Jam Begins: The Backstory and Philosophy

The stream switches to watching Remix Jam where Ryan Florence and Michael Jackson introduce Remix 3. Florence explains that while React Router and Shopify support will continue, the Remix team has been questioning where React is heading and wants to explore new territory. They discuss how RSC influenced their thinking but ultimately led them in a different direction.

The presentation begins with a theatrical disc-insertion bit before diving into code, starting from the absolute basics of vanilla JavaScript to build up to their new component model. Carniato notes the similarity to how he introduces Solid's concepts, starting with raw DOM manipulation before layering abstractions.

### 01:30:00 - Remix Events System and Custom Interactions

Ryan Florence introduces the Remix events package, demonstrating how pointer events, keyboard events, and custom interactions can be composed into reusable units with encapsulated state. The tempo tapper demo showcases how event-related state like tap timestamps, intervals, and BPM calculations can live outside of component state in what they call "event state."

Carniato draws parallels to Cycle.js and RxJS patterns, noting that the tuple-based event binding resembles Andre Staltz's work. He acknowledges that events are excellent for handling time-dependent interactions and concurrent inputs, but raises concerns about how event-driven systems typically struggle with granular UI updates and tend to pair with virtual DOM diffing as a result.

### 01:45:00 - Run-Once Components and Manual Updates

The Remix component model is revealed: components that return a function get a stable "setup scope" that runs once, preserving state across renders. Updates happen only when explicitly called via `this.update`. Florence demonstrates how this eliminates concerns about re-render cycles and provides a clear separation between initialization logic and render logic.

Carniato recognizes this as similar to patterns from early virtual DOM libraries circa 2015, where developers would assign to variables and then call a patch function. He notes that while the showmanship is compelling, the underlying pattern of run-once with manual update triggers is well-established. The discussion touches on how this differs from both React's re-render-everything approach and Solid's automatic fine-grained tracking.

### 02:00:00 - Context API and Type-Safe Events

The Remix context system is demonstrated, using `this.context.set` and `this.context.get` with the providing component as the lookup key, yielding full type safety. Florence shows how context changes don't trigger re-renders, contrasting this with React's tree-based context where changing context values forces re-renders from the provider down.

Carniato finds the context API interesting but notes potential challenges around serialization boundaries during hydration. The type-safe event system is also shown, with `createEventType` providing typed custom events that can be dispatched and listened to without magic strings. The `this.signal` abort controller for cleanup rounds out the component lifecycle story.

### 02:15:00 - The Cascading Dropdown Problem: Multiple Framework Solutions

Ryan pauses the Remix stream to examine the classic cascading select dropdown example across frameworks. He demonstrates the Solid version using `createAsync` for derived async state, where changing the selected state automatically triggers city refetching through the dependency graph. The Svelte version achieves the same with `$derived` and await blocks.

A particularly clever React version is analyzed that uses `cache` and `use` to achieve similar derived async behavior, though Carniato discovers it re-renders four times per change. He examines why the React version works despite seeming like it shouldn't, tracing it to how React resets state through its cache mechanism. The comparison highlights how declarative dependency graphs handle state consistency naturally versus the manual coordination required in imperative approaches.

### 02:30:00 - Analyzing the Remix Approach and Reactive Graph Theory

Carniato provides extended analysis of what he's seen so far, connecting the Remix patterns to Andre Staltz's work on callbags and the fundamental spectrum of data flow primitives from getters to setters, from iterables to observables. He argues that the missing piece in Remix's model is derived state, since events handle time-dependent flows well but don't naturally express synchronization relationships.

The discussion references the conversation between knockout-style implicit reactivity and RxJS-style explicit event composition, with Ryan arguing that signals sit one abstraction layer lower than components, providing more power at the cost of more responsibility. He shares his background with digital circuit design in college to explain why dataflow-style thinking feels natural to him personally.

### 02:45:00 - Remix Backend: Fetch Router and Route Patterns

Michael Jackson takes the stage to present Remix 3's server-side architecture, built on web standard Request/Response primitives. He introduces the `route-pattern` library for URL matching with type-safe parameter extraction and href generation, the `fetch-router` for composing routes with middleware, and demonstrates how route definitions are kept separate from implementation for static analysis.

Carniato notes the strong Ember.js influence in the named routes approach and appreciates how the type-safe URL generation using route objects allows native anchor tags instead of framework-specific Link components. The presentation progresses through adding a SQLite database, handling mutations with form data, and file uploads using a custom multipart parser optimized for web APIs.

### 03:15:00 - Frames Architecture and HTML Partial Revalidation

The climactic reveal shows Remix 3's "frames" concept, inspired by iframes. Frames have URLs and can be resolved during server rendering with optional fallbacks for streaming. When a client-side action occurs, the frame reloads from its URL, receiving HTML back over the wire which is then reconciled using a morph-dom-style hybrid algorithm that can diff both raw DOM and virtual DOM nodes.

Carniato identifies this as the "lakes architecture" he's previously analyzed and critiqued. He explains the waterfall problem: when client components containing state wrap server frames, the URL-based props can depend on client state that doesn't exist on the server, creating cascading round trips. He acknowledges the approach works well for e-commerce and content-heavy sites but sees fundamental limitations for highly interactive applications.

### 03:30:00 - Post-Remix Analysis: Events, Architecture, and Trade-offs

After the Remix stream concludes, Carniato provides his synthesis. He praises the event system as genuinely compelling and the type-safe routing with native anchors as perhaps the best approach he's seen. He compares the frames architecture to his own earlier work on "partials" for Solid's server component model, noting that his team explored and ultimately rejected a similar approach.

The analysis covers how the hybrid reconciler switching between DOM diffing and virtual DOM diffing at hydration boundaries is technically sound, while the overall architecture resembles an htmx-plus-use-client combination. He positions Remix 3 as potentially a better competitor to Next.js for the content-heavy, mostly-server-rendered space than old Remix was, while acknowledging it doesn't aim to solve the same problems as signals-based frameworks.

### 03:45:00 - Imperative vs Declarative, Events vs Signals

A philosophical discussion emerges about the tension between imperative procedural code, which Ryan Florence champions as how developers naturally think, and declarative reactive systems. Carniato references Steve Sanderson's knockout defense about programmers thinking in shopping lists rather than electric circuits, agreeing that both models have legitimate use cases.

He argues that events handle time-dependent problems well but struggle with the synchronization and derived state that UI rendering fundamentally requires. The conversation explores how every event-based framework eventually needs memo-like primitives, how React has made the entire component the universe leading to nowhere else to put non-rendering state, and why the remix approach of separating event state from render state is valuable even if the specific implementation has limitations.

### 04:00:00 - Vite Conf, Svelte, and Open Source Monetization

Ryan briefly covers Vite Conf highlights, including VoidZero's monetization structure offering Vite Plus services beyond the free bundler, and Svelte's remote functions with a `query.batch` API he found compelling. He discusses how different open source projects approach sustainability, from Vite's corporate backing to Vue's multi-sponsor model to patron-dependent projects.

The conversation touches on the challenges faced by projects like Babel and Gatsby, and how working for a company that uses your open source project can pull maintainers away from framework development into product team priorities. Ryan shares his own experience at eBay where Marco development was deprioritized in favor of migration support.

### 04:15:00 - JSX Templating Proposal for Solid

Ryan presents a proposal for an enhanced JSX syntax that would support analyzable control flow through implicit returns in component blocks. Drawing inspiration from CoffeeScript's implicit returns, Ripple's generator-like template syntax, and Marco's composable tags, the proposal aims to enable fine-grained conditional rendering while maintaining backwards compatibility with existing JSX.

He explains two key motivations: enabling compiler analysis of control flow for optimization, and allowing state to be scoped within conditional blocks rather than belonging to components. The `component` keyword would mark functions for special treatment where the last expression in any block becomes an implicit return, while early returns could be analyzed as conditionals. Response from the community was mixed, with many preferring existing JSX.

### 04:30:00 - The Guillermo Controversy and Open Source Vulnerability

Ryan addresses the controversy surrounding Vercel CEO Guillermo Rauch's social media activity and its impact on open source projects funded by Vercel. He expresses frustration that the actions of one individual could jeopardize funding for projects like Svelte and Nuxt, whose maintainers had no involvement in the controversy but faced community backlash for their association with Vercel.

He discusses the precarious nature of open source funding, noting that Vercel has sponsored many projects across the ecosystem including Solid and Astro. The conversation covers how Seb Markbåge, arguably React's most influential architect, works at Vercel, making boycott logic inconsistent. Ryan emphasizes that open source maintainers should never be put in positions where their funding is threatened by sponsor behavior.

### 04:45:00 - React Foundation, Community Reflections, and Closing

Ryan highlights the React Foundation announcement as potentially the most significant news from React Conf, noting the plan for independent technical governance separate from any single company. He discusses Matt Biilmann's perfectly timed Netlify promotions during the Vercel controversy and the broader implications of corporate influence on open source governance.

The stream closes with Ryan sharing a handmade Solid "duck" plushie created by community manager Dave's mother, based on a long-running Discord joke about the Solid logo resembling a duck. He announces an upcoming stream about microservices with Cloudflare developers and raids Theo's channel. The nearly six-hour stream captured a pivotal week in JavaScript framework development across multiple conferences and controversies.