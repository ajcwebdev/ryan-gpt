---
showLink: "https://www.youtube.com/watch?v=qyQNFstxlzY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring the App Directory in Next 13"
description: ""
publishDate: "2022-12-10"
coverImage: "https://i.ytimg.com/vi/qyQNFstxlzY/maxresdefault.jpg"
---

## Episode Description

A wide-ranging discussion on Next 13, multi-page versus single-page apps, server components, and open-source concerns throughout a lengthy live broadcast.

## Episode Summary

This session opens with an overview of website architectures, contrasting multi-page and single-page approaches, and assessing how server components factor into modern development. The speaker examines how emerging frameworks aim to minimize JavaScript, highlighting novel techniques in hydration and routing. Midway, the conversation shifts toward open-source funding models, panel inclusivity, and frameworks as expressions of different design philosophies. Toward the end, topics include practical deployment considerations, community dynamics, and personal reflections on reactivity, signals, and code structure. Throughout, the speaker illustrates trade-offs and principles, offering insights on future directions for frameworks. The session concludes by underscoring the importance of thoughtful abstractions, diverse perspectives, and a willingness to experiment with new patterns, ensuring front-end development remains both innovative and accessible.

## Chapters

### 02:30:00 - Rehydration Complexity and Performance Benchmarks

During these minutes, the speaker performs informal performance checks, such as measuring load times on large comment threads. They emphasize how real performance depends on time to first byte, streaming, script parsing, and rehydration overhead. Even if a new approach cuts bundle size by half, certain real-world latencies may overshadow the difference.

They highlight tools like Lighthouse or WebPageTest, cautioning that each metric reveals only part of the story. The speaker adds that user perceptions matter more than raw scores—fast interactions and minimal layout shifts trump raw file-size bragging rights. Next 13’s success might hinge on whether it simplifies real app performance gains rather than just theoretical improvements.

### 02:36:00 - Concrete Comparisons with Other Framework Demos

The speaker references comparing Next 13 against Astro, Quick, and other partial-hydration frameworks using a Hacker News prototype. They recall that certain large comment pages timed out or threw off testing tools, reflecting how each solution tries unique optimizations. For instance, Quick defers downloading modules until needed, while Astro delivers zero client JavaScript for static areas.

They conclude that no universal winner exists, though Next 13 is now more competitive in shipping less code. Projects should choose a solution aligning with app needs, especially regarding how it handles complex interactive sections. This helps listeners see that each approach suits different workloads and that Next 13 is not guaranteed to outperform specialized alternatives in every case.

### 02:42:00 - The Sociological Angle of Industry Shifts

Here, the speaker moves from raw technology to reflection on industry trends. They note that partial hydration has existed for years, but mainstream communities often disregard or downplay it until a major framework endorses it. The speaker references how large corporate frameworks can shift the conversation, mobilizing broader developer uptake.

They also touch on the interplay between hype and genuine innovation, encouraging developers to remain open-minded without chasing every trend. The speaker believes the steady march toward server-assisted client experiences represents a genuine step forward, not just marketing. Yet they caution that these architectural transformations still demand diligence, testing, and thoughtful design.

### 02:48:00 - Community Feedback and Developer Adoption

During this window, the speaker highlights ways the community influences new releases. Beta testers and streaming participants provide real-time bug reports, helping maintainers refine documentation. They mention that although some remain skeptical of server components, many are intrigued by the potential to slash client bundle sizes.

The speaker shares personal anecdotes about how code modifications, especially rewriting entire codebases, can be time-consuming. They nonetheless see excitement building as more developers discover partial hydration’s upsides. Ultimately, the conversation suggests that gradual adoption and iterative feedback loops will guide how Next 13 evolves in real production environments.

### 02:54:00 - Reflecting on React’s Broader Ecosystem

