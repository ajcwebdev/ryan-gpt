---
showLink: "https://www.youtube.com/watch?v=iuwqOkH6jKY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring 11ty with Zach Leatherman"
description: ""
publishDate: "2022-08-19"
coverImage: "https://i.ytimg.com/vi/iuwqOkH6jKY/sddefault.jpg?v=62fd39f4"
---

## Episode Description

An insightful conversation about Eleventy, JavaScript-driven static site generation, and modern web development practices, highlighting core concepts, performance considerations, and community engagement.

## Episode Summary

This discussion begins by introducing Eleventy and establishing its place in the static site generation ecosystem, offering historical context on how it emerged from previous solutions like Jekyll. The conversation then moves into how Eleventy approaches templating, data handling, and folder structures, emphasizing the flexibility of JavaScript while highlighting trade-offs with bundlers and other tools. Throughout, performance is a recurring theme: participants compare build speeds, examine methods for optimizing code, and evaluate dynamic vs. static rendering trade-offs. They also reflect on the broader community, addressing topics such as open-source collaboration, project governance, and the evolving ecosystem of frameworks and runtimes. Interspersed are tangential explorations of streaming, edge computing, and pragmatic strategies for managing complex deployments. By the conclusion, listeners gain both a foundational understanding of Eleventy’s philosophy and valuable insights into the broader challenges of modern web development.

## Chapters

### 00:00 - Introduction and Opening Remarks  

In the earliest moments, the host warmly greets viewers and outlines the focus of the session: an in-depth look at Eleventy as a JavaScript-based static site generator. He briefly covers his background in single-page applications, acknowledging a lack of direct hands-on experience with static site generators while expressing enthusiasm to expand his knowledge. This sets the tone for a candid conversation where learning and discovery take center stage.  

Shortly afterward, the guest is introduced: Zach Leatherman, the creator of Eleventy. A friendly exchange follows, with both participants noting their eagerness to explore Eleventy’s capabilities. They touch on broad web development trends, from the shift toward CDN-driven content delivery to the interplay of static and dynamic rendering at the edge. As viewers settle in, the scene is set for a thorough exploration of Eleventy’s origins, features, and future.

### 06:00 - Agency Work and Early Inspiration  

As the conversation continues, Zach recounts his early work at a web consultancy that focused heavily on front-end best practices. Jekyll, a Ruby-based static site generator, dominated much of the team’s workflow, prompting Zach to reflect on its strengths and shortcomings. This phase helps illustrate how a real-world agency environment, with diverse client requirements and tooling preferences, catalyzed the creation of Eleventy.  

Next, they explore the impetus behind choosing JavaScript for Eleventy over other languages. Zach points out his long history with JavaScript and a desire to avoid the overhead of Ruby. He references historical usage of Jekyll, describing the initial pain points that drove him to seek a more direct, JavaScript-focused approach. In this way, Eleventy appears not just as a hobby project but as a practical solution, forged in the demanding settings of client-driven work.

### 12:00 - Introducing Eleventy’s Philosophy  

The discussion shifts toward the philosophical underpinnings of Eleventy. Zach portrays it as a straightforward file transformation tool: it takes HTML or Markdown and outputs HTML, adopting a “less is more” stance that sidesteps heavy frameworks. He underscores how Eleventy aims to facilitate development without forcing complicated single-page app structures by default.  

They then explain Eleventy’s signature inclusivity, allowing multiple templating languages such as Nunjucks, Liquid, and more. This highlights the original agency need, where clients often dictated templating language choices. The open, file-driven approach encourages a style of development that embraces fundamental web concepts—HTML, CSS, and minimal JavaScript—while offering enough plugin flexibility to tackle modern demands.

### 18:00 - Eleventy’s Data Cascade Concept  

At this point, attention turns to one of Eleventy’s standout features: the “data cascade.” They outline how global data, folder-specific data files, and front matter combine into a layered system, ensuring that relevant variables flow naturally throughout templates. This systematic approach reduces repetition and offers clarity, enabling authors to keep track of site-wide metadata while allowing more granular content specifics at the individual page level.  

