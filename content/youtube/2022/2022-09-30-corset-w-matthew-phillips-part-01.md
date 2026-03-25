---
showLink: "https://www.youtube.com/watch?v=0cmj4S8K_6c"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Corset: A Novel Approach to Declarative Data-Binding w/ Matthew Phillips"
description: ""
publishDate: "2022-09-30"
coverImage: "https://i.ytimg.com/vi/0cmj4S8K_6c/maxresdefault.jpg"
---

## Episode Description

A far-ranging conversation featuring Matthew Phillips as he presents Corset’s unique CSS-based approach to interactive web development, along with wider discussions on frameworks, SSR, and reactivity.

## Episode Summary

This transcript opens by introducing the guest, Matthew Phillips, and framing the conversation around innovative front-end technologies. It sets the stage by highlighting key challenges in modern web development, such as balancing client and server responsibilities, maintaining performance, and choosing frameworks that align with developers’ needs. The speakers then explore how different architectures have evolved, from single-page applications to multi-page approaches, and discuss the trade-offs each method entails. They compare well-known libraries and frameworks, focusing on aspects like reactivity, hydration, and rendering models. As the discussion progresses, Matthew’s project, Corset, becomes a focal point, illustrating a novel data-binding approach inspired by CSS rules. The discussion concludes with broader reflections on where front-end development is heading, weighing the benefits of new techniques like resumability and partial hydration. It emphasizes the importance of constant experimentation, offering insights into both the constraints and possibilities of next-generation web tools.

## Chapters

### 00:00:00 - Introduction and Overview

The conversation begins with a friendly greeting and casual setup, as the host, Ryan, prepares his live stream environment. He welcomes early viewers, referencing the inevitable delays caused by platform pre-roll ads. This introductory segment sets a relaxed yet anticipatory tone. Ryan mentions social media announcements and pre-show banter, giving the audience a glimpse of his streaming process. Amid the casual chatter, he hints at the plan for the day’s stream: a deep look into a fresh approach to front-end data binding.

Ryan acknowledges a recurring desire from his audience to see content around frameworks and CSS. He foreshadows the arrival of his guest, Matthew Phillips, noting Matthew’s experience with Astro and background on older projects like CanJS. By mentioning reactivity and partial hydration techniques, Ryan suggests the conversation will touch on emerging trends that question the dominance of single-page application patterns. These opening minutes establish the focus on exploring new ways to build dynamic, interactive interfaces with minimal overhead.

### 00:06:00 - Guest Introduction and Background

Matthew Phillips joins the stream, briefly introducing himself and outlining his professional journey. He explains his work with Skypack and Astro, referencing earlier explorations into improving web performance. This period in his career shaped his perspective on how bundling, server-side rendering, and partial hydration can reimagine the traditional bundling pipeline. He draws connections between earlier library development and modern approaches to building fast and efficient web interfaces, laying a foundation for the in-depth discussion to follow.

The conversation underscores Matthew’s frustration with how front-end and back-end often get entangled in popular libraries. He traces a lineage from older frameworks like CanJS and Knockout, noting how reactivity and declarative approaches have persisted. This context sets the stage for Corset, his latest experiment that challenges the usual single-page app style. By describing common pitfalls—like replaying entire apps on the client and passing large JSON payloads—Matthew prepares listeners for the novel techniques Corset brings to the table.

### 00:12:00 - Revisiting Single-Page App Challenges

Ryan and Matthew address persistent issues in single-page applications (SPAs). They recount the widespread adoption of SPA patterns over the past decade and examine how that momentum sometimes obscures the potential for simpler or alternative solutions. They note that while SPAs excel at certain tasks, they also introduce complexity in state management and hydration. The conversation touches on developer experience concerns—such as the cost of replaying application state—and how frameworks try to solve these issues with compilers and advanced optimizations.

Drawing on personal anecdotes, Matthew likens modern frameworks to older server-driven setups, recalling times when server frameworks carried state across user interactions. By referencing how many developers had found themselves stuck in cycles of complicated tooling, they highlight the opportunity for new approaches. Their reflections acknowledge the necessity of building large-scale apps while remaining cautious about unintended complexity. This chapter ends by hinting that Corset attempts to bring an alternate route for bridging server-side rendering and rich client interactivity.

