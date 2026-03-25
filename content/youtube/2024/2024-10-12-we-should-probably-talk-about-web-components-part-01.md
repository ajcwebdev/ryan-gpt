---
showLink: "https://www.youtube.com/watch?v=0F9t_WeJ5p4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "We Should Probably Talk about Web Components"
description: ""
publishDate: "2024-10-12"
coverImage: "https://i.ytimg.com/vi/0F9t_WeJ5p4/maxresdefault.jpg"
---

## Episode Description

A wide-ranging livestream discussing the complexities of web components, their history, compatibility challenges, and how they intersect with modern JavaScript frameworks.

## Episode Summary

This extended conversation explores the intricate details of web components, from fundamental specifications like custom elements and shadow DOM to the everyday realities of framework integration, performance considerations, and versioning. Early on, the speaker sets the stage by examining how web components emerged, touching on initial promises and the subsequent practical hurdles faced by framework authors. The discussion then branches into real-world examples of attribute handling, event delegation, and server-side rendering complexities. We also hear about ongoing work to resolve these issues, including changes in library design and platform standards. Throughout, the speaker compares historical approaches and new ideas shaping the modern web, all while reflecting on how development teams navigate competing priorities such as maintainability, browser performance, and user experience. By the end, listeners gain a thorough perspective on the debate around whether web components truly serve as a universal solution—or if they introduce as many challenges as they aim to solve.

## Chapters

### 00:00 - 06:00 — Opening Remarks and Context

In this opening segment, the speaker greets the audience with a casual tone, setting the stage by joking about a beverage and how it connects to broader internet culture references. They share updates about personal circumstances, like sipping a new kind of drink or noticing how time passes in streaming sessions. This relaxed environment quickly shifts toward the main theme: a genuine interest in web components and a desire to address their role in front-end development. The speaker anticipates that this discussion might spark debate, and they invite listeners to keep an open mind.

Here, the speaker recounts an earlier blog post that unexpectedly stirred discussion about web components within the developer community. They reflect on similar articles they wrote several years ago, remarking that the same issues about promise versus practicality continue to resurface. This backdrop establishes the idea that technology moves forward, yet many fundamental questions—like how best to implement or standardize features—remain consistent. The speaker lays out the goal for this stream: to provide a high-level overview, share anecdotes from day-to-day coding, and engage with audience questions about whether web components truly fulfill their lofty ambitions.

### 06:00 - 12:00 — Initial Web Components Impressions

In this segment, the speaker explains the core promise of web components: a standardized way to encapsulate and reuse custom elements. They briefly recall excitement from early adopters who believed these specs would revolutionize how we structure front-end code. The conversation touches on how early hype suggested web components might mitigate framework churn and protect large teams from costly rewrites. The speaker acknowledges this optimism but foreshadows the nuance behind the concept, emphasizing that reality often diverges from initial visions.

Listeners learn that while the fundamental building blocks—custom elements, shadow DOM, and template elements—offer theoretical cross-framework interoperability, complexities soon emerge. The speaker highlights ongoing community debates, showcasing a pattern where supporters praise the standards approach, yet frameworks each have their own specialized layering on top of the DOM. There is also mention of how some major companies use web components in isolated or organizationally necessary scenarios, suggesting that scale can mandate certain choices. These reflections introduce the idea that actual adoption varies widely based on context.

### 12:00 - 18:00 — Revisiting an Old Article

Here, the speaker reads portions of a personal blog post from 2018, originally penned during an earlier phase of JavaScript framework evolution. The audience hears about the period when React had become a dominant force, Angular underwent radical changes, and Vue was on the rise. Within this climate, web components appeared poised to be a stable foundation that transcended ephemeral trends. The speaker clarifies that at the time, they believed in bridging frameworks with native elements, seeing it as an elegant solution.