In illustrating data cascade examples, Zach demonstrates how Eleventy’s directory-based configuration avoids the labyrinth of overly nested config files. By placing a simple `.json` or `.js` file within a folder, developers can apply shared properties, removing the need for repeated metadata in each markdown or template file. As the complexities of dynamic data sources arise, this concept stands out as a key differentiator that aids in maintainable, scalable static sites.

### 24:00 - Deepening Understanding Through a Blog Example  

They showcase a structured blog, beginning with basic Markdown files and culminating in pages generated at build time. In describing how front matter tags group content into collections, the conversation stresses how Eleventy elegantly handles tasks such as blog indexes, tagging, and paginated archives without the overhead of a monolithic framework.  

The host, relatively new to static site generators, questions how this approach works compared to single-page apps. Zach explains that each markdown post transforms into a dedicated HTML file, with Eleventy’s plugin system handling tasks like pagination behind the scenes. By illustrating such common patterns—tag pages, archives, permalinks—the blog example offers clear insight into Eleventy’s developer experience.

### 30:00 - Integrating Dynamic Data and APIs  

The discussion naturally moves to addressing external data sources. Zach mentions Eleventy’s JavaScript data files, enabling developers to fetch content from third-party APIs during build. They highlight a specialized Eleventy plugin, “Eleventy Fetch,” which caches responses for reliability and to avoid rate-limit issues. This technique helps achieve near-dynamic results while preserving a static site’s performance and security benefits.  

They further explore the trade-offs: relying solely on prebuilt pages means data can become outdated, yet it dramatically reduces server overhead. For content that changes frequently, developers can blend the Eleventy build process with serverless functions or edge logic if partial or on-demand regeneration is desired. This showcases the nuanced middle ground Eleventy occupies: comfortable in a purely static realm, yet adaptable when more dynamic data flows are required.

### 36:00 - Eleventy’s Flexibility and Use in Production  

Turning to real-world usage, Zach shares stories about enterprise-level sites. He describes working at Netlify, rewriting some marketing pages from Hugo to Eleventy, and simultaneously learning how to optimize Eleventy for large-scale deployments. The host marvels at Eleventy’s range, from straightforward hobby projects to enterprise marketing sites with dynamic content sections.  

While the host’s experience is more app-centric, he begins to see parallels in how Eleventy fosters modular, structured content. They touch on Eleventy’s performance potential, praising how minimal overhead and careful bundling can serve bigger sites well. This moves the conversation from theoretical features to proven results, underscoring Eleventy’s viability for complex, high-traffic properties.

### 42:00 - Eleventy 2.0 Preview  

A key highlight arrives as Zach teases Eleventy’s upcoming 2.0 release. Although not fully finalized, he reveals that a newly built development server replaces BrowserSync, significantly reducing installation times and potential dependency conflicts. This improved dev server also sets the stage for future enhancements and better local development experiences.  

Zach pinpoints one of Eleventy’s central goals: remaining bundler-agnostic. As bundlers evolve rapidly, Eleventy aims to keep the core project independent of any single tool. This modular mindset reinforces the project’s longevity. Working on Eleventy full-time at Netlify allows Zach to streamline contributions and plan more ambitious features, including deeper ECMAScript module support and potential Dino compatibility.

### 48:00 - Introducing Partial Hydration  

They pivot to a conversation about partial hydration, a technique allowing only select parts of a static site to ship JavaScript. While Eleventy has historically encouraged minimal script usage, a new plugin aims to support interactive islands, bridging the gap between fully static and fully client-rendered experiences.  

Through practical examples, they discuss how an element can stay static until a user interacts with it—like a carousel or form—and only then load the necessary JavaScript. This approach offers performance wins for sites that don’t warrant a massive client-side framework. Eleventy’s partial hydration plugin aims to integrate with multiple frameworks or plain JavaScript, reflecting the project’s open philosophy.

### 54:00 - Web Components and the Island Web Component  

Within partial hydration, the conversation touches on how the Eleventy Islands plugin utilizes a custom web component called `<eleventy-island>`. By intercepting child elements, the plugin can lazy-load those subcomponents only when needed. This technique extends to Web Components, letting them remain inert and skipping costly initialization until certain conditions are met.  

