---
showLink: "https://www.youtube.com/watch?v=XoeJisRJjlo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida"
description: ""
publishDate: "2022-07-22"
coverImage: "https://i.ytimg.com/vi/XoeJisRJjlo/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation with the Qwik core team explores their new Qwik City meta framework, covering routing, data fetching patterns, and the evolution of modern web development practices.

## Episode Summary

This transcript features an in-depth look at emerging front-end technologies, focusing on the Qwik framework and its meta layer Qwik City. It begins by outlining the motivations behind Qwik’s architectural choices, emphasizing performance, lazy-loading, and the minimal JavaScript needed on initial page load. The discussion moves into the practicalities of SSR, describing how Qwik City handles routing, data fetching, and layout composition without incurring a significant client-side payload. Comparisons to other approaches—such as islands, partial hydration, and progressive enhancement—highlight the different philosophies shaping modern web frameworks. As the conversation unfolds, the speakers share real-world examples, including a demonstration of building a Hacker News clone, to illustrate Qwik City’s strengths and trade-offs. Throughout, they address technical hurdles—like deploying to serverless platforms and ensuring robust streaming support—while also underscoring the importance of developer experience and the evolving ecosystem that surrounds performance-focused frameworks.

## Chapters

### 02:05:00 - 02:11:05 – Debugging Netlify and Express

During this portion, the host encounters friction deploying the Hacker News demo to Netlify, discovering that serverless workflows sometimes need specialized adapters. Manu suggests using Express as a simple fallback for local testing. They walk through the usage of “entry.express.tsx,” which orchestrates the SSR from an Express server, revealing how Qwik City systematically hands off requests to universal logic.

By building again for production and running an Express-based server, the host verifies that streaming partial HTML works as expected. The group recognizes that bridging serverless and streaming remains a platform challenge, illustrating how Qwik City stands ready—if the host environment permits.

### 02:11:05 - 02:17:15 – Prefetching Discussion and Performance

Now, they revisit the concept of prefetching interactive code. The host tests a slow 3G network scenario to illustrate how toggles or link handlers can feel delayed if Qwik does not fetch them proactively. Manu explains that Qwik City experiments with different prefetch strategies, sometimes injecting link tags or relying on a lightweight service worker. They aim to seamlessly load these micro-chunks before the user can sense lag.

While a thoroughly lazy approach can hamper immediate clicks, too much prefetching counteracts the advantage of shipping no code. They reference code-splitting nuances, acknowledging that advanced usage might rely on analytics to identify top user paths. This dialogue underscores the delicate balancing act in building truly global websites.

### 02:17:15 - 02:23:10 – Fine-Grained Updates and Future Directions

The conversation turns to deeper client reactivity. The host wonders if Qwik could adopt a more granular rendering model, akin to how some “signals-based” libraries operate. Manu reiterates that Qwik’s approach merges reactivity with a VDOM layer. He concedes that while a purely fine-grained system might eliminate more overhead, Qwik’s chunk-based approach is already successful in cutting load times and resource usage.

They weigh the possibilities of bridging Qwik’s style with strictly reactive libraries in the future. As Qwik City matures, opportunities to refine the rendering pipeline or adopt partial approaches may arise. This part conveys the dynamic nature of framework design, highlighting how small experiments can create major leaps in user experience.

### 02:23:10 - 02:29:00 – Comparing to Other Framework Approaches

With the Hacker News demo mostly working, they step back to compare Qwik City with Astro, Next.js, or SvelteKit. Each solution implements partial or progressive hydration in some form, but Qwik’s advantage often lies in skipping re-renders altogether. They also discuss concurrency, streaming, and how server platforms influence architectural choices.

The host notes the interplay between shipping small client bundles and ensuring snappy interactions. Manu stresses that Qwik addresses these needs from the start, whereas other frameworks add them later through advanced config or special directives. Ultimately, the group suggests that multiple solutions can coexist, each appealing to different developer preferences.

### 02:29:00 - 02:35:05 – Wrapping Qwik City’s Core Concepts

In this chapter, the host summarizes the key lessons from the live coding session. He emphasizes that Qwik City’s main draws are minimal overhead routing, a fluid MPA-to-SPA spectrum, and a robust data layer that avoids client duplication. Manu recaps how local transformations keep Qwik’s code lean, bypassing the usual traps of large bundles. By referencing real examples, they exemplify how Qwik City feels intuitive despite its unconventional underpinnings.

