---
showLink: "https://www.youtube.com/watch?v=j0s8w34Xh9o"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive into NativeScript w/Nathan Walker & Ammar Ahmed"
description: ""
publishDate: "2023-11-04"
coverImage: "https://i.ytimg.com/vi/j0s8w34Xh9o/maxresdefault.jpg"
---

## Episode Description

A deep conversation about NativeScript, Solid’s rendering approaches, and practical tooling for cross-platform development, culminating in a lively Q&A on routing and future project plans.

## Episode Summary

This episode begins with an informal greeting and the host’s excitement about exploring various native solutions, quickly shifting focus to NativeScript and its unique approach. The conversation highlights how NativeScript unifies JavaScript and native APIs, eliminating complex “bridge” layers. Mid-episode discussions cover performance optimizations, multi-threading, and how these approaches compare to React Native. The guests bring insights into customizing native modules, bridging the gap between JS and low-level APIs, and how community-driven efforts strengthen the broader ecosystem. In the latter portion, the host transitions to “This Week in JavaScript,” reflecting on server actions, routing paradigms, and the crucial work behind upcoming Solid features. This provides a window into the complexities of open-source development, from conceptual design to time-intensive implementation. The show wraps with forward-looking perspectives on potential frameworks, refined router ideas, and a shared enthusiasm for pushing boundaries in cross-platform JavaScript applications.

## Chapters

### 02:20:00 - 02:25:00: Reflecting on React and Remix

The host touches on parallels with React’s server actions, noting remix influences and design trade-offs. They reference cordial interactions with the Remix team, remarking that acknowledging each other’s innovations fosters healthy cross-project relationships.

They praise the forward-thinking approaches that frameworks like Remix, Next.js, and SvelteKit are testing. The notion of server functions as URLs resonates with Solid’s design. The segment demonstrates mutual respect among JS framework creators.

### 02:25:00 - 02:30:00: Beta Status and Friction Points

Concerns from the community about indefinite “beta” labeling emerge. The host clarifies that major changes are still pending in Solid Start, and it’s better to refine them fully. They stress that shipping stable illusions only to break them soon is worse.

A frank discussion follows on real-world usage. While some already run Solid Start in production, others prefer guaranteed stability. The host promises updated roadmaps and open communication, encouraging those comfortable with risk to keep exploring the latest builds.

### 02:30:00 - 02:35:00: Linking Router Overhauls to NativeScript Talk

Before concluding NativeScript topics, the host briefly reaffirms that new router paradigms in Solid can facilitate cross-platform bridging. If route definitions become more flexible, hooking them into a universal layer or domain-specific libraries like NativeScript grows simpler.

They foresee a future where complex nested routes remain stable across web and native. This synergy ties earlier points on performance, reactivity, and minimal bridging into a cohesive vision for multi-platform apps built on top of Solid.

### 02:35:00 - 02:40:00: Detailed Cache Discussions

The host explains caching intricacies, from ephemeral request-level stores to user session data. They share a structured table that breaks down preload caches, CDN caching, and application-level mechanisms, highlighting how each layer handles invalidation and personalization.

Attendees absorb how signals or watchers can re-trigger updates without re-rendering entire pages. The host references parallel strategies in Next.js and React’s new server cache. Their central aim is a stable, composable approach that suits various usage patterns.

### 02:40:00 - 02:45:00: Create Async vs. Create Resource

A key design debate arises around Solid’s resource API. The host points out that createResource can be cumbersome for repeated or ephemeral fetches. They propose createAsync, a simpler primitive that integrates elegantly with advanced caching and partial hydration.

The conversation covers re-fetch triggers, memoization, and advanced store diffing. By removing excess signals, the code remains more composable and direct, letting multiple wrappers handle data flow. It’s a technical but crucial step toward a unified data-loading strategy.

### 02:45:00 - 02:50:00: Global Patch Trick for Hydration

In a bold revelation, the host describes patching global functions like fetch or Promise during hydration, blocking actual resolution. This ensures that initial reactive tracking occurs without re-fetching. It’s an unconventional approach but elegantly sidesteps re-render complexities.

The chat reacts with a mix of fascination and caution. Though it solves a thorny problem, some worry about reliability or edge cases. The host clarifies it’s only used momentarily during the synchronous pass, restoring defaults immediately afterward.

