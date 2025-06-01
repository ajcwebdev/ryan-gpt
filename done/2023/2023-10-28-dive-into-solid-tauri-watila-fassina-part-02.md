---
showLink: "https://www.youtube.com/watch?v=yLjqh6dKdBc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive into Solid + Tauri w/Atila Fassina"
description: ""
publishDate: "2023-10-28"
coverImage: "https://i.ytimg.com/vi/yLjqh6dKdBc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation touching on SolidJS, Tauri, Rust tooling, and broader JavaScript framework trends, spanning everything from performance insights to development workflows.

## Episode Summary

This transcript features an extensive multi-hour discussion that focuses on web development, desktop applications, and the interplay of emerging technologies. Early on, the speakers highlight Tauri’s ability to run efficiently without bundling an entire browser, describing how Rust powers the backend and the native system’s webview presents the frontend. As the conversation progresses, they address SolidJS’s signal-based reactivity, contrasting it with other approaches like virtual DOM and exploring its suitability for projects on different platforms. The participants also revisit the evolution of frameworks such as React and Next.js, examining server components, routing solutions, and performance benchmarks. In the later stages, they provide detailed commentary on various ecosystem releases—including Astro’s partial rendering and Next 14’s features—while reflecting on community discussions around micro frontends, web components, and framework adoption at large. Their extensive technical exploration underscores both the excitement and complexity of building modern apps, ultimately affirming the importance of flexible, efficient tools that empower developers to handle an ever-growing range of scenarios.

## Chapters

### 2:24:00 — Handling Directory Removal and Confirm Dialogs

Progressing with the example, the host adds code to confirm the deletion of node_modules. They integrate Tauri’s confirm dialog API, combining it with a conditional check of whether the folder truly exists. Once confirmed, a Tauri command removes the folder, and the Solid UI reacts to the success. The pair highlight how everything remains typed and verified, from Rust’s robust checks to auto-generated TypeScript definitions.

They reflect on how this approach stands in stark contrast to older patterns of binding shell commands to a web interface. Tauri’s design ensures minimal friction in orchestrating advanced tasks while preserving a carefully restricted environment. By the end of this demonstration, they’ve built a fully functional mini-tool, letting users pick projects, measure node_modules size, and optionally wipe them out in an instant, all via Tauri’s APIs.

### 2:30:00 — Signals, Memoization, and UI Responsiveness

Conversations pivot to deeper aspects of Solid’s reactivity. The host reworks certain sections of the scanning logic, explaining how signals compare to createResource. They clarify that signals can handle ephemeral states like confirmations, while resources aim for persistent or suspense-driven data. In a typical scenario, hooking Tauri commands to signals can give near-instant feedback, especially if a user confirms an action.

The guest mentions advanced reactivity patterns, referencing open PRs or community libraries that implement different caching or rollback features. They draw parallels to frameworks like TanStack Query and how it might integrate with Tauri for data synchronization. All around, the impression is that building a highly responsive local UI becomes simpler with Solid’s granular reactivity, which maps cleanly to Tauri’s quick data round trips.

### 2:36:00 — Future Outlook for Tauri and Rust Ecosystem

In this interval, the two look ahead at Tauri 2.0’s future. The guest outlines that Tauri’s next version aims to handle iOS and Android, bridging a huge gap in cross-platform coverage. This upcoming expansion means broader use cases for Solid or other frameworks in a truly universal sense—desktop and mobile under one consistent strategy.

They also remark that Tauri is heavily supported by a distributed working group and a sponsor company. The host references the continuous rise of Rust across numerous development domains, from web tooling to backend services. Both foresee more synergy between Rust, Tauri, and next-gen UI frameworks, particularly as Rust’s performance resonates with those optimizing data-intensive tasks. The audience learns that Tauri remains a lively project with ambitious goals.

### 2:42:00 — Community Insights and Pro Tips

The conversation shifts to community support. The guest praises Tauri’s friendly Discord environment, acknowledging volunteer moderators and active contributors who rapidly address questions. They highlight how public roadmaps keep user feedback central to new feature development. The host draws parallels to the SolidJS community, which similarly thrives on inclusivity and knowledge sharing.

They stress the importance of reading official documentation for best practices, especially around the allowlist and local file usage. The pair suggest that devs new to Rust or Tauri keep their initial experiments simple, then expand as they grow comfortable. Listeners hear about advanced encryption or packaging steps they might eventually adopt. This fosters a feeling that Tauri offers a supportive on-ramp for different skill levels, bridging novices and professionals alike.

### 2:48:00 — Ongoing Rust-Driven Innovations

