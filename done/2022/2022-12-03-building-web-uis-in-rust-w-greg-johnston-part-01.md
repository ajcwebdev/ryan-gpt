---
showLink: "https://www.youtube.com/watch?v=zgY7ql1xwW4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Web UI's in Rust w/ Greg Johnston"
description: ""
publishDate: "2022-12-03"
coverImage: "https://i.ytimg.com/vi/zgY7ql1xwW4/sddefault.jpg?v=6387ffbc"
---

## Episode Description

An in-depth conversation covering Rust for web UI, memory safety, reactivity, WASM, and the evolution of JavaScript frameworks for large-scale applications.

## Episode Summary

This wide-ranging discussion begins by introducing the guest speaker’s background and interest in Rust, exploring how its ownership model and memory safety features can offer advantages in certain scenarios. The conversation then shifts into practical examples of building user interfaces in Rust, highlighting the language’s synergy with WebAssembly to unlock high-performance possibilities directly in the browser. Various Rust frameworks and their relationship to existing JavaScript libraries are contrasted, demonstrating how differing reactivity approaches influence state handling and rendering. The participants discuss the broader trends shaping web development, focusing on reactivity, server-side rendering, and how large-scale adoption considerations drive different architectural choices. By weaving together experiences from JavaScript, Angular, React, and more, the talk underscores how Rust fits into the modern landscape while acknowledging its potential trade-offs in everyday application development. Overall, it paints a picture of a rapidly evolving ecosystem where performance, memory safety, and developer ergonomics all intersect to shape the future of building web interfaces.

## Chapters

Below are 61 chapters spanning approximately five hours and three minutes of content. Each chapter covers a 5-minute block, except the final one, which captures the last few minutes.

### 00:00 – 00:05 Introduction and Context

The conversation starts with a warm welcome and a quick overview of what to expect. The host introduces the speaker, mentions the day’s topic—Rust for web UI—and sets the stage for an in-depth exploration of how Rust can intersect with modern front-end needs. They also share brief observations on how JavaScript has dominated the browser, leading to questions about alternative languages that compile to WebAssembly. The opening frames the episode as a journey into performance, memory safety, and emerging web technologies.

### 00:05 – 00:10 Early Impressions of Rust

Attention turns to first impressions of Rust. The guest recalls how they struggled with manual memory management in other languages and felt drawn to Rust’s compile-time checks. Rust’s ownership and borrowing concepts are highlighted as major strengths for avoiding runtime errors. They emphasize that Rust’s syntax might feel unfamiliar to web developers coming from JavaScript. However, the reliability gained by catching errors early is often worth the learning curve. This sets the tone for why Rust, despite initial friction, can be appealing.

### 00:10 – 00:15 Memory Safety and Borrow Checker Basics

Discussion moves to Rust’s most defining feature: the borrow checker. Concrete examples illustrate how it prevents common bugs in C/C++ by prohibiting invalid references and data races. This level of safety eases worries about certain classes of production failures. They compare this to JavaScript, where a dynamic runtime and garbage collector remove many manual concerns. Yet Rust’s strict approach yields a more predictable performance profile and can help avoid subtle memory issues. The audience hears why many see Rust as a safer foundation.

### 00:15 – 00:20 Contrasting TypeScript and Rust Typing

Typescript often arises as a natural transition from JavaScript. The conversation now spotlights the contrast between TypeScript’s structural typing and Rust’s more rigid, ownership-based model. Each has merits, but they solve distinct problems in distinct ways. While TypeScript helps catch type mismatches, Rust enforces memory correctness and strict mutability. The speaker suggests TypeScript can feel awkward when retrofitting types to a dynamic language. Conversely, Rust was designed from the start with its system-level constraints in mind.

### 00:20 – 00:25 Setting Up a Basic Rust Project

Attention turns to practicalities: how to begin a Rust project for the web. The talk describes `cargo` as Rust’s build tool and touches on choosing targets for compiling to WebAssembly. Steps include creating a new Rust package and configuring it properly. They note that, unlike JavaScript, Rust code must pass the compiler’s stringent checks before running. This can slow first iterations but often leads to more stable results once it compiles. The mention of trunk or similar tools hints at seamless development cycles.

### 00:25 – 00:30 Working with WebAssembly

