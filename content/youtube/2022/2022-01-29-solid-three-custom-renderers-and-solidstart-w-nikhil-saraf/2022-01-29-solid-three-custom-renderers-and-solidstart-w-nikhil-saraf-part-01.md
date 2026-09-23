---
showLink: "https://www.youtube.com/watch?v=lsWXyyEsw7E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Solid Three, Custom Renderers, and SolidStart w/  Nikhil Saraf"
description: ""
publishDate: "2022-01-29"
coverImage: "https://i.ytimg.com/vi/lsWXyyEsw7E/sddefault.jpg?v=61f47ab6"
---

## Episode Description

A thorough exploration of custom SolidJS renderers, performance, and new SolidStart developments from the community, interwoven with personal anecdotes and in-depth technical insights.

## Episode Summary

A concise summary of this conversation highlights the focus on SolidJS’s evolving ecosystem, demonstrating how community-driven contributions shape its future. The discussion starts by situating Solid’s performance characteristics within the broader JavaScript landscape, drawing attention to the merits of fine-grained reactivity compared to virtual DOM approaches. As the talk unfolds, it delves into the intricacies of custom renderers for use cases like 3D with Three.js and terminal applications, underscoring the potential for innovative expansions. The conversation also examines the design philosophy behind SolidStart, illustrating how new data-fetching and form-handling patterns bring power and flexibility while retaining a minimal footprint. Personal reflections on game development, UI paradigms, and the historical context of web frameworks add depth to the chat, wrapping up with broader speculation on React, Svelte, and the evolving future of frontend development.

## Chapters

Below, each chapter is placed in approximately six-minute increments to cover the entire ~4 hour 29 minute discussion.

### 00:00:00 – Opening Remarks and Stream Setup

The conversation begins with a warm welcome and an overview of the stream’s goals. Ryan Carniato introduces the guest, mentions recent community developments, and sets a relaxed tone, inviting chat participation. This initial segment outlines the session’s focus on all things SolidJS.

Participants briefly reflect on the current week in JavaScript, touching on performance discussions and practical tips. Enthusiasm for SolidJS’s flexibility emerges, hinting at upcoming deep dives into custom rendering, advanced performance strategies, and the meta framework, SolidStart.

### 00:06:00 – Recent Trends in JavaScript Performance

Here, they explore the resurgence of performance as a hot topic in the JavaScript ecosystem. Ryan references articles that compare frameworks across size and speed, emphasizing how Solid frequently excels. These findings prompt a wider conversation about metrics, benchmarks, and real-world trade-offs.

They highlight the significance of frameworks such as React and Angular performing “well enough” for many use cases, despite memory allocation or startup costs. The crucial point is how Solid’s minimal overhead and fine-grained reactivity often appeal to developers seeking extra efficiency.

### 00:12:00 – Amazon and eBay: Big Players Avoiding Full SPA Approaches

The hosts segue into notable industry examples, such as Amazon’s decision not to use heavy client-side frameworks for critical pages. They note that e-commerce giants like eBay follow a similar path, relying on server-rendered approaches to prioritize fast page interactions.

This conversation emphasizes the correlation between page load times, revenue, and user satisfaction. While React and other SPA frameworks remain popular, the speakers explain that certain large-scale platforms often design custom solutions or adopt partial hydration to minimize overhead.

### 00:18:00 – Remix and the Shift Toward Server-Centric Designs

Remix enters the spotlight as a React-based framework that embraces server-side best practices, streamlined data-loading, and improved performance patterns. The guest recounts how major React figures are intrigued by new architectural styles, including smaller JavaScript footprints and faster startup times.

They point to a growing “post-React world” sentiment, illustrating how many developers are testing the boundaries of frameworks like Solid, Svelte, Qwik, and Marco. Even staunch React advocates find themselves experimenting with reactivity patterns, partial hydration, and efficient rendering approaches.

### 00:24:00 – Podcasts, Community Outreach, and Solid’s Rising Popularity

Ryan mentions recent podcast appearances and community interactions that have spotlighted Solid. He addresses how these conversations help clarify Solid’s purpose, bridging teaching moments with broader reactivity theory. The aim is to show how simplicity and performance can coexist.

