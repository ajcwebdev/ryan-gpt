---
showLink: "https://www.youtube.com/watch?v=kkUuaqDBSqA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Fine-Grained Rendering in Depth"
description: ""
publishDate: "2025-01-25"
coverImage: "https://i.ytimg.com/vi/kkUuaqDBSqA/sddefault.jpg?v=6792d47e"
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
[00:00.72] All right.
[00:01.74] How's everyone doing today?
[00:06.20] Welcome to the stream.
[00:10.50] Today's going to be fun.
[00:19.54] This is going to be a stream where the content could probably do a front-end Masters, I think.
[00:25.16] It's going to be a lot of teaching.
[00:26.38] But I've never done this content before.
[00:30.54] So this is more of going to be a bit of a trial run comparatively.
[00:35.08] I probably should have prepared more.
[00:37.72] But I always start explaining signals and reactive rendering.
[00:45.06] And then I stop because that's when stuff gets difficult.
[00:48.46] And today I want to look at the difficult parts.
[00:51.36] It's quite hot in Cali.
[00:55.80] Yeah.
[00:56.02] Yeah.
[00:56.78] Nice warm January day in California.
[01:00.46] Yeah.
[01:02.60] How's it going?
[01:03.12] Okay.
[01:06.36] Yeah.
[01:07.04] Well, I had an idea.
[01:10.58] We'll see what you all think about this.
[01:12.44] But I thought it would be fun before we got even into the whole, like, what is fine-grained rendering, how it works, is to get a perception with chat and you all of what rendering is or rendering performance in the browser even looks like.
[01:33.36] And for that reason, we're actually going to play a little game today.
[01:36.30] We're going to make a tier list.
[01:37.92] I've never made a tier list before.
[01:41.20] But we're going to make a tier list.
[01:43.20] A JavaScript framework or library client performance tier list.
[01:51.92] So, if that's something of interest to you, you should definitely check it out.
[01:58.46] Help me build this list.
[02:01.20] Obviously, these opinions ultimately will be mine from my experience of benchmarking.
[02:08.08] So, obviously, they are completely 100% correct.
[02:10.60] And if you disagree with me, you don't know what you're talking about.
[02:13.48] No, obviously, there's going to be some disagreement, some differences.
[02:22.78] I don't think my placement will be off by more than one place, but I think it would be fun to build a tier list.
[02:30.92] So, I'm actually going to pop blue sky, let people know that we're live.
[02:35.86] And I think we're already streaming live from X, so that makes things a lot easier.
[02:52.78] Where are we going to be?
[03:01.58] I'm going to say Twitch TV.
[03:02.74] Sorry, I know I'm not sharing my screen right now.
[03:04.76] It's been a while since I've actually...
[03:10.48] Yeah, so we've got some people coming in.
[03:16.94] I'm glad you all could join me.
[03:20.72] Will we be looking at...
[03:21.68] I will look at some unreleased ones too, but I don't know if I can put Marcos 6 on.
[03:26.12] They're still under the...
[03:28.44] I don't know what you want to call it.
[03:31.12] I don't want to call it a ban, but...
[03:34.68] Sanctioned?
[03:35.44] Marcos 6 is sanctioned?
[03:37.56] I want to make sure I actually have my...
[03:42.56] Oh, no, okay.
[03:47.86] So, RyanSolid9 is actually my YouTube, I think.
[03:50.74] I think I actually have RyanSolid on Twitch.
[03:52.78] I can never remember this stuff.
[03:56.00] Beautiful.
[03:57.18] Okay.
[03:57.60] And actually, we're going to include Rust frameworks too.
[04:05.38] So, let's make this front-end client performance tier list.
[04:09.44] I'm trying my best, okay?
[04:24.14] All right, all right, all right.
[04:25.60] Let's see here.
[04:29.06] Let's get the screen going.
[04:32.80] All right.
[04:40.12] Sweet.
[04:41.38] Got the retweet on BlueSky.
[04:47.52] But yeah, look, I've already gone through all the effort of finding the logos to basically every JavaScript library or whatever.
[04:58.94] And the reason I'm doing this is because it's going to be a very illustrative way of, I think, of showing that while different render techniques matter, different elements actually end up impacting these things a little bit.
[05:22.76] So, it's not like just a one-for-one, certain things might over-promise, under-promise, but I'm looking here at purely client-side rendering what, you know, so I'm not focusing on primary backend frame, which you won't find a Next.js on here.
[05:39.68] And I'm looking at declarative libraries.
[05:42.00] jQuery just doesn't make sense because it's like Vanilla.js.
[05:48.16] Like, there's no, like, you can write it as infinitely.
[05:50.74] If you want to know Vanilla.js is god tier, it's above S tier.
[05:54.04] It's not even on here, but I mean, yeah.
[05:59.62] So, like, yeah, jQuery is god tier as well from that perspective, right?
[06:06.76] So, we're just, we just had some fun here because I actually laid them out in the order that they were released.
[06:19.56] Would you believe it that the very first declarative JavaScript framework that was released, not the most first to get popular, but released by date was actually my buddy here, the Big K Knockout.js.
[06:32.76] So, at least in my knowledge of JS frameworks, I did not, I'm not aware of some, these are just all the ones that I am aware of, roughly on dates, right?
[06:45.08] Brendan made JavaScript and then jQuery made the world.
[06:49.48] Yes, yeah, it's like the, kind of, you're for the history lesson.
[06:55.62] Yeah, I mean, there's some, there's a bit of history lesson because this lets me tell the history a little bit too.
[06:59.60] So, I was thinking I'd just go in order, right?
[07:04.34] Right from start to beginning.
[07:05.82] But the truth of the matter is I realized as I kind of sat and looked at this list that there are definite anchor points, right?
[07:15.28] And almost this whole chart has to be anchored around the most successful, most popular, most known JavaScript frameworks.
[07:22.82] Otherwise, you guys watching won't have a state of reference to understand what we're talking about.
[07:26.90] Yeah, there's three views.
[07:29.30] If you see multiple logos, it's because I intend, there's three svelts as well.
[07:34.56] There are some frameworks that have actually made significant differences on specific releases, enough that I'm going to call out, but like most of them kind of sit in the same zone over and over and over again, mostly.
[07:53.28] So, actually, yeah, I mean, let's start with React because React is the, it's the thing that everyone probably has experience with that they can put on a state of reference.
[08:05.02] Where should I put React?
[08:10.68] What do you guys think?
[08:13.08] I have an idea where I should put React, but I want, I want chat to help me out here.
[08:20.78] Anyone, anyone guessing where I'm going to put React?
[08:23.26] All right, we got an E, come on, chat, I need some participation.
[08:27.80] An F, F, we got C.
[08:30.64] ReactScan, I think it says it all, C, C or D, C, yeah, okay, B, C right in the middle, C or B.
[08:42.64] Yeah, and you're correct, actually.
[08:48.60] Quick, I have, I'm going to be as fair to Quick as I could possibly be, but if you go check the benchmarks, like the last couple months, Quick has, for some reason, fallen off the deep end.
[09:01.20] I'm going to assume that's temporary and that they'll get themselves in order, but there are, I'm going to look, I'm going to try and look at frameworks in their largest historical context, but judge them as harshly by the criteria that we have today.
[09:15.84] D, C, D, yeah, B, C, yeah, so all over the place, right?
[09:19.60] This is why we have to start with React, because without React, we don't have, we don't have a frame of reference.
[09:24.22] So for me, React is a solid D tier.
[09:28.94] I think, I think, I think it is basically, it's not the worst we've seen, it's not, it's far from the best.
[09:37.54] It's still considered a passing grade, but barely.
[09:49.86] Yeah, we are talking purely about front-end render performance.
[09:55.84] I think that's a fair assessment.
[10:08.80] Quick, though, if you go on the benchmarks right now, is like an F.
[10:13.26] I don't know what happened, but we'll get there.
[10:16.58] A, vanilla, B, solids, so.
[10:23.72] Okay, so you're just doing the whole chart for me right out.
[10:27.28] All right, let's keep on going.
[10:30.44] Okay, so now we have our frame of reference.
[10:32.62] All right.
[10:34.90] Let's go back to the beginning.
[10:36.06] Where should we put KnockoutJS?
[10:40.14] If React is a D, where should we put KnockoutJS?
[10:44.34] The first declarative JavaScript framework.
[10:46.46] Used signals back in the day.
[10:48.58] Because I'm a stickler to performance, surprise, surprise, surprise, I see some Bs going in there, Bs, Bs.
[10:56.74] Knockout's actually an E.
[11:00.92] I get why you guys see, when it came to updating very specific parts of the DOM, Knockout to this day still runs circles around React.
[11:09.28] The problem with Knockout, though, was you had to create the page.
[11:13.90] You had to actually render the stuff initially.
[11:16.62] And Knockout would go through your HTML templates and find all the data, bind things, and then reprocess it, making it actually incredibly slow to render.
[11:29.58] So, even though it could update, like, the specific text on your page way faster than React, and still does, it generally was slow.
[11:41.44] You go one page to the next page, and you're actually, it's slower than React.
[11:45.22] Right?
[11:47.02] Do you guys recognize this logo?
[11:55.62] Before you can bake a Knockout app, you have to create the universe.
[11:58.44] Right?
[11:59.92] Knockout?
[12:01.12] No.
[12:02.08] Knockout was a fine-grained renderer, actually.
[12:05.74] This is actually why I'm doing this chart.
[12:08.22] Knockout, the very first framework, was a fine-grained renderer.
[12:12.42] It has, it doesn't just have signals.
[12:16.98] It has what I call, what we're going to define as fine-grained rendering.
[12:20.14] It was the first fine-grained rendering framework.
[12:22.38] It was the first, one of the first, possibly the first declarative framework, but it was, it actually was a fine-grained renderer, and it had signals.
[12:32.08] It just was so bad at actually rendering the HTML, like, that, like, Knockout was smart.
[12:41.00] If you changed a control flow, it didn't re-execute the whole tree, it did partial, like, it had all the aspects of, of, of fine-grained.
[12:50.20] In fact, Solid's original control flow, I learned how to write Solid control flow by looking at Knockout's internals.
[12:56.08] Knockout had pinpoint updates and modern fine-grained control flow, so it was a fine-grained renderer.
[13:03.76] It just was bad at rendering.
[13:05.52] Yeah, so let's go, Backbone.
[13:13.64] Backbone is a tricky one.
[13:18.08] Backbone, as described, would re-render the whole, like, people would use Backbone, and then they put, like, almost like jQuery-type enhancements.
[13:33.92] If I used pure Backbone and had it re-do the templates, the thing you have to understand is, this is all pre-virtual DOM.
[13:42.84] So, like, Knockout said, hey, put a bunch of, you know, observable signals in there and update little things.
[13:50.82] Backbone was, like, we have models, and then we re-validate views, which means completely recreate them from scratch.
[13:56.50] Yeah, it's hard, because part of me says that Backbone should be, like, E.
[14:02.88] I don't know if there's actually a considerable difference between Backbone and Knockout.
[14:08.90] It's on the fence.
[14:11.42] I'd say it's below Knockout, but is it an F tier?
[14:13.68] I, thinking of the benchmarks at the time, like, the spinning circles and stuff, Backbone was actually fairly good on updates.
[14:23.00] I think that's going to put in the same category as Knockout.
[14:27.34] This one's controversial, but let's keep Backbone with Knockout.
[14:32.88] These are all client-side frameworks that basically all do the exact same thing.
[14:42.16] They are literally there to update, create apps and update.
[14:45.52] This is not, like, something you choose because of a use case.
[14:48.52] These are almost all completely equivalent.
[14:50.86] They have special defining features, but they're all almost equivalent.
[14:57.28] And we are considering legacy here because we are starting historically, right?
[15:02.52] I haven't caught up to React yet.
[15:03.72] AngularJS.
[15:06.04] AngularJS, like Angular 1, is a tricky one.
[15:19.28] It, it, it actually, and because of Benchmark of Time, look at HypeJS, React 14, or whatever.
[15:28.84] It's actually, I'd say on average, ahead of Knockout, but below React, which sticks it solidly in an E tier for me.
[15:39.14] It's close to D, but, but, like, for me, from performance and stuff, Angular 1 was never, like, it was dirty checking.
[15:54.98] In a sense, you can say that Angular 1 was the first block DOM approach.
[16:00.72] We'll get to that later, but it was a dirty checking system that did a lot of unnecessary cycles and re-rendering, and those things cost more.
[16:11.00] And the last one that, that I'm going to talk about that came out before React is Ember.
[16:15.90] Ember was like Knockout.
[16:19.04] It had, originally, Ember's Overtime has evolved.
[16:23.36] I probably should have more Ember on here.
[16:25.34] The only reason I won't have more Ember on here, because the newer versions of Ember did not actually ever change its performance profile.
[16:31.70] Ember, to this day, still is in the same place, even though it's completely been re-ridden in new engines and Glimmer and all this kind of stuff.
[16:39.48] Unfortunately for Ember, not everybody can be a winner.
[16:43.94] From a performance standpoint, Ember had great features.
[16:48.62] I was an Ember developer.
[16:49.96] I was a Knockout, an Ember developer.
[16:52.06] Brian Florence was an Ember developer.
[16:55.34] But, like, it was, it was basically just slower at everything.
[17:02.16] Like, even this, even though it used reactivity to do, like, some kind of fine-grained stuff, it was still even slower doing that reactivity.
[17:08.98] And then they replaced their engine with almost something like a VDOM, and it was still the slowest VDOM.
[17:13.44] And then, basically, every historical line of the way, Ember has always been pretty slow.
[17:19.64] Don't get me wrong, there are frameworks on this list that are slower than Ember, and we'll get to them.
[17:26.08] But this is, this is what the first four years, three to four years looked like.
[17:31.14] There was more frameworks, but you guys wouldn't have heard of them.
[17:32.94] I tried to pick frameworks that have, like, over 10,000 stars today.
[17:35.78] There's a few exceptions, but they're ones that possibly you could have heard of.
[17:44.48] Yeah, bottom of the E tier.
[17:46.20] I'm going to give it an F, though, because it's, yeah.
[17:50.50] Yeah.
[17:52.96] This is maybe a good sign that performance doesn't matter.
[17:55.76] But what I want to say is, show you is, look, now we're, this is up to 2014.
[18:01.08] We're, we're sitting at 2014 right now.
[18:03.14] React looks pretty sweet here in 2014.
[18:13.14] You're reserving F for Blazor.
[18:20.68] I mean, that's fair, too.
[18:21.60] But yeah.
[18:23.68] But yeah, just, we talked a little bit about each one.
[18:27.38] React, the first virtual DOM library comes out at this point, and it is significantly better,
[18:33.24] a whole category better than every other library that came out at its time.
[18:37.54] It was not the first declarative thing.
[18:39.82] It wasn't the first, like, I'm just a view.
[18:41.54] Knockout was actually, has the exact same advertisement, you know, but it was significantly better than
[18:50.16] everything up to this point.
[18:51.92] Right?
[18:52.62] We can't do jQuery because it's not declarative.
[18:55.80] That was one of the things I said right off the bat.
[18:57.52] It's God tier.
[19:00.26] jQuery became vanilla JS.
[19:02.38] You can write the most optimal code possible with jQuery.
[19:05.18] It's basically S+, but it's off the top of the screen.
[19:10.96] I almost have to put it on just so people are like, where's jQuery?
[19:14.58] And be like, you know, up here somewhere.
[19:16.50] Because you're right.
[19:20.52] As people join on the screen, they're going to be like, where is it?
[19:22.68] Okay.
[19:23.26] This R.
[19:25.20] I just included this one because I needed something else also from that time period, 2013, 14 time period.
[19:31.02] This is Ractive.
[19:31.96] This is Rich Harris's originally reactive framework.
[19:35.88] It was used git.set and set for its, like, signals implementation.
[19:41.68] It's very early work in him making kind of like a knockout-esque framework.
[19:47.38] And in so, it is also pretty solidly E tier.
[19:51.48] But just wanted to give a quick shout out there because Rich Harris was already there pre his Svelte days.
[19:58.34] Awesome.
[20:02.04] Great to see you.
[20:02.86] Right.
[20:05.88] Blazor deserves its own category because they're so mean.
[20:08.52] Yeah.
[20:12.70] React is still, you know, like, now we're getting into 2014.
[20:16.88] What else came out in 2014?
[20:18.54] Marco.
[20:18.96] Marco.
[20:20.92] Actually, and I don't know the 2014 accounts.
[20:25.68] They're primarily a server-based framework, right?
[20:27.80] They invented islands, out-of-order streaming, basically suspense.
[20:33.84] By 2015, they had all the features that we, you know, we talk about these days.
[20:38.46] But we're talking about client-side rendering.
[20:40.60] So Marco, surprisingly, I don't know if you guys know where Marco goes.
[20:47.40] Where do you, where do you, I see some S's and A's in there.
[20:52.12] I don't want to, I don't want to disappoint you all, but Marco is not, for client-side rendering
[20:59.38] thing, Marco is actually, I'm going to put a D.
[21:03.48] These days, I think it's kind of slid to an E, but it's always been very close to where React
[21:11.16] is, yeah, yeah, yeah.
[21:16.22] So, after React, we're starting to see other frameworks kind of come in and go, oh, I can
[21:25.44] do what React does.
[21:26.56] Marco, in version 3, I think I want to say around 2016, introduced its own virtual DOM.
[21:37.92] And, you know, pushed it a little bit more, but that's, we're not there yet.
[21:42.30] I'm basically going to put Marco around here.
[21:44.66] All right.
[21:47.60] Now we got view, and I'm going to count this category as view 1 and view 2.
[21:52.20] I know there was improvements over it, but, yeah, we're now getting into 2015 now, right?
[21:59.74] Okay.
[22:00.82] Yeah.
[22:04.44] So view 1, view 2.
[22:11.28] is actually an interesting one.
[22:13.58] You're guessing B tier?
[22:15.76] That's not a bad guess.
[22:17.42] Not a bad guess.
[22:20.28] C, I think.
[22:21.00] D tier, maybe C.
[22:21.92] Yeah.
[22:22.26] Yeah.
[22:25.42] View.
[22:25.82] I'm going to give it our first C tier.
[22:28.78] It, I don't know what about it.
[22:33.74] I think it was a slightly faster virtual DOM.
[22:36.20] They had, uh, signals under the hood to kind of make its re-rendering process a little bit better.
[22:43.30] But generally, if I go back as far as I can, view has been basically just a, a, a, a, a category above.
[22:53.66] React view always underrated.
[22:55.28] Yes.
[22:56.18] I want, I did say, talk about view being underrated, being a topic of the stream.
[23:01.40] This is also the last time that view is ever going to be ahead of anything for the, for the rest of this.
[23:07.52] Um, but view initially was very, um, you know, did, did make a big impact.
[23:16.38] Yeah.
[23:18.28] Getters and setters for data.
[23:23.66] You're getting ahead, but we'll, we'll see.
[23:30.84] Right.
[23:32.46] So view is, view is pretty good.
[23:33.98] Um, but view was not the only one around that time, single file components started showing up.
[23:38.48] We had things like riot.
[23:39.80] I don't know if anyone's familiar with riot.
[23:41.80] Imagine not, but I'll help you out.
[23:43.38] Riot is also a C.
[23:46.24] Um, it, you like view.
[23:52.90] These, these are new VDOM libraries that used signals essentially, or under the hood, some reactivity to trigger their VDOM.
[24:08.58] And what else we're still in this, like 2015, heading into 16 period.
[24:12.72] You guys might not know this one, mithril.
[24:15.60] This one was like a faster, pure functional approach to the VDOM.
[24:19.76] I'm also going to put that as a C.
[24:21.08] Um, basically people saw react and they're like, we can do better.
[24:26.52] Right.
[24:32.60] And they, they did honestly, um, the, the, as, as, as time kind of went on, we start seeing things fill in.
[24:42.88] I, I, yeah, I mean, I'm not actually sure.
[24:50.02] I guess it's still going.
[24:51.12] I haven't heard people talk about it as much, but there was definitely a contingent of people who tried to come over to S, uh, solid because of the, like the optional.
[24:58.18] And they're trying to use like the JSX without the compiler from the mithril community.
[25:05.02] Mithril community is a special one because they cared a lot about performance and functional purity.
[25:10.74] So they, like, at this time, the react core devs had this like real functional push kind of core, like, but like, yeah, I don't know.
[25:23.12] Um, where's Aurelia?
[25:26.52] Yeah.
[25:26.90] I don't have Aurelia to be fair.
[25:29.84] I, and I just realized I don't have Elm either.
[25:33.10] Um, I, I, I really showed up around this time period too.
[25:39.66] The, the tricky part is it, it didn't, I guess it has gotten over the 11k, um, stars, so to speak.
[25:50.56] Um, yeah, I, I don't know as much about it.
[25:55.88] Let's, let's see.
[25:56.48] I, Elm logo.
[25:57.88] I feel like we should get Elm in here.
[25:59.42] Um, cause we, because this is kind of like one.
[26:03.04] one of the first, um, uh, what should I call it?
[26:07.54] Let's see.
[26:08.14] Yeah.
[26:14.16] This is one of the first, um, like compiled to JavaScript framework pieces.
[26:22.04] So let's get Elm in here.
[26:28.56] Cause Elm, yeah.
[26:33.06] Okay.
[26:33.36] I got to think about Elm for a second.
[26:34.66] Cause I haven't really thought about Elm very much, much, um, for a while.
[26:42.84] Um, well, do, do, do, do, do.
[26:45.80] It's tricky.
[26:46.56] Cause Elm is, might be, uh, it's hard.
[26:54.06] It's, it's, it's either C or it's, yeah.
[26:58.98] I'm, I'm trying to think of, cause like I know off hand where Elm sits these days, right?
[27:05.34] It's kind of a, uh, it's kind of a C maybe, but I feel like historically it might've been more of a B.
[27:14.08] So it's like, oh, it's, it's tricky.
[27:19.08] Let me, let me, I'm, I'm actually going to pull up an old GS framework benchmark with Elm back in the day, just to kind of get my bearings here.
[27:29.42] Yeah, let's, let's look at this Elm, cause like, okay, Mithril 122, view 2, 115, uh, yeah, Elm is 1.34, Ember is 2.14, just to give you, say, I don't know why Mithril's slow on this one.
[27:53.34] This is pre-release, yeah, Mithril's like 1.22 there, okay, yeah, okay, that's good enough for me.
[27:57.70] I'm going to put Elm as a solid C, okay, so there we go.
[28:02.50] We got Elm in here, you, you're starting to see a trend, right?
[28:06.20] Um, yeah, I'm not sure if Leo is, Leo is great, by the way.
[28:15.02] I just, especially early on, there's sometimes different framework authors help other framework authors when they get started and other ones, you know, are just busy doing their own thing.
[28:27.68] which is perfectly fine.
[28:28.68] Uh, Leo was always very supportive of my work in solid and I sometimes think, uh, part of that, you know, might've inspired me to, you know, help others.
[28:38.68] Okay, so let's, let's keep on going.
[28:47.68] It was a VDOM like React.
[28:48.68] But again, what we're seeing here is a bunch of VDOM libraries that are slightly improved over React.
[29:02.68] So, the next one on here is important.
[29:04.68] This one, honestly, I think is going to be the most controversial placement for me.
[29:09.68] Where does Inferno go?
[29:12.68] Because there's clearly a trend.
[29:13.68] You're seeing how we're kind of building up.
[29:15.68] We started in E, React showed us that D was possible.
[29:19.68] And then, you know, Marco came in and then a bunch of these guys improved.
[29:23.68] And then, out of left field, we get Inferno.
[29:26.68] And Inferno, if you go look up tests and stuff today, it's probably verging S tier.
[29:34.68] But, the thing is, the funniest thing about Inferno is, about two years ago, something changed in the browsers and Inferno suddenly got faster without the code changing.
[29:45.68] So, like, it's like, should have it always been faster?
[29:48.68] Most of Inferno's life, it's been a solid, sorry, a solid A tier.
[29:57.68] Oh, why can't I drag anymore?
[29:59.68] So, I'm gonna, I'm gonna put it here for now.
[30:02.68] It's questionable.
[30:04.68] But, but, it's, it's, it's, it was the first framework that was like, like, it just skipped the category.
[30:14.68] There was no B frameworks.
[30:15.68] Things that people are just kind of creeping past React and C, and Inferno's like, yeah, yeah, you guys.
[30:19.68] This space is a lot bigger than you thought.
[30:22.68] Like, when React came out, people were like, oh, we've probably hit web rendering performance pinnacle, you know.
[30:28.68] And Inferno was like, you guys aren't even halfway there.
[30:31.68] It's, what's questionable is whether Inferno should be S tier.
[30:36.68] Yeah.
[30:37.68] Power static analysis in JSX.
[30:40.68] Dominic Ganaway, way ahead of time in its approaches in terms of optimizing.
[30:44.68] He took something that looked like React and made it way faster by clever engine level optimizations and using static analysis on JSX.
[30:59.68] Which would later lead him to get hired at Facebook to work on pre-packed for the React core team.
[31:06.68] And his compiler skills come up again because he was also the lead on Svelte 5.
[31:12.68] So this is, this is, I already mentioned where Rich Harris kind of jumped in the game back with reactive.
[31:18.68] But Dominic made quite the debut.
[31:22.68] One of my favorite people.
[31:23.68] One of my favorite people.
[31:24.68] We did a stream with him about a year and a half ago.
[31:29.68] You should check it out.
[31:31.68] Dominic.
[31:32.68] I'm actually going to pull this off YouTube so that we can actually, I can share it with you.
[31:37.68] Dominic is a wizard.
[31:38.68] So, which is coincidentally the, the stream cover here.
[31:45.68] Let me see if I can share it.
[31:46.68] Yeah.
[31:47.68] Got it.
[31:48.68] I think I'm going to keep part of that stream around because I, he has a best quote that's going to be relevant for the stream.
[32:02.68] Yeah.
[32:03.68] He worked on lexical at Facebook as well.
[32:05.68] Um, kind of the react core team.
[32:08.68] He, the tricky, the tricky part with the compiler analysis is you need to set some certain boundaries or rules or constraints around it.
[32:17.68] And the react core team with the concurrent model wanted to go a different way.
[32:21.68] So basically they weren't able to apply his optimizations and he found himself kind of sitting on the react team and being like, how do I fit in?
[32:30.68] He, the projects are the interest stuff that they hired him for, you know, cause like he basically blew everyone away with inferno.
[32:36.68] He found himself like not being able to actually.
[32:38.68] Work on react moving forward.
[32:40.68] So we picked another incredibly difficult problem, which is getting high performance in text editors along with accessibility.
[32:48.68] So there we go.
[32:52.68] We got inferno.
[32:54.68] All right.
[32:55.68] Next is preact.
[32:56.68] Where, where do we think preact come up?
[32:59.68] Those two came up.
[33:00.68] I would almost, uh, I think a month or two apart from each other.
[33:03.68] We're right at the end of 2015 right now.
[33:06.68] No, I will not be placing vanilla JS or jQuery.
[33:12.68] They're God tier.
[33:13.68] They, they, they, they, they're above the whole list.
[33:15.68] Yeah, no.
[33:19.68] Preact from, I follow benchmarks.
[33:22.68] Preact actually from a performance standpoint has always basically been another one of these Cs.
[33:29.68] Um, it's, it's a good C, but it, it actually, most of its life has lived very, very close to view, maybe even slightly behind view.
[33:39.68] So preact is going to be a C.
[33:42.68] All right.
[33:52.68] We'll talk about preact with signals, I think, but we'll, we'll, we'll get there.
[33:59.68] Next one.
[34:00.68] I'm using the modern logo, but I'm only going to give angular a second thing.
[34:07.68] It's arguable that angular 19 forward or the next version of angular, like there should be another angular at the end of the list.
[34:12.68] And it should use this new logo, but I'm now doing angular instead of angular JS.
[34:16.68] A is inferno.
[34:22.68] Um, created by the author of a certain, I shouldn't say the author.
[34:28.68] Inferno was put, put them on the map.
[34:30.68] Created by Dominic Ganaway.
[34:31.68] Who's also took a lead on Svelte five and also author of lexical and former react core team member.
[34:38.68] Order doesn't matter.
[34:44.68] I'm just putting them in the order that they were released at the specific tier.
[34:49.68] So angular two, three, four, five, whatever.
[34:53.68] D maybe even E.
[34:57.68] Any, any, any, anyone else got, got any guesses where I should put this?
[35:11.68] I'm waiting on you.
[35:12.68] What do you got?
[35:13.68] E, D, C, S, D, C.
[35:16.68] Yeah.
[35:17.68] Angular.
[35:18.68] Angular has always, this is the weirdest thing.
[35:27.68] I don't know how they do it.
[35:28.68] Angular and react have been lockstep for basically forever.
[35:34.68] forever.
[35:35.68] I like only recently.
[35:37.68] That's why I mentioned it in the last year or so.
[35:40.68] I've been seeing stuff, maybe different types of control flows and stuff.
[35:43.68] Like things starting to where, where angular is separating itself.
[35:47.68] But no matter the release, no matter what came out, react got a little bit faster.
[35:51.68] Angular, in fact, they basically have been lockstep for all of time.
[35:58.68] right.
[35:59.68] Is the same at the, the funniest thing is most frameworks actually move up at the same time.
[36:06.68] So generally actually, yes, this, this there's very, there's not enough.
[36:11.68] It's very rare that frameworks actually move more than maybe half a tier away from where they were sitting.
[36:19.68] Comparative to the competitors.
[36:23.68] No, this is not angular powered by signals.
[36:25.68] This is angular.
[36:28.68] Like for the last, like this is angular two through, I don't know, 17 or whatever.
[36:33.68] Yeah.
[36:41.68] I mean, it would be, but I'm going to make you work.
[36:44.68] People who know will know the logos.
[36:46.68] It's, it's a lot of libraries here.
[36:48.68] Um, yeah, angular with signals is probably a C, maybe even a B.
[36:56.68] The funny thing is angular tends to actually always be just a tiny bit ahead of a react.
[37:01.68] It's funny.
[37:02.68] Cause when you talk to the angular folks, they like react.
[37:04.68] I don't, we, I don't pay attention to react.
[37:06.68] I don't look outside of Google, you know, like historically, but they've always somehow managed just to be like right there or like right in front of.
[37:13.68] All right.
[37:19.68] Now we get Svelte one and two.
[37:25.68] So let's, we get Svelte one and two.
[37:27.68] I don't, I'm not that familiar with Svelte one, but I'm, so this is basically Svelte two.
[37:31.68] Svelte one and two is any guesses.
[37:40.68] I know because I'm the one who did the upgrade from Svelte two to Svelte three in the JS framework benchmark.
[37:44.68] Um, but this is Svelte two.
[37:47.68] This is before the, it got the, the, you know, updated syntax and the new compiler and all that kind of stuff.
[37:54.68] Got some C's and B's and D's B or C.
[37:58.68] Yeah.
[37:58.68] I'm going to say that Svelte two.
[38:00.68] Oh man.
[38:01.68] Was a significant improvement over or, or Svelte itself was a significant improvement over reactive, but it is also C tier.
[38:10.68] Yeah.
[38:11.68] All right.
[38:14.68] All right.
[38:15.68] It is a, it uses signals and it uses like a form of dirty checking under the hood.
[38:24.68] It's, it, it's funny.
[38:25.68] Dominic Ganaway.
[38:26.68] Um, yeah, we'll get to his quote in a, in a little bit.
[38:31.68] The disappearing framework thing really caught on with Svelte three.
[38:36.68] This is, if you've never seen old Svelte two, it looks more like reactive.
[38:40.68] It had like single file components, but it had like dot get and dot set for state.
[38:45.68] There's no like let variables.
[38:46.68] Svelte three is a Svelte that everyone knows.
[38:49.68] This is the Svelte that only people who were doing benchmarks knew.
[38:54.68] It was not very popular.
[38:56.68] Right.
[39:00.68] So as you could tell.
[39:03.68] Now that was 2016.
[39:05.68] That was actually the end of two thousands towards the end of 2016.
[39:09.68] This framework might've actually come out before Svelte and I might've put it in the wrong order, but we have inferno at a, and, um, everyone else is kind of below it.
[39:21.68] I'm going to, this one here's a small framework.
[39:29.68] Um, blazer has a client rendering framework, um, to my knowledge.
[39:35.68] I, HTMX does not.
[39:36.68] Blazer actually has like a JavaScript framework that does rendering.
[39:40.68] This one here is a small one.
[39:46.68] This one's called Imba.
[39:48.68] It was made by like the Scrimbub people.
[39:50.68] It was a compiled language kind of like Elm concept.
[39:53.68] Um, and they, they, they caught kind of called it out as like the fastest framework.
[40:02.68] They, they made the stupid benchmark that, uh, rich ended up using in the Svelte three release where they showed it.
[40:08.68] It was like 20 times faster than react.
[40:10.68] The reality is it wasn't, but if you're looking at the time and the type of frameworks that were popular and available, um, you know, there were other faster frameworks.
[40:20.68] I don't have like the fastest beat on things.
[40:22.68] They weren't that popular.
[40:23.68] Like other than they're like, you can imagine when Inferno came out that there's like half a dozen other smaller frameworks that work like Inferno, but nothing that kind of caught on.
[40:32.68] Imba solidly is going, many of you probably don't know it, but it's going to be our first B can't drag on this computer at all.
[40:45.68] Cause it's stupid.
[40:46.68] It's gonna be our first B tier framework.
[40:49.68] It actually did have significant performance improvements over what had come before.
[40:53.68] Um, but it was, it wasn't quite the same.
[40:56.68] Um, again, it was a virtual DOM approach.
[40:59.68] It was leveraging a compiler, just not as efficiently as, um, Inferno.
[41:05.68] It's big point of sale though, was like the DX.
[41:07.68] If you ever seen it, it's like coffee script almost.
[41:09.68] And the template like constant coffee script.
[41:11.68] It's like this, it's completely its own language.
[41:14.68] Yeah.
[41:17.68] Yeah.
[41:18.68] The marketing on Imba was really good.
[41:19.68] I remember that.
[41:20.68] All right.
[41:24.68] So we're basically at 2016 right now.
[41:28.68] And between 2010 and 2016, we went through half the list.
[41:33.68] Most, it was a very fast period.
[41:36.68] We went from 2004, 13, 14 with react to filling in the rest of this chart in almost no time.
[41:41.68] Right.
[41:46.68] Um, next one I got here is hyper app.
[41:49.68] It's got like almost 20,000 stars on GitHub.
[41:53.68] You probably don't remember.
[41:54.68] It was, this is when library started like preact.
[41:56.68] It kind of started this small library thing.
[41:58.68] Cause preact was only three kilobytes.
[41:59.68] Hyperact was like, can we do it in like 1.2 kilobytes?
[42:02.68] Um, hyper app, uh, is performance wise was, you know, a V DOM or whatnot.
[42:13.68] So it's, it's, it's, it was small.
[42:17.68] So it loaded faster, but it is still going to be this dictionary popping up.
[42:22.68] So much fun.
[42:23.68] It's still going to be in this category.
[42:25.68] I think.
[42:26.68] Um, that's why I feel like it, I don't know if anyone knew it.
[42:29.68] Why was preact fast and reactive and port signals?
[42:33.68] Preact always went with a slightly lighter, more optimized version of it as V DOM.
[42:39.68] Preact and react historically have been closer in performance and people give them close.
[42:42.68] and performance and people give them credit for.
[42:44.68] Um, but they've generally always just been a bit ahead.
[42:48.68] A lot of people, when they, when Inferno came out, they, they assumed that preact was like up with Inferno.
[42:55.68] You know, those are the two leading things, but preact and react were a lot closer than preact was to Inferno.
[43:00.68] Second from the left in E that's backbone.
[43:05.68] Yeah.
[43:06.68] Okay.
[43:06.68] It.
[43:07.68] Preact was created probably for size.
[43:08.68] I think.
[43:09.68] I don't know.
[43:10.68] We'd have to ask Jason Miller, but preact was considerably smaller.
[43:16.68] React even back then was still like 30 some odd kilobytes.
[43:18.68] Preact was three kilobytes.
[43:19.68] Preact was three kilobytes.
[43:20.68] Inferno split the difference around eight or nine kilobytes, five or maybe 10 kilobytes.
[43:25.68] But preact was about speed.
[43:26.68] No, preact is still a VDOM until this very day.
[43:28.68] Um, preact is, yeah.
[43:29.68] Yeah.
[43:30.68] I, this is why there's a lot of misconceptions out here.
[43:32.68] I really want to clarify on some of these things.
[43:34.68] So, preact is, yeah, the, I, this is why there's a lot of misconceptions out here.
[43:35.68] I really want to clarify on some of these things.
[43:36.68] Yeah.
[43:37.68] Um, preact is, yeah.
[43:38.68] Um, preact is, yeah, I, I, I, this is why there's a lot of misconceptions out here.
[43:43.68] I really want to clarify on some of these things.
[43:46.68] Um, if, if there was a major change, like preact stop being a VDOM, um, I, I, we will get to
[44:07.68] it.
[44:08.68] Um, and we'll have a separate category, but preact is still here.
[44:11.68] Okay.
[44:12.68] I got one for you all lit.
[44:15.68] This, and this, it's funny.
[44:20.68] Cause I, I didn't put this out here because people start saying like their favorite web
[44:24.68] component frameworks, like skew lace or whatever.
[44:26.68] Generally speaking, web components will add a tier to your performance.
[44:31.68] So like if you were an A framework and you made a web components, actually that's not true.
[44:35.68] If you're towards the top end, like an S or an A, it'll take two tiers off.
[44:39.68] And then if you're like, maybe like D it'll take one tier off.
[44:42.68] So if you had react and put in a web component, now you have E.
[44:44.68] If you had an S tier and you put it in a web component, now you'd have a B tier thing.
[44:49.68] So lit itself.
[44:51.68] I'm talking about the renderer.
[44:52.68] I'm not talking about the web components.
[44:53.68] I lit itself might be middling, but the actual renderer lit HTML is the one I'm talking about.
[45:01.68] You keep saying D until I know what it is.
[45:08.68] Yeah.
[45:09.68] Lit is a thin VDOM layer.
[45:17.68] Yeah.
[45:18.68] For preact.
[45:19.68] Yeah.
[45:20.68] No, lit has no VDOM.
[45:21.68] It's a dirty checking system.
[45:22.68] But it and another lighter HTML, I think, or what was the original one?
[45:27.68] Hyper HTML.
[45:28.68] Hyper HTML.
[45:29.68] By, which actually came out before lit and did exactly the same thing.
[45:34.68] Just as I said, not as popular.
[45:37.68] And he made like four different frameworks.
[45:39.68] Every time he came up with a new version, Andrea Diomache ended up like making it different and then getting different GitHub stars, unfortunately.
[45:45.68] So they never got popular, but hyper HTML in the spring of 2017 pioneered a completely new type of rendering, bringing back dirty checking, but leveraging the fact of cloning templates.
[45:59.68] Um, and more specifically template literals, because template literals have this weird property.
[46:03.68] I don't know if you guys know with tag template literals, it remembers the static array, like the static strings that you pass to it.
[46:11.68] So if you have a, I mean, I can just put something in here so you can see what I'm talking about.
[46:15.68] But if you have a tag template literal, like HTML and you have a function, like let's say function, my component.
[46:24.68] Right.
[46:26.68] And then in here you have this, right?
[46:28.68] So you return HTML and then you put like, I don't know, div really care, whatever.
[46:38.68] And then you have some interpolation in here where you have like some value five, whatever.
[46:43.68] What this gets converted into essentially like HTML function.
[46:49.68] And then it's like an array of static.
[46:52.68] And then like a list of, uh, the holes.
[46:58.68] Right.
[46:59.68] Right.
[47:00.68] And this static array is static forever.
[47:05.68] If you call this function 10 times, they don't recreate this array.
[47:09.68] They just know this array exists, which means that you can use this array as a stable reference.
[47:15.68] Even if you re render or re recall this component over and over and over again.
[47:19.68] In a sense, it works like a VDOM, but, um, it only fills in the holes by dirty checking the values in the holes.
[47:27.68] And the static array serves as a stable reference, kind of the same way that react hooks would keep references or whatever.
[47:32.68] Like, um, and this is an interesting property built into the base of the tag template literals, but it basically invented a whole new type of rendering back in 2017.
[47:41.68] It works like an Inferno VDOM kind of yet.
[47:46.68] And in, so lit HTML is small, fairly small, maybe about 12 or 16 kilobytes.
[47:55.68] And it's, it's our second eight here.
[47:57.68] Something finally joined Inferno at the, at the top.
[48:02.68] So, um, credit goes, or, you know, credits do so to speak.
[48:06.68] Um, even if lit, you know, with the web components and everything ends up maybe a B to C tier.
[48:15.68] Lit HTML is a brilliantly fast render.
[48:19.68] All flames is a pattern, right?
[48:28.68] Well, I mean, blazingly fast, you know, this is, this is the origin or the original blazingly fast.
[48:35.68] Inferno, right?
[48:36.68] So these flame logos were trying a good way of showing people that you're a blazingly fast.
[48:41.68] Okay.
[48:42.68] Right.
[48:43.68] All right.
[48:46.68] Yeah.
[48:50.68] I don't know.
[48:51.68] It's cycle JS do anything for performance.
[48:53.68] The biggest thing is popularity and benchmarks.
[48:57.68] It's hard without having it.
[49:00.68] Yeah.
[49:01.68] I'm talking about view view two.
[49:02.68] Yeah.
[49:03.68] Blazer needs a flame logo.
[49:04.68] Yes.
[49:05.68] This was, this was thought for a while that your logo will fire you even faster.
[49:06.68] Okay.
[49:07.68] Okay.
[49:08.68] Okay.
[49:09.68] Okay.
[49:10.68] Now we're getting into 2018.
[49:11.68] This is one you guys might've heard of.
[49:13.68] It's called Alpine.
[49:14.68] Um, it let's see if you can guess where it goes.
[49:16.68] It's a fine grained rendering system.
[49:17.68] Like, like some of the earlier ones we saw, like knockout.
[49:17.68] It uses signals.
[49:18.68] It does not use a VDOM.
[49:19.68] It does not use a VDOM.
[49:19.68] It does not use a VDOM.
[49:20.68] It's a fine grained rendering system.
[49:21.68] Like, like some of the earlier ones we saw, like knockout.
[49:22.68] It uses signals.
[49:23.68] It does not use a VDOM.
[49:23.68] It's a fine grained rendering system.
[49:24.68] Like, like some of the earlier ones we saw, like knockout.
[49:25.68] It uses signals.
[49:25.68] It does not use a VDOM.
[49:26.68] And it uses template data binding, kind of like knockout did.
[49:27.68] So when it renders the template, it has to parse through the, uh, and it uses a VDOM.
[49:27.68] It's a fine grained rendering system.
[49:28.68] It's a fine grained rendering system.
[49:29.68] Like, like some of the earlier ones we saw, like knockout.
[49:31.68] It uses signals.
[49:32.68] It does not use a VDOM.
[49:33.68] And it uses template data binding, kind of like knockout did.
[49:37.68] So when it renders the template, it has to parse through the, uh, in the, uh, in the
[49:54.68] template, it has to parse through the, uh, HTML to, to, to get its bindings.
[50:08.68] It is based on Vue's reactivity package.
[50:10.68] But as people should know, reactivity performance actually doesn't impact render performance very
[50:15.68] much.
[50:16.68] Like if your, if your reactivity package is very slow, it will.
[50:19.68] But if you take almost any modern one and swap it, your framework won't be faster.
[50:28.68] Um, that's not true of like five, uh, five years ago, but these days, like the, the optimal change
[50:33.68] between reactivity doesn't make a difference.
[50:35.68] Alpine is going to be our second one to go in the F category.
[50:39.68] category actually.
[50:40.68] Um, Alpine has fast reactivity, but it's templating is slow, even slower than, um, knockouts.
[50:50.68] They didn't optimize things like control flows.
[50:54.68] Um, even though it was fine grained.
[50:56.68] Um, it's interestingly enough, not even because of the view, because it got the views reactivity
[51:03.68] reactivity in their own stuff.
[51:04.68] It's not even particularly small.
[51:06.68] Um, like if you remember, there was a petite view thing Evan made over a weekend.
[51:11.68] Um, because someone made some comment about, you know, Alpine being like a better view, even
[51:18.68] though they was using views JS reactivity.
[51:20.68] And now, and I think that you don't, you don't piss off in you, especially when it's something
[51:25.68] that like literally he could spend a couple hours because view one was kind of like Alpine
[51:30.68] or closer to knockout.
[51:31.68] And so, uh, essentially, um, it it's like, it's basically knockout, but maybe slightly smaller
[51:44.68] than knockout, but generally just similar approach to knockout JS, just kind of worse.
[51:50.68] Um, yeah, I don't know.
[52:04.68] It's an interesting one because in some ways it's really easy to adapt, adopt Alpine for,
[52:10.68] uh, uh, backends the same way it was easy to adopt knockout or backbone or some of these
[52:15.68] original tier ones for the backends, which has made it popular.
[52:17.68] It's like a retro version, but in some ways, um, it hasn't actually improved and maybe even
[52:23.68] slightly worse than the original.
[52:24.68] Like in some ways Alpine is better.
[52:26.68] They're better at handling what I call like hydration type scenarios where you're like trying
[52:32.68] to re wake it up in the client than knockout.
[52:35.68] Knockout never really considered those kinds of scenarios, but on a raw performance level in
[52:39.68] the client Alpine is none.
[52:42.68] None.
[52:43.68] Yeah.
[52:44.68] See, everyone says it'd be biased, but the benchmarks don't lie.
[52:47.68] Solid.
[52:48.68] I'm going to obviously, where am I going to put solid?
[52:50.68] A tier?
[52:55.68] No.
[52:56.68] Solid was the first S tier according to the modern, to the modern, um,
[53:01.68] the first S tier.
[53:02.68] I'm going to put a little bit of a new one.
[53:03.68] I'm going to put a little bit of a new one.
[53:04.68] I'm going to put a little bit of a new one.
[53:05.68] I'm going to put a little bit of a new one.
[53:06.68] I'm going to put a little bit of a new one.
[53:07.68] I'm going to put a little bit of a new one.
[53:08.68] I'm going to put a little bit of a new one.
[53:09.68] I'm going to put a little bit of a new one.
[53:10.68] I'm going to put a little bit of a new one.
[53:11.68] I'm going to put a new one.
[53:12.68] I'm going to put a new one.
[53:13.68] I'm going to put a new one.
[53:14.68] I'm going to put a new one.
[53:15.68] I'm going to put a new one.
[53:16.68] I'm going to put a new one.
[53:17.68] I'm going to put a new one.
[53:18.68] I'm going to put a new one.
[53:19.68] I'm going to put a new one.
[53:20.68] I'm going to put a new one.
[53:21.68] I'm going to put a new one.
[53:22.68] I'm going to put a new one.
[53:23.68] I'm going to put a new one.
[53:24.68] I'm going to put a new one.
[53:25.68] I'm going to put a new one.
[53:26.68] I'm going to put a new one.
[53:27.68] I'm going to put a new one.
[53:28.68] I'm going to put a new one.
[53:29.68] I'm going to put a new one.
[53:30.68] I'm going to put a new one.
[53:31.68] I'm going to put a new one.
[53:32.68] I'm going to put a new one.
[53:33.68] I'm going to put a new one.
[53:34.68] I'm going to put a new one.
[53:35.68] I'm going to put a new one.
[53:36.68] I'm going to put a new one.
[53:47.68] This is why I said Inferno was the most controversial thing here,
[53:51.68] because the browser changed.
[53:52.68] And now Inferno and Solid are almost next to each other.
[53:54.68] Inferno might be like slightly behind,
[53:56.68] but it was from no change on Inferno's part.
[53:59.68] The browser, the browser changed.
[54:02.68] So we've seen some compiled JS libraries.
[54:08.68] Yeah, Blazor was also came out in 2018,
[54:11.68] and we're getting into the compiled languages that aren't JavaScript.
[54:14.68] Blazor...
[54:16.68] Some people made a joke that Blazor could have its own category,
[54:19.68] and they're not wrong.
[54:21.68] Blazor...
[54:23.68] Blazor is basically the...
[54:28.68] It's like almost feels bad putting Blazor next to Alpine and Ember
[54:33.68] because Alpine and Ember are at least a tier's worth better than Blazor.
[54:39.68] Blazor is essentially...
[54:42.68] Like, it's hard to...
[54:45.68] Like, if you went out and just took some JavaScript
[54:53.68] and then, like, JSON stringified it,
[54:58.68] and then inter-HTMLed it everywhere
[55:02.68] and, like, didn't do anything you could think of optimally,
[55:07.68] it would probably be faster than Blazor.
[55:10.68] It's not Blazor's primary purpose, but it's like...
[55:20.68] Yeah, I don't know.
[55:22.68] HTML is fine.
[55:26.68] It's just that.
[55:28.68] Okay, next one.
[55:30.68] Another...
[55:31.68] First of the Rust libraries.
[55:32.68] This one was based on React.
[55:34.68] It's called U.
[55:35.68] It's a Rust framework that renders...
[55:39.68] a VDOM, just like React.
[55:42.68] See, what I'm hoping you get at here, for the most part, is from this point on,
[55:47.68] we can start getting more accurate at guessing where these things go.
[55:50.68] Yeah, U spelt Y-E-W, like, the tree.
[56:01.68] Any guesses for you?
[56:06.68] Did anyone even know you?
[56:09.68] Probably fast and reactive slower than me.
[56:18.68] There is an overhead of doing WASM in the browser that people have to get over,
[56:22.68] and U was not the one who figured out how to do it.
[56:24.68] That being said, U was impressive, because as the first Rust compiled framework,
[56:29.68] it actually did a decent job of matching its influence.
[56:35.68] So U here is...
[56:38.68] I can spread these out a little bit.
[56:40.68] U here is actually a D tier.
[56:43.68] Yeah, WASM has overhead because of the communication and the serialization boundary.
[56:49.68] So, pretty cool to see Rust on it.
[56:58.68] We've got Blazor, some C#.
[57:01.68] We got Elm.
[57:02.68] We got Imba.
[57:03.68] You know, where's Imba here?
[57:05.68] Some different, you know, compiled languages.
[57:07.68] But, I mean, U has almost 30,000 stars on GitHub.
[57:14.68] Okay, now we're in for a big one.
[57:19.68] One that really revolutionized the way people think.
[57:22.68] This is Svelte 3.
[57:27.68] Svelte 3 was a pretty significant jump up from Svelte 2.
[57:33.68] Not the biggest, to be fair.
[57:35.68] But Svelte 3 definitely was an improvement here.
[57:39.68] So, technically, everything had been revised with the new compilation.
[57:45.68] But mechanically, it was the same general idea where it was doing dirty checking that was compiler optimized.
[57:54.68] So, I think Rich had moved away from, I don't know if he compiled the signals in one or two, but he moved away from the old reactivity and almost went straight to like, let's get rid of it all.
[58:07.68] Let's just use the compiler on the language.
[58:10.68] So, yeah, Svelte, we got some guesses.
[58:13.68] We got bleep plus B, A.
[58:14.68] Yeah.
[58:15.68] B plus is actually probably the, where this Svelte 3 goes.
[58:20.68] I think, I think, it is a good B framework.
[58:24.68] It is, I'd say, slightly better than Imba for performance.
[58:29.68] Um, we're gonna copy one of these.
[58:31.68] No, not that.
[58:32.68] Yeah, let's put it, let's put the 3 on it so we can see that this is a 3.
[58:42.68] Svelte 3.
[58:43.68] I don't know if that shows up any good.
[58:45.68] Maybe it needs to be a Svelte red, no, that's not it.
[58:49.68] White.
[58:50.68] It's like trying to pick a color that would actually show up against the background.
[58:59.68] Maybe I just need to keep it green and then just like not overlap it as much.
[59:05.68] Keep it the neon green.
[59:11.68] Yeah, there we go.
[59:12.68] Yeah.
[59:14.68] Svelte 3.
[59:15.68] Yeah, there we go.
[59:19.68] So, we're, we're seeing, we have seen over time, libraries kind of start getting up there.
[59:28.68] But like in terms of a timeline.
[59:30.68] This group has been taking a little bit more to move up, right?
[59:37.68] Um, we're now, this is 2019, right?
[59:40.68] So, by the time Svelte 3 comes out, we already have Inferno, we have Lit, we have Solid.
[59:46.68] Um, it is a, it is a sizable improvement to Svelte though.
[59:51.68] Right, and then the next one I have on my list, I guess I'm jumping right to 2020.
[60:01.68] I guess the rest of 2019 was a quiet year.
[60:04.68] Um, which is View 3.
[60:14.68] Was that 2020 or 2021?
[60:15.68] I, it doesn't really matter.
[60:17.68] They were working on it long enough.
[60:18.68] So, we're gonna, we're gonna put View 3 in.
[60:20.68] And can you guys guess where View 3 is?
[60:23.68] Yep.
[60:24.68] Slightly behind Svelte.
[60:24.68] A little bit slower than Svelte, but Solid B tier.
[60:38.68] The interesting thing about, about these is going from 2 to 3, they updated their change
[60:55.68] management systems, both of these frameworks, but they didn't actually change their mechanical,
[61:00.68] mechanics for rendering.
[61:01.68] This is still dirty checking.
[61:02.68] This is still a VDOM.
[61:03.68] Just like this is a VDOM.
[61:08.68] Yeah.
[61:09.68] September 2020.
[61:10.68] Yeah.
[61:11.68] So, I'm, I'm, I'm, I'm pretty, I'm pretty accurate here.
[61:14.68] The F tier stands for Flutter.
[61:19.68] Flutter and Blazor can battle it out.
[61:22.68] Well, Flutter Web.
[61:23.68] I don't know if Flutter Mobile is any good, but Flutter Web is not particularly impressive.
[61:29.68] So, Preact, Preact equals View, but React at this time?
[61:34.68] No, Preact is still in the same place.
[61:37.68] Preact hasn't, has not moved at this time.
[61:39.68] Preact is still Solid C.
[61:41.68] Um, 2019 to 2020, Preact is, is in the same place.
[61:48.68] Okay.
[61:49.68] Now we're getting to 2021.
[62:00.68] And the next framework I have on the list is QUIC.
[62:05.68] Incredible non-hydrating framework has signals.
[62:11.68] Um, right.
[62:12.68] Out of the frameworks that we have listed today at this point, um, the only one that has signals
[62:20.68] that was created after, I mean, it's hard to say.
[62:24.68] View had signals under the hood.
[62:27.68] So then Vue, Vue 3 actually still has signals plus a VDOM.
[62:31.68] Svelte has an optimized compiler.
[62:33.68] QUIC is, well, let's see if you can guess.
[62:36.68] QUIC has signals plus a VDOM.
[62:47.68] Where do all the signals plus VDOM libraries go?
[62:50.68] The difference between Vue is a weird exception because they did incredible compiler analysis.
[62:56.68] But all the signals plus VDOM libraries are actually right here.
[63:02.68] So QUIC comes in as a C tier.
[63:05.68] Yeah.
[63:14.68] In terms of performance in the client, QUIC was great.
[63:16.68] But in terms of performance client, it's not, uh, outstanding.
[63:20.68] It's actually it in Preact.
[63:21.68] I think they might even have the same base on their VDOM implementation.
[63:25.68] like the same inspiration.
[63:27.68] Uh, there's a couple like, Oh God, what is it called?
[63:30.68] There's a few different VDOM implementations that were created back in the 2014, 15 period.
[63:34.68] Um, yeah.
[63:36.68] So VDOM plus signals can, they can, they generally highlight really well for the single pinpoint update case.
[63:51.68] But then you're paying more on the re-render because the signals are heavier than the VDOM.
[63:55.68] So if you're re-rendering stuff, signals work against you.
[63:58.68] If you're doing pinpoint updates, signals work for you.
[64:00.68] They're kind of at odds with each other.
[64:03.68] Vue through careful compiler analysis with Vue 3 managed to just break out of that.
[64:09.68] But they are the only one that, and I think it might be true to this day, that does signals plus VDOM above a C tier.
[64:18.68] That, that, that again makes Vue 3, Vue impressive.
[64:31.68] Um, frameworks in A are inferno and lit HTML.
[64:35.68] Yeah, this isn't about benchmark.
[64:42.68] This is about client-side render performance across multiple benchmarks.
[64:46.68] Mostly JS framework benchmark, but there's just several ones.
[64:49.68] This is my, that I look at.
[64:50.68] This is, this is, uh, this is kind of my, my perspective.
[64:58.68] Okay.
[64:59.68] You guys see the line phase?
[65:01.68] I got one for you.
[65:02.68] Million JS.
[65:03.68] It uses, uh, a mechanism of using a compiler to, to, to basically, um, flatten out all the VDOM nodes into cloning.
[65:17.68] Um, similar to way solid and lit does cloning, but keeps the holes kind of like VDOM-ish.
[65:27.68] Yeah.
[65:28.68] From its description, it should be an A tier list.
[65:33.68] But from its actual score and performances in benchmarks, we've got our second S tier.
[65:39.68] Million is, is fast.
[65:50.68] Million is very fast.
[65:58.68] I, Aiden came out and did this whole video where he's like showing 70% faster than React.
[66:03.68] That was not accurate.
[66:05.68] Right.
[66:12.68] But million is definitely faster than other solutions.
[66:21.68] BlockDOM in general, it's fast.
[66:22.68] Cause it's basically, it's, it's basically an optimal mentality of the VDOM.
[66:27.68] It's essentially a place where you've erased everything.
[66:32.68] Um, but the holes, the way that, um, you know, you know, Dominic Ganaway always described to me what a VDOM was.
[66:41.68] Right.
[66:42.68] It's funny cause for like, you see Svelte 3 and Vue 3 here, but a lot of people at this time period thought Svelte 3 and Vue 3 and solid were all the same.
[66:51.68] The, the, this is not the case actually.
[66:55.68] I wonder if I, yeah, I'm going to try and share a clip from one of my previous streams.
[67:01.68] Um, give me a second.
[67:03.68] I'm actually going to change how I'm sharing my screen to share this clip.
[67:07.68] Um, percent.
[67:12.68] Um, cause this way we'll get audio through here.
[67:18.68] Let's do a Chrome window.
[67:20.68] I want to do.
[67:21.68] What's this one reactivity ruins and done.
[67:24.68] I'm going to put Dominic on, on here for a second.
[67:27.68] We can listen to what he has to say.
[67:29.68] It was nowhere near as fast back then.
[67:34.68] It was actually much quicker.
[67:35.68] Just create the elements individually.
[67:36.68] We'll use in a HTML.
[67:37.68] So.
[67:38.68] So what back then I looked into was using bytecode.
[67:41.68] So, and it wasn't like it would represent like would inference like this, go there and check the code.
[67:46.68] So the idea was it would do that.
[67:48.68] And you'd get back your component, which would like be.
[67:51.68] I'm in the wrong spot.
[67:52.68] Nevermind.
[67:52.68] I wanted to take a quote that I clipped from him.
[67:55.68] Yeah.
[67:56.68] Let's forget this for now.
[67:57.68] Um, I want to take a quote that I want to click clip from him where he's calling Svelte 3 a V Dom because essentially an optimized, um, compiler that did dirty checking.
[68:10.68] And an optimized V Dom, like a block Dom is almost the same concept.
[68:15.68] Uh, uh, so to speak.
[68:18.68] So let me go back to presenting my whole screen.
[68:21.68] All right.
[68:22.68] Okay.
[68:23.68] So yeah, I mean, it's arguable that in practice million might be an A tier because it still has to deal with a rerender model.
[68:40.68] Maybe if you had million plus signals, you know, you could do something smart there.
[68:44.68] Um, but from a raw rendering benchmark performance standpoint, you know, when people are clocking it million is about as fast as it gets.
[68:55.68] Million is actually in those kind of tests faster than solid, but it also can't hide.
[69:05.68] Um, like it doesn't, it doesn't solve the architectural problems.
[69:10.68] So there's cases where million would be worse.
[69:23.68] Um, if we remove spas, do we need reactivity?
[69:26.68] Um, no, I guess, but if you can't remove, I mean, when you say single page apps.
[69:31.68] Okay.
[69:32.68] No, it basically depends on what you mean by single page apps.
[69:34.68] If you, if you, if you need client side interactivity, you need reactivity.
[69:39.68] So I guess I'll put it that way.
[69:47.68] Well, it's still a V DOM library that depends on re-renders.
[69:51.68] So even if you render the stuff fast, it's like the exact opposite of the knockout problem.
[70:00.68] When we talked about knockout earlier, we're like, it's incredibly fast at updating the one thing, but then it sucks at rendering because it also does template processing.
[70:08.68] And whenever you switch page, you know, it's slow.
[70:11.68] Million is incredibly fast at just rendering, but it's, it's, it's not as good at like in theoretically at doing the, the more granular work architecturally because it can, it can cause, uh, re-renders.
[70:28.68] We'll get to that.
[70:30.68] As I said, we're getting pretty close to the end of the time here on the tier list so that we can actually get into the guts of fine-grained.
[70:35.68] I just wanted to get people thinking about the kind of terminology and things we talked about.
[70:49.68] How, how relevant is rendering speed in the 80% case?
[70:52.68] Let's say, I mean, it's a, it's a good question.
[70:53.68] If you're talking apps, um, rendering speed is, it can, it can impact like the sluggishness and the feel of the apps to, to a certain degree, but how much hard to put into numbers when you're in a certain range here?
[71:11.68] How much of a difference is each one making?
[71:13.68] I'm, I'm not sure.
[71:15.68] I will say it makes a bigger difference than reactivity performance, but, um, I, I don't know if it makes a huge, uh, difference, but I, again, this is mostly about talking about, I mean, thinking about things architecturally and if they have the impact, but you're right.
[71:36.68] None of this could matter conceptually, but this is just where this, the tool said from my perspective.
[71:47.68] Well, this start, this is a good time to kind of bring this up because adding signals to another system has overhead.
[71:56.68] Um, in a sense, solid signals plus millions rendering technique is what solid is.
[72:06.68] He does the same thing, the cloning, the nodes.
[72:11.68] And like, he, I told you how Leo from Mithril's big helpers, uh, minus appearance and bounce ideas when I was starting, um, I, I, I spent a lot of time with Aiden when he was first developing million.
[72:25.68] Um, and you'll see a lot of solid type influence in million.
[72:29.68] Although he also was looking at the other blocked on library, um, blocked on it's actually called blocked on.
[72:35.68] So to be fair, there are other impacts on that as well, but in a sense that the modern rendering technique is kind of that.
[72:45.68] It's just in like a rendering benchmark.
[72:48.68] You're not going to tell the difference.
[72:50.68] It's like, you'll see the signals overhead, but you won't see the lack of signals, not overhead.
[72:55.68] Um, Inferno still has a beat on it caches beat on nodes, but it still has a beat on browser changes to close the gap.
[73:12.68] I think of the overhead of doing that where million, um, actually like gets rid of the static nodes.
[73:19.68] Like just turns them all into templates.
[73:21.68] It doesn't care about them where, um, you're still dealing with VDOM nodes with Inferno.
[73:30.68] Yeah, this has nothing to do with server side rendering and first contentful paint.
[73:36.68] It was funny.
[73:36.68] I was reading a benchmark or some client performance choice thing where they're comparing all the client side frameworks and they're literally using Lighthouse.
[73:43.68] That makes no sense.
[73:45.68] Like it makes sense from the perspective of like, I want to compare backend technology or whatever.
[73:50.68] But if you take this list of frameworks and then only compare on Lighthouse, like it's SSR you're testing.
[73:56.68] You're not testing the framework's render speed.
[73:58.68] Okay.
[74:03.68] Okay.
[74:04.68] Next one.
[74:05.68] Leptos.
[74:08.68] Leptos is a signals based reactive library written in Rust.
[74:13.68] It's basically solid JS if it was ported to Rust.
[74:16.68] The only Rust I've ever looked at was when I had Greg from Leptos on stream.
[74:23.68] I, I, it was sounded really novel, but I don't know.
[74:28.68] Yeah.
[74:29.68] Every, every, every framework in this list will get a hundred in a hello world.
[74:31.68] Pretty much.
[74:32.68] Uh, I, I don't think Blazor will.
[74:35.68] It is arguable that these F tiers can't make that hundred in a, in a hello world.
[74:41.68] Maybe that's the, the, yeah.
[74:43.68] Yeah.
[74:48.68] Leptos.
[74:49.68] I think you guys know there's a slight overhead getting pretty good at guessing.
[74:53.68] Leptos is an A.
[74:58.68] Okay.
[74:59.68] Yeah.
[75:09.68] This next one's Dioxis.
[75:11.68] It's a block Dom, uh, built in it.
[75:15.68] Yeah.
[75:16.68] Leptos is in Rust and Wasm, right?
[75:29.68] We, we have a few of them.
[75:30.68] We have Blazor.
[75:31.68] We have you.
[75:32.68] Um, Leptos was huge because it actually showed that you could be fast and use Wasm.
[75:34.68] Like these ones are all in like react range and people like, oh, this, this is like, like, look, if you want to write a, a highly interactive app where you don't care that much about maybe page load times, you can use Leptos and it will probably be smoother and outperform a react app.
[75:47.68] That's what this is basically suggesting.
[76:00.68] Dioxis is also an A says Greg.
[76:01.68] It's weird though, because if I, if I, I wasn't going to give it an A, but that's only based on the JS framework benchmark performance.
[76:15.68] Can you explain maybe Greg, why Dioxis is like a, a, a B these days, it should be an A by all, by all accounts.
[76:26.68] But I was like, just looking the other day and I was like, what's going on?
[76:29.68] You know, it was actually, when I say the other day, I meant in preparation for the stream.
[76:32.68] Cause I was like, I expecting Leptos to be an A.
[76:34.68] Um, because we're basically seeing like the modern takes of, of, of JS frameworks.
[76:42.68] And okay.
[76:43.68] Let's just like, look at this and we're like, okay, we've got blocked on type stuff up here.
[76:51.68] Solid is here.
[76:53.68] Svelte five is here, right?
[76:54.68] They're right next to each other, which means I'm giving away something that's about to happen.
[76:59.68] Inferno is down here in our, getting into our A tier.
[77:02.68] Right.
[77:03.68] Um, we've got like, this is arguably S tier still, but then we got lit.
[77:11.68] Um, but if I look up for Leptos, which is here, it's Leptos has dropped significantly recently.
[77:24.68] Sycamores here, which is also very similar, but good old diet.
[77:30.68] Dioxis is down in like Preact range.
[77:43.68] Yeah.
[77:44.68] Um, I was going to give Dioxis and as far as I can tell, it's slightly behind Leptos.
[77:49.68] So for my, my, my tier listing, I was going to give it a B. Maybe this is not fair.
[77:57.68] Maybe this is incorrect, but this, this is, this is where I was going to put it.
[78:01.68] Um, Greg says that it's an A. So should we trust Greg?
[78:14.68] I don't know.
[78:15.68] Maybe Greg knows what he's talking about, about Russ more than I do.
[78:18.68] Fine.
[78:19.68] Greg, you've convinced me.
[78:20.68] It's going to be an A.
[78:28.68] It's possible for the, for the old version.
[78:31.68] this is my list.
[78:32.68] This, this though, in a sense is this.
[78:38.68] Do you know what I mean?
[78:39.68] It's solid a million, but in rust is happening right here.
[78:43.68] Okay.
[78:46.68] This is react compiler.
[78:48.68] Fun one.
[78:52.68] Where does the react compiler go?
[78:54.68] Raw rendering performance.
[78:59.68] This isn't about the code you write.
[79:00.68] This is about just raw rendering performance.
[79:03.68] Yeah.
[79:05.68] I'm going to have, I think this one's going to be fun.
[79:07.68] For all you guys saying D, why, why, why are you saying D?
[79:30.68] Same as react.
[79:31.68] Yeah.
[79:32.68] Yeah.
[79:33.68] I did give them too much of a hint.
[79:34.68] Yeah.
[79:35.68] It's a D react compiler.
[79:36.68] Is.
[79:37.68] Writes really good react code.
[79:38.68] But if you.
[79:39.68] But what happened to the.
[79:40.68] Did I crop it by accident?
[79:41.68] It.
[79:42.68] It lets you write really good react code.
[79:44.68] But if you.
[79:48.68] What happened to the.
[79:49.68] Did I crop it by accident?
[79:51.68] It lets you write really good react code.
[79:56.68] It lets you write really good react code.
[79:59.68] But.
[80:00.68] It also.
[80:01.68] Doesn't really change much.
[80:09.68] So.
[80:10.68] Similarly.
[80:11.68] If.
[80:12.68] If quick.
[80:13.68] A VDOM with signals is here.
[80:14.68] You can guess that.
[80:15.68] Preact with signals is also still a C tier.
[80:17.68] It doesn't change the quality of the.
[80:19.68] Of it.
[80:20.68] Have you noticed.
[80:21.68] To go from C to B.
[80:22.68] Has almost.
[80:23.68] Requires compiler.
[80:24.68] Um.
[80:25.68] Interference.
[80:27.68] Going from B to A.
[80:31.68] Has required.
[80:34.68] Dropping the.
[80:35.68] The VDOM.
[80:36.68] For the most part.
[80:37.68] To either a block DOM.
[80:39.68] Or a.
[80:40.68] Reactive thing.
[80:41.68] Inferno.
[80:42.68] Is.
[80:43.68] Just so.
[80:44.68] Optimized.
[80:45.68] That.
[80:46.68] Dominic.
[80:47.68] Somehow.
[80:48.68] Changed the math.
[80:50.68] Yeah.
[80:55.68] Just.
[80:56.68] Just kind of putting that out there.
[80:57.68] Yeah.
[80:58.68] So yes.
[80:59.68] The react compiler doesn't change anything.
[81:00.68] Yeah.
[81:01.68] Benchmark code is already written.
[81:02.68] In an optimized way.
[81:03.68] Exactly.
[81:04.68] It just means you don't have to write.
[81:10.68] the optimization instead of your dev.
[81:11.68] That being said.
[81:13.68] If you look.
[81:15.68] At.
[81:17.68] The optimized code.
[81:18.68] For frameworks that aren't.
[81:20.68] Called react.
[81:21.68] You'll find that.
[81:22.68] Um.
[81:23.68] You're.
[81:25.68] Like the non re-render framework.
[81:26.68] You'll find that.
[81:27.68] Funnily enough.
[81:28.68] The basic code.
[81:29.68] Is the optimized code.
[81:31.68] Um.
[81:33.68] It's.
[81:34.68] It's.
[81:34.68] It's.
[81:35.68] It's.
[81:36.68] It's.
[81:36.68] It's an interesting thing that we started noticing.
[81:37.68] Is that.
[81:37.68] The.
[81:38.68] Idiomatic code.
[81:39.68] For solid.
[81:40.68] Was the optimal code.
[81:41.68] Where the idiomatic code.
[81:42.68] For react.
[81:43.68] Was not.
[81:44.68] The optimal code.
[81:45.68] Um.
[81:46.68] It's.
[81:47.68] It's.
[81:48.68] It's interesting.
[81:48.68] It's.
[81:49.68] It's.
[81:50.68] It's.
[81:51.68] It's.
[81:51.68] It's.
[81:52.68] It's.
[81:53.68] It's.
[81:54.68] It's.
[81:55.68] It's.
[81:56.68] It's.
[81:57.68] It's.
[81:58.68] It's.
[81:59.68] I mean.
[82:00.68] The million.
[82:01.68] JS.
[82:02.68] That goes in the benchmark.
[82:03.68] People use million in react.
[82:04.68] But it's not react doing the rendering.
[82:06.68] So I don't count million as.
[82:08.68] Like you're.
[82:09.68] He.
[82:10.68] In a sense million maybe doesn't belong on this list.
[82:12.68] Because.
[82:13.68] Um.
[82:14.68] Aiden doesn't really.
[82:17.68] Didn't really want to make a full framework and push it.
[82:20.68] But like.
[82:21.68] He.
[82:22.68] He.
[82:23.68] There's basically nothing.
[82:24.68] In the.
[82:25.68] It's.
[82:26.68] Million.
[82:27.68] Is more like a parasite that lives in your react app.
[82:29.68] Like.
[82:30.68] There's nothing about the part that million doesn't.
[82:32.68] That is react.
[82:33.68] Zoneless.
[82:39.68] Angular.
[82:40.68] Or not yet.
[82:41.68] No.
[82:42.68] I haven't talked about it too much.
[82:43.68] But.
[82:44.68] Zoneless.
[82:45.68] Is enough to.
[82:46.68] Bring angular up a tier.
[82:47.68] If.
[82:48.68] Into like the C range.
[82:49.68] And.
[82:50.68] Maybe even B.
[82:51.68] Um.
[82:52.68] Historically zoneless has been C.
[82:53.68] But then.
[82:54.68] Angular's been working on stuff like control flow.
[82:55.68] Like if you look at the new new angular stuff in the last year.
[82:57.68] A lot of experimental stuff.
[82:58.68] Angular is actually up into the B's.
[83:00.68] But.
[83:01.68] Um.
[83:02.68] Generally speaking.
[83:03.68] Even zoneless.
[83:04.68] On its own.
[83:05.68] Was not.
[83:06.68] Is not gonna.
[83:07.68] It's gonna.
[83:08.68] It's basically a tier.
[83:09.68] Level thing.
[83:10.68] Angular.
[83:11.68] That for the most part.
[83:12.68] Historically.
[83:13.68] When people just go and test stuff.
[83:14.68] Like.
[83:15.68] On a base level.
[83:16.68] Angular and reactive.
[83:17.68] And.
[83:18.68] Lockstep.
[83:19.68] So.
[83:20.68] We got two left.
[83:21.68] We got Svelte 5.
[83:22.68] We got.
[83:23.68] Svelte 5.
[83:24.68] And we got.
[83:25.68] View vapor.
[83:26.68] Yeah.
[83:27.68] I mean.
[83:28.68] People kind of can guess where this is.
[83:29.68] Where does Svelte 5 go?
[83:30.68] I.
[83:31.68] I already.
[83:32.68] Kind of.
[83:33.68] Revealed this earlier.
[83:34.68] Svelte 5.
[83:35.68] Is.
[83:36.68] Svelte 5.
[83:37.68] Is.
[83:38.68] Not any.
[83:39.68] Is.
[83:40.68] Not any slower.
[83:41.68] Really.
[83:42.68] Svelte 5.
[83:43.68] Is.
[83:44.68] Not any slower.
[83:45.68] Really.
[83:46.68] Svelte 5.
[83:47.68] Is.
[83:48.68] Is.
[83:49.68] Not any slower.
[83:50.68] Really.
[83:51.68] Svelte 5.
[83:53.68] Is.
[83:54.68] Is.
[83:55.68] Not any.
[83:56.68] Is.
[83:57.68] Not any slower.
[83:58.68] Really.
[83:59.68] Svelte 5.
[83:59.68] Svelte 5.
[84:00.68] And.
[84:01.68] Solid.
[84:02.68] Are.
[84:03.68] Basically.
[84:04.68] Identical.
[84:05.68] This.
[84:06.68] And.
[84:06.68] It's because.
[84:07.68] They are.
[84:08.68] Also.
[84:09.68] Very.
[84:10.68] Identical.
[84:11.68] Like.
[84:12.68] Very close.
[84:13.68] In implementation.
[84:14.68] So.
[84:15.68] It signals.
[84:16.68] It's fine grained rendering.
[84:17.68] A lot of the stuff.
[84:18.68] That we're talking about today.
[84:19.68] It's.
[84:20.68] As I said.
[84:21.68] We started with reactivity.
[84:22.68] And we're back here.
[84:23.68] You know.
[84:24.68] 15 years later.
[84:25.68] Vapor.
[84:26.68] I don't know where vapor goes.
[84:28.68] Because it hasn't been released.
[84:29.68] Vapor.
[84:30.68] In.
[84:31.68] Evan's original show.
[84:32.68] Was.
[84:33.68] S tier.
[84:34.68] In the current benchmark.
[84:35.68] It's a tier.
[84:36.68] I'm going to be an optimist.
[84:37.68] And stick vapor up here.
[84:39.68] Because I trust.
[84:40.68] The view team.
[84:41.68] Does good stuff.
[84:42.68] And that it will.
[84:43.68] Get there.
[84:44.68] When it gets there.
[84:45.68] But.
[84:46.68] This is.
[84:47.68] This is.
[84:48.68] This is.
[84:49.68] Sort of the scenario.
[84:50.68] The only thing.
[84:51.68] That it is worth.
[84:52.68] That I.
[84:53.68] Is interesting.
[84:54.68] Kind of pointing out is.
[84:55.68] The.
[84:56.68] this is this is sort of the scenario the only thing that it is worth that is interesting
[85:06.90] kind of pointing out is the time period when we first started putting these uh these on on
[85:15.08] on our tier list like when we like from 2010 to 2014 we had maybe five of these right from
[85:25.44] 2014 to 2018 we had 24 of them and in the last or maybe 22 of them and then and then in the last
[85:41.74] eight years we added on like the the last eight so to speak so like
[85:51.96] there there there was eight years but or there was seven years
[85:56.24] between solids s tier and sulfide s tier like in terms of timeline there was there was um
[86:07.04] between inferno going to a
[86:13.68] and like anyone else even getting above b was like three years
[86:20.68] so yeah
[86:24.22] s tier second position that's million js
[86:36.64] but that is my completed list i think um we can shrink this down a little bit
[86:46.76] blow it up but okay this is how we start um
[86:53.98] next js isn't from a client rendering perspective it is the same as react
[87:04.52] yeah so yeah
[87:09.50] this
[87:11.94] the funny thing about this is this table starts showing you how svelte 5 solid view vapor
[87:20.92] here are here preact with signals is here
[87:25.20] and interestingly react with signals or jotai is still down here in d tier
[87:32.10] a framework with something additional is never faster than the framework itself
[87:41.12] right and it's part of it is because you you're not mechanically changing how the framework works
[87:48.32] so we're going to talk about mechanically how the frameworks work
[87:51.12] right
[87:52.74] that's a that's a it's a very negative way of looking at things
[88:01.40] but in this vector yes not no improvement there there have been improvements over time
[88:08.44] this isn't that yes it's it's it's do you do you actually know what
[88:13.50] i made react purposely the anchor point so react couldn't improve unless they did something
[88:20.58] completely drastic and that's why they were a good anchor point react has improved over the years
[88:25.92] and everyone else kind of next to them has improved over the years ever so slightly
[88:29.98] but because react is such a stable anchor point it was easier to show like when other things make bigger jumps
[88:37.10] so react has gotten better in 12 years sorry that wasn't fair
[88:40.62] um it's it's just that like yeah solid no solid two will still be in the exact same place or or so i hope
[88:51.84] um performance is not what we're what i'm i'm chasing anymore uh in terms of i i want to make good performance
[89:02.90] and find good performance in different areas but in the past seven eight years since
[89:10.12] solid's been here we haven't meaningfully moved beyond this model um and i don't know if we will
[89:18.64] any time even dom said it back in 2016 he thought he was done and to be fair with the browsers improving
[89:24.30] the way they have and i'd say inferno is like more s tier than you know than this might show now um
[89:33.00] he was done he's like performance in the browser is a solid problem in in in he said that back in like
[89:39.68] 2016 he he's kind of right it's just taken eight nine years for everything else to catch up
[89:50.56] so yeah i'm not expecting solid to be like way faster here it's just you know what i mean like
[89:59.10] solid's been that fast it just meant i haven't had to worry about performance
[90:03.60] for eight or nine years i've been working on other stuff
[90:06.24] that's the question i don't know if we have an approach that's better than this in a significant
[90:25.70] way the it we've gone very close to like vanilla js there's still overhead and over time i expect it but
[90:32.68] it's been we're really you know the 80 20 rule we're at like the 90 10 rule at this point
[90:40.06] like wasm could get uh uh uh
[90:51.44] you know maybe what let's see that thing wasm could without leftos or diaxis changing their code could
[91:00.42] cause the you know a change to happen here but all that can happen at this point i think is either
[91:07.48] through browser work of the stuff that the frameworks kind of get more up into this s tier
[91:11.48] area imagine solving performance and then resting for eight years well i mean what dominic tried to do
[91:19.62] was was to to go and apply his knowledge to other areas that's why you know he gave up inferno he's like
[91:26.94] yeah i did it you know he's like okay can we make react faster can you know and that you know that wasn't
[91:34.32] where react was heading um and then he's like you know do lexical right and then he came back and he's
[91:41.36] like guess what i can make svelte faster um and he did from svelte 3 to svelte 5 you know so yeah
[91:50.24] i mean meta frameworks are overhead but um it everything's an overhead that's why when benchmark
[92:11.50] you focus on a specific thing right your your actual site's performance is going to be based on your
[92:16.86] actual site's performance these are only indicators or things that can help they're not they're not
[92:21.62] the reality
[92:22.44] making solid faster to make him for my more fine grain i i don't think so it's that's actually the
[92:32.26] that's actually the hardest part could have made solid more fine grain but it was actually more
[92:36.48] expensive you fine grained versus not has a creation versus update um trade-off and what i started
[92:46.18] learning was that loosening granularity was the key to performance because you spend a lot more time in
[92:52.20] creation on certain types of tasks so yeah
[92:55.24] so yeah okay
[92:58.40] ryan placed marco six on the tier list will allow this one time for fans marco six is also s tier as
[93:07.12] far as i've seen it i was working on it we it was up there with view vapor and so it's the same
[93:11.22] signals fine grain rendering thing i think anyone who saw and see this is the thing i think solid's more
[93:20.86] popular with framework authors than it is with people i think anyone who understood how this
[93:25.18] stuff works and saw solid was like yeah we're gonna get there you know it might take a few years but
[93:29.90] we're gonna get there angulars in that boat you know view svelte
[93:35.56] um marco six definitely
[93:38.76] next year see that is an interesting challenge right because the only library up here that doesn't
[93:50.98] that can get like to be fair solids approach without a compiler is also s to a tier range
[93:59.24] but the only one i'm gonna here you go i know your web component i'll give you a little highlight
[94:04.58] lit is sitting up here when you consider like the compilers and all the stuff up here lit is
[94:10.90] sitting here as a as a as a non-compiled solution surprisingly high now lit versus solid without a
[94:20.02] compiler solid without a compiler is still faster than lit but people use the compiler for the ergonomics
[94:25.96] it's worth it but lit does pretty well leveraging that template tag template literal approach that i
[94:31.04] talked about earlier so it is a bit of an anomaly that's worth shouting out
[94:36.30] yeah i mean i've seen it when applied in a specific scope where you've tied the data to a specific thing like
[94:54.86] mikado and the js framework benchmark but i think someone's gonna gonna have to prove that it works in general sense
[95:01.18] my experience here has been that because of the different types of operations that are possible
[95:07.44] that ultimately the complexity ends up catching up with you and it ends up not being faster
[95:12.98] um it's funny because mob x actually had a really good uh fine-grained array approach and i was trying to make
[95:19.30] my mob x port of dom expressions use that instead of my map array to see if it do it and again i switched my map array diffing
[95:27.22] approach because it was still faster so that was like five six years ago you know things could have changed but generally
[95:34.42] and maybe new techniques discover but generally this hasn't been proven to be the case
[95:37.86] and it no it has nothing to do with real life use cases this is just me doing benchmarks
[95:45.70] million js
[96:00.34] i have not had a chance to look at the alien signals yet um i've been spending a lot of time
[96:19.46] working on updating solids renderer to using the lazy rendering which is actually a big influence for
[96:26.90] the topic of today which we should get into
[96:28.82] am i planning to discuss state management libraries not particularly only thing to know is when you
[96:38.82] take a framework and you add a state management library to it it makes it slower um it makes it
[96:44.90] easier to write optimal code because you a lot of people do dumb stuff you know they do easy stuff and
[96:52.74] they that state lets management lets you you know in like a vdom like react lets you like actually drive
[96:58.02] stuff from the outside but if the same updates could be applied like if the framework can render
[97:08.02] something that way then it's possible for it to render that way without the state management library so
[97:12.82] if you could write your code in that way it'd probably be terribly unagronomic you would get the same
[97:17.14] performance core characteristic without the overhead of the state management so generally state management is for
[97:22.18] your sake for your sanity and not for performance
[97:24.66] okay why do you need state management when it's built in okay okay all right all right all right we
[97:39.22] let's now that you guys have your you know appetite wetted so to speak let's let's get into the fine
[97:45.38] grain rendering so i let's let's start from the beginning and by if i start from the beginning i actually
[97:52.34] you know what i want to do give me two seconds i'm going to open my uh drive i want to pull something
[97:59.30] up here um this will just help me get started here for a second solid talks um the world beyond components
[98:14.50] it doesn't really matter which version i suppose
[98:16.50] i want to start exactly where like my intro talk to solid ends so to speak
[98:28.98] and
[98:37.78] yeah i'm gonna i'm gonna i haven't done this in a while so let's let's see if we can open this up
[98:41.94] okay
[98:48.50] we'll build up from here i'm gonna assume that most of you understand how signals work at a core
[98:57.14] level at this point
[99:07.54] and
[99:09.54] we're gonna we're gonna basically apply this to rendering okay
[99:14.26] in fact i'm just gonna call it render effect from now on it doesn't matter it's just it's basically
[99:20.82] same thing we're gonna console log so this is the example that i always show used to show um when
[99:28.50] i was doing like the i'm gonna actually jump one more stage because because i don't care about doing
[99:35.30] this i'm gonna go right to here okay
[99:37.78] essentially i have a signal i create an h1 element the dom element i create an uh i'm going to make
[99:46.66] this a render effect it doesn't really matter it's basically the same thing create a render effect set
[99:51.86] the text of that dom element and then um create a button give it some static text add a click handler to
[100:01.78] update the signal and then because of this render effect every time i click
[100:05.22] the text updates right you guys have all seen this before
[100:10.18] so the reason this is always so easy to show is because all you're doing is essentially
[100:27.62] assigning text to a single text element right and it's also really easy to show
[100:32.18] i i've done this a bunch of times and i'm gonna do it really quickly right now although i will go
[100:36.66] back to make anything is that in solid we can just go button and go okay well it's a jsx element
[100:44.26] so button with i'm just like basically line by line going okay text content is click me
[100:53.94] and on click handler is this like it's not hard to picture
[101:00.10] how we can go from something that looks like dom stuff to something that looks like this right
[101:12.82] i'm just saying that that this compiles into this essentially it's just an effect
[101:20.82] or sorry this is not an effect it just creates an element with a click handler and this one compiles
[101:26.10] into const
[101:27.14] h1 equals h1 and we put some kind of expression in it which is well actually we can just put this
[101:40.90] expression right in it makes it easier and then we get rid of this this compiles into this essentially
[101:49.38] where it knows that this hole you know where you have an expression it goes okay this has a function
[101:57.06] call in it making a render effect we do this
[102:00.66] our demo still works because we're just creating an element creating an effect that renders the one
[102:07.70] piece everyone can visualize this um because you're just doing this one kind of simple fine-grained update
[102:15.54] and then usually the next thing i do is i wrap this whole mechanism into a component right and i call it
[102:26.26] counter okay and if i take my elements from counter
[102:36.42] and i'll format this a bit and have them be returned as an array of h1 and button and then call counter here
[102:51.54] and spread it in as the arguments again still works and then you know instead of doing separate
[103:00.02] variables we inline the array
[103:01.86] i imagine almost everyone who's familiar with my work with solid has seen me do this demo before
[103:09.94] but just bear with me for the people who haven't because this is fundamental and you're like okay do i need
[103:15.06] an array well let's just make the array jsx fragment instead of an array
[103:19.86] but you know if i format this
[103:25.06] to do
[103:27.78] we we have something that looks like a react component but it literally just has this one
[103:34.90] create effect here and it created a bunch of other dom elements that it just depends to the document okay
[103:43.62] the usually what i do when i when i do this demo is i jump ahead here and i
[103:53.86] go and i create a version of the demo where i actually have multiple counters
[104:01.30] and essentially i show console log here although see they did
[104:08.26] that's something the playground does and i don't know why it does this and milo or someone's gonna
[104:13.78] have to tell me but they did dupe console logs for some reason um see how there are two of them
[104:20.82] there's only one here i i have no clue drives me nuts but the point is
[104:30.66] um after this point whenever we click a button
[104:33.70] the code never re-renders it's just this one effect that listens to that one signal right
[104:40.98] because we create two functions two separate closures two separate components these act
[104:47.38] completely independently if we didn't want them to act independently we they could reference something
[104:52.98] from the same spot we can lift them up you know pull them top level guess what global state now
[104:59.06] they're both the same right because they're just sharing the same instance there's nothing
[105:03.30] magical about this it's just the rules of javascript functions closures it's simply you just construct
[105:08.98] stuff um
[105:20.02] yeah yeah practice well the reason is like fragments are special which we'll get to in a moment because
[105:27.46] they're actually the core of of of where the rendering problem gets in because it's not hard to picture
[105:33.94] this scenario right this is this is basically solid um very fast version of that demo but you get the gist
[105:40.90] of it is these i mean you can actually see it in the compiled output here you'll you'll see like
[105:45.38] basically there's some templates that are just like creating uh elements that get cloned and then you'll
[105:51.22] just like if you look at the actual code for any of this it'll be like clone the template walk into the
[105:57.14] client and call this insert call i'm going to show you how what this insert call is but it's basically
[106:01.30] just an effect that updates the text in that text node and but the core of it is a simple idea that you
[106:10.34] just create some elements and just update the one thing there's there's no like framework like this
[106:15.94] this didn't have to be a component we you know we could have just called the function
[106:19.70] mostly okay
[106:24.02] so
[106:26.74] that's the gist of the demo i think i do one last version to to really nail it in
[106:37.94] um which is i hoist up the signal instead of putting a global scope i put it in a parent scope
[106:47.22] and then pass the value down as normal and then the value times two and then i pass down two click
[106:53.14] handlers which then get applied to the button here so like one adds one one adds two and then one shows
[107:01.14] the count one shows account times two so they're shared state but they have different handlers
[107:08.18] and different like prop values and the key part again is because the only effect is the one that
[107:14.98] updates props dot children here even you see the console log app and a console counter even though
[107:20.98] it like looks like we're accessing values here and stuff you know like while we click there's no more
[107:27.06] console logs this one goes up by two this one goes up by one this one times twos it
[107:31.22] nothing here forces the component to re-render and the reason is that
[107:40.66] we defer evaluation to the very end of the chain we know that if something calls a function
[107:49.62] or has a getter like like like could be a getter like a property access that we need to make this an
[107:56.42] effect when we're talking about components or sorry when we talk about native elements so it updates
[108:01.70] the thing or the attribute but when it's a component the exact same heuristics tells us hey this could
[108:10.90] update it's a function call so it wraps it in a getter what we'll see here is we have create component
[108:17.46] counter and then get children is actually a getter that calls count here which means that
[108:24.74] it's a function call we turned count times two into a function that gets called inside our effect we
[108:31.30] basically just pushed everything downwards we don't need to we just created everything
[108:36.58] well like but then when we update it it's only the effect that goes oh run this effect call that
[108:42.90] function which calls that function and it gets all its dependencies and it does its update we don't
[108:47.14] have to reconstruct the tree in order to update something this is the easy part that people
[108:53.86] understand about fine grain it's very obvious like because if you did this in react even with the react
[109:00.02] compiler although the console logs would try and be smart enough to fool you this scenario when you set
[109:06.10] state in this component forces this component to re-render recreate its vdome now the the compiler is
[109:14.42] smart enough to go oh some of those nodes i don't need to recreate but generally speaking it will always
[109:20.90] rerun this and and it goes oh has something below this changed then sure it skipped the thing that has
[109:28.50] nothing below it that changed but still has to then go into here and go oh yeah maybe this one counter
[109:33.22] depends it in this case it's both of them and go in and re-render this it's unavoidable from a top-down
[109:39.22] structure that even with the craziest memoization you need to execute because if something changed you
[109:47.94] can't just stop you have to like go oh what has changed and go down and down and down and down you can
[109:52.90] stop if you know for sure nothing below this point has changed but if anything has changed you have to run
[109:58.66] everything in between the change that happened and the impact of it we're doing the same thing in the
[110:04.50] sense that we are running everything in between essentially we're when you when you update count
[110:12.50] we are re-running this function that we wrapped in the getter we are re-running this effect we are
[110:19.46] running all the way down the chain it's just a separate um stream of like a separate channel
[110:27.94] than the components the data runs through your components rather than is your components
[110:35.94] right no just a side note not easily
[110:49.94] okay so i i hope everyone's rolling around along so far because this part of the demo is usually
[110:59.38] the fairly straightforward part of the demo because if you understand signals you understand that you
[111:04.90] can put as many functions as you want in between um i'm hoping that makes sense i mean it goes back
[111:11.62] to our initial you know signal and effect you know if i go back to something like this not even this one
[111:20.10] if i go back to the very first one where we have a signal and effect if i decided that i'm gonna have
[111:30.42] you know double count just be some getter some function in between you know count times two
[111:38.02] and i put this in i didn't break reactivity right i see zero and two you know when i set the count to
[111:46.26] one it's just it's always double it if i set you know if i set the count again to two you see zero two
[111:55.30] and then four like my my point is that like
[111:59.78] yes you you can't destructure because destructuring would be like getting rid of this function
[112:14.82] destruction would be like doing this
[112:16.18] now this isn't a function we access the the signal value and and and you accessed it once
[112:27.78] this effect never updates it doesn't even run twice now because when you it doesn't depend on a
[112:34.90] signal it literally depends on a value you go you said the count is zero when it runs it does not track
[112:44.18] um count count count is out here in fact yes lint is yelling at us this reactive variable count
[112:49.86] should be used within gs jsx attract scope like create a factor inside an event handler function or else
[112:55.06] changes will be ignored
[112:56.02] that's the trade-off if if you're gonna make a channel through your app the channel has to exist
[113:14.18] yes yes yeah sorry i'm gonna use solid in my examples here because i'm most familiar with solid but svelte 5
[113:22.26] it was basically designed to be the same um
[113:33.94] um
[113:38.34] derived is interesting because it can do what ryan pointed out to be the problem in solid
[113:45.06] not really you're talking about the fact that derived has this as syntax
[113:50.90] i mean if you look at the compiler the compiler just adds the function
[113:57.70] syntax syntax to remove compilation stuff
[114:01.70] is convenient but it doesn't change what it is
[114:06.26] and another great point you can solve destructuring
[114:15.38] by knowing that something's a component we have a library that came out about four years ago and solid
[114:20.82] uh was it uh solid undestructure or something i mean people yeah babel plugging solid undestructure
[114:30.26] four years ago people have come up if you have a way of saying if he looks for types
[114:35.54] or like denotions if you have a way of saying something's a component you can completely
[114:42.26] go and make it destructuring work the problem is it's a lie just like the lack of function
[114:49.70] in the derived example i was showing here a moment ago like
[114:54.42] yes this is more ergonomic but the second you do something else like
[115:02.58] it isn't component props instead you created a higher order primitive or composable is what i think
[115:10.34] they call them view it's like oh now you can't destructure again because you built something in
[115:15.86] a different scope and you pull it in this is the was the svelte 5 problem that they solved by adding
[115:19.78] classes by giving it a blessed way but it's still the same problem if you use a ruin in a different
[115:24.02] file and you try and pull it into your file you have to wrap it in a function or have the compiler
[115:28.58] automatically wrap it in the function but conceptually it needs to be wrapped in the function
[115:32.26] and conceptually you can't actually destructure the compiler can reverse it the destruction for
[115:37.94] you for an ergonomic standpoint but it's also kind of like not what's really happening the compiler just
[115:45.70] gets rid of your destructuring and then accesses it where it needs to be accessed it's nice until
[115:53.86] all the edge cases where it doesn't work
[115:58.26] yeah yeah yeah it's felt that with dollar sign props yeah these are all if you read my article about
[116:12.98] complexity these are all these are all like com this is it's like the perfect example of adding complexity for
[116:20.34] ease of use because it's like you're not fundamentally changing what it is which means that there's like
[116:26.02] tons of edge cases where that doesn't actually work but it makes like typing it slightly easier but then
[116:31.54] like somewhere else where you actually can't destructure you're suddenly like why is this not working and
[116:35.86] it's like like you might not even if you're a new user you might not even realize it because you thought
[116:41.06] oh i can destructure here why can't i destructure here well it's because destructuring does not actually work
[116:46.82] we just kind of lied to you
[116:51.46] nope stores don't solve destructuring either because the stores are still a getter the problem
[116:57.22] with destructuring is you're calling the function too soon
[116:59.14] right this is one of the interesting things i have some pressure just on a side note from like the dx team
[117:14.74] um you know because we we i don't know if people know you know svelte runes or runes we had the
[117:24.50] very similar same syntax released as a library for solid four years ago so you could have the performance
[117:30.58] and the syntax of like svelte basically four years ago um but i never pushed it because it didn't align
[117:40.74] with our transparency prop thing like we when possible we try to make things the way they
[117:46.98] actually are rather than hide them only for it to break somewhere else and it's fine for different
[117:52.98] frameworks to have different priorities so i get why svelte's different but it's i i it's probably just
[117:59.62] worth noting to people because as the dx team sometimes wants to be like we should just like go put
[118:03.94] that everywhere so that you know when people show solid examples we can show solid examples that like
[118:07.94] look the same and have the same less syntax and i'm like i mean go ahead but like
[118:12.58] we're never going to spend as much effort into it as svelte does because they they care about that
[118:18.26] i don't care about you writing less characters i care about you understanding and you know not
[118:24.66] being confused and like it it doesn't really get us anything because it actually suggests that we find
[118:34.26] value in it which we don't it's okay if others do but we we do we don't so yeah it's a tricky balance
[118:40.74] because the libraries do exist i mean you should probably just go use svelte you know if something
[118:46.18] like that's really important to you but you know just so it's out there and people know or view um
[118:52.74] we've had the ability to have the same syntax with all the solid performance benefits and all that for
[118:58.10] four or five years now it's still there if you want to go use it i just really doesn't matter
[119:16.18] is there a language level subject restrictions one of the most no no it's it literally just doesn't
[119:23.62] make it it's because the only no yeah there's yeah this is just not this is why i don't i'm not a huge
[119:36.82] fan of the compiler approach to this because it's it's literally something that can't be solved so we're just
[119:43.30] lying some of the time for for something like you know what i mean it's it's yeah
[119:50.82] people used to talk about the react just javascript it's always are we closer to that
[119:57.62] the most other first yes i i i think we we've taken the just javascript mantle now for at least out of
[120:03.22] unless you get into like this no build zone
[120:05.14] anyway okay
[120:12.10] getting back to what i was kind of getting at here before we were talking about the destructuring and
[120:22.26] stuff um is there is this transitive property of functions right they run through your whole app this
[120:29.62] is the foundations of fine-grained rendering it's knockout js had this view has it um
[120:37.22] but to the rendering point actually view doesn't find green render like that today vapor will have it
[120:42.34] but svelte 5 has gone this direction as well essentially this even preact technically and quick
[120:50.18] technically have what i'm showing you right now they have the ability to update text nodes directly
[120:55.22] without re-rendering the vdom this is kind of like the baseline of fine-grained and problem is we stop
[121:03.46] there and demos because then people get it and they're like it's not react and then everyone assumes
[121:07.62] that preact signals is like solid and then they see like a benchmark where signals are faster in one
[121:13.06] library than the other and then they're like oh that must mean this other library is faster than
[121:17.06] this other library because its signals are faster and it's like no it actually has almost no impact
[121:23.22] because they don't actually render they you know you sped up the signals and now you're re-rendering
[121:29.46] the whole vdom you know like so let's talk a bit more about um what what happens after this
[121:43.86] yeah i mean if you had a different language feature that instructed it somehow like a decoration of some
[121:51.06] sort like i'm not going to say anything's not impossible i'm just saying javascript doesn't
[121:55.06] not have the syntax or capability to like another one question people have is like instead of having
[122:01.70] signals as a function can you have it just as value like the what's felt compiles to could it be the idea
[122:06.34] of atomics i think that's interesting at least because within a local scope having like a a getter that
[122:12.82] way could work it wouldn't be transferable though the second you actually tried to get it out of that
[122:16.42] file you'd have to wrap it in a function again which is why the typescript problem of functions
[122:22.34] not being able to be stable with signals is so important um that i've been talking about because
[122:26.42] it it doesn't matter which framework you have whether you use dot value like view or or you know
[122:34.50] you compile it with felt where there's no function call or whatever your solid where you call a function or
[122:39.46] whatever ultimately with these reactive systems functions carry reactivity which means that
[122:46.74] at some point you're going to hit the point that calling double count like from a typescript
[122:55.22] perspective i know i'm jumping around a bit but if you go like if double count like if double count is
[123:00.90] nullable essentially and you you access it in here typescript will complain at you and be like sorry
[123:09.22] sorry guy um we don't know that it's not null even though you just did the check because you call two
[123:13.78] different functions it's not stable functions are at the core of signals based reactivity whether they're
[123:22.26] hitting getters dot value proxies whatever everything is a function it's you know it's a different type of
[123:29.94] functional programming
[123:47.22] well native signal implementations will solve this no i mean the native signals implementation is still
[123:56.58] calling functions ultimately there's no language level feature that gives us avoids everything being
[124:05.14] functions yeah anyway
[124:08.74] where to go from this so you can clearly see that you can like chain a value so it doesn't have to be a basic
[124:22.58] value you can pass it through props in components like we showed you know um not here here sorry we
[124:31.30] can pass actually yeah it's this one we can pass it through props in through components and we can
[124:38.10] basically create this like super hyper um updating thing so if you have a dom element we can make sure
[124:45.14] that we do the least amount of changes it's kind of obvious why this happens because we keep all the update
[124:50.58] channels isolated it's like memorization except it's not because it doesn't run any of the stuff memorization
[124:59.94] goes okay this branch is good this branch is not but it can never get it's it's almost impossible for it
[125:05.30] to get granular enough um because it always has to have a starting point which runs it downwards where
[125:14.42] signals are signals are events so they can wake up at any point in the tree regardless of like some kind
[125:22.90] of you know framework concept like a component because in react state is tied to the component when you
[125:30.26] update a signal that are like your state in that component that component will rerun that is the
[125:35.94] fundamental rule it doesn't exist on its own it's not its own event emitter the component is kind of the
[125:41.86] event emitter so a fine-grained system separates the ui from the um data which is not a new idea people
[125:54.10] were doing this back in the day you know when they had like mvvm or mvc and some people kind of go really
[126:01.78] hardcore on the other side where they're like let's you know pull our models out here our views here keep it
[126:07.86] all clean separation concerns i'm not suggesting that i think actually the overlap is very ergonomic
[126:12.90] for modularity and encapsulation these things do roughly coincide with each other don't keep all
[126:18.74] your state here and all your ui over here put them together just recognize they're not the same thing
[126:23.94] that's the fundamental pitch with you know reactivity and signals with rendering but
[126:33.30] we need to do more than this we need to do more than just put a bunch of components on the page
[126:38.82] and update a bunch of values as i said if that was the end of the world you know end of all we
[126:45.86] wanted to accomplish then we you know you you can see this is pretty straightforward the the first place
[126:52.90] where we start hitting challenges and i'm going to keep this counter component because it'll just make
[126:58.18] our our life a little bit easier i think um i think this is probably where i want to stick it this one's
[127:06.18] still working yeah okay yeah so i think i'll use this as a base i'll get rid of some of these other ones
[127:10.50] is what if we have a decision control flow is the thing that quick or preact does not have if you need
[127:25.30] to go branch a versus branch b it's a vdom re-render
[127:32.34] how do we do control flow when we are using the signal system because so far everything
[127:39.54] has been one-to-one there's no decision right and the easiest way kind of conceptually here
[127:47.22] is if we have a decision i'm gonna make a decision component let's call it and in our decision component
[127:56.66] it's going to have a signal in it okay and the signal is going to be show
[128:01.78] and set show okay so just a boolean create signal okay and we're going to start it to true okay so we know
[128:16.90] conceptually that this is going to make a decision for us so we'll think to ourselves okay like if show
[128:24.74] then i guess we need something to show so we'll be like if show um props dot children otherwise
[128:33.78] um let's return no okay so this might be what we kind of first think about right actually i'm gonna
[128:48.34] making an empty array just for the sake of this um and what i'm gonna do is actually we're gonna make
[128:56.74] we're gonna yeah do i want to use gsx it doesn't really matter it doesn't need to be that i'm just
[129:05.38] going to make it like uh children as a function this i i might decide against this later but but essentially
[129:14.90] instead of calling counter now what we're gonna want to do is we're gonna say can we take decision
[129:20.66] and
[129:23.86] we're gonna make it a a function i think uh
[129:29.54] if i use gsx this would be more clear but i also want to really illustrate it this function for children is going to be
[129:40.42] return counter i guess counter is a function already so i don't need to do it i'm just doing
[129:46.02] this to spell it out i hope it's clear what i'm suggesting is we're passing this children function
[129:51.30] to decision that says render this counter component so the the concept is if show is true then it renders
[129:57.78] children otherwise it's not and if you look our counter still works right this is a very
[130:03.06] basic show component essentially where the problem is obviously we we need it to actually be able to
[130:10.02] control the decision point so um
[130:17.54] let's create a button somewhere it doesn't really matter um i mean we could create a button in here
[130:26.02] but i don't want to i don't want to muddle it too much let's just uh let's just let's just make the button
[130:37.38] out here const button equals whatever we'll just use jsx as a short form it makes it convenient but button on click
[130:48.50] and we're we want it to toggle the set joe essentially so um
[131:03.30] i could hoist it out but i'm gonna leave it in for now we're just gonna have a function called set
[131:09.38] that goes set show equals that i'm and put it out here okay and then on click we're gonna go set
[131:17.78] um and this is solid's function syntax is basically not set okay um
[131:28.34] and this sorry it's function the okay hopefully you guys are all are still following at this point
[131:36.02] right i i'm doing this very basic right now um type scripts complaining this doesn't exist
[131:47.22] but you can see that it's showing and it's updating and then if i add button to to our ui now
[131:57.14] oh i gotta get the button some text um
[131:59.14] button let's give it uh toggle okay
[132:06.82] it's there i click toggle nothing happens
[132:22.66] yes yes yes um this is what i was talking about earlier with the components is um
[132:29.62] the on click is a function handler so it should be but we turn functions or expressions into getter
[132:38.82] getters we we turn them into functions essentially um like yeah i closed the example down specifically but
[132:51.78] this is a good one here
[132:53.06] in this example where i passed count as to the children here solid changes children to a get
[133:07.06] children function returns that you access it by just props dot children but it turns it into a getter so
[133:11.94] count does not get called until you use props dot children which is inside this effect over here where it goes
[133:19.46] passing a function that reads props dot children which is actually
[133:22.66] this right here props dot children this is technically calling
[133:27.62] this function
[133:39.22] yeah yeah it's interesting though because this thinking around these are more interesting because if
[133:46.50] you start having a problem with argument order though right like which prop is first
[133:51.70] um if if you could denote a component as being the thing and argument order didn't mat like so that you could pull them out in any order essentially when you authored it and you didn't use an object
[134:08.26] like it's interesting then you wouldn't even need the destructuring because destructuring
[134:14.90] wouldn't be a thing you wouldn't think of it as an object anyways
[134:17.46] but also objects are good because shapes change you can spread props into jsx which means that the shape of the props can change over time you can send some props and then send other ones different ones later um which means that
[134:35.78] like destructuring has its place because the arguments can change
[134:50.42] yeah this is the answer uh there's a question that goes but are all function calls are only wrapped to once wrap
[134:57.06] no all function calls we can't tell the difference
[134:59.94] yeah the compiler wouldn't know this is a very very simple heuristic um
[135:13.94] i mean i guess if you force every user to use typescript
[135:20.66] maybe that's more and more of a reasonable thing but
[135:23.62] um i built solid js in a world in which you could not say you cannot use my framework without typescript
[135:36.10] built for javascript and um anyway yeah so getting back to this why does this not update
[135:42.50] well it's because you can see it eslint's already telling us
[135:49.62] we we we call this function once and we're reading this so there's no way for it to update
[135:58.98] right so the only way that we can have this update again is the same way we've always had an update again
[136:10.34] which is wrap this in a function right
[136:14.58] the the the interesting part now is because now the this can change like because it's wrapped in a
[136:24.74] function it has the ability that when to rerun this piece if show ever changes
[136:29.46] this is actually how jsx and view works if you've ever seen it they always return a function
[136:35.70] for the whole thing in solid we don't return a function for the whole thing it's more granular
[136:41.46] but it's this it's the same concept that you have to return a function um for control flow
[136:48.10] because otherwise it could never change
[136:50.42] right but if you think about this this is not a terrible thing because this can only change between
[136:58.42] true and false so when it's true it renders it once when it's false it goes to this branch
[137:04.98] once and it because it can only swap either or you're not doing anything wasteful if someone
[137:09.46] changes from true to false there is no choice but to switch but now we have an interesting problem
[137:14.66] down here because we can't just spread our uh
[137:19.14] our our stuff into here because now it's a function call right before it was elements but now it's a
[137:29.86] function call so what do we do well we have to like get away from this and we have to actually build
[137:39.46] our render function so to speak and it involves having this mount element right we know we need
[137:45.86] this mount element the app element but instead of appending it we do what we always do we create
[137:55.70] a render effect and
[137:58.18] const l or mount let's call it mount is going to be our our main element
[138:08.26] and now instead of append i'm going to say let's do replace
[138:14.50] children it's the same api but it just replaced everything this is a very rudimentary look at um
[138:22.58] rendering because you don't always want to swap everything out that being said
[138:26.42] um if you pass the same element again you're not necessarily recreating anything
[138:31.62] um so it's it's not the most inoptimal thing i can think about the idea here is we're going to
[138:40.42] basically make an effect um that
[138:44.18] puts this stuff in now we have a problem here though because decision
[138:55.06] which is like our code coming in like
[138:59.06] like maybe maybe it would help to actually just pull this function render for our for for our sake and
[139:06.90] then pat what do you pass to render function you pass
[139:09.46] code and you pass the mount element right and so uh let's just do this
[139:16.58] okay
[139:19.94] so oh actually sorry my bad it's more like this we're going to render
[139:34.18] um
[139:34.58] our decision
[139:38.66] and we're going to
[139:45.22] our render function is going to have a create effect
[139:51.70] that
[139:54.26] is a mount replace children i'm going to keep the button outside of the rendering i know this is kind of
[140:02.42] odd
[140:02.74] just
[140:07.94] we'll do something about that later we'll take our mount element and then we'll render button
[140:14.66] and then we'll split in code okay
[140:18.26] and the problem as we already hit here is that this code is a is a function so
[140:31.62] we might do something we might do something like while while type of
[140:37.94] code equals function
[140:44.42] code equals code right now we're going to just unwrap it right and then we'll do this now
[140:58.42] what my guess is i have another bigger issue here which is why this is not compiling at the moment oh
[141:11.78] there's what's going on there
[141:14.98] what's going on there's what's going on there's what's going on there we're going to do that work
[141:19.54] children is not a function
[141:24.10] oh
[141:28.10] because we're going to do that because we didn't pass um our children in which was what was our
[141:32.74] children it was a uh um i i'll just put counter and you guys know it's counter function
[141:47.62] i can't access button before initialization is that a typescript issue issue it's kind of funny
[141:56.50] because this button is here it's not isn't that is a little bit funny because it oh and you know what
[142:05.70] what it is dumb me you have to actually instantiate it before you call render all right we did it
[142:13.70] okay okay up toggle oh still not working
[142:18.74] why is it still not working
[142:31.46] sorry chat you guys like slight delay um
[142:38.90] s here is just the uh functional form of like the previous value so it's saying like
[142:46.02] set show it's going to be true and then we're setting it to not true
[142:51.86] all right so why are we not getting it i guess the first question see i told you this this part
[143:00.02] might be a little bit rough because i haven't done this for console.log let's let's see if we're
[143:06.34] actually pressing the button because this one still works this one is pressing the button so we're
[143:14.58] setting s to not s okay which should
[143:18.58] trigger
[143:25.78] yeah i mean we are in a sense this is the base the baseline here because what should be happening
[143:35.22] here is that when this runs the code here inside this render effect well it's a type of function it's
[143:42.66] essentially going to get a dependency on on essentially on show and when we set show from true to false
[143:53.86] you know let's just for fun let's just go set show false
[144:00.74] it should now when the effect runs again see if we go console dot
[144:07.30] effect
[144:11.86] see it runs again well i mean we can see what it gets when it runs again
[144:26.02] okay interesting because it's actually saying that it's still getting the array when it calls code
[144:43.06] which is okay let's rewind toggle it back to h1 tuning toggle back around the second time
[144:52.18] let's do this
[145:13.06] it's not running decision again that is interesting
[145:26.26] oh do you know what it is i'm such a dump i named my variable here
[145:31.14] the same as the the variable that comes in
[145:47.62] um yeah okay sorry about that
[145:56.10] um let's let's let's just make it like uh some local
[146:02.18] scoped thing i'm pretty sure this is the problem it's like we're rewriting it so it never tracks again
[146:08.90] is my guess um
[146:17.86] oh i hate when this happens
[146:33.22] i froze my browser
[146:34.34] oh this this is actually really annoyingly bad
[146:41.30] this is the this is the one downside of using the play the the the playground because if i don't save the spot
[146:50.98] it's it's an infinite loop
[146:59.14] yeah i can't i can't change the code because it i froze it uh by creating an infinite loop
[147:05.22] quick memorize it see i can't even select the code the debug tools are frozen
[147:11.14] other yeah yeah it's it's just gone
[147:23.38] this the funny thing is this happened to me during front front end masters
[147:32.90] bam ah that that is that is that is so sad
[147:40.26] that is so sad
[147:43.46] okay
[147:53.38] okay yeah it like kills the whole process on that thing okay um let me get the best the right
[148:05.70] example out again uh
[148:07.38] we'll just keep the counter
[148:20.90] the screenshot exists in the stream
[148:22.50] yeah because essentially
[148:28.18] what i what i was trying to get to here is that
[148:34.90] code
[148:48.50] that's funny how everyone's chatting to me about the screenshot thing uh
[149:03.62] add some typo first to prevent the infinite loop yeah that's usually
[149:09.94] helpful
[149:19.38] function equals function function equals function
[149:37.30] sorry this will take me a second to recreate it
[149:51.46] function and then
[149:56.02] mount dot replace
[150:01.94] okay let's just get the render code working
[150:14.10] all right let's just get the render code working
[150:22.10] in the basic case document dot get element element by id app
[150:29.22] element by id app and let's make it
[150:32.74] let's start with just making a counter again
[150:36.18] and then
[150:43.78] let's make our just show component or
[150:55.78] and then call it call it toggle more effective
[151:09.46] show set show
[151:17.22] turn turn function of show then return
[151:29.38] turn function of show then return
[151:38.34] so i'll keep doing this this way
[151:38.98] so now keep doing this this way
[151:40.02] children
[151:42.42] and then
[151:47.78] toggle
[151:50.34] and then
[152:03.78] add the button back
[152:12.82] the the the the the reason that it's a bit of a pain right now is because we can't
[152:19.46] um
[152:20.58] we can't
[152:23.38] right now we only understand functions we don't and we assume arrays we need to we're gonna need to do more than
[152:33.14] that in a minute
[152:33.94] that in a minute but to get started i just wanted to show the function thing because it's simpler than handling multiple arrays
[152:40.42] um
[152:41.94] i could stick it in here to be fair
[152:54.50] right like there's nothing to stop me from doing
[152:56.74] button
[152:58.58] like
[153:00.18] here and put button here
[153:03.22] and then
[153:06.82] essentially
[153:08.42] const button
[153:10.10] equals
[153:11.38] button
[153:22.42] right i'm gonna spread this
[153:23.38] right i gotta spread this
[153:23.38] and then
[153:25.78] toggle equals uh on click
[153:40.66] set show
[153:47.22] not
[153:48.02] not s
[153:48.26] toggle
[153:49.22] of course you need to put in a function wrapper format it okay
[153:54.98] click
[153:57.62] toggle
[153:59.30] click
[154:00.42] toggle
[154:01.30] okay
[154:01.62] sweet
[154:02.50] all right
[154:05.06] so
[154:06.18] um
[154:08.02] um
[154:16.82] is foo better than foo
[154:22.66] no it's just i haven't shown you guys that all i've shown so far is that fragments produce
[154:27.62] arrays the fact that fragments produce a function you should wonder about at this point
[154:33.94] right
[154:34.74] so
[154:36.58] okay
[154:38.34] we're back
[154:40.58] essentially
[154:41.78] we made our our simple control flow component uh that toggles and
[154:47.06] as you can see
[154:48.90] control flow
[154:50.18] itself
[154:51.14] is just another function but what it means is that
[154:54.26] our it isn't enough just to have an effect the effect
[154:59.38] that does the rendering that does the inserting like when you when you have an attribute you can just
[155:03.78] go give me the value
[155:04.82] and
[155:05.94] set it you know like set the text content on this div but when you're rendering arbitrary stuff like
[155:13.30] this is what the insert function is essentially i called it render here
[155:17.78] but we are basically creating the insert function right now the one that i showed from
[155:23.70] the compiled output is it needs to actually understand that there are functions in the
[155:29.78] chain because any decision point at minimum has to be uh referenced by a function
[155:34.98] like there's no other way to
[155:38.82] to do it
[155:41.06] right and what you're going to notice too is that
[155:44.98] when i click the seven and eight and i toggle it off and toggle on we reset back to zero and the
[155:50.50] reason we set for zero is because
[155:52.50] essentially
[155:55.46] the state is being created in that child component so when we remove it we're actually
[156:03.46] removing the state with it right if i hoisted the state up here global state to do then
[156:10.26] when we toggle it and bring it back the state will be preserved and we'll be able to continue
[156:15.78] continue it right so this isn't too much of a revelation but
[156:21.94] it starts imposing some of the restrictions you have to think about when actually doing fine
[156:28.34] grain rendering because it's not just about pinpoint updates you actually have to reduce code down and
[156:35.30] at the point of render into an element it's like it's fairly straightforward because let's let's do
[156:42.66] something a little bit more fun let's um let's make our function uh because this still works uh toggle
[156:53.22] let's make our function
[156:54.74] actually toggle a toggle right so like this i think i got that right toggle children counter toggle toggle
[157:14.98] uh um what did i do wrong
[157:16.74] because toggle returns uh do you guess
[157:35.06] i shouldn't need to though because the the toggle always returns an array
[157:41.46] oh it's because this one's not an array
[157:46.18] thank you dev took me a second it's because that one's not an array right
[157:57.62] which means i need to spread it in i think
[158:00.18] yeah the the doing this with arrays is already starting to show like some of the complexity here
[158:15.14] right because we we we also need to understand arrays essentially because i don't want to have to
[158:26.26] try and force because when toggle comes back it's a function so we can't spread it yet
[158:32.18] and then this
[158:37.22] actually
[158:39.54] let me think here because toggle we call counter toggle itself returns a function
[158:45.94] and then we call toggle on a function of a function the problem is this yeah this this is what's killing us
[158:56.26] um because it it assumes yeah see i'm this is the problem with adding button here because
[159:03.54] we're already getting into fragments fragments are tricky because when you have it's fine we can go
[159:13.38] here i wasn't ready to go here but we can go here when you have a dom element um
[159:20.18] yeah see this is this is actually exactly why i wanted to bring the uh
[159:25.70] yeah see i'm gonna cheat we're gonna get rid of fragments really quickly
[159:33.86] i'm gonna make that a single element
[159:38.02] we're going to
[159:39.06] make this null
[159:43.54] we're going to make
[159:46.58] this a single element
[159:52.58] yeah i'm
[159:55.30] i'm i am gonna i am going to shamelessly cheat
[160:03.06] because i don't
[160:04.58] want to get to fragments yet it's too complicated to where we want to be right now
[160:11.62] we just need
[160:13.62] children children
[160:26.34] all right
[160:26.98] oh see but this is cheating too much
[160:36.02] because i'm basically building my own render function here right you see what i'm doing
[160:43.86] like i'm creating a div and i'm
[160:52.50] i'm cheating too much okay see this is this is the problem you don't think out these examples far
[160:57.54] enough i had the right idea originally
[160:59.86] where i hoisted the button out
[161:04.66] all right
[161:12.10] but then if i hoist the button out it's going to be like increasingly a pain to
[161:19.06] to to show the composition here i mean it's fine
[161:23.78] you you're you're you're right i am trying to get there in a specific way
[161:44.66] it's it's just it's it's hard i'm trying to find like the baby steps way of getting there
[161:48.66] um but it's it's it's difficult to do because there's two big um kind of mental
[161:57.86] realizations that come in this in this zone one is that um everything that's a control flow has to be a function
[162:09.62] even like nested so you you you end up with functions of functions of functions that's what i was
[162:14.66] trying to show like if i forget about these buttons for a second and just like after the fact here you know like go
[162:23.86] set time out
[162:30.50] actually i don't even have to do it after the fact um
[162:34.26] what's the problem here code return function show children function
[162:42.02] this is fine because it's an isolated so there's no function here it's just a node
[162:47.22] children is a node calls function returns function the funniest thing is i feel like i'm missing something that's like
[162:57.46] console dot log function i'm like missing something that's like
[163:02.26] yeah so it's a development
[163:05.94] the error is not helpful
[163:15.54] maybe if i open it up here i can see it better
[163:24.42] it's one of the spreads i'm doing
[163:25.86] but i'm only doing one spread
[163:34.42] oh
[163:38.50] get rid
[163:42.58] yeah
[163:43.86] yeah
[163:46.34] yeah thanks dev
[163:49.14] yeah yeah you guys got me thanks
[163:51.78] okay okay okay sorry
[163:54.90] what i'm trying to get at is
[164:01.54] you end up with
[164:03.38] this scenario that looks like essentially
[164:06.58] like a function
[164:08.74] that returns a function that returns a function and and so on right and
[164:19.94] initially when i was creating solid
[164:21.86] i didn't know what to do with all of these i'm not going to lie
[164:25.70] while this
[164:28.82] seems kind of safe enough to begin with
[164:32.26] you end up
[164:34.66] um
[164:36.74] yeah okay yeah this is this is this is actually going to be better now
[164:43.22] um
[164:44.02] go const setters
[164:48.10] equals an array
[164:49.62] setters
[164:51.38] dot push
[164:53.46] that
[164:57.86] show okay
[165:00.74] i mean this would be even nicer
[165:06.98] i think i think i can start with two
[165:08.26] i'm just trying to think of the best way to show this because
[165:10.66] the
[165:12.02] the
[165:17.22] the problem
[165:18.74] and i'm i'm actually going to put setters
[165:25.14] equals this here
[165:27.94] because i
[165:32.26] the the problem that we're going to hit
[165:36.42] in a second here and i i'm hoping people are will see this right away when i actually do it and
[165:44.18] i'm going to make two buttons
[165:45.22] const
[165:46.34] button
[165:47.22] one equals
[165:51.38] button
[165:52.42] unclick
[165:53.94] setters
[166:01.38] zero
[166:08.26] that's not s
[166:09.14] toggle one
[166:14.66] button
[166:28.50] two
[166:28.90] button
[166:32.50] one
[166:35.30] button
[166:36.10] two
[166:36.50] i did it the same stupid thing again
[166:45.70] learn better do it before the render okay
[166:49.46] okay
[166:53.14] what what i'm trying to get at here is
[166:56.90] oh yeah and i should change the text here is
[167:06.10] and i'm going to console dot log
[167:16.50] toggle
[167:18.42] so toggle oh yeah this is i told you that the fact that it doesn't show all the console logs is
[167:27.78] really annoying
[167:29.06] toggles toggles toggles twice now toggle two is
[167:34.26] the closer one
[167:36.90] when i click toggle two
[167:39.38] that's funny it's not even working but no matter which button i'm clicking right now it's actually
[167:49.30] it's actually
[167:50.50] this is what i actually wanted to show but i wanted it to actually be functioning as well
[167:56.18] but whatever button i click now
[167:59.94] um
[168:01.14] both
[168:01.54] toggles
[168:03.38] are getting called
[168:05.06] right this is this is react
[168:07.46] re-rendering uh in in a sense like it's the whole thing and ideally
[168:15.22] we should only toggle the ones on on the inside we shouldn't be like redoing the whole thing right because we're in we have one render effect in our whole app other than the the one on the count so we have two we have the one on the count
[168:27.94] the count so we have two we have the one on the count and then we have this one so which means that
[168:32.10] essentially every time we do any top of action like this toggle
[168:38.58] um
[168:39.86] it's it's calling both it's calling both right
[168:46.18] yeah i there's something not quite right with my logic here though for it to um
[168:55.54] for it to not be doing the hiding because
[168:59.30] because what what's happening here is
[169:05.38] we're returning a function
[169:07.30] and we're just going through so
[169:08.90] what does this render effect depend on it depends on show
[169:14.18] of both of them
[169:17.30] and the show of one of them calls children which creates
[169:21.46] the the show of the other one now these are nested in functions so they're in separate contexts
[169:26.42] but this unwraps them all at the same context and it just recreates everything
[169:34.18] right the fact that the toggle doesn't matter is annoying but it doesn't actually
[169:37.94] stop from what i was trying to demonstrate um which unfortunately only works when the consoles open
[169:44.74] um which is that toggle gets called twice i believe every time i call this that's twice
[169:53.14] no matter which one i i hit it's going to get called twice and that's not good it suggests that these
[170:00.34] can't be in the same effect now when i first created solid i didn't know actually know how to solve this problem
[170:07.38] so i did something
[170:09.22] kind of interesting
[170:12.90] i decided that
[170:15.30] we would recursively create render effects so
[170:19.46] basically up here where we're doing the main render
[170:25.22] i i always tell people that solids like effects and effects and effects right
[170:29.94] um i would actually like wrap
[170:32.10] basically wrap
[170:35.38] this
[170:36.34] in a in a in a crate effect
[170:39.22] oh i did it again
[170:41.30] while loops are very dangerous
[170:59.94] i can't open elements unfortunately
[171:14.10] i can't right click i can't open the thing the only thing i can do
[171:20.74] it's it's it's almost okay because i'm almost done this section
[171:23.78] i'm going to talk to this a moment before i lose all my my lovely work
[171:40.58] yeah i'm just going to talk to this instead of rewriting the code again
[171:50.74] we'll we'll jump to the next topic after this
[171:52.66] what i effectively what i what i would do
[172:01.62] is whenever i was calling an insert function when it came across the function it would go in
[172:11.46] and create an effect inside an effect now the the challenge with creating an effect
[172:17.54] inside an effect is you need
[172:19.94] both pieces you need the node that you're going to insert into
[172:24.18] and like and the code like you have the code but you also need to know where you're inserting
[172:30.98] into now if it's like this where it's a single chain
[172:33.30] it's going to uh they didn't let me get away with this um it's it's going to essentially
[172:42.74] reference that same element so even the if the if the lowest level effect updates it's just going
[172:50.66] to write that its contents into the element if something higher updates it's going to create
[172:54.90] another it will recreate the effects below it and then insert into it but what it means is that you
[173:01.06] basically have this ability um to separate like on one side the control flows are sending functions up
[173:12.18] and on the other side um
[173:18.10] yeah i'm gonna have to refresh this
[173:26.82] yeah at least we have this piece of code so i can talk to it
[173:36.18] thank you dev
[173:37.06] i'm just gonna pop this code in so we can look at it um i don't know if i'm gonna spend time getting
[173:49.78] it all going again
[174:02.58] it's funny it's like
[174:18.58] it will format certain things but it won't format other things as long as i get it back to being
[174:26.02] legal javascript i think the formatting will work
[174:31.38] it's weird that it's not like actually missing a semicolon thank you
[174:48.58] oh it's that one the one before the return statement
[174:53.78] no it's that one before the setter or that one now the problem is people say how jet semicolons
[175:02.74] are are optional they aren't when you have a function
[175:10.02] next two that's fine i can just separate it out
[175:25.06] yeah it's it's it's it's fine what i mostly wanted to talk to talk to was
[175:45.70] was the code in here without
[175:59.14] what i wanted to talk to was was this in here right this part of the loop
[176:11.86] okay okay um what i wanted to talk to was was that in here right this part of the loop
[176:27.94] is that if it's if it's a if it's a single um element this is pretty easy to just like replace
[176:47.62] the the children you know um
[176:49.86] it's actually this is function isn't it
[176:55.14] but um
[177:08.98] how did you get so close to the actual code this is actually funny because it's it's actually
[177:15.54] it's almost it's almost right
[177:24.02] funny
[177:34.02] render
[177:34.42] only part it's missing is the actual call to render i think anyway um
[177:42.26] that's a syntactically correct it'll crash again i i was getting to the end of the point
[177:51.30] my point here is um which is mostly that like
[177:59.54] while this wrapping seems kind of fine it can be incredibly um you know wrapping each one of these
[178:07.54] in a crate effect it can kind of like solve this problem to a certain degree um it it gets a little
[178:14.90] bit more complicated when you have fragments because now you're replacing parts of your ui not just
[178:22.02] replacing a single value in in the index and when i created solid initially i actually used like fake
[178:30.02] special fragment type nodes actually it wasn't just because the dog there's no the problem with
[178:36.42] document fragments is they lose their children so i like did this trick where i'd keep references and
[178:41.38] each nested effect could like operate on the specific portion of it
[178:45.78] as i said it was expensive and it was complicated so i'm actually kind of not going to go into too much
[178:56.02] detail of what that looked like because i got rid of it the the second problem um is is context
[179:07.62] i guess trying to make me crash again
[179:14.74] um the the second the second problem is is is context
[179:20.10] and because
[179:28.74] if if you are passing functions out of the of the thing they're no longer executing underneath the context
[179:42.34] provider you like can you picture like you create instead of this being a toggle this is a context
[179:47.22] provider and you're literally going like create context and then the functions are literally
[179:54.18] passing out and getting evaluated by something above it like some effect that's higher up
[180:04.90] so like
[180:05.38] i i i i i started here because i assumed and i think most people who make reactive libraries assume that
[180:16.90] people can really just pass functions anywhere if you guys remember old solid um i mean it still works
[180:23.38] in solid but if you get you delete this it still works because you can just pass a function in and because of this
[180:29.46] recursive logic on insert it will resolve it we don't do that for attributes but generally for inserts you
[180:37.38] could do that but if you look if we do this now you see this like
[180:40.66] type error because i actually made this illegal even though it works in solid 1.7 and the reason for this
[180:48.74] besides it being really confusing when you go from here and then suddenly it goes this times two and this
[180:56.02] doesn't work and you actually have to change it now to here um this is an old knockout
[181:00.26] problem um beyond that being really annoying to deal with um
[181:05.62] the the consistency of being able to pass like say always pass as a value is a good mental model
[181:15.22] it was that people were taking components fragments whatever and just passing random
[181:21.78] functions in because they realized they could just execute them by passing them in like you
[181:25.86] could have a component that doesn't take a function and people just like for children people just pass
[181:30.74] a function in like suspense and what would happen is it would get passed through the component because
[181:38.90] they go you know props.children and get a function and then pass it like into something that would then pass it
[181:47.62] through like this problem is something that i call onioning um where essentially on the reactive graph
[181:54.58] side you're always putting functions and functions and functions and then on the other side
[181:59.22] you're always unwrapping the functions um so it's this two-sided thing and this is fundamental to fine grade
[182:06.58] um and my initial approach was because i assumed that people could pass functions wherever the hell
[182:14.66] they wanted was that i needed to guard really heavily on effects and make them as granular as possible
[182:20.34] however
[182:22.74] that means uh
[182:26.74] you know that that doesn't solve the context problem
[182:32.18] so the solution to the context problem is actually not that difficult
[182:36.02] you basically can specifically in things like context providers also do this thing
[182:47.30] that's why like the children helper in solid if you guys are familiar with it basically goes through
[182:52.98] and calls all the functions through
[182:54.34] but
[182:56.66] we have to be careful
[182:59.62] of this double toggle problem that i showed before where it calls if you blend them all together
[183:08.34] then you're gonna call what
[183:12.90] if you blend them all together you're going to
[183:17.86] put them all together in here if you call function function function
[183:20.90] your nested control flows under your context provider would also
[183:24.58] completely wipe out like react does
[183:26.98] so how do you solve this problem
[183:31.54] the answer is actually relatively simple
[183:35.78] you wrap all the functions you return with create memo
[183:43.46] now as i said i would have liked to probably show this um a bit better but if if you wrap the functions
[183:49.94] with create memo at the control point control flow points it means that um
[183:56.26] even if you are unwrapping the functions
[184:03.54] they'll return the same previous value unless they've changed
[184:11.30] smells like react
[184:12.18] but it's react on each individual thing basically i'm i'm getting there um
[184:25.70] there is a difference from react which we'll get to as well but you start putting memos create memo on
[184:36.58] on the control flow functions you return this way that they isolate so around the time i release
[184:41.22] a solid 1.0 i had a children helper that literally went through and wrapped every function you
[184:48.42] returned in create memo and then i had an insert function that basically wrapped every
[184:54.98] thing that it got coming back out the other side um in in render effects
[185:00.90] it worked but it tried debugging that code it's like playing ping pong because you like you're you're
[185:08.74] wrapping everything on one side and then you're like wrapping it again on the other side
[185:12.58] and as i told you new area no one had been working on this stuff um you know solid was still the top of
[185:24.26] benchmarks with this because this only impacted areas where you weren't directly going into a div because
[185:32.90] a div is where it stops once you hit an element you just render the thing in it's when you start putting
[185:39.22] control flows nesting of control flows when you start creating maybe fragments as i said originally
[185:44.74] solid was using uh effects for uh render effects for fragments but then i was like oh this is really
[185:52.02] complicated for bookkeeping so we started turning them into arrays with memos for expressions right which
[186:00.82] is where i was getting where someone someone earlier in the stream asked if like it's a better return a
[186:05.30] function or return uh uh a fragment with just one expression well it it just makes it into a memo um so
[186:12.98] fragments would memoize the reactive expressions not components because they're not necessarily going
[186:19.62] to return the you know if they return a function they should memorize it themselves but you know any
[186:26.90] like we can i'll just open another playground just so we can see this really really simply um
[186:34.66] i'm just going to make a fragment down here const f equals show you the rules for fragments
[186:41.38] d create comp let's just do comp let's do s signal function okay here we go so what we got here is
[186:56.10] three different types of expressions for this f here okay if we go and look at f what you're going to see
[187:02.10] is an array with d directly because it's just a simple value create component directly because it's a
[187:09.62] component and then s is a memo of s or if it's s times two expand it out it's a memo that wraps s
[187:18.58] so
[187:23.86] in a sense getting back to what i was talking about here
[187:32.10] there's a lot of wrappers but only in the case
[187:38.98] like each dom nodes is a reset each nested dom node is a reset that's why when i did the example
[187:46.10] earlier and it turns this into a div that was my little cheek at a cheekiness of doing a reset because
[187:51.78] technically it's just a node element it handles its own state in isolation right so this is actually one
[187:59.54] one of the biggest difference in a sense because what you can view is fragments and control flow in
[188:08.66] between your element and um yeah basically fragments and control flow in between like where your state
[188:17.06] changes and your elements act like mini memoized auto memoized v doms every time you hit a native element
[188:24.50] it stops and it starts over again which is different than react which is a whole v dom
[188:32.74] so
[188:32.98] yeah uh yeah where i'm going i realized in solid that this was like crazy amount of wrapping like people
[188:46.82] didn't hit this problem very much because the your control flows were are generally not that nested and
[188:53.38] your fragments do hit elements and you know it's it's it's generally okay until you start
[189:01.14] getting into that over wrapping on both sides loop like with context providers
[189:05.54] and then i i realized something
[189:16.66] no see inside of div you don't know the the we we just do multiple we do well let's let's take a look
[189:25.78] we do multiple effects or we do one effect that writes to group we have a mechanism for grouping effects
[189:32.66] um so yeah mix but like yeah i mean let's look at some compiled output look at the difference between
[189:42.98] this and this right here it is what we actually do is in this case there's actually because we separate
[189:50.58] our inserts and we don't group them um we actually create three effects one for
[189:59.70] this is an interesting one why is this okay no this insert d is not a function so this one will just
[190:06.58] do the insert logic normally this one will do the insert logic normally as well this one will pass a
[190:13.06] function to insert which will create effect on the inside so we just but essentially we separate into
[190:20.26] three different insert calls and then um there's i i think we i i decided that inserts shouldn't
[190:29.14] group together um because generally speaking you don't need to reevaluate them together usually
[190:37.22] attributes don't carry as much expense so it's kind of like a heuristic thing but what what i what i was
[190:45.86] trying to get at is i realized though that there is a simple pattern that avoided us from having to wrap
[190:53.86] everything all the time on both sides the first thing that i realized was that
[191:00.66] if we memoize the things that matter like those fragments or control flow places where logic can
[191:10.02] split and run independently a children control flow doesn't need to wrap each one because all the key memo
[191:19.46] places are taken care of the only thing you have to separate is the the first one what i mean by that is
[191:28.58] if you pass if you pass a provider and you pass props dot children you don't want props dot children to get
[191:40.34] wrapped up with the children it returns you want to create to happen and then separately unwrap all the
[191:49.14] things it returns because you never want those you never want the update of the things that returns to
[191:58.50] cause it to recreate them again it creates a loop it blows everything out so as long as you separate the very
[192:04.42] first one instead of like basically if you go if if it's a function memoize that then make a separate one
[192:12.58] where you just go infinitely chugging through these while it's a function you won't cause um you won't cause it to
[192:26.50] blow itself up
[192:29.46] so as long as i prevented the end user from just passing random functions everywhere like i talked
[192:37.14] about in solid 1.7 by making it illegal like it's not going to matter in a div but people start doing
[192:45.78] that in components and context doing that as long as i we prevent that it's a simple thing to do
[192:53.94] it meant that we didn't need to re-memo wrap everything essentially we can just
[192:59.30] trust the compiler to put the memos in the right place and i realized much later probably solid 1.7
[193:07.62] time period or 8 that we didn't need to wrap all the effects we only needed to separate again off the
[193:15.38] the one level and then we could basically just fire through these because they're already memoized
[193:23.94] in the right place in the right place and they're already in the right place so i'm not going to
[193:28.58] the right place and i'm not going to open the right place and i'm not going to open the right place
[193:30.66] so i'm not going to open the right place and i'm not going to open the right place so i'm not going to open the right place
[193:32.66] so i'm not going to open the right place i'm not going to open the right place
[193:34.66] so i'm not going to open the right place and i'm not going to open the right place
[193:36.74] so i'm not going to open the right place so i'm not going to open the right place
[193:37.94] and i'm not going to open the right place and i'm not going to open the right place
[193:38.94] so i'm not going to open the right place and i'm not going to open the right place
[193:39.38] i i kind of came to an interesting realization um while working on solid 2.0 um which is that
[194:02.82] do you know how many functions you're passing around yeah i mean what i realized in solid 2.0 was
[194:08.82] that some of you have might have seen that i've been working on stuff where i my create render effect
[194:17.70] is split um as an api right we're all accustomed to um
[194:27.54] you know writing effects like this these days you just go make an effect
[194:30.42] read some stuff do some side effect but for async reasons i've been looking a lot at
[194:38.02] splitting them so that there's the tracking side you know where you go oh i've listened to count
[194:45.22] and then there's the side where you're like uh now i actually insert it in the element whatever this
[194:51.22] value is you got from count i love when it doesn't do what you expect right something like this
[194:57.54] in order to split this up
[195:05.46] it it means that
[195:07.86] well you have to make a couple decisions right where if you have nested components
[195:15.78] do they get created on the effect side or do they get created on the pure side
[195:22.74] if you have nested reactivity if you're building up a whole graph
[195:25.30] right before we were it was very like basically we just had this kind of hodgepodge together where
[195:31.94] we're just calling functions and that return functions return functions and then eventually
[195:35.54] they kind of come out the other side backwards and we resolve them through if you're going to split
[195:42.82] them you have to decide where you do this right and what i realized is that this resolution
[195:54.18] is always on this side in a sense you create the dom elements like all these you know
[196:03.62] buttons and all these pieces in the pure side which probably seems kind of weird but
[196:09.70] you insert them or attach them to their parent in the effect side
[196:15.38] what this means is
[196:20.34] this side being pure
[196:24.02] is essentially a memo and like it's similarly there which got me to realize i know this kind of
[196:33.62] crazy it took me so long to get here is that
[196:36.34] even though like there can be you know let me do this for emphasis
[196:52.34] even though there can be other effects
[197:01.46] even yeah even though there can be like other effects in the pure side and other effects and you
[197:07.62] you know you can nest these separate starting points these mini virtual doms as i was
[197:12.58] calling them inside each other like this
[197:17.22] the actual place where the world sees the impact doesn't happen until
[197:22.50] you right you run the other the outside and this this means because they're returning these values
[197:30.42] essentially um like this one returns count here and this one returns count here that
[197:35.78] if you're already wrapping at all the right places like with the control flows and the fragments
[197:45.54] the unwrapping
[197:46.50] happens over here
[197:52.74] and it only needs to be one layer deep like we talked about before essentially
[198:01.06] we don't need to nest
[198:06.50] additional create effects to do the rendering like like i was doing before you know when i was like
[198:14.66] this effect is like nesting a div inside a component the looking at the like return type of the of the
[198:24.34] count or thing is not something that we have to handle um recursively there's basically no onioning
[198:33.30] because you already have all the memos
[198:37.86] coming in and this side only needs to trace through the memos which means that the act of resolving
[198:44.90] the um the inserting of the dom stuff like i was showing like that insert expression is the exact same
[198:54.98] logic you need to resolve children because it's it's all the same thing it's just resolving stuff on the pure
[199:01.78] side there's no additional effects involved so it collapses the whole system and uh
[199:08.90] i want i want to i want to show you what that looks like um actually so i'm going to go into dom expressions
[199:19.86] and i'm going to show you
[199:21.46] let me show you something because if if we look in in something like solid today and we go into the
[199:32.10] client js and we look for our favorite insert expression thing there's a bunch of extra hydrating
[199:42.02] logic but what you're going to see is ignoring the hydration logic it goes while type of current equals
[199:46.42] function unwrap it like we were just talking about and then it goes okay if they're equal
[199:50.90] early return it um if it's a string do some text operations you can import the multi stuff right now
[199:59.46] um if it's a boolean basically just skip it clean it out if it's if it had stuff like because you skip
[200:08.90] nulls and booleans in jsx if if um
[200:13.86] oh yeah sorry this is current this is not what you think it is current is the previous value this is
[200:21.38] the weird thing i had to do because of the nesting of functions what actually happens in solid sorry is
[200:28.02] if it's a function it creates the effect and then sorry it jumped jumped on me here um there it is it
[200:37.94] it creates the effect and then what actually that was a weird jump sorry that was no insert expression
[200:47.46] like jump to a different version of the code
[200:52.26] okay sorry um it it top level creates effect and then it does the while that i was talking about
[200:57.94] sorry i told you it had to create one level deeper of effect and then it does the recursively calls
[201:03.94] itself and does the insert again but the stuff's all tangled together if it's an array then it normalizes
[201:09.22] the ray information coming in and then it again does an insert expression um
[201:17.70] basically there's there's all this kind of tangled logic um that handles both resolving and normalizing
[201:24.18] of the values and um doing the side effectful part of actually rendering in this function this is the
[201:31.46] core of dom expressions and it's probably the most important function in the whole library is this
[201:36.18] insert an expression the reason i want to show this is if we if we were to change this around to split
[201:45.46] like i was talking about sort of expression
[201:48.10] this
[201:57.14] what actually i sorry i have to go to insert first the thing that calls insert expression my bad
[202:05.46] insert expression gets called by a function called insert um which checks if it's a function and runs it
[202:13.14] normally or otherwise it checks if it's an effect and wraps it um in the old version as i said it just
[202:18.90] called insert expression and put it in an effect in this version this the separation of the render the
[202:26.02] passes it to the normalized first so completely normalizes it before it passes it to the insert
[202:32.02] and the insert now which is what i was trying to show you it only does the side effects it's like
[202:41.94] like if it's a string do the stuff if it's this clean it up you see there's way less code here it's it's
[202:49.06] i can fit it on one screen now if it's an if it's a node replace it if it's an array if it the previous
[202:54.82] one was empty clean it otherwise do this this is basically reconcile and do all the diffing so
[202:59.38] normalization handles all the weird um like you there's no normalized array call here there's there's way less
[203:07.54] like if it's like if it's this do this kind of logic and the normalized code that i
[203:14.10] that's that in that first half looks like this it calls this one helper called flatten
[203:23.62] and then um it does a little bit of normalization of changing text nodes um to strings to text nodes
[203:31.54] which are probably going away in the in the in the future but the reason i want to show flatten
[203:35.70] is because if i go to solid js um here which is sorry where's the github is that reddit let's get it
[203:50.10] um and i go to the next branch here packages solid um and i go to
[204:03.46] the children helper the thing that reads all its children
[204:18.50] it also it just goes create memo flatten it's this it's it's the exact same logic
[204:24.18] of of resolving the um all the arrays and and functions and arrays and all that kind of stuff
[204:34.02] between rendering um into the dom or resolving children's for context
[204:41.14] right right so what what does that logic look like signals um
[204:47.38] solid js signals i know this is very specific to solid but um right now but this is a big revelation
[204:58.66] to me in terms of rendering um which is why i wanted to talk about this is because core
[205:05.54] notice yeah core utilities yeah utils flatten is is this function it there's some stuff involved but
[205:14.82] it goes if type of children equals function and not children length this is checking for functions
[205:18.74] with arguments for some reason something i've always done i have some like other options here
[205:22.90] but essentially it does a while loop where it unwraps it
[205:29.38] and then if it's not an array it just returns the value if it is an array
[205:34.82] it nested goes in and it goes through each element of the array again function unwraps it
[205:42.82] if it if it is an array calls itself again you know and recursively goes through and handles
[205:49.62] functions array the only thing that's a little bit interesting here that i'll mention is that each
[205:54.10] element the array is handled in a separate try catch um this is just a small note not too important but
[206:01.06] it's so that if any part of it errors specifically because async through it still processes the next
[206:08.98] thing in the array um like the next item this is the react 19 problem you know how in react 19 if they
[206:18.42] throw um on async uh originally i think they fixed this it would like basically if you had siblings
[206:26.34] doing async they would waterfall it's because if you throw up a promise while iterating over one of
[206:32.02] the pieces of async it doesn't get to the next item so this is the protect against it it's funny in solid i
[206:37.78] never used to worry about it because we didn't throw but when solid 2.0 working on this i realized i had
[206:41.54] the throw and this again the same throw interruption impacts dom rendering the same way as it impacts
[206:48.42] um resolving you know children um so this way the siblings still pass through
[206:55.70] yes this is what i meant i was helping dev with a demo and i hit this my point is
[207:04.98] yeah my point is the signals library now has the majority of the code for for for for rendering so
[207:15.46] to speak it's not rendering it's flat it's flattened essentially it's like flat you know it's like map.flat
[207:21.38] the reactive equivalent to map.flat um is basically if you separate the effects full part of rendering from
[207:29.38] the pure part you can reduce the problem into these flat operations as long as each section is separately
[207:35.30] memoized so yes what we've created here ironically is sort of a bdom right
[207:50.90] except it's only as deep as the decision points you don't recreate any artifacts like virtual nodes it's
[208:02.82] just the holes right because your your skeleton are dom elements that original pinpoint update thing we
[208:13.78] looked at but then the logic that helps you do control flow within the holes is essentially
[208:20.42] separately reactively memoized the difference between reactive memoized and top-down memorization is
[208:27.14] you you can start at any point if you have a fragment with 200 children
[208:36.58] inside a fragment each with 200 children if you update the one memo the second one down in one of
[208:44.26] the rows a reactive signal library will start from there rather than go all the way to the top check
[208:52.02] diff all the 200 and each of their 200 you know what i mean like it won't it it doesn't have to mark
[208:58.74] it dirty all the way down the chain and it doesn't have to check dirty all the way down the chain but
[209:03.54] essentially cons it's not actually that different when you consider that i was talking about those streams
[209:13.30] going through your app when they update when i split the render effects like i was talking about here
[209:18.82] when i split the the the front half from the back half where is this where is it i thought i put it in
[209:26.82] one of these when i split the render effects like this you actually see that split the front half
[209:33.22] is the is the essentially the virtual dom and this is the actual effect the deeper this piece is the more
[209:42.58] dynamic work is being done even if it's slightly more granular but the difference is as you construct
[209:51.94] your graph every element every it's a chance to restart it's a chance to act in complete isolation
[210:02.90] so anyway
[210:06.58] i'm hoping i'm hoping some of this makes sense did did did we answer the question though that
[210:17.70] we set out to answer here this is this is this is basically the
[210:28.58] this is basically the the core mechanism though right
[210:31.62] if you have the how did i frame it in the in the video description let me see if i go on youtube
[210:40.50] and see what i actually wrote um for this stream give me two seconds
[210:50.82] sure sure okay
[210:51.54] what do they ask what makes salt solid solid 5 different than preact quick or react with jotai okay so
[211:00.58] the
[211:03.86] the the the difference with with um there's basically three stages of this right
[211:12.10] there's a react which when state changes everything below needs to rerun right both if you update the
[211:23.78] smallest thing or you replace something or do some kind of control flow like if you have if you map over
[211:30.90] some data like an array and a check box and a single you know like a done on a single to do changes
[211:38.10] react has to mark the whole to do's list as dirty
[211:44.02] rerun that component even if it's memoized and it doesn't like touch the other piece it still goes okay
[211:50.66] well this array did change so it reruns the whole array and then it goes and it goes okay i realize
[212:00.66] that this item there is changed recreate that item and it goes okay i realize this particular field has
[212:06.26] changed recreate that field it can skip the other work but it again basically does everything
[212:15.14] even with jotai jotai can be like hey
[212:17.86] we know that you know we have this state that's higher up we don't need to re-render all the
[212:28.34] components in between only this component depends on that state jotai saves you that problem but it
[212:35.70] it doesn't change the fact that at whatever point you start rendering the data from jotai where you use it
[212:44.26] that becomes like the use state localized jotai just let let you get rid of the code in between where
[212:51.30] it's defined in the tree and where it updates like or sorry and where it's used okay
[213:14.18] yeah the infinite loops did not like let me help because i don't have a working example to show you
[213:19.38] and i rebuilding it over and over again is kind of difficult um see with the flatten helper it's it's
[213:26.26] it's a way easier for us to build a renderer now because um we can literally just like wherever the
[213:35.06] not this but wherever this code is here we can just basically be like instead of doing this we can just be
[213:42.82] like flatten this in and replace child is is essentially what the logic becomes
[213:49.70] um because it's a generic routine for saying if it's an array if it's a function don't worry
[213:56.66] we'll just reduce it down for you um
[214:03.78] i'm like debating whether i want to do that but given time i don't know
[214:06.90] but what i what i'm getting at is when i'm talking about the difference between these solutions
[214:19.22] in react
[214:19.78] in react
[214:19.86] wherever you
[214:23.06] wherever this statement happens wherever you go const
[214:31.38] you know s use state
[214:34.58] that's that's where the rendering starts from when you when you wherever you call that set
[214:43.06] with joe tie you can essentially pull this out so to speak but then like wherever you bring it back in
[214:56.02] that's the component that will render wherever you put set doesn't need
[215:02.02] to like quite often we hoist stuff because we need we need set if you bring it higher up in the tree
[215:08.90] so that other things farther away call set then unfortunately everything below it changes with joe tie
[215:17.14] you can actually separate the read from the set essentially um but you're still rendering components
[215:25.30] completely from that point no matter how much or how little you do quick and preact
[215:31.62] in a sense with their signals implementations and we make the signals signal
[215:38.42] let you do this joe tie thing and in addition even if it's in here if there's a specific place where
[215:50.18] you're like div you know s stop value anything what they do like when you put it in a specific node
[215:58.42] they can go okay we don't have to rerun this component we literally just have to update this
[216:02.18] but if if this is happening
[216:20.18] so to speak like
[216:21.94] your control flow like let's pretend it's let's actually do s stop let's do something more fun
[216:30.74] s dot value dot map
[216:32.50] essentially you're not you're not getting fine fine-grained updates anymore you're you're returning
[216:47.62] right into into vdom update territory right
[216:51.46] fine-grained rendering means that
[216:59.22] you only care about the holes you're never recreating the dom elements that you don't need to
[217:09.78] essentially it's all guarded with separate events you you don't have to update the data
[217:16.50] from the value to know that you can make it granular obviously things like proxies make this easier
[217:24.26] you find that's why view solid svelte all have proxies to make it easier to trigger but it's more
[217:30.58] so that each of these pieces aren't defined so much by the component that they're in but
[217:38.26] but always by the expression that they're in
[217:45.14] yes you you should be able to build some amount of control flow aspect um of it uh
[217:51.70] which would definitely because yeah it's the memoize control flow the interesting part of that is
[218:04.10] like what the vdom is doing at that point because you are still there's still one extra step of
[218:08.98] creating the vdom nodes it's basically like hyper optim like you can use signal style optimization to
[218:16.74] create vdom nodes that then get diffed you know i mean like it's it's one extra step so i would not be
[218:24.58] surprised um to see it get not spelt five levels but to get this felt three levels um as you as you were
[218:32.34] saying so yeah that makes sense so
[218:35.38] it's interesting because does any of this actually matter to you from a practical standpoint um it it just
[218:46.02] means that we've seen a reduction of almost like a streamlining of code in the same way um that um
[218:55.22] i showed the move to solid 2.0 instead of introducing new concepts these things are all the the same
[219:04.58] concept i think that's one of the most interesting things that i've been i've been kind of realizing as
[219:09.54] i've been working through you know these kind of problems uh is that like um like if suspense
[219:22.42] in a fine-grained rendered system is literally a combination of computations in a certain configuration
[219:34.02] it's like we're playing with legos instead of like instead of creating um a bunch of like new concepts
[219:42.34] and code like there's a bit i needed to make a special type of uh computation you know that has a
[219:48.82] little bit of special logic um and i've introduced this idea of like schedulers and solid in terms of time
[219:56.34] which but once i have those primitives like the idea of a scheduler
[220:04.90] you can model like incredibly complicated things by just putting the pieces together now once
[220:10.34] on one hand you this might sound like i'm making the rxjs argument where it's like you know it's so
[220:16.34] much easier to do all this retry logic um because you have these pieces but then you're like well do
[220:21.78] you even need this at all anyways you could just like write this the thing more directly why do you have
[220:25.22] to jump through these hoops well for it to work reactively you need to work within the language of
[220:30.42] it so you have to jump through the hoops but um it's it's interesting because it makes the concepts not
[220:37.94] special yeah
[220:40.34] yeah what's a live computation oh nothing i i was just a term that i used
[220:49.46] for i wanted to make um an eager computation that um
[220:56.90] yeah honestly this is just telling it to participate in um let me look here yeah too
[221:04.42] deep for the stream i think it's it's mostly just because i wanted it to participate in suspense
[221:10.58] um itself it's in case someone does something async top level anyway it's it's it's not it's not
[221:19.38] important okay okay i i'm i'm here to answer any more questions on the rendering i know i kind of got off a
[221:25.62] a little bit here but i'm hoping like you can start seeing fundamentally that at its core
[221:31.38] fine green rendering is actually more of the same in terms of just component our signals composition
[221:38.50] you're just like writing functions that return memos that get read by other functions that return memos
[221:46.18] and they just kind of at a certain point there's like one function that resolves it all down into like
[221:53.46] a flattened version and then you take the flattened version and you look at what you had before and
[221:59.22] either you insert it or you diff it if it's maybe you know some elements and then you're on your way there
[222:04.90] isn't much more to it um yeah i don't know other than that i wanted to talk about async but i don't
[222:14.58] know if anyone cares to talk about async i wanted to show i wanted to actually show something kind of
[222:19.06] cool and ask a question um the only problem is i didn't download it which is which was silly of me
[222:25.94] not to do before stream i was just so busy working on setting up that tier list that i didn't actually
[222:30.26] download my the async example i wanted to show um well it's your example dev do you have do you have
[222:35.38] an updated version of that anywhere that i can pull down i wanted i wanted to look at your demo for a minute
[222:44.58] yeah i just don't remember can you send it to me on discord
[223:00.98] yeah if you can send it to me on discord that would be great
[223:14.82] thanks dev
[223:27.14] okay nice nice nice nice and you've i i see you've actually
[223:30.34] copied the versions the the versions in okay cool let me just grab that
[223:36.90] all right
[223:57.14] all right let's get let's get this so yeah let's let's talk async for a bit unless people have
[224:15.78] more questions about reactive rendering um i actually tried to write an article about reactive rendering
[224:20.90] i'll share it right now um uh i think it's linked to one of my older articles which was um
[224:27.94] uh god i have so many dev two articles at this point which was it um signals
[224:36.42] no building reactivity build i can never remember the name of the stupid article not told it in that maybe
[224:50.90] but uh yeah the bottom of this article i list link a much older article
[224:56.58] reactivity to rendering oh in depth took it down okay solid yes reactivity to rendering
[225:02.42] reactivity to rendering
[225:09.14] um angular love interesting
[225:14.10] i've tried to cover this article in the stream before i i don't know if i had much more success i was
[225:23.94] trying to show how to write the insert expression um um logic and it's funny because it's just it's so much
[225:33.14] easier with flattening because with flattening the insert logic if you don't care about
[225:38.98] diffing it's literally replace child you can just replace insert with replace child and just call flattened
[225:44.26] um anyways i'm going to share this on the stream just in case
[226:02.18] all right let's do this okay ps code
[226:09.78] open
[226:12.74] development examples okay let's go full screen here i trust you hopefully dev okay so this is a simple
[226:25.78] example but i want to talk about it because it it poses an interesting question oh i love this example i love
[226:30.58] how you've written it okay this is beautiful okay this example is probably the first compiled solid 2.0 code
[226:40.74] you've seen on stream i do a lot of hand stuff but this is actually um basically this all the solid 2.0 stuff
[226:47.94] but working with proper jsx suspense and all this stuff so um but i i need your help which is why i want
[226:53.70] to talk about this because i i want to talk about expectations and about how you know these things
[226:58.34] should work and um okay so let's build this first in case i i can't remember what the build command is
[227:05.54] there a build command what what are we doing here dev okay yeah maybe i need to install it first
[227:14.66] that's actually npm what am i doing no whatever
[227:26.02] but the weirdest thing is i've seen babble reset solid 0.19
[227:38.18] i guess it's still compiled that's interesting
[227:45.46] okay okay we have dev and then i'm gonna i think just mmpx serve the current folder is how we do this
[228:07.54] yeah okay
[228:15.78] oh it's not i thought i was already cloned
[228:18.10] okay okay fine a clone solid signals over as well hopefully i have that on here possible that i don't
[228:26.98] yeah see this is my new sentry computer you can tell i don't do my work on this computer
[228:37.54] um which is why this still yeah fine let's go get i mean we're right here
[228:53.30] it's fine it's fine
[228:57.86] make another node here where i'm gonna go
[229:05.70] get clone this one
[229:07.38] just open in another window
[229:15.30] yeah signals have been getting a lot of updates actually so let's uh
[229:25.70] let's make a file new window file open development signals
[229:46.02] I'm trying to remember, do I just put the dis folder in or do I copy, let's look at roll
[230:15.78] up and see what it's doing, the alias plugin, I'm looking at the wrong, maybe I'm looking
[230:28.54] at the wrong thing, where is it, look at the readme, oh yeah, I'm like in the wrong thing,
[230:45.54] okay, yeah because all I was doing I think was doing this, I think I was literally just pasting
[231:02.10] it in like this, let's see if this will give me what I want.
[231:22.86] Funny that the zooms are different on these, what does it say?
[231:40.02] Oh, interesting, it's because there's no, okay because you, I see, you actually, okay it's
[231:53.78] fine, this is, I see why, it's because XJSX is, there's, there's no dis folder in here.
[232:21.34] Well, I didn't know, the funniest thing is it's, it's, oh right, no but where's dist?
[232:46.94] dist?
[232:47.94] There's lib?
[232:48.94] Dist is not here.
[232:49.94] That's, that's, that's, that's what's weird.
[232:53.94] Yeah, I mean, put the wrong command in, there we go.
[233:00.94] All right, that's what I thought, cd dot dot dot dot, okay.
[233:07.94] Dev.
[233:08.94] Oh right, because the latest solid.
[233:08.94] Yeah, okay.
[233:08.94] Oh right, because the latest solid.
[233:09.94] Yeah, okay.
[233:09.94] Okay.
[233:10.94] Okay.
[233:11.94] Okay.
[233:12.94] Okay.
[233:13.94] Okay.
[233:14.94] Okay.
[233:15.94] It's, it's, it's, it's, it's.
[233:15.94] Okay.
[233:16.94] Okay.
[233:17.94] This is fun.
[233:18.94] This is what happens when you build demos.
[233:19.94] Oh.
[233:20.94] Yeah.
[233:20.94] Yeah.
[233:21.94] Yeah.
[233:22.94] Okay.
[233:22.94] Okay.
[233:23.94] Okay.
[233:24.94] I, I, I, it's.
[233:24.94] Okay.
[233:25.94] This is fun.
[233:26.94] This is what happens when you build demos on the bleeding edge.
[233:37.94] I, I, the latest, I need to actually, it'll be easier if I add this into a file, open, open.
[233:38.94] Okay.
[233:39.94] I, I, I, it's, okay.
[233:40.94] Okay.
[233:41.94] This is fun.
[233:42.94] This is what happens when you build demos on the bleeding edge.
[233:45.94] I, I, the latest, I need to actually, it'll be easier if I add this into a file, open, open.
[234:00.94] I'm going to check out this version and build it.
[234:12.94] I removed, I changed the error handling, which is why this doesn't work.
[234:17.94] All right.
[234:19.94] Let's try this again.
[234:21.94] Let's see.
[234:24.94] All right.
[234:26.94] That's fine.
[234:28.94] I need to give you a new version of XJSX.
[234:31.94] Dev.
[234:32.94] Fine.
[234:33.94] Good now.
[234:34.94] Doesn't matter.
[234:36.94] Okay.
[234:37.94] Beautiful.
[234:38.94] Okay.
[234:39.94] So we have, we have a simple demo.
[234:40.94] Okay.
[234:41.94] Let's, let's, let's talk this.
[234:47.94] So we, we, we load, we have a loader for the whole app.
[234:52.94] Then we have a, it comes in and then we have a loading for this message.
[234:55.94] And then every time we click it loads a separate phrase.
[234:59.94] Okay.
[235:00.94] Right.
[235:01.94] So we just got a couple of suspense boundaries.
[235:06.94] Okay.
[235:07.94] And the way we author this is like this.
[235:10.94] Okay.
[235:11.94] So fairly straightforward.
[235:12.94] The app has a couple fake, um, fetch calls, one for the, getting the hello.
[235:19.94] And one for getting praise, you know, these would be API endpoints or server functions or something.
[235:24.94] For the case of this.
[235:25.94] And then, um, this is the app getting rendered.
[235:29.94] And then the main component, um, console logs, I guess it sets up a signal, um, which is for like, for the counter.
[235:39.94] I don't know why this is wrapped in, it shouldn't need to be wrapped in a function.
[235:44.94] That's odd.
[235:45.94] Hmm.
[235:52.94] Anyway, someone probably playing with something.
[235:54.94] Um, and then just for fun.
[236:00.94] Yeah.
[236:01.94] Okay.
[236:02.94] And then, um, it's got one async calling the one thing based on the count and another async calling the get hello.
[236:09.94] And then it's got an effect that listens.
[236:10.94] This is that split effect thing.
[236:11.94] I'm talking about listening to the, the async phrase.
[236:15.94] And then here we go.
[236:17.94] Suspense around this where the hello is and the button, and then a separate suspense for that separate loader around the message where the message text, um, gets displayed.
[236:28.94] Now, um, the couple of things I want to talk about in this demo, um, cause I need, I need, I need to kind of both show what it does, but also get some feedback on some aspects of things that seem, um, expected or not expected.
[236:47.94] The first thing that you're going to notice in this demo is that we're loading async up here and yet the suspense is down here and there's no problem.
[236:57.94] And that's because essentially, um, it's not until where it's read that it matters.
[237:08.94] It doesn't matter the order here, right?
[237:09.94] We're not awaiting or throwing or something.
[237:12.94] There's no waterfall by putting two fetches next to each other.
[237:16.94] And, um, essentially these are just independent.
[237:25.94] And they only go as far as they need to.
[237:29.94] Like if there was no hello here, this isn't being read anywhere.
[237:34.94] Then our app won't need to suspend.
[237:39.94] Um, sorry.
[237:40.94] When we load it now, I mean, I, there is no hello.
[237:46.94] So I got rid of that, but the, the, the, the only this part needs to suspend, right?
[237:51.94] You can start clicking this.
[237:53.94] I mean, you could do it before, but my point is the outer part of the app doesn't need to suspend.
[237:57.94] Obviously there's no hello.
[237:59.94] Um, if I wanted to make the UI of this example, sorry, I'm going to close this.
[238:03.94] Cause I don't need any more nicer.
[238:05.94] I would, you know, put an H1 here and be like, hello.
[238:10.94] Now it, now it looks nicer again.
[238:12.94] But the key point is that the whole outer shell of the app only suspends because it listens to that hello.
[238:21.94] Right.
[238:21.94] And similarly, if the phrase wasn't a phrase and was just the count, then nothing in our app really suspends.
[238:37.94] This is now just a glorified counter, right?
[238:44.94] Right.
[238:45.94] So as you can see, it doesn't matter if it fetches, it matters if it's read and where it's read.
[238:55.94] Although this brings us to the first, most interesting question here.
[239:00.94] This effect isn't suspending the components, but it is console logging the phrase when it comes back.
[239:11.94] So like when I load the page, you're going to see this before this shows up because it needs the effect needs to wait for the data to come in.
[239:18.94] When I click this, this will be one and then it'll show.
[239:20.94] And if I go like this a few times, you'll see it trying to fetch.
[239:22.94] And then the final one will come through.
[239:24.94] Right.
[239:25.94] Cause of the, the way the create async does its cancel cancellation.
[239:29.94] But what I'm getting at is that like this updates immediately and this takes time.
[239:35.94] So the effect isn't participating in the suspense.
[239:42.94] Only render effects do the normal effect.
[239:45.94] Doesn't.
[239:46.94] And I don't know if that's a good thing or a bad thing.
[239:48.94] Honestly, this is something that I've been trying to figure out when talking to people.
[239:53.94] Like when I first made the demo, I actually had effects participate.
[239:56.94] So, um, this would cause the component to the whole outer component.
[240:03.94] Um, when the suspense was above it to suspend.
[240:06.94] And dev was like, why is it suspending?
[240:10.94] That's weird.
[240:11.94] Right.
[240:11.94] If I didn't have this console, this, this crit effect, it wouldn't suspend.
[240:14.94] And he's like, dude, he, he asked me straight up.
[240:17.94] He's like, do I care?
[240:18.94] You know, like, should this cause things to suspend?
[240:21.94] Sure.
[240:22.94] This isn't ready right away, but does this mean that you shouldn't like show or render the UI?
[240:29.94] I don't know.
[240:30.94] I, this is an interesting question to me.
[240:32.94] Cause on one hand, you could say that like to show things consistently, you should suspend.
[240:38.94] But on the other hand, if you assume side effects outside of the system, you don't really care how long.
[240:45.94] Like it's not your responsibility to keep things outside of the system in sync.
[241:02.94] You were a dev with this one.
[241:05.94] Yeah.
[241:06.94] I don't know what that means.
[241:07.94] Honestly.
[241:08.94] I don't think there is much boilerplate there.
[241:13.94] If, if, if, if, if this is important to you, check out solid labels.
[241:16.94] There are things, there are packages that do this, but if you watch nor the stream, I cannot, I, I actually, I don't really get what this even like what the boilerplate is.
[241:29.94] Um, um, there should be a way to opt in out of different behaviors.
[241:38.94] Well, I mean, technically, I mean, that's always the worst answer.
[241:43.94] Right.
[241:44.94] Um, technically there is right.
[241:46.94] Like depending on what you want to do.
[241:49.94] Right.
[241:50.94] Render.
[241:51.94] The question is like, do you view rendering being part of the framework synchronization responsibility?
[241:55.94] Not to, because you can understand this effect here, which is a way of observing the data fetching.
[242:01.94] Would cause the suspense above this.
[242:04.94] Like if there was a suspense wrapping the whole app to trigger instead of being down here where the other ones are actually being accessed.
[242:13.94] Yes, I, yeah, I, I, I, I, I, this feels reasonable. It's funny. Cause, uh, Dominic from Svelte actually showed me a really cool async demo, um, around the same time I was working on this, uh, where he figured out a way of.
[242:43.94] Um, not splitting effects to get what he was going for. Um, and, but he, but the effects were still blocking like this. And it was because he was registering the create async, the component, not where the read was. And because of that, you know, he's like, we don't need to split the node of dependencies cause it taps into the component. And I was like thinking, I'm like, well, I don't actually need to split normal effects technically. Um, if they're, if they don't participate the way this doesn't participate, we could just,
[243:13.84] not split normal effects here, but the problem of not splitting normal effects with throwing is if someone doesn't read first and they do something partially side effectful, then they read and it throws, they might do that partially side effectful thing multiple times.
[243:27.18] So splitting is actually kind of like a protection for the user themselves in a throwing environment.
[243:32.88] Um, I mean, to be fair, if you were suspending the whole component,
[243:43.28] this only becomes an, an issue.
[243:48.94] Um, yeah, cause basically if you, if the, if it's not based on the depths, then it doesn't matter.
[243:55.48] Cause you're not going to run the effect anyways, so to speak until the components done.
[244:00.16] So like if, if this component was, if this was suspending for a different reason,
[244:05.48] it would still get deferred.
[244:09.04] You, you, you're not going to run an effect on something that's off screen.
[244:12.02] I'm just saying it shouldn't be the one that contributes to it being off screen.
[244:15.40] Right. Like if, if, if, if, if, if, you know, this wasn't a component that was suspended,
[244:19.70] we're not going to run an effect while it it's like suspended off, but if this is the last effect
[244:26.96] that's waiting or acing to come in and it's not causing the component to suspend,
[244:30.98] do we have to wait for it is essentially the question.
[244:33.96] Yeah. Essentially. Yeah.
[244:45.40] Oh, you mean, Oh, Oh, that, I mean, okay.
[244:55.50] Yeah. Then check out solid labels.
[244:56.88] Solid labels is a library released five years ago to do that.
[245:00.04] It never really caught on though.
[245:01.72] Um, to be fair, I, I, I don't think most people care.
[245:05.46] Um, the biggest thing is that like the second you have to move reactivity out of a file,
[245:12.62] you need wrappers again, so like it, but it, it, it basically creates a com compiler that
[245:21.00] has to process more to basically not change anything except for like the immediate ergonomics
[245:30.22] of the thing in front of you, but, but it doesn't, I, I actually talked about this a bit earlier
[245:33.88] in the stream.
[245:34.22] Um, it's probably hard to dig back there.
[245:35.94] Um, maybe there'll be a marker later, uh, later when we get timestamps, but it there,
[245:42.76] uh, my opinion is this, this kind of optimization is kind of pointless.
[245:54.38] Um, cause it's not really an optimization.
[245:56.02] Okay.
[246:00.38] What do we got?
[246:00.82] Greg, Greg, endeavor talking.
[246:02.78] If it doesn't actually be from anything, it should wait for the parent.
[246:09.80] I, I, I, the way that I'm, I'm phrasing this is.
[246:17.12] Yeah, it's, it's basically.
[246:19.44] It affects participating in suspense.
[246:22.70] They just aren't responsible for holding it is, is my thinking.
[246:39.44] So there is a suspense in the parent component of phrase and the question is
[246:41.94] whether create effect inside Facebook should trigger suspense.
[246:44.58] Yeah.
[246:44.76] That that's basically my, my, my, the question here.
[246:47.72] And we like, we're kind of, I, I'm, I originally thought the answer is yes, but I'm
[246:56.82] kind of leaning towards no.
[246:58.10] Now it, yeah, I don't think, oh yeah, maybe not.
[247:07.16] I mean, it, to me, it's, it's not even liking it's just like, that is essentially
[247:12.72] what it has to be.
[247:14.10] You can pretend it's not that, but like it, it is what it is.
[247:17.54] It's, it's, it's, it's kind of like futile.
[247:19.40] I guess it is me liking it.
[247:21.02] I'm just saying like trying to mask that part is kind of like a hopeless endeavor.
[247:24.94] Yeah.
[247:31.64] Yeah.
[247:31.88] I mean, sure.
[247:32.66] Uh, I need to put another suspense boundary in here.
[247:37.16] Um, let's do it.
[247:41.96] Suspense.
[247:42.72] Fall back.
[247:47.48] The universe.
[247:53.52] All right.
[247:56.60] So right now there's, there's not nothing, but if I change this to a render effect, perceptually
[248:09.72] something that affects rendering.
[248:18.04] now when we load it, we get the universe and then it comes in.
[248:21.28] And because every time we update the phrase, it triggers the effect, the universe just keeps
[248:31.98] on coming.
[248:35.64] right.
[248:36.14] That that's the, the jarring moment.
[248:39.96] Right.
[248:41.40] The, the, yeah, that's the jarring moment.
[248:45.88] When you go, you just put an effect to observe something near where it's fetched.
[248:50.28] And you're just like, what the, why did the whole app on thing?
[248:53.44] The thing is, you have to understand react.
[248:54.96] This is what happens, right?
[248:56.52] Like if this was react, I, I mean, dev did a talk on this, but think about if you didn't
[249:02.60] want that to happen, you would have to pull the, the, the out another component.
[249:09.84] And then put the crit, like, put the effect or whatever underneath where you want it to be like
[249:17.22] all the way down here, actually in the message component.
[249:19.26] If you didn't, if you didn't actually want it to, to update, uh, otherwise, like, like if you just
[249:25.20] wanted to trigger this suspense fallback, you probably would just not read it that way.
[249:31.44] And you would use like, uh, what was that like deferred value or whatever, like intentionally
[249:35.82] cause tearing or whatever.
[249:36.78] Like there's, there's ways to do stuff, you know, or, I mean, it's the real easy way to
[249:42.78] do it is just at the point of the promise, go then console lock instead of, you know what
[249:48.74] I mean?
[249:48.96] Like there's other ways to do it.
[249:51.12] So like, yeah, my, yeah, let's go back to.
[250:06.78] Great effect here.
[250:07.78] So, okay.
[250:09.48] Um, I, people seem generally on board.
[250:12.78] I'm sure there's going to be some kind of edge case, but this, this, this is, this is sort of
[250:16.88] the thinking now there is no universe.
[250:19.84] There's only us now.
[250:21.46] Um, making hello, read is not a big deal.
[250:31.38] We'll add that back in to get our, our suspense loading.
[250:35.38] Okay.
[250:36.38] Now, because hello, it takes a little time to come in that.
[250:39.38] And then this is, and we still have the same behavior where it delays, where it comes in.
[250:44.38] Okay.
[250:45.38] What's interesting to me though, most interesting to me about this example is picture that you
[250:55.04] wrote this message component, like a long time ago.
[250:58.38] It, you know, it takes props dot text.
[251:02.38] Right.
[251:03.38] And now you want to make it async.
[251:06.38] Well, the answer in solid, as you saw was just, it's a signal to signal.
[251:10.38] Okay.
[251:11.38] So now we're just going to change this one to phrase.
[251:14.38] And now without changing the message component at all, we have it reading from async data.
[251:22.38] And the suspense boundary, basically like the pattern is you go, oh, you realize you're like,
[251:26.38] Hey, I want to add something async at the point that we're some point above where it's red.
[251:32.38] I mean, you could put the suspense inside.
[251:34.38] If you really want to, you just go, okay, this is where the placeholder is.
[251:37.38] And I want to catch all the suspense below, but what's interesting is like the end components,
[251:44.38] like the, you know, maybe not your, your like button component, but like the, the, the, the
[251:51.38] next level up in the organism might not need to change at all.
[251:56.38] If you just add, if you just change it to an async, um, signal, right.
[252:01.38] We don't have TypeScript going here, but technically phrase here is not any phrase is
[252:07.38] actually string.
[252:08.38] It's it can't be undefined as far as the, the program is concerned.
[252:13.38] Um, so there, you notice here that like if you use solid, we used to, we'd have, um, classically,
[252:22.38] we'd have like a bunch of show components in here because we're using the throw based thing.
[252:26.38] We don't need to, this, this is always defined or it throws.
[252:30.38] So technically speaking, there's no undefined.
[252:33.38] Um, and we didn't need to change the component.
[252:35.38] And it's, it's kind of interesting, right?
[252:36.38] Cause like when you, when you look at stuff like how you would solve this in react, this
[252:41.38] is the right pattern.
[252:42.38] You have the suspense on the outside.
[252:43.38] They come on the inside.
[252:44.38] If you want the data to be in here to only trigger the suspense, you have to call the
[252:50.38] use in here.
[252:51.38] Now you don't want to fetch in here because you see the problem.
[252:55.38] You understand the problem of fetching in here.
[252:57.38] First of all, you have to actually pull this down and now you can't have it in this effect
[253:01.38] up here.
[253:02.38] The problem is it waterfalls because, because like this component reads some data, you know,
[253:12.38] throws, and then it gets down here and then it fetches and it throws.
[253:16.38] Um, which, which is, which is kind of awkward.
[253:20.38] Um, but how, how, how else do you get the async here?
[253:27.38] You want to fetch it up here and you want to get the async down here.
[253:31.38] Um, you either put use here and block here, but that's above the suspense.
[253:36.38] So you could make another component and put the use here, or you change this component to
[253:43.38] accept a promise.
[253:44.38] So you, you have the fetch here, have the promise, pass the promise, and then use it in here.
[253:49.38] But now this component needs to be aware that it's async.
[253:52.38] And, um, and you actually have to change the interface to accept string or promise.
[254:04.38] I mean, render effects have to cause the suspense because like, they, they're literally like,
[254:11.38] that's what these are like, like it rendering the text.
[254:15.38] If, if you, if they didn't cause a suspense, you could end up with hold API.
[254:20.38] I mean, you could do that, but you, you, you, you want them to.
[254:24.38] Yeah.
[254:28.38] Yes.
[254:29.38] Yeah.
[254:30.38] Sorry.
[254:31.38] Render effects are equals JSX.
[254:32.38] It's the best way to put it.
[254:33.38] Everything like what I was showing early stream, everything that we use to render in solid is effects.
[254:40.38] Yeah.
[254:41.38] It's the exact same thing that that's why they exist.
[254:45.38] If we didn't render JSX, we wouldn't need render.
[254:47.38] If we didn't render a templating, we wouldn't need render effects.
[254:50.38] Like that is what they are by definition.
[254:52.38] They are basically the JSX.
[254:54.38] Like create render effect exists because you can literally, as I was showing earlier, build the framework yourself.
[255:02.38] Um, without like from its own primitives.
[255:08.38] Uh, anyways, what, what I'm getting at is it's, it's, it's interesting.
[255:13.38] Cause here we have this ability to not change the API to stringer promise and have it have the same thing.
[255:19.38] I guess when I, the, the interesting question, I guess, is if I take this create async and stick it down inside the message component.
[255:32.38] Now, just, just for fun, put it here.
[255:44.38] And props and let's make this props dot count.
[255:56.38] And put count here.
[255:59.38] Do you guys think there's a waterfall?
[256:03.38] Because like, technically speaking, this is an async.
[256:09.38] It reads here and it throws triggering the suspense.
[256:13.38] Will that delay this?
[256:22.38] Did I miss something here?
[256:31.38] I thought I got it.
[256:32.38] Okay.
[256:33.38] You're right.
[256:34.38] Change text to count.
[256:35.38] Thank you.
[256:36.38] Yeah.
[256:37.38] Good call.
[256:38.38] Thanks.
[256:39.38] Well, should this waterfall.
[256:41.38] Right.
[256:44.38] We do some async stuff here.
[256:46.38] We read it here.
[256:48.38] And this thing down here is, is fine.
[256:53.38] It's now just passing the count through, but this is doing async there.
[257:01.38] It's a child.
[257:02.38] It's a child.
[257:02.38] It's not a sibling.
[257:03.38] It's a child.
[257:04.38] It's a child.
[257:04.38] It's not a sibling.
[257:05.38] It's a child.
[257:06.38] We have a component, you know, here that does suspense.
[257:07.38] That is definitely suspending.
[257:08.38] Should it wait to call it?
[257:10.38] Right.
[257:11.38] Anybody?
[257:12.38] Dev already knows the answer, unfortunately.
[257:22.38] I was trying to see if anyone else would guess what happens here.
[257:24.38] And the easiest way to confirm this is, let's make them both take the same amount of time.
[257:32.38] So, is it going to be showing up one, then two seconds later the other one, or are they going to show up at the same time?
[257:42.38] Oh, they show up at the same time.
[257:52.38] So, nesting, fetching, doesn't waterfall.
[258:02.38] No?
[258:03.38] Okay.
[258:04.38] I have too much fun with this stuff.
[258:07.38] I think people at this point are just like, Ryan, you just tell us how it behaves.
[258:11.38] Eh.
[258:12.38] You know, like, we're going to assume that it already does the thing that doesn't seem possible.
[258:17.38] Yeah.
[258:18.38] You know.
[258:19.38] Guess what?
[258:20.38] We didn't need server components for this.
[258:25.38] Oh, well.
[258:28.38] It's so funny because when you play with this demo, there's like so many variations you can do where, like, if people come in, we react to it.
[258:46.38] Like, if people come in with react brain, they're going to be like, this is impossible.
[258:49.38] And this literally, I, it's so weird because sometimes when, when you, when you make stuff, like I think in solid, so I can't be the guinea pig, but because of how much simpler the model is, it's very easy to come up with an example where you're going to go like the original example, the dev made or what I just did here with nested.
[259:11.38] And then you write it this way.
[259:12.38] And then you, in react, you see the waterfall, you go and you fix it in react and then you come back to solid.
[259:18.38] And then it just works the way it originally did.
[259:20.38] I, I love demos like this.
[259:22.38] It's just.
[259:23.38] Okay.
[259:24.38] Do you guys want to know how this works?
[259:26.38] Okay.
[259:27.38] So the gist of it is it's the same mechanism.
[259:34.38] And cause you were following the rendering stream so far, you should have an idea here.
[259:37.38] This is an effect, right?
[259:38.38] This effect catches, essentially the way that this, um, errors and async work in solid 2.0 is that memos catch the try, like every reactive context catches the try catch.
[260:00.38] Catches the try catch, but then it sets it on itself and says I'm erred.
[260:04.38] And if someone else reads it, it'll be like, I'm just going to throw the error.
[260:07.38] So in a sense, they, they, they keep the propagation going, which I'll, I'll demo in a minute, but effects are the ultimate I've caught it.
[260:17.38] So if you, wherever you read the memo doesn't matter.
[260:21.38] It's what like is holding it where it finally gets down to that effect.
[260:27.38] It's just like the rendering.
[260:28.38] Remember that normalization.
[260:29.38] I showed you that flatten function where for each branch, it was checking because if it got that not ready error, it would, um, essentially let you process all the siblings, but then it would throw it up.
[260:44.38] Eventually there's an effect that's going to get that error and it's going to go, okay, I've got the error, but it's, it's on the front half.
[260:51.38] So it hasn't run its side effect yet.
[260:53.38] And it goes, okay, now that I know that I have the, have the, it's suspended or I, not suspended, but like there's something async here.
[261:02.38] It uses its ownership context to find the suspense boundary and toggle it the way solid 1.0 works.
[261:09.38] It, the communication between this effect here and the suspense is not throwing it's, it's context.
[261:17.38] The throwing lets us be non-null unlike solid today where it was null, but the suspense is still working off context essentially.
[261:25.38] So it just goes, okay, I'm under you, you should suspend, but you should suspend.
[261:31.38] That's what that live computation was.
[261:34.38] Um, essentially, uh, dev is just because you're showing the fallback doesn't mean we have to destroy what's on the other branch.
[261:45.38] We just keep it sitting there off screen.
[261:49.38] Essentially it's live.
[261:51.38] So we've created a bunch of DOM nodes and this is a fragment.
[261:58.38] These are siblings.
[261:59.38] So the first DOM node, and it actually doesn't matter that it's a fragment because there's an H1 here.
[262:04.38] Remember we hit a div.
[262:05.38] It stopped.
[262:06.38] Like it doesn't go into here yet.
[262:07.38] So the, the boundary here, like the memo that, so to speak, you know, the top level one that gets all the stuff.
[262:14.38] Just sees one, two, three, and it sees another suspense boundary, but it basically sees some elements and then another function.
[262:22.38] When it skits this, because each one of these is processed in its own try catch.
[262:30.38] Um, this throws, um, I mean, it doesn't even matter if honestly, this would do the same thing.
[262:39.38] Um, let me, let me do this show you.
[262:44.38] It's the same thing.
[262:45.38] Um, if it was a fragment, the fact that these are separate would matter, but because it's a div, this is its own separate render effect.
[262:56.38] It captures the, the asynchronous and it just tells the suspense to go to fall back.
[263:01.38] But meanwhile, this is sitting here with a bunch of divs or a bunch of elements.
[263:06.38] This H1 might have no text in it yet.
[263:08.38] Cause it aired out, but it has the H1 element.
[263:11.38] It's, it's already rendered the page, even though it hasn't, um, shown it to you.
[263:17.38] And then it goes into here because these have nothing to do with each other.
[263:24.38] And it tries to execute this and then goes here and it creates this.
[263:28.38] And guess what?
[263:29.38] Another fragment.
[263:30.38] And then it gets here.
[263:32.38] And this effect now also gets, is where the throw happens.
[263:37.38] is where the throw happens and it errors and goes, tells its suspense boundary that it's fallback is.
[263:42.38] But because, um, it returns the P and some of the text, the, the thing, you know, essentially it's just sitting in off screen of this one.
[263:55.38] So this one's floating a P, uh, a P tag off somewhere.
[264:00.38] This one's floating the H1 tag off somewhere.
[264:02.38] And then when this resolves, it'll just tell these to re-execute the specific phrases like phrase and hello to re-execute.
[264:12.38] So when hello finished, it goes, Oh, re-execute this, which will then give it its text.
[264:16.38] And then it'll attach the Dom nodes you created originally.
[264:19.38] It doesn't re-render anything.
[264:21.38] It just takes the Dom nodes you created on that first pass and fills them in the same way as always.
[264:30.38] Well, if there's no element, um, that's where the flatten does the work because it will.
[264:42.38] It essentially suspense itself will catch it.
[264:45.38] Then like there's no effect that it's going in.
[264:48.38] So suspense will catch it.
[264:49.38] It's a boundary and it will call flatten.
[264:52.38] And when it calls flatten, uh, do I have this code still open when it calls flatten?
[264:58.38] I actually showed you all the code earlier.
[265:01.38] Core utils calls flatten.
[265:05.38] The first thing it's going to do is basically go through this array procedure.
[265:10.38] It's going to get to the flatten array and be like, okay.
[265:13.38] So for each child, get the child.
[265:16.38] So I'm going to try catch.
[265:17.38] If child equals function.
[265:19.38] Yes.
[265:19.38] It's an expression.
[265:20.38] Forget about this.
[265:21.38] Do child unwrap.
[265:22.38] Do child unwrap.
[265:23.38] It's going to throw at this point because it's going to go not ready.
[265:28.38] And then it's going to catch it and go, Hey, it's not ready.
[265:32.38] If it's not, not ready to throw you.
[265:33.38] Otherwise it's just going to set a flag, not ready.
[265:35.38] Then it goes to the next loop and draws its siblings.
[265:40.38] Right.
[265:42.38] And then when it's done rendering all the siblings, you know, with some holes, you know,
[265:47.38] where it through it's, it's missing the thing that through it's, it, um, it's not added.
[265:54.38] Um, it then throws its itself.
[265:57.38] And then essentially you have to remember that all these expressions that it's unwrapping
[266:07.38] here are separately memoized.
[266:09.38] So even though this whole function is going to run again, um, it's going to be reading
[266:16.38] as it unwinds the arrays and the functions, it's going to be reading pre memoized values.
[266:22.38] Like all the things that were static, the things that were resolved are going to be already
[266:27.38] resolved again.
[266:28.38] So it doesn't need to create them again.
[266:30.38] It, it, but it, but it also is non-blocking because each separate element of the array can
[266:35.38] process itself before it communicates it upwards.
[266:39.38] Uh, hopefully that, that makes, makes sense.
[266:43.38] Um, so whether it's doing our mini V DOM with the flatten utility, or it's just like literally
[266:52.38] just telling the one effect that, Hey, there's no text here yet.
[266:55.38] That's the easier case to visualize.
[266:57.38] Um, it doesn't need to re render, right?
[267:03.38] This is not only it's, it's technically blocking.
[267:07.38] Async is the funniest thing because of the throwing it's just fine grain blocking.
[267:11.38] Async that doesn't re render.
[267:15.38] It's basically like everything solid has shown to do before, right?
[267:21.38] With rendering.
[267:22.38] We showed that you could not re render components and do fine grained updates.
[267:26.38] This is fine grain suspense.
[267:28.38] So I'm current solid doesn't throw.
[267:34.38] So it has to null check.
[267:36.38] this doesn't need the null check, which is nice because as Katie is saying here, switch
[267:42.38] and show results in water falls.
[267:44.38] If I understand correctly, right.
[267:45.38] Which is why I still like hoisting, why I still suggest hoisting type patterns.
[267:49.38] But the thing is, when are you calling show?
[267:52.38] Because if, uh, God, I have to reverse this.
[267:59.38] I think now, now that you've seen this example, let's go back to, to fetching above.
[268:04.38] Okay.
[268:05.38] Okay.
[268:06.38] We're fetching above.
[268:07.38] Okay.
[268:08.38] As I said, it's already cool that you don't have to change this, you know, to make it async,
[268:13.38] but now we're fetching above and let's do something fun, like to uppercase.
[268:21.38] to uppercase.
[268:22.38] Can you call to uppercase on undefined?
[268:26.38] I don't think you can.
[268:27.38] No, you can call uppercase to uppercase on an empty string though.
[268:41.38] Right.
[268:42.38] Okay.
[268:43.38] Beautiful.
[268:44.38] This serves my purpose.
[268:45.38] I'm, I am, I am basically, if, if this is null, undefined at any point, this is going
[268:57.38] to error out.
[268:58.38] Right.
[268:59.38] But, but I'm telling you, this will never proceed as undefined.
[269:06.38] So I can put two uppercase here completely safely.
[269:11.38] And when my thing loads and I click this, no, what didn't happen?
[269:20.38] Why am I not seeing two uppercase?
[269:22.38] Oh, I have to save it first.
[269:24.38] Duh.
[269:25.38] Okay.
[269:26.38] Let's try this again.
[269:27.38] See, it's uppercase now.
[269:28.38] Right.
[269:29.38] It's, it's not like a lot of, a lot of these advanced, like these cases where, you know,
[269:42.38] like you would put show, like you will use show for layout reasons.
[269:48.38] Probably, but maybe those are the places where you'd use suspense.
[269:53.38] Maybe not, but, but what's interesting is like, because it can't be null, the way this is
[270:01.38] permissive like this, I mean, it gets really fun because then we can be like upper phrase,
[270:05.38] right?
[270:06.38] Like this const upper phrase equals create memo.
[270:14.38] We already know conceptually that a function isn't going to defer to what it's called there.
[270:21.38] Right.
[270:22.38] What's, what's cool.
[270:23.38] Unlike solid 1.1 is that memos also see this, this can be, this can be null, right?
[270:31.38] It can't be null.
[270:32.38] So this is fine, but they also propagate this.
[270:36.38] So this should just be the same problem.
[270:39.38] Create memo is not defined because I did not import it.
[270:41.38] That's my bad.
[270:42.38] Create memo.
[270:44.38] Create memo.
[270:45.38] This isn't going to cause the phrase component up here.
[270:49.38] Like, you know, how we were running about create effect and create render effect.
[270:52.38] Create memo is not going to cause this phrase component to, to suspend because memos only care
[270:59.38] about where they're read.
[271:00.38] Right?
[271:01.38] So this is, this is doing our, our two upper phrase.
[271:05.38] Right?
[271:06.38] And even though we're like deriving logic, first of all, this logic is not null.
[271:11.38] Um, ever, which is why this works, but it also just like any other reactivity rules propagates
[271:19.38] it down to the read.
[271:20.38] So it's only the suspense boundary that gets triggered.
[271:22.38] Upper phrase is the new devil count.
[271:25.38] Okay.
[271:26.38] I wonder this, Spencer, can you do advanced things and fallbacks or they don't like V1?
[271:34.38] What happens?
[271:35.38] I mean, it's, I didn't think V1 was dumb.
[271:40.38] It was by design.
[271:41.38] Fallbacks are, get, get handled by the parent.
[271:45.38] That, that was always the, the thing.
[271:49.38] It's actually hard.
[271:50.38] Part of the difficulty writing air boundaries and suspense boundaries is that the fallbacks
[271:54.38] are not part of it.
[271:56.38] They're, they are part of the, of the parent.
[271:59.38] You don't want, it wouldn't make sense for the fallback to trigger its own suspense.
[272:03.38] Right.
[272:04.38] Um, the, they go, they get handled, you know, as you nest them by the parent, like, this would
[272:14.38] be really weird, but like, we could probably put this here and then like put, and then depending
[272:27.38] on the difference on the loading times, I don't know if we have.
[272:32.38] Yeah.
[272:33.38] Okay.
[272:34.38] They're still differed.
[272:35.38] Hello is 500.
[272:36.38] I mean, will it?
[272:39.38] Okay.
[272:40.38] It won't, it will, but they're fetching in parallel.
[272:43.38] So you don't see the difference.
[272:44.38] What I'm saying is the, I have to make this one long.
[272:49.38] Um, it's now waiting the one it's, it's now waiting for the phrase.
[272:54.38] Um, or it should be waiting for the phrase.
[272:59.38] That's interesting.
[273:00.38] Maybe there's a bug here to do.
[273:03.38] Why am I?
[273:04.38] Cause.
[273:05.38] Oh, right.
[273:08.38] This doesn't work.
[273:10.38] Cause it has to suspend because otherwise this will never be in fallback.
[273:13.38] Okay.
[273:14.38] I'm done fine.
[273:15.38] That's I, I, yeah, this idea is dumb.
[273:17.38] It doesn't work.
[273:18.38] I mean, it works, but I need to like, I'm trying to think of an example where this would,
[273:25.38] I'd have to add like another async for, for, for it to, for me to show you what, like, because
[273:31.38] this has to suspend.
[273:32.38] And then this has to suspend less long for.
[273:38.38] Yeah.
[273:39.38] I don't feel like making the convoluted scenario, but yes, it'll be, it should be caught by the
[273:44.38] parent suspense.
[273:45.38] Yeah.
[273:46.38] The fallback isn't renders.
[273:47.38] Yeah.
[273:48.38] The fallback isn't renders.
[273:49.38] Okay.
[273:50.38] But I think this kind of shows the three different scenarios, right?
[274:06.38] you can fetch nested without, um, without, without waterfalls.
[274:17.38] And you can derive without blocking too high.
[274:21.38] Like basically.
[274:22.38] And, and you can do all of this stuff without changing the API of your components that fall
[274:28.38] under it.
[274:29.38] So, um, some people were worried about that and maybe you're concerned about it, but it's
[274:36.38] like, if you add a sync into your app, you're the one responsible for putting the suspense boundary
[274:41.38] in.
[274:42.38] right?
[274:43.38] Like, I mean, that's kind of obvious, but if you add fetching, are you, are you the one
[274:58.38] responsible for changing all the component APIs between where you do the fetch and where you
[275:02.38] use it to, to promises so that the props except promises.
[275:07.38] Um, so like, I, I guess the, the worst case scenario here is that you don't have access.
[275:17.38] So you can't add the suspense boundary.
[275:19.38] So then you would put the suspense boundary at the same height as where you would have put
[275:26.38] the use and react.
[275:27.38] The only difference is, and this is more of a performance difference consideration is while
[275:33.38] visibly it would look the same as react.
[275:35.38] Um, when it does an initial pass, it will render all the rest of your app, except for the places,
[275:44.38] the small places where the async is being used and it won't throw that away and re-render
[275:49.38] it again ever.
[275:50.38] It's like it's, it's the render once happens during the initial suspense render.
[275:55.38] Um, right.
[276:02.38] I don't know.
[276:03.38] I think this is cool stuff.
[276:04.38] This is, I was talking a bit about this on, on a podcast, not that long ago with, uh, um,
[276:10.38] was it like dot dev or whatever?
[276:12.38] Uh, why can't I, Tracy Lee, the, the, her, her, her podcasts.
[276:17.38] Um, and, uh, it was a really good interview.
[276:20.38] Not many people have watched it.
[276:21.38] I'm actually going to, um, link it here in case people want to see it.
[276:25.38] I talk all about why I think these models are really powerful.
[276:30.38] Um, let's see if I can grab it here.
[276:33.38] I also talk about single flight mutations.
[276:36.38] It's so funny.
[276:37.38] Cause we were talking where they, they, they got me on the stream to talk about single flight
[276:41.38] mutations and solid start because you know, that's the thing, but I've been like, by the
[276:45.38] time something gets to the topic where like everyone's talking about it, it's already been
[276:51.38] like six months or eight months from when I was working on it.
[276:54.38] So it's like, it's kind of funny.
[276:56.38] Thanks.
[277:01.38] Yeah.
[277:02.38] Yeah.
[277:03.38] Yeah.
[277:04.38] Yeah.
[277:05.38] So there's a section on why I talk about the async stuff towards the end of this.
[277:13.38] Anyway, how does this work?
[277:19.38] SSR wise.
[277:20.38] If I recall, there aren't holes that fill in the same way, but it's been a long time.
[277:23.38] I looked in the one thing.
[277:24.38] Yeah.
[277:25.38] I've been thinking about this.
[277:26.38] Um, I, SSR is, is, is tricky cause it was one of the last things that I was like debating,
[277:37.38] like it was a long time ago, but when I was like vetting this concept, um, we have to treat
[277:44.38] create async similar to resources where we like, we could do the same rerender model.
[277:48.38] Like we do right now, um, where we rerender components.
[277:51.38] So like the, and we cash the create async.
[277:55.38] What's interesting though, is we know whether to fetch again based on whether something through
[278:02.38] or not.
[278:03.38] Do you know what I mean?
[278:04.38] So like, I think we're actually safe.
[278:06.38] Um, assuming that we can, that we didn't fetch if something, if, if, if it through, um, like
[278:12.38] when you're chaining async, that was one of the problems I was trying to solve.
[278:15.38] Um, to be fair, SSR is a, is the hydration I haven't gone to so far.
[278:20.38] I've been only working on client side stuff.
[278:22.38] Um, so yeah, is it creating support async generators?
[278:31.38] Uh, yes, but I'm not sure what I, how I feel about me and dev have already hit some stuff.
[278:39.38] We, we talked about the server signals stream.
[278:41.38] Like technically if you just pass and create async takes a promise or an async generator,
[278:46.38] but it only, um, suspends during the initial until it gets its first payload, which it's a choice, right?
[278:56.38] Um, my, my, my, my reason for thinking that that is the correct choice is if someone wants to wait till the end to show the data from the async generator, then they could just convert the generator into a promise.
[279:07.38] Essentially the benefit of supporting generators the way that I'm explaining where it's like, basically until it gets the first chunk of data it's suspended is that it just gives you like a pipe.
[279:17.38] Right.
[279:18.38] Um, it just kind of, yeah, I don't know.
[279:22.38] Yeah.
[279:23.38] You think that's the correct choice.
[279:24.38] Yeah.
[279:25.38] So yeah, I've already implemented that part as well.
[279:27.38] Um, I'm, I'm interested to understand what the hack for SSR looks like, because it's not like we're going to sit there.
[279:37.38] And I don't think we're going to sit there and process the whole stream.
[279:43.38] I'm, I'm guessing it's basically again, the same logic when the first chunk or the first piece comes in, we assume suspense is over.
[279:51.38] That's what gets flushed.
[279:52.38] And then the rest of the data gets serialized over the wire.
[279:55.38] And we just, we just write it in on the client.
[279:59.38] Um, uh, so basically gen stream first piece of data.
[280:05.38] Okay.
[280:06.38] Stream hits data.
[280:07.38] Hasn't connected to the stream data.
[280:10.38] Suspends.
[280:11.38] Flushes shell.
[280:13.38] First piece of data comes in.
[280:15.38] Suspense boundary resolves.
[280:17.38] Send it to the client with that data.
[280:21.38] Additional data comes in over the stream on the server during the SSR process.
[280:26.38] It then serializes into the pages, HTML, like as part of the streaming.
[280:31.38] Yeah.
[280:32.38] I don't know.
[280:33.38] I honestly don't know how, how to do this versus are.
[280:37.38] Cause like, it's almost like the, if you, it's almost like if you never close the stream, the page would never stop loading because you would basically serialize it through that initial thing.
[280:48.38] Getting the stream to pick up again differently in the client is not something that I know what we would do.
[280:56.38] I think that's been my biggest concern about async generators, um, as a primitive on the basic side, because it works for your client side only, but I don't know how to make it work with SSR without it being like this weird thing where like the stream just keeps the original HTML request open.
[281:13.38] And it just keeps on streaming into the page, which is really odd.
[281:16.38] Anyway, maybe devil figure that out for me.
[281:19.38] Um, yeah, I don't know.
[281:21.38] Um, yeah, I don't know.
[281:23.38] I don't know if there's, there's anything more with this example I wanted to talk about, but I'm glad to get some clarity on the creative fact question.
[281:31.38] At least it, it helps me at least get, understand everyone's perspective a little bit better.
[281:38.38] Um, yeah.
[281:39.38] Okay.
[281:40.38] Um, yeah, I, I think, I think that's what I wanted to get out of this async segment.
[281:48.38] Um, yeah, I think that's what I wanted to get out of this.
[281:53.38] Let's other than say that I'm very stoked about this demo.
[281:57.38] I'm very stoked about this demo.
[281:58.38] It makes me very happy to see in one small place, all these concepts and ideas coming together.
[282:05.38] I think it demos well.
[282:06.38] Yeah.
[282:11.38] Yeah.
[282:12.38] I mean, you could all, yeah.
[282:13.38] I mean, I think the, I don't even want to think of what the first stream does with async generators.
[282:20.38] I feel like that's only holding the flush up to the first chunk again.
[282:24.38] I basically you create, you treat async generators as only unresolved until the first piece of data comes.
[282:33.38] So the first stream would work the same way until the first piece of data comes, we hold the stream.
[282:37.38] I haven't added any of the hydration or SSR mechanisms into the, you know, wrap around the core parameters yet.
[282:43.38] Um, we'll see how that works.
[282:45.38] I think, I think that's one of the, like those things that everyone wants a separate signals library,
[282:49.38] um, which I built now and, you know, pulling stuff in and figuring what stuff goes, but it's like this extra layer.
[282:57.38] Um, and it's funny because so much of the mechanisms are all signals anyways.
[283:02.38] So it's like, do I just like build very solid kind of specific stuff seemingly?
[283:09.38] Like it's hard with streaming and hydration because, um, they require serialization.
[283:15.38] Um, but like, I don't know, I'm going to see how that split works.
[283:22.38] It's, it feels like splitting for the sake of splitting is just like adding an extra like layer wrappers and overheads to something that could just be straight up optimized.
[283:32.38] I know, I know everyone wants like a separate signals library and we do need it so that people can run signals on the server.
[283:39.38] So like, I think this is probably sensible for this.
[283:41.38] It's just, it's an interesting split to me because I'm used to having complete power, you know, like just like build exactly what I want to build and trying to like.
[283:49.38] Look at this as like a general solution that also powers.
[283:52.38] The other one is just like walking through tape.
[284:01.38] Um, well, I mean the problem is certain ideas are core.
[284:04.38] Like you can't really build transitions on top.
[284:07.38] They have to be core.
[284:08.38] Like we're transactional stuff.
[284:09.38] The suspense type stuff is, could be built after with the cues, but it's like, you almost have to expose too much, um, to put it in fully in user space.
[284:19.38] So like, there's a lot of like async type, adjacent considerations, um, that really require you getting your hands in just abandoned SSR.
[284:29.38] Yeah.
[284:30.38] There we go.
[284:31.38] Solved.
[284:32.38] You don't need a separate signals library.
[284:45.38] I thought you needed signals on the server.
[284:47.38] You're not the only one.
[284:52.38] So, I mean, I, I've been hearing this complaint for years.
[284:57.38] Anyway, uh, let's see if we can whip up a this week in JavaScript or something.
[285:01.38] Give me a moment.
[285:04.38] I put my stuff together.
[285:05.38] We, if you haven't liked the YouTube video, please do.
[285:11.38] We actually have a decent audience on YouTube today.
[285:13.38] I'm sorry.
[285:14.38] I haven't been paying attention to Twitch and it shows there's only 20 people on Twitch right now.
[285:18.38] YouTube's like over a hundred.
[285:20.38] Yeah.
[285:24.38] I did not get any new Twitch subscribers today.
[285:26.38] I don't push Twitch hard enough.
[285:28.38] Not that I am in this for, oh no.
[285:34.38] I did Julio Burgos surprised, uh, subscribe with prime way back at the beginning of the screen.
[285:39.38] Thank you very much.
[285:41.38] Anyway.
[285:51.38] Okay.
[285:52.38] So let me just get some stuff together for this week in JavaScript.
[285:55.38] I'm sorry.
[285:57.38] The, the rendering explanation was a bit of a mess.
[286:00.38] Um, having the stuff crash on me multiple times was not fun.
[286:08.38] The funniest thing is, I mean, I got to play with it.
[286:12.38] You guys are talking about some of the video quality stuff.
[286:14.38] I've been having issues with my green screen and the lighting and stuff.
[286:17.38] I'm getting a lot of edge blurring and I didn't get this on previous versions of OBS.
[286:21.38] And I tried to play with the settings before stream and I'm still having issues.
[286:25.38] So yeah.
[286:26.38] Uh, let's get into, I wonder if I should put my, my tier list up.
[286:35.38] Um, from earlier, let's, let's see.
[286:39.38] I'm just getting everything ready.
[286:41.38] All right.
[286:51.38] When's the last time I streamed?
[286:55.38] It was a little, okay.
[286:56.38] There it is.
[286:57.38] January 10th.
[286:58.38] Okay.
[286:59.38] Duplicate.
[287:02.38] Let's go to solid.
[287:03.38] Duplicate.
[287:06.38] Oh yeah.
[287:07.38] There's a couple of spicy ones from my perspective on this one.
[287:10.38] Let's go to bookmarks.
[287:11.38] Forgot about, I forgot what I've been talking about the last few days.
[287:14.38] All right.
[287:18.38] That's good enough to get started.
[287:19.38] I haven't really been on socials as you guys can imagine.
[287:26.38] Cause I've been, it's been focused so much on, um, yeah, God, I haven't retweeted practically
[287:37.38] anything from the solid account in like two weeks.
[287:39.38] I'm, I'm the worst.
[287:40.38] Okay.
[287:47.38] Blue sky.
[287:48.38] Yeah.
[287:49.38] Okay.
[287:50.38] Let's do.
[287:51.38] See if there's anything on my profile here.
[287:56.38] Yeah.
[288:06.38] So 14 days ago I did the stream, which means I talked about all of this stuff on stream.
[288:09.38] Yeah.
[288:12.38] blue sky.
[288:13.38] That's specific anyways too.
[288:14.38] Okay.
[288:15.38] Good.
[288:16.38] Let's, let's do this and talk this week in JavaScript.
[288:22.38] Okay.
[288:23.38] So switch over to here.
[288:26.38] Um, this one's probably gonna be short except for if I can find some spice out of my bookmarks,
[288:36.38] but, um, let's see what my perspective is on this stuff.
[288:41.38] Cause honestly, I've been so deep down the reactivity rabbit hole that I am just not enough on stuff.
[288:46.38] So yeah.
[288:47.38] First off.
[288:52.38] Yeah.
[288:54.38] I mean, what do I got here?
[288:55.38] It's 20, 25, did your company budget budget money towards open source that runs it?
[288:59.38] I'm, I'm enjoying a lot of this push that David Kramer has been doing towards open source.
[289:05.38] Obviously he's been hiring, um, great people, people like myself, TK Dodo.
[289:10.38] Um, and he actually has a post where he lists like a whole bunch of people.
[289:14.38] Uh, uh, Nate Moore, um, from the Vastro.
[289:17.38] Like, you know, he was talking how he'd want to hire, you know, he had a whole bunch of people.
[289:23.38] There's a different tweet about that, but, um, obviously he's my boss.
[289:28.38] So, you know, you're like, we're just saying that, but, um, no, I, I, I'm, I'm, I, I, I obviously liked seeing people put money where their mouth is.
[289:42.38] Yeah.
[289:43.38] Yeah.
[289:44.38] Okay.
[289:45.38] Yeah.
[289:46.38] Okay.
[289:47.38] Yeah.
[289:48.38] Okay.
[289:49.38] Yeah.
[289:50.38] TK Dodo.
[289:51.38] Uh, you know, like react query.
[290:01.38] Um, anyways, uh, where was I?
[290:02.38] Uh, yeah.
[290:03.38] Um, I'm trying to think if there's anything else on this.
[290:14.38] Yeah.
[290:15.38] What, what, what, here's the one.
[290:16.38] I think this is an old observation at this point, but, uh, Ken Wheeler talking about, uh, the connection between programming and music.
[290:28.38] And he sits on literally 90% of open source you use is written by failed musicians, which is, which is kind of funny.
[290:41.38] Okay.
[290:42.38] I'll, I'll grab this one and the, and this one to see what's going on in a minute.
[290:48.38] Um, yeah, I don't know.
[290:52.38] I honestly, and after she called me out on, on like myself while I feel funny.
[290:57.38] Cause I did like myself this thing as well.
[291:00.38] Um, but yeah, I post up music for my old band, Mr. Solid.
[291:04.38] If people ever, ever want to check that out.
[291:07.38] Self promo.
[291:08.38] Here we go.
[291:10.38] Yeah.
[291:16.38] He caught me right off guard there.
[291:18.38] Um, lots of albums over the years.
[291:21.38] Um, I, I played with a band for like 15 years.
[291:25.38] Um, this is like, yeah.
[291:31.38] Anyways, good stuff.
[291:34.38] Uh, but it was an interesting cause I actually got kicked out of university.
[291:37.38] I, that is actually important part of the story.
[291:39.38] Um, I'm not telling people to get kicked out of university.
[291:41.38] I was dumb.
[291:42.38] I literally spent my time doing music.
[291:46.38] I like would stay up late.
[291:48.38] And it seems like business hours for doing music was between 10 and 1:00 AM.
[291:52.38] Like that's when you've got everything done.
[291:53.38] And, you know, talking to bands and, you know, but I'd be practicing before that.
[291:59.38] And I, I just, I didn't go to class.
[292:01.38] I, I, the final straw was that there was like a class that I thought I dropped and I literally.
[292:08.38] Like just didn't show up for the tests and it was enough to get my grade under passing.
[292:13.38] So yeah.
[292:14.38] Uh, I dunno.
[292:15.38] It's interesting.
[292:16.38] Um, I did go back and get my degrees.
[292:18.38] So I, for what it's worth, but that was for me, not for the knowledge.
[292:24.38] I'm not suggesting people don't go to university, but it was just interesting observation.
[292:29.38] All right.
[292:32.38] Who we got here talking about propping up bosses.
[292:36.38] My, my previous employer, um, Matt Billman from Netlify started writing a blog again, built
[292:42.38] it with, uh, Astro.
[292:43.38] I thought I'd just share it so that people can check it out.
[292:46.38] He's just talking about the importance of the web.
[292:50.38] Right.
[292:51.38] Right.
[292:52.38] And just like why the web is a great place, but I'm hoping this is the start of something
[292:58.38] great.
[292:59.38] So just putting out there, Matt.
[293:02.38] Isn't always the most pushing on social, you know, that you don't see him that much.
[293:06.38] The guy runs, um, Netlify and yeah, he's crossed 10 K followers on Twitter.
[293:12.38] Like that's, that's not what he's about.
[293:14.38] Um, but I find what he has to say, very insightful.
[293:17.38] So yeah, more people should, should check him out.
[293:22.38] Um, as I said, he's, he's not the kind of person to get in your face.
[293:25.38] It it's, I think it speaks perhaps the difference in company, you know, between say, like you,
[293:32.38] if you were to player, compare Netlify and Vercel, it's, it's a very different vibe.
[293:36.38] Um, and I think that comes goes all the way to the top.
[293:39.38] So, but you can just, yeah, so yeah, very, very cool.
[293:49.38] Um, but does it score in Lighthouse?
[293:51.38] It's built with the Astra.
[293:52.38] I'm sure it is.
[293:53.38] Oh, UBC.
[293:54.38] There you go.
[293:55.38] Another UBC grad.
[293:56.38] Huh?
[293:57.38] Yeah.
[293:58.38] Um, but this is kind of related.
[294:00.38] Um, because someone's like, now we got to build it in solid start.
[294:04.38] Right.
[294:05.38] Um, and actually probably not.
[294:10.38] If you're building a blog like that, Astro is, is the, is the perfect, uh, is the perfect platform to do that.
[294:31.38] Right.
[294:32.38] Um, yeah, I, I made, I made a comment because I've been talking a lot with, yeah, I'm just trying to see here.
[294:42.38] Yeah.
[294:43.38] I don't need to do that.
[294:44.38] I've been talking a lot with, um, Tanner and Fred at various points.
[294:49.38] If you remember way back to Jamstaff.com 2022, we had, Theo was making it like we had some secret pact alliance that would shape the future or something.
[294:58.38] We've been, we've been trying to see if we could work closer together for ages.
[295:01.38] Me and Tanner have managed to get there with start, but, um, and I, I want to get Tanner back on stream in the next few weeks to actually talk about that.
[295:11.38] Um, but essentially I was talking to them because people started kind of realizing that meta frameworks aren't general.
[295:29.38] I was talking about this in my article.
[295:30.38] Right.
[295:31.38] But like they are kind of more specific.
[295:33.38] It's funny.
[295:34.38] Like the frameworks are pretty general purpose.
[295:36.38] I mean, they might be good at client rendering, but like you need client interactivity, presumably in lots of, but the meta frameworks aren't as much.
[295:44.38] And, um, I wrote this statement, which made no sense to anyone react compiler is the signals or fine green rendering to be clear as next.
[295:54.38] Yeah.
[295:55.38] Yeah.
[295:55.38] Yeah.
[295:56.38] Yeah.
[295:57.38] Yeah.
[295:58.38] Yeah.
[295:59.38] Yeah.
[296:00.38] Yeah.
[296:05.38] Yeah.
[296:06.38] efficient at accomplishing that and catering to its specific goal. And then you have like the indirect path that kind of does it maybe not quite. Um, and misses maybe the primary audience or goal, but maybe is more generalized perhaps, but also way more complicated. Um, and
[296:36.36] like we talked a bit about the difference between signals and React compiler in the past. Um, it was just Next.js is targeting the same group as Astro. People wouldn't expect it first because React framework, you want reactivity, but they're actually aligned. Like they're actually sitting at the same place. And it's funny because people talk about their blog site. Don't build your blog site with solid start. I mean, you can, but why would you do that? Right. Um, and he's Colin, creator of a TRPC
[297:06.34] was like, build it. I'm going to show you this thread. He, he was building.
[297:10.68] He was building this, like, you know, showing that he's like, RSCs are shocking, pleasant way to make static sites. I'm surprised it's anyone, right? Because they kind of are good at this. This is what the use case is. Like the PHP, you load some data and then you load it in and you're like, ta-da, I'm done. And then he was like, well, actually the equivalent of Astro is pretty fresh. You know, it's basically the same thing. It must be admitted that the
[297:36.32] final Astro build is 29 kilobytes versus 841 kilobytes for next JS. But he, but next gives link prefetching and image optimization of the box. I also like TS files. I don't know. Okay. That's fine. To be fair, there is TypeScript support here in, in Astro. Astro does actually have link prefetching and image optimization. It might
[297:57.60] not be turned on by default, but it actually has both these features. So I actually, at the end of the day, it's a syntax preference and 29 kilobytes versus 841 kilobytes. That's the important part. Right. Um, so
[298:15.96] the next communist Astro has all that stuff. Yeah. I'm, I'm sure, uh, I'm sure. Yeah. Ben got in here. Yeah. Yeah. Yeah. Yeah. So
[298:30.64] like basically what I, what I'm getting at here is I didn't, this is, he posted this the same day after I posted what I posted and nothing to do with it.
[298:42.96] I, but this is kind of what it, it's kind of weird when you don't need an 840 kilobyte blog site. Do you know what I mean? Like I told you not to build your static site with
[298:57.36] Astro, but should you be building it with next app directory? It's the funny thing is, I don't know. Like this is, this is kind of the, the question or thought.
[299:11.34] Oh, we've got a raid coming in from, uh, uh, I can never pronounce names. Missio and Missio. Thank you very much for coming in. We're just doing, talking about some recent stuff and, uh, socials on, uh, Java, JavaScript framework kind of zone of things.
[299:35.00] I'm, I'm, are you surprised you're referring to BlockDOM? Do you have something I know of? I mean, there's, I mean, in Rust, that's true, but there's, there's like the BlockDOM framework itself. There's million. Um, in a sense, uh,
[299:53.00] Uh, DomC was a BlockDOM too. There's been libraries over time, but popular ones, I guess million is probably the most popular.
[300:02.72] Eevee might've done something in Eevee three or four that's BlockDOM that could explain that.
[300:15.48] Yeah. Yeah. Imagine not, but I appreciate the raid.
[300:18.12] Yeah. Eevee is. Yeah. Okay.
[300:25.32] It's, it's interesting. Yeah. Interesting to see if, if it makes its way into more mainstream that would instead happen is the frameworks went more defined
[300:37.48] Yeah. I mean, it's, it's possible Aiden's been focusing other, other places rather than the tool itself.
[300:52.28] He's been trying, you know, million lint or, you know, all the other stuff. So he might not be putting as much stuff in there.
[300:58.76] It's still around as far as I know. Um, anyway, uh, where was I going here? Yeah. Um, yeah. I, what is Next.js for? And this is actually kind of tied into one of the bookmarks I was looking at here because a couple of these showed up. Um, let's say honest opinion. Next is not the best app option for interactive, heavy apps like Cal.com, especially with the app router with RSCs.
[301:24.76] Next.js for, for sale is the WordPress for web developers. It's the easiest way to launch SEO and performance focused websites. However, to build highly interactive or data intensive apps, Next.js falls short in comparison with other frameworks.
[301:36.76] Probably the most interactive interactive dynamic app I've ever built scene is V0 dev full stack next featuring very fast loading times sharing public private and listening dynamic navigation.
[301:51.76] So it depends on what you consider dynamic from an interaction standpoint. It's interesting where, where this kind of tension is coming in. Part of the problem is there's a
[302:03.76] mutation stories like dashboard, like not even dashboards, but like mutation stories where your primary content changes often doesn't RCs don't help you there because they have to go back to the
[302:21.74] server and pull everything. You don't get granular updates. You can't be optimal there. Like, especially in terms of mutation. So it's like, it's, it's not the best pattern for a lot of highly interactive applications.
[302:36.74] WordPress sites are blazingly can be blazingly fast, especially on the static side.
[302:43.74] Yeah. Okay. So it's, it's, it's interesting to me that it seems obvious to me that RCs as a, as an architecture would not be as good for where the content changes, like the primary content changes because like wrap a lot because they, they do everything wholesale.
[303:04.74] They rely on caches on caches on the server in scenarios where you could actually just not make the request in the first place.
[303:11.74] Right. And the reason that this is kind of relevant here is because like, like I keep on circling this. It's, it's, it's an interesting tension.
[303:28.74] From their perspective with aggressive preloading and server caching as they are a good choice for interactive apps.
[303:36.74] Yeah. I, I, it depends on how interactive I don't actually think they go all the way.
[303:40.74] Right. The technically you can stick classic isomorphic, you know, interactive type stuff in your next app, but you have to close the loop on the mutations, right?
[303:50.74] If you're using server actions to re-render part of the page, it's really hard to like do granular updates on top of that.
[303:57.74] You end up trying to introduce, it's, it's very hard to like bridge that gap.
[304:02.74] Um, you, people end up just making the use client larger and larger.
[304:08.74] The joke is like, you just put use client at the top and you just forget about that. Right.
[304:12.74] I'm not saying that's right, but I'm just saying like, that's, that's where the, the, the tension is here.
[304:17.74] Um, so it's like, I, it's interesting cause I feel like, like where it's controversy.
[304:29.74] I I've been kind of critical a bit of server islands because they cause they cut the, even though they load from the CDN really quick, the, they can't parallelize the process of fetching the data for the server islands, so to speak.
[304:42.74] So they're, they're, they're actually slower to load the secondary content that comes in the dynamic part than if you had streamed from the edge or done PPR.
[304:52.74] So ultimately you see the static content faster, but the parts that load in are slower.
[304:57.74] So if your primary content is not static, then server islands are the wrong solution for you.
[305:02.74] But if your primary content is, you know, generally not getting invalidated all the time, then it's way simpler and way more performant.
[305:12.74] It's, I called it the new jam stack than doing what next is doing.
[305:16.74] So it's like, it's this very interesting in the middle, um, zone where it's not the best at heavily interactive stuff.
[305:26.74] And it's not the best at less interactive stuff.
[305:30.74] And the arguably you could say being in the middle means the more you expand, the more range you have, but arguably the better the solutions are on the outside, the less space it has to exist.
[305:42.74] If the, if the two ends meet.
[305:49.74] Yes.
[305:50.74] Right.
[305:51.74] Of course.
[305:52.74] But that only matters.
[305:53.74] Like if your primary content can't be served from the, from the CDN, then like, like it, like my hacker news example, silly thing.
[306:03.74] I mean, you'd probably catch some stuff there, but like, if your primary content can't, is literally like a header bar, then like server islands are going to be worse.
[306:14.74] Yeah.
[306:19.74] I mean, local first is, is, is like the extreme on the others, like not RSC side of things.
[306:26.74] It's like the, it's the extreme of the client, uh, granular thing that I'm talking about.
[306:34.74] So it's just, it's, it's an interesting thing because RSCs were designed to make next fill into that zone, you know, but had they gone so far that they actually have departed.
[306:49.74] We did a whole stream last time about this, but it's interesting to actually see the conversations pop up now on Twitter about this, right?
[306:57.74] Like, I don't know.
[307:02.74] It, it, it, it should be interesting to see how this kind of progresses out.
[307:07.74] Um, before I get off this platform and look at that blue sky thing that I have to look at.
[307:12.74] Um, core views calendar components live aim to be a simple lightweight calendar component for solid JS ecosystem.
[307:18.74] Thank you, Jasmine.
[307:19.74] Super, super stoked about this.
[307:21.74] Every time, like we have, it's, I told you it's endless, right?
[307:26.74] When you, when you, you know, people like, oh, where's your blank library?
[307:30.74] And you're like, oh, we have chat CN.
[307:33.74] We have all, you know, all the popular component libraries and approaches and, you know, things equivalent to this and that.
[307:40.74] And then people are like, okay, but where's this one component?
[307:42.74] And you're like, oh, like a date picker or calendar or something.
[307:45.74] It's like, they are the harder ones.
[307:47.74] And sometimes you will have all the components except for that one and the thing.
[307:50.74] So I'm very stoked to see, you know, the calendar components.
[307:54.74] It's just, it's one of those ones that I know takes a lot more time to make good.
[308:00.74] And I I'm glad to see that done.
[308:03.74] The data loading side of RC zero were hyped.
[308:09.74] Well, the automatic code splitting is barely mentioned.
[308:12.74] Yeah.
[308:13.74] Yeah.
[308:14.74] The codes.
[308:14.74] Well, it's the code size part is the part.
[308:17.74] It's funny though, but like, it's interesting because.
[308:20.74] Yeah.
[308:21.74] Yeah.
[308:22.74] In theory, it should be this.
[308:25.74] Do you know why?
[308:26.74] It's because in theory, it should be the same gains, almost equivalent to islands.
[308:31.74] But the problem is that because the baseline got bigger, people who make, who make a lot of noise and make their like simple demo apps, actually stuff got larger with next.
[308:44.74] So like from, from, from that perspective, like in real apps, I think there's definitely a positive benefit on the code size because of this.
[308:54.74] Um, but the problem is anyone doing anything trivial, just to kind of be like, look at this.
[309:01.74] So saw things got worse and no one's like the most complicated app.
[309:07.74] App someone's going to build as a demo app is a blog site, which means that someone could build it 10, 15, 20 times over with Astro plus Svelte or solid before they even catch up to the, the next app that says hello world.
[309:23.74] So like, that's why people don't talk about what, but if you talk about a really large app that has lots of code and component things, there's a huge benefit, right?
[309:36.74] So are you sending one megabyte of JavaScript instead of 10 megabytes?
[309:39.74] Yes.
[309:40.74] Right.
[309:41.74] And, and then the problem is people doing simple stuff, go, okay, I'm sending one megabyte.
[309:49.74] When, if I choose this other solution, I'm sending a hundred kilobytes.
[309:53.74] Yeah, I imagine so.
[310:08.74] Yeah.
[310:09.74] I mean, RSCs are basically islands.
[310:11.74] It's the same.
[310:12.74] It's it's yeah.
[310:13.74] Like islands is the only difference is the client side routing capability of RSCs.
[310:20.74] Um, and keeping share preserve state island with like view transition and stuff doesn't handle preserve state and hydration properly.
[310:28.74] But like from the initial render standpoint, like MPAs are the same mechanism on islands going all the way back to like Marco in 2014.
[310:40.74] Yeah.
[310:41.74] RSCs aren't special methods.
[310:43.74] They are actually just an implementation of islands from a certain perspective.
[310:49.74] Yeah.
[310:50.74] And state preservation because just adding client side routing to islands doesn't make it equivalent to RSCs.
[311:00.74] You have to be able to handle state preservation.
[311:02.74] Um, okay.
[311:05.74] So what's this blue sky thing I have to look at?
[311:07.74] Cause I think I'm, I'm at the end of, yeah, I'm good here.
[311:11.74] I'm good here.
[311:12.74] I mean, the only last thing here is new honeypot documentary coming out.
[311:15.74] The angular documentary.
[311:16.74] I'm again, shameless plug.
[311:19.74] Cause I'm a part of it.
[311:21.74] I, I actually recently did the beat one too.
[311:24.74] I've, I've been in three honeypot documentaries.
[311:26.74] Now.
[311:26.74] I think that's the record according to them, but we'll see.
[311:30.74] Um, I enjoy them.
[311:33.74] I like, I like, I like this kind of history of things.
[311:37.74] I don't know if you guys put speed running, but I'm a huge fan of summoning salt.
[311:40.74] Um, so like having someone go into our field and keep a history is really cool.
[311:55.74] Okay.
[311:56.74] So I'm getting shares.
[311:58.74] Let's start with this.
[311:59.74] Then is this the one I want?
[312:01.74] Yeah.
[312:03.74] Thank you.
[312:04.74] Yeah.
[312:04.74] Perfect.
[312:05.74] All right.
[312:07.74] Just saw an article pointing out this, the same create active with broken issue.
[312:14.74] I've been highlighting and nothing is noted is actually worse.
[312:16.74] She already dogs make no mention that it's outdated.
[312:18.74] Pretty frustrating to watch it.
[312:22.74] If I had a replay, I'm just real tired.
[312:24.74] It's not like the reactive metaphor cut permissions.
[312:26.74] And there's a.
[312:27.74] Launcher and nothing means.
[312:28.74] So there's something giving team point.
[312:32.74] This needs to be champion from the team.
[312:33.74] Yeah.
[312:33.74] Oh, this is like a general launcher that launches things.
[312:47.74] Yeah.
[312:48.74] We talked about this back when Theo made the beat argument.
[312:51.74] There's ever.
[312:52.74] But since the release of 19 and now breaks installs, we get RTL.
[312:56.74] So.
[312:57.74] Oh, interesting.
[312:58.74] So like, just no one's doing it.
[312:58.74] Yeah.
[312:59.74] Going to.
[313:00.74] As abandoned.
[313:01.74] There's yeah.
[313:02.74] Okay.
[313:03.74] So what's what's.
[313:04.74] I need to find where the drama actually gets in.
[313:06.74] Okay.
[313:07.74] We got spittack.
[313:07.74] Veet core maintainer.
[313:07.74] Let's see what this thread looks like.
[313:09.74] Okay.
[313:09.74] We got spittack.
[313:11.74] Let's follow it down.
[313:12.74] Okay.
[313:12.74] So here we go.
[313:12.74] Okay.
[313:12.74] Okay.
[313:13.74] Okay.
[313:14.74] So here we go.
[313:14.74] Sorry.
[313:15.74] Okay.
[313:16.74] Okay.
[313:17.74] Okay.
[313:18.74] Okay.
[313:19.74] I meant everything.
[313:20.74] sounds good.
[313:21.74] Okay.
[313:21.74] Everything sounds good.
[313:22.74] except the changing installation.
[313:23.74] Docs is unrelated.
[313:24.74] 80% 20.
[313:25.74] I agree.
[313:26.74] It shouldn't block, but I feel they're it's trying to say spas are valid to use.
[313:30.74] Veet.
[313:31.74] I mean, everything sounds good except the changing installation.
[313:32.74] Docs is unrelated.
[313:33.74] 80% 20.
[313:34.74] I agreed.
[313:35.74] It shouldn't block, but I feel they're it's trying to say spas are valid to use.
[313:36.74] I mean, everything sounds good except the changing installation.
[313:37.74] Docs is unrelated.
[313:38.74] 80% 20.
[313:39.74] I agreed.
[313:40.74] It shouldn't block, but I feel they're it's trying to say spas are valid to use.
[313:41.74] Vee.
[313:42.74] I meant everything sounds good except the changing installation.
[313:44.74] Docs is unrelated to 80% 20.
[313:46.74] I agreed it shouldn't block, but I feel they're it's trying to say spas are valid to use.
[313:47.74] Veet.
[313:48.74] I meant everything sounds good except the changing installation.
[313:49.74] Docs is unrelated.
[313:50.74] 80% 20.
[313:51.74] I agreed.
[313:52.74] It shouldn't block, but I feel they're it's trying to say spas are valid to use.
[313:55.74] Veet for that.
[313:56.74] Highly related to such you being more toxic.
[313:58.74] Spot is fine.
[313:59.74] Compile target output mode.
[314:00.74] If there's a good reactor that can output spot, we should list that.
[314:03.74] Veet is not a framework and we don't recommend cobbling your own bespoke framework from a build
[314:07.74] tool.
[314:08.74] Oh, this again.
[314:10.74] Man, I almost want to.
[314:13.74] I don't have time to do this.
[314:16.74] I wrote something on the other day on HackMD.
[314:23.74] My falling out with react.
[314:26.74] Um, I could publish this as an article.
[314:31.74] And it's like right on this.
[314:37.74] Reactor grade.
[314:38.74] Yes, I think it should be added.
[314:39.74] Actually, I'm not.
[314:40.74] Remix movie director is done.
[314:42.74] Create VDAC after the meta launches.
[314:44.74] Select react.
[314:45.74] Blah, blah, blah.
[314:47.74] Whatever it creates for you, isn't it?
[314:53.74] I mean, try the doc or anything else.
[314:57.74] Okay.
[314:58.74] So they're talking.
[314:59.74] Okay.
[315:00.74] That's great.
[315:01.74] Blah, blah, blah.
[315:01.74] Production app.
[315:02.74] The crisis issue not.
[315:03.74] It's awesome.
[315:04.74] Okay.
[315:05.74] I'm still trying to do.
[315:06.74] Create react defaults to meta frameworks.
[315:07.74] Oh, interesting.
[315:20.74] Hmm.
[315:21.74] That's it.
[315:22.74] That's it.
[315:23.74] That's it.
[315:24.74] That's it.
[315:25.74] That's interesting.
[315:26.74] Because now beats talking about changing what they point to with their CLI.
[315:32.74] Huh.
[315:33.74] CLI's and CLI's and CLI's and CLI's.
[315:39.74] I just kind of funny side because we were actually looking at like our CLI has the same choice where
[315:47.74] you choose between just static beat templates and solid start templates.
[315:53.74] Okay.
[315:54.74] Alright.
[315:55.74] We got a drama one.
[316:00.74] This doesn't be what Ricky has to say.
[316:07.74] The launcher idea through his legs, but not if it remains the idea of no move and it's
[316:12.74] for years than that.
[316:13.74] So instead of the move, we're hoping you've broken my nail it.
[316:19.74] Not it.
[316:22.74] Oh, it's this rewrite.
[316:32.74] It's the list spawn recommend beat.
[316:34.74] No to six.
[316:35.74] Yeah.
[316:36.74] This is such a funny thing.
[316:39.74] Yeah.
[316:40.74] Yeah.
[316:41.74] Yeah.
[316:42.74] I mean, if he takes it on, I guess, just it's just.
[316:51.74] It's just, it's just funny.
[316:52.74] Like, this is such a weird thing.
[316:57.74] And it's, I, I actually said that in the article that I wrote that this was the, like this change
[317:04.74] in react was the moment.
[317:06.74] moment.
[317:07.74] Um, that things changed for me with react.
[317:10.74] I don't know.
[317:11.74] I don't know if it's premature to show the thing that I wrote.
[317:14.74] Um, probably it's just, I was watching Theo stream on Wednesday and he was doing a new video on the last framework.
[317:23.74] Um, and he, he made a comment about how he could notice that I became increasingly frustrated with react.
[317:28.74] And he thought it was because they were closing the gap, you know, like basically react was 70% of where I thought it would be now that it's 90%, you know, it's close enough that it's good enough.
[317:47.74] Um, and you know, it didn't really matter.
[317:51.74] So that's why I'm frustrating.
[317:53.74] And I mean, he's partially correct.
[317:56.74] what, what annoys me about the, you know, they did make improvements and stuff, but what annoys me about that last gap is, is almost like an acknowledgement that they're, they're done.
[318:08.74] And I, I think, I think that's the problem.
[318:11.74] I don't think we should ever assume that we're done.
[318:13.74] Right.
[318:14.74] I, I think, I think it's dangerous to assume that you're done.
[318:19.74] Um, things are changes like the one constant.
[318:23.74] So like, I don't know, I will respond whenever Theo releases his, um, uh, video on the last, uh, the last react, the last framework or whatever.
[318:36.74] I will probably look at that on stream and we'll respond to it.
[318:40.74] But, um, until then, I don't, I don't think I want to poke the bear here.
[318:46.74] This, this conversation other than them still going with like, they don't want to promote, you know, bundlers.
[318:55.74] Um, but they'll let CRA just like burn into the ground is, is more of a frustration for react folks and not particularly dramatic.
[319:06.74] It's like, we've known they've had the stance for awhile.
[319:09.74] It's like one of those really, it's really odd stance from the outside.
[319:14.74] So, which makes it hard to understand.
[319:16.74] Cause you look at it and you're like, you just being like, do a spa with beat is such a no brainer, but, um, their vision for react.
[319:26.74] React, which is part of the, the conflict here doesn't really allow for that because for them react is not what it used to be.
[319:36.74] It's not a library.
[319:37.74] You know, it's just, I mean, it's no secret.
[319:52.74] I, I, on my last dream, I was fairly critical of react and I've just kind of had enough.
[319:57.74] And I, I, I, so I actually stopped and wrote it down because I was like, when did this really start for me?
[320:03.74] When like, cause I, every two years or so I write a reflection on where reacts at, you know, I did like two years after hooks and then I did nothing.
[320:12.74] Like generally I, I, I like keeping a pulse on it.
[320:15.74] Cause I, there's like a feeling in the ecosystem around react and stuff.
[320:18.74] And.
[320:19.74] I haven't written anything in two years.
[320:23.74] You know, I, I, I, yeah.
[320:26.74] After the hooks, when I did like finally understanding server components, that was the one I did around 21 or 22.
[320:31.74] And I think I'm not alone in my sentiment, but I also feel that the language that I chose to use, which is why I don't want to put it in here is too harsh.
[320:43.74] Um, this is why they can't recommend react and beat.
[320:49.74] Okay.
[320:50.74] Let me see that one.
[320:52.74] I mean.
[321:10.74] It's.
[321:11.74] Here's a get over here.
[321:16.74] Ben's really living with nothing talking about.
[321:17.74] What that means is react teaming climbers folks outside of her cell at this point.
[321:20.74] It's like the lack of docs around dot use is intentional.
[321:22.74] The docs are focused on end user and react doesn't want end users to use dot use directly without server components to fetch data.
[321:29.74] They recommend people use frameworks for data fetching.
[321:31.74] So what does.
[321:37.74] What does have to do with beat.
[321:42.74] Do you mean like from the fact that they don't want.
[321:54.74] They expose external API's, but they don't want everyone to use those API's.
[322:09.74] So this way they don't have to document the things that are like not as refined.
[322:21.74] I mean, I do this too.
[322:22.74] It's like it's it'd be like me documenting what solid.js web exports a little bit, because I don't want you to ever use it.
[322:30.74] The difference is framework authors don't actually have to use it, so I don't actually that for the local storage thing arguably, but yeah, I yeah, I don't know.
[322:43.74] It's an interesting place to be.
[322:54.74] Because if you do react plus feet, you literally can't do data fetching.
[322:58.74] Yeah.
[322:59.74] How does Tanner do data fetching?
[323:02.74] I mean, yeah.
[323:05.74] I don't think that's why, though, I think we're just seeing like two important philosophies line up in the most terrible way.
[323:19.74] Like, I don't think it's specifically next.js.
[323:21.74] They don't care if it was next.js or remix or whatever.
[323:24.74] It's just like they're trying to change what react is.
[323:29.74] And then at the same time, there's people who are who are willing to jump in and like take that torch all the way to to for their benefit in terms of like being the one react solution.
[323:41.74] So it's like, you know.
[323:46.74] Oh, man.
[323:50.74] This is like what I wrote is so relevant to this, but I think I need to save it for for for my next stream.
[323:56.74] It's already late enough.
[323:57.74] It's just.
[323:59.74] Yeah, yeah, we're just we're going to leave that that where it lies for now.
[324:09.74] It's just it's so tempting because it's completely on point with this.
[324:13.74] And I think that like, I think we're in a pretty interesting place in terms of like where react sits.
[324:25.74] And I don't think there's an easy solution for react.
[324:33.74] I mean, the problem is after a while you build up so much infrastructure, so many pieces that you you can't move without breaking and react is getting to that point where like they tried to take some steps and their feet broke, broke off, you know, like, and then the thick thing in a bit of the shin broke off.
[324:57.74] And they're like, okay, we're not we're not moving anymore.
[325:03.74] And it's fine.
[325:05.74] It's a natural life cycle.
[325:06.74] But it's also means that.
[325:08.74] React is.
[325:10.74] React is peaked.
[325:13.74] That's the term which is perfectly fine.
[325:16.74] It means it just means that, like, because like when you're at your peak, you're at your highest potential and you get the most things, you know what I mean?
[325:32.74] Like, so.
[325:33.74] React will continue to grow, but yeah, I think, I think, I think that is kind of like where, where we are now.
[325:45.74] It means that people mentally should be prepared that down the line, there are different things, but people don't want to.
[325:52.74] But I, I, I think we all feel it.
[326:01.74] Like, sometimes you just can't change the boundaries anymore.
[326:03.74] You can't.
[326:04.74] You just gotta, you know.
[326:06.74] React has done exactly what React was supposed to do.
[326:11.74] I think the crazy part is the people who think that like you, like stagnating or like going out this way.
[326:23.74] Like, it, it, it is a thing that is, it isn't like a good thing or a bad thing, but people who stand behind it as being like, you know, a good thing are just kind of like trying to stoke or hide a fire.
[326:36.74] It's just where things are in its life cycle.
[326:38.74] React is going to grow like jQuery now.
[326:41.74] Yes.
[326:42.74] It's interesting because, well, because they, they're still working on really important stuff.
[326:53.74] Getting the compiler and getting our season was like the, the thing they needed to just kind of like, like, it's like when the, you know, the guy in the quicksand is moving forward as he's syncing and he just gets the, you know,
[327:08.74] puts it in, they may have done it.
[327:10.74] You know, people, people, here's the thing is people who use things most love most.
[327:19.74] They're going to be naysayers and stuff.
[327:20.74] So they're going, they're going to always say that they're going to be the first people to be negative.
[327:25.74] It's, I don't, they might be earning early warning signs.
[327:28.74] I think it has happened.
[327:31.74] Now you can never tell until you get past it and you can look back and no fault of Andrew Clark or whatever specifically.
[327:40.74] But the moment that it became obvious to me was when, and I, this is not a stab at Vercel again, is when next 13 was the real React 18 release.
[327:52.74] That was when they jumped the shark, you know, that's a happy days reference, but that, that was, that was when you're watching the show and you're like, it's so sweet.
[328:03.74] And then you're like, did they, they, they did that.
[328:07.74] I mean, the show is still sweet, but you're like, it sticks with you.
[328:12.74] And then you're like, you think about it later and then you go back and go, Oh, that was, that was when it happened.
[328:18.74] It's not like the show deteriorated and wasn't good anymore.
[328:22.74] It just, it just, there was a subtle change and it took a while to be realized.
[328:27.74] It's like, you know, follow the Roman empire or whatever.
[328:48.74] So, yeah, I mean, it's, it's, I mean, there's, it's just where you are being, being at the top isn't a bad thing, right?
[328:56.74] It just, you, I think, I think, I think that's the scenario.
[329:01.74] And for different people who live on different parts of the curve, that means different things, right?
[329:08.74] There's always going to be people at the very front of the curve who are always chasing the newest things.
[329:14.74] There's other people, um, who live for the, the innovation.
[329:20.74] They live for the, the change.
[329:22.74] They aren't necessarily chasing new things just because they care about new things.
[329:25.74] They, they like seeing the impact of those changes, but those people you lose once you get near the peak.
[329:31.74] Right.
[329:33.74] And then like, you know what I mean?
[329:36.74] Like, yeah, I think react has finally got to the point where, um, I've lost interest.
[329:49.74] Anyway.
[329:50.74] Oh, with ending with that somber note, I guess.
[329:55.74] Um, I don't know.
[330:02.74] Sorry.
[330:03.74] That's all I got.
[330:04.74] I wish I had something.
[330:05.74] I should save the angular documentary to now.
[330:08.74] Like the, I was reading this comment from Dev and I was trying to figure out what he meant because I was like, view doesn't have fine grained rendering yet.
[330:23.74] but I guess it will angular.
[330:24.74] I mean, if view, if, if view can bring something to the masses, view already brought signals.
[330:37.74] So we'll bring, but yeah, I mean, I guess the idea is that like something that's already established, we'll take the stab enough to get the, to bridge the gap.
[330:54.74] And then.
[330:55.74] Yeah.
[330:56.74] I mean, I guess the idea is that like something that's already established, we'll take the stab enough to get the, to bridge the gap.
[331:06.74] And then the next thing.
[331:08.74] Yeah.
[331:09.74] I don't know.
[331:10.74] It's interesting.
[331:11.74] It's just going to be, yeah.
[331:16.74] Anyway.
[331:17.74] Um, yeah, I'm sorry about that.
[331:20.74] I didn't, I didn't realize to, I didn't mean to suddenly get so dark.
[331:24.74] Um, I don't know.
[331:27.74] Anyway, I think I'm going to, I'm going to call it a night.
[331:35.74] Uh, call it a week.
[331:36.74] Hopefully I can get Tanner in on the stuff soon.
[331:38.74] As I said, sorry again about the demo, not quite going there.
[331:40.74] I hope you learned something still.
[331:41.74] Um, you, you all have a great weekend and catch you later.
[331:46.74] You all have a great weekend and catch you later.
