---
showLink: "https://www.youtube.com/watch?v=E3jYGTB50LE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS - The Hard Parts w/ Dan Jutan"
description: ""
publishDate: "2023-03-18"
coverImage: "https://i.ytimg.com/vi/E3jYGTB50LE/sddefault.jpg?v=6414ae11"
---

### 02:41:00 – The Philosophy Behind Internal vs. External APIs

In this chapter, they discuss how Solid’s core tries to remain minimal, pushing advanced or niche functionalities into userland or libraries like solid-primitives. By partitioning stable primitives from experimental add-ons, the project sustains a lean, reliable foundation. The host draws parallels to other frameworks that might bloat the core with specialized features, leading to fragmentation. Dan asserts that letting the community explore patterns fosters healthy evolution; once stable, such patterns might become official.

They also emphasize a strong separation of concerns for readability. The simpler an API is, the easier it is for newcomers to reason about. If devs need advanced rendering or scheduling, they can reach for specialized tools. This encourages a measured adoption path: beginners start with signals and simple control flows, while experts progress to custom solutions. The talk wraps up with a reaffirmation that a strong core yields both approachability and deep extensibility, a hallmark of good open-source design.

### 02:48:00 – Revisiting Educational Approaches and Example Repositories

As they continue, the focus swings back to docs and teaching. The speakers mention that beyond official documentation, curated example repos or code sandboxes can demystify advanced patterns. They list use cases like dynamic forms, real-time dashboards, and transitions within multi-step wizards. By exploring real-world examples, developers can see how signals and Suspense unify to produce fluid user flows with minimal overhead.

They also raise the idea of building scaffolding for workshops or educational events. The host notes that step-by-step tutorials help novices progress from a simple “counter” to a fully data-driven UI, layering concurrency and SSR only after the fundamentals are secure. Dan agrees, advocating for incremental “chapters” in official docs. Summarizing, they stress that tangibly bridging each conceptual leap fosters stronger adoption. Instead of bombarding devs with every advanced feature at once, examples let them internalize the rationale behind reactivity.

### 02:55:00 – SSR Pitfalls, Edge Deployment, and Platform Constraints

Around 2 hours 55 minutes in, they share insights on deploying Solid-based apps to various cloud platforms. They mention that not all environments support streaming as effectively, referencing AWS serverless constraints or older Node versions. The host explains that while streaming SSR can drastically cut time-to-first-byte, developers must confirm the hosting service’s compatibility. This leads to a brief aside about Netlify and Vercel, noting partial support for streaming or advanced request handling.

Moreover, they bring up concurrency issues that can crop up if the platform suspends or re-queues requests unexpectedly. Even though Solid’s reactivity is robust, external timers or ephemeral file storage can break illusions of continuity. The pair recommends that teams thoroughly test SSR flows in staging environments, verifying fallback behavior and error boundaries under load. Their overall tone remains optimistic: the combination of reactivity plus modern hosting can yield blazing-fast, interactive sites, so long as each layer is configured properly.

### 03:02:00 – Contrast with React Server Components and Future Trends

In this segment, they compare Solid’s SSR approach to React Server Components (RSCs). While RSCs aim to shift logic to the server, Solid employs Suspense and resources to accomplish parallel data fetching with minimal overhead. The hosts note that React’s partial hydration might eventually overlap more with streaming concepts, but the exact mechanics differ. Dan acknowledges that RSCs remain an evolving design, with final patterns still in flux. Meanwhile, Solid’s streaming is already shipping and widely tested.

They explore how universal reactivity might exist across server boundaries in the future, referencing experiments like Quick or fine-grained solutions in Svelte. They foresee an industry shift toward “transitional” or partial-hydration approaches, though each framework will implement it differently. The discussion ends on an upbeat note about open-source ecosystems cross-pollinating ideas, hinting that both React and Solid users can benefit from shared insights in concurrency and server-side code extraction.

### 03:09:00 – Real-World Tactics for Avoiding Jank and Tearing

Moving into practical performance guidelines, they stress that devs should carefully isolate updates that are truly critical from those that can wait. Using transitions or effect timing ensures that interactive tasks—like typing—never block on slow data. The host points out that in React, devs sometimes rely on useEffect cleanups or manual state toggles. In Solid, signals streamline such logic, letting transitions handle concurrency and Suspense handle partial data.

