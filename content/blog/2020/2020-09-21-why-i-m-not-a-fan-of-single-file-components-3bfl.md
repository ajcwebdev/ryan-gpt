---
title: "Why I'm not a fan of Single File Components"
description: "Single File Components(SFCs) are a style of application organization used by JavaScript UI libraries..."
slug: "why-i-m-not-a-fan-of-single-file-components-3bfl"
url: "https://dev.to/ryansolid/why-i-m-not-a-fan-of-single-file-components-3bfl"
publishDate: "2020-09-21"
tags:
  - "javascript"
  - "webdev"
  - "vue"
  - "svelte"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fv4xj0437257e431kqe7g.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fv4xj0437257e431kqe7g.jpg"
---

Single File Components(SFCs) are a style of application organization used by JavaScript UI libraries where each file represents a single component in all aspects. Typically they resemble an HTML document where you have HTML tags, Style Tag, and Script Tag all in a file. This is the common pattern for UI Frameworks like [Vue](https://vuejs.org/) and [Svelte](https://svelte.dev/).

I was looking for some good literature on the subject and I found a lot of people talking about the separation of concerns. I am not advocating strict adherence of MVC and keeping your code and view separate from my styles etc... Nor am I advocating having component files exporting more than one component.

I want to talk about the limitation of SFCs as a component format. To me, this topic is a lot like discussing the benefits of Hooks over Class lifecycles. I believe there are clear unequivocal benefits of not using typical SFCs.

## Component Boundaries

What is a component? What is the logical breakdown of what should be a component? This is not obvious to anyone at the beginning, and it continues to be difficult even as you gain more experience. 

One might argue that school taught them that the Single Responsible Principle means a Component should do exactly one thing. And maybe that's a reasonable heuristic.

I know a beginner might not even want to fuss with that. Stick way too much in one component so all their code is in front of them. They aren't messing with "props", "events", "context" or any other cross-component plumbing. Just simple code.

Some frameworks might even have very strict reasons for component boundaries if they are tied to the change propagation system (like all VDOM libraries). They define what re-renders or not. `shouldComponentUpdate` is not something that exists without having severe repercussions for messing with component boundaries.

> So what should make a component?

Ideally, whatever makes sense for the developer. Rich Harris, creator of Svelte, in talking about disappearing frameworks once said, "Frameworks are there to organize your mind". Components are just an extension of that.

So SFCs actually handle this pretty well. No problem so far. But let's dig deeper.

## Component Cost

I did some pretty deep performance testing of the [Cost of Components in UI libraries](https://medium.com/better-programming/the-real-cost-of-ui-components-6d2da4aba205?source=friends_link&sk=a412aa18825c8424870d72a556db2169). The TL;DR is for the most part VDOM libraries like React scale well with more components whereas other libraries especially reactive libraries do not. They often need to synchronize reactive expressions with child component internals which comes at a small cost.

Go look at a benchmark with reactive libraries and VDOM libraries and look at how they use components differently. How often do the Reactive libraries use more than a single component when testing creation cost? In real apps, we happen to have lots.

> Aside: I wrote a benchmark implementation with a React-Like library using some child components that I wrote with less code than Svelte. I mentioned it in an article and was met with that it wasn't fair that I wasn't making separate components for Svelte. But I couldn't because I wanted to show off Svelte's performance.

Where am I going with this? It isn't simple enough to congratulate the type of libraries that use SFCs for not forcing esoteric components on us. 

## Component Refactoring

What is the most expensive part of refactoring? I'd personally nominate redefining boundaries. If our ideal components are those that let us choose the boundaries we want, I'd propose our components should grow and split apart at our comfort.

React's Component model is actually pretty convenient for this. Starting with being able to have more than one component in a single file. When something gets a bit unwieldy we just break it off.

It might be as simple to make the template more readable. Maybe just to reduce repetition. Kind of like that natural point where you decide to break something into its own function. I mean how do you write less code in JavaScript? You write a function.

Let's put this another way. Picture how you would do this in the library of your choice(I'm going to use React). Pretend you have a Component that produces a Side Effect like maybe uses a Chart Library and cleans up after.

```jsx
export default function Chart(props) {
  const el = useRef();
  useEffect(() => {
    const c = new Chart(el.current, props.data);
    return () => c.release();
  }, []);
  return (
    <>
      <h1>{props.header}</h1>
      <div ref={el} />
    </>
  )
}
```

Now you have a new requirement to make it conditionally apply based on a boolean `enabled` prop. 

If you went through this exercise and you kept it as a single component, you should realize that to apply the conditional you end up applying it in both the view and the imperative portions of the code (mount, update, and release).

```jsx
export default function Chart(props) {
  const el = useRef();
  useEffect(() => {
    let c;
    if (props.enabled) c = new Chart(el.current, props.data);
    return () => if (c) c.release();
  }, [props.enabled]);

  return (
    <>
      <h1>{props.header}</h1>
      {props.enabled && <div ref={el} />}
    </>
  )
}
```

Or using React you simply broke it into another Component and the logic stays more or less the same.

```jsx
function Chart(props) {
  const el = useRef();
  useEffect(() => {
    const c = new Chart(el.current, props.data);
    return () => c.release();
  }, []);
  return <div ref={el} />;
}

export default function ChartContainer(props) {
  return (
    <>
      <h1>{props.header}</h1>
      {props.enabled && <Chart data={props.data} />}
    </>
  )
}
```

This is a simple example but this sort of one change touch multiple points is the same reason Hooks/Composition API/Svelte `$` can produce more compact and easier maintainable code than class lifecycles. Yet here we are asking the same difference of our template vs our JavaScript.

This is true of not only side effects, but nested state as well. The nicest part of the React approach here is it is non-commital. I didn't need to make a new file. I'm still learning how this component works. What if the requirements change again? What if I'm that newbie just learning the ropes?

## The limitation of SFCs

The crux of the problem with restricting files to a single component is we only get a single level of state/lifecycle to work with. It can't grow or easily change. It leads to extra code when the boundaries are mismatched and cognitive overhead when breaking apart multiple files unnecessarily.

SFCs libraries could look at ways to do nested syntax. Most libraries. even non-SFC ones, don't support this though. React for instance doesn't allow nesting of Hooks or putting them under conditionals. And most SFCs don't really allow arbitrary nested JavaScript in their templates. [MarkoJS](https://markojs.com/) might be the only SFC one that I'm aware of supporting [Macros](https://markojs.com/docs/custom-tags/#macros)(nested components) and [inline JS](https://markojs.com/docs/syntax/#inline-javascript), but that is far from the norm.

Maybe you don't feel it's important enough but there is value for the beginner to the expert in an application architecture built with maintainability in mind from day one. It progressively grows with them. And that's why I dislike SFCs the same way I prefer Hooks over Class Components.

------------------

And it's why [SolidJS](https://github.com/ryansolid/solid) is designed to have the best experience as you grow your applications. It's components live up to the ideal. It is the best of both worlds. It does not force you to make a bunch of unnecessary components like a VDOM library, but doesn't restrict you from doing so. Supports nested state and effects in the templates so it grows with you.

In another words in addition to the ways mentioned above you can nest effects and state. You can even use a ref callback to do this sort of inline custom directive:
```jsx
export default function Chart(props) {
  return (
    <>
      <h1>{props.header}</h1>
      {
        props.enabled && <div ref={el =>
          createEffect(() => {
            const c new Chart(el.current, props.data);
            onCleanup(() => c.release());
          })
        } />
      }
    </>
  )
}
```

Solid achieves this with Declarative Data independent of the lifecycle, disappearing components, JSX powered templates and high-performance granular reactivity.

Hooks and Composition API only just scratch the surface of what you can do with declarative data patterns. Come check out the most familiar yet starkly different JS(TypeScript) Framework.

https://github.com/ryansolid/solid


