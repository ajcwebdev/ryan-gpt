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

### 102:00 - **Comparisons to Other Approaches**  

Circling back, the host draws parallels to frameworks like Astro, Next.js, or Qwik, each tackling hydration differently. Donnie asserts that if developers appreciate a simplified mental model and a stable concurrency story, server-driven architecture can be compelling. Conversely, the host recognizes that microservices or edge-based paradigms might conflict with a stateful server approach.

They discuss that while React server components attempt partial hydration, LiveView and LiveViewJS effectively treat the client as a simple rendering terminal. The host muses about the tension between shipping large client bundles for advanced SPAs versus deferring more tasks server side. This segment underscores a persistent question for developers: which architecture suits their audience, scale, and complexity requirements?

### 108:00 - **Scalability, WebSockets & Reality Checks**  

Further addressing scalability, Donnie reiterates that while the Elixir runtime excels at concurrency, the Node environment can also handle substantial connections, provided architecture is set up properly. The host concedes that single-page apps have taught developers to handle large code bundles, but ephemeral or ephemeral-less setups shift resource burdens.

They highlight how real-time voting or broadcast events could create load spikes, but there's comfort in a consistent server-based model. The conversation references people building large-scale systems with Phoenix LiveView, suggesting LiveViewJS may follow a similar path. They wrap up acknowledging that not every product sees Twitter-level traffic, so an easier model might suffice for the vast majority of smaller to mid-sized apps.

### 114:00 - **Closing Thoughts on LiveViewJS**  

In this section, the host sums up how LiveViewJS resonates as a simpler method for building reactive apps with Node. They applaud Donnie for bridging Phoenix’s robust approach with TypeScript, remarking that while not every scenario calls for stable, persistent connections, the benefits can be compelling. Real-time synchronization, straightforward validations, and minimal client overhead stand out as immediate wins.

Donnie mentions how the open-source community can jump in, highlighting typical disclaimers about performance optimization and advanced features. The host emphasizes that whether a developer fully commits or only borrows certain patterns, studying LiveViewJS can deliver new insights. This segment reiterates that technology choices hinge on user needs and that embracing novel frameworks fosters deeper understanding of modern web trends.

### 120:00 - **Transition to Broader Topics & State of JS Reflections**  

The conversation shifts away from the direct LiveViewJS deep dive, broadening to state-of-the-industry remarks. The host references how signals, reactivity, and partial hydration have gained attention, with frameworks like Solid, Qwik, and others pushing the envelope. They tie back to earlier points about complexity, reflecting that each new wave of innovation highlights deeper trade-offs.

They also mention the annual State of JS survey, teasing how usage and satisfaction metrics often spark debates around “the next big thing.” The host notes that many devs still rely on React or Angular for day-to-day work but remain curious about next-generation patterns. This sets the stage for a prolonged reflection on trends, hype cycles, and how the community shapes them.

### 126:00 - **Shifts in Framework Mindshare**  

During these minutes, the host cites examples from the recent State of JS results, indicating how new frameworks sometimes catch existing communities off guard. Tools like Solid or Svelte soared in satisfaction but remain smaller in raw usage. The host remarks that established players can overshadow novel projects, leading to minimal coverage despite strong user happiness. They recall how Svelte similarly leapt into the spotlight.

Drawing parallels, the host envisions a near future where frameworks promoting signals or simpler mental models could see more mainstream acceptance. They recall past experiences with underestimating Angular’s ideas, reaffirming that in-depth knowledge from all corners can accelerate progressive ideas. This resonates with the live audience’s interest in rethinking their own architecture choices.

### 132:00 - **Community Perceptions & Fragmentation**  

Here, the host observes that many specialized teams or hobbyists inevitably stick with a single framework. This can lead to insular thinking, such that stepping outside React or Vue becomes jarring. The chat weighs in with personal stories, describing how learning new methods often challenges deeply held assumptions. The host empathizes, explaining that it takes repeated demonstration of benefits to shift perspective.

They also point out that JavaScript ecosystems are large, with illusions of “best” solutions. In truth, the web’s diversity ensures multiple valid approaches. Some prefer minimal tooling, others relish advanced abstractions. Summarizing, the host suggests open-mindedness: check out LiveViewJS or any new option, but weigh how it aligns with your app’s scale and user demands.

### 138:00 - **React Model vs. Retained Mode UIs**  

Revisiting a long-standing theme, the host compares React’s re-render model to the “retained mode” typical of systems like LiveView or Solid. They mention that React’s approach, once seen as simpler, might no longer look so straightforward, given hooks, effects, and concurrency features. By contrast, fine-grained or server-driven solutions handle data changes more precisely.

