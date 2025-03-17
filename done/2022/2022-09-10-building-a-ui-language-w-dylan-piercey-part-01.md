---
showLink: "https://www.youtube.com/watch?v=W9wfkP21c80"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building a UI Language w/ Dylan Piercey"
description: ""
publishDate: "2022-09-10"
coverImage: "https://i.ytimg.com/vi/W9wfkP21c80/maxresdefault.jpg"
---

## Episode Description

A far-ranging conversation exploring UI language creation, TypeScript integration, partial hydration, and framework performance, spread across more than five hours of technical discussion.

## Episode Summary

This episode begins with a warm welcome and an overview of the topics to come, establishing a friendly yet deeply technical tone. The conversation examines advanced concepts in JavaScript frameworks, focusing on building a language for UI development and exploring TypeScript integration. Along the way, the speakers discuss hydration, reactivity, and the historical context behind certain design decisions. They compare different frameworks’ approaches to server-side rendering, partial hydration, and performance optimization, sharing anecdotes from real-world production use. As the talk progresses, they highlight the synergy between templating languages, compilers, and bundlers, illustrating how these pieces fit together to create a seamless development experience. Throughout, there is a consistent emphasis on balancing user-friendly syntax, bundling efficiency, and runtime speed, weaving in stories of scaling at enterprise-level demands. By the conclusion, listeners gain a comprehensive understanding of both the why and how behind complex framework and language design decisions.

## Chapters

### 00:00:00 - Introduction and Technical Glitches  

The session kicks off with a friendly greeting and a quick mention of unexpected technical hiccups that slightly delay the start. The speakers acknowledge the quirks of streaming software and different browser compatibilities, then confirm all systems are “go.” This initial segment establishes a casual yet enthusiastic atmosphere, previewing the day’s deep technical dive. There’s also a nod to the steady audience gathering, hinting at the highly specialized subject matter about to unfold.

During this timeframe, there’s light banter about daily life and streaming schedules, which segues neatly into setting up the conversation’s tone. Although the technology mishaps introduce a minor inconvenience, they highlight the real-world conditions under which developers often operate. Listeners get a sense of the speaker’s excitement to discuss cutting-edge UI development topics, including partial hydration and advanced compiler techniques. By the end of these few minutes, the stage is set for a long, in-depth exploration of modern JavaScript framework design.

### 00:06:00 - Stream Goals and Community Engagement  

As more viewers trickle into the broadcast, the hosts outline their streaming goals: regular, in-depth explorations of complex web development themes. They express gratitude for the audience’s patience and share enthusiasm for building a consistent schedule, mentioning the possibility of platform affiliate status. This section underscores the importance of community input and interaction, suggesting that advanced topics may not attract the largest audience but provide irreplaceable technical insights for those who join.

Community support and questions fuel the momentum, as participants briefly bring up past episodes and highlight the breadth of subjects previously covered—from novel React patterns to next-generation frameworks. The hosts emphasize that while this stream might be very specialized, it offers a unique depth not easily found elsewhere. Threads about weather, personal routines, and off-topic chatter maintain a friendly vibe before funneling neatly back into the main subject matter: deep technical discussions that require dedicated focus.

### 00:12:00 - Introduction to Marco and Language Philosophy  

Shifting gears, the conversation zeroes in on the Marco framework, describing it as a “language” rather than a traditional library. The speakers outline the historical context: Marco predates many contemporary solutions yet remains underrecognized. They note how the language-based approach confers significant advantages, such as more precise compiler optimizations and performance gains, while acknowledging the substantial tooling overhead that comes with designing a custom syntax. The hosts position Marco within a lineage that includes Elm, Imba, and Svelte, each grappling with the tension between compilation and runtime.

