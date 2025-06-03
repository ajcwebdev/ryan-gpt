---
showLink: "https://www.youtube.com/watch?v=ZVKHxm1-g3E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidScript?! Using Compilation for Syntax"
description: ""
publishDate: "2022-03-19"
coverImage: "https://i.ytimg.com/vi/ZVKHxm1-g3E/sddefault.jpg?v=623434dd"
---

## Episode Description

SolidJS creator Ryan Carniato explores different approaches to JavaScript compilation and syntax, reflecting on performance, frameworks, and the evolving future of web development.

## Episode Summary

In this conversation, the speaker focuses on how JavaScript frameworks have grown beyond traditional runtime-based approaches, highlighting emerging compiler-driven techniques for performance optimization and developer ergonomics. He discusses the motivations behind creating new syntaxes, describing how reactivity and compile-time transformations can enrich both the programming model and the end-user experience. The talk spans various solutions, from plugins that simplify destructuring in Solid, to broader reflections on whether reactivity might one day become part of the JavaScript language itself. Throughout, there are references to the potential of streaming for server-side rendering, the complexities of type systems, and the potential tension between constraints and flexibility. The speaker emphasizes the importance of strong developer experiences, acknowledging that while raw performance is achievable with low-level techniques, frameworks aim to combine that efficiency with intuitive, enjoyable patterns. He ends by suggesting that, though no single solution is perfect, the ongoing innovation in compilation, reactivity, and design signals an exciting future for the JavaScript ecosystem.

## Chapters

### 1:42:00 - Elm, Inba, and Other Compiled Languages

Turning to historical context, Ryan points out that Elm was one of the earliest compile-to-JavaScript languages focusing on a purely functional architecture. Its use of signals paved the way for frameworks that treat data flow as a first-class concept. He also mentions Inba and other lesser-known languages that explored novel syntaxes or compilation strategies well before Svelte or Solid became popular.

He explains that these pioneers often had strong ideas about purity or strict immutability, which appealed to academic or niche communities but never reached the mainstream. However, they influenced the broader ecosystem, showing how advanced compilation can yield better performance or clarity. Ryan appreciates these projects for pushing boundaries, even if they never eclipsed the bigger frameworks in adoption.

### 1:48:00 - The Joy and Challenge of Creating a Language

Ryan briefly delves into the complexities of building an entirely new language from scratch. He cites a humorous article stating that once you do it, you can never see other languages the same way again. He emphasizes that infinite decisions exist around syntax, semantics, and toolchain support, all of which can become overwhelming. Nonetheless, the real reward lies in learning what’s possible and, occasionally, introducing a feature that truly revolutionizes how people code.

He acknowledges that only a fraction of experimental languages or compilers catch on, as happened with Elm’s functional emphasis or Svelte’s approach to compile-time reactivity. Yet each foray expands collective knowledge. Ryan admires those who attempt such ambitious projects, seeing them as essential stepping stones for the future of web development.

### 1:54:00 - Community Innovation and Boundless Possibilities

In these minutes, Ryan celebrates the open-source community’s creative energy. He lists various plugin authors who reimagine the way we interact with frameworks, implementing novel transformations for destructuring, reactivity, or advanced SSR. These innovators may start with a personal itch to scratch—like wanting to name signals with a specific pattern—only to discover that dozens of other developers share the same preference.

He emphasizes that the community’s capacity to refine, combine, or discard ideas fosters a healthy environment where no single approach dominates. This dynamism ensures that if a concept has real merit, it can gain traction quickly. Conversely, if a technique proves too convoluted, the feedback loop typically halts its adoption. The result is a living ecosystem that continuously experiments while organically filtering out less promising paths.

### 2:00:00 - Contrasting HTML-First vs. JS-First Paradigms

Ryan compares the approach that starts with an HTML template and embeds scripting (as seen in Marco or Svelte) against the style that primarily uses JavaScript syntax but can output or transform templates (such as Solid or React). Both strategies carry advantages: HTML-first appeals to those comfortable with web standards, while JS-first can seem more natural to developers with a coding-centric mindset.

He discusses how certain designers and content authors find an HTML-centric viewpoint more intuitive, while deeply technical developers might prefer code for everything. These differences shape how each framework’s user base evolves. Ryan sees such dual philosophies as crucial for meeting the vast variety of developer backgrounds. Neither side is strictly “right”; they address different instincts and workflows.

### 2:06:00 - The Role of TypeScript in Compiler Experiments

Here, Ryan explores how TypeScript factors into new syntax experiments, observing that earlier attempts in other frameworks sometimes struggled with static analysis. For example, advanced transformations occasionally confused TypeScript’s type checker, leading to cryptic errors or lost type information. However, he praises recent plugins in the Solid ecosystem for carefully respecting TypeScript’s boundaries, generating code that the compiler can follow.

