---
showLink: "https://www.youtube.com/watch?v=A2TiLvCDKSg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Fine-Grained Reactivity w/ Milo"
description: ""
publishDate: "2023-02-18"
coverImage: "https://i.ytimg.com/vi/A2TiLvCDKSg/sddefault.jpg?v=63eef14c"
---

### 02:30:00 - Drawbacks of Overusing Effects

As the conversation continues, they address a common developer pitfall: relying on too many effects. Milo insists that signals become most powerful when logic is declared as simple transformations, not stuffed into large effect blocks. Overusing effects can reintroduce the complexity of “setState” sprawl or condition-based re-renders, undermining the clarity signals can provide. The host illustrates with real code examples how novice developers might chain multiple signals and effects, inadvertently creating loops or race conditions.

They also mention that transitions can mitigate some of these issues, but fundamentally, a well-designed reactive system encourages a more declarative style: each piece of state derived from the minimal input signals, free of extraneous side effects. The pair recommends carefully evaluating each effect, ensuring it truly belongs outside a memo or resource. This design ethos yields simpler mental models and fosters better performance because each re-computation is tightly scoped to its actual dependencies.

### 02:36:00 - Code Transformations and Batching Nuances

Touching on code-level details again, Milo shares how the new engine eliminates the clunky batching logic that once plagued earlier Solid versions. Instead of manually scheduling sets, the system’s lazy marking and coloring ensure consistent final states, even if multiple signals update in one pass. The host recounts how the previous system introduced friction for developers expecting immediate reads or writes. The fresh approach spares them from dealing with “wrappers” or “untrack” hacks.

They also highlight challenges with more advanced concurrency models. The host references React’s time-slicing as a different strategy altogether, but wonders if that overhead is necessary in a well-tuned signals system. Milo believes that fine-grained updates avoid the need to break rendering into multiple slices, so long as the reactivity engine is efficient. The conversation closes by reiterating that simpler illusions of concurrency—like transitions—often suffice without the global complexity of a full scheduler.

### 02:42:00 - The Broader Shift Toward Pull-Based Mechanisms

Now they parse the subtle shift from push-based to pull-based reactivity across libraries. Milo notes that old-school observers hammered downstream subscribers constantly, while new methods wait to compute until an effect or component truly demands fresh data. This “pull on demand” style can transform how code is structured, enabling more advanced features like off-screen rendering or partial hydration. Developers can hide elements, leaving them uncomputed until the user reveals them, drastically cutting unneeded calculations in large apps.

The host references an example of a virtualized list, where hundreds of elements are tracked but only a fraction display at once. Under pure push, every update might propagate through the entire list, while lazy pulling only recalculates visible items. This approach can yield major speedups. They see synergy with new techniques like islands or server components, each relying on partial updates rather than global re-renders. The conversation suggests these reactivity changes could lead the next wave of performance gains.

### 02:48:00 - Memory Management and Graph Cleanups

Within this six-minute window, Milo details the memory considerations of a large reactive graph. Each node, whether a memo or effect, holds references to parents and children. The new system aims to minimize the overhead of re-linking these references on every re-run. They mention an optimization in “reactively” that avoids rebuilding source arrays unless dependencies truly change. This tactic prevents the creation of new arrays or the removal and re-addition of references, cutting down on garbage collection churn.

They also address a user question about whether stale nodes remain dirty forever if no effect requests them. Milo explains that the system’s coloring approach discards them from the active queue, leaving them dormant without incurring repeated overhead. Only once demanded do they recheck whether their ancestors changed. This cyclical conversation about referencing, unsubscribing, and dynamic dependencies highlights the complexities behind building a robust, large-scale reactive library that remains memory efficient.

### 02:54:00 - Lessons from Benchmarks and Evolution of Reactivity

Approaching the three-hour mark, they reflect on how frameworks historically tested algorithms with microbenchmarks. While these help refine certain aspects, real apps demand attention to edge conditions like partial updates, dynamic branches, and concurrency. Milo jokes that “if everything in your app depends on one signal, you can cheat with version checks,” but that hardly models typical UIs. The host cites how certain libraries show stellar results on contrived tests but struggle in practice, reinforcing the importance of a balanced approach.

