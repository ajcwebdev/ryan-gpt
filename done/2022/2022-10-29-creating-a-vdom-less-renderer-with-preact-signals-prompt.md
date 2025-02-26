---
showLink: "https://www.youtube.com/watch?v=Fp9duJd6Txc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Creating a VDOM-less Renderer with Preact Signals"
description: ""
publishDate: "2022-10-29"
coverImage: "https://i.ytimg.com/vi/Fp9duJd6Txc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging live session exploring reactivity fundamentals, custom libraries with Preact signals, and the evolving landscape of frameworks like Next.js in modern web development.

## Episode Summary

This thorough conversation begins with a look at travel challenges and streaming plans, setting a relaxed tone for a deep technical exploration. Early on, the speaker experiments with building a custom renderer using Preact’s signal system, touching on core ideas such as fine-grained reactivity, tree shaking, and code splitting. Discussions then expand to consider performance benchmarks, highlighting memory usage, update speed, and how to mix different reactive paradigms. Midway, the focus shifts toward broader ecosystem considerations, like the intricacies of open-source funding and the tensions between major frameworks and deployment platforms. The speaker closes by reflecting on Next.js announcements and server components, weighing the effects of corporate alignment on open-source collaboration. Across these many hours, listeners gain both hands-on coding insights and a nuanced perspective on the future of JavaScript frameworks.

## Chapters

### 00:00 - 06:00 — Intro, Travel Woes, and Stream Setup

In the first few minutes, the host greets everyone and explains why this stream is a special opportunity, noting they will be busy traveling in the coming weeks. They mention a recent trip to Poland and describe the challenges of missed connections and limited sleep. This personal backdrop sets a friendly, informal tone, with the speaker settling in, opening chat windows, and ensuring all their streaming gear is ready.

They describe how a green-screen setup came about for streaming consistency, reflecting on lighting quirks that cause visual flickers. A sense of anticipation builds as they promise interesting technical content for the session. Viewers also learn about the streamer’s hectic schedule, highlighting that Friday streams will be paused for a while. The stage is set for a thorough exploration of reactivity and framework building that will follow.

### 06:00 - 12:00 — Preact Signals and Reactivity Overview

The speaker shifts attention to the main topic: creating a VDOM-less renderer using Preact’s Signals. They outline previous attempts at similar experiments with libraries like Vue, Knockout, and MobX, explaining how each offered partial insights but left space for more refined solutions. By referencing prior work, they show how frameworks can share a core renderer based on reactivity.

They introduce their library “dom expressions” and discuss its utility in making framework-agnostic renderers. Listeners get a sense of what building a reactive renderer entails, including the need for smaller, composable pieces that can be swapped out. This sparks curiosity about the unique steps required to adapt Preact Signals for the same approach, foreshadowing hands-on coding examples.

### 12:00 - 18:00 — Framework-Agnostic Renderer Goals

Focus falls on the vision of framework-agnostic reactivity, rooted in the idea that each system—be it Solid or Vue—could be built from a shared renderer. The host recounts how their initial aim was to test different reactive runtimes without strictly committing to a single approach. This builds a story of exploration, revealing a passion for discovering optimal design patterns.

They underscore how current solutions sometimes create overhead or mismatches when bridging reactivity and rendering. The speaker suggests that by treating the reactivity layer as a distinct concern, developers unlock unique performance advantages. The concept of hooking into any library’s effect system or state management stands out, hinting at broad possibilities for future expansions and library collaborations.

### 18:00 - 24:00 — Maintenance Costs and Solid’s Core Decisions

Here, the speaker acknowledges the practical side: maintaining a universal library can be cumbersome. They contrast the benefits of reusability with the added challenge of ensuring compatibility across many frameworks. Solid, for instance, has advanced features like transitions and suspense that go beyond simpler DOM rendering layers, suggesting that not everything is easy to generalize.

In parallel, they highlight how some features, such as advanced server-side rendering, or more nuanced performance optimizations, might need deeper integration. Even so, a consistent approach to reactivity remains valuable, exemplified by the memory of older experiments with RxJS, MobX, and other tools. The speaker sets expectations: building a robust, easy-to-maintain layer is still an evolving process.

### 24:00 - 30:00 — Revisiting a Preact Signals Sandbox

