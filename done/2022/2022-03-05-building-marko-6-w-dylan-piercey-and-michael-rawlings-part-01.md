---
showLink: "https://www.youtube.com/watch?v=Y22xf8EjioE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Marko 6 w/ Dylan Piercey, and Michael Rawlings"
description: ""
publishDate: "2022-03-05"
coverImage: "https://i.ytimg.com/vi/Y22xf8EjioE/maxresdefault.jpg"
---

## Episode Description

A detailed exploration of Marko 6’s architecture and features, highlighting partial hydration, streaming, and the future of server-driven web applications.

## Episode Summary

This in-depth conversation looks at how Marko 6 aims to streamline development by unifying server and client rendering strategies. Beginning with an overview of Marko’s origins and design philosophy, the discussion highlights how its compiler-driven approach allows developers to focus on intuitive, declarative patterns without worrying about performance pitfalls. The panel then examines how Marko 6 splits and tree-shakes code down to fine-grained levels, sending only the minimal JavaScript required for interactive portions of a page. They also cover the concept of resumability, which ensures the client simply continues from the server’s work rather than redoing computations. Throughout, they draw parallels to other frameworks while emphasizing Marko’s unique strengths in routing, data serialization, and incremental adoption of client-side behavior. By the end, listeners will gain an appreciation for Marko 6’s potential to offer high performance and a familiar, flexible development model, all while embracing server-first rendering approaches that could reshape modern web practices.

## Chapters

### 00:00 - 06:00 — Opening Remarks and Introduction  

In this opening segment, the host welcomes viewers and explains his enthusiasm for Marko, a framework they’ve covered before in previous streams. He sets the stage by mentioning that Marko has been pioneering server-driven techniques since 2014, well ahead of many emerging solutions. The host outlines the evening’s plan to explore Marko 6 with core team members, emphasizing the newly refined developer experience, fine-grained hydration, and reactive compiler analysis.

The conversation briefly touches on the industry’s fascination with sending less JavaScript to the browser, referencing partial hydration and multi-page app approaches. The speaker notes Marko’s history in this domain, describing how the team has spent years fine-tuning an architecture that balances performance with DX. By the end of this chapter, listeners know the stage is set for a deep look into Marko 6’s internal mechanics, practical applications, and future roadmap.

### 06:00 - 12:00 — Guest Introductions and Marko’s Origins  

Here, the host officially introduces Marko core contributors Michael Rawlings and Dylan Piercey. Both share personal stories about how they stumbled upon Marko years ago, with Michael highlighting his initial desire for a streaming-focused templating solution and Dylan recounting his work on an isomorphic router before joining the Marko team. They recall how Marko’s compiler, streaming capabilities, and partial hydration concepts stood out in an era dominated by single-page apps.

They also mention their delight in Marko’s ability to transform existing HTML into dynamic features without heavy rewriting. By relating personal journeys to Marko’s history, this segment shows how the framework’s evolution—from simple templating language to advanced, fine-grained system—has been shaped by real-world needs. The team’s experience foreshadows the forward-thinking features Marko 6 promises to deliver.

### 12:00 - 18:00 — Overview of Marko 6 Goals  

As the conversation moves into the new release’s motivations, the guests outline Marko 6’s two main objectives: first, to maintain the best developer experience possible, and second, to minimize JavaScript that needs to run in the browser. They stress the importance of streaming server-side rendering, partial hydration, and a smaller runtime, all of which are approached by systematically analyzing each expression’s dependencies at compile time.

The discussion reveals how Marko’s compiler can break code into many tiny pieces, each shipped to the browser only if necessary. The guests compare this approach to other frameworks that attempt similar optimizations but require userland constraints, like restricting certain language features. Marko 6, by contrast, focuses on effortless co-location of logic and markup, letting developers write natural code with the compiler determining minimal shipping needs.

### 18:00 - 24:00 — Comparing Marko 6 to Qwik and Others  

In this chapter, they address Qwik’s concept of resumability and break down how Marko 6 uses a similar technique but leans more on compile-time analysis for tree shaking. They acknowledge that both frameworks remove the “bootstrapping” overhead seen in traditional hydrations, ensuring code only runs where it’s needed. The conversation delves into how Marko’s partial hydration solution doesn’t rely on a massive monolithic top-level rerender but rather on fine-grained updates for truly dynamic parts.

