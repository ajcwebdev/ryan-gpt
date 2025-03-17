---
showLink: "https://www.youtube.com/watch?v=87D15Gu1d6w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS v1.8"
description: ""
publishDate: "2023-10-06"
coverImage: "https://i.ytimg.com/vi/87D15Gu1d6w/maxresdefault.jpg"
---

### 01:48:00 - Switching Comment Markers and Edge Cases

A small yet notable change emerges in the form of switching from hash-based markers to dollar sign markers. Ryan explains that certain server environments, such as those using Nginx server-side includes, interpreted hashes as special directives. By swapping to a more neutral symbol, Solid prevents unexpected behavior. It’s a tiny tweak that spotlights how deep the framework must integrate into varied server setups.

He notes that React historically used similar naming, illustrating that these naming collisions aren’t unique to Solid. The library ecosystem frequently runs into conflicts when bridging HTML, servers, and specialized tools. Though minor on the surface, it underscores how small changes can improve usability for those with complicated hosting pipelines. This pattern of thoughtful detail is what gives Solid the reputation of a finely tuned, performance-first library that handles niche but critical deployment configurations.

### 01:54:00 - Summing Up 1.8’s Internal Focus

As viewers near the one-third mark of the longer stream, Ryan clarifies how incremental fixes accumulate into a more robust release. He praises contributions from community members who found subtle hydration issues or performance gaps. By systematically refining SSR, hydration, and streaming, Solid 1.8 becomes a stable stepping stone for future expansions, like server components or advanced state handling.

He teases a more extensive rewriting process for Solid 2.0, focusing on unifying reactivity across the library in a more modular fashion. While no official timeline is provided, listeners sense that 2.0 aims to address pain points around resources, transitions, and more. He concludes this portion by celebrating the collaborative spirit that shapes these improvements, pointing out that each real-world bug report guides more targeted, efficient solutions.

### 02:00:00 - Lazy Hydration and Interactive Delays

Ryan briefly touches on personal anecdotes about streaming platforms and cost trade-offs. He recounts how cameo appearances or special overlays require advanced tooling, but he stays committed to simpler solutions to focus on Solid itself. The conversation then returns to certain patches for Babel-based transformations, ensuring concurrency issues are ironed out. He remarks that advanced streaming has to be balanced with maintainability—no single patch should significantly bloat the code.

He highlights that dev cycles often pivot between broad conceptual designs and hyper-focused bug fixes. For instance, tackling advanced resource usage might yield a new API spec but also spawn more subtle edge cases. By continuing to refine Solid 1.8, he hopes to keep the user experience polished, letting developers experiment confidently with new or existing patterns. This vantage emphasizes that open-source projects thrive best when fundamentals remain strong, even as forward-thinking features are introduced.

### 02:06:00 - Partial Hydration vs. Full Resumability

Ryan demonstrates how lazy hydration can skip rendering entire trees until after certain conditions are met. He notes that skipping or deferring element creation can drastically boost startup performance, but it also means developers must carefully manage the state of partially loaded sections. He revisits pitfalls where typed input fields revert or lose user data if the hydration step overwrites them at the wrong time.

These details illustrate the push-and-pull between giving the server control for the fastest initial render and letting the client adapt seamlessly to user interactions. Ryan cites partial solutions, like event replay or transitional placeholders, while acknowledging each adds complexity. Ultimately, the best outcome is a library that gracefully handles real-time input, even during extended hydration delays. Listeners gain insight into the fine-grained puzzle of making advanced SSR and hydration techniques work for interactive apps without disorienting end users.

### 02:12:00 - Sharing and Deduplicating Data Across Components

A question from chat spurs Ryan to explain how multiple components can share server-fetched data without duplicating payloads. He explores whether context or prop passing is best for distributing data in large applications. Under the hood, Solid’s updated serializer ensures identical objects stream only once, even if they’re used in many subtrees, preventing ballooned payload sizes that hamper performance.

Ryan acknowledges that the solution might still require developers to carefully define data flow—especially when layering nested components or advanced routing. By showing how a single data set can be toggled or filtered across multiple children, he reiterates the power of Solid’s reactivity. Although it demands a conscious architecture, the reward is minimal overhead when re-rendering or updating. This approach emphasizes not just library optimizations but also guiding developers to adopt patterns that scale gracefully.