The conversation addresses how Rust compiles to WASM, bridging the gap between systems-level code and the browser environment. Importantly, participants highlight that WASM itself lacks direct DOM access, relying on JavaScript glue code for most interactions. They compare standard JavaScript bundlers to the specialized pipeline needed for WASM. While some find the extra steps daunting, the potential performance gains and the possibility of sharing Rust code between server and client are seen as key motivators.

### 00:30 – 00:35 Overcoming DOM Bottlenecks

A central worry about WebAssembly has been the perceived slowdown crossing from WASM to the DOM. The guest dispels some myths, explaining that while bridging strings and complex data structures is not free, the overhead may be smaller than expected. They emphasize architecture: a carefully structured application can reduce the calls into the DOM. Fine-grained updates can be orchestrated to mitigate bridging costs. The group hints that strategies from modern JS frameworks can inform effective WASM-based approaches.

### 00:35 – 00:40 Introducing Reactive Frameworks in Rust

Conversation shifts to Rust frameworks that embrace reactivity, such as Leptos and Sycamore. Inspired by the signals concept in JavaScript’s Solid, they aim to let developers write granular, state-driven code with minimal overhead. Participants outline the difference between coarse-grained approaches like Redux and finer-grained signals. They emphasize that Rust’s strict memory model complicates typical JavaScript patterns. These Rust frameworks solve it by carefully managing references to avoid concurrency pitfalls.

### 00:40 – 00:45 Case Study: U (Yew) and the Virtual DOM

Yew is mentioned as one of the earliest Rust/WASM UI libraries, employing a virtual DOM model reminiscent of React. This approach appealed to those who found Rust ownership rules tricky, as it presents a simpler mental model. Yet the conversation notes that a virtual DOM can bring overhead. Rust’s memory constraints might conflict with large-scale VDOM manipulations, driving new frameworks to experiment with signals or more direct DOM manipulation for speed.

### 00:45 – 00:50 Building a Simple Counter in Vanilla Rust/WASM

They walk through creating a bare-bones example: showing a count and increment/decrement buttons. This code highlights the necessity of bridging JavaScript events with Rust references, plus the friction around Rust’s strict references in callbacks. Working with small demos clarifies the overhead of repeated `.clone()` calls for state. Despite feeling clumsy, it illuminates how memory safety yields predictable runtime performance. The example also illustrates that a straightforward pattern is sometimes more verbose in Rust.

### 00:50 – 00:55 Rethinking State Sharing with Message Passing

Instead of sharing a mutable reference, they discuss an Elm-like approach: dispatching messages into a central loop, which updates state in one place. This feels reminiscent of Redux or Elm’s update function, ensuring no conflicting mutations. They highlight how this model blends well with Rust’s design, allowing multiple immutable references while a single function mutates underlying data. Though it can be verbose, it centralizes control and prevents accidental shared-state problems.

### 00:55 – 01:00 Elm-Style Architecture in Rust

Focus turns to frameworks like Yew in its “traditional” mode, which organizes code into `Model`, `Msg`, and `update`. The compilation-based macro expansions let Rust developers produce HTML-like templates, bridging the gap between compiled code and DOM operations. They point out that while this pattern is clean, it requires a virtual DOM or some mechanism to re-render after each update. The conversation underscores how Elm-inspired patterns ensure immutability, but can become cumbersome for smaller, more dynamic updates.

### 01:00 – 01:05 Sycamore’s Signal-Based Approach

Shifting to Sycamore, they describe how it uses a signal-based system inspired by Solid. Initially, older versions demanded manual clones of signals for closures, mimicking React’s hooks pattern in some ways. The newest release introduced a clever lifetime system, removing some overhead around references. They compare it to how Rust tries to keep memory safe while providing an ergonomic signal-driven UI. Listeners learn about the complexities of ownership in reactive code.

### 01:05 – 01:10 Leptos and Fine-Grained Reactivity

Leptos took lessons from Sycamore and Solid, using a unique runtime to store signals in a central registry. This allows copying small IDs instead of large data structures, easing memory concerns and dynamic scoping. They mention how Leptos attempts server-side rendering and even progressive enhancement. Some impetus comes from experiences of developers craving Rust’s reliability for both back-end and front-end. The conversation reveals that server and client can unify under Rust’s single-language approach.