### 00:18:00 - Explaining Corset’s Core Concepts

Matthew introduces Corset as a tool designed to handle declarative data binding without relying on traditional templating. He compares it to the CSS model, revealing how developers can use selectors to bind dynamic data to specific DOM elements. The aim is to eliminate the need for separate frameworks that couple server rendering with client rehydration. This vision resonates with the idea that HTML and CSS can carry much of the application state, minimizing duplication between server- and client-side code.

He emphasizes Corset’s unique approach to solving a longstanding problem: bridging static HTML and interactive updates. The library reuses many of CSS’s cascadelike rules, allowing a form of reactive data binding. With minimal overhead, Corset draws on variables and event handlers within CSS-like blocks, side-stepping the complexities of large JSON hydration. Ryan expresses curiosity, connecting Corset’s technique to other frameworks’ attempts at efficient updates, but acknowledges that Corset’s direct reliance on the DOM for state stands apart from typical component-driven models.

### 00:24:00 - CSS Selectors as Data-Binding Mechanisms

In this segment, the discussion zeroes in on how Corset uses CSS selectors for data binding. Matthew describes how rules in a CSS-shaped syntax can target elements, then add logic for events, text content, or attributes. By placing these declarations in a dedicated sheet, Corset turns HTML into a substrate for dynamic updates without needing front-end frameworks. Ryan draws analogies to older jQuery patterns, but emphasizes the unique twist: it’s done in a structured, declarative way that mimics traditional CSS.

They demonstrate an example involving simple counters and event listeners. Instead of template strings, Corset scans the DOM with selectors like `.counter` or `.incrementer`, applying reactive rules. Variables are shared through a cascade, reminiscent of how CSS variables propagate styles. This conversation highlights Corset’s core departure from JSX or Svelte-like string templates, suggesting that by removing the overhead of reconciling a virtual tree, developers could see more direct, fine-grained updates. Both hosts anticipate questions about looping constructs and larger app architecture.

### 00:30:00 - Working Through a First Name/Last Name Example

Ryan invites Matthew to demonstrate a more sophisticated scenario: binding multiple form fields. Matthew presents a simple first name–last name setup. Each input triggers Corset’s re-binding mechanism, updating text in real time. He highlights how Corset pulls data from the DOM itself, sidestepping heavy JSON serialization from server to client. The approach echoes old-school forms but with a modern reactive twist, revealing how each input’s state can remain local while still being easily manipulated by JavaScript logic when needed.

They delve deeper into how variables and store primitives are used to share data between different parts of the interface. By aligning with CSS variable scoping, Corset can read or write data attributes efficiently. This synergy means developers can decide how much state should reside in the DOM versus JavaScript. The example reinforces Corset’s emphasis on minimal overhead, as the user only includes necessary logic, leaving the DOM to handle much of the rest. These fundamentals pave the way for larger-scale examples.

### 00:36:00 - Incorporating Stores and Reactive Updates

Matthew delves into Corset’s store system, illustrating how shared data can update multiple elements without requiring global application state. He compares stores to key-value maps with observability, highlighting their contrast with more complex solutions like Redux. This store model acts like a direct pipeline into the DOM, letting developers define or modify shared variables that seamlessly update any selector-based bindings. By using store roots, Corset can localize state to specific sections of the DOM, giving developers granular control over data flow.

Ryan asks about how large applications might handle more extensive reactivity. Matthew reassures that Corset’s fundamental design remains consistent: store changes re-trigger binding logic, ensuring fresh values appear instantly wherever the store is referenced. The conversation underscores that while Corset’s approach diverges from the typical JavaScript-first architecture, it offers a straightforward mental model: define data once, and let CSS-like rules cascade updates through the document. This chapter wraps with curiosity about how loops, conditionals, and more complicated UI patterns fit in.

### 00:42:00 - Revisiting Familiar “To-Do” Structures

