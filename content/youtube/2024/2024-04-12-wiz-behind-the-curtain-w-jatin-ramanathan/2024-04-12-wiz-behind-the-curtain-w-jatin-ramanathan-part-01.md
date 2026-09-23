---
showLink: "https://www.youtube.com/watch?v=qzOzyUA9kbg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Wiz: Behind the Curtain w/ Jatin Ramanathan"
description: ""
publishDate: "2024-04-12"
coverImage: "https://i.ytimg.com/vi/qzOzyUA9kbg/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation about Google’s internal Wiz framework, its unique take on SSR and signals, and how large-scale web development strategies evolve in real-world environments.

## Episode Summary

This discussion offers a wide view of the Wiz framework, an internal tool at Google that underpins some of the company’s largest products. Beginning with an overview of older internal libraries and how they led to Wiz, the speakers highlight performance concerns specific to massive user bases, including code splitting and the use of event delegation to defer loading JavaScript until absolutely necessary. As the dialogue progresses, they compare Wiz with popular open-source frameworks like React and Angular, noting how each handles server-side rendering, state, and hydration. From there, the spotlight shifts to signals: a more granular, efficient model for managing state changes. They examine how adopting this approach can unify different frameworks within Google and potentially push the boundaries of performance. Throughout, the conversation underscores the intricacies of real-world benchmarking, calling out pitfalls that can cause misinterpretations of framework speed. By the end, listeners gain a nuanced appreciation for how large-scale web applications balance performance, developer experience, and system maintainability, reflecting on how these lessons can inform the broader ecosystem.

---

## Chapters

### 00:00 - 09:00 — Setting the Stage: Google’s Web Evolution

In this opening chapter, the participants describe the historical background that paved the way for Wiz inside Google. They outline how Google’s web infrastructure emerged from massive projects like Google+, explaining how the scale and complexity of early social initiatives informed the company’s overarching front-end strategies. By introducing concepts such as daily builds and shared deployment pipelines, they clarify the weighty challenges of orchestrating thousands of developers working across interconnected systems.

They also highlight how frameworks and libraries from the early 2010s influenced Wiz’s development. Although Angular and React were available externally, Google cultivated various in-house solutions to manage internal needs, particularly to streamline performance under high user traffic. This segment sets the tone for understanding Wiz’s deep focus on efficiency and offers a glimpse into the large-scale engineering practices that shaped its core design.

### 09:00 - 18:00 — The Roots of Wiz: From MVC to Modular Bundles

Moving into the next segment, the guests focus on the earliest form of Wiz. They describe how its architecture grew from a traditional MVC approach, setting up controllers, models, and event handlers in a way that prioritized quick server responses. Listeners learn how Google’s internal culture demanded fine-grained code splitting and a refusal to load unnecessary JavaScript, illustrating the scale-based logic behind these decisions.

They also show how this approach influenced the bundler configuration, which at Google, accommodates thousands of entry points rather than just route-level splits. The conversation contrasts these in-house techniques with broader open-source trends and emphasizes why large enterprises handle code-splitting and lazy loading differently. By illuminating this engineering rationale, the speakers highlight the mindset that shaped Wiz’s earliest features and its imperatives around rapid user feedback.

### 18:00 - 27:00 — Managing Complex Deployments and Shared Fate

In this chapter, the conversation delves into the challenges of coordinating massive codebases, where thousands of developers often push daily changes. They discuss how monolithic deployment pipelines created “shared fate,” meaning one broken feature could derail a global release, forcing rollbacks that impacted every team. This situation underscores why well-structured frameworks and granular code management became indispensable.

They also address the nuances of testing and monitoring in real-time. With so many components updating simultaneously, performance regressions can slip in easily if not detected early. The speakers mention how sophisticated internal metrics and build tools keep Google’s platforms consistent, ensuring that a performance hiccup or significant bug doesn’t balloon into a full-blown crisis. This context reinforces the central role Wiz played by streamlining both development and deployment at scale.

