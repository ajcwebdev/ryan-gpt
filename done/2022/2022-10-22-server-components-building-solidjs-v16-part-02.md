---
showLink: "https://www.youtube.com/watch?v=adXqweWZcNA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Components? Building SolidJS v1.6"
description: ""
publishDate: "2022-10-22"
coverImage: "https://i.ytimg.com/vi/adXqweWZcNA/maxresdefault.jpg"
---

## Episode Description

This extended live stream covers SolidJS v1.6, partial hydration, server components, and performance techniques in a wide-ranging technical discussion spanning nearly five hours.

## Episode Summary

This comprehensive session opens by introducing the latest additions in SolidJS version 1.6, highlighting how partial hydration and advanced server components expand the framework’s capabilities. The conversation then shifts to performance topics—ranging from fine-grained reactivity strategies to the nuances of merging props—revealing how different optimizations impact both the development experience and application efficiency. Throughout the single, in-depth discussion, Ryan Carniato examines design trade-offs, compares SolidJS with alternative approaches, and provides insights into the challenges of scaling JavaScript frameworks for real-world use cases. The streamer also explores historical influences, from the evolution of Knockout to modern contenders like Marco and Qwik, tying them back to current architectural patterns. Interwoven are candid observations on the complexities of testing, streaming, and micro-frontend design. By the end, viewers gain a thorough perspective on how these emerging ideas shape the future of web development, underscoring SolidJS’s role in that rapidly changing landscape.

## Chapters

### 02:12:00 - Transition to Broader Framework Comparisons

He then compares how other frameworks, from Next.js to SvelteKit, tackle server and client divides. Next often ships more JavaScript, but remains widely adopted because of its convenient developer experience. SvelteKit’s smaller footprints impress him, but he underscores that neither approach is inherently superior: each has distinct trade-offs.

Further, Ryan revisits how the React ecosystem influenced Solid, pointing out that though the syntax looks similar, the underlying mechanisms diverge. He also mentions how bundling intricacies can overshadow raw library size. By grounding the discussion in real app examples, Ryan provides a holistic perspective on why performance-minded teams might pick partial hydration, while others stick to simpler solutions or known ecosystems.

### 02:18:00 - Progressive Enhancement vs. Full Hydration

Focusing on progressive enhancement, Ryan clarifies that partial hydration should not be confused with feature detection or letting the site degrade gracefully without JavaScript. While progressive enhancement was historically about supporting users with older browsers or disabled scripts, partial hydration is about shipping minimal JavaScript for specific interactive chunks.

He reiterates that shipping less JavaScript does not necessarily mean ignoring modern interactivity. Instead, it’s about reversing the default assumption that you need a client framework for every single piece of markup. Ryan notes how older developers, used to purely server-rendered pages, might see partial hydration as a return to best practices from prior decades, now refined with reactivity and streaming innovations.

### 02:24:00 - Building Toward 2.0 and Ongoing Feature Development

Ryan glances ahead to Solid’s future, hinting at the potential major changes that could prompt a 2.0 release. He explains how updates like partial hydration, new transitions, and advanced bundling reflect the tail end of 1.x iteration. The newly formed working groups, comprising bright minds in reactivity theory, explore next-generation approaches that might underpin bigger leaps in the coming years.

He appreciates that additions like out-of-order streaming or improved context bridging can arrive in minor releases, thanks to layering the new around stable core behaviors. Solid’s approach to versioning, focusing on backward compatibility whenever possible, means developers can adopt these sophisticated features at their own pace. The stream’s sense of momentum points to a thriving ecosystem where cutting-edge concepts continually filter into stable releases.

### 02:30:00 - The Role of Testing and Community Contributions

Ryan notes that testing remains a key area for further exploration, inviting community involvement. A significant portion of Solid’s user base seeks robust testing libraries comparable to what React or Vue provide. He acknowledges that while snapshot tests serve well for compiler development, more conventional testing libraries are essential for widespread production readiness.

He also commends community contributors working on dev tools, test frameworks, and other supporting libraries. This open-source collaboration ensures no single person becomes a bottleneck, letting the project grow more rapidly. By encouraging volunteers to help fill gaps, Ryan positions Solid as an inclusive framework that welcomes outside expertise, from testing to advanced reactivity research.

### 02:36:00 - Practical Form Handling and Remix Parallels

