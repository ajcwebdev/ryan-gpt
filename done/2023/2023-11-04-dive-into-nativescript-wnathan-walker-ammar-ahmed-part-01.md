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

### 00:00 - 05:00: Initial Greetings and Setup

At the start, the host arrives with a friendly hello, apologizing for minor delays while juggling video checks and software setups. During these first few moments, attendees in the chat say hello, and general excitement sparks about the upcoming conversation on NativeScript.

The host lightly tests streaming tools and ensures everything is functioning correctly. Viewers trickle in, warming up the chat with brief questions about upcoming topics. Although no formal discussion begins yet, the mood is bright, setting the tone for an in-depth technical session.

### 05:00 - 10:00: Audience Introductions and Stream Goals

Transitioning from casual chatter, the host invites the audience to comment on their familiarity with NativeScript. Some mention brief encounters, while others reveal deeper experiences. This segment clarifies the stream’s purpose: unraveling misconceptions and learning modern cross-platform techniques.

The host addresses common assumptions, such as whether certain JavaScript frameworks can handle native platform elements. The question “What about performance?” emerges. Momentum builds as the host shares personal anecdotes, teasing a thorough look into NativeScript’s capabilities.

### 10:00 - 15:00: NativeScript Overview

Attention now centers on NativeScript itself. The host recalls seeing it years ago, attracted by the promise of writing JavaScript for mobile. Early impressions, featuring differently named tags and platform-specific abstractions, hinted at deep native ties, stirring fresh curiosity today.

A quick history surfaces: NativeScript’s open governance roots and how it evolved from a corporate product to a community-led initiative. Discussion touches on bridging JavaScript to native APIs without heavy “bridge” overhead, setting the stage for deeper architectural insights.

### 15:00 - 20:00: Guest Introductions – Nathan Walker and Ammar Ahmed

Nathan Walker and Ammar Ahmed join as key contributors to NativeScript. Nathan, from inStudio, outlines his experience as chair of the working group, emphasizing community-driven progress. Ammar, co-founder of NodeSnook, details his open-source focus and how he became involved.

They illustrate their paths to NativeScript, bridging academic backgrounds, professional pursuits, and a passion for JavaScript’s ecosystem. Their complementary roles in the technical steering committee and open governance highlight strong collaboration, underscoring how community synergy propels NativeScript forward.

### 20:00 - 25:00: Explaining NativeScript’s Core Philosophy

Discussion turns to what sets NativeScript apart. Guests describe how it merges JavaScript directly with platform APIs, bypassing separate native modules or complex bridging layers. They note a single thread approach simplifies development, aligning well with typical mobile UI constraints.

Examples like direct battery-level checks show how straightforward it is to call native iOS or Android functions. By exposing Objective-C and Kotlin classes through JavaScript, developers work within a unified language, enhancing productivity without sacrificing native performance or capability.

### 25:00 - 30:00: Comparing to Other Cross-Platform Solutions

The conversation contrasts NativeScript with Cordova or Capacitor, which rely on WebView-based approaches. While those meet certain needs, NativeScript’s approach, akin to React Native, provides real native views. However, NativeScript bypasses React Native’s bridging overhead by unifying languages more tightly.

The guests highlight how NativeScript’s design addresses common developer pain points, like duplicating logic in native Swift/Java code for custom modules. By enabling direct JavaScript calls into native APIs, teams avoid friction and context switching, boosting overall development efficiency.

### 30:00 - 35:00: Performance and Threading Considerations

Here, performance emerges. The host recalls early React Native optimization challenges, from container wrappers to handling infinite scrolling. The guests clarify how NativeScript’s single-thread model locks UI work to the main thread but still supports concurrency through web workers.

They address potential misconceptions that single-threaded UI spells slower performance, explaining how platform constraints make concurrency a matter of careful API usage. NativeScript’s engine-level approach to marshaling data between JavaScript and native code is highlighted as pivotal for speed.

### 35:00 - 40:00: Demo Overview and Solid Integration

Ready to demonstrate, Nathan previews a sample combining NativeScript with Solid. He notes how Solid’s fine-grained reactivity fits neatly into native interfaces. By leveraging Dominative—a universal DOM layer—developers use JSX-like syntax to render genuine iOS or Android elements.

This synergy dispels myths that frameworks needing a virtual DOM can’t handle native. As code is displayed, they show how an iOS button or label can be managed directly through signals. The conversation foreshadows deep explorations of how it all works.

### 40:00 - 45:00: Solid-NativeScript Demo in Action

Nathan shares his screen, unveiling an iOS simulator. A straightforward Solid “counter” component morphs into a genuine UI button. By toggling inspector tools like Flex, each element is confirmed as a real native view—no web layers or hidden browsers.