They examine the universal nature of Web Components, praising how standardized DOM features let Eleventy’s plugin remain framework-agnostic. Although many popular frameworks do not rely heavily on Web Components, the approach stands as a flexible, progressive enhancement tool that Eleventy users can selectively adopt. This resonates with the project’s overarching principle: adopt modern patterns without forcing them site-wide.

### 1:00:00 - Comparing to Astro and the Wider MPA Movement  

The host references Astro’s approach, how it shares an MPA mentality with partial hydration. Zach acknowledges Astro’s strengths around component-oriented content sites, but emphasizes Eleventy’s emphasis on file-driven, HTML-first principles from the start. Both solutions converge on minimal client JavaScript and robust static rendering, though they approach the problem from slightly different angles.  

The discussion includes a broader reflection on the increasing popularity of multi-page application solutions, as opposed to universal single-page apps. By focusing on sending down complete HTML and layering interactions sparingly, Eleventy, Astro, and others are all championing a performance-friendly route. The host highlights that these tools feed a growing appetite for simple, fast websites that remain highly accessible and efficient.

### 1:06:00 - Performance Benchmarks and Trade-offs  

Turning sharply toward benchmarks, they discuss the sometimes controversial world of measuring static site generators. Zach references earlier blog posts comparing Eleventy, Hugo, and other tools on large-scale markdown builds. Hugo famously compiles vast numbers of pages at extreme speed, yet Eleventy remains reasonably swift with more flexible configuration in JavaScript.  

They examine how frameworks handle thousands of files, the significance of plugin overhead, and how complex logic might slow or speed build times. The host acknowledges performance can become a deciding factor for large sites. Still, these metrics only tell part of the story: developer experience, ecosystem, and language familiarity are equally important. The conversation underscores that stats alone rarely settle which tool suits every use case.

### 1:12:00 - Community Reception and Open-Source Sustainability  

As Eleventy grew, so did its user base, and Zach recalls how the community’s enthusiasm helped shape new features. In particular, large organizations adopting Eleventy provided valuable feedback, spurring plugin development. The host celebrates that organic synergy, describing how a dedicated user community can effectively steer open-source projects.  

Maintaining Eleventy full-time has also influenced Zach’s perspective on sustainability. Balancing new feature requests, bug fixes, and major version releases requires systematic triage. They praise the support from companies like Netlify, highlighting that a stable day job helps keep open-source maintainers energized rather than burned out. This theme of balancing personal passion and corporate sponsorship resonates throughout.

### 1:18:00 - Eleventy’s Plugin Ecosystem  

From official plugins to community-driven add-ons, Eleventy’s ecosystem has flourished. They detail some widely used plugins, such as the Eleventy Image plugin, which optimizes images at build time, and partial hydration solutions that integrate seamlessly. The conversation clarifies that while Eleventy is minimal at its core, plugin architecture expands capabilities significantly.  

To illustrate, Zach describes how easy it can be to drop a plugin file into a project, bridging functionalities like serverless on-demand image transformations or advanced analytics. The host highlights that this approach preserves Eleventy’s zero-config principle while letting power users incorporate more intricate tasks. The overall message is that Eleventy can remain simple for small sites yet scale gracefully with plugins for enterprise-level demands.

### 1:24:00 - Edge Functions and Serverless Possibilities  

They pivot to talk about serverless functions that handle tasks beyond prebuilt static files. Eleventy optionally can produce minimal code for dynamic image manipulation, open graph previews, or specialized data transformations that only run on certain requests. Zach underscores how these functions can live alongside a static Eleventy build, adding a dash of dynamic behavior without turning the entire site into a server-rendered app.  

The host draws parallels to Netlify’s and Vercel’s function ecosystems, revealing how incremental adoption of serverless endpoints can unify the developer experience. Eleventy doesn’t require an all-or-nothing approach: static pages can handle most content, while serverless functions address real-time data or customized images. This conversation highlights the modern synergy between static generation and ephemeral cloud resources.

### 1:30:00 - Data-Heavy Builds and the Role of Caching  

