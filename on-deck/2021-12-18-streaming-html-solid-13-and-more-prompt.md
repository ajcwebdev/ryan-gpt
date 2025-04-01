---
showLink: "https://www.youtube.com/watch?v=8hlo9uPrpr4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming HTML, Solid 1.3, and More"
description: ""
publishDate: "2021-12-18"
coverImage: "https://i.ytimg.com/vi/8hlo9uPrpr4/hqdefault.jpg?v=61bce73e"
---

## Episode Description

A thorough exploration of streaming HTML, upcoming Solid 1.3 features, and the nuanced differences between libraries and frameworks in modern web development.

## Episode Summary

This conversation begins by setting the stage for why streaming HTML has become relevant again, especially for performance-sensitive applications. It highlights that streaming is not a new concept but rather an often-forgotten technique recently revived by frameworks seeking to send visible content to the browser more quickly. The discussion then compares different approaches—client-side fetching, synchronous server rendering, and streaming—to illustrate their distinct tradeoffs, particularly under varied network conditions. Along the way, the speaker addresses upcoming features in Solid 1.3, including improved error boundaries and universal reactivity, showcasing how these enhancements aim to balance user experience with developer flexibility. Throughout, the host underscores that streaming can offer significant performance gains in many scenarios, while acknowledging that it introduces new considerations for error handling, CSS management, and framework interoperability. The conversation concludes with an optimistic view of streaming’s future, suggesting more widespread adoption as frameworks and tooling evolve.

---

## Chapters

### 00:00:00 – Opening Remarks and Topic Setup

In this first segment, the speaker greets viewers and acknowledges a bit of background noise due to a heater, setting an informal and conversational tone. He immediately brings up the main subject of the day—streaming HTML—and explains how he has touched on this before but plans to focus on it more thoroughly this time. There is a sense of excitement and anticipation about clarifying what streaming entails, why it has reemerged, and how it can significantly change the performance landscape of web applications. Initial shout-outs to viewers in the chat emphasize the interactive nature of the stream and set the stage for technical deep dives that follow.

He then touches on some preliminary matters around streaming technology’s complexity, from its historical context to its recent spotlight due to React’s new demos. The speaker hints that streaming involves a few tradeoffs and that it can be oversold if people are not aware of the caveats. He also notes his intention to offer a clearer explanation than in earlier discussions, thanks in part to enhanced visual aids. This brief introduction serves as a road map, letting viewers know that the session will include real-world examples, references to other frameworks, and reasons behind his enthusiasm for streaming.

### 00:06:00 – Current Happenings in the JavaScript Ecosystem

Here, the talk shifts to recent news in the JavaScript world. The speaker references Vercel’s high-profile hiring moves, pointing out community reactions on Twitter and jokes that “everyone” is joining the company. He highlights specific figures, such as Sebastian Markbåge from the React core team, noting that it is remarkable to see a key React developer working outside Meta. This hiring spree underscores the growing investment in DX (developer experience), from tooling to bundlers, indicating an industry-wide push toward frameworks that simplify building and deploying web applications.

Expanding on the React ecosystem, the speaker explains why the shift of senior engineers from one organization to another can reshape a project’s vision. He posits that Vercel’s goals—particularly around user-friendly solutions—may accelerate React’s adoption of features that were previously challenging under Meta’s umbrella. This leads to reflections on how business needs and open-source community interests might blend differently depending on a developer’s employer. By weaving anecdotes from personal experience, the speaker gives broader context to these corporate changes and their implications for React and beyond.

### 00:12:00 – Advances in Asset Loading and Preload Strategies

In this portion, the conversation turns to performance optimizations involving asset preloading. The speaker highlights a Remix engineer’s experiment with sending preload headers for assets, which can effectively begin loading JavaScript and CSS before the HTML fully arrives. This approach captures attention because it helps mitigate a core bottleneck of traditional server rendering—waiting for all data fetching to complete before serving any markup at all. He also briefly contrasts this with the idea of early hints (HTTP 103), a newer status code that allows sending hints to the browser ahead of the final response.