However, as the speaker re-examines their own text, they note how opinions have shifted with hands-on experimentation. The notion that knockout-based architectures or minimal “bring your own framework” solutions would neatly wrap into custom elements proved more complex in long-term practice. The complexities stemmed from attributes, event handling, and the cost of bridging external reactivity systems. This recollection underscores how real-world use reveals hidden gotchas, even in standardized features. The speaker teases that the stream will continue delving into these pitfalls and potential workarounds.

### 18:00 - 24:00 — Shifting Perspectives Over Time

During this portion, the speaker reflects on the evolutionary path from the earliest days of web components to present-day frameworks like Svelte, Vue, and Solid. They clarify that many modern libraries initially tried to embrace custom elements but encountered friction. The speaker repeatedly uses the example of how frameworks manage reactivity, explaining that while web components might appear straightforward, subtle lifecycle issues add complexity. Mention is made of the shifting mental models around signal-based reactivity, and how that tested assumptions about standard DOM operations.

The speaker also recounts efforts in different communities to unify component definitions—only to see them diverge for performance or ergonomic reasons. They highlight that even though the concept of a “universal custom element” is appealing, the finer details of framework-level composition, data binding, and SSR matter enormously. There is a realization that whenever you abstract away core logic for reuse, new challenges surface. This sets up an ongoing tension: web components do solve certain organizational problems, yet they may not be the ultimate cure-all.

### 24:00 - 30:00 — Community Debates and Standards Bodies

In this timeframe, the speaker recounts interactions with various community members and standards contributors, including those who actively champion the future of web components. They describe encountering both enthusiasm for a native solution that replaces many tasks previously offloaded to frameworks, and skepticism that the platform should be so prescriptive. Experiences with polyfills, cross-browser support, and long deprecation cycles are mentioned to underscore why the standards route can feel cumbersome.

Nonetheless, the speaker acknowledges the importance of standardization. They laud the dedication of those who unify large companies, such as Google and Apple, around a single specification. But they point out that decisions made without direct involvement of diverse framework authors can lead to features that fundamentally clash with the operational models of modern libraries. The speaker notes that a lack of direct collaboration sometimes resulted in solutions that solve one set of issues while complicating others. This segment concludes by reinforcing the value of open dialogue.

### 30:00 - 36:00 — Real-World Company Use Cases

Here, the speaker provides anecdotal evidence of large-scale enterprises—like Microsoft, Salesforce, and eBay—that rely on web components to unify massive front ends composed of different technologies. By implementing custom elements as shared building blocks, these organizations can enforce consistent design systems across teams, even when each product area uses a separate stack. The speaker clarifies that for such sprawling ecosystems, the main benefit is isolation and a contractual API surface rather than micro-optimizing performance or developer convenience.

However, they caution that while micro front-end architectures solve certain immediate headaches, they can also entrench older code over time. Upgrading a shared component library can become laborious, leading to version fragmentation if different teams adopt updates at varying paces. This scenario aligns with the idea that a universal approach might simplify initial integration but magnify long-term maintenance issues. The speaker underscores that these are legitimate trade-offs rather than outright failures, and whether you call it a success depends on each company’s goals and constraints.

### 36:00 - 42:00 — Examining Promises of “Future-Proofing”

During this phase, attention turns to the assertion that web components provide a “future-proof” solution, insulating projects from the churn of JavaScript frameworks. The speaker dissects this claim, asserting that while components themselves remain stable at a specification level, the underlying patterns and best practices evolve. They cite the phenomenon where widely-used libraries like Polymer gave rise to successors like Lit, each introducing new opinions and features. Ultimately, code still demands periodic refactoring.

Listeners are encouraged to consider that no technology, including web components, fully shields organizations from changing standards or new patterns. The speaker humorously references repeated rewrites in the JavaScript community, noting that even minimal or “vanilla” solutions eventually feel the pull of new tooling. In short, the promise of “write once, never worry again” overlooks how design, reactivity, and platform specifics can shift. Rather than expecting an eternal guarantee, the speaker suggests adopting technologies with open eyes and recognizing likely upgrade paths.

### 42:00 - 48:00 — The Attribute vs. Property Dilemma