Ryan references the iconic “to-do MVC” demonstration, and Matthew confirms that Corset can handle such structures. He shows the straightforward ways each item in a list is bound to reactive logic, explaining how Corset’s `.each()` directive maps arrays or filtered lists into repeated segments of the DOM. The framework’s reliance on templates within the HTML itself, combined with selectors for logic, eliminates the typical overhead of rendering a new virtual DOM subtree for each item.

They explore how states like “completed” or “remaining” tasks get tracked in Corset’s store, reacting to user input to strike out or remove tasks. This once again uses the principle of targeting just the elements in question, reminiscent of how jQuery would update individual nodes but with a fully declarative syntax. Listeners for item toggles and an overarching toggle-all functionality underscore Corset’s flexibility. List items become small, self-contained units, each adopting the same store-driven updates through class toggles or attribute assignments.

### 00:48:00 - Handling Nested Components and “Behaviors”

Matthew clarifies Corset’s concept of “behaviors,” which are somewhat analogous to components but focus strictly on managing logic rather than rendering DOM. Behaviors can maintain isolated local state, listening to DOM events and updating a store or dispatching events upward. This design allows for deep nesting without requiring large, monolithic scripts. Ryan points out that this approach effectively decouples layout and data updates. For advanced functionality, sub-behaviors can coordinate child elements without re-rendering the entire page.

They highlight the trade-offs of this architecture: while it grants granular control and localized logic, developers new to CSS-based patterns might find it unfamiliar. Nonetheless, for many progressive enhancement scenarios, it’s a logical fit. Especially for teams migrating from a server-rendering background, behaviors feel intuitive. As the conversation moves toward performance considerations, Ryan wonders how Corset’s unique reactive style scales. Matthew suggests that since it layers on top of existing HTML rather than re-running a render function, runtime overhead can be significantly reduced.

### 00:54:00 - Server-Side Rendering Considerations

The next segment dives into SSR’s role in modern websites and how Corset can coexist with it. Matthew asserts that Corset does not aim to replicate server logic on the client, avoiding data serialization typical in isomorphic frameworks. Instead, it treats server-rendered HTML as the ground truth, letting the client progressively enhance features. Ryan contrasts this with full-blown rehydration, explaining that frameworks like React or Svelte re-render entire components, potentially duplicating work. Corset’s reliance on existing DOM prevents that overhead.

Despite the minimal duplication, Ryan notes potential drawbacks. He recalls heavy MPA complexities from past server-based frameworks that eventually led developers to SPAs. Matthew acknowledges that while Corset handles small to medium complexity well, purely isomorphic use cases might still look elsewhere. Yet, for content-centric sites or large forms, Corset’s layering approach can drastically cut client JavaScript. Both acknowledge that deeper SSR integration, including partial refresh from the server, could be a future direction for libraries adopting Corset-like models.

### 01:00:00 - The Puzzle of Declarative Debugging

Ryan questions how developers debug applications in fully declarative environments like Corset. He compares CSS debugging, which can be indirect, to diagnosing JavaScript side effects. Matthew acknowledges that while stepping through code might be familiar for imperative scripts, unraveling a cascading set of selectors can be challenging. Tools could eventually emerge to visualize the binding or store hierarchy, but for now, developers must reason about events and store updates carefully to track changes.

They also discuss the broader struggles with debugging any highly declarative framework, from Svelte to React. The pair note that reactivity itself can lead to hidden state transitions, forcing users to rely on specialized dev tools. Matthew suggests that by aligning with DOM-based patterns, Corset remains closer to the platform. This might simplify debugging in smaller doses, but larger apps still demand rigorous workflows. Ryan emphasizes that the real payoff of declarative patterns is productivity, even if they complicate debugging under the hood.

### 01:06:00 - Performance Characteristics of Corset

The conversation turns to how Corset performs under heavy load. Matthew admits that compared to frameworks with advanced compilation or fine-grained reactivity, Corset’s general-purpose DOM scanning can be expensive. Since it must repeatedly query elements that match selectors whenever events occur, its performance is tied to the complexity of CSS matching. He expresses hope that future optimizations or more sophisticated runtime indexing can alleviate these costs, but acknowledges that Corset might not surpass highly tuned libraries like Solid or Svelte on raw speed.