To ground the theory, the speaker opens an older code sandbox testing Preact Signals. They reflect on earlier attempts to see if signals from Preact could replicate the fine-grained updates typical of Solid. Recounting that everything mostly worked, they highlight a few missing features such as “untrack,” which can be important for more advanced patterns.

This segment reveals how certain reactive primitives simplify certain operations, while the absence of key methods can complicate them. The host muses that sometimes experimental features might be dropped from libraries, making it crucial to lock dependencies if you rely on those specifics. This builds anticipation for the upcoming live coding to reintroduce or adapt such capabilities.

### 30:00 - 36:00 — Overview of dom-expressions Setup

Attention returns to the user’s own build environment. The speaker outlines the folder structure of their library, detailing how “dom-expressions” compiles to a framework-specific runtime. They describe specialized exports for JSX, HyperScript, and template literal transformations. Each approach has its own trade-offs in bundle size or developer ergonomics.

Listeners hear about how, historically, generic code can be tricky to tree-shake, prompting a bundling strategy that merges only the symbols used. The speaker reveals small complexities like nested package.json files and older build pipelines. This behind-the-scenes look at the library’s tooling clarifies the puzzle pieces that will soon form the custom Preact signals renderer.

### 36:00 - 42:00 — Tying in Babel, TypeScript, and Build Steps

Next, the host delves into the build configurations with Babel, touching on how older setups differ from modern plugin approaches. They point out potential friction around TypeScript’s declarations, which sometimes complicate bundling. Despite not being a huge fan of overhead, the speaker sees the value in typed definitions for large codebases.

They emphasize the importance of externalizing dependencies like “preact-signals-core,” preventing them from bloating the final bundle. This underscores how thoughtful build steps can substantially improve the developer and user experience. In parallel, they note the intention to produce minimal overhead for end consumers, further underscoring a deep focus on efficiency.

### 42:00 - 48:00 — Interplay Between Reactivity and Ownership Graphs

Shifting to reactivity fundamentals, the speaker introduces the concept of “ownership” in reactive systems. Most frameworks, they note, track dependencies but skip an ownership mechanism. Solid’s approach extends reactivity to track nesting of effects, enabling automatic disposal when a parent stops.

They highlight complexities around context APIs, pointing out that each child effect must register itself for potential cleanup. Pre-empting the coding portion, the host warns that “untrack” is absent in Preact signals, which might pose hurdles in advanced use cases. The conversation previews design intricacies like disposal, effect queueing, and the difference between an effect framework and typical observer patterns.

### 48:00 - 54:00 — Dangers of Over-Memoization and Dep Arrays

Attention turns to patterns in React vs. reactivity-based frameworks. The speaker observes how React’s dependency arrays risk over-memoization, while signals can lead to unintended direct updates. They find parallels: each approach must carefully decide when to recalculate. However, reactivity is more implicit, reducing mental overhead for developers—until edge cases require “untrack.”

The host exemplifies typical pitfalls: destructuring signals can trigger re-renders or track dependencies unintentionally. This clarifies why certain frameworks push for minimal mutable APIs. A nuanced note arises: reactivity is both powerful and risky. Wrong usage easily leads to inconsistent states, so thorough design or compiler assistance is often recommended.

### 54:00 - 60:00 — Building Another Framework from Scratch

At this point, the speaker references a previous stream called “Petite Solid,” where they built a micro-view library from the ground up. They reminisce about how it showcased every step, from writing a templating approach to hooking in reactivity. Although it was niche, they found it highly instructive for understanding the interplay between signals and the DOM.

Listeners hear that the current session aims for a more high-level approach—porting an existing library structure to Preact signals. A sense of excitement emerges: while building from scratch is enlightening, bridging an existing reactivity system highlights real-world constraints. The conversation transitions into tackling actual code tasks soon.

### 60:00 - 66:00 — Reflecting on Past Live Streams and Tooling

The speaker jokes about their prior attempts at live coding and how they sometimes stumble with tooling. They recall streams about React Server Components that drew minimal attention months ago, compared to simpler Next.js content that resonated more. This highlights the unpredictability of developer interest.

