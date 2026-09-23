---
showLink: "https://www.youtube.com/watch?v=tcwe85p7M9c"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Petite Solid?! Let's build a Micro View Library"
description: ""
publishDate: "2022-01-08"
coverImage: "https://i.ytimg.com/vi/tcwe85p7M9c/sddefault.jpg?v=61d88837"
---

## Episode Description

A hands-on session exploring micro front-end design, streaming basics, and reactive principles in JavaScript frameworks.

## Episode Summary

This conversation begins by outlining how server-side rendering and client hydration intersect with modern streaming techniques, setting the stage for a detailed exploration of front-end performance. It then shifts into a live-coding demonstration, showing how to write a minimal JavaScript library reminiscent of older frameworks, yet informed by today’s reactivity and rendering concepts. Throughout, the speaker explains how conditional rendering, list handling, and attribute binding evolved in popular libraries, highlighting the contrasts between older and newer approaches. The discussion also covers the challenges of building from scratch, including complexities with DOM parsing, diffing algorithms for lists, and layering reactive contexts. By walking through incremental code examples, the speaker illustrates both the power and the pitfalls of real-time updates and partial hydration, culminating in a perspective on where frameworks might head next in optimizing performance and developer experience.

## Chapters

### 00:00:00 - Initial Greetings and Topic Setup

In this opening segment, the speaker welcomes viewers, acknowledges background noise, and sets the tone by highlighting informal interactions in the live chat. He briefly touches on personal moments—like stepping away to give a goodnight hug—providing a relaxed atmosphere. He notes that there’s a short delay in the stream, invites people to say hello, and confirms everyone’s readiness for the coding and discussion to come. The approach is intentionally casual, aiming to create a real-time, collaborative ambiance before diving into technical details.

He also references the general theme of the presentation, which revolves around server-side rendering and hydration. Although the stream will become deeply technical soon, at this stage it remains broad and welcoming. There is a sense of anticipation as the speaker outlines the scope: bridging the historical context of JavaScript frameworks with current ideas about rendering. This introduction establishes both a friendly vibe and a promise of deep coding content ahead.

### 00:05:36 - Revisiting Streaming and Reactivity Trends

Here, attention shifts toward the buzz surrounding React 18 and its streaming features, along with mentions of other frameworks experimenting with server-side streaming. The speaker explains how data latency, server speed, and the complexity of partial hydration techniques can influence performance. He provides examples of how existing solutions may or may not benefit from streaming, depending on factors like route structure or the presence of third-party APIs.

He also acknowledges the potential pitfalls, such as the need to send headers before data has fully loaded. This segment emphasizes the balance between quick document delivery and the risk of complicated states when errors occur mid-stream. Through these observations, the speaker lays out the nuanced landscape of streaming architectures, encouraging listeners to consider the various trade-offs when implementing advanced rendering tactics in real-world applications.

### 00:11:12 - Trade-Offs of Streaming and Partial Hydration

Focusing deeper on streaming, the speaker underscores its historical roots and how it’s always reappeared under different names. He recalls discussions with developers who highlight how streaming primarily shines when data is slow to arrive, or when multiple data dependencies surface at staggered intervals. These reflections point to the importance of thoughtful architecture choices—especially as more frameworks adopt partial hydration and server components.

He then addresses how ephemeral loading states can affect user experience, suggesting that not all sites benefit equally from streaming. The segment continues by considering how the browser handles parallel requests, cautioning that real-world performance often differs from controlled demos. Underlying it all is a sense of optimism, with the speaker championing ongoing experiments in combining server rendering with partial hydration to refine both speed and interactivity.

### 00:16:48 - Historical Context of JavaScript Frameworks

At this point, the conversation transitions to a retrospective look at older JavaScript frameworks and how they influenced today’s patterns. The speaker invokes memories of the early 2010s, referencing the likes of Backbone, Knockout, and how they handled data binding. He contrasts these simpler, DOM-centric techniques with modern complexities such as isomorphic rendering and advanced build systems.

He frames Alpine.js and Petite Vue as modern incarnations of this older style, highlighting how they parse DOM nodes directly, apply reactive transformations, and sidestep elaborate compilation steps. The reasoning, he explains, is that many teams still use server-rendered backends and only need minimal JavaScript for interactivity. This focus on simplicity sets the stage for the live-coding demonstration that follows.