### 02:18:00 - Future of Resource and Store Separation

Continuing on data handling, Ryan underscores that resource loading and state management remain top priorities. He reveals that major reworks are likely to revolve around splitting out resource functionality from the reactive store, so developers can choose exactly how they want data to be persisted or updated. This might also open doors for third-party libraries to hook into Solid’s new architecture, facilitating deeper integration with tools like query managers or advanced caching layers.

He emphasizes that 1.8 is only the start of this pivot. If done right, the next major iteration of Solid will support partial hydration and streaming in a more composable way. By refactoring resource logic, signals and memorized data can play better together, reducing the need for specialized wrappers. In closing these thoughts, Ryan expresses excitement about upcoming synergy between streaming, reactivity, and advanced forms of data persistence, hinting that user feedback will be critical to refining these new ideas.

### 02:24:00 - Signals Everywhere and Ecosystem Shifts

Ryan notes that multiple frameworks—React, Angular, Svelte—are pivoting to signals or fine-grained reactivity. This marks a departure from the once-dominant virtual DOM model. In his view, the entire sector is aligning around a more precise style of rendering, though each library implements it differently. He points to recent public announcements from Svelte and Angular about adopting signals, suggesting an industry-wide trend.

He sees a future where signals could become standardized, though that remains a complex prospect. Differences in scope-based vs. stack-based reactivity, or compiler vs. runtime approaches, stand in the way of a single unified model. Even so, the momentum is unmistakable. Libraries like Solid, which embraced signals early, effectively demonstrate the real-world gains in speed and simplicity. Ryan believes that bridging frameworks with a common reactivity specification could reduce repeated effort and empower more flexible cross-library integrations.

### 02:30:00 - Collaboration Among Framework Authors

Ryan describes how framework maintainers, including Misko Hevery, Rich Harris, and others, have behind-the-scenes discussions on signals. These conversations hint at potential cross-pollination of reactive concepts. However, each ecosystem must still satisfy its own user base, which can mean unique syntaxes or compile strategies. Ryan acknowledges that Quick, Svelte, Angular, Vue, and Solid each approach reactivity from slightly different angles.

He remains optimistic about the prospect of sharing core ideas and bridging knowledge across frameworks. Even if they don’t converge on identical solutions, frequent communication fosters incremental improvements. He references discussions around language-level solutions or standardized signals, cautioning that full consensus is a long shot. Still, seeing popular projects embrace similar building blocks reinforces the sense that signals represent a more modern, granular way to handle state in the browser.

### 02:36:00 - Polishing 1.8 for Release

Ryan highlights final checks on 1.8, explaining that Babel presets and other dependencies must align before a stable version ships. He says the last steps often involve pinning versions, verifying integrations with popular bundlers, and ensuring code-splitting remains robust. Beta releases have helped catch any straggling errors in SSR or streaming logic, thanks to community testers.

He underscores that community feedback is critical at this juncture, noting that real-world applications unearth scenarios test suites might miss. Though debugging advanced features can be complex, the payoff is a more stable library ready for broader adoption. Ryan values the interplay of frequent early releases and user-driven QA, a formula that has kept Solid agile yet reliable. As the library matures, each minor version cements improvements without forcing disruptive rewrites.

### 02:42:00 - Transitioning Toward Resumability Possibilities

A question resurfaces about partial hydration vs. true resumability. Ryan reiterates that Solid’s approach is incremental, focusing on deduplication and streaming. Full resumability means carrying over a complete reactive graph from server to client, something that introduces complexities around which signals to serialize, how to track side effects, and what code must re-run.

He contrasts this approach with Quick’s emphasis on serializing as much state as possible, acknowledging that while that can reduce client-side costs, it can also increase server overhead. Solid’s philosophy has always been to minimize overhead whenever possible, so the team is cautious about jumping headlong into a one-size-fits-all strategy. Still, 1.8’s improved serialization sets the stage for more advanced features. If done carefully, Solid might one day offer near-instant handoff without replaying every lifecycle function in the browser.

### 02:48:00 - Leveraging Platform Caching and Revalidation