They also express a personal preference for straightforward tools, sometimes resisting new build pipelines. Whether it’s code editors, bundlers, or plugin frameworks, they mention how each has a learning curve that can trip developers up. As the session builds toward coding, the speaker suggests that sometimes hacking things quickly can yield deeper insights than relying on heavy tooling from the start.

### 66:00 - 72:00 — Adding Preact Signals to a Library

Finally, the host starts bridging the code. They add “@preact/signals-core” to their dependencies, double-check versions, and anticipate how effect disposal might differ from solutions like Vue’s or Solid’s. They note minor differences in naming, such as “dispose” vs. “stop,” referencing how libraries handle teardown logic.

They mention that some advanced patterns, like untracked reading, may need creative solutions in the absence of a built-in method. The host warns that certain advanced tasks might lead them to rewrite or monkey-patch parts of Preact signals. Listeners sense the complexities of mixing lower-level reactivity with a flexible rendering approach.

### 72:00 - 78:00 — Observing Code Layout and Package Exports

During these minutes, the streamer shows off the library’s folder structure: “client,” “core,” and “lib.” Each directory has distinct responsibilities for re-exporting or bundling specialized runtime features. By pointing at code referencing “hyper DOM expressions,” they reveal how the library supports multiple templating styles without rewriting each from scratch.

Such a layout also helps tree shaking, ensuring any final build includes only the code actually used. Despite the older Babel pipeline, the system remains functional. The speaker hints that rewriting everything in a more modern approach might yield improvements, but for the current experiment, the existing setup suffices.

### 78:00 - 84:00 — Handling Cleanup and Effects

Moving deeper, the speaker navigates the “lib” folder to demonstrate how “root” constructs handle disposal arrays. They highlight how each root can register nested effects, making it easier to manage large reactive trees. This design parallels Solid’s ownership concept, letting parent scopes control the lifecycle of child computations.

Listeners hear about parallels to typical effect logic: clearing dependencies, re-running code, and hooking into parent disposals. However, they note that Preact signals might differ in scheduling or deferral, requiring a small shim. An understanding emerges that cross-library bridging demands reconciling unique scheduling patterns, especially around synchronous or asynchronous effect re-execution.

### 84:00 - 90:00 — Computed Signals and Lazy Execution

The host examines a “createMemo” or computed function, comparing how various libraries handle lazy vs. eager evaluation. In some systems, running a function twice is necessary at initialization to capture dependencies properly. They show that Preact’s approach might differ, so a small hack might ensure everything aligns.

They contemplate removing extra function calls if Preact signals are synchronous enough. This reveals that not all reactive frameworks share the same staging rules. A portion of the conversation underscores the delicate dance between ensuring correct dependencies and preventing double computation, especially at library boundaries where patterns can clash.

### 90:00 - 96:00 — Fine-Grained Selector Patterns

The conversation shifts to a more specialized pattern: “createSelector,” which solid uses to track items in a list individually. The host recalls scenarios where updating a subset—like marking a single row “selected”—should not re-run an entire list. This underscores the hallmark of fine-grained reactivity: minimal re-rendering.

Listeners learn how signals behind the scenes store metadata in maps, linking specific IDs to each subscriber. The discussion highlights how advanced patterns let you handle large data sets efficiently by localizing updates. It’s a key reason fine-grained solutions beat naive VDOM approaches in certain benchmarks, showcasing the real power behind reactivity.

### 96:00 - 102:00 — Minimizing Re-Renders and The “Show” Component

Here, the host emphasizes one big advantage of fine-grained reactivity: controlling re-renders at a very granular level. They contrast it to VDOM libraries that might reconsider an entire tree or rely on heuristics. By crafting small logic blocks and “Show” components, you can toggle or conditionally render sections without calling a global update cycle.

They also mention untrack again, crucial for preventing certain expressions from tying in where not intended. This cautionary note warns how nested conditionals or partial computations can cause unintentional expansions of the reactive graph, leading to extra overhead. The short message: done right, reactivity yields huge benefits; done sloppily, it can breed confusion.

### 102:00 - 108:00 — Suspense, Lazy Imports, and Easy Async Patterns

Attention turns to Suspense and lazy loading. The host clarifies that in reactive systems, you barely need elaborate logic to fetch data or import modules. Instead, signals handle pause and resume elegantly, letting the system skip heavy re-renders. One snippet: “import a module, set a signal, and watch the UI update seamlessly.”

