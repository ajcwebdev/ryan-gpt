---
showLink: "https://www.youtube.com/watch?v=p9pwHyM5Z98"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS in React? Reconciling Disparate Worlds"
description: ""
publishDate: "2023-01-21"
coverImage: "https://i.ytimg.com/vi/p9pwHyM5Z98/maxresdefault.jpg"
---

## Episode Description

A far-ranging four-and-a-half-hour discussion contrasting React’s top-down rendering and SolidJS’s fine-grained reactivity, touching on advanced compiler tricks, state management, streaming, and audience Q&A.

## Episode Summary

Spanning 4.5 hours, this extensive broadcast examines React and SolidJS at multiple levels—covering everything from basic component rendering patterns to cutting-edge compiler transformations. Early in the conversation, the speaker presents simple examples like interval-based counters, contrasting how React’s re-renders differ from Solid’s single-run setups. Midway, the focus expands to deeper topics such as immutability, nested data, and bridging the gap between React’s top-down updates and Solid’s fine-grained signals. The host emphasizes real-world scenarios, delving into shared references, external state libraries, and how advanced streaming techniques can supercharge performance. Later, the discussion navigates broader framework ecosystems, referencing Svelte and Vue’s compiler approaches, along with new server-first designs in Remix and Solid Start. Throughout, the speaker underscores practical concerns like debugging complexities and potential pitfalls when mixing fundamentally different patterns. A lively final Q&A ties everything together, spanning micro frontends, the impact of economic shifts on open-source contributions, and potential avenues for next-generation frameworks. By session’s end, the stream offers a sweeping perspective on modern JavaScript development, balancing pragmatism and innovation in everything from data fetching to partial hydration.

## Chapters

### 02:06:00 - Large Tables, Nested State, and Real Use Cases

Expanding on benchmarks, the speaker references real enterprises dealing with multi-thousand-row tables or real-time data dashboards. Immense data volumes can stress a top-down re-render system, encouraging devs to adopt memoization or sub-component segmentation. In Solid, local signals often suffice because updates remain narrow.

He showcases how a single changed cell triggers minimal downstream updates. By contrast, React might or might not re-check a large table portion unless carefully optimized. This Q&A-driven segment cements that beyond fancy demos, architecture has practical repercussions in scaling and performance for heavy-data use.

### 02:12:00 - Reconcile and Data Diffing Approaches

The host dives into how frameworks handle data reconciliation. Libraries like Solid can optionally rely on “reconcile” to diff incoming data for partial updates. Meanwhile, React always re-checks the VDOM tree, with immutability or keys indicating which parts changed. Each approach has overhead: signals must track dependencies, while immutability demands clone-and-check cycles.

He reiterates that big production apps might rely on multiple patterns at once: some data is stored immutably, while certain slices use proxies or signals. In closing, he highlights that frameworks converge in patterns, even if they advertise different philosophies, pointing to an underlying push for optimization.

### 02:18:00 - Live Audience Feedback: Hybrid Framework Possibilities

Here, the audience in chat asks about building partial solutions that combine React for some pages and Solid for others. The host acknowledges it’s possible, but warns the dev must manage separate hydration strategies and bundlers. A single route might be React-based, while a second route is purely Solid.

This approach sometimes makes sense for teams migrating to Solid or wanting to test performance improvements incrementally. However, the speaker emphasizes that each library’s life cycle and SSR process differ enough to complicate cross-route data sharing. The Q&A thus reiterates incremental adoption strategies while outlining the complexity behind them.

### 02:24:00 - Contextual Boundaries and Micro Frontends

At this point, micro frontend architecture takes the stage. Large organizations might embed multiple frameworks in one page, each in a separate container. The speaker cites e-commerce giants that adopt a micro frontend approach for independent team deployments. He mentions that you can isolate sub-apps using iframes or Shadow DOM, though it’s not trivial.

He returns to React vs. Solid, noting that each sub-app might handle its own reactivity, avoiding direct cross-framework calls. That keeps contexts decoupled, at the expense of some duplication. This chapter closes by underscoring that micro frontends can help scale teams but also multiply complexity, especially with different reactivity models at play.

