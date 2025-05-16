---
showLink: "https://www.youtube.com/watch?v=S0a-1lriNl4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First Look at LiveViewJS w/ Donnie Flood"
description: ""
publishDate: "2023-01-14"
coverImage: "https://i.ytimg.com/vi/S0a-1lriNl4/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation highlighting modern JavaScript frameworks, server-side methodologies, and the evolving complexity of web development.

## Episode Summary

This recording begins by greeting the audience and setting the stage for a focused conversation about JavaScript frameworks, backend approaches, and the state of the web ecosystem. It highlights longstanding debates around complexity and performance, while also emphasizing the benefits of exploring fresh perspectives and solutions. Midway through, there is a detailed look at LiveViewJS with guest Donnie Flood, covering its motivation, core ideas, and relationship to Phoenix LiveView. The later portions broaden into discussions on how new technologies measure up, referencing personal experiences with React, Solid, Qwik, and more. These segments reflect the speaker’s desire for balanced progress, acknowledging both the potential of cutting-edge features and the real-world challenges of modern tooling. Altogether, the dialogue underscores a theme of discovery, showcasing how nuanced views and community collaboration can shape a more sustainable and inclusive web development landscape.

## Chapters

### 00:00 - *Introduction & Stream Setup**  

In these opening moments, the host greets the audience and gives a glimpse into what the day’s topic will cover. There is a brief pre-roll period, used to ensure that any latecomers still catch the bulk of the discussion. The speaker mentions a slight departure from the usual focus on React or Solid, setting expectations for a broader exploration of frameworks and complexity. They highlight recent conversations around web development, hinting at the variety of topics to come. Listeners get a sense that this session will be thorough, with interactive chat exchanges and social media sharing.

As the stream settles in, the host checks on the chat, encouraging audience members to participate. This casual atmosphere sets the tone for an in-depth look at a new JavaScript framework known as LiveViewJS. The host underscores the desire to learn from alternative backend philosophies, referencing personal history with .NET and Knockout. There's an evident eagerness to compare and contrast well-known solutions with less common ones, foreshadowing a lively dive into back-end influences on front-end frameworks.

### 06:00 - **Reflecting on Complexity in Modern JavaScript**  

Here, the host begins sharing thoughts on the general complexity that arises from JavaScript frameworks. Drawing on personal experiences, they mention how advanced technologies can become overwhelming, especially for new developers. While acknowledging that many in the community are always looking to learn more, the host points out the tension between wanting simpler solutions and embracing powerful new tools. Anecdotes about older technologies like Angular or Knockout demonstrate how ignoring them can lead to reinventing existing ideas.

In recounting personal lessons, the speaker underscores how prior exposure to different frameworks—such as Angular’s resume-ability concepts—could have accelerated insights into newer patterns. This segment illustrates how knowledge-sharing across ecosystems can prevent “reinventing the wheel.” The host stresses the value of paying attention to underexplored or “less trendy” technologies, noting that they can contain hidden gems beneficial to mainstream development practices.

### 12:00 - **Introducing LiveViewJS and Donnie Flood**  

During this interval, the host transitions to the main event: an in-depth look at LiveViewJS. The host welcomes Donnie Flood, creator of LiveViewJS, to the stream. Donnie offers a brief background, describing his twenty years in programming and entrepreneurship, working across ad tech, climate tech, and other areas. He recounts how he learned Java initially, moved through various languages, and more recently built products with React and GraphQL.

Donnie explains that, despite extensive experience in JavaScript, he was intrigued by the Elixir and Phoenix LiveView approach. He emphasizes that the motivation behind LiveViewJS was to bring the Phoenix LiveView paradigm into the JavaScript ecosystem, bridging a gap for those who prefer Node and TypeScript. Listeners learn that Donnie’s focus centers on reducing front-end complexity by offloading reactivity and state management to the server, an unconventional yet compelling objective.

### 18:00 - **Origins of Phoenix and LiveView in Elixir**  

Shifting focus, Donnie outlines how Phoenix emerged in the Elixir ecosystem, akin to how Rails appeared in Ruby. The conversation includes a bit of Elixir’s roots in the Erlang VM, referred to as the BEAM, and how this runtime offers resilience and concurrency benefits. Donnie clarifies that Phoenix began as a traditional MVC-style framework, later incorporating LiveView to provide server-driven updates over WebSockets with minimal JavaScript on the client.

During these minutes, the host contrasts this approach with prior attempts in .NET or Java to sidestep JavaScript, reminiscing about partial page refreshes and awkward update panels. The host emphasizes how older solutions often felt cumbersome, whereas modern LiveView leverages websockets to maintain synchronized state effectively. The segment highlights the host’s excitement for new ideas that Phoenix LiveView exemplifies, spotlighting the potential for drastically simpler and more powerful user experiences.

### 24:00 - **Porting LiveView to JavaScript**  

Here, Donnie describes the technical impetus for LiveViewJS. By examining how Phoenix’s client library communicates via a specific protocol, he recognized it was possible to replicate that behavior with a JavaScript-based server. Rather than re-implement the client, Donnie decided to keep Phoenix’s proven client code intact, only adding a compatible Node or Deno server to speak the same WebSocket dialect.

