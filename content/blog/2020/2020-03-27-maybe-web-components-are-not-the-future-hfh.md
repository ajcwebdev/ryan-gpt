---
title: "Maybe Web Components are not the Future?"
description: "I know you are thinking, yet another article in this back and forth between Web Component proponents..."
slug: "maybe-web-components-are-not-the-future-hfh"
url: "https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh"
publishDate: "2020-03-27"
tags:
  - "webdev"
  - "html"
  - "javascript"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ft2fcfqa7fxh6z927fmb1.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ft2fcfqa7fxh6z927fmb1.png"
---

I know you are thinking, yet another article in this back and forth between Web Component proponents and detractors. I just feel the discussion tends to stray from the more fundamental issues.

Some background. I've been using Web Components in production for 7 years. I've developed libraries based on them, written more than a couple of polyfills for the Shadow DOM and largely have been an advocate for them. I work at a startup that has been trying to find the right time to move out of our MVP application and build things better this time. I was positive for the past 2 years that we'd continue to use Web Components and as browsers caught up to standards we'd finally hit that golden time for development. Instead, when the time came although we started with Web Components their role was quickly mitigated and finally completely removed.

So I want to impress this isn't coming from an "us vs them" mentality, but rather how what I've learned in the past couple years has changed my perspective considerably. I'm not going to focus on what some people consider mismanagement or the disagreements between vendors. I actually believe they are just the wrong solution for the problem. Or the problem as it has been presented.

# Components !== Web Components

The collection of standards(Custom Elements, HTML Templates, Shadow DOM, and formerly HTML Imports) put together to form Web Components on the surface seem like they could be used to replace your favourite library or framework. But they are not an advanced templating solution. They don't improve your ability to render or update the DOM. They don't manage higher-level concerns for you like state management.

At one point there were parties trying to extend the standards to make them more library-like. I think at this point this is well understood this would not be a great idea. There are too many opinions here and being too ambitious in scope would only serve to alienate. I would suggest even the current standards were too ambitious when considering the Shadow DOM. Yet the Shadow DOM solves 2 essential pieces to the problem in style isolation and inserting (slotting) child elements.

So the narrative has started to move away from "get rid of your framework and use the platform." If anything Web Components have only served to fragment the ecosystem more as they give just enough tools that any would-be library writer. I myself am one such writer. You still need to handle many library concerns and end up having each component library bringing its own JavaScript. Either its self contained and increases size due to repetition or you are still importing JavaScript libraries. There is still buy-in.

However, those facts still don't lend particularly well to the newer rhetoric. "Use Web Components with your favourite library". All but the simplest Web Components are an investment in JS bundle size, performance loss, and new complexity.

# DOM Lifecycles

Is it any surprise that there is friction with the UI library and frameworks? Libraries that were very Web Components forward, like Svelte or Vue, have backed off a bit. The biggest problem Web Components are hitting now is that the JS library ecosystem has grown up. In many cases, it is no longer just about progressive enhancement. To create a user or development experience, like that of application requires looking at things more holistically. The lifecycle of a modern JS library transcends the DOM lifecycle. Components exist before they are ever rendered, and things like the slotting of children are something that they desire the utmost control over.

See the problem is by the time something is added to the DOM it is too late. You've paid the cost. When libraries are using Virtual DOM representations or even in-memory trees this is very limiting. It is very common in libraries to lazily evaluate slots or `props.children`. Things like Suspense or even windowing (only drawing what is on screen) don't want to take the hit at render time. Obviously you can hoist state out of your Web Components and not rely on connected callbacks, but it's not natural. None of this is Web Component's fault. It's simply they are built with the DOM and live by the DOM. These are the events and interfaces we deal with.

Component's asynchronous timing with upgrading and connected callbacks are also awkward for libraries that synchronously render. It can make things like passing a Context API through difficult. Sure Web Components can have their own DI system but trying to use your library as intended can be hard. Each Web Component an island. While encapsulated and modular they serve as a boundary we have to cross constantly if used in great number.

# Where does that leave us?

I'm not completely sure. Progressive enhancements like `<a is="my-button" />`, 3rd party widgets, and micro-frontends all seem reasonable. I'd still use Web Components as an alternative to packaging a JS SDK, or as a reasonable way to isolate development on a single page.

But Web Components as a framework or as a way of augmenting my applications within my framework of choice? It's hard. Although I do not like constantly re-inventing the wheel, knowing that an implementation in my framework of choice will be smaller, faster, more consistent will always be nagging. The hope of future-proofing is not a guarantee when libraries are pushing the boundaries of the web application experience in a way that doesn't see these as necessary. I'd love to lend towards the future of the platform, but I'm not convinced this is it anymore.

It's not that Web Components failing to be what they are meant to. Even if they are in a couple places many of those can be addressed. It comes down to their fundamental nature. How could they be anything different? They are just DOM elements. It's that maybe they aren't the right abstraction for the problem. 
