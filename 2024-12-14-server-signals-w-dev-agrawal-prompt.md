---
showLink: "https://www.youtube.com/watch?v=zKXfcE7oTRY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Signals w/ Dev Agrawal"
description: ""
publishDate: "2024-12-14"
coverImage: "https://i.ytimg.com/vi/zKXfcE7oTRY/maxresdefault.jpg"
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
[00:00.00] All right. Hey everyone, welcome to my stream today. It's been a little while.
[00:08.64] Been a little while for the coconut water too.
[00:15.34] Thank you everyone for joining. Come say hi in the chat as you join in.
[00:23.28] I'm excited to be back. I've been, as I kind of told everyone earlier in the year,
[00:29.22] been doing a lot of research, a lot of exploration, and I feel like my last few streams,
[00:36.56] especially the end parts, have been pretty much only relevant to framework authors.
[00:41.46] I'm not going to say that's going to change necessarily today either,
[00:45.44] but I've had a lot more time to work on these things and flesh out the ideas.
[00:49.18] Really interesting stuff, at least stuff that excites me more than a lot of the problems I've been working on for a while.
[00:57.18] So that's not the interesting part of the stream today.
[01:00.72] The interesting part of the stream today is that we're going to have Dev join us.
[01:03.90] And that should be a lot of fun because he's been playing in an area that we've covered a couple times on stream.
[01:10.50] I've done some general topic stuff, but not an area where I have any sort of expertise, so to speak.
[01:20.56] Thanks for coming in and saying hi.
[01:27.06] Hello.
[01:30.86] Only relevant to cool people.
[01:37.92] Yeah, that's how I roll.
[01:42.10] But yeah, no, we're going to be talking about server signals, I guess, or this whole topic of having full stack reactivity,
[01:54.50] which I have to admit is not a topic that I have much experience with.
[01:59.00] Reactivity is mostly synchronous, right?
[02:02.80] It's all about synchronization.
[02:04.00] Synchronizing something that is async is like, it's like fundamentally a different zone or a different problem.
[02:13.06] You know, I've left that to the RxJSs of the world and to other solutions.
[02:17.26] But there is obviously some nice benefits to having kind of like a single mental model, I think.
[02:23.42] I mean, honestly, I haven't kept up with this too much.
[02:26.62] So Dev will have to tell us himself.
[02:31.08] Coming off his solid hack win, actually, the solid hack we ran actually recently finished, which was pretty cool.
[02:42.72] Honestly, I'm so excited whenever we can make it happen to the second one we've done.
[02:46.56] You get a big prize pool, great sponsors like Netlify and Sentry, and essentially, we're able to facilitate a huge amount of growth to the ecosystem this way.
[03:00.84] Even though, you know, not everyone can win, the benefit that comes from the projects and the people getting involved and getting in the community is immense.
[03:09.66] I can't really put a value on that.
[03:14.26] It's incredible.
[03:15.12] Anyway, we got 115 people here already.
[03:18.94] So maybe it's time to start rolling.
[03:21.96] Maybe just a second.
[03:23.84] I still use the Twitter app occasionally and Blue Sky, and we should probably tell people that we're live.
[03:34.04] Although I guess Twitter knows we're live because it literally has the live stream on Twitter.
[03:38.88] Maybe Blue Sky is the only place where I have to do it.
[03:42.82] More people coming in and saying hi.
[03:45.58] Hey.
[03:48.24] Yeah, don't forget to like and subscribe.
[03:54.98] And let me also get Twitch going here so I can see you all in the Twitch chat in case people like to subscribe and give you a shout out.
[04:07.96] Let me see here.
[04:09.28] Yeah, there we go.
[04:12.82] Some of you are already coming in from Twitch.
[04:14.94] All right.
[04:17.72] Just doing my normal beginning of stream bookkeeping here.
[04:23.24] Let's see if I can even share my screen.
[04:25.78] It's been so long.
[04:26.66] I wonder if it even works.
[04:28.80] Okay.
[04:30.88] It still works.
[04:34.62] All right.
[04:35.14] Live.
[04:41.10] All right.
[04:42.82] Perfect.
[04:43.38] I don't even.
[04:44.58] That's an interesting preview for my Twitch channel.
[04:47.82] This is a picture of me at like 32 years old.
[04:50.08] It's like.
[04:50.78] Not quite 10 years ago.
[04:53.30] Anyway.
[04:55.48] I don't know.
[04:56.82] Do I still look the same?
[04:59.80] All right.
[05:02.78] Let's get this going.
[05:04.06] Ring the bell.
[05:08.78] Yeah.
[05:09.08] You like that?
[05:12.16] Yeah.
[05:12.52] All right.
[05:15.78] Yeah.
[05:18.46] I wish I could just put this thumbnail again.
[05:24.02] Anyway.
[05:24.36] Let's.
[05:27.80] Let's get back to this.
[05:29.02] Let's.
[05:31.14] Let's actually.
[05:31.94] Let's see here.
[05:33.92] Oh, man.
[05:36.32] I used to be so much better with StreamYard.
[05:38.26] But now it's like.
[05:39.62] It's all good.
[05:41.14] Let's just.
[05:41.72] Let's get.
[05:42.96] Let's get Devin here.
[05:43.96] I think it's.
[05:44.60] It's time.
[05:45.12] Let's invite him on.
[05:47.18] So without any further ado.
[05:49.14] Welcome Dev to my stream.
[05:51.16] How are you doing?
[05:51.58] How's it going?
[05:53.82] I'm doing great.
[05:54.64] Thank you very much for having me on here.
[05:56.56] It's a real kind of a.
[05:58.72] It feels like I made it.
[06:00.70] This is a stream that I used to spend so much time watching.
[06:03.66] And now I'm on here.
[06:04.42] This is a long time coming.
[06:07.06] Honestly.
[06:07.94] You've been a member around our community.
[06:10.46] You've been doing great work for.
[06:11.58] For.
[06:12.36] Several years now.
[06:14.76] Honestly.
[06:15.58] People might not have realized.
[06:18.50] Dev was a big part of that.
[06:19.44] Strello demo.
[06:20.02] We did a few months ago.
[06:21.24] Plus all the.
[06:23.14] You know.
[06:23.48] Websocket work.
[06:25.86] The stream work.
[06:27.82] You recently did the.
[06:29.40] Stream library.
[06:31.04] You're going to have to explain all this stuff to.
[06:32.42] To us at some point.
[06:34.28] But.
[06:34.54] Definitely.
[06:36.12] Let's.
[06:36.60] Yeah.
[06:37.44] Oh.
[06:39.66] I mean.
[06:40.08] I can answer this one quick.
[06:41.34] With server signals.
[06:41.80] We attempt to do resumability.
[06:42.66] Like.
[06:43.04] Quick into signals.
[06:45.04] Actually.
[06:45.20] Maybe I'll let you try and answer that first.
[06:46.70] What do you.
[06:47.10] I mean.
[06:50.60] It.
[06:50.82] It could be.
[06:51.58] Honestly.
[06:52.42] To be honest.
[06:52.98] I did not think of that angle.
[06:54.46] Until.
[06:55.06] You came up with your server signals.
[06:57.50] As an architecture.
[06:58.52] Document.
[06:59.86] But until then.
[07:01.98] I did not think that something like this.
[07:03.58] Is like.
[07:04.22] Possible.
[07:04.82] Or something that could be done.
[07:06.24] Like explored in the future.
[07:07.54] But maybe.
[07:08.36] Yeah.
[07:08.62] Yeah.
[07:09.72] For what he's talking about.
[07:11.16] Is I did a hack MD.
[07:12.92] A while ago.
[07:14.12] This.
[07:14.92] It isn't the primary.
[07:16.02] Goal here.
[07:18.00] By any means.
[07:18.86] What.
[07:19.54] What.
[07:20.60] Sorry.
[07:23.08] What.
[07:23.38] Like signing into GitHub in the background.
[07:26.66] What.
[07:27.48] Quick does.
[07:29.44] Is fundamentally different.
[07:31.08] It is interesting though.
[07:32.70] If you.
[07:33.56] It's more the other way around.
[07:34.66] If you could apply.
[07:35.52] A quick like compiler.
[07:37.06] To server single.
[07:38.50] Signals.
[07:39.04] You could do.
[07:40.32] Crazy stuff.
[07:41.64] That.
[07:42.86] Um.
[07:44.14] Goes beyond what quick does today.
[07:45.64] Quick still.
[07:46.12] Kind of like.
[07:47.24] What our mental model is.
[07:49.22] For a single page app.
[07:49.92] The server is not stateful.
[07:51.74] If you combine.
[07:52.76] Quick's.
[07:53.74] Kind of.
[07:54.04] Compilation.
[07:54.94] With a stateful server.
[07:56.48] Um.
[07:57.40] It's like a.
[07:58.82] It's like an.
[07:59.36] I don't.
[07:59.64] I don't know what to call it.
[08:00.36] It's like a new live view.
[08:01.56] It's like.
[08:02.10] Granular live view.
[08:03.62] Yeah.
[08:03.94] Sorry.
[08:04.36] It took me a while.
[08:05.12] To find the exact.
[08:06.56] Thing.
[08:07.46] You were talking about.
[08:08.46] Right.
[08:10.10] So.
[08:10.78] This.
[08:11.88] This.
[08:12.16] This.
[08:12.42] This.
[08:13.46] It just posted.
[08:14.54] Um.
[08:15.36] Cause.
[08:16.98] I.
[08:17.50] I did.
[08:17.82] I.
[08:18.06] I talked about this on stream.
[08:19.14] Already a while ago.
[08:19.82] It was this idea of like.
[08:21.48] Taking something.
[08:23.48] That's like live view.
[08:24.46] And then.
[08:25.12] Looking at.
[08:26.62] Basically.
[08:27.30] Resumable.
[08:28.00] Um.
[08:28.70] Compilation.
[08:29.42] I've done this work before.
[08:30.32] When I was working on the Marco team.
[08:31.52] We.
[08:32.10] We were doing.
[08:32.72] Uh.
[08:33.26] Compilation.
[08:33.66] Very similar to quick.
[08:34.46] With the resumability.
[08:35.34] Cause.
[08:35.60] Basically.
[08:36.18] The work on the same sort of problem.
[08:37.60] And I realized that.
[08:38.54] That same kind of compilation.
[08:39.54] Might be really cool.
[08:40.50] Service signals.
[08:40.98] But I don't think that's where we are yet.
[08:42.26] Today.
[08:42.66] Um.
[08:44.30] Uh.
[08:44.66] But if you want to get.
[08:46.14] Really deep into it.
[08:47.04] Watch.
[08:47.36] I think it's a few streams back.
[08:48.84] When did I publish it?
[08:49.74] This can kind of tell you.
[08:50.84] Two months ago.
[08:51.96] So.
[08:52.22] A stream two months ago.
[08:53.54] I was talking about this.
[08:54.60] And.
[08:55.38] Uh.
[08:55.76] Yeah.
[08:56.78] Anyway.
[08:57.60] Uh.
[08:59.34] Sorry.
[09:00.22] Let's get back around here to you.
[09:01.64] Um.
[09:02.28] Yeah.
[09:05.14] I know.
[09:05.94] That went straight off the deep end.
[09:06.98] We'll.
[09:07.20] We'll answer more of those questions.
[09:08.50] A little bit further.
[09:09.48] Down.
[09:10.14] And yes.
[09:10.68] We will be talking about.
[09:11.64] Solid socket.
[09:12.90] And um.
[09:13.88] A few other things.
[09:14.90] But.
[09:15.12] I want.
[09:16.70] And solid.
[09:17.52] Solid events.
[09:18.56] Is that.
[09:19.04] That's the other library.
[09:20.12] You got.
[09:20.52] We'll.
[09:21.16] We'll talk about it.
[09:22.02] But I want to first hear about Deb.
[09:24.52] Himself.
[09:25.40] Because I want to.
[09:26.42] I think you guys.
[09:27.18] He hasn't been on the stream yet.
[09:28.44] And for you.
[09:29.94] All who don't know him.
[09:31.00] We need.
[09:31.24] We should all get to know him a little better.
[09:32.52] So.
[09:32.94] Um.
[09:33.88] How would you tell us how you got into.
[09:36.30] Like.
[09:36.76] Development.
[09:37.36] Or front end programming.
[09:38.34] In general.
[09:42.48] Yeah.
[09:42.88] Um.
[09:43.28] Honestly.
[09:44.04] It was a.
[09:44.86] Couple of my classmates.
[09:46.06] Who got there before me.
[09:47.42] Who.
[09:48.08] Like.
[09:48.54] Kind of.
[09:49.02] Found their way around Adobe.
[09:50.32] Adobe Dreamweaver.
[09:51.34] Built some nice websites.
[09:52.58] Uh.
[09:53.28] Won a web design contest.
[09:55.50] And then they were showing off.
[09:56.98] Like.
[09:57.22] What they built to our class.
[09:58.52] And.
[09:59.24] I saw it.
[09:59.98] I got immediately hooked.
[10:01.04] Like.
[10:01.52] I want to.
[10:01.98] Be able to build.
[10:03.24] Stuff like that.
[10:04.26] Like.
[10:04.98] Build those kind of cool animations.
[10:06.32] And.
[10:06.84] Interfaces.
[10:08.18] Websites.
[10:08.88] It.
[10:09.94] That's kind of where it all started.
[10:11.20] That was like.
[10:11.88] High school.
[10:12.56] Yeah.
[10:13.42] I was going to say.
[10:13.92] When.
[10:14.32] Yeah.
[10:14.58] When.
[10:15.38] When.
[10:15.80] When was that for you.
[10:17.42] Just.
[10:17.56] Not to give away your age.
[10:19.12] Or anything.
[10:19.58] But like.
[10:19.98] I use Dreamweaver too.
[10:22.04] But when I use Dreamweaver.
[10:23.48] I think it was probably a lot earlier.
[10:25.50] I suspect.
[10:26.18] Like.
[10:27.20] I was into Dreamweaver.
[10:28.78] Like in 2002.
[10:29.78] 2003.
[10:30.58] Yeah.
[10:33.00] This was.
[10:33.90] Uh.
[10:34.70] 2015.
[10:35.76] 2016.
[10:36.48] So.
[10:37.00] Like.
[10:37.34] Way after its age.
[10:38.98] But because.
[10:39.60] Um.
[10:40.44] Like.
[10:41.00] I was.
[10:41.38] Back in India.
[10:42.22] And in.
[10:42.78] In kind of.
[10:43.64] In the city.
[10:44.58] Where like.
[10:45.06] Tech doesn't really.
[10:46.08] Like.
[10:47.52] Basically.
[10:47.94] Tech.
[10:48.30] Tech lags behind.
[10:49.70] A lot.
[10:50.62] Like a few years.
[10:51.56] Half a decade.
[10:52.08] Or something like that.
[10:52.94] Where I come from.
[10:53.96] So.
[10:54.24] Yeah.
[10:54.84] Dreamweaver.
[10:55.40] What's still kind of cool.
[10:56.38] Uh.
[10:57.06] In 2013.
[10:57.94] 2014.
[10:58.46] And.
[10:59.36] Some of our books.
[11:00.50] Were talking about stuff.
[11:01.46] Like Dreamweaver.
[11:02.18] Uh.
[11:03.00] Like our.
[11:03.60] Our web dev.
[11:04.40] Our.
[11:04.72] Our.
[11:05.06] Um.
[11:05.42] Information technology book.
[11:06.88] Taught us how to build with.
[11:08.32] ASP.
[11:09.32] And VBScript.
[11:10.16] So that's what we were learning.
[11:11.38] In school.
[11:11.82] Uh.
[11:12.52] Yeah.
[11:12.66] Exactly.
[11:12.90] It was.
[11:13.76] Everything was lagging behind a lot.
[11:15.66] Yeah.
[11:16.58] I mean.
[11:16.88] That.
[11:17.06] That is.
[11:17.52] 2002.
[11:18.48] 2003.
[11:19.40] That was.
[11:19.92] VBScript time.
[11:21.42] And yeah.
[11:21.82] Yeah.
[11:22.04] That's.
[11:22.68] That's.
[11:23.72] That's fun.
[11:24.56] Um.
[11:24.86] Yeah.
[11:25.08] And.
[11:25.38] And around 2014.
[11:26.78] Around 2014.
[11:28.98] They changed the curriculum to PHP and JavaScript.
[11:31.02] So.
[11:31.62] That should.
[11:32.82] That's fast forwarded it up to like 2005.
[11:36.02] Yeah.
[11:36.94] Yeah.
[11:38.38] A decade after that.
[11:40.10] So yeah.
[11:41.68] No.
[11:41.96] Uh.
[11:42.26] I mean.
[11:42.54] Very.
[11:44.28] Very.
[11:44.90] Humble beginnings.
[11:46.68] Let's say.
[11:47.10] Um.
[11:47.80] So.
[11:48.24] But.
[11:48.54] Uh.
[11:48.86] Like.
[11:49.32] Where did you go?
[11:51.22] Where did you go from?
[11:52.02] Go from there?
[11:52.84] Yeah.
[11:54.62] So when I graduated high school.
[11:56.42] I had kind of a gap of like one year before I started college.
[12:00.98] And uh.
[12:02.24] Yeah.
[12:02.54] Old traumatic memories.
[12:03.56] Uh.
[12:04.44] So in that whole year I did.
[12:06.18] I kind of dedicated to like.
[12:07.38] Okay.
[12:08.24] I have to prepare for SATs.
[12:09.94] But that's not going to take too much time.
[12:11.30] I'm just.
[12:11.68] I'm just going to spend the rest of my time trying to like.
[12:13.74] Flesh out my web design.
[12:15.24] Web development skills.
[12:16.22] Um.
[12:17.56] I did a bit of jQuery that made sense.
[12:20.08] Uh.
[12:20.80] I tried to make sense of why JavaScript frameworks exist.
[12:23.46] I couldn't for a long time.
[12:25.16] I tried to make sense of like node and PM and the entire ecosystem.
[12:28.00] Again, it, it, it took me a few solid months to like get over that entire, um, the tutorial hell.
[12:34.88] Eventually I found backbone JS.
[12:37.42] So again, I'm still like, this is still like 27, 2016, 2017.
[12:41.92] I'm still lagging behind quite a bit.
[12:43.58] Um, right.
[12:44.78] But I found, I find backbone JS.
[12:47.20] Yeah.
[12:48.16] I mean, that's the path for it.
[12:53.78] Cause yeah.
[12:54.04] I was going to say backbone was pretty sweet.
[12:55.64] Um, again, I have a lot of experience with backbone.
[12:58.62] My, the startup I did was based on backbone and we, I, my, I, one of my early projects was working on my first AST compiler project was compiling, uh, back and forth in JSON and SQL queries and Mongo queries for an ORM built onto a full stack.
[13:16.38] Orm built on backbone model.
[13:18.34] So it was like, it's called backbone or ORM, but, but yeah.
[13:22.68] Okay.
[13:22.96] Yeah.
[13:22.96] Yeah.
[13:22.96] So meteor, I never got into because it was in that weird little time period when like meteor originally was really popular.
[13:30.30] I want to say between 2012 and 2015 ish.
[13:36.16] Like it was, it was in that gap.
[13:37.64] Yeah.
[13:37.94] Uh, so what was meteor for those who of us who aren't as familiar with it?
[13:42.98] Um, yeah, so you can think of meteor as like probably the first full stack JavaScript framework.
[13:51.98] Uh, I like to think of meteor as like the, the full stack experience that we are chasing yet to this day.
[13:58.62] Um, because meteor meteor was legitimately like some of the best experience that I've had building, like going from zero to 10, 200, very quickly, full stack, all in JavaScript, uh, without a bunch of like, um, like glue logic that we have to do with HTTP, with network, with state management, things like that.
[14:20.58] Uh, yeah, meteor has been, I'm, I'm pretty sure it has been a big influence in a lot of frameworks.
[14:25.82] It, it has definitely been a big influence in my entire kind of journey and, uh, how I look at frameworks and dev tools right now.
[14:33.38] So, and, uh, uh, going more in technical terms.
[14:38.16] So meteor was, uh, first of all, it, it locked you into MongoDB.
[14:42.78] So it said that, okay, we're going to use MongoDB.
[14:45.18] We have like our own little ORM on top of it.
[14:47.98] That's how you're going to build your backend.
[14:49.54] Uh, then it had something that we now know as a sync engine, which is basically it streams real time updates from the database to a client side, uh, like I'm in memory version of MongoDB where all the data is stored in client side.
[15:04.70] Uh, and from there it had reactive updates.
[15:07.70] So it had a system called, uh, tracker, which again, we now know as signals, um, yeah, angular meteor.
[15:15.18] So meteor was primarily a full stack framework.
[15:17.70] Uh, then it, like, as we got started getting like react and angular, it took more of a front end agnostic role in the sense that, okay, we're just going to expose all the data and you use it however you want.
[15:27.86] But it did have a templating engine of its own, which, which later kind of like branched off as an independent project called blaze.
[15:34.30] Okay.
[15:35.70] So that was kind of the stack of meteor.
[15:38.54] Yeah.
[15:38.94] Go ahead.
[15:39.74] Right.
[15:40.90] So the key part of it, it was the, at least my understanding is it had signals, it had reactivity primitives, and then you could basically wire the stuff all the way across.
[15:55.26] So you could, you could basically go, here's a signal that I could update in the client that goes all the way through to the database.
[16:02.94] Like it was like.
[16:03.90] Pipe belt almost all the way through.
[16:05.82] So not, not necessarily the signals, uh, the reactivity still was completely client side in like how solid or any other framework does it.
[16:14.54] Uh, the full stack part was completely hidden from us.
[16:18.06] It was, uh, it was a system called, it is basically like pub sub.
[16:22.30] So you would define collect a MongoDB collections that you want to expose to the client.
[16:27.82] And on the client, you just call subscribe to them and they were automatically subscribed to.
[16:33.10] And you had like a whole client, uh, client side in memory store, which had the same, uh, querying, uh, syntax as MongoDB.
[16:41.42] So the same queries that would go to MongoDB, you could use the query, your client side store.
[16:46.38] So it was offline first, like 10 years ago.
[16:49.58] It's like what, like the sync engines.
[16:51.34] In a sense.
[16:51.82] Yes.
[16:52.14] Yeah.
[16:53.42] Because everything was semi persistent connection.
[16:57.50] And like, if it was something updated, you could get live query updates coming
[17:01.74] from take to all the clients.
[17:04.38] Right.
[17:04.62] Like it had that web socket type of thing.
[17:06.62] Sounds.
[17:09.18] Yeah.
[17:09.34] Sounds like.
[17:09.82] Exactly.
[17:10.30] Yeah.
[17:10.54] Yeah.
[17:13.34] So this is.
[17:13.90] Over web socket.
[17:14.70] It sounds like, okay, here's a collection, add something to it, remove something from it.
[17:18.38] And then on the client side, it would, uh, it would expose these queries as signals that
[17:22.30] you would then consume in your templates.
[17:23.82] Yeah.
[17:24.78] A bit before it's time.
[17:25.66] Yeah.
[17:25.90] We're talking, I mean, this is the thing you gotta, I don't think people understand enough.
[17:31.90] And I like hammer on over and over again.
[17:33.90] When.
[17:35.02] Before 2009.
[17:37.50] There wasn't really much going on in client side JavaScript.
[17:40.38] There's like jQuery.
[17:41.42] People were kind of like, uh, you know, uh, moot tools, like a bunch of these like tools
[17:45.74] that let you like manipulate the DOM and be able to get the UI going.
[17:48.86] And you'd add some JavaScript.
[17:50.38] Um, but at a certain point, this just started accelerating.
[17:54.62] Right.
[17:54.94] And we got it started getting frameworks and people trying to build all the client side,
[17:58.14] like logic in the client.
[17:59.18] And between.
[18:00.62] I would say 2010 and 2014 basically react is what kind of ended this time period for better
[18:09.10] or not.
[18:09.34] I don't know if that's intention.
[18:10.30] There was so many different approaches people were trying to take to this problem.
[18:16.54] Um, from like heavily reactive stuff, you know, things like knockout to, um, Marco came
[18:22.22] out during that thing.
[18:22.86] So, uh, they had, you know, islands and partial hydration.
[18:27.34] We had meteor, which was doing this kind of almost, as you said, almost like a sink engine
[18:32.62] kind of thing.
[18:33.98] Um, uh, what other technologies from that time period, uh, out of order streaming,
[18:38.06] another one of those Marco, uh, things.
[18:40.46] And there was template engines that came almost like pug, like things that came right in node
[18:44.62] that did out of order streaming.
[18:46.06] Um, so like all these technologies trying to bridge the client server gap and then react
[18:50.78] one and everything else disappeared.
[18:52.46] Um, so now 10 years later, people are trying, trying stuff again.
[18:59.26] Uh, it's, it's, it's interesting.
[19:01.90] And you're going to talk about before, but before it's time, uh, RPC actions,
[19:07.02] they were in meteor, like meteor had RPCs, uh, meteor was one of the first frameworks to
[19:13.10] adopt craft QL and they believed in graph QL so much that they completely abandoned the,
[19:18.46] the team abandoned meteor and started building Apollo.
[19:21.58] So Apollo team is what meet your team was.
[19:24.62] They just completely just meteor because they believed in graph QL and yeah.
[19:28.38] Uh, and obviously react.
[19:30.06] Yeah.
[19:31.74] Yeah.
[19:31.98] I mean, because the reacts handling of the client side was so good comparatively that, you know,
[19:38.06] it is interesting though, because I mean, part of it is on the software side,
[19:43.42] like on the like programming, react mental model, all that side.
[19:46.86] The other part of it is the changes of infrastructure that happened at that time
[19:51.90] and the changes in how we deploy.
[19:53.98] Because coming out of 2007, 2008, ish, I want to say into up to about 2013, 14,
[20:02.46] what you had was a lot of people going on like AWS, um, getting a bunch of micro, um, EC2 machines,
[20:10.46] and basically setting up like these microservices with like, uh, auto scaling groups and stuff like that,
[20:15.90] where the, you start just getting all these little, um, machines and you're just building out all these
[20:20.70] new services that people were breaking down their monoliths, but they were still managing all this stuff,
[20:25.18] you know, um, something, you know, Kubernetes started coming out in that time period.
[20:29.26] But the flip that happened in 2014 ish was that serverless became a thing.
[20:35.18] And that, you know, that's companies like Rissell and Netlify, um, got started almost immediately
[20:40.54] at that time period.
[20:41.58] Um, and I feel like it was both react and that, which changed the whole narrative because suddenly
[20:49.74] sure, when we were breaking down the monoliths and going through the little micro things,
[20:52.94] they were throw away, right?
[20:54.22] But to not even have the machine abstraction anymore, it just kind of got completely away from us.
[20:59.50] And I think the combination of those, both of those factors is what shut down almost everything
[21:05.26] that didn't fit the mold, at least on the JavaScript side.
[21:07.82] Because I guess the third aspect is JavaScript was accelerating so quickly
[21:11.58] that we had gone to a point where with JavaScript, heavy applications, you could do things that you couldn't do.
[21:18.22] Um, in a different language, right?
[21:21.18] The combination, the back and the front end, because you can't get those back end languages
[21:24.62] on the, on the client meant that you have this, this weird storm where the, the infrastructure
[21:30.78] has a reason to push this way.
[21:32.22] Um, the, there's a mental model that seems attractive because we need to basically have this capability,
[21:40.38] would you ask if we couldn't have before?
[21:41.74] And then suddenly everything else is going to get squashed.
[21:44.70] I don't know.
[21:45.34] That was, yeah.
[21:47.26] Yeah.
[21:49.42] Infrastructure impacted Meteor, uh, in other ways as well, where like the first thing is obviously
[21:55.18] Meteor coupled to MongoDB, which at the time was probably a good choice because MongoDB was getting
[22:00.38] very popular.
[22:01.02] there, but then there was kind of a, a heavy backlash against MongoDB because, uh,
[22:05.98] because the people who completely did SQL suddenly realized that, oh, we want all the guarantees that
[22:10.94] SQL, SQL gives us.
[22:12.46] So they've started moving back towards SQL databases.
[22:15.98] Um, and the other thing was the coupling to web sockets.
[22:19.42] Meteor very much relied on a stateful connection.
[22:21.98] So as lambdas and stateless solutions are, uh, are getting more popular, Meteor is seeing less adoption
[22:28.46] there.
[22:28.94] So it kind of got like, kind of like shoehorned itself as a, a prototyping tool or like a very
[22:35.42] early stage.
[22:36.06] You cannot, like, you cannot really build something to scale with Meteor.
[22:39.90] Interesting.
[22:43.34] Yeah.
[22:43.58] No, I mean, didn't come here to talk all about Meteor, obviously, but, um, Meteor has an interesting
[22:50.14] place in the history of, of stuff.
[22:51.66] And now even the history and the reactivity and signal side, because again, it wasn't a
[22:54.70] framework that I paid any attention to, but like, I know like Evan from Vue paid more attention to
[22:59.18] Meteor.
[22:59.58] So when you hear him talking about the history of signals and his perspective on how this evolved,
[23:03.34] Meteor plays a big part of it, where for me, it was like a, like a footnote.
[23:07.34] Um, but yeah, Evan also worked on the Meteor team if I remember.
[23:11.50] Yeah.
[23:12.30] Yeah.
[23:13.10] Um, I believe so.
[23:14.70] So, uh, but for you, it wasn't just the reactivity.
[23:20.06] It was this full, full stack thing.
[23:21.90] Um, and you, yeah.
[23:23.82] So Meteor was the first time I had built a full stack application.
[23:27.66] And after Meteor, like I started looking into, okay, how are like actually people doing this?
[23:32.78] And then there were like mean stack, modern stack where the API, like you're building a
[23:37.58] backend API and you're consuming it in your front end.
[23:40.38] And that seemed like very weird to me.
[23:43.42] It's like, okay, is this how people are like, you're writing API endpoints, you're doing all the
[23:47.58] ceremony and then you're doing extra ceremony, building these services or these like abstractions
[23:52.54] on top of your API layer, just so that you can consume them in your, uh, front end.
[23:56.86] And that just seemed like a bunch of extra overhead, but that just seemed to be the
[24:01.42] industry standard for, for a very long time.
[24:04.14] Um, I see.
[24:06.06] Yeah.
[24:06.30] Yeah, yeah, no, that's true.
[24:08.14] Right.
[24:08.38] It wasn't until it's, it's kind of a funny thing, right?
[24:11.42] Because it, it's that same kind of push time.
[24:13.74] Like we, the funny thing that serverless has done again, um, only recently is a return to
[24:21.26] monoliths, um, conceptually.
[24:23.50] Right.
[24:23.82] Whereas for a while there, you, when you built an app, you were like, you know, I'm
[24:29.50] going to build the client app and it's going to talk to 10 different API sources all directly
[24:35.50] from the client.
[24:36.22] Um, and because of, you know, whatever scaling with single page apps, all that kind of stuff,
[24:42.06] we're kind of done full circle again.
[24:44.06] And this is why you feel like everyone's trying to chase meteor these days.
[24:47.26] Yeah.
[24:50.06] I mean, in the sense that it was a good idea to try to keep the, keep the like single page
[24:56.54] app, keep the client side app completely separate.
[24:58.78] Um, but back then, like people were also splitting teams that way.
[25:02.70] Like, okay, here's the front end team.
[25:04.06] You only write the client side code.
[25:05.58] Here's the backend team.
[25:06.46] You write all the server side code.
[25:08.14] So then maybe it made a bit more sense, but, uh, then JavaScript on the server server,
[25:13.58] serverless.
[25:14.14] Yeah.
[25:14.38] Because all of this, um, like front end, front end people or people who know JavaScript.
[25:19.34] Now we want to write backend code as well, because we can.
[25:21.90] And like backend and JS, it's pretty fast.
[25:24.62] It's feasible.
[25:25.82] We have a pretty good ecosystem.
[25:27.82] So yeah.
[25:29.34] And then the, and then the company's businesses, they started combining the teams.
[25:33.10] They're like, okay, instead of front end team, you're a full stack team.
[25:35.90] And, um, like we are, we are also doing our backends in JavaScript.
[25:40.62] We are not going to use a separate language.
[25:42.22] It's easier.
[25:43.02] It's cheaper to have a single team that does everything.
[25:45.34] Um, and that, that kind of helped this push as well, where, uh, because now the companies
[25:52.06] want single, a single team to build, to be building the front end and backend together.
[25:57.34] We want tools that help us build both together instead of separately.
[26:00.94] Yeah.
[26:02.06] That makes sense.
[26:03.34] Yeah.
[26:03.58] It is an interesting ship to have watched that whole cycle happen.
[26:06.70] Like what multiple times now, but okay.
[26:09.58] Okay.
[26:10.46] So, sorry.
[26:15.90] Always the best questions.
[26:18.62] I've held that title.
[26:19.58] I've held that title a couple of times.
[26:21.74] Webmaster.
[26:23.02] Yeah.
[26:23.34] Oh man.
[26:24.86] Um, as part of student organizations, trying to maintain their websites.
[26:30.62] Um, but, uh, okay.
[26:31.42] Uh, let's, let's look at.
[26:32.94] Okay.
[26:33.82] So you're into meteor and stuff.
[26:35.90] So this is like 2018 meteor time period for you.
[26:39.02] Mm-hmm .
[26:39.58] So where did you, where did you go from that?
[26:41.18] Where did you go from there?
[26:43.90] Yeah.
[26:44.22] After that, I, I looked at react.
[26:46.86] I looked at view.
[26:47.90] I stuck to angular a bit.
[26:49.50] Like, uh, so the first framework I actually had like tried out was angular.
[26:53.98] The new angular when it first came out.
[26:55.66] It's angular two.
[26:56.30] Two plus.
[26:57.42] And then four because they skipped three.
[26:59.18] Um, so two and four is what I was building around with.
[27:02.14] I probably still have a to do app on my GitHub somewhere, which I, uh, built at that time with angular.
[27:06.86] Um, it also introduced me to typescript.
[27:09.90] It introduced me to concept like dependency injection.
[27:13.18] Um, so also like having the experience of typescript that early was pretty helpful.
[27:18.38] I, I never had that curve of, okay, I like JavaScript.
[27:20.86] I want to keep it.
[27:21.50] I don't like this extra ceremony because I don't, a little bit of typescript and I immediately saw
[27:25.90] the benefits.
[27:26.94] Um, it was very helpful, like very early in the career.
[27:30.78] Um, then, uh, over time, like I, I also saw nest, which is kind of like a backend framework.
[27:41.10] That's very much inspired by angular and dot net spring MVC, things like that.
[27:45.26] So I was very much in the, like, okay, here's a full blown framework that does everything.
[27:49.26] This is how we build things.
[27:50.38] Um, and then around, uh, in 2020, I started where I got a new job.
[27:56.62] And the first thing that, uh, the first project that I was put on is migrating a huge angular
[28:03.98] one code base to react.
[28:05.42] Okay.
[28:07.58] So that was fun.
[28:08.78] That was where I spent a few months.
[28:10.54] Yeah.
[28:11.02] That was a lot fun as a great word to describe it.
[28:14.22] My, I tried to argue that, Hey, let's migrate it to angular two instead, instead of react,
[28:18.94] because, uh, at the very least going from angular one to angular two, there's a lot of concepts that
[28:25.26] carry over, so it's, it's mostly like a change of syntax, uh, a change in like slightly how we set
[28:31.42] up things, but not, not, it doesn't change how we think about like how we organize our concepts,
[28:36.78] but moving it to react was a much, much bigger, uh, deal.
[28:42.14] Uh, but I did get a decent bit of experience and from that point on, uh, all my like real projects
[28:47.98] were using the act.
[28:48.86] Nice.
[28:49.74] Yeah.
[28:50.78] That's an, that's interesting from meteor to angular to react.
[28:55.90] Um, yeah.
[28:57.66] So, but your post 2018 react, so you came in like hooks were already there, right?
[29:04.30] You were like post class component.
[29:06.86] Hooks were already there.
[29:08.22] Yeah, we, we use class components quite a bit because I, I was still, so this, this job
[29:14.38] was still like in a university, uh, um, like setting, which means again, everything is still
[29:20.46] lacking behind.
[29:21.10] It's not lacking behind as like, as bad as, uh, like back in my hometown, but it's university area,
[29:28.46] things, uh, still lag behind quite a bit.
[29:30.38] So we started with class components, eventually like midway through the migration, we discovered
[29:36.22] hooks and we started using hooks, uh, a lot more.
[29:39.34] And, uh, yeah, that's when like, I, I used hooks for maybe one or two weeks and I'm like, okay,
[29:46.22] there's something really powerful here about how you compose logic with, uh, with these hooks.
[29:51.34] Yeah, no, that, that makes sense.
[29:55.98] It's, it's, it's always interesting to me when people come from different frameworks,
[29:59.50] saw hooks for the first time, what their, what their impression was.
[30:03.02] Cause like, it was funny.
[30:05.10] Cause I, my reaction hooks are probably different than pretty much everyone else's.
[30:09.50] Um, so it is, I love always hearing that kind of origin story.
[30:14.54] Okay.
[30:14.94] So let's, let's, let's fast forward your reactive.
[30:18.30] How, how, how did you end?
[30:21.50] And, and, and that was, let's say 2019 ish or something 2018, 2019 ish.
[30:27.18] Um, this is 2020, 2020, 2020, I started working on the migration and then up until 22, uh, 2022,
[30:37.98] I was working on like the same job, but a couple of different projects, but they were all react and
[30:43.58] express JS to express on the backend.
[30:45.74] Yeah.
[30:46.30] Okay.
[30:46.62] So how in two years do you go from being this reactive pro angular migrator to building
[30:54.70] web socket and event-based systems in solid?
[30:58.06] What, what, what, what, what, what I think that maybe that's some more interesting journey to
[31:03.42] some of the audience.
[31:04.30] How, how did that happen in two years?
[31:06.46] Definitely.
[31:08.30] Yeah.
[31:08.46] Uh, so, uh, late 2022 and early 2023, um, is when I, like, obviously server components happen.
[31:17.18] I was looking at server components.
[31:19.42] I was looking at, uh, solid start.
[31:21.42] I, that's around the same time that I picked up solid start as well.
[31:23.98] Uh, I'm, I'm, I don't exactly remember what got me interested in solid JS.
[31:28.54] Um, may, but I was definitely around your students, like late.
[31:33.66] Yeah.
[31:33.90] Theo, probably Theo, and then eventually your stream.
[31:36.46] So in 2022, that's when I started like, uh, learning, learning more about the kind of
[31:42.46] modern framework ecosystem, as I call it, because up until like, up until that point,
[31:46.94] it was literally create react app.
[31:48.22] It wasn't even like next year.
[31:49.58] It's our remix.
[31:50.30] I looked at remix.
[31:51.10] I'm like, okay, this looks interesting, but I never got into it.
[31:53.42] Um, but then I started looking at these meta frameworks and they were like, okay,
[31:58.38] this is, these are solving the problems that I've always kept running into.
[32:02.94] So from TRPC to remix data patterns to then server components.
[32:06.94] I made a video about like, why I think server components are exciting.
[32:10.62] Um, but, uh, and at the same time I had spent a decent amount, because I spent a lot of time
[32:18.70] with meteor.
[32:19.50] I had spent a decent amount of time with socket IO.
[32:22.22] Um, and like trying to build some real time stuff with that.
[32:26.38] I, I always felt like there's something more that can be done in this real time space.
[32:30.78] I just haven't spent enough of my own time, uh, to look into it, but I'm also not looking.
[32:36.22] I'm also not seeing anyone else do something with this.
[32:39.98] And then in 2023, I saw your steam with a stream with, uh, Donnie about live view JS.
[32:46.86] Right.
[32:47.66] Yeah.
[32:47.98] Which was live use port into JavaScript.
[32:50.54] That's where a lot of this originates from, because I saw live view JS and, uh, that's when I
[32:56.94] like actually fully understood what live view does.
[32:59.66] And then I noticed that, okay.
[33:01.18] Live view JS is very powerful.
[33:03.18] It has a lot of, uh, those capabilities that I want, but it's DX is like two, like two steps behind.
[33:11.34] Like we have already gone past like two steps in the DX or we have evolved like, uh, twice.
[33:17.34] Uh, two, two different iterations.
[33:19.10] Live view is behind in that terms, but it's ahead in like some other in capabilities.
[33:25.58] Like for example, rendering over web sockets.
[33:28.38] Right.
[33:29.26] And, uh, because live is very much class components.
[33:32.54] Yeah.
[33:34.38] And more so live view has a, sorry, here's a link to the original stream that I did with Donnie.
[33:39.66] Live view has this consolidated model that actually was kind of a lot simpler to follow.
[33:46.14] You just like update the state on the server and everything updates.
[33:49.74] There's none of this like crazy.
[33:52.62] Like the developer doesn't really have to worry about the communication as much.
[33:55.82] Right.
[33:56.06] And it was crazy.
[33:57.90] Exactly.
[33:58.54] Yeah.
[33:58.78] Yeah.
[33:59.82] And in that sense, it's, uh, it's pretty nice, but again, if you're just building a react app,
[34:04.70] if you don't have to worry about the server at all, you get the same experience.
[34:07.50] Right.
[34:07.74] That is true.
[34:08.54] Yes.
[34:08.78] Um, yeah.
[34:11.18] And then obviously with live view, all the state lives on the server.
[34:14.22] So you don't really have instant interactions.
[34:16.46] Everything goes to the server.
[34:18.06] Everything has this extra bit of network latency.
[34:20.70] So there's limitations in those sense.
[34:22.54] Uh, but just this capability of, uh, like having the exact same DX that you have on the client side,
[34:29.58] but also having like the same DX for the server state is what actually hooked me in.
[34:34.14] Uh, and then the next time I saw how these could connect was server components and server functions,
[34:40.22] where the kind of the boundary between the client and server was like almost completely
[34:45.50] eliminated and like resorted to compiler and a little bit of a runtime shim.
[34:50.22] So those, those were the two things that I was trying to connect is first of all,
[34:53.90] how can we get the DX of live view or live JS and how can we get it, uh, along with something
[35:01.02] like user or use client where we can just cross the boundaries whenever we want.
[35:05.34] Okay. I mean, that's a good setup for, for, for, for, for where you, for the projects you've been
[35:12.78] working on because you've, you've made quite a few in the last little while.
[35:16.30] I mean, you've been involved in the discussions, um, with the server signal stuff, but you've been
[35:22.30] actively on Twitter posting little, little, little hints and stuff and being like,
[35:27.34] what would you think about signals on the server? What would you do about that? So how long have you
[35:32.70] been working on this signals based approach? Cause I remember when we first started talking,
[35:37.50] you were still very much like on the react server component side of the spectrum and, but a lot more,
[35:44.54] your recent work that I've seen has been on the signal side, uh, how long you've been working on the
[35:47.66] signal solutions for, um, I think it's, it's probably been about like four months since we first started
[35:55.74] talking. So that's, that's another time I started working on this. Um, yeah, yeah. I wanted a more,
[36:03.66] or I, I was thinking of like react centric models as well, but, uh, the first thing is that react
[36:09.26] doesn't really have a concept of global state. Like all the state is within the com within components.
[36:14.54] And I wanted something where I could like have some global state and I can easily connect,
[36:18.30] um, like two different clients together. Right. So you, in react world, you essentially
[36:24.30] have to build your own state management solution in order to like accomplish the same sort of thing.
[36:30.22] I think that's a common trend actually having talked to a lot of library critters. He, he talked
[36:34.70] to like even Tanner, he's like, I'm building, you know, you're building a router, but no, you're actually
[36:38.06] making external state management. Like everything's external state management. It's like building
[36:43.58] some random library. It's like, no, it's, it's external state management. Okay.
[36:47.90] I mean, so they, they, they figured it out and they like put it into the, its own package now,
[36:53.42] right? Transact store, which is their own version of signals to work with all with, with the router,
[36:57.98] with forms, with everything else.
[36:59.42] Exactly. So it makes, it makes a lot of sense. We actually had talked about using solid as a base,
[37:04.70] but the 2.0 reactivity was about two years too late. Like I'm still working on it.
[37:10.06] Yeah. Um, but okay. I think we're probably at a good time where we could start, uh, demoing some
[37:17.26] stuff, show off some projects. Uh, uh, you have a few of them, right? Or a couple of them. What,
[37:22.46] where do you, because you did solid event, you did solid socket. Where do you want to start?
[37:27.50] That's it. Uh, we can start at solid sockets and that's what, uh, all the, um,
[37:33.02] um, a setup has been for. Okay. Okay. Yeah. Cause I, I am, I know there are people who are curious
[37:40.46] about solid event, uh, at least, um, an overview of how that fits into the puzzle as well. But yeah,
[37:45.90] let's, let's look at solid socket here. I can add this to the stage.
[37:49.34] So we have a counter.
[37:54.06] All right. So classic counter. Uh, never hurt to build a counter. Use counter. That's like the
[38:00.94] first thing I see. I see use counter. Why are we, why are we using it? So this is, uh, like,
[38:07.50] what some people recognize as a custom hook. So inside this use counter, we create a signal. Uh,
[38:14.38] we have our functions. So there's a very specific reason why I did this. I'm gonna, like, it's gonna,
[38:19.82] it's going to make a lot more sense in a bit, but right increment decrement, uh, nothing special there.
[38:25.74] Okay. Um, but so if, even if I take this counter out or like take the signal out here in the global
[38:34.46] scope, and I'm actually going to just create a new counter so that we can demonstrate that we have
[38:43.02] global state. I probably don't need to do it for this stream. I needed to do this for like people who
[38:49.50] don't really get solid JS, but okay. Global state, right? That's what I wanted to show first. Right. Okay.
[38:57.82] So the basic idea of solid socket is that you can take any file. You can annotate it with use socket.
[39:07.02] And now this file runs on the server. Uh, and anything that we export here, anything that are like,
[39:15.18] we import on the client and try to talk to, it's going to happen over web sockets.
[39:19.90] Uh, the exact mechanics of like, what is going over web sockets? How are we talking to it? Where,
[39:25.34] how is the state, uh, being carried over? We will, we'll get to it. We'll get to that soon. And all of
[39:31.02] that is like basically implementation details, but that's the idea of use socket at least. Right.
[39:37.26] Interesting. Right now this, this doesn't work at all. Like every, everything is broken.
[39:41.10] Yes. Uh, because one additional thing that we need to do is we need to wrap, uh, the signal that we are,
[39:48.06] we are returning from here in this create, uh, create socket memo. The naming is subject to change.
[39:58.86] Okay. But all we need to do is whatever signals are being returned from here, they need to be wrapped
[40:05.02] to it. Uh, just like this, this wrapper. It's a derived value though. That's what you call it memo.
[40:10.30] You call it a memo. Cause it's derived, right? Because essentially it could be count,
[40:14.46] but it can be count times two. If you, if you wanted it to, it's basically a function. Okay.
[40:21.26] Okay. So now here's the trick. If you, if I open it in a new tab, so this is the key here, right?
[40:38.78] So yeah, state is on the server, uh, website, we, the, both clients are receiving updates of when count
[40:49.98] changes and both clients are like updating the same state because this is global state on the server.
[40:56.86] There is a question here. Don't increment decrement need to be wrapped since they also call the signal.
[41:05.34] Uh, these are not signals. These are just regular functions. These are setters are don't need to be
[41:12.46] wrapped. Uh, setters are actions. You can think of them as actions, uh, only signals. So when you're reading
[41:18.14] from a reactive value, that's it. I see. So the, the idea here, just, just so I'm following here,
[41:26.14] I will get a little mechanical so I can understand that better. You're exporting a function that
[41:33.74] nothing inside this function gets called on the client and be, and closures. None of this comes,
[41:42.06] basically nothing here comes on the client. So this is basically a server function that has a special
[41:49.02] sterilization format for the return values and including the ability to pass back a callable
[41:58.70] function. So the client can go, Oh, Hey, this is a function that I can call and the ability to have a
[42:07.02] signal that you can read. So it's like, that's the, that's the mechanics. And I guess conceptually you
[42:13.42] could pass back a normal, like number, like five as well, if you really want to, it just won't do anything
[42:19.02] because it's a, it's basically, it basically adds function, uh, serialization. Um,
[42:29.82] and it adds signal serialization over, over, over, um, use, use server. And it also uses a
[42:40.62] web socket to do all the, all of this communication. It's like, uh, cause this trying to get my head
[42:47.74] because this is one of the questions, like at one point someone said, can you use use server with web
[42:51.26] sockets? And I was like, sure. It's just the underlying protocol. Like we don't actually care if we use,
[42:54.94] um, fetch or if we use a web socket to do the communication, what this does more than that,
[43:00.46] in that it adds serialization for signals and serialization for functions, which is interesting
[43:06.62] because. Yeah. You could, I think it's, yeah, it's more important to look at as like, uh, serialization
[43:13.90] as a serialization for, for functions that exist within closure scope. So you can see that I've defined
[43:19.74] this inside this function. It's, it's closed over. You don't have, you don't get that with stateless.
[43:25.50] Yeah. Yeah. Which is, yeah. Which is a very interesting thing. Basically,
[43:30.86] if one was to enhance use server to have this capability, it wouldn't really be useful unless
[43:37.26] you decided to make the protocol basically like web sockets or something where you could persist this,
[43:47.58] the server connection. Otherwise it doesn't actually make a, a lot of, a lot of sense.
[43:51.74] Interesting. So another way I can do this is I can just create some, uh, a let here,
[44:00.38] which I'm going to increment in this as well. So, uh, and let's just do console log.
[44:09.74] Yeah, that. So we're going to see. Yeah. So this let value is again, it's inside this closure scope
[44:17.90] of this function. Uh, but it can still. Uh, like you can still increment it. It's held in state on the
[44:26.70] server. It's so interesting. Because the use socket code, the key to this is the use socket code
[44:37.66] is only run once per use socket or use counter call, right? Like this instance exists per use counter
[44:47.98] call. Like it's not. Yes. Yeah. Okay. So which is why you saw that, uh, in here when I started
[44:56.78] clicking on this increment, it started from one again. So both of these come from the same client,
[45:02.46] but because this client called the use counter twice. Yes. Uh, this was this another account
[45:08.06] was instantiated twice. So another way I can show this is just move the signal down here.
[45:12.62] And now both of these get independent state. Now this is, this is not really valuable because
[45:18.62] this signal, like there's really no purpose to this. Uh, it's just created specifically for this client for
[45:24.86] this call. Uh, so really the purpose of signals on the server is so that they can be shared across, uh,
[45:32.30] different clients. Yeah. Yeah. Yeah. Yeah. Exactly. Cause the, it's so interesting. I, I actually
[45:40.86] wouldn't even know how you did this to have the signal itself be unique across two different, like,
[45:50.78] Oh, I guess in this case they're sharing. It's the same server. So they're sharing memory, the two
[45:55.98] different tabs. Okay. Yeah. If now, if you have two different servers, then you'll get two different
[46:01.34] signals because this is just a regular signal. There's ways there's ways around that, that I'll
[46:06.30] get to later. But yes, for a single instance of a server, you'll have one signal because it's module scope.
[46:14.86] Oh, you you're wondering about scaling issues. Yeah. I mean, this is basically the whole argument,
[46:20.22] argument against like live view, like these persistent server architectures, like, uh, um,
[46:26.30] live view Phoenix. I mean, to be fair, uh, what's it called Erlang? Like the underlying
[46:31.74] setup for them is made for highly for portability and, um, for, uh, like trying to scale these kind of
[46:42.70] systems. Like I remember the Jose from live view being all like, you know, it's not just like
[46:48.86] persistent. We can move the state between machines. So if, if the, you know, one of the serverless
[46:55.82] instances goes down, we can just copy the, the, I guess the Erlang VM, I don't know the right terms
[47:01.26] across and then just pick up where you left off. Um, yeah, definitely web sockets have a scaling
[47:06.94] consideration, but it's also like what this whole architecture is as a baseline. This is why I think
[47:13.82] most things don't use live view or use this, but it's very interesting to see this come across into
[47:20.70] the JavaScript land of things. Yeah. And the scaling issues, there's a lot of ways to address that.
[47:28.38] Uh, even the arc, the infrastructure that's being built that exists for Erlang, the beam virtual machine,
[47:35.98] uh, there, there are attempts to replicate something like that within JavaScript, uh, which, uh, we don't
[47:41.98] have to get into now, but I I've been trying, I'm trying to talk to all of these, like people who are
[47:47.10] building this sort of infrastructure to kind of figure out, uh, how can like this better take advantage of
[47:53.02] whatever they're working on. So I've already, I've already talked to Sunil Pai from cloudflare
[47:57.50] durable objects. I've talked to, uh, uh, the people building effect TS effect workflow, uh, and another
[48:04.14] one jam socket. So there's a bunch of these. Right. Yeah. I, we, we got some questions and comments in
[48:10.70] the, in the, in the tab. Yeah. I know Sunil obviously has been doing great work with party kit in the past
[48:16.70] and all the stuff with cloudflare. So he, he would know it's interesting. There is a, there's an interest
[48:20.54] in this area because it changes the math again, which I think is really interesting. Green threads
[48:24.14] and Erlang Skelter are what makes live view work. Um, and what Dax say here, you can hand off process
[48:29.34] state, but if an, if a node goes down, you still lose it. Okay. Fair enough. Um, the workarounds are
[48:37.58] long polling or service end events, but web sockets are more fun. Um, exactly. Sorry here. Yeah. Live view
[48:45.18] works because Elixir's runtime can hand millions of connections on a server and the attempts of doing
[48:48.94] this on Rube on Ruby probably can't scale or it's such a node is built to be non-blocking, very async,
[49:00.14] but I don't know that it can handle like underlying. I don't know if it can handle the same kind of scale
[49:05.50] that Elixir can. Um, uh, okay. We'll get some questions further up. Um, what is this? How do you
[49:12.78] synchronize changes between server and client? That is if you have a client and server imprinting the
[49:16.54] same signal at the same time, how do you handle that CRDTs? Yeah. So you don't have, you, you don't
[49:24.62] necessarily have, uh, like a client and server incrementing. The thing is the signal only has
[49:31.42] like one authoritative, um, instance. Like if it's created on the server, you can only increment it by going
[49:38.06] to the server and once you go to the server, everything is synchronous. So you can't really
[49:41.66] have, uh, conflicts because it's strongly consistent. You call the setter, uh, it atomically updates the
[49:48.38] value and you send, uh, like you propagate those updates to the client. You cannot update it just
[49:53.58] on the client and have it like sync back to the server on, uh, on here. There's a different mechanism
[49:59.26] to do that. Uh, again, like something that's built on top of that. We can get into it later,
[50:03.98] but you can only, you can only update a server signal by going to the server.
[50:08.06] But there's, have you tried to hook this into durable objects yet?
[50:12.70] Not yet. Um, that, that's going to be a fun exercise because, uh, right now signals for,
[50:22.14] in this model signals only exist in the global scope, uh, and durable objects is very much where signals
[50:28.30] exist. Like, like state has a state lives in like these objects, these rooms that can be identified
[50:34.30] by keys. Uh, that's not yet a concept here or like trying to like, it very specifically requires building
[50:41.90] around that concept of, uh, state that lives in these tiny boxes that you subscribe to or that you address
[50:48.70] by a key. Makes sense. Okay. Yeah. Cause this is, it's interesting. What's really impressive about
[50:55.74] that demo obviously is that like, it took so little, um, like effort on the developer side to do the
[51:03.18] switch, you know, there's a PR, you know, adding web sockets to solid start that I haven't merged.
[51:07.74] Cause I'm like, I don't know what the shape of this should look like. Part of me was like,
[51:10.94] do we just increase the capability to use server? Cause one of the things that is still obvious is the
[51:15.58] wrappers, um, still kind of being necessary, um, around the return values from the, that's the
[51:24.46] connection. So there's like still, there's still some pieces, you know, where like, if it's manual,
[51:31.66] you could pop on other mechanisms. I'm the, this has my head like going off in different directions.
[51:37.34] So, I mean, that's a good thing. Uh, it is interesting cause I'm, I'm trying to picture,
[51:41.98] um, what to do with this. Like, I think it's very, there's, there's the mechanical aspect,
[51:49.98] which is really interesting. We should talk about. And then there's also like, um,
[51:53.50] it is kind of, it is mostly like a mechanism for subscriptions, right? Like it's mostly a mechanism for
[52:00.22] like you, like the, the big benefit here is that synchronization between the, the different pieces
[52:07.42] more than like, that's probably the biggest benefit. I don't know what's your, what's your,
[52:11.42] what's your perspective. Cause I've, I've been the part that I've had the hardest time trying to figure
[52:15.50] out is like, cool, I can do this now. I guess it's just, you want to move, pretend like your state is
[52:22.70] owned for, by everyone essentially. Like this is the zone where you're like global, global state,
[52:30.22] you know, like global state, like not, not just to the user state that is applies to, to multiple
[52:36.70] users or all the users, which is, which is sorry. That's just me talking a lot, but I started seeing
[52:42.14] why maybe durable objects have the room concept because it's very rare that it would be every user,
[52:49.50] unless it's a very simplistic app. Um, so yeah, I'm just trying to like, think of examples of the
[52:57.42] kind of things that I would want to do with this. And it would be like, I don't know, like, yeah,
[53:06.38] it's interesting. Like, it's almost like a database. Like, it's almost like, yeah,
[53:10.22] like the raw thing. Let me show you one example that I have.
[53:12.46] Sure. Yeah. Yeah. This is, uh, I do think that thinking of this in terms of, uh, like,
[53:21.66] this is kind of a replacement for your database, or especially if it's something like context,
[53:27.10] that's probably like closer to the mental model that, uh, that works the best here. But, uh, this is the
[53:35.10] demo that, uh, that I really like showing. So this is presence. So like, these are two,
[53:42.70] uh, two different windows that have like the same to do list open. So if I add something here,
[53:47.66] you're going to see it added here. And like, I have this shared cursor thing, so I can hover here,
[53:52.70] I can see that. Is this just a modification of the solid start base to do app? Like it's to do MVC.
[53:58.46] Almost. Yeah. Does it have like the optimistic updates and stuff built in and all that kind of
[54:03.10] stuff? Uh, I, I think it has, let me check. It's been a while since I built this, uh, components to
[54:10.70] do. Uh, yeah, so it's using the event log. So it's very much reworked. Uh, okay. Okay. Like a lot,
[54:17.66] a lot of it is not the same code at all. Uh, this is using like my little sync engine that I built for
[54:23.26] this, which we can get into later, but what I want to show here is, uh, how easy it was to build this
[54:29.10] presence. So like moving the mouse around and you can always see this, this is what 50, less than 50
[54:34.70] lines of code. Uh, all I have is like one global signal that contains all the users that are like,
[54:42.06] that are online and what document they are looking at right now. Right. Um, we, I have this use cookies,
[54:49.98] a little context helper, which gives us the cookies that, uh, obviously like if you, so you want to do
[54:55.74] authentication and this actually receives a signal from the client. So if I look at how use presence is
[55:03.74] being used, this is the component. And I'm again, I'm again using create socket memo, but this time I'm
[55:10.70] passing a signal from the client to the server instead of from the server to the client. And this is the mouse
[55:17.42] position. So this is using our, um, uh, one of the mouse solid primitives to get the mouse position.
[55:24.70] Uh, on the server, I see a crate effect. How, how are these reacting right now? Did you have to hack
[55:32.70] the reactivity back in? Cause you know, I turn off the reactivity on the server on solid by default.
[55:38.22] How did you get that to actually work? Yeah, that was, uh, I mean, uh, we, we talked on the discord for
[55:47.34] that and you, it basically it requires, it requires like important changing these two. Yeah. Changing
[55:55.10] these two. Uh, what is it? Dist. Okay. Slash. That's fine. Solid. Yeah. Yeah. So there's a babble plugin
[56:01.66] that does that, which, uh, I had to get or J devs help on it because I know absolutely nothing about
[56:06.62] build plugins. Uh, okay. All the build plugin stuff is either done by Nikhil or by or J dev.
[56:11.90] Right. That makes sense. Yeah. It's not me. Yeah. So, okay. Then that makes, that makes sense. And yeah,
[56:19.26] I mean, in the future, the signal, uh, stuff will be separately importable. So you won't have this
[56:26.06] concern, but yes. Okay. I, I was, I was curious how you got there. So yeah, these are effects and
[56:31.58] signals like this. I was wondering when you would need an effect essentially on the, on the server.
[56:36.38] And you've just shown me an example of an effect on the server. Yeah. Yeah. There's everything. There's
[56:41.02] an effect. There's a cleanup and there's a memo. Yeah. So this shows all three.
[56:45.02] So yeah. What is, what is this doing? Just so I can, okay. Yeah. The effect,
[56:52.22] so the FX subscribes to the signal that comes from the client for the most. And it updates our. Yeah.
[56:58.86] And it updates our global signal using its values. So if there is an X and Y, so the mouse, we can
[57:05.26] probably remove this to make it easier and nevermind typescript. Um, yeah. Yeah. We, we basically update
[57:11.50] the global signal to look at, okay, this is the document ID that I'm looking at. Uh, here's my user ID.
[57:17.58] Right. And here are my X and Y coordinates. So it updates the global signal.
[57:22.22] Interesting. Then on, on cleanup, I like basically it removes the user from the global signal. So
[57:29.42] you don't see the cursor anymore. And here, uh, this removes the current user from, uh, from the global
[57:36.46] signal so that we can return it to the client and the client can show all the other users that are
[57:42.06] looking at the same document. Interesting. Okay. Yeah. So the first thing that comes in my head is like,
[57:48.62] like, could this be written without a crate effect? The idea of effects on the server is like a whole
[57:52.70] other, I tried. Right. I know. I was like thinking like, is this a projection? Like, um, it's, it's,
[57:58.78] it's fine. It's, it's actually tricky because you'd have to flip the direction of it because instead of
[58:04.30] presence being a signal presence would have to be something that is derived and you can't derive it.
[58:10.46] base, it'd be very difficult to derive this in that way. Exactly. Yeah. Like the sources are from
[58:17.34] you. Yeah. Yeah. This is, this is, this is an interesting problem. So we'll talk more about
[58:24.06] projections later, maybe even keep you around for a bit of that. Um, but yeah, it is, it, it is
[58:30.30] challenging to, to, to represent certain patterns as dear derived values. It is possible, but there's
[58:39.02] certain principles that you have to follow on how you construct that object. And as it turned out in
[58:44.54] Strello demo, everyone followed the rules and it worked, but I was talking to Milo and he was like,
[58:49.18] yeah, man, this, this primitive scares me because people can do really dumb stuff.
[58:53.42] Anyway, I'm like any dumber than create effect and any dumber than create effect. And he's like,
[58:59.74] no, but that's fair anyway. Uh, okay. So that's cool. Yeah. I mean, I think everyone understands this
[59:07.26] code. You basically have a global server signal. You, you, you pass in a signal from the client,
[59:14.30] which triggers effects to, to, to update the global signal, which then is listened to by
[59:21.90] the other browser, uh, that end up, you know, applying that change because there's clearly
[59:29.58] something derived from it in the client that actually renders the, the, the, the thing here,
[59:34.86] you're just doing synchronization, both sides, create computed to create effect, you know?
[59:38.14] Yeah. This is just create projection. Yeah. I, uh, this is my makeshift create projection in one point.
[59:44.30] Uh, solid one. Yeah, exactly. Yeah, yeah, exactly. So yeah, I mean, yeah, it's like an async store
[59:51.66] kind of thing with reconcile. Yeah, no, this is, this, this, this makes sense. And it's very cool
[59:55.90] demo. As you said, it didn't take much code. And this is a great example of like showing where people's
[60:01.10] like most other users, most positions are. Sorry. I'm like zoomed right into it. I'm like ignoring chat
[60:08.30] completely. Um, that's why I, should I bring it back? I, yeah, maybe in a second here, a built again,
[60:16.94] just like it's on node JS servers over websites found scaling to be very waste only to horse on
[60:20.14] scaling works to machines. Makes sense. Um, since those are just thin wrapper over pub sub,
[60:27.02] but mine is supposed to be never to be SSR for use case. Most of my components had three JS.
[60:31.82] Don't drink and derive a signal. That's, that's true. Oh yeah. Thanks fuzzy for reminding me. Um,
[60:39.34] again, like subscribe, follow, whatever it is really, really helpful to the channel. Um, if you do that,
[60:46.06] so much, much appreciated. Yeah. We can talk about derive stuff a bit later. I want to continue on this
[60:54.38] web socket stuff, but it's, it's very, it's very interesting. Like people are talking about scale and
[60:59.90] that has been always been a consideration, but there is a definite interest in this area. I think
[61:04.78] I might've mentioned on stream, um, but I'll mention it again between the last week or second
[61:11.74] half of August to the next JS conference, I had five separate companies, groups reach out to me
[61:18.30] about local first sync engines, web socket type technologies, um, that I booked meetings and met
[61:23.66] with and stuff five different startups in the, in that time period. Wanted to talk to me about solid
[61:30.54] and signals with it. Cause obviously I think people kind of get that signals have the potential here to
[61:35.10] do a lot more. Um, you know, you, you can keep that granularity. Um, so there's definitely an interest
[61:42.70] here. I don't know if there is some mechanical change in the future. That's coming down the line
[61:47.66] on the infrastructure. Like there's something coming that's facilitating it, but there's a lot of interest,
[61:51.66] interest, like not an AI or blockchain amount of interest, but more interest than I've seen
[61:56.86] in this sort of area since like back when everyone thought they were going to be their own hosting
[62:01.10] company. So it's, it's, it's, it's been a while.
[62:08.14] Yeah. Yeah. I think it's. Yeah. Uh, sorry. AWS support web sockets yet on, I mean, on, on EC2
[62:19.10] instance you set up, but on their server lists, I imagine there's no, they don't have any way to do
[62:24.14] persistent. So they, they can support web sockets, but you don't have in memory state. It's like you,
[62:31.90] you have stateless functions that get called when, when there's a web socket message that comes into their
[62:37.18] API gateway, uh, their, their piece of infrastructure. So every time there's a message,
[62:41.34] you have to go to your database to figure out what you need to do exactly.
[62:46.94] just run a container guys. Yeah. Uh, this is deployed on railway right now.
[62:53.18] Okay. Yeah. So, uh, there's a question about people wanting to check out like these code examples. Can we,
[62:59.10] uh, can we share them and drop the links in the chat? I can try and remember to put them in the
[63:03.98] description later, but let's let's, uh, yeah. So I, I, I can't go to the chat from stream yard,
[63:10.70] but I have it in the private chat. Uh, the URL to the solid socket repo. Yeah. Let me. Uh, the repo right
[63:17.82] now is both the, the package and the demo. I couldn't, uh, I couldn't figure out how to like extract this
[63:23.82] into a separate NPM package that you can install in any solid start project right now. Um, because again,
[63:30.54] I don't like build tools and I don't know anything about build tools, but so right now it's just like
[63:35.82] one project that you can just modify the code. But this, this presence demo is, is there, uh, there's
[63:44.70] a to do application that's built with a little sync engine. So it has optimistic updates and everything.
[63:49.74] Yeah. Okay. Let me see here. So I'm going to just pull it, pull it up right here. Do I move the link?
[63:58.06] Uh, Hey Dave. What's up, Dave?
[64:05.18] Thanks for being up so late. Oh wait, no, it's early for you. You're in, uh,
[64:11.66] you're in specific time. I forgot. Dave's East coast. Right. So he's like 4 PM.
[64:17.50] All right. I thought he was West coast. Okay. No anyways. Um, yeah. Okay. So yeah. Sold socket repo.
[64:27.18] And then we got the source code, which yeah, that's what do we got here?
[64:34.86] Was it public? Like this looks like, this looks like a solid start repo. It is. Yeah.
[64:41.02] The socket folder has all the like, uh, implementation for how this works. And the
[64:48.30] source code is in the SRC is the demo. Oh, I see. Yeah. Yeah. Yeah. So this is your actual,
[64:54.06] this is your actual source code. Um, so is this packaged as a library or does it just live inside
[65:03.58] the solid start? Um, yeah, it's, it just lives inside this project right now. That's what I was
[65:09.42] saying. It's not packaged as a library right now because I couldn't, I tried to do it. I couldn't
[65:13.90] figure out exactly like how to get some, some of the things working. Yeah. Part of the tricky part,
[65:20.54] uh, is like, I imagine the, the compiler compiler pieces and how they get like them to play in a
[65:28.38] generic way. Um, yeah, but okay. So you can basically set the ha the source folder is the demos and then the
[65:37.90] socket is the source for the libraries. Right. Cause I was like, this is just your standard solid start
[65:42.86] app. So you have a, an index route and you have a user ID, which is the presence stuff for the to-do
[65:51.02] app. Right. So both of them. Yeah. So you can have like your own to-do list, but you can also share,
[65:55.82] like invite someone to your to-do list. So if like, if, if I'm on slash Ryan, then I'm looking at your to-do
[66:01.02] list instead of mine. Yeah, no, this is very cool. Um, concept of a project, like in terms of where,
[66:10.62] yeah, I, I, I think this, this isn't relatively, uh, people pointed to earlier, you know, there's a
[66:17.50] scaling consideration. There's maybe even security considerations. Um, it's a very interesting area,
[66:24.86] but it's, so it's very raw, but it's, it's, it has the potential of changing the math a bit.
[66:31.42] Uh, these apps, are they SSR'd? Like, do they hydrate? Like there's a question earlier on.
[66:36.30] Okay. There's a question earlier on is like, how do you have, how do you handle stuff with hydration?
[66:41.98] Like, would it be out of sync if there changes before or during hydration? And I have to assume
[66:49.10] that you have to, the only way hydration works is if you take a snapshot at the time that you server
[66:54.06] render, hydrate it, and then basically don't start playing back the events from the web sockets until
[67:00.78] after you're done hydrating, hydrating it. It's, it's an interesting challenge with like stuff streaming
[67:06.38] because we would probably, the first time a new event come in, we'd have to basically cancel any future
[67:11.26] hydration. So like, I don't know. It is interesting.
[67:17.98] Yeah. I, I haven't messed around that with that too much, but I would, I would assume that things
[67:22.62] can't really change during hydration because, uh, if something changed, you need a web socket connection
[67:28.78] to know what changed. So I would assume like all the hydration happens before web socket connects.
[67:34.94] And once web socket connects, you receive all the updates, like anything that changed since you server
[67:39.98] rendered and, uh, like it, it, because it happens after hydration, it's just updates.
[67:45.98] Yeah. That that's, that's how I think of approaching it essentially. Cause the whole
[67:50.46] loading stuff is happening via, via the serialized data. And even if you delay to the very,
[67:56.14] very end of hydration, like till the stream is done, it's not the worst case scenario in the world.
[68:02.94] There might be like that, like jump up when like the bunch, like the, the new state comes in like a bit
[68:08.30] later, like it takes a second or so, but on the other hand, compared to what you had before web
[68:14.30] sock, it's like, it's, there's no different, you know what I mean? Like your page never updated.
[68:18.70] So, I mean, what are you complaining about?
[68:23.02] Yeah. It's only an additional capability. What I would be more interested in is rendering within
[68:30.06] the use socket, uh, which would require probably a different type of like reactive render that works
[68:37.66] on over web sockets. I was trying to build one last night. I couldn't, uh, like I didn't have enough
[68:43.02] time to properly think it through. So sorry, were you trying to like render HTML over the socket?
[68:49.90] Like essentially like do you, when you say render, do you mean like basically render pages like HTML
[68:56.78] via the web socket? Uh, render pages, but also like, like dynamic rendering where like within a use socket,
[69:05.34] like I can put all the counter JSX, the button and the div and everything inside my use socket and
[69:12.70] just import it and render it within, within the client. So not only does it like render into HTML,
[69:18.30] but it also updates. So if the count updates, uh, the server knows that here there's a text node that
[69:24.22] needs to be updated. It sends the client a message saying that here's a text node update its value to
[69:29.58] two to three and the client just does it.
[69:32.30] Yeah. Okay. I see what you're saying. Yeah. So because you're, you're dynamically like when you
[69:39.58] create the socket, you're dynamically creating the like wrappers around the specific signals.
[69:45.02] What's the stop, like another level of dynamicism where those signals are creating things that create
[69:53.02] signals that, that can update in the future with other things that can have signals in them. Yeah.
[69:57.98] I see what you're getting at.
[69:59.18] Yeah. I see the message probably easier to do that with a V Dom. I I'm like half agree,
[70:05.02] half disagree. So it's kind of a, like, it's a V Dom in the sense that there is a representation of the
[70:11.26] real Dom on the server, but it's, it, it doesn't serve the same purpose. Like it's not something that
[70:17.74] you build huge chunks of and then diff with each other. It's something that you fine grained update,
[70:22.46] uh, just in the holes. So first of all, you also, you, you get to keep, you get to skip out all the
[70:27.26] static stuff. You, you actually only have in memory, the things that update over time. Uh, and then you
[70:33.90] don't different patch anything. You just say that this here's a node update the text. Yeah. Yeah. I'm
[70:39.74] getting you what you're saying. It's a virtual Dom, but not in the sense of like the react virtual Dom.
[70:43.42] It's just like a virtual Dom because you don't have an actual Dom in the, in the, on the server.
[70:48.30] So you, you, to keep things in sync, you need a representation on both sides. So instead of using
[70:54.54] real Dom nodes, you use a virtual Dom, but that virtual Dom on the server is actually being fine
[71:00.14] grained rendered. Like it's actually, it's being updated the way solid updates. Yeah. So it's a very
[71:07.90] interesting like concept for a virtual Dom that, uh, I don't think that it exists. It exists right now.
[71:14.38] Yeah. Yeah. Well, because there's no benefit of doing that in a client only zone, because it's
[71:18.46] just an extra layer. It's funny that there's actually a lot of similarities between that and
[71:22.86] like what I've been working on, on the stores side, um, just like the tangent, because like this idea of like
[71:29.90] dipping, um, you know, like immutable states versus patching the changes you want you, what you actually
[71:41.18] want on the server is a virtual Dom that's actually a proxy or more or less so that any upgrade can
[71:48.94] actually, it's like immer. You want to record the change essentially. Like you want to, you basically
[71:55.66] want to know what the changes are, like sense them fine grained and then push them along to the client
[72:01.90] and be like, it changed in these specific locations. Um, so yeah, it's, it's, it's, it's, it's almost
[72:09.66] like a way of see, and then you start wondering if you shortcut it. Sorry. Because what I'm hearing
[72:14.78] is it's like a way of going from signal to effect, affecting this thing and then going back from that
[72:22.70] effect to, to creating a patch to basically communicate against signals to the client to,
[72:29.18] to, to, to then basically effect into the actual Dom. Like, which seems like it's complicated or seems like
[72:37.58] it's involved, but what you saved by doing that is there's actually no diffing.
[72:42.30] Um, it's just the, the bulkiness is that you couldn't make the whole thing derived in one chain.
[72:49.34] You had to actually go from derived to push it out effect to get back to something that can be
[72:57.58] derived to push out again anyway. So if you scroll down to, uh, there's a section in the readme called
[73:03.90] create socket store or create socket projection. There's one of each actually, which do something
[73:10.70] very similar to what you're describing. So we have create socket memo, but yeah, create socket store,
[73:17.26] you pass in a store instance, a store proxy instead of a signal. And, uh, you, you listen to it like
[73:25.90] fine grained on the client side. So you only get updates for the key for the values inside the store
[73:32.30] that you actually listen. It doesn't actually work because I, uh, first of all, this, the proxy traps
[73:38.14] were a little bit of a little bit too complicated for me to figure out. And the second thing is that,
[73:43.10] uh, this, uh, like you import store from solid JS slash store, which then imports all the JS on its
[73:49.98] own. And the B the battle plugin I was using to transform the import doesn't work on node module.
[73:55.18] So there's a couple of like small reasons why this doesn't work yet, but this can be implemented.
[73:59.74] Right. And yeah, what I'm getting at is almost in a sense, if you had something like this,
[74:05.98] you could basically use a store on the server as your data structure for your like abstract virtual
[74:13.10] DOM. And then when you update the specific parts of this virtual DOM, the store could do the fine
[74:19.02] grain updates across the wire. Yeah, no, this is, this is kind of, kind of crazy. What, uh, question,
[74:25.02] why do we care about having a data structure on the server? It seems like you only use cases for
[74:29.18] collaborative apps. Yeah. I mean, I mostly agree. The thing is right now collaborative apps, like if
[74:36.46] you want to build collaborative apps, you have to buy into a lot more complicated things. So this is
[74:41.42] just a simpler thing to help build collaborative apps and something similar. I think that's like the whole
[74:47.26] point of this. Like I, you don't really need this capability. You need this data structures on the
[74:52.46] server and this, you know, because you do pay costs, there's a scaling cost. There's the fact
[74:55.90] you need memory on the server. You need, you need something persistent, but the trade-off is
[74:59.82] collaboration, collaborative apps. So you can have this like single state. Um, I'm trying to think,
[75:07.74] I think that's the biggest one. What, what other benefits do we have to using these kind of WebSocket
[75:12.62] stuff, uh, things up to date? Um, I mean, any, any sort of a, like a real time dashboard.
[75:18.94] Uh, like if you, if you look at, like, uh, you go to Vercel dashboard, Netlify dashboard,
[75:24.62] a century dashboard, like all these are meant to be real, real time. You're meant to like, okay,
[75:30.30] I have this app open and I want to see in real time what is happening. So you can have signals
[75:35.66] representing those, uh, that piece of state that, that you want to observe.
[75:39.58] Single source of truth too. Sorry. Jose did this whole thing about why optimistic updates suck and all
[75:46.70] this blah, blah, blah. And like, like he's going through this whole example and the truth of the
[75:51.58] matter is, is yeah, obviously optimistic updates suck because they, they have to approximate something
[75:57.66] that is not real. Um, actually, and a lot of you doesn't actually change the math on that too,
[76:03.50] because it still has to start from the client if you want to be optimistic, but generally if you have
[76:07.42] a single source of truth, a single persistence or a single way of doing this, you will have more
[76:12.62] consistency. If what's important to you is stuff like real time where it's, it's not a bit, you
[76:18.70] don't want things like you want to shorten the, uh, the eventual and eventually consistent, right? You
[76:23.58] want, you, you want, you want to make sure that like things aren't sitting out of date too much.
[76:29.74] Yeah. And, um, things like single flight mutations do a pretty good job at like making that half or
[76:39.74] really reducing the amount of latency or the amount of time you're looking at something out of date.
[76:43.90] Uh, this kind of takes it a step further and it also ensures that anytime something happens on the
[76:50.94] server, you always, uh, get that up to date. And the problem that, uh, Jose brought up, uh, another
[76:58.62] problem, which was that updates can be seen by server out of order. So if you, if you said like, delete three
[77:05.34] things, it might delete the third thing before it deletes the second thing. And then the next,
[77:09.90] when it sends back an update, uh, or like when it sends the updated data, you have something that
[77:15.02] doesn't represent the real database. So again, things like that get smoothened out with web sockets
[77:19.90] because all the messages happen in order.
[77:22.06] Mm. Although to be fair, I suppose a web socket protocol under use server would also be fine for
[77:32.30] that as well. Like that's a, that's the nature of the, of the communication protocol rather than
[77:37.18] the, but yes, I mean, these are, these are all way ways.
[77:44.38] I know he said they're smoothed out with web sockets, but what about the reconnect case?
[77:47.42] Do you mean like if the client drops the connection or like just reconnecting web sockets or if it's
[77:55.90] like the server shuts down and there isn't, because that's something that only Elixir can, or only Erlang
[78:02.06] can really have, which is, um, like there's a new server deployment or the server shuts down.
[78:07.66] We can just start a new process with the same code. Uh, if it's just the client, uh, reconnection,
[78:13.42] then like we have libraries that, uh, every time the web socket disconnects, they'll reconnect and
[78:20.38] they will try to replay all those events. Yeah. It's not really sure what the question is.
[78:25.98] It is interesting to me because Jose is kind of always like in his example, like he is picking
[78:33.82] parts, something that is real, but it's also something that like in, if you look at all the
[78:39.58] possible errors that go wrong with server client, um, things, you're more likely to think that it's
[78:45.50] one of those things than the actual issue. Like it's, you're more likely to hit the other issues and
[78:49.58] the issue, but like people like he, he used an example app, um, uh, which was like, uh, what was it?
[78:57.02] It was, it was rewritten and remixed, but used like, um, tan stack query or something. I forget what, or
[79:03.50] tRPC. I can't remember what it was exactly, but, um, but essentially the, almost all the bugs you could
[79:10.14] tell weren't the types of bugs that he was talking about. You could tell by the behavior, they were
[79:13.42] actually just poorly written code. Like you could actually tell that it was just like optimistic
[79:19.98] updates, missing certain states like this, you know, kind of scenario. It was, and don't get me wrong,
[79:24.46] writing optimistic updates are difficult. It's just, it wasn't like, if, if it was what he was saying,
[79:29.42] what he was witnessing when he was clicking around the app would be different. And I think that we're
[79:36.30] talking about like the edge of the edge case, because basically every app in existence is almost
[79:40.94] created without taking this into consideration, uh, that's client-based because it literally
[79:44.86] isn't something we can handle. So yeah. Oh, what, what did Dax reply here? He said,
[79:49.50] I don't believe using websites, you have to avoid ordering problems from being tracked explicitly server
[79:53.90] side. Um, right. Like on the server, you might want to keep track of which ones, like which actions
[80:02.38] you've already seen. So you don't want, uh, like you don't trigger it twice, something like that.
[80:08.62] Yeah. I don't, I don't, that's, I don't think that's, um, handled by default. Like this is just
[80:15.02] a simple mechanism to, uh, communicate with the server over web sockets. If you want additional,
[80:20.78] uh, additional infrastructure for like, uh, here's an update, make sure I'll send it to you multiple
[80:26.38] times. Make sure you don't do it twice. That would be like additional parameters on top of this.
[80:31.58] There's a few of them, which we can, uh, which we can get into, but, uh, uh,
[80:35.10] Oh, this position is that using web sockets avoids this problem. Yeah. At that I am,
[80:41.34] I'm going to delegate to you whether like he's right or not on that. Yeah.
[80:46.86] Yeah. To Dax. I mean,
[80:48.54] Yeah, no, that's, that's, that's perfectly fair. I, yeah, there's a certain level detail that I'm not
[80:54.06] aware of. Uh, Dominic actually, uh, is here and he was saying what, uh, how are errors conflicts
[80:59.90] handled? If you were to mutate a single on one client where you replaced an array and the same
[81:03.26] thing happens to another. Oh yeah. Yeah. Have you, have you thought at all about, um, like order or
[81:08.94] like the, you know, yeah. I mean, uh, it says, I answered this, I answered this earlier because the
[81:15.18] signal can only be updated on the server. You don't really have conflicts there. You only have conflicts
[81:19.74] when you try to like, or like using just this, uh, these base primitives, you can't really have
[81:25.98] conflicts because everything is synchronous. Right. I mean, well, I mean, there's theoretically
[81:32.86] that time period where, you know, I mean, I guess you always have this problem like where client one
[81:43.34] pushes the button, client two pushes the button, you know, so, and, and client two doesn't see the
[81:54.70] update from client one yet. So their expectation of what pushing the button does could be different,
[82:01.10] um, from what they get. Like, I mean, the silliest version is when it's an increment or a counter,
[82:05.34] because in the, in those cases you always plus one. So the client, um, ends up, you know,
[82:11.58] if it was at five, you, you, you know, first one clicks to six, second one clicks, you know,
[82:17.50] because they get chained in order, you'll end up with seven, but in a, in a replace operation,
[82:21.90] like Dominic's saying is like, if, if, if they saw that their own, yeah, yeah. Right. If they're,
[82:26.94] if they saw that their, their own state said five, so they didn't say, they didn't say increment,
[82:31.34] they said, set it to six. Yeah. Or reset to zero, something like that. Yeah. Yeah, exactly. Um,
[82:38.22] but yeah, so yeah, nothing's. Yeah. In that case, there will be a conflict in that case,
[82:47.42] there will be a conflict. Uh, you can add like a, some sort of a check in your mutation saying that,
[82:53.74] uh, only make this update. Uh, like if you want to check against something like that,
[82:57.90] if you want to build your own conflict resolution, um, by default, it's obviously last right wins
[83:03.02] because, uh, updates just come in synchronously and whether or not like a signal update, uh, was seen
[83:09.26] by a client before it sent on update, that's not handled by default. Um, but the, uh, again,
[83:16.14] because these are just base primitives, you can keep building all of that on top of this,
[83:20.22] however you want. So if you want like a CRDT in place, or if you want a different mechanism,
[83:25.26] uh, if you want a sync engine, uh, that's based on event logs, that's also, uh, possible.
[83:30.38] Yeah. Yeah. It is interesting. Cause this does kind of open up a whole,
[83:35.34] you know, area of, of consideration. It's funny. Cause like on the base case and on the non heavily
[83:43.66] trafficked case, these are things you almost never worry about. And then once the, once you start
[83:48.38] trafficking a lot, and once you start doing a lot of these back and forth interactions, it suddenly becomes
[83:52.38] a thing. It was kind of like what I was saying with the Jose example earlier, where like,
[83:56.30] if you're, if you're doing stuff like the way we do in solid starters felt kit or remix, and you just
[84:04.38] do your like posting and you kind of do everything in these big, broad sweeps, you're usually not going
[84:08.94] to hit too much of an issue. But if you're sitting there and like trying to update something multiple
[84:13.74] times per second, you know, like, you know, like, and, and kind of everyone's doing that at the same
[84:20.22] time, then it becomes more of an interesting zone. Yeah. I don't know. It's definitely interesting.
[84:26.06] And that's kind of, that's kind of my hope that, uh, like, as this gets used for like,
[84:30.70] or if this gets used for different use cases over time, uh, those primitives will kind of like find
[84:36.62] their way as, uh, like add-ons or, uh, like little wrappers on top of this. But the API mostly should look
[84:45.34] similar to this, where you're just dealing with signal getters and setters. Most of the time,
[84:50.30] you're passing them around from client to server. And, uh, you like, you have just like minimal
[84:56.22] wrappers on top of these regular signals that handle those race conditions that, uh, that you need.
[85:01.58] Yeah, that's right. Lexical would have hit this kind of thing a bunch by being a text editor with
[85:09.10] the plenty of inherited issues here when it comes to complex data structures, right? He's saying that at
[85:13.82] array, but things with custom data structures are tough. Yeah. Um, so I, I guess that's kind of the
[85:19.82] more, the more interesting question is we're looking at this from a generic solution standpoint
[85:26.78] and being like, look, this is a mechanism. And then if you need to handle these like special cases that
[85:33.42] come up, figure out how to handle on top. There's a, I guess it was ultimately a question here. Is it like
[85:38.86] these challenges are so difficult that they almost always have to be special cased? Like, I guess that's
[85:45.10] kind of the question. And if they always need to be special cased, then how generalizable is the
[85:49.26] problem space? Um, is I, I, I, is I'm, I'm kind of, you know, we're, we're at least what I'm hearing
[85:57.74] in this kind of conversation and thinking. Um, I'm, I'm not sure. Yeah, it's, it's the truth.
[86:05.66] There are, there are like some, yeah, there are some generalized things that we can do,
[86:10.22] and I've tried to do some of them. So if you scroll down, uh, there is a persisted signal, a create,
[86:16.62] create persisted signal, which, uh, solves the problem of, uh, yeah. So this solves the problem
[86:24.06] of like horizontal scaling where, uh, or it doesn't solve it. It like gives one way to solve it basically.
[86:31.10] So, uh, so earlier I said that if you have, if you just have one server, you only have one signal
[86:36.46] and everyone's looking at the same state, but if you have multiple servers and you're trying to load
[86:40.54] balance between them, then the same signals are going to be replicated with different states.
[86:45.50] So everyone's going to end up looking at different things. Uh, what this does is connects, it connects
[86:51.34] a signal to, uh, uh, basically an, some persisted KB database using on storage. So you can define a key.
[86:59.90] So in this case, the key is count. And it's going to use an on storage client to store that value in there.
[87:07.10] And it's going to use on storage watch method to, uh, to listen to that value and update all the other
[87:13.82] servers, uh, that, that want this piece of state. So this makes sure that updates to a single server
[87:21.42] make, make their way onto all the other servers that you have scaled out to.
[87:27.58] Okay. That's cool. Built-in thing. Yeah. I'm, I'm very interested to see how these things can end up
[87:32.78] stacking up. Uh, Dominic adds something and probably his experience also with frameworks is interesting
[87:40.06] space where you need to fork of UI to be pending until the services that was either merged or conflicted
[87:44.38] and using error boundaries to handle fail case properly. Like basically like, um, turn these all
[87:49.98] into transactions essentially like from the, or transitions or whatever from the terminology
[87:54.70] that we use in framework land. It's, um, yeah. And I think if we are getting to a place where,
[88:02.38] where we are doing this like constant async kind of thing, like I, we always talk about like async
[88:08.62] being like, usually I think about async about being in the, on the boundaries. So you have a synchronous
[88:12.46] system, which is the UI describe, then we have primitives to bring the async in. Like that's
[88:17.82] where create async is. And then you use stuff like transactions, suspense boundaries, all the error
[88:23.66] boundaries, all these kinds of boundaries to kind of contain, like, I don't know how to handle this
[88:28.86] in my sync world kind of scenario so that I can kind of massage this out. Um, but if this is happening
[88:36.70] all the time, every moment, it starts getting really interesting how, um, how to kind of like,
[88:44.54] yeah, the transactional nature of this goes beyond. Yeah. I mean, it's, it's, I guess it's, it's not
[88:53.02] untrue to say that we're just re-implementing databases in the browser, right? Like we're really
[88:58.22] like getting to a point where like, we're like, we're getting very close to that because, um,
[89:06.22] a lot of the work, you know, uh, uh, react solids, initial transaction, transitional thing. We, we
[89:12.14] basically, there's like one kind of future and then we try and build towards it. And if, if, while we're
[89:16.70] building towards it, we realize that something else comes in, we kind of go like, okay, either throw it
[89:20.70] out or continue kind of trying to build to the, this joined future. And then you kind of get there, but
[89:24.94] there's this one target. And then when it's finally done or when we can't wait any longer, we just go,
[89:29.90] okay, kind of update stuff to get there. Um, but then, you know, start going, okay, can we be more granular?
[89:35.58] There can be multiple things going at the same time. And the easiest thing is like anything
[89:39.42] that's not related, doesn't overlap on the graph. You could be like, these can do relatively independently,
[89:45.42] but when they do overlap, it's like, do you fall back to the old behavior where they all merge together?
[89:49.90] Or do you try and come up with some kind of reasonable ordering system to handle the merging?
[89:54.38] Um, it's funny. Cause this, this came up on a Twitter discussion. I think I was talking to,
[89:58.54] uh, God, what, um, react core team member name's not coming to me right now, but basically he asked
[90:06.54] me this exact question. And I was like, I don't know, I was planning on just kind of if things entangled,
[90:12.54] say they're entangled and not worry about this. But I mean, we're getting to a point where maybe we can't
[90:17.34] not worry about this. Like maybe this has to be solved. And then, and then at a certain point,
[90:23.10] you kind of start asking yourself again about the specificness of the thing is like, should we just
[90:27.42] let an abstraction, like a sync engine, take care of this for us? You know, just like if, if we're trying
[90:33.58] to recreate a database on the client with signals or like a cross or a single database, like maybe we
[90:39.02] should just let the database people write the database. Um, I mean, yeah, there's always back
[90:46.70] and forth. So this is a, uh, this is a great kind of a discussion because the next thing that I have
[90:52.38] in the read me is, is a sync engine. It, I don't, maybe like not everyone will agree that it's a sync
[90:59.82] engine, but, uh, that that's what I'm trying to like, that that's how I'm trying to think of it is, uh,
[91:06.62] okay. Can we do some of those sync engine things, uh, like at a very base primitive level and leave
[91:13.42] some of the specific customization up, um, however we can. So what this, the sync engine, it basically,
[91:20.46] uh, uh, what it, what it is, is it's a log of events that lives on the server. Uh, you have a method
[91:28.62] to like add a new, add a new event at the end of it, and then you can replicate it on the client.
[91:34.46] You can do the same thing. You can, uh, add an event at the end of the log and it automatically
[91:40.30] makes sure that the same event go, makes it way to, makes its way to the server and gets appended there.
[91:45.58] So this is the server version and this is the client version where you pass the server, uh, log into it
[91:51.98] so that it knows how to talk to it. And then on top of it, you have computed and you have projections
[91:58.22] to like build a state out of, out of that log and show it in your UI.
[92:01.98] Right. Yeah. Yeah, exactly. Good old map reduce basically. Okay. Um, yeah. Yeah. And
[92:10.94] current inflation uses a simple ID version approach to complex systems. Yeah. Yeah. It is interesting to
[92:20.94] figure out, we're in kind of this middle zone where people are point A and there's point B and there's
[92:25.74] like, you can obviously go all the way to B, but there's a questions like, is there a midpoint along
[92:30.70] point A to B where like, there's this like kind of sweet spot, which yeah, it's, it's interesting. Um,
[92:39.18] okay. That's, and that's what I'm trying to get to here is that, uh, this is a sync engine,
[92:43.98] but it doesn't do like really any good conflict resolution, but what it can do is give you like
[92:48.46] ways to plug in your own logic. So, so it can give you a function where here's the current state of the
[92:55.42] server. Here's an update that just came from the client. What should we do? Uh, like you can look
[93:01.10] at the current, uh, all the current state, you can decide whether this should go in or not, or you can
[93:05.66] decide whether a different update should go in and then you can do the same thing on the client. Here's all
[93:10.06] the current state of the client. Here's the update that just came from the server. What do you want
[93:14.78] to do? So you can customize those two like pieces of logic and then have everything else just like be
[93:22.30] built into this, uh, uh, these like three or four primitives. Yeah, no, this is very interesting stuff.
[93:30.94] Yeah. I mean, I'm glad we got the discussion going on this because see, on one hand, when I look at this,
[93:36.94] I'm like, is this too narrow because of like stateful, you know, doesn't scale all this stuff,
[93:42.54] but there's, there is so much interest and there's, there is a commonality between the pieces of this
[93:49.34] technology and stuff, which is funny. What you think would be on the complete opposite side of the
[93:55.02] spectrum, right? We're talking about offline first where there's no server, like unless there is, you know,
[94:00.46] like basically like you can't predict the, the, um, connection being there, you know, consistently on
[94:07.34] the backend and there's, there's a lot of surprisingly similar considerations. Um, I guess because both of
[94:15.82] them behind the scenes have to handle the synchronization problem of, of, of how do you deal with conflict
[94:24.54] resolution and the transactional nature of mutation. Um, okay. Yeah. I mean, it's a lot just to jump into
[94:35.18] if you're just like, can I just put you socket at the top of my file? Um, but I mean, I love,
[94:46.78] I love that it asks the question. Um, yeah, seeing here so much discussion when in the middle of we
[94:54.38] spent so much time talking about that, that I got like five minutes behind the, behind the chat. Um,
[94:59.82] which is, which is funny. Um, I'm glad people have a lot of opinions on, on this stuff and have like,
[95:07.58] looked into, you know, some of the challenges here. Uh,
[95:14.06] Yeah. And this is like, this is an area of like web development that I feel like a lot of our,
[95:21.50] a lot of the framework community and the, definitely the framework community has kind of like very much
[95:27.58] been hands off, like completely moved to a different focus. And like, like someone who built socket IO
[95:33.66] is now building like a stateless server rendering framework. And like, I'm sure he back of the mind,
[95:39.66] he's thinking of like, how do we do real time or how can we add real time capabilities to our
[95:43.98] platform or how do we build real time features into our own dashboard? But none of that stuff make,
[95:49.42] seems to make its way to the framework.
[95:51.98] Well, I mean, it's tricky.
[95:53.74] You, I mean, we're in a place now for the first time in a while where we could ask, you know,
[96:01.02] that question because classically frameworks, client side frameworks, especially they want
[96:06.62] themselves to be usable by the masses of people to, you know, so the lowest common denominator classically has
[96:13.34] been like, can you render in the client, right? That that's the job. We understand that this is a
[96:17.82] actual category of things and we go and get that. And then you're like, okay, I would like to also
[96:23.58] render on the server, but you notice it's also render on the server. It's not like, it's not the primary
[96:28.62] function. You could say RSC has tried to flip that around to being a primary function for these
[96:32.38] JavaScript frameworks, but, but still it's, would you be picking up react otherwise? I'm not sure.
[96:38.22] But now like, it's a whole other step to say like, okay, it's this whole steps that you need a server
[96:44.62] and next JS did. And most of these meta frameworks suggest you need a server, not completely though.
[96:51.58] Even that's a huge jump. That's why, you know, we had the, you know, CSR mode in solid start almost
[96:56.62] right from the beginning. It's felt it as well. Svelte kit was client only as well, right? Pretty much
[97:04.06] had that often right from the beginning. There was an adapter for it. And then remix added it more
[97:09.82] recently, but like, there's been this trend because saying to people like you need a server is even a
[97:15.10] big jump. And now saying you need a persistent server is like in this world is more, but the funny thing
[97:22.78] is RSCs have told people that, Hey, you basically can't function without having blob storage, you know,
[97:30.54] like, because without the caching mechanisms and next to next, like RSCs are broken. Like it would be
[97:36.14] like, it'd be, it'd be like, I know react doesn't care about re-renders, but trust me.
[97:40.14] Yeah. They don't care about that at all. They don't, they don't bring this up at all.
[97:44.14] No, you, you cache is so important and fundamental to the, to next JS because the way it has to re-render
[97:51.66] the pages on the server and fetch all the data and do all that stuff. You basically, you basically need
[97:56.06] blob storage or KV type storage to have a next JS app with a server components. Like it's, it's a baseline.
[98:02.70] So now you don't just need a server. You need, uh, blob storage, which is fine. You know,
[98:08.62] everyone has their own network has their own versus all has their own, uh, cloudflare. Everyone has
[98:15.18] their own kind of blob storage mechanism, but it's, it's, it's absolutely base stakes.
[98:18.54] It might be come, you know, we might be getting to a point where, where it's like, oh yeah, if you like a
[98:24.78] a persistent server or something like durable objects becomes that thing where you're like,
[98:30.38] you don't need it. Just like, you don't need a server to, to use, you know, solid start or
[98:36.86] salt kit or whatever. Right. But like, it's just like, if you're getting in the full package deal,
[98:43.26] we're actually going to put a bunch of infrastructure, uh, requirements on you.
[98:47.42] Like, and if companies like Vercel are driving the ship, maybe that is where, where, where we're
[98:56.78] coming to.
[99:01.26] No, server waterfalls are okay.
[99:05.66] Yeah. I think it's, I think it's reasonable to say, if you want to build a very real time app,
[99:11.26] you can't do serverless and the number of people who are doing very real time, I don't know, maybe
[99:16.70] it's a growing number. It's kind of funny. Like initially it's, it's the evolution of the stuff.
[99:21.74] It's like really funny to me because when we created single page app frameworks and I say we,
[99:26.06] but I wasn't really quite there at that point, but when people created the original single path,
[99:30.06] single page app frameworks, I was a developer at that time, but I wasn't building the stuff.
[99:35.50] Um, the, there was this understanding that these are for apps. Like people would be building their.net
[99:42.06] websites or PHP websites or Ruby on rails websites, but they needed something more interactive. They
[99:46.06] needed apps and be that just last 10%. And yet somehow that app framework. Now people are like,
[99:53.58] why can't I render my static blog site with it? Like, um, yeah, right. Everybody wanted to get what
[100:00.14] the app framework did. So we've gone all the way to react server components. Like, you know,
[100:04.54] some people joke the PHP of, of, uh, react. So scale that all the way back. Um,
[100:10.78] if interactivity was the previous bar is real time, the next bar, do you know what I mean?
[100:17.74] Like, is this just another example of where we're going to talk about putting tons of effort to cater
[100:23.02] to that? Like small 10% and then everyone's like, why isn't my static blog site real time? Um, yeah.
[100:29.58] Like spend the next decade figuring out why that isn't.
[100:33.02] Um, although I have, I do want to question that, uh, um, you cannot like, if you want to build a very
[100:42.14] real time app, you cannot do serverless. Do durable objects not, not count the serverless. Like, I'm sure you
[100:47.66] can build a very real time app with durable objects. So do like Dax, do you not count as it as serverless?
[100:55.98] What's the question there? That's, that's my, that's my little pushback against that.
[101:01.98] I mean, to be fair. Yeah. I wonder what Dax has to say about that, but I think you almost have to
[101:09.58] always put in quotes, like accept durable objects. This is a unique feature and a unique capability
[101:17.18] on Cloudflare. That's very, very exciting potentially, but they, I know they've been having
[101:25.02] challenges finding adoption and stuff. And I think it's maybe it's because they were very specific model.
[101:30.06] Um, you know, like maybe it's because people don't quite get them, but the fact that this exists
[101:38.22] is, is obviously exciting because the potentials there. Okay. Dural objects require sharding.
[101:44.46] Can't do concurrent reads, et cetera. So there are also technical aspects to it. Fair.
[101:52.14] See, this is not an area that I'm an expert in, so I'm glad to have people in the chat who can help out.
[101:58.14] Um, you're the, this, you know, I, I, I kind of got the last time I worked like closely with it. It's
[102:08.22] funny that like, I was really working on like infrastructure side of stuff. I was really at
[102:13.66] the startup I was at, um, and Netlify worked more with the framework integration teams and like the,
[102:18.30] the runtime aspects and not on the infrastructure side. So like, it's been a good seven, eight years since I've,
[102:25.74] seven years, I guess, since I've really actually no less than that. Yeah. Whatever. It's been,
[102:31.82] it's been like at least five, six years since I've, since I've like spent time, like looking at the
[102:37.18] changes. Like back then it was like, I was, I was very happy about what was, uh, there was like a,
[102:42.46] something that makes serverless easier. I like the serverless framework or the serverless something,
[102:46.38] rather. Serverless framework might, this was probably it. Yeah. It's pretty early on.
[102:52.54] Durable obviously promising because they're basically the same model as Erlang. So it should
[102:57.66] have all the benefits Jose talks about, but it's too big of a step for a normal app to gain mass adoption.
[103:07.50] Yeah. Yeah. That's kind of my thought on it as well. And I guess I look at durable objects,
[103:16.62] not only as like a, a very cloudflare specific technology, but also like, again, as this, like
[103:23.82] the actor model that Erlang has, that Erlang is where that make, that gives Erlang all its power
[103:30.78] and bringing that to the JavaScript ecosystem. And this is something that's not unique to durable
[103:36.14] objects. Durable objects are doing it at like this corporate like cloud hyperscaler level, but there
[103:42.06] are other projects that are trying to do very similar things. And I think like, again, the, like JavaScript
[103:48.06] is just going to have this in a few years of time. Um, like, just as like, like we have lambdas.
[103:56.46] Effect cluster is one of them and a jam socket is the other one.
[103:59.66] So are you thinking there's like a primitive here to be discovered in the same way? Like
[104:04.86] everyone now has blob storage. Cloudflare was technically one of the first that kind of offered,
[104:10.46] well, I don't know. AWS has like lots of random services. I know nothing about. They probably had
[104:14.30] a KV service before, but I remember like for me, cloudflare very sticking out when they had their
[104:19.58] workers in the KV, it was like, here's a certain zone of type of solution. And now everyone has some
[104:25.34] version of, of, of blob. I mean, sorry, S3 is blob storage. So like that, I know that that's the
[104:32.22] return, but you know what I mean? Like the KV. Yeah. Yeah. I know. I said that before I saw it.
[104:39.02] Yeah. Yeah. I know. I said that before you typed it, I swear. Um, at least before I saw it, but yeah, I
[104:48.70] I'm thinking of like, yeah, it's fine. Um, but like it's kind of been standardized to the point that
[104:56.14] like everybody has this kind of model piece. Is there going to be something around this persistent
[105:03.18] piece? And maybe durable obviously aren't quite the right abstraction yet. I don't know.
[105:08.86] Yeah. That's kind of my hope at least. And that that's what I'm trying to build towards as well,
[105:13.26] which is why I'm trying to talk to all these people and trying to like build this, uh, trying
[105:18.22] to build my own primitives in a way that I can take best advantage of, uh, that sort of like actor model
[105:24.70] infrastructure. Azure event. Oh, there we're having an Azure. I haven't, I haven't thought much about
[105:31.10] Azure in a while. Like God. Yeah. All of these are like, like I mentioned earlier, where they'll,
[105:37.34] they'll just call stateless functions. So you have web sockets, but you don't have in memory state.
[105:41.82] Yeah. Which is the, which is the, what the durable objects do. They give you that persistent state.
[105:47.10] Yeah. God, sorry. I, this conversation just keeps giving me flashbacks because I worked at a startup
[105:53.90] and depending on who was funding or supporting the project at the time, the hook for them always
[105:58.94] was like infrastructure. So it was like, we started on AWS, we migrated to Azure and we migrated back to AWS
[106:05.82] again. And I did this over a five year period and changed the infrastructure. Like each time I went from
[106:11.58] microservice to Kubernetes to serverless. Um, anyway.
[106:17.50] That sounds fun.
[106:20.30] Yeah. Especially for a guy who got into the whole web dev thing. Cause he like, like making like video
[106:27.66] game, like type stuff in the, in the client. Like that's why I love like knockout as a, yeah.
[106:33.02] Uh, people, it was so funny when I joined eBay, they're like, you're, you're like a technical director
[106:41.90] at a startup, uh, uh, director of technology. Why are you joining as like an IC at eBay? And I'm like,
[106:49.34] I get to work on the framework. I get to work on like the classic I'm, I'm done migrating from.
[106:54.46] Yeah. Anyway.
[106:59.26] Um,
[107:01.26] And a principle like director level engineer work is,
[107:05.26] I don't know. It sounds fun, but like most of it is just, I feel like dealing with legacy.
[107:11.02] Oh, I mean, principle being a principle engineer on the IC side is, is perfectly fine. Like if,
[107:17.66] as long as you're not like dealing in the management side and you're a specialist in your area. And yes,
[107:21.66] you spend a bunch of time documenting stuff and writing. So I love writing. What do you like?
[107:25.58] Think about me and my hack MDs. Like that's just, when you, when you get an architecture title next to
[107:30.70] your name at a large company, you get to go and you're not managing people. That's what you get to
[107:35.10] do. You get to write a lot of hack MDs. Right. So I, yeah.
[107:39.58] Yeah. I meant more in like the, like the leadership role, like you might have at us.
[107:46.54] Yeah. At a startup. Yeah. At a startup. Yeah. At a startup, you wear many hats. So
[107:53.10] you, you're, you spend, when you're in that position, I spent equal amount of time designing the,
[107:58.78] designing the technology solution, talking with the people, understanding the product needs
[108:03.18] and also doing hiring. And yeah. So yeah, it's, it's all good.
[108:07.18] Dave has a fun suggestion.
[108:11.02] I wrote the original solid doc. See how well that went.
[108:15.26] Could you picture though? Like if you've got those architect guys, uh, right. I forget the name,
[108:21.58] the stupid three letter acronym for those documents. Like the, the, like the, the, uh, ADR is ADR.
[108:27.42] Yeah. No, no. Like take an ADR writer and then get them to write your like generic front-end
[108:32.54] framework docs. Nope.
[108:33.66] Uh, anyway, um,
[108:38.86] sorry. Uh, I've got off topic a bit. I don't know. I, is it more people want to push on the
[108:47.58] web socket stuff. I kind of want to know a little bit about solid events. Um, honestly, I don't know.
[108:51.98] Is there another demo or anything you want more, you want to talk on, uh, get across on the web socket side
[108:55.82] before we take a look at solid events for a minute? Um, I don't think so. Yeah. I think we, I, we talked
[109:03.66] about pretty much all, uh, everything that, uh, consists of this and everything that might come
[109:09.02] in the future. The biggest two parts that, that I, I now have to get working are the socket store or the
[109:17.02] ability to like fine grain, subscribe to data, um, on the server. And the second one is the renderer.
[109:24.14] So basically like real time server components. So with the, like the new white, the, the next generation
[109:33.10] virtual dom that we came up with in the stream, fine grain virtual dom.
[109:39.58] Yeah. It's really tricky. Any system where you need to synchronize the state, like in that server
[109:45.66] architecture thing, I was talking about a similar, it wasn't, or I guess it was persistent. I was
[109:50.86] talking about the same problem, essentially. Like you basically have, I wasn't talking about it as a
[109:54.78] virtual dom though. I was talking, you don't have to think about it as a virtual dom. Uh, do you, I mean,
[110:00.46] you can, it is a virtual dom, but really it's a reactive ownership graph. It's, it's like, it's like basically
[110:07.58] the reactive nodes and then however you encode that this is a dom element, or this is that,
[110:13.34] I mean, it is a virtual dom, but it could also be like a string, like, I mean, a little bit more
[110:17.50] within arrays. Yeah. Like it is structural, but for the most part, um, like it could be native views.
[110:23.50] It doesn't have to be a, a dom. Like you could, you could take that same thing and use it with
[110:28.70] lightning JS for TV UIs. Yeah. Yeah. So, okay. Well, I mean, this is a lot of very interesting stuff. And I,
[110:37.02] I, I, I'm definitely behind the continued, um, research here, uh, especially because it's a good
[110:43.58] showcase of understanding. Like sometimes these, these kinds of zones, let's, let's understand
[110:47.90] better what kind of reactive primitives we want, because like they start putting things to the test.
[110:52.94] Like, um, sometimes maybe I overcompensate for that. I have to admit the Strello demo was like one of the,
[110:59.34] one of those, like move the marker things that I looked at. I wanted to solve that problem for so long.
[111:05.50] And it like, it very, it influenced things, but on the positive, I mean, we still have lots to work
[111:10.30] through and I'll talk a bit about projections maybe a bit later. Um, but on the positive, um,
[111:14.94] we seem to start finding those, um, primitives that seem to have multiple applications and seem
[111:22.14] to do fill the role properly. And it only came from finding the right, exploring different zones of these
[111:27.18] kind of, uh, expectations and whatnot. Okay, cool. So I want to, I want to look at solid event. Then I, I
[111:33.02] give, I, I did that long talk, not just cause I love hearing my own voice, but because I was giving
[111:37.66] people in the chat a chance to ask any more questions, but they seem good. So, um, let's, let's look at,
[111:45.10] uh, let's look at this. There's a link in here. Beautiful.
[111:49.02] So, uh, I'll, I'll kind of like do a brief, a very quick segue by like talking about why I link solid
[111:55.58] events in the solid socket project. I think the two kind of, uh, can be like used together quite nicely.
[112:02.94] The main reason is, uh, signals across, like across the network or across web sockets are, uh,
[112:09.58] a little like more expensive than events because with signals, you have to have the current state
[112:14.94] on both sides, but because events are push based, there's nothing to pull. You just, uh, you have an
[112:20.70] event, you push it through and you're done. So you don't hold anything in state. So events kind of like
[112:26.06] take the use socket, um, uh, the, uh, the use socket kind of mechanism and can, uh, offer a more optimal
[112:34.70] experience on top of it. Um, that you cannot build with just signals.
[112:40.46] And that's all before I talk about what solid events are. Okay. Yeah. Sorry. I know I'm changing
[112:49.58] the thing on you. I just, I wanted to see. I also, I also want to see this. I wanted to see if I could
[112:55.34] find it. I wanted to find it on MPM because the, the read me would still exist. I think if I go in here
[113:02.70] solid RX, I thought I had seen this. Oh, there you go.
[113:11.18] Uh, just before this, this, I tried to create my own version of RX JS where I had pipe tap filter map.
[113:24.62] Beautiful. So you could go create memo double, even basic thing is solids memos are reducing.
[113:32.86] They pass the previous state in. So like, you could basically like chain these like pipe through stuff
[113:38.62] like an event. So you could, I don't know if this is the same thing, but I was trying to,
[113:42.78] the problem with this and the reason I deprecated this library is it went almost all the way to 1.0.
[113:48.62] If anyone knows the last version of solid before 1.0 was 0.26. It was, I, I made a change that made
[113:54.86] signals, um, uh, not update it when the value was the same, because there's this dis there's this
[114:01.90] ambiguity because stores work the way they work today, but signals worked almost like event streams
[114:07.82] originally. Like they didn't have the equality check by default. You could turn it on, but it wasn't by
[114:11.74] default. And once I turned it on by default, I just deprecated, I just got rid of this library
[114:16.70] because essentially none of this works. Cause if I change the source number here, um, or pass the same
[114:23.18] value, if I set it to zero again, it won't trigger where for an event, you can pass zero 10 times in a
[114:29.18] row and that's valid. So like right away, there's a fundamental difference between, um, between
[114:35.82] events and signals in that signals conceptually own a value and there's no guarantees afterwards.
[114:41.74] You're like, look, I am what my value is. You're not saying there's no, like, there's no, like,
[114:46.14] I'm going to have like a chain of like zero, zero, zero, six, one, two, two, two, two in from the signals
[114:53.58] percent thing. It was like, it was zero and then it was six and then it was one and then it was two.
[114:59.90] There's no, like, it doesn't care how many times you set it or how many times you propagate it along.
[115:04.46] Um, but yeah, it might've been three in between, but if no one was listening, then no one knows
[115:12.06] it was three. Exactly. Um, or with selection. Oh, I was, I was, I was, I made a four component that,
[115:20.62] oh, that I don't even activate. Oh, this is like a projection almost. What am I doing here? Apply class.
[115:28.38] It's like a wrapper. I don't even know what I was trying to do here. I, this is a problem when you get
[115:34.38] into crazy functional programming stuff. I, I never know what I was doing because I, I, this example is
[115:41.66] the other reason I deprecated this library, just on a side note, because I was like, look, create
[115:45.74] effect, transform signal filter. So get the, what even numbers or odd numbers and times it by two
[115:51.34] and then tap, which is like, do the effect console log. Or you could just go read the signal mod two or
[115:57.98] like to me, I mean, you, you guys can disagree, whatever. I actually find this easier to follow
[116:07.58] than, than this. Um, now this is like the most negative way to introduce this topic. So, you know,
[116:18.06] let, now, now that with that out of the way, what solid events?
[116:22.94] Yeah. So, so actually, I, I actually don't think that's a very negative way because
[116:29.98] the, the kind of combination, the bunch of operators that happened over there,
[116:33.66] uh, that's kind of like a similar problem that I'm trying to solve. And yeah. Uh, so you,
[116:39.42] you mentioned that signals are very different from event streams and this, this was something that
[116:44.70] took me kind of a while to fully wrap my head around, especially because as I was going back to
[116:50.54] like Elm, when Elm had signals or like, when I look at anything that has to do with like functional
[116:57.42] reactive programming, uh, like if, if you look at like how Elm talked about signals or even how Adam
[117:04.14] Hale talks about signals in SJS, they do talk about it in very, in like the event stream sense. Like
[117:09.82] it's, it's very heavy push based. It's something that you reduce or like you reduce all the changes to
[117:15.18] accumulate state. And, uh, like that, that's very much the idea that I get from them, which is very different
[117:21.10] from, uh, how solid treats signals and especially how reactively treat signals. So it's, there's like a
[117:28.06] very, uh, like it used to be either push base. And then over time, there was like inc, we incrementally
[117:33.90] made it more lazy, more pull based and into something completely different.
[117:37.90] Mike Barrett: It's a funny thing because it's so funny. And I feel bad for, to Adam for this because
[117:47.82] like he, he was like guy all into like the like French 19, late seventies research, uh, SR, uh, SFRP,
[117:58.70] like all the, like, like old, uh, synchronous reactive programming, you know, stuff. And he, he built a
[118:06.94] library and he figured out how to make it performant. Um, one of the rules of SJS is like, like you,
[118:13.10] you can't set more than once within one cycle. Like it has these guarantees. And because of that,
[118:17.90] he could do some really smart stuff that drastically improved the performance compared to any reactive
[118:22.14] library that existed at the time. And like he did all that and his base primitive, the signal doesn't
[118:29.26] have the value check. He had S which is, you know, the signal, and then he had S dot our data hit dot value,
[118:35.90] which does the value check. But I, I, I just wanted to like, call it a thing. So I, you know,
[118:42.30] I, I, I was like, okay, I'm going to name my thing signal because I don't want to use observable
[118:46.78] because at that point freaking RX was really big because of angular. Everyone was talking observables
[118:51.26] because observables are stream. I need a name for something, not a stream, even though technically
[118:56.22] his signals were kind of streams. So like, I, I, I, I was just like, um, observables are already streams.
[119:05.10] You know, there's a TC 39 observables proposal, all this stuff. I'm just going to use the name signal.
[119:10.62] And we haven't, we even, you know, I threw away my original implementation of my signals library. Um,
[119:17.98] uh, which actually was based on TC 39, uh, observable proposal. I threw it away.
[119:23.82] And, and then I was like, actually used SJS for a base until I ended up forking it and changing the
[119:29.34] behavior as in making it not do, uh, do the value checks by default, making it, um, allow multiple
[119:37.34] writes basically turned into mob X, uh, essentially in terms of semantics. Ironically, mob X called their
[119:43.90] things, observables to knock out call their things. And it was really annoying because in my opinion,
[119:50.06] all the reactive libraries that called their signals, observables had all died out except
[119:55.66] mob X arguably, but RCS was like clearly observables. And these were not the same thing, really things.
[120:02.30] So I sided with the RCS side funnily enough. And I was just like, I'm going to call these things signals.
[120:06.94] And now that's what signals means to everyone when it has no connection to the academic baseline.
[120:13.18] And, um, and basically, yeah, I don't know. It's just, we needed two different names instead of like
[120:21.82] this ambiguous, like people using whatever names they wanted. Um, so anyways, that's my, my signal.
[120:29.34] Yeah. And I, yeah, and I, I, I really appreciate it because so that's, that's what I thought when
[120:36.46] I looked at like Elm or SJS or these ways of doing like reactivity or even RxJS. But if I go,
[120:42.70] if I, when I went further back into like where FRP even came from, there were always two primitives.
[120:48.06] There, there was a behavior there and there were events. Um, but, um, and behaviors were like these
[120:54.78] continuous values that like they change over time or like, you can listen to them at like two very small
[121:01.02] increments of time and their value can be different. Uh, and it's because they were used for animation.
[121:06.22] Right. And in animation, you want kind of that vector graphic thing where, uh, like you can scale
[121:11.42] it infinitely up and down. You can move it around. So having continuous time is very helpful. But, uh,
[121:17.82] as like, we, we, we tried to do similar things for app development and it, it kind of felt like
[121:23.66] we left one of them off. So like, we are only going to use events. We're not going to use two primitives
[121:28.06] because we don't have any need for continuous time. We're just going to grab events and build
[121:32.06] everything on top of that. So that's how I saw, okay, that's that that's where RxJS and Elm, uh,
[121:38.14] they get, that's where they come from. But then we started calling the, those things signals. And over
[121:44.30] time we evolved signals to look more like the other thing, which is what behaviors were, uh, which were
[121:50.46] these like continuous pull based values, which like, you don't, you don't have an exact mechanism of change.
[121:56.70] You just like listen to them and they might change at a different time. So it's like this one term,
[122:02.30] uh, pendulum all the way from like meaning events to meaning behaviors.
[122:06.94] Uh, right. And yeah, behaviors is just the worst possible name anyone has ever come up with.
[122:14.38] I mean, let's, let's face it or behavior subject or subject. The event means something. People
[122:22.86] understand what events are somewhat behavior subject. Those are both names are terrible. So now we have
[122:31.34] signals. So yeah. Yeah. So we have, we have signals. Yeah. And then like, as soon as I realized that, oh,
[122:39.10] signals represent behaviors. Uh, I started thinking, okay, what, what do we have that represents events
[122:44.86] then? We don't, we really don't everything. Like we just have event handlers that you invoke an event handler.
[122:50.38] It might call something else and it might set into the state. And at some point you were showing off
[122:56.30] on your stream, uh, like your new proposal for solid 2.0 reactivity, where you split the effects
[123:01.34] and you were trying to communicate like some, some sort of duality, uh, that, that, that showed up when
[123:08.86] you split your effects, because now your signals returned two functions are pure and ineffectful. And now
[123:13.66] your effects have like, they take kind of like those, like those same functions, the pure end effect.
[123:20.62] And that's when I kind of realized, okay, this is the other graph. This is the event graph. This, that's
[123:25.26] where it needs to be. So that's kind of what I was trying to build is that, okay, we have this full base
[123:30.86] primitive, we have signals, but we need something to represent this other side, this mutation side of
[123:36.46] the graph or the event side of the graph. That's what this is trying to be. That was a very long
[123:42.38] winded, uh, intro to this.
[123:44.38] I mean, create event is just a basic event emitter. This looks like like a node. We have an event emitter,
[123:50.94] right? This is similar, right? Um, yeah. So at some point I even had like something like create effect.
[123:57.90] So it's, it's called create listener where you would pass in the, uh, the event itself as the first
[124:02.70] argument. And the second argument would be the side effect. Uh, I, I want to bring that back for
[124:08.30] reasons that I'll, uh, get into later, but right now here, you see that there's a console log on event
[124:14.06] console log something, right? Uh, yeah, you would do this using a listener because it's a side effect. You
[124:19.82] wouldn't just directly pass in a side effect into the handler. But for, for right now, we are, this is how
[124:25.74] we are doing it. Okay. Okay. Okay. Um, I mean, cause this does look like a simple event. Every,
[124:34.46] everyone's seen, you know, node event emitter, right? Like this, the API is slightly different,
[124:40.30] but it's like new event emitter on, I mean, these are named, I guess. So this is like on, with an event
[124:47.66] emitter, you can have multiple named events where this is only a single one, but it's like the same
[124:51.74] kind of concept, right? Amit. Yeah. And then on this, right. So, okay. Yeah. So a couple of small,
[124:59.74] like, obviously I made it to look like a tuple or I made it to look more like signals by doing a tuple.
[125:05.42] And the, the other thing is that, uh, these subscriptions are created inside solid.js roots.
[125:10.94] So if you dispose of root, any subscriptions and even subscriptions that were made inside it are also
[125:16.46] nice. Nice. Okay. So that's the first thing I say. And then the transformations is where like the
[125:26.22] composability comes in
[125:27.34] on increment. So you create an event. Okay. On it, this on message. Oh, okay. I see. Cause these return,
[125:39.90] like they don't have to be effective. They actually return their value as a function that can also be
[125:50.06] called with the payload. So on message, um, will call interesting. If you pass it to call back,
[125:59.82] it will call it with the payload that comes from here. Right. It's just a map. Yeah. Okay.
[126:08.14] Disposal. This is what I talked about that they, uh, when the root gets disposed, you dispose the
[126:14.38] subscriptions. So all of these get created inside the root and the halt is basic is how you do filtering.
[126:20.30] So you can inside a branch, you can say halt it right here. So now it's not going to, uh, propagate
[126:26.94] like on any events, like events further down the chain. Okay. Okay. So this is something else you import.
[126:34.94] Okay. Yeah. It's a, it's a little helper. Uh, I, I didn't want to make it a, an operator. I'm trying
[126:40.22] to avoid operators if, but if I can. So just helpers like these. Yeah. Yeah. No, I, operators is one of
[126:47.98] those things. I remember at one point RxJS shipped with like 120 of them and then they're like, we're down
[126:52.78] to 45, like we're in a good place. And it's like, yeah, I mean the, yeah, every time someone's tried to
[126:59.82] standardize it's been a matter of trying to reduce the number of operators to get started with. Yeah.
[127:04.46] Um, okay. There's, there's going to be like, there's a lot of stuff that, uh, things like RxJS operators
[127:11.98] can do that. You're going to need to do this in this model. Uh, sometimes they'll require a bit of
[127:17.26] complicated logic. Sometimes I'll just say that, okay, convert this into an Rx observable, bring whatever
[127:23.74] operator you want or chain of operators and then convert it back to an event so that you can pipe
[127:28.86] it into signals. I see. If you return a promise from an event callback, the resulting event will
[127:34.94] wait till mid until the promise resolves. In other words, problems are only flattened by events. Okay.
[127:38.54] Interesting. Okay. Interesting. Yeah. So, yeah. So if you have, if you do an async operation inside
[127:47.66] the event callback, you just get an event back on the other side instead of an event of a promise.
[127:53.74] of the value. Uh, this is, so th this right now, um, there's like a couple of different ways to do
[128:00.70] this. Um, you can do something like call merging where all the async stuff happens immediately. Um,
[128:08.46] which is okay for like mutations. You don't want to do data fetching this way because with data
[128:13.90] fetching, you want to cancel the previous one or avoid like getting it some event back, which this
[128:19.18] doesn't do. So this is, uh, this is one of those zones where I, I would probably end up
[128:24.70] bring them like, uh, bringing some operators just because like async events, there's like three, four
[128:31.02] different ways you can handle them and each of them have their own use case.
[128:34.30] Yeah. Yeah. I was thinking about the get case. Cause it's like, you don't like this kind of sneaks
[128:43.18] away from like, like suspense. Like you kind of hiding, burying the lead here a little bit. I mean,
[128:49.58] it's, it's fine when you're trying to like, as you say, do an action. Like it's part of the transformation
[128:55.10] that goes from like event to do the thing. But when it's on the read side, it's, it's, it's awkward. UI
[129:03.42] doesn't get to play along with this. I'm hoping this can, this can be hooked into suspense at some
[129:09.34] point, but, uh, that's for like, that's two iterations in the future. Yeah. Create subject.
[129:16.30] Okay. Yeah. So this, I just borrowed this terminology from rxjs. Uh, but this is basically how you combine
[129:24.38] your event streams packet to signals so that you can have a UI on top of it. Um, the original FRP in,
[129:31.74] the, um, its specification in Haskell, uh, they called it this a switcher, but we also know this
[129:39.50] as a reducer, like there's a bunch of different names, uh, that you can call this by, but basically
[129:44.46] like an event happens, you mutate the state. That's it. Interesting. Because this, this here is a chain,
[129:51.18] right? Like this is actually like, this is the zero is the input to this, which is the input to.
[129:57.34] So it's, it's not, it's, it's, it's more of a merge. Uh, so the zero is the default value and these,
[130:05.58] so initially I, I had like, you update a subject with a single event, but, uh, and then like,
[130:12.46] I had a different mechanism to combine a bunch of events into a single event, but I realized that
[130:17.58] every time you have a piece of state, you have a bunch of different events that change it. You don't
[130:21.02] just have one event that updates that state. So I just made this like, okay, you pass in multiple
[130:26.54] events and each of those events has a diff like mutates. It's, or changes the state differently.
[130:32.54] So when there's an on increment, you take the delta, you take the current count, you add them.
[130:36.78] And when there's an on reset, you just do as you just, uh, set it to zero. So those are different
[130:42.14] events that change the state differently. And the first argument is the default.
[130:46.06] Got you. And then we basically get a signal out on the other side. Okay.
[130:50.46] This to me was, um, like, uh, uh, as I was looking at like create async and everything that's like
[130:59.26] happening with the activity, create projection. What I realized was all we are trying to do is get
[131:03.74] rid of setters and effects because that those are the escape patches. It's not just that effect is an
[131:09.42] escape patch. It's that create signal is also kind of an escape patch because we are setting that signal on
[131:14.54] our own. Um, like we, we want to avoid both of those, not just effects. So I looked at this in
[131:21.42] a sense that it, it gets rid of the setter. We don't have the setter anymore. We have a very predictable
[131:25.98] way of how signals update all of that. Like all the definitions are right there.
[131:30.06] Yeah. Yeah. That, that is one result of this. When we, you're right, create async, not having mutate is
[131:37.58] very intentional, create projection, getting away from people writing effective store, create memo.
[131:43.34] Everything is trying to do the directionality so that the right isn't on the outside.
[131:46.86] Yeah. Uh, events let you, uh, basic event
[131:50.22] system, let you just chain right along there in a derived way, right from the,
[131:54.46] like you enter the reactive system, like the pipe much sooner, essentially. Most of the time we enter the
[132:03.34] pipe, like in terms of like an event handler, we write a bunch of imperative logic and then we,
[132:07.10] we do multiple changes and then that's where the entry points are. This is like often like a single
[132:14.30] event that comes in or maybe it's multiple events, but you, you basically almost immediately go in
[132:19.26] without the imperative logic. Yeah. Okay. Create subject store, create, you think.
[132:25.18] So I think subject is basically like, yeah, it wraps and create async, which I'm probably going to remove.
[132:30.78] Uh, I don't like, I don't need to have this primitive, uh, subject store is the interesting one though.
[132:35.82] Okay.
[132:42.30] So yeah, it's the same idea, but with each event, you don't return a new value,
[132:47.74] you mutate the current one. So it's like create projection, but you have multiple functions,
[132:52.14] one for each event that you want, uh, to mutate the, uh, mutate the store.
[132:56.46] Yeah. I think it's almost time to talk about what I wanted to talk about with projections.
[133:00.78] This, this, this, this, this got me there, but let's, let's, let's keep on going in here. Create topic.
[133:08.22] What's the topic. So this is less, uh, way to combine multiple events into one. Again, I naming,
[133:14.46] I can like, I can come up with probably better names, but yeah, so you have on increment on decrement.
[133:19.82] You just want one event that emits when any of those do. So like combining events into a single one.
[133:26.54] Okay. So this is like a merge, create partition and partition is the other side where one event and
[133:32.78] you have a condition, you want to split them. Right. Okay. Merge and fork. Okay. Use cases
[133:39.74] state derived from events. Yeah. This is a classic. Yeah. This is what I was talking about where you
[133:45.90] enter the re what you said, where you enter the reactive state or the reactive system much earlier.
[133:51.10] So here you enter it as soon as there's a button on click instead of, uh, instead of having a handler
[133:57.34] that calls the signaling here, you go emit anchor increment, and then it ends up on increment
[134:06.06] creating the subject. It does the count. Yeah. And this is also where this, you, it's like the oldest,
[134:15.26] my oldest kind of joke on Twitter is like, sometimes people on the, from the angular side would show
[134:20.78] like this really well thought out R X J X code that was like really clean. And you could see like all
[134:27.42] of the stuff pipe together and they're very proud and they put it there and they're like,
[134:31.02] put on Twitter and they're like, look at this, this is why angular is the best. And then you look at it
[134:35.34] and you're like, I could write this in react in like one quarter of the lines of code. And it actually
[134:42.62] would seem simpler. It's like what I showed earlier, this is a basic example and you can already
[134:47.58] start seeing the bloating. The problem is when you need this, when you have retry logic, when you have
[134:53.90] more complicated processing, there is a tipping point. And after that tipping point, the more
[135:00.22] imperative looking logic starts going downhill really quickly. Like it's like, it's like a cliff,
[135:06.86] um, where this will scale until infinity relatively well. Um, okay. Yeah.
[135:13.74] Vent compass. And this is, so this is, I didn't know what to call this section. Uh, this is where
[135:22.62] that kind of gets, I try to highlight the exact thing that you're talking about. This is the drag
[135:27.42] and drop logic from strello. Yeah. Yeah. Yeah. This is, yeah. Drag and drop is actually the classic
[135:33.82] thing people always do with Rx. Yeah. So yeah. Do, do, do, do, do. And then, then, yeah.
[135:40.46] I can, I can still make this like probably more cleaner, the event version. Um, like this was kind
[135:48.54] of written in a hurry because I was trying to get the submission in, uh, and this was like two,
[135:53.02] 3 AM in the morning, but yeah, I can, I can likely like make this whole section, um,
[135:59.34] a lot cleaner, but here you can see that except drop, which had like, et cetera,
[136:04.22] like all over the place here. You can see when, when do we accept a drop on this, uh, on this element.
[136:10.46] Yeah. Quickly and Sherry, we need diagrams here. Yeah. I mean, this is what, yeah.
[136:15.82] Rx has those lovely little, what are they called? Marvel diagrams. What's the current subject here?
[136:22.62] Uh, if you're just joining in, we are, we already talked about the web socket stuff. We are now talking
[136:27.10] about solid events, which is the whole other side of reactivity that solid doesn't concern itself with.
[136:33.34] So death made a library, um, uh, giving these capabilities. So we're looking pretty deep into
[136:41.50] the API surface of it. Optimistic UI. And the thing about needing diagrams is that you can,
[136:47.98] a lot of time you can generate those diagrams by either at the runtime tracking, what events depend on
[136:53.82] what, or even just static analysis. So that's the, uh, the other zone where like, or, um, basically
[137:01.26] statically analyzing these events and like knowing them at compile time. And there's a lot of optimization
[137:06.38] that can come out of that as well, which I have not, uh, written about or thought too much yet.
[137:12.30] Yeah, it's true. Uh, it's part of the reason that things are harder to write is because all the points
[137:19.42] are explicit, like all the switching points, all the, like with imperative logic, you will branch
[137:25.50] just like conditionally in the middle of something and, you know, signals are pride themselves in only
[137:29.82] tracking the parts that matter or whatever. With Rx, you have to like pull all this, like, or events
[137:34.70] standardly that conceptually, you kind of pulling all the dependencies out to the front and hoisting
[137:39.74] them. So when things fork and you want to make sure that like only on this, do you go this path
[137:45.74] and this path, and it depends on these things, you basically have to hoist it all out and split into
[137:50.30] different compositions to get that same level of granularity and do that. It's much trickier,
[137:55.66] but on the positive, you, it's literally what you see in front of you. Like there's no,
[137:59.58] like, there's no implicitness about how branching or forking or, you know, halting or any of that
[138:06.94] happens. Uh, so from that point of view, it is completely analyzable by a compiler and interesting
[138:16.86] problem space. Definitely. Yeah. I'm really interested in what would, what resumability can look like
[138:25.66] with, uh, with the event primitive, like built-in or something that the compiler recognizes because
[138:31.98] resumability is all about event handlers. So if, if each event handler chain is made very explicit
[138:38.78] in the components, it's, it might be easier to like, just pull it out.
[138:42.94] Yeah. Yeah. It's, it's tricky. Cause yeah. I mean, yeah, I, I guess we did talk about,
[138:53.90] about this in the hack MD because like, it's like where you do the, where you enter and where you do
[139:01.34] the switch in terms of consciousness, like in terms of like, here's an example, the benefit of going
[139:07.58] directly to the event is you basically remove all the closures like by its very nature, like, because
[139:15.50] I mean, maybe that maybe that's not completely true, but all the closures are explicit is, is,
[139:23.50] is better way to put it because you're not, you're not wrapping over values. You're, you're, you're,
[139:28.06] you're setting inputs that feed into the pipe. So in a sense, if you had a system that was completely
[139:34.06] event-based, you could maybe actually get away from the complexity of the compiler thing. So as I said,
[139:41.02] if you forced everyone to write their code, like it all the time, you would have people
[139:46.46] actually, and Dominic's probably not here anymore. His earliest version of Octane was kind of like
[139:54.22] this. I think he showed it to me. Um, and I was like, man, like this would make resumability, like,
[140:00.78] like a non-issue, like, because everything, it's all state got fed through any handler. Didn't matter
[140:07.42] if it was like a signal or an event or whatever, you always got the state fed through. So there was,
[140:11.26] it wasn't a closure thing. Um, so yeah. Yeah. That makes sense. This still has closures though.
[140:21.42] So if you scroll like a little bit up, um, there is a, like, you do read from signals within these
[140:27.26] event handlers. Uh, Oh really? Did I not see? Yeah. So actually it's right there in the, on drag.
[140:33.82] It's in the drag and drop example, because when you're deciding, uh, uh, this is the imperative
[140:40.22] one. If you go down to the, uh, the event version of this. Yeah. Right here. So on drop note, you are,
[140:47.50] you are like calling except drop. So yeah, yeah, yeah. So you can, you read from signals within these
[140:55.10] event handlers as well. So that, that, that might still be an issue for like, you still do need closure
[141:00.94] extraction, I think. Okay. Fair enough. Yeah. I, because there's always going to, yeah. Okay. Yeah.
[141:07.66] Which is a little different than what I was talking about. We're all the state fed back in. Um, okay.
[141:13.02] So yeah, you have lots of examples in here, which is really cool. Um, yeah, we already saw stuff with
[141:17.98] that fine-grained mutations. I like that the strello demo is used a lot in these examples, because this is
[141:24.78] the double effect update that we talked about. Yeah. Fine-grained additions versus reconciling the, the
[141:31.82] board, um, using subject store. This is where, uh, like this idea of the idea of events was like
[141:40.06] completely independent, but after working on strello demo, uh, or actually like before I did this, uh, the
[141:47.50] optimistic implementation for strello, uh, right before that, I realized that, okay, this events
[141:53.26] library that I have can actually, will actually be perfect for, uh, like optimistic mutations like this.
[142:00.06] Yeah. It's actually interesting. Cause I had this discussion. Milo actually didn't like create
[142:05.26] projections API and almost wrote this API word for word. He, I, I, it's funny. I feel like pulling up the
[142:13.18] discord. He wrote like create projection this, and then said on mutation that he, I kid you not. I
[142:20.54] had this discussion with him yesterday and he was like, this would, this would be better. And I'm like,
[142:25.58] I'm not sure. I guess my, my, the concern was I was not picturing or neither of us were picturing multiple
[142:32.14] events, but this actually is probably the key to it. Um, yeah, it was, it was, this is actually kind
[142:39.10] of funny seeing it in front of me right now. Um, I'm going to make a note for Milo. Um,
[142:43.66] but yeah, that was my thought as well, because the split effects and like the branch with has updated,
[142:53.10] uh, or the, which was the demo that, um, you had for with create projection or at least the snippet,
[142:59.66] not the demo. And all I could see when looking at it was that there's two different branches happening
[143:05.34] here. Yes. But the relation, the condition is implicit or it's like, we're trying to figure out
[143:11.42] the, the condition while we're inside the function. If we could just make that more explicit, we will,
[143:17.26] we can have two different functions that do this. Yeah. Yeah. It's, it's interesting to kind of push
[143:24.30] people that way, but then you're like, is it, is it is generalizable because the whole idea for people
[143:28.62] not following is, is that there's the original thing that gets the source and then on any of these
[143:36.38] mutations, um, it tries to do like the thing that's might not be obvious here is the, when you're dealing
[143:46.78] with some kind of projected store, um, some kind of like, like fine grained thing that you want to
[143:54.30] like mutate or update, um, in this kind of derived way, the, the, you, you, you're basically always
[144:02.14] doing a diff, like no matter how you look at it, even you, if you, you're just trying to find ways to
[144:08.30] do it more optimally. Like in this case with these mutations, we know that we can create a single note,
[144:13.34] move a single note, edit a note. These are very specific operations, but when you don't know
[144:19.26] the all, you know, you update some data and you don't know, all you can do is diff it. You get new
[144:23.18] data from the server. All you can do is diff it. So like all these specific mutations are just to avoid
[144:30.38] diffs. Like in this version up here, essentially you're like, okay, these are specific mutations.
[144:35.02] I can do them one by one. This here, I, you know, it's because the board updated, I am going to
[144:41.74] do a diff. So you reconcile that's do the diff. So like essentially there's this kind of weird,
[144:49.74] like here's two effects. It's separate, but what I was trying to do was get rid of the effects and
[144:55.02] make it into a derived value, which create projection. You basically are always diffing.
[145:00.06] You actually have to worry about, um, sorry, we're going to tangent for just a second here.
[145:09.10] Um, what I wanted to just, just kind of conceptually go here. This isn't going to
[145:17.82] be actually running code for a second, but if you saw something that was like this, create projection.
[145:25.50] And let's say it gave you the store and I'm sorry for people who aren't familiar with this API.
[145:29.50] I've been talking about it for weeks, but the idea here is this is a derived way of updating something
[145:35.74] like a store. Um, and because stores need to be granularly updated, we have to actually track the
[145:41.50] updates granularly. It's kind of like immerse produce function or whatever. So the thing is,
[145:45.34] if you had something like this store.a equals, you know, signal a, you know, so like you're basically
[145:50.78] saying whenever a changes, I'm going to update store.a. This is usually the example, but if you said
[145:55.10] store.b equals, um, B or our startup B push B. Okay. Do you see, like, you see why this could be problematic?
[146:09.34] This is happening every single time. Exactly. Right. Like if you, if you, if you are making a memo, let's try this again, const m equals create
[146:24.70] memo, something like derived. And you have previous. And you're doing this. Well,
[146:32.06] what you're going to do is you're going to say, okay, um, I mean, I can one line it. Actually, it's you do this, you go clone
[146:42.62] previous. A equals a
[146:52.30] B equals. I mean, I, to be fair, the fact that we're recursive, maybe this problem happens with any
[147:02.54] kind of recursion, but like, you have to be aware. Yeah. I mean, it's interesting. Cause this also does
[147:08.70] it too, doesn't it? If you think about it. Do, do, do, do, do. Yeah. Like even if A updates,
[147:13.66] but B didn't update, you have two copies of it now. Yeah. So like you, you almost never write
[147:21.90] Yeah. Like this has to diff essentially, or here, this has to diff here. Usually you just,
[147:29.90] you, you, you basic more than often what happens is memo always returns to the next state. So like you just
[147:37.26] make it the state you want it to be here. You have to actually change it to be the state you want it to
[147:43.42] be here. Like, I don't know. There's a slight subtle difference between knowing the previous
[147:51.50] previous state and having A and B and knowing what the next state should look like versus
[147:58.54] again, having the current state. Yeah. I guess it's not actually that different. I was trying to like
[148:04.06] think in my head, if there was like something, we need a different example. I'm trying to think of it
[148:08.22] as well, because like conceptually the, the, the whole problem with this is that like, if you,
[148:16.22] if, if, if A updates and B doesn't update, you're still always pushing B, right?
[148:22.86] So it's kind of, it's kind of awkward. I think we kind of understand this now. So I think people avoid this.
[148:31.26] Um, generally speaking, they don't write code like this, but it is something that like, you have to be
[148:37.02] aware of. Like if you're creating a, like a projection where you're updating state and stuff,
[148:42.06] you're basically doing a sort of diff, you're like, okay, I have this new data.
[148:46.46] The way Milo put it to me was he was pretending like this was an update function, like a,
[148:52.78] like a produce call. And he said to me that this update, um, update
[149:05.58] like, and I shouldn't use B A and B, I should use like one and two, like different values of the same
[149:14.62] signal or set of signals. Like assume that these are thing should equal update two was what Milo
[149:24.62] put to me, like this principle has to kind of hold. And the only, the, which is right, because
[149:36.14] like this is a journey and this is a single update, but at the end, like, you know, that
[149:42.54] when the state is in state two, you, you want it to be in state two, you, the journey shouldn't matter.
[149:49.74] You know, like, like, and the only way you can do that is if you diff of some sort in here. And I don't
[149:58.46] know if this is like obvious to people, like every time we, this is why when we, when you write code,
[150:04.62] like the example in here, um, this is two different effects, but if you were to combine it, let me see,
[150:11.18] hack MD, I think it was something along the lines of, uh, do, do, do, do, do, do, do, do, do, do, do,
[150:16.70] um, no, no, no, no, older. God, how long did I write about this stuff?
[150:26.46] Derivations as first principles. That sounds about right.
[150:31.66] Five months ago. Geez. How long have I been working on this stuff?
[150:35.26] Okay. Well, yeah. Um, this is the, the, this is the projection version of that code, right? Where
[150:42.94] you do the timestamp, you ask if it's updated, if it has, you go the one branch and you reconcile,
[150:48.30] you do the diff or you go the other side where you do it one by one. Um, you have to bump up the font
[150:54.14] size. Yeah. Let's do that again. Yeah. Yeah. Let's, let's look at this again. Um, basically you
[151:02.30] have to understand here that like, this is very clear. It's a diff reconcile, like a hundred percent
[151:08.06] doing a diff. If you go down this path, you are doing a diff. Good. But on this side, you have to,
[151:12.62] this is the key to the whole thing. You aren't doing a diff. Exactly. You're optimized way a diff by
[151:21.18] knowing that you've already processed some of this list, right? So every time we use a timestamp,
[151:29.18] you could say like done processing, you could say like, Hey, mutation, as soon as you've been processed,
[151:33.42] you know, done, you know, like there's other mechanisms for, for trying to make that decision
[151:38.62] point. But in a sense, these are both sort of diffs. You expect that whether you, you know, got the first
[151:48.30] mutation and then the second mutation, or you got both mutations at the same time that you'd get the
[151:53.58] same results. And if you look at the actual function we use for inside of the Strello demos to do it,
[152:01.42] we do things like call push, you know, like, like when we get a new one, we push it on. It doesn't have
[152:06.78] to be immutable. But like, we have to be careful that push only gets called in a specific
[152:13.82] thing. And to be fair, this is no different than create effect, to be fair, or create memo,
[152:19.90] we generally try and prevent things from over executing. But when you think, consider things
[152:24.30] like transactions and forking stuff, it's gonna be possible. Because I was talking to Milo about
[152:30.30] solving this. And he's like, Oh, Ryan, it's really easy. You just run it twice. React strict mode,
[152:38.06] right? Right. I'm like, that's like, do you want people to hate you? You know?
[152:45.98] Yeah, yeah, I mean, you're turning more solid is turning slightly more into react with 2.0. Anyways,
[152:57.98] so might as well. Yeah, yeah, I mean, it was just it was just one of those kind of funny comments where,
[153:07.50] well, 2.0 does have that aspect because the effects pull all the way down when it comes to a scheduling
[153:15.82] thing. Like, anyway, but I'll talk more about that here. I still got you here. I wanted to talk
[153:19.98] about this one while you're here, because it's very close to the area that you've been working on.
[153:23.42] But yeah, imagine splitting effects into multiple effects at compile time, if no other error points
[153:29.98] from the scope is used. A huge problem is getting pretty confused fast, you can't do it. Yeah. And
[153:33.10] it's kind of interesting, because on one hand, you want to split them, but then you increase the
[153:37.90] creation costs, like I'm pretty sure Svelte and does similar stuff to solid or some level of effects are
[153:45.66] combined because if you make too many effects, it starts adding up. I could be wrong. You guys
[153:51.18] can correct me on that. So like, I was playing around. That's what this whole has updated, updated
[153:59.34] a lot since run. I've actually implemented this in the 2.0 logic. I told Milo and he looked at me very
[154:03.90] horrified. Like this was like a property that like was unsafe. He's the academic one. I just make things work.
[154:10.62] And, and, but like, it's like, this is a trick because you could, you could literally go this,
[154:20.14] this equation could be, instead of checking the value, you could actually skip the whole value and
[154:24.06] just go like, Hey, has B actually updated? Like not even has a value change. That's an easy one, but
[154:30.94] actually you could, you could probably avoid even executing B right. You know, this solves Fabio is
[154:37.90] like, he gets very upset that the random numbers, because when you group effects and you have like
[154:43.10] math.random in the middle of the effects somewhere, it's possible because every time it reruns, it'll,
[154:48.30] even if the specific thing didn't change, math random will change. And I'm like, look, we do our best,
[154:53.58] but like, there is some amount of like extra stuff going on. Like, like we, we're not going to like,
[155:00.14] everything isn't necessarily a hundred percent the fine grainess. What we can guarantee to you is that
[155:03.58] we're not going to recreate a bunch of extra DOM elements and that we're not going to do stuff,
[155:07.98] but like functions may run, you know, more than they have to, you know, it's like, there's like
[155:14.46] that small portion of the time where it's not fine grained for a different reason, but you're not going to
[155:19.82] observe it except for if you're like putting, like counting the number of times as function ran.
[155:25.42] Um, and not even like a compiler. Yeah, yeah, exactly. Right. I need the react compiler to hoist
[155:34.78] out his math.random, you know, but what I'm getting at is like, it's, it's at the most granular of levels,
[155:40.94] like the final bindings. It's not in your code. Like it's in, it's only in the JSX that this happens.
[155:48.22] Um, but this would solve, this could solve the, the, that problem.
[155:53.18] Yeah. But yeah, it w it was a very similar observation that I made, which was,
[155:59.26] there's always some sort of a diff involved. Either you reconcile the entire state of the board,
[156:04.70] or you have something keep that keeps track of what actions you have already applied so that you,
[156:11.50] you diff and you figure out, okay, these are the only ones that need to be applied.
[156:15.18] Or like, you have something like updated since last run, which like, okay, it has this value updated
[156:20.94] since. Yeah. It's, it's, it's, it's, it's. The way I'm actually doing it isn't actually the value.
[156:27.66] I'm using clock cycles inside the internal reactive system. So it actually is like, it, it can do it
[156:34.70] without checking the value or running, which sort of answers your question here. Yeah. Um, and yeah,
[156:41.10] Apollo confirmed. Yeah. Effect, uh, Svelte does the same basic thing that solid does in terms of template
[156:46.94] grouping and stuff. Yeah. Yeah. So yeah. And the point is that in, in like that, the sort of a pull
[156:52.30] based system, that's really the best you can do. Like you have to check against something, but with push
[156:57.90] based, you kind of, you, uh, uh, you get to kind of circumvent that because you have a very specific
[157:03.90] instance where everything updates and you have a very specific reason for what needs to be updated.
[157:09.90] You do need to check for like, like in the, in the create note, uh, update, there is a check, like,
[157:15.90] has this not already been created? So you do have to kind of like some, maybe like you want to call
[157:20.30] it item potency checks. Um, but other than that, you even happens, you mutate and that's it, which
[157:27.42] is really convenient for stores. Yeah. I mean, it's, it's gotta be on the right portion of the,
[157:33.66] of the code path that makes work well, because the RX does classically have this problem. The reason that
[157:40.54] angular people like jumped on signals, it felt like it's not the true story. We already did that on a
[157:45.58] previous stream talking with, uh, Pavel and, you know, Alex, where it was a long journey to get
[157:51.18] there, but like from the, their community perspective, the reason they're just like,
[157:54.62] yes, is because they were using RX for so long on the get and bench side, and they would have things fork
[158:00.62] and then re-merge again and trigger twice. Like the, the, the, the loops in the cycles drove them
[158:06.22] absolutely nuts. But where our RX fits really well is not on the get side. It's actually between on the
[158:14.46] path from the, like to the post it's like from, from like the user action going back into the
[158:21.10] reactive system is probably the most powerful place for, for events. I mean, there is transformations on
[158:26.38] the other side coming out, but the place that's like uniquely interesting is actually going back in.
[158:31.02] Um, yeah, that's exactly what I'm trying to build here because like signals, they exist, they do a great
[158:37.90] job. Uh, I don't want like RX JS like with its own state primitives behavior subjects taking over that.
[158:45.50] Um, but like, what is one use case that we can, what, what are these like specific use cases that
[158:52.46] we can solve with events knowing that we already have signals on the other side?
[158:56.46] Um, we, we really got to thank Ryan Florence, I think, sorry, but this whole Trello demo thing,
[159:05.82] like not only spawned the whole Cray Projection work and the whole mutables work. I mean, I had,
[159:12.14] it's funny, I have some notes from like two years ago in my HackMD that I'm just like,
[159:15.34] I feel like I only thought of this, you know, like a month, a couple months ago. And it's like, no,
[159:19.66] you've been talking about this for like three years, Ryan. Um, but that demo just like accelerated
[159:25.82] everything forward. Like I, it's like used in all these examples and like talking about, uh, you know,
[159:32.54] this kind of situation, um, that bridges, even with the web socket and the local first stuff,
[159:38.62] this whole idea of like fine grained projected or derived data is a very interesting, um, thing.
[159:47.10] And I I'm, I'm very happy for that demo because, um, without it, yeah, like we already did single
[159:52.86] flights, like the single flight mutation was inspired by the react server component notes demo.
[159:57.02] This one though, uh, really inspired this whole granular, like zero, I don't know what to call
[160:03.58] it zero work diffing or like mutation optimistic update approach, which as I said, hasn't been matched
[160:10.78] really in any of the other frameworks. And we're, we haven't even just done that. We were actually,
[160:16.62] you've come up with different ways to represent the same space. It's like, it's feels like it's a
[160:20.78] thing. So yeah, Ryan Florence, big heads up for making us like, look at the problem, go like,
[160:27.26] here's the problem. There is, there is something legit here in react. You kind of just forget all of
[160:33.50] this. And you literally just like, kind of like, you just write basically the first one. You just like,
[160:39.82] you're just like, like, you don't write this in react. Like you don't even have to do this. You,
[160:44.46] you basically just go, he clone the notes, apply the mutations, and then stick it into my V Dom.
[160:50.86] So in, in solid, you can remove the untrack and the reconcile.
[160:55.18] Yeah. Yeah. In solid. And that basic, basically what you could do solid version of it is a one
[161:01.34] liner. You just say reconcile, like react. The reconciling happens automatically in the JSX here.
[161:06.94] You have to call reconcile. You could just say, right? Like here, we did them separately. It could be,
[161:10.94] could have reconciled on the whole board. It doesn't matter. So here we just call reconcile.
[161:14.14] So it's a one liner. So to be fair, the Trello demos in react look like apply mutations into the JSX.
[161:23.18] In solid, it's apply mutations, reconcile into the JSX. So, you know, it's a little bit nicer, but
[161:31.02] we add this little bit of extra code here and it completely changes the performance aspect.
[161:39.98] And then maybe people don't care about that much, but it changes the performance and execution aspects
[161:44.30] in like a dramatic way, in my opinion. Like obviously it, no one's probably spamming this,
[161:52.30] but if this test, if the Strello demo was DB mod, you know, like Ryan Florence's original
[161:57.26] demo, the solid version would be absolutely demolishing the react version in terms of amount
[162:03.50] of work getting done. So, yeah, it's interesting. And this little bit of code is less than the incremental
[162:13.26] signia approach in react amount of code. So yeah, I'm just glad this example is this. It's like,
[162:22.14] it's on my list now, right? We have to do MVC. We have the JS framework benchmark,
[162:26.70] which is basically super to do MVC. We have hacker news and we have Strello demo.
[162:33.10] So like they each show something different. Um, I think this one's officially on the list, um, so to
[162:40.14] speak. So very, very cool demo and big, big shout out to Ryan Florence for, from getting people to all
[162:48.30] build their own versions is quite a journey. And then you have a whole alternative reality where you
[162:54.62] try to use RxJS. I think we talked about the stuff earlier. All right. Yeah. Um, I don't know. I think
[163:01.34] we're pretty good on what I wanted to talk with you. Was there anything else you wanted to share?
[163:04.62] Or I'm also giving the audience another chance to ask you any outstanding questions.
[163:09.74] So I have, uh, there is something that, uh, Dave and I have been cooking up, which
[163:17.26] I would love to hear and get your thoughts on. Yeah. So it's, it's an idea mostly inspired by
[163:23.66] weedcon. It's an, uh, like a conference around signals, fine grain reactivity.
[163:31.34] Yeah. Nice. And one day or two days of content from like community people, framework authors,
[163:38.38] implementers, people in companies who are using this. It's general enough to do it. And I love it.
[163:45.42] It's hilarious. Cause you need it. You need the audience pull to be big enough to, to, to get enough
[163:52.54] communities in, but then it's like, how do you tie them all together? Cause there's like JS nation,
[163:57.74] right. Where it's like everybody, but the only thing that's funny about it is it's like the not
[164:02.46] react comp. Yes. Like JS nation ends up being that way because it's like literally next door to, um,
[164:10.06] like react summit. But you're, so you're suggesting, so it's like, cause like who would, who, who'd speak
[164:17.74] at signals. We would have, we have Svelte. Anyone that's not in, in react. I mean, I was thinking
[164:25.50] like, even like, uh, sending, uh, like reaching out to the react compiler people and like, Hey, it's,
[164:30.46] it's just about fine grained reactivity. Come talk about. I mean, you, you're right. Actually,
[164:34.78] fine grained reactivity. No, it's fine. It's not actually not react. It's interesting. But yeah,
[164:38.78] the compiler would be fair game. You also have all the state library people legend state mob X.
[164:44.38] Yeah. So yeah. I mean, it's an interesting thing. If you pull it together, that's pretty interesting.
[164:48.06] Well, terminal will be there doing something weird.
[164:51.50] If you, if you want to show, I mean, it's an online, it's a virtual thing. So yeah,
[164:56.94] probably not as exciting. Yeah. Mob X. Yeah. Yeah. Interesting. Yeah. Um, yeah, I, that,
[165:05.02] that's interesting idea to put forth, um, you know, got signals.
[165:10.46] Yeah, this is the first of me, first me hearing it. Um, so yeah.
[165:14.86] It's like a very fresh idea. Like I started talking to Dave, like maybe three, four, five days ago.
[165:21.58] Um, I actually had a call with, um, Patak. I, I forgot his real name, but like how he runs beatcon and
[165:29.98] like get some ideas from him as well. But there's something that, uh, I'll try to keep cooking and see
[165:35.82] you and I see where it goes. Yeah, no, I mean, that's, that's definitely very exciting. Interesting.
[165:42.06] There was, there was actually a question earlier in the chat. Someone was asking if you'd figured
[165:46.78] out how to spend your solids hack money. Yeah. Um, somebody, somebody, I think it was Jay Larky.
[165:58.46] Probably. Yeah. He, that was him.
[166:00.06] Matias. Yeah. Thank you. Matias. Yeah. Yeah. Yeah. Whichever way it is. I'm sorry.
[166:10.30] I haven't figured it out yet. It's probably just gonna go back, uh, go to, um, like, uh, repaying my
[166:15.66] education loan, even though it didn't come out of. I think that's a fair expense for anyone. Um, yeah,
[166:24.62] no, uh, no, we're, we're good. Um, all right. Well, yeah, I, I, I'm excited about that. Um,
[166:34.06] beyond that, what did I want to, oh yeah, right. I had some other matters of business we've been
[166:38.86] talking about. Um, uh, you're, you're continuing to, um, work, work with signals and, uh, server signals
[166:47.18] and stuff in the area of research has, um, been very enlightening and really pushed the boundaries
[166:53.10] of what we've been doing here. So, um, uh, we do have a little bit of announcement today, uh,
[166:58.06] for people that know, um, devs joining the, uh, solid JS core team. So, uh, a little bit of news.
[167:04.78] We'll get the website updated soon. Um, but yeah, continuing the work and research into new areas.
[167:10.94] I know we have a lot more researchers on our core team than maintainers, but, um, that's how you push
[167:17.90] the envelope forward to a certain degree. So yeah, very, very exciting.
[167:22.62] Thanks. I am very excited for this. I'm very happy that, uh, whatever research I was doing was
[167:30.54] considered valuable enough for this.
[167:32.06] No, you, you constantly are part of the conversation and pushing stuff forward, not
[167:36.06] just on the technical side, but in terms of even the DX and having communications, even like release
[167:41.10] stuff, you know, bugs, even the contributions perfectly around solid start and whatnot. So like,
[167:46.94] just like understanding, like, uh, where, where we're at in the ecosystem and it's an important area.
[167:53.18] Um, so yeah, very, very excited to have you working with us more on a more official basis. Not that it
[168:00.62] changes very much beyond that.
[168:02.22] Thank you very much. I, I am not looking forward to, I do have to be maybe, I guess,
[168:10.54] a little less spicy on Twitter when I talk about reactor.
[168:14.30] Yeah. Yeah. I mean, I, I, that, that was the biggest way to hold reason to hold off on, on,
[168:19.98] on making this maneuver maneuver because we wanted to love the tweets. Um, but to be fair, you and, uh,
[168:27.42] Attila have been doing fine. I, there was one, I got, I probably didn't even
[168:30.54] like it or didn't like bookmark it. I liked it, but I didn't bookmark it, but you guys were talking
[168:34.62] about like the real benefit of the compiler or not. Uh, Aiden's been just, uh, hitting react so hard
[168:41.50] over and over again. Um, so yeah, fire. Definitely. Did you see that solid meteor? When
[168:49.74] There, there is a solid meteor. Is there already? God. Sorry. Of course there is. We have a giant,
[168:55.82] I posted in the private chat. We, we have a giant ecosystem of every library you can think of. There's
[169:02.14] a solid library, right? There you go. Oh, okay. Yeah. I mean, I think we've had this for a while. I, I know
[169:09.66] the author of this one. Um, yeah. And I think, I think this does tracking beyond like if you use a
[169:17.66] meteor tracker inside a solid effect, it automatically tracks it as well. I, I believe.
[169:22.14] Yeah. He's probably using the, uh, the arcs. We have, uh, use, uh, external source, which lets you
[169:29.90] like use mob X natively in solid or use a different reactive system. He probably put meteor in there. Yeah.
[169:35.90] So it hasn't been updated in nine months, which is fine. We haven't updated a ton of stuff on the core.
[169:40.54] This is probably like 1.8 time period. Um, but essentially. Yeah. Three years. There you go. So
[169:49.66] all the hot libraries here in solid ecosystem. Uh, guitar. Good stuff. Um,
[170:02.62] yeah. Thank you very much. I'm very happy to, uh, and very excited to continue like, um,
[170:08.30] working, working with the team and seeing what, where solid goes next.
[170:12.30] Yeah, definitely. Great to have you. Anyway, I think that's it for dev on the stream today.
[170:18.70] I'm going to continue on a few other topics, um, uh, that I've prepared because I haven't done a stream
[170:24.30] forever. Uh, thank you so much for joining us. Um, that's awesome. Um, to like, talk to you next.
[170:30.38] Catch you later. Thanks for having me. Yeah.
[170:32.78] That was pretty awesome. Um, stream's not over yet. I have a couple topics I want to go over. I don't
[170:40.86] know if this week in JavaScript will be much of anything. Cause I really haven't been paying
[170:44.54] attention for like a month. I've been like, so I've been on a crazy deep path looking into,
[170:50.06] to stores. Um, and because since the last stream, which I think, um, probably a lot of people didn't
[170:57.26] even follow exactly, but I'm actually pretty happy on the results of that. So I'll talk about that in
[171:01.66] a minute, but yeah, no, uh, devs work has been really, um, really interesting and, um, constant
[171:07.90] voice presence out there, uh, kind of giving you benefits of using things like signals, you know,
[171:13.58] another mad scientist. Yeah. Yeah. Hopefully, you know, we do enough of this stuff sticks and hits the wall.
[171:23.58] Um, you know, um, we've been, it, it, it happens on all levels is the best way I can put it. Cause like
[171:33.50] right now I'm doing a loop around back to the, the core of things. Whereas like, um,
[171:42.30] you know, we went all the way out to the depths of, you know, the lengths of like solid start. Um,
[171:48.22] so having people doing R and D, you know, continuing the R and D on the, like, you know,
[171:52.46] I'd say like, like the server signal stuff is pretty far out, like in the solid start kind of range of
[171:58.78] stuff. Um, versus like, you know, the work Milo has done on like reactively and the really core,
[172:05.90] uh, reactive stuff, you know, on the other side, we constantly have to like explore all the different
[172:12.30] patterns and then figure out the right time to kind of integrate it all along. And I'm, I'm very
[172:17.50] excited. Cause we're like basically starting up a new push, you know, background. All right.
[172:27.98] Take a deep breath. Drink the last sips of my coconut water. Okay. So yeah, I got a couple of
[172:37.34] topics to talk about, uh, today. Um, in addition to what I'd covered there, um, as you can imagine,
[172:45.18] I've been, I've been working on, Oh God, I, I haven't, I haven't even, I've, I have even more
[172:55.58] topics that I even realized typical me, I won't cover them all probably. Let's, let me share my
[173:03.02] screen a little bit here, but like, I realized like Tanner sent me off on a weird goose chase the other
[173:11.02] day, um, where he wanted to know if lakes were real essentially. So I'd like started hypothesizing.
[173:16.86] This is about server components. I don't know if that's a topic that's interesting to anyone. Um,
[173:22.94] I'm pretty sure this was the, I, I talked a bunch and made no sense, um, on the store stuff
[173:32.54] last time I actually found a solve though. And I'm actually really happy to talk about that today.
[173:36.54] Cause so maybe that's where I'm going to talk about. Um, and then maybe I'll talk about
[173:42.30] hierarchical reactive scheduling boundaries, but yeah, basically
[173:51.10] I realized that all this work that I've been trying to do for stores to make them, um, performant,
[173:57.50] um, and make them like work well and not mutate and mess with stuff was basically,
[174:05.50] I was trying to make stores something they're not right. We, we spent the last stream, we looked
[174:10.78] a lot at like immer and we looked at, so this is kind of like a follow-up to, to the previous stream.
[174:16.62] Um, we looked, we looked a lot about like diffing and patching, but if you think about it,
[174:21.50] I might need to Excala draw for this one. Um,
[174:26.78] if you, if you think about it, um, I'm trying to think of the best way to kind of lay this out is
[174:32.46] if maybe I'll, I'll start in the playground. It's probably easier just to like
[174:39.26] delete some code and just write some lines under. If you have an immutable system,
[174:44.86] what you'll generally do is you'll have like, uh, let's say let, I mean, this is redux in a, in a,
[174:55.82] in a, in a, in a, in a nutshell, but essentially you have like the previous state and you have some
[175:03.74] kind of other input action, whatever you want to call it to get the next state. Right. So this will,
[175:09.90] this is how you're going to generate this next state. Right. Um, and then later on where you do the
[175:16.86] connector piece, what you end up doing is you go diff
[175:24.54] next against previous and then you patch. So this will give you like,
[175:33.02] I don't know what to call it. It's like being coded.
[175:37.50] This is the, we'll call this the patch and then we'll call this apply patch.
[175:44.38] Um, to whatever the output is, I'll put, I'm going to apply the patch to it. This is,
[175:53.10] this is kind of the cycle that you have when you're dealing with immutability. So what ends up happening
[176:00.70] usually is that next, well, anything like along the tree, which is where I'm going to get here,
[176:11.82] let's pretend we have, you know, do, do, do, do, do, do these data nodes. Let's give them a color.
[176:21.50] Okay.
[176:29.74] All right. And you've probably seen this cut. My arrows, both directions. Let's,
[176:45.18] uh, it's cause I'm zoomed way out.
[176:46.62] Probably should have the problem. It's like, if I keep on zooming way out, um,
[176:58.78] I'm going to, I'm going to make something here and then we're going to do this.
[177:05.42] I probably showed a version of this. Let me see, turn this into that.
[177:10.06] I feel like I showed a version of this, but it's been a month though. I'm not going to,
[177:15.10] I'm going to redraw it right now. If you had a data structure that was nested like this
[177:20.62] and you want to change this one here. So, um, I'll keep it black. I'll go here. See,
[177:31.26] and you change this node, you know, so that you have an array of users which have properties on them,
[177:38.22] whatever. If you change this node, what you end up doing is you clone this
[177:43.50] and you clone this. These references stay the same, but you end up needing to clone these.
[177:52.54] So the array will now hold that had two users in it will now have an existing user and a new user.
[178:01.74] Even if it has the same ID, it doesn't matter. This is like the basic way you do immutability. Um,
[178:07.58] you basically clone along the direct path of ancestors in order to, to make it work.
[178:13.98] And what this means is when you get around to diffing should be surprised to no one,
[178:18.22] it's actually fairly easy to diff because you can go what you, what you'll have over here on the diff
[178:24.06] side, um, is you'll have a, you'll have a copy of this right over here. See, can I shrink this whole
[178:32.06] thing down? Yeah, I can. So on the, on the diff side, what you'll have, you'll have the original,
[178:39.66] right? So you'll have this version. So do let me know if I'm making
[178:47.98] complete sense or I'm sure you're probably already aware of this, but what you'll do
[178:52.70] is you'll have the original and then you'll have the new version. So, you know, this is previous.
[178:59.26] Yeah. See, I'm, I'm way zoomed out. Yeah. So you have previous
[179:11.18] let's make that large and then you have
[179:14.38] next, right? So
[179:19.50] sorry. No. Yeah. So previous next, some input changed it. And then when you do the diff,
[179:29.42] you're just like, yeah, I need to make these even smaller. Sorry. Give me
[179:34.54] second while I wrestle with my ScalaDraw here.
[180:02.14] right. So you'll, it's pretty easy to do the diff. You start from the top of the tree and you go,
[180:07.42] does this one equal this one? You're like, no. Okay. Something has changed. Then you go, does the,
[180:13.50] you look at his children. Does this one equal this one? You're like, yes, stop there. Then you go,
[180:17.10] does this one equal this one? You're like, no, something has changed. And then you go check this
[180:24.06] one. And you go, no, these are the same. So you can stop here. And then you go to the sibling and
[180:30.22] you're like, oh, this has changed. And then there's no more children and you're done. So basically,
[180:34.78] even though, ironically, you, when you created next, you clone these, you then walk over and realize that
[180:43.66] these are the things that changed. And there is a different tree, let's say over here, which is like,
[180:56.78] um, I'm going to call it the output tree. Um,
[181:00.06] and the output tree could be like the actual Dom.
[181:07.34] So what you end up doing is, okay, you have the original, you clone stuff as you create next,
[181:17.98] then you dip it. And then as you dip it and go, this has changed, you go and update this one. So it's
[181:23.98] the same walk I was doing, but essentially, you know, from the diff that this changed and this
[181:28.38] changed, and then you go across and you apply the same change over to these different objects. The,
[181:34.46] the difference is that these, sorry, it's going to be a little bit different. These are, sorry,
[181:42.54] it's good luck, good blue. These are actually the reason you do the diff is because these start
[181:53.98] make these yellow in the end. These actually start as different objects, right? So I hope I'm making,
[182:04.22] I'm making sense here. I realized my explanation a lot better as I finished it out, but essentially
[182:10.86] at the beginning you have previous and you have the output that looks like this. Let's say it's the Dom.
[182:17.66] it might not be one-to-one mapping, but you get the idea. You generate next by setting the inputs to
[182:22.86] mutate certain things and you clone these and reconstruct the objects along the way. Then you,
[182:30.06] then you diff them. And as you diff them, you basically realize that these things change.
[182:36.86] And then you, it's to create this patch, which is, let's say, change this, change this, change this,
[182:42.14] and then you apply the patch. And then when you apply the patch, you go through here and you change these
[182:49.98] to yellow. Okay. Essentially. So now it, it matches this, except these are not referentially equal.
[182:58.14] These are referentially equal. The thing to consider, and the reason I'm talking about this is that
[183:02.54] when you create the thing for the first time, like it was empty, you end up constructing this whole tree
[183:10.62] in your first pass, because there's no previous. So they're all red, right? And then when you come here,
[183:16.62] they're all yellow. So you construct it, you always construct two completely separate objects. You
[183:22.22] construct the diffable object and you construct the output objects. So there's always two.
[183:30.14] So just in terms of allocations. And then as you continue to mutate things, you may construct.
[183:42.86] You may construct new objects here, but usually what happens over here is you may or may not construct
[183:49.66] new objects. This might actually be mutated. Like this might, like if it's the DOM, you don't necessarily
[183:58.06] create a new DOM node. Maybe you do, maybe you just update a property on it, right? So as I said, visually,
[184:05.10] this is maybe not the quite perfect comparison, but my point is that the most expensive operation
[184:12.86] is the creation, um, or the adding of new nodes, because you definitely need to add them,
[184:19.10] like create them in the next, and you need to create them in the output. But then after the fact,
[184:25.50] as you do the diffing, it's only things that get created are these new, um, intermediate nodes from next.
[184:33.42] And sometimes here, depending on what the changes, you don't even create anything new.
[184:37.18] This is the basis for immutability. Okay. Hopefully everyone's following so far.
[184:44.86] Someone in chat to say that makes sense. Just for my sanity. Um, hopefully, hopefully that makes sense.
[184:53.98] This is like the base. This is like React at its core, right? This is like the last time you did the VDOM.
[185:00.86] This is what happens at the end of your rendering. And this is the actual DOM as we apply changes from it.
[185:06.78] Right? Um, so render, internally diff, and then apply it to the real DOM. Okay.
[185:19.34] So, what about Quick? Quick is a VDOM. It would do this basic same thing, right? Even Solid does
[185:34.22] a certain version of this at a more granular level. Okay. So, let's, let's talk about stores. Because
[185:40.62] you could also treat stores this way. Because, like, like, Redux.
[185:49.34] Quik does certain things that are interesting from a serialization point. Like, like, in terms of, like,
[186:05.02] where the boundaries are. But mechanically, it's like, Preact is probably the closest framework. It
[186:12.62] does a VDOM with the opt-in of doing occasional granular rendering with signals. So, like,
[186:18.14] it doesn't fundamentally change the rendering part of it. Like, it just changes the way code loads.
[186:25.82] Is, like, like, code is incremental, but the actual rendering diffing data management is similar to any
[186:34.38] other library that you've used before. So, it's not, it's not, it's not, like, completely different here.
[186:40.30] Um, Preact is a really good comparison because they both do VDOMs with the opt-in of granular. And I think
[186:46.78] that's almost identical. But where I'm getting here is Redux kind of works like this. Because with Redux,
[186:58.06] um, again, it just does the first two steps. It basically gives you, like, it basically makes it
[187:08.14] very easy to produce the next state from the previous state. From there, you have to do the diffing yourself.
[187:13.74] with Redux. You have to go, "Oh, did this change?" Maybe in React components, you check if the references changed.
[187:18.78] And the most tricky part is this reconcile at the end. Because I said, sometimes these turn yellow. Maybe,
[187:26.30] maybe we didn't actually have to replace any of these. Maybe, maybe these, even though these, like, updated
[187:35.98] stuff, maybe only, like, we only need a new one of these. Right? What will happen, like, maybe, maybe this
[187:44.78] one's new. What, when you get to here, this is all in React land, when it's React. Because what React has to do is go,
[187:51.58] oh, is this the same thing? Like, is this, was it a div before and is it still a div? Or key? You know,
[187:58.22] the key property in React? This is where that part happens, where it goes, this has changed. The default
[188:03.82] behavior would be swap it with something new. But if every time you, like, you could, you would have to
[188:09.90] create a new DOM node. But if you put it, like, if you put a key and the key's the same, I guess the thing is, in React, the
[188:16.22] default is it doesn't swap new. It's only if the key's different. If the key doesn't match, then you,
[188:22.54] then you replace it. But the idea is, if the key's the same, or I guess if there's no key and, and enough
[188:28.22] other things match, it will try and merge it, which means it won't create something new. It'll mutate this.
[188:32.78] That's the final output, right? This is why you have keys and stuff. Redux only cares about the first
[188:38.14] part. React handles this part. Immer only cares about the first part, generally speaking. React handles
[188:44.38] this part. Same thing with Signia. You'll see this pattern that React is actually the one handling,
[188:49.34] like, how to go from the diffing to the actual, like, output. Like, this section. Like, React itself does
[188:59.98] this, but then state libraries like Redux also do this. And essentially the diffing and the patch
[189:06.86] applying happen kind of under the hood with React. But if we're talking about stores,
[189:12.30] we're kind of in an interesting point. Because stores in Solid today are basically like if you only had this.
[189:24.94] right? Because it's, it's more, it's more, it's more like this. Stores in Solid. Let me, it's more like you have
[189:37.18] store output. And I'll change the store to be using the nice green thing. Let's, let's start over again.
[189:54.94] Stores in Solid. Okay. And then output in the DOM. Okay. So I, it's, it's really easier with, with, um,
[190:07.74] immutable to see the, the three things because they always exist at the same time. Whereas when you have
[190:14.46] a reactive system, what ends up happening is there's additional arrows, so to speak. Um, and I hope that I
[190:23.58] draw them the right way, but essentially let's make them dotted. There's also arrows that are like this,
[190:33.10] essentially. Um,
[190:50.14] which is a little bit different than React or an immutable system in that I'm going to go to here.
[191:05.90] And that when we do the same change and we go, oh, this one has changed, right? That's what started it,
[191:12.38] right? We realized this had the change. They cloned.
[191:17.18] And then I guess to make this example consistent,
[191:20.86] they realized ultimately that this was the thing that changed, right? They, they first clone this,
[191:28.38] then they diffed it. Um, and then they reconciled it or, you know, applied the patch. And then that was it
[191:38.38] with, with, with, with reactive system with store this, when this changes,
[191:43.66] this is listening to it essentially. And this changes and you're done. So you can immediately see
[191:53.18] like the, the, the positive benefit here, because like, again, if this was say a react render tree,
[192:02.62] well, and these were components, like, it doesn't matter what the structure is in this zone. Well,
[192:07.18] this component has to rerun, right? Even if this shortcuts, because it's memoized, this one has to
[192:14.22] rerun because it's not the same. You, you, because you need to get down here and this one has to rerun.
[192:21.02] This can shortcut because it's memoized. But like, if you change here, you have to run the whole component
[192:27.66] tree and diff it or the redux process or whatever the hell you want to call it, you know, because you
[192:33.98] don't, you lose that information. You end up cloning this. So you make a bunch of extra objects and then
[192:39.82] you, you do like three steps where like, this is literally change this, change this. Right. But
[192:45.66] the, the challenge is that
[192:55.58] what if you don't know, it's just this that changes. What if you're in a situation where you do
[193:03.82] need to diff? And this gets kind of interesting because there's no previous, so to speak, right? Like
[193:14.54] if, if we take our example and we, we like, there's no even real next, if you think about it, like if,
[193:25.50] if there was a next, you would have to reconstruct the whole store again, right here, they reconstructed
[193:32.62] it by making the, the next, sharing the references. I mean, you could do that. You could take this,
[193:39.02] you know, and apply it to this. But the problem is, um, how do you
[193:45.74] diff it? Because these, you can't break these arrows. See, these arrows are fixed references. If, if you
[193:55.42] you, if you actually swap this thing out, this thing will be swapped out. You can't, you can't,
[194:00.62] these, these arrows existing means that it's actually a painting. Like if you were to switch
[194:07.26] this and make this red, you actually would replace this whole tree is, is the fundamental difference
[194:15.50] here because this system depends on stuff running top down. This system depends on these arrows
[194:23.02] existing. So if you actually, we're fine in a reactive system, because usually we just update
[194:27.98] down here. But if this, if you change the story and it's not this that actually updates and it's this that
[194:34.70] updates because, which ends up creating all, like if the whole thing is red, the whole thing gets recreated
[194:42.86] where there is a potential in this system. If the whole thing is red and they have the same IDs,
[194:51.18] react can still find from the key that it's just this one. Does that make sense? Like if,
[195:00.38] if you're in a scenario where next is literally all red, but the keys match react can still output this
[195:06.22] in a system like this, even if we wanted to do that, um, if you replace this all red,
[195:15.10] you broke the arrows, which means you have to remake the whole thing. And that is about the worst possible
[195:25.34] scenario here. Right. So, okay. Hopefully this still makes sense to people. So our answer to this is
[195:36.54] diffing this data, we have to keep the arrows. So if the way we can keep the arrows is if we diff
[195:47.74] a new value against this value and see that it doesn't change, that's fine. Nothing changes here.
[195:55.18] If we get here and we see up, you know, a property changes or sorry, if we see that, um, what's a good
[196:04.86] example? Uh, if, if, if basically, if we see that the reference has changed, but the key is the same,
[196:13.50] then again, we can choose not to, this is why we put the keys on this side. When we diff, we can choose
[196:18.54] to keep it the same. And then finally, like when we find the one property that changes when we diff on the
[196:23.66] side, then we can apply it. But the key part, like the, the important part here is that when we mutate this,
[196:31.58] we don't mutate this or service, we don't replace this, we mutate it. We, because think about it.
[196:40.46] If this is an object user and it has a name on it and you've changed the name in a, in an immutable system,
[196:47.10] you don't change the name. You have a new user, but here we need to keep this link.
[196:54.54] So we keep the same user and we just change the name on that user. So this is fine. We get the
[197:02.62] same fine grained updates. All the links change the same. The problem is if someone out here was keeping
[197:09.02] track of this previous object for some reason, like they created the store, like maybe, maybe when the
[197:15.50] store is first created, they had this and they say create store with this object. This change of name
[197:23.02] is now reflected in their original object. You actually mutated the source object here. You never
[197:29.10] have that fear in Redux because if are in an immutable system, because if something changes, the whole tree
[197:34.78] changes, it's, it's completely replaced. We're here because we need to keep these arrows. We have to mutate
[197:41.50] stuff in place rather than, um, rather than replace it because otherwise it would break this whole part
[197:53.18] of the tree and we'd have to recreate everything. Okay. Hopefully, hopefully that makes sense. Um, and
[198:00.30] people are still following. Okay. So this is why it's very important that things that appear multiple
[198:11.58] places of the stores, things that can change order between different updates have a key property or an
[198:16.86] ID or something to differentiate them because otherwise, if we come across an object, you know,
[198:24.94] we come across like something here and something else is in the same place. We got to assume that it's the
[198:30.38] same thing and we merge them, but merging them could have weird consequences to people keeping references
[198:36.38] outside. It could have, you know, it could, they could be completely different objects and they could like
[198:43.50] change one shape into another one. I mean, there might not be any downside on what you see in terms of
[198:48.46] rendering, but let's say you're diffing things multiple times in a row. Um, every time you do the diff,
[198:55.66] you know, you create the new object, even if you're trying to do this immutable thing,
[198:59.50] you'd have old objects that have been changed and you would have even like you get to a point where the
[199:08.22] previous state no longer is the previous state where like this, let's say you did a change like this,
[199:14.86] where you did make a new version, right? And then it went here and goes, okay, this is the same object.
[199:19.18] So it mutates this one. The next time this one changes and it's a new object or sorry, something
[199:26.54] else changes. This one changes and it's a new object. When it goes to diff on this side, it will still see
[199:33.66] these as separate as different objects because you mutated this one. You didn't replace it, which means that
[199:40.54] you will have to diff all the way down. Um, again, because there's nothing like when you match a key,
[199:49.74] that's not stop diffing. That means these should be merged. You, you, because they're not referentially
[199:55.58] equal, you have no way of knowing if anything has changed.
[199:59.34] Like, like, because you can't make that assumption in a system that's immutable, you know that if it's not
[200:07.90] the same, it's definitely changed in a mutable system, you, you only care about the values.
[200:13.26] You can't know that. So yeah. And well, time travel, everyone loved Redux and thought it was magical
[200:22.38] was because you could literally time travel. You could keep previous state n and you could just go,
[200:28.54] Oh, I need to go to previous state n and all you would have to do is grab previous state n and
[200:35.58] apply it on top of the current state. And then again, you could be things that were still the
[200:43.82] same back in previous n would be the same. And things that, you know, were different
[200:48.46] would just swap again. You could basically go forward and backwards in time as much as you want, because nothing mutated.
[200:54.78] Trying to do time travel in a system like this is actually very difficult because, um, you mutate
[201:00.14] things. So you have to take snapshots intentionally, i.e. clone the whole structure probably. And then,
[201:08.14] so if you're doing time travel, you've gone from, you know, like, yes, the simple case is super optimal.
[201:14.78] When you know the single thing, when you try and do a diff and you, and you assume full ownership
[201:20.70] of the stuff coming in that you don't care if it mutates again, super optimal. But soon as you try
[201:25.58] and do time travel, well, guess what? You're cloning every time. So quite often what people will do
[201:30.30] in these diff situations is they'll actually clone the input. So if we go back to our original scenario,
[201:38.70] now there's we've secretly added another tree here essentially because we clone the input to get
[201:43.98] this state to do this state. So we're recreating this same tree essentially in a sense, like from the
[201:51.90] reacts or immutable standpoint, except, except the problem is this tree will always be.
[202:07.58] I mean, it's not previous. It's more like it goes in the middle, but I hope you get my point here.
[202:13.18] This tree, which is like the new input will always be new nodes because you're cloning them
[202:20.14] and then diffing and then doing it, which means that instead of just cloning what changed,
[202:27.90] you clone everything. So
[202:37.10] this is kind of awkward because we make fun of immutability for being expensive because it clones
[202:42.54] like a three objects, but this is worse.
[202:45.34] You don't only clone everything because the only way to detect the difference between these now,
[202:53.26] because they're different referentially, is to diff them every time you do the maximum amount of
[202:58.46] diffing. You don't get the shortcut. It's actually just basically the worst case scenario here. So
[203:06.46] this is, this is kind of bad. Obviously, if you don't need the capability that I'm talking about,
[203:14.86] stores are great because fine-grained updates, excellent client-side only,
[203:18.14] even diffing where you always get fresh data from the server.
[203:21.90] You know, in that case, you're not cloning anything. The data is fresh from the server.
[203:27.82] you know, diffing, you're fine. It's when you're trying to do immutable type operations here,
[203:35.98] where you're trying to keep references and stuff like that, where things kind of start turning into a
[203:45.02] mess. And in fact, the worst case is the worst. Now, this led me on a, on a search to see, is there a way
[203:54.22] that I could identify, you know, instead of cloning everything, we bring that internally,
[204:03.58] basically do the diff, and then only clone things that would get ridden. So when you first create the
[204:11.74] store, you clone everything. But then every time you do a write, you like replace these three nodes. Instead of
[204:17.42] using the, the immutable reference or using these, you clone just this portion of it. And that way,
[204:26.46] we're not cloning everything. We're only cloning what gets swapped. And this seemed like a good
[204:32.30] solution, except for the diffing problem is definitely there, right? At least here, if you don't change
[204:37.66] something initially, you'll, you'll, you can still shortcut based on reference. But if you start cloning
[204:43.18] everything, you'll always be diffing to the, to the end. It's like Angular, actually, if I'm right,
[204:47.90] Angular doesn't use immutable diffing, it does mutable diffing. Like that's, that's kind of the
[204:52.62] approach they do there. And as it turns out, I was doing a bunch of benchmarking.
[205:01.10] And there's this very cool repo project, where created by local void, the creator of EV, which
[205:09.18] where there's a bunch of frameworks, and solid is actually in here, old version of solid.
[205:12.62] And essentially, it just, if I mean, I forget if I showed this last time, I can show the, let me see
[205:23.74] here, it's right here, show the source code for it. Oh, no, not for the repo, I need UI bench solid,
[205:29.82] solid, just to give you an idea, solid UI bench, of what the, of what the code, this is a very simple
[205:38.22] example. But essentially, there's a table with a four component, there's an animating thing where it's
[205:43.26] like moving some boxes around. And then there's a deeply nested tree where you go through each item,
[205:48.14] and then each item is recursive, like a tree node is a tree node that can have either a leaf or another
[205:53.18] tree node in it. And then essentially, there's a switch at the top level, this is old solid, this example,
[205:58.06] this is samples on track. But essentially, based on which mode you return, which type of thing you're
[206:05.10] drawing in the UI, and you spam the page on it. And
[206:10.62] I, you could, this benchmark goes by so fast, that you can't really see it very much. But let me just
[206:19.90] run it really quick, you can see it table tree. And I'm going to go through and it, it, it, it basically
[206:30.06] does a whole bunch of these diffs. Now, something that I didn't realize until I spent more time looking
[206:38.14] into this, and it might not be too obvious here. But I, yes, you start seeing it in some of the
[206:45.34] benchmarks, is that solid in some of the benchmarks will be very high scores at the front end, and then
[206:56.86] afterwards have, have like, um, yeah, I'm not actually seeing it here, it might be the order of the test.
[207:05.34] But let me let me actually show you, you can see it a little bit better here. Um, yeah, pretty,
[207:10.78] pretty fast test time here. And it, there's, there's all these different things like a table of this size,
[207:15.58] sort this table, this size, sort this, but I started noticing, like, there is things that made no sense.
[207:22.78] Like, why was, um, why am I not seeing it here? Yeah, it's not showing it here. Where is it insert?
[207:36.06] Basically, what I realized was that the solid version of this implementation here was actually bugged.
[207:41.10] that because we were mutating the source of the benchmark between runs, um, in some cases,
[207:48.54] it was working to our advantage. In other cases, it was working to our disadvantage.
[207:52.22] We were basically doing a different set of operations than the benchmark intended, um, because
[207:58.62] we would mutate the input state essentially. And then like, if it fed back the same input state or like,
[208:07.10] like something closer, we would actually get like better results and stuff like reverse was actually
[208:13.50] very impacted by this because we'd reverse. Yeah, there, there, there are ones that were like positive and
[208:20.14] ones were negative. So in the end, it kind of was a wash, but the solid implementation, this was actually wrong,
[208:24.70] even though the tests wouldn't indicate as much. So benchmark aside, this actually, though, was a really good
[208:33.26] test bed because we could look at something like Inferno, one of the fastest, uh, virtual DOM libraries
[208:39.66] and look at, um, how, how, how it basically renders and how the performance goes. Now,
[208:45.50] Inferno is faster than solid on this. But one thing that was interesting was that when you added paint in,
[208:54.62] like this doesn't this, and when you, um, basically did shortcut reference checking, like
[209:01.50] where you check if the things are the same, the, the difference almost, and the difference between
[209:07.50] these two almost, uh, disappears in the different modes. Now that's not too important, especially
[209:14.14] because I realized that the solid implementation is broken, but I had a test bed that I could use to
[209:20.94] actually test the performance of, uh, the impact of these things. Now, these two are going to be slower
[209:26.46] because they're measuring the total render time. But if I remember correctly, you're going to see
[209:31.10] very similar results between these two. I could, I, my memory could be a little bit wrong on this one,
[209:38.78] but essentially, um, yeah, yeah, they're, they're, they're much closer in, in performance here, almost
[209:49.26] interchangeable. Um, and what, what I'm getting at is I use this as a kind of source of reference to
[210:00.22] check. I actually made a clone version of the stores. I was like, okay, let's try doing these things. And
[210:06.22] this was non-starter. It was like way slower than even react, right? If you're slower than react,
[210:13.26] you know, you're doing something wrong. Um, but even the version where I was trying to just clone
[210:18.14] certain portions of it would just absolutely destroy any kind of creation benchmarks. So yeah,
[210:25.90] it's a benchmark consideration perhaps, but you start going,
[210:31.42] this is less than ideal. It's very optimal in a certain set of cases, but then it becomes
[210:39.98] really like the performance just drops off a cliff, um, afterwards. And in fact, some changes we made
[210:48.54] around 1.0 made like, I actually took the current version of solid in here, um, and tested it and it
[210:56.06] scored similar to react, just like slightly slower. And I was like, that's what we've been running the
[211:03.18] whole time. One point. I went back to when I made the change and it was like the release before 1.0. So
[211:07.74] the, it was, it was an interesting journey to realize that our diffing performance was fine. No one had
[211:16.38] complained about it, but it was actually a bit slower than react, which is I'm using as like the baseline
[211:26.30] here. And, um, it, it, uh, it had this characteristic I was telling you about, right? In terms of like
[211:36.62] the mutability, which could be considered negative. And once you try and fix that characteristic as if it's
[211:41.50] a thing to fix, then this is just not a good solution. So I was kind of stuck. Um, and that
[211:47.50] doesn't sound good, but the exciting part is I actually solve this. So, um, that's what I'm excited
[211:52.86] to tell you about. Um, I just needed to get this basis because I spent a bunch of time. That's what
[211:56.70] I've been doing the last three weeks. And I actually got a fixed version of solid with all the features
[212:01.82] I want that scores slightly better than this old version that was broken, that cheating. So yes,
[212:09.98] it doesn't match Inferno, but I think I've solved all the other weird characteristics. So I want to
[212:15.74] talk about this, um, reference swapping stores. Um, so I realized, and it was kind of a weird test,
[212:25.58] that if I added one layer of abstraction between a store's value and the proxy,
[212:29.58] and I ensured that the signals in the proxy always stored the wrapped or proxy values, I could reconcile
[212:38.06] without mutation. It doesn't match Inferno. It's a no for me. It's still way faster than React.
[212:49.42] This, you understand what this use case is. This is the dbmon use case to be fair in dbmon specifically
[213:00.06] itself. And sorry, I shouldn't have said that right. It doesn't match Inferno in terms of raw
[213:07.82] iteration time, but it matches Inferno in terms of total render time. So that's why I like the dbmon
[213:16.38] tests solid Inferno are basically identical because like the, the way we render is slightly like, it's like
[213:28.06] once the raw diffing is slightly slower because of, yeah, just invented double pointers in JavaScript. Yeah.
[213:37.10] Yeah. New value, old reference. Yeah. It was weird. I think I would, you'd think this would be slower
[213:44.38] because you would be creating an extra object per node, right? Because instead of just having a proxy
[213:51.50] proxy trap around it, you would have to create an object that has the value of that object on it and
[214:03.10] and the proxy trap intermediate object value. But some benefit is you don't have to ever clone the original
[214:12.38] object. And you keep the intermediate object. It's only a cost of initial creation. And
[214:19.10] costed initial creation and something that I didn't realize, which kind of cool is the intermediate
[214:24.54] object is monomorphic. So the proxy trap always gets an object of exactly the same shape, which
[214:29.66] actually improved the performance. It's, it's, I didn't, I didn't realize this when I was working on
[214:35.18] it, like, but it was like, had this positive thing. So, but how did I get there? It was a little bit
[214:40.46] tricky because at first I tried to like swap the prototype. And as you guys can all imagine swapping
[214:44.94] prototypes is not a good thing. I wanted to do that because I thought I could save creating extra objects,
[214:49.66] but it wasn't faster. Funnily enough, making this separate object ended up being faster. So, I mean,
[214:55.74] the gist of this, and I'll kind of drop it down here is what if instead of doing all the stuff we talked
[215:06.14] about, you know, what if, if we, we kind of do both still, what I mean is keep this relationship
[215:20.46] where if you mutate something, you mutate something, right? That's fine. If you've noticed the work that
[215:26.70] dev and he, he pointed it out and it's kind of smart in the stream, he was talking about how
[215:31.58] great projection, all these things didn't have writing on the outside. They only had like writing
[215:37.42] on the inside. And we, we have this kind of flow where things are more derived. If you're not actually
[215:41.42] quite often, you know, getting data from server, some external source, the cache source, you're not
[215:47.18] actually mutating the, the, the data always. Um, yes, if you, if you are in the mutates case, this still
[215:55.10] holds up. But what I was suggesting is instead of doing this, screw this. Instead, if someone does this
[216:05.10] immutable and sends this in to reconcile,
[216:12.22] instead of mutating this, you swap this. So this object is now this object. And then you iterate over
[216:22.14] only the properties that have signals on them. So only the things that are being listened to. If you
[216:27.50] remembered in the previous stream, uh, when I did create projection, I, I was talking about the JS
[216:31.74] framework benchmark and I had to release signals that weren't being listened to. Otherwise the pro like
[216:35.74] selector got huge. Now that we do that, we're in this interesting zone where stores only have signals
[216:41.42] for things that are currently being listened to, which means that if you diff, we can ignore,
[216:46.46] like if we swap an object and you know, you listen along a path in stores, right? So if, if, if some,
[216:56.38] if there's no property over here, it's like no one's listening to this part of the graph.
[217:00.86] Well, we don't have to like, sure, nothing changed obviously, but even if it had changed,
[217:09.34] we don't actually have to diff it because when you switch this object with this object,
[217:17.02] it's going to have a link to the new object. Like it's going to be there. So as long as there's no
[217:21.90] signal there that you have to update with a new update here, you can just replace the whole part
[217:26.86] of the tree that isn't listened to. Um, and there's no consequence. If it is listened to,
[217:32.46] then yes, you have to walk through and do the diff on that. But now you don't have to write to every
[217:38.22] single property during a mutation. You actually only care about what's listened to, which is,
[217:43.58] which means that what you can do is you can just, as I say, swap this, go, okay, swap.
[217:47.98] Then you go, let's pretend this is the only side of the tree that's being listened to this whole side.
[217:53.82] Then it goes, okay, I'm going to access this property. This is the only one I'm going to,
[217:58.06] then it's going to compare this and go, okay. If they're the same key, the same reference. So
[218:03.90] either the keys match or there's no keys, it's going to swap it again and then check the specific things.
[218:10.54] And, you know, maybe these are both of listened to. So it goes here and goes, okay, nothing's changed.
[218:16.78] Same reference, skip, and then goes here and sees a change and applies it. But my point is if you do it
[218:23.58] this way, the next time another immutable change comes in, now this object is this object. So you
[218:30.78] don't have, you can keep on shortcutting essentially. Like you don't have to worry. It's, it's, it's actually
[218:36.78] the immutable change. And because we keep the wrap values in the signals, we, we basically don't care
[218:46.78] that the objects underneath swap out, so to speak. Is there increased memory cost? You would think so
[218:57.74] because I'm creating one extra object per store node. But as I said, it doesn't have
[219:07.26] any negative effect, at least on the benchmark in terms of performance, you know, it's possible
[219:12.78] that that could add up the one extra object. But on the other hand, you're also not cloning
[219:17.82] stuff nearly as often. So yes, I would imagine that it would have a memory overhead, but you're also,
[219:29.02] you're doing less memory, creating and releasing operations. Because like, literally, you're just like,
[219:37.82] when the old object is gone, when you swap it out, and no one else references, then it gets released.
[219:42.94] Like, so yeah, I don't know. It's, I don't think it has. Yeah. And you're doing, and you're doing less work
[219:53.58] overall. So like, yes, we're still doing fine grained mutations. So if someone mutates this, yeah, your
[219:59.90] previous is gonna get messed up. But if you if you're doing a lot, quite often, a lot of store work is just
[220:04.62] reconciling server data, reconciling stuff. This works both for server data, and for immutable data
[220:10.30] like redux. And it's faster, because it, like, one of the problems is like, you start going, I don't
[220:16.14] know what's changed. So you like, when you mutate, you can't, you have nothing to diff against. So you
[220:20.54] end up just writing, overwriting every property, right? That's the problem with the mutation based,
[220:24.70] we're in this version, like we, I remember looking at it in the, you can see it actually in solid.js
[220:29.18] is reconcile function, it's actually kind of funny. There's, there's, there's a, there's a part of the
[220:33.74] code, where if you go packages, and solid source, or not source store, source, modifiers. In here,
[220:49.58] there's a part at the end, where we're merging objects, right? And where is it? It's an apply state
[220:55.66] here, where we go and get the target keys, and we go and we apply the updated state, and then we find
[220:59.26] anything that's like not there and remove it. But the funny thing about this is, this is completely dumb,
[221:06.46] I realized after we're, because if these are the same object, like, sometimes they aren't, but sometimes
[221:11.82] they are, like, you get into this weird state where it's like, you merge, you, I guess this is fine, because
[221:18.70] technically, yeah, no, yeah, it's, you already merged the previous object into the current object, which
[221:23.98] means that when you do object.keys here, I guess, technically speaking, it is important, because you get
[221:30.46] all the keys of the current one, plus the keys of the new one coming in. Whereas if I move this statement
[221:37.18] up here, it would actually be smarter, because then if I do it ahead of time, at least, I only need to iterate over
[221:42.94] the keys that were already there, and not the new ones that were just added. So this is, this already is like a
[221:46.94] micro-optimization if I move this up here, but more of it, it's like, it kind of shows the point of
[221:52.06] both of these for loops being weird, because, like, it doesn't know, like, it, all we can do is check if
[221:58.06] it's undefined. Like, it might iterate over keys that are in both objects, because it can't tell what's
[222:03.74] changed, because it's like it is the same object. After you transform it into the same object, there's no
[222:08.70] previous state to look at. And this is, this is like the, the kind of constant problem with the, like,
[222:17.90] this kind of diffing thing, where, with the new approach, let's see, solid.js to come, GitHub,
[222:25.42] GitHub, solid.js, signals, um, source,
[222:33.58] store, reconcile.
[222:45.42] Uh, where is it? This values, and this task. Yeah, there's a bit more code here, but what it
[222:50.86] literally does is, it only needs to iterate over it once, because it gets the keys, and then it looks
[222:57.42] at the previous and next value, and because it knows that it's swapping it, like, these are independent
[223:02.86] references, you can, you can literally diff against it, and do the update. It's, it's funny, the swap
[223:08.38] actually happens up here, I think, where it's literally, previous proxy is null, remove the old
[223:14.54] proxy, target, this is like the, the object mill, store value, equals the next value. So it's just
[223:20.38] swapping the, the value when you get passed. This is like the shortcut was like, no, these should be
[223:26.14] swapped, or whatever, like, don't, don't merge. But then once you get into the merging logic, the first
[223:30.46] line is just literally like, swap it. Um, anyway.
[223:38.94] So, you get the properties of immutable internals for diffing type situations. Um, so like multiple,
[223:47.82] like, don't get me wrong, you can mutate in the middle, so you keep this aspect, but if you, if you
[223:52.30] do multiple immutable diffs, like consecutively, you will have the same qualities where you don't have to
[223:58.30] clone extra objects. And the only cloning happening is the cloning that you are doing as the person
[224:07.50] generating the data that go in the store. And let's face it, you would, you, you would clone anyways,
[224:12.30] because if you just mutated the, your source data coming in,
[224:16.46] then it would be the same as the data inside. So diffing wouldn't do anything, right? If it's the
[224:23.58] same reference and you mutate it, then you can't diff it. So like people who are doing
[224:29.26] either the, the, the data is fresh from the server, or if you're doing like a Redux thing,
[224:35.02] you have to use immutable sources. There's only three ways you can update stuff.
[224:38.70] All new rely on the keys referential, um, which means you have to clone the part that changed or
[224:46.78] granular where you mutate exactly the thing that you want changed. There's no, there's no other option.
[224:54.70] And if you look at it, the solution actually nicely handles all, all three scenarios. Um,
[224:59.74] so yeah, uh, and it's fast. So like that, that, that was sort of the, the, the thinking here coming
[225:09.42] in terms of the fundamentals, right? I talked about the thing I showed on stream where like
[225:14.46] there, there is, there is some rules and takeaways here and caveats. I said, this is all good, but
[225:20.30] there, there, there is, there, there is some problems that I want to talk about and see what
[225:26.38] the community thinks about this. And that's why I'm bringing this up. One of the problems is that
[225:30.86] you need keys like merge isn't an option anymore because you always merge. If you have a list that
[225:37.58] has an array of a and selected item a, and then you send this right without knowing keys, you're going
[225:44.22] to think item a is item B, which means, and this is not new to the swap method. Literally that's a
[225:50.54] problem with stores today. If you try and do something like this, it will try to merge these
[225:55.82] items if they doesn't realize they don't have a different identity. It's going to try and merge
[225:59.58] them, which means I, because they should, you know, share the reference with the proxy and stuff.
[226:04.46] What will happen is item a will transform into item B, which will mean selected will become item B.
[226:10.70] You know, when it does that part, then when it gets to here, it will create a new item a.
[226:15.82] And then when it gets to here and sees that these are not the same, it's, you know, in the past,
[226:24.86] like it would end up turning them all into item A again, I think. And now because we delete the
[226:32.30] proxy off the old one, it will treat as a new object. And I think you'll end up with maybe the
[226:37.58] right thing, but you'll have recreated all the proxies for item A, the existing item, where what you
[226:42.22] really would have preferred to happen would be to retain the proxies for item A, because here you've
[226:49.34] already rendered the UI with this. You wouldn't want to re-render all the UI for item A. So even the best
[226:54.46] case I can do here without keys would be re-render everything, but it'd be correct. You need keys.
[227:01.74] Okay. This is just the thing. Okay.
[227:11.02] Are you just trolling today, Benton? Okay.
[227:13.90] The other consideration here is you can't change the identity of something. If we're not going...
[227:39.18] This is kind of an interesting thing. If you have two different IDs and you try and reconcile them,
[227:50.06] today with Solid Stores, it would transform, you know what I mean? It would basically transform this
[227:58.86] user into this user into this user. And if this was referenced in like 10 different places,
[228:01.82] like you'd have something weird going on, right? Because suddenly all the places user one is. It's
[228:09.82] this problem. Like I think the IDs actually prevent us, but like you, I've never made this clear. I'm
[228:16.70] going to make this error. You can't reconcile one object into another object with different keys,
[228:21.58] because they're different things. These have to be swapped. You don't want to change all the ones into
[228:27.34] twos. You want to swap them. But where this comes a problem is that you almost have to nest it now,
[228:36.06] because if you have like create async and it returns one user object, right? And then you want to like
[228:42.06] on prop change have a second user object. You don't actually want to reconcile. You want to swap the
[228:47.10] user if the user changes. You want to reconcile if the user, the same user is the same user, but its data
[228:53.82] is updated. So it's hard because top level, there's, there's no, there's nothing to swap because you can't
[229:00.30] listen to swapping the top level, right? We do that with arrays because we do a special track, you know,
[229:06.22] ability, but no one's tracking the top level. You can't just pass store into, you know, like an object
[229:13.26] and have it tracked properly. Um, you know, no, no one just listens to store. You listen to store dot
[229:19.18] something. So like, yes, if you did the swap and effectively only the user, like, like, uh, ID,
[229:30.22] like if a property on it changed and you were listening to that property, then it would update properly.
[229:34.70] but it is very difficult. I mean, maybe, maybe that's fine, but I think you kind of see what we're,
[229:39.50] where the problem is. Like we literally can't notify a top level swap, right? Uh, so if you're like
[229:50.78] writing to your store and you want, and a new, if you, the whole story has an ID, then you, yeah,
[230:00.46] you know what I mean? Like it doesn't make sense. You can't reconcile something into another.
[230:05.74] Um, so I, I think this is probably the biggest thing because, um, like, as I said, the problem is
[230:17.50] you just went like this, fetch user, create async, create projection, reconcile user s. It would error
[230:22.78] or not work as you expect if user ID change. Right. So I wrote a bunch of complicated code. Um,
[230:30.22] you know, this is like checking if the user ID is changed and then reconcile, but you, this is actually
[230:38.70] changing the user ID. Like this is, this is like cheating. This is like saying, Hey, I'm going to
[230:42.78] change the user IDs to its new ID. Now they're the same. Now I can do it. I mean, at least I'm forcing it to be
[230:48.22] explicit, but the, the, the better solution is actually, and this is a trick we use actually
[230:54.06] in create async store inside a solid, um, router is put it on a property and that way it can be swapped.
[231:01.26] Right. Um, this is a consideration people probably have not thought of. So it's something that I'm
[231:08.62] still trying to get around. I also tried to come up with some other fancy way of doing it. This is
[231:13.10] like nesting a store inside of like, it's funny that you can do this multiple ways. I think this
[231:17.98] is still the best way of doing it basically putting it on a property. I don't think that's going to
[231:25.66] necessarily impact a lot of people, but it's just something you got to kind of understand. Create a
[231:30.46] sync store can do this internally. Like we do dot value inside create a sync store. It just, you don't
[231:35.58] want to try and merge distinctly unique things into each other. You want to, you need to be able to swap them.
[231:43.10] Yes. Uh, yeah. Normalized stores, right? The old Redux thing, right? Where you put them on an ID
[231:55.98] and then iterate over the keys. Yeah. That's probably, that's probably the, the best way of doing it. Um,
[232:03.66] from like a data normalization, if your store is big enough, you're probably going to have to do that
[232:07.42] because you have relational models, but like the basic case. Yeah. I mean,
[232:13.34] I came up with a few takeaways here to wrap up this topic. If something has an identity, it needs to have
[232:21.02] a key. If it can appear in multiple places or has other different things of the same type, then it needs
[232:25.50] to have a way to indicate its unique identity. Okay. So that's number one. I think that's, that's rule one.
[232:31.50] Two stores mutate. Their performance benefit comes from doing granular updates. If someone
[232:34.94] mutates something, it is mutated. Okay. Pretty straightforward. Reconcile is not a mutation
[232:40.22] operation. It resets the store to the suggested references. That way, the next time you reconcile,
[232:44.62] it can do it. So again, and always be able to referentially tell what changes. I was kind of
[232:48.94] joking around and calling it like rebase instead of reconcile. It's not quite the right term, but
[232:53.34] you kind of, um, it's that's kind of its purpose for you can't reconcile two objects that have different
[232:59.98] identity. You can't reconcile one identity into another. That's that's, that's basically my rules
[233:07.02] and takeaways. I think with those rules, this is consistent to be fair. I understand this a lot.
[233:13.58] I'm it's funny because I feel like people watch my stream. They probably are like, get scared away
[233:19.10] from solid JS unless they're in deepest me, because the truth matters. This isn't a how to use solid
[233:24.78] JS stream. This is how to write solid JS stream. Once the funny thing is I go through all this pain
[233:30.70] and all these details and all this stuff so that at the end, the line, someone can just put create
[233:37.50] signal in a component and call create effect to update it. I mean, that's, that's sort of the reality
[233:45.90] of it. You know, um, I'm saying, I'm not suggesting that anyone go out and do that, but that, that is,
[233:54.78] that is kind of how that's, that's where things go. It's just important to create tools and in the right
[234:01.18] way and then hopefully guide people in that direction. So I'm sorry if this is a lot. Um, but I, I, I hope the
[234:07.98] explanation of the capability is pretty, pretty clear here. And I actually have a demo for this. Um, I don't
[234:14.70] think my notes synced, uh, no, my notes are not synced. Give me two seconds. Um, I need to grab this demo.
[234:23.82] Um, I, let me, where is it? Solid. Is it an
[234:36.22] Um, do, do, do, do, do, do, do, do, do, do. God, it's been so long since I've been working on this stuff
[234:43.66] that it's, I, I sometimes
[234:46.06] I have no clue how I actually found it earlier. Let me, let me see if I can send it to myself. Two seconds.
[234:59.26] I have it on my other computer. It's just my stuff didn't sync, um,
[235:05.82] discord.
[235:12.06] Sorry about that. One sec.
[235:23.10] I'm just going to use a public discord as my sync mechanism. There we go.
[235:27.58] Cool.
[235:30.46] Okay. So
[235:33.74] yeah, I think I'm very flattered by this whole Ryan script, um, thing. I was trying to write reactive
[235:42.94] script, but you know, okay. Check this out. So this example looks complicated because it's using the new
[235:50.14] solid reactivity, but it's, and, but without the compiler. So I hand compiled everything,
[235:55.18] which surprisingly is an exercise that I'm enjoying doing a lot these days, just for fun,
[236:00.38] where I'm just like creating stuff. But what I did was I took one of the oldest examples off the solid
[236:06.14] tutorial where, uh, or, and I think actually had an old code sandbox. And essentially there's this one
[236:13.74] file that has all the redux information. This is literally redux. Um, and it creates a redux
[236:19.90] next door that has two actions, add to do toggle to do, right? So you can go, you know,
[236:26.06] you can add a to do, and then you can toggle it back and forth. Okay. Now,
[236:31.18] before I had this custom logic, um, because I had to make my own undo library because solid
[236:40.86] mutate state and had to make snapshots. But for this test, I literally just took the off the shelf
[236:45.82] redux undo tool. It was linked off their website. So I was like, okay, I will just use that. And I
[236:52.06] just wrapped it going undoable to do's and then undo type, undo redo type things. So I just tell them
[236:56.30] what the types are and I passed it in. Um, because I'd already written this based on this, it wasn't too
[237:02.94] hard to add the new actions. And then I had to, I had to write, uh, some logic to map between the structures.
[237:11.26] But basically I made this simple hook, which creates a store, uh, a solid store subscribes to
[237:18.22] our redux store. And this calls literally reconcile on it. That's all it does reconcile, map the state
[237:26.30] and on cleanup unsubscribe. So, and there's also this capability to map actions, right? Um, so the way
[237:36.38] this gets used here is I'm creating this redux store and it's essentially you pass in the redux store, which
[237:43.34] is actually the redux store that I created. And I pass in a way to map, um, the state coming in redux store,
[237:52.54] which now because it's undo has like present past and future in it. And it gave me a couple of things
[237:57.82] like to do's, which is present to do's can undo and can redo is based on past length. I literally copied
[238:04.38] this example, like straight off the redux website essentially. And then I passed those actions.
[238:09.42] And so basically other than this simple wrapper, which says on redux store call, reconcile unsubscribe.
[238:16.30] Um, and then like writing a simple mechanism for doing mapping, essentially like map, you pass a map
[238:23.18] state and map actions more, more or less, which is pretty standard in redux. If you've ever used it,
[238:28.06] this is like, there's no specific code to this problem of undoing here. This is just standard redux,
[238:35.42] um, wrappers. And this is a specific store that just happens to use some immutable library from the redux
[238:43.10] ecosystem. No special consideration. Um, I was able to, yeah, there's a lot of document create element
[238:51.34] here, create a UI, um, by hand, which is a little bit of fun. I just created a bunch of elements,
[238:57.58] created some render effects to disable buttons. Um,
[239:05.18] then appended them all to the, to the page. I did something very simple for making the list,
[239:10.30] which is not efficient. Every time the to do's change, I just replace all the DOM elements.
[239:17.18] Don't get me wrong. Technically they're the same references. I'm not recreating all the new to do's,
[239:22.22] but they are getting removed and added again. So they will paint flicker. This is not solids reconciler.
[239:29.34] This is literally a one liner. Um, uh, just to like, this is the, the simplest way an insert works.
[239:38.70] Everything else is just returning DOM nodes, doing map. See map array. This is, uh, this is for component,
[239:45.10] um, essentially basically just hand compiled it. But the result is that
[239:57.42] we have full, Oh, soups. We have full time travel without, because we don't mutate the state anymore
[240:08.70] and we didn't have to do anything special. Basically all of Redux's capabilities, um, natively just work
[240:19.18] here without us having to do anything special. Um, so that's the, that's the outcome of it. It was
[240:25.50] literally just a reconcile wrapper. So this is kind of both very fast in the benchmarks and very simple
[240:34.30] to create a wrapper. This will be very important. Uh, it'll make stuff like X state easier. Um,
[240:39.98] managing stuff like that. I was very upset with how, like, don't get me wrong. I feel like a lot of these
[240:49.90] third-party libraries could be set up in such a way that they could do fine-grained updates instead
[240:55.66] of immutable and they would be much more performant for us. But this approach to diffing like right now,
[241:04.06] X state uses like a different store. Someone like I made something called create a mutable once,
[241:08.46] which is like, this removes the need. I think this new story API, um, between using produce as the default.
[241:16.94] So like you just write to it like mutables and using reconcile immutability basically removes the need
[241:23.66] for having three store permanents in solid or all these different ones. We literally just need store
[241:27.90] and we're, we're good to go. And then that stores can also be used through projections. So like
[241:32.86] essentially, um, all the different combinatorics and are handled by a single solution.
[241:40.46] So yeah, um, interesting topic, or at least from my mind, but I spent a whole bunch of time fixing
[241:49.74] stores and this is the result of it. Um, so yeah, I don't know. Uh, you can check out this example.
[242:02.06] Okay. The other thing that I've been working on is
[242:12.14] is, um, I might say this, are these lakes real to a different time? Tanner was trying to come up with
[242:23.34] a different way to do server components. It didn't use, use server and use client. And I, I, I, I had a new revelation on how to do that.
[242:30.94] Um, but let's look at hierarchical reactive scheduling boundaries. Um,
[242:35.90] This is probably more interesting to people who are really into the deep into the reactivity.
[242:41.66] So it might, I'm, I might just skip the explanation here and go straight to the demo because it's
[242:48.38] probably more interesting to more people. But the, the gist of it is I started thinking really high level
[242:55.90] that there is a scheduler behind, um, signals reactivity as much as we, you know, talk about,
[243:04.06] you know, it is, there is a poll, there's a definite poll there, but there are a lot of things that need
[243:10.54] to get scheduled to make that poll possible. And they happen in phases. Um, and I really roughly,
[243:17.90] I said, there's five phases, there's pure schedule computations, things like create async things that
[243:23.10] you like need to schedule, even though they're not like effects, so to speak, uh, projections fall in
[243:29.50] this category until we can actually find a way to pull them properly. Um, then there's pure side of
[243:35.98] the effects like the front half, like the render effects and the user effects. It's, if you saw in
[243:41.58] this example here, you can actually see it in action. I'm actually doing this where there's the tracking
[243:48.14] part and then there's the effectful part. So tracking part goes, can store undo. And then the effect is,
[243:54.38] you know, do this. Can this, this is an example of this kind of split effect approach where you track
[244:02.38] the reactive state and then you do the side effect. So if we go back to, um, here, the pure side of
[244:12.06] render effects and user effects would run next. Then, you know, pulling out all the reactive values,
[244:18.14] then, um, you can do, you do the effectful part of the render effects before doing the user effects
[244:23.74] because the users wants to be able to read from the DOM, you know, that's been updated. So generally,
[244:28.86] there's this kind of flow and I, I, I suspect the order of two and three don't matter because they're
[244:36.94] pure. Do you know what I mean? Like they don't do side effects. Like you want to render before you do
[244:41.02] the user effects, but the pure side doesn't really matter. In fact, all three of these probably could
[244:47.10] be combined into a single queue, which is what I'm going to do this thing. But essentially there's pure
[244:51.66] stuff render user, which is the way solid works today. I, as much as I tried to like delete it,
[244:58.22] this, we still have the same phases. It's I got right back to the same place when I tried to solve
[245:04.14] the same problems, but so all pure stuff, impactful stuff, French stuff. But I started thinking, um,
[245:11.74] we have an interesting problem because we don't necessarily always want to run all three of these
[245:19.42] all the time. Like a perfect example is if you're suspending, you'll run all the pure stuff, find
[245:24.06] something async and then be like, nope, not running any of the effects until the, the effectful parts
[245:29.02] until the, um, to the pure stuff runs, which is why there's the split. Because if this was async,
[245:35.98] you don't want to run this and it's not just that you don't want to run this, you quite likely you
[245:43.02] don't want to run, um, you might not want to run, show any of this because it could be torn. Like you
[245:51.82] could be showing some UI missing some parts there, classes missing, whatever. So what you want to do
[245:57.42] is you want to go, no, I know that this is waiting somewhere. I'm going to show a suspense boundary.
[246:04.62] And then when it's done, I'm going to go through and run all the effects and actually do the actual
[246:10.78] rendering. But you know, because you do all the tracking here, you will capture all the async on
[246:15.50] the front half. So what, um, what I'm getting at is that like, there's different patterns here about
[246:24.86] when you want to run stuff. You could also do something like off screen where you're like,
[246:28.70] Hey, I actually don't want to run any of this. Um, when it's off screen, I don't want to do any work.
[246:36.22] And then when it's connected, I want it to do work. So I can like hold some nodes and stasis
[246:40.54] and then bring them back and not have like a bunch of like work chugging along that no one's going to
[246:44.78] benefit from. You could update the signal like 15 times when it's off screen. You don't need to
[246:49.50] do it 15 times at the end. You just need it to come in. So, but the problem is you still want
[246:54.22] when stuff, even if you subdivide stuff hierarchically into these boundaries, like you have like
[246:58.78] top level app and then you have suspense, some off screen, these pieces, you still want all the pure
[247:04.86] for all the parts to run first, all this for all the parts and all this, you don't want to run these
[247:10.38] as individual apps. You actually want to synchronize the pure part, the render part and the user part to
[247:16.14] happen at the same time when you're doing a flush. So I started thinking of creating like a hierarchical
[247:22.38] queue, which could add into each of those three queues, essentially, and have the ability to run
[247:29.66] a specific queue and then ability to add child and remove child queues from them. And the expectation
[247:36.30] is that when you run a specific queue, you run yourself and you tell your children to call their run
[247:40.78] function. Now the children themselves could, you know, do whatever they want. This is an interface.
[247:47.02] The children could be like, I'm not running, but conceptually you can kind of bring everything
[247:51.90] together. So the parent controls the flow down when you flush, but the child basically can halt it or do
[248:00.78] whatever it wants all the way down. I mean, I talked about off screen. Another one would be like picture
[248:04.78] you have a part of the page that people don't really interact with, or like maybe it's farther screen.
[248:09.10] And you're like, I'm going to update it every 15 seconds. Like I don't need it like freaking real
[248:13.58] time, you know, because of the laziness and because of scheduling, we have the ability to control these
[248:18.14] kinds of things. So, um, yeah, I mean, I go in a bit here and I should probably share this one.
[248:28.46] Um, did I already share this one? Yeah, I did already share this one. Um, and talk about like
[248:35.90] some of the consequences with async and transactions. I'm not too actually worried about that. I think
[248:40.86] that, um, clearly when people are opting into these different queues, this is a very low level API. I'm
[248:46.14] using this to build suspense, to build off screen. I don't expect the average developer to be building
[248:54.38] their own suspense component from scratch or off screen component from scratch, or, you know, delayed
[249:00.86] component from scratch. But I'm approaching this from a primitive standpoint, basically making the core of
[249:07.34] the reactive system, have the ability to create any sort of signals based framework, right? Like that's the
[249:12.70] conception here. I want to, I want to understand what the building blocks are. And this is kind of where,
[249:17.34] um, I, I got to, right. You have to consider there's interesting hierarchical considerations. You have to
[249:24.06] think about, you know, that, uh, like the impact of, you know, if something is not present, then it's not
[249:33.02] participating, say in suspense. But I think the hierarchy mostly just works. So I'm going to show another
[249:41.10] example here of me doing the same kind of thing I've been doing the last little bit, which is, uh,
[249:46.78] what I ended up doing was I made another one of my hand programmed apps. And what this app does is it
[249:57.34] creates a signal and a button with an increment, and then a toggle for switching, uh, a mode in this custom
[250:07.34] queue I made, which extends the base queue, which you can just assume does the normal operation with two
[250:13.50] methods. Um, one, the toggle between it being this mode being enabled turned on and off. And then another
[250:20.86] one that when it's enabled, call the, the run function. Otherwise, if it's like not enabled, don't
[250:27.98] call the run function. So this is just disabling basically the whole queue. Um, if it's not enabled.
[250:35.82] And then what I did was I put one counter
[250:38.94] top level, and then I put the other counter inside this boundary where I passed in the custom queue,
[250:49.42] which gets toggled. And then simply whenever I toggle it, I switch the text on the, on the toggle.
[250:56.78] So essentially the base behavior is as I click, the count goes up because everything updates. Now,
[251:04.22] if I toggle off the boundary, when I click now, only the first one updates. When I toggle it back on
[251:13.50] the, the, the, the other one doesn't run all the missing stuff. It just basically just updates again
[251:20.46] to the, like the latest, cause it knows that the, the thing that depends on it has updated essentially.
[251:29.90] So, uh, then it runs, it sees that it's updated, runs at once, gets the latest value. And then if,
[251:37.74] you know, if it was queued more or whatever, it just goes, okay, I'm already updated. I don't need to run
[251:41.34] anymore. So update off to, to, to, to, to, to, to toggle on. This is basically the off screen component.
[251:48.78] If you think about it, see, now it's off screen, don't care about it, bring it back on screen and so on.
[251:55.58] No, uh, this is about the reactivity. The, the, the, the fact that the DOM is there is it's off screen
[252:10.22] is this thing that view has or keep alive. Maybe. Um, I, I forget it. They talked about in react to,
[252:19.10] I don't think they've implemented it yet, but this idea that you can like hold part of the page,
[252:25.82] like outside of the DOM, because like, think about it in solid, when you create a component,
[252:30.54] you just get some DOM elements. If you don't insert them and just leave them out somewhere,
[252:35.50] like they're still alive. And then you can attach them again. Like you can just like add and like,
[252:40.14] because all you're inserting in solid, it's very obvious when I'm doing this document create element
[252:43.90] stuff is we're literally just. Inserting DOM elements. So whether they're connected to the
[252:49.98] DOM or not is irrelevant from solids, whether they're even DOM elements irrelevant from solids perspective.
[252:55.26] The, the whole trick to off screen though, it's like, you can do this today. You can just stash a node
[253:00.86] and then insert it and uninsert it. Like you have a tab thing and you have three tabs. You can be like,
[253:04.46] instead of using, like you, instead of just purely using show, you could basically be like, oh, I'm going
[253:10.14] to, um, render all of these and then just choose which one I insert, for example, or you can cache it
[253:17.26] the first time you insert. Like there's lots of tricks to do this, but the problem with solid today
[253:22.06] is if you create three tabs and you have a signal that's listened to and all those tabs,
[253:26.62] this happens, right? Like you update the signal and those pages, even though they're not on the page,
[253:32.70] they're updating, they're re-rendering their DOM and stuff. Maybe that's fine, but you know,
[253:37.26] you're actually doing all the work for stuff that you will never see. Whereas what I'm suggesting with
[253:42.54] off screen and I'm showing it here so you can visibly see it is when you detach it from the DOM
[253:46.86] and it's in an off screen situation, you can freeze it. So updates aren't running,
[253:54.06] but it knows it's updated so that when you attach it again, it's updated. So that's kind of like what
[254:02.22] what the off screen mechanism is. I don't, it's essentially a way of holding the queue, so to speak,
[254:10.94] so that you don't have to do unnecessary work. So yeah, view has this and I, I, they might be the
[254:19.18] only one, but I keep on getting requests for this. And I was like, and I was like, I started thinking
[254:24.54] that this was like very similar because you, this shortcuts everything, but if you like suspense would
[254:30.22] just shortcut the actual, like, effectful parts and run the pure stuff over and over again until
[254:36.14] async is complete. And then it can then run the effects and update the rendering. So like,
[254:42.70] it's all kind of the same thing. Suspense would be just a different type of queue mode switch based
[254:48.70] on some other criteria. Um, and the thing is this stuff can work, um, hierarchically, right? Why not?
[254:56.14] So I actually made a nested example, same thing. I just changed the text around. I don't know why
[255:02.94] I didn't make it an H1 probably to make it less confusing on the layout, but it doesn't feel less
[255:07.26] confusing. Um, let's make this an H1 again. Yeah. I don't know if this makes it,
[255:15.50] it's probably doesn't make it less confusing.
[255:20.62] Basically what I did was increment first counter, then inside the boundary, I wrote a button in
[255:28.70] another counter and inside this boundary, there's another boundary with the, with the counter. So
[255:35.82] if you want to see it here, there's, I called it off screen. I just ended up pulling this button
[255:41.66] component. It's like the toggle plus, um, wrap around its children, boundary around its children
[255:49.66] as this off screen. It's like a pseudo off screen because it's actually doesn't remove it. It just,
[255:53.66] you need to see it in the DOM to actually understand that it doesn't do any work.
[255:57.90] Um, it just has a button here, but essentially what you can see is counter off screen, get children.
[256:05.98] Um, and then here there's a counter and another off screen, which gets children, which has another
[256:13.10] counter. So you, you, you seen there's nesting off screens, um, and there's counter in each of them. So
[256:19.02] if I start incrementing all three update, right, as expected, and then if I turn off the bottom one,
[256:29.82] only the top two update, because it's the most nested, if I turn off this one, then only
[256:35.02] these ones update and so on. If, if I turn this one back on, it doesn't matter because it's still under
[256:45.02] this one that's off. And then when I turn this one on, they, they jump up to 31. So, um, yeah,
[256:54.86] you can kind of see it up. If I turn this one off first, now only this one's updating. If I turn
[257:00.70] this one off, increment some more, then I turn this one, this one jumps, turn this one, this one jumps,
[257:05.58] toggle off both of them. Oh, this one's off. This one's still on, but because it's under this one,
[257:12.38] it's still off and then jump. You get the idea. Um,
[257:21.98] so yeah, like conceptually like nesting works. Um, right.
[257:27.58] This is probably more interesting to me than other people, but it's just this idea that we can
[257:35.66] generalize, um, the controlling of flushing using the ownership graph. Like it's not just about disposal.
[257:42.38] It's also about scheduling. And this, as I said, it doesn't help with transactions necessarily. It
[257:47.66] It actually makes transactions a little bit more complicated, but what it does do is help with things like off screen suspense boundaries, weird place that updates based on polling, you know, like, yeah, it's just, it, it, it, it, it, I guess it has supposedly niche appeal, but it is, it is powerful because it handles this whole category of, of thing.
[258:17.66] Um, obviously someone could try and write this manually in a sense, that's how solid works today, but it's, I think it's nice to be able to generalize it.
[258:26.74] Okay, cool.
[258:28.52] Um, yeah, that, that, that's, that's all, that's all there is to this one.
[258:34.76] Um, what it means though, if you've been following along is we've almost solved all this, uh, 2.0, um, design space stuff.
[258:45.66] I've been working on, um, like the different primitives I want to see, and I've been writing up like proposals so people can understand the impact of those.
[258:54.48] And we're getting to a point that I almost now implemented every feature I need to suspense will be next.
[259:01.34] Now that I have this, I should be able to get suspense.
[259:02.94] And I think that's core, um, um, um, off screen is not so core.
[259:07.68] Cause like we could put this actually in solid, not in the reactivity library suspense, because the way it reads into the effect queue probably needs to.
[259:15.66] Be part of the reactivity core.
[259:18.00] But what I'm getting at is now that we have this, the only thing that's left is transactions.
[259:23.04] Um, which is probably going to be my next thing.
[259:27.82] Technically create projections are unsafe.
[259:29.82] So, um, there's probably work to be done there, but, um, things are coming along essentially like this version of reactivity TSX, um, has all the async primitives, has all the, the stuff it's the pieces are coming together.
[259:44.88] So I'm, I'm pretty happy on the progress so far.
[259:47.52] Okay.
[259:49.40] Um, okay.
[259:53.52] Give me a second here.
[259:54.60] Let's see if I have any, this week in JavaScript to talk about.
[259:57.36] Um, cause I have not been very on top of stuff.
[260:03.76] If I admit, I think the last time I did a stream, um, was so long ago, it was, um, it was a month ago.
[260:15.10] Um, according to Twitter.
[260:24.86] Okay, well, I apparently did talk about some stuff.
[260:29.54] So I'm like, I'm going to get that ready here in two seconds.
[260:32.94] All right.
[260:34.76] Right.
[260:37.58] It's funny navigating both Twitter and, uh,
[260:53.60] it's been a while and blue sky trying to, to actually get stuff set up.
[260:58.04] The internal secure look like, I mean, it's, if you go to solid signals, you can see it.
[261:06.72] It's actually not, it is almost like what I said.
[261:11.46] It's basically, um, uh, how should I put it?
[261:16.16] It's, it's basically a for loop, you know, for each type.
[261:22.94] And then, um, yeah, yeah, it looks like most of my stuff is just me being annoyingly facetious.
[261:40.66] There was a lot of conversations the last month about, uh, um, you know, uh, like Aiden's tool, you know,
[261:52.24] with the, uh, with the, uh, yeah, what the, the, the react scan yeah.
[262:05.00] November 7th is when I last did a stream.
[262:08.80] Um, yeah.
[262:12.86] Okay.
[262:13.12] That's good.
[262:13.72] And then last one is solid JS one second.
[262:22.30] Um, and then last one is solid JS one second.
[262:26.54] Um, and then last one is solid JS one second.
[262:32.60] Um, and then last one is solid JS one second.
[262:36.24] Um, and then last one is solid JS one second.
[262:41.78] Um, is diffing and reconciliation, the same thing, um, kind of, I, I call reconciliation,
[262:50.96] like the whole process, like diff there's a point, like when I talk about diffing, I'm
[262:54.62] talking about just like the, this, the, the front half, like going, has this changed?
[263:00.42] Um, and when I talk about reconciliating, it's more of, it's either the second half or the
[263:05.18] whole process.
[263:05.60] It's when you're talking about actually taking that information of what changed and applying
[263:12.40] it or making the, the, what exists match what you, your input is.
[263:19.60] So in a sense it is diffing, but it's, it's more than just the diff it's the, it's the resolution
[263:27.10] of said diff so that the new state reflects in like the, the, yeah, the, the old state reflects
[263:36.60] the current state.
[263:37.78] Like we, we change it from how it was to how it is.
[263:41.54] Just reconciling it pretend you're the main source of JS news.
[263:47.60] Could you give me a rundown of the hackathon?
[263:49.66] Yeah.
[263:50.66] I wasn't as involved in the hackathon.
[263:52.60] Um, I, the last, I mean, I wasn't super involved last time either, but, um, David and them did
[264:00.22] a great job running all those, uh, projects and all the, all the things, but yeah, we'll
[264:05.44] definitely talk about the hackathon when we talk about, um, we talk about solid today.
[264:12.58] So yeah, let, let, let me share my screen and let's, let's get started.
[264:16.14] Um, yeah, yeah, where are we, God, why can't I, let's get started on this week in JavaScript.
[264:28.64] So yeah, let me, it's funny.
[264:35.78] I did all that.
[264:36.78] And then I ended up being, um, I ended up being not on the right screen anyways.
[264:49.78] Uh, so yeah, we'll, we'll, we'll, we'll kind of go back a bit between Twitter and blue sky
[264:54.96] guys.
[264:55.96] It makes sense.
[264:55.96] So the, most of the conversation, I think it's still on Twitter, um, at least on my side
[265:00.18] of things, at least a month ago it was, um, was there a video that goes through some entries
[265:08.30] and winners?
[265:09.30] I saw, I thought I saw a video about someone going through some of the entries.
[265:13.04] Um, I don't know, was, was it Jay Larky again, but yeah.
[265:20.04] Um, uh, the winners, I have the list because we posted, um, them each time as they won on
[265:29.92] the, uh, on this, uh, solid, um, Twitter feed and blue sky feed.
[265:36.04] But anyways, yeah, let's, let's, let's look at a few of these tired of folks seeing this
[265:39.92] and thinking react.
[265:40.92] Oh yeah.
[265:41.92] Right.
[265:42.92] It's kind of funny.
[265:43.92] There's this whole conversation about, you know, how similar frameworks are getting and you
[265:50.30] might not be able to see this code that easily.
[265:52.54] This is view code, but it's literally just ref, you know, which is a signal random pick and
[266:00.20] then like vine tag template, literally, uh, a template.
[266:05.54] Um, what no one told me about view vine before this looks so good, right?
[266:10.16] Because a lot of people who are on the react side, their biggest gripe with viewers felt
[266:14.50] is a single file components.
[266:16.04] So this is like literally view without the single file components view reactivity and whatever
[266:22.22] this vine is.
[266:22.94] I don't know if vine is even actually using view internally to do the rendering.
[266:26.98] I'm not actually that familiar with it, but it basically, so it's now funny react.
[266:32.72] No kind of, it's more similar to solid.
[266:34.40] Yeah, but also interested traditional view files and positive view.
[266:37.24] Okay.
[266:37.64] Yeah.
[266:37.84] So this does actually make use actual view under the hood.
[266:40.74] So that, yeah, that's, it's just, this is closer to actually, um, it's funny.
[266:47.42] You can have JSX components in view as well.
[266:49.20] So I'm not, it's kind of interesting because the people who really like single file
[266:52.16] components and all the kind of like compilation aspect impacting the top part of their code
[266:57.72] probably see no point in this, but for other people, this is like the complete game changer
[267:02.08] that like, this is a possible mode here.
[267:04.02] But yeah, it, it, it, it, what I was getting at here is that the response was like now views
[267:12.96] like react.
[267:13.74] And I, I have a little bit of a bone to pick on this one, I think, because, um, view is like,
[267:23.58] like, why do people see this and instantly think react, I guess react has kind of cornered.
[267:29.14] This whole market of function is a component thing, but like my, my knockout code was like
[267:34.84] that.
[267:35.50] Um, it just, it's, it just, it's very odd to me that you have signals library that, you know,
[267:44.14] has function components and people from view and Svelte communities, I've been seeing this
[267:51.14] are like, Oh, now they're just copying react.
[267:53.98] And it's like, ironically, it's like the furthest thing from react.
[267:59.42] Um, with every major, yeah, I don't know why this bugged me so much.
[268:05.84] It's funny.
[268:06.34] We look at something a month later and you're just like, why was I so worked up about it?
[268:09.60] Anyway.
[268:11.06] Yeah.
[268:13.14] Geez.
[268:13.70] Yeah.
[268:13.96] I was definitely worked out syntax and JS framers is overrated.
[268:16.64] Is anyone actually surprised the same people who complained about Svelte ruins being too much
[268:20.20] like react now that they're migrating their apps are realizing how much cleaner it is.
[268:23.76] Wounds were never about react.
[268:25.34] Yeah.
[268:25.72] Yeah.
[268:27.92] I think, I think I was on a, I was getting very annoyed about, I, I, I would, I was checking
[268:34.42] out the view and Svelte discords.
[268:37.70] Yeah.
[268:38.14] They see function components and think react.
[268:45.04] Yeah.
[268:45.26] But I mean, as I said, function ironic, I mean, returning the view at the bottom of it was react
[268:52.40] specific.
[268:52.86] I'll give, uh, because templating languages used to be on the outside.
[268:56.90] So like when you built components and knockout, you would return child components.
[269:04.26] It's so weird because it didn't, it wasn't view code.
[269:07.74] It wasn't divs, but like you, you, you would return like nesting of like you, you'd write
[269:15.04] your view models essentially.
[269:16.40] So you'd have like user list component, essentially return, an array of user components that, um,
[269:27.68] returned, you know, a user component that had an address, um, component and, uh, and, uh, something
[269:36.98] else.
[269:37.24] You just wanted like you were mapping out view models, but they were basically the data
[269:41.30] side.
[269:41.74] And then on the other side, you had templates, which would map out the, the, the, the other
[269:48.44] side.
[269:48.70] But yeah, it's just so weird to me because like when I saw react, it didn't feel that different
[269:54.18] to me.
[269:54.54] I don't know.
[269:55.18] So it's like, I, especially moving from the single file component, like we've had script
[270:02.20] tag in Svelte for a long time or view or whatever.
[270:05.18] Like, I don't know, like the code already looked like this.
[270:09.92] Yeah.
[270:13.20] React.
[270:13.76] Yeah.
[270:17.08] Um, yeah, this is my other gripe.
[270:28.86] When I moved to blue sky, all my articles are broken.
[270:31.36] I've, did I talk about this last few minutes?
[270:33.18] I don't think I did because I said here that I was, oh, the stream's back tomorrow.
[270:36.56] So maybe I did talk about this last stream.
[270:39.12] I can't remember if, if I ended up actually talking about this, but all my articles are
[270:46.16] kind of broken because I like quoting react core team members, like seven Dan, a lot in
[270:51.22] them.
[270:51.40] And now they're like literally blank, like react versus signals 10 years later, one of my most
[270:59.74] read articles of all time, I think it has over a hundred thousand and some odd reads.
[271:07.42] these are all missing Dan Abramoff quotes.
[271:16.68] Well, Andrew Clark's still there.
[271:22.10] The base, the articles, I tried to find them like way back machine.
[271:28.02] So the article is basically unreadable now.
[271:30.90] I don't know.
[271:31.86] I have a lot of articles like this.
[271:33.24] It's, it's just really good.
[271:38.64] I mean, it's not completely out of, out, but like these quotes are, are actually really
[271:49.62] important to the article.
[271:50.68] It's actually really frustrating.
[271:52.20] Anyway.
[271:55.44] No, this starts Dan, but I wish he hadn't new to his account when he left Twitter.
[271:58.06] The entire documentation for all modern undocumented react features were buried in massive treat
[272:01.92] threads that are now gone forever.
[272:03.16] Yeah.
[272:05.56] Anyway.
[272:07.60] I posted this one on blue sky and someone was like, pulled out some political thing.
[272:14.20] And I was like, I don't, I don't even, I don't even know.
[272:16.38] Oh, side note.
[272:17.14] I guess it's, is it still open if you haven't done the state of JS survey?
[272:21.96] Oh, it closed on the 10th.
[272:24.76] I didn't even get through a live stream to, to put you guys all to vote for solid on here.
[272:30.70] Whatever.
[272:32.84] It's all good.
[272:34.20] God, Valibot's still just growing and growing.
[272:46.38] He's, I haven't talked to him.
[272:50.34] I don't know if he found a job.
[272:51.70] All right.
[272:52.98] Yeah.
[272:57.64] Voting opened our whole hackathon actually finished since the last time I streamed, which is crazy.
[273:03.14] Yeah.
[273:05.36] So let's talk about react scan for a bit.
[273:08.48] I know this is old news for, for everyone, but Aiden just started going around tearing at
[273:13.34] websites here.
[273:16.38] And, uh, it's kind of funny because seeing the react react re-renders, isn't the whole story.
[273:26.80] The performance might still be perfectly fine here, but, um, it definitely drew attention to
[273:35.00] something that's like, doesn't happen in other frameworks.
[273:42.48] Like, Aiden had some side-by-sides, I think, at some point showing other stuff.
[273:46.80] I'm glad he's getting attention for this.
[273:51.00] This is, he's been trying to come up with all, it's, performance is a difficult thing because
[273:56.32] it's like trying to, I don't even know what it is.
[274:00.46] It's like trying to sell water to.
[274:05.98] It's like trying, it's, it's like trying to sell meat to a vegetarian, right?
[274:13.12] Like, I, I don't know how else to, to explain it.
[274:18.10] Like, like people who use react, there's a billion other reasons you use react.
[274:32.60] Like million has a great approach to, you know, with blocked on of like improving like the core, the
[274:39.94] core rendering aspect, the compiler, um, can prevent the re-render stuff to, to a decent degree.
[274:47.90] Although Aiden will tell you not in all cases.
[274:50.02] Um, but it's like.
[274:52.30] People use the compiler because they're told they don't have to think about something, not because
[274:59.50] they actually care about performance, which is what's probably made this really difficult.
[275:03.16] because I mean, this is a fun Twitter topic because Aiden can just basically rip apart anything
[275:08.08] that's react because almost every react site suffers from this.
[275:11.40] People get to a certain point where they're just like, I give up.
[275:13.60] Um, it's good enough.
[275:16.06] But like it, it is, it is interesting.
[275:20.44] Cause I said, this doesn't necessarily lead to actual bad performance.
[275:24.12] These are react component re-renders, not dom re-renders to my understanding.
[275:28.24] So yeah.
[275:33.16] Um, discord is smart.
[275:34.36] Yeah.
[275:34.64] Yeah.
[275:35.26] Look at this.
[275:35.70] This is actually, yeah.
[275:37.30] I love though, that this is at least getting attention.
[275:42.56] People are just aware of this, which I think is, is good.
[275:48.70] But the, like it wasn't the, the point, this is, this is, this is where the disconnect is.
[275:54.66] I think for a lot of people, the point isn't about performance.
[275:57.10] I don't think it was ever about performance.
[275:58.90] The same reason when people like, oh, solid, it's just faster.
[276:01.44] If, if I was just selling you on faster than like, like you have the same problem again.
[276:07.62] It's because if the crap doesn't re-render, that's just something else.
[276:12.94] You just don't have to think about or worry about.
[276:15.08] It's, if you truly didn't have to worry about re-renders at all, then like, yes, no one would, would, would care.
[276:27.78] Um, but the problem is like, people clearly do care about re-renders, which means that this becomes actually a concern.
[276:37.10] Um, I, there's a, there's a guy I was chatting with on Twitter, um, who was like, basically, um, on one, in one sentence was saying like, oh yeah, I've used React compiler.
[276:50.52] It made, you know, my app a lot faster in a lot of ways.
[276:52.92] Um, and then on the same side, he was like, you know, there's, there's no point to solid.
[276:59.10] Um, these kinds of optimizations aren't proven to actually make anything faster.
[277:03.50] And I was like, but you, if that's the case, why did React write the compiler and you yourself, since the React compiler had visible benefits.
[277:16.12] So like, you can't, you, you can't have both ways, right?
[277:19.74] Like either reduced re-renders are an improvement, right?
[277:26.46] Like there, there was, there was a quote that I was trying to find, uh, it took me, I was trying to find it and I couldn't find it.
[277:36.20] I think it was, I was like asking people, it might've started from Dan Abramoff or something at some point, but like, um,
[277:43.94] Um, where was it?
[277:49.22] Yeah, I, I'm not, I'm not even seeing it anymore.
[277:52.94] There, uh, it was just a weird one.
[277:55.76] It wasn't about syntax.
[277:57.32] Yeah.
[277:57.54] I thought I posted it.
[277:58.76] It was basically, I was trying to remember, um, someone basically said that user code was the whole cost on your, like framer code doesn't matter for performance.
[278:12.58] user code does.
[278:13.58] And my argument was that basically.
[278:15.84] If the framework helps your user code run less than there's benefit to up, uh, updating the, the framework code.
[278:25.50] Right.
[278:25.90] That's why the react compiler exists.
[278:27.30] Right.
[278:30.54] I mean, there is this, there is this, this thread with Dan trying to look at performance.
[278:36.50] I would happily trade update costs for better knit costs.
[278:39.60] I need to cut down on what each of these things do the first time.
[278:42.00] None of this reactivity signal stuff helps here.
[278:43.80] It's just about moving calculations to interaction time.
[278:46.36] And, um, he's, he's right.
[278:53.60] And he's wrong.
[278:54.48] He's right.
[278:55.12] That purely speaking signals and reactivity don't help initial render where he's not quite right.
[279:03.36] And the reason that we've been smashing at benchmarks, even on creation is that, um, because we know that the update path is separated, isolated, then the creation path can be optimized in isolation.
[279:19.36] The, one of the challenges with reacts, like, um, like, uh, like a game engine render where it just like re-renders the scene graph every time you get a change, re-render it.
[279:30.20] And you know that you're going to get, if, if your game runs at 60 frames per second, your game will always run at 60 frames per second, more or less, because it'll be consistent.
[279:38.92] It like you do, you, you do equal amount of work every frame.
[279:44.14] It's fairly predictable.
[279:45.70] So like you, whether you, there's everything on the screen changes or one thing on the screen changes, you get the same FPS out and you're, you're like consistently where you want to be.
[279:57.48] But if the differences on like a signals based system, obviously, is the updates scale, like one update can be way faster.
[280:07.46] You know, you could be like 10,000 FPS for that or whatever.
[280:10.12] Like, like, obviously your V sync will get in the way of that.
[280:13.78] But what I'm getting at is like, like, there's no, like, there's no ceiling on how fast the, like the update can be.
[280:23.44] Um, but like creation might be lower than that, that 60 FPS because you, you basically did make that trade.
[280:34.62] So in like, in a sense, Dan, Dan's correct, but because you've already extracted that update code, you can focus purely.
[280:41.18] And in the case of the DOM, that meant cloning nodes and removing all the iteration work.
[280:48.62] Like if you've ever seen a hyper, like hyper script, uh, like a V DOM renderer, you're, you're always just iterating over properties.
[280:56.18] Everything's a spread.
[280:57.04] Even if it's not a spread, it's effectively a spread.
[280:59.10] There's like, you have to like iterate through instead of compiling in direct, like this updates, this, this updates, this updates, this, like this kind of switch means that we can clone big chunks of the DOM at once.
[281:13.44] Instead of creating them one by one and actually optimize for creation.
[281:17.60] And this is why, I mean, until blocked on, which also optimizes for creation, the same way that solid does solid was approach was beating both virtual DOM libraries and, uh, on both creation and update, because we were able to optimize both in a way that react could optimize neither.
[281:34.32] So like.
[281:35.62] Conceptually right.
[281:39.68] Except for it assumes a lot, right?
[281:43.44] Um, so like, this is the classic trade-off between updating and it, because yes, it signals are more expensive than not signals, but so conceptually there is a V DOM solution out there that would be faster creation than solid, but react.
[282:06.32] Isn't it right?
[282:07.26] That that's basically it.
[282:09.42] Yeah.
[282:13.44] I'm surprised if they have over signals.
[282:16.92] Yeah, no, I.
[282:17.62] V DOM continued garbage cursor pressure as well.
[282:26.78] You can do component green reactive library without V DOM for saying like blocked on, but the amount reactivates per render is huge.
[282:31.70] Yeah, exactly.
[282:32.18] Yeah.
[282:32.46] Like it was kind of funny for a while there solid was, and this approach was like leading the way.
[282:39.84] Cause it was, it was, it was ahead on both sides, then blocked on came out like million, which took the, the one creation side.
[282:46.42] So technically that's they're, they're ahead in the benchmark slightly because they are faster on creation.
[282:51.40] Um, then, then we are, cause they don't have the signals overhead, but like, that's a whole different category of thing than what like reacts doing.
[283:01.26] So like, I guess there's a theoretical versus in practice thing, but again, maybe we'll find more, you know, optimizations in the future.
[283:11.66] Oh yeah, here it is.
[283:12.54] Does anyone know the source that nonsense about how framework doesn't matter because most code is user code?
[283:16.40] I don't, I don't see how one negates the other framework can optimize running of your user code.
[283:19.60] This is why signals are great.
[283:20.52] Would we act to bother with a compiler otherwise?
[283:22.40] Yeah.
[283:23.18] That was the one I was trying to find.
[283:25.40] Um, right.
[283:27.52] Yeah.
[283:28.80] Yeah.
[283:29.30] Right.
[283:29.80] Yeah.
[283:32.18] Yeah.
[283:32.66] Um, yeah.
[283:36.48] Cause it's crazy.
[283:38.28] Sometimes you like, I got suckered in for the first time in a long time, getting in a Twitter argument over, over, over the sentiment.
[283:45.88] Right.
[283:46.50] Cause it was just, it was just like, you know, when you're arguing against someone who you can tell, they know that they're wrong, but they're just trying to like egg you on and you just keep on like trying to explain it.
[283:56.70] And it's like, no, they understand.
[283:58.64] They're just, they're just a troll.
[284:00.16] I have a hard time with trolls.
[284:01.18] Cause I always feel like it's a teaching moment.
[284:02.86] Um, anyway, let's continue.
[284:08.28] Ooh, yeah.
[284:13.70] I, sorry.
[284:14.42] It's just funny.
[284:15.00] There's a whole thread of, of the, of like react stuff.
[284:18.68] Um, 10 stack start officially in beta.
[284:20.86] That's huge.
[284:21.42] No, there's a difference between people trolling and like stopping writer.
[284:29.52] I, I had like a discussion with someone over like several days that felt like, and you could tell, like they, they, they basically contradicted their whole argument.
[284:37.66] Um, in the first post that it's the react compiler and about how it was on me to prove that those kinds of optimizations were worthwhile, even though they just said they were worthwhile.
[284:48.08] Like, yeah, anyway, but yes, sorry.
[284:54.02] 10, six, artificial beta, which is great.
[284:57.00] It's got a lot more eyes on Vinci.
[284:58.26] Um, Vite six also came out, which I haven't reposted, which is huge with the environment API.
[285:04.52] I've been, I've been very excited for this coming out.
[285:08.16] The biggest challenge actually right now is that we actually can't move fast enough.
[285:12.36] Like I, we did update the solid plugin, Vite six is supported.
[285:15.70] We did update a Vinci.
[285:17.20] There were some bugs.
[285:17.92] I had to roll it back.
[285:18.72] Um, another update to Vinci.
[285:20.46] Hopefully it fixed it, but I'm, I'm moving slower this time.
[285:23.66] Um, but ultimately, uh, this during this update cycle is where the slowdown, like luckily Nitro and Vinci, uh, and Vite were very lockstep for this one.
[285:34.88] Um, but like Vinci's a few steps behind, so it's like, it's taking a bit to kind of move the whole myth.
[285:40.26] But my hope is that the, this pile gets a lot simpler.
[285:43.60] We were forced this direction because the stuff didn't exist with the environment API in Vite.
[285:48.50] It does exist.
[285:49.80] Now the pieces that we needed to make solid start that Nikhil had to hack together, like he was the same guy who hacked together the first RC examples and Vite as well.
[285:59.02] Now we can do it legitimately.
[286:02.10] So I'm actually very excited.
[286:03.40] Um, Tanner's already exploring how he can cut down some of the stuff on the edges.
[286:07.86] I'm not working on start these days, but the efforts are continuing.
[286:11.24] It's going to funnel back into solid start.
[286:12.98] So, um, very excited, um, about seeing he's got like a, a team of a few people working on tan stack start.
[286:21.04] So there's a lot of progress going there.
[286:23.16] Waiting for the Astro mention.
[286:31.18] I haven't played with Astro five yet.
[286:33.36] But you're right.
[286:33.90] Astro five was just released.
[286:35.52] Um, let's see.
[286:38.08] I did see.
[286:38.82] I just, you guys have got to a point.
[286:41.40] I think server islands were like the thing that really excited me.
[286:43.82] And I already did like a bunch of stuff that simplified pre-rendering, better defaults, type, safe environment variables, Vite six, experimental features.
[286:51.00] What are experimental features?
[286:52.06] I like experiments use responsive images.
[286:55.36] SVG.
[286:55.76] Yeah.
[286:55.98] You guys have gone so far along that you have everything now that we're just getting to like the icing on the cake.
[287:01.36] Server islands were huge.
[287:03.70] I think that's a very interesting, I, I love the fact that server islands for the static case are even easier or better than PPR or RCS or stuff.
[287:16.86] Like it's just, it's perfect.
[287:18.18] There is a performance consideration when you, when you're highly dynamic, which would make me go towards RSCs.
[287:24.32] But what you've effectively done, which I like when I look at the spectrum is RSCs are now squished in the middle between server islands, which actually appeal to the vast majority of the people who would care for RSCs.
[287:40.94] And then like the start projects, which are very hydration, aware, server function, granular, you know, single page apps with server rendering where there was a time period where kind of Astro was like islands are very far over.
[287:58.66] And, and, and, um, yeah, like RSCs and next zone of range of where I consider them optimal has just script squished in, um, which really calls into the question, the value of server components, which I think is a very interesting conversation.
[288:16.18] Um, and it makes Astro story finally, as I said, I, on the stream a few months back, it like Jamstack is back.
[288:26.10] Like this is, this is what people envisioned, like the modern Jamstack would be like, this is, this is it.
[288:33.28] I I'm very excited.
[288:34.46] It's never been simpler to, to actually like live out that promise, um, of this like partially dynamic static stuff.
[288:44.72] Um, it just, it's this, like React had a much harder job coming over this way because they're starting way on the right hand side.
[288:55.40] This just dominates the left to the point that it's just like, I don't even care anymore.
[288:59.50] It's like, there's, I'm going to use Astro for like all of the sites, all that stuff.
[289:05.50] And if I'm going to do dynamic, I'm going to do solid start.
[289:07.86] And I really have almost zero care for, for, for, um, next, even, even tan stack start.
[289:14.62] If I really cared to be in react, like those two options, the only place.
[289:19.24] Yeah, I'm actually really having a hard time, uh, figuring where, yeah, no, it's just, this is, this is great.
[289:26.56] Yeah.
[289:30.14] As I said, I don't even know all these other features.
[289:32.92] Um, I don't build fancy content sites, but mechanically all the pieces are there, which is really exciting.
[289:42.54] All right.
[289:43.20] Um, do, do, do, do, do, we're going to talk about that in a minute.
[289:49.54] Yeah.
[289:50.66] Well, let's switch over to solid and get caught up on that or bookmarks.
[289:56.36] Yeah.
[289:56.52] Let's do bookmarks first.
[289:57.46] We talked about buying.
[290:01.54] Um, I was very annoyed today when Google search and see an AI summary claim that 95% of view apps using view two when reality view three usages now over two thirds of the total weekly downloads text a source.
[290:13.06] It's from a very poorly written.
[290:14.38] Sorry, this is so funny.
[290:17.42] I'm barely, a very poorly written reactors of view framework comparison, content marketing article made by some random agency, no source for the data and very well might've been AI generated itself.
[290:28.90] I almost retweeted this one because like the, the AI inception going on right now is just so crazy.
[290:34.50] Like, I know like, uh, like five years back or so there was a bunch of articles that you're like, were these created by AI?
[290:41.62] They're just written so poorly.
[290:43.50] Uh, maybe not five years, like let's say 21, 20, yeah, we're on 21.
[290:47.62] So like three years ago, and now we're getting like better AI content, but it's funny that those garbage articles are fueling into the better AI content.
[290:56.50] Um, like AI in a sense is, is it always out of date because it takes time for popular things to get popular.
[291:05.64] And then by the time those things get popular, like they won't get popular if, if attention is diverted away from them.
[291:13.94] It's like, it's like this terrible self-fulfilling prophecy, you know, it like keeps the, the, yeah, it keeps the, the, yeah, I don't know.
[291:23.38] I don't know.
[291:23.96] This is, we'll see how this works with, I can understand Evan's frustration.
[291:27.86] This is kind of funny.
[291:28.66] It literally got so bad.
[291:37.62] It's just like, it isn't like, it's so hard when you're in the situation where you're like, just to move forward.
[291:43.24] Like, think about it.
[291:44.18] This is like the, do you take the jump question?
[291:47.26] If someone tells you that everyone, no one has moved to view three, then you'll be less incentivized to move, move to view three.
[291:53.74] Right now, even if most people have moved to view three, if you're getting told that it might still delay it.
[292:00.16] Like there's this cascading effect of the proper mentality.
[292:03.30] This is why I started getting really annoyed about the ecosystem argument with solid.
[292:06.98] Like, yes, we obviously have less libraries, but I was getting to a point where like, I was hearing that argument echo chambered every day.
[292:13.76] And it was just like, do I have to just like copy this list and paste it in all these threads that people like, because they'll just repeat it.
[292:20.70] Like, oh, because they'll do the lament, like, oh, I love solid, but the ecosystem, you know?
[292:27.46] And it's like, you know what I mean?
[292:30.40] Like, is, yeah, it's a, it's a game.
[292:33.80] And I think AI is like the ultimate echo chamber.
[292:36.80] So it's kind of funny.
[292:37.80] Yeah, I know.
[292:43.44] It's, yeah, yeah.
[292:44.56] Yeah.
[292:46.04] What he's talking about is that Gemini now highlights, like when you do a Google search, you'll see the Gemini results.
[292:50.48] Anyway.
[292:56.42] Do, do, do, do, do, do, do, do.
[292:58.02] What else is here?
[292:58.60] Oh, yeah.
[292:58.86] This is funny.
[293:03.36] I, I, I thought I had a good result thing.
[293:05.68] He was complaining that, that this was longer than this.
[293:09.52] And the, if you've ever seen solid JS code, um, I do a lot of this because I chain with a single constant.
[293:22.18] Actually, your minifier will chain off a multiple const too, automatically.
[293:26.18] So technically, if you have like five functions that go const foo equals const foo, it will actually slightly be shorter than five of these.
[293:35.02] So, I mean, I don't think anyone should be worrying about it.
[293:39.78] But it, it is kind of funny.
[293:41.22] I, I, but then when you get to, uh, what do you call it?
[293:46.14] When you get to, uh, uh, g-zipping, I actually think that the function keyword repetition actually might swing it back the other way.
[293:54.38] But, but I, I, I don't, I don't know if this is worth talking about either way.
[294:02.28] I guess the question is, are, is it less or more typing?
[294:06.16] And I think mostly TypeScript is the reason people do this because they like being able to go like colon type rather than typing the props or, yeah.
[294:14.84] Anyways.
[294:19.30] Yeah, uh, I, I bookmarked this one.
[294:21.90] I know React 19 is out now, but the RC, they, for like, we fixed the, the suspense gate, you know?
[294:28.58] So very, very cool work they did.
[294:31.70] It's always interesting when you hear more on the stories about this stuff because usually it involves like thinking outside the box.
[294:40.06] You know what I mean?
[294:40.74] Like clever solutions, like slightly change the expectation.
[294:44.16] You, you, usually there's constraints that don't let you just fix it.
[294:47.54] You try and fix it for everyone, but it's not always possible.
[294:50.32] So there's probably something, um, interesting on how they came to that solution.
[294:54.94] But I, I'm, I'm, I'm not, I'm not into the internal story.
[294:58.32] I don't think GitHub issue actually says anything.
[295:00.08] Pre-warming.
[295:02.18] Hmm.
[295:04.58] I mean, this is the same reason why we eagerly schedule create async calls.
[295:08.78] So, yeah, I mean, it makes a lot of sense.
[295:11.28] Oh, React 19 is out.
[295:15.94] So that's, that's good.
[295:16.76] Okay.
[295:17.00] Done.
[295:17.44] Uh, caught up on bookmarks.
[295:19.36] Let's talk about, uh, hackathon then for a little bit here.
[295:25.22] Um, we've had a lot of winners because we did a lot of, uh, of these, uh, challenges that have been very exciting because, um,
[295:34.62] it kept things going throughout the whole thing.
[295:38.78] Uh, we got a whole bunch of new components into, uh, into, um, what do you call it?
[295:46.06] Uh, I think, yeah, this was the first one, right?
[295:51.08] Um, into the, to, uh, cobalt, especially, um, what we got here and we got new user guides that are great.
[295:59.18] Like, or J dev, um, H salim contribute, keep color area, color slider, color channel and color swatch for cobalt.
[296:06.60] Um, so they won like, like $1,000 prizes for these contributions.
[296:10.32] Um, what was another one?
[296:12.34] Uh, uh, Manglin for UI library trends, they contribute a combo box to cobalt.
[296:19.68] Um, what else did we get?
[296:23.14] There's, there's been a lot of these, it's like local first competition.
[296:28.54] Um, which was, what did we get here?
[296:32.78] It's some library challenge rating group.
[296:35.12] Huh?
[296:35.76] Got in there twice.
[296:36.80] Paul Roque local first challenge solid wire.
[296:40.36] I don't know if you saw this, this was actually kind of cool.
[296:42.14] Um, but yeah, it was, uh, you had it all working with suspense and async.
[296:54.16] Yeah.
[296:54.46] Do, do, do, do, do, create async.
[296:58.22] Yeah.
[297:00.58] Store use.
[297:01.30] And then basically taps into the sync engine, the local PB, but yeah, I, as I said, I wasn't
[297:09.16] very involved with the, the judging, but it was, or the, the voting or much of the things
[297:16.72] I occasionally got asked on which challenges would be interesting.
[297:19.80] But I, I just like, look at this read me is better than the read me I wrote when I first
[297:25.50] released solid, like people put work in and they created good things like quality things.
[297:32.70] I'm, I'm, I'm pretty, I'm pretty stoked on, on the, on the, on the activity on this stuff.
[297:37.30] Um, yeah.
[297:39.16] Um, and again, I love seeing cobalt just get more and more components.
[297:45.68] Um, just killing it on cobalt.
[297:51.18] H salim got like $3,000.
[297:54.04] It looks like, um, winning animation library.
[297:58.36] Ooh, I've been, this is something that I've been wanting to see.
[298:02.30] Highly reactive signals library for solid signal-based, permanent, render agnostic, 3DS scenes.
[298:07.04] Very cool.
[298:09.70] And there's a doc site too.
[298:10.70] See people, people.
[298:11.68] Yeah.
[298:15.92] I love this, like any render that solid can control.
[298:22.44] 3DS.
[298:23.44] So yeah.
[298:24.44] Custom renders.
[298:25.44] Dom.
[298:25.94] Yeah, this is, this is cool.
[298:27.94] This is the kind of fundamental pieces.
[298:29.44] I know there's other animation stuff, but just having a choice out there.
[298:33.16] This is definitely added to my list now.
[298:35.02] Very, very cool.
[298:36.06] Um.
[298:38.22] AI SDK solid.
[298:45.96] There was something that I saw that was like, looked really, really impressive.
[298:50.52] Um, I, I don't know if I reposted it because I was worried about being biased from the solid
[298:56.46] account, but there's this native script, uh, thing with, and I was like, oh crap.
[299:02.68] I didn't realize this was an entry in the thing yet here.
[299:05.54] Solid desktop.
[299:06.68] Did you guys, you guys see this?
[299:08.06] I might've shown this last stream, but it was like, it, it looked so cool.
[299:12.92] Um, doing, doing, um, native script iOS development with solid and reactivity.
[299:20.16] Um, honestly.
[299:21.56] I, yeah, do do single sign on until it's been making some great off videos.
[299:30.72] Um, let's see here.
[299:33.68] Yeah.
[299:34.12] And then finally, uh, the, the, the grand prizes, the best solid app went to Gipheum by CM
[299:40.30] Griffin and then this ecosystem tool with the solid socket, which we, um, which we, uh,
[299:47.34] covered today in stream with dev.
[299:48.72] Uh, it was completely by votes.
[299:50.24] There was no like judging community.
[299:52.08] It was completely by votes.
[299:53.18] And, uh, I think David might've written it, but there was some seconds and thirds that were
[300:01.92] posted on the discord.
[300:03.12] Um, yeah, here they, uh, best app, uh, CM Griffin, uh, another streamer, um, that we've rated
[300:16.78] a couple of times.
[300:17.46] It was an honor mentioned, uh, data on a replayed and then, uh, solid socket came first and then
[300:24.06] solid base.
[300:24.78] And then solid desktop, um, that I showed from the team.
[300:28.02] Um, David has a whole spreadsheet with all the exact numbers.
[300:32.10] Um, I saw it once, but I don't have them on the top of my head.
[300:35.10] I think in terms of unique votes, I think there, there was, there wasn't a super a lot.
[300:41.94] Uh, I think there was over 600 and some odd.
[300:44.06] I think, I think we were, uh, what's the seminar there's, there was under a thousand unique
[300:49.30] GitHub votes, but I know that much, but, uh, there, there's a, there was a decent pool of
[300:55.34] people, um, who voted on the projects and a lot of really good work done.
[300:59.82] So it's very, very cool to see.
[301:01.14] Uh, okay.
[301:03.26] And I jumped too far.
[301:11.66] Oh, there we are.
[301:17.06] Yeah.
[301:23.30] Um, if you didn't see Gipham is very cool.
[301:26.30] Um, it, it lets it, it does like an interactive diff so you can like show two bits of code.
[301:33.02] So it's like showing, and then it will, it will animate between it.
[301:40.22] It'll like try and match words or symbols and animate between the two.
[301:43.74] I think one of the funniest and coolest uses of this was that Mark Marco, because I, I, the
[301:50.38] reason I love this is because it's, it's very common that I say that typing doesn't matter
[301:55.26] that much.
[301:55.58] It's a conceptual idea and like, you know, the whole, like, uh, uh, I, I, I almost remade the
[302:00.70] Svelte meme between, uh, react and, uh, like the, you know, the Svelte, like let count example
[302:07.38] here, because if you actually did it with Svelte versus react, it's almost the exact same as this
[302:14.06] example here, like, it's like, yeah, you typed some less characters.
[302:18.70] In fact, in Svelte, there'd be a script tag around this, I believe, but like conceptually it's,
[302:25.34] it's the same number of, of lines.
[302:29.18] You didn't actually simplify anything conceptually, but again, this is a great showcase of how Marco
[302:33.98] has the slimmest syntax.
[302:36.06] Um, it, there is nothing that lets you write less code than Marco.
[302:40.78] So if that's important to you, um, Marco is the framework for you.
[302:50.78] Um, anyway, do, do, do, do, do, do, I'm caught up.
[302:55.50] Yeah.
[302:57.90] This month and solid we're caught up.
[302:59.82] We're caught up.
[303:01.50] So that is everything.
[303:02.94] I am done.
[303:03.66] You're right.
[303:04.14] What's dinner today.
[303:05.82] I'm actually, um, going out for dinner, uh, with my wife.
[303:11.18] Um, my daughter has a dress rehearsal for her ballet.
[303:15.66] So we're already going to be downtown.
[303:17.18] So I thought we would just go out while she was doing her dress rehearsal.
[303:22.94] She's in the nutcracker.
[303:24.06] Um, so yeah, no, no, no sushi or, uh, pizza, I guess.
[303:30.38] So anyway, yeah.
[303:33.50] And today's 13th.
[303:35.10] I'm probably not going to stream next week.
[303:36.62] We'll see.
[303:37.10] So quite likely this will be my last stream till the new year.
[303:40.78] I've got some time off and whatnot ahead of me.
[303:45.34] So, so yeah, no, uh, you all have a great, um, weekend and until next time, see ya.