### 02:50:00 - 02:55:00: Composability Through Wrappers

They highlight how simple wrapping techniques can yield advanced capabilities. For instance, layering a cache function above createAsync is trivial. This modular approach encourages developer freedom, letting them pick precisely how caching or revalidation should occur.

The group sees parallels with other frameworks’ plugin-based architectures. The host underscores that an ecosystem’s real strength lies in adaptable building blocks. Each part does one thing well, avoiding entangled code that stifles future expansion or refactoring.

### 02:55:00 - 03:00:00: Summarizing the Proposed Router Changes

Transitioning to the router redesign, the host shows a readme draft describing new APIs. They propose removing the old route data patterns, championing simpler preload functions and context-based children. This aligns better with server components and partial rehydration.

Nested routes remain but adopt a more explicit approach. Instead of hidden automations, developers pass children directly. The host suggests lower-case anchors for default links, with an uppercase A component for active states—mirroring standard HTML usage.

### 03:00:00 - 03:05:00: Discussion of File-Based Routing

The file system approach appears optional, shaped by external tools like Vinci. The host explains how placing route definitions in separate files can automatically generate route configs. This spares devs from manually writing JSON-like route objects.

Parallel to Next.js conventions, they note potential confusion over numerous file types—layout, page, error. Solid aims for a simpler approach, letting devs unify structure. Cautious steps ensure advanced usage remains possible without burying novices in magical naming rules.

### 03:05:00 - 03:10:00: Balancing Magic and Explicitness

The group weighs the pros and cons of magic file naming. They appreciate immediate recognition when seeing “layout.tsx,” yet know these patterns can limit customization. The host suggests flexible but consistent conventions to keep confusion at bay.

They remember Next’s earlier friction over specific directory names, concluding that while it helps a standard approach, some advanced edge cases break it. A future solution might involve partial auto-detection with escape hatches for developers who want explicit route definitions.

### 03:10:00 - 03:15:00: Potential Impact on Ecosystems

Listeners learn how a universal router design might unlock deeper synergy with libraries like TanStack Router. The host hints that if Solid’s new APIs prove sufficiently modular, third-party solutions could integrate neatly, offering more advanced or specialized routing flows.

They also address the possibility of bridging to older Angular or Vue devs. NativeScript-like technologies thrive on robust routing, so a stable, well-structured Solid router helps unify the path from web to mobile to next-gen devices.

### 03:15:00 - 03:20:00: Q&A on Edge Cases

A participant asks about persistent data or form states across nested routes. The host explains how carefully placed signals or stores can maintain local states. Proper route transitions let signals survive, or reset, matching user expectations.

They emphasize that consistent handling of ephemeral UI details—like half-completed forms—requires clarity on which boundaries refresh data. By controlling scope, devs avert jarring resets. This segment illustrates the nuance behind building truly user-friendly routing experiences.

### 03:20:00 - 03:25:00: The Vision for 1.0 Release

Returning to Solid Start’s timeline, the host outlines the final hurdles: stable server actions, a finalized router, robust caching, and thorough documentation. They highlight how each piece must interlock, so rushing one might break another.

They reaffirm that while the framework might already be production-viable for some, official endorsement as 1.0 demands confidence in the entire toolchain. The host’s candor resonates with viewers, who acknowledge the complexity of open-source engineering.

### 03:25:00 - 03:30:00: Reflecting on Developer Experiences

The host recalls users’ frustration with indefinite betas, comparing it to Next.js features once labeled alpha. Community dialogue ensures no illusions about stable APIs. They express gratitude to testers who provide real feedback, accelerating the final polish.

With an eye on Angular or React devs, the group muses that new adopters want firm release cycles. Yet they reassure that once fundamental designs stabilize, solid versioning will align with mainstream expectations, including clear upgrade paths.

### 03:30:00 - 03:35:00: Introducing Example Projects

The conversation shifts to possible sample apps showcasing how new router and cache functions integrate. They imagine building a to-do or user-profile demo with server actions, letting watchers replicate patterns in real code.

The host outlines a plan to unify best practices—like recommended folder structures, hooking forms to server actions, and layering preloading. This forms a blueprint for simpler onboarding, bridging novices’ confusion over reactivity, SSR, and routing.