They touch on the unique space Solid occupies: blending a React-like API with a fine-grained update model. The discussion suggests that, as broader audiences learn of Solid’s advantages, more advanced features—like streaming and partial hydration—could further differentiate it.

### 00:30:00 – Introducing the Guest’s Work on Three.js Renderers

Shifting gears, the stream’s guest recounts how React Three Fiber inspired a Three.js integration for Solid. By tapping into Solid’s new custom renderer API, complex 3D scenes can be built with a familiar declarative style, leveraging fine-grained reactivity for performance.

They detail challenges of bridging real-time graphics and UI reactivity, citing tensions like event handling, property updates, and scene graph management. The guest explains that Solid’s architecture simplifies the overhead needed to keep the interface responsive in visually rich environments.

### 00:36:00 – Three.js Chess Game Demonstration

In this hands-on demo, the guest unveils a 3D chess application rendered through Solid’s custom Three.js integration. Users can spin, zoom, and interact, observing how signals update piece movements without triggering unnecessary re-renders of the entire scene.

They highlight code snippets that show how easily transformations, camera angles, and event callbacks hook into Solid’s reactivity. The game’s AI logic and real-time features illustrate the synergy between granular updates and immediate visual feedback, showcasing the success of fine-grained approaches.

### 00:42:00 – Custom Renderer Internals and Performance Insights

Digging deeper, the guest shows the behind-the-scenes code for the Three.js renderer. They emphasize how Solid’s reconciliation hooks map well to 3D objects, letting developers define nodes and properties in a manner reminiscent of standard DOM operations.

The conversation covers memory, event systems, and how standard patterns from React reconcile are adapted seamlessly. This portion underscores that once the overhead of re-rendering is removed, developers can tweak 3D scenes or terminal displays with minimal worry about runtime slowdowns.

### 00:48:00 – Reactivity for Game Development and Competitive Edges

The hosts discuss the dream of using web technologies to build high-performance games. They compare 3D logic loop constraints in React versus Solid, explaining how React necessitates elaborate memoization to avoid full re-renders, whereas Solid’s updates remain inherently granular.

Stories from personal game dev experiences add a nostalgic, hands-on feel. The conversation includes how iterative changes, such as adjusting camera angles or piece states, remain fluid under Solid. They conclude that reactivity can enable a more direct coding style.

### 00:54:00 – Exploring Solid Ink: Terminal Rendering

The guest next unveils “Solid Ink,” a custom renderer that targets the terminal. Borrowing from Ink’s React-based approach, it showcases how Solid’s universal rendering can transform a CLI into a dynamic interface with flexbox-like layouts and text-based styling.

Through brief examples, the speakers illustrate how signals and terminal nodes replicate typical web workflows—except the “DOM” is text-based. This parallel again testifies to Solid’s design. By employing the same primitives, developers seamlessly pivot between 3D, CLI, or browser rendering.

### 01:00:00 – Multifaceted Custom Renderers and Ecosystem Potential

Reflecting on both 3D and terminal use cases, they praise Solid’s fine-grained updates and compiler approach for enabling widely different targets with minimal overhead. Code reuse, modular architecture, and the ability to define new “host” components become standout advantages.

The conversation expands to how Solid’s universal approach could unify style, event management, and reactivity across platforms. From game engines to CLI tools, the potential for robust, domain-specific component libraries and communities sparks excitement for future expansions.

### 01:06:00 – Introducing Solid MDX and Documentation Workflows

Transitioning from custom UIs to documentation, the guest outlines how they built Solid MDX support using XDM or MDX-JS transformations. Rather than forcing a separate pipeline, they integrate Markdown conversion directly into Solid’s Babel setup, preserving features like hot module reloading.

Ryan and the guest show how developers can seamlessly switch between rich Markdown and classic JSX. The technique empowers them to create doc sites with partial or full SSR, unify styling, and override MDX elements by simply referencing Solid’s dynamic primitives.

### 01:12:00 – SolidStart: Motivation and Early Directions

Next, the pair discusses how SolidStart aims to streamline server-side rendering and routing for Solid. Originally a simple CLI tool, it grew to incorporate advanced features like data-loading, file-based routes, and integration with serverless or edge environments.