### 27:00 - 36:00 — Architectural Shifts: Server-Side Rendering from Day One

Turning to a hallmark of Wiz, the speakers note how the framework mandated server-side rendering (SSR) from the very start. They discuss how SSR was far from an afterthought—it was the foundation. By rendering key UI on the server, Google could ensure users saw meaningful content almost immediately, an approach that proved essential for products like Google Search.

They highlight how SSR introduced unique complexities, such as synchronizing server-generated HTML with client-side interactions, especially on pages that included dozens, if not hundreds, of potential dynamic widgets. The guests emphasize that Wiz’s solution was to isolate and modularize each widget, shipping JavaScript only for the components that truly needed it. This principle, while widely known today, was visionary at the time and remains pivotal to Wiz’s architecture.

### 36:00 - 45:00 — Delayed Event Handlers and Preemptive Loading

Here, the participants explain one of Wiz’s clever features: globally delegating events instead of binding listeners directly at render time. By attaching a single, top-level event handler, Wiz avoids attaching individual listeners until a user interacts with a specific component. This design drastically cuts initial JavaScript execution, especially on busy pages like Google.com, which can host countless potential user actions.

They also examine how Wiz balances truly lazy event loading with proactive prefetching. Certain high-traffic or critical components merit background preloads to maintain a smooth experience. Others remain dormant unless accessed, improving overall performance. This strategic approach to event handling and code loading illustrates how Google’s engineering culture pursues minimal overhead without sacrificing responsiveness, a balancing act all large-scale frameworks eventually face.

### 45:00 - 54:00 — Introducing Incremental DOM and Data Updating

During this interval, the conversation explores Wiz’s adoption of Incremental DOM, a single-pass system that updates DOM nodes in place without constructing a separate virtual representation. The speakers recount why simply inserting large swaths of HTML through methods like innerHTML was often faster than complicated diffing for non-interactive parts of the page.

They highlight the tension between imperative DOM updates and the desire for a more declarative model. While incremental DOM helped preserve focus and state during partial re-renders, it wasn’t a perfect fit for every scenario. The chapter details how Google weighed these trade-offs and aimed to fuse the speed of raw DOM manipulation with the convenience of a structured, incremental rendering approach.

### 54:00 - 63:00 — Angular, YouTube, and Internal Collaboration

Shifting focus, the guests describe how Angular and Wiz started to converge organizationally, spurred by the fact that both frameworks aimed to solve similar high-level challenges. They mention how various Google teams, including YouTube’s front-end group, relied on alternative approaches like Polymer or Lit before eventually intersecting with Wiz’s architecture.

This segment uncovers the complexity of cross-team collaboration within Google’s vast ecosystem, where each product has specific needs and historical context. Questions arise around incremental migration, code reuse, and backward compatibility. The speakers illuminate how different project teams benefit from a shared set of core primitives, even if they maintain diverse rendering stacks or templating systems.

### 63:00 - 72:00 — Progressive Hydration and Fine-Grained Rendering

In this section, the dialogue homes in on the notion of progressive hydration, discussing how Wiz—or frameworks influenced by it—only hydrates parts of a page when truly needed. They differentiate this approach from traditional client-side hydration, which might require re-running an entire rendering pass. Instead, they rely on minimal overhead plus event delegation to reconstitute only active components on demand.

They also illustrate how large, data-driven UIs benefit from this granular approach to re-rendering. Once hydration occurs, it can transform certain areas of the DOM without disturbing the rest of the page. This division of responsibility not only conserves performance but also encourages tidy architecture—each part of the page can be self-contained yet integrated into a broader event system.

### 72:00 - 81:00 — Signals Enter the Picture

Here, the conversation begins focusing on signals, a reactivity model where data changes flow directly to affected components. The speakers compare signals to other state management paradigms like Redux or contexts, highlighting signals’ more efficient, fine-grained updates that skip repetitive rendering.