They also discuss the merits of sending less data to the client, pointing out that Marko’s knowledge of exactly which components will become interactive allows it to skip transmitting irrelevant state or logic entirely. While Qwik lazily loads almost everything, Marko tries to avoid sending code in the first place. The panel underscores the general industry trend: frameworks that cut down on redundant client work and unify server-client boundaries are rapidly gaining traction.

### 24:00 - 30:00 — The Compiler’s Role in Cutting Bundle Size  

Turning attention to the power of Marko’s compiler, the guests explain how it identifies inert data—values needed for server rendering but never updated on the client—to eliminate them from the client bundle. Unlike older partial hydration solutions that relied on user discipline or advanced design patterns, Marko 6 automatically discerns which pieces of state are truly dynamic. As a result, large segments of a component tree become irrelevant for client-side code.

They illustrate the simplicity this brings to developers, who no longer need to separate server-only code manually. Instead, Marko’s new approach inherently treats non-reactive logic as safe to exclude from the client. The result is smaller bundles, faster page loads, and no additional overhead for developers. Listeners get a sense of Marko 6’s ultimate ambition: to ease mental overhead by letting a powerful compiler handle optimization details.

### 30:00 - 36:00 — Live Demo Setup and Tag-Based API  

The group transitions to showcasing Marko’s new Tag-based API, which embodies the framework’s philosophy: every construct, from conditionals to loops, is itself a tag. They demonstrate how developers can embed reactive state (via `<let>` tags) directly in the markup, eliminating the need to jump back and forth between JavaScript modules and templates. By walking through short code snippets, they show how these tags co-locate logic and structure.

They emphasize that anything can be turned into a tag, allowing userland custom tags that replicate the framework’s own capabilities. This extends to controlling loops, referencing DOM elements, and more—Marko’s compiler sees a uniform language. The result is easier refactoring, as developers can lift or move blocks of code anywhere without rewriting extensive plumbing. This sets the stage for a deeper dive into the core concepts behind reactivity and hydration.

### 36:00 - 42:00 — Reactive System and Let Tag Examples  

In these minutes, Michael and Dylan give concrete code samples illustrating how the `<let>` tag fosters dynamic behavior. They show how state can be injected into any loop or conditional within the template, effectively producing localized interactive logic. Unlike some frameworks that require separate components or side files to handle these nuances, Marko’s system places reactivity precisely where it’s needed.

The speakers highlight how this design aligns with Marko’s objective of letting developers quickly add small “sprinkles” of interactivity to existing markup. They mention how, in some older or less flexible frameworks, such patterns would demand major architectural changes—whereas in Marko, it’s as simple as placing reactive tags next to the relevant elements. Listeners gain insight into how Marko smoothly accommodates incremental complexity.

### 42:00 - 48:00 — Integrating Effects and Declarative DOM Access  

Next, the panel addresses Marko 6’s approach to effects (`<effect>` tags) and DOM references. They showcase how an `<effect>` block can appear at any level in the template to run logic automatically when dependent values change. This extends to referencing DOM elements directly within the template, eliminating the usual dance of hooking references in JavaScript.

They stress that Marko’s approach is especially appealing for developers used to hooking up event listeners or side effects in multiple steps. With `<effect>`, reactive scope merges seamlessly into the markup, generating a more fluid workflow. The conversation also contrasts Marko’s approach to frameworks that rely heavily on JavaScript constructs or separate files for each lifecycle or effect—Marko centers it all in the template.

### 48:00 - 54:00 — To-Do MVC Example: All in One File  

To illustrate real-world usage, they open a 78-line To-Do MVC example implemented in a single Marko file. Despite the app’s standard functionality—adding, removing, filtering tasks—everything is contained concisely. They point out how state used by the footer can live right near the footer markup, while logic for the main list remains near the list markup.

This example underscores the immediate readability Marko strives for: data, logic, and presentation remain side by side. Refactoring is straightforward—if the code grows, it’s trivial to break it up. The speakers contrast that with setups in other frameworks where hooking up a to-do form, filter buttons, or list items typically means multiple files. Marko’s single-file approach encourages trial-and-error and rapid iteration without sacrificing structure.

### 54:00 - 1:00:00 — The Power of the Compiler’s Output  

Here, they dive deeper into what the Marko compiler actually produces. By showing compiled output for a simple counter, they highlight how Marko breaks everything into tiny reusable functions, each tied to a specific piece of state. This allows advanced tree shaking—only the click handler and the update logic ship to the browser for that interactive feature.

