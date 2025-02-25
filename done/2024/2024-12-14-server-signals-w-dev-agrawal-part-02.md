---
showLink: "https://www.youtube.com/watch?v=zKXfcE7oTRY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Signals w/ Dev Agrawal"
description: ""
publishDate: "2024-12-14"
coverImage: "https://i.ytimg.com/vi/zKXfcE7oTRY/maxresdefault.jpg"
---

### 138:00 – 144:00 | The Synergy of Events and Local-First Strategies

Dev revisits the synergy between events and store patterns, explaining how local-first logs can feed into an event-based aggregator. The host draws parallels to state machines or semantic data flows, emphasizing that an event-sourced system might be simpler to reason about.  

They also touch upon offline capabilities: an event-based model can queue, replay, or reorder changes with minimal fuss. Combined with signals, it can efficiently unify ephemeral states with persistent logs for a robust real-time approach.

### 144:00 – 150:00 | Potential Compiler Hooks and Resumability

The host wonders if signals plus events open new doors for compilers, referencing how the Quick or Marko teams approach resumability. They imagine a scenario where the compiler statically tracks event chains for code-splitting or eliminating closures, thus simplifying hydration or partial rendering.  

Dev agrees that advanced static analysis could further cut overhead, but acknowledges that it’s an open research area. The conversation underscores how bundling and lazy loading must not disrupt the event ordering or logic.

### 150:00 – 156:00 | Wrapping Up Solid Events and Future Directions

They near the end of Dev’s library showcase, summing up how Solid Events can tackle user interactions, real-time features, or complex concurrency. The host thanks Dev for the in-depth look, pointing out how the synergy with server signals is especially powerful.  

Listeners discover that, collectively, these new libraries aim to fill a gap. The host is excited to see community input and real-world tests, hoping it will refine the APIs into stable additions for the broader Solid ecosystem.

### 156:00 – 162:00 | Concluding Dev’s Segment and Official News

At this juncture, the host announces a significant update: Dev is joining the Solid JS core team. The host commends Dev’s consistent research and practical contributions. Dev humbly accepts, looking forward to more formal collaboration and deeper exploration of signals on both client and server.  

They briefly banter about the responsibilities that come with a core team role, acknowledging that while it allows deeper involvement, it might also mean toning down any particularly spicy social media takes. Both laugh and celebrate Dev’s new role.

### 162:00 – 168:00 | Aftermath of the Solid Hackathon

The focus shifts to the recently concluded Solid Hackathon. The host acknowledges not having been deeply involved but praises the event for generating a burst of community growth. A variety of new libraries and advanced demos have emerged, showcasing local-first sync or real-time presence.  

They mention key winners, emphasizing how these entries significantly enrich the ecosystem. The host marvels at seeing polished readmes, user guides, and creative expansions that demonstrate just how far the community has come in terms of variety and sophistication.

### 168:00 – 174:00 | Notable Projects: Cobalt Components, Solid Desktop

They highlight some standout projects from the hackathon, including expansions to Cobalt’s component library, or new approaches like Solid Desktop that pair native script with signals. The host is intrigued by the idea of combining Solid’s reactivity with cross-platform UI, opening up possibilities beyond web browsers.  

Dev points out how some participants even tackled offline scenarios or complex presence-based to-do apps. They both commend the thorough documentation that entrants provided, indicating genuine dedication and thorough understanding of reactivity’s potential.

### 174:00 – 180:00 | Revisiting the Real-Time Vision

In a brief wrap-up, the host and Dev summarize the significance of real-time state solutions. They remain convinced that a fluid synergy between signals, events, and perhaps durable objects marks a new chapter for collaborative software.  

The host notes that much of the progress stems from direct user-driven innovation like the hackathon entries. Dev praises the community’s willingness to experiment, bridging fundamental building blocks with advanced features such as concurrency or data modeling. They anticipate an even brighter future for Solid in real-time collaboration.

### 180:00 – 186:00 | Host’s Recent Deep Dive into Stores

The host then transitions to his personal research on stores, referencing prior streams about patching and diffing in immutable versus mutable systems. He mentions working on bridging the gap between ephemeral updates and persisted references.  

As an example, he describes hooking signals to store data that can be seamlessly updated without rewriting everything in place. This leads to a discussion of reconciling new data while preserving existing object references, ensuring minimal overhead and fewer re-renders.

### 186:00 – 192:00 | Immutability vs. Mutability Revisited

They talk about immutable approaches like Redux, which rely on shallow checks, contrasted with the granular updates that signals afford. The host shares his long-running effort to unify the best of both worlds.  

Dev acknowledges how complexity arises when partial updates demand both stable references for performance and selective object replacement for concurrency. They point to real scenarios—like large forms or partial refreshes—where the store must integrate incremental updates quickly and safely.