They also see the silver lining: each library’s attempts to outdo others in benchmarks produce side benefits. Innovators discover new ways to short-circuit updates or handle concurrency, eventually leading to cross-pollination. Whether from Angular signals, Quick’s resumability, or Solid’s fine-grained reactivity, the entire ecosystem benefits from these incremental leaps. The conclusion to this reflective passage is that sustained iteration, plus open discussion about trade-offs, pushes the boundaries of performance further than any single library could alone.

### 03:00:00 - Transitioning to Broader Community Topics

Now the host shifts the stream’s focus away from purely reactivity to the general JavaScript news segment. He thanks Milo again for diving deep into the technical underpinnings, applauding how thoroughly Milo explained the complex push-pull, lazy-labeled approach. Milo remains on screen briefly for some final remarks, mentioning ongoing tasks around transitions and resource reads. The synergy with potential compile-time macros and partial bundling also arises, marking a potential future quest for even more advanced SSR or edge distribution.

The host reads a few chat messages praising the new reactivity approach. Some viewers share excitement about code cleanliness, while others ask about complicated use cases. The conversation underscores that no single solution fits every scenario, but the new architecture paves the way for flexible, advanced patterns. The host hints at a more robust conversation about memory usage or concurrency in upcoming streams, suggesting this is merely the beginning of a multi-month push to finalize the new core.

### 03:06:00 - React Documentary Shout-Out and Ecosystem Reflection

At this juncture, the host references the recently released React documentary, praising its production values and historical overview of React’s inception. He points out that React once faced skepticism but revolutionized how developers conceptualize rendering. The documentary, he says, reminds him that once-edge ideas can later become standard. This parallels the path signals have taken, going from obscure to mainstream interest across frameworks. He also mentions a Q&A session featuring Dan Abramov’s words about frameworks competing on ideas, not just code.

Linking it back to fine-grained reactivity, the host states that the greatest triumph is not a single library’s dominance but the survival of valuable concepts. He sees a resonance with how React overcame older mindsets around two-way binding, and how signals now challenge a decade of immutable, top-down updates. The chat offers anecdotes of how people used Knockout or MobX in the past, reinforcing the cyclical nature of ideas in front-end development.

### 03:12:00 - Reflecting on Collaboration vs. Competition

The host expands on Dan Abramov’s quote that “We win not when React wins, but when the idea survives.” He contemplates how this principle guided Solid’s creation: it wasn’t about dethroning React but preserving the powerful patterns of granular reactivity. The host describes the lonely early years of maintaining an alternative approach, uncertain if anyone else would care. He credits React Hooks for normalizing functional composition, making more advanced signal-based systems easier to grasp.

He underscores a universal pattern: each wave of innovation, from Angular’s early successes to React’s dominance, builds on underappreciated roots. The host applauds those continuing to push front-end boundaries through open-source collaboration. Even if Solid, or another signals-based library, never becomes ubiquitous, the fact that signals now appear in Angular or Quick suggests the underlying idea has prevailed. This broader communal spirit echoes throughout the conversation: frameworks rise and fall, but good concepts live on.

### 03:18:00 - Industry Shifts and React’s Next Moves

Entering the next six-minute block, the host comments on Andrew Clark joining Vercel, fueling speculation that React and Next.js might become even more intertwined. He imagines scenarios where Remix, Gatsby, or other React-based solutions must adapt to a more officially sanctioned Next-like approach. The conversation outlines how a single meta-framework could overshadow smaller players if the React team’s focus remains primarily on Next. At the same time, competition among these frameworks may drive beneficial incremental improvements.

He also touches on React’s newly unveiled server function approach, akin to the $server macros seen in Solid or Quick. The host calls it a sign that React is trying to keep pace with patterns others have championed. Nonetheless, he stresses that the “React core team = Next.js” dynamic can complicate the ecosystem. The takeaway is that React’s success has them pivoting in multiple directions—server components, concurrency, partial hydration—while other frameworks unify around simpler, more explicit solutions.