Returning to real application scenarios, Ryan highlights how form handling patterns in Solid Start can resemble those found in Remix, with multi-action routes and progressive submissions. Though some structural differences exist, both frameworks aim for developer simplicity around forms and server calls. A discussion surfaces about how partial hydration interacts with form-based transitions, possibly further optimizing round trips or revalidation steps.

He clarifies that while Solid Start shares conceptual ground with Remix, it maintains distinct approaches to routing, data loading, and reactivity. Still, these parallels help developers familiar with the Remix world feel comfortable adopting Solid Start. Through small code examples, Ryan shows how typical patterns—like fetchers or repeated dynamic routes—fit neatly with partial hydration, preserving the smooth user experience of an SPA.

### 02:42:00 - Observing Qwik and Resumability Advances

Here, Ryan turns briefly to Qwik’s approach: shipping nearly zero JavaScript upfront, then progressively loading code when user actions demand it. He admires Qwik’s granularity but wonders if the overhead of certain complexities might not always pay off. By contrast, Solid pursues a partial hydration method that already feels comfortable to many developers, potentially hitting a sweet spot for more general-purpose use.

He stresses that each framework’s architectural goals differ—Qwik aims for near-infinite decomposition, while Solid focuses on measured partial hydration plus streaming. Ryan notes that these choices may converge in interesting ways in the future. The mention of “resumability” underscores that there are multiple frontiers of innovation, from server components to possible new transitions that allow for zero re-renders on client side initialization.

### 02:48:00 - Micro-Frontends and Stream Stitching

Ryan addresses micro-frontend architectures, explaining that big companies often adopt them for organizational reasons—teams can operate independently on different sections of a site. However, micro-frontends frequently bloat client bundles if poorly implemented, especially when each segment duplicates frameworks or code. He references eBay’s partial streaming solutions, mentioning that the server can piece together multiple fragments before sending them to the client.

He describes a recent Cloudflare experiment, which used multiple workers stitching content streams. He parallels it with eBay’s own approach, noting that thoughtful architecture prevents the pitfalls of naive micro-frontend adoption. By combining minimal hydration with server-side orchestration, one can preserve a cohesive experience without saddling the client with countless duplicated libraries. This synergy again points to deeper integration of partial hydration within enterprise architectures.

### 02:54:00 - The React “use” RFC and Community Reactions

The conversation shifts toward React’s newly proposed “use” RFC, which suggests a simpler way to consume promises in React. Ryan observes that while it garners hype—reminiscent of the excitement around React hooks—it is only part of the puzzle. True data caching and concurrency aspects remain slated for another RFC, meaning teams may still rely on libraries like React Query for a complete solution.

He praises the enthusiasm driving the conversation, contrasting it with the muted response React 18’s streaming features received. By analyzing how “use” might integrate with transitions or server components, Ryan underscores that the discussion signals a renewed energy in React’s ecosystem. It parallels Solid’s direction, albeit with different underlying constraints. Overall, the synergy indicates that community appetite for simpler data-handling patterns is stronger than ever.

### 03:00:00 - Possible Outcomes for React and Next.js

Ryan weighs the possibility that Next.js may adopt these experimental features quickly, potentially giving Next an early advantage. Some in the community worry about favoritism or “collusion,” since key React core team members now work at Vercel. Yet, Ryan suggests that official open-source proposals likely keep the playing field relatively level, though he remains curious to see how frameworks like Hydrogen or Remix adapt.

He reiterates that if server components become truly ubiquitous, solutions like partial hydration might converge with React’s direction. Nonetheless, Solid’s smaller, more flexible core might adapt faster to emerging patterns. The conversation hints at an ongoing race to refine how data loading, suspense, transitions, and reactivity shape front-end architecture over the next year or two.

### 03:06:00 - Async Components and Syntax Nuances

Ryan muses on how embedding `async` or `await` within components feels at odds with purely declarative approaches. Despite that, server components in React may leverage this pattern to avoid repeated re-render cycles. Similarly, advanced frameworks can compile generator functions or awaited calls to produce partial streams without entire re-executions.

He points out how Solid currently sidesteps these complexities by focusing on signals and resources, but he remains open to potential expansions. The subtle question is whether explicit `await` is friendlier than signal-based data fetching, or if it complicates mental models. Ryan wraps this thought by noting that different frameworks will continue experimenting, leaving open the question of which pattern will finally dominate.

