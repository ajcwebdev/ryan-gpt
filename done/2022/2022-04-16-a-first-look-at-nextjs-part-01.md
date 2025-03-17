---
showLink: "https://www.youtube.com/watch?v=m-Gl_Cc8xOg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Next.js"
description: ""
publishDate: "2022-04-16"
coverImage: "https://i.ytimg.com/vi/m-Gl_Cc8xOg/maxresdefault.jpg"
---

## Episode Description

Ryan Carniato covers web components, new framework techniques, and builds a Hacker News demo with Next.js in a detailed, two-hour exploration.

## Episode Summary

In this recording, the speaker focuses on modern web development approaches, highlighting the benefits and limitations of various frameworks. Beginning with a conversation about web components and how they compare to other libraries, the speaker underscores ongoing debates around performance and the role of native browser standards. The overview then shifts to cutting-edge rendering strategies, emphasizing concepts like server-side rendering, partial hydration, and resumability. Practical insights arise as the speaker codes a Hacker News clone, illustrating data fetching patterns, routing conventions, and deployment workflows. By sharing code snippets and real-time debugging tips, the speaker illustrates both the ease and intricacies of working with tools like Qwik, Next.js, and others. The concluding remarks revisit performance metrics, stressing that the right solution depends on project scale, user needs, and developer preferences, leaving listeners with a nuanced perspective on the evolving front-end ecosystem.

## Chapters

### 00:00 - 00:06 Introduction and Initial Greetings

In these opening moments, Ryan sets the stage by welcoming viewers to his stream, briefly referencing Good Friday and acknowledging that it might affect some people’s schedules. He shares a lighthearted anecdote about unexpected interruptions and invites everyone to grab a refreshment and settle in for the session. By establishing a relaxed tone and an interactive atmosphere, Ryan encourages audience members to participate in the chat. He frames the general plan for the live stream, signaling that this installment will concentrate on exploring Next.js, a tool he’s eager yet somewhat anxious to try. The speaker’s enthusiasm, combined with a casual vibe, primes listeners for a hands-on and conversational learning experience.

Through this early setup, Ryan reveals a blend of excitement and nerves, reflecting both his familiarity with multiple JavaScript frameworks and his limited direct exposure to Next.js. This contrast establishes an undercurrent of curiosity that weaves through the rest of the session. By emphasizing the community aspect of the live stream, Ryan invites the audience into his process, ensuring they feel like co-collaborators rather than passive viewers. This approachable attitude sets a positive context for the deeper discussions and coding explorations that follow.   

### 00:06 - 00:12 Overview of Recent JavaScript News

During this segment, Ryan transitions into a “This Week in JavaScript” portion, sharing noteworthy events and insights from the broader ecosystem. He highlights community dialogues, updates on solidjs, and mentions other frameworks that have captured his attention. Drawing attention to hackathon results and new library releases, he underscores how quickly the JavaScript world evolves, making consistent learning essential for any developer.

He also touches on intriguing debates simmering within the community, such as the balance between web standards and framework-driven approaches. The conversation illuminates the variety of perspectives and personalities contributing to the fast-paced open-source environment. By providing such context, Ryan establishes how these broader industry movements inform his own coding endeavors, including his intention to look more closely at Next.js in the hours to come.

### 00:12 - 00:18 Talking About Web Components and Debates

Here, Ryan dives into the often contentious territory of web components. He references social media arguments and personal “trigger points,” noting that some individuals espouse native web components as the ideal solution, while others prefer frameworks that offer more specialized tooling and performance optimizations. Citing examples of debates on Twitter, he highlights how language can become divisive, with terms like “framework authors” and “web component advocates” occasionally set at odds.

Despite any friction, he acknowledges that many frameworks, such as Svelte, Vue, and Solid, can indeed generate web components, suggesting the divide might be more philosophical than technical. He reflects on different use cases—like design systems needing cross-platform compatibility—and how these scenarios can justify using web components. The conversation reveals a bigger question about the future of front-end development: whether components should be viewed as a universal standard or just one choice among many.

### 00:18 - 00:24 Reactivity, the Virtual DOM, and Early Perspectives

In this portion, Ryan contrasts the reactivity model against virtual DOM approaches, drawing historical connections to early frameworks like Inferno and Elm. He recalls past assumptions about performance—how some believed a straightforward virtual DOM was the pinnacle of efficiency—only to see new paradigms emerge. By recounting old benchmarks and sharing anecdotes on how certain libraries gained popularity, he underscores how developer values shift over time.