This segment also clarifies the philosophical aims behind Marco’s design choices. By treating HTML as the starting point and JavaScript as a second-layer extension, Marco aspires to unify server-side and client-side rendering under a single, coherent model. The conversation contrasts this method with other frameworks that retrofit HTML or JavaScript for their own ends, sometimes leading to unnatural abstractions. Listeners gain a basic appreciation for why a custom language can unlock features like partial hydration and streaming, foreshadowing the more intricate details to follow.

### 00:18:00 - Differences from Svelte and React  

Continuing the exploration of Marco’s identity, the hosts compare it to Svelte, noting both share a compilation emphasis. Yet they highlight fundamental distinctions: Marco thoroughly embraces HTML templates, while Svelte seeks to remain “close to JavaScript” in a more minimal sense. The discussion then shifts to React, underscoring how React’s “hooks as language” approach contrasts with Marco’s genuine language-level expansions. Examples of references to “scope slots,” event handling, and how attributes are processed illustrate these conceptual divides.

Despite these differences, the speakers also recognize shared inspirations, drawing parallel lines between frameworks that push compilation boundaries. Marco, for instance, introduced partial hydration and streaming years before they became trendy, yet found its innovations overshadowed by larger community ecosystems. This segment underlines the nuanced interplay between ergonomics, performance, and the potential friction of adopting novel syntax. There’s an overarching theme that integrating new language features is most powerful—and complicated—when it shifts established mental models.

### 00:24:00 - Historical Context and Predecessors  

The speakers delve into Marco’s early history at eBay, explaining how it addressed performance issues faced by massive-scale applications before partial hydration was widely understood. They emphasize that Marco’s earliest versions already contained “widgets” or islands, well ahead of the modern mainstream. References to older frameworks like Knockout and historical constraints on SSR highlight a continuing cycle of innovation, adoption, and reinvention in the JavaScript ecosystem.

While these ideas may seem novel today, they point out that frameworks like Marco had been solving similar challenges under less fashionable terminology. The conversation underscores the importance of continuity—how earlier solutions pave the way for the advanced capabilities developers now take for granted. This retrospective also sets the stage for understanding exactly why building a truly language-level framework, with sophisticated compilation and partial hydration, can pay off for large organizations where even minor performance gains yield major cost savings.

### 00:30:00 - Zero JavaScript by Default and Early Marco Innovations  

One standout feature the hosts mention is Marco’s approach to “zero JavaScript by default,” marking it as an early pioneer. They discuss how in 2014 or 2015, Marco was capable of segmenting code into discrete islands, sparing unneeded scripts from shipping to the browser. This forced eBay’s massive site to adopt a performance-first mindset, defying the era’s norms of shipping entire frameworks client-side. The complexity of balancing server streaming, partial hydration, and dynamic interaction emerges as a key conversation point.

They also stress that these capabilities involved rewriting or deeply modifying the language, enabling features like out-of-order streaming and improved page load times well before the current hype cycle. There’s an admiring look at how such an approach can dramatically reduce overhead, but with the caveat that it introduces steep learning curves for both maintainers and developers. The hosts hint that understanding these advanced server-driven patterns often requires a mental shift, making it a challenge to promote widely outside eBay’s environment.

### 00:36:00 - DSLs, Ergonomics, and Paradigm Shift  

The conversation transitions to domain-specific languages (DSLs) and how they can revolutionize UI development. The speakers defend the notion of “less code” while clarifying that DSLs aren’t merely about brevity. They underscore how a well-designed DSL can encode best practices and patterns that a generic language might leave ambiguous. Recalling the jump from manual promises to async/await in JavaScript, they argue DSLs can effect a similar transformation, streamlining error handling, loops, and concurrency.

However, the speakers acknowledge DSL design can become a double-edged sword. A poorly chosen syntax might encourage anti-patterns just as easily as a strong DSL can discourage them. They note that Svelte, for instance, modifies JavaScript semantics in ways that can feel surprising, whereas Marco aims to remain as close to valid HTML and standard JavaScript as possible. This design priority not only promotes clarity but also paves the way for powerful compiler-driven optimizations.

