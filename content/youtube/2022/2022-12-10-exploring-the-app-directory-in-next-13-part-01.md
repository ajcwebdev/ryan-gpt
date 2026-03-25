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

### 00:00:00 - Initial Thoughts on Next 13 and Previous Attempts

In this section, the speaker greets the audience and sets the stage for a session focused on Next 13’s new features. They reference a prior stream where they tackled Next.js while relying on chat for guidance, reflecting on challenges around link tags and server-side props. This preview underscores the speaker’s hope that server components in Next 13 will prove more polished than earlier versions, easing adoption.

In this section, the speaker also emphasizes the broader context of why Next 13 is crucial. They note that server components hold potential for creating hybrid multi-page and single-page experiences. The hope is that this technology will reduce overhead by limiting client-side JavaScript only to necessary sections. This opening chapter foreshadows a deep exploration of how Next 13 might reshape the way developers approach page routing, data loading, and rendering.

### 00:06:00 - Revisiting Past Experiences with Next.js

During these minutes, the speaker recounts a previous live session that involved porting a Hacker News demo to Next, tackling numerous small adjustments. Those included rewriting link tags and rethinking data retrieval. They joke about how changing anchors became a major theme, highlighting how small details can occupy significant development time.

They also reflect on receiving real-time advice from chat participants, showing the collaborative spirit of streaming. This segment underscores the speaker’s eagerness to try Next 13’s app directory, hoping to see big improvements and less boilerplate work. The remarks set up an expectation that the updated Next.js architecture will better handle recurring issues such as routing intricacies, link usage, and data-fetching strategies.

### 00:12:00 - Transitioning from Single-Page to Multi-Page Ideals

Here, the speaker questions long-held assumptions that all web apps must inevitably become fully single-page applications. They invoke performance experts who note that not every site needs extensive client-side interactivity. In particular, the speaker highlights how large content-based sites often benefit from multi-page approaches, limiting unnecessary JavaScript downloads.

They then introduce the “islands architecture,” an approach that partially hydrates only specific interactive elements. This technique, the speaker notes, has been quietly used by e-commerce giants for years. They hint that Next 13’s server components echo this philosophy, allowing developers to combine old-school multi-page performance with the smooth transitions of single-page interactions, without shipping massive bundles.

### 00:18:00 - Understanding Server Components’ Philosophical Shift

In this window, the speaker dives into the conceptual leap of server components. They describe a pivot in framework philosophy, comparing earlier single-page assumptions to modern acceptance that some logic is better kept server-side. Historically, React embraced an “all-in” client model, but next-generation solutions now acknowledge how over-delivering JavaScript often impairs performance.

They emphasize how Next 13’s server components might blur boundaries, letting major parts of the UI exist only on the server. This approach, in theory, eliminates large chunks of rehydration overhead. It also reintroduces multi-page sensibilities—providing server-side rendering for the bulk of content—while retaining client routing for interactive sections. The speaker views this shift as significant, noting it might influence how major frameworks evolve in the near future.

### 00:24:00 - Islands, Server Streams, and the Future of Hybrid Models

During these minutes, discussion turns to existing “islands” implementations in frameworks like Astro, noting their efficiency in avoiding full client re-renders. The speaker celebrates how partial hydration benefits performance-conscious sites. They connect this to React server components, explaining that Next 13 now attempts a similar concept by default, though with a different internal mechanism.

They further outline the potential synergy between multi-page flows and persistent client states. By blending server-rendered content with selective browser-based updates, developers can reduce overhead and streamline the user experience. However, they caution that truly unlocking these advantages requires a deep shift in architecture, encouraging listeners to stay open to new patterns around caching, streaming, and partial hydration.

### 00:30:00 - Debating Bundles, Performance, and Streaming Approaches

In this segment, the speaker tackles the interplay between bundle size and actual performance gains. They reflect on how shipping fewer kilobytes to the browser is generally beneficial, but also stress that real-world responsiveness depends on complex factors like concurrency and streaming data. They critique how single-page frameworks sometimes place burdens on initial load times or hydration steps that hamper user interaction.