Shifting gears, the speaker contemplates React’s place in the broader ecosystem. They recall how React once championed a purely client-driven approach, but now invests in server components to address new demands. Meanwhile, alternative libraries have introduced advanced reactivity or specialized SSR frameworks that handle data more efficiently.

They see Next 13 as React’s best effort to stay relevant and match the server-first ideas that started in smaller communities. Yet the speaker acknowledges that concurrency, partial rendering, and improved scheduling remain vital to React’s next steps. This reflection underscores that Next 13 is part of a larger conversation about how React evolves, balancing legacy expectations with modern performance techniques.

### 03:00:00 - Examining Other Meta-Frameworks and Host Platforms

At this point, the speaker broadens the discussion to the meta-framework market, referencing solutions like SvelteKit, Remix, and Solid Start. They note how these platforms bundle not just the rendering library but also routing, server integration, and deployment optimizations. As more frameworks push into this territory, the speaker suspects competition will intensify.

They also touch on the synergy between meta-frameworks and specific hosting providers, mentioning that some solutions are optimized for particular infrastructures. Nonetheless, they champion open, flexible deployment. They applaud frameworks that maintain advanced output APIs or minimal constraints, allowing developers to self-host or choose providers freely.

### 03:06:00 - Addressing Conference Panels and Representation

During these minutes, the speaker takes a temporary departure from technical matters to talk about conferences and event lineups. They note the recurring issue of panels lacking diversity. Organizers often assemble a group of well-known contributors, resulting in homogeneity. The speaker suggests that broader representation fosters healthier discussions.

They reflect on how some events draw criticism for failing to include speakers from underrepresented backgrounds. This situation can escalate quickly online, sometimes causing cancellations. The speaker underscores the importance of mindful planning and advocates for welcoming a range of experiences to align with the open-source spirit of inclusivity.

### 03:12:00 - The Complexities of Promoting Diversity in Tech

Continuing that theme, the speaker observes the challenges of making events inclusive without tokenizing participants. They acknowledge that real diversity must extend beyond just adding one speaker of a different background. Genuine inclusion calls for careful outreach and sustained community support, not last-minute additions to avert backlash.

They share personal experiences of being invited to panels only to discover all participants share similar demographics. Sometimes, the speaker says, organizers simply replicate known patterns without realizing the consequences. Though it’s a difficult area to navigate, the speaker stresses that small steps, like actively recruiting broader voices, can gradually shift industry norms.

### 03:18:00 - Balancing Expert Panels with Fresh Perspectives

Here, the speaker addresses the tension between wanting recognized experts—like framework authors—and needing new or underrepresented viewpoints. They concede that certain panels demand specialized knowledge from official maintainers. Still, such events can inadvertently exclude talented developers outside the usual circles.

They propose that conference organizers might host multiple panels: one featuring framework leads, another highlighting complementary topics, or including advanced practitioners from different backgrounds. This way, the audience benefits from deep technical authority while discovering emerging voices. The speaker encourages more creative programming to avoid homogeneity without diluting expertise.

### 03:24:00 - Shifting Back to Open-Source Innovations

Returning to the main thread, the speaker discusses how open-source culture can nurture or stifle new ideas. They praise smaller frameworks for experimenting with partial hydration, reactivity, or advanced server techniques long before major libraries. Even though these efforts can go ignored at first, open-source freedom ensures innovation flourishes somewhere.

They also highlight that large corporate sponsors can accelerate new features, as in the case of Next or React. But without volunteer-driven explorations, certain breakthroughs might never surface. In essence, a healthy ecosystem balances well-funded projects and grass-roots tinkering. The speaker believes this dynamic synergy is driving today’s wave of meta-framework transformations.

### 03:30:00 - Addressing Resumability and Advanced Reactivity

Here, the speaker delves into the concept of resumability, where the browser can instantly pick up server-rendered state without full re-initialization. They mention frameworks like Quick, which use granular reactivity to skip replaying or rehydrating entire components. This approach can minimize performance penalties and yield near-instant interactivity.

