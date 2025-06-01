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

### 03:05:00 - Potential API Changes in Solid: Strictness and Batching

Around this juncture, the speaker begins discussing possible future directions for Solid itself. They contemplate stricter defaults, such as always deferring signal writes until after the current event loop—similar to a microtask queue. This would auto-batch signal updates and reduce redundant calculations. The host acknowledges that any such change must be introduced carefully to avoid surprising existing users.

They also describe tidying up the store API, possibly removing older path-based methods in favor of an Immer-like produce pattern. This streamlined approach would unify how developers mutate store data. A recurring theme is that Solid aims to remain minimal and ergonomic, but the ecosystem is pushing toward a more “opt-in strictness” to catch mistakes early. The host sees these potential changes as signs that Solid is maturing and responding to dev preferences for guided constraints and clarity.

### 03:10:00 - Deprecations and Versioning Plans

Continuing the Solid roadmap, the speaker touches on semantic versioning concerns. They ponder whether changes like auto-batching or new store APIs should trigger a 2.0 release rather than 1.7, given some TypeScript breakage. However, they note that truly large reactivity overhauls might wait for a 3.0, leaving 2.0 to focus on smaller but meaningful adjustments. The challenge lies in balancing community expectations: break too much at once, and it alienates users; break too little, and old inconsistencies linger.

The host leans toward a transitional approach, possibly introducing new features in 2.0 but marking older APIs as deprecated rather than removed. Code mods or separate compatibility packages could assist with migration. By the end of this chapter, it’s clear the speaker aims to keep the path smooth for existing Solid users while also embracing a cleaner, more consistent future state. The conversation showcases the intricacies of maintaining a framework that must evolve rapidly yet remain reliable in production.

### 03:15:00 - Reactivity Over Time: Past, Present, Future

Around three hours and 15 minutes in, the speaker takes a moment to reflect on how far reactivity has come. From the early knockout days of partial success and partial chaos, through MobX and Vue’s incremental improvements, to Solid’s and Angular’s current signals exploration, reactive programming has steadily refined. The host sees it as a triumphant return to a concept that React once sidestepped, now re-emerging with new rigor.

They emphasize that reactivity is no longer a hack or a purely fringe concept. It underpins major new frameworks and sophisticated features. Each iteration builds on lessons learned, focusing on unidirectional flow, memory safety, and minimized overhead. Looking ahead, the speaker predicts that signals or signals-like technology will continue growing in acceptance, even if masked by compilers or overshadowed by bigger brand names. The evolution is ongoing, and the community’s curiosity remains a driving force.

### 03:20:00 - Addressing Chat Questions and Code Examples

In this block, the host field questions from chat, often pulling up live code examples to clarify how signals handle updates or batching. Some inquiries explore niche situations like parallel data fetching or reactivity across multiple browser windows. The speaker repeats key points: signals themselves remain synchronous, but bridging them to asynchronous sources or cross-tab sync is a separate concern, best handled by application-level logic or specialized libraries.

The conversation cements that signals aren’t an out-of-the-box solution for everything—especially if developers need advanced caching or multi-user collaboration. Instead, signals form a flexible core, which other libraries can extend. Each live example demonstrates common pitfalls—like inadvertently reading reactive data outside the intended scope—and the best practices that keep signals predictable. As always, proper scoping and disposal remain central to preventing memory or performance issues.

### 03:25:00 - The Question of Strict Mode for Components

Here, the speaker revisits a radical idea: disallowing top-level reactive reads inside a component unless explicitly untracked. The reasoning is to prevent confusion for new users who mistakenly destructure signals. The host explains that such a rule could appear as a runtime error in dev mode, forcing devs to either place signals inside JSX or consciously call an “untrack” function. This measure would reduce accidental partial reactivity.

Community reaction, however, can be mixed—some find the restriction too heavy-handed, while others appreciate the strict guardrails. The host concedes that introducing it would likely require a major version bump. The broader theme is the push to unify best practices with code constraints, so developers cannot easily fall into bad habits. Yet, adopting strict runtime checks must also respect existing code that relies on less restrictive patterns.