Zooming in, they illustrate nested native views, referencing Apple docs for each UI element. The host marvels at how easily configuration occurs within JavaScript, maintaining a fully reactive experience. This segment cements a sense of synergy between Solid and NativeScript.

### 45:00 - 50:00: Vision Pro and Expanding Horizons

They pivot to a Vision Pro demo, underscoring how NativeScript extends beyond phones to emerging platforms. Using Apple’s visionOS simulator, the host manipulates 3D objects in real-time with Solid signals controlling rotation, exemplifying cross-platform potential.

Although visionOS remains unreleased, the ability to integrate NativeScript’s engine into new form factors hints at limitless possibilities. The conversation briefly touches on AR/VR, wearable devices, and the next wave of immersive technologies that can benefit from a JS-first approach.

### 50:00 - 55:00: Deeper Dive into Demo Code

At the code level, Nathan displays a typical structure: a shared Solid app plus a NativeScript folder. He explains the generated iOS and Android platform projects, each containing embedded JavaScript bundles for app logic, referencing real Xcode or Gradle setups.

The host notes the straightforward approach, reminiscing on React Native’s earlier complexities. This portion underscores how platform projects are rebuildable artifacts. When updates hit, developers can regenerate them without version-locking issues, preserving a flexible environment for ongoing changes.

### 55:00 - 01:00:00: iOS Project in Xcode

Nathan opens the iOS folder to reveal a standard Podfile for dependencies, bridging frameworks like Flex for debugging. He showcases the Xcode workspace, clarifying that developers can add custom Swift files or libraries, or remain purely in JavaScript.

This synergy underscores how skilled native coders and JavaScript experts can coexist. Swift UI code can be placed alongside JavaScript-based NativeScript modules. The discussion emphasizes that, unlike older bridging approaches, all these files integrate harmoniously in one workspace.

### 01:00:00 - 01:05:00: Scalability and Threading Revisited

Questions emerge on whether dev teams face growing pains with complex native modules. The guests confirm large applications can remain maintainable, especially given strong community libraries. They also underscore that background processing can be offloaded if performance demands it.

Amid talk of concurrency, the host recounts prior experiences balancing UI responsiveness with data tasks in React Native. NativeScript’s direct engine approach cuts typical overhead, though devs remain free to spawn threads or rely on existing asynchronous native calls.

### 01:05:00 - 01:10:00: Android Project and Build Systems

Focus shifts to the Android side. Nathan demonstrates a Gradle structure that mirrors standard Java or Kotlin apps. The difference lies in an embedded JavaScript engine. Developers can open these projects in Android Studio, modify them, or rely on auto-generated builds.

They reflect on better migration paths compared to older approaches. Instead of rewriting entire native modules, teams integrate standard Android components alongside the JavaScript logic. This eases version updates, reducing headaches typical of bridging frameworks or custom expansions.

### 01:10:00 - 01:15:00: Introduction to Dominative

Ammar explains Dominative, a universal DOM emulation that makes frameworks like Solid think they’re targeting a browser. In reality, it funnels updates directly to native widgets. This glues the platform’s UI system to standard JSX-based rendering calls.

Questions on overhead arise, but they assure that minimal JavaScript bridging is needed. The same engine runs on the device, so marshaling remains quick. Dominative’s code is relatively small, avoiding the pitfalls of large polyfills. Community involvement has optimized its performance.

### 01:15:00 - 01:20:00: Summarizing the NativeScript Architecture

They recap how custom renderers typically require separate code for each framework. With Dominative, the host sees potential for supporting other libraries like Vue or Svelte. Amar underlines that minimal layers mean less to maintain, promising consistent speeds across platforms.

The host likens this to server rendering synergy, where logic can unify. By removing bridging code, developers reduce overhead, making the entire architecture simpler and more composable. This closes a cohesive explanation of NativeScript’s fundamental design.

### 01:20:00 - 01:25:00: Exploring List Components in NativeScript

Ammar showcases a dynamic list component, explaining how infinite or large lists handle item recycling. Instead of re-rendering everything, NativeScript reuses existing views. This ensures stable performance, even with resource-intensive data like social feeds or media galleries.

He shows code bridging the data array to a native collection view. Each row updates only if the underlying record changes. The host contrasts this with past React Native intricacies, appreciating how NativeScript simplifies reusability and direct platform calls.

### 01:25:00 - 01:30:00: Live Code Demonstration

Ammar opens a real project in his IDE, walking through TypeScript definitions. He reveals how each list view item is seamlessly created, assigned data, and recycled in the viewport. The debug logs confirm minimal overhead, crucial for smooth scrolling.

He modifies code on the fly, revealing that changes reflect immediately without rewriting large native modules. Observers see transitions that confirm each element’s bound data. This demonstration cements trust in the approach, validating NativeScript’s design for everyday app patterns.

### 01:30:00 - 01:35:00: Q&A on Reusability and Migrations

