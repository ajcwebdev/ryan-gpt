---
title: "FLUURT: Re-inventing Marko"
description: "The Marko Team has been working on a new rendering engine which is slated to become the core engine..."
slug: "fluurt-re-inventing-marko-3o1o"
url: "https://dev.to/ryansolid/fluurt-re-inventing-marko-3o1o"
publishDate: "2020-11-19"
tags:
  - "javascript"
  - "webdev"
  - "webperf"
  - "marko"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F3zv0mt64dji764rk4c4z.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F3zv0mt64dji764rk4c4z.png"
---

The Marko Team has been working on a new rendering engine which is slated to become the core engine for [Marko](https://markojs.com/) in a similar way Fiber([React](https://reactjs.org/)), Glimmer([Ember](https://emberjs.com/)), and Ivy([Angular](https://angular.io/)) have been for their respective libraries. Today I want to give you a first peek into what this is going to look like.

A lot has changed since the release of Marko 4 in 2017. Most of the effort has been managing migrations, and updating tooling (ie.. the move to Babel, Webpack, Rollup). Marko 5 is in alpha and represents the modernization of the toolchain. But what about the architectural considerations?

The FLUURT(Fast Lean Unified Update and Render Target) engine is being developed with a few key goals in mind:

1. Reduce shipped JavaScript size
2. Improve client-side performance
3. Improve development experience

These are an acknowledgement of the increasing need for a dynamic and interactive experience on the client. Marko has long had one of the best server-side implementations but as frameworks like [Next](https://nextjs.org/) show up, and even newer compiled approaches like [Svelte](https://svelte.dev/) it is clear it is time to take the next steps.

> *Updated April 2022:* FLUURT as a codename has been has been superseded by Marko 6 now that it is clear that these changes will be arriving in the next major version. I will leave the original article intact but you can treat these as equivalent.

## Approach

Marko is an interactive templating language first and foremost so we should play to our strengths. We have the ability to compile our templates as desired. So to best accomplish our goals we've decided to attack the problem by building a new foundation on the client.

### 1. Reactivity

Being a declarative language with control over templating syntax, using the semantics of fine-grained reactivity is a clear way we can achieve both our goals. Relying on a small set of reactive primitives with code generation drastically reduces runtime size and complexity.

The approach the FLUURT is using is what I'm calling fine-grained compile-time reactivity. This is basically a hybrid between what Svelte does with its compiler and fine-grained reactivity found in libraries like Vue, Solid, or MobX.

The way this works is pretty novel. In a way it is very similar to how Svelte compiles away the reactive system. But instead of compiling things into components that re-run on state change(thanks to a `$invalidate` call), FLUURT splits a component into multiple functions. One for each reactive atom(signal) that when executed with a new value conditionally calls any downstream work.

And this extends beyond a simple template as these functions are exported so that parent consumers of the component can selectively import the methods they need if the data they pass in is dynamic. Of course, this is all automatically handled by the compiler so the developer does not need to do anything special.

The end result is compiling away the reactivity but with an execution model very similar to something like [SolidJS](https://www.solidjs.com). Marko basically compiles away any notion of components.

### 2. First Class Composition

Language design can be challenging but we know that it is of utmost importance to make things consistent. To accomplish this we want to bring reactivity into the language of Marko in an extensible way.

The proposal is that our primitives are just Marko tags. This means that they can be co-located, nested, and composable. Co-located means that they can live in the template where they are used; nested means that they can be mounted/unmounted independent of the component; composable in that they can be constructed and extracted independently of the component file.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qper3ppo9cj7rjo8ri2f.png)

One would define a reactive value (ref/observable/signal) with a `let` tag. And a derivation (computed/memo/$) with a `const` tag. And writing your own can be used and consumed in the same way.

The ability to put these primitives nested in the template creates a cut and paste development experience, where the cost of refactoring is greatly reduced as code can mostly be moved around at will without change.

### 3. Sub-Component Hydration

From these parts you might be able to see that most of the library works independently of components. One benefit is this approach reduces [the overall overhead of having components](https://medium.com/better-programming/the-real-cost-of-ui-components-6d2da4aba205). 

But more interesting, is that this allows for a new type of hydration. We can hydrate along reactive boundaries rather than component ones. We can split the stateful and static parts of the template and ship only parts of components and their descendants to the browser.

Classically with partially hydrated apps, as you might find in Marko or ElderJS, once you hit a stateful component you need to have all the JS code below that point. But FLUURT introduces the ability to break up our islands even smaller. It's more like Hawaii than Taiwan. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7iv9klcfklrf78uiid8p.png)

The amount of end-user code shipped to the client can be drastically reduced.

## Summary

There is a lot to be excited about in the upcoming FLUURT engine. It unlocks performance techniques yet to be seen in any major framework. It provides a development experience where writing less code isn't just about the number of characters you commit. And it finally gives Marko the tools it needs to be as much of a force in the client as it has been on the server.

This is just the introduction. Look forward to follow-up articles where I will dig into each area in more depth.

[Marko: Designing a UI Language](https://dev.to/ryansolid/marko-designing-a-ui-language-2hni)

------------------------------

Check out [Marko on Github](https://github.com/marko-js/marko), [Follow us on Twitter](https://twitter.com/MarkoDevTeam), or [Join us on Discord](https://discord.com/invite/RFGxYGs) to keep apprised of the latest updates.