The host frames this as an ongoing debate: immediate vs. retained, or forcibly re-rendering everything vs. surgically updating. Both patterns have fans, and neither is purely better. This underscores why the community sees so many new proposals, each balancing mental overhead, performance, and trust in proven methods. The conversation fosters a nuanced appreciation for how architectural differences shape the developer experience.

### 144:00 - **Tooling, Dependencies & TypeScript**  

Talk turns briefly to how heavy tooling can shape framework success. The host recalls how TypeScript advanced typical project structures but also complicated certain transitions. They share frustration about adding convenience APIs or directives and hitting TypeScript restrictions. Examples from Solid’s journey reveal that each attempt to smooth developer experience can backfire if it fights the language’s static checking.

This mini-rant resonates with the notion that complexities in modern development partly stem from layers of tooling. The host recommends caution: small libraries or core solutions can remain simpler. People who crave advanced features may still do so effectively, but at the risk of extra overhead. Overall, it’s a reminder that language constraints shape frameworks more than many realize.

### 150:00 - **Comparisons to Qwik & Other Resumability**  

Returning to exploration mode, the host speaks on Qwik’s approach to lazy loading and “resuming” from HTML. They note that Qwik differs from LiveView but similarly aims to lighten the client’s burden by shipping minimal code. The host acknowledges that Qwik’s angle might excel at certain tasks, though adoption is still early. Much like LiveView, Qwik offers another chance to reduce complexity.

They highlight some unknowns: how partial hydration, streaming, and progressive enhancements interplay in real apps. The host reaffirms that future frameworks might unify the best ideas from each. The mention of “resumability” references shared desires for skipping heavy re-initialization. By stacking up multiple cutting-edge solutions, the host underscores that we’re in a transitional era, with the entire community testing new extremes.

### 156:00 - **Community Etiquette & Avoiding Gatekeeping**  

The host takes a reflective turn, addressing concerns over gatekeeping or fervent evangelism. They reference moments where some might push frameworks onto others unasked. Debates on Twitter can spiral into personal jabs, overshadowing constructive dialogue. The host mentions personal experiences, cautioning that it can be off-putting when new technology is presented with condescension.

They applaud more balanced approaches that allow individuals to discover solutions fitting their constraints. This ties in with Donnie’s approach to LiveViewJS: offering a new path without insisting it’s the sole path. The host encourages watchers to explore various frameworks but remain respectful of context and user preference. By fostering open discussions, the community benefits from healthy sharing of insights.

### 162:00 - **Reflections on Past Twitter Debates**  

The host recalls an older Twitter spat about JSX’s flexibility, illustrating how quickly conversations can escalate. Without an established following, clarifications are often ignored, replaced by misunderstanding or dismissive reactions. They highlight how certain claims—like “JSX can’t be compiled differently”—turned out false once someone demonstrated a working example.

Listeners get a glimpse of how knowledge evolves, shaped by new frameworks proving novel claims. The host points out that biases or entrenched beliefs can blind devs to fresh possibilities. This cautionary tale aligns with ongoing arguments about reactivity or partial hydration, suggesting humility is key when someone claims an approach is impossible. Over time, repeated demonstration wins acceptance.

### 168:00 - **Embracing Complexity & Evolving Standards**  

Here, the host contends that the web has always been messy. They speak of moving from table-based layouts to modern CSS, from CGI-bin to advanced front-end frameworks. Complexity surfaces whenever ambitions grow, whether from multi-service backends, interactive UIs, or developer experience improvements like TypeScript. Reflecting on the unstoppable pace of evolution, the host sees the bright side: we enjoy far more powerful tooling than in decades past.

They highlight that behind each wave of new frameworks is a drive to refine or simplify. While it might feel chaotic, it’s democracy in action. The free exchange of ideas leads to more robust standards. The host references how older successes—like jQuery or Backbone—laid stepping stones for React or Svelte. Today’s experiments with signals or server reactivity could well define tomorrow’s stable baseline.

### 174:00 - **Why We Keep Rewriting & Legacy Ties**  

The host fields a chat comment about recurring rewrites for standard components or apps. They posit that rewriting ensures fresh solutions adapt to newly discovered patterns. Tools like web components tried to formalize reusability, but smaller frameworks keep forging fresh designs that better suit new constraints. The host claims rewriting can be vital for the web’s unstoppable improvement, even if it seems excessive.

They consider the tension between corporate demands for stable code and the open-source spirit of constant iteration. This tension fosters a cyclical pattern: big companies want reliability, while community projects chase breakthroughs. Ultimately, the web’s open nature fosters synergy: good ideas flow into standardized features over time, bridging both extremes.

### 180:00 - **Choosing Frameworks Pragmatically**  

The discussion turns to pragmatic advice for everyday teams. The host suggests that the majority of sites do not need the complexities of React-based single-page apps. Tools like Astro or partially server-rendered solutions might suffice, offering simpler mental models. They restate that dedicated frameworks become more essential only if the application has real-time, collaborative aspects or large-scale dynamic content.

