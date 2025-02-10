---
showLink: "https://www.youtube.com/watch?v=87D15Gu1d6w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS v1.8"
description: ""
publishDate: "2023-10-06"
coverImage: "https://i.ytimg.com/vi/87D15Gu1d6w/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation about SolidJS v1.8, covering new serialization methods, hydration improvements, and the evolving ecosystem of reactive JavaScript frameworks.

## Episode Summary

This transcript provides an in-depth exploration of SolidJS 1.8 and its broader context in the JavaScript ecosystem. It begins by laying out motivations behind the latest release, such as improved serialization and the groundwork for potential “resumability” features. As the discussion progresses, topics turn to hydration intricacies, including difficulties posed by streaming data and the complexities involved in reconciling server-rendered code with client updates. The speaker also addresses potential pitfalls in creating reactive libraries, highlighting trade-offs between developer experience and raw performance. Real-world scenarios, like working with class lists and edge-cases in transitions or resources, illustrate challenges faced by maintainers and users alike. Throughout, references to community experiments, other frameworks’ approaches, and larger platform trends help underline why these updates matter. By the end, the discussion situates SolidJS within a quickly evolving landscape, suggesting that the project’s next phases will hinge on refining core primitives and balancing developer-friendly features with minimal overhead.

## Chapters

### 00:00 - 06:00 | Introduction and Stream Setup

In this opening segment, Ryan greets viewers and explains that he is experimenting with a different streaming resolution. He highlights a desire to cut down on unnecessary costs while maintaining decent quality, acknowledging that 1080p streaming may not be crucial for the type of content he presents. Listeners hear early chat greetings and learn that several viewers are curious about upcoming changes in SolidJS. Ryan briefly mentions bugs he's experienced with chat systems and streaming platforms, setting the stage for a deep technical conversation about building SolidJS v1.8.

He transitions into talking about the broader software ecosystem, alluding to alternative methods of shipping JavaScript frameworks. Ryan expresses interest in how frameworks manage code-splitting and lazy-loading, referencing ideas like “mini apps” and connectivity constraints in certain regions. Although he quickly clarifies that the main purpose of the stream is to focus on the upcoming SolidJS release, these opening minutes set a relaxed pace. They also foreshadow the depth of discussion on how Solid approaches technical hurdles, especially around performance and user experience.

### 06:00 - 12:00 | Overview of SolidJS v1.8 Goals

Ryan shifts focus to a high-level overview of the SolidJS v1.8 release, emphasizing that much of the work centers on internal improvements rather than flashy new features. He describes how these internal changes lay the groundwork for potential future developments, including more advanced solutions for streaming and data serialization. By tying performance objectives to real-world funding initiatives, such as the Chrome Aurora program, Ryan underscores how Solid’s development is partly driven by measurable metrics like Core Web Vitals.

He then explains why the team is deconstructing existing asynchronous patterns in Solid, specifically around `createResource`, to better separate concerns like serialization, data propagation, and streaming. This separation is portrayed as a stepping stone for bigger refinements in 2.0, including potential rewrites of certain core pieces. The conversation also touches on collaborative efforts with other developers, highlighting work on universal reactive primitives that might extend beyond Solid. Listeners get a sense that v1.8 is a quiet but crucial iteration, paving a smoother path toward major enhancements.

### 12:00 - 18:00 | New Serialization and Islands Concerns

Here, Ryan delves into practical examples showcasing Solid’s new serialization approach. He references a Hacker News demo built with Astro, noting the challenges of serializing data in nested or recursive structures when employing an “islands” architecture. He clarifies how repeated data might be streamed multiple times if each nested component re-serializes the same payload, negatively affecting performance. Solid’s updated serializer aims to solve this by de-duplicating identical objects, ensuring no repeated payloads appear in the final HTML.

Ryan walks through how the new deduplication mechanism works at runtime, using a weak map on the server and a reference array on the client. This pairing ensures that deeply nested data structures—be they objects, promises, or sets—get serialized only once. Although some overhead exists in script complexity, he argues the benefits of smaller repeated data far outweigh extra lines of code. This thorough explanation sets the tone for how Solid 1.8 invests in internal plumbing, giving developers more robust and efficient server-to-client data handling.

### 18:00 - 24:00 | Streaming and Out-of-Order Rendering