As they continue, the conversation returns to the notion that Tauri’s Rust core can be readily extended. The guest alludes to specialized crates for performance-critical tasks, from handling large spreadsheets to streaming live data. They emphasize that many Tauri-based products unify these crates behind the webview, letting front-end developers access massive functionalities without leaving JavaScript’s comfort zone.

They compare the approach to other frameworks that might rely on Node packages or specialized native modules. While that can work, Tauri’s design encourages a clearer separation between system-level code in Rust and view logic in JavaScript. The host imagines building advanced features like real-time video processing or 3D rendering, and the guest confirms that Tauri can integrate such workflows, provided the necessary crates or plugins exist.

### 2:54:00 — Summarizing Key Takeaways

Pausing to recap, they highlight the synergy of minimal overhead, security, cross-platform potential, and direct Rust interoperability as Tauri’s defining traits. The host lauds how quickly they assembled a functional tool for scanning or deleting node_modules. The guest underscores that this is only the tip of the iceberg—teams can design entire products around Tauri if they need native-like capabilities without incurring the overhead of Electron or React Native.

They again mention Tauri’s frequent version updates, encouraging watchers to follow official release notes and remain active in the community. The host acknowledges the chat’s questions, some focusing on bridging knowledge from older web frameworks or investigating performance. Both see Tauri’s trajectory as rising, with each release adding incremental improvements to the developer workflow.

### 3:00:00 — Shifting Toward Broader Framework Topics

At the three-hour mark, the host switches gears, indicating there’s still a segment of the stream dedicated to broader JavaScript developments, beyond Tauri. They mention the tradition of “this week in JavaScript,” where the host reviews major releases, controversies, or upcoming proposals. They see synergy between Tauri updates and ongoing transformations in frameworks like Next.js, Astro, and more.

Before transitioning, they thank the guest for demonstrating practical Tauri usage with SolidJS, providing unique insights from real-world production scenarios. The guest stays on for a while longer, chiming in on general web dev news. This gentle pivot readies the audience for a more wide-ranging conversation on performance benchmarks, new library versions, and how they might intersect with Tauri-based workflows.

### 3:06:00 — Next.js, Server Components, and React Ecosystem

The host now launches into a recap of the latest Next.js release. They explain how Next has stabilized server actions and introduced partial pre-rendering. Noting that Solid has had server functions for a while, they compare how React’s approach differs, especially around embedding closures in server-bound code. The chat spurs questions about the security model of sending closure data from client to server, an area that remains a tricky design space.

A mention of Next 14 triggers commentary about how the React team’s new features, such as revalidate tags, might or might not influence the broader ecosystem. The host highlights that solutions in frameworks like Remix or Solid Start differ significantly, shaping how the community thinks about universal data fetching. This sets a stage for deeper analysis of where frameworks are heading.

### 3:12:00 — Tensions and Innovations in Server-Side Rendering

The conversation extends into SSR strategies. The host acknowledges that partial pre-rendering effectively merges static site generation with dynamic placeholders, reminiscent of older ideas in streaming. They reflect on how early streaming attempts faced complexities in reconciling data loading with front-end reactivity. The host sees modern frameworks converging on patterns reminiscent of suspense boundaries, an approach that Solid and React share but implement differently.

They highlight how next-level SSR can optimize performance by rendering key shell elements first, then loading deeper elements asynchronously. All participants find this approach compelling, though they note that the complexity of each framework’s configuration can deter new developers. They suggest that minimal, composable solutions, akin to Tauri’s approach on the desktop side, might also emerge for server rendering. This synergy of standard patterns could unify cross-framework best practices.

### 3:18:00 — Astro’s Partial Rendering and HTMX

Shifting focus, they comment on Astro’s new partial rendering feature. The host speculates that Astro’s approach resonates with the rise of HTMX among developers who prefer minimal JavaScript in the browser. They note that Astro’s partial rendering simply returns snippet-level HTML from a route, letting frameworks like HTMX dynamically replace sections on a page.

The conversation acknowledges that some developers remain wary of mixing multiple paradigms. However, for content-heavy sites or marketing pages, a minimal JavaScript approach can be beneficial. They see Astro’s consistent rollout of new features as evidence of a vibrant ecosystem. They also joke about how ironically many “non-JavaScript” or low-JavaScript fans still rely on Node-based tooling behind the scenes. Nonetheless, partial rendering stands out as a boon for those seeking enhanced server-driven updates.

### 3:24:00 — GraphQL Observations and Shifting Trends

