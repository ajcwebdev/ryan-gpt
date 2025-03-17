---
showLink: "https://www.youtube.com/watch?v=Ywv8cGOVNMg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look At SolidHack Submissions"
description: ""
publishDate: "2022-04-02"
coverImage: "https://i.ytimg.com/vi/Ywv8cGOVNMg/maxresdefault.jpg"
---

## Episode Description

A wide-ranging live stream explores new features in JavaScript frameworks, highlights community projects from a hackathon, and examines performance considerations in modern web development.

## Episode Summary

This transcript focuses on various advancements in JavaScript frameworks, touching on topics such as performance, rendering models, and innovative approaches to state management. It begins by introducing the SolidHack event, a community-driven hackathon aimed at expanding the SolidJS ecosystem with new libraries, apps, and creative experiments. As the conversation unfolds, the speaker offers insights into React 18’s release, discussing concurrency and data-fetching patterns while drawing parallels to other frameworks like Svelte, Vue, and Marco. Notably, the transcript addresses the benefits of partial hydration, server-rendered solutions, and the possibility of merging multi-page and single-page app methodologies. From detailing the significance of transitions and streaming to weighing the importance of user-friendly reactivity APIs, the discussion underscores a continual drive to improve developer experience and end-user performance. In addition, it features demonstrations of hackathon entries, from component libraries to practical applications, revealing a community energized by experimentation, collaboration, and the push toward ever more refined web engineering practices.

## Chapters

### 00:00 - 06:00 Introduction and Hackathon Context

The session begins with a casual welcome from the speaker, setting a relaxed tone while explaining the primary focus: showcasing entries from the ongoing SolidHack community hackathon. There’s an open invitation for viewers in the live chat to say hello and join in the discussion. The speaker mentions that this is a “Solid focus” stream but clarifies that they are not directly involved in judging or organizing the hackathon, just eager to share and discuss participants’ projects. This early segment emphasizes excitement for the contest while foreshadowing a closer look at each submission.

Additionally, the speaker touches briefly on how the hackathon started in early January and is approaching its final week, establishing a sense of urgency for those still preparing entries. The conversation also hints at broader JavaScript news, with the speaker alluding to interesting progress in the ecosystem, from language updates to library releases. Although the show lacks fancy visuals or background music, the host’s enthusiasm sets the stage for an in-depth journey into new tools and approaches. This introductory chapter concludes by noting the speaker’s plan to keep the format more relaxed, allowing space for spontaneous exploration and real-time reactions.

### 06:00 - 12:00 React 18 Release and Community Response

Turning attention to major JavaScript developments, the speaker highlights the release of React 18, describing it as a significant milestone that has been in the works for years. This release represents the culmination of various planned enhancements, such as concurrency features and suspense improvements, now officially available for community use. The speaker underscores how these changes were not sudden; they’ve been gradually introduced in increments, demonstrating the meticulous roadmap React has followed to maintain backward compatibility and community trust.

Listeners learn that the new features, especially around concurrent rendering and suspense, open up fresh paradigms for data fetching and rendering patterns. However, the speaker notes a key decision by the React team to avoid introducing an official data-fetching primitive in React 18, leaving that domain to established libraries like React Query. This choice prompts reflections on teaching complexities, where frameworks often rely on external tooling to illustrate best practices. By spotlighting React 18’s final leap into concurrency, the speaker sets the stage for comparisons to other reactive systems throughout the talk.

### 12:00 - 18:00 Teaching React’s New Paradigms

The speaker delves into the educational angle of React’s new capabilities, explaining how transitions and streaming hinge on data-loading approaches that React itself does not fully prescribe. They note the evolutionary route React took—from an early “dream” of concurrent rendering to the extensive community discussions that shaped the final APIs. Suspense is acknowledged as a core piece, with the speaker emphasizing that consistent UI and seamless data-loading experiences are at the heart of React’s concurrency vision.