### 192:00 – 198:00 | Potential Solutions for Store Reconciliation

The host outlines a technique for comparing incoming data with existing store references, conditionally swapping out objects if they differ, while preserving stable references. He sees this as an evolution of the reconcile function that can handle repeated merges or expansions.  

They note that the approach helps time-travel scenarios or advanced debugging, reminiscent of Redux’s dev tools. Yet, the host concedes that the solution took extensive trial and error, referencing performance experiments run on UI bench or other advanced benchmarks.

### 198:00 – 204:00 | Benchmarking Adventures

Here, the host delves into the complexities of framework benchmarks, recounting unexpected results when simulating large data sets. He mentions that certain changes ironically made the code slower in typical merges but faster in corner cases.  

Dev empathizes with the frustration of balancing code illusions and real-world usage. They acknowledge that perfect micro-optimizations rarely exist. Instead, a strategic approach ensures that day-to-day performance remains robust, regardless of the outliers in large, theoretical benchmarks.

### 204:00 – 210:00 | Addressing Scaled Insertions and Large Tables

They further dissect test scenarios like DBMon, highlighting how older solutions like Inferno or even highly optimized compilers approach massive data updates differently. The host clarifies that once signals can skip unnecessary subtrees, store overhead drops.  

Nevertheless, in extreme cases, frameworks reliant on VDOM or partial clones may still handle large merges more gracefully. Both express optimism, though, about future store enhancements bridging any performance gap left in special edge cases.

### 210:00 – 216:00 | Introducing a New Reconciliation Method

The host demonstrates a hypothetical “double-pointer” or “reference-swapping” approach in store proxies. By internally storing an unwrapped object, the store can unify immutability’s clarity and signals’ efficiency.  

Dev finds this technique interesting, noting that it might preserve stable references while also short-circuiting deeper merges. The host is eager to confirm results in real applications, hoping it ushers in a new wave of simpler, more intuitive store usage across the Solid ecosystem.

### 216:00 – 222:00 | Challenges of Top-Level Identity Changes

They confront a subtle limitation: reconciling entirely different objects at the top level. The host clarifies that unique IDs typically indicate a true swap, whereas reusing the same ID triggers a merge. If devs attempt to coerce distinct items into the same identity, confusion arises.  

Dev suggests that future store improvements may require explicit “replace vs. update” signals. They emphasize consistent patterns—like normalizing data by IDs—to avoid messy merges. This discussion underscores how front-end data shapes the entire development approach.

### 222:00 – 228:00 | Summarizing the Store Breakthrough

They wrap up the store conversation, noting that while certain design constraints remain, the new reference-swapping approach feels promising. The host likens it to rebase logic from version control: an incoming state merges into an existing tree, preserving references for performance.  

Dev applauds the meticulous approach, admiring how it retains Solid’s hallmark fine-grained updates. They see this as a long-awaited puzzle piece. Both express optimism that it will soon land in the official libraries, further simplifying advanced data flows.

### 228:00 – 234:00 | Hierarchical Reactive Scheduling Boundaries

Switching gears, the host talks about hierarchical scheduling for reactivity, explaining the notion of multiple phases—pure computations, render effects, user effects—and how some might skip if suspended. Using examples of off-screen or partially deferred updates, he envisions a nested queue system controlling each phase.  

They compare it to a layered approach, letting components pause or skip entire reactivity trees. Dev sees parallels to existing off-screen or keep-alive solutions from other frameworks, praising the potential for advanced resource optimization.

### 234:00 – 240:00 | Off-Screen Components

The host shares a small demo toggling entire subtrees off and on, revealing how signals only update relevant subgraphs. Dev suggests a future scenario where large sections of the UI remain “frozen” to spare CPU usage.  

They mention frameworks that tried partial hydration or partial unmount, but highlight how deeper reactivity is more precise. In the host’s vision, hierarchical scheduling boundaries unify suspense, off-screen, and time slicing in a single universal approach.

### 240:00 – 246:00 | Outlook on Hierarchical Scheduling

They discuss how this new layering might interact with concurrency, transactions, or partial rendering. While acknowledging complicated edge cases, the host reiterates that the fundamental logic—shifting from global to nested scheduling—promises more targeted updates.  

Dev agrees, noting that once these features mature, devs can easily incorporate advanced transitions or idle-time updates. The host assures that actual library APIs will likely remain simple, hiding these complexities under the hood for typical use cases.

### 246:00 – 252:00 | Last Bits of Reactivity 2.0

They muse that between store improvements, event-based patterns, and scheduling boundaries, the core of “Solid 2.0 reactivity” is nearly complete. The host outlines a path for suspense refinements and small bug fixes, anticipating a stable final form.  

Dev expresses excitement for the synergy these features offer, from simpler off-screen to robust concurrency. They see immediate applications, especially in collaborative apps or feature-laden experiences that must juggle partial states.