### 00:42:00 - Differentiating from Svelte and CoffeeScript Reflections  

Here, the speakers pause to compare Marco’s strategies against Svelte’s “closest to JavaScript” approach. They explore how Svelte redefines certain constructs, such as “export let,” which modifies JavaScript expectations. In contrast, Marco isolates advanced behaviors, giving them unique syntax without repurposing JS keywords. The conversation further touches on the ephemeral rise and fall of CoffeeScript, acknowledging how succinct syntax can empower but also mislead, if it introduces confusion or hidden pitfalls.

They revisit how both Svelte and Marco compile down to optimized JavaScript, though with markedly different philosophies. This sparks a broader reflection on community adoption patterns: simpler syntaxes often gain initial traction, but might later reveal deeper complexities. The mention of CoffeeScript highlights how language shifts can produce a generation of code that’s elegant to read but tricky to maintain. With Marco, they aim to reduce code without losing clarity, placing intentional language boundaries between HTML, reactivity, and JavaScript logic.

### 00:48:00 - Language Extensions versus JSX Limitations  

Within this segment, the conversation pinpoints JSX’s constraints, especially around passing dynamic data and handling complex logic inline. Marco addresses these with attributes that can seamlessly incorporate expressions, booleans, and spreads without requiring curly braces. They illustrate how a language fully aware of HTML can fluidly handle scenario-specific features like boolean attributes, dynamic tag names, and unescaped HTML blocks—all in ways that would be awkward or verbose in JSX.

The talk emphasizes that many developers remain unaware of simpler alternatives because JSX, by virtue of React’s popularity, has become the default. Yet the integration of, for instance, dynamic tags in Marco—where you can inline reactivity or pass entire subtemplates—demonstrates the potential of a specialized syntax. In giving these examples, the hosts stress that “less code” is less about saving keystrokes and more about opening up advanced usage patterns in a clean, maintainable manner.

### 00:54:00 - Shorthand and Scoping in Marco  

Discussing syntax convenience further, the speakers highlight Marco’s shorthand forms for event handlers and class declarations, reminiscent of Jade or pug. While they acknowledge that superficial brevity can be polarizing, the conversation clarifies that Marco’s approaches unify into a consistent language grammar. This consistency allows seamless partial hydration, because the compiler can interpret and optimize entire sections of code without guesswork.

They also focus on scoping features that let developers declare inline JavaScript anywhere in the template. These aspects enable more co-located logic, making it easy to read and refactor large codebases. Instead of forcing top-level declarations for all logic, Marco grants the option to create state or run effects at lower points in the tree. This approach fosters a more declarative style, wherein UI blocks and relevant computations remain tightly coupled and straightforward to move or extract into standalone components.

### 01:00:00 - Fine-Grained State in Marco and Solid Comparisons  

Listeners hear the speakers pivot to a deeper exploration of fine-grained state management. They articulate how Marco supports local reactivity right inside the template, a pattern also known in Solid, which stands in contrast to React’s top-down re-render approach. By integrating logic and JSX-like markup, frameworks such as Solid and Marco enable a co-location pattern that simplifies nested states and side effects.

The conversation draws explicit parallels between Marco’s inline state creation and Solid’s ability to define signals anywhere in the component tree. Both approaches allow for partial updates rather than re-rendering entire component hierarchies. The key advantage here is that local state or effects can be scoped precisely where they’re needed, fostering clarity and cutting down on boilerplate. This sets the groundwork for future sections highlighting how compilers can exploit these meticulously scoped definitions for advanced optimizations.

### 01:06:00 - Refactoring and Nesting Effects  

In this timeframe, the speakers emphasize how frameworks supporting nested effects let developers restructure code naturally. Instead of hooking global or top-level states that must be passed down through props, developers can place an effect tag or a local state exactly at the relevant node. This architecture simplifies cleanup logic and fosters modular design. Real-world examples include dynamic visibility toggles or widget initializations that are only valid when a particular section is rendered.

