---
showLink: "https://www.youtube.com/watch?v=8Ou6domKfU4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS - Context, Async, & Suspense"
description: ""
publishDate: "2021-09-18"
coverImage: "https://i.ytimg.com/vi/8Ou6domKfU4/sddefault.jpg?v=61453cfd"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, HH:MM:SS, which means the transcript is HH hours and MM minutes).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hello. We are live. Welcome to my stream. It's a fairly casual stream. So feel free to say hi if you're joining. I'm going to give
[00:00:15]  it a couple of minutes for other people to join here if they're so interested. But my intention is to talk a bit about SolidJS, look at a few
[00:00:26]  of the features design decisions behind Solid, and answer any questions people have during the way. Hey. While I'm waiting, I'll also talk about some topical stuff.
[00:00:44]  This week in JavaScript has actually been kind of interesting. As you guys know, I spend a decent amount of time on Twitter these days, which is funny because I didn
[00:00:53] 't even join Twitter till 2019 sometime. And hello. And the hot topics this week, there's two of them that just keep on circling, right? I've been
[00:01:07]  talking a lot about MPAs and multi-page apps and streaming and partial hydration performance and whatnot. And sure enough, I had a little chat with Evan Yu on
[00:01:21]  there. And the next day, basically, he created a MPA mode for Vue or Vpress specifically or Vpress, Vpress. I forget which one. It
[00:01:33] 's kind of interesting because it has basically a no JavaScript by default setup. And as I said, it's interesting because it's a hot topic of late. And it
[00:01:46] 's weird for me coming from, because as many of you know, I work on the Marco framework and we've been doing this sort of approach, same thing as Astro
[00:01:55]  and whatnot, since about 2014. Me personally, I just joined Marco a year ago, but it's something like this approach is only getting so much attention and to the
[00:02:06]  point where, as I said, like things that aren't even equivalent, like this MPA mode are, you know, getting, you know, it's enough to kind
[00:02:15]  of push people to actually go, Oh, I'm going to make this thing to kind of make a, how should I put it like a kind of shallow copy enough
[00:02:24]  just to be passable to, you know, check market, like my framework supports this feature kind of deal. So I don't know. It's kind of interesting development
[00:02:32] . So that's one. And the other one is this whole conversation. I know people have kind of seen that meme. Actually, I can pull, share my screen for
[00:02:43]  a second here and actually pull that up. I actually wrote about it in my article I released today, but this, this meme here has been just traveling around like crazy
[00:02:57]  on, on, on Twitter. And it's, it's a funny one because in one sense, like you got a point, you know what I mean? But on
[00:03:08]  the other hand, you're comparing, you know, two very different things, but it's definitely interesting. I think the only part that gets me here is the S
[00:03:17] velte example here should have a script tag. It's not actually accurately showing the boilerplate around it, right? Because you actually have to put the Svelte code
[00:03:27]  inside an HTML template in the same way you have to put the JSX inside, you know, JavaScript. So, you know, at minimum, there should be a script
[00:03:34]  tag here, which is probably something that doesn't matter to most people. But, you know, I'm just throwing, throwing that, throwing that out there. You
[00:03:44]  know, I make that differentiation in Marco. You don't need the script tag. So, you know, maybe that's a bit of, you know, humble brag kind
[00:03:52]  of scenario or not so humble, but like there are frameworks that allow you to write less code than Svelte. So I don't think it's about that,
[00:04:02]  I think the thing that irks people or the reason this gets such a reaction is because it's just a let. Like, let count means something different when you're
[00:04:10]  talking JavaScript, but when you're talking Svelte here, you know what I mean? Like, and I think, I think that's the question, right? But
[00:04:19]  as we know, like Rich Harris and crew did this deliberately, right? They felt that people wouldn't accept a non-JavaScript syntax. And to be fair,
[00:04:30]  it's a lot more work, you know, for their script section, they can use all the tooling you have on standard JavaScript. But it is interesting because, like
[00:04:39] , I kind of think a reactive language might be kind of cool. Like, we're already seeing reactivity or at least the language of reactivity in every single framework.
[00:04:46]  You know, they all have state, they all have some kind of derivation, and they all have some kind of side effect. So, you know, maybe. But
[00:04:56]  something about pretending it's just JavaScript, you know, but it's interesting. Someone actually created, Alexis, kind of someone to know from the Solid community, actually went
[00:05:16]  ahead and created a plugin for Solid Babel plugin where you can actually convert labels very much like Svelte into Solid code. And now you've still got the function
[00:05:29]  wrappers, but all the imports go away, and you can just use labels like Svelte with Solid and JSX. That might be some people's cup of tea
[00:05:37] . But I definitely like the reason I like React so much in this silly meme is the change that use state to use local state. Like, if you wanted to make
[00:05:51]  this something that went to local storage, from the consumer side, you just change the import, right? You just go, okay, instead of use state, I'm going
[00:06:00]  to use local state. And when you make it part of the language, like a label or keyword, you don't get that. So, it's a hot topic
[00:06:10] . I think today there isn't any good answers because all the people who are trying to, like, do this on the make it still JavaScript side are very much limited by
[00:06:21]  the syntax of JavaScript. Svelte on one side says use stuff like keywords, but then there's no composition unless you, like, completely change the system, get
[00:06:29]  to stores and whatnot. And then view, if you've seen the RFC for the setup scripts or whatnot, which is kind of interesting, they've actually put the
[00:06:41] , they've actually kept the composition by just using a kind of a decorator on the function instead of on, instead of, like, labeling the whole line or putting it
[00:06:56]  on the variable, they put it on the function. So, I think, I think that's really interesting, but then again, I don't have the example right
[00:07:03]  in front of me here. Maybe I should pull it up. But in order to export it between files, you end up with, like, a double dollar sign syntax.
[00:07:11]  So, it's like, it's not all clean. Like, there's considerations there to make this work. And I have to ask myself after some point, like,
[00:07:18]  are the parentheses you have when you call a function really that bad? I know this isn't a fair comparison to React, but I'm talking about solid, obviously.
[00:07:27]  Signals mean you have to call a function, but you're just adding two extra characters. Like, I don't know. I guess the setter is the other side
[00:07:35]  and people like that. But I mean, things like Vue already had the setter ability, but I guess you'd have to type dot value. So, it does
[00:07:42]  get verbose in its own way. So, I'm just chatting here to kill a little time before we get into the stuff, but kind of interesting conversations happening all
[00:07:54]  over social media right now about this. And I don't know. I kind of like that Svelte and React are different, right? I think each approach best
[00:08:08]  represents, like, their philosophy. And I think we should kind of stick to that to a degree because then you get to explore it. Because, like, as everyone knows
[00:08:16] , like, React is big about these kind of immutable, top-down patterns, you know. And the whole reason why hooks are the way they are, they didn
[00:08:24] 't want to make them reactive. They wanted to keep that, like, render everything mentality. When you start, even though you can always add an abstraction to blur the
[00:08:33]  lines, everyone can get their own developer experience, right? Vue is great at that. That's, like, their big selling point these days, I feel like.
[00:08:39]  Like, if you use Vue, you can make it, you can use Vue that looks like Svelte. You can use Vue that looks like React.
[00:08:44]  Vue does it all. But, like, these things which are mostly superficial, like, on the surface in terms of, like, syntax choices and whatnot, you know
[00:08:57] , as Vue was kind of pointing out, like, literally we can compile to whatever. Vue also reflect underlying philosophies and design approaches. And I feel like
[00:09:07]  when React is designing for that immutable system and you try and make it look like Svelte, let's say, you're sort of, even though it'll work
[00:09:19] , you're opening up the potential for a leaky abstraction in the sense that people developing work in React are intentionally creating their language that way. Right? Like, they
[00:09:32] 're basically, this is a purposeful thought-out thing because it reflects their beliefs and their philosophy. Right? I feel like the way it's done in React is
[00:09:46]  expressive enough to be considered better DX. Yeah. I mean, that's sort of, I mean, I imagine a few of you guys feel the same because otherwise you probably
[00:09:54]  would be using Svelte instead of checking out Solid. But, like, exactly, because when you have that expressiveness, that ability to control things at that level
[00:10:08] , you can do what you want. A similar thread came up where someone was like, well, let's just use the compiler on the hooks to get rid of the stupid
[00:10:16]  hook rules biting you accidentally. Like, why are we relying on ESLint? And I feel it's because the React core team felt that they weren't comfortable just
[00:10:26]  going all in. And that's something I can relate to. It's funny because I work on a number of frameworks. Not a number. I guess just two.
[00:10:35]  I work on Marko and Solid, but it is definitely something that I'm conscious of, right? Because, like, if you go from, say, Solid to S
[00:10:43] velte, there's a couple little tricks you can do, which are hacks, which I'm aware of because I understand the way Svelte works. But Untr
[00:10:51] ack is a perfect example. And we talked about this last time in our session on Reactivity, if you guys, any of you were able to check it out. I
[00:10:58]  strongly believe that Untrack is important, the ability to annotate something that you don't want tracked. And in the same way where components aren't tracked is because
[00:11:07] , and I don't just automatically put stuff, you know, make destructuring work by, like, undestructuring it. It's because you intentionally don't
[00:11:16]  want things tracked sometimes. This is just a level of control. And I feel like if anyone's used React and had, you know, to fight against those ESLint
[00:11:26]  rules, then just accepting them on face level as a compiler is going to be a problem for you. Like, you're definitely going to have this kind of issue here
[00:11:37]  because more or less, like, as soon as there's any exception to the rule, something that's absolute isn't going to pass. I mean, maybe you can annot
[00:11:49] ate it. Maybe it's a better default. I mean, in Solid, I do kind of feel that way, right? You know, subscribe to everything by default
[00:11:57]  and then untrack the things that aren't might be better than only explicitly tracking things there are. But, I mean, I could go both ways on this, you
[00:12:05]  know, it's trade-off between E's. And I actually have gone both ways on this historically. So, you know, I could definitely see that either way
[00:12:15] . But the one truth is I personally don't feel comfortable with a language that doesn't have untrack, so to speak, or at least explicit. Like, view
[00:12:25]  doesn't like exposing untrack, but they have a sort of, like, watch effect or something. You can basically, there's a form where you can go only
[00:12:32]  listen to these variables. Svelte does let you do it. It's a little secret. If you put something inside a function, Svelte's compiler can
[00:12:41]  only detect what's directly in the context. So, if you hoist something out, suddenly it's not tracked. So, there are ways to do untrack and
[00:12:49]  Svelte kind of, you know, to do it. So, I mean, it's fine, too. But if React was to basically auto-detect the
[00:12:58]  dependencies away Svelte does, you would need a way to do this. I mean, maybe you need to introduce a new explicit syntax, like, for mount.
[00:13:08]  Because the most common case is if you have something that you only want to run a mount and on cleanup, you're going to pass an empty array to React. And ES
[00:13:16] Lint will complain at you if you do that because it'll see variables that could be stateful that you could be listening to. And they're like, hey, you
[00:13:27]  passed an empty array. You should have these things in your array. If the compiler did it automatically, well, you'd be tracking it. And in a system like
[00:13:34]  React, where the whole component re-renders, and you guys know, like, that whole cycle, this could be a really bad de-optimization to have
[00:13:43]  as a default. The difference is reactive libraries, sure, they are permissive by general. Like, they always track by default. But the difference is they're
[00:13:55]  also built to memoize everything by default. So, in that case, you know, even if something slips by, you'll get caught by the memo. The value
[00:14:05]  hadn't changed or something, right? But there's a trade-off there. You know, it's not cut and dry because if you memoize everything, well,
[00:14:14]  guess what? More memory usage. And when you initially try and set all this stuff up, it's going to be more expensive. So, your rendering slows down.
[00:14:23]  So, a lot of considerations there. Anyways, I've probably talked enough about some topical topics. I'm not sure if this is interesting to anyone. But let's
[00:14:33]  get started on the content that I want to go on this stream, which is I want to talk about context. And I wanted to get into async stuff in solid
[00:14:43] . And the reason I'm going to start with context here is because, essentially, that is how solid is doing everything. And I'm going to use the tutorials here.
[00:14:54]  Some of you guys probably played with this already. But it just saves me from typing everything in. But I got the playground in case I want to kind of pull out an
[00:15:01]  example or show it. And I might actually end up there eventually anyways. But context API has also caused a decent amount of friction with people because they're like, oh
[00:15:13] , man, what if they use this context API with solid anyways? So, there's really two things that I want to cover here. I want to cover, like,
[00:15:21]  why context? And I want to cover how context, so to speak. So, let's kind of start with the first one, which I actually haven't decided which
[00:15:36]  one I want to start with. Let's go with how context first because I think why is a little bit more interesting. First of all, I guess what context, actually
[00:15:47] , if we really want to get to the start. So, I'm just going to solve this and show it. If you guys have used React before or whatnot,
[00:15:56]  this is actually incredibly familiar. The context API, I broke it up into a separate file here. But you have a provider, passes a value in, and you use that
[00:16:08]  to basically wrap the context. And what's great about this is it's hierarchical, right? If you nested them, it will only see the closest parent that has
[00:16:18]  the context, right? So, in our case, we only have one, which is fine. But we basically go through this dance where we define a context object.
[00:16:30]  And this one can actually take the default. That is, if there's no provider. This is important to note because sometimes this is really powerful for stuff that you basically expect
[00:16:42]  to always be global. And you know what the configuration is, and maybe you don't want the end user to have to provide a provider. This is a pretty powerful
[00:16:54]  tool. And actually, I do use this sort of approach to do some global stuff with Suspense. But in general, you just need this one kind of definition of
[00:17:04]  a context. Other than that default value fallback, it's not really responsible for the value. This is more of like a way of generating a unique symbol so that
[00:17:14]  throughout our tree, we know it's of the same type. It's like a type generator in a sense. But once we have our context, then we can use it
[00:17:24]  to basically get our provider, which almost always looks the same. It's a matter of passing a value to it and the children, and then ability to use that context
[00:17:34] . And it's very common to basically wrap both parts, right? Wrap the provider so that the end user doesn't have to deal with the dot provider. And you can
[00:17:44]  maybe put specific logic in here. Sometimes you do leave, you know, more settings to the end user. In this case, I just take a default count, but
[00:17:54] , you know, sometimes maybe they pass like much more data into this. But this wrapper pattern encapsulates it pretty nicely. Obviously, this is a bit of boilerplate,
[00:18:07]  but once you do that, and if you wrap this, they don't even have to import the context. You basically just end up with this pair, provider and consumer,
[00:18:15]  more or less. And then from there, you can just use this consumer anywhere. Let's see. I've got a couple of comments already come in here. What
[00:18:25]  do we got here? Don't people just bump into the need for context when they're passing a bunch of junk down the tree manually? That is the most natural place
[00:18:41]  it happens because I guess the best way I can put it is if you start building something really simple and you, you know, it's not just about prop drilling.
[00:19:01]  I mean, that's where the kind of more localized version and the more powerful use of context. But usually what ends up happening is you start building something and it's a
[00:19:09]  component. Then you start realizing, like, oh, this is way more than I thought. So you start breaking it up into more components and you start, you know,
[00:19:16]  needing to pass these props around. At a certain point when you build something, and this is true of even, like, bigger apps, it's not just, like
[00:19:27] , stuff that's related necessarily. You start realizing that in order to, like, if it's suddenly a new part of your app that's not in that direct tree needs
[00:19:37]  to use part of your state or share state, like, maybe you need it now in the sidebar. Like, you basically had this data that you loaded about the
[00:19:46]  main user and you had it in your main window, your app, and then you're like, oh, you know, later new requirement, new building, you need it
[00:19:52]  in the sidebar. Suddenly, you don't have very many options to share that data. The most, the way we tend to do it is we just hoist
[00:20:00]  it up. What I mean by that is we actually lift it up to a shared parent. And while that, you know, seems okay at first, maybe, but depending
[00:20:12]  on how big the app is, and you've gone that far, that shared parent could be so many levels removed that, you know, how many components can you pass it
[00:20:22]  through? So yes, it is about the need to, you know, avoid prop drilling and passing state through components that don't need it. But sometimes it actually cannot
[00:20:31]  naturally happens the opposite way. Like you had something that you only need locally and then, you know, and even if you pass through a couple of components or like whatever,
[00:20:39]  but then suddenly you need it somewhere else. And suddenly it goes all the way up the tree and then eventually you're like, oh, I actually have to wrap my
[00:20:47]  whole, like I needed my whole app. And at that point, you know, putting the state, you know, that high up the tree might be really awkward to pass
[00:20:56]  it around. So I feel like that's the origin of it. But all that being said, and I'll explain how this works, actually, maybe let's just
[00:21:05]  continue and I'll explain a bit more how this works in solid to kind of get an idea of how, how the way we approach it might be considered a little bit different
[00:21:15]  than than react and, you know, has, you know, different considerations. So in this case, this is like such a naive approach because all I did here in
[00:21:28]  this simple demo is I have main that has a nested and notice how we did not pass the count stuff into nested or into app. So basically context lives out here
[00:21:40]  outside of app. App basically doesn't use it, doesn't care. And then nested uses it. And this way we cleanly get that our counter into,
[00:21:52]  you know, it counts up, it counts down into nested into our counter component without app having to worry about it. That that that's sort of the what that I
[00:22:01]  was talking about. What's interesting from a mechanical side is how do you implement this? And I'm going to talk to it a bit more than actually showing the code,
[00:22:13]  but. When I approached this problem, I had a couple of options. Those options were like, I'm not, I came from kind of an interesting background. I
[00:22:26]  don't know if everyone realizes I actually spent an incredible amount of time on web components, which is probably surprising to people considering how many. Well, I would say like
[00:22:36]  how maybe anti web components of my sentiment sound, but I spent good seven years using web components in production. And when I approached context, remember we have no virtual DOM
[00:22:50]  and solid. I was like, well, with web components, we would just use the DOM tree. Because like you have to remember one of the key differences with solid and
[00:23:00]  you might have seen this before with our fine grain reactivity is like. If something updates and I'm just using context here in this example, like this count updates.
[00:23:10]  Only. And I've shown this off a few times going to compile the output here, but where is our counter nested component? Like only this, like this insert rer
[00:23:20] uns, this is a, this is basically a creative fact. And it's only this count thing that sets the text in here that runs again. So like if,
[00:23:29]  if at this, if, if it's some arbitrarily nested level, something reruns, I don't have access to a, like a full virtual tree or something
[00:23:40] . Like how do I possibly walk up to figure out what the context is? This is, this is something that I was really struggling with when I was first approaching context and
[00:23:49]  solid. So it's like with reactive system, any piece can just execute whenever it feels like completely independent of any kind of like top down renderer. So the first
[00:24:00]  thought was like, well, if I have the DOM elements, I have the whole DOM tree. Then by the time I get down to this component somewhere, I could like
[00:24:08]  maybe know a DOM element and then kind of walk up the tree until I can find a DOM element that I wrote the context to. And maybe that's where I could
[00:24:19]  find, I can find like the nearest DOM element in the tree that holds some kind of context and just make a mechanism that writes it at a DOM. This seemed like it
[00:24:28] 'd be fine. And that's essentially what, what web components can do, right? They, they, they can like send up a DOM event or something. And
[00:24:36]  then basically list an, an element can basically listen for it and go, yeah, yeah, I know how to serve, serve, serve this essentially use the DOM tree.
[00:24:45]  The problem with that though, for us was initial render. If, if, if you look at solid in terms of it's actually this nested components probably known,
[00:24:56]  this one's not a great example. Um, let's actually just go to the playground. Let's look at our simple button here. If you look at what RG
[00:25:06] XX is executing here, when we render, we clone a node. We, we add some stuff, click, you know, hook up this account, uh,
[00:25:15]  account, and then we return the element at the point that we return the element, like that we're rendering up to this point. This DOM element is not connected to
[00:25:26]  the DOM. And that's actually really awkward here because let's say I needed to use the context here. Like in our exact last example, when I get to the counter
[00:25:37]  and I'm initializing it, the DOM doesn't even exist yet for it. And even though the parent DOM might exist, our component isn't really aware of it.
[00:25:45]  We haven't attached ourselves to it. There's, there's no propagation. There's no trees. And that's a whole difference with, with, uh, web components
[00:25:52] . You end up doing the most of your work in what's called the create, uh, the connected callback. Um, and the reason for that is web components
[00:25:59]  have, uh, I'd say three major life cycles. They have the constructor, um, which is create, and then they have connected and disconnected. And the reason that
[00:26:07]  a lot of work happens on the connected, uh, one is because there's no destroy. I mean, that that's changing now with, with weak, with, um
[00:26:16] , weak refs or whatnot and the finalization registry. But I mean, I'm talking years ago, you essentially needed to use connected because disconnected would have been the
[00:26:25]  opposite. The way you do the cleanup connected, create this kind of thing. So it's fine. You actually have the DOM at that point, but for us, you
[00:26:31]  know, we don't have the DOM and we could do the DOM, but the DOM's kind of inefficient. I'd rather virtually create everything, figure out what I
[00:26:39] 'm doing first before having to deal with a bunch of DOM elements. You know, making a component to a DOM element seems a very expensive price to pay, you know,
[00:26:47]  when it doesn't need to be one. It doesn't need to be one, right? Like something where we have more elements we have to worry about. We have
[00:26:54]  to like, it just was not where I wanted to go here. Um, let's see. I got a few more questions coming in. Yeah. Uh, let's
[00:27:03] , let's see here. Rather than using contact, should you use premise directly in a module and more with them whenever you're needed? Yes and no. And I
[00:27:12] 'll go back to that in a moment when I talk about the why. Um, so, uh, let me get back to that in a minute, but what, what
[00:27:27] , what I'm, what I'm getting at here is using the DOM is, is a no go. Cause we basically like if we, if we put a child
[00:27:37]  component in here too, like, uh, let's, let's go back to our other example here and where we create the nested component, which is in our app
[00:27:48]  here. Um, sorry, the codes a little bit, but what I want to show is, um, even, even in our app component, it's so small.
[00:27:59]  I didn't even notice it. Uh, it's funny cause the app here looks like this, but it ends up just becoming an array that creates the H1 and
[00:28:07]  creates a component. Even the, if the way JSX executes and it's true, the way even solid execution generally is it actually executes sort of inside out.
[00:28:20]  Like you create the children before the parents are done. So like in this example, it's because like, if you have a function that calls a function that calls a function
[00:28:27]  and you're passing, you, you kind of compress it. Right. Um, you, you, you can't call the parent function until you've called the children
[00:28:34]  that you're going to pass to the parent. Right. And in that sense, because the children are getting created before the parent, this even more exemplifies my, my
[00:28:43] , my point here that there's no way to use the Dom here and you don't, you wouldn't want to. So no virtual Dom and no Dom context was
[00:28:51]  actually a really, it was like the first challenge that I had to solve with solid in terms of like figuring out what I was going to do here. Um, and
[00:29:01]  I guess without the, why you're like, why am I worrying so much about context? I'll get, I will get there. Um, but this is, this
[00:29:10]  is the new ground, no other fine grained solution that I'd, I'd come across. it actually had a dependency detection system like this without a virtual loan or
[00:29:19]  without like web components, the real Dom. So luckily I had a solution and as I said, I'm not going to show the code for this right away, but
[00:29:35]  we in solid, um, for memory reasons, and this is, I covered in the last video. I'm not going to get too deep. We have this concept of
[00:29:43]  something called create root, and it's basically just an inert create effect. And the reason for it is everything in solid needs to be in a, in a reactive context
[00:29:54] , not the signals. They don't really matter, but any kind of computation because they register with each other. And that way that we can handle disposal. Like if you
[00:30:03]  nest them, you would have to manually handle it. And this is something I used to do with knockouts. Sometimes a mob acts back in the day, but with solid
[00:30:10]  disposal happens automatically. We actually register any child effect with its parent effect so that when the parent reruns, we can free up the child. And, and then continue
[00:30:21]  on our way. And the reason for that is if a parent ever reruns, you're going to be recreating it anyways. You do rerun that whole function.
[00:30:27]  There's no, there's no ways around it. So if you didn't, you would just keep on adding the subscribers on and on and on and on. Um,
[00:30:35]  especially if the signal lives outside. Um, like, as I mentioned, this counter creative effect. If for some strange, if for some reason, um, we had
[00:30:49] , well, let's just do it. Let's, let's just do it. Let's, let's, let's, let's cover this in a, with
[00:30:59]  a show component here. Right. And show when. Count. Module two. So good. All right. Type script. My favorite. Okay, cool. So.
[00:31:12]  What, what, what, what, what, uh, let's do it the other way. Because I need, oh, actually this isn't going to work because
[00:31:28]  it's, the button will disappear. I, it's so funny. This catches me up in every live demo I ever do, because I'm trying to show something
[00:31:38]  with show. And this basic example always has the, has the, the button doing it, which is really short and simple, but obviously, um, doesn't lend well
[00:31:50]  to me hiding and showing stuff. But let's just put the count on the inside and make this, you know, click whatever. Right. Um, see one,
[00:32:04]  disappear three. Basically I'm only showing it when it's odd. Right. And. Yeah. I mean, obviously this is a little overkill for a, for a
[00:32:14]  show component. Right. We could also just, if I knew I was just gonna do this, I would probably have just, uh, done something much, uh,
[00:32:25]  simpler, you know, something like this, but whatever. Um, my, my, my, uh, what are we doing? What am I doing wrong here? Is
[00:32:37]  it cause this actually is a. Let's try this. Oh, it's cause like, it's cause I'm dealing with numbers here. This, this, this
[00:32:49]  is like. See? JavaScript. Show saves you from JavaScript. Um, but yeah, you, you get what I'm saying. If every time it counts, we're
[00:33:04]  actually tearing down this context, tearing this down and in the, this effect inside here. Um, and this, as you can see here, we actually compile this to
[00:33:15]  a couple of memos. I'm actually gonna. Let's make this a div. I know it probably should be a fragment, but this will just make our code a
[00:33:21]  little simpler to see. Um, cause the way the cloning works, but my point is we actually inside our insert, we actually end up hoisting this expression into
[00:33:32]  a memo. And then. Return that there's a bit of, uh, I fees doing here, like self executing functions. Just don't worry about that too much
[00:33:39] . But my point is this, um, like sub, uh, this is how we protect from over rendering, by the way, on conditionals, but this kind of
[00:33:48]  sub execution, every time it actually would go, we'd be recreating that memo. Um, and my, actually we don't recreate the memo actually. Sorry.
[00:34:00]  Because the, the way the IP works, it actually calls the outer memo. Anyways, that's beside the point. My, what I mean is we're recreating a
[00:34:07]  subscription, right? Because it needs to subscribe to count a new every time. You know, if, if this subscription that happens here needs to, needs to subscribe every
[00:34:17]  time. Um, it's visible when it's no, when it's, I guess it has the outer subscription. God, this is just a terrible example. I'm
[00:34:27]  sorry. But my point is you would be just, if you didn't have the cleanup step, you would just be adding more and more subscriptions to the signal. Cause
[00:34:35]  the signal never goes away. It's it outlives the, the, the computation down here. And for that reason, we need to clean up. If we didn
[00:34:43] 't clean up, the signal would just get more and more. And even if the stuff wasn't on the screen, you would still be subscribing to the signal up here.
[00:34:53]  If that makes any sense. Um, oh, some people are noticing stream problems. Uh, okay. Okay. I haven't seen any warning yet, but hopefully they
[00:35:05]  have subsided. But essentially it's very important that we, we clean up. And in, so that's one half of why we have create route. It handles this
[00:35:20]  cleanup for us automatically. The other reason we have create route is because it helps us schedule effects like things after render. You know, if you want, it's a
[00:35:29]  reason that refs work, um, in amount or in a creative fact, it's because we can actually do all the pure computational work, then do all the rendering and
[00:35:39]  then run your effects. Um, synchronously. Synchronously. Some frameworks use, uh, micro tasks, which then go, okay, we'll queue it up
[00:35:46] . And then when it's all done, we will, we will run the micro task. And then it knows it's done. But, uh, micro tasks. Aren
[00:35:53] 't necessarily free. Um, we actually go for sync, uh, synchronicity, um, to ensure glitch freeness. And for this reason to have
[00:36:03]  something run later, synchronously without cute, like, you, you know, we need to be able to, um, wrap the whole expression, so to speak. So
[00:36:15]  that we go, okay, it's all run now, run this, right. We need to be able to control that execution. So create root gives us that and
[00:36:23]  render just hides the create root. That's why we pass a function. If we just pass counter, it would run before render ran, and that's no good. We
[00:36:32]  actually need it to be under our context. So we pass a function. So basically we can pass this function to create root, which is, as I said, it's
[00:36:40]  just an effect that doesn't track. So a little long winded explanation, but my point is everything core under solid is under an effect. Essentially the handle, both
[00:36:53] , um, automatic disposal, as I said, signals don't need to disposal, but all the, uh, expressions do like all the computations create memo, create effect
[00:37:03]  and to handle scheduling. So context was actually kind of nice because it was a way that people were already used to using these patterns and it sticks it under the tree. You
[00:37:14]  don't have to worry about disposal or scheduling or making these wrappers yourself. I mean, context is a wrapper, but it's, it's basically built. Like
[00:37:23]  people are used to using that pattern already. So I was just like, win, win, but the biggest difference. Right. If you use react, people can tell you
[00:37:33]  don't use, don't use context all the time. Like don't overuse it. Right. Um, I don't know how familiar you guys are with that
[00:37:41] . But at one point Redux, I think it was Redux version six actually used the context API to do their stuff. Like context was already kind of like this hidden
[00:37:51]  thing that everyone was using. There's the legacy context and the legacy context wasn't very special. It was kind of like a hidden object kind of behind the scenes that
[00:38:03]  you could access and leverage. But with, um, the new context API, suddenly people were using it like in components and using component stating. Redux was like,
[00:38:14]  you know, we simplify our code greatly. We can get rid of our subscription system and that whole thing by simply just using state like context. And we're, we
[00:38:21] 're happy. We're good to go. Well, not exactly because when you use react. And you have context example, like our lovely example in here. And let's
[00:38:36]  say that state in our provider, I showed you our counter provider. See, we, we created a single signal. If you, if this was reacting, you're creating
[00:38:43]  state here, it would belong to this component. So effectively by setting this count or, you know, in our increment and decrement functions in react, you're actually
[00:38:55]  telling the counter provider to rerun. So, um, in that case, come back to our main app, the top most component of your app reruns. So the
[00:39:07]  default behavior in react means we render the whole tree, like literally everything. Obviously it's not re-rendering the DOM. So it's like, not like super
[00:39:17] , super expensive, but as a default, people who just use context kind of naively for global store means like there goes the whole app. People did it. Cause it
[00:39:30]  was kind of like, Oh, we got this new tool. But if you're doing regular updates, you know, obviously changing a theme or something, like not a big
[00:39:37]  deal, but like if you have regular updates, that's kind of detrimental, um, to re-render the whole virtual DOM for the whole app. Obviously there's
[00:39:44]  like, um, memo, right. There's a, what do you call it? Uh, um, the react memo can, can stop some children and stuff, but
[00:39:51]  like it's, it's not that clear cut. Cause you know, some things do need it and descendants need that change. And if you actually want it to propagate,
[00:39:58]  you actually have to let it propagate. Um, so that's why context doesn't replace Redux. Um, it's so funny. Mark Erickson, uh
[00:40:11] , like the maintainer has been fighting this for a year. Like it feels like the last two years is like every day he has to like correct some and be like
[00:40:19] , no, it's, it's not the same thing. It doesn't replace it. And he couldn't be more right, but it's hard to fight a
[00:40:25]  trend, you know, especially on social and like we're out there when people have like already, you know, figured it out for themselves, the truth, even when it
[00:40:32] 's not true. But my point is in solid, as you guys know, this signal is not old or owned by this product. It doesn't care. So you
[00:40:42] 're literally just passing the signal through. So by the time it gets to nested, it's just like this one subscription that runs, right? We don't actually need
[00:40:49]  to rerun the app with our context API. So for me, this felt like really good because I was thinking, Hey, I don't need to explain create route to
[00:40:58]  anyone. And so they can just use this pattern that any react developer Angular, like it's not unlike Angular's dependency injection or view actually has a version too. Basically
[00:41:12]  every framework accepts, well, even felt has their stores, but not their stores, but they're, they have a context API, but it's not quite the same,
[00:41:20]  but like they, they all have this means of doing this. So it was like, sweet. Everyone's familiar with this pattern. I don't need to teach people
[00:41:29]  create route and in solid, there's no downside. This is as good as if you just imported it. You know, like put a signal out in space and imported it
[00:41:37] . So that's, that's a bit of the why I thought I could actually simplify things for people. Let me see. Someone had an interesting comment. Let me read
[00:41:49]  this. It's been an interesting argument in React about whether context is simply dependency injection to be used sparingly or the whole state managed tool that can be placed in
[00:41:56]  Redux. Yeah. Yeah. Yeah. That's exactly what I was kind of getting out of a couple minutes ago, which is probably when you actually made that comment.
[00:42:03]  I think it's the wrong, it's a, it's a wrong comparison. Like it's just, it's just not the right way to be thinking about this
[00:42:12] . Um, there is some hope there, uh, reacts talking about creating kind of a built in selector API. So you can kind of use context efficiently, but
[00:42:22]  you know what, like maybe the fact that this doesn't work out the box is kind of a, an awkward side against react. It's part of, probably part
[00:42:30]  of the reasons that many of you guys like solid, uh, like it's context, kind of a great mechanism and it makes a lot of sense, but then, oh
[00:42:39] , wait, you can't use it for this scenario. That's a weird, that's a weird conflict to have. You, you introduce hooks, you introduce state management
[00:42:49] , and then, and then like, oh, but don't. Right. Yeah. Yeah. Complete. Completely. Yeah. Yeah, exactly. Like the, the
[00:43:05] , the expensive part is walking up the, the reactive tree. I explained that I didn't get there. Sorry. I kind of got sidetracked, but the context
[00:43:15]  in solid, if I didn't explain it properly is. Was actually really easy to do because each child register with its parent. Right. So that it can be cleaned up
[00:43:26] . I just piggybacked on that. So each child knows about its parent. It's going to get cleaned up anyway. So I don't have to worry about
[00:43:32]  leak it leaking. And so when we get to context and we're like, oh, give me that context value. When we're, whatever context, sorry, scope
[00:43:43] , reactive scope is running. We know what it is. And then we go, oh, we're, we just backlink up the parent. We just walk. We
[00:43:52]  just go, oh, does the parent have this context? Does the parent have this context? This parent has context. So it isn't that walk is a link list
[00:43:59] . It's not expensive. And it isn't even per component. It's actually per reactive context. Like which is based on like dynamics and like conditional branches or for loops
[00:44:09]  and stuff. So even in a giant app, you might walk up like, like, I mean, giant, you might walk up like 15 to get to like the
[00:44:18]  top of a global one tops. But like, how long does it take to traverse a 15 item list link list? That's, that's your overhead. It's
[00:44:24] , it's not, it's not expensive. It doesn't mean any re-rendering. You just have to literally go next, next, next, it's next
[00:44:31] . It's, it's, it's, it's nothing. So, yeah, I'm sorry. I didn't actually explain it, but that's why I'm
[00:44:39]  talking about create root and create effect. You already have the means. This is the tree that's already there for us. So I had my solution. And it's funny
[00:44:47]  enough. No other reactive library had really taken that approach. Yes. Okay. The provider health. Yes. That, that, that, that, that, that is
[00:44:57] , that is, that is fair. Yeah. And I, I will grant you that I have thoughts on the provider health to be fair. And I mean, the,
[00:45:09]  the first thought on the provider health, like if you're using something like Redux or whatever, and you make a single global store, then you don't have that much
[00:45:16] . Maybe even if you have three or four, like, as long as you're not like making one for each thing, maybe you're fine. The other thought on
[00:45:24]  the provider health is, and this is more radical, and I'm not going to suggest we can get there right away, but maybe global stores are the wrong pattern.
[00:45:34]  I, I'm very into stuff like react query. Um, you, you, you know what I mean? Like it's possible that we can pull out global c
[00:45:50] aches and then not have to worry so much about like kind of writer code as if it's local. That's, that's my hope. That's, that's
[00:46:00]  my hope. But I mean, to be fair, there are other patterns to bury context. You, you can use patterns like the standard type patterns. I can, I
[00:46:07]  can show that in a minute. Um, so we'll, we'll get there. Um, thank you. Yeah. I mean, that's, that, that was
[00:46:16]  the goal. It's kind of funny how that's just kind of happens. I wasn't like trying I'm when I start, when I was starting, when I
[00:46:22]  was starting working with solid, I wasn't like, oh, I'm going to make react clone, you know, which, which people, you know, might think,
[00:46:31]  you know, because of where we ended up. I was actually like, I wasn't even on JSX initially, but then JSX made a lot of sense. And
[00:46:37]  then, and then I was like, I had my, my stuff, but I was like, ah, I, I didn't like the two way binding and I didn
[00:46:45] 't want the syntax. And I was like awkward. And then I was like, okay, I could do explicit. I had this, I always used knockout and
[00:46:53]  I, and I was trying to figure out a way to break the rights and the sets together. And I was like, okay, I can do like mob X, um
[00:46:59] , box of the rules. You can use get set. Maybe that'll work. And, you know, I wanted to kind of get away from those patterns. And I
[00:47:05]  played, I made my, um, my proxies read only, um, like the stores that I thought that was the main primitive because I thought no one would accept
[00:47:14]  signals. And, you know, I was kind of happy with that separation, but it basically, I just have a set method top level on the store object. And
[00:47:23]  it wasn't until react hooks. I was like, oh, like, why didn't I think of that? But then when I changed the, the, the,
[00:47:30]  uh, the, to use that kind of setup people, you know, like it started getting really looking like react. Cause like, okay, now we have hooks. It
[00:47:39] 's funny. React didn't have hooks when I was working on this, but now we have hooks that look just like react hooks. We're using JSX, like
[00:47:47]  context was a good pattern. I just like a lot of stuff reacted and it just, you know, it ended up that way. Um, what do we got here?
[00:47:57]  Yeah. And you only have to walk the tree. Yes. And do you know why it's, do you know why you don't have to walk the tree once?
[00:48:04]  Because your component only executes once, right? It's the same thing, right? You just needed to get the reference in the first place. So it doesn't
[00:48:11]  have to happen every update. Okay. Yeah. And I I've been looking at it. I actually made like a, an SWR thing. And one of my things
[00:48:25]  I was playing with, but I have to, I have a few cross purposes to consider here. Um, I think I want to handle caching to do with suspense.
[00:48:33]  And stuff first and navigation and routing before I actually figure out what the right pattern is there. So that's why I said, I'm a little, it's a
[00:48:41]  little premature for me to just say like, this is the way, but I sort of picture this. I mean, if you, if anyone's seen the remix demo,
[00:48:51]  um, the remix run beta demo, that was something. I remember when I first saw it and I was like, man, these guys beat me to it a little bit
[00:49:02] . Uh, cause I, I mean, it's not surprising. It's the guys who created reactive router and, um, react router is based on Ember router
[00:49:12] . And my first web component router was based on Ember router. Basically Ember router just changed the game when it, when it came to routing solutions in terms of having
[00:49:20]  nested routes as a concept for front end. Like this, you don't have that same kind of concept in the backend. It just doesn't make sense. The
[00:49:27]  idea that you could swap out portions of the page and do layouts and that it's actually kind of essential in reactive library. Cause you couldn't do diffing. So
[00:49:34]  that's why like older libraries, like Ember had this approach because like, they were trying to avoid diffing so that they had nested routes and react router one had
[00:49:43]  it. Um, and then at certain point they just got rid of that approach and then went to like the react router three, four that everyone's familiar with. But
[00:49:50]  then they brought it back and react for other six basically to make remix. And I knew solid because the way we render had to have a nested router. So I was
[00:49:59]  already working on that. And I was looking at react query and I was like, okay, well, how do we put these things together so that we can refresh on the
[00:50:07]  route change? And, and no, we, we, from the route and data, we can parallelize fetching. We can get rid of the waterfalls. We
[00:50:14]  can, you know, a lot of benefits here. And then as I said, we mix run demo and I was like, okay. Okay. Yeah. Okay.
[00:50:21]  So yeah, that's the last little bit I needed to jump over. So yeah, do expect that the solutions are solid. Um, start, uh, the starter package
[00:50:27] , you know, kind of like next JS felt kind of approach. Remix thing is going to be very similar to remix run in that sense, because like that, that
[00:50:36]  I needed that approach to actually, that's the approach you have to take with fine grained reactivity. So it just makes sense. Um, anyway, uh, kind
[00:50:46]  of got off topic. I'm going to give it a long winded, but that's great. Keep the questions coming. Um, let's see here. So
[00:50:52]  getting back to where I, I basically revealed the big power of context here. And I talked a bit about the, what the, how, and the, why, um
[00:51:02] , but you guys are already doing, see, I got you covered without context. Right? How do we, how can we do this without context? I have this
[00:51:12]  example and some of you are probably wondering why, why, why, why this create root business and create root? Truthfully, you can put a signal anywhere import it.
[00:51:23]  And it works great. Someone's already commented on that. Go for it. You know, if it makes sense for you, whatever. But the thing is sometimes you
[00:51:30]  need to derive values. Sometimes there's resources, um, which we'll get to when we talk about async. Sometimes there's different types of computations, side effects
[00:51:39] , all these kinds of things that you want in here. And suddenly your global store just stops working and you're like, what the hell is wrong here? And it
[00:51:48] 's because you didn't follow the tutorial here, but it's because create, the create root is really fundamental. I said, both for the garbage collection aspect and for,
[00:51:59]  um, the scheduling thing. Um, as I said, you, you could just do this felt store thing, you know, export a signal. And I sometimes do
[00:52:08]  that as kind of an example because when, you know, people go, Oh, look at self stores. I'm like, I don't get what the big deal is
[00:52:15] . Like you can do this in view too. You can just like create a ref and just text board. Like every reactive library has like, has a reactive live, um
[00:52:24] , atom. So like, and the funny thing is any reactive library that has a reactive atom that can be used as a store. Like mob X is box observable
[00:52:34]  views, ref solids, um, signal. They don't think that's a suitable store. I don't know why it's felt decided that was a suitable store. I
[00:52:42]  mean, it's fine, but it's also like oversimplified. Like there's a reason Redux has selectors and all that complicated boilerplate around choosing what
[00:52:53]  little things get updated. It's cause you need granularity. You need only, you don't want to update the store and then just like update everything. Right?
[00:53:01]  So if you're simple, it's fine. If your store holds a single value, great. You got a signal like our count, but now let's hold a list
[00:53:09]  of users. If one user updates, do you want to trigger everything that listens to any user? No. And if you have a single reactive atom, you need to
[00:53:24]  do stuff yourself. I mean, we can do is take the atom and then add selectors to it. Use, uh, you know, those type of patterns,
[00:53:34]  but I honestly, I don't, I don't quite, I don't question stuff on the Svelte side. It's just not worth arguing with people around
[00:53:44] , uh, arguing to people about this. I think on social media, cause I think there's a real desire to have a simple approach. Um, but like, as
[00:53:55]  I said, any, any library that's been doing reactivity five plus years knows that that's not sufficient. So I, I mean, maybe, maybe it is
[00:54:04]  like, here's the thing you could, you know, how you can use context and re render the whole reactory. You can use a single atom and re render everything
[00:54:14] . And if your framework's faster, like Svelte is, maybe you don't notice. Maybe it's not a performance well in that, you know, there you
[00:54:20]  go. Simple. Um, but like, I don't see how that scales for real things. And I'm fairly certain that as, you know, Svelte
[00:54:32]  gets more adoption, which it will, and it should, because it's brilliant. Um, people will kind of go, oh yeah, I need to do a bit more
[00:54:40] . And then eventually we'll just get to a point where people, you know, generally realize that all these frameworks have the same problems, you know, and you, you
[00:54:50]  need solutions for them. Um, and, you know, there's two ways of thinking about it, progressive and non progressive view kind of introduced this idea that learn only
[00:55:01]  what you need, feel comfortable, and then kind of level up. Svelte's kind of taken on that role too, you know, just simple. Got some HTML
[00:55:10] , some script tag. Here's a let variable. Let's let's do what we need to. And then if it ever becomes a problem, level up. This
[00:55:17]  is exact contrast to react, which is like, look, here's these, uh, you know, six things. Like we have a few more, there might be 18
[00:55:26]  things. So number more, but just look at these six, know that there's the other 18 with these tools, you have everything you'll ever need to do anything.
[00:55:36]  And that's the same approach I take with solid. I just, I just, I just like being upfront. Like, I think there's value in just being like
[00:55:43] , look, this is how it works. Your perception of how it works never needs to change. That that's the difference. I don't think it's easy simplicity
[00:55:55] . Like everything's the same to a certain degree, like from a high level version, nothing is actually simpler. So anything that sells you on easiness is lying. Like
[00:56:04] , so to speak, right? Like you need to, you will need to learn it eventually. So yeah, you know, teach their own, so to speak.
[00:56:15]  But my, my, my point I'm getting at is when you need tools to do it, I want to provide the primitives that allow to build towards that and know
[00:56:24]  you can build towards that right off the beginning. So, um, yeah, you don't need, um, you know, I mean, you don't need to have
[00:56:33] , you know, context and actually, you know what, let's do, let's do a little exercise here. I think you guys might, might appreciate this a
[00:56:43]  bit. What if instead of like, yeah, maybe I'll just make another file. Let's see if I can make another file here. Um, they call it store
[00:56:58]  just for the lack of a better word. Don't hold me to it. But what if, what if we do something like this? What if we, um, let
[00:57:08] 's make a new create store, right? And let's make that store take a function. Okay. And let's make it do something really simple, which is create
[00:57:20]  route. And inside that route, actually, you know what, I mean, this is almost, this is almost a silly abstraction, because you could just use create route and
[00:57:38]  not even worry about it. But my whole point is like, you know, let's, let's, let's, let's go through the exercise. Let's
[00:57:43] , let's just, let's just, let's just do this. Um, and then let's have it return create route. And then let's have it go
[00:57:56]  like this. So weird that it looks like when you open a new tab, it doesn't have the proper tab alignment. I'm a big fan of like two spaces.
[00:58:07]  Apparently this just defaults to four, which is visually bugging me, but whatever. Okay, const store equals execute our function. And then let's return a function
[00:58:21]  that returns the store. I mean, it seems kind of a little bit silly here. But the reason I want to do this is now let's, let's change
[00:58:32]  this around. Let's, let's make this, I need a couple more things here. Obviously I need to import this in here, but my, my, my,
[00:58:42]  for anyone who doesn't want to use context. But if we, what if we just thought of things like this, what if we just, instead of doing this,
[00:58:56]  let's go import, create, or it's default, made it default. Yeah. Import create store from store. Right. So now we get here and then I'm
[00:59:09]  just gonna, I'm just gonna inline the whole thing. Cause it just makes it feel more friendly. Like create store. All right. Export. Default.
[00:59:19]  Create. Store. And. Yes. All right. I was a little hasty removing the solid import. Someone probably pointed that out in the chat. I haven't checked
[00:59:26]  yet, but you know, you know, no. Yeah. My point is I've extract abstracted the way this create store thing with the create root. And I
[00:59:49]  had to return a function for a reason because, you know, you know, I, I mean, it doesn't really matter. I did this just as an object,
[00:59:59]  but it doesn't matter. It doesn't matter. But now. Like how, how, how's this, how's this for a pattern. All right.
[01:00:08]  Now the question is, what did I do wrong, right? Semicolon missing somewhere. Thank you. So this is, this is, this is why I use
[01:00:27]  the playground instead of the tutorials to do this stuff more often. What am I missing? Oh, yeah. Function. Right. Yeah. So our store, our
[01:00:41]  store, our store works. Right. So basically if we, we have a create root and have it returned a function. Um, and now what you can do is
[01:00:54]  you can just create a store somewhere, pass it a function, set it up however you want, and then import this file in your file and use, use it. So
[01:01:05]  like, I just very simply made a different pattern that doesn't use, um, uh, doesn't use context, but it kind of safely does create a global store.
[01:01:19]  Cause the thing is, yeah, sure the disposal doesn't, I'm assuming cause it's a global, you never need to dispose of it. Maybe that's a
[01:01:25]  wrong assumption, but because it's global singleton, we're not gonna worry about disposal. At least now like effects and stuff, um, uh, won't, um
[01:01:33] , have issues or resources. And you will, uh, basically use a fairly familiar looking pattern. Uh, let me catch up on some comments that come in the last couple
[01:01:47]  of minutes. Yeah, this is, this is a great, great observation. And yeah, why not? I mean, to be fair, I've been keeping stuff
[01:02:12]  out of the core cause I want to keep it slim. I want to keep it, you know, you know, I want, I wanted to keep it slim,
[01:02:22]  but the B to be fair, we, we have, we actually have some libraries like almost like use react. There's a, there's a solid primitives library
[01:02:33] , um, that, uh, David, one of the core team members have been working on for awhile. And I feel like stuff like this, this belongs there. We
[01:02:40] 'll, we'll get good recipes and maybe someone will make it back to core. But then, you know, for now, let's just kind of play with things and
[01:02:47]  see where it goes. Um, yeah, there's so many positive comments here. I just, yeah, yeah. Share a few of them. Yeah, no
[01:03:01] , I mean, that's, that's the thinking. Yeah. So if you did this without create root, what could go wrong? You explained it. Basically, if
[01:03:15]  you ever use create effect, it will not work. That's the first thing. It won't, it won't be scheduled. Um, other than that, the
[01:03:26]  only thing you have to deal with is a compiler whining at you during dev mode, because I purposely warn about creating stuff outside of roots. And the reason I do that
[01:03:37]  is because sometimes people go promise, then create something, or they put in an event handler and that creates memory leaks. Like I said at the beginning, and those memories are
[01:03:44]  kind of terrible because every time you just, you, you get unexpected behavior sometimes like phantom updates. Like, it's just not good. I, rather than explain
[01:03:56]  it to people, I'd rather just make a simple primitive that works in every case. That's, that's where my mentality comes from. If you only use signals,
[01:04:04]  there is no, or there's no problem. Even if you use memos or my crate computed, it will complain at you, but there's really no problem because there
[01:04:13] 's no expectation that this gets released. But it's, but it will complain at you in dev mode. Yeah. Yeah. And I, I think, yeah,
[01:04:28]  it's, it's, it's kind of like the super batch. I need something to start the batch, you know, start the, the, the transaction, start
[01:04:35]  the, the whole thing running. Yeah. Um, that, that, that's kind of the idea here. And the reason I spent so much time on context and
[01:04:49]  we'll see how far we get on their stream today, but it's because I want to. kind of lend lend, lend this to the next set of topics here
[01:04:59] . We're, we're actually about an hour or five. So we're about like halfway through, you know, uh, what I was intending. I tried to
[01:05:04]  stream for a couple hours. Um, but you know, we'll see how it goes. Um, but essentially why is context relevant to everything? It's because I
[01:05:15]  actually use context for a lot of things. Um, I use context is how we do error boundaries. Context is how we do suspense. This is very different than,
[01:05:27]  than react. Um, because solid is very different than react. Um, but I'm going to start with what I consider the simplest thing. I'm going to move into
[01:05:37]  async mode, unless anyone has any more questions about context right now. Here's your shot to ask. Ask, ask, ask me about stores or context. I
[01:05:45]  mean, not stores. I don't want to get too much into the proxies. Um, but you know, patterns around global storage. There is a difference between
[01:05:52]  what's in the store and, and the context, which again is something that, uh, that, uh, Redux maintainer has been trying to explain to people that
[01:06:02]  context isn't replaced for Redux. Maybe use reducer could be a state management using Redux, but context itself is just a container. Any more questions on the container
[01:06:12] ? If not, I'm just going to kind of move on. Okay. Yeah. I'll, I'll, I'll, let's, let's, let
[01:06:22] 's get back into our playground here. Maybe I'll just start a new fresh one. I mean, it's funny. I just keep this counter. It gets way
[01:06:28]  too much work. Right. Um, we'll, we'll, we'll, we'll worry about that in a second. What I'm going to do is show you
[01:06:31]  something kind of really simple. Cause for me, when I talk, I had this in the tutorial guide sections before, but I wanted to kind of show, show you
[01:06:45] , um, the, the mentality difference here between, um, and the mentality difference here. between, um, reacts, re render and, and solids because, you
[01:07:06]  know, do a bit of div soup here. Um, and, uh, so. So this is what granularity buys you. And let, let, let
[01:07:38]  me show you what the, what I mean by that is. I'm going to show when count and count is zero. So I'm not showing it, but let
[01:07:50] 's, let's do something here. Let's, let's go set timeout. And let's give it a little bit of time. Actually. So we can see
[01:08:05]  it. Let's add a fallback here. So, loading for two seconds. High. Right. And. Basically. We, we've all kind of seen these
[01:08:30]  loading state scenarios, but this is why. Even more than other frameworks. When I first, you know, was working on solid. I was like, maybe I don
[01:08:45] 't need these things that like a V Dom library has like. It's. In solid. When you do this conditional thing where you do the show component and you do the
[01:08:56]  loading. And then. If you look. The children. Are lazy. So until it's true. We don't. Clone and create the, the div, you
[01:09:03]  know, and. When we have this, you know. We got our fallback. This is static string in our case. So it, it just inserts it as
[01:09:16]  needed. But my, my point is in the same granular way that we've been talking about. And this whole thing's an insert, right? Keep in mind. So
[01:09:24]  you create a component. This show returns a memo more or less. If you want to know it's internals. So it basically returns a memo that returns loading until
[01:09:36]  it, it, it flips and then returns clone node and creates those nodes when it flips. And my point is when. When. When we go from zero to one
[01:09:52] . We don't re-render anything. All that happens is count triggers the memo. Which. Clones the new nodes. Which then the effect that listening the insert goes
[01:10:08] , oh, I've updated and then inserts it. So it doesn't involve two computations running. But. My point is we don't re-render the rest
[01:10:17]  of the tree. We don't do a bunch of extra. Diffing. The only diffing. Um, that happens is we go, oh, replace this text
[01:10:26]  node with our new, uh, development. That's, that's, that's the level of diffing it goes. And it's actually really simple because it goes,
[01:10:34]  it goes, um, in this case, there's only a single element. So it goes, okay, I've got an, I've got a dom node.
[01:10:41]  Um, is my current value. Um, any like thing. And in this case, there'll be a text node. And I'll go, okay. Well, I
[01:10:50] 'm swapping one node for the other node. Like the diffing isn't even like diffing. It's like just replace. And we don't re-render
[01:10:58]  anything. So if you could picture that this is some kind of like async waterfall, like you're rendering your page. In react or feed on library, or even
[01:11:07]  in like Svelte or like any kind of top, like any kind of component based thing. You have to rerun the component essentially. When that piece updates. Right
[01:11:19] . Right. And it's more pronounced in a beat on where you have like the children and all that kind of consideration. And each component is an island or islands run
[01:11:25]  term. Cause you guys will think partial hydration. I mean, it's like its own thing. Like in a reactive component library, like mob X or whatever, or S
[01:11:32] velte, you, you, you have this automatic memoization at the component, um, boundaries. So like, if it's just that, that changes only that
[01:11:43]  component runs, but my, my, my point is that this pause and continue with solid is almost free. Like we, we don't have to re-render anything in
[01:11:53]  order to continue from, uh, from a pause. Right. We, we just go, okay. Render what we can. So, you know, render this div
[01:12:01] . Maybe if there's another element after it, render it too. We just continue, continue, you know. Yeah. Yeah. I mean, always here, you
[01:12:12]  know, I don't, you know, you know, we don't, we, we don't need to do anything here. Right. Um, so our, you
[01:12:23]  know, we don't have to render some virtual nodes or, you know, our cost of async continuation is almost nothing. Um, and, and, and that
[01:12:38] 's sort of like what I'm getting to here is I didn't think I needed suspense. I didn't think I needed anything special for async. You just, you
[01:12:51]  just, you know, instead of set timeout, make this a promise then, you know, like it will just pick up where it left off, but that's actually
[01:13:01]  not the benefit of suspense. The benefit of suspense is actually in a, uh, um, twofold. If you guys haven't seen it, um, closely
[01:13:19] , it might not be as obvious, but I'm not going to get into, we'll see if we get into concurrent stuff and transitions and time slicing. So let
[01:13:30]  me ignore that for a moment. The benefit of suspense is simply inversion of control. Um, you know, old design pattern thinking it's that in this case, our loading
[01:13:45]  state and stuff is above. So, you know, our parent, our parent, our counter, whatever holds all the cards and knows the state and it knows how to
[01:13:59]  show the loading state. Um, you want to kind of pick that maybe from a navigation standpoint, like at a page level and you, and you don't want to
[01:14:09]  know, and I don't necessarily, there's two sides of this. Like the most obvious one is if you pretend you want to show a loading state for each page
[01:14:19]  when you wrote between it, um, and or tab or whatever. You can basically do with suspense. You can do that without knowing what the tab is loading. So
[01:14:31]  that loading could be something that happens below, or it could be something that happens above. Maybe you're using context. It doesn't really matter. And the reason it doesn
[01:14:42] 't matter is because of the way that suspense works. And I w I'm going to get into that a little bit, but essentially the first example that everyone sees on a
[01:14:54]  sync and suspense type stuff. is the, this example of the lazy component. This, this is the most obvious way of seeing what I'm talking about that inversion,
[01:15:05]  because our app component here. Once, once I add, um, the suspense, it's so fast. You don't even see the loading, like not even right.
[01:15:18]  It's because, but my point is, um, this is actually funny. This is actually funny because there's no suspense in this example. Um, which is why
[01:15:29]  there's actually no loading state. I was trying to just show that the welcome would show before the hijack, but it's like way too fast. But, um,
[01:15:38]  my, my point is that, um, essentially. Right now we don't have suspense, but if, if we actually had something with suspense, something higher up can
[01:15:53]  make that decision. So like right now, uh, you know what, let's, let's make this actually work. Um, do some work. Luckily for me
[01:16:04] , I actually included an example here where I've kind of trick lazy to being slow. So now we see that there's a second, right? Without suspense. This
[01:16:14]  greeting, um, the way lazy works, it just doesn't return the component until it's ready. And then passes the props for that new component. But without suspense,
[01:16:24]  you can clearly see welcome. And then it continues. This is not unlike that example. That's why I showed you that example a minute ago. This lazy component is
[01:16:34]  just, it's just a fancy way of doing this. Essentially. We're just showing it when it, when it comes in. But when you add suspense, I mean
[01:16:44] , you can choose where to, um, show the placeholder, right? This is sort of individual control. Like if the thing isn't lazy, then, then
[01:17:01]  we, we never have to actually, uh, worry about any of this. So let's go. Let's import suspense from, uh, solid JS. So then
[01:17:21]  again, why not floating hijacked, right? Like essentially, but like, I mean, I don't know why you do this necessarily, but if you didn't want
[01:17:31]  to show the welcome. Well, it loaded, you could do that too. Um, you, you arbitrarily just pick where that point is and it doesn't even have
[01:17:43]  to be the same component. And greeting, if greeting is not async, then, you know, if there's no extra cost here, if greeting is just.
[01:17:57]  Import greeting from greeting. Well, then no harm, no foul. Like that's, that's, that's the beautiful thing about it. It's basically a way
[01:18:13]  of hoisting or delegating control over those states without the parent needing to know. And as I said, in this case, lazy is a really good, uh,
[01:18:22]  kind of version of this because essentially that promise, that request is something that's happening nested somewhere down the tree. You don't know which components are lazy. Don
[01:18:31] 't worry about it. Just show a consistent state. Because the thing is, if each separate component need to handle a state, you might end up with what they call spinner
[01:18:38]  hell or like a whole bunch of different spinners. Sometimes you're like, you know what? This whole section of the page should load together. I'm just going to
[01:18:44]  wrap it into suspense boundary. And, uh, I don't have to handle the individual states. Yeah, let's see. I got a few comments coming in here
[01:18:56] . Yeah. Yeah, exactly. Shows, you know, you can make an auth component of a show pretty easily, um, and kind of handle the timing that way
[01:19:11] . Hmm. Sorry, jumped on me. Yeah, exactly. That's, that's the main principle behind suspense. It's basically this nice wrapper. Um, and
[01:19:31]  that's the thing for solid, the dynamic loading would happen anyway, because it's not, it's not any different than my show component. We just, we just continue
[01:19:41]  where we left off. Right? Like this, this, this, there is no need to throw promises and re-render stuff and like, like, don't get
[01:19:56]  me wrong. There's a side effect to this because I say there's no need, but it's, it's a deliberate choice. And, and, uh,
[01:20:05]  when I say deliberate choice, it's because in solid, I don't want to re-render everything. So from a cost perspective, I have no need to re
[01:20:18] -render everything. Cause I can just pause and start instantly. Right. But on the other hand, I don't want to re-render thing. If I threw the
[01:20:25]  promise all the way up and then we would have to re-render or continue. There's no continuation, right? We don't have that in the language, but maybe
[01:20:32]  generators are the best option, but then I don't want to like make the whole renderer generator aware or whatever. So, um, like throwing promise would never work
[01:20:43]  for us. So, uh, you know, I, I need, I needed to use a different mechanism to be able to, to continue. And the thing is,
[01:20:55]  solid is already so good at continuing. So why, why throw, right? The, the, the problem and the trade-off here is, you know, if this
[01:21:03]  is something that depended on some real data, which we'll get to in the next. example here, um, then that data might be null. Right? Like
[01:21:13]  if, if you, if you look at my example here and pretend, um, like we're, I'm just using count to flicker flicker it, but pretend
[01:21:22]  that, um, like I wrapped it in a show because I'm kind of showing like the, like our naive suspense approach we're showing the loading state, but essentially
[01:21:37]  if, if you don't wrap it in a show, if you're not checking if the, if it's there with, with solid approach, it won't just work
[01:21:44] . So with, with react, the second you hit an error, um, you know, with the second you hit something that's not there, it's going to throw
[01:21:52] , throw the promise. So suspense saves you worrying about like these null states. So, and a lot of people think that's the point of suspense and it's,
[01:22:01]  it's, I guess it's a nice benefit, but that was something that was, it also means a lot of rework. Solid's already so good at continuing.
[01:22:08]  And I, and the, and with react, the first promise you hit that suspense, you have to stop rendering you, you got here, you stopped, you know,
[01:22:18]  um, which, you know, might be good. So you, you stop here and you don't render this always here thing. You just stopped. But the difference
[01:22:29]  is with solid, you do render the always here. And when you're done, you don't need to re-render the always here. It's already there. And
[01:22:37]  I think that's better because let's face it. You're waiting. If you're waiting for something to come in, do you want to do more work while you're
[01:22:44]  waiting? Or do you want to, or do you want to, you know, push off that work for when everything comes in? Like it's, it's more
[01:22:50]  performant even and better scheduling in a sense to actually do the work ahead of time. So stopping on the first interruption actually is like a de-optimization in
[01:23:09]  my books. Yeah. It lets the child once choose when the suspense re-renders instead of the parents having to. Um, that, that, that's one
[01:23:20]  way of looking at it. I mean, the thing is the child gets to choose what its data is, what, what its dependencies are, what it's fetching.
[01:23:31]  It might be from a global store. And, and I, and I, I'm going to get to this when I introduce the next primitive. Um, I don't
[01:23:37]  even view it as choice. It's more like the child just doesn't have to worry about it. They're, they're, they're kind of like, look
[01:23:44] , we're going to do my thing. And I'm just going to defer that the parent is going to handle the orchestration. It's going to worry about this.
[01:23:52]  I mean, obviously with, um, lazy, it's always nested, but all the way we do this in solid is instead of throwing promises, we need some other
[01:24:01]  primitive way of attacking this. And the way that I, that I'm going to do, do that is something that we have called create resource. So let's,
[01:24:10]  let's look, look at this. As I said, our trade-off so far is that we don't get to pause, so to speak. I mean, we
[01:24:19]  do pause, but we don't, we don't get to like throw away the whole render. We actually want to keep the render as I said, it's more
[01:24:25]  efficient, but it means that you have to put in the null checks yourself. Um, so what is create resource? Well, what did I do here? Yeah. Don
[01:24:36] 't worry about this. We will just put the solve right in. Okay. Create resource is like a special signal that is driven by something reactive, like a signal.
[01:24:47]  Like if you don't include this as final, just fetch once. But for our example here, we're going to fetch on each number change, and then it calls a
[01:24:56]  fetcher. And in our case, it's just, it's just an async function. It's basically something that returns a promise. You get the, you get
[01:25:01]  the query. This is very much modeled after react query very intentionally. Um, I just liked the, the kind of API. I mean, in this case, I
[01:25:10]  needed to have explicit dependencies. And you, you might be asking why Ryan, would you bother with us? Well, can't this fetch function just be, um, tracking
[01:25:19] ? And the answer is it could be, but then I can't separate the, the, the side effect, like the fetch from, um, the, the, the
[01:25:26] , the, the reactive part. And the reason I want to do that is I want to control it. Is I want to control it and it for SSR,
[01:25:31]  I really want to control it. Um, because resources have a big part to play in suicide running, which we won't get into today. But essentially I am for SS
[01:25:42] R, we handle this automatic serialization for you. And in that sense, resources are really powerful because I can, cause we control when we fire that promise. We
[01:25:55]  can actually go, we can actually basically start the fetching on the server and then have the client side go, okay, I'm fetching on the server. When the
[01:26:07]  server refinishes sending that data along the stream, resolve a promise. We can, I basically replace the promise you would have done on the client side with basically a promise
[01:26:15]  from the server. So by separating them, we can still track the ID. We can still create our dependencies so that updates in the future, but we can basically use
[01:26:25]  streaming to stream a promise from the server to the client. Um, and that's a core part of what I wanted to do here. So that's, that's
[01:26:33]  part of why I went with this thing. Cause I needed to separate the dependencies from, um, from the fetching. And I mean, I could use a dependency array
[01:26:41]  or put at the end, like react, but this is something so nice about the kind of react query pattern of like, here's my query parameters and here's the fetch
[01:26:49] . I just copied it shamelessly. Um, so w w w with these resources, um, again, you notice there's no suspense in this example. And again
[01:27:03] , it's because resources don't require suspense internally. Our lazy component actually uses resources. Resources are actually the way I trigger all of this. I just needed one primitive that
[01:27:14]  knew how to handle promises and the concept of staleness. And then converted that into a signal. Once we've converted to the signal, we don't have to dirty
[01:27:21]  the rest of our tree. So to speak, like one of the problems are classic things with async functions, like async await. And is that they actually like.
[01:27:28]  Now everything's async and then everything is in a weight and then your weight. And it kind of permeates through the whole system, this concept of coloration and in
[01:27:37]  solid, we're already using signals. So I was like, let's, let's avoid the coloration. I don't want to like enter, like now everything needs
[01:27:42]  to change. be a weight signals are already our way of communicating and they they're free of components they have all the qualities we want so the problem with the async
[01:27:50]  away people like why can't you make an async component i'm like why would you want to um because if you if you literally just stop rendering a component in the middle
[01:28:03]  first of all we have some problems with reactivity because a weight um or like will continue without our ability to interject have no way of getting it back under a reactive context
[01:28:13]  a generator would like give me a way to intercept but generally but just a simple await continues and then i have no chance of wrapping the context but you're actually stopping things like
[01:28:23]  don't you want to show a fallback like i get i i guess a parent could provide the fallback but the granularity is wrong you don't want to be pa
[01:28:30] using components because then you you cause the whole thing if if you pause the specific binding maybe arguably that's that would work but component level it's too too wide and then
[01:28:42]  i was like why would i i i had this idea of putting like rx observables or promises into the data bindings directly but then it's like you have to support
[01:28:50]  all these other specific syntaxes to wire this stuff in and the beautiful thing about signals as you guys know is you just write expressions like normal javascript like sure there's
[01:29:00]  a function call in there but essentially you just in the templating you don't have to worry about dependencies you don't have to worry about piping and streams and and as
[01:29:08] ync await like generate like you don't have to worry about this kind of start stuff if you just write like an expression like count plus one or like you know first name plus
[01:29:18]  last name whatever you need and we already have all that why dirty it uh okay question here so wait so creator is watching that user it and he runs the fetch function right
[01:29:32]  so an ssr example the first time it will run on the server then in the future around the client yes essentially the the fetch function always runs even on the server and
[01:29:41]  the client but when you're in ssr mode and you're doing streaming um uh and even actually in ssr mode and async it's the same thing it
[01:29:50] 'll run the fetcher and then when it goes sorry it'll run the the the like the user id part when it goes to do the fetching instead of calling the
[01:29:59]  fetcher it'll go oh i've already got a value cached or i already got a promise waiting i'm going to use that instead so for async rendering when it
[01:30:06] 's already completely serialized on the server like and we only send it at the end you'll go oh i already got the value there so it'll just like replace the fet
[01:30:14] cher with the value but because it called the source part it'll track it so when the source changes again the cache isn't there and it'll have to fetch it you know
[01:30:23]  for real um and similar on the streaming side except we in the streaming side if the server hasn't finished yet we just passed it a promise on the based on the server
[01:30:34]  finishing so um yeah that's the best way i can kind of put it like we run the we basically run it like normal kind of sneak in a different promise and then when
[01:30:44]  that promise resolves with the server data which obviously could start fetching way before like if you had to wait to the browser for everything to load and then do the request
[01:30:51]  and process wastewater instead the server started that request the second it started rendering it on the server it just comes in over the stream all over the initial request i mean that's why
[01:31:00]  streaming is so powerful you you can't it's it's the fastest on fast and slow networks it just it it basically is the best of all worlds um and that's why
[01:31:10]  react is putting in react 18. resource handles this all for you automatically as long as your data and your resource is serializable um you know we just we just take care
[01:31:20]  of it for you on the ssr side and i will talk about ssr in the future sessions definitely anyway um where i was heading with this um yeah so i
[01:31:35]  i've made create resource pretty useful on its own right we have like loading states and and error handling messages and you know thing you know basically like the data i want to
[01:31:51]  point out though like json string find luckily works on on null but like my point is if you were doing something else here like with user like user dot name and you weren
[01:32:02] 't guarding the loading state or guarding that they had the data there this would fail and you wouldn't really think much of it because you're not using suspense or whatever and
[01:32:10]  that's the behavior what with solid adding suspense doesn't change the behavior of your reactivity it's it's still a signal right it just gives it a way of tracking so
[01:32:21]  you so the question is how does suspense work with this right because i made a basic example with suspense oh guess what it's like exactly the example that we did i didn
[01:32:35] 't i wrote these tutorials like half asleep i forgot that i even did this it is exactly this that simulated delay and then when we solve it it's like literally the exercise we
[01:32:47]  just did that's that's kind of hilarious um anyway my my my my my point is um suspense is a context provider right i'm going full circle here and create resource
[01:33:07]  you internally uses use context to get a counter in fact you're gonna love this it's not unlike the counter example actually sorry it wasn't in this was in the previous content
[01:33:21]  it's it's very similar to the counter example that we're using on the counter context it's almost identical like there's a counter with an increment and decrement method
[01:33:29]  and we just go you know like it's that kind of kind of mentality right um i mean we push the promises on the stack and as they resolve we we keep track you
[01:33:41]  know which promises are resolved or whatnot but essentially you can it's just a counter and when all the promises are are done then we can you know flip mode and switch it
[01:33:54]  it's a show statement with a with a counter in the simplest sense and that's why it is so easy to to implement suspense in pretty much any framework whether you throw promises
[01:34:08]  or do this like pre-act has suspense uh view has suspense we all got suspense in the simple way um sorry question no solid no solid doesn't use ssr
[01:34:27]  by default you you need to actually do a do a setup to to do it you need like different compiled output a whole different thing i'm going to cover ssr never
[01:34:36]  thing we we have ssr just like any framework react so view they all have ssr um i was just saying that i designed create resource as not just thinking
[01:34:45]  about client side rendering but also anticipating the need for server-side rendering so there are some questions that came out about how server-side rendering works create resource while it's convenient
[01:34:54]  to handle these nice loading states and the client and suspense really nice the real power is this lets us do async rendering on the server and streaming and this is the exact same
[01:35:05]  thing react 18 and react teams been working on the last three years i implemented insolid about a year ago um so we're you know we're a little bit ahead
[01:35:15]  of the curve but um yeah that's gonna that's gonna be a topic for another stream i think but yes we aren't we aren't server-side rendering by default it
[01:35:22]  just uh it informed my design here uh anyways back to our context and our suspense example um where where i was going here is yeah we it's just a simple counter when
[01:35:35]  it's done we show it and the thing is all offerings just added suspense and called it a day right actually you know what i missed one vitally important part about resources that
[01:35:47]  i think we should talk about for a second in terms of suspense the reason that suspense works is i was talking about the counter right but that counter is not based on the
[01:36:02]  fetch like sure lazy in this case is really obvious like it's doing the fetch but it's based on the read of the signal it's not that the fetch happened it's
[01:36:13]  it's that the resource was read in our case greeting is being used right here beside it being fetched so in the sense we're reading greeting essentially like so it's there
[01:36:24]  but if i go back to my my resources example here and my point is it would be this read that triggers suspense that that that is that is that is the key key
[01:36:42]  important part here that's why there's context and boundaries you can put the resource in a store it can be used in 10 different places but it's only going to suspend
[01:36:56]  when it is read under that suspense context this this is actually one of the most important parts of of this this is why the inversion works it's not based on where the fetch
[01:37:07] ing happens it's based on reading the signal um so as a as i was kind of getting to i i can't go ahead myself by talking about how like all these
[01:37:23]  frameworks have have suspense but i i want to make sure that this fundamental point is is understood like if not if if if you have like i mean yeah let's just do
[01:37:37]  it i'm just gonna like spell it out here right um because you you can nest suspense to people and it's only the nearest suspense that actually matters again sound like something familiar
[01:37:50]  yeah yeah context right right it's only the nearest suspense so this does give control that's why when i was trying to talk about stuff i was like you know i was
[01:38:01]  kind of hesitant to say about the children the children in the children in the children in control in itself it's not completely that but it's important to oh damn it got
[01:38:13]  ahead of myself uh assistance it's an it's it's important to recognize that let's just context it has all those same characteristics which is funny enough the same characteristics we
[01:38:40]  want okay so here's the thing see i've got a suspense boundary here in the same component as i'm loading the resource maybe i'll put it above so it's
[01:38:54]  more visible here but i think you guys probably saw my point hello right it's never switching because there's no resource under here that that that read it like it doesn't it
[01:39:13]  doesn't care um that there's a suspense boundary here because suspense only listens for resource reads it doesn't matter that other data is fetching right whereas you know we could
[01:39:31]  replace this whole loading state stuff that i had here and just go let's just let's just do this if if you so wished it's the same behavior um because now
[01:39:50]  suspense is triggering because it is being read underneath so i think i think that's important so reading the signal triggers the fetch yeah i mean the resource here is like whenever user id
[01:40:10]  signal updates it calls fetch which is fine but it's actually reading the resource that triggers the suspense um if if i i hope that part makes sense i was trying to show
[01:40:25]  that if i just had a suspense component in here it doesn't care if the resource is fetching it's only cares based on this if we had some multiple resources going and
[01:40:34]  they're fetching you know back and forth it's only the particular resources that are read by that specific suspense boundary that are it's going to cause it to suspend yeah
[01:40:52]  that's what triggered this is what triggers the the counter i was talking about yeah yeah it's not user that triggers it's user id sorry it's it's similar it's
[01:41:09]  user id triggers it returns user when we start it's undefined right at the very beginning let's refresh right it's undefined at this point and because it
[01:41:21] 's undefined it's a null create resource doesn't actually even run um falsy values to the this cause it not to run i copied swrs like versell
[01:41:32] 's react query like library convention for this um but then once you start loading it you initially have no data so what happens is you click it it triggers it you know and that
[01:41:46]  triggers it actually flickers the signal we actually make sure the flicker the signal when you know the promise state changes which so when it initially runs it gets all the way
[01:41:56]  through here it stringer has the undefined but it doesn't actually uh care because there's no still promise it doesn't actually care this being null doesn't doesn't
[01:42:04]  matter it just kind of goes through acts as normal suspense doesn't happen nothing fancy just render it just basically renders nothing if you look here this div pre is actually here
[01:42:15]  right now and then when we update the signal that trigger flickers it triggers the promise so now when this is just this expression reruns it goes oh i'm i'm st
[01:42:27] ale i'm under suspense you'd use my contacts flickers the fallback which then goes oh my count is one show the loading state and um you know pull pull this
[01:42:43]  out of the dome and then when it's it's done stick it in stick it into the dome uh with the new value that that's that's essentially the the process here
[01:42:57]  yeah but without without the uh yes this is kind of true but without the swr without the actual stale of revalidation and one of the funniest things i
[01:43:09] 've been finding when i've been kind of building it it's like oh well maybe i should add a swr type level on top that's not what you actually want with
[01:43:17]  suspense i was actually kind of getting confused because i was like okay how did these work together because all the swr libraries are like we support suspense and i look and i'm
[01:43:26]  like okay suspense is fine but how do you do concurrent transitions and it's like no documentation so i asked on twitter and i suspected i knew the answer but the the guys who
[01:43:36]  wrote the libraries like rtk query the redux guy and tenor will uh tenor lindsay you know correct query they're just like we like our pattern
[01:43:44]  and they didn't really answer my question and i think the the truth of the matter is they aren't actually they don't swr doesn't really work with transitions it's
[01:43:54]  not actually the right pattern for it and i was kind of going like well what how are you guys going to approach this do you guys have a plan you know do you switch
[01:44:02]  modes let transitions do their thing and there's no answer and then dan abramoff himself answered and gave me exactly what i was looking for because i think he could tell
[01:44:10]  what i was asking and he gave me a deep dive on their plans for caching and whatnot it's all it's all in a twitter thread from i guess a week or
[01:44:19]  two ago uh off my profile but super interesting conversation and uh so like i think that there is a cache involvement and i want to refine how that works and and there is
[01:44:37]  the api but other than that the swr element itself i don't think is actually um something we're probably going to reproduce core because i don't think it's actually
[01:44:47]  the core behavior i think that's like a caching behavior that an app might want but it's not actually fundamental to how this works okay when you say counter you're
[01:44:54]  referring to the suspense component as children communicating similar context yeah sorry this is what i was saying that suspense is actually a provider and it's actually almost our counter provider that i was
[01:45:06]  using at the beginning of this session that's why i started with context it literally just counts the promises that are read underneath that you know registers them and increments and decre
[01:45:14] ments and when it's like okay all the promises are revolve result show show it so it's it's basically just an internalized counter essentially uh counter context that's that
[01:45:24] 's basically what suspense is it just counts the promises with the show components you can kind of picture it take the ship both basically both examples that i showed to this point um put
[01:45:35]  together is basically all all basic suspenses so that is kind of the core of of uh of like basic suspense that you find in the other frameworks right um the read part
[01:45:53]  is actually really really important sometimes people come in and go oh can't i you know can't i like uh uh you know can't can't i you know use a different
[01:46:06]  means like why do i have to use create resource and it's because whatever means you do has to convert into something that is read because we don't care if something is
[01:46:16]  fetching we care if it's used um so you know if it's not used you know count to zero we don't do anything if you know you might have multiple resources
[01:46:29]  so you know and multiple suspense boundaries and nesting we we want to orchestrate this all in a consistent way so let let me let me see if i can get to
[01:46:41]  um the transition example because i think without going to transitions yet i think this is actually sort of seeing this in practice right because this is this is what most frameworks do this
[01:46:59]  is they're like yay we have suspense so you know i've got a very simple router here switch match child uno dos tre and these childs are just they're f
[01:47:13] aking a sort of data load i've got my content this is our database you know dos tray you know our lookup table and we're just making a random promise for the
[01:47:25]  delay timeout and each child has a great resource where it where i'm not even using a first thing to drive it just it loads its data and essentially um the promise
[01:47:39]  sorry the problem doesn't even load the data from the promise just uh tells you what the delay was so it just tells you how long it loaded just for our sake and then
[01:47:50]  the content actually loads in right away it actually has nothing to do with it but just for for our sake for example here basically this is the resource read here to know how long
[01:48:01]  it took to that our arbitrary delay worked but essentially that's why you say uno is loaded in 161 milliseconds this time it's 578 this time it's 163
[01:48:11]  it's just a random number and basically we switch the new tab and we show our loading state while this resource is loading and when it when it finishes we we show the time
[01:48:29]  and we show its content so this is basically the the kind of core mechanism where you see people use suspense right and as i said this this create resource could have been in
[01:48:45]  a store that you're using it doesn't really matter where the fetch happens it only matters that this page needs to listen to this particularly particular time and you know this is
[01:48:59]  this is great i mean we already see great benefit with suspense and it's similar thing with error boundaries which i've gone to but it's the same idea um basically we use
[01:49:09]  context and then whenever an error happens with an execution i just crawl up the context to find the closest error boundary context and then to trigger its signal to to enable its view
[01:49:23]  it's again just a show component right um but more or less this is the basic thing but i i mean you could picture this loading being a bit nicer maybe like a skeleton
[01:49:34]  or something but is this really the best ui experience you could be having here don't get me wrong a lot of apps work like this this is if there was multiple
[01:49:45]  promises and resources going if having a skeleton or something here is way nicer than um having like a dozen different spinners coming in so coordinating this is already such a big win
[01:49:59]  but you know can we do better and i might not be able to get well let's see how far we get on in terms of the implementation mindset here but the key
[01:50:15]  to this is transitions and transitions are really the powerhouse um behind where like suspense is fine in terms of like just loading state but transitions are much much harder to do and
[01:50:39]  in fact currently there's a there's a couple small frameworks like uh um free which are another uh reactive or sorry another read on library maybe a couple odd outliers but generally
[01:50:55]  speaking other than the one or two that you've probably never heard of solid and reactor the only libraries that support transitions preact doesn't inferno doesn't view doesn't and
[01:51:05]  in fact they went on the record saying that you know we don't think the fiber architecture or or uh like uh concurrent rendering is worth it right our stuff happens fast enough
[01:51:17]  and here's the thing they're kind of right and as you guys know solid's pretty fast so if they're saying they're fast enough i'm sure solid's fast enough
[01:51:28]  um but why did i implement transitions and it's this very demo uh something very similar to this like i don't care about the time slicing stuff and i i i can
[01:51:43]  get into time slicing we'll we'll see but the reason this is so freaking powerful is because of this you you guys can't got it got a feel for this this
[01:51:56]  uh transition in this field the thing is this isn't the way the browser works i mean you might think it's the way the browser works and probably and and if you take
[01:52:09]  a long time the browser does work like this you see this flicker of white you see this regression but you know i work on mpa frameworks for streaming and trust me
[01:52:18]  you don't you don't see this happening you know as long as there's content the way the browser works oh that's that's hilarious it's like the style suddenly kicked
[01:52:32]  in okay okay okay yeah it's weird the styles weren't loading i guess initially okay browser works more like this notice when there's no more loading state anymore i click the
[01:52:50]  next thing but and it still takes time but the known loading state well that's not completely true if you if if we get one that's significantly longer you saw that it
[01:53:06]  kind of grays out like there i don't know if you're catching over the stream but essentially i gray out the text if it takes too long to load to to give
[01:53:14]  you some kind of indicator but generally speaking why fall back to a skeleton state like our loading when we already can show you what's already on the page this is much nicer than
[01:53:26]  most of the time and this is the way the browser works it'll keep on showing you the current page until the new page loads as long as it doesn't take too
[01:53:32]  long that's why we don't see the white flickers that we've seen in the past now don't get it wrong suspense is here we've load the page see that
[01:53:40]  floating but when we transition it's just all smooth and this is um this this this this is this is this is the why i i saw this demo and i'm just
[01:54:00]  like okay i need this i mean don't get me wrong you can do this lots of ways but it all involves the parent making the decisions like going okay be aware of the
[01:54:11]  loading state you know and you know that's fine and you can orchestrate at the router level and all this but why do we love suspense that inversion of control don't
[01:54:24]  worry about it you know if the parent if if the child needs to load let it do its load and we'll just take care of it i i saw this and i as
[01:54:32]  i said this this was this is a this is a no-brainer this this improvement beats out any fancy um transition animation you're going to put in you know you
[01:54:43]  know i i was playing around some hacker news demos recently like doing some size comparisons and stuff and i was i was doing one of the view ones and i was like oh man
[01:54:52]  like they they really nicely do this like cool like thing when you switch between the different hacker news pages and it's felt and all this and i'm like oh that's that
[01:54:59] 's great but honestly i give that all away to have this behavior because it feels natural it's not distracting and it just works it just scales and this is as i said
[01:55:10]  what the browser does it just it's it's really well thought out behavior you know you can add some pending indicator if you ever watch when you load something takes a long time
[01:55:19]  the browser maybe they put like a little strip along the top and i have some demos probably somewhere that i can pull out actually no one let's just let's let's let
[01:55:29] 's look at the uh let's look at the more uh suspense tabs this is this is this is our classic one here this one is this it's the same example except
[01:55:43]  i added a global loader in here um come yeah this is when code sandbox is like did i crash code sandbox last time let's add more fuel to their fire this
[01:55:58]  always happens to me when i try to do a demo with code sandbox it just like i do some bad stuff i guess with code sandbox i like crash it it's it's
[01:56:07]  not gonna look for me now obviously we'll let it do its thing and see if it ever comes back um but where i was getting at you can you can you use
[01:56:21]  this pending state a different way and how do you use transition well you use transition or start transition but this is the original and basically it gives you two methods back it gives you
[01:56:32]  a pending which is just a signal to tell you like hey i'm doing some work and start which actually wraps the transaction and that's the thing use transition it's like a
[01:56:40]  different kind of batch it's it creates it's an it's it's like an async batch this is how we know what we care about for the transition it's not
[01:56:48]  everything it's any downstream change that happens because of this change so this way we can handle it in isolation and this start transition so it happens sets a tab and that sets
[01:57:04]  this tab sets this whole thing in motion because it changes which tab is selected which changes and then hits a resource now if your transition never hits a resource read under a suspense boundary
[01:57:18]  no harm no foul it just continues on but if and it doesn't even matter if a resource runs again it matters only if it would cause something to suspend and once it
[01:57:30]  causes something to suspend the resource goes okay i can't just let this pass you know i need to actually hold on to things and this is where all the complexity comes in
[01:57:46]  right because while it's sitting there holding on to things what happens if you click on the page right come on load really cosenbox is just done for me today this sometimes
[01:58:00]  happens when i have like other windows and debuggers um you know like in a breakpoint like sometimes like sometimes but like this is not what's happening i closed everything
[01:58:14]  before this they they they literally just all right well thank you code sandbox let's try a different demo um or open it again it's like these aren't real errors
[01:58:43]  no okay um this one okay yeah i just hit the the code sandbox is just not not happy all right all right don't need you code sandbox let's continue um but
[01:59:05]  essentially and this is hard to visualize uh definitely is we we actually need to be able to update the reality in front of you and code sandbox actually have a whole bunch of different
[01:59:24]  suspense demos more than i have in here which actually show that concurrent the the that that those updates happening um and it's it's the idea is actually we fork reality when
[01:59:38]  we start the transition and if nothing else happens during that synchronous execution we can just kind of replace it in and move on with our day but if if you if it gets held
[01:59:49]  like it does read a resource under a transition then we actually have to stop execution in a sense we finish doing all the computations and get to that point because um technically
[02:00:00]  speaking our resources get handled during the computation phase not during the effect phase which makes sense because effects are happen after render and by after render it's too late but essentially we don
[02:00:13] 't run the effects like hey stop don't run the effects and don't merge reality back in and so we actually have two realities going at the same time and it's
[02:00:27]  a little complicated obviously explained mechanically but you can continue updating what's in front of you and if it's under transition it will continue applying only to that offshoot transition reality
[02:00:40]  but if it's not we'll just apply the change to both realities and the reason for that is that means it's whenever the other reality merges it will have the
[02:00:50]  combined changes of both realities so that it can just replace the reality that's there and yeah i mean this is why you know concurrent rendering is kind of crazy and react has a
[02:01:02]  slightly different model what they do is they they have the same kind of render off screen of the vdom and then you know they just it's actually very similar in that
[02:01:13]  sense and and then if there's a change they just re-render that vdom until they finally get the the the the updated vdom and then they merge that back in
[02:01:23]  in solid's case we don't do diffing so we we just kind of hold our elements and apply granular changes off screen essentially um so we actually while no the the
[02:01:38]  trick to this whole thing is no existing effects will re will be rerun during um during that phase while it's hung but any new render effects will run during that time so
[02:01:55]  we actually create the new dom nodes that are going to be coming in like in these tabs but we hold all end user effects and any existing render effects or um end user
[02:02:05]  effects related that change will not will have also been held so in so we actually again like i was talking before create that future tree um preemptively um and in so
[02:02:20]  even though it's not pure pure in a sense it's not it's also not the effects aren't something that are seen from the outside world so if we actually cancelled it
[02:02:31]  we could just throw it away sure we created some extra dom nodes and that's wasteful but again you're waiting right so if if we're being optimistic here what ends up
[02:02:41]  happening is we actually did the dom work ahead of time and when the final stuff comes in we're just inserting it you do almost no it's the same continuation pattern that
[02:02:54]  we do with the normal suspense that we're doing with the concurrent suspense it's just the little it's just you know oh where you use the data that gets updated if if
[02:03:01]  you had a bunch of stuff under that suspense boundary you actually do that rendering up front um and how do we do this right because as i said react re-renders
[02:03:12]  the whole tree every time we can't do that it's granular um and that's the crazy part and there's probably no way that i'm going to be able to show
[02:03:21]  you but we actually fork the reactive notes the the signals and the memos actually have alternate versions of themselves and if that sounds like quantum physics you know i i've i
[02:03:34] 've i've i've thought about uh um you know naming it along those lines because that's what we do you know we have all these atoms reactive atoms and we we create
[02:03:44]  different versions of them to represent different realities you know and well then you know you get you know the reality you observe is yeah i i don't need to get more into
[02:03:57]  quantum but you know if there was if there was a constant of uh quantum reactivity i you know i think this uh qualifies yeah exactly so um yeah that that i'm
[02:04:15]  trying to go through the code here would be insane i think to kind of trace through but i just want to understand high level what transitions are and i'm gonna i'm
[02:04:27]  gonna give a little bit more explanation that's mechanically how transitions work so you can actually think about it re-rendering that screen off you know re-rendering this
[02:04:35]  view child off screen in fact rendering all of it and it when the promise finishes it only has to update this text here and insert the notes that it already created but um
[02:04:49]  this again is why i didn't i view concurrent rendering as important because of this navigation thing because you know you can load the next page do it in parallel without affecting what's
[02:05:07]  in front of you but it has nothing to do with time slicing and whatnot time slicing is is the other part of the equation and i i think that it it has value
[02:05:24]  but i didn't see it at first and time slicing was actually something that was really hard for me to to see because so if you have this perfect continuation like solid does you
[02:05:40] 're you're not doing any extra work when you pause you know like you know with react you like if you pause and then you restart again you got to do a whole
[02:05:49]  bunch of extra work so i was like you know who cares so i but i was like no yeah yeah this this is super true and why i don't like swr
[02:06:05]  like as a pattern here because before i get into to time slicing you you guys can kind of see what why transitions are better than swr in a sense like can you picture
[02:06:19]  navigating showing the old data and then having the new data just slide right in like that's the swr pattern and i've seen it on twitter too and it still j
[02:06:29] olts me to this day like i i prefer when they're like oh we have new feeds but when you load something i don't care how quick it is showing me
[02:06:38]  the old data and then showing the new data i find it disjointed um i would have rather if you just held the old thing a bit longer like i i actually did
[02:06:49]  a i went around my workplace uh and i showed them this demo and it was an older version which did have the old behavior falling back to the loading screen eventually but if you
[02:07:00]  ask someone and show them this experience maybe with a better pending indicator than this gray flash out but of course code sandbox is not being my friend today um i could give it
[02:07:13]  one more shot um and you compare like this nice solved version with the reset version and ask them which which one loads faster most people will tell you that the sec like that
[02:07:29]  this is slower and that um that this this one actually loads faster they'll be like yeah this one loads faster clearly and i was like no it's it's random it's
[02:07:39]  like this it's the same i and swr does the the exact has the exact same problem with i don't care if you're showing it's on your like it removes
[02:07:53]  trust you kind of go am i seeing the old data like the thing with transitions is you know that if someone's going to show you the data it's the up-
[02:08:02] to-date data right i mean there's arguments for caching but i don't think i don't think that should be the built default i think the default should be like
[02:08:10]  like this and then if you have a need to cash and stale like sure fit your use case but by default this is a much nicer experience um so yeah let's
[02:08:23]  let's let's i think the probably last thing i'm going to do for the stream today is talk a bit about um what do you call it um time slicing because
[02:08:37]  i i i've actually added it to solid in solid 1.1 as an experimental feature but it took me a while to get here because i already had um this idea of
[02:08:49]  create deferred uh creative crate deferred um which is a memo that uses prior prioritization and the best way i can put this is do i still have my set time
[02:09:05] out example yeah here's here here's my my set timeout example now this is a simple example here because we're just doing this and we're showing the fallback
[02:09:21]  loading state so people know that it's it's stale but picture picture if i mean we i'm going to go back into set interval mode um and i'm going
[02:09:41]  to oh sorry to put account in here just why not and here's the thing this is a simple example actually you know what i think i think i don't think this example
[02:10:06]  will scale the way i want it to so i'm going to i'm going to switch examples here um and i'm going to open something up in my vs code environment
[02:10:15]  so give me two seconds while well i i load up a window for that but the what i'm trying to get at is if you had lots of those counters enough that you
[02:10:26]  wouldn't actually need to schedule changes a simple timer would would cause could cause tearing um and by that i mean that uh if if you decided that you needed to stop work
[02:10:45]  essentially like if you decided that it wasn't worth um it wasn't worth doing like like basically you needed you're doing too much work more than you could fit within a
[02:11:01]  render frame you you suddenly have this issue where um you could be showing inconsistent state you could be showing like some numbers like pretend to add you know a dozen of these counters
[02:11:22]  or whatever you could be showing some numbers that are at one and just other ones that are at two and the perfect example for this um is the uh sir sir pinski
[02:11:33] 's uh triangle demo um let me see if i can open that in a browser here um to show the show to show this one um okay let me get it in find
[02:11:49] er and then see if i can get this yeah okay i'm gonna copy the url you guys might have seen this demo before let's see in this one see lots
[02:12:08]  of ones and twos and threes right and uh i'm pausing it for a second kind of looking over here but okay so we have we have all these numbers changing
[02:12:21]  now the browser can handle rendering this um this is not a hard amount of work to update a whole bunch of triangles some people made this demo and were like look i can make
[02:12:34]  10 000 circles and whatever and a faster than react that that was never the point the the real point here um has everything to do with with with what end user computation work
[02:12:49]  like what happens if uh if you if if you uh how to put it if if um you you're you're you're running arbitrary code in your you're you're
[02:13:02]  going to do with your components that that's actually expensive um and i'm going to show you exactly what i'm talking about here okay what am i looking for so i'm
[02:13:20]  going to switch which screen i am showing right now and we're going to look at the suspensky triangles code here okay so it might be just easier to share my
[02:13:42]  whole screen because i want to go back and forth between this okay so this is the this security triangle example and i'm just going to um run pm run build and make sure
[02:13:58]  that we're off to date and then refresh and here is our demo there's nothing special about this solid could could could could render this you know easily without even trying now
[02:14:13]  the sake of this uh example is is what if we had something expensive can you guys hopefully can see my bs code here but i'm going to make an expensive memo
[02:14:28]  that has a timer in it and here's the thing i think after i show you this you're not only going to get why you're just i think you're going to
[02:14:41]  understand why react does it not just why i found this may be considerable in solid but so let's let's look what happens i mean this is if you should be
[02:14:54]  seeing it step because now we put this delay and every time the number changes we do this it's actually exponential because each parent and child do this i put this literally in the
[02:15:08]  triangle code if you if you want to understand the the layout of this app the triangle demo app is it draws a triangle and each triangle draws three more triangles unless it gets
[02:15:22]  to the the the target point where it draws the dots so essentially this memo that gets passed to the child is compounding so maybe the the top node has this delay and
[02:15:34]  then it it basically passes that delay on and on and on and in the case of react it's the component render cost but in the case of solid where we flatten things so
[02:15:44]  it's only the final dot that's actually doing the work like it's only the final like uh text here that's doing the actual work um we're still compounding it
[02:15:54]  because each lab stage added that expense so by the time you get to the bottom you've you've kind of you've compounded all the parents so sure solid in this
[02:16:04]  case isn't re-rendering all the components in between but we've we still take the exact same cost at the leaf nodes um so what i you can see that this
[02:16:16]  is just horrid so my first thinking of solving this was was adding something solid called create deferred and i actually copied portions of the react scheduler and i was like
[02:16:28]  okay well let's just do this yay create deferred and create deferred completely uh i have to build it first right sorry i guess create deferred actually solves the problem
[02:16:45]  worked beautifully now this i was fine with this and i was like screw time slicing no one needs time slicing and in fact create deferred is really powerful in that if this was
[02:17:02]  something that the system couldn't render like uh you know something 3d or expensive we're actually granularly breaking up the work because by using crate deferred um we're
[02:17:18]  it's like it's using request idle callback or a version of it essentially like a more optimized version that react came up with um but it's also how should i put
[02:17:28]  it it's because it's solid we're just doing that same pause and resume so if one dot gets the chance to run then it updates and if another one doesn't
[02:17:40]  they can all independently update right we don't need react fiber because our stuff's already fine-grained so uh and it's end to end right if you're just if
[02:17:53]  you're doing some kind of timeout and based on like a queue you know you basically get each separate computation runs all the way down to that final effect so each one can
[02:18:05]  update independently as you have time and obviously my computer is fast enough you're not seeing this but this actually waves out like if if it runs out of time in its schedule
[02:18:16]  it actually kind of flushes out like a like a wave but here's the problem at any given snapshot this can be inconsistent do you know i mean because we're opting
[02:18:30]  into that inconsistency but the top half of the triangle might be at two and the bottom half might be at three and i don't mean like obviously you can reproduce
[02:18:38]  that with a break point i don't mean i mean you can interrupt the synchronous render obviously but i mean from like an asynchronous standpoint you could actually say like the settled state that
[02:18:51]  others can observe can observe can be glitched and as i said if something's so expensive that the renderer can't handle it like some 3d or something you have
[02:19:02]  to do this like you like there's no other way like you can't defeat the physics of it all if that makes sense right because um like what what what can you
[02:19:18]  possibly do um because no amount of scheduling is going to save you from the work you have to get done but in our example here it wasn't the rendering that was expensive it
[02:19:32]  was the calculation so react was like well i actually i only want to i want to do this but i actually only want to present the consistent view and that's actually trick
[02:19:47] ier to do because when you when you kind of think about it like you have to be able to interrupt you know or like be able to stop you know pause like like i
[02:19:59]  was talking about before but you also can't apply the effects until you get to a point where everything's settled we already have a mechanism that is based on only running the
[02:20:11]  effects when everything's settled right trans trans transitions right so i was like okay fine let let's let's let's do this so i i did add start transition and i
[02:20:28]  because i think it's because it's kind of uh i'm big you guys know on on code splitting right and the thing is start transition or use transition i want built into
[02:20:40]  all the design systems into every router if the end user never uses suspense we can code split the whole um the whole thing out like okay like how should i explain it if if
[02:20:51]  you never use suspense or transitions we don't need any of that code and solids the way it's built for tree shaking can actually remove all that code and you might be
[02:21:00]  asking like how the hell can you do that rollup and es build and a few of them are so freaking smart that based on constants they can actually rewrite your code they can
[02:21:11]  actually go oh that branch can never be hit and in so our transition code our concurrent rendering code can be actually peeled completely out of the core like if you just don't
[02:21:24]  use these features you you the your compiled code has the concurrent rendering pulled right out like it's like i mean there's a few extra checks because there's a few places where
[02:21:34]  it's like not smart enough to do the if statement but generally speaking the the whole thing just gets ripped right out and but the problem was i actually want people to use
[02:21:46]  transitions um you know in their in their in their libraries just because um it should be hidden the end users shouldn't be the ones thinking about the transitions the router should have it
[02:21:57]  baked in and solids router actually does have it baked in but what if if you never use suspense we never want to have concurrent transition code and again solid's smart enough that if
[02:22:07]  it goes okay you never imported suspense never used suspense anywhere we can still rip that transition code right out of the core and your bundle will be smaller you won't actually have
[02:22:16]  it even though the code for transitions is right in the most core part of the reactive runtime right in the course like running thing that code just gets dead code eliminated but what if
[02:22:27]  you use um suspense and transitions i didn't want to add the scheduler the scheduler is the biggest chunk of code you know how solid is like 6.3 k
[02:22:37] b most of the time you're not actually it solves real size is like it's it's smaller than that smaller than preact generally um the scheduler is actually one of
[02:22:47]  the biggest chunks of code so again using this is why there's this enable scheduling because using that same kind of code thing if you never call enable scheduling or pull and create defer
[02:22:57] red here you never if you never use either of those the scheduler never comes in so even if you're using transitions and suspense uh we don't have to pull in
[02:23:05]  the giant scheduler unless you want to use the scheduler and as i said i don't know if it's worth it but i was like let's let's let's
[02:23:14]  do this right so what if we you know i'm not using um the use transition here start transition is just the shortcut for doing that but what if we just said on
[02:23:31]  every interval wrap wrap this this uh this set the seconds which is setting that number in this transition right and let's just change this back to create memo just some work that
[02:23:45]  gets done right and now we use start transition and we enabled scheduling and a minute ago this was this was choking right but now we get that same smooth thing and this is in
[02:24:02]  a sense maybe better than create deferred because there's no tearing there's no potential tearing you might be thinking well if this is just a fancy debounce once you ever
[02:24:12]  get stuck where it never updates if it's slow enough that's true and that's true of react react um you know they might have a heart there's a hard limit there
[02:24:19]  somewhere but basically if you just keep on piling in on the transition react 2 can't actually handle it like it it it essentially is just kind of debouncing so there
[02:24:32]  are still limits but why is this so powerful well look at what i did this is just some normal code and you're just running it and somewhere up at the top you
[02:24:46]  know where that change happens the transition is so sure i knew that this was slow and i optimized it with create deferred maybe i could do some work and the truth of the
[02:24:58]  matter is i kind of knew it slow because i already put in a crate memo do you know what i mean like and that's a key difference between sol and react you
[02:25:05]  already you kind of already know the points that are slow so maybe you can just optimize at those points like using create deferred or making the decision but what's cool about transitions
[02:25:14]  and using the the scheduling slices somewhere at the top you just put start transition and then it just magically fixes all your expensive stuff like if something's too expensive it just fixes and
[02:25:24]  i think this is what they were trying to solve at facebook um they were they were essentially um they were essentially um they were essentially like i don't know what facebook developers
[02:25:35]  are doing they they they you know they might be doing something really stupidly expensive now if i just tell everyone use transitions i can just fix all the end user code you know
[02:25:45]  if you're doing something stupid your app still behaves properly right you don't actually need to um go in there and you know optimize or you know death by a thousand cuts
[02:25:58]  it just works you know it's kind of attractive right like i i know i i work for ebay too you big company not everyone has the same experience level you got
[02:26:12]  legacy code bam you know suddenly you have the magic solution that it doesn't fix the performance problems but you make sure that things are never terrible right and i i think that is
[02:26:26]  is super um i think that's super powerful i i i i i'm not sure whether we need it because i said one caveat with our approach here um is that essentially
[02:26:41]  and it's worth kind of calling out is is that you can only optimize uh the create the create memo um stuff essentially because uh just a second sorry solid doesn't rer
[02:27:02] un components and if you pull that stuff into effects it's too late like if you just rendered that slow computation inside of uh close this for a second if you just rendered that
[02:27:18]  slow computation inside of uh um you know something in the render tree like you just hoisted it and didn't wrap it in a crate memo it's it's happening too
[02:27:28]  late in the render cycle so we do need it to be in a crate memo which means you kind of have to already identify that it could possibly be expensive so that kind of
[02:27:37]  removes i guess some of the benefit but it's also just coding standards with solid you that's when you use create memo so that makes sense but um you kind of see
[02:27:47]  that if you know if your app scales to a certain level like this is a really easy automatic way of doing it as i said that that that the fact that we already know
[02:27:58]  what's expensive kind of makes me less on board of whether we need it but it's a cool tool to have and i want to clearly show you the difference between time
[02:28:07]  slicing and current rendering even though you use concurrent rendering to do time slicing the real value is actually the navigation story like the tab story that i that it was that i that i
[02:28:18] 've been that i've been showing uh along this whole this whole time period um and code sandbox is just not gonna play ball that's so annoying um because i i had
[02:28:31]  some really good examples i want to show you guys um that's fine um so uh yeah i'm sorry that i had to share my screen differently so i haven't been looking
[02:28:48]  at the questions let me do a quick catch catch up and see where people are at um yeah yeah yeah i mean to be fair the the challenge if you picture the ways
[02:29:06]  react scales and the way the re-renders happen and and whatnot this this mechanism makes a ton of sense right because they can't continue as easily as we we can
[02:29:17]  right they they don't have that same ability to just you know kind of pick up where they left off and you know the larger app gets the more compounded that feels but
[02:29:30]  also when when you work on a giant app isn't it cool to have just like an instant way to to make sure that no developer causes the whole page to snag
[02:29:41]  to a fault um yep fancy debounds yeah it's interesting though but the one thing that i'm going to give the react team some credit here and i i think it
[02:29:56] 's important that we we we we do i wouldn't have explored some of this stuff if it wasn't for them um as i said i work for ebay our problems are
[02:30:09]  slightly different problems um so you know we're exploring different areas react has seen the extent of what a large single page app is even if i've been working in single page
[02:30:23]  apps for a decade um it was enough to like and you know medium size large uh like large enough that you really have to think about maintenance and stuff it's not at the
[02:30:36]  scale of something like facebook right where you you your performance issues considerations are systematic um dom ganaway um the creator of um inferno he worked on the react team for
[02:30:51]  a while and if if you if everyone's like oh don't they use inferno facebook and they actually do in some places but essentially they're doing tests they're like well
[02:31:04]  what if we just replaced react with inferno or something like referno you know inferno is way faster it didn't do the it didn't do enough you know uh
[02:31:17]  part of it might be the way that the code is had been written you know dom went on to make stuff even more performant than inferno i talked to him a bit
[02:31:29]  and i have no doubt in my mind that he he made stuff in the same ballpark of performance as solid he just never released it um using the vdom and that
[02:31:38] 's why when that that blocked on thing came out and you know those those kind of things i was so big on promoting it because like that's not the bottleneck right there
[02:31:47] 's fast libraries and slow libraries don't get hooked up on the whole vdom thing but execution model consideration ux like there are challenges to just pull that performance library and
[02:31:58]  you know breaking changes that would have been required for react and i think they realized that the raw performance the stuff that you get from like solid or inferno svelte isn
[02:32:10] 't enough to address their problem which is slow systematic end user code and someone you know being a little bit cavalier or whatever might be like well why aren't you guys
[02:32:23]  using reactivity that that would have kind of solved it maybe but like this is just a different scale like as i said dom actually said when he put inferno in place and
[02:32:38]  they ran the tests it wasn't faster across the board than react reacts might not be beating people in the js framework benchmark but in other and it and you run winning a
[02:32:49]  raw performance but in other more complicated ui scenarios um they actually perform quite well like they've built it to fit facebook so you know someone in a small app can go like
[02:33:03]  haha you're so big you're so slow but it it's not really comparable and i think this is something for people that really unders understand even about um solutions like react
[02:33:13]  server components those are for facebook they're actually trying to bring marco like features into react essentially you know for for e-commerce like ebay we needed that stuff from day
[02:33:27]  one that was like a non-starter but you know facebook was still php back in those days and they had a good php solution they switched to react and then
[02:33:37]  it's like oh you know there are trade-offs here um but to understand is facebook's not a e-commerce site so they don't need the fastest loading time react
[02:33:48]  server components aren't for the fastest loading time they're for better separation almost like micro services you can think of they're for you know reducing after the fact client loading like there
[02:34:01] 's a lot of there's a lot of considerations when you have an app as big as facebook and like people are going oh like here's the solution for e-commerce
[02:34:11]  here's rscs or whatnot that's but that's not that's not really it like i mean it's it's nice i think the real benefit is the api
[02:34:17]  thing i think next.js should be excited about rscs because now you don't need graphql essentially you you can get per component level api stuff built right
[02:34:27]  into your tree and you don't have to worry about this kind of stuff but it's not it's not the same thing and i think you have to look at the
[02:34:37]  use case for facebook i bet you for facebook's um use case react is a lot more performant than everyone thinks it is and because the people working on a team are
[02:34:48]  brilliant and they are pushing the boundaries and i think when people kind of cheer at it it's kind of it's an unfair assumption in terms of where where things are at um
[02:35:01]  so yeah i there's a long-winded explanation but i i i have a lot of respect for the work being done there and i see some of the benefit obviously
[02:35:13]  i i get to enjoy the fact that you know something solid has such incredible raw performance but and that will probably be for useful for any startups small mid-size you know even
[02:35:26]  mid-large size but as i said we do we have no clue how like felt would would work at facebook uh scale um twitter's web client is a good show
[02:35:43]  of of react work yeah yeah i i i think twitter is a good show of what the average desired react thing is because i twitter is in some ways it's not as complicated
[02:36:00]  as facebook is there's less stuff and i think that's the target range in which of a single page app is actually the best you know and i think react is a
[02:36:11]  good fit for for for that size and if if your startup is trying to be something like twitter that's like it's a good choice and actually my previous startup was about that
[02:36:22]  sort of size it was like a private social media twitter instagram kind of thing and i built solid for that task i i think solid is actually ideal for like the twitter use case
[02:36:34]  um you know it's scaled to be it's consideration it's a little bit bigger than spelt in terms of its target range of where it wants to be used um
[02:36:43]  that's why there's a lot more consideration given to scaling but you know that that's its sweet spot as i said i think react sweet spot is actually even a little bit
[02:36:52]  bigger it's it might be facebook um then again maybe that's only when you get to react server components and all the future stuff that we haven't got there to see
[02:37:03]  yet um this was a question i'm not actually sure what what you meant by this um relay was i mean i feel like rscs were actually inspired a bit by relay
[02:37:20]  mostly that graphql and relay are super powerful and it actually solves the problem and when i saw rscs i was like don't we already have graphql
[02:37:28]  to solve this like that was my thinking because i was like you can paralyze fetching you can you can inverse the the control like relay's pattern of using fragments and having
[02:37:38]  the pages like the whole the whole approach that react's been doing here has been like looking at like let the child say what its needs and dependencies are this inversion you see in
[02:37:49]  suspense this inversion you see in relay is a lot allowing if you want teams to move fast you need to give them autonomy and you i i mean you don't really want
[02:38:02]  micro frontends i'm sorry like it's kind of like web components like that interrupt has a real cost and especially for server-side rendering go most micro frontend solutions are
[02:38:16]  not good for server-side rendering like they're they're designed to like replace stuff in the client which is fine in some cases but if you need to you know consider
[02:38:26]  performance holistically um there's there's more to that and if you've got a big react you know equals i'm sure they have other ways to split code and as a
[02:38:38]  server compose probably help a bit with this too um like you need these things to work independently and you know as i said relaying graphql is one way i think
[02:38:50]  react server components is is another way that and it's very attractive i said for stuff like next because then you don't like gatsby built graphql right in and
[02:38:59]  i think that was a smart move because it kind of removed that complexity but with react server components that that kind of load function mentality goes away like even solid we have that
[02:39:12]  load function and i've been doing stuff that i realize now is similar to blitz again i've never looked at blitz but apparently we came to the same conclusion um r
[02:39:20] scs is like a way of systematically solving the same problem um in a really kind of generic way uh we we can't do react server components in solid exactly um because
[02:39:35]  we can't diff so but i also arguably say that we can achieve the same thing in a different way um and that's really where my quote-unquote partial hydration exploration
[02:39:49]  is going to go in the future but um i i think that this is uh essentially the the where things are heading in terms of this um i'm actually not sure if
[02:40:03]  graphql like i think there's enough it's funny it's on the big react server components are beneficial on the smallest uh setups and the largest setups and i find this
[02:40:16]  very often the case and this is going to be a bit of me tirading on kind of one of my thoughts on on kind of scalability but often when when you
[02:40:23] 're in the course of scaling something the best solution for the smallest case is also the best solution for the largest case but it's not the best solution for the middle case and
[02:40:32]  this is why like when startups and people try to copy the larger case before they're ready it's the wrong thing and it's unfortunately had to go through this whole progression
[02:40:41]  to get there because react server components are going to be amazing for a small app or whatever because you you won't need an api you'll just kind of like build your
[02:40:50]  app and then go oh here's some server components and i'll load my data and you know it'll feel like rails all over again you know it'll just be easy right
[02:40:59]  get a nice orm in there you're done but once you get to the next step and you're like oh crap i have a mobile app now i need to export
[02:41:08]  that api you know and i'm going to be using anyways and then i want to be specific i'm going to i'm going to create graphql like that that
[02:41:15]  it's funny i worked for a startup and we built our own orm and i was kind of joking we created something very much like graphql back in 2013. that
[02:41:24] 's how i got that's how i learned about asts and stuff i basically made a universal query language based on mongo's query language that could query um sql
[02:41:31]  databases and mongo databases at the same time and then you could serialize that into a query string and then the back end could convert that back into json which you
[02:41:41]  know we we use the dot notation which is how you do nested models in mongo to do relationship models in sql as well and that was like my big work
[02:41:50]  making these uh being able to query deep query sql through dot notation and relationship schemas um so yeah basically trying to solve the same problem as graphql back
[02:42:03]  in 2013 at the startup i was at and what i'm getting at is like this is a real problem and you and you want when you're supporting multiple front ends you want
[02:42:14]  the ability to kind of extract that api and make it reusable the problem is when you get to the next scale like when you get past that and you get to like facebook
[02:42:23]  level is yeah sure you do you have lots of apis um you know and you have to consider governance of of all those pieces but it gets it gets it gets cra
[02:42:32] zier than that because you also have multiple teams trying to build this giant front end so it's no longer as simple as abstracting to the api it's almost impossible for
[02:42:45]  the api to to kind of fit your needs and relay is a really smart approach to doing that but you have so many different considerations on data sources and uh governance and
[02:42:57]  like inter-team things that going back to almost that simple model but like react server components but doing it at a like larger scale where you instead of having one you
[02:43:10]  you know one kind of app you have multiple it's easier to scale the smaller solution than scale the mid-range solution and i i often as i said this this happens a
[02:43:24]  lot i often i often i often uh kind of credit this also to uh um uh i just might just do this i i often also credit this to um things like component
[02:43:39]  refactoring like if you have how to put like a you start with a single component then you get more requirements and then you make that component more complicated to fit your requirements
[02:43:51]  and and then you may be using new places and you add more features and you and it gets more and more complicated at a certain point the right solution is to break that component
[02:44:03]  to multiple components and you don't want to do that prematurely because you might break it up wrong but if you what you'll often find is that when you get to
[02:44:16]  the end and you do break it up you end up with a component very similar to the original component you started with so you almost go through this dance where you started with a
[02:44:24]  simple component did a whole bunch of crap to it and then have to undo that crap to get to to a certain degree to get it to where it needs to do be
[02:44:35]  to scale and as i said my experience with startups and with you know the scaling other things is this pattern happens over and over again so you might be thinking well why ever do
[02:44:45]  the middle step well the truth matter is if you never get to that larger step the complexity of breaking it up isn't worth it those boundaries give you so much uh extra cost
[02:44:57]  and extra management so i've also seen companies try and go from one to three and they're wrong i don't know i don't know if there's a good answer
[02:45:06]  there sorry this is weird because i'm talking both about code refactoring and large scale um scaling so take it for what it is um i don't i don't
[02:45:19]  know if i have anything more to share specifically about uh suspense right now and time slicing because my code sandbox examples are apparently never going to load i'm going to try one last
[02:45:32]  thing and see if this is just like some weird video card type thing where it's just being really dumb because i was trying to do it full screen on a different window
[02:45:44]  but because it's getting stuck on transpiling i do not think that is the case um yeah no code sandbox is just ruining my fun today um now is probably a good time
[02:45:59]  for anyone to ask any last um any last questions or whatnot otherwise i'm probably going to end the stream pretty close here um i know there's at least a few of
[02:46:09]  you here which is uh which is good it always helps i i some guys know i used to play in a punk rock band for years kind of pop punk band and it didn
[02:46:20] 't matter how big you got or what you know you know how good your typical draws were you know um especially in your your area you know sometimes when you're like in
[02:46:34]  large urban metro areas and you end up playing a little bit more on the outskirts or stuff you always end up at that show where there's only a a couple
[02:46:43]  people in the audience and you have this challenge um where you uh you you you've got to rock out as hard as you can because it's just lame for everyone if you
[02:46:56]  don't but the funny thing is like it's kind of like dancing by yourself you know you kind of feel uh naked almost like embarrassed but if you don't do it
[02:47:05]  you just aren't you aren't doing the service so to speak and uh i think i think that was uh but it's so much easier when you know it doesn't matter
[02:47:15]  how big the audience is people are into it and i think i think for some reason uh live streaming made me think of that because i i played hundreds of shows uh in
[02:47:27]  the past when my band toured across most of canada um a couple times anyways any thoughts using solid mutation observer um yeah i mean depends what you want to do i actually
[02:47:39]  had some fun here because early days in solid before i had the life cycle um for connected disconnected uh sorry for like create effect to run after connected to the dom i yeah
[02:47:52]  i used to just tell people like do a set time out you know like if you want to do an on mount just before i added that scheduling because create effect used to run
[02:48:00]  you know all rendering was create effect and all ran synchronously and there's no scheduling um in sort of you know a year and a half two years ago and i i i
[02:48:10] 've just like set you know you call set time and for some reason that bug people i use this for years with knockout and never had any qualms but you know people
[02:48:19]  are like you know it felt dirty so um i actually came up and again i have a code sandbox for it that won't load but i i use mutation observer as a
[02:48:29]  way of observing uh dom i basically added uh a faux event and jsx had no problem handling obviously i probably wasn't using typescript back then i mean solid support typescript
[02:48:39]  but you notice that i almost never use it in my demos because it slows me down but um essentially mutation observers can have their usage i i i've played with them for
[02:48:53]  animations and stuff in the past or like doing um the problem is mutation observers are always going to be like outside of the framework so while they're good for simple things you're
[02:49:04]  probably better to use the reactive system um okay it's more specific you're with content editable i i don't have a ton of experience with this i'd love to
[02:49:18]  this is one of those things when i was working at the social company that i was like it would be cool if we could have the tags and the text like uh facebook does
[02:49:26]  but we never actually implemented that i never got around to that our tags are always explicit text fields so i didn't get to actually play with content editable um i think
[02:49:34]  i think there's a place for it mostly because as you know with content editable where the state lives is tricky like if i've seen people make um good abstractions over
[02:49:46]  it where they can actually make it state driven but content editable is almost asking for the state to be in the dom and it's it's it's it's it's
[02:49:53]  it definitely takes some work to come up with the right abstractions i said i haven't done this one myself as i said i i worked on a lot of like pag
[02:50:01] inated um lists and infinite scrolling and like layouts like masonry and um what is it called justified grids and stuff like that but i actually haven't played that much with
[02:50:14]  content editable so i think it's reasonable one of the cool things about solid is how low level the abstraction is so if that's the best approach you would use with vanilla
[02:50:23]  dom it's probably the best approach to use with solid there's there's no there's you know there's there's no there's no issue with that um but yeah
[02:50:31]  without getting more specific example or whatnot and i'm not sure i'd even be able to help you with the more specific example to be fair just because i don't have a
[02:50:39]  ton of experience with content editable um anything else let me see here i i think that mostly does it for today if if uh if there's if there's no other
[02:50:56]  questions you know got me for a minute or two longer i finished my drink here already i'm gonna wind this down here but if there's nothing else um i can probably call
[02:51:12]  this a stream longer than i expected today almost almost three hours but uh heavy cop heavy topics and we haven't even touched like server-side rendering how that all plays into
[02:51:22]  the equation so um you know i i look forward to continuing to do this you know if people are interested so yeah okay awesome uh what do we got here future conversation i
[02:51:43] 'm thinking about render for pros mirror code mirror um sir what do you what do you mean by new render specifically oh you oh i see that's what you're asking about content
[02:51:57]  editable yeah okay yeah that makes sense gotcha yeah yeah that'd be that'd be cool um i'd definitely want to check that out um for a second i thought
[02:52:06]  you were talking about the the universal rendering things and um that's something i've been i kind of going back at a bit now because i've been working on solid start it
[02:52:15] 's hard sometimes like there's so many pieces that need to come together for that so that i work in an area and then i kind of go okay i need a breather
[02:52:23]  and kind of look somewhere else and i've been looking at the universal render again maybe not applicable to this but you know people want to do 3d rendering or canvas rendering
[02:52:31]  and um i think there's some good patterns we can put in place to kind of generalize it so that i can make a compile the output that would be more friendly it
[02:52:39] 's just kind of interesting i was looking at the react solution and they use like they basically give you a way to intercept all the diffing thing and i'm thinking is that
[02:52:47]  the right abstraction should we be thinking of it like a dom obviously with a virtual dom you have to think of it like a dom but with reactivity we everything's a
[02:52:56]  side effect i don't care what you do so i it might be sufficient just to do some of the optimizations i do in solid in terms like grouping effects or attributes
[02:53:06]  and and uh you know some simple diffing if i just add that in creating a custom render for solid um might be all of implementing like five or six functions like really really
[02:53:21]  easy um and we're not even going to try and reconcile it like the dom like why are we trying to insert the trees or whatever like screw it like if you return
[02:53:30]  an array it's an array like we don't need to synchronize uh some kind of dom or whatever we we can already use four to sort it if that matters um you
[02:53:41]  know we'll just give you power to control the insert and you can do whatever you you want with it i don't know if we actually need to have diffing level things
[02:53:50]  where you implement like what append before is from append after i'm i'm not sure i think we have to talk to more people about how they want to handle custom rend
[02:53:59] ers but i'm thinking like if you're doing something like uh 3gs or canvas or something in a terminal like why are we why are we like diffing array positions like
[02:54:17]  it depends on the underlying technology and i think i don't know if that assumption is the right one or mobile even for that matter i'm i think i'm going to need
[02:54:25]  when i work on this i'm going to need to get some input because right now the way i'm looking at it is the universal rendering could probably be something that i
[02:54:33]  could make the compiler for in a few hours and then you know it's just it was just like here implement these five functions or something so that seems too simple i must be
[02:54:44]  missing something so sorry i know that isn't what you were talking about but you just reminded me of of of the whole custom renderer thing um who knows maybe there'll
[02:54:57]  be a solid solid uh canvas thing that's like flutter and maybe that'll be cool okay um i i've been rambling here a bit just to see if there's
[02:55:10]  any more questions comes in it doesn't look like there will be so i'm gonna call it a night and i i hope i hope you uh all enjoyed the stream and
[02:55:19]  i intend to keep on doing this it was fun so uh until next time see you all