### 03:24:00 - Expanding on Server Functions and SSR Patterns

The host reiterates that server functions—like those in Blitz, Solid Start, Quick, or new React proposals—emphasize a shift to center-stack logic. By enabling developers to call server code as though it were local, friction around data fetching or validating forms decreases. He suggests these patterns might soon converge, so any framework that lacks them risks falling behind. At the same time, he sees standardization challenges; each solution currently has its own compile-time approach.

He envisions a near future where “server$” syntax or an equivalent is as ubiquitous as “import” statements, bridging the final gap between front-end and back-end code. He muses on the potential for universal specs, imagining a scenario where front-end devs can write a single line that handles all networking behind the scenes. This hints at an ecosystem shift, taking the best parts of each library’s solution—like $server for Solid or useServer for React—and forging widely accepted conventions.

### 03:30:00 - Addressing Community Feedback on Over-Compilation

Responding to critiques that frameworks distort JavaScript semantics, the host notes an ongoing conversation triggered by Rich Harris. Some developers argue that macro-based or compile-based transformations break the “it’s just JavaScript” ethos. Yet, the host contends that Svelte set a precedent by adopting single-file components, re-purposing let and const for reactive lines, and so on. Over time, these “magical” transformations became acceptable because they solve real problems elegantly.

He also recalls that early attempts at truly distinct DSLs, like Marco’s custom file syntax, faced steeper adoption barriers. Developers preferred illusions that everything was standard JS, even if under the hood major transformations occurred. This underscores how the community’s comfort with slight illusions has expanded, provided they bring tangible benefits. The host predicts that macros for server functions, partial bundling, or advanced reactivity are merely the next wave in that continuum of pragmatic, if somewhat magical, transformations.

### 03:36:00 - Concerns About Tooling and Code Clarity

During this stretch, the host raises potential pitfalls. New macros or $server calls might confuse developers if the boundaries between client and server vanish. He suggests Astro’s separate .astro files or Remix’s file-based approach as ways to clarify which environment executes each block. By contrast, fully inline macros could lead to code that looks normal but compiles drastically differently. He stresses that each framework must communicate these boundaries effectively, preventing developer mistakes like referencing insecure variables in server code.

Additionally, the host references continuing discussions about the best path forward. Some prefer strict separation—like calling the server from an explicit file—while others appreciate inline convenience. The host sees legitimate use cases for each, hoping the ecosystem’s next steps yield consistent and intuitive patterns. He emphasizes that developer confusion ultimately correlates with poor mental models, so frameworks must remain transparent about transformations.

### 03:42:00 - React as a Spec vs. Library or Framework

Here, the host circles back to React’s metamorphosis. With new proposals like “use server” or official SSR solutions, React looks less like a minimal library and more like a spec or platform. He humorously imagines a “Can I use React?” site that tracks next-level features akin to browser APIs. The tension arises where remix or other libraries must keep up with official merges, or risk seeming outdated. The host suggests that if React formalizes certain macros or server boundaries, it effectively sets a standard that others feel pressured to adopt.

He clarifies he is not necessarily against React shaping new standards, but acknowledges the complexities. On one hand, official directives could unify the ecosystem. On the other, they risk overshadowing alternative solutions or ignoring patterns that smaller libraries have validated. He leaves open the question whether a single “react spec” is beneficial or if multiple approaches can coexist under a broader umbrella of compile-time transformations.

### 03:48:00 - Ecosystem Turbulence and Future Outlook

As the fourth hour nears, the host comments on how this potential shift by React may disrupt established workflows. There’s a possibility that next year or two will see major realignment as projects scramble to incorporate the new server function specs or updated concurrency tools. He references the unstoppable wave of signals-based solutions crossing into React’s territory, speculating that React might one day adopt them more openly.

He also underscores that some advanced users or large-scale apps may stick with older patterns indefinitely. Despite the hype, rewriting entire codebases to chase ephemeral gains can be risky. The host acknowledges that a stable approach—like the incremental adoption championed by TanStack Start or Solid Start—might resonate more with teams who cannot afford churn. The overall tone is of cautious optimism: big changes are coming, but real adoption depends on bridging the gap for existing code.