They also highlight that these frameworks—particularly those with robust reactivity models—afford an almost “component within a component” philosophy without artificially splitting files or introducing extra overhead. By demonstrating how easily code can be moved or re-scoped, the hosts illustrate a kind of organic composability. Once developers grasp this pattern, they often find themselves writing more maintainable code with fewer choke points, a benefit that simpler or more rigid systems can’t always match.

### 01:12:00 - Dynamic Tags, Scopes, and Partial Hydration  

Listeners then hear more about dynamic tags, a standout Marco feature for cleanly rendering different element types or subcomponents at runtime. Unlike frameworks that demand special syntax or elaborate conditionals, Marco’s approach allows direct interpolation within the tag name. The talk underscores that this technique is not just about convenience but also about letting the compiler skip static segments of a template when hydrating.

They circle back to partial hydration, underscoring that granular knowledge of which variables change is critical to send minimal JavaScript. Thanks to dynamic scoping, only the relevant state, event handlers, or side effects must appear in the browser bundle. This conversation frames partial hydration as a structural advantage unlocked by a language-level approach. The segment ends with a reflection on how these ideas push beyond manual code-splitting, letting the compiler automate transformations for maximum efficiency.

### 01:18:00 - Marco’s Approach to Import and Export  

Here, the discussion lands on how Marco handles module import and export statements. Unlike frameworks that wrap or rename them, Marco keeps the standard JavaScript syntax. The hosts note this approach maintains familiarity while still hooking into the underlying compiler logic. Other frameworks often blur the line between language-level features and framework-specific constructs, risking confusion.

By retaining standard module semantics, Marco ensures that server bundlers, IDEs, and developer tooling remain compatible. Additionally, the conversation highlights how this interplay helps tie in TypeScript or third-party libraries without requiring specialized bridging code. The big takeaway is that while Marco customizes the template language, it keeps JavaScript modules predictable, alleviating friction for those adopting or migrating large codebases. This design choice fosters a sense of balance between a purpose-built DSL and mainstream JavaScript norms.

### 01:24:00 - Let Tag and Reactive Variables  

Turning focus to reactive variables, the speakers detail Marco’s “let” tag. This element introduces signals in the template, tracking state changes similarly to hooks or signals in other libraries. By using a distinctive tag rather than an altered JavaScript keyword, Marco ensures that developers instinctively know they’re dealing with reactive data. The conversation compares this to Svelte’s “export let,” emphasizing Marco’s explicit approach to scoping reactivity.

The group delves into how straightforward assignments—like `showClass = !showClass`—can trigger reactive updates without extra function calls, reflecting an overall philosophy of minimal boilerplate. This direct assignment stands apart from more traditional React or Svelte patterns, demonstrating the power of compilation. Yet the hosts remind listeners that adopting such features requires tooling that can interpret these specialized tags, reifying the notion that a language-first framework can do more sophisticated code analysis than a library pinned to pure JavaScript.

### 01:30:00 - The Complexity of Automating Islands and DSL Power  

Here, the panel reiterates how a language-level approach lets developers author code with zero explicit instruction for partial hydration. Marco automatically identifies dynamic regions (“islands”) by analyzing where reactive state or event handlers live. The compiled output ensures each interactive portion ships only essential runtime logic. The discussion reflects on how other frameworks require manually splitting code or toggling advanced bundler settings to achieve partial hydration, complicating developer workflows.

In deeper terms, the speakers describe how DSL design can treat entire segments of HTML as static, effectively ignoring them in the client bundle. By leaning on semantic markup and specialized tags, the compiler obtains a full picture of the code’s reactive boundaries. This approach underscores how language-level design is not solely about saving keystrokes; it’s about enabling the framework to interpret the structure in ways that typical JavaScript libraries can’t. Listeners begin to see the synergy between advanced language constructs and large-scale performance advantages.