He explains how these preload strategies tie back into the streaming discussion, emphasizing that while streaming lets partial content appear sooner, quickly pushing critical resources can further accelerate time to interactive. The segment underscores that not all applications see the same gains, as each deployment scenario has different infrastructure constraints and resource complexities. Nevertheless, these innovations collectively promise a brighter future for faster page loads, particularly for modern frameworks aiming to balance server-side rendering with dynamic user experiences.

### 00:18:00 – Multiple Page Apps, Islands Architecture, and Routing

Next, the speaker examines the trend toward Multi-Page App (MPA) architectures and concepts like “islands,” popularized by frameworks such as Astro and Qwik. He contrasts them with Single-Page Apps (SPAs), clarifying that MPAs can serve smaller units of interactivity with partial hydration while minimizing total JavaScript. The speaker mentions that some MPA frameworks have implemented Turbo-style routing, where the browser swaps only parts of a page instead of reloading everything, reminiscent of older server-driven approaches with enhanced modern techniques.

He points to solutions like Isles, a lesser-known Astro-like system using Vue-based templates, and how partial hydration works there. The conversation highlights that while these developments are encouraging for performance, they come with complications around asset management. Handling CSS and JavaScript for each island can be tricky, and frameworks must juggle dependencies. Despite these hurdles, there is clear enthusiasm about the potential for distributing application logic more evenly between client and server, leading to more responsive, resource-friendly interfaces.

### 00:24:00 – Single-Page Apps and Partial Hydration Challenges

Diving deeper, the host moves to single-page applications and how partial hydration fits—or struggles to fit—within their architecture. He references work done by Evan You in Vue, specifically around “shell hydration,” which lazy-loads certain interactive elements without requiring a global top-down process for every update. Though the approach works well for shallow documents like a blog or documentation site, it can encounter difficulties with deeply nested routes or complex interactions. The conversation acknowledges that solutions like Qwik or Marko propose innovative ways to hydrate from the inside out.

Furthermore, he points to Vue’s progress in decoupling sections of the DOM from immediate hydration, but also recognizes the inherent tradeoffs: shipping more JavaScript up front vs. waiting for user interaction. The speaker again draws attention to the fact that each approach reveals differences in performance under various network speeds. Ultimately, while partial hydration narrows the gap between MPA patterns and SPAs, the speaker believes more innovation remains before truly seamless incremental hydration arrives across all frameworks and use cases.

### 00:30:00 – Library vs. Framework Debate Resurfacing

In this interval, attention shifts to a recurring conversation around whether certain tools—especially React—are truly libraries or have evolved into frameworks. The host traces the origins of React’s self-labeling as a “library” when it first appeared, contrasting it with Angular’s “framework” identity. He notes how, over time, React acquired features and opinions that arguably place it in framework territory. Svelte’s stance as a language or compiler also complicates the discourse, as does Solid’s emphasis on offering lean primitives rather than a monolithic set of rules.

He underlines that these distinctions often boil down to philosophy rather than strict definitions. Some developers prefer a minimal approach that encourages custom patterns, while others want a more opinionated toolkit that ships defaults like CSS handling. The speaker recalls public discussions where community members debate whether React’s advanced features, such as suspense and concurrent rendering, push it away from a “library” identity. Emphasizing that the boundary can shift based on developer goals, he invites listeners to think carefully about how their choice of tool shapes project workflows.

### 00:36:00 – Primitives and Change Over Time in Large Codebases

Continuing the conversation on frameworks vs. libraries, the speaker reflects on the importance of having robust primitives for long-lived applications. He recounts his years maintaining a startup’s front-end over nearly a decade, explaining how constant adaptation of an existing codebase drove him to build Solid around granular reactivity. Those experiences underscored that no matter how advanced or novel a framework’s features are, the underlying principles have to support incremental, ongoing changes without forcing major rewrites.

He contrasts that with Svelte’s origins in a newsroom, where new apps are spun up quickly and seldom maintained for years, resulting in a different set of optimization priorities. By sharing these perspectives, he underscores that “library” vs. “framework” is not purely academic. Rather, it directly influences how easily a product team can respond to new business demands or incorporate fresh features. He believes that eventually, new frameworks will unbundle once again, returning to smaller, simpler building blocks, reflecting the natural cycle of bundling and unbundling that has recurred over time.