Listeners learn about Marko’s `apply` and `hydrate` functions, how DOM nodes get tracked, and how closures are hoisted out of the final bundle. The discussion reveals that Marko’s reactivity is built into its code structure, so minimal overhead remains at runtime. This examination of raw output emphasizes the engineering behind Marko’s claim: no unneeded code crosses the wire.

### 1:00:00 - 1:06:00 — Fine-Grained Reactivity vs. Full Component Rerenders  

As the panel examines the compiled output, they contrast Marko’s approach—where each piece of logic is updated on demand—to frameworks that rerun entire components. They explain that Marko’s system prevents the repeated overhead of re-checking all child elements. Instead, only fields within the reactive graph recalculate when necessary.

They also note how Marko’s fine-grained updates help with large lists or complex UI structures. For example, changing one item in a list doesn’t require reprocessing the entire parent. This approach, reminiscent of certain compile-time or signal-based frameworks, ensures snappy interactions even in substantial applications. The outcome, they say, is near-vanilla performance with minimal developer micromanagement.

### 1:06:00 - 1:12:00 — Performance in JS Framework Benchmark  

Following the compiler deep dive, the discussion shifts to raw performance metrics. They reference initial results from the JS Framework Benchmark, showing Marko 6’s “Fluurt” branch performing comparably to fast libraries like Inferno or Solid, particularly in areas like creation and partial updates. Clear-row memory usage even outperforms many peers.

They stress these results are preliminary and likely to improve with further optimizations. Nonetheless, the strong showing demonstrates Marko’s approach isn’t just about bundling efficiency—it also competes in raw client update speed. The group reiterates that the real advantage emerges when only minimal code is shipped, so the typical large-scale app scenario should see even greater relative gains.

### 1:12:00 - 1:18:00 — Resumability and Async Data Fetching  

The team shifts focus to how Marko’s “resumability” means the client continues exactly where the server left off, bypassing repeat fetches or re-renders. They contrast it with single-page apps that must reload data or rely on caching libraries. Marko’s approach spares developers from wiring together complicated caching strategies for initial page loads since the data is already on the server and simply carried forward.

They mention how frameworks like Remix still re-render or rely on caching. Marko’s approach, driven by its compiler analysis, automatically decides which fields are relevant to client operations. This leads to smaller serialized payloads. By eliminating redundancy, Marko frees developers to place data-fetch logic on the server without duplication. The chapter concludes by emphasizing how this design helps large, data-heavy sites.

### 1:18:00 - 1:24:00 — Large Lists and Streaming Considerations  

Here, the speakers focus on scenarios involving big data sets, such as large user tables that might require partial updates. They outline how Marko can keep a majority of the data on the server, serializing only essential fields for interactive elements. They contrast it with older approaches where heavy duplication crippled performance, especially when streaming partials to the browser.

They revisit the notion that streaming can coexist with Marko’s partial hydration, giving users the best of both worlds: immediate content via server push and reactive updates for only the dynamic segments. This synergy helps avoid re-fetching entire data sets. Ultimately, the conversation paints a picture of a resilient architecture that easily handles both small, incremental changes and broad updates spanning multiple UI fragments.

### 1:24:00 - 1:30:00 — The Future of MPA plus SPA: Unified Routing  

As they look ahead, the guests reflect on bridging multi-page app (MPA) benefits with single-page app (SPA) convenience. They hint at Marko’s plans for advanced routing that can preserve state across pages without re-downloading entire bundles. The potential for nested routing on the server side takes center stage, revealing a path toward partial updates that keep stable elements intact while swapping in new content for active routes.

They explain that single-page transitions often require a large router bundle in the client. Marko, by contrast, aims to push that logic server-side, streaming partial updates so the user barely notices changes. The outcome is an experience that feels spa-like—quick transitions and persistent state—yet avoids shipping a giant router or hundreds of kilobytes of dead code. This future direction teases a new paradigm in server-centric frameworks.

### 1:30:00 - 1:36:00 — Transitional Apps and Hybrid Routing  

In this portion, the panel explores the concept of transitional apps, bridging classic server-centric workflows with the fluid interactivity of single-page navigation. They mention that streaming partials from the server to update only relevant sections of the DOM can rival or exceed typical SPA transitions. The upcoming Marko router aims to preserve existing state for top-level regions while fetching new content for nested ones.

They see this as a natural evolution beyond the single-page approach: let the server do the heavy lifting and skip re-hydrating everything from scratch. The group stresses that this addresses many complaints about single-page apps, from large client bundles to repeated data fetching. Their plan is to make this transition logic feel natural to developers, leaning on Marko’s compile-time intelligence without imposing strict new constraints.