They touch briefly on a tweet noting GraphQL’s perceived plateau. The host speculates that GraphQL soared early on but has faced pushback as simpler solutions and direct data calls resurface. Combining server functions with query parameters can replicate many benefits without the overhead or schema definition that GraphQL imposes. Nonetheless, GraphQL retains strong popularity in certain enterprise domains.

The Tauri guest remarks that from a Rust perspective, bridging GraphQL can still be straightforward with the right crates. Yet the conversation underscores how usage patterns shift, with some devs returning to simpler REST or RPC approaches. They mention that Tauri’s model doesn’t mandate a specific pattern—it’s fully open to whichever data layer a team prefers. The evolution simply confirms that technology choices remain fluid, shaped by project needs rather than hype alone.

### 3:30:00 — The Angular 17 Performance Surprise

Attention shifts to a new JavaScript framework benchmark update. The host notes that Angular 17, especially with signals or new control flow, is performing surprisingly well. They scan the test results, pointing out Angular’s marked improvements, approaching top-tier solutions like Elm or Solid. The conversation wonders if underlying changes in Chrome’s engine or Angular’s incremental improvements have helped close the performance gap.

They also chuckle at how React’s overhead shows up in benchmarks, though it remains widely used in real-world apps. Meanwhile, frameworks like Svelte continue to push reactivity at compile time, and new contenders appear each year. The participants emphasize that raw speed is only one factor in framework selection, yet these benchmarks highlight consistent gains across popular solutions, reflecting ongoing competition and innovation.

### 3:36:00 — Next-Level Benchmarks and Lean Libraries

They discuss how certain minimal libraries like EV or block-dom top the charts with specialized approaches. They mention the intricacies behind measuring partial hydration or ensuring apples-to-apples comparisons. The host explains that while the JS Framework Benchmark is helpful, context always matters. For example, shipping an entire framework in a real app often leads to bigger bundles than a single Hello World scenario.

They also muse over whether bundlers or new JavaScript engine optimizations are accelerating these frameworks collectively. The host points out that advanced features like concurrency or partial hydration can complicate direct comparisons. The guest concurs, echoing that developer experience and project demands often outweigh pure benchmark results. Yet seeing Angular signals side by side with Solid exemplifies how reactivity is shaping the future.

### 3:42:00 — Netlify Caching and Infrastructure Insights

The host brings up recent Netlify announcements about flexible caching headers, coalescing partial page data with dynamic keys. They stress how these small enhancements can change how people approach server-side generation. By letting developers tie caching logic to cookies or query params, Netlify edges closer to on-demand or partial rendering illusions, bridging typical SSG with dynamic content.

They appreciate that deeper platform-level caching can spare frameworks from implementing complex logic themselves. The conversation dovetails with references to other providers. Tauri is primarily focused on local or desktop scenarios, so the synergy with advanced web hosting might be tangential, yet the host highlights how universal caching knowledge can help in multi-platform approaches. This underlines the complexities of shipping experiences across many device types.

### 3:48:00 — Kent C. Dodds’ Article on Next.js

They pivot to a newly released blog post by Kent C. Dodds, “Why I Won’t Use Next.js.” Both the host and chat participants weigh in. They note Kent’s background with Remix, acknowledging that his stance might align with that framework’s philosophies. The article critiques Next’s fast-moving targets, reliance on advanced React features, and a sense that the framework overshadowed the rest of the React ecosystem.

Discussion highlights that many are exploring smaller or more specialized solutions, citing examples where Solid or SvelteKit might fulfill similar roles with less overhead. The group sees the interplay between Next and React as simultaneously beneficial and constraining. Some are disillusioned by what they view as Next’s potential to limit React’s evolution. They emphasize it’s less about one being better, more about the ecosystem’s fragmentation.

### 3:54:00 — Ownership of React and Vercel’s Influence

Extending the theme, the host wonders how much React’s direction is shaped by Vercel, referencing the joint push for server components. They mention that many core React contributors joined Vercel, while a substantial portion remains at Meta. Confusion arises over whether React primarily serves product interests at Meta or new features from Vercel. Some see it as healthy pluralism; others sense tension in adopting big features like server components.

They also mention that Remix has parted ways from React’s official roadmaps, forging its own path. The conversation underscores how the fragmentation can cause confusion for average developers. Observers question whether monolithic frameworks overshadow simpler solutions or hamper the community’s ability to adopt new ideas. The speakers conclude it’s a delicate balance—open collaboration with corporate sponsorship can drive innovation but risks overshadowing alternative approaches.

### 4:00:00 — Embracing Alternative Framework Approaches

