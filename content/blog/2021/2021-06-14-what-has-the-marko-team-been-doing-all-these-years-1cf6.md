---
title: "What has the Marko Team Been Doing all These Years?"
description: "As some of you know I joined the Marko team at eBay a year ago. And for many the immediate question..."
slug: "what-has-the-marko-team-been-doing-all-these-years-1cf6"
url: "https://dev.to/ryansolid/what-has-the-marko-team-been-doing-all-these-years-1cf6"
publishDate: "2021-06-14"
tags:
  - "webdev"
  - "devjournal"
  - "javascript"
  - "marko"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj77l7382mv699xs8hodu.jpeg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj77l7382mv699xs8hodu.jpeg"
---

As some of you know I joined the [Marko](https://markojs.com/) team at eBay a year ago. And for many the immediate question was "What is Marko?" Well it's a JavaScript framework like React or Vue, built specifically to handle the high performance needs of eBay's platform.

Performance through server rendering has been critical since day one, as eBay is an eCommerce platform and lost milliseconds means lost revenue. And there are many platforms with the same requirements but eBay made a pretty bold move in the 2012 when they decided to move to full-stack JavaScript for such a platform with using Node on the backend.

The first thing they realized were the existing tools weren't going to solve the problem. So [Marko](https://markojs.com/) was created with exactly this in mind. But that was years ago and we are seeing other frameworks like React and Astro starting to adopt some of techniques [Marko](https://markojs.com/) uses. So what has [Marko](https://markojs.com/) been working on?

# Unique Origins

Marko was really built with only 2 main things in mind. It needed to have [progressive server rendering](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/). We need to have the page on the client as soon as possible without waiting for Async but we need to support SEO.

And we needed to ship the least possible JavaScript to the browser to support all sorts of devices around the world. The way to do that is through [Partial Hydration](https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec). Or only sending the JavaScript to the browser for the small parts of the page that were actually interactive.

And [Marko](https://markojs.com/) did both of those in 2014. The real secret of these two features is that they work together amazingly well. If you are streaming your page as it loads but that content is mostly static and can be eliminated from the client JavaScript you send to the browser, you can get fully dynamic page loads with skeleton placeholders with 0kb of JavaScript bundle sizes.

That is immediate rendering with content progressively loading in without pulling in the big framework bundles. Nothing else does that today. But a few libraries are looking at doing parts of it.

Maybe the best way to picture this for those up to date on the latest tech, is picture if you wrote an app with HTML based template language and used a compiler like Svelte to automatically generate [Astro](https://astro.build/)-like Islands out of only the code that needs to run in the browser, and it's all served to you using something like the upcoming [React 18](https://github.com/reactwg/react-18/discussions/37)'s Suspense for SSR.

Yep. 2014. Sure things were a bit more manual than they are today, but the core pieces were there. This is a great start to a story but then the difficulty sets in.

# Growing Pains

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdus8bf0fd50ywq2r56q.jpg)

How do you possibly achieve such futuristic development in 2014? Well you pretty much need to write your own Parser, Compiler, and Bundler. It wasn't enough to handle the templates but in order to package things differently for the server you need a bundler. So the team created [Lasso](https://github.com/lasso-js/lasso). The idea with Lasso was to compile and serve templates on demand instead of upfront. This way dev server startup times could be fast and incremental rebuilds were possible.

This was important as Marko being one of the earliest library with truly isomorphic development, where the same templates worked on server and browser, needed to coordinate multiple builds on code changes. Honestly it wasn't until [Snowpack 3](https://www.snowpack.dev/) or [Vite 2](https://vitejs.dev/) that there was a true successor.

So supporting the growth and tooling around Marko was definitely the focus for the next couple years. Partial Hydration got smarter, and architecture was streamlined. The next groundbreaking release was Marko 4 in 2017 where Marko starting to be conscious of browser performance opted into using a Virtual DOM to handle client rendering.

However, the world had changed in those 3 years. Things like React and Webpack had sprung up, and most importantly Babel. The trend had become transpiling JavaScript to support modern features before the browsers did. Marko was maintaining its full end to end tool chain and was quickly being left in the dust.

The migration to Marko 4 was also a big effort at eBay as well. Internally Marko had its roots as early as 2012 and you can imagine even with automated migration scripts there were challenges. To put it in perspective for React devs that time span bridges the gap before React existed in Open Source, through the `createClass` days, to ES6 classes and almost to Hooks.

The Marko team now only 2 people, simultaneous supported migrating the eBay platform written mostly on Marko and upgrading the tooling around Marko to be more modern. This included the move to Babel, replacing Lasso with other bundlers that didn't quite fill the gap, support for Testing Library, Jest and Storybook. The majority of this work happened over 2018-2019 and would become Marko 5.

# FLUURT

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wqoktwe005tf2e5f6lln.png)

The project, codenamed FLUURT, was an idea that had been floating around really since the release of Marko 4 but there had been no time to pursue it. FLUURT is an acronym that Michael Rawlings had come up with that stood for **Fast Lean Unified Update & Render Target**.

The concept is that with sufficient knowledge from compiler analysis it would be possible to produce the optimal code for any target platform. Whether that be server, browser, mobile, or even a different JS Framework.

This is really 2-part effort. There is the method and language for analysis, and then there is the compilation and runtime to support it. Both are immensely difficult challenges.

The first carries with it all the stigma and DX concerns with understanding how languages function. I've written about it in [Marko: Designing a UI Language](https://dev.to/ryansolid/marko-designing-a-ui-language-2hni). Some people will not be happy with it but Marko's new Tags API is like a marriage between something like React's Hooks and Svelte's `$:` syntax. It has all the compiled magic without losing any of the composability.

Composability is king. But so is clear analyzable syntax. Blending both is key incidentally to achieving the granularity that we want for code elimination in the browser for Partial Hydration. We really needed to go component-less not only as a technology but as a language. Luckily this aligns with Marko's earliest goal of being a superset of HTML. Writing and maintaining code should be as easy as working with HTML templates.

The second part has been quite the undertaking. Marko has already conquered Server rendering. Even though Marko might have the most efficient Partial Hydration of all JavaScript frameworks today, having worked with it at eBay scale for years, we know we can do a lot better.

Generating the suitable client side approach has been a bit of trial and error. There are many considerations and details. From the ability remove even more static code from the browser  to handling of Async consistency and transitions that needed to be ironed out.

# Experimentation

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ya7267tglk7hw74k6oq.jpg)