At the same time, the talk highlights the potential hurdles newcomers face. Without a native data-fetching hook, learners must navigate community-driven libraries, which can obscure React’s new concurrency elements. The speaker draws parallels to older transitions like class components to hooks, illustrating how React’s ecosystem often guides widespread adoption once educators and library maintainers align. This chapter closes noting that while React 18’s concurrency future is bright, its teaching path may involve balancing the official core with user-land solutions.

### 18:00 - 24:00 Reflections on Performance and Various Framework Approaches

The conversation shifts toward comparing how different frameworks handle similar concepts. The speaker mentions solid’s reactivity, Vue’s reactivity, and Svelte’s compile-time approach, highlighting that even though each framework claims to be “reactive,” the underlying mechanics can vary widely. Solid’s fine-grained system stands out for its direct subscription model, ensuring that only relevant parts of the UI update. Meanwhile, Svelte’s compile-time approach automatically re-runs components upon state changes.

There’s also a nod to how these approaches stem from longstanding ideas in functional programming and signals. The speaker shares anecdotes on how frameworks like React overcame skepticism about re-rendering entire components, eventually proving efficient enough for most real-world use cases. This portion underscores the fluid nature of front-end development trends, where once “groundbreaking” solutions become routine, and new layers of optimization emerge. The host champions a collaborative mindset, suggesting that, regardless of underlying technique, frameworks often converge on similar high-level objectives: speed, simplicity, and maintainability.

### 24:00 - 30:00 Granularity, Compiler Strategies, and Vue’s Future

Here, the focus intensifies on the notion of granular updates and how they interplay with compiler techniques. The speaker explains that in a runtime-driven model, changes occur at the most detailed data layer, a feature that can drastically improve performance. In contrast, compiler-centric frameworks like Svelte or Vue’s proposed compiled approach can transform templates into optimized JavaScript instructions, sidestepping certain runtime overheads. This dynamic fosters a healthy competition between “pure runtime reactivity” and “compile-time optimization.”

Vue’s evolution gets singled out, with mention of Vue 3’s shift away from a purely virtual DOM approach to a system that more closely resembles a fine-grained model. The speaker remarks that Vue’s progressive adoption strategy—supporting both older and newer paradigms—illustrates how frameworks with large user bases must balance innovation and stability. This segment concludes suggesting that while Svelte emphasizes a “writer-friendly” compile-time approach, Vue is exploring a middle ground, and Solid remains firmly rooted in an elegant runtime pattern.

### 30:00 - 36:00 Complexity of Hooks and Reactive Patterns

During this interval, the conversation covers the complexities of implementing reactive patterns within React’s hooks API. The speaker recalls how hooks were heralded as a simpler model yet introduced sophisticated concepts like closures, custom hooks, and effect dependencies. These intricacies can initially confuse developers who expect a purely declarative style. Solid, by contrast, uses signals and effects that automatically manage dependencies, often sparing developers from explicitly wrangling dependency arrays.

Despite the relative complexity, React remains a prime example of how a large ecosystem can unify around a pattern and gradually absorb best practices. The speaker points out that library authors have successfully built numerous abstractions on top of hooks, encouraging more modular code. The discussion highlights that while hooks introduced friction for some, they opened doors to more composable applications. Ultimately, the host underscores a fundamental trade-off: a single cohesive mental model can unify a community, even if it comes with a steeper learning curve.

### 36:00 - 42:00 The Evolution of React and Incremental Adoption

The speaker delves into React’s long history, touching on how the framework gradually integrated advanced features rather than opting for massive rewrites. Pointing to React’s origins in 2013, they reflect on the multi-year journey toward concurrent rendering, suspense, and server components. This incremental approach avoided splintering the ecosystem, letting library authors adapt organically. As a result, React 18 feels like the culmination of half a decade of consistent engineering, a testament to balancing community needs with technological ambition.