### 1:36:00 - 1:42:00 — Preserving State and Partial Replacements  

Continuing with the idea of advanced routing, they consider edge cases like shared contexts or ephemeral UI states that typically get lost during page navigation. Marko’s approach could allow a section of the DOM to remain as-is while only partial updates flow in from the server. They envision automatically detecting static or inert elements, ignoring them in subsequent requests, and smoothly switching out what changed.

They acknowledge the challenges around lists, keys, and reordering but stay confident that Marko’s fine-grained scope tracking can handle differences. If an element remains unchanged in the new route, there’s no reason to discard it and re-render. Listeners hear that these features, though still under development, could unify ephemeral states and server-driven updates more tightly than existing patterns.

### 1:42:00 - 1:48:00 — Comparing to React Server Components  

They draw parallels to React Server Components, noting how React’s new approach also merges server-driven rendering with partial code shipping. But Marko’s team underscores the distinct difference that they’ve operated in an MPA mindset for years, making partial hydration a native concept rather than an added layer. They touch on challenges in React’s ecosystem, such as rewriting or restricting existing libraries to fit the server component model.

They suggest that Marko’s approach might feel more cohesive since it was designed from the ground up to unify server and client. There’s less worry about hooking into external caching or adopting specialized patterns for data fetching. The conversation sets Marko’s advantage as an all-in-one solution for code-splitting, streaming, partial hydration, and minimal data serialization.

### 1:48:00 - 1:54:00 — Realigning Around MPA Foundations  

During this segment, the panel muses on how the entire web dev world seems to be rediscovering MPA ideas as the best method for shipping less JavaScript. They credit Marko’s extended experience with MPA on Node.js for giving them a head start. While single-page techniques still have valuable lessons, a server-driven approach can reduce or remove entire categories of overhead.

They also address developer perceptions that building multipage apps in JavaScript is unwieldy. Marko counters that perspective by showing that purely server-based UI logic can be combined with just enough client hydration, letting code live in one place. This re-centers the conversation on Marko’s core mission: achieving progressive enhancement with minimal friction, rather than forcing a full SPA route by default.

### 1:54:00 - 2:00:00 — Challenges and Future Router Directions  

Moving closer to the intricacies of building a router that merges server transitions with partial re-rendering, the speakers acknowledge potential corner cases around re-syncing state. They mention that expansions or merges in large lists, for example, will demand clever handling of keyed items. While the compiler can figure out a lot, advanced diffing might also be needed on the server to ensure client elements map correctly.

They highlight that Marko 6, while powerful, is still evolving. Work remains before the framework ships a robust solution for nested routing and partial page updates. The team’s confidence, however, remains high, given the strong foundation they already have in the new compile-time pipeline. Listeners get a sense that Marko’s future router will be the next big leap in bridging MPAs and SPAs.

### 2:00:00 - 2:06:00 — Handling Complex Interactions and Placeholders  

Here, they detail how the new approach can handle more nuanced interactions such as partial loading indicators. For instance, a portion of the UI might need fresh server data while other sections stay fully client-driven. Marko can show placeholders only in relevant areas, streaming in results once they arrive. This mirrors existing spa-like user experiences without demanding large amounts of JavaScript or client-side orchestrations.

They also revisit how streaming is not limited to top-level frames; it can occur in sub-components or elements. Doing so elegantly in a single-page app is often tricky, but Marko simplifies it via the same partial hydration that has always existed—just with extra intelligence to handle fragmented updates. Developers can thus maintain an illusion of constant continuity while the server performs its tasks.

### 2:06:00 - 2:12:00 — Prefetching and Network Considerations  

Addressing speed concerns, the panel talks about prefetching. They recall that standard single-page apps often load entire route bundles in anticipation of user movement, so navigation feels instant. Marko can replicate a similar effect by prefetching the relevant HTML or partial updates from the server. Because Marko sends just what’s essential, these prefetches can be modest in size.

They also mention how real-time environments, like eBay’s large-scale platform, can leverage advanced caching or data edges for super-fast server responses. The synergy of partial hydration and well-planned prefetches means a truly seamless interface is within reach. The challenge, they admit, is making it as straightforward as hooking a single attribute or tag into Marko’s router, so everyone can adopt it with minimal fuss.

### 2:12:00 - 2:18:00 — Revisiting Progressive Enhancement  