### 00:22:24 - Setting Up a Basic Code Sandbox

The speaker begins a practical coding session to show how one might craft a “micro” view library inspired by simpler DOM-walking techniques. He opens a CodeSandbox project, acknowledging the minimal initial setup required. By starting from scratch with just an `index.html` and a basic JavaScript entry, he demonstrates a no-nonsense approach free from modern bundlers or advanced configurations.

In this segment, the emphasis is on bridging the gap between older templates and new reactivity. He introduces Solid’s reactive primitives as a backbone for the experiment, alongside a small templating utility from Riot. The speaker hints that these pieces—reactivity, expression parsing, and DOM walking—are the core building blocks of a lightweight, direct-manipulation framework.

### 00:28:00 - Building the First Reactive Text Bindings

With the sandbox environment ready, the speaker begins writing code to demonstrate how text binding works. He shows a simple `createSignal` for holding a variable, then logs the result of passing that signal to a template string. This initial example sets up a continuous loop that updates the DOM whenever the signal changes, mimicking the fundamentals of older libraries like Knockout.

He explains the trade-offs of this naive approach, notably how frequently redrawing entire content blocks can lead to performance bottlenecks. Despite the simplicity, it conveys how early frameworks achieved declarative data binding without virtual DOM or sophisticated compilers. The segment ends by outlining the next step—handling event listeners in a similarly lightweight, reactive fashion.

### 00:33:36 - Introducing Event Handlers and Attributes

Next, the speaker demonstrates how to integrate user interactions. He appends a button to the template and wires up a click event, parsing the attribute to identify an action from the template string. The approach reveals the low-level mechanics of removing special markers from attributes and binding JavaScript expressions to DOM events in real time.

He also starts to handle attribute-based expressions, such as setting a title dynamically. Though the implementation is basic, it underscores how small frameworks handle standard tasks like event registration. At this stage, each new feature is a puzzle piece, slowly culminating in a fully reactive system that can handle text, attributes, and events—all by interpreting strings directly from the HTML.

### 00:39:12 - Controlling Flicker and Inline Styles

As the code grows, the speaker addresses flicker issues that arise when the browser briefly shows raw template expressions. To combat this, he demonstrates how to initially hide elements until they’re fully processed, then restore their display property once bindings are in place. He mentions that older frameworks often had to juggle such techniques to avoid jarring transitions on page load.

He also expands upon the attribute binding concept, highlighting how custom prefixes or markers can separate reactive attributes from regular HTML attributes. This allows the library to treat them differently, updating them with data-driven values. By combining these solutions, the speaker ensures that the final rendered output appears polished, without revealing the underlying placeholders or expressions.

### 00:44:48 - Implementing Conditional Rendering

Entering a more advanced feature, the speaker starts work on conditional rendering. He introduces a special directive—akin to `v-if` in Vue—that shows or hides DOM nodes based on a signal’s value. This part involves temporarily removing an element from the DOM, storing it in memory, then reinserting it when the condition changes.

He explains the need for a “marker” node to anchor reinsertion and how signals help track true/false transitions. This leads to a deeper discussion of reactivity’s role, especially the importance of avoiding excessive recalculation when conditions flip repeatedly. In showcasing how to skip processing children for inactive conditions, the speaker reveals the underlying logic many frameworks rely on.

### 00:50:24 - Balancing Simplicity and Complexity

In this segment, attention shifts to the architectural impact of building conditionals. The speaker emphasizes how frameworks like Alpine.js or Knockout pivot on simple string parsing to remain small. While such an approach is straightforward, it also lacks robust features found in more modern solutions. He notes that extensive DOM walking can be expensive or unwieldy for large-scale applications.

Yet the simplicity has a distinct charm, offering a direct mapping between HTML and data without extensive build steps. Listeners see how introducing one directive—conditional rendering—requires careful consideration of node cloning, context preservation, and reactivity triggers. Despite these new complexities, the speaker underscores that the final user experience is still quite intuitive at the template level.

### 00:56:00 - Handling Nested Contexts and Early Frameworks

At this point, the demonstration grows more intricate. The speaker walks through the idea of nested contexts, explaining why each new conditional or loop might require its own scope for data. He references the approaches older libraries took, illustrating how they built layered contexts that cascade down the tree of elements.

