---
title: "The React Hooks Announcement In Retrospect: 2 Years Later"
description: "This post represents my perspective of events and could depict an imagined narrative. I'm reflecting..."
slug: "the-react-hooks-announcement-in-retrospect-2-years-later-18lm"
url: "https://dev.to/ryansolid/the-react-hooks-announcement-in-retrospect-2-years-later-18lm"
publishDate: "2020-11-30"
tags:
  - "react"
  - "vue"
  - "javascript"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fmve37at43zl83h1nbu4r.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fmve37at43zl83h1nbu4r.png"
---

> This post represents my perspective of events and could depict an imagined narrative. I'm reflecting as I believe the Hooks announcement to be the most important turning point in front-end development in the past 5 years. And that its impact is still being felt today and will continue for years to come. I'll leave you to be the judge.

On October 26th 2018, React announced a feature that would change the whole frontend ecosystem. If you somehow have not seen this talk you can [find it here](https://www.youtube.com/watch?v=dpw9EHDh2bM). 

To paint the picture. React had pretty much conquered the frontend world. After 2 years where people had floated around this idea of "JavaScript Fatigue" and depicting a fractured landscape of frameworks of the month, [React](https://reactjs.org/) had come up on top. Sure there was [Vue](https://vuejs.org/), and [Angular](https://angular.io/). But most of the random libraries had faded out to obscurity. React had hit a milestone rising above a declining jQuery.

React 16 had consolidated and streamlined the rough edges. The vision could be seen as React had successfully shown it could be used for Native development as easily as the web. And there seemed to be many promising features coming in the near future. Things were looking up.

# Initial Reaction

### Inside React

After introducing the concepts of Time Slicing and Concurrent mode earlier in the year, I'm not sure anyone was expecting anything else new. Sure we'd just gone through a cycle from Smart/Dumb components, render props, through to things like [recompose](https://github.com/acdlite/recompose), it felt like things were settling down. Maybe it wasn't perfect, but React seemed to have the solution for any problem.

The announcement caught most of us off guard. The solution was so elegant and straightforward. We get to use our function components and have the full power of state too by breaking class lifecycles into a number of event subscription methods or "Hooks". Not only did this clean up the code by letting us group state/action/effect by feature, it cleanly solved the problem of mixins and extensibility gone since `React.createClass`.

I mean the value was apparent before Dan had even finished talking. Those HOC stacks living above our component definitions were going to turn into simple almost declarative JS blocks. This was clean and really a game-changer. Somehow in one swoop, they had solved everything.

### Outside React

I listened to a [podcast](https://undefined.fm/radio/vue-vs-svelte-with-evan-you-and-rich-harris) recently where Rich Harris, creator of Svelte reflected on seeing Hooks for the first time. He thought looking at them that people wouldn't accept them and was generally surprised at the response.

Admittedly, I was equally surprised at how well the announcement went over. I could have sworn Dan Abramov had just told React developers the future of web dev was KnockoutJS/MobX. The API and composition patterns were so similar. I love KnockoutJS and had held React's philosophy ultimately what lead to its declining mindshare.

This seemed crazy and people were eating it up. I could see why. They appeared to solve every issue I had with React. Could I finally drop reactivity and learn to love React just as much?

I think the direction both made sense and confused other communities. One take was sure React was aligning more with Functional Programming. Others honestly were thinking, "Didn't we finally get classes in JavaScript, what do they think they are doing?" Quite a few libraries like Vue were following to this point trying to work out what ES Classes would look like in their frameworks and React had already changed the paradigm again.

# Honeymoon Period

### Inside React

In the first 3 months, there was like a renaissance. People were creating `use____` collection repos and everything that could be a Hook would soon be a Hook. For the most part for all our simple examples this was amazing. Form validation, store interfaces, animation helpers, time/date helpers, the list goes on and on. 

Then someone tried to make a counter. You know a simple counter you see everywhere and the number didn't update. It stayed 1 forever.

```jsx
import React, { useState, useEffect } from "react";
import { render } from "react/dom";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(timer));
  }, [])
 
  return <div>{count}</div>;
};

render(() => <App />, document.getElementById("app"));
```
And that was the first moment we realized things were not what they had seemed all along. Well, we knew the Hook Rules so why not add stale closures to the list? And well using the function form of `setCount` solves this anyway so let's just do that everywhere.

The other thought of course was, maybe we don't need Redux? Context API plus useReducer do a pretty good impression. Honestly, do we need these external state libraries anymore when React has all the tools built in? Even Redux itself in version 6 had moved to use React's new Context API by the book. 

### Outside React

I am pretty sure independently at within a day every author of a reactive UI library had an epiphany. "React is never going to be the best Hooks library". Something didn't quite seem to add up. The Hook rules were an indicator that there was a gap between the mental model and reality.

The Hooks API mostly was a pattern very familiar with reactive developers so they could almost immediately see this gap. One has to imagine that Rich Harris of Svelte's conflict over the syntax made him reflect on what all these libraries were missing. He landed on all we needed was adding reactivity to the language of JavaScript so all this bulk could be shed.

{% twitter 1057290365395451905 %}

Evan You from Vue probably was thinking, "Hey, we already have a library that does this. The solution is simple and we can do it without all these Hook Rules". Very quickly he announces Vue will be exposing their reactive system in Vue 3.

For myself, I was still in disbelief of the React announcement as [Solid](https://github.com/ryansolid/solid)'s API was almost already identical to Hooks before they were announced. But they had solved my getter/setter problem with tuples. It was the last piece I needed, and I realized Solid could be a library worth persuing as not only was it performant but it was the closest API surface to React, without the oddities and people seemed to like this. I wrote my first article in Nov 2018 and haven't stopped writing since.

# First Year Out

### Inside of React

Hooks have replaced almost everything. Honestly, the hype was justified. There are Hooks everywhere. People refactored their projects. The new React feels pretty great.

It turned out [Redux](https://redux.js.org/) wasn't in fact dead. The Context API has performance issues if using React's state for change management and it made a quick u-turn in Redux 7 to using its own subscription system.

If anything Reactive libraries like MobX started to see a decline but hey, Michel Westrate creator of MobX released an awesome library ([Immer](https://immerjs.github.io/immer/docs/introduction)) that makes using Redux even easier.

Other libraries started to show up too to better handle the data fetching layer and using Hooks made them seem that much easier to bring into our projects.

So yes, there are a few hiccups with hooks. We still occasionally forget dependencies but our linter finds them quick. And occasionally we have to force it to shut up when we want that empty dependency array.

To be fair we were never so good at understanding how React works until now. When we look back at our class components we realize that it was fret with perils we never even knew. Our code though should be more performant and better written than ever.

### Outside React

March 2019, Svelte 3 lands and it is a big one. Rich Harris tells us that we more or less have been doing way too much for way too long and all we really need to do is get rid of it. He has successfully taken reactivity as part of the language and put it on display in a way no one can deny. Small, performant, easy to use, all the boxes are checked.

Vue announces that it is dropping its proposal for Classes and replacing it with a function API. This later becomes the Composition API a foundational piece of Vue 3 which provides "Hook-like" Reactive primitives to the framework which have none of Hook Rules or closure issues. The community is torn but Evan guides the ship masterfully.

Many other libraries added Hooks in the same manner as React. [Preact](https://preactjs.com/) had made a big change with Preact X introducing Hooks and many of the new React 16 APIs. It did cause the library to put on a few pounds but by September 2019 we had an alternative to React with the same modern API. There were also several cool projects like [Augmentor](https://github.com/WebReflection/augmentor) that add hooks to any renderer/web component.

As for Solid I already had the primitives I wanted. Instead I spent that year implementing every React feature I could find so that I could bring it to feature parity in the browser. The last of which was experimental Suspense and Concurrent support that landed in fall 2019.

# Two Years Later

The first year of Hooks saw reactive libraries rise to the challenge of creating the best primitive-based frameworks. React had inadvertently opened the door to a place where reactive libraries long considered their strength. React still flourished in their own right, but this was a big place for libraries to gain mindshare.

The second year, saw something even more incredible for React. Homegrown global state libraries succeeded using React's own primitives like Recoil, Hookstate, etc... They could tap into React's own primitives in a more optimal way than ever before. But something unsettling still is lying below the surface.

Other libraries like Svelte had grown and Vue 3 was released. These libraries spent the 2nd year working on developer experience and it shows. 

But the one thing that has become most apparent is when asking the question "How to best do X in React?" the answer has become a lot more muddled. In the past, it was a discussion over which abstraction was in style. This has been replaced with discussions over how React internals work. And the confidence in answers is greatly reduced even before some smart alec chimes in "But that could completely change under Concurrent Mode".

This feeling is probably best captured in Jared Palmer's [React is Becoming a Black Box](https://jaredpalmer.com/blog/react-is-becoming-a-black-box)

# So What Happened?

For the longest time, it might be easy to attribute the wait for Suspense and early experimentation around Concurrent Mode as the clear catalyst for the state of things. But I attribute this all back to the Hooks announcement.

Hooks are both the best and worst thing to ever happen to React. I empathize because I've been there. You spend years reflecting on what could be made better, and realize that if you move all your pieces in a certain way you can cover all the gaps. It is even congruent with your vision as you've lived through it. However, people outside of you never saw what you saw in the first place, and now that they do they aren't sure they like what they see.

React was never going to be the best Hooks library. You don't need to be the best at something to do well. But what if you are subjectively the worst Hooks library? 

React Hooks are genius. Perhaps too genius for the average developer if they need to understand what is going on. React kept all the benefits of their VDOM, `view = fn(state)` powerhouse of a renderer, with all the flexibility of granular declarative data approaches, at the small cost the developer needing to be aware of when things update.

Reactive systems aren't any simpler really, but they have this write and forget aspect to their granular primitives. Svelte or Vue have this perceived simplicity from this even though mechanically in some ways things are more similar than you'd think. React's approach is arguably even purer than Vue in that it ties into the very nature of the VDOM instead of trying to duct tape a reactive system on top of it, but no Vue developer is thinking about it.

In addition, React's greatest appeal to many was its unopinionated approach to shared state management. React having introduced its own primitives naturally displaces those other libraries. It doesn't force them out, but API surface overlap and the knowledge using React internals is more beneficial doesn't help. Especially true of invasive reactive libraries like MobX.

# Where Do We Go from Here?

Now the React team hasn't been working on nothing the last couple of years. And I'm confident that all will be revealed soon enough. And React is still will continue to be the most used frontend library. But something has forever changed.

Some prominent React developers have jumped ship. It will be interesting to see if their new journeys will scale out as well. React was born out of a desire to simplify the render model after several years of, you guessed it, event-driven/reactive libraries. We should be cautious to throw away all we've learned. These things tend to swing like a pendulum over-correcting initially.

Others have turned to reduce state management as much as possible in React components. This included other forms of state management to drive React from the outside to avoid any need for whatever the React team was cooking. [XState](https://github.com/davidkpiano/xstate) a state machine library in particular has grown in popularity among a few others.

For better or for worse we need to acknowledge front-end libraries are more similar now than they have ever been, and that creates a completely different dynamic on the competition. This lends to being more cutthroat about things like performance and size all things being equal.

We're seeing things now like [JSX-Lite](https://github.com/BuilderIO/jsx-lite) which compiles a common JSX API to the framework of your choice. And I wonder will Metaframeworks of the future in a desire to keep their options open be built to support multiple frameworks? This is difficult precedence to set with the desire for new unique features. But maybe the risk-averse are ok with the lowest common denominator.

Maybe this would have happened eventually anyway. But React opened a door that day that can never be closed.

