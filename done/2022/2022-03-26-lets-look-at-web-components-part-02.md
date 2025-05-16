---
showLink: "https://www.youtube.com/watch?v=BEWkLXU1Wlc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Let's look at Web Components"
description: ""
publishDate: "2022-03-26"
coverImage: "https://i.ytimg.com/vi/BEWkLXU1Wlc/maxresdefault.jpg"
---

### 01:24 - 01:30 • Scaling Components and the Overhead Dilemma

Drawing on personal experience, the host addresses a long-standing belief that “using the platform” should inherently reduce complexity and improve performance. Through a series of benchmarks, he discovered that, as one scales up the number of components, certain JavaScript frameworks can outperform raw web component solutions. This is partly because frameworks can manage reconciling updates at a higher level, whereas each custom element can become an isolated island with overhead in creation and lifecycle handling.

He recalls writing custom, hand-optimized code for table updates, only to find that it still lagged behind an optimized virtual DOM approach once the table contained thousands of elements. His findings highlight how the DOM itself can become the bottleneck. Although simpler, unoptimized tasks favor minimal overhead, real-world apps often demand sophisticated orchestration that frameworks can deliver. This conclusion illuminates the tension between raw web components and advanced frameworks, setting up the more critical question of whether web components are always the right tool.

### 01:30 - 01:36 • Reflecting on the Limits of Web Components

In an introspective moment, the host revisits how his journey into web components originally inspired the design of Solid, aiming to separate the reactive engine from the DOM element concept. By acknowledging that not every “component” in an application truly needs to be a custom element, he freed Solid to excel in performance. This realization marks a critical shift in his thinking—recognizing that DOM-based design constraints could hamper the advanced optimizations demanded by modern apps.

He discusses a key insight that simply scaling up more DOM elements, even if they’re “native” to the platform, doesn’t guarantee efficiency. In advanced usage scenarios, frameworks strategically minimize DOM interactions, while web components remain bound to DOM life cycles. The upshot is that while custom elements shine for encapsulated widgets or design systems, they are less suited for orchestrating an entire complex application at scale. This distinction underlies the host’s evolving perspective on the role of standards versus specialized tooling.

### 01:36 - 01:42 • Rethinking Future Proofing and Rich Harris’s Perspective

The host references a well-known article by Rich Harris, creator of Svelte, who critiqued the perceived inevitability of web components. Among the key points were progressive enhancement pitfalls, CSS scoping challenges, and the tension between shipping new web standards and simply using existing frameworks. Harris questioned whether the energy spent standardizing web components could have been better used elsewhere, a view that the host finds provocative but partially reflective of real friction in the ecosystem.

In reviewing Harris’s critiques, the host clarifies that many outlined problems—like how forms behave or how attributes map to properties—are progressively being solved. Nevertheless, he echoes the sentiment that a standard-based approach can’t always keep pace with the fluid innovation happening in open-source frameworks. While web components solve certain reusability and encapsulation needs elegantly, they fundamentally lack features like composable control flow. This portion frames the dynamic interplay: new browser features come slowly, while developer demands evolve quickly.

### 01:42 - 01:48 • Components vs. DOM Elements: The Core Distinction

Here, the host crystallizes the conversation by separating the concept of a “component” as used in frameworks from a “custom element” as defined by web standards. A component in React, Vue, or Solid can be purely logical and might never correspond directly to a DOM node. By contrast, a custom element is intrinsically tied to a physical element. This architectural difference means frameworks can optimize rendering across many nested “components,” whereas each custom element inherently carries DOM overhead.

He underscores that no matter how many features get patched into web components, they remain locked into per-element life cycles. In frameworks, the abstraction boundary can exist above the DOM, enabling partial rerenders or advanced server manipulation. Thus, efforts to unify universal rendering with custom elements often require bridging layers. The host concludes that while web components aren’t flawed, they are not a one-stop solution for every scenario, clarifying where they excel and where they might hold developers back.

