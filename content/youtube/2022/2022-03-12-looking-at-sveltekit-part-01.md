---
showLink: "https://www.youtube.com/watch?v=DYwI1eWkMcI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Looking at SvelteKit"
description: ""
publishDate: "2022-03-12"
coverImage: "https://i.ytimg.com/vi/DYwI1eWkMcI/maxresdefault.jpg"
---

## Episode Description

A detailed exploration of SvelteKit, performance strategies, and modern JavaScript frameworks spanning four hours of in-depth conversation.

## Episode Summary

In this discussion, the speaker sets out to examine SvelteKit in the broader context of contemporary JavaScript development and performance optimization. Beginning with foundational updates on React 18 RC, TypeScript proposals, and no-build trends, the conversation soon branches into a comparison of reactivity styles across libraries like React, Svelte, and Solid. The speaker reflects on historical influences, such as Knockout, to explain how earlier patterns paved the way for these newer approaches. He then demonstrates SvelteKit in action by porting a Hacker News application, walking through data-fetching paradigms and troubleshooting configuration steps. Throughout, he continually relates these experiences to larger industry shifts, including partial hydration, edge deployment, and the potential for streaming server-side rendering. The result is a wide-ranging look at the evolution of JavaScript frameworks, the trade-offs they confront, and the future these tools are shaping.

## Chapters

### 00:00 - 00:06 — Introduction and Context

In these opening moments, the speaker greets viewers, sets up his live-stream environment, and explains the motivation behind taking a closer look at SvelteKit. He highlights a recent focus on partial hydration and bleeding-edge multi-page application architectures but decides to pause those investigations in favor of practical exploration. By referencing earlier streams, he points out how the conversation has moved from frameworks like React and Qwik to more forward-thinking topics such as server components.

He outlines that this session will revolve around SvelteKit, noting the absence of Svelte content in previous explorations. Participants in the chat receive a warm welcome, and the speaker encourages them to follow along, emphasizing that his aim is a hands-on inspection of SvelteKit’s features. The atmosphere is casual yet technically informed, laying out a foundation for methodical testing of this meta framework’s capabilities.

### 00:06 - 00:12 — Shifting Focus from Partial Hydration

After a short recap of earlier deep dives, the speaker stresses that partial hydration is still a central interest. However, he clarifies he won’t be concentrating on cutting-edge server-side concepts in this session. Instead, he proposes a temporary step back from topics like React Server Components and intricate reactivity models to concentrate on accessible, current best practices.

He points out that the most advanced conversations—particularly around streaming HTML and next-gen rendering—will resume once foundational SvelteKit features are tested. This measured shift in focus is designed to provide new insights for viewers curious about how established frameworks approach routing, data-fetching, and SSR. By setting the stage for practical experiments, he underlines the importance of seeing how SvelteKit handles real-world application constraints.

### 00:12 - 00:18 — Weekly JavaScript Highlights

The conversation then pivots to notable events in the JavaScript ecosystem, forming a backdrop for why exploring frameworks remains essential. React 18’s Release Candidate sparks considerable interest: it is seen as a culmination of six years of work, promising advanced features like suspense, transitions, and concurrent rendering modes.

He also discusses the broader tension between those who favor minimal tooling—no build steps, plain ESM usage—and those who embrace robust compilers and bundlers. These camps often clash on social media and in community discussions, reflecting fundamental differences about where development complexity should reside. The speaker situates SvelteKit in this environment, noting how it aims to simplify advanced patterns without entirely discarding modern toolchains.

### 00:18 - 00:24 — No-Build Enthusiasm vs. Comprehensive Tooling

During these minutes, the speaker reviews opinions and public discussions around eliminating build steps. He highlights how some prefer an approach reminiscent of the early web, where developers simply edited HTML and linked to scripts, while others value the performance and code-organization benefits of robust setups like Vite. He recalls personal experiences from simpler times, describing how he initially learned HTML by directly editing pages without advanced compilers.

This leads him to examine proposals for adding type annotations directly into JavaScript, fueling debates on whether that could reduce or remove the necessity for bundlers. He acknowledges the idealized appeal of no-build workflows, especially for small libraries or educational use cases. However, he also emphasizes that complex applications generally need bundling, tree shaking, and minification to keep performance in check for production deployments.

### 00:24 - 00:30 — TypeScript Proposals and Community Reactions

Here, he dives further into the buzz around the new TypeScript proposals, especially regarding typed JavaScript. While the idea of running typed code in the browser intrigues many, he points out that it does not truly eliminate build steps in large-scale scenarios. The potential to embed types as comments might boost developer experience yet rarely changes the final shipping process.