Listeners learn that Qwik City’s next steps will include improved single-page transitions and more refined streaming. While Qwik remains in beta, the team stands confident that a broad set of features is already stable enough for early production usage. The host thanks Adam and Manu for their time, reaffirming that these patterns could shape the next wave of performance-focused web apps.

### 02:35:05 - 02:41:10 – Transitioning to Additional Topics

Adam departs around this point, leaving the host and Manu to delve into broader JavaScript discussions. They briefly revisit the continuing evolution of SSR in frameworks like React and Vue, aligning it with Qwik’s incremental approach. The host highlights the significance of these changes for large e-commerce sites or dashboards, where single-page app overhead is not always warranted.

Manu expresses optimism that once Qwik City’s documentation catches up, interest will rise among developers craving new approaches to hydration and bundling. They also touch on behind-the-scenes collaboration among framework authors, showing mutual respect for the challenges inherent in rewriting large chunks of runtime logic.

### 02:41:10 - 02:47:00 – Performance Benchmarks and Limitations

Manu revisits the nuanced relationship between standard benchmarks and Qwik’s architecture. The host agrees that typical SSR or 10k-row tests rarely illustrate how Qwik’s skip-hydration approach benefits real user journeys. They praise the partial hydration expansions, where even large trees remain inert if the user never interacts with them.

Manu adds that while performance remains a central goal, developer experience is equally critical. They want Qwik City to feel natural, not forcing mental overhead to manage event boundaries or code splitting. The pair acknowledges that bridging the knowledge gap about “resuming” might be the biggest obstacle to mainstream adoption.

### 02:47:00 - 02:53:05 – Single-File vs. Multi-File Components

Addressing code organization, they compare Qwik’s small, local approach with single-file or monolithic structures. Manu recalls Qwik’s early days when dividing logic across multiple files was cumbersome until the optimizer matured. Now, Qwik’s compiler can interpret the dollar-sign markers, simplifying code splitting and ensuring that each interactive piece is distinct.

They also discuss the “learning curve” effect. Qwik’s new syntax and architecture can seem unusual at first, but the gains in performance and clarity eventually prove worthwhile. They reflect on how frameworks often revolve around single-file patterns, but Qwik’s approach to decoupling fosters flexibility for large teams or complex design systems.

### 02:53:05 - 02:59:15 – Reflecting on the Next Generation of Frameworks

In this segment, the host and Manu pivot toward the broader ecosystem. They cite emergent patterns in frameworks such as Solid, Svelte, React’s Server Components, and Astro’s Islands. A theme emerges: conventional hydration is on its way out, replaced by partial, progressive, or resumable paradigms that drastically reduce wasted re-renders.

Manu suggests that Qwik City’s advantage lies in its “all at once” approach, letting developers combine server- and client-side code without heavy bundling. They see parallels with other solutions but remain confident Qwik’s resumption is a unique offering. The conversation underscores that the next generation of frameworks aims to break from old assumptions around global reactivity and large client bundles.

### 02:59:15 - 03:05:00 – Q&A and Community Involvement

As the host scans chat questions, Manu explains how Qwik fosters collaboration among open-source contributors. Some ask about typed parameters, advanced caching, or custom prefetch strategies. The pair encourages them to join Qwik’s Discord or GitHub, as those discussions steer the roadmap. They mention an upcoming refactor that should unify new features like single-page navigation under a simpler API.

The host echoes that working directly with the team proved invaluable. He describes times they responded quickly to fix bugs or address performance concerns. This fosters an environment where the framework can evolve organically, thanks to real-world usage feedback. Both participants express excitement for fresh voices to push Qwik into new realms.

### 03:05:00 - 03:11:10 – Expanding Use Cases and Final Thoughts

Over these minutes, Manu highlights potential expansions for Qwik City: multi-tenant sites, large documentation platforms, or high-traffic retail experiences. The notion is that Qwik’s approach suits scenarios where static rendering meets targeted interactivity. The host concurs, remarking that minimal initial JavaScript is especially compelling for global audiences on slower networks.

They also consider future advanced features like advanced form handling, real-time data syncing, or deeper integration with back-end frameworks. While Qwik City mostly focuses on front-end concerns, the synergy with modern serverless or edge deployments remains a hot topic. This part ends with an optimistic sentiment that the best is yet to come for Qwik City’s ecosystem.

### 03:11:10 - 03:17:05 – Transition to Broader JavaScript Topics

Having covered Qwik City thoroughly, the host pivots to “This Week in JavaScript,” a recurring segment. He hints at new library announcements and upcoming changes to frameworks like React, Svelte, or Solid. Manu occasionally interjects from the Qwik perspective, illustrating how some community trends—such as signals-based reactivity or partial hydration—have shaped Qwik’s design from the outset.

