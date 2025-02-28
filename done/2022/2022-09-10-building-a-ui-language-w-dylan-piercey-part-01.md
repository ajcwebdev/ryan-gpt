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

### 00:00:00 - 00:06:00 Introduction and Technical Glitches  

The session kicks off with a friendly greeting and a quick mention of unexpected technical hiccups that slightly delay the start. The speakers acknowledge the quirks of streaming software and different browser compatibilities, then confirm all systems are “go.” This initial segment establishes a casual yet enthusiastic atmosphere, previewing the day’s deep technical dive. There’s also a nod to the steady audience gathering, hinting at the highly specialized subject matter about to unfold.

During this timeframe, there’s light banter about daily life and streaming schedules, which segues neatly into setting up the conversation’s tone. Although the technology mishaps introduce a minor inconvenience, they highlight the real-world conditions under which developers often operate. Listeners get a sense of the speaker’s excitement to discuss cutting-edge UI development topics, including partial hydration and advanced compiler techniques. By the end of these few minutes, the stage is set for a long, in-depth exploration of modern JavaScript framework design.

### 00:06:00 - 00:12:00 Stream Goals and Community Engagement  

As more viewers trickle into the broadcast, the hosts outline their streaming goals: regular, in-depth explorations of complex web development themes. They express gratitude for the audience’s patience and share enthusiasm for building a consistent schedule, mentioning the possibility of platform affiliate status. This section underscores the importance of community input and interaction, suggesting that advanced topics may not attract the largest audience but provide irreplaceable technical insights for those who join.

Community support and questions fuel the momentum, as participants briefly bring up past episodes and highlight the breadth of subjects previously covered—from novel React patterns to next-generation frameworks. The hosts emphasize that while this stream might be very specialized, it offers a unique depth not easily found elsewhere. Threads about weather, personal routines, and off-topic chatter maintain a friendly vibe before funneling neatly back into the main subject matter: deep technical discussions that require dedicated focus.

### 00:12:00 - 00:18:00 Introduction to Marco and Language Philosophy  

Shifting gears, the conversation zeroes in on the Marco framework, describing it as a “language” rather than a traditional library. The speakers outline the historical context: Marco predates many contemporary solutions yet remains underrecognized. They note how the language-based approach confers significant advantages, such as more precise compiler optimizations and performance gains, while acknowledging the substantial tooling overhead that comes with designing a custom syntax. The hosts position Marco within a lineage that includes Elm, Imba, and Svelte, each grappling with the tension between compilation and runtime.

This segment also clarifies the philosophical aims behind Marco’s design choices. By treating HTML as the starting point and JavaScript as a second-layer extension, Marco aspires to unify server-side and client-side rendering under a single, coherent model. The conversation contrasts this method with other frameworks that retrofit HTML or JavaScript for their own ends, sometimes leading to unnatural abstractions. Listeners gain a basic appreciation for why a custom language can unlock features like partial hydration and streaming, foreshadowing the more intricate details to follow.

### 00:18:00 - 00:24:00 Differences from Svelte and React  

Continuing the exploration of Marco’s identity, the hosts compare it to Svelte, noting both share a compilation emphasis. Yet they highlight fundamental distinctions: Marco thoroughly embraces HTML templates, while Svelte seeks to remain “close to JavaScript” in a more minimal sense. The discussion then shifts to React, underscoring how React’s “hooks as language” approach contrasts with Marco’s genuine language-level expansions. Examples of references to “scope slots,” event handling, and how attributes are processed illustrate these conceptual divides.

Despite these differences, the speakers also recognize shared inspirations, drawing parallel lines between frameworks that push compilation boundaries. Marco, for instance, introduced partial hydration and streaming years before they became trendy, yet found its innovations overshadowed by larger community ecosystems. This segment underlines the nuanced interplay between ergonomics, performance, and the potential friction of adopting novel syntax. There’s an overarching theme that integrating new language features is most powerful—and complicated—when it shifts established mental models.

### 00:24:00 - 00:30:00 Historical Context and Predecessors  

The speakers delve into Marco’s early history at eBay, explaining how it addressed performance issues faced by massive-scale applications before partial hydration was widely understood. They emphasize that Marco’s earliest versions already contained “widgets” or islands, well ahead of the modern mainstream. References to older frameworks like Knockout and historical constraints on SSR highlight a continuing cycle of innovation, adoption, and reinvention in the JavaScript ecosystem.

While these ideas may seem novel today, they point out that frameworks like Marco had been solving similar challenges under less fashionable terminology. The conversation underscores the importance of continuity—how earlier solutions pave the way for the advanced capabilities developers now take for granted. This retrospective also sets the stage for understanding exactly why building a truly language-level framework, with sophisticated compilation and partial hydration, can pay off for large organizations where even minor performance gains yield major cost savings.

### 00:30:00 - 00:36:00 Zero JavaScript by Default and Early Marco Innovations  

One standout feature the hosts mention is Marco’s approach to “zero JavaScript by default,” marking it as an early pioneer. They discuss how in 2014 or 2015, Marco was capable of segmenting code into discrete islands, sparing unneeded scripts from shipping to the browser. This forced eBay’s massive site to adopt a performance-first mindset, defying the era’s norms of shipping entire frameworks client-side. The complexity of balancing server streaming, partial hydration, and dynamic interaction emerges as a key conversation point.

They also stress that these capabilities involved rewriting or deeply modifying the language, enabling features like out-of-order streaming and improved page load times well before the current hype cycle. There’s an admiring look at how such an approach can dramatically reduce overhead, but with the caveat that it introduces steep learning curves for both maintainers and developers. The hosts hint that understanding these advanced server-driven patterns often requires a mental shift, making it a challenge to promote widely outside eBay’s environment.

### 00:36:00 - 00:42:00 DSLs, Ergonomics, and Paradigm Shift  