They emphasize that meta frameworks are the “missing puzzle piece” for wider Solid adoption. The goal is to match the robust developer experiences of Next.js or Remix while capitalizing on Solid’s performance advantage and reactivity. The conversation teases upcoming breakthroughs.

### 01:18:00 – Comparing Approaches: API Routes vs. RPC-Style Calls

Diving into server-client interaction, they assess how frameworks like Next.js define multiple APIs. The guest references Blitz.js’s concept of co-located server functions, praising how it reduces boilerplate and fosters a natural workflow, especially for small, focused modules.

They debate an “actions” approach that automatically serializes data back and forth. This modern twist on remote procedure calls can minimize overhead for front-end logic. By removing the friction of explicit endpoints, developers can more flexibly match the shape of each component’s needs.

### 01:24:00 – The Emergence of Solid’s `server()` Function

They unveil a new API, tentatively called `server()`, enabling direct server-side calls from within Solid’s client code. By wrapping a function, developers can choose to execute logic only on the server—yet still treat it as an async function in the UI.

This design, they explain, merges the best aspects of Blitz-style RPC with Solid’s existing resource-based fetching. The conversation then touches on how to handle errors, redirections, and advanced session management, all within the same “just call a function” paradigm.

### 01:30:00 – Security Considerations and Edge Deployment

The talk highlights that these server-wrapped calls live behind automatically generated endpoints, reinforcing that not all code is shipped to the client. They address typical concerns: credentials, encryption, data parsing, and safe serialization for edge deployments or serverless contexts.

Detailed examples illustrate how to secure logic while giving teams freedom to define per-route or per-function boundaries. Because Solid is so small, the overhead for multiple serverless functions or splitting your logic remains minimal—a refreshing contrast to heavier frameworks.

### 01:36:00 – Form Handling and Progressive Enhancement

Remix’s progressive enhancement strategy influences how SolidStart deals with forms. They discuss a `createForm` helper that smoothly merges client-side reactivity with plain HTML form submissions. Even with JavaScript disabled, the flow gracefully degrades into a standard POST request.

Crucially, reactivity brings an intuitive developer experience: by default, forms can do immediate fetch calls to the server, handle validation, and update the UI without manual wiring. This approach captures the essence of universal rendering with minimal user friction.

### 01:42:00 – Live Demo of SolidStart Forms and Cookies

They demonstrate a sample jokes app that uses server-side calls for deleting or adding jokes. After disabling JavaScript, the app still processes form data, clarifying how it reverts to server-rendered full-page refresh flows—a hallmark of proper progressive enhancement.

Observing the network tab reveals how each form submission hits a dedicated endpoint behind the scenes. Cookies, sessions, and authentication tie neatly into Solid’s new approach, letting developers handle states like login status or user identity with minimal overhead.

### 01:48:00 – Early-Stage Code Walkthrough and Architecture

Peeking into the code, the guest points out how routes, data functions, and server actions interlink. The familiarity of an existing Solid resource pattern, combined with new `server()` wrappers, ensures minimal learning curve for those accustomed to reactive data flows.

They note that design decisions revolve around removing friction. The code remains straightforward to refactor if an endpoint needs to move or if some logic shifts from client to server. This adaptability underlines the guiding principle of flexible, maintainable apps.

### 01:54:00 – Balancing Pragmatism and Strict Conventions

Ryan and the guest debate how prescriptive SolidStart should be. Some frameworks enforce folder conventions, while others let developers freely organize files. They believe in a middle ground, offering sensible defaults without restricting advanced re-architecture or specialized setups.

Examples from Next.js, SvelteKit, and Nuxt highlight how a small push toward standard structure speeds onboarding but might hinder certain advanced cases. SolidStart aims to honor user freedom, trusting that performance improvements remain top priority for any chosen pattern.

### 02:00:00 – Drawing Lessons from React Server Components

Discussion turns to React’s server components and concurrency model. They admire how it rethinks hydration, shipping minimal JavaScript to the client. Yet complexities with partial or deferred rendering show that fully decoupling client logic from server is no small feat.

Solid’s approach addresses some of these challenges differently, focusing on reactivity at the component level rather than adopting a purely top-down model. They conjecture how partial hydration might evolve, referencing past attempts and future goals for minimal resource usage.