They revisit the trade-off between simpler code and raw performance. Ryan highlights that a fully compiled approach can produce near jQuery-level targeted updates, but at the expense of complex compile steps or specialized DSLs. Corset’s runtime focus is arguably more transparent, treating the DOM as a shared data model. If developers choose it for progressive enhancement, they likely benefit from minimal re-renders on segments that matter. Thus, while not dominating benchmarks, Corset could shine in real-world usage for content-heavy sites or incremental upgrades.

### 01:12:00 - The Evolution of Framework Architectures

Ryan and Matthew step back to consider a bigger picture: frameworks have grown from simple scripts to elaborate ecosystems bridging server and client. They reference the rise of Next.js, Astro, and SvelteKit, each offering new spins on SSR, static generation, or partial hydration. Matthew sees these evolutions as incremental steps addressing performance bottlenecks or developer pain. Ryan agrees, viewing them as repeated attempts to unify or decouple server logic from front-end rendering, always returning to the question of how to handle state and hydration efficiently.

They note that every approach—MPA, SPA, islands, or streaming—addresses distinct trade-offs. From past .NET solutions to modern JavaScript, complexity accumulates with attempts to unify logic. Matthew, having seen multiple cycles, advocates caution against over-abstracting. He warns that massive meta-frameworks risk a repeat of history, where developers end up tangling with isomorphism complexities. Ryan points out that the impetus for solutions like Corset arises from that same frustration, aiming to restore control while still enjoying a declarative, reactive model.

### 01:18:00 - Bridges Between CSS and JavaScript

The discussion dives into the foundational truth that CSS, by design, is a declarative, cascading system, making it “reactive” in a sense. Matthew’s decision to embrace CSS semantics for Corset was deliberate, hoping to piggyback off its universal familiarity. He acknowledges that the inversion of control from purely JavaScript-driven rendering to a CSS-like approach can disorient experienced engineers. Yet, once internalized, it might mirror the same mental leaps that led from imperative DOM manipulation to React’s declarative model years ago.

Ryan compares the constraints of CSS to language constraints in other reactive frameworks, citing how limiting a general-purpose language fosters simpler mental models. The duo reflect on the tension between wanting powerful escapes in JavaScript versus reaping the stability of a locked-down DSL. In Corset’s case, that DSL is flexible enough to handle typical tasks—like partial updates or event subscriptions—without losing clarity. They speculate on whether dev tooling will keep pace, ideally offering robust syntax highlighting or inspector integration for this new pattern.

### 01:24:00 - Debugging the “Hello World” Variations

Ryan and Matthew recount small Corset examples where the DOM already contains initial state, such as a `value="Hello"` in an input field. They show how Corset can seamlessly adopt existing values as reactive data rather than re-initializing them to a default. The pair talk through small snags: occasionally, you need explicit store references or custom directives to pull data from attributes. Ryan calls it reminiscent of older frameworks that gracefully enhance pre-rendered markup.

They also note edge cases, for instance, toggling text that was originally server-populated. Corset must keep track of that baseline, ensuring it can revert or update correctly. Such consistency reaffirms its central tenet: the DOM is the ultimate source of truth, eliminating the need for secondary data structures. Ryan remarks that while this might conflict with people used to unidirectional data flow, the trade-off can be worthwhile for simpler projects or multi-page sites seeking a gentle path to interactivity.

### 01:30:00 - Incorporating Classic jQuery Patterns

Matthew draws parallels to the jQuery era, explaining how developers once sprinkled event handlers and selectors throughout a codebase. Corset modernizes that approach with structured reactivity, removing imperative calls to `.on()` or `.text()`. Instead, it merges the clarity of CSS selectors with a stable data-flow model. This resonates with those who recall hooking into pre-rendered templates, but now can avoid repetitive code. Ryan nods to the familiarity of jQuery while marveling at how Corset avoids clutter and spares repeated queries.