The conversation transitions to domain-specific languages (DSLs) and how they can revolutionize UI development. The speakers defend the notion of “less code” while clarifying that DSLs aren’t merely about brevity. They underscore how a well-designed DSL can encode best practices and patterns that a generic language might leave ambiguous. Recalling the jump from manual promises to async/await in JavaScript, they argue DSLs can effect a similar transformation, streamlining error handling, loops, and concurrency.

However, the speakers acknowledge DSL design can become a double-edged sword. A poorly chosen syntax might encourage anti-patterns just as easily as a strong DSL can discourage them. They note that Svelte, for instance, modifies JavaScript semantics in ways that can feel surprising, whereas Marco aims to remain as close to valid HTML and standard JavaScript as possible. This design priority not only promotes clarity but also paves the way for powerful compiler-driven optimizations.

### 00:42:00 - 00:48:00 Differentiating from Svelte and CoffeeScript Reflections  

Here, the speakers pause to compare Marco’s strategies against Svelte’s “closest to JavaScript” approach. They explore how Svelte redefines certain constructs, such as “export let,” which modifies JavaScript expectations. In contrast, Marco isolates advanced behaviors, giving them unique syntax without repurposing JS keywords. The conversation further touches on the ephemeral rise and fall of CoffeeScript, acknowledging how succinct syntax can empower but also mislead, if it introduces confusion or hidden pitfalls.

They revisit how both Svelte and Marco compile down to optimized JavaScript, though with markedly different philosophies. This sparks a broader reflection on community adoption patterns: simpler syntaxes often gain initial traction, but might later reveal deeper complexities. The mention of CoffeeScript highlights how language shifts can produce a generation of code that’s elegant to read but tricky to maintain. With Marco, they aim to reduce code without losing clarity, placing intentional language boundaries between HTML, reactivity, and JavaScript logic.

### 00:48:00 - 00:54:00 Language Extensions versus JSX Limitations  

Within this segment, the conversation pinpoints JSX’s constraints, especially around passing dynamic data and handling complex logic inline. Marco addresses these with attributes that can seamlessly incorporate expressions, booleans, and spreads without requiring curly braces. They illustrate how a language fully aware of HTML can fluidly handle scenario-specific features like boolean attributes, dynamic tag names, and unescaped HTML blocks—all in ways that would be awkward or verbose in JSX.

The talk emphasizes that many developers remain unaware of simpler alternatives because JSX, by virtue of React’s popularity, has become the default. Yet the integration of, for instance, dynamic tags in Marco—where you can inline reactivity or pass entire subtemplates—demonstrates the potential of a specialized syntax. In giving these examples, the hosts stress that “less code” is less about saving keystrokes and more about opening up advanced usage patterns in a clean, maintainable manner.

### 00:54:00 - 01:00:00 Shorthand and Scoping in Marco  

Discussing syntax convenience further, the speakers highlight Marco’s shorthand forms for event handlers and class declarations, reminiscent of Jade or pug. While they acknowledge that superficial brevity can be polarizing, the conversation clarifies that Marco’s approaches unify into a consistent language grammar. This consistency allows seamless partial hydration, because the compiler can interpret and optimize entire sections of code without guesswork.

They also focus on scoping features that let developers declare inline JavaScript anywhere in the template. These aspects enable more co-located logic, making it easy to read and refactor large codebases. Instead of forcing top-level declarations for all logic, Marco grants the option to create state or run effects at lower points in the tree. This approach fosters a more declarative style, wherein UI blocks and relevant computations remain tightly coupled and straightforward to move or extract into standalone components.

### 01:00:00 - 01:06:00 Fine-Grained State in Marco and Solid Comparisons  

Listeners hear the speakers pivot to a deeper exploration of fine-grained state management. They articulate how Marco supports local reactivity right inside the template, a pattern also known in Solid, which stands in contrast to React’s top-down re-render approach. By integrating logic and JSX-like markup, frameworks such as Solid and Marco enable a co-location pattern that simplifies nested states and side effects.

The conversation draws explicit parallels between Marco’s inline state creation and Solid’s ability to define signals anywhere in the component tree. Both approaches allow for partial updates rather than re-rendering entire component hierarchies. The key advantage here is that local state or effects can be scoped precisely where they’re needed, fostering clarity and cutting down on boilerplate. This sets the groundwork for future sections highlighting how compilers can exploit these meticulously scoped definitions for advanced optimizations.

### 01:06:00 - 01:12:00 Refactoring and Nesting Effects  

In this timeframe, the speakers emphasize how frameworks supporting nested effects let developers restructure code naturally. Instead of hooking global or top-level states that must be passed down through props, developers can place an effect tag or a local state exactly at the relevant node. This architecture simplifies cleanup logic and fosters modular design. Real-world examples include dynamic visibility toggles or widget initializations that are only valid when a particular section is rendered.

They also highlight that these frameworks—particularly those with robust reactivity models—afford an almost “component within a component” philosophy without artificially splitting files or introducing extra overhead. By demonstrating how easily code can be moved or re-scoped, the hosts illustrate a kind of organic composability. Once developers grasp this pattern, they often find themselves writing more maintainable code with fewer choke points, a benefit that simpler or more rigid systems can’t always match.

### 01:12:00 - 01:18:00 Dynamic Tags, Scopes, and Partial Hydration  

Listeners then hear more about dynamic tags, a standout Marco feature for cleanly rendering different element types or subcomponents at runtime. Unlike frameworks that demand special syntax or elaborate conditionals, Marco’s approach allows direct interpolation within the tag name. The talk underscores that this technique is not just about convenience but also about letting the compiler skip static segments of a template when hydrating.

They circle back to partial hydration, underscoring that granular knowledge of which variables change is critical to send minimal JavaScript. Thanks to dynamic scoping, only the relevant state, event handlers, or side effects must appear in the browser bundle. This conversation frames partial hydration as a structural advantage unlocked by a language-level approach. The segment ends with a reflection on how these ideas push beyond manual code-splitting, letting the compiler automate transformations for maximum efficiency.

