# RyanGPT

## Setup

Install dependencies and set `OPENAI_API_KEY` in `.env`

```bash
npm i
cp .env.examples .env
```

## Generate Your Own Embeddings

```bash
npm run as -- --createEmbeddings
```

## Chat with Embeddings

```bash
npm run as -- --queryEmbeddings "Why is Marko the most underrated frontend framework ever?"
```

### Example Answer

Top matches for: "Why is Marko the most underrated frontend framework ever?"

```
┌─────────┬─────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────┐
│ (index) │ filename                                                                                │ similarity          │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────┤
│ 0       │ 'done/2022/2022-01-15-marko-the-most-underrated-js-framework-part-01.md'                │ 0.4920250963894983  │
│ 1       │ 'done/2025/2025-01-28-building-js-framework-client-performance-tier-list-part-01.md'    │ 0.4367972782950814  │
│ 2       │ 'done/2023/2023-10-21-exploring-the-world-of-marko-w-michael-rawlings-part-01.md'       │ 0.43539383853815283 │
│ 3       │ 'done/2025/2025-01-28-building-js-framework-client-performance-tier-list-part-02.md'    │ 0.4196447101341584  │
│ 4       │ 'done/2022/2022-03-05-building-marko-6-w-dylan-piercey-and-michael-rawlings-part-01.md' │ 0.40978166721589493 │
└─────────┴─────────────────────────────────────────────────────────────────────────────────────────┴─────────────────────┘
```

```json
{
  "id": "chatcmpl-BBz2tC45Xi9ur2KLnIUADDoxJq9qc",
  "object": "chat.completion",
  "created": 1742195967,
  "model": "o1-preview-2024-09-12",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Marko is considered the most underrated frontend framework ever because...",
        "refusal": null,
        "annotations": []
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 19924,
    "completion_tokens": 2260,
    "total_tokens": 22184,
    "prompt_tokens_details": {
      "cached_tokens": 0,
      "audio_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 1280,
      "audio_tokens": 0,
      "accepted_prediction_tokens": 0,
      "rejected_prediction_tokens": 0
    }
  },
  "service_tier": "default",
  "system_fingerprint": "fp_24f97db9f8"
}
```

Marko is considered the most underrated frontend framework ever because it pioneered many advanced features and techniques well before they became mainstream in the JavaScript ecosystem, yet it hasn't received the widespread recognition that other frameworks have. Despite its innovative approach and proven performance benefits, Marko remains lesser-known compared to popular frameworks like React, Vue, and Angular.

Here are the key reasons why Marko deserves more recognition:

**1. Early Adoption of Server-Side Rendering (SSR):**

- **Server-Centric Focus:** At a time when the industry was gravitating towards client-heavy single-page applications (SPAs), Marko doubled down on server-side rendering. Originating at eBay, where performance across variable network speeds was crucial, Marko prioritized delivering fast-loading pages by rendering HTML on the server.
- **Pioneering Streaming Techniques:** Marko implemented HTML streaming and out-of-order streaming long before these concepts gained traction elsewhere. This allowed for faster initial render times and improved perceived performance by sending parts of the page to the client as soon as they were ready.

**2. Partial Hydration and Minimal JavaScript Payloads:**

- **Selective Hydration:** Marko introduced the concept of partial hydration, where only the interactive parts of the page are hydrated on the client side. This significantly reduces the amount of JavaScript sent over the wire, leading to faster load times and less execution overhead on the client.
- **Automatic Code Splitting:** The framework's compiler automatically analyzes which components need to be interactive and ships only the necessary code. Developers don't need to manually split code or manage hydration boundaries.

**3. Compiler-Based Optimizations:**

- **Advanced Compilation Techniques:** Marko leverages a powerful compiler to perform fine-grained analysis of the code. This allows for aggressive tree shaking and optimization that reduces the client-side bundle size.
- **Co-Located Logic and Markup:** Developers can write intuitive, declarative templates with logic embedded directly alongside markup. The compiler takes care of transforming this into highly optimized code.

**4. Resumability without Hydration Overhead:**

- **Skip Hydration Step:** Marko can resume from the server-rendered state on the client without requiring a full rehydration process. This means the client can start interacting with the page immediately, enhancing performance especially on slower devices.
- **Efficient Data Serialization:** By knowing exactly what parts of the state are needed on the client, Marko avoids sending unnecessary data, reducing the payload size and improving security.

**5. Fine-Grained Reactivity and Performance:**

- **Reactive Core:** Marko's reactive system updates only the parts of the UI that need to change, without re-rendering entire components. This fine-grained reactivity ensures high performance for dynamic applications.
- **Competitive Benchmarks:** In performance benchmarks, Marko matches or exceeds the speed of many leading frameworks, both in server-side rendering and client-side interactivity.

**6. Seamless Developer Experience:**