They also discuss “tearing,” elaborating on how sometimes letting partial states mismatch for a short interval is acceptable if it yields a more fluid user experience. They give a user-typing example: immediate visual feedback might override the need for accurate search results. The conversation reveals the subtlety behind performance trade-offs. The fundamental lesson is that devs should remain mindful of user experience, adopting concurrency or fallback approaches that reflect real interactions rather than theoretical purity.

### 03:16:00 – Future of Solid’s Core and Potential 2.0 Features

At about three hours sixteen minutes, they touch on possible future enhancements for Solid 2.0. The host hints at reevaluating certain APIs—like createMutable or advanced proxy behaviors—to ensure they align with new best practices. They want to refine the internal scheduling model, possibly adding better concurrency primitives or integrating more direct transitions. However, backward compatibility remains a priority, so any 2.0 changes will be incremental.

They also mention ongoing efforts to unify advanced concepts like partial compilation or code extraction, gleaning ideas from Quick or React’s RSC experiments. Dan notes that while some patterns remain experimental, the core aim is simpler, faster reactivity rather than complicated magic. The presenters express excitement about harnessing broader community feedback to refine Solid’s developer experience. Even if some features live in separate libraries, the forward momentum suggests an ever-improving ecosystem.

### 03:23:00 – Dealing with Complexity in Big Applications

During this timeframe, they address how large-scale teams handle sprawling front-ends where hundreds of signals might exist. Dan shares that well-structured patterns—like domain-based contexts or store slices—prevent everything from merging into one tangled global. The host recounts examples of apps with real-time data from multiple sources, noting that each domain can manage its signals, hooking them up to shared UI sections via clearly defined boundaries.

They note that debugging tools to visualize the signal graph can help. If a developer sees a chain of events that triggers unwanted reactivity, they can break it down or insert untrack. The conversation emphasizes that, while powerful, fine-grained reactivity does require mindful organization. However, in their experience, once teams adopt a consistent layering approach, they rarely revert to heavier re-renders. The theme is that complexity can be tamed by thoughtful structures without losing performance.

### 03:30:00 – Differences with Svelte and Vue, and Limitations of Virtual DOM

The conversation segues into comparing Solid to Svelte and Vue. They note that Svelte compiles reactivity but has distinct limitations around partial updates, while Vue has a reactivity system built around proxies, though it approaches templating differently. The host elaborates that Solid’s approach avoids a dedicated virtual DOM. Instead, it directly maps changes to the real DOM, which often proves faster for interactive scenarios.

Dan concedes that block-level DOM usage can be efficient in certain cases, referencing frameworks like million.js or quick optimizations. Nonetheless, Solid invests in direct node manipulation for day-to-day patterns, which remains robust for large-scale apps. They briefly mention how reactivity, when compiled, might yield neat performance wins, but can introduce complexities around dynamic shape changes. Overall, they find that each framework emphasizes trade-offs around compilation vs. runtime and universal vs. specialized usage.

### 03:37:00 – The Evolving Role of Benchmarks and Real Metrics

In this portion, benchmarks such as the JS Framework Benchmark come into focus. The speakers note that many libraries have optimized to the point that small differences in synthetic tests may no longer reflect real-world usage. Some rely on manual DOM updates, bypassing typical patterns. While praising the benchmark for consistency, they stress that devs should weigh actual app demands over microseconds. They encourage investigating performance with real data loads, concurrency, and SSR streaming to see genuine differences.

Dan remarks that early in Solid’s life, strong benchmark results helped attract attention, but it’s now recognized for deep reactivity patterns that facilitate better developer experiences. They advocate for complementary metrics like memory usage, load times on mid-range devices, or how well partial hydration scales. In short, they caution that raw numbers no longer hold the final say. With a saturated ecosystem, practical code demos and performance logs from realistic contexts matter more than narrowly tuned tasks.

### 03:44:00 – Mentoring, Knowledge Sharing, and Community Strength

Here, they touch on the open-source nature of Solid and how new contributors can get started. Dan encourages folks to help with documentation, triage issues, or refine library code in ancillary projects like solid-primitives or ecosystem tooling. They share personal experiences guiding novices to tackle small issues, later moving to more challenging pull requests. The synergy between maintainers and fresh eyes often reveals overlooked doc gaps or API inconsistencies.

They further emphasize the supportive community environment, where questions are welcomed in Discord or GitHub. The host points out that some advanced topics—like streaming SSR or concurrency—can be intimidating, but raising clarity questions fosters new docs or helper utilities. Both speakers reaffirm that a project’s health depends on more than star counts; it thrives when people give back. The overarching message: novices and veterans alike can shape Solid’s evolution through active involvement.

