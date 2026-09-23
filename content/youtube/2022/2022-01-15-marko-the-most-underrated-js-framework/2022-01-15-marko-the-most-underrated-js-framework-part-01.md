---
showLink: "https://www.youtube.com/watch?v=VanpBTKLFNM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Marko - The Most Underrated JS Framework?"
description: ""
publishDate: "2022-01-15"
coverImage: "https://i.ytimg.com/vi/VanpBTKLFNM/maxresdefault.jpg"
---

## Episode Description

A wide-ranging discussion about Marko’s origins, features, and future in the JavaScript ecosystem, including performance comparisons and advanced hydration techniques.

## Episode Summary

This talk focuses on how Marko, a server-centric JavaScript framework originating at eBay, tackles modern performance challenges through streaming, partial hydration, and fine-grained reactivity. Beginning with an overview of how traditional server-rendered approaches evolved into today’s client-heavy solutions, the speaker highlights the history and unique syntax of Marko, comparing it with tools like React, Svelte, and Astro. The conversation dives into how Marko delivers minimal JavaScript for faster load times and automatically distinguishes stateful from static parts of a page. Demonstrations include a Hacker News example showing how Marko streams content and only ships interactivity where needed. The session then explores the upcoming Marko 6 with a tags-based API, which compiles to highly optimized client-side code, reducing both data transfers and execution overhead. Concluding reflections touch on broader trends like transitional apps, the role of reactivity in balancing server and client needs, and the future of multi-page apps with partial hydration.

## Chapters

### 00:00:00 - A Late Start and Tonight’s Focus  

In these opening moments, the speaker greets the audience, acknowledging a slightly delayed start due to personal scheduling demands. He explains the hectic feeling of juggling work commitments and family responsibilities right before going live. Despite the rush, he expresses excitement for the session, noting that he has been preparing this topic on Marko for a while. His aim is to share both historical insights and real-world examples that illustrate Marko’s capabilities.

He introduces Marko’s background in broad strokes, explaining that it’s a unique JavaScript framework created at eBay. Though he has experience building Solid, he joined the Marko team later and gained a deeper appreciation for its underrated contributions. This framing sets the stage for a thorough exploration of Marko’s origins, special features, and present-day relevance. The speaker’s energy and anticipation hint that the upcoming discussion will be both technical and reflective.

### 00:06:00 - This Week in JavaScript and Other Updates  

The host transitions to his “This Week in JavaScript” segment, highlighting notable industry news and events. He mentions Astro’s recent announcement of securing significant funding and praises Astro’s approach to building lightweight, fast-loading sites. He also promotes the State of JavaScript survey, urging listeners to participate, despite occasional technical hiccups that can occur when submitting responses.

He briefly mentions Solid’s own hackathon, emphasizing the healthy competition and innovation happening in the JavaScript space. The conversation reflects a broader pattern of frameworks moving toward partial hydration and more server-friendly approaches. The speaker points to these trends as evidence of an ecosystem increasingly concerned with reducing JavaScript payloads, improving performance, and delivering smoother user experiences on slower networks or devices.

### 00:12:00 - Marko Announcements and Underrated Status  

Here, the speaker spotlights several recent Marko-specific developments, such as template setups for Vite and Fastify, along with advanced edge deployments on Cloudflare. He underscores how these templates allow developers to harness Marko’s streaming and partial hydration features with minimal setup. Demonstrating examples, he emphasizes Marko’s ability to function seamlessly in cutting-edge environments like serverless edges.

He also references online conversations around Marko’s underrated stature. Quoting industry figures who regard Marko as pioneering many features long before other frameworks, he contextualizes why some high-profile developers were impressed by Marko’s early adoption of techniques like streaming and selective hydration. This segment sets the tone for a deeper look into Marko’s past, showing how it quietly innovated while other projects enjoyed more widespread publicity.

### 00:18:00 - Revisiting the Early Days of SSR and Framework Skepticism  

Diving into historical context, the speaker recalls a time when server-side rendering (SSR) was largely dismissed by many developers. He highlights old tweets and viewpoints suggesting SSR was useful only for SEO or niche scenarios. Reflecting on how mobile-like experiences and client-side heavy apps gained momentum, he notes that frameworks such as React thrived in this environment.

He shows that Marko, from its inception, ran against the grain by doubling down on SSR. Back in the early 2010s, eBay’s need for fast-loading pages on all network speeds forced Marko’s creators to prioritize server performance and minimal JavaScript. Though overshadowed by the single-page app craze, Marko persisted, ultimately influencing modern trends that now see the industry returning to more SSR-friendly or hybrid approaches.