Ryan continues examining the nuances of streaming data serialization, remarking how Solid’s method integrates with out-of-order streaming. He revisits older versions of Solid’s server-rendering code, contrasting the new approach with past hacks that used array structures to store promise resolutions. By simplifying the logic into a dedicated serializer, Solid 1.8 removes complexities around blocking and deferring promises, establishing a more straightforward path for resources that must be ready before the initial HTML flush.

He highlights how streaming can bring partial content to the browser earlier, improving perceived performance on slow connections. At the same time, Ryan recognizes the intricacies of error handling during streaming, citing potential fallback strategies if a connection breaks mid-stream. He notes that while partial hydration strategies have proven valuable, they also introduce edge cases requiring careful testing. Throughout, Ryan stresses how foundational adjustments in 1.8 address immediate issues and set the stage for more resilient solutions in subsequent versions.

### 24:00 - 30:00 | Compiler Nuances and JSX Transform

The conversation turns briefly to bundler-level concerns. Ryan discusses how certain transformations, particularly for clients like Bun or Deno, can complicate Solid’s specialized JSX compilation. He points out that relying on a “standard” JSX transform, originally designed for React, leads to suboptimal or broken outcomes when used with Solid. These transformations lack the intelligence Solid needs to produce optimized DOM expressions, thereby negating the performance benefits that define Solid’s architecture.

Ryan explains that special care must be taken to integrate Babel or dedicated SWC plugins for Solid’s syntax. While some developers desire a “no-build” approach or universal transforms, he stresses that deeper compilation is essential to achieve the minimal overhead Solid prides itself on. He mentions ongoing experimentation to expand Solid’s compiler support to platforms like Bun, but warns that full integration involves more than just toggling a pragma. This clarifies why specialized tooling remains a cornerstone of Solid’s performance story.

### 30:00 - 36:00 | Debunking Misconceptions and Fine-Grained Reactivity

Ryan addresses common misunderstandings that come from broad comparisons among frameworks. He jokes about how people sometimes reduce Solid to a “React clone” or claim it has two-way binding, underscoring that such assessments usually come from surface-level impressions. In reality, Solid’s approach to reactivity is more akin to libraries like Knockout or advanced pattern matching that extends beyond React’s mental model. He emphasizes that distinguishing true mechanical differences is crucial to appreciating how Solid uniquely optimizes rendering.

Listeners also hear about interactions with other ecosystems, like Angular’s signals and potential overlaps with Solid’s fine-grained approach. Ryan suggests that the introduction of signals alone doesn’t guarantee the same performance improvements unless the entire render pipeline supports fine-grained updates. He references real-world examples of partial or incomplete adoptions, showing how subtle differences in architecture can impact outcomes. This segment underscores the complexity of adopting signals widely, requiring deeper changes than simply adding a new reactive primitive.

### 36:00 - 42:00 | Hydration Improvements and Lazy Loading Fixes

Ryan’s focus returns to 1.8’s upcoming release, clarifying that while it has no massive headline features, it reworks pivotal internals. He highlights improvements to hydration, mentioning how top-level fragments and lazy components have historically caused edge-case hydration bugs. By modifying how arrays and child nodes are gathered during hydration, Solid 1.8 resolves common issues of mismatch or duplication, making hydration more consistent in scenarios where multiple nested components share overlapping DOM structures.

He recounts how certain complicated permutations involving portals or lazy loading once led to unpredictable behavior. The updated approach now references the actual DOM range at the time each component hydrates, rather than relying on complex guesswork. This addition might slightly increase overhead but dramatically reduces errors when reassembling server-rendered markup on the client. Ryan describes it as a careful balance between performance and correctness, noting that real-world usage often favors fewer surprises during rehydration.

### 42:00 - 48:00 | HTML Parsing Quirks and Template Tricks

In these moments, Ryan dives deeper into the intricacies of HTML parsing rules and how self-healing behaviors in browsers can introduce unexpected elements like `<tbody>` tags. He explains how browsers often normalize markup, potentially adding or removing tags behind the scenes. Although beneficial when incrementally building DOM in JavaScript, it can lead to mismatches in server-rendered HTML. This mismatch is tricky to detect, prompting Ryan to comment that rigorous validation is too costly to perform in production.