### 01:36:00 - Reflecting on Reactivity and Signals  

At this point, the hosts acknowledge a broader shift toward signals and reactivity across the JavaScript landscape. They reference Quick, Svelte, and Solid, pointing out that each has tackled hydration or reactivity differently. Marco’s long history with partial hydration offers insights into why fine-grained updates can be preferable to re-rendering entire trees. For many years, eBay used these patterns to optimize real-world, high-traffic apps.

They also remark on how reactivity can simplify SSR transitions. Instead of shipping large scripts that rehydrate entire pages, signals let frameworks isolate which components actually require interactive updates. More than a performance trick, it changes how developers think about state, encouraging smaller, more composable sections. This reflection clarifies why so many modern frameworks are converging on similar ideas, albeit via different syntaxes or underlying runtime strategies.

### 01:42:00 - Marco 6 Language Design and Cross-Module Reactivity  

Shifting the focus to Marco 6’s future, the speakers explain how its new language design aims to break reactivity across file boundaries. They discuss how frameworks like Svelte or Vue often limit reactivity to a single file or component instance, whereas Marco invests in cross-file analysis. This approach enables an application-wide perspective on what code remains static and what changes dynamically, culminating in impressively granular hydration.

They reveal that the compiler’s capacity to interpret reactivity across separate modules has profound implications for tree-shaking and code splitting. The conversation hints that, in Marco 6, if a piece of logic never gets called on the client side, it’s excluded entirely. This leads to a powerful synergy where developers write normal code, but the compiler understands the entire dependency graph at the variable or function level. Though intricate to implement, it promises an unprecedented level of optimization for large-scale projects.

### 01:48:00 - Comparing Quick and Resumability Concepts  

During this interval, the hosts address another new wave in framework design: resumability. They reference Quick’s novel approach, which tries to freeze application state on the server, then “wake it up” on the client without a full rehydration pass. The conversation clarifies that Marco’s system, though different, similarly seeks to avoid re-running the server’s logic in the browser. Both aim to reduce JavaScript overhead, but their methods differ in compiler requirements and how they treat reactive boundaries.

They muse on the mental model behind resumability: effectively shifting more of the workload to the server. Meanwhile, the client only receives minimal code for interactions. The potential trade-off, they note, is complexity in how memory or asynchronous tasks carry over. While praising Quick’s bold ideas, the speakers remain confident that Marco’s established partial hydration—coupled with granular reactivity—achieves overlapping benefits. Listeners gain a sense of how these frameworks’ differing paths converge on the common goal of minimal client execution.

### 01:54:00 - DX, Performance, and Large-Scale Production Insights  

Attention turns to the importance of developer experience (DX). The speakers recall how eBay’s performance team demanded near-instant SSR and minimal client-side JavaScript, pushing the Marco team to innovate. They underscore that in massive e-commerce websites, saving even a few kilobytes can translate into millions in cost savings or revenue. From streaming to cross-file reactivity, every small gain can matter at scale.

Yet improved performance must not sacrifice usability. They reveal that Marco invests in supportive language tooling so developers aren’t inundated by manual optimizations. The conversation references times when teams reflexively blame the framework if a performance metric slips, spurring the Marco maintainers to refine the underlying compiler. This interplay of dev constraints and real-world usage molded Marco’s language, ensuring that advanced partial hydration doesn’t become an unwieldy chore for day-to-day engineering tasks.

### 02:00:00 - Insights from Solid and React Interactions  

A quick pivot highlights the synergy between Solid’s reactivity research and Marco’s partial hydration journey. The hosts recount how discussions around signal-based updates and the overhead of components influenced new compiler strategies. Even though Solid aims for minimal overhead, the parallels in fine-grained reactivity gave Marco’s team a blueprint for simplifying client bundles. The two frameworks may have different emphases but share a deep respect for the power of granular updates.