### 00:24:00 - The High Cost of JavaScript and eBay’s Motivation  

Turning to performance metrics, the speaker references articles and research from leaders like Addy Osmani, illustrating how JavaScript can add significant parse and execution overhead compared to images or static assets. By showcasing real-world data for slower devices and networks, he demonstrates the business impact of long load times, especially in e-commerce settings where user drop-off rates can spike with each second of delay.

He explains that eBay’s global customer base includes regions with variable network speeds, making performance critical. For an enterprise reliant on smooth user experiences and high conversion rates, shipping large JavaScript bundles was a non-starter. That pressing need motivated eBay’s investment in Marko as a server-first solution, shaping its focus on streaming, minimal client scripts, and powerful templating features to ensure pages remain snappy.

### 00:30:00 - From Dust and Pug to Marko’s Server-First Design  

The speaker narrates how early Node templating systems like Jade (later Pug) and Dust influenced Marko’s initial design. Dust stood out for its async-friendly streaming capabilities, which LinkedIn employed to send partial data as soon as it became available. Marko built on this idea by not just streaming HTML but also automating how scripts were distributed to the client.

He recalls how, in the era of monolithic back-end languages such as Java and .NET, Node’s rise opened new possibilities. Marko’s unique selling point became clear: a flexible server templating language that seamlessly incorporated interactive elements. While Dust was a stepping stone, Marko refined and streamlined the approach, ultimately enabling eBay to serve dynamic pages without the heavy overhead of re-rendering everything in the browser.

### 00:36:00 - Marko Syntax and Single-File Components  

Here, the speaker presents Marko’s signature syntax, which resembles HTML while extending it with specialized tags for loops, conditionals, and other logic. He contrasts it with JSX-based workflows, explaining that Marko’s approach originates more from classic server-side templates like Pug. This design allows authors to keep the structure declarative while embedding dynamic behaviors in the same file.

He notes that Marko had single-file components years before it became a trendy feature in frameworks like Vue or Svelte. The result is a style that appears approachable to developers familiar with HTML and server templating, yet powerful enough to handle complex, interactive scenarios. By centralizing logic, layout, and styles, Marko simplifies the process of building and maintaining large-scale web projects.

### 00:42:00 - Streaming Basics and Automatic Partial Hydration  

Stepping through a simplified Marko setup, the speaker shows how partial hydration works seamlessly. Marko identifies only the pieces of the template that truly need client-side interaction, sending those portions as small, focused scripts. Everything else is rendered on the server and shipped as static HTML. This means a page can load almost instantaneously, with minimal blocking, and only fetch interactivity for the elements that require it.

He demonstrates how Marko’s streaming model begins sending HTML to the browser without waiting for all data to be fetched. This eliminates the classic “white screen” issue, as placeholders render quickly while the server continues to push chunks of content. By the time data arrives, it slots into the correct positions, achieving a seamless transition for end users. Such an approach was groundbreaking back in 2014 and remains cutting-edge today.

### 00:48:00 - Hacker News Example: Zero JavaScript on Static Pages  

To cement the concept, the host walks through a Marko-based Hacker News clone. He illustrates how, for pages that only display content, the framework ships no JavaScript at all. Traditional solutions might automatically hydrate every part of the page, but Marko sends only a tiny script if there is a placeholder transition, or entirely omits scripts for purely static content.

He emphasizes the natural experience of simply writing HTML templates, letting Marko’s compiler sort out which sections need to become interactive. By focusing on real examples, such as listing Hacker News articles, he reveals how easily Marko can handle dynamic server data without incurring the overhead of client-side rendering. This clarity showcases Marko’s core philosophy: only pay for interactivity where it’s actually needed.

### 00:54:00 - Comparisons to Svelte, Next.js, and Script Sizes  

The conversation shifts to comparing different frameworks’ approaches to hydration and JS bundles. The speaker highlights how Next.js or Svelte-based Hacker News demos typically serve a larger JavaScript payload, since those frameworks often re-hydrate entire pages. Marko, on the other hand, ships no or minimal JS until certain interactive elements appear, often reducing data transfer dramatically.

He provides numerical examples of script sizes, showing that Marko’s code for a static page is effectively zero bytes, whereas other frameworks can climb into tens or hundreds of kilobytes. By underscoring these differences, he underscores Marko’s unique value proposition for sites that want minimal overhead while still enabling rich features wherever necessary.

### 01:00:00 - Benchmarks and Server-Side Performance  