They note that while React uses Suspense for this orchestration, a deeper reactive library can do so with simpler solutions. That said, orchestration features like Suspense are still valuable for advanced tasks like coordinating multiple asynchronous data sources. The speaker draws parallels to how the same logic can be trivially replaced by signals in the right scenario.

### 108:00 - 114:00 — Templating Differences and Compiler Advantages

The streamer underscores how the library supports multiple templating forms—JSX, HyperScript, or tag template literals—each with distinct runtime overhead. With hyper-scripting, the user must handle reactivity manually, leading to bigger bundles for advanced behaviors. In contrast, a compiler approach, like Solid’s, inserts minimal runtime pieces automatically.

They reiterate that although the library does ship these different methods, they personally prefer a build step for production use. The host sees open-source value in shipping them anyway, so anyone can spin up quick experiments in a code pen. This fosters a no-compile playground, albeit at the expense of code size efficiency.

### 114:00 - 120:00 — Cloning the View xJSX Approach

As coding continues, the speaker references their earlier “viewrx-jsx” project. They plan to copy that scaffolding and systematically replace Vue’s reactivity calls with Preact signals. Because the code is built to be modular, they expect minimal friction, but they also anticipate minor function signature mismatches or missing features.

This leads to reflection on how smaller libraries might provide enough coverage for simpler scenarios, but more complex data flows require advanced pieces like transitions or nested computations. The host clarifies how this difference has guided Solid’s specialized expansions beyond the generic “dom-expressions” core, foretelling possible trade-offs as they integrate Preact signals.

### 120:00 - 126:00 — Babel, TypeScript Quirks, and Blind Refactoring

The speaker acknowledges some rough edges. They might have to patch type definitions or ignore them. They remark that while they value TypeScript in large projects, they find it intrusive or tedious during rapid prototyping. This leads to comedic mentions of sprinkling “as unknown as any” just to silence TypeScript’s complaints.

Listeners see how live coding can involve repeated build attempts, small test runs, and debugging typical TypeScript friction. The host jokes that historically they coded “blind,” trusting logic more than compiler assistance. Though they see the benefits for larger teams, they emphasize efficiency in the moment.

### 126:00 - 132:00 — Untrack: The Missing Piece

Back to advanced reactivity, the streamer hones in on “untrack” and how it’s missing from Preact signals. They stress that if your library lacks a direct method, you might hack around it or do partial solutions. Real examples might be array map functions that need untracked reads, or complex nesting that leads to unexpected re-renders.

Without “untrack,” one must carefully avoid data reads inside tracked computations, or risk performance hits. They exemplify how “untrack” in libraries like Solid or Vue can isolate certain expressions. Despite the potential pitfalls, the speaker remains upbeat, believing Preact signals can still power the main aspects of a reactive renderer.

### 132:00 - 138:00 — Testing Basic Library Builds

During this segment, the host tries the first build of their Preact signals library. They walk through standard steps: “npm install,” “npm run build,” watch for errors, correct naming mistakes, and double-check externalization. They highlight pitfalls like typos in the package name or version mismatches that can break the build pipeline.

A moment of triumph arises when the library compiles without major crashes. The speaker warns that it doesn’t guarantee correctness but is at least a good sign. Their next step, they say, is to test an actual app in a sandbox environment to see if the new build works in practice.

### 138:00 - 144:00 — Code Sandbox Demo and Quick Hello World

To confirm success, they open a Code Sandbox and install the newly published “preact-rx-jsx” package. They replicate a simple “Hello World” or “counter” example to confirm the signals update the DOM. Observing that updates flow smoothly, the host celebrates that it “just works,” though they remain cautious about untracked scenarios or deeper patterns.

They highlight the difference between local testing and a real deployment environment. This step cements that basic reactivity and fine-grained rendering are indeed functional. The talk of ephemeral code experiments fosters a sense that developers can now push boundaries using Preact signals in a more direct, no-VDOM setup.

### 144:00 - 150:00 — Benchmark Preparation with JS Framework Benchmark