He also mentions nuanced features, such as “slots,” that appear in different ecosystems, reinforcing how shared ideas often wind up in both framework-based and web component–based designs. This broader retrospective illustrates how no single approach is inherently superior; rather, each library, from Inferno to Solid, has refined particular aspects like performance or developer ergonomics. Through these historical references, Ryan lays the groundwork for why Next.js, itself an evolution atop React, remains relevant amid constant innovation.

### 00:24 - 00:30 Quick Updates on the Solid Ecosystem

During these minutes, Ryan spotlights developments in the SolidJS community, including a recent hackathon with over 50 submissions. He expresses excitement at the breadth of projects people created, highlighting that the framework’s momentum continues to grow. Though a portion of the stream will be devoted to Next.js, he makes it clear that Solid remains a significant focus for him, reflecting his role as a maintainer and advocate.

He also briefly mentions how dialogues about web standards, performance, and reactivity directly inform the Solid ecosystem. The hackathon entries, for instance, often push boundaries on what can be done with minimal overhead or advanced rendering tactics. This interlude underscores the real-world applications emerging from theoretical discussions, demonstrating that thriving open-source communities produce tangible outcomes and inspire further progress.

### 00:30 - 00:36 Lexical: A New Text Editor from Meta

In this segment, Ryan introduces Lexical, an open-source text editor from Meta that recently went public. He recounts how the core engineer behind Inferno joined Meta and dedicated efforts to building a highly performant, accessible text editor framework. Ryan praises the approach, highlighting Lexical’s focus on speed, accessibility, and a declarative-like state that stands apart from traditional contentEditable implementations.

Enthused by the release, he mentions that a Solid integration for Lexical already exists, showcasing how quickly new technologies can spread. While admitting he’s not an expert in text editing systems, Ryan admires the technical sophistication of designing a specialized reconciler for text. He sees Lexical as an example of how performance-minded developers continue to push boundaries, moving beyond the conventional scope of front-end frameworks.

### 00:36 - 00:42 Hacker News Demo Comparisons

Ryan shifts focus to the now-familiar Hacker News demo he employs as a performance and hydration test across numerous frameworks. He notes that participants in the Solid hackathon submitted examples, and he’s continually impressed by the variety of approaches. Various communities—Elm included—have contributed versions, illustrating how each framework handles complex, nested data rendering.

These examples spark further discussion on whether or not advanced hydration techniques, such as partial or progressive hydration, truly affect day-to-day developer experience. Although Ryan’s demos are intentionally extreme, they offer clear insights into how libraries react under stress. This segment establishes the theme of balancing real-world scenarios with synthetic tests, teaching viewers how to interpret results from performance benchmarks.

### 00:42 - 00:48 Revisiting Performance Metrics and SSR

Delving deeper into performance, Ryan discusses how server-side rendering (SSR) isn’t always necessary for achieving fast load times. Drawing from personal experience, he recalls a period when client-side rendering in Solid outperformed many SSR solutions in certain benchmarks. However, he concedes that more diverse network conditions, especially slower connections, have since prompted him to appreciate SSR’s role.

He explains how frameworks like Remix and SvelteKit sparked his curiosity, showcasing the potential of server-driven rendering combined with modern development patterns. This acknowledgment hints at the topic to come: exploring how Next.js, a pioneer of SSR in the React realm, accomplishes key tasks and whether it aligns with today’s advanced hydration techniques.

### 00:48 - 00:54 A Chart of Partial, Progressive, and Resumable Hydration

Ryan reveals a custom chart categorizing frameworks according to their hydration strategies: partial, progressive, or resumable. He points out how tools like Astro merge partial with progressive hydration, whereas Qwik leans toward a resumable model. Marco, another often-cited solution, shows how different combinations of server-only and client-only components can yield performance benefits.

This visual breakdown highlights how “hydration” is no longer a one-size-fits-all concept. Each approach suits different project scales and complexities, prompting interest in a new generation of frameworks. By mapping these emerging tools, Ryan helps viewers see how Next.js fits into the broader discussion, especially as Next.js works toward React Server Components and other advanced rendering features.

### 00:54 - 01:00 Collaborative Conversations with Framework Authors

Continuing on the theme of new front-end methodologies, Ryan shares that he’s been in discussions with other framework creators, including those behind Qwik and Marco, about next-level optimizations. He illustrates how these dialogues foster a sense of camaraderie among maintainers, all keen to reduce hydration overhead and enhance developer experience.