- **Single-File Components:** Marko has supported single-file components for years, allowing developers to keep templates, styles, and logic in one place.
- **Flexible Syntax:** With a tag-based syntax that resembles HTML, Marko is approachable for developers familiar with server-side templating languages.

**Despite these strengths, Marko remains underrated due to several factors:**

- **Limited Publicity and Marketing:** Being developed within eBay, Marko didn't benefit from the same level of community building and promotion as other frameworks. This resulted in less visibility in the broader developer ecosystem.
- **Community and Ecosystem Size:** A smaller community means fewer third-party libraries, tutorials, and resources, which can make adoption less appealing compared to more popular frameworks.
- **Industry Trends and Job Market Dynamics:** Developers often choose frameworks like React or Angular because of their popularity and the demand in the job market. This can overshadow technically superior but less-known frameworks like Marko.
- **Perception of Innovation Timing:** Even though Marko introduced many concepts early on, other frameworks that adopted similar techniques later received more attention and credit for those innovations.
- **Enterprise Association:** Marko's tight association with eBay may have led to the perception that it's tailored for specific enterprise needs rather than general-purpose use.

**In Conclusion:**

Marko is the most underrated frontend framework because it was ahead of its time in embracing server-side rendering, partial hydration, and compiler-based optimizations. It delivers exceptional performance and a developer-friendly experience by automating complex tasks and minimizing client-side overhead. However, due to limited exposure, smaller community support, and market dynamics favoring more popular frameworks, Marko hasn't gained the widespread recognition it deserves. As the industry continues to prioritize performance and re-examines server-side rendering approaches, Marko's contributions and innovations may finally receive greater appreciation.

## Episode List