The host underscores that this cross-pollination of ideas—like adopting an Elixir-inspired approach within Node—demonstrates an admirable synergy. Listeners get insight into how Elixir’s separation between updating the DOM and transferring minimal diffs is beneficial, prompting an eagerness to compare it with typical client-side re-renders. Donnie reiterates his objective: let JavaScript developers enjoy LiveView’s “stay on the server” model without needing to adopt Elixir or learn unfamiliar syntax.

### 30:00 - **Server-Rendered State & Persistent Connections**  

As the conversation deepens, Donnie clarifies LiveViewJS’s stance on holding user interface state on the server. Each user’s connected socket tracks the current state, sending updates when events occur. The host interjects, comparing this methodology with typical serverless approaches or multi-process models. Donnie acknowledges that scaling stateful servers can be tricky, but modern systems—especially in Elixir—handle thousands of connections gracefully.

The discussion highlights important differences from single-page app traditions, noting that with LiveViewJS, code runs at the server while the client receives partial diffs. The host references performance trade-offs, concluding that, for many apps, stable concurrency models and fewer client demands can simplify architecture. They emphasize that while typical frameworks keep large amounts of state in the browser, LiveViewJS consistently delegates state management back to the server.

### 36:00 - **Avoiding Excess Client-Side JS & Commands**  

Here, the host inquires about client-side interactivity beyond server round-trips. Donnie explains the concept of “commands,” an addition that allows local DOM manipulations without requiring a server update. By embedding minimal JavaScript instructions into HTML attributes, developers can highlight elements or toggle classes. The host contrasts this with older frameworks that lacked such clear separation, resulting in heavy or duplicated logic.

They discuss potential pitfalls, recalling times when systems split complex logic between server-driven partial refreshes and jQuery enhancements. Donnie emphasizes that LiveViewJS’s commands remain consistent with the “less JavaScript” ethos. The segment drives home that, while the server primarily handles everything, the team recognized certain direct DOM manipulations should be both easy and idiomatic, ensuring a solid developer experience.

### 42:00 - **Routing & Navigation in a LiveView Context**  

With deeper details unveiled, the host probes navigation flows—whether LiveViewJS supports client routers or if it embraces classic multipage transitions. Donnie shares how it can be treated like an MPA, with each LiveView controlling a distinct route. He cites examples of LiveView’s “patch” method, allowing in-page transitions without forcing full reloads. The host compares this to a more minimal turbo or advanced approach, highlighting that for many applications, partial transitions can suffice.

As the conversation progresses, they examine potential nested routing setups akin to Twitter or other large SPAs. Donnie admits he hasn’t built massive apps with deeply nested routes in LiveViewJS, so specifics remain uncertain. Nonetheless, the pair agree that the approach emphasizes simpler mental models, reminiscent of server-rendered pages. This vantage shows how returning to more traditional page models can provide performance and clarity benefits in modern tooling.

### 48:00 - **Basic LiveView Examples & Code Structure**  

Now, Donnie provides a quick tour of fundamental LiveViewJS usage. He shows an Express.js file that configures the server with session middleware, hooking up a WebSocket path. The host observes parallels to normal Node setups, with an added route handing control over to LiveView for minimal HTML rendering plus the Phoenix library. Donnie emphasizes the optional “wrapper template,” used to unify layout or global content across different LiveViews.

They transition to actual code, referencing a basic counter example. Donnie exhibits the lifecycle, from `mount()` to `render()`, and explains how `handleEvent()` increments state on the server. The host confirms this means state is always server-bound, a departure from typical front-end data binding. Observing the minimal overhead, both express a sense that LiveView’s impetus to unify logic might simplify certain complexities.

### 54:00 - **MorphDOM & Diffing Mechanics**  

Venturing into implementation details, the host asks how LiveViewJS diffing works. Donnie references how the Phoenix client code uses MorphDOM to patch DOM changes on the client side. Essentially, the server determines the “holes” in templates, keeps static pieces separate, and only ships dynamic updates. The host compares this approach to solid’s or other fine-grained libraries, contrasting it with more general virtual DOM solutions. They linger on the importance of combining minimal over-the-wire data with quick DOM patching.

The host muses about “hydration” or the initial step needed to bind the client’s DOM to the server’s knowledge. Donnie concedes that the details rely heavily on the preexisting Phoenix code, enabling LiveViewJS to be an almost direct port. By leaning on Phoenix’s proven approach, LiveViewJS avoids reimplementing a diffing algorithm. The conversation underscores the many ways frameworks handle client updates, each with trade-offs in performance or complexity.

### 60:00 - **Demo: Live Dashboard & Periodic Updates**  

Donnie then shows a live-updating dashboard example, representing random sales or order data pushed to multiple connected clients. By establishing an interval on the server, the state updates at a fixed cadence, sending minimal diffs to watchers. The host commends the fluid nature of real-time data, pointing out that the logic remains on the server, a stark contrast to typical client polling.

