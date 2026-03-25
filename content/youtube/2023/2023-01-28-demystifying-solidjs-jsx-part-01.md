---
showLink: "https://www.youtube.com/watch?v=5du6jBlryIc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Demystifying SolidJS' JSX"
description: ""
publishDate: "2023-01-28"
coverImage: "https://i.ytimg.com/vi/5du6jBlryIc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging exploration of SolidJS, focusing on its JSX compilation process, reactivity model, and broader JavaScript ecosystem discussions, captured over a detailed five-and-a-half-hour session.

## Episode Summary

This extensive conversation covers how SolidJS blends JSX syntax with fine-grained reactivity to create high-performance, declarative user interfaces. The speaker begins by introducing signal-based state management, illustrating how computations trigger minimal updates without re-running entire components. From there, he explains methods for handling conditionals, loops, and advanced transformations that split static versus dynamic sections in the compiler, yielding significant performance gains. As the talk continues, runtime behaviors like event delegation, attribute handling, and server-side rendering are put in context, showing how Solid’s design choices adapt fluidly across environments. Alongside these deep technical elements, the transcript includes broader reflections on frameworks versus libraries, the role of tools like Vite or Webpack, and how React’s shift toward more opinionated solutions affects the front-end ecosystem. It culminates in a view of future directions, spotlighting Solid’s flexibility in adopting new targets while still using a single-pass, high-efficiency compilation pipeline.

## Chapters

### 00:00:00 - First Steps and Context Setting

In the opening minutes, the host greets viewers, acknowledging scheduling challenges and welcoming first-time visitors. He explains that he was wrapping up a beta release for a SolidJS-based product, hinting at the real-world traction the library is gaining. Early chatter covers the difficulty of finding a perfect global streaming slot, with references to a previously late-night schedule that was problematic for many. The speaker mentions a Mac update and a last-minute scramble, injecting a lighthearted note about the realities of live streaming. He underscores the significance of multiple time zones and how each potential timeslot can be inconvenient for one region or another.

This casual introduction sets up the core purpose of the stream: to examine JSX usage in SolidJS and explore how the compiler optimizes signals and components. He touches on the perceived simplicity of JSX versus tag template literals, highlighting the essential difference that JSX is purely a syntax transform, not a runtime. These remarks foreshadow a deeper discussion about how Solid’s approach leverages compile-time transformations to minimize overhead. By framing the conversation around real-world experience and live-coding complexities, he eases listeners into an otherwise technical topic.

### 00:06:00 - Defining JSX and Its Neutrality

During these minutes, the speaker dives into formal definitions of JSX, stressing that it’s an XML-like extension to JavaScript without inherent semantics. He references how TypeScript often targets React’s `createElement` by default, yet JSX itself can be mapped to any function call. The mention of “Hyperscript” underscores how libraries might transform JSX differently—some produce virtual DOM nodes, while Solid creates fine-grained reactive bindings.

He differentiates between JSX as syntax and React’s typical usage of it, clarifying that TypeScript’s behavior can mislead newcomers into believing JSX is strictly React-only. The conversation highlights that lower-level transformations, like object spreads and property checks, shape the resulting code. Listeners gain a sense of why framework authors see JSX as powerful but also flexible, paving the way for custom solutions. This background becomes pivotal as he links it to SolidJS and its unique compile-time strategies.

### 00:12:00 - Signals and Effects: The Core of Reactivity

Here, the speaker shifts from generic JSX to Solid’s reactivity system. He demonstrates a simple counter built with `createSignal` and an effect that logs changes in real time. This basic example illustrates how signals automatically track dependencies, triggering reruns only for affected code paths. The speaker points out how initial usage feels like a typical console log effect, then clarifies how it can be extended to DOM updates seamlessly.

Listeners see how a basic `document.createElement` pattern can be wrapped in reactive updates, ensuring minimal overhead compared to typical re-render cycles. By showing signals as straightforward getters and setters, he highlights how incremental updates reduce computations. The example serves as an on-ramp to deeper compiler internals, showing that Solid’s minimal overhead arises directly from treating each changing value as an isolated piece of state.

### 00:18:00 - Extending DOM Logic into Components