During these minutes, the conversation circles back to progressive enhancement—a key concept in older web models. Marko’s advantage is that the page loads and functions well with minimal or even zero JavaScript in certain segments, gracefully layering interactivity where it’s genuinely needed. The participants point out that many developers find this approach refreshing, as it removes the stigma of shipping a massive client bundle for trivial UI updates.

They compare Marko’s approach to architectures like HTMX or Rails’ classic partial updates. Yet Marko’s is more flexible, because once you’re in a JavaScript environment, you have full freedom to do local reactivity or complex interactions. This synergy between older no-JS fallback patterns and modern fine-grained reactivity is precisely what Marko 6 aims to perfect.

### 2:18:00 - 2:24:00 — Reactivity Examples and Conditional Hydration  

They expand on how Marko 6’s reactivity can be toggled at a granular level to avoid rewriting entire components. For instance, a big product detail page might mostly be inert, except for a small color picker that depends on user clicks. With Marko, that color picker can be hydrated independently without shipping the entire product detail logic to the browser.

This conditional approach is more flexible than solutions that require explicit declarations or file naming conventions like `.server` and `.client`. Instead, the Marko compiler infers boundaries from actual usage of state or DOM event handlers. As a result, developers remain free to structure code in the most natural way while still benefiting from best-in-class performance.

### 2:24:00 - 2:30:00 — A Closer Look at Code Splitting with Vite  

Briefly, the panel mentions bundlers and developer experience. They remark on Marko’s current toolchain, historically reliant on Webpack, but note they’re exploring Vite for faster builds and simpler SSR integration. They outline the challenges large companies like eBay face, where legacy systems rely on CommonJS, yet new features demand modern bundlers.

They see promise in how Vite acknowledges both server and client contexts, aligning with Marko’s dual rendering approach. However, they hint that specialized tweaks are needed to handle advanced code splitting and Marko’s unique compilation pipeline. Still, the ultimate goal remains: straightforward local development with instant server refreshes, ensuring new Marko 6 features feel smooth in day-to-day workflows.

### 2:30:00 - 2:36:00 — Incremental Adoption and Legacy Support  

The conversation shifts to how Marko is introduced in existing codebases. Because Marko began as an MPA-friendly solution, it slots nicely alongside older applications that already rely on server-side rendering. This has made it popular at eBay, where millions of lines of code can’t be replaced overnight. Marko’s partial, page-by-page adoption lowers the barrier to entry.

They discuss how carefully Marko’s new features have been designed to ensure minimal breakage with older versions. While Marko 6 is a substantial rewrite, the panel underscores that it builds on the same principles. Current apps can gradually upgrade, turning on advanced compilation or reactivity only in certain pages. The audience hears that Marko’s strong backward compatibility is a key reason for its success in enterprise contexts.

### 2:36:00 - 2:42:00 — Future Router Implementation Details  

Focusing again on future router mechanics, they explain that the key is to unify server logic for route resolution with a minimal client module that can orchestrate partial updates. By analyzing whether top-level elements remain stable across navigations, Marko can skip reloading them, while newly introduced children can be streamed in from the server.

They clarify that each route segment effectively becomes an island that can be replaced or updated on demand, eliminating the need for central re-rendering. This design stands in contrast to frameworks reliant on a single, large root component. Instead, Marko’s nested approach puts transition management where it naturally belongs: in each route boundary. Listeners get excited at the prospect of a truly seamless multi-level partial refresh.

### 2:42:00 - 2:48:00 — Handling Edge Cases with Nested Routes  

In this segment, the guests consider complexities of nested routes, such as multiple depth levels or shared sub-components across different branches. If, for instance, two routes share a side panel with session info, Marko might only re-serialize or update that panel if something relevant changes. This requires precise knowledge of each piece’s reactive dependencies.

They note that Marko’s design has always stressed a strong link between location-based changes (like routes) and data dependencies. By walking the reactive graph, the compiler can determine exactly what’s new. The audience hears that Marko’s architecture aims to remove the guesswork from partial rendering, leaning on automatic scope merges to produce correct, minimal updates.

### 2:48:00 - 2:54:00 — Streaming Transitions and Suspense-Like Patterns  

Returning to streaming, the panel outlines how partial transitions could integrate placeholders resembling Suspense in React or Solid. Marko would deliver immediate server instructions for stable sections, while waiting on slower data fetches for certain nested routes. Once data arrives, a small patch or HTML snippet flows in, seamlessly upgrading the placeholders.