The conversation underscores how open-source thrives on shared problem-solving. Despite occasional rivalry or stark differences in approach, these framework authors often exchange valuable insights. Ryan’s excitement suggests that cooperation, not just competition, accelerates innovation in the JavaScript community, reflecting a healthy ecosystem in which distinct visions can coexist and even cross-pollinate.

### 01:00 - 01:06 Web Components vs. Framework Components Revisited

Returning briefly to the web component debate, Ryan looks at the feasibility of large-scale applications composed entirely of native elements. He reiterates that a universal approach might not be optimal in scenarios that demand high performance and granular state management. While some teams implement design systems via web components, the overhead can be excessive if used everywhere.

He balances this perspective by acknowledging that web components remain valuable for encapsulation and cross-framework interoperability, particularly in enterprise contexts. By painting a nuanced view, Ryan encourages developers to weigh their own product requirements, rather than succumbing to blanket statements about web components or frameworks being universally better.

### 01:06 - 01:12 Next.js as a Meta Framework: Background and Perception

As the stream progresses, Ryan outlines why he initially overlooked Next.js, especially early in Solid’s development. He recounts a time when SSR seemed unnecessary, believing that a well-architected client-side setup achieved faster benchmarks. As Next.js gained traction, he remained more focused on frameworks offering advanced features like nested routing and streaming, delaying a deep dive into Next.

He acknowledges that Next.js was instrumental in popularizing server-side rendering for React at large scale, coining “meta framework” to describe its capabilities. Reflecting on his shift in perspective, Ryan now views Next as an essential piece of the puzzle—especially considering the surge of interest in React Server Components, edge rendering, and partial hydration patterns that Next is adopting.

### 01:12 - 01:18 Setting Up a Next.js Project

Here, Ryan begins the actual coding with Next.js, following official documentation and community advice. He runs the CLI tool, create-next-app, to scaffold a basic project structure. While waiting for packages to install, he notes how straightforward the process appears compared to earlier attempts at other frameworks. Emphasizing that Next is often the “industry standard,” he anticipates uncovering both conventional patterns and unique choices.

Ryan expresses relief at how quickly the initial setup completes, recognizing that Next’s zero-config approach is part of its widespread appeal. This sets the scene for further examination of routing, data loading, and deployment, prompting him to reflect on whether Next’s defaults align with his own mental model for building apps.

### 01:18 - 01:24 Project Structure and Routing Conventions

In these minutes, Ryan opens the new Next.js project and examines its folder layout. He discusses the pages directory, special files like `_app` and `_document`, and how Next differentiates route definitions. Observing parallels to Remix and other file-based routers, he identifies unique quirks, such as Next’s approach to link tags requiring an `<a>` child component.

The minor discrepancies between Next and other frameworks spark a discussion about developer ergonomics. He addresses how each framework’s decisions can simplify or complicate migrations. Ultimately, Ryan acknowledges that while Next’s structure might be novel to those outside the React ecosystem, it generally adheres to patterns people have come to expect from a meta framework.

### 01:24 - 01:30 Building a Hacker News Clone: Page-by-Page Setup

Ryan begins translating his Hacker News clone into the Next.js environment by creating pages for stories, users, and individual items. He manually ports code from a Remix example, adapting it to Next’s data-fetching methods. Minor adjustments arise, including switching out link components and adjusting directory-based routing. He also brings over global CSS styles and updates brand references accordingly.

As he makes these changes, Ryan remarks on the similarities and differences. For instance, Next has a function-based data fetching mechanism using `getServerSideProps`, whereas Remix emphasizes loader functions for each route. Despite these details, the outcome is largely the same: each page loads its data on the server, then hydrates on the client. This hands-on example makes Next’s design choices more tangible and relatable.

### 01:30 - 01:36 getServerSideProps and Data Fetching

Diving deeper, Ryan explains Next.js’s `getServerSideProps` function, noting how it runs on each request to deliver server-rendered data. He compares this approach to Remix loaders, pointing out that while they share conceptual overlap, Next has a more global feel, rather than nested data loaders at every level of the component tree.

He adds some commentary about static vs. dynamic rendering, acknowledging Next’s `getStaticProps` but focusing on a continuous server-side flow for the Hacker News app. In the process, Ryan pinpoints small details around URL parameters and environment availability, further illustrating Next’s design. This exploration underscores how Next’s architecture can be both powerful and direct, despite lacking certain nested routing niceties.