### 03:30:00 - Weighing Warnings vs. Errors

The chat probes whether misguided top-level reads should generate warnings rather than hard errors. The speaker weighs both sides, acknowledging that erroring out can be jarring but is more effective at halting unwanted patterns. Warnings might be ignored, but then code runs in unpredictable states. On the other hand, forcing an error might break older, valid usage patterns if not carefully handled.

Ultimately, the speaker envisions a possible dev-mode toggle or a “strict mode” akin to what React uses, letting teams opt in to these constraints. Over time, if the approach proves beneficial, it might become the default in new projects. This iterative strategy echoes how frameworks often adopt major changes: first as optional best practices, then as encouraged or standard defaults. The debate highlights how shaping a framework’s developer experience intersects with backward compatibility concerns.

### 03:35:00 - The Role of Code Mods

With potential Solid API updates looming, the host discusses how code mods help automate migration. A well-designed code mod can replace deprecated store methods with new produce-based mutations or transform top-level reads into safe usage. This approach spares developers from tedious manual refactoring. The speaker notes that React’s transitions often relied on code mods for deprecations, and that pattern could work for Solid as well.

Still, code mods aren’t infallible. Some advanced or unconventional patterns may slip through. Documentation and robust test coverage become crucial to ensure a smooth upgrade path. By combining code mods with comprehensive guides and deprecation warnings, framework authors can introduce major improvements without leaving large segments of their user base behind. Listeners hear how the speaker hopes to refine Solid in a way that carefully balances new features with pragmatic support for existing adopters.

### 03:40:00 - Envisioning Solid 2.0 vs. 3.0

Here, the speaker lays out a tentative plan: Solid 2.0 might focus on incremental, user-facing changes such as stricter TypeScript rules, updated store APIs, and microtask-based batching. Then, a future 3.0 could implement deeper reactivity rewrites that further optimize the system. This two-step approach avoids overwhelming the community, letting them adapt in stages rather than confronting a massive overhaul at once.

The host clarifies that large-scale reactivity shifts—akin to an internal engine rebuild—carry risks of subtle breakage. If rushed, they could introduce regressions or degrade performance if not carefully tuned. Spreading major improvements across multiple releases allows thorough vetting. By pacing these milestones, Solid can remain a stable, production-trusted choice while still evolving toward a bold vision of minimal overhead signals.

### 03:45:00 - The Future of Linting in Solid

Addressing the chat’s curiosity, the host outlines how integrated lint rules might look for Solid specifically. One possibility is stricter checks on how signals, stores, or resources are accessed, instantly flagging misuse. Another avenue could be auto-fix suggestions, turning raw destructures into function calls or adding untrack calls. This would parallel how React’s ESLint plugin warns about missing hook dependencies.

Some developers relish this level of instant feedback, while others may find it distracting or overbearing. The conversation reaffirms that the broader community has shifted toward more acceptance of rigid tooling. The speaker suggests that a well-configured lint plugin can assist new users, bridging the gap until they fully internalize signals. Eventually, advanced devs may disable certain rules, but the framework can supply guardrails by default.

### 03:50:00 - Revisiting Large Team Use Cases

The speaker circles back to the challenge of coordinating dozens or hundreds of engineers around a single codebase. In such contexts, strong lint rules and consistent patterns can prevent “Wild West” reactivity. The host brings up a scenario where multiple developers might inadvertently trigger cross-component updates if signals remain too loosely structured. Ensuring robust guidelines and enforced best practices keeps large apps maintainable.

By showing that Angular, historically popular in large enterprises, is considering signals, the host believes it validates the idea that reactivity can be made safe and predictable at scale. If standard lint rules or documented patterns in Angular’s next version champion signals, it could guide thousands of devs who once avoided granular reactivity. This potential mainstream acceptance may resolve persistent doubts about signals not scaling beyond hobby projects.

### 03:55:00 - Async Transactions and Rollbacks