Eager to gauge performance, the speaker mentions the widely recognized “JS Framework Benchmark.” They plan to pit normal Preact, Preact signals, and this new “preact-rx-jsx” approach against each other. Past experience suggests that eliminating the VDOM yields big speed wins, but memory usage or partial updates might vary.

They recall experiences building hundreds of benchmarks—like “knockout-jsx,” “mobx-jsx,” and so on—each overshadowing the original library in update times. The speaker’s excitement builds: can Preact signals-based rendering hit near-Solid performance levels? This teases the audience with a potentially big reveal once the tests complete.

### 150:00 - 156:00 — Setting Up the Benchmark

Listeners learn how each variant is installed and flagged in the benchmark suite: “preact,” “preact signals,” and the new library. The host merges or modifies existing branches to sidestep memory leaks or old performance bugs. They add a typical “build data,” “run lots,” and “swap rows” approach from the standard set of test actions.

They mention that some rewriting is needed to incorporate signals for per-row updates rather than re-rendering the whole table. This ensures the library’s fine-grained approach gets properly showcased. Step by step, they confirm each action—select row, clear, remove—maps onto the signals logic, expecting minimal overhead.

### 156:00 - 162:00 — Potential Untrack Pitfalls in the Benchmark

A moment of caution arises. The host wonders if a part of the benchmark might trigger unwanted reactivity. For example, array looping code might track more signals than intended, slowing performance. They discuss how, in other projects, “untrack” is vital for ignoring certain reads.

Yet they note that in these fairly straightforward table operations, naive usage might be enough to see big performance gains. They remain curious whether more advanced test cases might reveal the missing untrack. Nonetheless, they commit to pressing onward, believing the main transformations will illustrate strong improvements over vanilla Preact.

### 162:00 - 168:00 — Debugging an “Update Every 10th Row” Issue

After hooking up the benchmark, the speaker runs local tests and discovers the “update every 10th row” function isn’t updating labels. Diving into the code, they spot that the new signals-based logic was referencing the signal object itself, not its `.value`. This reveals the subtle difference from the earlier Vue-based approach, where refs morph into proxies.

They correct it by appending `.value` when modifying the label, immediately fixing the missing updates. This highlights how small conceptual differences in reactivity require precise changes. The bug’s swift resolution underlines how easy such oversights can arise when bridging different reactivity systems.

### 168:00 - 174:00 — Initial Benchmark Results and Observations

The speaker fires off the benchmark, then returns with preliminary numbers. They see that partial updates, like “select row” or “update every 10th row,” are markedly faster than standard Preact, matching the pattern observed with other fine-grained libraries. Full creation or replacement might be slightly slower than plain Preact, likely due to overhead in generating many signals.

They’re delighted to see memory usage near or below Preact’s own, verifying that Preact signals remain compact. They note a small difference from Solid’s best-in-class results, but it’s still remarkably close. The host underscores how removing the VDOM often yields massive performance benefits, especially in partial updates.

### 174:00 - 180:00 — Reflecting on Preact Signals’ Strength

The conversation shifts to praising the Preact signals implementation. The speaker praises how memory usage remains relatively low, overshadowing concerns that a new reactive system might inflate memory. They clarify that while advanced features like transitions or concurrency are absent, for many practical use cases, signals are already robust.

They also mention that bridging signals with advanced reactivity, or patching in “untrack,” could unlock further possibilities. This fosters a sense that Preact might soon offer a strong competitor in the no-VDOM space if it invests in more specialized APIs. The overarching feeling is that the future is bright for signals-based patterns.

### 180:00 - 186:00 — Revisiting High-Level Resumability Thoughts

With the benchmark complete, the host momentarily jumps to broader architectural topics, notably resumability. They reference frameworks like Qwik and Marko, explaining how rehydration or partial execution can reduce startup costs. They point out that fine-grained reactivity merges well with strategies that skip overhead on the client.

Though they don’t go deep into specifics, they highlight that advanced approaches often break from typical VDOM or SSR-only patterns. The speaker muses on how micro-updates and partial loading tie together elegantly, though each framework’s method differs. It sets a context for how signals might fit into bigger future patterns.

### 186:00 - 192:00 — Considering Server Components and Interoperability

