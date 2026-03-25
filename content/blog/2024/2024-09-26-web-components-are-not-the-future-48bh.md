---
title: "Web Components Are Not the Future"
description: "A few years ago I wrote an article suggesting that Web Components might not be the most beneficial..."
slug: "web-components-are-not-the-future-48bh"
url: "https://dev.to/ryansolid/web-components-are-not-the-future-48bh"
publishDate: "2024-09-26"
tags:
  - "webdev"
  - "javascript"
  - "webcomponents"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fplztptpee83p6bjvoy9h.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fplztptpee83p6bjvoy9h.png"
---

A few years ago I wrote an article suggesting that Web Components might not be the most beneficial direction for Web development to head.

{%link https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh %}

It was a soft-handed look at where they made sense and where things fall apart. It wasn't geared as a "us against them" argument and I hoped people would come to reasonable conclusions for themselves.

But over the past few years, I've only seen the situation worsen. Some may have never taken Web Components seriously, but I always have. I used them in production for 7 years. I wrote several polyfills in the early days for things like the Shadow DOM to use them before they hit prime time.

But my experience then and my experience since only points me to a single conclusion. Web Components possibly pose the biggest risk to the future of the web that I can see.

----------------------

## Visions of Utopia

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qz3rskz995e2q6hfy00y.png)

I admit that statement comes off a bit heavy-handed. But many reasons lie below the surface as to why I believe this. And it starts with understanding the proposed benefit of Web Components.

The vision of Web Components is that one day regardless of what tool you use to author them you can have components that feel as native as DOM elements that can be added to any website without consideration of how the website is authored. No concerns about specific build tools, specific runtime mechanisms, or the way one would ever interface with these components would ever change.

In a sense, a portable interoperable web. One that can mitigate the future need for migration. One that sets you up for any possible future. The perfect way to future-proof your sites and applications.

A compelling prospect is it not? This is exactly why the promise of Web Components is so alluring and so dangerous.

---------------------

## Competing Standards

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2oeepzbs5m0pzl9zn0jo.png)

I didn't need to pull up the old xkcd comic for you to know the challenge with standards. The more ambitious the standard the more likely it will have opposition or alternative approaches to accomplish it. This doesn't go away when something is standardized. It just suggests that there is one blessed way. You can take it or leave it.

If the sheer number of JavaScript frameworks is any indicator we are nowhere near reaching a consensus on how one should author components on the web. And even if we were a bit closer today we were nowhere near there a decade ago.

The introduction of higher-level primitives can have a positive effect. Suddenly something harder to do becomes easier. Which initially leads to more exploration. Web Components caused an increase in the number of JavaScript frameworks in the mid 2010s. It was an important inspiration for why I created SolidJS. A similar example would be the increase in Metaframeworks being built thanks to Vite. 

But it also can have a negative effect. If too many assumptions are made it becomes harder to explore alternative space because everything gravitates around the establishment. What is more established than a web standard that can never change?

I've struggled with this a ton outside of web standards. JSX according to the spec has no established semantics but try to convince the wide range of tooling out there they are assuming too much. I can only imagine the nightmare it would have been if JSX had been standardized in the browser. Forgetting how frameworks like Inferno, Solid, and Million, have done way more optimal things with their JSX transform, even React has changed their transform over time.

This is but one example of many. Things that help us, can effectively tie our hands. We must tread carefully when standardizing any higher-level mechanism because it assumes a lot. It is insufficient to say not everyone has to use it when its existence influences how we look at the platform in general.

---------------

## Opportunity Cost is Real

As a framework author, I understand this too well. I often say that in this field things are discovered as much as they are invented. What I mean by that is there is a certain truth/physics, if you will, to design decisions that when followed lead us all to similar places. It isn't that these tools copy each other blatantly. They fall into the grooves.

And for the same reason once a discovery is made that changes our outlook, the damage is done before we write a single line of code. If your job is to design a system you don't want redundant parts. You want clear purposeful boundaries. Instead of making a million variations on the same thing you try to re-use one thing. More so recognizing that to accomplish common tasks you need multiple things these pieces become intertwined.

For example, React developers definitely felt how long it was between the announcement of Suspense in 2017 and when we finally got a data-fetching story for RSCs in 2022. Why did this take 5 years? Because it wasn't a straight line. It took a while to understand how all the pieces fit. That in itself is reasonable. But more, React didn't want to release it piecewise until they knew they had an answer for the whole story. As they looked more and more, all these pieces were related and while they could be broken up they needed each other to paint the picture.

