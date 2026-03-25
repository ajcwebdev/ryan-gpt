---
title: "JavaScript Frameworks - Heading into 2026"
description: "I suppose after three years, we can consider my review of JavaScript Frameworks an annual event now...."
slug: "javascript-frameworks-heading-into-2026-2hel"
url: "https://dev.to/playfulprogramming/javascript-frameworks-heading-into-2026-2hel"
publishDate: "2026-01-05"
tags:
  - "webdev"
  - "javascript"
  - "webperf"
  - "frameworks"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fedmku9fx7x4yun3dx99y.webp"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fedmku9fx7x4yun3dx99y.webp"
---

I suppose after three years, we can consider my review of JavaScript Frameworks an annual event now. For 2025, I had a hard time writing the article because there was a sobering reality that many of the ideas we tried wouldn’t get us all the way to the finish line. But sometimes we all need a reality check. A way to reset expectations.

Some of that sentiment has carried forward this year. Libraries that were never supposed to get another version did.

{% twitter 1985421962827743574 %}

React has had a tough year in terms of prominent crashes and security vulnerabilities.

{% twitter 1967203307853873363 %}

A lot has changed this year. But it is more of a change in perspective. If AI wasn’t mainstream enough before, it has completely dominated the conversation over the past year. So much so that no one is really talking about new JavaScript Frameworks or Framework features. But that doesn’t mean things haven’t been evolving.

We’ve hit a point where vision is more important than implementation when navigating these waters. The focus on performance that initially led many Frameworks to adopt Signals has taken a back seat to more strategic thinking. So diving into these directions feels like the perfect place to start our conversation about 2026.

---

## The AI-First Framework

Over the past few years, I’ve commented on AI having a minimal impact on how JavaScript frameworks are developed. While developers continue to pick up new tools and LLMs get increasingly better at generating code in various frameworks, the frameworks themselves haven’t done all that much. Sure, it has changed the way we look at documentation, and a few tools have added MCP servers. But has it really changed the way we design frameworks?

### The 2025 perspective

As with any disruptive technology, it takes some time for the industry to adjust. We might first focus on the technology’s current capabilities rather than its full potential. In the case of LLMs, that is to play to where it has the largest training sets. You’ve probably heard the claim “React is the Last Framework”.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/85dyr9p71f2ffygew9jl.png)

The argument is that through its compiler, React can become more efficient without requiring any new features or syntax changes. But if we’ve learned anything over the last couple of years, that’s a pipe dream. Things always change.

But the phenomenon is real. AI is like the largest echo chamber we’ve ever had, and it has put frameworks like React in the hands of people who would have never otherwise picked it up.

But it also means every framework is a victim of its prior success. LLMs are improving at generating code for a wider range of tools by the day. Will there be a tipping point where the quality of these training sets produce better results than the pure volume of more historically popular solutions?

{% twitter 1968901043032342789 %}

Because if React, as it was in 2018, is the “Last Framework”, we have much bigger problems.

### Embracing Re-Design

While there are fewer new JavaScript frameworks these days, one new framework in particular has really jumped on the AI-First redesign. Remix 3, no longer built on React, is a ground-up rethinking of full-stack web development. Creators Ryan Florence and Michael Jackson have been very vocal about AI’s role in both designing and implementing the framework.

{% twitter 1958689049440657653 %}

But the most interesting position they are taking is their goal of reducing domain-specific language, allowing AI to generate generic solutions more easily.

{% twitter 1977731819995910366 %}

Watching their live reveal, Ryan would ask the AI to generate a simple routine, oblivious of the framework, and he could easily incorporate it into his demo.

This is a stark contrast from other frameworks that have provided language primitives to better describe intent. Most frameworks have landed on a similar language of state, derived state, and effects, despite having different implementations.

Only time will tell whether it will be the ease of integrating generic solutions versus the guarantees that come with domain primitives that will provide better results. But it feels like we’re finally starting to focus in on the right questions.

---

## The Isomorphic-First Framework

Last year, we noted a pushback on server-driven technologies in JavaScript frameworks. While Islands and React Server Components rose up during a time dominated by eCommerce and Page Speed scores, many developers were finding these solutions inadequate for the complex and highly interactive applications they were building.

A lot of that complexity came from the ever-present boundaries between server and client UI code and confusion around the fact that Islands and RSCs are very much a different architecture. They are more like classic Multi-Page applications in the way they view navigation and mutation.

So it is not surprising that the 2024 technology upgrades for Single Page Application have continued to propagate across frameworks.

We’ve seen both Tanstack Start and SvelteKit join SolidStart in bringing patterns like Out-of-Order streaming, Server Functions, granular Optimistic UI, and Single-Flight mutations to their respective ecosystems.

{% twitter 1980775946757238993 %}

This has reaffirmed what I’m calling Isomorphic First architecture. It can be Server-Side Rendered, but with the core of the application code running in both environments. This is the way we’ve done SSR for years, just leveraging newer tools and capabilities we’ve seen from things like Server Components without the architecture change.

As it turns out, you can still leverage much of the efficiency of the server without a different architecture. I expect to see more evolution in these frameworks to include their own versions of server-rendered templates(Server Components) as we head into the new year.

