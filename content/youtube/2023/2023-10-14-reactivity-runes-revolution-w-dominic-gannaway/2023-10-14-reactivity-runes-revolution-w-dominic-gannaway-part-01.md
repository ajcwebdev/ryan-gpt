---
showLink: "https://www.youtube.com/watch?v=N54FZtNvk_A"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Reactivity, Runes & Revolution w/ Dominic Gannaway"
description: ""
publishDate: "2023-10-14"
coverImage: "https://i.ytimg.com/vi/N54FZtNvk_A/maxresdefault.jpg"
---

## Episode Description

A far-reaching conversation on JavaScript frameworks, reactivity, and the future of web development with insights from Dominic Gannaway on Svelte’s upcoming innovations.

## Episode Summary

This transcript presents a comprehensive look at modern JavaScript frameworks, focusing on performance, reactive programming models, and emerging compiler strategies. It begins by examining how developers transitioned from earlier libraries like Knockout to newer concepts that emphasize signals and unidirectional data flow. Throughout the discussion, the speakers highlight the importance of local reasoning in code, comparing various approaches to managing state and dependencies. They address the impact of compilers on bundling and optimization, drawing parallels among frameworks such as React, Solid, Svelte, and others. The conversation also touches on migration strategies, the benefits and trade-offs of server-side rendering, and how best to balance developer experience with runtime performance. By providing both historical context and forward-looking insights, the dialogue underscores a shared goal of creating faster, more maintainable web applications that leverage modern reactive principles in pursuit of a more seamless developer and user experience.

## Chapters

### 00:00 – 17:45 | Introduction and Early Programming Influences

In these opening moments, Ryan Carniato sets the stage for a highly anticipated discussion, welcoming Dominic Gannaway and explaining why his work has been so influential. Dominic begins by describing his early fascination with gaming and the modding scene, which eventually led him into programming. He recalls the challenges of building small projects in Visual Basic and Java, highlighting the performance constraints of older hardware and how that spurred his deep interest in optimization. As he transitioned into web development, his background in game engines fueled a desire to push browser performance to new heights.

The conversation also establishes the tone for the rest of the session, weaving together stories of personal passion for code with broader insights into how the industry evolved. Dominic explains how these formative experiences sparked his commitment to exploring new ways of increasing efficiency—whether in graphics, rendering pipelines, or JavaScript frameworks. This personal backdrop sets up the major themes to come, including the persistent quest to marry raw speed with flexibility and simplicity, and foreshadows the focus on signals, reactivity, and compiler-driven optimizations that will dominate later segments.

### 17:45 – 35:30 | Discovering Knockout and the Move to React

Around this segment, Dominic recounts his first foray into Knockout, describing it as a tool that, while groundbreaking at the time, suffered from two-way binding complexities and tricky debugging scenarios. He explains how these issues ultimately pushed him and his team to explore other solutions. React caught their attention with its unidirectional data flow and component-based design, representing a significant step forward in managing state. However, Dominic also notes that React wasn’t without flaws, especially in early versions that lacked the performance needed for demanding, real-time trading applications.

He remembers how the initial hurdles of shifting from Knockout’s template approach to React’s JSX made the learning curve steep. Still, the promise of a more predictable model won them over. This evolution set the stage for Dominic’s broader exploration, showing how frustration with performance bottlenecks can drive developers to experiment with new frameworks, build custom tooling, and contribute to open source. The segment illustrates how the tension between ease of use and raw speed often defines which libraries gain traction, revealing the landscape that would soon lead Dominic toward more ambitious efforts like Inferno.

### 35:30 – 53:15 | Performance Insights and the Birth of Inferno

In this interval, Dominic details the inspiration behind Inferno, which he initially introduced on Hacker News to unexpectedly massive acclaim. Motivated by React’s limitations on resource-constrained devices, especially mobile, Dominic envisioned a library with a more streamlined virtual DOM that could rival the speed of lower-level approaches. He describes the flurry of activity following Inferno’s sudden popularity—thousands of stars, numerous issues, and the realization that something he considered a personal experiment had struck a nerve in the community.

The conversation delves into the specific optimizations that propelled Inferno’s reputation as one of the fastest virtual DOM libraries. Dominic highlights strategies like template cloning, specialized data structures for reconciling lists, and minimizing overhead wherever possible. He also touches on the community reaction, which included both excitement and some legal or naming challenges. This part of the talk underscores how a simple performance quest can lead to an unexpectedly vibrant open-source project, illustrating the unpredictable nature of success in the JavaScript ecosystem.

### 53:15 – 1:11:00 | Open Source Challenges and Handing Over Inferno

