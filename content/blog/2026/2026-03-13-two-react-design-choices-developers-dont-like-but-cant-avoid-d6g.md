---
title: "Two React Design Choices Developers Don’t Like—But Can’t Avoid"
description: "Developers have never been shy about disliking certain React APIs. They feel awkward, restrictive, or..."
slug: "two-react-design-choices-developers-dont-like-but-cant-avoid-d6g"
url: "https://dev.to/playfulprogramming/two-react-design-choices-developers-dont-like-but-cant-avoid-d6g"
publishDate: "2026-03-13"
tags:
  - "javascript"
  - "webdev"
  - "solidjs"
  - "react"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft2psvszp16uk132dqwg7.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft2psvszp16uk132dqwg7.png"
---

Developers have never been shy about disliking certain React APIs. They feel awkward, restrictive, or just plain counterintuitive. But the reality is that the two most complained‑about design choices in React weren’t arbitrary at all — they were early signs of deeper constraints that every UI model eventually runs into.

As many of you know, I’ve been working on [Solid 2.0](https://github.com/solidjs/solid/releases/tag/v2.0.0-beta.0) for the last couple of years. It’s been a journey. I’d already been using Signals for over a decade, and I thought I understood the entire design space. But the deeper I went, the more I found myself in unexpected territory.

And somewhere along the way, I realized something uncomfortable. React was right about those design decisions that people absolutely cannot stand. Not React’s model — I’m not here to defend that. But React did correctly identify two invariants that the rest of the ecosystem, including Solid 1.x, glossed over.

I'm talking about deferred state commits:
```js
const [state, setState] = useState(1);

// later
setState(2);
state === 1; //not committed yet
```

And dependency arrays on Effects:
```js
useEffect(() => console.log(state), [state]);
```

These are the two things Signals were supposed to “fix.” And in a sense, they did. But not in the way people think. Today, we’re going to look at why that isn’t the full story.

---
## Living in an Async World

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1h8enar7yowaym0rmg2y.png)

Everything we do on the web is built on asynchronicity. The entire platform is defined by a client and server separated by a network boundary. Streaming, data fetching, distributed updates, transactional mutations, optimistic UI — all of it branches from that simple truth.

Async pushes us out of our imperative comfort zone. Imperative code is about writes: “set this, then read it back.” Async is about reads: “is this value available, stale, or still in flight?” It’s the question every UI must answer before it renders anything: can I show this, or will I expose something inconsistent?

To most frameworks, async looks like ephemeral state flitting in and out of a synchronous declarative world. It feels unpredictable because we only see the moments where async intersects with our computation. But async isn’t chaos — it’s just time. And if we want to reason about it, we need the language to represent it directly.

It starts with how we represent state. If a value isn’t available yet, there is no placeholder it can safely substitute. Returning `null`, `undefined`, or a wrapper breaks determinism. Continuing anyway produces a result that never corresponds to any actual moment in time. The only way to keep consistent is to stop.

It also takes respecting the declarative model. What makes reactive systems (including React) compelling is their ability to represent UI as state at a given moment in time. All architectural clarity and execution guarantees stem from this. Determinism is the goal: the same inputs produce the same outputs, timing doesn’t alter the shape, and the UI is always consistent.

When async leaks into user space — through conditional branches or alternate value shapes — we force the user to manually manage consistency, and the declarative model collapses.

```js
// Derived computation forced to branch on async state
const firstInitial = user.loading ? "" : user.name[0];
```

UI affordances for async—loading indicators, skeletons, fallbacks—are not the problem. Those are presentation concerns. The problem is when async becomes part of the value flowing through the state graph. It forces every consumer to branch. UI can show whatever it wants, but the graph must only ever see real values.

---
## 1. Async Must Be Isolated from Commits

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r63wqqwgachl6ah3e7vy.png)

Unlike other reactive systems, React’s tight coupling of state and rendering forced it to confront this problem early. When every state change triggers a re-render, you can’t hide inconsistencies behind synchronous derivation. Signals avoid this because everything is always up to date by the time you read it—no re-renders, no orchestration, no wasted work.