They detail how signals are appealing for performance-critical elements such as video controls in YouTube, delivering buttery-smooth frames. Signals also open the door for bridging Wiz and Angular under a common reactivity layer, letting each framework keep its identity while sharing a core system for updates. This sets the stage for broader commentary on how signals might unify previously distinct approaches in Google’s ecosystem.

### 81:00 - 90:00 — The Challenge of Serialization and Data Boundaries

Continuing the signals discussion, the speakers touch on data serialization, a critical aspect for any SSR-heavy framework. They explain that once you commit to partial hydration or zero hydration, the framework needs to decide how to serialize state so that client code can accurately resume.

They illustrate how this process can become intricate in applications with deeply nested contexts or multiple points of dynamic loading. The solution often lies in specialized boundaries—segments of the component tree that carry their own data footprint and hydration instructions. While it simplifies user experience, it forces the framework to juggle a labyrinth of possible states, ensuring only relevant data hits the client.

### 90:00 - 99:00 — Merging Framework Philosophies at Google

In this segment, the guests zoom out and evaluate the big-picture implications of signals at Google. They highlight the tension between multiple in-house solutions—Wiz, Angular, Lit, and older frameworks—each with distinct philosophies. Though signals promise a path to unify behind a shared reactivity backbone, questions remain about templating, incremental adoption, and synergy with older systems.

They also underscore that Google, with its enormous scale and varied user devices, must test any new technology rigorously. While smaller projects might pivot quickly, Google prefers iterative rollouts, ensuring signals work seamlessly across a range of real-world constraints. This underscores that merging frameworks is as much about developer buy-in and backward compatibility as it is about technical details.

### 99:00 - 108:00 — Avoiding Full Hydration: Trade-Offs and Strategies

Here, the discussion circles back to partial or “selective” hydration in more detail. The speakers parse how frameworks like Next.js, Astro, and others each handle different hydration levels, sometimes sending fewer scripts to the client or offloading interactive logic until a user triggers it.

They then contrast these approaches with Wiz’s deeply ingrained event-delegation method, explaining how it sidesteps the overhead of attaching or reattaching listeners for every component. By mapping out real use cases—like opening accordions or loading additional data on demand—they illustrate how partial hydration can be beneficial yet tricky, requiring robust coordination between server and client code.

### 108:00 - 117:00 — Resumability’s Broader Impact on the Web

During this interval, the conversation briefly explores the idea of resumability, popularized by frameworks like Qwik. The speakers connect it back to Wiz’s longstanding practice of loading code only when essential. They examine the ways older frameworks could theoretically embrace resumability, citing incremental adoption and minimal rewrites if architectural boundaries are laid out early.

They also highlight how resumability can reshape the client experience, eliminating the need for repeated checks or rehydration across large portions of an interface. Still, the complexities of data flow, user events, and concurrency get trickier when you try to lazy-load entire sections of logic. The chapter underlines that these techniques are not just theoretical; they have tangible impacts on real Google products.

### 117:00 - 126:00 — Zones, Context, and Dependency Injection

Turning to topics often associated with Angular, the speakers cover how signals mesh with advanced concepts like dependency injection (DI) or zones. They acknowledge that hierarchical DI can complicate partial hydration, since a single event handler might depend on global or intermediate data layers.

They note that while signals might be a solid answer for local state, large enterprise apps often have cross-cutting concerns that rely on injection systems. Wiz addresses these through different means, reflecting how each project must adapt reactivity to fit its design. This intersection of signals and DI prompts speculation about further standardization, though the speakers concede that solving it elegantly remains an open question.

### 126:00 - 135:00 — Framework Convergence and the Signals Proposal

In this segment, the conversation spotlights the broader movement to standardize signals, including the push to incorporate them in JavaScript itself. They discuss the collaborative effort among major framework authors—Angular, React, Solid, Svelte—and how it led to the signals proposal gaining traction in the standards process.