These reflections underscore a pivotal trade-off: while flexible context systems allow powerful nested templates, they also demand significant overhead in managing multiple reactive states. This discussion connects back to the earliest days of JavaScript libraries, reminding viewers that these issues led to the creation of well-known frameworks. By layering each new feature, the speaker shows both the raw mechanics and the underlying principles shared by many front-end tools.

### 01:01:36 - Introducing For-Loops and List Rendering

Here, the speaker embarks on yet another essential feature: rendering lists. He builds a small directive to handle arrays, referencing the “in” syntax reminiscent of older templating. List elements are dynamically cloned, with each item receiving its own context so that text bindings and event handlers reflect the correct data.

He emphasizes the importance of ensuring reactivity for arrays, including how adding or removing items should immediately appear on-screen. This segment helps viewers understand that basic loops are the backbone of many common UI patterns, from simple bullet lists to complex data grids. By demonstrating how signals intersect with list elements, the speaker clarifies how minimal code can still yield highly dynamic interfaces.

### 01:07:12 - Reconciling Arrays and DOM Updates

Next, the conversation shifts to the challenges of updating array items without fully re-rendering every element. The speaker mentions specialized libraries such as `udom-diff`, explaining how they efficiently match old items to new ones. These libraries skip re-creating DOM elements that are unchanged, focusing only on elements that are added, removed, or reordered.

He also notes that this approach is a key differentiator between naive redrawing and high-performance reactivity. By only modifying the necessary parts of the DOM, the app remains responsive and avoids flicker. Though the coding example remains basic, the speaker broadens the topic to the advanced concepts of keyed and unkeyed diff algorithms, showcasing real-world performance considerations in minimal frameworks.

### 01:12:48 - Svelte Comparisons and Performance Nuances

Broadening the scope, the speaker draws parallels to Svelte’s lightweight runtime and how it employs simpler, direct DOM manipulations for list updates. He highlights that while Svelte can be more efficient in certain scenarios, it still faces decisions about whether to produce minimal code or handle all edge cases. This comparison underscores that each framework balances complexity, performance, and developer convenience differently.

He underscores that advanced compiler techniques can bypass many manual steps by translating templates into optimized code. Still, the segment clarifies that the fundamental principles—walk the DOM or manipulate it using minimal instructions—remain consistent. Whether a library uses Virtual DOM, AST transformations, or direct binding, the conversation highlights how each path addresses performance concerns in its own way.

### 01:18:24 - Reflecting on Fine-Grained Reactivity

In this chapter, the speaker circles back to how fine-grained reactivity sets libraries like Solid apart from older, more sweeping approaches. By wiring each data piece directly to the node it updates, these frameworks avoid the overhead of large-scale reconciliation. He points out that building from the ground up helps illustrate how small changes in architecture can have significant performance implications.

He also mentions that the push to incorporate partial hydration—loading only essential JavaScript on demand—further complicates but refines the overall user experience. The conversation underscores how the community’s pursuit of speed, minimalism, and user-centric design continues to reshape how frameworks evolve. This approach of incremental enhancement stands in contrast to re-rendering entire components, ensuring a nimble final result.

### 01:24:00 - Advanced Diff Algorithms and Their Roots

Here, the speaker dives into specialized array-diffing algorithms such as the “longest increasing subsequence,” exploring how they can minimize DOM moves when sorting or shuffling lists. He notes that while these algorithms can greatly reduce unnecessary manipulations, they carry extra code weight and can be more complex to implement.

The segment demonstrates the trade-off: some frameworks opt for a simpler approach to keep their bundle small, while others integrate highly efficient algorithms for large or frequently changing data sets. He cites examples of libraries that have spent years perfecting these techniques, underscoring that list diffing is a cornerstone of high-performance UI but not always a necessity for smaller apps. The discussion highlights ongoing tension between robust features and code size.

### 01:29:36 - Revisiting Array Mapping and Practical Coding

At this point, the speaker returns to practical demonstrations, illustrating how fine-grained reactivity can tie seamlessly with data structures. He codes a series of small functions to show how individual signals map to DOM updates. Observers can see how small increments in logic lead to new complexities—for instance, deciding whether to store entire items or references when the data changes.