### 03:12:00 - Revisiting Cashing Layers and React Query

Ryan pivots to data caching, acknowledging that the “use” hook alone cannot solve caching challenges. He references TanStack Query (React Query) as a prime example of a robust data layer. The frameworks themselves often prefer to remain low-level, letting specialized libraries handle timeouts, retries, or stale-while-revalidate patterns. He outlines how Solid tries to stay minimal, focusing on reactivity primitives instead of baking in a universal caching approach.

He warns that caching is intricate, requiring policy decisions that vary by project. Many see “use” as an official endorsement of suspense-based data loading, but the practical caching engine is still an open question. Ryan underscores that these are standard growing pains in an evolving ecosystem, recalling how Redux once dominated data handling in React’s early days before more specialized libraries emerged.

### 03:18:00 - Experimental “Use” in Solid and Resource Wrappers

Ryan reveals that some developers in the Solid community are tinkering with a “use” hook for Solid, effectively wrapping resources. He references short code snippets posted by contributors, demonstrating that minimal lines of code can replicate the basic promise-throwing mechanic. Yet, these experiments highlight that hooking into advanced Solid features—like partial hydration or out-of-order streaming—requires more than just a single function.

He sees potential in bridging developer mindshare from React’s new “use” concept. However, aligning it with Solid’s fine-grained principles or caching structures calls for deeper design. The discussion underscores that even if “use” can replicate a quick data read, it may not handle advanced cases without additional orchestration or a resource-like system. Ryan suggests continuing exploration to see if the user experience can remain simple while harnessing full Solid reactivity.

### 03:24:00 - The Compiler Perspective: Inlining and Transformations

Ryan discusses how frameworks like Marco or Qwik rely on heavy compilation strategies to expand or transform `async` code. Instead of letting the runtime interpret multiple awaits, the compiler can inline calls or generate partial data structures. This approach yields more efficient code but can require advanced build pipelines. Solid also employs compilation to handle JSX and reactivity, though to a lesser extent.

He speculates on whether future versions of Solid might introduce generator-based streaming or partial re-renders by transforming `async` components. The question remains whether developers find such syntax comfortable or if it veers too far from the synchronous illusions that define typical reactive code. The tension mirrors a broader industry conversation: how to unify the benefits of server-driven logic with the fluidity of client interactivity, ideally without alienating developers.

### 03:30:00 - Innovations at Conferences and The State of SSR

The conversation touches on upcoming conferences, including Next.js Conf and broader JS events, which often unveil new SSR or streaming features. Ryan cites how these gatherings spur competition among frameworks to show off the latest breakthroughs in hydration, server components, or asynchronous data flows. He jokes that surprise announcements keep everyone on their toes, rapidly evolving best practices.

He also underscores that actual throughput improvements hinge on more than just code transforms—underlying Node, Deno, or Bun performance can overshadow the speed of the rendering itself. By referencing his own benchmarks, Ryan notes that sometimes the differences among frameworks pale beside the cost of bridging request-response objects or encryption overhead. The broader takeaway is that SSR performance remains a multi-layered challenge, requiring collaboration between frameworks, runtimes, and server infrastructure.

### 03:36:00 - WASM, Rust Frameworks, and the Wider Ecosystem

Ryan takes a moment to celebrate the progress of Rust-based frameworks like Leptos, which have narrowed the gap with Solid in raw DOM performance. He admires their approach to adopting fine-grained reactivity, which can match or exceed JavaScript’s speed in certain benchmarks. However, he acknowledges that leveraging WASM in the browser is not always straightforward, especially once you account for string encoding overhead or bridging.

He also references Surplus and S.js, historical libraries that preceded Solid in topping performance charts. Their legacy underscores that advanced DOM manipulation strategies have been around for years, though only in small circles. As the conversation broadens to encompass Rust, Bun, and Deno, Ryan reaffirms that the future of front-end performance likely spans multiple languages and technologies, all converging around high-level reactivity ideas.

### 03:42:00 - Reflection on Code Quality and Project Organization

Ryan relays a recent comment from ThePrimeagen about Solid’s remarkably concise code structure. Jokingly, he says he writes code “like a minifier,” compressing logic into fewer AST nodes than typical. This comedic aside underscores how Solid’s internal architecture remains small relative to other popular libraries, a testament to its carefully chosen design patterns.