The host acknowledges that advanced compiler optimizations are hot topics across the board. Whether it’s Svelte’s compiled transitions or React’s new concurrency model, the ecosystem collectively aims to optimize bundling and runtime execution. This broad overview places Qwik City in a continuum of emerging solutions that challenge the classic monolithic approach.

### 03:17:05 - 03:23:10 – The Role of Benchmarks and Marketing Terms

Moving deeper into JavaScript news, the host references how certain “blazingly fast” claims appear for new tools. He cautions that performance marketing can oversimplify actual gains. Manu agrees, recalling repeated clarifications that Qwik’s real advantage is in skipping unnecessary hydration, not merely in raw SSR throughput. They revisit how frameworks can inadvertently “push load later” while artificially boosting metrics.

They also discuss naming conventions—like “resumability” or “instant frameworks”—and how certain phrases might resonate with developers. While marketing can help, the host hopes the industry avoids confusion by conflating partial solutions with truly skipping overhead. Both see a future where technical terms become more universally understood, bridging hype with reality.

### 03:23:10 - 03:29:00 – React’s Selective Hydration and Svelte’s Potential

Here, the host focuses on React’s selective hydration efforts, referencing Dan Abramov’s diagrams illustrating hydration skipping for inactive segments. He compares it to Qwik’s approach, concluding that while React can skip certain chunks, it still hydrates a large portion top-down. Manu concurs that the core difference is Qwik’s ability to “wake up” precisely where needed, never re-running the parent.

They speculate on Svelte’s future, noting Svelte has the compiler advantage that could lead to advanced partial or resumable mechanics. Manu believes that if or when Svelte invests in these ideas, it could yield major speedups. The host sees it as a natural progression for frameworks to move away from naive hydration, and Qwik’s early success may spur further competition in performance-centric design.

### 03:29:00 - 03:35:05 – Beyond Benchmarks: True UX Impact

The conversation steers to real-world user experience. The host emphasizes that shipping less JavaScript pays dividends in faster time-to-interactive, especially on mobile. He highlights how quick toggles or instant transitions can be a direct result of minimal overhead, contrasting older SPAs that block the main thread for hydration.

Manu adds that businesses measure these differences in conversions or user retention. While developer convenience sometimes overshadows performance, frameworks like Qwik can reconcile both by simplifying the code that runs in the browser. They mention how advanced streaming solutions let content appear immediately while interactive portions load in the background, a pattern the entire industry is slowly adopting.

### 03:35:05 - 03:41:10 – SSR Raw Rendering Performance

Moving into SSR speed, the host references a table of ops/sec for frameworks like Solid, Vue, and React. He admits that Qwik’s SSR is not yet tuned to beat the fastest solutions, partly due to Domino usage. Manu reiterates that switching to string concatenation could match or exceed top-tier SSR speeds. However, their priority has been correct and intuitive hydration over micro-optimizations.

The host points out that in e-commerce or large-scale multi-tenant sites, every millisecond can matter, which is why frameworks often chase raw SSR gains. Both see that eventually Qwik will incorporate those refinements. Yet the biggest user-facing improvements frequently come from skipping large code downloads, overshadowing incremental SSR gains in many scenarios.

### 03:41:10 - 03:47:00 – Future-Proofing Qwik City

In this portion, Manu describes how Qwik City can adapt to new hosting environments, especially edge networks that excel at streaming. He notes that each major provider has its quirks, and part of Qwik’s roadmap is smoothing out friction for developers. With streaming and partial hydration, the synergy of Qwik on edge platforms could lead to globally distributed apps with near-instant loads.

They also mention the tension between offering advanced features and preserving minimal complexity. While Qwik City’s file-based approach suits broad use cases, they remain cautious about layering on too many abstractions. The host sees a bright horizon if they maintain that lean ethos, predicting an influx of experimentation as more devs hear about Qwik’s unique capabilities.

### 03:47:00 - 03:53:05 – Wrapping Up Qwik City Discussion

Now the conversation winds down. The host thanks Manu for the thorough explanation of Qwik City’s underpinnings and code examples. They reflect on the practical steps needed—like refining docs—for Qwik City to reach a stable beta. Manu reiterates how their community-driven approach fosters continuous improvement, anticipating a future where Qwik becomes a mainstream choice.

