---
showLink: "https://www.youtube.com/watch?v=ZVKHxm1-g3E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidScript?! Using Compilation for Syntax"
description: ""
publishDate: "2022-03-19"
coverImage: "https://i.ytimg.com/vi/ZVKHxm1-g3E/sddefault.jpg?v=623434dd"
---

## Episode Description

SolidJS creator Ryan Carniato explores different approaches to JavaScript compilation and syntax, reflecting on performance, frameworks, and the evolving future of web development.

## Episode Summary

In this conversation, the speaker focuses on how JavaScript frameworks have grown beyond traditional runtime-based approaches, highlighting emerging compiler-driven techniques for performance optimization and developer ergonomics. He discusses the motivations behind creating new syntaxes, describing how reactivity and compile-time transformations can enrich both the programming model and the end-user experience. The talk spans various solutions, from plugins that simplify destructuring in Solid, to broader reflections on whether reactivity might one day become part of the JavaScript language itself. Throughout, there are references to the potential of streaming for server-side rendering, the complexities of type systems, and the potential tension between constraints and flexibility. The speaker emphasizes the importance of strong developer experiences, acknowledging that while raw performance is achievable with low-level techniques, frameworks aim to combine that efficiency with intuitive, enjoyable patterns. He ends by suggesting that, though no single solution is perfect, the ongoing innovation in compilation, reactivity, and design signals an exciting future for the JavaScript ecosystem.

## Chapters

### 00:00 - Opening Remarks and Context

In the first few minutes, Ryan Carniato greets viewers and sets up the evening’s topic: examining how compilation can change syntax in JavaScript frameworks. He mentions earlier streams in which he spoke for hours on performance, highlighting that the conversation now shifts toward new developments in compilation. This segment underscores the lively discussions and debates on social media that led him to explore these ideas, including calls for JSX to be part of JavaScript itself and differing opinions about writing code with or without a virtual DOM.

He also references community interest in comparing Svelte to other frameworks, noting how syntax preferences often ignite strong reactions among developers. His introduction clarifies that the objective isn’t to criticize any single approach but to understand the mechanics and motivations behind each. By explaining how he has explored these concepts before, he invites both new and returning listeners to jump in with fresh insights on this evolving subject.

### 06:00 - Transition from Past Discussions to New Perspectives

Ryan explains how previous talks focused more on optimization and rendering performance, whereas this session covers how compilation can provide entirely new syntax choices. He mentions the performance benchmarks that initially drew attention to Solid and looks at how the conversation shifted toward syntax and reactivity. He underscores that while performance opened doors for new frameworks, syntax considerations are what often capture developers’ hearts.

He moves on to reflect on how the industry is shifting its lens, especially around how to achieve advanced behavior in frameworks. Some want to compile entire custom languages, while others prefer minimal transformations. This part shows Ryan emphasizing that both approaches aim to improve developer experience and performance. He suggests that the future may lie somewhere between purely runtime-driven frameworks and deeply compiler-oriented ones.

### 12:00 - Social Media Debates and Ecosystem Arguments

Here, Ryan recounts recent social media threads debating whether established libraries like React hold the top spot solely due to ecosystem support. He reads posts suggesting that “there are better performing frameworks,” yet many stick to React because of its job market or robust tooling ecosystem. Ryan finds it encouraging that, from a purely technical standpoint, new frameworks are compelling enough that their only shortfall is a smaller pool of third-party add-ons or job listings.

He expresses gratitude that Solid is part of the discussion, alongside Svelte and Preact, as viable React alternatives. Rather than seeing this as frustration, Ryan sees it as confirmation that these projects have successfully proven their worth. Despite an ever-present challenge of “being overshadowed by React,” he notes that each new library’s long-term growth and staying power will hinge on practical benefits, not just performance claims or marketing buzz.

### 18:00 - The Concept of Ecosystem and Community Growth

Continuing on the topic of ecosystem, Ryan describes the practical considerations for startups and companies: hiring ease, onboarding junior developers, and existing knowledge bases often favor large incumbents. Yet, he emphasizes that frameworks like Solid, Svelte, or Vue can now meet “99% of everyday use cases,” eroding older arguments that “the ecosystem isn’t ready.” He suggests that for personal projects, learning or adopting smaller frameworks is viable and sometimes more enjoyable.

He also touches on how large-scale corporate backing can accelerate a framework’s adoption. Drawing on the example of Rich Harris joining Vercel for Svelte, Ryan notes how dedicated sponsorship can significantly evolve a project. This underscores the idea that while innovative solutions exist, having resources to support them often determines how quickly they enter mainstream use. Yet, in Ryan’s view, Solid benefits from a healthy, enthusiastic community—even if it lacks big-name sponsors.

### 24:00 - Framework Comparisons and Mobile Integrations