### 01:10 – 01:15 Performance Talk: JS Framework Benchmarks

Attention shifts to the famous JS framework benchmark, comparing everything from React to smaller, more specialized libraries. WASM-based tools like Leptos, Sycamore, and Yew have begun appearing on these charts, sometimes outperforming popular JavaScript options. They explain that raw DOM manipulation is still the largest factor, so well-architected Rust frameworks can compete. Overhead bridging from WASM to the DOM remains a real consideration, but innovative frameworks manage to stay on par with top JS contenders.

### 01:15 – 01:20 Server-Side Rust vs. Node or Deno

Rust’s strengths shine on the server. The group mentions that Rust code often handles greater concurrency with fewer resources than Node. Freed from garbage collection, Rust yields smaller latencies under heavy loads, as seen in benchmarks for high-traffic apps. In discussing single-language stacks, they acknowledge the draw of JavaScript on both client and server. Rust, however, can unify certain back-end tasks and compile them into fast microservices. The conversation underscores the synergy of Rust from top to bottom.

### 01:20 – 01:25 Trade-Offs for Rust in Front-End

Participants weigh whether Rust is overkill in a browser environment. Memory safety is less critical on a sandboxed tab, but the performance gains may matter for data-heavy or graphics-intensive apps like Figma. They note that for everyday forms or simpler UI, JavaScript might suffice. Larger teams might prefer well-known React or Svelte ecosystems. Rust appeals more strongly when memory control or performance is paramount, especially for complex use cases.

### 01:25 – 01:30 Progressive Enhancement with Rust

They highlight a strategy for bridging the initial load time issue. Apps can render with server-driven HTML so users see content instantly, then WASM code hydrates UI interactions seamlessly. This approach means gracefully degrading if WASM isn’t supported. The conversation frames it as a path to shipping Rust UI without sacrificing user experience on slow networks or older devices. Real-world examples reaffirm the method’s viability.

### 01:30 – 01:35 Q&A on Migration Concerns

Listeners submit questions about whether it’s worth migrating an existing React or Angular app to Rust. The general consensus: only if you have performance-critical needs that justify the cost. Tools to ease rewriting remain immature. They emphasize that partial integration is sometimes possible—embedding small Rust/WASM modules for CPU-heavy tasks. Complete rewrites can be expensive. The talk suggests starting with incremental adoption in critical hotspots.

### 01:35 – 01:40 Evolution of Reactivity Concepts

The conversation takes a historical view. Signals existed in early frameworks like Knockout, and React introduced a component-based approach. Meanwhile, Angular used RxJS streams, which can feel cumbersome for everyday UI tasks. From these roots, modern frameworks like Svelte, Solid, and the Rust-based Sycamore or Leptos have embraced auto-tracked signals. Attendees discover how subtle implementation details—like avoiding explicit subscription arrays—improve ergonomics.

### 01:40 – 01:45 Overhead of VDOM vs. Fine-Grained Updates

They compare the overhead of re-rendering entire component trees in React’s VDOM to fine-grained reactivity. A library like Solid pinpoints exactly which parts of the DOM change. Rust frameworks mimic that for optimal performance. But the group acknowledges that a VDOM can be easier for new developers, who see a simple “render the whole tree” model. Fine-grained reactivity demands a deeper grasp of dependencies. This trade-off drives differences among frameworks.

### 01:45 – 01:50 Angular Signals and Future Trends

They mention Angular’s move to signals, a sign that Google’s flagship framework wants more efficient updates. This parallels industry discussions about dropping large-scale re-renders in favor of targeted computations. Speculation arises: as major frameworks adopt signals, the lines blur between Rust-based and JavaScript-based approaches. Some wonder if we’ll see universal reactivity patterns across multiple languages and ecosystems, reshaping how we build front-ends.

### 01:50 – 01:55 Discussion on Developer Experience

Framework choices often hinge on ergonomics and familiarity. Some argue that Rust’s advanced features can frighten front-end devs, while others insist that once mastered, Rust leads to more stable code. They note that TypeScript, for example, is popular partly because it extends plain JS. Rust is a bigger leap, requiring new patterns and mental models. Whether or not teams adopt it depends on their priorities and risk tolerance.