As the story continues, Dominic recounts the pressures that accompanied Inferno’s surge in popularity. He describes the inundation of issues, feature requests, and pull requests from a broad range of users, including large enterprises and unusual sectors. Balancing these external demands while maintaining his own vision proved both exhilarating and exhausting. The attention also brought a wave of odd disputes, including name conflicts, as well as unsolicited attempts to threaten the project’s existence.

Dominic explains that when the opportunity arose to join Facebook (now Meta) and work directly on React, he faced a significant decision: keep pouring effort into Inferno or pursue a chance to influence a far more widespread library. He ultimately chose to step back from Inferno, entrusting it to a small team of maintainers who continued the project. Despite the personal challenges, he describes this phase as a testament to open source’s potential and pitfalls—where success can arrive suddenly and force a creator to decide between nurturing a beloved niche project and seizing a larger-stage opportunity.

### 1:11:00 – 1:28:45 | Joining the React Team and Contributing to Fiber

In this section, Dominic reveals his initial impressions upon joining Meta’s React team, where he expected to focus purely on performance improvements. Instead, he quickly found himself immersed in the ongoing Fiber architecture overhaul, which laid the groundwork for React’s later features like concurrent rendering. Sharing anecdotes of collaborating with Dan Abramov and Sebastian Markbåge, Dominic highlights how React’s engineering culture balanced incremental updates with more radical shifts, ensuring thousands of Meta engineers could keep pace with major changes.

He describes the shift from Inferno’s monomorphic optimization to Fiber’s more flexible approach. While the priorities at Facebook favored massive scale and broad developer adoption, Dominic’s passion for micro-optimizations sometimes clashed with the team’s more general aims. Yet these experiences helped him see React’s design in a different light: not strictly about raw speed, but about handling extreme complexity across a vast developer ecosystem. This nuanced perspective would eventually inform Dominic’s subsequent work on compilers and signals, as he wrestled with reconciling top-down architectures with the demands of real-world performance.

### 1:28:45 – 1:46:30 | Prepack, Compiler Ambitions, and the Road to Hooks

Dominic next introduces the intriguing Prepack project, an ahead-of-time compiler initially aimed at improving React Native’s startup performance. He outlines how the team tried to simulate the runtime process within a static analysis framework, combining partial evaluation, object aliasing, and advanced data-flow techniques to generate optimized JavaScript. Their experiments occasionally led to staggeringly large, fully inlined output, inadvertently illustrating both the promise and pitfalls of attempting full program compilation for UIs.

During this period, Prepack’s lessons also contributed to the inception of React Hooks. As Dominic explains, compiler designers wrestled with the unpredictable nature of `this` in class components, ultimately realizing a simpler function-based API would be more amenable to static analysis. Hooks solved immediate challenges in React’s codebase while hinting at deeper possibilities for JavaScript frameworks. Dominic stresses that even though Prepack was eventually shelved, the conceptual breakthroughs helped shape React’s modern form, underscoring how advanced compiler research can spur major API evolutions.

### 1:46:30 – 2:04:15 | Class Components vs. Hooks and the Signal Parallels

Here, the conversation turns to the transition from class components to React Hooks, illustrating how fundamental changes in an API can affect both internal and external developer experiences. Dominic shares insider perspectives on the cautious rollout—React developers had grown accustomed to classes, so unveiling Hooks meant carefully balancing hype and reassurance. Although not everyone immediately embraced them, Hooks brought a more direct approach to state management, inadvertently echoing some patterns seen in signal-based systems.

Ryan and Dominic compare these new function-driven APIs to the older class-based lifecycle methods, noting how the shift allowed for more composable logic. Even though React’s model still invoked full re-renders, the localized nature of Hooks offered glimpses of the fine-grained reactivity championed by libraries like Knockout or Surplus. The segment hints at how these parallels inspired Dominic’s later endeavors, bridging the gap between an event-driven approach and true signal reactivity that would eventually materialize in frameworks like Solid and Svelte’s new runes.

### 2:04:15 – 2:22:00 | Leaving React Team and Finding a New Balance

Dominic opens up about his decision to leave the React team, emphasizing that it wasn’t due to technical disagreements but rather a personal quest for better work-life balance and time-zone compatibility. Working with a team primarily based on the U.S. West Coast while living in the U.K. meant erratic schedules that proved unsustainable. He underscores the challenge of thriving in an environment where React’s enormous user base demands constant vigilance, leaving little room for broader experimentation.

The discussion moves into the dynamics of large open-source projects, where success can be both a blessing and a burden. Dominic describes how the supportive environment at Meta helped shape his thinking on design patterns, event systems, and concurrency, but the shift to a more localized team at Workplace (Meta’s internal collaboration tool) allowed him to continue exploring innovative ideas on a smaller scale. This period provided a critical juncture that would rekindle his interest in tackling fresh front-end challenges, eventually leading him toward lexical and deeper forays into text editing technology.

### 2:22:00 – 2:39:45 | Workplace Projects and the Spark for Lexical