Building on the counter, the speaker illustrates how function calls become reusable “components” in SolidJS. He clarifies that such functions run only once, preserving reactivity in their returned structure without repeated evaluations. This fundamental departure from frameworks that re-execute functions on update underscores Solid’s single-pass approach, allowing components to efficiently manage or share signals.

He shows how multiple counters can coexist, each with its own state. However, the examples emphasize that signals can be shared globally if desired, mimicking typical JavaScript closures. Through step-by-step code transformations, he previews how the compiler might wrap certain expressions while keeping others untouched. It sets the stage for discussing advanced logic like conditionals, loops, or nested computations, all deriving from the same consistent principle.

### 00:24:00 - Granular Reactivity vs. Full Re-Renders

Around this segment, the discussion deepens, comparing fine-grained updates to the all-or-nothing re-render strategies often found in virtual DOM libraries. The speaker gives hypothetical examples of how a signal might update a single text node without redrawing siblings or parents. Referencing older libraries like Knockout or MobX, he shows how those faced complexities around performance or hooking into existing JavaScript expressions.

He then expands on how compiling JSX in Solid avoids those pitfalls. By detecting references to signals—via function calls or dot-member accesses—the system knows precisely which parts need re-computation. This conversation underscores the technical elegance behind Solid’s approach: it embraces a minimal overhead for each expression, rather than bundling everything into full re-renders. For listeners, it clarifies why performance remains robust even as an application’s complexity scales.

### 00:30:00 - Component Transform Mechanics

In these minutes, the speaker shifts gears, talking explicitly about the transformations involved when Solid encounters capitalized JSX elements. He describes how capitalized tags become calls to `createComponent`, whereas lowercase tags transform into direct DOM elements. This distinction matches React’s convention but leads to a different underlying execution path. Solid’s compiler merges properties and children into a single props object, wrapping anything that must remain reactive in getters.

He highlights special attributes like `ref`, noting how Solid merges forward references with optional assignment logic. Listeners learn that this eliminates the need for extra hooks or effect blocks, letting them attach DOM references more succinctly. The overall effect is that while the developer writes plain JSX, the compiler quietly attaches the minimal overhead required. These details connect with earlier remarks on how signals and component wrappers unify into a single model of reactivity.

### 00:36:00 - Handling Spreads, Children, and Lazy Evaluation

Here, the speaker addresses how spread attributes merge into an evolving object, exemplifying Solid’s compile-time approach to object assigning. By collecting properties and embedding them in a final call, the library ensures any dynamic expressions remain reactive while static values never incur extra runtime checks. He also underscores how children get wrapped in lazy functions only if necessary—particularly for expressions known to be signals or containing nested JSX.

The segment drives home the point that destructuring or advanced patterns in user code can often be recognized at compile time. Solid uses heuristics to skip the overhead when a prop is purely static, or else wrap it if it references a reactive piece. Such sophistication emerges naturally from bridging compile-time scanning with runtime reactivity. Listeners get a clear view of how spreads, often considered potentially expensive, become efficient when guided by these transformations.

### 00:42:00 - Boolean Logic, Ternary Expressions, and Memoization

During these six minutes, attention turns to how Solid deals with conditionals embedded in JSX. The speaker contrasts naive logic, which might re-run an entire expression each time, with Solid’s ability to inject a memo for the conditional check. He explains that by identifying `&&` or `?:` operators in dynamic expressions, the compiler can isolate them, creating a minimal effect re-check that triggers only upon relevant changes.

He provides a detailed example: if an element is shown based on a condition but remains consistent once true, Solid ensures the expensive creation does not reoccur on every subsequent update. This approach gives developers an easy path to efficient conditional rendering without manually employing something like a “show” component. The conversation extends earlier topics, reinforcing how static detection at compile time creates simpler, more predictable runtime flows.

### 00:48:00 - DOM Expressions and Template Cloning

Shifting gears to the “DOM Expressions” package, the speaker addresses template cloning for performance. He walks through how Solid’s compiler collects static chunks of HTML into a template string, then references them repeatedly in the final output. This means fewer calls to `document.createElement`, thus avoiding overhead from individually generating each node.