They stress that while such alignment is rare, it signals a shared belief that fine-grained reactivity will benefit the broader ecosystem. Nonetheless, the group cautions that not every piece of the signals story—like effect scheduling—translates straightforwardly to a standard. They underscore the complexity of making signals flexible enough to accommodate each framework’s scheduling model and concurrency approach.

### 135:00 - 144:00 — Incremental Migration in Mammoth Codebases

Returning to the practical realm of large-scale development, the speakers discuss how Google rolls out new frameworks incrementally. By focusing on especially high-impact areas, such as video playback or frequently visited screens, teams can prove signals’ value and gradually replace older imperative code. This approach avoids massive rewrites that risk disruptions for millions of users.

They also share how partial adoption makes sense for older Google properties that still rely on straightforward DOM manipulation. Signals can be interwoven into these systems without demanding a full architecture overhaul, a crucial factor when changes affect multiple teams. Through these real-world examples, listeners gain insight into the genuine complexities and advantages of phasing in advanced reactivity models.

### 144:00 - 153:00 — Benchmarking: Pitfalls and Practical Realities

In this chapter, the conversation shifts to performance benchmarking, dissecting why certain tests can be misleading. The guests acknowledge that small “Hello World” SSR benchmarks can skew results by not reflecting data serialization, code splitting, or dynamic user interactions. They argue that real, large-scale performance measurement focuses on product metrics like time to meaningful content or error rates.

This scrutiny reveals the difference between demonstrating raw framework overhead and measuring user-centric performance. They also mention how enterprise needs—like embedded analytics or advertisement scripts—complicate pristine benchmark results. By cautioning against oversimplified tests, the speakers emphasize that truly understanding a framework’s speed requires a nuanced look at how it behaves in a genuine production environment.

### 153:00 - 162:00 — Striving for Green Scores and Business Metrics

Building on the benchmarking theme, the guests discuss how major websites, including Google and eBay, often see suboptimal Lighthouse or PageSpeed scores despite sophisticated optimizations. They relate that these tools fail to capture certain internal metrics that matter more for the site’s business goals, such as user retention, conversion, or time-to-first-result on high-traffic pages.

They explore how real-world constraints—third-party integrations, localized versions, and layered analytics—add overhead that smaller demos don’t face. Moreover, large organizations balance such complexities with the need for a consistent global release cadence. By exploring these business realities, the conversation highlights that a site’s ultimate performance can’t be captured by a single numeric benchmark alone.

### 162:00 - 171:00 — Advanced SSR Features and the Road Ahead

As the transcript nears its conclusion, the speakers revisit how SSR strategies have grown increasingly sophisticated. They outline how concurrency frameworks and advanced data-loading techniques create new complexities, ranging from partial streaming to rehydrating ephemeral states. Each innovation promises incremental gains, but requires synergy among SSR, hydration, signals, and potential concurrency layers.

They speculate on potential directions for next-generation frameworks, predicting that a combination of fine-grained state management, minimal JavaScript payloads, and robust server-handled rendering will define the future. They also touch on the difficulty of balancing developer ergonomics with raw performance gains, reiterating that many internal prototypes at Google aim to solve these trade-offs elegantly.

### 171:00 - 180:00 — Closing Insights on Wiz, Google, and the Web

In the final chapter, the participants offer concluding reflections on Wiz’s ongoing evolution. They share anecdotes about Wiz’s whimsical naming scheme, referencing “The Wizard of Oz” origins and the various code names that pervade Google’s engineering culture. The conversation underscores that while frameworks like Wiz have achieved major success internally, continued experimentation with signals, incremental DOM, and partial hydration drives them forward.

The speakers also hint at a future in which several Google frameworks may converge on signals for their reactivity backbone. While concerns around data flows, backward compatibility, and developer education linger, the episode wraps up by affirming that performance and user experience remain top priorities. By drawing on real examples and future aspirations, they leave listeners with a clearer sense of how large-scale frameworks can thrive when pushed by necessity, collaboration, and continuous refinement.