During this interval, Dominic outlines his move to the Workplace division, focusing on building interactive experiences for corporate clients. He notes how advanced text editors became an unexpectedly formidable challenge, due to intricacies like IME handling for non-Latin scripts, real-time collaboration, and content-editable quirks. The impetus for Lexical emerged when Dominic realized existing solutions like Draft.js and Slate struggled under these constraints, prompting him to craft a new, more performant editor from scratch.

He describes Lexical’s architecture as rooted in the same thirst for optimization that defined his earlier work. From analyzing composition events on Android to contending with tricky accessibility standards, Dominic’s fascination with pushing the boundaries of UI performance shines through. This segment underlines the recurring theme of how seemingly niche projects, whether text editors or trading dashboards, can reveal broader limitations in mainstream frameworks—thus spurring a drive to experiment with fresh patterns and reactivity models.

### 2:39:45 – 2:57:30 | Lexical’s Adoption and Open Source Reboot

Dominic recounts how Lexical rapidly gained traction, becoming integral to key Meta platforms like WhatsApp and Instagram. Though starting as a small experiment, its blend of robust performance and flexible API garnered attention from major teams. This momentum carried over once Lexical was open-sourced, as outside developers recognized its potential to power everything from blog editors to corporate dashboards. Dominic underscores the satisfaction and stress of shepherding an immediate open-source success—reminiscent of Inferno yet with more corporate backing.

The conversation reveals lessons about building domain-specific frameworks that can outpace general-purpose libraries in specialized scenarios. Dominic’s background in frameworks like Inferno informed Lexical’s attention to memory usage and real-time responsiveness, while React’s conventions guided its developer-friendly approach. By blending insights from game engines, UI toolkits, and modern concurrency, Lexical exemplifies how a pursuit of raw speed can dovetail with the complexities of real-world collaboration tools—offering another lens to view the potency of reactivity beyond just rendering a DOM.

### 2:57:30 – 3:15:15 | Revisiting Signals and New Compiler Explorations

At this juncture, Dominic shares how his success with text editors rekindled thoughts about advanced compilers and reactivity at a framework level. Rather than simply building a standalone solution for Lexical, he began experimenting with a personal project called Obtain, where he sought to bring signal-based logic back into a React-like ecosystem. He confesses enjoying small-scale prototypes that test new boundaries, searching for a harmonious blend of performance and ergonomics.

This phase sets a pivotal tone: it underscores Dominic’s continuous cycle of prototype, refine, and repeat, reflecting a restless creativity that might lead to entirely new paradigms. The challenges gleaned from Prepack and Lexical pointed him toward an even stronger belief in the power of signals. He recognized that while React made major strides with Hooks, the concept of direct reactivity could unlock more straightforward mental models and top-tier performance. This longing for a “perfect synthesis” paved the way for his eventual collaboration with the Svelte team.

### 3:15:15 – 3:33:00 | Joining Vercel and Partnering with the Svelte Team

Here, Dominic narrates how an opportunity at Vercel aligned with his renewed interest in signals. He recalls early chats with Rich Harris about bridging the best ideas from various frameworks, eventually converging on a shared belief that Svelte could adopt signals for an even cleaner reactivity story. This shift from purely compiler-based transformations to leveraging fine-grained updates challenged some of Svelte’s established patterns, yet also promised major performance wins.

Dominic emphasizes that while Svelte historically minimized runtime overhead, the concept of signals could open new doors for partial hydration, advanced code-splitting, and leaner templates. Working full-time on Svelte 5 at Vercel thus offered a rare chance to shape an evolving ecosystem without the hurdles of corporate-scale codebases. He describes the excitement of translating lessons from Inferno, React, and Lexical into Svelte’s famously user-friendly syntax, ensuring signals integrate seamlessly while preserving the framework’s signature simplicity.

### 3:33:00 – 3:50:45 | Exploring Runes and Svelte 5’s Signal Adoption

Dominic delves into the newly introduced Svelte runes—a key step toward adopting signals under the hood. He explains how runes hide most of the complexity from everyday developers, maintaining Svelte’s typical single-file style while offering advanced reactivity behind the scenes. By leaning on the compiler to detect dependencies and minimize runtime overhead, Svelte 5 edges closer to the fine-grained approach long championed by other reactive libraries.

He also notes that runes address common pain points in prior Svelte versions, such as the inability to handle deeply nested updates without extensive rewriting. By formalizing read/write segregation at the compiler level, Svelte’s reactivity becomes more robust and intuitive. This evolution cements the idea that signals, once thought to belong solely to smaller libraries, are now recognized as a fundamental building block for high-performance rendering. Dominic underscores how runes might reshape Svelte’s future capabilities, from partial hydration to reduced memory usage, without sacrificing the streamlined developer experience.