At this juncture, caching strategies become the focal point. Zach details how Eleventy can fetch large data sets at build time, with a caching layer that prevents excessive API calls. They emphasize the importance of invalidating caches when data changes, balancing up-to-date content with stable builds.  

This approach is especially beneficial when generating hundreds or thousands of pages from remote data sources, be it a headless CMS or third-party API. Proper caching ensures builds remain predictable and time-efficient. The conversation warns about over-reliance on stale data, recommending site owners carefully plan build triggers or partial re-generation approaches if data freshness is critical.

### 1:36:00 - The Host’s Perspective: App vs. Content Mindset  

Drawing on extensive single-page app experience, the host compares app-centric frameworks to Eleventy’s content-centric outlook. In web apps, state management, complex user flows, and real-time interactions dominate. By contrast, Eleventy’s sweet spot lies in sites with heavy textual content, robust templating, and minimal in-page reactivity.  

They discuss what adopting Eleventy looks like for a developer used to React or Vue. While there may be an initial adjustment to multi-page structures and explicit linking, the host admires the clarity of having genuine HTML pages from the outset. This marks a turning point in the conversation, where the host openly reconsiders prior assumptions about static vs. dynamic site approaches.

### 1:42:00 - Internationalization with Eleventy  

They dive into the multilingual features showcased in the example blog. Zach outlines how folders like `en/` and `es/` can contain parallel content, each using directory data files to handle language codes, permalinks, and localized metadata. Eleventy automatically merges these data cascades, generating separate language versions of pages.  

They reflect on how simple directory structures keep translation efforts manageable, while flexible plugins can generate cross-linked navigations. The host notes that in classic single-page apps, advanced routing and extra libraries often become necessary. Eleventy’s approach is different but elegantly covers standard i18n needs for globally targeted content.

### 1:48:00 - Tailoring Eleventy for Design Systems  

Turning toward design systems, they discuss how agencies or large organizations often deliver style guides or pattern libraries as static sites. Eleventy’s approach of building from partial templates into discrete pages suits these pattern libraries, making each component or variation easily shareable.  

Zach highlights how Eleventy’s file-based structure encourages maintaining the design system within the same repository as the final site. When developers update patterns, the build system naturally refreshes each documented page. This synergy reduces friction between designers, front-end developers, and content teams, exemplifying Eleventy’s potential beyond basic blogs.

### 1:54:00 - Insights on Progressive Enhancement  

Zach revisits progressive enhancement, explaining Eleventy’s default approach of delivering fully functional HTML, then layering on JavaScript-based interactivity only where needed. The conversation praises this mindset for accessibility, performance on low-end devices, and resilience when scripts fail.  

They contrast it with single-page app frameworks that load large bundles even for read-only pages. By leaning on the server-rendered baseline, Eleventy fosters a broad audience reach. This approach also integrates well with partial hydration strategies, further underscoring Eleventy’s flexible stance on how much JavaScript is truly necessary for content-focused sites.

### 2:00:00 - Interplay with React, Vue, and Other Frameworks  

Acknowledging developers who prefer a React or Vue ecosystem, they note that Eleventy has paths to incorporate existing components. Some use partial hydration strategies or build custom bridges to re-use front-end code. However, Zach clarifies that out of the box, Eleventy is more about server-side transformations than heavy client-side frameworks.  

They emphasize it’s not a direct competitor to React-based solutions. Instead, Eleventy can shine in simpler marketing sites or documentation portals that only need subtle interactivity. Large React or Vue apps might share tooling but differ in fundamental architecture. This underscores Eleventy’s niche as a flexible companion for lightly dynamic, heavily content-driven projects.

### 2:06:00 - Zach’s Day-to-Day Maintaining Eleventy  

As the session stretches on, Zach shares personal reflections on open-source work. He discusses tasks like triaging issues, reviewing plugin proposals, and refining documentation. Having corporate backing from Netlify alleviates pressure, letting him focus on crucial improvements without juggling a separate day job.  

The host empathizes, recalling his own experiences splitting time between professional obligations and community-driven side projects. They celebrate that dedicated roles allow deeper attention to architecture, performance, and user feedback. This peek behind the curtain emphasizes the sustainability factor in open-source: maintainers flourish when given the time and resources they need.