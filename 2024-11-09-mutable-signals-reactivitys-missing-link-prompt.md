---
showLink: "https://www.youtube.com/watch?v=jfZdl3QckMM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Mutable Signals - Reactivity's Missing Link"
description: ""
publishDate: "2024-11-09"
coverImage: "https://i.ytimg.com/vi/jfZdl3QckMM/maxresdefault.jpg"
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

[by:whisper.cpp]
[00:00.00] Hello everyone, and welcome to my stream today. How's everyone doing today? Come say hi.
[00:09.00] It's been a little while, I think it's been like three weeks since we've done a stream.
[00:19.00] Just doing green smoothie today. Staking it up a little bit.
[00:26.00] I'm excited because we're going to talk about reactivity and signals, which to no one's surprise is one of my favorite topics.
[00:48.00] Hello.
[00:50.00] I've been busy.
[01:02.00] Sorry, my mic cut out there.
[01:14.00] Admittedly, a lot of exploration into reactive stuff has been really on my mind.
[01:26.00] I apologize to all the Solid Start users out there who are probably like, when's the new Nitro release going to get in there?
[01:42.00] Hey Brandon, how's it going?
[01:50.00] Nice to see everyone.
[01:52.00] Hair check.
[01:53.00] I don't know.
[01:54.00] My hair is just like sticking up in the back right now.
[01:58.00] I've been cooking.
[02:02.00] I've been cooking.
[02:03.00] Yeah.
[02:04.00] That's one way.
[02:05.00] Cool.
[02:06.00] Yeah.
[02:07.00] I ever heard about signals.
[02:09.00] I have not, I have to admit, this is kind of one of those interesting things.
[02:18.00] I, not in that interesting, but like I went back more to learn about the academic aspects of signals.
[02:26.00] I was just a, you know, you know, the thing was like, you learn the framework and then you learn the fundamentals kind of thing.
[02:32.00] I was just a knockout user, you know, 14 years ago.
[02:36.00] I mean, when I started using knockout, even though I'd been like a web developer for almost, I guess, technically over a decade.
[02:43.00] At that point, I admit, I did not know JavaScript very well.
[02:47.00] Um, I, I mean, to be fair, web development in the late nineties.
[02:55.00] Yeah.
[02:56.00] That I did JavaScript a bit then, but then like through the two thousands, I wasn't writing in JavaScript.
[03:00.00] I was writing in C sharp, you know, dot net kind of stuff.
[03:03.00] So, and Ruby on rails, um, a little bit of PHP.
[03:06.00] So like, but yeah, I mean, in 2010, JavaScript had already kind of taken off.
[03:11.00] And I admittedly didn't know very much.
[03:14.00] I learned it on the go.
[03:16.00] I learned knockout, which made me very excited.
[03:20.00] And most of my, everything I've learned since has come back after that.
[03:30.00] Okay.
[03:32.00] Yeah.
[03:33.00] And then that's been, I used to read stuff by Andre Stoltz, um, creator cycle JS.
[03:38.00] And I, the way he described, obviously he was talking a lot about RX style streams, which he said was not like fr standard FRP.
[03:45.00] But even what they described as standard FRP didn't really quite fit with what I was doing with signals.
[03:49.00] Um, I think if I read it now, I'd have a much better understanding and much better, like perspective, let's say on like how these pieces fit together and what the similarities are.
[04:00.00] But, um, I started from a very narrow place, basically knockout JS, and then kind of expanded out there.
[04:07.00] I just had a lot of time.
[04:08.00] It's, it's been like 14 years since I first used knockout JS.
[04:12.00] It's like, instead of signals, you had event emitters and you can post all signals out of RX operators.
[04:22.00] See, I, the funny thing is when I look at Andre's work, he suggested that event streams weren't necessarily FRP.
[04:30.00] Like there was a big debate back then in like the 2016 time period where everyone was like saying that like, there's a difference between FRP, like as like stated in academics and then like what RX JS was doing.
[04:45.00] But I don't know.
[04:46.00] I don't even know.
[04:47.00] How would 2014 Ryan react to solid?
[04:51.00] Um, I mean, 2014, so like 10 years ago, he would have been pretty excited.
[04:59.00] Although he would have been like, I'm not sure about this JSX thing.
[05:03.00] Um, I was not a fan of JSX.
[05:06.00] Um, so yeah, I, I think, I think 2014 me would have really liked, um, modern view.
[05:20.00] I think like, I think like view plus the composition API, like 2014, me did not like view that was there.
[05:28.00] But if view looked like it does today back then, I, I think, um, I'm, that's probably where I would have been.
[05:36.00] I would have been very excited about like view three.
[05:39.00] Um, yeah.
[05:41.00] Did I vote?
[05:45.00] Um, did I vote?
[05:49.00] Um, I am a Canadian living in the U S so I did not vote.
[05:54.00] I can't vote.
[05:55.00] Do you mean I'd love Svelte?
[06:00.00] Svelte.
[06:01.00] I don't know.
[06:03.00] Like I, I, I might've liked Svelte five a bit, but I think, yeah, I don't know.
[06:15.00] I, I, given where I was at, I, I actually think view three would have been where, where, where my head was at.
[06:21.00] Um, it's funny given what I know now.
[06:24.00] Um, but yeah.
[06:27.00] Uh, like I think Svelte three and four would have turned me off even back then.
[06:39.00] Svelte five would have been, would have been interesting, but I mean, it's hard to picture.
[06:48.00] Yeah.
[06:49.00] Yeah.
[06:50.00] I don't know.
[06:52.00] I, I used to like Ember a lot.
[06:54.00] So like the handle bar syntax of Svelte's templating would have been really attractive, but I'm not sure if I would have liked the ruins.
[07:04.00] I can't freaking say that.
[07:07.00] Um, yeah, hard to say.
[07:11.00] I'm like trying to think of, of like 10 year old me.
[07:13.00] Yeah.
[07:14.00] I I'm sorry.
[07:15.00] Runes.
[07:16.00] Runes.
[07:17.00] Runes.
[07:18.00] Like, like, like that's failed attempt.
[07:21.00] Like was it from Microsoft?
[07:24.00] Yeah.
[07:25.00] Like, like that's failed attempt.
[07:27.00] Like what was it from Microsoft?
[07:29.00] Yeah.
[07:30.00] Like, uh, was it from Microsoft that had like, uh, was it sound machine?
[07:38.00] It was no, I guess.
[07:39.00] Zoom room.
[07:40.00] Zoom.
[07:41.00] Roon.
[07:42.00] Roon.
[07:43.00] Roon.
[07:44.00] Anyway, I'm not doing this again.
[07:47.00] My friend said, Roon.
[07:49.00] Roon.
[07:50.00] My friend said, Roon.
[07:52.00] My friend Roon says, my friend Roon.
[07:55.00] Roon.
[07:56.00] Roon.
[07:57.00] Said.
[07:58.00] Roons.
[07:59.00] Roon.
[08:00.00] Svelte.
[08:01.00] Okay.
[08:02.00] That's a, that's like a tongue twister for me.
[08:04.00] I can read, you know, mile a minute on, uh, you know, Dr. Seuss, you know, Fox and Socks.
[08:11.00] And, uh, I'll say, can you say, but I can't say that sentence.
[08:21.00] Zoom.
[08:22.00] Yeah.
[08:23.00] Yeah.
[08:24.00] Thank you all.
[08:25.00] Yeah.
[08:26.00] Okay.
[08:27.00] Okay.
[08:28.00] Um, be here.
[08:29.00] Yeah.
[08:30.00] Okay.
[08:31.00] So that is my only browser.
[08:32.00] Give me a second here.
[08:33.00] I actually have to like open some stuff here in the background.
[08:35.00] while I actually get set up to share my screen.
[08:38.00] Um, so let me see here.
[08:43.00] Fox and Socks.
[08:44.00] Yeah.
[08:45.00] Great book.
[08:50.00] But what we're here to talk about today, um, is a lot about signals and the future signals.
[08:58.00] And it's kind of funny cause.
[09:00.00] Um, yeah, I don't know.
[09:03.00] Do I even want to dive into it yet?
[09:05.00] I just give me like a second.
[09:07.00] Cause I I'm still prepping.
[09:08.00] What can I talk about while I'm getting stuff ready here?
[09:10.00] Um, what I've been up to.
[09:14.00] I went to next comp.
[09:17.00] That was interesting.
[09:18.00] I mean, I think the biggest takeaway for me personally, from next comp is I feel less
[09:31.00] worried about.
[09:32.00] Yeah.
[09:37.00] I don't know.
[09:38.00] I feel, I feel I used to like get really worked up about whatever react was working on and be
[09:42.00] like, Oh no, how does this fit into my mental model of the world?
[09:45.00] And I, I feel like after leaving next comp for once, I actually just don't care what
[09:50.00] reacts doing.
[09:51.00] I think the cache API is so much better now.
[10:00.00] Like, like just like worlds better.
[10:04.00] Like whether to use cache or a wrapper or whatever, I don't care about that detail too much.
[10:09.00] There's a reason to use, use cache.
[10:10.00] And we talked about it a couple of streams ago or like last stream, like three weeks ago,
[10:14.00] but like, um, just getting into a world where explicit is as ergonomic as all that auto magic is just huge.
[10:26.00] But like, I don't know.
[10:29.00] It's just, it's just funny.
[10:30.00] I was, I was watching some of the Theo stream.
[10:33.00] Um, and I think, let's see, let's see.
[10:35.00] Can I get my screen share working here?
[10:37.00] Share screen, um, entire screen.
[10:41.00] Um, yeah, here we go.
[10:46.00] So this still works.
[10:47.00] Uh, and, uh, and I, I think he had a, he had a tweet or something here.
[10:54.00] Yeah.
[10:55.00] He put this thing up, you know, and I was looking at this and I was like, I was like, I, I get what this is doing, but I wonder if many people actually get what this is doing.
[11:12.00] Like it w it w it's kind of, it's kind of cool when, um, it's funny when you're, when you're writing frameworks, you're always in the, uh, the, the event queue.
[11:24.00] You're always trying to, um, do there's always ways you can like warp JavaScript.
[11:34.00] It's like one of the reasons I actually love JavaScript is cause you can kind of like, you have so much, so many places to like get into it that you can do some pretty cool stuff.
[11:48.00] Um, well, I, I think, I think the thing is not exactly, I think most people look at this and they're like, Oh, set immediate.
[12:02.00] First of all, I got a question for you guys.
[12:05.00] Do you guys know what set immediate is?
[12:07.00] Right.
[12:08.00] Sorry, sorry.
[12:09.00] This is a little tangent.
[12:10.00] We'll, we'll get into the really cool signal stuff shortly, but I just wanted to just talk about this for a minute.
[12:14.00] Um, the, the idea here is that the, the, the, they were trying to come up with a way so that they could detect on a render pass, um, you know, the parts that are static or dynamic.
[12:31.00] Right.
[12:37.00] Yes.
[12:38.00] It creates a macro task, not a micro task, a macro task.
[12:41.00] Cause some of you might be thinking, why didn't you just like queue, you know, what was like two micro tasks or to go promise dot resolve or something here?
[12:51.00] Why are they using set immediate?
[12:53.00] Set immediate is just set timeout.
[12:55.00] It's a fast set timeout.
[12:57.00] It's a set timeout that goes in the front of the list, but it's not, it's not, um, yes, it's, it's faster than set timeout zero.
[13:08.00] That's, that's, that's, that's essentially what it is.
[13:11.00] And, and in the browser or environments that don't have set immediate, we actually do tricks like this.
[13:16.00] There's like post message on the windows object, which lets you also do this kind of thing without set immediate.
[13:21.00] There's, there's a few hacks almost most framework authors are actually very familiar with these kinds of hacks around scheduling because quite often.
[13:32.00] The problem is micro task queue is a queue that just keeps on feeding into itself.
[13:37.00] And at a certain point you have to let it just like flush out and then get control.
[13:42.00] Um, the problem.
[13:45.00] Here.
[13:46.00] And the reason that these kinds of solutions, like as it is a whole category of solutions, but.
[13:50.00] You know, after watching, you know, most, a lot of people were looking at this and it's like, I get it.
[13:55.00] They render the sync render and then they go and then they call the abort controller.
[14:04.00] And then, you know, this, you know, we'll, we'll cancel, we'll cancel it out.
[14:10.00] Right.
[14:11.00] Um, you know, before any of the async stuff runs, but it's, it's, it's not exactly true.
[14:19.00] This, this sets up, um, a macro task, but the reason is not because you don't want the micro task queue to run.
[14:34.00] It's not because you, you're preventing this.
[14:36.00] It's that.
[14:37.00] Um, I mean, check it out.
[14:42.00] I mean, I, I, I'm just trying to think if I should like how much I should show on this, but.
[14:47.00] If, if I wrote a, a function that's like an async function like this, let's say like, hello.
[14:54.00] Right.
[14:55.00] And I go return five.
[15:00.00] If I go console dot log.
[15:05.00] Hello.
[15:06.00] What do I see?
[15:09.00] I mean, I, I just spoiled it.
[15:12.00] It's in the freaking corner.
[15:14.00] Um, I see a promise.
[15:19.00] Like, as soon as you go into the zone, it's a promise.
[15:25.00] It doesn't matter if it can resolve immediately.
[15:28.00] It's a promise.
[15:29.00] So you have this interesting thing where with promises.
[15:35.00] Um, they can basically.
[15:39.00] Two other promises.
[15:40.00] They can cue other promises.
[15:41.00] Like the whole callback stack.
[15:43.00] I don't know if you ever seen them like a promise when you go promise then, and then you like return a promise.
[15:47.00] Um, you know, like a classic example.
[15:50.00] For example, this is like when you're doing like fetch.
[15:52.00] Right.
[15:53.00] So like you, you might do something like.
[15:55.00] Function.
[15:56.00] Fetch.
[15:57.00] User.
[15:58.00] Whatever.
[15:59.00] And then you, you, you do a.
[16:01.00] You, you first await.
[16:02.00] Um, sorry.
[16:03.00] I gotta make this async.
[16:04.00] Um, sorry.
[16:05.00] I gotta make this async.
[16:06.00] But I, I guess this is more prominent when you weren't using a weight syntax, but let's say you did like a fetch call of some sort.
[16:13.00] Right.
[16:14.00] And then you get the results and then you go like, you can just return.
[16:19.00] Jason here, even though this technically or serve as dot Jason, even though this technically.
[16:26.00] Is a promise.
[16:29.00] Promises like chain like that, essentially.
[16:33.00] Like if they see a promise of the return value, they'll automatically, you know, the thing listening to fetch user will automatically do that.
[16:42.00] You don't have to await.
[16:43.00] This is what I'm getting at.
[16:45.00] And it's similar characteristic to this, where it's always a promise regardless.
[16:50.00] So.
[16:51.00] What this means is.
[16:54.00] At least the way I took this code is they actually want the, the, the micro task.
[17:01.00] Q.
[17:02.00] To, uh, to empty out.
[17:06.00] What they, what they're trying to do is they, they call the first set immediate so that they're like, okay, make sure.
[17:12.00] Like the current macro task is out of the way.
[17:16.00] You know, whatever's currently synchronously going, just let it go.
[17:20.00] Okay.
[17:21.00] All the micro tasks that are currently queued, whatever's going on, just let it go.
[17:24.00] Okay.
[17:25.00] And they immediately queue on these two right after each other, which means they should be running in quick succession on macro tests.
[17:32.00] But between these two, the micro task queue can still run.
[17:37.00] They've just said it that these two are right next to each other.
[17:40.00] There's like nothing in between them.
[17:41.00] And this means that micro tasks, you know, like silly things that can resolve immediately.
[17:48.00] Like an already imported code split that has already been imported or whatever, or like a synchronous return value inside an async function can all resolve synchronous.
[17:58.00] Like not synchronously, but before these things actually complete out that at least that's how I take it.
[18:06.00] Maybe I'm wrong.
[18:07.00] Maybe I didn't watch the talk or whatever.
[18:09.00] I think I actually missed this one.
[18:11.00] I was outside at the time, but like mechanically, when I see that, that's, that's what I'm seeing here.
[18:18.00] This is, this is an example of the kind of framework trickery.
[18:22.00] Um, sometimes we play around similar with stuff like animation frames to make sure that we can get enough work in before the paint, but sometimes you want something to render after paint.
[18:34.00] Well, how do you tell something to render after paint?
[18:36.00] Right?
[18:37.00] Request animation frame is before paint.
[18:39.00] So you actually need to request an animation frame and then inside it.
[18:45.00] do a set immediate, like basically you want the next macro task after the animation frame.
[18:52.00] So this is a whole category of scheduling kind of optimizations.
[18:58.00] Anyways.
[18:59.00] Um, it's funny cause while this wasn't a solution I looked at using an abort controller, which is kind of clever here because it'll cancel the stream.
[19:09.00] Our, our single flight mutations actually have to do the same kind of thing, right?
[19:14.00] Cause we have to basically we don't cancel all of them, but we, we're going to run over a bunch of cache functions and promises that some of them have to respond.
[19:23.00] Other ones will recognize as not needing to be refetched.
[19:26.00] And we basically have to cancel out.
[19:27.00] It's also similar to a trick that we've been using on a client side hydration with create async, because we need to kind of run the function to get the reactive dependencies.
[19:37.00] But we don't actually want to run the promise again on the client.
[19:40.00] We want the, the, uh, um, server serialized data to just show up.
[19:47.00] So yeah, it's, it's, it's kind of interesting what goes into solving these problems, but then you remember the whole reason that you're solving this problem is because the architecture, they're using react server components.
[20:00.00] It's something that honestly, I don't really care about.
[20:03.00] So actually while very cool, that's actually doesn't actually have anything to do with, with anything that I am thinking about these days, but yeah, I know a long way to get around to get around to that.
[20:16.00] If, if you're interested in these kind of mechanics, there's, there's a lot of interesting little tricks you can do in the, in the, in the, in the frameworks, um, around the event queue, um, very powerful thing.
[20:28.00] Everyone should learn more about it.
[20:31.00] This is where I'm supposed to have a link to tell you where to learn about it.
[20:33.00] All I know is that, uh, a video that I haven't seen, apparently that, uh, Lydia Hall, um, from formerly from Vercel created about the, uh, event queue.
[20:44.00] So maybe someone could share that in chat.
[20:45.00] I heard that's a good, good source.
[20:47.00] Um, her work generally is very accurate.
[20:50.00] So, um, probably a good place to look at.
[20:52.00] Anyways, how's chat doing post messages, the fastest.
[21:04.00] Yes.
[21:05.00] Yeah.
[21:06.00] Sorry.
[21:07.00] I'm just catching up on chat.
[21:09.00] It's been like seven minutes.
[21:10.00] Sorry.
[21:11.00] You guys probably should have interrupted me.
[21:13.00] Can we avoid these set of meetings by calling abort before pre render?
[21:19.00] I don't know the timing of abort.
[21:23.00] If, uh, even if abort queues a micro task, it might be, the timing might be wrong.
[21:34.00] Yeah.
[21:35.00] That's, that's what I meant.
[21:36.00] Probably.
[21:37.00] Might've got her last name wrong.
[21:38.00] Is it Holly?
[21:39.00] Okay.
[21:40.00] Anyway.
[21:41.00] Oh, cache API.
[21:44.00] I've been talking about the use cache API.
[21:46.00] We actually talked about this on stream, uh, last time.
[21:48.00] Um, it's a very clever way of defining any function as cacheable, but the whole trick to it is it's a server function.
[21:55.00] Um, essentially.
[21:56.00] So it becomes its own entry point closes over the same variables.
[22:01.00] There's a whole bunch of stuff you can do about it.
[22:03.00] Just one of those funny kind of things is when you come to the realization, I was like, okay, maybe I should add use cache to solid or, you know, should Tanner put it in tan stack.
[22:10.00] And then you're like, actually you probably don't actually need, like the reason that API is attractive is because of server components.
[22:19.00] If you don't have server components, you don't really care.
[22:21.00] Um, so it's, it's kind of, yeah, it was, it was kind of interesting to be standing in a space where, you know, rightfully so a lot of people really excited about this stuff, but then on the other hand, you're kind of like, it's good to solve the problems you created.
[22:35.00] Right.
[22:36.00] So anyway, um, yeah, sorry, that was just a little tangent.
[22:48.00] Um, we should probably talk about actual stuff.
[22:54.00] Um, I mean, I can try and look it up.
[23:04.00] Um, I don't even know.
[23:06.00] What was it?
[23:07.00] Uh, task queue.
[23:09.00] Is that right?
[23:14.00] Here we go.
[23:16.00] This is probably the video I'm talking about.
[23:19.00] It's 12 minutes.
[23:22.00] So apparently, yeah, here we go.
[23:27.00] Let's just drop this in.
[23:32.00] Yeah.
[23:33.00] I mean, this, this, this is the, this is the one thing.
[23:36.00] Board control is really powerful because you can like do stuff.
[23:39.00] But if, if we could cancel promises in a generic way, like there was this interesting discussion we had when designing create resource.
[23:46.00] Cause we have an abort control friendly fetch primitive, but I didn't bring it into solid core.
[23:51.00] Cause I was like, I don't actually care.
[23:52.00] Like, okay.
[23:53.00] Like there's a certain perspective.
[23:55.00] Like once the promise is out there, like it's out there, like we can just ignore what happens when it comes back.
[24:01.00] Like the cancellation it's too late.
[24:02.00] You know, by the time we send the cancellation down the wire, the server has already hit the database.
[24:06.00] You know, like the whole thing is too late, but like, so I was like, what's the point of a board controller?
[24:13.00] If literally we have a race condition protection built into the primitive that calls it.
[24:18.00] But like if promises just had the ability to do this, um, natively, it'd be really interesting.
[24:25.00] On the other hand, would they be a promise?
[24:27.00] Right.
[24:28.00] The promise of a promise is that they like always resolve either.
[24:31.00] They like, I mean, to be fair, you could always just not call resolve, but when you design with promise based API, it's that like, they're going to succeed or not succeed.
[24:38.00] So one of the things is like by API design, something like a callback, um, isn't like guaranteed to call.
[24:46.00] It might call multiple times, might call once, might never call promises are designed in such a way that there's an expectation that you call resolve or reject.
[24:53.00] Like, don't get me wrong.
[24:54.00] Some people or some code will not call resolve or reject, but via API, you are guided to, to do that.
[25:01.00] If they were cancelable, I don't know if that like changes the expectation, I guess canceled ones reject.
[25:07.00] So I guess that's fair.
[25:08.00] Yeah.
[25:08.00] Yeah.
[25:08.00] I wish, maybe I wish they were just cancelable.
[25:10.00] That might've been easier.
[25:15.00] Yeah.
[25:20.00] Yeah.
[25:21.00] Yeah.
[25:22.00] It's, it's, it's.
[25:23.00] I dunno.
[25:24.00] Some people ask me why I'm so stubborn about suspense being built around promises.
[25:28.00] It's just like, it really aids people's like this, then that, you know, so to speak in terms of thinking in API design standpoint, to be fair, solid suspense could run completely off flipping signals.
[25:43.00] It's basically a counter, but I, there's something nice about, it's funny.
[26:00.00] Sometimes when you work on APIs, you can't like pinpoint it, but you can kind of like get a feel for like how things guide you in a reasonable, responsible way.
[26:13.00] I don't know.
[26:14.00] That's the best way I can put it.
[26:15.00] Okay.
[26:17.00] Um, yeah.
[26:18.00] So we're talking reactivity again.
[26:21.00] I know we talked a bunch about it over the summer, but let's kind of get back up to date or up to speed with what I, the hell I'm talking about.
[26:29.00] Cause a couple of years, a couple of weeks ago, um, I think it was like October 23rd.
[26:35.00] I released this article and I dunno, this article was relatively well received, but it's so it's such a juxtaposition.
[26:46.00] When I like look at the numbers, like if I, if I go, if I go here in my dashboard and we look at web components are not the future release September 26th.
[26:53.00] And we look at the 54,000 viewers and the hearts, and then you, you see this one here, which has literally 20 times less reach or ownership.
[27:04.00] It's, it, you know, it's a beautiful contrast because I can tell you out of these two articles, which one is way more important than the other one.
[27:14.00] And it's not the one about web components.
[27:16.00] I can't imagine anything about web components being that important.
[27:19.00] Um, so yeah, I, I, I, I, this, this, this, this article is one that I'm very proud of.
[27:33.00] And the work that we've been doing to get here is really important.
[27:38.00] I feel maybe some of the most important work that I've done in the last three or four years.
[27:42.00] years, but, um, I don't think anyone's going to really recognize that until, you know, it's going to, it's going to be a while.
[27:51.00] I imagine, but I want to talk about it today.
[27:55.00] Anyway, not just the article.
[27:57.00] I've actually been plowing ahead in this direction because it's different audience.
[28:15.00] People care about the web component topic because it was, it pressed a hot button, so to speak.
[28:24.00] speak this work, this whole article series is the culmination of work that we've been doing around the solid community for almost a decade.
[28:41.00] Um, and, you know, it, it, it, it's just, it's, it's one of those things like even like solid itself.
[28:53.00] I suspect that things will get more popular when other people adopt it rather than just on the sheer power of what we do ourselves.
[29:01.00] Not click baity enough yet.
[29:03.00] What are mutable singles?
[29:04.00] Yeah, exactly.
[29:05.00] What am I talking about?
[29:06.00] Right?
[29:07.00] I'm going to drop this article down here just in case anyone hasn't read it as of yet, but, you know, actually, you know what?
[29:13.00] Maybe I should tell Twitter that we're live.
[29:15.00] Actually, no, I'm streaming live on Twitter.
[29:17.00] So they, they should know.
[29:18.00] Yeah.
[29:19.00] This makes my life so much easier.
[29:21.00] Anyway, I should actually get Twitch going in the background to give me two secs.
[29:27.00] Cause Twitch is where.
[29:32.00] All right.
[29:33.00] Give me two seconds here.
[29:37.00] Yeah.
[29:38.00] This is a good time also remind people to, uh, like, and subscribe and comment and the whole thing as always helps a lot get more viewership, especially on important topics.
[29:56.00] Like what I want to talk about today.
[29:57.00] Cause let's, let's face it.
[30:00.00] Um, I don't know how this stuff gets, gets views otherwise.
[30:05.00] Um, okay.
[30:10.00] So what, what, what is, what are mutable sleep signals?
[30:15.00] I think the first thing I, I, I, I, I led with mutable signals because signals is a term that everyone's kind of associating with reactivity.
[30:26.00] But the reality is signals are immutable, like at their core signals are immutable.
[30:32.00] It was really funny because we've had this, this kind of immutable primitive for like over a decade.
[30:41.00] And I remember when the react team came in and they're all like mutation versus immutable.
[30:44.00] And it's like, no, no.
[30:45.00] No, no.
[30:46.00] A lot of people didn't realize this signals being immutable within their graph, basically follow the same FP principles that react has.
[30:56.00] Right.
[30:57.00] You could picture a world in which you built react using signals.
[31:01.00] You wouldn't do things fine grained, but you could picture that, you know, a react component is a computed or derived value.
[31:10.00] Um, it, in fact, I don't know if anyone's ever done, done this kind of experiment or play around.
[31:17.00] I, it was, I had an interesting conversation once with, uh, with Danny Ramoff kind of related, but it was like, if you, if you took a component that was.
[31:30.00] Basically react component.
[31:32.00] And then you put, um, I don't know if I actually have anything to show here, but like you could picture.
[31:39.00] If you, if you took, if you want to convert a react component into a solid component, usually all you'd have to do is just return a create memo and put the re all the content of the react component in it.
[31:51.00] Like inside the create memo, you can destructure.
[31:53.00] You can do literally every single reactism, early returns, all of that stuff.
[31:59.00] Um, but inside the memo.
[32:01.00] Right.
[32:02.00] Because, um, uh, uh, like inside here, this expression will always run again.
[32:18.00] So like if we had props or something, you know, and then we were like, okay, const, like pretend this is destructuring it in the component.
[32:28.00] You, you know, like you could basically.
[32:30.00] So basically.
[32:31.00] Go props and be like.
[32:33.00] Let's let's, let's, I'm just gonna make it count here.
[32:38.00] Okay.
[32:39.00] And then we're going to have.
[32:41.00] Return.
[32:42.00] Div.
[32:43.00] I'm not saying this is an efficient use of solid, but like render.
[32:53.00] Um, let's just make a little app here.
[32:59.00] Do, do, do, do, do, do.
[33:00.00] Do, do, do.
[33:01.00] And document.
[33:02.00] Dot.
[33:03.00] Get.
[33:04.00] Actually, this is, uh, where the kit element by ID.
[33:07.00] I'm trying to remember what the, what the idea is on this one.
[33:10.00] It might be app.
[33:11.00] It might be route.
[33:12.00] Can I get a new playground?
[33:14.00] Let's see what this is.
[33:16.00] App.
[33:17.00] Okay.
[33:18.00] It's app.
[33:19.00] All right.
[33:20.00] And then.
[33:23.00] Let's, let's, uh, let's build something in here for a second, just to kind of show what I wanted
[33:32.00] to show.
[33:33.00] Um, let's go.
[33:36.00] Const.
[33:37.00] Uh, count equals create signal.
[33:42.00] I'm sorry if I'm like spending way too much time on something really, really basic.
[33:47.00] But my point is, um, comp count.
[34:01.00] No, obviously I'm doing this, this part in solid syntax.
[34:08.00] But in equals, but then what is it?
[34:12.00] Um, on click equals.
[34:15.00] We don't need the event.
[34:19.00] I know I'm going to fix the signal thing in a second.
[34:24.00] See.
[34:25.00] Plus one.
[34:26.00] There's so much wrong with this, right?
[34:28.00] Count.
[34:29.00] Set count.
[34:30.00] Click.
[34:31.00] Okay.
[34:32.00] Render.
[34:33.00] Right.
[34:34.00] I have to actually import something from solid.
[34:36.00] Import.
[34:37.00] Create signal.
[34:38.00] Create memo.
[34:39.00] From solid.
[34:40.00] JS.
[34:41.00] And import.
[34:42.00] Render.
[34:43.00] From.
[34:44.00] Solid.
[34:44.00] Yeah.
[34:45.00] Okay.
[34:46.00] Okay.
[34:47.00] Like this is not good.
[34:50.00] I'm going to import something from solid.
[34:52.00] I'm going to import something from solid.
[34:53.00] Solid.
[34:54.00] I'm going to import.
[34:55.00] Solid.
[34:56.00] I'm going to import.
[34:57.00] Solid.
[34:58.00] I'm going to import.
[34:59.00] Solid.
[35:00.00] I'm going to import.
[35:01.00] Solid.
[35:02.00] I'm going to import.
[35:03.00] Solid.
[35:04.00] I'm going to import.
[35:05.00] Solid.
[35:06.00] Solid.
[35:07.00] Solid.
[35:08.00] Solid.
[35:09.00] Solid.
[35:10.00] Solid.
[35:11.00] not good but my point is like you at a really simplistic level like i mean we could we can
[35:21.32] probably even make this whole thing like if we really dislike calling count as as a function i
[35:31.16] could put this in a memo and then so on but what i'm getting at is like
[35:41.00] right i was going to show you early early returns right um if count bigger than five
[35:51.00] return div
[35:54.68] log um large count there we go
[36:04.84] like there we go like conceptually within the scope of reactivity
[36:12.84] signals are immutable
[36:17.16] oh we could do document body it's just my understanding is that the playground has a
[36:26.20] special element for it and then if you do body you actually wipe out the playground itself
[36:30.20] because like it also has other stuff in the document i don't know if it's completely
[36:35.08] isolated might be now
[36:35.96] funny yeah so what i'm getting at is
[36:43.16] it's always possible to to rerun things in a coarser manner right you can just
[36:56.20] merge them all together in some kind of expression
[36:58.44] what does add to the return um
[37:03.72] i mean it's just a function that gets the latest value i mean technically if i'm really
[37:12.20] doing it here we don't even need the create memo we could probably just
[37:16.04] we can just do this with a function actually
[37:21.56] you didn't miss anything yet dev i'm literally just talking that signals are immutable i think this
[37:27.08] this is a fact that kind of surprises people even though like it like there's a huge similarity
[37:34.52] like when you like look at things from far away or close between the reactive graph and say the
[37:40.68] component graph the difference is one generally operates on data and one operates on view i mean
[37:47.16] even when you think of server components and the way the react team views their server components as
[37:53.48] data essentially like their view data like essentially like it it's a part of the graph
[38:00.36] that returns view you know instead of data right when we work on solid or this is similar with tanner's
[38:10.12] mentality he's dealing with data primarily like that's what he's thinking about he's like how can i make
[38:14.36] my data most efficient and manage that so that my projections of said data are minimal react is like
[38:20.68] don't worry about that separation we're all just gonna bung it all together anyways so like who cares
[38:26.28] well there's reasons to care but that's what we're gonna talk about today right like at a conceptual
[38:34.60] level you know we've kind of like here's our like simple recreation of react
[38:44.36] all right so everyone's still with me so far i don't i don't think this is crazily complicated
[38:53.48] to be fair but i would say that one day um
[38:56.36] right a lot of research is modeling circuits real-time systems
[39:02.04] yeah i mean this article i talk a bit about how
[39:07.00] when i first saw svelte 3 and later the react pilot people challenged that these frameworks are fine-grained in
[39:12.68] the rendering and to be honest they share a lot of the same characteristics if we were to end the story
[39:16.12] with signals and drive primitives we've seen so far you could argue equivalents except for these systems
[39:21.24] not allowing the reactive to live outside the ui components right the the first thing you start
[39:25.96] seeing is like when you have this control to be able to do this kind of thing you have the means of
[39:33.72] making it as if you're making it as if you're making it portable right um rich harris just gave
[39:37.64] uh a talk at vconf and i think it was it was something like was it uh rich harris
[39:46.28] beat comp uh so five beyond components is what he called it and it's just funny uh you like once you
[39:57.56] land here this is the the revelation right because uh if i if i type in world beyond components
[40:05.08] um you're gonna see my talks in the last three years like this is
[40:10.20] this is basically the whole premise of what we've been doing with solid right right so like this is what
[40:21.88] fine-grained gives you but it's more than that it's more than granular updates right uh just on a
[40:30.20] subsurface because svelte 3 and the react compiler sort of have these granular updates it's actually very
[40:36.60] hard to observe um because of the granularity um the difference between something react written in solid
[40:46.04] or svelte 3 or sorry written in solid from svelte 3 or the react compiler because the only places in the
[40:53.72] code where you have access to write stuff in are essentially the side effects so you can only sneak
[41:02.52] a console log into a place where the framework does side effects and for that reason it's not observable
[41:10.28] the internals of the internals of the framework here even though in reality svelte 3 and the react compiler
[41:16.52] do more work so
[41:19.00] what is the difference what what is the key key difference
[41:26.68] right you i assume that in this code the div we created every time exactly right like the the reason
[41:37.00] we don't do this in solid right this is view actually did like if you look at this this is view
[41:42.28] view has a jsx form where they return the function like we just this is this is view if i put like
[41:48.92] right view is a vdom library where you put your state up here and then you put your template down here
[41:56.36] right
[42:02.68] right well that's what i'm getting at i i don't know if it's an interesting question because i
[42:09.64] worked on advanced compilers um when i was working at marco and in some ways it's not as advanced as
[42:16.04] the react compiler but in other ways it's further along this path because it was doing cross-module
[42:21.40] um analysis to the point that it understood exactly everything that was reactive in your whole application
[42:27.64] from a graph standpoint all the dependencies and was able to like this is more than what the svelte
[42:34.60] compiler does and it's doing something similar to react compiler but in an actually maybe more informed
[42:41.48] way react has the compilers a lot more complicated it's smarter around like certain typing type stuff
[42:46.76] whereas marco the syntax is so explicit the job's actually easier to have greater analysis and marco does
[42:53.96] not solve the problem that i'm going to talk about today they ended up moving to a runtime compile uh
[43:00.92] reactive system on top of their compiler kind of similar to what svelte's doing uh still better
[43:05.00] informed because of the cross-modular stuff which is a place that felt could go perhaps in the future
[43:10.12] if that's like so their intent but i don't think you're going to see a react compiler be able to produce
[43:19.56] what i'm going to show you today i don't know if it's like theoretically possible it might be i don't
[43:24.76] want to say never say never but but yes uh sorry this thing is this the problem like i don't want to
[43:32.92] right now this is just a div picture if this was actually heavy you don't want to do this work every
[43:37.32] time this is why solid this is why you don't do this in solid right
[43:44.60] you can write this in solid um in a in a in a in a different way right you you can
[43:51.56] you can just write this with like a show component or some other way like the the best way to write
[43:57.88] this component in solid would be like this um return div
[44:09.40] props props um props dot count
[44:13.72] bigger than five
[44:18.12] large count
[44:28.60] props account something like that this is this is this is pro this is the the more efficient
[44:38.52] way of writing when solid let's form the document um i guess this is still short enough that it fits
[44:43.88] in a one-liner um
[44:45.16] but uh it's funny this early returns thing is actually going to come up again maybe later when
[44:53.64] we talk about dominic and this week in javascript i don't know if i want to divert there
[44:56.92] right at this moment but this was also another topic
[45:03.32] separation ui and logic used to be a thing yeah it's it's a funny thing because
[45:08.76] there is a separation but there's such a huge overlap
[45:14.20] that both extremes are kind of terrible right like if you tried to if you try to overlap them too much
[45:24.84] arguably what react does um you end up getting sort of trapped by that fact a little bit it'd be
[45:35.56] these inefficiencies show up but if you try and keep them separate you can be more efficient but it gets
[45:40.68] a lot clunkier you there's a lot of duplication so like the key is recognizing that
[45:50.04] there is an overlap and i i tend to lean closer towards react because i think that overlap is like
[45:54.52] the 70 or 80 percent case but you have to leave the door open for the other 20.
[46:05.24] yeah yeah i just don't have a problem right um and disabling changed checking yeah it it's the thing is
[46:14.92] that's fine too but you you have to understand when you do this when you
[46:24.12] say always notify and you do stuff you're telling everyone downstream that it's their responsibility for
[46:31.56] diffing what actually has changed right now like if it's a fundamentally a stream conceptually where
[46:37.96] every every single element that comes down should be seen as a distinct thing then yes that makes a
[46:44.36] lot of sense but if if if you're just mutating data and you don't want to like you you're basically just
[46:54.92] pushing the work downstream if it's if it if this value should be viewed not as a stream but as an actual
[47:00.44] value um there's a better option is what i'm getting at
[47:13.48] yeah oh okay so you're talking about some kind of rendering consideration yeah because like what happens
[47:26.20] here now is this div only renders once now where before we weren't looking at it but like is this
[47:32.12] even worth looking at but you get you all know that if i click this you're only going to see like the
[47:37.56] even though this flashes it's not actually re-rendering it's literally just this text changing
[47:43.32] um anyway um
[47:45.56] whereas before you would have seen the whole div like unmount but that's that's that's something else
[47:53.16] let's let's continue on um
[47:54.60] all right so what do i yeah this is just showing that fundamental thing right if if you create an effect
[48:06.92] you know based on a signal if you go and update the thing without calling the setter
[48:14.44] the effect's not going to trigger because it doesn't listen deeply whereas if you set it with a new object
[48:22.84] it will it will run again essentially like this deep mutation is not
[48:27.32] like the reactive system the whole key to reactive system is that it knows
[48:31.96] when you set the value it looks for the set on the specific property the specific function whatever
[48:38.04] whatever it is it calls a function in the background and it reads with a function
[48:42.84] if you don't intercept the read or the write it breaks you have to you have to intercept both sides
[48:49.72] right so
[48:56.44] this i'm just kind of talking about the fact that like a reactive graft um is essentially this
[49:06.92] kind of immutable um i play stream but not in the pure sense of the stream but like stuff
[49:12.60] progresses through right in this example i have a start log and then i go you know whatever the
[49:18.84] previous value which you know let's say it's nothing plus whatever the current log is so start
[49:22.84] and then when the effect runs the first time it's going to log start and then when the effect logs you
[49:28.44] know um when we set this one the previous can get appended you know i what i'm trying to show here
[49:36.84] is that we have the ability to do what i call reducing operations um within
[49:45.00] um derived values essentially like uh computed is a function of its reactive inputs but it's also
[49:55.16] possible depending on the design the computed to also be a function of its previous um output so
[50:00.44] like this this is very common um in in uh in immutable setups because what it lets you do is you
[50:10.36] can look at the new inputs you can look at the previous value and then you can diff those to kind
[50:18.36] of decide you know compare them to kind of decide how to move forward you always have this previous
[50:25.16] value which is immutable fixed in time to to fall back on right
[50:31.80] so yeah uh let's look at this example a bit look i'm gonna we're gonna focus on example here for a second
[50:40.36] um you're still not sure if signals should be reduced is not possible miss updates especially
[50:47.40] after getting lazy but that's the thing signals are fundamentally different than streams because
[50:55.80] they aren't like they aren't streams like like because it doesn't matter they their only responsibility
[51:07.32] is they are a value conceptually like they're like it doesn't matter the journey they are the value
[51:14.60] which makes effects interesting because you you have the same question about effects should effects
[51:18.76] see every possible um perm permutation of the input values that come in right um it's it's interesting
[51:29.24] right like if you were trying to like log every change to a value um effects actually don't really
[51:35.32] help you there per se if you know within a given time frame you do multiple updates the whole idea
[51:44.04] of at least with signals is that they as they are a value conceptually not a stream and that the the goal
[51:51.48] of effects isn't to serve as the log which is funny because that's the example i used but as a as a way of
[52:00.76] doing external synchronization with the current state um it's funny because this ties into another
[52:06.04] conversation on twitter uh there's some view guy going like how do i like make an effect not run the
[52:10.44] first time in spelt and it's like that's a weird ask funnily enough but
[52:23.96] yeah i i mean reducing computations or whatever are similar to the scan operator it's you know the old
[52:30.52] joke where you could write redux in one line of code um using with a folder scan with rxjs like here's
[52:36.84] redux create memo is also redux in one line of code
[52:49.56] signals are a value that changes time stream is a time containing different values yeah
[52:55.00] exactly there's there's a fundamental difference here
[52:59.48] it's a huge optimization authentic right because like this is the whole purpose for a signal system
[53:04.68] it's not so that that you capture every single thing that has changed in the stream it's so that
[53:10.28] at the you can keep stuff at sync at the rate that the consumer can handle it right you have to make sure
[53:18.68] that if you're updating in third party system that could be including the dom something outside of the
[53:23.24] the reactive system you want to make sure that any snapshot that it's consistent that's the guarantee
[53:28.44] that we have we're not guaranteeing that we don't miss any intermediate states we're just guaranteeing
[53:37.64] that it's consistent
[53:47.88] yes i mean is as fine-grained as possible depends right like it depends on what's causing the effect
[53:56.76] not to run like
[53:58.20] like this part isn't so much where my definition of fine-grained falls like the goal of fine-grained
[54:11.00] is being able to apply changes in a granular fashion not
[54:17.08] the fact that it's lossy or not right like
[54:19.56] it's time is not really
[54:24.20] something that signals are worried about they don't have a concept of time they just are like
[54:30.28] am i consistent it's it's like it really is like an electric circuit
[54:36.20] like sort of specific mechanisms like buffers or whatever electric circuit only exists in the state that
[54:42.76] it's observed in right like you know when you talk about digital
[54:46.28] uh clock cycles and stuff like the circuit is like true
[54:51.16] physic physical reality doesn't mirror this but all models
[54:55.00] based on it um is that you can only really exist in one state at any given time
[55:12.68] yeah pre-recorded stream of course yeah
[55:18.36] user only cares about the next animation frame yeah for example yeah that's a great example right
[55:25.24] our concern is only as far as synchronizing with the the system that consumes it
[55:39.24] yeah our rxjs has a lot of things but like their behavior subjects generally aren't implemented like
[55:46.44] signals with the same guarantees they aren't as concerned with this consistency thing subjects are
[55:51.88] like signals in that they are a value they don't care i think they're lossy like they don't care about
[55:58.92] the stream as much but the biggest reason that signal implementations are thing is because of the
[56:04.44] the guarantees we have on propagation because signals are synchronous going to async is a whole other
[56:10.28] topic which we've covered and we'll we might do a little bit today if we have time but yeah
[56:19.40] if the signal falls in the forest and there's no effect observer nothing happens there we go thank
[56:23.16] you greg that's okay so
[56:26.76] okay let's
[56:30.84] let's let's let's kind of continue on i i made an example here where i i i wanted to show
[56:40.84] how we break apart from our immutable reality right because this is immutable
[56:45.96] not much different than react but what if we put signals and signals and effects and effects
[56:51.88] right the idea here is i there's a user object and the funny thing this is like completely what
[56:58.28] we used to do in the knockout days because you get some fresh data from the server and then you'd
[57:01.96] like create a signal for each property or something right this is before we had proxies and whatever
[57:06.20] which we'll get to but this is the same concept pretend now instead of just having our singular
[57:11.16] single signal we you know when we create a user they we we actually end up creating a signal for
[57:19.80] that user of that user which in turn has a signal for its name so here what we're doing is we're like
[57:26.20] creating a signal for a user right and we're making a new user object here and in the process of wrapping
[57:32.76] it we're also creating a signal for the name and then we have an effect that listens to the user
[57:38.44] gets the u out and then we have a nested effect which gets the name out so when this first runs
[57:44.92] it'll run console.log user user id and then it'll console.log name user id right um so user1 name john now
[57:55.96] if we set a new user kind of like the immutable approach you know when you just swap the whole
[58:02.76] user out maybe fresh data from the server we end up creating a new single signal for the name
[58:08.04] and putting it through and you're going to see both things log again it's going to log user2
[58:12.68] and now name jack right because it will trigger rerunning this thing which will console log it and
[58:19.16] console log this but but but if we just go in and change jack's name to janet by just setting the name
[58:26.44] we only need to rerun the internal effect it's only the nearest effect that runs so when we swap out user
[58:33.64] we swap out this whole block but when we swap out name we only need to run this thing and this is
[58:42.12] interesting because we've found a way of doing less work right
[58:48.44] yeah with map array i mean this is the the key this is basically the whole premise of like
[58:57.40] fine-grained rendering essentially but what i'm getting at here is
[59:05.48] this system is no longer immutable um because we're actually changing the user's name we're not
[59:12.92] replacing the whole user right originally we could have just swapped it out but for this system we're
[59:18.76] actually changed now changing the user's name if we didn't have the means to individually set the name
[59:25.40] this internal effect wouldn't do anything it would always rerun this right like
[59:30.68] we can we don't need to go this way we could keep it immutable if we wanted to right by not adding the
[59:36.36] nested signal this is what i was talking about earlier with react everything being a memo like
[59:40.36] picture now if we just created a user and created our effect and now when we set the user and then we
[59:47.96] update that user's name to janet we're swapping the whole thing all we have to do is get the user
[59:51.96] and diff the values and if the values are different or not console are the right thing so the first time
[59:59.96] we get the new user and we see that hey this user's id is not the same so we're going to actually console
[60:04.44] log the user id and then we go oh this name is not the same when we'll and we do john so the first
[60:11.40] time it runs it's brand new so it does both then we set user id to name jack and it does both and then
[60:17.24] the last time the id hasn't changed between these two so it doesn't run this it only runs the second one
[60:23.48] so this is react essentially right this is immutable change it has the exact same logs as before right
[60:33.40] except you did it without nesting signals and without nesting effects
[60:38.04] i'm always worried about memory leaks that's was an old problem it's one that's been solved
[60:46.28] larger than that because there's a reason um first of all biggest problem with these observer patterns
[60:53.96] is that they go back and forth right like the even though only one side needs a subscription we do the
[60:59.24] other side so that we can do the proper cleanup so they subscribe on both sides which means that if left
[61:04.04] alone unless both are released like lose reference they they will memory leak in theory but what we
[61:14.44] have going for us that's beneficial is that in modern reactive systems at least or it's why solid has that
[61:20.76] really annoying uh warning about this is created outside of a root blah blah blah you know the thing
[61:26.12] you know you know the warning essentially
[61:31.00] on the effect side when we create effect under an effect you kind of know like if this you we create
[61:37.48] this and then we create this one under so when this one reruns that's fine but when this one reruns
[61:42.04] you're creating a new effect like you're running all of this code so every time an effect reruns
[61:47.96] if it had any child effects we've released them the same way we release the dependencies
[61:52.76] so if we release this effect when this effect reruns or when it's released itself
[61:59.40] then this the this uh subscription to the to to the signal will be undone which means that half of the
[62:09.00] dependency is gone which means that the effect is free to dispose of itself and the signal is also
[62:17.96] free to dispose of itself if it ever loses reference so like the memory leak problem actually has not like
[62:24.84] i used to have memory leak problems in knockout a lot since moving to solid like the memory leak thing has
[62:29.56] just not been a thing
[62:30.84] i signia either has global signals mostly when you use it with react or they're tying into react's uh
[62:44.68] life cycle but given that the i'm not actually completely sure but this was the this was the innovation that
[62:51.08] surplus uh added to the front end this is what made fine grain rendering possible like with sjs um
[62:58.04] otherwise you'd have to depend on like component structures
[63:01.24] view didn't have this means before but they've been adding uh i forgot what it's called but they've added
[63:07.16] something with view 3 that has this kind of release svelte is based on this mechanism now too with svelte 5
[63:13.56] um but this has been the like since sjs back in our surplus i guess back in because sjs was created in
[63:21.32] 2012 i think surplus came around 2015 or 16 time period this mechanism has been around and we adopted it
[63:27.16] immediately in solid back in 2017. um
[63:39.00] well here's the thing it could be documented but like do you i don't know if you really
[63:44.44] want to do this all the time we'll get to this in a minute but i'll show why
[63:48.04] it it's it's fine like technically this is how the rendering works but like i think you'll find when
[63:57.80] you do your real life problems um like at a less scale you're not going to find yourself doing this
[64:03.24] all too often you might but let's let's continue on for a little bit okay so we get this the biggest
[64:09.88] difference is it's not that expensive but every time you do this change you have no choice but to run all
[64:17.24] of this whereas when you do granular changes um like this one here it is only this code that's run
[64:24.36] right this always runs everything
[64:27.40] given that dipping is fairly performant and that mapping over data especially deeply nested is cumbersome
[64:33.08] people generally have opted for the latter react is basically this what i just showed however
[64:36.76] diffing only gets more expensive as our data and work related to it increases once resigning to
[64:41.24] diffing it is unavoidable we lose information you can see that in the example when we set the name
[64:45.24] to janet in the first example we're telling the program to update the name to set janet in the second
[64:49.80] update we're setting a whole new user and the program needs to figure out what has changed everywhere
[64:55.16] the user is concerned consumed like obviously we're only doing the diff here in the single effect but
[64:58.92] the point is when you go this way when you're setting a whole new value or you say like we
[65:05.64] mutated name and it's the same value and you turned off the equality check we're pushing
[65:11.40] the the the work down the line
[65:13.24] right so
[65:18.28] this the whole point is this is why we we came up with stores right essentially using proxies because
[65:26.36] and uh view has a something views reactive is very similar and svelte recently has um their state
[65:33.88] object in the ruins actually are also proxy stores um we'll talk a bit more about trade-offs with those
[65:41.64] designs in a moment but the idea here is this is the thing that is hard for a compiler or react to do
[65:50.20] um which is essentially this idea that these are nested proxies and that
[65:58.68] um we can have our you know our code here like our double nested effects and we still have the means
[66:12.28] here to either replace the name or um update or replace the user let's say or um update the name uh
[66:23.80] this actually isn't
[66:25.40] it's funny i use this example but this is not actually how our stores
[66:31.88] work um i guess it's it's how our stores work today but it's it's this isn't so this is like a weird
[66:43.00] i mean these effects are different too there's like a this is like a weird pseudo place between
[66:48.52] solid 2.0 and solid 1.0 i'm hoping it's still illustrative but my my point with this example is that
[66:53.96] when you have proxies you have the potential to still replace the whole user and trigger both
[66:58.92] or just update the one thing and instead of going through all this wrapper extra stuff
[67:06.20] that we had here like this was the cumbersome part
[67:08.44] we essentially get a version that looks almost like on the on the creation side it's as simple as like
[67:20.44] the immutable version which made the creation simple and the update simple but made the like
[67:27.00] effect complicated right whereas this version the effect is easy but you had all this creation stuff
[67:36.36] the proxy version actually is the the best of both worlds you have the simple effect
[67:42.84] and you have the simple creation
[67:45.16] what's the pattern would create effect if there's more than one signal i'm not quite following the the
[67:54.44] the question like um
[67:57.40] it tracks all of them but so if you like in these examples if you had more than one signal here you
[68:04.76] would have to you know diff all the differences between all the signals and with my nested example
[68:13.08] you'd either have separate effects listening to each signal or parts of signals or you like or
[68:21.08] yeah it really depends on what we're rendering here um
[68:25.48] i'm not quite sure i understand the question
[68:30.60] yes yeah yeah i this is an old um fps conversation right uh like um it's it's a lot like if you know
[68:42.68] anything about game rendering the the biggest they definitely traditionally do like immutable changes
[68:49.16] where you like re-render the like the scene and the whole argument there was that fps is kind of
[68:54.04] um consistent you can predict it right regardless of what work you have to do the cost is the same
[69:02.04] so regardless the update you always get the same the same cost whereas when you have
[69:07.24] these granular systems it can go between the update doing basically zero work to the update doing all the
[69:14.12] work um so this is this was long used in like the game industry in terms of justifying like the mentality
[69:24.12] you know a lot of moving parts it's easier just to re-render the graph consistency there's there's
[69:27.96] lots of reasons to kind of take this perspective but on the other hand we know theoretically it's not the
[69:34.84] most um efficient way of doing things well
[69:43.32] i think there's still space here which is why we're talking about today i am
[69:49.88] like if we did it today i i like would you do it like view and svelte where their signals just
[69:55.56] become proxies kind of automatically like if you if you have a ref in view um not an explicitly shallow ref or
[70:03.40] use state and svelte they automatically become proxies as you get deeply nested
[70:07.00] um data we don't do that in solid so there's there's like interesting
[70:11.08] repercussions which i think we should continue looking at
[70:17.40] does the nesting actually do anything yes um in the create store example it it does because it's the
[70:32.04] same it's the same thing where is it where am i looking at um yeah because on this side it runs
[70:42.36] both because let's say we're setting a new object so that in this like i'm kind of leveraging the fact
[70:48.76] that we're using proxy access so user dot id here it's the dot id that's tracking technically so like
[70:56.76] when it saw the id change it reran the whole thing but here where yeah like this example is kind of
[71:03.24] hmm yeah i this example is bad and i'm glad that we're bringing it to
[71:10.92] to attention that it's bad but here by only updating the name like the name you're not hitting this you're
[71:19.56] you're hitting only user dot name which means that it's only running the inner effect
[71:23.16] generally speaking
[71:33.32] with stores you use a you either write to it in an event or you write to it in an effect you don't
[71:40.20] write the stores in a pure derived way because it breaks the graph i've covered this before
[71:46.52] you could write in this particular example you could um
[71:53.80] the benefit of the nesting is more apparent when you these have state created under them because you
[72:05.40] can put create signal inside the effect right so like pretend this effect had to create signal in it
[72:12.20] that was also read in here
[72:13.48] so like this is this is how svelte 5 works essentially with the component like
[72:23.08] because you can nest state in a in an effect graph essentially right components aren't really components
[72:30.20] they're like it's the decision points like the control flow that actually define things right
[72:35.00] this is how solid renders and this is how um like obviously in trivial cases we can pull this out
[72:41.00] but sometimes the closure between this scope and the underlying scope is actually relevant like you
[72:46.92] create state in here and then that state is right in here and then you don't want to
[72:51.88] like reset it unless the like the inner of the outer scope reruns
[72:59.64] yeah i i i was mostly just trying to show the the independent um updates
[73:04.36] right so what did i say here why does this matter picture if you had a list of users instead
[73:09.72] consider an immutable change yeah right if you've ever updated a list of users right
[73:15.08] you kind of map over a list and then you go
[73:22.60] find me the user with with the id so you go through and go if the user is not this id just
[73:27.48] return the existing user in the map otherwise copy the user and add the new name this is how
[73:31.88] you do an immutable change in like react or most things you have a list of users
[73:36.76] you go change the id with this name you return a new list with the user with the updated name right
[73:47.64] but with mutable change you could just find the user and assign the name right and if you think
[73:55.72] about the repercussions between these two operations in the scope it's a it's a huge difference because
[74:01.24] this one the framework or whatever gets a list an array a new array with all the same users except for
[74:10.84] one that has a name so when it goes and iterates over to diff it's going to be like okay i need to
[74:17.48] run the logic that does the array diffing and then it goes okay let's go through each one hasn't
[74:21.56] changed hasn't changed hasn't changed hasn't changed hasn't changed hasn't changed you know
[74:24.04] you know 200 times it finds the one that has changed and goes okay what's changed about me
[74:28.92] so then it goes through and it it needs to go okay has the id changed has the title changed has the thing
[74:35.80] oh the name has changed update that that's the process that you get with immutable change right
[74:40.84] even with the memoizing compiler or whatever you're doing you're essentially going to run through the
[74:46.28] whole list and then do a bunch of these really quick shallow checks and nested shallow checks and so
[74:50.60] on but with immutable change you literally go oh update the one signal with the name so instead of
[74:58.12] running anything you don't have to tell the list to update in this case you didn't actually update the
[75:03.96] list it's the same list reference it's the same user reference it's just like the one place in the dom
[75:09.56] where the name is it just goes ping update that you didn't have to do any of that right the one signal
[75:15.72] updates no list recreation no list diffing no row recreation no dom diffing by treating immutable
[75:21.48] reactivity as first class distance we get the authoring experience similar to immutable state
[75:24.92] with the capabilities that even the smartest compiler cannot achieve
[75:27.48] but we aren't here to talk about reactive stores exactly what does this have to do with derivations
[75:42.04] oh what's what's the uh argument for you set user refusing proxies anyway well big one for me is the
[75:53.40] loss of scope right i i'm still a big believer of unidirectional flow and like the the like i actually
[76:00.20] i i love that i have articles for all of these topics now let me see if i can open link in a new tab
[76:08.84] react i've written this article like twice actually to be fair i wrote it like in 2018 the first time
[76:14.28] uh two-way binding is a two-way street is a good one but the one i'm looking for here
[76:17.96] is thinking locally with signals this is a whole argument for basically saying that react has all
[76:23.00] the same benefit or sort of solid and signals have all the same benefit of uh of of uh something like
[76:30.84] react like it's not like suddenly like the world goes crazy it's it's just there's there's the classic
[76:36.68] example where you like go i have an object you pass to some function and then it's like can you say
[76:43.56] anything about that object afterwards when you pass to the function with this expectation of it being
[76:48.36] mutated so there's like this control that you get by by having a separate setter where you're saying
[76:55.00] like i'm explicitly letting it like even though solid has the it's like the first step there like
[77:01.40] when i create stores especially global stores and stuff i generally create actions right like i'll i'll
[77:07.72] i won't pass the setter straight down i'll actually like make a pattern like it'll it'll look something
[77:12.20] like you know something along the lines of like you would use it you'd use the store something like
[77:20.52] you know here's our store and then you'd be like increment decrement like this i usually keep the
[77:26.84] same thing right so create my store or whatever right like this is this is the pattern i usually
[77:34.28] use because i so i actually wrap the specific operation but if you look at it from a dom standpoint
[77:38.12] even like when you when you're passing stuff to a component on click on save you're actually at a
[77:46.92] component level defining the actions that you pass through because then you call the setter here
[77:52.60] right set set um store or whatever right so in in a sense
[77:57.48] to be fair if your reactivity was limited to your local scope which is something that svelte does
[78:06.04] to a certain degree it doesn't completely though i i did a whole stream about this i was really excited
[78:09.96] about svelte's ruins from the perspective of not letting reactivity just flow everywhere but then i
[78:16.04] found out from rich that they don't actually do that so i got really disappointed and decided that
[78:19.24] i didn't actually care about ruins that much after all but and i i i found problems and why they did it
[78:26.60] the way they did which means that it doesn't solve what i want to solve which means that you know it's
[78:30.28] it's it doesn't do what i need it to do but generally speaking there is incredible power to being able to
[78:38.12] control and say like no you don't get to update this you can
[78:43.72] and i there's a there's another reason
[78:50.36] there's another reason which i'm this this this is why i think these these things are are important
[79:00.92] because yeah drive values we know them are immutable right okay so yeah i want to talk about
[79:09.64] driving mutable things because i told you most frameworks have stores but not every framework has
[79:17.72] derived mutable um stuff their derivations generally are
[79:26.76] immutable even with drive state like don't get me wrong there's benefits to that um might look at
[79:31.80] that a bit later but generally speaking derivations are um immutable and it makes sense right we have
[79:41.24] a function that we runs and returns next like look like i've been using this if you've been noticing
[79:46.60] all throughout this whole series of articles state equals function of state and um
[79:55.72] it's because it like as at its core derivation is generally immutable like it's it's it you get the
[80:04.44] previous state to get the next state out it's it it's a function call when the inputs change they
[80:08.92] rerun you get the next value they serve a couple important roles react graph first they serve the
[80:12.28] memoization point they can save work on expensive or async calculations if we recognize the inputs haven't
[80:17.16] changed um and we can use the value multiple times without recalculating it secondly they act as
[80:22.04] a convergence of nodes and this is this is what i i was kind of hinting at earlier when we were talking
[80:26.60] about like react they are joins in the graph like generally speaking you have a bunch of different
[80:32.36] data points and then when you end up deriving stuff you're usually combining these values together
[80:39.32] right you you might go take a name and a format signal and then you get a formatted name
[80:46.28] these essentially act you know even into the dom to a certain degree you end up derived values generally
[80:53.64] are they sometimes they're just a transformation but quite often they're convergence you always
[80:59.16] start from from multi and you narrow it down
[81:05.64] there's no convergent nodes in react though is that true i i guess i guess it's not granular enough like
[81:14.84] you can't converge something when the whole thing is already like one thing i mean you could argue that um
[81:21.88] components are right because components take multiple props and aspects and bring them in
[81:29.56] yeah but from from an update cycle react doesn't ever diverge once a parent once a parent
[81:43.96] is like you are updating short of short cutting which is different than divergence you are literally
[81:51.48] updating everything below it you go this has changed everything below it needs to get blown away
[81:57.16] right so like it might diverge in ui aspect but at that point you do a change the whole thing is a single
[82:09.24] tree from from like a single push out from thing yes they can shortcut with memos but like you
[82:16.84] you're you're in it from that point you are doing everything below
[82:20.84] yeah components are totally convergent nodes well we already showed that right when i showed a react
[82:27.56] component is just a create memo return like it yeah it's if you kind of take that aspect um
[82:37.96] so i called them joins in a graph they tie multiple different sources together defining
[82:41.24] their relationship this is key to understanding updates but it also goes to why they find a number
[82:44.52] sources increasing dependency would come untangled oh this makes me really sad this is gone now i wish
[82:52.12] i'd taken a screenshot of it so seb um from the react core team uh he moved to blue sky um today or yesterday and he
[83:05.96] deleted all his tweets on his account except for one with the blue sky icon and it removed
[83:13.40] it removed the picture here because it was a embed from from seb's uh twitter which basically he he said he said um
[83:29.24] he's for those of you guys who don't know uh uh uh seb uh sebastian marco bacti i think his name is uh
[83:36.84] he's like the visionary behind react for like like after jordan walk kind of moved up stepped away from it
[83:42.92] for the last decade he's basically been the man so to speak like like there's multiple people on the team but he's basically like if
[83:51.88] and be fair facebook's a big company and they have all different things but if you want to as close as like
[83:57.56] myself to solid rich harris to svelte or um um
[84:03.64] avenue to view it's not dan abramoff despite popular belief it's actually seb and um he said something along the lines of the his problem with fine-grained reactivity
[84:17.32] yeah he's at for sale now yes exactly um uh
[84:20.68] um
[84:23.72] yeah i mean if i can get it back i will replace it with it but this is unfortunate because i i think i used
[84:32.28] their quotes in a number of my articles um i should have not used embeds um i did it so that it would like
[84:39.40] link through and i was thinking a little clever but like who's going to delete their twitter well
[84:43.40] danny brumoff i think did at 1.2 right um
[84:46.44] yeah but essentially he said that his problem with fine-grained reactivity was essentially the fact that
[84:56.12] by nature everything ends up converging anyways so like the any gains you get basically
[85:03.16] go to waste it's like basically pointless like everything just converges
[85:06.76] which makes a lot of sense with derived immutable data structures you only have joins you don't have
[85:13.08] forks as complexity scales you're destined to merge interestingly reactive stores don't have this
[85:18.84] property individual parts update independently so how do we apply this to derivations right
[85:32.04] okay so under staltz published an amazing article several years back where he linked together all
[85:38.04] the types of reactive interval printers honestly if i told you earlier in the stream that i like love
[85:42.12] his writing i'm just gonna throw this out here this is this is like one of those like
[85:48.52] articles of like it's just it's it's such a systematic way of thinking and approaching the problem
[85:58.20] he basically defines everything on the basis of like javascript is functions or functional programming
[86:03.88] is functions whatever whatever thing floats your boat right so he's like look at the base you have
[86:08.84] a value or object right and then you have a function which is you know x returns y and then he goes on
[86:14.60] and goes then you can have getters which is you know a more specific version where you're you know
[86:24.68] no input gets x right and similarly you can have a set setter where the input you know impacts things
[86:38.92] yeah i'm i'm i'm uh this has always been for me like i've associated with with with under because he's
[86:48.60] this is not the last this is not the first version of this he had done like most of it and then like
[86:54.84] he finally got the missing piece like this is a sequel to an article he'd written about two years earlier
[87:00.28] um but the idea is as he kept on layering on stuff getter setter which is these by the way this is the
[87:07.72] cornerstones of signals here right getter setter um getter getter so it's a getter that gets a getter and
[87:14.44] guess what you can have setter setters and i i think you can actually have getter setters to be
[87:18.52] fair um like there's a little bit more space in here but it's like a setter um that takes a setter
[87:26.52] essentially like so you can dynamically pass in the setter that will be used right whereas a getter
[87:32.44] getter is a getter that returns a getter um okay why am i going with this well because he started
[87:41.00] recognizing that like iterables are a type of getter getter and that promises are a type of setter setter
[87:49.56] right and observables are also a type of setter setter so he just kept on building it out and
[87:56.36] he's like an async iterables are actually you know iterables with promises and anyways he was using the
[88:04.20] shape of the api to actually define the characteristics of the type of solutions you could have as a way of
[88:11.48] sort of confirming with himself that the spit like that like he explored the whole space of the potential
[88:22.36] of you know these reactive potentially reactive operators
[88:26.84] right this is this is absolutely brilliant because he he managed to like
[88:36.20] kind of observe the shape of the pattern to to kind of understand like i'm sure there's other setter
[88:45.00] setters and other getter getters but he painted a whole picture on how these primitives are related
[88:53.24] to each other and he did it all by understanding their nature by the shape of their api um
[89:04.52] and i actually had a similar kind of experiment when i was working
[89:09.56] getter setter well that's exactly what i'm where i'm going to go to right now um i two years ago
[89:20.28] everyone knows how much i i care about derivation right but i was like i i i was like okay we're gonna
[89:29.08] start working on solid 2.0 right two just over two years ago maybe two and a half years ago and i
[89:34.68] started talking about characteristics of of you know things that i considered important i i basically at
[89:41.64] some point decided that we needed to kind of look at reconsider our our our primitives right and this
[89:50.84] was like a lot of like i was just saying what aspects of reactivity i thought is important like
[89:56.36] evaluate on pull like being push-pull you know this is high importance and i'm very confident in our
[90:03.96] solution right the high level direction different create computed writable memos so i first put out
[90:12.60] this proposal and this is based on old knockout um and view style writables and i was like no this
[90:18.52] isn't what i want to do i was like i was like because this whole approach is very similar to just having
[90:26.36] a memo which then kind of wrote back to the source signals i i what i realized is from a shape
[90:36.44] perspective i it this wasn't a two-way thing see old two-way binding frameworks had this way that you
[90:44.92] could like have a computed value that you could write to so that when you pulled the value it did the
[90:50.20] computation and when you wrote to it you wrote back to it and then transformed it from the you know what
[90:54.76] would be considered the transformed version back to the base version so it could get pulled again
[90:58.92] for example this full name thing is a classic example of this where the idea is you could make
[91:04.28] um a full name set full name and then what would happen is when you basically grab the full name you
[91:12.44] would get first last with a space in it and then when you set it it would split the full name you gave
[91:19.16] it by the space and then set the two signals under the hood this is how this worked in view and in
[91:24.76] knockout but i was like why bother with this when you could just wrap this whole create hypothetical
[91:30.84] writable thing could just be written with a memo that you know basically this you can easily see how you
[91:37.64] could just wrap this in your own function and do this you didn't need a special primitive to get this
[91:40.92] functionality
[91:41.56] right create writable is a getter or angular link single yeah angular very recently um added this
[91:52.20] uh ability that i was talking about here a couple years ago uh svelte has a linked single signal as
[91:57.08] well i believe um i don't know between svelte or angular i think i think i i saw a post in a discord
[92:05.40] where uh dominic was sharing it and the angular guys were like they both call them linked signals
[92:10.84] which makes me think that it was a conversation between those two um where the naming finally listed
[92:17.08] um oh you you ditched it okay good to know um because i think you didn't ditch it before
[92:27.72] influencing angular to go with it um what was interesting was um
[92:33.96] what i wanted was almost like a controlled component like i wanted something that would be mutable and
[92:41.88] then it would reset when the stuff updated and the reason for this is that one of the worst problems for
[92:48.36] synchronize like like i've written about this before in our in our um in and we've covered it on stream
[92:56.04] before but essentially how many times have people written a component and done something like
[93:02.44] this um name set name equals create signal props dot name create effect let's say forsake
[93:14.12] set name props dot name basically some way of keeping it in
[93:26.04] some way of keeping it in sync this is terrible from a reactivity standpoint react tells you not to do
[93:36.20] it for even themselves um they're like no you can actually set it synchronously you know it's actually
[93:42.76] better like in react it's actually better to just do this when it reruns the component in solid we
[93:48.52] actually like well use create computed it runs without triggering rendering but i'm trying to get rid of
[93:53.88] create computed the reason this is bad is because it the the name it breaks the graph the name doesn't
[94:02.76] know like doesn't know that it depends on props dot name like this is this could be empty and it'd actually
[94:09.88] still work my point is there's no connection between this source and and this name like this right could
[94:17.32] happen anywhere yeah i'm gonna call this crit effect it's easier for people to see it so like it means
[94:23.64] that when you have graph propagation it's it like stops there it doesn't realize you know like first
[94:30.12] of all this it basically triggers a whole nother reactive update by doing it this way like the the first
[94:35.64] change the props name like the props name was used somewhere else like in your div like if we had a div here
[94:43.48] that was like props dot name and then name like if we put both side by side there would be
[94:52.60] a short period of time where these names would not match remember consistency matters it's because we can't
[95:03.96] know that you basically broke the graph
[95:06.04] never like we this there there isn't a problem with using effects to write the state but using it as
[95:16.36] a synchronization mechanism is bad if you want to use an effect to write the state it's because you're
[95:21.24] reading from the dom you're doing like a like an animation or something it's not for this this is
[95:26.84] should never never never never never never never do this and the problem is there just isn't a good
[95:33.80] solution to solve this um and i was like i knew that from the shape
[95:39.88] i knew from the shape that i wanted it like this because in theory you can see that
[95:47.24] field depends on props dot field i didn't know how i was going to implement it
[95:50.68] but i knew that it is right like i i here's the example again right
[95:57.96] and then so i put it out there and then um milo came back and he was like
[96:07.32] uh we can just do this let me highlight this code so you can take a look at it really simple
[96:15.08] this isn't the full version with the previous values but you can see the point
[96:19.88] he made it computed which is a memo that creates a signal in it based on the function you pass it so
[96:29.08] you know props up whatever props dot name here or whatever so this signal will be set with props
[96:36.60] dot name right let's let's let's let's let's actually just make this the the thing crops writable
[96:45.48] props dot name okay let's look at this there we go so it runs this function that we pass to it
[96:55.24] and creates a signal with this value and that signal is returned to a memo which is here and
[97:01.88] then it returns our getter and our setter so what happens is this getter gets the computed gets the
[97:10.12] first element of the array which is the getter side and calls the getter so that's easy basically
[97:15.72] when you read from this name you're actually depending on both this signal and this memo right
[97:21.64] it's nested like our effect example and then on this side when you write the value it calls the
[97:26.28] computed so it depends on the read of the of the memo and then it calls the right of the signal so
[97:33.96] in essence what happens is the graph is not broken here because when props name changes anything that
[97:42.52] listens to name knows that it actually listens to both
[97:48.04] this memo which means it actually listens to props dot name kind of indirectly and then
[97:54.20] when you do a write it just updates the internal signal right but if this function triggers again
[98:02.28] it reruns and creates a new signal
[98:04.84] and this still gets notified and this write function gets updated
[98:14.76] it only returns a new signal when
[98:17.88] props dot name changes not when you set name
[98:23.88] right
[98:29.24] like i can think of more efficient ways to implement this but this is a very fundamental right because i told
[98:37.72] you a moment ago this is higher order it's just a getter getter and a getter setter
[98:43.80] right
[98:45.88] what do you got from me dev you trying to derail me with something
[98:54.44] what are we doing here
[98:57.88] also thanks for this
[99:03.32] also thanks for the sub what do we got here what do you got for me dev
[99:12.84] update it's now a third order single higher order lazy singles coming in clutch now
[99:16.52] a single for actual value coming from the server wrapped inside a lazy memo so that it only runs
[99:20.28] when it's red wrapped inside an async memo that holds to serialized payload from the server which
[99:23.48] is wrapped in a proxy
[99:24.52] i don't necessarily want to think about what that means but
[99:33.40] yes i i think there's a whole design space when you start considering the composition
[99:38.36] of of uh of signals
[99:42.04] what happened if it calls that name i didn't i don't don't get it okay if you call set name
[99:53.48] it's it's it's this memo is just returning the signal and then you're calling the setter on it
[99:59.24] the the the reason there's these array syntax is in solid create signal returns an array so this returns
[100:04.76] an array here so you're you're calling the memo like when you call the set it's just overwriting the
[100:13.24] signal inside here and because you accessing it here the second one it's re-triggering whatever is
[100:18.68] calling this here so you're just like you're you're basically just reading the create memo which goes
[100:24.12] nothing's changed whenever you call s like whenever you call set it basically goes re first it goes
[100:31.48] calling the memo nothing's changed call the set on it which then triggers this side the get
[100:38.28] you know wherever it's used and it goes calls the memo and goes oh nothing's changed and then
[100:43.56] gets zero and then reads this and gets the new value
[100:46.44] the reason we did the initial link was because dominic conflated with derives but it had problems
[101:01.16] let's see if we were in the problems we had okay interesting
[101:08.28] so like you start seeing that like there's a whole other dimension here um by following the shape
[101:20.20] i mean you can write it right now like this or a variation of this but
[101:26.12] yes the answer is yes and let me show you why because yeah so getter getter getter setter
[101:34.04] it occurred to me while writing the the previous version of this article about
[101:37.72] i i actually complain about uh let me see if i go here in the in the previous article that i wrote
[101:44.04] uh in the summer beginning of august i actually complain about the fact that
[101:48.04] the one inconsistency in react is that like this is don't do this remember this is the same thing i
[101:54.68] was showing before the create writable but basically over the process of writing this series um
[102:01.24] what i realized was that this is such a common thing that
[102:06.60] it's not much of a stretch to just make create signal work this way
[102:11.72] so the plan isn't actually to ship create writable it's just
[102:19.48] it's literally just that if don't if signal if you pass a function to signal
[102:29.64] now it's a drive signal because that's the that's that's the mentality here it's
[102:34.12] one of the weirdest things and i think i've pointed this out on a stream before is if you use react
[102:38.36] and you're so you have a function you know like so my comp right and you kind of go in here and you
[102:46.92] go const count count sorry count set count equals uh use state props dot count one cousin
[103:01.32] const double count equals use memo um
[103:14.20] props dot count times two and then we'll do two props dot count
[103:25.00] even though the component reruns so if the props count changes and the component reruns
[103:29.72] in react it will see that the memo has changed and re-evaluate it and get a new double count right
[103:38.76] but this doesn't reevaluate this is only the initial value the only hook that runs something top level
[103:47.80] that doesn't like invalidate it's not dependency array to be fair but it is it's it is odd you know what
[103:55.56] i mean like the only one that doesn't do it is use state like for something that always redoes all the work
[104:01.48] you know that goes okay we check and we rerun the whole component this is the one that doesn't update
[104:07.80] and essentially like
[104:16.28] i i did a little bit of work um a little bit of you know stuff i was playing around with
[104:26.36] i mean i'll i'll i'll probably load a playground up for that too i have the latest solid 2.0 reactivity
[104:34.36] stuff obviously the demo like i've got it here but essentially um
[104:40.68] what what i'm getting at here is it it occurred to me that we could
[104:48.12] like to have the code here let's go create signal we could you know detect if it's a function and
[104:56.60] create a memo in that case which adds a little bit of code but like what thing doesn't have create memo
[105:01.48] in it and what where i was getting at here is create memo itself
[105:05.24] can be set up so that when it reads
[105:11.00] it can if there's no dependencies for it like it doesn't track anything it's possible that's what this
[105:22.60] is doing this is just compiled down it you can basically delete the node and in the future just
[105:27.80] return the closed over value so you can actually release that memo if it's not necessary because
[105:32.84] the one problem with an api that takes a function is like how do you store function as signal well
[105:36.20] we have this already in solid if you've ever used solid and you store a function in it today you
[105:41.88] i guess i should turn typescript on to show you this you can go like you can make a signal with a
[105:49.56] function and go create signal and pass in a function okay doesn't really matter what the function is but
[105:57.48] when you try and go set function right and update that function you can't just if you just do this
[106:07.16] it's going to error at you because it's like because we have a function functional setter we saw it up here
[106:14.28] right count count plus c because we have a functional setter if you want to restore a function you have
[106:19.96] to set it you actually have to do that you have to pass in a fun you have to use the function form if
[106:24.76] you want to set a function and
[106:26.92] because of that is it it's actually more consistent if you had to also
[106:39.56] pass in a function to set a function um here so there is this like small edge case where you
[106:45.24] you want to store a function signal and it's not reactive so i've made it so that there's
[106:48.44] it releases in that case there's other benefits of memos releasing when they have no dependencies
[106:53.88] anyways but like essentially it's actually symmetrical so um and the the positive of this
[107:01.16] kind of approach is that there's no new important you know no new concept no no nothing you just
[107:06.44] i'm creating a signal is my signal uh where is it here uh yeah sorry is my signal based on a value
[107:18.44] or does it depend on something to dot right this is this is like this is you know it didn't even occur
[107:27.40] to me to make it like i i'd create writable but then once i realized that this is such a common thing
[107:32.92] why not just make it the thing like you're this the the problem with the create effect update loop
[107:41.64] this thing is people get here because they they know signals and then they they go like okay how do
[107:50.92] i possibly like make this update with this and they go for the signal api they don't know about create
[107:55.96] writable or create other thing so i was like what can we just shortcut this and just be like that is what a
[108:00.52] what a signal is anyway we're barely scratching the surface there's way cooler stuff this is the least
[108:07.08] interesting part of today um so
[108:10.36] what i'm getting at here is it's it's an interesting exercise when you follow the shape
[108:22.36] and but the truth is this is not a writeable derivative technically speaking this is still
[108:32.04] immutable this is still a signal i i we haven't actually solved the problem
[108:36.68] you have to differentiate the case because there's a difference conceptually between um
[108:48.76] creating a signal like from count like this let's say um and creating a signal like this right like
[109:01.32] there's a difference between one that initializes with that value and one that updates with that value
[109:13.16] okay so yeah funny i have so much on this topic like i i have like two more articles
[109:20.28] anyway let's keep on going
[109:23.16] so
[109:26.04] here here's the here's the thing in kind of a nutshell right signals stores memos this i love these graphs
[109:35.88] by the way this is how i do all my development like space planning like i use these for everything this
[109:41.64] is how i created solid in the first place um
[109:44.12] i think i showed that on a previous stream stream
[109:49.88] um
[109:53.48] yeah what was it what every framework could learn from react
[110:10.52] now that one doesn't have it doesn't have the same that's this is clearly
[110:16.84] not my most popular article okay
[110:21.56] uh
[110:39.96] yeah yeah this the whole article is about is about me recognizing
[110:45.88] basically on a quadrant graph that there was an open space that hadn't been explored
[110:52.28] anyway
[110:54.52] yes looking for some read from what i thought five years ago let's let's talk let's continue now but the
[111:02.84] thing is is clear like on immutable side on the source size you have signals and on the drive side you have memos or
[111:08.44] computers on the source side for um mutables you have stores but there's nothing on the drive side
[111:13.48] right so you know first couple things you could obviously
[111:18.12] pass values through right you can always drive a store from another store you know by putting getters
[111:25.40] in but like this changing the shape here is actually kind of awkward do you know what i mean
[111:30.52] you could use like a memo to like project an object that wraps getters over stores and kind of create a
[111:36.44] shape right
[111:37.48] but
[111:40.92] the kind of the fundamental problem here is
[111:45.80] these are all
[111:47.72] all derivations are based on like calling a single function so how do you possibly like emerges things
[111:54.44] how do you possibly
[111:55.64] like let things fork out if essentially you're calling a function and returning a value it's like
[112:05.16] by its very shape it's a merger
[112:07.88] right and i read this whole thing incremental computers from signia we talked about this a bit
[112:14.52] on stream but like signature is clearly built for react because like
[112:23.16] if you look at this really cool example which is as i said complicated and we covered this a bit on
[112:30.04] stream already um
[112:34.12] but they came up with something that's very similar to map array and solid
[112:37.88] where they you know if you could make it by hand by making this map function by using a computed
[112:46.20] and then basically handling diff like operation equals add replace remove handling diff operations to produce
[112:55.56] the next data and more diffs for the next thing down the line so if you pass the diff all the way through
[113:03.48] it lets you do stuff like
[113:05.00] map over a list of names and then
[113:09.40] you know for each one split and reverse the name like like basically reverse the letters
[113:15.40] and what they showed is that there's five items in the list and when you call and then
[113:19.64] it calls you you basically you have five right
[113:24.04] because it called the this map function callback five times now if we push a new name onto the list
[113:32.92] you can see that the results reverse the name but they only called it one more time
[113:38.92] because they were able to use this diffing logic to only apply the specific patches
[113:45.24] so this is pretty powerful
[113:49.72] right they add it they change the first person name to sunil again only one more run
[113:54.36] they pop something and guess what they realized they didn't actually have to uh
[113:59.88] map anything again so the map function doesn't call the list just gets shorter so this this is
[114:05.16] powerful stuff but what you notice about in this example is the source list
[114:14.36] is still um like they're using immer to do fine-grained updates essentially this is what they're using
[114:21.64] here but under the hood it's actually creating a new array every time this is a mutable change
[114:26.76] they're just doing a smart diff with it but the the problem is they're still cloning the array every
[114:32.84] time they're still doing all the work and while they're they're saving on the payout which is great
[114:39.00] they're not like this assumes that the array is not a store or proxy it just assumes that it's always
[114:47.00] going to be this big chunk of an array like
[114:49.24] and i mean there's nothing wrong with that per se but
[114:58.28] every single step of the derivation has to pass the diff along to benefit from it
[115:05.48] you pay the cost of the whole chain in some cases freshly different server there's no stable references
[115:09.88] some something needs a key the models too you know which is what react does immer doesn't so it was
[115:16.44] kind of obvious and what i ended up with is a silly meme but it's true sometimes like it's not hard
[115:26.36] to write code that would just update the store in an effect like we're trying so hard to derive it to
[115:33.40] not break the chain to keep things you know consistent you know for async considerations and all this
[115:37.72] but like compare this to get this you know whole thing versus literally just using a store and going
[115:47.48] create effect
[115:48.12] add the add the reverse name to the store like you basically in a two-liner accomplish
[115:57.72] all of this don't have to diff all the way down the line it's just the one element updates like we showed
[116:04.68] earlier where the one piece updates in the dom or whatever you said you saved like this whole
[116:08.92] thing writing all this custom code doing all this by doing the wrong thing
[116:13.00] right like everyone knows you shouldn't use effects
[116:22.20] but it's like the correct solution is so much harder
[116:28.44] so we like it's just like
[116:41.56] it was really frustrating because i i couldn't accept that this was the best we had especially
[116:49.16] because this is what react pushes you to react basically tells you that this is where this is the
[116:53.48] the best you have when you know that you can you kind of cheat it a little bit and just get past it so
[117:00.20] the the gist of it was i followed the shape
[117:05.00] right with a signal when you set you know you can you can basically update it to do
[117:17.00] when it's immutable like the proper way to update it to do is you set a new object but if you need the
[117:21.40] previous value you can pass it in and then you clone it and say now this was false now this is done
[117:26.36] this is how you update an immutable atom but with create memo you can also project you know add a new
[117:33.16] field onto it to do with priority for example and every time the priority changes it will you know
[117:38.04] return a new one this is how immutable changed and what i noticed was this function
[117:43.96] the memo function was the same as the setter function right so i was like why don't we do this with stores
[117:52.60] if stores do this then why don't we just make something that does this now as i said i've covered
[118:03.00] this a bit on stream before but the the key thing you have to understand is someone asked earlier why
[118:11.72] do you have set store right it's a proxy anyways it's kind of the same thinking here
[118:16.84] implementation today isn't leveraging the fact but like create writable we now know that the only
[118:24.36] thing that can update this projection is within the scope of the function that we pass into create
[118:28.68] projection so while there's implementation details that i haven't worked out completely
[118:33.48] on this side conceptually this is an api shape where we could have enough knowledge here of not
[118:39.72] or at least directing the graph in such a way that it wouldn't it won't break yet
[118:45.00] with mutations be able to granularly update the pieces right
[118:55.40] and similarly how i was showing earlier how you could have a drive signal right by passing a function
[119:01.80] why not have a drive store um like writable store like like this is to create writable this is the
[119:06.68] create writable stores scenario right um by doing this the same kind of thing right and this is the
[119:13.08] example where the prop forwards through and here's an example where the prof diffs against the current
[119:18.76] version we'll talk about diffing in a bit um because it still exists in this reality but the more
[119:25.80] important part here to understand is that like if we kind of follow the chain here by following the shape
[119:33.96] we have the potential of unlocking that fourth quadrant um and you've probably already done this before
[119:43.08] to be fair um we you've used projections every day um if you've used modern frameworks
[119:51.96] i i do admit that projections might not be the most obvious thing because like
[119:59.64] because their function still it's really weird to have them do all the same work every time like for
[120:07.00] example if you had to do with priority and listen to these three like when you update done
[120:13.08] you know a done gets update then it resets all the values maybe these haven't changed so like
[120:18.92] nothing gets notified but it does rerun this effect you are still converging at least at this point even if
[120:25.48] you come um diverge after like if all of these update downstream independently so this isn't amazing
[120:33.96] and honestly as this gets nested you're probably not going to just do this right um i use the trello
[120:40.44] demo that i showed before um as an example here where basically we use this as a way to apply
[120:47.88] fine-grained updates like from optimistic updates like one at a time and then when the fresh data comes
[120:54.44] from the server reconcile it diff it right i talked about the trello demo in a previous stream i'm not
[120:59.56] going to get too much in detail but instead of using effects this is a much more streamlined version of this
[121:07.96] but yeah i mean if you think about it the a for loop in a framework that passes an index is an example of
[121:17.96] a projection you have some data from rows that does not have an index on it per se like i guess
[121:25.40] technically speaking um the the array has an index on it but like if if in the in this example this is
[121:35.48] actually like a signal let's say like a single signal it's not fine-grained you're projecting
[121:40.84] it's not like a store you're actually project you can project the in you're projecting the index onto
[121:45.80] each row um
[121:47.80] similarly here we can use this as a way of projecting selected state you know the js framework benchmark we
[122:01.48] have create selector and solid you you know we can implement this using a projection basically the
[122:07.40] idea is you get a selected id and you assign it to an object and then essentially you toggle the object
[122:15.80] between undefined and and uh not and only the row single row will update i i showed this previously
[122:25.40] because i've been working on benchmarking it and while this is technically slightly slower than
[122:28.92] create selector when i benchmarked it it was so close that i don't think that we actually need
[122:33.00] create selector anymore it all can compress them down into the same thing right because now instead
[122:38.92] of like updating if you've done something like this in react you know like if you update the selected id
[122:44.84] row and you're checking us a row id and do it every single row you're gonna check in a thousand rows
[122:49.56] this will this check causes it only to flicker two things in the projection which only causes two rows
[122:57.08] to update why is it slower it uses a store the the thing is create selector was so hyper optimized for
[123:05.08] this one use case that it actually like that didn't even use the reactive system it like reversed onto the
[123:11.80] reactive system i i came up with like a completely custom way to do it instead of tracking dependencies it
[123:18.20] would actually um it would actually call the computers directly itself um it was a very very specific
[123:29.80] performance pack whereas this is a general solution so yeah i i would say that the slight difference you
[123:38.36] know um it's funny because the selecting benchmark is very harsh it's like six times x slow down so it's like
[123:42.84] it's and it's one of the quickest operations on the whole benchmark so it's like any variation is
[123:49.00] amplified so like it shows the test came out as like slightly slower um like maybe two milliseconds but
[123:57.56] that's at 16 times slow down um so like yeah it's it is a trade-off but it completely removed the need
[124:08.20] for a specialized hack um anyway the whole point of this is that
[124:17.00] i think we've always viewed mutability as like a bad thing
[124:22.76] but it's it it's it's actually a pillar of reactivity it's something that you can't really do
[124:32.68] with compilers or core screen like it doesn't work um and the bigger thing for me is this really
[124:41.40] we'll get into this in a second i'm now viewing things as mutable and immutable reactivity before
[124:47.32] everything was basically you know immutable reactivity or nested immutable reactivity i didn't
[124:52.20] view mutable as its own category but signals and stores are not the same thing neither are memos and
[124:58.20] projections so like even if we could could unify the api like even if we could like say oh all signals
[125:05.72] you know when they come off you can come stores i don't know that we should right like i got here by
[125:12.68] following the shape so different libraries have different shapes like obviously like if you're using
[125:18.20] ruins as felt you don't have the setter functions and if you're using view you don't have the dot value
[125:22.52] so like i actually got here specifically because the function shape of solid let me kind of do the
[125:29.96] same exercise that on under stalls did um you know so many years ago and like there's there's more to
[125:38.84] explore here but you know i i showed this on stream previously like um i've implemented a very basic
[125:47.88] version of this so like you know you know we can play with it and i've actually done a bunch of bug
[125:53.64] fixing right so let's um let's take a quick pause i want to see if people are awake because i have more
[126:02.92] more immutable stuff on it i want to dump on you guys here in a second because that was i wrote that a
[126:10.44] a couple weeks ago um as you can imagine
[126:35.56] you gotta love all the authentication these days um
[126:39.40] there there there is there's a lot more
[126:45.16] yeah i know this is a deep topic i should have warned people more like
[126:53.64] like this article this is probably the most cutting edge stuff and there has been exploration here in the
[127:02.04] past mob x state tree is one of the most like furthest in this zone i don't think they've quite
[127:10.84] gone in a certain direction because like react is what they were feeding into but there's a lot of
[127:15.88] pieces especially when we get into the details that um uh mob x immer like michelle westrit has
[127:26.68] honestly like shown the way we are lucky on that side maybe not on the framework rendering side
[127:32.60] i'm trying to bridge that gap but there's a lot of prior work here for the stuff that i want to talk about next
[127:38.36] funny how much when it's boiled down to me well that's the the that's the funny thing right like
[127:52.28] i think we all understand that reactivity is mutable right like even though the cells are immutable
[127:57.88] like the difference between immutable immutable stuff all comes down to the source of like that change
[128:05.24] right because if you think about it what makes reactive systems um mutable is if you have
[128:16.12] structures of mutable uh of these immutable atoms because once you form them to structures that can
[128:21.88] change and references that stay it's no longer immutable but like
[128:26.84] that's why you use these technologies in the first place so like
[128:33.72] it doesn't like if all we were doing was i mean maybe not like as i said signia looks like it was built
[128:42.12] for react essentially um they're trying to give react as much knowledge as possible to push the
[128:47.32] diffs down the line but if you build with a different thing that you think that you could
[128:51.80] get the mutability all the way down to the dom it completely changes your perspective on what's important
[128:57.64] and so on
[129:05.56] can we be in a flight again soon lovely
[129:07.72] yeah i'm not on the two-way data flow camp at all
[129:14.28] because ryan always changes streams i love that sarcasm
[129:20.60] okay okay so people are still alive out there i'm glad to hear that i'm sorry this is a is a lot
[129:27.56] um but hopefully some of you find this valuable um one thing that sucks about uh streaming to twitter
[129:35.88] right now is i can't actually see the accurate count of live viewers from the other platform they all get
[129:41.72] combined so like when i go into twitch i can see and our twitch numbers are down a bit but i can't tell my
[129:47.56] that's all my youtube numbers i guess i guess if i went to youtube i could see our live youtube
[129:51.00] youtube numbers it's a good time also for people to to subscribe or whatnot um another reminder um
[129:58.92] follow the channel hit like you know greatly greatly appreciated
[130:04.60] yeah yeah i we have much higher on youtube i think streaming to twitch acts or streaming to twitter hurt twitch
[130:13.00] more than the other ones but yeah uh twitter's like this like counter that just keeps on going up
[130:20.52] um all right
[130:24.28] yeah this ratio is not good enough we have 115 concurrent viewers and only 51 likes
[130:33.48] so that that's on youtube we have another 30 or so viewers on twitch and another i don't know how
[130:39.16] how many are on twitter right now live but let's let's get those numbers up
[130:42.44] oh two less people watching but we got four more likes i appreciate you thank you all right all right
[130:57.32] let's continue okay so
[131:09.64] let's we share this to the stream and we're going to talk about the next topic
[131:22.12] so the the the the first place that i went to when i started thinking more about this mutable reactivity
[131:28.84] was like
[131:29.16] array operations because in the everyone can picture how you update an object and it's all fine-grained
[131:38.60] it's it's like really easy to picture how like it
[131:46.36] it's the uh it's the uh it's the it's the uh like the two mvc uh sorry i'm trying to think how
[131:55.16] to phrase this like it's very easy to pretend picture how you can have a signal update one place
[131:59.08] in the dom and when you have objects and objects and stuff it's not hard to picture like you update
[132:03.40] the name you know in the user how it could you know update the one place but when you start dealing
[132:11.08] with arrays and structural stuff you start going okay well if i have granular the activity on my
[132:16.52] side can i do better than all these like diffs and map functions and stuff that you know we tend to to
[132:24.36] use right
[132:28.92] so i i started looking at array operators really basically and i was like interestingly enough
[132:39.40] like you can kind of split them between immutable and mutable operations and there's some new ones
[132:44.92] i'm not going to be aware of i don't know if you guys are aware with the width it's it's literally a
[132:48.92] shortcut way of assigning one index with an array and returning a clone probably the most um inoptimal
[132:55.56] operator ever but it exists um but yeah map flat flat map filter reduce slice um with two splice two things
[133:05.00] four each is technically not like either or but i'm going to put on the mutable side because four
[133:10.84] each gets you to like like it doesn't map it doesn't return a new array so you you know then obviously
[133:18.52] pop push shift unshift assigning it an index splice sort reverse it's interesting that now there's like
[133:24.92] two splice two sorted two reversed
[133:31.16] so i was just like okay
[133:34.44] and there's a couple things that you you kind of like realize right away when you're looking at this
[133:40.12] right um
[133:41.08] it's possible to clone any data and then mutate it to perform an immutable action essentially so in a sense
[133:52.20] um immutable actions are a superset immutable ones from a certain perspective because like
[133:56.28] if i wanted to add something in the middle of an array
[133:59.56] i could use you know i could probably find a way of like using reduce to do it but i could also just
[134:06.52] clone the array and then splice it in right
[134:09.72] but on the other hand reduce could also be used to implement every single immutable operation right you can
[134:20.44] not these ones necessarily but these ones right you can implement map or filter with reduce if you want
[134:25.16] to it isn't always the most optimal to to do it o to n operation but as a baseline you can't general
[134:31.96] all immutable operations are o to n but with varying costs the benefit immutable is that it can be
[134:37.08] o of one right in terms of like
[134:41.88] in terms of uh like big o you know efficiency but what does any of this have to do reactivity well
[134:48.92] someone in the in the solid discord asked like what was the best way to map or filter store
[134:54.36] and i i was like hmm i started like kind of wondering like does mutable reactivity actually change anything
[135:05.56] here right so let's do a little bit of exploration here if you'll stay with me but
[135:13.00] um i'm gonna start with map function because it's basically what all ui rendering is
[135:26.36] if you think about it ui equals a function of state it's it's a map function at its core
[135:30.20] um so or create memo or computed they're essentially map functions create projection is actually more like
[135:36.76] 4h just kind of a side note but mapping at its heart is immutable but we can map over mutable data
[135:43.88] one of the benefits of doing so is we can update it independently of of the map running if your data is
[135:48.76] immutable the only way you can update the value is to update the source and remap it right so
[135:53.80] this is kind of like classic example let's pretend you have like an array that you're going to double
[135:58.44] right you can map over it call your doubler function and then when you update the array later you'll clone
[136:05.88] it add this at the end and then run over it again this is this is just immutable 101
[136:18.12] one thing i will say is my preference is not create mutable as it is in solid today i'd rather
[136:24.52] our like explicit setter version of mutable be used um right now you have to use the produce function so
[136:32.12] it's not as convenient but i am not like the biggest benefit of solids to create mutable today is that it
[136:37.88] can like invisibly sneak its way into existing apis that aren't expecting to be observed but i feel like
[136:44.12] that's a special case it's it's a dangerous thing to just like put proxies into intercept stuff i think
[136:49.96] there's probably better patterns
[136:51.48] like it makes a lot of assumptions about how the library that you're sneaking it into handles their data
[137:00.92] um but in general yes mutate i mean all our stores technically are immutable even if i if they have
[137:07.64] like an immutable interface on the outside they do mutate the underlying data which is more efficient
[137:13.48] from update standpoint and in terms of notification notifying change right only the one thing needs to
[137:18.92] update but obviously like when you do immutable data i i made the same example reactive just for the case of
[137:25.72] like showing it right create signal create memo array map doubler and then i copied it and what i'm the
[137:32.36] reason i did this is i'm just trying to show that like i might write something like this but in my head
[137:37.64] i'm picturing picturing like a setter essentially um but fundamentally the same thing's happening right you
[137:44.52] create an array you map over it creating another array which gets stored here later on you clone that
[137:51.88] array which triggers this again which maps over creates another array and stores in right right
[137:56.60] whenever we we add a new item we clone the array with a new item we map over all the items of the
[138:00.76] array to produce another array this example allocates four arrays by the time we're done now conceptually
[138:05.48] we could remove one of these allocations by not cloning on right right like a lot of people when
[138:10.12] they're in their frameworks they'll do something like this they'll push you know and then like still
[138:16.68] tell it the trigger you know this is like the old svelte like push to the array and then assign the
[138:22.04] array kind of mentality or even in react people do this a little bit they'll like push and then set
[138:28.20] and react doesn't necessarily do equality checks um on simple stuff like generally speaking hooks actually
[138:38.68] got people people thinking about this more back in the class component days the referential equality
[138:43.96] wasn't really something that we talked about at all if you remember and it's largely because of the
[138:49.32] those dependency arrays but regardless people still do stuff like this so there we go we saved cloning one
[138:55.88] array and honestly if you remove the equality check with signals it's you could do the same thing right
[139:03.80] we could also remove an allocation by not mapping over the array again um essentially instead of you know calling
[139:10.76] array.map the second time we know we're only pushing an item at the end so we can push it and then we can
[139:15.80] do this it has us running the code differently though so like it doesn't work in our set array type example
[139:22.12] of reactivity but i wanted to kind of show like the mentality switch of going from something that's immutable to
[139:27.32] something that's immutable right and we can also avoid allocations here by only storing the final
[139:33.64] results my we could also just say that we only have a doubled array and that we create it by doubling the
[139:39.16] values and then when we push we double it like i'm just going from our baseline essentially of of like
[139:47.16] where we start when we think about like doing an immutable operation to to get a doubled array to like
[139:53.64] the immutable version which is in a sense a lot more efficient because it's only it's only creating
[139:59.80] a single array and it's only doing the one change um there's no more map function though
[140:06.76] this is the most optimal way probably to write this code but only if you care about final results if you
[140:13.08] need the array somewhere else then you need the intermediate um and the other thing you should note
[140:17.40] is there's there's no history there's no previous value we don't need it here but um you kind of
[140:25.32] need explicit knowledge at all points like if you the difference with this is if you called say like
[140:32.36] set array in two different event handlers the logic of how to handle the stuff is encoded into the graph
[140:39.80] where you know you could you could push something here or sorry add an item you could remove an item
[140:46.12] there's all these different operations here we've gotten very very specific where we know we're doing
[140:51.96] a push you know so like these are not equivalent
[140:57.72] i mean what do you mean proxy won't because i mean i'm proxies can be immutable
[141:14.92] i mean sorry i'm missing something here because we've literally been talking about proxies in terms
[141:19.24] of stores this whole time i'm just establishing a mutable change proxies can be immutable if proxies
[141:27.88] are immutable then we're not gaining anything though because nothing changes there's there's no value to
[141:33.08] the interception right like if proxy is immutable then its value doesn't change which means we're not
[141:39.16] tracking anything i don't think i quite understand okay um so anyways where is it going instead of
[141:50.60] describing the final word we'd look at we're describing the necessary changes to get that output
[141:53.48] right this is actually less declarative if you think about it right okay often you need to do
[141:58.76] intermediate value anyways it's applied to other computations because we need history provide
[142:02.28] information about what has changed right what i was kind of getting at is this like technically when
[142:08.52] you write it this way you literally can pass any operation here and you don't care it still works
[142:13.48] whereas if we were trying to do that um like with a completely mutable example let's say we're using
[142:22.20] create projection to project out our store this we'd have to have custom logic inside our projection to
[142:29.16] know what to do like say when the array length got longer we'd have to know to push on the new element
[142:33.88] like this example could handle our specific doubler case right we could set the array
[142:39.48] you know we could you know push on the one value and then trigger this projection which then
[142:47.08] would would check and say oh there's only one more value i need a process and this is perfectly fine
[142:54.44] grained it's basically the equivalent of what i was showing you know here with reactivity but
[143:01.48] if you weren't doing a push if you were doing a removal you'd need different logic here to handle
[143:09.24] the different cases right
[143:18.84] basically it'd be safe to say you basically need a diff to apply derived mutable updates
[143:23.16] so is this any different than being immutable right because like if you're going to bother
[143:27.48] like pushing a diff through then what are we doing
[143:41.64] i think the only difference is is that dipping has a potential stop here any additional changes
[143:47.80] or derivations that only need to apply to the relevant part of the data rather than the whole
[143:50.76] thing if only one index in our array updates we we don't need to notify things that depend on
[143:55.48] the other we forked the reactivity stream right so what i'm getting at is the one benefit here is
[144:00.28] after we handle the diff at this point or like the specific set of changes anything listening to
[144:06.44] doubled array could independently be notified essentially like it doesn't need the diff to transfer further down
[144:19.96] oh yeah yeah sorry that that's that's implied i i i i'm already already like that that's the solid 2.0 api
[144:29.72] essentially right i mean i guess you don't need a setter the the one reason that i was looking at a
[144:36.92] setter instead of immutable versus immutable store um is that um
[144:45.96] the untrackability i i you don't want the settable like there's still a value to having the set
[144:52.44] start as point of time if you had a settable proxy you could actually um split it up and like pass part
[145:00.84] of it down and you start getting the same classic immutable versus immutable problems on the setting
[145:08.92] side i think it's actually important to have a singular um function or singular entry point anyway
[145:16.04] um
[145:17.32] so i kind of keep them going templating is a map function right um basically jsx like when you look
[145:28.60] at a component it it's a map function you put data in and you get jsx out right um
[145:34.68] so i this kind of got me thinking about like control flow in ui frameworks right so it's weird in that
[145:47.80] in my perspective we have four different control flow components and most js frameworks don't most js
[145:55.24] frameworks have like one or like one with two modes um but solid itself ships with two and then uh solid
[146:04.04] primitives has a few others but like two of them are important for me i i pulled out my four my four
[146:09.48] graph again and you kind of see this right immutable versus mutable keyed versus non-keyed and kind of
[146:19.96] i'm gonna sorry zoom this a little bit less so we can get all in one page um
[146:25.80] in solid these are the names of the operation but i identified that for optimal operation
[146:32.76] there are four different types of map functions for ui
[146:50.36] yeah although there's a third dimension where it's immutable immutable the data inside the array
[146:56.04] um
[146:57.64] maybe i i i i actually talk about each of these as applied to mutable and immutable data and my
[147:10.28] assumption in that is that um because being immutable is being immutable there isn't actually
[147:17.96] that much difference like because it has to be immutable all the way down and then
[147:22.44] once you're mutable then like all bets are off so i'm not actually sure that's true
[147:27.96] yeah i mean i do talk about each of these methods if you try to apply the other one like if you
[147:36.52] are talking about something best for keyed immutable and you use mutable data i do talk about that in this
[147:41.88] explanation here but generally speaking these each one is kind of optimized for their space
[147:48.04] so i'm gonna i'm gonna go i'm gonna go clockwise around here starting from here and we'll we'll go
[147:53.80] through all four really briefly because i i think this is actually really relevant when even talking about
[147:59.40] how other javascript frameworks work because key by index is actually the default in almost
[148:05.88] every javascript framework um which is like you know react it looks like a map function with no key
[148:12.92] in svelte it looks like each with no key in view it's very similar and solid it looks like this index
[148:19.88] component here um and the the thing to understand with the key by index or non-keyed is essentially if
[148:29.48] you render some data and create some dom rows so these are these rows are the dom and this is like the
[148:35.64] data thing initially the data is associated with the row in the dom but then if we say shift so like
[148:42.76] remove the first item in the list what a non-keyed or key by indexed approach will do is it will
[148:49.88] remove the last element in the array like the last dom row and then it will shift up the data so the
[148:59.24] thing that was item two is now associated with the dom and item uh sort of thing that was item two which
[149:06.04] is i guess row the third row here ends up here this one ends up here essentially because you remove the
[149:12.84] first items you remove this item and then these just shift up and they get rid of the extra dom element
[149:19.56] um this is as i said the most common and basically every framework ships this as the default interestingly
[149:27.64] enough this is not the default in solid we don't usually tell people to use index but this is the
[149:34.44] probably the most common thing to do um in vdom frameworks they tend to iterate over the whole list
[149:39.80] running all callbacks and then match up index with the dom elements when applying the changes in reactive
[149:43.80] frameworks we tend to cache the map rows and update the row data at the index that has changed
[149:48.04] in solid particular it's clear what's going on here as the index is constant and the item is a signal
[149:52.20] this is kind of an interesting thing from our api you can see this that in solids you can actually see
[149:58.36] that the item is a signal that can change and the row is constant because if you think about it when you
[150:04.04] map over the function the first time or when you add a row you know that's the only time that callback
[150:09.80] function is called so this index can never change um in the dom see blue green green whether you add or
[150:18.20] remove rows it will always stay the same however the item associated with that row can change
[150:23.16] so that's a key even though it's kind of like backwards thinking of this compared to reacts
[150:28.84] approach that is effectively what happens when you key by index everyone following so far
[150:36.68] this is like what happens if you forget to put the key in your svelte or um react component
[150:42.52] with immutable data when dealing with immutable data the list is always updated on any change
[150:49.88] anyways which means this map function will always run on any change the entries at any updated row
[150:53.88] are new references this means the items that aren't changed versus the previous index don't
[150:58.28] need to be updated however something like our shift operation while not actually creating any new
[151:02.12] references moves the position of the array causing on all equality checks to fail moving items as a new
[151:07.40] as new items with this approach which makes it less optimal for these sorts of operations what i'm
[151:13.16] getting at here is like in solid um and technically i guess in react or whoever use it when you do this
[151:21.48] operation of shifting you actually have to go in and look and go oh i need to update all the data
[151:30.36] associated with this dom element now because before you know name was john now name is james before id was
[151:36.68] one and now id is two like basically when you shift it up like there are operations like changing in place
[151:43.64] where these aren't affected but say like a shift is a good example we actually end up updating all the rows
[151:54.20] with our immutable data because with immutable data even the the like if you want to change the name
[152:00.60] of a user um you need to clone the whole array which means that it will trigger this process
[152:07.48] one of the benefits here is that um
[152:11.64] you sometimes can save on paint like if there's a lot of static layout here or like css styles based on like
[152:20.68] row style this can cause less repaints because nothing moves in the dom just like specific data
[152:27.72] points update but sometimes it can also be like disorienting because i mean visually it will look
[152:36.60] to a certain degree like you just removed the first item um but from work standpoint like if something
[152:42.60] was expanded in the if something was expanded in the in this row let's pretend you had like this the
[152:48.68] details open when you moved it to this dom element you actually have to re-render the expanded part
[152:54.92] like actually create the dom elements again when you shifted the data up and actually remove this
[152:58.68] expanded part when this one isn't expanded as it shifts up um which kind of gets at uh the problem
[153:04.84] which i'll talk about in the next section but just something to be aware of why someone might
[153:09.00] want to use immutable data the other one would um and then would mutable data using index we don't need
[153:14.52] to recreate three if something nested updates right um so we don't always need to run the map function
[153:19.96] only array operations that would add and remove items would trigger it however in those cases since
[153:23.40] moving the items are seen as new it isn't particularly efficient way to do these type of mutable
[153:27.32] data yeah like because moving stuff around is always seen as new like basically the the the one
[153:35.24] place where this is fairly efficient is that like if the item hasn't moved you can just like skip these
[153:41.32] and just update the one row but with mutable you don't even trigger the whole array thing because if
[153:45.96] you're updating a name on a user it doesn't actually trigger the array process so the only operations
[153:50.92] that are left to do are like the moves so this is like generally just not a good
[153:57.32] thing for like mutable data um because it's it's basically it doesn't get any of the benefits
[154:03.16] and it's just um the few places that it actually triggers are it's less efficient
[154:10.28] um jopia likes create mutable specifically he didn't like the api shape of of sold stores but technically
[154:24.20] speaking our stores have always been mutable and we've always had them so yeah he just liked the
[154:30.92] idea of being able to mutate stuff everywhere and no amount of like as much as like i'm talking about
[154:37.48] these apis and talking about like like none of this changes my principles here i'm still not a big fan of
[154:45.64] being able to mutate everywhere so to speak
[154:47.40] yeah it's pizza pants well i haven't even got to what solid's doing yet right
[154:55.24] um but yeah so you kind of you kind of follow along so key takeaways with with key by index or non-keyed
[155:04.44] item data can change but index is constant best suited for immutable data as any change would cause
[155:09.72] re-execution anyways best suited if the row data doesn't move or is removed or if it can't
[155:16.44] establish an identity i.e a primitive value um i'll show an example why in a minute
[155:21.88] not recommended outside of suitable cases but sometimes can be performance boost by saving repaints
[155:33.96] on projections projections projections are a derived store essentially they're a mechanism for for doing
[155:44.20] derivations dynamically on nested fine-grained reactive data structures
[155:58.84] um anyways so explicitly keyed this is like when you had the key prop on your component does this now
[156:05.32] when we remove row zero row zero actually gets removed so in a sense these might shift up in the dom
[156:12.12] but the same data is associated with the same row so like if this is expanded and you remove this well
[156:17.72] this is still expanded like you didn't have to render any new dom elements you didn't have to change anything
[156:22.60] this this keeps the data with its row
[156:24.68] oh yeah we we literally just spent an hour with that article i i mean i we'll talk about it more
[156:36.44] throughout the stream but yeah i'm i'm the the the the key part about it is stores are our mutual reactivity
[156:44.52] is can be very efficient it gives the ability to kind of split the reactive graph again and with
[156:51.72] we're missing a way of doing it in a derived way which is what we've been working on
[156:55.96] slightly off topic as templates are a map function is it always necessary to convert data types to an array
[157:13.56] well no i mean like i mean i just mean like a map function in in general like in like input in thing out um
[157:24.36] not necessarily like an array map function i just mean a map callback function
[157:28.60] when working with mess that would be okay to make an error that you can use tom directly or does that break
[157:37.72] react rendering or deeper content
[157:44.04] no i mean you could definitely support those kind of data structures if it if it makes sense the
[157:50.92] biggest challenge is see what's nice about i order is what ties these things together like why i'm showing
[157:58.68] all these like i love using on our shift because it like it shows where things get messy is when you
[158:05.80] mess with the order of things um anyways keyed is the most is a recommended approach for most frameworks
[158:15.96] many have warnings in their docs or even development environments if you use a map without a key
[158:20.68] they'll be like you should be using a key everyone's seen that error in react the idea here is that the
[158:25.16] same row of data is always supposed to the same ui element that when you shift a row the first
[158:28.76] element is removed and the other stand changed the only like the key thing here is while we pretend
[158:35.08] ui is a function state the dom is stable itself with form state focus state web component state css
[158:40.20] transitions so using non-keyed approaches can have severely detrimental side effects if you're moving
[158:45.24] elements around you can read more about it here yeah i want to i want to this is a classic from the js
[158:51.96] framework benchmark author stefan cross but i'm going to link this one here for thing but he talks about
[159:00.60] this but he was showing that the difference between keyed and non-keyed is he's highlighted a green and
[159:06.76] then he deleted it but then he's showing that like if he highlighted here and then he added like replace
[159:13.16] the row like essentially because of like here's another one where he has an animation
[159:22.04] uh is it the animation yeah he's talking about this x see it grow he has a weird animation where it grows
[159:29.08] and then deletes and he's showing that it deletes and then it shrinks back down on the new element that
[159:37.32] wasn't being deleted see it switches to three midway where this one when it gets to the full size deletes
[159:46.04] gone right it's basically the the inherited element when you're non-keyed adopted the state of the dom
[159:55.24] and this is the biggest reason why everyone frowns on on non-keyed i give an example about the expansion
[160:04.76] stuff basically you should almost always avoid non-keyed approaches if um
[160:14.20] if you're like if there's like basically any kind of chance of preserving state in the dom
[160:21.32] um and usually it's better when you have things like models things that are like objects that
[160:26.60] you're mapping over like non-permitted values um anyways key showed it and you can do it like this
[160:35.00] and react and svelte you add this parentheses in solid there's a primitive which you can go like key by id
[160:42.76] does a similar thing but again you only use key where it makes sense where it establishes an identity
[160:51.64] for example if you had a list of strings and you had an input that this is react code here that you
[161:00.44] basically updated the list see i used with but essentially with whatever is currently on the input
[161:07.40] can you guys picture what would happen if you're if you're keyed by item and every time you type a
[161:13.40] character you set the the key again
[161:21.08] well this is this here is a good way of making janky ui is you can also make janky ui if you key
[161:26.44] by a primitive value and then have like an input that um that sets the key yeah the input re-renders every
[161:34.92] time so you're but it's an input so what happens when it re-renders every time well it um it loses focus
[161:42.12] right like it's possible in a simple case that like react will be able to tell that it's the same
[161:50.92] element or something but generally speaking this is a very good way of like like unmounting and
[161:57.32] mounting an input element and losing focus while you're typing like each character um
[162:02.44] i've i've had reports like this before it's it's pretty funny um
[162:05.88] this is a case where it doesn't expect make sense of the key if literally all you have is strings
[162:25.08] anyway if if all you have is strings and array it doesn't make sense to use a keyed thing this is
[162:32.60] like the one exception right anyways with as with non-keyed any change will lead to this routine
[162:38.44] running but with keys the number of map callbacks can reduce this my benefit might be more obvious
[162:43.64] with signals as moving a row only requires an index change if the row isn't listening yeah one of the
[162:48.60] things might be interesting here is if you notice in the solid version both the index and the item have
[162:54.52] the potential changing they're both signals unlike when the previous one right one benefit is that
[163:01.48] when references are completely lost like fresh data from the server this approach has a key to match it
[163:05.08] on so while row callback and signals all update if the server change also move rows around the also
[163:11.72] moved rows around the overall differences in values should be kept minimal yeah um yeah i it's it's
[163:19.64] interesting this this this is basically a shallow diff for all intense purposes so there is some value
[163:26.20] there um because it actually is diffing against something explicit with mutable data again nested updates
[163:33.40] don't require this routine to run um but for but for the you know so if you update like the name on a user then
[163:40.60] it's not going to run this but you know for for other changes um this is pretty good because you
[163:50.60] don't lose references like if the key is the same it stays with the dom you don't have to worry about
[163:55.00] re-rendering so this is a pretty good choice for mutable data um be mutable in nature the item with the same
[164:01.56] identity have the same references so the extra check only beneficial if the reference is somehow lost
[164:05.56] maybe fresh data from the server but for what for that to happen then all downstream reactivity needed
[164:11.00] to be replaced basically state you never want to be in so the one downside of using keyed for mutable data
[164:15.80] is in any situation in which the key would match but the reference wouldn't like you have a different object
[164:26.52] you would have had to recreate all the reactivity like nested reactivity for that object anyways
[164:31.40] so it's not really a place you want to be at basically what i'm saying is while this is better than
[164:35.96] non-keyed for mutable data if you think about it it doesn't even need an id because the references
[164:41.32] are stable you don't want to recreate all the nested signals essentially so you like it doesn't make sense
[164:47.56] to need a key
[164:55.40] reactive is immediately the old values don't make a current render sense how does mutating the values
[164:58.92] not cause issues with solid suspense well it's we use the same trick every signal is immutable so
[165:04.04] we do keep the previous value around we just do it at a hyper granular level
[165:09.00] so essentially instead of like they they're like look we have the old value of like and we have
[165:18.84] that previous value already anyway because every signal has you know the ability to have the previous
[165:24.28] value kind of passed passed in so we just instead of like having like the previous tree or whatever we
[165:32.92] just have the previous version of every single signal on the page so we actually fork the graph
[165:38.52] essentially and then merge it back together it's it's it's it's almost the exact same concept except
[165:45.24] it's done in a more granular level it's like done uh at a data level instead of like a component tree level
[165:53.40] anyway
[166:03.16] i i doing it with stores was a little bit more tricky
[166:08.12] um but it essentially is the same idea
[166:11.88] so takeaway item data and index can change best to do for immutable data as any change would cause re-execution
[166:20.60] anyways best suited for most non-permative situations so this is a good thing and to be
[166:25.24] fair now we're done most frameworks even svelte 5 i believe this is all they ship with solid has
[166:30.52] two more mapping functions first we have four which is our primary one this is our default one
[166:38.92] this is the one that we tell everyone to use essentially which is actually in the mutable keyed side
[166:46.04] um so i don't have anyone else to show for this because this to my knowledge doesn't exist in
[166:51.00] any other framework um it probably does by now but like like but in terms of the major frameworks they
[166:56.28] don't have this control flow it's what i started realizing is that mutable is mostly an optimization
[167:05.48] here this method works very similar to explicit keys but relies on the fact that nested reactivity keeps
[167:09.88] references and so you can see the indexes signal but the items is constant this approach so if you
[167:14.84] try and use forward immutable data it works very similar to having explicit keys any change will
[167:21.48] cause the item reference to no longer match so it recreates it the one gap here is if you lose references
[167:26.20] there's no explicit key to fall back on so this isn't great for data coming from the server
[167:31.00] and you know it will always recreate rows so like it's not amazing for immutable data because essentially
[167:41.72] it's it's less granular if it's mutable and you update a name you don't need to rerun the row here
[167:48.36] with immutable data it won't rerun the other rows but it'll rerun that row um which makes it worse
[167:55.80] than say keyed with signals because with keyed with signals you just pass the new data you don't rerun
[168:01.40] the the callback function you just pass in the new data so it'll only update those locations with four
[168:08.76] item is not a signal only index is a signal you start it this is actually kind of a funny
[168:16.28] comparison as you go around the table because we started with with index where index is a constant
[168:22.28] an item was a signal then we went to keyed where they're both signals and now we're at four which
[168:28.92] is the opposite where index a single item is not a signal like it's it's kind of funny as we move around
[168:35.08] um but yes this is not actually great um for for nested um immutable data because it actually would
[168:46.12] recreate the row essentially were you to set a new object completely
[168:51.24] um it's not terrible for simple things but it's it's not actually the most optimal approach um
[169:01.48] for for immutable data for mutable data the this is similar to keyed except it removes any um unnecessary
[169:11.08] signal reference it has the slimmest syntax so far so you don't have to worry about keys in in cases where
[169:15.96] the row doesn't depend on an index no rows or signals are needed to be updated on any change
[169:20.20] from the perspective of the map function yeah so think about it if you don't use the index
[169:24.84] here and this is why if you see solids map array we don't actually create these signals if you don't
[169:31.56] pass this like take a second argument we don't actually need to create any per row like signals
[169:39.24] for for for this operation the only thing that this does with with them with mutable data is just move
[169:47.24] the rows around and if you don't care about where it moves to we don't have to update any signals it's
[169:53.64] just a way of telling the dom like okay move this row here move this here all the updates per row are
[169:58.60] completely fine-grained they won't even trigger the map function this is part of what makes this so
[170:04.92] powerful right if if you always assume to mutable data you would never make this component but with
[170:11.64] mutable data this doesn't need to even run most of the time it's add remove move operations if you update
[170:21.24] anything else um you know nothing else needs to update and even with those move operations
[170:29.00] you don't even need to like update anything in here um which is super powerful
[170:36.68] so item data is constant but index can change best suited for mutable data changes as it removes
[170:43.08] unnecessary overhead best suited for non-permitted situations okay
[170:47.40] right and then it's the last one i originally wrote this a few years ago i was making a 3d demo
[170:57.08] um you guys might have seen this one before um and i came across this uh this problem
[171:10.84] anyone seen this demo before the idea is you could like bring up the number of blocks to the
[171:18.12] like the craziness and you could still have super good performance in some frameworks not in others
[171:24.84] and this was originally a demo to show off how good react concurrency was but then svelte came out
[171:29.80] and actually absolutely demolished it and then the solid version came out and absolutely demolished svelte
[171:35.72] and um but anyway yeah yeah like this is getting locked by my screen like my my screen fps like
[171:49.80] anyway
[171:58.20] the the key for this was i designed a new control flow component
[172:02.36] no this this was before million was created this was like this is the reason i joined twitter it's
[172:14.60] funny because i just signed on to like blue sky for the first time in like over a year just to check
[172:19.64] it out today but and but i was kind of dragging my feet twitter i dragged i didn't join twitter until
[172:25.40] like 2020 essentially like it was like december 2019 and it was because someone had built this
[172:32.92] demo and they're like show solids the fastest um so that's what i did and um
[172:40.20] yeah so this is this is this is a couple years before million
[172:50.84] yeah yeah yeah this is this is my this is this is my my screen sync rate that's keeping it uh at 120
[172:57.08] what i was getting at it's the you you know how like like like like it's odd that it's odd that like
[173:05.72] i think it's my screen unless we set like a maybe we set a limit in here somewhere i can't remember
[173:11.64] but yeah 98 is not going to be the same as like we don't drop off 120 until until we're at about 3500
[173:21.72] blocks so you'd think these would be way faster but even at 10 000 we're still at 40 fps here
[173:34.92] yeah vsync yeah exactly
[173:36.44] yeah i think svelte 5 would probably be a lot faster now yeah
[173:47.64] you might even want to look at rich's original implementation because he he he uh he did a really
[173:58.68] great one there um too which inspired this one to be fair um but yeah let me share this
[174:05.08] to be fair this isn't using the key part about this is this is not using solid this is using 3gas but
[174:15.72] this is not using solid 3 this is built like i call this is a joke this is not actual solid 3 this is like
[174:25.24] what i this is like what could we write in 70 lines right like this we actually there's actually a solid 3d library
[174:37.16] yeah
[174:40.04] so anyways it's not that important the key for me was this actually was where i first implemented the first
[174:55.08] repeat um operator which is different it's funny view has a repeat operator and knockout did too but
[175:01.72] it doesn't work like this um yeah um
[175:07.80] yeah i think that's one of the this is actually a really good point i think this was one of the
[175:16.28] cool things about like this the abstraction it was really easy for us to do these kind of experiments
[175:21.72] early days because they can in solid like unless you use lower case tags you're not actually using
[175:26.20] any dom apis so like you can build these abstractions even before we had the universal render really
[175:30.68] trivially because we had no real concept of components they're just like functions so like
[175:34.44] you could just like do whatever you want in the function and then like ta-da component you know so
[175:39.64] it made these demos work really easy
[175:41.48] oh i i i get i i'm funded by i'm very proud to say this i'm funded by uh sentry i and previously i
[175:52.84] worked at netlify both companies have helped me they actually hired me with the knowledge that i would be
[175:58.68] working on this stuff um full-time that was like the that was the plan so um
[176:06.60] yeah i've been one of the few people fortunate enough to get paid to work on what i work on
[176:11.64] anyway um how does repeat work
[176:27.00] it just puts a count in on the length and it kind of something occurred to me a while back that this
[176:33.48] is kind of the craziest thing about non-keyed with mutable data is it turns back into um basically the
[176:43.72] object like fine-grained thing i don't know if you'd want to do here but if you think about it this
[176:49.64] doesn't even take the list because it's not it's keyed by index it's not keyed by the list so it
[176:54.76] doesn't need anything there's no references it doesn't need the list and there and what it does
[177:02.12] is it returns a constant right so this just repeats the thing and for a lot of times people just don't
[177:09.40] even do this they just like they don't need the index because like it doesn't matter and they just repeat
[177:13.00] the item like a thousand times but the the key here is is is is how this works with immutable data
[177:23.96] this control flow it's like you could just replace index right but there's one there's one important
[177:27.88] difference without nested reactivity proxies the above looks more like this see how we're calling a
[177:32.76] function here for the list and the problem with this is whenever you update the list and it's immutable you
[177:39.08] have to literally update every single row right so while it's like convenient that like as you add
[177:44.20] the rows it just fills them in and then you remove them you know it just removes them and if you move
[177:50.20] them it just you know essentially moves the data around because this is the data it's whatever you access
[177:57.16] it doesn't need to even pass it through the problem is every change essentially causes every row to update
[178:02.52] so this is the worst possible probably immutable thing the difference with index is index does
[178:08.84] a diff for you essentially it's a basic diff but if we go all the way back here it passes you the
[178:16.12] specific items so it knows it only calls the rows where the item has actually changed so if you're doing
[178:21.64] immutable data it's like okay this row has changed i'm going to update just this row but and it over updates
[178:30.60] when you shift stuff but the difference with with with repeat is when you're doing immutable data it's like
[178:38.52] hitting all of it right but the opposite is true with mutable data it doesn't need the diff at all
[178:46.20] it doesn't need signal to be provided as a store already has one right the store is the signal the
[178:50.20] index is constant this differs from four where we need to project an index signal over the map so
[178:55.32] basically unless the length of the array changes the map function here doesn't need to do any work
[178:59.88] it isn't even responsible for moves it just handles additions and removals much more optimally than using
[179:04.44] index what i'm getting at here is if you think about it if you swap two items in the in the list
[179:09.56] only those two items will notify here
[179:13.72] right if you go replace zero with one
[179:19.88] then only those two rows need that like it only listens to those two rows it doesn't need to rerun the
[179:27.72] repeat it doesn't need to rerun any of the other rows if you you know if you update a nested item
[179:33.64] well then it's not even here something inside will update so it's like essentially
[179:38.68] because it's this is constant like the index doesn't change
[179:47.96] like if you add a row it's just going to go okay run one more of the map function
[179:51.24] if you remove a row it or remove two rows even if it's the first row it's just going to remove the
[179:57.72] last row and shift all of these you know conceivably up right because that's how non feed works but what's
[180:05.32] crazy about it is um you never actually need to pass a list to it so this this is a much more optimal
[180:15.16] approach because again it doesn't need to create any signals uh in the same way that
[180:20.12] this doesn't need to create any signals if you don't listen to the index
[180:24.28] right so it's it's it's interesting
[180:29.00] no i i mean netlify didn't use solid very much either i mean there's a few little things but it's
[180:44.60] i i i've been trying to you know at different points and i've been like trying to reconcile like
[180:48.92] why i get employed and i think i think the work that we're doing with solid the stuff that we cover
[180:54.92] on the streams is i guess important enough um for exploring the space of what's possible
[181:02.68] um the impact that solids had on the wider ecosystem
[181:11.24] is much larger than our adoption numbers would would would um um
[181:18.84] would show so to speak it's it's kind of a funny thing you know people keep on
[181:24.44] i've had a conversation people whereas on some reddit and something's like blah blah blah you know
[181:29.16] this blank you know solid no one uses blah blah blah but it's like
[181:33.56] or is solid what everyone uses they just don't know it anyway
[181:46.36] anyway my my point is
[181:56.12] index the constant items data isn't required best to permutable changes as an inefficient permutable
[182:00.52] data best suited if the row data doesn't move or is or is removed or if it can't establish the
[182:05.64] primitive not ramping outside a suitable case basically all the things about index are true
[182:09.56] this is just what like for mutable data much more optimal
[182:14.60] so concluding thoughts on this control so it might be awkward that there are four different methods
[182:23.00] this only increased by the fact that in terms of algorithmic uh efficiency favors mutable and non-keyed
[182:28.28] generally speaking like this is definitely the cheapest right um it's possible to combine all but
[182:35.96] repeat realistically into the same syntax with configuration but does that reduce cognitive
[182:41.00] overhead it also begs the question are all operations equally split like four different ways
[182:46.84] like if we have this graph you know where we have mutable versus mutable will we have four different
[182:52.36] versions of filter or reduce like will we like will we have one best for keying or like is it going
[183:03.16] to be something similar in the other operators it's interesting question
[183:07.08] yeah i i guess that's the thing
[183:17.32] signals in angular yeah um and many great people in the angular team um
[183:28.68] so again i hope you guys are still with me i'm gonna continue because i i started i started kind
[183:35.00] of looking at other stuff i was like well let's let's do reduce because reduce is like the mo the super
[183:39.88] operator so i i started the same way that i started with map where i'm like okay what if we you know have
[183:46.20] a sum accumulator right and then we take an array and i i started trying to do that same thing of where we
[183:53.80] we've reduced it from a immutable thing to immutable thing in a generic way and i just i just i i i'd stop
[184:01.40] almost immediately there's a huge problem with reduce and it's this accumulator because suddenly
[184:06.92] you like like obviously with some we can solve this specifically
[184:17.16] you know maybe if we could like have a way of reversing things like the problem like obviously
[184:22.60] with the push it's very easy to like just add the last number but you you start going like do things
[184:28.04] get weird if you like replace a number in the middle um so what do i say here what appears to me right
[184:35.96] away is that the final value you can't be calculated without running through the whole list the accumulator
[184:39.56] suggest orders matters too yeah like with map you could always run an individual thing but with reduce
[184:45.32] you kind of have to run everything like how do i like get the sum without having the previous sum like
[184:53.24] now specifically some offer actually being off to one could reverse or apply new ground change but this
[184:57.72] sort of reversal always isn't always possible and it smells that we don't have a generalizable solution
[185:02.60] we can't make the assumption about reduce in general at minimum we need to run all the rows after the
[185:07.00] change since the accumulator could affect downstream calculations but to do this we need to store the
[185:11.72] accumulator at each step which is fine for primitive values or mutable accumulators but not ones that are
[185:16.44] mutated right but what i'm saying here is like if you wanted to start at an arbitrary place like index
[185:22.44] like if the change is on the second index you don't need to run the first index if you just cache the
[185:28.92] value from that accumulator and then ran everything down again but this only works if the accumulator
[185:36.84] accumulator itself is immutable or like a primitive value which is immutable and if you store each
[185:42.76] row like each for you have n elements in array you have n stored accumulators
[186:00.04] yeah exactly this is what i'm getting at
[186:11.56] at some point it has to sum all the results yes exactly
[186:14.92] at minimum yeah okay so you have to stop and consider what you're optimizing for at this point
[186:30.60] is it the iteration of the callback or the final output the reason we care so much about mapping is
[186:40.36] because the mapping itself is expensive but here it isn't so clear if we're reducing to a single value
[186:44.44] the rendering at the end isn't going to be the expensive part but the calculation but more expensive
[186:48.92] but is that more expensive than holding all the sub results in memory and immutably cloning it
[186:57.64] yeah yeah yeah yeah yeah in some specifically we can solve this yeah i'm i'm just
[187:04.04] right right you we this is the thing where we start getting into categorizations here right
[187:12.04] but we also have to ask ourselves what we were actually saving
[187:20.92] yeah yeah yeah yeah exactly if you're always changing the first value then you're doing the
[187:25.72] most work because you have to reaccumulate all the way along and you're like at a certain point this
[187:30.76] like the general solution i'm thinking about is probably worse than just running it right this is always a risk
[187:39.24] i think we should look at categorizing solutions what makes map work pretty well
[187:46.76] and reduce not so well map is isolated one-to-one which means that granular changes are trivial
[187:51.16] reduce has no such guarantees now if we were mapping one-to-one then maybe it could but that
[187:56.12] is only a subset of potential operations right so i had a funny example here where i was like what if we
[188:01.16] did like a normalization step where you took the id of an object in array and you accumulated it
[188:07.80] right this is basically mapping an array to an object but each goes in its own lane right
[188:13.80] right and i basically showed like with our like our previous example where the map function we could
[188:18.28] basically do the exact same thing that i did last time where i called the method for each array member
[188:26.76] and then when i added the new one right so like this is immediately this would only be interesting if id
[188:33.64] changed as it's acting as the key here that's true if id doesn't change there's there's there's no real
[188:39.72] benefit to this whole thing
[188:41.00] otherwise nested updates could easily take care of that this is an example that wouldn't have the
[188:48.92] same overhead but also the work the accumulator is doing is hardly expensive still it could listen to
[188:53.96] array changes change against the existing keys and only assign and remove the necessary entries
[188:57.96] so that's two examples we have some and normalized where the general reduce operation
[189:02.20] would be less optimal than the specific solution and i suspect that this be true in most cases
[189:07.88] the accumulator api makes optimizations hard to generalize we've looked at this as one to one
[189:13.24] like with our map function or normalize and as many to one with our sum which leaves many to many
[189:20.20] the simplest many to many doesn't combine rows and happens to be another operator which is filter
[189:24.36] right i might be passing by this one too quick but what i'm trying to get at is
[189:28.20] it feels like there isn't something generalizable here because every time you like get into a certain
[189:35.88] category of problem you basically can find a more optimal solution in the general form
[189:41.40] and again what i'm trying to determine is what how much of the solution deserves in the reactivity
[189:52.92] space or just should we use typical mechanisms for optimizing it like memoizing calculations and stuff
[190:00.68] like should this have anything to do with reactivity that's the question i'm asking ourselves here right
[190:04.52] so i looked at filter the first automation can be filter returns the same results not to notify
[190:12.12] downstream mind you that's the most trivial case for map to handle what i mean is like a downstream map
[190:17.32] if it gets this uh a different array the first thing it's going to do is just go through all the
[190:21.08] elements and see that they're the same and pass on there's cost to that though but i'm just i'm just
[190:25.24] saying it's not the most expensive thing um another potential option would be to only call the callback
[190:33.80] functions impacted by reactive changes that would rerun it's interesting because generally we don't track
[190:39.16] callbacks in our control flow operators right so what i'm getting at is um if if i was like making like a
[190:46.36] generic reactive helper helper here i wouldn't actually track this usually it's like we we track the array
[190:53.16] like almost like an immutable sense but we don't actually track the like the sub statement um
[190:58.68] so does it make sense to like trigger stuff independently from this expression
[191:05.96] if the filter condition changes then all rows would need to re-execute so what i'm saying is if we
[191:12.84] change from calculating is odd versus is even i don't think we get any benefit like if if this tracking could
[191:19.80] change this logic from like not equal zero to equal zero do you know what i mean like if if if that was
[191:26.68] what was reactively being controlled we don't get any benefit to this tracking versus just like
[191:36.68] rerunning the whole array because you have to rerun it anyways if we so our only real value is if the
[191:44.76] individual value changes so let's say like someone changes
[191:51.96] you know three to four for example then in theory we could only run that one row right
[191:58.92] this is only consideration with nested mutable reactive data as immutable data would always
[192:05.08] replace the whole source anyways that's a good point um so yeah i mean this like
[192:12.76] if a change is found then we produced a new array and notify downstream if nothing changed then the
[192:18.76] optimization would be present the problem is we're still sending down the new array
[192:22.36] in the filter operation so like the next thing down the line isn't benefiting from this this is a
[192:28.44] little bit different than our map case because the map is kind of like our projection it's spreading
[192:34.84] it out it's kind of the end of the line this is probably with the intention of feeding into the next thing
[192:41.08] so like it starts asking this question with filter is the callback function ever the expensive part
[192:51.96] so you want to reduce downstream work interesting filter always returns results in a whole new
[192:58.44] array updating because it's always an add or remove operation so there is potential little to gain from
[193:03.96] optimizing filter when put against the overhead of bookkeeping yeah right like what i'm getting at here is like
[193:14.44] you could find ways to optimize it not notifying when like nothing's changed but as soon as you change
[193:19.40] you have to basically do an array operation downstream so where can we get benefit unless we can communicate
[193:28.76] in a diff right but that's really the only thing left if we can say like oh we only added something to the
[193:34.36] the end of the array rather than communicate the array that's like we're kind of doing full circle
[193:40.12] here on the signia thing right um like it feels like filter is basically innately
[193:48.84] um an immutable operation um if you know which elements change can't you untrack all the other
[194:03.48] elements when reducing
[194:04.44] i don't think that gains us anything like
[194:17.24] we track so that we can granularly only update the things that we need to update so
[194:22.04] it's important that we track would track everything perceptually in this case because we want to
[194:27.00] know if any value change so that we can make a decision on when to update the filter next
[194:33.96] um the tricky part is like what you want to be able to do is basically say no don't run these other
[194:41.80] like basically all you're doing here is saving running this callback in some cases
[194:46.84] so if you have a thousand rows maybe you can know only to run this callback on two rows instead
[194:51.16] of a thousand rows but the thing is if either of those results in the change you're still going to
[194:58.12] now pass in the 98 rows down the line which which then will you know be where the more expensive
[195:08.12] work is happening i guess oh the reduce operations are i'm way behind
[195:16.44] well i mean you maybe you could use generators but what i'm getting at here is like we're talking
[195:30.28] about basically yeah i mean if if the tie is fixed you could use like a kind of like generator
[195:41.56] way of a way of pulling it through so to speak um but i mean it's the diffs you want to communicate in
[195:48.92] right like regardless of the mechanism of the linking right generators are pull based signals are pull based
[195:56.04] right like i don't think this actually changes all of much right we need we like i i the key here is
[196:10.52] is there any place to optimize
[196:12.44] i'm not talking about optimization your compiling this is all runtime
[196:20.92] runtime mechanisms here that i'm talking about so that brings us back to our map function
[196:27.88] our map function already does a shall diff so we have to put that up against additionally supporting
[196:32.92] detecting changes and serialization like basically we're in this zone now where we could basically have
[196:37.88] the filter communicate what's changed but then we we need something on the other side to be able to
[196:43.00] accept it and one of the funniest things i did a test a while back and found it didn't make a
[196:46.92] meaningful difference in the js framework benchmark i think this might be worth spending time in the
[196:50.76] future again but to date i haven't seen this worthwhile in the same way that adding the second map
[196:55.96] function that solves rendering didn't make a meaningful difference i i i think i might have started this
[197:00.76] article by telling a story about how solid used to do our map function right in the dom like we didn't
[197:07.00] have four we had a compiled four component that literally like just updated the dom directly
[197:13.08] and when i changed it to using four i actually pulled it out and then there's a separate reconcile for the
[197:18.76] dom and because of the some of the implications that happened there and general overhead it didn't actually
[197:24.92] make a difference so it actually got faster after i made that change and then i tried doing stuff where
[197:32.04] i'd like put um like hints from when four ran and communicate it through so like a perfect example is
[197:40.84] like when you provide a new list right if no items in the list are shared you can do a much quicker thing
[197:49.64] you don't have to check all the ends of the list you just clear them and create them so i was thinking
[197:53.16] okay well if solids four component is doing a basic diff here it would know if none of the items changed
[197:58.76] so like in the benchmark when you have the replace rows benchmark we essentially could have the four
[198:03.40] communicate to the dom like hey you don't have to diff here like literally just wipe them out and replace
[198:07.64] them did that change and it didn't actually improve performance scores at all um which is kind of crazy like
[198:18.36] a simple shallow diff was not significantly more expensive um only the same things get mapped out
[198:26.92] but it's a matter of saving iterations a child reference check the only real savings here is
[198:29.96] if we could cache the map version between filter changes but that isn't something that feels like
[198:33.72] it can be done reasonably automatically maybe weak maps and off screen basically there's always
[198:37.48] going to be a cost to keeping things around unless we know we can keep it around we can make versions
[198:41.16] that do that today but but you know probably needs to be deliberate what am i saying topic is large
[198:45.72] interesting to see immutable reactivity lead to new ways types of optimization but i think at least as
[198:49.88] of today we are constantly be moving to an immutable immutable world where they're clear locations for
[198:54.84] optimizations and others that are more specific coming up with general tools here is going to take
[198:58.20] some time there's still a lot of optimization that comes on immutable reactivity even with immutable
[199:02.04] helpers because they don't need to run in as many places map is by far the most important one and
[199:06.04] handles i imagine the vast majority of cases but i feel there's a couple more big realizations to have
[199:10.20] here before we get this all released basically what i'm getting at here is like generally speaking
[199:20.28] the big benefits are not doing the rendering right so like virtualization type techniques are probably
[199:28.60] more powerful than these granular things like i was trying to think of this like map we need so we hit
[199:39.72] this i'm not sure if i will be making a optimized filter or reduce anytime soon because it seems like
[199:47.08] each of these operations can benefit from a specific type of pattern i suspect a lot of these can be
[199:55.00] built on top of create projection but it's to solve specific cases or specific operations
[200:01.96] i think this is the world that we kind of go into here where it's there's always the simple immutable
[200:10.92] way which is inefficient and then mutable updates are all specifically optimized based on the specific
[200:19.40] type of operation they do that's that's sort of where i'm landing here makes sense hopefully okay got
[200:27.72] another one
[200:30.60] you guys still with me i know this is heavy um
[200:40.92] because it's going away um it's gonna be replaced with something else
[200:47.56] this is the hardest problem with doing create async um i was hoping that
[200:54.76] we could get far enough like in the remix sort of sense of the word you know where you like provide
[201:02.28] an api that's like overly simplistic they get you like 90 away and like not worry about the rest until
[201:07.72] 2.0 came out when we'd actually fill in the missing pieces it's i've been trying to avoid adding back
[201:14.20] the things that i know are going away um
[201:18.52] so the that's not a great answer it's just
[201:24.28] it there's there's going to be something equivalent but
[201:34.04] like the 90% case should be using suspense
[201:36.28] maybe the 95% case should be using suspense
[201:41.64] so it's like the biggest reason you want to use loading is so that you can basically have a
[201:51.24] mechanism for showing like kind of like breaking out of transactions or transitions
[202:01.00] essentially it's like using deferred value in in react
[202:04.92] using it just to be like here's my app switch statement loading
[202:09.48] error data is not the way resources were ever intended to be used and i i apologize for the api
[202:15.88] that made people think that that's the way it should work
[202:17.80] like create resource
[202:22.04] added these properties for different reasons and then people were like oh it's react query and it's like no
[202:28.52] that's that's not really what it should be doing
[202:33.16] it's they i i we need to expose this capability but not for the reason that people think they
[202:39.00] they want it so it's just a bad api design um
[202:43.48] okay
[202:52.04] you you you can use create resource with a little bit of work i mean i i ended up forwarding latest
[202:59.16] it's arguable that i should just forward loading and bite the bullet for now
[203:02.44] yeah it's usually you visually useful to highlight stale data um when using
[203:13.88] transactions basically right
[203:22.76] like you can use suspense but suspense unmounts so the idea is you use transactions
[203:31.16] and then you can use is pending from the transaction to show the stale data but there's times that you
[203:39.32] you the the trick is with loading you can compare the you can basically flip it
[203:47.96] it around to escape out of it there are use cases for it
[203:52.52] yes exactly and i added latest back kind of begrudgingly because again it's also not going to be there in the same way
[204:05.00] um let's just add loading back
[204:06.20] it's easier and you guys will have to slightly refactor that with 2.0 i just i was trying to
[204:13.64] introduce a new base with with um create async but i can't implement the other pieces until i
[204:19.80] have the the reactive system that works properly um i mean i can show really quickly here uh what is it solid js
[204:31.80] signals
[204:34.52] yeah
[204:36.36] what i've done and i i hope i have tests showing this create async yeah okay is
[204:44.36] there's an is pending guard which is because every single signal can be async in in 2.0 instead of
[204:57.32] putting dot latest on everything there's an is pending guard that you can use to wrap any
[205:02.52] reactive expression it can obviously just
[205:04.76] grab create async here but it can also grab a memo or it can grab a function that has multiple memos
[205:12.12] or multiple create async calls in it so this is api wise the direction is going i can't do this in
[205:17.16] solid because it's uh 1.0 because the async isn't transitive similarly latest whether we continue calling it latest but it's the same idea
[205:25.80] we can actually use latest as a way of of kind of like getting out of like you know the posse undefined
[205:35.24] value right in in 2.0 create async because it'll be throwing will always from a types perspective be the
[205:42.84] return type it'll always be like even if it's like a promise of user coming in a will always be user non-nullable
[205:50.12] latest will give us a way of not suspending and getting user or undefined
[205:57.16] anyways i've implemented both actually i did that last week
[206:02.20] now in the 2.0 thing it's coming along quite nicely
[206:04.68] but we probably should just add the dot loading and for now it's it's really trivial for me to add it
[206:12.68] i just yeah i was hoping we'd get things along further anyways
[206:17.80] yeah
[206:21.00] yeah it i problem with mutable data structures is that they need to keep references which means they
[206:28.36] must be mutated but it means that they have their own they have to own anything passed into them
[206:32.04] making it difficult for them to share in basic cases this is fine but if you build stores over
[206:36.04] shared sources like cache etc that can be mutated in unexpected ways all it takes is a nested write maybe
[206:41.00] intended to replace but instead merges and suddenly you have two identical entries in a list when you're
[206:45.72] just trying to swap positions a single store doesn't hit these sort of issues typically because
[206:49.88] we keep a weak map of objects in their proxies so they can keep store nodes in multiple locations with
[206:54.60] no penalty a change in one location notifies notifies changes at all so clearly there's some powerful
[207:00.20] characteristics found here that exceed immutable data stores but can we fix these issues while preserving
[207:05.16] them so i don't know have any of you used stores and solid and like had some weird stuff happen i get
[207:12.36] bugs occasionally where people like are surprised that it mutates the objects that they pass into it
[207:17.56] like they'll initialize a store with some data update the store update their data separately and then
[207:24.68] be like what's going on is that anyone here i think it's an important aspect of this topic
[207:33.00] i i don't think everyone's has hit this issue
[207:40.52] but yeah i just want to throw it out there to chat in case someone out there has at least hit this issue
[207:52.76] you sort arrays which mutates in place i mean
[207:56.36] if you did that in a produce function it would be fine but yes people can hold the thing so there's
[208:05.00] an interesting choice to to go here right so to me this starts with to ensure we don't override
[208:11.00] source data we need to deep clone everything stores are given that's pretty expensive i.e that what is
[208:15.96] initialized and everything being set however this means equality checks won't work in the future
[208:20.20] with its source we can't tell if references have changed because even store internals no longer
[208:24.28] reference it stores have to clone and proxy
[208:27.08] so that's an interesting one our clone should be structured but we can't just use structured clone
[208:35.00] it needs to respect or stop at nested proxies since we don't want to clone those a setter might
[208:39.88] only work on a small part of the store but we want to keep references for all this means we need a
[208:43.88] custom clone mechanism so this is a big ask um but i'm thinking about it because
[208:51.00] there seems to be this constant concern with stores that that like it's mutating your data
[208:57.40] cloning returns the first point has a lot of consequences when does it not matter fresh server
[209:05.40] data doesn't matter as no shared references between the store and the new input is possible but otherwise we
[209:10.04] can't assume something set is the same as its source you can't use a store as a previous state in an
[209:14.52] immutable structured diff for example right if you've ever tried to use like there's an old redux example
[209:21.88] where it's like undo like time travel i had to come up with a kind of like way of producing snapshots myself
[209:29.08] and cloning it to make those kind of demos work because generally speaking we mutate the past with
[209:35.72] a store so like the first it obviously with immutable change these like redux and stuff will always create
[209:42.52] new objects so generally like it doesn't it's not a huge problem but if you start if it tries to go back
[209:49.48] to references it had in the past we've now messed with them
[209:56.36] we'll update properties on the object that we have but when you add a new object later like something
[210:03.16] that's not already in the store it then takes over that object too so even if you start the store with
[210:08.92] like something fresh and clean and you start setting those objects from other locations if it's not just an
[210:15.00] update of specific properties if it's getting a whole new reference the store will start will keep
[210:19.16] that reference and forever more as you update it will mutate that reference that's just how it works
[210:24.84] i think the first understanding though is as i said if you clone
[210:31.48] always you no longer have referential equality checks so you can't do immutable diffs
[210:37.24] which is something we do with reconcile is one of the options it's
[210:42.28] so this this kind of suggests that if we went down this path where we're cloning
[210:48.20] we'd actually need two different types of operations
[210:51.16] for for like diffing right one for diffing fresh data from the server and one for managing immutable
[210:58.36] diffs like redux like basically there's two different types of diffs there's one that
[211:02.84] is like reconcile that kind of merges and there's one that takes the previous state
[211:09.48] and takes the new state diffs it and then applies those patches into a clone
[211:14.60] you guys get what the fundamental problem is if you don't clone
[211:22.92] you mutate it like so you it's not safe anymore from like you have to own it and if you clone it you
[211:31.72] can't do like a traditional immutable diff you can't like all the references are lost
[211:37.00] right i should drop this into chat if i haven't yet right
[211:47.48] on the immutable side i could picture uh you know like an apply diff store next value current basically
[211:51.56] you need three inputs i memo is the secret here because a memo has the previous so you could always
[211:56.68] take the new value and the previous value and diff it and have the memo return it so you can basically
[212:02.12] like come up with a way of like creating a set of patches and then apply the patches like in a projection
[212:08.28] right and i what i point out right away is this is not that different than doing something with immer
[212:17.16] but i think having the key argument is still important so it might be worth implementing
[212:20.76] ourselves but like what is interesting is we could just say like okay if you want to do immutable
[212:26.60] discs like redux style you should just go grab immer i i don't know if you guys have all have seen this
[212:33.80] but like immer patches they have the ability to what is it produce with patches and it even has the inverse
[212:46.84] patches which is genius which is a reversal of the patches you can basically do a mutation on a store
[212:54.28] like figure out what it is and then get a list of operations and then apply those operations they
[213:03.64] have like another apply patches so what you could perceptually do see apply patches what you could
[213:09.96] perceptually do is get
[213:11.56] you don't need to produce with patches to be fair probably um
[213:18.84] i'm trying to think about that you can get immer to do the diff for you to like not from this like
[213:28.04] because you already have two objects you can have immer to take the old the object the new object do the
[213:32.76] diff for you and then take the patches and apply them directly to the the store is essentially what i'm
[213:40.52] getting at
[213:40.92] that's the one operation the other operation
[213:45.40] is reconcile i think this one still exists because um
[213:51.16] there's still value in having something that's saying i got arbitrary data morphed the store into that
[213:59.48] shape right you don't have a past you don't like it's not like like if you're getting fresh data from the
[214:05.00] server immutable diffs without keys aren't going to give you anything
[214:09.56] right
[214:11.72] yeah the inverse patches is genius i a moment ago when we were looking at reduce we're like oh but we can't
[214:18.52] reverse it this this this this is this is very very cool um because you can basically collect a list of
[214:29.08] patches and then and their inverse and then apply them and then maybe keep on collecting the inverse
[214:35.32] you know and then go back to any step through applying backwards but what i'm getting at is i think
[214:43.80] that immutable diff might belong on the outside of stuff i think there's still the more basic like
[214:54.44] i get fresh data from the server nothing matches i need to basically morph this into that data
[215:01.40] so i i want to
[215:09.24] i want to talk a bit about this because there there is something else we have to think about if
[215:13.24] we go the cloning way what do i say here operation we're going to do key can help but not hijacking
[215:19.40] anything but without reference equality shortcutting with the store owning its own sources i see no
[215:22.84] reason why you want to attempt to keep most of works as possible yeah so the idea is right now
[215:26.44] reconcile and solid has a merge option this would basically be merge always true because you couldn't
[215:32.68] do a referential check basically merge would be set reconcile would only work in merge mode with a key
[215:37.96] and if you wanted a non-merge mode you'd have to you do a separate kind of diff thing like i talked
[215:43.56] about there is this diff thing is attractive don't get me wrong perfect examples you're on the server
[215:48.68] produce the diff send it over the wire and have the projection apply the diff so you can you can do the
[215:55.08] diff across the wire and like in a sense this is like when we talk about local first and we talk about
[216:02.52] you know web sockets and stuff this kind of approach with create projection is what makes create
[216:09.00] projection so powerful conceptually right it's it's don't get me wrong at the edge of the graph it's no
[216:14.84] different than writing an effect into a store so maybe but you kind of this is what makes stores so
[216:21.40] powerful right the ability to the work with diffs store if you have store type technology and you're not
[216:28.92] you don't have methods like reconcile or this kind of diffing stuff you're not even tapping into
[216:34.04] like 10 of the power here i mean it's the reason why um like this was really critical actually for me
[216:44.52] deciding solid was viable um um was that i managed to show the diff performance was as good as the fastest
[216:51.96] speed on libraries because this is a it wouldn't be enough like if we just did these reactive updates
[216:58.68] like and just like let these other cases just fall to the side you know everyone deals with fresh data
[217:05.48] from the server at some point you can't just like re-render everything in that case it's important to have
[217:10.28] these kind of tools um so you know dbmon which i think i showcased last week the classic demo there's
[217:18.92] actually a really good benchmark um from the guy who created the ev framework um what was it ui bench
[217:26.60] uh local void yeah this one i'm definitely going to be pulling this one out again recently
[217:34.60] right what's really cool about this one is you can actually build the implementation locally this
[217:43.64] might be something we do in the future on stream but um yeah it solid's already in here
[217:52.04] but essentially it it has a whole bunch of tests like i can't it tests tables it tests um tree shapes
[218:05.96] and it basically tests all the difficult vdom stuff this this is the most like diff heavy um
[218:12.60] uh benchmark that there is this is probably like this should just be called the virtual dom benchmark
[218:19.56] and um it's a really good way to understand the cost of different kind of diffing algorithms and stuff
[218:27.32] like if i let me see here enable full render measurements disables i'll keep that on
[218:33.32] i'll just do a quick run so you can see what it looks like see but you can also put a custom url this
[218:38.68] way he didn't have to worry about um it and then
[218:42.68] i just click this oh that's why
[218:50.92] i have a pop-up walker
[218:52.36] i just turn it off for this site no that is not how i do it
[219:03.48] you can tell that i like never use this thing intentionally at least that's so annoying
[219:18.28] can i open this link in a new tab probably not because it needs to communicate back to the new
[219:22.68] window okay i'm i'll i will figure this out on a at a different point um oh there we go disable done
[219:30.52] refresh the page
[219:33.08] see it does a whole bunch of like different shapes of tests
[219:45.72] reports the data then when you go back to the main page it actually has um the results for
[219:52.84] for all of these generally when i test solid i do enable disable i actually switch the defaults because
[220:01.96] these are very good if you want to test the pure algorithm this is like what it's like when you render
[220:08.60] with the actual dom and usually you'll have referential texts but anyways this is a this
[220:16.60] is a great benchmark and probably the one that i'll be referring to um as i continue to kind of like
[220:21.56] go through this stuff
[220:23.64] um
[220:27.56] but what i was trying to get at is consider on merging scarcity in general when things can live in multiple
[220:35.56] locations when not when they might not all be erased siblings like commands by key to see more primary
[220:40.44] than different because they're the difference between this okay pretend we're cloning now when
[220:43.72] we set something to a store so we got a list from i don't know maybe the server some kind of list
[220:49.96] they're the difference between setting the list
[220:55.24] inside our store and then grabbing the first index from the store and setting it as selected
[221:11.08] a simple limitation of these would have different results since everything is cloned entering the store the first example makes two copies of the item at zero
[221:24.12] at zero one in the list and one that was selected
[221:27.00] right because it like if you're cloning it'll clone the whole list and then it'll also clone this
[221:33.08] whereas the second version we could know that it was the same item because it's referencing
[221:38.28] the item from the store when we're reading and we don't need to clone it again
[221:42.12] this stable proxy identity is important for equality and things like moving items list you don't
[221:47.24] want to create a new item everything is wasteful and you don't want to merge
[221:51.56] what is there if it wasn't conceptually the same item as it would be
[221:55.24] non-keyed that way yeah but what i'm getting at is
[221:57.40] the fact that these could be different is weird you would need if you're cloning you'd actually like
[222:05.08] need to make sure that any you need the source reference to the item
[222:11.24] to link back to the clone somehow so that if you ever tried setting it again
[222:16.84] in a different location it would know that you've already cloned and proxied it right it's no longer
[222:23.00] the same reference like usually if we weren't cloning we'd have the proxy so if you tried to set
[222:27.80] this up we'd be like oh no we already have a proxy for that one you know what i mean
[222:30.92] but but this this with cloning there's like this degree of separation that makes things like way trickier
[222:38.52] um we have a global proxy map so we can do that but if we want the first example to work the same we
[222:44.92] need to some extra smart when managing cloning the only way we know that these are the same objects are
[222:49.16] the source references but would we keep that around indefinitely that's one option have immutable internals
[222:54.28] that could always compare against but arguably we'd only need to keep this information for the lifetime of
[222:58.76] the set operation this issue also carries it into different considerations because if we reconciled
[223:03.88] this with a different current product say product three we don't want to transform the existing product
[223:09.24] zero into three as it would update it in the list as well assuming we were able to preserve this linking
[223:16.12] key would have to protect us again but the harder problem now is how to get the shared reference of
[223:20.76] product three in the list otherwise they'd now be unlinked unless keys were globally unique that that
[223:27.88] they won't help us much yeah i mean you might not understand exactly what i'm saying here but
[223:33.00] there's an interesting problem when you start trying to compare like like do a reconcile like a diff
[223:42.20] operation and decide that the object is the object that it should have the same equivalent thing when
[223:49.32] you're cloning and if that reference happens somewhere else like basically we have to keep around multiple
[223:56.04] copies of the object that could link to the proxy um it's a bit of it's a bit of a mess
[224:03.56] so things are infinitely easier if there's no shared references right if you could say that you can only
[224:11.00] put an object in the store in one location but i don't think that is a decision that one can make the
[224:16.20] exploration above was incomplete but it led me to include a couple things immutable diffing can shortcut on
[224:20.28] matching references whereas reconciling will never match references so it ends up deep dipping always
[224:24.68] however this would always be true of data from the server shared references established identity
[224:29.72] internally the input of the diff method shared references are the intended linkage in the final
[224:35.48] result key lets us link between input and and store but only as a tool to preserve this the shared
[224:41.48] references while inter shared internal references from the server seem unlikely it is only assumption we can
[224:47.96] make cerebell and server functions can handle this because they dedupe and deduping could be done in
[224:55.80] user space if desired what i'm saying is it's possible um thanks to like deduping serialization the to actually like
[225:06.44] like if if you passed some object that was in two different locations from the server for it to be the
[225:12.76] same object but it like basically
[225:20.60] sorry i don't even know if i'm being clear here you can start seeing the complexity just later on here
[225:29.72] when you have to worry about the difference between different keyed inputs that are not
[225:35.24] referentially equal to shared references with inside this structure itself and whether
[225:39.16] the structure that's serving as an input also has shared references
[225:44.36] for any of this to work we need the source input to be linked to the store whether that
[225:49.80] is temporary for the length of the set of the set or for all time is an interesting question
[225:53.40] when we didn't clone store equals previous but we can't make that assumption anymore
[225:57.88] i'm not yet clear the overlap of the different patch operations we won't realize that even the
[226:03.88] previous value is insufficient but i'm yeah i'm not actually not worried about this anymore i'll
[226:07.48] continue
[226:07.88] so yeah i i started thinking more along these lines and i was like can cloning like how would
[226:16.68] we even implement this before we even get to reconcile like make cloning work
[226:21.48] um so the first thing we i think we need is a week map
[226:24.28] look basically we need an additional week map that would happen like whenever you're called
[226:33.56] set or i guess it could even be a map for the length of the set so that when any object got set in we
[226:39.00] could link it back to the cloned object or the proxy so if we ever hit it again it would just keep the
[226:44.76] reference internally um but we but the interesting thing is like we might hit if we're using key based
[226:54.52] operations we actually have multiple different objects with the same key that are supposed to
[226:59.08] be the same object but not be referentially the same so this list might have multiple import sources
[227:07.00] pointing to the same output but technically this would work um i think so
[227:14.84] but there is this like interesting awkwardness because obviously
[227:22.84] like i've got an example here where we pretend if the user
[227:32.44] created an object
[227:33.32] set it mutated that object and set it again the the pro the problem here is if we're keeping this map
[227:44.44] of references to some cloned object and they mutate their data we'll see it still as the same object
[227:55.24] so this this if if someone like did this essentially even though they mutated it it still mapped back to
[228:05.80] the version that we created that was this so you'd actually end up with a list with id one john at both indexes
[228:11.24] because if we used a map lookup to prevent the duplication it wouldn't be aware of the mutation
[228:23.08] of of the outside object again you probably shouldn't do this um and obviously if you can kind of see
[228:30.44] this is dumb here but what if someone did this they like had a couple separate set store calls
[228:35.08] and they didn't realize that they were just mutating it and setting it again again like this is not a good
[228:41.64] pattern but what i'm getting at is
[228:44.12] the whole reason we're trying to do this cloning thing so that people can feel they own their own objects
[228:52.12] but this is just the problem in reverse instead of mutating their objects on them we're ignoring
[228:58.04] their mutations right the solution to actually solve the problem just reverses the problem
[229:04.84] we could argue that we could keep this for the length of the lookup of the individual set
[229:11.00] we use a similar trick for making stores on track um this would at least fix the second case but is
[229:19.00] that too specific is it weird that this is broken but this would work because they're separate sets
[229:25.48] i don't know i i hope i hope you guys get to get the problem like if you have an object and you're
[229:37.80] setting it to a store and you have to clone it because you can't keep the reference you don't want to like
[229:42.76] mutate their object and you do it okay well i'll keep this reference and i'll link it to the clone so
[229:49.40] the next time they try and set it i will just pull out my clone instead if they mutate the object then
[229:57.08] you're going to pull out the clone of the first object as it originally was not the mutated version so
[230:03.08] like they won't get what they expect i hope that's clear
[230:08.52] basically what i realized as i worked through this is the only real place for this to work is if we
[230:21.64] hijack unwrap because unwrap has a set for deduping if we made that a map it'd be possible to inject
[230:31.08] during these operations special deduping logic so that unwrap would be able to um take the data as
[230:38.92] it came in and ensure that we deduped but again there's going to be special rules here based on like
[230:44.92] length of the set length of the reconcile operation
[230:53.40] you would only lose the reference if the state was local to the component right
[230:56.60] no like what i'm trying to say is like i'm trying to think of how i i think the problem is the pro i
[231:07.24] think that our challenge here is the problem statement isn't clear enough
[231:19.00] if people believe their own they own the data line won't they be surprised if mutating their own
[231:23.00] order true or some magic well it's not about triggering magic it's more like it it doesn't do anything um
[231:29.16] it's like the opposite problem see uh okay uh okay let's let's try something let's go
[231:38.76] let's let's let's go a equals id one name equals j and const b equals id two
[231:55.80] name equals h okay so we're gonna we're gonna go const store
[232:05.88] set store
[232:09.96] equals create store
[232:17.56] maybe a b beautiful okay
[232:19.40] import create store
[232:27.16] from solid js store okay okay i'll quote this a little bit okay so
[232:37.40] let me think of how to do the set store
[232:47.56] i have to do a little setup to make this work but if i remember correctly
[232:55.48] it's zero if i set one to undefined
[233:00.52] or actually maybe we'll start it like
[233:07.40] trying to think of there's a pattern of changes
[233:15.64] that we can do to the store that will confuse the hell out of people but i think i think this is
[233:21.48] this will actually work if we if we set
[233:24.84] zero
[233:27.56] to a
[233:29.64] i think this will work
[233:45.48] one
[233:45.88] one okay so let's switch them let's go set zero to b sets a
[233:51.00] console dot log a
[233:56.68] okay so this one isn't a problem case
[234:00.76] um
[234:03.08] there's a scenario
[234:06.36] in which
[234:08.44] this swap is fine because we're just switching the same references around
[234:15.32] um
[234:15.88] um
[234:15.88] there's a case where if you
[234:22.36] update it they end up getting merged
[234:25.88] you can't see the console logs uh they're they're in the corner down here
[234:37.64] they're kind of small but they're there
[234:43.48] yeah i don't think this will actually i'm trying to think of the scenario of the show where the
[234:47.72] mutation happens but essentially
[234:49.24] it's like i i can make a mutation happen right now but this is kind of the wrong way to make it happen
[234:59.32] people because objects merge so like this this is not a valid case see if you look at this they're both h
[235:07.00] but this isn't what i was trying to actually show there's there is an actual legitimate case where um
[235:20.28] as essentially
[235:21.32] through through operations when you i think it's it's probably i probably need to use reconcile to
[235:29.96] actually show this happen and i so sorry i can't think of the example off head um kind of
[235:37.40] what i was trying to get at here is if our idea is to clone
[235:41.16] clone on set essentially like if when we set this into our store here
[235:52.28] if we clone this
[235:53.24] we want to keep a reference to any object in case we set it again so we know that it's the same object
[236:03.24] but if someone mutates it we end up with the original clone
[236:11.56] let me try that one
[236:24.44] let me see here
[236:41.80] so we start with the store with data
[236:43.96] reconcile active data
[236:50.20] merge true
[236:53.40] and then
[236:56.68] interesting
[237:03.40] and what if i'm gonna guess they're both be right
[237:09.96] yeah i mean
[237:10.52] yeah this is this isn't bad example the reason this is happening partially is because they're not
[237:19.88] keyed but
[237:21.56] yes this this you're you i don't think anyone expects
[237:26.12] that
[237:27.16] yeah this this is this is actually a good example
[237:30.12] thanks because what's happened here is that
[237:37.80] because the store takes ownership of data a when we create it
[237:42.20] it when we switch active data a to active data b it actually changes this into data b
[237:51.16] and then it adds data b so now
[237:56.92] it's not just it's not just the fact that this is the same in here
[238:01.00] it's the fact that if we console log data a it's it shows b
[238:15.24] it's not just the fact that if we're going to do that a key property for example here
[238:20.68] um
[238:21.72] key name
[238:24.60] and
[238:28.52] this actually keeps it
[238:32.68] um
[238:33.96] separate here
[238:37.88] but
[238:38.12] but
[238:38.20] i think
[238:40.36] the the pro the challenge here is that
[238:44.04] like
[238:49.32] it's there's definitely cases where
[239:02.28] expectations based on whether they're shared references or not
[239:05.08] can open up a weird can of worms
[239:08.12] oh sorry yeah i need to
[239:15.48] yeah sorry
[239:18.84] right
[239:25.32] this actually
[239:25.88] this actually this keying actually
[239:26.84] separated it but like you can see that without the keys
[239:30.04] like
[239:31.16] this morphs this which is different than this
[239:34.76] right so like key kept them separate because they realized they were different objects but without the key
[239:41.48] it merged the one the the one into the other one
[239:52.20] right you'll you'll see that a is b at the end
[239:55.00] okay so
[239:57.24] generally speaking
[240:02.68] keys with with reconcile is important
[240:07.64] but it's more than just that um which is what i've been trying to kind of get at with all this is like
[240:15.00] generic fixes to this
[240:19.24] are inconsistent
[240:20.60] so maybe i just have more work to do
[240:22.76] um
[240:23.00] admittedly
[240:24.20] cloning seems like a good idea but it reverses the problem
[240:28.92] you want to clone because you don't want to steal from the mutable sources but
[240:33.48] at a certain basis i think we have to recognize that we
[240:37.08] have to own the data being put into the store
[240:39.24] um
[240:40.44] it's it's it's it's it's it's it's definitely a tricky problem
[240:49.24] i i'm going to continue on this path because i i can at least see how we could try and implement it
[240:55.00] but um
[240:56.28] you can you can start to see like like it's not hard to picture how
[241:09.96] if like uh let me like pretend that
[241:14.92] we are like where's the other one where was it this one pretend like there isn't even reconciled
[241:21.40] percent you're doing like a diff and you
[241:23.16] take some objects from an immutable like redux store and the operation is like apply this patch to
[241:30.76] the diff like uh sorry was it immer here was there an example like one of these like operations
[241:37.48] replace pretend the value is like like an object and then we hijack that object in the store and we
[241:43.88] start changing it and then the reference inside immer is no longer the like the like the right reference
[241:51.48] like if you don't clone
[241:53.24] you do risk regardless you know taking ownership of that and if you do clone it seems like there's a lot of
[242:07.48] awkward trade-offs that need to be worked through
[242:11.64] yeah well the store diffing is an important part of of the stores because you can't always know the
[242:27.96] granular changes that need to happen especially if you get stuff so like going to mutable reactivity has
[242:34.92] the ability to communicate downstream changes without diffs but there is presumably at some point
[242:43.08] unless you start on the client where you have all the details or something there's probably
[242:48.84] somewhere that needs to do a diff um most often that's the point at which you do like the async fetching
[242:55.64] that we need good solutions around okay so i'm i'm what did i see here i'm going to benchmark this i'm
[243:07.56] going to try some stuff i i need clear need a little bit more exploration here it it seems if we could do
[243:16.76] cloning in an effective consistent way that was performant it would be more predictable for people
[243:24.28] right but what i the reason i showed this example is because some of the things like if people mutate data
[243:31.00] themselves we're kind of out of luck anyway right like
[243:39.72] this was an interesting realization to me maybe less to to other people but it's like all the
[243:44.28] mechanisms to try and protect ourselves seem to also just reverse the problem
[243:49.88] anyway
[243:51.80] last section here i'm going to talk about is what if we did want to do an immutable diff if we didn't
[243:58.28] want to do immer um there's some interesting stuff here
[244:06.60] could do hashing that's interesting
[244:16.68] actually probably
[244:27.88] oh that's interesting yeah because we don't actually care
[244:36.60] yes yes i think so actually
[244:42.68] because we we you're right the reference isn't what matters we just care about the actual data
[245:01.72] okay yeah yeah i yeah i i i i do think so i i think this is getting that realm
[245:13.32] is it a better handle the activity curve behavior basically makes it you understand
[245:21.64] how i have your reference to my yeah the the only challenge is this was there's a crate immutable inside
[245:28.28] solid primitives that exists to do the cloning it's i made this for the guys for xstate at some point
[245:35.64] and then like it ended up in solid primitives and um
[245:39.88] i think
[245:43.56] what i remember when i was looking at it was internally we can do something that's very hard
[245:50.44] to do in user land in terms of optimizing this kind of approach
[245:53.24] but it's possible that i've just over complicated things and i need to step back a bit and take a
[246:01.72] refresh on that it just i ended up going down this path because you know it's like can we fix stores if
[246:09.64] stores are such an important part of the future can we can we fix them and the answer might be no like
[246:15.40] this might be part of its nature this might be part of the realization here um
[246:19.16] but yeah
[246:23.08] interesting thing i don't know if has any have you all seen this before i actually hadn't i didn't
[246:32.52] realize there's like a generic established patch format this is what immer uses it's actually basically
[246:38.12] a standard the difference is this uses a string path instead of an array path immer use an array i would
[246:42.84] use an array too it makes way more sense but it basically defines a generic diff um format and
[246:52.12] apparently it's actually like a some sort of standard um so it's it's it's definitely interesting um
[247:03.24] i actually this is probably more interesting to people who want to get into more details here but
[247:08.92] i i i i had actually started playing with the idea like my only i was like maybe the the my only grief
[247:16.84] with this this approach was that it seemed like it it produces like a flat set of changes and i was like
[247:23.48] wouldn't it be interesting if we could do like a hierarchical diff so that like we could apply the
[247:30.20] operations without like stepping in and out all the time it's like without going all the way up a path
[247:36.68] and applying it all the way up a path and applying it wouldn't be cooler if we could like apply all
[247:41.00] the changes as we went so like i started playing around with some like formats where like i made the
[247:46.12] path the thing but yeah i don't know if this will be interesting to everyone but essentially what i
[247:52.92] realized like this this one's actually awkward because you can't do lookups very easily because
[247:56.92] it's just based on array index um because you know as you add the patch you like don't know then i
[248:04.04] started playing around with like what if you use the path as objects which wasn't bad um this is this
[248:11.16] is kind of the problem is you start losing order of operations but maybe because they're localized it
[248:17.32] doesn't actually matter so so can i start going through like ideas this is for immutable diffs to
[248:24.60] be fair this is a different problem list unshift you know push this set a name unshift so i i i always
[248:32.68] love using unshift or shift because they affecting the beginning of the array seems to mess with
[248:37.40] everything so the this whole like what if you like push something to the front of the array changed it
[248:46.84] push something else to the front of the array and changed it but if you had multi operations at the
[248:54.04] same key as an array then you keep order then i was like okay well what if you change the order so
[249:01.96] push these on and then do that because now they get grouped so technically these would get applied out
[249:08.68] of order like you do the operation then change the name operation then change the name but this is actually
[249:12.92] fine too then i was like what if we splice something in the middle but again it actually all works so
[249:20.84] i don't actually i think the funny thing i concluded at the end was that comparing this diff that's
[249:28.20] hierarchical with this diff didn't actually save us any work because the the root path isn't nested
[249:34.60] this only saves work if there's shared sections of the path it is actually technically smaller output
[249:40.92] but i think i'm probably over engineering stuff anyways just just another random thought
[249:47.80] it's a good question i don't know i should go ask over there um
[249:54.76] i i this this section or this what we're talking about here mostly i just want to bring attention to the fact that
[250:07.80] there are implications of trying to manage diffs on mutable data essentially because of shared references
[250:19.16] and it might make sense to pull the diff outside and apply it inside um essentially it's
[250:33.32] it's it's it's it's it's interesting regardless i i don't think there's um a world where we don't need
[250:41.96] some mechanism for diffs but it's definitely looking at the complexity that that kind of comes out of
[250:50.52] this i'm i'm almost just i'm almost at the point now where i'm thinking that maybe and i'm gonna have to
[250:58.84] benchmark this but maybe reconcile is a mistake maybe we should always be doing immutable diffs
[251:04.76] and then just have the patch function uh clone the object so essentially stores themselves never
[251:14.20] actually clone they assume ownership but if the patch ever sets an object if it does the clone coming in on
[251:22.20] the set um and it does the immutable diff like maybe that's always just the better option it's a little
[251:32.44] bit more to write per se because you basically have a projection with a create memo but like
[251:38.68] i don't know it seems like i'm going way too deep on solutions that are kind of crazy we might need our own
[251:47.56] diff so that we can do like id based you know like key based diffing most tools like expect react to do
[251:53.32] it so they don't do it but it's it it's just like it's it is surprisingly awkward
[252:12.28] well yeah the thing is i think mitchell west straight said this once is that he was saying that
[252:18.92] this is outside of the scope of mob x generally speaking like he was like that's why mob x state
[252:24.28] tree exists right or immer exists or that so like i think this piece could be seen like there's lots
[252:32.68] of options that don't need to necessarily be part of the core store implementation like the conclusion
[252:37.96] might be just that like maybe we do provide a diff but the expectation is that stores themselves don't
[252:42.44] change but the way we apply diffs change that might be the best of all worlds um so yeah at least this
[252:50.84] conversation let me think out my thoughts a little better
[252:53.00] create mutable is going to be shipped off to solid primitives or legacy or something in the near future
[253:03.96] because we the plan is that the store api is going to accept the produce syntax or the mutable syntax
[253:13.08] as the primary one it's still gonna have a setter but it's going to it doesn't make sense to have two
[253:19.08] different types of stores when they basically do the same thing right we want to keep all the characteristics
[253:26.76] that are read write segregation but we want to make it easier to do updates i mean don't get me wrong i
[253:32.36] love the path syntax i came up with it for a reason it's succinct it's declarative it's beautiful but
[253:38.84] it's like reconcile is it's like it's something built it's a helper it should be a helper built on
[253:44.68] top of a more fundamental basis and through this exploration i've realized you know like that the
[253:51.16] stores are in their essence mutable right so it it is that good that they are some interesting things
[254:01.16] that you you all might find interesting about the the new implementation solid uh stores that i've
[254:06.76] been playing around with to create store um for the 2.0 stuff is um how to actually get the right
[254:19.08] to do it because like what i'm doing is i'm actually sending a global set for writing so when you create a
[254:26.36] store or so when you call the set function it adds the store to this global writing thing uh set and
[254:33.64] then it clears it when it's done the synchronous store set which is and then when you're inside the
[254:39.64] proxy um setting the thing it go it asks if the set has the target and if not it doesn't write to it so
[254:50.52] essentially in this way we actually use the same proxy for the read and the write but you can only
[254:57.72] write to the proxy during the execution of the set store call it's cool because it keeps references this
[255:04.84] way i also use this trick um if you look on the get side we use this trick to actually make them
[255:12.92] non-tracked um this is this another classic problem with stores like if you write i mean i have an
[255:19.40] example in in the in the in here like you write something like this doesn't this mean that whatever
[255:26.28] scope here is going to actually be tracking draft dot list dot zero like you're trying to write to
[255:31.56] something but you're you end up tracking yourself by accident um so basically
[255:39.00] we can we're using this mechanism uh to basically guard against both writing and
[255:47.56] against tracking yourself with inside the set function so um
[255:53.80] there there's like a bunch of weird edge cases around yeah like this this gives us a lot more
[256:02.60] control and guarantees like before we were like i was setting like a global like uh like mob x they
[256:10.12] have like a strict mode right where it's like you can only write when you're inside an action um this is
[256:16.12] keying it even more specifically to the specific store so to speak um anyway
[256:24.36] i have not looked at uh crdt's in in detail to be fair um
[256:32.60] it might be interesting to look at the diff format then again one thing that i did realize through this
[256:42.44] this uh operation which i didn't talk about at the end here going through this thing is
[256:46.84] um i start worrying about like i'm like i noticed that this worked but then i noticed in the spec they
[256:55.72] have like move and copy and these other operations but then i realized i was like how do you get a move
[257:00.28] or copy operation out of like uh like a mutation set of mutations you you don't really and then i looked
[257:08.12] at emra source code and they only do add remove or replace which means that i think that from our
[257:12.60] perspective there's only a small subset of actually diff operations that we actually need
[257:16.76] we in fact need to only implement these three um so i i'm not as worried about the diff format i know
[257:24.20] i've wrote a whole thing here about how the hierarchy basically optimize the diff format for
[257:29.24] applying patches rather than for creation um it was essentially what's working on i don't know if
[257:34.60] people realize that the path syntax and solid started because i was trying to actually come
[257:39.72] up with like a diff format i was trying to make my own version of redux based on
[257:43.00] based on merging mutable diffs and the path syntax was originally my syntax for for figuring out how to
[257:49.72] apply changes a set store used to take arrays of arrays um so that you could like have an array of
[257:57.24] paths and then i will i decided at a certain point just not to do that it simplified things so then
[258:03.08] we can make arrays top level for example in stores and we didn't because instead of packing an array you
[258:10.44] pass in the list of arguments so like we got rid of and it was awkward having a double array wrapper
[258:16.68] syntax it just you know a rave and a rave etc but um definitely my gut feeling here is that the diff format
[258:28.28] or patch format is not the most important part of the problem here actually i think this is actually
[258:35.72] simplifies drastically i think i i think that writing a diff or even using existing tools like immer
[258:47.08] if applicable um kind of alleviates some of the tension here
[258:50.28] right
[258:59.40] how should i put this um these are a different patch algorithm from reactivity perspective the only
[259:09.72] thing is like i guess i'm often thinking a lot of this stuff is coming from outside of the system
[259:16.68] but yeah i mean maybe i should take a look you guys seem to think it's relevant so
[259:22.52] like i'm looking at something that basically has three operations so like
[259:35.40] like the the the the patch part of immer is a plugin but it's also probably a fairly straightforward routine
[259:41.96] anyway
[259:46.44] okay let's see 420 okay i got a couple more updates so uh unless you guys want to talk more about stores
[259:56.84] um i got a couple async updates here before we get into this week in javascript this should be quicker
[260:13.08] um if you remember a few months back i was all talking about run once reactivity and you know uh
[260:22.44] ways to fix suspense and all this stuff i've having a bit more time i realized that my crazy solutions all
[260:32.84] didn't work
[260:33.24] i'll explain pretty why but it's actually there's two types of problems that you have
[260:42.84] when dealing with async um with a signals graph you have what i call lazy async causes waterfalls right
[260:52.60] which is like if you have a diamond
[260:53.96] if a is a signal and then b and c are both async and then d is the combination of those
[261:01.40] if b and c are async and lazy and only read in the effect what would happen what like what would happen
[261:07.64] is you'd read the first one and i should say lazy async causes waterfalls when it when you when you're
[261:16.84] throwing i'm i'm assuming that non-nullable async is your baseline starting here
[261:22.92] but essentially if you get here you throw and then you have to wait for this to resolve to run this
[261:30.84] and throw so if you're being lazy here you actually don't fetch this until after you
[261:36.68] fetch the other one it's immediate waterfall right so if a b if b and c are async and lazy and only
[261:43.08] reading the effect what would happen is when you read user and start fetching then throw user details
[261:47.48] won't read and fetch until after user resolve you could guard to prevent this problem right you can be
[261:52.76] like if it's pending and is not pen basically if they're both not pending grab it but
[262:01.80] the reason this would work is because the pending would catch the throw essentially and that way like
[262:10.12] it would it would basically fetch here and fetch here like so this would go throw this would catch it but
[262:15.56] it would fetch this would run through actually does this even work i'm probably wrong yeah this and will
[262:24.84] short circuit it i'm this this code doesn't even work this code doesn't even work you literally have to
[262:35.64] say is not pending like you basically have to actually i i should i should edit this you see
[262:41.80] the problem right the short circuits the way i wrote it you you essentially have to actually do this
[262:48.84] i was trying to be all compact but the reality is you actually have to
[262:54.12] if not is user pending
[262:58.84] more like this user pending
[263:18.84] details pending
[263:21.08] turn
[263:48.84] i'm sure i'm sure i could have done this with an or in a shorter way too anyways my point is
[263:53.48] my point is it's it's this is not nice
[264:02.36] right you you could use pending the trigger the fetch essentially if it was lazy and then guard
[264:13.32] against it details but this is not lovely
[264:19.48] this case you sure would get caught by it's pending and each fetch would happen but it doesn't
[264:25.40] get as much non-throwing approaches async don't necessarily have this issue but might require guards
[264:29.24] anyways if they want to avoid undefined right because you'd have to check if they're there like
[264:32.84] it's it's the same it's the same pattern even if you initially fire off the request the first time
[264:38.36] updates will have the same problem unless you're tearing right unless you opt into tearing keeping
[264:45.88] old state while new async is in flight or schedules fetching right so what i'm what i'm
[264:51.64] trying to say is like this guard is probably wrong too um
[264:55.64] actually yeah because this this fails and doesn't call this one
[265:07.40] yeah god i i i i i gave it too much of a benefit of the doubt um it's more like this
[265:13.80] this is this is pretending like it's like solid today where
[265:19.64] where um
[265:24.60] where it's just undefined so you actually have to do this u and d
[265:37.48] you
[265:38.12] d
[265:40.28] all right fixed okay
[265:46.68] no i'm missing i'm missing uh
[265:51.24] whatever
[266:05.24] okay my my whole point is that this is not very convenient with lazy so the only way to get
[266:17.08] around this is if you just fire the quest the first time
[266:19.48] if even if you initially fire off the quest the first time the updates will have the same problem
[266:23.40] unless you opt into tearing keeping the old state while it's thinking or schedule the fetching yeah so
[266:27.16] the next time you do an update because these are both based on a right so you update signal a and the effect runs
[266:40.36] where's the original version yeah and the effect runs uh where's the original version yeah and the effect runs
[266:52.84] this is using the new split effect syntax but the next time the effect ran you'd hit the same problem
[266:59.72] because now you'd be throwing or now you'd be undefined right so
[267:03.96] like
[267:06.76] this doesn't go away unless perhaps maybe you show the previous value right like
[267:18.28] but async tearing is wasteful so when i was working on this run once thing because that was my idea i
[267:24.36] was like we run it immediately right like fetch immediately so the first time we get
[267:30.44] you know we don't have to worry about it fetching and then the second time we just give the old value
[267:36.60] of user and the old value of user details and that won't maybe won't cause us to update but on the
[267:48.36] positive um both will fetch again because it they're lazy they'll like they'll both fetch again but because
[267:57.96] they won't be blocked because they won't throw they'll just get the old value but there's a problem
[268:02.12] with the old value
[268:03.00] this shape if you have a signal that feeds into a async that depends on async but this signal also
[268:13.08] is read by this one so i have an example of where you use a signal to get a user and also
[268:18.92] get a best friend based on their user id and their friend's user id like you want to get the friendship
[268:24.92] record let's say the connection between these two people so you use the you can use the base user id
[268:29.80] and you can use the best friend id off the user so you there
[268:37.72] b and c are async okay this is an unavoidable waterfall right you can't get the best friendship
[268:47.08] unless you get the best friend id off the user you can't like this is a waterfall you can't avoid it
[268:53.32] however run once not throwing is detrimental here when a is updated and it notifies b
[268:59.48] and c they both get queued to run b runs fetching the new user then c runs it sees the existing user
[269:09.64] um here the old user with the new user id and it fetches the friendship information between the new
[269:19.08] user id
[269:19.80] and the previous user's best friend
[269:25.88] then this completes updating the user record which sees a new different best friend and then it fetches
[269:35.08] is again so instead of it being a waterfall just a waterfall if we use fetch once kind of thing where
[269:47.16] we like let it resolve and not throw we actually end up fetching here twice even though technically we
[269:57.32] should fetch here and then fetch here tearing we accepted for ui but for data fetching it's terrible
[270:04.20] it's possible to guard this usually we null check but is pending could be used similarly to remove
[270:09.16] intermediate fetch right if not as pending you know this return fetch you know this
[270:18.84] but the funny thing i realized the solid today is actually like this because we don't un set undefined
[270:25.48] with a resource we keep the old value right technically it suspends but if you ever chained
[270:30.68] async which we don't actually do because you know it all depends people don't do it much we we actually do
[270:35.80] this you you're probably already doing guards around this if we know about values while fetching we
[270:42.44] wouldn't have this problem but we'd also have some pretty blotchy ui unless we said suspense was
[270:46.84] necessary even transactions and transitions would be subject to this double fetching because when
[270:51.88] working on the alternative reality async still is an instance there's no real guard except the one
[270:56.68] that we enforce or the one the developer needs to put in themselves okay
[271:01.96] so basically what i'm saying is we haven't hit this problem very much but in a sense solids approach is a
[271:11.40] little bit like forces you to manually guard here when you chain async which is kind of awkward
[271:20.84] so basically what i'm saying if you follow this conclusion that like if you're throwing and
[271:27.08] doing this stuff that you can't be lazy essentially um because you can't you can't tear
[271:39.88] there's really only one option suspense is necessary making it optional doesn't work
[271:45.40] if you don't want that if you don't want to tear tearing can be unpredictable it isn't just part of ui
[271:51.00] it could be data fetching it could be you know in the ui it could be missing classes or rendered
[271:55.64] elements or other oddities but not not everyone wants to use suspense but when they essentially
[272:01.24] recreate it or transactions in their attempts to not use it you put placeholders in ui or you leave the
[272:06.12] current data in place and place loading guards around downstream calculations the biggest opposition
[272:10.12] to suspense is that it's jarring when things under it cause it to fall back the answer is usually
[272:14.76] to go more granular but if you want to default values it is a bit awkward because you can
[272:19.00] do that at a single point high up without upheaving everything below whereas suspense being granular
[272:23.96] would need to push down pretty far you can opt out of suspense with guards like it's pending
[272:29.96] or even look at a way to resolve the last result value like latest which i was talking about
[272:35.00] um or i keep on going back and forth whether i want to call this
[272:40.20] um but essentially
[272:48.52] it it makes it difficult it's perfectly fine if people want to guard against specific behavior
[272:54.44] but it's difficult to have the default behavior um cause data to be fetched multiple times or cause
[273:02.20] um weird tearing to happen essentially right it's it's very difficult to say like
[273:12.12] it's gonna do a bunch of broken stuff unless you do something
[273:15.24] let's talk about latest for a minute although um a good point here is latest can only be resolved
[273:23.88] shallowly we can't stop a dependency from throwing in the first place but we can instrument the read and
[273:29.56] we can't guarantee that it doesn't throw yeah okay yeah i have an example here um user fetch from some id
[273:39.16] first name create memo user first name first letter latest first name zero two uppercase initially there's
[273:45.72] there's not a value so latest at minimum needs to be a try catch right because if you tried to read first name
[273:52.60] from here it's it's not going to be defined right like even obviously it can throw if it's if it's never
[274:06.04] been evaluated before um but even if like we told it not to throw it's going to be undefined there's no
[274:15.64] possible way this has a value right
[274:20.60] so like while we could say that under latest this could just return undefined
[274:24.12] it's going to throw the second you try and get zero out of undefined
[274:29.00] so a latest helper actually needs to catch or and squash basically all errors that happen under it
[274:36.12] and either return the value or undefined that's basically the operation it's like try and get the
[274:42.04] sync value or return undefined it's not actually latest it's not actually like a history it has to be like
[274:48.76] attempt to resolve this synchrony which is why i kind of want to call it resolve sync except
[274:53.24] resolving also doesn't make a ton of sense
[274:55.32] let's assume it resolved to john the first time but now we go fetch the user again and something else
[275:01.72] causes us to look up at the first letter when it goes to read the latest again even though first name
[275:06.36] should throw it is in latest mode and will return the value john which will get us the j safely one
[275:12.12] thing that's worth noting is if the memo or async has a default value then the latest would be
[275:16.68] able to result always resolve out of value part of me wonders for the reason
[275:20.28] wonders for that reason if the helper itself should take a default value then again you could always
[275:25.16] just or it what i'm saying here is if if create memo here has a default value then when it goes to read
[275:33.00] it's in this like latest mode it doesn't it doesn't need to actually throw or be undefined it can
[275:40.12] actually be this default value and actually resolve it's kind of interesting that you can set defaults
[275:47.08] through this mechanism
[275:48.60] latest might not be the right name because then rely uses the latest value something in the future
[276:00.44] could cause the fail we don't get the latest value we get undefined so it's more like a try catch with
[276:04.52] a special mode switch that tries to resolve syncly like resolve sync maybe it doesn't force us to
[276:09.00] resolve synchronously though more like a try to resolve synchronously maybe latest just reads better
[276:15.72] so basically run once doesn't work there's no way to avoid scheduling we need to always throw or force
[276:20.28] undefined so we need suspense we can have better dev tooling around it but that is what it is guards
[276:25.48] can be helpful like it's pending or latest if we don't want to suspend in places but fundamentally if
[276:29.88] you don't want the fallback to happen for data that you did initially suspend on we don't have much
[276:34.36] recourse except to perform transactions or the developer has to use the old latest user or user trick
[276:39.72] that just isn't the default the system can take when propagating change to the graph right the
[276:45.48] the whole reason we're looking at this run once thing was we're thinking couldn't we make all user
[276:50.04] reads be latest or user essentially that was the revelation like in the summertime a few months back
[276:55.96] and i think the answer to that question is no we it's just not a safe default if you know that's what
[277:00.52] you want go for it but we can't actually make that the default behavior the current behavior you know
[277:07.56] minus the couple like bugs and the changes to throwing is actually closest to the right behavior
[277:13.80] i think
[277:14.12] do push pull lazy async memos bring benefit i saw in the previous lives their performance benefits but
[277:22.92] they also make things more complicated do they really matter for them well here's the funniest thing is
[277:30.28] i i i talk about this in my article series at this point because in order for this to work async has
[277:36.92] to be scheduled the only thing that is lazy is the memos now everything else is scheduled async scheduled
[277:44.12] effects are scheduled um you know we've actually reduced the surface area solids reactivity significantly
[277:51.80] with you know projections and like this kind of thinking obviously there's a lot of utilities but
[277:57.32] um you know with the crate writable signal merge and stuff we're actually getting down to like basically
[278:02.60] having five reactive primitives um and not five with a bunch of dot blanks under the hood you know
[278:08.60] like signal dot link or whatever i mean literally five primitives um but
[278:17.72] yeah i don't know it's it's funny solid is the only non-lazy system all the other ones are lazy and
[278:23.72] all i've managed to show here is that most of the time lazy doesn't actually make sense most of the time
[278:29.48] like for most things i think memo like computeds are like the one place where they make sense but
[278:34.68] almost everything else needs to be scheduled so i don't know current yeah it's it's it's it's really
[278:43.56] interesting it's it's not latest it's not even current it's like i guess it's current
[278:50.84] yeah it is current isn't it because it's not the last result value it's like
[278:59.24] try to get what it is right at this moment
[279:08.28] yeah but like when i benchmarked the new version that's like well here's the here's the thing like
[279:13.56] when you when you do a benchmark like a rendering benchmark how many memos do you create that aren't
[279:19.80] being used the fact that the memo is lazy is irrelevant at that point because like in solid um
[279:26.20] render effects and memos run immediately on creation and in fact i think async i'm still even with the
[279:36.28] not late uh with the scheduling i'm still going to run it immediately so if you are going to eagerly run
[279:42.76] the the stuff even though you have um what eager like scheduling like you schedule everything so it's
[279:52.92] like eager resolution not just pull like we're never going to find benchmark it's very rare to find
[279:59.16] benchmarks that are like tests that actually show the impact of having lazy memos unless the benchmark shows
[280:04.84] in those situations where not everything needs to be calculated like that one like preact signals test
[280:11.40] it's it's like something that you like basically never hit in any focused like application scenario
[280:18.44] it only happens when you're like in real life it happens there's sometimes parts of the graph that
[280:23.48] are disconnected and it happens like in these like very fictional kind of situations where you're like
[280:30.52] almost testing for it but like if if someone goes and makes a benchmark they're not going to like
[280:35.08] make additional memos that aren't going to be used so it is kind of hard from a benchmark perspective i
[280:41.32] have hit value in this kind of lazy calculation and pull approach when like interrupting with other
[280:46.36] libraries like react because they're poll based so like deferring the work can make a lot of sense until
[280:53.00] like react wants to see it i love lazy mouth steering kids mike pearson had a whole article how eager signals
[280:58.84] remove the benefit of cold observables it's true that's why our from operator wasn't that interesting but then
[281:04.20] on the other hand
[281:05.88] like
[281:09.08] yeah i i that's probably where your benefit is putting lazy lazy memos at the end of event streams
[281:18.60] because you need like a you need like a potential sync to be there you need to make the thing then
[281:22.84] again like create async yeah i mean this is more fun for you again create async essentially is
[281:30.84] you should be able to just pass an observable if you go create async return observable because it
[281:37.24] accepts um async iterators but then this one is not lazy so i don't know
[281:47.96] it's funny though because create async is probably gonna like i don't need the from operator anymore
[281:52.60] now that i've created async
[281:53.64] couldn't you like just defer hooking the stream up like until you want to listen to it i don't know
[282:06.12] but yes generally speaking like if you if you look at like my scheduling logic commits over time on the
[282:15.72] solid signals repo it's just like it's just like more and more and more and more stuff is just going
[282:20.52] back into the queue again
[282:21.64] anyway done
[282:25.72] do do do do talked about those okay let's let's let's get a little bit of this week in javascript in
[282:34.60] before we're done give me two seconds to get that together
[282:42.76] observables aren't async iterators anymore
[282:44.52] i mean they never exactly were but wasn't there an interrupt for them
[282:50.12] like i mean all right now i want to look this up rx.js async
[283:07.72] i thought i thought i thought like people just put the symbol on it
[283:10.52] i see it's still open
[283:26.28] oh i see so basically
[283:28.28] although i see something merged here sorry let me go back to sharing my screen give me two seconds
[283:38.36] oh okay so this was merged in 2023 and then they like went against it
[283:54.28] although this
[284:00.76] although this
[284:00.76] it looks like he mentions that library in the pr core team approved
[284:15.24] it looks like this got merged but like there is an rx4 away but he he's also saying that this got merged
[284:25.64] hmm
[284:27.16] i guess we'll have to try it sometime to find out okay give me a sec
[284:45.24] oh actually i had one other thing i wanted to show i mean it's not a big deal
[284:50.52] um the reason i pulled this up was that i actually proved that in the new implementation for solid
[284:57.08] reactivity actually implemented both that triangle and that diamond and they both work they're like test
[285:04.12] cases from that one i was showing like we're beef and then c and then front is like the front half
[285:13.40] of the effect then you see c fetch later yeah you and you can see the the waterfall happening
[285:20.20] properly without double fetching anyways not that important if you care about seeing this example
[285:26.20] you can uncomment either or but yeah this is this is the triangle and then if you comment
[285:34.04] out the triangle you can also see the diamond
[285:40.76] sorry which is you see them both fetch at the same time and then as they update every interval
[285:52.36] fetch at the same time fetch fetch effect fetch fetch effect anyways just
[286:03.96] stuff okay let's go back
[286:18.52] oh god there's so many notifications right now i did i kick over a beat uh hornet's nest before i
[286:35.24] went on stream whatever
[286:38.12] um
[286:43.96] okay two seconds i just i'm just setting up my twitter tabs
[286:51.64] i guess there's a people want blue sky content at some point too but that's not completely where i'm at yet
[287:02.52] okay last time we streamed was september
[287:07.40] yeah okay good good good and good it was september 22nd i think
[287:19.80] okay okay okay okay let's go through this stuff
[287:28.52] okay let's go through this stuff
[287:28.52] okay
[287:30.52] and solid is here
[287:33.56] okay okay okay okay
[287:36.28] sorry october 22nd not september
[287:42.92] all right
[287:45.72] all right cool people still alive still awake i know this has been long really deep
[288:00.12] all right
[288:09.56] okay okay so i'm gonna talk about this week in javascript um
[288:14.20] i don't know if i'm
[288:16.28] as connected these days because as i mentioned it seems like there's a mass exodus to blue sky which
[288:24.44] it's kind of nice it was quiet got work done as you can tell from all the content in the stream so
[288:31.16] maybe maybe it's good that everyone went away
[288:33.56] um
[288:35.16] first a little bit of solid bookkeeping solid hack is still very much in progress
[288:44.12] you can open the actual link for this on the stream so if you can open the actual link for this
[288:50.76] more challenges we've been doing ones every week um been great uh um payouts so far
[289:01.40] um a lot of really really cool um contributions there is only five more days left um so
[289:11.56] just word out to all you all
[289:14.92] um
[289:16.44] it is coming to a close but it's been amazing
[289:20.04] right yeah some of the this is one of my favorite things is we we've been doing uh rewards
[289:30.76] for guides so like much needed like how how to's for solid start have been coming out like
[289:37.96] it's funny i build all these things you know and we put them together and write some like
[289:42.28] bare minimum docs just to kind of like keep on moving forward but then it's like there's so much
[289:47.00] hidden potential when you put the pieces together that you know really needs to be highlighted
[289:51.16] every day if someone's like oh how do you do this and it's like oh i haven't thought about it oh yeah you
[289:55.24] just do this and then you play put it together and you're like oh wow this like you could write
[289:59.40] an article about that i'm not going to um i've got other stuff i'm working on clearly but like
[290:05.16] there's there's a lot of power here that's barely being tapped so um i think the the especially the
[290:13.24] guides bounties have been really really good um anyway yeah uh let me see here
[290:24.12] yeah no until has been doing some great streams recently on some of these topics too um
[290:29.08] what you're seeing here so just little solid news type stuff what do we got here
[290:36.76] i've been having some trouble doing the retweets on um because i don't know how many of these projects
[290:43.48] are actually um the voting is going to start soon and people have been building some really cool stuff and
[290:49.88] i'm like is this solid hack or not like this library from dev using use socket as a way of doing web
[290:56.84] socket um you know server signal type stuff um really really cool demos um yeah cobalt's getting more and
[291:08.12] more ui components yeah here's the data uh the data ui guide challenge um i think we posted retweeted that
[291:19.88] um somewhere in here
[291:22.44] yeah this is this has been my biggest challenge because i don't want to like bias things but like
[291:31.88] it's really tricky when there's so many cool demos here this is strello using the server signals um
[291:38.84] another cool solid piece of news um there's a book i almost wanted to see if i could get it printed
[291:44.84] but um this book's been in the works for like two or three years now um but there is a full like how to
[291:51.88] use solid book
[291:57.24] which is pretty freaking cool as far as i'm concerned um
[292:01.00] yeah i don't i don't i don't know what to say beyond that because
[292:10.36] i i it was shared with me um so i looked through it it was very detailed a lot of chapters i mean you can
[292:17.40] see it kind of from the overview here um but like there's a book we've we've accomplished something
[292:27.08] this like
[292:27.72] it's very very cool i'm very happy to see these kind of projects come together
[292:34.84] um more challenges blue sky account set up more conference talks
[292:41.72] again i i posted this and then found out there's a solid hack um contribution this is um
[292:52.60] solid desktop written in a native script develop mac os with solid js honestly this thing looks crazy
[293:03.00] um it's it's really cool i i i keep on hearing people say oh i'd you know before it's like i'd
[293:10.28] develop a solid if there's a meta framework and then the next thing is like if you know i could
[293:13.32] do native or other platforms and it's like that that area is catching up between like native script
[293:19.64] and tori at such a rapid pace um i don't think i don't know if people know this but like in terms
[293:26.04] of sol's adoption in large companies some of our biggest adoption is through non-web platforms right
[293:31.40] it's hard to convince people to move off react because you know it's good enough right but
[293:36.04] there's certain like um television development ex especially is a place where solid's getting a lot
[293:42.60] of ground because the low memory footprint um so like other platforms is is it's it's an area that
[293:51.00] well you know react native has crazy solution that's way ahead of you know most other solutions in terms
[293:56.20] of how long and how much effort is put in we're getting pretty close to a point now where um you
[294:02.52] know thanks native tori that like this is this doesn't have to be such an equal ground you can
[294:06.68] be like yeah i built my application solid i built you know solid start for the web app and i built it
[294:12.04] using tori for native and that's that's like that's a real thing so um i don't you know
[294:22.12] i think the scariest thing about what's happening with solid right now is i i'm everyone's running
[294:26.36] out of excuses they just gotta admit that they just don't care um which is a fine position to to be in
[294:35.40] but like uh you know you the excuses are are are getting you know pretty pretty thin at this point you
[294:46.28] know it's like oh it's because other people aren't using it it's like yeah but if you use it maybe then
[294:51.24] other people use it because they'll see you using it it's like it's the like who's gonna jump first
[294:56.28] kind of scenario so yeah it's it's kind of it's kind of funny that we're getting to that point
[295:05.32] honestly that's the best point i could hope for there's only so much you can do
[295:16.68] isn't tori a web view yeah it's interesting because there's there isn't this was explained
[295:22.36] very much in detail on stream but i don't it's not like capacitor or like ionic
[295:28.28] like it's not like it just runs just straight up like like oh here is a web view and you're doing
[295:41.08] everything it's it's much lower like level integrated it's not the same as react bridge
[295:45.96] but it's not like my understanding is not just like the straight up web browser
[295:50.28] okay is that it but you have access okay
[295:54.76] there is a very detailed explanation when i watched
[296:02.12] in my native script and um tori streams that i did a year ago
[296:07.08] we focus more on like the that like because attila was trying to make me like
[296:15.80] less afraid of like rust essentially so we were looking at those aspects more than solid aspects
[296:33.08] i mean there's definitely a javascript executing layer here um
[296:38.76] but yeah the there are subtle details and honestly it's not an area
[296:55.24] yeah honestly
[296:56.20] sorry this is just a side i just saw this but
[297:02.44] this actually has been really annoying
[297:13.24] all the references
[297:19.08] two embeds
[297:19.88] two embeds in my articles
[297:22.20] are gone now
[297:25.48] and no way to get
[297:31.96] them back
[297:49.08] anyway
[298:01.40] where was i um
[298:05.72] let's go forward
[298:15.08] okay i'm gonna flip over to
[298:16.68] to my profile here
[298:18.36] to do
[298:20.44] it was funny we were updating um
[298:27.32] it's kind of interesting little side story but we're updating the solid site
[298:31.32] for the js framework benchmark and it kind of asked a question of like
[298:34.52] what do people want to see in benchmarks
[298:37.56] right fastest versus common i'm glad that common won by such a huge
[298:43.00] thing we actually went with react hooks and preact classes because i pulled
[298:45.80] the docs off in the end
[298:48.68] but um
[298:51.00] it it's kind of an interesting question right because
[298:54.92] this is kind of like the current state of performance in the js framework benchmarks
[299:00.44] and if you look at it
[299:01.72] preact hooks and react hooks are almost identical in performance but i was like looking here and i was like
[299:06.44] preact was way up here before
[299:08.76] it's because these were classes
[299:09.96] and the react was hooks over time classes have gone more performant it never used to be that way
[299:16.76] um so i was like i was like is this fair um should we use the class version for both
[299:25.24] react and react and preact but it turns out the react basically said that classes are legacy
[299:30.92] where preact actually has both examples in all their docs so i went with preact classes here and then
[299:37.72] we kept react as hooks so i think that was the final version here which looks like this so yeah
[299:53.56] so yeah no it's uh it's it's it is an interesting dilemma though um because preact also has a
[300:01.88] signals version and some people like use the signals version but it's like it's kind of like in the middle
[300:19.48] we already talked about that
[300:20.76] okay yeah let's talk about early returns
[300:24.92] i talked about this a bit earlier but
[300:29.80] um
[300:32.60] i i missed this article originally and yeah component composition is great
[300:44.36] when i first learned about reacted blah blah blah virtual dawn fast blah blah blah
[300:47.88] separations of concerns okay okay so it talks about conditional rendering and well one thing i do
[300:53.80] really like about this example here is it's he's basically showing a pattern where you can
[301:00.20] hoist the logic the layout out of the logic right he's showing that like as it goes he has to add all
[301:06.76] the more conditionals i think part of the problem with this is the problem isn't that there's conditionals
[301:16.84] the problem here is that you have mutually exclusive conditions there's a difference between conditions
[301:22.68] that um are like turn this on and off and ones that are always mutually exclusive so
[301:33.24] like the complexity comes in here was that oh they missed the empty state but it's because
[301:40.68] basically these are all mutually exclusive at least these two end up getting tied together but
[301:48.28] if you think about it all of these are actually tied off the same thing they're all based on the data prop
[301:53.80] um so fixed it empty screen okay back to the drawing board right pulling out the layout is smart it lets us
[302:03.56] focus on what's here right but um the idea here is that if we separate these mutually exclusive states into
[302:18.12] separate things then the code is much easier to read instead of trying to like go okay what's this
[302:23.32] combination what's this combination what's this combination what's what's this combination
[302:28.12] you now can go when this do this when this do this one do this do this
[302:41.32] so and the argument is reduced cognitive load yeah right clear path rather nothing is nested like
[302:46.44] async await becomes easier reason about when reading top down async await is like the worst thing in a
[302:51.08] component but that's a whole other thing even if a statement with a return represent one state the user
[302:56.36] can see notice we've moved the data sign to the last branch because only one where it matters that's
[303:00.36] true easy to extend yeah now we can also add more conditions like error handling without fear of them
[303:04.60] breaking other states it becomes simpler dropping when if statement except again this works because
[303:11.24] all the heavy loading is happening here if adding air conditions required you to go to here go to here
[303:17.80] and go to here this might arguably be worse right i think it depends on the type better type inference
[303:25.48] right because not data means this thing right but the complaint is layout duplication you're
[303:33.16] re-rendering the layout component every time now as you guys know in solid re-rendering the layout
[303:44.76] component every time is about the worst thing you could possibly do right so like but also we don't
[303:50.68] have early returns so we can't really do this unless you put in a memo which then it also is about
[303:56.60] the worst possible thing you could do but my my grievance with this is that is a it was twofold
[304:04.36] because i saw this article and i was like
[304:05.96] this is not great like i understand that no that you want to optimize readability over optimization
[304:16.44] but the like to the layout but the the fact is what's the difference between early returning and just
[304:23.72] recognizing that this is a you know trinary or whatever it's like three three possible returns
[304:32.76] right like i think the thing is at the beginning you treat them all like they're flat but if you
[304:39.72] actually make the same see when you switch to early returns you decided that these are three mutually
[304:45.64] exclusive states if you make that same assumption about your code anyway um you you can
[304:58.36] you can like slightly change the code layout yeah see yeah so for example here don't get me wrong i'm
[305:04.44] not a huge fan of going ternary ternary ternary one two three but actually if i let's let's put this
[305:12.60] into a place that has syntax highlighting you can see what i'm talking about
[305:21.08] um let's go have a syntax error
[305:24.52] the reason oh did i miss yeah the reason i wanted to
[305:36.76] uh is it this
[305:43.88] something
[305:48.12] okay let's try this again yeah
[306:01.32] when when when when you lay it out like this
[306:03.72] not only are you not like dupleting the layout you are actually still doing like it's like the
[306:08.92] earlier turn you're just doing like this then this then this there's three data flow paths
[306:13.64] arguably this is slightly less clean than the if statement but it is still bang bang bang right
[306:23.56] the the funny thing about this though is from like the alternative perspective here is if this is the
[306:30.20] baseline
[306:30.84] is early returns just a different templating language see you can't put a hook in between after the first
[306:39.08] return you can't like put a hook here right all hooks all data stuff has to be here that basically
[306:47.64] even everything below your last hook technically is the template so in a sense a different way to look
[306:55.80] at this is this is just an alternative template syntax that's not jsx but it's still templating
[307:00.36] because you still can't actually nest state down here so everything after this is technically the template
[307:08.12] right which means that effectively all you're doing is adding a additional way of doing the same thing
[307:15.72] you could have done in the template you're using statements instead of expressions sure but like
[307:20.44] you're doing this for convenience in terms of that the other problem with early returns
[307:27.96] kind of fundamentally again it doesn't impact react very much here is that essentially
[307:34.12] you're ensuring like can you mind the say the difference between these three
[307:44.04] when you have a condition
[307:45.16] early return if you change this block or you change this the text when something changes this
[307:55.00] is all that needs to change from like a fine-grained perspective it's only the condition needs to
[308:00.84] change the higher up you hoist this the more work you have to do you almost always want to actually
[308:06.60] push the conditional logic as far down as possible obviously not at this cost of you know
[308:13.40] breaking apart mutually exclusive paths necessarily but from a pure work standpoint this has no choice but to
[308:23.16] rerun the whole component this reach runs this and this reruns this
[308:39.72] so like like like how did i phrase it here this made me reflect how far reacting is where early returns
[308:48.28] lend to our contextual inefficiency it pulls decisions upwards where further
[308:51.40] farther positions are pushed down the more often they can be it might not impact react
[308:55.16] and doesn't leave a way forward um yeah certain folks on readability right i think you can agree the
[309:01.96] last thing with the hierarchy with all these inline turners it's very hard to compute your head what actually is right at a given time
[309:07.00] because they're not mutually exclusive is what i'd argue for some really is the right try out the
[309:11.32] advantage of a compiler these kind of options be not immaculate no one needs anything even if i take
[309:14.68] that at face value i wonder about the philosophically the compiler has limits and if we teach people that
[309:18.84] they don't need to think critically about this then are we teaching them the wrong things they lose the
[309:22.12] ability to understand the implication of their decisions readability is only compromised here because
[309:25.40] of syntax ultimately the early returns are just as restrictive as single return hooks can't be declared
[309:30.28] after the first return so we are gaining in hoisting and unwinding is mostly introducing a secondary
[309:34.68] statement syntax or template everything after the last hook was part of the template to me it's a wash
[309:39.00] on scaling cognitive complexity because the nature of the enhancement determines whether it aligns with
[309:43.64] the split or causes additional duplication that can be lead to mr lead to errors i often say premature
[309:48.44] boundaries are the enemy of future optimization and this seems like a way to add more with very little
[309:52.44] upside yeah because what i was going to put in here is he was when he was talking about like in the
[309:58.44] article like oh look how you don't have the null check data anymore well guess what you don't have
[310:03.32] the null check data in this example either right um because the conditions still exist obviously
[310:10.76] um it the reason i say it's a syntax thing is because uh it's it's messy right the ternaries are messy
[310:19.64] right but if uh i think peer wrote something here essentially they showed there is an example that showed
[310:27.48] do expressions somewhere down here yeah what was it do expressions uh no it wasn't that one but like
[310:33.72] even solids control flow basically uh alleviates the it's their the readability or svelte or views
[310:39.40] control flow it alleviates the readability it's just kind of interesting to me that like
[310:43.56] conceptually the the return single template languages actually have only a single way of doing
[310:49.96] this kind of control flow where react offers like a secondary way by allowing early returns
[310:56.60] but it also like pushes people to making inefficient decisions
[311:04.04] i think people like care about syntax though yeah i never said people were smart
[311:18.68] i'm sorry one of my pet peeves is is people over indexing on syntax like it's it's just like this
[311:27.80] it's it's the thing that you can just be like oh snap i changed it like it's it's
[311:42.84] yeah switch match sorry switch match a good example yeah um if create variables and the thing is we can
[311:52.68] actually create variables nested uh in control flow like if you do like a show you can actually create
[311:58.28] signals inside the show component callbacks
[312:01.24] but like yeah no yeah just create better syntax which is what i'm saying we we have right and i think
[312:16.52] uh templating language have and you can with js i'm just saying like it's it bugs me that when when the
[312:24.68] solution pushes you towards less efficient approaches it bugs me like it's like oh we
[312:30.12] should early return it's like no no we turn early return we should like step back and think about what
[312:34.04] we're doing here early return is like this is what i meant by not leading to a way forward
[312:38.52] you know maybe it doesn't matter react but this is always better than than this
[312:47.48] like mechanically like there's no like this is the absolute truth there there's a great follow-up
[312:53.00] here where's uh um was it i i tend to optimize for humans first then performance if necessary i
[313:04.04] value readably very highly if i can't understand your code then it's difficult to refactor introduce
[313:07.72] new changes and use your new trees bugs only optimize when necessary as an application developer
[313:11.16] agree as a framework author i understand that at some point you'll need to optimize and certain
[313:14.20] decisions make it nearly impossible to do so later luckily in this case i don't think it's
[313:17.64] a real readability concern it's a syntax problem um was that not the one no there's another one um
[313:25.00] there was a really cool discussion
[313:33.40] uh i'm not going to find it now this is making me very sad uh maybe it was after my my comment one
[313:41.56] of the responses to this one
[313:43.00] okay are you optimized code for the machine or for other humans start with the first get the second one
[313:49.88] is physical law and one is social you can't remove gravity but you can make efforts to stop people from
[313:55.16] falling off cliffs my concern aren't limited to machines some of it may be preference to early returns
[313:59.80] introduce the secondary where to do conditionals in the case of react they have additional hook rule
[314:03.16] consideration so it isn't just like we're dealing with a simple function
[314:05.96] they are just an extended part of the template as all hooks need to be declared before the first
[314:12.44] return it distributes the logic in a way that makes takes up more space some people do prefer having
[314:16.44] things more spread out but i like decisions reflecting where they sit hierarchically removing
[314:19.88] duplication and template be good not just performance for composition the article gave an example
[314:23.88] where only the success pass need to pass the title to layout but the separation reduced
[314:28.12] so the separation to reduce logic however the opposite is often true if the component used
[314:31.56] elsewhere you might need to apply the same logic across three templates now instead of a singular
[314:34.84] space let's pretend there is a toggle for mobile versus desktop layouts so missing things is just as
[314:40.44] possible with this approach except now the logic is not might not be in your view it's funny because
[314:45.08] like marco again yeah i know you guys don't think but marco 6 is like the exact opposite of this you can
[314:50.60] just nest state like inside the template and wizzy wig it as much as possible having seen that this is
[314:57.08] like the like it i love marco's capability maybe not always the syntax is that but its capability is
[315:04.60] like unparalleled this is like the exact opposite spectrum it's like the wrong direction
[315:08.60] interesting i prize the other way around catch humans in the social net to protect them from relentless
[315:13.16] gravity what i'm getting at is if you do things a bit differently you can align more with the physical
[315:17.56] environment rather than fight against it you sometimes don't need a net if falling is the way you get
[315:21.24] around like flying with a wingsuit in the canyon of technology not everyone coder knows how this
[315:26.12] this wingsuit properly but most know how to walk a bridge it depends on your peers
[315:30.04] which code style suits you best god i love analogy's
[315:32.28] right but i i actually enjoyed this conversation a bit because i i think this is sometimes my biggest gripe
[315:40.60] with react react's abstraction is just far enough from the underlying like dom you know reacts mutable
[315:46.84] re-render underlying dom is mutable it's retained mode you know like uh like that sometimes if you
[315:55.08] align with what you're building on top of more you can just get more out of it so like
[315:59.56] we make assumptions based on like this is what people think is convenient or what this and it's like
[316:08.28] we have to obey them this is why it's very important when we're building frameworks we
[316:11.80] think about developer experience on that but on the other hand sometimes these assumptions just
[316:14.92] aren't necessary and you shift things a little bit and you're like oh actually like this best practice
[316:20.68] actually is just not important at all anymore
[316:46.60] this is all i've been that's why the react compiler does that does there does it does
[316:50.12] the react compiler do that does it on does it look for the duplicated jsx
[316:56.84] ranges and then like dedupe some and then brings them back into here i i i hadn't actually seen that
[317:03.32] if it does that's that's definitely interesting i wonder what
[317:09.24] thing does it consider it too separate that it can't merge it back together
[317:12.68] okay just throwing that out there
[317:20.28] do you have an example example of what
[317:27.08] if you mean like my general statement about like aligning with the platform or not in terms of like
[317:37.32] architecturally it's it's like
[317:38.84] i don't think that's interesting because yeah i mean maybe there's a future in which they can
[317:48.84] solve that specific case but i think i think the problem is like i don't know it's just very
[317:53.96] interesting to take perspective of like the compiler will solve it all for us one day versus just like
[317:58.12] just being right the right thing i don't know um in any case um
[318:03.88] the reason i i thought this was interesting is because it reminded me of like
[318:11.96] again i'm gonna be missing all the freaking dan abramoff quotes
[318:28.84] this is so frustrating
[318:29.96] all the embeds that are missing now
[318:33.56] but it reminds me of this example i'm just gonna pull it up again
[318:46.12] dan showed some really convoluted logic where data is happening in multiple different places
[318:52.68] right and then he's like look if you have this crazy convoluted logic and you want to add more
[318:56.20] convoluted logic um you know okay so it's all the same he's like okay that's fine and then he's like
[319:02.36] let's add some more convoluted logic and look how hard it has been in solid
[319:08.04] now it's like this and like this and he breaks it apart right and then you know
[319:18.92] i was like why wouldn't you just if you just align it to the like and obviously there's some extra
[319:26.36] syntax here because it solves functions but if you just align it if you took his original code let me
[319:30.84] see here i yeah here you could this is the react version aligned i could take all of that crazy looking
[319:38.92] logic as long as long as i restructured it in a way that followed the data flow instead of the control flow
[319:44.52] you and yes i needed to duplicate some kind of check when i added the extra logic here like
[319:50.28] guess what count bigger than zero is in two locations but the end code of saying hey this is
[319:58.68] something else this is heading this is count these are the things i care about right i care about this
[320:05.32] i drive this out and i put it in is a billion times cleaner in the end then i don't even know
[320:11.48] what this code is doing like like dan was like proud of the fact that like he'd taken some really
[320:21.40] convoluted code to illustrate the point add a bunch of like logic and showing like how much harder to do
[320:27.48] it but like the truth is in solid you just want to written the polluted code in the first place and you
[320:34.04] just would have written this like i feel that way about the this early returns thing where people are
[320:39.80] like the the problem with this article was that the logic wasn't mutually exclusive in the first place
[320:49.96] switching to early returns pushed the person to make the right pattern but they could have just made
[320:58.60] that right pattern without their early returns right like yeah anyway
[321:06.12] yeah which is which gets me to the they really don't think of react in terms of state derived in
[321:17.96] effect which is literally their api which is what makes it so confusing right because let's let's let's
[321:25.40] let's go ahead a little bit here
[321:29.88] yeah i mean i guess i think in data flows always so like
[321:39.08] like i i i
[321:46.84] and it's probably the same reason i don't like the early returns because it's a control
[321:50.28] flow mechanism that's this is the exact same argument it's like data flow is in control flow
[321:55.16] right as it gets more complicated i still prefer data flow over control flow
[322:00.68] it's it's it's it's like it's just the way i think maybe that's not the way everyone thinks which
[322:06.52] is why we have such a fundamental thing i think it's being able to know like how to get this piece of
[322:13.16] information is more valuable than the imperative logic of how you got to it like oh if this condition
[322:20.04] then do these things or this thing i know people think of parity imperatively this and this and this
[322:24.44] but the data flow is actually like the ultimate truth and it usually when reduced down like an
[322:29.24] equation like with math is it can be more optimal
[322:32.12] so it's like it's like a win for clarity and a win for for performance
[322:48.60] um where was i going
[322:58.60] met dev that was cool um okay types this is an interesting question um but i actually
[323:16.20] if you have a i'm not too worried about that let's just finish to the last thing theo posted this
[323:23.40] thing which is funny because it's just a view
[323:46.20] the other one is that you can't do control flow and solid without verbat both syntax that's probably
[323:52.20] fair i but then i unless you just like jam it in and create memo but then like you don't want to do
[323:58.44] it that way so the solid doesn't want um control flow though really anyways so it's yeah i don't know
[324:13.24] like it's like it's one of those situations where i'm like not even remotely convinced at all like
[324:18.60] like it's probably true but it's like every every time there's an example it's just like
[324:25.88] yeah i don't know
[324:29.16] i think so well i mean if you watch with my stream i actually think ruins are not great because i actually
[324:40.68] i was thinking about that because we actually have this right if you've ever seen the solid
[324:44.44] solid labels thing right solid labels had it for like three years now it's basically it's ruins right
[324:53.40] effect signal blah blah right um the problem besides the teaching element of it which is like i was
[324:59.80] convinced swayed at nextconf towards it because i was like oh you know it wouldn't be hard we literally
[325:04.84] already have this capability but i actually i i forgot that i did a whole stream on revisiting
[325:11.64] reactive script where essentially i concluded that the api of here at least from my perspective it's
[325:19.00] finest felt likes it or whatnot isn't just like a preference dislike but actually um
[325:28.28] like gets in the way um like i i i'm actually like i it's it's it's kind of awkward that like i i was
[325:40.68] like sold on i'm like who cares i can just give it to him but i actually think it's probably bad that
[325:45.24] people would use this api like it went like sure they could but ultimately it's actually like
[325:50.12] i wasn't prepared to talk about this one i probably should talk about this again but i actually did a
[325:55.64] whole stream on it so i feel like like i i i one of those examples where i kind of like forgot that
[326:01.48] i had already like went really in depth and i i concluded that it was like
[326:05.72] which one was it uh revisiting solid script reactive compilation this this stream is probably
[326:25.64] yeah there's yeah there's yeah there i i can't remember what the conclusion was at this moment
[326:41.48] but i remember like it came back and we were talking about it um and i actually had a discussion
[326:46.36] with the core team about this you know like well why not we could just release it and i was like
[326:50.12] actually maybe i'll open this off screen so i can actually see this i i think if i look really
[326:58.52] quickly i can find what i was looking for
[327:04.84] give me two seconds sorry people
[327:26.76] oh damn it i didn't actually write it down i just said the exact same thing i just said
[327:30.60] yeah there's basically i have reasons that i don't think ruins are the direction
[327:44.12] that i'd want to go with solid from a technical aspect they actually get in the way
[327:47.88] um i can talk about it again but i think i covered it pretty good in the stream
[327:53.00] no like i think it's a bit covered in the stream but i actually i i actually think that like this the
[328:04.52] part of the syntax they compile away actually is missing like i i want ruins but then i still want the
[328:11.88] setter function like basically they can't solve the immutable read write segregation problem in a way
[328:18.36] that's satisfactory especially for deep nested reactivity which we covered mostly in the store
[328:22.92] and uh sorry in this stream so like giving people a syntax that's not expandable so the full capability
[328:29.88] solid is actually kind of backwards and so one of the other benefits would be so you can easily
[328:35.40] combine mutable and immutable reactivity which i'm now coming to realize or think is actually really
[328:41.48] bad idea um so like it's it's not just like i actually think it actually doesn't give the same
[328:51.88] capabilities it actually gets in the way yeah yeah yeah like the there's i i it's interesting i i think
[329:09.72] in an immutable world i might want ruins but in a in a mutable world i think it's not where i want to be
[329:16.44] and not just for d access and people can pick up this i actually think it actually gets in the way
[329:22.76] i i mentioned earlier from a compiler standpoint that like the one thing react can't do is is
[329:29.32] like matches the the mutable reactivity and yeah i mean there might be a ways around it but
[329:39.88] yeah okay uh let's go back here anyways theo showed this thing vine versus view with uh html template
[329:52.28] language um and it with component function stuff and he's like this looks so good right
[329:59.72] now it's just funny react and theo goes kind of it's more simply solid but interrupts with traditional
[330:06.76] view files yeah so if you don't like sfcs so then i i looked at the post engagement here and it's like
[330:12.68] angular does that that makes sense yeah blah blah blah why does everything have to be dramatic
[330:17.56] where is it because the view ecosystems underrated that's fair chest chest pain anytime i see anything
[330:22.76] things that's not jsx that's fine dev reacts blah blah blah there's something it's like oh it's funny
[330:28.36] these guys will do anything but write react bro they invented react something something react uh
[330:35.40] uh basically i've just kept on seeing these comments and quotes talking about react here and i was just
[330:42.36] like what why is why is everything react right um i was also on the svelte discord earlier and that you
[330:54.60] know i was noticing these people like complaining about the ruined syntax and it doesn't take long to
[331:01.08] i mean it's fine i don't need to pull up the reddit so not discord i was on the reddit i don't need to
[331:04.92] to pull up um reddit right now to know what i mean but just people going on and on about how svelte is
[331:10.60] react and all this stuff and it's just like
[331:12.20] i i yeah i i just don't
[331:18.12] do p i haven't decided if people are trolls or if they really believe that svelte 5 or the view
[331:28.04] composition apis like these frameworks attempts at copying react
[331:32.04] you don't need to pull up reddit period
[331:46.28] but like basically it led to this comment here which is syntax and js frameworks is overrated is
[331:56.20] is anyone actually surprised that the same people complained about sought ruins being too much like
[332:00.36] react now that they are migrating their apps or realize how much cleaner it is ruins are never about
[332:04.12] react yeah i just it's we've talked about this ag nauseam but like evan showed that cool thing where
[332:12.44] he basically exported solids uh signal api using view signals as a you know ruins i just showed labels
[332:20.92] which is basically ruins you know three years ago the the change the interrupt from a syntax level
[332:27.96] here even with react itself is so trivial but react behavior the reasons felt didn't come out a year
[332:34.68] ago when they showed the ruins the first time is because the behavior is the thing that actually
[332:38.84] matters the semantics the meaning of these statements there's a difference between it's a huge
[332:43.16] huge huge huge difference between hooks and and signals they do not run at all the same way and
[332:51.08] but you know people see hooks or they see uh function it's like oh it's react and it's like no it's it's
[333:00.04] actually nothing like react and i understand this is largely because what people get out of these tools
[333:04.84] they don't understand them in the same way as framework authors but like hearing about syntax endlessly when
[333:11.24] it's literally the thing that like like if you don't like solids functions wrapping them in dot value like view style
[333:19.40] i think i did it in the code sandbox took me 10 minutes like as a as an author or like a maintainer you
[333:27.40] don't want to necessarily offer like 10 billion different syntaxes i mean you could i think view
[333:31.40] was looking at that at one point but like the problem is you divide everyone like you can't make like there's no
[333:38.12] consolidated way of approaching it but there's nothing that stops people within their own projects
[333:43.96] to make these kind of decisions so it's like the funniest thing is now with this felt kind of backlash
[333:50.20] and i i guess we can see this better on blue sky although i don't think i'm logged in right now
[333:55.56] because i posted the exact same thing kind of as an experiment um
[333:59.40] let's let's let's let's see here which which post is more popular i have not looked at my notifications
[334:11.40] let's look my profile um okay twitter still wins
[334:17.72] but i i got to talk to rich basically the the idea here is that react they're still reeling from this
[334:24.84] whole thing right which is dumb to begin with i have whole conference talks about this literally
[334:29.08] what people should be looking at is and like the expression count like this stuff is rappers you're
[334:36.04] missing the script tag here so the script tag here would be the same as the function example but essentially
[334:41.24] this is one line this is one line they're identical oh yeah the typing a few extra characters doesn't
[334:46.92] actually matter at all so like i guess the the problem is when people see stuff like this versus
[334:52.68] this it's like oh wow the world's over and it's like maybe maybe felt deserves this because they're the
[334:58.20] ones who made a big deal about this versus this in the first place but it's also like this is not
[335:05.96] like when you consider the clarity the expressiveness of intent that can be added here versus typing
[335:16.28] five less characters or whatever it is it's it's kind of it's insane that this is even a topic to me and like
[335:28.20] i i it's just the thing we've been so spoiled down the dx train that like this is this is where we sit
[335:34.92] now like you know like i know i'm gonna sound like an old guy but like 15 years ago you didn't have so
[335:45.32] such good tooling and capability that like no one's gonna be i don't know i guess we had coffee script
[335:51.40] and coffee script let you type less so fair enough you know people have always wanted that kind of thing but
[335:56.84] it's like the interesting part about coffee six script to me wasn't the space syntax it was the
[336:01.32] fact that it had like arrow functions with bindings and like um classes if that was what you were into
[336:11.64] or you know like uh destructured destructuring like it had a whole bunch of stuff that came in es5 it
[336:17.96] wasn't because you got the type less there's always going to be a tool that lets you type less it's called
[336:24.04] marco um but like is is that really like what this is about
[336:37.80] people will die for syntax
[336:41.08] uh
[336:45.24] yes it was most people didn't want to yes hey jay
[336:50.92] yeah
[336:51.24] no i i am on a mac mac mac os machine
[337:00.84] sorry just catching up with chat here
[337:07.80] most people look at how things look yeah i know i know it's just
[337:17.24] we're at a point now where the looks are so superficial that you literally can be looking
[337:24.20] at the complete opposite thing and they look identical that it like i can say stuff like
[337:32.76] ruins are nothing like reacts felt three was just like react and confuse the hell out of people on a daily
[337:40.44] they don't think about how any of it works
[337:44.68] and they literally don't think about how any of it works
[337:48.76] yeah i mean
[337:55.80] i love this about javascript and about the web and that you can just pick it up and not worry about
[338:02.28] this stuff and just build something
[338:03.72] but yeah i mean
[338:10.20] maybe i'm in the wrong field
[338:11.40] i i literally only care about how things work
[338:27.16] what am i saying did i say ruins ruins i don't know
[338:29.80] you won't believe the imperial reason they tell us so they type fewer characters
[338:33.24] i compile this
[338:37.88] uh i didn't jay i didn't even realize how does commenting even work on on on on x
[338:49.08] like are they just is it enabled i didn't even realize there's a chat in here
[338:52.44] oh there is you're the first one
[338:55.64] well that's good i'm glad chat is enabled
[339:01.56] uh
[339:03.88] i don't know it's the syntax thing is just
[339:10.28] i mean it's something we have to live with i've known this for years that this is what people look at
[339:15.80] it's just like there are there are mechanical implications of syntax and back and forth they
[339:22.44] aren't completely separate they are related there are importance elements of it but like
[339:28.04] the number of characters you type is probably not an important element of it
[339:34.44] so yeah i don't know i'm i'm i'm i'm kind of at the end here i'm gonna wrap up here in a minute but
[339:46.44] um
[339:46.76] i don't know i maybe maybe i should pull up the the reddit i maybe this is the last thing that i want
[339:59.00] to look at here uh let's see if i can go r svelte
[340:08.60] all right look my notifications
[340:09.88] here here i i saw this thing and maybe this is where i'm gonna go with frameworks like homogenizing i
[340:20.20] believe svelte has no future god you gotta love reddit
[340:27.88] felt is my favorite framework but i worry about choosing as it could become obsolete
[340:37.88] svelte has compiler signal-based reactivity simple hml like formatting here's the thing solid has a
[340:44.84] compiler view is working on vapor signals being docked by everyone views graph is similar moving
[340:48.92] towards being completes being complete signals aren't they always complete signals
[341:01.88] yeah i mean i can understand the sting from evan's standpoint you know he's like they're called
[341:14.52] observables and refs and view signals came before the composition api like
[341:19.96] by several years but i i get what he's saying view has been doing this kind of reactivity under the hood for
[341:29.24] even longer um so okay let's key here
[341:35.08] yes state derived effect yes problems that when view eventually the compiler does felt have to offer
[341:44.52] and when view has acquired and how can they do something better with something with funding
[341:48.52] that looks different for your view except view has jobs and libraries that aren't abandoned that aren't
[341:52.28] abandoned where
[341:55.64] it's funny i'm sure like we actually get this question i think on solid discord is or reddit as well
[342:01.48] are people worried that after seven years or yeah svelte actually we should wish svelte happy birthday
[342:11.16] uh just a second github
[342:16.36] svelte is almost to the day i think uh svelte js maybe is almost to the day um eight years old
[342:28.84] i know there's probably a quicker way of figuring this out but what i'd like to do is go to what is it
[342:41.56] can commits usually like let's
[342:43.64] where is it no not the specific commit i need to commit history why am i not seeing it right now
[342:54.76] um
[342:55.48] i mean i can look back and releases am i not seeing it right now
[343:03.24] i'm just blind
[343:21.16] i'm just so blind right now why am i not seeing it
[343:27.64] commit
[343:28.92] the clock icon
[343:33.64] yeah it's because i'm like blown up i think that's the problem i'm like so blown up here
[343:41.08] there it is
[343:41.56] all right
[343:43.56] how many commits does svelte have roughly
[343:47.64] too far
[344:00.84] this is my hacky way of
[344:11.08] over 9 000. yes over 9 000. yes over 9 000. too far
[344:22.60] 95.
[344:38.68] november 15th 20 2016. next friday will be svelte's eighth birthday
[344:44.52] okay so are we worried that
[344:52.12] after eight years svelte's finally just gonna drop off it's so funny like when when
[344:59.32] when these companies picked up react when it was like a year old like what were what were they worried
[345:05.96] about you so yeah i mean i don't even know what i want to say about this it's just
[345:35.96] i i it's so
[345:36.92] i'm starting to wonder if
[345:40.68] people just want to give up
[345:45.80] like just like if if it's been so long that they're just like like
[345:58.84] you know it's kind of crazy that you've been able to use felt for years and years and years and years
[346:03.88] and years and people still treat it like this this new thing and i guess the problem is
[346:07.96] there's an expectation of adoption um to a certain degree that i guess
[346:12.12] frameworks now just don't hit because of how saturated it is right svelte's been doing pretty
[346:19.96] well for itself but compared to view or angular it's you know it's just a splash right solids it's like a splash of svelte's you know so to speak so like it's a and quick interesting is even a splash of solid like oh basically it's completely inverse based on the year that the framework was created
[346:37.96] but like there's still incredible amount of value in this exploration you know so like i don't know i hopefully hopefully hopefully hopefully people um
[346:52.68] can kind of see past this but i i just it's just more and more is this i bet you if i look here i'll see more comments about
[347:02.60] about react
[347:06.76] yeah no it's fine it's just i don't know it's
[347:21.32] i i i maybe it's just that the arguments and stuff get old every year you know you check in and see where things are at
[347:28.28] it's just
[347:33.80] it's an interesting question are we supposed to just like is evan rich and myself supposed to just like
[347:42.36] throw in the towel and just say like let's make the one super framework now we that we maybe mostly agree on a lot of stuff
[347:49.80] or is that how you react or do you have multiple options like is this a problem people are feeling
[347:56.68] now that things are consolidating that like they want to pick a horse and they can't make a decision
[348:01.88] so they're actually being a little bit like trying to go in that direction
[348:06.28] it's interesting because each maybe like maybe they're right like each framework has had its own identity
[348:14.76] previously and um yeah i mean i i never was really concerned with it initially because i was just
[348:23.00] building what i was building and in terms of signals but now like everybody has signals um i'm continuing
[348:29.08] to push in the directions look at the reactivity stuff you know uh felt very concerned with syntax for
[348:35.72] example um so like you know they spend a lot of time like that the one tempting thing about doing
[348:42.28] something it ruins was actually to copy svelte's ruins identically because like if if i if i want i trust
[348:47.80] that they've considered syntax probably more than i have um still like you know and you know views always
[348:56.76] thought about onboarding like how you know step up i mean svelte has two they both view and svelte actually
[349:02.76] invest a lot of time in docs and training and tutorials to get the front of the funnel which is
[349:07.88] great because it really helps with adoption but it and compared to react you know just starting that far
[349:14.44] behind so it's like i don't know like maybe is that what we're at that what people are looking for
[349:24.36] right like these things are still developing
[349:26.44] it'd be interesting to be able to share everything yeah i mean this is interesting it's hard though
[349:40.76] because the signal scheduling is different the the interesting part is one thing that's felt view
[349:45.72] and solid all have in common is our components are dom like we have dom elements like when i try to
[349:51.40] interact with react it's like react doesn't know what a dom element is but like like these all have dom
[349:59.40] elements but on the on the flip side i don't even think this is the problem do you know what i mean
[350:09.56] like people go oh the ecosystem is up it's not the ecosystem of libraries i don't think
[350:16.60] because i don't know i like there seems to be whenever someone's like oh why don't there this
[350:22.28] in solid i go looking like oh there is actually you know like this hasn't actually been a problem it's
[350:26.68] it's the ecosystem in terms of like hiring jobs training education like it's it's it's the there's
[350:33.80] there's a people aspect that goes beyond the libraries
[350:44.44] yeah like it's it's not that you can't find
[350:51.88] these libraries like oh there's more maybe more maintainers that are react library there's more
[350:56.68] choices but you like you have like i keep every week someone's like i wish i could use shad cn in solid
[351:04.20] it's like we have like three of them
[351:06.04] yeah i mean yeah i mean it's like my web component argument i it's there's just so many other factors
[351:24.68] i i don't know i i
[351:38.36] content creators yeah but like it's it's the it's the like everybody's standing on the cliff scenario i'll
[351:49.08] jump if you jump like it's it's that scenario
[351:53.64] no no sorry i didn't get to that honestly that's that's a whole other topic and i'm really actually
[352:02.44] trying to wrap up i'm sorry i keep on stringing on this point but i actually have to wrap it up i'm
[352:06.20] getting close to the six hour mark um in terms of yeah sorry let me see where the thoughts on back
[352:11.32] back pressure so let's see frame rate back pressure but all this yeah yeah i don't i i it's it's an area
[352:24.12] that i haven't been focusing or looking at at all really i've been my most recent exploration has been
[352:30.84] largely around um granularity projecting throughout the reactive graph so like trying to find ways to
[352:40.20] trying to reduce the amount of diffing needing but keeping things granular um
[352:45.00] yeah anyway uh so yeah
[352:57.72] yeah so i actually i haven't actually been keeping up with jaguar yeah it's all good um
[353:03.56] anyway i i'm gonna i'm i'm i'm gonna go um thank you all for for joining me and um
[353:18.68] yeah uh we'll we'll we'll catch you all soon again if not next week um probably actually wait
[353:24.12] for thanksgiving so we'll see hopefully next week we'll see i had my first thing i mean it's always this
[353:32.60] this stuff all right catch you all later