He highlights small performance optimizations, such as omitting unnecessary closing tags or using single-character markers for comments. While they may seem trivial, these choices shave off bytes and speed up parsing. Yet each optimization must be carefully vetted to avoid breaking validators or support edge cases. The discussion touches on how Solid’s compiler leverages HTML quirks to streamline generated output. These remarks underscore the level of detail required to push performance boundaries in real-world scenarios.

### 48:00 - 54:00 | Class Handling and the Future of `classList`

Ryan turns to `classList`, candidly calling it one of his biggest design regrets. He explains how `classList` can clash with the standard `class` prop, leading to edge cases where they override each other or merge unpredictably. Though many frameworks have tried to unify class management elegantly, the interplay with spreads and SSR can become awkward, creating confusion for both library authors and end users.

He outlines potential paths forward, such as moving `classList` into a directive-like syntax to isolate its behavior. However, he also notes how seamlessly toggling classes is desirable for performance, so removing it outright could degrade experience. Ryan assures listeners that future versions might refine this area, but warns it’s not a simple fix. This portion of the transcript highlights how even seemingly small design decisions can spiral into major points of friction in a reactive, performance-centric library.

### 54:00 - 1:00:00 | Directives and TypeScript Tree-Shaking Woes

Ryan discusses directives more broadly, admitting they can be awkward due to how TypeScript handles tree-shaking at compile time. If a directive is imported but appears unused from TypeScript’s perspective, it might get removed prematurely, causing the actual directive logic to vanish. This is not just a bundler puzzle but a fundamental constraint of TypeScript’s architecture. He recounts attempts to patch or override these behaviors, revealing how custom directives can quickly become a minefield for typing and compilation.

Still, directives can address certain low-level DOM needs. They offer a neat way to specify specialized behaviors without polluting element props. Yet, that neatness evaporates once developers want to pass these directives through component boundaries or spread them across multiple levels. Ryan suggests that rethinking how directives are registered or applied might be necessary for better ergonomics. Nonetheless, he advises caution, pointing to real usage patterns that sometimes fall apart once the code is separated into distinct modules.

### 1:00:00 - 1:06:00 | Reactive Callbacks and Untracking

Ryan explores potential hazards when event handlers are invoked inside reactive scopes. He cautions that developers can unintentionally capture signals, triggering unexpected updates or re-renders. While powerful in the right contexts, signals can cause confusion if you assume an event remains static. Ryan highlights how features like `untrack` prevent signals from being read when you don’t want them to be, letting developers separate user-driven actions from automated reactivity.

He likens the design constraints of these issues to Svelte’s scope-based reactivity versus a more stack-based approach in frameworks like Solid. Each method has trade-offs, especially when bridging user-defined callbacks that can traverse multiple layers of the application. Ryan stresses that library authors often untrack or isolate user code, preventing accidental signal subscriptions. Overall, it’s a reminder that while reactivity can be incredibly efficient, it demands careful structuring to avoid hidden dependencies and performance pitfalls.

### 1:06:00 - 1:12:00 | Asynchronous Life Cycles and `onCleanup`

Ryan dives into how JavaScript’s synchronous execution model affects `onCleanup` usage in asynchronous flows. Placing `onCleanup` after an `await` statement simply doesn’t work because once the function suspends, the reactive scope effectively ends. He notes that developers expecting cleanup logic to run after async tasks complete may be surprised by this limitation, which is inherent to the language itself rather than a Solid-specific quirk.

He mentions that Solid sometimes emits dev-mode warnings for these scenarios, but can’t catch all edge cases. Not everyone realizes that reacting to signals inside asynchronous code demands deliberate patterns, or you risk side effects persisting unexpectedly. The conversation solidifies that bridging reactivity and async logic is never fully seamless. Developers must ensure their mental models match how signals and scopes genuinely behave under the hood, rather than relying on intuitive guesswork.

### 1:12:00 - 1:18:00 | Resource Mutation Challenges

Ryan acknowledges that `createResource` was initially designed for straightforward data fetching, not complex deep mutation. He notes that once you deal with more sophisticated scenarios—like partial object updates—you can’t simply patch nested keys. Instead, you must replace the entire resource value. Though external store options help, these patterns can become messy, reflecting a gap between “quick fetch” use cases and advanced data management.

He hints that splitting out resource logic from the store layer might be on the roadmap for Solid 2.0. By allowing more granularity, developers could merge server-fetched data into local state without forcibly reassigning entire objects. This shift reflects lessons learned from trying to blend two concerns—data fetching and local updates—into one API. Ryan’s broader point is that while `createResource` can handle many tasks, truly advanced scenarios merit more modular design.

