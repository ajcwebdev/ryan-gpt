---
title: "Building a Reactive Library from Scratch"
description: "In the previous article A Hands-on Introduction to Fine-Grained Reactivity I explain the concepts..."
slug: "building-a-reactive-library-from-scratch-1i0p"
url: "https://dev.to/ryansolid/building-a-reactive-library-from-scratch-1i0p"
publishDate: "2021-02-18"
tags:
  - "javascript"
  - "webdev"
  - "reactivity"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F733pa6sw52mucu99ayvn.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F733pa6sw52mucu99ayvn.jpg"
---

In the previous article [A Hands-on Introduction to Fine-Grained Reactivity](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf) I explain the concepts behind fine-grained reactivity through example. Now let's look at building a reactive library ourselves.

There is always something that seems a bit magical when you see it in action but mechanically it isn't that complicated. What makes reactivity feel so magical is once put in place it takes care of itself even under dynamic scenarios. This is the benefit of true declarative approaches as the implementation doesn't matter as long as the contract is kept. 

The reactive library we will build won't have all the features of something like [MobX](https://mobx.js.org/README.html), [Vue](https://vuejs.org/), or [Solid](https://github.com/ryansolid/solid) but it should serve as a good example to get a feel for how this works.

# Signals

Signals are the core of our reactive system and are the right place to start. They contain a getter and setter so we might start with something like this:

```js
export function createSignal(value) {
  const read = () => value;
  const write = (nextValue) => value = nextValue;
  return [read, write];
}
```
This doesn't do much of anything just yet but we can see that we now have a simple container to hold our value.
```js
const [count, setCount] = createSignal(3);
console.log("Initial Read", count());

setCount(5);
console.log("Updated Read", count());

setCount(count() * 2);
console.log("Updated Read", count());
```
{% codesandbox createsignal-6349y %}

So what are we missing? Managing subscriptions. Signals are event emitters.
```js
const context = [];

function subscribe(running, subscriptions) {
  subscriptions.add(running);
  running.dependencies.add(subscriptions);
}

export function createSignal(value) {
  const subscriptions = new Set();

  const read = () => {
    const running = context[context.length - 1];
    if (running) subscribe(running, subscriptions);
    return value;
  };

  const write = (nextValue) => {
    value = nextValue;

    for (const sub of [...subscriptions]) {
      sub.execute();
    }
  };
  return [read, write];
}
```
There is a bit to unpack here. There are two main things we are managing. At the top of the file, there is a global `context` stack that will be used to keep track of any running Reactions or Derivations. In addition, each Signal has its own `subscriptions` list. 

These 2 things serve as the whole basis of automatic dependency tracking. A Reaction or Derivation on execution pushes itself onto the `context` stack. It will be added to the `subscriptions` list of any Signal read during that execution. We also add the Signal to the running context to help with cleanup that will be covered in the next section.

Finally, on Signal write in addition to updating the value we execute all the subscriptions. We clone the list so that new subscriptions added in the course of this execution do not affect this run.

This is our finished Signal but it is only half the equation.

# Reactions and Derivations

Now that you've seen one half you might be able to guess what the other half looks like. Let's create a basic Reaction(or Effect).
```js
function cleanup(running) {
  for (const dep of running.dependencies) {
    dep.delete(running);
  }
  running.dependencies.clear();
}

export function createEffect(fn) {
  const execute = () => {
    cleanup(running);
    context.push(running);
    try {
      fn();
    } finally {
      context.pop();
    }
  };

  const running = {
    execute,
    dependencies: new Set()
  };

  execute();
}
```
What we create here is the object that we push on to context. It has our list of dependencies (Signals) the Reaction listens to and the function expression that we track and re-run.

Every cycle we unsubscribe the Reaction from all its Signals and clear the dependency list to start new. This is why we stored the backlink. This allows us to dynamically create dependencies as we run each time. Then we push the Reaction on the stack and execute the user-supplied function.

These 50 lines of code might not seem like much but we can now recreate the first demo from the previous article.
```js
console.log("1. Create Signal");
const [count, setCount] = createSignal(0);

console.log("2. Create Reaction");
createEffect(() => console.log("The count is", count()));

console.log("3. Set count to 5");
setCount(5);

console.log("4. Set count to 10");
setCount(10);
```
{% codesandbox createeffect-t3vcb %}

Adding a simple Derivation isn't much more involved and just uses mostly the same code from `createEffect`. In a real reactive library like MobX, Vue, or Solid we would build in a push/pull mechanism and trace the graph to make sure we weren't doing extra work, but for demonstration purposes, I'm just going to use a Reaction.

> **Note**: If you are interested in implementing the algorithm for his push/pull approach I recommend reading [Becoming Fully Reactive: An in-depth explanation of MobX](https://medium.com/hackernoon/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)

```js
export function createMemo(fn) {
  const [s, set] = createSignal();
  createEffect(() => set(fn()));
  return s;
}
```
And with this let's recreate our conditional rendering example:
```js
console.log("1. Create");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);

const displayName = createMemo(() => {
  if (!showFullName()) return firstName();
  return `${firstName()} ${lastName()}`
});

createEffect(() => console.log("My name is", displayName()));

console.log("2. Set showFullName: false ");
setShowFullName(false);

console.log("3. Change lastName");
setLastName("Legend");

console.log("4. Set showFullName: true");
setShowFullName(true);
```
{% codesandbox creatememo-0xyqf %}

As you can see, because we build the dependency graph each time we don't re-execute the Derivation on `lastName` update when we are not listening to it anymore.

# Conclusion

And those are the basics. Sure, our library doesn't have batching, custom disposal methods, or safeguards against infinite recursion, and is not glitch-free. But it contains all the core pieces. This is how libraries like [KnockoutJS](https://knockoutjs.com/) from the early 2010s worked.

I wouldn't recommend using this library for all the mentioned reasons. But at ~50 lines of code, you have all makings of a simple reactive library. And when you consider how many behaviors you can model with it, it should make more sense to you why libraries like [Svelte](https://svelte.dev) and [Solid](https://github.com/ryansolid/solid) with a compiler can produce such small bundles.

This is a lot of power in so little code. You could really use this to solve a variety of problems. It's only a few lines away from being a state library for your framework of choice, and only [a few dozen more to be the framework itself](https://indepth.dev/posts/1289/solidjs-reactivity-to-rendering).

Hopefully, through this exercise, you now have a better understanding and appreciation of how auto-tracking in fine-grained reactive libraries work and we have demystified some of the magic.

-------------

Interested How Solid takes this and makes a full rendering library out of it. Check out [SolidJS: Reactivity to Rendering](https://indepth.dev/posts/1289/solidjs-reactivity-to-rendering).