Pivoting to performance metrics, the speaker references the JS Framework Benchmark, noting Marko’s impressive server-rendering speed—often outpacing React and others in raw SSR tests. While Marko may not top the charts in raw client-side manipulation speed, its streaming-first approach significantly cuts down initial load time and data overhead, which can matter more for real-world scenarios.

He points out that many benchmarks favor single-page app optimizations, focusing on large-scale DOM updates or fast reactivity. Marko excels in early paint and fast time-to-interactive, especially for content-heavy sites. This chapter underlines the idea that “fast” depends on context, with Marko shining where page load and minimal script transfers are paramount.

### 01:06:00 - Lighthouse Tests: Marko vs. Remix, Next, and Solid  

The speaker runs through Lighthouse or similar page-speed metrics, examining how frameworks measure up in categories like First Contentful Paint and Time to Interactive. He notes that while frameworks like Solid and Svelte perform well in hydration, Marko’s streaming approach often records near-instant readiness for basic interactions. This is particularly beneficial in mobile or lower-bandwidth contexts.

Contrasting that to Next.js, even with the latest server components, Marko still pushes the boundaries by shipping only what’s absolutely necessary. He insists this factor is critical for e-commerce or extensive content sites, where a second or two of delay can mean significant user abandonment. The talk stresses how each framework tailors its trade-offs, but Marko’s partial hydration remains a standout solution.

### 01:12:00 - Multi-Page Apps and Minimal JavaScript  

Here, he delves deeper into the multi-page app (MPA) approach Marko naturally favors, noting that it’s often dismissed by those accustomed to single-page app architectures. He clarifies that Marko’s streaming advantage and zero-JS pages work best where large portions of a site are static or only subtly interactive. For app-style projects with complex state transitions, other solutions might be more direct.

Yet, he highlights how Marko still handles scattered interactive widgets via partial hydration, letting developers craft entire pages with standard HTML while sprinkling in functionality. The speaker encourages listeners to match the tool to the project’s needs: if minimal overhead and lightning-fast page loads are the top priority, Marko’s MPA approach can be unbeatable.

### 01:18:00 - Marko 6 and the Tags API for Reactivity  

The discussion shifts to Marko 6, introducing the upcoming Tags API designed to enhance reactivity. The speaker explains how many modern frameworks rely on reactivity to minimize unnecessary updates, referencing Svelte’s compiled approach and Solid’s fine-grained system. Marko’s new syntax merges server-friendly design with these state-driven patterns, aiming to keep code easy to analyze and split for hydration.

He underscores that Marko 6 will use special tags for stateful operations like `<let>` and `<effect>`, reminiscent of hooks but deeply integrated into Marko’s compilation pipeline. By doing so, the compiler can isolate exactly which parts of a component need to run on the client. This meticulous separation underpins Marko’s push toward more advanced hydration without sacrificing performance or simplicity.

### 01:24:00 - Custom Hooks, Local Storage, and Co-Located Logic  

Building on the Tags API, the speaker showcases how developers can define their own custom tags to handle tasks such as localStorage or other browser-specific behaviors. By encapsulating that logic into a tag, code remains close to the template and straightforward to maintain. This approach contrasts with React, where developers often split code across many hooks and components, which can become unwieldy.

He points out that in Marko’s new paradigm, conditionals, loops, and event listeners can live right alongside the markup they affect. Refactoring becomes simpler since entire snippets of logic can be cut and pasted as a unit. The speaker extols this workflow for teams that demand clarity and maintainability, seeing it as a more intuitive bridge between traditional server templates and modern reactive functionality.

### 01:30:00 - The Drive Toward Subcomponent Hydration  

Next, he outlines the concept of subcomponent hydration, a technique that targets client code only where reactive state actually changes. Rather than hydrating an entire tree, Marko can break components into granular parts, ensuring minimal overhead. This strategy promises to cut down on repeated work and data transfer, especially if only a small portion of a page is genuinely interactive.

He connects this to the eBay use case, where product listings or search results might be static, and only small interactive widgets—such as toggles or cart functionalities—require hydration. The new Tags API lets Marko pinpoint precisely which variables must synchronize across server and client, offering a refined approach that can scale to thousands of pages with consistent performance gains.

### 01:36:00 - Fine-Grained Data and “Resumable” Execution  

Here, the speaker explains the depth of Marko’s analysis, noting that it can prune away both code and data that are never touched in the browser. By mapping dependencies at a granular level, the framework avoids sending full JSON payloads or re-fetching data that was already provided by the server. Marko effectively “resumes” from the last known state, sidestepping the conventional hydration cost.