He acknowledges it’s not necessarily a universal best practice, but it reveals how an obsession with minimal overhead manifests even in code style. Ryan expresses gratitude to a vibrant open-source community, which helps maintain code clarity. Together, they push Solid forward without letting complexity bloat the core codebase. It also highlights the evolution from coffee script influences, showing that unconventional beginnings shaped Solid’s distinctive design.

### 03:48:00 - Steve Sanderson’s Talk and Knockout’s Influence

Shifting focus, Ryan praises Steve Sanderson (creator of Knockout) and his historical perspective on web frameworks. Sanderson’s talk traced everything from the earliest Java-based servers to modern client architectures. Ryan was excited to see Solid mentioned alongside major frameworks in these retrospectives, reflecting recognition of Solid’s distinctive approach.

He notes how knockout’s reactive binding model set an early foundation, overshadowed by React’s virtual DOM popularity. However, frameworks like Solid prove that direct reactivity can remain relevant and advanced. Ryan shares personal admiration for Sanderson’s work, which continues to inspire frameworks bridging server rendering and minimal client overhead. The mention underscores how a vibrant community stands on the shoulders of earlier pioneers.

### 03:54:00 - Future Outlook for Collaboration and Innovation

In this segment, Ryan envisions the near future where frameworks could share certain adapters and tools, hinting at cross-project collaboration. He references potential collaborations between Nuxt and Vite ecosystems, forging universal solutions for aspects like environment-agnostic streaming or platform adapters. This synergy might reduce duplicated effort, letting each framework focus on unique features, like partial hydration or transitions.

He emphasizes how these shared libraries underscore a more collaborative era in JavaScript, where competition pushes everyone forward, yet fosters beneficial standardization. Ryan sees a time when large sections of SSR, bundling, or transitions are solved collectively, leaving frameworks free to differentiate on reactivity style, developer experience, or specialized optimization. It’s a hopeful outlook of synergy among open-source ecosystems.

### 04:00:00 - Revisiting Micro-Frontends and Cloudflare Demo

Ryan returns to micro-frontends, referencing advanced demos from Cloudflare that stitch multiple content streams from distinct edge workers. He compares it to eBay’s approach with Marco, streaming HTML fragments that combine into a coherent page. While micro-frontends historically conjure images of bloat, these streaming architectures—backed by partial hydration—could allow separate teams to contribute distinct fragments without overloading the client.

He points out that frameworks like Solid, Qwik, or Marco can easily adapt to streaming. The real question lies in how to manage the shared or duplicated code across fragments. A naive approach leads to inflated payloads, negating performance gains. With carefully orchestrated caching, server-side composition, and minimal hydration, micro-frontends may finally achieve their original promise of independent development teams working on genuinely modular site sections.

### 04:06:00 - Balancing Real-World Constraints and Vision

Here, Ryan underscores that partial hydration, streaming, and micro-frontends are not academic exercises. They stem from practical constraints faced by large organizations reliant on SEO or lean devices. He suggests that even smaller sites can benefit from these concepts if performance or cost saving is top priority, though the added architectural overhead may be unnecessary for simpler apps.

He concedes that each technique demands more planning and can complicate debugging. Developers must weigh if the payoff in speed or resource usage justifies the complexity. He sees the direction as unstoppable—improvements in caching, bundling, and context bridging will only make partial hydration more seamless. Over time, he expects that advanced solutions will look as natural to future developers as basic SSR does today.

### 04:12:00 - Q&A on Patterns and Best Practices

Ryan addresses questions about multiple advanced patterns in chat, including concurrency limits, transitions, and how partial hydration interacts with progressive forms. He reiterates certain points about adopting an app-first mentality while leveraging server-driven HTML injection. The chat reveals developer curiosity on bridging signals across nested routes and validating forms without shipping entire frameworks.

He explains that these approaches revolve around controlling reactivity at the lowest possible level. By letting the server handle route changes and expansions, the client focuses on truly interactive parts. Ryan advocates for small, composable building blocks rather than massive monolithic frameworks. He wraps up with optimism for solutions that keep code predictable and data flows direct, encouraging the audience to continue experimenting.

### 04:18:00 - Reflecting on Edge Hosting and Ecosystem Tooling