### 01:18:00 - 01:24:00 Marco’s Approach to Import and Export  

Here, the discussion lands on how Marco handles module import and export statements. Unlike frameworks that wrap or rename them, Marco keeps the standard JavaScript syntax. The hosts note this approach maintains familiarity while still hooking into the underlying compiler logic. Other frameworks often blur the line between language-level features and framework-specific constructs, risking confusion.

By retaining standard module semantics, Marco ensures that server bundlers, IDEs, and developer tooling remain compatible. Additionally, the conversation highlights how this interplay helps tie in TypeScript or third-party libraries without requiring specialized bridging code. The big takeaway is that while Marco customizes the template language, it keeps JavaScript modules predictable, alleviating friction for those adopting or migrating large codebases. This design choice fosters a sense of balance between a purpose-built DSL and mainstream JavaScript norms.

### 01:24:00 - 01:30:00 Let Tag and Reactive Variables  

Turning focus to reactive variables, the speakers detail Marco’s “let” tag. This element introduces signals in the template, tracking state changes similarly to hooks or signals in other libraries. By using a distinctive tag rather than an altered JavaScript keyword, Marco ensures that developers instinctively know they’re dealing with reactive data. The conversation compares this to Svelte’s “export let,” emphasizing Marco’s explicit approach to scoping reactivity.

The group delves into how straightforward assignments—like `showClass = !showClass`—can trigger reactive updates without extra function calls, reflecting an overall philosophy of minimal boilerplate. This direct assignment stands apart from more traditional React or Svelte patterns, demonstrating the power of compilation. Yet the hosts remind listeners that adopting such features requires tooling that can interpret these specialized tags, reifying the notion that a language-first framework can do more sophisticated code analysis than a library pinned to pure JavaScript.

### 01:30:00 - 01:36:00 The Complexity of Automating Islands and DSL Power  

Here, the panel reiterates how a language-level approach lets developers author code with zero explicit instruction for partial hydration. Marco automatically identifies dynamic regions (“islands”) by analyzing where reactive state or event handlers live. The compiled output ensures each interactive portion ships only essential runtime logic. The discussion reflects on how other frameworks require manually splitting code or toggling advanced bundler settings to achieve partial hydration, complicating developer workflows.

In deeper terms, the speakers describe how DSL design can treat entire segments of HTML as static, effectively ignoring them in the client bundle. By leaning on semantic markup and specialized tags, the compiler obtains a full picture of the code’s reactive boundaries. This approach underscores how language-level design is not solely about saving keystrokes; it’s about enabling the framework to interpret the structure in ways that typical JavaScript libraries can’t. Listeners begin to see the synergy between advanced language constructs and large-scale performance advantages.

### 01:36:00 - 01:42:00 Reflecting on Reactivity and Signals  

At this point, the hosts acknowledge a broader shift toward signals and reactivity across the JavaScript landscape. They reference Quick, Svelte, and Solid, pointing out that each has tackled hydration or reactivity differently. Marco’s long history with partial hydration offers insights into why fine-grained updates can be preferable to re-rendering entire trees. For many years, eBay used these patterns to optimize real-world, high-traffic apps.

They also remark on how reactivity can simplify SSR transitions. Instead of shipping large scripts that rehydrate entire pages, signals let frameworks isolate which components actually require interactive updates. More than a performance trick, it changes how developers think about state, encouraging smaller, more composable sections. This reflection clarifies why so many modern frameworks are converging on similar ideas, albeit via different syntaxes or underlying runtime strategies.

### 01:42:00 - 01:48:00 Marco 6 Language Design and Cross-Module Reactivity  

Shifting the focus to Marco 6’s future, the speakers explain how its new language design aims to break reactivity across file boundaries. They discuss how frameworks like Svelte or Vue often limit reactivity to a single file or component instance, whereas Marco invests in cross-file analysis. This approach enables an application-wide perspective on what code remains static and what changes dynamically, culminating in impressively granular hydration.

They reveal that the compiler’s capacity to interpret reactivity across separate modules has profound implications for tree-shaking and code splitting. The conversation hints that, in Marco 6, if a piece of logic never gets called on the client side, it’s excluded entirely. This leads to a powerful synergy where developers write normal code, but the compiler understands the entire dependency graph at the variable or function level. Though intricate to implement, it promises an unprecedented level of optimization for large-scale projects.

### 01:48:00 - 01:54:00 Comparing Quick and Resumability Concepts  

During this interval, the hosts address another new wave in framework design: resumability. They reference Quick’s novel approach, which tries to freeze application state on the server, then “wake it up” on the client without a full rehydration pass. The conversation clarifies that Marco’s system, though different, similarly seeks to avoid re-running the server’s logic in the browser. Both aim to reduce JavaScript overhead, but their methods differ in compiler requirements and how they treat reactive boundaries.

They muse on the mental model behind resumability: effectively shifting more of the workload to the server. Meanwhile, the client only receives minimal code for interactions. The potential trade-off, they note, is complexity in how memory or asynchronous tasks carry over. While praising Quick’s bold ideas, the speakers remain confident that Marco’s established partial hydration—coupled with granular reactivity—achieves overlapping benefits. Listeners gain a sense of how these frameworks’ differing paths converge on the common goal of minimal client execution.

### 01:54:00 - 02:00:00 DX, Performance, and Large-Scale Production Insights  

Attention turns to the importance of developer experience (DX). The speakers recall how eBay’s performance team demanded near-instant SSR and minimal client-side JavaScript, pushing the Marco team to innovate. They underscore that in massive e-commerce websites, saving even a few kilobytes can translate into millions in cost savings or revenue. From streaming to cross-file reactivity, every small gain can matter at scale.