### 00:42:00 – JSX, TypeScript, and Ecosystem Frictions

Around this point, the stream focuses on practical pain points when combining JSX with TypeScript in non-React frameworks. The speaker mentions that by default, many IDEs and editors treat .tsx files as “TypeScript React,” creating friction for libraries like Solid, Preact, or Stencil that also use JSX. He references a GitHub issue requesting that VS Code rename “TypeScript React” to something more generic, reflecting the multi-framework usage of JSX.

He expands on how this editorial detail hints at broader ecosystem norms still heavily influenced by React’s dominance. While new config flags and importSource fields exist, they can be less discoverable for newcomers. These small, sometimes frustrating details reveal the inertia behind naming conventions that revolve around React, but also show a growing awareness that multiple frameworks share the JSX syntax. Overall, this segment demonstrates how historical brand recognition shapes tooling in ways that hamper universal adoption.

### 00:48:00 – Revisiting Streaming’s History and Rediscovery

Having laid groundwork about ecosystem shifts, the speaker circles back to streaming, highlighting how it is often reinvented every few years. He cites the “lost art of streaming” commentary from 2005, explaining how older back-end tech frequently leveraged chunked HTTP responses. Meta’s BigPipe and eBay’s Marko both championed streaming server-rendered HTML in the early 2010s for performance reasons. Still, many modern frontend developers forgot these techniques, favoring client-side frameworks that simply waited for all data before rendering.

He recounts that React has eyed streaming since around 2018, particularly connecting it to the Suspense API. The speaker underscores that large-scale companies with significant performance stakes, like Facebook or eBay, have led these streaming breakthroughs, given their emphasis on faster content delivery for better user engagement and sales. The persistent pattern of “forget and rediscover” around streaming suggests that it is a powerful but tricky concept that demands buy-in from frameworks, tools, and application developers.

### 00:54:00 – Illustrated Explanation of Streaming Mechanisms

In this segment, the speaker employs diagrams and references to show concretely how streaming works. He sketches a sample page with multiple sections—like a header, sidebar, and main content—demonstrating how a server can send partial HTML for each completed chunk. Through placeholders, the browser can display some UI early, while subsequent data or components continue to flow in. He highlights how small script tags appended to the stream allow dynamic insertion of content where placeholders existed.

These visuals highlight the distinction between streaming and waiting for all data to render at once. By letting the client parse and render earlier sections, streaming can overlap network requests with rendering time. The speaker notes that in frameworks like Marko, React, or Solid, the actual mechanism involves chunked HTTP responses plus minimal client-side code to relocate or replace placeholder regions. While superficially simple, the approach transforms the user experience by progressively revealing content rather than holding back an entire page.

### 01:00:00 – Out-of-Order Streaming and Placeholder Usage

Continuing the technical deep dive, the speaker distinguishes between in-order and out-of-order streaming. In some implementations, each section awaits the previous chunk’s completion, ensuring the page builds top to bottom. Others allow any section finishing early to appear immediately, even if a preceding region is still loading. That latter approach generally requires a bit of JavaScript to insert the completed segment in its intended spot, because the HTML arrives out of sequence.

He highlights the complexities this approach creates for search engine crawlers that might not execute JavaScript, meaning some forms of out-of-order streaming can hamper SEO. However, tradeoffs may be worth it for applications with critical performance needs and user experiences that benefit from immediate partial content. The speaker underscores that none of this requires fancy new protocols; it relies on standard HTTP chunked encoding, but must be orchestrated carefully within the chosen framework.

### 01:06:00 – A Sample Solid App for Streaming Demonstration

Here, the host pivots to a practical demonstration using Solid’s example project. He shows how the same application can implement four modes of rendering: pure client-side data fetching, synchronous server rendering, streaming data only, or streaming full HTML. By toggling among these modes, he illustrates how each approach impacts initial load time, loading spinners, and overall perceived performance. Viewers see how quickly pages can appear with streaming, even as subsequent chunks trickle in.