### 1:18:00 - 1:24:00 | Transitions, Suspense, and State Mismatches

Ryan addresses how transitions—used to batch signal updates—may skip showing certain intermediate states like “refreshing.” He compares this to React’s concurrent rendering, where certain ephemeral loading or error states don’t appear if they’re bypassed by faster transitions. Many developers love built-in loading flags on resources, but these can conflict with transitions in real apps, leading to hidden reactivity flows.

He reflects that unifying resource states (e.g., “loading,” “refreshing,” “error”) with global concurrency features complicates everything. Suspense boundaries or top-level transitions can override local indicators, making data feel out of sync. He suggests that a more cohesive approach, possibly reminiscent of how frameworks like React handle global app states, might be better than partial wrappers. Even so, combining transitions, streaming, and strong reactivity remains intricate, hinting at deeper future refactors for Solid’s async architecture.

### 1:24:00 - 1:30:00 | Community Feedback and 2.0 Aspirations

Ryan revisits how user requests reveal Solid’s 1.x limitations, particularly around concurrency, streaming, and reactivity. While 1.8 solves hydration consistency, it doesn’t reinvent the asynchronous model. He sees 1.8 as a stepping stone, fixing immediate friction points and cleaning up code. Down the line, a bigger 2.0 overhaul could reshape the library’s approach to tasks like data fetching, transitions, and partial updates, guided by the lessons learned in 1.x.

He stresses caution in rolling out sweeping changes. The community has gotten comfortable with existing APIs, even if they’re occasionally clumsy. Introducing new primitives or deprecating old ones demands a thoughtful path to avoid breakage. Nonetheless, the prospect of streamlining advanced reactivity, controlling transitions more intuitively, and eliminating resource confusion motivates the Solid team. It’s a balance of incremental growth and innovative leaps—an approach that has kept Solid stable while still pushing boundaries.

### 1:30:00 - 1:36:00 | Platform Constraints and Streaming Deployments

At this point, Ryan dives into the broader ecosystem again, noting how serverless providers differ in their support for streaming. AWS historically lagged in streaming capabilities, while platforms like Vercel implemented workarounds to enable partial hydration. Now that serverless streaming is more accessible, Solid can lean on it for better SSR performance. This synergy between frameworks and infrastructure lays the groundwork for quick, fluid user experiences across diverse hosting environments.

Ryan highlights that streaming is not just about faster time-to-first-byte; error handling and fallback strategies come into play when connections drop or data arrives in unexpected order. Solid’s approach aims to unify the server’s perspective with the client’s, ensuring minimal overhead in rehydrating or replaying missed segments. Though still an evolving space, it’s clear that robust streaming solutions must coordinate between runtime frameworks and deployment platforms for truly seamless delivery.

### 1:36:00 - 1:42:00 | Microtask Batching and Fine-Grained Control

Ryan describes how Solid batches microtasks so multiple updates can be sent in a single flush. This technique avoids injecting repeated scripts or data chunks for each resolved promise, enabling better compression and network performance. It’s a subtle optimization that underscores Solid’s meticulous approach to shaping HTML outputs, especially critical when dealing with complex, nested data structures in real-world apps.

He acknowledges that these micro-optimizations demand careful orchestration of tasks—like ensuring promises that depend on each other don’t prematurely flush partial data. It’s an intricate dance that highlights the importance of well-chosen data structures and scheduling logic in Solid’s runtime. The net outcome is fewer roundtrips, smaller payloads, and a smoother experience during progressive rendering. Ryan connects this to broader goals of reduce-anything-possible, focusing on speed from both a developer and end-user perspective.

### 1:42:00 - 1:48:00 | Guarding Hydration Scripts and Micro Front-Ends

Ryan then addresses how Solid now includes better guards to avoid re-initializing global scripts multiple times in micro front-end setups. When different pieces of an app load concurrently, they can accidentally import the same hydration logic. This leads to conflicts if the same scripts fight over shared state. Solid 1.8 fixes this by checking whether critical scripts already exist before injecting new ones.