Yet improved performance must not sacrifice usability. They reveal that Marco invests in supportive language tooling so developers aren’t inundated by manual optimizations. The conversation references times when teams reflexively blame the framework if a performance metric slips, spurring the Marco maintainers to refine the underlying compiler. This interplay of dev constraints and real-world usage molded Marco’s language, ensuring that advanced partial hydration doesn’t become an unwieldy chore for day-to-day engineering tasks.

### 02:00:00 - 02:06:00 Insights from Solid and React Interactions  

A quick pivot highlights the synergy between Solid’s reactivity research and Marco’s partial hydration journey. The hosts recount how discussions around signal-based updates and the overhead of components influenced new compiler strategies. Even though Solid aims for minimal overhead, the parallels in fine-grained reactivity gave Marco’s team a blueprint for simplifying client bundles. The two frameworks may have different emphases but share a deep respect for the power of granular updates.

React also enters the picture: the duo marvels at how some React developers initially dismissed SSR or partial hydration as niche or unnecessary. This changed once performance budgets became strict, revealing that even a globally recognized framework might eventually adopt ideas once seen as esoteric. The speakers hint that the lines between recognized mainstream solutions and specialized compilers are increasingly blurred, with many modern frameworks openly adopting or experimenting with each other’s concepts.

### 02:06:00 - 02:12:00 Edge Deployments and Server Streaming  

This chapter explores edge computing’s impact on MPA (multi-page app) performance. By running servers closer to end users, frameworks like Marco can deliver SSR content at lightning speed. This synergy pairs well with streaming, enabling the “shell” of a page to appear almost instantly, even if data fetching or partial hydration finishes asynchronously. The result is a more fluid experience that narrows the perceived gap between MPAs and SPAs.

They highlight that eBay’s streaming approach, dating back years, aligns naturally with edge deployments, ensuring shoppers don’t stare at blank screens while waiting for server responses. By chunking output and letting the browser render partial HTML on arrival, sites achieve a SPA-like smoothness without shipping the entire client framework. It’s a fresh reminder that a well-tuned MPA plus streaming can approximate or surpass modern single-page frameworks in user experience, especially at scale.

### 02:12:00 - 02:18:00 Community Adoption, Challenges, and Outlook  

In this window, the hosts candidly discuss why Marco didn’t reach broader popularity despite pioneering so many advanced features. They credit the rise of React’s ecosystem, the complexity of building specialized tooling, and limited eBay-centric marketing. Nevertheless, they note renewed interest in partial hydration has spurred fresh community engagement. As other frameworks adopt or rediscover these concepts, interest in Marco’s approach seems poised to grow.

They reflect on the difficulties of championing a multi-layered solution—especially one that embraces a custom DSL, server streaming, and a compilation pipeline. Many developers, they concede, favor drop-in solutions, even if it results in more JavaScript. As partial hydration and advanced SSR become buzzwords, the narrative may shift. They end on an optimistic note, envisioning a future in which Marco’s time-tested solutions finally resonate with a broader user base.

### 02:18:00 - 02:24:00 Language Tooling Deep Dive Begins  

With the general conceptual groundwork laid, the conversation now pivots to the gritty details of building out language tooling. The hosts mention the variety of tools needed—parsers, compilers, bundlers, language servers, and formatters—each requiring intricate custom code for a DSL-based approach. They contrast this with a React or Vue ecosystem that largely relies on established off-the-shelf solutions, reinforcing that a custom language demands extraordinary engineering investment.

They note that everything from syntax highlighting to advanced IDE features must be handcrafted to properly interpret Marco’s template tags. The audience hears how internal complexities multiply when a language must parse HTML segments, inline JavaScript, and CSS, then unify them under a single syntax tree. This marks a stark departure from simpler frameworks that bolt on scripting logic. The group plans to outline exactly how these systems communicate and compile code in the upcoming segments.

### 02:24:00 - 02:30:00 Parsing and Custom Grammar for Marco  

Listeners are taken through the initial stage: parsing. The speakers describe how they wrote a specialized HTML-JS parser that handles both markup and embedded JavaScript expressions. They explain that standard HTML parsers often break when encountering advanced constructs like dynamic tag interpolation, prompting the need for a more flexible solution. This parser doesn’t finalize an AST; it first generates a series of events, which higher-level logic can then interpret for either text, attributes, or placeholders.

They emphasize that a conventional approach might treat JavaScript as a black box within `<script>` tags, but Marco’s inline reactivity demands deeper integration. It’s vital to recognize the boundaries between template expressions and plain text accurately. The conversation highlights that these complexities only mount when considering transformations for TypeScript or minifiers. Despite the challenges, they maintain that a custom parser underlies many of Marco’s signature optimizations, allowing static analysis that a standard parser would never attempt.

### 02:30:00 - 02:36:00 CST, AST, and the Marco Language Server  

The discussion delves into how the parsing events become a CST (Concrete Syntax Tree) rather than an AST. This retention of whitespace, comments, and structure suits tooling that must faithfully rewrite code without losing essential formatting or metadata. They contrast this with an AST approach, where extraneous details get stripped away. For robust language tooling—especially code actions, refactoring, or formatting—a CST captures the full textual landscape.

Building on that, they explain the Marco Language Server extends the Language Server Protocol (LSP), common in modern editors. This server processes user code, emits warnings or completions, and merges results from JavaScript or CSS subparsers. Even simple features like auto-complete become complicated when attributes or inlined reactivity don’t map cleanly to “vanilla” HTML or JS structures. The conversation underscores that while the learning curve is steep, the payoff is integrated, framework-aware intelligence at the editor level.

### 02:36:00 - 02:42:00 Multi-Language Approach: CSS, TypeScript, and More  

Explaining how Marco files often embed CSS or less, the speakers outline an orchestrated process: the main parser extracts each language block, generating a virtual document that is passed to the relevant official language service (e.g., the VS Code CSS Language Service). Then they map all the completions or diagnostics back to the correct position in the Marco file. This bridging is particularly vital for styles, so developers enjoy standard CSS tooling like auto-complete and linting.

