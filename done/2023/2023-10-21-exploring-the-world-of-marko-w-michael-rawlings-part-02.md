---
showLink: "https://www.youtube.com/watch?v=n3YtxzHRjI0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring the World of Marko w/ Michael Rawlings"
description: ""
publishDate: "2023-10-21"
coverImage: "https://i.ytimg.com/vi/n3YtxzHRjI0/maxresdefault.jpg"
---

### 1:36:00 — Addressing Async Complexity

They spotlight Marko 6’s remaining hurdles, especially around async management. Michael confesses he initially envisioned a concurrency model more refined than what React or Solid adopt, but practical challenges remain. Streaming from the server to the client while fine-grained signals update at the component level demands intricate solutions for boundary cases. They joke about the labyrinth of possible approaches, admitting that each attempt has exposed new edge cases or performance implications.

Listeners see how crucial these async considerations are for Marko 6 to truly surpass existing SSR-plus-hydration frameworks. Some solutions might mimic concurrency patterns or rely on advanced control flows, potentially complicating the developer experience. The Marko team aims to maintain straightforward usage while tackling deeply complex optimization layers. Despite ongoing work, they remain optimistic, pointing to Marko’s track record of carefully evaluated changes. The chapter ends with renewed commitment to refining these async strategies before Marko 6’s official release.

### 1:42:00 — Serialization and Signals in Focus

As the conversation expands, they consider how signals and advanced reactivity tie into data serialization. The host emphasizes that frameworks like Quick champion “resumability” but face challenges in avoiding either heavy serialization or replaying too much server logic on the client. Michael explains how Marko’s compiled signals reduce the overhead by analyzing dependencies. This yields a targeted synchronization approach that avoids re-executing entire component trees.

A key takeaway is that reactivity can be a double-edged sword: done naively, it slows everything with overhead; done intelligently, it yields big performance wins. Marko’s deep compiler pipeline is central to storing only essential states, ensuring minimal data is shipped. Even so, corner cases arise when objects or functions intersect with shared references. They acknowledge that guaranteeing perfect serialization can be elusive. Nevertheless, the team’s incremental solutions aim for robust defaults that streamline developer workflows without sacrificing speed.

### 1:48:00 — No-Build Trends and Industry Shifts

The host briefly touches on the recent “no-build” movement championed by certain developers aiming to return to simpler setups without bundlers or compilers. They contrast that philosophy with Marko’s deeply integrated compile step, concluding that advanced features often require build tools. While no-build can work for straightforward sites or prototypes, large applications typically benefit from code-splitting, minification, and streaming optimizations. Marko’s runtime synergy with Vite exemplifies how modern bundlers have become more approachable and faster, reducing friction rather than adding it.

They mention that advanced performance patterns, such as partial hydration and modular server code, inherently rely on bundling logic. Real-world stories from eBay illustrate the complexities of asset management and caching across global infrastructures. Although a no-build approach can be refreshing for small or internal projects, it often lacks the refined optimization that major platforms need. The conversation underscores that new developer tools can mask or automate complexities, but rarely make them disappear entirely.

### 1:54:00 — Reflecting on Community Feedback

Questions from the chat keep the hosts on their toes, touching on use cases for e-commerce, enterprise migrations, and the general adoption curve of Marko’s advanced features. The conversation underscores how real-world usage often dictates priorities. Michael shares how feedback from eBay’s engineering teams shapes Marko’s direction, ensuring new features can scale to massive catalogs and high traffic demands. They also applaud the open-source community for surfacing edge cases that might not appear in eBay-centric workflows.

Anecdotes confirm that many developers first encounter Marko through performance success stories—such as rendering speeds or memory footprint advantages—and stay for the simpler syntax. The biggest hurdle is often a perceived lack of brand recognition compared to frameworks like React. By leveraging a robust community, Marko continues to refine docs, examples, and developer experience, helping new adopters gain confidence. As the stream heads into its second hour, the stage is set for broader discussions about overlapping concerns like concurrency and advanced runtime optimization.

### 2:00:00 — Q&A on Concurrency Models and Streams