He notes that micro front-ends bring unique challenges because each sub-application can carry its own dependencies and initialization code. Simple checks—like verifying if a global function is defined—prevent duplication but can’t guarantee full harmony when each front-end chunk reconfigures global state. Nonetheless, these incremental improvements reduce collisions that once plagued advanced deployments. For large-scale enterprise teams, such measures also reduce confusion when multiple sub-apps rely on the same reactivity library.

### 1:48:00 - 1:54:00 | Switching Comment Markers and Edge Cases

A small yet notable change emerges in the form of switching from hash-based markers to dollar sign markers. Ryan explains that certain server environments, such as those using Nginx server-side includes, interpreted hashes as special directives. By swapping to a more neutral symbol, Solid prevents unexpected behavior. It’s a tiny tweak that spotlights how deep the framework must integrate into varied server setups.

He notes that React historically used similar naming, illustrating that these naming collisions aren’t unique to Solid. The library ecosystem frequently runs into conflicts when bridging HTML, servers, and specialized tools. Though minor on the surface, it underscores how small changes can improve usability for those with complicated hosting pipelines. This pattern of thoughtful detail is what gives Solid the reputation of a finely tuned, performance-first library that handles niche but critical deployment configurations.

### 1:54:00 - 2:00:00 | Summing Up 1.8’s Internal Focus

As viewers near the one-third mark of the longer stream, Ryan clarifies how incremental fixes accumulate into a more robust release. He praises contributions from community members who found subtle hydration issues or performance gaps. By systematically refining SSR, hydration, and streaming, Solid 1.8 becomes a stable stepping stone for future expansions, like server components or advanced state handling.

He teases a more extensive rewriting process for Solid 2.0, focusing on unifying reactivity across the library in a more modular fashion. While no official timeline is provided, listeners sense that 2.0 aims to address pain points around resources, transitions, and more. He concludes this portion by celebrating the collaborative spirit that shapes these improvements, pointing out that each real-world bug report guides more targeted, efficient solutions.

### 2:00:00 - 2:06:00 | Lazy Hydration and Interactive Delays

Ryan briefly touches on personal anecdotes about streaming platforms and cost trade-offs. He recounts how cameo appearances or special overlays require advanced tooling, but he stays committed to simpler solutions to focus on Solid itself. The conversation then returns to certain patches for Babel-based transformations, ensuring concurrency issues are ironed out. He remarks that advanced streaming has to be balanced with maintainability—no single patch should significantly bloat the code.

He highlights that dev cycles often pivot between broad conceptual designs and hyper-focused bug fixes. For instance, tackling advanced resource usage might yield a new API spec but also spawn more subtle edge cases. By continuing to refine Solid 1.8, he hopes to keep the user experience polished, letting developers experiment confidently with new or existing patterns. This vantage emphasizes that open-source projects thrive best when fundamentals remain strong, even as forward-thinking features are introduced.

### 2:06:00 - 2:12:00 | Partial Hydration vs. Full Resumability

Ryan demonstrates how lazy hydration can skip rendering entire trees until after certain conditions are met. He notes that skipping or deferring element creation can drastically boost startup performance, but it also means developers must carefully manage the state of partially loaded sections. He revisits pitfalls where typed input fields revert or lose user data if the hydration step overwrites them at the wrong time.

These details illustrate the push-and-pull between giving the server control for the fastest initial render and letting the client adapt seamlessly to user interactions. Ryan cites partial solutions, like event replay or transitional placeholders, while acknowledging each adds complexity. Ultimately, the best outcome is a library that gracefully handles real-time input, even during extended hydration delays. Listeners gain insight into the fine-grained puzzle of making advanced SSR and hydration techniques work for interactive apps without disorienting end users.

### 2:12:00 - 2:18:00 | Sharing and Deduplicating Data Across Components

A question from chat spurs Ryan to explain how multiple components can share server-fetched data without duplicating payloads. He explores whether context or prop passing is best for distributing data in large applications. Under the hood, Solid’s updated serializer ensures identical objects stream only once, even if they’re used in many subtrees, preventing ballooned payload sizes that hamper performance.

Ryan acknowledges that the solution might still require developers to carefully define data flow—especially when layering nested components or advanced routing. By showing how a single data set can be toggled or filtered across multiple children, he reiterates the power of Solid’s reactivity. Although it demands a conscious architecture, the reward is minimal overhead when re-rendering or updating. This approach emphasizes not just library optimizations but also guiding developers to adopt patterns that scale gracefully.

