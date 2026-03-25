---
title: "Why SolidJS: Do we need another JS UI Library?"
description: "It has come to my attention this article is the first some people are hearing of SolidJS. If you want..."
slug: "why-solidjs-do-we-need-another-js-ui-library-1mdc"
url: "https://dev.to/ryansolid/why-solidjs-do-we-need-another-js-ui-library-1mdc"
publishDate: "2020-06-01"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5ycqtldjmn0tcfk1siwc.png"
---

*It has come to my attention this article is the first some people are hearing of SolidJS. If you want to learn more about Solid, this is NOT where to start. I suggest looking at the [github](https://github.com/ryansolid/solid) or the links at the bottom of the article. This just details my personal journey and is highly biased.*

The number of times I've asked myself that over the years is staggering. Even after hitting 2k stars on Github last week and reaching over 50k downloads on NPM I still question it. A lot of times when people approach this topic very early on in working on their library but I started Solid years ago before I thought anyone would be interested in using it. I only started promoting it because it had already achieved the goals I had set out for it. So today I want to finally lay to rest why I continue to do what I've been doing for better part of half a decade. Understand that this is a personal journey so it is one full of personal bias. So feel free to disagree with my assessments to your hearts content.

## React

It often starts here. I love React. I didn't always though. I even detested it at times. In 2014, I didn't see the point. I was very happy with KnockoutJS. Early React rhetoric suggested things that I didn't believe but had no easy way to prove. Apparently the VDOM was significantly more performant than using the DOM. It didn't make sense. I watched over time KnockoutJS fade out of popularity. And was soon using React myself and it never quite sat right with me. I missed using function components and easy composition patterns based on primitives. I watched the first 2 years of React dev debate over the right store mechanism and I kept on thinking why is this even a thing? Change propagation and composition patterns are something I took for granted and now I had to use classes and figure out which flavor of Flux fit my mood.

So I started experimenting. And experimenting more. And it became clear to me especially after looking into MobX that it would be possible to make a renderer more performant than React based on all the patterns I longed for. If instead of parsing DOM nodes like Knockout, I could just read in a text file and parse the string to create my own HTML-like DSL. I played with this for about year and decided it wasn't bad. I still had this obstacle though that at this time all the performance benchmarks were based on re-rendering full pages from data snapshots. And while my experiment updated quickly these were a mess. I decided that Proxies were going to be key and changed my experiments to focus on that.

However, React was changing rapidly during this time. I don't know if it was a change of guard, but everything they were doing started to make sense. Batching updates, Function Components, HOCs for composition. Slowly by slowly React didn't seem so bad. IDE support and tooling made developing much nicer than my string templates. The only thing I missed was the code organization I had in my libraries. I really missed my data being declarative. By that I mean with Knockout I'd describe a thing and all its behavior in one code block and then I could encapsulate it. React HOCs weren't quite the same. The declarations and the behavior were still separate generally.

And then I stumbled across a library. Surplus it was called. It had managed to make the move to JSX and TypeScript yet still used fine-grained Reactivity. It was rough around the edges. It was easy to cross reactive scopes and props were a mixed bag of Signals and data you always needed to check what you were getting. But it had all the fundamentals. More so with the JSX it was able to just let the JS statements pass through. I had various JavaScript like DSLs in my String Templates, sort of invented my own language but I was hitting a place where I wanted to bring in JS parsers anyway. Artificially creating scopes for variables had sort of run its course and I had hit a performance wall. This library had none of it. It was arguably the most performant library out there.

So I decided that I'd just use this library and work with the creator instead of writing my own. But there was one major difference in our trajectories. I liked the state objects in React and I saw object proxies being the solution to doing diffing so that this approach could compete in any scenario that a VDOM could. However, Surplus' compiler optimizations wouldn't detect them so I had to artificially wrap reactive expressions in `{( )}` to artificially fool it. Over time Adam, Surplus' creator, had less and less time to spend on the project and I decided to take my own shot. Building something similar on Babel, but proxy friendly, and I wanted to do something about those rough edges. I was hoping to still eventually merge with Surplus so I wrote in a way to support any Fine Grained library making versions for Knockout and MobX as well. And the result was just as amazing. Knockout was no means performant largely the same as it was when I started. But Knockout JSX was outperforming even Inferno in benchmarks.

Still it was a novel thing. Maybe I could get my company to use this to replace the large amount of legacy Knockout code we had. At this point it had been about 3 years since I started doing my experiments. I had no illusions. This was great but it felt foreign. React had gotten everyone to feel like they were using plain objects. And in some way I would always need to acknowledge the reactivity. It still had awkwardness. I couldn't land on how I wanted to box primitives. Should I use a getter/setter, or function form like Knockout, or explicit get/set like MobX? These were all ugly. No one wanted derivations, or computations. The pattern was amazing but realistically I felt no one would really get over their preconceptions here. That was until October 2018.

Dan Abramov introducing React Hooks made me do a double take. 2 things were immediately clear. Hooks were identical to Fine-Grained on the API surface and people were eating this up. This was the piece that made all their other recent work all gel and I gazed into the sun for the beauty that was there. But there was a problem. I used them a bit and realized almost immediately they felt like a leaky abstraction. I kept on wanting them to work like Fine-Grained reactivity, since it was much more intuitive. Hooks did all the right things, embraced all the right patterns but as long as React worked the way it did it would never be the best Hook library.

## Vue

I never had much interest in Vue. Evan You is a different story. His understanding of tradeoffs and Framework... um, Metagaming for lack of a better word (sorry Magic the Gathering player here) is very respectable. However, Vue was always felt contrived for me. Like they tried so hard to make things easy they didn't care that they weren't elegant or simple. Still I knew they used a Reactive System so maybe there was some hope there. In fact for several years I had hope a library like this could evolve past the stigma's of the past around Reactivity. But I honestly had given up hope it was clear that Vue didn't want to rock the boat. But then I saw their reaction to React Hooks, deciding to expose their own reactive primitives and I got excited.

Until I saw how the community reaction to the Function API RFC. This firmly reminded me of why Vue was Vue. It did eventually land as the Composition API. However, in my (very subjective) opinion, it lacks the clear finesse of React or even Surplus. It was sort of like a modern Knockout which I think is exactly what what they are going for. Tooling and DX is improved, but the mental model hasn't moved forward as much. It has that easiness of use but I was concerned the approach was setting it up to repeat many of the patterns that caused reactive libraries to fall out of favour before.

I feel often, when first being introduced to this reactive approach focuses way too much on the getter/tracking part of the equation which is really the part you want reduce the mental bandwidth on, yet people tend to drop the ball on the mutation part. React had already impressed on me the value of uni-directional flow, immutable interfaces, and explicit updates. So unfortunately 1 step forward, 2 steps back. Vue has all the makings of the reactive titan we want, but they are only starting to embrace their true identity. Vue has great understanding of the whole ecosystem and where it sits relative to the complete landscape. But it clearly has different goals. I asked Evan why he still has a virtual dom at this point and he replied:

> Because Vue allows you to write manual render functions and mix them with template based components. Giving up vdom is giving up an important capability for advanced use cases where logic expression is more important than a bit of perf

It is so much more than that! Why couldn't there just be a single template syntax? Which brings us to...

## Svelte

Now I wasn't paying much attention to Svelte at all before Svelte 3. I wasn't really aware of it before 2017 so having already seen Surplus I just was thinking it was another library that had worse performance and syntax. But around Svelte 3's release I remember the first Rich Harris talk I saw and 5 mins in I was like "Wow this guy gets it and he knows exactly how to talk about it". Unfortunately I didn't feel the same way by the end. There were 4 main points being made that I felt were suspect, if not misleading. I had Deja Vu to when I first heard that rhetoric about React.

#### 1. No Runtime

Wait what? No runtime. How does that work? Well, obviously JavaScript executes at runtime, so was he saying he doesn't reuse any code? Well as it turns out the message here has changed. I looked and sure enough there was a runtime. Of course there was. But I still felt it was deceiving more or less. Svelte has remedied this messaging since but it was the first thing that made we wary.

#### 2. Virtual DOM is Pure Overhead

Everything on top of VanillaJS is pure overhead. I knew from my experience Reactive systems often bring an even heavier cost. If you think it's expensive creating a tree of JS Objects, how expensive do you think it is to do the same traversal and wire up a bunch of event listeners. This feels every bit as suspect as the old VDOM is faster than the DOM. There was a Q & A at the end of one of his talks where someone asks about Inferno, an incredibly performant VDOM library, and he sort of just side steps it. It's unfortunate.

#### 3. Benchmarks

This one probably hits closer to home to me than for others, since I spend so much time here. But the benchmarks that Rich chose weren't even remotely good ones. They had obvious flaws that even the authors acknowledge and Svelte's implementation actually cheats what it was testing. He might as well just made a page with an `h1` that said Svelte is the best for all the value those tests have. 

#### 4. JSX as a DSL

This one was the weirdest to me. JSX is a great DSL simply because it has a defined syntax that is somewhat standardized, is supported in tools like Babel, TypeScript, Code Highlighting, and Prettier. It basically does everything for you already and has patterns for extension all baked in. Now I understand why not everyone would use it, but the insistence that it wasn't an option for Svelte seemed odd. I realize now it was since there was a misunderstanding over what JSX is. Where I see it as a spec for syntax (https://facebook.github.io/jsx/), there are some who don't differentiate it from HyperScript runtime. In any case there seemed no interest to support these ideas.

Ultimately Svelte left me the most disillusioned with the status quo. Everything about it was coming from the right place, but it was getting sold like snake oil. My interactions with parts of the community indicated since people had bought it hook, line, and sinker. Very few were interested in furthering the platform in the places they just took for granted.

## So I just did it

It was clear no one was interested in what I was working towards. React had all the strong principals, and vision but the implementation incompatibility would likely never be bridged. Vue is a large library that has to cater to people of all backgrounds. I'd gone through the process of understanding reactivity a few times now and it didn't feel like it was the right place to start again. Svelte had painted this picturesque world for us all to live in but made it difficult to talk about the hard topics.

So that's what I did. I took on the hard topics. If there was a place I thought reactivity would be weak, I embraced it and I worked on it until I was happy with the results. Ultimately it made me appreciate React more and more. But it also helped me carve a niche for what would become SolidJS. I still see that space today, so I'm glad that I did. If you are interested in a library that has the discipline of React, transparent implementation that doesn't cut corners for easiness, and all the performance to back it up maybe SolidJS is the library for you.

Want to learn more about Solid? Check out these links:

Introducing the SolidJS UI Library:
https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck

Solid: The Best JavaScript UI Library you've Never Heard Of
https://levelup.gitconnected.com/solid-the-best-javascript-ui-library-youve-never-heard-of-297b22848ac1