### 03:51:00 – Reflecting on DX, Tools, and the Next Front-End Leap

As the session continues, they discuss how developer experience (DX) has become a prime driver in framework design. Developer tooling has evolved from simple bundlers to advanced plugins that handle code splitting, partial hydration, and SSR seamlessly. They mention that Solid, React, and others rely on clever transformations or layering to deliver these features without imposing heavy manual setups.

They also preview the next leaps, referencing potential synergy with AI-based coding tools or automated doc generation. The host muses about a future where frameworks plug seamlessly into IDEs, offering real-time reactivity debugging. While some of these ideas remain speculative, they assert that focusing on DX fosters consistent improvements. By compressing complexity behind intuitive abstractions, frameworks empower novices to build advanced apps quickly. Solid’s path aligns strongly with that principle, balancing a small core with powerful expansions.

### 03:58:00 – Late Questions on Caching, Deployment, and Transition Edge Cases

Nearing four hours, the chat addresses leftover questions from viewers. Topics include how to handle caching across reloads, whether transitional states preserve the entire UI in offline scenarios, and best practices for deploying advanced SSR on ephemeral environments. They reiterate that no single tool solves all scenarios, but Solid’s resource model can integrate with service workers or local storage for offline caching. Meanwhile, transitions are ephemeral by nature, so full offline usage may demand specialized strategies.

They also touch on Node versions, explaining that older environments might hamper concurrency or streaming. They encourage developers to watch for upcoming solid-start releases that refine edge compatibility. Ultimately, the theme is that while the library covers 80-90% of typical use cases, the final mile often requires careful platform-specific handling. The speakers remain confident that stable patterns are emerging, and the official docs and community guides will keep pace.

### 04:05:00 – Revisiting Remixes, Astro, and the Multi-Framework Landscape

At this juncture, they reflect on how frameworks like Astro differ from full client-side experiences. Astro’s MPA-like design focuses on islands of interactivity, whereas Solid Start is fully reactive on each route. They mention that React, Next.js, and Remix are pushing server components to unify front and back ends. Each approach has distinct advantages: Astro’s static optimizations can be simpler for content sites, but advanced interactions might require partial hydration strategies.

They reference that official React docs no longer recommend create-react-app, steering new devs toward next-level frameworks. The host remarks that this trend underscores the complexity of modern web dev—teams expect routing, data fetching, SSR, and transitions baked in. Solid aims to provide these robustly without sacrificing performance. Still, they believe there’s room for multiple approaches, especially as competition fosters cross-pollination of good ideas.

### 04:12:00 – Transitioning to Q&A on Edge Cases and Overlooked Features

As the conversation enters its final stretch, viewer questions highlight edge features or potential pitfalls. They debate using createDeferred or on to handle specialized timing or partial subscription logic. The speakers emphasize that while such APIs exist, novices should typically rely on signals, memos, and effects for daily tasks. The advanced constructs mostly solve library-level issues or exotic workflows. They welcome contributions that refine these corners, hoping the community drives consistent documentation.

They also mention the small but potent set of concurrency tools in Solid, reaffirming that more isn’t always better. A refined, well-understood handful can address most concurrency or asynchrony needs. People who want to push further can test experimental branches or propose PRs. The message remains that clarity and minimalism guide Solid’s design, so any expansions must remain rooted in developer-centered rationale.

### 04:19:00 – Summarizing Teaching Priorities and Best Practices

Having covered extensive ground, Dan reiterates a recommended teaching sequence. Start with basic signals in a simple counter, add a second signal and combine them with a derived store, introduce effect for side effects, memo for computed values, then incorporate show or for for dynamic rendering. Only after those fundamentals should devs tackle createResource for async data, leading into Suspense and eventually transitions or SSR.

They affirm that each step fosters competence without overwhelming. By the time developers reach advanced concurrency, they already grasp signals well enough to see how forking reactivity and streaming fit in. This layering approach, tested in the new documentation, cements knowledge. They close this portion with a nod to the synergy between code examples, step-based tutorials, and consistent references, ensuring no single advanced feature blindsides novices who are still mastering the basics.

### 04:26:00 – Comparisons to React Beta Docs and Broader Community Efforts

In this part, they mention that React’s new docs have also embraced a carefully structured approach, focusing on conceptual clarity over API enumerations. Dan praises the diagrams and thorough coverage that capture multiple use cases, though he concedes some differences in philosophy around hooking state to component definitions. Regardless, they see parallels in how any major project must address incremental learning. They add that smaller frameworks like Svelte or Preact also strive to refine docs, albeit with fewer resources.