He notes how proponents of no-build solutions sometimes conflate static analysis benefits with production-readiness, leading to confusion. Although small projects may skip bundlers when static hosting is enough, enterprise-level applications typically cannot. The speaker underscores that frameworks like SvelteKit aim to balance convenience and performance, acknowledging both the allure of simpler builds and the realities of modern optimization techniques.

### 00:30 - 00:36 — JSX in the Browser and React’s Abstraction

As the speaker continues, he addresses recent calls to standardize JSX in the browser. He reflects that while JSX is incredibly popular, especially in React ecosystems, fully embedding it in the web platform might hinder more advanced compiler optimizations. He brings up React’s own stance: it has been cautious about certain introspective APIs, like cloning children, due to performance implications.

This moment emphasizes the tension between universal DSLs—where frameworks can share syntax—and specialized transformations that can yield significant gains. With references to Inferno, Solid, and Svelte, he highlights that each library makes unique compile-time choices. The fundamental question becomes how to maintain an approachable developer experience without sacrificing the advanced optimizations that compilers enable.

### 00:36 - 00:42 — Introducing React Signal Libraries

Next, the speaker explores the concept of reactivity in React, focusing on new or experimental libraries designed to track dependencies more granularly. He describes how a developer has implemented “signals” via refs to bypass the restrictions of dependency arrays. Though it cleverly circumvents some React paradigms, the speaker notes that such techniques still re-render entire components, distinguishing them from truly fine-grained solutions in libraries like Solid.

He marvels at the excitement developers show when discovering dynamic tracking that can enable conditional effects. Even if these approaches in React do not yield the same performance boosts as fully granular libraries, they showcase the community’s growing interest in more reactive patterns. This highlights the possibility that React may evolve further, bridging the gap with more specialized reactivity-based frameworks.

### 00:42 - 00:48 — Comparing Fine-Grained Reactivity

Here, he clarifies essential distinctions between Svelte, Solid, and React regarding state updates. Solid’s reactivity aims to update only what changes, whereas React typically re-renders entire components. Recent experiments in React mimic this finer control through advanced hooks or signals, but they still remain partial workarounds layered atop React’s existing architecture.

He underscores that Svelte’s compiler-driven approach also uses a reactivity model akin to signals, though it compiles reactivity into single-run blocks. From the speaker’s viewpoint, each library interprets and applies reactivity differently, reflecting design trade-offs. He sees potential for React or Svelte to adopt more refined subscription patterns if future releases place emphasis on slicing away overhead.

### 00:48 - 00:54 — Syntax Discussions and Familiarity

Turning to the subject of syntax, he observes that many developers place an outsized focus on whether a library’s code looks like React or Svelte. He explains that Solid’s JSX resemblance to React can create false expectations about how the underlying system behaves, leading to confusion. Some community members have even worked on Svelte-like templates for Solid, reinforcing that syntax alone is not the true differentiator.

He affirms that while design choices can affect how quickly newcomers can start coding, the more pivotal differences lie in performance, mental models, and architectural considerations. By sharing anecdotes from users transitioning between frameworks, he illustrates that syntax familiarity can be both a blessing and a curse, depending on a developer’s background.

### 00:54 - 01:00 — Insights from React, Svelte, and Knockout

In this segment, he recalls historical developments that influenced Svelte 3, including how React hooks and earlier reactive libraries shaped Rich Harris’s compiler transformations. Knockout’s approach is also referenced, showing that fine-grained reactivity has existed long before React soared in popularity. The speaker highlights that each subsequent tool refined the same ideas, building on revelations from previous generations.

He suggests that Svelte’s ability to run once and track changes implicitly echoes patterns from earlier data-binding libraries. Nevertheless, an important difference remains in how Svelte or Solid minimize overhead by directly targeting DOM updates, whereas React’s abstractions lead to repeated rendering of components. This historical perspective underscores why SvelteKit’s SSR strategies feel simultaneously fresh and familiar.

### 01:00 - 01:06 — Introducing the Hacker News Example

Moving toward hands-on material, the speaker announces his plan to demonstrate SvelteKit by porting his standard Hacker News demo. He references prior implementations in Solid, Remix, and Marco, explaining how each solution tackled data-fetching and routing. The code simulates switching through categories, loading items, and showing user pages to compare patterns across frameworks.

He sets the stage for a “classic” demonstration that tests SSR, dynamic routes, and parallel data-loading. By leveraging a known application, he aims to spot any pitfalls unique to SvelteKit. This approach offers viewers tangible insights into the day-to-day experience of building real-world apps in different environments, revealing subtleties that simpler demos may miss.