From resumability, the speaker slides into server components. They note that bridging signals or reactivity to the server can reduce hydration overhead. The mention of next’s approach triggers speculation about reactivity-based frameworks doing partial hydration more efficiently. They see potential synergy between fine-grained updates and server-driven markup.

Though acknowledging that each system has unique constraints, they hint that a signals-based approach might skip certain transitions entirely. As they disclaim the complexity, the host still believes it’s a fruitful direction, imagining minimal JavaScript on the client while only certain states remain reactive.

### 192:00 - 198:00 — Switching Focus to Next.js and Ecosystem Tidbits

Attention pivots to Next.js after acknowledging big announcements from its recent conference. The speaker reveals they missed it because they were traveling. They view Next’s push with server components as a sign of React’s deeper alignment with partial rendering and asynchronous data fetching.

A candid reflection arises about how frameworks like Next are shaped by corporate backing. The host wonders aloud how smaller projects or alternative frameworks handle the same server component patterns. They highlight that these developments could unify or fragment the React ecosystem, depending on how thoroughly the community embraces new APIs.

### 198:00 - 204:00 — Sizing Up the Funding and Collaboration Landscape

Broaching a more philosophical angle, the speaker touches on how open-source collaborations can be overshadowed by large sponsor-driven frameworks. They mention that unique ideas often come from smaller libraries, but bigger players might have better marketing or resources to push them mainstream.

Netlify, Vercel, and other hosting providers appear, illustrating the interplay between frameworks, developers, and commercial platforms. The host keeps a neutral stance, acknowledging that financial investment can speed innovation but might skew adoption patterns. They encourage a healthy awareness of who funds each technology.

### 204:00 - 210:00 — Skepticism and the Question of “Open Web” Values

Listeners hear a trace of caution over how corporate backing can centralize control. The host references the potential for subtle lock-in—like how Next might be optimized best for Vercel or rely on internal knowledge. This could undermine the broader open-source ethos, even if unintentionally.

They see no ill intent from react core contributors, but the alignment of interests is undeniable. This spurs the speaker to keep a watchful eye on how the ecosystem evolves. They emphasize a hope that multiple players remain engaged so that no single platform gains outsized influence over fundamental web standards.

### 210:00 - 216:00 — Reflecting on “VC-Backed OSS” and Future Risks

The conversation intensifies around the concept of venture capital in open source. The host recounts widespread discussion about whether frameworks with heavy investment inevitably push proprietary features or hosting. While big money fosters rapid growth, it can also lead to pivoted business models that hamper open collaboration.

The speaker references the Redwood or Remix ecosystems, each with unique relationships to their parent companies. They highlight possible paths forward: balancing innovation with community-driven sustainability. While no easy solutions appear, the host stresses that developers stay informed about where code and funding intersect.

### 216:00 - 222:00 — Dan Abramov’s Involvement and Clarifications

Returning to React’s role, the host mentions offline chats with Dan Abramov, who clarifies that React’s latest steps toward server components have been in the works for years. That lengthy timeline left the community eager for a unifying approach to data fetching, concurrency, and partial rendering.

They stress that the React team welcomes different meta frameworks, yet Next is the main force implementing these new features. The host suggests that broader community synergy might still surface if more frameworks or platforms adopt server components in their own style. The biggest takeaway is that React’s direction ultimately aims at better user experiences, not exclusivity.

### 222:00 - 228:00 — Hyping Collaboration Over Rivalry

In these minutes, the speaker highlights the importance of cross-pollination among frameworks. They recall how smaller projects often spark big improvements—like advanced hydration or fine-grained signals. They propose a future in which next, remix, or other tools borrow ideas from each other, leading to better developer experiences.

However, they concede that the tension around corporate alliances won’t vanish overnight. Observers must differentiate marketing and real synergy. The hope is that open standards and open discussions continue, preventing a fracturing of knowledge or unnecessary duplication of effort.

### 228:00 - 234:00 — Revisiting Solid Server Components Progress

Near the four-hour mark, the speaker shifts to show a personal project: hooking server components into Solid. They reveal ongoing experiments with partial hydration and single-post data refetching. Though still experimental, they’re excited by how a fine-grained approach can simplify or skip certain overhead.