Around the 3:55 mark, a viewer question prompts the speaker to explore how certain libraries manage “transactions” for batched updates or error rollbacks. They mention that some systems allow grouping multiple state changes to either commit or revert as a unit, beneficial for complex form flows or multi-step logic. Solid historically hasn’t focused on that pattern but might consider partial alignment via microtask batching or transitions.

The conversation reveals that advanced transaction semantics can reduce inconsistent states when updating multiple signals simultaneously. If an error is thrown mid-transaction, the system reverts to a stable prior state. While not universal, such features can solve real-world problems in enterprise contexts. The host remains cautious, noting that complexity can climb if asynchronous logic intermixes with transaction commits. They see potential synergy with concurrency-based approaches that phase in changes for better user experience.

### 04:00:00 - Q&A on WebSockets, Storage, and SSR

Reaching the four-hour mark, the speaker fields a series of shorter questions on bridging signals with real-time data via WebSockets or storing data in local/session storage. They remind viewers that signals themselves are synchronous and local, so connecting them to asynchronous flows requires an external driver. The same logic extends to SSR; signals help define hydration boundaries, but server orchestration is handled by the meta framework or custom code.

They stress that signals’ responsibility ends at granular, internal state changes, leaving cross-network synchronization as an application-level concern. Tools like Astro, Next.js, or Solid Start each have distinct SSR approaches that can integrate with signals. The speaker underscores that these architectural patterns remain consistent: the framework ensures minimal updates on the client while leaving higher-level data fetch or real-time logic to specialized solutions.

### 04:05:00 - Reflecting on Community Feedback

As the session winds on, the host reflects on how community input shapes the next steps for signals adoption. From big Twitter threads to small GitHub issues, developers consistently request clearer error messages, typed store APIs, and simpler patterns for advanced scenarios. The speaker encourages more contributions to code mods, ESLint rules, and dev tools, seeing them as integral to bridging knowledge gaps.

They also mention that while some devs resist additional constraints, others find reassurance in frameworks that “won’t let them fail.” This diversity of preference prompts frameworks to offer toggles or dual modes—one for a more permissive experience, another for strict guardrails. By balancing these extremes, the speaker hopes signals can feel equally comfortable in small personal projects and large-scale corporate codebases, responding to demands for both freedom and safety nets.

### 04:10:00 - The Impact of AI on Framework Development

Here, the host briefly touches on how AI could factor into future frameworks, referencing Dominic Gannaway’s notion of a self-improving compiler. The speaker imagines an AI-based system that analyzes code patterns, rewriting or annotating for optimal reactivity. This might lead to minimal manual configuration, with the AI discovering best strategies for each scenario—be it partial hydration or advanced concurrency.

Though speculative, the host sees such developments as a logical extension of the automation trend in software. If an AI can analyze usage in production and continuously refine the generated code, frameworks might approach theoretical efficiency. Developers could spend more time on product features, letting the AI handle micro-optimizations or updated syntaxes. Still, the speaker tempers excitement with realism: the complexities of reactivity mean thorough human oversight remains crucial.

### 04:15:00 - Summarizing the React vs. Signals Debate

At this juncture, the conversation synthesizes the main arguments around React’s current approach versus signals. React relies on consistent re-renders for a predictable, uniform data flow, helped by concurrency. Signals target smaller updates, aiming for clarity and performance at the cost of additional concepts. Both sides emphasize unidirectional flow, but they differ on whether developer ergonomics are better served by re-render everything or update only specific pieces.

The host reiterates that this debate isn’t simply about speed; it involves maintainability, mental models, large-scale viability, and ecosystem momentum. Signals have proven robust enough in production frameworks like Vue and potentially Angular, suggesting the industry is shifting. Meanwhile, React’s massive market share and ecosystem mean it can evolve at its own pace, possibly folding signals-like techniques into a future major release. Ultimately, each path addresses overlapping but distinct priorities.

### 04:20:00 - Personal Reflections and Developer Style

Around four hours and 20 minutes in, the speaker shares their own coding style and preferences, revealing they often enjoy minimal guardrails and prefer focusing on raw logic. They find heavy linting or forced patterns intrusive. However, they acknowledge that many developers thrive on immediate feedback from their editor or runtime. This leads to an introspective moment, contrasting personal preference with the broader community’s desire for robust tooling.