### 03:35:00 - 03:40:00: Handling Complexity in Demos

They note that advanced features can complicate demos, especially once partial hydration or advanced transitions appear. The host suggests chunking features into separate examples, focusing each on a single concept like caching or nested routes.

Ammar chimes in about balancing thoroughness and accessibility. Showcasing too much at once might obscure key lessons. A structured approach with incremental steps helps devs gradually adopt new patterns without feeling overwhelmed.

### 03:40:00 - 03:45:00: Team Standup and Collaboration Insights

The host recounts daily standups with core teammates, explaining how they coordinate tasks and brainstorm solutions. This helps unify direction across time zones, ensuring incremental progress despite volunteer or part-time involvement.

Viewers appreciate the transparency around how a minimal group juggles feature sets, bug fixes, conference talks, and community relations. The host emphasizes that open communication, whether in standup logs or forums, fosters a sense of collective ownership.

### 03:45:00 - 03:50:00: Sustaining Open-Source Momentum

A deep reflection ensues on the challenge of sustaining interest and pace. With limited core contributors, developments can appear slow from the outside. The host urges more devs to join, especially those keen on shaping core modules.

They mention how a single new contributor can radically expedite a major feature, from rewriting docs to refining partial hydration. This segment underscores that open-source thrives when new people realize they can leave a lasting mark.

### 03:50:00 - 03:55:00: Balancing Talks and Coding

Reminded of past months spent traveling to conferences, the host admits that each appearance consumes coding hours. While beneficial for visibility, it slows direct feature development. The community sees that outreach fosters future contributions despite short-term slowdowns.

They discuss rationing speaking engagements more strategically. Large events can yield long-term gains, like forging ties with potential collaborators. Yet, day-to-day coding remains vital. The conversation reveals the perpetual balancing act facing project leads.

### 03:55:00 - 04:00:00: Revisiting the NativeScript Connection

Returning to NativeScript, the guests reflect on how the synergy with Solid might inspire more cross-pollination. They encourage watchers to test NativeScript with advanced Solid Start features once available, forging new multi-platform patterns.

Ideas range from shared codebases for web, mobile, and emerging devices. The group sees a bright future where signals unify logic across rendering layers. They reemphasize the importance of stable router solutions, a foundation for countless advanced apps.

### 04:00:00 - 04:05:00: Detailed Routing Edge Cases

The host enumerates tricky route transitions, like partial route changes that require reloading only certain data sets. They highlight how an upcoming rewrite might solve such partial fetch or partial rehydration complexities seamlessly.

They talk about invalidating caches at sub-route boundaries, referencing advanced techniques from frameworks like Remix. The group praises how route-based splitting can reduce overhead, letting devs update only what changes while everything else remains stable.

### 04:05:00 - 04:10:00: Finalizing Create Async Integration

Next, they confirm that createAsync stands poised to replace or simplify many createResource calls. Removing explicit refetch signals or nested wrappers frees up logic, letting developers concentrate on data flow with fewer steps.

This modernization aims to make SSR, preloading, and client hydration more consistent. The host underscores that once 2.0 of Solid arrives, the entire ecosystem stands to gain from simpler concurrency patterns and less scaffolding.

### 04:10:00 - 04:15:00: Chat’s Final Technical Inquiries

Late in the session, chat questions pivot to advanced caching scenarios, like multi-layer storage or offline capabilities. The host suggests hooking into external libraries for offline sync while letting signals handle local reactivity.

They mention how specialized solutions, such as TanStack Query or SWR, might integrate seamlessly with upcoming router changes. For many, a built-in basic cache suffices, but those building enterprise apps appreciate the wide scope of potential integrations.

### 04:15:00 - 04:20:00: Reflection on Overlapping Roles

The host explains their role as not just a maintainer but also a manager, social media coordinator, and community representative. These varied tasks inform daily decisions, guiding features that devs truly need rather than arbitrary expansions.

They emphasize that open-source leadership requires wearing many hats. Code is only one aspect; teaching, documenting, networking, and strategic thinking round out the workflow. They encourage more contributors to lighten the load, ensuring stable, continuous growth.

