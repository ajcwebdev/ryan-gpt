---
title: "Thinking Granular: How is SolidJS so Performant?"
description: "Recently I've been asked many times how SolidJS is so much faster than all their favourite libraries...."
slug: "thinking-granular-how-is-solidjs-so-performant-4g37"
url: "https://dev.to/ryansolid/thinking-granular-how-is-solidjs-so-performant-4g37"
publishDate: "2020-04-15"
tags:
  - "javascript"
  - "webdev"
  - "solidjs"
  - "performance"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fztvnq596q56dxlhzdpmq.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fztvnq596q56dxlhzdpmq.jpg"
---

*Recently I've been asked many times how [SolidJS](https://github.com/ryansolid/solid) is so much faster than all their favourite libraries. They get the basics and have heard the rhetoric before but don't understand how Solid is any different. I'm going to try my best to explain it. It is a bit heavy at times. It's ok if it takes a couple of sittings. There is a lot here.*

People talk a lot about Reactivity and the cost of the Virtual DOM, yet the libraries they use have all the same trappings. From template renders that are still effectively a top-down diff, to reactive libraries that still feed into the same old Component system. Is it any wonder that we still hit the same performance plateau?

Now to be clear there is a reason we hit the same performance plateau in the browser. The DOM. Ultimately that is our biggest limitation. It's the law of physics we much obey. So much that I've seen people use some of the cleverest algorithms and still stare puzzled at the performance improving an intangible amount. And that's because ironically the best way to attack something like is being scrappy. Taking points where they count and leaving other things on the table.