But those characteristics only hide a fundamental truth. You cannot let async work interleave with synchronous commits. If a computation is still waiting on async, any writes it performs are speculative. You can’t show the user UI based on state you don’t have yet, because if they interact with it they expect to be interacting with what they see—not some intermediate state the framework is holding.

Consider:
```js
let count = 0;
let doubleCount = count * 2;
function increment() {
  count++;
  console.log(`${count} * 2 = ${doubleCount}`);
}

<button onClick={increment}>{count} * 2 = {doubleCount}</div>
```
I've used this example many times in the past but it captures the nature of the problem. See:

{% link https://dev.to/playfulprogramming/the-cost-of-consistency-in-ui-frameworks-4agi %}

In plain JavaScript, `count` and `doubleCount` drift apart. Signals fix this by updating `doubleCount` on read. But that still leaves the question. When does this update reach the DOM? If you flush immediately (like Solid 1.x), consecutive updates can be expensive. If you don't you don't that acknowledges that some amount of scheduling is inherent to the system.

React was the only system that didn’t update `count` immediately, and people hated it. But the motivation was sound. React wanted event handlers to see consistent state, and it had no way to update derived values until the component re-ran.

Now imagine the handler is:
```js
function onClick(event) {
  setBooks([]);
  // derived value
  if (booksLength) {
    books[booksLength - 1]
  }
}
```
If `books` updates but `booksLength` doesn’t, you’re reading out of bounds.

Signals keep state and derived state perfectly in sync, and that gives developers a strong sense of safety. You write the code once and it just works. But that confidence becomes a liability the moment a derived value turns async as there is no guarantee that it will keep in sync.

Return to `count` and `doubleCount`, but make `doubleCount` async. If you want the UI to stay consistent — to keep showing `1 * 2 = 2` until the async `doubleCount` resolves — then you must delay updating `count` as well. Otherwise you end up in a strange situation. The UI is still showing `1 * 2 = 2`, but the console is already logging `2 * 2 = 2` because the underlying data has moved on to `count = 2`.

Once you see that mismatch — the UI waiting for consistency while the data has already advanced — the conclusion becomes unavoidable. The synchronous world made you feel safe because everything updated together, but that safety was an illusion built on the assumption that all derived values were immediately available. The moment one of them becomes async, that assumption collapses. If you want the UI to remain consistent, you have to delay the commit. And once you delay the commit in the UI, you have to delay it in the data as well, or the two drift apart in ways that violate the very guarantees you relied on. Async doesn’t just add latency; it forces a different execution model.

---

## 2. Dependencies of Effects must be known at Computation Time

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zqxa2htcybtfvny3u6bp.png)

React’s re‑render model forced it to confront another truth long before anyone else. Derivations and side effects obey different rules.

When components re-run on every change, recalculating everything every time would be wasteful. So when Hooks were introduced, dependency arrays came with them — a crude but effective form of memoization.

Compared to Signals, where dependencies are discovered dynamically and only the necessary computations re-run, this looks limited. But it had an important consequence. React knew all the dependencies of the tree before running any rendering or side effects.

That detail becomes vital the moment async enters the picture. If rendering can be interrupted at any time — paused, replayed, or aborted — then no side effects can have run yet. A side effect that fires before all dependencies are known risks running with partial or speculative state. React’s architecture exposed this immediately. Rendering was not guaranteed to complete, so effects could not be tied to rendering.

Signals, with their surgical precision, avoided this problem for years. Change propagation is synchronous and isolated, so derivations and side effects appear to run in a single, predictable flow. But that predictability evaporates the moment async enters the graph.

Because if async is only discovered during side effects, it’s already too late. And if async is interruptible — say by throwing a promise and re-executing on resolution — execution becomes completely unpredictable.

Consider:

```js
const a = asyncSignal(fetchA());
const b = asyncSignal(fetchB());
const c = asyncSignal(fetchC());

effect(() => {
  console.log(a());
  console.log(b());
  console.log(c());
});
```