### 01:48 - 01:54 • Performance Benchmarks and Detailed Comparisons

The host dives into a new wave of performance tests, contrasting hypothetical “perfectly optimized” raw DOM manipulation against frameworks like Inferno, Lit, Svelte, and Solid. When scaled to thousands of elements, certain frameworks exhibit minimal slowdowns, leveraging built-in optimizations. In some cases, pure web component approaches remain behind these specialized libraries, illustrating that the best raw code can still struggle against frameworks specifically engineered for large-scale updates.

He recounts how he once suspected that direct DOM usage must be fastest, but discovered that overhead arises in places not always obvious—such as repeated event bindings, reflows, or synchronization points. Each new custom element is a boundary that might hamper global coordination. Seeing performance charts where advanced frameworks surpass or match handcrafted DOM code reaffirms the notion that “platform first” doesn’t inherently guarantee maximum efficiency once an application’s complexity grows.

### 01:54 - 02:00 • Revisiting Lit vs. Surplus vs. Solid and Other Findings

Highlighting older experiments, the host discusses a range of templating strategies—virtual DOM with hyperscript, string-based approaches like lit-html, and fine-grained reactivity. He notes that certain “just in time” template analyses can yield better performance than purely static solutions, while acknowledging that dynamic reactivity often requires setup work that can offset gains in small scales. This underscores the endless balancing act between compile-time intelligence, runtime overhead, and developer ergonomics.

He observes that even frameworks known for speed, such as Svelte, can lose their edge under certain scenarios if they rely heavily on re-rendering entire components. By contrast, solutions like Surplus or Solid exhibit minimal overhead by updating only granular parts of the DOM. This reaffirms that the “fastest” approach depends on architectural philosophy, specific usage patterns, and code volume. Though web components can adopt some of these techniques, they often trail behind the specialized approaches used in dedicated libraries.

### 02:00 - 02:06 • Deeper Reflection on Standards and Innovation

The conversation moves toward the broader question of whether standardization can keep pace with inventive library ecosystems. The host notes that each time a new feature is added to the browser, such as the shadow DOM or the template element, the industry’s definition of “good” or “needed” can shift before the feature fully lands. He observes this mismatch contributes to friction, where libraries have already evolved beyond the original problem a spec set out to solve.

He muses on “future proofing” and calls it a fragile notion, arguing that while web components will continue to gain advanced capabilities, their fundamental, DOM-bound nature will remain. Modern frameworks frequently operate above that layer, orchestrating interactions in ways standard APIs don’t natively support. Consequently, the synergy between standards and frameworks remains symbiotic but also inherently uneven, perpetuating the cycle of novel abstractions arising faster than specifications can canonize them.

### 02:06 - 02:12 • Use Cases for Web Components

The host outlines scenarios where web components indeed shine. Chief among them are design systems shared across disparate technology stacks, where custom elements act as stable building blocks that teams can drop into any framework or plain HTML. They also serve well for single-purpose widgets, like embedding a third-party customer support chat tool. In these cases, the strong encapsulation of styles and functionalities is an advantage, as is the ability to distribute them via CDNs.

He also brings up micro frontends, where large organizations might unify multiple independent codebases by exposing features as web components. While acknowledging performance overhead when multiple frameworks coexist, the uniformity of a custom element boundary can still simplify integration. Lastly, migration paths—like gradually replacing AngularJS with a newer framework—can benefit from bridging old and new with shared custom elements. These examples highlight that, while not always the fastest for entire apps, web components can be a strategic asset under the right circumstances.

### 02:12 - 02:18 • Wrapping Up the Web Component vs. Framework Debate

Here, the host underscores that mixing too many frameworks simply to exploit custom elements can bloat application size, defeating the idea of “universal reuse.” He jokes about shipping React, Vue, and Lit all in one page, driving home the inefficiency of layering multiple runtimes. The conversation also touches on performance trade-offs, reminding viewers that while micro frontends and shared design systems can justify it, every team must weigh complexity against the benefits of standard-based encapsulation.