### 2:18:00 - 2:24:00 | Future of Resource and Store Separation

Continuing on data handling, Ryan underscores that resource loading and state management remain top priorities. He reveals that major reworks are likely to revolve around splitting out resource functionality from the reactive store, so developers can choose exactly how they want data to be persisted or updated. This might also open doors for third-party libraries to hook into Solid’s new architecture, facilitating deeper integration with tools like query managers or advanced caching layers.

He emphasizes that 1.8 is only the start of this pivot. If done right, the next major iteration of Solid will support partial hydration and streaming in a more composable way. By refactoring resource logic, signals and memorized data can play better together, reducing the need for specialized wrappers. In closing these thoughts, Ryan expresses excitement about upcoming synergy between streaming, reactivity, and advanced forms of data persistence, hinting that user feedback will be critical to refining these new ideas.

### 2:24:00 - 2:30:00 | Signals Everywhere and Ecosystem Shifts

Ryan notes that multiple frameworks—React, Angular, Svelte—are pivoting to signals or fine-grained reactivity. This marks a departure from the once-dominant virtual DOM model. In his view, the entire sector is aligning around a more precise style of rendering, though each library implements it differently. He points to recent public announcements from Svelte and Angular about adopting signals, suggesting an industry-wide trend.

He sees a future where signals could become standardized, though that remains a complex prospect. Differences in scope-based vs. stack-based reactivity, or compiler vs. runtime approaches, stand in the way of a single unified model. Even so, the momentum is unmistakable. Libraries like Solid, which embraced signals early, effectively demonstrate the real-world gains in speed and simplicity. Ryan believes that bridging frameworks with a common reactivity specification could reduce repeated effort and empower more flexible cross-library integrations.

### 2:30:00 - 2:36:00 | Collaboration Among Framework Authors

Ryan describes how framework maintainers, including Misko Hevery, Rich Harris, and others, have behind-the-scenes discussions on signals. These conversations hint at potential cross-pollination of reactive concepts. However, each ecosystem must still satisfy its own user base, which can mean unique syntaxes or compile strategies. Ryan acknowledges that Quick, Svelte, Angular, Vue, and Solid each approach reactivity from slightly different angles.

He remains optimistic about the prospect of sharing core ideas and bridging knowledge across frameworks. Even if they don’t converge on identical solutions, frequent communication fosters incremental improvements. He references discussions around language-level solutions or standardized signals, cautioning that full consensus is a long shot. Still, seeing popular projects embrace similar building blocks reinforces the sense that signals represent a more modern, granular way to handle state in the browser.

### 2:36:00 - 2:42:00 | Polishing 1.8 for Release

Ryan highlights final checks on 1.8, explaining that Babel presets and other dependencies must align before a stable version ships. He says the last steps often involve pinning versions, verifying integrations with popular bundlers, and ensuring code-splitting remains robust. Beta releases have helped catch any straggling errors in SSR or streaming logic, thanks to community testers.

He underscores that community feedback is critical at this juncture, noting that real-world applications unearth scenarios test suites might miss. Though debugging advanced features can be complex, the payoff is a more stable library ready for broader adoption. Ryan values the interplay of frequent early releases and user-driven QA, a formula that has kept Solid agile yet reliable. As the library matures, each minor version cements improvements without forcing disruptive rewrites.

### 2:42:00 - 2:48:00 | Transitioning Toward Resumability Possibilities

A question resurfaces about partial hydration vs. true resumability. Ryan reiterates that Solid’s approach is incremental, focusing on deduplication and streaming. Full resumability means carrying over a complete reactive graph from server to client, something that introduces complexities around which signals to serialize, how to track side effects, and what code must re-run.

He contrasts this approach with Quick’s emphasis on serializing as much state as possible, acknowledging that while that can reduce client-side costs, it can also increase server overhead. Solid’s philosophy has always been to minimize overhead whenever possible, so the team is cautious about jumping headlong into a one-size-fits-all strategy. Still, 1.8’s improved serialization sets the stage for more advanced features. If done carefully, Solid might one day offer near-instant handoff without replaying every lifecycle function in the browser.

### 2:48:00 - 2:54:00 | Leveraging Platform Caching and Revalidation

