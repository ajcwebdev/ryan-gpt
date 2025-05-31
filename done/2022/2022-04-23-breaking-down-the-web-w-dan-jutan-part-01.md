---
showLink: "https://www.youtube.com/watch?v=REXtIuAJ3dE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Breaking Down the Web /w Dan Jutan"
description: ""
publishDate: "2022-04-23"
coverImage: "https://i.ytimg.com/vi/REXtIuAJ3dE/maxresdefault.jpg"
---

## Episode Description

An in-depth chat on modern web rendering strategies, performance insights, and emerging framework techniques with the Solid docs team.

## Episode Summary

In this extensive discussion, the speakers compare various approaches to fetching and rendering content on the web, highlighting trade-offs in performance, complexity, and developer experience. They begin by describing server-side rendering and client-side rendering, illustrating how factors like latency and bundling can affect time-to-first-byte or contentful paint. The conversation moves into advanced techniques, including streaming server-side rendering, which can show partial content sooner. They also address routing—from traditional multi-page approaches to more complex nested routing solutions—and underscore the power of frameworks that minimize or dynamically load JavaScript. Throughout, they emphasize how decisions about rendering and navigation shape user experience and maintainability, touching on experimental ideas like resumability and transitional routing. By comparing real-world examples and referencing well-known tools, they offer a clear view of the state of modern frontend engineering.

## Chapters

### 00:00 - 00:06 | Opening Remarks and Stream Setup

The host welcomes viewers, briefly apologizing for being slightly late. He mentions his intention to share an engaging session involving drawing and conceptual explanations. Early on, he references ongoing conversations from previous streams, noting that many watchers are stepping into a discussion already in progress. To assist with that, he plans to bring on a guest, Dan, from the Solid project’s documentation team, who excels at clarifying ideas. The host also teases a “This Week in JavaScript” segment, hinting it may be packed with both technical topics and a bit of community intrigue.

As more people join, the host lightheartedly touches on the typical routine of these get-togethers, mentioning how each stream often balances advanced code exploration with lighter “gossip.” He jokes about drama in the JavaScript ecosystem, suggesting that some watchers tune in just for those stories. Nevertheless, his main goal for the evening is to step back and explain fundamental concepts in a more structured way, promising clearer context for any newcomers. This sets the stage for a comprehensive examination of modern web rendering tactics.

### 00:06 - 00:12 | Netlify Edge Functions and Streaming SSR

Kicking off the “This Week in JavaScript” portion, the host dives into Netlify’s newly released edge functions. He recalls learning about them shortly before the official announcement and scrambling to adjust demos that showcase server-side rendering at the edge. While explaining how he integrated Solid’s Hacker News example on this new platform, he highlights streaming support, which allows the server to push chunks of HTML as soon as they’re ready. This approach demonstrates the growing importance of edge locations in delivering rapid responses to users.

Beyond simply praising Netlify’s edge release, the host contrasts it with other edge solutions, such as those from Cloudflare and Deno. By comparing their performance on a Hacker News demo, he illustrates how streaming not only accelerates time-to-first-byte but also decreases the window before content appears on the screen. In the process, he mentions some of the complexities around compression and caching headers, noting that each platform may optimize differently. This discussion underscores that edge computing is a significant step forward for modern SSR workflows.

### 00:12 - 00:18 | Evaluating Performance Metrics and Early Benchmarks

Still focused on edge and streaming, the host runs Lighthouse tests on multiple setups, revealing a mixture of results. He points out how tools like Lighthouse can yield varying scores from run to run, illustrating the challenges of consistent benchmarking. Additional nuances, such as the Hacker News API’s location or potential caching differences, mean no single run perfectly depicts real-world performance. Nonetheless, the broad theme is that streaming SSR on the edge generally outpaces traditional server-side approaches and client-only ones, especially under network constraints.

The conversation touches on how metrics like “Time to Interactive” can lag behind visually obvious rendering gains. He notes that while developers often focus on first contentful paint, actual interactivity can come later, influenced by how hydration or script parsing proceeds. Even so, the improvements seen with streaming SSR are noteworthy. The host also alludes to how frameworks like Solid, Svelte, and Remix handle these scenarios, beginning a thread that weaves into a deeper exploration of specialized benchmarks and advanced framework optimizations.

### 00:18 - 00:24 | Framework Comparisons and JS Benchmarking Background