Ultimately, he concludes that, for large single-page apps or highly dynamic interfaces, a specialized framework remains the best tool. Web components can fill specialized gaps, shine in modular distribution, and solve style or interop challenges elegantly. But if an entire app can remain inside one ecosystem, that choice often provides more direct control over routing, hydration, or partial updates. Viewers are left with a nuanced understanding that technology choices hinge on the scale and nature of each specific project.

### 02:18 - 02:24 • Revisiting Developer Productivity and Mindset

The host shares personal strategies on staying productive in a rapidly evolving ecosystem. He advocates for making informed technology choices at project start, then committing until a significant rewrite becomes necessary in future years. Acknowledging the constant flow of new frameworks and standards, he cautions that chasing every innovation can be paralyzing for commercial projects, where stability often overrides experimentation. Instead, incremental learning and planning for eventual migrations can reduce long-term technical debt.

He references how once a project’s direction is set—be it a React-based single-page app or a set of custom elements for a design system—teams should focus on building features without succumbing to “framework FOMO.” Though major leaps in SSR or new reactivity paradigms do arise, adopting them mid-development can derail schedules. By keeping an eye on the wider community discussions, developers can gather insights for the next cycle, ensuring that any pivot is deliberate rather than reactionary.

### 02:24 - 02:30 • Glimpses of WASM and Broader Future Trends

A question surfaces about WebAssembly (WASM), prompting the host to speculate on whether it might eventually surpass JavaScript for client-side frameworks. He acknowledges WASM’s potential to unlock near-native performance and open the door for languages like Rust or C# to run inside the browser. However, he notes the overhead of bridging DOM APIs and the possibility that specialized JavaScript solutions, after years of refinement, can sometimes match or outpace naive WASM implementations in real-world scenarios.

He also mentions that WASM could reshape server-side ecosystems, enabling compiled TypeScript or JavaScript code to run with greater efficiency. Drawing parallels to how advanced frameworks handle SSR, the host suggests that an eventual confluence of WASM and high-level reactivity might redefine application architectures. Though these are forward-looking statements, the conversation highlights a recurring pattern: each promising technology must first address deep integration challenges before it can usurp entrenched, highly-optimized JavaScript frameworks.

### 02:30 - 02:36 • Reflecting on The Ever-Changing Nature of the Web

The host broadens the lens to comment on the constant cycle of shifts in web development. He recalls an era of viewing page source to learn techniques, drawing a parallel to how each new wave of tools eventually becomes standard or obsolete. He points out that the web has always been dynamic: once a certain approach saturates the market, the community invariably seeks the next improvement—be it partial hydration, streaming SSR, or deeper concurrency models.

He sees no immediate end to this innovation, citing the once-monolithic React ecosystem’s pivot to server components and the potential for advanced micro-optimizations. Browser standards evolve slowly, while user-land evolves rapidly. For developers, the key is pragmatic adoption—knowing when to embrace something new versus stabilizing around proven solutions. The narrative loops back to the session’s core argument: web components are part of this ongoing story, valuable for certain problems but not necessarily the final chapter of how we build the web.

### 02:36 - 02:42 • Balancing Simplicity, Tooling, and Real-World Constraints

As the conversation continues, the host touches on the desire among some developers to code without build tools, harking back to a simpler era. While ESM and import maps bring a measure of that simplicity, modern best practices—like minification, bundling, and advanced SSR—often rely on tooling for critical optimizations. He recognizes that these complexities can create friction for those seeking a frictionless environment, but they also deliver the performance and advanced features enterprise apps demand.

