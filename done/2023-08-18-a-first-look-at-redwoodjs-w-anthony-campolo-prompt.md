---
showLink: "https://www.youtube.com/watch?v=-8UeTHXoySc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at RedwoodJS w/ Anthony Campolo"
description: ""
publishDate: "2023-08-18"
coverImage: "https://i.ytimg.com/vi/-8UeTHXoySc/sddefault.jpg?v=64de7500"
---

## Episode Description

A wide-ranging conversation about RedwoodJS, full-stack frameworks, and emerging trends in modern web development, featuring in-depth discussions and insights over several hours.

## Episode Summary

This transcript begins by introducing the guest’s background in music and teaching, exploring how those experiences eventually led to a career in web development. The conversation quickly shifts to RedwoodJS, examining its core philosophies, architectural decisions, and how it addresses full-stack concerns in a single framework. Listeners learn about Redwood’s use of GraphQL and Prisma, its opinionated design choices, and its emphasis on developer experience. The discussion highlights Redwood’s ongoing efforts to incorporate React server components and advanced routing strategies, underscoring the framework’s commitment to staying current with evolving patterns. The episode also takes a broad look at other projects in the ecosystem—discussing performance, streaming, and signals—providing ample context on how these approaches shape the future of the web. While maintaining a strong focus on Redwood, the guests also compare various frameworks, sharing perspectives on balancing simplicity, adaptability, and cutting-edge features that help teams build, maintain, and deploy robust applications.

## Chapters

### 00:00 - Introduction and Overview

In the opening minutes, the host welcomes viewers and sets the stage for a deep conversation with a longtime collaborator who has roots in music education before transitioning into software. They touch on the general pace of technology news, remarking how some weeks feel slower than others, yet still offer opportunities to focus on personal projects and framework updates. In a casual, inviting tone, they mention the plan to spend the session exploring RedwoodJS, a framework on the cusp of a major version release.

The pair also briefly touches on the guest’s background, underscoring how prior careers can bring unique perspectives to coding. This introduction lays out the core themes of the discussion: the challenges of creating full-stack frameworks, the importance of developer experience, and how RedwoodJS fits into the broader ecosystem. Even at this early juncture, it’s clear the episode will emphasize both the technical underpinnings of Redwood and the collaborative energy that drives open-source projects forward.

### 08:00 - Musical Roots and Transition to Coding

The conversation delves into the guest’s early musical career, illustrating how a passion for performance and instruction evolved into a desire to learn programming. They describe how teaching and managing groups of musicians built communication skills that would later become invaluable in developer advocacy. The guest recounts the trials of trying to learn AI and blockchain technologies too soon, deciding instead to focus on web development where resources and tutorials were more abundant.

This chapter underscores the non-linear journey many developers take when discovering their niche in tech. By weaving personal anecdotes with practical reflections, the guest shows how initial struggles can be reframed as strengths. The theme here is resilience: forging a new path from a passion that seemed entirely unrelated at first, but ultimately became a catalyst for flourishing in an open-source community.

### 16:00 - Boot Camp Experiences and Discovering Redwood

Attention shifts to the guest’s decision to attend a coding boot camp, explaining the pros and cons of various payment models and curriculum structures. The boot camp was beneficial, but the real turning point arrived when the guest encountered RedwoodJS—a tool that captured their attention enough to interrupt traditional boot camp studies. With Redwood, the guest found a project to commit to, opening doors to open-source contributions and conference talks.

The discussion highlights how real-world enthusiasm for a specific technology can sometimes supersede formal education paths. Emphasis is placed on the synergy between Redwood’s community and the guest’s emerging developer advocacy skills. The story shows that diving into a promising open-source framework can accelerate both learning and career progression, offering hands-on experience that boot camps only partially deliver.

### 24:00 - Community Building and the Birth of FS Jam

Here, the guest recalls founding the FS Jam podcast with a fellow Redwood enthusiast, motivated by the desire to explore other full-stack frameworks like Blitz and Remix. They describe how Redwood’s tagline, “Bringing full stack to the Jamstack,” laid the groundwork for a broader, community-driven initiative. The show grew to feature not just Redwood voices but a wide range of developers across different projects, including up-and-coming solutions and established frameworks.