RSCs do not fit everyone's idea of how data fetching with Suspense should work in React. Maybe people could have benefited from a client data-fetching primitive. React chose to be ambitious here which is their right as a tool and decided what was best, but this could have played out a number of ways.

As a developer, I can always choose not to use React. And while I can choose not to use certain React features it is clear everything in React has shifted to their current mental model. I might even be wishing I could easily migrate off React.

But there is a big difference here. React is a library and it isn't a Standard. Those options aren't the same when it comes to Standards. If all I wanted was scoped styles and now I have to deal with the Shadow DOM because that was the abstraction that best fit with having a single way to do things due to Web Components, well that is what I'm stuck with.

When primitives overstep their desired usage, when they over abstract, you don't get to come back from that. You've already paid the cost. And as anyone who has done major architectural refactoring of a project can attest, the hardest part is adjusting boundaries. If things fall under the same logical grouping they are easier to update. It's when you need to break things apart that it gets truly challenging. You can always add another layer of abstraction to solve a problem but removing one can be difficult.

----------------

## The Cost of Abstraction

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kxxps4e9qll2jkqo25eb.jpeg)

So the fundamental problem with Web Components is that they are built on Custom Elements. Elements !== Components. More specifically, Elements are a subset of Components. One could argue that every Element could be a Component but not all Components are Elements.

So what? It means that every interface needs to go through the DOM. Some in well-defined ways that aren't a perfect fit, and some in newly defined ways that augment or change how one would deal with Elements to accommodate extended functionality.

To begin, DOM elements have attributes and properties. This is so that they can be represented as HTML. Attributes accept only strings while properties being a JS interface can handle any value. Native DOM elements have many rules around specific attributes/properties like how some are boolean (existence means they apply) while others are psuedo-boolean (needs an explicit "true"/"false"). Some properties reflect to attributes and others do not.

A goal of templating languages is to solve this in a uniform way. We can make special rules around known elements and attributes. But with custom elements we don't know. So this is why some templating libraries have interesting prefixes to indicate how things should be set. Even Solid's JSX we have `attr:`, `prop:` and `bool:` prefixes for this reason. Now every runtime location and compiler hook needs to be aware of this.

You might be thinking we need better templating as a Standard. But like JSX above you need to consider the implications of that decision. A few years ago most people would have probably agreed that the way something like LitHTML did template rendering was something was a good approach. Other solutions could output it. However, in the interim, we realized that reactive rendering, like what Solid does, outperforms it. It does so by changing the semantics of the templating. If we had moved ahead we would have a standard that would not be the best way to do templating.

It doesn't end there. DOM elements can be cloned. But Custom Elements have different behavior which means they should be imported instead. They have DOM-based lifecycles that can trigger synchronously or asynchronously depending on when they upgrade. This wreaks havoc on things like Reactivity tracking and Context APIs. However, these details are important to interface with native DOM behaviors and events. These are also all things that a JavaScript Component doesn't worry about.

There are other idiosyncrasies like the way event targeting works in the Shadow DOM. Some events don't "compose" ie don't bubble beyond Shadow DOM boundaries. Some events don't bubble consistently because they don't recognize a different target, like in "focusin", because the Shadow Host is always made the target no matter which child element gains focus. We could talk about these for days but I don't want to divert to much attention here. Some things are today's shortcomings and some are by design. But the commonality here is they all require specific consideration that otherwise wouldn't be necessary.