Ryan highlights recent hosting platform announcements—such as Netlify’s new caching headers and Vercel’s stale-while-revalidate capabilities—that align well with Solid’s SSR strategies. By adopting standard HTTP headers for controlling cache and revalidation, frameworks can keep deployment processes simpler. Ryan sees a future where references to “ISR” or platform-specific regeneration fade, replaced by universal web patterns that anyone can configure in their headers.

He commends Netlify for embracing these building blocks, noting that they reduce the friction for developers looking to deploy partial or dynamic pages. With edge functions now supported across platforms, it becomes easier to stitch together server rendering, caching, and streaming with minimal custom code. From Ryan’s viewpoint, letting the browser and server handle caching at a standards level means fewer proprietary hoops to jump through. As a result, Solid can focus on refined reactivity rather than custom caching rules.

### 2:54:00 - 3:00:00 | Aligning Frameworks and Hosting APIs

Ryan acknowledges that he rarely highlights Netlify specifics, but he sees them pivoting back to a developer-focused model through these new features. He celebrates the shift toward well-known HTTP patterns, pointing out that advanced deployment workflows need not rely on complicated frameworks if standard caching directives suffice. This resonates with Solid’s design: keep the core minimal and let hosting layers handle heavy lifting for revalidation and caching.

He references remix maintainers who champion a similar approach, emphasizing progressive enhancement and standard HTTP as a baseline. Tools like stale-while-revalidate become building blocks that apply equally well to frameworks like Solid, React, or Next. The result is a more level playing field for developers, where each framework can shine purely based on app logic rather than special hosting adaptors. Ryan views these converging trends as empowering the entire ecosystem, reducing fragmentation and promoting more user-friendly experiences.

### 3:00:00 - 3:06:00 | Recap of ViteConf and Framework Updates

Ryan shifts gears to discuss ViteConf, praising its pre-recorded talk format and global-friendly schedule. He name-drops talks on Angular’s new signal direction, Svelte’s experimental features, and other less mainstream solutions like Marco. Despite watching remotely, he catches enough to see that signals and partial hydration are thematic threads across the JavaScript ecosystem. This united focus reaffirms Solid’s path, as each framework wrestles with performance and developer ergonomics in distinct ways.

He recalls how Theo from t3.gg also presented on building React-centric solutions, bridging the React community with Vite’s modern bundling approach. Ryan finds it refreshing that React devs are more openly discussing advanced SSR patterns. This cross-community dialogue was once rare but now proliferates, expanding everyone’s horizons. Watching these diverse frameworks tackle the same core challenges—data fetching, streaming, or transitions—further cements the notion that reactivity is the bedrock for next-generation tooling.

### 3:06:00 - 3:12:00 | Quick’s Claims and Verifying Virtual DOM Use

Ryan references a talk where Quick’s maintainers claimed they avoid using a virtual DOM. Curious, he checks Quick’s playground code and finds that while it might not rely on the same diffing strategy as React, it still constructs an object tree to represent elements. In Ryan’s view, that still qualifies as a form of virtual DOM. He recognizes that marketing language can differ from underlying realities, with each project optimizing for different concerns.

He draws parallels to Solid, which compiles away traditional VDOM overhead but still internally leverages specialized data structures to manipulate DOM nodes. The main takeaway is that frameworks often apply the label “no VDOM” when they mean “no typical diffing algorithm.” Each library’s approach can be valid, but the difference lies in how they schedule updates and whether they skip large patches in favor of micro-optimizations. For Ryan, this distinction is key to understanding the trade-offs between frameworks.

### 3:12:00 - 3:18:00 | Upcoming Guests and Cross-Pollination

Looking ahead, Ryan announces that Dominic Gannaway from Svelte will appear on the stream to discuss Svelte 5’s design. He’s eager to discover how “runes” and compiler-based reactivity might align with or differ from Solid’s runtime-first approach. Soon after, Michael Rawlings will share updates on Marco’s meta-framework. Ryan sees these dialogues as a prime opportunity to compare notes, gleaning best practices from each corner of the reactive spectrum.

He briefly recalls meeting Rich Harris in person for pizza, mentioning that these casual gatherings often reveal shared pain points and triumphs. While the frameworks differ in syntax and developer culture, the maintainers share common goals: simpler mental models and unstoppable performance. By consistently inviting them to the channel, Ryan fosters mutual understanding that enriches Solid’s future planning. This kind of cross-pollination is a hallmark of open-source collaboration, especially in an era where signals are reshaping how teams handle state.

