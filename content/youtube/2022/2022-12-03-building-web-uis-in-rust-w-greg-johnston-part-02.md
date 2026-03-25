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