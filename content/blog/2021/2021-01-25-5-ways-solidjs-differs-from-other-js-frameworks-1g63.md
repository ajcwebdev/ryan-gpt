---
title: "5 Ways SolidJS Differs from Other JS Frameworks"
description: "Solid is a JSX templated UI Framework like React, that is reactive like Vue or Svelte. (Unfamiliar wi..."
slug: "5-ways-solidjs-differs-from-other-js-frameworks-1g63"
url: "https://dev.to/ryansolid/5-ways-solidjs-differs-from-other-js-frameworks-1g63"
publishDate: "2021-01-25"
tags:
  - "webdev"
  - "javascript"
  - "solidjs"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fkp40kca71rzpbvu6zuhg.jpg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fkp40kca71rzpbvu6zuhg.jpg"
---

[Solid](https://github.com/ryansolid/solid) is a JSX templated UI Framework like React, that is reactive like Vue or Svelte. (Unfamiliar with Solid [here is an introduction](https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck)). Yet it has a few unusual quirks that are important to its design but many developers find really unexpected at first. This is even true for those coming from other "reactive" UI frameworks.

But trust me when I say there is a method to the madness. Let's look at how Solid is different and why this is a good thing. 

# 1. Component's don't re-render

```jsx
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function A() {
  console.log("A");
  const [value, setValue] = createSignal(0);
  return <B
    value={value() + 1}
    onClick={() => setValue(value() + 1)}
  />;
}

function B(props) {
  console.log("B");
  return <C value={props.value - 1} onClick={props.onClick}/>;
}

function C(props) {
  console.log("C");
  return <button onClick={props.onClick}>{props.value}</button>;
}

render(() => <A />, document.getElementById("app"));
```

When we first render this code it logs "ABC", but can you guess what we log when we click the button?

Nothing. Absolutely nothing. Yet our counter still increments.

This is by far the most defining part of Solid. Components do not re-run, just the primitives and JSX expressions you use. This means no stale closures or Hook Rules for those of you coming from React.

Like Vue or MobX we don't want to prematurely reference our reactive variables or destructure. But Solid has truly granular updates, unlike React, Vue, or Svelte. This means that components actually more or less disappear after the fact.

What looks like some simple binding is actually producing reactive streams through your view code, enacting updates cross-component with pinpoint accuracy. Your views not only look declarative, but they also behave that way.

How do we achieve this? Simply lazy evaluating all dynamic props. Look at what Component B compiles to:

```js
function B(props) {
  console.log("B");
  return createComponent(C, {
    get value() {
      return props.value - 1;
    },

    get onClick() {
      return props.onClick;
    }

  });
}
```
It just forwards the expressions down to where they finally get used. [See the full example and compiled output here](https://playground.solidjs.com/#NobwRAlgJmBcYE4COAmADgdgwNgG4E8BWAYwAYkBrAFgAsAjQmmqgMzABowA7AQwFsApnDB8eELhzAAXfGiHwpAZwAekxQHsArgCdi8yHzTrtUgAQhTxbQJ5SBAZQgBzXgBtTAX1Mtt6vqYAdMA1XaABaACtFIIBuAK4IQ2MzC2suKAFtT29ffyCQ8KiAegB3ATpY+PiWTS5iKQh1LlMAQQAKAEpzeNNLJpCBADpXdSc2oJagjrjmvq5FM2BcHldNAXZTRQEpADUVtYBdUwBeS2tbB2c3NtJpntNrKR1mgB4AIVNl1YFjkC+1zqmADUpgAjF4mgBhULECi-QHHAB8m22e2+bX+AkBINBHS8RURMw8VS4NTqDSapjebTQvjQii6IHuxH66lcQxGYyCbymM16j2ephekM++x+IFp6npg0xpjCYIhXGhEFhv0l0qhMIo+MJ8WJXGqtXqjWakJpdIZ3VmLPmbI5o3GYEhvPuAu0rzomikUkpmpVcIlFsGfthHkRgalihlYo8LyKnu9TV1XH18TSGW0bQRyJeLVMBI2UHUxE0gi4UkGTm2AFF2WWpG98ABJKCOnhoNBTaZgDwHIA).

# 2. Proxies are readonly

This one can be a real mind-bender. Isn't reactivity about making things easy and it just works? It can be. But without careful control, it is easy to lose track of how changes propagate. This is part of the downside to reactivity when they describe it as "magic" with a negative context.

The core philosophy to reactivity is "what can be derived, should be derived". In so auto-tracking of dependencies which is often thought to be the problem, is not. The problem is in arbitrary assignments. We need to be explicit.

We've seen this before. Reducers like in Redux or events in state machines define set actions and operations to update our state. MobX has actions. The control from limiting these actions allows us to reason about what is happening.

More so nested reactivity like proxies is invasive. If you pass them as props or partials as props they too are reactive. They can be bound to different variables downstream to where an innocuous assignment is causing something on the opposite side of the app to update.

```js
function App() {
  // create a mutable state object
  const state = createMutable({
    users: [{
      firstName: "John",
      lastName: "Smith"
    }] 
  });
  return <A users={state.users} />
}

function A(props) {
  <B user={props.users[0]} />
}

function B(props) {
  createEffect(() => {
    const person = props.user; 
    // do some stuff calculations
    Object.assign(person, calculateScore(person))
  })
  return <div>{person}</div>
}
```
At this point with assigning `calculateScore` who even knows what new properties are present or if we updated an existing one, or if somewhere else is depending on certain fields to be there on the user.

We want to localize assignment or expose explicitly. The first is hard to enforce with the assignment operator unless you compile away reactivity like Svelte, read-only proxies are a fine second option. The key is read/write separation. A familiar pattern if you use React Hooks. Now we can pass around the ability to read without the ability to update.

```js
const [state, setState] = createState({
  users: [{
    firstName: "John",
    lastName: "Smith"
  }]
});

state.users[0].firstName = "Jake"; // nope

// you need be passed the setter
setState("users", 0, { firstName: "Jake" }); // yes
```

# 3. There is no `isSignal`/`isObservable`/`isRef`

Is this a fundamental part of the reactive system? Don't you need to know what you are dealing with? I'd rather you not.

The reason is simpler than you think. Every time you derive a value, make a reactive expression I don't want you to have to wrap it in a primitive. Solid doesn't wrap expressions you pass to child components in reactive primitives why should you?

```jsx
// with memo
const fullName = createMemo(() =>
  `${user.firstName} ${user.lastName}`
);
return <DisplayName name={fullName()} />

// without memo
const fullName2 = () => `${user.firstName} ${user.lastName}`;
return <DisplayName name={fullName()} />
```

These are almost identical except if `<DisplayName>` uses the name field multiple times the second will recreate the string whereas the first returns the same string until the name changes. But the overhead of the first is considerably more especially at creation time. Unless you are doing an expensive calculation it isn't worth it.

Most reactive systems encourage over-memoization. Reactive nodes store a reference of the value with each atom including derivations. This includes expressions you pass to child components. This is often really wasteful. You don't need to always wrap.

You might be wondering about how Components handle getting a signal or not, but we saw this before:
```jsx
<>
  <DisplayName name={fullName()} />
  <DisplayName name={state.fullName} />
  <DisplayName name={"Homer Simpson"} />
</>

// compiles to:
[createComponent(DisplayName, {
  get name() {
    return fullName();
  }

}), createComponent(DisplayName, {
  get name() {
    return state.fullName;
  }

}), createComponent(DisplayName, {
    name: "Homer Simpson"
})];
```
It's always `props.name` whether it is dynamic or not. Author your components based on your needs and let Solid handle the rest. [See full example here](https://playground.solidjs.com/#NobwRAlgJmBcYE4COAmADgdgwNgG4E8BWAYwAYkBrAFgAsAjQmmqgMzABowA7AQwFsApnDB8eELhzAAXfGiHwpAZwAekxQHsArgCdi8yHzTrtUgAQhTxbQJ5SBAZQgBzXgBt2l67YdTvpgL6mLNrqfKYAOmAartAAtABWipEA3OFcEIbGZhbWXFAC2gFBIWGR0XGJAPRQoSlpaSyaXMRSEOpcpgCCaGgAFACU5mmmlu2KZsCNrq4AcvwCALqmALyeNnaOLjyuvZEAQjwmpo6GGlyR-akdo1zjpsDj3kurVus+3r0WU7PzsBFgAFlDk4BMcMmgzpEApdhqZrFIdB0ADwAPlhIyRABEIIo0K4ePg5oJTLxBMsQN8iQIBoFKmjrhjsbj8YT5iT5uTHnYAHSU+a0+kjRk4vEEqnsskgSIACVCBTBp3akQFsKRdLS-nqXEazVa7VMTNFrMEvTQIQhgyl13hiNMSJoKBRIDN6gh3NJAn8aodKKumvOAdy+W0vQGKxRdu6aFMdI8NWImkEXCk3JBUgAoq4BEmpHt8ABJKC7MA8HoXS5gfwLIA).

# 4. Updates are synchronous

Ok, maybe this is expected. After all, you want your reactive library to be synchronous and glitch-free. Like if you update a value you expect it to reflect every in a consistent manner. You don't want the end-user interacting with out of sync information.

```jsx
function App() {
  let myEl;
  const [count, setCount] = createSignal(0);
  const doubleCount = createMemo(() => count() * 2);

  return (
    <button
      ref={myEl}
      onClick={() => {
        setCount(count() + 1);
        console.log(count(), doubleCount(), myEl.textContent);
      } 
    }>
      {doubleCount()}
    </button>
  );
}
```
It turns out different frameworks handle this differently. When you click they all log different things**.
> React: "0 0 0"
> Vue: "1 2 0"
> Svelte: "1 0 0"
> Solid: "1 2 2"

Which aligns with your expectations? Only 2 libraries are consistent here. Only React and Solid are showing you data that isn't out of sync. React doesn't read updated values until it commits its batch async. Solid has already updated the DOM by the next line. The other 2 choose between isolated reactive timing (Vue) and typical JS execution (Svelte). But they aren't glitch-free.

You might be thinking if there are multiple updates wouldn't Solid be inefficient. It is possible even though granular updates minimize it. We have a `batch` helper that records all updates and plays them back at the end. `setState` automatically batches its changes and changes are batched during effect execution.

```js
onClick={() => {
  batch(() => {
    setCount(count() + 1);
    console.log(count(), doubleCount(), myEl.textContent);
  });
} 
```
What does this log you ask?

"0 0 0". Inside batches Solid works similar to React to produce glitch-free consistency. [See it in action here](https://playground.solidjs.com/#NobwRAlgJmBcYBYEDsDsAPBBDAnMiArgAwBGAHCXgIwCeJCAxqmADRjJYC2ApnGJ1gjJWYAC40ADr3iiAzuhGyA9gQBODaZE4Slq0QAIQ+1d2RRuq-QF99AM1VLO+gOTKANtAC0AK1kB6AHduEmcAbgAdfG1dAyMGEyxRbgBlCABzDjcWfXjuRO4AWW5OJWySRIYAC2s7BydXJQ8oH1kwyMjbAmQGUQglZH0AQQkJAAoASkNI-X03bgNOGgBRNypsxZWAJgiBnP7ZA2AGFWRRbNl5gGET0QBdfQBeHISk1IysN1GicZ2Z4+QDvooCoSHNrl0DE9cvkiiVRhNHgA+PYQhEAKn0mx+7V2JlEagGo2mM30AB5EcSSWTKlREQAhCrVJboLgSOakvw0im7KmkiSIgAySiUAGt9Ik9gDGtxZko0rJ9CRuG4lAEOfzKSTSSQCKJRP19P1Lh4GCKHiAEQ9kRdRODTl9xlZEQAlbg2jk6vX9blUmakyqbREAOSUBgZoiq3CgHIDPt92t1+uQmqpJls5o2qysKZJRpNZotkytUx5vpmNrtolGx1RkwA1PoqNjS2X-u5uAA6FVpas3CbZYEEUHcSv9-SZqgdpLoW39JKnZtlmY2HNOnMzECD4ejx05j2J7172PhyPRzmBveepPr4zcdMgTObbMt3PIY0QU3my3IkA3mblCNKnhIsfz-EkKz7Gt7XrRtFyXKk22lLs5V7WsBxBME+3GdZljcTYp24GdrlOUxRDg+CrHI30VxfNcXw3LdMNrZ8y33L1kDjP0-DjZtn0iEwzAsYCkTJYYJH0bj0IYAgeFODs0nmFZilIukaAASSgIkwCwEZwjAcYfjAKxbiAA).

# 5. There is no unsubscribe

The last one is definitely unusual for people coming from other reactive libraries. Solid's reactive system while independent from the rendering does have some restrictions.

First, Solid is designed to automatically handle nested disposal of subscriptions on nested primitives it owns on re-evaluation. This way we can nest freely without memory leaks.

[Like this example](https://playground.solidjs.com/#NobwRAlgJmBcYBYEEcB2BGAZgVwBbOQCMAGAewGYBWAD2QDdqAvAawBcwAaMVAQwFsApnDB8eEVJzCsAngAch8VgGdqkpaWwAnAMYLIfWaU2sABCBPbNAnqwEBlCAHNeAGw4WrNgQFFMmAdqs7pbWtgBKpKRBJqSoAMIu1qjYsiYAviaYmqR8JgDk6i7QALQAVkp5ANwAOqi12rFKpsBK6O5KAqx26AC6JgC8HqH2Tq4AFMQAlDWoDahNJi0ATO2ddkt9gyFeDs48LhPTtfWe4ZGsY2OTAwB8ZrUmFo2kiQB0LqSOY9Vgdqw8xh+kweQy8vn8gUu136dxAIMec0KAnen2+YAA8thbJofu10FcjqhHgjTj4-AELldbvcicSEc83h8vj8AJKoVACHGcExKJYEmZ0x6xBJJFJQ6mIl7IplotkczQmEU8OpgSaEulpdXE4WJZViqkwp7zKUo5kYrGcxW6lVqgXpQma46zBnS1E-ACqsigXhM6yBMw6XT5S0J9RdprRnu9tl96H9tUD3TG6FDqCgpG02EEqFYr0cnW8iWzrAAQtIWVA0TxZLIga9xPKABIAFQAsgAZAYmH7tyLMEziEysXACI1IkwlgQfADuP0qYDSPSAA). Extracting the important parts:
```js
const [s1, setS1] = createSignal(0);
const [s2, setS2] = createSignal(0);

createEffect(() => {
  console.log("Outer", s1());
  createEffect(() => {
    console.log("Inner", s2());
    onCleanup(() => console.log("Inner Clean"));
  });
  onCleanup(() => console.log("Outer Clean"));
})
```
Updating `s1` actually cleans both Inner and Outer effects and reruns Outer and recreates Inner. This is the core of Solid does its rendering. Component cleanup is just its nested reactive context being cleaned.

Second, Solid is synchronous but it still schedules updates. We execute effects after the rest of the reactive computations have settled. In that way, we can both handle things like mount hooks without being tied to the DOM, and do things like Concurrent Rendering where we hold off applying side effects until all async updates are committed. In order queue and execute synchronously we need a wrapper.

We do this with `createRoot`. You may never need this as `render` calls it for you and complicated control flows handle this under the hood. But if you ever wanted to create a subscription mechanism outside of the reactive tree, just create another root. Here's what a `subscribe` helper for Solid would look like:

```js
function subscribe(fn, callback) {
  let dispose;
  createRoot((disposer) => {
    dispose = disposer;
    createEffect(() => callback(fn()));
  })
  return dispose;
}

// somewhere else
subscribe(() => state.data, (data) => console.log("Data updated"));
```

[See the working example here](https://playground.solidjs.com/#NobwRAlgJmBcYBYEEcB2BGAZgVwBbOQCMAGAewGYBWAD2QDdqAvAawBcwAaMVAQwFsApnDB8eEVJzCsAngAch8VgGdqkpaWwAnAMYLIfWaU2sABCBPbNAnqwEBlCAHNeAGw4WrNgQFFMmAdqs7pbWtgBKpKSmAL4mmJqkfCYA5Oou0AC0AFZKyQDcADqoRdqkqEqmwEro7koCrHboALomALweofZOrgAUxACUhcWoOKiBEGUmStiESpYQhAI9mKjBPC4uhDzazP1mRSYmLvUmUBBKhnVDhyFeEVE9PWcXpHWae60AfPuoh4fPlwEbVO50Bmmuf1utl8-kCjw+32060222Yy1QPX6WIh0X6BxMVlYWl+ANeAiG0SKRQA9NSpokBAB3XACKywEplCogl51YHTWbzRY9aruJ42HgIswWTmkY4AOhcpEcPQKYCg4tV7nVrAleRMuKGdQa6B66EGRVJdUxQ1pJkI2FMqCiRSNjR6ACZzcMoKRtNhBKhWHLHPVvMcA6wAELSACSUBVYB4slkqv6cvEqFZAAkACoAWQAMsDVQXIswTOITKwWdLyrKgYtFYzVXkwNEmkA).

# Conclusion

Solid might draw most of its attention from having such high performance, but a lot of consideration went into its design and identity. It might look familiar but it builds on the prior work that has come before it. At first, it does look a bit unusual but I hope you come to love it as much as I do.

Check out Solid on github: https://github.com/ryansolid/solid

** Cover image from [Elena11/Shutterstock](https://www.shutterstock.com/image-photo/green-man-painted-chalk-on-blackboard-1010195686)

** This analysis was performed while working on the [new version of MarkoJS](https://dev.to/ryansolid/fluurt-re-inventing-marko-3o1o).