This chapter illustrates the value of podcasts, meetups, and conferences in shaping a developer’s identity and expertise. The focus is on the organic growth of FS Jam, reflecting how early, experimental platforms often bring together like-minded individuals who want to explore new territory. By collaborating with communities of all sizes, the guest gained a broader perspective on how Redwood fits into the ever-expanding universe of JavaScript tools.

### 32:00 - Introducing RedwoodJS as a Rails-Inspired Solution

Attention turns to Redwood’s foundational principles, highlighting how the framework draws inspiration from Ruby on Rails, particularly around monolithic structure and convention-driven workflows. The discussion touches on Redwood’s original marketing as a Jamstack tool, later refined to emphasize full-stack capabilities. The developers explain Redwood’s out-of-the-box integration of databases and authentication, contrasting it with frameworks that require extensive manual setup.

They also note Redwood’s distinctive approach: shipping opinionated defaults like Prisma for the database and Storybook for component design. By giving developers a batteries-included experience, Redwood aims to minimize friction and empower creators to move quickly. This segment shows how Rails’s philosophy of sensible defaults can translate effectively to JavaScript, offering structure without stifling creativity.

### 40:00 - The Tutorial-Driven Development Approach

The guest describes Redwood’s unique “tutorial-driven development,” referencing the official documentation’s walk-through that covers everything from project setup to deployment. By writing a thorough tutorial before finalizing the framework’s features, Redwood ensures the developer onboarding experience remains consistent over time. This approach underscores Redwood’s emphasis on practical, real-world scenarios like authentication and role-based authorization.

Listeners learn that while Redwood’s tutorial is extensive, it’s deliberately structured so new developers can see immediate results. Testing and Storybook integration are woven in as standard practices, teaching best-in-class workflows from the outset. This methodology is a key ingredient in Redwood’s success, guaranteeing that changes to the framework always circle back to real user experiences and scenarios.

### 48:00 - Pages, Layouts, and Cells Explained

The focus now moves to Redwood’s core building blocks—pages, layouts, and cells. Pages represent distinct segments of an application, while layouts allow for shared structures like navigation and branding to persist across multiple pages. Cells are introduced as Redwood’s declarative pattern for data fetching, automatically managing loading, empty, and error states.

The conversation underscores how these concepts streamline development by abstracting repetitive tasks. Cells, in particular, illustrate Redwood’s commitment to smooth developer experiences: you define success conditions, and Redwood handles the rest. The interplay among pages, layouts, and cells showcases a thoughtful design aimed at rapid iteration without sacrificing clarity.

### 56:00 - Diving into Redwood’s GraphQL and Prisma Setup

Discussion shifts to how Redwood automatically generates a GraphQL schema from Prisma models. This seamless integration allows developers to focus on business logic rather than complex configuration. The speakers share examples of how Redwood’s backend automatically adapts to database changes, underscoring the synergy between Redwood, Prisma, and GraphQL Yoga.

They explore Redwood’s default approach of building a GraphQL endpoint for each project, with the option to customize if desired. This structure fosters consistent data flow across the front end and back end, reducing the friction often encountered when wiring up separate services. The takeaway is that Redwood’s opinionated architecture can dramatically simplify full-stack application development.

### 01:04:00 - The Redwood Router and Nested Routing

Here, attention turns to Redwood’s routing layer, which diverges from file-based approaches common in other frameworks. Instead, Redwood uses a single routes file that allows flexible configuration. The pair discusses how Redwood’s router handles code splitting automatically, meaning each page is lazily loaded without extra manual effort.

Nuances like private routes, pre-rendering flags, and param-based matching are explained. The speakers note that while Redwood’s router might differ from patterns in Next.js or Remix, it provides an end-to-end solution for building monolithic applications. The conversation shows how Redwood’s router balances convention with customization, freeing developers to organize routes as suits their project’s needs.