### 02:06:00 – The Ongoing “Performance vs. DX” Debate

Performance remains an ever-present theme, prompting reflection on whether micro-optimizations matter for everyday apps. They argue that a fast-by-default approach, like Solid’s, grants more headroom for adding features without incurring large regressions in user experience or bundle sizes.

They also acknowledge developer experience (DX) as a key determinant. Even if a framework is blazingly fast, a poor mental model can push teams away. Solid’s challenge is to keep reactivity approachable, refine edge cases, and keep advanced usage optional.

### 02:12:00 – Comparing Svelte and Solid Philosophies

The participants briefly contrast Svelte’s compiler-driven approach with Solid’s runtime signals. Though both share “no virtual DOM,” Svelte’s single-file component style is highly prescriptive, while Solid emphasizes composition, universal JavaScript, and explicit control flows through JSX.

They note that many Svelte fans enjoy tight integration, with built-in transitions and simpler syntax. Yet advanced scenarios can reveal limitations around composability. Solid’s approach requires more explicit code, but rewards advanced users with smaller overhead and easier advanced extension.

### 02:18:00 – Vue’s Position in the Modern Landscape

Vue enters the conversation as a library that walked a fine line between Angular-like directives and a more flexible reactivity model. While immensely popular, Vue’s broad approach sometimes leaves it overshadowed by Svelte’s simplicity or React’s massive community.

They acknowledge Vue’s robust ecosystem and how Evan You’s innovations, like Vite, shaped the dev experience across all frameworks. However, Solid’s path diverges by focusing on universal reactivity and minimal overhead, even if that means avoiding certain “batteries-included” patterns.

### 02:24:00 – Historical Reflection: MVC, MVVM, and Components

A nostalgic turn highlights the shift from traditional MVC or MVVM to the modern idea of co-locating state and template within components. The speakers recall older libraries like Knockout, noting that React crystalized many patterns that had been brewing for years.

They dissect how local state overcame the pitfalls of having separate “controller” logic. Consolidating everything into a single function or file fosters a more direct and flexible approach. This evolution in architecture underpins how frameworks now pitch immediate developer productivity.

### 02:30:00 – Fine-Grained Reactivity and Class-Based Components

The guests revisit React’s class-based era, recalling the friction that hooks eventually resolved. They note, however, that hooks effectively replicate the benefits of fine-grained reactivity, albeit indirectly. Solid’s signals are a more explicit, foundational expression of the same concept.

They confirm that while React’s runtime is bigger, it simplifies aspects of the user’s mental model. Solid flips the script: its advanced approach yields immediate performance but expects deeper understanding. The consensus remains that trade-offs depend on project goals.

### 02:36:00 – The “React Killer” Myth and Shifting Mindsets

Addressing the community hype around “replacing React,” Ryan clarifies that Solid’s success does not require dethroning big players. Instead, they champion healthy competition and specialized frameworks, each exploring novel ideas like streaming, partial hydration, or minimal bundles.

They highlight how many emerging technologies—Qwik, Marco, Astro—represent ongoing experiments in optimization or SSR. As the ecosystem branches, developers are free to choose the sweet spot of performance, complexity, and standard patterns that best align with their team.

### 02:42:00 – Game Theory, Meta Strategies, and Framework Evolution

A lighthearted analogy to competitive card games captures how frameworks adopt or discard approaches to gain an “edge.” Over time, pockets of innovation accumulate, occasionally reshaping the entire field. This iterative cycle fosters cross-pollination of solutions once thought infeasible.

They note that React’s incremental approach can appear slow or opaque, yet historically it has integrated major breakthroughs. Meanwhile, smaller frameworks like Solid can pivot faster, trying advanced concepts that bigger ecosystems might need years to refine or adopt.

### 02:48:00 – Community Growth and Project Maintenance

They praise the vibrant Solid community, whose members share specialized knowledge, from web animations to forms and SSR. Ryan describes the challenges of responding to user questions and hints that the community now largely self-supports, reducing the burden on core maintainers.

This self-sustaining environment has given rise to a wealth of ecosystem libraries for caching, state management, or integrations with CSS frameworks. Even day-to-day on Discord, new faces appear to add features, fix bugs, and cultivate a collaborative spirit integral to Solid’s success.

