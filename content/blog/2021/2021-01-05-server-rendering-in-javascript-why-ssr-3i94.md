---
title: "Server Rendering in JavaScript: Why SSR?"
description: "Server-Side Rendering is all the talk with the JavaScript framework world right now. There are..."
slug: "server-rendering-in-javascript-why-ssr-3i94"
url: "https://dev.to/ryansolid/server-rendering-in-javascript-why-ssr-3i94"
publishDate: "2021-01-05"
tags:
  - "javascript"
  - "webdev"
  - "webperf"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fkn43epz8evsd8ft0fd1q.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fkn43epz8evsd8ft0fd1q.jpg"
---

Server-Side Rendering is all the talk with the JavaScript framework world right now. There are obvious examples like Vercel's Next.js which made the news with getting $40M in new funding. Next, Nuxt, Gatsby, Sapper have all been really popular the last few years along with the rise of JAMStack which promotes the use of Static Site Generation.

But the thing you probably should be paying attention to is that the frameworks themselves have been investing heavily into this area for the past 2 years. There is a reason why we've been waiting for Suspense in React, or we see blog stories about [Island's Architecture](https://jasonformat.com/islands-architecture/). Why [Svelte](https://svelte.dev/blog/whats-the-deal-with-sveltekit) and [Vue](https://www.youtube.com/watch?v=xXrhg26VCSc) have been pulling meta-framework type projects under their core's umbrella. This is the thing everyone is chasing after.

So I want to take some time today to fill in the gaps, talk about the underlying technology, and overall paint a better picture of what is going on.

# Why Server Rendering?

Why server render at all? For some of you, this might be obvious. But it wasn't for me.

I mean there are plenty of ways to mitigate the initial performance costs of JavaScript. I had even made it my personal mission to show people that a well-tuned client only Single Page App(SPA) could outperform a typical Server Rendered SPA in pretty much every metric (even First Paint). And crawlers now can crawl dynamic JavaScript pages for SEO. So what's the point?

Well even with crawlers now being fully capable to crawl these JavaScript-heavy sites, they do get bumped to a second-tier that takes them longer to be indexed. This might not be a deal-breaker for everyone but it is a consideration. And meta tags rendered on the page are often used for social sharing links. These scrapers are often not as sophisticated, so you only get the tags initially present which would be the same on every page losing the ability to provide more specific content.

But these are not new. So, let's take a look at what I believe are the bigger motivators for the current conversation.

# Don't Go Chasing Waterfalls

JavaScript bundle sizes have grown, and grown, and well, grown some more. Not every network connection is made equal. Under slow networks, SSR will be faster to show something to the user on the initial load. So if you need the absolute fastest page load there this no contest.

It all boils down to the fact that nothing happens in the browser until it receives the HTML page back. It is only after starting to receive the HTML that other assets are requested.

For dynamic client JavaScript pages like a SPA or even the dynamic parts of a static generated site, as you might create with a Gatsby or Next, often this means at least 3 cascading round trips before the page is settled.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zogroqy57pv0606eti4a.png)

The thing to note is this isn't only a network bottleneck. Everything here is on the critical path from parsing the various assets, to executing the JavaScript to make the async data request. None of this gets to be parallelized.

Here is the rub. This is further compounded by the desire to keep the bundle size small. Code splitting is incredibly powerful and easy to do on route boundaries, but a naive implementation ends up like this:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/tqaalnzbp5vuppaig5a1.png)

Four consecutive round trips! The main bundle doesn't know what page chunk to request until it executes, and it takes loading and executing that chunk before it knows what async data to request.

### How does Server Rendering address this?

Knowing the route you are on lets the server render right into the page the assets you will need even if code split. You can add `<link rel="modulepreload" />` tags or headers that will start loading your modules before the initial bundle even parses and executes.

Additionally, it can start the async data loading immediately on receiving the request on the server and serialize the data back into the page. So while we can't completely remove the browser waterfalls we can reduce them to 1. However, a naive approach here actually delays the initial response of the HTML page. So it isn't a clean victory.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/upmut6at8h93g3rc3etm.png)

> In fact there is a lot more we can do here that I will cover in a follow-up article.

### After Initial Load

This equation completely changes after the first load. Assets can be preloaded/cached with a service worker. JavaScript is even stored as bytecode so there is no parsing cost. Everything except the async data request is static and can already be present in the browser. There are no waterfalls, which is even better than the best case from server rendering.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/gtrtlirbgd4oor75wton.png)

But invalidating out of date service workers and cached assets can be a whole other sort of issue. Stale while re-validating can go a long way for certain types of applications. Sites that need to be up to date might not opt for this and use caches they have more control over.

So the takeaway on this whole topic of performance/size is that the client alone has many techniques to mitigate most things other than that first load of fresh content. That will always be constrained by the speed of the network. But as our applications scale, without due consideration, it is easy for our SPA performance to degrade and a naive application of best practices only introduces other potential performance bottlenecks.

Server rendering can relieve a couple of the important ones if the initial load is important to our sites and applications.

# Modern Tools for Everyone

We need to step back out a bit to put this in perspective. There are a lot more websites than web applications. This has always been the case but the mindshare around modern JavaScript frameworks has changed.

When client JavaScript frameworks were first being developed there was a simple goal in mind. Find a way to do all the things in the browser that needlessly had us going back to the server. We were building ever more complex user interfaces and full-page reloads were just not acceptable in a world where people were getting used to native app experiences.

These tools may have been developed with interactive web applications in mind, but there is a much larger set of potential users to tap into that appear to actively be looking to these frameworks for their simpler sites.

This is a really compelling problem. Especially when you consider that the coordination between Client and Server can be really complicated to do efficiently manually. Whenever something is used outside of its original parameters it takes some special consideration.

### JS Frameworks vs Server Frameworks

This struggle isn't limited to JavaScript frameworks. Adding largely dynamic JavaScript to something rendered in Rails or any classic backend has this complexity. It's just JavaScript frameworks see this as a unique opportunity to create a completely isomorphic experience. One where with a single codebase you can create a site. Sort of like the old days, but also not at all like them.

The fundamental thing client-side libraries have been solving is state management. It's the whole reason MVC architectures have not been the right match for the client. Something needs to be maintaining the state. MVC with its singleton controllers is wonderful for stateless things like RESTful APIs but needs special mechanisms to handle the persistence of non-model data. Stateful clients and stateless servers mean reloading the page is not acceptable.

The challenge for server frameworks is even with mechanisms like [Hotwire](https://hotwire.dev/) for partial updates, it alone doesn't make the client part of the equation any less complicated. You can ignore it is a thing, and if your needs are meager this can suffice. Otherwise, you end up doing a lot of the same work anyway. This leads to essentially maintaining two applications.

This is why the JavaScript frameworks are uniquely positioned to provide this single universal experience. And why it is so attractive to framework authors.

# What's Next?

Well, be prepared to hear about this a lot more. This has been going on for about 2 years now, but these projects are finally starting to emerge to a point people feel comfortable talking about it. This has taken time because it's a fundamental shift. While there are Next's and Nuxt's of the world the core libraries haven't been optimized for these cases.

Short of really eBay's [Marko](https://markojs.com/) we haven't seen to date the sort of sophistication you'd expect from these sort of solutions. But that is all changing. [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) are one example. You better believe Vue, Preact, Svelte, etc... have all been working on their own solutions in this space.

Server rendering in JavaScript is the next big race for these frameworks. But it's still up to you whether you choose to use it.