### 01:12:00 - Vite Integration and Redwood v6 Highlights

Moving on, the conversation covers Redwood’s recent migration from Webpack to Vite in version 6. This landmark change significantly speeds up development builds and hot-module replacement. With Vite’s modern tooling, Redwood now offers a more responsive feedback loop for developers, streamlining local workflows and deployments.

Additional v6 features include upgraded Prisma support and behind-the-scenes changes that pave the way for future enhancements like React server components. The speakers stress that while most Redwood users can upgrade seamlessly, the framework’s team invested immense effort to ensure backward compatibility. This chapter captures the importance of balancing innovation with stability in a fast-evolving tech stack.

### 01:20:00 - Experimental Server-Side Rendering

The discussion turns to the early prototypes of Redwood’s server-side rendering (SSR) and the notion of “render modes.” Listeners learn about Redwood’s ability to toggle between static and server-rendered pages, a step toward bridging prior Jamstack conventions with dynamic server capabilities. Though still in development, SSR in Redwood signals a shift from purely client-side approaches to more flexible rendering pipelines.

They also mention the planned alignment with React’s newer features, hinting that Redwood aims to seamlessly integrate SSR, streaming, and server components. The guest highlights the complexities of ensuring server rendering plays nicely with Redwood’s existing GraphQL pipeline and cell architecture. This segment highlights the future direction Redwood is likely to take as it matures.

### 01:28:00 - React Server Components and Redwood’s Roadmap

The speakers detail Redwood’s ongoing exploration of React server components (RSCs), emphasizing that it’s still early but promising. The aim is to let developers move data-fetching concerns to the server, reducing the need for large client bundles. They acknowledge that Redwood’s strong dependence on GraphQL means the approach to RSCs must integrate well with an existing API layer.

This is where Redwood’s emphasis on stable upgrades proves crucial. The conversation reveals that Redwood’s team wants to introduce RSCs incrementally, ensuring that existing apps benefit without major rewrites. The overarching takeaway is that Redwood continually evaluates cutting-edge React features, balancing ambitious goals with a commitment to a smooth developer journey.

### 01:36:00 - The Role of Opinions in Full-Stack Frameworks

Next, there’s a broader reflection on the value of opinionated choices in frameworks. By providing an integrated solution that includes data models, routing, testing, and more, Redwood reduces the cognitive load for developers. This stands in contrast to looser setups where each piece is selected manually.

They illustrate how Redwood’s approach to opinions removes constant decision-making: the framework picks Storybook for component previews, selects Prisma for database access, and so forth. The chapter clarifies that while Redwood aims to please the majority use case, it remains flexible enough for specialized needs. Such a stance supports rapid prototyping while still allowing advanced customization.

### 01:44:00 - Balancing New Features with Backward Compatibility

The conversation revisits the theme of how Redwood implements large changes, like the switch to GraphQL Yoga or the adoption of new database features, without disrupting existing users. The framework’s upgrade guides and consistent code organization are highlighted as strong suits. The speakers contend that Redwood’s architecture, with a clear web and API side, makes it easier to swap out underlying tooling.

Here, practical examples show how Redwood’s core maintainers handle migrations, often requiring only a minimal code adjustment from users. The main takeaway is that Redwood’s mindful approach to evolution protects developer investments, ensuring they aren’t constantly rewriting their applications each time the framework updates.

### 01:52:00 - Creating Seamless Auth and Authorization

Focus shifts to Redwood’s built-in authentication patterns, including its tutorial on handling user roles beyond just sign-in and sign-out. The conversation points out that Redwood’s approach is comprehensive, guiding developers through everything from basic login screens to nuanced role checks for specific sections of an app.

The speakers explain that while many frameworks sidestep the complexities of authorization, Redwood actively integrates it as part of the core experience. This approach simplifies the broader security puzzle: Redwood’s recommended patterns encourage secure, role-based logic that ties directly into GraphQL queries and mutations. It underscores the framework’s commitment to real-world use cases, not just surface-level features.