### 02:54:00 – Reflecting on the Solid Journey

The guest expresses gratitude for the encouragement they received when introducing experimental projects like Solid Three and Solid Ink. This nurturing feedback loop fuels more creativity, leading to new libraries and expansions that demonstrate the power and flexibility of reactivity.

They reiterate that custom renderer projects initially seemed daunting, yet the straightforwardness of Solid’s compiler architecture made quick progress possible. The synergy between official maintainers and community contributors ensures that novel ideas can be tested and refined rapidly.

### 03:00:00 – Approaching Four-Hour Mark and Ongoing Q&A

As the stream continues, audience questions spark mini-debates on code organization, performance ceilings, and edge deployment details. The conversation touches on how easily custom solutions for advanced scenarios can be layered atop Solid’s minimal foundation.

The hosts confirm that while certain features remain alpha-level, the pace of improvements is high. They promise to keep iterating on user feedback, refining the data API, documentation, and form helpers, ensuring that SolidStart becomes stable and production-ready.

### 03:06:00 – JavaScript Off, CSS Loading, and Dev-Mode Quirks

They return to the earlier jokes demo, showing how CSS may vanish if JavaScript is disabled in development mode. This quirk arises because the dev server typically injects styles dynamically, something that does not affect production builds or SSR setups.

The difference between local HMR injections and final SSR packaging underscores an important aspect of modern tooling. They encourage watchers not to judge raw dev-mode artifacts, as the final output in production is well-optimized for performance and progressive enhancement.

### 03:12:00 – Revisiting Form Action Patterns and Edge Cases

Audience questions prompt a deeper look at how multiple forms on the same page can each trigger distinct server actions. The new design does not restrict developers to a single action endpoint, allowing for truly modular, co-located functionality.

They highlight future expansions, like file uploads or more complex validations that can still use the same pattern. The plan is to add convenience helpers while keeping the core architecture simple, letting each developer tailor or extend as needed.

### 03:18:00 – Potential Next Steps for Custom Renderer API

The conversation circles back to the custom renderer approach. The hosts outline possible improvements, like more direct support for prop passing in creation vs. update phases, and finer control over disposal or unmounting in complex canvases or CLI apps.

They note the possibility of merging code from advanced user projects into the official library, once stable patterns emerge. Maturing the custom renderer ecosystem could open doors to cross-platform UI frameworks that unify 3D, web, mobile, and terminal in a single reactivity model.

### 03:24:00 – Edge Cases in 3D Games and Partial Hydration

Q&A shifts to advanced scenarios: partial hydration for large 3D worlds and game loops. They note that while partial hydration typically addresses static sections of a page, a dynamic 3D environment begs unique patterns for chunking or streaming updates.

This triggers speculation on how Solid’s signals might gracefully degrade or skip hydration for major portions of a scene. The pair underscore that these topics require deeper experimentation, but the architectural pieces are nearly in place for continuing that exploration.

### 03:30:00 – CLI Tools, Custom DOM, and Future Innovations

Reflecting on “Solid Ink,” the speakers suggest there might be further opportunities to push custom DOM replacements. They muse over building entire experiences without the browser’s standard DOM, whether for specialized kiosks, embedded systems, or offline data manipulation UIs.

While purely hypothetical, they emphasize that Solid’s minimal runtime fosters interesting experiments. Developers remain free to create new host objects, ensuring an open invitation for experimentation in both serious enterprise contexts and playful side projects alike.

### 03:36:00 – Observing React’s Concurrency Vision

They briefly circle back to React, acknowledging that concurrency, transitions, and “time slicing” have always been core to the React 18 roadmap. Though it might seem complicated, it underscores the depth of the React team’s blueprint for fluid experiences.

In contrast, Solid’s approach uses synchronous reactivity, focusing on guaranteed consistency. They highlight that each path leads to similar goals—smooth user interfaces—yet the underlying mental models diverge significantly, reflecting different frameworks’ histories and target audiences.

### 03:42:00 – Over-Optimization Concerns and Real-World Budgets

Skeptical voices sometimes question whether chasing every last millisecond is valuable. The discussion acknowledges there’s a practical limit: many teams simply need a stable, familiar approach. However, for cutting-edge or resource-constrained scenarios, these micro-optimizations can be game-changing.