Pivoting away from React, they share personal reflections on simpler frameworks. The host recounts how some developers prefer signals or ephemeral states, seeing them as more direct. They praise the modular approach that allows a developer to pick data libraries or patterns without feeling locked into a single monolithic framework. Mentioning Solid Start’s progress, they highlight a preference for building “a la carte” solutions that can incorporate server actions or partial hydration only when needed.

They illustrate how smaller tools, like SvelteKit or Astro, can still deliver robust experiences without adopting every aspect of React’s architecture. The conversation emphasizes that this is not to disparage React—just a recognition that multiple approaches exist. They hope the ecosystem remains open to experimentation, pointing out that new projects like Quick or signals-based Angular are also part of this evolving puzzle.

### 4:06:00 — Further Critiques of Next’s Complexities

Returning to Kent’s article, they dig into its mention of Next’s magical behaviors, such as overriding global fetch or heavily guiding deployment choices. The group sees parallels to prior controversies around create-react-app and how such scaffolds might limit developer knowledge. They discuss open next, an initiative to replicate Vercel-specific features on other hosting providers. This is relevant for teams wanting to avoid vendor lock-in.

They also note that while some see Next as the official “meta” framework for React, others find that an oversimplification. The friction stems from advanced features like nested routes or partial rendering that require deep integration with React’s server tools. The chat suggests that a simpler route-based or file-based approach might suffice for many. Overall, this segment underlines friction between the push for new standards and the practicalities of building stable apps.

### 4:12:00 — Remix, Server Actions, and RSCs in Perspective

The host compares Remix’s approach to data loading and actions with the new server action model in React. They highlight that remix has an older heritage of form handling, partial reloads, and server-bound state, while React is still standardizing closures for actions. The conversation references RSC’s closure encryption, a topic that perplexes some developers. They suspect that the average user might rarely need direct closure passing if simpler request boundaries suffice.

They reflect that frameworks like Solid Start or SvelteKit have different trade-offs. The host specifically cites how Solid Start has had server functions for a while, but that’s decoupled from the strong opinions of a meta framework. They see a future where frameworks converge on patterns of universal data retrieval, whether via advanced SSR or minimal server calls. The only certain thing is that innovation continues at a rapid pace.

### 4:18:00 — Potential Gains in Transparent Data Handling

Turning to an optimistic note, they talk about how improved standards around server interactions can unify the developer experience. The host suggests that simplifying calls to the server or clarifying how closures are handled might help novices avoid classic pitfalls. Similarly, stable caching or tagging systems can allow partial page updates without reloading everything. The conversation circles back to the notion that smaller, composable primitives might eventually outshine large, prescriptive frameworks.

They hypothesize that if advanced features like streaming or partial hydration become easier to adopt, many developers could end up shipping more efficient web apps without mastering arcane configurations. The Tauri guest likens it to how Tauri handles file system permissions gracefully behind an allowlist. Both see the future as bright, provided the ecosystem fosters healthy competition and cross-pollination of ideas.

### 4:24:00 — Community Reactions and Closing Thoughts on Kent’s Post

They share quick takes on how the community has responded to Kent C. Dodds’ viewpoint. Some are enthusiastic about hearing a major voice critique Next, while others see it as a purely Remix-centric stance. The host acknowledges that for large teams comfortable with Next, such critiques might not resonate. But for those exploring alternatives, it reassures them that stable, production-grade options exist outside the React+Next mainstream.

The guest underscores that no framework is perfect. They mention that Tauri faces similar comparisons to Electron, and many remain content with Electron’s ecosystem. Ultimately, it depends on specific needs. The conversation ends with a balanced viewpoint: thoughtful critiques can spark necessary change, prompting maintainers to clarify directions or address friction points. The host notes that robust dialogues ultimately strengthen the open-source community.

### 4:30:00 — Revisiting Tauri’s Place Among Frameworks

The host returns the focus to Tauri, speculating on how next-generation frameworks might pair with Tauri’s approach. They mention that partial or zero-JS solutions can still slot into Tauri, though some developer convenience might come from frameworks like Solid or React. They imagine a scenario where Tauri unifies front-end solutions for distinct OS targets, while server frameworks unify data fetching.

They briefly address the question of whether Tauri might overshadow specialized bundlers or package managers. The consensus is that Tauri primarily targets distribution format and system integration, not the entire build pipeline. Partnerships with Vite or other bundlers remain essential. This highlights Tauri’s neutral stance: it wants to be an enabler for multiple frameworks, rather than imposing a singular path.

### 4:36:00 — Potential Mobile Overlaps and Developer Strategies