They illustrate that JavaScript and TypeScript blocks undergo a similar procedure, albeit with more complex transformations. The panel clarifies that while this might sound straightforward in theory, in practice it demands a meticulous source mapping system. Otherwise, any error messages or formatting suggestions from the underlying language service would point to meaningless generated code lines. This multi-language approach is a hallmark of single-file component ecosystems, and Marco’s specialized parser just happens to push those boundaries further than most.

### 02:42:00 - 02:48:00 Handling TypeScript Internals and Merging Source Maps  

Here, the hosts shine a spotlight on TypeScript integration. Unlike CSS or HTML, TypeScript’s advanced type-checking demands deeper insight into code semantics. The conversation reveals how normal TypeScript compilers expect .ts or .tsx files, forcing Marco’s tooling to produce a hidden, transformed code version that TypeScript can read, then map everything back. This stems from the fact that TypeScript lacks robust input source map support, so developers must manually maintain sync.

They note it’s significantly more intricate than just hooking into Babel or another pre-existing tool. Each time TypeScript offers a suggestion or errors out, the system has to locate the corresponding line in the Marco file. Merging source maps from multiple transformations becomes a mini engineering feat. Yet for end users, the end result is crucial: seamless TypeScript completions and refactoring that treat specialized Marco syntax like first-class JavaScript. The speakers compare Svelte’s and Vue’s journeys in forging a similar path, commiserating over the complexity.

### 02:48:00 - 02:54:00 TS Plugins, Monkey-Patching, and Codegen Challenges  

Continuing on TypeScript, they reveal that some integrations involve monkey-patching the TS compiler to let Marco files act as official inputs. This can be fragile, as changes in TS internals might break the plugin layer. The conversation references Vue’s Volar or Vetur, which similarly grapple with hacking the compiler to support single-file components. They concede it’s a less-than-ideal approach but see no immediate alternative until TypeScript natively supports more advanced extension points.

Additionally, they describe generating real TS code behind the scenes—code that might include artificial wrappers or placeholders. For instance, it might output function calls or block expressions to replicate dynamic scoping. They underscore the necessity of filtering out spurious TypeScript errors that appear in “code” the user never wrote. Although unwieldy, this method maintains a “just works” user experience. The panel jokes that rewriting TypeScript itself would be even more monumental than designing a new language.

### 02:54:00 - 03:00:00 Prettier Integration and Formatting Mechanics  

Attention shifts to Prettier, the popular code formatter. They recount how a dedicated printer must interpret Marco’s AST or CST, then break it into Prettier’s doc objects. This ensures consistent indentation and line breaks for both HTML and embedded JavaScript. The group discusses the difference between dynamic and static text blocks, revealing that custom placeholders and reactive tags require special rules to preserve clarity.

They highlight that using Prettier’s built-in HTML or JS formatters alone isn’t enough, because Marco merges the two languages in non-trivial ways. Instead, the compiler’s plugin calls “embed” hooks for each code segment, letting Prettier handle JavaScript or CSS while still respecting the overall structure. This results in a clean, unified output, albeit at the cost of writing thousands of lines of specialized printing code. Listeners learn that high-level code quality depends on such behind-the-scenes intricacies.

### 03:00:00 - 03:06:00 ES Lint Possibilities and Marco 6 Ecosystem  

Briefly, the speakers discuss the prospect of full-blown linting, noting that while type checks and syntax highlighting are in place, ES Lint or a similar tool could integrate deeper rule sets. Merging standard lint rules for JavaScript or TypeScript with Marco’s DSL is another puzzle to solve. They imagine a future where code style warnings and best practice suggestions adapt to Marco’s unique constructs just as fluidly as they do for plain JS.

They then pivot to the broader ecosystem planned for Marco 6, hinting at expansions in performance analysis, compile-time migrations, and specialized debugging tools. These might offer advanced ways to detect unneeded hydration or track unintentional reactivity. In doing so, the language would serve as a foundation for an ever-richer set of developer aids. It’s a vision of a tightly integrated environment, enabling complex transformations that remain largely invisible to everyday coding workflows.

### 03:06:00 - 03:12:00 Bundler Plugin Landscape: Vite, Webpack, and Rollup  

Now the hosts address how frameworks integrate with build tools. They emphasize that every bundler—Webpack, Rollup, Vite, Lasso—has its own plugin system. Marco’s approach, which requires advanced knowledge of server vs. client code, leads to a labyrinth of code to handle “virtual files” for extracted CSS or partial hydration. The group references Astro or Quick, similarly bridging SSR concerns with client-only scripts, highlighting shared complexities across modern meta-frameworks.

They suggest that Vite’s architecture can simplify certain tasks due to ESBuild’s speed, but multi-layer partial hydration demands still exist. Creating “entry points” for each island or dynamic region is not trivially solvable with straightforward bundler config. So, Marco wraps these complexities in a single plugin, letting developers import a `.marko` file seamlessly. Under the hood, the plugin orchestrates SSR compilation, client bundle generation, and linking assets. This comprehensive approach underscores the depth required to deliver minimal JavaScript while offering a frictionless experience.

### 03:12:00 - 03:18:00 Edge Cases in Vite and Automated Islands  

Focusing on Vite’s nuances, the panel outlines how ESBuild can treat dependencies differently from the SSR side. This introduces another layer of patching, because some dependencies only matter for the server or the browser. Tied to that is the idea of “browser entry files” for each piece of stateful UI, which automatically gather partial hydration assets. The conversation highlights repeated references to the synergy between specialized compiler transformations and real-time module resolution.