Diving into concurrency, the host fields audience queries about whether Marko might adopt a React-like fiber model or something akin to data streaming approaches from Quick. Michael clarifies that Marko’s compiler-based reactivity is distinct from a unified concurrency runtime, although partial concurrency might be possible through scheduling. The focus remains on incremental updates without re-running entire components. They note that Marko’s streaming server already does more advanced pipelining than many frameworks, so a separate concurrency layer might only address niche edge cases.

They suggest that concurrency is more pressing in apps with heavy CPU tasks or intricate animations. Marko’s sweet spot lies in efficiently sending and updating only what’s needed, which can reduce the concurrency burden. Listeners curious about advanced concurrency might keep an eye on experimental features, but the team has no immediate plans for a wholesale fiber-like system. Instead, Marko invests in a strong foundation of signals, partial hydration, and compiler analysis to handle large data flows gracefully.

### 2:06:00 — Performance Benchmarks Revisited

The conversation returns to performance benchmarks, an area where Marko historically excelled in server-render speeds. They recall earlier blog posts comparing Marko to React and Vue, showcasing significant gains in throughput. Michael points out that while other frameworks have caught up, Marko’s default strategy of string-based server rendering still maintains an edge over virtual DOM solutions. The host remarks that these benchmarks were once a cornerstone of Marko’s identity, prompting developers to investigate a “hidden gem” overshadowed by bigger communities.

They emphasize that bench tests only capture part of a framework’s story. Production complexities—like caching, network latency, or business logic—can overshadow raw rendering times. Nevertheless, Marko’s approach ensures efficient streaming while letting developers write near-HTML templates. The Marko team remains proud of the framework’s performance pedigree and sees minimal reason to abandon those roots. Future improvements focus on bridging advanced reactivity with streamlined server output, aiming for a well-rounded solution that resonates across both small apps and global enterprises.

### 2:12:00 — Comparisons to HTMX and Simpler Approaches

Chat questions prompt a quick mention of HTMX, a library encouraging server-driven HTML updates with minimal JavaScript overhead. The host acknowledges that while HTMX can achieve certain interactive patterns, it lacks the robust compiler-based ecosystem of Marko. Michael contrasts this with the ability to leverage typed transformations, advanced streaming, and partial re-renders that Marko supplies out of the box. The conversation reiterates that simpler solutions like HTMX may appeal to those rejecting build tools, but sacrifice deeper optimization.

They also consider whether a “reset” toward minimal server pages aligns with Marko’s direction. Michael explains that Marko can appear no heavier than a template engine at first glance, while still unlocking advanced capabilities as needed. In practice, eBay’s global marketplace proves that large dynamic sites benefit from features like client-side segments, advanced caching, and signals-based reactivity. Whether a team opts for basic or sophisticated usage, Marko’s design aims to accommodate incremental feature adoption without rewriting core structures.

### 2:18:00 — The Impact of Business Requirements

Discussion shifts toward how organizational decisions can overshadow technical merit. The host references examples where developers choose React to remain marketable, or rely on popular solutions for perceived safety. Michael notes that Marko’s backing by eBay, while substantial, doesn’t always translate into cross-industry adoption. Yet for certain performance-intensive, SEO-critical sites, Marko becomes an obvious choice. This highlights the persistent tension between brand recognition and genuinely superior solutions.

They emphasize the importance of well-documented success stories. Showcasing the measurable results of Marko in real-world e-commerce helps to dispel misconceptions. Even so, internal company politics and the lure of mainstream frameworks can hinder an objective analysis of Marko’s strengths. The conversation circles back to the idea that large-scale migrations hinge on aligning developer incentives with organizational goals, illustrating how advanced performance features alone can’t drive adoption if the workforce remains unconvinced.

### 2:24:00 — Paths to Adoption and Tangential Technologies

Questions arise about how smaller teams or startups might integrate Marko without eBay’s institutional resources. Michael suggests that Marko Run has lowered the barrier to entry, making early experiments almost as simple as picking up a competitor’s framework. He advises building prototypes and measuring key metrics—like time to first byte or overall interactivity—to persuade stakeholders. The host adds that many developers discover Marko organically when searching for SSR solutions that minimize client-side scripts.