He believes the synergy between advanced compilation and robust type systems will only grow. This opens up interesting possibilities for integrated dev tools, where type intelligence can automatically detect a reactive variable or a function that modifies a signal. In a best-case scenario, developers gain both the power of advanced reactivity and the clarity of strong typing without major friction.

### 2:12:00 - Integrating CSS and Scoped Styling via Compilation

Addressing a related area, Ryan highlights “solid-styled,” a solution that allows scoped styling within a single file using tag template literals. He notes how compile-time scoping can produce minimal or zero runtime overhead, reminiscent of Svelte’s or styled-jsx’s approach. By tying styles directly to components, developers avoid naming conflicts and can easily reason about how styles cascade.

He underscores that while not every project needs advanced CSS scoping, frameworks that offer it open doors for large-scale applications with intricate style requirements. Compilation again plays a role here: the transform can automatically rename classes or handle server-side rendering of critical styles. This thematic link illustrates a broader trend: nearly every aspect of frontend development, from data flow to styling, can be improved by compiler awareness.

### 2:18:00 - Single-File Component Patterns

Ryan moves on to single-file components and how “solid SFC” experiments unify scripts, styles, and templates. Unlike React’s preference for keeping logic and markup in the same file, or Svelte’s script/style/template blocks, these new plugins attempt to find an even more flexible structure. Some developers love the idea of top-level code that implies instance scope, while others find it disorienting.

He mentions how an SFC approach can do away with import statements for reactivity or styling, relying on the compiler to identify relevant code. This might reduce boilerplate, but also hides some mechanics from the developer. He stresses that such trade-offs require a mindful approach to debugging, ensuring that though code is “convenient,” the team understands how each piece truly works behind the scenes.

### 2:24:00 - Co-Location of State and Templates

In this section, Ryan delves into how advanced compilers let you declare state directly within loops or conditionals. He brings up the Marco example where you can embed data logic precisely where you need it, making state manipulations hyper-local. The idea is to simplify code extraction, so if you want to break out a snippet into a standalone component, you simply copy the relevant block.

He contrasts this with frameworks requiring rigid separation of logic and template syntax. While that separation can be instructive, it sometimes forces unnatural code splits. The ability to place logic exactly where it’s used fosters better maintainability in certain cases, especially for large teams. Ryan sees these micro-level improvements as signs that compile-time solutions are maturing beyond simplistic “toy” examples.

### 2:30:00 - Big Picture: Performance vs. Ergonomics

Returning to a bigger perspective, Ryan reiterates that if raw performance were the sole goal, developers could stick to low-level JavaScript or even WebAssembly. Frameworks matter for developer ergonomics, uniting easy mental models with efficient rendering. He explains that each new experiment tries to reconcile these two forces: how to keep code short, expressive, and readable without sacrificing performance.

He then mentions that frameworks like Solid and Svelte remain at the center of many innovative conversations because they illustrate radical changes to mainstream patterns. These debates draw both curiosity and skepticism, leading some to see them as “complicated.” Ryan believes that as documentation and patterns stabilize, more developers will discover that compiler-driven or hybrid approaches can be both fast and straightforward.

### 2:36:00 - Standardizing Versus Innovating

Touching on the tension between standardization and innovation, Ryan notes that web standards move slowly for good reason. The success of frameworks often depends on pushing boundaries ahead of what official specs allow, eventually influencing them down the road. He offers examples like earlier template proposals that never became mainstream, partly because the ecosystem was already sprinting ahead with custom solutions.

He reaffirms that while it’s tempting to add widely used features like JSX to the browser by default, the specification process is delicate. If it’s done prematurely, it could hard-code design decisions that hamper future frameworks or lock out new optimizations. Ryan sees the partnership between standards bodies and open-source frameworks as a dance: frameworks test the waters, and if something proves indispensable, it might be considered for standardization later.

### 2:42:00 - Ongoing Research into Compilation

Ryan reflects on how front-end compilation still has untapped potential. Even simple transformations like removing unused code can yield big performance wins. But new territory includes analyzing not just code usage but also dynamic behaviors to tailor bundles. He mentions how partial hydration or server-guided rendering decisions represent next-level compilation logic.

He hopes that more sophisticated analyzers may one day read an entire app’s flow—both server and client—to produce an even more optimized build. Yet, with greater complexity, frameworks must remain vigilant about developer experience. Balancing next-gen optimization with transparent debugging and clear mental models remains the essential challenge.

### 2:48:00 - Revisiting Real-World Examples