In this segment, a concrete technical concern takes center stage: how frameworks handle HTML attributes versus DOM properties for passing data to web components. The speaker outlines how attributes must be strings, while properties allow for various data types. This reveals potential SSR complications and confusion about naming conventions, especially with Boolean or camelCased properties. They mention that advanced templating systems like Lit or compiler-driven frameworks solve this with extra syntax or detection logic.

Yet, these strategies bring overhead. Each library must keep track of which attributes to mirror as properties and how to handle special cases such as reflection. For pure web component authors, the burden is ensuring their element code gracefully supports both approaches. The conversation expands into SSR, explaining how attributing everything as strings can hamper reactivity, requiring either runtime parsing or missing state on the server. The speaker presents this as evidence of deeper friction between native element design and robust framework features.

### 48:00 - 54:00 — Lifecycle Nuances: Upgrade Timing

Attention shifts to the timing of when custom elements “upgrade,” or when the browser recognizes a declared element as a web component with specific class logic. The speaker walks through a scenario where the element might be placed in the DOM but not yet fully initialized, leading to properties set too early. This asynchrony can break reactive patterns that frameworks rely on for consistent state. The conversation notes that some libraries overcame this by using `importNode` over `cloneNode`, though that introduced separate performance hits.

Listeners hear how these lifecycle quirks ripple across entire codebases. The speaker highlights that bridging reactivity requires guaranteeing synchronous or carefully orchestrated updates, clashing with how the platform ascribes an upgrade microtask. There are also mention of unusual hacks, such as scanning for un-upgraded elements post-insertion, or storing default attribute values to reapply. The segment underscores that no single “one-size-fits-all” fix exists, as each approach has a cost. As the speaker reiterates, these pitfalls often surprise developers who assume native solutions just work seamlessly.

### 54:00 - 1:00:00 — Event Delegation Challenges

Here, the speaker tackles another major sticking point for frameworks: event delegation. They describe how many modern libraries rely on a single top-level listener to handle clicks or focus changes, boosting performance and enabling advanced features like replaying events for partial hydration. Once shadow DOM enters the picture, though, certain events do not bubble beyond the boundary, or their target is retargeted, appearing as if everything inside is a single node. This behavior complicates logic that tracks precise child elements.

To illustrate, the speaker shares real examples of focus events failing to register transitions between different buttons within the same shadow root. They also discuss how `composedPath()` can help but still leaves some corner cases unsolved. The segment then references forms and how submit events might need manual composition, highlighting that the platform’s design aims for encapsulation. Yet, frameworks often want infiltration for advanced routing or hydration. The tension between strong encapsulation and cross-component integration is once again front and center.

### 1:00:00 - 1:06:00 — Maintaining Context and State

Listeners now hear about the difficulties in passing context—such as user info or theming data—down a component tree when web components might upgrade asynchronously. Frameworks like React or Solid rely on synchronous rendering hierarchies, but in a shadow DOM environment, an element might attach itself at a later time, missing the parent’s context injection pass. The speaker cites solutions such as event-based context, where child components dispatch an event that climbs up the DOM to find a provider.

While this event-based approach can work natively, it diverges significantly from typical JS framework patterns that revolve around React-like context providers or signal-based systems. This indicates that a truly “universal” method of passing data in web components may not align with standard library internals. The speaker highlights that each library’s SSR or hydration model further complicates matters. Ultimately, bridging these patterns leads to either specialized handling or acceptance that different worlds remain partially isolated, underscoring the complexity of mixing native and library-driven solutions.

### 1:06:00 - 1:12:00 — Reactivity Systems Meet the DOM

In this chapter, the speaker dives deeper into reactivity, illustrating how solutions like signals or proxies in frameworks can conflict with the notion of a custom element that is only partially aware of changes. They provide an example of a web component that runs logic in its constructor, only to discover that signals have not yet fully attached. The speaker also references short stories of building bridging code that had to untrack or manually force an update at the right moment.