The host concludes that framework authors must think beyond their individual habits. While personal enjoyment matters, frameworks serve diverse teams who may want strictness to avoid pitfalls. This reflection ties back to the impetus for more prescriptive signals usage, safer store APIs, and potential dev-mode constraints. Even if the speaker remains cautious about overshadowing creativity with rules, they concede that consistent guardrails can unlock confidence for many developers.

### 04:25:00 - Planning Future Streams and Collaborations

Here, the host notes possible future guests and collaborative talks, mentioning that continued conversation with Angular or React core members might yield fresh insights. They recall a past impromptu Twitter Space with Dan Abramov and how these open forums shed light on real-time ecosystem shifts. Additional sessions might focus on in-depth code examples, bridging frameworks, or new compiler prototypes.

The speaker highlights the value of these public discussions: they help unify the community’s understanding and defuse misunderstandings. By hearing directly from framework authors, devs can grasp nuanced design rationales behind reactivity or concurrency. The host encourages watchers to stay tuned for upcoming events, as the swirling topics around signals remain far from settled. Collaboration, they suggest, fosters mutual respect across historically rival communities, potentially driving innovation further.

### 04:30:00 - The Ongoing Quest for Perfect Syntax

At this mark, the talk explores how frameworks might refine syntax to align with signals. Whether it’s “$store,” “destiny operator,” or “use:” prefixes, each approach tries to improve clarity. However, the host admits every syntax choice brings trade-offs, from scaring newcomers to limiting advanced patterns. They reference Svelte’s success with `$:` but also how it sometimes puzzles developers transitioning from React.

Concluding that no universal “best” syntax exists, the speaker imagines a future where frameworks let developers pick from multiple reactive styles, all compiling to the same underlying signals. Some might prefer function calls; others might prefer decorators or macros. The deciding factor might simply be personal taste or project convention. The conversation underscores that language-level reactivity, if it ever appears, would drastically unify these efforts—though not without intense debate over how it looks in actual code.

### 04:35:00 - Solid Start Roadmap and Ecosystem Collaboration

Attention shifts to Solid Start’s roadmap: improving server functions, exploring new SSR strategies, and refining developer experience. The host outlines the synergy with emerging tools like Bling, an initiative that extracts server operations into simpler patterns. The aim is to streamline backend connectivity, bridging the gap between server logic and signal-driven frontends. Collaboration with other framework authors could standardize these approaches.

By forging a stable set of patterns for data fetching, authentication, and deployment, Solid Start hopes to match Next.js or Remix in developer-friendly features. The speaker also references ongoing improvements to routing, types, and new guidelines for building robust full-stack apps. This segment emphasizes that signals alone don’t solve every problem: frameworks must still handle routing, SSR, bundling, and other practical concerns. Nonetheless, well-integrated reactivity can enhance these layers with finer control.

### 04:40:00 - Code Monument, Subs, and Community Thanks

Around four hours and 40 minutes, the host acknowledges community contributions: user subscriptions, supportive chat messages, and shared resources. They highlight a few usernames who have gifted subs or built interesting side projects. This moment underscores the collective nature of open-source frameworks, where many participants pitch in to test features, file bug reports, or write documentation.

While briefly thanking individuals, the speaker also draws attention to the overall positivity in chat. They credit the community for keeping the long conversation energized. In the face of occasional negativity on other platforms, this stream’s supportive environment reaffirms why open, inclusive discussions help frameworks like Solid, Vue, or Angular evolve. The host wraps this section by encouraging more devs to join Discord or GitHub, hoping to continue the momentum.

### 04:45:00 - Revisiting “Too Many Frameworks” Criticism

In these minutes, the speaker refutes the argument that the JavaScript ecosystem suffers from too many frameworks. They maintain that diversity fosters experimentation, leading to breakthroughs in reactivity, compilation, or rendering strategies. While newcomers may feel overwhelmed, established devs can reap the benefits of specialized tools for different needs. The speaker insists that competition or cross-pollination doesn’t necessarily fragment the community; it pushes frameworks to refine.

