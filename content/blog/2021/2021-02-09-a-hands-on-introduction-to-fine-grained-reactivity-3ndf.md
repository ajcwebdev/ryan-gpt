---
title: "A Hands-on Introduction to Fine-Grained Reactivity"
description: "Reactive Programming has existed for decades but it seems to come in and out of fashion. In..."
slug: "a-hands-on-introduction-to-fine-grained-reactivity-3ndf"
url: "https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf"
publishDate: "2021-02-09"
tags:
  - "javascript"
  - "webdev"
  - "reactivity"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fd85432i8om3r3t214bnh.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fd85432i8om3r3t214bnh.jpg"
---

Reactive Programming has existed for decades but it seems to come in and out of fashion. In JavaScript frontends, it has been on the upswing again for the last couple of years. It transcends frameworks and is a useful subject for any developer to be familiar with.

However, it isn't always that easy. For starters, there are different types of reactivity. The terms and naming are often overloaded with the same word meaning different things to different people.

Secondly, it sometimes looks like magic. It isn't, but it's harder not to get distracted by the "how" before understanding the "what". This makes it a challenge to teach by practical example and becomes a careful balance to prevent going too theoretical.

This article is not going to focus on the "how". I will attempt to provide the most gentle introduction into the Fine-grained reactivity the approach used by libraries like [MobX](https://mobx.js.org/README.html), [Vue](https://vuejs.org/), [Svelte](https://svelte.dev/), [Knockout](https://knockoutjs.com/), and [Solid](https://github.com/ryansolid/solid).

> **Note:** This may be different than the reactivity you might be familiar with streams like RxJS. They are related and there are similarities but they are not quite the same thing.

While this an article aimed at people brand new to fine-grained reactivity or reactivity in general, it is still an intermediate level topic that assumes knowledge of JavaScript and familiarity with some introductory Computer Science topics. I will try my best to explain things in detail but feel free to leave questions in the comments.

I will be posting code snippets and examples in Codesandbox. I will be using my library Solid to power these examples and syntax in this article will use its syntax. But it is more or less the same in all libraries. Follow the links to play with these examples in a fully interactive environment.

----------------

# The Players

Fine-grained reactivity is built from a network of primitives. By primitives, I am referring to simple constructs like `Promises` rather than JavaScript's primitive values like strings or numbers.

Each act as nodes in a graph. You can think of it as an idealized electric circuit. Any change applies to all nodes at the same time. The problem being solved is synchronization at a single point in time. This is a problem space we often work in when building user interfaces.

Let's get started by learning about the different types of primitives.

## Signals

Signals are the most primary part of a reactive system. They consist of a getter, setter, and a value. Although often referred to as Signals in academic papers, they also have been called Observables, Atoms, Subjects, or Refs.

```js
const [count, setCount] = createSignal(0);

// read a value
console.log(count()); // 0

// set a value
setCount(5);
console.log(count()); //5
```
Of course, that alone isn't very interesting. These are more or less just values that can store anything. The important detail is that both the `get` and `set` can run arbitrary code. This will be important to propagate updates.

Functions are the primary way to do this but you may have seen it done via object getters or proxies:
```js
// Vue
const count = ref(0)
// read a value
console.log(count.value); // 0

// set a value
count.value = 5;
```
Or hidden behind a compiler:
```js
// Svelte
let count = 0;
// read a value
console.log(count); // 0

// set a value
count = 5;
```

At their heart Signals are event emitters. But the key difference is the way subscriptions are managed.

## Reactions

Signals alone are not very interesting without their partner in crime, Reactions. Reactions, also called Effects, Autoruns, Watches, or Computeds, observe our Signals and re-run them every time their value updates.

These are wrapped function expressions that run initially, and whenever our signals update.

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

{% codesandbox reaction-5wyzu %}

This looks a bit like magic at first, but it is the reason for our Signals to need getters. Whenever the signal is executed the wrapping function detects it and automatically subscribes to it. I will explain more about this behavior as we continue.

The important thing is these Signals can carry any sort of data and the reactions can do anything with it. In the CodeSandbox examples I created a custom log function to append DOM elements to the page. We can coordinate any update with these.

Secondly, the updates happen synchronously. Before we can log the next instruction the Reaction has already run.

And that's it. We have all the pieces we need for fine-grained reactivity. The Signal and the Reaction. The observed and the observer. In fact, you create most behavior with just these two. However, there is one other core primitive we need to talk about.

## Derivations

More often than not we need to represent our data in different ways and use the same Signals in multiple Reactions. We can write this in our Reactions, or even extract a helper.

```js
console.log("1. Create Signals");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const fullName = () => {
  console.log("Creating/Updating fullName");
  return `${firstName()} ${lastName()}`
};

console.log("2. Create Reactions");
createEffect(() => console.log("My name is", fullName()));
createEffect(() => console.log("Your name is not", fullName()));

console.log("3. Set new firstName");
setFirstName("Jacob");
```
{% codesandbox no-derivation-qq54h %}

> **Note:** In this example `fullName` is a function. This is because in order for the Signals to be read underneath the Effect we need to defer executing it until the Effect is running. If it were simply a value there would be no opportunity to track or for the Effect to re-run.

But sometimes the computational cost of our derived value is expensive and we don't want to redo the work. For that reason, we have a 3rd basic primitive that acts similar to function memoization to store intermediate computations as their own signal. These are known as Derivations but are also called Memos, Computeds, Pure Computeds.

Compare what happens when we make `fullName` a Derivation.
```js
console.log("1. Create Signals");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");

console.log("2. Create Derivation");
const fullName = createMemo(() => {
  console.log("Creating/Updating fullName");
  return `${firstName()} ${lastName()}`
});

console.log("3. Create Reactions");
createEffect(() => console.log("My name is", fullName()));
createEffect(() => console.log("Your name is not", fullName()));

console.log("4. Set new firstName");
setFirstName("Jacob");
```
{% codesandbox derivation-j0nzm %}

This time `fullName` calculates its value immediately on creation and then does not re-run its expression when read by the Reactions. When we update its source Signal it does re-run again, but only once as that change propagates to the Reactions.

While calculating a full name is hardly an expensive computation we can see how Derivations can save us work by caching the value in an independently executed expression, that is trackable itself.

More so, as they are derived they are guaranteed to be in sync. At any point, we can determine their dependencies and evaluate whether they could be stale. Using Reactions to write to other Signals might seem equivalent but cannot bring that guarantee. Those Reactions are not an explicit dependency of the Signal (as Signals have no dependencies). We will look more at the concept of dependencies in the next section.

> **Note:** Some libraries lazy evaluate Derivations as they only need to be calculated upon read and it allows for aggressive disposal of Derivations that are not currently being read. There are tradeoffs between these approaches that go beyond the scope of this article.

----------------------------

# Reactive Lifecycle

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/0xyevvaovzfpswhqsacc.png)