They extend the conversation to how Tauri 2.0’s mobile support could sit alongside existing solutions like Capacitor or React Native. The guest notes that Tauri is designed to feel consistent across platforms, so minimal changes might be needed for Android and iOS versions of a Tauri-based desktop app. The host references complexities of dealing with app stores or device-specific permissions, expecting Tauri to provide a streamlined experience.

They also highlight that Tauri’s plugin ecosystem might expand further once mobile support is stable, with official or community additions for notifications, camera, or location. The conversation underscores that building multi-platform apps can be complex, but Tauri’s minimal approach can lessen duplication. This again affirms that Tauri is steadily broadening its scope without forcing radical changes on developers.

### 4:42:00 — Wrapping Up the Tauri Segment

At this juncture, the host signals the tail end of the Tauri-focused portion of the stream. They thank the guest for a wealth of insights, from Rust fundamentals to advanced concurrency. Tauri’s security posture, synergy with Solid, and forthcoming mobile aspirations all gain emphasis. The guest reaffirms Tauri’s active, welcoming community, encouraging curious viewers to join the Discord or experiment with the provided templates.

They part ways with a final note on the Tauri design philosophy: let web developers reuse their knowledge while harnessing native OS capabilities. The synergy has proven fruitful for large-scale data processing apps and simpler personal utilities alike. After some lighthearted farewells, the guest steps aside, leaving the host to transition fully into a short recap of broader JavaScript ecosystem news and final reflections.

### 4:48:00 — Reactions to the Wider Tech Sphere

The host glances again at ongoing discussions in chat related to Next.js, React’s future, and alternative frameworks. They read a few remarks about the ephemeral nature of hype cycles—fads come and go, yet stable ideas like signals seem here to stay. They mention the upcoming sections where they plan to talk about frameworks or libraries that recently launched updates, hinting at new potential for partial hydration or advanced SSR in mainstream tools.

Responding to a question, they outline how Tauri might tie into other modern frameworks beyond Solid, noting community-driven efforts with React, Vue, or Svelte. They confirm that Tauri’s usage grows monthly, as developers discover how minimal it is to embed their web code in a compiled desktop environment. This resonates strongly with teams wanting more control than Electron but fewer maintenance headaches than an all-native approach.

### 4:54:00 — Insights on Tauri’s Next Steps and Beta Features

Some final Tauri-related queries pop up, prompting the host to elaborate on minor features or known limitations. They mention the upcoming Tauri inspector tool for deeper debugging, acknowledging that many devs rely on typical browser devtools but might want more. They also note that a dedicated community working group addresses security audits as Tauri edges closer to enterprise adoption.

They wrap up by iterating that Tauri isn’t just a neat toy—it’s used in real commercial applications already. Meanwhile, the host reaffirms personal excitement for Tauri’s desktop plus mobile trajectory. For teams seeking a single codebase spanning nearly all devices, they see Tauri as an intriguing path forward. The host commends the Rust ecosystem’s reliability, ensuring that Tauri’s foundation remains robust.

### 5:00:00 — Transition to Closing JavaScript Notes

The conversation shifts to the host’s trademark “this week in JavaScript” segment. They prepare to look at various library releases, from small bug fixes to major version jumps. Mentioning that these notes cover topics that might or might not relate to Tauri, the host invites viewers to stick around if they want a fuller picture of modern web dev happenings.

They highlight how each small improvement—from Netlify’s caching optimizations to new React proposals—illustrates an ever-evolving web. While Tauri addresses cross-platform distribution, the host sees endless room for synergy with the continuous innovation in bundlers, frameworks, and server environments. This broad perspective sets up an extended concluding portion where the host outlines their personal to-do list, including finishing features for Solid Start’s next release.

### 5:06:00 — Final Remarks and Wrap-Up

In the last few minutes, the host reiterates thanks to the guest, recapping how the conversation ranged from Tauri architecture to Rust bridging, from signals-based reactivity to multi-platform front-end design. They hint at future streams diving into other native solutions, mentioning next week’s focus on NativeScript, continuing the theme of bridging web and native realms. Chat receives a final acknowledgment, and the host notes an upcoming break for pizza, jokingly marking a well-earned reward after a lengthy session.

With logistical details out of the way, the host offers parting words to the audience, encouraging them to experiment with Tauri, explore the Rust ecosystem, and remain open to the lively changes happening in JavaScript frameworks. The stream concludes on an upbeat note, promising more deep explorations of cross-platform web technologies in the following sessions, ensuring that listeners remain engaged with the continuing evolution of modern development practices.