They highlight that these communal efforts reflect an industry-wide move to reduce friction for new developers. While advanced concurrency or SSR streaming can be mesmerizing for experts, novice resources remain critical. The host mentions that well-documented fundamentals benefit the entire ecosystem, forging a path for cross-framework understanding. They conclude that while frameworks compete, they also converge on shared best practices, making the web stronger overall.

### 04:33:00 – Addressing Gaps in Documentation and Volunteer Contributions

They briefly return to the call for assistance in open-source docs. Dan explains that writing reference pages is only one dimension; user guides, tutorials, and conceptual narratives are equally vital. Volunteers who find existing docs confusing can often fix or expand them, channeling real-time feedback into clearer text. The host underscores that docs are often undervalued but require continuous upkeep, particularly when the API surface evolves or new SSR features roll out.

They also mention the importance of multilingual docs. For instance, offering Spanish or Japanese translations can broaden reach significantly. The same goes for specialized guides aimed at, say, back-end devs crossing over to front-end. In essence, community doc efforts can fill gaps official maintainers might not notice. The segment ends by reiterating that robust docs are as pivotal as an optimized runtime for sustaining adoption, fostering a welcoming environment for novices and experts alike.

### 04:40:00 – Wrapping Up SSR Talk: The Big Takeaways

As the SSR topic nears conclusion, the speakers distill key lessons: Suspense orchestrates data loading, partial or streaming SSR accelerates time-to-first-byte, and transitions unify client interactivity with server data resolution. Fine-grained reactivity means minimal overhead, even in large apps, if carefully structured. They note that while advanced, these patterns become second nature once devs comprehend signals as living, trackable data references.

They again contrast old approaches that required double rendering or complicated data-lifecycle management. Solid’s design flows seamlessly from local signals to networked data, bridging server boundaries with consistent patterns. This integrated experience is what they believe sets Solid apart, even though React and others push toward similar goals. Their final note is that SSR’s real power emerges when it’s not an afterthought but a first-class aspect of the architecture.

### 04:47:00 – Practical Demo Thoughts and Transition Examples

At this point, the hosts envision a future tutorial or workshop that demonstrates transitions in real time. They propose building a small multi-tab interface or e-commerce cart. The user can keep editing cart items, while the new tab data loads discreetly. This scenario captures transitions, concurrency, and resource-based logic in a single coherent example. Dan underscores that visuals can clarify concurrency far better than reading code alone.

They also mention that some smaller demos exist in code playgrounds, but a more polished, stepwise example might come in an official tutorial. If watchers see the old tab remain fully interactive, then watch the new tab “snap” into place with no janky intermediate states, they grasp the essence of concurrency. The pair encourages advanced users to prototype such demos, bridging the final gap from conceptual knowledge to real-world adoption of transitions.

### 04:54:00 – Community Questions: Version Compatibility and Ecosystem Tools

Listeners again raise concerns about version mismatches—like older Node or browsers lacking proxy support. The host assures them that, these days, nearly all mainstream browsers and Node versions handle proxies. He acknowledges that some embedded devices or specialized builds remain on older engines, so devs may need polyfills or fallback strategies. However, the future of reactivity is aligned with modern JavaScript features.

They also talk about ecosystem expansions, from official router enhancements to improved TypeScript types. Small library authors often join the “solid-primitives” initiative to share helpful building blocks. This synergy fosters quicker iteration across tools like devtools, test frameworks, or integration with design libraries. They maintain that as Solid continues to attract contributors, broader coverage of corner cases and platform nuances becomes inevitable, ensuring a well-rounded developer experience.

### 05:01:00 – Revisiting React Comparisons and Learning Curve Observations

Returning to cross-framework perspectives, they highlight that React and Solid share many conceptual underpinnings, but differ in rendering flow and concurrency. A React developer might find signals reminiscent of useState, though signals are more direct. Likewise, context feels similar but avoids some pitfalls. They emphasize that advanced patterns like transitions or streaming exist in both ecosystems, but the user experience can differ drastically due to fundamentals.

They also observe that while React’s community is massive, Solid’s smaller size can be beneficial: fewer competing patterns, a direct line to maintainers, and less legacy baggage. Nonetheless, big ecosystem perks—like wide library coverage—still favor React. The presenters remain pragmatic, suggesting that each dev weigh trade-offs. If a team seeks minimal overhead and advanced reactivity from day one, Solid stands out; if they prefer well-known solutions and vast existing libraries, React is a safe bet.