### 252:00 – 258:00 | Revisiting React Server Components

The host briefly mentions ongoing queries about RSC and how they differ. He alludes to a conversation with other library authors about partial rehydration and potential concurrency. This ties back to the speculation that reactivity’s server approach might overshadow some RSC use cases.  

Dev notes that the overlap in server data logic or partial updates remains a lively area. While React paved the way for universal server rendering, signals-based servers might prove more intuitive for advanced real-time workflows.

### 258:00 – 264:00 | Final Thoughts on the Larger JavaScript Ecosystem

They pan out to the broader JavaScript world, reflecting on how quickly frameworks shift. The host mentions next-generation tools adopting partial hydration, partial reactivity, or advanced bundling. Dev reaffirms that the crucial factor is solving real developer problems with minimal friction.  

They also remark on user confusion about multiple new frameworks claiming to solve the same issues. Over time, clearer patterns emerge, especially around stable references, concurrency, and partial updates—areas where signals continue to stand out.

### 264:00 – 270:00 | React Scan and Performance Awareness

The host comments on ongoing discussions about React’s re-render patterns, referencing a utility that visualizes re-renders. Dev chimes in on how signals often bypass the repetitive overhead. Nonetheless, they clarify that React can remain performant in many real-world apps.  

They conclude that if devs only measure performance via re-renders, they might be misled. In practice, frameworks balance various trade-offs. The host, however, still sees value in precise updates, reaffirming solid’s philosophy of changing only what’s necessary.

### 270:00 – 276:00 | Astro, Vite 6, and the Broader Meta Framework Scene

They pivot to praising recent meta framework releases, including Astro 5’s server islands, TanStack Start’s beta, and Vite 6’s environment API. Dev underscores how these modern tools simplify bridging the server-client gap.  

The host hints at potential synergy with advanced real-time signals or store solutions. Each new framework iteration encourages exploring richer interactions, often pushing a wave of library and plugin authors to adapt quickly.

### 276:00 – 282:00 | The Future of Collaboration Tools

They revisit the prospect of real-time collaboration, referencing new lines of code needed to coordinate cursors, docs, or tasks. Dev believes smaller teams now have a chance to build advanced features once reserved for major corporations.  

The host affirms that hackathon projects exemplify how approachable real-time has become. As these concepts filter into official frameworks, devs can integrate multi-user scenarios without complex architecture or specialized services.

### 282:00 – 288:00 | Concluding Remarks on Real-Time Evolution

Both reflect on how real-time is no longer an afterthought. Tools like server signals, websockets, event logs, and local-first design may evolve into standard patterns. They appreciate that older ideas such as Meteor remain influential, though transformed by new infrastructure.  

They reemphasize that adopting a holistic perspective—client signals, server reactivity, robust offline logic—can yield cohesive experiences. The host foresees these concepts spurring ongoing research within the Solid ecosystem and beyond.

### 288:00 – 294:00 | Revisiting the Hackathon and Tying Up Loose Ends

Looping back to the hackathon, they spotlight more winning entries and honorable mentions. Dev calls out specialized libraries that introduced forms, validations, or creative animation frameworks. The host anticipates that these will become go-to solutions once documented thoroughly.  

Before winding down, the host once again congratulates all participants. He notes the synergy between new solutions and advanced reactivity, forging a path for innovative user experiences. Dev is hopeful that future hackathons will further push boundaries.

### 294:00 – 300:00 | Personal Updates and Wrap-Up

With final housekeeping, the host mentions personal errands and a break from streaming. He thanks Dev for joining and highlights the value of shared knowledge. Dev appreciates the opportunity and looks forward to further exploration, especially around large-scale concurrency or offline scenarios.  

They briefly mention the upcoming holiday season and the possibility of fewer streams for a while. The host expresses gratitude for the audience’s engagement and encourages everyone to try the new libraries or become early adopters of the reactivity changes.

### 300:00 – 306:00 | Closing Words and Farewell

In these last minutes, the host reaffirms the main achievements of the conversation, from unveiling server signals to deeper store patterns and advanced scheduling boundaries. Dev signs off with enthusiasm for the progress within the Solid community.  

The host then officially ends the broadcast, wishing everyone a pleasant time ahead and noting potential future sessions. Together, they highlight that this collaborative spirit—between maintainers, library authors, and the larger community—truly drives modern JavaScript frameworks forward.

### 306:00 – 303:59 (End)

A small correction in timestamp alignment occurs here, but effectively the session concludes. They finalize the stream, thanking viewers once again. The final goodbye underscores ongoing innovation in the JavaScript world, fueled by open discussion, hackathons, and a shared desire to refine real-time app development. The broadcast then ends on a positive, forward-looking note.