And of course this has a performance overhead:
{%link https://dev.to/this-is-learning/the-real-cost-of-ui-components-revisited-4d23 %}

But even if you consider this performance cost minimal, where does it leave us when going to the server for things like SSR? Yes, you can completely do SSR with Web Components. Hydration is completely achievable. But they are a DOM interface in a place with no DOM. You can make a minimal wrapper to handle most things but this is all extra overhead. All because we tried to make Components something they aren't.

On the server there is no such standard. We are back to having specific solutions. It is just another type of framework with no more guarantees than if I chose Vue or React for my next project. There is nothing wrong with that, but we need to recognize that fact.

-----------------------------

## The Real Cost of Web Components

The complete picture is one where the complexity of dealing with native elements increases to account for the new found flexibility of web components. It is something that as tools support them better, not only is the user of them paying the price of but all users of that tool. More code to ship and more code to execute to check these edge cases. It's a hidden tax that impacts everyone.

I've talked about where early standardization would have been catastrophic. But it also has the potential to stifle future innovation along certain paths because it assumes too much. Improvements to hydration, things like Resumability, Partial or Selective Hydration depend on event delegation to work. But if Shadow DOM messes with that then how could Web Components fit that model? SSR some might say was an oversight because we didn't think about that much in 2013, but this gap only continues to grow over time.

If anything with compilers and advancements in build tools, we are moving more in the direction away from components being anything more than a Developer Experience consideration. Something you have at authoring time that vanish from the final output. For optimal user experience we optimize away the components.

{% link https://dev.to/this-is-learning/components-are-pure-overhead-hpm %}

I'm not saying someone couldn't find some interesting solutions to these problems but they all imply taking on the hidden cost due to the foundational misalignment of having the wrong abstraction. This is what makes the dialog here so difficult. It isn't something you improve. It's just a mistake for a number of things. 

Now we can all say different solutions have different tradeoffs. And maybe something like Web Components could only possibly succeed with support of things like Standards bodies because of how pervasive it would need to be to work. It's an ideal we are working towards and just aren't quite there yet.

But is it actually ideal?

----------------

## Utopia Revisited

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/thjmbz7dig81tz9v9ce4.jpg)

We often hit a similar debate when talking about Micro-frontends or Microservices. It is beneficial for organizational purposes to align projects with your developers. It follows [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law).

The isolation or portability afforded by Web Components means that one could have multiple different components on the page from different sources. Now like the others prudence is in order. Similar to not wanting to write all your Microservices in different languages you might not want to author all your components in different frameworks.

But frontend is a much more restrictive space. The cost of each kilobyte of JS is not insignificant. It isn't only maintenance why you wouldn't want to mix and match but to reduce payload. And this is where the wheels start coming off.

If your goal is to future-proof then you need to be prepared to keep different versions of even the same library on the same page. This is no different for Lit as it is for React. You could choose to never update anything, but that is an option without Web Components too.  There are no additional guarantees here. To future-proof the only the choice to freeze things, maintain multiple versions, and load more JS on your page.

Realistically you will update your libraries in lockstep which is also the same with any library. And in those cases if you only have a single library on your page Web Components aren't doing anything for you but adding more overhead. Possibly getting in the way of features that the library provides now and in the future. You might as well use the library without the Web Components.

The second consideration is granularity. If you have a Microfrontend then that is a contained swappable piece. If in the future you decide it isn't the best way to handle things you swap it out. But once you adopt web components everywhere you will need to address each of these touchpoints. Web Components differ from MicroFrontends and Microservices because they can be used cross-sectionally. This is good for standardization, but I've never seen a company that uses jQuery ever completely be able to get rid of it.

The most compelling uses for Web Components are as a sort of Microfrontend container. In that case, you don't pay the scaling costs, the outside communication is minimal, and they are easy to swap in/out. The one-off scenario. In those cases though the friction is low enough that having Web Components isn't necessary. I'd take them for the ergonomics to put a Zendesk widget on my page, but is the abstraction worth the cost?

-------------------

## Conclusion

And that is what it comes down to. I could not argue that there are not ergonomic benefits to using Web Components in some scenarios. But the cost it imposes everywhere is steep. While I shouldn't be quick to disavow a technology for the types of poor patterns it enables one to do, it is difficult to stand behind it when it never fits in the ideal scenario. At best it is a nominal overhead.

Web Components are a compromise through and through. As we know sometimes we need compromises. But that is nothing to get excited about. And some compromises are better than others.

It was presented to me that in 10 years from now it's possible no one would be using Solid but a Web Component would still be there with the same interface as today. But I thought for a moment and responded I'd still build it with Solid because that would be the best choice for today. In 10 years even if I had to use a 10-year-old version of Solid it would be better than the Web Component version. 10 years doesn't erase that. And hopefully in 10 years I'd be using something better.

The decision is completely orthogonal. So in a sense there are nothing wrong with Web Components as they are only able to be what they are. It's the promise that they are something that they aren't which is so dangerous. The way their existence warps everything around them that puts the whole web at risk. It's a price everyone has to pay.