### 01:55 – 02:00 The Momentum Behind Rust

Attendees learn that Rust is no longer a niche systems language. With corporate backing from browsers and big tech, its community has grown. The show mentions that many devs find rust-analyzer and cargo on par with JavaScript’s tooling. Excitement stems from Rust’s consistent ranking as the “most loved language” in certain surveys. While still overshadowed by JavaScript in sheer usage, Rust’s ecosystem expansions—like for the front end—point to ongoing adoption in new domains.

### 02:00 – 02:05 Breaking Down a Larger Rust/WASM Example

They briefly present a more complex example—possibly a to-do or small UI with forms. This showcases how signals manage state while trunk or cargo-leptos handle hot reloading. Listeners see how all the pieces fit. When forms submit, server functions can unify the back-end and front-end logic, leaning on Rust’s typed data structures. This reveals a powerful synergy: strongly typed validations flow seamlessly between client and server.

### 02:05 – 02:10 Optimistic UI and Server Functions

Adopting patterns reminiscent of Remix or React server components, Rust-based frameworks experiment with server functions. They share data safely, then push updates to the front end with minimal overhead. Optimistic UI is possible when signals update immediately, with server confirmation following. The conversation likens it to SvelteKit or Next.js patterns, showing that Rust frameworks aim to match modern developer expectations for a fluid user experience.

### 02:10 – 02:15 Code Splitting Challenges with WASM

They examine how JavaScript frameworks have gotten adept at lazy-loading chunks. WASM code splitting is still early, with fewer robust solutions. This complicates large apps that want minimal initial payloads. Some advanced tooling splits a WASM binary, loading extra parts only when needed. But it’s not as polished as Webpack or Vite code-splitting. Panelists see promise but caution that it’s an area in progress for Rust-based UIs.

### 02:15 – 02:20 Rust’s Ownership Model in Big Applications

As the conversation widens, they talk about real-world codebases with many devs. Rust’s ownership model can reduce certain classes of bugs but demands careful design. This can either clarify architecture or bog teams down if they lack experience. They encourage investing in training and building a shared mental model for memory safety. When all devs understand it, Rust fosters highly reliable software. If not, collisions with the borrow checker become frustrating and hamper productivity.

### 02:20 – 02:25 Reflecting on React’s Continued Dominance

The host brings up a question: given so many new frameworks, is React losing ground? They observe that React remains the default choice for many organizations, with a vast ecosystem and hiring pipeline. Panelists agree that while React’s popularity continues, new ideas from Rust or smaller JS libraries influence the next stage of React’s evolution. It might remain prominent for years but incorporate more advanced patterns along the way.

### 02:25 – 02:30 Is React “Good Enough”?

They address the notion that React suffices for most use cases. Some developers see minimal reasons to switch unless an approach is 10x better. Yet performance-sensitive teams or those wanting a single-language Rust stack might still explore alternatives. Listeners hear that every big migration has trade-offs. The group stresses that companies weigh community, tooling, and staff familiarity. Even if Rust or alternative frameworks offer better performance, adoption often hinges on practical constraints and ROI.

### 02:30 – 02:35 AI and Far-Future Possibilities

A speculative thread appears: could AI drastically change front-end development? People imagine code generation, partial hydration, or advanced analysis removing manual steps. Some see such leaps as a decade or more away. They note that current incremental evolutions—like signals or WASM—may look modest next to hypothetical AI-driven frameworks. Yet these small steps often pave the way for big transformations, gradually laying the foundation for more radical future tech.

### 02:35 – 02:40 SSR, Edge, and Streaming

The episode circles back to SSR strategies. They touch on how Rust servers or serverless setups can render partial HTML, then “stream” content for quick time-to-interactive. The conversation references chunked encoding and dynamic data. They mention that some serverless providers still lack robust streaming support, sparking debate on the best ways to deliver partial content. This approach can emulate single-page app speed without shipping a massive JavaScript bundle upfront.

### 02:40 – 02:45 The Alex Russell vs. Theo Debate Mention

They bring up a recent conversation between community figures Alex Russell and Theo, exploring how “server-first” mentalities clash with startup demands. Russell emphasizes minimal overhead for broad audiences, while Theo prioritizes dev speed in small teams. The speaker notes the tension: what works for large user bases or corporate code cleanup might not suit agile startups. This debate underscores differing vantage points on how much JavaScript is truly necessary for a given project.