### 02:30:00 - Compiler Transformations and Single-File Components

The speaker checks chat queries on single-file components (SFCs) used by Vue or Svelte, contrasting with React’s or Solid’s tendency toward plain JavaScript files. While SFCs unify template, style, and script, they rely on specialized compilers. Some devs find it cohesive; others say it strays from “just JS.”

He suggests that with advanced SSR and partial hydration, SFCs might see renewed popularity, letting the framework orchestrate server code, client code, and styling in one file. However, he cautions that more advanced transformations can make debugging or external tool integration tougher. Attendees learn that such design decisions often reflect a library’s broader philosophy.

### 02:36:00 - Viewers Request: Handling Third-Party Libraries

Audience members ask about libraries like React Router or next-gen tools such as TanStack Router. The host shares experiences integrating them with Solid, praising the emerging Solid ecosystem. He points out that rewriting widely used React libraries from scratch can be time-consuming, but interest is growing, so more direct ports are appearing.

He also notes that, ironically, bridging complex React utilities into Solid often yields more overhead than rewriting them. Maintaining two concurrency or reactivity models is cumbersome. The upshot: if a direct Solid alternative exists, that is often preferable. Yet, certain specialized React solutions remain unmatched, fueling ongoing cross-library exploration.

### 02:42:00 - Economics and Layoffs: Impact on Library Adoption

In this chapter, the speaker references recent tech layoffs at major companies. He reflects on how uncertain job markets may cause developers to stick with well-known stacks like React rather than adopt less mainstream options like Solid. Nonetheless, open-source communities usually keep iterating.

He underscores that big tech booms once funded wide experimentation, but with belt-tightening, teams might shift toward cost-effective optimizations, ironically boosting interest in frameworks that deliver better performance. The conversation thus highlights how external economic factors often shape which front-end technologies gain or lose traction in real projects.

### 02:48:00 - Solid Start, Remix, and Next.js Comparisons

Turning attention to meta-frameworks, the host contrasts Solid Start, Remix, and Next.js. Each ties routing, data fetching, and SSR together in a structured way. He lauds Remix’s data conventions but suggests Solid Start’s streaming approach can feel more cohesive for developers used to signals.

He also notes Next.js leads in ecosystem depth and broad hosting support. That said, Next’s server and client separation can create mental overhead, while Solid Start tries to unify developer experience around reactivity. The conversation prompts reflection on how diverse these solutions are, each weaving SSR, routing, and partial hydration differently.

### 02:54:00 - Exploring Quick’s Resumability

The host next dives into Quick, emphasizing how it serializes component state so the browser can resume processing without replaying all JavaScript. He calls it a radical take on hydration, skipping large chunks of client reinitialization. This resonates with some advanced research in Solid and Marco, though each brand has unique implementation details.

He points out that the “no replay” or “instant resume” concept could drastically cut boot times. However, it demands specialized code structure and a more intrusive compiler. The speaker posits that while Quick might solve major performance concerns, it remains an emerging solution that devs should watch closely for future mainstream uptake.

### 03:00:00 - Svelte’s Single-Faceted Reactivity vs. Solid’s Signals

Audience members steer conversation toward Svelte specifically. The speaker notes that Svelte’s `$:` declarations and compiled transformations are straightforward yet can hide subtle behaviors. Meanwhile, Solid’s signals and effects remain explicit at runtime. He suggests each approach fosters reactivity effectively; the difference lies in debugging and code clarity.

He clarifies that while Svelte code often looks minimal, it is powered by a robust pre-processor stage. Solid is smaller at compile time, relying on a more direct runtime model. This thorough comparison helps viewers appreciate that “just JavaScript” can be a misnomer in both camps, as compilation remains pivotal to each library’s success.

### 03:06:00 - Tailwind Discussions and Minor Twitter Debates

During this window, the host digresses briefly to note ongoing debates on social media around styling approaches, referencing Tailwind’s popularity. He acknowledges that many React or Solid devs incorporate utility-first CSS for rapid iteration. Nonetheless, some critics argue Tailwind can clutter markup or hamper design consistency.