They mention that while simpler frameworks let developers manually define which components load on the client, Marco aspires to do all that detection. The framework determines the stable, static sections and the ephemeral, dynamic sections. The bundler plugin then crafts a neat structure that signals when to load each chunk. It’s a silent, behind-the-scenes process that feels magical to end users. Yet the conversation reaffirms this magic only exists thanks to an extensive layer of well-designed but extremely technical code.

### 03:18:00 - 03:24:00 Stages of Marco’s Compiler Pipeline  

Stepping back, the speakers summarize Marco’s multi-step compiler pipeline: parse, migrate, transform, and finally emit code. Migrate operations can rewrite older syntax or adapt newly deprecated features on the fly. They note it’s even possible for userland tags to run small transformations, effectively automating library migrations. This is unique to a framework with a custom DSL, where each “tag” can define special semantics for the compiler to interpret.

Transform then converts the internal AST to optimized JavaScript. This final output can be quite different from the developer’s original code, partitioning static markup from dynamic signals. The conversation underscores how all these phases must remain consistent, so line mappings remain valid and partial hydration logic never breaks. The result is an intricate chain that’s largely invisible in day-to-day coding but critical in powering advanced features like streaming, partial hydration, and minimized client bundles.

### 03:24:00 - 03:30:00 Tools Overhead and the Svelte Parallel  

Here, the hosts draw parallels to Svelte’s bundler story, acknowledging that Svelte also requires specialized plugins for Vite, Rollup, or Webpack. Both frameworks share the challenge of integrating custom single-file components. The difference is that Svelte typically focuses more narrowly on rewriting JavaScript, while Marco must parse and manage entire HTML structures in a deeply integrated way.

They note that Svelte’s popularity soared partly because it gave developers simpler illusions of pure HTML, while its compiler quietly handled the rest. In contrast, Marco historically had a smaller presence, overshadowed by React or Svelte’s marketing. Nonetheless, the general lesson stands: once a framework commits to a compile-first approach, it must also commit to building robust bundler integrations, editor tooling, and advanced transformations. The shared complexities highlight why such frameworks often gain traction more slowly but can offer substantial performance rewards.

### 03:30:00 - 03:36:00 Language Design: Balancing User Needs and Tooling Effort  

The next topic is user-centric design in language features. The panel discusses how, despite the heavy investment, user experiences are typically streamlined. Developers can define a tag for pagination, passing only a few attributes, and let the system handle loops, conditional rendering, or even data fetching. The compiler’s deeper analysis ensures performance remains top-notch. The hosts present this as the payoff for immersing so heavily in DSL creation.

Yet they caution that forging new syntax demands treading carefully. Overly terse or overly specialized constructs can alienate users or trap them in unexpected corners. Real success requires balancing approachability—mirroring what HTML or JavaScript do—while selectively introducing new capabilities. The discussion underscores that this equilibrium stems from thoughtful iteration and production feedback at eBay, forging a set of language constructs that address real developer pain points without piling on hidden complexities.

### 03:36:00 - 03:42:00 Recounting Scalability and High-Traffic Environments  

Returning to large-scale usage stories, the speakers highlight eBay’s continuous performance audits, in which any page or micro-frontend could become the culprit of a slowdown. Marco’s architecture gave them the advantage to pinpoint precisely where additional scripts snuck into the bundle. They reminisce about how teams new to Marco sometimes wrote anti-patterns, forcing the maintainers to refine the compiler or language rules to guard performance automatically.

This dynamic shaped a culture of ongoing improvement, ensuring every new version of Marco tackled real bottlenecks uncovered by day-to-day eBay usage. Rather than theoretical optimizations, changes were grounded in actual metrics from one of the web’s largest e-commerce platforms. The conversation also underscores that a DSL approach can systematically prevent common errors, pushing teams toward best practices. Such scale-driven refinements underscore the seriousness and maturity of a language that might otherwise seem niche.

### 03:42:00 - 03:48:00 Potential for Non-Web Marco Targets  

At this point, an audience question arises about “Marco native.” The hosts clarify that while in principle one could retarget Marco to mobile or other platforms, it isn’t a current priority. The main impetus behind Marco has always been eBay’s web needs, specifically speeding up server renders and shaving off client-script overhead. They mention some frameworks do compile to alternate targets, but stress that adopting such a path would require yet more specialized tooling.

Nevertheless, the idea spotlights how thoroughly a compile-first language can pivot if it’s decoupled from DOM specifics. With the right transformations, the same reactivity or partial hydration logic could, in theory, generate native UI code. They nod to experimental realms like React Native or Svelte Native as parallels. Still, they reiterate that practical constraints and resource limits keep Marco’s maintainers focused on the mainstream web case, especially given the complexity of the existing toolchain.

### 03:48:00 - 03:54:00 Code Size, React, and Tuning Performance  

The conversation returns to code size trade-offs, referencing bundler reports that show how shipping an entire UI framework can overshadow actual application logic. They compare minimal examples—like the classic “counter”—where vanilla JavaScript can beat any framework by orders of magnitude. Yet as frameworks adopt partial or fine-grained hydration, that gap narrows. Marco’s zero-JS-by-default concept still stands out as an extreme solution, ideal for large pages with minimal interactivity.

They contrast this with React or other universal solutions that prioritize an all-in-one approach. While that works great for small or mid-scale apps, eBay’s vantage reveals how quickly JavaScript kilobytes add up across thousands of pages. The chatter clarifies that the next major step in framework performance might be fine-grained code-splitting for logic, matching the advanced bundling of partial hydration. This could guide developers toward smaller footprints, bridging the gap between a purely server-driven approach and the dynamic capabilities that modern users expect.

### 03:54:00 - 04:00:00 Perceived Complexity and Real Adoption Barriers  

Delving into adoption challenges, they admit that advanced partial hydration can seem like a “black box” to developers raised on simpler, purely client-rendered frameworks. The broad success of React hinged on easy mental models, even if that meant sending bigger bundles. In a future dominated by performance budgets and core web vitals, more teams might find themselves seeking out partial hydration, but not all will embrace a custom language or complex compiler pipeline.

