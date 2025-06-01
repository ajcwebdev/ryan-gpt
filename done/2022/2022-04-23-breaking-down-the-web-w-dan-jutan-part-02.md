---
showLink: "https://www.youtube.com/watch?v=REXtIuAJ3dE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Breaking Down the Web /w Dan Jutan"
description: ""
publishDate: "2022-04-23"
coverImage: "https://i.ytimg.com/vi/REXtIuAJ3dE/maxresdefault.jpg"
---

## Episode Description

An in-depth chat on modern web rendering strategies, performance insights, and emerging framework techniques with the Solid docs team.

## Episode Summary

In this extensive discussion, the speakers compare various approaches to fetching and rendering content on the web, highlighting trade-offs in performance, complexity, and developer experience. They begin by describing server-side rendering and client-side rendering, illustrating how factors like latency and bundling can affect time-to-first-byte or contentful paint. The conversation moves into advanced techniques, including streaming server-side rendering, which can show partial content sooner. They also address routing—from traditional multi-page approaches to more complex nested routing solutions—and underscore the power of frameworks that minimize or dynamically load JavaScript. Throughout, they emphasize how decisions about rendering and navigation shape user experience and maintainability, touching on experimental ideas like resumability and transitional routing. By comparing real-world examples and referencing well-known tools, they offer a clear view of the state of modern frontend engineering.

## Chapters

### 01:18 - 01:24 | Minimal JavaScript Shipping and the Rise of Partial Hydration

Discussion shifts to partial hydration, an increasingly relevant concept for apps that only need certain parts of the UI to remain interactive. The host cites Astro’s popular approach—serving mostly static HTML and hydrating only designated “islands” of interactivity—as a prime example. He ties this to ongoing work in both Marco and Solid, explaining that next-generation compilers aim to minimize the JavaScript needed by each interactive component, rather than shipping a monolithic bundle.

He contrasts the old status quo of shipping entire frameworks to power a handful of widgets. Partial hydration sidesteps that overhead by selectively activating interactivity where it matters most. While frameworks like React previously popularized the notion of a universal rehydration pass, these new strategies deliver immediate HTML, then load smaller, on-demand scripts for interactive regions. This dramatic shift in bundling strategy exemplifies how the community is tackling performance and user experience from multiple angles at once.

### 01:24 - 01:30 | Hydration, Qwik Insights, and Reusability

The host brings up Misko Hevery’s recent article highlighting hydration overhead, contrasting traditional “hydration” with Qwik’s concept of “resumability.” The idea is that instead of re-running components on the client, you can effectively pick up where the server left off, slashing JavaScript work. Listeners hear that this resonates with some older progressive enhancement mindsets, where minimal new code is required upon page load.

However, he cautions that “resumability” often demands a framework rethink how it serializes state and organizes event handlers. Frameworks like Marco similarly explore advanced partial hydration that may reduce or even eliminate certain re-renders. Although these topics are intricate, the promise is reducing the amount of JavaScript that must run post-load. This sets up a future conversation about the deeper details of hydration, promising clarity around how new frameworks plan to solve old performance pitfalls.

### 01:30 - 01:36 | Classic MPAs, Modern Touches, and The White Page Myth

Addressing the difference between MPAs (Multi-Page Apps) and SPAs (Single-Page Apps), the host notes how improvements in browser behavior often avoid “white flashes” during page transitions. Browsers have become smarter in preserving the rendered state until a new page is fully fetched and ready to display. This observation counters older claims that MPAs inherently deliver jarring navigations. By weaving in streaming SSR, MPAs can load partial data, showing placeholders or skeleton UIs quickly, approximating SPA smoothness.

He distinguishes these modern MPAs, equipped with advanced caching and server state management, from the original generation of full reloads. With progressive enhancement or partial hydration, MPAs are no longer forced to show a blank screen. The audience is reminded that while an SPA typically retains state across route changes, a thoughtfully built MPA can replicate that user experience without the same JavaScript overhead. This observation transitions the talk toward more advanced routing distinctions.

