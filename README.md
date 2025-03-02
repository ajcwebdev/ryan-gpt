## Generate Your Own Embeddings

```bash
git clone https://github.com/ajcwebdev/autoshow.git
cp -r done/2025 autoshow/content/
cd autoshow
npm run setup
npm run as -- --createEmbeddings "content/done"
```

## Chat with Embeddings

```bash
git clone https://github.com/ajcwebdev/autoshow.git
cp -r embeddings.json autoshow
cd autoshow
npm run setup
npm run as -- --queryEmbeddings "Why is Marko the most underrated frontend framework ever?"
```

### Example Answer

Top matches for: "Why is Marko the most underrated frontend framework ever?"

```
┌─────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬────────────────────┐
│ (index) │ filename                                                                                                                            │ distance           │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────┤
│ 0       │ '/Users/ajc/c/ryan-gpt/autoshow/content/done/2025/2025-01-28-building-javascript-framework-client-performance-tier-list-part-01.md' │ 0.5631148424549258 │
│ 1       │ '/Users/ajc/c/ryan-gpt/autoshow/content/done/2025/2025-01-28-building-javascript-framework-client-performance-tier-list-part-02.md' │ 0.5796715116109266 │
│ 2       │ '/Users/ajc/c/ryan-gpt/autoshow/content/done/2024/2024-01-13-javascript-frameworks-heading-into-2024-part-01.md'                    │ 0.6062895186292552 │
│ 3       │ '/Users/ajc/c/ryan-gpt/autoshow/content/done/2024/2024-09-07-whats-up-with-those-hydration-ids-part-01.md'                          │ 0.6126400001430505 │
│ 4       │ '/Users/ajc/c/ryan-gpt/autoshow/content/done/2024/2024-05-25-we-are-so-back-part-01.md'                                             │ 0.6145384584756963 │
└─────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴────────────────────┘
```

```json
{
  "id": "chatcmpl-B6VeWigm52dCmrTPO3AGqJuo0pkWj",
  "object": "chat.completion",
  "created": 1740891340,
  "model": "o1-preview-2024-09-12",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "ANSWER HERE",
        "refusal": null
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 13277,
    "completion_tokens": 2576,
    "total_tokens": 15853,
    "prompt_tokens_details": {
      "cached_tokens": 0,
      "audio_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 1664,
      "audio_tokens": 0,
      "accepted_prediction_tokens": 0,
      "rejected_prediction_tokens": 0
    }
  },
  "service_tier": "default",
  "system_fingerprint": "fp_24f97db9f8"
}
```

Marko is often considered the most underrated frontend framework because it offers a combination of innovative features, performance optimizations, and developer-friendly ergonomics that rival—and in some cases surpass—more popular frameworks like React, Vue, and Angular. Despite its capabilities, Marko hasn't gained the widespread recognition it deserves, which is why it's viewed as underrated in the developer community.

**Reasons Why Marko is Underrated:**

1. **Advanced Streaming and Rendering Techniques:**
   - **Out-of-Order Streaming:** Marko pioneered out-of-order streaming, allowing components to render as soon as their data is available, rather than waiting for the entire page. This results in faster Time to First Byte (TTFB) and improves the overall user experience.
   - **Progressive Hydration:** Marko can hydrate interactive components on the client only when necessary, reducing the amount of JavaScript that needs to be downloaded and executed. This leads to faster initial load times and better performance on slower devices.

2. **Performance Optimization:**
   - **Compile-Time Optimizations:** Marko's compiler performs advanced optimizations that minimize runtime overhead. It converts templates into highly efficient JavaScript code, reducing the need for a virtual DOM diffing process.
   - **Minimal Overhead:** By eliminating unnecessary abstractions and runtime libraries, Marko delivers high performance both on the server and client sides.

3. **Server and Client Rendering Harmony:**
   - Marko seamlessly integrates server-side rendering (SSR) with client-side interactivity. This ensures that applications are SEO-friendly and provide a fast initial render while still offering dynamic client-side features.

4. **Developer-Friendly Syntax:**
   - **Familiar Templating Language:** Marko uses an HTML-like syntax that's easy to read and write, lowering the learning curve for developers familiar with standard web technologies.
   - **Component-Based Architecture:** It embraces a component-driven approach, promoting code reuse and modularity.

5. **Innovation Ahead of Its Time:**
   - Many features that are now gaining popularity in other frameworks have been part of Marko for years. For instance, the focus on minimizing JavaScript payloads and optimizing rendering performance are foundational in Marko.

6. **Production-Proven at Scale:**
   - **Enterprise Usage:** Developed and maintained by eBay, Marko has been used in large-scale, high-traffic applications for years. This real-world usage demonstrates its reliability, scalability, and performance under heavy loads.

7. **Lack of Hype and Marketing:**
   - Unlike other frameworks that benefit from large communities and strong marketing efforts, Marko hasn't been as aggressively promoted. This has led to less community engagement, fewer tutorials, and less third-party tooling, contributing to its underrated status.

