---
showLink: "https://www.youtube.com/watch?v=I6L29qSTaFA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Components Are Pure Overhead"
description: ""
publishDate: "2022-09-08"
coverImage: "https://i.ytimg.com/vi/I6L29qSTaFA/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hello everyone, welcome to my stream today. I'm just going to get started here in a minute. This is a bonus stream. I'm still doing the stream tomorrow
[00:00:12]  with Dylan. I'm looking forward to that. We're going to get into building a language and look at all the things that go into that from all the tooling, design
[00:00:22] , which I think is a really interesting topic because people see stuff like svelte or maybe view to a certain extent. I don't think a lot of people realize
[00:00:32]  just how much goes into it to consideration from design to prettier and code formatting and syntax highlighting and TypeScript. There's so many things, so I'm very excited to talk
[00:00:48]  about it tomorrow. The thing is, the reason we're having to stream today is mostly we talk a lot about frameworks and reactivity and Preact dropped some news on
[00:01:01]  us. They've been hinting at it for like, I'd say a couple months now about this really cool performance trick they were working on, but they actually dropped
[00:01:13]  on us a new primitive to use with Preact, which are, well, they're signals, reactive signals, which probably to no one's surprise here is kind of like
[00:01:27]  an area that we spend a lot of time on the stream talking about. So there was just no way that I'd get away with not talking about that this week.
[00:01:37]  And I'm really excited about the topic that I'm doing tomorrow. So I didn't want to like hijack the whole this week in JavaScript to talk about Preact because
[00:01:44]  I realized there's a lot of prerequisite knowledge to fully appreciate what's going on. And sorry, before we even get into that, I probably should just share my screen
[00:01:56]  for a second and see if you've been living under a rock and you haven't seen this. Jason posted this a few days ago and Preact's adding signals,
[00:02:07]  basically reactive drivers into their VDOM implementation. It's actually kind of cool. And we're going to talk about that a bit later, what that involves and how that
[00:02:20]  works. But I think to properly get the context of, of all of that, I want to go back. And yeah, I apologize for people who just came here
[00:02:33]  for the hot takes. That's just not how I roll around here. Generally speaking, every decision has a long history that led up to it and a lot of implications and
[00:02:46]  trade-offs. And those are the kinds of things that we look at around here. So again, I apologize if you're just coming here to, to get the
[00:02:53]  hot takes, so to speak. Uh, just a second. I need to close this down. Um, we're going to, we're going to be looking, um
[00:03:01] , at some other stuff. Yeah. I just posted on Twitter that we're live. I got to remember to actually post my Twitch link. It looks like people from Twitch
[00:03:10]  are coming in though. So, uh, yeah, I'm glad about that. Yeah. I mean, I've been talking about these, uh, topics a lot
[00:03:17]  recently. Um, it came up in the 1.5 stream too, where like, we were like, people were like, push, pull, what, what are you
[00:03:25]  talking about? Right. And a lot of these conversations are happening right now because things like this get released. Uh, I try to remember, let's see if I can
[00:03:36]  find the conversation really quick here on Twitter. Well, while we're just waiting for people to join out, um, there, there is a, people are talking about
[00:03:43]  these signals and you know, obviously the, like someone's like, whoa, react. Are you, are you, are you all going to jump in on and do this
[00:03:50]  as well? Um, just a second. I'm going to pull this off here, but what I wanted to, let's see if I can find the conversation that I
[00:03:58] 'm, that I'm looking for two seconds. Um, yeah. All right. Yeah. Here we go. Preact. Signals seem like quite a nice,
[00:04:09]  but I'd really like to hear React team's stance on them because surely they've considered those as well. It's not a unique idea. Solid has signals too. And
[00:04:16]  I bet some other frameworks as well. Yeah. Uh, that's, that's an, an understatement. Um, we'll, we'll, we'll
[00:04:23]  talk about that, but, um, reactivity, um, of this nature has been in frameworks for ages and not just like niche frameworks or ones that I like to talk
[00:04:35]  about that no one cares about, like knockout. I mean, like major, like, and I don't mean like RxJS, like you find anger.
[00:04:42]  I mean, Vue has been built off this from the day one and they're strangely silent in this conversation. I mean, not that Evan's silent, he's
[00:04:51]  made some tweets, but I mean that, uh, people just like, haven't recognized that this is not really new. And I think that's part of the reason why
[00:05:00]  I want to talk about this because there's, there's, there's inherent trade-offs and decision points here. And, um, they're not necessarily what people lead
[00:05:10]  you to believe they are necessarily. Um, don't check on him. Maybe not preact build. Yeah. He he's, he's, he's definitely in
[00:05:27]  the circle. Um, was basically saying, you know, react is an interest in this, which is basically what I've been saying in the last few streams. But Dan
[00:05:34]  came in to clarify some stuff for us. He said, any is an overstatement, but he basically reacts already decided that this isn't approach they want to take
[00:05:43] . Um, and he's like, from my understanding, this model relies on reading mutable values during render, which doesn't work for features or building like transitions and suspense
[00:05:51] , et cetera. It appears that the primary motivation is skipping re-renders. We have other stuff in the pipeline meant to address this in a way that doesn't break
[00:05:57]  our model, but definitely curious how primitives work for preact. And, um, I think, I think this is, uh, this is just good to look
[00:06:07]  at and point out because I agree with what Dan's saying. I think there's also other solutions to solve what Dan's suggesting they can't do. Like, like,
[00:06:16]  you know what I mean? Like, I think you can do the stuff that React does with reactive primitives as well. So it's not like, but I,
[00:06:25]  I can definitely see that it's, it's a complete change of model. Um, so anyway, I just want to bring this out because there are trade-offs here
[00:06:35] . Like Dan is also very right. And I think we need to kind of get a fuller perspective to actually be able to understand and make these kind of decisions for ourselves
[00:06:46]  to understand how to take in this information that that's, that's what we're here for. Yeah. Let's see some, how are you all doing in chat
[00:06:58]  so far? I've got a few people saying hi. Yeah. What do we, what do we, what do we, what do we got? Some people are calling
[00:07:07]  it. What do we, what do you have? Maple's calling his shop before you even go into it. I'm thinking now that signals are kind of awkward and react
[00:07:13] . You either get the full granular render or an entire component render. Yeah. Yeah. We'll, we'll look at that. I, I, I, I
[00:07:21]  want to get there ourselves and see if what we think about it. Yeah. What are we gonna, I think the business is a piece of not understanding or not knowing about
[00:07:36]  solid fair or view to be the, to be fair. Like there's two different levels of this. You have view, which might not be doing some of the optim
[00:07:46] izations that Preact's doing, but like, there's no way you can't talk about VDOM plus reactivity together without talking about view. Like literally that's
[00:07:58]  been the thing the whole time. Like view is not always the topic conversation on our streams. There's certain things in terms of values, which I consider the important part where
[00:08:09]  I align much closer to react. Um, and I, I actually think this is kind of a interesting thing here because I talked about this last stream. Solid was inspired
[00:08:19]  by react, not as a way of fixing react, but I created solid having one of these reactive libraries. And then we're like, Oh, react has a lot of
[00:08:27]  good patterns. We should see if we can incorporate that. So actually push solid to look and be more like react intentionally as a way of reinforcing good patterns. Whereas I
[00:08:37]  get the impression from the, this API design and stuff here with the Preact design, which is very view influenced. They're more like, okay, we're kind of
[00:08:47]  always pigeonholed as like react compat, smaller react. We want to escape out of that. How do we get away from react as much as we can? And
[00:08:55]  we'll use reactivity and we'll use like view style primitives. I think it's a really interesting contrast where solids reactivity shape is very, is pretty intentional because
[00:09:10]  it values what react values. So this is, this might represent a bigger shift long-term than people might, uh, account for right now. Um, so that
[00:09:18] 's why I mentioned view and solid because on the extreme, if you actually care about granular updates, you want to get the full benefit of this technology. You use solid.
[00:09:26]  It's the only one that works like this, but if you want the DX and you want to like have that experience and simplify things, you know, in the model a
[00:09:37]  bit with reactivity, like there's a trade-off there. It's not necessarily purely simpler, but it helps you model certain things perhaps in a less verbose way
[00:09:46] . Um, there's already view doing that. So like with a VDOM as well. So just, just preact is somewhere in the middle now, which
[00:09:56]  is funny because you started a place where you're like a react, um, compat, considered almost like a mini react. And now they're actually pushing into this zone that
[00:10:06] 's actually somewhere between view and solid. I mean, we'll get there, but if they do yeah, I mean, yes, I mean, but maybe I'm
[00:10:25]  just not doing a good enough job of marketing. okay. So I think I got some people here. I'm going to try my best. Today's a hot day
[00:10:49] . Uh, I, I, this whole week has been super hot and I, I was actually recording all day yesterday for my V conf, uh, recording and it
[00:10:57]  was like a bit of a sweat fest. Today's going to be no different, but we're just going to get into it. Okay. So don't mind my
[00:11:06]  drink. This is, this is sweaty one. The thing you don't realize. Oh, actually I don't, I don't even have all of my lights on right
[00:11:12]  now. Sorry. Give me a second. There we go. Let's get some more lights in here. When you're streaming, you got like, you're sitting there
[00:11:18]  and you got like a bunch of lights shining on you to make sure it looks good. So it's like, it's not just being in a hot place. I
[00:11:25] 'm like sealed up in a room to make sure you can't hear the family noise in the background. And then basically have a bunch of hot lights pouring on me. So
[00:11:34]  that's, that's, that's, that's how this works. My wife was like, well, maybe you should just stream with your shirt off. And I'm
[00:11:41]  like, I don't know if that's going to really work with this audience. Um, so, uh, let's, let's, uh, let's just
[00:11:48]  move on. Okay. So how are we going to start today? Well, let's, let's, uh, let's get, let's get started here. Cause
[00:12:00]  the funny thing is we're talking about Preact and we're, and we're talking about, you know, virtual doms and all this stuff, but there's a
[00:12:09]  historical precedence here and it all ties into actually state management too, but I'm actually going to start with change management. I want to talk about change management. Um
[00:12:16] , and change management is like state management, but we don't talk about it as much because it's not the piece that people feel like they have the choice of choosing.
[00:12:29]  Um, change management is essentially the mechanism underneath that the framework uses to do updates, right? And I'm going to take a simple example to kind of show, show
[00:12:43]  you all, um, like what I mean by this, uh, is the easiest way to put it. Okay. So I'm going to go in and pull up a
[00:12:51]  solid playground. I think this is big enough. Where are we inside? Yeah, this is fine. You've all seen the silly counter hopefully by now. Am I sure
[00:13:00]  I'm, I'm sure my screen properly, right? You guys are all good. Yeah. Okay. Good stuff. All right. Right. So I, I
[00:13:09] , I'm going to start the easiest way by just deleting all of this. Okay. And this is how I like to start things because we're going to go back to
[00:13:17]  the beginning. I'm, I'm, I'm going to, let's get into, let's start with something almost jQuery like, um, just to kind of
[00:13:26]  understand the evolution here. Right. So, um, I'm going to make a button. We're going to remake that counter again, but we're going to use
[00:13:33]  vanilla J Javascript to do so. Um, and you might be like, I thought you were going to talk more about preact. No, I'm sorry.
[00:13:39]  We're going to actually start with vanilla Javascript because this starts with fundamentals and, um, our, our counter starts with some text in it. Our button starts with
[00:13:50]  some text in it, like a zero and, uh, we need to append it. So what is it? Document.body.append. Let's just put
[00:14:00]  the button in there. Okay. Sweet. We have a button. It doesn't do anything. Actually, I'm hot. Reloading and stuff is awkward here.
[00:14:10]  So I'm actually going to do this. This is my little hack so that we don't end up with 10 buttons on the screen. Okay, cool. And then our
[00:14:17]  button needs to do something. So we're making a counter, right? So welcome to vanilla Javascript. This is, this is how you could do stuff without
[00:14:26]  a framework. Obviously this stuff was, in some ways has been here since the beginning of time from, at least from our perspective. But, um, and yeah, actually
[00:14:38]  I need to, I need to coerce this into a, into an integer. Otherwise it's going to just append it on the end. Yeah. Plus, plus
[00:14:45]  one, but essentially, and be quiet, TypeScript. Um, I think, I think we got, uh, a button here. Yeah. Okay. Sweet.
[00:14:55]  We have this, this is vanilla Javascript. This is, we just built the counter component. And, and what's cool actually, as I said, is in
[00:15:01]  the past, the APIs might've been bulkier to do certain things, but this doesn't actually take much code. It wasn't actually much more code to write this simple
[00:15:09]  counter than it would be to like do something in, in a framework actually. Um, so there we go. We've got a, we've got our, our
[00:15:19]  counter component. All right. And when we click on it, it updates. This is not terribly surprising, but there's a reason why we don't, we don't
[00:15:30]  hold or stick with just this approach because essentially at a certain point we, we, we actually want to be able to, uh, uh, how should I put it
[00:15:42] ? We want, we want to be able to kind of not tie everything directly to the event handler, because like we, we want a way of representing statefulness because we
[00:15:54]  might have multiple things that change. You don't want to like have like a lot of repeat logic, like multiple clicks and stuff. And we, we decided that we
[00:16:03] 're, we don't need jQuery. We want to be data driven. Okay. But that you have some kind of state and you, and the view is a projection
[00:16:13]  state react might've codified it, but, but this is not, this did not start with react, but let let's take our example and kind of go a little
[00:16:22]  bit further here. So I need a state variable. I'm going to use an object here because it'll help me kind of, I think, get through the whole
[00:16:29]  progression of what I want to show here, but let's now make this count zero our state. And now we, this will coerce to a string thing anyways,
[00:16:41]  and it's not, it's not too hard here, but now when we click our button, um, we don't want to update the button directly. We want
[00:16:52]  our button to, uh, we essentially just want our button to go count plus plus. And, and then we want this just to update. Um, as you can imagine
[00:17:05] , this doesn't just update, right? Like clicking, this is not going to update here. So this is, this is where the actual fracture of, of,
[00:17:15]  of JavaScript frameworks actually started because actually deciding how to update the text is what separated a bunch of the original approaches to JavaScript frameworks. The, this might not be the most obvious
[00:17:31]  one, but it's funny because I feel like with something like angular or one of those earlier ones, this is actually the closest way to model it. But one way
[00:17:39]  we could do, we could update it is check if, is check if, uh, the, the state is updated and then apply the change and you're like check.
[00:17:52]  Well, that's kind of stupid, but sure. Let's, let's, let's, let's, let's just do it. Let's make a set interval
[00:17:58]  here. Okay. Uh, P is not. Yeah. Okay. So we got our set interval and let's put it at a reasonable time. Well, not that
[00:18:07]  reasonable. We'll do one second initially. You can see that isn't very reasonable amount of time. And in our interval where we want to check some stuff, right?
[00:18:15]  We're going to be like, okay, well, uh, we can set, I guess the easiest thing we can do right. Is just go document or so we
[00:18:23]  can just take our button and go text content, um, equals state dot count. Right. And if we do this, I mean, you could see there's a leg
[00:18:39]  every I can, I can click it a bunch of times and then every second it, it, it checks the value and then updates the UI. Um, this approach
[00:18:48]  is called polling. And I wanted to show this here because this is, this, this might seem kind of like really bad because it's not responsive, but it is a
[00:18:59]  legitimate way one could approach it. So let's make it a hundred milliseconds instead at a hundred milliseconds. It feels almost responsive, right. Like, right. Like this
[00:19:11] , this is not unlike, like some of the stuff around angular one time period. It's not exactly correct, but I just wanted to, to kind of show this to
[00:19:21] , to explain one way of you doing it. What's cool about this approach is that there is plain object. We didn't introduce anything fancy here. We're still
[00:19:34]  just using the Dom APIs and we're now just adding, um, some kind of scheduler. Right. Yeah. Someone's mentioning this is how like games work. And
[00:19:43]  this is what people might call poll based, um, system in its, in its purity. Right. Um, because essentially at a set interval, we check what the
[00:19:59]  value is. This is this, the only problem right now is like, we're actually the Dom's pretty efficient. So this is fine. So it's like checking it
[00:20:05]  every time. Like it's like every time, every second, it's actually resetting that text content. I mean, you're not going to see a change in here
[00:20:12] . I'm pretty sure because the Dom is not Dom. It knows it's the same value, but it is behind the scenes calling a Dom API to try and set it
[00:20:20]  every time. So we can do like a little bit better. So we, we can do something like, uh, let's, let's make previous state here and
[00:20:28]  make it into an object. Um, and what we'll do is we'll, we'll, we'll set previous state, um, equals like a spread of state.
[00:20:41]  I think just, we, we, we, we, I don't know if that's going to be important right now, but we just want to clone it.
[00:20:47]  And then we can do something because we want to do some comparison checks. We're going to be like, if, um, previous state dot count, not equals state dot
[00:21:00]  count. Now do this. And this is, this is, this is a subtle improvement here. Um, yeah, someone's people are referring to this being like Angular
[00:21:15] 's dirty checking. Um, this, this is, this is where we're getting to because you could, I could check the Dom. I could be like, Hey,
[00:21:22]  button text content. If your content does not equal state dot count, then update. But the problem with that is then you're not just writing to the Dom, you're
[00:21:31]  reading from the Dom and reading from the Dom is dangerous because depending on what it is, the Dom might be like, Oh crap. Um, I don't know what
[00:21:39]  this is, or, uh, it could have changed a layout and it actually causes early. If you're not careful reading from the Dom, you can cause early paints and
[00:21:49]  early, uh, um, layout calculations at least, which can cause a bunch of thrashing and it's super, super on performance. So what we realized pretty early is
[00:21:57]  it was better just to pull out a copy of the object to check against so that on each iteration, we can just make sure that, um, we can check it
[00:22:07]  in JavaScript without touching the Dom APIs. So now while we're sitting here, our interval is running. Um, it's only, it's only checking JavaScript and we're
[00:22:15]  not hitting Dom APIs unless something has changed. Yeah. So yeah, I told you I was going to go deep here. I hope, I hope you all appreciate this
[00:22:24] . Is previous state like a V Dom? That is a good question. And you are, you're, we will get there. You, this, this, this,
[00:22:33]  this is part of the thing I want you to understand at the end of this conversation is that there are a lot of similarities between the different rendering techniques. Um, there
[00:22:42] 's a lot of ability to virtualize and stuff is, is, is some people have even called this previous state like a V Dom, like incremental Dom kind of played around
[00:22:51]  with this idea. In my opinion, that's not, what makes a virtual Dom a virtual Dom is that the representation is a Dom. Um, like the thing that you
[00:23:02]  store in here is, is, is a Dom representation. Um, whereas this is actually just a pure data representation. It's actually just plain POJO object. So
[00:23:12]  this actually, in my opinion, is one of three different rendering techniques. Um, and what's cool about it is with even a simple example like this, I can show
[00:23:22]  you all three rendering techniques. So this is, this is like, this is like angular one days, right? Um, this isn't exactly angular one, as I said
[00:23:33] , um, angular one was a little smarter than this, but I wanted to show you, I want to show you basically a very simple, um, look at what
[00:23:45]  change management looks like. Uh, Oh, Hey, Marvin from preacts here. Hey. Um, we will talk about some preact stuff more a little bit later in
[00:23:57]  the stream to be fair. I am going all the way back to the beginning. Uh, okay. So, so hopefully good so far, you, you, you
[00:24:04]  all are following me. Um, sorry, this, I'm in an awkward part where I'm covering part of the screen, but all you're missing here is literally like
[00:24:13]  document dot body, append the button. So it's, it's not a big deal. Well, that's the thing. I want to dismiss this. There is
[00:24:23]  very, there's no such, I mean, from a practical sense, there's no such thing as magic. I mean, I'm, I'm, I'm,
[00:24:31]  I know fun police, but, um, I, I want to demystify, um, the, the whole premise of, of, of, you know, things
[00:24:39]  being magic. I think there is a real concern or thinking between the gap between the conceptual model and the implementation. That's where that's an issue. That's where
[00:24:52]  magic occurs. When you can't tie those together, when you look at something and you're like, I can't make sense of it. Some of that just takes education
[00:24:59] . And that's what we strive for here. But sometimes the gap is big enough. The abstraction is good enough, but the, maybe something like the escape hatches
[00:25:08]  are reveal something that you don't expect. And then you're like, oh, everything's magic. So we have to be very conscious as framework authors, because we do
[00:25:16]  provide escape hatches. We want people to be able to do what they need to get done, but we also need to make it work with our model. And I think
[00:25:23]  this is what react has been struggling with a lot recently. Yeah. No, no, we're going to get to react. This is just, this is just the
[00:25:36]  beginning. So enter polling, and I probably should keep like copies of these around in case I need to like come back to them. I've already lost my jQuery version
[00:25:45] , but that's fine. We don't really care about that. So let's duplicate this tab and hope that it copies it. No, it's not because we're
[00:25:53]  trying to be more conservative about, about this stuff now. So, okay. So yeah. And be quiet TypeScript. That's fun. Why is TypeScript complete
[00:26:07] ? Oh, I thought I unchecked it. Okay. Okay, cool. So here we are. So now we are going to look again. We can do better than
[00:26:23]  polling. So the first thing that we might want to do instead of polling, um, is something that I'd, I'd kind of call like events, uh,
[00:26:29]  based because the be fair, we didn't have to go to polling. That was just like a really simplistic view of how we looked at things. And we could have,
[00:26:40]  we could have done this a different way. So let's get rid of the set interval because like, honestly, this is just kind of garbage and just let's call
[00:26:48]  our, we're gonna call this function, maybe update. I'd love to call it render, but there's like a little problem with our playground. I have no clue
[00:26:55]  why it's like this, but, um, in our playground render, um, is like a reserved keyword. Um, I don't know why they did something like that
[00:27:03] , but that's fine. We can keep kind of our code the same, but now this is, I mean, this is really obvious, right? But if I just
[00:27:10]  call update directly in our click handler, now we don't have the, we're not the, we're not at the mercy of the polling. This is way, you
[00:27:19]  can tell there's no, there's no delay here. This is way faster. And this is like, this did not take me much effort. Like this was actually easier
[00:27:28]  to do than the sent interval. It's kind of like the obvious choice, update the state, call the update function. And then the update function does the work. I
[00:27:36]  wanted to show the interval first, because it's an example of a pure poll based system where, um, this, I mean, it's hard to call this push
[00:27:46]  or poll, you know, it's not like some of like technically the click events and event that's pushing stuff, but like, this is very explicit. It's very
[00:27:53]  manual. We're just calling update directly. Um, but yeah, I mean, at this point, this is actually, this is efficient, right? Uh, this is
[00:28:03]  as efficient as our original jQuery version, pretty much. We pulled it out to a function, but you know, this is, this is relatively efficient in our single
[00:28:10]  case. You can imagine though, if this scaled up, um, it might not be, but we'll talk about that more in a minute. Let's, let's
[00:28:17]  continue on, on our journey here. So, okay. Now we're not polling anymore. So we're away from the pure poll based mechanism and we're just kind of
[00:28:27]  calling updates as we need it. You can pretend everywhere you call state dot count you call update. And I'm going to fork this one more time because I think this
[00:28:36]  is actually the common base between of most of the other methods. So someone asked me about, sorry, someone asked me about react a minute ago. I, we're not
[00:28:47]  going to get all the way to react here, but what we could do is we could, we could try and shift this around, right? Um, now this is kind
[00:28:59]  of like svelte. Yes, actually. Yes. This is svelte. You don't see the update call, but the compiler literally goes there and goes
[00:29:09] , and more or less goes, Oh, you, you did something you assigned equal sign or plus, plus compile in this update function. And then svelte keeps some
[00:29:19]  bit checks for dirty checking, but they actually do something like not exactly this, but they do actually do a dirt, like a check in the component and then do the
[00:29:27]  dom operations directly. Like this, this is actually, thank you for pointing that out. This is actually a lot like spelled. Okay. So let's, but we,
[00:29:38]  we want to, we want to look at something more like react and is we're not going to go all the way there, but I, what I like about this exploration
[00:29:47]  is you start like realizing things, right? Because on the journey there, you're like, okay, so the first thing to make this like react is you're like
[00:29:55] , I want to get rid of this update function. So what if we can, we want to update our state here, but we, we don't, we don't
[00:30:05]  want it to, uh, how should I put it? We, we, we want to, we, we want to call set state instead. And we're, this
[00:30:13]  is why I went with an object because I think this will be more obvious. We want it to be like state dot dot count plus one, right? And we don
[00:30:22] 't want to update anymore. So now we can get rid of this. And, uh, instead of update, we're going to call it set state. And we're
[00:30:36]  going to put in our state that we're going to pass in. And I know this is shadowed. Oh, it's funny. It's like, I have to
[00:30:42] , yeah. Okay. I know this is shadowed, but don't worry about it being shadowed that much. This isn't like real react, but I just
[00:30:48]  want to show this kind of mechanism here. And now this looks the same. We clone our state into previous state. Um, so now we can diff it. Okay.
[00:30:59]  This looks good. Let's press it. Oh, it goes to one and never updates again. If you guys ever hit this problem before, I mean, we know
[00:31:10]  we're getting into react territory when we have this problem, right? Um, to be fair, this isn't exactly what's happening with react, but I want to
[00:31:24] , the, the, the, the problem is this value of state is stale. This isn't like how react actually works, but it's actually kind of the same
[00:31:34]  thing. And the problem is the state is in this closure that happens, right? Someone said you need classes. That's one way of solving it. Um, right.
[00:31:45]  And then you can reference it through this. That's a good approach. I got like a way simpler approach of a way of solving this though. What if we just
[00:31:55]  put it inside the, the set state function? Okay. Whoa, just a second. Got to make sure that I'm doing this right. But if we put it inside
[00:32:11]  the set state function, we, we should be able to, in theory, be able to close over the same state from the previous run of the state and then we
[00:32:22]  should be good. So let me see if I can refresh this. Okay. What am I not doing right? Um, cause this, I would expect this to actually work
[00:32:32] . Let me think here. Oh, do you know what the problem might be? It's not initialized. You have to run this the first time, right?
[00:32:42]  So what if we pass the original state in here because the button click, the click handler never was registered, right? So, and actually, since we're going to run
[00:32:50]  this through the original time, we don't actually need to set this here anymore. And if I'm right, we should have our working button again. Okay. This
[00:33:00]  is not react exactly. And I'll explain why in a minute, but you can, you are, you're starting to see the similarities here. We actually put the click
[00:33:12]  handler inside the set state function, um, as a way of, uh, basically invalidating the closure. We're recreating that closure every time wrapping over the latest
[00:33:24]  state. Um, and we needed to run it once in order to, uh, initialize it now. And essentially we're kind of starting the flow. The only
[00:33:34]  thing that's different here is see how the buttons created outside. Whereas. And this is, you know, where the, the interesting part to reconcile it is, um,
[00:33:49]  we're going to, we're going to, we're going to, we're going to, we're going to talk about why and how the, how that impacts things
[00:33:56]  a little bit more in a minute, but, but I wanted you to kind of get like, you can see even with a simple thing that doesn't have a real
[00:34:03]  V Dom, we're already getting into the zone of these kinds of considerations, uh, about stick, like when we're trying to run stuff and stale closures and
[00:34:10]  constructing the object and stuff to be fair, this is a single pass non V Dom implementation. So that's why we're sort of hitting it, but it's also why
[00:34:17]  there was challenges like react introducing a V Dom, like opened up a bunch of design space. Okay. So before we go forward, I want to show one more,
[00:34:29]  yeah, yes, this better explanation, maybe for some people kind of coming in, I want to show one more, um, example based off where we did, because we
[00:34:42] , we, we had angular, essentially we, we have what became Svelte, but again, not quite it. And then we have, um, uh,
[00:34:55]  something that's react like, but again, these aren't completely accurate because there's other elements here. I'm going to take our, our Svelte base one,
[00:35:04]  one more time. Let's duplicate this. And we're going to do one more of these from Svelte. And I want to take it a different direction, because
[00:35:12]  if you remember, sorry, not there, there, if you remember, we're just trying to get rid of that update function, right? You can use a compiler
[00:35:19]  to do it. You can, you can kind of conflate everything to do it. Um, is there another way of getting rid of that update function? Right.
[00:35:31]  We actually, and set interval is a way to do it too. I thought the VDOM was to avoid heaviness of doing that update to actual DOM objects instead of
[00:35:42]  simpler JS ones. Um, it's, it's the guard it though, right? It's, it's, it's this part of it. Updating the
[00:35:51]  DOM has to happen regardless. So it's more of like, if we can check the stuff ahead of time, but to be fair, dirty checking in Angular was checking
[00:36:01]  the stuff too. Um, you know, it, it, the idea was that I think it made it easier to do more complex, um, things like in terms of
[00:36:13]  the diffing, you can actually get the full representation. Um, and you don't have to rely on data as much, which is, it's going to come into
[00:36:22]  play when I talk about the one more, right? Not updates to print reads to the DOM. Yes. And that is super important that that's actually where a lot
[00:36:29]  of the performances, but you can get that from, from having, uh, uh, from having like these objects I showed. Yeah. Mutating then reading. Yeah.
[00:36:43]  But when you get these in tight cycles, exactly. Yeah. Yeah. Yeah, exactly. Yeah. So good. We're all on the same page. So we
[00:36:51] 're going to try one more, uh, approach here of getting rid of the update. And I don't know if anyone can guess what that other approach is, but I
[00:37:02] , I feel like if you've watched my stream before, you might be able to guess what that other approach is. It starts with putting the information in the data. So
[00:37:10]  we're going to do something. There's like, there's a, there's different ways I could do this. Um, on, but I'm going to,
[00:37:17]  I'm going to do like, uh, I'm just gonna use a proxy because I can, I mean, we could use getter setters if we really wanted to
[00:37:26] , but the thing is if, if we want to update and add more state, then there's more work there. I'm just gonna use a proxy because I can.
[00:37:34]  So, well, this is a super simple example, but let's, uh, target property and, uh, value. Yeah. We're going to, we're
[00:37:44]  going to make, we're going to change our state now into a proxy and don't get me wrong. It doesn't need to be a proxy. It could be a
[00:37:49]  function. It could be anything, but I want to use this form because it's, I want to keep the look of our examples, uh, similar to each other.
[00:37:57]  So we could, when we set our property here, we can just set it to the new value. But what we want to do is we want to call update,
[00:38:06]  right? If we call update here and then return true to say that we've written to the value. If we call update here, we don't have to call update here
[00:38:14]  and magic. So if you guys are talking about magic, but this, this version is what I call the, I guess, basic reactive version, right? Um,
[00:38:32]  all we did was instead of using a compiler, instead of kind of pushing everything in, we decided to just make the data special. Um, we probably could have done this
[00:38:44]  a different way. Like, let me think, do we want to do it a different way? Let's play with a different way. Um, was it object state
[00:38:50]  could actually be a const here this whole time. I don't know why I didn't do that. Object dot, um, define property. Um, what is it?
[00:39:02]  The object will be, oh, I guess I need an object and then, um, get, I think get function or set function. Yeah, I just need a
[00:39:18]  setter, I guess. Set, um, yeah, it's, we're going to set, I don't know why I'm being so slow here. We just
[00:39:29]  need a set function that takes the value and then basically does the same thing here, right? It's, or is it target value? It's been, I'm just
[00:39:42]  not even thinking, you know what? Screw it. I'm too lazy to look. Should I look this up? I wanted to point out that this is not,
[00:39:50]  uh, just like, do, do, do, do, do, do. Point out that this is not, um, is here a simple example. Give me a
[00:40:01]  set, give me a set. I've done this like a billion times, but I'm like, just not doing it right now in my head. Set new value,
[00:40:08]  of course. Right. It's because I need to, I don't even want to deal with this. It's because I need like a reference outside of the object
[00:40:16]  to set the object. Just screw this. This is why I want the proxy. I'm saying you don't need a proxy to do this. Um, proxy is just
[00:40:24]  like the lazy, less performant way of doing it. Okay. So we're going to move on from that. I just wanted to show it could even be a
[00:40:31]  lazy function. The thing that I want to express here, though, is this is not the full reactive story because we're still actually dealing with state, um, that is
[00:40:43]  just red. There's, you see, I only intercepted set. I didn't intercept get there's, there's no automatic subscriptions here. In fact, none of
[00:40:51]  these approaches actually deal with the fact that, um, like these things can be subscribed to multiple locations. We just have this update function, this one centralized update function.
[00:41:06]  And as you can imagine, that doesn't scale. Um, there's going to be a limit to how far we can take this update function. And what can we
[00:41:18]  do about this? Well, now we're going to get into the Excalibur portion of this, right? What we can do with this goes back to those original
[00:41:27]  frameworks. I just showed you a bunch of change mechanisms and the prevailing logic back in the day was that, um, we use model view controller, MVC or
[00:41:43]  MVVM. I'm going to, I'm going to, there, there are differences between MVC and MVVM, but I, I'm going to,
[00:41:54]  I'm going to focus on MVVM because MVC and the client is kind of a lie. Like it's, it was never real, which is actually what motivated
[00:42:03]  a lot of the change from angular one to angular two and whatnot. Like the problem with model view controller is that no, I'm going to put model here, model
[00:42:13]  view. Sorry. I don't know. View doesn't go here. View goes over here. It's funny. I'm going to put control. The problem with model
[00:42:26]  view controller is that you have a bunch of models over here. Okay. And I don't know what they're going to look like. Let's they're like databases
[00:42:37] , but let's just pick a few models. I'll make three because I can. And they're kind of, there's no actual real hierarchy necessarily. They have relationships
[00:42:47] , right? We can, we can be like, you have this and you have this and maybe, maybe this one also references back to this or something. Like we
[00:42:59]  can, we can make a bunch of relationships, but it's not directed. It's not like the model of like a UI. Whereas like the view is very much,
[00:43:10]  um, uh, what do I want to, what shape do I want to use the view? diamonds? I don't, it doesn't really matter. The view
[00:43:19]  is very much like, let's make a few of these. It's very much like a, my arrows are probably gonna be like the wrong way, but it's,
[00:43:33]  it's very much like a directed thing. Like this has these, this has these, this has these. It's very much like a tree. Um, you know
[00:43:45] , you have a parent element that has a couple children that have some children of their own, right? Everyone following so far? Right. Components are how you feel inside
[00:43:59] . All right. I mean, this is what I'm getting to, aren't I? The problem is old conventional logic was on the server. And this made a
[00:44:07]  lot of sense was that in the middle here, and I don't know, we're gonna use purple. We had the controller. And which effect is how I feel
[00:44:23]  outside. Okay. All right. So we're, we're, we're still going here. Right. So what I'm, the problem with this model was that
[00:44:43]  usually UI didn't really own the model. Like it, if you're in, if you're in the browser, there's like this other hidden arrow going off the side
[00:44:53]  of the screen, going like, you know, what are we going to say server this way? Right. But the, the, the problem with the, this,
[00:45:08]  the earliest versions of this model is that, um, if the server kind of owns a model and the view has, you know, all this display, how do you like
[00:45:18]  make view specific representations of, of data, essentially like, how do you get view specific state? And the controller was just like, look, I know that you have
[00:45:28]  a user model. Let's, uh, go back here and pick color and be like, user, there you go. And the controller's like, controller's like,
[00:45:40]  okay. Um, it's kind of serious. Like I'm a user controller. I know what to do with that. And, uh, is it purple? Yeah
[00:45:54] . And then somewhere over here is like, oh yeah, I display users. You know, like this kind of link up seems like it makes a lot of sense at first
[00:46:08] , except there's no way where to hold that state because you're like, oh, this user in this list is selected. Um, where does that go? Does
[00:46:17]  that go in the model? No, that doesn't go in the model. So you might be like, why am I going on this crazy tangent? Well, the thing
[00:46:31]  that we realized pretty quickly here is that there's, there, there's this invisible other thing. And I say it was invisible, but, um, sorry, I
[00:46:41] 'm going to keep the controller hard, like straight line, but then I'm going to draw in this space another circle. And we're going back to angular days, right
[00:46:54] ? That's the idea here. I'm going to be like, there's this thing in here and it's called scope. all right. Oh no scope. And
[00:47:06]  this, this, this thing was really weird because it was a weird mixture of model data and like instant space data. And it kind of got passed through and it was a
[00:47:18]  mess. Um, nobody, nobody liked scope, but before we got to react and stuff, we realized that there's actually another way to solve this, right? You
[00:47:30]  got to remember, I showed you that react model. This is this, the problem with the, the react model here, which is, sorry, this one is if we
[00:47:40]  want to break stuff up, we actually need to pull this inside the set state function. And that's prohibitively expensive because you don't want to be recreating DOM
[00:47:47]  elements. I hope that I, I know I haven't fully explained that, but I'm, I'm, I'm getting there, but before we, we,
[00:47:53]  we get there, we were like, okay, let's, let's just change our plan up. Let's make these view models. And now we can just do this
[00:48:06]  and we can have as many of these representations, um, as we want. And if there is something like, uh, I'm trying to think of what's a good
[00:48:18]  example to put in here. Like this is a user. Let's say these are friends. This is like a friends link list link table. So that's why it
[00:48:25]  points back to users. Cause there's like this. And then let's say this is what, what do users have? I don't care if they have addresses, they
[00:48:34]  have cars. I don't know, whatever. Let's, let's say they have addresses. I want to use addresses because multiple users can share the same address,
[00:48:42]  right? But essentially we can have multiple, we can have a user per actual user. And yeah, I didn't pluralize this. So that was my fault in the
[00:48:54]  beginning because generally speaking, the database is a collection, right? So users, friends, addresses, and then you might have user, user, user, user, user
[00:49:03] , and you might have, uh, get there. Hmm. We can do, we can do not friends because users are friends. Um, we can do address. Okay
[00:49:17] . It's a little bigger. Yeah. Okay. Now we have address and we can have a few addresses. Notice that friends isn't even really represented here. It
[00:49:29] 's actually like when we get to here, what we'll see is that the, the friends relationship is actually like, uh, um, is actually an arrow. Like that
[00:49:39] 's, that's the thing. And then these users have addresses and it's funny because these arrows can still point back, right? Like they, they, they, they
[00:49:53]  can still be directional. Um, and who knows, maybe this user has two addresses, but it's, it's, it's, it's like a slightly different representation
[00:50:05]  because it might hold, well, here's the challenge. Do you map your, this is the problem here. Do you map it more to your model structure or more to
[00:50:13]  your view structure, which in your view structure, you might have a user. So your users list user, or let's say, you know, let's, let
[00:50:24] 's, let's, I mean, let's show a user and then let's show each of their friends, which are another user. And then, and then we'll
[00:50:34] , we'll, we'll, we'll show their addresses as like another piece of the piece of it. Right. Like you can see that this actually resembles this a lot
[00:50:46] , but it can also resemble this. So I just wanted to kind of point out that there is a very easy way to keep things separate. And this is what we
[00:50:59]  used to do. Um, because going back to our reactive example, or really most of our examples, except for what I called the react example, you just, you know
[00:51:10] , in the react example, we called set state right at the beginning, we ran it once to set everything up. Whereas in the rest of these examples, there was
[00:51:18]  like a clear creation and a clear update, whether it's the reactive or what we call the Svelte example, where we just did the call the update explicitly, there
[00:51:26] 's this clear create and update. And what it works kind of nicely in with this kind of drawing, because you, you have this model, this exists somewhere else. And
[00:51:34]  then when you go to make your kind of view representation, you just, the, you know, this is, you just make everything once. So you create it,
[00:51:45]  create it. And then when you go to update it, well, you update here, or maybe models. It's unclear exactly. It depends on what the thing is.
[00:51:55]  But if you click some part of the UI, you, you're going to send your updates back, back this way, right here, here's an update. I
[00:52:04]  should change the color of that arrow, something more punchy, punchy, there we go. And you're like, okay, I'm going to update this. So
[00:52:13]  I don't know why I'm pointing from there to there. But let's go from address to address. Okay, so now we're doing updates. Okay, update this
[00:52:22]  address, you click on something triggers this view model, update, and then we're back to our change question, because we call the update. And then we're like
[00:52:31] , how do we get the change back here? So click something in the UI, doesn't have to be from the address, and then reflect it back on the address
[00:52:42]  change. And, yeah, let me call it change. Okay, this is what we've been looking at this whole stream, basically, essentially, how this kind of loop
[00:52:57]  works. And it might sometimes go back to the database model, because it feeds in. But it's very easy when you have these trees that create once, and then
[00:53:05]  they're very directly linked, to be able to just do these updates. And this is basically the state of what the world was like before react. And I mean, to
[00:53:19]  be fair, in a sense, solid today is still a version of this. You know, I mentioned earlier that there's three types of rendering. And the one thing
[00:53:36]  that these days, we all have in common, isn't this, because no one actually does MVVM anymore. Because what reacted is they introduced the component model, right
[00:53:48] ? And let's, let's change this to the component model, so that I can make this a little bit, oh, not that. Let's change this to
[00:53:58]  the component model, so I can make this a little bit more obvious what we're doing. Okay, actually, I need, I want to, I want to get
[00:54:03]  the server this way in here. Okay, let's, this one here is black MVVM. I don't even know how to make text bigger in Scala
[00:54:19] Draw. I've been using this for like a over a year, for like a year now, and still not master. Okay, let's, let's do this
[00:54:28] . Okay, so what did the component model do? Well, it can, it can, it can collapse this, which is like, and that has some, some
[00:54:42]  coolness here, because now these sit on top of each other. And you're like, okay, cool, sitting on top of each other. Well, I mean,
[00:54:56]  that's a bit of a mess. So it didn't collapse it like that. What it actually collapsed it like was more like, more like this. I'm going
[00:55:05]  to just have to delete all the arrows, because I don't feel like working through all this. It made the decision. I told you earlier, we couldn't make the
[00:55:15]  decision here between whether the view model should be more mapped over the model or mapped over the view. And well, for a lot of you, you might like, what
[00:55:22] 's, what's the big deal? Well, the problem is, you want your code to be dry and reusable. So there's this huge temptation. They're like,
[00:55:28]  I'm always just mapping over the same fields, right, to get that data. And especially in our reactive example, we're making proxies, we're making actual
[00:55:37] , you know, things like you pretend this part is our model or something. And this part is like our reactive data piece. It's kind of tedious to go through
[00:55:48]  and, and like, map it all again, you're like, that's the same code, why can't I just put them together? The problem is, this is
[00:55:55]  a mistake. If you bind these too closely, you end up in a zone where you have a bunch of extra fields on your view model, that apply to certain view pieces
[00:56:06] , and they're not shared like selected state, you're, you're kind of back to that old MVC model and not realizing it. So people who use this
[00:56:15]  pattern kind of had two types of view models. They had like model view models and view view models and it worked, but React was like, screw this. Right. It
[00:56:25]  was just like, no, no, not happening. These two go together. These two go together. Why are we separating these things? These might be different technologies,
[00:56:39]  but these things to go together and these things go together. And I mean, sorry, you guys, you guys get deleted, but now in our new happy home, um
[00:56:50] , we have components. All right. Welcome to components. This is great because now you've sliced stuff. Um, you've sliced stuff like a, a different way
[00:57:14] . Right. And these pieces are definitely more addressable than, um, whatever giant trees, these came in, because if you've never worked in a code base like this
[00:57:25] , like everything became folders of like, you could, you had two different ways. Like there's a whole question of how you actually organize your code folders, because you
[00:57:33] 'd be like, you might have like a, um, a view model folder and a view folder, and then have two completely separate trees of files, which was really hard
[00:57:41] . Cause you're like, okay, where does this user data and the views way over here? Okay. Sometimes we actually co-located our folders. Like we
[00:57:49] 're already getting here, but you, you, you're kind of like in folder land, you know, like where you had like view model.js, view.j
[00:58:02] ade. It's like, it's like naming a folder convention where you like pick like some generic name, like index or template or style and you'd make three files
[00:58:12]  in the same folder. Um, you know, actually it's kind of like, uh, Svelte kit's new routing or, uh, the next JS new routing
[00:58:19]  where you have page layout error. Like that, that, that, that, that that's, that's basically, um, what we were doing here. And this was
[00:58:32]  just like, screw this. We're going to put this together as the same technology. We're not going to worry about that. Okay. I mean, so far
[00:58:37]  you're, you're all like, wasn't the stream called components or pure overhead? What's going on here? Okay. Well, we're, we're getting there
[00:58:44] . I told you this to be a long, long journey. Let me drink here. All right. So this is all fine. And the reason I wanted to do this
[00:58:59]  illustration at the beginning here was because the problem with this model is I, it's not a problem, but the first challenge you face is this. When you add a
[00:59:10]  new address to a user in this model, in this old view, view model, you do change. Like we talked about, like, this is still kind of like a
[00:59:19]  global thing. Maybe you ran it once to set it up like we showed, but then you go, okay, this user changed. They got a new address. So
[00:59:25]  you add it here, the data changes, and then the view checks and goes, oh, user, your data changed. We need to add this new address here. And
[00:59:33]  at that point, you're, it's clearly an ad operation. Like, it's clearly, like, let's create a new one of these and wire it up
[00:59:52] . This is a little bit more interesting when you combine it together, because you're, there's no, we've kind of killed the separation between create and update.
[01:00:10]  But like, there's probably ways to get it back. But generally speaking, when we add that new address, sorry, when we add that new address, we're going
[01:00:22]  to basically make a whole nother one of these. And the creation and update logic is kind of locked together. And we don't want to recreate stuff every time we
[01:00:36]  do this for something new, it's fine. But when we update something, we don't want to recreate it. And this, this was sort of the challenge here,
[01:00:42]  because this button is still a real button. If we tried to pull the button in to our set state function, it would be really bad, like recreating the button every
[01:00:51]  time don't want to do that. So that's why we got away from this, this first version, the dirty checking version, whatever you want to call it had
[01:00:59]  a previous state. So essentially, it would check into state, whereas something like react, I'm not going to change the code here, because it gets a lot complicated,
[01:01:09]  I'm not going to actually make a V DOM here. But something like react, what it will do is, when you call your component function, and if you've
[01:01:20]  never seen this, do check this out, there's hyper script product still exists, I believe. And it's, it's basically the foundation of our V DOM stuff.
[01:01:33]  Essentially, you can describe elements as function calls. And you could, you know, if you pass in a function as a first argument, it's the component, this is
[01:01:42]  what this is what react and preact and all the V DOM libraries are built off, traditionally, they, this is a function call doesn't matter, you return an
[01:01:51]  object, essentially, that represents instead of it being the state that you're getting here, you end up with an object that represents the DOM. So we can pull button in
[01:02:01] , if instead of calling document create element, we, we call like, V DOM create element. Now, now we can do this. I mean, our example is
[01:02:16]  not going to work right now, because I didn't implement it. But now we can pull it in to our to our update function. Again, these simple examples are limited
[01:02:23] , because I'm still treating this all as like a single set state, what we actually have to do is decouple the set from the read, which is more
[01:02:34]  complicated than I'm going to be able to do with a simple demo. But my point is, from for the simplistic sake, you can see that if we if we don
[01:02:41] 't take the cost of doing the DOM operations here, and instead of this being now the button that gets its text sent, isn't actually a real button, it's
[01:02:50]  just a JavaScript object, right? If we do this, and we return our V DOM, you know, you know, like so like you can picture each cycle, it
[01:03:03] 's like a new V DOM, and we return it, we now have we can we can basically do the work once to update things. And we might not even actually bother
[01:03:13]  with this check anymore, because we don't really care. We might just like kind of go, oh, let's just create the thing. And then down here,
[01:03:22]  we'll have a second function called patch, which will take the old V DOM, or take the new V DOM, new V DOM, take the old V DOM, and
[01:03:35]  actual like mount element or whatever, like I'm being overly simplistic here. But my point is, now in here, we can go, oh, does new V DOM
[01:03:50]  dot button dot text content equals old V DOM. And only then do we, you know, from somewhere from our like actual real DOM elements, like I'm assuming we
[01:04:24] 've walked through here somewhere. Like, I'm oversimplifying this. But only then do we actually set the new text content, I hope that makes sense.
[01:04:35]  In a V DOM library, we've actually separated this into two passes, a first pass, where we, we actually run through all our state updates to generate this virtual representation
[01:04:46]  of the DOM. And then a second pass, where we actually compare the old and new versions of the representation to actually do the real DOM updates. Okay. But by combining
[01:05:01]  this all together now, we've, we've escaped our problem, we've suddenly opened up this world of components, because now we can co-locate all this
[01:05:12]  stuff and just run it and don't worry, because an update and create are basically the same operation, especially in here. In here, we don't care. Here,
[01:05:22]  we'll have to do like, oh, does that DOM node exist, it's gonna have to do a little bit of work in here. But for our state updates
[01:05:27] , it's just like, just give me the next thing. But that so that that's the react path, right? But here's another path here. Let's talk
[01:05:37]  the reactivity path. what, and what if, like, there's an, there's another way to do this too, right? More granularly. I mean
[01:05:49] , the easiest way for me to do this, although this is kind of like a bit of a cop out, is, is essentially replace our state now with a const
[01:06:06]  state, state, set state, whatever, equals create store. This is just a proxy. Count zero, right? We can basically do this, and then keep our button
[01:06:21] , sure. And then essentially, create effect. And we'll import that from solid, create effect. And essentially, do something along the lines of, I mean,
[01:06:45]  I wanted to show you all like, how directly this maps the previous state isn't, like, let's, I think I can just copy this straight in. Do
[01:06:57]  I need to do it? I don't even think I need that. So work. It's like, what am I not doing right? Create a button. Oh,
[01:07:11]  no, it's, this doesn't work. Um, what do I do? Set state, um, count equals, state dot count plus one. Bang. Right.
[01:07:27]  Um, so just, just very quickly showing like the original update function can go both ways. It can map to this systematic way of handling things like, like a VD
[01:07:43] OM does, where you're like, attaching everything, creating the virtual representation and then diffing it, or it can basically map directly to, uh, an effect like
[01:07:55]  a reactive effect. I'm not that ambitious, but you're right. I am trying to show how all every JavaScript framework works. I don't think I have time
[01:08:10]  to do that in one session, but you know, um, I'm trying my best. So hopefully this still makes sense. My biggest concern with the stream is that
[01:08:23]  I'm going to lose people as I'm going. Um, I've tried to do it in parallel in stages. Um, but obviously my VDOM version is
[01:08:35]  broken. Um, because I, I wasn't going to pull in a real library to do it. Um, I didn't install it really easily because it was easy for
[01:08:42]  me to display it. Cause I mean, it's all this playground, but it doesn't take, it doesn't mean solid. I could have pulled in pre-act
[01:08:47]  signals and done the exact same thing. Um, you don't like, um, as you know, all this means is you can, you can already see the difference
[01:08:58]  of philosophy here, right? Like the work that is the baseline of what has to happen for this two-step process versus like the work here, which essentially is just like
[01:09:09] , call the update, call the update function whenever state.count changes. That's, that's what's, that's what's happening here. Okay. So awesome
[01:09:26] . All right. The I've shown multiple ways of doing this. We, we, what this actually comes down to, even though I didn't upgrade the original version is
[01:09:37]  to this day, there are basically three different approaches to rendering, forgetting about like Svelte's compiler trick or whatever. The, those three approaches are what I call one
[01:09:52]  pass diff, which is like, what we started with, um, here, which is kind of like this, what I call the Svelte version here, but
[01:09:59]  it's also the way that tag template literals work. Like if you use the library lit, it works this way too. Um, they can use components to hide like
[01:10:06]  the update function or compilers or what different ways like reactivity to hide it. But essentially the premise is that, um, you, you, uh, you keep
[01:10:17]  the previous state as, um, some kind of state, and then you do this kind of diff of it and it still kind of runs in this kind of top down
[01:10:26]  way. Um, then there's two paths, which is what the way V Dom's work and two paths, uh, basically creates the, the, it's funny.
[01:10:36]  I put the previous state here, but the previous state is not necessary. Um, I mean, I guess it is here because you want to kind of feed it through the
[01:10:45]  system again, but okay, nevermind what I was gonna say, but it has two passes. You set up, you create your pure function. It's called where
[01:10:53]  you transform the old V Dom to the new V Dom, and then you do all your side effects in this patch that happens later. Okay. Like this is really an in
[01:11:03]  out kind of function. You, I mean, there it's secretly, even though I'm calling set state, it's secretly a function of V Dom and new state.
[01:11:11]  Like it's like, it is a, it is a kind of a pure function that returns that they shouldn't have, um, side effects. The, those all
[01:11:18]  happen here. And then there's the reactor approach, which again, look, there is a previous state here, but it's scoped specifically to each granular event or
[01:11:28]  effect. So, you know, there's actually a lot of similarities between this and the dirty checking version. The biggest difference between dirty checking and the reactive version is the granular
[01:11:41] ity. All right. So this is my technological introduction. I want to, I want to talk a bit now, um, about how the impact of these decisions.
[01:11:54]  Okay. Hopefully everyone's still with me. Yes. Yes. It is also a function of previous state. Um, okay. So I actually spent some time trying to
[01:12:15]  understand the differences between these rendering techniques and the funniest, the thing is they are all super performant because at a base level, they all make sure that only the text in
[01:12:32]  that button gets changed. You might be like, Oh, well, isn't a V Dom really expensive. If when you show me that does all this extra work, but
[01:12:39]  like when I, I, I, I did this article a while ago, I was, this is like, what was this? 2019. Okay. May, 2019
[01:12:46] . So like over three years ago, I was like, okay, what if I could take lit? And I was like, I wanted to see if I could compare based
[01:12:55]  on syntaxes or different writing styles, um, approaches to kind of figure out what was the best way and fast ways to render the Dom. And if you look at this
[01:13:04] , um, there's incredible performance, um, coming in, uh, like using Hyperscript as solid, for example, is not a good idea because it does
[01:13:14]  a bunch of extra creation. Solid. Solid doesn't like that because a reactive library, if you can, you can kind of already see this reactive library takes its hits every
[01:13:23]  time it needs to do another one of these or another one of these. So it takes a different approach. You don't want to like recreate everything every time because these
[01:13:33]  are what's expensive. Whereas this, um, you, the VDOM is just a plain JavaScript object. You'd think maybe something like this might be expensive, but
[01:13:43]  in practice, it doesn't actually end up being that expensive. So this kind of rerun approach works really well for virtual DOM libraries. Um, and that's why like
[01:13:52]  call it as a function works really well for Hyperscript and stuff. And then what else did I look at here? Oh, did I just skip through? I
[01:14:00]  looked at compilers too. Um, take template there else. You know what? This article probably isn't even the best for this, but what I wanted to show
[01:14:07]  is that ultimately after doing all the work here, putting them all in a single chart, uh, there's a lot of noise here, but what I want to show is
[01:14:19]  solid signals, which was a reactive library was really fast. Dom C is a dirty checking library. It's also basically the same speed. And at the time, the
[01:14:29]  fastest, uh, VDOM library Evie was here too. All of these approaches, if you've ever seen JS framework benchmark, um, you ever seen this,
[01:14:38]  this thing, there's like a giant table and it has all the frameworks. If you want to start getting into like over here, where's, where's like, where
[01:14:49]  is react? React, React, React, React, React. It's got to be way back here somewhere. Okay. Perfect. Like this, like standard, a
[01:14:59]  lot of the standard, like reacts like 1.8 here. This is not the, the technology here is not the limiting factor. Like you can have a VDOM
[01:15:10]  library. That's basically 10% slower than vanilla. So I want to just highlight the raw performance numbers are not going to be the differentiator between these different passes.
[01:15:21]  Um, what was more interesting to me because I did a lot of experimenting here was not how fast like these individual techniques were because you have VDOM is plenty fast.
[01:15:32]  What's more interesting, interesting to me was this, which is the cost of UI components, because essentially I was like, what happens if I take this stupid example and
[01:15:46]  make like every cell into a component and go crazy on it. And one of the earliest tests I did with it was like, okay, well, let's compare vanilla version
[01:15:54]  to something written with web components, the way that I'd write react, not a crazy amount of components, just the way you'd write like a typical app where you
[01:16:02] 'd like maybe make, if you've never seen the JS framework benchmark, it's just a table. Um, who knows, I might even have it open right now.
[01:16:09]  I use this thing like all the time. Uh, let's, let's just, uh, yeah, I don't have it started. Let me, give me a
[01:16:18]  second. Let me just show you. Okay. Let's just start this NPM start port 80 80, beautiful. It's just, it's just this benchmark just
[01:16:39]  creates like a thousand rows. You can highlight stuff in the rows. You can update every 10th row. You can swap some rows. See that one that's highlighting is
[01:16:48]  being swapped and you can remove a row or two. You can add a thousand rows on the end. If you go all the way down here, you'll see that
[01:17:00]  there's like more rows, more this we're in 1200 now. And obviously you can clear them. These are, these are just very basic crud style DOM operations.
[01:17:11]  Okay. So this test is not real world. It's just showing you how to handle lists and lists are important. And I'm going to get to that in a second
[01:17:21] , but I wanted to say like, initially you might just have a one component per row component for the app, maybe some buttons, simple implementation. But I was like
[01:17:29] , what happens if I just made every cell in the table component? Like what if I tried to make more components here? As I said, you can see immediately that web
[01:17:37]  components have, uh, overhead compared to just using straight vanilla DOM. Like just, there's just a cost to it. Um, and I didn't really test web components
[01:17:45] . I go back later, uh, two years later, and I actually tested web components and show that ironically, front end frameworks actually scale better than web components, but
[01:17:54]  that's, that's for, that's kind of aside from what we're talking about today. What I wanted to do was take these different rendering techniques. Like I talked
[01:18:03]  about VDOM, lit, or, which is like a, the top down one pass renderer VDOM, which is a two pass renderer Solid,
[01:18:12]  which is a, uh, reactive renderer and Svelte, which is like a compiled one pass renderer and put, see how components, uh, like see how
[01:18:21]  scaling the components affected things. And here's the, the headline I could throw as many components as I wanted at a VDOM library pretty much. And it just,
[01:18:33]  it would barely touch. Look one, 102, 104. You can't even tell basically whether I go between a thousand and five thousand, or I guess it's like
[01:18:42]  the 10,000 row one is the difference between like 10,000 and 50,000 components. It's like 10 milliseconds difference. Uh, and I don't know if
[01:18:54]  React scales that well, but, but I just wanted to actually point out that conceptually VDOM component scaling is not actually a consideration. They actually scale pretty well
[01:19:09] . Memory, um, goes up mildly by the end. I understand this is like an insane amount of components, but it's actually pretty respectable. I, the one
[01:19:20]  pass renderers actually had some big performance issues as I scaled up the number of components. This is lit. And if I, and yeah, memory started getting worse and
[01:19:38]  let me skip solid. And, uh, this is felt not as felt as lit was, but there there's this kind of characteristics felt actually had crazy memory, um
[01:19:50] , degradation, even more so, um, than lit. And what these libraries had in common was, see, React has components and the components as we saw are basically just
[01:20:04]  objects. We just generate all these objects, but the one pass renderers their, um, components were, um, like they contained the information they needed for like their
[01:20:21]  reactivity. Like it was key. The number of components actually changed the, the amount of, uh, overhead they had because a reactive system, like you, you'll
[01:20:31]  like create an effect or you'll, you'll, you'll, you'll like update stuff at a certain granularity, a certain scope. So they would like,
[01:20:40]  like felt as a perfect example of this, each component can re-render independently of the tree. So they have code to do that. It's like they wrap each component
[01:20:48]  in effect. Right. And that's, that's why they ended up scaling the way they did, because essentially they would have to like, the more components you had,
[01:21:00]  the more overhead you'd have. Whereas, you know, React, the components are just like more of the same. Like ultimately we were producing the same amount of DOM
[01:21:10]  elements. Like it was just like an extra object. There's like a bit of a memory hit, but it was, it was, it was almost nothing. And you
[01:21:17]  guys are going, okay, what about solid? Well, solid didn't quite scale as good as the VDOM. You can see that the last one was 0.
[01:21:25] 5 instead of 0.4. Um, but the memory was flat. Basically there was like, there's like a little up here, a little up here, but
[01:21:37]  essentially the memory was completely unchanged. Whether I had, uh, you know, uh, 10,000 components or 50,000 components. And you may be like, what
[01:21:47] ? Well, it's because if you think about it, a reactive system scales on interactivity, not on the number of components or DOM nodes. Like the number of
[01:21:55]  create effects doesn't change given the number of components that I have. So in this case, we both scaled really well because React's components are, or VDOM components
[01:22:12]  are basically lightweight and they're not worth anything. And solid doesn't really have components. But the, the one pass renderers that did conceptually have components really took
[01:22:24]  a hit as we scaled them. And this is what we're, where it started for me because I, I, at this point, you know, I was a web
[01:22:30]  component guy. The reason solid didn't have components was because I was like, oh yeah, you'll just use those web components. And then I was doing this at studying
[01:22:37] . I'm like, crap, web components don't scale. I mean, they, they scale fine, but they don't, I'm, this is benchmark,
[01:22:45]  like, like armchair benchmarking, like who puts 50,000 components on a page. I don't know. But like, they were clearly a visible overhead. And
[01:22:55]  I was like, React's got this right. And I'm like glad I did this test because solid actually, I guess, has it right. If I like, this
[01:23:04]  is the moment when I decided to embrace like no component or the component overhead thing. Because I basically said like, I'm going to make a bold statement here for the
[01:23:14]  non-virtual DOM crowd. I think components should vanish in the same way as frameworks. If the new world is compilers, we can do better. We
[01:23:20]  can optimize along bundle chunk lines instead of ES modules. If components are throwaway, think about how much overhead we could reduce by inlining them right in the right scenarios.
[01:23:27]  If components aren't necessary mechanisms for change, like in VDOM libraries, um, you know, what, what is to stop the level two implementation, implementation and
[01:23:39]  above from being compiled into the level zero equivalent? Like, why should there even be levels here? Like, why should like, because this, this chart shows like everything is
[01:23:49]  like the normal way, then add some components and add some more components. That's how, that's how the scaling works. And when I went back to, to
[01:23:57]  look at the real cost of, uh, components, um, much later, uh, when I looked at the VDOM one and sorry, give me two seconds here
[01:24:05]  to kind of show what I'm talking about. When I, when I went back to look at the scale here, uh, was it cost of cost. When I went
[01:24:15]  back to look at scale here, I didn't give Inferno a free lunch. Um, instead of making level zero, their optimal thing, I actually made, put
[01:24:27]  the whole app in one component. And what ended up happening is with the VDOM was the slowest when I put the whole app in one component. And I,
[01:24:37]  you, you might like be thinking, okay, why is that? It's funny though. Once I put, once, once we go to the next stage and, and
[01:24:46]  I add more components, the VDOM suddenly jumps ahead of the single pass ones like Svelte and Lit. And ultimately by the end of this whole process,
[01:24:57]  when I get to the last version of the table, solid's faster than web components. And Inferno is basically right up there with web components. And these two have
[01:25:07]  kind of dropped off the end because the component scale. Now, again, this is a stupid test because I'm putting a stupid amount of components on the page, but
[01:25:14]  I, I want to kind of emphasize that, that this is just talking about creation and update overhead. Um, there's other places where, you know, the cost of
[01:25:26]  components is a real thing because, uh, but yeah, let's, let's go there for two seconds. Cause the, the, the place that comes to mind
[01:25:40]  is, uh, sorry, not that article. That's the art. That's the namesake. I mean, we can go here, but I want to go here
[01:25:49]  first and here. You ever seen this article, hydration is pure overhead from Mishko Hevery creator of QUIC. We talk about a lot of the cool stuff
[01:26:00]  QUIC does, and he codifies what a framework does in terms of talking about different kinds of state management and, um, talking about what needs to run with hydration.
[01:26:12]  But the key part about this is he's, is that this resumable place, like forget about lazy loading is about being able to not run the component again on,
[01:26:23]  on hydration. And if you looked, we've sort of priced ourselves into running the component again. Remember the second that we went to that model where we called set state
[01:26:31]  at the beginning, when we loaded, we're kind of in that model. If you do look, some of these other models could just skip this. If, if,
[01:26:42]  um, if they're not hydrating, but the problem is our hierarchies are trees. We've gone to a component model like this. So to get from a
[01:26:51]  to b to c, we actually need to run this whole tree. Um, and they're all, these are tied together anymore. We can't back here. We could
[01:27:02]  go, oh, maybe we don't need the, like, we could just run part of the tree and not the other part of the tree. But now, like these
[01:27:12]  are together. There's w we can't separate them very easily without a compiler. Um, and that's, that's, that's, that's, that's
[01:27:21]  a point he's making. And if you look at how quick works or, uh, um, resumably works, I wrote an article on this a little while ago
[01:27:28] , but what I showed was like a normal component, our counter, like we'd been using this whole time. Right. And I asked the question, how can we start
[01:27:37]  this component without running at once? Because count is tied to this instance of counter. And if we want to wake it up on click, we have to call set count
[01:27:48]  and use count. And if that count hasn't been instantiated, how do we do it? And I showed an example where you hoist everything and break it apart
[01:27:55]  again. Um, presumably you do this with a compiler, but my point is the granularity of change has to be sub component. If you want to solve this problem
[01:28:05] , you need to actually not rely on the component update life cycle. And I'm not going to get all into resumability in this stream. I've talked about it
[01:28:14]  before, but I want to point out that this is another place where, um, the cost of components is actually a real one, right? So I've talked update performance
[01:28:23] . I talked about hydration performance. Um, someone's asking about this. Yeah. Solid actually fakes components during dev to make it easier for dev tools. Um,
[01:28:37]  don't get me right. I, wrong. I want to author components and I'm, I'm, I'm actually going to pull up my, the quintessential article
[01:28:46] , I guess, for this, for this stream, which is the, the namesake components are pure overhead. Um, I don't know as many people read this
[01:28:53]  as my original real cost of UI, uh, components article, but the, the thing is it was based on Rich Harris's virtual DOM is pure overhead article, right?
[01:29:05]  And I want to talk about this because he, he, he showed this example, and this is getting back to why putting inferno in one component is slower than putting into
[01:29:14]  multiple components. This is, this is, this is the whole change management problem. He was, he gave this example about, um, um, where is it somewhere
[01:29:23]  down here where you basically have a list and some state for whether the items, um, selected. And he was suggesting that every time selection state runs, they, they end
[01:29:36]  up like rerunning the whole list again, because this is just a function. I mean, it's easier to see this with hooks. So technically this has always been the
[01:29:45]  case with react like we're showing, even if you update something that's unrelated to the list, this one is in the list, but even if you update something unrelated
[01:29:56]  to the real list in this component, the component will rerun. The setter is like tied to the component. And funny enough, that is true of Svelte
[01:30:04]  as well. So this, I found this like a really interesting article for Rich to point out because under the hood Svelte is actually the same. Svelte
[01:30:12]  splits the update and create code in the compiler, but they still have this rerun the component model and, uh, sorry, not this one. Uh, do, do
[01:30:20] , do, do, do. Did I? Yeah. Okay. Um, what, what I suggested here is that any real V Dom would separate, um, the
[01:30:39] , the rendering, like you would split this component into multiple components so that you could isolate the updates. That's, that's basically what you do. You can wrap it
[01:30:48]  in a memo or use memo and suddenly you don't have to redo a bunch of the extra work. You just have to tell it when to memoize, which is a
[01:30:54]  challenge in its own right. But what I was trying to point out in this article here is that reactive libraries are pure overhead too, in that they, they don't
[01:31:06]  scale as well on components because the components are the thing that carries the, um, if they're component-based reactive library, um, are the thing that carry the
[01:31:17]  weight. They're the effects. They're the, they're the, they're the observer. And, um, this is, this is a, this is a difficult
[01:31:25]  challenge to balance because, um, you, you, you, if basically if you have, and you see this often with like, I think single file components actually work really
[01:31:36]  well for Svelte and View in this case, because you tend to build larger components with those libraries. Right. Like you, you, you just put more in
[01:31:48]  your component files and it works nice. It's a really nice layout and you just set some state at the top and then you build it. Whereas React, you're much
[01:31:55]  more likely to break your component to like smaller pieces. Like you just, you're like, oh, this is a function, this function, you just kind of compose it
[01:32:02]  that way. And in React, you get, you get benefits. The more components you make, the faster, the more localized the change can be made. But it's
[01:32:11]  a weird contrast because it puts VDOM and reactivity naturally at odds. Like they were right from the beginning, right? Doing rerunning everything, right? Trying
[01:32:23]  to figure out a way to combine the create stuff in here without a cost. And here, this is levering the fact that it only runs once. So yes,
[01:32:38]  reactive libraries do not need to hand optimize rerender because they're already memoized, but I'd argue they're over memoized. Like some people did a study where they
[01:32:48] 're like, oh, actually using use memo here isn't worth it. Right? Like the, like I forget the article, it came up a while ago. Someone was
[01:32:59]  like, yeah, I don't overuse use memo because that has a cost to it. If you memoize everything and it's not that expensive to calculate, you
[01:33:05] 're actually making your app slower. And in a sense, most reactive libraries generally memoize everything. So like you're almost immediately taking on that cost. Sure. The updates
[01:33:15]  are fast, but the creation gets hit and there's ways to mitigate that. Solid actually, key secret here is, while it tries its best to keep things relatively granular
[01:33:28] . So we don't take component costs. When we see stuff that's around the same area that needs updating, we actually group them back together. I don't know if
[01:33:35]  anyone's ever seen this. If they look at the source code, we actually group effect updates because we don't want to create like 10 effects. It's actually like,
[01:33:42]  whether it's 10, whether you update 10 things independently or run it once into a shallow diff, probably worth it. The problem with the grouping everything at a component level
[01:33:53]  is that it's the problem that we were showing here, like where you're like, oh, well, you update the component. Now you have to update the list,
[01:34:02]  you know, or you, you know, you have to do list reconciliation. In solid, we separate things along children boundaries, essentially, where insertions happen, but
[01:34:15]  we group element updates. So we kind of, the heuristic lets us split in the way that's logical for the structure of the code, rather than the way the
[01:34:24]  end user splits it into components. So it's not just pure fine-grained. Someone asked me a long time ago, like, why solve so fast? It's
[01:34:31]  because it updates everything separately? No, hell no. That's actually bad. Like you, it's, you have to do this in, you have to do this
[01:34:37]  in a smart way. If you just make everything fine-grained, sure, you're, you get these really fast updates, but you've actually caused the rest of
[01:34:44]  your app to slow down. You, you gotta be, you, there's a balance to be struck here. Yeah. Yeah, exactly. Right. So this is
[01:35:00] , this is kind of like where, where I'd kind of gotten here, because I decided that really components were the enemy. And I, I mean, that's such
[01:35:09]  a weird conclusion to come from when we, we live in this world where everything's written in components. I'm not saying don't write with components. I'm just saying
[01:35:16]  that the components aren't, the components aren't, um, how should I put it? Like they aren't necessarily the right boundaries. They should be for you.
[01:35:29]  And one of the coolest things I love from using Vue or Svelte is you didn't really think about the component boundaries from an update structure standpoint. You're just
[01:35:36]  like, oh, I'm just making some code. And you weren't worried about it. Like with React, not making, or VDOM, not making the right
[01:35:42]  component boundaries actually is a real performance hit. You know, like real in the sense that I talk about real, I'm sure you can just not bother, but you
[01:35:50]  will re-render too much. Whereas, um, you know, like, like there's whole articles on it. Like, uh, one of my favorite ones from Dan
[01:35:57]  Abramoff. What was it? When to memo? Can I find it? Um, this, this is the actually use React memo wisely thing I was talking about,
[01:36:07]  but maybe I just go to overreacted.io. Um, before you memo, there it is. This whole article is talking about how you can avoid using mem
[01:36:15] os, but using the structure of your code to, to, to, to basically get get benefits, right? Like talking about how you can move state down, lift
[01:36:25]  content up. These tricks are better optimization than any kind of construct that you can build. Like you can use memo or whatever you can use in the framework. Cause they actually
[01:36:36]  just alleviate the problem without having to, uh, rely on, um, like these kind of, you know, special hooks or, you know, actual memoization. You
[01:36:46] 're actually using the structure to memoize for you. So, okay. A lot of stuff to unpack here, but this is, this is, this is just what
[01:36:59]  I, where I'd gone into and really informed the design decision of solid because, um, again, I probably wrote an article about this at some point. I've
[01:37:10]  got lots of those. Was it like, let's try the word fast or maybe performant. Is that a good keyword? Performant. Maybe it's on the next
[01:37:23]  page. I wrote a long time ago. Um, thinking granular, how solid so performant. When I actually went through this whole thing, I was, I was
[01:37:33]  like, oh yeah, it's cause reactivity, silver bullet. And like, no, it's not reactivity. It's because of careful things. First of all
[01:37:41] , compilation to actually clone the nodes and on, on the Dom, instead of like doing like hyper script style, like per element creation, nice chunk of performance improvement for
[01:37:54] , because this lets us compensate for the fact that our, um, our, you know, reactivity is more expensive than just the plain objects that you find in a V
[01:38:04] DOM. Right. So one way we can leverage is we go, we know where stuff's going to run once. Why don't we just optimize for that? Use
[01:38:13]  a compiler ahead of time to do that. Right. So this whole cloning nodes kind of mechanism, right. Um, but it's more than that. We can analyze
[01:38:21]  how to group effects. We can, basically figure out how to come up with an optimal thing. Right. And this is what I was talking about, like loosening
[01:38:28]  granularity. Like it's not just about that. One of my favorite ones that people don't realize is around computations, um, or sorry, computeds. We
[01:38:37]  call them create memo in solid, but people have this tendency to overuse computeds the same way they have the tendency to overuse memos and react. Right.
[01:38:48]  So your, your first temptation is to like, do like a create memo. And then now I've calculated full name, but like full name is not expensive to calculate.
[01:38:59]  You'd be better just to, to, to put it straight in here. And this is, this, this seems like a weird thing, but this is, this,
[01:39:06]  this was a huge design consideration for when I built solid, because I wanted to make sure that people never felt priced into adding, um, reactive wrappers where they didn
[01:39:17] 't need to, because this is like places where you get caught because most of the time people you saw can kind of ignore create memo works and this exists in the same way
[01:39:25]  they use memo. They can just go, oh yeah, uh, I'm just gonna wrap this in a function. And the fact that create memo is a function and,
[01:39:34]  and that this is also a function and signals are a function and everything is just a function means that we don't need to do any special, right? Like this is
[01:39:44]  one of the reasons that I never did something like dot value in solid, because people will be like, oh, how do I pass this API through? What should I do
[01:39:52] ? They're like, they like, how, what's the easiest way, way to make something a dot value? Well, I'll wrap it in a computer.
[01:40:00]  But like a lot of APIs, like in solid, I made it purposeful that you couldn't tell the difference between a signal, a computer or regular function, because I
[01:40:12]  didn't want people to rely on that. And it, because if they relied on that, they'd have a tendency to over wrap. And if, if, if every
[01:40:18]  functions just work, then there's no tendency to make too many reactive variables. You don't need to. And I think this is a really important part for performance design
[01:40:29] , um, uh, for, for, for dealing with reactivity because you don't, the reactivity, while it's the powerhouse that lets you do the fine
[01:40:39]  grain updates, it's also your biggest expense. And it's a very hard thing to balance, right? Um, and again, I'm getting a little preachy on
[01:40:50]  solid side, but this is all gonna be relevant in a, in a minute. Should full name be full name in the second example? It, honestly, they could
[01:41:03]  both be function calls. I am sort of, I don't know why I did it this way. It doesn't really matter. Solid will unwrap the function. I
[01:41:10]  hate that we do this, but it will for these, you know, like, so you don't have to do it, but please do it. It's a better
[01:41:18]  convention. Um, but yeah, these full names should be function calls. It won't do it on attributes, but it will do it on inserts. It's a
[01:41:26]  terrible inconsistency, but I need it in order to handle dynamic components. Does it, this example is bad. You're right. I should go back and add
[01:41:39]  the function calls. Yeah, sure. But I mean, it's a, it's literally the result of creating a system that where everything has to run top down over and
[01:41:51]  over again. Like, like you, like what, what, whatever mechanism you use to compare values and memoize, you still need to memoize and you need to
[01:41:59]  check those memos. And the bigger, the granularity, the more diffing you have to do. Okay. So we talked a lot about rendering, um, here
[01:42:09]  and, uh, this, the, the, and the, and that the trick costs and trade-offs, but I'm going to take this. There's, there
[01:42:17] 's one more thing that I didn't talk about before we actually kind of apply our learning and thinking in practice. Um, is that lists, you know, like the
[01:42:28]  thing, the JS framework benchmark tests, like, uh, when you have a list of users or a list of to-dos or whatever, this is the one place that
[01:42:36]  all the frameworks actually are very, very, very, very similar. I know it's kind of weird because when you see reactivity, the first thing that comes to mind
[01:42:45]  is you're like, oh, um, if I push to this list, then it should, it should just push to this Dom, right? You kind of have
[01:42:56]  this picture in your mind where like, like the proxy, where you're like, you're like reactive state and not react reactive state. And then you're like, and
[01:43:08]  then you're like Dom and you're kind of picture, you picture like if you could do something, right? You could be like, you perform an action and then
[01:43:20]  the same action comes out the other side here. And then you do another action and it comes out the same side here. And you're like, yeah, sweet. So
[01:43:28]  if I unshift and then unshift and all this stuff, the problem is that when it, when, when you have an atom, when you have a single
[01:43:37]  piece of state and it replaces itself and it runs like you're, you're in pretty good shape with this, but lists, the problem is you want to at some
[01:43:46]  point actually batch multiple updates. Like you don't want to like do like one, then one, one, then one, one, then one. Um, you're like
[01:43:55] , okay, let's, let's, these things are related. They affect the view in the same area. I want to actually put those changes together. And the
[01:44:02]  challenge is that for an atom, it's just an overwrite. You can just go like, okay, I have a pending value. I'm just going to overwrite
[01:44:09]  it. So like you can picture, like you can picture a scenario where you're like, okay, um, I'm just going to make a new playground just to kind
[01:44:17]  of say this, but you can picture like, just ignore this, but you can picture, you can go like set count to one. And then sometime later you go set
[01:44:24]  count to two. And if you batch it, it's only here that it's going to do like, oh, count count equals two, like, you, you
[01:44:33]  know, that, that the work is going to get done at this point with count equals two, it's never even going to see the one, but the challenge, and
[01:44:41]  this is done because you can simply just overwrite, write the pending value. But if you're trying to propagate fine grain changes to say like an array, you know
[01:44:52] , now you're in this thing where you're like, okay, array dot push one array dot unshift something. You have to encode all the steps because the
[01:45:10]  order matters here, right? When you add something or remove something like if unshift happens before push, I mean, that's not a great example, but like
[01:45:22]  insert, like you might insert at the wrong index. Like it actually matters what the insert at index one, some value. Okay. Let's, let's pretend that was
[01:45:33]  the API. My, my, my point is the order actually matters and you have to kind of replay them. And the problem is what if this work happens on a
[01:45:44]  server? Like outside of your preview, you now have just an arbitrary new array that isn't, um, what you expect it to be. Um, you know, like
[01:45:57]  you don't have these distinct operations anymore. And for that reason, every JavaScript framework does diffing on lists. Yes. Svelte, solid, everybody diffs
[01:46:08]  lists. Okay. And while there's people looking at ways to optimize like single operations, essentially there is a reconciler to diff lists. And again, there are
[01:46:29]  three ways to diff lists, magic number in threes. Okay. The three ways to diff lists are one, um, by index, two, by key, three,
[01:46:45]  by reference. Okay. Hopefully you, everyone's still with me. I know this is a very technical, uh, discussion and talk today, but I, I,
[01:46:58]  I want to kind of pull all the elements together here so that we kind of can talk about these things in the same sort of way. So by index is a very,
[01:47:08]  um, naive way of doing it. I mean, it's actually very simple, right? You just check what's in the, you just assume that what's ever in
[01:47:19]  that index is the thing, right? You can go, Oh, okay. Well, um, if, and the, the effect of that, sorry, I mean
[01:47:29] , I guess I should draw like a list, shouldn't I? Like we should draw like something that looks like a list. Yeah. Let's do this. Let
[01:47:40] 's, let's, let's make our list. Make our list. All right. Cool. I'm going to need three of these ultimately, won't I? So
[01:47:58]  let's, let's make our lists. All right. All right. And so by index means, I mean, the, the thing that I'm not showing is
[01:48:20]  I'm pretending like this is the final output, but there's like, this is so hard to show because you, there's like the previous and the next stage of
[01:48:31]  it. But like, if you switch the first two items when you do it by index change, um, essentially. So, I mean, let's play this game and
[01:48:44]  let's make more of these. It's fine. I'll just stash this away. Let's pretend. Uh, yeah. You know what? I'm going
[01:48:54]  to, I'm going to, I'm just going to do this across. We're going to go a, we're going to go B and let's put C in
[01:49:03]  for good measure. It doesn't really matter, but okay. Um, when, if we switch AMB, what's going to happen. And then this is hard
[01:49:36]  to show in this, but we're, we're, we're just going to take the same DOM nodes without moving them. And essentially, all right. And essentially
[01:49:57]  just override the DOM nodes. No DOM nodes actually move when we, when, when we switch the, this data structure, because if you had a user here and,
[01:50:12]  and it was John Smith and this is, I don't know. Um, Michael Smith, Michael, I don't know. Oh, whatever. John Smith and Jane Do
[01:50:25] e. Okay. John Smith and Jane Doe. Um, when you switch it over here and you were displaying the names, you're just going to switch those names
[01:50:34]  on the same, like text nodes. You're not going to recreate any DOM elements. Yeah. I was thinking about using colors. Um, but it's like, this
[01:50:44]  is, this is so granular that it's, it's, it's, it's hard to actually show the difference because the DOM, the, the text fields in
[01:50:54]  here change. Maybe that's the best way to put it. Let's, let's, let's go here. essentially let's start with black and assume that we
[01:51:03]  have a couple like text fields, right? inside, inside, inside, inside our, our representation. And uh, let's see if I can make a couple more
[01:51:24]  of these. Yeah. And this, yeah. Okay. Thank you. Colors is how we're going to solve this problem. And then when we switch it,
[01:51:35]  X is probably just going to be easier for me to just copy this one over. What this is by index, by the way, we'll, we'll do the other
[01:51:41]  ones in a second. When you switch this by index. So this goes here and this goes here. Um, oh, actually, oh yeah, we should. Yeah
[01:51:56] . Okay. Okay. Yeah. This is such a weird, coming up with the right visual for this is actually really hard. Yeah. Yeah. Yeah. Cause you,
[01:52:09]  what you're suggesting is that I should actually have made these as all separate blocks instead of making them as a one giant container, right? Like actually like draw these as boxes
[01:52:21] . Okay. Thank you for helping me come up with the right way of representing this. Cause if a dom, it, we're going to color code each, uh,
[01:52:37]  each, um, dom node. Okay. Which is a little bit of fun, but yeah, let's color code each dom node. Let's make the next one
[01:52:50]  green and then let's make the last one. Some kind of blue color. Okay. I did not pick the same blue color. All right. Okay. Here's
[01:53:17]  our list. All right. All right. Here we go in business. And to be clear, I'm just going to, I'll do them at each one at
[01:53:40]  a time. So we'll do by index first. When we, when we switch these by index, what ends up happening is funnily enough, even though the data
[01:53:48]  changes and the dom nodes update, um, nothing actually moves. So like in all these cases, the dom is fully updated. It looks like it's switched, but
[01:54:07]  in by index, you actually reuse the dom nodes. That's already there. Right. It's yeah. It's, it's basically like the, the, the,
[01:54:16]  the, the props swap around. Someone's suggesting it's, it's, it's, it's basically like that. Okay. In our next example, we'll
[01:54:28]  do by, we'll do, uh, black, we'll do by key. And in by key, what ends up happening Is Actually a little bit easier just to
[01:54:52]  delete this And by key, what ends up happening is that, okay, let's copy all of this. They literally switch a stays red Um And green stays blue.
[01:55:24]  This is what a keyed update is. Um, And you might be like, oh, well, who cares? What, what, like, sometimes this is actually
[01:55:31]  a lot faster because you're not actually, um, like if you're deleting a row, let's say you like delete C or delete A. Um, I mean,
[01:55:42]  it depends on the CSS, but like, if you delete A in, in it, I mean, we can actually see what that looks like. Let's, let's
[01:55:51]  add one more example to our, our, our, our, our list. Let's delete B after, after we're done. So the operations are like initial initial
[01:56:06]  it and then this is swap a B and then this is this is going to be delete B, okay If we delete B in, by index, this is what happens
[01:56:49]  right? If we delete B in keyed We delete B Okay, so this, this, this, you might be like, okay, whatever, who cares? But
[01:57:10]  I want to, I wanted to point this out because, um, my blog This, this article has the best links to all the old ones. Um, actually,
[01:57:27]  you know what, maybe it's just easier to go to round three and then go next Oh, yeah, there it is. The, the reason we care about this
[01:57:39] , and this is the same reason that React yells at you per furiously about not including click keys, is when it's keyed, it's the same thing. This
[01:57:50]  is a really silly example, but what he did was he went in an element When it was non-keyed, he set the background color and then he updated the
[01:57:59]  data and the element kept the color even though it's completely different data and uh, the example that Oh, did he update it? Oh, he did update it. This
[01:58:10] , this, this used to have a really cool example. No, here it is with the CSS transition. See the X blowing up You click the X and the,
[01:58:21]  it actually is still animating on the wrong element um, after, because the original, it reused the element, so like you deleted it and then the other element shifted
[01:58:32]  up and it's still animating the, the deletion animation on the wrong element when it's non-keyed So like essentially what I'm getting at is
[01:58:49]  It's not just this. Think about any place where there's ephemeral states stored in the DOM Um, sometimes this applies to things like input elements. Sometimes this applies
[01:58:56]  to things like, uh, um, web components, which tend to hold their own state. Basically, there's a whole bunch of things that it actually matters You know,
[01:59:11]  and you can get weird broken behaviors if you do Non-keyed and that's the reason why the JS framework basically ignores non-keyed But the reason I
[01:59:20] 'm focusing on this is it's the same reason that React yells at you to include keys And this mechanism as this is true in all frameworks in Vue, they don't
[01:59:29]  yell at you or Svelte They don't yell at you about including keys, but it is the exact same problem Right? So I told you there's a third
[01:59:41]  way to do it Right? Because the the way to do it when you do it by key Um, essentially what ends up happening is Is On the element you're like You
[01:59:52]  pick some part of the data. So you're like, oh by keys. So like Row dot id you're like, okay If row id dot matches then we know it
[02:00:00] 's the same thing and then we can use those same elements again But it's a little bit more sophisticated than this because what if you have Multiple changes happening at the same
[02:00:11]  time? What if you both swap the row? and Add More Like update it at the same time. So you The the thing is If you swap a row if you have
[02:00:25]  immutable data Swapping a row keeps Like the reason you need the key is swapping the row keeps the reference, right? If you ever I mean Like what like
[02:00:38]  The typical pattern for immutable data. Let me see if I can Do I have another playground open? Yeah, okay Like typically if you were to swap a row With imm
[02:00:46] utable data what you do is you'd like get you start with array one, right? And then which has some stuff in it like a And b you know and c
[02:00:58]  And if you're going to do an immutable swap of these what you might do is go oh uh const array two equals Like let's I mean there's different ways to
[02:01:10]  do it, but you'd make a clone and then you'd go okay. Well array I think I think I think I can even do I can't remember if this
[02:01:19]  Works, uh, I want there's like a cool trick you can do with the s where you can like You can do like I know i'm not gonna i'm not
[02:01:27]  gonna be fancy. I'm just gonna do it. Okay, so we're gonna say that array uh 2 at index 0 equals array 1 at index 1 and array 2 at
[02:01:42]  index 1 Equals array 1 and index 0 and If I console log Array 1 and array 2 at this point we're gonna see We're gonna see a list that
[02:02:01]  has been swapped and unswapped so the original is unchanged the change is immutable But these are simple Simple Values, but now if we have an object And We
[02:02:21] 're doing this Right Um Yeah, our console is Kind of compress these all out so we can't see them as easily Um The challenge Here is This is fine because we
[02:02:44]  didn't change any of these objects and the references are going to be the same But if we actually on top of swapping them Also want to mutate um The value
[02:02:55]  The value here to let's say a 1 What we actually have to do Is Clone it As well We need to We need to take So we need to go Uh, we
[02:03:07]  need to go this Dot Array 0 And then we need to go V equals A1 And i'm cloning it to be fair I don't need to clone it
[02:03:20]  because it only has a single property But I just like this is the typical immutable pattern And then in so Because if we didn't clone it I mean, I can
[02:03:27]  show you what happens if we don't clone it, but The original array At index 0 Would be changed But we can see in the original array here It's A And in
[02:03:38]  the original array And in the new one It's A1 See B is fine B is C If we didn't clone it here And we just And we just Changed Ch
[02:03:48] anged it We We would basically Have corrupted the original data And it wouldn't be immutable But my point now is These are different objects Right This This object now That's
[02:04:03]  sitting here Is not the same as the original object That was sitting here Which means That It No longer It basically You need a way of knowing It's the same And that's
[02:04:15]  why We have the keys Right In index We didn't care But we have the keys here Because if you key by Just the value And you clone this immutable data
[02:04:28]  Well, it's going to think It's going to think it's a new object It's going to destroy And recreate it So We need keys To know it's the same
[02:04:35]  thing And more so When we When we hit Something that matches And it's the same with all of these Ones Essentially If it matches If it matches For both of these
[02:04:47]  approaches We actually What I call merge Deep By that I mean Or diff deep Because Because We need to know What changed It's not enough To know that The object is swapped
[02:05:03]  We actually need to know If any keys on it had So when we When we match When we match here We're like Oh Match We go Oh It's And It's
[02:05:19]  Not Refer Not Not equal Like It's a different object Match And it Is A different object Oh man I'm getting cut off on the side here I don't know What's
[02:05:36]  my best way of doing this But yeah If it matches And it's a different object Match Plus Diff Object Diff Different Different Object Diff Deeper Okay So In
[02:05:58]  both of these approaches Like Essentially When Once it's Placed it If If If it knows That Like That Something has changed Because it's a different object It needs to actually
[02:06:13]  Diff Deeper To make sure That it doesn't miss Any changes Further down And I want to show you The third Approach now Although this one Will be a little bit
[02:06:25]  Quicker to do Because The third Approach Is Almost identical To the Keyed Approach Okay And this is By reference But by reference Doesn't really work With immutable
[02:06:42]  data Because Key is actually An improvement On that If you do by reference And the object changes It's not the same reference So In a sense This is kind of awkward Because
[02:07:01]  You don't Want the change To be Immutable You don't want to do this By reference Means all your change Has to be mutable Okay So The key part For
[02:07:15]  this one Here Is Immutable That's That's That's the key part So If we're like Kind of trying to Cover this whole Zone here These ones Work Pretty well With
[02:07:34]  immutable data This one Works with Only mutable data But You don't need a key As long as you can Keep the reference As it turns out Reactivity Is mut
[02:07:47] able But It has an interesting Characteristic Because When You match In this mutable World When you match And you realize That it's a match Because it's the same Reference
[02:08:03]  It can't Possibly be Different Like Deeper Like you can't Tell There's no way For you to Diff it So When you match On a reference Thing You
[02:08:14]  match And stop No more Diffing Match and stop If You want Something Deeper To update Like one of These little Cells Here You need To update It Independently
[02:08:36]  No Svelte Uses The first Two In fact Everybody Almost Everybody Uses The first Two All the Popular Frameworks Like up Here This zone Up here Is React V
[02:09:00] ue Svelte I don't Know Angular Probably has The means To do This In one Of their Billion Modes Right But This is This is How You Do it In
[02:09:14]  all These Frameworks Is the Last approach The fastest Of course I mean Of course It's the Fastest Right There's a Trade-off Because The object Can't Change
[02:09:35]  So If you Want Something Like This Is Like It's not Just solid Down here Knockout I think Old Angular Like Angular One Like Basically Frameworks That were Based on This
[02:10:00]  model Of the Create Once Right I told you Svelte is More like React Than it Is like Solid Right But Reuse Rows Is non-keyed Which is Danger
[02:10:14] ous Right Potentially So We're Talking about On the Keyed Side Of Things Right I think There's Ways to Mitigate That Potentially But Just on A
[02:10:25]  pure Reusing Rows Is some Kind of Hybrid Between Like The Buy Index Thing Like I think You could Do Some Clever Stuff Where You Could Like Hold Something Purify
[02:10:37]  It And You Could Get Some Improvements By Not Recreating The DOM And You Could Probably Keep It Clean Enough But Like Generally Speaking For Use Any Kind of DOM Recycling
[02:10:44]  There's Ways To Optimize Things Even Further Because By Index Often Is More Performant So If You're Selective You Could Be Like I Want Certain Operations To Work Like
[02:10:54]  Index And Then Other Ones By Ref And Then You Could Make The Most Optimal Solution If You Knew What You're Doing But As A General Solution It
[02:11:00] 's Dangerous Is The Way I'd Put It Right Right So The Thing Is This Works Really Well For Solid Because It Never Wants To Recreate Anything Anyways Like Why
[02:11:16]  Would We Bother And Because We Never Create We Have These Fixed Things Right Like Like Like Like We Already Kind Of Went Through This Like If We Create Things Once And
[02:11:30]  It Never Reruns But The Thing Is You Have To Understand This Always Has To Diff Deeper If It Detects A Match And Generally Because Of This These Systems
[02:11:40]  Don't Care If Your Data Is Deeply Nested Generally Speaking Like If You Update A List You Can Just Throw It In The Signal And It Will Just Diff Down
[02:11:48] wards Right Because It Any Change Of Data Like Our To Do App Or Our JS Framework Benchmark Any Change Here Like If I'm Updating Every 10th Row
[02:12:04]  It's Actually Running Through The List Reconciler And Actually Going Oh These Ones Changed So I'm Actually Going Check That I'm Matching Yes These Are
[02:12:16]  The Same Same Same Same Sorry Matching Not The Same Object I'm Going To Diff See That This Change Apply It It's Funny I Clicked here, okay,
[02:12:25]  same element, same element, no change, no change. When I swap, it's going to go, essentially, it's going to go, okay, same, fine
[02:12:34] , oh, different element, find it and go, okay, but I found it. So I know that it hasn't changed. So I don't need to diff it
[02:12:43] , right? Well, it depends, like if it's key, if the key matches, and the reference is the same, then I know I don't have to diff
[02:12:50]  it, essentially. Essentially, all changes to the array go through the top-down array reconciler with most frameworks. So, like, it's, whereas if
[02:13:03]  you are doing this referential thing, and you're never doing that, like in the case of Solid, when you click update every 10th row, it doesn't run
[02:13:14]  the array logic. It wasn't the array that was changed. It was a signal that you created once down in the tree. This doesn't, this has nothing,
[02:13:24]  this, this doesn't even know that it's in an array. It's just updating independently, just like that one text note. Right? So, like, this
[02:13:34]  is, this is interesting, because to be fair, if your system only has by ref, and this is Solids4 component, to be clear, we also have by
[02:13:44]  index, but this is Solids4 component completely. How do you handle data from the server, or like the stupid DBmon benchmark, where you're like shooting people
[02:13:55]  fresh snapshots that don't have data? Like, this works really good for fine-grained stuff. Like, when you go, okay, I move this row,
[02:14:02]  or I sort this list. As long as you have the change, and it's happening in the DOM, it's fine. But if it's coming from a server,
[02:14:06]  it's like, okay, this is all new data. I can't match it. How do you match it all at a key? Well, the solution I came
[02:14:12]  to with Solid is actually handle the data at the diffing level. And we have a reconcile function for stores where we can do data diffing and then promote out the
[02:14:20]  fine-grained thing. But the reason I did that way was because the DOM now is really stupid, because there's a diff mechanism, but it's just for
[02:14:29]  this, but it's like one of the simplest diff mechanisms in that sense. Because we don't do deep diffs. It just, if you just go use Solid
[02:14:39]  right now, by default, you don't, there's no deep diffs. We don't ship that code with the main part of the bundle or whatever. Like
[02:14:48] , it's something you opt into. So, again, this isn't all about Solid, but I just wanted to kind of point out that this is one of the
[02:14:57]  reasons why, and I've mentioned this previously with the JS Framework Benchmark. Classically, VDOM libraries have had a very difficult time with these,
[02:15:08]  not super difficult, but they've had a harder time with these two rows, because selecting a row and partial updating a row are going to have some overhead, right?
[02:15:20]  If you get to this side with the reactive libraries, you'll see it's like almost partial updates are like pinpoints, so they almost have no overhead over the vanilla DOM
[02:15:30] . But, yeah, over time, frameworks have gotten more optimal in these areas, but historically speaking, this was the, basically, adding reactivity made these fine-gra
[02:15:45] ined updates, like partial update and select row, faster. That's what they did, but they don't affect, like they have, if anything, they probably,
[02:15:53]  if you're building a bunch of reactivity, they kind of have a cost on the other end. So, it's challenging, right? I wanted to point this
[02:16:07]  out here, because the difference by mapping by ref and mapping by key is actually different. Even though they look the same, by key ends up doing more work, potentially.
[02:16:24]  It's possible, though, because as long as you do mutable change instead of immutable change, it does cross the boundary pretty well, right? Because, but
[02:16:39]  you have to make that decision when you do the update. Because if you do mutable change, then it, then this doesn't know that it's changed, and
[02:16:49]  it won't rerun the list, and then that deep mutable change could run independently. And, again, just doing this to kind of get, get the context.
[02:16:58]  I think, I think I've explained arrays and lists well enough now that we have almost all the context we need to get into most of our topic today. Yeah,
[02:17:09]  and you're getting there. So, so then you're like, okay. Clearly, there's a trade-off between reactivity and VDOM. So, what
[02:17:19]  if we use them both together? Wouldn't that be the best combination possible, right? That's, that's, that's, that's where, that's where all
[02:17:29]  of this is kind of heading to. And there's, luckily for us, there's a framework that's been doing this for like seven years, and that's, that
[02:17:35] 's called Vue. Very long time mixing, kind of matching these patterns together. And, essentially, Vue does fall on this side of things. But Vue
[02:17:48]  has done a lot of really smart stuff, because I mentioned before, there's this really awkward thing that with a reactive system, you want less components. And then with the
[02:17:56]  VDOM, you want more components. And it's like this really awkward tension. And, and Vue used to get hammered here, like in benchmarks.
[02:18:09]  Let's see if I can find some historicals here to show you what, what I'm talking about. Let's go back. Can we go to like, what,
[02:18:16]  like round seven, I want to say? Maybe round eight. I can't remember. These are, these are classic benchmarks. Let's see if I can find this
[02:18:27] . See, like select row or something. No. I think this is partial update. Yeah, okay. How about partial update? Yeah, partial update. Do,
[02:18:48]  do, do, do, do, do, do, do. View is over here. 168 on partial update. Okay. Over here, we, look, knock
[02:19:00] out. This is, this, this framework is like super, super freaking slow. Like, you know, from our modern standpoint, huge hog. But it's like
[02:19:08]  almost, it's like right up here with the partial update. Svelte's actually pretty fast here. Surplus, Angular. Surplus is kind of like Solid's
[02:19:16]  predecessor. This is before I put Solid in here. Reactive. There's a VDON library, EV, in here. So props there. But my point is
[02:19:25] , look, React is here. It's not even with MobX. React and MobX. React, Redux, React. They're kind of in the middle of
[02:19:32]  the crowd, around 93. And then you have view over here. Way over here. Just putting Reactivity and a VDON together is actually kind of terrible for
[02:19:45]  performance. Because you're taking both costs. Suddenly, you're like creating this VDON and you're creating the Reactivity. Like, sure, the Reactivity should
[02:19:54] , the funniest thing about this is, it was like, this is, this one was weird for me because I was like, wouldn't the updates be fast because the React
[02:20:01] ivity? And, you know, like, it depends on which one you favor. The problem is when you build the implementation, they had to make a choice. Make
[02:20:11]  all the benchmarks slower or make the one slower. And they decided to make the one slower because it was like a better trade-off on performance. But it was like,
[02:20:20]  do you make more components and optimize more the VDOM way and get better creation? Or do you make less components and take the hit the other way? Where,
[02:20:36]  yeah, it's just a very difficult balance that happened. Except, and it was like that for years, honestly. Vue managed to always get in front of React
[02:20:46]  in terms of performance, but only marginally because, I mean, they just, they spent more time on performance and tuning it. Like, Vue did a good job
[02:20:54]  of tuning it and making it better. But they had a much bigger hurdle to overcome initially. But then they found a solution. I love this solution. Vue 3
[02:21:07] .2. So, only about a year or so ago, quintessential quintuplets, okay. They made, first of all, they made their reactive implementation,
[02:21:22]  like, way faster, which is good on them and improved memory usage. But the big thing they did was they added this Vmemo directive because now they had the
[02:21:33]  ability to essentially make the large components that the reactive system liked and then say that, like, actually, VDOM, treat this almost like its own component so that it
[02:21:46]  can optimize run separately. And by annotating parts of the template, you can now get the benefit of having, like, multiple components in a reactive or in, like
[02:21:57] , a VDOM system with keeping the boundaries large, that reactive system things. And, yeah, it was a big push. Vue went from being, like,
[02:22:06]  in the 170s or 160s or, I think, around that point. Like, they basically just jumped right past Preact and straight into, like, Svelte
[02:22:17]  territory on performance. Because of being able to actually have a solution to optimize it. But as I said, a naive approach here doesn't help us. Because it,
[02:22:31]  like, you're just taking both overheads. All right. All right. Everybody still with me today? Let me, it's really hot in here. All right.
[02:22:50]  Okay, so, yeah, I want to talk about that because Vue's approach is, like, an amazing piece of engineering because they figured out how to take the
[02:23:06]  VDOM, find the static nodes, hoist them, do a whole bunch of optimizations. optimizations to actually let both sides play nicely together, like the
[02:23:18]  Vmemo and all this stuff. But naturally, just mashing both systems together, actually, while it's, like, really cool for DX, is actually really bad
[02:23:27]  for performance. Yeah, I do have AC, but we have to be careful running it, essentially, because we've been having rolling power outages if people run the
[02:23:41]  AC too hot. So, I'm pretty sure we're sitting at about, not too bad, like, 82, 84-ish. But the lights in here make it
[02:23:48]  kind of difficult. Ah, you guys are hilarious. I thought Vue had 15 modes. No, I think Vue has, like, 6 so far, but
[02:23:59]  there'll probably be more. Okay, so, yes. Here we go. Um, I've been going on about this for long enough that we probably should talk a bit
[02:24:11]  about... Let me make a banner. I've been so bad this stream. We should probably talk about Preact Signals, because I've already been talking for two
[02:24:23]  and a half hours, and I haven't even talked about it. Which, I warned everyone at the beginning, because that's... That's, uh... That's what
[02:24:33]  I'm doing. No, not 80 degrees Celsius. No, 80 degrees Fahrenheit. Yeah, so... This is an interesting thing, because... Oh, I guess there's
[02:24:48]  one more piece. Before we really get into it... Sorry, guys. I put this banner up prematurely. I will... I'll bring it back in a minute.
[02:24:56]  Okay. One more thing I want to get into. Because this comes... This comes in. I showed you about... We talked about Vue, but there's one other
[02:25:04]  place where we mash Reactivity and VDOM together. And that's State Libraries. It started with MobX. And, yeah, actually, you know what?
[02:25:14]  Let's make a banner. State Libraries. Yeah, so I want to talk about State Libraries, right? I kind of talked all about change management to this
[02:25:26]  point, but what ended up happening, and this is going kind of back in time here, because there is a side effect of this move, right? Because at this
[02:25:36]  point, this was very much a concern. We had this change management mechanism. And I'm going back, you know, a little bit in the stream to kind of come
[02:25:43]  back here. We went deep, but we're kind of stepping back for a minute. Because this was all part of the framework, it had the ship with the framework
[02:25:51] , and this is the only way things happened. So, essentially, our framework would basically create the whole system for us. And before React's component model came out, you
[02:26:00]  would just use the mechanism, the framework ship. You're like, oh, that's how change works. There was no idea of state management libraries, because models were kind
[02:26:09]  of implied. Even though a library like Knockout didn't have models, essentially, for the most part, this architecture was implied. So, even though the library might
[02:26:20]  only ship with this part, some of them did ship with the models as well. Essentially, you knew that you're in the neighborhood for models. You get some backbone models
[02:26:33]  or whatever. This is what you were looking for. So, essentially, there was never a question of how you'd handle global state or, like, state management,
[02:26:43]  because it was part of the framework. When this happened, like, React was kind of like, we don't even care what's over here, initially. They're like
[02:26:53] , honestly, this is just not our concern, right? And as I said, other libraries like Knockout had taken sort of that stance. But now, because we
[02:27:00]  had these kind of pockets, like, you could live in this whole world and, like, pretend this didn't exist anymore. And so, React was like, yeah,
[02:27:08]  whatever you want. But we had a lot of people who were, like, used to this kind of stuff. They're like, well, I got database models. How
[02:27:15]  do I keep it in sync? How do I manage this stuff? And React kind of gave us an answer early on, because they realized that people were confused. Because
[02:27:25] , like, you know, everyone's like, doesn't the framework handle this? And React's like, no, we're a library, right? Like, this is
[02:27:31]  where I feel like the framework library distinction came from, right? Because it was, like, people expected this kind of consideration to be part of the framework. And React's
[02:27:44]  like, we're just a view library. We just do this part. Obviously, I called React to framework in my last stream, and people gave me heat for it
[02:27:52] , which I find a little bit amusing. It's hard not to call React to framework these days. But, I mean, early on, I think the library's statement
[02:28:02]  was fair, and it made this distinction very clear. That was its goal. And, essentially, they didn't care. So, they showed us Flux, which
[02:28:13]  could actually be implied on a lot of models, like things like Backbone worked with it. And they also, not before long, Redux came around. Right? And
[02:28:25]  Redux is a beautiful, simple thing. It's so funny, because when people talk about Redux, and they're like, oh, it's so complicated and
[02:28:38]  all that. What's complicated about Redux is it has so much boilerplate, because it is the simplest solution you could think of. And I know it's so weird
[02:28:46] , because it's, like, not easy, but it is incredibly simple. When people talk about a difference between being simple and easy, Redux is an example of,
[02:28:55]  like, at its core, it is the simplest concept. But it is not easy to use, classically. It's now Redux Toolkit, which makes it
[02:29:03]  easier to use as well. But it's because the simpleness of the model was just, like, like, I mean, it's an equation, right? Like,
[02:29:13]  it's almost like React's own equation. Like, how far is Redux from React when you consider the equation, right? Because React's equation was, what was React
[02:29:24] 's equation? Everyone loves React's equation. And what is it, view equals function of state, right? This is React's equation, right? We've all seen
[02:29:36]  this. Redux equation is state is a function of state and action. It's boilerplate hell, traditionally, when you don't use Redux Toolkit, which
[02:30:00]  makes things much easier to use. But it's because it's this simple. Like, you don't need a library. Like, if you want to use Redux philosophy
[02:30:07] , you can literally just go, like, write a function somewhere. Like, you don't need Redux to do Redux. Like, it's just a redu
[02:30:14] cer. It's just, like, I mean, React added useReduxer inside the core when they went to Hooks. Like, it's just... Like,
[02:30:21]  it doesn't take long to see how these chain together, right? Right? Like, if function of state is view, and state is a function of state and actions
[02:30:31] , and we use mathematical composition here, then, therego, view equals a function of a function of state and action. Look, I've solved the React equation.
[02:30:49]  But, what I'm... Yeah. So, like, what I'm getting at here is that, like, this fit really well with their model, because it's,
[02:31:11]  like, you don't do any work until you ask the question, which is function. It's pull-based, but people wanted push-based solutions, obviously.
[02:31:22]  Like, they wanted to be able to... Like, this was really automatic, especially with, like, two-way binding. Like, this circle becomes two-way binding
[02:31:29] , basically. And they're just like, what is all this boilerplate to set all this stuff up? So, people came up with an approach with that. One
[02:31:37]  of those approaches was MobX, where you basically... All you have to do here is keep your component box, right? Sorry. Let's drag over here. What if
[02:31:51]  you could do this? Sorry. I've got to get the right selection. There we go. What if we could take this component box, and let's get over
[02:32:00]  here a bit. And what if we could kind of do, like, play a little game here, where we stretch this out a little bit, and then we're like
[02:32:08] , okay, I got a secret for you guys. We'll move this up here. We'll put this still over here. We'll keep it inside the box.
[02:32:16]  Then what we'll do is we'll make another little box in here. Or, you know, maybe we won't actually keep it in the box, actually. We'll
[02:32:26]  make it look like a box is a better way. Let's actually leave this box here. And then we'll make a pseudo box. We'll make it maybe a nice
[02:32:38]  purple color, dot, dot, dot. We'll make a pseudo box here, and we'll do this. And then... All right. We'll be like,
[02:32:53]  this is our component. Sorry. And we'll put... I'm going to just put the label mobX here. Okay. Okay. And we'll make this our component
[02:33:07] . And we'll do a little secret where this part runs once. And it's hoisted out. And this part... ...runs lots. This is basically how
[02:33:24]  view works, too, in a sense. But the trick to do this with inside React was hocks, essentially. You can make this run lots using... ...w
[02:33:38] rapping this in an effect, essentially. We could just, like... We can make this an effect to run the JSX view. And then memoize... So,
[02:33:49]  sorry. So, the effect is here, at this boundary. And then memoize this boundary on props, memoize. And essentially... So, this is, like
[02:34:01] ... When I say memoize, I mean, like, React memo, like, essentially. We could basically separate the component. Make it look like a component. But
[02:34:11]  give it isolated areas to execute. So, in here... MobX might be, like, oh, yes. Let's create a observable. Which is the same as
[02:34:23]  a signal and all that stuff, right? So, observable here. And then down here, we're, like... There's an effect. Let's, you know
[02:34:29] ... Listen to... I mean, you just read the observable here. I don't know what the best way to say that. But, like, this here is
[02:34:40] , like, create. Create observable. Up here. I'm running out of colors. Sure. And then... Down here, we're, like... Read observable
[02:35:04] . And now we have our auto-tracking for our reactive system. And we can basically live inside a React world. But the problem is, React doesn't know
[02:35:14]  about this. So, you basically have to write a whole bunch of wrapper hawks to basically split things apart again. And let you get, like, component-level,
[02:35:23]  semi-fine-grained-ish updates in your system. Right? So, this is really kind of convoluted. But the wonderful thing about it is
[02:35:36] , you just start authoring components that feel like they run once. You, you know, you build some state, and then you read it in the JSX, and
[02:35:45] , like, you're done. This is how Vue works, too, essentially. Like, Vue internalizes it, which is why it can optimize it.
[02:35:54]  In React MobX, you actually have to, like, write a whole bunch of wrappers. So, essentially, a little bit messy trying to make it work within
[02:36:07]  React's constructs. But it actually works really well. And the truth of the matter is, there are other mechanisms kind of similar to MobX that do this sort of
[02:36:19]  game. Where, you know, we've talked, or people talked in other things that, like, of this school here, you have things like Zustand or
[02:36:29]  whatever. Right? Which is kind of continuing off this side, perhaps, for the redux side or whatever. But then you have on this side, you, you know
[02:36:40] , there's things like, what, Valtio? I can, I know, or Vialto? I don't, I don't know the name of it
[02:36:48] . Sorry. But, like, a lot of the state managements, there's, there's, like, with hooks, there's, like, a third version
[02:36:56] , which is kind of in the middle, which is where, like, Jyotai lives, which is where it uses something that looks kind of like Reactivity,
[02:37:04]  but actually triggers the internal stuff inside React. But, essentially, there's three types of state libraries in React that kind of follow along this side. And this is a
[02:37:18]  newer post hook things, recoils in this pile, too. But, you know, actually, let's, let's just give ourselves a little bit more space here.
[02:37:35]  So I can talk about this more. It's, like, end of the mouse pad. All right. Let's go up somewhere here. Okay, cool.
[02:37:46]  But my point is, they all have kind of different takes, right? This side is, like, this side is very much, like, on this kind of trip of
[02:37:58] , like, kind of, how should I express it? It's, like, everything is pull-based. It's, like, pull-derived. Like
[02:38:08] , it's kind of, like, this side is very much on this kind of, like, push, kind of, reactive kind of thing. To be fair, most
[02:38:18]  of these systems are actually push-pull. But I don't know how much I should strain on that. And then this type is, is also, is this
[02:38:28]  kind of, uh, it's smack in the middle. I don't know what to call it. But, right. The truth of the matter is these libraries have gotten
[02:38:42]  more popular because these, these use, like, this is, like, in a sense, this is, like, this use, like, I'm trying to think of
[02:38:52]  how to differentiate this side. But, like, this side uses plain objects, generally, plain objects, plain objects, right? This side uses, um, reactive data
[02:39:07] . And this side uses react's own state. This is probably the, the, the, the difference, if I may, um, between these, these approaches,
[02:39:29]  is that, like, this doesn't care about the data being, like, in the data. Like, it doesn't care about the change being in the data.
[02:39:41]  It's, like, it's, like, completely pull. This one, all the changes in the data. And this one's using react's own mechanism. Right?
[02:39:49]  And the thing is, using, um, there's a lot of benefits of using react's own mechanism. Because when you add another piece on top, like, another
[02:40:04] , uh, state management mechanism on top, you have this challenge of, like, react's change mechanism still has to run under the hood anyways. Now you just have two
[02:40:14]  systems. This one eliminates it. And this one isn't really much a system in itself. This is very much aligned with what react is. Where this, and this
[02:40:22]  one actually, like, uses react. And this one is, like, um, like, its own thing. And the reason I wanted to point this out is, I
[02:40:28]  haven't looked at the recent results recently. But I want to, I want to, I want to show you something. It's that a bunch of people come in and
[02:40:37]  they're like, oh, I'll create this state library and improve react's performance. And, I mean, let's look at state library's impact on performance.
[02:40:47]  Okay, so the slowest one I see here is called react's star beam. Um, this one is that new universal reactivity coming from the Ember team. I
[02:40:57]  think it's still, like, in beta or whatever, which is probably why it's, it's way over here. But then we got react focal. React diagon
[02:41:07] . I don't know what that is. Um, react zeus. Stand react redux. They're both over here. Um, a more optimized redux.
[02:41:19]  The traditional react redux. I guess this is the hooks version. Um, let's keep them going. React tag state. React mob X. So here we're getting
[02:41:28]  some of those reactive libraries. React 17 donate. This is the class implementation. I don't think it's very optimal. React recoil. React easy state. Um, and
[02:41:39]  then we get to react hooks. Okay. And actually, you know what? Screw this. I think, I think I have an easier way of showing this. Let
[02:41:47] 's just go which frameworks and just do none. And then just select all the ones that are prefixed by react. So we can just like see them all in one easy
[02:41:58]  thing. because we have a lot of react state libraries in here. And then I don't really want to focus on everything else, but I want to, I want
[02:42:09]  to, I want to, I want to show something here. So if you look at this graph, Oh, Joe tie wasn't prefixed. It's good.
[02:42:24]  Good call. Which frameworks? Joe tie, Joe tie, Joe tie, Joe tie. And let me know. Yeah. So I'm, I might be missing a
[02:42:31]  few. Thank you for pointing that out. Joe tie. And let me know. They changed the order now. So that's in a logical order, but I don't
[02:42:38]  always see it. And is, is vowel. To also not prefixed. Okay. I think the other ones are okay. Okay. Yeah. I got, I
[02:42:52]  got them both. Okay. So the LTO is here. Joe tie is probably up a little higher. Where did it end up? Yeah. Joe tie. Look,
[02:43:01]  look where Joe tie is. Joe tie is actually, apparently according to this benchmark, the fastest state library. And I'm not surprised because it literally uses react under the
[02:43:13]  hood. This suggests to me though, that either this is a very bad run because like, yeah, this suggests to me that this is a weirdly bad run. Because most
[02:43:25]  of the react library, yeah, there's something weird on this run. That's unfortunate. Okay. My point, the, my point is if you look other than this
[02:43:34]  Joe tie spike here. And as I said, I think something's weird going on here. All the react libraries and state libraries are essentially in this zone. You don
[02:43:43] 't suddenly make react way faster. Is what my point is. Joe tie seems to be like breaking the rules right now, but I've looked at this over years. You
[02:43:56]  can't change. There's this react lab at the front that is like green. And that's because it's like an experimental. That's not real react. They
[02:44:04] 're trying like other things, but you can't change what react does very much. You there's, there's a, looks like there's a way to optimize select row
[02:44:13]  that the hooks implementation, like the idiomatic's not doing it. But if you can do it in a state library, you can do it in vanilla. React is what
[02:44:19]  I'm getting at. React is always going to be faster than any state library. where you had to react. If there's like some variation here of like 0.
[02:44:28] 01 or whatever, it just means that those libraries did a good job of having low overhead and like they're basically on par. And there's just some variance. It's
[02:44:37]  in the same way that like no libraries faster than vanilla, you know, like solid on one benchmark, I think came out faster than vanilla. vanilla. And that was
[02:44:46]  kind of like fun, you know, but it wasn't real. You don't get to improve reacts performance by adding a state library. Okay. And the reason that something
[02:45:00]  like Jotai is going to be more performant than the others is because it's not adding a new thing. It's actually literally using react state. Like if
[02:45:10]  you use the change management of the framework, it's always going to be faster than introducing another state library. This is a fact. This is non-negotiable.
[02:45:19]  You can make different trade-offs that might average you out better in certain ways, but you cannot intimately improve reacts performance, right? You can't just go like,
[02:45:28]  Oh, I added reactivity. Now it's gonna be faster. No, that's not how this works. Basically what ends up happening is you take hits in other
[02:45:39]  places. But yeah, I usually you'll see, you'll see it here, like the react to the libraries will actually have slightly higher creation overhead and append to rows.
[02:45:49]  I can look at mob X. These are higher than vanilla react. So are Valtios. Whereas something like Jotai is almost identical to react on creation because
[02:46:05]  it is just using reacts on mechanisms. This is an important point because people seem to think that state libraries can improve reacts performance. not like they literally cannot, okay.
[02:46:29]  What about the millions project? Well, I don't know. It's not, it's not if they, they could make a different implementation of a V Dom and be
[02:46:41]  react compat and be faster. Like I didn't throw it in here, but you guys like preact for like a benchmark like this, you know, react has some
[02:46:49]  different features than preact. Like they have kind of split off of it, but like preact, bam, it's front. It's, it's, it's
[02:46:56] , it's ahead of all of these, right? React compat for the purposes of this benchmark. And it's, it's, it's interesting. Preact actually has
[02:47:06]  some hits here. Their select row is actually, um, although I guess react hooks is, yeah. Yeah. Actually, no, no, preacts right online,
[02:47:17]  but look, preact has a smarter reconciler. You can see that it swaps rows better. We're like for lists where react has a really naive one.
[02:47:24]  That's why all of these are red. Like the state management can't fix the, the performance of the underlying reconciler. Yes. State management makes it easier
[02:47:39]  to improve your code quality. It doesn't make react faster. Yeah. The VOD will be available both places. So, yeah, I, I just want to
[02:47:56]  like point this out. It's not like you couldn't have a faster react. One, another framework that has, um, react style compat is inferno. And it
[02:48:07]  was, as soon as I had inferno in here, usually stuff starts really shifting down. Right. Um, so it's not a matter of reacts API. There
[02:48:17] 's an implementation thing. Inferno and preact both don't, don't do things that react does. So it's not like a fair comparison, but I want
[02:48:23]  to point out that taking a library, adding a state library to it will not improve a performance. Right. The funny thing, someone's mentioning a need with context, God
[02:48:40] , that would be painful. It was in here for a while. Um, react redux, when context API was released with re redux six made the mistake of
[02:48:48]  moving redux to using the context API. And it just tanked on performance. Um, because the context, you know, they were using it in a way that they
[02:48:57]  were updating reacts on state and causing re-renders. And it was terrible. They actually had to rush out redux 7.0 to actually fix this problem because
[02:49:04]  they tried to use context. If you use context naively, uh, but we're using just like context and causing state re-renders using like thing it is.
[02:49:13]  Yes, it is not, not good. Yeah. Yeah, yeah, yeah, exactly. These current results are bugging me because these remove rows and preact has
[02:49:25]  it too, are, are, are bugged. There, there's a problem with this run. Maybe we shouldn't even look at this run, but, uh,
[02:49:31]  it bugs me. Sorry. Let's go, um, official results. Let's go 104. 104 was better. Um, although I lost all my nice filtering, unfortunately
[02:49:41] . I don't know if I want to go through all that again, but yes, uh, my, let's do it. Cause I consider the 105 results kind
[02:49:53]  of glitched and it's really unfortunate because as we all know, uh, okay. And Jotai, J-J-J-J-J-J-
[02:50:06] Jotai. This, this gives us the second point of data too. We can see, and we had Preact in there too and Inferno, we
[02:50:12]  can see if Jyotai actually has repeat results here. Yeah, so here we go. Jyotai is legit. Even on this version, it makes me
[02:50:32]  want to review the React implementation because if Jyotai can be faster, React can be faster. That's just the science of it. So where am I looking for
[02:50:43] ? Inferno. Yeah, there we go. Much better. And actually, I guess Preact, actually, that was accurate. But as I said, so you
[02:50:58]  were right, it was just Inferno with the glitchy results. As I said, performance isn't inherent for a benchmark like this, VDOM versus non
[02:51:11] -VDOM. I would say, like a state library, sometimes it lets you write more performant and better code, and that's why you might want to consider
[02:51:19]  Reactivity. But it's not generally for performance, right? So, yeah, Inferno is, someone asked, forgot for Inferno. Yeah, I
[02:51:28]  did, but it's back now. So this is a key distinction because, like, just to kind of put it out there, without any fancy state library tricks,
[02:51:41]  if you put Inferno on this table, you can see as a VDOM, it's not just faster at select rows and swap rows than, say, all
[02:51:54]  of these. But it's faster at creation, partial updates, it's literally faster at everything. Like, this is going to be a very red table. Yeah.
[02:52:04]  If I compare it. Right? So, this kind of helps us set expectations on what we can do when we mix, basically, a state library on top of a
[02:52:25]  VDOM library, right? Unless there's a change to the core of the VDOM library, and let's see, can I get view in here, too
[02:52:37] ? So, there's only certain places where reactivity actually really helps on performance. And those places are going to be partial updates and select rows, generally speaking. And
[02:52:56]  the reason for that is not reconciling the whole list. So, this is, I wanted to kind of look at this here because I think this is basically,
[02:53:10]  yeah, I wonder which framework they coded this cool data table with. Any guesses? I'll tell you right now, if you haven't looked. This table was built with
[02:53:20]  react. I mean, there's no denying react's influence, right? I'm almost positive it's, yeah, this table's coded with react. I mean,
[02:53:41]  we could probably look, but I'm, I'm, I'm, I'm very, yeah. Well, yeah, I mean, I forget how we did on this
[02:53:51]  one. We did pretty good on this one, I think, yes, yes, yes, yes, yes, yes, yes, yes, 1.4. Yeah
[02:53:57] . And Inferno, I mean, here's, to my point earlier, the difference between fast reactivity, fast VDOM, is like, is, is
[02:54:10] , is not always that big. They used to test us on a computer where solid's gain was a lot larger, but they've changed the testing setup. And now
[02:54:21]  these results are actually much, much closer, which is probably a good thing. It makes my point easier, but. Okay. So. So, yeah, now,
[02:54:37]  now, now I, now I have finally given all the context. So let's, let's talk preact signals. Okay. Thank you, thank you all for bearing
[02:54:44]  with me. It took me three hours to get to the point where I felt I could talk about the, you know, this topic. Okay. So let's, let
[02:54:51] 's, let's, let's get real here. So I have to admit. Where was it? When I first saw, um, Jason teasing some stuff and I
[02:55:07] , if I look far enough in my bookmarks, I'll probably find it. I, I, I just don't know where we're not Twitter blue. Where's
[02:55:15]  I want bookmarks. Yeah. I look, if I go back far enough in my bookmarks or on my stream, I'll probably find where he first started teasing it
[02:55:22] . Yeah. Here we go. No, that's million JS. Someone asked the, asked me about million JS. Um, I already talked about this previously. They had
[02:55:31]  some cool ideas. They're still trying to get the, their implementation of the JS benchmark down. Um, this is why it's really dangerous to be like, oh
[02:55:39]  yeah, 10 times, 11 times faster than react. Right. If you go in here, you'll see that this has been open for over a month now and they're
[02:55:48]  still kind of working through what it's going to take. Right. Cause someone, someone ran the test of the draft version. They're like, what's going on here
[02:55:54] ? Millions is much slower than react. Why? What's, what's going on? And yeah, I mean, this is not the final PR. They
[02:56:07] 're still working on it. I think that it's always possible to find a single thing to measure. I do like this benchmark. It's not perfect. It doesn't
[02:56:15]  measure everything because it has so many different things that it tests, but like, this is not the end all be all. They did have an example where they were doing
[02:56:25]  less work, but I think, I mean, yeah, maybe, maybe I just have to go through my feed. This has called me not being prepared and basically last minute
[02:56:36]  deciding I was just going to do a stream today off the seat of my pants. So to speak, I should do more preparation for these things. I feel like, but
[02:56:43] , um, what can I do? Um, sorry, not, not what I wanted. I wanted my profile. Yeah, if I, if I, if I
[02:56:51]  scroll down far enough, you'll, you, you will see, I mean, I don't want to go all the way back, but you'll see, they've
[02:56:57]  been hinting this for quite a long time. Um, and Jason showed this really great graphic where, um, where he'd shown like a react, a graph and,
[02:57:08]  uh, and, uh, and, uh, or sorry, like a previous graph and a reactive graph. And you're just like, where's all the code gone?
[02:57:18]  And it comes down to understanding what they've done with this. So first question people ask pre-act signals. Are they like solid signals? Definitely. Or view this
[02:57:30] , this is a shallow ref in view terms. This is a signal in solid terms. This, this, yeah, I mean, I could try scrolling Jason's profile
[02:57:40] . I, I want to feel like he's more, um, active than that, but, oh, come on. I've been having some trouble with Twitter today
[02:57:49] . But maybe, maybe if I scroll here, I'll see, I'll see it. Cause you, you gotta figure they did the announcement. So like, he
[02:58:04] 's going to have like a whole bunch of stuff. Yeah. I just love all the hinting. No, they're just like, it's like, it's coming
[02:58:10] . Um, uh, where was it? Uh, uh, yeah, here we go. Yeah. This is the one. Thanks for suggesting that Fabio. Um
[02:58:22] , this, and you're just like, wow, what is going on here? Well, I'm gathering this is some kind of animation test, right? Cause that's
[02:58:32]  where fine grain reactivity just kills it because like you're updating one text node and you're doing it. But as I've mentioned before, naively, just smashing
[02:58:40]  the two together, isn't going to get you what you want. So I think we gotta, we gotta actually look at the solution here and talk about it a little bit
[02:58:50]  because let's, let's get right into it. They did an introduction here and the cool thing that I saw right away is I think this is really cute. They showed
[02:58:59]  how it's outside of the component first as like a, like a, I mean, the shots fired. Um, it's funny. I didn't even realize how
[02:59:07]  big of a deal this was. Like I started doing this in my solid demos and stuff and to showcase it, but like when I, to me, this was just like
[02:59:14]  obvious, but for like, this is like the shots fired. Right. And, um, yeah, state here. It's talking about, you know, the problem of
[02:59:27]  only co-located, um, data, right? So better state, blah, blah, blah, blah, blah, blah. Okay. And then, yes
[02:59:33] , here's the image again. That makes sense. Bringing signals to preact. Um, yeah. Do, do, do, do. So, yeah, this is
[02:59:44] , this is showing, let me see here. I'm doing very primitive, we've wearing primitive, the ergonomic advantage, current third party things that rely on select
[02:59:50] ors. Yeah. A lot of things require you to wrap it in a hook. Selectors, um, are really useful in what I call pull-based, um,
[02:59:59]  reactivity. And then, and then essentially, okay, so we have, see, there's no wrapper here. If you've ever used mob X, there's
[03:00:17]  usually like a wrapper to use the value. You need to be like observer, like a hawk. Like I showed you in that image. Like there's a reason why
[03:00:23]  this is so ugly. In new version of preact, you don't actually have to worry about this isn't happening to you. Like if, if there's any
[03:00:30]  element of that, it's happening under the hood. Um, where is it? There is. So that's cool. So at a base level, what we have here
[03:00:42]  is, is basically, um, a state library that doesn't require any ergonomics, um, additional ergonomics. And if you have global state, you're not actually
[03:00:57]  taking much of a hit, um, from the reactive system because it just gets created once on the outside and then you just read the values as you need to. And
[03:01:05] , you know, if, if these wrappers are not expensive, that's the question, how expensive the wrappers are, then you're fine. Because when you
[03:01:15]  read count up value, you make counter subscribe to it, essentially. And when you update it, the whole component reruns, like the way it always does in react or
[03:01:28]  preact or whatever. And you're good, right? Like it, you just, you just added some reactive state on top of, of preact. So
[03:01:40]  like this alone, thinking about this as a solution, I immediately go, okay. So this is very much like adding mob X, like a first party mob X to,
[03:01:53]  um, to preact essentially. So like, that's, that's the level one thinking here. So from that perspective, I'm going to be like, if
[03:02:01]  this is super optimized, what this, this will have very little overhead. It'll just, uh, essentially give us the ability to now, um, uh, like
[03:02:18]  let the state management, make it easier to write good apps because it's easier to manage the state this way. And while technically it's another system on top, um,
[03:02:31]  you know, it's kind of like what we were seeing earlier with react. It might, it might be a slight overhead over preact. So like, I imagine you
[03:02:41]  can use preact as normal and then, yeah, I have the full table here. So this is, this is no fun anymore, but, um, or actually
[03:02:49]  this is the one right here. Um, you know, like you might, it might just be very minimal because like if, if I look at something like mob X over
[03:03:01]  react hooks, there's like a couple point hit on creation, I guess the creation part was probably the biggest hit. So when there's mass creation, um, but for
[03:03:12]  the most part of the game, part, it didn't really change much. It just made life a lot easier to use. So that like, that's, that
[03:03:20] 's, that's, that's where I like my mind sort of comes in. There's basically a minor cost for a huge ergonomic improvement because now you're not worrying
[03:03:30]  about dependency rays and whatnot. And, you know, I have to admit back in the day when I used react, I used it with mobile X very, very,
[03:03:37]  very often. So like that, this is the, this is pre hooks was like, this was the react that, that I was used to, so to speak. So
[03:03:45]  I think it's really cool to have this built in. So, but the problem, as I mentioned already is this fundamentally doesn't change the, like the performance characteristic
[03:03:58]  of preact. Um, I don't think I'm wrong in saying that. It doesn't take any kind of, if anything, this should actually make the performance slightly
[03:04:08]  worse. Maybe it's minor, like, but in theory, this should not actually make any sort of improvement. It's just an ergonomic thing, but then they
[03:04:20]  have this cool thing. And this is what I want to talk about. Can we go even faster? They're like, we could have stopped here. We needed to see
[03:04:27]  how far we could push the preact integration. Um, what, what we've got going on here is they're like, well, what if you don't read
[03:04:48]  the value and you just pass the signal straight through? And this is, this is a very clever trick. I've never seen anyone do this. What they're suggesting is
[03:04:55]  if the VDOM, I told you the VDOM, remember if we go back to our, our silly example here, we're just creating this VDOM
[03:05:01] . If the VDOM comes across and goes like, and you assign something to this VDOM thing right here that we create, like, this is a really
[03:05:09]  bad example. But if we, if we add an observable or computed or something to the VDOM, essentially, so instead of passing the value, cause count dot
[03:05:18]  value, um, like the way the signal work, I haven't really talked about this much. I kind of glazed over cause most of this audience is probably familiar,
[03:05:26]  but essentially if the count itself is the signal and then if you go dot value, you get the value of that signal. So in that case, count dot value is
[03:05:38]  zero and you can then like basically assign a new value value to it like using equal sign and then that's how you set the value, but that alone is not reactive
[03:05:48] . That's just the value. It's the accessing of it. When you go count dot value, it's, they use a getter, but it's like my
[03:05:54]  proxy example. That's the point at which they track, um, that it's a subscription, but if you pass it, but they're not doing auto tracking.
[03:06:04]  Cause the, if they're tracking a subscription here, it's literally on the whole component because you're accessing it in a place that gets re-rendered over and over
[03:06:13]  again. But they were like, well, what happens if we just pass the signal straight to the VDOM? Well, then the VDOM can go, Oh
[03:06:19] , this, I have a signal here and it can actually do something kind of special. Cause you might be like, well, how do you mix a VDOM with
[03:06:26]  a reactivity? And I told you about all this recreation stuff. It's really, really quite awkward. Well, what you can do is when you get a V
[03:06:35] DOM with a signal in it, go, Oh, uh, because you didn't access the value like this at that point, the component isn't subscribed to the change
[03:06:48]  and you have the ability to control it. So what my understanding, I mean, this drastic oversimplification is that pre-act when it gets an observable in
[03:06:56]  the VDOM, just makes a pseudo component. They just make a little component inside that component so that that little component can be the only thing that updates essentially instead
[03:07:07]  of the whole tree. And in so, cause they might try writing directly to the DOM. I'm not clear about this, but generally because you want the representation to stay
[03:07:16]  in the VDOM, my suspicion is, and we probably want to dig deeper, is they essentially just make another more granular kind of component-like construct. inside
[03:07:27]  that now knows that whenever this count changes update the text and this can still be batched and cued with the rest of the VDOM stuff, I assume. So
[03:07:36]  it's probably still like a semi VDOM layer, but it's like picking the smallest component to re-render instead of re-rendering the whole tree.
[03:07:43]  That is essentially the mechanism here and let's see what comments are coming in right now. Yes, yes, yeah. I actually saw the, I did benchmark it,
[03:08:06]  I actually saw the speedup in the Krauss benchmark when I benchmarked it. The problem was I actually hit a memory leak, so I can't, I don
[03:08:16] 't want to publish the results and talk about it because it's, it, it overemphasizes the thing that I've been trying to, to emphasize the trade-
[03:08:24] off is. But one thing I can say with a hundred percent certainty was when I ran the JS framework benchmark for Preact. We'll, we'll, we
[03:08:36] 'll, we'll look at it in a minute, but not the benchmark, but the implementation. When I ran it with Preact, I got these numbers here down to
[03:08:43]  inferno levels. Partial went down from 118 down to about 93. Select row went from 30 down to, it was, it got, I, it got
[03:08:58]  down to almost view levels. It got to 20.2 or something. So essentially both these numbers shot way down. What I witnessed was all the other numbers went up,
[03:09:10]  but I think, I think that is largely because of the memory. memory leak, the degree they went up. I think in general, it's what I said,
[03:09:19]  a state library added to a V Dom is going to have a cost that taxes everything. But this little trick that we see here actually improves the partial updates, like in a
[03:09:34]  significant way. I think the challenge here for people with this benchmark specifically in terms of expectations is that. is that reactivity isn't going to generally improve these other stats
[03:09:50] . So even if it was zero cost, it's not going to impact the majority of the, of the, of the things. So from a cross benchmark standpoint, this
[03:10:03]  is probably good for about 5%, which in the rankings doesn't really move it. preact much past view or Svelte or whatever, it's still kind of
[03:10:11]  just bumped up. So it's, it's, it's, it's a good gain to have, but what I'm more interested in and I can't tell until
[03:10:18]  we fix the memory leak is how much of an overhead it is on the rest of this. Because I think that's going to be the part of the deciding thing,
[03:10:26]  because I actually implemented benchmark in four different ways. And I actually want to show that in a minute because, but I'm not quite there yet. It's actually really
[03:10:33]  quite cool when you start thinking along this. Right. So preact now surgically updates if you don't. Yes. Basically, if you pass a signal through or computed
[03:10:43]  in no surgically update it, which is really quite cool. Um, can I add hyper app? Sure. Where's hyper app? Hyper app is it's been
[03:10:54]  a while since I've seen hyper app, uh, H, H, H, H, H, H, H. Someone wanted me to just blend that in. Hyper
[03:11:00]  app. I'm trying to remember is that one's a very small VDOM. If I remember, where's hyper app? Yeah. Hyper apps over here. Um
[03:11:10] , yeah, here's hyper app. Interesting. But you can tell actually from this that hyper app is not a small VDOM or innately because these update performances suggest
[03:11:21]  that they're doing something here. Most VDOMs kind of look like preact does or react does this suggests the fine grain updates and hyper app are actually fairly
[03:11:29]  performant, which suggests that they're probably doing something special here. Okay. So, okay. Uh, where was I was going through the release article, but yeah,
[03:11:41]  so this is, this is really cool optimization because you can do some stuff. So let's actually pull out some code for a minute. Um, cause I want to show
[03:11:48]  you, I actually implanted the JS framework benchmark. As I said, I'm not going to show the results here because the memory leak is really, um, unfortunate
[03:11:56] . But the coolest thing about this was I didn't copy. See, this preact one is a little old. I updated the dependencies cause I was playing with it.
[03:12:04]  Like, but this is, this is like class component. Like it was written in preact six or something like .es6.js. It's telling you
[03:12:17]  how old this is. Right. I mean. Yeah. I've never seen, seen this. Right. Um, but like, like this, this is just ancient,
[03:12:36]  right? So like this, and then we're, are we binding the stuff? Yeah. We're binding everything. This is a really old implementation. And I was
[03:12:43]  like, man, we didn't even do hooks here, which is unfortunate. I, I updated react to hooks. I never bothered doing it for preact at the time
[03:12:50] . I said, this is my main repo. This is just like, I'm a contributor here. So when I went to go make the preact one, I
[03:12:56]  was like, I thought I was like, wait a second. What if I could just, I grabbed the solid implementation. I literally went to solid copy, pasted it
[03:13:06]  and copied it in here. And it was easier to start from solid to do this than from the old preact implementation. I would, which is good because any small performance
[03:13:15]  optimizations I did, we got the carry over in terms of structure and stuff like just minor, minor, minor little things. So I was pretty stoked to that as a
[03:13:23]  baseline. Right. And essentially I did one difference. I was like, should we do this globally? I was like, let's have some fun. Let's just
[03:13:33]  make the state global. One thing you're going to actually notice in the preacts solution is you can just use this stuff directly here when it's global. But when you
[03:13:41]  use it inside a component, you actually have to call use computed and or use signal to let preact handle it like as a hook, because basically it has to be prepared
[03:13:53]  for the potential that. That the whole component updates or that the fine grained thing updates. It needs to handle both scenarios. And for that reason, I was
[03:14:06]  just like, you know, I don't want to get into a contention argument about what's the most idiomatic way to do it. Everybody puts it in the component
[03:14:15] . I just want to see what the results are. So I just made it global because honestly, top level component like in a reactive library, the top level component never
[03:14:22]  runs again anyways. So like this is like potatoes, potatoes. I don't really care. All right, later. Sorry. Okay, let's get that out of
[03:14:30]  the way. But essentially, the most naive approach to this is you create a signal for the list, create a signal for the selected state, and then we just update it
[03:14:42] . These are the things that like how you build the data, add. I just appended it. The thing you notice is that their signals work like solid signals.
[03:14:50]  They're immutable changes. So even though this has like an assignment type syntax, you don't want to go like value dot push. So we're still actually doing array
[03:14:59]  spreads here and top level immutable cloning, not deep immutable, but top. Well, actually, in this case, it's deep immutable. This is a
[03:15:07]  very simplistic version of it. And then update. I go through and I add a bunch of checks and I, you know, these are just array operations done in the mut
[03:15:17] able way with these signals, because the whole list is what they're doing. The whole list is one signal from there. I just map over the value. See,
[03:15:27]  now it's dot value instead of whatever. And I just it's it's basically normal preact from this point. We have a signal triggering the change instead of use state
[03:15:37]  triggering the change. And inside the row, I just, you know, calculated something and put it in. So I'm actually not using the optimization in this first version
[03:15:49] . Yeah, yeah, this this is like this is a thing that I used to do a lot. And that's why I copied it from the JS, my old JS
[03:16:00]  framework benchmark. I was a CoffeeScript developer and I freaking hated having to write const and var all the time and just like drove me nuts. So I started just like
[03:16:09]  doing this thing where I just go like const and then just be like, okay, let me do all the variables. Yeah, probably drives people nuts. But I actually
[03:16:17]  don't do the style anymore. But it just made my I for me, it just got rid of a bunch of noise. It was so hard to you won't you
[03:16:24]  don't believe how hard it was to move to JavaScript from CoffeeScript. Like when it was like just like everything was so minimal. And then like to move to Type
[03:16:32] Script, I mean, like it felt like taking 30 lines and making it 150. Like that never feels good. Even if you get all the benefits, you're just like
[03:16:40]  it's like five times more code. It was like so brutal. It's like a gut punch. Like but it's it's it's it's fine. There
[03:16:50] 's there's a reason you use TypeScript and whatnot. But anyways, this approach I ran and it barely used reactivity. And obviously it was just slightly slower. So
[03:17:03]  I was like, okay, what can we do to make things more optimal? Well, the first thing you can do is here in this class name. See, this
[03:17:15]  is an expression. And if you just pass this expression in, even if I put it inlined it in here, even if I did this, let's just do that
[03:17:26] . Um, Preact is still going to go, oh, value change rerun this component. So what you do instead is you go use computed. And now suddenly
[03:17:48] , and you do it from here. Now, suddenly, essentially, our selection, instead of rerunning the component, only reruns the class name, like the class on
[03:18:03]  the on the on the table element. And this is this is this is this is kind of cool, right? Um, and I was like, okay, I saw
[03:18:12]  the performance game right away on this one. The thing is, I was doing everything piecewise. So I wasn't running everything to see the impact of that because use computed
[03:18:21]  actually slow down the other things because now we're creating computed per row. But it was really kind of cool to, um, sorry, see the impact here on the
[03:18:26]  performance because I'm going to pull up JS framework benchmark. That's the change where suddenly, you know, preacts 30 here suddenly starts looking like views 20. All
[03:18:40]  you had to do was essentially start with signals and then make sure that this is the computer signal in here. Right. Um, so this is kind of cool and then
[03:18:54] , but I was like, can we do better because the partial updates were still not fast enough. So I actually, the version that I ended up benchmarking was actually
[03:19:09]  kind of cool. I actually use this, use the computer that I did, but I was like, if you look at this benchmark, it generates a bunch of data and
[03:19:16]  we have this one signal. So what I did instead was I created a signal, then this is how solid works in this benchmark too, a signal per label in per
[03:19:27]  row. And then now row dot label, instead of rerendering the component, when you update every 10th row, like I showed you here, uh, where is
[03:19:39]  it? Not there. Um, where's my local host? Yeah. Actually, and we can actually probably run this preact, preact signals. Yeah. Essentially
[03:19:56]  when I updated every 10th row. Okay. This is in a broken state. Sorry. It's because I've been messing with stuff so much. Let's actually,
[03:20:05]  um, let's rename this one to rename main naive. Well, VS code is not happy. That was the slowest rename I've ever seen. Um, let
[03:20:22] 's rename that to main. And let's, uh, PM run build prod. Okay. If I did this right. Yeah. There we go. We're back
[03:20:42] . Okay. So, uh, essentially now, um, when it updates those exclamation marks, it can actually do it. Just update the text notes for those individual
[03:20:54]  ones, which is really quite cool. Um, so this is, this is kind of patterns that I, that I was talking about because, um, once you kind of
[03:21:03]  get into this zone, you can start nesting reactivity. And those two changes actually significantly improve the performance onto those benchmarks. The challenge is that it is balancing
[03:21:14]  that with the new overhead of creating, um, the compute, the use computed and creating a new signal per row. And this was a challenging one for solid. I
[03:21:26]  spent so much time, um, optimizing memory profiles for, for reactivity. So I could get that kind of performance. And, uh, one of the things that
[03:21:38]  I thought was, um, really challenging here, um, is that this is an interesting zone to be in. Um, because I'm trying to think of the best way
[03:21:51]  to phrase this. Like in order for pre-act to know, to do the optimization, you have to wrap it. Remember I was talking earlier about how solid just
[03:22:03]  uses functions. Cause we didn't want it to have unnecessary wrappers, but for this approach to work, you actually have to both wrap the expression and then wrap the pseudo
[03:22:15]  component. You're doing, you're doing like a, you're doing like a double wrap. And now if, if I, yeah, pre-act probably has
[03:22:22]  a way to optimize the double step there, but the, the, this is sort of the interesting thing here because you have to be very deliberate, um, in, in
[03:22:32] , in order to do this choice. Right. So this is, this is kind of like, there's a little bit of a trade off here. Hard to choose
[03:22:46]  what's more important creation or update for SSR creation is what you want for client side probably update. Well, it's hard to say like navigation on the client side,
[03:22:51]  like a single page app is mostly creation. Like reacts came into popularity and Vdoms came into popularity because how fast they were creation. Uh, old reactive libraries are really
[03:23:00]  bad, like really bad at creation. So there, there, there is like an interesting line to follow here. Yeah. I mean, I can talk about that in a
[03:23:12] , in a minute. Um, but yeah, this, what's interesting about this actually is that it's a runtime approach with reactivity. Right. Um, and
[03:23:22] , but you, you, I think you, I think you guys are kind of getting where I'm getting at in general, huge ergonomic improvement. Um, and
[03:23:30]  then essentially you have this ability to do these little updates. I think, I think the challenge here actually looking at this and working through it is remember when we were talking about
[03:23:46]  lists and keyed lists. This is, I mean, if you go all the way, one paradigm versus the other paradigm, you're probably fine. But we,
[03:23:54]  we were, we were, where were we? We were talking about keyed lists here. Remember this? When you do key it with immutable changes in a Vdom
[03:24:03] , you actually dig deeper. When you do ref like you do in a reactive library, you don't want to dig deeper. And these things are kind of at odds
[03:24:11]  with each other. If you do a hybrid, because if you, if you go deeper, you end up recreating the component, which means you take on the hit of
[03:24:20]  the reactive overhead. If you do it half and half, but if you rely purely on reactivity, then, um, top down changes won't, won't ever
[03:24:31]  propagate. So like you don't, you kind of got to go one way or the other. Um, and the challenge here is like, think of, think, think
[03:24:40]  of how preact maps stuff. Like think of this. Okay. This is a map function. So the second that you actually update data dot value, let's say
[03:24:53]  add an item to a list. This is an example of a change that isn't contained in here. Right. You need to run the reconciler. And I guess
[03:25:06]  the, the key to this whole thing is besides there being a key is that essentially. when you hit a row that's unchanged, not to recreate all this stuff.
[03:25:22]  So, which means that. Every component that has a subscription now has to have that auto memoizing mechanism built on top of it. It's just interesting here, right?
[03:25:31]  Because most frameworks that work with reactivity and enforce reactivity have special helpers like solids for component or directives and stuff. They don't just do a simple map
[03:25:43]  because of the difference between this behavior and because you don't want to map over everything essentially every time something changes. You want a smart memoized map. But memoization
[03:26:00]  is not free. So, yeah, this is, this is, this is a challenging place. Do you know what I mean? I actually did talk about something.
[03:26:18]  This is a good question. I got to chew these. We'll, we'll, we'll go back in a second. I want to finish my thoughts on,
[03:26:24]  on, on Preact signals here. I think, I think, I think, I don't think this is the end of the story here. I think that people
[03:26:32]  will play with this and I think they will like on one hand pre signals the state library for Preact. It seems like a really awesome mob X for like thing. And
[03:26:43]  I love this paradigm. I'm super stoked to see people using Preact this way. Preact signals the performance optimization, I think is going to be a very hard sell
[03:26:53] . Like, I think this is actually like we're seeing already these sort of challenges because you can opt into very specific optimizations, which are nice. But then there
[03:27:03] 's other side of the trade off because the models are actually different and views actually, I think view is where the, where the source of the solution is going to come from
[03:27:13] . I think, I think if you look at the, what view is done, they've changed their V DOM to actually respect reactivity so that they can account for
[03:27:25]  these little sort of differences in terms of like thing. But the thing is with view is they're all in. If you don't use reactivity, you're not going
[03:27:35]  to get your updates. You don't get to play half and half. And this is a challenging place to be because the value of this is you're like, Oh
[03:27:43] , it's like reactivity and all the good stuff, but react compat. Like we still get to use react the way we always did. So I don't know if
[03:27:51]  preact would follow that, right? Because like having react compat is a big deal. You know, that's the problem. All the rest of us, like view,
[03:28:02]  didn't go that way. They went all in on the reactivity and they came up with their own syntax. No react compat solid was like, no reactivity is
[03:28:09]  a thing. No react compat. Preact has the ability to kind of teeter both lines. And I think that's the win. I think, I think the takeaway
[03:28:18]  from this thing is really ergonomic, get to use all your react stuff. It's sweet, but this is not a performance thing. That's, that's,
[03:28:29]  that's like you, you might be able to like update like a text node somewhere, but like you, you need to like, there's a structural architectural considerations here.
[03:28:41]  The same reason why view vapor is not going to be compatible with view. Like you don't, you don't get to have it both ways. Um, basically.
[03:28:51]  So, um, yeah, I, I think, I think, I think this is going to be really interesting because the exciting part is going to be a whole bunch of
[03:29:00]  new people using reactivity and understanding just how great it is. It feels to, to, to write stuff this way in a sense, Vue has been doing this
[03:29:09]  for years, but now there is, um, now it's like in the JSX line. So you got like, some people might've heard solid and they're
[03:29:18]  like, Oh, preacts like this. And you, you, you like it's changing the dialogue and it's interesting because in this world, it's actually react.
[03:29:26]  That's the odd man out. If that makes any sense. Um, like there's way more reactive libraries than non-reactive libraries in that sense. I feel like
[03:29:37]  we should preserve or protect react from this to a certain extent, because I want to see them take things as far as they possibly can. It's weird when the most
[03:29:45]  popular library is actually the, the, the odd one out, but I like, I don't want, I want to see where they're going. Cause I want to
[03:29:53]  understand how they can do this stuff completely differently because almost everyone else has kind of come over to this side. So yeah. Right. Like, like this, this is a
[03:30:09]  very interesting thing. the whole, the whole space is a spectrum. It's a range. So, um, I think it's really cool that preact has actually
[03:30:19]  found a niche that's in a different space. Cause I, I always look at these as like those two grid things where you're like, you're kind of like,
[03:30:29]  you know what I mean? Like, like, like it's like the quadrant grids and you're like kind of like seeing how everything positions. And I, I
[03:30:37]  think preact has managed to find a way to step out of react shadow. You know, really, I think people are going to love this is what I'm trying to
[03:30:43]  say. Okay. That's, that's, that's, that's, that's, that's my, my preact kind of a rant. As I said
[03:30:55] , we'll have benchmarks in a few weeks. I'm, I'm, I'm, I'm pretty confident in what, what we'll see here. Um, I
[03:31:02]  don't, as I said, I, I know I've seen some stuff and I've got the PR open. I, I know those are not the final results
[03:31:09] . Don't go run them locally and then go do some crap with them. That, that is not how this, it turns out. I, I, I've got
[03:31:15]  a sense for this stuff. And I, I, I, I, I think it's going to be actually interesting to actually test the different versions and then figure out like
[03:31:23]  from a micro thing, like what the critical point is at which one approach is better than the other. Like is the overhead of the computed worth it versus the other is the
[03:31:32]  nesting worth it or whatever. And as I said, this is me as a framework author, um, kind of playing around and trying to understand these boundaries. Cause
[03:31:40]  that's the kind of tweaking I did in early days of solid to, to understand why components as the boundaries weren't the right boundaries. So I I'm looking forward
[03:31:50]  to seeing how, how, where that goes. Yeah. And yeah, this is a really good point. They released a react version so you can use this in react too
[03:32:01] . I, this, this is like the perfect Trojan horse as much as I might have come off. Like I, I got to lay it to you straight.
[03:32:08]  Um, kind of going through this stuff because performance hyping on Twitter without benchmarks to show it is one of my pet peeves. Like I need, like, don't
[03:32:19]  release something and talk about performance and don't, and release the benchmark. So I need to talk about this like always a benchmarks aren't perfect, but I need to
[03:32:27] , to have it. But on the other hand, this is so freaking exciting. like, like, like I'm just picturing this, like a library of the
[03:32:41]  popular popularity of react and so closely in react space. Putting this out is such a big message and people are going to be trying this stuff and they're going to love it
[03:32:50] . Like, this is just, this is so exciting for reactivity and reactive programming. Um, like take, take whatever I said about, like, I'm,
[03:33:01]  I'm talking about benchmarks and performance gains and little things here, you know, because that's what I do. Overall story here is enabling people to do like author apps
[03:33:12]  in new and different ways. And I think it's not even that different, but like just improving that quality of life. And I think that is such a huge win here
[03:33:23]  that the mindset, the mind share, the whole thinking is going to evolve because of this. This is a huge moment in time. If I haven't made that clear
[03:33:33] , um, I, I, I focused on the nitty gritty here. Cause I wanted to understand the technical aspects, but this is very exciting. And the fact
[03:33:42]  that react has this ability, like there's already react state libraries, like, uh, react, uh, mob X or whatever, and react solid state. We can use
[03:33:53]  solid and react. Someone mentioned, asked me early if we could inline the, like use observer. I'm not sure. But if we did the same trick to
[03:34:00]  hijack create element that react does here, probably we could, but I mean, or you could just use this pre react library. It's more popular. Um, I
[03:34:07]  haven't benchmarked the difference between the reactivity. I mean, it might not matter. You know, as I said, you're kind of subject to react zone system
[03:34:15] . Preact is already so much more performant than react. And like a lot of the more typical scenarios that like, it's not like, who knows the reactive
[03:34:25]  system overhead might not even be a thing. So I'm, uh, yeah. I mean, if, if people like solids APIs, we could, we could look at
[03:34:32]  seeing if we could do the same optimization. I don't see why not. Um, you can always use solid with react. Uh, but the fact that this is
[03:34:42]  so seamless, you know, would preact and react with this adapter is really the game changer. It's an ergonomics thing as I said, it's like the
[03:34:50]  perfect Trojan horse. People are going to start using this and then be like, Oh, you know, yeah, it's interesting. I I I'm, I'm
[03:35:00]  like conflicted. Cause I think this is like a big win for reactivity and that's a big thing I care about. But on the other hand, I, I
[03:35:07]  want to, I guess react doesn't need my help. They're the most popular framework out there, but I want to see where reacts heading. Cause I think they have
[03:35:14]  a different model that's innovating in a completely different direction. And I want to see that direction. Okay. So let's, let's, let's address some
[03:35:23]  of the stuff in chat now. Um, can I highlight re-renders so you can see them? Okay. First thing I want to talk about here, all the
[03:35:33]  systems do pretty much optional DOM updates. You're never going to see the re-renders in react or pre-act or VDOM. Even if they do too
[03:35:39]  much work, they don't do too much DOM work. So like a browser paint flash won't work. You need like a dev tools or something that hook into the component
[03:35:46]  tree to do this. Um, so yeah, I don't, I don't have an easy way of showing the re-renders because by the time it gets
[03:35:53]  to the DOM, it's pretty fricking optimal. Anyways, it's the other overhead that we're measuring. Um, okay. Let's talk about react for Git
[03:36:02]  and compiler based approaches for memo for memoizations. Um, I mean, I'm trying to think of the best way to put this one out there because I actually, if
[03:36:12]  you've been watch any of my recent talks, um, I've addressed this specific thing. memoization is great, but it doesn't change the fundamental problem. Right
[03:36:13] . You just get a crazier compiler. I mean, I guess I haven't shown this on screen and I've been doing so much, uh, stuff recently.
[03:36:18]  Uh, uh, let me see if I can grab one of these. Which one do I want to use? Um, let me see if I can grab one of these
[03:36:20] . Which one do I want to use? Um, let me see if I can grab one of these. Um, let me see if I can grab one of these.
[03:36:23]  Um, I've addressed this specific thing. Um, memoization is great, but it doesn't change the fundamental problem, right? You just get a crazier compiler
[03:36:34] . I mean, I guess I haven't shown this on screen and I've been doing so much, uh, stuff recently. Uh, uh, let me see if I
[03:36:43]  can grab one of these. Which one do I want to use? Um, reactivity unchained streamlined. Okay. This is from one of my talks, but I
[03:36:56]  want to, I want to, I want to talk about this one because this is actually from the react, forget video that we're talking about here. And they show this
[03:37:04]  to do app and they, they show the exact problem where Tara showed in his article, where you have state that updates. That's not necessarily related to the to do here
[03:37:13] . It's just the to do stuff. But, but what he points out in the video is that, um, like once you have like themes, and visibility coming
[03:37:22]  through, you suddenly have react memo and use memo and all these things. This is inherent to a model where you have to rerun the components. So all you end
[03:37:31]  up with is a compiler that outputs a whole crap load of things, you know, all these memcache checks and stuff. So yes, you can, you, you
[03:37:43]  don't, this compiler might be able to optimize things a tiny bit further than what react does today. But the, the, the, this is an ergonomics thing
[03:37:50] . This doesn't change how react runs. This just changes, um, you from having to write the use memos. I think it can go a little bit farther than
[03:37:58]  that eventually, but because once you make the change, you no longer can keep the same mental model. Um, which was what I was talking about on my last stream
[03:38:08] . Uh, so I think this is, can also be a launching point to other stuff, but what I'm getting at is it doesn't fundamentally change this top down thing
[03:38:16] . Whereas solids, you know, fine grain updates that are on component based and even preacts kind of little trick here, you know, for the specific updates does do
[03:38:26]  that. It stops the re renders. It's possible that react can try and figure out a way of zoning in on that. But, um, the trick is it
[03:38:36] 's got to persist across components and preacts way of using observables or signals or whatever to pass it through is a way to do that cross component. You, if
[03:38:45]  you're just using your components state management where like you state it's tied to the component, you can't really do this easily. Like you, you need the change to
[03:38:56]  come from outside of the component in order to make a sub component to do the change on. Right. I hope that makes sense. So while I, you know, it
[03:39:08]  remains to see how like the, this trade-off works with, uh, preact. And if they introduce more primitives to allow you to do better fine-
[03:39:16] grained stuff, like, like solids for component, like whether that's in the future or whatnot. Um, it is still in question. It, the, the compiler
[03:39:27]  doesn't, and at least initially trying to keep react the way it is doesn't change anything from how react runs. It just changes how you author it. Wra
[03:39:37] pping reminds you how quick behavior splits each attribute dominant components. Well, yeah, there is a similarities here, but the, the whole idea, and this is the whole point
[03:39:49]  of this, uh, stream today is that components being that change has the, has the, the, the limits to it. What preact is doing is very clever
[03:40:00]  because they're found opportunities to optimize by making like sub components. I don't know if that can actually solve everything. Right. Right. Like the, it, it
[03:40:10]  does enough, but I don't know like if sub components could actually work everywhere, everywhere. Like to have like a component, like a nested smaller component. I
[03:40:19]  realize using the term sub component isn't great because I also use that to talk about quick when I say it's sub component in the fact that it splits a component to multiple
[03:40:28]  pieces. Um, but in a sense, reactivity is what does that quick is doing it to a V DOM because quick has a V DOM, which is why you can
[03:40:36]  kind of pull the similar similarities to, um, what preact is doing here. Whereas you can do it even more fine grain if you wanted to, if you use
[03:40:46]  the reactive graph, um, essentially the way. So like, in a sense, it's like preact is too quick as solid is to Marco six, if that makes
[03:40:58]  sense. Like the ability to like go even more granular. Um, so yeah, it's, it's, it's an interesting, uh, it's an interesting
[03:41:08]  thought, but yes, the, the, the, the takeaway here is components are too big and end users. Components should be kind of for end users to decide how
[03:41:18]  they want to organize their code and conflating code organization with performance and runtime execution is a mistake. that's, that's, that's, that's, that
[03:41:28] 's my, that's my argument. Any code without memoization might work better than with it. Yeah. Yeah. The same idea. Okay. Here we go. I
[03:41:46]  remember Dan Abramoff saying that react to the pull model results, push model. I mean, they can, they, they can schedule renders. Do signals break reacts
[03:41:53]  pull model. Um, yeah, I, and this is, this is the concern here, right? I showed the quote from Dan earlier and he's got a bunch
[03:42:04]  of them on Twitter. The concern because react wants the ability to revender concurrent separate trees at any time, like separate versions of the same tree. They, they,
[03:42:17]  they like the ability that they can just plug in the state and just pull it out at any point. Go like, okay, here's the, this state gives me this
[03:42:22]  feed on the state. Give me this feed on these, these foodie don't. If you have something that kind of persists. Um, because if you think
[03:42:30]  about it, the signals in preact, if you nest them, you don't want to be like recreating them necessarily. Like we want to render less kind of like
[03:42:36]  solid kind of like that kind of zone. You, it comes all hard to just pull the, the values that being said, a specialized reactive system could handle this. Right
[03:42:46] . Um, I've shown this before that's, uh, on previous stream of 1.5 stream, that solid has a push pull system. Essentially we have the
[03:42:55]  ability to basically propagate the change it without running it and scheduling it in a queue and then running that queue afterwards. So that's why solid has concurrent rendering and all that kind
[03:43:06]  of stuff. So in theory, you could do the same thing probably with a reactive system for preact. If you wanted to go there, I mean, it's
[03:43:14] , it's complicated cause we use the reactivity for the actual rendering system. So like it's all part of the same thing where we still have, there's still this
[03:43:23]  V dom versus reactivity game going on when you kind of trying to do both. So in a sense, yes, but then you could achieve it in a different way.
[03:43:35]  But this is why react is not going to go this way. I think once you're doing data value, you have to opt out from reactive runtime, you're back
[03:43:52]  in react mode. Yeah. It's an interesting, it's interesting, right? Because it, it, depending on how you opt out, you might actually be worse than
[03:44:01]  being back in react mode, because in that you, if you're not careful, you actually end up remaking the reactivity on every render, which is more costly
[03:44:09] . I mean, ultimately I think I'm happiest about the fact that to be part of, of something where I was a catalyst in making change. Like Rich's
[03:44:32]  work on compilers is another example of this, or even some of the stuff that came out when react first came out. I feel like the change we're going
[03:44:47]  through right now. And it's funny because like, I see it all part of the same thing where like, obviously every framework sees their angle is unique and they're the
[03:45:01]  special ones or whatever. But every part of this is part of this, it's a sign of components as runtime being not where we want to be. Whether you're
[03:45:13]  talking about quick, you know, the quick guys like to talk about generation one, two, three. I'm not ready yet to say what generation three is, but
[03:45:25]  I am very happy that my work has been instrumental for people understanding this. I, that, that, that, that, you know, it's, it's,
[03:45:37]  you know, when, when, when, when, you know, stuff like this, like obviously the Preact change had influence from a lot of other places too. And
[03:45:46]  like Ember, they've been working on reactivity forever and there's so many things, but the reason the conversation is happening right now has a lot to do with the
[03:45:54]  shakeup that's been going on with, with, with solid. I think that's, that's incredible. I might be like far on the far edge or on
[03:46:04]  the wing being like, you can take it all the way, but you don't always have to take it all the way. You know, I'm just happy to see
[03:46:13]  this mind shift where people can recognize it. Right. It started for me because I liked the ergonomics. I liked building apps this way and then it got into benchmarking
[03:46:23] . Right. Right. And you might think, oh, well, benchmarking, you know, that's, that's, that's something where you can feel some
[03:46:32]  sort of accomplishment. But this is much greater than that because it leads to people adopting, like it changes the way people build apps and like actually where they live. Solid
[03:46:47] , solid, solid's been like at the top of the JS framework benchmark for like what, almost five years. Like five years ago, no one was talking about it.
[03:46:54]  Not many people like that, that metric was fun, but that's not, that's not the end. That's not the end. That's not the be all
[03:47:01]  end all. You know what I mean? Like in the grand scheme of things, being the fastest framework for five years doesn't matter. But having, changing the paradigm from
[03:47:12]  where, how we build apps today to how we build apps tomorrow and being a part of that, that that's amazing. So, sorry, I'm just still catching
[03:47:30]  up on chat. Seb made an off mention of wanting to do something like singles on React. Do you think it's more ergonomic? I, I do. Then hooks
[03:47:40] , I do. I think hooks are really smart, but it's kind of like, it's kind of like how I think computers are easier than selectors. Like
[03:47:51]  push and pull are completely analogous. You can have like the same thing in a different form. It's funny cause I call our computers memos and solid cause I treat
[03:47:58]  them like that. Cause we're kind of push pull memos is the, or our derivations are kind of our middle ground where we handle that. But, um
[03:48:06] , yeah, I mean, I don't know. I think this has got them thinking or talking, but I, I, I don't feel like this is their direction
[03:48:15] . I, I want them to stay the course cause they're, they're taking on territory that no one else has. And I kind of felt the same thing when I
[03:48:24]  saw quick. There's parts of quick solution, which I think are not as important as other parts, but if they're not going to explore that part of the solution
[03:48:34] , no one else is. And I want to understand. So I want them selfishly to keep doing what they're doing because there's so much to learn here. If
[03:48:45]  that makes any sense. Yeah, this is fair. It's because we're talking about, you know, react to react three. I know people are like, Oh
[03:48:58] , we're in react 18. We are going through that kind of change right now. And I think for a long time, like remix is almost an example of it.
[03:49:05]  They built remix on let's call it react 2.0 and without any thought towards react three. And they actually rebuilt a bunch of the features that react three would have
[03:49:17] . Um, and in a different way, whereas next was like, okay, react three is coming. This is how we're building it. And I think it's kind
[03:49:24]  of an interesting thing because they could just fork off react at react two, so to speak. And because backwards compatible, whatever, and mostly be fine until the libraries in the
[03:49:32]  ecosystem change. But when you are the libraries in the ecosystem, you are the router, you are that you could just make it your own framework. I thought for a
[03:49:40]  while that was like a real potential that remix would just kind of like, not actually fork, but effectively fork react. Like essentially just be like, we just stopped at react
[03:49:49]  at this point in time because we don't believe in suspense and we don't like that's, that's what their message was. It was basically anything that was new
[03:49:57]  in react or just like we're skeptical of it. It's changed now. And they support suspense and streaming and all that stuff. And they're talking about server components,
[03:50:04]  but like for the longest time remix was like, that's all like unnecessary. We built our own transitions. We built our own stuff. You don't, you know,
[03:50:13]  and I seriously thought they were going to fork, so to speak. Um, so yeah, it's, it's, it's, it's interesting because react's
[03:50:21]  going to be a competitor with itself. Kind of like angular two was a competitor with, with angular one. I do feel like we're entering like everything's a new
[03:50:35]  framework land. It is 86 in our house right now. Yes. I am dying. Cause it's even hotter in here. That's my wife. Someone asking about prim
[03:50:53] itives. Uh, you've got to see, we are working on solid area. Um, I don't know if our hope UI has good, um, good,
[03:51:01]  um, how good the accessibility is on it. But I do know that Devon's like actually in our discord chatting with people and we're, we've been working very
[03:51:12]  closely with him to get, um, kind of a port of the, uh, react area library. Okay. I haven't read this, but I'm just gonna put
[03:51:19]  it up because Mabel says great stuff. So let's see how I react to this thought. Thought in a universe where we actually managed to automatically predictably memo everything
[03:51:26] . You still have to, to do top down, top to bottom renders, right? Where the reactive system, you still only have renders that leave nodes and skip
[03:51:33]  parents intently. Yes. Yeah. Yeah. This is talking about what I was talking about the compiler, right? I mean, it's, it's such a weird
[03:51:42]  blend when you go super far down this path because Marco actually, we've kind of gone both ways, like teetering this line. Cause it is a very small
[03:51:53]  difference between writing all the code and wiring it so that it like just runs like fine grained and that it chews and schedules sort of like a reactive runtime does. Um
[03:52:05] , but generally speaking memoization or the need for memoization suggests because you rerun stuff that's unnecessary and that it's coarser grained and that it's inherent
[03:52:16]  to diffing. And as long as that's your model, then that's where you are, no matter how much you do. Um, my whole premise here
[03:52:26]  is that diffing, it is diffing. There might be cases for diffing because you want, because a specific optimization, but generally speaking, diffing isn't needed
[03:52:36] . My whole premise is, is, is essentially that it should be possible that anything you could diff, you could do by not diffing. Um, it might be
[03:52:45]  more complicated. Um, it might be more complicated. We have to figure out how to model it, but thus there's always a way to make something more performant than
[03:52:49]  the diffing solution. That's, that's, that's, that's, that's like the premise here from a like theoretical academic standpoint. Yeah. The
[03:53:00] , the, the, the share of the love. Yeah. Right. Everything gets better. Hmm. Hmm. Hmm. Hmm. Hmm. Hmm. Have I caught
[03:53:11]  up to chat? right everything gets better hmm have i caught up to chat finally gotta drink some water so hot interesting okay so maybe that whole area i'm i can
[03:53:49]  see why you'd want to do this if you want to make your library work and not just react i think i think this was actually kind of a thing because when solid came
[03:53:57]  out i talked to dashi a little bit and he was like so how do we integrate jotai with it and i was just like you don't and he kept on looking
[03:54:05]  and then he's like trying to come up with it and he's like he's like i can't figure out how to to enter like we couldn't figure out how
[03:54:11]  to integrate it like zustand or um uh what's the other one redux was no problem mobx took a little bit of mapping thing but we actually have an external
[03:54:24]  source api in solid where you can actually take any reactive system in fact we should do this we could take pre-act signals and actually use them directly in solid js
[03:54:34] x because we have a way of taking any reactive system that's fine-grained like views or solids or or pre-acts and actually using them natively inside our templates
[03:54:46]  it's really cool no wrappers or anything you just write up the code and then you can just go like import signal use it and it will work naturally as is using
[03:54:56]  pre-act signals i think that would be a fun thing to do um but jotai was specifically difficult because they weren't a typical fine-grained system and they weren
[03:55:07] 't zustand they just they had their system is like uh set up to be like write the thing you know whether it was react state or whatever and solid had no components
[03:55:18]  to rerun so just like it just didn't make sense it was interesting though because he actually did a uh um an experiment where he tried to make a complete non-
[03:55:27] vdom renderer based on top of it and he got it working but yeah the performance was just terrible it was very inefficient but it was really cool to see him play with
[03:55:36]  that after solid came out i you know just kind of he's like oh maybe we don't need react jotae the framework so yeah it's it's it's
[03:55:44]  it's it's definitely interesting okay yeah yeah i mean currently each framework has its own solution yeah i mean i mean there's an easy solution uh we should just stick them all
[03:55:58]  in a benchmark and which everyone's the fastest wins sorry i i i told that to i told that to um uh the guys in ember when they're talking about star
[03:56:13] beam because i i put so solid isn't actually the fastest reactive system there's actually correct there's actually criteria that are important for rendering the way solid renders um that
[03:56:24]  i actually affect the propagation because solid is a reactive renderer there's like a slightly more consideration on terms of execution than you find in like a simple you quick you know
[03:56:32]  50 line reactive implementation so like i can't even though i made mobx jsx and view jsx i don't know if you people remember this or aren't aware of
[03:56:42]  this i actually took solids renderer and just plugged in that different reactivity in it i'm now that preact has what it has i could i should i should do that
[03:56:51]  that might be fun we could see because i told you about how solid can take any reactive system but that version still uses solid to trigger change it's a little bit less
[03:57:01]  efficient uh we can just take preact reactivity and stick it straight into solids renderer without solid in the middle and we could see how perform it is um but yeah it
[03:57:12] 's it's difficult it's not just apis like i sometimes joke like i made an example where i i called it view like where i wrapped solid and views apis so
[03:57:19]  people could just like use views syntax if they wanted to like on some levels the changes are superficial but i actually deeper down there's actually execution considerations uh slight variations on the
[03:57:33]  push pull and some of those are actually really important to solid on how it renders it's like part of the requirements um solid has features like its reactive system handles concurrent rendering
[03:57:42]  like it actually ingrained in it it's part of it it can actually it it it's the thing that suspends so like yeah i i'm there there there's
[03:57:54]  a while ago where someone's like oh don't use a framework put it in a reactive library and then you you can just switch which renderer you want you can suddenly go
[03:58:03]  between view and react or you know mithril love mithril um and just and just like take or lit and just take your reactivity and that's your app and
[03:58:15]  then you can just change a renderer as renderers change over time time and i i kind of laughed at the thought for a minute i'm like you guys just you
[03:58:23]  just replaced what the framework was the you you've made the state library the framework instead of the view library like that's the piece that you won't be able to get rid
[03:58:31]  of like that's you're locked in they were trying to say that they weren't locked into a framework but i'm like no you're locked into your reactive system ultimately that
[03:58:37] 's a i i think that's a nicer place to be to a certain degree except for the fact that we talked about today is the change management of the framework will always
[03:58:47]  be more optimal than the state management that you add on top of it always so at a certain point for all the portability here it collapses and i think that's actually um
[03:59:03]  what we should be you know thinking about or or whatnot because as much as i've liked you know to say like yeah let's all use the same solution like i tried
[03:59:14]  to do that with my renderer with dom expressions in the end when you're all trying to do the same thing exactly the same thing like that's the goal you end up
[03:59:24]  with this you might end up with a single standard like a single thing like solid is the best dom expression library that's an example of it astro is the best our
[03:59:32]  solid is the best astro island that's an example of it okay i'm kidding about that sort of but you you know what i mean like and what ultimately ends up is
[03:59:44]  you actually get other fracturing where they're like okay you took this general solution now it's actually become a specific solution because there's it's tailored to a specific need and
[03:59:52]  that's the way you're attacking it and it's the obvious choice something else will fork out and be like no that standard that refinement process is a good process but
[04:00:02]  it also leads to just more things to fork out fork out because something else becomes important that that solution didn't take it into consideration and as i said the wrapper becomes the framework
[04:00:13]  at that point you've just changed what the framework is oh yeah sorry you actually said the argument that people make and yeah okay that that's my answer to it what's
[04:00:29]  your general thoughts of time slicing is react model the best or only way to accomplish it is it the best way maybe is it the only way definitely not i mean we've we
[04:00:39]  have time slicing in solid i've shown it how it's possible i did it on stream unfortunately and it's such a funny stream because i'm sitting here on my computer and
[04:00:48]  everything looks like really smooth and i'm like so proud and like like like it's one of those smug moments i have to admit because paul henschel kept
[04:00:55]  on being like oh you just need a v-dom and dan and everyone just keeps going oh you need a v-dom and i'm like i watched the stream back and
[04:01:02]  the video chops like the the the way i'm screen recording not using obs or whatever couldn't keep up with the animations and it all looks choppy so i'm sitting there
[04:01:12]  acting all smug and being like smooth as butter and and and like the video is just like the worst like choppy bed and it's it's kind of embarrassing but
[04:01:22]  i think that react has a good way of approaching it i do not think it is the only way however i don't think you can just jam reactivity into react's way
[04:01:33]  and be like it work i think you have to stay true to your model to find your way of modeling that problem so it's not like the only way but the the
[04:01:43]  other way is going to be quite different yeah joe ty jsx yeah this is this is the the experiment i was talking about where he's making his own framework are
[04:02:00]  there reactivity benchmarks anywhere great question there's a few um the ones i use i have i i use a different ones and they all show me different things except for that cai
[04:02:17] ro is the fastest uh um uh reactive system that exists k-a-i-r-o but essentially um solid has a reactive benchmark in our repo selects has
[04:02:29]  one as well um and cairo has one and i use those three to do the benchmarks um but each one has slightly different characteristics like selects doesn't work in most of
[04:02:41]  our benchmarks because selects has a certain async element to it which kind of cheats it um so we can't usually benchmark it for most things even though it's
[04:02:50]  one of the fastest reactive libraries um the selects benchmark is just like a big mess of jumbles so i don't even know sometimes what to make of it but it's
[04:02:58]  good because i can always see if i make a regression so um that's why i use that one and then the cairo benchmark is really cool because it has a whole
[04:03:06]  bunch of different shapes of reactive graph propagation and we tested it so yeah i i i do a decent amount of reactivity thing i know solid's not the fastest and i actually
[04:03:16]  there's a bunch of optimizations i left on the table because it made the code size larger and i was just like you're never going to see this in real thing like
[04:03:22]  if if you're like if you're not going to see it in something like the js framework benchmark you're probably never going to actually see it like there's reactivity
[04:03:29]  overhead there's dom overhead and then there's like end user code and the thing is the js framework benchmark will show you um dom overhead because it's like huge amount of dom
[04:03:41]  but it it basically uses um like slowdowns to amplify the framework overhead which would be the reactive overhead um if you're if the if your reactive overhead isn't overcoming the
[04:03:56]  dom overhead i don't like you're not going to see it and it's not going to it's not going to matter reactive benchmarks it's very easy to be like oh
[04:04:05]  the system's like 30 50 100 times faster and have no impact at all real world um for most things because it's not it it's not enough to show up on the
[04:04:15]  dom overhead finally in the end user code i mean that's the constant between all of this and the only benefit the biggest benefit you get of reactivity is making that stuff fine
[04:04:26] -grained you're you're basically limiting the scope of what the end user can impact the performance of the app by going with reactivity you're like okay when you
[04:04:35]  when they write the code all in like separate effects or memos you're like okay only that piece runs when they do some stupid expensive thing whereas i think with a v-
[04:04:44] dom you do that and you're like oh crap you re-render hell like it re-renders 10 times like the the the challenge is that a v-dom
[04:04:53]  re-render is not very expensive so i don't know how to draw this in a graph but like if you it's like it's like how should i put it let
[04:05:01] 's get into scaladraw one last time like if you have levels of how much you can um mess things up um like uh like i don't know i don't
[04:05:16]  know how to draw this as a graph like it feels like i want to do something like this um this is impromptu i'm just thinking here but if if you
[04:05:26]  have like i if your graph here is like um let's figure this out you messed up i want to say like like there's basically different tolerances from like i
[04:05:56]  don't know if i i i i i might need to rethink of the visual for this one here because essentially with a v-dom there's like there's like there's
[04:06:09]  there's this kind of like yeah i guess the other axis is this is the degree of how much you messed up and this is the degree of like impact of that mess
[04:06:21]  up okay so like you yeah like all right not for kids sorry like maybe i shouldn't write that in writing but like when when you take an approach like uh um with
[04:06:52]  with a v-dom and oh yeah thanks marvin i am wrapping up here you haven't really missed anything but uh thank you for joining today um if if you if you
[04:07:07]  go with a v-dom and you talk about like impact as being like how terrible things are it kind of looks like this you oh can i draw can i draw you
[04:07:22]  you get pretty steep pretty fast and then at a certain point the v-dom kind of levels it for you kind of like that so this this this is our v-
[04:07:48] dom with reactivity with reactivity it's kind of like it's kind of like this it's like you're you're like smooth cruising through here right and then like
[04:08:11]  even when you mess up it still stays kind of linear and then it suddenly does this like it's almost like a shelf it's almost like my free my free drawing is
[04:08:25]  no good it's suddenly like and when i say i mean like remix off the end of uh of uh zack's eleventy graph this like i mean like this
[04:08:41]  is still going here like it's this this is this is sort of this is sort of the the difference um between these approaches like there there is no safety net and you
[04:09:01]  hit it here on a reactive library it's like you it's like it's suddenly exponentialed off and then you you have fallen off a cliff a v-dom will
[04:09:09]  never let you fall off the cliff am i trying time slicing right v-dom will never let you fall off the cliff they'll it'll just it'll just basically kind of
[04:09:29]  eventually slow the the bleeding so i i i i do think it's important to note because usually what happens with reactivity is you start in a good place and you're
[04:09:43]  like sweet this is so much faster so much better blah blah blah my components aren't re-rendering 10 billion times and you do some stuff and you kind of like messed
[04:09:50]  it up a little bit and who cares and then you get to a point and maybe this line's like a little bit sooner than i drew here like a little bit more over
[04:09:57]  this way you get to a certain point and then it's like bam you're like holy what happened to my app it's just it's done like and it was one
[04:10:08]  thing where you just completely messed it up and now your whole app is like doing crazy re-renders my whole work what is the x-axis how badly you screwed up
[04:10:20]  no it doesn't matter because reactivity doesn't scale the same way it actually scales really really well which is which is which is the thing because it's all modular it
[04:10:34] 's about how badly you screw up so my whole work with solid if you want to understand what what i do daily is this arrow pointing here pushing the stuff this way like two
[04:10:49]  hands this this is ryan right here pushing that line back i do everything in my power to push that line further back because in knockout days that line used to be
[04:11:02]  like here mob x move the line this way quite a bit solids moving the line this way too but this is a reality of it it's always easier to just be like oh
[04:11:14]  okay i got my vdom safety net but the until i could push this line this far this is why people weren't talking about this because at a certain point in the
[04:11:25]  past it kind of felt like the wall for reactivity was right here like you basically the second you messed up or even semi like things you didn't even have to mess up
[04:11:35]  for things to mess up like like that was the feeling with reactivity especially with magic and all that stuff so all i've been doing is pushing this line back and that's
[04:11:47]  that's that's kind of like a way of looking at my work yeah impact of making mistakes yeah yeah because like that'd be fair like your pro there's like when
[04:12:03]  i say you messed up i mean you you you it should be more like you really messed up and like here this could be like you made a mistake like the thing is
[04:12:29]  like i find reactive libraries because of how modularized the change are they're more forgiving until they're more forgiving until they're not time to infinite loop and knockout is
[04:12:51]  a few hours that's a good metric yeah but see the thing is forgetting a a a function call in solid for the most part just means it doesn't update so you
[04:13:06]  screwed up but it didn't impact your performance it just didn't work like that's why there's so much guards but picture an example of this is solid's components on track
[04:13:17]  okay let me show you via code when i'm talking about picture an expression in the jsx like this okay where it's like condition and then expensive component which is funny
[04:13:34]  because solid's components aren't expensive but let's pretend it's expensive component otherwise no okay and this expensive component takes some props okay now as anyone who's followed me knows
[04:13:54]  that this this thing gets basically transformed into create effect and essentially i mean this right and instead of this we're just going to do this actually actually in this case we can
[04:14:21]  just pass the prop straight through okay that's why i did a spread right it turns into this okay but i often say that solids components are just a function but there is one
[04:14:31]  key difference we untrack our components and this is why because if someone in here in function expensive component went oh i need this or not this i need some value and
[04:14:47]  i need another value right someone did this and then they're like yeah do stuff with value another value okay do you see the problem the problem is if solid didn't untr
[04:15:08] ack this destructure right now in solid this destructure means nothing's reactive this never updates again but if solid didn't untrack this destructure would trigger this effect
[04:15:22]  the parent effect which would cause the component to re-render every time like essentially if value or another value changed it would redo all the expensive stuff every time because essentially
[04:15:44]  we're registering these with the parent effect so in solid we untrack so when you try and access something outside of reactivity it's just like that's not reactive you
[04:15:55]  you messed up but if we weren't careful to do that you could do some pretty terrible stuff because you could kind of butterfly effect because i mean what if this effect red stuff
[04:16:06]  up and like like it's possible it's possible to actually like redraw huge portions of your component tree if you don't guard yourself i did an incredible amount of work
[04:16:16]  to make sure you don't screw up but knockout did not have these guards and you do something wrong and be like oh it looked like it was working but you're actually
[04:16:24]  like recreating all the dom nodes in front of you multiple times sometimes it was it was kind of crazy but yeah i want i want to be very clear that this is
[04:16:45]  not a scale thing theo had a very similar drawing where he's talking about cliffs of scale this is not a scale thing because um uh oh it's not directly a scale
[04:16:56]  thing because this is about how much things are screwed up and and the thing is if you do a bunch of small screw ups they'll be relatively isolated in a reactive system where
[04:17:10]  they aren't in in in um in a in a bdom system so i actually think the scale is good it's just like yeah it's it's one of the yeah
[04:17:22]  anyway yeah uh we we actually did talk uh about this for a bit um for about an hour ago in the stream i guess um basically it's a good way of making
[04:17:44]  a state management library feel first party in a vdom library which is really incredible that's that's kind of the takeaway um it was a little different than solid because solid
[04:17:54]  is a state library that happens to render so it's slightly different uh it means that for pre-act this is mostly about ergonomics and making things easier to use and feel
[04:18:05]  nice and letting people write better code and in solid's case it's very much it it's thing it's like it's it's existence it's what makes solid what it
[04:18:14]  is gives it all its performance does everything so um similar looking very different when it comes to how they actually operate yeah yeah i i'd rather render too often than render too
[04:18:31]  little but you know me yeah yeah yeah but the this is the challenge right uh rendering too often without a vdom safety net or diffing mechanism is actually a death sentence
[04:18:43]  like a much worse death sentence um the vdom so i mean i just understand this graph because when you're living at every point until you get towards here you're just in
[04:18:58]  a so much better place and this isn't just an again easiness or a scale thing this is like this yeah i mean there might be a factor here kind of like
[04:19:09]  a failure factor like if you've ever done uh failure stuff like i'm an engineer by trade and you you basically have to do a bunch of math to figure out what the
[04:19:18]  rate of failure is and if it's not as linear as you'd expect because like it's often compounding um and you end up using like you know inverses for
[04:19:29]  doing the statistics to figure out the number i feel like you could make maybe that argument here with enough independent failures you can cause the whole thing to go down um and that
[04:19:41] 's only at scale that's only a projection of that math but i i mean at that point like i don't know i feel like the whole time that's happening you're
[04:19:56]  you're watching your vdom app get slower and slower and slower and in solid's case the fix might be just to fix one point in the puzzle like just fix those
[04:20:07]  points i mean yeah yeah anyway is there solid alternative to react native um people are playing with some stuff on top of native script and actually even on top of react native i don
[04:20:19] 't know what the state of that project is honestly i haven't kept up with it um i know there's experimentation but i can't say like here's the docs there there
[04:20:26] 's nothing that far along i think um yeah i think it's going to be a bit we just need it's it this is one of those chicken the egg catch-22
[04:20:36] s we we just need more investment in the ecosystem and as we prove ourselves in each area it will happen but it just takes time i'm my focus has been on kind of
[04:20:45]  core web foundations ssr and that stuff so i haven't really looked too far into that but one day yeah i actually think these statements are both true forces you to fix
[04:21:00]  your code when it breaks so if you do something really bad and it's strictly better in the meantime yeah but that's that's my position solid puns write themselves yes
[04:21:11]  solid alternative yeah you guys are good i don't know any any more questions today um this was a lot this is basically what i wanted to do i'm streaming again tomorrow and
[04:21:21]  we're gonna get into like language stuff which i isn't always my favorite topic but i think it's actually really interesting because um like a lot of work goes there i
[04:21:31]  try and dodge this with solid all the time because i see how much effort goes into these things and it's like god do i want to spend like months working on typescript
[04:21:39]  language servers and all that stuff but if you want to understand just how hard it is to go build your own language and see what power it unlocks like the trade-
[04:21:48] offs like the trade-offs in full scope dylan's the guy you want to talk to he's been working on like svelte got into the compiler business really strong
[04:21:54]  in 2019 marco's been doing it since 2014. they have and they're even more ambitious you know like this is this is the guy you want to hear to understand
[04:22:06]  like like what it looks like to build your own ui language you know as a framework how important is ui i don't know this this is this is this is an
[04:22:23]  interesting one i don't know if you're asking me fabio but this is an interesting question i've hit apps that have maxed out but that's because i was
[04:22:35]  doing crazy stuff with image processing um it does tax the device um i've focused on memory a lot because of that's the weakness of reactive systems if you address the memory you
[04:22:51]  address the slowdown and that's you as you know with phobia and whatever you you fix the you fix the memory you improve the performance that's that's the the
[04:23:00]  key thing but in real apps unless there's a memory leak or it's getting away from you i i you know it's it's hard to say because it's it's
[04:23:11]  it's one of those device restricted constraints and people have measured stuff like load times based on bandwidth and cpu but memory rarely gets talked i don't have good numbers here my
[04:23:22]  gut is the difference between a framework that's the same memory or double the memory it doesn't matter until you get to a certain point but i don't i don't
[04:23:33]  i don't know that it's not it i've i've optimized memory because creation is the weakness of reactivity so you focus on memory because you want to make sure your
[04:23:42]  creation and removals fast but i don't i don't know how important it is outside of that okay anyway yeah i think we're done then thank you everyone for joining
[04:23:55]  today um i had a lot of fun if this was as i said a topical const uh topic and i knew that like look we've been here for like four hours i
[04:24:03]  i knew like this week in javascript i couldn't like talk to dylan for three hours and then do a four hour this week in javascript we are going
[04:24:09]  to do this week in javascript tomorrow but like yeah this this topic and these things need to be talked about um i'm very very excited in general just to see
[04:24:20]  these conversations happen um so yeah i mean this this is this is going to um be really exciting moving forward to see more and more um people looking at reactivity which is
[04:24:35]  why it's important to understand the differences um and how they play together so i hope we accomplish that today yeah thank you all for joining me and uh yeah see you tomorrow