He contrasts this with other so-called resumable approaches, illustrating that Marko’s compile-time knowledge extends beyond merely skipping initial client rendering. Once loaded, the system can continue reacting without re-checking or re-fetching global states. This synergy of server streaming and client reactivity underscores Marko’s innovative path to bridging classic MPA patterns with the efficiency of partial hydration.

### 01:42:00 - Distinctions from Quick and Avoiding Reruns  

Expanding on the resumable idea, the speaker acknowledges Quick’s solution, which similarly defers certain JavaScript until user interaction. Still, Marko’s fine-grained method sets it apart by not re-running entire component code once hydrated. Instead, it updates only local slices of state or UI as needed. He emphasizes that shipping minimal JavaScript is only part of the story: not running extraneous code in the browser matters just as much.

He clarifies that while lazy-loading can sidestep initial load penalties, it often triggers delays on first interaction. Marko avoids that trade-off by focusing on streaming new HTML immediately, while shipping only the relevant event handling. The result is a smooth user experience, even in scenarios where dynamic updates happen sporadically across large sites.

### 01:48:00 - The Future of MPAs and Transitional Apps  

As the session moves into forward-looking topics, the speaker examines the resurgence of multi-page apps, especially as a foundation for robust content sites that still offer interactive elements. He notes an industry-wide trend toward “transitional apps,” combining the best of SSR and client routing. Tools like React Server Components come from one angle, while Marko extends from a strong MPA origin.

He suggests that both approaches could converge in the middle: frameworks embracing streaming or partial hydration from the server side, and single-page app architectures embracing server logic for complex data. The prospect of advanced routing, possibly reusing some SSR ideas, could create a new standard in which pages load swiftly yet remain richly interactive. The speaker underscores that Marko is poised to play a key role in that shifting landscape.

### 01:54:00 - Rethinking Routing and Server Components  

Here, the discussion turns to the complexities of implementing advanced routing in MPAs. The speaker wonders whether future frameworks could refresh only certain page sections while preserving other elements, especially for large-scale applications with many interactive widgets. Achieving that blend of server-sent HTML updates and persistent client-side state is a challenge Marko aims to tackle in upcoming releases.

He references React’s work with server components, acknowledging that while React remains a powerful force, Marko’s more granular approach may offer unique advantages. Since Marko avoids re-running big chunks of code, partial page replacements might be more efficient. Looking ahead, he foresees collaborative efforts or at least parallel innovation, as each project refines its own path to bridging SSR with dynamic client updates.

### 02:00:00 - SSR at Scale and Performance Philosophies  

Focusing back on performance, he reiterates how Marko’s newly refined compilation strategy suits large enterprises. By treating SSR not just as a fallback for slow networks but as a core principle, Marko ensures speed in almost every scenario. He recalls how eBay’s vast user base demands consistently quick loading, no matter the device or location.

He compares this philosophy with competing frameworks that focus on features or developer experience first, sometimes compromising performance. Marko’s stance has always been to serve minimal JavaScript, stream content early, and keep the user’s device from doing unnecessary work. These ideas once seemed niche but have become central to how the ecosystem approaches modern development.

### 02:06:00 - Forms, Mutations, and Beyond  

The speaker briefly addresses how Marko might adopt advanced form handling, noting parallels with Remix and how straightforward Marko’s server-first pattern can make typical data mutation flows. He mentions an experimental form solution that mimics Remix’s progressive enhancement style, although it remains outside Marko’s official documentation.

He highlights that, much like with routing, Marko has the foundations to integrate these features seamlessly. By harnessing streaming and partial hydration, form-based interactions remain quick, secure, and easy to code. The approach is consistent with Marko’s broader goals: cut the complexity of state synchronization, rely on server logic, and only add client scripts when crucial to user experience.

### 02:12:00 - Closing Thoughts and Thanks  

In the final moments, the speaker wraps up by reiterating the synergy between Marko’s philosophy and the broader movement toward performance-conscious development. He encourages listeners to keep supporting initiatives like the State of JavaScript survey, as they help spotlight emerging frameworks and critical ideas. The host also gives a nod to everyone who engaged with the stream, sharing gratitude for their time and interest.

He closes by promising to post the session for later viewing, hinting at future topics he plans to tackle. The sense of excitement is evident: as frameworks evolve, Marko’s server-driven, minimal-JavaScript approach might keep attracting attention from developers looking for more efficient ways to build the web. With that optimistic note, he signs off, capping two hours of in-depth conversation about this often underappreciated framework.