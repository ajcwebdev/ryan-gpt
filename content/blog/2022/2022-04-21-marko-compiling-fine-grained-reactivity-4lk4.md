---
title: "Marko: Compiling Fine-Grained Reactivity"
description: "Reactivity has been all the buzz in frontend frameworks the last couple of years. It is being..."
slug: "marko-compiling-fine-grained-reactivity-4lk4"
url: "https://dev.to/ryansolid/marko-compiling-fine-grained-reactivity-4lk4"
publishDate: "2022-04-21"
tags:
  - "javascript"
  - "webdev"
  - "performance"
  - "marko"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feq1xkpq1c0jhpe8oc1m1.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feq1xkpq1c0jhpe8oc1m1.png"
---

Reactivity has been all the buzz in frontend frameworks the last couple of years. It is being celebrated both for its automatic handling of complex updates and for its performance. It's shown up as a critical part of many of JavaScript frameworks. And soon [Marko](https://www.markojs.com) will be joining the dark side.

![JS Framework Benchmark](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5z0tfgsn28fmcrs9ezu.png)

And let's face it the preliminary results look good. Marko 6 is entering a whole new performance class in the browser. As you can see in the JS Framework Benchmark Marko browser performance was long over due for a refresh. Starting behind modern React, we leap frogged over Svelte and Preact, surged past Lit and Vue and now sitting near the front of the pack.

So how did we achieve this?

---------

## Reactivity: Silver Bullet?

![Speeding Bullet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7n3hs8ku4psubl00ts0b.png)

It's not that simple. Reactive systems have existed even in this space for years. In fact, reactivity was seen as a bad thing for a while with the rise of the popularity of React. The thing that has made reactive programming interesting again are compilers.

Static analysis and compilation let us take what we know of your code's structure and optimize the creation paths as we already know what you are trying to create. We can see what parts of the template are static. We can infer from where dynamic sections are used how to run the most optimal code. Is this binding an attribute on a native element? Or is this inserting Component children?

Where libraries handle this differently is the granularity of their updates. Svelte for instance, manages these handlers at a component level. [Solid](https://www.solidjs.com) handles this more granularly at an expression level. [Svelte](https://svelte.dev) determines it's dependencies at compile time to remove the need for a runtime subscription system (for the most part, there are Stores). Solid uses purely runtime approach. The result is Solid is generally more performant but at the cost of core library size. 

With Marko we looked at both of these solutions and considered how we might be able to leverage a granular reactive approach but also take advantage of the ability of our powerful compiler. The result is a new type of reactive library. A compiled fine-grained approach.

-----------

## Compiling Fine-Grained

What I often love about this stuff is the solution is often simpler than you'd expect. Not that all the engineering that goes into creating the static analysis and compiler is, but the output sometimes just makes sense.

Consider a simple `<Sum>` component that receives some input from parent and writes out the equation. In Marko 6 we denote this input with the `<attrs>` tag.

```html
<attrs/{ a, b } />
<div>${a} + ${b} = ${a + b}</div>

<!-- use it like -->
<Sum a=10 b=5 />
```

What Marko does is split the component apart along the reactive state. It roughly compiles to:

```js
export const template = "<div><!> + <!> = <!></div>";

/* next(1), replace, over(2), replace, over(2), replace, out(1) */
export const walks ="D%c%c%l";

export function apply_a(scope, a) {
  if (scope.a !== a) {
    scope.a = a;
    scope.text0.data = a;
    applyWith_a_b(scope);
  }
}

export function apply_b(scope, b) {
  if (scope.b !== b) {
    scope.b = b;
    scope.text1.data = b;
    applyWith_a_b(scope);
  }
}

function applyWith_a_b({ text2, a, b }) {
  text2.data = a + b;
}
```

Our component has turned into 4 separately exported pieces. One for the HTML template, one for the encoded walks (which are series of `firstChild` && `nextSibling` to find relevant DOM nodes), and one for each component input. The last function is the intersection of those inputs.

The key to this output is that all closures are removed, and instead a `scope` object is used to store all the points of interest. In our case scope contains our 3 DOM TextNodes, and our values for `a` and `b` where our input are stored.

When either `applyA` or `applyB` is called it compares the passed in value with the current value in scope and if it has changed it updates the value in scope, updates the `data` property on its TextNode, and call `_applyWith_a_b` with the current data to update the final text node that is the intersection of the two.

When this component is used by a parent component the compiler is able to import the template and walks and insert them in the right location in the parents template and walks. This allows them to be cloned and traversed together as a single template. The compiler also imports and writes out the call the child's apply functions when it would change its own state. 

```html
<let/x=10 />
<let/y=5 />

<Sum a=x b=y />
<button onClick() { x++ }>Increment X</button>
```

You can think of a portion of the parents compiled output being roughly:

```js
import { apply_a } from "./Sum.marko"

export function click1(scope) {
  apply_x(scope, scope.x + 1); // x++;
}

export function apply_x(scope, x) {
  if (scope.x !== x) {
    apply_a(scope);
  }
}
```

When the user clicks the button, `x` is updated and the parent calls `applyA` from the child with the new value, triggering the downstream updates.

In essence Marko's compiler not only compiles away the reactivity, it compiles away the components themselves.

> *Note*: The explanation above describes what happens on client render. Server rendering and hydration avoid this work and will be described in more detail in the next article.

-----------

## Vanishing Components

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rt4oluabmpxkuj28jien.gif)