He also notes that in a slower network scenario, synchronous server rendering can beat certain alternatives because it delivers all essential data at once, while in a fast network scenario, client-side rendering can sometimes “feel” quicker. Streaming, however, aims to serve both worlds decently by sending partial content fast and preloading other resources as soon as possible. These examples reveal the fine-grained differences that matter when evaluating how best to handle data-heavy pages.

### 01:12:00 – Performance Profiling Under Various Network Conditions

Building on the demonstration, the speaker runs performance measurements of each rendering strategy under throttled 3G conditions. He compares first contentful paint, largest contentful paint, and overall time to interactive for streaming vs. client- or server-centric approaches. The detailed numbers highlight that streaming often merges the strengths of server rendering (no client fetch overhead) with the fast hydration of smaller payloads, though certain network edges can still produce varied results.

He also draws attention to how potential data waterfalls affect performance differently. For instance, client-side fetching must wait for JavaScript to load before making a request, while streaming can begin sending crucial markup immediately. The conversation underscores that real-world results depend on the complexity of data sources, the concurrency of requests, and how much JavaScript must be parsed on arrival. Overall, the speaker conveys a balanced perspective: streaming can deliver meaningful benefits, but each solution has nuance.

### 01:18:00 – Error Boundaries and Streaming in Solid 1.3

Shifting gears, the speaker introduces a new feature in Solid 1.3—improved error boundaries that work seamlessly with streaming. He explains how synchronous errors can be caught server-side, but asynchronous ones might arise after partial HTML has already shipped. This new system ensures that if something fails later in the stream, the application can gracefully switch to an error state, even if the rest of the page was already rendered. The mechanism cleverly coordinates server-thrown errors that bubble into client-side boundaries.

He emphasizes that in a fully streamed application, partial data might still appear before an error occurs in another unresolved section. By funneling that failure back through the app’s boundaries, Solid allows localized error handling or fallback UIs. The approach borrows from patterns in GraphQL, where partial results may be displayed alongside error messages. This marks a notable step forward in reliability for developers aiming to adopt streaming while maintaining robust, user-friendly experiences in production.

### 01:24:00 – Handling Edge Cases and Reset Scenarios

Continuing on the subject of error boundaries, the speaker demonstrates how “reset” mechanisms come into play when reattempting a request that failed midstream. He shows an example where the server intentionally rejects data after partial content has been delivered. Thanks to the new boundary, the client can reset, re-trigger the request, or gracefully handle the fallback. This eliminates the need to reload the entire page, preserving the user’s session context if an isolated component breaks.

He concedes some specialized situations require more elaborate solutions, particularly if streaming is critical and external data is highly variable. Yet the improvements in Solid 1.3 aim to provide a workable default that fits many common error-recovery patterns, especially for incremental data loading. These changes reflect broader advances in frameworks trying to unify server and client error handling rather than resorting to full-page refreshes or silent failures when a partial chunk misbehaves.

### 01:30:00 – Namespacing Multiple Streaming Islands

Here, the speaker touches on another technical addition: the ability to assign a unique prefix or ID for each streaming island in Solid 1.3. This feature proves useful if multiple sub-apps or route segments coexist within a single HTML document. By labeling them distinctly, the hydration process prevents collisions, ensuring that data meant for one island does not conflict with another. He envisions that tools like Astro, which rely on multiple independent components, could benefit from passing unique IDs seamlessly to each region.

He clarifies how this solution remains optional but helps accommodate advanced architecture patterns where partial hydration is repeated across multiple routes. These prefix IDs also facilitate isolating logic for separate teams working on different parts of a larger app. As a result, Solid can now handle more complex nesting scenarios without tangling the underlying reactivity or hydration instructions, a notable step in bridging multi- or micro-frontend approaches.

### 01:36:00 – Universal Reactivity: Integrating External Stores