Fine-Grained reactivity maintains the connections between many reactive nodes. At any given change parts of the graph re-evaluate and can create and remove connections.

> **Note:** Precompiled libraries like Svelte or Marko don't use the same runtime tracking technique and instead statically analyze dependencies. In so they have less control over when reactive expressions re-run so they may over-execute but there is less overhead for management of subscriptions.

Consider when a condition changes what data you use to derive a value:

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
{% codesandbox conditional-dependency-hbjg6 %}

The thing to notice is that when we change the `lastName` in step 3, we do not get a new log. This is because every time we re-rerun a reactive expression we rebuild its dependencies. Simply, at the time we change the `lastName` no one is listening to it.

The value does change, as we observe when we set `showFullName` back to true. However, nothing is notified. This is a safe interaction since in order for `lastName` to become tracked again `showFullName` must change and that is tracked.

Dependencies are the signals that a reactive expression reads to generate its value. In turn, these signals hold the subscription of many reactive expressions. When they update they notify their subscribers who depend on them.

We construct these subscriptions/dependencies on each execution. And release them each time a reactive expression is  re-run or when they are finally released. You can see that timing using an `onCleanup` helper:
```js
console.log("1. Create");
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);

const displayName = createMemo(() => {
  console.log("### executing displayName");
  onCleanup(() =>
    console.log("### releasing displayName dependencies")
  );
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
{% codesandbox conditional-dependency-cleanup-dr3re %}

----------------

# Synchronous Execution

Fine-grained reactive systems execute their changes synchronously and immediately. They aim to be *glitch-free* in that it is never possible to observe an inconsistent state. This leads to predictability since in any given change code only runs once.

Inconsistent state can lead to unintended behavior when we can't trust what we observe to make decisions and perform operations. 

The easiest way to demonstrate how this works is to apply 2 changes simultaneously that feed into a Derivation that runs a Reaction. We will use a `batch` helper to demonstrate. `batch` wraps the update in a transaction that only applies changes when it finishes executing the expression.

```js
console.log("1. Create");
const [a, setA] = createSignal(1);
const [b, setB] = createSignal(2);
const c = createMemo(() => {
  console.log("### read c");
  return b() * 2;
});

createEffect(() => {
  console.log("### run reaction");
  console.log("The sum is", a() + c());
});

console.log("2. Apply changes");
batch(() => {
  setA(2);
  setB(3);
});
```
{% codesandbox glitch-free-1e6dc %}

In this example, the code runs top-down through creation like you'd expect. However, the batched update reverses the run/read logs.

When we update the value even though A and B are applied at the same time, we need to start somewhere so we run A's dependencies first. So the effect runs first, but detecting that C is stale we immediately run it on read and everything executes once and evaluates correctly.

Sure you can probably think of an approach to solve this static case in order, but remember dependencies can change on any run. Fined-grained reactive libraries use a hybrid push/pull approach to maintain consistency. They are not purely "push" like events/streams, nor purely "pull" like generators.

----------------
# Conclusion

This article covered a lot. We introduced the core primitives and touched on the defining characteristics of fine-grained reactivity, including dependency resolution and synchronous execution.

If the topics don't seem completely clear yet, that's ok. Review the article and try messing with the examples. These were meant to demonstrate the ideas in the most minimal way. But this is really most of it. With a little practice, you too will be able to see how to model data in a granular way.

-----------------
Further Reading:
[The fundamental principles behind MobX](https://hackernoon.com/the-fundamental-principles-behind-mobx-7a725f71f3e8)
[SolidJS: Reactivity to Rendering](https://indepth.dev/posts/1289/solidjs-reactivity-to-rendering)                                                                                                         