### 3:50:45 – 4:08:30 | Comparing Svelte Runes and Other Framework Approaches

Ryan and Dominic compare runes to signal implementations in other frameworks like Solid or Vue’s composition API. Dominic clarifies that while the syntax may differ, the underlying concepts remain similar—variables transform into reactive sources that isolate state changes. The discussion touches on ergonomics and backward compatibility, illustrating the delicate balance Svelte must strike to satisfy both new adopters and long-term users who appreciate minimal boilerplate.

They also explore how Svelte’s approach shields users from the typical burdens of advanced reactivity. Instead of importing signals directly, developers rely on runes for a streamlined experience. Despite this abstraction, Dominic believes developers will gain a deeper understanding of data flow and performance. By comparing the granular design choices that shaped Svelte 5, Solid, and Vue, the segment highlights that the industry at large is converging on signal-based reactivity as a potent tool, even if their outward APIs remain distinct.

### 4:08:30 – 4:26:15 | Signals, Syntax, and Svelte’s Compiler Edge

In this segment, Dominic addresses the synergy between signals and Svelte’s renowned compiler. He describes how compile-time transformations make it possible to eliminate boilerplate, produce monomorphic structures, and avoid repeated property checks. This synergy yields incremental gains that, when combined, significantly bolster runtime performance. Ryan interjects with anecdotes from Solid’s own optimizations, reinforcing the idea that each micro-optimization can accumulate into substantial overall speed-ups.

Dominic explains how Svelte 5’s compiler will identify patterns like object getters and inline them whenever beneficial, ensuring that signals don’t impose overhead in cases where reactivity isn’t needed. This approach harkens back to Inferno’s technique of minimizing allocations and preserving monomorphic shapes. By revealing the array of small steps required to achieve top-notch performance, the conversation underscores why a carefully tailored compiler can outperform generic solutions. Together, they reflect on how these leaps tie back to old lessons, such as the tricky nature of JavaScript engines and the importance of stable hidden classes for efficient property access.

### 4:26:15 – 4:44:00 | Hydration Optimizations and Partial Rendering

Dominic shifts focus to hydration, noting Svelte 5’s improvements in reconciling server-generated HTML with client-side updates. By unifying rendering and hydration paths, the compiler drastically reduces the overhead needed to initialize interactive components on the client. He contrasts this with older Svelte versions that, while already efficient, sometimes resorted to separate code paths for hydration, increasing the overall bundle size and memory usage.

This leads into a broader conversation on partial hydration, an increasingly popular approach among frameworks. Dominic suggests that Svelte 5’s compiler is well positioned to implement advanced partial hydration strategies that only hydrate essential parts of the DOM. By flattening out reactivity trees at compile time, the new version can decide more intelligently when to skip or defer work. Such an approach promises to boost responsiveness on low-end devices, aligning with Dominic’s lifelong passion for bridging performance gaps across diverse hardware.

### 4:44:00 – 5:01:45 | The Future of Composability and Larger Ecosystem Shifts

Dominic and Ryan debate whether Svelte 5’s signal architecture will lead to more sophisticated patterns of code reuse, akin to React Hooks or Solid’s custom hooks. Dominic imagines a fresh wave of third-party libraries that take advantage of signals without exposing them directly, preserving Svelte’s no-boilerplate ethos. The compiler’s newfound flexibility might also encourage more intricate data flow solutions, like fully reactive nested objects or advanced store systems.

They touch on how changing a framework’s reactive core reshapes the ecosystem around it. Previously niche solutions could ascend to mainstream acceptance once Svelte 5 formalizes signals. At the same time, the introduction of signals prompts questions about how Svelte handles advanced scenarios like async operations or concurrent rendering. Dominic acknowledges these complexities but remains optimistic that a robust, internally consistent approach to reactivity will pay off for Svelte, leading to novel possibilities and spurring fresh competition among frameworks.

### 5:01:45 – 5:20:35 | Closing Reflections and Q&A

As the conversation nears its conclusion, the speakers address a final round of audience questions on both technical and philosophical points. They revisit how React’s unidirectional flow laid crucial groundwork for the reactivity patterns adopted by modern frameworks, all while exploring new compiler technologies that continue pushing the envelope. Dominic reaffirms his enthusiasm for cross-project collaboration, noting that lessons learned in one library can often transfer to another.

Ryan and Dominic then share parting insights on the evolution of frameworks, underscoring that each generation builds on past ideas to refine performance, ergonomics, and community-driven best practices. With Svelte 5, Solid, and others converging around signal-based reactivity—yet still innovating uniquely—there’s reason to be optimistic about the web’s future. The episode ends with both hosts thanking listeners for their engagement, inviting them to follow ongoing development of Svelte 5, and celebrating the vibrant interchange of ideas that keeps JavaScript frameworks moving forward.