The host observes that React, Angular, and Vue hold massive market share, making it unlikely that brand-new frameworks will displace them overnight. Instead, incremental progress, collaboration, and niche expansions shape the future. They highlight the synergy between Astro, Solid, Quick, and others, showing how cooperation can unify best practices. In the host’s view, “too many frameworks” is a surface-level complaint, whereas the real story is continuous evolution that benefits developers.

### 04:50:00 - The Angular Angle and Fine-Grained Moves

The conversation circles back to Angular’s proposed signals, considering how it might systematically replace or augment existing patterns. The host muses on the feasibility of partial rollout within large enterprise apps, the training required for Angular devs, and the synergy with existing Angular features like zones or upcoming hydration support. If Angular can gracefully integrate signals, it might overshadow the entire older dirty-checking narrative.

This development exemplifies the unstoppable momentum of granular reactivity. Major frameworks adjusting to signals reflect the inevitability of better performance and clearer state management. The speaker remains excited by the alignment across historically diverse teams, whether Angular, Vue, or React-based. Each step forward cements signals as a viable foundation rather than a fringe experiment. By bridging these mindsets, the JavaScript community converges on an evolved, more consistent reactivity model.

### 04:55:00 - Final Questions on Next Steps

With the session nearing five hours, the speaker fields final questions about timelines for new releases, upcoming alpha features, and how soon devs can try out experimental strict modes or store APIs. The host warns that no firm dates can be given, citing the complexity of shipping stable, well-tested changes. They encourage willing participants to check nightly builds or alpha flags if they’re eager to help refine new features.

They also reiterate that real project feedback is invaluable, urging anyone adopting Solid Start or advanced signals patterns in production to share experiences. If fiascos do arise, the framework maintainers can respond quickly. This underscores the community-driven aspect of the roadmap, balancing bold innovation with real-world stability. The speaker’s tone is optimistic, confident in the forward trajectory but mindful of measured progress.

### 05:00:00 - Wrapping Up and Personal Sign-Off

Around the five-hour mark, the speaker begins wrapping up. They summarize the wide range of topics covered: Angular’s signals, React’s historical stance, compiler-based approaches, and potential Solid changes. Emphasizing the open-ended nature of these conversations, they express excitement for the next wave of improvements in reactivity, from advanced dev tooling to more flexible store APIs and SSR strategies.

The host thanks the live audience for staying engaged through detailed explorations, references to code examples, and community questions. They apologize once again for starting a bit late and running so long but hope the depth was beneficial. Concluding with an invitation to follow future streams and announcements, the speaker signs off, promising more content on signals, frameworks, and the evolving JavaScript ecosystem.

### 05:05:00 - Extended Farewells and Q&A Continuation

A brief after-segment emerges as the host acknowledges last-minute chat messages and lingering questions about debugging or resource APIs. They give quick pointers on resources in the Solid documentation, as well as recommended libraries for specialized reactivity use cases. Viewers with ongoing concerns are encouraged to open GitHub issues or drop into the project’s Discord server.

Although wrapping up was already announced, these final minutes allow a friendly cooldown, letting regular viewers share thanks, jokes, or personal anecdotes. The atmosphere remains relaxed as the speaker transitions from dense technical content to a casual sign-off. By reaffirming community ties and referencing the help channels, the host ensures that no one feels left behind after a marathon discussion.

### 05:10:00 - Final Goodbye

The speaker offers a definitive closing, reminding everyone of the next steps: keep an eye on upcoming alpha features, blog posts, and possibly future Twitter Spaces with other framework authors. They once again show gratitude for the viewers’ patience and thorough engagement. Despite the length, they hope it was a valuable deep dive into signals, reactivity, and the state of JavaScript frameworks.

Acknowledging that the ecosystem is in constant flux, the host encourages developers to remain curious and stay open to new ideas. With everything from Angular’s signals to React’s potential compiler solutions on the horizon, the speaker believes the coming months will bring continued innovation. Finally, they thank everyone for participating and officially end the stream, leaving open the promise of future episodes.