### 02:00:00 - The Future of Redwood with React 18 and Suspense

Attention returns to Redwood’s readiness for new React releases, focusing on React 18’s Suspense and concurrent features. The duo explores how Redwood’s router and cell architecture blend with these patterns, outlining the potential performance gains of partial rendering and streaming. However, they caution that implementing concurrency in a framework with a GraphQL backend is non-trivial.

This segment highlights Redwood’s intention to evolve in tandem with React, ensuring that Redwood remains a modern solution. By providing a thoughtful integration plan, Redwood’s team aims to deliver an upgrade path that lets developers access the power of Suspense without rewriting large portions of their code.

### 02:08:00 - Comparing Redwood to Other Frameworks

Here, the host and guest survey the broader landscape, mentioning approaches like Next.js, Remix, and even non-JavaScript solutions like Leptos in the Rust ecosystem. They reflect on Redwood’s sweet spot as a “startup framework,” guiding teams that need strong defaults without deep expertise in each separate area. They also consider T3 Stack’s rising popularity, analyzing how Redwood’s all-in approach to GraphQL differs from T3’s TypeScript-first strategy.

Throughout, they emphasize that each framework answers different needs. Redwood’s principle of “convention with flexibility” distinguishes it from frameworks that rely on piecemeal setups. The section stresses that the final choice depends on a team’s preferences, project timelines, and the complexity of features required.

### 02:16:00 - The Intersection of Signals and Reactivity

The conversation expands beyond Redwood, exploring the concept of signals—a reactivity model gaining popularity in frameworks like Solid and Angular. They discuss the potential of signals to optimize rendering performance by only updating specific leaf nodes, contrasting this with React’s virtual DOM approach.

The speakers connect these ideas back to Redwood, anticipating how new reactivity primitives might integrate with Redwood’s existing architecture. While Redwood’s focus remains on GraphQL-based data fetching, the trend toward signal-based state management could influence future updates or community-driven add-ons. It underlines Redwood’s general openness to adopting proven innovations from elsewhere in the JavaScript world.

### 02:24:00 - Maintaining Open-Source Projects and Community

Attention shifts to the logistical side of building Redwood: coordinating contributors, organizing documentation, and deciding on features. They talk about Redwood’s public Notion pages, which detail upcoming milestones such as SSR support and React server components. This transparency invites contributions from developers who can match their skill sets to tasks in progress.

They also acknowledge the complexity of guiding a growing community. Striking a balance between visionary new features and the daily triaging of issues requires a structured approach. Redwood’s strategy includes regular contributor meetups and thorough documentation, all ensuring that newcomers can quickly identify where they can help the most.

### 02:32:00 - Approaches to Testing and Storybook Integration

This chapter delves into Redwood’s emphasis on a fully integrated testing story. Redwood scaffolds not only page and component files but also test and Storybook files by default. The host and guest explain how this approach encourages developers to form strong testing habits from the very beginning, rather than tacking tests on later.

They also address the benefits of Storybook, which allows teams to review and refine UI elements in isolation. This synergy between Redwood and well-established tools demonstrates the framework’s commitment to holistic development. The segment underscores Redwood’s goal of making robust testing accessible even to newcomers who have yet to develop formal testing routines.

### 02:40:00 - Reflecting on Developer Relations and Education

The conversation takes a personal turn, as the guest describes the joys and challenges of being a technical educator and community figurehead. They recall early speaking opportunities, emphasizing how consistent public communication builds a network of supporters and collaborators. Advice is offered to budding developers: find a project or framework that sparks genuine excitement, and share that enthusiasm through meetups or blog posts.

The overarching theme here is empowerment through open source and community engagement. By actively participating in Redwood’s ecosystem—and others like it—developers can accelerate both learning and career trajectories. The guest’s musical performance background continues to resonate, illustrating how the ability to connect with audiences transfers fluidly into the world of tech advocacy.

### 02:48:00 - New Experimentation with React Server Components