### 01:36 - 01:42 | Deep Dive into Resumability and Progressive Enhancement

Here, the host clarifies how old-school websites championed progressive enhancement, letting basic HTML remain functional while layering on JavaScript to improve usability. Resumability, in the Qwik sense, is akin to pre-enhancing pages, so that the client does as little as possible to “revive” functionality. This approach resonates with those who see JS frameworks as an extra, not the initial foundation. He mentions that bridging these ideas into a single codebase is a significant technical feat.

He also addresses the confusion some developers face, as the terminologies—hydration, partial hydration, resumability—can overlap. Many frameworks historically used the term “hydration” for any process binding HTML to client logic, but advanced ideas like streaming or Qwik’s revival flow push beyond that definition. This invites a semantic debate, with classic MPA enthusiasts affirming these patterns look familiar, and modern SPA developers fascinated by the minimal JavaScript shipped to the browser. The conversation grows steadily more nuanced.

### 01:42 - 01:48 | Community Conversations on Web Components and Terminology

The host references a recent article dissecting language around web frameworks, highlighting how “hydration” means different things to different groups. Excerpts from the piece illustrate how social or linguistic angles can foster misunderstandings between frameworks that, in practice, share many underlying ideas. The chat jokes about “use the platform” slogans, acknowledging that JavaScript is, in fact, part of the platform too.

He points out that the conversation often spirals into talk of web components or minimal frameworks, overshadowing more important architectural decisions like how to fetch data or handle partial updates. By clarifying that “using the platform” can incorporate modern frameworks just as easily as raw HTML or Web Components, the host aims to reduce friction among developer camps. This more humanist perspective sets the tone for the final sections, which revolve around unifying rather than polarizing viewpoints.

### 01:48 - 01:54 | Historical Threads: Marco, React, and Evolving Ideas

Recalling older tweets and code from 2016, the host reveals a time when top library authors debated server rendering, partial hydration, and edge-based ideas that are mainstream today. He points out that frameworks like Marco have quietly leveraged partial hydration for years at eBay’s scale, even if they remained under the radar in broader discussions. This retrospective underscores that new trends often build on older research and prototypes.

Through historical anecdotes, the host connects key figures who shaped early solutions, like how Michael Jackson (later famous for Remix) once engaged with these SSR ideas on Twitter. Observing that many repeated debates can be traced back years, he argues that the industry has finally caught up to some of these forward-looking designs. With React 18 offering streaming SSR and others pushing partial or zero hydration, the seeds planted long ago have finally borne fruit.

### 01:54 - 02:00 | Bridging to a Comprehensive Overview of Rendering Approaches

As the stream enters a more methodical phase, the host organizes rendering methods into a table, illustrating differences between static generation, traditional SSR, streaming SSR, and client-side rendering. Each approach is measured by time-to-first-byte, largest contentful paint, and user interactivity. He notes that static sites win on immediate content but often require complex caching for dynamic data. SSR is a good default for data-driven pages, though streaming SSR can optimize user experience even further.

He underscores that no single solution fits every use case: build-time generation can be ideal for marketing pages, while streaming SSR excels for quickly showing partial data in e-commerce or dashboards. The conversation highlights how real apps might blend these patterns, using caching to simulate static pages or mixing client-side rendering for specific interactive segments. This flexible mindset lays groundwork for the final push into routing discussions, marking a pivot from “when to render” toward “how to navigate.”

### 02:00 - 02:06 | Shifting Focus to Routing Mechanics

Having covered various rendering methods, the host turns attention to routing, explaining how SPAs typically load a single bundle and use client logic to switch views. On the other side, MPAs rely on distinct server responses per route. He emphasizes that some frameworks, including Next.js or SvelteKit, blur these lines by offering SSR plus client-side transitions. The notion of incremental hydration or partial updates emerges again as a way to keep transitions smooth without shipping entire frameworks up front.

He sketches out a conceptual matrix that cross-references “when to render” (static, SSR, streaming, or client) with “how to route” (server, hybrid, transitional, or pure client). Certain combinations yield typical SPAs or classic MPAs, while others define new frontiers like React server components. This overview reveals the complexity behind seemingly simple user actions, such as clicking a link or reloading a page. Each approach impacts cache usage, state persistence, and user experience in different ways.