Viewers ask about reusing web-based logic or quickly migrating from existing React Native code. The guests clarify that while partial rewrites might be needed, the fundamental skill set remains the same. TypeScript-based interfaces can lessen friction when reorganizing shared code.

They also touch on how to incorporate standard web libraries if desired, though pure JavaScript calls often prove simpler. This fosters a sense of flexibility, allowing partial adoption or step-by-step transitions for teams wary of big architectural moves.

### 01:35:00 - 01:40:00: Reflecting on Collaboration and Community

Ammar credits the open-source community’s role in driving NativeScript forward. Unofficial modules and plugin creations push boundaries, filling feature gaps swiftly. Nathan praises dedicated contributors who champion integrations across libraries like Solid, React, and Angular.

They mention open governance processes, ensuring collective decisions about roadmap features. Despite limited full-time paid staff, volunteer momentum keeps the project robust. The host applauds these collaborative dynamics, especially as more frameworks adopt signals or similar approaches.

### 01:40:00 - 01:45:00: Cross-Platform Visions

The discussion branches to varied platforms such as wearables, VR devices, and embedded systems. Ammar affirms that NativeScript’s foundation can port easily, letting developers adapt UI layers per platform. Excitement grows around future form factors like AR glasses.

The host imagines unified code across phone, watch, and potential VR/AR headsets. Both guests encourage the community to explore these frontiers, experimenting with device sensors or advanced 3D APIs. There’s a palpable sense that the platform’s possibilities extend far beyond phones.

### 01:45:00 - 01:50:00: Complexity of Maintaining Large Projects

A viewer question on “bus factor” arises—how reliant is the project on a few key maintainers? The guests acknowledge it’s a common open-source worry but emphasize that many skilled people have joined to ensure continuity.

Documentation efforts, plugin quality, and a strong set of core features lessen single-maintainer risk. They reflect on enterprise usage, where larger companies also rely on NativeScript, contributing patches and ensuring long-term stability.

### 01:50:00 - 01:55:00: Transition to Solid Start Topics

The host teases a new segment focusing on Solid’s meta framework, Solid Start. Although the conversation remains anchored in native solutions, the flow shifts toward how server actions and universal rendering might apply across contexts.

Observations from the host’s experiences with React Native feed into ideas about resource caching and server data. The group ponders how concepts like transitions or signals might reshape large-scale cross-platform architectures, bridging web and native code.

### 01:55:00 - 02:00:00: A Quick Recap and Pause

They briefly recap NativeScript’s architecture for latecomers, re-emphasizing direct JavaScript access to native views. The host acknowledges the synergy with Solid’s reactivity. A few chat questions surface about future documentation or step-by-step tutorials.

Nathan and Ammar reaffirm community plans, promising more official guides and real-world application examples. The conversation then naturally pauses, allowing the host to pivot toward a broader JavaScript discussion in the next block.

### 02:00:00 - 02:05:00: Reflecting on Project Timelines

The host shares anecdotal stories about time management in open-source. Conferences, personal responsibilities, and the demands of guiding a growing community can slow major releases. They note that “when it’s ready” is sometimes the best target.

Ammar chimes in, agreeing that forward momentum stays strong, thanks to many volunteers. The conversation reveals the nuanced process behind each new feature or API change, urging patience while acknowledging the hunger for quicker deliverables.

### 02:05:00 - 02:10:00: Funding and Sustainability

Questions arise on whether more direct funding or corporate sponsorship could accelerate development. The host reiterates how crucial sponsor support is, highlighting that deeper pockets often free core maintainers to focus on high-impact tasks.

Yet they caution that corporate backing must align with project direction. Too much external sway could overshadow open governance. Balancing sustainable financing with community-driven goals remains a delicate dance in open source.

### 02:10:00 - 02:15:00: “This Week in JavaScript” Introduction

The host shifts to a regular segment dedicated to broader JavaScript ecosystem news. They briefly mention recent releases, tweets, and library updates. The chat sparks anew with excitement, as watchers anticipate talk of server actions and upcoming features.

The host acknowledges a personal backlog of social media engagement, referencing ongoing data-fetching explorations. Viewers see how these new frameworks and toolchains might blend with or compete against NativeScript in the cross-platform space.

### 02:15:00 - 02:20:00: Ongoing Work in Solid Start

Delving into Solid Start, the host mentions intense behind-the-scenes R&D. They highlight server actions, improved routing, and integration with advanced caching strategies. This portion underscores how rewriting or refactoring a meta framework can be surprisingly time-consuming.

Curiosity abounds regarding release timelines. The host sets expectations, explaining how volunteer-driven development must avoid rushing half-baked features. They illustrate how rewriting the router alone reveals unanticipated complexities, especially when tackling SSR, partial hydration, and reactivity.