The episode returns to Redwood’s plans for incorporating React server components, revealing behind-the-scenes prototypes that attempt to merge Redwood’s GraphQL structure with incremental server-side data fetching. They address how Redwood’s existing “cell” pattern might evolve, allowing partial hydration or streaming without losing Redwood’s hallmark simplicity.

Though still speculative, these enhancements could change how developers optimize data loading in Redwood. The guest makes it clear that no final decisions have been made, but Redwood’s leadership is exploring many angles, including limiting waterfalls by hoisting queries or leveraging concurrency. It’s a glimpse into potential future releases that may redefine Redwood’s performance profile.

### 02:56:00 - Exploring SSR, Streaming, and Layout Shifts

The conversation unpacks the complexities of SSR and streaming, focusing on the potential for Redwood to handle partial page updates seamlessly. Challenges include balancing Redwood’s existing developer ergonomics with the advanced concurrency and streaming capabilities offered in newer versions of React. In particular, the pair zeroes in on how Redwood can gracefully manage data states to minimize layout shifts.

They also discuss how Redwood might handle transitions between routes without jarring the user. The underlying principle is to retain Redwood’s approachable syntax while embracing next-generation rendering approaches. This phase is presented as a careful balancing act: Redwood aims to harness modern React features in a way that feels natural within its own ecosystem.

### 03:04:00 - Revisiting Database Migrations and Schema Evolution

Here, the host and guest highlight the database layer again, specifically talking about Prisma migrations. They note that Redwood aims to simplify evolving a schema, automating many tasks that otherwise require manual intervention. Using examples of adding new models or adjusting existing ones, they illustrate how Redwood orchestrates migrations with minimal friction.

This prompt reflection serves as a reminder that Redwood’s scope goes beyond front-end concerns. By providing a cohesive solution for persisting data, Redwood helps keep application logic unified. The conversation acknowledges that while Prisma is feature-rich, Redwood’s opinions save developers from drifting into unnecessary complexities.

### 03:12:00 - Handling Edge Cases and Enterprise Concerns

At this juncture, the speakers look at more advanced production needs, like queue jobs, email sending, and handling heavy enterprise traffic. Redwood doesn’t bundle everything, but it offers carefully crafted documentation and patterns for hooking into third-party services. They mention that Redwood’s monorepo structure inherently organizes code so that scaling an app remains straightforward.

Examples of Redwood in production range from smaller startups to more established businesses, indicating that Redwood can handle various traffic profiles. The message is that while Redwood gives developers a head start, real-world complexity may still require custom solutions. Redwood’s stance is that opinionated defaults cover 80% of use cases, with the remaining 20% left open for extension.

### 03:20:00 - Redwood Conf and Community Events

Shifting focus, they mention Redwood’s upcoming community gatherings, emphasizing that such events foster collaboration and fast-track knowledge exchange. The guest reiterates Redwood’s philosophy of involving everyone, from novices to enterprise teams, in shaping the framework’s future. These events also serve as a hub for hackathons, encouraging experimentation and showcasing Redwood’s potential.

They refrain from pushing direct promotional content, instead underscoring the value of community involvement. The host and guest see conferences and meetups not as marketing but as an integral part of Redwood’s design process. This ongoing feedback loop between maintainers and end users sets Redwood apart, as it can quickly pivot or refine features based on real implementation stories.

### 03:28:00 - Performance Benchmarks and Comparisons

Revisiting performance considerations, they discuss Redwood’s place among high-speed solutions. While Redwood harnesses tried-and-true React paradigms, other projects like Million.js or Svelte aim to shrink bundle sizes or accelerate rendering via alternative approaches. The conversation underscores Redwood’s stance: stable developer experience often outweighs micro-optimizations, though Redwood remains open to new ideas.

They examine how Redwood’s built-in code splitting, server rendering experiments, and underlying technology like Vite or GraphQL Yoga contribute to good performance. The conclusion is that Redwood isn’t solely about raw speed; it’s about delivering a balanced package—fast enough for most scenarios while staying accessible and comprehensive for teams building full-stack applications.

### 03:36:00 - Reflecting on the Ecosystem of Bundlers and Runtimes