He sees parallels to the React vs. Solid talk: seemingly small differences in approach can balloon into significant divides among developers. While not the main focus, it underscores how the front-end landscape is rife with competing philosophies—styling, data, rendering, or otherwise.

### 03:12:00 - Data Serialization and Shared References

Returning to a deeper technical angle, the speaker walks through how frameworks handle data serialization for SSR. Solid can stream script tags that resolve or reject server promises, reminiscent of Remix’s approach. React, as of recent versions, also embraces streaming with placeholders.

He warns that advanced usage—like preserving mutable references across SSR boundaries—can become tricky. Some frameworks rely on stringified JSON, others inject script calls. In the end, consistent hydration requires that client and server share a structured plan for reattaching state. The audience sees how large-scale SSR often demands carefully crafted pipelines.

### 03:18:00 - Time Travel Debuggers and State Tooling

The host spotlights new developments like “Solid Rewind,” a time-travel debugger for Solid. He references how Redux popularized time travel in React ecosystems, enabling devs to jump between states. While powerful, implementing such features can be simpler in an immutable data world.

He notes that Solid can still track snapshots, though the architecture differs, storing minimal changes rather than full copies. This resonates with svelte societies or mobx ecosystems that track diffs. Audience Q&A reveals ongoing interest in robust debugging tools, suggesting that frameworks or libraries that master them gain developer mindshare.

### 03:24:00 - Angular’s Recent Updates and Broader Framework Shifts

Though React and Solid are front-stage, the speaker mentions Angular’s new self-closing tags and other incremental improvements. He acknowledges Angular’s large user base but observes it evolves more cautiously, adding modern niceties in measured steps. These small changes can ripple across huge enterprise codebases.

He sees Angular adopting certain concepts reminiscent of React or Vue, such as improved developer experience in templates. This underscores that all major frameworks constantly refine patterns, from syntax sugar to advanced SSR, to stay competitive. It’s further proof that the JavaScript ecosystem never stands still.

### 03:30:00 - Monolithic vs. Bundled Approaches

At this juncture, the host addresses the pros and cons of bundling everything in a monolithic client script vs. splitting code by route or component. He references how Next.js’s dynamic imports or Solid’s lazy components can yield major improvements by not shipping unneeded code. Micro frontends push this even further at a domain level.

He reminds viewers that modern build systems often rely on analyzing imports to produce multiple chunks. The synergy with partial hydration means frameworks can drastically reduce initial load times. In a real sense, React and Solid remain flexible, but they differ in how easily they slip into granular chunking. This leads into a discussion of advanced server bundlers.

### 03:36:00 - Community Ecosystems and UI Libraries

Questions from chat highlight the breadth of UI libraries. The speaker points out Chakra UI or Mantine for React, while Solid has smaller, quickly growing equivalents like Hope UI. He celebrates how these libraries wrap consistent design systems, lowering the time to ship polished apps.

Still, porting them across frameworks is non-trivial because event handling, context usage, or theming logic might rely on React-specific hooks. Solid can replicate them, but devs must re-architect them for signals. This segment closes by illustrating how repeated patterns unify frameworks but also underscore the domain-specific details each must handle.

### 03:42:00 - Viewers’ Curiosities: AI-Assisted Conversions

As AI conversation swirls, the speaker addresses the possibility of using large language models to convert React code to Solid automatically. He imagines partial code mods that detect hooks, rename them, and rewrite effects. This could streamline migrations, though humans would still handle subtle logic differences.

He anticipates that advanced LLMs might effectively parse large projects, but warns that transforming especially intricate hook usage remains complex. He references preludes to certain code-mod tools, concluding that while automation helps, it cannot entirely replace a developer’s deeper understanding. This Q&A ignites speculation on whether future frameworks could unify under AI-driven bridging.

### 03:48:00 - Reflections on Compiler Complexity

In this chapter, the host returns to the notion that frameworks are forging deeper compilers. While some devs fear losing control, others appreciate the resulting performance and DX improvements. He notes that even React uses Babel transforms for JSX, though it’s simpler than Svelte’s or Vue’s approach.

