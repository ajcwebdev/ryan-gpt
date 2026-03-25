---
title: "Introducing the SolidJS UI Library"
description: "SolidJS is a declarative UI library for building web applications, much like React, Angular, or Vue...."
slug: "introducing-the-solidjs-ui-library-4mck"
url: "https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck"
publishDate: "2020-03-26"
tags:
  - "webdev"
  - "javascript"
  - "solidjs"
  - "reactive"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe00a8854elv127ec8tl8.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe00a8854elv127ec8tl8.png"
---

[SolidJS](https://github.com/solidjs/solid) is a declarative UI library for building web applications, much like React, Angular, or Vue. It is built using brutally efficient fine-grained reactivity(No Virtual DOM), an ephemeral component model, and the full expressiveness of JavaScript(TypeScript) and JSX. While understandably no one is really in the market for a new JavaScript UI library, Solid is exceptional, a true standout amongst its competition. These are the 5 reasons you should be at least aware of SolidJS.

#1. It's the fastest...

![Feb 2020 Results](https://dev-to-uploads.s3.amazonaws.com/i/9ndvtxrk50gkbg7azx2q.png)*JS Framework Benchmark Feb 2020*

Bold claim, and sure some small experimental renderers can pull better numbers in certain cases but Solid is a benchmark king. It's been at the top of the [JS Frameworks Benchmark](https://github.com/krausest/js-framework-benchmark) for over a year now, neck and neck with the most optimally hand-written plain JavaScript implementation. This includes surpassing the fastest low-level Web Assembly implementations and this is with a declarative UI library.

And I'm sure at this point you are like what about ____. [Go take a look, everyone's there](https://krausest.github.io/js-framework-benchmark/current.html). Solid outpaces Inferno, LitHTML, Svelte, Vue 3.0, React, Angular, <del>WASM-bindgen</del> you name it. (EDIT: Raw imperative WASM is now too close to call)

Into Web Components? It's the fastest there as well according to [All the Ways to Make a Web Component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ify83cubh4l59e1mrldf.png)

Solid is now the fastest on the server as well. Using the [Isomorphic UI Benchmark](https://github.com/marko-js/isomorphic-ui-benchmarks) it has pulled out in front of the competition.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/uqmwigye5er1bqqzu1om.png)

See [How we wrote the fastest JavaScript UI Framework, Again](https://levelup.gitconnected.com/how-we-wrote-the-fastest-javascript-ui-framework-again-db097ddd99b6)

#2. It's the smallest...

![Realworld Bundle Size](https://dev-to-uploads.s3.amazonaws.com/i/8vmknsacyily1dq8ekrl.png)*Realworld Demo Initial JS Bundle Size*

While it won't win size in toy demos and benchmark where everything happens in a single Component, that honor probably goes to Svelte, when it comes to larger actual applications Solid has almost no overhead on Components (more like a VDOM library rather than a Reactive one). In so it scales exceptionally. For example, SolidJS currently is the smallest implementation of the renowned [Realworld Demo](https://github.com/gothinkster/realworld). Its initial JS payload is 11.1kb. [This implementation](https://github.com/solidjs/solid-realworld) doesn't leave anything out using Context API and Suspense. Svelte's version is 33% larger at 14.8kb. Solid's compiler does a great job of managing tree shaking, its codebase built off the same powerful primitives as the renderer makes the runtime small and completely scalable.

#3 It's expressive...

Solid apps are built using JavaScript(TypeScript) and JSX. The compiler optimizes the JSX but nothing else. This means you have the full language at your disposal. You are not limited to premade helpers and directives to control how your view renders (although Solid ships with some). You don't get to rewrite `v-for` the way you write a component. There are ways to write custom directives or precompiler hooks, but in Solid it's just another component. If you don't like how `<For>` works, write your own. Solid's renderer is built on the same reactive primitives that the end-user uses in their applications.

Solid's reactive primitives manage their own lifecycle outside of the render system. This means they can be composed into higher-order hooks, be used to make custom Components, and store mechanisms. It is completely consistent whether working in local scope or pulling from a global store.

#4 It's fully featured...

Solid still considers itself a library rather than a framework so you won't find everything you might in Angular. However, Solid supports most React features like Fragments, Portals, Context, Suspense, Error Boundaries, Lazy Components, Async and Concurrent Rendering, Implicit Event Delegation, SSR and Hydration(although there is no Next.js equivalent yet). It supports a few things not yet in React like Suspense for Async Data Loading, and Streaming SSR with Suspense.

For the reasons mentioned above, it has taken less effort to develop these more advanced features with Solid given its reactive foundation. React clones like Preact and Inferno would require significant changes to their VDOM core to offer the same so it has been a much longer road. And the same is true with new directions React has been doing in its experiments as async rendering and multiple roots are trivial with Solid. In general Solid's approach lets it adapt easily, as it becomes a matter of granularity so it can apply similar diffing as VDOM libraries as necessary and not where it is not.

#5 It's familiar...

```jsx
import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

const CounterComponent = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(c => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>{count()}</div>;
};

render(() => <CounterComponent />, document.getElementById("app"));
```

While a new UI library is supposed to jump out and break the mould. Solid doesn't stand out when it comes to API's or developer experience. If you've developed with React Hooks before Solid should seem very natural. In fact, more natural as Solid's model is much simpler with no Hook rules. Every Component executes once and it is the Hooks and bindings that execute many times as their dependencies update.

Solid follows the same philosophy as React with unidirectional data flow, read/write segregation, and immutable interfaces. It just has a completely different implementation that forgoes using a Virtual DOM.

# Too good to be true?

It's the real deal. Solid has been in development for over 4 years. But it is still in its infancy when comes to community and ecosystem. I hope you agree there is great potential here. It's always difficult to stand out in an overcrowded space, and more so for Solid as it doesn't look very different on the surface. But I hope this article gives you insight into why [SolidJS](https://github.com/solidjs/solid) is secretly the best JavaScript UI library you've never heard of.

Check it out on Github:

{% github solidjs/solid %}