Still, the speaker observes that the slow, steady path can mean the final result arrives after competing solutions have already explored similar ideas. Yet React’s ecosystem scale ensures that once a new pattern is shipped, adoption swiftly spreads across major libraries. This period underscores the framework’s measured strategy: even though other libraries might showcase certain features earlier, React’s methodical rollout secures widespread buy-in. The chapter closes emphasizing that such deliberate evolution helped React remain dominant without alienating its user base.

### 42:00 - 48:00 Solid’s Approach and Community Comparisons

Attention returns to Solid, with the speaker reiterating how its reactivity model offers a distinct alternative that resonates with developers seeking more granular control. Solid is portrayed as “25% better” than React in certain respects, referencing a community opinion that sees Solid’s design as a natural evolution of reactivity. The speaker clarifies that while Solid may optimize performance with fine-grained updates, the larger React ecosystem still provides robust library support, proven patterns, and widespread adoption.

The transcript captures a reflective tone on whether new frameworks can outpace React’s momentum or if they’ll primarily offer specialized niches. The speaker contrasts Svelte’s compile-time emphasis with Solid’s just-in-time reactivity, speculating that each approach fulfills different project needs. Meanwhile, the slow infiltration of reactivity into mainstream libraries suggests an ongoing shift in the ecosystem. This chapter highlights the broad sense of curiosity in the front-end world, where diverse methods all chase the same core goals: efficient rendering and maintainable codebases.

### 48:00 - 54:00 Considering Svelte’s Reactive Marketing and Vue’s Fine-Grained Roots

Svelte’s tagline “truly reactive” is brought into the conversation, prompting the speaker to compare it with other libraries that also label themselves reactive. The speaker jokes that if Svelte’s approach is reactive, React’s is likewise reactive by some definitions, pointing out that certain marketing phrases can oversimplify deeper technical distinctions. Nevertheless, Svelte’s success demonstrates that compile-time solutions can yield smaller bundle sizes and an appealing developer experience.

Vue also reenters the discussion as a prime example of a library that is genuinely fine-grained under the hood, even if it leans on a virtual DOM for some tasks. The speaker notes that with Vue 3, the team introduced more advanced reactivity structures, bridging gaps between older object-based configurations and newer signal-based patterns. This adaptive approach has kept Vue relevant as a top contender in frameworks. The chapter ends suggesting that labeling frameworks as “reactive” or “virtual-DOM-based” often masks the creative overlap that continues to grow among them.

### 54:00 - 1:00:00 Reinforcing the Complexity of “Reactive” Terminology

Here, the speaker stresses how the term “reactive” can mean many things. They cite older frameworks like Knockout or MobX, which pioneered features that have reappeared in modern systems. With each library adopting different patterns—like React’s re-renders or Solid’s one-time setup signals—“reactivity” becomes an umbrella concept. The speaker gently cautions against black-and-white definitions, calling for deeper exploration into how each framework implements state tracking, computations, and side effects.

This segment also touches on the social side of naming conventions, explaining that marketing language or official documentation might oversimplify things. Svelte’s notion of assigning a value to a “$” store can look magical, but it’s simply another technique for updating the UI. The conversation returns to the idea that performance and developer ergonomics are the ultimate measuring sticks. The discussion ends by acknowledging the intangible factors—community size, library availability, and corporate usage—that also shape any framework’s success.

### 1:00:00 - 1:06:00 Solid’s Growing Ecosystem and Teaching Materials

Around the hour mark, the conversation pivots to Solid’s documentation and community-driven resources. The speaker laments that creating formal tutorials or written guides often requires significant uninterrupted time, which can be difficult for project maintainers to secure. Although the Solid ecosystem is vibrant, it relies heavily on volunteers and enthusiastic contributors to produce learning materials such as courses, blog posts, and examples.

Nonetheless, the speaker lauds the efforts of content creators who have published series on building practical components or entire applications with Solid. They emphasize the importance of real-world examples over purely academic demos, suggesting that demonstrations like building a simple grid or integrating third-party libraries help newcomers appreciate Solid’s reactivity. By encouraging more community-led content, the project leads hope to sustain the growth spurred by hackathons and fresh library contributions, which in turn attract even more developers to try Solid.