The hosts express empathy for small shops or side projects, which might do just fine with an existing ecosystem. They reiterate that eBay’s scale, along with a strong desire to reduce every possible byte, propelled Marco’s innovations. Meanwhile, they welcome the possibility that simpler frameworks or meta solutions may soon replicate partial hydration’s benefits. This open-minded stance shows how the conversation transcends mere framework cheerleading, exploring the broader puzzle of balancing developer convenience with architectural rigor.

### 04:00:00 - 04:06:00 Practical Examples and React-Focused Comparisons  

The spotlight turns briefly to real code examples, where dynamic routing and UI flows typically highlight partial hydration gains. The speakers observe that in React, devs might rely on “lazy” or “Suspense,” but that can still oversend scripts if many features coalesce. By contrast, Marco’s compiler can target granular parts of the page, only shipping code for a single button or small widget. The synergy emerges especially in multi-component layouts with large static sections.

Listeners hear that some advanced React libraries attempt to replicate partial hydration through specialized APIs, yet none deeply automate it at the compiler level. Even Svelte, which boasts lean bundles, still organizes hydration around entire components rather than sub-component signals. The conversation underscores that next-gen solutions like Quick or Solid approach a similar granularity, but from differing vantage points, each referencing the same fundamental concept: shipping minimal JavaScript by understanding precisely where dynamic logic lives.

### 04:06:00 - 04:12:00 Time Slicing and Concurrent Rendering Tangent  

A fleeting tangent arises about React’s time slicing and concurrent rendering, shining a light on how frameworks break large updates into smaller chunks. The hosts weigh whether this approach solves real-world issues or mostly addresses artificially constructed demos. They acknowledge that for CPU-bound tasks distributed across many small components, time slicing can improve responsiveness. However, large monolithic calculations or expensive DOM operations remain bottlenecks where concurrency alone provides minimal relief.

They hint that for frameworks like Marco or Solid—built on granular reactivity—time slicing might not offer as noticeable an improvement. Much of the heavy lifting is circumvented by updating only the precise nodes affected. That said, they don’t dismiss concurrent rendering entirely; they predict continued experimentation, especially in enterprise scenarios with sprawling code and unpredictable performance hotspots. This thoughtful discussion portrays concurrency as one of several strategies, not an all-encompassing silver bullet.

### 04:12:00 - 04:18:00 Demoing Performance Benchmarks and Real Limitations  

Listeners then hear about specialized test demos that forcibly add slowdown to illustrate concurrency’s benefits. The speakers jokingly note that real applications seldom see random transformations that can be neatly sliced. Instead, actual bottlenecks frequently arise from poorly structured code or highly repetitive DOM operations. This distinction underscores the complexity of measuring time slicing in the wild, where performance is often limited by network or side effects.

They also discuss the phenomenon of “peaking,” a wave-like scenario where tasks spike above a threshold, freezing the UI. Time slicing can shave those peaks slightly, yet if the overall load remains too high, stutter will still occur. It reflects a broader principle: architectural changes or better design patterns can eclipse the gains from concurrency scheduling. This nuanced stance clarifies that while concurrency might help certain edge cases, frameworks built around minimal rendering overhead can bypass the problem entirely.

### 04:18:00 - 04:24:00 React Critiques and Affirmations of Focused Solutions  

This chapter highlights a return to react critiques, with the host reading out a social media post praising React but lamenting its re-render model. They affirm that while React remains the industry standard, advanced “signals-based” solutions, whether in Preact or Solid, are cropping up. This leads to the idea that a new wave of frameworks might eventually overshadow React’s dominance by focusing on granular reactivity and minimal rerenders.

Yet they reassure that none of these alternatives are strictly “React killers.” Each offers unique advantages: Vue’s two-way reactivity, Svelte’s minimal mental overhead, Solid’s extremely fine-grained updates, and Quick’s resumability. Marco’s angle, combining an HTML-first DSL with server-managed states, is equally compelling. Rather than dethroning React, these frameworks collectively push boundaries that React may one day adopt, continuing the iterative cycle of innovation.

### 04:24:00 - 04:30:00 Preact Signals Announcement and Its Reception  

The conversation segues to the big news: Preact’s introduction of signals. They observe that this parallels Vue’s `ref` or Solid’s `createSignal`, giving developers a more direct reactivity primitive. The group expresses excitement because it validates the concept of granular updates in a mainstream, React-like environment. They mention that React’s own official stance may remain cautious, but developers can now test signals in a familiar VDOM environment.

They anticipate widespread experiments, with some devs possibly mixing signal-based state management into existing React code, bridging paradigms. The segment underscores how signals allow pinpointed updates to DOM attributes or text nodes. Some might see it as “global store 2.0” or a Trojan horse for deeper reactivity. Regardless, the speakers believe it fosters a broader appreciation for partial updates, bridging historically separate worlds of VDOM and fine-grained reactivity.

### 04:30:00 - 04:36:00 Community Buzz and Trojans in React Ecosystem  

They delve into the online response, reading enthusiastic tweets about Preact signals. Many hail it as a revolutionary step forward, while others note these ideas have existed in MobX or Knockout for years. The hosts chuckle at how official backing from a well-known library like Preact can spark excitement around techniques that once seemed niche. This hype, they suggest, might bring even more attention to solutions like Solid or Marco.

A lively discussion follows on how reactivity profoundly changes one’s mental model, removing dependency arrays or forced component boundaries. For some React veterans, it might be jarring to see direct assignment to `mySignal.value` rather than calling a setter function. Nonetheless, the speakers see it as a step closer to bridging the gap between reactive frameworks and mainstream libraries. They reiterate that more widespread adoption of signals can only bring positive momentum to partial hydration efforts.

### 04:36:00 - 04:42:00 Subtle API Differences and Dealing with Props  