Ryan highlights recent hosting platform announcements—such as Netlify’s new caching headers and Vercel’s stale-while-revalidate capabilities—that align well with Solid’s SSR strategies. By adopting standard HTTP headers for controlling cache and revalidation, frameworks can keep deployment processes simpler. Ryan sees a future where references to “ISR” or platform-specific regeneration fade, replaced by universal web patterns that anyone can configure in their headers.

He commends Netlify for embracing these building blocks, noting that they reduce the friction for developers looking to deploy partial or dynamic pages. With edge functions now supported across platforms, it becomes easier to stitch together server rendering, caching, and streaming with minimal custom code. From Ryan’s viewpoint, letting the browser and server handle caching at a standards level means fewer proprietary hoops to jump through. As a result, Solid can focus on refined reactivity rather than custom caching rules.

### 02:54:00 - Aligning Frameworks and Hosting APIs

Ryan acknowledges that he rarely highlights Netlify specifics, but he sees them pivoting back to a developer-focused model through these new features. He celebrates the shift toward well-known HTTP patterns, pointing out that advanced deployment workflows need not rely on complicated frameworks if standard caching directives suffice. This resonates with Solid’s design: keep the core minimal and let hosting layers handle heavy lifting for revalidation and caching.

He references remix maintainers who champion a similar approach, emphasizing progressive enhancement and standard HTTP as a baseline. Tools like stale-while-revalidate become building blocks that apply equally well to frameworks like Solid, React, or Next. The result is a more level playing field for developers, where each framework can shine purely based on app logic rather than special hosting adaptors. Ryan views these converging trends as empowering the entire ecosystem, reducing fragmentation and promoting more user-friendly experiences.

### 03:00:00 - Recap of ViteConf and Framework Updates

Ryan shifts gears to discuss ViteConf, praising its pre-recorded talk format and global-friendly schedule. He name-drops talks on Angular’s new signal direction, Svelte’s experimental features, and other less mainstream solutions like Marco. Despite watching remotely, he catches enough to see that signals and partial hydration are thematic threads across the JavaScript ecosystem. This united focus reaffirms Solid’s path, as each framework wrestles with performance and developer ergonomics in distinct ways.

He recalls how Theo from t3.gg also presented on building React-centric solutions, bridging the React community with Vite’s modern bundling approach. Ryan finds it refreshing that React devs are more openly discussing advanced SSR patterns. This cross-community dialogue was once rare but now proliferates, expanding everyone’s horizons. Watching these diverse frameworks tackle the same core challenges—data fetching, streaming, or transitions—further cements the notion that reactivity is the bedrock for next-generation tooling.

### 03:06:00 - Quick’s Claims and Verifying Virtual DOM Use

Ryan references a talk where Quick’s maintainers claimed they avoid using a virtual DOM. Curious, he checks Quick’s playground code and finds that while it might not rely on the same diffing strategy as React, it still constructs an object tree to represent elements. In Ryan’s view, that still qualifies as a form of virtual DOM. He recognizes that marketing language can differ from underlying realities, with each project optimizing for different concerns.

He draws parallels to Solid, which compiles away traditional VDOM overhead but still internally leverages specialized data structures to manipulate DOM nodes. The main takeaway is that frameworks often apply the label “no VDOM” when they mean “no typical diffing algorithm.” Each library’s approach can be valid, but the difference lies in how they schedule updates and whether they skip large patches in favor of micro-optimizations. For Ryan, this distinction is key to understanding the trade-offs between frameworks.

### 03:12:00 - Upcoming Guests and Cross-Pollination

Looking ahead, Ryan announces that Dominic Gannaway from Svelte will appear on the stream to discuss Svelte 5’s design. He’s eager to discover how “runes” and compiler-based reactivity might align with or differ from Solid’s runtime-first approach. Soon after, Michael Rawlings will share updates on Marco’s meta-framework. Ryan sees these dialogues as a prime opportunity to compare notes, gleaning best practices from each corner of the reactive spectrum.

He briefly recalls meeting Rich Harris in person for pizza, mentioning that these casual gatherings often reveal shared pain points and triumphs. While the frameworks differ in syntax and developer culture, the maintainers share common goals: simpler mental models and unstoppable performance. By consistently inviting them to the channel, Ryan fosters mutual understanding that enriches Solid’s future planning. This kind of cross-pollination is a hallmark of open-source collaboration, especially in an era where signals are reshaping how teams handle state.