---

## The Async-First Framework

If I were to pinpoint where the biggest evolution of thinking has occurred in JS Frameworks in 2025, it is definitely around Async.

While we are seeing dedicated primitives show up in frameworks that have more recently adopted Signals, like Angular’s Resource API, the shift I’m talking about is more fundamental.

{% twitter 1903129479901249933 %}

The goal of JS Frameworks is to make it more manageable to create interactive user interfaces. The approach most have taken is declarative. You describe what the UI should look like based on the state it is in. You depend on the framework to ensure consistency and responsiveness while it processes user input and synchronizes state.

The easiest way to do that is to create guarantees around synchronous updates. It’s what made the VDOM attractive and the power of Signals. Async updates, by contrast, lose those guarantees and often feel hacked on if even considered at all.

What if that wasn’t the case? What if async carried guarantees and were core to the experience?

Those are questions React asked years ago with Concurrent mode and “Transitions”. But this year finally shed light on where that path has taken them. Rick Hanlon’s journey into useOptimistic and “Actions” shows us a future where every user interaction is wrapped in a Transition, coordinating the display updates as values are available and ensuring consistency.

{% stackblitz https://stackblitz.com/edit/react-8d3u4llb?file=src%2FApp.js,src%2Fdesign.js %}

And funnily enough, if you squint a bit, it isn’t that different from the new async handling in Svelte, which, while not having Transitions, [still groups updates that trigger async together to ensure onscreen consistency](https://svelte.dev/playground/fe4b93c45cb741feb54a106d77750e97?version=5.46.1). The resemblance in behavior is uncanny, even if Svelte accomplishes this via its compiler rather than explicit wrappers.

There is still some refinement required here. In React’s case, asking design systems to adopt these patterns might be a significant lift for the ecosystem. But what is clear is that we are starting to see the vision unfold for ideas that have been floating around for the better part of a decade.

This is the type of change that is highly impactful yet so foundational that, within a couple of years, it will be considered table stakes for frameworks. Watch this space.

---

## The Future of JavaScript Frameworks

I think, more than any year in recent memory, 2025 has challenged the role of frameworks in web development. There has been a desire to step back from complexity for a while, but the alternatives haven’t been compelling.

You can always do less until you can’t. You can always use a more constrained abstraction until you outgrow it. It’s a great exercise for learning, and as a framework author, I do it constantly. You could probably spend your time more effectively.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lnfbhauwxuzqm0ql82gv.webp)

So I’m not talking about HTMX, no-build, Web Components, or whatever simplified tool that is perfectly adequate within their particular range of problems. Most of us, who needed to move on, don’t get to return to a simpler time.

We've only avoided complexity through circumventing decision paralysis. We've adopted metaframeworks and more curated opinions and defaults on top of metaframeworks (ex. Redwood and create-t3-app). I was always concerned that while valuable, it would be difficult to keep these up to date. Well, no longer, as AI has gutted this layer. For all the cleverly laid framework pieces authors design, AI will just smash things together.

If anything, echoing the earlier sections, it has put the focus on more primitive patterns. It’s not that APIs are locked in. React is allowed to change. Local API changes are learnable. It’s that the modular demands of Frankensteined implementations make it harder to look at solutions holistically.

In a sense, AI is solving our complexity problem through its inadequacy. It does what a developer does when they don’t understand a system. Work around it by going a level lower and sticking to what they know. And the developer now mostly responsible for stitching things together will likely go along with that.

We can talk about how this isn’t optimal. But solving for this is a priority. It suggests we need solutions that locally provide explicit control while implicitly playing nicely with the system as a whole. It's not unlike developing software as if in a team, even if there is only one developer involved. It shifts the point of hitting certain types of scaling issues.

Fortunately, whether intentional or not, this systematic rethinking is exactly the work happening in this space. Whether it is fundamentally re-examining async, or looking at ways to keep most existing code working with isomorphic patterns.

----

## Conclusion

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4g6tr3qspqlumusmlqw.jpg)

These topics all deserve a more in-depth look than I've afforded them today. I should have written more articles this past year. But I've been busy doing research.

It is an incredibly exciting time to be working on JavaScript Frameworks. This isn't like when Islands, Resumability, or RSCs jumped on the scene. This isn't some glimpse at future technology capabilities that change how we approach problems at an architectural level.

This is a time of core refinement. Taking the lessons learned to apply more universal truths. The kind of change that impacts the way we think about our code not just what we write. Because we might not even be the ones writing it.

And while people have been saying things to this effect for the last few years, in 2026, I think we start seeing this materialize into something tangible. The building blocks are being laid at the right level.

And if none of this makes any sense to you. It is alright. Give it some time. Admittedly, it didn't make much sense to me until I could feel the pull on decision-making within my own sphere. Like some distant black hole ever so slightly changing the course of gravity. But after a couple of years of slogging through the complexity of past constructs, I am more than ready to follow the path to where it takes us next.

-----

Banner credits: ©️ [Cyberpunk-City](https://www.behance.net/gallery/53451651/Cyberpunk-City) by Artur Sadlos.