He describes how the tooling marks placeholders for dynamic pieces, referencing how text updates need a comment node if they appear within existing text. By systematically walking the AST, the compiler can handle these edge cases, ensuring that each insertion or attribute assignment lines up correctly. This segment expands on the significance of a single-pass rendering pipeline: everything from text merges to event listeners is methodically integrated into a final structure.

### 00:54:00 - Shared Logic in Universal Renderers

During this interval, the conversation moves to how universal rendering works in parallel with DOM rendering. The core difference is that universal output might not clone browser-native templates, but it follows identical data flows. Solid relies on the same compile-time approach for capitalized component calls, conditional checks, or spread merges, simply swapping out the actual creation functions.

Listeners learn that by abstracting away the platform-specific code, Solid easily adapts to alternative environments—whether that’s Node.js for SSR or even custom platforms like WebGL. The speaker emphasizes that reusability and consistency remain paramount, as the same reactivity code can run in multiple targets. This design helps unify development patterns while letting each environment optimize according to its distinct performance profile.

### 01:00:00 - Hydration and Markers for SSR

Now the focus settles on server-side rendering (SSR) and how Solid handles hydration. The speaker describes how initial HTML is produced on the server, then hydrated on the client by matching markers that identify dynamic segments. In many frameworks, separate code paths handle these two stages, but Solid merges them—hydration simply becomes the “first pass” in a shared codebase.

He explains how comment markers help the compiler identify chunked ranges for expressions that might have variable lengths. Once locked in, reactivity resumes as if the DOM had been created fresh. The conversation clarifies that adopting a universal approach cuts down on code duplication, ensuring smaller bundle sizes and straightforward transitions from server-rendered content to a fully reactive client experience.

### 01:06:00 - Styles, Classes, and Custom Properties

In this segment, the speaker delves into special attribute handling for `style` and `class`. He notes that if the user inlines objects, the compiler can detect which keys are static or dynamic. By splitting them, it minimizes re-checks for properties that never change. Similarly, class lists benefit from this approach, removing the overhead of re-diffing arrays if a single boolean toggles.

He acknowledges some complexities around merging `class` and `classList`, explaining that Solid tries to simplify these two variants. The segment underscores how the library gives direct toggles for dynamic classes without rerunning large map operations. This approach merges user convenience—like passing object-based classes—with optimized, partial updates. Both novices and seasoned developers benefit from such an automatic distinction, staying close to standard JSX while avoiding manual watchers or conditional logic.

### 01:12:00 - Advanced Compiler Tricks and Partial Evaluations

Here, the speaker highlights how Solid’s compiler can also detect fully static expressions that are declared as constants in user code. By leveraging Babel’s `evaluate` feature, the compiler may resolve some JavaScript at build time. This means inlined constants or trivial computations become simple strings with no runtime overhead. He points out that a common scenario is inlining CSS or environment-based values, benefiting from precomputation.

The speaker mentions the complexities of ensuring that only expressions confidently known to be constant are folded. Overeager inlining might break code expectations. Nonetheless, these advanced tricks reflect the depth of optimization possible when a framework invests in robust compile-time analysis. It all ties back to Solid’s fundamental principle: do the minimal necessary work in every scenario, from rendering to data binding.

### 01:18:00 - Comparisons with Svelte and Others

Approaching the next topic, the speaker compares Solid’s compilation approach to Svelte, noting that Svelte similarly eliminates a virtual DOM by analyzing templates. He draws out distinctions in how reactivity is declared, highlighting Svelte’s `$:` syntax or its single-file approach. Meanwhile, Solid leans on JavaScript expressions within JSX, which some find more natural if they are already familiar with React or TS-based tooling.

He also references how each library handles SSR. While both strive for minimal overhead, Svelte might carry separate hydration logic. Solid’s single universal pass can produce smaller bundles. The conversation underscores that each tool has its pros and cons, but Solid stands out for its granular approach to signals and the advanced, expression-level optimizations built into the compiler pipeline.

### 01:24:00 - Reactivity Boundaries and Ownership Graph

During this section, he reiterates how Solid enforces reactivity boundaries only where needed, creating a smaller footprint. He describes a scenario where a list of items updates only the relevant row, thanks to signals associated with each row’s data. No additional code is required to isolate changes, because the library’s architecture is inherently localized.

