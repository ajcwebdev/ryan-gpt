---
title: "I'm Joining the MarkoJS Core Team"
description: "That's right. I'm excited to announce I will be joining the MarkoJS core team at eBay. For those who..."
slug: "i-m-joining-the-markojs-core-team-2fc1"
url: "https://dev.to/ryansolid/i-m-joining-the-markojs-core-team-2fc1"
publishDate: "2020-07-21"
tags:
  - "javascript"
  - "webdev"
  - "webperf"
  - "node"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F41h9krjvnxusy59schn7.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F41h9krjvnxusy59schn7.png"
---

That's right. I'm excited to announce I will be joining the [MarkoJS](https://markojs.com/) core team at eBay. For those who are unfamiliar, [Marko](https://markojs.com/) is an ultra performant compiler-based JavaScript UI Library. It's an open-source project that is owned by the [OpenJS Foundation](https://openjsf.org/), but it was developed in house at eBay and the majority of eBay's eCommerce platform is built with it.

## Why this is exciting

At first glance, [Marko](https://markojs.com/) might look like another compiler-based library like Svelte. But with [Marko](https://markojs.com/) being built for high-performance eCommerce, where millisecond delays translate to a loss of sales, they've attacked the problem from a completely different angle. It is an SSR first library. Everything that was done right from inception has been to provide the most performant SSR experience.

The techniques that they have been using for over half a decade in production on one of the world's biggest eCommerce platforms are things that libraries like React or Vue are only just dipping their toes into. I'm talking streaming asynchronous SSR, progressive, and partial hydration. These are things Next, Nuxt, Sapper, Gatsby wish they could leverage. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/twqrnrnd5bc307znrk32.png)

Admittedly I was skeptical a bit at first when I looked at their benchmarks (like: https://github.com/marko-js/isomorphic-ui-benchmarks). Which one always should be with synthetic benchmarks. But then I dissected them in my usual fashion, implemented versions for other libraries like Svelte and completely reverse engineered to the most optimal vanilla JavaScript techniques.

Marko scores performance numbers several times higher than other isomorphic libraries. I even realized in one of the tests that while Inferno looked close, the only reason was that the implementation wasn't escaping certain properties (a security vulnerability). Marko is heads above the competition on server performance. It's not even remotely close.

And that's before considering [Marko 5](https://markojs.com/) is is just around the corner. They've completely revised their compiler/build chain and further increased the ability to support multiple renderers and render targets.

## So Why Me?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ac42ez9i4jkzhpcuacxk.png)

If we are on the topic of significant performance differences, my library [SolidJS](https://github.com/ryansolid/solid) has drawn similar attention in the browser. This is an area where [Marko](https://markojs.com/) hasn't really stood out. It trades blows with React's performance in the browser. But Marko's a compiler. There is no reason why we can't use the techniques I've worked on the past 5 years to make [Marko](https://markojs.com/) a performance leader in both environments.

More so, the granular techniques I've been developing are a reactive analog to things like Concurrent Mode coming up from React. This is an area that is yet to be tapped to its full potential and [Marko](https://markojs.com/), already a champion of SSR, is uniquely positioned to provide one of the best isomorphic stories. Backed by a company clearly invested in its success, it has the capability to make it a reality.

## What about SolidJS?

Nothing changes. I've worked [Solid](https://github.com/ryansolid/solid) completely in my own time for years, while working long hours for a startup. So that doesn't change. [Solid](https://github.com/ryansolid/solid) is the effort of a few core contributors championing a reactively transparent, functional programming driven paradigm. 

I think [Solid](https://github.com/ryansolid/solid) has huge potential, and it will continue to grow organically. I've recently been making large strides into SSR, we've been building the website and new tooling, and the API has been stabilizing towards a 1.0 release. If anything I expect my work with [Marko](https://markojs.com/) to broaden my perspective.

To me, this is more like backing both horses because Solid and Marko while in the same space represent 2 very different philosophical goals. Marko is more than a compiler. It's a language. Solid might use a compiler but it is very JS(or TS) forward. There are just certain types of things easier/harder to do with both approaches. Certain decisions where the right answer is the complete opposite for each.

I feel truly blessed for the opportunity to be involved with both projects. I get to explore both the "It's just JavaScript" and the "It's not a framework, it's a language" paradigms to their fullest extent. And for those who care about web performance, I think that is something to get excited about.

## The TL;DR

You can expect some [Marko](https://markojs.com/) specific content coming your way. I'm still learning it, so perhaps you can learn along with me. 

[SolidJS](https://github.com/ryansolid/solid) isn't going away. I'm just now involved with 2 of the fastest JavaScript UI frameworks.