### 03:54:00 - Revisiting the Community Collaboration Theme

In this section, the host reiterates that at scale, it’s better to unify efforts than to see each library re-implement the same SSR adapter or Windows path fix. That conviction underpinned his collaboration with Tanner and Astro. Reflecting on the synergy of specialized roles, the host notes how likely it is that next year will witness an explosion of cross-framework solutions, from serverless expansions to custom macros.

He salutes the open-source spirit that fosters such synergy. With smaller library authors and large corporate backers all experimenting, the outcome is a rich marketplace of ideas. The host sees fewer hard lines between frameworks, replaced by a common substrate—like Astro for server tasks or signals for reactivity—that many can share. While subtle differences remain in syntax or mental models, the unifying push suggests a more interconnected future for JavaScript.

### 04:00:00 - Less Formal Wrap-Up and Twitch Interactions

After four hours, the conversation adopts a more relaxed vibe as the host scrolls through chat, fielding a range of spontaneous questions. He recaps earlier announcements for latecomers, from TanStack’s new direction to Solid’s reactivity revamp. Viewers also ask about smaller details—like tailwind integrations or potential Redwood-like expansions for Solid. The host encourages them to explore the official docs or community-maintained packages, underscoring the impressive volunteer contributions that keep the ecosystem vibrant.

He also throws in a few personal anecdotes: mention of birthday coincidences with Tanner, jokes about upcoming barbecue meals, or describing random ideas from the chat. This section exemplifies the open mic style of the stream, reminding viewers it’s an informal setting to hang out, not merely a polished lecture. The mood is light, and the host occasionally glances at the clock, acknowledging the length but noting that more content remains to be covered.

### 04:06:00 - Revisiting “JS Framework Benchmark” Tropes

Discussion moves briefly to the JS Framework Benchmark, referencing how some libraries excel in specific tasks, while others see minimal differences in real apps. The host reiterates that microbenchmarks can highlight interesting angles but rarely capture everyday complexities. People still post results like “Solid is fastest,” or “Preact signals shine,” yet each scenario might only represent a narrow slice.

They mention potential upcoming modifications to that benchmark, possibly incorporating more dynamic changes that reflect user interactions. The host welcomes such expansions, noting that bridging ephemeral usage might better illustrate concurrency or partial updates. He points out that each library’s marketing sometimes oversells a single metric, making a healthy dose of skepticism warranted. Nonetheless, these benchmarks can be fun conversation starters and nudge library authors to pursue continuous improvements.

### 04:12:00 - Fielding Community Package Questions

Another cluster of chat messages focuses on the variety of Solid or TanStack community libraries for charts, tables, or forms. The host runs through newly updated resources, praising the volunteer effort behind them. He explains that, as with React, each library gains momentum once enough stable packages exist for common tasks: whether it’s a UI component kit or authentication wrapper. The community’s heavy involvement in building these is a key marker of library maturity.

He highlights how small gaps remain—for instance, cross-platform solutions or official React Native alternatives. The host clarifies that some options exist, like NativeScript or Capacitor, though they do not fully replicate React Native’s ecosystem. It’s a trade-off of relatively younger frameworks. Yet the conversation remains optimistic, referencing the wave of expansions around XState or Flowbite that demonstrate an accelerating pace.

### 04:18:00 - The “New Framework” Critique

Turning to a comedic note, the host addresses the recurring complaint: “Why do we need another JavaScript framework?” He recognizes it’s a common comment on social media whenever Solid or others gain traction. From his vantage point, competition in the ecosystem fosters innovation. He has also personally experienced the slog of building something different only to have critics dismiss it as “yet another toy.”

Nonetheless, the host has seen attitudes soften. Many developers now appreciate how a specialized approach to reactivity or partial hydration can yield real benefits. The conversation again comes full circle to signals: the concept that frameworks labeled “niche” are now influencing big players. He suggests the question of “why another library?” is misguided, as new solutions regularly catalyze improvements across the board.