### 05:08:00 – Final Thoughts on Performance Benchmarks and Real Apps

At around five hours eight minutes, they circle back to performance, referencing that as new frameworks appear, each tries to outdo others in micro-benchmarks. The host concedes these tests can be informative for pinpointing overhead but do not necessarily translate to real-world benefits. Dan emphasizes that architectural decisions, such as streaming vs. static approaches or carefully placed Suspense boundaries, matter more than raw speed in a vacuum.

They elaborate that typical apps involve a mixture of data fetching, user input, and partial updates. If an approach handles concurrency elegantly and avoids blocking UI, it typically feels “fast enough.” Overfocusing on table row operations might overshadow genuine concerns like slow network requests or large asset bundles. In short, they champion measuring real user experiences in context, while still acknowledging that speed does matter, especially if a solution systematically eliminates unnecessary computations.

### 05:15:00 – Encouraging Contributions and Discussing Future Content

As the end looms, Dan again highlights how to get involved, from coding PRs to drafting tutorials. The host thanks Dan for his in-depth explanations, noting that novices and advanced devs alike should find the session valuable. They mention the possibility of future streams or recorded lessons focusing specifically on transitions, concurrency demos, or serverless deployments. Such targeted topics could break down these advanced concepts further.

They also invite listeners to check out new documentation sections in progress, disclaiming that certain pages remain incomplete. The pair highlights open issues in repositories for those itching to contribute code or clarifications. Looking forward, they hope to see workshop sessions at upcoming conferences or meetups. The overarching message is that community is essential: Solid’s potential is realized through engaged developers, shared knowledge, and friendly collaboration.

### 05:22:00 – Final Questions, Chat Messages, and Wrapping Up

In the final minutes, they field stray inquiries from chat, covering minor topics like debugging transitions, example-based learning resources, or recommended bundler configs. The host answers a question about TypeScript integration, reassuring that 1.7 or future releases address some type anomalies. Dan touches on improvements to devtools that highlight signal usage or show suspense boundaries visually.

They reflect on the broad scope of the conversation: starting from signals, moving through advanced reactivity, SSR, transitions, and community. They express gratitude to the audience for staying attentive over such a long session. A sense of closure emerges, with both host and guest confident that the knowledge shared can guide devs through Solid’s entire pipeline. They sign off with thanks, inviting everyone to test, share feedback, and enjoy a more reactive, seamless front-end world.

### 05:29:00 – Post-Show Chat and Personal Anecdotes

Just before concluding, there’s a brief informal segment where the host and Dan indulge in lighter banter. They reference upcoming travel, possible meetups, and celebrate community milestones. A fleeting mention of whiskey from a previous podcast underscores the laid-back camaraderie among web dev enthusiasts. The conversation underscores that behind every advanced discussion lies a friendly ecosystem where devs swap tips, jokes, and personal stories.

Despite the casual nature of this wrap-up, they don’t stray too far from dev chatter, offering playful hints at future collaborations. They reaffirm their commitment to improving the developer experience within Solid’s ecosystem, mentioning potential new guides and library expansions. Though short, this personal moment helps humanize the experts behind the code, reminding listeners that software communities thrive on real connections as much as technical brilliance.

### 05:36:00 – Farewells and Plans for Next Streams

Around five hours 36 minutes in, they officially close the session. Dan thanks the audience for their excellent engagement, calling out recurring names in chat. The host reiterates that they may do another deep session soon, possibly focusing on code examples or workshop material. They promise to keep watchers updated on release timelines, especially for upcoming Solid versions and the doc expansions Dan teased.

They exchange final words about the synergy between user questions and future content, praising how spontaneous inquiries often surface the best topics. With a final wave to the camera and gratitude for the supportive crowd, they confirm the stream is ending. This reaffirms the open-door policy, where participants can keep the conversation alive in community channels. The last remarks underscore that the best is yet to come for Solid and its reactivity-driven approach.

### 05:41:54 – End of Stream

The final timestamp marks the end of the broadcast, featuring a short silence and occasional background sound as the stream disconnects. No further conversation or content is provided beyond this point. By this stage, viewers have witnessed a sweeping, detailed exploration of SolidJS and its advanced patterns, complete with comparisons to other frameworks and insights into server-side rendering, streaming, and concurrency. The journey concludes with gratitude, reflection, and anticipation for what the community will build next.