They contrast that with Next 13, which partly addresses hydration costs but still relies on certain React conventions. The speaker speculates that more advanced reactivity might arrive in future React releases or a spin-off. For now, Next 13’s server components remain a gateway to partial overhead reductions, even if they don’t fully embrace fine-grained subscription models.

### 03:36:00 - Distinguishing MPA, SPA, and Transitional Apps

In these minutes, the speaker reaffirms that many real-world applications straddle multi-page and single-page behaviors, creating “transitional” apps. They see Next 13 as catering to that large middle ground. Static pages can load instantly, dynamic widgets can act like single-page modules, and server components reduce data duplication.

They also highlight Remix, SvelteKit, and others that try to unify routing and server logic. This transitional concept means developers aren’t forced into all-or-nothing patterns. The speaker envisions a future where frameworks can further refine these transitions, letting apps start as multi-page and only become single-page where needed.

### 03:42:00 - Ecosystem Collaboration and Room for Improvement

The speaker underscores that different library communities borrow ideas from each other, referencing how islands architecture influenced React’s server components. They believe cross-pollination fosters continuous improvements in the ecosystem. Even frameworks with distinct philosophies, like Svelte or Solid, sometimes adopt key insights from each other’s breakthroughs.

Still, the speaker acknowledges plenty of friction remains. Tools can be slow to integrate changes, documentation might lag, and developers can cling to older paradigms. They urge patience, reminding listeners that widespread adoption of next-gen features can take years. Over time, progress on partial hydration, streaming, and new routing solutions will solidify best practices.

### 03:48:00 - Tools, Benchmarks, and Caching Solutions

Here, the discussion turns toward the role of bundlers, shared caches, and advanced data orchestration in server components. The speaker points out that fine-grained partial rendering demands a caching strategy ensuring identical data requests aren’t repeated multiple times in parallel. This can involve patching fetch, building custom data layers, or using compiler magic.

They note that smaller frameworks have proven these concepts but might not gain mainstream traction until major players adopt them. Next 13 already experiments with minimal caching, though the speaker foresees further refinements as real-world usage exposes pitfalls. They conclude that near-instant data availability is a worthy goal, but perfecting it will require ongoing research and iterative releases.

### 03:54:00 - Handling Context in a Server-Heavy World

During these minutes, the speaker tackles how context or shared state might be tricky if half the app remains server-driven. They give the example of nested routing, where an outer component stores session data that the server must also know about. Because server components can’t read client memory, developers must push relevant data back to the server.

They clarify that static pages or ephemeral interactions don’t demand complicated solutions, but more sophisticated apps might. The speaker reaffirms that bridging shared state across server boundaries is a key challenge. They suspect that official Next 13 patterns or future React updates might refine context usage, but it remains a temporary puzzle for advanced scenarios.

### 04:00:00 - Commentary on Larger Deployments and Multi-Team Projects

Here, the speaker envisions big enterprise teams that juggle multiple micro frontends or different frameworks altogether. With Next 13, each subsection can remain server-rendered or even be a distinct client app, as long as transitions are seamless. They see potential for partial or “isomorphic” merges that avoid rewriting entire codebases.

They caution that such patterns require robust coordination, as each team’s code might have conflicting assumptions about data loading or user sessions. Nonetheless, the ability to carve out domains and only send minimal scripts to the client resonates with the speaker’s belief that shipping a giant bundle rarely benefits users. This approach aligns with the broader push for performance at scale.

### 04:06:00 - Revisiting React’s Virtual DOM and Update Cycles

Transitioning back to technical fundamentals, the speaker comments on how React’s virtual DOM scheduling can hamper large apps. They admit that for partial updates, fully re-rendering parent components can be overkill. Hence, frameworks employing granular reactivity might handle big data sets more efficiently.

