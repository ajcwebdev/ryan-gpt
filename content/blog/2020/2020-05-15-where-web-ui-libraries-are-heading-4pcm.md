---
title: "Where Web UI Libraries are Heading"
description: "Everyone seems to have an opinion on this topic of late. You may have seen: Second-guessing the moder..."
slug: "where-web-ui-libraries-are-heading-4pcm"
url: "https://dev.to/ryansolid/where-web-ui-libraries-are-heading-4pcm"
publishDate: "2020-05-15"
tags:
  - "webdev"
  - "javascript"
  - "ssr"
  - "react"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F14tap33ua2pty5fkro1v.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F14tap33ua2pty5fkro1v.jpg"
---

Everyone seems to have an opinion on this topic of late. You may have seen: [Second-guessing the modern web](https://macwright.org/2020/05/10/spa-fatigue.html) By Tom MacWright.

So I figure I'd throw in too. It's almost impossible for me to hide my bias. I am one of those SPA-loving client-side pushing individuals. I live by libraries over frameworks. And it shows in my work. My most notable contribution to this community has been developing some of the [most performant techniques for client side JavaScript rendering](https://medium.com/javascript-in-plain-english/how-we-wrote-the-fastest-javascript-ui-frameworks-a96f2636431e) and championing [fine-grained reactive programming](https://github.com/ryansolid/solid).

But even I recognize something is disjointed here. However, the call to return to a simpler time is also naive. I want talk a bit about motivations and look at what is actively being developed by the top libraries in addressing these concerns. And that is the thing. Everyone is taking this very seriously and has been for at least the past year.

## Website vs Web Application vs Native Application

Since the dawn of the web there has been a desire for more interactivity. While most things could be simple sites, there was always the demand. It took a long time for us to get to a point where the web could use it's own tools to deliver this experience, which had previously been reserved for Applets, Flash, Silverlight.. etc. What might have started as focused media, like video players and interactive panels eventually grew into Native app envy as touchscreens became pervasive in the mid 2000s.

Even then we choose to categorize these use cases. And for good reason. They are built of the same building blocks but they use drastically different technologies and seemingly have different requirements. But at a certain point you have to wonder why do these need to be different things. At this point we've walked all over the spectrum of client vs server responsibility. If these things aren't all that different, why don't we have a single solution?

## Unified Rendering

Well, it isn't from lack of trying. We've seen several hybrid approaches over the years. The earliest I experience was ASP.NET WebForms. We wrote all our code in C# and templates on the server, and it also generated complementary JavaScript behind the scenes to handle interactivity on the client and serialize data state transfer. It even had Components with LifeCycles. Write once in a single language and work on client and server. Did I mention it was a complete monstrosity? Bulky big serialized data transfers and hydration, and full page posts on data updates. Especially as clients demanded more interactivity without page refreshes leaky abstractions around AJAX crumbled this beast. We all learned at that point that MVC and stateless servers were really desirable things.

Then we tried it from the otherside. Let's run full client code on the server to render. But admittedly it wasn't really much better initially. Client libraries like React are made for differential change. They were slower to render on the server than typical template languages, and the client rehydration was costly. Especially as the size of JavaScript code over the intervening decade had grown 100x. You might see the page reasonably fast but it is a whole new type of frustration when you can't interact with it. As we attempted to optimize things got more complicated and full frameworks like Next.js almost have become a necessity by this point. It's concerning to be sure. Has the solution yet again become more complicated than the problem it is trying to solve?

## Re-focus

Yes. But I think ultimately that's ok. Sometimes it takes acknowledging the problem is significant to be willing to go places you wouldn't before. And over time we can refine things haven't been explored as thoroughly. Google IO 2019 was what personally finally clued me in. I always loved watching their talks on Polymer or the future of Web Components, PWA's etc.. but this year it was crickets on those topics. Everything was about supporting Frameworks like Next.js and focus on how Angular was addressing things. And using small libraries like Preact for examples. The shift from the past couple years was jarring.

So why would Google and the Chrome team want you to use Next.js? That's an article in its own right. Reading between the lines: unmanaged they feel the current trend in frontend SPA's will affect their reach into the global market. Chrome wants the web to win more than anyone. How can that happen when the average experience is so much worse than native for these low power devices and limited networks? They are actively working on reducing bundle size in Webpack and improving network latency and parsing. They aren't just building the platform anymore. This is vital to their success. And while they are taking many different tacts they are still betting on SSR, which says a lot.

## Hybrid Approaches

This is so important that a client-side guy like myself is even in this. I never thought a year ago that the vast majority of my R&D effort in 2020 would be on SSR. And if you look at the big players there is a trend right now, and they've been going at it even longer. The teams making the core libraries are spending time on this not just the community. Without a doubt this is why React Suspense isn't fully released yet. So let's get a bird's eye view of the type of things being worked on.

### Portals and Turbolinks

I want to start here because this has been the big push from the more typical server rendered crowd. The idea here is you server render your pages as normal and then can inject them in a seamless way.

[Turbolinks](https://github.com/turbolinks/turbolinks) are a way of doing full page replacement with server rendered HTML. Instead of reloading the whole page, you request the HTML for the next page and replace it in place.

[Portals](https://web.dev/hands-on-portals/) are a new feature that are under preview which act almost like super iFrames in that they preload the HTML in another frame but it is full interactive and can switch places with the page you currently on. Leading to really impressive transitions and previews. This technology can remove the barriers between even different sites allowing listing sites to smoothly transfer to specific article/shops etc. Keep in mind you still need the JavaScript to handle those transitions smoothly but it could be kept relatively minimal.

Mind you these approaches don't really address interactivity, but just the shortcomings of multi-page web applications. However, some traditionally client side approaches have been looking a similar idea of having the routing be purely server side to save from having to ship it to the client. The routing is the one piece on the client tends to wire the whole application together and can be a cause of bloat in initial JS packages. It's the part you don't get to code split.

### Progressive and Partial Hydration

The idea here is to not load all the JS immediately(progressive) or at all(partial) so that the page only loads the JS it needs at the time. Libraries identify Components that are stateless or you don't need when the page loads and then hydrates them as needed. This usually is accompanied with techniques to capture event handlers before the section of the page has hydrated so that it can replay them after hydration to offer consistency even if not immediately responsive. This is an area that is often more complicated than it seems. And time will only tell how effective this will be at diminishing the "uncanny valley", or the time between First Contentful Paint and Time to Interactive. Most modern client side libraries that support SSR have been looking into techniques of this nature although it alone might not make a big enough difference.

### Streaming Async Rendering

The idea is that you quickly render the page on the server without waiting for the data to load rendering fallbacks for any area of the page that isn't loaded yet. Then only ship the HTML, JavaScript, and data as needed to fill the gaps. You do this over a single stream that writes out as more things load. The browser is able to start rendering the page before it even has all of it, and you can append script tags that insert content in the fallbacks as they load, and provide data for hydration piece-wise. The benefit here is when you are done the page is fully interactive like a SPA and the data fetching happens earlier than it would waiting for the JS to load/parse before making the request.

React/Preact etc.. have been actively developing in this area. But it has proven challenging for libraries that have so much dynamic potential. It is vital to establish blocks in the templates to limit complexity and ensure consistency. This goes beyond individual Components. You can see how this informs things like Suspense. But it is clear the React team is taking UX/DX under consideration above all else, as suspend on read is an amazing pattern for the client but makes it very difficult to predict suspension ahead of time on the server, which likely will lead to patterns where Suspense components are the boundaries. When considering loading waterfalls, something we take for granted on the client, it actually complicates things here. 

Interestingly enough there is at least one library that has already accomplished both streaming and partial hydration years ago. EBay's eCommerce platform had a need for this sort of performance out the gate if it was to ever offer the right level of interactivity and quick page loads required to replace its Java backend. [Marko.js](https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec) has been doing the above for about 5 years now with significantly more performant SSR. So don't give up hope on other client libraries getting there soon. It seems they are now poised to improve their client-side of the equation. So I'm interested to see who completes the story first.

## Conclusion

Don't expect some big regression into the past to happen. I think we will see continual improvements in this area for the next several years and possibly even convergence. Traditional server templating techniques like Marko finding their place on the client, as readily as React finding its place on the server. For people who don't need all that there are Portals. In the same way there is Static Site Generation for people who don't need SSR. Could Portals solve SSG Hydration performance issues by removing routing from the equation for more static sites? Maybe. Will streaming be more prevalent in how we load data in the future? Likely. It's like the solutions already have their counterpart and we are just waiting to see how they can best be put together.

Client Side only implementations are also not as dire as sometimes depicted. While the average bundle size has been going up, libraries have made great improvements in size and even performance and memory usage the last several years. I've made it my mission the last couple years to show the absolute potential of client side only approaches (See [RealWorld Demo Comparison](https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8)). Things don't have to be the way they've been and they are always improving.

But to address the original article. We have been wrong before. So we should not be sure any of the current solutions are going to go the distance. There are a lot of details and whole spectrum of possibility here. This might be even the start of a new kind of UI library. And there are clearly large parties invested in seeing where this is going. Even that isn't always enough. But we just aren't there yet. Things never stop moving in this space. And maybe it's because I've also never felt JavaScript fatigue, I choose to remain ever optimistic.