### 03:18:00 - Embracing Complexity and the Svelte 5 Arc

Ryan reflects on Svelte’s journey “embracing complexity.” Once famous for minimal boilerplate, Svelte now sees a need to handle advanced cases—like SSR transitions, runes, or partial reactivity. The change raises concerns that Svelte 5 could mirror Vue 3’s transition period. Yet Ryan contends that these complexities stem from genuine developer needs, not theoretical over-engineering. Even Svelte enthusiasts crave more direct control over reactivity and data flows.

He likens Svelte’s evolution to Solid’s own path: starting lean but eventually exposing deeper primitives for complex applications. While Svelte 5 might be a departure from pure simplicity, it still aims to keep the learning curve gentle. Ryan sees parallels in how frameworks inevitably grow more powerful to meet real-world demands. If done right, Svelte’s new features can maintain a friendly DX while enabling robust logic for enterprise apps—a balance Solid strives for, too.

### 03:24:00 - React’s Position and Signals in the Mainstream

Ryan cites a blog post arguing that React is becoming more isolated as other libraries adopt signals. He clarifies that React’s inertia stems from huge legacy usage and cautious incremental changes. Rather than rewriting the entire engine, React invests in features like server components and concurrency, which might ultimately converge with signals. He points out that React’s team has historically taken years to integrate new paradigms, so signals could eventually surface.

He also acknowledges that React’s scale imposes rigorous testing and a desire to avoid abrupt userland breakage. This means signals may appear in React only when they can be introduced as a stable, optional feature or via third-party libraries. The rest of the ecosystem, less encumbered by existing patterns, can experiment faster. In Ryan’s view, the next few years will clarify if React aligns with the signals wave or continues to refine concurrency and server rendering along a parallel path.

### 03:30:00 - Compiler-Based Innovations and Cross-Ecosystem Learning

Ryan touches on community threads analyzing how Svelte implements runes and possible reactivity expansions. He praises the open-mindedness of the Svelte team, who are not afraid to break older assumptions for the sake of new capabilities. This resonates strongly with Solid’s own willingness to revamp key APIs when evidence suggests a net gain. Both communities exemplify a commitment to iterative progress, even if it challenges early marketing claims of simplicity.

He also speculates that these advanced reactive systems could unify cross-application state in ways older approaches never managed. Not every developer wants to juggle separate data stores, asynchronous fetchers, and client transitions. By weaving signals directly into the compile step or deeper runtime, frameworks might realize a more seamless data flow. Ryan suggests that Svelte’s or Solid’s explorations in advanced reactivity could inform each other, heightening the pace of innovation across the JavaScript world.

### 03:36:00 - Finalizing 1.8 and Beta Testing

Ryan returns to the topic of wrapping up Solid 1.8. He concedes that ephemeral bugs in hydration or transitions can linger if not thoroughly tested. This is why early adopters trying out betas are key to verifying real-world readiness. He thanks the community for jumping into the pre-releases and providing feedback on how the new streaming serializer and hydration logic fare in complex scenarios.

He reaffirms the library’s commitment to incremental improvement, rather than sweeping changes that risk breaking stable applications. A carefully managed release cycle keeps developers confident about upgrading. Ryan sees each resolved issue as a testimony to collaboration between library maintainers and the user base. This synergy allows Solid to adopt forward-thinking techniques—like partial hydration or advanced transitions—without sacrificing day-to-day reliability for production apps.

### 03:42:00 - Closing Thoughts and Future Streams

In the final minutes, Ryan sums up the day’s conversation, reiterating that 1.8 focuses on internal power-ups rather than splashy new APIs. He acknowledges how small but crucial updates, like stronger deduplication and better hydration, pave the way for future expansions. Listeners are reminded about upcoming guest appearances from key figures in the Svelte and Marco communities, which promise more cross-framework insights.

He wraps by thanking everyone who tuned in, mentions his playful use of novelty sunglasses earlier in the stream, and signs off on a friendly note. The underlying message is that Solid’s journey continues, shaped by open discourse and methodical engineering. As new patterns and philosophies around signals emerge, Solid aims to remain at the forefront, balancing performance with user-friendly design. With that, the session ends, leaving a hopeful tone for the library’s evolution in the months ahead.