### 02:06 - 02:12 | The Complexity of Combining Data Fetching and Routing

Digging deeper, the host shares how data fetching complicates routing. When a user clicks a link, an SPA might fetch new data on the client, while an SSR approach fetches data on the server before sending a fresh HTML response. Tools like Remix or SvelteKit aim to unify these processes, allowing server code to pre-fetch data while also enabling partial updates in the browser. The host stresses that each scenario involves trade-offs in complexity, speed, and code clarity.

He highlights how caching can blur these boundaries: a server might generate content once and store it, returning a static response for subsequent requests. Alternately, frameworks may rely on incremental regeneration or user-defined caching strategies. This leads to discussions about time-to-first-byte, as data retrieval can impact how quickly HTML starts arriving. While none of these concepts are inherently new, the synergy of modern frameworks and edge platforms propels them into everyday development decisions.

### 02:12 - 02:18 | Exploring Streaming in SSR vs. Client-Rendered Pages

The host returns to a Hacker News demo, contrasting full SSR with a purely client-rendered solution. He shows how SSR quickly yields visible content, though it needs a later hydration pass for interactivity. Client rendering, by contrast, might show a loading screen until data arrives, then paint everything at once. In slow network scenarios, SSR tends to give the user something to see sooner, but final interactivity can land at roughly the same time if not carefully optimized.

This sets the stage for streaming SSR, where partial chunks of the page arrive asynchronously, offering placeholders or partial lists before the entire server response is complete. He underscores that not all frameworks implement streaming identically. React 18 does it one way, Marco does it another, and Solid Start has its own approach. Ultimately, though, they share the aim of reducing perceived latency. Visitors see incremental progress rather than waiting on the entire payload or a single giant bundle.

### 02:18 - 02:24 | Slow Networks, Loading Indicators, and User Impressions

With the dev tools open, the host simulates slower 3G connections, showing how SSR-based apps reveal HTML content in steps, or even placeholders, before fully populating. He notes that streaming helps bridge the gap between a fast initial render and complete data load, delivering a more seamless user impression. This approach is reminiscent of how SPAs might show spinner animations, except now the work is done on the server side, preserving performance for low-end devices.

He also demonstrates how hydration happens after partial HTML arrives, clarifying that true interactivity still requires JavaScript. If the rest of the HTML is in transit, the user might see placeholders but can’t interact fully until the framework attaches event handlers. Despite these limitations, the incremental rendering pattern is widely viewed as a major step forward, providing responsive feedback in network-constrained settings. Developers gain more fine-grained control over how content is revealed, controlling layout shifts and user perception.

### 02:24 - 02:30 | Introducing the Routing Matrix: Server, Hybrid, Transitional, and Client

Transitioning into routing in earnest, the host outlines four main categories: server navigation, hybrid navigation, transitional navigation, and full client navigation. Server navigation involves multi-page reloads with minimal JavaScript overhead. Hybrid navigation, exemplified by tools like Turbo Links, fetches new pages via JavaScript but swaps HTML fragments to avoid full reloads. Transitional navigation, still emerging, represents advanced systems like React Server Components, where data can come from the server, yet the client gracefully merges new content without a complete reload.

Lastly, client navigation is the familiar SPA model, where a single code bundle handles all route changes in-browser. By describing each method’s effect on user state, code splitting, and perceived performance, the host reveals the nuanced decisions behind “just clicking a link.” While older ideas may treat MPAs and SPAs as opposing forces, these hybrid or transitional solutions show a path to combine server-driven templates with minimal yet strategic client logic. This sets the foundation for deeper questions about hydration overhead.

### 02:30 - 02:36 | Turbo Links, Htmx, and Minimizing JavaScript Overhead

Zooming in on hybrid navigation, the host highlights Turbo Links, a solution popular in Rails ecosystems, which loads full HTML pages but replaces only the body and merges the head, preventing a blank page flash. This means that, aside from the small Turbo Links script, there’s little additional JavaScript. He also references Htmx, which similarly allows partial HTML fragments to refresh specific sections, pushing MPA-like patterns into more interactive territory.