The host shifts to a broader look at frameworks by referencing known server-rendering benchmarks. He mentions results for React, Vue, Svelte, Solid, and Marco, noting that these tests can guide maintainers in refining performance-critical sections of their libraries. He underscores that real applications differ from contrived benchmarks but affirms that such tests still play a role in driving innovation. This sets the tone for comparing frameworks on metrics like raw rendering speed, memory usage, and bundle sizes.

He recalls historical experiences with older libraries—knockout, for instance—where incremental improvements eventually influenced modern reactive systems. The evolution from “generation one” single-page apps to modern SSR or partial hydration solutions becomes a recurring theme. Listeners are reminded that performance insights require diligence in building relevant benchmarks, especially for server-side rendering. Even if not every user cares about microsecond differences, library authors find these benchmarks indispensable to refine rendering strategies and to ensure new features don’t bloat or slow runtime performance.

### 00:24 - 00:30 | Diving into Fine-Grained Reactivity and Marco's Advances

Conversation pivots toward fine-grained reactivity, a concept central to frameworks like Solid and, in its own way, Marco. The host lauds Marco’s major performance leap in its upcoming version, attributing the gains to compiler-based strategies. He explains how shipping less JavaScript, and shipping it more intelligently, can have a profound effect on loading speeds. By dissecting how Marco breaks large tasks into smaller, more trackable parts, the host illustrates the synergy between compile-time optimization and runtime responsiveness.

He highlights the newly introduced or refined “tags” API in Marco, which effectively merges HTML, logic, and reactivity into a more cohesive syntax. This approach boosts developer ergonomics and fosters code colocation, meaning fewer separate files or artificially partitioned code blocks. Although frameworks like Svelte popularized the notion of a compiler-first approach, Marco’s trajectory demonstrates a parallel evolution. Attendees learn that these reactive scripts aim to replicate—and surpass—traditional hooking patterns by tying reactivity to the structure of the markup itself.

### 00:30 - 00:36 | The Ongoing Compiler vs. Runtime Discussion

The host emphasizes that some frameworks, such as React and Solid, rely on runtime techniques, letting developers write mostly vanilla JavaScript. By contrast, compiler-driven frameworks—Svelte, Marco, and others—lean on transformations that happen before running in the browser. Each style offers unique benefits: a compiler-based system can theoretically optimize more aggressively, but a runtime-first framework keeps things more “JavaScript-native.” The host underscores the importance of letting each approach mature, believing both can converge on exceptional performance with thoughtful design.

He revisits his own involvement in these developments, from early knockout days to joining the Marco team. Real-world usage at scale, such as eBay’s extensive traffic, contributed heavily to the knowledge embedded in these frameworks. Although the conversation appears technical, the underlying takeaway is that diverse approaches—runtime or compiler—can all yield top-tier results if balanced against developer experience. This sets a philosophical background for the subsequent focus on hydration, routing, and overarching architectural choices.

### 00:36 - 00:42 | Taylor Hunt's Routing Article and Generational Shifts

Now the host references an article by Taylor Hunt discussing the trade-offs between single-page app routing and multi-page routing. He ties it back to Rich Harris’s earlier “transitional apps” talk, suggesting how modern frameworks merge the best qualities of MPAs and SPAs. This thread naturally links with older Angular experiences, where “generation zero” websites evolved into “generation one” single-page apps, eventually giving way to “generation two” frameworks like Next.js and beyond.

He points out that Angular’s core team faced a dramatic shift moving from AngularJS to Angular 2, highlighting how routing played a pivotal role. Meanwhile, React seemed to straddle a boundary, bridging older and newer mental models. The host suggests that this generational perspective clarifies many modern discussions: we’re cycling back to the server in certain respects, but with more advanced tooling. By weaving in HTMX as an example of progressive enhancement, he foreshadows deeper routing conversations to come.

### 00:42 - 00:48 | HTMX, MPA Nostalgia, and Progressive Enhancement

Expanding on HTMX, the host notes how some developers champion “returning” to classic MPAs. He explains that HTMX, along with similar tools, encourages server-rendered pages that update small sections without requiring a full client-side framework. This approach resonates with those who prefer minimal JavaScript overhead but still want interactive elements. The host concedes that different projects have different needs, and while MPA-based solutions can be simpler, SPAs led to deep control over user interactions and transitions.

The host highlights how these new MPA philosophies with partial updates have grown in popularity, often in response to heavy single-page bundling. He acknowledges that frameworks like Astro and Marco pioneered partial or partial-like hydration for performance gains, aligning them loosely with HTMX’s spirit. Progressive enhancement becomes a key phrase: the idea of layering in JavaScript only where it’s valuable. Though older in concept, it reemerges in modern forms, reinforcing the cyclical nature of web development trends.

