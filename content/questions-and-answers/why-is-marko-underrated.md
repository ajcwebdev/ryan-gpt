```bash
bun as -- --queryEmbeddings "Why is Marko the most underrated frontend framework ever?"
```

### Example Answer

Top matches for: "Why is Marko the most underrated frontend framework ever?"

```
┌─────────┬─────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────┐
│ (index) │ filename                                                                                │ similarity          │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────┤
│ 0       │ 'content/youtube/2022/2022-01-15-marko-the-most-underrated-js-framework/2022-01-15-marko-the-most-underrated-js-framework-part-01.md'                │ 0.4920250963894983  │
│ 1       │ 'content/youtube/2025/2025-01-28-building-js-framework-client-performance-tier-list/2025-01-28-building-js-framework-client-performance-tier-list-part-01.md'    │ 0.4367972782950814  │
│ 2       │ 'content/youtube/2023/2023-10-21-exploring-the-world-of-marko-w-michael-rawlings/2023-10-21-exploring-the-world-of-marko-w-michael-rawlings-part-01.md'       │ 0.43539383853815283 │
│ 3       │ 'content/youtube/2025/2025-01-28-building-js-framework-client-performance-tier-list/2025-01-28-building-js-framework-client-performance-tier-list-part-02.md'    │ 0.4196447101341584  │
│ 4       │ 'content/youtube/2022/2022-03-05-building-marko-6-w-dylan-piercey-and-michael-rawlings/2022-03-05-building-marko-6-w-dylan-piercey-and-michael-rawlings-part-01.md' │ 0.40978166721589493 │
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