A quick demonstration of a notes application proves how partial updates flow from the server, merging HTML in place without large JavaScript bundles. They point out it clocks around 10 kilobytes of client code, significantly less than typical client-heavy solutions. This reinforces the broader theme of efficient reactivity.

### 234:00 - 240:00 — Comparing Different Architectures for Efficiency

They muse on how other frameworks like Qwik approach similar goals from different angles, focusing on extreme lazy-loading or using the DOM as a serialization boundary. Meanwhile, Solid tries to unify transitions, streaming, and reactivity in a single, coherent model. Each approach has strengths, but all share a desire to reduce client overhead.

Listeners sense that the speaker sees server components as a stepping stone. They suspect that as knowledge of partial rendering patterns spreads, more frameworks will pivot away from shipping large client bundles. Overall, they portray this as a healthy push towards faster user experiences if done carefully.

### 240:00 - 246:00 — Overcoming Challenges in Multi-Platform Integration

In these moments, the speaker acknowledges that real-world constraints, like integrating with form submissions or specialized caching layers, complicate universal solutions. They mention that each tool—Next, Astro, SvelteKit, Solid Start—implements partial hydration or server logic differently.

They reiterate that bridging the entire pipeline from server to client can involve patching fetch, custom cache APIs, or specialized transitions. Even if the final developer experience is elegant, building it remains intricate. The host invites listeners to keep an eye on further experiments uniting these layers under standard reactivity paradigms.

### 246:00 - 252:00 — Realism About Universal Patterns

While the speaker champions reactivity, they caution that “one size fits all” rarely works in web development. Different apps may prefer direct SSR, compiled client code, or worker-based rendering. They reflect on the variety of “holy grail” patterns over the years—like isomorphic rendering—and how each introduced new trade-offs.

That said, the stream asserts that signals remain a solid baseline for optimizing updates. The discussion about Next or Solid server components is a broader context for those seeking incremental or complete solutions. The host encourages curiosity, revealing that the field still has untapped potential.

### 252:00 - 258:00 — The Quick Ecosystem Mention

They briefly return to Qwik, praising its unique approach to partial hydration and how it changes the mindset around bundling. The speaker recollects meeting with Qwik’s creator, comparing notes on different strategies. There’s a shared belief that reactivity is key to unlocking more fluid user experiences.

Nevertheless, the conversation underscores that Qwik’s approach can feel foreign to developers accustomed to a top-down rendering model. The host sees an advantage in tools that preserve reactivity’s intuitive flow while letting code load on demand. They foresee more frameworks picking up those ideas as time passes.

### 258:00 - 264:00 — Revisiting the Aurora Project and Funding Gaps

The speaker recounts how large players like Chrome’s Aurora project fund frameworks that promise big user impact. They note that mainstream solutions like Next or Angular usually secure support more easily, even if smaller innovations might have bigger potential. This ties back to concerns of overshadowing or lock-in.

They remain pragmatic: bridging tens of thousands of real-world apps often matters more to sponsors than cutting-edge optimizations. The host sees no malicious intent but flags that this dynamic can leave advanced patterns underfunded. Encouraging viewers to keep supporting smaller, creative libraries closes out the reflection on commercial support.

### 264:00 - 270:00 — Summarizing the “Lock-In” Concern

As the session continues, the host addresses “lock-in” more directly. With server components requiring close hosting integration, frameworks can inadvertently lock developers to a platform. They reference how some might suspect Next to be natively best on Vercel, creating disincentives for multi-cloud or on-premises solutions.

Still, the speaker reiterates that many of these features are open source, so rival platforms can catch up, albeit behind the initial wave. The real question is whether friction or specialized caching will keep some features out of reach. This fosters an attitude of watchfulness rather than alarmism.

### 270:00 - 276:00 — Personal Opinions on Ecosystem Direction

Here, the speaker shares personal sentiment on where the web might be heading. They favor composable, fine-grained reactivity solutions, seeing them as simpler than hooking endless plugins or VDOM optimizations. They also appreciate frameworks that let partial server control reduce large client bundles.

Listeners sense that each library’s journey has lessons for the community. The host believes genuine progress emerges through experimentation, acknowledging that corporate involvement is both a boon and a complication. They call for more developer education around fundamental reactivity, so these ideas can shape future frameworks collectively.