They also mention the potential synergy with edge deployment platforms, real-time databases, and microservices. Though Marko typically focuses on HTML-first rendering, combining it with serverless or distributed backend models can amplify performance gains. They underscore that Marko’s design doesn’t restrict architecture choices, letting teams plug in new data pipelines or caching layers without rewriting the front end. As the segment concludes, they reaffirm that Marko can be as simple or as sophisticated as the project demands.

### 2:30:00 — Misko, Quick, and Parallel Evolution

The host brings up Misko Hevery’s work on Qwik, another attempt at drastically reducing client-side overhead. Michael explains that when he proposed Marko’s resumability idea, Qwik was quietly developing the same concept, though neither project initially realized the other’s progress. This parallel innovation highlights the community’s broader push for post-hydration techniques, aiming to shrink JavaScript bundles. Marko’s implementation differs, leaning heavily on compiler insights rather than hooking logic to lazy-loaded code chunks.

They comment on how concurrency, signals, and partial rehydration are converging themes across frameworks. Qwik’s “lazy execution” complements Marko’s “compiled islands,” but each has unique trade-offs. Michael reiterates that Marko’s main edge lies in treating HTML as canonical, letting the compiler optimize how the final script tree shapes up. As more frameworks explore similar territory, these techniques may gradually become new industry standards, reducing the gulf between server-driven approaches and spa-like experiences.

### 2:36:00 — Rapid-Fire Questions from the Chat

A flurry of audience questions addresses topics like Marko’s bundling with older solutions like lasso, the shift to Vite, and standard performance patterns. Michael clarifies that lasso once handled on-demand bundling for eBay’s massive permutations, but scaling complexity drove them toward Vite’s modern toolchain. The host interjects with humorous asides about how developer preferences constantly shift, making it hard to unify entire codebases under a single solution.

They note that partial bundling can still be achieved with Vite if carefully configured, although the recommended approach is typically simpler chunk splitting. The conversation underscores that the JavaScript world is replete with bundling strategies. Marko remains nimble enough to adapt, leveraging the plugin ecosystem when specialized needs arise. By fielding these direct chat questions, the duo underlines Marko’s current compatibility posture and future plans, ensuring the stream stays dynamic and connected to developer interests.

### 2:42:00 — The Meme Artist Side of Michael

The mood lightens as the host praises Michael’s penchant for creating humorous memes within private chats, some of which found their way onto social media. The whimsical side of the Marko team surfaces, showing the collaborative, informal culture that surrounds open-source projects. The host shares a few anecdotal examples, describing how internal jokes often become a coping mechanism when tackling complex compiler or migration challenges.

Michael chuckles about intentionally blending comedic relief with the serious nature of framework development. The memes range from web framework comparisons to playful commentary on in-house politics. While coding can be intense, creativity extends beyond software into community-building. Their banter underscores that behind every high-level library or framework is a group of real people keeping the energy and morale alive with lighter moments. This personal dimension helps cultivate an approachable environment for contributors at all levels.

### 2:48:00 — On Building for the Long Haul

Michael comments on the cyclical nature of front-end technology, noting that many older innovations reappear under new names as the ecosystem learns and evolves. Marko’s trajectory exemplifies this, embracing streaming, partial hydration, and advanced compilers long before they were mainstream. Modern hype around “no JavaScript” or “no hydration” resonates with strategies Marko has employed for years. The host points out that Marko’s longevity and ongoing maturity validate its choices, even if external recognition lags behind louder frameworks.

They muse on how organizations can future-proof their stacks by selecting tools that adapt gracefully over time. Building upon a robust compiler can smooth transitions between new rendering techniques or protocol changes. Michael adds that Marko’s gradual expansions stem from learning real-world lessons through eBay’s demands, ensuring each leap forward is grounded in practical use. The conversation underscores that building for the “long haul” can spare developers frantic migrations, ultimately benefiting both product stability and the user experience.

### 2:54:00 — EBay-Internal Politics and Legacy Constraints

