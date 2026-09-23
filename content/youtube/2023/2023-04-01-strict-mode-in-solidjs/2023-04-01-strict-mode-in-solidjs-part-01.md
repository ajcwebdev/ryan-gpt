---
showLink: "https://www.youtube.com/watch?v=2bkuEIa3Nwk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Strict Mode in SolidJS?!"
description: ""
publishDate: "2023-04-01"
coverImage: "https://i.ytimg.com/vi/2bkuEIa3Nwk/maxresdefault.jpg"
---

## Episode Description

A thorough exploration of SolidJS, covering reactivity, proposed “strict mode” features, and broader JavaScript ecosystem insights, including live coding demonstrations and in-depth discussions.

## Episode Summary

This conversation delves into a wide range of topics centered on SolidJS, beginning with casual banter about stream scheduling, birthdays, and general community interactions. It then transitions to a technical exploration of Solid’s reactivity model, including how signals and effects are managed under the hood. The speaker examines potential improvements, such as a proposed strict mode that would catch untracked reads and guide developers toward more predictable patterns. Throughout, real-world examples and live coding demos illustrate how small API changes might influence daily development workflows. The latter portion shifts to broader ecosystem news, from Quick’s approaching 1.0 release to the impact of React Server Components on frameworks like Astro. Closing thoughts emphasize the importance of balancing performance optimizations with developer experience, highlighting both the challenges and the excitement of pushing forward in JavaScript framework design.

## Chapters

### 00:00:00 — Initial Greetings and Stream Setup

In the first few minutes, the speaker greets the audience, sets up the stream, and casually discusses why the session was not pre-planned. There's mention of overlapping live streams, including birthday shout-outs and friendly nods to other creators in the community. These lighthearted exchanges set the tone for an unstructured but ultimately deep technical session, giving viewers time to join and settle in.

As the conversation warms up, the speaker explains they will explore a topic inspired by recent social media discussions. They begin acknowledging the varied nature of this stream—ranging from code demos to reactive philosophy. By referencing tweets and comedic thumbnails, the host illustrates how spontaneous ideas shape their weekly broadcasts. This relaxed entry eases the audience into what becomes a detailed discussion of JavaScript frameworks and design choices ahead.

### 00:10:00 — Inspiration for Strict Mode in SolidJS

Here, the speaker introduces the idea of a stricter setting or “strict mode” within SolidJS, inspired in part by React’s Strict Mode and lingering questions from Twitter. They recount how developers new to signals often wonder why certain expressions, like `doubleCount = count() * 2`, do not automatically update. The impetus is to provide a safety net for unexpected reactivity pitfalls.

During this segment, the speaker highlights the tension between wanting tools that are unobtrusive versus those that proactively warn or block questionable patterns. They explain how TypeScript and ESLint handle signal usage, and why a runtime guard might still be beneficial. Mentioning Rust’s influence, the speaker notes that many prefer a more opinionated, compiler-like approach to catch potential errors early, framing the core argument for introducing a stricter model.

### 00:20:00 — Reconciling TypeScript, ESLint, and Runtime Checks

Attention turns to how far static tools can go. The speaker delves into TypeScript’s improvements in Solid 1.7, describing how it provides a baseline of coverage for misused signals in JSX. They compare TypeScript’s rigorous approach to ESLint’s more configurable rules, underscoring that each has different strengths. However, some runtime scenarios—like delayed operations in setTimeout—are tough for static analyzers alone.

A key insight emerges: illusions of safety from lint and types may miss occasional edge cases. The conversation explores how a runtime “strict mode” could pinpoint untracked reads that slip past static checks. This proposed approach, they argue, would help newcomers avoid silent mistakes, leading to a more intuitive mental model of reactive data flow.

### 00:30:00 — Live Coding and Playground Experiments

With conceptual groundwork laid, the speaker shifts to a hands-on demonstration. They open the Solid Playground and highlight red squiggles that now appear when signals are improperly accessed. Showcasing code snippets in real time, they illustrate how ESLint and TypeScript collectively nudge developers toward best practices. Meanwhile, they reveal that existing type definitions still allow certain function misuses.

This practical session emphasizes how small, thoughtful tweaks can reduce friction. By calling `count()` directly in JSX or event handlers, users maintain reactivity seamlessly. Yet the speaker shows how destructuring props or reading signals in the wrong scope can break reactivity. Through a flurry of quick code examples, they emphasize that these pitfalls are less common once developers grasp the underlying pattern, but a strict mode might preempt them altogether.

### 00:40:00 — Exploring Destructuring Pitfalls and Workarounds