Ryan shares excitement about seeing Solid integrated with tools like Capacitor, enabling mobile applications that leverage his framework’s performance and reactivity benefits. He describes how such integrations reflect the ecosystem’s ingenuity and show that a younger framework can be applied in production-grade scenarios. The mention of mobile underscores that the JavaScript ecosystem continues pushing boundaries beyond traditional web, into cross-platform experiences.

He then shifts to mention how developer interest in new frameworks often cycles through performance benchmarks, syntax, and then real-world case studies. For instance, although blog posts or tweets might highlight speed, it’s the success of projects like Solid on mobile or SvelteKit in real-world production that cements a framework’s reputation. This natural progression from curiosity to trust eventually fosters stronger communities around newer solutions.

### 30:00 - Notable Articles: Real-World Server-Side Performance

Ryan spotlights a deep-dive article on e-commerce site performance improvements, where streaming server-side rendering played a critical role. He recounts how the author tested and compared different frameworks and approaches, ultimately concluding that streaming was a major advantage. This leads him to a broader point: while client-side performance is heavily discussed, server rendering, and especially streaming, can have an even more substantial impact on large production deployments.

He links this discussion to prior streams in which he showed detailed flame graphs and network waterfalls. He explains that despite debate around how significant streaming’s benefits can be, his tests show it does improve user experience, especially under real-world conditions. He also clarifies how artificial throttling in browser dev tools might downplay streaming’s advantages, whereas real network conditions reveal a more pronounced improvement.

### 36:00 - Remix and Next.js in the Context of Streaming

Ryan then pivots to how frameworks like Remix and Next.js handle server rendering differently, including nuances around time-to-first-byte (TTFB) and chunk loading. He points out that hydration—attaching event listeners to already-rendered markup—can delay interactivity if the JavaScript is large or if the approach is purely synchronous. Streaming mitigates some of these issues by progressively sending HTML to the client as the server assembles it.

Throughout, he clarifies that each framework’s approach has trade-offs based on design philosophies and use cases. For instance, Remix might rely on certain data-loading strategies that differ from Next.js. He underscores that measuring streaming’s true value requires testing it in live network conditions, hinting at the gap between theory and actual user experience. His overarching message is that frameworks need to keep refining server-side strategies to deliver real performance gains.

### 42:00 - Hybrid Approaches and Community Solutions

This segment discusses how some community-driven libraries experiment with blending different paradigms, from partial hydration to streaming plus island architecture. Ryan mentions how “not everything is black and white,” praising open-source experiments that introduce advanced performance features without losing ease of use. He points to the creativity of community members who build on Solid or even recompile Svelte or Vue concepts to run with alternative rendering or reactivity approaches.

He also addresses the complexity new developers might face when encountering so many patterns. While advanced features like island architecture or streaming can drastically reduce load times, they require a deeper understanding of layering server and client logic. Ryan reassures that documentation and tooling continue to improve, making once-advanced ideas more accessible to a broader audience over time.

### 48:00 - JSX in the Browser? Standardization Thoughts

Ryan references recent tweets about whether JSX should become a native part of JavaScript. He notes that while the idea periodically resurfaces, it’s challenging to integrate JSX as an official syntax without imposing heavy constraints on frameworks. He reminisces about past attempts at embedding templating in the browser, such as MDV and template instantiation proposals, which never fully took off. 

He emphasizes that JSX’s success partly stems from its neutrality—it’s just syntax, with no imposed runtime semantics. Frameworks like Solid or Inferno optimize it differently, yet the syntax remains the same. This uniformity makes JSX powerful as a cross-project standard without limiting internal implementations. A built-in JSX might risk losing that flexibility, as browsers would likely fix certain behaviors or data structures, tying developers’ hands when building new optimizations.

### 54:00 - Balancing Compilation and Pragmatism

This chapter explores how compilation under the hood can yield major performance gains by analyzing code at build time, but that pragmatism still matters. For instance, Svelte’s compile-time approach strips away runtime overhead, whereas React’s commit-phase approach is more flexible but can be slower. Ryan notes that Solid sits in a hybrid space, only compiling JSX but relying on a runtime for reactivity.

He touches on user expectations for a direct correlation between code and outcomes. The more a compiler “magically” rewrites code, the harder debugging can become, so frameworks must carefully design transformations. This tension between letting tools do heavy lifting and maintaining clarity shapes how far frameworks push compile-time optimization. Ryan also underscores that advanced compilation sometimes complicates library authoring, particularly around SSR bundling and version mismatches.

### 1:00:00 - Introducing a Plugin for Destructured Props

Ryan shifts focus to a tangible example: a Babel plugin that allows destructuring Solid props without breaking reactivity. Usually, destructuring in Solid can lead to stale data because the reactivity system expects direct references to props. The plugin rewrites destructured variables back into references, preserving Solid’s change-tracking. Ryan showcases how installing this plugin can simplify the developer experience by letting them write code more akin to React, while still benefiting from Solid’s fine-grained reactivity.