They argue this approach can make the entire experience more interactive, since short-living placeholders reduce perceived wait times. Users continue exploring the stable areas while Marko quietly streams in the missing pieces. It’s an evolution of existing SSR streaming, made more powerful by the compiler’s knowledge of which components truly need client code and which do not.

### 2:54:00 - 3:00:00 — Reframing the SPA vs. MPA Debate  

In these minutes, the guests reflect on the long-standing tension between MPAs and SPAs. They note that many frameworks try to unify both but often require complex scaffolding or suboptimal fallback. Marko’s path, as they put it, starts from MPA roots and progressively adds the features people love in SPAs: dynamic data, transitions, and persistent states.

They reason that with Marko 6’s fine-grained hydration, you effectively pay no overhead for large static sections. When something truly needs to be interactive, the compiler can isolate just that logic. By weaving these partial hydration updates into a route-based system, the framework retains the MPA advantage of minimal total code while gaining near-SPA fluidity. The group reiterates that bridging these paradigms is Marko 6’s biggest innovation.

### 3:00:00 - 3:06:00 — TypeScript and Finalizing Features  

Here, they touch on the community’s desire for stronger type support. The team confirms they’re working on TypeScript integration for Marko templates, aiming for autocompletion and robust type checks directly in `<script>` blocks or custom tags. This means Marko 6 will provide an end-to-end typed experience across server and client code.

They also mention finalizing features like advanced code-splitting, updated dev tools, and improved debugging. Ensuring these complex new abilities—resumability, partial hydration, streaming updates—fit neatly into everyday developer flows is paramount. Although they’re still in alpha phases, they see the next year as crucial for polishing Marko 6 into a production-ready release that meets modern demands.

### 3:06:00 - 3:12:00 — Addressing Community Questions  

In this brief Q&A interlude, the speakers respond to audience curiosities about release timelines and how these enhancements might affect project structure. They confirm that Marko 6 is targeting a beta release, likely in several months, with a full stable build possibly late in the year or early next. They reiterate that the biggest leaps—sophisticated routing and transitional partial updates—might appear after the initial 6.0 launch.

They advise those eager to try Marko’s new capabilities to keep an eye on official previews and contribute feedback. Everyone agrees that real-world testing is the best way to refine edge cases in dynamic routing and reactive code-splitting. The panel expresses excitement about how quickly the Marko community has grown, calling on listeners to share experiences and suggestions.

### 3:12:00 - 3:18:00 — Encouraging Experimentation and Feedback  

Expanding on the Q&A, the team highlights the need for developer feedback in shaping final APIs. While they have a strong architectural vision, details around the router’s interface, debugging tools, and advanced use cases remain open. They promise to keep the barrier to entry low, allowing incremental upgrades for existing Marko 4 or 5 applications.

They encourage adventurous developers to clone the experimental branch, try building small prototypes, and report any friction. Real-world scenarios are the best measure of success for Marko 6. By inviting involvement, they hope to ensure Marko becomes not just a specialized eBay solution but a more widely recognized platform for next-generation web applications.

### 3:18:00 - 3:24:00 — Reflecting on Marko’s Place in the Ecosystem  

In these minutes, the conversation highlights Marko’s unique standing: a JavaScript-based MPA solution with advanced streaming and partial hydration. They observe that other frameworks increasingly adopt server-oriented features, but Marko maintains a simpler authoring style thanks to its deeply integrated compiler. The group mentions how Marko has historically been overshadowed by bigger names but is now recognized by performance-minded developers who see its potential.

They mention how React, Svelte, and Qwik each handle certain aspects differently. Marko’s approach is simply another strong contender, especially for large-scale or high-traffic sites. The participants note that as more apps emphasize speed and smaller bundles, the demand for frameworks like Marko naturally rises. By championing a server-first mentality, Marko’s success story might soon expand beyond eBay’s walls.

### 3:24:00 - 3:31:52 — Closing Thoughts and Next Steps  

In the final chapter, the host and guests summarize Marko 6’s key innovations: a powerful compiler that auto-splits code, a reactively aware approach to server and client state, and upcoming router enhancements for near-seamless transitions. They restate how the entire design aims to unify MPA simplicity with SPA conveniences, providing incremental, logic-driven hydration. The group reiterates that full release is months away, though early adopters can start testing the alpha.

They close by thanking viewers for tuning in to such a detailed discussion, acknowledging the late hour for the guests. They encourage the community to follow Marko’s progress on GitHub, join the Discord, and share any ideas or use cases. The sense is that Marko 6 will soon move from a cutting-edge experiment to a mainstream choice for high-performance, developer-friendly web applications.