He reflects on the benefits of having a top-level array that triggers updates for each child, comparing it to older approaches where entire sections might re-render. The discussion also highlights how targeted changes reduce flicker and improve user experience. While the final code is still a rough skeleton, it exemplifies essential patterns of modern reactivity in a minimal environment.

### 01:35:12 - Balancing Feature Creep in Micro Libraries

Having built a functional skeleton, the speaker pauses to evaluate whether to keep adding new features, acknowledging that a micro library can rapidly expand into a fully fledged framework. He reflects on prior experiences where well-intentioned prototypes balloon into more complex, opinionated systems. Each addition, like conditionals or for-loops, paves the way for countless edge cases.

He points out that this balance between simplicity and feature richness underscores Alpine.js’s and Petite Vue’s popularity. They offer enough for small interactive pieces on otherwise server-rendered pages without overshadowing the backend. The conversation suggests that achieving a sweet spot of power, minimalism, and maintainability remains an ongoing pursuit within the JavaScript ecosystem.

### 01:40:48 - Real-World Complexity and Developer Constraints

In this segment, real-world concerns come to the forefront. The speaker considers scenarios where teams lack the time or resources to maintain a full-fledged client-side framework, yet still require moderate interactivity. A micro library can be attractive in these cases, keeping the codebase accessible for developers more comfortable with server-rendered HTML.

He also notes that many product teams prefer proven, larger frameworks because of widespread community support, robust plugin ecosystems, and well-tested performance optimizations. While the custom-coded approach shown in the stream can be instructive, replicating every advanced feature from scratch isn’t always practical. He concludes that understanding these low-level patterns still benefits developers who want to refine or debug existing libraries.

### 01:46:24 - Wrapping Core Examples and Testing

At this juncture, the speaker finalizes the main coding demo, revealing a rudimentary library capable of text binding, event handling, conditional rendering, and list iteration. He discusses potential final checks, such as verifying that the logic handles nested conditions or deep hierarchies. The demonstration touches on the concept of testing by manually clicking buttons or altering signals to confirm that everything updates as expected.

He acknowledges that each new pattern— from nested contexts to advanced attribute parsing—would require further care in a production-ready tool. Nonetheless, this demonstration has uncovered how older DOM-centric libraries did their work. The session stands as both a historical exploration and a blueprint for anyone curious about minimal reactive systems.

### 01:52:00 - Assessing Performance and Community Examples

Performance questions arise again, prompting a brief overview of the more advanced solutions that exist, like Marko or React’s streaming efforts. The speaker reiterates that, although micro libraries can handle certain tasks quite efficiently, complex requirements may necessitate more sophisticated solutions. He references community-driven tools that have been honed over multiple years, offering robust solutions to edge cases like nested loops or advanced concurrency.

He also nods to the broader JavaScript community, explaining that discussions around performance often circle back to the same fundamental approaches: partial hydration, streaming, or direct DOM manipulation. Each has pros and cons, and community projects play a large role in refining them. This segment highlights how even a tiny library can spark meaningful insights into optimization strategies.

### 01:57:36 - Audience Q&A and Future Directions

Now the speaker addresses viewers’ questions about further extending the library. He considers whether advanced features like routing, shared global state, or code-splitting would be possible without ballooning the code size. The conversation identifies a key fork in the road: remain minimal and specialized, or evolve into something more comprehensive.

He also brainstorms potential next steps, such as deeper testing, better developer experience, and modular expansions. Even as the speaker entertains these possibilities, he stresses that the current demonstration is primarily an educational tool. The point is to illustrate how reactivity, templating, and DOM handling can be pieced together, not necessarily to replace established frameworks.

### 02:02:16 - Final Remarks and Sign-Off

In the concluding moments, the speaker wraps up by expressing excitement about ongoing developments within the JavaScript ecosystem. He reflects on how streaming, partial hydration, and micro reactive libraries might converge to influence future patterns. Thanking the audience for tuning in, he reiterates that this session stands as a reminder of the industry’s continuous cycle: past ideas often resurface, refined by new perspectives.

He signs off by wishing everyone a good evening and hints that more live coding streams could be on the horizon. The communal and exploratory spirit of the event persists, with participants encouraged to keep learning and experimenting on their own. This relaxed yet forward-looking wrap-up underscores how front-end experimentation remains a lively, shared endeavor.