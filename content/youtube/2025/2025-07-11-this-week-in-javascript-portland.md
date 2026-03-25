---
showLink: "https://www.youtube.com/watch?v=MIWNTo8Xa9M"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶  Portland"
description: ""
publishDate: "2025-07-11"
coverImage: "https://i.ytimg.com/vi/MIWNTo8Xa9M/sddefault.jpg?v=686ee5a4"
---

## Episode Description

Ryan Carniato streams from Portland, covering his new signals video, the remix/react split, Pete Hunt's classic talk, async context, and the Vercel-Nuxt Labs acquisition.

## Episode Summary

Ryan Carniato returns to streaming from his new Portland setup, diving into a wide range of JavaScript framework topics. He discusses the reception of his recent short-form YouTube videos about signals, using the remix team's departure from React as a springboard to explain why signals differ fundamentally from React's rendering model. He walks through Pete Hunt's classic "React vs. The World" talk, drawing parallels between early React arguments and modern signal-based frameworks. A technical deep-dive covers async context, algebraic effects, and function coloring challenges in JavaScript. Ryan also examines Justin Fagnani's new DOM templating API proposal, shares updates on SolidJS ecosystem developments, and closes with extensive commentary on Vercel's acquisition of Nuxt Labs — exploring what it means for Nitro, the meta-framework middleware layer, and the broader open-source funding landscape. Throughout, he emphasizes that the technology conversations should stay grounded rather than devolving into tribal politics.

## Chapters

### 00:00:00 - Stream Setup and Community Catch-Up

Ryan opens from his new Portland office, showing off his setup including his Jackson Soloist guitar and rebuilt Lego collection. He talks about streaming quality trade-offs between StreamYard and OBS, and discusses the 720p versus 1080p debate. The conversation touches on various companies using SolidJS, including the revelation that Cursor is built on Solid, and mentions of Lightning TV and Telegram's web version.

Chat participants bring up topics like SolidStart versus TanStack Start, and Ryan explains that the two projects share fundamental architecture and even some of the same contributors. He notes that TanStack Start is currently iterating faster while the Solid team focuses on Solid 2.0, but emphasizes both projects are moving in lockstep on core design decisions.

### 00:24:13 - Short-Form Video Strategy and Teaching Challenges

Ryan reflects on his shift toward shorter YouTube videos, noting they reach a broader audience than his long-form streams. He discusses the challenge of compressing complex technical topics into ten-minute formats, comparing his approach to Fireship's style but at greater depth. The conversation explores the tension between explaining "what" versus "how" and "why" in developer education.

A Reddit commenter's feedback sparks discussion about whether developers should understand how their tools work underneath. Ryan argues that modern framework abstractions are not truly non-leaky, and that understanding the basics of how rendering works makes developers more effective. He addresses the difficulty of balancing beginner accessibility with the deep technical culture that characterizes the Solid community.

### 00:41:36 - Signals Video Breakdown and the Remix Split

Ryan discusses his latest signals video, which was partly motivated by the Remix team's split from React and their comments about signals not scaling. He walks through the key myths addressed in the video: that signals are magic, that they don't scale, that they can work within React's render model, and that React Compiler is equivalent to fine-grained reactivity. He explains why adding signals to a virtual DOM library doesn't actually improve performance.

The discussion covers the fundamental architectural difference between signals and atoms like Jotai — while their APIs may look similar, React's component-based re-rendering model means atoms can never achieve the same granular update behavior as signals in a fine-grained renderer. Ryan uses diagrams to illustrate how signal-based state updates can skip entire component trees, something no amount of memoization can replicate in React.

### 01:01:25 - Pete Hunt's "React vs. The World" Talk

Ryan introduces and watches portions of Pete Hunt's classic talk from around 2015, which he considers one of the most important React talks for understanding the historical context. The talk covers key-value observation systems like Ember and Knockout, dirty checking in Angular, and why React's virtual DOM approach was chosen. Ryan provides running commentary, noting the irony that many of Pete's arguments against early signal systems actually apply to modern React hooks.

Pete's demonstration of an Ember bug caused by explicit dependency tracking leads Ryan to observe that auto-tracking (as in Knockout and modern signals) would have avoided this issue entirely. He notes that React hooks reintroduced the very dependency-tracking problems Pete criticized, drawing a through-line from 2015's concerns to today's framework debates about explicit versus implicit reactivity.

### 01:25:22 - MVVM History and Component Architecture Origins

Ryan draws on a whiteboard to explain the evolution from MVC to MVVM to component architecture, showing how the problem of ephemeral state ownership drove these transitions. He illustrates two approaches to view models — wrapping models versus one-to-one view-model-to-view mapping — and explains how the latter naturally evolved into what we now call components.

The discussion connects this history to the current tension between global state management and component-local state, arguing that signals offer a middle ground where state is created within component scope but its update behavior isn't tied to component boundaries. This architectural insight explains why signals-based frameworks can achieve both the modularity of components and the granularity of fine-grained updates.

### 01:48:25 - RxJS versus Signals and Event Systems

Ryan examines an ongoing debate in the Angular community about whether RxJS can replace signals or vice versa. He explains that signals are a state synchronization system while RxJS observables are an event system — they serve fundamentally different purposes. Events belong at the edges of an application while signals handle the core state synchronization that makes up roughly ninety percent of UI work.

A conversation thread with Matthew Phillips from the Astro team provides further nuance: Phillips views signals as simplified events that lose intent through their lossy nature. Ryan agrees with the analysis but argues that state synchronization is hard enough to warrant a dedicated system, and that solving it well actually opens the door for more sophisticated event handling rather than competing with it.

