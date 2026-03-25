---
showLink: "https://www.youtube.com/watch?v=kz-p_017Usc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Reactivity: Fine-Grained Derivation & Incremental Computation"
description: ""
publishDate: "2024-07-13"
coverImage: "https://i.ytimg.com/vi/kz-p_017Usc/sddefault.jpg?v=66916d93"
---

## Episode Description

A wide-ranging conversation on fine-grained reactivity, incremental computation, and modern JavaScript framework design, blending practical insights with in-depth explorations of signals, suspense, and application architecture.

## Episode Summary

In this lengthy session, the speaker examines the intricacies of building reactive systems and maintaining application state, focusing especially on how signals, suspense boundaries, and transaction-like approaches can simplify or complicate data flow. They compare different frameworks such as Angular and React, explaining how each one tackles performance and reactivity concerns. Throughout, they highlight the need for careful handling of asynchronous updates, illustrating practical use cases like routing and form editing. The discussion also covers SSR (server-side rendering) implications, showing how developers can optimize loading states while avoiding unnecessary re-renders. By moving between theoretical concepts and hands-on coding strategies, the speaker underscores how these reactivity patterns can fundamentally enhance both developer experience and end-user performance. The conversation concludes by touching on community contributions, future directions for SolidJS, and broader shifts in the JavaScript ecosystem.

## Chapters

### 00:00:00 - Introduction and Stream Setup

In the opening moments, the speaker greets the audience and sets the stage for what will be a comprehensive exploration of reactivity, UI frameworks, and new experiments in code. They share some light personal updates—such as challenges with streaming and picking the right topics—while emphasizing their ongoing work on “reactivity design” and the significance of signals. This section serves as a warm-up, getting listeners acquainted with the speaker’s motivations for taking a deeper look at incremental computation and the ways it can improve developer workflows.

They also discuss behind-the-scenes issues like selecting the correct cover image for the stream and staying motivated to share their work in progress. Although these logistics may seem minor, they illustrate a broader commitment to transparent content creation. The speaker underscores the idea that even familiar topics—such as signals and frameworks—warrant repeated revisits to refine understanding. This candid introduction welcomes the audience into a relaxed yet intellectually driven atmosphere for the rest of the talk.

### 00:15:00 - Recent Projects and Vite Plugin Updates

Shifting from general stream updates, the speaker explains their recent focus on reactivity design, particularly in relation to evolving frameworks and the latest signals APIs. A key milestone includes updates to Solid’s meta-framework layer and the Vite-based plugin ecosystem, highlighting how these tools streamline developer experience. They acknowledge that some features still feel experimental, emphasizing community-driven efforts in addressing bugs and shipping improvements more quickly.

Along the way, the speaker references challenges with dev mode being more volatile than production builds, noting how first impressions in development affect a framework’s perceived stability. Their tone is collaborative, encouraging listeners to join the open-source discussion, contribute bug reports, and help validate new features. Through these remarks, the session underscores that cutting-edge updates rely heavily on user feedback and iterative refinement, shaping a healthier developer ecosystem.

### 00:30:00 - Insights from the JavaScript Community

Here, the spotlight shifts to the broader JavaScript community, looking at new frameworks, proposals, and ongoing debates. The speaker touches on topics such as the “convergence” of signals across popular frameworks, referencing names like React, Angular, and Vue. They recount interactions with library authors, acknowledging how new reactivity designs often spark lively, sometimes contentious, community dialogues.

Additionally, the speaker discusses shared influences in the ecosystem, including efforts to standardize partial hydration and server rendering. Real-world cases—like deploying an application on different hosting providers—surface practical concerns, such as incomplete support for dev features or local debugging. By blending conceptual ideas with practical deployment examples, the conversation remains grounded in real-world development issues. 

### 00:45:00 - Security Incident and Account Recovery Story

In a more personal turn, the speaker recounts the recent experience of losing access to their social media account due to a security breach. They detail the trials of contacting Twitter support, the frustrations of automated responses, and how they eventually regained control with help from well-connected community members. This anecdote underscores the vulnerability even well-known developers face regarding password reuse and two-factor authentication lapses.

The discussion then connects back to open-source collaboration, illustrating how personal networks can intersect with professional spaces. The speaker thanks those who intervened on their behalf, reflecting on how crucial it is to maintain rigorous security practices. Although briefly diverging from the core reactivity theme, this segment highlights the real human aspects of being a developer online and the resilience of community-driven support.

### 01:00:00 - Observations on Framework Personalities

Transitioning from security hurdles, the speaker muses on the distinct “personalities” of JavaScript frameworks. They propose imagining frameworks as if they were people, each with its own philosophy, strengths, and idiosyncrasies. This metaphor provides a lens to examine how Angular, React, Vue, and Svelte each approach design trade-offs—whether prioritizing developer adoption, performance optimization, or progressive feature sets.

Such personification reveals that these libraries aren’t merely technical constructs; they carry organizational ideals and cater to distinct user mindsets. Some frameworks strive for broad familiarity and backward compatibility, while others embrace radical new patterns. The speaker suggests that fully grasping each library’s “values” can clarify why certain features exist or how adoption patterns evolve. This conceptual viewpoint sets a creative, reflective tone, encouraging developers to consider frameworks beyond mere performance metrics.

### 01:15:00 - Signals, Effects, and the Challenge of Memory Leaks

In this segment, attention pivots back to the intricacies of signal-based systems—particularly the importance of controlling effect lifecycles to prevent memory leaks. Drawing on years of hands-on experience with similar reactive models, the speaker underscores the dangers of creating effects in ephemeral contexts or event handlers. Without proper teardown, these signals can accumulate and harm performance over time.

The conversation also highlights how certain frameworks guard against accidental misuses, for example by issuing warnings when an effect lacks an owner or runs in a short-lived scope. The speaker admits that balancing usability with robust safety checks is tricky, noting that many best practices stem from real-world mishaps observed over long development cycles. This cautionary advice underscores the fundamental need for discipline and clarity when working with reactivity.

### 01:30:00 - Async Boundaries and Resource Loading

Diving deeper into advanced reactivity, the speaker revisits the complexities of asynchronous data flows, especially the concept of suspense. They discuss the tension between showing loading indicators for partial updates versus blocking the entire view. Drawing from personal experiments, the speaker evaluates how frameworks like React and Solid handle transitions, where you might want to prevent “tearing” across different parts of the UI.

They explore potential solutions, explaining that while suspense can elegantly handle initial loads, it can also introduce complications for updates. Listeners learn about placeholders, fallback states, and route transitions as key areas where async data can create unexpected quirks. Overall, the segment illustrates the fine line frameworks must walk between staying responsive and preserving a coherent user experience when data arrives at different times.

### 01:45:00 - The New Proposal: “Run Once” Suspense on Updates

Here, the speaker introduces a fresh idea often described as “run once” or “single trigger” suspense, highlighting how it might ease common pitfalls. The notion is that suspense boundaries would only go into their fallback mode on a resource’s initial creation, rather than repeatedly suspending on every subsequent update. This approach aims to improve predictability while still offering placeholders at key moments.

They outline possible trade-offs, including how top-level usage could lock up an entire app, but nested usage offers more granular control. The discussion frames suspense as a dynamic mechanism for async state, arguing that most developers, in practice, might prefer a stable UI that doesn’t keep switching back to spinners. By suggesting a model where suspense triggers once, the speaker opens a potential route toward more intuitive data loading patterns.