In this window, the speaker focuses on the often-requested feature of destructuring props in SolidJS. They explain that destructuring pulls data out of its reactive context, which can confuse beginners expecting reactivity to “just work.” The conversation touches on existing Babel plugins and advanced techniques to bypass this limitation, but the official stance remains cautionary.

They dissect how destructuring in the wrong place effectively “reads” values outside the reactive scope. By showing an example and carefully stepping through the code, the host clarifies why signals lose their dynamic updates. Solutions like the Babel plugin or manual accessor usage exist, but the speaker suggests that a strict mode could unify best practices, preventing developers from accidentally adopting anti-patterns.

### 00:50:00 — Effects, Cleanup, and Potential Strict Mode Warnings

Turning to another core mechanism, the host examines `createEffect` and how SolidJS disposes nested effects for dynamic or conditional logic. They demonstrate that cleanup happens automatically if an effect is declared inside another. However, calling `createEffect` outside a root or nested scope triggers warnings of leaked side effects.

This exploration underscores how a runtime check can catch common mistakes. The speaker ponders whether “no root” warnings could be folded into a strict mode, sparing advanced users routine messages while directing novices toward correct disposal. The conversation stresses that while these checks might feel noisy, they reinforce clarity in large-scale apps needing robust memory management.

### 01:00:00 — Sifting Through Async Contexts and Untracked Reads

Focus shifts to asynchronous patterns, such as reading a signal in a `setTimeout` or callback. The speaker showcases an example where `count()` is invoked after a delay but never re-renders because it’s read outside reactive scope. This scenario eludes static analyzers like TypeScript and ESLint, reinforcing why a runtime approach can be valuable.

They consider the user experience of forced explicitness. Should developers be required to wrap `count()` with `untrack` in asynchronous code? Although it might inconvenience some, the benefit is immediate clarity: no illusions of reactivity in contexts where it simply cannot exist. The speaker highlights that, for advanced usage, there remain escapes—like hooking into low-level APIs, albeit rarely recommended.

### 01:10:00 — Balancing Developer Freedom with Guardrails

As the strict mode concept matures, the speaker muses on potential friction library maintainers might face. Opting into a runtime check could force them to refactor internal patterns that rely on subtle untracked reads. The host suggests such tension is often necessary: a small burden on maintainers can pay off in broader stability for end users.

They then weigh whether warnings or errors should be default. Noting how React’s Strict Mode logs double renders instead of throwing exceptions, the speaker envisions a gentler approach for Solid. They foresee standard console hints to guide new developers, but also see an escape hatch for experts who prefer minimal constraints.

### 01:20:00 — Implementation Details: Untrack and Listener Logic

Here, the discussion becomes more granular. The speaker sketches how Solid’s `readSignal` function might be patched: if no reactive listener is present and no explicit `untrack` is declared, it could warn or throw. They highlight how toggling a global “not tracked” flag would handle calls from event handlers or “untracked” scopes.

They revisit the proposed design: by default, read attempts in a non-tracked context produce a warning. The user can override it with `untrack(() => ...)`, acknowledging up front that reactivity is intentionally bypassed. This approach parallels other strict patterns in programming, though the speaker reiterates a gentle default might better serve everyday development.

### 01:30:00 — TypeScript and ESLint Interactions Revisited

Returning to TypeScript’s new capabilities in Solid 1.7, the speaker highlights how the red squiggles eliminate many casual misuses of signals. They praise how typed definitions guide correct usage in JSX, significantly reducing friction. Nonetheless, TypeScript alone cannot cover dynamic cases or deeper destructuring tricks.

They circle back to ESLint’s complementary role, noting ESLint can identify suspicious patterns like top-level destructuring or ignoring the function call on a signal. Yet ESLint sometimes yields false positives or lacks cross-file analysis. The speaker concludes that bridging all three layers—TypeScript, ESLint, and runtime checks—could form an ideal safety net for Solid’s reactivity.

### 01:40:00 — Prototyping Strict Mode in Practice

At this juncture, the speaker resolves to prototype strict mode. They exit into a local environment to show how easily signals can be conditionally untracked by setting a global boolean. Turning an initial proof-of-concept into something more robust, they share incremental patch snippets that either throw errors or log warnings.

The demonstration reveals complexities of optional or nested untrack usage. They must consider early returns and ensure consistent cleanup. The speaker emphasizes that, even though the patching is straightforward, the real challenge lies in deciding user-facing defaults. They want strict mode to catch mistakes while allowing advanced patterns to remain feasible.

### 01:50:00 — Event Handlers and No-Tracking Wrappers