Next 13’s streaming approach, they argue, can improve perceived performance, letting parts of the page render as soon as data is available. They note that shipping a minimal client script, then incrementally adding interactivity, is a technique adopted by frameworks like Astro, Quick, and others. These points underscore the broader theme: performance improvements derive not just from smaller bundles but also from smarter server-client coordination.

### 00:36:00 - Adopting Server Components in Practice

Here, the speaker pivots to practical usage of Next 13’s server components. They share the excitement for a development style that merges classic multi-page server rendering with the fluidity of client-side routing. Concretely, they mention how Next’s “app directory” aims to reduce friction around data-fetching and dynamic page loading, all while ensuring large portions of the UI remain server-rendered.

They temper expectations, acknowledging that real adoption may require significant mental shifts. Developers used to a single-page mindset may need to rethink how they structure components, manage state, and perform data calls. Despite potential learning curves, the speaker insists that the payoff could be substantial, as server components unify multiple concerns into a more streamlined pipeline.

### 00:42:00 - The Role of Reactivity and Fine-Grained Updates

During these minutes, the speaker segues into reactivity patterns. They contend that React’s virtual DOM approach can become cumbersome when large sections re-render. Instead, fine-grained reactivity—splitting state into smaller atoms or signals—can yield more precise updates. They point out that advanced frameworks are increasingly embracing such reactive models to handle dynamic data more efficiently.

They also note that, while Next 13 doesn’t fully switch to a fine-grained approach, server components represent a step toward more nuanced updates. By leaning on the server for much of the heavy lifting and sending only minimal states to the client, Next 13 can selectively hydrate just the necessary parts. In practice, this might close the gap between standard React’s overhead and the more targeted approach championed by specialized libraries.

### 00:48:00 - Real-World Navigation and Client-Side State

Here, the conversation focuses on real-world scenarios involving transitions between pages. The speaker explains how frameworks often rely on client-side routers to preserve state—for instance, keeping a user’s scroll position or form data intact. They highlight how partial server rendering can fit neatly with these interactions if carefully orchestrated.

They acknowledge a trade-off: maintaining client state while refreshing server-rendered views is challenging. If done incorrectly, one might re-initialize everything on each navigation, losing ephemeral data. However, the speaker is optimistic that Next 13’s structure will let developers strike a balance, capitalizing on server-rendered advantages without sacrificing stateful UI elements that users expect from single-page apps.

### 00:54:00 - Code Example Preparations and Hacker News Demo Setup

As the stream progresses, the speaker decides to demonstrate server components through a Hacker News example. They set up a fresh Next 13 project, describing the necessary commands and configuration files. They highlight differences from older Next versions, such as the experimental app directory and TypeScript defaults.

They talk viewers through the folder structure, referencing existing Hacker News code from a Remix-based project. The speaker clarifies that, to reduce repeated effort, they aim to reuse logic wherever possible while adjusting to Next 13’s new patterns. This tangible coding step ushers in the practical side of the broadcast, contrasting earlier conceptual talk with hands-on experimentation.

### 01:00:00 - Handling Routes and Converting Link Elements

Next, the speaker tackles Next 13’s routing scheme, noting how page files and layout files replace many older Next.js conventions. They adapt existing imports and switch from Remix’s routing to Next’s. Because Next 13 continues to require certain patterns—like `<Link href="/somewhere">`—the speaker references prior frustrations around anchor tags and link usage.

They mention the challenges of preserving consistent navigation in the new layout system. Despite the improved architecture, certain tasks remain tricky for users new to the approach. The speaker plans to preserve as much logic as possible from the Hacker News code, demonstrating how to map Remix’s data-fetching routines onto Next 13’s server components.

### 01:06:00 - Subtle Differences in Data Fetching and Props

Here, the speaker dives deeper into how Next 13 manages data fetching differently than Remix. They compare loader functions in Remix with Next 13’s server-side logic, specifically looking at how search parameters and route parameters are extracted. The speaker is intrigued by built-in features like `Headers` or specialized server APIs in Next 13, though they note documentation can be confusing.

They also emphasize type safety in TypeScript, which can be more intricate than in Remix. Repetitive adjustments to code become apparent, such as changing `to` props to `href` and updating certain object shapes. Listeners learn the nuance of rewriting typical Remix data calls for Next’s environment, highlighting how small naming shifts can cause big changes in project structure.