He expands on the “ownership graph” concept: components represent top-level scopes, with nested scopes forming naturally for loops or conditionals. Each child scope cleans up automatically upon removal, preventing memory leaks. By comparing this to some older libraries that rely on big watchers or subscription overhead, the speaker frames Solid’s approach as distinctly modular and more efficient. It fosters clarity in large apps since each reactive piece remains neatly contained.

### 01:30:00 - Node Traversal, Templating, and Efficiency

Here, the talk goes into how Solid compiles complex DOM structures by walking through each element, child, and expression. The framework decides whether to create a marker, insert text, or skip certain nodes if no reactivity is present. This node traversal logic ensures minimal redundancy. For instance, if a block contains only static text, the compiler doesn’t add watchers or placeholders.

He mentions the synergy with rollup or bundlers, where any leftover code can often be pruned if not used. Such synergy further shrinks final output, important for maintaining quick load times. Solid’s compile pipeline thus seamlessly merges textual analysis, node creation, and bundler optimizations—a testament to the library’s thorough, cross-stage design. Even specialized tasks, such as event delegation, slip into this pipeline gracefully.

### 01:36:00 - Framework vs. Library: The Philosophical Divide

Turning philosophical, the speaker recounts a debate over whether Solid qualifies as a framework or library. He notes that React once famously insisted it was “just a library,” yet it continues to grow features typically associated with full frameworks. Meanwhile, Solid started with a narrower, more reactive focus but now provides the building blocks needed for routing and SSR.

The essential distinction remains somewhat subjective. He suggests that for day-to-day usage, the label matters less than whether a tool meets the developer’s needs. The conversation references multiple angles on the topic, including how new developers might prefer a “batteries included” approach, whereas experienced teams often want modular picks. It reflects an ongoing community conversation about default choices, recommended patterns, and how best to onboard newcomers.

### 01:42:00 - JSX Standardization and No-Build Dreams

During these minutes, the speaker addresses recurring calls for “browser-native JSX” that eschews build steps. He explains how that would conflict with the advanced transformations Solid depends on, from expression wrapping to partial hydration. The conversation touches on occasional experiments in frameworks or browsers to parse JSX directly, yet none truly replicate the compile-time nuance.

He characterizes no-build as appealing in principle but ignoring the fact that high-performance or sophisticated features often rely on compilation. By example, he notes how partial evaluation and AST checks can slash runtime overhead. The segment leaves listeners with the sense that while devs may dream of zero config, the next wave of complexity demands integrated tooling. Solid’s compiler simply extends that principle for reactivity and SSR.

### 01:48:00 - Astro 2.0, Vite, and the Broader Ecosystem

The speaker next highlights the release of Astro 2.0, connecting it to the universal acceptance of Vite as an underlying tool. He praises Astro’s content collections and incremental static rendering, emphasizing how front-end frameworks now consider both dynamic and static site needs. By referencing Astro’s flexible approach, he shows that “islands architecture” or partial hydration is gaining traction across many frameworks.

He then mentions how all these modern frameworks, from Nuxt in the Vue ecosystem to SvelteKit, rely on Vite to streamline dev and build steps. This synergy fosters a more cohesive environment, easing cross-framework comparisons or migrations. Listeners see how Solid fits into that bigger picture, leveraging Vite for Solid Start and further bridging the gap between small library and robust meta-framework.

### 01:54:00 - Moving Away from Create React App

Attention moves to how React’s official stance has shifted away from Create React App (CRA). The speaker cites tweets and community discussions that revolve around recommending Vite or adopting “complete frameworks” like Next or Remix. He acknowledges that many large companies once started with CRA, which may have outlived its initial usefulness.

He points out the friction of deciding whether React should pick a single “blessed” tool, given the ecosystem’s size and diversity. While some argue for “just use Next,” others want a simple, neutral starting point like Vite. This context resonates with how Solid Start positions itself as an opinionated setup around SolidJS, demonstrating that no ecosystem remains static—tools adapt to solve modern challenges like SSR, file-based routing, or server components.

### 02:00:00 - Andrew Clark’s Framework Recommendations