The conversation underscores a tension: minimal transformations can yield less friction, but advanced compilation unlocks features like out-of-order streaming or single-file components. Ultimately, each developer must choose how comfortable they are with magic behind the scenes. The audience sees how React’s ecosystem fosters many micro-libraries, whereas Svelte or Solid produce more integrated solutions by default.

### 03:54:00 - Real-World Migration Stories

Listeners press for success stories about migrating large apps from React to Solid. The speaker cites smaller-scale examples or partial rewrites—an approach that replaces select pages to test performance gains. He reiterates that for big enterprises, a full switch can be daunting, as React’s ecosystem is enormous and well-established.

He suggests measured transitions for teams seeking performance or simpler reactivity. This method helps devs compare user experiences or bug rates. Over time, if results impress stakeholders, the rewrite might expand. The Q&A dynamic highlights the pragmatic concerns behind any large-scale framework shift.

### 04:00:00 - Tangential Topics: Testing and Linting

Given the length of the stream, side questions arise around testing frameworks like Jest, Vitest, or Cypress. The host explains that React test utilities focus on simulating re-renders, while Solid testing tends to revolve around signals and short-lived effects. Meanwhile, linter or Prettier configurations can differ if a library extends JSX in a custom manner.

He advises devs to check official docs for recommended setups. Although these tasks may seem mundane, they’re essential to stable production apps. Wrapping up, the speaker touches on how strong developer tooling can reduce friction in adopting lesser-known libraries. Solid’s ecosystem is improving but cannot yet match React’s breadth in testing guides.

### 04:06:00 - Microservices vs. Monorepos in the JavaScript Space

Returning to architecture, the speaker contrasts microservices in the back end with the front-end parallels that micro frontends represent. Each piece can be developed, tested, and deployed independently, benefiting large teams. However, the overhead in coordinating routing, data fetching, and SSR can be high, particularly if each sub-app uses a different framework.

He notes that monorepos can unify dependency management, letting teams share packages or consistent UI. Yet, front-end fragmentation sometimes complicates the synergy. By discussing these scenarios, the session weaves back to the real impetus for bridging frameworks: dev teams seeking autonomy yet remaining aware of technical overheads.

### 04:12:00 - Viewer-Driven Reflection: Stale Closures and Over-Fetching

A user question revisits stale closures in React, illustrating how even small oversights cause repeated fetches or ephemeral states. The speaker demonstrates how a misconfigured effect might lead to multiple network calls. He ties it to React’s fundamental choice to re-run components, whereas Solid’s signals effectively isolate fetch logic to an effect that doesn’t keep re-invoking.

He encourages devs to systematically differentiate data signals from UI rendering. Over-fetched data not only slows performance but complicates debugging. This moment becomes a microcosm of the entire conversation, exemplifying how the frameworks’ architectures either mitigate or compound common pitfalls.

### 04:18:00 - Last Rounds of Q&A: Ecosystem Futures

The host fields final questions about each framework’s trajectory. React is stable but invests heavily in concurrency and server components. Solid aims to refine streaming SSR and userland reactivity patterns, while Vue and Svelte push single-file or compile-first paradigms. He predicts Quick’s resumability strategy will influence future designs too.

He encourages watchers to experiment with multiple frameworks, especially if job demands or performance requirements permit. This chapter exudes optimism, emphasizing that new ideas often cross-pollinate. The host’s stance is that JavaScript’s ecosystem thrives precisely because no single solution dominates unilaterally—there’s always fresh room for innovation.

### 04:24:00 - Conclusion and Sign-Off

In the final moments, the speaker thanks everyone for tuning in through the entire 4.5-hour marathon. He reiterates the main takeaways: React’s top-down model remains powerful yet demands memorization of hooks nuances, while Solid’s signals can simplify local updates but require a fresh mindset. Compiler-based ideas in Svelte or Quick highlight a broader movement toward partial hydration and advanced SSR.

He closes by praising community enthusiasm, bridging frameworks, and the lively Q&A that shaped the talk. Though intense and sometimes technical, the session underscores how each approach has unique strengths. The host signs off with invitations to future streams, leaving listeners both informed and inspired about the rapidly evolving world of JavaScript UI frameworks.