In this section, the host unveils “universal reactivity,” another forthcoming feature in Solid 1.3 that allows seamless use of third-party reactive stores like MobX without special wrappers. Traditionally, one would wrap foreign observables with local signals or rely on entire component re-renders. Here, Solid’s new hook system can track external store changes directly, letting developers read from MobX structures in JSX as if they were native Solid signals.

This breakthrough means that large projects already invested in state libraries can gradually adopt Solid’s rendering model. The speaker cautions that it’s still experimental and might involve overhead, but the potential is clear: reusability and synergy between different reactive ecosystems. He believes that bridging these state management paradigms can help unify advanced patterns across the JavaScript community, letting each tool shine at what it does best while maintaining granular updates in the UI.

### 01:42:00 – Limitations and Future Directions of Streaming

As the conversation returns to broader reflections, the speaker acknowledges that while streaming solves notable performance challenges, it also introduces new questions around concurrency. Features like partial hydration, universal reactivity, or dynamic script insertion can yield edge cases. He anticipates that frameworks and libraries will evolve to address these scenarios, much like how SSR adoption required ecosystem-wide adjustments in earlier years.

He also mentions CSS loading as a continuing area of complexity. Some solutions flush critical styles up front while deferring less crucial rules, whereas others try to load styling in tandem with each partial chunk. Regardless, the speaker remains optimistic that the community will converge on strategies that maintain smooth user experiences, even as front-end architectures grow more modular and distributed. He places emphasis on real-world experimentation, urging developers to test streaming thoroughly in staging before rolling it out widely.

### 01:48:00 – React’s Evolving Streaming Demo and Next.js

In this chapter, the speaker revisits React’s streaming approach, specifically pointing out how Next.js has improved its own demo over time. He notes that the official example now relies on newer placeholders and partial inserts, and its performance is noticeably better than earlier prototypes. Though the speaker occasionally sees caching behavior hide the loading placeholders, he praises the direction the React team has taken toward progressive responses.

He highlights how React’s reliance on small script tags is similar to Marko and Solid, confirming that major frameworks now converge on broadly similar techniques under the hood. While each has unique syntax or data-handling choices, the conceptual core of partial HTML plus minimal insertion scripts has effectively become an emergent standard. The speaker posits that this synergy suggests cross-framework knowledge sharing will only accelerate, ultimately benefiting developers who want consistent streaming behavior across diverse platforms.

### 01:54:00 – Final Q&A on Streaming and Concurrent Rendering

Viewers pose questions about whether streaming can coordinate prioritization of specific chunks, or how a worker-based approach might offload rendering from the main thread. The host reasons that while concurrency can reorder tasks, orchestrating fine-grained priority in a live application is non-trivial. He also remarks that web workers cannot directly manipulate the DOM, so the design choices become more about orchestrating data flow and leaving final insertion to the main thread.

He reiterates that real-time performance gains often come from parallelizing data requests, in addition to streaming partial HTML. Yet once an organization commits to a server-driven architecture with streaming, they must also plan for complexities around SEO and error handling. The segment ends with a note that concurrency is definitely part of next-generation frameworks’ roadmaps, though shipping stable, well-tested solutions that integrate with existing code is an incremental process.

### 02:00:00 – Summarizing Key Advantages and Challenges

As the session approaches its final stretch, the speaker offers a concise rundown of streaming’s benefits: quicker time to first byte, immediate partial rendering, and better performance on both fast and slow networks. He acknowledges, however, that streaming cannot solve every bottleneck on its own. Developers still need to consider CSS strategies, preloading static assets, and carefully structuring data queries to avoid cascades. He recaps how the differences between client-only, fully synchronous SSR, and streaming approaches each shine under specific conditions.

He underscores that for large-scale applications—particularly e-commerce or social platforms—serving partial content early can significantly raise user engagement or reduce bounce rates. At the same time, smaller apps or those heavily reliant on instantaneous interactivity may still opt for other solutions. By highlighting these pros and cons, he ensures that listeners leave with a balanced perspective rather than assuming streaming is universally best.

### 02:06:00 – Outlook for Partial Hydration and Future Releases