### 1:06:00 - 1:12:00 Discussion on Looping, Control Flow, and JSX in Solid

The speaker fields a question about why Solid requires special helpers for looping structures rather than relying on standard array methods like `.map()`. They explain that while `.map()` is familiar, it must be used carefully in a fine-grained system to avoid unnecessary re-creations of entire DOM segments. Instead, Solid’s control-flow primitives, such as `<For>`, can track changes more precisely and update only the necessary parts of the UI.

This technical detail highlights Solid’s underlying philosophy: it prefers minimal overhead by letting small units of state determine updates. The speaker contrasts this with a virtual DOM approach, where re-rendering an entire subtree can be costlier. By focusing on partial updates, Solid ensures that developers can structure views as needed without losing performance. The conversation underscores how these micro-optimizations are part of the framework’s DNA, allowing advanced patterns while retaining the simplicity of a JSX-like syntax.

### 1:12:00 - 1:18:00 MPA vs. SPA Models: The Quadrant of Framework Approaches

In this portion, the speaker introduces a conceptual quadrant to categorize frameworks based on single-page versus multi-page architectures, and whether they emphasize static generation or server rendering. They explain that many popular solutions—like Next.js, Nuxt, or Remix—initially focused on single-page app (SPA) routing with server-side rendering or static export. On the other end, frameworks such as Marco and Astro began more on the multi-page app (MPA) side, forging new territory in partial hydration and minimal JavaScript approaches.

The speaker observes that the lines between these categories have blurred significantly over the past year. Astro, originally a static site builder with an MPA spirit, now supports server-side rendering, while Gatsby, once purely static, added SSR functionality. This convergence suggests that the real competition lies in merging the best of both worlds: seamless hydration, minimal overhead, and flexible routing. As the speaker notes, the entire ecosystem is moving toward solutions that yield faster initial loads while preserving dynamic interactivity.

### 1:18:00 - 1:24:00 The Rise of Partial Hydration and Hybrid Models

Partial hydration becomes a focal point in these minutes, highlighting how frameworks like Marco, Astro, and Quick reduce JavaScript usage on the client by only hydrating interactive components. The speaker points out that many sites actually benefit from multi-page flows, and partial hydration can elegantly handle minor interactive elements without shipping a full application’s worth of code. They compare this approach with older SSR solutions that forced entire bundles down the client side.

Looking at the business side, the speaker emphasizes the real advantages for e-commerce, content-heavy sites, or anywhere performance directly impacts conversions. They mention how Netflix or other large platforms strategically adopt “just enough JavaScript,” often building custom solutions for partial interactivity. By bridging the MPA and SPA dichotomy, partial hydration emerges as a technique that can offer near-instant page loads and smooth transitions. This sets the stage for deeper discussions about streaming, caching, and the future of dynamic rendering.

### 1:24:00 - 1:30:00 A Closer Look at Streaming, Astro’s Upcoming SSR, and the Future

The conversation then shifts to how streaming HTML allows the server to progressively send content to the browser, resulting in quicker perceived performance. The speaker reflects on personal experiments comparing streaming raw HTML to streaming JSON data for hydration. In certain quick network scenarios, letting the client handle rendering might be faster, but across varied network conditions, HTML streaming typically wins. These anecdotal insights underscore the complexity of deciding whether to push rendering to the server or the client.

Astro’s new server-side rendering feature is hailed as another sign that static site generators are evolving into full-fledged platforms. The speaker suggests that frameworks with MPA roots, combined with partial hydration and streaming, are converging with advanced SPA frameworks that adopt server components. This swirl of innovative approaches could eventually unify best practices—particularly for large-scale apps needing a balance of efficiency and interactivity. The speaker teases an upcoming deep dive with Astro’s core team, hinting at lively exploration of these new features.