Before leaving, they remind listeners about Qwik’s GitHub and Discord, encouraging others to give feedback and propose features. This conclusive moment signifies that while the framework is advanced, it remains open to collaboration, testing, and iteration. With excitement high, they begin to pivot away from the Qwik focus to the final portion of the stream.

### 03:53:05 - 03:59:15 – Shifting Gears to Broader JavaScript Trends

As the Qwik segment concludes, the host reorients to his “This Week in JavaScript” spotlight, an informal wrap-up where he covers recent library releases and trending discussions on social media. He mentions talk of performance tactics in React, Preact’s upcoming improvements, and smaller libraries exploring new reactivity APIs. Manu occasionally comments on how these developments align with Qwik’s future, but primarily the host leads a more general JavaScript conversation.

They note that bundlers like Vite or tools like esbuild also see rapid innovation, making it simpler for frameworks to provide advanced HMR or code splitting. This synergy of bundler improvements and next-generation hydration strategies is a continuing theme. The segment sets the stage for an ongoing evolution, with Qwik City’s momentum just one example of larger trends.

### 03:59:15 - 04:05:10 – React vs. Partial Hydration Debate

During this block, the host references a Twitter thread involving Ryan Florence of Remix, who advocated deferring hydration for better Lighthouse scores. He criticizes how pushing code until after the metric is recorded can be misleading, even though it yields green performance numbers. They muse that frameworks might chase illusions of speed rather than truly reducing real user overhead.

Manu acknowledges that Qwik also defers code, but clarifies it does so primarily to skip running it entirely if not used, rather than just to game metrics. The host affirms that partial or resumable solutions remain more honest ways to cut payloads. They see the shifting narrative around hydration hacks as a sign that the ecosystem at large is reevaluating best practices.

### 04:05:10 - 04:11:00 – Progressive Enhancement and Real Interactivity

Here, the pair briefly revisits progressive enhancement, reminding listeners that Qwik’s zero-JS approach essentially defaults to an enhanced MPA. Yet they stress that if the user quickly interacts, Qwik can fetch the relevant event handler. The host warns that for truly dynamic apps, progressive enhancement alone might not suffice for advanced features.

They contrast old-school server solutions with modern frameworks that unify code. Manu sees the combination of progressive enhancement and partial hydration as powerful, letting pages remain functional without JavaScript while still delivering robust experiences. This final note reaffirms Qwik’s pragmatic stance: bridging tradition and innovation for real-world applications.

### 04:11:00 - 04:17:05 – Reflecting on Routing and Streaming Support

As questions from chat come in, the host highlights that routing is a principal challenge for large apps. Qwik City’s flexible approach might gain traction among teams wanting SSR-first solutions, especially if server streaming is fully supported. Manu shares that the momentum around streaming has forced hosting platforms to upgrade. They predict that React’s push for streaming SSR will encourage more providers to support it, benefiting frameworks like Qwik.

They also note that a truly robust streaming story includes not just partial HTML but potential incremental data fetches that unify with the hydration model. While Qwik’s architecture already assumes minimal client code, advanced use cases can merge server-generated fragments and reactivity for near-seamless transitions. Excitement abounds for what the next year might bring.

### 04:17:05 - 04:23:10 – Final Anecdotes and Tooling Insights

Approaching the last minutes of the transcript, the host touches on tooling developments, from Rust-based compilers to specialized ESLint plugins for Qwik. Manu highlights that community members have been pivotal in creating VS Code extensions and debugging utilities. By handing off certain tasks to open-source contributors, the core team can focus on deeper framework logic.

The host returns to the example of Qwik’s optimizer, praising the project’s boldness in bridging Rust with JavaScript to achieve high-performance code splitting. This synergy underscores the key theme: seemingly small technical decisions can dramatically alter developer experience. They end the conversation by urging developers to explore Qwik City’s potential, test their apps, and share findings with the community.

### 04:23:10 - 04:25:13 – Closing Remarks and Stream Farewell

In the final moments, the host thanks viewers for tuning in and recaps the major topics: Qwik City’s routing, data loading, advanced hydration strategies, and the forward-looking plans for partial, progressive, and resumable approaches. He invites viewers to check out official Qwik resources and expresses excitement for upcoming documentation improvements that will solidify the framework’s release.

A sense of conclusion pervades as the host transitions the stream to end, echoing Manu’s gratitude for the engaged audience. He announces upcoming streams and general JavaScript news, wrapping up a marathon session that combined technical walkthroughs, philosophical discussions, and real-time Q&A. The final seconds confirm it was a fruitful exploration of Qwik City and the broader direction of modern web frameworks.