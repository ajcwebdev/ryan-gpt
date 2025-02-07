---
showLink: "https://www.youtube.com/watch?v=hiYQC4XaUu4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Don't Go Chasing Waterfalls"
description: ""
publishDate: "2024-02-17"
coverImage: "https://i.ytimg.com/vi/hiYQC4XaUu4/sddefault.jpg?v=65ce8567"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. It deserves being talked about. I mean, in some cases, you might be like,
[00:02:04]  okay, this is barely, you know, rudimentary. But on the other hand, I feel like it keeps on coming back at us over and over and over and
[00:02:13]  over again. And yeah, I mean, there's always a new context to apply when talking about waterfalls, right? Yeah, no, this is going to
[00:02:25]  be a good one. I'm going to need your help because I want to do this kind of lecture style. We've done this a couple times in the past, but
[00:02:32]  I need audience participation today because I'm going to be whiteboarding a bunch, you know, and we're going to be just talking, you know, and thinking out loud
[00:02:42]  about the consequences of different sorts of, you know, setups and different sorts of scenarios. So, yeah, I'm chatting a bit here now to kind of give people
[00:02:52]  some time to join in, but I'm pretty excited about this topic in general because it's a very important topic. Let's catch up, say hey to everyone in
[00:03:06]  chat and all you people trying to get in on first on the chat, third, second. I think the first was posted like this morning, like hours ago. So,
[00:03:17]  yeah, I wasn't sure if I was going to stream today. Honestly, there's a lot of work I have to do. Never took waterfalls to be such a
[00:03:28]  bait and confusing concept for people. Yeah, I mean, it's tricky though. I think people just like in some sense, whenever you find something, you're like
[00:03:38]  in hindsight, you're like, yeah, that's kind of obvious. But I think it's one of those things where like people just following prescriptive patterns and then
[00:03:48]  expanding on them, miss it. If the patterns don't account for waterfalls, that's essentially where my thinking comes from. And I like, I feel like you have
[00:03:58]  to have suffered from seeing enough of those cases. to really appreciate it. I mean, there's a reason Remix was created by the React Router people. They
[00:04:09]  kind of pushed everyone to waterfalls, even though they probably never did them themselves. But just because of like how to get started with React Router. basically following from
[00:04:18]  React Router 4 onwards, everyone was kind of like pushed in patterns that basically led to waterfalls all the time. And the Remix guys are like, look, you
[00:04:26]  don't have to do waterfalls. It's really easy. And then they're like, okay, okay. I think we need to cement this so that people are
[00:04:33] , you know, not doing this. But like for us in a solid ecosystem, we'd always followed those kinds of patterns, you know, since the beginning for different
[00:04:47]  reasons to actually funnily enough. There's a certain, there's a certain slope that we might talk about a bit later where, um, which is kind of
[00:04:57]  like the nth level, right? Uh, of this conversation where we start at the level zero, which has to do a lot with local data fetching versus,
[00:05:06]  you know, like in components versus hoisted up. But by the end, there's a more fundamental, um, consideration here, which I think comes down to like,
[00:05:15]  is it better to produce, um, APIs that cause people to fail hard early to force them into the right patterns or ones that are more accepting early. Um, and
[00:05:30]  then grow to a point where, um, they built the whole thing this way when it starts becoming a problem. It's, it's an interesting question philosophically. Yeah
[00:05:42] , definitely. Yeah, definitely. But there's different types of waterfalls and we're going to talk about that. Gravity plus water waterfall. Yeah, exactly. So yeah
[00:05:55] , let's just get started. We don't need the wait for everyone. Not the biggest audience yet. I'm going to, I'm going to, I'm
[00:06:01]  going to mention on Twitter that we're live. I don't care. This is going to be a really good stream for the people who are here. Um, I don
[00:06:06] 't always say that, you know, go back and watch them, but I think this one might be most beneficial for the people who are, who are live with me today
[00:06:13] . Um, live. Uh, what is, what is it? Twitch TV. Just so people get on Twitch as well. Twitch TV slash Ryan solid. Let me
[00:06:27]  just look at my username for a second. So, and I know I'm not sharing my screen yet, but, um, yeah. Twitch TV slash Ryan solid. All
[00:06:34]  right. Cool. I post on, on the Twitter. So people, more people should be joining us. Um, that's it's, it's all good. Um
[00:06:44] , they can catch up. Right. They can catch up. Hmm. I love this coconut water. Anyways. Um, let's, where should we get started?
[00:07:05]  Cause this is, this is a big topic. Um, we're going to mention waterfalls a lot today. I mean, uh, an absurd amount, um,
[00:07:14]  more than misco heavy mentions hydration, more than David corset mentioned state machines, even more than people claim that our compiler will fix reacts architecture. Like we're going
[00:07:28]  to be talking about waterfalls a lot and how we ended up here today. Well, it does kind of start with Twitter, like a lot of things. Um, so
[00:07:39]  let me share my screen and show you what I'm, I'm, I'm talking about. Share a screen, entire screen, this one. Okay, cool.
[00:07:55]  Now syntax debates on Twitter are pointless. Mostly they're just like, uh, a game, you know, like usually I'll, I'll add some Marco code.
[00:08:12]  But I think someone actually responded to my tweet with Marco code and it, and it was like literally like 15 lines of code. Of course, it's not doing the same
[00:08:21]  thing, but that it's never about what it's actually doing. It's about, about it. So this, this whole conversation started cause, uh, Guillermo,
[00:08:32]  um, CEO of Bruxelles posts this thing where he's like next in react, never been easier. And they've also never been harder. Here's a universal.
[00:08:38]  So minimum viable app of a to do list implemented in 45 lines of code. And I mean, it's, it's fairly straightforward. He has a server component,
[00:08:52]  um, grabbing some data and see, you can access the database directly here because it is in the home component here, which is a server component. We're not,
[00:09:00]  we're not showing error boundaries. We're not showing suspense. We're not showing anything. This is a minimal example, just to show you like the part that's probably
[00:09:07]  missing is this is a page. page. I imagine maybe it's a component, but in, um, in a, uh, app directory thing. And then they
[00:09:16] 're using a server action as a way of submitting a form to update the to do's. And then it's, it's very cool little trick where through redirecting
[00:09:25]  back to the page, which I think even in next, this, if it's on the same page, this can be. Implicit so this redirect line might
[00:09:33]  not be there. We might 44 lines of code, but the number doesn't really matter that you submit it, which tells that current page here to reload, grab the newest
[00:09:44]  versions of the to do's and update. So what's really cool about this model, kind of like the old form post MPA styles, you just submit a form
[00:09:52] , add the data, rerender the page to the new data, very simple model. And, um, there he's kind of showing that, um, you know,
[00:10:05]  this is easy to reason about, right? Cause as I said, in reality, you would do more with react than what's in this thing. Like you might actually
[00:10:13]  use a cache function around this DV wrapper to make sure that you're not fetching stuff unnecessarily. Like there's more things going on than what you see in this example
[00:10:23] . If you were going to make this app for real, um, but fairly straightforward. So I took the same example and I was like, okay, well, let's
[00:10:33]  just do this in solid start. You know, again, this could be in a separate file or not. The only difference is instead of fetching directly in the component
[00:10:41] , we wrap that in a use server as well. And it's, it's essentially the same thing. It does the same action semantics where we submit our form posts
[00:10:51]  it, and then it re-triggers this. It works mechanically different, but it grabs our new data and updates our UI. Right, this is missing the
[00:11:02]  fact, you know, that this is just an example page. It's not showing the consequences of nesting data or anything in the same way. There's no suspense boundaries
[00:11:13] , errors, nothing particularly missing. It's, I mean, sorry, nothing like, not everything's present. It's just showing a very simple thing. I can
[00:11:20]  go make this example in solid start repo and it will do exactly what you expect. So at some point, um, one of the responses in here came from Danny Ramoff
[00:11:35] , uh, who was like, more or less the conclusion of his thing was, I think this is an important distinction gets lost in the screenshot. Well, your quote
[00:11:45]  tuning wouldn't suffer from a client server waterfall with the component did inside another db query and that version. Okay. So he's, he's right. Mostly like they
[00:11:56]  depends is the, is the true solution or question here, but you have to understand this started from literally a minimal, uh, demo that had. Didn't really show anything
[00:12:07]  on the next side or on, on the, uh, solid start side. In fact, this demo probably looks almost identical in remix as well. You just, this
[00:12:18]  is loader. This is action. Like you get where I'm going. Almost the, the DX elements of this, um, doesn't feel terribly different, but this
[00:12:30]  kind of spawned off a whole conversation about waterfalls. And I, I think it's important to understand that we kind of got into the narrative kind of shifted because
[00:12:41]  the conversation started getting about like what RSCs do specifically. And this was never about what RSCs do specifically. This was about the DX of doing a get and
[00:12:52]  a post and having everything update nicely without like use effect from my perspective. Like, um, I saw this summary. Here's a little challenge for frameworks to integrate client
[00:13:04]  and server. Make a component that renders a tree view with redirectory file must be in the component. It must resolve in a single request per nap plus bonus points
[00:13:11] , blah, blah, blah. There's different ways to solve this problem, but the narrative eventually got turned to like, do it the server component way or you're
[00:13:25]  not doing the same thing, which is true. You aren't doing the same thing, but that doesn't matter. And that's why I wanted to talk about this today
[00:13:32] . Um, we'll get back here, but this is the preamble to kind of get us to where, where we can start because this is an important topic
[00:13:43] , right? We talk about, you know, how we can optimize hydration, you know, like resumability or islands and partial hydration and reducing JavaScript bundles and all
[00:13:56]  these things, you know, different performance tricks on page load. And I'll tell you right now, waterfalls are singularly more important than all of those probably put together
[00:14:07] . Bundle size looks like nothing compared to the impact of, of, of having unnecessary waterfalls. So like for all the work I do on performance and make sure
[00:14:23]  that things are in a good place. If we just end up doing a bunch of waterfalls, it's like, I didn't do anything at all. I want to
[00:14:31]  stress how important this topic is. I think, uh, Malte had a tweet, uh, that we showed on the stream a couple of times, uh, from
[00:14:42]  a few weeks back where he said something along the lines of, um, let's see, I could probably find it right now on myself. Not Malte, sorry.
[00:14:51]  It was Sebastian, um, Marka, Marka Baghe. Yeah. Hopefully it's citizen last name properly, but, uh, react core team memory. You
[00:15:00] , your experience may vary, but almost every time I've looked into performance issue with a customer throughout my career, it's almost always been mainly due to a timing sequence of
[00:15:07]  resource loading, either data font, CSS, blah, blah, blah, or due to a client side waterfall. I've got a few other on my list that aren
[00:15:12] 't related to that. Um, update performance kind of scenarios, like things really bogging down on re-renders. But like, it is definitely the, the category
[00:15:24]  that gets attention immediately. It's the one that shows up on your SEO scores. It's the one that, um, you know, people get that first feeling of
[00:15:35]  this site is slow. You can, you know, if you, if your first impression is bad, like that's where you start. So I, I just really want
[00:15:43]  to stress that this is a important topic. Okay. All right. Yes, I, there is a continuation factor here. I've been talking about this stuff for the
[00:16:06]  last month. If you're interested, essentially I've, I've been one of the most supportive, pushing server components for the last couple of years and something I came to
[00:16:16]  some realizations over the last couple of months that have been part of this arc of my last few streams where I'm, I'm not negative on server components. I'm
[00:16:25]  just much more critical now. And it's funny because other people were really critical before. And now I'm the one who's being more critical. And I think that
[00:16:35]  whatever comes out of this conversation about reactive opponents, I don't want it to come out as, um, trying to be negative about it. I just want to be clear
[00:16:45] . We, we, we haven't been very, we haven't really got to the part of like understanding them enough to even understand off what the trade-offs are
[00:16:55] . And I think that's going to come up a bit today, but I think we need to get there first. I think people just want to troll me now,
[00:17:07]  anyways, we'll, we'll, we'll keep on going. Um, actually to be fair, I saw a really cool post about HTMX this week about someone
[00:17:16]  making a Notion clone. um, I, I do want to check it out at some point. Okay. So let, let's, let's, let's
[00:17:32]  get this, let's get this started then. Um, I think we need to start with a really simple question. Uh, you know, what is a waterfall,
[00:17:43]  right? What, what is a waterfall in this context? This is the part where I want chat to participate. Um, a sequential fetching of data. Yep.
[00:18:21]  That is an example of the waterfall. Loading resources, you quickly as opposed to, as the component appears. Yeah. Yeah. Yeah. Yeah. I almost went
[00:18:37]  with a TLC cover. Um, yeah. Okay. Yeah. I mean, so I, I think we've seen this before. I'm just going to make like
[00:18:46]  a, a, a, I'll make like a, a typical kind of timeline here. And we'll, we'll, we'll use this as our baseline to get
[00:18:55]  started on this conversation. Right. If we view ourselves as having some requests here, right. You know, like these blocks. If you have one big request, well
[00:19:08] , there's no waterfall, right? If you have, let's give ourselves three requests. This is typically what we refer to as a, as a waterfall, right
[00:19:22] ? Essentially. Over some axes of time, right? It's white. We end up, you know, and the, these are like various resources, async or
[00:19:40]  whatever waterfall. Generally speaking. Is when one needs to proceed. The, the retrieval of the next. Right. So. Yeah. There's a few more coming
[00:20:05]  in here. Yeah. Yeah. That's basically what I was saying. Yeah. Now. This is important though, because. Simply the fact that. There are multiple
[00:20:25]  requests might not mean it's a waterfall like. If I took the same diagram here. And went over here. I made another one. And went like this. Is
[00:20:49]  this a waterfall. Right. I think we would. Most of us would say that this is not a waterfall. Right. Right. And. Let's do one more
[00:21:23] . What about. What about this? Is this a waterfall? Okay. Well. Well. At least it's not a network waterfall. In the case of our example
[00:21:56] . We don't know. What's necessarily. I haven't told you. What's delaying the start of these requests. Like. Conceptually. Here. This could
[00:22:05] . In. Like. Assuming these are the network. Requests. Pretend. That you had to do a bit of processing. On the client. Before you made
[00:22:14]  the request. Right. So you have like this block here. And. In a sense. It's heavy. So. It. It can't. Start. Like
[00:22:27] . Doing this request. Until it does this one. Until it does this one. So. Like. If. If. If this was like. Heavy. Single threaded work
[00:22:35] . In a sense. Um. We. We won't have a network waterfall. But I just wanted to point out. That. You know. It is possible.
[00:22:47]  With. You know. Multiple requests. You know. And like. Work to be done in between. Um. To. You know. Have this kind of. Offset
[00:22:55]  happen. Yeah. So. It might be a client waterfall. It's unclear. I just want to kind of put it out here. That. Um. That like
[00:23:10] . I would say no. From our definitions. But I just wanted to kind of. Distinguish this one. A little bit. Uh. Just to kind of
[00:23:18] . Show it. Similarly. Here is. Beginning of B. Depends on the end of A. Yeah. I. Exactly. When we talk about the network. Right
[00:23:33] . But. I. I think it's important to. Distinguish. All three. Of these. A little bit. Initially. When talking about. What a waterfall
[00:23:44] . Even is. Right. Because like. There was a time period. Where. Having lots of requests. Was actually. Waterfall inducing. Right. People are
[00:24:05]  already jumping. To the next point in the chat. I'm loving this. Right. Like. But. HTTP 1. I think we could only have. Six concurrent.
[00:24:14]  Requests. In the browser. At a given time. Like. If you go now. The. I think the number. Is supposed to be infinite. Or something
[00:24:23] . It's. It's high. I've noticed. Personally. A bit of this. Happening. In batches. Like. You'll see the first. Eight
[00:24:31]  go. And then you'll see the next. Eight. And then you'll see the next. Eight. Even a modern browser. It won't be. Waterfall.
[00:24:37]  Like this. But it will be. Slightly. Tiny. Bit. Offset. So. There is a theoretical. Not theoretical. But there is an. Absol
[00:24:47] ute. Constraint. To the. To the way. The browsers. Fire off. The requests. It's not going to matter. Until you're in.
[00:24:53]  The. The dozens. Of requests. But. It does kind of. Answer this. In our. It does kind of. Ask this interesting question. Like. Should we
[00:25:02]  be grouping. Requests. Rather than. Like. Is there any benefit here. To grouping. Versus. Not grouping. Requests. Right. Everyone's following.
[00:25:19]  So far. Do you understand? I mean. Like. There's a little. Overhead. For each. Request. Or each. Batches. Of
[00:25:26]  requests. So like. There is this sort of. Question of whether. We should be. Sending it all. As a single request. Or. If we should be
[00:25:32] . Keeping all the requests. Even. If we're not. Water. Um. Like. Traditionally. Waterfalling. I just want to. Make this kind of
[00:25:39] . Understood. Because these are all. Scenarios. Of. Of like. Around this. Right. One of the. Benefit. Of. Of putting it
[00:25:52]  all in the same request. And let's see. I'm going to zoom out for two seconds. So I can. Give myself some more room. Because I snuck
[00:25:58]  this table. In the middle of some other stuff. Let's move this over here. So I can scroll down. Instead of up. Okay. Let's go.
[00:26:09]  Let's go here. Well. I mean. There's several. Considerations. Into. The benefit of grouping. Right. Obviously. If you group requests. That
[00:26:26]  look like this. There's probably. Little to no. Benefit. Of grouping them. Right. Because. Whether this is one. That does all three in parallel.
[00:26:36]  Or. This is three. That does all three in parallel. The benefit isn't actually. Terribly clear. This one. Might. Be more interesting. If there
[00:26:52] 's overhead. Associated. Right. Because once you get to a point. Where you're looking at things being offset. There's an argument. You start kind of going
[00:27:00] . Okay. Well. If I offload processing. To a place. That is more powerful. Like a server. Then maybe. You know. We can. Deal
[00:27:11]  better. With the waterfalls there. Because. The length. The latency. Is less. Right. I think. I think. It's kind of important. To kind
[00:27:19]  of think of this. In that way. I don't know. How many of you are. You know. Really into. You know. CPU. You know. Hard
[00:27:27] ware considerations. But like. The fastest data. You can access. Latency wise. Is going to be in a. In a register. Right. It's like.
[00:27:34]  Right in the CPU. And. If it's not in the register. Well. Hopefully. It's in your level one cache. It's a small cache. But
[00:27:41]  it's a fast cache. Then there's level two. Level three. You're still in the microprocessor. At that point. Then you kind of. Get
[00:27:49]  out. And it's memory. Right. And then. If you miss that. Hard drive. And then finally network. And each. Step along. That. That.
[00:28:02]  You know. Degradation. Is almost. Like. An order of magnitude. Slower than the previous one. So. If you. Can. You know.
[00:28:14]  Reduce the latency here. By pushing these things around. And moving the waterfall. Closer to where there's shorter latency. You can make significant improvements. Even in the
[00:28:27]  web. We have that a bit. Because of. Even though we're dealing pretty much completely on networks. There's a difference between the network to the end user.
[00:28:36]  And the network. Within your data center. But. I just kind of wanted to like. Put this. Out there. Right. Because. You could. You might
[00:28:52]  be able to. Absorb the cost. I guess the best way to show this. With. With this. Example. Here. Is. I need to show this
[00:29:02] . Is. We. If. If now. Like. Blue is still our network. Right. But pretend. That the. The length that we need to go.
[00:29:14]  Is. Like. This. And this is the way there. And this is the way back. I'm kind of halving these. Right. And then the waterfall on
[00:29:22]  the server. Is. In a different color. Let's make it. I don't know. Green. And the latency on the green stuff. Is. Smaller
[00:29:38] . So it's kind of like this. Hmm. That's. Kind of overdoing it. It's probably closer to. This. But. If it's like this
[00:29:57] . On the server. And then your response back to the client. Is like. Is like this. You can see. Already. That. That this. Is shorter
[00:30:09] . In time. Than this. Right. Like. There's a significant. Improvement. By. By. Maybe. Maybe pushing. This. To a place where
[00:30:23]  there's less latency on that. On that waterfall. Right. Now our total time. Is only this. To this point. Instead of taking this whole space. What's
[00:30:33]  interesting though. This is not necessarily faster than this. Right. Like. Or even this. Not necessarily. So. I just. I want. Kind of understand.
[00:30:54]  The dimensions here. Right. The other thing. We have to consider is. We're talking about grouping. Right. Obviously. If you group. This. If I did
[00:31:03]  the same thing for this. Then. What. If I drew everything right. Like. Properly to scale. I don't think I quite did. But. You
[00:31:21]  know what I mean. If I drew everything properly to scale. Yeah. I'm close. These are almost the same. They're basically almost the same lane. Is what
[00:31:31]  I was trying to get at. Right. Because they. They. They kind of should be. Right. So. Like. The worst case scenario. Is basically the
[00:31:44]  same as. The best case scenario here. But the best case scenario here. Is going. To. The. The best case scenario here. Is going to. Or the
[00:31:55]  worst case scenario here. And here. Is going to be better. On this one. Right. And. And that's the simple map. That's where we start.
[00:32:06]  Right. Like. That's what we're thinking. But is there any trade-offs. That you. You see. To grouping. Stuff like this. Does anyone
[00:32:16]  in the chat. I'm opening up to the floor. What's the trade-off. Of doing this all. In a single go. Go. Make redundant requests
[00:32:39] . Make redundant requests. Yeah. I mean. What if you don't need. All three of these data sources. What if the next time you go to. To this
[00:32:51]  page. You don't need all three data sources. Like. You're kind of locked in. In this one. This one. You can just be like. No
[00:33:00] . I'm just going to do this one. This only matters. Though. For another reason. Yeah. I'm not. I'm not. I'm not. I
[00:33:15] 'm not necessarily. Going to say. You can't stream. But just if you. If you look at. When you got three of these. Pretend these things
[00:33:23] . Aren't tied together. Pretend there's work you do. At the end of them. Right. Or at the end of these. Or at the end of these
[00:33:28] . There's work that you do. Here. Even with the waterfalls. You could do work here. You could start your work there. Instead of waiting. Till
[00:33:40]  all. Of. The work is done. Right. Like. What if you. These were three independent. Sections of your UI. This can start rendering. Here
[00:33:53] . Here. And here. And this one would. Would wait. All the way. Till the end. Right. It's probably more pronounced. On a graph. That
[00:34:04] 's like. Smaller like this. Where it's tighter. Or you know. If we had the same constraint. Like this. Like this bottlenecking. It's possible
[00:34:11] . That. I mean. We can. We can. We can move this. These to the other side. What if. You do. Something like. This.
[00:34:23]  It takes about that long. Okay. And. It's. It's kind of like this. Right. The difference between. The single one. That waits till the end
[00:34:37]  here. So. Let's. Let's do this. Okay. The difference between this one. And. Assuming that the workload at the end. Is parallelizable
[00:34:51] . And like. The one that. Kind of looks like this. Sorry. If I can. Give me a bit more. Nope. It's like you got to grab
[00:35:07]  the whole thing. But I don't want to grab the line. Okay. That's how I do it. Okay. Okay. Go here. Delete. Delete.
[00:35:19]  I'm not going to worry about the red. You can see. We've absorbed the red on the server. So. But let's pretend our thing is more like.
[00:35:26]  Like this. And. I told you my. This one wasn't perfectly drawn. But like. Assuming that there's like. A little bit. Of an offset
[00:35:35] . Here. You know. I don't. I don't have enough spaces. I don't have enough height. To show the. The whole. Thing here. But
[00:35:44] . My. My point is. Yeah. I mean. It was close. It was about. Sorry. Up there. And then. Let's go like this.
[00:35:54]  Presumably. Smaller. Whatever. My. What I'm trying to get at is. This. Now moves. Here. Right. Like. It now moves to
[00:36:05]  match the end of here. It's actually. Further out. Um. So. Grouping. You know. Doesn't allow us to do less work. As easily
[00:36:31] . And it doesn't. It. It definitely. Um. Can cause like. Other cascades. Now. There are solutions. To this. Like. You
[00:36:42]  could stream. Back. The responses. As they come back. And that will basically negate. A lot of the. Um. Downside. Of grouping. So.
[00:36:55]  There is that consideration. But basically. Just. Making everything. Single flight. Without streaming. Without. Is. Would lose. Um. Data independence. What I mean
[00:37:10]  by grouping. Is. Instead of. These being separate. Requests. This is the. This is all one request. And I've kind of opened up. The server
[00:37:19] . Waterfall. Like. Pretend these are client. Requests. And this is one. Blue client request. I guess it's like. It's not clear about
[00:37:27] . In my diagram. Is I'm suggesting that this spans. The whole. Thing. Maybe. Maybe this would be a clear way. Of visualizing it. Right.
[00:37:35]  Because it's. It's all part of the same. Yeah. I'm liking this. Like this. Yeah. Let's. Let's do that. It's
[00:37:42] . It's. It's. It's all part of the same. Client request. Yeah. This is way better. Way of visualizing this. Exactly. Yeah
[00:37:50] . Yeah. Right. But I mean. It doesn't matter. Like. If it's client server. I'm just talking about. Like. One layer versus the
[00:38:03]  other layer. Because like. There's so many different considerations. Like this. Like. Consider. What it would actually take. To group this one. Right. If you
[00:38:12]  needed to do. Pre-processing. Right. Like. Another small thing is. We. Like. Let's pretend we wanted one request. But we need to do
[00:38:22]  this client side pre-processing. Well then. We would pick some kind of threshold. Like maybe. A little bit of time. Maybe. Maybe. I don
[00:38:32] 't know. Arbitrary amount. A hundred milliseconds. But then. We basically turn. This. Into this. But delayed. Right. Like. We. We
[00:38:44] . We basically just. Pushed this whole thing. Sideways. Like. Like. Let's say we only. If we wanted to. Like. We had like.
[00:38:53]  Five locations. We. Or three locations. We're fetching here. And we're like. Let's wait till we render the whole tree. To make sure we
[00:38:59]  collect all of them. And then send them in one request. Well. Now we're waiting to render the whole tree. So. In a sense. We're. We
[00:39:07] 're kind of. Worse off. Because. We're just. Again. Taking. This delay. And using it. To push this whole thing. Back. This is
[00:39:20] . Still better. This. Might be better. If. You can. If you can do this. Part sooner. Yeah. Sorry. This should be here. Right
[00:39:32] . Streaming. Is the balancing act. But. What I'm. I'm trying to get at is. There's stuff that happens before. And stuff that happens later
[00:39:42] . And there's independence here. So. Purely just grouping it. May not. Accomplish. What you want. Okay. Well. I'll put this
[00:39:54]  in more practical terms in a minute. I just want to. Or in a few minutes. I just wanted to kind of like. Get to the basics. Are people following
[00:40:02]  so long. So far. Are we doing okay. No. This is a stream yard limitation. I'm 720 right now. Because I didn't feel like.
[00:40:21]  Paying. Like. Way more money. It's like the different. It's. It's. It's. Astronomically more. For me to get stream yard
[00:40:30] . At 1080p. I used to do it. But. You know. Yeah. But I'm. Yeah. Exactly. But I'm saying like. The fire together
[00:40:44] . Is. Is interesting. Because like. If. Let's say you're rendering a client. And. You don't know. Until you actually like. Render
[00:40:52]  the whole page. What you should send off together. Like. At some point in the conversation. Dan asked me. If I'd ever considered. You know. Sending
[00:41:02]  them all in a single request. And I was like. Yeah. No. There's actually more problems with that. But we'll get to that in a minute. But
[00:41:11]  yeah. I'm hoping. This is. This is making sense. Okay. Why would you need to group all three together. If pre-processing required. By
[00:41:28]  only two of them. We're rendering. Then I feel. It's more dependent on use case. We want to. It's a placeholder data or not. Yeah
[00:41:33] . Yeah. Yeah. The pre-processing is. Like. Pretend you. An example of this exact scenario is. You. Go. And you have.
[00:41:43]  Kind of three levels. And you're maybe nested routes. In your. In your. On your page. And. The first component you go to render. The very
[00:41:52]  first thing it does is fetch data at the top of it. But. Then you render a bit more. And then the next level fetches data. And then you
[00:42:04]  render a bit more. And the next level fetches data. It's all in the single navigation. But it's like. Kind of. I'm picturing a world
[00:42:12]  where. The water falling of the date. Of the. Of the. Of the sections. Doesn't impact. The data fetching. Like. All the data you need
[00:42:23]  to fetch. Is in the router. You can use the ID. But you're doing three separate fetches. And. You have to render to get to it.
[00:42:30]  Essentially. That's kind of the scenario that I'm seeing here. This red thing is like. Rendering. Part of the page. You might. Think. Well.
[00:42:40]  Wouldn't it be great if I could just. Fetch all the data for the page in one go. I'm saying. Maybe not. Maybe not. Yeah.
[00:42:57]  D-duping. Is a problem. And react query solves that nicely. We have similar tools. In our router. But. Again. It's because you're leveraging
[00:43:08]  the granularity. If it was a single request. Like. How do you know. How do you know which data you need to fetch? You go to the server with
[00:43:15]  a single request. And you're just like. Give me it all. Give me the things you tell me. I mean. We have. It's definitely possible both
[00:43:21]  ways. I just want to kind of. Establish that. These are the kind of things you'll be thinking about. Imagine if the HTML all came from the server
[00:43:35]  stream. And we didn't have to wait for the client to decide. If it needed to fetch more data. Yeah. But. I mean. That's. That's
[00:43:43]  how we do our initial page loads. And the next page loads. But it's the same kind of problem though. Right. Because. Essentially. You're. You
[00:43:55] 're removing this red part at the beginning. But it doesn't change the nature of. Of this that I showed before. Streaming HTML or whatever. You know. S
[00:44:08] ending back page doesn't actually. Necessarily change anything fundamental about waterfalls. And actually. Let's talk about that again. Because. There are. Inher
[00:44:19] ent waterfalls during page load. That there's like. Basically. We're not avoiding. Now I understand. Why people like live view. Yeah. Staple
[00:44:36]  servers are interesting. Because future navigation doesn't have the same crux on it. The problem with staple servers generally is. Is that the boot up time is atrocious
[00:44:45] . Yeah. Yeah. I figured as much. I love when people think HTML solves something. So. This is a joke. Right. People are still trolling me
[00:45:03] . Okay. Okay. Anyway. So. So. Yeah. Yeah. You're kind of getting. We're getting ahead of ourselves. I'm trying to explain
[00:45:28]  this in a general sense first. Because like. It's important to understand that any interaction with the server can follow into these kind of patterns. Whether it's an initial page
[00:45:37]  load. Whether it's a mutation. Whether it's. You know. Whatever. We're going to find ourselves in the same kind of boat. But. When.
[00:45:44]  So let's talk about initial page load. For a moment. Because. There's something that. Is. Innately waterfalling about. Initial page load. And that
[00:45:54] 's because. The very first thing. And I. I might have even drawn this last stream before. Let me see if I can zoom out. If I can find it
[00:46:00] . Did I. Show this. No. I did not. I just did. Yeah. I did a mutation timeline. Never mind. Let's. Let's zoom back
[00:46:10]  in. Okay. One of the things that happens on initial page load. And this happens every time. I'm going to change the diagram a bit now. This time
[00:46:20] . We're going to use the. The back and forth network arrow diagram. Is. It always starts with. Client. Server. Okay. I've drawn this thing
[00:46:36]  a billion times. You've seen other people draw this a billion times. It's probably not all that interesting. But. The very first thing is. Client goes
[00:46:42]  bang. You know. I hit your URL. Right. And. The server goes. Okay. This takes varying amounts of time. But it. This part is always a
[00:46:58]  true. HTML. Right. Like. I'm talking about like a new page load. Right. And then. The client's like. Oh. Okay. Sweet. Sweet
[00:47:05] . Get. JS. And CSS. And everything else. Right. And then. And then. This one's like. No problem. Here you go. Right.
[00:47:29]  But. What I'm getting at is. This waterfall. Is always going to happen. Like. Even if the thing's smart enough to be like. Okay. Let
[00:47:42] 's send three headers. And all this stuff on the response back. And all this. There is a this. Then this. To decide. This. Then this.
[00:47:53]  Like. We can make this as short as possible. You know. Like. Try and crunch it all in. But. Our initial page load. Always has this double.
[00:48:01]  Waterfall. Right. Right. Like. This. And the. The funny thing about. This is. This is. Kind of true. Depending on your solution after
[00:48:35]  the fact. Like. If the client. You said server routing to the rescue. Server routing doesn't change this waterfall. Does it? Think about it. Like.
[00:48:43]  If the client. Is not aware. Of the javascript code. It needs for the next route. It's going to do this. Too. Right. Because one
[00:48:51]  of the benefits of grouping. The data requests. Like. I. I. We. In here. We weren't talking about it a ton. But. Is that like
[00:48:57] . Picture. That now when you go to the next page. The router doesn't need to do all the route matching. It can just go. Oh. I. Like
[00:49:07] . Think like a server component type model. It goes. I can just ask the server for the next page. And it will render that next page for me. And
[00:49:15] . Handle the data. So I don't actually need to know the specifics in the client. I can actually reduce bundle size. But. If you think about it for
[00:49:21]  a second. Like. How does it know what javascript it needs for those client components? Right. Like. I'm on this page. I'm going to this
[00:49:32]  page. Server components. How do I know what javascript the next page needs. For the client components on that page. The most obvious way is that. When
[00:49:44]  you go to the next page. Or you know. Go to the thing. You simply. Get this HTML. Get this RSC JSX back. And it tells you
[00:49:53]  what JS you need for the next page. Right. And if it comes SSR'd. You have to go and get it. We have this same thing with our
[00:50:06]  islands router. Right. Like. You're just repeating this. Waterfall. Over and over again. Now on every page. Instead of just the initial page. It
[00:50:28] 's not a bad waterfall. Per se. Like. I don't know. Actually. Like. It's kind of expected. Right. Like. Picture. Picture the difference
[00:50:37] . When you do a client side. Navigation. Right. This is. This is like your standard. Initial page load. And everything else. Right. So like
[00:50:53] . If you're doing client side. Navigation. You know. With Remix. Or Solid Start. Any. Parallelized. Route. Route. Mechan
[00:51:04] ism. What we would do. Like. This. This is always. Initially. Like. This is always the case. Right. This is like your server routing. Right
[00:51:12] . Like. Always the initial case. Always. After the fact. In other solutions. Unless you bring that client. You. There's nothing to stop. Someone bringing that
[00:51:22]  knowledge. To the client. I don't know if React does. But. Think about. The difference. Between what Remix. And. And. They Salt Start
[00:51:32]  do. When you go. I want to go to the next page. Well. It goes. Okay. What's the URL. So the router. Handles the URL
[00:51:38] . And then it goes. It goes. Right here. Immediately. It goes. It goes like this. It goes. Get me JS. For the next page.
[00:51:56]  And. It goes. At the exact same time. It goes. Get. Data. Because. The client router. Is aware of this. So. It gets.
[00:52:06]  It does both of those requests. At the same time. And then. It gets those back. At the same time. If you moved. All the knowledge. Like
[00:52:18] . Don't get me wrong. The trade-off. Of this. Is that you have. Kind of a route manifest. In the client. So you always.
[00:52:25]  Know how to do. All the code matching. You always know. How to. Like you. Like our data loaders. Like. The fact that they exist. Ex
[00:52:34] ist in the client. Like. The bundle size. Gets slightly larger. And if you had a giant app. With thousands of pages. Then it's potential. That
[00:52:43]  the bundle gets. You know. Death by a thousand slices. Right. But I'm just. Pointing out there. That. Generally speaking. With a parallelized approach
[00:52:57] . This. Instead of like. A single flight approach. Will. Reduce. This. Generally. Like. If you include that data. On the client. Initially.
[00:53:06]  Then you don't. Have to do this. Every time. Right. In the case of. Like. I don't know. If next. Or you know. App
[00:53:19]  directory. Gives. Routing information. To the client. We'd have to confirm that. But generally speaking. I know that. Remix. All starts.
[00:53:26]  Svelte kit. We all do this. Nested. Parallelized. We'd send them all off at once. Send them all back. We're talking
[00:53:32]  about. This case. Maybe this case. We're not. Talking about. This case. For stuff. That's happening. At. The route level. Important. At
[00:53:43]  the route level. Okay. Okay. But. I just want to kind of like. Point at this a little bit. Just so that people understand. That there are
[00:53:54]  these waterfalls. That are happening. Anywhere. Way. Another classic waterfall. That's always happening. In a lot of solutions. Doesn't have to happen. But
[00:54:03]  let's see if I can find it here. Is. Is this one. The mutation waterfall. Right. You know. This is even in an MPA. Class
[00:54:11] ically. If you use an MPA. You post a page. It returns a redirect. The browser gets the redirect. Like pretty quick. And then it gets the next
[00:54:19]  page. And then it renders the next page. This is also very common in tan stack query. Right. Tan stack query. You do a post. You say
[00:54:37]  what. Get it back. Tell it which tags to revalidate. It goes and fetches. Right. This is a very common thing. Right. To be
[00:54:44]  fair. One of my favorite things about RSCs. Is that. They actually return the next page. On the next go. You post. And then you just get
[00:54:52] . The next page. In that single request. As it turns out. Solid start. Single flight mutations. Do exactly the same thing. I covered that last stream.
[00:55:00]  But I just want to point out. That there are. All. There are waterfalls. Kind of built into the platform. Things that we. Do. All the time
[00:55:10] . Anyway. Okay. Yeah. Sure. Yes. HTMX does. Client routing. Just get HTML in response. To JSON in your data. Right.
[00:55:28]  The question is. If you're using. Client routing. Like. How does it handle. HTMX handle code splitting. Right. On the next route. Like
[00:55:42] . When does it. Know to get the JS. Does it get the JS here. Does it get the JS here. It's an interesting question. It probably depends
[00:55:48]  on how you set up. HTMX is simple enough. That you could probably. Configure it either way. Yeah. Thank you for this. Great troll.
[00:56:09]  Doesn't this boil down to. Any performance solution. Will need route level knowledge. Of data and loading patterns. So Dan's already. Yeah. But you can't do
[00:56:14] . Client loading is mostly irrelevant. I need you to get there. And not you. Greg Johnson. Who's. Creator of Leptos. Who knows what he
[00:56:22] 's talking about. I need most people. To get there. Before I can make statements. Like this. But we'll. We'll play devil's advocate. In a
[00:56:30]  bit too. Right. Right. Yeah. The part that I'm. I'm. I'm saying here. Is I'm assuming. That you actually need. JavaScript
[00:56:47]  to get. The right experience. If you're building. Simple sites with HTMX. Then you don't have to worry. About the JS. And in that case
[00:56:52] . Yeah. I mean. URL get the HTML. There's no. There's no. There's. I mean. Initial page. There's a second flight
[00:56:58] . To get the. Like HTMX runtime. But yeah. Every other navigation. You don't need to worry. About it. Which puts it. About the same
[00:57:05]  time. The same scenario. As this. So yeah. No. That is good. I. I was just. What I was getting at. Is I'm. I
[00:57:12] 'm not. There's a lot of interactions. That deserve to be JS only. And not go to the server. But that's a whole other topic. Right. But
[00:57:24] . Back to Greg's point. This is sort of the level zero for me. Why we have this conversation. Right. Because. If you fetch. Inside. Comp
[00:57:35] onents locally. And we haven't gotten here quite yet. You're probably going to lead to waterfalls. Like it's just. It's kind of innate. That.
[00:57:48]  These tendencies. It doesn't have to. But it. But there's a few factors there. So let's. Let's go into that next. Because that's really
[00:57:54] . Where I. That was actually the next thing. I have a bunch of point form. We're. We're cracking through this. At a pretty good rate today
[00:58:01] . I feel like this is fairly dense. And makes a lot of sense to people. So let's keep on going. I wonder. If the dia cost. Is it
[00:58:12]  worth it? Well. It's an interesting. Question. Because if you ask. If you ask the React folks. And I actually kind of tend to agree. I
[00:58:18]  think the DX of server components. Makes a lot of sense. Like there's a reason. Why we're here. The problem. Or concern with server components. I have
[00:58:26] . Isn't. That this is bad. This is actually quite good. It's that. It might not alleviate the need. For the existing DX you already had.
[00:58:35]  And now when you put both of the things together. What have you won? This isn't like. You know. Like one of those. Like. It's more than
[00:58:44]  the sum of its parts. It's. It's like. It's just. Like a lot. But. This. What I'm looking at here. Is very nice
[00:58:53] . It's just. We haven't got to the benefits of server components enough. And I feel like. It's not painting it fair enough. We need. We
[00:59:02]  need to get through to that as well. We will. Probably. Are waterfalls the biggest performance problem? Probably. That was my experience. For years. I would.
[00:59:19]  I was just destroying. Benchmarks. And examples. And everything. With CSR. Against people's SSR. Against all this stuff. Because. They were architect
[00:59:28] ed with waterfalls. And I always made sure. That I could avoid. That everything I did with solid. Would avoid waterfalls. As best I could. Like
[00:59:35]  all my examples. Everything I did was. All very conscious of waterfalls. Right from the beginning. Yeah. You eventually. The clients. I could both. Yeah.
[00:59:47]  And that's the tricky part. Isn't it? Because. Like. HTMX. Is there. Almost to remind us of that. I love when. A lot
[00:59:54]  of HTMX stuff there. Because it's really obvious. Where the shortcomings are. It's a little bit less obvious. Where the line split is. When
[01:00:01]  it's so permissive. Between the models. When we talk about server components. Okay. But. So. Our water. Let's. We need to talk a
[01:00:13]  bit more. About waterfalls. Unsurprisingly. So. Yeah. My next two points here. Are. About. What informs data fetching. Hoisting
[01:00:22]  versus not. And avoidable versus unavoidable waterfalls. I think that those both. Really tie into what we're talking about today. So let's continue. Now
[01:00:32] . I want to kind of get into a data fetching. Thinking. Like. I think we're on phase two here. Where we're. We're like. Okay
[01:00:39] . We understand what waterfalls are. What they look like. What. Goes into us. Designing solutions. Around handling. Waterfalls. Trying to decide where I
[01:00:53]  want to go on my. On my page here. Because. I guess. Let's just make a list. When. Data fetching. What are the inputs.
[01:01:14]  To data fetching. Okay. Let's. Let's just. Let's just start. Jotting stuff down here. Okay. Right. Like. If we're
[01:01:23]  going to fetch data. When we're loading our page. Navigating. Doing anything really. On our page. When we're fetching data. What. What
[01:01:32] . What is the source. Of the inputs. That we're going to be passing. Into that data fetching. So. Yeah. This. I'm getting you guys
[01:01:47] . Involved again. Again. So. I'm hoping this question is clear. It might not. Be clear enough. I fear. Like. Inputs
[01:02:03] . Not. Like. Databases. And caches. And servers. Are all examples. Of caches. Like. Or like. Places. Or sources. To
[01:02:11]  get. The. The. Like. Data from. I'm talking about like. Like. Input to the fetching function. Okay. Yeah. Okay. Let's
[01:02:22] . Let's. Let's start here. URL. URL is a great. Example and input. Right. You know what parameters are. Based on the page.
[01:02:29]  Or whatnot. Um. This. This. This is. This is. This is sort of what. Where I'm. Where I'm getting to. Cookies. Yeah
[01:02:39] . Cookies. Can we generalize even further. Like headers. But yeah. Sure. Cookies. Okay. You got here. Local state. And middleware
[01:02:51] . Um. Right. Let's. Let's. Let's talk about. This. Kind of. Kind of stuff. Right. Um. Because yeah. There's.
[01:03:04]  There's probably. Server state. Of some type. Right. Some kind of server state. Like. The. From the middleware. You might like. Have something
[01:03:14]  stateful. Some servers. Don't. But. Maybe the server state. I'll. I'll even grant you guys. The. The cache. Um. Here.
[01:03:25]  You know. Along this lines. Because it might shortcut stuff. But what's interesting. About the cache. Is. Is. The cache. The cache. Um. Is
[01:03:37] . Fed. From previous. Requests. So it's actually. Like a. It's not a source. So much. Like it's a. It's an
[01:03:44]  Ouroboros. Like it feeds into itself. Um. Like it's not a unique. Source. But let's keep on going. Right. Forms. Form
[01:04:00] s are basically. Yeah. Like I said the URL. But. We could. We could. We could generalize. Almost all of this. To like. The request
[01:04:09] . Right. Like. Like. Whether it's. It's like the. You know. We also got like. I didn't put that like. Post body.
[01:04:17]  Like. This. This whole. Category here. That. That we're. That we're. We're doing here. This. This is. Basically. The request
[01:04:29] . Request. Right. Props. Well. What props. Like. Let's keep on going. Where are the props coming from? Right. Like. Prop
[01:04:58] s is a good thing. So. I mean. I mean. Let's just add something here. Let's add. Maybe. Maybe client state. Maybe. Right
[01:05:08] . Yeah. In such. User input. Maybe. Is client state. Representation. I'm trying to think. If there's. If there's. If there's
[01:05:18]  anything else. Because. I think it's important to. Understand. You know. Generally. A lot of our frameworks. Are built to be stateless. So.
[01:05:32]  Really. There's. There's the state on the server. Like the server state in the cache. And. Yeah. What's great about those. Is they're always
[01:05:43]  on the server. Then there's the request. Which is the serialized piece. That goes back and forth. Right. And then there's client state. And by
[01:05:53]  client state. I mean. You're rendering. And you pass some props through. And. What's interesting about client state. Is client state. Might determine whether to show
[01:06:07]  or hide something. Right. But. If. If it's not part of the. Client state's a funny one. Right. And I. I don't
[01:06:21]  know where I want to start on this. But like. In a client app. Depending on client state. You might decide. Not to rent. Not to fetch one of
[01:06:35]  these. Right. You might be go. Yes. Yes. No. Right. Especially after the fact. Initially the client state's usually the same on the server and
[01:06:42]  the client. But afterwards the client state can diverge. You have context. You have stores. You can actually change. What. What you request. Right. But.
[01:06:51]  Client state actually. Is. Is. I'm going to. I'm going to draw a line through client state. Right now. Because. We're not going to
[01:07:06]  consider it. For our cases. You know why. Because. Anything that's driven by client state. Will innately have to fall in the client model. If you
[01:07:17]  think about it. In. In react server components. Can you fetch something. Based on client state. It's okay. If the cache is ambiguous. It literally doesn't
[01:07:32]  matter here. I'm just saying some kind of persisted knowledge on the server. That kind of feeds into itself. No. No. You can't. Right
[01:07:40] . And the reason you can't. Like. Technically. Yeah. You can probably feed it in through the request yourself. But generally speaking. The reason you can't
[01:07:55] . Is because. The server components are running off this. And. The server components. Don't have. After the fact. For good reason. You can't server render
[01:08:03] . Client components on the. On the server. After the initial render. Because they won't have the updated client state. If you go on the server. Update
[01:08:11]  something. To. Or start going on the client. Render the page. And you have like a conditional show. Based on. Some counter that you increment. If you
[01:08:19]  increment it. To 10. Past the bigger than five. And you go back to the server. It doesn't know which path to take. Because it doesn't have that
[01:08:27]  10. It only knows what's represented. In the URL. So. I've used this example a lot. Why. Like. The approach. Say astro takes.
[01:08:36]  With view transition. Like it's not sufficient. You need more than that. If you actually want to do something. Like server components. Because. You need to make
[01:08:42]  sure that. You can persist client state. And. That it doesn't completely. Bonker up your. Hydration. Or your navigation. Right. But. It's
[01:09:00] . It's. It's. It's more than that. It's like. We don't talk about this very much. But it actually is a serious. Re
[01:09:06] plication. Can. If you have. Server rendered data. That. Is passed into a client component. That may conditionally render it. You're always going to render
[01:09:19]  on the server. We talk. I talk about. You know. How you can't be selective. You know. On. Each. You know. Piece of data you
[01:09:26]  fetch. When you're doing server components. But it's more than that. The stuff. If you. Pretend you have a page. Right. And. You
[01:09:36]  have a bunch of data. Sources. Some of those data sources. Visibility. Is even. Under a client. Component. Deciding when to show or hide
[01:09:44]  it. Well. Even if the client component. Is off. Even if it's this large. Chunk of your page. That. By default. When you
[01:09:54]  first show it. You show it closed. So you don't show all the data. And then people can expand it. Well. In that scenario. With server components.
[01:10:01]  The server is still going to fetch. All the data underneath there. Because when it hits a client component. Island. Like when it hits that. It's just going to
[01:10:08]  try and serialize. All the props. Even the stuff the client will never show. It doesn't know this information. It doesn't know what the client's going to
[01:10:14]  show or not. It doesn't have privy into it. This is why the tree works that way. It has a good benefit. When you're on the client
[01:10:20] . And you toggle visibility. You don't have to go back to the server. It's going to be there instantly. But it also means that. Every single thing.
[01:10:27]  That you pass to a client component. Regardless of what the client component is going to do with it. Needs to be serialized. And that includes all the data.
[01:10:33]  That you may or may not show. So if you. You know. Are fetching a whole bunch of stuff. And your client component toggles what's visible. You
[01:10:41] 're still going to fetch. Everything. For every page. Even if most of the stuff isn't visible. It saves the round trip later. If it ever becomes visible
[01:10:53] . But you always take that hit up up front. With server components. I'm not saying it's a bad thing. I'm saying it's a very intentional trade-
[01:11:04] off. The way you solve this. Is you represent. That visibility in the URL. You say like. Hey. Like show details. Should be part of the request
[01:11:14] . And then that decision. No longer is a client decision. It's something you toggle. Which triggers a refire to the server. And then the server. Chooses
[01:11:22]  what to render. Right. It's the one controlling it. You can definitely work around this. I just want to say. At like a core level. You have
[01:11:30]  to understand. That. Client state. Doesn't. Like especially in the case of RSCs. Can't be the determining factor. Of whether. Of what you
[01:11:44]  fetch. Right. Are we following so far. Yes. Exactly. Astro does this. RSCs do this as well. The biggest difference between Astro and
[01:11:59]  RSCs is. Astro only sends the data once. Whether it's shown or not shown. Which means. That it solves the double data problem. You don't
[01:12:08]  have the HTML. And then some serialized prop format. You don't send both. You only get one or the other. In React server components. You get both
[01:12:17] . So. You traded your JSON blob. Your next data. For a JSX JSON blob. Essentially. So. But it is innate to this model. That the server
[01:12:29]  stuff. Can't think about what's in the client. So it needs to serialize all of it. This is not a good or bad thing. It's just how
[01:12:36]  it works. It's just something. You kind of got to be aware of. Right. This is part of tying all the data requests. Into a single thing.
[01:12:43]  It's that same mentality. Right. See on the client. Yes. Client data fetching. But this is important. Because. What I wanted to show here.
[01:12:57]  The reason that this is important distinction. Is I think people get. Hung up. On this client state part of it. Because. Because essentially. The client state.
[01:13:11]  Piece. Is what causes. The client server waterfalls. In our client centric. Models. If you think about it. Because if you didn't care. About
[01:13:22]  the condition of the client state. You could just. Fetch all the data. At the route. You have. All of this information. At the route level.
[01:13:36]  You know. All of this stuff. The only thing. That would. You know. This is back to that. You know. Hoist or not hoisting question
[01:13:44] . Right. Basically. The client state. Is what enables you. To opt in. To waterfalls. So to speak. Opt into places. Where. You want to
[01:13:55]  fetch. The data later. You don't want it. Part of the. Initial request. But. You know. You want the client state. To choose whether
[01:14:07] . To fetch something. But if you. Hold it to the same constraints. That you hold. Server components. Then. It's also. Not a. Like. It
[01:14:18] 's not a constraint. Does that make sense? Yeah. Yeah. Of course. Right. Except sometimes. You do want. To not load. The thing initially.
[01:14:30]  Like. The problem with. This. It's not a problem. But. It's. The. The challenge here is. That. Like. You can say. Yeah
[01:14:40] . Put all in the URL. But like. You still have the choice. Of whether you do. A single flight. With the URL. And fetch all the data.
[01:14:46]  Or you fetch. Exactly what you need. After the fact. Right. Like. If. With. Like a server. Component-esque model. You're basically saying
[01:14:55] . Put it in the URL. Because you. Don't want the clients. If you want to control. What gets data fetched. But then. When you go
[01:15:02]  there. You still are going to be. Fetching. You know. A good chunk of data. But yes. It's generally. Pushing us this way.
[01:15:09]  If you distribute your data. To the edge. Where is. Could you make the same argument. The react team makes. About waterfalls. No. See. The
[01:15:26]  thing is. The edge. Is actually. Almost a primary example. Of why. Think server waterfalls. Are okay. Is like a. Not a great way of thinking
[01:15:36] . Right. Because. If you run your RSCs. On the edge. Now the latency. To your end user. Might be shorter. But the latency. To
[01:15:46]  your database. Might be longer. Which means that. Server waterfalls. Actually are probably more impactful. Or as impactful. As client waterfalls. So they're not
[01:15:54]  winning anything. Is it a surprise. That. You know. Next. Put out. Partial pre-rendering. Which lets them move. The RSCs.
[01:16:03]  To the data centers. And away from the edge. Right. Like it. It kind of all lines up. If you think about that way. I think lazy loading
[01:16:16] . Is good user experience. Well. The thing is. It is. But what's good about it. Is not waiting. For everything to show it. But you don
[01:16:26] 't have to lazy load it. Ideally you would fetch. All that data. As soon as you could. And just not block. On as. As stuff came in.
[01:16:34]  Right. Right. Like. As long as you. Like. You don't want to be lazy. About. Very many things. Like there's cases. Where you
[01:16:43]  want to. But largely. If you know you're going to need something. You want to do it. As eagerly as possible. The problem is. With. You
[01:16:53]  know. A lot of lazy experiences. Is. That they. They kind of innately. Put waterfalls in your. In your way. When you don't actually need
[01:17:00]  them. See. This is one of the. Lazy loading is actually. One of the biggest challenges. From. From a client side routing. Perspective.
[01:17:07]  Right. Because every route. Is lazy loaded. Right. So. Which. Kind of gets us. To. Back to this diagram. But it's also why. If
[01:17:18]  you think about it. It's why there's. Hoisting. If. If. If. The routes. Weren't lazy loaded. And you had all the
[01:17:26]  component code. Already. You would just. Go to the new page. And get the data. You wouldn't. You wouldn't need to actually. Hoist up to
[01:17:33]  loaders. Generally speaking. There's a few exceptions to this. Like nested routing. Because you don't. You might conditionally show the. Outlet of
[01:17:41]  the nested route. So then you. Might create a waterfall. But like. Generally speaking. Even before you get to that question. The code splitting on the client.
[01:17:51]  Is what makes you want to hoist. Right. Right. On the server. You don't have that problem. Because. You don't care about. Your code
[01:18:01]  splitting. So. You might just start. You know. Right along this initial URL. Start data fetching right here. You don't really care about the rest of this
[01:18:09] . But. As I said. You shouldn't ignore that this. Second. JS trip exists. So. Yes. Loading stuff later. It's not about the loading
[01:18:19]  it's later. It's just not letting it. Force you to wait for it. Is where the benefit is. The funny thing is. We like. A lot
[01:18:49]  of these problems have been solved. Like suspense. You don't need a billion spinners. Spinners. And loading indicators are good. Not having a billion of them
[01:18:59] . Clickering in. But being like. A grouping. Where you're like. This is coming in now. This is coming in now. This is coming in now.
[01:19:07]  Waiting for the whole page. Would be really slow. Spinners. Are. Are giving you. Some kind of. UI affordance. To tell you something isn't there
[01:19:17]  yet. Streaming has spinners. We're not doing this to get rid of spinners. That was one of the weirdest. Parts about the. The.
[01:19:28]  The dialogue with. Remix. That always confused me. Because they. They were like. Talking about getting rid of spinners. And I'm like. Yeah. But
[01:19:35]  then when you stream. You bring the spinners back. Right. Like. It's good. That means you can get everything sooner. And it's. It's
[01:19:43]  the way we break. It's. I had it in this diagram. It's the difference between this and this. You know. I. I mean. Not even this
[01:19:52]  and this. But. Yeah. I'm. Spinners. It's. It's the difference between like. This and like. It's the difference between this. And
[01:20:02]  then. And like. And. Having a longer single thing. Come after here. If each of these red things. Is when something becomes visible. This. Can be
[01:20:13]  better. Than waiting for the whole thing. To come at the end. Spinners are bigger than. Clank pages. Yes. Thank you. Yeah. So. When
[01:20:28]  you have a combination of. Suspense. For. For. Initial data loading. Stuff like Optimist. TQIs. All these pieces. You can
[01:20:40]  make the experience. Quite smooth. And. The. The. The. The reason suspense is important. All these. Is because. The developer now. Can just write the
[01:20:51]  code. And trust the system. Will show the right loading states. And you don't. Have to like. Micromanage them. Right. Suspense doesn
[01:21:00] 't solve waterfalls. This was like. The old thing. When. React put suspense up. People are like. Oh. They solved waterfalls. No. They just
[01:21:06] . Made it. So that. You don't have to worry about it. It's so lovely. Because the thing. We didn't talk about here. Is what
[01:21:14] . The other benefit. Of these things being separated. Is that sometimes. This takes longer. It just happens that way. Right. It's not trying to give you.
[01:21:23]  Sideways middle finger. It's. It's just. It. But it does. It does. And if you put. All your stuff together. And they're
[01:21:31]  tied together. Then. The whole. Like. The longest thread. Takes longer. And that's. What's. What's blocking you. Right. Streaming. G
[01:21:40] ets us out of this. That's the benefit of streaming. I was. It's. It's the long tail problem. It's that like. Streaming isn't
[01:21:46]  about like. Necessarily. You know. Loading in that one piece. The page sooner. It's that like. If you have a bunch of services.
[01:21:53]  That have different. Latencies. Now. Your app. Isn't as slow. As your slowest dependency. You could. And this is easy to get to. You
[01:22:01]  can do some math. Right. You know. The inverse. Reliability. Check. Right. Like. Actually. I don't think you have to inverse it.
[01:22:10]  Right. If each service of yours. Was 90% reliable. Or 99% reliable. If you have 10 services. Then. That whole service. Is only. About
[01:22:22]  90% reliable. Like. You. You lose a whole order of magnitude. If you tie them all together. That's. Why streaming matters. And. It's.
[01:22:31]  Why. We still. You know. Talk about these things. In. In independence. RSC is stream. To be fair. So. And it's based on suspense
[01:22:40] . Which means it's based on UI. It has the right groupings. But. You know. That element. Of suspense. Tying it. Can also happen.
[01:22:49]  Client only. Like. There's. It's not. The RSCs aren't the only way to do that. I just wanted to kind of. Point
[01:22:53]  out. That. Where grouping and streaming. Actually. Are very important together. Right. But. Yeah. It depends on the speed. It depends on the speed.
[01:23:15]  The importance of your data. Right. So you control that. It's. It's an important. What's the. Brian Florence always used that term. Like. L
[01:23:21] ever. Like. I think it's. It's important. That we can control. And understand this. I find the slowest apps. Are already ones over
[01:23:37]  market managing fetching. Like doing five. 10k fetches over 50k. Would you just. Well. Yeah. Because there's overhead in figuring this out.
[01:23:44]  And you're like. The complexity of the system increases. As you try and figure out what you're supposed to do. But. The reason I wanted to talk about these
[01:23:50]  inputs. Is that. Generally speaking. If your stuff's going to. Like. This is the same. Like the relay problem. Because. It's not that hard to
[01:24:01]  picture. With our compilers today. That we could easily. Hoist all the data fetching. Up to the route level. So you wouldn't have to author
[01:24:10]  it yourself. And people are like. What if it's conditionally rendered? Well. That conditionally rendered. Should depend. On. Route based information. Not client
[01:24:24]  state based information. Like. All the information you need. Is available. At the point of the route. Yeah. Like remix defer. Or. In the case of.
[01:24:40]  I think in the case of solid start. Yeah. We have to first stream. On the. It works the opposite way. We stream by default. And then.
[01:24:46]  It doesn't matter. It's the same idea. Okay. Reason. So this is why I wanted to kind of talk about this piece. Because I think. The fundamental
[01:25:06]  question. And I was going to write this in a tweet the other day. Was like. Fetching in components. Fetching in components. Always has the
[01:25:16]  chance. For waterfalls. And more so. The chance for. Avoidable waterfalls to actually happen. So. Like. The RC side. Has generally been like.
[01:25:32]  Well. Server waterfalls are better than client side waterfalls. Um. Um. You know. Like. You can always still hoist. Stuff up. If you
[01:25:45] . Want to. Right. And then. The other side. That. That I've been arguing is. You need to be aware of these waterfalls. From the
[01:25:55]  beginning. And just design your solutions. That way. We know this is why Remix is taking so long on RSCs. They. They don't want to get
[01:26:01]  away from their loaders. Because like. The thought of. Introducing server waterfalls. Terrifies them. And. With good reason. Because. Like. Server
[01:26:12]  waterfalls. Aren't. Necessarily. Um. Meaning that the. The latency is low. Um. I think. I think I actually have a. A tweet
[01:26:25]  conversation. That I wanted to look at. From this whole thing. Um. It was part of this conversation. Right. The. This whole thing that. Dan Abr
[01:26:40] amoff. Ended up doing. About the read file thing. Caused. Zach Wright's code here. To. Make a bunch of examples. Where he. Put
[01:26:48]  loading. In a file system. Directly. In a component. And. In a lot of frameworks. It actually works. You can read the file system. And have
[01:27:00]  it. Like stream in. Or load into the component. And. The problem is like. The code he broke. Especially for solid. I was just like. Wow
[01:27:07] . That's just weird. Um. He. You can do it. But it's not recommended. Because we don't have server components. Quick does not have server components
[01:27:15] . Solid does not have server components. We don't. Like. On a page navigation. We don't go to the server. Necessarily. So. Dan
[01:27:23]  pointed out that. These weren't the same models. Um. Which is. Should be unsurprising. To anyone who's following the stream. We don't have server
[01:27:33]  components. So we do not do the same thing as react. The question is. Does this mean that. We are doomed. To have waterfalls. So. Uh
[01:27:48] . Brenly here. Went ahead and was like. Well. Why don't I just use. Instead of saying like. Is server. Why don't I just use a
[01:27:58]  server function. Like. You know. I showed an example earlier. And put them in the component. And he made. This. Example. And it was just
[01:28:05]  like. Look. Read file. Read file. In the component. Now. Instead of is server. It's. You know. A server function. That's a big
[01:28:15]  deal. Alright. What if I render a tree of components. So. He did it. He rendered. A tree of components. Guess what. Now. We have
[01:28:29] . A tree of components. Does anyone want to guess. If this. Has. Waterfalls. We. We create a function. That reads a file. In the component
[01:28:47] . We. Read the file text. And we show it. And then we. Have children. And then we just. We grab all these files. And we nest
[01:28:58]  them. Does this have. Waterfalls. Yes. Yes. It does. Actually. The answer is no. These are all. Oh. These are the. Okay.
[01:29:14]  Okay. Okay. You. You. You. Okay. You got it. There. These are the same file. So the cache function. Ddupes it.
[01:29:23]  Yes. But okay. Let's pretend. That it's not the same. That these are all different files. Let's pretend these are different files. Is this.
[01:29:36]  Is this a waterfall? See. We've got react developers in the audience. So like. Immediately in their head. They're thinking of the react model. And they're
[01:29:50]  like. Yes. This is waterfalls. No. This is solid. This isn't react. Of course. It's not. Thing. And again. He probably
[01:29:59]  doesn't want me to share his private chat. But. You. You guys are here. For. For the show. Right. So. Let me see if I can
[01:30:05] . Let me. I'll grab it off screen. And show the. The important parts. Because he reached out to me privately. And he was like. I. I
[01:30:13]  tried to change it. Like. Like Dan said. And I wanted to. Understand what was happening here. So. Let me see if I can find it. Messages
[01:30:21] . Perfect. Yeah. I don't have to. Do I have to reveal. Anything private here. Let me see. Yeah. There we go. This is what
[01:30:39]  our example. Showed. Two seconds. For his read file. In. This is what. This is exactly what we were showing. It's because. Yeah.
[01:30:58]  It's the third graph. Exactly. Like there's a slight bit of rendering consideration. Because create async doesn't block. Right. Do you know what the. The
[01:31:16]  server component version does. Now. I can think of how to make the server component version. Not do this. It involved hoisting components. Like through the parents
[01:31:32]  and stuff. But. I wanted to point out. That. It's not. That simple. In his case. He's running locally. So the network is making
[01:31:47]  no thing. The server is just spending two seconds on each file read. Right. So. Essentially. The solid version is actually parallelized. Where the naive react server components
[01:31:57]  version. Is actually. The one that's waterfalled. And while the network is not showing you a waterfall. You know it's going two. Then two. Then
[01:32:05]  two. And you're getting it at the end. I'm not. I'm not saying. This is the only way to do it. It's just. I
[01:32:19]  wanted to kind of. Point. Point. Point this out to people. Because. You. So does it create async stream the response then. Well on initial load
[01:32:32] . Yes. And it's automatically handled. But even on a navigation. It's still going. To. These are just. It doesn't need to stream the response.
[01:32:41]  When they're three separate requests. Like. You go to the next page. And you go. Uno dos tre. Like. You just go. Fetch. Fetch
[01:32:51] . Fetch. It turns out you can avoid while you don't block. Who would have thunk it? Well. People like async await. Async components.
[01:33:01]  Are what. Force blocking. Async. Like. If you guys. If we go back. A little bit. You'll remember. There was a. There was like
[01:33:14] . A tweet. That I made on. A little while ago. On Twitter. Where I was like. Does it bug you. As much as me. Let's see
[01:33:22]  if I can find it. Let's go. To my profile. Does it bug you. Is like. It was a while ago. But I. I showed the
[01:33:31]  difference. Between a. Something written. With async await. And something. Written. It doesn't matter. I wrote. I wrote something. That was showing the
[01:33:38]  difference. Between async await. And promise then. And. The gist of it. Yeah. Let's get back here. Is that. Async await. Is
[01:33:50]  innately blocking. It's like the last thing. I want to bring. I want to bring near my UI. Right. Just a second. I can. I
[01:34:00]  can. Just. I have a hack MD here. I've got some good links in here. Let me sign in. Why am I. It's funny. I guess
[01:34:09]  a bit. I haven't been on here in a while. Okay. Are server coins actually that composable? We'll. We'll get to this in a minute.
[01:34:16]  Server waterfalls are real. Okay. Let's. Let's go here. I want. I want to show you something. I got some great links for Next.
[01:34:31] js docs. To kind of talk about this. Because I think. This is an important part we understand. While. A. Client based solution. Could definitely cause water
[01:34:42] falls. Right. Like definitely like. I'm. You know. We could do it so easily. By simply. Doing it via layout. Right. If you.
[01:34:53]  But. Just. Offhand. Async. Await. Is. Interesting. Because. They're talking about parallel. And. Ace. And. Sequential data fetch
[01:35:08] ing here. Right. And they're showing like. Look. If you await. That's sequential. Right. Where you can parallelize. Is. Instead of.
[01:35:18]  Awaiting each one. Do a promise all. But. Promise all. Doesn't. Actually. Change the fact that. If this. If there was more data.
[01:35:29]  Getting fetched below. That it's not blocked by this. The presence of. Await. Means. Stop. Right. It's. It's interesting. People
[01:35:44]  love the DX of async components. I'm. I'm still very hard. Against. Async components. It doesn't. Match with my mental model. Of
[01:35:52]  what a component is. It's. You know. Ironically. Especially when you think about a react. That like. Rerenders components. Which doesn't happen with
[01:36:01]  server components. It. It is a very difficult. To picture. Something just sitting there. And blocking. Right in there. It's. It's. Returning
[01:36:19]  a promise. Means. Yes. The calling context outside. So. If you have two siblings. You can go. Okay. This one's got a promise. Let's
[01:36:27]  go to the next sibling. But. Hierarchically. It's blocking. I do not get. To this next line of code. Because this await. Has stopped me
[01:36:36] . The next component. Sibling. Can run. But. This is. Like. This is the end. I am blocked here. Now. Why does this matter
[01:36:45] ? This doesn't matter. If. You're component centric. Because like. How could you do this. Any. Way else. Because like. Components are
[01:36:56]  all that you can render. But if you're data centric. It does matter. Because. Like in this. Nested file components example. This data. Is required
[01:37:10]  here. But this part of the tree. Has nothing to do with this. So. I can fetch this data. And render this. We can. Keep on going
[01:37:19]  here. They don't need. To block each other. Right? Like. Because. Because. In solid's model. Async. Is down to the granular level
[01:37:33] . I didn't want to do the stream until solid 2.0. Because when solid 2.0 comes out. We'll have proper derivation. With blocking along the
[01:37:41]  reactive graph. I think it's important. Right now we have lots of null checks. But. If the data graph. Could block like react. You could keep the
[01:37:51]  rendering going. While blocking along the data. You wouldn't even have to do the null checks. It'd be like the best of both worlds. That's. That's
[01:37:58]  what solid 2.0 is. I haven't talked about it here and there. But. It's important to understand. That. You know. You don't need.
[01:38:10]  A blocking model to do this. Yeah. I mean. They are doubling down. On view caches. Because. Again. You're doing all. You're combining
[01:38:34]  all your stuff together. Right. The caches. Is how they're like. Solving all these waterfalls. Like there's so many solutions here. To solve
[01:38:47]  the fact that this innately. Isn't granular. Okay. Okay. What you're saying is. It's not blocking of like a process or anything. I mean.
[01:39:02]  It blocks rendering. At a coarse grain level. That's what I mean. I'm not saying it's like blocking. Like. Your server's sitting there chugging
[01:39:09]  away. And can't do anything. I'm not even saying. The next component can't run. But it literally hierarchically. Pushes. Causes waterfalls
[01:39:16] . Like. Like. Just simply by writing a weight. You're like. Saying. This will waterfall. You're just like. Stamp. I will definitely waterfall. If
[01:39:24]  there's something under it. What devs should understand is. Not all promises are interdependent. Yeah. Definitely not. But. If you hierarchically block.
[01:39:41]  You just sign them up for it. Like. Like. Let's talk about this a bit. Right. Like. I do think. Layout wise. We block more
[01:39:56]  than we need to. For example. If you have a user section. Even if you're going to use their details. You might go like. If user. Like
[01:40:03]  above the whole section. And the details fetching could happen below. So you might. Unintentionally block. Right. Like. It. It. It will happen
[01:40:14] . Right. Like. So. There is this kind of consideration. That happens. Even with a non-blocking system. But. As a baseline. A weight
[01:40:28] . Is. Is just like. Like. Let's pretend. I've loaded some data I needed. And I weighted it in my component. And that component. Grabbed
[01:40:37]  a server component from NPM. That. Happens to fetch its own data. I don't really know about this data. But it just happens to use it.
[01:40:45]  Well if I put that component. As a child. Of. Any of these components I'm showing in this examples here. Then. Guess what. I've caused a waterfall
[01:40:59] . These are completely independent things. They don't have anything to do with them. I did not need the data. From the artist. To. Do whatever other thing that
[01:41:06]  I put over here. But. I did. Because. I chose. To a weight. See on the server. It doesn't really matter. Right. Because like
[01:41:24] . You don't need. Concurrency. In the sense that you can just like. Show a placeholder. And then don't show a placeholder. But it
[01:41:30] 's interesting in the models. Where things are updating a lot. And interactive. This is why. Async await doesn't work particularly well. For the client side. You
[01:41:37]  have to like. Compile it away to something else. Like I've thought about ways of compiling async await. But I think the semantics become wrong for
[01:41:42]  people. It's confusing. Right. Where is it here. It's like the reblox stage. You can wait. Or not let it stream. Right.
[01:42:03]  But the thing is. At a certain point. Remix. Makes you make all those decisions in the loader. In one spot. Right. Whereas this is just hierarch
[01:42:13] ical based on the needs of the view. Like in a sense. If you view your server components as data. Then you're probably going to offer them in the right way
[01:42:20] . But if you're thinking of them in terms of layouts and templates. Then our hierarchy has almost nothing to do. Like it's related to our data. But it
[01:42:28]  is not the same thing. Right. Okay. So. This is what I was talking about. Avoidable and unavoidable thing. If you know. Sometimes. There
[01:42:41] 's promises. That are related. Like if you get a user. And you need to get their friends. You don't know. What friends. Until maybe you get some
[01:42:48]  information about that user first. It's possible you can do that in one request. Because you just need the user's initial ID. I'm trying to think of another
[01:42:54]  example. There's sometimes. There's like. Waterfalls you can't avoid. Because you need. To get the logged in user. Before you. Fetch something else
[01:43:03] . Like you can't avoid those waterfalls. But a lot of times you just need an ID. You know. Like get. From username. See. In this case
[01:43:11]  you just need an ID. Right. So. The way you solve this. Is. Again. Very easy in React. If you had something down lower. You can just
[01:43:20]  hoist it up. To the level that you need it at. So like. Don't get me wrong. There's nothing wrong with the RSC model here.
[01:43:26]  I'm just pointing. That you need to be aware of this. Right. You need to know you have to fetch it. And this is why there's these sections of
[01:43:35]  the docs. They're actually great. This is. I wish I had docs this good. That actually explain how to fix waterfalls. Like there's a whole freaking
[01:43:42]  section. You know. On Twitter we can all say like. Oh server waterfalls don't matter. Blah blah blah blah blah blah. But the next JS docs.
[01:43:50]  Have a best practice section. That is literally just. How do I solve waterfalls. That's like basically the. This whole page. And. And like. Here
[01:43:59] 's another example here. Preloading data. They have a really great pattern. Where they tell you. If you poised out your preload function. You can then
[01:44:11]  export it. You know. Off your component. And then somewhere else. Higher up. Can then call preload. Right. In a sense it's. It's
[01:44:18]  very similar. Like they just did it here. But if you think about it. You could also just ignore this preload. And just call get item. Just import get
[01:44:28]  an item from. Different places. And if it's a cache function. It will. It will be the same thing. Right. I like that they kind of were explicit
[01:44:38] . Like this way you can set your own. It's kind of like building your own GSX. Or build your own fragment. For data. So this whole pattern.
[01:44:47]  still exists. Where you can go like. Okay. I'm going to. I know that this section needs this data. And then you can build a whole pattern.
[01:44:53]  Around importing preloads. For the components that appear on the page. And then hoist them up. And do the data fetching. Right. I'm just
[01:45:18]  catching up on chat now. I'm just catching up on chat now. Do you like the way Remix handles at the reload? Yeah. Mostly. My only gripe
[01:45:40] . And it's minor with Remix. Is I don't think. I think data fetching is a graph. And I think data mutation is RPC. Graph
[01:45:50] QL ruined me forever. And that's the only reason why my APIs are a little bit different. Right. I realized once you go granular like that. Everything just becomes
[01:46:02]  basically tan stack over the network. And that's what we built with Solid Start. So. But generally speaking. I like Remix. I think they. They. They
[01:46:09]  designed for waterfalls in a really smart way. Do you think RSC default potential waterfalls due to domestic components solved by optionally hoisting is preferred? If
[01:46:22]  not. The thing is. Yeah. So this is the thing. On our toy demos. We're not going to get in trouble. Doing this stuff in next. And
[01:46:32]  guess what? You're not going to get in trouble. Doing this stuff in Solid Start 2. Like in our toy demos. These 45 line whatever. They. They
[01:46:41] . It's funny that. That you know. Like. There was a great tweet in here. Guillermo. Gave me. You know. A flex in here somewhere
[01:46:54] . I remember seeing the response and being like. You know. Good. Good job. Yeah. Looks good. You know. You know. Definitely. You know. P
[01:47:02] ushing the stuff with Solid. And he goes. I miss original. I think this API might set folks for problems. They're so fast on the React side. To
[01:47:10]  just be like. You know. We. Like. We've solved this. But then it's like. Not really. You know. Like. Don't get. Don
[01:47:18] 't get me wrong. Like. Server waterfalls are better than client waterfalls. As a generic term. But like. Essentially. Like. It's not like this stuff
[01:47:32]  is free. Like we've been talking about. So like. I do think the async component model. Like this is independent. I can picture a server component model.
[01:47:42]  That's not using async components. Ta-da. We've already solved part of the problem. Do you know what I mean? Like. Some of this stuff is
[01:47:49]  specific to the implementations that we're seeing today. I don't think conceptually. I don't have a problem. With the space that RSCs work on.
[01:47:57]  I'm critical of specific details. But on our toy demos. It's not going to get us in trouble. You could say that the client stuff will get you in
[01:48:06]  trouble sooner. I agree with that. It's also the way that people have been doing stuff for over a decade. So. There's also that. But. The
[01:48:17]  other option is just concede that local data fetching is kind of a bad idea. I know people want it because we continue to thread me and Dan where he's like
[01:48:29] , oh, what about co-location and all this? And it's like, you're always going to have trouble because you want to co-locate,
[01:48:37]  you can't see the whole picture on the data side, which means you're always going to introduce the potential for waterfalls. You know, you can do it. You
[01:48:45]  know, kind of half-assed sort of like this. I'm not saying that this is bad pattern. This is what I'm suggesting. It's all that if you
[01:48:52]  really want to like zone it, you can start with route sections and then you can import from like sections of your page and you make these, you can always chain load functions
[01:48:59]  into each other or whatnot. It's just like, like at a certain point, it's like micro front ends. It's like the thing you have to do,
[01:49:08]  not the thing you ever want to do from a performance standpoint. Yeah, it is the loader pattern. They just, it's not a real thing. They just,
[01:49:20]  they just like, let me read the docs here. You can combine the cache render preload pattern and server only package to create a data fetching utility that can be
[01:49:31]  used throughout the app. With this approach, you eagerly fetch data, cache response, and guarantee that the data fetching only happens on the server. Utilized get
[01:49:37]  items can be used by layouts, blah, blah, blah, blah, blah, blah, blah. But my understanding here is that it's manual. I could be wrong
[01:49:46] . Maybe, maybe it's not. That'd be cool if it's not. So like this, I had two motivations here because like, I think Dan is correct
[01:50:11]  to be annoyed at people. Keep on conflating these things. Like we're, we're not trying, we're not, but on the other hand, the
[01:50:22]  invitation of like people trying to meet the criteria is also what's forcing everyone to try and like hammer something. It's, you know, with this, you know, what
[01:50:31] 's the thing? If everything looks like a nail and you need a hammer or whatever, like it's, it's why we kind of end, end up in,
[01:50:37]  in this kind of zone. Because you can very easily create waterfalls if simply from the fact that you have a conditional on some client logic that says like, if this
[01:50:53]  data above is loaded, then render this. And then something below has it. And now suddenly you have a waterfall. It doesn't even have to be a waterfall is
[01:51:03]  what I was showing with the, the, the nested file thing. But I care so much about the, us not doing that, that I push remix style loading.
[01:51:16]  Uh, you know, basically if you've ever seen, you know, solid router right from the beginning, you know, this predates remix actually, um, we
[01:51:25] 've been doing these kind of what data, this is the latest data, data APIs, but like the, the whole idea is that there's this kind of isomorphic
[01:51:37] , um, where is like the load function. Yeah, I mean, it's funny because when you do it manually, you have to kind of actually pass in these
[01:51:57] , these load functions, but this is actually for the migration. I got to see, this is, my problem is docs. I need to do better here. Where is
[01:52:05]  the load shows up on the page 55 times. So try and find that one. Here we go. Load function, right? Get your cache function, call it in
[01:52:18]  your load function, put it into your router. We do this with file system routing, a solid start, but just kind of, you know, like the remix ask popular
[01:52:27] ized approach is very much, you know, a, still a reasonable solution in these, in this day and age when you can't actually solve the stuff, right?
[01:52:41]  I, I have problems with waterfall in general. And I think, I think people, let me continue reading from that document I was talking about. Server waterfall is real.
[01:52:51]  I don't know who needs to hear this. Maybe repeat it out loud until it sinks in. So, look at all the work that went into solving M plus one
[01:52:59]  problems in GraphQL. You know, like you're fetching a friend list of users that have friends and so on. Before I was working on SolidJS,
[01:53:07]  I did a lot of work on an ORM. It was GraphQL-esque in a time before GraphQL. I did a lot of my work in automating and
[01:53:13]  optimizing cross model queries from the knowledge of database schema and query analysis. I became accused, I can be accused of maybe micro optimizing, but this is a real thing.
[01:53:21]  So, I wouldn't expect, say, server components to solve the M plus one problem on their own. D-duping caches can help repeat requests, but that
[01:53:28]  doesn't really help you making multiple requests with like different keys where you could group them. But like, these are the kind of thing, this is the kind of thing,
[01:53:36]  you know, that we have to be aware of at design time, right? We already talked about edge functions and talking about the distance where server waterfalls matter. We
[01:53:48]  talked about async/await. Some waterfalls are unavoidable. You need to check if someone is logged in before you fetch something. You need to get some
[01:53:56]  other data before, you know, some other data. However, component organization is based on view hierarchy rather than data hierarchy. It's a layout consideration. We could have all
[01:54:04]  the components we need to fetch children before the parent has returned, but we don't show them yet because we don't show certain elements without others, right? So like
[01:54:14] , yeah, any waterfall is not great. Some are acceptable where others aren't. But as, as a baseline, yeah, I'm not going to, I'm
[01:54:28]  not going to say that waterfalls are good. You're never going to see me going like those are the good type of waterfalls. God, that was the funniest time
[01:54:35]  period. When RSEs first came out, there's like a bunch of tweets talking about good and bad waterfalls. And I'm like, well, let's
[01:54:42]  see if that works on people. Um, but yeah, I mean, look, like, do you, I, I mentioned the edge because like, would partial pre-
[01:54:58] rendering even be a thing for next 14 if it weren't for the, the waterfalls from the edge? I, I have to, I have to legitimately ask
[01:55:06]  this because if you can stream the content and synchronous rendering is in the sub milliseconds, it's fast. Even in react, it's relatively fast synchronous rendering. Just jamming
[01:55:17]  some strings together is relatively fast. If you're at the edge, like if basically the difference between, between like doing the sync render and like kicking up an edge function
[01:55:35]  to then grab the stuff from the CDN and serve it out and then proxy back to a server to, you know, get this, you know, the rest of the
[01:55:42]  RSEs rendering. I'd be surprised if the latency difference was significant from just streaming from the edge in the first place. But the huge difference is the length of
[01:55:51]  the server waterfalls on the edge are a lot longer. And I feel like if server waterfalls didn't matter, we wouldn't see this feature, you know, we
[01:56:01]  just push people to, to deploy to the edge. Yeah. Anyway, good waterfalls only occur in nature. I'm not sure where else would work. I'm
[01:56:22]  here. I would expect the app dev. Yeah. Well, the thing is we're always pushing with frameworks to make things easier for the app dev. So it is
[01:56:38]  very desirable to find things that are good enough and then be able to push them under a rug. You know, like React didn't want you to think about how your
[01:56:48]  UI is updated, you know, like in terms of like data flow. So they came up with the virtual DOM and just threw everything or like basically immediate mode for the
[01:56:56]  DOM. That's a perfect example of that kind of simplification. So what's interesting that is over time we optimize, right? So that's why we're,
[01:57:05]  we're, we are at now and where people are like, I don't know about the React model. React model is actually really good. It makes a lot of sense
[01:57:11]  in terms of like server components. It's, it's having these diffs and stuff. It was like React was made for server components. It's so funny because
[01:57:17]  sometimes react gets like flack for the things that are like so obviously what it's good at. And people are like, you change the game. It's like, no
[01:57:24] , React was always like this. I, you know, like, Oh man, it's funny. There's other things where react has changed, but like server component model
[01:57:34]  fits react quite well. I mean, I've shown this on stream. It's been a while. Have you, has, have, has anybody ever seen fax.
[01:57:41] js? Jordan walk created react before react. He made a JavaScript for framework that was seamless client server rendering, right? Once render anywhere, blah, blah, blah.
[01:57:51]  Reactive user automatically updated, no bindings performance, structural, blah, blah, blah. But essentially it was kind of like server components. My understanding is like, he
[01:58:00]  called it fax. Cause the idea was like, you could like send a page from the server, like, and have it on the client. And then it would like
[01:58:08]  diff the difference. Like essentially it was like a fax machine between the client and the server. And that was where the idea came from. Um, and yeah,
[01:58:17]  this, this is 12, 13 years ago. So like, I just kind of like, I think it's important to understand that this has never been that far from
[01:58:28]  their minds. It's not like they're just trying to like screw everyone over by changing it. But I think the tricky part with react and they, so funny,
[01:58:36]  cause they've always been the different one a little bit is that when people see react, they see different things. When people saw hooks, they saw fine grain reactivity.
[01:58:43]  They might've not known that, but in their head, they were thinking fine grain reactivity. And that's not how hooks work. I think that's been one
[01:58:50]  of their struggles over time is because they are so different. It's crazy that they're the most popular solution from that sense. And it's like, you have to applaud
[01:58:58]  that. It's just, you have to understand that like, yeah, react is very unique and I don't, I think it takes a lot of time for
[01:59:13]  people to recognize what it truly is. Can you use the edge with over? So yes. Cloudflare, um, Netlify, um, D no deploy.
[01:59:27]  Yeah. Lots of places use the edge with oversell. Yeah. Yeah. So you guys are just doubling up what I said earlier. Yeah, I, I actually
[02:00:03]  want to at one point have Matt Cain on as a guest. Um, he's the guy, he's the principal engineer on the frameworks team. He at Net
[02:00:12] lify, and he would have lots of stories to explain, uh, about how, um, you know, what it's like to be building edge solutions and interacting with
[02:00:25]  different frameworks, um, get the deployments going. I'm very stoked. I've reached out to him. We'll see if he's ever available. Live in
[02:00:31]  different time zones and like myself. He's a family guy. So like, it's hard to get him on, on his off hours. Yeah. I, I could
[02:00:39] , I could, that's, that's another interesting one. Yeah. AWS has edge. Yeah. Um, but yeah, yeah, so I don't know how
[02:00:52]  far I want to go into this, this article. Cause it, I was thinking about, I wanted it for the, for waterfall part, but I basically started writing an
[02:01:03]  article this week because I kept on hearing about how composable server components are. And I kind of want to call into the question at some point. Maybe we'll,
[02:01:10]  we'll get there in a minute. Let's, let's, let's finish up on waterfalls first. So not that I actually have a, a ton to more
[02:01:23]  to show, to be fair. I just wanted to kind of point out that it is very easy to create waterfalls regardless. Um, right. All it takes is
[02:01:42]  if, if this had like a, you know, ternary around the children, that was like, if file text props, children, we've created a waterfall.
[02:01:50]  And I think it's interesting because when you tie it to the component tree, like RSCs do, you have this innate ability to make it really easy to create water
[02:02:05] falls, obviously. But, um, you, you can also kind of just like think about it in terms of inputs and outputs. It's, it gets a little
[02:02:11]  bit harder to compose stuff. Um, when, you know, each piece has to export both a data tree and a view tree, right? So like if you have a
[02:02:23]  data loader, right. That, you know, like remix or solid style and you're kind of expected to export it, right? Actually, sorry. We,
[02:02:30]  we just saw this a moment ago on the next, uh, RSC docs. If you're expected to do this everywhere, um, like it can impact composability.
[02:02:39]  And this isn't even great because these are still, you know, potentially separate requests in each one. You know, GraphQL had fragments. How do you deal with
[02:02:45]  stuff like fragments, right? So the funny thing is, thanks to you guys kind of poking me at this. I actually realized something the other day. Server functions in
[02:02:57]  solid. I just want to, the reason I'm talking about this is we know that react solves a certain problem with RSCs. I want to just throw out
[02:03:05]  one other like possible way of approaching this just for the, for the sake of doing it. This here is a server function that gets a user by some search or a set
[02:03:16]  of users by search queries. And then it uses a data loader from GraphQL, which basically means that every time you call user loader dot load ID, it collects
[02:03:26]  the IDs on the micro task, I believe. And then it will resolve them into like a series of promises. So essentially we can load a set of users and then
[02:03:37]  we can map over those users and do like hundreds of requests against this, but it'll only become one request to the database. So we only go to the database twice here
[02:03:46]  and then it'll map it back as promises into the data. Now this data loader could also be another server function because in solid server functions in the client or R
[02:03:57] PC, but on the server, they're just normal function calls, which means that you can nest server functions and side server functions and side server functions, and they can be
[02:04:06]  called independently as RPCs, but they can also be joined together without having the overhead of like the, the what do you call it, the request response cycle.
[02:04:19]  So you could, in theory at least, and these can be defined anywhere, obviously, basically construct data loader type patterns in your server functions so they could automatically do something
[02:04:31]  like this. And because we have Sarah Bell, which handles serializing promises. So if this users.map returns a friends promise for each one of these friends, well
[02:04:42] , Sarah Bell will resolve it on the client. And in fact, what will happen is when we do this, it will go get the list of users. This is the
[02:04:49]  only await here. So it waits to get the list of users. And then it will immediately start streaming back the results. And as these friends load in, these friends
[02:04:57]  requests loads in, it will continue streaming that data to the client in the response. So it's kind of, it's basically GraphQL, right? Where we get the
[02:05:05]  main part of our query and then each nested section in the same request comes back streamed in as it resolves. So like there is a composition story here, right
[02:05:16] ? Because you could, you know, make a few queries for sections of your page that you, for the data you want. And then you could have those queries, you
[02:05:23]  know, get called by other queries and join the data together and have it all stream in over a single request. Just, just kind of the show. I don't
[02:05:30]  know if people need to get this crazy, but the biggest difference is, is that each one of these trees is granular. You can choose to make one big tree. You
[02:05:40]  can choose to make no trees and just have single requests. You can choose to make 10 of them in parallel. You have the complete control over how many trees happen when you
[02:05:50]  go to the next page. It's not one tree. You don't have to fetch all the data. You can invalidate the thing that you want and group things
[02:05:57]  as you want. I just, I just want to show, you know, this side, the challenge obviously is on the other side, you'll get back objects that
[02:06:04]  you'll wrap and create async. And inside those, there'll be properties that are promises that you'll also wrap and create async. And it'll just chain down
[02:06:15]  where you get them. What's kind of cool though, is because we use cache functions, you won't have to use context to get them down. You'll just
[02:06:22]  fetch the same thing further in the tree and it will match on the client side cache function. And basically means that instead of context, you will use that as a way of
[02:06:31]  pulling out the queries and the nested queries that you want. Maybe I have to show this for you to understand, but like, um, this whole function, if
[02:06:40]  this was a in the cache function, get user friends ID search, you could call it at the root of your tree. You could call it in your components. You can
[02:06:51]  call it way down and then use the section part of the data you want. And you don't have to worry about it refetching because the cache will dedu
[02:06:57] pe it on the client side. So like, essentially you can just call the same cache function multiple places and then just grab the data off the portion of it that you want
[02:07:08] . And so without context, you have the complete way, like you don't have to pass it through your tree. So it's kind of like, as I said,
[02:07:15]  it's a lot like GraphQL with fragments, except you're not, um, like prop drilling at all. And you have complete control over the invalidation on a
[02:07:25]  per key level based on your cache functions. Anyway, I feel like I need examples to actually show this. Cause I'm like, sound like I'm all fancy. I
[02:07:32]  just wanted to point out like completely doable without server functions, not to say that people can't cause waterfalls with them, with a model where you're locally data fetching
[02:07:41] . I'm just saying like, you can also create something with the most optimal performance profile with this approach. Um, you know, client waterfalls aren't a problem
[02:07:53]  if you're aware of them. Yes. It's basically react query across the network, except we have a lot more powerful serialization in the way that we can stream
[02:08:10]  our responses back. Like if you saw my last stream, um, there's an example that I have on here. I'll show it very briefly here just for context.
[02:08:20]  Cause I think it's important for people to kind of understand it. Was it the notes demo? Yeah. I I've updated some stuff. I'm hoping this is
[02:08:30]  all still in the right place. Let's look here. Yeah. Yeah. Yeah. This one, right. In, in this demo. Just load the pages, no
[02:08:43]  data loading here, right? If I go in here now, I need to fetch the data for this section of the page. If I go and edit this, hello,
[02:08:50]  add some stuff to it. I press on what you can see is going to see a single post request and that post request returns a response where it includes the data that
[02:08:59]  it needs for the next page. So even though we did the redirect in the client, it actually posted and fetch the data for the next page all in a single flight.
[02:09:06]  Very similar to RSCs. We're just rendering the data instead. But the thing is, is this is all key base. See notes null, which means no search
[02:09:13]  query notes, preview zero. So we have the power to control exactly what keys we we fetch on the client for the next page we go to. And there's some
[02:09:22]  smart heuristics which actually determine what's already shown on the page. It diffs the URL of the current route versus the next route to know which data also doesn't
[02:09:30]  need to be fetched in these cases where we're being granular. Our default is refetch everything like most systems. But you have complete control as a key base system with
[02:09:39]  this. So there's no even mutation waterfall in the scenario and it's completely granular. This this is the kind of thinking that I'm talking about. Yeah, I
[02:09:57]  mean, cache. Yeah, you should be able to nest the cache inside a function because I mean, we serialize at the outermost, but there's a basically
[02:10:06]  because it's just a cache on the server. So like when you're doing a request on the server, it just means that it won't if it hits that same
[02:10:12]  cache function more than once during this lifetime of the cache or the request, it will only it won't calculate it again. And it'll actually just return the previously cached
[02:10:21]  results. So yeah, you can nest cache functions to you. Right. Yes. I think with RSCs, there's a sweet spot for websites. Blogs
[02:10:32]  that you can go full RSC with caching using route and valid apps. A lot of client posts need to use React query to RPC to control the re-rend
[02:10:38] ering granular. Exactly. I came to the same conclusion, which is why I was just like, I'm no, no offense to anyone. I actually mostly care about the
[02:10:47]  second category. You know, people can build websites lots of different ways. You don't need this. But I wanted to see if we can make the ultimate React query
[02:10:58]  TRPC combination essentially. Right. That's what like what I, what we did here. I think there's still room for server components in general, but I just realized
[02:11:08]  that going to server components wouldn't actually solve this problem. Right. Is solid start or just solid with solid router? This is solid start. Solid router can do,
[02:11:25]  can't do single flight because it needs server functions to do single flight. So it needs solid start, but all the APIs are the same. If you took a solid app
[02:11:30]  that you solid router and then stuck it into start and then add a server function, you'd have this functionality. It doesn't even have to be tied to server functions.
[02:11:36]  It's just, I've implemented the protocol there. Yeah, exactly. I agree that that's the, that's, that's kind of the whole, the whole
[02:11:49]  point of, of what I'm saying here. That's why I did this post in the first place, because that's, it's, it's, unless you're
[02:11:57]  not talking about server functions, you're just talking about putting it inside the component. When I, in our community, server functions and server actions are, are slightly different things
[02:11:53] , but they're on the same category. So I call server functions, what react people call server actions, generally speaking. So yeah, right. So like being able
[02:12:19]  to just like, if, if I, if I opened this notes example, for example, here with notes, what you're going to just see here in the notes example
[02:12:32]  is that on, you know, a given page, like the edit page or whatever, we're just calling get note and get note. If I go here, when
[02:12:41]  this API is just, these are just a bunch of server functions, right? You just write your logic right in there. But yeah, I think what you're talking about
[02:12:50]  is just being able to do a database at the top level in your component seems nice, right? You can reduce having an extra wrapper. However, async await comes with
[02:12:59]  consequences, right? Like, which, you know, it's basically waterfall inducing. It does. Yeah. There was a great article from Matt Cain actually this
[02:13:12]  week about doing it with remix. And I was just like, so stoked that like the exact same patterns would work with remixes and start, you know, like just perfect
[02:13:20]  granular kind of thing. The difference with what we do in the router here is it's reactive granular here. Like this is, it's, you know, I'm kind
[02:13:29]  of leveraging the fact that there's client state, so we can choose to not even fetch things like not even go to the server for certain things where, you know, a
[02:13:36]  cache based system will try and then return the cache values. It's a subtle difference. Usually cache based system means you don't need as much JavaScript code, but I
[02:13:45] 'm not too worried about the JavaScript code we have here. It's not a ton anyway. Anyway, diverting a bit. I just wanted to kind of help people
[02:13:54]  picture, like in a sense, GraphQL with Relay solved a lot of these problems. And that's why I did a previous stream about that. Now with the
[02:14:04]  DX we have with used server and these kinds of things, it's kind of incredible. We can actually do things like that and it feels way lighter and way easier. TR
[02:14:15] PZ already showed us. This is like just the next step of that, right? It's essentially, you know, compile or bundler based TRPC. And
[02:14:25]  I know I said that, I've been saying that for, you know, a few, a little while now. And it just came out and I think in a recent
[02:14:30]  React blog where they said basically the same thing. I was actually kind of happy to see that formalization because it's very similar to what I've been saying on the
[02:14:37]  streams when cervical phones first came out. I was like, you guys, it's Astro, right? No, it wasn't, but it was enough to get the
[02:14:44]  idea across. I'm glad they formalized it. I wasn't sure they were going to because they seem to not want to mention other projects. So one of the hardest
[02:14:50]  things when you create a solution that's so unique and powerful, you don't want to necessarily compare it to ones that don't quite do the same thing or achieve the same
[02:14:57]  thing. I'm glad that they've changed because it makes it way easier for people to understand what's going on. But it did take them acknowledging stuff like PRPC
[02:15:07]  and Astro existed. So that's big of them. Does this work with islands? Well, the single flight works with islands in the sense that it would work as it
[02:15:20]  would for client side mutations, if that's what you're asking, right? Like this example works with SSR auth, right? I can turn SSR off on
[02:15:31]  this and it'll still be single flight mutations. We don't have to server render the page to get server data flows like this. We just go SSR false and it
[02:15:40]  should still work. You just, I have to actually, will we get single flight mutations with SSR off? Probably not because it won't render the app on the
[02:15:50]  server, but it will still, yeah, that's actually a good question. Should we double check that right now? Just for fun. Why not? My gut is
[02:16:02]  that you won't. The app will work with SSR off, but it won't get the, the single flight because it can't render the, the, the next
[02:16:12]  page is what I'm thinking. Um, not start demo. What's the other one? Sorry. I know this is a slight tangent. It just was, I'm
[02:16:21]  way too curious about this right now. Um, let's go. Beat config dart. SSR false. So this is like spa mode in remix or whatever, you
[02:16:39]  know, people like the doing this. Let's go, let's do dev. My gut is that the app works, but the single flight mutations don't because it can
[02:16:50] 't send them back into it because it's not server rendered. Right? So app loads the data on the client. This time we edit. Oh, that's a
[02:16:59]  weird hot reload thing. I wonder if it's going to, yeah, it's not going to do that again. I have some problems sometimes when the dev server starts up
[02:17:05] . That's weird. Anyways, if I remove a bunch of these and I press done. Oh, nevermind. Yeah. Single flight mutation in CSR mode. Huh
[02:17:14] ? What is it? Oh, it's because I don't use the handler. I render the app directly. Yeah. So yeah, single flight mutations work in SSR
[02:17:21]  mode. Um, yeah. Can you do something with subscriptions? They're not web sockets. You could keep a long lasting request open and like keep on streaming the
[02:17:34]  data in. But, uh, I mean, we've done server side events using the URL of them. Yeah, I guess so. Interesting. Yeah, you're
[02:17:42]  right. I forgot to turn SSR on like the whole demo and it was working. So yeah, I guess we're fine. We're discussing whether or not you
[02:17:52]  can do server codes in quick. Do you think you'll implement server codes as solid? Probably still. I'm just, there's so many things that you could prioritize above
[02:18:02]  it. And I initially prioritize server components above resumability because honestly, the architectural considerations like the waterfall prevention on navigation, all that matters more than hydration cost.
[02:18:17]  You know, I mean, I understand that if you have an e-commerce site and you need to get the fastest load speed, you care about hydration costs more. But
[02:18:23]  like also, you could probably use simpler tools. Um, you know what I mean? But like, I think there's still, there's definitely room for RSC
[02:18:34] s. The problem is you have to solve the data serialization problem. Quick might actually have a leg up there because they don't do out of order streaming yet. Out
[02:18:41]  of order streaming is actually what complicates everything, honestly. They also might go for a more container based or like more boxed off version. But I think it's really
[02:18:50] , if you want that smooth DX, you got to make it really integrated. Yeah, so yeah, anyway, so yeah, I care. Yeah, every solution that
[02:19:07]  I built with SolidWorks on pure client side render spa mode, and then use server augments it, it's a very nice thing, but we're kind of diver
[02:19:16] ting a bit from the point, which was that I wanted to show that, you know, there's ways to address waterfalls when you architect things, you know, a
[02:19:30]  certain way, and it doesn't have to be a painful architecture. Obviously, some problems are trickier than others, but other, you know, adding a load function to
[02:19:40]  your route is like, you know, ta-da, you know, this wasn't, wasn't terribly hard. You know, this is a solid loader,
[02:19:48]  solid router, if we have solid tan stack router, you could just have a different route config, it's completely pluggable. like, essentially, this sort of
[02:20:03] , like these patterns, the DX of server functions, all the stuff that's nice that made Guillermo want to post that tweet equally apply, because I'm pretty sure if
[02:20:13]  I look at this creep tree, uh, here, Ryan Florence will have also, oh, there we go, Ryan Florence also has a version with, with, uh
[02:20:26] , um, with this, right? So he's got an action, where's the loaders? What did he say? Remix home page initial code sample from
[02:20:36]  three years ago. Never seems a bit inaccurate. Glad these guys caught up. The RPC bit from solid start is pretty cool. Well, uh, thanks, Ryan,
[02:20:44]  for, uh, giving the nod our way. We definitely had server functions before next. Um, that's, that's very kind of him, but yeah, I mean
[02:20:53] , I'm not surprised. These patterns have been around for a while in a sense. Yeah, I mean, especially the actions since Remix added them. This is
[02:21:05] , this is, this is very much, um, you know, the DX of almost every JavaScript framework, um, modern meta framework these days. So, you know,
[02:21:17]  if you go and ask Ryan Florence if they solve waterfalls, he'll probably say, yeah, I mean, this is why we do what we do. So it's
[02:21:25]  fine that you can do stuff the RSC way. It's fine. You can do stuff the other way. Um, they aren't the same thing. So while
[02:21:34]  solutions that are smaller than React, solutions that are faster than React, solutions that, um, you know, do, you know, less work than React exist and combined with
[02:21:48]  some of these other non-RSC solutions, you know, like I've talked about, doesn't, you know, mean that React RSCs aren't a
[02:21:57]  good option. It just means that there's other ways to accomplish a lot of the same goals, but not all the goals have to be the same and that's okay.
[02:22:05]  You don't need to read a file in the middle of a component. Honestly, that seems really odd to me. Yeah. I mean, it just went down to
[02:22:21]  my priority scale. Once I realized that I wasn't doing any favors for people making apps, I was like, okay, let's just call solid start. We're like
[02:22:29]  ready to go. Right. We're, we're, we're very close. Let's just, let's just push this out the door and not worry about server components
[02:22:36]  being there today. And let's just like, let's get onto the next thing. Let's get 2.0 going. Yeah. I mean, exactly. Em
[02:22:48] ber router. Like that was, that was always my huge influence and these guys as well. Yeah. So yeah, I mean, it's tricky. There's so
[02:23:10]  many places. I honestly, getting the right async model is the most critical thing that I can think of. And I feel I need a solid start out. Otherwise,
[02:23:20]  I would have all been over solid 2.0 by now. Yeah. It was something really weird where react routers started in the right place and then they got lost
[02:23:33]  a few years, but Ryan, you know, has done the full circle and as it remixed the great, great framework. Yeah. It's just so funny because
[02:23:46]  it was only in react that it got lost. If you go to Sapper, you go to view, you go to solid the whole time. Like we were all using
[02:23:54]  loader esque patterns, but on the other hand, people don't give remix enough credit for the action and the, especially the optimistic update thing. These are things that did
[02:24:06]  not exist. We, we were all copying Ember for like a decade other than like, you know, most, a large chunk of the reactor ecosystem, um,
[02:24:15]  you know, between router after version three, but when remix came back, the changes they made are just as impactful as when the Ember team originally did. Um, yeah
[02:24:30] . Anyway, I think that's a all I wanted to say about waterfalls. Surf functions in TanStack are pretty dope. Show me the image. No,
[02:24:48]  come back. No, it's going to be gone. Give me something else to talk about. Come on, Twitter, don't die on me. Anyway. To
[02:25:07]  be fair, I still got more to talk about. I think the next topic we're going to talk about is, yeah, let's just do it. Are server coins
[02:25:13]  actually composable? Yeah, we're trailing on docks terribly, but I'm happy with all the patterns. I think we have the right balance of stuff. Yeah
[02:25:29] , I just got to go to Tanner's Twitter. You're right, Benton. Let me see here. It looks like Tanner Linsley. Oh, he
[02:25:53]  added a not found. That's cool. Otherwise, they're very similar to what we're doing. Yeah. Yeah, adding the meta tags is something I want to
[02:26:02]  add to our router. This is another topic, though. I guess this is the thing, but you know what's cool about Solid Start is I don't care. If
[02:26:08]  I add a feature to the router and it lets you use the router instead of Solid Meta, like that doesn't actually affect Solid Start. You choose the router. You
[02:26:15]  choose the meta library. We might update some templates, but it actually, it's not like a breaking change to Solid Start. Yeah, let me see which tweet this
[02:26:27]  one is. Okay. Yeah, this is the one from Start with HPX and you want to ability at Cosa Triastro then templates. Yeah, yeah, exactly
[02:26:41] . I think this is a good, it's kind of like the thinking, like the progression of things is pretty fair. Yeah, no, that's fair. I
[02:26:55]  was thinking you were thinking of a different Dan tweet, but that is a good one. Yeah, I know. I'm still catching up on chat, and I really
[02:27:12]  like, I don't need it. I can understand why it's like easier. You're just like, my data is right there. I read it, but it's
[02:27:21]  like, it's like seeing that async await in the component and this is a DX thing. Everyone has their own thing. It just, the await is just like,
[02:27:28]  it's just not the way that I view the world. Like when I think of components and stuff, I'm going to wait smack in the middle of it is like just
[02:27:37]  the most boring thing that I could imagine. anyway, it's like saying like, don't be declarative. Don't be reactive. Don't update. Don't
[02:27:50] , you know, it's like, stop. Hammer time. No, I mean, it's just, I don't know. That's just me though. Okay
[02:28:02] . Let's, let's, let's move on. So yeah, let me continue my discussion here. We talked about how server waterfalls are real. I think
[02:28:16]  we should kind of go there. A UI tree is a merge tree. And I, what I put here is like, after all, that's a big win of react
[02:28:23] , no separation of concerns, but it means that when part of it loads an update, you end up re-rendering the whole thing. If you have five data
[02:28:29]  sources to render a page, you'll load all five of those data sources, realize that few. In the browser, we don't think about this as much as components.
[02:28:36]  Also give us node level granularity, like per component. You can start this process from any component of the tree, and you might not need to refresh the data as it
[02:28:43] 's in a store or context or something above. But server components are a single tree with exception, maybe around nested routing, which can have, you know, a couple
[02:28:52]  of trees. But for any of those page sections, you're in one tree. So any mutation navigation, you need to do the whole thing. It's one of its
[02:28:58]  strengths. It's single flight, but it ensures everything is there, but it's also has consequences through your data, right? You're going to rely a lot on server
[02:29:06]  caches. D-duping is something that react can provide. You know, we talked about N plus one, but what does it have to do with composability?
[02:29:13]  Right? Right. So like, I actually didn't finish why the waterfall thing is important for composability. Reusable server components would need to participate in a cache system
[02:29:27] . It would need to know that you're using Vercell's blob storage or Netlify's blob storage or KV from Cloudflare. Otherwise, it would
[02:29:35]  be reusable. You could also, you know, so you need a way of getting the cache into the RSCs, right? Because if someone made a third party R
[02:29:46] SC, are they going to be aware of your caching mechanism? Now, you can use something like context from react. So, you know, in theory, there
[02:29:54]  should be a way to inject that cache, right? You could also not participate in the cache mechanism, but you couldn't wrap your calls inside server components with it. Right
[02:30:05] ? And what I was going to point out here, it's interesting. If you were just exporting functions that did the data fetching without server component considerations, the end
[02:30:14]  user could always wrap the stuff in the cache choice, like the caching of their choice. But since server components abstract the call site, you need other ways to inject
[02:30:24]  it. So I don't know. Does anyone know if react provides a cache API for injecting caches into third party server components? But I think that affects composability
[02:30:35] . What I wanted to say about server waterfalls is, so it's clear that server waterfalls are real, but does that impact composition? Well, not necessarily. You
[02:30:43]  can export preload functions from all your components and people can choose to use them or not. You could do this without RSCs as well. But one thing you
[02:30:50]  wouldn't do without RSCs is not export those preload functions. But you could do that here. But should you? Right? What I'm basically suggesting is,
[02:30:57]  you kind of pushed, if you're making a third party library server component thing that does data fetching, you kind of pushed into making these preload functions so that the
[02:31:07]  consumer can consume them. And you're kind of also pushed into figuring out, you need a way of injecting the cache, otherwise you can't participate. Like,
[02:31:18]  you can't just, if, even if you export the function, if the person wrapped it in a cache, you couldn't call that from inside your server function. Right
[02:31:32] ? So, yeah, there might be, I imagine that there's got to be a way to interject your own custom cache into RSCs if it doesn't exist.
[02:31:41]  Like, right now we use Next. But you, you know what I mean? Like, there's going to be more than just Next. You can't just like
[02:31:47]  write your library and be like, Vercel cache in your code. Can you? Or, maybe you can. I'm just, I'm just, I think,
[02:31:55]  I think it's important to consider that, because the trees merge, because you need the caches, you actually, your source of data needs to be aware of the c
[02:32:04] aching mechanism. I don't know if that helps making them composable. Okay. How about, well, as I said, making preloads as best practice is
[02:32:18]  good. But what I was getting at is, that's one of the arguments against server components being composable. I think, right? I'm saying you're probably going
[02:32:26]  to do that. I think that's a good best practice. But, you know, they use that to say that's why, you know, it's less compos
[02:32:33] able. I don't think it is. And if they start pushing along that line, then, then like, I guess we're good. We can say that, you
[02:32:42]  know, using a route level loading doesn't actually help hurt with composition. Perhaps. Okay. Let's keep on going. Platform details always leak. As much as you're
[02:32:53]  trying to standardize, there's all, you know, things like winter CG. Every platform is different. Comes right down to the difference between how we handle a core
[02:33:00]  request and response. How do you set headers, status codes? You know, to be fair, we can choose a standard like web request response objects to model our APIs.
[02:33:09]  And if that was built into react, we, one could leverage it. Imagine we'll see more work in this direction as it benefits every react user, but there's always
[02:33:16]  differences in these platforms and even differences between frameworks. And I feel like this and what I just mentioned is why services like clerk will create components per meta framework instead of a single
[02:33:27]  react one. Right. I could picture the challenges that would come from a framework platform combination. Like essentially clerks like, okay, I have a next app router.
[02:33:39]  I'm next page router, page router version of our plugin. We need a remix one and remix RSC one. And then maybe Gatsby has one like they
[02:33:48] 're no, like think of how many combinations of different ones. I mean, I don't know if I have anyone who worked or worked at clerk in the chat right now
[02:33:58] , but, I'm not describing a fictional situation. Am I like, like this is, this is something that you have to be aware of. I'm just
[02:34:21]  kind of pointing out there. No, I know because I actually talked to God talk to the CEO, like, or CTO way back. and we were, we
[02:34:40]  were like almost a year ago because he was wondering if we would support server components when solid and like how that could approach it. And he's like trying to think if
[02:34:48]  it could like perhaps save like the different types of adapters. And I'm like, even if we all had server components, we're all going to have different things.
[02:34:56]  Right. So the composability here is challenging from like an NPM standpoint, at least. Okay. Let's keep them going. Data flow is a two way street.
[02:35:06]  Mutations are natural part are actually, did I finish this one? Yeah. I picked picture towns that have come with for employment. This is a new problem. RC is
[02:35:13]  introduced, but it isn't one we are quite solving yet, if ever. Okay. I'm saying like, it's already that way today, honestly, before our
[02:35:19]  RCs like, but so it's not like they're introducing a new problem. I'm just saying like, they'd also don't solve this from a composition standpoint.
[02:35:26]  Okay. Data flow is a two way street. Mutation is natural part of any system. So how do we do this to server components? Well, there's two pieces
[02:35:32] , right? We need to navigate to the next page or reload the current one. And we need a way to invalidate any caches. This means that mutations are generally
[02:35:41]  router aware and possibly cache aware. You might import a redirect from next navigation or revalidate tag from next cache. Again, this could be generalized through some react
[02:35:53]  mechanism, but like these are very specific APIs coming in from, from next. So if you tried to make your reusable server action, I think there'd be some challenges
[02:36:05] . I mean, I don't think it's a problem too much because I think mutations in general aren't very composable. You can't tell the app where to navigate
[02:36:12]  without knowing where your reusable component's going to be used. You might not know all the data that has needed to be invalidated as the reusable component author. There might
[02:36:21]  be, you know, when you perform some action, you might need to, you know, do something else. So it's actually quite reasonable that the mutation APIs aren't
[02:36:28]  wrapped themselves, you know, and that people can expose a function that does the mutation. allows the end user to decide the caching around and behavior. Do you see
[02:36:38]  the common trend between all of these points, what I'm getting at? Like in almost every single case, you're, you're better off exporting a function without the specific
[02:36:53] nesses of these because everyone has different solutions. If you, if you wanted to make a truly reusable solution here. So my conclusion here is, isn't that say
[02:37:06]  that server components aren't a good solution. Even if I question the overall composability, you know, I went on Twitter a while ago, asking for good examples of server
[02:37:18]  component libraries, because like I was trying to picture this, like what they look like on NPM. And in every case, I went through dozens of them. The person
[02:37:29]  could have just exposed a function for data loading. It would have actually been like way simpler. They made server component versions of them, but the real gain I thought was
[02:37:39]  like the way they, they organized the API with the expectation that they'd have server actions. but even then, as I said, being aware of the specific router and
[02:37:50]  cache implementations kind of got in the way of that. So I think the real win in terms of composability is probably in the shared components. We don't talk about
[02:38:00]  them much, right? the fact that you can author component, which can be used in the server or client side that they inherit the characteristics of the parents. Unless people
[02:38:08]  are shipping pre-made template layouts. This is probably something that will stay within teams rather than an NPM, but that's okay, right? Like we don't
[02:38:17]  need a bunch of server component libraries on NPM, right? The composability value is like when a team goes, okay, this is our design system. This is our
[02:38:28]  templates. these are our layouts and they can just like build them out in a way that can fit on client or server without having to think too much about it, right
[02:38:36] ? You just put it in. I think that, I think that's where the win kind of comes in because, you know, server fonts aren't supposed to solve everything
[02:38:44] , but give us a different way to express the solution. And I think with careful consideration, like any approach, you can build, you know, great solutions. That's
[02:38:52]  kind of where I'm sitting at. I, I think that there is, even if aspects of it are kind of like decently composably local, you actually,
[02:39:03]  it doesn't make good for packaging up libraries. There's too many specifics. You're basically building a framework, not a library here. You know, like there's two
[02:39:11] , you need all the pieces working together. Anyway, I'm not sure if this makes sense to everyone, but this is, this is my argument to kind of, I
[02:39:24]  keep on hearing like, are they certain ones are so composable and I, I, yeah, I don't know. I guess I, maybe I have a different
[02:39:32]  meaning of composable. Like I, I do agree that they can make it really easy to like construct. Chains of data fetching and, you know, server side
[02:39:42]  waterfalls from that. But like, it's, it's, it's, it's hard for me to picture them being shipped as an NPM package, I
[02:39:57]  guess. Someone's probably in the chat and you'd be like, look, I got this perfect example of where server components are. I feel like the benefit is like
[02:40:06] , as I said, layouts, templates. Anyway. The argument that I often make is more, make things more unclear. The actual boundary between server and climate come in.
[02:40:22]  The historically leads to complexity in my experience. right. When makes it harder to like, like actually bundle them out. Oh, perhaps. Yeah. Maybe like, maybe
[02:40:32]  these things are at odds. I think the more composable you design it, the harder it is to actually ship it. That's interesting. Anyway, I think we should
[02:40:44]  just probably switch gears to this week in JavaScript at this point. I covered all I want to do with waterfalls. I covered all I wanted to do with, with
[02:40:54]  this question of reacts to records being, being composable. Can you link this article? Yeah. I was thinking of actually publishing it at some point. But I, you
[02:41:08]  know what? I probably not. I probably, I probably not. Let's just, let's just post it in here. I don't care. I'm probably not
[02:41:15]  going to, I don't, I know I'm on stream saying this stuff, but I don't, I wrote it and I wanted to, clarify my points,
[02:41:24]  but I also didn't want to push it. I, I wanted it for kind of a niche audience to kind of think through these problems. I have no reason or desire
[02:41:33]  to talk badly about it, about react, generally speaking. I only ended up writing this because I was like, we're getting all this flack, you know,
[02:41:49]  about the, the waterfalls and the client and, and you know, like react server cones are composable clothes. And I'm just like, no, you know,
[02:41:55]  let me think through this. but then once I wrote it, I was like, this sounds like, like if I wrote this as a bunch of Twitter threads, it
[02:42:01] , it sound like I like was out to get react for something, you know, like I, I just didn't, it just didn't, it didn't feel right
[02:42:08]  to me, you know, like I could come at it from a purely academic standpoint and talk about it and like do like a 12 tweet post thread about it. You
[02:42:19]  know, I think Dan actually did something similar to that when he was explaining, explaining, you know, how, how these things kind of go. But my biggest concern is
[02:42:36]  like, even if I try because of my own biases, I don't, I might not come off completely as fair. Like I just saw that comment about the as
[02:42:45] ync await thing. Yeah. I mean, this is a true fact, but also like there's ways to solve that. You can just hoist the data fetching up
[02:42:54] , you know, pass it through a child projection. Like the same tricks you use to avoid use memo or memo react memo in react would also apply to this data fetching
[02:43:03]  hierarchy thing. It's not as powerful as being fine grained, but it works perfectly fine. And, you know, people have been optimizing react without using react on
[02:43:13]  memo for, for ages. So like react developers know how to do that. Yeah. Yeah. No, thank you. Yeah. I just, it is what it
[02:43:40]  is. I, yeah. Do I have any thoughts on these? I, I, people like them for various reasons. when I see most of these patterns, I
[02:43:55]  mean, render props are important, like the ability to inject state, but like I, as, as child slots, I would love if those are avoidable. It's
[02:44:06] , I understand why like same reason. I don't like style components. I'd rather have less components, more pure markup. if possible. I think components.
[02:44:14]  Like I understand we need it for design systems and stuff, but like it's components are always kind of like a bit of overhead and like all the weird, like typing and
[02:44:24]  dynamicism would be better if we could somehow avoid it. This is, I think a lot of the problems I talked about last week, start with the stuff like routers
[02:44:33] , like core things like anchors and links are library specific. And suddenly now you need to like do something special about it. right. I know other places are like
[02:44:43]  button versus link considerations and stuff, but I mean, it's the same it's I wonder how much of this goes away if we could just use normal anchors as our
[02:44:51]  router mechanism. I I I'm writer props are important. They're, they are a different case cause they're important for like our four component uses render props in a sense
[02:45:02] , right? They're important for being able to inject, you know, particular state, but yeah, I'm not a big fan of slots or most of most of
[02:45:12]  these patterns. Generally speaking, I like that props are props and you can just stick them through, you know, props, children, props, whatever. And they just insert
[02:45:21]  it. It's, it's really nice. yeah. Yeah. See, I, I figure someone probably has, has more expertise on this. I, I just
[02:45:42] , I would love if it wasn't necessary. Right. Yeah. Slots are to me, are just like another mechanism on top of something that we already have with
[02:45:56]  props. With cool book props, you just have an object and then you're done. Right. You don't, you don't need to do anything special. There are
[02:46:02]  some properties of slots that are nice. Um, but yeah, I also like render props cause they're kind of explicit. Like, can you picture, like I used
[02:46:18]  to use knockout and there's, there was these like hidden variables. Like when you did a loop, you'd have like dollar sign parent and like dollar sign item and
[02:46:28]  all these like hidden variables that would just exist in that scope. Um, we're render props are like, look, I am injecting this, these variables in that
[02:46:38]  scope. Right. Anyway, let's see if I can get this. We can JavaScript. Good. Set up. Poor English me. All right. Yeah. I
[02:47:03] 'm not showing the screen on purpose. Just give me a second. I will get this all going. The thing is about slots is like, you're, you're
[02:47:28]  also adding something that would not be there anyway. Like while I, I prefer going towards like the native thing, like it's because of the way props work and stuff.
[02:47:42]  It's like, you are adding something that isn't necessary. Yeah. I guess I'm sold on JSX. And then one more. Uh, okay. Okay
[02:48:05] . When was the last time I streamed? Oh yeah. Yeah. Okay. Yeah. This is the perfect way to open. I love it. I streamed on
[02:48:11]  my birthday, right? Yeah. That was the last time I streamed. Okay. Sorry. Just getting everything queued up. I maybe should have started with
[02:48:32]  this. No, I feel like we're so deep in what, in our specific topic conversations that I might've. All right. All right. All right. I
[02:48:46]  think I'm ready to go. A lot of the slot stuff showed up in APIs like view and, um, Svelte because they were actually trying to align with web
[02:49:01]  components. Especially like Svelte, like for a long time people, this is what people don't get about the web component thing is for a long time, framework authors
[02:49:09] , other than react were kind of on board. Um, they were like, we want less minimal. We don't need all these abstractions let's build with the
[02:49:17]  platform. You know, I, especially on the reactive side, like we thought, I know with view too, like we thought that object.observe would mean we wouldn
[02:49:26] 't need to have our own like signal system, right? We could just use reactivity built into the browser. Like when they cut it. And when they went into like
[02:49:35]  proxies, you know, we did work there too, but like this was like the thinking that we had coming in. We just grew more disillusioned over
[02:49:43]  time. It was not because we were out to get web components in the first place. The only benefit slots are named slots. So you have a standard versus randomly
[02:50:01]  naming things in prop slots. Like yeah, it's hard for us to know what's a prop ahead of time. The one place that I saw slots are nicer is when
[02:50:07]  I was working on serialization for islands. Right. It was like slightly, it was a little bit simpler or for server components, whatever you use. But yeah,
[02:50:24]  I mean, it's that's the thing. It takes someone to have used it and trying to align to write articles like Rich Harris's like why I won't use
[02:50:37]  web components and stuff. Like it, I don't know if you end up with slot APIs otherwise in those DSLs. Like it's slot APIs are clunky.
[02:50:46]  I don't know why people don't see it more often. I, people always talk about like view and spelled and how nice it is. But if you try and
[02:50:52]  make like render prop style components in those, it's some of the ugliest DSL that I've ever seen. I guess people don't like make their own control flow
[02:51:01]  in those frameworks that much. But like I did a whole stream on it because they're just like, it's funny. Like usually I don't fixate on,
[02:51:09]  on the syntax, but it was like one of those things where like I kept on hearing about how nice the syntax is. And I was like, really? Okay. Like
[02:51:16] , it's not hard to pull it apart when you get to a certain composition. Right. Composition is very important. Right. Anyway. Anyway, let's, let
[02:51:30] 's, let's, let's get started here. All right. let's go to this week in JavaScript for everyone who's still here and let's get this conversation
[02:51:37]  rolling. Okay. All right. I'm going to start this week to talk about my man, Ryan Carnato. Um, just public service announcement. This guy has been
[02:51:52]  more bought or whatever has been pushing crypto on people. I, I, I'm hoping, I'm hoping that, uh, the account has been blocked. right now
[02:52:02] . Um, I, I, I also put a request in. A lot of people reported it. Um, it's clearly a fake account, but all you have to
[02:52:10]  do is drop an a, an I and, uh, sorry. And, uh, essentially you're there. So I, I mean, let's see here. Can
[02:52:17]  I see if he's still around? Carnato. Okay. Good. It's, it's, it's been taken care of. Parasocial or J L
[02:52:37] arky, whatever you prefer. Okay. Well, there you go. That was my week. it was, it was, it was odd. It was definitely odd
[02:52:54] . Yeah. Yeah. Yeah, exactly. Awesome birthday gift. Um, but, uh, yeah. so there you go this week in JavaScript. It was so subtle
[02:53:17]  too, right? It just missed like, anyway, uh, let's keep on going. Um, a couple of pieces of solid news to get out of the way.
[02:53:28]  Um, fireproof solid adapter came out. Great work from the community. Um, another amazing thing happened. Apparently solid start now a pair appears. above solid starts the
[02:53:42]  baby food company. So, you know, this was a big achievement for all of us. Uh, only if you do it as a single word though, if it's
[02:53:54]  a separate word, the baby food still wins. So yeah, we've been waiting a long time for this, right? Uh, what else? Uh, this is actually
[02:54:06]  really cool. It's a website builder, um, from catch a member or community. uh, he's been working on it for, let me do the translation for like
[02:54:14]  over a year. On February 3rd, 2003, I saved the first trip. I saved the first step for nitro page today, 833 steps and 374 days
[02:54:22]  later. So I'm gathering this as commits. Um, and over a year later, the moment's finally come to introduce to my new free website builder based on solid JS
[02:54:30] . very cool. I love seeing like different types of applications, um, being built with solid. So very cool. uh, that was actually a, an,
[02:54:53]  an actual funny account though. That was actually doing a parody. This guy was, you know, it's clearly made by the fans. I wouldn't have a problem with
[02:55:01]  that. This guy was clearly, uh, um, you know, trying to spam people cream cryptocurrency. Uh, anyways, let's keep on going. Talked about
[02:55:18]  this. They haven't talked about this yet. This is huge. Um, beta docs, new solid docs have dropped. You can see them here. It's new sites
[02:55:28]  built on solid start. Um, it's nice. It's fast. I'm like our current solids app is actually a single page app, like a spa and our
[02:55:41]  solid start docs are an islands one. And this one is an SSR traditional SSR app. But yeah, this is built with the latest even has updates for the,
[02:55:50]  for, for the router. So yeah, this is coming along quite nicely. I think they're looking for feedback. This is very, very nice. no, I
[02:56:08] , I, I didn't actually know who ran it. I, I must've missed that at some point. what's your opinion on Ruby and rails, because there
[02:56:28] 's new momentum with this framework because of hotwire, not right. JS you need. And I think JS you can do. Yeah. I mean, if you can successfully
[02:56:35]  build your apps or your websites, I should say rather with, um, Ruby on rails, and there's probably no problem to go that direction. It's similar appeal to
[02:56:43] , you know, people who want to build H stuff with HTMX. Um, so yeah, I mean, I don't have much to say about that.
[02:56:50]  The types of apps that I'm interested in, I probably wouldn't be building on rails. Um, I did that migration like 15 years ago. It wasn't not fun
[02:57:00] . Actually, I guess it was 14 years ago. I wouldn't want to do that again, but I think people could, if that's not the expectation of the app
[02:57:08] , I think Ruby on rails is perfectly fine. Um, let's continue. Let's continue here. Yeah. Anyways, the router is pretty cool. Yeah. Oh
[02:57:30] , there was a comment about JS fatigue. Yeah. I mean, I, you can't have it both ways, either stuff in van advances or it stays stuck, you
[02:57:41]  know, JS fatigue is just a sign of a healthy ecosystem. Oh, mention the pole. Yeah. Yeah. Um, I'd actually don't know anything about the
[02:57:51]  pole. Um, I heard about a pole. Um, but I don't know much about it. It's probably. Huh? the pole is over. Okay.
[02:58:18]  Okay. Thank you everyone who participate in this poll. Your feedback will definitely help the future of solid docs. Thank you very much. Yeah. Okay. It's probably just
[02:58:29]  an, an old link. type form has a limit. You got to pay. There you go. Uh, is there no, and then this goes, the next
[02:58:43]  question, is there an OSS bundle? You know, uh, that was honestly, I'm amazed at the work here. Great show. The community. Um,
[02:59:07]  the docs have taken on a whole life of their own and they're so vital. You know, you know, that old meme, what it was a node modules,
[02:59:15]  black hole. I got, I got to make an updated version of this because like, I feel like I could take this meme and be like effort to, uh,
[02:59:28]  create a JavaScript framework or library effort to, no, it's not even like that. It's like effort to win benchmarks for the job, write a JavaScript framework that,
[02:59:43]  that, uh, wins benchmarks effort to maintain said framework. Um, uh, man, sorry. I, this was better in my head. Anyways, the docs effort
[02:59:55]  is like on a whole other level. Um, is what I'm getting at. And I'm not saying that in a, in a, in a bad way. It
[03:00:01]  just means that like, I am incredibly grateful because it feels like the work that I've done is like in this area compared to the effort that it takes to make good docs
[03:00:11] . So maybe I'll come up with a better meme for this later, but yeah. Okay. So let's move off solid. That was good. Okay.
[03:00:32]  So after my stream last week, um, I wanted to reiterate some of the points and I think they're relevant to this stream, um, as well. So I'll
[03:00:42]  just quickly kind of go over it. The point of the stream last week was that RCs aren't the successor to GraphQL because they aren't capable of the same things
[03:00:51] . Opting to RCs is opting to something quite different, right down to the infrastructure requirements. It's as stark as MPA versus SPA. Not everyone
[03:00:57]  wants an MPA. Forcing it is aggressive. When you consider that for those people, they now have a whole other system to contend with. RCs don't
[03:01:05]  alleviate the things that you had building client-centric in the first place. Now it's more convenient just to have both paradigms side by side. But what that
[03:01:14]  only matters if you want to do that. The unfortunate part is while there are clear wins to a server-centric approach, there are trade-offs. And many of these
[03:01:21]  things can also be solved with client-centric approach. But that's not how it's been presented. The result is a misaligned expectation butting up against perm
[03:01:30] issiveness of a seemingly arbitrary boundaries. And this is what we were talking about earlier, right? Like when we're talking about composition, it's not a poor model,
[03:01:37]  just not the best understood. And it requires a new realm of knowledge that it isn't a replacement. And by that, I mean, you actually have to be more aware
[03:01:46]  of like how server rendering works in terms of like classic server rendering, caches, et cetera. So like treating it otherwise is a recipe for failure. I'm not
[03:01:58]  suggesting that any of that's a bad thing. I just wanted to make it very clear that like now because I've switched to RSCs doesn't mean that I don
[03:02:07] 't necessarily need the same kind of client data fetching. I think people actually understand that relatively well. It just, I've always looking at threading the needle. I
[03:02:18] 'm always trying to figure out, like I was hoping that I, like it would take off so much pressure off the client side that I wouldn't need these things.
[03:02:24]  And I'm not convinced currently, but that might change. I might just not have enough foresight to see it. But I, I, that was the only point of
[03:02:33]  the whole discussion last week, kind of similarly related Ryan Florence post. I will never get over how little developers care about the user experience they create and how much they care
[03:02:42]  about what their code looks like. Uh, wonder where that comment's coming from. To be fair, I was convinced before I I've, I've done the whole
[03:02:56]  cycle. Like a lot of people are slowly getting on board and getting convinced. I feel like I've been, I'm the other way. I was completely convinced. And
[03:03:05]  now I've gone over, I've crossed the other side, which isn't, it's, it's, it's like the, what's, what's the,
[03:03:13]  there's a meme for this one too, right? Like level levels of, uh, like, you know, it's like, it's like the curve when you
[03:03:23]  like find a new technology and you like go in the peaks and then down and then, you know what I'm talking about? The, the, like, I need to
[03:03:32]  find that meme. I need it for slides, right? It's like the levels of like, when you learn something, you're at the, at a peak and you
[03:03:40]  go down the Gartner hype cycle. Yeah, it's not a bell curve. You guys know what I'm talking about, right? Cause it goes down in
[03:03:47]  the back up again. Is that what it is? Ape cycle. Yes. This. I'm probably, I'm probably here somewhere right now. If Next.
[03:04:17] js came with a good client side data fetching solution, it would have been much nicer, but it was, it led to lower seek adoption. Yeah. The thing is
[03:04:28] , I'm looking at how you can possibly unify that essentially. I don't, it's very hard for me to see two different data fetching models. It makes
[03:04:39]  things, it's like you either want to be permissive or not permissive. Being kind of half and half is really hard. The trial of disill
[03:04:45] usionment. Yeah. Which comes after the plateau of productivity. Yeah. Yeah. There's like something further on the other side. Yeah. Well, I went through
[03:05:15]  the effort of recreating server components and then trying out the patterns. And then, yeah, that's kind of where I got anyway. Thanks. Now I know what
[03:05:26]  this is called. Gartner hype cycle. Okay. In any case, this shouldn't surprise us. I think I used to be a little bit critical of S
[03:05:41] velte for this reason, but Svelte actually delivers a relatively good user experience. I think it'd be interesting to know what triggered this particular instance. But you
[03:05:56]  think about this often as a, as any kind of library or framework author. Anyway. Um, yeah. My only point that I didn't actually talk about in terms
[03:06:19]  of, uh, this thing earlier was I said, not that I disagree with the simplicity of the RSC model, but understanding RPC is a key to all this.
[03:06:27]  Otherwise, how does someone click? Yeah. Yeah. Okay. We didn't go all the way down on Guillermo's thread. And I think we should. He
[03:06:34]  got to a point here where he goes, if I had to teach how to recreate this basic app with the old react, I'd have to teach how to add APIs,
[03:06:42]  servers, or RPC routes, use effect and use state external packages and more concepts perf would suffer. And there lies the problem. Right. And he said, um
[03:06:55] , these new patterns don't have to be adopted all at once. You can use a client. No. What do you say here? I think a lot of this push
[03:07:01] back rightfully is that a lot of us learned and became very proficient in the old way of doing things. This thread was inspired by Patrick. He has the insight that
[03:07:07]  makes a lot more sense from this point of view. I just realized the 5d chess move that is RSCs react. It's competing with web development, not front
[03:07:13]  end development. It's not a framework for me. It's a framework for all future developers, um, getting into the web development. Yeah. This is an interesting
[03:07:22]  observation and it's, it's one that we've made on this stream before actually, um, which was, and it's one that I think they've tried to make
[03:07:31]  a talk about and some react people didn't like it. I accused react of kind of trying to reinvent the browser. Um, like they want to provide an abstraction that basically
[03:07:43] . separate you from like how typical HTTP, HTML works. They want to control the whole thing. Like they want to control the routing mechanism in a sense. And if
[03:07:58]  you look at it from that perspective, yeah. Yeah. If you, if you, if you, if you, if you look at it from that perspective, what he
[03:08:10] 's saying kind of makes sense. Cause you could look at the code here and be like, uh, huh. Okay. Get my data, put it in. This
[03:08:16]  use server thing means I can, well, this is where I kind of stumbled on this a bit. I was like, use server is an RPC route. So
[03:08:24]  you kind of had to teach people RPCs. Okay. You didn't have to teach them use state of use effect. That's true. External packages and more
[03:08:32]  concepts. Well, what's this redirect coming from? It's coming from next navigation. Hmm. Maybe if that came from react, that could be like, don't get
[03:08:48]  me wrong. Like the database is something you obviously going to grab from, but I like more concepts. Well, I think you need to know about RPCs here
[03:08:59] , right? Cause like, if you post a, like, you have to understand, like from a certain perspective, if you post a form in this model, you have
[03:09:05]  no idea like what's client or server, right? Like you're just like, oh, I do the form and it does this thing on the server instead of doing it
[03:09:12]  on the client. So kind of can follow that. But so like, you're thinking kind of like, okay, I use this to generate my HTML. And then
[03:09:23]  why do I put use server on this? Well, cause you got to know that this is actually something that's interactive with in the browser conceptually. Um, but I
[03:09:31]  will say it's probably less concepts. Performance would suffer. Well, depends, right? We already talked about how this would reload the whole page on, you know, but
[03:09:43]  then react will diff it. So, I mean, I don't know if performance would necessarily suffer doing it the old react way. I mean, it's interesting,
[03:09:54]  but this is, this is, this is kind of where I think the thinking is here. Cause if you pretended like there was no other model API routes or nothing, and
[03:10:06]  you like this wasn't RPC, this was just a way of saying like, you rent, you only render stuff on the server. And then things that you stick
[03:10:15]  into the markup. Yeah. I don't even know. I think you have to explain RPCs to do you server, but like you could sort of say,
[03:10:26]  like teach these basic concepts, like you server this, and maybe like simplify things significantly. I mean, don't get me wrong. I think it does simplify, but
[03:10:35]  the reason I wanted to point out this point list was that directly, I think the point here is selling the abstraction, like pretend you didn't understand how things worked. This
[03:10:45]  would be an alternative model of the client server interaction. If react is your browser, so speak, these details might never surface pretty ambitious, but like, that's kind of
[03:10:53] , yeah. You still have to teach about routing, but like, you might not care about server versus client routing. Right? Like, you might just think, okay
[03:11:03] , I just go to the next page and then the next page gets rendered on the server. Right? Like, generally speaking, you just like render pages on the server and
[03:11:12]  then, yeah. the use server is the most out of place thing there. The code times are not actually fully honest because you run into cache gotcha unless you add
[03:11:29]  search params. Yeah. Yeah. Yeah. Yeah. I said it was not complete earlier as well. Like, yeah. I mean, that's the whole thing.
[03:11:40]  That's, that's why I didn't take the criticism to our example as well, because like both examples are incomplete. Right. RPC is two apps talking to
[03:11:50]  each other. If you never use client, you can get away with not mentioning the RPC since it's all server. Well, not really though. Like, I,
[03:11:58]  and I asked this question, I think I asked it in this thread. No, maybe not. Maybe I never actually wrote it. How, like, do you, do
[03:12:10]  you, I guess not. What you're saying is a, what you're saying is a form post is a special type of action. Yeah. Okay, fine.
[03:12:24]  What you're saying is a form post is a special type of action that goes back to the server and runs this server and runs this code. It's not necessarily R
[03:12:34] PC. It's just like a, yeah. Yeah. I, I, I, do you, you don't, do you annotate it with a used server on
[03:12:48] , in, um, PHP though? I mean, I'm, I'm thinking back to like my old.net days. The problem here is that we learned
[03:13:12]  to code before learning HTTP. Yeah. Yeah. So I, I guess mentally they want you to think MPA. That's, that's essentially what the, the g
[03:13:21] ist is here. The only reason you have to know isn't because I use client. It's because like there's client side routing, but that's abstracted from
[03:13:30]  you. Maybe I missed the topic, but I'm curious what you'd pick up now for development. I'm the author of solid JS, so I can't really
[03:13:45]  give you, um, an unbiased opinion here. Yeah. Uh, yeah, I, you're, I'll, I'll, I'll, I'll bite
[03:14:01]  then. Basically all the complexity comes in when, when you add use client, because then you suddenly have client state and the persistence of state and then the whole world explodes.
[03:14:11]  Okay. Fair. Okay. But yeah, I mean, it doesn't change what I'm saying. Like they're basically, they're abstracting the fact that the
[03:14:25]  re react, like the whole client routing, all that stuff doesn't matter because react is like your browser essentially. Like it's, it's controlling that whole inter, interaction
[03:14:35]  with the URL on the server and the client. like picture if someone took this model and then they're like, okay, I'll just put a script tag on the
[03:14:47]  page somewhere that like PHP style. I don't know if it would do what they expected. Anyway. you can, you can, you can, you can,
[03:15:09]  but yeah, yeah, I see what you're saying. Cause it's like, like I've, I've developed with a bunch with Marco or Astro style stuff.
[03:15:21]  And in a sense, it's like this, not that, but there's no use server. Right. But anyway, yeah, I, I, I,
[03:15:44]  I'm guessing cause then you just stick it in the JSX and then when it renders on the page, it'll execute. Hmm. Yeah. That's interesting
[03:16:04] . we're focusing on the marketing blind spot for data, heavy enterprise style apps, the RC use case or first load only really. Yeah. Or content kind of stuff
[03:16:23] . Yeah. I mean, if I'm an enterprise, I want to be using probably graph QL. I want, yeah, crazy amount of data stuff. Honestly
[03:16:31] , if I'm an enterprise, I want to be, yeah, it's a tricky one. I, I, I, I, I might not like the choices that
[03:16:42]  are available to me these days that are popular. Yeah. Yeah, that's an interesting question. Something I'm, I'm, I'm, I'm, I
[03:17:03] 'm actually curious about. Like, are we, cause I, I, you know, when the, they, they all moved off on-prem about a decade ago,
[03:17:13]  they started that migration where they, like, they had all these, like their own servers and they moved into, like a lot into AWS into like their own kind of like
[03:17:20]  server representations in the cloud. They're starting, they started moving to serverless, obviously, lighting the load. I, I, I, I'm interested to see
[03:17:33]  how edge plays into that data requirements and strict, uh, policies around data security make it hard to a certain degree. I, I, I, I, I,
[03:17:45]  I, I, I, I know there's a lot of work, at least on Netlify's side on the enterprise. A lot of focus. Um,
[03:17:56]  anyway, let's, let's keep on going. This is a cool blog post. It's kind of like, it's kind of like a philosophical thing. I
[03:18:11]  want to kind of throw this out to people. He basically talks about like the react mindset, the solid mindset and the HTMX mindset. I think this is like
[03:18:22] , he's, he's basically talking about how we're taking like three distinct approaches and, and essentially are trying to push stuff further along those lines. Right. Yeah
[03:18:47] . I, I, I think I, I, yeah, this is, this is, I really, it was obviously it was very pro solid in here, but it
[03:18:54] 's also pro HTMX pro react. Like it, it definitely, um, kind of covered the whole, um, you know, spectrum, right? It's talking
[03:19:04]  about how react, how far components, what can they do with components? Arguing RC is the best understood in the context. It's the new react architecture, not
[03:19:12]  isolation, right? What we have here is not some new kind of magic kind of components, but a server client architecture that speaks react on both ends and grants components it placed
[03:19:22]  on the server side. Yeah. Um, 2024, and there's predictions in here. 2024 will be the year when everything finally clicks for the mainstream audience. As I noted
[03:19:36]  earlier blog posts, react versus the world react has a proud history of challenging contemporary norms and conventions of UI development, including the ones that helped popularize winning over the world
[03:19:44] . Despite all the noise and confusion going on, ongoing RSC discourse react appears confident and that it can repeat history again. Relax. It's react. Yeah. Then
[03:19:57]  what's this, if anyone asked me, I'd say solid one, the JS front end in 2023, not because it overtook reacting usage, not even close, but
[03:20:04]  because it want the idea one pretty much every framework, but react implemented signals in some form and even react adopted the language of reactivity described its optimizing compiler. But this
[03:20:12]  begs the question, what's an extra solid? Will success of fine grain reactivity lead to the fall of solid, which can no longer stand out from the crowd?
[03:20:20]  The answer is no. In 2024, solid will reach 2.0. So he's actually talking about a lot of the stuff we talked about on stream, which is cool
[03:20:26] . Talking about use of primitives, you know, and our kind of client centric mentality. And then HTMX, what's particularly intriguing to me is that
[03:20:42]  HTMX shows us a different route to one app architecture by killing client-side code. It's important to note that HTMX is not a 100% solution.
[03:20:49]  It shouldn't be controversial state. The infractive ceiling is much lower than react or solid. However, you get 80% with radically less complexity. No extra dependencies,
[03:20:58]  no build step, no advanced tooling, no complicated state management, no double data problem, no hydration mismatch, you know, so what? Yeah. Anyways, great
[03:21:09]  post. This post inspired me to think of server functions as a second core perimeter that everyone else is being built around just like signals. Yeah. I mean, that's why
[03:21:23]  use server was so powerful. It was, it allowed me to, us to, to basically take our client side, you know, computer, even CSR mentality and
[03:21:36]  just apply the server to it seamlessly. All these same APIs that work for CSR can work for server rendering. It was, it was the missing link. Um,
[03:21:46]  it's very powerful. Anyway, great post worth covering. Okay. Yeah. I already explained how this works, right? I noticed the loader is not being
[03:22:13]  awaited that we can respond before friends have loaded. We send the users back immediately as they resolve in the friend stream as they complete. Right. This is the whole
[03:22:22]  GraphQL thing. We already talked about this. Um, but yeah, I think there's a lot of, well, we already could do a lot with RPC on
[03:22:30]  the front end. It's just never been easier to do RPC when you can just write a function and get perfectly typed without any code gen or whatever. It's
[03:22:36]  just, it's really nice feeling. Um, felt that from the instance that we first did server functions and the patterns have just gotten better. Like async local storage is
[03:22:45]  what we were missing back in server dollar sign days. That was what bridged the gap. Um, it was very nice that the next team pushed every other platform to support
[03:22:55]  it, even if a little prematurely. Um, anyway, talked about the docs. Oh yeah. Another really cool article. Ever wanted to build your own JavaScript meta
[03:23:19]  framework? Check this one out. Oh, I put the Twitter link. I should have put the article link. My bad. Let me put the article link in here.
[03:23:36]  There we go. This is biased again, cause this, this is Vinci was created by Nikhil, which we've had on the stream multiple times, told us
[03:23:52]  all about it, but he basically went through the, we used it to build solid start, but he went through, okay, well, let's make a react framework.
[03:23:58]  And the thing is, because of all the features built in, even stuff like server components and server actions, you just have to write your own little wrapper and build your react
[03:24:05]  meta framework. This is the easiest way to get started with, um, modern react. Um, it's why Tanner has been looking at it with tan stack and stuff
[03:24:15] . He could just bring in his router, his conventions, do it how he wants to. And you know, you know, you basically get everything. Um, so
[03:24:26]  yeah, this is very cool. Cause in one article, he literally takes react router. Like you can basically remake like a very basic version of remix here, like in,
[03:24:38]  in the course of a single tutorial. That's where things have gone to it's, I know from experience that it's trickier than that. And we're still
[03:24:48]  bug fixing and whatnot, but this is, we're getting to the right abstractions. And I always feel good when we can find it. And it's awesome.
[03:24:55]  See an article like this, just basically just like, bam, I made a framework with this tool. This is, I said this in previous stream, Vinci feels
[03:25:04]  very similar to me. Like, like V did like, it's funny. Cause when V added SSR support, all the JavaScript framework authors kind of jumped in on it
[03:25:12] . And we're like, this is our tool. Like V was great for everyone, just building simple apps, but it was like, this is the basis we need
[03:25:19]  to build a good meta framework. SvelteKit did it, um, Astro had Snowpack that they came across. We did it almost immediately to like, we
[03:25:26]  all switched to V within the same, same week, or at least us and SvelteKit did, um, remixes on the way over. Vinci is,
[03:25:35]  I got that same kind of chill, that same kind of vibes, but for the meta framework thing. Like if God, if this was what was out when like V
[03:25:45]  came out, like solid start would have come out a lot quicker. Um, I mean, it took this experience, right? We had to write it multiple times to figure
[03:25:55]  it out, but this, this is what I want the meta framework building layer to look like. And I know that I'm biased again, right? Cause there's stuff
[03:26:01]  like bike out there and there's stuff like, um, you know, even nitro to a certain degree, which is powering this, which aim to do that.
[03:26:08]  Uh, this is how I wanted it to be this, this level of control. As I said, it has that same vibe that VEAT originally gave me anyway
[03:26:18] . Anyway. Right. Quick start. There we go. I love it. Great naming too. No, Astro switched to VEAT. They switched off
[03:26:40]  snow pack. I mean, yeah, I mean, it's hard to find them, so it's good when you people share the good articles that they find. So
[03:27:05]  anyway, yeah, very, very cool. He even like in this tutorial, he even gets to creating actions and stuff or server functions, file-based routing. Where did
[03:27:17]  it go? React router. I thought he, I thought there was an example where he did a use server. Yeah. Server functions. Here we are. It,
[03:27:30]  it, it's, it helped that Nikhil was also responsible for writing the server component, server function plugin for VEAT, um, like doing the thing. He
[03:27:38] 's very adaptive, um, where React is in the VEAT ecosystem. So, yeah. Anyways, we're still, you know, working through bugs and stuff,
[03:27:49]  but like, this is, this is very promising. And I hope more people get on board. Very cool. Okay. Um, let's talk bookmarks. Yeah
[03:28:04] . I need to check this out. This might be a topic for a future stream, but the, they made a notion style. This is made with HTMX.
[03:28:14]  And, which is really cool. What, as I said, I mostly ignored HTMX because I care about apps. This is starting to get into a range where
[03:28:24] , you know, I want to see if this suffers from not having optimistic updates or if the network's slow. Like I want to, I want, I want to understand
[03:28:32] , you know, what the performance characteristics are. I want to understand the complexity of writing an app, you know, uh, like this with HTMX. Cause
[03:28:43]  I'm not saying you can't solve stuff with HTMX, but like at a certain point, like I, is there, yeah. Is there an article here?
[03:28:55]  There's a repo. Okay. There's a repo. Let's take a look here very quickly. You know, I'm, I'm, I'm super interested
[03:29:01]  in seeing this because like my gut feeling is that something like that data table is something that you could whip out in a front-end framework in like one file. And like
[03:29:12] , uh, you know, maybe, maybe a couple of components, maybe like it'd be fairly straightforward. My gut is an HTMX would be very interesting setup.
[03:29:21]  Um, yeah, okay. This is going to take more time than have to look into how all these partials weave together. Okay. There's a base HTML makes
[03:29:32]  sense, but yeah. Interesting. Uh. Yeah, yeah, yeah. Let me, let me put the, the link to just even the tweet I'll put in
[03:30:02]  chat here. But yeah, I, I mean, it's interesting. I, I built tons of two, two model apps where like you need to have something with
[03:30:30]  HTML partials even, and then something with JavaScript layer on top. It was nasty. If you can push the threshold without JavaScript far enough, it starts becoming kind of interesting
[03:30:40] , but you have to understand, like, I'm pretty critical on this side. Like, it's like, you know, like I was a CSR person and
[03:30:48]  I got into SSR and I got into this stuff after I, you know, killed the network connection. It was like, let's see what you're doing.
[03:30:56]  I, I, I, I'm interested how this feels. Like, think about a remix drag and drop Kanban board example like Ryan Florence did a few weeks ago.
[03:31:06]  Would I get the same experience from HTMX or how complicated would it be to get the same experience with HTMX? My gut is that will have crossed the
[03:31:17]  threshold, but I don't know. Like, you know, I think the first step is to show, can you do it? And I, maybe it's pretty interesting
[03:31:28] . As I said, I wasn't expecting to say something interesting about HTMX, but this is actually interesting. Yeah, I mean, I figured it would be
[03:31:40]  kind of a flashback to that, but you, I've, I've, I've said that publicly in a stream for me that like, I, I basically liked
[03:31:53]  nothing about that era. Like I call it the dark ages a lot of times. Anyway. Okay. Yeah, I think I already talked to this. This shows how
[03:32:24]  if I know components are to the React model, by requiring the solution to be component that renders the challenges, essentially emulate React. Yeah, we talked about this earlier.
[03:32:30]  Okay. Last piece of news for today, then. Let's talk about the React pre-release announcement. Yeah. Yeah. I wasn't sure. Cause I
[03:32:45] , I, I feel like there was also a quick two blog somewhere here that I didn't talk about yet. Yeah. It came out on my birthday. So sorry guys
[03:32:55] . I wasn't thing. Um, maybe it's worth talking about both of these. Let's, let's, let's, let's do a quick first.
[03:33:05]  It's, it's, it's interesting. I guess it's coming soon. I, I, I'm not used to doing, um, teasers like this.
[03:33:14]  Generally speaking. Like on my stream, I'll talk about something, but like teaser articles, I know it's good for writing hype, but I usually don't like releasing
[03:33:21]  stuff until, until it's in hand. And then like, it's, it's, you gotta switch to a marketing brain to kind of think about what this,
[03:33:29]  but, um, let's see what's up with quick 2.0. Um, resumability comes out with a cost and 2.1, we'll focus on
[03:33:35]  lowering these costs. Yeah. Yeah. Serialization can be expensive. Listener location, component boundaries, application state. So basically my understanding is that they're,
[03:33:46]  they're changing their HTML encoding for hydration to be more efficient. Right. Yeah. I've seen this before. It was always interesting to me because in solid, we
[03:33:59]  don't care about components. So we don't have so many wrappers. Instead, we care about templates that we clone. So we would just put it on the element
[03:34:07] , right? You see those data HKs, but the data HKs have size consideration, but they're actually less expensive than having a bunch of notes. Interestingly. So
[03:34:19]  this is one of the things they probably wanted to fix. So yeah, let's see here. Blah, blah, blah, blah, blah, blah. They
[03:34:25] 're explaining what it does and then pruning ID. So in quick 2.0, the plan is okay. Right, right, right. Yeah. Yeah. Okay.
[03:34:35]  So they're encoding the walks. This is what we did in Mark. Oh, shit. Um, this is what we did at eBay in another framework for an unreleased
[03:34:48]  version of that framework. Um, we spent a lot of time, uh, basically it's good because what you can do is you can describe the steps to walk through
[03:35:10]  something. So here they're putting this stuff on the template or on the element and then you can basically go like move one down first child. One downside of the walks
[03:35:18]  is you can't reuse parts of the walk you've already done before. So it's slightly less optimal, generally speaking, than the explicit walks and you have to dec
[03:35:28] ode it. So there's like a small performance cost, but it compresses lovely if you care about size. Um, so yeah, I, I, because I
[03:35:36] , I benchmarked this stuff when I was thinking from a client perspective, right? Um, I always prioritize client updates over other things, generally speaking. So I actually
[03:35:47] , we tested this with Marco because sorry, I said it again because the JS framework benchmark, um, but yeah, very, very similar technique was being used there. Um
[03:36:00] , but yes, this, this reduction of nodes actually makes a huge difference, right? They, there's, there's, there's a bunch of attributes, but
[03:36:09]  that doesn't matter as much. Um, yeah, yeah. Encoding the walk. See, our walks are in our code output, like in our JavaScript code, but
[03:36:24]  they're encoding the walks into the HTML, which in theory could be smarter to like, they could know what walks they need. to include this. If you've ever
[03:36:38]  looked at solid component, there's a reason this is important. Let me, let me explain. Will this one do what I need it to? No, let's,
[03:36:46]  let's, let's just put some stuff in here. I'll show you because solid components are kind of small when you don't need the template, right? Um,
[03:37:00]  let's just, I mean, I know I shouldn't be putting a button in a span, whatever. It doesn't matter. Actually, who cares? Let's
[03:37:07]  just, what I wanted to show here is the, the majority of the outputted code for a solid component is generally this walk stuff. This is what I call the walks
[03:37:21]  where it goes through. And then it, and then it like does something in a point of interest, like adds a click handler or inserts children. There's the template
[03:37:30] , which is, you know, whatever. But the reason that like, and there's even, you know, ways that we can, you know, remove the template
[03:37:43] . Like if it's client side hydration, oh, look, template's gone. Um, cause I said it was server only. This is a little trick, but
[03:37:52]  what I'm getting at here is the walks end up being actually a decent size of the components. Because picture like this, this one has some state, but if this
[03:38:04]  component had no state and did nothing else, but inject another component. Or another component. Yeah. Let's get rid of the click handler too. Like that's just
[03:38:24]  nothing. Right. This component could basically literally just be create other component. Like the code basically disappears, right? Like there's, there's no code to this component,
[03:38:39]  except for the fact that that it needs to walk, right? Like it needs to know where to inject that, the other component. But if you encoded the walk
[03:38:48]  small enough, you could basically pretend like this doesn't exist. Essentially, you could just be part of the encoding and literally your component could just be like counter, walk,
[03:39:00]  create child. So like, you know, we talk about server component and like code reduction on partial hydration, like server, like you don't need to send the server
[03:39:13]  code, you could also like, there's not much to a component that doesn't do anything anyways. It's literally just a, it's just the code to find where
[03:39:21]  they insert the other component. So if, if, if, if you did things smart, you could like, this kind of pruning would be fairly efficient. If
[03:39:34] , when you care about size. Yeah, but the problem is I'm actually talking about stuff that's all unreleased sick stuff. Anyway. Yeah, I mean
[03:40:03] , this, it's not necessary. It's Babel does it because they're like, we know that, like, I was hoping we did a change recently. Maybe
[03:40:15]  this hasn't been updated yet. We did a change to make these vars so that it wouldn't have to worry about scope or something so that it would, could get rid
[03:40:23]  of some of these. But I don't know if the, it's been updated, but Babel just goes like JSX is an expression. I need to input
[03:40:32]  a bunch of stuff. So it does this. This is not necessary. We could probably reduce some sides if we could figure out how to convince Babel not to do it
[03:40:40] . Anyway. But yeah, you get my point. The majority of the size is either going to be the string template, which is, can be selectively chosen to
[03:40:54]  be passed and the walks. The actual component code for a non-interactive, i.e. a server component, essentially, is basically nothing. So, like
[03:41:05] , you could do, you could reduce code size without even partial hydration, in theory, like, significantly. And I think that's what Quik's kind of getting at
[03:41:16]  here. They don't do those walks except to do the fine-grained stuff. They were VDOM. They started doing those walks after the fact because they started
[03:41:24]  adding, you know, a few solid-esque optimizations. So now they're, like, doing them all the time more. Maybe they're moving towards doing them more
[03:41:32] . And they were, like, okay, we should come up with a better encoding for it. So he's explaining how the walks mean. D letter is a third
[03:41:40]  zero-based letter for the next 10 notes, text notes. Like, it basically describes a path to where it needs to go. So it just, you can basically see
[03:41:49]  these as next sibling, first child, kind of. Right? Okay. Lazy virtual nodes. Virtual nodes gives user is stored data rather than objects. As a matter
[03:42:03]  of fact, the rays are always monomorphic. Yeah, because Quik uses virtual DOM, so. Yeah. I don't know how this applies as much. Next
[03:42:17]  coming data series. We're going to discuss. We're going to data series station. Yeah. Okay. And then come join us. Blah, blah, blah.
[03:42:27]  We're talking about their UI component library. Nice. Okay. So, yeah. I think the big one here is that they're optimizing, further optimizing for size
[03:42:43] , the JavaScript and the HTML, which is a smart move. So, yeah. I'm kind of still torn on the walks, but it definitely reduces the JavaScript bundle
[03:43:01]  size if you do it that way. It'll be slower, but, yeah. Oh, why do you need a fragment in JSX? It's because it's
[03:43:23]  a syntax for expression, right? It's how, like, by using open close, you know that you're done, right? Like, otherwise, it'd be multiple
[03:43:32]  expressions, right? Like, JSX is kind of JavaScript-y in terms of it. So, if you didn't have a fragment wrapping it, it'd be like
[03:43:41]  returning an array without array brackets around it. Like, what would that mean? Should it return the first element? I guess you could... It's just, like,
[03:43:53]  the way the parsers and stuff work. I guess you could, like, say, like, arbitrarily make it an array. But, yeah. The poll is
[03:44:06]  fixed on the docs? Okay. Let's send people there again. Docs.solidjs.com. Share your feedback with us. There you go. Perfect.
[03:44:22]  I think that's a good improvement. It's incremental, but it will improve performance in a place that they're probably... Like, basically, if I'm quick and
[03:44:38]  I'm thinking, you know, people are like, there's trade-offs to resumability, sterilization, or whatever. This is how you would address one of
[03:44:45]  those trade-offs. It's still going to take some for, I guess, people getting on board. Because this is an internal optimization. It doesn't affect the
[03:44:58]  developer experience as much. But, I mean, I love stuff like this. We need better benchmarks. That's all I've got to say. Okay. Whereas,
[03:45:12]  if you look at the React announcement, this is... I mean, don't get me wrong. We're going to look at the article in a second here. Everything on
[03:45:19]  this list is... is... DX-related, mostly. I mean, there's... We'll talk about the React compiler, obviously, in a minute. But, yeah
[03:45:27] . The funniest thing I looked at this list is I had to instantly do it. I'm like, is any of this relevant to solid? I had to, like
[03:45:36] , do that in my head. So, when I was looking at it, I was like, you'll never need these APIs again. Use memo, use callback,
[03:45:41]  memo. Okay. Yeah. I think that was already the win. So, forward ref is... Yeah, we don't have forward ref. We'll come back to
[03:45:53]  this one. Use context, use context. This one... This doesn't even matter. This isn't even... I'm not drooling over this. I guess this
[03:46:02]  is fine-grained. It's a secret thing here. Like, it's, like, more granular, the way it works. Don't they already have this?
[03:46:11]  This one's interesting. I actually debated this when I created solid. We could, like... We could implement this in, like, two seconds if we wanted to.
[03:46:27]  I could, like, release this tomorrow. I kind of like it. Like, why... Like, this whole thing was, like, why do you have to, like
[03:46:35] , know about it? Context objects itself could just be a component. Promise as a child. See, the reason I skipped this one is because it's kind of,
[03:46:47]  like, saying RSC. I think... Lazy is a good thing, but, you know... Yeah, I don't know. It's back to that whole
[03:47:02]  blocking conversation again. It is interesting, though, because, like, when we implement lazy internally in the framework, it's basically using create resource. Like, it's
[03:47:15]  kind of using the same mechanisms. So, I could argue... I could see the argument that, like, it's the same primitive. Like, in their case, all
[03:47:23]  their stuff is promises. So, just being able to insert a promise. Like, what's the difference between a component that's async and a lazy component? Probably
[03:47:33]  very little, right? Because... So... I guess what you would... But you'd still need to do the dynamic import yourself, right? You'd go import component
[03:47:53]  without the lazy wrapper. And then... Yeah, exactly. Yeah, you'd import it without the lazy wrapper. Yeah, that's actually kind of cool. I was thinking
[03:48:06] , because... At first, I thought this was because of RSCs only. Like, is this only on the server? Is that, like... If this is
[03:48:15] ... If this is... Not the case on the client, Then... I'm kind of like, whatever. But if this is... If... Yeah, if this is on
[03:48:26]  both, that's kind of interesting. Yeah. I mean, it's... In this case, the blocking part actually doesn't really matter so much, because, like
[03:48:57] ... A lazy component would too, right? Like, you can't run the component until the code loads. So, like... Like, you can get to the next
[03:49:05]  sibling. It's fine. This thing just can't run until later. So, I think it's... Oh, unless they throw. And then they force you to rer
[03:49:12] un the whole parent. I doubt they would do that. I think you'd render the JSX into VDOM nodes. Notice you have an async one.
[03:49:22]  And then continue on from there. There's no reason to run the parent again. Because you'd have the full realization of the JSX, like, the VD
[03:49:34] OM nodes and all the props and stuff. Unless those props change, there's no reason to run the parent, yeah. No, I think this makes reasonable sense.
[03:49:47]  It's funny, like, one of the really old versions of Solid, I supported injecting promises directly and observables, like, Rx-style observables, directly
[03:49:56]  into the DOM expressions. Because I thought, like, it would be, like, cool for interop and stuff. Yeah, I mean, it's funny. The thing
[03:50:08]  is, like... It's trickier than that when you have to... Depending on, like, how the rendering works and it ties into async stuff. Like,
[03:50:17]  uh, suspense. Because of the way that we realize stuff and our components are just functions, I doubt we would ever go this way, right? We do the wrapper,
[03:50:28]  and then the wrapper informs the behavior. But, yeah, definitely interesting. Yeah, yeah, yeah, yeah. Like this, yeah, yeah. Yeah, exactly.
[03:50:49]  It's a simple change. Trivial, in fact. But, like, suddenly you don't have to explain to people that you have dot notation on JSX. It
[03:50:59] 's just ugly. Oh, right, right, right, right, because they don't even need the use context. It's literally just context. That's why they
[03:51:13]  did it. That's why they did it. I mean, it doesn't matter, though. Like, you could just... The context could be the provider, and then
[03:51:27]  you could go use context context. Like, like, the fact that they removed the word here doesn't matter. Yes, but, like, you'd be loading
[03:51:42]  JavaScript code, you'd have to do something with it. But, I mean, it's an interesting question. I get where you're getting at. Yeah,
[03:52:02]  yeah, yeah, yeah, yeah, yeah. You asked me to see cobalt. Yeah, a lot of design systems. But it's, like, leave it
[03:52:06]  to them, you know? This is, like, the only core place where we do this. Like, if you think about it, like, oh, God,
[03:52:19]  solidjs.com. Let's just look. I mean, it's the same in React. I don't really have to go very far for this one. But if
[03:52:25]  we just go context, create context, yeah. What create context does is it returns an ID, a provider, and default value T. But the funniest thing is end users
[03:52:39]  never use these two things. So, literally, this could just return the function with these two things on it. And then it would literally just be create context, counter
[03:52:47]  context, use context, or then counter context without the dot provider. And then down here, it's just use context, counter context. Like, this part doesn't change
[03:53:00] . Right? All it is is just dropping off the provider simply by putting these properties on the function. It's so simple, I don't know why I didn't do
[03:53:10]  it in the first place. I think I was, when I did this, I was still a little bit too React brained. I started diverting from React APIs
[03:53:17]  later. But at this point, I was like, I was like, accepting of their stuff. This, this is such an obvious thing. Yeah, instead of a different
[03:53:28] , it assumes too much. Like, there has to be special, like, am I supposed to assume that any JS loaded into it is a component? I guess
[03:53:46]  I'll actually, yeah, yeah, yeah, actually, you know what? I mean, this is kind of what we do, right? I guess it would work.
[03:53:55]  I mean, you'd have to, you'd have to call. Yeah, I guess it would work. There's, there's some more trickiness. I'll
[03:54:10]  get back to you on that. Someone needs to make a meme, drop the, the, but drop the provider, just use, use. There you go, yeah
[03:54:24] . This one's so obvious, it's kind of like Angular letting you have self-closing tags. But, you know, I'll take it, and I
[03:54:34] 'm sure developers will take it. It's like a singleton. It lasts forever. Use is the worst name. Well, you saw our April Fool's joke with
[03:54:57]  create unsolid, I hope. Then someone actually went and made that. Anyways, I think there's probably going to be more interesting stuff in the article than this piece
[03:55:11] . I think that people using modern frameworks haven't had the worry about this first one, the second one, the third one. The third one's nothings, whatever.
[03:55:25]  Fourth, like, fifth. Even some, other than us, most people have slightly tighter context. Almost this is all React-isms, but it's nice to see
[03:55:36]  them pushing it forward. Yeah. Okay, what we've been working on, February 2024. React compiler. It's no longer a research project. Compiler powers Instagram
[03:55:54] .com in production. Nice. See, this is, people have been talking about the Vercel versus meta thing. Meta's been, maybe not all in on
[03:56:01]  server components, but they've been all in on this compiler. As discussed in our previous post, React can sometimes re-render too much when state changes. I love
[03:56:14]  this, sometimes. I mean, I get what they're saying. They're trying not to over-emphasize. I like it. Since the early days of
[03:56:24]  React, our solution has been manual memoization. Reasonable, but we weren't satisfied. React with a compromise. So, like, simple function of state and with standard
[03:56:36]  JavaScript values and idioms. Keep part of React is approachable to many developers. I mean, I don't know if I want to get into this, but,
[03:56:44]  like, I'm very happy for Solid.js to take the just JavaScript crown, so to speak. Because what this is will be easy to use. But it's
[03:57:00]  not just JavaScript, right? Like, they're changing the semantic, like, they'll be changing the way your code runs from what's actually written there. This is
[03:57:16]  the Svelte trick, so to speak. And I think people are open to it. So, I don't think it's a bad thing. But there is a
[03:57:22]  trade-off to it. I think it will only matter to the biggest diehards on the just JavaScript side. So, I'm happy to have you guys all over
[03:57:31]  here. But, yeah. It's interesting, because their reasoning for this is at odds with what it actually accomplishes. Okay. JavaScript has no challenge language to optimize
[03:57:50] , thanks to the loose roots and dynamic extension. Those are the pretty smalling rules. Yeah, rules of React, so. It must be antipotent between the
[03:57:59]  same value given the same inputs. Can't mutate state of props. Interesting. Did you, did you see, um. Uh, TK Dodo, T
[03:58:16] K Dodo. Where is it? He told everyone to read the useEffect docs, like, really hard this last week. He's like, read the page.
[03:58:36]  Right, right, right, right, right. And. And I learned some stuff. Okay. Did you see Theo say React with the most just JavaScript framework today
[03:59:03] ? I'm not surprised by that take. Um, I think it's pretty far, but it's, it's kind of showing what I'm talking about, where I
[03:59:15]  think people are accepting of this change, even if it's like inaccurate is the best way I would frame this. Right. Right. Like, like, there, there
[03:59:26] 's two different meanings to just JavaScript, there's the idea of the idea of you just write JavaScript, which is a svelte meaning. The, as in like
[03:59:34] , you don't use libraries, you just write JavaScript looking code, even though it does other stuff. And then there's the just JavaScript meaning like, you don't
[03:59:44]  use like, you don't change the semantics. It's just like, if you took that code and pulled into another function that was somewhere else, you know, outside
[03:59:54]  of some kind of compiler scope, it would behave exactly the same way. Um, the, those are two different meanings of just JavaScript. So I think React went from
[04:00:06]  the second meaning that I said, which is, I think what's solid excels at to the, to now kind of taking the svelte meaning of just JavaScript.
[04:00:18]  People are okay with that. That's fine. But from my perspective, I, I have, I have a very hard time calling reacts JavaScript, just JavaScript after what
[04:00:28]  they intend to do with this compiler. But yes, this blog post is amazing, right? I mean, we all know lots of these things, updating state based on
[04:00:43]  props. Like this is the, uh, solids use computed thing. You shouldn't synchronize state with effects. It's the worst. That's why I created create computed
[04:00:51] , not just create effect, but I've been trying to get rid of create computed as well. Cause it's, it's bad for stability. Um, they talk about
[04:00:58] , you talk about driving data. A lot of this is like how to drive data. It's very important lessons. We teach the same kind of lessons in solid. Like
[04:01:06]  what if you do that? But then I saw this start by deleting the effect instead, just adjust the state during rendering, declaring state, and then setting state in the
[04:01:17]  rendering. This one shocked me, but what they explained is as long as like those patterns, more efficient than effects. Most components shouldn't need it either, but they're
[04:01:36]  basically saying it's better. because effects run after the fact and restart the whole rendering. It's better to just render it as you go. Um, this is basically
[04:01:43]  equivalent to create computed in solid. Um, if you're interested, like this is essentially the equivalent, but it's just, cause this will apply before the diffing.
[04:01:55]  If they, they might re-render this part of the component, but they, they'll like, if they see you update the state, what react does is it runs
[04:02:02]  at once. Then it sees you update the state. And, and it returns to JSX, but it doesn't do any like Dom diffing. And then it
[04:02:09]  goes, okay, the state of this component updated, it runs it again. And this time the early exit gets you out of it. So then it, you know
[04:02:18] , it essentially renders the same JSX again. So it goes through the thing twice, but it didn't go in Dom diff, right? It just ran the component
[04:02:26]  twice. So this is better than using use effect, but like, it's still not particularly good. But the fact that this was shown in the docs completely blew my
[04:02:38]  mind. I mean, it's, it's pretty interesting to, to actually suggest that like, I, I kind of went the opposite way. I was like, I
[04:02:47]  basically was like, I want to get rid of create computed. If people shouldn't use use effect, but if they have to, they can, this is like, here
[04:02:54]  you go. But what, what triggered this for me is that the react components must be ideponent returning the same state value, given the same inputs and can't
[04:03:06]  mutate props or state values. The rules limit what developers can do and help carve out a safe space and compiler optimize. It occurred to me that this example here actually breaks
[04:03:17]  the rules of the compiler. Just, just on a side note, it just kind of tricked on me. Yeah, I mean, most cases, hopefully you're der
[04:03:30] iving stuff, but yeah. Yeah. So, okay. Of course, we understand the developers sometimes bend the rules and our goal is to make react compiler work out of the
[04:03:50]  box. Copound the compiler attempts to detect when code doesn't strictly follow the rules. And we're testing against meta's large varied code base, blah, blah,
[04:03:57]  blah, blah, blah, enabling strict mode, ESLint plugins. It's a compiler action. Check out our talk from last fall. At the time, we had
[04:04:03]  a fair amount of data to compiler run to Instagram. And then we shipped to compiler production across Instagram.com. We're expanding our team accelerator, roll up, blah,
[04:04:09]  blah, blah. Okay, great. So, I think this is probably going to be pretty cool. I think it's going to impact huge React code bases. I
[04:04:22]  think it's going to make it easier for people to write code in React and not understand what it's doing, for better or worse. But I think there's a lot
[04:04:32]  of generally positive benefits of having this auto-optimization. So, yeah, I guess we'll see how it falls. So, good to see. What this
[04:04:43]  won't do is, like, for all those performance nuts out there, and I know you guys are in the audience, this is not going to, like, make React
[04:04:50]  suddenly win the JS Framework benchmark. I'd be very surprised if it moved more than 20% off this change. But, you know, it's still, you
[04:05:02]  know, quite an important step forward, I think, to making React more livable. I think people have wanted something to improve it for years. And it's really actually
[04:05:16]  inspiring to see the lengths they would go to try and fix this model, right? Like, this is, like, this is a monumental effort to, you know,
[04:05:26]  basically fix the React model. I don't know how many developers. I know there's a team of maybe, like, five or six core people that were working on it
[04:05:38]  when I talked to them about a year ago. And now, like, there's probably, like, the rest of the, clearly to get this point, way more people
[04:05:47]  have been pulled in. There's quite a few people working on this project to make this happen. So, in fact, with Instagram and Facebook being able to test this
[04:05:59]  at scale, I imagine this will be quite an incredible accomplishment. Like, there's trade-offs here. Like, React's model is, for example, easier to
[04:06:23]  work with server components, right? Like, for them, they found their nice balanced place. Will there a solution ever be as performant as what, you know,
[04:06:32]  find-grade React to be? Probably not. Does it matter? Maybe not. Right? So, like, why should React change what it is? See, here's
[04:06:42]  the thing. If I thought React was actually going to do what I wanted it to do, I would have never created Solid. There's a time window there where,
[04:06:53]  you know, I might have said, like, if I thought React was going to do what I wanted them to do within five years, I might have never created Solid.
[04:07:02]  At this point, it's probably ever. But, like, you have to consider that. Like, at a certain point, you just choose the tools. Like,
[04:07:11]  even, like, the people waiting on Forget, right? Like, I'm not suggesting it would have been prudent to do so. But, like, between the time
[04:07:19]  that Solid had its current APIs and React Forget coming out, it's been five years, you know? You could say something's only was felt, or seven years, or
[04:07:29]  whatever. Like, you could have, at any point, like, I felt that way a bit with the JS Framework Benchmark, too, right? Like
[04:07:38] , it's like, you could have, you know, you wouldn't have chosen the other option because it wasn't as popular, as known as whatever. But at any
[04:07:45]  point, someone can choose to do something different and benefit it for years, a decade, before others will get to the same zone. But we're not all bleeding edge,
[04:07:54]  right? You know, not everyone wants to bleed on the edge. So, like, you have to choose where it is. And even as a framework creator, this
[04:08:01]  was, like, my consideration. It's, like, I knew that no one was going to do what we were doing at that time within that time period. Ironically
[04:08:09] , many came around, but, like, I didn't know that at the beginning. There's no way of knowing that. And looking at the key players, I wouldn
[04:08:17] 't have expected them to get there on their own. So, like, or at least in that time window. So, like, yeah, I think it's good
[04:08:29]  that React's not the same. You know, that they've chosen a different path. This lets us do our thing. No, that's the thing. I don't
[04:08:38]  expect it to be. MillionJS is optimizing the leafs. It's, like, it's, in theory, Million plus this compiler could, like, something
[04:08:55]  with it could get to a pretty sweet spot, I think. But they're, like, both focusing on other parts. React4get is trying to auto-im
[04:09:04] prove the component re-render stuff. Million doesn't stop React from rendering your components a billion times. It just makes the rendering of the specific component faster by applying a grouping
[04:09:16] -based optimization. Very similar, actually, to what we do in Solid.js in terms of using template cloning. But, like, if you add Million to
[04:09:27]  your app and your app re-renders a billion times, well, then Million might make things faster for you in some cases. But it probably doesn't matter, right
[04:09:39] ? Like, it probably doesn't do very much. For Git's on the other side. It's, like, they're hoping that they can reduce the amount of
[04:09:47]  re-rendering being done and that having a bigger impact, which it should from an application scale. But it won't win at benchmarks, right? Like, Million wins
[04:09:56]  at benchmarks. React4get won't win at benchmarks. So, it's possible that the combination of both. But the thing is, a lot of the assumptions React
[04:10:07]  makes on a model probably prevent it from going in the direction. Block DOM-type approaches, like Million.js, existed, like, before Million.js. And they
[04:10:15]  existed even, like, experiments and stuff. Go talk to Dom Ganaway from Svelte, you know, like, and Inferno and stuff. And,
[04:10:21]  like, his work on compilers and pre-compilation in React. They had ideas of how to do this. But because of the fiber architecture and their concur
[04:10:31] rency considerations, they didn't really want to, you know, go that direction. It's just tricky with this whole compiler thing on React when I'm not sure either compiler
[04:10:44]  is going to be capable of addressing the architecture that is React. I think that's actually the concern. It's, I would never tell them not to work down that
[04:10:56]  path and switch the signals because they're forwarding that architecture as far as it possibly can go. And that's an interesting innovation. Even if I don't believe in it
[04:11:06] , and even if I think that there are much better ways to approach it, they are pushing that direction in a way that is interesting. A way that I would never spend
[04:11:14]  the time doing myself. So, like, I think, you know, that's why this is important stuff. But it's also, like, you know, have
[04:11:26]  to recognize, like, the fundamentals there. We don't want developers to build graphs, essentially. Yeah, they don't want you to think about data flows. They
[04:11:44]  don't want you to think about waterfalls. That's, as I said, it's ambitious. I don't think it's realistic. But good on them. Right
[04:11:59] ? Right? Right? Oh, man, Mikado. I haven't thought of, talked about, or thought about Mikado for a long time. I mean,
[04:12:27]  it was, it was fine. Mikado is an example of, like, using every trick in the book to try and push the performance out, even if it didn't
[04:12:37]  scale to relapse practically. I think, I think it was a very good experiment. I think it showed us, like, how fast, say, direct proxy state
[04:12:45]  is, what you can do with recycling, dangerous techniques like node recycling. I don't think about it much these days, though, to be fair. But, like,
[04:12:56]  it was useful at its time to kind of show us the limits of what we could accomplish. Signals aren't what's blocking server components, to be fair. Although
[04:13:20] , it's more like fine-grained rendering doesn't need to diff. So, shifting and diffing solution for server components seems extra, right? It's like
[04:13:38] , if you optimize on the reactive side, there's no reason to have all the code that you need to make server components work. So, like, it takes a
[04:13:47]  bit of a step back to kind of decide to add back a diffing engine and APIs to handle it. Like, yeah, yeah, exactly. Yeah, like,
[04:14:01]  the key prop, right? Like, the biggest thing actually blocking on that side, like, I actually don't even know if it matters that much. But, like,
[04:14:08]  the key prop is a perfect example. Like, React, they expect you to key stuff. It's made for diffing. If you have a map, you key
[04:14:15]  it. If you don't have a key prop, then it's, like, suddenly, like, hmm, how do you do diffing, right? Like, do
[04:14:24]  you add a key prop just for this case? I would love to find, I think what's interesting, and it's a whole other aside, is server components clear
[04:14:37]  boundaries gives us a solution to the serialization problem. But if there was any other solution to the serialization problem, I think it would be very, very interesting. Because
[04:14:46]  other than the serialization problem, every other aspect can be optimized incredibly well with some kind of version of signals or fine reactivity. I mean, we're seeing parts of
[04:14:58]  it in quick resumable solution. Right? Waking up stuff and not even hydrating it at that point based on granular invalidation based on data. If you
[04:15:06]  know your data flow, then, like, the sky's the limits, right? You don't have to do dumb render and diffs. That's always going to be
[04:15:17]  slower or worse, right? It's just, yeah, the trickiest part right now is figuring out. How to find the right abstraction for solving the data serialization
[04:15:36]  problem, I think. And I'm not talking about, like, the quick blog. Like, that serialization, that's fine. That's improvement for them.
[04:15:42]  I'm, the problem still is, if you know that you have a stateful change somewhere behind your app, like a router, client-side router. Any kind
[04:15:53]  of auto-compilation is still going to assume that you need all the code under it because it's, like, that's the decision point. Now we need that code
[04:15:59] . Now we need the data. Like, you end up with a model. Yeah, it's tricky. I have talked about this before, but you have to be
[04:16:09]  very considerate of the boundaries here. The reason server components work so well is because, the same reason web component Shadow DOM works, is because the tree on the outside can
[04:16:19]  weave through all the, like, client island trees in a single way. And it's impossible for the client to pass props back into the server. That's the whole
[04:16:29]  key to that split, which is why you know you can be safe. Any other kind of, like, approach where the client injects back into the server, you know
[04:16:37] , like, lakes or, you know, I think the Nux server component solution, will not solve this problem. And I, that's why I still, you know
[04:16:46] , think about these things anyway. All right, let's keep on going. Yeah. Actions. Oh, well, I mean, we've seen this before.
[04:17:05]  I think. Is there anything new here? We use submission. Use submission. Yeah. I think I actually demoed this earlier with Solid's version. But. Okay
[04:17:26] . Okay. So they're just saying they're officially bringing actions into React. With the next version. Okay, that's cool. We've, we've been seeing this
[04:17:36] . Use client, use server. This is where they're describing it after islands or TRPC smart document metadata title. This is cool. This is something I've been
[04:17:51]  looking at. Again, once you add streaming to your framework, having first party support of title and meta tags and stuff becomes really important. React's approach here. It's
[04:18:03]  funny. Next.js does router level stuff here. Compiling the tags is interesting. I've been looking at primitives here and not going to compilation. In fact,
[04:18:14]  I think Alexis has already made some PRs. I haven't actually looked at them yet. Let me see. What does he got here? Pull requests. Use title
[04:18:24] . Use meta. Yeah. Yeah. Yeah. Yeah. So, but yeah, this is actually going to be increasingly important when you think about handling streaming solutions, building it
[04:18:33]  in. Asset loading. Yeah. We have used assets. That makes sense that they landed here too. But there, I wonder what it looks like. Resource loading
[04:18:47]  APIs. Okay. Interesting. Yeah. This is cool. We should look at this at some point. We should look at this at some point. Yeah. I like
[04:19:03]  it. Mostly because I've been working on similar solutions. So I think that's really cool. And actions. Yeah. Next phaser version. A couple iterations.
[04:19:15]  React canary. Latest. React 19. There's still more to be done. Offscreen. Okay. This is interesting. Because this has been one of my
[04:19:24]  topics I want to look at for 2.0. Notically offscreen to activity. Reply that it would be only not visible yet. That makes sense. While researching
[04:19:32] , we realize the possible parts, they have to be visible and inactive. Such a content behind a modal. Hmm. I don't know if I like that. But
[04:19:39]  yeah, I get what they're saying. Yeah. Definitely. This is all about scheduling of effects. Yeah. Cool. That's good. It's a good update
[04:20:00] . I'm glad to hear this stuff is moving. It looks like the compiler won't be that much longer. And I think these APIs are actually all very critical here
[04:20:23] . It's kind of interesting, though, because obviously the compiler is both sides. But none of the changes here are the ones that Andrew Clark talked about. But that's
[04:20:34]  still interesting. Sometimes we add APIs just so we can collect kudos for removing them a few ways later. Just kidding. Kind of. Oh, I love that.
[04:20:47]  It's awesome. Anyway. You want actions to be the new convention for React components instead of on. Where did you see that? Just curious. I mean, it
[04:21:18]  makes sense in the fact that then they don't need any client handling if it goes straight through, but what's interesting is, I guess it's fine. It's
[04:21:32]  very imperative. But like, event handlers are always the imperative part that like lead into feeding back into the state. So I guess, yeah, I guess it's all
[04:21:40]  part of it. In that post. Did I, did I, I missed that? I guess I skimmed over it. Because I was all like, yeah
[04:21:49] , we've had actions forever. So let's see. Let's see. Let's see if we're in there. Default actions are going to transition. Yeah,
[04:21:58]  it makes sense. He's optimistic. Library authors can have custom action function props in their own components with used transition on intent is sort of libraries to adopt the action parameter
[04:22:13]  design and their component APIs to provide a consistent experiential reactor. If your library has a calendar on select type of end. We initially focused on server actions for client server
[04:22:29]  data transfer. Are fostering reactors to try the same if we introduce a new client feature, blah, blah, blah, blah, blah, blah, blah. I don
[04:22:38] 't know if this makes it any clearer for me. I guess because my perspective actions have a clear tie into routing functionality. Cache invalidation. Like the connect,
[04:23:05]  like what causes data to invalidate on your route? A client action isn't, I guess you're calling a set state call. Yeah, I don't know if this
[04:23:20] , I guess I'll have to see it. I don't know if this does anything for me. I mean, transitions make a lot of sense. Not everything's
[04:23:33]  async, but if it's not, there's no harm, no file. Except for the speed, like performance. I don't know if you guys ever saw this
[04:23:43] . Someone made JS framework benchmark and they did it with the concurrent react, like all with transitions and stuff. Yeah, use transition. Here we go. Oh, quick
[04:24:04]  got in here. I missed that. Quick, quick on the JS framework benchmark. 1.53 right beside Preact, just like I said they would be. All
[04:24:23]  right. React hooks transition. Where's normal react? Is normal react in front of Preact now? That makes sense. But it's all in the same range. It
[04:24:35]  looks like the table's compressed. So quick is 1.53, slower than React. Then React transitions is back here next to Marco. U. Interesting. I didn
[04:24:58] 't see. I didn't see that they got added. Oh, there's a view vapor in here. What's going on? That's way too slow for vapor
[04:25:05] . Really? 1.33? I would expect. There's probably. That's not the final. Because that's slower than view normal. View normal is 1.25
[04:25:17] . Wow. People have been getting ahead of stuff here a little bit. That's interesting. Solid store. Svelte classic. This is probably the most impressive thing
[04:25:33]  on here. Their classic Svelte 5. Not using signals. But like optimizing to signals. Like letting you write the old syntax. But optimizing to signals. Actually
[04:25:44] . Is pretty performant. Like how much better that is than Svelte 4. Is actually really impressive. That you can write it the Svelte 4 way.
[04:25:53]  And still get basically. Upper echelon performance. Right? Yeah. Solid and Svelte 5. And raw WASM. Are all about the same thing at 1
[04:26:07] .06. Yeah. That's funny. Yeah. God. That disposal time. Hurts us a bit. What hurts them? They're not as quick on.
[04:26:23]  Creation. Anyways. This is actually really impressive to me. That Svelte 5. Written the Svelte 4 way. Is up here. Dom did some good
[04:26:36]  optimization. I was expecting Svelte 5. And Solid basically be next to each other. That's fine. I was expecting Vapor to be up there too.
[04:26:43]  There must be something up with this Vapor. For it to be way back here. For this Vue Vapor. Release. Anyway. Sorry. I was thrown off
[04:26:54] . I don't remember why I was trying to show that React with transitions is about the slowest way to write React. And then I found that Quick snuck its
[04:27:07]  way in here. What's killing Quick here? Why is Quick slower than React? Even with good row optimization. That's actually insane. Actually. Can we look at
[04:27:20]  this for a minute? Sorry. Kind of. Yeah. Yeah. I know you've been active on it. Do you know the state of things? It's V
[04:27:37] apor's. Yeah. When can we beat Vanilla JS? If we beat Vanilla JS, we're not doing something right. Last time we beat Vanilla JS,
[04:27:48]  I had to go and fix the Vanilla JS and make it faster. It's a good learning process. I actually have a blog post from Solid Beat Vanilla JS
[04:27:56] . It was on my birthday, like, three or, like, God, it was five years ago. Yeah. But, yeah. What's going on here? Let
[04:28:09] 's understand. Because React is getting punished for having really poor list reconciliation, right? But Quick's got good list reconciliation. It's got good partial updates, like most
[04:28:23]  signals libraries. Its creation is slow. And its replace rows is slow. Although, its big replace is better than Quick. And its memory usage is like React. The releasing
[04:28:40]  is really bad. So, it's a pending. Interesting. Select row is worse than it could be. But, that can probably be optimized. Maybe it's the
[04:28:56]  classic view trade-off. Like, it's hard to be a VDOM and signals. Like, they fight against each other. Like, you've got to optimize
[04:29:05]  one way or the other way. Like, my, like, Preact signals. Interestingly, though, Preact signals. Where's Preact normal? Preact classes
[04:29:17] . Yeah, yeah, exactly. Preact classes are here. Preact signals are back here. Right? This is why I was talking about that trade-off. You
[04:29:27]  have to either optimize partial update or you have to optimize select row. You don't get to choose them both when you have the VDOM and the signals thing.
[04:29:35]  It's, like, a very common problem. I used to always complain about view about this until they actually implemented a feature that actually solved it. See, look, Pre
[04:29:43] act classes, it's reversed. Select row is fast. Swap rows is slow. Interesting. What's going on here? Preact signals? Huh. Sorry,
[04:29:59]  this is just not what I expected. And then Preact hooks is similar to signals. But why is it slower? I would, oh, Preact hooks partial updates are
[04:30:10]  terrible. Whereas Preact classes are not. So it's, like, yeah, there's, it's, like, every version has a direct trade-off.
[04:30:20]  So, anyway, this is, this is interesting to me. I don't imagine anything they're changing here, actually, impacts much. It's all about hydration load time
[04:30:44] . It's not about how fast your app is after it's loaded. Like, the, the serialization stuff. If anything, it might make stuff slower. Um
[04:30:53] , this is not where they're focused. Well, I mean, I, I just switched whatever, it was originally EV. I just switched to whatever DOM diff.
[04:31:11]  The, the diffing matters for the, the, the, basically just this one swap rows. Right. EV was the one that originally had the fastest swap row algorithm
[04:31:25] . And then everyone else basically copied them. Biggest challenge with signals now is the memory overhead. You can see it that, like, even with Svelte 5 and
[04:31:36]  solid, we don't compare quite to million here because of the overhead of removal speed. Although, uh, yeah, 14, five and 15 signals have an expense for
[04:31:47]  cleaning things up, which is where they get hit. Um, because the memory allocation, they can affect creation, but our creation is actually pretty good. Um, but replace
[04:31:56]  roles again, has cleanup. We get penalized for it a bit. So it's where, it's where, like, the most optimal way to render a single
[04:32:06]  chunk of DOM would be the way that, um, essentially million is doing it here. Um, or EV with the block, but it's, but it doesn't help
[04:32:17]  you structurally when you don't have, when you're forced into having reacts, update patterns. So like, I think, yeah, it's interesting. There's
[04:32:30]  like overhead because we have the ability to do things independently, which instead of doing component re-renders. What am I looking at? Uh, I don't know
[04:33:00]  if I meant to say this. I think I saw this a year ago when it was posted. Um, I, I, I don't know. I have to admit
[04:33:13]  that Vue's reactivity wasn't really a big influence for me. I, I, I got, I was influenced by it after the fact, which let me write
[04:33:23]  this historical article. And I think, yeah, I saw someone like a notification this earlier, which let me put it in the, his sign. Cause Vue was
[04:33:33]  the first one to really like mob X was a big influence. Vue was the first one. And SJS was a big influence. Vue was the first one to
[04:33:42]  really tip me in onto the pull part of push pull. But if you look at solid today, solid doesn't actually work this way. It's actually, it does
[04:33:52]  push pull, but it doesn't do it in a lazy way. So it's actually not like Vue at all. Um, yeah, it's kind of interesting.
[04:34:00]  Vue added the compensation API, but that was years after we had our, our, our API. So like, yeah, I don't know. I don't
[04:34:08]  have too much to say on this. Um, I, I, I think this is probably a Vue community thing. Um, don't get me wrong. Like V
[04:34:18] ue had this reactivity all along or a version of it. It's just, uh, yeah. Knockout gets a lot of cred. That's why the same reason
[04:34:28] , but to be fair, knockout didn't have the reactivity. We have modern. I, so for me, mob X gets the, gets, gets the
[04:34:33]  nod. They can, they can complain at us because like, when you talk about frameworks, you also have to talk about rendering and Vue is still a virtual dom.
[04:34:42]  Um, so like, yeah, I, yeah, I don't know. I thought this was going to be an interesting tweet. It's kind of. Who should
[04:35:01]  be Charlie. I mean, it depends on what you're asking. Knockout probably like the knockout wasn't the modern version of the solution, but knockout had granular
[04:35:09]  rendering too. Like, you know, and that's the more interesting thing. People don't adopt signals now because like, I mean, we just saw in the JS framework
[04:35:18]  benchmark frameworks that are VDOMs that adopt signals signals makes them slower. Like the reason you want to adopt signals is so that you get what Svelte 5
[04:35:32]  saw happen. So you change your rendering. And from that perspective, it's not about having signals. It's about having fine grained rendering. Um, but it's
[04:35:41]  hard to give knockout credit on fine grained rendering in a modern sense because they're, they're right here, right, right behind Ember. So like a
[04:35:54]  lot has changed there. I don't know. I don't know who belongs on the Charlie side for the signals side of things. Maybe MobX, but for why
[04:36:04]  signals matter. Yeah. I don't know. Meteor and Shambles. Yeah. I mean, Meteor was cool. I, I, maybe they had that
[04:36:19]  same, uh, thing like MobX. Maybe that's actually where we should give credit. I don't know. Did they have the, the same, uh, guarantees
[04:36:27]  and glitchless? I mean, Ember, Ember had reactivity to, you know, um, I used Ember back in the day, right after I
[04:36:40]  used knockout. It just, the whole diamond graph solving problem didn't really enter my consciousness until MobX time period. Cause we, knockout did not solve that.
[04:36:51]  Um, and I don't even remember Ember solving that back in the day. They might now, but they didn't back then. Uh, 2010. Uh,
[04:37:00]  yeah, it came out actually really early on. I, I want to say it came out before Angular and Backbone. Yeah. Knockout predates both Backbone and
[04:37:12]  Angular. Remember Rich? Yeah. Yeah. It's, it's, it's, the view guys are a little bit hurt. Cause like they've been, they
[04:37:25]  react. You have to understand react made reactive libraries being reactive. So hostile for years. Uh, I wrote that follow-up blog post about like react and like, um
[04:37:38] , uh, I mean, I can probably still find the meme on here. if I look for it, look for, um, ML, ML Rawlings. We
[04:37:49] 've had him on the stream. He works on the framework that shall not be named. No, that's not what I want. Not my private messages. Oops. ML
[04:37:57]  Rawlings. Um, I mean, this is another way of looking at that meme, I suppose. Um, but, but like, I give view a huge amount
[04:38:18]  of credit because they, even if they kind of hid their signals, they were doing reactivity at a time where react made react reactivity, like the worst thing ever
[04:38:32] . Um, pretty much like conceptually, they, that's why I like, there was such a pushback. I, I thought this meme was hilarious because like,
[04:38:42]  this is the cover from the react documentary, but like, that was what was going on here. Meteor was way too far ahead of its time. Yeah. But
[04:39:01]  yeah, yeah, I, I don't know. I'm, I, I, I don't think signals themselves are hard. To trace back, you know,
[04:39:19]  I, because they've evolved over the years, like anything and no solution took them all the way to the finish line. So to speak, we all came in on the
[04:39:27]  shoulders of giants, right? Yeah, this is, yeah. I, I, if you watch the view documentary, Evan talks a bit about his time. Um, yeah
[04:39:43] . And he also worked on something at Google before that too, if I remember. Um, anyway, um, yeah, I, I, I, the, the
[04:39:52]  whole, like who came up with signals thing. It's so funny. Cause like, I have seen that a lot in the view community where they feel like they, uh
[04:40:02] , like it was them. Whereas if you go in the other communities, everyone's like knockout. Right. But view knockout died pretty quickly around 2010, 2000
[04:40:13] , sorry, 2013, 14, around the time react, knockout just dropped right off the face of the earth, stopped getting updated and view carried the torch for about three
[04:40:26]  years in a time period. I mean, even long, I'd say longer, you know, you weren't aware of the work that we were doing with solid,
[04:40:35]  um, in a time period that was incredibly hostile to reactivity, incredibly hostile. Um, so yeah, I mean, they, they deserve recognition from that point, but
[04:40:49]  I think the motivations that pushed spelt and ourselves, there were a little bit different and that's why the, even the reactivity is a little bit different. Yeah
[04:41:06] . Meteor is the first time you, yeah, knockout had auto tracking reactivity, um, back in July, 2010, um, so to speak. So yeah
[04:41:15] . Yeah. I mean, TKO is great. It's, it's, it's awesome that was in his name, uh, maintainer TKO knockout
[04:41:30] , it's supposed to be knockout 4.0 whenever he's been working on this for, for years, get up, let's just try and get there. Okay
[04:41:39] . Knockout TKO. Uh, it's, this is the most epic rewrite of a framework ever that will probably never come out. This is the guy Brian hunt.
[04:41:51]  Yeah. Like, this is kind of where I started when I was starting with solid. This, this project existed around the time I started solid. I remember looking at
[04:42:03]  it and being like, oh yeah, this is the kind of thing I want to do. And I was like, I'm, I'm probably in the issues talking about
[04:42:11]  stuff at some point. Like, it's just like, it's just like, yeah. One day maybe. When was, when was the last release? September
[04:42:27]  27th, 2022. I think it's finally slowed down. But if you look here, he actually was pretty steady releasing stuff for, for several years. Like this is
[04:42:42]  an example of a monumental effort that might, you know, never go anywhere. So let's see a knockout by comparison. When's the last knockout release?
[04:42:50]  2019. Empty template with if option throws an error. IE error from inserting a node before itself. Problem with initial value on select. Ray change. Template binding
[04:43:04]  removes script template contents. There you go. Anyway, sorry, I was reading chat for a moment. You guys got me distracted, but I think we're, I
[04:43:35]  think we're wrapping up pretty quick here. For a day that I wasn't going to do a stream. TKO will kill Alpine. Oh man, I don
[04:43:49] 't know. I think almost anything can kill Alpine. No, I mean, I know you're not talking about performance, sorry. It's just. Oh man.
[04:44:06]  I, I, I, I, I like, look, Blazer is in front of Alpine. Oh no, that's ahead of time Blazer. No
[04:44:13] , no, we shouldn't, we shouldn't assume that anything's slower than Blazer. That would be a grave mistake. No, I mean. I don't
[04:44:29]  need to tell that story again, but petite view was pretty amusing because the, Alpine uses views reactivity and like someone was like making dissing view or something or comparing
[04:44:40]  to view. And Evan was like, no, hold on a second. Like you can use view like this, you know, like this is, you know, and he
[04:44:47] 's like, he looked and he's like, okay, actually, you know what? And literally over like a day, he just like went home one day and wrote
[04:44:53]  his own version of Alpine, which is smaller, faster. Like he just like dropped it. Like he could tell he just like went in there and it was fun
[04:45:01]  for him because he was like, this reminds me when I first wrote view one, like it was just like what it felt like. Cause Alpine is almost like a
[04:45:10]  modern version of like view one or knockout where like the, that, that same sort of experience, um, where like the way the templates process and all that. So
[04:45:22]  anyway, sorry. I know you guys probably weren't hitting on it. Thanks. Thanks. Yeah. I hope the waterfall thing works. I, I wasn't trying
[04:45:35]  to be too harsh on react, um, server components to be fair. Um, I think it's a good model. I just, I'm the whole dialogue around water
[04:45:43] falls. I think you have to like, understand that. Like the part that might've not come across properly is that like, it is so easy to create waterfalls,
[04:45:57]  like really, really easy. That's why I focus so much on like route loading APIs. Like you could definitely never do a route loader and avoid client side water
[04:46:09] falls if you're smart, but like that doesn't scale. Being smart doesn't scale. So like, yeah, I'm, I, I, I get what the
[04:46:23]  message is. It was just like the actual conversation on Twitter really started because we were talking about DX and how streamlined these things are these days. And let's face it
[04:46:33] , since we moved to this model, you know, first for the remix, then the addition of RPC actions, uh, with start. And then I guess even
[04:46:44]  the server components and next, like that whole trans like one, two, three, we have a really nice DX story here, um, across the board. You know
[04:46:53] , similar to Svelte kit, you know, like I haven't looked too closely in Nuxt recently, but I'm assuming, you know what I mean? Like
[04:47:05]  it's. Yeah. Yeah. Yeah. Yeah. Yeah. Anyway, thank you all for joining me. I will tell you a bit about my streaming schedule coming
[04:47:33]  up. I definitely will not have a stream on March 1st. because I will be at view world or the JS part of it. Like I'm going to a
[04:47:42]  big view conference. I'm going to see my view folk. Um, sorry, if I seem harsh, I guess just now, but, um, in Amsterdam, uh
[04:47:50] , it's a view beat JS conference. And then the following week, um, I'm not available either. So there may be a stream next week. There might
[04:48:02]  not be a stream next week. Otherwise I'll be back on March 15th with a secret announcement. Stream with one of our favorite guests of all time, Fred K Scott
[04:48:14] . Um, so some big Astro news coming up. So we'll see. All right. Uh, is there anyone to, is there anyone to raid right now
[04:48:32] ? I need to check my Twitch. I'm always behind. What's coding guarding doing? Let me see. Yeah, whatever. Let's give them a raid.
[04:48:54]  All right. Thank you all for, um, for joining me today. And, uh, hopefully I'll see you all soon. All right.