### 02:05:02 - Atoms versus Signals Deep Dive

Ryan examines the practical differences between Jotai atoms and signals in detail, showing code examples and explaining why React's rendering model prevents atoms from achieving signal-like granularity. He discusses Signia's approach to diffing, Metron's explicit-get API, and Bobby's observable library, comparing their design trade-offs. The conversation covers why the Jotai team chose explicit tracking and how React's re-render model shapes every state library built for it.

Ryan introduces his work on "forking" primitives for reactivity — the idea that signals can split from fewer sources into more outputs, contrasting with the typical pattern where multiple sources merge into fewer derived values. He argues this forking capability is uniquely valuable when the rendering target supports granular updates, making it more interesting for fine-grained renderers than for virtual DOM frameworks.

### 02:32:52 - Babel, Compilers, and the Build Tool Landscape

A chat question about CSS module support leads to a broader discussion about SolidJS's dependency on Babel for compilation. Ryan explains why Babel remains the best option for JavaScript-based compiler transforms despite its performance reputation — esbuild doesn't offer plugins, SWC requires Rust expertise, and OxC's plugin interface isn't ready yet. He discusses the tension between moving build tools to Rust for performance and maintaining accessibility for JavaScript developers.

Ryan articulates his "thousand-x rule" for developer tooling trade-offs: every millisecond lost for end users must save developers at least a thousand times that in build time. This philosophy places him at odds with the Vite ecosystem's push toward Rust-based tooling, as he prioritizes end-user experience over developer build speeds while acknowledging the ecosystem is moving toward performance-focused native tools.

### 03:42:09 - Async Context and Algebraic Effects

Ryan presents a HackMD write-up on async context and its implications for reactive frameworks. He explains how async local storage works on servers for request-scoped data, why it's needed for server functions, and how Next.js forced every platform to support it. The discussion covers function coloring — the way async/await forces every function in a call chain to be marked async.

Using whiteboard diagrams, Ryan explains algebraic effects as a theoretical solution to colorless continuations, connecting this to React's promise-throwing mechanism for Suspense. He proposes that signals could be made "thenable" — both promises and signals simultaneously — allowing optional await-based continuation while defaulting to the current throw-based approach. This would let developers opt into avoiding redundant computation without forcing async coloring throughout their codebase.

### 04:37:41 - This Week in JavaScript: SolidJS Ecosystem Updates

Ryan surveys recent SolidJS community developments, including local-first apps, use-motion's investigation of Solid components inside React apps, Effect TS integration, and various starter projects. He announces he'll speak at JS Nation in New York and mentions an upcoming stream with Ryan Turnquist about Marko 6, hinting that the long-awaited framework release is getting close.

The segment also covers the new RSC plugin for Vite, which Ryan calls a game-changer that was years overdue. He explains how Nikhil originally built RSC support in Vite through Vinxi almost three years ago, and how the environment API finally enabled official support. Ryan questions why React took so long to support anything beyond Webpack, noting this delay likely contributed to negative narratives around Vercel's control of the React ecosystem.

### 04:58:46 - TanStack Start SSR Configuration and Justin's DOM Templating Proposal

Ryan reviews TanStack Start's new selective SSR configuration feature, analyzing the hierarchical override system where routes can specify server-rendering behavior. He debates the semantics of the API design, suggesting that "data only" should be the default middle option rather than a special case. The discussion reveals his preference for streamlined APIs over flexible-but-complex configuration.

He then speed-reads through Justin Fagnani's new DOM templating API proposal, which argues that the web platform needs native template support. Ryan expresses cautious skepticism — while agreeing that templating is important and frameworks have proven the patterns, he worries about standardizing too early, particularly around how signals would interact with DOM updates. He prefers starting with smaller primitives rather than a comprehensive templating specification.

### 05:25:19 - Lee Robinson's Vercel Departure and Dev Rel Era

Ryan reflects on Lee Robinson leaving Vercel after five years, positioning it as the end of a classic era of developer relations. He names other prominent dev rels from this period and notes how COVID and economic changes shifted the role. Skimming Lee's farewell article, Ryan highlights advice about work-life boundaries, aggressive deadlines, scaling through hiring, and avoiding "swoop and poop" management.

The discussion frames Lee's departure alongside broader changes in how developer communities form around frameworks, with the shift from traditional dev rel to YouTube influencer-driven content creation marking a generational transition in how technical knowledge is disseminated and framework adoption is driven.

### 05:34:58 - Vercel Acquires Nuxt Labs and Meta-Framework Middleware Future

Ryan addresses the biggest news of the week: Vercel's acquisition of Nuxt Labs, bringing Daniel Roe, Pooya Parsa, and Anthony Fu under the Vercel umbrella. He maps out how Nitro connects SolidStart, TanStack Start, Analog, and other frameworks to deployment platforms, noting the irony that nearly everything outside Astro and Remix now has some Vercel connection. He pushes back against community panic, comparing the situation favorably to Vercel's handling of Svelte.

The final segment becomes a deep technical discussion about the future of meta-framework middleware. Ryan explains how the Vite environment API could eventually allow cloud providers to offer direct Vite plugins for dev and production, potentially eliminating the need for Nitro as an intermediary layer. He shares details from private discussions between the Vite, Nitro, and TanStack/SolidStart teams, emphasizing that the technology is still evolving and community reactions are running ahead of actual developments.