This perspective merges with the LiveView approach: if your application thrives on real-time updates but you’d rather keep overhead minimal, LiveViewJS stands out. If one’s scenario is standard marketing pages or e-commerce, an approach like Astro plus a sprinkle of interactivity can be enough. The recurring theme is that no single tool is universally correct; the developer must weigh use cases against complexities.

### 186:00 - **Challenges in Tooling Standardization**  

Now, the host muses over why certain widely desired features—like more advanced transitions or animations—never fully standardize in the platform. They recall numerous half-measures or vendor-specific attempts. The host suggests that the fractal nature of the web, plus the necessity of consensus among many stakeholders, slows progress. Meanwhile, framework authors can innovate swiftly, albeit with fragmentation.

They also revisit the idea that large frameworks always appear too big for small sites yet occasionally provide critical power for large apps. This mismatch remains inherent. The host warns that devs must keep re-evaluating their stacks, or risk shipping bloated setups for trivial use cases. The conversation conveys that measured decision-making can help cut down on the dreaded complexity people lament.

### 192:00 - **State of JS Survey & Hype Cycles**  

Approaching recent survey results, the host acknowledges that many interpret them too literally. They mention how satisfaction percentages favor smaller frameworks, while broader usage still dominates with React or Vue. For LiveViewJS or Qwik to gain traction, they need more real-world adoption. The host recognizes hype cycles can overshadow reliability factors, but also that early adopters drive valuable insights.

Listeners hear how the host balances excitement about top-rated new entries with pragmatic acceptance that large enterprise teams rely on proven stacks. They encourage watchers to keep exploring side projects with novel frameworks, eventually finding paths for broader acceptance. This segment reinforces that “the next big thing” might take years to dethrone incumbents, but it all starts with small, enthusiastic communities.

### 198:00 - **Encouragement for Experimentation & Collaboration**  

Here, the host commends watchers for their curiosity. They highlight how community-driven exploration shapes the future. By trying out frameworks like LiveViewJS, devs discover what’s practical or missing. Feedback loops push each framework to refine or pivot, eventually influencing official web standards or mainstream tooling.

They also stress the importance of bridging knowledge between frameworks. Recalling earlier analogies, the host says no single approach has all answers. For instance, LiveView addresses certain issues elegantly, whereas static site tools handle simpler pages better. Concluding that synergy is more valuable than brand loyalty, the host praises the collaborative spirit shown so far in the chat and on open-source projects.

### 204:00 - **Astro & Island Architectures**  

Focus briefly shifts to Astro, with the host praising how it excels at content-centric sites while letting devs embed interactive bits via “islands.” They compare this pattern to partial hydration in other frameworks, concluding that Astro’s success stems from enabling minimal client bundles. This resonates with the host’s overarching theme of shipping less JavaScript for faster experiences.

They also mention that advanced React or Vue sites often ship more than necessary because the default approach is top-down hydration. Astro’s explicit directive to only hydrate segments stands out. In parallel, the host notes how builders like Netlify or Vercel streamline deployment, further encouraging simpler site building. Listeners get a sense that bridging frameworks’ best ideas can yield balanced solutions for diverse site needs.

### 210:00 - **Closing Q&A & Final Impressions on LiveViewJS**  

In these final minutes, the host revisits key points from Donnie Flood’s presentation and the broader discussion. They highlight that server-driven approaches can drastically lower front-end overhead if used thoughtfully. They reinforce that developers uncertain about large SPAs should weigh frameworks like LiveViewJS that keep logic server-side. Meanwhile, existing sites can remain confident in proven stacks if they prefer or require full client control.

They emphasize Donnie’s message about open collective involvement or community support, though no direct advertisements are made. The host again acknowledges that while stateful servers might feel foreign, an open mind can reveal new efficiencies. With excitement, they hint at continuing to watch how LiveViewJS, Qwik, or other rising frameworks evolve, anticipating further breakthroughs that simplify the modern web.

### 216:00 - **Final Wrap-Up & Farewell**  

As the conversation concludes, the host thanks Donnie for his time, praising the LiveViewJS demonstrations and code examples. They express enthusiasm for future streams or follow-ups, suggesting possible expansions to talk about synergy with other frameworks. Briefly, they muse about the importance of community engagement, highlighting user questions about debugging, scaling, or collaborative events.

The final segment touches upon the desire to keep learning, mentioning the host’s love for experimentation. They sign off by thanking the chat for participating and encouraging viewers to check out the repository or try building a small app with LiveViewJS. Concluding on a friendly note, the host cheerfully says goodbye, urging listeners to stay curious and keep exploring emerging ideas in the evolving JavaScript and web development sphere.