The team had developed out their first approach before I joined the team. It was a top down reconciler similar to a single pass VDOM, like you might find in libraries like [uhtml](https://github.com/WebReflection/uhtml) or [Lit](https://lit.dev/). However, it didn't let us leverage Hydration as effectively as we would have liked. Granularity was going to be the key here especially with the goal of being able to truly only send the necessary JavaScript to the browser. Ultimately, this led to me getting recruited for the job.

The second approach was a runtime reactive approach with precompiled dependencies. This reduced the overhead of subscriptions and got performance in Inferno-like range in the browser. Static dependencies, while saving us from having to run computations to determine dependencies like other runtime reactive libraries (MobX, Vue, Solid), required the dependencies to be reactive variables themselves. This led to over-wrapping of expressions and used up more memory. It also still put considerable weight on template boundaries.

We spent most of the fall on the 2nd attempt before shifting our focus on releasing Marko 5 and related tooling like Vite and universal Hot Module Replacement. However this effort wasn't without value. We had used it to develop 2 key new features for the Marko compiler.

First, we added an analysis pass that gather's metadata about all your Marko files so that as the compiler transforms the code we can make informed decisions based on the contents of child templates that are imported. Secondly, we pulled the core parts of the bundler into Marko's compiler so that we have a generic solution to handling code elimination for automatic Partial Hydration. While this lets it be bundler agnostic, more importantly, it gives us the ability to do wider sweeping changes on the final output.

# The Solution

Coming back refreshed Michael realized we could compile away the reactivity without the limitations of local compilation. We had already built the pieces we needed and the answer ironically is the simplest one we had to date.

What if the compiler could split a template into multiple exports that were tree-shakable, around the different inputs(props) they accepted. A parent could decide, based on the statefulness of its own data it was passing, which exports it needs to import. And then through the use of shared scope and inlined calls of those imported methods you could effectively compile away all reactivity but keep a granular update model.

This doesn't have the problems of the compiled reactivity as you aren't making signals or computations anymore but passing the data as is with simple dirty checks. If that sounds familiar, it should. It's basically how Svelte works on a localized scope, except Marko's version transcends files.

# What's next?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lur3nzk7gp4kbp11cbbj.png)

Well, we still aren't done yet. We have working prototypes and preliminary benchmarks. We feel we've finally found the approach suitable for [Marko](https://markojs.com/). This is an incredible step forward for compiled JavaScript framework design. But there is still more work to do. So we've decided to take a different tact.

We will be releasing [Marko](https://markojs.com/)'s Tag API, in Marko 5 ahead of the release of the new compiler and runtime. We can leverage Marko's cross template analysis to give the minimum feature set so that you can get started with the new features and syntax.

Together with [Marko](https://markojs.com/)'s already powerful Partial Hydration and Streaming Server rendering we can deliver on the developer experience. This will also give a good opportunity for feedback. We've been working tirelessly long behind closed doors and we need to do better at making our efforts visible.

We now are tracking our projects more visibly on Github and intend to give more regular updates. We will follow that in the fall with the beta release of the next version of Marko. Sometimes good things take a long time. But it will be well worth the wait.