### 3:18:00 - 3:24:00 | Embracing Complexity and the Svelte 5 Arc

Ryan reflects on Svelte’s journey “embracing complexity.” Once famous for minimal boilerplate, Svelte now sees a need to handle advanced cases—like SSR transitions, runes, or partial reactivity. The change raises concerns that Svelte 5 could mirror Vue 3’s transition period. Yet Ryan contends that these complexities stem from genuine developer needs, not theoretical over-engineering. Even Svelte enthusiasts crave more direct control over reactivity and data flows.

He likens Svelte’s evolution to Solid’s own path: starting lean but eventually exposing deeper primitives for complex applications. While Svelte 5 might be a departure from pure simplicity, it still aims to keep the learning curve gentle. Ryan sees parallels in how frameworks inevitably grow more powerful to meet real-world demands. If done right, Svelte’s new features can maintain a friendly DX while enabling robust logic for enterprise apps—a balance Solid strives for, too.

### 3:24:00 - 3:30:00 | React’s Position and Signals in the Mainstream

Ryan cites a blog post arguing that React is becoming more isolated as other libraries adopt signals. He clarifies that React’s inertia stems from huge legacy usage and cautious incremental changes. Rather than rewriting the entire engine, React invests in features like server components and concurrency, which might ultimately converge with signals. He points out that React’s team has historically taken years to integrate new paradigms, so signals could eventually surface.

He also acknowledges that React’s scale imposes rigorous testing and a desire to avoid abrupt userland breakage. This means signals may appear in React only when they can be introduced as a stable, optional feature or via third-party libraries. The rest of the ecosystem, less encumbered by existing patterns, can experiment faster. In Ryan’s view, the next few years will clarify if React aligns with the signals wave or continues to refine concurrency and server rendering along a parallel path.

### 3:30:00 - 3:36:00 | Compiler-Based Innovations and Cross-Ecosystem Learning

Ryan touches on community threads analyzing how Svelte implements runes and possible reactivity expansions. He praises the open-mindedness of the Svelte team, who are not afraid to break older assumptions for the sake of new capabilities. This resonates strongly with Solid’s own willingness to revamp key APIs when evidence suggests a net gain. Both communities exemplify a commitment to iterative progress, even if it challenges early marketing claims of simplicity.

He also speculates that these advanced reactive systems could unify cross-application state in ways older approaches never managed. Not every developer wants to juggle separate data stores, asynchronous fetchers, and client transitions. By weaving signals directly into the compile step or deeper runtime, frameworks might realize a more seamless data flow. Ryan suggests that Svelte’s or Solid’s explorations in advanced reactivity could inform each other, heightening the pace of innovation across the JavaScript world.

### 3:36:00 - 3:42:00 | Finalizing 1.8 and Beta Testing

Ryan returns to the topic of wrapping up Solid 1.8. He concedes that ephemeral bugs in hydration or transitions can linger if not thoroughly tested. This is why early adopters trying out betas are key to verifying real-world readiness. He thanks the community for jumping into the pre-releases and providing feedback on how the new streaming serializer and hydration logic fare in complex scenarios.

He reaffirms the library’s commitment to incremental improvement, rather than sweeping changes that risk breaking stable applications. A carefully managed release cycle keeps developers confident about upgrading. Ryan sees each resolved issue as a testimony to collaboration between library maintainers and the user base. This synergy allows Solid to adopt forward-thinking techniques—like partial hydration or advanced transitions—without sacrificing day-to-day reliability for production apps.

### 3:42:00 - 3:45:32 | Closing Thoughts and Future Streams

In the final minutes, Ryan sums up the day’s conversation, reiterating that 1.8 focuses on internal power-ups rather than splashy new APIs. He acknowledges how small but crucial updates, like stronger deduplication and better hydration, pave the way for future expansions. Listeners are reminded about upcoming guest appearances from key figures in the Svelte and Marco communities, which promise more cross-framework insights.

He wraps by thanking everyone who tuned in, mentions his playful use of novelty sunglasses earlier in the stream, and signs off on a friendly note. The underlying message is that Solid’s journey continues, shaped by open discourse and methodical engineering. As new patterns and philosophies around signals emerge, Solid aims to remain at the forefront, balancing performance with user-friendly design. With that, the session ends, leaving a hopeful tone for the library’s evolution in the months ahead.