Focus shifts to how Solid treats DOM event handlers. The speaker reminds viewers that event handlers run outside reactivity by design, so they are implicitly untracked. This drives the actual coding step: wrapping all event handler callbacks with an `untrack` call, ensuring signals used within never cause unwanted warnings.

They further clarify that user-defined custom elements or delegated event systems must similarly handle untrack logic. Demonstrating how the relevant code in `dom-expressions` can be patched, they highlight that a few lines in the renderer suffice to adopt a no-tracking approach. This step cements how the concept would integrate thoroughly into Solid’s runtime.

### 02:00:00 — Validating, Building, and Troubleshooting the Patch

Compilation steps begin. The speaker repeatedly rebuilds their local version of Solid, copying code into an online environment to test. They uncover minor friction around dependencies, version mismatches, and typical Node-based pitfalls. Despite these practical hurdles, they persist and confirm event handlers no longer trigger errors when signals are accessed.

They show triumph as top-level reads now throw or warn appropriately, while button clicks pass silently. The speaker acknowledges some developers might not want any beep from untracked reads, reinforcing that multiple modes or a gentle fallback approach could become part of official strict mode design.

### 02:10:00 — Weighing the End-User Experience

Comparisons to frameworks like Svelte and Vue surface here. The speaker acknowledges that Svelte compiles away most reactivity overhead, while Vue’s composition API similarly expects signals to be accessed carefully. Solid, by contrast, defaults to explicit calls, potentially confusing novices but granting performance clarity.

They emphasize that a well-designed strict mode would help novices adopt best practices from the outset. Experienced developers, comfortable with Solid’s low-level reactivity, might see it as unnecessary overhead. Yet the speaker envisions that bridging such divides fosters a friendlier environment, boosting approachability without sacrificing the fine-grained approach that veteran Solid users love.

### 02:20:00 — The Impact on Library Authors and Ecosystem

Zooming out, the speaker highlights how a library or component author must adapt. If a widely adopted strict mode emerges, advanced techniques that rely on untracked signals or clever destructuring must adapt. Potentially, this is no small undertaking, as deep internal code might systematically violate the new constraints.

They reiterate that while the top-level team can seamlessly patch Solid’s internals, external maintainers face more work. The speaker suggests strong documentation, helpful errors, and migration strategies could ease the transition. They concede that, as with React’s strict mode, it might cause short-term friction but pay dividends in the ecosystem’s overall quality.

### 02:30:00 — Considering the Broader JavaScript Landscape

The conversation shifts beyond Solid’s immediate scope, referencing React’s signals discussion, developer mindset shifts, and the impetus for frameworks to add friendly guardrails. The speaker notes how, historically, JavaScript was prized for its flexibility, but modern usage seeks stricter correctness. This resonates with patterns from strongly typed languages or advanced compilers.

They discuss parallels to Rust, acknowledging a trend where developers prefer an environment that guides them away from subtle mistakes. The speaker muses that, ironically, rigorous checks can produce a “just works” experience, offsetting the cost of boilerplate or explicit calls. They foresee JavaScript frameworks increasingly merging high performance with strict developer aids.

### 02:40:00 — Expanding the Discussion to Server Components

Around this mark, the speaker segues to the topic of React Server Components (RSCs) and how their concurrency model influenced strict mode. They explain that React’s re-rendering might run effects multiple times, prompting distinct checks. Though Solid’s approach differs, the community interest around RSCs underscores how crucial it is for frameworks to refine error handling and lifecycle predictability.

They outline how server components shift logic from the browser to the backend, potentially simplifying client-side caches. The speaker contrasts that with Solid’s approach, where no re-render of entire trees occurs. They argue that if bigger players champion a certain standard or pattern, it swiftly ripples through smaller frameworks like Solid.

### 02:50:00 — Bridging Signals, Observables, and Future Directions

A tangent arises comparing signals to RxJS observables. The speaker references a recent conversation with Ben Lesh of RxJS, noting they share common ground in pushing reactivity forward. They highlight that making signals a standard browser primitive remains elusive, despite repeated attempts and some interest across frameworks.

Amid these reflections, the speaker underscores that library-level solutions often offer the needed flexibility. While the dream of universal reactive primitives lingers, real progress continues in userland. They express optimism that experiments in strict reactivity or advanced compilation might one day lead to more official standardization, if enough demand emerges.

### 03:00:00 — The Reality of Building a JavaScript Framework

Shifting perspective, the speaker comments on the relative ease of writing a bare-bones reactive library. They mention how quickly one can prototype partial updates or a small DOM compiler. The truly hard part lies in integrating real-world constraints—consistent tooling, TypeScript definitions, bundler support, and nuanced edge cases.