React also enters the picture: the duo marvels at how some React developers initially dismissed SSR or partial hydration as niche or unnecessary. This changed once performance budgets became strict, revealing that even a globally recognized framework might eventually adopt ideas once seen as esoteric. The speakers hint that the lines between recognized mainstream solutions and specialized compilers are increasingly blurred, with many modern frameworks openly adopting or experimenting with each other’s concepts.

### 02:06:00 - Edge Deployments and Server Streaming  

This chapter explores edge computing’s impact on MPA (multi-page app) performance. By running servers closer to end users, frameworks like Marco can deliver SSR content at lightning speed. This synergy pairs well with streaming, enabling the “shell” of a page to appear almost instantly, even if data fetching or partial hydration finishes asynchronously. The result is a more fluid experience that narrows the perceived gap between MPAs and SPAs.

They highlight that eBay’s streaming approach, dating back years, aligns naturally with edge deployments, ensuring shoppers don’t stare at blank screens while waiting for server responses. By chunking output and letting the browser render partial HTML on arrival, sites achieve a SPA-like smoothness without shipping the entire client framework. It’s a fresh reminder that a well-tuned MPA plus streaming can approximate or surpass modern single-page frameworks in user experience, especially at scale.

### 02:12:00 - Community Adoption, Challenges, and Outlook  

In this window, the hosts candidly discuss why Marco didn’t reach broader popularity despite pioneering so many advanced features. They credit the rise of React’s ecosystem, the complexity of building specialized tooling, and limited eBay-centric marketing. Nevertheless, they note renewed interest in partial hydration has spurred fresh community engagement. As other frameworks adopt or rediscover these concepts, interest in Marco’s approach seems poised to grow.

They reflect on the difficulties of championing a multi-layered solution—especially one that embraces a custom DSL, server streaming, and a compilation pipeline. Many developers, they concede, favor drop-in solutions, even if it results in more JavaScript. As partial hydration and advanced SSR become buzzwords, the narrative may shift. They end on an optimistic note, envisioning a future in which Marco’s time-tested solutions finally resonate with a broader user base.

### 02:18:00 - Language Tooling Deep Dive Begins  

With the general conceptual groundwork laid, the conversation now pivots to the gritty details of building out language tooling. The hosts mention the variety of tools needed—parsers, compilers, bundlers, language servers, and formatters—each requiring intricate custom code for a DSL-based approach. They contrast this with a React or Vue ecosystem that largely relies on established off-the-shelf solutions, reinforcing that a custom language demands extraordinary engineering investment.

They note that everything from syntax highlighting to advanced IDE features must be handcrafted to properly interpret Marco’s template tags. The audience hears how internal complexities multiply when a language must parse HTML segments, inline JavaScript, and CSS, then unify them under a single syntax tree. This marks a stark departure from simpler frameworks that bolt on scripting logic. The group plans to outline exactly how these systems communicate and compile code in the upcoming segments.

### 02:24:00 - Parsing and Custom Grammar for Marco  

Listeners are taken through the initial stage: parsing. The speakers describe how they wrote a specialized HTML-JS parser that handles both markup and embedded JavaScript expressions. They explain that standard HTML parsers often break when encountering advanced constructs like dynamic tag interpolation, prompting the need for a more flexible solution. This parser doesn’t finalize an AST; it first generates a series of events, which higher-level logic can then interpret for either text, attributes, or placeholders.

They emphasize that a conventional approach might treat JavaScript as a black box within `<script>` tags, but Marco’s inline reactivity demands deeper integration. It’s vital to recognize the boundaries between template expressions and plain text accurately. The conversation highlights that these complexities only mount when considering transformations for TypeScript or minifiers. Despite the challenges, they maintain that a custom parser underlies many of Marco’s signature optimizations, allowing static analysis that a standard parser would never attempt.