This is the result of fine-grained reactivity, as components no longer have any impact on the update cycle. But arguably it is even more pronounced in a compiled system that can undo the impact of writing components in the first place.

You can clone the largest templates all the way to nearest control flow ancestor. In fact all lifecycles live as far as the control flow. This system has all the characteristics of a fine-grained one including the run-once component mentality. Only things downstream on the dependency graph re-evaluate on any change. And this includes across files.

This is a huge benefit because it allows Marko to have composable primitives, like React Hooks, even when compiled without the need for a something like [Svelte Stores](https://svelte.dev/tutorial/writable-stores). A single mechanism for reactivity with a compiler to avoid most of the shortfalls classically associated with reactivity. No concern with destructuring. No potential to lose reactivity as Marko controls the language.

> Custom local storage tag that works like the standard `<let>` tag except stores value in local storage on change:

![Custom Local Storage Tag](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zow3yg57pkagmiz726cr.png)

-----------

## Weighing the Tradeoffs

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/43sk261izhxq8jjz0t4g.jpeg)

Well, you might have noticed Marko didn't quite match [Solid](https://www.solidjs.com) in the benchmark. There is still room to improve here as we've done minimal performance optimizing. There are differences from runtime tracking which make sense to avoid as they would add overhead to the compilation. Things like dynamic dependencies that change, and deeply nested reactivity. The latter is not impossible to solve but would take some doing.

But on the positive we are talking about an approach that is much smaller. Marko's runtime is not only small but so is its component compilation. Taking the table from [JavaScript Framework TodoMVC Size Comparison](https://dev.to/this-is-learning/javascript-framework-todomvc-size-comparison-504f) we grabbed some numbers from our latest prototype and it is looking good.

|         | Marko6 | Preact  | React   | Solid   | Svelte  | Vue     |
|---------|------|---------|---------|---------|---------|---------|
| component size (brotli)  | 1.29kb | 1.21kb  | 1.23kb  | 1.26kb  | 1.88kb  | 1.10kb  |
| vendor size (brotli)     | 2.79kb | 4.39kb  | 36.22kb | 3.86kb  | 1.85kb  | 16.89kb |

While Marko isn't the smallest it looks quite good over the spectrum. See how it scales with X TodoMVC components:

|        | 1       | 5       | 10      | 20      | 40      | 80       |
|--------|---------|---------|---------|---------|---------|----------|
| Svelte | **3.73kb**  | 11.25kb | 20.65kb | 39.45kb | 77.05kb | 152.25kb |
| Marko6 | 4.08kb  |  **9.24kb** | **15.69kb** | **28.59kb** | 54.39kb | 105.99kb | 
| Solid  | 5.12kb  | 10.16kb | 16.46kb | 29.06kb | 54.26kb | 104.66kb |
| Preact | 5.60kb  | 10.44kb | 16.49kb | **28.59kb** | **52.79kb** | **101.19kb** |
| Vue    | 17.99kb | 22.39kb | 27.89kb | 38.89kb | 60.89kb | 104.89kb |
| React  | 37.45kb | 42.37kb | 48.52kb | 60.82kb | 85.42kb | 134.62kb |

And the interesting thing is this whole article is about client rendering. That's not where Marko is the strongest. Let's face it if you are using Marko most of the code never reaches the browser anyway. This is really the worst case scenario for Marko as components only get smaller when we server render.

---------

## The Foundation for the Future

That's the whole thing. Taking this approach is huge step forward for Marko's client side performance, but that isn't the real motivation. In the previous article we looked at how the language of reactivity allows for incredible "Cut and Paste" development experience. And in this article we looked at what it can do for the client.

But the real story is how it plays into Server Rendering and Hydration. In the next part we will look how we leverage the reactive dependency graph to reduce code size even smaller with Sub-Template Partial Hydration. We will look at how we remove the overhead of Hydration execution through Resumability.

--------

You can find the source for the Marko 6 examples [here](https://gist.github.com/ryansolid/874f026ab4330ec3270c9386de9a62f5).

Check out [Marko on Github](https://github.com/marko-js/marko), [Follow us on Twitter](https://twitter.com/MarkoDevTeam), or [Join us on Discord](https://discord.com/invite/RFGxYGs) to keep apprised of the latest updates.