### 04:20:00 - 04:25:00: Revisiting Documentation Needs

The conversation circles back to the urgent need for robust docs. While advanced features thrill enthusiasts, novices crave clarity. They praise community efforts on revamping guides and tutorials, essential for bridging the knowledge gap and fueling adoption.

Mentioning new doc outlines, the host applauds contributors who refine examples or fix incomplete references. This effort, they say, can be as impactful as any code commit, directly shaping how quickly newcomers succeed with Solid or NativeScript.

### 04:25:00 - 04:30:00: Recap of Key Takeaways

Approaching the home stretch, the host synthesizes the day’s core points. NativeScript offers a powerful route to native development using JavaScript. Meanwhile, Solid’s upcoming router and caching strategies promise simpler data handling and flexible server actions.

They reiterate that synergy across frameworks—like bridging signals into native layers—unlocks performance without losing developer convenience. This final recap sets the stage for concluding remarks, encouraging ongoing exploration and community support.

### 04:30:00 - 04:35:00: Final Questions on NativeScript

Viewers pose last-minute queries about plugin ecosystems and real-world production apps. The guests mention success stories, from business apps to hobby projects. They remain confident that upcoming releases will streamline workflows even further.

Those intrigued are urged to check out official channels, GitHub repos, and active community chats. The door is open for more collaboration: building new modules, refining docs, or launching innovative cross-platform prototypes.

### 04:35:00 - 04:40:00: Bridging the Gap to Future Features

The conversation shifts one final time to how experimental ideas might become official. The host notes that once stable patterns emerge from community testing, they often graduate into core libraries or recommended best practices.

They highlight the synergy of demonstration projects, real usage feedback, and iterative refinement. Everyone is reminded that new “universal” solutions can unify multiple ecosystems if they are built with care and keep minimal overhead in mind.

### 04:40:00 - 04:45:00: Thanking Major Contributors

As the session winds down, the host acknowledges individuals like Yukino Song, whose Dominative approach has powered sophisticated cross-framework solutions. They also commend numerous contributors for quietly shipping features, bug fixes, and performance improvements.

They reiterate that success hinges on dedicated volunteers who share knowledge, optimize code, and handle user questions. This sense of gratitude underscores an inclusive community spirit, welcoming novices and experts alike to shape future releases.

### 04:45:00 - 04:50:00: Community Plans and Next Steps

Attendees receive a preview of upcoming roadmap items: improved form handling, expanded plugin docs, and finishing the new router. The host teases partial hydration updates in Solid Start, hinting at a more seamless developer experience.

Meanwhile, the NativeScript working group eyes ongoing type standardization, ensuring iOS, Android, and future platform APIs remain frictionless to adopt. The two worlds—Solid and NativeScript—stand poised for deeper collaboration, bridging open-source innovation with pragmatic dev solutions.

### 04:50:00 - 04:55:00: Closing Thoughts on Release Timelines

Viewers again ask for release dates, but the host underlines that setting firm schedules often leads to broken promises. Instead, they promise incremental check-ins, alpha or beta tags, and thorough testing cycles. This honesty characterizes the project’s approach.

Listeners receive a concluding note to remain patient, test early builds if adventurous, or wait for stable announcements. Everyone can see the finish line is on the horizon, though the exact crossing remains flexible to ensure quality.

### 04:55:00 - 05:00:00: Host’s Reflections and Thanks

In the final moments, the host expresses appreciation for the conversation’s depth. They remark on how combining real-time demos, technical history, and future vision fosters a richer perspective on cross-platform JavaScript development.

They extend thanks to all watchers, chat participants, and especially Nathan and Ammar for their detailed insights into NativeScript. A sense of camaraderie settles in, with the host inviting everyone to follow further updates on both Solid and NativeScript projects.

### 05:00:00 - 05:05:31: Wrap-Up and Farewell

As the clock approaches the final minute, the host recaps the main announcements: watch for doc rewrites, router changes, and opportunities to get involved. The guests wave and share final remarks, wishing everyone success in their cross-platform ventures.

Signing off, the host encourages viewers to continue exploring the ecosystem. Whether building with NativeScript, trying new router APIs, or bridging advanced platforms like Vision Pro, there’s room for creativity. The episode closes on a note of anticipation for future innovations.