They laugh about how jQuery, though powerful, often resulted in large codebases of unstructured callback spaghetti. Corset’s design avoids that by centralizing logic in a single sheet of declarations. Each selector block has clear boundaries, listing variable manipulations or event callbacks in place. Ryan imagines a smooth migration path for teams still reliant on jQuery-based solutions. Instead of rewriting everything, they can treat their markup as a first-class entity while upgrading to the more declarative rules Corset provides.

### 01:36:00 - Demonstrating Nested Comments and Toggles

Using an analogy to nested comments, Ryan asks Matthew how Corset deals with recursion or deeply nested structures. Matthew shares an example akin to a comment thread that can be collapsed or expanded. By assigning toggles at each node, the selective hiding or showing of children becomes trivial with class toggles. He points out that controlling the visibility or text-based markers occurs purely through declarations, where a single store boolean flips everything below a matched selector.

They remark on the similarity to recursive partial hydration in advanced frameworks like Marco or Astro. However, here, it’s achieved through a single, cohesive set of CSS-like rules. Ryan is impressed that even deeply nested elements remain discoverable to Corset’s cascades without requiring custom re-renders. This approach benefits large comment sections, as only minimal JavaScript logic runs on reveal or hide actions. Listeners attach selectively, ensuring no superfluous overhead for items that remain static.

### 01:42:00 - Debating the Pros and Cons of Isomorphic Solutions

The two pivot to the broader conversation about isomorphic frameworks, noting the popularity of Next.js and SvelteKit. Ryan points out that large-scale apps often unify their logic across server and client, but Matthew believes this can lead to complexity. Corset takes a resolute stance: keep the server separate, focusing solely on progressive enhancement. For simpler pages or content-driven sites, this approach saves considerable overhead, reducing the duplication of rendering logic. They acknowledge, however, that not everyone can or wants to abandon SSR re-rendering.

Matthew contrasts this with frameworks that generate entire client bundles for each route, lamenting wasted resources for features that might never be used. Corset’s minimal approach loads only what’s needed when an interaction occurs. The conversation highlights that while isomorphic code can still be valuable for real-time apps with shared routes, many sites function well with static HTML plus minimal interactivity. Ryan concedes that partial solutions like Astro already demonstrate this principle effectively, hinting that Corset aligns with an emerging shift away from monolithic SPAs.

### 01:48:00 - Potential Interplay with Astro and Other Tools

Ryan wonders whether Corset could embed easily within meta-frameworks like Astro, treating each interactive piece as an island. Matthew notes that because Corset doesn’t care how the HTML is produced, it should slot naturally into any SSR pipeline. If Astro renders pages statically, Corset can parse the final output, binding events as soon as the client script runs. He suggests it may open up synergy where only essential bits become interactive, matching Astro’s partial hydration ethos.

They speculate on bridging more advanced server features with Corset, such as streaming dynamic content into placeholders. This could unify Matthew’s older vision from Skypack, where server and client cooperated to progressively hydrate. While Corset doesn’t inherently provide streaming support, a meta-framework might feed HTML fragments, which Corset then upgrades. Ryan imagines a scenario where each snippet has pre-defined rules, enabling fluid user experiences. The pair conclude that collaborative possibilities are vast if more tools adapt a DOM-first approach.

### 01:54:00 - Brief Sidebar on Benchmarks and Comparisons

The talk diverts to performance metrics, including the JS Framework Benchmark. Ryan asserts that while these tests can measure throughput and partial update times, they rarely capture the entire complexity of solutions like Corset or Quick, which adopt novel hydration or lazy-loading strategies. He acknowledges that raw numbers on rows or table updates don’t necessarily reflect how a real site might behave with partial interactivity or minimal client code. Nevertheless, developers still reference these benchmarks for a baseline sense of speed.

Matthew agrees that advanced solutions often appear slower in synthetic tests because they address complexities not modeled by the benchmark. He cites how Quick’s resume-ability, for example, doesn’t show up on typical row-insertion tests. Similarly, Corset’s prime advantage—progressive enhancement—doesn’t appear if the entire page is already loaded and measured. Both caution newcomers to interpret such results carefully, looking instead at real-world usage patterns or SSR scaling. They note that pushing frameworks beyond micro-benchmarks could lead to more balanced insights.