### 04:24:00 - Revisiting the Past: Knockout and Old Tools

In this chapter, the host recalls Knockout.js, a pioneer in reactive approaches. He muses that if the ecosystem had embraced those ideas earlier, hooks and signals might have become mainstream faster. Instead, it took React’s success to prove that a simpler mental model—like pure functional components—had wide appeal. Then frameworks like Solid refined the reactivity. He underscores that historical perspective fosters humility: good ideas can be overshadowed by other factors, but if they’re truly valuable, they often resurface in time.

He also marvels at younger developers who never experienced the older era. They might assume React’s model is the baseline. The host finds it entertaining to see them amazed by signals, which existed conceptually a decade prior. He suggests that understanding history can help developers pick the best tool today, aware that older code is not necessarily obsolete—some concepts, like granular reactivity, simply needed a fresh reintroduction.

### 04:30:00 - Vercel’s Influence and The Evolving Next Ecosystem

The host digs more into Vercel’s role, highlighting how acquiring top React engineers indicates a push toward shaping the next iteration of the React ecosystem. He speculates on how Remix or other frameworks will handle potential overshadowing by official Next-based solutions. Meanwhile, watchers in chat debate the pros and cons of next-centric React design vs. an unbundled approach. He clarifies that such tensions are not new: some see tight integration as synergy, others as stifling diversity.

He acknowledges that, from a business standpoint, unifying around Next might streamline corporate usage. The entire conversation circles around the fact that React never provided an official router or meta-framework, letting third parties fill that gap. Now with Vercel’s next-level integration, the lines blur. Where some see a renewed impetus to keep up, others sense React drifting from “library” to “platform.” The host frames it as a natural outcome of near-ubiquitous adoption.

### 04:36:00 - Gauging the Impact on Startup Ecosystem

During these minutes, the host addresses startup adoption patterns. He notes that for new teams, adopting Next might be the path of least resistance, given its strong brand recognition and built-in synergy with React. This leaves smaller frameworks or meta-framework alternatives competing on features or developer experience. If they prove enough of a leap forward—like cutting significant overhead or offering simpler concurrency—teams might consider them. However, inertia is strong, and many prefer the known quantity of Next unless a truly compelling advantage emerges.

He also acknowledges that performance, once a “nice to have,” is increasingly a priority for user experience and SEO. This can open the door to frameworks that champion signals or partial hydration, as they tangibly reduce client overhead. Still, decision-makers often weigh hiring availability or the developer community. The conversation reveals an ecosystem in flux, with multiple forces shaping the path from novices to enterprise migrations.

### 04:42:00 - Summarizing Potential Future Directions

Approaching the four-hour-45-minute mark, the host attempts to tie threads together. He suspects that by next year, more frameworks will have server function macros, partial hydration strategies, and signals-based updates. Meanwhile, React might push forward concurrency and server components, albeit with a heavier overhead that suits large-scale apps. The next wave of sub-100KB solutions will try to match or exceed Next’s developer experience but with speed or memory usage benefits.

He also anticipates Astro’s star rising as a universal platform for multiple frameworks, bridging smaller niche libraries into mainstream usage. If these solutions deliver seamless deployment across Netlify, Vercel, or AWS, they stand to unify the ecosystem. A flurry of Q&A from chat hovers around these topics, reflecting equal excitement and uncertainty. The host states that only time will clarify which approach becomes the widely accepted standard.

### 04:48:00 - Lighthearted Pizza Debate and Stream Atmosphere

At this stage, the conversation takes a playful detour into a pizza-topping debate sparked by a tweet from Jason Miller. The host jokes about maximum topping counts before the flavor balance collapses. Drawing parallels, he likens too many library abstractions to an overloaded pizza—sometimes less is more. The chat erupts with personal topping preferences, and the host shares a story of working at a pizza place, developing a philosophy that five toppings is often too many unless carefully balanced.