### 01:12:00 - Multi-Page Catch-All Routes and Templating Nuances

During this interval, the speaker explores Next 13’s approach to dynamic or “catch-all” routes using bracketed folder names. They recall how Remix handles path segments and compare it to Next’s `[[...slug]]` or `[[...stories]]` syntax. Achieving top-level fallback pages proves somewhat intricate, pushing the speaker to experiment with folder naming conventions.

They also discuss styling issues that arise from global CSS or shared layouts. Class name collisions or specific ordering can lead to unexpected results. The conversation underscores how powerful Next’s new directory system can be, yet how carefully developers must structure folders, layouts, and global styles to keep everything predictable.

### 01:18:00 - Introducing Server and Client Components in Practice

Here, the speaker addresses the distinction between server and client components within Next 13. They begin outlining a plan to separate interactive pieces—those needing state—from purely server-rendered components. A key example is toggling nested comments in a Hacker News item, highlighting how only small parts truly need to be client-driven.

They reflect on how React’s older patterns required extensive hydration for any dynamic piece. With Next 13’s server components, large static areas can remain server-only, and a small toggle button can handle show/hide logic. This conversation sets the stage for further real-life patterns, showing how to interleave server-driven content with minimal client JavaScript.

### 01:24:00 - Crafting a Toggle Component for Comment Collapsing

In these minutes, the speaker begins writing a small “toggle” component that uses React state to collapse and expand comments. They explain how only that button’s logic will be included in the final client bundle, while the rest of the comment tree can stay purely server-rendered. The approach aims to limit overhead, sending minimal JavaScript to the browser.

They note how earlier multi-page frameworks lacked such fine-grained partitioning, forcing global hydration even for tiny bits of interaction. The speaker sees real promise in Next 13’s approach, although they stress that developers must be mindful of where they place `use client` directives and how to pass data back and forth. This combination of old and new leads to a partial hydration-like result.

### 01:30:00 - Challenges with Class Names and Conditional Rendering

At this point, the speaker confronts minor styling concerns. They highlight how toggles might rely on dynamic class strings to reflect open or closed states. Because Next 13 still uses React under the hood, the speaker reminds viewers that standard React conditional classes apply. They adjust class concatenations for open and collapsed states, ensuring a coherent user experience.

They also explain how older frameworks might have done something similar with custom directives or two-way binding. Next 13’s method remains closer to typical React usage, albeit within a new server-client boundary. The speaker commends the ability to keep logic minimal while letting the server handle structure. By the end of this segment, they confirm that the comment-collapsing system works as intended.

### 01:36:00 - Validating the Hacker News Page and Inspecting Output

Having achieved a functional comment toggle, the speaker reloads the local server to confirm everything renders. They open the browser’s DevTools, skimming through network requests and scripts to see if the correct JavaScript payload is shipped. They are curious about any extraneous data in the HTML or rehydration content.

They remark that Next 13 might still serialize certain information for server components, but overall the client bundle remains smaller than in a full single-page setup. This partial victory showcases how server components can cut down load times for large lists of content, though a small overhead for advanced routing persists. The speaker suggests that as Next matures, the overhead could shrink further.

### 01:42:00 - Production Build vs. Development Mode Observations

During this section, the speaker runs a production build to compare real-world performance against development mode. They discover that dev mode often inflates script sizes and logs extraneous warnings. In the production build, network requests and hydration steps appear more optimized, matching or slightly improving upon older Next versions.

They note that an essential test is how quickly the page becomes interactive, especially under suboptimal network conditions. The speaker acknowledges that the improvements from Next 13 can be subtle on small demos, such as a basic Hacker News list. They advise that more dramatic differences might appear in real apps where large dynamic regions remain server-rendered, shrinking the client’s JavaScript footprint.

### 01:48:00 - Testing Larger Comment Trees for Performance Gains

In these minutes, the speaker navigates to stories with hundreds of nested comments, eager to see if partial hydration significantly cuts load times. They compare the new Next 13 app with an older Next 12 or Remix variant, measuring differences in DOM size, payload, and interactive readiness. Results appear promising, though not universally game-changing.