They detail how advanced “strict mode” discussions underscore this complexity. Even a small code patch to warn on untracked reads unearths large downstream implications. The speaker invites would-be framework authors to try rolling their own as an educational exercise, emphasizing that building the rudiments is enlightening, but finalizing a robust solution for everyday developers is a monumental task.

### 03:10:00 — Reflecting on Meta Frameworks and Large Ecosystems

Broadening the lens, the speaker delves into meta frameworks like Next.js, Astro, and others. They note that beyond reactivity and templating, these toolkits must address deployment, file-based routing, SSR strategies, and cross-platform considerations. Such complexity dwarfs that of core rendering logic, which is comparatively straightforward.

They contend that partial or progressive hydration fosters major performance gains in real apps. Yet ensuring this is developer-friendly is a different challenge. The conversation underscores how collaboration on open standards—like “use client” or “use server”—might help unify the patchwork of current solutions. The speaker envisions frameworks converging on an ecosystem of shared best practices.

### 03:20:00 — Interplay with Astro: Hybrid Approaches and Islands

A notable part of this segment focuses on Astro’s approach to partial hydration, or the “islands” concept, and how it pairs with Solid. The speaker celebrates that many devs adopt Astro as a static-first site generator, layering in Solid for interactive components. They also mention ongoing efforts to add React Server Components to Astro, highlighting the tool’s agnostic stance.

While these approaches can appear redundant, the host sees synergy. Even if frameworks have built-in islands or SSR, bridging them can let devs seamlessly combine advanced techniques from multiple ecosystems. They propose that staying flexible fosters iterative improvement without forcing major rewrites or ecosystem fragmentation.

### 03:30:00 — Benchmarks and the Nuances of List Rendering

During this timeframe, the speaker references JS Framework Benchmark details, describing how Solid only re-renders minimal parts of a list. This example highlights a micro-optimization mindset that can yield large gains. They underscore how signals in Solid avoid re-diffing entire arrays, equating to a raw speed advantage over more naive approaches.

They imagine how strict mode might interplay with these advanced patterns. Potentially, library authors who produce high-performance tables or infinite lists must ensure they handle signals meticulously. The speaker reiterates that real mastery in Solid arises from appreciating its fine-grained updates, and any new feature must preserve that hallmark efficiency.

### 03:40:00 — This Week in JavaScript: Quick, Svelte, and More

Pivoting to general ecosystem news, the speaker shares that Quick is nearing a 1.0 release. They discuss how the Quick team integrated a meta framework, Quick City, seeing it as vital for real-world usage. Mentions of Svelte’s future arise too, particularly with Dominic Gannaway (Inferno, Lexical) joining Vercel to work on “Svelte 5,” implying big shifts in performance or compilation.

They also highlight how other notable figures, like Tom Occhino from the early React team, joined Vercel. This signals increased investment in the open-source framework space, potentially accelerating innovation. The speaker portrays it as an exciting time for watchers of core technology behind Next.js, Svelte, and other major players.

### 03:50:00 — React Server Components Resurfacing

The conversation delves deeper into React Server Components, referencing Dan Abramov’s recent live coding sessions with Ben Holmes, where they explore implementing RSCs in Astro. The speaker praises the clarity and thoroughness of these streams, underscoring that for advanced concepts, watch-through coding can be invaluable.

They note that RSCs resonate with earlier partial-hydration ideas: carefully limiting client JavaScript. Yet React’s concurrency model also imposes double effects and partial re-render unpredictability. They see how server components might push frameworks to unify around a bigger ecosystem narrative, bridging approach differences. This synergy may further refine Solid’s future direction.

### 04:00:00 — Streaming Over AWS Lambda and Platform Nuances

Attention briefly shifts to Vercel’s new support for streamed responses on AWS Lambda runtimes. The host explains how frameworks like Solid Start or Next.js rely heavily on streaming for partial rendering, but standard AWS Lambda historically lacked native streaming capabilities. Vercel’s workaround merges edge platform logic with Lambda to deliver a streaming-like experience.

This underscores how platform constraints trickle down into framework design. The speaker suggests the continued push for universal streaming and better integration, praising the engineering ingenuity that overcame these longstanding limitations. They predict more providers, like Netlify, will follow suit, further normalizing streaming SSR across the board.

### 04:10:00 — Returning to the Idea of Strict Mode’s Future

Looping back, the speaker reevaluates whether the new strict mode patch truly resolves friction or might cause additional confusion. They remain split on whether top-level errors are beneficial or overly strict. Nonetheless, they reiterate that the proof-of-concept code is feasible and not difficult to implement.