These anecdotes highlight that each approach—be it a small library or a full-blown reactivity engine—must adapt to the timing intricacies of custom elements. For instance, a developer might assume that reading a signal in connectedCallback is safe, only to discover that the upgrade logic fires at a moment that leads to repeated re-renders or missed subscriptions. While advanced libraries can implement fallback strategies, the speaker emphasizes that each patch or hack broadens the code complexity for something that was pitched as a native, simpler solution.

### 1:12:00 - 1:18:00 — Versioning Woes and Multi-Framework Scenes

Next, the discussion examines how organizations that rely on multiple frameworks within a single large site handle version drift. Web components are sometimes championed as a solution to unify code across React, Vue, or Angular, but the speaker points out that each element can also bring along different versions of underlying libraries like Lit or Solid. Over time, a site might inadvertently ship multiple copies of similar code, ballooning bundle size.

Additionally, the speaker notes that rewriting a shared library from version 1 to version 2 is not trivial when dozens of teams depend on its stable API. If not carefully managed, fragmentation occurs, leading to parallel development on older iterations. While the “native” aspect might sidestep certain framework migrations, it cannot escape the universal challenge of upgrades. This reminder underscores that standardizing a low-level DOM interface does not inherently unify or reduce complexity at scale without robust processes in place.

### 1:18:00 - 1:24:00 — Micro Frontends as a Parallel

During these minutes, the speaker draws parallels between micro frontends and web components. Both can be viewed as strategies to isolate code, limit interference, and enable teams to ship independently. Yet, the speaker acknowledges that while micro frontends might appear beneficial for immediate organizational needs, they carry a tax in the form of version misalignment and extra overhead. This cost is not easily avoided, whether using custom elements or other approaches.

The speaker recounts seeing real-world micro frontend architectures that worked for years but eventually led to painful transitions when trying to introduce or unify new design patterns. They emphasize that while web components can reduce the friction of mixing frameworks, they do not inherently solve deeper issues of building a cohesive product. Those aspects remain developer responsibilities: version control, coordinated releases, and auditing performance. Summarily, web components can be part of a micro frontend story but are not a turnkey fix.

### 1:24:00 - 1:30:00 — Philosophical Divergence: “Is vs. Is Not”

Here, the conversation touches on a recurring rhetorical shift in the community. Proponents sometimes claim web components can replace frameworks, then minutes later assert that web components never intended to solve the same scope. The speaker sees this as a contradiction, fueled by the broad meaning of the term “component.” It surfaces in arguments about templating, composition, or the difference between a fully featured library and a minimal base spec.

By scrutinizing blog posts and social media threads, the speaker highlights how the same individuals might position web components as future-proof and also disclaim that they only address small slices of application complexity. This dual stance creates confusion, especially for newcomers hoping for a single, official path. The speaker finds it more honest to concede that web components define building blocks rather than an entire developer experience. In that sense, frameworks remain relevant for advanced state management, routing, and other concerns.

### 1:30:00 - 1:36:00 — The Temptation to Build Templating into the Browser

Talk turns to repeated calls for the platform to adopt a built-in templating language akin to lit-html, with placeholders for dynamic data. The speaker explains that while such standardization might simplify certain usage patterns, it inevitably bakes in specific re-render assumptions. Over time, better performing solutions—like signal-based updates—emerge, making the standardized approach feel suboptimal. This pattern prompts frameworks to bypass the official solution, circling back to the same fragmentation problem.

The speaker underscores that perceived ease of built-in template literals does not necessarily align with the intricacies of reactivity. Efforts to add reactivity into a standard syntax can freeze design decisions, stifling innovation that libraries experiment with daily. They reference historical lessons: early proposals for web components overshadowed potential improvements because once something is codified, it is harder to revise. As a result, many believe the platform’s role should be to provide flexible hooks rather than heavy-handed prescribing of how to manage UI updates.

### 1:36:00 - 1:42:00 — The Lit Example and Re-Render Semantics

