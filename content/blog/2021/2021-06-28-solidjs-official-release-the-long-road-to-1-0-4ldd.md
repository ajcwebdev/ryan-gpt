---
title: "SolidJS Official Release: The long road to 1.0"
description: "It's been a long road to get here. It's been so long I can't even remember when I started. I logged..."
slug: "solidjs-official-release-the-long-road-to-1-0-4ldd"
url: "https://dev.to/ryansolid/solidjs-official-release-the-long-road-to-1-0-4ldd"
publishDate: "2021-06-28"
tags:
  - "solidjs"
  - "javascript"
  - "webdev"
  - "frameworks"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdhwi93wdjm5z3dmqg53u.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdhwi93wdjm5z3dmqg53u.png"
---

It's been a long road to get here. It's been so long I can't even remember when I started. I logged on to an old private Bitbucket Repo and found "initial commit" on a repo aptly named "framework" from August 21st 2016. But I'm pretty sure that was my second prototype of a Reactive JavaScript Framework that would eventually become [SolidJS](https://solidjs.com).

So I can safely say a stable release has been 1000s of hours and at least 5 years in the making. But I'm sure the commenters on Reddit/HN won't even read this far before getting in with "Another day, another new JavaScript Framework". Seriously, don't let me down. I keep a scorecard.

## What is Solid?

It's a JavaScript framework, like React or Svelte. What makes it unique is that it flies in the face conventional knowledge to deliver what many have said to be impossible.

A reactive and precompiled "Virtual DOM"-less JSX framework with all the flexibility of React and simple mental model of Svelte.

A framework that values the explicity and composability of declarative JavaScript while staying close to the metal of the underlying DOM. It marries high level and low level abstractions. Simply put, it is anything that you want it to be.

A few people have suggested that Solid is the future.
{% twitter 1285644432398856192 %}
But it is also firmly rooted in the past when JavaScript Frameworks were simpler and you had real DOM nodes at your finger tips.

When your JSX elements are just real DOM nodes:
```jsx
const myButton = <button
  onClick={() => console.log("Hello")}
>Click Me</button>

// myButton instanceof HTMLButtonElement
```

When your control flows are runtime JavaScript:
```jsx
<div>{ showComponent() && <MyComp /> }</div>

// custom end user created component
<Paginated
  list={someList()}
  numberOfItems={25}
>
  {item => <div>{item.description}</div>}
</Paginated>
```

When you can compose and build your primitives how you want:
```jsx
function App() {
  const [count, setCount] = createSignal(0);

  // custom primitive with same syntax
  const [state, setState] = createTweenState(0);

  createEffect(() => {
    // no need for that dependency list we know when you update
    const c = count();

    // yep I'm nested
    createEffect(() => {
      document.title = `Weird Sum ${ c + state() }`;
    })
  });

  // Did I mention no stale closures to worry about?
  // Our component only runs once
  const t = setInterval(() => setCount(count() + 1, 5000);
  onCleanup(() => clearInterval(t));

  // other stuff...
}
```

Well, you feel like you are cheating. And not just at benchmarks😇. You are not supposed to get your cake and eat it too. Full TypeScript support. A wonderful [Vite](https://vitejs.dev/) starter template. All the modern tooling and IDE support you get for free by using JSX.

## Why you should be excited

It isn't just the amazing developer experience. Solid is fully featured.

### Powerful Primitives

Solid is built on the back of simple general purpose Reactive primitives. Solid embraces this like no Framework before having its very renderer built entirely of the same primitives you use to build your App. After all, are these really any different?

```js
const el = <div>Initial Text</div>
createEffect(() => {
  el.textContent = getNewText();
});

// versus
render(() => <MyGiantApp />, document.getElementById("app"))
```
Every part of Solid is extensible because every part could be developed in user land. You get the high level abstractions that make you productive but you don't need to leave them to get low level capabilities people enjoyed back when jQuery was king.

Solid has a compiler but it's there to help you not limit you. You can compose behaviors everywhere and use the same primitives. It's all one syntax.

Solid has even brought Directives to JSX.
```js
// directive using the same primitives
function accordion(node, isOpen) {
  let initialHeight;
  createEffect(() => {
    if (!initialHeight) {
      initialHeight = `${node.offsetHeight}px`;
    }
    node.style.height = isOpen() ? initialHeight : 0;
  })
}

// use it like this
<div use:accordion={isOpen()}>
  {/* some expandable content */}
</div>
```

### Sophisticated Stores

Since Solid will likely never have React compatibility it is important to integrate well with the ecosystem that is already there.

Stores both bring an easy in-house method of state management and bring Solid's pinpoint updates to solutions you might already be familiar with like [Redux](https://redux.js.org/) and [XState](https://xstate.js.org/).

{% codesandbox xstate-solid-example-dgpd7 %}

Stores use nested proxies, with opt in diffing for immutable data, that lets you update one atom of data and only have those specific parts of the view update. Not re-rendering Components, but literally updating the DOM elements in place. 

No need for memoized selectors, it works and it works well.

### Next Generation Features

Solid has all the next generation features. How about Concurrent Rendering, and Transitions to start?

{% codesandbox solid-suspense-tabs-vkgpj %}

We've spent the last 2 years developing out a Suspense on the server with Streaming Server-Side Rendering and Progressive Hydration. This setup works amazingly well even when [deployed to a Cloudflare Worker](https://hackernews.ryansolid.workers.dev/).

### Best in Class Performance

I was going to let this one go as people get tired of hearing it. After all, this news is several years old at this point.

Solid is the fastest(and often the smallest) JavaScript Framework in the browser and on the server. I won't bore you with the details you can [read about it elsewhere](https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck).

But we did a survey recently and it seems our users are happy with our performance as well.

![Survey Results](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7s3d1e05if11i3he56ip.png)

*Who voted 1? There was more than one of you.*

## What's Next

1.0 represents stability and commitment to quality, but there is a lot more yet to do. We are working on [Solid Start](https://github.com/solidjs/solid-start) a [Vite](https://vitejs.dev/)-based Isomorphic Starter that has all the best practices and Server rendering built in, with the ability to deploy to multiple platforms.

We are also excited to work with [Astro](https://astro.build). Work has already begun on an integration. There are so many great build tools out there right now and new ways to leverage frameworks like ours. This is a really exciting time.

And while I started this alone 5 years ago. I'm hardly alone now. It is only through the dedicated work of the community that we have a [REPL](https://playground.solidjs.com), countless 3rd party libraries to handle everything from drag and drop and animations, to [Custom Elements that render 3D scenes](https://lume.io/).

Solid has been seeing adoption in tooling for IDEs with work being done on [Atom](https://github.com/atom-community/etch-solid) and serving as the engine behind [Glue Codes](https://www.glue.codes/). And an early adopter(and perhaps influencer) of Builder.io's [JSX-Lite](https://github.com/BuilderIO/jsx-lite).

Honestly, there are too many people to thank. Those that have come and gone but left a mark. From the early adopters who said encouraging words in our original Spectrum channel that kept me motivated, to the growing team of ecosystem collaborators and core maintainers. A project like this is dead in the water without others believing in it. So you have my deepest thanks.

But I do want to take a moment to make special shoutout to @adamhaile, the creator of [S.js](https://github.com/adamhaile/S) and [Surplus.js](https://github.com/adamhaile/surplus) who developed the initial core technology approach used in Solid. It was his research that made this possible and gave me direction to continue to push boundaries.

There is a lot more to do. But in the meanwhile, check out our website, [solidjs.com](https://solidjs.com) with docs, examples and [40 new tutorials](https://www.solidjs.com/tutorial/introduction_basics). And come and say hi on our [Discord](https://discord.gg/solidjs). It's never been easier to get started with Solid.