Here, the topic branches out to mention newer runtimes like Bun and Deno, noting how each aims to challenge Node’s dominance with promises of speed or modern features. Although Redwood currently relies on Node as its primary environment, the guests contemplate how the framework might adapt if these runtimes gain broader traction.

They also mention that Redwood’s modular design could allow new bundler or runtime support with minimal disruption. While no immediate shift is planned, the ability to experiment and pivot remains integral to Redwood’s identity. It’s another window into Redwood’s long-term vision of meeting developers wherever the ecosystem evolves.

### 03:44:00 - Real-World Examples and Use Cases

The speakers share anecdotes of companies building products on Redwood, from small startups launching MVPs to nonprofits creating donation platforms. They highlight Redwood’s production readiness, countering the notion that a relatively young framework can’t handle large-scale projects. By walking through success stories, they prove Redwood’s viability outside the realm of side projects.

The chapter underlines Redwood’s sweet spot: developers who want the reassurance of a cohesive stack without the burden of assembling each layer individually. These real-world references drive home the point that Redwood’s focus on high-level productivity resonates with teams under pressure to deliver business results quickly.

### 03:52:00 - Advice for New Developers and Closing Remarks

As the discussion draws toward the final half hour, the guest offers guidance to newcomers considering Redwood or exploring open-source for the first time. They stress the importance of picking one framework and deeply learning it, rather than scattering efforts. By contributing to Redwood’s GitHub or writing about personal experiments, developers can rapidly build public portfolios.

The closing thoughts reiterate Redwood’s vision: a framework that emphasizes convention while remaining flexible, all within a supportive community. The speakers reflect on their journey through music, teaching, and coding, showing that creativity, curiosity, and community involvement can lead to fulfilling, impactful careers. The segment wraps with gratitude and an invitation for listeners to continue learning through Redwood’s tutorials and community channels.

### 04:00:00 - Ongoing Evolution and Future Plans

In the final stretch, both the host and guest acknowledge that Redwood’s story is still unfolding. They highlight the significance of Redwood’s careful expansion—whether it’s advanced rendering, data handling, or new collaborations. The discussion emphasizes that building a mature full-stack framework requires long-term thinking, as each feature must work cohesively with existing parts of the ecosystem.

They also touch on the synergy between Redwood’s leadership and other open-source communities, pointing out that the push for features like React server components doesn’t happen in isolation. Redwood actively communicates with contributors to React, Vite, Prisma, and GraphQL, blending a diverse set of ideas into a coherent product. By focusing on incremental, carefully curated changes, Redwood aims to remain a leading full-stack choice well into the future.

### 04:08:00 - Final Q&A and Farewell

In the final minutes, the host and guest respond to any lingering questions that surfaced during the recording. They reiterate key themes: Redwood’s mission to simplify full-stack development, its pragmatic embrace of new React capabilities, and its dedicated community support. Listeners are reminded of Redwood’s tutorial-based documentation, which fosters a consistent learning path from setup to deployment.

The conversation closes with mutual appreciation, both for Redwood’s contributors and for viewers who stayed through the entire extensive session. A warm invitation is extended for further exploration of Redwood, underscoring that the framework’s strongest asset is its welcoming, knowledge-sharing community. The overall atmosphere is celebratory, capping a thorough deep dive into Redwood’s philosophy and potential.

### 04:16:00 - Wrap-Up and Next Steps

The final few moments focus on practical next steps for anyone inspired by the discussion. The guest points listeners toward Redwood’s official website, community channels, and documentation, encouraging them to start with the framework’s tutorial. They also invite developers to evaluate Redwood’s approach, compare it with other modern tools, and choose what aligns best with their goals.

A sense of camaraderie pervades these closing remarks. Both host and guest emphasize that the future of Redwood depends on ongoing experimentation and contributions. Whether it’s adopting Redwood for a side project, contributing to open issues, or simply spreading the word, every participant helps to shape the framework. With thanks and well-wishes, the session concludes, sealing a comprehensive exploration of Redwood’s purpose and potential.