They credit React’s concurrency model for addressing a portion of the overhead but note that server components further reduce the client’s burden. This synergy of concurrency plus server-side rendering helps React-based frameworks catch up to some specialized libraries. Despite that, the speaker believes further work is needed to handle certain real-time or high-frequency updates with minimal overhead.

### 04:12:00 - Commentary on Angular, Vue, and Signals

In these minutes, the speaker references how other ecosystems tackle reactivity. They mention Angular’s upcoming “signals,” which reflect a shift toward fine-grained subscription rather than zone-based checks. Meanwhile, Vue has integrated reactivity from the start, albeit with a different approach than React.

They propose that signals can transform entire frameworks, letting them skip re-render logic when not strictly necessary. This parallels the motivation behind Next 13, which aims to reduce overhead by deferring or omitting unneeded client scripts. The speaker notes it’s an exciting time to watch multiple frameworks converge on reactivity improvements, each adding their own flavor.

### 04:18:00 - Personal Preferences and Code Ownership

Here, the speaker discloses personal biases, discussing how they prefer a minimal overhead approach with small, composable reactivity units. They contrast that with frameworks like Svelte, which lean on a compiler-driven approach to produce highly optimized output. The speaker sees merit in both methods, recognizing that each resonates with different developers.

They stress that each framework’s design choices—like using specific syntax or restricting certain patterns—speak to distinct philosophies. Whether a developer values explicit code or streamlined scaffolding often dictates which library they adopt. The speaker suggests that Next 13’s improvements can appeal to those who appreciate React’s component model but want more server-side synergy.

### 04:24:00 - The Prospect of Migration and Partial Conversions

During this interval, the speaker entertains questions about migrating existing apps to Next 13. They note that large teams might adopt server components incrementally, rewriting critical pages or high-traffic routes first. Over time, they can expand coverage, gradually reducing the overall client bundle.

However, the speaker warns that partial migrations might reveal architectural assumptions that conflict with server-driven flows. Old reliance on global client state might be the hardest to rework. They predict many organizations will weigh the cost-benefit, focusing on routes that yield the most performance gains from a server-first approach.

### 04:30:00 - Revisiting the Open-Source Landscape and Tooling

Here, the speaker highlights the roles of bundlers, dev servers, and plugin ecosystems in shaping framework capabilities. They admire how tools like Vite or specialized Babel transformations can help standardize partial hydration. Some frameworks also let advanced config produce nuanced deploy outputs, facilitating distributed or edge rendering.

They credit open collaboration for ensuring that not only Next but also smaller projects share ideas on how to handle code splitting or route-based chunking. The speaker is excited about the synergy between frameworks and the build tools that accelerate them, recognizing that each leap forward in bundlers often unlocks more advanced usage patterns in meta-frameworks.

### 04:36:00 - Deeper Thoughts on Accessibility and Route Announcements

Turning to accessibility, the speaker notes Next’s built-in route announcer, which injects ARIA-friendly announcements for screen readers. This small yet powerful feature underscores how frameworks can shape user experiences beyond performance. By default, Next 13 tries to keep navigation changes accessible without requiring extra developer effort.

They appreciate such enhancements, believing that partial hydration or server components shouldn’t ignore inclusivity features. The speaker encourages developers to remain mindful of ARIA roles, focus management, and a consistent experience for assistive technologies. Properly balancing these needs with advanced rendering techniques can be challenging but worthwhile.

### 04:42:00 - Observing the Impact of Funding and Sponsorship

Here, the speaker shifts to reflect on open-source sponsorship and the advantage large backers provide. Projects like Next, heavily funded, can experiment rapidly and push new paradigms. Smaller frameworks often rely on volunteers, stretching development timelines. The speaker sees both pros and cons: big sponsors create marketing momentum yet risk overshadowing grassroots projects.

They encourage supportive cross-project relationships rather than zero-sum competition. By learning from each other, frameworks can avoid duplicating mistakes. The speaker praises the robust community around React and Next for sharing knowledge, even if it sometimes overshadows lesser-known but equally innovative libraries.