Arguably one of the fastest standalone DOM diffs right now [udomdiff](https://github.com/WebReflection/udomdiff) came about this way. @WebReflection was on twitter asking if anyone knew a faster DOM diffing algorithm after growing tired of tweaking academic algorithms and not making headway. I pointed him to @localvoid(author of ivi) algorithm that was being used is most of the top libraries and he was like it looks a bunch of optimizations for a particular benchmark. To which I replied sure, but these are also all the most common ways people manipulate a list, and you will find hold up in almost all benchmarks. The next morning he had come back with his new library taking an almost too simple Set lookup combined with these techniques. And guess what it was smaller and about the same performance. Maybe even better.

I like this story because that has been my experience in this area. It wasn't smart algorithms but understanding what was important and then just a bit of hard work.

## The Reactive Model

I use a variation of that algorithm now in [Solid](https://github.com/ryansolid/solid) but ironically even this raw diffing implementation is less performant in the [JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark) than Solid's non-precompiled approach. In fact, when talking about simple Tagged Template Literal libraries Solid's approach is faster than lit-html, uhtml or any of the libraries that pioneered this approach. Why is that?

Ok, I assume at least some of you have drunk the [Svelte Kool-Aid](https://svelte.dev/blog/svelte-3-rethinking-reactivity) and are ready to go "It's Reactive". And it's true, but Svelte is slower than all the libraries I've mentioned so far so it's not quite that. Vue is reactive too and it still manages to offset any performance benefits by feeding it right back into a VDOM. The real answer is there is no single answer. It's a combination of many small things but let's start with the reactive system.

Solid's Reactive system looks like a weird hybrid between [React Hooks](https://reactjs.org/docs/hooks-reference.html), and [Vue 3's Composition API](https://composition-api.vuejs.org/#summary). It predates them both but it did borrow a few things from Hooks in terms of API:

```js
const [count, setCount] = createSignal(1);

createEffect(() => {
  console.log(count()); // 1
});

setCount(2); // 2
```

The basics come down to 2 primitives. A reactive atom, that I call a Signal, and a Computation(also known as a derivation) that tracks its change. In this case, creating a side effect (there is also `createMemo` that stores a computed value). This is the core of fine-grained reactivity. [I've covered how this works previously](https://levelup.gitconnected.com/finding-fine-grained-reactive-programming-89741994ddee?source=friends_link&sk=31c66a70c1dce7dd5f3f4229423ad127), so today we are going to build on it to see how we can make a whole system out of it.

The first thing you have to realize is these are just primitives. Potentially powerful primitives, very simple primitives. You can do pretty much whatever you want with them. Consider:

```jsx
import { render, diff, patch } from "v-doms-r-us";
import App from "./app"

const [state, setState] = createSignal({ name: "John" }),
  mountEl = document.getElementById("app");

let prevVDOM = [];
createEffect(() => {
  const vdom = render(<App state={state()} />);
  const patches = diff(vdom, prevVDOM);
  patch(mountEl, patches);
  prevVDOM = vdom;
});

setState({ name: "Jake" });
```
It's the same example again except now the side effect is to create a VDOM tree, diff it against the previous version, and patch the real DOM with it. Pretty much the basics of how any VDOM library works. By simply accessing state in the effect like count above we re-run every time it updates.

So reactivity is a way of modelling a problem, not really any particular solution. If using diffing is advantageous go for it. If creating 1000 independent cells that update independently is to our advantage we can do that too.

## Thinking Granular

The first thing that probably comes to mind is what if instead of having a single computation and diffing a tree on update what if we just updated only what has changed. This is by no means a new idea. But takes some consideration to wrestle the tradeoffs. Creating many subscriptions as you walk the DOM is actually more expensive than say rendering a Virtual DOM. Sure it is quick to update but most updates are relatively cheap compared to the cost of creation regardless of the approach you take. Solving for granularity is all about mitigating unnecessary costs at creation time. So how can we do that?

### 1. Use a compiler

Libraries spend a decent amount of time deciding what to do when creating/updating. Generally, we iterate over attributes, children parsing the data to decide how to properly do what's needed. With a compiler, you can remove this iteration and decision tree and simply just write the exact instructions that need to happen. Simple but effective.

```jsx
const HelloMessage = props => <div>Hello {props.name}</div>;

// becomes
const _tmpl$ = template(`<div>Hello </div>`);
const HelloMessage = props => {
  const _el$ = _tmpl$.cloneNode(true);
  insert(_el$, () => props.name, null);
  return _el$;
};
```

Solid's tagged template literal version does almost the same with just-in-time compilation at runtime and still is remarkably fast. But the HyperScript version is slower than some of the faster Virtual DOM libraries simply from the overhead of doing this work even once. If you aren't compiling with Reactive library, a top-down library is doing the same traversal as you just not constructing all the subscriptions. It's going to be more performant at creation. Mind you a top-down approach, like a VDOM, won't bother compiling generally since it has to run the creation path anyway on an update as it constantly re-creates the VDOM. It gains more advantage from memoization.

### 2. Clone DOM Nodes

Yep. Surprisingly few non-Tagged Template libraries do this. It makes sense since if your view is composed of a bunch of function calls like the VDOM you don't get the chance to look at it holistically. What is more surprising is most compiled libraries don't do this either. They create each element one at a time. This is slower than cloning a template. The larger the template more effective it is. But you see really nice gains here when you have lists and tables. Too bad there aren't many of those on the Web. :smile:

### 3. Loosen the granularity

What? Make it less granular? Sure. Where are we paying the highest cost on update? Nesting. Doing unnecessary work reconciling lists by far. Now you might be asking why even reconcile lists at all? Same reason. Sure a row swap would be much faster with direct updates. However, when you consider batching updates and that order matters it isn't that simple to solve. It's possible there will be progress here but in my experience currently list diffing is better for the general problem. That being said you don't want to be doing this all time.

But where is the highest creation cost? Creating all those computations. So what if we only made one for each template to handle all attributes as a mini diff, but still create separate ones for inserts. It's a good balance since the cost of diffing a few values to be assigned to attributes costs very little, but saving 3 or 4 computations per row in a list is significant. By wrapping inserts independently we still keep from doing unnecessary work on update.

### 4. Use less computations

Yes obviously. More specifically how do we encourage the developer to use less. It starts with embracing the reactive mentality of everything that can be derived should be derived. But nothing says we need to make this any more complicated than my first example. Maybe you've seen a version of this example before when learning about fine-grained reactivity.

```jsx
const [user, setUser] = createState({ firstName: "Jo", lastName: "Momma" });
const fullName = createMemo(() => `${user.firstName} ${user.lastName}`);

return <div>Hello {fullName}</div>;
```

Awesome we've derived `fullName` and it updates independently whenever `firstName` or `lastName` updates. It's all automatic and powerful. Maybe your version called it a `computed` or maybe wanted you to use `$:` label. Did you ever ask yourself the value of creating that computation here? What if we just(notice we removed `createMemo`):
```jsx
const [user, setUser] = createState({ firstName: "Jo", lastName: "Momma" });
const fullName = () => `${user.firstName} ${user.lastName}`;

return <div>Hello {fullName}</div>;
```
You guessed it. Effectively the same thing and we have one less computation. Now a computation means we don't re-create the string `fullName` unless `firstName` or `lastName` change but unless used elsewhere in another computation that has other dependencies it won't run again anyway. And even so, is creating that string that expensive? No. 

So the key to remember with Solid is it doesn't need to be a signal or computed you are binding. As long as that function at some point wraps a signal or state access you will be tracking it. We don't need a bunch of computations in the middle unless we are trying to cache values. No hangups around `state.value` or `boxed.get`. It's always the same a function call whether directly on a signal, masked behind a proxy, or wrapped in 6 levels of function transformations.

### 5. Optimize reactivity for creation

I studied a lot of different reactive libraries the crux of their bottlenecks around creation came down to the data-structures they use to manage their subscriptions. Signals hold the list of subscribers so that they can notify them when they update. The problem is that the way computations reset subscriptions on each run, requires them to remove themselves from all their observed signals. That means keeping a list on both sides. Where on the signal side where we iterate on update this is pretty simple, on the computation side we need to do a lookup to handle that removal. Similarly to prevent duplicate subscriptions we'd need to do a lookup every time we access a signal. Naive approaches in the past used arrays and `indexOf` searches which are painfully slow along with `splice` to remove the entry. More recently we've seen libraries use Sets. This is generally better but sets are expensive at creation time. The solution interestingly enough was to use 2 arrays on each side, one to hold the item, and one to hold the reverse index on its counterpart, and at creation time don't initialize them. Only create them as needed. We can avoid `indexOf` lookups and instead of `splice` we can just replace the node at the removed index with the item at the end of the list. Because of push/pull evaluation and the concept of execution clock we can still ensure in order updates. But what we've done is prevent immature memory allocations and remove lengthy lookups on initial creation.

## Reactive Components

We have come to love the adaptability that comes from the modularity of Components. But not all Components are equal. In a Virtual DOM library, they are little more than an abstraction for a type of VDOM node. Something that can serve as an ancestor for its own tree and but ultimately a link in the data structure. In reactive libraries, they have served a slightly different role.

The classic problem with the observer pattern (the one used by these libraries) is handling the disposal of subscriptions no longer needed. If that which is observed outlives the computation(observer) tracking it, the observed still holds a reference in its subscription list to the observer and tries to call it on updates. One way to solve it is to manage the whole cycle using Components. They provide a defined boundary for managing lifecycle and as mentioned previously you don't take much of a hit for loosening granularity. Svelte uses this approach and takes it a step further not even maintaining a subscription list and just having any update trigger the update portion of the generated code.

But there is a problem here. The lifecycle of reactivity is fully bound here, fully localized. How do we communicate values out reactively? Essentially synchronization through that computation. We resolve values only to wrap them all over again. This super common pattern in reactive libraries and infinitely more costly than its Virtual DOM counterpart. This approach will always hit a performance wall. So let's "get rid of it".

## The Reactive Graph

This is the only thing that needs to be there. What if we piggyback off of it? This graph is comprised of signals and computations linked together through subscriptions. Signals can have multiple subscriptions and computations can subscribe to multiple signals. Some computations like `createMemo` can have subscriptions themselves. So far a graph is the wrong term here as there is no guarantee all nodes are connected. We just have these groupings of reactive nodes and subscriptions that look something like this:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/iovzdyf1dt8t9b243vg6.png)

But how does this compose? If nothing was dynamic this would be most of the story. However, if there is conditional rendering or loops somewhere effectively you will:
```jsx
createEffect(() => show() && insert(parentEl, <Component />))
```
The first thing you should notice is that Component is being created under another computation. And it will be creating its own computations underneath. This works because we push the reactive context on to a stack and only the immediate computation tracks. This nesting happens throughout the view code. In fact, other than top-level all computations are created under other computations. As we know from our reactive basics, whenever a computation re-evaluates it releases all subscriptions and executes again. We also know stranded computations cannot release themselves. The solution is just to have the computations register with their parent computation and for clean up the same way we do subscriptions whenever that parent re-evaluates. So if we wrap the top level with a root computation (something inert, not tracking) then we get automatic disposal for our whole reactive system without introducing any new constructs.

## Components?

As you can see we don't really need Components to do anything to manage lifecycles. A Component will always exist as long as the computation that houses it does, so tying into that computations disposal cycle is as effective as having its own method. In Solid, we register `onCleanup` methods that can work in any computation whether it's to release an event handler, stop a timer, or cancel an asynchronous request. Since initial render or any reactive triggered update executes from within a computation you can place these methods anywhere to cleanup at the granularity that is needed. In summary, a Component in Solid is just a function call.

If a Component is just a function call then how does it maintain its own state? The same way functions do. Closures. It isn't the closure of a single component function. It's the closures in each computation wrapper. Each `createEffect` or binding in your JSX. At runtime Solid has no concept of Component. As it turns out this is incredibly lightweight and efficient. You are only paying for the cost of setting up the reactive nodes, no other overhead.

The only other consideration is how do you handle reactive props if there is nothing to bind them to. The answer there is simple too. Wrap them in a function like we did in #4 above. The compiler can see that a prop could be dynamic and just wraps it in a function, and then using a simple object getter provides a unified props object API for the Component to use. No matter where the underlying signal is coming from and passed down through all the components in a render tree we only need a computation at the very end where it is being used to update the DOM or be part of some user computation. Because we need dependency access to be in the consuming computation all props are lazily evaluated, including children. 

This is a very powerful pattern for composition as it is an inversion of control as the deepest leaves control the access, while the render tree composes the behavior. It's also incredibly efficient as there is no intermediary. We effectively flatten the subscription graph maintaining the granularity we desire on updates.

## Conclusion

So in summary, SolidJS' performance comes from appropriately scaled granularity through compilation, the most effective DOM creation methods, a reactive system not limited to local optimization and optimized for creation, and an API that does not require unnecessary reactive wrappers. But what I want you to think about is, how many of those are actually architectural rather than implementation details? A decent number. Most performant non-VDOM libraries do portions of these things but not all. And it would not be easy for them to do so. Like React's move to React Fiber has not been as easy for other VDOM libraries to replicate. Can Svelte the way it is written now disappear Components along with the Framework? Probably not. Can lit-html reactively handle nested updates as effectively? Unlikely.

So yes there is a lot of content here. And I feel like I've shared a lot of my secrets. Although to be fair, it's already out there in the source code. I'm still learning stuff every day and I expect this to continue to evolve. All these decisions come with tradeoffs. However, this is the way that I've put together what I believe to be the most effective way to render the DOM.

----------------------

{% github https://github.com/ryansolid/solid %}