What does the effect log? How many times does it run? In a purely synchronous world, these questions barely matter — derivations are stable, and effects run once per commit. But with async, they become unanswerable. Each async source may resolve at a different time. Each resolution may re-trigger the effect. And if any of them suspends or retries, the entire execution order becomes nondeterministic.

And that’s just the initial load. If these async sources can update independently over time, the unpredictability compounds. You can’t reason about side effects if you can’t reason about when the effect runs or what values it sees.

The solution is simple and unavoidable. Effects must only run after all async sources they depend on have settled. And to do that, you must know all dependencies before executing any effect. You must seperate collecting the dependencies from executing the effect.

```js
const a = asyncSignal(fetchA());
const b = asyncSignal(fetchB());
const c = asyncSignal(fetchC());

effect(
  () => [a(), b(), c()] // capture deps
  ([a, b, c]) => { // do side effects
    console.log(a);
    console.log(b);
    console.log(c);
  }
);
```

---
## What This Means for Signal‑Based Solutions

At this point the architecture forces a choice. Either confront async head‑on or continue pretending synchronous guarantees hold in an async world. Async is real. It will appear somewhere in the graph. And once it does, the guarantees you relied on in the synchronous case no longer hold unless the system acknowledges it.

### Can a Compiler Solve This?

No. A compiler can’t fix a semantic problem by rearranging syntax. Early commits aren’t a mechanical limitation — they’re a correctness limitation. The moment async enters the graph, the system must know when a value is real and when it is speculative. No amount of static analysis can change that.

Could a compiler extract dependencies from a single effect function? In a shallow sense, yes — React’s compiler does exactly that. But compiler‑based extraction only sees what’s in scope. It can’t see the whole graph. If your sources are functions that call signals rather than signals themselves, the compiler has no way to know whether those functions are pure or whether they hide side effects.

This is exactly why Svelte 5 moved to Runes (Signals). Compiler‑time dependency capture hit a hard limit. It couldn’t track sources that weren’t syntactically visible.

```js
let count = 0;

function getDoubleCount() {
  return count * 2;
}

// never updates because count is not
// visible in this scope
$: doubled = getDoubleCount();
```

Once you hit these edges, you have to ask whether the added complexity, hidden rules, and incomplete coverage are worth it. Compiler inference can paper over the problem, but it can’t solve it. Async is a runtime phenomenon. The guarantees must be enforced at runtime.

### Does This Mean We’re Doomed to Mimic React?

Not at all. This isn’t copying React. It’s acknowledging the same fundamental truth React ran into first. Async forces commit isolation. Async forces effect splitting. Vue has had this split in its watchers(effects) for years. These aren’t React‑isms. They’re invariants of any system that wants to preserve consistency in the presence of async.

Adopting these invariants doesn’t erase the advantages of Signals. Updates remain surgically fine-grained. Components never re-render. Dependencies are deeply discoverable and dynamic.

Only effects require separation. Pure computations do not. This marries the expressive power of Signals with the correctness discipline of functional programming. It acknowledges reality instead of fighting it. And it gives async the same determinism and clarity that Signals already give to synchronous computation.

---
## Conclusion

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7c1k2m6h91vn1a25taz5.png)

Solid has always pushed the boundaries of frontend architecture, not by chasing novelty but by uncovering the underlying rules that make UI predictable, consistent, and fast. React encountered these rules first because its architecture forced it to. It didn’t choose these constraints — it ran into them. Calling them “design decisions” almost overstates the agency involved. They were discoveries.

Choosing to embrace those same invariants from a position of strength is something entirely different. We aren’t adopting these constraints because we’re boxed in — we’re adopting them because they are true. Async forces commit isolation. Async forces effect splitting. Async forces a consistent snapshot. These aren’t React‑isms; they’re the physics of UI.

Embracing this isn’t mimicry. It’s maturity. It’s choosing the inevitable path with eyes open, and building a system that treats async not as an edge case but as a first‑class part of the architecture. It’s the next step in making Solid not just fast, but fundamentally right.

Clarity doesn’t simplify the world, but it does make the direction unmistakable.