### 04:48:00 - The Ongoing Evolution of Next 13 and Its Ecosystem

During these minutes, the speaker recaps the progress of Next 13’s release cycle, acknowledging that some features remain marked as “experimental.” They expect that production-ready stability will follow a wave of user feedback and bug fixes. Over time, the speaker predicts more specialized features like streaming and incremental static regeneration will refine how data flows to users.

They also highlight the ongoing community efforts to host Next 13 on various providers, from AWS to Netlify. Tools like Open Next, while unofficial, indicate that developers want more freedom outside the official hosting environment. The speaker finds this a healthy sign for open-source adaptability, ensuring Next 13 remains accessible to many teams.

### 04:54:00 - Revisiting Key Takeaways and Implementation Details

As the session nears its close, the speaker reiterates major themes. They highlight the synergy of Next 13’s server components with partial hydration principles, aiming to lighten client-side overhead. They recap how, by selectively rendering interactive pieces in the browser, large content sections remain cost-free to the client.

They also remind listeners that these gains rely on properly structuring routes, careful data handling, and minimal rehydration where possible. The speaker believes early adopters who grasp these concepts can build highly scalable, performant sites with less code. Yet they remain realistic that many developers must still master the subtleties of Next 13’s structure before fully reaping its benefits.

### 05:00:00 - Additional Thoughts on Developer Experience and Solidarity

During this segment, the speaker shares final insights about the developer experience. They celebrate the shared spirit of iteration, acknowledging that some confusion or frustration is typical during any significant framework shift. Nonetheless, the collaborative efforts of maintainers, early adopters, and community members can expedite the learning curve.

They also mention an ethos of solidarity among multiple frameworks, referencing how each group’s experiments guide the rest. The speaker highlights that competition is often friendlier than it appears: projects frequently borrow each other’s best ideas. They encourage watchers to keep sharing feedback, bug reports, and performance comparisons, as that collective knowledge drives improvement for everyone.

### 05:06:00 - Glimpses into Other Approaches and Final Q&A

Here, the speaker fields final questions about how Next 13 compares to frameworks with specialized reactivity. They mention that Next is not alone in exploring edge deployments, partial server rendering, or streaming APIs, pointing to alternative solutions. However, the mainstream momentum behind React ensures Next 13’s approach will influence many corners of web development.

They also respond to chat inquiries about build tooling, form handling, and advanced caching. The discussion remains technical, with the speaker suggesting practical next steps for those wanting to experiment. Emphasizing that the live session has gone on extensively, they promise to revisit or refine any incomplete aspects in future broadcasts.

### 05:12:00 - Brief Commentary on Conference Drama and Community Dynamics

In these moments, the speaker offers a short personal perspective on recent community controversies, including event cancellations due to lack of diversity. They reflect on how social media amplifies backlash, sometimes overshadowing thoughtful collaboration. While empathetic to frustrations, the speaker urges balanced conversations that still push for meaningful inclusion.

They also note that open-source communities can be both welcoming and intense, especially when high-profile frameworks release major changes. The speaker suggests that individuals remain patient and approach heated topics with humility. They believe respectful dialogue fosters a healthier environment for sharing and innovating within the broader developer ecosystem.

### 05:18:00 - Closing Remarks and Future Endeavors

In the final minutes, the speaker summarizes the broadcast’s overarching themes: how Next 13’s server components promise a new era of partial server rendering, why multi-page strategies are regaining appeal, and how open-source communities continually refine each other’s ideas. They mention plans for more in-depth examinations and real-world demos once Next 13 stabilizes.

They finish by thanking viewers for joining such a lengthy session and acknowledge the supportive nature of interactive streams. The speaker looks forward to exploring deeper case studies, more advanced configuration, and expansions in partial hydration. Concluding on an optimistic note, they emphasize that continuous experimentation, inclusivity, and shared knowledge will shape the future of modern web development.