### 00:48 - 00:54 | Astro Community, Syntax Debates, and Ecosystem Buzz

Shifting to a lighter topic, the host recounts seeing syntax debates in the Astro community. Some folks see Astro’s template language as akin to Svelte, while others feel it resembles JSX. This playful argument underscores Astro’s unique approach, which can accommodate multiple frameworks for partial hydration. He praises the Astro team for building an environment where developers from different backgrounds feel equally at home. These cross-framework discussions highlight the platform’s flexibility and the power of bridging multiple paradigms.

The host shares a personal anecdote about demonstrations he performed to show Astro’s minimal JavaScript payload when combined with smaller frameworks like Solid. He remarks on how quickly people notice even the tiniest differences in syntax, revealing how developers’ preferences are often strongly rooted in the tools they already know. Ultimately, the synergy of Astro plus a lightweight view layer can rival advanced hydration schemes. This ongoing buzz in the community suggests that flexible, minimal solutions are increasingly popular.

### 00:54 - 01:00 | Revisiting Netlify, Edge Platforms, and Cloudflare

The focus returns to edge deployment, with the host revisiting Netlify’s new offering and contrasting it against Cloudflare. He restates that the edge approach, combined with streaming, offers near-instant time-to-first-byte in many geographic regions. While typical SSR might appear comparable in simpler demos, the edge can shine under heavier loads or in complex apps. This sets up a broader point: the conversation around performance is not just about raw speed but about scaling gracefully under diverse conditions.

He also highlights how frameworks adapt their hydration and rendering strategies to these emerging environments. Tools like Solid Start or SvelteKit can now target edge workers directly, further blurring the boundary between static, SSR, and dynamic rendering. By switching between Cloudflare, Netlify, and Deno examples, the host emphasizes that each platform has unique trade-offs in compression, streaming support, or caching. The result is a fast-moving ecosystem where developers can assemble specialized stacks suited to their application’s demands.

### 01:00 - 01:06 | Marco 6 and Svelte Comparisons

Pivoting to Marco once more, the host highlights a newly released article showcasing massive performance gains in Marco 6. By adopting a compiled fine-grained reactivity system, Marco narrows the gap or even surpasses prior leaders like Solid in certain benchmarks. This revelation stuns many who have viewed Svelte as the pinnacle of compiler-based speed. As the host walks through charts and data, he underscores that “build-time smarts” can help produce minimal bundles and accelerate real-world interactions.

Yet he’s quick to remind viewers that the quest for speed involves balancing many variables. Memory usage, dev tooling, ecosystem maturity, and community familiarity matter too. While Svelte soared thanks to an accessible single-file component concept, Marco’s approach dives even further into compile-based optimizations—an approach that might intrigue fans of Svelte’s performance ethos. Both frameworks share a vision of reducing client-side overhead, potentially nudging the web away from heavy, universal JavaScript bundles.

### 01:06 - 01:12 | Embracing a Tags API and Unified Syntax

The conversation spotlights Marco’s “tags API,” which merges HTML, reactive state, and logic into a single, elegant template block. This design eliminates much of the boilerplate that developers see with hooks or other reactivity patterns, letting stateful logic naturally reside alongside corresponding markup. The host compares this to Svelte’s approach of integrating script and style into the same file, though Marco’s system can yield even more streamlined syntax by default.

He notes that co-location of effects and template code simplifies refactoring: copying an entire block of markup and script together drastically reduces potential errors. While the concept of “reactive scripts” might be unfamiliar to those from a React or Solid background, it traces back to a deep lineage of “template is the application” philosophies. Despite differences in syntax, the underlying principle remains the same: unify state and view so that code becomes both smaller and clearer.

### 01:12 - 01:18 | Compiler Power and Shared Lessons Among Frameworks

Here, the host returns to the broader question of compiler-oriented designs. He explains how frameworks from Svelte to Marco take advantage of static analysis, generating minimal runtime code and pushing as much work to build time as possible. Meanwhile, Solid or React, which rely on an in-browser virtual DOM or reactive library, can find other avenues to boost speed. He observes that, historically, top performance can emerge from multiple paradigms.

In emphasizing real-world achievements, the host stresses that each solution’s success often reflects thousands of hours of iterative improvement. Benchmarks like the “JS framework benchmark” or specialized SSR performance tests have guided framework authors to identify bottlenecks. Marco’s success story—jumping from average to top-tier—offers a strong example of how systematic optimization pays off. Ultimately, he recommends that curious developers try different approaches to see which best suits their constraints and mental models.