### 01:06 - 01:12 — Setting Up a SvelteKit Project

In these minutes, he walks through the initial setup, using the official SvelteKit CLI to generate a skeleton. He points out the newly added sample features like the to-do form, the standard file structure, and configuration files. This is a chance to see SvelteKit’s default project organization, from the “lib” folder to specialized “layout” components.

He quickly mentions the differences between including or excluding TypeScript, highlighting that SvelteKit prompts you for these options during creation. As the sample application boots, he comments on the project’s clean design and minimal overhead. This foundation allows him to start removing unneeded sample code to pave the way for his Hacker News pages.

### 01:12 - 01:18 — Examining SvelteKit’s Layout and Router

Turning to the framework’s routing, the speaker inspects how SvelteKit organizes pages into directories. He explains the concept of a “layout” component that wraps child routes, placing a navigation bar or other shared UI in a consistent spot. Observing the example’s structure helps him grasp how SvelteKit automatically creates nested routes from folder names.

He contrasts this approach with the typical React style of explicitly importing React Router. While both methods allow for powerful nesting, SvelteKit’s file-based conventions often lead to a more streamlined code layout. He also notices the presence of an “alias” or “dollar sign” import pattern, indicating that SvelteKit includes neat shortcuts for referencing project paths.

### 01:18 - 01:24 — Removing Template Code and Preparing Routes

With the skeleton app running, he starts removing default pages like “About” and “To-dos,” ensuring the project is ready for the Hacker News logic. He shows how easy it is to delete unneeded files, remarking that Vite occasionally requires a restart to recognize the removal of routes.

He then sketches out a top-level layout component where he can embed a navigation bar. Step by step, he copies over styles and placeholders from his existing Hacker News code, noting small differences in how SvelteKit references modules or handles global CSS. This mundane yet illustrative task underlines the typical adaptation process when porting an app from one framework to another.

### 01:24 - 01:30 — Implementing Dynamic Routing

Once the layout is in place, he tackles dynamic routing for categories like “top,” “new,” or “show.” He explains how SvelteKit uses file naming conventions, such as “[stories].svelte,” for parameterized routes, akin to Next.js. As he investigates the syntax, he finds that SvelteKit’s system is straightforward: “params” become available to the page.

He tests if wildcard routes and rest parameters align with his previous usage, verifying that SvelteKit can handle complex paths without issues. Though some aspects mirror older single-page application routers, the built-in SvelteKit approach eliminates the need for external dependencies. This simpler path-based mechanism stands out as one of the framework’s core benefits.

### 01:30 - 01:36 — Switching from Client-Side Fetching

Here, the conversation pivots to SvelteKit’s server-centric model. He notes that older Svelte solutions relied on client-side routers like “Svelte app router,” which often forced fetch calls after bundling. In contrast, SvelteKit’s SSR approach can load data on the server, returning a rendered page along with the relevant JSON. This avoids potential waterfalls when switching pages, a frequent pain point in pure client-rendered setups.

He also highlights SvelteKit’s “load” functions, used to fetch data before the component renders. This pattern is reminiscent of frameworks like Remix and Next, offering straightforward get-style handlers that unify SSR and client navigation. He is excited to see how SvelteKit’s design might streamline data usage in his Hacker News example.

### 01:36 - 01:42 — Using `load` for Hacker News Stories

Now, he creates a “stories.js” file (or “stories.svelte”) with an exported `load` function to retrieve items from the Hacker News API. He emphasizes that `fetch` is provided in the load context, allowing transparent usage of server or client as needed. Following the SvelteKit docs, he implements logic to parse route parameters for page numbers and categories.

He acknowledges minor differences from older Svelte 3 patterns, such as the removal of explicit onMount calls for SSR. As he wires up the data, he sees that SvelteKit will pass the resulting object into the component as props. This approach makes reusing code from other frameworks relatively painless, given his existing fetch utilities.

### 01:42 - 01:48 — Overcoming Fetch and Params Issues

During these moments, he tackles a few real-life stumbling blocks: broken fetch calls, misunderstanding how param names differ from older Svelte routers, and discovering that `url.searchParams` is readily accessible in SvelteKit. Debugging with console logs clarifies how SvelteKit merges request contexts for both SSR and client navigations.

He also alludes to the possibility of parallel data-fetching, though for his Hacker News test, he might accept a simpler solution. As he eliminates console errors, the flow of data becomes smooth. This hands-on troubleshooting showcases how even experienced developers must adapt when transitioning code from a dedicated client-side router to an SSR-first approach.