8. **Unique Features Less Known:**
   - **Isomorphic Components:** Marko allows the same components to run on both the server and client without additional configuration.
   - **Stateful Hot Reloading:** Developers can make changes to components, and Marko will preserve the application state while updating the UI during development.

**Why This Matters:**

- **Performance-Critical Applications:** For applications where performance is paramount, especially on mobile devices and slow networks, Marko provides significant advantages.
- **Developer Productivity:** Its ergonomic syntax and features can speed up development time and reduce bugs.
- **Future-Proofing:** As the web moves toward performance-centric and less JavaScript-heavy applications, Marko's philosophies align well with emerging best practices.

**Conclusion:**

Marko is a powerful, mature framework that excels in areas increasingly important to modern web development: performance, efficient rendering, and developer experience. Its lack of widespread adoption isn't due to a lack of capability but rather a lack of visibility. As the community continues to prioritize fast, user-friendly web applications, Marko has the potential to gain recognition for the innovative solutions it has been providing all along.

**Further Reading and Exploration:**

- [Marko Official Website](https://markojs.com/)
- [Marko GitHub Repository](https://github.com/marko-js/marko)
- [Case Studies on Marko's Performance at eBay](https://www.ebayinc.com/stories/blogs/tech/marko-faster-lighter-simpler/)

By exploring Marko and its features, developers can discover an efficient alternative to mainstream frameworks, potentially leading to better-performing applications and a more enjoyable development experience.

## Done

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

## Running Now

```bash
# 2022-01-29 - Solid Three, Custom Renderers, and SolidStart w/  Nikhil Saraf
npm run as -- --video "https://www.youtube.com/watch?v=lsWXyyEsw7E" --whisper turbo
# 2022-01-22 - React SSR and React Server Components
npm run as -- --video "https://www.youtube.com/watch?v=dnuh-jKuDpk" --whisper turbo
# 2022-01-15 - Marko - The Most Underrated JS Framework?
npm run as -- --video "https://www.youtube.com/watch?v=VanpBTKLFNM" --whisper turbo
# 2022-01-08 - Petite Solid?! Let's build a Micro View Library
npm run as -- --video "https://www.youtube.com/watch?v=tcwe85p7M9c" --whisper turbo
# 2021-12-29 - JSConf India - The Future is Reactive
npm run as -- --video "https://www.youtube.com/watch?v=vHy7GRpTpm8" --whisper turbo
# 2021-12-18 - Streaming HTML, Solid 1.3, and More
npm run as -- --video "https://www.youtube.com/watch?v=8hlo9uPrpr4" --whisper turbo
# 2021-12-11 - Compilation in JavaScript Frameworks
npm run as -- --video "https://www.youtube.com/watch?v=FB_kBYO_vIw" --whisper turbo
# 2021-12-04 - A First Look at Remix
npm run as -- --video "https://www.youtube.com/watch?v=CQm52h3Ukng" --whisper turbo
# 2021-11-20 - Streaming SolidJS: Concurrent Rendering without a Virtual DOM
npm run as -- --video "https://www.youtube.com/watch?v=Hdc5QqPfFH8" --whisper turbo
# 2021-11-13 - Netlify and Vercel and Cloudflare, Oh My!
npm run as -- --video "https://www.youtube.com/watch?v=O2kFXlNSdn0" --whisper turbo
# 2021-10-30 - 2-way Binding and REPL Diving
npm run as -- --video "https://www.youtube.com/watch?v=C83XD19-1jg" --whisper turbo
# 2021-10-23 - Streaming SolidJS - Benchmarking and Custom Renderers
npm run as -- --video "https://www.youtube.com/watch?v=Yi_MJ8cVCCs" --whisper turbo
# 2021-10-16 - Islands, Partial Hydration, & JavaScript Frameworks
npm run as -- --video "https://www.youtube.com/watch?v=Q0mXYbA86Qo" --whisper turbo
# 2021-10-09 - Streaming SolidJS: Routing
npm run as -- --video "https://www.youtube.com/watch?v=YxroH_MXuhw" --whisper turbo
# 2021-10-02 - Streaming SolidJS - First look at Astro
npm run as -- --video "https://www.youtube.com/watch?v=UPhx3OxUH0w" --whisper turbo
# 2021-09-25 - Streaming SolidJS - Server Rendering
npm run as -- --video "https://www.youtube.com/watch?v=0zadjVUV7zM" --whisper turbo
# 2021-09-18 - Streaming SolidJS - Context, Async, & Suspense
npm run as -- --video "https://www.youtube.com/watch?v=8Ou6domKfU4" --whisper turbo
# 2021-09-11 - Streaming SolidJS: Fine-Grained Reactivity
npm run as -- --video "https://www.youtube.com/watch?v=b9e7VXs_A4s" --whisper turbo
# 2021-09-04 - First look at DOM Expressions
npm run as -- --video "https://www.youtube.com/watch?v=jnZmG4hyNas" --whisper turbo
```