Here, Ryan circles back to tangible case studies like e-commerce platforms or SaaS dashboards, emphasizing how streaming and partial hydration can drastically cut time-to-interactive. He recounts further anecdotes from developers who rewrote major pages with these techniques, often slashing load times and complexity. Such success stories complement the earlier conceptual explorations, proving that advanced compilation strategies aren’t just theoretical.

He shares that, in his view, performance-laggard sites often get stuck on older libraries or incomplete patterns. By learning from frameworks like Solid, Svelte, or Marco, they can skip entire upgrade cycles and adopt thoroughly modern, compiled architectures. This injects excitement into the conversation, revealing that real-world transformations often surpass the hype.

### 2:54:00 - The Learning Curve and Future Refinements

Ryan acknowledges that adopting cutting-edge compiler features can create a learning curve, especially for those coming from well-established libraries. Community examples, tutorials, and tool-specific guides are vital for turning curiosity into skill. Over time, stable patterns emerge, bridging the gap between new innovations and the comfort of established best practices.

He envisions a future where frameworks host official “compiler recipes,” enabling users to turn on specific transformations—like destructuring or label-based signals—on demand. This modular approach could let developers pick whichever style they find intuitive. However, it also underscores that frameworks won’t converge on a single “correct” method; variety serves the diverse needs of the industry.

### 3:00:00 - Interplay of Developer Freedom and Guardrails

In this chapter, Ryan clarifies that the freedom to radically shape your code with transformations is both empowering and risky. More advanced compilers can obfuscate logic if used without discipline or robust debugging. Conversely, strict constraints, such as Svelte’s single-file format, can help novices avoid pitfalls but might limit advanced composition.

He encourages developers to weigh project requirements before leaning into heavy compiler magic. For small apps or prototypes, flexible syntaxes can accelerate creation. In large codebases with multiple teams, too much “invisible rewriting” might hamper onboarding or collaboration. Thus, the best approach depends heavily on context, team skill sets, and long-term maintenance plans.

### 3:06:00 - Revisiting Streaming and SSR Momentum

Ryan returns to server rendering and streaming, underscoring that these remain hot areas for immediate improvements. He notes that SSR is still “a two or three out of ten” in terms of how far it can be taken. Rather than rely on partial or full hydration, some frameworks are exploring how to integrate streaming seamlessly with concurrency.

He suggests that over the next few years, we’ll likely see a major leap in SSR innovation. Whether it’s new fine-grained partial hydration or chunk-based streaming, the result will be more responsive user experiences across varied network conditions. This direction also dovetails with the rising interest in edge computing, pushing rendering closer to users for additional performance gains.

### 3:12:00 - Personal Focus and Upcoming Work in Solid

Ryan shares that while these advanced syntax experiments fascinate him, his current priority is enhancing server-side features within the Solid ecosystem. Projects like Solid Start aim to bolster SSR and streaming capabilities, bridging the gap between conceptual prototypes and polished developer tooling. He hints at soon unveiling new features that handle SSR with less friction, promising demonstrations in future streams.

He frames this focus as part of Solid’s next evolutionary step, building a robust scaffolding for real production apps. This underscores that while experimentation is vital, frameworks eventually consolidate around stable features to meet industry demands. Ryan’s enthusiasm for upcoming releases suggests a roadmap where syntax breakthroughs and SSR improvements converge.

### 3:18:00 - Reflecting on Iterative Progress

In these minutes, Ryan gathers his thoughts, highlighting how far the community has come. He comments on how benchmarks, once solely about raw rendering speed, now often revolve around developer experience, streaming, or SSR patterns. Discussions have matured beyond “faster is better” to include how frameworks handle typed code, integrate with CSS, or adopt partial hydration. This layered complexity can feel overwhelming, yet it also reveals the vitality and diversity of modern JavaScript development.

He is encouraged that the frameworks continue to borrow from and refine one another’s ideas, fueling incremental improvements across the board. Although it may appear chaotic from the outside, he sees it as iterative progress that steadily lifts all boats. As more patterns become mainstream, complexities transform into standard practice, simplifying life for future developers.

### 3:24:00 - Closing Thoughts and Appreciation

In the final moments, Ryan thanks the audience for staying through the extensive conversation. He reiterates his admiration for the creativity driving forward compiler research, streaming technology, and diverse syntax approaches. Though no single path is universally perfect, each framework or plugin offers valuable lessons.

Ryan encourages viewers to keep experimenting, adopting new techniques at their comfort level while sharing feedback with the community. He hints that future streams and releases will show further progress in Solid’s SSR pipeline and possibly new syntax ideas. Signing off, he expresses gratitude for the supportive community that makes these explorations both enlightening and enjoyable.