They propose that for genuinely massive content, server components can drastically limit the rehydration cost, skipping unnecessary client scripting. But for small or medium pages, the net effect may be modest. The speaker recommends that teams weigh the complexity of new architecture against potential performance wins, concluding that Next 13’s sweet spot lies in content-heavy or multi-route applications.

### 01:54:00 - Weighing Partial Hydration vs. Full Single-Page Apps

Here, the speaker reflects on the industry’s pivot away from fully client-side rendered solutions. They recall a time when single-page apps dominated discussions, but now frameworks race to offload more work to the server. They credit earlier pioneers of partial hydration for demonstrating how to glean multi-page performance without sacrificing advanced user interfaces.

Yet they caution that not every app type gains from a primarily server-rendered approach. Highly interactive tools, akin to design software, might favor advanced client patterns. The speaker encourages developers to weigh usage patterns, considering whether a multi-page or server-heavy architecture best fits the project at hand, rather than blindly defaulting to a single-page strategy.

### 02:00:00 - Previewing Future Approaches and Edge Deployments

As the discussion proceeds, the speaker mentions how some frameworks leverage edge computing or runtime streaming to push performance further. They praise solutions that can deliver partial responses quickly, improving time-to-first-byte and user feedback. Next 13’s approach may evolve in that direction, but the speaker admits it is still early in the life cycle.

They recall prior struggles testing newer features on serverless or edge platforms, including incomplete documentation or unhandled edge cases. Despite these hurdles, the speaker believes the industry is steadily moving toward an era where framework-level architecture and hosting platforms seamlessly integrate, enabling advanced techniques like chunked streaming, partial hydration, and fine-grained updates with minimal overhead.

### 02:06:00 - Reflecting on Ties to Other Frameworks and Hybrid Solutions

Here, the speaker turns their attention to how Next 13’s concepts align or conflict with other popular frameworks. They mention Astro, Quick, and Marco, each with their own partial hydration or server-first approach. By comparing their trade-offs, the speaker highlights the shared ambition of sending less JavaScript to the browser.

They also underscore the complexity that arises when mixing advanced routing, caching, and partial updates. True “hybrid” solutions can let entire segments remain server-controlled, while smaller parts maintain client state. The speaker sees common ground among various frameworks: an interest in bridging the gap between classic multi-page reloads and the fluidity of single-page apps.

### 02:12:00 - Community Interest and Persistent Skepticism

During these minutes, the speaker recounts how React server components initially met with lukewarm reception. Some developers questioned their necessity, while others saw them as too big a conceptual shift. The speaker notes a general pattern where new features often take time to resonate, recalling that even React hooks faced skepticism early on.

They also mention how existing “islands” solutions proved valuable for large e-commerce sites before the mainstream took notice. The speaker believes that if Next 13’s server components succeed in practice, broader excitement will follow, prompting more frameworks to adopt or refine similar ideas. This segment underscores the speaker’s optimism, tempered by recognition of ongoing doubts.

### 02:18:00 - Addressing DX Challenges and Partial Serialization

The conversation shifts toward developer experience (DX) implications. The speaker points out that limiting hydration to specific areas can complicate data flow and context handling. They highlight that server-only components sometimes must coordinate with client logic, leading to awkward boundaries if not carefully designed.

They then stress the importance of partial serialization—sending only essential data across the wire. Although Next 13 tries to reduce JSON footprints, some duplication can remain. The speaker believes further refinements might cut payload sizes and ease the mental overhead of deciding which components run where. They predict iterative improvements and advanced caching or streaming patterns to refine the experience.

### 02:24:00 - Balancing Single-Page Interactions with Server Rendering

Here, the speaker imagines an ideal scenario where large swaths of an interface remain server-controlled, yet intense interactions function as local single-page mini-apps. They argue that this arrangement resolves performance problems for static areas while preserving client responsiveness for dynamic tools. Achieving that harmony might demand robust caching and an acceptance that not everything belongs in client code.

They mention frameworks aiming to handle both extremes, from nearly static pages to real-time collaborative environments. The speaker contends that Next 13 is one step on that journey, though developers still must weigh trade-offs. This theme of mixing server reliability with client fluidity underlies many modern frameworks’ aspirations.