They foresee potential synergy with new resource APIs, where developers rarely step outside reactive boundaries unless intentionally. By offering optional strictness, Solid can maintain its hallmark performance and flexibility for advanced patterns while protecting novices from hidden pitfalls. The conversation underscores that final decisions await deeper real-world feedback.

### 04:20:00 — Community Feedback and Real-World Implications

In a reflective moment, the speaker considers how many users prefer minimal overhead and high performance, trusting themselves to code carefully. A strict mode might remain an advanced toggle for teams scaling to large applications or teaching newcomers. They note parallels to lint rules: some organizations heavily enforce them, while others run lean.

They continue emphasizing that incremental adoption or partial toggles could become a standard approach: user code that strictly adheres to best practices triggers fewer or no warnings. This incremental adoption strategy aims to unify the community and avoid dividing it between “strict” and “non-strict” camps. Ultimately, broad acceptance depends on whether the benefits substantially outweigh the cost.

### 04:30:00 — Audience Interaction and Sushi Interlude

As the session nears conclusion, the speaker answers miscellaneous chat questions, including the comedic mention of orange juice turning into sushi dinner plans. They check updates on parallel streams and remark that their own deep dives often overlap with more popular events. This playful downtime lightens the atmosphere after hours of dense technical detail.

They reiterate an ongoing desire to see how the JavaScript community experiments with server components, advanced streaming, and typed reactivity in the coming months. With dinner on the horizon, the speaker jokes about stepping away from the code to recharge, yet remains deeply intrigued by the future of advanced compilation.

### 04:40:00 — Musing on Compiler-Driven Framework Evolution

The speaker touches on an emerging consensus that advanced compilers can simplify developer experience, bridging gaps in reactivity. They cite examples of how Svelte’s single-file approach or Solid’s JSX transform both heavily rely on build steps. While once seen as a burden, bundlers have become universal, letting frameworks implement performance optimizations without manual overhead.

They note how React’s “forget” compilation approach or signals talk might significantly reshape how developers write code in a few years. Yet they caution that bold new syntax can conflict with established tools like Prettier or TypeScript. Ultimately, they see incremental progression—adhering to widely supported boundaries—until truly transformative features gain enough momentum to shift mainstream practices.

### 04:50:00 — Next Steps and Proposed Roadmaps

During this interval, the speaker outlines potential next steps for Solid’s strict mode, including an experimental branch or user-driven alpha. They emphasize that decisions hinge on weighings of code complexity, library maintainer burdens, and user error frequency. A formal proposal might appear on GitHub to gather feedback.

They also spotlight future streams and discussions, teasing deeper dives into bridging signals with server components, plus more official partnership with meta frameworks. The audience hears how the speaker and collaborators want to finalize stable versions of Solid Start, unify adapters with Astro, and possibly revisit advanced reactivity patterns once immediate priorities settle.

### 05:00:00 — Wrapping Up “This Week in JavaScript” Topics

The speaker circles back to re-summarize key announcements: Quick’s RC release, Svelte’s big hires, new React server component explorations, and the unstoppable push toward universal streaming solutions. This quick recap reaffirms the swirling energy in the JavaScript ecosystem, with every major framework working on next-generation performance and developer experience enhancements.

They highlight that while the environment can feel chaotic, these parallel efforts often converge on shared solutions, such as building block APIs. Expressing excitement for upcoming releases, the speaker thanks the community for staying engaged through all these updates and acknowledges that it’s a great time to be a web developer.

### 05:10:00 — Final Q&A and Anecdotes

Drawing to a close, the host fields final chat questions about smaller topics: personal preferences, game references, or random remarks on code style. They humorously note how streaming their coding journey often draws niche audiences, with some watchers juggling multiple streams. The speaker embraces this cross-pollination, seeing it as a testament to collaborative spirit in open source.

They revisit the idea that “just shipping” features can be deceptively easy, whereas ensuring global buy-in is much harder. The speaker’s concluding reflection: new ideas must be timed well, or risk overshadowed by React’s gravitational pull. Yet they stay optimistic that thoughtful planning, even with small steps, can preserve Solid’s identity while aligning with emerging standards.

### 05:20:00 — Farewell and Transition to Other Streams

In the final moments, the speaker signs off, mentioning an upcoming live stream where others plan to discuss React server components in Astro. They invite viewers to join that session, continuing the cross-community synergy. With a cheerful goodbye and promise of sushi, the host ends the marathon stream on a light note, thankful for the engaged audience and eager for future innovations.

They reaffirm that despite the complexity, this evolving synergy among frameworks will shape a more powerful and user-friendly JavaScript landscape. With that, the conversation concludes, leaving the audience with new insights on Solid’s potential strict mode and a panoramic view of the modern web’s future.