### 02:45 – 02:50 Large Teams vs. Small Teams

They compare how huge organizations often have messy code and slower iteration. Adopting a heavier abstraction or strictly controlled framework might save them from themselves. Meanwhile, small teams can move fast and embrace riskier new tools. Rust’s safety can be a boon for large codebases, avoiding crippling bugs. In smaller startups, the overhead might feel burdensome unless they specifically need system-level performance. The balance depends on company structure and goals.

### 02:50 – 02:55 Another Look at Quick, Astro, and Partial Hydration

The show references new JS meta-frameworks like Astro and Quick that highlight partial hydration or resumability. They muse whether Rust frameworks can mirror these patterns, minimizing re-renders and shipping minimal code. Although complicated, these designs drastically reduce payloads for content-heavy sites. If Rust-based frameworks replicate those strategies with WASM, users could see near-instant page loads. However, the technical path remains challenging, with many moving parts still under active development.

### 02:55 – 03:00 The Cost Triangle: Load Times vs. Developer Time

They revisit the inevitability of trade-offs: a more optimized end-user experience can demand more complex build setups or advanced framework patterns. Meanwhile, simpler solutions might cost user performance but ease developer workflows. Rust solutions often demand mental overhead upfront. If that leads to less debugging or unstoppable performance in production, many see it as worthwhile. Still, not every team invests in that path, exemplifying the constant negotiation between engineering ideals and real-world constraints.

### 03:00 – 03:05 WASM Streaming vs. JS Streaming

A comparison arises between how streaming works for JavaScript versus WASM. JavaScript can be code-split and parsed incrementally, while WASM has streaming compilation that can keep pace with network speeds. However, the group stresses that large WASM binaries can still hurt initial load times. Combining progressive rendering with serverless or edge computing can offset some costs, but the complexity grows. Devs weigh these complexities against potential speed gains.

### 03:05 – 03:10 Memory Safety Revisited: Freed Freedoms

They circle back to how Rust forces developers to handle references carefully, freeing them from entire categories of runtime crashes or security holes. Comparisons to older experiences in C/C++ highlight the relief of compile-time checks. At the same time, the conversation clarifies that in practice, you still might wrap references for shared state or adopt escape hatches like `Rc<RefCell<>>`. While powerful, these can create runtime borrowing errors if misused, so caution remains.

### 03:10 – 03:15 Breadth of Libraries: Not Just UI

They briefly list other Rust libraries for tasks like HTTP routing, database access, or authentication. The notion is that a developer could build a “full stack” in Rust, only bridging to JavaScript when necessary. Nevertheless, JavaScript still dominates the front-end. The talk mentions that even if Rust is ideal for performance, the latter’s smaller ecosystem might deter some from adopting it fully. Incremental usage remains a likely approach.

### 03:15 – 03:20 Migrating from Angular, Vue, or React

Listeners curious about leaving established frameworks for Rust wonder about step-by-step processes. The hosts suggest building minor features or prototypes in Rust to gauge complexity and benefits, rather than a wholesale rewrite. They also point out that synergy is possible: Rust code can be compiled into a small WASM module, called from an existing Angular or Vue app. Over time, teams can expand Rust usage if it consistently proves valuable.

### 03:20 – 03:25 Handling Forms and Validation in Leptos

The conversation illustrates a typical scenario: a user form that updates state in real time. In Leptos, signals track each field, ensuring instant reactivity. The typed nature of Rust catches invalid data at compile time or in safe validations. They show how the form can submit to a server function, returning a result that re-initializes fields. This pattern mirrors more established “remix” approaches in JavaScript. A safe, end-to-end typed solution emerges, bridging front-end state and server logic.

### 03:25 – 03:30 The Future of Rust on the Web

They reflect on how improvements to WASM, such as interface types, could eliminate some bridging overhead. Future proposals, though slow-moving, might make Rust-based frameworks even more compelling if direct DOM access becomes cheaper. Yet even absent those proposals, the group sees incremental progress in tooling and libraries. As more devs adopt Rust for performance-critical tasks, new patterns and frameworks will keep evolving, potentially rivaling mainstream JavaScript solutions.

