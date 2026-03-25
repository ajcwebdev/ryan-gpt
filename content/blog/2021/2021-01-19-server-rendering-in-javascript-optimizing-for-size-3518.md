---
title: "Server Rendering in JavaScript: Optimizing for Size"
description: "Continuing from where Server Rendering in JavaScript: Why SSR? left off I want to talk about the..."
slug: "server-rendering-in-javascript-optimizing-for-size-3518"
url: "https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-for-size-3518"
publishDate: "2021-01-19"
tags:
  - "webdev"
  - "webperf"
  - "javascript"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ficf7v3qcz0x97vcheuqq.jpeg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ficf7v3qcz0x97vcheuqq.jpeg"
---

Continuing from where [Server Rendering in JavaScript: Why SSR?](https://dev.to/ryansolid/server-rendering-in-javascript-why-ssr-3i94) left off I want to talk about the different techniques JavaScript Frameworks are using Server Rendering to optimize the performance of their websites and applications. There are numerous techniques and every framework has its own take.

In this article, we will cover all things related to size. The amount of JavaScript you ship to the client can be heavy on the network, and it can be heavy on the CPU when you consider both parsing and execution. 

So how are frameworks optimizing for bundle size? Last time we talked about Code splitting. What else is being done?

# Encoding View Code

This is the idea that we can compress our Components even further than the executable JavaScript when shipping over the wire.

I am referring to things like [Glimmer's ByteCode](https://engineering.linkedin.com/blog/2017/12/the-glimmer-binary-experience) or [Facebook's Prepack](https://prepack.io/). The idea is that if you can codify the instructions into fewer characters, and possibly even pre-solve parts of it the way you would reduce an algebraic equation. If you haven't seen Prepack you should [try it out](https://prepack.io/repl.html) you are in for a bit of a treat.

While the Prepack experiments haven't yet borne fruit, Facebook is back at it again with React having come up with a serialized form of their VDOM representation of their [Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html).

These techniques clearly benefit Virtual DOM libraries where our views are a series of instructions. LinkedIn reported a 50% reduction in component size, but size isn't the only benefit here. JavaScript is about the most expensive things to parse in the browser.

But what about non-VDOM libraries? At first thought, you might think of a compiler like [Svelte](https://svelte.dev/) or [Solid](https://github.com/ryansolid/solid). But this is not the same thing. While they reduce the code into real DOM instructions, which allows them to have a much smaller core runtime, this approach can actually increase the code size per component. 

However, libraries that use the real DOM have other ways to optimize component code size. One such way is Template Cloning(using DOM Template Element) the static parts that can drastically reduce the number of instructions. In so most of your components can be encoded as strings that already benefit from being Gzipped. As it turns out template cloning is more performant than creating nodes one at a time.

# Partial Hydration

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/70db133i2k9il2e98opj.png)

When a server-rendered page arrives in the browser and we want to attach the interactive JavaScript to it we call this hydration. It's a lot like the first render of a client rendered application. We traverse the whole application creating components and state, attaching event handlers, but we don't re-create the DOM nodes.

However, do we really need all those components in the browser if we rendered everything on the server? The answer is often no. There are plenty of examples of static parts like headers, footers, navigation. In so you can view the interactive parts of the page as isolated [islands](https://jasonformat.com/islands-architecture). This can reduce code size dramatically.

![Effect of Partial Hydration](https://dev-to-uploads.s3.amazonaws.com/i/614hsmf7qnfeevs9k0gq.png)
> eBay's Marko Team ran some tests toggling the Partial Hydration off on a few pages of the eBay website.

To understand how this works, I find it easiest to imagine there are 3 types of components. The topmost components like the page itself and header and footer are "Server" components that are completely static and do not need to be sent to the browser. The next set are "Stateful" Components which can be rendered completely on the server but have local state, event handlers, things that cause them to update. Finally we have "Client" components that need to be completely rendered in browser.

However, every framework has its own way of handling these. For most VDOM libraries there is no difference between "Stateful" and "Client" components because they need to build the VDOM tree anyway. For reactive libraries with Template Cloning, there is very little difference between "Server" and "Stateful" components since they can skip shipping the template in either case and only have as much code as is needed to hydrate which for "Server" components is basically none.

> **Note**: Vue being both reactive and a VDOM uses a similar static hoisting method with string encoded views. While it might not be able to leverage being able to hydrate at a sub-component level it can still reduce the majority of code without the complexity of moving application entry points.

To pull this off, at build time analysis or heuristics (perhaps a file naming convention, or config file) are used to ensure the client bundle does not get the unneeded code. Alternatively, it can be manual by creating your own roots. Custom Elements can actually a pretty good tool for this, bringing their interactivity in a sea of native elements client or server(with the right library).

This is an area that frameworks are working on improving. [Marko](https://markojs.com/) is the only framework today that [automatically handles this](https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec) for the end-user without any manual intervention.

Unfortunately, it isn't always that simple. And I know what we have covered so far is not simple, but there is more. In the example above, eBay is not a single page application. Even though there are interactive portions and places that need to redraw, primary navigation is handled by rendering new pages from the server.

As you have probably realized by now is once you need to render the page in the browser you need to bring all the JavaScript code. Even if you don't need all the JavaScript initially you will need it if you navigate back to that page. They all become "Client" components.

Perhaps the most obvious way to address this is to create multiple different bundles. You aggressively partially hydrate the initial page even under the router, and then load full client renderable bundles for any navigation later, including back to the original page. This can deliver on the promise of Partial Hydration and less JavaScript on initial load. But it does mean code duplication. You will eventually be sending (different versions of the) the same Components twice. But after the fact maybe that's ok. Vue has been [exploring this approach with VitePress](https://youtu.be/xXrhg26VCSc?t=2803).

[React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) have an interesting take here. Just continue to render these portions on the server even after the first load. But it is an approach much more similar to a multi-page app than you'd first think. It follows the same Server/Client component split and is server routed even if the whole page isn't reloaded. It no longer resembles a single page application.

# Analysis

Naturally, the first thing I want to do is put these to the test, but it would be anecdotal at best. The first thing that came to mind was the comparison of [Svelte Component Scaling compared to React](https://github.com/halfnelson/svelte-it-will-scale). Some sort of test to see how much difference a small library that ignored all this compared to a large library that didn't.

Something like byte code might reduce size for a VDOM but is it smaller than GZip compression on a string. Which is more expensive to parse? Is it worth the extra client-side code to handle this? The same goes for topics around server components and partial hydration. At what point does a now larger, 50kb React intersect with a 4kb library?  

But these are limited comparisons. If the eBay example earlier is any indicator these numbers can vary greatly. Real large apps have a lot more code than even the component code. It's the 3rd party libraries. No toy demo/benchmark is going to demonstrate this. The biggest win is not just not shipping the component code but not shipping heavy libraries.

That is a pretty good case for React Server Components which can avoid ever shipping certain JavaScript to the client. Marko's multi-page approach also achieves this. Of course, there are other ways to offload work to the server. Also if it doesn't block initial hydration, loading the rest of the JS after can not be terribly detrimental assuming it can be cached afterward. I will look more at performance optimization in the next article [Server Rendering in JavaScript: Optimizing Performance](https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-performance-1jnk).

# Conclusion

The thing to remember about size is, with pretty much every technique your mileage will vary based on the nature of pages you have and the scale of the project. There are plenty of applications where these techniques are not worth the effort. Sometimes due to the framework. Sometimes due to a highly dynamic nature so there are minimal gains. Sometimes a different architecture is more beneficial and is simpler.

This is a pretty tricky thing to test/benchmark independently. So it might be best to look at examples holistically. Even tree shaking already makes tools like [Bundlephobia](https://bundlephobia.com/) limited in their use. There are libraries consistently producing smaller bundles than those half their size.

But know every framework is working on mechanisms to address size. It will be interesting to see how effective they will be as more continue to release their versions over the coming year.

