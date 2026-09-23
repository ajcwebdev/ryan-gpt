---
title: "I6L29qSTaFA"
slug: "I6L29qSTaFA"
duration: "4:24:50"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/I6L29qSTaFA.m4a"
---

This is a transcript with timestamps. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).

- Write a one-paragraph summary.
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.

Example JSON output:

{
  "shortSummary": {
    "episodeDescription": "A concise one-sentence description of the transcript in 180 characters or fewer."
  },
  "longSummary": {
    "episodeSummary": "A single-paragraph summary of the transcript that explains the central topic, the main arguments or developments, the evidence or examples used to support them, and the broader takeaway for the audience. It should read as one cohesive paragraph rather than a list, staying informative without becoming exhaustive. The summary should mention the most important themes, clarify what changed or was learned over the course of the discussion, and note any conclusions, recommendations, or implications that would help someone understand the full conversation without reading the entire transcript. It should also preserve the flow of the discussion so the reader can follow how the ideas developed from beginning to end."
  },
  "longChapters": {
    "chapters": [
      {
        "timestamp": "00:00:00",
        "title": "Introduction and Overview",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      },
      {
        "timestamp": "00:04:30",
        "title": "Core Ideas and Implications",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      }
    ]
  }
}

Transcript:
[00:00:02] Hello everyone, welcome to my stream today. Just gonna get started here in a minute.
[00:00:09] This is a bonus stream. I'm still doing the stream tomorrow with Dylan. I'm looking forward to that. We're going to get into
[00:00:16] building a language and look at all the things that go into that from
[00:00:21] all the tooling, design, which I think is a really interesting topic, because people see stuff like Svelte, or maybe Vue to a certain extent, and they're just like,
[00:00:30] like
[00:00:31] I don't think a lot of people realize just how much goes into it. Um,
[00:00:36] to consideration from, as I said, from design to like,
[00:00:41] prettier and code formatting and syntax highlighting and
[00:00:45] TypeScript, there's so many things.  So I'm very excited to talk about that tomorrow.  The thing is, the reason we're having a stream today
[00:00:51] is
[00:00:53] - Thank you.
[00:00:55] Mostly we talk a lot about frameworks and reactivity and
[00:01:00] Preact dropped some news on us.  They've been hinting at it for like...
[00:01:05] like a
[00:01:06] I'd say a couple months now, about this really cool performance trick they were working on.  But they actually...
[00:01:13] Dropped.
[00:01:14] on us.
[00:01:16] a new
[00:01:17] primitive to use with Preact which are
[00:01:20] well, they're signals, reactive signals, which
[00:01:24] as probably to no one's surprise here, is kind of like an area that we spend a lot of time on the stream talking about. So there was just
[00:01:34] No way...
[00:01:35] that I'd get away with not talking about that this week.  And I'm really excited about the topic that I'm doing tomorrow.  So I didn't want to like hijack the whole this week in JavaScript to talk about  preact because I realized
[00:01:47] there's a lot of prerequisite knowledge to fully appreciate what's going on.  And sorry, before we even get into that, I probably should just
[00:01:55] share my screen for a second and see. If you've been living under a rock and you haven't seen this, this is... Jason posted this a few days ago and...
[00:02:05] Pre-AX adding signals, basically reactive
[00:02:10] drivers into their VDOM
[00:02:12] implementation.
[00:02:13] It's actually...
[00:02:16] kind of cool and we're going to talk about that a bit later, what that involves and how that works. But,
[00:02:22] I think...
[00:02:24] to properly get the context of all of that. I want to go back. And yeah, I apologize for  people who just came here for the hot takes. That's just not how I roll around here.
[00:02:36] Um...
[00:02:38] Thank you.
[00:02:38] - Okay.
[00:02:39] generally speaking, um,
[00:02:42] every decision has a long history that led up to it and a lot of implications and trade-offs and those are the kind of things that we look at around here so again I apologize if you're just
[00:02:52] coming here to to get the hot takes so to speak uh just a second
[00:02:56] I need to close this down.
[00:02:59] we're gonna we're gonna be looking um at some other stuff yeah i just posted on twitter that  we're live i gotta remember to actually post my twitch link it looks like people from twitch are  coming in though so uh
[00:03:12] Yeah.
[00:03:13] I'm glad about that. Yeah, I mean, I've been talking about these topics a lot recently. It came up in the 1.5 stream, too, where like, we were like,
[00:03:24] people were like, push, pull, what are you talking about?  Right. And a lot of these conversations are happening right now because of
[00:03:32] Things like this get released.  Uh...
[00:03:34] I'm trying to remember, let's see if I can find the conversation really quick here on Twitter while we're just waiting for people to join out.
[00:03:41] There is a...
[00:03:43] people are talking about these signals and
[00:03:45] you know, obviously someone's like, "Whoa, React, are you all going to jump in and do this as well?"
[00:03:52] Just a second, I'm gonna pull this off here.  But what I wanted to, let's see if I can
[00:03:57] Find the conversation that I'm that I'm looking for two seconds. Um, and
[00:04:02] Yeah, here we go.
[00:04:07] Preact. Signals seem like quite a nice, but I'd really like to hear React teams' stance on them, because surely they've considered those as well. It's not a unique idea. Solid has signals too, and I bet some other frameworks as well.
[00:04:17] Yeah, that's
[00:04:19] That's an understatement.
[00:04:21] We'll talk about that, but I think
[00:04:25] Um...
[00:04:27] reactivity...
[00:04:29] of this nature has been in frameworks for ages and not just like niche  frameworks or ones that I like to talk about that no one cares about like Knockout. I mean like,
[00:04:39] major like
[00:04:40] And I don't mean like rx.js like you find anger. I mean Vue has been built off this from day one. And they're strangely silent in this conversation. I mean, not that Evan's silent, he's made some tweets, but I mean that...
[00:04:53] people just like
[00:04:54] Haven't recognized
[00:04:56] that this is not really new.
[00:04:59] And I think that's part of the reason why I want to talk about this,  because there's inherent trade-offs and decision points here.  And they're not necessarily what people...
[00:05:09] lead you to believe they are
[00:05:11] necessarily.
[00:05:13] It's...
[00:05:21] Double check on him.  Maybe not.  Preact build.  Yeah, he's definitely in the circle.  Was basically saying, React is an interest in this, which  is basically what I've been saying the last few streams.
[00:05:34] But Dan came in to clarify some stuff for us. He said,
[00:05:38] "Any" is an overstatement.
[00:05:40] Basically, React's already decided that this isn't an approach they want to take.
[00:05:44] Um...
[00:05:46] And he's like, from my understanding, this model relies on reading mutable values during render, which doesn't work with features or building like transitions and suspense, etc.  It appears that the primary motivation is skipping re-renders.  We have other stuff in the pipeline meant to address this in a way that doesn't break our model, but definitely curious how performance works for render.
[00:06:00] Preact.
[00:06:02] And
[00:06:04] I think this is...
[00:06:06] This is just good to look at and point out because...
[00:06:10] I agree with what Dan's saying. I think there's also other solutions to solve what
[00:06:14] Dan's suggesting they can't do
[00:06:17] Like, you know what I mean?  Like, I think you can do the stuff that React does with reactive primitives.
[00:06:22] as well. So it's not like, but
[00:06:24] I can definitely see that it's
[00:06:27] It's a complete change of model.
[00:06:29] um so
[00:06:31] Anyway, I just wanted to bring this out because...
[00:06:33] There are trade-offs here.
[00:06:35] Like,
[00:06:36] Dan is also very right.
[00:06:39] And I think we need to kind of get a fuller perspective to actually be able to understand and make these kind of decisions for ourselves to understand how to take in this information.
[00:06:48] That's what we're here for.
[00:06:56] Yeah, let's see some how you all doing in chat so far.
[00:06:59] I got a few people saying hi.
[00:07:04] Yeah, what do we got?  Some people are calling it.  What do we have?  Maple's calling his shot.  Before you even go into it,  I'm thinking now that signals are kind of awkward in React.  You either get the full granular render  or an entire component render.
[00:07:17] Yeah, we'll look at that. I...
[00:07:20] - Yeah.
[00:07:21] I want to get there ourselves and see what we think about it.
[00:07:29] Yeah, what are we gonna?
[00:07:33] I think the bigness is a piece of not understanding or not knowing about solid.
[00:07:37] fair or view to be fair. Like there's two different levels of this. You have view
[00:07:45] Which...
[00:07:46] might not be doing some of the optimizations that Preact's doing.
[00:07:49] But there's no way you can't talk about VDOM plus reactivity together
[00:07:54] without
[00:07:55] talking about view.  Like literally that's,
[00:07:58] been the thing the whole time.  Like...
[00:08:01] View is not always the topic conversation on our streams.
[00:08:05] There's certain things in terms of values, which I consider the important part, where I align much closer to React.
[00:08:11] And I actually think this is kind of an interesting thing here because
[00:08:15] I talked about this last stream, solid
[00:08:18] was
[00:08:19] inspired by React, not as a way of fixing React, but I created Solid having one of these reactive libraries and we were like, "Oh,
[00:08:26] React has a lot of good patterns. We should see if we can incorporate that. So actually push solid to look and be more like React intentionally as a way of reinforcing good patterns.
[00:08:36] Whereas I get the impression from this
[00:08:41] API design and stuff here with the Preact design, which is very view influenced, they're more like, okay,
[00:08:46] We're kind of always pigeon-told as like React Compat, smaller React.  We want to escape out of that.  How do we get away from React as much as we can?
[00:08:55] We'll use reactivity and we'll use like view style primitives.  I think it's a really interesting...
[00:09:02] contrast where
[00:09:05] Solid's reactivity shape is very, is pretty intentional.
[00:09:10] because it values what React values.  So this might represent a bigger shift long-term  than people might account for right now.
[00:09:18] So that's why I mentioned view and solid because on the extreme if you actually care about granular updates you want to get the full benefit of this technology you use solid it's the only one that
[00:09:27] works like this.
[00:09:28] But...
[00:09:29] If...
[00:09:30] you want the DX and you want to like have that experience and simplify things, you know, in the model a bit with reactivity, like,
[00:09:39] There's a trade-off there.  It's not necessarily purely simpler,  but it helps you model certain things differently.
[00:09:44] perhaps in a less verbose way.
[00:09:47] There's already Vue doing that.
[00:09:49] So like
[00:09:51] with a VDOM as well. So just, just,
[00:09:54] Preact is somewhere in the middle.
[00:09:55] now, which is funny because you started a place where you're like a react
[00:09:59] Um...
[00:10:00] Compat considered almost like mini react and now
[00:10:03] they're actually pushing into this zone that's actually somewhere between view and solid.
[00:10:17] I mean, we'll get there, but if they do,
[00:10:20] Yeah, I mean...
[00:10:23] Yes, I mean...
[00:10:24] But...
[00:10:27] Maybe I'm just not doing a good enough job of marketing.
[00:10:30] I mean,
[00:10:36] Yeah.
[00:10:43] Okay, so I think I got some people here. I'm going to try my best. Today's a hot day.  This whole week has been super hot and I was actually recording all day yesterday for my  V-Conf recording and it was like a bit of a sweat fest. Today's going to be no different.
[00:11:02] But we're just going to get into it.
[00:11:04] Mmm. Okay, so don't mind my drink. This is sweaty one. The thing you don't realize, oh, actually, I don't even have all my lights on right now. Sorry, give me a second.
[00:11:14] There we go. Let's get some more lights in here.
[00:11:17] When you're streaming, you're sitting there and you've got a bunch of lights shining on you.
[00:11:21] to make sure it looks good.
[00:11:22] So it's like, it's not just being in a hot place. I'm like sealed up in a room to make sure you can't hear the family
[00:11:29] noise in the background and I'm
[00:11:31] basically
[00:11:33] I have a bunch of hot lights pouring on me. So that's, that's, that's, that's how this works.
[00:11:37] Thank you.
[00:11:38] my wife was like, "Well, maybe you should just stream your shirt off."  And I'm like, "I don't know if that's going to really work with this audience."
[00:11:44] So let's...
[00:11:48] Let's just move on.
[00:11:50] Okay, so how are we going to start today?
[00:11:54] So let's get...
[00:11:57] Thank you.
[00:11:58] Let's get started here.
[00:12:00] Because the funny thing is, we're talking about Preact, and we're...
[00:12:04] And we're talking about
[00:12:06] you know, virtual doms and all this stuff, but
[00:12:08] There's a historical precedence here and it all ties into actually state management too, but I'm actually going to start with change management. I want to talk about change management.
[00:12:17] .
[00:12:19] Um,
[00:12:20] And change management is...
[00:12:23] is like state management but we don't talk about it as much because it's not  the piece that people feel like they have the choice of choosing
[00:12:29] Change management is essentially the mechanism
[00:12:34] underneath that the framework uses to do updates.
[00:12:38] Right.
[00:12:38] And
[00:12:39] I'm going to take a simple example to kind of show you all...
[00:12:45] Like what I mean by this is the easiest way to put it. Okay, so I
[00:12:50] I'm going to go in and pull up a solid playground. I think this is big enough. Where are we inside? Yeah, this is fine  You've all seen the silly counter hopefully by now and
[00:13:00] Am I sharing my screen properly, right? You guys are all good? Yeah, okay, good stuff. Alright.
[00:13:07] Right, so I'm gonna start the easiest way by just deleting.
[00:13:12] All of this.
[00:13:12] Okay.
[00:13:14] And this is how I like to start things.
[00:13:16] Because we're going to go back to the beginning. I'm, I'm, I'm going to,
[00:13:20] Let's get into
[00:13:22] Let's start with something almost jQuery-like, just to understand the evolution here.
[00:13:30] I'm gonna make a button.  We're gonna remake that counter again,  but we're gonna use vanilla JavaScript to do so.  And you might be like,
[00:13:37] I thought you were going to talk more about Preact. No, I'm sorry.  We're going to actually start with vanilla JavaScript because this starts with fundamentals and
[00:13:45] Our counter starts with some text in it, our button starts with some text in it, like a zero.
[00:13:53] We need to append it. So what is it? Document.
[00:13:57] dot body
[00:13:59] dot append
[00:14:01] Let's just put the button in there, okay?
[00:14:03] Sweet. We have a button. It doesn't do anything. Actually, I'm
[00:14:06] Hot.
[00:14:08] Reloading stuff is...
[00:14:10] Awkward here, so I'm actually gonna
[00:14:12] This is my little hack so that we don't end up with 10 buttons on the screen.
[00:14:16] Okay, cool. And then our buddy needs to do something. So if
[00:14:20] we're making a counter, right? So welcome to vanilla JavaScript. This is this is how you could do stuff without a framework. Obviously, this stuff was
[00:14:31] in some ways has been here since the beginning of time from at least from our perspective but
[00:14:37] and yeah actually I need to  coerce this into a
[00:14:41] into an integer, otherwise it's going to just append it on the end. Yeah, plus
[00:14:45] plus one, but essentially
[00:14:48] And...
[00:14:49] be quiet TypeScript.
[00:14:51] I think we got a button here.  Yeah, okay, sweet.  This is vanilla JavaScript.  We just built the counter component here.
[00:15:00] And what's cool actually, as I said, is in the past, the APIs might have been bulkier to do certain things, but this doesn't actually take much code.  It wasn't actually much more code to write this simple counter than it would be to like...
[00:15:11] do something in...
[00:15:13] in a framework actually.  So there we go.  We've got a,
[00:15:17] we've got our counter component, right?  And when we click on it,
[00:15:22] it updates. This is not terribly surprising. But...
[00:15:28] There's a reason why we don't hold or stick with just this approach, because...
[00:15:33] essentially...
[00:15:35] - Okay.
[00:15:36] At a certain point, we actually want to be able to...
[00:15:41] how should I put it?  We want to be able to
[00:15:45] kind of
[00:15:46] not tie everything directly to the event handler.
[00:15:49] because
[00:15:51] Like we want a way of representing statefulness because we might have multiple
[00:15:56] things that change.  You don't want to, like, have, like...
[00:15:59] a lot of repeat logic, like multiple clicks and stuff. And we decided that
[00:16:04] We don't want to be jQuery.  We want to be...
[00:16:07] Data-driven.
[00:16:08] okay but that you have some kind of state
[00:16:11] and you
[00:16:12] and the view is a projection state. React might have codified it, but this did not start with React. But let's take our example and kind of go a little bit further here. So I need a state variable. I'm going to use an object here because it'll help me kind of, I think, get through the whole progression of what I want to show here. But let's now make this count zero, our state. And
[00:16:35] Now we...
[00:16:37] this will coerce to a string thing anyways and
[00:16:41] It's not too hard here, but now when we click our button,
[00:16:48] Um,
[00:16:49] we don't want to update the button directly.  We want our button to...
[00:16:53] uh,
[00:16:55] We essentially just want our button to go count plus plus,
[00:16:58] and
[00:17:00] And then.
[00:17:01] We want this just to update.
[00:17:02] As you can imagine, this doesn't just update.
[00:17:07] Right?
[00:17:08] Like clicking this is not going to update here. So this is where the actual fracture of JavaScript frameworks actually started.
[00:17:18] Because actually deciding how to update
[00:17:21] the text
[00:17:23] is what separated a bunch of the original approaches  to JavaScript frameworks.
[00:17:28] the
[00:17:30] This might not be the most obvious one, but it's funny because I feel like with something like Angular or one of those earlier ones, this is actually the closest way to model it. But one way we could we could update it is
[00:17:42] Check.
[00:17:44] If...
[00:17:46] is check if the state is updated and then apply the change.
[00:17:52] And you're like, "Chackle, that's kind of stupid."
[00:17:54] Sure.
[00:17:55] Let's just do it. Let's make a set interval here.
[00:17:58] Okay.
[00:18:00] P is not. Yeah. Okay. So we got our set interval and let's put it at a reasonable time.
[00:18:07] well not that reasonable, we'll do one second initially, you can see that isn't a very reasonable amount of time, and in our interval
[00:18:12] we want to check some stuff, right?  We're going to be like, okay, well...
[00:18:16] uh,
[00:18:18] We can set...
[00:18:19] I guess the easiest thing we can do, right, is just go...
[00:18:21] document, or so we can just take our button
[00:18:24] and go text content
[00:18:27] equals state.count, right?
[00:18:30] and if we do this
[00:18:35] I mean...
[00:18:36] *coughs*
[00:18:37] You can see there's a lag.  I can click it a bunch of times and then
[00:18:42] every second it checks.
[00:18:45] the value and then updates the UI.
[00:18:47] Um,
[00:18:48] This approach is called polling and I wanted to show this here because I
[00:18:54] This might seem really bad because it's not responsive, but it is
[00:18:59] a legitimate
[00:19:00] way one could approach it. So let's make it 100 milliseconds instead. At 100 milliseconds,
[00:19:05] it feels almost responsive, right?  Like...
[00:19:09] Thank you.
[00:19:11] Right, like, this is...
[00:19:13] not
[00:19:14] unlike
[00:19:15] like some of the stuff around Angular 1 time period. It's not exactly correct, but I just wanted to kind of show this, to explain one way of you doing it. What's cool about this approach
[00:19:25] is that
[00:19:28] There is...
[00:19:31] plain object
[00:19:32] We didn't introduce anything fancy here.
[00:19:34] We're still just using the DOM APIs and we're now just adding some kind of scheduler.
[00:19:40] Right?  Yeah, someone's mentioning this is how games work.  And this is what people might call poll-based
[00:19:46] system in its purity.
[00:19:51] Right? Um...
[00:19:53] Because essentially...
[00:19:56] at a set interval
[00:19:58] we check what the value is.  This is, the only problem right now is like we're actually,  the DOM's pretty efficient so this is fine.  So it's like checking it every time.
[00:20:06] Like it's like every time, every second, it's actually resetting that text content.  I mean, you're not going to see a change in here, I'm pretty sure, because the DOM is not DOM.  Yeah.
[00:20:15] it knows it's the same value,
[00:20:17] But it is behind the scenes calling a DOM API to try and set it every time.  So we can do like a little bit better.  So we can do something like let's let's make previous state here.
[00:20:29] and make it into an object.
[00:20:30] and
[00:20:32] What we'll do is we'll...
[00:20:34] will set previous state
[00:20:37] Um...
[00:20:38] equals like a spread
[00:20:40] of state
[00:20:42] I think...
[00:20:43] I don't know if that's going to be important right now, but we just want to clone it.
[00:20:48] And then,
[00:20:48] we can do something because we want to do some comparison checks. We're going to be like, if
[00:20:54] previous state
[00:20:56] dot count
[00:20:58] not equals
[00:20:59] state.count.
[00:21:01] Now do this and
[00:21:06] Thank you.
[00:21:07] This is a subtle improvement here.
[00:21:11] Um
[00:21:12] Yeah, people are referring to this being like Angular's dirty checking. This is where we're  getting to because I could check the DOM. I could be like, "Hey,
[00:21:22] But in text content, if your content does not equal state.count, then update.
[00:21:28] But the problem with that is then you're not just writing to the DOM, you're reading from the DOM.  And reading from the DOM is dangerous because...
[00:21:35] depending on what it is, the doll might be like, "Oh,
[00:21:37] crap, I don't know what this is, or it could have changed,  layout, and it actually causes early,  if you're not careful reading from the DOM,  you can cause early paints and early layout calculations,  at least, which can cause a bunch of thrashing,  and it's super, super unperformance.  So what we realized pretty early is it was better just to pull out
[00:22:00] a copy of the object to check against
[00:22:03] so that on each iteration,
[00:22:05] we can just make sure that we can check it in JavaScript without touching the DOM APIs.  So now while we're sitting here, our interval is running.
[00:22:12] Um,
[00:22:13] It's only checking JavaScript and we're not hitting DOM APIs.
[00:22:16] unless something has changed.
[00:22:19] Yeah.
[00:22:19] So yeah, I told you I was going to go deep here. I hope, I hope you all appreciate this.
[00:22:25] Is previous state like a VDOM? That is a good question and we will get there. This is part of the thing I want you to understand at the end of this conversation is that there are a lot of similarities between the different rendering techniques. There's a lot of ability to virtualize and stuff. It's a lot of different.
[00:22:46] Some people have even called this previous state like a VDOM, like incremental DOM kind of played  around with this idea. In my opinion, that's not
[00:22:57] What makes a virtual DOM a virtual DOM is that the representation is a DOM.
[00:23:02] um,
[00:23:03] like the thing that you store in here is a DOM representation. Whereas this is actually just a pure data representation. It's actually just plain POJO object. So this actually, in my opinion, is one of three different rendering techniques. And what's cool about it is with even a simple example like this, I can show you all three rendering techniques.
[00:23:24] Listen.
[00:23:25] So this is...
[00:23:27] This is like...
[00:23:29] This is like Angular 1 days, right?  This isn't exactly Angular 1, as I said.  Angular 1 was a little smarter than this,  but I wanted to show you--
[00:23:38] - Okay.
[00:23:40] I want to show you basically a very simple
[00:23:45] look at what change management looks like.
[00:23:48] Oh, hey, Marvin from Preacts here.
[00:23:50] Hey.
[00:23:51] Um,
[00:23:54] - Yeah.
[00:23:54] We will talk about some Preact stuff more a little bit later in the stream. To be fair, I am going all the way back to the beginning. Okay, so
[00:24:02] So hopefully good so far. You all are following me. Sorry, this
[00:24:07] I'm in an awkward part where I'm covering part of the screen, but...
[00:24:11] All you're missing here is literally like
[00:24:14] document.body append the button. So it's not a big deal.
[00:24:18] - Thank you.
[00:24:19] Well, that's the thing.  I want to dismiss this.  There is very...  There's no such...  I mean, from a...
[00:24:27] practical sense there's no such thing as magic i mean i'm i'm i know fun police but um
[00:24:33] I want to demystify...
[00:24:36] the whole
[00:24:37] premise of, you know, things being magic. I think...
[00:24:41] there is a real...
[00:24:43] concern or thinking between the gap between the conceptual model and the implementation.
[00:24:49] That's where that's an issue. That's where magic occurs when you can't tie those together. When you look at something and you're like, I can't make sense of it. Some of that just takes education. And that's what we strive for here. But sometimes the gap is big enough. The abstraction is.
[00:25:05] is good enough.
[00:25:06] But maybe something like the escape hatches are...
[00:25:09] Reveal something that you don't expect and then you're like, oh, everything's magic. So we have to be very conscious as framework authors because  We do provide escape hatches. We want people to be able to
[00:25:19] do what they need to get done, but we also need to make it work with our model.  And I think this is what React has been struggling with a lot recently.
[00:25:27] Yeah.
[00:25:33] No, no, we're going to get to React.  This is just the beginning.  So...
[00:25:39] Enter polling and I probably should keep like copies of these around in case I need to like come back to them.  I've already lost my jQuery version, but that's fine. We don't really care about that.  So let's duplicate this tab and hope that it copies it. No, it's not.
[00:25:52] Because we're trying to be more conservative about...
[00:25:55] Um...
[00:25:56] about this stuff now. So okay, so
[00:25:59] Yeah, and be quiet type script.
[00:26:04] It's fun.
[00:26:06] Why is TypeScript complete?
[00:26:08] Oh, I thought I unchecked it.
[00:26:09] Okay.
[00:26:13] Okay, cool.
[00:26:16] So here we are. So now we are going to look again.
[00:26:20] the
[00:26:21] We can do better than polling. So the first thing that we might want to do instead of polling
[00:26:27] is something that I'd kind of call like events based because
[00:26:32] To be fair, we didn't have to go to polling.  That was just like a really simplistic...
[00:26:37] view of how we looked at things and
[00:26:40] We could have...
[00:26:41] We could have done this a different way.  So let's get rid of the set interval because like, honestly, this is just kind of garbage.  And just let's call our, we're going to call this function, maybe update.  I'd love to call it render, but there's like a little problem with our playground.  I have no clue why it's like this, but
[00:26:57] In our playground, render is like a reserved keyword.  I don't know why they did something like that, but that's fine.
[00:27:05] We can keep kind of our code the same, but now...  I mean, this is really...
[00:27:08] obvious right but
[00:27:11] If I just call update directly in our click handler,
[00:27:14] Now we're not at the mercy
[00:27:18] of the polling this is way you can tell there's no there's no delay here this is way faster and this is
[00:27:24] like
[00:27:24] This did not take me...
[00:27:27] much effort like this was actually easier to do than the send interval it's kind of like the  obvious choice update the state
[00:27:33] call the update function, and then the update function does the work.  I wanted to show the interval first because it's an example of a pure pull-based system where...
[00:27:42] This I mean I
[00:27:45] It's hard to call this push or pull.  You know, it's not like some of...
[00:27:48] Like,
[00:27:49] Technically, the click event is an event that's pushing stuff, but this is very explicit. It's very manual. We're just calling update directly.
[00:27:56] Um...
[00:27:56] but
[00:27:58] Yeah, I mean, at this point, this is actually, this is efficient.
[00:28:02] Right. This is as efficient as our original jQuery version.  Pretty much we pulled it out to a function, but
[00:28:08] This is relatively efficient in our single case.  You can imagine, though,
[00:28:12] if this scaled up,
[00:28:14] it might not be but we'll talk about that more in a minute let's let's continue on our journey here so
[00:28:20] Okay.
[00:28:22] Now we're not polling anymore, so we're away from the pure poll-based mechanism, and we're just kind of calling updates as we need it. You can pretend everywhere you call state.count,
[00:28:32] you call update. And I'm going to fork this one more time, because I think this is actually the common base between
[00:28:40] of most of the other methods.
[00:28:42] Someone asked me about
[00:28:44] Sorry, someone asked me about React a minute ago.
[00:28:47] We're not going to get all the way to React here, but what we could do is we could...
[00:28:53] We could try and
[00:28:54] shift this around.
[00:28:56] Right.
[00:28:57] Um,
[00:28:58] Now, this is kind of like Svelte.
[00:29:00] Yes, actually.
[00:29:01] Yes.
[00:29:02] This is...
[00:29:03] is svelte.
[00:29:04] you don't see the update call, but the compiler literally goes there and goes, and more or less,
[00:29:11] goes, oh, you did something, you assigned equal sign or plus plus, compile in this update function,  and then Svelte keeps some bit checks for dirty checking, but they actually do something, like,  not exactly this, but they do actually do a check in the component and then do the DOM operations  directly. Like, this is actually, thank you for pointing that out, this is actually a lot like Svelte.
[00:29:35] Okay.
[00:29:36] so
[00:29:37] But we want to look at something more like React.  And...
[00:29:43] We're not going to go all the way there, but what I like about this exploration is you start realizing things, right?
[00:29:51] Because on the journey there, you're like, okay, so the first thing to make this like react is you're like, I want to get rid of this update function.
[00:29:57] So...
[00:29:58] What if we can
[00:30:02] We wanna update our state here, but we don't want,
[00:30:06] it to, how should I put it, we want to call setState instead.
[00:30:13] and we're this is why I went with an object because I think this will be more obvious. We want it to be like state dot count
[00:30:20] plus one right
[00:30:23] And
[00:30:24] We don't want to update anymore, so
[00:30:25] Now we can get rid of this.
[00:30:29] And
[00:30:30] - Uh.
[00:30:33] Instead of update, we're going to call it setState.
[00:30:35] and we're going to put in our state.
[00:30:38] that we're going to pass in.  And I know this is shadowed,
[00:30:40] Oh
[00:30:41] It's funny, it's like I have to, yeah, okay. I know this is shadowed, but don't worry about it being shadowed that much. This isn't like real react, but I just want to show this kind of mechanism here. And.
[00:30:51] Now, this looks the same.  We clone our state into previous state.
[00:30:58] So now we can diff it.
[00:31:00] Okay, this looks good. Let's press it.
[00:31:02] Oh.
[00:31:02] It goes to one and never updates again.
[00:31:05] Have you guys ever hit this problem before?
[00:31:12] I mean, we know we're getting into React territory when we have this problem, right?
[00:31:17] - Thank you.
[00:31:18] Um,
[00:31:20] To be fair, this isn't exactly what's happening with React, but I want to...
[00:31:25] The problem is this value of state
[00:31:27] is stale.
[00:31:29] this isn't like how React actually works,  but it's actually kind of...
[00:31:33] the same thing. And the problem is the state is in this closure that happens.
[00:31:39] Right? Someone said you need classes.
[00:31:42] That's one way of solving it.
[00:31:44] Um...
[00:31:45] Right, and then you can reference it through this. That's a good approach. I got like a way simpler approach of a way of solving this, though.
[00:31:54] What if we just...
[00:31:57] put it inside the setState function.
[00:32:06] Okay, whoa, whoa, whoa, just a second.
[00:32:08] Got to make sure that I'm doing this right, but
[00:32:10] if we put it inside the setState function, we...
[00:32:14] we should be able to, in theory,
[00:32:17] be able to close over the same state from the previous run of the state.
[00:32:22] And then we should be good.  So let me see if I can refresh this.
[00:32:25] Okay, what am I not doing right?
[00:32:27] Um...
[00:32:28] Thank you.
[00:32:29] Because this, I would expect this to actually work.
[00:32:32] Let me think here.
[00:32:34] Oh!
[00:32:35] Do you know what the problem might be?
[00:32:37] It's not initialized. You have to run this the first time, right?
[00:32:42] So
[00:32:42] What if we pass the original state in here
[00:32:45] because the button click the click handler never was registered right so and actually since we're  going to run this through the original time we don't actually need to set this here anymore
[00:32:54] And if I'm right,
[00:32:56] we should have our working button again.
[00:32:58] Okay.
[00:33:00] This...
[00:33:01] - Okay.
[00:33:02] is...
[00:33:03] not react exactly,
[00:33:05] and I'll explain why in a minute, but you're starting to see the similarities here. We actually put
[00:33:11] the click handler inside the setState function
[00:33:14] as a way of
[00:33:17] basically invalidating the closure.  We're recreating that closure every time,  wrapping over the latest state.
[00:33:24] And we needed to run it once,
[00:33:27] in order to
[00:33:28] initialize it now.
[00:33:30] And essentially, we're kind of starting the flow.
[00:33:34] The only thing that's
[00:33:35] different here is see how the buttons created outside
[00:33:40] Whereas...
[00:33:43] And this is
[00:33:46] you know, where the interesting part to reconcile it is. We're going to
[00:33:52] We're going to talk about why and how that impacts things a little bit more in a minute.  But I wanted you to kind of get like, you can see even with a simple thing that doesn't have a real VDOM, we're already getting into the zone of these kind of considerations about like...
[00:34:08] when we're trying to run stuff in stale closures and constructing the object and stuff. To be fair,
[00:34:13] This is a single pass non VDOM implementation, so that's why we're sort of hitting it, but it's also why
[00:34:18] there was challenges like React introducing a VDOM, like opened up a bunch of design space. Okay, so
[00:34:25] Before we go forward, I want to show one more
[00:34:30] Thank you.
[00:34:31] Yeah, yes, this better explanation maybe for some people kind of coming in. I want to show
[00:34:36] one more
[00:34:39] example
[00:34:41] based off where we did it because we had
[00:34:43] Angular...
[00:34:46] Essentially, we have what became svelte, but again, not quite...
[00:34:51] And then we have...
[00:34:54] something that's React-like. But again, these aren't completely
[00:34:59] accurate because there's other elements here i'm going to take our our svelte base one
[00:35:04] one more time.
[00:35:06] Let's duplicate this.
[00:35:07] We're going to do one more of these.
[00:35:09] from Svelte and I want to take it a different direction because
[00:35:12] If you remember, sorry, not there, there.
[00:35:15] If you remember, we're just trying to get rid of that update function, right? You can use a compiler to do it. You can
[00:35:21] you can kind of conflate everything to do it.
[00:35:24] Um,
[00:35:26] Is there another way
[00:35:28] of getting rid of that update function.
[00:35:31] Right. We actually and set intervals away to do it, too.
[00:35:38] So
[00:35:39] I thought the VDOM was to avoid heaviness of doing that update to actual DOM objects instead of simpler JS1s.
[00:35:43] Um...
[00:35:46] It's the guard it, though, right?  It's this part of it.  Updating the DOM has to happen regardless.
[00:35:52] So it's more of like, if we can check...
[00:35:56] The stuff.
[00:35:57] ahead of time. But to be fair,
[00:36:00] Dirty checking in Angular was checking the stuff too.
[00:36:04] You know, the idea was that I think it made it easier to do more complex things.
[00:36:11] Um,
[00:36:13] things like in terms of the diffing.  You can actually get the full representation.  And you don't have to rely on data as much, which is--  it's going to come into play when I talk about one more.
[00:36:23] right not updates different reads from the dom yes and that is super important  that that's actually where a lot of the performance is but you can get that from from having uh
[00:36:33] uh,
[00:36:35] from having like
[00:36:36] these objects I showed.
[00:36:42] Yeah, mutating, then reading. Yeah. But when you get these in tight cycles, exactly.
[00:36:46] Yeah.
[00:36:48] Yeah, yeah, exactly. Yeah. So good. We're on the same page. So we're going to try one more
[00:36:54] Uh...
[00:36:55] approach here of getting rid of the update.
[00:36:59] I don't know if anyone can guess what that other approach is.
[00:37:02] But
[00:37:02] I feel like if you've watched my stream before, you might be able to guess what that other approach is.
[00:37:07] It starts with putting the information in the data.  So we're going to do something.  There's like...
[00:37:13] There's different ways I could do this.
[00:37:17] But I'm going to do like...
[00:37:22] I'm just gonna use a proxy because I can.  I mean, we could use getter setters if we really wanted to.
[00:37:27] But...
[00:37:28] The thing is, if we want to update and add more state, then there's more work there.
[00:37:33] I'm just gonna use a proxy because I can't.
[00:37:35] Well, this is a super simple example, but let's target
[00:37:39] property.
[00:37:41] and value.
[00:37:43] We're gonna change our state now into a proxy.  And don't get me wrong, it doesn't need to be a proxy,  it could be a function, it could be anything,  but I wanna use this form because
[00:37:53] I want to keep the look of our examples similar to each other.
[00:37:59] When we set...
[00:38:00] our property here.
[00:38:02] we can just set it to the new value.  But what we want to do is we want to call update, right?
[00:38:08] If we call update here and then return true  to say that we've written to the value.  If we call update here, we don't have to call update here.
[00:38:16] and
[00:38:18] magic.
[00:38:19] So you guys are talking about magic, but
[00:38:22] This version...
[00:38:24] is what I call...
[00:38:26] the
[00:38:27] I guess basic reactive
[00:38:30] version.
[00:38:31] Right?
[00:38:32] Um,
[00:38:33] All we did was instead of using a compiler, instead of kind of
[00:38:37] pushing everything in.
[00:38:39] we decided to just make the data special.
[00:38:41] Um,
[00:38:42] We probably could have done this a different way.  Like, let me think. Do we want to do it a different way?  Let's play with a different way.
[00:38:48] was it object?
[00:38:51] State could actually be a const here this whole time.  I don't know why I didn't.
[00:38:54] do that
[00:38:55] object.define
[00:38:59] property
[00:39:00] um,
[00:39:01] What is it?
[00:39:03] the object will be
[00:39:05] Oh, I guess...
[00:39:06] I need an object.
[00:39:07] And then
[00:39:09] Um...
[00:39:11] Get...
[00:39:12] I think get function or set function.
[00:39:15] - Yeah.
[00:39:17] Yeah.
[00:39:18] I just need a setter, I guess.
[00:39:20] set
[00:39:22] uh...
[00:39:24] So I need...
[00:39:24] Yeah, it's...
[00:39:25] we're going to set
[00:39:26] I don't know why I'm being so slow here. We just need a set function that takes the
[00:39:32] value,
[00:39:33] And then
[00:39:35] basically does the same thing here, right? It's...
[00:39:40] Or is it target value?
[00:39:42] I'm just not even thinking, you know what, screw it.
[00:39:45] I'm too lazy to look th- should I look this up?
[00:39:47] I wanted to point out that this is not
[00:39:52] I'm just like
[00:39:53] doo doo doo doo doo
[00:39:54] point out that this is not
[00:39:59] Here's a simple example. Give me a set. Give me a set.
[00:40:03] I've done this a billion times, but I'm like just not doing it right now in my head.
[00:40:07] set new value, of course.
[00:40:09] Right.  It's because I need to...
[00:40:12] I don't even want to deal with this.
[00:40:14] It's because I need a reference outside of the object to set the object.
[00:40:18] Screw this.
[00:40:19] This is why I went with the proxy.
[00:40:21] I'm saying you don't need a proxy to do this.
[00:40:23] Proxy is just like the lazy, less performant way of doing it. Okay, so we're gonna move on from that. I just wanted to show it could even be a lazy
[00:40:32] function, the thing that I want to
[00:40:35] express here though, is this is not the full reactive story.
[00:40:38] because we're still actually dealing with state
[00:40:42] that is
[00:40:44] Just red.  You see I only intercepted set.  I didn't intercept get.  There's no...
[00:40:49] Automatic subscriptions here. In fact, none of these approaches actually deal with the fact that
[00:40:59] Like...
[00:40:59] these things can be subscribed to multiple locations. We just have this
[00:41:03] update function.
[00:41:05] this one centralized update function.  And as you can imagine, that doesn't scale.  There's gonna be a limit to how far  we can take this update function.
[00:41:14] I'm going to make it a little bit more.
[00:41:15] And
[00:41:18] What can we do about this?
[00:41:21] Now we're going to get into the Excalibur portion of this, right? What we can do with this is
[00:41:27] goes back to those original frameworks.  I just showed you a bunch of change mechanisms.
[00:41:31] And the prevailing logic back in the day,
[00:41:35] was
[00:41:37] that,  um,
[00:41:40] we use model view controller, MVC or MVVM.  I'm going to...
[00:41:46] There are differences between
[00:41:50] MVC and MVVM.
[00:41:52] But...
[00:41:54] I'm going to focus on MVVM because MVC and the client is kind of a lie. It was never real.
[00:42:02] which is actually what motivated a lot of the change from angular one to angular two and whatnot.  Like the problem with model view controller
[00:42:09] is that, no, I'm going to put model here.
[00:42:12] Model.
[00:42:16] view
[00:42:18] Sorry, I don't know. View doesn't go here. View goes over here.
[00:42:22] It's funny.
[00:42:23] I'm gonna put...
[00:42:24] Can't do...
[00:42:25] The problem with Model View Controller
[00:42:28] is that
[00:42:29] - Thank you.
[00:42:30] You have a bunch of models over here, okay?
[00:42:33] And I don't know what they're gonna look like. They're like databases, but let's just pick a few models.
[00:42:40] I'll make three.
[00:42:41] Because I can't.
[00:42:42] And they're kind of
[00:42:44] There's no actual real hierarchy necessarily.  They have relationships, right?  We can...
[00:42:48] We can be like, you...
[00:42:50] have this and you have this and
[00:42:55] Maybe this one also references back to this or something.  Like, we can make...
[00:43:01] - Yeah.
[00:43:02] a bunch of relationships, but it's not directed, it's not like
[00:43:05] the model of like a UI, whereas like the view,
[00:43:09] is very much
[00:43:11] Um...
[00:43:12] What shape do I want to use for the view? Diamonds? It doesn't really matter.
[00:43:18] The view is very much like
[00:43:21] Let's make a few of these.
[00:43:23] It's very much like a...
[00:43:28] My arrows are probably gonna be like the wrong way.
[00:43:30] But...
[00:43:32] It's it's very much like a directed thing like this has these and
[00:43:37] This has these
[00:43:40] This has these
[00:43:43] It's very much like a tree.
[00:43:45] You have a parent element
[00:43:48] that has...
[00:43:50] A couple children...
[00:43:51] that have
[00:43:52] some children of their own.
[00:43:53] Right. Everyone falling so far. Right.
[00:43:57] Components are how you feel inside. All right. I mean, this is what I'm getting to aren't I? The problem is I
[00:44:04] Old conventional logic was on the server, and this made a lot of sense, was that
[00:44:09] in the middle here.
[00:44:11] you
[00:44:12] And I don't know, we're gonna use purple.
[00:44:14] we had the controller.
[00:44:16] And
[00:44:18] - Thank you.
[00:44:23] "Juice effect is how I feel outside."
[00:44:26] I'm going to put the two sides in the middle.
[00:44:30] Yeah.
[00:44:31] Okay.
[00:44:32] - Yeah.
[00:44:33] *laughs*
[00:44:34] All right.
[00:44:36] So we're still going here, right?  So...
[00:44:39] The problem with this model was that
[00:44:42] Usually UI didn't really own the model like it  If you're if you're in the browser, there's like this
[00:44:51] other...
[00:44:52] hidden arrow going off the side of the screen going like,
[00:44:56] You know, what are we going to say?
[00:44:58] server
[00:45:00] this way, right?
[00:45:03] but
[00:45:06] The problem with the earliest versions of this model is that
[00:45:12] If the server kind of owns a model and the view has all this display, how do you like
[00:45:17] make view specific...
[00:45:19] representations of
[00:45:21] of data.
[00:45:22] essentially, like how do you get view specific state?  And the controller was just like, look, I know that you have a user model
[00:45:31] Let's go back here and pick color and be like user.
[00:45:36] There you go. And the controller's like,
[00:45:40] Controller's like, "Okay, um..."
[00:45:44] Let's get him to the scene. He's like, I'm a user controller. I know what to do with that.
[00:45:48] And...
[00:45:51] Thank you.
[00:45:53] uh
[00:45:54] Is it purple?
[00:45:55] And then...
[00:45:57] Somewhere over here is like...
[00:45:59] Oh yeah.
[00:46:00] I display users.
[00:46:03] You know, like this kind of link up seems like it makes a lot of sense at first, except there's no way where to hold anything.
[00:46:11] that state because you're like, oh, this user in this list
[00:46:14] is selected
[00:46:15] Um...
[00:46:16] Where does that go?
[00:46:17] Does that go in the model?
[00:46:19] No, that doesn't go in the model.
[00:46:26] So you might be like, why am I going on this crazy tangent?  Well, the thing that we realized pretty quickly here is
[00:46:33] is that
[00:46:35] there's this invisible...
[00:46:37] other thing and I say it was invisible but
[00:46:41] Sorry, I'm going to keep...
[00:46:42] the controller hard
[00:46:44] like straight line, but then I'm going to
[00:46:47] draw in this space
[00:46:50] another circle.
[00:46:52] And...
[00:46:53] We're going back to Angular days, right? That's the idea here.
[00:46:56] I'm going to be like,
[00:46:58] There's this thing in here and it's called scope.
[00:47:03] Alright.
[00:47:04] Oh no, scope.  And this thing--
[00:47:10] was really weird because it was a weird mixture of model data and
[00:47:15] and like instance-based data and it kind of got passed through and it was a mess.
[00:47:19] Um,
[00:47:20] Nobody liked Scope.
[00:47:22] But...
[00:47:23] - Okay.
[00:47:24] Before we got to React and stuff, we realized that
[00:47:28] There's actually another way to solve this, right?  You got to remember, I showed you that React model.  This is...
[00:47:34] This
[00:47:35] The problem with the React model here, which is this one, is
[00:47:40] If we want to break stuff up,
[00:47:41] we actually need to pull this inside the setState function,  and that's prohibitively expensive  because you don't want to be recreating DOM elements.  I hope that, I know I haven't fully explained that,  but I'm getting there.  But before we get there,
[00:47:57] we were like, okay, let's just change our plan up. Let's make these view models. And now,
[00:48:05] We can just do this.
[00:48:07] and we can have
[00:48:08] as many of these representations
[00:48:11] as we want and if
[00:48:13] There is...
[00:48:16] something like
[00:48:17] I'm trying to think of what's a good example to put in here. This is a user. Let's say these are friends. This is like a friends list link table. So that's why it points back to users because there's this. And then let's say...
[00:48:29] This is what do users have? I don't care if they have addresses.
[00:48:34] They have cars, I don't know, whatever. Let's say they have addresses. I want to use addresses because multiple users can share the same address.
[00:48:40] Right.
[00:48:42] Thank you.
[00:48:45] Thank you.
[00:48:47] but
[00:48:47] essentially, we can have multiple, we can have a user per actual user. And yeah, I didn't pluralize this. That was my fault in the beginning, because
[00:48:56] Generally speaking, the database is a collection, right?  So users, friends, addresses, and then you might have user, user, user, and you might  have...
[00:49:06] Uh...
[00:49:08] Get there.
[00:49:09] Mm-hmm.
[00:49:11] we can do
[00:49:12] we can do not friends because users are friends we can do
[00:49:16] Address.
[00:49:21] Okay.
[00:49:22] It's a little bigger. Yeah, OK. Now we have address. And we can have a few addresses.
[00:49:27] Notice that friends isn't even really represented here.  It's actually, like, when we get to here,  what we'll see is that the friends relationship is actually, like, a...
[00:49:35] Um...
[00:49:37] is actually an arrow.
[00:49:40] Like that's, that's,
[00:49:42] the thing and then these users
[00:49:44] have addresses
[00:49:48] And it's funny because these arrows can still point back.
[00:49:51] Right? Like they can still be
[00:49:54] directional
[00:49:55] Um,
[00:49:57] And who knows, maybe this user has two addresses.
[00:50:01] But,
[00:50:02] It's like a slightly different representation because it might hold
[00:50:07] Well, here's the challenge.  Do you map your...  This is the problem here.  Do you map it more to your model structure  or more to your view structure?  Which in your view structure, you might have...
[00:50:17] a user
[00:50:18] So you have users, list, user,
[00:50:21] or
[00:50:22] Let's say,
[00:50:23] You know,
[00:50:24] Let's...
[00:50:25] I mean, let's show a user and then
[00:50:27] Let's show each of their friends
[00:50:30] which are another user.
[00:50:34] And then...
[00:50:36] and then we'll show their addresses.
[00:50:39] as another
[00:50:40] piece of
[00:50:42] piece of it, right?
[00:50:44] Like, you can see that this actually resembles this a lot, but it can also resemble...
[00:50:48] this.
[00:50:51] So
[00:50:52] I just wanted to point out that there is a very easy way to keep things separate.
[00:50:58] And this is what we used to do.
[00:51:01] Because going back to
[00:51:03] our reactive example
[00:51:05] or really most of our examples, except for what I called the React example, you just
[00:51:10] You noticed in the React example, we called setState right at the beginning.  We ran it once to set everything up.
[00:51:15] Whereas in the rest of these examples, there was like a clear creation and a clear update.
[00:51:20] whether it's the reactive or what we call the Svelte example, where we just did the call the update explicitly.  There's this clear create and update. And what it works kind of nicely with this kind of drawing, because you have this model, this exists somewhere else. And then when you go to make your
[00:51:36] kind of view representation.  You just...
[00:51:39] you know
[00:51:41] This is, you just make everything once, so you create it.
[00:51:46] create it,
[00:51:47] And then when you go to update it,
[00:51:49] will you update
[00:51:51] here, or maybe models, it's unclear exactly,  it depends on what the thing is,  but if you click some part of the UI,
[00:51:57] you're going to send your updates back
[00:52:00] Back this way, right? Here's an update.
[00:52:03] Thank you.
[00:52:04] I should change the color of that arrow.  Something...
[00:52:07] more punchy.
[00:52:09] Punchy, there we go.
[00:52:11] and you're like, "Okay, I'm going to update this."
[00:52:14] I don't know why I'm pointing from there to there, but let's go from address to address. Okay, so now we're doing updates. Okay?
[00:52:21] update this address
[00:52:23] You click on something,
[00:52:24] triggers this view model,
[00:52:26] update and then we're back to our change question because we call the update and then we're like
[00:52:31] How do we get the change
[00:52:34] Back.
[00:52:34] here
[00:52:35] Um...
[00:52:37] So click something in the UI, doesn't have to be from the address, and then reflect it back on the address change.
[00:52:43] Um,
[00:52:45] And
[00:52:47] Thank you.
[00:52:48] Yeah.
[00:52:49] Let me just call it change.
[00:52:51] - Okay.
[00:52:53] This is what we've been looking at this whole stream, basically, essentially how this kind of loop works.  And it might sometimes go back to the database model because it feeds in.  But it's very easy when you have these trees that create once and then they're very directly linked.
[00:53:08] to be able to just do these updates.
[00:53:11] And this is basically the state of what the world was like before React.
[00:53:15] Um,
[00:53:17] And
[00:53:19] Thank you.
[00:53:20] I mean...
[00:53:21] To be fair,
[00:53:22] in a sense
[00:53:24] Solid today is still...
[00:53:26] version of this.
[00:53:27] Um...
[00:53:29] I mentioned earlier that there's three types of rendering.
[00:53:35] The one thing that these days we all have in common
[00:53:39] isn't
[00:53:40] this because no one actually does MVVM anymore.
[00:53:44] Because...
[00:53:45] what
[00:53:46] reacted.
[00:53:47] is they introduced the component model, right?
[00:53:50] Let's change this to the component model so that I can make this a little bit
[00:53:54] Oh.
[00:53:55] Not that.
[00:53:57] Let's change this to the component model.
[00:53:59] so I can make this a little bit more obvious what we're doing.
[00:54:01] I want to get the server this way in here.
[00:54:05] Okay?
[00:54:05] Um...
[00:54:08] Let's...
[00:54:09] This one here is
[00:54:12] In black.
[00:54:14] MVVM
[00:54:17] I don't even know how to...
[00:54:18] make text bigger in Excalibur.
[00:54:20] I've been using this for like a year now and still
[00:54:24] not master...
[00:54:25] Okay, let's...
[00:54:28] Let's do this. Okay.
[00:54:30] So what did the component model do?
[00:54:31] Well...
[00:54:33] It can collapse this.  It was just like .
[00:54:39] And
[00:54:41] That has some...
[00:54:42] some coolness here
[00:54:44] because
[00:54:47] Now these
[00:54:52] sit on top of each other
[00:54:53] And you're like, okay, cool.  Sitting on top of each other.  Well, I mean, that's a bit of a mess.  So it didn't collapse it like that.  What it actually collapsed it like was...
[00:55:02] More like...
[00:55:04] More like this.
[00:55:07] I'm going to just have to delete all the arrows.
[00:55:11] Because I don't feel like working through all this.  It made the decision.  I told you earlier we couldn't make the decision here  between whether the view model should be more mapped over the model  or mapped over the view.  And well, for a lot of you, you might be like, what's the big deal?  Well, the problem is...
[00:55:25] you want your code to be dry and reusable.  So there's this huge temptation there.  Like, I'm always just mapping over the same fields, right,  to get that data.  And especially in our reactive example,  we're making proxies, we're making...
[00:55:37] actual, you know, things like you pretend this part is our model or something and this part is like our
[00:55:43] reactive data piece, it's kind of tedious to go through
[00:55:48] And...
[00:55:49] And like...
[00:55:50] map it all again, you're like, same code. Why can't I just
[00:55:53] put them together. The problem is,
[00:55:55] This is a mistake.
[00:55:56] If you bind these too closely,
[00:55:59] you end up in a zone where
[00:56:01] You have a bunch of extra fields on your view model
[00:56:04] that apply to certain view pieces and they're not shared, like a selected state.
[00:56:09] You're kind of back to that old MVC model and not realizing it.
[00:56:14] So people who use this pattern kind of had two types of view models.  They had like model view models and view view models.
[00:56:21] It worked.
[00:56:22] But React was like, screw this.
[00:56:26] Right? It was just like, no.
[00:56:28] No, not happening.
[00:56:30] these two
[00:56:31] Go together.
[00:56:33] These two.
[00:56:34] Go together.
[00:56:36] Why are we separating these things?
[00:56:38] These might be different technologies, but these things do go together.  And these things go together.  And, I mean, sorry you guys get deleted.
[00:56:46] Now,
[00:56:48] in our new happy home
[00:56:50] Um,
[00:56:51] We have
[00:56:58] components.
[00:57:03] All right. Welcome to components.
[00:57:06] This is great, 'cause now you've sliced stuff
[00:57:10] Um,
[00:57:11] you've sliced stuff like a different way, right? And these pieces are definitely more addressable
[00:57:18] than
[00:57:19] Um...
[00:57:20] whatever giant trees these came in because if you've never worked in a codebase like this, like everything became
[00:57:27] folders of
[00:57:28] Like you could, you had two different, like there's a whole question of how you actually organize your code folders.  Because you'd be like, you might have like a view model folder.
[00:57:37] and a view folder and then have two completely separate trees of files, which was really hard because you're like, OK, where does this?
[00:57:43] user data and the views way over here. Okay. Sometimes we actually co-located our folders. Like we're already
[00:57:50] getting here
[00:57:51] But
[00:57:53] you were kind of like in folder land,  you know, like where you had...
[00:57:59] like view model dot JS,
[00:58:02] view.jade
[00:58:03] It's like naming a folder convention where you pick
[00:58:06] like some generic name,  like,
[00:58:08] index or template or style and you'd make three files in the same folder.
[00:58:13] Um,
[00:58:14] You know, actually, it's kind of like SvelteKit's new routing.
[00:58:18] or the Next.js new routing where you have page layout error,
[00:58:25] that's basically...
[00:58:28] Um...
[00:58:30] what we were doing here.  And this was just like, screw this.  We're gonna put this together as the same technology.  We're not gonna worry about that.
[00:58:38] I mean, so far you're all like, "Wasn't this stream called Components or Pure Overhead? What's going on here?" Okay, well, we're getting there. I told you this would be a long journey. Let me drink here.
[00:58:51] *sad music*
[00:58:52] All right, so...
[00:58:55] This is all fine.  And...
[00:58:58] The reason I wanted to do this illustration at the beginning here
[00:59:01] was because
[00:59:03] The problem with this model is, it's not a problem, but the first challenge you face is this.
[00:59:10] When you add a new address to a user in this model,
[00:59:13] in this old view model.
[00:59:16] you do change like we talked about. Like this is still kind of like a global thing. Maybe you ran it once to set it up like we showed. But then you go, okay, this user changed, they got a new address, you add it here.
[00:59:26] the data changes, and then the view checks and goes, "Oh, user, your data changed."
[00:59:31] We need to add
[00:59:32] this new address here.
[00:59:34] And at that point, it's clearly
[00:59:37] an ad operation. Like it's clearly
[00:59:40] No, not that.
[00:59:41] - It's all right.
[00:59:42] It's clearly an ad operation.  It's clearly...
[00:59:49] Like, let's create a new one of these and wire it up.
[00:59:53] - Thank you.
[00:59:54] *sigh*
[00:59:56] This is a little bit...
[00:59:58] more interesting...
[01:00:00] when you combine it together.
[01:00:02] Because...
[01:00:04] you're
[01:00:04] There's no, we've kind of killed the separation between create and update.
[01:00:10] by
[01:00:11] Like,
[01:00:12] There's probably ways to get it back, but generally speaking, when we add that new address,
[01:00:17] Sorry.
[01:00:20] When we add that new address,
[01:00:22] We're going to...
[01:00:23] basically make a whole 'nother one of these.
[01:00:26] And
[01:00:28] Thank you.
[01:00:28] the creation and update logic is kind of
[01:00:32] locked together and we don't want to recreate stuff every time we
[01:00:36] do this for something new it's fine but when we update something we don't want to recreate it and this
[01:00:41] this is sort of the challenge here because this button is still a real button if we tried to pull
[01:00:46] the button...
[01:00:47] in to our setState function, it would be really bad.
[01:00:50] like recreating the button every time. Don't want to do that. So,
[01:00:54] That's why we got away from this. This first version, the dirty checking version, whatever you want to call it, had a
[01:01:00] previous state.
[01:01:01] So essentially it would check into state.
[01:01:04] Whereas something like React...
[01:01:07] I'm not going to change the code here because it gets a lot complicated.  I'm not going to actually make a VDOM here.
[01:01:11] But...
[01:01:12] Something like React, what it will do is...
[01:01:15] When you call your component function,
[01:01:20] And if you've never seen this, do check this out.  There's Hyperscript...
[01:01:24] Project still exists, I believe,
[01:01:27] And
[01:01:30] It's basically the foundation of our VDOM stuff.  Essentially, you can describe elements
[01:01:36] as function calls and you could you know if you pass in a function as the first argument it's the
[01:01:42] This is what React and Preact and all the VDOM libraries are
[01:01:45] built off traditionally.
[01:01:47] This is a function call, it doesn't matter. You return an object essentially, instead of it being the state,
[01:01:55] that you're
[01:01:55] Getting here you end up with an object that represents the Dom so I
[01:02:00] We can pull button in if instead of calling document create element, we
[01:02:05] we call like
[01:02:07] V DOM create element.
[01:02:11] Now...
[01:02:14] Now we can do this. I mean, our example is not going to work right now because I didn't implement it, but now we can pull it in.
[01:02:19] to our update function. Again, these simple examples are limited because I'm still treating  this all as like a single set state. What we actually have to do is decouple the set
[01:02:30] from the read,
[01:02:31] which
[01:02:33] is more complicated than I'm going to be able to do with a simple demo.
[01:02:36] My point is...
[01:02:38] For the simplistic sake, you can see that if we don't take the cost of doing the DOM operations here,
[01:02:45] And instead of this being now the button that gets its text sent,
[01:02:48] isn't actually a real button. It's just a JavaScript object.
[01:02:51] Right?
[01:02:52] If we do this,
[01:02:54] and
[01:02:55] we return
[01:02:58] RV DOM.
[01:02:59] you know,
[01:03:00] You know, like so like you can picture each cycle, it's like a new V DOM and we return it. We now have we can we can basically do the work once to update things and we might not even actually
[01:03:13] bother with this check anymore because we don't really care.
[01:03:16] we might just kind of go, "Oh, let's just create the thing."
[01:03:20] And then,
[01:03:21] down here
[01:03:22] will have a second function
[01:03:23] called patch
[01:03:25] which will take the old VDOM
[01:03:29] or take the new VDOM, new VDOM,
[01:03:32] Take the old VDOM,
[01:03:34] And, uh...
[01:03:36] Mm-hmm.
[01:03:37] and actual like mount element or whatever.  Like I'm being overly simplistic here.  But my point is now in here we can go, oh,
[01:03:48] Does new VDOM
[01:03:51] Dot
[01:03:53] But in...
[01:03:55] Dot
[01:03:57] text
[01:03:58] content.
[01:04:02] equal
[01:04:04] Old VDOM, right?
[01:04:11] equal
[01:04:13] Sorry, if.
[01:04:14] equals old VDOM
[01:04:17] And only then,
[01:04:20] do we, you know, from somewhere from our actual real DOM elements, like I'm assuming we've walked through here somewhere,
[01:04:27] like,
[01:04:28] I'm oversimplifying this.
[01:04:30] But only then do we actually set the new text content.  I hope that makes sense.
[01:04:36] In a VDOM library, we've actually separated this into two passes. A first pass where we
[01:04:42] we actually run through all our state updates to generate this virtual representation of the DOM.
[01:04:47] And then a second pass where we actually compare the old and new versions of that representation to actually do the real DOM updates.
[01:04:58] Okay.  Um...
[01:05:00] But by combining this all together now,
[01:05:03] We've escaped.
[01:05:04] our problem. We've suddenly opened up this world
[01:05:07] of
[01:05:08] components.
[01:05:09] Because now...
[01:05:11] we can co-locate all this stuff and just run it and don't worry because an update
[01:05:16] and create are basically the same operation, especially in here.  In here, we don't care.
[01:05:21] Here, we'll have to do like, oh, does that DOM node exist?  It's going to have to do a little bit of work in here.  But for our state updates, it's just like, just give me the next thing.
[01:05:32] But
[01:05:33] So that's the React path, right? But here's another path here.
[01:05:37] Let's talk the reactivity path.
[01:05:41] What...
[01:05:41] And what if...
[01:05:45] Like,
[01:05:45] There's another way to do this too, right?
[01:05:48] more granularly. I mean, the easiest way for me to do this, although this is kind of like a bit of a cop out,
[01:05:55] is...
[01:05:57] Um...
[01:06:02] is essentially...
[01:06:03] Replace our state now with a const state.
[01:06:08] state, set state.
[01:06:10] Whatever, equals create store
[01:06:13] This is just a proxy.
[01:06:15] count
[01:06:16] 0.
[01:06:17] Right. You can basically do this.
[01:06:20] And then...
[01:06:21] Keep our button, sure.
[01:06:22] And then essentially...
[01:06:27] create effect
[01:06:32] And we'll import that from solid.
[01:06:35] Create effect.
[01:06:40] And essentially,
[01:06:42] Um...
[01:06:44] do something along the lines of, I mean...
[01:06:47] I wanted to show you all how directly this maps. The previous state isn't
[01:06:53] I think I can just copy this straight in.
[01:07:00] Yeah.
[01:07:03] Do I need... I don't even think I need to...
[01:07:06] Sork
[01:07:09] It's like, what am I not doing right?  Create a button.
[01:07:12] Oh, no, this doesn't work.
[01:07:13] What do I do? Set.
[01:07:15] state
[01:07:17] um, count
[01:07:19] equals state
[01:07:21] dot count
[01:07:24] plus one.
[01:07:27] Bang.
[01:07:28] Right.
[01:07:29] um... so
[01:07:31] I'm just very quickly showing the original update function
[01:07:35] can go both ways. It can map
[01:07:38] to
[01:07:39] this systematic way of
[01:07:41] of handling things like a VDOM does.
[01:07:45] where you're like...
[01:07:46] attaching everything, creating the virtual representation, and then diffing it,
[01:07:50] or
[01:07:51] it can
[01:07:52] basically map
[01:07:53] directly to an effect.
[01:07:55] like a reactive effect.
[01:07:58] Yes.
[01:08:00] I'm not that ambitious, but you're right, I am trying to show how all
[01:08:07] Every JavaScript framework works.
[01:08:09] I don't think I have time to do that in one session, but...
[01:08:13] you know
[01:08:14] I'm trying my best.
[01:08:15] Oh.
[01:08:17] So...
[01:08:20] Hopefully this still makes sense. My biggest concern with the stream is that I'm going to lose people as I'm going. I've tried to do it in parallel in stages.
[01:08:29] But...
[01:08:31] I'm going to put it in the middle.
[01:08:33] So obviously my VDOM version is broken because I wasn't going to pull in a real library to do it. I did it in solid really easily because it was easy for me to display it because I'm in solid playground. But it doesn't mean solid. I could have pulled in pre-act signals and done the exact same thing.
[01:08:50] um,
[01:08:52] You don't.
[01:08:52] Like, as you know, all this means is
[01:08:56] You can already see the difference of philosophy here, right?
[01:08:59] like the work that is the baseline of what has to happen for this two-step process versus like
[01:09:06] the work here, which
[01:09:08] Essentially, it's just like call the update.
[01:09:10] call the update function.
[01:09:12] whenever state.count changes. That's what's happening here.
[01:09:24] Okay, so...
[01:09:26] Awesome.
[01:09:26] All right.
[01:09:28] I've shown multiple ways of doing this.
[01:09:32] What this actually comes down to, even though I didn't upgrade the original version is,
[01:09:37] To this day,
[01:09:39] there are basically
[01:09:42] three
[01:09:43] different approaches to rendering.
[01:09:45] Forgetting about Svelte's compiler trick or whatever.
[01:09:48] Those three approaches are what I call...
[01:09:52] one pass diff, which is like what we started with here, which is kind of like this, what I call this felt version here. But it's also the way that tag template literals work. Like if you use the library lit,
[01:10:03] it works this way too.  They can use components to hide  like the update function or compilers  or different ways like reactivity to hide it.  But essentially the premise is that
[01:10:13] um,
[01:10:14] You
[01:10:16] you keep the previous state,
[01:10:19] as...
[01:10:20] some kind of state and then you do this kind of diff of it and it still kind of runs in this kind of top-down way.
[01:10:27] Then there's two paths, which is the way VDOMs work, and
[01:10:32] Two paths basically creates the
[01:10:36] It's funny, I put the previous state here, but the previous state is not necessary...
[01:10:40] I mean, I guess...
[01:10:43] It is here because you want to kind of feed it through the system again.
[01:10:46] But
[01:10:47] It has two passages: you create your pure function where you transform the old VDOM to the new VDOM and then you do all your side effects in this patch that happens later.
[01:11:02] Like, this is really an in-out kind of function.  You, I mean, there...
[01:11:06] It's secretly, even though I'm calling setState, it's secretly a function of VDOM and newState.
[01:11:11] Like...
[01:11:12] It is a kind of a pure function that returns it. They shouldn't have
[01:11:17] side effects.
[01:11:18] Those all happen here.
[01:11:20] And then there's the reactor approach, which again, look, there is a previous state here,  but it's scoped specifically to each granular event or effect.
[01:11:31] so
[01:11:32] There's actually a lot of similarities between this and the dirty checking version.  The biggest difference between dirty checking and the reactive version is the granularity.
[01:11:42] All right.
[01:11:44] So...
[01:11:46] This is my technological introduction. I want to talk a bit now about
[01:11:53] how the impact of these decisions
[01:11:56] Okay, hopefully everyone's still with me.
[01:12:02] Yes, yes, it is also a function of previous state.
[01:12:09] Thank you.
[01:12:11] Okay, so I actually spent some time trying to understand the differences between these rendering techniques.
[01:12:19] The funniest...  The thing is...
[01:12:22] They are all...
[01:12:24] Super performant.
[01:12:25] Because at a base level...
[01:12:28] They all
[01:12:30] make sure that only the text in that button gets changed.
[01:12:34] You might be like, "Oh, well, isn't a VDOM really expensive?  If when you show me that does all this extra work,
[01:12:39] But...
[01:12:39] Like...
[01:12:40] I did this article a while ago. This is like, when was this? 2019? Okay, May 2019. So like over three years ago. I was like, okay, what if I could take Lit? And...
[01:12:51] I was like,
[01:12:52] I wanted to see
[01:12:53] if I could compare based on syntaxes or different writing styles,
[01:12:59] approaches to kind of figure out what was the best way and fast ways to render the dom and if you look at this um
[01:13:05] There's incredible performance.
[01:13:07] coming in
[01:13:09] like using Hyperscript with solid for example is not a good idea because
[01:13:13] It does a bunch of extra creation solid
[01:13:16] Solo doesn't like that because...
[01:13:18] a reactive library,
[01:13:19] You can kind of already see this.  Reactive library takes its hits
[01:13:23] every time it needs to do another one of these or another one of these.
[01:13:27] So...
[01:13:28] It takes a different approach.  You don't want to like recreate everything every time.
[01:13:32] because these are what's expensive.
[01:13:34] Whereas
[01:13:35] This
[01:13:36] The VDOM is just a plain JavaScript object.
[01:13:40] You'd think maybe something like this might be expensive, but in practice it doesn't actually end up being that
[01:13:45] Expensive so this kind of rerun approach works really well for virtual DOM libraries and
[01:13:51] Um,
[01:13:51] And that's why like call it as a function works really well for hyper script and stuff and then I
[01:13:56] What else did I look at here?
[01:13:59] Did I just skip through? I looked at compilers too.
[01:14:02] tag template materials. You know what, this article probably isn't even the best for this,  but what I wanted to show is that ultimately after doing all
[01:14:10] the work here, putting them all in a single chart,
[01:14:17] There's a lot of noise here, but what I want to show is, SolidSignals, which was a reactive  library, was really fast. DOMC is a dirty checking library. It's also basically the  same speed. And at the time, the fastest VDOM library, EV, was here too. All of these approaches,  if you've ever seen JS Framework Benchmark,
[01:14:36] Um...
[01:14:37] Givers.
[01:14:38] seen this thing, there's like a giant table and it has all the frameworks.
[01:14:43] If you want to start getting to like over here, where's, where's like,
[01:14:49] Where is React?
[01:14:50] Yeah.
[01:14:52] React, react.
[01:14:53] React, react.
[01:14:55] It's got to be way back here somewhere.  Okay, perfect.  Like...
[01:14:58] This like
[01:14:59] A lot of the standard, like React's like 1.8 here.
[01:15:03] This is not, the technology here is not the limiting factor. Like, you can have a VDOM library that's basically 10% slower than vanilla. So I want to just highlight
[01:15:14] the raw performance numbers,
[01:15:17] are
[01:15:18] Not...
[01:15:19] going to be the differentiator between these different passes.
[01:15:22] What was more interesting to me, because I did a lot of experimenting here, was not how fast these...
[01:15:28] individual techniques were because yeah, VDOM is plenty fast.
[01:15:32] What's more interesting to me...
[01:15:35] was this, which is the cost of UI components.
[01:15:40] Because...
[01:15:41] Essentially,
[01:15:42] Thank you.
[01:15:43] I was like, what happens if I take this stupid example and make like every cell into a component and go crazy on it? And one of the
[01:15:50] earliest tests I did with it was like, okay, well, let's compare vanilla
[01:15:54] version to something written with web components the way that I'd write React. Not a crazy  amount of components, just the way you'd write like a typical app where you'd like maybe  make... If you've never seen the JS framework benchmark, it's just a table.
[01:16:07] Um,
[01:16:08] Who knows? I might even have it open right now.  I use this thing all the time.
[01:16:13] Let's just...
[01:16:15] Yeah, I don't have it started. Let me give me a second. Let me just show you.
[01:16:20] just frame report  where
[01:16:23] - Sure.
[01:16:28] -
[01:16:29] Okay, let's just...
[01:16:31] Start this npm start.
[01:16:33] Okay, poor Davey.
[01:16:35] Well, 8080, beautiful.
[01:16:37] It's just...  It's just...  This benchmark...
[01:16:39] It just creates like a thousand rows.  You can...
[01:16:42] highlight stuff in the rows,
[01:16:43] You can update every 10th row.
[01:16:46] You can swap some rows. See that one that's highlighting is being swapped.
[01:16:50] And...
[01:16:51] You can...
[01:16:53] remove a row or two,
[01:16:55] You can add a thousand rows on the end. If you go all the way down here, you'll see that there's like
[01:17:01] more rows, we're in 1200 now, and obviously you can clear them. These are
[01:17:07] These are just very basic crud style crud.
[01:17:11] Domm operations, okay? So
[01:17:13] this test is not real world it's just showing you how
[01:17:18] to handle lists and lists are important and I'm going to get to that in a second. But I wanted to say like
[01:17:24] Initially, you might just have a one component per row, a component for the app, maybe some buttons, simple implementation.  But I was like, what happens if I just made every cell in the table a component?  Like, what if I...
[01:17:33] tried to make more components here.  As I said, you can see immediately that web components  have overhead compared to just using straight vanilla DOM.  Like just, there's just a cost to it.  And I didn't really test web components.  I go back later, two years later,  and I actually tested web components and show that
[01:17:49] Ironically, front-end frameworks actually scale better than web components.
[01:17:53] But that's kind of aside from what we're talking about today.
[01:17:59] What I wanted to do was take
[01:18:01] these different rendering techniques like I talked about, VDOM,
[01:18:05] lit, which is like the top-down one pass renderer,
[01:18:09] VDOM, which is a two pass render, Solid, which is a reactive render, and Svelte, which is like a compiled one pass render, and see how components
[01:18:20] see how scaling the components affected things. And
[01:18:24] Here's the headline.
[01:18:27] I could throw as many components as I wanted at a VDOM library, pretty much,
[01:18:32] and it just it would barely touch look one 102 104 you can't even tell
[01:18:38] basically, whether I go between a thousand and
[01:18:40] 5,000 or I guess it's
[01:18:43] Like the 10,000 row one is the difference between like 10,000 and 50,000 components.
[01:18:47] It's like...
[01:18:47] 10 milliseconds difference.
[01:18:51] uh,
[01:18:53] And I don't know if React scales that well,
[01:18:57] But
[01:18:59] But I just wanted to actually point out that conceptually VDOM component scaling is not actually a consideration.  They actually...
[01:19:07] scale pretty well.
[01:19:09] Memory, um...
[01:19:12] goes up mildly by the end. I understand this is like an insane amount of components, but it's actually pretty respectable.
[01:19:19] I...
[01:19:20] The one pass renderers
[01:19:22] actually
[01:19:24] had
[01:19:25] some big
[01:19:27] performance
[01:19:28] issues
[01:19:29] as I scaled
[01:19:31] up the number of components. This is lit,
[01:19:33] And if I and yeah, memory started getting worse.
[01:19:37] And
[01:19:37] Let me skip solid.
[01:19:39] and...
[01:19:41] uh this is felt
[01:19:43] Not as felt as lit was, but there's this kind of characteristics.  Felt actually had crazy memory degradation, even...
[01:19:53] More so.
[01:19:54] Um,
[01:19:55] than lit. And what these libraries had in common was, see, React has components and the components, as we saw, are basically just objects. We just generate all these objects.
[01:20:06] But the one pass renderers
[01:20:10] there
[01:20:11] Um...
[01:20:12] components.
[01:20:14] were...
[01:20:15] I think it's a good thing.
[01:20:18] Like,
[01:20:18] they contained the information they needed for like their reactivity.  Like it was key.  The number of components actually changed the,
[01:20:27] the amount of overhead they had because a reactive system, like you'll, you'll like create an effect or you'll, you'll, you'll
[01:20:34] You'll update stuff.
[01:20:36] at a certain granularity.
[01:20:38] that's in scope. So they would like, like Svelte is a perfect example of this. Each component can re-render independently of the tree. So they have code to do that. It's like they wrap each component in effect.
[01:20:49] Right?
[01:20:51] And that's...
[01:20:52] And that's why they ended up scaling the way they did, because essentially,
[01:20:58] they would have to, like, the more components you had, the more overhead you'd have.
[01:21:02] Whereas...
[01:21:03] You know, React...
[01:21:05] the components are just like more of the same.  Like ultimately we were producing the same amount of DOM elements.  Like it was just like an extra object.  There's like a bit of a memory hit,  but it was,  it was,  it was almost nothing.
[01:21:17] And you guys are going, OK, what about solid?
[01:21:21] Well, Solid didn't quite scale as good as the VDOM.
[01:21:24] You can see that the last one was 0.5 instead of 0.4.
[01:21:28] But the memory...
[01:21:31] was flat.
[01:21:33] Basically.
[01:21:33] There was like a little...
[01:21:36] up here, a little up here, but essentially the memory was completely unchanged whether I had
[01:21:41] you know
[01:21:42] 10,000 components or 50,000 components.
[01:21:46] And you might be like, what?  Well, it's because if you think about it, a reactive system  scales on interactivity, not on the number of components  or DOM nodes.
[01:21:55] The number of create effects doesn't change given the number of components that I have.
[01:22:01] So...
[01:22:03] In this case,
[01:22:06] we both scaled really well because...
[01:22:08] React's components are...
[01:22:10] or it
[01:22:11] VDOM components are basically lightweight and they're not worth anything, and Solid doesn't really have components.
[01:22:19] But the one pass renderers that did conceptually have components really took a hit as we scaled them.
[01:22:26] And this is where it started for me because
[01:22:29] At this point, I was a web component guy. The reason Solid didn't have components was because I was like, oh yeah, you'll just use those web components. And I was doing this at Studying, I'm like, crap, web components don't scale.
[01:22:40] I mean, they scale fine.
[01:22:42] But they don't-- this is benchmark--
[01:22:45] like armchair benchmarking. Like who puts 50,000 components on a page? I don't know. But like,
[01:22:52] They were clearly a visible overhead.
[01:22:56] And I was like...
[01:22:57] React's got this right.
[01:22:59] And
[01:23:00] I'm glad I did this test because Solid actually...
[01:23:03] I guess has it right if I like this is the moment when I decided to to embrace and like no component and
[01:23:09] or the component overhead thing.  Because I basically said, like, I'm going to make a bold statement here for the non-virtual DOM crowd.  I think components should vanish in the same way as frameworks.  If the new world is compilers, we can do better.
[01:23:20] We can optimize along bundle chunk lines instead of ES modules.  If components are throw away, think about how much overhead we could reduce by inlining them in the right scenarios.  If components aren't necessary mechanisms for change like in VDOM libraries,
[01:23:31] Um,
[01:23:32] You know...
[01:23:34] What is to stop...
[01:23:36] the level two implementation
[01:23:39] and above from being compiled into the level zero equivalent. Why should there even be levels here?
[01:23:46] Like, why should...  Because this chart shows like...
[01:23:49] Everything is like the normal way, then add some components and add some more components.  That's how the scaling works.  And when I went back...
[01:23:57] to look at the real cost of components.
[01:24:00] much later.
[01:24:02] when I looked at the VDOM one. Sorry, give me two seconds here.
[01:24:06] Kind of show what I'm talking about. When I went back to look at the scale here,
[01:24:09] What's it? Cost?
[01:24:12] of
[01:24:13] cost.
[01:24:15] When I went back to look at the scale here, I didn't give Inferno a free lunch.
[01:24:20] Instead of
[01:24:24] making level zero their optimal thing, I actually made put the whole app in one component.
[01:24:31] And what ended up happening is that the VDOM was the slowest.
[01:24:34] when I put the whole app in one component.
[01:24:37] And you might be thinking, okay, why is that?  It's funny, though.  Once we go to the next stage...
[01:24:46] and I add more components, the VDOM suddenly jumps ahead of the single pass ones like Svelte and Lit.
[01:24:53] And...
[01:24:54] ultimately
[01:24:55] by the end of this whole process,
[01:24:58] when I get to the last version of the table,
[01:25:00] Solids faster than web components and Inferno is basically right up there with web components and these two have kind of dropped off the end because the component scale now again, this is a stupid test because I'm putting a stupid amount of components on the page, but I want to kind of emphasize that
[01:25:16] that this is just
[01:25:19] Talking about creation and update overhead.
[01:25:22] There's other places...
[01:25:24] Where...
[01:25:25] the cost of components is a real thing.
[01:25:30] - Thank you.
[01:25:30] Because...
[01:25:32] Sure.
[01:25:33] Uh...
[01:25:35] But before...
[01:25:36] Yeah, let's go there for two seconds because the place that comes to mind is
[01:25:43] Sorry, not that I recall.
[01:25:44] That's the namesake.  I mean, we can go here, but I want to go here first.
[01:25:49] in here.
[01:25:52] Have you ever seen this article, Hydration is Pure Overhead, from Mishiko Hevery, creator of Quick?
[01:25:59] We talk about a lot of the cool stuff Quick does, and he codifies what a framework does in terms of talking about different kind of state management.
[01:26:06] and
[01:26:07] talking about what needs to run with hydration.
[01:26:11] But...
[01:26:13] The key part about this
[01:26:14] is that this resumable place, like forget about lazy loading, is about being able to not run the component again on hydration.  And if you looked, we've sort of priced ourselves into running the component again. Remember the second that we went to that model where we called setState,
[01:26:31] at the beginning when we loaded, we're kind of in that model. If you do look, some of these other models
[01:26:37] could just skip
[01:26:40] this
[01:26:41] If...
[01:26:42] if they're not hydrating.  But the problem is our hierarchies are trees.  We've gone to a component model
[01:26:48] like this. So to get from
[01:26:51] A to B to C, we actually need to run this whole tree.
[01:26:57] And they're all these are tied together anymore. We can't
[01:27:01] Back here, we could go,
[01:27:02] Oh, maybe we don't
[01:27:04] need the... Like, we could just...
[01:27:07] run part of the tree and not the other part of the tree.
[01:27:10] But now, like, these are together.
[01:27:13] There's we can't separate them very easily without a compiler.
[01:27:18] And that's...
[01:27:20] That's the point he's making.  And if you look at how quick works or...
[01:27:25] I wrote an article on this a little while ago, but
[01:27:28] What I showed...
[01:27:30] was like a normal component, our counter, like we've been using this whole time, right?
[01:27:35] And I asked the question, how can we start this component without running it once because
[01:27:40] Count.
[01:27:41] is tied to this instance of counter. And if we want to wake it up on click,
[01:27:46] we have to call setCount
[01:27:48] and use count, and if that count hasn't been instantiated, how do we do it?  And I showed an example where you hoist everything and break it apart again.
[01:27:56] Presumably you do this with a compiler, but my point is
[01:28:00] The granularity of change has to be sub component.  If you want to solve this problem, you need to actually not
[01:28:07] rely on the component update lifecycle. And I'm not going to get all into resumability in the stream.
[01:28:13] I've talked about it before, but I want to point out that this is another place
[01:28:17] where
[01:28:18] Um,
[01:28:19] the cost of components is actually a real one.
[01:28:22] So I've talked update performance, I talked about hydration performance.
[01:28:27] Um...
[01:28:31] Someone's asking about this. Yeah, Solid actually fakes components during dev to make it easier for dev tools.
[01:28:38] don't get me right, wrong. I want to author components and I'm actually going to pull up
[01:28:44] my the quintessential article I guess for this
[01:28:48] for this stream, which is the namesake, components are pure overhead.  I don't know as many people read this as my original real cost of UI components article,
[01:28:58] the...
[01:28:59] The thing is,
[01:29:02] It was based on Rich Harris's virtual DOM as pure overhead article. Right.  And I want to talk about this because
[01:29:07] He showed this example, and this is getting back to why
[01:29:11] Putting...
[01:29:12] Inferno in one component is slower than putting in multiple components.
[01:29:15] This is the whole change management problem. He gave this example
[01:29:20] about
[01:29:22] where is it somewhere down here where you basically have a list of
[01:29:27] some state
[01:29:28] for whether the item's
[01:29:30] selected.
[01:29:31] And he was suggesting...
[01:29:33] that every time selection state runs, they end up like rerunning the whole list again.
[01:29:40] Because this is just a function. I mean, it's easier to see this with hooks, so technically this has always been the case with react.
[01:29:45] like we're showing.
[01:29:49] Even if you update something,
[01:29:51] that's unrelated to the list. This one is in the list, but even if you update something unrelated to the real list,
[01:29:56] In this component, the component will rerun. The setter is
[01:30:00] It's like tied to the component.
[01:30:01] And funny enough,
[01:30:02] That is true of Svelte as well.  So I found this like a really interesting article for Rich to point out because under the hood Svelte is actually the same.  Svelte splits the update and create code.
[01:30:14] in the compiler.
[01:30:15] but they still have this rerun the component model and uh sorry not this one uh
[01:30:23] Did I...
[01:30:26] Yeah, OK.
[01:30:28] - Yeah.
[01:30:31] What I suggested here is that any real VDOM would separate...
[01:30:37] Um,
[01:30:39] the rendering. You would split
[01:30:41] this component into multiple components so that you could isolate the updates.
[01:30:46] That's basically what you do. You can wrap it in a memo or use memo and suddenly you don't have to redo a bunch of the extra work. You just have to tell it when to memoize, which is a challenge in its own right.
[01:30:57] What I was trying to point out in this article here
[01:31:00] is that...
[01:31:01] reactive libraries are pure overhead too.
[01:31:04] in that
[01:31:06] They...
[01:31:08] they don't scale as well on components because the components are the thing
[01:31:11] that
[01:31:12] carries the-- if they're component-based reactive library,  are the thing that carry the weight.
[01:31:18] They're the effects. They're the observer.
[01:31:21] And
[01:31:22] Um,
[01:31:23] This is a difficult challenge to balance.
[01:31:26] because
[01:31:30] You, you, you, if basically if you have, and you see this often with,  I think single file components actually work really well for Svelte and view in  this case, because you, you,
[01:31:39] tend to build larger components with those libraries.
[01:31:46] Right? Like you just put more in your component files and it works nice.  It's a really nice layout and you just set some state at the top and then you build it.  Whereas React, you're much more likely to break your component to like smaller pieces.
[01:31:59] You're like, "Oh, this is a function, this is a function." You just kind of compose it that way. And in React, you get benefits. The more components you make, the faster, the more localized the change can be made.
[01:32:11] It's a weird contrast because
[01:32:13] It puts VDOM
[01:32:15] And
[01:32:16] reactivity naturally at odds like they were right from the beginning right
[01:32:21] doing, rerunning everything, right?  Trying to figure out a way to combine the create stuff  in here without a cost.
[01:32:27] And...
[01:32:28] here
[01:32:29] This is leveraging the fact that it only runs once.
[01:32:37] So yes, reactive libraries do not need to hand-optimize rerender.
[01:32:41] Because they're already...
[01:32:43] memoized, but I'd argue they're over memoized.
[01:32:46] Some people did a study where they're like, oh, actually using use memo here isn't
[01:32:51] Worth it.
[01:32:55] Right. Like the like I forget the article.  It came up a while ago.  Someone was like, yeah, don't overuse use memo because that has a cost to it.
[01:33:02] If you memorize everything and it's not that expensive to calculate, you're actually making your app slower.
[01:33:07] And in a sense, most reactive libraries generally memorize everything.
[01:33:12] you're almost immediately taking on that cost. Sure, the updates are fast, but the creation gets hit.
[01:33:18] And there's ways to mitigate that. Solid actually
[01:33:23] key secret here is while it tries its best,
[01:33:27] to keep things relatively granular  so we don't take component costs.  When we see stuff that's around the same area  that needs updating,  we actually group them back together.  I don't know if anyone's ever seen this.  If they look at the source code,  we actually group effect updates  because we don't want to create like 10 effects.  It's actually like whether it's 10 effects
[01:33:43] Whether you update 10 things independently or run it once and do a shallow diff,  probably worth it.  The problem with...
[01:33:50] the
[01:33:51] grouping everything at a component level is the problem that we were showing
[01:33:57] here, like where you're like, oh, well, you update the component.  Now you have to update the list.
[01:34:02] you know, or you...
[01:34:04] you have to do list reconciliation.  In Solid, we're
[01:34:07] We separate
[01:34:09] things along children boundaries.
[01:34:12] essentially, where insertions happen, but we group element updates. So we kind of, the heuristic lets us split in the way that's logical for the structure of the code, rather than the way the end user splits it into components.
[01:34:27] So it's not just pure fine grain. Someone asked me a long time ago, like, why is salt so fast? It's because it updates everything separately? No, hell no, that's actually bad.
[01:34:34] Like you have to do this in a smart way.  If you just make everything fine grain, sure, you get these really fast updates, but you've actually caused the rest of your app to slow down.
[01:34:47] You got to be there's a balance to be struck here.
[01:34:56] Yeah, exactly
[01:34:59] Right. So this is this is kind of like where where I kind of gotten here because I decided that really components were the enemy.  And I mean, that's such a weird conclusion to come from when we live in this world where everything's written in components.  I'm not saying don't write with components. I'm just saying that the components aren't.
[01:35:22] the components aren't, um,
[01:35:25] how should I put it, like, they aren't necessarily the right boundaries. They should be for you. And one of the coolest things I love from using Vue or Svelte is you didn't really think about the component boundaries from an update structure.
[01:35:35] standpoint you just like I'm just making some code and you weren't worried about like with react
[01:35:40] not making or VDOM not making the right component boundaries actually is a real performance hit.
[01:35:46] You know, like real in the sense that I talk about real. I'm sure you can just not bother, but you will re-render too much.
[01:35:52] Whereas, you know, like there's whole articles on it.  Like one of my favorite ones from Dan Abramoff.  What was it?  When...
[01:35:59] to memo
[01:36:02] Can I find it?
[01:36:04] This is the actually use React memo wisely thing I was talking about, but maybe I just go to overreacted.io.
[01:36:10] Um,
[01:36:10] Before you memo, there it is.
[01:36:12] This whole article is talking about how you can avoid using memos, but using the structure of your code to
[01:36:17] to basically get benefits.
[01:36:21] Right.
[01:36:22] like talking about how you can move state down, lift content up these tricks.
[01:36:28] are better optimization than any kind of construct that you can build, like use memo or whatever you can use in the framework, because he actually just
[01:36:36] alleviate the problem without having to
[01:36:38] rely on
[01:36:40] like
[01:36:41] these kind of
[01:36:43] special hooks or actual memoization. You're actually using the structure to memoize for you.
[01:36:53] So, OK, a lot of stuff to unpack here, but this is this is this is just what I where I got into and really informed the design decision of solid because
[01:37:04] Again, I probably wrote an article about this at some point.
[01:37:10] I've got lots of those.
[01:37:11] Was it like--
[01:37:13] Let's try the word fast.
[01:37:16] or maybe performant, is that a good keyword? Performant.
[01:37:23] Maybe it's on the next page.
[01:37:25] I wrote it a long time ago.
[01:37:28] Um...
[01:37:29] Thinking granular, how is solid so performant?  When I actually went through this whole thing, I was like, oh yeah, it's because reactivity, silver bullet.  And like, no, it's not reactivity.  It's because of careful.
[01:37:40] things.
[01:37:40] First of all,
[01:37:41] Compilation
[01:37:43] to actually clone the nodes on the DOM.
[01:37:47] instead of doing like hyperscript style per element creation,
[01:37:52] nice chunk of performance improvement for because this lets us compensate for the fact that our um
[01:37:58] are...
[01:38:00] you know, reactivity is more expensive than just the plain objects that you find in a VDOM.
[01:38:05] Right? So,
[01:38:07] One way we can leverage is we go, we know where stuff's going to run once,
[01:38:11] Why don't we just optimize for that? Use a compiler ahead of time to do that.
[01:38:14] So this whole cloning nodes kind of mechanism.
[01:38:19] But it's more than that. We can analyze how to group effects. We can basically figure out how to come up with an optimal thing. And this is what I was talking about, like loosening granularity.
[01:38:29] It's not just
[01:38:30] about that. One of my favorite ones that people don't realize is around computations.
[01:38:35] And what are sort of computers?
[01:38:37] we call them create memo in solid, but people have this tendency
[01:38:41] to overuse computed the same way
[01:38:43] they have the tendency to overuse memos in React.
[01:38:47] Right? So...
[01:38:48] your first
[01:38:50] temptation is
[01:38:51] to do a create memo
[01:38:54] And then
[01:38:55] Now I've calculated...
[01:38:56] full name, but like full name is not expensive to calculate.
[01:38:59] You'd be better just to put it straight in here.
[01:39:03] And this seems like a weird thing, but this was a huge design consideration for when I built Solid because I wanted to make sure
[01:39:11] that people never felt priced
[01:39:14] into
[01:39:15] adding, um,
[01:39:16] reactive wrappers where they didn't need to.
[01:39:18] Because this is like places where you get caught.  Because most of the time, people use Solid can kind of ignore Create Memo Works,  and it exists in the same way they use Memo.  They can just go, "Oh yeah, I'm just gonna wrap this in a function."
[01:39:29] and
[01:39:31] The fact that create memo is a function
[01:39:33] And
[01:39:35] and that this is also a function, and signals are a function, and everything is just a function,
[01:39:40] means that
[01:39:41] We don't need to do any special, right?
[01:39:44] Like...
[01:39:45] This is one of the reasons that I never did something like dot value in solid because people will be like, oh, how do I pass this API through? What should I do? They're like, they like how what's the easiest way way to make something a dot value?
[01:39:57] Well, I'll wrap it in and compute it.
[01:40:00] But...
[01:40:02] like a lot of APIs, like,
[01:40:04] in solid,
[01:40:05] I made it purposeful that you couldn't tell the difference between a signal, a computer,  or regular function because I didn't want people to rely
[01:40:13] on that and because if they relied on that they'd have a tendency to over wrap  and if if every functions just work
[01:40:20] then there's no tendency to make too many reactive variables. You don't need to.
[01:40:25] and
[01:40:26] I think this is a really important part for performance design
[01:40:31] for dealing with reactivity,  because you don't...
[01:40:36] Reactivity, while it's the powerhouse that lets you do the fine grain updates, it's also your biggest expense.
[01:40:44] And it's a very hard thing to balance, right?  And again, I'm getting a little preachy on solid side, but this is all going to be relevant  in a minute.
[01:40:57] Should full name be full name in the second example?
[01:41:01] Honestly, they could both be function calls. I am sort of
[01:41:05] I don't know why I did it this way. It doesn't really matter.
[01:41:08] Solid will unwrap the function.  I hate that we do this, but it will for these functions.
[01:41:14] You know, like, so you don't have to do it, but please do it. It's a better convention.
[01:41:18] Um...
[01:41:19] But yeah, these full names should be function calls.
[01:41:24] It won't do it on attributes, but it will do it on inserts.  It's a terrible inconsistency, but I need it in order to handle dynamic components.  This example is bad, you're right. I should go back and add the function calls.
[01:41:41] Yeah, sure. But I mean...
[01:41:44] Yeah.
[01:41:45] It's literally the result of creating a system where everything has to run top down over and over again.
[01:41:51] Like, like, like,
[01:41:54] Whatever mechanism you use to compare values and memoize, you still need to memoize.
[01:41:59] and you need to check those memos.  And the bigger the granularity, the more diffing you have to do.
[01:42:03] Okay.
[01:42:05] So we talked a lot about rendering here and
[01:42:09] this...
[01:42:12] And the costs and trade-offs.  But I'm going to take this...
[01:42:17] There's one more thing that I didn't talk about before we actually kind of apply our learning and thinking in practice.  Is that...
[01:42:26] less
[01:42:28] you know, like the thing the JS framework benchmark tests, like when you have a list of users or a list of to do's or whatever.
[01:42:35] This is the one place
[01:42:37] that all the frameworks actually are very, very, very, very similar.
[01:42:42] I know it's kind of weird because when you see reactivity, the first thing that comes to mind is you're like...
[01:42:46] Oh.
[01:42:48] Um...
[01:42:49] If I push to this list,
[01:42:51] then it should just push to this...
[01:42:54] dom, right? You kind of have this picture in your mind where like, like the proxy where you're like,
[01:43:00] You're like,
[01:43:03] reactive state.
[01:43:05] not react, reactive.
[01:43:07] State.
[01:43:08] And then you're like,
[01:43:09] And then you're like...
[01:43:11] Thank you.
[01:43:12] Dom.
[01:43:13] And...
[01:43:14] you're kind of picture, you picture like if you could do something, right? You could be like,
[01:43:19] You perform an action.
[01:43:20] And then the same action comes out the other side here.
[01:43:23] And then,
[01:43:24] You do another action.  Ching.
[01:43:26] It comes out the same side here and you're like, yeah, sweet. So if I unshift and then unshift and all this stuff the problem is that
[01:43:34] When you have an atom, when you have a single piece of state...
[01:43:38] and it replaces itself and it runs. Like, you're in pretty good shape with this. But,
[01:43:44] Lists
[01:43:45] The problem is you want to at some point actually batch multiple updates.
[01:43:50] Like you don't want to like do like one, then one, one, then one, one, then one.
[01:43:54] Um,
[01:43:55] You're like, okay, let's let's these things are related. They affect the view in the same area. I want to actually
[01:44:00] put those changes together.
[01:44:02] The challenge is,
[01:44:04] that
[01:44:05] For an atom, it's just an overwrite.  You can just go like, okay, I have a pending value.  I'm just going to overwrite it.  So you can picture like...
[01:44:12] You can picture a scenario where you're like, OK, I'm just going to make a new playground just to
[01:44:18] kind of say this, but you can picture like
[01:44:19] Just ignore this but you can picture you can go like set count and
[01:44:22] to 1, and then sometime later you go setCount
[01:44:25] to two,
[01:44:27] And
[01:44:27] If you batch it,
[01:44:29] it's only here that it's going to do, like, oh, count equals two.  Like, you know...
[01:44:34] that
[01:44:35] that the work is going to get done at this point with count equals two. It's never even going to see the one.
[01:44:39] But...
[01:44:41] The challenge, and this is done because you can simply just overwrite the pending value.
[01:44:46] But if you're trying to
[01:44:48] propagate fine-grained changes to, say, an array,
[01:44:52] you know,
[01:44:53] Now you're in this thing where you're like, okay, array.
[01:44:57] Push one.
[01:44:59] array dot
[01:45:01] Unshift.
[01:45:03] Something...
[01:45:05] You have to encode...
[01:45:07] all the steps.
[01:45:08] Because...
[01:45:10] The order...
[01:45:11] matters here, right? When you add something or remove something and
[01:45:15] Like,
[01:45:16] If unshift happens before push,
[01:45:19] I mean, that's not a great example, but...
[01:45:22] like insert, like you might insert at the wrong index.
[01:45:25] Like it actually matters.
[01:45:26] what the
[01:45:27] Insert.
[01:45:30] at index one
[01:45:31] some value, okay, let's pretend that was the API.  My point is the order actually matters  and you have to kind of replay them
[01:45:39] and
[01:45:40] The problem is what if this work
[01:45:43] happens
[01:45:44] on a server.
[01:45:46] like outside of your preview, you now have just an arbitrary new array
[01:45:52] that isn't
[01:45:53] Um...
[01:45:54] what you expect it to be.
[01:45:56] You don't have these distinct operations anymore. And for that reason,
[01:46:02] Every JavaScript framework,
[01:46:04] does diffing on lists. Yes, Svelte,
[01:46:06] Solid. Everybody diffs lists.
[01:46:10] Okay?
[01:46:12] And
[01:46:14] While there's people looking at ways to optimize single operations...
[01:46:20] essentially
[01:46:22] there is a reconciler
[01:46:24] to diff lifts.  And again...
[01:46:28] There are...
[01:46:30] Three ways...
[01:46:31] To diff lists.
[01:46:32] Magic number in threes, okay?
[01:46:35] The three ways to diff lists are...
[01:46:37] One.
[01:46:40] by index.
[01:46:43] 2
[01:46:44] by key.
[01:46:46] three
[01:46:48] by reference.
[01:46:51] Okay?
[01:46:52] Hopefully everyone's still with me. I know this is a very technical discussion and talk today, but I want to kind of
[01:46:59] pull all the elements together here so that we can talk about these things in the same sort of way.
[01:47:06] BuyIndex is a very
[01:47:10] naive way of doing it. I mean, it's actually very simple, right? You just check
[01:47:16] what's in the, you just assume that what's ever in that index is the,
[01:47:20] the thing, right? You can go, "Oh, okay, well,
[01:47:25] if
[01:47:26] And the effect of that,
[01:47:28] Sorry, I mean, I guess I should draw, like, a list, shouldn't I?  Like, we should...
[01:47:32] to draw like
[01:47:34] something that looks like a list.
[01:47:38] Yeah, let's do this.
[01:47:41] No...
[01:47:42] Let's make our list.
[01:47:49] make our list.
[01:47:50] Alright.
[01:47:51] Cool.
[01:47:53] I'm going to need
[01:47:56] three of these ultimately won't I? So let's
[01:48:00] Let's make our lists.
[01:48:06] All right.
[01:48:10] Alright.
[01:48:13] and
[01:48:18] So by index means, I mean, the thing that I'm not showing is I'm pretending like this is the final output, but there's like...
[01:48:25] This is so hard to show because you...
[01:48:29] There's like the previous and the next stage of it.  But like if you switch...
[01:48:33] the first two items
[01:48:36] when you do an by index change,
[01:48:39] Um,
[01:48:40] essentially so
[01:48:42] I mean...
[01:48:43] Let's play this game.
[01:48:45] Let's make more of these.
[01:48:48] Fine, I'll just stash this away.
[01:48:50] Let's pretend... yeah, you know what?
[01:48:54] I'm just going to do this across.  We're going to go A...
[01:48:58] We're going to go...
[01:48:59] Mm-hmm.
[01:49:00] B.
[01:49:02] and
[01:49:03] Let's put C in for good measure. Doesn't really matter.
[01:49:06] But...
[01:49:10] What are you doing to me?
[01:49:18] *laughs*
[01:49:19] - -
[01:49:20] uh...
[01:49:24] Skellige I was like no
[01:49:26] Your text shall go there. Okay.
[01:49:30] Thank you.
[01:49:31] If we switch A and B,
[01:49:34] What's going to happen...
[01:49:35] And this is hard to show in this, but
[01:49:41] We're just going to take...
[01:49:46] the same DOM nodes
[01:49:48] without moving them.
[01:49:52] and essentially,
[01:49:55] All right.
[01:49:58] and essentially,
[01:49:59] just override the DOM nodes. No DOM nodes actually move.
[01:50:04] when we switch this data structure.  Because if you had a user here,
[01:50:11] And
[01:50:13] And it was John Smith.
[01:50:15] And...
[01:50:16] This is, I don't know.
[01:50:18] Michael... Michael...
[01:50:20] I don't know.
[01:50:22] Whatever John Smith and Jane
[01:50:25] Doe, okay? John Smith and Jane Doe.
[01:50:28] Um.
[01:50:29] when you switch it over here,
[01:50:31] and you were displaying the names, you're just going to switch...
[01:50:34] those names on the same, like...
[01:50:37] text nodes, you're not going to recreate any DOM elements.
[01:50:39] Yeah, I was thinking about using colors.
[01:50:42] But it's like, this is...
[01:50:45] This is so granular that it's hard to actually
[01:50:49] show the difference because the text fields
[01:50:54] in here
[01:50:55] Maybe that's the best way to put it. Let's go here.
[01:50:59] essentially
[01:51:00] Let's start with block and assume that we have
[01:51:03] a couple...
[01:51:05] like text fields.
[01:51:07] Right.
[01:51:09] inside you.
[01:51:11] insider
[01:51:13] our representation.
[01:51:14] And
[01:51:20] Ah.
[01:51:23] See if I can make a couple more of these.
[01:51:27] Yeah, and this, yeah, okay. Thank you. Colors is how we're going to solve this problem. And then
[01:51:34] When we switch it, actually it's probably just going to be easier for me to just copy this one over.
[01:51:38] What this is by index by the way will will do the other ones in a second when you switch this and
[01:51:44] by index.
[01:51:46] So this goes here.
[01:51:47] and this goes here.
[01:51:50] Um...
[01:51:54] Oh, actually, oh yeah, we should--
[01:51:58] Yeah, okay, okay.
[01:52:02] Yeah, this is such a weird...
[01:52:03] Coming up with the right visual for this is actually really hard.
[01:52:08] Yeah, yeah, yeah.  Because what you're suggesting is that
[01:52:11] I should actually have made these as all separate
[01:52:13] blocks instead of making them as a one giant container, right? Like actually
[01:52:19] Like...
[01:52:21] draw these as...
[01:52:23] boxes.
[01:52:24] Okay
[01:52:24] Thank you for
[01:52:25] helping me come up with
[01:52:27] the right way of representing this.
[01:52:30] Because if a...
[01:52:32] Dom.
[01:52:34] we're going to color code
[01:52:36] each uh
[01:52:38] each
[01:52:40] DOMnode.
[01:52:41] Okay?
[01:52:45] Which...
[01:52:46] is a little bit of fun.
[01:52:48] But yeah, let's color code each DOM node.  Let's make the next one green.
[01:53:02] And then let's make the last one
[01:53:05] Some kind of blue color.
[01:53:07] Okay.
[01:53:10] I did not pick the same blue color.
[01:53:14] All right.
[01:53:17] Okay, here's our list.
[01:53:21] *sigh*
[01:53:27] All right.
[01:53:28] All right.
[01:53:29] Here we go.
[01:53:31] in business.
[01:53:35] and
[01:53:36] to be clear,
[01:53:38] I'll do them at each one at a time.  So we do by index first.  When we switch these by index, what ends up happening
[01:53:46] is
[01:53:46] Funnily enough,
[01:53:48] even though the data changes,
[01:53:50] and the DOM nodes update.
[01:53:53] Um...
[01:53:54] nothing actually moves.
[01:53:56] So
[01:53:57] Like...
[01:54:01] In all these cases, the DOM is fully updated.  It looks like it's switched.
[01:54:07] But...
[01:54:08] By index?
[01:54:09] you actually reuse the DOM nodes that's already there.
[01:54:13] Right? It's, yeah, it's basically like the...
[01:54:17] the props swap around someone's suggesting.
[01:54:21] It's basically like that, okay?
[01:54:25] Thank you.
[01:54:26] In our next example,
[01:54:28] We'll do bye.
[01:54:29] will be
[01:54:30] Uh, black...
[01:54:32] We'll do by key.
[01:54:36] and
[01:54:37] and by key,
[01:54:40] what ends up happening.
[01:54:47] is
[01:54:51] It's a little bit easier just to
[01:54:53] Delete this.
[01:54:57] And by key, what ends up happening?
[01:54:59] is that, okay, let's copy all of this.
[01:55:11] They literally switch.
[01:55:14] A stays red.
[01:55:19] Um,
[01:55:22] and green stays blue.
[01:55:24] this is what a key to update is.  Um,
[01:55:27] And you might be like, oh, well, who cares?  What, like...
[01:55:30] Sometimes this is actually a lot faster because you're not actually, um,
[01:55:34] Like
[01:55:36] If you're deleting a row...
[01:55:38] Let's say you like delete C.
[01:55:40] or delete A.
[01:55:41] Um,
[01:55:42] I mean, it depends on the CSS, but if you delete a...
[01:55:46] in it
[01:55:48] I mean, we can actually see what that looks like.  Let's let's add one more example to our
[01:55:53] our list. Let's delete B.
[01:55:56] after...
[01:55:58] after we're done.
[01:56:00] so
[01:56:01] The operations are like,
[01:56:03] Initial...
[01:56:06] initial
[01:56:09] It.
[01:56:10] And then...
[01:56:12] This is swap.
[01:56:14] A, B,
[01:56:17] And then this is...
[01:56:21] this is going to be delete
[01:56:24] be, okay?
[01:56:29] If we delete B...
[01:56:31] By index, this is what happens.
[01:56:49] Right.
[01:56:50] If we delete B,
[01:56:52] In keyed?
[01:56:57] we delete B.
[01:57:06] Okay?
[01:57:07] So this is-- you might be like, "Okay, whatever, who cares?"  But I wanted to point this out because--
[01:57:13] Um...
[01:57:15] I'm going to go.
[01:57:16] Oh, do-do-do-do-do.
[01:57:20] my blog.
[01:57:22] This article has the best links to all the old ones.
[01:57:27] Actually, you know what? Maybe it's just easier to go to...
[01:57:29] Round three.
[01:57:31] and then go next
[01:57:34] No?
[01:57:35] Yeah, there it is.
[01:57:38] The reason we care about this, and this is the same reason that React yells at you,  per furiously, about not including click keys,
[01:57:44] is
[01:57:46] When it's keyed,
[01:57:48] It's the same...
[01:57:50] thing.
[01:57:51] This is a really silly example, but what he did was he went in an element
[01:57:55] when it was non-keyed, he set the background color...
[01:57:58] And then he updated the data.  And the element kept the color, even though...
[01:58:02] It's completely different data.
[01:58:04] And--
[01:58:05] The example that
[01:58:07] Oh, did he update it?
[01:58:09] Oh, he did update it. This used to have...
[01:58:12] A really cool example.  No, here it is.  With the CSS transition.  See the X icon.
[01:58:16] blowing up?
[01:58:18] You click the X.
[01:58:20] And it actually is still
[01:58:23] animating on the wrong element
[01:58:26] after, because the original, it reused the elements, so like you deleted it, and then the other element shifted up, and it's still animating the deletion animation on the wrong element when it's non-keyed.
[01:58:45] So, like, essentially...
[01:58:47] What I'm getting at is, it's not just us. Think about any place where there's an ephemeral state stored in the DOM. Sometimes this applies to things like input elements, sometimes this applies to things like...
[01:58:58] web components which tend to hold their own state. Basically there's a whole
[01:59:04] bunch of things.
[01:59:06] that
[01:59:08] It actually matters.
[01:59:11] And you can get weird, broken...
[01:59:13] behaviors if you do
[01:59:15] non-keyed. And that's the reason why the JS framework basically ignores non-keyed.
[01:59:19] But the reason I'm focusing on this is it's the same reason that React yells at you to include keys.
[01:59:25] And this mechanism, as this is true in all frameworks, in Vue they don't yell at you, or Svelte they don't yell at you about including keys, but it is the exact same problem.
[01:59:38] Right?
[01:59:39] so
[01:59:40] I told you there was a third way to do it, right?  Because the way to do it, when you do it by key...
[01:59:45] essentially what ends up happening.
[01:59:48] is
[01:59:49] is
[01:59:50] on the element you're like, you pick some part of the data. So you're like, oh, by keys. So like,
[01:59:55] row.id. You're like, okay,
[01:59:57] If rowid.matches, then we know
[02:00:00] It's the same thing. And then we can
[02:00:01] use those same elements again.
[02:00:04] But...
[02:00:04] it's a little bit
[02:00:05] more sophisticated
[02:00:07] than this because what if you have
[02:00:09] multiple changes happening at the same time. What if you both swap the row
[02:00:15] and
[02:00:16] Add
[02:00:17] more
[02:00:18] like update it at the same time.
[02:00:21] The thing is...
[02:00:23] If you swap a row, if you have immutable data,
[02:00:27] swapping a row
[02:00:29] keeps, like, the reason you need the keys, swapping the row keeps the reference, right?  If you ever, I mean, let me...
[02:00:36] Like...
[02:00:37] Whoa
[02:00:38] like the typical pattern for immutable data, let me see if I can...
[02:00:41] Do I have another playground open? Yeah, okay.  Like, typically, if you were to swap a row...
[02:00:46] immutable data, what you do is you start with
[02:00:50] array one, right?
[02:00:51] And then
[02:00:53] Which...
[02:00:53] has some stuff in it, like a...
[02:00:56] and B, you know,
[02:00:58] And C.
[02:00:59] If you're going to do an immutable swap of these what you might do is go oh const
[02:01:05] array 2 equals...
[02:01:08] SPA.
[02:01:09] I mean, there's different ways to do it, but you'd make a clone.
[02:01:13] And then you'd go, OK, well, array
[02:01:16] I think I can even do...  I can't remember if this works.  There's like a cool trick you can do with ES  where you can like...
[02:01:24] you can do like
[02:01:26] I'm not going to be fancy.  I'm just going to do it.  OK.  So we're going to say that array...
[02:01:32] 2 at index 0 equals...
[02:01:35] array one
[02:01:37] at index one,
[02:01:40] and array two at
[02:01:43] index 1
[02:01:46] equals array one and index zero.
[02:01:49] And...
[02:01:50] if I console log,
[02:01:54] array.
[02:01:55] one and array two at this point.
[02:01:58] We're going to see...
[02:01:59] we're going to see a list that has been swapped and unswapped.  So the original is unchanged.  The change is immutable.
[02:02:07] But these are simple...
[02:02:11] simple, uh...
[02:02:13] uh,
[02:02:16] But now if we have...
[02:02:18] an object.
[02:02:20] and...
[02:02:26] We're doing this.
[02:02:28] Right?
[02:02:31] Um...
[02:02:32] Yeah, our console is...
[02:02:35] Just kind of compress these all out so we can't see them as easily.
[02:02:40] The challenge...
[02:02:41] here is
[02:02:43] This is fine because we didn't change any of these objects and the references are going to be the same.  But if we actually on top of swapping them,
[02:02:50] also want to mutate
[02:02:53] Um...
[02:02:54] the value here to let's say a1
[02:02:58] What we actually have to do
[02:03:00] is--
[02:03:01] Clone it.
[02:03:02] as well. We need to take, so we need to go, we need to go this,
[02:03:09] that
[02:03:10] Array zero.
[02:03:12] And then we need to go
[02:03:15] V equals
[02:03:17] A1 and I'm cloning it to be fair. I don't need the colonic because it only has a single property  But I just like this is the typical immutable pattern and then in so I
[02:03:25] Because if we didn't clone it,
[02:03:27] I mean, I can show you what happens if we don't clone it,
[02:03:30] Um,
[02:03:31] The original Ray,
[02:03:33] at index zero.
[02:03:34] would be changed, but we can see in the original array here,
[02:03:37] It's a...
[02:03:38] and in the original Ray, and in the new one, it's A1.
[02:03:42] See, B is fine, B is C. If we didn't clone it here and we just
[02:03:46] And we just changed.
[02:03:48] changed it.
[02:03:50] So
[02:03:51] we would basically have corrupted the original data and it wouldn't be immutable.  But my point now is these are different objects.
[02:04:00] right? This object now that's sitting here is not the same as the original object that was sitting here, which means that
[02:04:09] It.
[02:04:10] no longer, basically you need a way of knowing it's the same. And that's why we have the keys, right? In index we didn't care, but we have the keys here because if you key by
[02:04:22] just the value
[02:04:25] Um...
[02:04:26] and you clone this immutable data, well, it's going to think it's a new object.  It's going to destroy and recreate it.
[02:04:31] so
[02:04:32] we need keys to know it's the same thing and more so
[02:04:37] When we...
[02:04:38] When we hit something that matches, and it's the same with all of these,
[02:04:41] I
[02:04:42] ones. Essentially,
[02:04:44] If it matches...
[02:04:46] for both of these approaches.
[02:04:48] We actually
[02:04:49] Mmm.
[02:04:50] what I call merge deep.
[02:04:52] By that I mean, or diff deep.
[02:04:55] Because
[02:04:57] We need to know what changed. It's not enough
[02:05:00] to know that the object is swapped
[02:05:04] we actually need to know
[02:05:06] if any keys on it had. So when we
[02:05:08] When we match
[02:05:11] When we match here, we're like, oh, match?
[02:05:15] we go, oh, it's
[02:05:18] And...
[02:05:19] It's...
[02:05:20] not refer-- not equal,
[02:05:24] Like it's a different object match and it
[02:05:26] is
[02:05:29] a different object.
[02:05:30] I'm getting cut off on the side here.
[02:05:33] Um,
[02:05:34] you know.
[02:05:35] What's my best way of doing this? But yeah, if it matches and it's a different object,
[02:05:40] Match
[02:05:42] Plus...
[02:05:42] diff object
[02:05:47] stiff
[02:05:49] No.
[02:05:50] Different.
[02:05:52] different object
[02:05:54] Diff deeper.
[02:05:57] Okay, so in both of these approaches,
[02:06:00] Like,
[02:06:02] essentially, once it's
[02:06:03] Placed it?
[02:06:05] If it knows that...
[02:06:09] that something has changed because it's a different object.
[02:06:12] It needs to actually
[02:06:14] to make sure that it doesn't miss any changes further down.
[02:06:20] And I want to show you the third approach now.
[02:06:24] Although this one will be a little bit quicker to do.
[02:06:26] Because the third approach...
[02:06:29] is almost identical to the keyed approach.
[02:06:32] Okay. And this is...
[02:06:34] by reference.
[02:06:37] But by reference,
[02:06:40] doesn't really work with immutable data.
[02:06:43] because
[02:06:44] Key is actually an improvement on that.
[02:06:48] If you do by reference,
[02:06:49] and the object changes, it's not the same reference.
[02:06:55] So...
[02:06:58] In a sense...
[02:07:00] this is kind of awkward because
[02:07:03] You don't want the change.
[02:07:05] to be immutable. You don't want to do this.
[02:07:10] By reference means all your change has to be mutable.
[02:07:13] Okay?
[02:07:14] So the key part for this one
[02:07:16] here.
[02:07:17] is
[02:07:18] Mutable.
[02:07:20] That's the key part.  So if we're like...
[02:07:24] kind of trying to
[02:07:26] cover this whole zone here.
[02:07:29] These ones,
[02:07:31] Um...
[02:07:32] work
[02:07:33] pretty well with immutable data.
[02:07:36] This one...
[02:07:38] works with only mutable data.
[02:07:41] But you don't need a key.
[02:07:42] as long as you can keep the reference.
[02:07:44] As it turns out,
[02:07:46] Reactivity is mutable.
[02:07:48] But it has an interesting characteristic.
[02:07:52] because
[02:07:54] when you match...
[02:07:56] in this mutable world. When you match and you realize that it's a match,
[02:08:02] Because it's the same reference,
[02:08:04] It can't possibly be different.  Like...
[02:08:07] deeper. You can't tell. There's no way for you to diff it. So you
[02:08:11] when you match on a reference thing
[02:08:14] You match and stop.
[02:08:15] No more diffing.
[02:08:17] Match and stop.
[02:08:23] If you want something deeper,
[02:08:27] to update like one of these little cells
[02:08:30] Here.
[02:08:33] you need to update it
[02:08:35] independently.
[02:08:41] No.
[02:08:42] Svelte.
[02:08:44] users
[02:08:45] The first two.
[02:08:47] In fact,
[02:08:51] Everybody
[02:08:52] Almost everybody uses the first two, all the popular frameworks.
[02:08:55] Like up here...
[02:08:57] This zone up here is
[02:08:58] is
[02:08:59] React
[02:09:00] view, svelte,
[02:09:02] um...
[02:09:03] I don't know, Angular probably has the means to do this in one of their billion modes.
[02:09:08] Right?
[02:09:09] But...
[02:09:09] This is how
[02:09:12] You do it.
[02:09:14] in all these frameworks.
[02:09:17] is the last approach the fastest. Of course. I mean...
[02:09:20] *laughs*
[02:09:21] Of course it's the fastest.
[02:09:24] Right?
[02:09:26] Um,
[02:09:27] - Thank you.
[02:09:28] but it's
[02:09:32] There's a trade-off because the object can't change.
[02:09:36] So if you want to
[02:09:38] something like this is
[02:09:41] Like, it's not just solid down here.
[02:09:45] Knockout
[02:09:48] I think old Angular, like Angular 1,
[02:09:51] Like,
[02:09:54] - Thank you.
[02:09:57] basically frameworks that were based on this model of the create once.  I told you Svelte is more like React than it is like Solid.
[02:10:10] Right, but reuse rows is non-keyed, which is dangerous, right?
[02:10:14] potentially. So
[02:10:16] we're talking about on the key side of things, right?
[02:10:19] Um,
[02:10:21] I think there's ways to mitigate that potentially, but just on a pure...
[02:10:26] reusing rows is some kind of hybrid between like the
[02:10:30] by index and thing like I think you could do some clever stuff where you could like hold something  and kind of purify it and you could get some improvements by not recreating the dom and you  could probably keep it clean enough but like generally speaking for use any kind of dom  recycling like there's ways to optimize things even faster
[02:10:46] further because by index often is more performant. So if you're selective, you could be like, I want  certain operations to work like indexed and then other ones by ref. And then you could like make  the most optimal solution if you knew what you're doing. But as a general solution, it's dangerous.
[02:11:01] is the way I'd put it.
[02:11:03] Right?
[02:11:06] Thank you.
[02:11:07] Right.
[02:11:09] so
[02:11:10] The thing is...
[02:11:12] This works really well for Solid because it never wants to recreate anything anyways.  Like, why would we bother? And because we never create, we have these fixed things.
[02:11:20] Right?
[02:11:21] Um...
[02:11:23] like
[02:11:24] Like...
[02:11:25] like we already kind of went through this, like if we create things once,
[02:11:30] and it never reruns. But the thing is, you have to understand this always has to dip deeper, if it detects a match. And generally, because of this, these systems don't care
[02:11:41] if your data is deeply nested.
[02:11:44] Generally speaking, like if you update a list, you can just throw it in the signal and it'll just dip downwards.
[02:11:50] Right.
[02:11:50] Because it's like any change
[02:11:53] of data, like our to-do app or like our JS Framework benchmark,
[02:11:57] you know,
[02:11:59] Any change, uh,
[02:12:00] Sorry, not that one. Any change here, like if I'm updating every 10th row,
[02:12:04] it's actually running through the list reconciler
[02:12:09] and actually going, oh,
[02:12:11] these ones change so I'm actually going to check that every 10th row changed. So I'm matching, yes, these are the same, same, same, same, sorry, matching.
[02:12:19] not the same object, I'm going to diff, see that this change, apply it.
[02:12:23] It's funny I clicked on it then go here. Okay, same element same element. No change. No change or change when I swap I
[02:12:29] it's gonna go essentially, it's gonna go, okay, same, fine,
[02:12:34] Oh, different element.
[02:12:37] find it and go, okay, but I found it.  So I know that it hasn't changed.  So I don't need to diff it.
[02:12:43] Right?
[02:12:44] Um,
[02:12:45] Well, it depends. Like, if it's key, if the key matches and the reference is the same, then I know I don't have to diff it, essentially.
[02:12:53] but
[02:12:54] Essentially all changes to the array go through the top down array reconciler.
[02:12:59] with most frameworks.
[02:13:02] Um...
[02:13:03] So like it's,
[02:13:05] Whereas if you are doing this referential thing and you're never doing that, like in the case of Solid,
[02:13:11] When you click,
[02:13:12] update every 10th row, it doesn't run the array logic.
[02:13:16] It wasn't the array that was changed. It was a signal that you created once down
[02:13:21] in the tree.
[02:13:22] So this doesn't even know that it's in an array.  It's just updating independently, just like that one text note.
[02:13:32] Right so like
[02:13:35] This is...
[02:13:36] This is interesting because, to be fair, if your system...
[02:13:40] only has by ref, and this is solids4 component to be clear.  We also have by index, but this is solids4 component completely.
[02:13:48] how do you handle data from the server or like the stupid DBmon benchmark where you're like shooting people fresh
[02:13:55] snapshots that don't have
[02:13:58] data, like this works really good for fine-grained stuff. Like when you go, okay, I move this row or I sort this list. As long as you have the change and it's happening in the DOM, it's fine. But if it's coming from a server, it's fine.
[02:14:07] It's like, okay, this is all new data. I can't match it. How do you match it all at a key?
[02:14:11] Well, the solution I came to with Solid is actually handle the data at the diffing level.  And we have a reconcile function for stores where we can do data diffing and then promote out.
[02:14:20] the fine-grained thing, but the reason I did that way was because the DOM now is really stupid. There's a diff mechanism, but it's
[02:14:29] just for this, but it's like one of the simplest diff mechanisms in that sense. Um,
[02:14:34] Because we...
[02:14:36] don't do deep diffs.  It just...
[02:14:38] If you just go use solid right now, by default, there's no deep diffs.  We don't ship that code.
[02:14:45] with the main part of the bundle or whatever.  It's something you opt into.
[02:14:51] So...
[02:14:52] Again, this isn't all about solid, but I just wanted to point out that this is one of the reasons why, and I've mentioned this previously with the JS Framework Benchmark,
[02:15:04] Classically, VDOM libraries have had a very difficult time with these, not super difficult, but they've had a harder time with these two rows.
[02:15:13] because...
[02:15:14] selecting a row and partial updating a row
[02:15:17] are going...
[02:15:18] to have some overhead.
[02:15:20] Right?  If you get to this side with the reactive libraries,  you'll see it's like almost partial updates-- or like  pinpoints, so they almost have no--
[02:15:26] overhead over
[02:15:29] over the vanilla DOM. But yeah, over time frameworks have gotten more
[02:15:35] Um,
[02:15:37] have gotten more optimal in these areas.  But historically speaking, this was the, basically,  adding reactivity made these fine grain updates,  like partial update and select row,
[02:15:47] Faster.
[02:15:48] That's what they did.  But they don't affect...
[02:15:53] If anything, if you're building a bunch of reactivity, they kind of have a cost on the other end.
[02:16:01] Right.
[02:16:02] It's...
[02:16:04] It's challenging, right?  I wanted to point this out here because...
[02:16:11] The difference by mapping by ref and mapping by key is actually different.
[02:16:15] even though they look the same,
[02:16:17] By key ends up doing more
[02:16:20] more work, potentially.
[02:16:23] uh,
[02:16:24] It's possible...
[02:16:26] though, because...
[02:16:29] as long as you do mutable change instead of immutable change
[02:16:33] it does cross the boundary pretty well, right?  Because...
[02:16:39] But you have to make that decision.
[02:16:42] when you do the update.
[02:16:45] Because if you do mutable change, then this doesn't know that it's changed and it won't rerun the list.  And then that deep mutable change could run independently.
[02:16:54] And
[02:16:55] Again, just doing this to kind of get
[02:16:57] context. I think I've explained to Rays and Lists well enough now that we have
[02:17:02] almost all the context
[02:17:04] we need to get into
[02:17:06] most of our topic today.
[02:17:09] Yeah, and you're getting there.
[02:17:11] So then you're like, okay.
[02:17:15] Clearly, there's a trade-off between reactivity and VDOM.
[02:17:19] So what if we use them both together?
[02:17:22] Wouldn't that be the best combination possible?
[02:17:25] Right?
[02:17:26] That's that's that's
[02:17:27] That's where all of this is kind of heading to.  And luckily for us, there's a framework  that's been doing this for like seven years,  and that's called Vue.
[02:17:36] Um...
[02:17:38] very long time mixing and matching these patterns together.
[02:17:42] And
[02:17:43] Essentially,
[02:17:46] Vue does fall on this side of things, but Vue has done a lot of really smart stuff because
[02:17:51] I mentioned before there's this really awkward thing that with a reactive system you want less components
[02:17:56] And then with the VDOM, you want more components.
[02:18:00] And it's like this really awkward tension.
[02:18:02] And
[02:18:04] And Vue used to get
[02:18:07] hammered.
[02:18:08] here.
[02:18:08] like in benchmarks. Let's see if I can find some historicals here to show you what I'm talking about.  Let's go back. Can we go to like what like round seven I want to say?
[02:18:18] Maybe round eight.
[02:18:19] I can't remember. These are classic benchmarks.
[02:18:22] Um...
[02:18:26] Let's see if I can find this.
[02:18:29] Phew.
[02:18:32] See like select row or something.
[02:18:36] Um...
[02:18:40] No.
[02:18:41] I think this is...
[02:18:44] Partial update? Yeah, okay. How about partial update?
[02:18:47] Yeah, partial update.
[02:18:48] Doo doo doo doo doo doo doo.
[02:18:50] View is over here, 168 on partial update.
[02:18:55] Okay.
[02:18:57] Over here,
[02:18:59] Um...
[02:19:00] Look, knockout. This framework is super, super freaking slow.
[02:19:05] you know, from our modern standpoint, huge hog, but it's like almost, it's like right up here.
[02:19:10] with the partial updates felt actually pretty fast here surplus angular
[02:19:15] Surplus is kind of like Solid's predecessor. This is before I put Solid in here. Reactive
[02:19:20] There's a VDON library, Eevee, in here. So props there. But my point is,
[02:19:26] Look, React is here.
[02:19:28] It's not even with MobX, React and MobX, React, Redux, React.  They're kind of in the middle of the crowd around 93.  And then you have Vue.
[02:19:35] over here.
[02:19:36] Way over here.
[02:19:39] Just putting reactivity and a VDOMP together
[02:19:42] is actually kind of
[02:19:44] terrible for performance.
[02:19:46] because you're taking both costs.  Suddenly you're like creating this VDOM  and you're creating the reactivity.  Like sure, the reactivity,
[02:19:54] should, the funniest thing about this is
[02:19:56] I was like, this one was weird for me because I was like, wouldn't the updates be fast because the reactivity?
[02:20:02] Um,
[02:20:04] and not,  you know,  like,
[02:20:06] It depends on which one you favor. The problem is when you build the implementation, they had to make a choice. Make all the benchmarks slower or make the one slower.
[02:20:15] And they decided to make the one slower because it was like a better trade off on performance.  But it was like, do you make more components?
[02:20:21] and optimize
[02:20:23] um,
[02:20:24] more the VDOM way and get better creation or do you make less components and
[02:20:28] and take the hit
[02:20:31] the other way.
[02:20:35] where
[02:20:36] Yeah, it's a very difficult balance that happened, except
[02:20:42] And it was like that for years, honestly.  Vue managed to always get in front of React in terms of performance,  but only marginally.  And it was like that for years, honestly.
[02:20:50] Because, I mean, they spent more time on performance than tuning it.  Like, Vue did a good job of tuning it and making it better.  But they had a much bigger...
[02:20:57] hurdle to overcome initially.
[02:21:00] Um...
[02:21:01] But then...
[02:21:03] They found a solution.  I love this solution.
[02:21:06] View 3.2.
[02:21:08] So only about a year or so ago, quintessential tapestry
[02:21:12] Ta...
[02:21:13] Yeah.
[02:21:14] quintessential quintuplets.  Okay.  Um,
[02:21:20] They made, first of all, they made their reactive implementation like way faster.
[02:21:24] which is good on them and improve memory usage.  But the big thing they did was they added this V-Memo directive.
[02:21:29] Because...
[02:21:31] Now they had...
[02:21:33] the ability...
[02:21:35] to essentially...
[02:21:38] make the large components that the reactive system liked
[02:21:41] and then say that like actually VDOM
[02:21:44] treat this almost like its own component so that it can optimize run separately.
[02:21:50] And by
[02:21:51] annotating parts of the template, you can now get the benefit of having multiple components in a VDOM system with keeping the boundaries large, that reactive system things. And yeah, it was a big push. Vue went from being in the 170s,
[02:22:08] or 160s, I think around that point. They basically just jumped right past Preact.
[02:22:15] and straight into like svelte
[02:22:17] territory on performance.
[02:22:19] Um,
[02:22:20] because of being able to actually have a solution to optimize it. But as I said,
[02:22:25] a naive approach here
[02:22:27] doesn't
[02:22:29] doesn't help us.
[02:22:30] Um,
[02:22:31] Because it...
[02:22:33] Like, you're just taking...
[02:22:35] Both overheads.
[02:22:38] All right.
[02:22:41] all right everybody still with me today i let me it's really hot in here
[02:22:45] *chewing*
[02:22:51] Thank you.
[02:22:51] *sad*
[02:22:53] *sigh*
[02:22:55] okay so yeah i want to talk about that because views approach
[02:22:59] is like
[02:23:01] an amazing piece of engineering.
[02:23:03] Because they figured out how to take the B-DOM...
[02:23:07] find the static,
[02:23:08] nodes, hoist them
[02:23:10] Do...
[02:23:11] a whole bunch of optimizations
[02:23:14] to actually...
[02:23:16] let both sides
[02:23:18] play nicely together, like the V-Memo and all this stuff. But naturally, just mashing both systems  together, actually, while it's like really cool for DX, is actually really bad for performance.
[02:23:32] Yeah, I do have AC, but we have to be careful running it.
[02:23:37] essentially, because we've been having rolling power outages if people run the AC too hot. So I'm pretty sure we're sitting at about
[02:23:44] Not too bad, like 82, 84-ish, but...
[02:23:48] The lights in here make it kind of difficult.
[02:23:52] You guys are hilarious.
[02:23:55] I thought Vue had 15 modes.  No, I think Vue has like 6 so far, but they'll probably be more...
[02:24:03] Okay, so yes.
[02:24:04] Here we go.
[02:24:06] I've been going on about this for long enough that we probably should talk a bit about...
[02:24:12] Let me make a banner.
[02:24:16] I've been so bad this stream.
[02:24:20] We should probably talk about Preact signals because
[02:24:23] I've already been talking for two and a half hours and I haven't even talked about it, which I warned everyone at the beginning because that's...
[02:24:30] That's
[02:24:33] That's what I'm doing. No, not 80 degrees Celsius.
[02:24:39] No, 80 degrees Fahrenheit.
[02:24:42] Yeah, so
[02:24:44] This is an interesting thing because
[02:24:47] Oh, I guess there's one more piece.
[02:24:50] Before we really get into it, sorry guys, I put this banner up prematurely. I will, I'll bring it back in a minute. Okay. One more thing I want to get into. Cause this comes, this comes in. I showed you about.
[02:25:02] We talked about Vue, but there's one other place where we mash...
[02:25:05] reactivity.
[02:25:07] and VDOM together, and that's state libraries.
[02:25:10] It started with MobX,
[02:25:12] And yeah, actually, you know what? Let's make a banner.
[02:25:19] Yeah, so I want to talk about state libraries, right?
[02:25:23] I kind of
[02:25:25] talked all about change management to this point, but what ended up happening
[02:25:30] And this is going kind of back in time here because there's a side effect of this move, right?
[02:25:35] Because at this point, this was very much a concern.  We had this change management mechanism.  And I'm going back a little bit in the stream  to kind of come back here.  We went deep, but we're kind of stepping back for a minute.  Because this was all part of the framework,
[02:25:50] it had the ship with the framework, and this is the only way things happened.  So essentially, our framework would basically create the whole system for us and
[02:25:59] before React's component model came out,
[02:26:01] you would just use the mechanism, the framework shift.  You're like, oh, that's how change works.  There was no idea of state change.
[02:26:07] management libraries because models were kind of implied even though a library like knockout didn't have models and
[02:26:13] essentially
[02:26:14] for the most part,
[02:26:16] this architecture was implied.
[02:26:18] so
[02:26:19] even though the library might only ship with this part, some of them did ship with the models as well. Essentially,
[02:26:27] you knew that you're in the neighborhood for models. You get some backbone models or whatever. This is what you were looking for. So essentially, there was never a question of how you'd handle
[02:26:41] global state or like state management because it was part of the framework.
[02:26:45] When this happened,
[02:26:48] like react was kind of like,  we don't even care what's over here.  Initially.  They're like,  they're like,
[02:26:53] like honestly, this is just not our concern, right?  And as I said, other lovers like Knockout  had taken sort of that stance,  but now because we had these kind of pockets...
[02:27:02] Like, you could live in this whole world and like pretend this didn't exist anymore.
[02:27:07] And
[02:27:08] So React was like, yeah, whatever you want.
[02:27:11] But we had a lot of people who were like,
[02:27:13] used to this kind of stuff. They're like, well, I got database models. How do I keep it in sync?  How do I manage this stuff? And
[02:27:20] React kind of gave us an answer early on because they realized that people were confused because they're like, you know, everyone's like, doesn't the framework handle this? And React's like, no, we're a library.
[02:27:30] This is where I feel like the framework library distinction
[02:27:35] came from?
[02:27:37] Right? Because it was like people expected this kind of consideration to be part of the framework and we're just a view library. We just do this part.
[02:27:48] Obviously...
[02:27:49] I called Reactive Framework in my last stream and people gave me heat for it, which I find a little bit amusing. It's hard not to call Reactive Framework these days, but I mean, early on,
[02:27:59] I think the library's statement was fair and it made this distinction very clear. That was its goal.
[02:28:08] And
[02:28:09] Essentially, they didn't care.
[02:28:12] They showed us flux.
[02:28:13] which could actually be implied on a lot of models, like things like Backbone worked with it. And they also
[02:28:20] Not before long, Redux came around.
[02:28:25] Right?
[02:28:29] and Redux
[02:28:31] is a beautiful, simple thing.  It's so funny because when people talk about...
[02:28:37] Redux and they're like "Oh, it's so complicated and all that." What's complicated about Redux is it has so much boilerplate because it is the simplest solution you could think of.
[02:28:46] And I know it's so weird because...
[02:28:48] It's like not easy, but it is incredibly simple.  When people talk about a difference between being simple and easy,  Redux is an example of like at its core, it's the simplest concept, but it is not easy to use.
[02:29:00] classically.
[02:29:01] Redux Toolkit which makes it easier to use as well. But it's because the simpleness of the model was just like
[02:29:10] I mean, it's an equation, right?
[02:29:14] It's almost like React's own equation. How far is Redux from React when you consider the equation?
[02:29:23] Reacts equation was... what was Reacts equation?
[02:29:26] Everyone loves to react to a question. What is it?
[02:29:29] view
[02:29:30] equals function of state, right? This is this is the reacts equation. I
[02:29:35] We've all seen this. Redux equation is
[02:29:39] is
[02:29:41] uh,
[02:29:43] .
[02:29:43] state
[02:29:45] is a function of
[02:29:48] State.
[02:29:50] And...
[02:29:51] action.
[02:29:55] right?  It's boilerplate hell traditionally when you don't use Redux tool,
[02:30:00] - Okay.
[02:30:00] which makes things much easier to use.
[02:30:03] But it's because it's this simple. Like,
[02:30:05] you don't need a library.  If you want to use Redux philosophy,  you can literally just go write a function somewhere.  Like you don't need Redux to do Redux.  Like it's just a reducer.  It's just like,
[02:30:15] I mean, React added useReducer inside the core when they went to hooks.
[02:30:23] Like, it doesn't take long to see how these chain together, right?
[02:30:27] Right? Like...
[02:30:28] If function of state is view and state is a function of state in actions,
[02:30:32] and we use mathematical composition here
[02:30:35] then therego view equals a function
[02:30:39] of a function of state
[02:30:42] and action.
[02:30:44] Look, I've solved the react equation.
[02:30:49] Right?
[02:30:54] But what I'm...
[02:31:01] .
[02:31:01] Yeah.
[02:31:05] So like what I'm getting at here is that like this fit really well with their model because it's like
[02:31:11] You...
[02:31:13] You don't do any work until you ask the question, which is function.  It's pull-based.
[02:31:18] But people wanted...
[02:31:20] push-based solutions, obviously. They wanted to be able to... This was really automatic, especially with two-way binding. This circle becomes two-way binding, basically. And they're just like, "What is all this boilerplate to set all this stuff up?" So people came up with an approach with that. One of those approaches was MobX, where you basically
[02:31:43] All you have to do...
[02:31:44] here
[02:31:45] is keep your component box
[02:31:47] Right?
[02:31:49] Let's drag over here.
[02:31:51] What if you could do this?
[02:31:53] Sorry.
[02:31:54] I gotta get the right
[02:31:55] selection, there we go.
[02:31:57] What if we could take this...
[02:31:59] component box and let's get over here a bit.
[02:32:02] And what if we could
[02:32:03] kind of play a little game here where we stretch this out a little bit
[02:32:07] And then we're like, okay.
[02:32:09] I got a secret for you guys. We'll move this up here.
[02:32:12] We'll put this over here. We'll keep it inside the box.
[02:32:15] And
[02:32:16] Then what we'll do,
[02:32:18] is we'll make
[02:32:19] another little box in here.
[02:32:23] Or maybe we won't actually keep it in the box, actually.  We'll make it look like a box.
[02:32:27] is a better way. Let's actually leave this box here.
[02:32:32] And then we'll make a...
[02:32:34] pseudo box
[02:32:36] We'll make it.
[02:32:38] Maybe...
[02:32:40] a nice purple color dot dot dot.
[02:32:43] We'll make a pseudo box here and we'll do this.
[02:32:46] And then
[02:32:51] All right.
[02:32:53] We'll be like, this is our component.
[02:32:55] Sorry.  Um...
[02:32:58] and we'll put
[02:32:59] I'm going to...
[02:33:00] Just put the label Movex here.
[02:33:02] Okay.
[02:33:05] Okay. And...
[02:33:06] We'll make this our component, and we'll do a little secret where...
[02:33:10] This part
[02:33:12] runs once
[02:33:16] And it's hoisted out.
[02:33:18] And...
[02:33:19] this part
[02:33:21] runs lots.
[02:33:24] This is basically how Vue works too, in a sense, but the trick to do this with inside React
[02:33:30] was...
[02:33:31] Hawks.
[02:33:32] Essentially
[02:33:34] you can make this run lots
[02:33:36] Um...
[02:33:37] using
[02:33:38] wrapping this in an effect, essentially. We could just like
[02:33:42] We can make this an effect.
[02:33:44] to run the GSX view
[02:33:46] And then...
[02:33:47] Ha-
[02:33:48] Memoize...
[02:33:49] So, sorry.  So the effect...
[02:33:51] is here at this boundary.
[02:33:53] And then
[02:33:54] Memoize this boundary on props.  Memoize.
[02:33:58] And essentially...
[02:34:00] So this is like, when I say memoize, I mean like React memo, like
[02:34:04] essentially.
[02:34:06] Um,
[02:34:07] We could basically separate the component, make it look like a component, but give it
[02:34:12] isolated areas to execute.
[02:34:15] So in here,
[02:34:18] MobX might be like, "Oh, yes, let's create
[02:34:22] a observable, which is the same as a signal and all that stuff, right? So observable here.  And then down here, we're like, there's an effect. Let's
[02:34:29] you know,
[02:34:31] Listen.
[02:34:33] I mean, you just read the observable here. I don't know what the best way to say that, but like this here is like
[02:34:40] Create.
[02:34:44] Create Observable.
[02:34:47] Up here.
[02:34:52] Running out of colors.
[02:34:55] Sure.
[02:34:57] And then...
[02:34:59] down here
[02:35:00] We're like...
[02:35:02] read observable.
[02:35:05] And now we have our auto tracking for our reactive system, and we can basically live inside
[02:35:11] react world
[02:35:13] But the problem is React doesn't know about this.  So you basically have to write a whole bunch of wrapper hawks  to basically split things apart again and let...
[02:35:20] Um...
[02:35:21] let you get like component level,  semi fine grained ish updates in your system.
[02:35:30] Right? So this is really kind of convoluted.  But the wonderful thing about it is you just start authoring components that feel like they run once.  You build some state and then you read it in the JSX.
[02:35:45] And you're done.  This is how Vue works properly.
[02:35:50] to essentially like Vue internalizes it, which is why it can optimize it. In React MobX, you actually have to like write a whole bunch of wrappers.
[02:36:01] So,
[02:36:03] essentially
[02:36:06] a little bit messy trying to make it work within React's constructs,  but it actually works really well.  And the truth of the matter is,
[02:36:13] There are
[02:36:14] Are other mechanisms kind of similar to MobX...
[02:36:18] that do this sort of game, right?  Where, you know, we've talked...
[02:36:23] or people talked in other things that like of this school here,
[02:36:27] You have things like a zoo stand.
[02:36:30] or whatever.
[02:36:32] Right?
[02:36:33] which is kind of
[02:36:34] continuing off this side
[02:36:36] perhaps for the redux side or whatever, but then you have on this side,
[02:36:39] You know, there's things like what, the Valtio...
[02:36:44] I can...
[02:36:45] Vialto? I don't know the name of it.
[02:36:48] Sorry.
[02:36:51] But...
[02:36:51] Like...
[02:36:53] A lot of the state managements
[02:36:55] There's like with hooks, there's like a third version, which is kind of in the middle, which is where like
[02:36:59] Jotai lives...
[02:37:01] which is where it uses something that looks kind of
[02:37:04] like reactivity, but actually triggers the internal...
[02:37:07] stuff
[02:37:08] inside React.
[02:37:10] Um...
[02:37:11] But essentially, there's the three types of state libraries in React that kind of follow along this side.
[02:37:17] This is a newer
[02:37:19] post hook things, recoil's in this pile too.
[02:37:22] But
[02:37:24] Um...
[02:37:28] you know,
[02:37:29] Actually, let's just give ourselves a little bit more...
[02:37:32] base here.
[02:37:35] so I can talk about this.
[02:37:37] more
[02:37:39] it's like
[02:37:39] End of the most pod.
[02:37:41] Alright.
[02:37:43] go up somewhere here, okay.
[02:37:44] Cool.
[02:37:45] Um,
[02:37:46] but my point is
[02:37:48] they all have kind of different takes, right?  This side is like,
[02:37:54] This site is very much like
[02:37:57] on this kind of trip of like
[02:38:00] kind of
[02:38:01] How should I express it? It's like...
[02:38:04] Everything is poll-based. It's like poll-derived.
[02:38:08] Like it's kind of like
[02:38:09] And this side is very much on this kind of like...
[02:38:13] Push
[02:38:14] kind of
[02:38:15] reactive kind of thing.
[02:38:18] To be fair, most of these systems are actually push-pull.
[02:38:20] But...
[02:38:21] I don't know how much I should.
[02:38:22] strain on that. And then this type
[02:38:26] is...
[02:38:27] is this kind of...
[02:38:31] And
[02:38:32] It's smack in the middle, I don't know what to call it.
[02:38:34] But...
[02:38:38] Right.
[02:38:38] The truth of the matter is these libraries have gotten more popular because these libraries
[02:38:43] These
[02:38:43] use like
[02:38:45] This is like
[02:38:47] In a sense, this is like
[02:38:50] this use like i'm trying to think of how to differentiate this side but like
[02:38:55] This side uses...
[02:38:57] Plain objects generally, plain objects.
[02:38:59] plain objects, right?
[02:39:02] This side
[02:39:03] uses
[02:39:07] reactive data.
[02:39:11] and this side
[02:39:13] uses
[02:39:14] React's own state.
[02:39:19] This is probably the difference
[02:39:23] if I may,
[02:39:24] Um,
[02:39:25] between
[02:39:27] these
[02:39:28] approaches is that
[02:39:30] like...
[02:39:36] This doesn't care about the data being in the data. It doesn't care about the change being in the data.
[02:39:42] It's like completely pull. This one, all the changes in the data, and this one's using React's own mechanism.
[02:39:49] Right? And
[02:39:51] The thing is,
[02:39:53] using
[02:39:56] Um,
[02:39:58] There's a lot of benefits of using Reaxone mechanism because when you add another
[02:40:03] piece on top, like another
[02:40:05] state management mechanism on top. You have this challenge of like
[02:40:10] React's change mechanism still has to run under the hood anyways. Now you just have two systems.
[02:40:15] This one eliminates it, and this one isn't really much a system in itself.  This is very much aligned with what React is.
[02:40:21] And this one actually uses React, and this one is like...
[02:40:25] Um,
[02:40:26] like its own thing.  And the reason I want to point this out is,
[02:40:30] I haven't looked at the recent results recently, but I want to show you something.
[02:40:35] It's that...
[02:40:36] A bunch of people come in and they're like, oh, I'll create this state library and I'll improve React's performance.
[02:40:42] And
[02:40:43] I mean, let's look at state libraries.
[02:40:46] impact on performance.
[02:40:48] Okay, so the slowest one I see here is called React StarBeam.
[02:40:51] Um...
[02:40:53] This one is that new universal reactivity coming from the Ember team.  I think it's still like in beta or whatever, which is probably why it's way over here.
[02:41:03] But then we got react-focal
[02:41:06] react diet diagon i don't know what that is um
[02:41:11] React Zoo stand...
[02:41:12] React Redux, they're both over here.
[02:41:17] a more optimized Redux
[02:41:20] The traditional React Redux-- I guess this is the Hooks version--
[02:41:24] Um...
[02:41:26] Let's keep them going, React tag state, React mob X.  So here we're getting some of those reactive libraries.
[02:41:31] React 17 donate, this is a class implementation. I don't think it's very optimal. React recoil, react easy state,
[02:41:39] Um...
[02:41:40] and then we get to react hooks, okay?
[02:41:43] and
[02:41:43] Actually, you know what? Screw this. I think I have an easier way of showing this.
[02:41:47] Let's just go which frameworks.
[02:41:49] And just...
[02:41:50] do none, and then just select all the ones that are prefixed by React. So we can just like,
[02:41:55] see them all in one
[02:41:57] easy
[02:41:59] thing because we have a lot of React state libraries in here.
[02:42:03] Doo doo doo doo doo.
[02:42:05] I don't really want to focus on everything else,  but I want to...
[02:42:09] I want to show something here.
[02:42:18] If you look,
[02:42:20] at this graph.
[02:42:22] Oh, Jotar wasn't prefixed?
[02:42:24] Good call. Which frameworks? Joe Tide, Joe Tide, Joe Tide, Joe Tide.
[02:42:28] and let me know
[02:42:30] Yeah, so I might be missing a few. Thank you for pointing that out.
[02:42:33] Jotai.
[02:42:35] Almeno, they changed the order now, so that's in a logical order, but I don't always see it.  And is vowel...
[02:42:41] Tio also not
[02:42:43] Prefixed?
[02:42:45] Okay.
[02:42:46] I think the other ones are. Okay.
[02:42:48] Okay.
[02:42:51] Yeah, I got them...
[02:42:53] Both. Okay. So...
[02:42:54] Valtio's here.
[02:42:56] Jyotai is probably up a little higher. Where did it end up? Yeah, Jyotai. Look where Jyotai is.
[02:43:05] Jyotai is actually, apparently, according to this benchmark, the fastest state library.  And I'm not surprised...
[02:43:11] because it literally uses React under the hood.
[02:43:15] This suggests to me though that either this is a very bad run or
[02:43:20] Because...
[02:43:21] Like...
[02:43:22] Yeah, this suggests...
[02:43:23] to me that this is a weirdly bad run.
[02:43:25] because most of the React library-- yeah, there's something weird on this run. That's unfortunate. Okay, my point--
[02:43:31] But my point is,
[02:43:33] If you look other than this Jyotai spike here,
[02:43:36] And as I said, I think something's weird going on here.  All the React libraries and state libraries  are essentially in this zone.  You don't suddenly make React
[02:43:44] Way
[02:43:45] faster.
[02:43:49] is what my point is. Jyotai seems to be breaking the rules right now, but I've looked at this over years.
[02:43:55] You can't...
[02:43:57] change. There's this React lab at the front that is like green and that's because it's like an experimental that's not real react. They're trying like other things, but you can't change
[02:44:07] what React does very much. It looks like there's a way to optimize select row that the hooks  implementation, like the idiomatic's not doing it, but if you can do it in a state library,  you can do it in vanilla React, is what I'm getting at.
[02:44:20] React is always going to be faster than any state library you had to React. If there's some variation here of 0.01 or whatever, it just means that those libraries did a good job of having low overhead, and they're basically on par, and there's just some variance.
[02:44:37] It's in the same way that no library is faster than vanilla.
[02:44:41] you know, like solid on one benchmark, I think came out faster than vanilla.  And that was kind of like fun, you know, but
[02:44:47] It wasn't real.
[02:44:49] You don't get to improve React's performance by adding a state library.
[02:44:54] Okay?
[02:44:57] And
[02:44:59] The reason that something like Jyotai is going to be more performant than the others is because it's not adding a new thing. It's actually literally using React state.
[02:45:09] Like if you use the change management
[02:45:12] of the framework, it's always going to be faster than introducing another state library. This is a fact.
[02:45:18] This is non-negotiable.  You can make different trade-offs that might average you out better in certain ways, but you cannot intimately improve React's performance.
[02:45:27] You can't just go like, oh, I added reactivity, now it's going to be faster.  No, that's not how this works.
[02:45:32] Um,
[02:45:33] Usually what ends up happening is you take hits in other places.
[02:45:39] I...
[02:45:39] But yeah, I...
[02:45:41] Usually you'll see it here, like the reactive libraries will actually have slightly higher creation overhead.
[02:45:47] and a pen to rose. Like I'm looking at MobX.
[02:45:50] These are higher.
[02:45:51] than Vanilla React.
[02:45:53] Sauravaltios
[02:45:58] Whereas something like...
[02:46:01] Jyotai is almost identical to React on Creation.
[02:46:04] Because it is just using...
[02:46:06] reaction mechanisms.
[02:46:07] This is an important point because people seem to think that state libraries can improve React's performance. They cannot.
[02:46:15] like,
[02:46:15] They literally cannot.
[02:46:18] Okay.
[02:46:28] What about the Millions Project? Well,
[02:46:32] I don't know... it's not... if they...
[02:46:35] they could make a different implementation
[02:46:39] of a VDOM and be
[02:46:41] react compat and be faster. Like, I didn't throw it in here, but you guys, like,
[02:46:45] Preact
[02:46:46] for like a benchmark like this,  you know,  React has some different features  than Preact.  Like they have kind of  split off a bit.  But like,
[02:46:52] Preact.
[02:46:53] Bam.
[02:46:55] it's front,  it's,
[02:46:56] it's ahead of all of these
[02:46:58] Right?
[02:46:59] React Compat
[02:47:00] for the purposes of this benchmark. And it's, it's,
[02:47:04] It's interesting, Preact actually has some hits here. Their select row is actually
[02:47:09] Um...
[02:47:11] Although I guess React Hooks is... yeah.
[02:47:14] Yeah, actually, no, no, Preact's right online.  But look, Preact has a smarter reconciler.  You can see that it swaps rows better.
[02:47:21] were like for lists where react has a really naive one that's why all of these are red
[02:47:25] Like...
[02:47:26] the state management can't
[02:47:28] fix the performance of the underlying reconciler.
[02:47:37] Yes, state management makes it easier to improve your code quality. It doesn't make React faster.
[02:47:48] Yeah, the VOD will be available both places.
[02:47:53] Thank you.
[02:47:57] So...
[02:47:58] Yeah, I just want to point this out. It's not like you couldn't have a faster react. Another framework that has
[02:48:04] React-style compat is Inferno.
[02:48:07] And as soon as I add Inferno in here, stuff starts really shifting down.
[02:48:12] Right.
[02:48:12] Um...
[02:48:14] So it's not a matter of React's API. There's an implementation thing. Inferno and Preact both don't do things that React does, so it's not like a fair comparison. But I want to point out that
[02:48:25] taking a library, adding a state library to it will not improve performance.
[02:48:30] Right?
[02:48:36] The funny thing, someone's mentioning me with context, god that would be painful. It was in here for a while. React Redux, when context API was released, with Redux 6 made the mistake of moving Redux to using the context API and it just tanked on performance. Because context...
[02:48:54] you know, they were using it in a way that they were updating React Zone state and causing re-renders, and it was terrible. They actually
[02:49:00] had to rush out Redux 7.0 to actually fix this problem because they tried to use context. If you use context naively,
[02:49:08] using just like context and causing state re-renders using like thing it is yes it is not
[02:49:15] not good.
[02:49:19] Yeah, yeah, yeah, exactly. These current results are bugging me because these remove rows and preact has it too are  bugged there's a problem with this run. Maybe we shouldn't even look at this run. It's
[02:49:31] It bugs me. Sorry. Let's go...
[02:49:34] official results
[02:49:36] Let's go 104. 104 was better.
[02:49:38] Um...
[02:49:39] Although I lost all my nice filtering, unfortunately. I don't know if I want to go through all that again.
[02:49:44] .
[02:49:44] But yes, uh...
[02:49:46] My...
[02:49:47] Let's do it.
[02:49:49] Because I consider the 105...
[02:49:51] results kind of glitched.
[02:49:54] and
[02:49:55] It's really...
[02:49:56] unfortunate because
[02:49:58] As we all know...
[02:50:02] Okay, and Jyotai, Jy-jy-jy-jyotai.
[02:50:07] This gives us the second point of data, too.  We can see, and we had Preact in there, too, and Inferno.  We can see if Jotai actually...
[02:50:16] uh...
[02:50:19] has repeat results here.
[02:50:22] Yeah.
[02:50:23] Yeah, so here we go.
[02:50:25] Um,
[02:50:27] Jotai is legit...
[02:50:30] Even on this version, they have actually...  It makes me want to review the React implementation, because if Jotai can be faster, React can be faster.
[02:50:39] That's just the...
[02:50:41] the science of it. So where am I? Where am I looking for?
[02:50:45] Inferno.
[02:50:45] I, I,
[02:50:48] - Okay.
[02:50:52] Yeah, there we go. Much better. And actually, I guess Preact actually, that was accurate.
[02:50:57] but
[02:50:58] As I said, it...
[02:51:01] So you were right, it was just Inferno with the glitchy results.
[02:51:04] Um,
[02:51:06] As I said, performance isn't inherent for a benchmark like this, VDOM versus non-VDOM. I would say, like a state library, sometimes it lets you write more performant and better code, and that's why you might want to consider reactivity, but it's not generally for performance.
[02:51:24] Right. So, yeah, Inferno is...
[02:51:27] Someone asked and forgot for an oh yeah I did but it's back now.
[02:51:30] This is a key distinction because...
[02:51:35] Like,
[02:51:36] Just to kind of put it out there.
[02:51:38] Without any fancy state library tricks,
[02:51:43] If you put Inferno on this table,
[02:51:45] You can see as a VDOM,
[02:51:47] It's not
[02:51:49] just faster at select rows and swap rows
[02:51:53] than say all of these.
[02:51:55] but it's faster creation, partial updates.  It's literally faster at...
[02:52:00] everything
[02:52:02] Like this is going to be a very red table.  Yeah.
[02:52:07] if I compare it.
[02:52:09] Right.  Right.
[02:52:10] So...
[02:52:12] This kind of helps us set expectations.
[02:52:15] on
[02:52:17] on what
[02:52:19] we can do when we mix
[02:52:21] Thank you.
[02:52:22] basically
[02:52:23] a state library
[02:52:25] on top
[02:52:26] of a VDOM library.
[02:52:28] Right.
[02:52:29] Um...
[02:52:32] Unless there is a change to the core of the VDOM library,
[02:52:36] And let's see, can I get view in here too?
[02:52:38] Um...
[02:52:43] There's only certain places...
[02:52:45] where
[02:52:46] reactivity actually really helps on performance.
[02:52:50] And those places are going to be partial updates and select rows.
[02:52:54] generally speaking. And the reason for that is not reconciling the whole list.
[02:53:00] Mm-hmm.
[02:53:01] So...
[02:53:03] This is... I wanted to kind of look at this here because I think this is basically...
[02:53:12] Yeah, I wonder which framework they coded this cool data table with.
[02:53:15] any guesses? I'll tell you right now if you haven't looked
[02:53:19] This table was built with React.
[02:53:22] *laughs*
[02:53:25] - Thank you.
[02:53:27] *sniff*
[02:53:28] I mean, there's no denying
[02:53:31] reacts
[02:53:33] influence.
[02:53:36] Right.  I'm almost positive.  It's, yeah, this table is coded with React.  I mean, we could probably look, but...
[02:53:42] I'm
[02:53:43] I'm very...
[02:53:46] Yeah.
[02:53:47] Well...
[02:53:48] Yeah, I mean...
[02:53:51] I forget how we did on this one. We did pretty good on this one, I think.  SSSSSSSS
[02:53:56] 1.4?
[02:53:59] And Inferno? I mean, here's my point earlier.
[02:54:04] The difference between
[02:54:05] fast reactivity, fast VDOM.
[02:54:08] is like
[02:54:09] Is is.
[02:54:11] is not
[02:54:12] Always that big.
[02:54:14] Um...
[02:54:15] They used to test this on a computer where solid's gain was a lot larger, but they've changed the testing setup.  And now these results are actually much, much closer, which...
[02:54:24] Um,
[02:54:25] It's probably a good thing.  Makes my point.
[02:54:28] easier, but
[02:54:30] Okay, so
[02:54:33] Thank you.
[02:54:35] Uh-oh.
[02:54:36] Yeah, now I have finally given all the context.
[02:54:41] So let's talk Preact signals.
[02:54:43] Thank you all for bearing with me. It took me three hours to get to the point where I felt I could talk about this topic.  Okay, so let's get real here.  So...
[02:54:53] I have to admit,
[02:54:56] Um...
[02:54:57] Where was it?
[02:54:59] Um...
[02:55:03] when I first saw it,
[02:55:05] Um...
[02:55:06] Jason teasing some stuff and if I look far enough in my bookmarks, I'll probably find it.
[02:55:12] I just don't know where...  Not Twitter Blue.  Where's... I want...
[02:55:16] bookmarks. Yeah.
[02:55:17] If I go back far enough and my bookmarks are on my stream, I'll probably find where he first...
[02:55:22] Started teasing it.  Yeah, here we go.
[02:55:24] No, that's Million.js. Someone asked me about Million.js.
[02:55:29] I already talked about this previously.  They had some cool ideas.  They're still trying to get their implementation of the JS benchmark down, um...
[02:55:37] This is why it's really dangerous to be like, oh, yeah, 10 times, 11 times faster than react.  Right. If you go in here.
[02:55:44] you'll see that this has been open for over a month now, and they're still kind of working through what it's going to take, right? Because someone, someone ran the test of the draft version, they're like, what's going on here? Millions is
[02:55:56] much slower than React. Why? What's going on?
[02:56:00] and
[02:56:02] Yeah, I mean--
[02:56:04] uh
[02:56:05] what
[02:56:06] This is not the final PR.  They're still working on it.  I think...
[02:56:09] that
[02:56:10] It's always possible to find a single thing to measure.  I do like this benchmark. It's not perfect. It doesn't measure everything  because it has so many different things that it tests.
[02:56:18] But
[02:56:19] This is not the end-all, be-all.  They did have...
[02:56:22] An example where they were doing
[02:56:25] less
[02:56:26] work.
[02:56:27] but I think
[02:56:30] I mean, yeah, maybe I just have to go through my feed.
[02:56:34] This is called me not being prepared and basically last minute deciding I was just going to do a stream today.
[02:56:39] off the seat of my pants, so to speak. I should do more preparation for these things, I feel like, but
[02:56:43] Um...
[02:56:44] What can I do?
[02:56:46] Um...
[02:56:47] Sorry, not what I wanted. I wanted my profile.
[02:56:50] Yeah, if I scroll down far enough, you will see, I mean, I don't want to go all the way back, but you'll see
[02:56:57] They've been hinting this for quite a long time.  And Jason showed this really great graphic where...
[02:57:04] Look where he'd shown like a react and
[02:57:07] Graph
[02:57:08] And, uh...
[02:57:09] And...
[02:57:11] and a, or sorry, like a previous graph and a reactive graph.  And you're just like, where's all the code gone? And
[02:57:19] It comes down to understanding
[02:57:21] Whatever.
[02:57:22] They've done.
[02:57:23] with
[02:57:24] this. So first question people ask: Preact signals, are they like solid signals?  Definitely. Or view. This is a shallow ref in view terms, this is a signal in solid terms.
[02:57:38] Yeah, I mean, I could try scrolling Jason's profile. I want to feel like he's more
[02:57:43] active than that
[02:57:46] But
[02:57:47] Oh, come on.
[02:57:48] I've been having some trouble with Twitter today.
[02:57:53] But maybe...
[02:57:56] Maybe if I scroll here I'll see it.
[02:57:59] I...
[02:58:01] Because you got to figure they did the announcement.  So like he's going to have like a whole bunch of stuff.
[02:58:07] Yeah, I just love all the hinting.  They're just like, it's like, it's coming.
[02:58:12] Um...
[02:58:13] Oh, where was it?
[02:58:15] uh...
[02:58:17] Yeah, here we go. Yeah, this is the one. Thanks for suggesting that.
[02:58:21] Fabio.
[02:58:23] Um, this.
[02:58:24] And you're just like,
[02:58:26] Wow.
[02:58:27] What is going on here? Well, I'm gathering this is some kind of animation test, right? Because that's where fine-grained reactivity just kills it. Because like, you're updating one text node, and you're doing it. But...
[02:58:38] As I've mentioned before, naively just smashing the two together isn't going to get you
[02:58:43] what you want.
[02:58:45] So...
[02:58:45] I think we got to actually look at the solution here.
[02:58:49] and talk about it a little bit because
[02:58:51] Let's get right into it.
[02:58:53] They did an introduction here.  And the cool thing that I saw right away is,  I think this is really cute.  They showed how it's outside of the component first  as like a, I mean, the shots fired.  Yeah.
[02:59:05] Um,
[02:59:06] It's funny, I didn't even realize how big of a deal this was.  Like, I started doing this in my solid demos and stuff  to showcase it, but, like, when I...
[02:59:13] To me, this was just like obvious, but for like, this is like the shots fired.
[02:59:19] Right.
[02:59:20] And, um...
[02:59:23] Yeah.
[02:59:23] state here. It's talking about
[02:59:26] you know the problem of only co-located um data right so
[02:59:30] Banner state, blah, blah, blah, blah, blah, blah. Okay. And then yes,  here's the image again.
[02:59:35] That makes sense.
[02:59:36] bringing signals to preact,
[02:59:38] Um,
[02:59:41] Yeah.  Do do do do.
[02:59:43] So yeah, this is...
[02:59:45] Showing, let me see here.  Have we done it very primitive?  The ergonomic advantage can are third-party things that rely on selectors.  Yeah.  A lot of things require you to wrap it in a hook.  Selectors...
[02:59:55] are really useful in what I call pull-based
[02:59:59] Um,
[03:00:00] reactivity.
[03:00:04] Right.
[03:00:06] Um,
[03:00:09] And then...
[03:00:11] the
[03:00:12] And then essentially, you'll get so we have
[03:00:14] See, there's no wrapper here.  If you've ever used MobX, there's usually like a wrapper to use the value.  You need to be like observer, like a hawk.
[03:00:21] Like I showed you in that image, like there's a reason why this is so ugly.
[03:00:24] In new version of Preact, you don't actually have to worry about this isn't happening to you.  Like if there's any element of that, it's happening under the hood.
[03:00:33] where is it  there is  so
[03:00:36] That's cool.
[03:00:38] so
[03:00:39] At a base level,
[03:00:41] what we have here
[03:00:46] is basically
[03:00:48] a state library that doesn't require any ergonomics
[03:00:52] Um,
[03:00:53] additional ergonomics. And if you have global state,
[03:00:56] you're not actually taking much of a hit from the reactive system  because it just gets created once on the outside, right?
[03:01:02] And then,
[03:01:03] you just read the values as you need to.  And,
[03:01:06] you know,
[03:01:07] if these rappers are
[03:01:10] not expensive, that's the question, how expensive the wrappers are, then you're fine because
[03:01:15] when you read count.value
[03:01:18] you make counter
[03:01:20] subscribe to it essentially.  And when you update it,
[03:01:23] the whole
[03:01:24] component reruns, like the way it always does in React or Preact or whatever.
[03:01:29] and
[03:01:31] You're good.
[03:01:32] Right? Like, you just...
[03:01:35] added some reactive state.
[03:01:37] on top of
[03:01:39] of Preact. So like
[03:01:41] This alone
[03:01:42] Thinking about this,
[03:01:45] as a solution, I immediately go, okay, so this is very much like adding MobX
[03:01:51] like a first party MobX.
[03:01:54] to preact essentially.
[03:01:57] Like that's the level one thinking here.
[03:02:00] from that perspective, I can be like, if this is super optimized,
[03:02:04] This will have very little overhead. It'll just...
[03:02:08] essentially
[03:02:10] give us the ability to now, um,
[03:02:13] uh,
[03:02:18] Like
[03:02:19] let the state management make it easier to write.
[03:02:22] good apps because it's easier to manage the state this way
[03:02:26] and
[03:02:28] while technically it's another system on top,
[03:02:31] Um...
[03:02:32] You know, it's kind of like what we were seeing earlier with React.  It might be a slight overhead overhead.
[03:02:38] over Preact. So like I imagine you can use Preact as normal,
[03:02:43] And then, yeah, I have the full table here, so this is no fun anymore.
[03:02:50] or actually this is the one right here.
[03:02:52] You know, like, you might...
[03:02:55] It might just...
[03:02:56] be very minimal because like
[03:02:58] If I look at something like MobX,
[03:03:00] overreact hooks
[03:03:02] There's like a couple point hit on...
[03:03:05] creation... I guess the creation part was probably the biggest hit.
[03:03:09] So when there's mass creation,
[03:03:11] Um...
[03:03:14] But...
[03:03:14] for the most part,
[03:03:16] it didn't really change much. It just made life a lot easier to use. So that's where my mind sort of comes in. There's basically a minor cost for a huge ergonomic improvement, because now you're not worrying about dependency rays and whatnot.
[03:03:32] you know,
[03:03:33] I have to admit, back in the day when I used React, I used it with Mobile X very, very often. So, like, this is the-- this is-- pre-Hooks was, like,
[03:03:42] This was the react that
[03:03:43] that I was used to, so to speak.  So I think it's really cool to have this built in.
[03:03:48] So...
[03:03:49] But the problem, as I mentioned already, is this
[03:03:53] fundamentally doesn't change
[03:03:56] the performance characteristic of Preact.
[03:04:00] um
[03:04:02] I don't think I'm wrong in saying that.  It doesn't take any kind of
[03:04:06] If anything, this should actually make the performance slightly worse.
[03:04:12] Maybe it's minor like but in theory
[03:04:16] this should not actually make any sort of improvement.  It's just an ergonomic thing.  But then they have this cool thing, and this is what I want to talk about.
[03:04:23] Can we go even faster?
[03:04:26] Feel like we could have stopped here.
[03:04:27] we needed to see how far we could push the Preact integration.
[03:04:38] Thank you.
[03:04:38] Um...
[03:04:43] Thank you.
[03:04:44] So what we've got going on here is they're like, well, what if you don't read the value and you just pass the signal straight through?  And this is a very clever trick.  I've never seen anyone do this.
[03:04:54] What they're suggesting is if the VDOM, I told you the VDOM, if we go back to our silly example here, we're just creating this VDOM. If the VDOM comes across and goes like,
[03:05:04] and you assign something to this VDOM thing right here that we create, like this is a really bad example.  But if we if we add an observable or computed or something to the VDOM,
[03:05:15] essentially. So instead of passing the value because count up value
[03:05:19] Um,
[03:05:20] The way the signal works, I haven't really talked about this much. I kind of glazed over because most of the audience is probably familiar.
[03:05:27] Essentially,
[03:05:29] If
[03:05:30] I think
[03:05:31] The count itself is the signal, and then if you go dot value, you get the value of that signal. So in that case, count dot value is zero. And you can then, like,
[03:05:40] basically assign a new value to the
[03:05:42] It like using equal sign and then that's how you set the value but that alone is
[03:05:48] is not reactive, that's just the value.
[03:05:50] It's the accessing of it.  When you go count.value,  they use a getter,  but it's like my proxy example.  That's the point at which they track...
[03:05:58] Um...
[03:05:59] that it's a subscription. But if you pass it
[03:06:03] But they're not doing auto tracking. If they're tracking a subscription here, it's literally
[03:06:08] on the whole component.
[03:06:09] Because...
[03:06:10] you're accessing it in a place that gets re-rendered over and over again. But they were like, "Well, what happens if we just pass the signal straight to the VDOM?"
[03:06:18] Well, then the VDOM can go, oh, I have a signal here.
[03:06:21] and it can actually do something kind of special.
[03:06:24] Because you might be like, well, how do you mix a VDOM with reactivity?  And I told you about all this recreation stuff.  It's really, really interesting.
[03:06:30] quite awkward.
[03:06:31] Well...
[03:06:32] What you can do...
[03:06:34] Is...
[03:06:35] when you get a VDOM with a signal in it,
[03:06:37] Go.
[03:06:38] Oh.
[03:06:38] because...
[03:06:40] you didn't access the value.
[03:06:42] like this. At that point, the component isn't subscribed
[03:06:46] to
[03:06:47] the change.
[03:06:48] And you have the ability to control it.  So what...
[03:06:51] my understanding, and this is a drastic oversimplification,  is that Preact, when it gets an observable in the VDOM,  just makes a pseudo component.  They just make a little component
[03:07:00] inside
[03:07:01] that component.
[03:07:02] So that little component can be the only thing that updates.
[03:07:05] essentially
[03:07:07] instead of the whole tree. And in so, because
[03:07:11] They might try writing directly to the DOM.  I'm not clear about this,  but generally because you want the representation  to stay in the VDOM,  my suspicion is...
[03:07:19] and we probably want to dig deeper,  is they essentially just make another more granular kind of,
[03:07:25] component-like construct inside that now...
[03:07:29] knows that whenever this count changes,
[03:07:31] update the text.
[03:07:33] And this can still be batched and queued with the rest of the VDOM stuff, I assume.  So it's probably still like a semi-VDOM layer,  but it's like picking the smallest component to re-render  instead of re-rendering the whole tree.
[03:07:44] That
[03:07:45] is
[03:07:46] essentially the mechanism here. And let's see what comments are coming in right now.
[03:07:55] Yes, yes, yeah.
[03:08:03] - Thank you.
[03:08:04] I actually saw the... I did benchmark it.  I actually saw the speed up...
[03:08:07] Um,
[03:08:08] in
[03:08:09] in the Krauss benchmark when I benchmarked it. The problem was I actually hit a memory leak, so I can't, I don't want to publish the results and talk about it because it's, it, it overemphasizes the thing that I've been trying to,
[03:08:23] to emphasize the trade-off is.  But one thing I can say with 100% certainty  was when I ran the JS framework benchmark,
[03:08:31] for Preact.
[03:08:34] -
[03:08:35] We'll look at it in a minute, but not the benchmark, but the implementation.  When I ran it with Preact, I got these numbers here.
[03:08:43] down to inferno levels. Partial?
[03:08:46] went down from 118
[03:08:48] down to about 93.
[03:08:50] Select Row
[03:08:52] went from
[03:08:53] 30?
[03:08:54] down to
[03:08:56] It got down to almost view levels.  It got to 20 point...
[03:09:01] two or something. So essentially both these numbers
[03:09:04] Shot way down.
[03:09:07] What...
[03:09:08] I witnessed was all the other numbers went up. But I think that is largely because of the memory leak, the degree they went up. I think in general, it's what I said, a state library added to
[03:09:21] a VDOM is going to have
[03:09:23] a cost that taxes everything but this little trick
[03:09:28] that we see here actually
[03:09:30] improves
[03:09:32] partial updates in a significant way.
[03:09:36] I think the challenge here for people with this benchmark specifically in terms of expectations is that
[03:09:42] Um...
[03:09:45] is that
[03:09:47] reactivity isn't going to generally improve these other stats.
[03:09:51] So...
[03:09:54] even if it was zero cost,
[03:09:56] it's not going to impact the majority of the things.  So from a Krauss benchmark standpoint, this is probably good for about 5%.
[03:10:05] which in the rankings doesn't really move it
[03:10:08] preact much past view or svelte or whatever.  It's still kind of just bumped up.  So it's a good gain to have.  But what I'm more interested in,  and I can't tell until we fix the memory leak,  is...
[03:10:20] how much of an overhead it is on the rest of this.  Because I think that's going to be part of the deciding thing.  Because I actually implemented benchmark in four different ways.  And I actually want to show that in a minute.  But I'm not quite there yet.  It's actually really quite cool when you start thinking along this.
[03:10:37] Right, so pre-act now surgically updated if you don't. Yes, basically if you pass a signal through or compute it, it knows it's surgically updated, which is really quite cool.
[03:10:47] Um,
[03:10:49] Can I add hyper app?
[03:10:51] Sure, where's HyperApp?
[03:10:53] HyperApp is... it's been a while since I've seen HyperApp. HHHHHHH. Someone wanted me to just... let that in.
[03:11:00] HyperApp, I'm trying to remember, that one's a very small...
[03:11:04] VDOM if I remember, where's HyperApp?
[03:11:06] Yeah, Hyper Apps over here.
[03:11:10] Um...
[03:11:12] Yeah, here's HyperApp. Interesting. But you can tell actually from this that HyperApp is not a small VDOM or innately because these update performances are
[03:11:20] suggest
[03:11:21] that they're doing something
[03:11:22] Most VDOMs kind of look like Preact does or React does.  This suggests the fine-grained updates in PyPRA are actually fairly performant.
[03:11:30] which suggests that they're probably doing something special here.
[03:11:33] Okay.
[03:11:33] So...
[03:11:35] Okay.  Uh...
[03:11:38] Where was I? I was going through the release article.
[03:11:40] But yeah, so this is really cool optimization,  because you can do some stuff.  So let's actually pull out some code for a minute.
[03:11:47] Um,
[03:11:48] because I want to show you, I actually implemented the JS Framework Benchmark.  As I said, I'm not going to show the results here because the memory leak is really
[03:11:55] um unfortunate but the coolest thing about this was i
[03:12:00] didn't copy... See, this Preact one  is a little old. I have to do the dependencies  because I was playing with it. But this is  like...
[03:12:07] class component like
[03:12:09] It was written in
[03:12:11] preact six or something,
[03:12:14] like,
[03:12:14] The...
[03:12:15] Dot es six dot j s. It's telling you how old this is.
[03:12:21] Thank you.
[03:12:22] Thank you.
[03:12:23] Right?
[03:12:25] I mean,
[03:12:28] I've never seen this, right?  Um...
[03:12:33] - Okay.
[03:12:34] But this is just ancient, right?  So this, and then are we binding the stuff?  Yeah, we're binding everything.  This is a really old implementation.  And I was like, man, we didn't even do hooks here,  which is unfortunate.  I updated...
[03:12:47] react to hooks i never bothered doing it for preact at the time i said this is  my main repo this is just like i'm a contributor here so when i went to go make the preact one
[03:12:57] I was like, wait a second.
[03:12:59] What?
[03:13:01] if I could just grab the solid implementation. I literally went to solid, copy pasted it,  and copied it in here. And it was easier to start from solid to do this than from the old  Preact implementation. Which is good because any small performance optimizations I did,  we got to carry over in terms of structure and stuff, like just minor, minor, minor little  things. So I was pretty stoked with that as a baseline.
[03:13:25] Right.
[03:13:26] and
[03:13:27] essentially...
[03:13:29] I did one difference.
[03:13:30] Should we do this globally?
[03:13:32] Let's have some fun. Let's just make the state global. One thing you're going to actually notice in the Preact solution is you can just use this stuff directly here when it's global. But when you use it inside a component, you actually have to call use.
[03:13:45] computed or used signal to let Preact handle it as a hook.
[03:13:50] Because basically it has to be prepared for the potential that the whole component updates.
[03:13:56] or that the
[03:14:00] Uh
[03:14:01] fine-grained thing updates. It needs to handle both scenarios.
[03:14:06] And
[03:14:07] For that reason...
[03:14:09] I was just like, you know what? I don't want to get into a contention argument about what's the most idiomatic way to do it. Everybody puts it in the component.
[03:14:15] I just want to see what the results are.  So I just made it global  because honestly, top level component,  like in a reactive library,  the top level component never runs again anyway.  So like, this is like,
[03:14:24] Potatoes, potatoes, I don't really care.
[03:14:28] All right, later. Sorry. Okay, let's get that out of the way. Um,
[03:14:32] but essentially
[03:14:34] The most naive approach to this is you create a signal for the list,
[03:14:37] create a signal for
[03:14:38] the selected state.
[03:14:41] And then...
[03:14:41] We just update it.  These are the things that, like, how you build the data.  Add. I just appended it.  The thing you notice is that their signals work like solid signals.  They're immutable changes.  So even though this has, like, an assignment type syntax, you don't want to go, like,
[03:14:55] value.push. So we're still actually doing, uh, array spreads here. And, um,
[03:15:02] top level immutable cloning, not deep immutable, but top, well, actually in this case, it's deep immutable.  This is a very simplistic version of it. And then update, I go through and I add a bunch of checks.
[03:15:12] And I
[03:15:14] You know
[03:15:15] These are just array operations done in the mutable way with these signals because the whole list is one signal.
[03:15:22] From there,
[03:15:23] Um...
[03:15:25] I just...
[03:15:25] map over the value. See, now it's dot value instead of whatever. And I just
[03:15:30] it's,
[03:15:31] It's basically
[03:15:33] normal preact from this point. We have a signal triggering the change instead of use state triggering the change and
[03:15:39] And inside the row,
[03:15:41] I just...
[03:15:43] you know, calculated something
[03:15:45] And...
[03:15:46] put it in. So I'm actually not using the optimization in this first version.
[03:15:53] Yeah, yeah. This is a thing that I used to do a lot, and that's why I copied it from my old JS Framework benchmark. I was a CoffeeScript developer and I freaking hated having to write const and var all the time. It just drove me nuts. So I started just doing this thing where I just go const and then just be like, okay, let me do all the variables.
[03:16:14] Um,
[03:16:15] Yeah, probably drives people nuts.
[03:16:16] But...
[03:16:17] I actually don't do this style anymore, but it just made my...  For me, it just...
[03:16:22] got rid of a bunch of noise.
[03:16:24] It was so hard to, you won't, you don't believe how hard it was to move to JavaScript from CoffeeScript.  Like when it was like, just like everything was so minimal.  And then like to move to TypeScript, I mean, like it felt like taking 30 lines and making it 150.  Like that never feels good.  Even if you get all the benefits, you're just like, it's like five times more code.  It was like so brutal.  It's like a gut punch.
[03:16:46] like
[03:16:48] But it's fine. There's a reason to use TypeScript and whatnot. But anyways,
[03:16:54] This approach
[03:16:56] I ran and it barely used reactivity and
[03:17:00] Obviously,
[03:17:01] It was just slightly...
[03:17:03] slower so it's like okay
[03:17:05] What can we do to make things
[03:17:07] more optimal.
[03:17:09] The first thing you can do
[03:17:12] is here in its class name.
[03:17:15] See, this is an expression.
[03:17:18] And...
[03:17:19] If you just pass this expression in, even if I put it in line in here,
[03:17:23] Even if I did this.
[03:17:25] Let's just do that.
[03:17:27] Um,
[03:17:28] Preact is still going to go, "Oh, value change, rerun this component."
[03:17:36] So
[03:17:37] What you do instead,
[03:17:39] is you go use computed.
[03:17:42] And
[03:17:43] Now,
[03:17:47] suddenly
[03:17:50] And you do it from here.
[03:17:55] Now suddenly, essentially,
[03:17:58] our selection, instead of rerunning the component,
[03:18:00] only reruns
[03:18:02] the class name, like the class on the table element.
[03:18:07] Um,
[03:18:08] This is kind of cool, right?
[03:18:10] Um...
[03:18:13] And I was like, OK, I saw the performance gain right away on this one.  The thing is, I was doing everything piecewise, so I wasn't running everything to see the  impact of that, because use computed actually
[03:18:22] slow down the other things because now we're creating computed per row. But it was really kind of cool to, sorry, see,
[03:18:29] the impact here on the performance because I'm going to pull up JS Framework Benchmark. That's the change.
[03:18:35] where suddenly...
[03:18:36] you know, Preax 30 here suddenly starts looking like views 20. All you had to do
[03:18:42] was
[03:18:43] essentially
[03:18:45] Start with signals and then
[03:18:47] Make sure that this...
[03:18:49] is...
[03:18:50] the computer signal in here, right?
[03:18:53] Okay.
[03:18:53] Um...
[03:18:54] So this was kind of cool.
[03:19:00] And then...
[03:19:01] But I was like, can we do better?
[03:19:04] Because the partial updates...
[03:19:05] were still not fast enough.  So I actually, the version that I ended up benchmarking  was actually kind of cool.  I actually used the computer that I did, but I was like,  if you look at this benchmark, it generates a bunch of data.
[03:19:17] And
[03:19:18] We have this one signal. So what I did instead is
[03:19:21] was I created a signal...
[03:19:23] Then this is how solid works in this benchmark to a signal per label.
[03:19:27] in Perot.
[03:19:29] And then...
[03:19:31] Now,
[03:19:33] row.label instead of re-rendering the component when you update every 10th row, like I showed you,
[03:19:38] Here, where is it?
[03:19:40] Not there.
[03:19:43] Where's my local host?
[03:19:47] Yeah.
[03:19:49] actually and we can actually probably run this preact
[03:19:53] Preact signals
[03:19:54] Yeah.
[03:19:56] Essentially, when I updated every 10th row, okay, this is in a broken state.
[03:20:01] Sorry. It's because I've been messing with stuff so much.
[03:20:04] Let's actually...
[03:20:07] Let's rename this one to
[03:20:10] rename main
[03:20:13] Naive
[03:20:16] Well, VS Code is not happy.
[03:20:19] *laughs*
[03:20:20] That was the slowest rename I've ever seen.
[03:20:24] Let's rename that to main.
[03:20:29] And let's...
[03:20:31] npm run build.
[03:20:34] Prod.
[03:20:36] Okay.
[03:20:37] If I did this right...
[03:20:42] Yeah, there we go. We're back.  Okay, so essentially...
[03:20:46] Now,
[03:20:47] when it updates those exclamation marks,
[03:20:50] it can actually do it
[03:20:52] just update the text notes for those individual ones, which is really quite cool.
[03:20:56] Um,
[03:20:57] So this is kind of patterns that I was talking about because
[03:21:01] Um,
[03:21:02] once you kind of get into this zone you can start nesting reactivity and those two changes
[03:21:09] actually significantly improve the performance on two of those benchmarks.
[03:21:13] The challenge is balancing
[03:21:15] that.
[03:21:16] with the new overhead
[03:21:18] of creating
[03:21:20] Um,
[03:21:21] the compute, they use computed
[03:21:23] and creating a new signal per row. And this was a challenging one for Solid. I spent
[03:21:28] so much time optimizing memory profiles
[03:21:33] for reactivity so I could get that kind of performance.  And one of the things that I thought was
[03:21:38] Um...
[03:21:39] really challenging here.
[03:21:41] is that
[03:21:47] this is an interesting zone to be in because...
[03:21:51] I'm trying to think of the best way to phrase this.
[03:21:52] Like...
[03:21:54] In order for Preact,
[03:21:57] to know
[03:21:58] to do the optimization, you have to wrap it.  Bimar was talking earlier about how solid just uses functions  because we didn't want it to have unnecessary wrappers.
[03:22:08] But for this approach to work,
[03:22:10] you actually have to
[03:22:12] both wrap the expression
[03:22:13] and then wrap the pseudo component you're doing you're doing like a you're doing like a double  wrap and now if if i
[03:22:20] Yeah.
[03:22:21] Preact probably has a way to optimize the double step there.
[03:22:25] But this is sort of the interesting thing here because you have to be very deliberate.
[03:22:30] Um,
[03:22:32] in order to do this choice.
[03:22:38] Right.
[03:22:40] So this is kind of like...
[03:22:42] There is a little bit of a trade-off here. Hard to choose what's more important, creation or update. For SSR, creation is what you want. For client-side, it's probably update. Well, it's hard to say. Navigation on the client-side, like a single-page app, is mostly creation. Reacts came into popularity and Vdoms came into popularity because how fast they were at creation. Old...
[03:23:00] Reactor libraries are really bad, like really bad.
[03:23:03] at creation. So there is like an interesting line to follow here.
[03:23:10] Yeah, I mean, I can talk about that in a minute.
[03:23:14] Um...
[03:23:15] But...
[03:23:16] yeah this what's interesting about this actually is that it's a runtime approach with reactivity right um and
[03:23:23] But I think you guys are kind of getting where I'm getting at.
[03:23:28] In general, huge ergonomic improvement.
[03:23:31] And then
[03:23:34] essentially you have this ability to do
[03:23:37] these
[03:23:38] little updates. I think the challenge here actually, looking at this and working through it is,  remember when we were talking about lists and keyed lists?
[03:23:50] This is, I mean, if you go all the way one paradigm versus the other paradigm, you're probably fine.  But we were, where were we? We were talking about keyed lists here. Remember this?
[03:24:01] When you do key with immutable changes in a VDOM,
[03:24:05] you actually dig deeper. When you do ref like you do in a reactive library, you don't want to dig deeper. And these things are kind of
[03:24:11] at odds with each other if you do a hybrid, because if you go deeper, you end up recreating  the component, which means you take on the hit of the reactive overhead if you do it  half and half.
[03:24:23] But,
[03:24:24] If you...
[03:24:25] rely purely on reactivity,
[03:24:27] then
[03:24:29] top-down changes won't ever propagate.
[03:24:33] So like you don't, you kind of got to go one way or the other.
[03:24:36] um and the challenge here is like think of think it's think of how preact
[03:24:42] Maps.
[03:24:43] stuff like
[03:24:45] Think of this. This is a map function. So the second that you
[03:24:50] actually update
[03:24:51] data.value, let's say add an item to a list.
[03:24:54] This is an example of a change.
[03:24:56] that isn't contained.
[03:24:58] in here.
[03:24:59] Right?
[03:25:02] you need to run the reconciler
[03:25:05] And...
[03:25:06] I guess...
[03:25:07] The key to this whole thing is, besides there being a key, is that
[03:25:13] Essentially...
[03:25:17] When
[03:25:18] you hit a row that's unchanged not to recreate all the stuff.
[03:25:23] So which means that
[03:25:24] every component
[03:25:26] that has a subscription now has to have that auto memoizing
[03:25:30] mechanism built on top of it. It's just interesting here, right? Because most frameworks
[03:25:34] that work with reactivity and enforce reactivity have special helpers like solids for component  or directives and stuff they don't just do a simple map because of the difference
[03:25:45] between this behavior
[03:25:47] and
[03:25:48] because you don't want to map over everything.
[03:25:51] essentially every time something changes. You want a smart memoized map.
[03:25:59] but Memorization is not free.
[03:26:01] so
[03:26:03] Yeah, this is a challenging place.
[03:26:07] Do you know what I mean?
[03:26:14] I actually did talk about
[03:26:18] This is a good question.  I've got to chew these.  We'll go back in a second.  I want to finish my thoughts on Preact's signals here.  I think...
[03:26:28] I don't think this is the end of the story here.  I think that people will play with this, and I think they will...
[03:26:36] Like...
[03:26:37] On one hand,
[03:26:38] signals the state library for Preact
[03:26:41] seems like a really awesome MobX thing. And I love this paradigm. I'm super stoked to see people using Preact this way. Preact,
[03:26:49] signals the performance optimization
[03:26:52] I think is going to be a very hard sell.
[03:26:54] Like, I think this is actually, like, we're seeing already these sort of challenges.
[03:27:00] Because you can opt into very specific optimizations, which are nice.
[03:27:03] But then there's other side of the trade-off because the models are actually
[03:27:08] different and views actually
[03:27:11] I think Vue is where the source of the solution is going to come from.  I think...
[03:27:16] If you look at what Vue has done, they've changed their VDOM to actually...
[03:27:21] respect
[03:27:22] reactivity so that they can account
[03:27:25] for these little sort of
[03:27:28] differences in
[03:27:29] in terms of like,
[03:27:31] But the thing is with Vue is they're all in.
[03:27:33] If you don't use reactivity, you're not going to get your updates.  You don't get to play half and half.  And this is a challenging place to be because the value of this is you're like, oh, I'm
[03:27:44] It's like reactivity and all the good stuff, but reacts compat.
[03:27:48] Like we still get to use React the way we always did.
[03:27:51] So...
[03:27:52] I don't know if Preact would follow that, right? Because
[03:27:56] Like...
[03:27:57] having React compat is a big deal. You know, that's the problem. All the rest of us like view
[03:28:04] didn't go that way. They went all in on the reactivity and they came up with their own syntax. No ReactCompat. Solid was like, no, reactivity is a thing.
[03:28:10] No Reaction Path.
[03:28:12] has the ability to
[03:28:14] kind of teeter both lines.
[03:28:16] And I think that's the win. I think the takeaway from this thing is,
[03:28:20] really ergonomic,
[03:28:22] Get to use all your React stuff.
[03:28:24] It's sweet, but...
[03:28:27] This is not a performance thing.
[03:28:31] That's, like, you might be able to, like, update, like, a text node somewhere, but, like, you need to...
[03:28:39] like there's a structural architectural considerations here.  The same reason why ViewVapor is not going to be compatible with View. Like you don't
[03:28:47] You don't get to have it.
[03:28:49] both ways
[03:28:50] Um...
[03:28:52] basically so
[03:28:55] Yeah, I think this is going to be really interesting because the exciting part is there's going to be a whole bunch of new people using reactivity and understanding.
[03:29:03] just how great it is, it feels to to write stuff this way in a sense.
[03:29:08] Vue's been doing this for years, but
[03:29:10] Now,
[03:29:11] there is...
[03:29:12] Um...
[03:29:14] Now it's like in the JSX land. So you got like, some people might have heard solid and they're like, "Oh, pre-acts like this." And you like, it's changing the dialogue. And
[03:29:24] It's interesting because in this world, it's actually React that's the odd man out, if that makes any sense.
[03:29:31] Um,
[03:29:33] Like, there's way more reactive libraries than non-reactive libraries.  In that sense, I feel like we should preserve or protect React from this to a certain extent,  because I want to see them take things as far as they possibly can.  It's weird when the most...
[03:29:45] popular library is actually the odd one out.
[03:29:49] But I don't want
[03:29:52] I want to see where they're going because I want to understand how they can do this stuff completely differently because...
[03:29:58] almost everyone else has kind of come over to
[03:30:00] this side.
[03:30:01] So
[03:30:02] Yeah.
[03:30:05] Right?
[03:30:06] Like...
[03:30:07] Like, this is a very...
[03:30:10] interesting thing. As I said, the whole space is a spectrum. It's a range.
[03:30:16] So I think it's really cool that Preact has actually found a niche that's in a different space.  Because I always look at these as like those...
[03:30:25] to grid
[03:30:27] things where you're like, you're kind of like,
[03:30:30] *bzzz*
[03:30:31] You know what I mean? Like, it's like the quadrant grids and you're like, kind of like seeing how everything positions. And I think Preact has managed to find a way to step out of React Shadow in a really, I think people are going to love this is what I'm trying to say.
[03:30:49] Okay.
[03:30:50] That's my pre-act kind of rant.  As I said, we'll have benchmarks in a few weeks.  I'm...
[03:30:59] I'm pretty confident in what we'll see here.  As I said...
[03:31:04] I know...
[03:31:05] I've seen some stuff and I've got the PR open. I know those are not the final results. Don't go run them locally and then go do some crap with them. That is not how this turns out.
[03:31:15] I've got a sense for this stuff, and I...
[03:31:19] I think it's going to be actually interesting to actually test the different versions  and then figure out like from a micro thing like what the critical point is at which one approach  is better than the other like is the overhead of the computed worth it versus the other is  the nesting worth it or whatever and as this is me as a framework author
[03:31:36] kind of playing around and trying to understand these boundaries.  Because that's the kind of tweaking I did in early days of SOLID to understand
[03:31:44] Why
[03:31:46] components as the boundaries weren't the right
[03:31:49] Boundaries.
[03:31:49] So I'm looking forward to seeing where that goes.
[03:31:57] Yeah, and yeah, this is a really good point. They released a React version, so you can use this in React, too. This is like the perfect Trojan horse.
[03:32:05] I've got to lay it to you straight, kind of going through this stuff because, you know,
[03:32:12] Performance hyping on Twitter without...
[03:32:15] benchmarks to show it
[03:32:16] is one of my pet peeves.
[03:32:18] like i need like don't release something and talk about performance and don't and  release the benchmark so i need to talk about this like always
[03:32:26] Benchworks aren't perfect, but I need to have it.
[03:32:29] But,
[03:32:30] On the other hand, this is so freaking exciting.
[03:32:35] Like, like...
[03:32:38] I'm just picturing
[03:32:40] this like
[03:32:41] A library of the popularity of Preact and so closely in React space, putting this out is such a big message.  And people are going to be trying this stuff and they're going to love it.
[03:32:51] Like, this is just...
[03:32:53] This is so exciting for reactivity and reactive programming.
[03:32:58] Like...
[03:33:00] Take whatever I said about, like, I'm talking about benchmarks and performance gains and little things here, you know, because that's what I do.
[03:33:08] overall story here
[03:33:09] is
[03:33:10] enabling people to
[03:33:12] do like
[03:33:13] author apps in new and different ways.  And I think it's not even that different, but just improving that quality of life.  And I think
[03:33:22] That is such a huge win here.
[03:33:24] that
[03:33:25] the mindset
[03:33:26] the mindshare, the whole thinking is going to evolve because of this.  This is a huge moment in time, if I haven't made that clear.
[03:33:35] I focus on the nitty gritty here because I wanted to understand the technical aspects.
[03:33:40] But.
[03:33:41] This is very exciting.
[03:33:43] And the fact that React
[03:33:45] has this ability.  There's already React state libraries,
[03:33:49] react to...
[03:33:51] MobX or whatever and React solid state. We can use solid and react. Someone asked me earlier if we could inline the like use observer. I'm not sure.
[03:33:59] But if we did the same trick to hijack create element that Preact does here, probably.
[03:34:03] But I mean, or you could just use this Preact library, it's more popular.
[03:34:07] I haven't benchmarked the difference between the reactivity.
[03:34:10] I mean,
[03:34:12] it might not matter. You know, as I said, you're kind of subject to React's own system.  Preact is already so much more performant than React and like,
[03:34:19] a lot of the more typical scenarios that
[03:34:22] Like it's not.
[03:34:23] Bye.
[03:34:24] Who knows? The reactive system overhead might not even be a thing. So I'm...
[03:34:29] Yeah, I mean, if people like solids APIs, we could look at seeing if we could do the same optimization. I don't see why not.
[03:34:36] um you can always use solid with react but
[03:34:41] the fact
[03:34:42] that this is so seamless, you know, with Preact and React with this adapter is really the
[03:34:48] game changer here. It's an ergonomics thing. It's like the perfect Trojan horse. People are going to start using this and then be like,
[03:34:54] Oh.
[03:34:56] you know
[03:34:58] It's interesting. I'm conflicted because I think this is a big win for reactivity and that's a big thing I care about. But on the other hand,
[03:35:07] I want to I guess React doesn't need my help. They're the most popular framework out there, but I want to see where reacts heading because I think
[03:35:15] They have a different model that's innovating in a completely different direction, and I want to see that direction.
[03:35:21] Okay.
[03:35:22] So let's address some of the stuff in chat now.
[03:35:25] Um...
[03:35:28] Can I highlight re-renders so you can see?  OK, first thing I want to talk about here.
[03:35:33] All the systems do pretty much optimal DOM updates.  You're never going to see the re-renders in React or Preact or VDOM.  Even if they do too much work, they don't do too much DOM work.  So like a browser paint flash won't work.  You need like a dev tools or something that hook into the component tree to do this.
[03:35:48] So,
[03:35:49] Yeah, I don't have an easy way of showing the re-renders because by the time it gets to the DOM, it's pretty freaking optimal anyways. It's the other overhead that we're measuring.
[03:35:58] um,
[03:36:04] Okay, let's talk about React for Git and compiler-based approaches for memorizations.
[03:36:11] eat.
[03:36:13] I mean...
[03:36:17] I'm trying to think of the best way to put this one out there because it's
[03:36:20] I actually, if you've been watching any of my recent talks, I've addressed this specific thing.
[03:36:29] Memoization is great, but it doesn't change the fundamental problem.
[03:36:32] Right. You just get a crazier compiler. I mean,
[03:36:36] I guess I haven't shown this on screen and I've been doing so much.
[03:36:41] stuff recently
[03:36:43] Let me see if I can grab one of these. Which one do I want to use?
[03:36:48] Um...
[03:36:49] reactivity unchained
[03:36:51] streamlined
[03:36:53] Okay.
[03:36:54] - Thank you.
[03:36:56] This is from one of my talks, but I want to talk about this one because...
[03:37:00] This is actually from the react forget video that we're talking about here and
[03:37:05] They show this to-do app and they show the exact problem Reterra showed in this article where you have state that updates
[03:37:11] that's not necessarily related to the to do. Here it's just the to do stuff.
[03:37:15] But what he points out in the video
[03:37:18] is that
[03:37:19] Um,
[03:37:19] like once you have like theme and visibility coming through,  you suddenly have,
[03:37:24] React memo and use memo and all these things. This is inherent to a model where you have to rerun the components and
[03:37:31] So...
[03:37:33] all you end up with is a compiler
[03:37:35] that outputs a whole crap load
[03:37:37] of things, you know, all these memcache checks and stuff. So yes, you can,
[03:37:42] You don't...
[03:37:44] This compiler might be able to optimize things a tiny bit further than what React does today, but this is an ergonomics thing.
[03:37:51] This doesn't change how React runs, this just changes
[03:37:55] Um,
[03:37:56] you from having the right to use memos.
[03:37:58] I think it can go a little bit farther than that eventually, but because once you make the change, you no longer can keep the same mental model.
[03:38:05] which was what I was talking about on my last stream.
[03:38:08] Oh.
[03:38:09] So I think this can also be a launching point to other stuff, but
[03:38:14] what I'm getting at is it doesn't fundamentally change this top-down thing. Whereas,
[03:38:18] solids, fine-grained updates that are on component-based, and even preacts little
[03:38:23] trick here for the specific updates does do that. It stops the re-renders.
[03:38:29] It's possible that React can try and figure out a way of zoning in on that.
[03:38:34] But, um...
[03:38:36] The trick is it's got to persist across components and
[03:38:39] Preact's way of using observables or signals or whatever to pass it through is a way to do that cross component.  If you're just using your components state management where like you state it's tied to the component,
[03:38:50] You can't really...
[03:38:53] do this easily.
[03:38:54] Like you...
[03:38:56] you need the change to come from outside of the component in order to make a sub component to do the change on.
[03:39:01] Right?
[03:39:03] I hope that makes sense.
[03:39:05] So...
[03:39:07] While
[03:39:08] It remains to see how this...
[03:39:11] trade-off works with
[03:39:12] pre-act and if they introduce more primitives to allow you to do better fine-grained stuff like
[03:39:18] like solids for component.
[03:39:20] like whether that's in the future or whatnot.
[03:39:24] is still in question.
[03:39:26] the compiler doesn't, at least initially, trying to keep React the way it is,
[03:39:32] doesn't change anything from how React runs.  It just changes how you author it.
[03:39:41] wrapping reminds you how quick behavior splits each  attribute dominant components. Well, yeah,  there is similarities here, but the  whole idea, and this is the whole point of this  stream today, is that
[03:39:52] Components being that
[03:39:55] change has the limits to it. What Preact is doing is very clever because they've found opportunities to optimize by making sub-components.
[03:40:05] I don't know if that can actually solve everything, right?
[03:40:09] It does enough.
[03:40:11] But I don't know, like if
[03:40:13] sub-components could actually...
[03:40:15] work
[03:40:15] everywhere, to have a component, like a nested
[03:40:19] smaller component.
[03:40:21] I realize using the term subcomponent isn't great because I also use that to talk about quick when I say it's subcomponent and the fact that it splits a component to multiple pieces.
[03:40:29] Um,
[03:40:30] But in a sense...
[03:40:31] Reactivity is what
[03:40:33] does that. Quick is doing it to a VDOM,  because Quick has a VDOM, which is why you can  kind of pull the similarities  to...
[03:40:40] what Preact is doing here.
[03:40:42] Whereas...
[03:40:43] You can do it even more
[03:40:45] fine-grained if you wanted to, if you use the reactive graph, essentially.
[03:40:50] Like in a sense it's like,
[03:40:52] Preact is too quick.
[03:40:54] as
[03:40:56] Solid is to Marco.
[03:40:58] six, if that makes sense.  Like, the ability to, like...
[03:41:01] go even more granular.
[03:41:05] So yeah, it's an interesting--
[03:41:08] It's an interesting thought, but yes, the takeaway here is components are too big.
[03:41:14] And end users,
[03:41:17] Components should be kind of for end users to decide how they want to organize their code and conflating code organization with
[03:41:23] performance and
[03:41:25] Runtime execution is a mistake. That's my
[03:41:29] That's my argument.
[03:41:38] And he...
[03:41:39] code without memorization might work better,
[03:41:42] Than with it? Yep, yeah, the same idea.
[03:41:44] Okay, here we go.
[03:41:46] I remember Dan Abramoff saying that React as a pull model versus Salt's push model means they can schedule renders. Do signals break React's pull model?
[03:41:54] Um...
[03:41:59] Yeah, and this is the concern here, right? I showed the quote from Dan earlier, and he's got a bunch of them on Twitter. The concern, because
[03:42:09] React wants the ability to
[03:42:11] re-render concurrent separate trees at any time, like separate versions of the same tree.  They like the ability that they can just plug in the state
[03:42:19] and just pull it out at any point.  Go like, okay, this state gives me this V-DOM.  This state gives me this V-DOM.  This V-DOM.  If you have something that kind of persists,
[03:42:29] Um,
[03:42:30] Because if you think about it, the signals in pre-act, if you nest them, you don't want to be like recreating them necessarily.  Like you want to render less kind of like solid, kind of like that kind of zone.  Yeah.
[03:42:40] It comes all hard to just pull the values and
[03:42:44] That being said, a specialized reactive system could handle this, right?
[03:42:48] I've shown this before.
[03:42:50] that's on previous stream of 1.5 stream, this all has a push-pull system.
[03:42:54] Essentially
[03:42:55] we have the ability to
[03:42:58] basically propagate the change without running it
[03:43:01] and scheduling it in a queue and then running that queue afterwards.
[03:43:05] So that's why it still has concurrent rendering and all that kind of stuff. So in theory,
[03:43:09] You could do the same thing probably with a reactive system for Preact if you wanted to go there.  I mean, it's complicated because we use the reactivity for the actual rendering system.  So like...
[03:43:20] it's all part of the same thing where we still have, there's still this VDOM versus reactivity.
[03:43:26] game going on when you're kind of trying to do both. So,
[03:43:30] In a sense,
[03:43:31] Thank you.
[03:43:32] Yes.
[03:43:34] But then you could achieve it in a different way. But this is why React is not
[03:43:38] going to go this way.
[03:43:40] I think.
[03:43:49] Once you're doing data value, you have to opt out from reactive runtime.  You're back in react mode.  Yeah, it's an interesting...
[03:43:55] it's interesting, right?  Because
[03:43:59] depending on how you opt out, you might actually be worse than being back in React mode because
[03:44:03] If you're not careful, you actually end up remaking the reactivity on every render, which is
[03:44:09] more costly.
[03:44:19] Am I afraid of winning too much?
[03:44:23] *sigh*
[03:44:30] No, I mean...
[03:44:31] Ultimately,
[03:44:33] I think I'm happiest about the fact
[03:44:37] that
[03:44:38] to be part of
[03:44:40] of something where
[03:44:41] I was a catalyst
[03:44:43] in making change.
[03:44:45] Rich's work on compilers is another example of this.
[03:44:48] or even some of the stuff that came out when React first came out.
[03:44:51] I feel like the change we're going through right now
[03:44:54] and
[03:44:55] It's funny because like
[03:44:57] I see it all part of the same thing where obviously every framework sees
[03:45:01] their angle is unique and they're the special ones or whatever, but
[03:45:05] every part of this is part of this
[03:45:07] it's a sign of components
[03:45:09] as runtime
[03:45:11] being not where we want to be.
[03:45:13] Whether you're talking about quick, you know, the quick guys like to talk about generation one, two, three.  I'm not ready yet to say what generation three is.
[03:45:20] But,
[03:45:21] I am very happy.
[03:45:24] that
[03:45:27] My work has been instrumental for people...
[03:45:30] understanding this.
[03:45:32] Um,
[03:45:34] I, that, you know,
[03:45:38] It's, you know, when, you know, stuff like this, like obviously the Preact change had  influence from a lot of other places too.  And like Ember, they've been working on reactivity forever and there's so many things, but it
[03:45:50] The reason the conversation is happening right now has a lot to do with
[03:45:54] with
[03:45:54] shake up that's been going on
[03:45:57] with Solid. And I think that's
[03:45:59] That's incredible.  Um,
[03:46:01] I might be like...
[03:46:03] far on the far edge or on the wing being like, you can take it all the way, but...
[03:46:08] You don't always have to take it all the way.
[03:46:11] I'm just happy to see this mind shift
[03:46:14] where
[03:46:15] people can recognize it. It started for me because I liked the ergonomics. I liked building apps this way.
[03:46:21] And,
[03:46:22] Then it got into benchmarking.
[03:46:24] Right.
[03:46:25] And
[03:46:26] you might think, oh, well,
[03:46:28] Benchmarking, you know, that's something where you can feel
[03:46:31] some sort of
[03:46:33] accomplishment, but
[03:46:35] This is much...
[03:46:37] Greater than that because it leads to
[03:46:41] people adopting, like it changes the way people build apps and like actually
[03:46:46] where they live.
[03:46:47] Solid.
[03:46:48] Solid's been like at the top of the JS framework benchmark for like what?
[03:46:51] almost five years.
[03:46:52] Like,
[03:46:53] Five years ago, no one was talking about it.  Not many people.  Like, that metric was fun, but that's not...
[03:46:59] that's not the end of the, that's not the be all end all, you know what I mean? Like,
[03:47:03] in the grand scheme of things, being the fastest framework for five years,
[03:47:08] doesn't matter.
[03:47:09] having
[03:47:11] at changing the paradigm from where
[03:47:14] how we build apps today to how we build apps tomorrow and being
[03:47:17] part of that, that's amazing.
[03:47:24] Sorry, I'm just still catching up on chat.
[03:47:33] Seb made an off mention of wanting to do something like singles on React. Do you think it's more ergonomic?
[03:47:38] I do. Then Hooks, I do.
[03:47:41] I think
[03:47:41] Thank you.
[03:47:42] - Okay.
[03:47:43] Hooks are really smart, but it's kind of like
[03:47:47] It's kind of like how I think computers are easier than selectors.
[03:47:50] Like push and pull are completely analogous.  You can have like the same thing in a different form.  It's funny because I call our computers memos in solid  because I treat them like that.  Because we're kind of push pull memos is the,
[03:48:02] our derivations are kind of our middle ground where we handle that.
[03:48:05] But...
[03:48:06] Um...
[03:48:08] Yeah, I mean, I don't know.
[03:48:10] I think this has got them thinking or talking, but I don't feel like this is their direction. I
[03:48:16] I want them to stay the course because they're
[03:48:19] they're taking on territory...
[03:48:21] that no one else has.
[03:48:22] And I kind of felt the same thing when I saw Quick.
[03:48:24] There's parts of quick solution, which I think
[03:48:28] are...
[03:48:30] not as important as other parts.
[03:48:32] but if they're not going to explore that part of the solution, no one else is. And I want
[03:48:37] to understand. So I want
[03:48:39] them selfishly
[03:48:41] to keep doing what they're doing because there's so much to learn here.
[03:48:46] if that makes any sense.
[03:48:53] Yeah, this is fair. It's because we're talking about React 2, React 3. I know people are like, we're in React 18. We are going through that kind of change right now. And I think for a long time, Remix is almost an example of it. They built...
[03:49:08] remix on
[03:49:09] Let's call it React 2.0.
[03:49:11] and
[03:49:12] without any thought towards React 3.
[03:49:14] And they actually rebuilt a bunch of the features that React 3 would have.
[03:49:18] Um...
[03:49:19] And
[03:49:20] in a different way, whereas Next was like, OK, React 3 is coming.  This is how we're building it.  And I think it's kind of an interesting thing,
[03:49:26] they could just fork off React at React 2, so to speak,
[03:49:30] and because backwards compatible, whatever, and mostly be fine  until the libraries in the ecosystem change.  But when you are the libraries in the ecosystem, you are the router, you are that.
[03:49:39] you could just make it your own framework. I thought for a while that was like a real potential that Remix would just kind of like
[03:49:44] not actually fork, but effectively fork React. Like essentially just be like,
[03:49:50] We just stopped at React at this point in time because we don't believe in suspense.  That's what their message was.  Basically, anything that was new in React, they're just like, we're skeptical of it.  It's changed now, and they support suspense and streaming and all that stuff.  And they're talking about server components.  But for the longest time, Remix was like, that's all unnecessary.
[03:50:08] we built our own transitions, we built our
[03:50:11] own stuff. You don't
[03:50:13] you know
[03:50:14] And I seriously thought they were going to fork, so to speak.  So...
[03:50:19] Yeah, it's interesting because React's going to be a competitor with itself.
[03:50:24] Kind of like Angular 2 was a competitor with Angular 1.  I do feel like we're entering like everything's a new framework land.
[03:50:39] It is 86 in our house right now. Yes, I am dying because it's even hotter in here.
[03:50:45] *sigh*
[03:50:47] That's my wife.
[03:50:52] Someone asking about primitives.  You've got to see, we are working on solid area.
[03:50:57] I don't know if our Hope UI has good...
[03:51:00] Um,
[03:51:01] Good.
[03:51:02] how good the accessibility is on it.  But I do know that Devin's actually in our Discord...
[03:51:09] chatting with people and we're, we've been working very closely with him to get, um,
[03:51:14] kind of a port of the React area library.
[03:51:18] Okay, I haven't read this, but I'm just going to put it up because Mabel says great stuff.  So let's see how I react to this.  Thought.  In a universe where we actually manage to automatically and predictably memo everything, you still have to...
[03:51:28] to do top-down...
[03:51:29] top to bottom renders, right? With a reactive system, you still only have renders that leave  nodes and skip parents intently.
[03:51:36] Yes, yeah, yeah, this is talking about what I was talking about the compiler, right? I mean,
[03:51:42] It's such a weird blend when you go super far down this path because...
[03:51:46] Marco.
[03:51:48] actually
[03:51:49] we've kind of gone both ways, like teetering this line,  because it is a very small difference between writing all the code and wiring it so that it like...
[03:51:57] just runs like
[03:51:59] fine-grained.
[03:52:00] and that it chews and schedules sort of like a reactive runtime does.  Um,
[03:52:05] But generally speaking,
[03:52:08] Memoization...
[03:52:09] or the need for memoization suggests because you rerun stuff that's  unnecessary and that it's coarser grained and that it's,
[03:52:16] inherent to diffing.
[03:52:17] And as long as that's your model,
[03:52:19] then that's where you are no matter how much you do.
[03:52:24] My whole premise here is that
[03:52:27] Diffing
[03:52:28] It is...
[03:52:29] Diffing...
[03:52:30] There might be cases for diffing.
[03:52:33] Because you want, because of a specific optimization, but generally speaking, diffing isn't needed.
[03:52:38] My whole premise is...
[03:52:39] is essentially that
[03:52:41] it should be possible that anything you could diff, you could do by not diffing.
[03:52:46] It might be more complicated, we have to figure out how to model it, but
[03:52:49] Thus, there's always a way to make something more performant than the diffing solution. That's like the premise here from a...
[03:52:58] theoretical, academic standpoint.
[03:53:09] Yeah, share the love, yeah.
[03:53:12] Everything...
[03:53:13] Gets better.
[03:53:27] Mm-hmm. Have I caught up to chat finally?
[03:53:30] Gotta drink some water. So hot.
[03:53:35] Thank you.
[03:53:35] Thank you.
[03:53:38] - Interesting.
[03:53:39] - The President of the United States has been in the United States.
[03:53:43] Thank you.
[03:53:44] Interesting.
[03:53:46] Okay, so maybe that whole area, I can see why you'd want to do this.  If you want to make your library work and not just react,
[03:53:53] I think this was actually kind of a...
[03:53:56] thing, because when solid came out
[03:53:58] I talked to Daishi a little bit and he was like,
[03:54:00] so how do we integrate Jotai with it?  And I was just like,
[03:54:04] You...
[03:54:05] And he kept on looking, and then he's, like, trying to come up with it,  and he's, like, I can't figure out how to...  Like, we couldn't figure out how to integrate it.  Like, Zastand or...
[03:54:15] Um...
[03:54:18] What's the other one? Redux was no problem.
[03:54:21] ...
[03:54:21] MobX took a little bit of mapping thing, but we actually have an external source API in Solid,  where you can actually take any reactive system. In fact, we should do this.  We could take Preact signals and actually
[03:54:32] use them directly in Solid.jsx.
[03:54:35] because we have a way of taking
[03:54:37] any reactive system that's fine grained,  like views or solids or,  or preacts and actually using them,
[03:54:44] natively
[03:54:45] Inside our templates. It's really cool. No wrappers or anything you just you
[03:54:49] write up the code and then you can just go like import signal, use it, and it will work naturally
[03:54:56] as is using Preact signals.  I think that would be a fun thing to do.
[03:55:00] But Jyotai was specifically difficult because they weren't a typical fine-grained system.
[03:55:07] And they weren't Zustan.  They just...  They had...  Their system is like a...
[03:55:10] set up to be like, write the thing.
[03:55:13] you know, whether it was React State or whatever.
[03:55:17] Solid had no components to rerun.  So it just didn't make sense.  It was interesting, though, because he actually did a...
[03:55:23] Um...
[03:55:24] an experiment where he tried to make a complete non-VDOM renderer based on top of it, and he got it working. But yeah, the performance was just
[03:55:32] Terrible it was very inefficient, but it was really cool to see him play with that after solid came out  I you know just kind of he's like oh
[03:55:39] Maybe we don't need React. Joe, tie the framework.
[03:55:43] So, yeah, it's interesting.
[03:55:45] It's definitely interesting.
[03:55:50] Okay, yeah.
[03:55:51] Yeah, I mean...
[03:55:52] It...
[03:55:53] Currently, each framework has its own solution. Yeah, I mean, there's an easy solution. We should just stick them all in a benchmark and which everyone's the fastest wins.
[03:56:04] Sorry.  I told that to...
[03:56:10] Uh...
[03:56:12] Guys in ember when they're talking about star beam because I put so solid isn't actually the fastest reactive system. There's actually correct  There's actually criteria that are important for rendering the way solid renders that I actually affect the propagation because solid is a reactive renderer  There's like a slightly more consideration on terms of execution than you find in like a simple you quick, you know 50 line reactive implementation  so like
[03:56:36] I can't even though I made MobX JSX and Vue JSX. I don't know if you get
[03:56:40] people remember this or unaware of this I actually
[03:56:43] Took...
[03:56:44] solids render and just plugged in that different reactivity in it.
[03:56:47] I'm
[03:56:48] Now that Preact has what it has, I should do that, that might be fun. We could see
[03:56:53] because I told you about how solid can take any reactive system, but that version still uses solid to trigger change. It's a little bit less efficient.
[03:57:01] We can just...
[03:57:03] take Preact Reactivity and stick it straight into Solid's renderer without Solid in the middle, and we could see how performant it is.
[03:57:10] Um,
[03:57:11] But yeah, it's difficult.  It's not just APIs.  Like I sometimes joke,  like I made an example  where I called it view-like  where I wrapped solid in views APIs.  So people could just like
[03:57:21] use view syntax if they wanted to.
[03:57:25] On some levels, the changes are superficial, but actually deeper down, there's actually execution considerations, slight variations on the push-pull, and some of those are actually really important to Solid on how it renders.  It's like part of the requirements. Solid has features like its reactive system handles concurrent rendering.
[03:57:43] Like, it actually...
[03:57:44] It's part of it. It can actually...
[03:57:47] It's the thing that suspends.
[03:57:50] So like...
[03:57:52] Yeah, I'm...
[03:57:54] There's a while ago where someone's like, "Oh, don't use a framework. Put it in a reactive library." And then you can just switch which renderer you want. You can suddenly go between view and...
[03:58:07] React or, you know, Mithril.  Love Mithril.  And just...
[03:58:11] And just like...
[03:58:12] take or lit and just take your reactivity and that's your app and then you can just change a  renderer as renderers change over time and i kind of laughed at the thought for a minute i'm like  you guys just you just replaced what the framework was
[03:58:24] the...
[03:58:25] you've made the state library the framework instead of the view library. Like, that's the piece that you won't be able to get rid of. Like, that's, you're locked in. They were trying to say that they weren't locked into a framework, but I'm like, no, you're locked into your reactive system.
[03:58:37] Ultimately, I think that's a nicer place to be to a certain degree.
[03:58:42] except for the fact that we talked about today is the change management of the framework will always be more optimal than the state management that you add on top of it.
[03:58:50] Always.
[03:58:52] So...
[03:58:53] at a certain point
[03:58:55] for all the portability here, it collapses.  And...
[03:58:58] think
[03:59:00] that's actually
[03:59:03] what we should be thinking about or whatnot, because...
[03:59:09] Okay.
[03:59:09] As much as I've liked to say like,
[03:59:13] Yeah, let's all use the same solution.  Like, I tried to do that with my renderer with DOM expressions.  In the end...
[03:59:20] when you're all trying to do the same thing,
[03:59:22] exactly the same thing, like that's the goal.
[03:59:24] you might end up with a single standard, like a single thing. Like, solid is the best DOM expression library.
[03:59:31] That's an example of it.
[03:59:32] Astro is the best, or Salt is the best Astro Island.  That's an example of it.  Okay.  Okay.
[03:59:36] Kidding about that.
[03:59:37] Sort of.
[03:59:37] But...
[03:59:39] You know what I mean?
[03:59:43] And what ultimately ends up is you actually get other fracturing where they're like, okay, you took this general solution.  Now it's actually become a specific solution because it's tailored to a specific need.  And that's the way you're attacking it.  And it's the obvious choice.  Something else will fork out and be like, no.
[03:59:59] standardized
[04:00:00] That refinement process is a good process.
[04:00:02] but it also leads to just more things to fork out.
[04:00:04] fork out because something else becomes important that that
[04:00:08] solution.
[04:00:09] didn't take a...
[04:00:10] into consideration. And as I said, the wrapper becomes the framework at that point.
[04:00:15] you've just changed what the framework is.
[04:00:22] Oh, yeah, sorry. You actually said the argument that people make and
[04:00:26] Yeah, okay. That's my answer to it.
[04:00:32] What's your general thoughts on types of learning? Is ReactModal the best or only way to accomplish it?
[04:00:36] Is it the best way?
[04:00:37] Maybe. Is it the only way? Definitely not. I mean, we have time slicing in solid. I've shown it how it's possible. I did it on stream, unfortunately. And it's such a funny stream, because I'm sitting here on my computer, and everything looks like really smooth. And I'm like, so proud and like, like, like, it's one of those smug moments, I have to admit, because Paul Henschel kept on being like, Oh, you just need a VDOM. And Dan, and everyone just keeps on going, Oh, you need a VDOM. And I'm like,
[04:01:00] Ha ha ha ha ha
[04:01:02] I watched the stream back
[04:01:04] and the video chops, like the way I'm screen recording, not using OBS or whatever, couldn't keep up with the animations and it all looks choppy. So I'm sitting there acting all smug and being like smooth as butter. And like the video is just like the worst like choppy bit and it's kind of embarrassing. But...
[04:01:23] I
[04:01:24] I think that...
[04:01:26] React has a good way of approaching it. I do not think it is the only way. However,
[04:01:30] I don't think you can just jam reactivity into React's way and be like, it worked.  I think you have to stay true to your model to find your way of modeling that problem.
[04:01:39] So,
[04:01:40] It's not
[04:01:41] Like...
[04:01:42] the only way but the other way is going to be quite different
[04:01:52] Yeah.
[04:01:54] Jotai JSX. Yeah, this is the experiment I was talking about where he's making his own framework.
[04:02:06] Are there reactivity benchmarks anywhere?  Great question.  There's a few.  The ones I use, I have...
[04:02:13] I use different ones and they all show me different things, except for that Cairo is the fastest...
[04:02:19] reactive system
[04:02:21] that exists.
[04:02:22] K-A-I-R.
[04:02:24] But essentially, Solid has a reactive benchmark in our repo, CellX has one as well, and Cairo has one. And I use those three.
[04:02:34] to do the benchmarks.  But each one has slightly different
[04:02:40] characteristics like selects doesn't work in most of our benchmarks because selects has a certain async element to it, which kind of cheats it.
[04:02:46] Um...
[04:02:48] So we can't use the benchmark for most things, even though it's one of the fastest reactive libraries. The Celex benchmark is just like a big mess of jumbles. So I don't even know sometimes what to make of it. But it's good because I can always see if I make a regression. So that's why I use that one. And then the Cairo benchmark is really cool because it has a whole bunch of different shapes of reactive graph propagation and we test it. So yeah, I do...
[04:03:12] a decent amount of reactivity thing. I know solid's not the fastest and I actually, there's a bunch of optimizations that I left on the table because it made the code size larger and I was just like, you're never going to see this in real thing. Like, if you're, like, if you're not going to see it in something like the JS Framework benchmark, you're probably never going to actually see it. Like,
[04:03:27] There's reactivity overhead.
[04:03:30] there's DOM overhead and then there's like end user code.
[04:03:33] And
[04:03:34] The thing is...
[04:03:35] The JS Framework benchmark will show you
[04:03:38] DOM overhead
[04:03:40] because it's a huge amount of DOM, but it basically uses
[04:03:45] like slowdowns to amplify the framework overhead, which would be the reactive overhead.
[04:03:50] Um,
[04:03:51] If you're...
[04:03:53] If the...
[04:03:54] If...
[04:03:54] Your reactive overhead isn't overcoming the DOM overhead. I don't
[04:03:58] like you're not going to see it and it's not going to it's not going to matter reactive benchmarks
[04:04:03] It's very easy to be like, oh, this system's like--
[04:04:06] 30, 50, 100 times faster and have no impact at all real world.
[04:04:11] for most things.
[04:04:12] Because it's not...
[04:04:14] it's not enough to show up on the DOM overhead.
[04:04:17] Finally, in the end user code, I mean, that's the constant between all of this. And the only benefit
[04:04:23] the biggest benefit you get of reactivity is making that
[04:04:26] stuff.
[04:04:26] fine-grained. You're basically limiting the scope of what the end user
[04:04:31] can impact the performance of the app.  By going with reactivity, you're like, okay, when you, when they write the code all in  like separate effects or memos, you're like, okay, only that piece runs when they do some  stupid expensive thing.
[04:04:43] Whereas I think with a VDOM,
[04:04:45] you do that and you're like, oh, crap, you re-render hell.  Like, it re-renders 10 times.  Like...
[04:04:50] The challenge is...
[04:04:53] that
[04:04:54] a VDOM re-render is not very expensive.  So I don't know how to draw this in a graph,  but like if you, it's like, it's like, how should I put it?  Let's get into ScalaDraw one last time.
[04:05:04] Like if you have levels of how much you can
[04:05:07] Um,
[04:05:08] mess things up.
[04:05:11] Um...
[04:05:14] Like, uh...
[04:05:15] Like, I don't know how to draw this as a graph. Like, it feels like I want to do something like this.
[04:05:21] Um...
[04:05:23] This is impromptu.
[04:05:25] I'm just thinking here, but if you have like
[04:05:28] If your graph here is like...
[04:05:34] Um...
[04:05:41] Let's figure this out.
[04:05:48] You messed up, I want to say.  Like...
[04:05:51] I'm
[04:05:52] There's basically different tolerances.
[04:05:55] From like, I don't know if I, I might need to rethink of the visual for this one here.
[04:06:02] because
[04:06:03] essentially...
[04:06:05] - Thank you.
[04:06:06] With a VDOM, there's like...
[04:06:08] There's like there's
[04:06:10] there's this kind of like,
[04:06:12] Yeah, I guess the other axis is...
[04:06:14] This is the degree of how much you messed up.
[04:06:16] And this is the degree of like--
[04:06:18] impact.
[04:06:21] of that mess up, okay?
[04:06:22] So...
[04:06:24] Like...
[04:06:24] -
[04:06:27] You...
[04:06:29] Yeah.
[04:06:29] Like
[04:06:32] Alright. Not for kids, sorry.
[04:06:39] Like...
[04:06:40] Maybe I shouldn't write that in writing.  But...
[04:06:46] Like,
[04:06:48] When you take an approach like...
[04:06:51] Um...
[04:06:52] With a VDOM?
[04:06:56] Thank you.
[04:06:58] and
[04:06:59] Oh, yeah. Thanks, Marvin. I am wrapping up here. You haven't really missed anything, but thank you for joining today.
[04:07:05] Um,
[04:07:07] If you go with a VDOM...
[04:07:11] And you talk about impact as being how terrible things are.
[04:07:14] It kind of looks like this.
[04:07:15] You...
[04:07:16] Oh, can I draw?
[04:07:18] Can I draw?
[04:07:22] you
[04:07:23] You get...
[04:07:24] pretty steep.
[04:07:26] pretty fast.
[04:07:30] And then
[04:07:33] at a certain point
[04:07:35] the VDOM just kind of
[04:07:37] Oh.
[04:07:38] God, my drawing is terrible.
[04:07:41] At a certain point the VDOM kind of
[04:07:44] Levels it for you kind of like that
[04:07:46] So this is our...
[04:07:48] V-DOM.
[04:07:55] Thank you.
[04:07:56] With reactivity...
[04:07:58] It's kind of like,
[04:07:59] It's kind of like this. It's like...
[04:08:03] You're like smooth cruising through here.
[04:08:07] Right?
[04:08:08] And then...
[04:08:11] Like...
[04:08:12] Even
[04:08:13] when you mess up
[04:08:15] it still stays kind of linear.
[04:08:18] and then it suddenly does this.
[04:08:21] Like,
[04:08:21] It's almost like a shelf.  It's almost like...
[04:08:24] My free drawing is no good.
[04:08:27] It's suddenly like...
[04:08:31] And when I say, I mean like,
[04:08:33] remix off the end of
[04:08:36] of...
[04:08:38] Zach's eleventy graph this
[04:08:40] Like, I mean, like...
[04:08:42] This is still going
[04:08:44] here. Like, it's...
[04:08:49] This is sort of...
[04:08:52] This is sort of the difference between these approaches.
[04:08:57] Like there, there is no safety net.
[04:09:00] and you hit it here on a reactive library, it's like you... it's like it's suddenly exponentialed  off and then you have fallen off a cliff. A vDOM will never let you fall off the cliff.
[04:09:13] Am I trying time slicing?
[04:09:15] Right.
[04:09:17] -
[04:09:21] VDOM will never let you fall off the cliff.
[04:09:23] It'll just...
[04:09:26] It'll just basically...
[04:09:29] kind of eventually slow the bleeding.
[04:09:37] So...
[04:09:37] I do think it's important to note because usually what happens with reactivity is you start in a good place and you're like, sweet, this is so much faster, so much better.
[04:09:46] blah, blah, blah. My components aren't re-rendering 10 billion times. And you do some stuff and you  kind of like messed it up a little bit and who cares. And then you get to a point and maybe this  line's like a little bit sooner than I drew here.
[04:09:56] Like a little bit more over this way.
[04:09:58] You get to a certain point and then it's like,
[04:10:00] BAM! You're like, "Holy shit, what happened to my app?"
[04:10:03] It's just...
[04:10:04] It's done like.
[04:10:06] And
[04:10:08] It was one thing where you just completely messed it up, and now your whole app is doing crazy re-renders.
[04:10:16] My whole work...
[04:10:18] What is the x-axis?
[04:10:19] how badly you screwed up.
[04:10:25] No, it doesn't matter because reactivity doesn't scale...
[04:10:29] the same way. It actually scales really, really well.
[04:10:31] which is the thing because it's all modular. It's about how badly you screw up.
[04:10:38] So my whole work was solid.
[04:10:41] if you want to understand what I do daily is
[04:10:45] this arrow pointing here, pushing the stuff this way,
[04:10:48] like,
[04:10:49] Two hands.
[04:10:51] This is Ryan right here pushing that line back.  I do everything in my power
[04:10:57] to push that line further back.
[04:10:59] Because in knockout days,
[04:11:01] That line used to be like here.
[04:11:03] MobX.
[04:11:05] move the line this way quite a bit.
[04:11:07] Solid's moving the line this way.
[04:11:09] But this is a reality of it.
[04:11:12] It's always easier to just be like, oh, okay, I got my VDOM safety net.
[04:11:17] But
[04:11:18] The--
[04:11:18] Until I could push this line this far, this is why people weren't talking about this because
[04:11:23] At a certain point in the past,
[04:11:25] It kind of felt like
[04:11:27] The wall for reactivity was right here.
[04:11:29] Like you basically, the second you messed up,
[04:11:32] upper even semi like things you didn't even have to mess up for things to mess up
[04:11:36] Like like that was the feeling with reactivity especially with his magic and all that stuff so I
[04:11:42] All I've been doing is pushing this line back.
[04:11:46] and
[04:11:47] So that's kind of like a way of looking at my work.
[04:11:52] Thank you.
[04:11:55] Yeah, impact of making mistakes. Yeah.
[04:11:59] Yeah, because like, to be fair, like,
[04:12:02] When I say you messed up, I mean you
[04:12:06] you
[04:12:07] It should be more like...
[04:12:08] You really...
[04:12:11] Messed up.
[04:12:12] And like
[04:12:13] here this could be like
[04:12:16] You...
[04:12:17] Made...
[04:12:19] A mistake.
[04:12:22] Like...
[04:12:24] *cough*
[04:12:28] The thing is, I find reactive libraries, because of how modularized the change are, they're more forgiving.
[04:12:35] Until.
[04:12:39] they're more forgiving until they're not.
[04:12:48] Time to infinite loop and knockout is a few hours. That's a good metric.
[04:12:59] Yeah, but see, the thing is, forgetting a function call in solid for the most part just means it doesn't update.
[04:13:06] You screwed up.
[04:13:08] but it didn't impact your performance it just didn't work
[04:13:11] Like, that's why there's so much guards.  But picture...
[04:13:14] An example of this is Solid's Components on Track.
[04:13:17] Okay.
[04:13:19] Let me show you via code when I'm talking about...
[04:13:22] Picture an expression in JSX like this, okay?
[04:13:25] where it's like condition,
[04:13:32] And then
[04:13:33] expensive component, which is funny because all its components aren't expensive, but let's pretend it's an expensive component.
[04:13:41] Otherwise...
[04:13:43] No, okay?
[04:13:46] And this expensive component
[04:13:48] Take some props, okay?
[04:13:50] Now,
[04:13:51] As anyone who's followed me knows that this podcast,
[04:13:56] This thing gets basically transformed into create effect.
[04:14:05] And
[04:14:06] essentially
[04:14:10] I mean...
[04:14:11] -
[04:14:14] this, right?
[04:14:16] And instead of this,
[04:14:17] We're just going to do this.
[04:14:20] In this case, we can just pass the prop straight through.
[04:14:23] That's why I did a spread, right?
[04:14:24] It turns into this.
[04:14:25] Okay?
[04:14:27] But...
[04:14:27] Thank you.
[04:14:28] I often say that solids components are just a function, but there is one key difference. We untrack our components, and this is why.
[04:14:35] Because...
[04:14:36] If someone
[04:14:38] in here, in function,
[04:14:40] expensive component.
[04:14:42] went,
[04:14:43] Ooh, I need this.
[04:14:45] Or not this, I need
[04:14:46] some value and I need
[04:14:48] another value.
[04:14:52] Right?
[04:14:53] Someone did this and then they're like, yeah,
[04:14:56] Do stuff.
[04:14:58] with value, another value.
[04:15:00] Thank you.
[04:15:02] Do you see the problem?
[04:15:04] The problem is...
[04:15:06] If solid didn't untrack,
[04:15:08] This destructure, right now in solid, this destructure means nothing's reactive. This never updates again.
[04:15:14] But if Solid didn't untrack,
[04:15:16] this destructure
[04:15:18] would trigger
[04:15:20] this effect, the parent effect,
[04:15:23] which would cause...
[04:15:26] the component to re-render every time
[04:15:30] Like essentially if value or another value changed,
[04:15:33] It would redo...
[04:15:35] all the expensive stuff.
[04:15:38] Every time.
[04:15:39] Because...
[04:15:40] essentially
[04:15:44] we're registering these with the parent effect.
[04:15:48] So in solid we untrack. So when you try and access something outside of reactivity, it's like, that's not reactive, you messed up.
[04:15:56] But if we weren't careful to do that,
[04:15:58] you could do some pretty terrible stuff because you could kind of butterfly effect because I mean what if this effect
[04:16:05] red stuff up and like, like, it's possible
[04:16:09] to actually like redraw huge portions of your component tree if you don't guard yourself.
[04:16:14] I did an incredible amount of work to make sure you don't screw up.
[04:16:18] but Knockout did not have these guards. And you do something wrong and it'd be like, "Oh,
[04:16:22] It looked like it was working, but you're actually recreating all the DOM nodes in front of you multiple times sometimes.  It was kind of crazy.
[04:16:42] But yeah, I want to be very clear about
[04:16:44] This is not a scale thing. Theo had a very similar drawing where he's talking about cliffs of scale. This is not a scale thing because
[04:16:52] Um,
[04:16:53] uh,
[04:16:55] or it's not directly a scale thing, because
[04:16:59] This is about how much things are screwed up and the thing is, if you do a bunch of small screw-ups, they'll be relatively...
[04:17:08] isolated in a reactive system where they aren't
[04:17:10] in
[04:17:11] in, in, um,
[04:17:14] in a
[04:17:15] in a VDOM system. So I actually think the scale is  good. It's just like
[04:17:20] Yeah, it's one of the... Yeah, anyway.
[04:17:33] Yeah, we actually did talk about this for a bit, for about an hour ago in the stream, I guess.
[04:17:41] Basically, it's a good way of making a...
[04:17:46] date management library feel first party in a VDOM library, which is really incredible.  That's kind of the takeaway. It was a little different than solid because solid is a state  library that happens to render.
[04:17:56] So it's slightly different.  It means that
[04:17:59] For Preact, this is mostly about ergonomics and making things easier to use and feel nice  and letting people write better code. And in Solid's case, it's very much...
[04:18:10] It's thing. It's like it's a
[04:18:12] its existence, it's what makes solid what it is, gives it all its performance, does everything.
[04:18:17] similar looking, very different when it comes to how they actually operate.
[04:18:27] Yeah, yeah. I'd rather render too often than render too little, but you know me. Yeah, yeah. Yeah. But this is the challenge, right?
[04:18:37] uh,
[04:18:38] rendering too often
[04:18:39] without a VDOM safety net or a diffing mechanism is actually a death sentence, like a much worse death sentence.
[04:18:45] the VDOMs. So, I mean...
[04:18:48] I just understand this graph because
[04:18:51] when you're living,
[04:18:53] at every point until you get towards here.
[04:18:57] you're just in a so much better place. And this isn't just an
[04:19:00] again, easiness or a scale thing. This is like
[04:19:04] this is,
[04:19:05] Yeah, I mean
[04:19:07] There might be a factor here, kind of like a failure factor.  Like if you've ever done failure stuff, like I'm an engineer by trade, and you basically  have to do a bunch of math to figure out what the rate of failure is.
[04:19:20] It's not as linear as you'd expect because
[04:19:24] Like...
[04:19:24] It's often compounding.
[04:19:26] And you end up using like, you know,
[04:19:29] Inverses for doing the statistics to figure out the numbers.
[04:19:32] I feel like you could make
[04:19:34] Maybe that argument here with enough independent failures, you can cause the whole thing to go down.
[04:19:40] Um,
[04:19:41] And that's only at scale, that's only a projection of that math.
[04:19:44] But I--
[04:19:46] I mean at that point
[04:19:51] Like, I don't know.  I feel like...
[04:19:54] the whole time that's happening, you're watching your VDOM app get slower and slower and slower. And in Solid's case,
[04:20:00] The fix might be just to fix one
[04:20:03] Point.
[04:20:04] in the puzzle,  like just...
[04:20:05] Fixed.
[04:20:06] those points. I mean,
[04:20:07] Yeah.
[04:20:09] Yeah, anyway.
[04:20:12] Is there a solid alternative to React Native?
[04:20:15] People are playing with some stuff on top of NativeScript, and actually even on top of React Native.  I don't know what the state of that project is, honestly. I haven't kept up with it.
[04:20:22] I know there's experimentation, but I can't say like here's the docs.  There's nothing that far along.  I think...
[04:20:30] Yeah, I think it's going to be a bit...  We just need...
[04:20:33] This is one of those chicken and the egg catch-22s. We just need more investment in the ecosystem. And as we prove ourselves in each area, it will happen, but it just takes time.
[04:20:44] My focus has been on...
[04:20:45] kind of core web foundations, SSR and that stuff. So I haven't really looked too far into that, but one day.
[04:20:57] Yeah, I actually...
[04:20:58] think these statements are both true.
[04:21:00] forces you to fix your code when it breaks.  So if you do something really bad,
[04:21:04] and is strictly better in the meantime.
[04:21:05] Yeah, that's my position.
[04:21:09] Solid puns write themselves.
[04:21:11] Yes.
[04:21:12] Solid alternative. Yeah, you guys are good. I don't any any more questions today. Um, this was a lot  This is basically what I wanted to do. I'm streaming again tomorrow and we're gonna get into like a
[04:21:22] language stuff, which isn't always my favorite topic, but I think it's actually really interesting  because...
[04:21:27] Um,
[04:21:28] Like,
[04:21:30] A lot of work goes there. I try and dodge this with solid all the time because I see how much effort goes into these things and it's like,
[04:21:36] God, do I want to spend like months working on TypeScript language servers and all that stuff?  But if you want to understand just how hard it is to go build your own language,
[04:21:45] and see what power it unlocks, like the trade-offs in full scope. Dylan's the guy you want to talk to. He's been working on, like Svelte got into the compiler business really strong in 2019. Marco's been doing it since 2014.
[04:21:57] They have
[04:21:58] And they're even more ambitious, you know, like,
[04:22:02] this is the guy you want to hear  to understand like
[04:22:06] like what it looks like to build your own UI language, you know, as a framework.
[04:22:20] How important is UI? I don't know.
[04:22:22] This...
[04:22:23] This is an interesting one.
[04:22:25] I don't know if you're asking me, Fabio, but this is an interesting question.
[04:22:31] - Thank you.
[04:22:32] I've hit apps that have maxed out, but that's because I was doing crazy stuff with image processing.
[04:22:38] Um,
[04:22:39] It does tax the device.
[04:22:42] Um...
[04:22:44] I've focused on memory a lot.
[04:22:47] because that's the weakness of reactive systems.  If you address the memory, you address the slowdown, and...
[04:22:52] That's you, as you know, with Vobi and whatever, you fix the memory, you improve the performance.  That's the key thing.  But in real apps...
[04:23:03] Unless there's a memory leak or it's getting away from you.
[04:23:08] You know...
[04:23:09] It's hard to say because it's one of those device restricted constraints. People have measured stuff like load times based on bandwidth and CPU, but memory rarely gets talked. I don't have good numbers here.
[04:23:22] My gut is...
[04:23:25] the difference between a framework that's the same memory or double the memory doesn't matter until you get to a certain point.
[04:23:31] but I don't,
[04:23:33] I don't know...
[04:23:35] I've optimized memory because creation is the weakness of reactivity, so you focus on memory because you want to make sure creation and removals are good.
[04:23:43] But I don't know how important it is outside of that.
[04:23:48] Okay. Anyway, yeah, I think we're done.
[04:23:52] then,
[04:23:53] Thank you everyone for joining today.
[04:23:56] I had a lot of fun. This was, as I said, a topical
[04:23:59] topic and I knew that  look, we've been here for like four hours.  I knew this week in  JavaScript, I couldn't talk to Dylan  for three hours and then do a four hour this week in  JavaScript. We are going to do this week in JavaScript tomorrow  but like
[04:24:13] Yeah, this topic and these things need to be talked about.  I'm very, very excited in general just to see these conversations happen and
[04:24:23] So
[04:24:25] Yeah, I mean, this is going to...
[04:24:29] um,  be really exciting moving forward to see more and more,  um,
[04:24:33] people looking at reactivity which is why it's important to understand the differences
[04:24:37] Um,
[04:24:38] and how they play together. So I hope we accomplish that today.
[04:24:43] Yeah.
[04:24:44] Thank you all for joining me.
[04:24:45] And yeah.
[04:24:48] Thank you.
[04:24:49] See you tomorrow.