He cautions that while it solves a major developer complaint—being forced to avoid destructuring—it also adds a layer of abstraction that can obscure what’s really happening. He reiterates that such a plugin might not be ideal for library authors distributing compiled code to others. Nevertheless, for application code, it’s often a big productivity win, allowing developers to write in a style they’re comfortable with.

### 1:06:00 - Trade-Offs in Transforming Application Code

Continuing on the destructuring plugin, Ryan addresses possible pitfalls, such as misalignment between what code looks like before and after compilation. He explains that a new user might wonder why certain references work in some contexts but not others. This is because the plugin infers when a variable must remain a reactivity-aware reference or can be safely read as a normal value.

He notes that in deeply composed applications or library code, it might introduce confusion or break advanced usage. Moreover, it complicates SSR scenarios if you try to compile a library in one pass. The conversation highlights that these transformations require precise context to work well. Ultimately, it’s a balancing act: the plugin caters to developers’ desire for a simpler syntax but demands a nuanced understanding of Solid’s underlying model.

### 1:12:00 - Exploring Signal Identifiers and Composition

Here, Ryan looks at a second compilation strategy: using unique variable identifiers, such as a dollar sign, to denote signals. This means that any variable named `$count` is recognized at compile time as a reactive variable. He explains how this approach transparently handles reactivity by automatically linking getters and setters. It removes manual function calls for reading or writing a signal, letting developers just use `$count` like any other variable.

Ryan highlights that while this solution solves certain destructuring issues, it introduces constraints like always having to name reactive variables in a special way. He points out that Svelte uses a similar idea with its `$:` label, but that it becomes difficult to share code across files or handle advanced composition. Still, for many local or small-scale projects, naming signals in this manner simplifies the reactive experience substantially.

### 1:18:00 - Mixing and Matching Syntaxes

He moves on to “solid-labels,” an experimental plugin that supports multiple reactivity syntaxes at once—comment-based annotations, special function calls, or even label syntax reminiscent of Svelte’s `$:`. The plugin tries to unify these approaches in a single environment, allowing you to pick whichever style you prefer on a per-line basis.

Ryan finds it intriguing that the community is playing with such flexible tools but cautions that variety can sometimes overwhelm newcomers. Each syntax has trade-offs in terms of scoping, composability, and mental overhead. He reflects that while these experiments might be less formal or mainstream, they help the ecosystem discover what truly resonates with developers and what might eventually inform future “official” solutions.

### 1:24:00 - Insights into Composability and File Boundaries

Transitioning from syntaxes to architecture, Ryan talks about the deeper question of how new syntax approaches handle composability across multiple files. For instance, Svelte’s single-file structure means reactivity is usually local. In a more function-based environment, you can share signals and transform them across different scopes or modules. This difference affects not just developer experience, but how easily you can create reusable hooks or custom behaviors.

He underscores that frameworks must balance “guardrails” to prevent misusage with enough freedom to let advanced users build complex libraries. Sometimes compilers require explicit indicators to maintain reactivity across boundaries, while in other designs, reactivity emerges as a fundamental language feature that’s always in effect. Ryan suggests that no single approach fits all projects; teams must weigh how they prefer to manage code organization and data flow.

### 1:30:00 - Revisiting Svelte’s Local Reactivity

Ryan turns attention to how Svelte’s reactivity lacks a direct notion of “composition” in the sense of hooking separate logic blocks together. He references older Twitter exchanges with Evan You, creator of Vue, who asked how one might handle advanced effect chaining in Svelte’s `$:` style. Ultimately, Svelte addresses some of these patterns through “stores,” but that usage can feel like a separate mechanism from the basic label-based reactivity.

He admires how Svelte’s approach is easy to grasp in simpler use cases, appealing to developers who want minimal ceremony. However, he cautions that projects with complex data flows might find it harder to create deeply nested or dynamic solutions. As an example, he describes how Solid’s runtime approach or advanced compilers like Marco may offer more flexibility for large-scale scenarios.

### 1:36:00 - The Future of Reactive JavaScript

Contemplating the broader picture, Ryan wonders whether reactivity might eventually be baked into the JavaScript language. He imagines hypothetical operators akin to the “destiny operator” from older academic proposals. While exciting, he suspects it’s difficult to standardize such features without limiting the creativity behind existing solutions. Built-in reactivity might risk overshadowing or even conflicting with the many custom approaches that frameworks have refined over the years.

He then highlights how these new language features would need to handle both references (signals) and values. That transformation can cause confusion if everything seems to behave like a variable but is actually tracking changes behind the scenes. This part of the talk shows Ryan enthusiastically theorizing about possible futures but reiterating that the complexity of user expectations is a major design challenge.