He recounts that, ironically, the push toward standardization can spawn more JavaScript frameworks, not fewer, as each tries to wrap or improve native APIs. This paradox underscores the web’s resilience and adaptability. Even if the ultimate aim is less overhead and simpler distribution, real-world constraints—like older dependencies or heavy SSR needs—frequently keep build chains in play. The takeaway is that, while “just use the platform” remains a noble goal, it usually intertwines with these additional layers of tooling.

### 02:42 - 02:48 • Solid Start and Future Roadmap Teasers

The host briefly diverges to mention Solid Start, a project in progress that aims to fuse the Solid framework’s performance ethos with a high-quality developer experience for building advanced web apps. He admits the project remains in flux, needing better documentation and stable release phases. Nonetheless, it reflects how modern frameworks increasingly bundle routing, SSR, and data management as first-class citizens, echoing the route-based architecture discussions from earlier in the stream.

He envisions a near future where these integrated setups can unify server and client rendering with minimal overhead, leaning heavily on fine-grained reactivity. By bridging web component boundaries or allowing partial hydration, Solid Start might embody next-generation design patterns. However, the host tempers excitement by reminding viewers that completing such a tool requires rigorous edge-case handling and robust examples. This microcosm illustrates how frameworks evolve to address real developer needs, reaffirming that the web’s forward march is far from static.

### 02:48 - 02:54 • Community Engagement, Hackathons, and Learning Opportunities

The host mentions an ongoing hackathon for Solid, highlighting how communal events spur innovation and provide space for unexpected ideas. He encourages developers to share projects early, though he acknowledges the fairness concerns in showcasing them before voting. This anecdote reveals a broader community ethos: letting collaboration guide feature development, while also providing a learning ground for the curious to experiment with new patterns, including potential synergy between web components and Solid’s reactivity.

He touches on the healthy cycle of “hobby prototypes to production,” explaining that many robust community-maintained libraries start as small experiments. Web components have long thrived off such creative synergy, where early adopters shape patterns that libraries refine. With hackathons, those grassroots innovations can gain attention quickly, sometimes becoming core building blocks in future releases. By spotlighting shared learning, the host underlines how open collaboration often drives the web’s steady evolution more than mere top-down standards.

### 02:54 - 03:00 • WASM Redux and Potential Directions

Circle back to the WASM conversation, the host explores the possibility of compiling front-end frameworks like Solid into WASM. He cites efforts to refine AssemblyScript, bridging advanced reactivity with near-native execution. This could eventually streamline server-side tasks or open new front-end performance thresholds. Nonetheless, the host reiterates how direct DOM manipulation remains a sticking point, suggesting that bridging WASM’s binary advantages with HTML’s dynamic nature is a formidable but intriguing challenge.

He paints a future scenario where large portions of rendering logic could happen in a WASM context, while smaller, user-focused details remain in JavaScript. This hybrid approach might let frameworks partition the heavy lifting from everyday interactions. Although purely speculative, it underscores how “the next big thing” in web dev often merges older paradigms with new performance frontiers. The host’s optimism about such explorations complements earlier acknowledgments that no single standard or library can decisively solve every complexity.

### 03:00 - 03:03:45 • Final Thoughts and Conclusion

In the closing segment, the host reflects on the evening’s extensive exploration. Having traversed basic custom element usage, advanced library approaches, performance benchmarks, and philosophical debates on standardization, he affirms that web components remain a valuable yet specialized option. Applications focusing on widely shared design systems, micro frontends, or isolated widgets can benefit greatly from the platform’s built-in encapsulation. However, more comprehensive frameworks often offer a smoother path for large-scale SSR, complex routing, and partial hydration.

He wraps up by thanking participants for joining, acknowledging the thoughtful questions and lively chat. With a final note on upcoming content and the lively pace of the JavaScript world, the host reminds the audience that web development stands at a dynamic intersection of user needs, browser capabilities, and creative solutions. His sign-off invites viewers to continue exploring new ideas while remaining grounded in practical realities—an apt conclusion to a far-ranging discussion on the merits and limitations of web components in modern development.