In this segment, Ryan comments on broader hosting providers like Netlify, Vercel, and Cloudflare. He notes how “edge” hosting can magnify partial hydration’s advantages, streaming content from servers geographically close to the user. Yet, supporting every platform remains a challenge. He highlights that Solid’s adapters for Node, Cloudflare, or Deno each require meticulous handling of streaming, request objects, and caching.

He celebrates the community’s progress, noting that official or community-driven adapters fill in the gaps. Because SSR is paramount for many Solid Start users, ensuring robust edge deployment stands as a top priority. Ryan closes the segment by advising that while edge hosting can further cut latency, fundamental optimizations like shipping less JavaScript remain critical across all environments.

### 04:24:00 - Revisiting React “Use” and Potential Limitations

Ryan circles back to React’s “use” RFC, explaining that its simplicity is both a strength and a weakness. Without a caching layer, “use” might lead to naive repeated fetches on every render if not managed properly. He draws parallels to the universal confusion around hooking promises into the React lifecycle, highlighting that top-level definitions or memoization become essential.

He suspects advanced libraries or future React add-ons will fill in the missing pieces, turning “use” into a robust solution. Still, the initial hype around a single function that “throws a promise” requires tempered expectations. He sees excitement as a positive sign, driving deeper discussions on data loading best practices, but warns that real-world apps require more than just minimal syntax sugar.

### 04:30:00 - Finer Points of Bundling, Caching, and Islands

Ryan contemplates how bundlers can further optimize partial hydration setups. By splitting each island into a separate chunk and preloading them only on demand, developers approach Qwik-like granularity. However, smaller chunks multiply network requests, so bundlers must find the right balance. He cites existing advanced solutions, but each has trade-offs between request overhead and code reusability.

He then describes how caching on the server or CDN can accelerate repeated fetches, particularly for static sections. With partial hydration, any purely static region can be fully cached, whereas dynamic interactive zones get minimal overhead. Once again, Ryan ties these complexities back to the idea that real performance wins come from architectural refinements—picking an approach that marries streaming, caching, and minimal shipping of JavaScript.

### 04:36:00 - Developer Tools and Embracing Complexity Gradually

The stream touches on developer tooling: Ryan teases that as partial hydration matures, watchers and dev tools must adapt to identify islands and track state across them. He wants to ensure debugging remains straightforward even as the rendered output dynamically swaps or streams. He imagines the next generation of dev tools that visualize layered reactivity, server boundaries, and context transitions.

He reassures novices that they can start with simpler patterns, only delving into advanced partial hydration once they understand basic signals and SSR flows. Ryan stresses that Solid’s incremental approach means advanced techniques remain optional. This fosters an environment where the framework can push boundaries for power users without alienating those seeking a more conventional setup.

### 04:42:00 - Practical Examples: LiveView and Real-Time Updates

A chat question prompts Ryan to look briefly at Phoenix LiveView or LiveViewJS approaches, which rely on server-pushed HTML over WebSockets. He notes that partial hydration is conceptually adjacent, but frameworks differ on whether interactive logic resides mostly on the server or splits with the client. He acknowledges that websockets can simplify certain real-time updates, but can also demand heavy server CPU usage if many connections remain open.

He concludes that, while these solutions share some conceptual overlap, they also diverge significantly on implementation details. The repeated theme is that partial hydration sets the stage for even more elaborate server-client interplay, especially if reactivity extends beyond typical HTTP lifecycles. Ryan sees each approach—be it LiveView or advanced island streaming—carving a unique niche depending on developer preferences and hosting environments.

### 04:48:00 - Final Thoughts and Stream Wrap-Up

In the concluding minutes, Ryan summarizes the entire discussion, reiterating how SolidJS 1.6’s partial hydration and refined server components bolster performance while preserving developer-friendly patterns. He hints at ongoing experimentation, from streaming to persistent island states, praising the continuous community feedback that shaped these features. He also mentions upcoming events, including an in-person conference trip to Warsaw and a planned Frontend Masters course.

He encourages those watching to continue exploring partial hydration demos, whether the Hacker News example or more sophisticated apps. Thanking viewers for their time and interactions, Ryan logs off with a reminder that the conversation around these topics will accelerate as more frameworks release competing or complementary solutions. His final sign-off encapsulates the spirit of an ever-evolving JavaScript community, always pushing front-end boundaries further.