They mention examples of large-scale e-commerce sites that measure success in milliseconds. A portion of developers in such performance-sensitive domains might find Solid’s smaller overhead compelling. Ultimately, each project weighs engineering complexity against performance wins in its unique context.

### 03:48:00 – Future-Proofing Solid: Streams, Islands, and Data

Ryan teases prospective features for SolidStart, including streaming responses and the possibility of island-like partial hydration strategies. While not final, the concept of shipping minimal JavaScript to the browser aligns with broader industry interest in frameworks like Astro or Marko.

They stress that consistent reactivity across server and client sets a stage for sophisticated data flows. With streaming on the horizon, Solid could deliver dynamic updates piece by piece, further bridging the gap between SSR completeness and SPA interactivity.

### 03:54:00 – Community Questions: Micro-Frontends and TS Migrations

Asked about micro-frontends, the speakers confirm that teams do experiment with module federation or decoupled builds. In principle, Solid’s small core library can slot into such architectures more easily than heavier bundles, though official guides remain in progress.

They also tackle TypeScript migration strategies for older codebases, emphasizing that the tooling around Solid is now robust enough to handle typed definitions seamlessly. For novices to TS, starter templates or community guides can smooth the transition.

### 04:00:00 – Wrapping Up Tech Deep Dives and Personal Histories

The conversation takes a personal turn, highlighting the guest’s background, from initial game dev pursuits to building streaming apps. Sharing anecdotes about DOS days and clearing the screen for animation sparks nostalgic laughter about computing’s steady evolution.

They conclude that these personal journeys shape how each developer perceives frameworks. A background in performance or graphics might lead someone to appreciate reactivity. Another might prefer the clarity of a stable, large ecosystem. Solid welcomes all approaches equally.

### 04:06:00 – Final Thoughts on Collaboration and Next Steps

Both hosts praise the synergy between official maintainers and community innovators. Whether a brand-new user or a seasoned library author, everyone’s feedback drives the next iteration of SolidStart, custom renderers, and ecosystem tooling like MDX support.

They remind viewers to join Discord, check out existing libraries, or experiment with building new integrations. As an open-source project, Solid thrives on active contributors who bring creative angles to performance, developer experience, and unexpected domain-specific uses.

### 04:12:00 – Community Support and Sustaining the Project

Addressing the long-term health of the project, Ryan expresses gratitude for sponsors and volunteers. He notes that monthly calls, issue triage sessions, and Q&A channels let everyone stay aligned, ensuring incremental progress without turning into an unmanageable sprawl.

They emphasize that community growth has reached a tipping point where advanced discussions, from HPC rendering to multi-server distribution, happen daily. Documentation expansions and example-driven repositories remain priorities to help new contributors quickly climb the learning curve.

### 04:18:00 – Chatting About Fun Experiments and Future Demos

As the stream nears its end, Ryan teases potential upcoming demos. He imagines a scenario where partial hydration, user-driven 3D, and advanced forms converge in a single, playful app. Such an experiment would highlight the synergy between multiple cutting-edge features.

The guest nods enthusiastically, hinting they might unify chess logic, terminal input, and a real-time multiplayer environment—just for fun. This spirit of openness and iteration captures why Solid continues to evolve so quickly, propelled by creative exploration and user feedback.

### 04:24:00 – Closing Remarks and Gratitude

They wrap up final questions, acknowledging the late hour for many viewers. The guest thanks Ryan for the invitation, crediting the welcoming Solid community for encouraging bold experiments. The positive environment has galvanized them to keep pushing boundaries.

Ryan signs off by reminding people where to find the code, Discord, and related resources. He reiterates that these sessions are all about sharing knowledge and excitement for modern web development. With that, the stream ends on an upbeat and reflective note.

### 04:29:00 – Stream End

As the final minutes wind down, chat participation remains lively, a testament to the enduring curiosity around high-performance, reactive frameworks. The conversation once more underscores Solid’s capacity to adapt, bridging varying platforms and developer preferences.

Gratitude is shared on both sides for the intense, wide-ranging exchange. Viewers leave inspired by the flexible nature of custom renderers, advanced form handling, and the bright future of SolidStart. The broadcast concludes with a promise of more insights ahead.