### 276:00 - 282:00 — Revisiting Benchmarks and Performance

The talk circles back to performance numbers from the earlier benchmark run. The host mentions retesting “preact-rx-jsx” with different data sizes or new test permutations. They discuss the trade-off of extra signal overhead for creation, offset by massive wins in partial updates. This interplay reaffirms earlier conclusions.

They joke that for large lists, carefully controlling how signals are assigned can impact memory usage. Still, the consistent pattern is that eliminating a bulky VDOM pays dividends in row swapping or single-item updates. That success energizes them to consider further expansions or specialized features for advanced patterns.

### 282:00 - 288:00 — Handling Real-World Complexity

At this point, the streamer highlights that real apps often do more than simply add, remove, or swap rows. They handle deep nesting, multi-level contexts, and asynchronous data. The talk merges abstract performance insights with practical advice: always measure usage in the actual environment you plan to support.

They emphasize that bridging small reactivity wrappers to extensive frameworks like Next or Astro requires careful orchestration. Even if the underlying system is fast, devs must watch out for rough edges in tools or bundlers. Overall, the host encourages systematically verifying each piece to avoid last-minute surprises in production.

### 288:00 - 294:00 — Reflecting on Minimizing JavaScript

The conversation recalls the host’s preference for shipping minimal JavaScript. They highlight how some frameworks continue to send large client bundles even for static-like pages. Signals or server components help reduce this overhead, though the approach differs. This reveals that bundling strategies, universal or partial hydration, and tree shaking are all relevant.

They view minimized JavaScript as a win for users on slow networks or devices, praising solutions that cut download and parse times. However, they also caution that transitions or advanced interactions may require more code. Ultimately, they aim to let developers choose how dynamic they want each part to be.

### 294:00 - 300:00 — Transitioning Toward Closing Topics

Entering the final stretch, the speaker acknowledges the length of the session. They recap the highlights: from building a reactivity-based library to considering the broader ecosystem of Next, React, and open-source funding. The synergy between frameworks and hosting providers remains a central theme, as does a cautionary stance about potential lock-in.

They reaffirm their excitement for Preact signals as a simple, effective solution. While not perfect, it’s a strong foundation for real-world experiments. The stream’s narrative has moved from direct code exploration to philosophical reflections on the future of JavaScript frameworks, preparing for a concluding summary.

### 300:00 - 306:00 — Revisiting Astro, Svelte, and Multi-Framework Ties

The host references other frameworks like Astro or SvelteKit, noting how they also chase minimal client footprints but with distinct architectures. Astro’s island pattern complements solid or preact partial updates, while SvelteKit’s compiler approach reduces overhead. Despite differences, each demonstrates creative ways to reduce end-user loading costs.

They mention that ongoing improvements in these frameworks reflect an industry-wide push for better performance and developer experience. The conversation acknowledges that the speaker’s perspective is partially shaped by their own library experiences. They see each approach as reinforcing a pattern: shipping less code and calculating updates precisely.

### 306:00 - 312:00 — Farewell, Future Streams, and Final Thoughts

In the last minutes, the speaker wraps up. They stress that next month’s schedule means fewer Friday streams, prompting them to share final reflections. They remain excited about ongoing development, whether it’s Preact signals expansions or the next wave of React server components. They thank viewers for sticking around for a lengthy, in-depth session.

A final note about the synergy of community and corporate resources ties everything together. While large companies accelerate innovation, grassroots efforts keep the ecosystem from stagnating. Listeners are left with encouragement to keep experimenting, keep challenging assumptions, and keep an open mind about where the web might head next.

### 312:00 - End (05:11:47) — Post-Stream Wrap and Quick Sign-Off

A brief sign-off follows as the host reiterates gratitude to everyone who joined the conversation. They mention a fleeting interest in continuing the Preact signals library to polish rough edges, acknowledging the missing “untrack” solution. The stream ends on an optimistic note, inviting the community to explore the code, share feedback, and remain watchful of new announcements in the ever-changing world of JavaScript.

They bid farewell with a casual promise to return when schedules allow, bringing more advanced coding and candid discussions. After hours of reactivity talk, experimentation, and broader ecosystem musings, the session finally closes, leaving viewers with new insights and inspiration to build in fresh, efficient ways.