By examining Lit as a well-known web component authoring tool, the speaker explores how its rendering approach mostly re-renders a template in response to state changes. They contrast this with fine-grained frameworks, which surgically update the DOM. Each style has trade-offs, but attempting to enshrine re-render-based logic into a standard might hamper more advanced approaches. Hence, the speaker frames Lit as effectively a specialized framework on top of the web component spec, contrary to claims that it’s purely minimal.

They discuss the distinctive syntax used by Lit, like prefixing attributes with dots or question marks for booleans, noting how it deviates from plain HTML. While powerful, it demonstrates that a standard web component solution inevitably accumulates opinions once it addresses real applications. The conversation acknowledges that, for many teams, Lit offers a convenient sweet spot. Yet it remains an optional approach rather than mandated by the platform. This underscores the speaker’s stance that “non-opinionated” is a slippery term once deeper features appear.

### 1:42:00 - 1:48:00 — React 19 and Web Components

During this interval, the speaker notes recent announcements that React 19 aims to improve web component support. They predict that, much like other frameworks, React may run into intricate corner cases. It's seen as a step forward for broader interop but is unlikely to instantly resolve deeper questions around reactivity or attribute reflection. The speaker warns that React’s virtual DOM re-render cycles can collide awkwardly with shadow boundaries, echoing old problems that never fully vanished.

Yet the move is welcomed as it could unify segments of the ecosystem, bringing consistent handling of custom elements. Listeners are reminded that this decision is not purely altruistic: React stands to gain from bridging the gap, especially as corporate usage might demand coexisting solutions. In essence, the speaker concludes that it’s healthy for big frameworks to refine their approach, but such changes often highlight complexities rather than eliminate them. The chapter ends with curiosity about how React will handle deep SSR or event replay.

### 1:48:00 - 1:54:00 — Speed vs. Complexity

Shifting focus, the speaker discusses performance implications. They compare direct DOM manipulation methods—like using `cloneNode` for speed—against alternative or more “correct” approaches such as `importNode` for upgrade awareness. Each library that prioritizes performance tries to exploit the fastest path, yet custom element constraints can force them back onto heavier code. The speaker remarks that it’s an odd scenario where the platform’s recommended usage sometimes conflicts with a desire to produce the snappiest user experience.

They also recall past experiences writing micro-optimizations for reactivity libraries, illustrating how every nuance—like setting `node.data` versus `textContent`—becomes a performance puzzle. The speaker points out that standardizing something like `innerHTML` might cause inefficiencies if the platform’s model demands more overhead for upgrading elements. In the end, much of the conversation loops back to an old theme: advanced frameworks adapt to or circumvent platform details, but they pay a complexity toll. The tension remains unresolved, reflecting how the pursuit of absolute speed rarely aligns with universal specs.

### 1:54:00 - 2:00:00 — Revisiting the Shadow DOM’s Original Goals

In this section, the speaker recounts the original motivations behind the shadow DOM: style scoping and robust element encapsulation. They argue that if the spec had stopped at enabling custom lifecycle hooks and style isolation, it might have been more universally embraced. Instead, the broader push to unify packaging, templating, and module loading introduced confusion. The speaker finds parallels in the conversation around advanced proposals, urging the community not to overreach.

Listeners hear about the distinction between wanting a standard set of low-level hooks for authors versus a grand framework “built into the browser.” The speaker observes that historically, large standard additions like HTML Imports or V0 custom elements faced friction and had to be reworked. The moral is that while robust scoping is valuable, layering on top a fully opinionated rendering model can hamper iteration. This retrospective frames the rest of the talk, which weighs simpler platform primitives against more integrated solutions.

### 2:00:00 - 2:06:00 — The Developer Experience Paradox

Here, the speaker highlights how the developer community often craves simpler solutions that require no build step or minimal tooling. Web components promise that minimalism, yet in practice, frameworks add sugar and reactivity. This results in ironically complicated build chains, especially once TypeScript, SSR, or advanced routing are introduced. The speaker suggests that “buildless” illusions mask deeper complexities moved to either a separate layer or the user’s manual code.