Reflecting on eBay’s scale, Michael describes how internal teams sometimes favor well-known frameworks like React purely for recruitment or simpler knowledge transfer. Even though Marko was tailor-made for eBay’s requirements, pockets of the company still experiment with React or Angular. This situation highlights the inertia that large enterprises face, where developers gravitate toward widely recognized skill sets. The host commiserates, sharing that organizational politics often overshadow purely technical arguments.

Yet eBay’s continued investment in Marko shows a deep institutional belief in its performance and maintainability. The framework remains the default for new projects, supported by a central team ensuring consistent upgrades. While splinter groups occasionally venture into React-based solutions, the host and Michael see Marko’s track record sustaining it over time. This underscores that technology choices are rarely black-and-white and often hinge on leadership buy-in, developer sentiments, and long-term ROI considerations.

### 3:00:00 — Handling Data Access and Forms in Marko Run

Attention shifts to Marko Run’s approach for handling APIs, forms, and data. They compare conventional patterns in Next.js or Remix, showing how Marko Run’s routing conventions naturally accommodate REST endpoints or specialized request handlers. With minimal JavaScript overhead, developers can rely on server-rendered form submissions, using out-of-order streaming for partial page updates. This resonates with those who prefer traditional multi-page flows, updated with modern best practices.

They highlight how Marko’s compilation seamlessly splits client logic only where needed—like when an interactive component demands real-time validation. Simple forms remain fully server-driven, leaving the door open for more intricate setups when performance or user experience demands it. They underscore that Marko attempts to unify these patterns without forcing a single mental model. Listeners see how Marko’s minimal, HTML-like syntax pairs well with form-based data flow, simplifying use cases that might require added libraries in other frameworks.

### 3:06:00 — Tooling Integration: ESLint and Beyond

The conversation addresses how developer tooling integrates with Marko’s specialized file format. Michael acknowledges that teams rely heavily on linting, formatting, and auto-import features. Ensuring ESLint or Prettier handles Marko-specific syntax remains an ongoing effort, though progress has been made. The host references how the Marko language server already supports advanced type checks, further promising synergy with popular code editors.

They outline the challenges of bridging universal lint rules with Marko’s unique tags and directives. A typical JavaScript rule set can throw false positives if unaware of the Marko environment. Nonetheless, community-driven plug-ins expand coverage, and official Marko contributors keep refining the ecosystem. Though not as ubiquitous as React lint rules, Marko’s approach is quickly catching up, offering developers a near-seamless coding experience. This underscores a commitment to ensuring Marko is easily adoptable, even in highly opinionated codebases.

### 3:12:00 — Preloading, Waterfalls, and Suspense-Like Features

They discuss how Marko manages data loading to minimize blocking or multiple round trips—often referred to as “waterfalls.” In older frameworks, waiting on data for each component leads to sequential delays. Marko’s out-of-order streaming and automatic chunk splitting mitigate these issues, letting certain components render partial HTML while others fetch data in parallel. They compare this to React’s Suspense or Svelte’s upcoming runes, underscoring that Marko has tackled such problems at a compiler level for years.

Michael clarifies that Marko 6 aims to refine these features even further, potentially letting developers specify data preloads at the route level. By analyzing the code, Marko can sometimes deduce the minimal data needed. The conversation notes that advanced concurrency or partial rehydration can appear complex in userland, but Marko’s job is to abstract those challenges away. Ultimately, the framework’s streaming architecture and signals system are designed to keep experiences smooth, preventing the dreaded blank screen while data loads.

### 3:18:00 — Server Functions and Action APIs

The talk shifts to the concept of server functions and how Marko might adopt patterns similar to “use server” in Next.js or “action” in Remix. Michael likes the idea of linking a form submission directly to server-side logic without writing boilerplate for endpoints. This could feed into Marko Run’s file-based routing, enabling a smooth developer experience for ephemeral or permanent data updates. The aim is to unify old-school POST submissions with partial reactivity, bridging the best of both worlds.

They toy with solutions involving hashing function references to track them across server and client boundaries. The challenge, however, lies in ensuring stable identifiers across different environments, especially after code minification. Despite these difficulties, the potential reward is high: effortless form handling without explicitly coding client-route transitions. By the end of the segment, listeners have a window into experimental features that could further differentiate Marko from frameworks still reliant on heavier client code or manual server endpoints.