They also discuss concurrency challenges if thousands of sockets reconnect. Donnie mentions possible pub/sub strategies or edge cases, but it’s clear that the Phoenix design, and thus LiveViewJS’s design, can handle many simultaneous connections. This segment reinforces the appeal of letting the server orchestrate consistent states, removing typical complexities of local or shared caching solutions.

### 66:00 - **Form Handling & Validation**  

Shifting to more common requirements, Donnie walks through live form validation using Zod-based “change sets.” He describes how LiveViewJS intercepts form events, runs validations server-side, and returns immediate feedback over the open WebSocket. The host recalls older patterns that duplicated validation in both front and back end, marveling at how this approach consolidates logic. They note the synergy with libraries like Zod, paralleling Elixir’s “change set” concept.

Examples show fields, error messages, and usage of attribute-based triggers like `phx-change` or `phx-submit`. Donnie highlights advantages: near-instant server validation without rewriting checks in JavaScript. The conversation delves into progressive enhancement considerations—specifically if forms degrade gracefully without JavaScript. While not fully configured out of the box, the host recognizes that bridging standard HTML forms with this setup could be feasible or trivially added for some fallback scenario.

### 72:00 - **Image Uploads & Rich Interactivity**  

Continuing with standard but often tricky features, Donnie shows off file and image uploads. He demonstrates real-time progress bars, previews, and validations, all coordinated by server instructions. Listeners learn that typical complexities—like multiple file selection, drag and drop, or file size checks—are wrapped into a streamlined API. LiveViewJS delegates final uploading details to the server, while auto-generated preview or progress elements keep the user informed.

The host highlights how advanced behaviors were historically handled by large client libraries. Instead, Donnie explains how Phoenix’s approach leverages minimal JavaScript to perform tasks like reading file metadata and partial uploads. This section underscores the convenience of harnessing well-designed libraries that unify consistent validations and user feedback loops, further illustrating how server-dominant logic can reduce duplication or confusion on large applications.

### 78:00 - **Hacker News Demo & Speed Overview**  

Donnie reveals a Hacker News clone built with LiveViewJS, referencing the tradition of measuring frameworks through real-world or recognized demos. The host praises the project’s straightforward approach, tying directly into a Firebase API to fetch and subscribe to item data. They compare usage to other frameworks’ Hacker News benchmarks, where partial hydration or streaming can vary widely. LiveViewJS stands out by pushing new comment counts in real time, emphasizing that each user sees updates as soon as they happen.

They discuss the size of the JavaScript payload, noting that because the entire stateful logic resides on the server, the client code needed is modest. The host mentions page speed checks, acknowledging that while it’s not strictly “lighter” than partial hydration frameworks, it remains very competitive. This part underscores how smaller downloads and minimal event handlers can produce performance similar to advanced islands or server component setups.

### 84:00 - **Exploring Code for Hacker News Clone**  

Next, the host delves into the code behind the Hacker News example, showcasing route definitions, the main “stories” LiveView, and the “story detail” for comments. Donnie emphasizes that typical Node or Express patterns remain unchanged except for hooking in the LiveView router. In `handleParams()`, data loads from Firebase, subscriptions are established, and new data triggers `handleInfo()` updates.

The host highlights that every user sees comment or upvote changes simultaneously, thanks to pub/sub. This fosters a sense of real-time collaboration or shared data. They compare it to solutions like GraphQL plus reactive local caches, concluding that relying on the server can simplify concurrency and ensure consistent state. This conversation demonstrates a crucial benefit: removing the burden from clients to track or merge states individually.

### 90:00 - **Handling Nested Comments & Live Components**  

Moving to deeper details, the code for rendering comments reveals how collapsible threads rely on “JS commands” that run locally. The host sees attributes like `phx-click` specifying small JavaScript routines for show/hide transitions. This approach aligns with minimal front-end logic, focusing on toggling classes or styling. The speaker notes that larger or more advanced client interactions would require more hooks, but the philosophy remains “server first.”

Donnie emphasizes that rendering nested comments remains a matter of building or mapping the correct data structure on the server. The host wonders aloud about infinite nesting or advanced interactions, suspecting that solutions exist but also clarifying that the framework remains simpler than a full single-page app approach. This segment highlights how balanced minimalism can handle typical expansions while retaining core reactivity and performance benefits.

### 96:00 - **Navigating & Observing Performance**  

The two examine how navigation within the Hacker News clone feels fluid, even though it’s not a dedicated client-side router. The host runs local performance measurements using developer tools. They note that user interactions appear near-instant, with small overhead from the WebSocket setup for ephemeral loading spinners. They highlight that Lighthouse or local instrumentation may not capture all subtleties of “hydration” because the code does minimal on-client resolution.

They discuss edge cases like slow networks or offline scenarios, testing how anchor tags revert to full page reload if WebSockets remain unconnected. Donnie explains the fallback: if the JavaScript cannot intercept the link, the standard HTTP navigation happens. This ensures users still get valid pages, bridging progressive enhancement. The pair confirm that once the socket is available, partial updates proceed seamlessly, delivering reactivity reminiscent of SPAs yet fully orchestrated by the server.