They underscore that illusions of zero tooling quickly evaporate once a team tries to incorporate modern DX staples like hot reloading or CSS modules. At that moment, whether using web components or frameworks, you realize the environment is no longer truly minimal. The speaker contends that many developers want these niceties, so code naturally grows beyond the base platform. While it remains feasible to stick to pure native elements, most real apps eventually adopt a more extensive ecosystem, thereby partially negating the “no build” perk.

### 2:06:00 - 2:12:00 — Complexity Through Organizational Lenses

Turning back to large-scale teams, the speaker delves into the tension between optimizing for best-in-class user performance and simplifying the developer pipeline. They note that every advanced approach, from micro frontends to partial hydration, demands careful engineering. Web components are no different; they do not eliminate organizational overhead but shift it to standard APIs. The speaker remarks that some companies are content with shipping slightly bigger bundles if it means better maintainability across multiple teams.

They also compare how dedicated performance specialists sometimes override broad-scope decisions by building custom bridging solutions. For instance, a specialized bridge might unify React and Solid with fewer conceptual leaps than going all-in on web components, especially if it retains direct JavaScript references. This point underlines that many architectural choices revolve around trade-offs, such as reusability vs. raw speed. The speaker leaves open whether standard native elements or specialized wrappers are the correct call, suggesting context is pivotal.

### 2:12:00 - 2:18:00 — Revisiting “Write Once, Deploy Everywhere”

During this interval, the conversation circles back to a recurring marketing line that custom elements enable a single library of UI building blocks, guaranteeing consistent behavior across frameworks. The speaker concedes it works for purely visual widgets with minimal logic. But once you consider advanced interactions—like integrated routing or form validations—framework-specific constructs intrude. The speaker references older illusions with Shadow DOM forms or advanced stateful components that never fully materialized.

Listeners are reminded that the hardest part of front-end development often lies in an app’s data orchestration, event flow, and SSR story. Web components do not inherently unify these aspects, so the dream of migrating from React to Vue or Solid by dropping in a single shared component library feels overstated. The speaker highlights that while a universal button element might remain stable, entire feature sets revolve around deeper functionality. That reality tempers the “write once” promise significantly.

### 2:18:00 - 2:24:00 — The Reaction to “They’re Not the Future”

Listeners now hear the speaker reflect on the reaction to a blog post titled “Web Components are Not the Future.” They clarify that the piece wasn’t an outright dismissal of the technology but a critique of overstated claims. They reiterate that web components already exist in many codebases, so they’re unavoidably part of the present. However, they raise caution about pushing further expansions in the spec if fundamental issues remain unresolved.

There’s also commentary on how social media often distorts the speaker’s nuanced stance into an all-or-nothing viewpoint. The speaker acknowledges valid points on both sides—some teams see genuine success with custom elements, especially in micro frontends, while framework authors face real friction. The net conclusion is that it’s possible to appreciate the specs for what they do well without advertising them as a universal fix. This chapter ends reinforcing that nuance is key when evaluating technology choices.

### 2:24:00 - 2:30:00 — Standardization vs. Innovation

Here, the speaker details the complicated dance between standards bodies and innovators. They highlight how earlier on, frameworks like React, Angular, or Vue seldom participated deeply in the custom element spec. This left a vacuum filled by teams at Google or Apple who had their own priorities. In some cases, the resulting specs inadvertently locked in decisions that complicated the work of future library authors. The speaker proposes that broad collaboration early on might have yielded more flexible interfaces.

Nevertheless, they offer hope that future proposals, such as signals or standardized reactivity, could benefit from better synergy between major frameworks and platform developers. They mention that many library creators are more open to collaboration now, having seen how misalignment can hamper progress. This points to a future where the platform evolves more responsibly, balancing new features with a realistic grasp of the entire developer landscape. Concluding, the speaker suggests it’s less about standardizing every detail and more about ensuring a robust yet adaptable baseline.