### 03:30 – 03:35 Revisiting React’s “Is It Dead?” Articles

A mention of blog posts that declare React’s demise leads to a candid discussion: React’s inertia and ecosystem are massive. Despite new innovations, React is unlikely to disappear anytime soon, though it could morph. They note how developers often wait for a tool that’s “10x better” before switching. This fosters a stable but sometimes static environment. Rust-based solutions must prove not just faster rendering but also better developer experience for broader adoption.

### 03:35 – 03:40 Patterns in Solid, Svelte, and Sycamore

They compare how signals in Solid or Sycamore re-calculate only the necessary DOM parts, while Svelte compiles reactivity into direct assignments. Each approach differs in developer style, yet all aim for minimal overhead. The synergy with Rust’s architecture becomes evident: controlling mutability strictly can yield tight updates. This resonates with how Svelte avoids re-render overhead. Attendees glean that cross-pollination of ideas between Rust and JS land is robust.

### 03:40 – 03:45 Large Company Use Cases

The speaker references known examples—like Figma or other design tools—that leverage WASM behind the scenes. They guess more enterprise applications might adopt Rust behind high-traffic UIs. The group warns that adopting Rust as a front-end solution still demands substantial buy-in. Tooling and libraries are less mature than React’s. But success stories keep emerging, indicating that large corporations see Rust’s potential value.

### 03:45 – 03:50 Quick Mention of Desktop Targets

Briefly, they note Rust’s potential for native desktop or cross-platform GUIs. Tools like Tauri or natively compiled UIs can share logic with a web-based approach, bridging multiple domains from a single codebase. However, the conversation centers on WASM, so the desktop angle remains a side note. Still, it’s a reminder that Rust’s versatility lets teams unify code for web, server, and desktop in ways JavaScript alone cannot.

### 03:50 – 03:55 Real-World Complexity: Dealing with Borrow Checker

They return to the friction of Rust in real projects: closures capturing state, references that move, and explicit lifetimes. Some devs find it maddening at first, but skillful library authors smooth many edges. They mention that once a framework abstracts away repeated boilerplate, writing UI code in Rust can feel somewhat like a JavaScript library. The trade is deeper initial complexity for strong guarantees at runtime.

### 03:55 – 04:00 Achieving Feature Parity with JavaScript Frameworks

A question arises about feature parity: router support, SSR, file-based routing, form actions—typical modern JS framework patterns. Rust frameworks have partial solutions, but some remain incomplete or experimental. They mention a few who replicate Next.js-like file routing or React Router-like APIs. The path is there, but official backing and polished docs can lag behind. Early adopters must be ready to handle more rough edges.

### 04:00 – 04:05 The Vital Role of Community

The discussion lauds the Rust community’s helpful spirit, referencing how maintainers and contributors have grown side projects like Sycamore or Leptos. This ethos mirrors early React or Vue communities that thrived on open collaboration. Yet JavaScript’s ecosystem is vaster by comparison, with unlimited packages. Rust is catching up, but adopting it might require writing some libraries yourself. Enthusiasts see this as an opportunity to innovate and shape a newer ecosystem from the ground up.

### 04:05 – 04:10 Maintaining a Single Language Stack

They reiterate the dream of using Rust for everything: high-performance server code, database interactions, and a WASM-based front end. The appeal is unifying types and logic, avoiding mismatched type systems across the stack. Still, real-world constraints remain. Hiring Rust developers is trickier, and bridging to existing TypeScript code can’t be avoided. The conversation acknowledges that a purely Rust stack is feasible but rare in mainstream business settings.

### 04:10 – 04:15 Summarizing Key Advantages

They compile a list of Rust’s front-end selling points: strong memory safety, potential for minimal overhead, advanced performance in complex workloads, and direct integration with a Rust back end. The trade-offs revolve around steeper learning curves, smaller communities, and trickier build processes. They emphasize that these are not necessarily negatives—teams skilled in Rust can produce robust apps with fewer runtime surprises.

### 04:15 – 04:20 The Intersection of Reactivity and Ownership

A reflective moment arises: reactivity thrives on shared state, but Rust fights uncontrolled mutability. Framework authors resolve this by localizing side effects or using message passing. Ownership rules thus shape the entire reactive design. When done well, it yields an architecture with clear data flow and minimal confusion about who can mutate what. Observers see parallels to React’s “one-way data flow” but enforced at compile time, leading to an arguably safer paradigm.