### 01:36 - 01:42 Refining Pages and Dealing with TypeScript

As the code grows, Ryan wrestles with TypeScript settings. He highlights that Next.js enforces certain configurations by default, at times prompting a developer to either address or ignore type errors. Quick fixes, such as adding a `next.config.js` option or sprinkling in `any` types, show how easy it is to silence warnings, though they also pose questions about type safety.

He also corrects link element wrappers and small logic oversights, demonstrating real-time troubleshooting typical of a live coding session. By walking through each step, Ryan reveals how Next’s developer experience can be smooth overall but still requires an understanding of React-centric best practices—something not always intuitive for those who come from other frameworks.

### 01:42 - 01:48 Deployment to Vercel and Observations

Ryan then deploys the project to Vercel, taking advantage of the platform’s tight integration with Next.js. He commends how straightforward it is to push changes and see them live almost immediately. This simplicity, he notes, is a major factor in Next’s broad adoption, especially for developers who want an all-in-one solution for hosting and continuous deployment.

Looking at build logs, he remarks on default bundling sizes and additional scripts that appear in production, an aspect that can differ from other frameworks like Remix. The direct pipeline to Vercel also spares developers from complex server setup, which Ryan sees as a highlight for teams needing minimal DevOps overhead. His impressions affirm Next’s reputation for a polished developer workflow.

### 01:48 - 01:54 Comparing Remix and Next in Production

With the app now live, Ryan conducts performance checks, contrasting Next.js with his existing Remix deployments of the same Hacker News demo. While the differences are not drastic, he points out that Next’s bundle structure may introduce extra JavaScript, impacting page load metrics. Nonetheless, both solutions remain within a similar performance bracket for most real-world tasks.

He expands on how edge locations, caching, and data fetching strategies influence perceived speed. Ryan attributes observed timing variances to different hosting providers, local caching, and the presence or absence of streaming. This pragmatic standpoint emphasizes that small differences in performance can be overshadowed by bigger deployment variables, reinforcing the idea that context matters more than raw metric comparisons.

### 01:54 - 02:00 Lighthouse Scores and Further Benchmarking

Ryan opens Lighthouse to measure top-level pages and the larger, more intensive 1,400-comment test page. He demonstrates how Next tends to display a slight gap between first contentful paint and largest contentful paint, which sometimes skews Lighthouse scores. He suspects internal nuances in how Next handles hydration or script execution triggers these metrics.

Noting that multiple runs produce fluctuating results, Ryan reiterates the importance of interpreting these figures with caution. He concedes that while larger or more complex apps might accentuate framework-level differences, simple showcases can reveal only so much. Ultimately, these benchmarks underscore how performance is a multi-faceted challenge, influenced by both code decisions and ephemeral network factors.

### 02:00 - 02:06 Streaming, SSR Nuances, and Final Thoughts

Here, Ryan touches on advanced capabilities, such as React Server Components and streaming, which Next has partially introduced but not fully matured. He speculates that future versions will align more closely with partial hydration models used by frameworks like Astro or SvelteKit. Though these features are still emerging, he believes they will become increasingly crucial as apps grow in complexity.

He then circles back to emphasize that Next.js is surprisingly easy for those already familiar with React, praising its deployment story and integrated ecosystem. The session illustrates how Next’s “batteries included” ethos appeals to a wide audience, even if it lacks certain specialized features out of the box. Ryan signals that he will keep an eye on Next’s evolution, looking forward to seeing how it embraces the latest SSR and hydration innovations.

### 02:06 - 02:13 Closing Remarks and Wrap-Up

In the concluding segment, Ryan thanks the audience for joining him on this extensive tour of Next.js and related JavaScript technologies. He expresses satisfaction with how smoothly the process went, despite a few initial quirks around link tags and TypeScript enforcement. Reiterating that all frameworks have trade-offs, he reassures viewers that Next’s capabilities hold up well for most mainstream use cases.

Before signing off, Ryan reminds everyone of the larger ecosystem’s continuous evolution, from Qwik to Marco, and from web components to React-based solutions. He anticipates future sessions where he will revisit streaming or experiment with new Next.js advancements. Wishing everyone a good weekend and acknowledging the lively interaction, he concludes his stream on a note of optimism and invites people to stay tuned for more explorations in modern JavaScript development.