Here, the speaker references Andrew Clark’s comments suggesting that React developers should adopt a framework from the get-go, particularly for SSR or advanced routing. He notes how this aligns with React’s shift toward an integrated solution for real-world needs, contrasting older times when React prided itself on minimal prescriptiveness. The potential official endorsement of Next or Remix marks a significant pivot.

The speaker explains how these opinions reflect a changing front-end environment, where developers often expect routing, data fetching, and server integration. Simplistic setups can become unwieldy for non-trivial apps. A tension emerges: older devs recall the joys of custom config, but new devs want a cohesive solution. This tension drives heated debates, from those lamenting the demise of small-libraries ethos to others celebrating increased synergy.

### 02:06:00 - Library Ecosystem Challenges and Hooks

During this phase, the talk touches on how each major shift in React—especially the introduction of hooks—affects third-party libraries. Some developers who built custom state or effect solutions found themselves displaced or forced to adapt. The speaker compares that to Solid, where signals and effects are core from day one, removing the need for alternate state management solutions.

He then acknowledges how advanced features like server components may again reshape how libraries integrate with React. The interplay between official and third-party solutions can breed fragmentation or new creativity, depending on community response. The conversation stands as a reminder that no ecosystem remains static—everyone from large enterprise providers to open-source hobbyists reacts to these changes in real time.

### 02:12:00 - Phases of Technology and Potential Disruptions

The speaker references a cyclical pattern where a library disrupts older solutions, forms an ecosystem, bundles up best practices, and eventually spawns new challengers. He cites how React unseated AngularJS, how Next grew from React’s ecosystem, and how new libraries like Solid might, in turn, unseat some older paradigms. This cycle sparks innovation but can also cause friction for teams maintaining large codebases.

He outlines how technology maturity leads to frameworks absorbing once-external roles. Then new libraries appear with more specialized solutions, starting the cycle anew. Listeners grasp that modern JavaScript, with its wide array of bundlers and frameworks, thrives on continual evolution. The speaker sees these cycles less as churn than a steady upward progression, with the biggest leaps often emerging from fresh approaches to reactivity or compilation.

### 02:18:00 - Productive Debates on React’s Future

In these minutes, the speaker revisits the ongoing community debates about React’s future direction. He highlights how some devs prefer a single, officially sanctioned approach to kill confusion, while others cherish the wide range of ecosystem choices. He cites discussions on Twitter where a chunk of users strongly back Next, while another segment insists that more neutral scaffolding is necessary.

He concedes there is no single right answer, referencing small apps that genuinely benefit from minimal overhead, and large enterprises that welcome a robust, opinionated framework. The speaker suggests that these conversations aren’t about fracturing React but refining how teams spin up projects, onboard juniors, or scale codebases. Ultimately, it’s a sign of healthy growth in an ecosystem with diverse requirements.

### 02:24:00 - Memoizing Conditions and Sub-Component Boundaries

Returning to Solid specifics, the speaker dissects how advanced memoization for conditionals eliminates repeated checks. By storing a condition’s outcome in a memo, subsequent renders skip reevaluation if the underlying data remains unchanged. He points out that this technique is often done manually in other libraries, but Solid streamlines it into the compiler logic.

He also mentions sub-component boundaries, which typically isolate concerns. For instance, each segment of UI can rely on its local signals, ensuring changes do not spill over. The discussion circles back to how well-chosen heuristics prevent unnecessary computations. Listeners learn that Solid’s developer ergonomics arise not from magical black boxes but from carefully analyzing each JSX pattern and mapping it to minimal runtime structures.

### 02:30:00 - The Myth of JavaScript Framework Churn

Here, the conversation tackles a common claim that the JavaScript ecosystem experiences incessant framework churn. The speaker argues that, historically, major changes—like moving from AngularJS to React—are rarer than people recall. Once a framework reaches maturity, it often persists for many years, with large companies reluctant to rewrite code wholesale unless absolutely necessary.

He suspects the perception of churn stems from a continuous flow of smaller libraries or new ideas that never truly hit mainstream adoption. Meanwhile, widely used frameworks like React, Vue, or Angular maintain long release cycles that rarely force major rewrites. The speaker acknowledges that smaller players, including Solid or Svelte, face skepticism, yet encourages an understanding that stable usage can span well beyond short hype cycles.