Here, the speaker draws connections between streaming and partial hydration, pointing out that they often complement each other. Streaming focuses on progressive HTML delivery, while partial hydration ensures the client only downloads necessary JavaScript. He muses on how advanced designs might unify these ideas, so that even after the server has streamed content, the client hydrates portions on-demand, skipping unused code. This vision depends on tools and libraries adjusting to ephemeral boundaries, lazy injection, and piecewise reactivity.

He mentions that Solid’s next versions will continue exploring deeper SSR improvements and more robust error boundary logic. By emphasizing small but significant steps forward, the speaker aims to reassure developers that the ecosystem will keep refining these patterns. Although fully seamless partial hydration remains a challenge, the confluence of new methods and community interest makes him confident that year by year, streaming will lose its “lost art” reputation and become a well-documented standard technique.

### 02:12:00 – Balancing Granular Rendering and Developer Experience

In this segment, the conversation shifts back to the principle of “primitives first.” The host reiterates that frameworks offering stable, low-level reactivity can be extended to advanced scenarios like streaming, partial hydration, and concurrency. When developers rely on strong fundamentals, the overhead of new features becomes more manageable. He contrasts it with frameworks that implement large features on top of weaker foundations, occasionally hitting performance or complexity walls in high-traffic deployments.

Listeners learn how smaller frameworks might pivot to incorporate streaming more quickly than older, monolithic solutions because they do not carry as much legacy baggage. Yet, the host also credits React for the thoroughness of its design process and broad influence. Ultimately, he envisions a future where React, Solid, Vue, and others converge on some common patterns for streaming, even if they differ in syntax. The emphasis remains on enabling developers to scale, maintain, and optimize their applications without undue friction.

### 02:18:00 – Wrapping Up Technical Highlights

Nearing the end of the discussion, the speaker reiterates some of the session’s most important points. He applauds the community’s ongoing experiments with streaming, partial hydration, and new SSR methodologies. He also underscores that Solid 1.3 is set to introduce valuable improvements, including universal reactivity and advanced error boundary handling. By addressing the interplay of server and client behaviors, these new features push the boundaries of how quickly content can be displayed without sacrificing maintainability.

He reminds viewers that it took years for developers to adopt SSR wholeheartedly; streaming may follow a similar trajectory. However, with React, Vue, Qwik, and others championing the approach, the speaker believes streaming will gain traction sooner rather than later. He encourages everyone to test these ideas in their own projects, measure performance gains, and provide feedback. By doing so, the community can evolve streaming from an underused relic into a core practice of modern web development.

### 02:24:00 – Farewells and Future Streaming Plans

In this penultimate chapter, the speaker answers a few remaining questions from the live chat. Topics touch on nuances of concurrency models and the intricacies of partial data insertion. He suggests that certain problems are best solved by stepping back to first principles, reminding developers that they can always revert to simpler rendering if streaming complexities become overwhelming. The casual Q&A style adds a personal touch, showing the interactive nature of the stream.

He then gives a brief sense of his upcoming schedule, noting that holiday commitments may delay the next live stream. Still, he promises to continue exploring and refining streaming concepts, both in Solid and within the broader JavaScript ecosystem. By warmly thanking viewers for their participation, he conveys enthusiasm for collaborative innovation. The session’s communal atmosphere underscores that while these are highly technical topics, they revolve around a shared interest in pushing the boundaries of front-end performance.

### 02:28:43 – Closing Thoughts and End of Stream

In the final moments, the host reiterates his gratitude for everyone’s time and recaps the main objectives of the stream: providing a clearer explanation of streaming, reviewing current developments in the JavaScript world, and highlighting new Solid 1.3 features. He encourages viewers to follow future updates, try out the examples, and continue asking questions. This sign-off feels both conclusive and forward-looking, hinting at more deep technical content to come.

He ends by wishing everyone a good weekend and referencing the holiday break as a likely pause in the streaming schedule. The energy is upbeat, with a sense of accomplishment for having covered both conceptual and practical aspects of streaming. By concluding on a note of communal growth, the session underscores how the web ecosystem thrives on shared knowledge, iterative improvements, and the creative spirit of developers worldwide.