This comedic break demonstrates the stream’s relaxed, community-driven nature. It also underscores that after lengthy deep dives, some levity keeps morale high. The host glances at chat, reading out amusing topping combos. Listeners enjoy the reprieve from intense technical talk, though the underlying analogy remains: oversimplification or overcomplication both hamper quality, be it pizza or code. The parallel resonates with viewers, who revel in the informal banter.

### 04:54:00 - Final Notes on Ongoing Community Projects

In these minutes, the host returns to a few final community highlights: new UI kits, upcoming alpha versions of reactivity libraries, and Astro’s improved documentation. He praises the collaborative spirit that has fueled these developments, from minor documentation PRs to entire rewrites of core modules. The host encourages watchers to jump in if they have interest, ensuring them that open-source maintainers often welcome help with bug triage, testing, or even feature planning.

He mentions that being part of an open-source community fosters learning far beyond what tutorials can convey, as one grapples with real constraints and user feedback. He sees tangible proof in folks like Milo, who started by experimenting with Solid and ended up reshaping its internals. This championing of contributors sets a hopeful tone: new participants might drive the next wave of meta-framework or reactivity breakthroughs. The host celebrates that future as an ongoing, collective journey.

### 05:00:00 - Wrapping Up Extended Q&A

As the stream enters its fifth hour, more people trickle off, but a dedicated crowd remains. The host fields final questions on topics like code-splitting best practices, differences between progressive enhancement in Remix vs. Solid Start, and minor issues with environment variables. He addresses each briefly, often referencing the shared macros or “bling” approach as a solution. Though the conversation is winding down, the steady engagement underscores how thoroughly these topics resonate.

He also does a last round of thanks for subscriptions on Twitch and welcomes newcomers from different time zones who hopped on mid-discussion. The wide span of topics—from advanced concurrency to personal anecdotes—illustrates the variety that a multi-hour stream can encompass. Frequent self-referential humor and nods to chat reveal a comfortable, communal setting where watchers shape the direction as much as the host does.

### 05:06:00 - Closing Remarks and Sign-Off Prep

The host announces that the stream has gone longer than anticipated, acknowledging how engrossing the Q&A segments became. He outlines upcoming content plans: a possible interview with Angular’s signals team, deeper dives into the next steps of “bling” macros, and maybe a fully dedicated session on new resource patterns. He thanks the audience for their patience, remarking that the final part of the discussion has been more freeform.

He also encourages watchers to catch the Syntax podcast interview he recently did, praising its blend of technical detail and broader accessibility. Wrapping up, he suggests that these kinds of open conversations—often lasting multiple hours—foster real insight that shorter tutorials may miss. By following chat’s lead and meandering through tangents, they uncovered a wide range of advanced front-end topics while maintaining an informal vibe.

### 05:12:00 - Last Viewers and Post-Stream Plans

In this next block, the host muses over how exhausted everyone must be after such a dense session. He recaps the day’s big announcements: collaborations with Tanner Linsley, the shift to Astro-based meta-framework solutions, and Milo’s reactivity breakthroughs. He jokes about how watch times soared as they repeatedly teased “just one more topic.” He also double-checks whether any major news items from the JavaScript world remained unmentioned.

Chat questions lighten up, with people praising the thoroughness of the deep reactivity explanation. A few mention that the session should be split into chapters for easier replay—ironic given the real transcript is indeed massive. The host concurs but warns it might not happen due to time constraints. He thanks random supporters by name, reading their handles out loud, then hints at after-stream dinner plans.

### 05:18:00 - Farewell and Final Wrap

As the stream’s final minutes tick down, the host offers personal thanks to major contributors like Nikhil, Milo, and the broader Solid Start community. He salutes the chat for thoughtful questions and engaged dialogue, reaffirming the sense of co-creation that defines these sessions. He briefly mentions future collaborations, possible live coding, and any big upcoming releases.

Finally, the host calls it a day, wishing everyone a good evening. He jokes about continuing for another hour if not for real-life commitments, then officially signs off. A fade-out or abrupt end is implied as the transcript stops at 05:32:24. Viewers leave with a sense of thorough coverage, from the intricacies of fine-grained reactivity to the swirl of meta-framework collaborations, crowned by a dash of pizza humor.