### 04:20 – 04:25 Alex Russell on Overuse of JS

They revisit criticisms from Alex Russell about shipping megabytes of JS for trivial interactions. The discussion recognizes that Rust or partial hydration can limit client-side code. The approach echoes Russell’s call for a “lighter web.” In contrast, some argue that shipping more code is acceptable if dev speed justifies it. The participants remark that bridging that gap is tough. Rust-based solutions align well with Russell’s minimal-JS vision but require new mental models.

### 04:25 – 04:30 The “Wait for Revolution” Mindset

A short exchange criticizes the notion of waiting for a mythical 10x improvement before adopting new tech. They note that progress is incremental and that early adopters push the ecosystem forward. Others caution that jumping on every new framework can be risky, especially for large companies. The balanced view is to assess team readiness, potential performance gains, and ecosystem maturity, rather than hoping an outright revolution appears spontaneously.

### 04:30 – 04:35 Implementation Details: WASM Bindgen

They highlight the `wasm-bindgen` library, which facilitates calling JavaScript APIs from Rust. This is where DOM interaction typically occurs, bridging the two languages seamlessly. Its macros simplify referencing window, document, and DOM methods. While powerful, it still demands explicit conversions for strings and other data types, leading to potential overhead. The group suggests that focusing on minimal crossing points can keep performance stable and maintain code clarity.

### 04:35 – 04:40 Multi-Threading in WASM

A question arises about concurrency: can Rust’s concurrency model shine in the browser? They explain that full multi-threading requires `SharedArrayBuffer` and is restricted to web workers, complicating direct DOM usage. Therefore, concurrency in a WASM UI remains limited. Heavy processing can happen in a worker, but updating the DOM still requires the main thread. The conversation clarifies that true multi-threaded WASM UIs may emerge only if the platform evolves.

### 04:40 – 04:45 Tactical Advice for Rust Beginners

The participants share tips for newcomers: start with simple command-line Rust projects to learn ownership, then experiment with a small WASM app. Focusing on an approachable library like Leptos or Sycamore might ease the transition. They also point to comprehensive docs and community examples. Engaging in open-source frameworks clarifies tricky borrow checker issues specific to UIs. Persistence pays off, and once you understand the fundamentals, building complex apps becomes more natural.

### 04:45 – 04:50 Impact of Modern JavaScript Tools

They mention how Babel, TypeScript, and advanced bundlers made JavaScript more cohesive. Some wonder if a similarly robust wave of tooling will position Rust as a top-tier front-end contender, especially if the developer experience smooths out. Better editor support, official frameworks, and stable WASM features might replicate the transformations we saw in JS land. The panel remains optimistic but acknowledges that it took years for JavaScript to refine these tools, so Rust may have a similar journey ahead.

### 04:50 – 04:55 Milo’s Reactivity Innovations

The host references new developments in advanced reactivity for Rust. This involves sophisticated ways of tracking dependencies and updating nodes only when needed, further shrinking overhead. The mention of performance benchmarks underscores real gains. Such improvements echo how JavaScript frameworks keep refining their reactivity models. Rust stands to benefit from these breakthroughs, especially for complex UIs, but it requires library authors who deeply understand both Rust ownership and reactive computing patterns.

### 04:55 – 05:00 Final Remarks and Project Links

As the show winds down, the guest shares links to repositories like Leptos, Sycamore, and Yew. They encourage listeners to explore small demos, file issues, and contribute. Rust’s success depends on a growing community refining these tools. Both host and guest reflect on the synergy between Rust, WASM, and front-end paradigms. They invite people to test real apps, share experiences, and consider how memory safety and performance might shape tomorrow’s web. It’s a call to embrace new possibilities.

### 05:00 – 05:03 Conclusion and Sign-Off

The final moments include a quick recap of the major insights, from Rust’s unique safety guarantees to the potential for bridging server and client with one language. The host reiterates gratitude for the guest’s time and expertise. They mention future topics, such as continuing to watch how Rust-based frameworks evolve and how JavaScript frameworks respond with new features. Listeners are thanked for tuning in, and the episode concludes with a brief note on upcoming content.