Such minimal-JS solutions appeal to developers who want the server to remain the core of their application, but also crave some SPA-like snappiness. The host warns that these methods can feel clunky without carefully planned architecture, especially if deeper user interactions or nested states are needed. Nonetheless, a skillful combination of server rendering, partial updates, and a lean client script can deliver robust experiences while sidestepping the overhead of a full-blown SPA framework.

### 02:36 - 02:42 | Nested Routing and Framework Flexibility

The host brings up nested routing examples, in which parts of a page (such as a sidebar or header) remain constant while another region swaps content based on the route. While SPAs have done this for a while, some experiments show it can be achieved by fetching only certain HTML sections from the server. He mentions that approaches like Solid’s nested router or Htmx-like partial page updates can, with caution, replicate that advanced structure without forcing all logic into a single-page codebase.

He underscores that such solutions deliver smaller bundles per page, but add complexity in orchestrating which segments update and which remain stable. By preserving state in untouched sections, these hybrid or transitional approaches blur the lines between old-fashioned MPAs and JavaScript-heavy SPAs. The discussion reiterates that the best approach depends on the application’s needs—some might favor minimal scripts, while others rely on robust client caching or a global store.

### 02:42 - 02:48 | Turbo Approaches, Caching, and Edge Deployments

Shifting to the bigger picture, the host notes that Turbo Links, partial HTML swapping, and streaming SSR all integrate well with caching strategies and edge deployments. At the edge, requests can be processed closer to users, reducing latency. By pre-rendering or caching segments of pages, developers can deliver quick responses that combine snappy server navigation with minimal JavaScript. This fosters a middle ground where large frameworks are not always needed for fluid interactions.

He also mentions ongoing work in frameworks like Solid Start, which increasingly target edge runtimes, reinforcing that new lines of code can detect and adapt to various environments. Thanks to standard protocols, the difference between a local node server, serverless functions, or an edge worker is shrinking. Each environment’s capabilities—like streaming or specialized caching—shape how effectively these new partial-hydration and routing strategies perform. It’s a rapidly changing scene, with frameworks racing to adopt every optimization that modern hosting provides.

### 02:48 - 02:54 | Transitioning to React Server Components and the Future of Routing

Conversations about transitional routing lead the host to mention React Server Components as an advanced case study. Instead of performing a simple HTML swap or reloading a page, React Server Components can send server-rendered VDOM patches to the client. This allows partial updates in an environment that still resembles an SPA in certain respects. Although the concept is still evolving, it promises a fine-grained approach to preserving client state while letting servers handle large swaths of data or layout generation.

He briefly contrasts this with more classical server routing or a Turbo-like swap, indicating that React Server Components might be the next logical step—if the overhead of shipping React can be reduced. This conversation forms a natural pivot toward “resumable” ideas and smaller bundles. The host hints that, in time, frameworks will refine or unify these patterns, letting developers choose the best approach for each route or component. This sets the tone for concluding remarks and a promise of more detailed hydration discussions later.

### 02:54 - 02:56:24 | Final Thoughts and Next Steps

As the stream winds down, the host thanks Dan for joining and bringing clarity to complex topics, especially around how Solid approaches documentation and broader ecosystem trends. They reflect on how this session laid the groundwork by examining the fundamental interplay of rendering, routing, caching, and network constraints. The host acknowledges there’s far more to cover on hydration—particularly the distinctions between partial hydration, zero hydration, and resumability—and teases a deeper examination in a future installment.

They sign off by reiterating that modern frontend development spans a wide spectrum of choices, from purely static pages to cutting-edge streaming architectures. Through a series of real demos and conceptual diagrams, they’ve shown that neither the “classic” multi-page app nor the “all-in” single-page approach completely owns the future. Instead, flexible solutions tailored to performance goals and user experience are gaining traction. With that, the host closes the session, bidding everyone a great weekend and thanking them for tuning in.