- 2025-01-28 - Building JavaScript Framework Client Performance Tier List
- 2025-01-25 - Fine-Grained Rendering in Depth
- 2025-01-11 - JavaScript Frameworks - Heading into 2025
- 2024-12-14 - Server Signals w/ Dev Agrawal
- 2024-11-09 - Mutable Signals - Reactivity's Missing Link
- 2024-10-19 - Are There Actually That Many Different Ways to Build Web Apps?
- 2024-10-12 - We Should Probably Talk about Web Components
- 2024-09-21 - What the head?
- 2024-09-07 - What's up with those Hydration IDs?
- 2024-08-17 - Revisiting SolidScript: Reactive Compilation
- 2024-08-10 - The Nature of Hydration
- 2024-07-26 - Server Islands w/ Matthew Phillips
- 2024-07-13 - Exploring Reactivity: Fine-Grained Derivation & Incremental Computation
- 2024-06-29 - The Art of Suspense
- 2024-05-25 - We Are So Back
- 2024-04-20 - Ride the LightningJS w/ Chris Lorenzo
- 2024-04-12 - Wiz: Behind the Curtain w/ Jatin Ramanathan
- 2024-03-23 - Designing Signals 2.0
- 2024-03-16 - Dive Into AstroDB w/ Fred K Schott
- 2024-02-17 - Don't Go Chasing Waterfalls
- 2024-02-10 - What Comes After GraphQL?
- 2024-01-27 - Front-End's Existential Crisis
- 2024-01-20 - Musing on HTML Partials
- 2024-01-13 - JavaScript Frameworks - Heading into 2024
- 2024-01-09 - SolidJS 30k Stars
- 2023-12-20 - JavaScript vs JavaScript - CSR  & SSR
- 2023-12-16 - SolidStart: The Shape of Frameworks to Come
- 2023-12-02 - Server Functions & Server Actions
- 2023-11-18 - The Future of Routing w/ Tanner Linsley
- 2023-11-04 - Dive into NativeScript w/Nathan Walker & Ammar Ahmed
- 2023-10-28 - Dive into Solid + Tauri w/Atila Fassina
- 2023-10-21 - Exploring the World of Marko w/ Michael Rawlings
- 2023-10-14 - Reactivity, Runes & Revolution w/ Dominic Gannaway
- 2023-10-06 - Building SolidJS v1.8
- 2023-09-23 - Introducing Vinxi w/ Nikhil Saraf
- 2023-09-16 - Evolving Isomorphic Data-Fetching
- 2023-09-09 - Piecing it Together w/ Pooya Parsa
- 2023-08-25 - Building Astro 3 w/ Matthew Phillips
- 2023-08-18 - A First Look at RedwoodJS w/ Anthony Campolo
- 2023-08-12 - MPAs vs SPAs
- 2023-07-22 - First Look at Analog w/ Brandon Roberts
- 2023-07-15 - Exploring Million.js with Aiden Bai
- 2023-07-07 - This Week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ ...Milk?
- 2023-05-19 - This Week in JavaScript... Conferences
- 2023-04-21 - Going \"Fully React\" w/ Nikhil Saraf
- 2023-04-15 - Bringing the Bling w/ Tanner Linsley
- 2023-04-01 - Strict Mode in SolidJS?!
- 2023-03-25 - Signals in TypeScript: The Road to Solid v1.7
- 2023-03-18 - SolidJS - The Hard Parts w/ Dan Jutan
- 2023-03-11 - Into the Depths with Server Components and Functions
- 2023-03-04 - This Week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ Signals
- 2023-02-25 - Signals in Angular w/ Pawel and Alex
- 2023-02-18 - The Future of Fine-Grained Reactivity w/ Milo
- 2023-02-04 - First Look at Create T3 App w/ Christopher Ehrlich
- 2023-01-28 - Demystifying SolidJS' JSX
- 2023-01-21 - SolidJS in React? Reconciling Disparate Worlds
- 2023-01-14 - First Look at LiveViewJS w/ Donnie Flood
- 2023-01-07 - JavaScript Frameworks in 2023
- 2022-12-19 - Reactivity & Rendering
- 2022-12-17 - Learning Angular w/ Minko Gechev
- 2022-12-14 - SolidJS NYC Meetup Dec 2022
- 2022-12-10 - Exploring the App Directory in Next 13
- 2022-12-03 - Building Web UI's in Rust w/ Greg Johnston
- 2022-11-23 - This Month in JavaScript
- 2022-10-29 - Creating a VDOM-less Renderer with Preact Signals
- 2022-10-22 - Server Components? Building SolidJS v1.6
- 2022-10-08 - AGGrid: High-Performance DOM Updates w/ Niall Crosby
- 2022-09-30 - Corset: A Novel Approach to Declarative Data-Binding w/ Matthew Phillips
- 2022-09-24 - Making the World's Fastest Website and Other Mistakes w/ Taylor Hunt
- 2022-09-10 - Building a UI Language w/ Dylan Piercey
- 2022-09-08 - Components Are Pure Overhead
- 2022-09-03 - React: The Most Prolific JavaScript Framework
- 2022-08-26 - Building SolidJS 1.5
- 2022-08-19 - Exploring 11ty with Zach Leatherman
- 2022-08-05 - Introducing SolidStart w/ Nikhil Saraf
- 2022-07-29 - Looking at Nuxt3
- 2022-07-22 - Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida
- 2022-07-15 - Nested Routing, Parallelized Data Fetching, and SolidJS  w/ Ryan Turnquist
- 2022-07-08 - A First Look at Fresh
- 2022-06-03 - SolidJS: Past, Present, Future
- 2022-05-27 - Hydrogen & React Server Components w/ Bret Little
- 2022-05-07 - Building SolidJS 1.4
- 2022-04-30 - Breaking Down Hydration w/Dan Jutan
- 2022-04-23 - Breaking Down the Web /w Dan Jutan
- 2022-04-16 - A First Look at Next.js
- 2022-04-09 - Astro SSR w/ Fred K. Schott
- 2022-04-02 - A First Look At SolidHack Submissions
- 2022-03-26 - Let's look at Web Components
- 2022-03-19 - SolidScript?! Using Compilation for Syntax
- 2022-03-12 - Looking at SvelteKit
- 2022-03-05 - Building Marko 6 w/ Dylan Piercey, and Michael Rawlings
- 2022-02-19 - Building Qwik w/ Misko Hevery
- 2022-02-12 - Exploring Qwik, the Resumable Framework
- 2022-02-05 - Let's do an AMA
- 2022-01-29 - Solid Three, Custom Renderers, and SolidStart w/  Nikhil Saraf
- 2022-01-22 - React SSR and React Server Components
- 2022-01-15 - Marko - The Most Underrated JS Framework?
- 2022-01-08 - Petite Solid?! Let's build a Micro View Library
- 2021-12-29 - JSConf India - The Future is Reactive
- 2021-12-18 - Streaming HTML, Solid 1.3, and More
- 2021-12-11 - Compilation in JavaScript Frameworks
- 2021-12-04 - A First Look at Remix
- 2021-11-20 - Streaming SolidJS: Concurrent Rendering without a Virtual DOM
- 2021-11-13 - Netlify and Vercel and Cloudflare, Oh My!
- 2021-10-30 - 2-way Binding and REPL Diving
- 2021-10-23 - Streaming SolidJS - Benchmarking and Custom Renderers
- 2021-10-16 - Islands, Partial Hydration, & JavaScript Frameworks
- 2021-10-09 - Streaming SolidJS: Routing
- 2021-10-02 - Streaming SolidJS - First look at Astro
- 2021-09-25 - Streaming SolidJS - Server Rendering
- 2021-09-18 - Streaming SolidJS - Context, Async, & Suspense
- 2021-09-11 - Streaming SolidJS: Fine-Grained Reactivity
- 2021-09-04 - First look at DOM Expressions