The hosts drill down into potential friction points developers may face using Preact signals. For instance, passing signals as props may require carefully wrapping or unwrapping `.value`, which differs from the fully integrated approach in Solid. They note that in a half-and-half environment, confusion arises when referencing the raw signal object versus its current value. This leads to speculation on how large codebases might systematically adopt signals without major rewrites.

They draw parallels to how Vue overcame a similar challenge by unifying reactivity under `.value`. Listeners hear that complexities increase when dealing with arrays, objects, or nested states. The panel acknowledges that a complete reactivity solution often demands more than a single library’s introduction—it might need well-established patterns across the ecosystem. Still, they admire Preact’s official stance and suspect that meaningful change will come once developers appreciate signals’ ergonomic wins.

### 04:42:00 - 04:48:00 Cross-Pollination and Future of React Ecosystem  

This chapter captures the optimism about cross-pollination among frameworks. The speakers recall how certain reactive concepts migrated from smaller libraries into mainstream solutions, shaping the path for hooks and beyond. Preact signals, they say, could prompt React to revisit older assumptions about setState. Whether or not React officially embraces signals, developers might adopt them through community libraries or consider frameworks like Solid for advanced use cases.

They compare the wave of synergy around partial hydration, streaming, or concurrent rendering to a new arms race in performance and user experience. If frameworks remain open to each other’s innovations, the entire JavaScript ecosystem stands to benefit. Concluding, they reiterate that no single approach holds a universal edge, but the lines are blurring. Fine-grained signals, specialized DSLs, and time slicing each represent pieces of a larger puzzle that modern apps must piece together.

### 04:48:00 - 04:54:00 Revisiting Next.js and SvelteKit Routing  

A brief return to Next.js emerges, noting its new 12.3 release with improved file-system routing strategies. The hosts mention how SvelteKit also faces heated debates over routing conventions. They reflect on how file-system routing can be elegant for small apps but may bloat quickly, prompting features like “route groups” or specialized file naming. Meanwhile, they highlight that using a DSL can unify these features behind a single syntax, sidestepping multiple file naming peculiarities.

They point out that Next.js’s approach to layout segments, error routes, and loading states further cements the idea that advanced routing merges static structure with dynamic placeholders. SvelteKit does something similar with “+page.svelte” or “+layout.svelte.” All these solutions reflect the complexity of real app architecture, where partial rendering or error boundaries must integrate deeply with route definitions. Though each approach differs, the takeaway is a universal push toward streamlining complex app flows in a single, cohesive system.

### 04:54:00 - 05:00:00 Wrapping Up Technical Threads  

As the session nears its final stretch, the speakers consolidate key themes: the synergy between reactivity and partial hydration, the difficulty of building custom language tooling, and the promise of advanced SSR techniques. They reiterate that each framework’s evolution—whether React, Vue, Svelte, or Marco—reflects unique design decisions shaped by real-world usage. The repeated comparisons underscore how seemingly different methods converge on improving both developer experience and runtime performance.

They also take a moment to highlight the comedic dimension of such a lengthy broadcast, weaving in anecdotal mentions of hot weather and day-to-day streaming life. Despite the heaviness of topics, they maintain a relaxed tone. The overarching conclusion is that the future of front-end development continues leaning into specialized compilers and smaller, more targeted runtime footprints. This ensures that once-esoteric ideas like zero-JS by default or signals-based partial hydration will likely become mainstream features.

### 05:00:00 - 05:06:00 Audience Questions and Final Commentary  

Here, the hosts field a few last audience comments, reiterating that partial hydration success depends on a framework’s language-level analysis. They mention advanced optimization stories, such as how only ephemeral event handlers might be shipped. The panel acknowledges the queries around adopting frameworks that require learning new syntax but sees developer education improving as these patterns gain traction.

In a final nod to bridging theoretical knowledge with practice, they suggest that those intrigued by partial hydration should experiment with smaller test apps, focusing on the difference in network transfer and runtime overhead. The conversation highlights a sense of community excitement—each question underscores how these advanced ideas are trickling down to everyday developers. Listeners are encouraged to keep exploring frameworks like Marco, Quick, or Solid if they want to push the boundaries of SSR and truly minimal JavaScript.

### 05:06:00 - 05:12:00 Thoughts on Time Slicing Demos and Workarounds  

The speakers circle back briefly to demonstrate code samples that artificially generate CPU load, explaining how they gauge the impact of concurrency features. While they show how time slicing can mitigate input lag or stutter in these contrived examples, they concede real applications rarely produce such symmetrical workload distribution. The discussion underscores that truly busy UI threads usually result from a combination of network, layout, and business logic.

Still, they foresee more frameworks experimenting with concurrency scheduling, if only to gracefully handle the worst-case scenarios. For large-scale apps with unpredictable user flows, it could smooth out minor spikes. But they close by emphasizing that frameworks built around minimal or targeted re-rendering typically sidestep the need for complex concurrency solutions. This demonstration wraps up the discussion on concurrency, reinforcing the notion that partial hydration can handle a broad class of real performance needs more directly.

### 05:12:00 - 05:18:47 Closing Remarks, Community Notes, and Stream Farewell  

As the final minutes approach, the hosts offer concluding thoughts, encouraging listeners to keep an open mind about new DSLs, partial hydration frameworks, and concurrency approaches. They mention next steps—like continuing to refine TypeScript integration and exploring more official support for advanced tooling in future Marco releases. With repeated thanks to the audience for their stamina in a marathon session, they show genuine excitement about where the community is heading.

In the last moments, they address a few lingering questions about future streams and mention side discussions on bundling for edge deployments. Jokes about enduring the extreme heat underscore the personal side of an epic broadcast. The stream concludes with warm goodbyes and gratitude for everyone who stayed for the extended technical journey. Listeners are left with an inspired appreciation for how diligently each piece of a custom language ecosystem must be built—and how thrilling that process can be.