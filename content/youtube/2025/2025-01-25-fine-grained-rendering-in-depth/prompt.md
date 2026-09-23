---
title: "kkUuaqDBSqA"
slug: "kkUuaqDBSqA"
duration: "5:31:49"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/kkUuaqDBSqA.m4a"
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
[00:00:01] All right.
[00:00:02] uh
[00:00:05] How's everyone doing today?
[00:00:08] Welcome to the stream.
[00:00:12] Thank you.
[00:00:13] Okay.
[00:00:14] uh
[00:00:16] Thank you.
[00:00:17] Bye.
[00:00:18] Today's going to be fun.
[00:00:20] This is gonna stream where the content could probably do like a front-end masters I think like it's gonna be a lot of teaching.
[00:00:26] But I've never done this content before. So this is more of a...
[00:00:32] It's going to be a bit of a trial run comparatively.
[00:00:35] I probably should have prepared more, but...
[00:00:38] Thank you.
[00:00:41] I always...
[00:00:42] start explaining signals and reactive rendering, and then I stop because that's when stuff gets
[00:00:48] difficult and today I want to look at the difficult parts
[00:00:54] It's quite hot in Cali, yeah.
[00:00:56] Yeah, nice, warm January day.
[00:00:59] In California.
[00:01:02] Yeah, I was like going...
[00:01:04] *sniff*
[00:01:06] Yeah, but...
[00:01:08] Well, I had an idea.
[00:01:10] We'll see what you all think about this, but...
[00:01:13] I thought it would be fun
[00:01:15] before we got even into the whole, like what is fine grain rendering, how it works is to get a perception
[00:01:22] with chat and you all of
[00:01:24] what rendering is or rendering performance in the browser
[00:01:28] Even...
[00:01:30] looks like.
[00:01:33] And for that reason, we're actually gonna play  a little game today.  We're gonna make a tier list.  I've never made a tier list.
[00:01:40] Before,
[00:01:41] But we're gonna make it to your list.
[00:01:43] a JavaScript framework
[00:01:45] or library.
[00:01:47] client-
[00:01:48] performance tier list.
[00:01:51] Uh,
[00:01:52] So
[00:01:53] If that's something of interest to you, you should definitely
[00:01:57] Check it out. Help me build this list.
[00:02:01] Obviously,
[00:02:03] these opinions
[00:02:04] ultimately will be mine.
[00:02:06] from my experience of benchmarking,
[00:02:08] So obviously they are completely 100% correct.  And if you disagree with me, you don't know what you're talking about.
[00:02:13] No, obviously there's going to be
[00:02:17] Um...
[00:02:18] There's going to be some
[00:02:21] disagreement, some differences. I don't think my placement will be off by more than one place.
[00:02:27] Um, but I think it would be fun to build a tier list. So I'm actually gonna,
[00:02:32] pop blue sky, let people know that we're live.
[00:02:36] Um...
[00:02:39] And I think we're already streaming live from
[00:02:41] So that makes things a lot easier.
[00:02:48] Thank you.
[00:02:50] Thank you.
[00:02:50] Thank you.
[00:02:52] Thank you.
[00:02:55] Dear.
[00:02:56] Thank you.
[00:03:00] Where are we going to be? I'm going to say Twitch TV. Sorry, I know I'm not sharing my screen right now.
[00:03:07] Um,
[00:03:09] Been a while since I've actually...
[00:03:12] Oh, okay.
[00:03:15] Yeah, so we got some people coming in. I'm glad you all could join me.
[00:03:20] Will we be looking at, I will look at some unreleased ones too, but I don't know if I can put Marco 6 on.
[00:03:26] They're still under the...
[00:03:28] the, I don't know what you're going to call it,
[00:03:31] I don't want to call it a ban, but...
[00:03:34] Sanction.
[00:03:36] Marco 6 is sanctioned.
[00:03:39] I just want to make sure I actually have my
[00:03:42] my,  uh,
[00:03:47] Oh, no. Okay. So RyanSolid9 is actually my YouTube, I think. I think I actually have RyanSolid on Twitter.
[00:03:54] which I can never remember this stuff.
[00:03:56] Beautiful. Okay.
[00:04:03] And actually we're going to include Rust frameworks too.  So let's make this front end...
[00:04:07] client performance tier list.
[00:04:21] I'm trying my best, okay?  Alright, alright, alright.
[00:04:26] Um...
[00:04:27] Let's see here.  Let's get the...
[00:04:31] Screen going.
[00:04:39] All right.
[00:04:41] Sweet.
[00:04:42] Got the retweet on Blue Sky.
[00:04:47] But yeah...
[00:04:49] Look, I've already gone through all the effort of finding the logos to
[00:04:54] basically every JavaScript library or whatever.
[00:05:00] The reason I'm doing this is because
[00:05:05] It's going to be a very illustrative way
[00:05:07] of
[00:05:11] I think.
[00:05:13] of showing...
[00:05:14] That while different render techniques matter, different elements actually end up
[00:05:19] impacting these things.
[00:05:21] a little bit
[00:05:22] It's not like just a one for one.
[00:05:25] Certain things...
[00:05:26] might over promise, under promise,
[00:05:29] But I'm looking here at purely client side
[00:05:32] rendering
[00:05:34] What, you know...
[00:05:35] So I'm not focusing on primary backend frame,  which you won't find an XJS on here.  And I'm looking at declarative libraries, jQuery,
[00:05:43] just doesn't make sense because it's like Vanilla JS.  Like there's no, like you can write it as infinitely.  If you want to know Vanilla JS is God tier, it's above S tier.  It's not even...
[00:05:55] on here, but I mean,
[00:05:58] um
[00:05:59] Yeah.
[00:06:00] So like, yeah, jQuery is God tier as well from that perspective.
[00:06:06] Right.
[00:06:08] Thank you.
[00:06:10] you
[00:06:11] So,
[00:06:12] We just had some fun here because I actually laid them out.
[00:06:17] in the order that they were released.
[00:06:20] Would you believe it that the very first
[00:06:22] declarative JavaScript framework that was released, not the most first to get popular,  but released by date was actually my buddy here, the big K knockout JS.
[00:06:32] Um,
[00:06:33] at least in my knowledge of JS frameworks. I did not, I'm not aware of some. These are just all the ones that I am aware of roughly on
[00:06:43] Um,
[00:06:44] dates, right?
[00:06:46] Brendan made JavaScript and then jQuery made the world. Yes.
[00:06:50] Yeah, it's like the...
[00:06:52] Yeah.
[00:06:53] Ah.
[00:06:54] You're for the history lesson. Yeah, I mean, there is some there is a bit of history lesson because this lets me tell the history a little bit, too. So.
[00:07:01] I was thinking I'd just go in order, right?  Right from start to beginning.  But the truth of the matter is I realized  as I kind of sat and looked at this list  that there are definite reasons
[00:07:12] Anchor points.
[00:07:14] Right. And almost this whole chart has to be anchored around the most successful, most popular.
[00:07:21] most known JavaScript frameworks. Otherwise, you guys watching won't have a state of reference to understand what we're talking about.
[00:07:28] Yeah, there's three views. If you see multiple logos, it's because I intend
[00:07:33] There's three Svelte as well.  There are some frameworks that have actually made  significant differences on specific releases,  enough that I'm gonna call out.
[00:07:42] Um...
[00:07:43] But...
[00:07:46] But like...
[00:07:47] Most of them kind of sit in the same zone over and over and over again, mostly.  Yeah.
[00:07:53] So actually, yeah.
[00:07:54] I mean, let's start with React because React is the...
[00:08:00] it's the thing that everyone probably has experience with that they can put on a state of reference.
[00:08:06] Where...
[00:08:07] Should I put
[00:08:10] React.
[00:08:12] What do you guys think? I have an idea where I should put React, but I want chat to help me out here.
[00:08:18] Okay.
[00:08:19] Thank you.
[00:08:20] Anyone guessing where I'm going to put React?
[00:08:24] All right, we got an E. Come on, chat. I need some participation. An F.
[00:08:29] F, we got C.
[00:08:33] Raxian, I think it says it all C or D.
[00:08:37] C. Yeah, okay. B.
[00:08:39] C right in the middle.
[00:08:42] See you or be.
[00:08:45] Yeah.
[00:08:46] And you're correct, actually.  Quick...
[00:08:49] I have... I'm going to be...
[00:08:51] as fair to quick as I could possibly be.  But if you go check the benchmarks, like the last couple of months,
[00:08:58] quick has for some reason fallen off the deep end.  I'm going to assume that's temporary and that they'll get themselves in order.  But
[00:09:06] There are, I'm going to look, I'm going to try and look at frameworks in their largest historical context, but judge them as harshly by the criteria that we have today.
[00:09:15] D, C, D, yeah, B, C. Yeah, all over the place, right? This is why we have to start with React, because without React, we don't have a frame of reference. So...
[00:09:25] For me, React is a solid D tier.
[00:09:29] I think...
[00:09:30] I think it is basically, it's not the worst we've seen.  It's not, it's far from the best.
[00:09:38] Um...
[00:09:40] It's.
[00:09:41] still considered a passing grade.
[00:09:43] But.
[00:09:44] Barely.
[00:09:50] Yeah, we are talking
[00:09:51] purely about front-end render performance.
[00:10:00] Thank you.
[00:10:02] I think that's a fair assessment.
[00:10:10] Quick though, if you go on the benchmarks right now,
[00:10:12] is like an F. I don't know what happened.
[00:10:15] But we'll get there.
[00:10:21] A vanilla B solid cell.
[00:10:24] Okay, so you're just doing the whole chart for me right out.
[00:10:29] Alright, let's keep on going. Okay, so now we have our frame of reference.
[00:10:33] All right.
[00:10:34] Let's go back to the beginning.
[00:10:36] Where should we put...
[00:10:38] Knockout JS.
[00:10:41] if React is a D.
[00:10:43] Where should we put Knockout.js? The first declarative JavaScript framework.
[00:10:46] used signals back in the day.
[00:10:50] -
[00:10:51] Because I'm a stickler to performance. Surprise, surprise, surprise. I see some B's going in there. B's, B's. Knockout's actually an E.
[00:11:01] I get why you guys see when it came to updating very specific parts of the Dom, Knockout to this day still runs circles around React.  The problem with Knockout, though, was you had to create.
[00:11:13] The page.
[00:11:14] You had to actually render the stuff initially. And Knockout would go through your HTML templates  and find all the data bind things and then reprocess it, making it
[00:11:24] making it actually incredibly slow to render.
[00:11:28] So...
[00:11:29] Even though
[00:11:31] It could.
[00:11:32] update the specific text on your page way faster than React, and still does.
[00:11:38] It generally
[00:11:40] was slow. You go one page to the next page and you're actually, it's slower than React.
[00:11:46] Right.
[00:11:50] Do you guys recognize this logo?
[00:11:55] Before you can bake a knockout app, you have to create the universe.
[00:11:59] Right.
[00:12:00] Knockout.
[00:12:01] No, Knockout was a fine grained render. Actually, this this is actually why I'm doing this chart.
[00:12:09] Knockout, the very first framework, was a fine-grained renderer.
[00:12:13] It doesn't just have signals, it has what I call, what we're going to define as fine-grained rendering.
[00:12:20] It was the first fine grained rendering framework.
[00:12:22] It was one of the first...
[00:12:24] possibly the first declarative framework, but it was it actually was a fine grain renderer and it had
[00:12:30] Signals.
[00:12:32] It just was so bad at actually...
[00:12:36] rendering the HTML. Like, that, like, Knockout was smart. If you changed a control flow, it didn't re-execute the whole tree, it did partial, like, it had all the aspects of, of, of,
[00:12:49] In fact, Solid's original control flow, I learned how to write Solid control flow by looking at Knockout's internals.
[00:12:57] Pinpoint updates.
[00:12:58] and modern fine grained control flow.
[00:13:02] It was a fine grained render. It just was bad at rendering.
[00:13:11] Yeah, so let's go. Backbone.
[00:13:14] Thank you.
[00:13:15] Backbone is a tricky one.
[00:13:17] Backbone?
[00:13:20] as described,
[00:13:22] would re-render
[00:13:24] the whole...
[00:13:28] Like, people would use Backbone and then they put, like,
[00:13:32] almost like jQuery type enhancements.  If I use pure backbone and had it redo the templates,
[00:13:37] Um...
[00:13:39] The thing you have to understand is this is all pre-virtual DOM.
[00:13:44] Knockouts at
[00:13:45] Hey, put a bunch of...
[00:13:47] you know, observable signals in there and update little things.  Backbone was like, we have models and then we revalidate views,  which means completely recreate them from scratch.
[00:13:58] Yeah, it's hard because part of me says that backbone should be like E. I don't know if there's actually a considerable difference between backbone and knockout.
[00:14:09] Um...
[00:14:10] It's on the fence. I'd say it's below Knockout, but is it an F tier?
[00:14:14] Um...
[00:14:16] I...
[00:14:17] Thinking of the benchmarks at the time, like the spinning circles and stuff, Backbone was actually fairly good on updates.
[00:14:24] I think that's going to put in the same category as Knockout.  This one's controversial, but let's keep back going with Knockout.
[00:14:33] -
[00:14:34] Mm-hmm.
[00:14:38] These are all client-side frameworks  that basically all do the exact same thing.
[00:14:42] They are literally there to create apps and update.  This is not something you choose because of a use case.  These are almost all completely equivalent.  They have special defining features,  but they're all almost equivalent.
[00:14:57] Right. And we are considering legacy here because we are starting historically.  Right. I haven't caught up to react yet.
[00:15:04] Um,
[00:15:05] AngularJS.
[00:15:10] Thank you.
[00:15:11] So
[00:15:12] AngularJS like Angular 1
[00:15:16] is a tricky one.
[00:15:18] It.
[00:15:22] It
[00:15:24] It actually, and because of Benchmark of Time, look at Hype.js, React 14, whatever, it's
[00:15:30] actually, I'd say on average ahead of Knockout, but below React.
[00:15:34] which sticks it
[00:15:36] solidly in an E tier for me.
[00:15:39] It's close to D.
[00:15:41] Um,
[00:15:42] But...
[00:15:47] But like for me from performance and stuff angular one was never a
[00:15:52] like it was dirty checking. In a sense, you can say that Angular 1 was the first block DOM  approach. We'll get to that later. But it was a dirty checking system that did a lot of
[00:16:06] unnecessary cycles and re-rendering, and those things cost more.
[00:16:12] And the last one that I'm going to talk about that came out before React is Ember.
[00:16:17] Ember was like Knockout.
[00:16:19] It had...
[00:16:21] Originally, Ember's Overtime has evolved. I probably should have more Ember on here. The only reason I won't have more Ember on here, because the newer versions of Ember did not actually ever change its performance profile.
[00:16:32] Ember to this day still is in the same place, even though it's completely been rewritten and new engines and glimmer and all this kind of stuff.  Unfortunately for Ember...
[00:16:42] Um,
[00:16:42] Not everybody can be a winner.
[00:16:46] From a performance standpoint, Ember had great features. I was an Ember developer. I was a knockout an Ember developer. Brian Florence was an Ember developer.
[00:16:56] But...
[00:16:57] Like,
[00:16:58] It was...
[00:17:00] it was basically just slower at everything.  Like even this, even though it used reactivity to do like some kind of fine grain stuff,  it was still even slower doing that reactivity.  And then they replaced the engine with almost something like a VDOM  and it was still the slowest VDOM and then basically every
[00:17:15] historical line of the way, Ember has always
[00:17:18] been pretty slow. Don't get me wrong, there are
[00:17:21] frameworks.
[00:17:23] on this list that are slower than Ember and we'll get to them.  But this is this is what the first four year, three to four years look like.  There was more frameworks, but you guys wouldn't have heard of them.  I tried to pick frameworks that have like over ten thousand stars today.  There's a few exceptions, but they're ones that possibly you could have heard of.
[00:17:41] Bye.
[00:17:42] Thank you.
[00:17:44] Yeah. Bottom of the E tier. I'm going to give it an F though, um, because it's,
[00:17:50] Yeah.
[00:17:52] Yeah, this is maybe a good sign that performance doesn't matter.  But what I want to say is show you is
[00:17:58] Look.
[00:17:58] Now this is up to 2014. We're sitting at 2014 right now.
[00:18:03] React?
[00:18:04] Looks pretty sweet here.
[00:18:07] in 2014.
[00:18:13] Right?
[00:18:16] Mm-hmm.
[00:18:18] You're reserving F for Blazer. I mean, that's fair too.
[00:18:22] Um...
[00:18:23] But yeah.
[00:18:24] But yeah, we talked a little bit about each one. React, the first virtual DOM library comes out at this point, and it is significantly better, a whole category better than every other library that came out at its time.
[00:18:38] It was not the first declarative thing. It wasn't the first like, I'm just a view. Knockout was actually has the exact same advertisement.
[00:18:45] You know, but...
[00:18:47] it was significantly better than everything up to this point.
[00:18:52] Right?
[00:18:53] We can't do GQ because it's not declarative.  That was one of the things I said right off the bat.
[00:18:58] it's god tier jquery became vanilla.js so you can write the most optimal code  possible jquery it's basically s plus it's it's off the top of the screen
[00:19:10] I almost have to put it on just so people are like,
[00:19:13] Where's jQuery? And be like, you know, up here somewhere.
[00:19:18] Um,
[00:19:20] Because you're right. As people join on the stream, they're going to be like, where is it?
[00:19:23] Okay, this R?
[00:19:24] I just included this one because I needed something else also from that time period, 2013-14 time period.  This is reactive.  This is Rich Harris's originally reactive framework.  Um...
[00:19:36] It...
[00:19:37] was...
[00:19:38] use git.set and set for its like signals implementation. It's
[00:19:43] very early work in him making kind of like a knockout-esque framework.  And in so it is also pretty solidly E tier.  But just wanted to give a quick shout out there because Rich Harris was already there pre his felt days.
[00:19:58] Um,
[00:20:00] Thank you.
[00:20:01] Awesome. Great to see you.
[00:20:04] Right.
[00:20:05] Blazer deserves its own category because they're so mean.
[00:20:12] Yeah, React is still, you know, like now we're getting into 2014. What else came out in 2014? Marco.
[00:20:20] Marco
[00:20:22] Actually, and I don't know the 2014 accounts, they're primarily a server based framework, right? They invented islands out of order streaming, basically suspense.
[00:20:33] By 2015, they had all the features that we talk about these days.
[00:20:39] but we're talking about client-side rendering.
[00:20:42] So, Marco...
[00:20:44] Surprisingly, I don't know if you guys know where Marco goes.
[00:20:48] Where do you-- I see some S's and A's in there.  I don't want to disappoint you all.
[00:20:55] But...
[00:20:56] Marco is not...
[00:20:58] for client-side rendering thing.
[00:21:01] Marco is actually I'm gonna put a D these days. I think it's kind of slid to an E  but
[00:21:08] It's always been very close to where React is.
[00:21:13] Yeah.
[00:21:14] Yeah.
[00:21:15] Yeah.
[00:21:17] So,
[00:21:19] We're after react.
[00:21:21] we're starting to see other frameworks kind of come in and go, oh, I can do what React does.  Marco...
[00:21:29] in version
[00:21:30] three
[00:21:32] I think I want to say around 2016, introduced its own virtual DOM.
[00:21:37] and, you know, pushed it a little bit more, but that's, we're not there yet. I'm basically going to put Marco around here.
[00:21:45] All right.
[00:21:47] Now we got view, and I'm gonna count this category as view 1 and view 2. I know there was improvements over it, but
[00:21:57] Yeah, we're now getting into 2015 now, right?
[00:22:00] Okay.
[00:22:04] Yeah, so view.
[00:22:05] One view two.
[00:22:11] is actually an interesting one.
[00:22:14] You're guessing B tier? That's not a bad guess.
[00:22:19] Not a bad guess. C, I think. D tier, maybe C. Yeah.
[00:22:25] Yeah, view!
[00:22:27] I'm gonna give it our first C tier.
[00:22:29] Um,
[00:22:30] Bye.
[00:22:31] It I don't know what about it. I think it was a slightly faster virtual dom. They had signals under the hood.
[00:22:39] They're going to make its re rendering process a little bit better. But generally, if I go back as far as I can, view has been basically
[00:22:49] just a category...
[00:22:52] above
[00:22:53] React. View always underrated. Yes.
[00:22:56] I did say, talk about Vue being underrated, being the topic of the stream.  This is also the last time that Vue is ever going to be ahead of anything.
[00:23:05] for the rest of this.
[00:23:07] But Vue initially was very...
[00:23:13] you know, did make a big impact.
[00:23:17] Yeah, getters and setters for data.
[00:23:25] Thank you.
[00:23:26] and
[00:23:27] You're getting ahead, but we'll see.
[00:23:32] Right, so view is pretty good.
[00:23:34] But Vue was not the only one. Around that time, single file components started showing up. We had things like Riot. I don't know if anyone's familiar with Riot. I imagine not, but I'll help you out.
[00:23:43] Riot
[00:23:44] is also a C.
[00:23:48] Um...
[00:23:51] Like Vue, these are new VDOM libraries that use signals, essentially, or under the hood, some reactivity to trigger their VDOM.
[00:24:07] - Okay.
[00:24:08] And what else? We're still in this like 2015 heading into 16 period.
[00:24:13] You guys might not know this one, Mithril.
[00:24:16] This one was like a faster, pure functional approach to the VDOM.  I'm also going to put that as a C.
[00:24:21] Basically, people saw React and they're like,
[00:24:25] we can do better.
[00:24:30] Right.
[00:24:31] Yeah.
[00:24:32] and
[00:24:33] They did.
[00:24:35] Honestly.
[00:24:37] As...
[00:24:39] As time kind of went on, we start seeing...
[00:24:42] things fill in.
[00:24:47] Yeah, I mean...
[00:24:49] Not actually sure. I guess it's still going. I haven't heard people talk about it as much, but there is definitely a contingent of people who tried to come over to Solid because of the optional, and they're trying to use the JSX without the compiler from the Mythril community.
[00:25:05] Mithril Community is a special one because they cared a lot about performance and
[00:25:09] functional purity,
[00:25:11] So they, like...
[00:25:12] At this time,
[00:25:13] The React core devs had this like real functional
[00:25:17] push kind of corp like but like
[00:25:22] Yeah, I don't know.
[00:25:25] Where's Aurelia? Yeah. I don't have Aurelia.
[00:25:29] To be fair, I
[00:25:30] And I just realized I don't have Elm either.
[00:25:36] I really showed up around this time period too.
[00:25:40] The tricky part is that
[00:25:42] It didn't
[00:25:43] I guess it has gotten over the 11K.
[00:25:47] Um,
[00:25:48] stars, so to speak.
[00:25:54] Yeah, I don't know as much about it. Let's see. Elm logo. I feel like we should get Elm in here because we
[00:26:01] because this is kind of like one of the first, um,
[00:26:05] Uh...
[00:26:06] What should I call it?
[00:26:12] Yeah, this is one of the first...
[00:26:16] Thank you.
[00:26:18] like compiled to JavaScript framework pieces.  So let's get Elm in here.
[00:26:28] Because Elm...
[00:26:31] Thank you.
[00:26:32] Yeah, okay, I gotta think about Elm for a second, because I haven't really thought about Elm
[00:26:37] very much much
[00:26:42] for a while.
[00:26:44] It's tricky because...
[00:26:48] D-
[00:26:48] Elm is...
[00:26:51] Might be...
[00:26:53] It's hard. It's either C...
[00:26:56] Or it's...
[00:26:58] Yeah, I'm trying to think of, because I know offhand where Elm sits...
[00:27:03] These days?
[00:27:04] right? It's kind of a
[00:27:07] It's kind of a C.
[00:27:08] Maybe.
[00:27:11] But I feel like historically it might have been more of a B.  So it's like...
[00:27:17] Oh, it's tricky.
[00:27:21] I'm actually gonna pull up an old GS Framer.
[00:27:23] benchmark with Elm back in the day.
[00:27:26] Just to kind of get my bearings here, yeah, let's look at this.
[00:27:32] Elm. Because like
[00:27:34] Okay, Mithril 122.
[00:27:36] View 2.
[00:27:38] 115.
[00:27:40] Uh...
[00:27:43] Yeah...
[00:27:45] Elm is...
[00:27:47] 1.34%
[00:27:48] Ember is 2.14, just to give you... I don't know why Mithril is slow on this one. This is pre-release, yeah. Mithril is like 1.22 there, okay. Yeah, okay, that's good enough for me. I'm going to put Elm as a solid C.
[00:28:00] Okay.
[00:28:01] Okay, so there we go. We got Elvin here.
[00:28:04] You certainly see a trend, right?
[00:28:10] Thank you.
[00:28:11] Yeah, I'm not sure if Leo is... Leo is great, by the way. I just...
[00:28:16] especially early on. There's sometimes...
[00:28:19] Different framework authors help other framework authors when they get started and other ones, you know, are just busy doing their own thing, which is perfectly fine.  Leo was always very supportive of my work in Solid.  And I sometimes think part of that, you know, might have inspired me to, you know, help others.  Yeah.
[00:28:40] Thank you.
[00:28:42] Thank you.
[00:28:44] Okay, so let's keep on going.
[00:28:46] It was a VDOM like React. But again, what we're seeing here is a bunch of VDOM libraries that are slightly improved over React.
[00:29:01] - Thank you.
[00:29:02] So the next one on here is important. This one, honestly, I think is going to be the most controversial
[00:29:08] placement for me.
[00:29:11] Where does Inferno go? Because there's clearly a trend. You're seeing how we're kind of building up. We started in E,
[00:29:17] React showed us that D was possible...
[00:29:20] And then, you know, Marco came in and then a bunch of these guys improved.  But then...
[00:29:24] out of
[00:29:25] left field,  we get Inferno.  And,
[00:29:29] Inferno, if you go look at tests and stuff today, it's probably verging S tier, but...
[00:29:36] The thing is, the funniest thing about Inferno is...
[00:29:40] About two years ago,
[00:29:42] something changed in the browsers and Inferno suddenly got faster without the code changing.
[00:29:46] So like, should have it always been faster?
[00:29:50] most of Inferno's life
[00:29:52] It's been a solid...
[00:29:54] Sorry.
[00:29:56] A solid A tier.
[00:29:58] Oh, why can't I drag anymore?
[00:30:00] So I'm going to put it here for now.
[00:30:03] It's questionable.
[00:30:05] But...
[00:30:06] But it's...
[00:30:08] It's...
[00:30:09] It's.
[00:30:10] It was the first framework that was like, like it just skipped the category. There was no B frameworks. Things that people are just kind of creeping past React to see. And Inferno was like, yeah, yeah, you guys, this space is a lot bigger than you thought. Like when React came out, people were like, oh, we probably hit web rendering performance pinnacle, you know, and Inferno was like, you guys aren't even halfway there. Um,
[00:30:34] What's questionable is whether Inferno should be S tier.
[00:30:40] Yeah, Power Static Analysis is in JSX.  Dominic Ganaway...
[00:30:45] way ahead of time in its approaches in terms of optimizing.  He took something that looked like React,
[00:30:51] and made it way faster by clever engine level optimizations and using static analysis on JSX, which would later lead him to get hired at Facebook to work on Pre-Pact for the React core team.
[00:31:08] his compiler skills to comp again because he was also the lead on Svelte 5.
[00:31:12] Um,
[00:31:13] So this is, I already mentioned where Rich Harris kind of jumped in the game, back with Reactive, but Dominic made quite the...
[00:31:22] Debut.
[00:31:23] One of my favorite people.  We did a stream with him.
[00:31:28] about a year and a half ago.
[00:31:30] You should check it out, Dominic.
[00:31:33] Uh,
[00:31:34] I'm actually going to pull this off YouTube so that we can actually, I can share it with you.  Dominic is a wizard.  Um...
[00:31:41] So, which is...
[00:31:42] Coincidentally, the
[00:31:44] the stream cover here. Let me see if I can share it. Yeah.
[00:31:48] Got it.
[00:31:51] Thank you.
[00:31:52] Thank you.
[00:31:53] Thank you.
[00:31:53] Thank you.
[00:31:55] I think I'm going to keep
[00:31:58] part of that stream around because he has the best quote that's going to be relevant for the stream.
[00:32:03] Yeah, he worked on Lexical at Facebook as well.
[00:32:07] kind of the React core team, the tricky part with compiler analysis is you need
[00:32:14] to set some certain boundaries or rules or constraints around it.
[00:32:18] And the React core team with the concurrent model wanted to go a different way.
[00:32:22] So basically they weren't able to apply his optimizations.  And he found himself kind of sitting on the React team and being like,
[00:32:30] How do I...
[00:32:31] fit in. The projects that interest stuff that they hired him for, you know, because like he basically blew everyone away with Inferno. He found himself like not being able to actually
[00:32:39] work on React moving forward. So we picked another incredibly difficult problem, which is getting high performance in text editors, along with accessibility.
[00:32:51] So there we go.
[00:32:52] We got Inferno.
[00:32:54] - -
[00:32:55] All right, next is Preact.
[00:32:58] Where do we think Priyat come up? Those two came up almost, I think, a month or two apart from each other. We're right at the end of 2015 right now.
[00:33:06] Thank you.
[00:33:08] Thank you.
[00:33:09] No, I will not be placing vanilla JS or jQuery. They're god tier. They're above the whole list.
[00:33:19] Yeah, no. Preact
[00:33:21] From, I follow benchmarks, Preact actually from a performance standpoint has always basically been another one of these C's.
[00:33:29] It's
[00:33:31] It's a good sea, but it actually, most of its life has lived very close to view, maybe even slightly behind view.
[00:33:41] So, Preact's gonna be a C.
[00:33:46] Thank you.
[00:33:47] Thank you.
[00:33:50] Alright, we'll talk about pre-active signals I think, but
[00:33:55] Well...
[00:33:56] Well, we'll get there.
[00:34:02] Thank you.
[00:34:03] Next one, I'm using the modern logo, but I'm only going to give Angular a second thing.  It's arguable that Angular 19 forward or the next version of Angular,  like there should be another Angular at the end of the list and it should use this new logo.  But I'm now doing Angular instead of AngularJS.
[00:34:21] A is Inferno.
[00:34:23] created by the author of, I shouldn't say the author, Inferno was put on the map, created by Dominic Ganaway, who's also took a lead on Svelte 5, and also author of Lexical, and former React core team member.
[00:34:43] Order doesn't matter, I'm just putting them in the order that they were released at the specific tier.
[00:34:49] So
[00:34:51] Angular 2, 3, 4, 5, whatever.
[00:34:55] *laughs*
[00:34:56] D, maybe even E. Anyone else got any guesses where I should put this?
[00:35:07] Thank you.
[00:35:10] Thank you.
[00:35:11] I'm waiting on ya.
[00:35:13] What do you got? E, D, C, S, D, C. Yeah. Angular.
[00:35:20] Thank you.
[00:35:24] Angular has always, this is the weirdest thing,
[00:35:28] I don't know how they do it. Angular
[00:35:30] and React have been lockstep
[00:35:32] for basically
[00:35:34] Forever I like I
[00:35:36] Only recently, that's why I mentioned it, in the last year or so, I've been seeing stuff, maybe different types of control flows and stuff, like things starting where Angular is separating itself.  But no matter the release, no matter what came out, React got a little bit faster, Angular will impact.  They basically have been lockstep for all of time.
[00:35:56] Thank you.
[00:35:58] Right?
[00:36:00] Is the same at the... The funniest thing is most frameworks actually move up at the same time. So generally, actually, yes. There's not enough. It's very rare that frameworks actually move more than maybe half a tier away from where they were sitting, comparative to their competitors.
[00:36:23] No, this is not Angular powered by signals.  This is...
[00:36:27] Angular, like, for the last...  Like, this is Angular 2 through...
[00:36:32] I don't know, 17 or whatever.
[00:36:37] Thank you.
[00:36:39] I
[00:36:40] Yeah, I mean, it would be, but I'm going to make you work.  People who know will know the logos.  It's a lot of libraries here.
[00:36:49] Um...
[00:36:51] Yeah.
[00:36:52] Angular with signals is probably a C.
[00:36:55] Maybe even a B.  The funny thing is, Angular tends to actually always be just a tiny bit ahead of a React.  It's funny because when you talk to the Angular folks, they're like, React, I don't...
[00:37:05] I don't pay attention to React, I don't look outside of Google, you know, like historically.  But they've always somehow managed just to be like right there or like right in front of.
[00:37:15] All right.
[00:37:20] Now, we get spelt.
[00:37:24] One.
[00:37:25] and two. So let's, we get Svelte one and two. I'm not that familiar with Svelte one, but I'm, so this is basically Svelte two.
[00:37:34] Svelte
[00:37:35] One and two.
[00:37:37] is...
[00:37:39] Any guesses?
[00:37:41] I know because I'm the one who did the upgrade from Svelte 2 to Svelte 3 in the JS Framework benchmark.
[00:37:45] Um,
[00:37:47] But this is Svelte 2.  This is before it got the updated syntax in the new compiler and all that kind of stuff.
[00:37:55] Got some C's, some B's, some D's, B or C, yeah.  I'm going to say that's felt too.
[00:38:01] Oh, man.
[00:38:03] was a significant improvement over, or Svelte itself was a significant improvement over Reactive, but it is also C tier.
[00:38:12] Yeah.
[00:38:14] All right.
[00:38:15] It is.
[00:38:17] is a
[00:38:20] It uses signals.
[00:38:21] And it uses like a form of dirty checking under the hood. It's it. It's funny. Dominic Ganaway.
[00:38:28] Um...
[00:38:30] Yeah, we'll get to his quote in a little bit.
[00:38:33] The disappearing framework thing really caught on with Svelte 3.  If you've never seen old Svelte 2, it looks more like reactive.  It had like...
[00:38:42] single file components, but it had like dot get and dot set for state.
[00:38:45] There's no like let variables. Svelte 3 is a svelte that everyone knows.
[00:38:50] This is the Svelte that
[00:38:52] only people who were doing benchmarks knew.
[00:38:55] It was not very popular.
[00:38:59] Right.
[00:39:02] So as you can tell,
[00:39:04] Now, that was 2016.  That was actually the end of 2000s.  Towards the end of 2016.  This framework might have actually come out before Svald and I might have put it in the wrong order.  But we have Inferno.
[00:39:16] At A...
[00:39:17] And...
[00:39:18] Um...
[00:39:20] Everyone else is kind of below it
[00:39:22] I'm gonna, this one here is a small framework
[00:39:29] Blazer has a client...
[00:39:31] Rendering framework.
[00:39:34] to my knowledge.  HTMX does not.
[00:39:37] Blazor actually has like a JavaScript framework that does rendering.
[00:39:45] This one here is a small one. This one's called Imba. It was made by the Scrimbub people. It was a compiled language, kind of like Elm concept.
[00:39:54] And they
[00:39:56] They...
[00:39:59] they kind of called it out as like the fastest framework.  They made this stupid benchmark that Rich ended up using  in the Svelte 3 release where they showed it was like 20 times faster than React.  The reality is,
[00:40:11] It wasn't.
[00:40:13] But
[00:40:15] If you're looking at the time and the type of frameworks that were popular and available,
[00:40:19] You know, there were other faster frameworks. I don't have like the fastest beat on things. They weren't that popular. Like other than like you can imagine when Inferno came out that there's like half a dozen other smaller frameworks that work like Inferno, but nothing that kind of caught on.
[00:40:34] Imba
[00:40:35] solidly
[00:40:37] is going, many of you probably don't know it, but it's going to be our first season.
[00:40:42] be
[00:40:44] Bye.
[00:40:44] Can't drag on this computer at all because it's stupid.
[00:40:47] It's going to be our first B tier framework.  It actually did have significant performance improvements over what had come before,  but it was it wasn't quite the same.
[00:40:58] Again, it was a virtual DOM approach.  It was leveraging a compiler, just not as efficiently as
[00:41:05] Inferno. Its big point of sale though was like the DX. Have you ever seen it? It's like CoffeeScript almost and the templating like CoffeeScript. It's like this, it's completely its own language.
[00:41:17] Yeah.
[00:41:18] Yeah, the marketing on Imbro was really good.  I remember that.
[00:41:23] All right.
[00:41:25] So we're
[00:41:26] basically at 2016 right now and
[00:41:30] Between 2010 and 2016...
[00:41:32] we went through half the list. It was a very fast period. We went from 2013-14 with React to filling in the rest of this chart in almost no time.
[00:41:42] Right?
[00:41:46] Um...
[00:41:48] Next one I got here is HyperApp. It's got like almost 20,000 stars on GitHub. You probably don't remember. It was, this is when libraries started, like, Preact kind of started this small library thing because Preact was only three kilobytes. Hyperact was like, can we do it in like 1.2 kilobytes?
[00:42:03] Um,
[00:42:05] HyperApp
[00:42:08] is...
[00:42:11] performance-wise was, you know, a VDOM or whatnot.  So it's...
[00:42:16] It's...
[00:42:17] It was small, so it loaded faster.
[00:42:19] But it is still going to be...
[00:42:22] This dictionary popping up is so much fun.  It's still going to be in this category, I think.
[00:42:27] Um, that's why I feel like it, I don't know if anyone knew it.
[00:42:32] Why was Preact faster than React even before signals?  Preact always went with a slightly lighter, more optimized version of a VDOM.  Preact and React historically have been closer in performance than people give them credit for.
[00:42:44] Um...
[00:42:45] But they've generally always just been a bit ahead.
[00:42:49] A lot of people, when Inferno came out, they assumed that Preact was up with Inferno.  Those are the two leading things.  But Preact and React were a lot closer than Preact was to Inferno.
[00:43:08] Second from the left in E, that's back one, yeah.
[00:43:17] Okay.
[00:43:21] It, Preact was created probably for size, I think. I don't know, we'd have to ask Jason Miller, but Preact was considerably smaller. React even back then was still like 30 some odd kilobytes. Preact was 3 kilobytes. Inferno split the difference around 8 or 9 kilobytes, or maybe 10 kilobytes.
[00:43:38] Inferno was about speed.
[00:43:46] No, Preact is still a VDOM until this very day.
[00:43:50] Preact is
[00:43:51] Yeah.
[00:43:52] It...
[00:43:55] This is why there's a lot of misconceptions out here. I really want to clarify on some of these parts.
[00:44:01] Um,
[00:44:03] if there was a major change like Preact stop being a VDOM,
[00:44:06] We will get to it and we'll have a separate category, but
[00:44:10] Preact is still here.
[00:44:12] .
[00:44:13] Okay, I got one for you all. Lit.
[00:44:18] There's any...
[00:44:20] It's funny because I didn't put this out here because people start saying like their favorite web component frameworks like shoelace or whatever. Generally speaking,
[00:44:28] Web Components will add a tier
[00:44:30] to your performance. So like if you're an A framework and you made the web components, actually that's not true. If you're towards the top end like an S or an A, it'll take two tiers off.
[00:44:40] And then if you're like, maybe like D, it'll take one tier off.  So if you had React and put in a web component, now you have E.
[00:44:45] If you had an S tier,
[00:44:47] and you put it in a web component, now you'd have a B tier thing. So lit
[00:44:52] itself, I'm talking about the renderer.  I'm not talking about the web components.
[00:44:56] lit itself
[00:44:58] might be middling, but the actual renderer, lit.html, is the one I'm talking about.
[00:45:04] You keep on saying D until I know what it is.
[00:45:09] Yeah, Lit is...
[00:45:16] a thin VDOM layer, yeah.
[00:45:19] In vivo for Preact, yeah, no. Lit has no VDOM. It's a dirty checking system, but it and another  lighter HTML, I think, or what was the original one? HyperHTML. HyperHTML by...
[00:45:31] which actually came out before Lit and did exactly the same thing.
[00:45:35] just, as I said, not as popular. And he made like four different frameworks. Every time he came up with a new version, Andrea Diomachi ended up like making it different and then getting different GitHub stars, unfortunately. So like it never got...
[00:45:47] popular but hyper HTML,
[00:45:50] in the spring of 2017,
[00:45:53] pioneered a completely new type of rendering, bringing back dirty checking, but leveraging the fact of cloning templates.
[00:45:59] um and more specifically template literals because template literals have this weird property i don't  know if you guys know with tag template literals it remembers
[00:46:08] the static array, like the static strings that you pass to it. So if you have a
[00:46:13] I mean...
[00:46:14] I can just put something in here so you can see what I'm talking about.  But if you have a tag template literal, like HTML,
[00:46:20] And you have a function like...
[00:46:22] let's say function...
[00:46:24] my component.
[00:46:25] Right.
[00:46:26] And then in here you have this, right? So you return HTML.
[00:46:31] And then
[00:46:33] You put like, I don't know.
[00:46:34] Div.
[00:46:37] really care, whatever. And then you have some interpolation in here where you have like some value five, whatever.
[00:46:44] This gets converted into essentially HTML function, and then it's like an array of static
[00:46:55] And then like a list of
[00:46:58] the holes, right? And this static array
[00:47:05] is static forever. If you call this function 10 times, they don't recreate this array.
[00:47:09] They just know.
[00:47:11] this array exists, which means that you can use this array as a stable reference, even if you re-render or re-recall this component over and over and over again. In a sense, it works like a VDOM.
[00:47:22] But...
[00:47:24] Um...
[00:47:25] it only fills in the holes by dirty checking the values in the holes. And the static array serves as a stable reference, kind of the same way that React hooks would keep references or whatever. Like, and this is an interesting property built into the base of the tag template literals, but it basically invented a whole new type of rendering back in 2017.
[00:47:44] It works like an Inferno V-DOM, kind of, yeah.
[00:47:46] And...
[00:47:48] Inso
[00:47:50] lit.html is small
[00:47:52] Fairly small, maybe about 12 or 16 kilobytes.
[00:47:56] And it's our second A tier.  Something finally joined Inferno at the top.  So...
[00:48:04] Credit goes or, you know, credits do, so to speak.
[00:48:09] Even if.
[00:48:10] Lit.  Lit.
[00:48:12] you know, with the web components and everything ends up maybe a B to C tier. Lit HTML is a
[00:48:18] brilliantly fast render.
[00:48:23] Thank you.
[00:48:25] All flames is a pattern, right? Well, I mean, blazingly fast, you know, this is the original blazingly fast Inferno, right? So these flame logos were a good way of showing people that you're blazingly fast.
[00:48:43] Okay.
[00:48:45] Right.
[00:48:47] .
[00:48:50] Alright.
[00:48:54] Yeah, I don't know.
[00:48:55] Did Cycle.js do anything for performance?  The biggest thing is...
[00:48:59] Bye.
[00:49:01] Popularity in benchmarks, it's hard without having it.
[00:49:07] Yeah, I'm talking about Vue 2. Yeah.
[00:49:10] Blazer needs a flame logo.
[00:49:16] Yes, this was thought for a while that your logo will fire you even faster. Okay.
[00:49:23] - Okay.
[00:49:24] Okay, now we're getting into 2018.
[00:49:29] This one you guys might have heard of, it's called Alpine.
[00:49:32] Um...
[00:49:34] It let's see if you can guess where it goes.
[00:49:37] It's a fine-grained...
[00:49:39] rendering
[00:49:40] system, like some of the earlier ones we saw, like Knockout, it uses signals, it does not use a VDOM,
[00:49:48] And it uses template data binding, kind of like Knockout did.  So when it renders the template, it has to parse through the HTML to...
[00:49:58] to get its bindings.
[00:50:04] Thank you.
[00:50:08] It is based on Vue's reactivity package, but as people should know, reactivity performance actually doesn't impact render performance very much. Like if your reactivity package is very slow, it will, but if you take
[00:50:21] almost any modern one and swap it, your framework won't be faster.
[00:50:28] That's not true of like five years ago, but these days, like the optimal change between reactivity doesn't make a difference.
[00:50:35] I
[00:50:36] Alpine
[00:50:37] is going to be our second one to go in the F category, actually.  Alpine.
[00:50:45] has fast reactivity, but its templating is slow, even slower than knockouts. They didn't optimize
[00:50:53] things like control flows, even though it was fine grained.
[00:50:57] Um,
[00:50:58] It's...
[00:50:59] Interestingly enough, not even because of the view, because it got the view activity in their own stuff. It's not even particularly small.
[00:51:08] Like, if you remember, there was a petite view thing Evan made over a weekend.
[00:51:12] Um,
[00:51:14] Because someone made some comment about Alpine being a better view, even though they were using Vue's JS reactivity. And I think that you don't piss off at MNU, especially when it's something that literally he could spend a couple hours, because Vue 1 was kind of like Alpine, or closer to Knockout.
[00:51:34] Thank you.
[00:51:35] So essentially,
[00:51:38] Thank you.
[00:51:39] It...
[00:51:40] It's basically knockout.
[00:51:43] but maybe slightly smaller than Knockout, but generally just
[00:51:47] Similar approach to Knockout.js, just kind of worse.
[00:52:01] Um...
[00:52:03] Yeah, I don't know. It's an interesting one because
[00:52:06] In some ways, it's really easy to adopt Alpine for...
[00:52:12] backends the same way it was easy to adopt Knockout or Backbone or some of these original tier ones for backends, which has made it popular. It's like a retro version.
[00:52:19] But in some ways...
[00:52:20] it hasn't actually improved and maybe even slightly worse than the original.  Like in some ways Alpine is better. They're better at
[00:52:29] handling what I call like hydration type scenarios where you're like trying to  wake it up in the client, the knockout,  knockout never really considered those kinds of scenarios.  Yeah.
[00:52:37] But on a raw performance level in the client, Alpine is...
[00:52:42] None. Yeah, see, everyone says it'd be biased, but the benchmarks don't lie. Solid, I'm gonna obviously... where am I gonna put solid?
[00:52:54] A tier? No.
[00:52:56] So it was the first S tier according to the modern, to the modern, um,
[00:53:02] Thank you.
[00:53:13] Thank you.
[00:53:14] Thank you.
[00:53:16] Thank you.
[00:53:20] Wiz doesn't do client-side rendering.
[00:53:23] Or if it does, it's like jQuery style.
[00:53:29] Shocked. Yeah, no, no, no shock.
[00:53:33] I mean, we're only at 2018 now, so we still got a lot of
[00:53:37] Time to go.
[00:53:39] Did modern, the funniest thing is it kind of did.
[00:53:42] But it didn't do anything.
[00:53:45] The browser's
[00:53:46] changed. So this is why I said Inferno was the most
[00:53:50] controversial thing here because the browser changed and now Inferno and Solid are almost next to each other.  Inferno might be like slightly behind, but it was from no change on Inferno's part.
[00:54:00] The browser changed.
[00:54:05] I'm not sure.
[00:54:07] So we've seen some compiled JS libraries.  Yeah, Blazor also came out in 2018,  and we're getting into the compiled languages  that aren't JavaScript.
[00:54:15] Blazer
[00:54:17] Some people made a joke that Blazer could have its own category, and they're not wrong.
[00:54:22] Blazer...
[00:54:25] Blazer is basically
[00:54:28] It almost feels bad putting Blazer next to Alpine and Ember because
[00:54:34] Alpine and ember are
[00:54:36] at least a tier's worth better than Blazor.  Blazor is essentially...
[00:54:43] Like it's hard to... like if you went out
[00:54:49] And just...
[00:54:51] took some JavaScript and then like,
[00:54:56] JSON stringified it, and then...
[00:55:00] inner HTMLed it everywhere and like,
[00:55:04] didn't do anything you could think of optimally, it would probably be faster than Blazor.
[00:55:11] Um...
[00:55:14] It's not Blazer's primary purpose.
[00:55:17] But it's it's like
[00:55:21] Yeah, I don't know.
[00:55:24] HTML is fine.  It's just that...
[00:55:29] Okay, next one.
[00:55:31] Another, first of the Rust libraries. This one was based on React.
[00:55:34] It's called You...
[00:55:36] It's a Rust framework that renders
[00:55:40] a B-DOM, just like React.
[00:55:43] See, what I'm hoping you get at here, for the most part, is from this point on, we can start getting more accurate at guessing where these things go.
[00:55:54] Yeah, you spelt Y-E-W, like the tree.
[00:56:04] Okay.
[00:56:06] Any guesses for you?
[00:56:08] Did anyone even know you?
[00:56:10] *sniff*
[00:56:11] Thank you.
[00:56:11] *bun*
[00:56:16] Probably faster than reactive slower than me.
[00:56:19] There is an overhead of doing Wasm in the browser that people have to get over, and you was not the one who figured out how to do it. That being said, you was impressive.
[00:56:27] because as the first Rust compiled framework, it actually did a decent job of
[00:56:32] matching its...
[00:56:34] its influence. So you here is
[00:56:39] I can spread these out a little bit. U here is actually a D tier.
[00:56:44] Yeah, Wasm has overhead.
[00:56:46] because of the communication and the serialization boundary.
[00:56:55] So,
[00:56:57] Pretty cool to see Rust on it. We've got
[00:56:59] Blazor, some C#, we got Elm, we got Imba, you know, where's Imba here? Some different, you know, compiled languages.
[00:57:10] But, I mean, U has almost 30,000 stars on GitHub.
[00:57:17] Okay, now we're in for a big one.
[00:57:20] One that really revolutionized the way people think.  This is Svelte 3.
[00:57:24] Um...
[00:57:26] Svelte 3
[00:57:29] Um...
[00:57:31] was a pretty significant jump up from Svelte 2. Not the biggest, to be fair, but Svelte 3 definitely...
[00:57:39] was an improvement here.
[00:57:41] Technically,
[00:57:43] Ew.
[00:57:44] Everything had been revised with the new compilation, but mechanically it was the same general idea where it was doing dirty checking that was compiler optimized.
[00:57:53] Um,
[00:57:54] But I think Rich had moved away from
[00:57:57] I don't know if he compiled the signals in one or two, but he'd moved away from from the like old reactive comp
[00:58:04] reactivity and almost went straight to like, let's get rid of it all. Let's just use the compiler on the language.
[00:58:10] So yeah, Svelte
[00:58:12] We got some guesses.  We got B plus B, A.  Yeah, B plus is actually probably...
[00:58:18] where this Svelte 3 goes.
[00:58:21] I think, I think...
[00:58:23] It is a good B framework. It is...
[00:58:26] I'd say slightly better than Imba for performance.
[00:58:29] We're going to copy one of these.
[00:58:32] No, not that.
[00:58:35] -
[00:58:38] Yeah, let's put it, let's put the three on it so we can see that this is a three.
[00:58:43] Svelte 3.
[00:58:44] I don't know if that shows up any good. Maybe it needs to be a svelte red... no, that's not it.
[00:58:50] White.
[00:58:51] *sniffles*
[00:58:53] Okay.
[00:58:55] It's like trying to pick a color that would actually show up against the background.
[00:59:00] Thank you.
[00:59:02] Maybe I just need to keep it green and then just like not overlap it as much.
[00:59:10] Keep it the neon green.
[00:59:12] Yeah, there we go.
[00:59:14] Yeah, Svelte 3.
[00:59:19] Yeah, there we go.
[00:59:22] I'm sorry.
[00:59:23] Thank you.
[00:59:24] So we have seen over time,  libraries kind of start getting up there.  But like in terms of a timeline...
[00:59:31] *sad music*
[00:59:35] This group has been taking a little bit more to move up, right?
[00:59:39] We're now, this is 2019, right?
[00:59:42] So
[00:59:43] By the time Svelte III comes out, we already have Inferno, we have Lit, we have Solid.
[00:59:48] It is a sizable improvement to Svelte though.
[00:59:52] Thank you.
[00:59:54] Thank you.
[00:59:56] Right. And then the next one I have on my list
[01:00:00] I guess I'm jumping right to 2020.  I guess the rest of 2019 was a quiet year.
[01:00:05] Um...
[01:00:06] Which is...
[01:00:10] So
[01:00:12] View three.
[01:00:15] Was that 2020 or 2021? It doesn't really matter. They were working on it long enough.
[01:00:19] So we're going to put view three in. And can you guys guess where view three is?
[01:00:27] Yeah.
[01:00:28] Yep.
[01:00:31] slightly behind Svelte.
[01:00:33] Little bit slower than Svelte, but
[01:00:36] Follow B tier.
[01:00:43] Thank you.
[01:00:47] The interesting thing about these is
[01:00:51] Going from two to three.
[01:00:54] They updated their change management systems, both of these frameworks.
[01:00:58] but they didn't actually change their mechanics for rendering. This is still dirty checking, this is still a VDOM.
[01:01:04] Just like this is the B-DOM.
[01:01:10] Yeah, September 2020.  Yeah, so I'm...
[01:01:12] I'm pretty accurate here.
[01:01:18] The F tier stands for Flutter. Flutter and Blazor can
[01:01:21] Battle it out.
[01:01:23] Flutter web. I don't know if Flutter mobile is any good, but Flutter web is not.
[01:01:27] particularly impressive.
[01:01:30] Preacti
[01:01:31] react equals view but react at this time
[01:01:36] No, Preact is still in the same place.  Preact has not moved at this time.  Preact is still solid C.
[01:01:43] 2019 to 2020, Preact is in the same place.
[01:01:50] Okay.
[01:01:52] Now we're getting to...
[01:01:59] 2021.
[01:02:03] And the next framework I have on the list is QUIC.
[01:02:08] Incredible non-hydrating framework.
[01:02:11] has signals,
[01:02:13] Right.
[01:02:14] Out of the frameworks that we have listed today at this point,
[01:02:17] Um,
[01:02:19] the only one that has signals that was created after
[01:02:24] I mean, it's hard to say.  If you had signals...
[01:02:27] under the hood. So then Vue 3 actually still has signals plus a VDOM. Svelte has an optimized compiler. Quick is
[01:02:35] Let's see if you can guess. Quick
[01:02:38] has
[01:02:41] Signals...
[01:02:42] plus a VDOM.
[01:02:48] Where do all the signals plus VDOM libraries go?
[01:02:51] The difference between Vue is a weird exception because they did incredible compiler analysis.
[01:02:57] But all these signals plus VDOM libraries
[01:03:01] are actually right here.
[01:03:03] So Quick comes in as a C tier.
[01:03:09] Thank you.
[01:03:10] Thank you.
[01:03:11] Thank you.
[01:03:14] - Yeah, in terms of performance in the client,  Quik was great, but in terms of performance client, it's not.
[01:03:19] uh, outstanding. It's actually
[01:03:21] It and Preact, I think they might even have the same base on their VDOM implementation, like the same inspiration.  There's a couple like, oh God, what is it called?  There's a few different VDOM implementations that were created back in the 2014-15 period.  Yeah.
[01:03:37] - Thank you.
[01:03:37] So VDOM plus signals.
[01:03:41] can... they can... they generally...
[01:03:45] highlight...
[01:03:46] really well.
[01:03:48] For the single...
[01:03:50] Pinpoint update case?
[01:03:52] but then you're paying more on the re-render because the signals are heavier than the VDOM.  So if you're re-rendering stuff,
[01:03:57] signals work against you.
[01:03:59] If you're doing pinpoint update signals work for you, they're kind of
[01:04:02] at odds with each other. Vue, through careful compiler analysis with Vue 3, managed to just break out of that
[01:04:10] but they are the only one
[01:04:12] That...
[01:04:13] And I think it might be true to this day that does signals plus VDOM.
[01:04:18] Above a C tier.
[01:04:19] That again makes view 3
[01:04:23] A view impressive.
[01:04:32] Frameworks in A are Inferno and Lit HTML.
[01:04:41] Yeah, this isn't about benchmark. This is about client side render performance across multiple benchmarks, mostly JS framework benchmark, but there's several ones. This is my that I look at. This is kind of my perspective.
[01:04:58] -
[01:04:58] Okay.
[01:05:00] You guys see the line face?  I got one for you.  Million JS.
[01:05:04] It uses
[01:05:06] a mechanism of using a compiler to
[01:05:10] To basically...
[01:05:14] Um...
[01:05:15] flatten out all the VDOM nodes into cloning
[01:05:18] Um,
[01:05:19] Similar to a solid...
[01:05:21] and it does cloning, but...
[01:05:25] keeps the whole...
[01:05:27] Kind of like VDOM-ish.
[01:05:29] Yeah, from its description,
[01:05:32] It should be an A tier list.
[01:05:35] But from its actual score and performances in benchmarks,
[01:05:39] We've got our second S tier.
[01:05:45] Thank you.
[01:05:47] Thank you.
[01:05:48] Million is...
[01:05:49] It's fast.
[01:05:53] Thank you.
[01:05:56] Million is very fast.
[01:05:59] Aiden came out and did this whole video where he's showing 70% fast in React.  That was not...
[01:06:04] accurate.
[01:06:11] Right.
[01:06:12] But million...
[01:06:17] is definitely
[01:06:19] faster than other solutions. BlockDOM in general, it's flask, because it's basically
[01:06:24] It's basically an optimal mentality of the VDOM.  It's essentially a...
[01:06:30] place where you've erased everything
[01:06:33] Um,
[01:06:35] But the holes.
[01:06:36] The way that, you know, Dominic Ganaway always described to me what a VDOM was.
[01:06:43] Right.
[01:06:45] It's funny because you see Svelte 3 and View 3 here, but a lot of people at this time period thought Svelte 3 and View 3 and Solid were all the same.
[01:06:53] This is not the case, actually.
[01:06:57] I wonder...
[01:06:58] Yeah, I'm going to try and share...
[01:07:00] a clip from one of my previous streams. Give me a second. I'm actually going to change how I'm sharing my screen to share this clip.
[01:07:09] Um...
[01:07:11] percent.
[01:07:16] Thank you.
[01:07:17] because this way we'll get audio through here. Let's do a Chrome window. I want to do
[01:07:22] What's this one?  Reactivity Ruins and Dungeons.
[01:07:25] On a...
[01:07:26] put Dominic on here for a second. We can listen to what he has to say.
[01:07:31] Anyway, I...
[01:07:33] It was nowhere near as fast back then. It was actually much quicker just to create the elements individually or use in HTML.
[01:07:39] So,
[01:07:40] What back then I looked into was using bytecode.
[01:07:43] And it wasn't like it would represent like, it would inference like this, go there and check the code.
[01:07:48] it would do that and you'd get back your component, which would like be...  I'm in the wrong spot. Never mind. I wanted to take a quote that I clipped from him.
[01:07:56] Yeah, let's forget this for now. I want to take a quote that I want to click
[01:08:00] clip from him where he's calling Svelte 3 a VDOM because
[01:08:04] Essentially,
[01:08:05] an optimized
[01:08:07] Um,
[01:08:08] compiler that did dirty checking and an optimized V DOM, like a block DOM is almost the same
[01:08:15] concept.
[01:08:17] so to speak.  So let me go back to presenting...
[01:08:21] my whole screen.
[01:08:25] Alright.
[01:08:27] Okay.
[01:08:29] So, yeah, I mean...
[01:08:33] It's arguable that in practice, million might be...
[01:08:37] an A tier because it still has to deal with a re-render model.  Maybe if you add million plus signals, you know, you could do something smart there.  But from a raw rendering benchmark performance standpoint, you know,  when people are clocking it, million is about as fast as it gets.
[01:08:55] Million is actually...
[01:08:57] And those can attest faster than solid.
[01:09:00] But,
[01:09:02] It also can't
[01:09:03] Hide.
[01:09:05] Um...
[01:09:07] Like, it doesn't solve the architectural problems, so there's cases where a million would be worse.
[01:09:24] If we remove spas, do we need reactively?
[01:09:27] No, I guess. But if you can't remove, I mean, when you say single page apps,
[01:09:32] Okay, no, it basically depends what you mean by single-page apps.  If you need client-side interactivity, you need reactivity.
[01:09:39] So I guess I'll put it that way.
[01:09:47] Well, it's still a VDOM library that depends on re-renders.
[01:09:52] So,
[01:09:53] even if
[01:09:55] You...
[01:09:56] render the stuff fast. It's like the exact opposite of the knockout problem. When we talked about knockout earlier, we're like, it's incredibly fast at updating the one thing, but then it sucks at rendering.
[01:10:07] because it also does template processing  and whenever you switch page,  you know, it's slow.  Million is incredibly fast  at just rendering,  but it's not as good at rendering
[01:10:18] like theoretically at doing the
[01:10:21] the more granular work.
[01:10:23] architecturally because it could,
[01:10:25] It can cause re-renders.  We'll get to that.  As I said...
[01:10:30] We're getting pretty close to the end of the time here on the tier list so that we can actually get into the guts of Feingrand. I just wanted to get people thinking about the kind of terminology and things we talked about.
[01:10:49] How...
[01:10:50] How relevant is rendering speed in 80% of the kids?  I mean, it's a good question.  If you're talking apps--
[01:10:56] Rendering speed is...
[01:10:58] It can impact...
[01:11:01] like the sluggishness and the feel of the apps to a certain degree.  But...
[01:11:08] How much hard to put into numbers when you're in a certain range here, how much of a difference is each one making?  I'm not sure.
[01:11:15] Sure.
[01:11:16] I will say it makes a bigger difference than reactivity performance.
[01:11:20] But
[01:11:21] Um...
[01:11:23] I don't know if it makes...
[01:11:25] a huge difference, but
[01:11:29] I again,
[01:11:31] This is mostly about...
[01:11:33] talking about, I mean, thinking about things architecturally and if they have the impact.  But you're right. None of this could matter conceptually.
[01:11:39] But this is just where the tools sit.
[01:11:42] from my perspective.
[01:11:47] Well,
[01:11:49] This is a good time to kind of bring this up because adding signals to another system
[01:11:54] has overhead.
[01:11:57] In a sense, solid signals plus
[01:12:01] millions rendering technique,
[01:12:03] is what Saul it is.
[01:12:06] He does the same...
[01:12:08] thing, the cloning the nodes.
[01:12:11] And
[01:12:12] like I told you how Leo from Mithril's big helpers,  uh,  you know,  experience and bounce ideas when I was starting,  um,
[01:12:21] I spent a lot of time with Aiden when he was first developing Million.  And you'll see a lot of...
[01:12:28] solid type influence in million although he also was looking at the other block down library um
[01:12:34] Block Dom, it's actually called Block Dom. So to be fair, there are other impacts on that as well, but it
[01:12:41] In a sense, the modern rendering technique is kind of that.
[01:12:48] It's just in like a rendering benchmark, you're not going to tell the difference
[01:12:51] You'll see the signals overhead.
[01:12:54] but you won't see the lack of signals not overhead.
[01:13:03] Thank you.
[01:13:04] Um...
[01:13:06] Inferno still has a VDOM. It caches VDOM nodes, but it still has a VDOM.
[01:13:11] Browser changes have closed the gap, I think, of the overhead of doing that, where million
[01:13:16] actually gets rid of the static nodes.
[01:13:20] like just turns the most into templates. It doesn't care about them where, um,
[01:13:25] You're still dealing with VDOM nodes with Inferno.
[01:13:32] Yeah, this has nothing to do with server-side rendering and first contentful paint.  It was funny, I was reading a benchmark or some client performance choice thing,  where they're comparing all the client-side frameworks, and they're literally using Lighthouse.
[01:13:44] That makes
[01:13:45] no sense. Like it makes sense from the perspective of like, I want to compare  back-end technology or whatever. But if you take this list of frameworks and then only compare  on Lighthouse, like it's SSR you're testing. You're not testing the framework's render speed.
[01:14:03] Okay. Next one.
[01:14:07] Leptose. Leptose is a signals-based
[01:14:12] reactive library written in Rust. It's basically Solid.js if it was ported to Rust.
[01:14:19] Thank you.
[01:14:20] The only Rust I've ever looked at was when I had Greg from Leptos on stream.  I...
[01:14:25] It sounded really novel, but I don't know.
[01:14:29] Yeah, every framework in this list will get 100 in a hello world.
[01:14:32] Pretty much. I don't think Blazor will. It is arguable that these F-Tiers can't make that 100 in Hello World. Maybe that's the... yeah.
[01:14:48] Yeah.
[01:14:49] Leptose, I think you guys know, there's a slight overhead.
[01:14:52] Getting pretty good at guessing. Leptose is an A.
[01:14:58] Thank you.
[01:15:00] Thank you.
[01:15:02] Thank you.
[01:15:07] Thank you.
[01:15:08] Yeah.
[01:15:10] This next one's Dioxus. It's a block dom.
[01:15:13] built in it.
[01:15:18] Thank you.
[01:15:21] Thank you.
[01:15:30] Yeah, Leptos is in Rust and Wasm, right? We have a few of them. We have Blazer.
[01:15:34] We have you.
[01:15:36] Leptos
[01:15:38] was huge because it actually showed that you could be fast.
[01:15:42] and use Wasm. Like, these ones are all in, like, React range. And people are like, "Oh, blah, blah, blah." This is, like,
[01:15:48] Look, if you want to write a highly interactive app where you don't care that much about maybe page load times,
[01:15:55] you can use Leptose and it will probably be smoother and outperform a React app.  That's what this is basically suggesting.
[01:16:04] Yeah.
[01:16:05] "Dioxys is also an A," says Greg. It's weird though because if I
[01:16:10] If...
[01:16:11] I wasn't going to give it an A, but that's only based on the JS Framework benchmark performance.  Can you explain, maybe, Greg, why Dioxus?
[01:16:19] is like a bee these days.
[01:16:24] It should be an A by all accounts, but I was just looking the other day and I was like, what's going on?  It was actually when I said the other day, I meant in preparation for the stream because I was expecting Leptose to be an A.
[01:16:35] Um...
[01:16:36] because we're basically seeing like the modern takes of of
[01:16:41] of JS frameworks.
[01:16:44] "Okay, let's just look at this." And we're like, "Okay, we've got block DOM,
[01:16:50] type stuff up here, solid.
[01:16:53] is here, Svelte 5 is here, right? They're right next to each other, which means I'm giving away something that's about to happen. Inferno is down here, getting into our A tier.
[01:17:02] Right?
[01:17:03] Um...
[01:17:05] Okay.
[01:17:06] We've got, like, this is arguably S tier still, but then we got Lit.
[01:17:12] Um...
[01:17:13] But
[01:17:14] If I look up for leptos,
[01:17:18] which is
[01:17:20] Here, it's, Lepto's has dropped significantly recently. Sycamore's here, which is also very similar.
[01:17:27] But.
[01:17:29] Good old...
[01:17:30] diet
[01:17:31] Ox... this...
[01:17:33] is down in like
[01:17:35] Preact range.
[01:17:42] Yeah.  I was going to give Dioxus an...  As far as I can tell, it's slightly behind  Leptose. So...
[01:17:51] For my my my tier listing, I was going to give it a B. Maybe this is
[01:17:56] Not fair.
[01:17:58] Maybe this is incorrect, but this is where I was going to put it.
[01:18:05] Um...
[01:18:07] Thank you.
[01:18:12] Greg says that it's an A. So should we trust Greg? I don't know. Maybe.
[01:18:16] Greg knows what he's talking about Rust more than I do.
[01:18:19] Fine. Greg, you've convinced me it's going to be an A.
[01:18:29] It's possible for the old version.
[01:18:32] This is my list.
[01:18:35] This, though, in a sense, is this.
[01:18:39] Do you know what I mean? It's solid a million, but in Rust. It's happening right here.
[01:18:45] Okay, this is React compiler.
[01:18:51] Fun one, where does the React compiler go?
[01:18:57] raw rendering performance.
[01:19:00] This isn't about the code you write, this is about just raw rendering performance.
[01:19:05] Yeah, I think this one's going to be fun.
[01:19:12] Thank you.
[01:19:14] Thank you.
[01:19:20] For all you guys saying D why why are you saying D?
[01:19:33] Thank you.
[01:19:34] Same as React, yeah.
[01:19:36] Yeah, I did get him too much of a hint.
[01:19:39] Yeah, it's a D.
[01:19:40] React compiler,
[01:19:42] is...
[01:19:43] writes really good React code,
[01:19:46] But if you...
[01:19:47] What happened to the...
[01:19:50] Did I crop it by accident?
[01:19:57] It lets you write really good React code.
[01:19:59] But...
[01:20:01] It also
[01:20:08] doesn't really change much.
[01:20:09] Similarly,
[01:20:10] If quick,
[01:20:13] VDOM with signals is here.
[01:20:15] You can guess that PreAquoSignals is also still a C tier.
[01:20:18] it doesn't change the quality of it.  Have you noticed to go from C to B  has almost requires compiler...
[01:20:25] Um...
[01:20:27] Interference?
[01:20:30] going from B to A,
[01:20:33] has required dropping the VDOM for the most part.
[01:20:38] to either a block dom or a reactive thing. Inferno,
[01:20:43] is just so optimized that Dominic somehow
[01:20:47] change the math.
[01:20:54] Thank you.
[01:20:55] Yeah, just kind of putting that out there.
[01:20:59] Yeah, so yes, the React compiler doesn't change anything.
[01:21:01] Yeah, benchmark code is already written in an optimized way, exactly.
[01:21:07] Thank you.
[01:21:09] It just means you don't have to write the optimizations of your dev.
[01:21:13] That being said,
[01:21:14] If you look
[01:21:16] at
[01:21:17] the optimized code.
[01:21:19] for frameworks that aren't called React, you'll find that
[01:21:23] Um...
[01:21:24] or like the non-rerender framework,  you'll find that funnily enough,
[01:21:28] The basic code...
[01:21:30] is the optimized code.
[01:21:32] Um,
[01:21:34] It's an interesting thing that we started noticing is that
[01:21:38] the
[01:21:39] idiomatic code for solid was the optimal code, where the idiomatic code for react was not the optimal code.
[01:21:45] Um, it's interesting.
[01:21:59] I mean, the million JS that goes in the benchmark,  people use million in React,  but it's not React doing the rendering.
[01:22:06] So I don't count million as like you're he in a sense million maybe doesn't belong on this list because.
[01:22:13] Um...
[01:22:16] Aiden didn't really want to make a full framework and push it.
[01:22:20] But like,
[01:22:22] There's basically nothing...
[01:22:25] Million is more like a parasite that lives in your React app.
[01:22:29] Like, there's nothing about the part that Million does that is React.
[01:22:38] - Zoneless, Angular, or not yet.  No, I haven't talked about it too much, but...
[01:22:43] Zoneless is enough to bring Angular up a tier into the C range, and maybe even B.
[01:22:52] Historically, zoneless has been C, but then Angular's been working on stuff like control flow.  If you look at the new Angular stuff in the last year, a lot of experimental stuff, Angular's actually up into the Bs.
[01:23:01] But generally speaking, even zoneless,
[01:23:05] on its own, is not  going to... It's basically a tier...
[01:23:08] level thing. There's so many different modes of Angular  that for the most part historically  when people just go and test stuff  at a base level, Angular and React  have been lockstep.
[01:23:21] So we've got two left.
[01:23:23] We got Svelte 5.
[01:23:25] And we got View Vapor.
[01:23:32] Yeah, I mean, people kind of can guess where this is. Where does Svelte 5 go?
[01:23:41] I already...
[01:23:42] kind of revealed this earlier.
[01:23:44] Svelte 5 is S tier.
[01:23:54] Cell 5 is not any slower.
[01:23:58] really, Svelte Vibe
[01:24:00] and solid are basically identical.
[01:24:03] And it's because they are also very close in implementation.
[01:24:11] So...
[01:24:12] Um,
[01:24:14] it signals it's fine grain rendering a lot of the stuff that we talk about today um
[01:24:20] As I said, we started with reactivity and we're back here, you know,
[01:24:23] 15 years later.
[01:24:29] Vapor,
[01:24:31] I don't know where Vapor goes because it hasn't been released.
[01:24:33] Vapor?
[01:24:35] in Evan's original show
[01:24:37] Was S tier?
[01:24:39] in the current benchmark, it's A tier.
[01:24:41] I'm going to be an optimist.
[01:24:43] And stick Vapor up here.  Because I trust the Buteam does good stuff and that it will get there when it gets there.
[01:24:52] Okay.
[01:24:52] But...
[01:24:54] This is...
[01:24:56] This is...
[01:24:58] Thank you.
[01:25:00] This is sort of the scenario.
[01:25:02] The only thing...
[01:25:04] that it is worth,  that is interesting kind of pointing out as,
[01:25:09] the time period
[01:25:12] when we first started putting these,  uh,
[01:25:14] these on our tier list.
[01:25:16] Like when we, like from 2000,
[01:25:19] And 10 to 2014, we had maybe...
[01:25:23] Five of these, right?  From 2008,
[01:25:26] and 14 to 2018
[01:25:29] we had
[01:25:30] 20...
[01:25:32] But four of them.
[01:25:34] And in the last...
[01:25:37] or maybe 22 of them.
[01:25:40] In the last
[01:25:42] eight years
[01:25:44] We added on like
[01:25:46] the last eight, so to speak.  So, like...
[01:25:52] There was eight years or there was seven years.
[01:25:58] between
[01:25:59] solids S tier and salt v's S tier, like in terms of timeline. There was
[01:26:05] There was...
[01:26:06] Um,
[01:26:10] Between Inferno going to A,
[01:26:14] And like...
[01:26:16] Anyone else even getting above B was like three years.
[01:26:23] So, yeah.
[01:26:33] As to your second position, that's million.js.
[01:26:39] But that is my...
[01:26:40] completed list, I think.
[01:26:44] shrink this down.
[01:26:46] Little bit.
[01:26:48] Blow it up.
[01:26:50] But
[01:26:51] Okay, this is how we start
[01:26:55] Yeah.
[01:26:59] Next.js, from a client rendering perspective,
[01:27:03] it is the same as React.
[01:27:08] Yeah, so yeah...
[01:27:11] This...
[01:27:13] The funny thing about this is this table starts showing you how Svelte 5 Solid View Vapor
[01:27:21] are here.
[01:27:23] Preact with signals is here.
[01:27:27] And
[01:27:27] Interestingly, React with signals or Jyotai is still down here in D tier.
[01:27:34] A framework
[01:27:36] with something additional
[01:27:38] is never faster than the framework itself.
[01:27:41] Right?
[01:27:42] And it's...
[01:27:43] Thank you.
[01:27:44] Part of it is because you're not mechanically changing how the framework works.  So we're going to talk about mechanically how the frameworks work.
[01:27:52] Right.
[01:27:56] That's a, that's a, it's a very negative way of looking at things.
[01:28:01] But...
[01:28:03] In this vector, yes.
[01:28:05] not no improvement, there have been improvements over time. This is, yeah, it's, it's, do you, do you, actually, you know what?
[01:28:14] I made React purposely the anchor point.  So React couldn't improve unless they did something completely drastic.  And that's why they were a good anchor point.  React has improved over the years.
[01:28:26] And everyone else next to them has improved over the years ever so slightly.
[01:28:31] Because React is such a stable anchor point, it was easier to show when other things make bigger jumps. So React has gotten better in 12 years. Sorry, that wasn't fair.
[01:28:42] It's just that like...
[01:28:45] Yeah, Solid 2 will still be in the exact same place, or so I hope.
[01:28:53] Performance.
[01:28:55] is not...
[01:28:56] what I'm chasing anymore. I want to make good performance and find good performance in different areas, but
[01:29:07] In the past seven, eight years since Solid's been here,
[01:29:12] we haven't meaningfully moved beyond this model.
[01:29:16] and I don't know if we will any time. Even Dom said it back in 2016, he thought he was done.  And to be fair with the browsers improving the way they have, and I'd say
[01:29:26] Inferno is like more S tier than, you know, than this might show now.
[01:29:32] Um,
[01:29:33] He was done. He was like, "Performance in the browser is a solved problem." He said that back in 2016.
[01:29:41] He's kind of right.
[01:29:45] It's just taken...
[01:29:48] eight, nine years for everything else to catch up.
[01:29:52] So yeah, I'm not expecting solid to be like way faster here.
[01:29:56] It's just
[01:29:58] you know what I mean?  Like,
[01:29:59] It's
[01:30:00] It's all it's been that fast.
[01:30:01] It just meant I haven't had to worry about performance for eight or nine years.  I've been working on other stuff.
[01:30:07] Thank you.
[01:30:20] that's the question  I don't know if we have an approach that's  better than this in a significant  way the it we've  gotten very close to like
[01:30:29] Vanilla JS. There's still overhead and over time I expect it, but it's been, we're really, you know, the 80-20 rule, we're at like the 90-20.
[01:30:38] 10 rule at this point.
[01:30:45] Like Wasm could get...
[01:30:47] Uh...
[01:30:49] But
[01:30:50] Uh...
[01:30:54] You know, you can prove maybe... See, that's the thing.
[01:30:57] without leptos or Dioxys changing their code could cause a change to happen here. But
[01:31:04] All that can happen at this point, I think, is either through browser or work of the stuff that the frameworks kind of get more up into this S tier area.
[01:31:13] Imagine solving...
[01:31:15] performance and then resting for eight years.
[01:31:17] Well, I mean, what Dominic tried to do was to go and apply his knowledge to other areas.
[01:31:24] That's why he gave up Inferno. He's like, yeah,
[01:31:28] I did it.
[01:31:29] You know, he's like, okay, can we make react faster? Can you know, and that, you know, that wasn't,
[01:31:34] where React is heading. And then it's like, you know, do lexical, right?
[01:31:39] And then he came back and he's like, guess what? I can make Svelte faster.
[01:31:44] And he did, from Svelte 3 to Svelte 5.
[01:31:48] You know?
[01:31:48] So,
[01:31:49] Yeah.
[01:31:54] Thank you.
[01:32:02] I mean, meta frameworks are overhead.
[01:32:05] But...
[01:32:06] Um, it,
[01:32:08] Everything's an overhead.
[01:32:10] That's why when benchmarks you focus on a specific thing, right?
[01:32:14] Your actual site's performance is going to be based on your actual site's performance. These are only indicators or things that can help. They're not the reality.
[01:32:27] Make a solid fast-curture for making more fine-grained.  I don't think so. That's actually the hardest part.  Could have made solid more fine-grained, but it was actually more expensive.  Fine-grained versus not has a creation
[01:32:40] versus update
[01:32:42] Um...
[01:32:43] trade-off
[01:32:45] And what I started learning was that
[01:32:47] Loosing granularity was the key to...
[01:32:50] performance because you spend a lot more time in creation on certain types of tasks.
[01:32:54] So, yeah.
[01:32:58] Okay.
[01:33:01] Ryan placed Marco Six on the cheer list. It will allow this one time for fans.
[01:33:05] Marco 6 is also S tier as far as I've seen it.  I was working on it.  It was up there with View Vapor.  So it's the same.
[01:33:11] signals, fine-grain rendering thing.  I think anyone...
[01:33:17] who saw, see, that's the thing.  I think Solid's more popular with framework authors  than it is with people.  I think anyone who understood how this stuff works  and saw Solid was like, yeah, we're going to get there.  You know, it might take,
[01:33:29] a few years, but we're going to get there. Angulars in that boat,
[01:33:32] you know,
[01:33:33] view svelte
[01:33:36] Marco6 definitely...
[01:33:42] Next year, see,
[01:33:43] That is an interesting challenge, right?  Because the only library up here
[01:33:50] that doesn't that can get
[01:33:52] Like, to be fair, solids...
[01:33:54] approach without a compiler is also S to A tier range.
[01:34:00] But the only one, I'm gonna, here you go.  I know you're a web component guy.  I'll give you a little highlight.
[01:34:05] Lit is sitting up here
[01:34:07] When you consider like
[01:34:08] the compilers and all the stuff up here. Lit is sitting here as a as a as a non-compiled solution.  Surprisingly high. Now, lit is
[01:34:18] Versus solid without a compiler. Solid without a compiler is still faster than lit, but
[01:34:24] People use the compiler for the ergonomics, it's worth it. But lit does pretty well leveraging that template, tag template literal approach that I talked about earlier. So it is a bit of an anomaly that's worth shouting out.
[01:34:42] Thank you.
[01:34:44] Fine green dance is an effort of the individual...
[01:34:47] Yeah, I mean, I've seen it when applied in a
[01:34:50] specific scope where you've tied the data to a specific thing like Mikado and  the JS framework benchmark.  But I think someone's got to,  I'm going to have to,
[01:34:59] prove that it works in general sense. My experience here has been that
[01:35:04] because of the different types of operations that are possible, that ultimately the complexity ends up catching up with you and it ends up not being faster.
[01:35:13] It's funny because MobX actually had a really good fine-grained array approach,  and I was trying to make my MobX port of DOM expressions,
[01:35:22] use that instead of my map array to see if it doing it.  And again, I switched my map array diffing approach because it was still faster.  So that was like,
[01:35:31] five, six years ago. Things could have changed, but generally,  and maybe new techniques discovered, but generally this hasn't been proven to be the case.
[01:35:40] And it, no, it has nothing to do with real life use cases. This is just me doing benchmarks.
[01:35:49] Million chairs.
[01:36:01] Thank you.
[01:36:14] I have not had a chance to look at the alien signals yet. I've been spending a lot of time
[01:36:20] working on updating solids renderer to using the lazy rendering, which is actually a big influence for the topic of today, which we should get into.
[01:36:32] Am I planning to discuss state management libraries?
[01:36:35] Not particularly.  Only thing to know is when you take a framework and you add a state management library to it, it makes it slower.
[01:36:43] Um,
[01:36:44] it makes it easier to write optimal code because you,  a lot of people do dumb stuff.
[01:36:51] You know, they do easy stuff and they that state lets management lets you, you know, like a BDOM like React lets you like actually drive stuff from the outside.
[01:37:00] But...
[01:37:03] If the same updates could be applied, like if the framework can render something that way, then it's possible for it to render that way without the state management library. So if you could write your code in that way, it'd probably be terribly un-economic. You would get the same performance core characteristic without the overhead of the state management. So generally state management is for your sake, for your sanity and not for performance.
[01:37:28] you
[01:37:30] Okay.
[01:37:33] Why do you need state management when it's built in?
[01:37:36] All right, all right.
[01:37:38] All right, now that you guys have your appetite whetted, so to speak, let's get into the fine grain rendering. So let's start from the beginning.
[01:37:48] And if I start from the beginning,
[01:37:50] I actually, you know what I want to do?
[01:37:54] Give me two seconds. I'm going to open my drive.
[01:37:58] I want to pull something up here.
[01:38:04] This will just help me get started here for a second, Solid Talks.
[01:38:09] Um...
[01:38:11] The world beyond components. It doesn't really matter which version I suppose.
[01:38:19] Thank you.
[01:38:21] I want to start exactly where
[01:38:25] like my intro talk to solid ends, so to speak.
[01:38:31] And
[01:38:33] Thank you.
[01:38:34] Thank you.
[01:38:36] Thank you.
[01:38:37] Yeah, I haven't done this in a while, so let's see if we can open this up.
[01:38:47] Okay. We'll build up from here.
[01:38:54] I'm going to assume that most of you understand how signals work at a core level at this point.
[01:39:08] And...
[01:39:11] We're going to basically apply this to rendering, OK?
[01:39:16] In fact, I'm just going to call it render effect from now on.
[01:39:19] It doesn't matter. It's basically the same thing.
[01:39:22] We're going to console log.
[01:39:24] So this is the example that I always show used to show when I was doing like the
[01:39:30] I'm going to actually jump one more stage because...
[01:39:33] Because I don't
[01:39:34] care about doing this.
[01:39:36] I'm going to go right to here. Okay.
[01:39:40] Essentially, I have a signal.
[01:39:42] I create an H1 element, the DOM element,
[01:39:44] I create an, I'm gonna make this a render effect.  Doesn't really matter.  It's basically the same thing.  Create a render effect.
[01:39:51] set the text of that DOM element
[01:39:54] And then...
[01:39:56] Um,
[01:39:57] Create a button.
[01:39:59] give it some static text, add a click handler to update the signal.  And then because of this render effect, every time I click,
[01:40:06] the text updates.
[01:40:07] Right? You guys have all seen this before.
[01:40:17] So...
[01:40:20] The reason this is always so easy to show is because all you're doing
[01:40:24] is essentially...
[01:40:26] Thank you.
[01:40:27] assigning text to a single text element, right? And it's also really easy to show. I've done this a bunch of times and I'm going to do it really quickly right now, although I will go back to make it a thing, is that in solid,
[01:40:39] we can just go button and go, okay, well, it's a JSX element.
[01:40:45] So button...
[01:40:47] with
[01:40:48] I'm just like...
[01:40:48] basically line by line going, okay, text content is click me.
[01:40:53] And...
[01:40:55] OnClickHandler is this.  Like it's not hard to picture,
[01:41:04] How...
[01:41:05] we can go from something that looks like
[01:41:09] DOM stuff to something that looks like this, right?
[01:41:13] I'm just seeing that this compiles
[01:41:16] into this.
[01:41:18] Essentially.
[01:41:19] It's just an effect.
[01:41:20] or sorry, this is not an effect.  It just creates an element with a click handler,  and this one,
[01:41:25] compiles into const,
[01:41:29] H1 equals...
[01:41:32] H1.
[01:41:33] And
[01:41:35] We put some kind of expression in it.
[01:41:37] which is
[01:41:39] Well, actually, we can just put this expression right in it. Makes it easier.
[01:41:44] and then we get rid of this.  This compiles into this, essentially,  where it knows that this hole, you know,  where you have an expression, it goes, okay,  this has a function call in it,
[01:41:58] making a render effect.
[01:42:00] We do this.
[01:42:02] our demo still works because we're just creating an element, creating an effect that renders the one piece. Everyone can visualize this.
[01:42:10] because...
[01:42:12] you're just doing this one kind of simple fine-grained update. And then usually
[01:42:17] the next thing I do is
[01:42:20] I wrap this whole mechanism
[01:42:23] into a component, right?  And I call it counter.
[01:42:28] Okay.
[01:42:29] And if I take--
[01:42:31] my elements
[01:42:32] From Counter.
[01:42:36] And
[01:42:38] I'm going to format this bit.
[01:42:40] and have them be returned as an array of h1 and button
[01:42:45] And then call counter here.
[01:42:51] and spread it in as the arguments.
[01:42:55] Again, still works.  And then instead of doing separate variables, we inline the array.
[01:43:05] I imagine almost everyone who's familiar with my work with Solid has seen me do this demo before.
[01:43:10] but just bear with me for the people who haven't,  because this is fundamental and you're like,  "Okay, do I need an array?  Well, let's just make the array JSX fragment
[01:43:19] instead of an array,
[01:43:22] But...
[01:43:23] You know, if I format this,
[01:43:27] To do
[01:43:29] We have something that looks like a react component.
[01:43:32] But it literally just has this one crit effect here.
[01:43:37] And...
[01:43:37] It created a bunch of other DOM elements
[01:43:40] that it just depends to the document.
[01:43:43] Okay.
[01:43:44] Um...
[01:43:47] Usually what I do when I do this demo is I jump
[01:43:52] I had it here, and I...
[01:43:54] go and I create a version of the demo where I actually have multiple counters
[01:44:01] And
[01:44:03] essentially...
[01:44:05] I show console log.
[01:44:06] here, although, see, they de-dupe, it's something the Playground does, and I don't know why it does this, and Milo or someone's gonna have to tell me, but they de-dupe
[01:44:16] console logs for some reason.
[01:44:19] See how there are two of them?
[01:44:22] There's only one here.
[01:44:23] I have no clue.  Drives me nuts.
[01:44:27] But...
[01:44:29] The point is,
[01:44:31] After this point, whenever we click a button,
[01:44:35] The component never re-renders, it's just this one effect that listens to that one signal. Because we create two functions, two separate closures, two separate components, these act completely independently.
[01:44:49] We didn't want them to act independently.
[01:44:51] they could reference something from the same spot.  We can lift them up
[01:44:56] you know, pull them top level. Guess what? Global state. Now they're both the same, right?
[01:45:01] because they're just sharing the same instance.  There's nothing magical about this.  It's just the rules of JavaScript functions, closures.  It's simply you just construct stuff.
[01:45:10] Um,
[01:45:14] It's...
[01:45:18] Thank you.
[01:45:19] Thank you.
[01:45:20] Yeah, practically. Well, the reason is like,
[01:45:23] Fragments are special, which we'll get to in a moment, because they're actually the core of where the rendering problem gets in, because it's not hard to picture this scenario.
[01:45:35] Right. This is this is basically solid, very fast version of that demo.  But you get the gist of it is these.  I mean, you can actually see it in the compiled output here.  You'll see like.
[01:45:45] Basically, there's some templates that are just like creating
[01:45:48] elements that get cloned. And then you'll just, like, if you look at the actual code for any of this, it'll be like, clone the template,
[01:45:56] walk into the client and call this insert call.  I'm going to show you how, what this insert call is,  but it's basically just an effect  that updates the text in that text node.
[01:46:06] And
[01:46:07] Thank you.
[01:46:08] But the core of it is a simple idea that you just create some elements and you update the one thing. There's no framework. This didn't have to be a component.
[01:46:18] we could have just called the function.
[01:46:21] Mostly.
[01:46:23] Okay.
[01:46:26] So...
[01:46:29] That's the gist of the demo. I think I do one last version to really...
[01:46:35] Nail it in.
[01:46:38] um which is
[01:46:41] I hoist up
[01:46:43] The signal, instead of putting a global scope, I put it in a parent scope and then pass the
[01:46:48] the value down as normal and then the value times two,  and then I pass down two click handlers,
[01:46:54] which then get applied to the button here. So like one adds one, one adds two.
[01:47:00] and then one shows the count, one shows the count times two.  So they're shared state, but they have different
[01:47:06] handlers,
[01:47:08] and different like prop values
[01:47:10] And the key part again is...
[01:47:12] because the only effect is the one that updates prop.children here, even you see the console.log app and a console.log counter, even though it looks like we're accessing values here and stuff,
[01:47:24] you know, like,
[01:47:25] While we click, there's no more console logs.
[01:47:28] This one goes up by two, this one goes up by one,  this one times twos it.
[01:47:32] So
[01:47:33] Nothing here.
[01:47:35] Thank you.
[01:47:36] forces the component to re-render. And the reason is
[01:47:40] that
[01:47:42] So
[01:47:43] we defer evaluation to the very end of the chain.
[01:47:47] We know that if something...
[01:47:48] calls a function,
[01:47:50] or has a getter.
[01:47:52] like could be a getter, like a property axis, that we need to make this an effect.
[01:47:57] when we're talking about components, or sorry, when we talk about native elements.  So it updates the thing.
[01:48:02] or the attribute.
[01:48:04] But when it's a component,
[01:48:07] The exact same heuristics tells us, hey, this could update.  It's a function call.
[01:48:13] So it wraps it
[01:48:14] in a getter. What we'll see here is we have create component counter and then get children
[01:48:20] is actually a getter.
[01:48:22] that calls count here, which means that
[01:48:25] It's a function call.
[01:48:26] we turned count times two into a function that gets called inside the RFF. We basically just pushed
[01:48:33] everything downwards. We don't need to, we just created everything.
[01:48:37] But then when we update it,
[01:48:39] It's only the effect that goes, oh, run this effect, call that function, which calls that function, and it gets all its dependencies and it does its update.  We don't have to reconstruct the tree in order to update something.  This is...
[01:48:52] the easy part that people understand about fine-grained. It's very obvious, like, because if you did this in React,
[01:48:59] even with the React compiler,  although the console logs would try and be smart enough  to fool you,
[01:49:04] This scenario, when you set state in this component,
[01:49:08] forces this component to re-render, recreate
[01:49:12] It's VDOM. Now the compiler is smart enough to go, oh, some of those nodes I don't need to recreate.
[01:49:18] But generally speaking, it will always rerun this
[01:49:22] And he goes, oh, has something below this changed?  Then...
[01:49:27] Sure, it skipped the thing that has nothing below it that changed, but still has to then go into here and go, "Oh yeah,
[01:49:31] Maybe this one counter depends on, in this case, it's both of them.
[01:49:35] and go in and re-render this.
[01:49:37] It's unavoidable from a top-down structure that even with the craziest memoization,
[01:49:43] you need to
[01:49:45] execute because if something changed, you can't just stop. You have to go, "Oh, what has changed?" and go down and down and down and down. You can stop if you know for sure nothing below this point has changed, but if anything has changed, you have to run everything in between the change
[01:50:00] that happened and the impact of it.
[01:50:03] We're doing the same thing in the sense that
[01:50:05] we are running everything in between.
[01:50:07] essentially, where when you
[01:50:10] when you update count,
[01:50:13] We are re-running this function that we wrapped in the getter.
[01:50:17] we are rerunning this effect, we are running all the way down the chain, it's just a separate
[01:50:24] Um...
[01:50:25] stream of like a separate channel than the components.  The data runs through your components rather than
[01:50:31] is your components.
[01:50:35] Right?
[01:50:43] Thank you.
[01:50:44] No.
[01:50:45] Just a side note, not easily.
[01:50:53] Okay, so
[01:50:55] I hope everyone's following along so far, because this part of the demo is usually the fairly straightforward part of the demo because
[01:51:02] If you understand signals, you understand that you can put as many functions as you want in between.
[01:51:09] I'm hoping that makes sense.  I mean, it goes back to our initial, you know,
[01:51:13] signal and effect. You know, if I go back to something like this,
[01:51:18] Not even this one. If I go back to the very first one,
[01:51:22] where we have a signal and effect. If I
[01:51:28] decided that I'm going to have, you know,
[01:51:32] double count
[01:51:33] just be some getter or some function in between, you know, count
[01:51:37] times 2
[01:51:40] And I put this in.
[01:51:41] I didn't break reactivity, right?  I see zero and two, you know, when I set the count to one,  it's just, it's always double it.  If I set, you know...
[01:51:50] If I set the count again,
[01:51:52] to
[01:51:54] You see zero, two, and then four.
[01:51:57] My point is that like...
[01:52:06] Yeah.
[01:52:07] Yes, you can't destructure because destructuring...
[01:52:12] would be like getting rid of this function.
[01:52:14] Destruction would be like doing this.
[01:52:21] Now this isn't a function. We access the signal value and you accessed it once.
[01:52:28] This effect
[01:52:31] never updates. It doesn't even run twice now because it doesn't depend on a signal.
[01:52:35] It literally depends on a value. You said the count is zero.
[01:52:40] when it runs, it does not track
[01:52:44] Um,
[01:52:45] Count, count is out here.  In fact, ESLint is yelling at us.  This reactive variable count should be used within JSX,  attract scope, like create a factor inside an event handler function,  or else changes will be ignored.
[01:52:59] That's the trade-off.  If you're going to...
[01:53:01] make a channel through your app.
[01:53:04] the channel has to exist.
[01:53:08] Thank you.
[01:53:16] Yes, yeah, sorry, I'm going to use solid.
[01:53:18] In my examples here because I'm most familiar with solid but Svelte 5 it was basically designed to be the same and
[01:53:25] Um...
[01:53:40] Derived is interesting because it can do what Ryan pointed out to be the problem and solve it.
[01:53:45] Not really. You're talking about the fact that derived has this as syntax?
[01:53:54] I mean, if you look at the compiler, the compiler just adds the function.
[01:53:58] syntax to remove compilation stuff.
[01:54:03] is convenient, but it doesn't change what it is.
[01:54:10] And another great point, you can solve destructuring
[01:54:16] by knowing that something's a component.  We have a library that came out about four years ago  and saw it, what's it, uh...
[01:54:22] solid
[01:54:23] un-destructure or something.
[01:54:26] I mean, people...
[01:54:28] Yeah, Babel plugged solid-on-d structure four years ago.
[01:54:31] People have come up, if you have a way of saying, if he looks for types...
[01:54:36] or like denotions, if you have a way of saying something's a component, you can completely
[01:54:42] go and
[01:54:43] make it destructuring work.
[01:54:46] The problem is it's a lie, just like the lack of function in the derived example I was showing here a moment ago.
[01:54:56] Yes, this is more ergonomic.  But the second...
[01:54:59] You...
[01:55:00] Do something else.
[01:55:02] Like,
[01:55:03] It isn't component props. Instead, you created a higher order primitive or composable is what I think they call the view. It's like, oh, now you can't destructure again.
[01:55:14] because you built something in a different scope and you pull it in. This is the, was this Svelte 5  problem that they solved by adding classes, by giving it a blessed way, but it's still the same  problem. If you use a Ruin in a different file and you try and pull it into your file, you have to wrap it in a function.
[01:55:27] or have the compiler automatically wrapped in the function.  But conceptually, it needs to be wrapped in a function.  And conceptually, you can't actually destructure.
[01:55:35] The compiler can reverse it.
[01:55:37] the destruction for you for an ergonomics standpoint, but
[01:55:40] it's also kind of like not what's really happening.
[01:55:44] the compiler just
[01:55:46] gets rid of your destructuring and then
[01:55:49] accesses it where it needs to be accessed.
[01:55:52] It's nice until...
[01:55:53] all the edge cases where it doesn't work.
[01:55:58] Thank you.
[01:56:07] Yeah, yeah, so that would tell us the same problem too.
[01:56:10] These are all, if you read my article about complexity, these are all
[01:56:15] These are all like, it's like the perfect example of adding complexity for ease of use because it's like,
[01:56:22] You're...
[01:56:23] not fundamentally changing what it is, which means that there's like tons of edge cases where that  doesn't actually work, but it makes like typing it slightly easier. But then like somewhere else  where you actually can't destructure, you're suddenly like, why is this not working? And it's like,
[01:56:36] Like, you might not even, if you're a new user, you might not even realize it because you thought, "Oh, I can do structure here. Why can't I do structure here?"
[01:56:43] Well, it's because...
[01:56:45] destructuring does not actually work.
[01:56:47] we just kind of lied to you.
[01:56:51] Nope, stores don't solve destructuring either.
[01:56:54] because stores are still a getter. The problem with destructuring is you're calling the function too soon.
[01:57:06] Right.
[01:57:07] This is one of the interesting things. I have some pressure just on a side note from like the DX team.
[01:57:14] Um,
[01:57:16] You know, because we, I don't know if people know, you know, salt runes or runes. We had the very similar same syntax released as a library for solid four years ago.
[01:57:29] So you could have the performance and the syntax of like Svelte basically four years ago.
[01:57:34] Um,
[01:57:35] But I never pushed it.
[01:57:37] Because it didn't align...
[01:57:40] with our transparency prop thing.  Like we,  when possible,  we try to make things the way they actually are rather than hide them only  for it to break somewhere else.  And it's fine for different frameworks to have different priorities.  So I get why it's all different,  but it's,
[01:57:58] It's probably just worth noting to people, because as I said, the DX team sometimes wants to be like, we should just go put that everywhere so that when people show solid examples, we can show solid examples that look the same and have the same less syntax. And I'm like, I mean, go ahead.
[01:58:12] Like,
[01:58:14] We're never going to spend as much effort into it as Svelte does because they care about that.
[01:58:19] I don't care about you writing less characters. I care about you understanding and, you know, not being confused. And
[01:58:27] Like...
[01:58:29] It...
[01:58:30] it doesn't really get us anything because it actually suggests that we find
[01:58:34] value in it, which we don't. It's OK if others do, but we don't.  So, yeah, it's a tricky balance because the libraries do exist.  I mean, you should probably just go use Svelte, you know, if something like that's really important to you.  But, you know, just so it's out there and people know or view.
[01:58:53] We've had the ability to have the same syntax with all the solid performance benefits and all that for four or five years now.
[01:58:59] It's still there if you want to go use it. It just really doesn't matter.
[01:59:15] Thank you.
[01:59:16] Is there a language level subject or direction?  Is one of the most...
[01:59:20] No.
[01:59:21] No, it literally just doesn't make...  It's because...  The only...
[01:59:27] No. Yeah.
[01:59:31] Yeah.
[01:59:33] This is just not...
[01:59:35] This is why I don't, I'm not a huge fan of the compiler approach to this because it's literally something that can't be solved.
[01:59:42] So we're just lying...
[01:59:44] Some of the time.
[01:59:46] for,
[01:59:48] For something like, you know what I mean? It's, it's, yeah.
[01:59:53] People used to talk about the React just JavaScript, but it's always really closer to that than most other frames.
[02:00:00] We've taken the GIST JavaScript mantle now, at least out of
[02:00:02] Unless you get into this no build zone.
[02:00:09] Anyway.
[02:00:11] Okay.
[02:00:14] And
[02:00:17] Getting back to what I was kind of getting at here before we were talking about the destructuring and stuff.
[02:00:23] is there is this transitive property
[02:00:26] of functions.
[02:00:27] Right.
[02:00:28] They run through your whole app. This is the foundations of fine grained rendering. It's knockout.js had this.
[02:00:34] Vue has it.
[02:00:36] Um,
[02:00:38] But to the rendering point, actually,  Vue doesn't find green render like that today.  Vapor will have it.  But Svelte 5 has gone this direction as well.  Essentially, this...
[02:00:47] Even Preact technically and Quick technically have what I'm showing you right now.
[02:00:52] They have the ability to update text nodes
[02:00:54] directly without re-rendering the VDOM.
[02:00:57] This is kind of like the baseline of fine grained.
[02:01:02] and the problem is we stop there in demos because then people get it and they're like  it's not react and then everyone assumes that
[02:01:08] Preact signals is like solid and then they see like a benchmark where signals are faster in one library than the other. And then they're like, oh, that must mean this other library is faster than this other library because its signals are faster. And it's like, no, it actually has almost no impact because they don't actually render.
[02:01:25] You sped up the signals and now you're re-rendering the whole VDOM.
[02:01:30] You know, like
[02:01:32] So let's talk a bit more about
[02:01:35] about
[02:01:36] Um,
[02:01:38] What happens after this?
[02:01:43] Yeah, I mean, if you had a different language feature that
[02:01:48] instructed it somehow, like a decoration of some sort.  Like, I'm not going to say anything's not impossible.  I'm just saying JavaScript does not have the syntax or capability to
[02:01:57] Like it
[02:01:58] Another question people have is, instead of having signals as a function, can you have it just as a value? What Svelte compiles to? Could it be the idea of atomics? I think that's interesting, at least, because within a local scope, having a...
[02:02:12] a getter that way could work. It wouldn't be transferable though. The second you actually tried to get it out of that file, you'd have to wrap it in a function again. Which is why the TypeScript
[02:02:20] problem
[02:02:21] of functions not being able to be stable with signals is so important that I've been talking about because
[02:02:27] It doesn't matter which framework you have, whether you use dot value like view or
[02:02:33] or you compile it with Svelte where there's no function call or whatever,  your solid where you call a function or whatever,
[02:02:40] Ultimately with these reactive systems functions
[02:02:43] carry reactivity.
[02:02:46] Which means that
[02:02:47] At some point,
[02:02:49] you're going to hit the point that...
[02:02:51] calling double count.
[02:02:54] like from a TypeScript perspective, I know I'm jumping around a bit, but if you go like if double count
[02:02:59] Like, if double count is nullable,
[02:03:02] essentially.
[02:03:04] and you access it in here, TypeScript will complain at you and be like, sorry, sorry, guy. We don't know that it's
[02:03:11] not null, even though you just did the check, because you called two different functions, it's not stable.
[02:03:16] Functions are at the core
[02:03:18] of
[02:03:20] signals-based reactivity, whether they're hitting getters, dot value, proxies, whatever, everything is a function.
[02:03:27] It's a different type of functional programming.
[02:03:33] Thank you.
[02:03:35] Thank you.
[02:03:45] Thank you.
[02:03:46] Will native signal implementations solve this?
[02:03:54] The native signals implementation is still calling functions. Ultimately,
[02:03:59] there's no language level
[02:04:01] feature that gives us
[02:04:03] avoids everything being functions.
[02:04:07] Yeah.
[02:04:09] Anyway...
[02:04:09] -
[02:04:11] *laughs*
[02:04:15] Where to go from this? So you can clearly see that you can like chain a value
[02:04:21] So it doesn't have to be a basic value.  You can pass it through props and components like we showed, you know,
[02:04:27] not here, here, sorry.  We can pass...
[02:04:32] Yeah, it's this one. We can pass it through props in through components and we can basically create this like super hyper
[02:04:42] updating thing. So if you have a DOM element, we can make sure that we do the least amount of changes. It's kind of obvious why this happens because we keep all the update channels isolated.
[02:04:53] It's like memoization, except
[02:04:55] It's not because it doesn't run any of the stuff. Memorization goes, okay, this branch is good, this branch is not, but it can never get, it's almost impossible for it to get granular enough because it always has to have a starting point, which is,
[02:05:11] runs it downwards where
[02:05:14] Signals are events so they can wake up at any point in the tree regardless of
[02:05:20] of
[02:05:21] Like,
[02:05:22] some kind of
[02:05:23] you know,
[02:05:24] framework concept, like a component, because in React state is tied to the component. When you update a signal that are like your state in that component, that component will rerun. That is the fundamental rule. It doesn't exist on its own. It's not its own event emitter. The component is kind of the event emitter.
[02:05:43] So a fine grain system,
[02:05:44] separates the UI
[02:05:46] from
[02:05:48] the data.
[02:05:52] Which is not a new idea. People were doing this back in the day.
[02:05:56] You know, when they had like MVVM or MVC.
[02:05:59] And some people kind of go really hardcore on the other side where they're like, let's
[02:06:05] you know, pull our models out here, our views here, keep it all clean, separation concerns.  I'm not suggesting that. I think actually the overlap
[02:06:11] is very ergonomic for modularity and encapsulation.
[02:06:15] These things do roughly coincide with each other. Don't keep all your state here and all your UI over here. Put them together. Just recognize they're not the same thing. That's the fundamental pitch with, you know, reactivity and signals with rendering. But...
[02:06:32] Thank you.
[02:06:33] We need to do more than this. We need to do more than just
[02:06:37] put a bunch of components on the page.
[02:06:39] And.
[02:06:41] update a bunch of values. As I said, if that was the end of the world,
[02:06:44] you know, end of all we wanted to accomplish, then we, you know, you can see this is pretty straightforward. The first place where we start hitting challenges and
[02:06:55] I'm going to keep this counter component because it'll just make our life a little bit easier, I think.
[02:07:00] Um...
[02:07:02] I think this is
[02:07:03] probably where I want to stick it. This one's still working. Yeah. Okay. Yeah. So I think I'll use this as a base. I'll get rid of some of these other ones is
[02:07:11] What if we have
[02:07:14] A decision.
[02:07:15] Control flow is the thing.
[02:07:18] that
[02:07:20] Quick.
[02:07:21] or preact.
[02:07:22] does not
[02:07:23] If you need to go branch A versus branch B,
[02:07:28] It's a VDOM re-render.
[02:07:32] How do we do control flow
[02:07:35] when we are using
[02:07:37] the signal system because so far everything has been one-to-one. There's no decision.
[02:07:42] Right?
[02:07:43] And the easiest way conceptually here is if we have a decision, I'm going to make a decision component, let's call it.
[02:07:51] And
[02:07:52] In our decision component,
[02:07:54] Okay.
[02:07:56] it's gonna have a signal in it, okay?
[02:07:59] And the signal is going to be show.
[02:08:04] and set show, okay? So just a Boolean, create signal.
[02:08:08] Okay.
[02:08:10] and
[02:08:13] We're gonna start at the truth.
[02:08:15] Okay, so we know conceptually
[02:08:19] that this is going to make a decision for us.  So we'll think to ourselves, okay, like if show...
[02:08:24] then
[02:08:26] I guess we need
[02:08:28] something to show. So we'll be like, if show,
[02:08:30] um, props.children.
[02:08:33] Otherwise...
[02:08:35] Um,
[02:08:36] Let's return null. Okay, so...
[02:08:39] This might be...
[02:08:41] What we...
[02:08:43] kind of
[02:08:44] first think about, right?
[02:08:46] Actually, I'm going to
[02:08:48] Making an empty array.
[02:08:50] just for the sake of this.
[02:08:52] Um, and what I'm going to do is actually
[02:08:56] We're going to make...
[02:08:59] We're going to, yeah. Do I want to use GSX? It doesn't really matter. It doesn't need to be.
[02:09:04] that I'm just going to make it like a
[02:09:08] children.
[02:09:09] as a function. This...
[02:09:10] I might decide against this later.
[02:09:13] But the...
[02:09:13] But essentially, instead of calling counter now,
[02:09:17] what we're going to want to do.
[02:09:18] is we're going to say, can we take decision...
[02:09:22] And
[02:09:23] And
[02:09:26] We're going to make it a...
[02:09:27] a function, I think.
[02:09:29] Uh...
[02:09:31] If I use GSX, this would be more clear,  but I also want to really illustrate it.  This function for children is going to be
[02:09:40] Return.
[02:09:42] Counter. I guess counter is a function already, so I don't need to do it. I'm just doing this to spell it out. I hope it's clear. What I'm suggesting is
[02:09:49] we're passing this children function to decision that says render this counter component. So the concept is if show is true, then it renders children. Otherwise, it's not. And if you look
[02:09:59] our counter still works, right?  This is a very...
[02:10:03] basic show component, essentially.
[02:10:05] where the problem is obviously we need it to actually be able to
[02:10:10] control the decision point. So
[02:10:14] Um...
[02:10:15] Thank you.
[02:10:17] Let's...
[02:10:18] create a button somewhere. It doesn't really matter.
[02:10:21] Um...
[02:10:23] I mean,
[02:10:24] We could crit a button in here, but I don't want to...
[02:10:27] I don't want to muddle it too much. Let's just, uh...
[02:10:32] Let's just...
[02:10:33] Thank you.
[02:10:34] Let's just make the button...
[02:10:37] out here, const button
[02:10:40] equals
[02:10:42] Whatever, we'll just...
[02:10:43] use JSX as a short form, it makes it convenient, but button,
[02:10:47] unclick
[02:10:50] Thank you.
[02:10:51] And we wanted to toggle the set show, essentially.
[02:10:56] So, um...
[02:10:58] Thank you.
[02:11:02] I could have voiced it out, but...
[02:11:06] I'm going to leave it in for now. We're just going to have a function called set that goes set show equals that I'm
[02:11:11] and put it out here.
[02:11:14] Okay.
[02:11:15] And then on click, we're going to go
[02:11:17] Set.
[02:11:19] Um,
[02:11:20] And this is solid's function syntax is basically not set.  Okay.
[02:11:25] Um...
[02:11:28] And this, sorry, it's function.  The...
[02:11:31] Okay.
[02:11:32] Hopefully you guys are all still following at this point.
[02:11:39] Right?
[02:11:41] I'm doing this very basic right now.  Um...
[02:11:45] TypeScript's complaining this doesn't exist.
[02:11:48] But you can see that it's showing
[02:11:51] and it's updating. And then if I add button to our UI now,
[02:11:57] Oh, I've got to get the button some text.  Um...
[02:12:01] button. Let's give it
[02:12:05] toggle.
[02:12:06] Okay.
[02:12:10] It's there. I click toggle.
[02:12:13] nothing happens
[02:12:22] Thank you.
[02:12:22] Yes, yes. This is what I was talking about earlier with the components is
[02:12:29] Um,
[02:12:31] The onClick is a function handler, so it should be, but we turn...
[02:12:35] functions or expressions into getter getters. We turn them into
[02:12:42] functions essentially.
[02:12:45] Like...
[02:12:47] Yeah, I closed the example down specifically, but
[02:12:51] This is a good one here.
[02:12:58] In this example where I pass count as
[02:13:01] to the children here.
[02:13:03] Solid Changes Children
[02:13:06] to a getChildren function returns that.  You access it by just props.children,  but it turns it into a getter.  So count does not get called
[02:13:14] until you use props for children, which is inside this effect over here where it goes
[02:13:19] passing a function that reads props.children, which is actually
[02:13:23] this right here.
[02:13:25] props to our children. This is technically calling
[02:13:30] this function.
[02:13:38] Yeah, it's interesting though.
[02:13:42] This, see, thinking around these are more interesting because if,
[02:13:47] You start having a problem with argument order though, right? Like which prop is first?
[02:13:52] Um, if
[02:13:55] If you could denote a component,
[02:13:57] as being
[02:13:58] the thing.
[02:14:00] And argument order didn't matter, like, so that you could pull them out at any order, essentially, when you authored it.
[02:14:07] and you didn't use an object,
[02:14:10] Like...
[02:14:12] It's interesting. Then you wouldn't even need the destruct, because destructuring wouldn't be a thing. You wouldn't think of it as an object.
[02:14:17] But anyways.
[02:14:19] But also
[02:14:20] Objects are good because shapes change.
[02:14:22] You can spread...
[02:14:24] props into JSX.
[02:14:26] which means that the shape of the props can change over time.  You can send some props and then send other ones, different ones later, which means that
[02:14:37] like destructuring has its place because the arguments can change.
[02:14:43] Thank you.
[02:14:44] *sniff*
[02:14:51] Thank you.
[02:14:52] Yeah, this is the answer. There's a question that goes, "but are all function calls or are only wrapped in one drop?" No, all function calls. We can't tell the difference.
[02:15:02] Yeah, the compiler wouldn't know. This is a very, very simple heuristic.
[02:15:06] Um...
[02:15:07] Thank you.
[02:15:13] Thank you.
[02:15:13] I mean...
[02:15:15] I guess if you force every user to use TypeScript,
[02:15:21] Maybe that's more and more of a reasonable thing, but...
[02:15:24] I built SolidJS in a world in which you could not say you cannot use my framework without TypeScript.
[02:15:30] Thank you.
[02:15:36] Built for JavaScript.
[02:15:39] Anyway.
[02:15:39] Okay.
[02:15:40] Yeah, so getting back to this, why does this not update?
[02:15:44] Well, it's because
[02:15:46] you can see it, Islin's already telling us.  We call this function once,
[02:15:52] And we're reading this.
[02:15:54] So...
[02:15:55] There's no way for it to
[02:15:58] Update.
[02:16:00] Right?
[02:16:02] So...
[02:16:04] The only way...
[02:16:05] that we can have this update again is the same way we've always had an update again, which is wrap
[02:16:12] this in a function.
[02:16:14] Right?
[02:16:17] The interesting part now is,
[02:16:20] Because now this can change. Like because it's wrapped in a function it has the ability to rerun this piece if show ever changes.
[02:16:31] This is actually how GSX and Vue works.  If you've ever seen it, they always return a function.
[02:16:35] for the whole thing.
[02:16:37] In solid...
[02:16:39] We don't return a function for the whole thing. It's more granular, but it's this it's the same
[02:16:43] concept that you have to return a function for control flow.
[02:16:48] because otherwise it could never change.
[02:16:53] Right. But if you think about this,
[02:16:55] This is not a terrible thing because this can only change between true and false.  So when it's true, it renders it once. When it's false,
[02:17:03] it goes to this branch once, because it can only swap either or.  You're not doing anything wasteful.  If someone changes from true to false,
[02:17:11] there is no choice but to switch.  But now we have an interesting problem down here  because we can't just spread...
[02:17:18] are
[02:17:23] our stuff into here because now it's a function call.
[02:17:27] Right? Before it was elements, but now it's a function call. So
[02:17:31] What do we do?
[02:17:34] Well, I...
[02:17:35] We have to like...
[02:17:37] get away from this and we have to actually build
[02:17:39] our render function, so to speak. And
[02:17:42] It involves having this mount element,
[02:17:45] We know we need this mount element, the app element, but instead
[02:17:49] of appending it
[02:17:51] We do what we always do.
[02:17:53] We create...
[02:17:55] a render effect.
[02:17:57] And
[02:17:59] Thank you.
[02:18:01] const
[02:18:02] L.
[02:18:03] or mount, let's call it mount.
[02:18:06] is going to be our main element.
[02:18:09] Thank you.
[02:18:10] And now...
[02:18:11] Instead of append, I'm going to say, let's do replace...
[02:18:15] children. It's the same API, but it just replaced everything. This is a very rudimentary look at, um, rendering because you don't always want to just swap everything out. That being said,
[02:18:27] Um...
[02:18:28] If you pass the same element again, you're not necessarily recreating anything.  So it's not the most inoptimal thing I can think about.  The idea here is
[02:18:36] We're going to...
[02:18:40] basically make an effect
[02:18:42] Um...
[02:18:43] that
[02:18:46] Thank you.
[02:18:49] Thank you.
[02:18:50] puts this stuff in. Now,
[02:18:52] We have a problem here though because decision
[02:18:57] which is like our code coming in, like,
[02:19:01] Like...
[02:19:01] Maybe it would help to actually just pull this function render for our sake.  And then what do you pass to render function?
[02:19:10] Code...
[02:19:11] and you pass the mount element, right?
[02:19:14] And so let's just do this.
[02:19:19] Okay.
[02:19:22] So.
[02:19:23] Oh, actually, sorry.
[02:19:25] My bad.
[02:19:26] It's more like this. We're gonna render
[02:19:33] Um...
[02:19:37] our decision.
[02:19:43] And we're going to
[02:19:49] Our render function is going to have a create effect.
[02:19:53] that
[02:19:56] is a mount replace children. I'm going to keep the button outside of the rendering. I know this is kind of
[02:20:02] Odd.
[02:20:07] Just...
[02:20:08] Thank you.
[02:20:09] We'll do something about that later.  We'll take our mount element and then we'll render button,
[02:20:15] and then we'll split in code. Okay.
[02:20:19] So,
[02:20:22] And...
[02:20:24] The problem, as we already hit here, is that this code
[02:20:28] Is it is a function? So
[02:20:31] We might...
[02:20:33] Do something.
[02:20:34] Like,
[02:20:36] well, well type of
[02:20:41] Code...
[02:20:42] equals
[02:20:43] function.
[02:20:50] Thank you.
[02:20:51] code equals code, right? Now we're going to just unwrap it, right?
[02:20:56] And then we'll do this.
[02:20:58] Now,
[02:21:02] uh...
[02:21:03] What?
[02:21:05] My guess is I have another bigger issue here, which is why this is not compiling at the moment.  Oh, there's...
[02:21:13] What's going on there?
[02:21:17] Thank you.
[02:21:18] That work.
[02:21:22] Children is not a function.
[02:21:25] Oh.
[02:21:27] Because we didn't pass...
[02:21:31] our children in, which was, what was our children? It was a, uh,
[02:21:34] Um, I...
[02:21:36] I'll just put counter in you guys' notes.
[02:21:38] counter function.
[02:21:45] "Can't access button before initialization."
[02:21:52] Is that a TypeScript issue?
[02:21:55] It's kind of funny.
[02:21:57] Because this...
[02:21:58] button is
[02:22:00] Here.
[02:22:02] That is a little bit funny because it
[02:22:05] Oh, if you know what it is.
[02:22:07] Dumb me. You have to actually instantiate it before you call render.
[02:22:10] Alright.
[02:22:12] We did it.
[02:22:13] Okay. Up.
[02:22:16] toggle
[02:22:17] Oh, still not working.
[02:22:24] Why is it still not working?
[02:22:31] Yeah, sorry chat, you guys.
[02:22:33] It's like slight delay.
[02:22:34] Um...
[02:22:36] Thank you.
[02:22:41] S here is just the functional form of the previous value.  So it's saying like,
[02:22:46] set show it's going to be true and then we're setting it to not true.
[02:22:50] Yeah.
[02:22:51] Alright, so why are we not getting it?
[02:22:56] I guess the first question, see it.
[02:22:58] I told you this part might be a little bit rough because I haven't...
[02:23:02] Done this for console.log. Let's see if we're actually pressing the button.
[02:23:10] Because this one still works.
[02:23:12] This one is pressing the button. So we're setting S to not S. Okay.
[02:23:17] Which should...
[02:23:21] trigger.
[02:23:24] format.
[02:23:29] Yeah, I mean, we are, in a sense, this is the baseline here, because what should be happening here is that
[02:23:36] When this runs the code,
[02:23:39] here inside this render effect, well, it's a type of function. It's essentially going to
[02:23:44] get a dependency
[02:23:46] on
[02:23:48] on essentially on show.
[02:23:50] And when we set show from true to false...
[02:23:54] You know, just for fun, let's just go set show false.
[02:24:00] It should.
[02:24:02] Now.
[02:24:04] when the effect runs again, see if we go console dot,
[02:24:09] So, dot log.
[02:24:11] Effect.
[02:24:13] Thank you.
[02:24:15] See it runs again. Well, I mean we can see what it gets when it runs again.
[02:24:26] Okay.
[02:24:32] Interesting.
[02:24:35] Because it's actually saying that it's still getting the array when it calls code.
[02:24:43] Which is...
[02:24:45] Okay, let's rewind, toggle effect hfnl3dng, toggle
[02:24:50] Factor around the second time.
[02:24:54] Bye.
[02:24:57] Let's do this.
[02:25:21] Ha ha ha. It's not running decision again. That is interesting.
[02:25:33] Thank you.
[02:25:39] Oh, do you know what it is? I'm such a dump.  I named my variable here  the same as the...
[02:25:45] the variable that comes in
[02:25:48] Uh.
[02:25:48] -
[02:25:49] Um...
[02:25:51] Yeah. Okay. Sorry about that.
[02:25:56] Um...
[02:25:58] Let's...
[02:25:59] Let's just make it like some local...
[02:26:03] scoped thing. I'm pretty sure this is the problem. It's like
[02:26:06] We're rewriting it so it never tracks again is my guess.
[02:26:10] - Thank you.
[02:26:11] Um...
[02:26:12] Thank you.
[02:26:22] Thank you.
[02:26:26] Oh.
[02:26:27] I hate when this happens.
[02:26:29] Amen.
[02:26:33] I froze my browser.
[02:26:38] This this is actually really annoyingly bad
[02:26:43] This is the one downside of using the plate, the...
[02:26:47] the playground because if I don't save the spot,
[02:26:55] It's an infinite loop.
[02:26:59] Yeah, I can't change the code because I froze it by creating an infinite loop.
[02:27:06] Quick, memorize it. See, I can't even select the code. The debug tools are frozen.
[02:27:12] Other.
[02:27:14] Yeah.
[02:27:15] Yeah, it's just gone.
[02:27:19] Huh?
[02:27:20] The funny thing is this happened to me during front...
[02:27:26] Front end masters.
[02:27:33] Thank you.
[02:27:36] BAM!
[02:27:38] That is so sad.
[02:27:42] That is so sad.
[02:27:47] -
[02:27:48] Thank you.
[02:27:50] Okay.
[02:27:51] Yeah.
[02:27:56] Okay.
[02:27:58] Yeah, like...
[02:27:59] kills the whole process on that thing.  Okay.  Um...
[02:28:04] Let me get the best, the right example out again.
[02:28:10] Thank you.
[02:28:16] We'll just...
[02:28:17] Keep the counter.
[02:28:21] The screenshot exists in the stream.
[02:28:25] Yeah, because...
[02:28:27] Essentially
[02:28:32] What I was trying to get to here is that
[02:28:38] Code.
[02:28:42] Amen.
[02:28:43] - I won't.
[02:28:45] Thank you.
[02:28:46] Thank you.
[02:28:48] Mmm.
[02:28:50] Thank you.
[02:28:58] Mm-mm-mm-mm.
[02:28:59] It's funny how everyone's chat telling me about the screenshot thing.
[02:29:03] Uh...
[02:29:06] Add some typo first to prevent the infinite loop. Yeah, that's usually helpful.
[02:29:23] Thank you.
[02:29:24] Thank you.
[02:29:31] function equals
[02:29:34] function.
[02:29:36] function equals
[02:29:38] function.
[02:29:42] Mm-hmm.
[02:29:45] Thank you.
[02:29:48] Sorry, this will take me a second to recreate it.
[02:29:53] function and then
[02:29:57] I'm going to go to the next slide.
[02:29:58] Mount dot.
[02:30:00] replace
[02:30:01] Children.
[02:30:08] Yeah.
[02:30:17] All right.
[02:30:19] Thank you.
[02:30:20] Let's just get the render code working.
[02:30:23] In the basic case, document.
[02:30:25] dot get element
[02:30:29] I went by ID app and let's make it
[02:30:34] Let's start with just making a counter again.
[02:30:40] Thank you.
[02:30:40] Thank you.
[02:30:41] and then...
[02:30:46] Thank you.
[02:30:47] Let's make our just show component or.
[02:30:55] And then you call it.
[02:30:59] Thank you.
[02:31:00] Thank you.
[02:31:05] No.
[02:31:07] Call it toggle, it's more effective.
[02:31:15] Show, set show.
[02:31:19] See you all.
[02:31:24] Turn function show.
[02:31:28] Then return.
[02:31:32] And...
[02:31:38] So now keep doing this this way.
[02:31:41] Thank you.
[02:31:41] children
[02:31:47] And then...
[02:31:49] toggle
[02:31:55] Thank you.
[02:31:56] and then...
[02:32:01] Thank you.
[02:32:02] I'm like trying to decide if I want to add the button back the same way.
[02:32:08] Um...
[02:32:14] The reason that it's a bit of a pain right now is because we can't...
[02:32:20] Um...
[02:32:22] we can't
[02:32:24] I don't know.
[02:32:26] Right now we only understand functions. We don't...
[02:32:29] and we assume a raise, we need to...
[02:32:31] We're gonna need to do more than that in a minute,  but to get started, I just wanted to show the function thing  'cause it's simpler than handling multiple arrays.
[02:32:41] Um...
[02:32:43] Thank you.
[02:32:47] Thank you.
[02:32:50] I could stick it in here to be fair.
[02:32:54] Right. Like, there's nothing to stop me from doing
[02:32:58] But in.
[02:33:00] Bye.
[02:33:01] here and put button here.
[02:33:06] And then...
[02:33:07] essentially const button equals
[02:33:13] button.
[02:33:22] Alright, I gotta spread this.
[02:33:25] And then...
[02:33:37] Toggle equals...
[02:33:39] On click.
[02:33:43] set show,
[02:33:46] not S.
[02:33:48] Puggle.
[02:33:51] Of course, you need to put in a function wrapper, format it. Okay.
[02:33:57] Click.
[02:33:58] toggle,
[02:33:59] Click toggle. Okay, sweet.
[02:34:04] All right.
[02:34:05] So...
[02:34:07] Um...
[02:34:20] Is foo better than foo? No, it's just I haven't shown you guys that all I've shown so far is that fragments produce arrays. The fact that fragments produce a function...
[02:34:31] you should wonder about at this point.
[02:34:34] Right.
[02:34:34] Thank you.
[02:34:36] So
[02:34:38] Okay.
[02:34:40] We're back.
[02:34:41] essentially
[02:34:42] We made our simple control flow component that toggles and
[02:34:48] As you can see,
[02:34:49] control flow,
[02:34:50] itself.
[02:34:51] is just another function. But what it means is that
[02:34:55] Mm-hmm.
[02:34:56] are, it isn't enough just to have an effect.  The effect that does the rendering, that does the inserting,  like when you have an attribute,  you can just go, give me the value,
[02:35:05] And
[02:35:07] set it, you know, like set the text content on this div. But when you're rendering arbitrary stuff,
[02:35:13] like, this is what the insert function is essentially.  I called it render here, but we are basically creating the insert function right now.  The one that I showed from the compiled output is it needs to actually
[02:35:27] understand that there are functions in the chain because any decision point
[02:35:32] at minimum has to be referenced by a function.
[02:35:36] Like, there's no other way to...
[02:35:40] to do it.
[02:35:41] Right? And what you're going to notice too,
[02:35:44] Is that
[02:35:46] When I click the seven and eight and I toggle it off and toggle on, we reset back to zero.  And the reason we set for zero is because...
[02:35:54] essentially...
[02:35:57] Thank you.
[02:36:00] the state is being created in that child component. So when we remove it,  we're actually removing the state with it, right? If I hoisted the state up here,
[02:36:07] Global state.
[02:36:09] To do then.
[02:36:11] when we toggle it and bring it back, the state will be preserved and we'll be able to continue
[02:36:15] continue it, right? So
[02:36:17] This...
[02:36:19] isn't too much of a revelation, but...
[02:36:24] it starts imposing some of the restrictions you have to think about when actually doing fine-grained rendering.  Because it's not just about pinpoint updates, you actually have to reduce code down.
[02:36:32] And
[02:36:35] At the point...
[02:36:36] A renderer.
[02:36:38] into an element. It's like
[02:36:40] It's fairly straightforward because let's do something a little bit more fun. Let's
[02:36:45] Um,
[02:36:47] Let's make her function.
[02:36:49] because this still works, toggle.
[02:36:53] Let's make our function...
[02:36:57] actually
[02:36:59] toggle
[02:37:01] a toggle, right?
[02:37:03] So, like this.
[02:37:05] I think I got that right.
[02:37:06] toggle children counter toggle toggle
[02:37:14] Um, what did I do wrong?
[02:37:21] Thank you.
[02:37:22] Because toggle returns a...
[02:37:25] Because...
[02:37:31] -
[02:37:32] Thank you.
[02:37:35] I shouldn't need to though because...
[02:37:38] The toggle always returns an array.
[02:37:44] Oh, it's because this one's not an array.
[02:37:49] Thank you.
[02:37:50] Dev took me a second. It's because that one's not an array.
[02:37:53] Right.
[02:37:55] Thank you.
[02:37:57] which means I need to spread it in.
[02:37:59] I think.
[02:38:04] Thank you.
[02:38:08] -
[02:38:10] Yeah, doing this with a raise is already starting to show some of the complexity here, right? Because
[02:38:18] We...
[02:38:19] we also need to understand
[02:38:22] arrays, essentially, because
[02:38:24] I don't want to have to try and force, because when toggle comes back, it's a function.
[02:38:29] So we can't...
[02:38:31] Spread it yet.
[02:38:36] And then this
[02:38:39] Actually...
[02:38:41] Let me think here, because toggle, we call counter, toggle itself returns a function.
[02:38:48] And then...
[02:38:49] We call toggle on a function of a function.  The problem is...
[02:38:53] This, yeah, this is what's killing us.
[02:38:57] because it assumes
[02:39:01] Yeah, see, this is the problem with adding button here because it
[02:39:04] *smack*
[02:39:05] Okay.
[02:39:06] we're already getting into fragments. Fragments,
[02:39:09] are
[02:39:10] tricky because when you have it's fine we can go here i wasn't ready to go here but we can go here when you have
[02:39:16] A DOM element.
[02:39:19] Um...
[02:39:22] Yeah, see, this is this is actually exactly why I wanted to bring the
[02:39:29] Yeah, I see.
[02:39:30] I'm going to cheat.
[02:39:32] We're going to get rid of fragments really quickly.
[02:39:35] I'm gonna make that a single element.
[02:39:38] We're going to...
[02:39:42] Make this null.
[02:39:45] We're going to make
[02:39:51] This is a single element.
[02:39:54] Yeah.
[02:39:58] I'm going to shamelessly cheat.
[02:40:03] because I don't
[02:40:06] want to get to for
[02:40:08] fragments yet. It's too complicated to where we want to be right now.
[02:40:12] We just need
[02:40:15] children, children.
[02:40:25] Yeah.
[02:40:26] All right.
[02:40:31] Oh, see if it...
[02:40:34] This is cheating too much.
[02:40:37] because I'm basically...
[02:40:40] building my own render function here, right? You see what I'm doing?
[02:40:45] like I'm creating a div.
[02:40:48] And I'm...
[02:40:52] I'm cheating too much.
[02:40:54] Okay, see, this is the problem when you don't take out these examples far enough.
[02:40:58] I had the right idea originally.
[02:41:03] where I hoisted the button out.
[02:41:10] Mmm.
[02:41:11] All right.
[02:41:14] But then if I hoist the button out, it's going to be like increasingly
[02:41:17] pain to
[02:41:19] the
[02:41:20] to show the composition here.
[02:41:22] I mean, it's...
[02:41:23] Fine.
[02:41:31] - Yeah.
[02:41:31] You, you're, you're,
[02:41:34] You're right. I am trying to get there in a specific way.
[02:41:43] And
[02:41:44] It's hard. I'm trying to find the baby steps way of getting there.
[02:41:49] Um,
[02:41:51] But it's difficult to do because...
[02:41:55] There's two big kind of mental
[02:41:58] realizations that come in this zone.  One is that...
[02:42:04] Um,
[02:42:05] Everything that's a control flow has to be a function.
[02:42:09] even like nested. So you, you, you end up with functions of functions of functions. That's what I was,
[02:42:15] trying to show.
[02:42:17] Like...
[02:42:18] If I forget about these buttons for a second,
[02:42:20] And just like after the fact here, you know, like go
[02:42:24] Set timeout.
[02:42:30] Actually, I don't even have to...
[02:42:32] do it after the fact.
[02:42:35] Thank you.
[02:42:36] What's the problem here?
[02:42:39] code return function show children function.
[02:42:43] This is fine because it's an isolated, so there's no function here, it's just a node.
[02:42:48] Children is a node.
[02:42:50] Calls a function, returns a function.  The funniest thing is I feel like I'm missing something that's like,
[02:42:57] console dot log
[02:42:59] function.
[02:43:00] I'm like missing something that's like,
[02:43:04] Yeah, so it's a div element.
[02:43:12] *puff*
[02:43:14] That error is not helpful.
[02:43:18] Maybe if I open it up here I can see it better.
[02:43:24] It's one of the spreads I'm doing.
[02:43:33] But I'm only doing one spread.
[02:43:38] Oh.
[02:43:42] Get rid...
[02:43:43] Yeah.
[02:43:46] Yeah.
[02:43:48] Yeah. Thanks, Dev.
[02:43:49] Yeah, yeah, you guys got me. Thanks.
[02:43:51] Okay.
[02:43:53] Okay, sorry.
[02:43:59] What I'm trying to get at is,
[02:44:02] You end up with...
[02:44:04] this scenario that looks like essentially
[02:44:07] Like a function...
[02:44:09] that returns a function, that returns a function, and so on, right? And
[02:44:17] What?
[02:44:19] initially when I was creating solid.
[02:44:23] I didn't know what to do with all of these.  I'm not going to lie.
[02:44:26] Um, while this
[02:44:29] Themes.
[02:44:30] kind of safe enough to begin with,
[02:44:33] you end up
[02:44:36] Um,
[02:44:38] Yeah, okay, yeah, this is actually gonna be
[02:44:42] better now.
[02:44:45] uh,
[02:44:46] Go const setters.
[02:44:48] equals an array.
[02:44:50] Setters.
[02:44:52] dot push
[02:44:57] that
[02:44:59] Show, okay.
[02:45:04] I mean, this would be even nicer.
[02:45:06] I think I can start with two.
[02:45:09] I'm just trying to think of the best way to show this because...
[02:45:11] The...
[02:45:16] The
[02:45:18] The problem...
[02:45:23] And I'm actually going to put setters...
[02:45:26] equals this here
[02:45:29] Because I...
[02:45:32] uh...
[02:45:35] The problem that we're going to hit
[02:45:38] Thank you.
[02:45:38] in a second here, and I'm hoping people will see this right away when I actually do it. And I'm going to make two buttons.
[02:45:45] const
[02:45:46] But in...
[02:45:50] one equals
[02:45:51] Button...
[02:45:53] unclick.
[02:45:59] Thank you.
[02:46:00] Setters.
[02:46:03] 0...
[02:46:08] S not S.
[02:46:13] toggle one
[02:46:16] But I'm...
[02:46:20] Yeah.
[02:46:28] Button two.
[02:46:32] button
[02:46:34] one, button, two
[02:46:42] Thank you.
[02:46:43] I did the same stupid thing again.
[02:46:46] Learn better, do it before the render. Okay.
[02:46:51] Thank you.
[02:46:52] Okay.
[02:46:54] What I'm trying to get at here is
[02:47:00] Oh yeah, and I should change the text here as
[02:47:13] and I'm going to console.log
[02:47:17] toggle
[02:47:21] The toggle, oh yeah.
[02:47:24] This is, I told you that the fact that it doesn't show all the console logs is really
[02:47:28] Annoying.
[02:47:30] toggles toggles twice. Now toggle two
[02:47:33] is
[02:47:35] the closer one.
[02:47:38] When I click Toggle 2,
[02:47:41] It's funny, it's not even working.
[02:47:44] no matter which button I'm clicking right now, it's actually...
[02:47:49] It's actually
[02:47:51] This is what I actually wanted to show, but I wanted it to actually be functioning as well. But
[02:47:57] whatever button I click now,
[02:48:00] Um...
[02:48:01] Both.
[02:48:02] toggles
[02:48:04] are getting called.
[02:48:05] This is React re-rendering in a sense. It's the whole thing.
[02:48:14] Ideally,
[02:48:16] We should only...
[02:48:17] toggle the ones on
[02:48:19] on the inside, we shouldn't be like redoing the whole thing, right?  Because when we have one render effect,
[02:48:24] in our whole app other than the
[02:48:27] the one on the count. So we have two. We have the one in the count and then we have this one. So which means that
[02:48:32] Essentially, every time
[02:48:35] we do any top of action like this toggle,
[02:48:39] Um...
[02:48:41] It's...
[02:48:43] It's calling both.  It's calling both.
[02:48:45] Right?
[02:48:47] Yeah, there's something not quite right with my logic here though, for it to...
[02:48:55] for it to not be
[02:48:57] Doing the hiding.
[02:48:59] Because
[02:49:03] Because what's happening here is...
[02:49:06] we're returning a function
[02:49:07] And we're just going through. So what does
[02:49:10] this render effect depend on. It depends on show,
[02:49:15] I have both of them.
[02:49:17] And the show of one of them calls children, which creates...
[02:49:22] the show of the other one. Now, these are nested in functions, so they're in separate contexts,  but this unwraps them all at the same context and it just recreates everything.
[02:49:34] Right. The fact that the toggle doesn't matter is annoying, but it doesn't actually
[02:49:39] stopped from what I was trying to demonstrate.
[02:49:41] which unfortunately only works when the console is open,  which is that toggle gets called twice
[02:49:49] I believe every time I call this.
[02:49:51] That's twice.
[02:49:53] no matter which one I hit, it's going to get called twice. And that's not good.
[02:49:58] It suggests that these...
[02:50:02] can't be in the same effect. Now, when I first created solid, I didn't actually know how to solve this problem. So I did something
[02:50:11] kind of interesting.
[02:50:13] .
[02:50:14] I decided that
[02:50:16] we would recursively create render effects.
[02:50:19] So...
[02:50:22] basically up here where we're doing the main render,
[02:50:26] I always tell people that solid's like effects and effects and effects, right?  Um...
[02:50:30] I would actually like wrap
[02:50:34] basically wrap
[02:50:35] This.
[02:50:37] in a crit effect.
[02:50:40] Oh, I did it again.
[02:50:44] .
[02:50:51] While loops are very dangerous.
[02:51:12] I can't open elements, unfortunately.
[02:51:15] I can't right click, I can't open the thing. The only thing I can do
[02:51:20] It's almost okay because I'm almost done this section.
[02:51:32] Thank you.
[02:51:36] Thank you.
[02:51:37] I'm going to talk to this a moment before I lose all my lovely work.
[02:51:47] Yeah, I'm just going to talk to this instead of
[02:51:49] rewriting the code again.
[02:51:50] We'll jump to the next topic after this.
[02:51:53] Um...
[02:51:56] -
[02:51:58] Thank you.
[02:51:58] what I effectively what I would do
[02:52:03] is
[02:52:05] Whenever I was calling an insert function, when it came across the function, it would go in,
[02:52:12] And create an effect inside an effect.  Now the challenge with creating an effect...
[02:52:17] inside an effect
[02:52:19] is you need
[02:52:21] both pieces, you need the node that you're gonna insert into,
[02:52:24] And
[02:52:26] Like,
[02:52:27] And the code like you have the code, but you also need to know where you're inserting into.  Now, if it's like this, where it's a single chain,
[02:52:35] It's going to they didn't let me get away with this.  It's going to
[02:52:40] essentially...
[02:52:42] reference that same element.
[02:52:44] So,
[02:52:46] Even...
[02:52:47] If the lowest level effect updates, it's going to write its contents into the element.  If something higher updates, it's going to create another.  It will recreate the effects below it and then...
[02:52:58] insert into it. But what it means is that you basically
[02:53:02] have this ability, um,
[02:53:05] to
[02:53:06] Separate.
[02:53:08] Like on one side the control flows are
[02:53:11] sending functions up. And on the other side,
[02:53:14] Um,
[02:53:18] Yeah, I'm gonna have to refresh this.
[02:53:21] Thank you.
[02:53:22] Thank you.
[02:53:25] And...
[02:53:30] Yeah.
[02:53:31] At least we have this piece of code so I can talk to it.
[02:53:36] Thank you, Dev.
[02:53:42] I'm just gonna pop this code in so we can look at it.
[02:53:45] Um...
[02:53:46] Bye.
[02:53:47] Don't know if I'm gonna spend the time getting it all going again.
[02:53:54] Thank you.
[02:53:55] Thank you.
[02:53:56] .
[02:54:07] Thank you.
[02:54:12] Funny.
[02:54:14] It's like...
[02:54:17] Thank you.
[02:54:18] It will format certain things, but it won't format
[02:54:22] Other things, as long as I get it back to being legal JavaScript, I think the formatting will work.
[02:54:38] Thank you.
[02:54:39] It's weird that it's not like actually... Missing a semicolon. Thank you.
[02:54:50] Oh, it's that one.
[02:54:52] the one before the return statement.
[02:54:56] No.
[02:54:57] Was that one before the setter?
[02:54:59] with that one.  Now the problem is people say how jet semicolons are,  are optional.  They aren't when you have a function,
[02:55:09] Next to... it's fine, I can just separate it out.
[02:55:32] Thank you.
[02:55:39] Yeah, it's fine.  What I mostly wanted to talk to was...
[02:55:45] was...
[02:55:47] the code in here.
[02:55:50] Without...
[02:55:51] *sniff*
[02:55:54] Yeah.
[02:56:01] *sniff*
[02:56:10] At least format. Okay, there we go.
[02:56:14] unexpected token period.
[02:56:19] okay um what i wanted to talk to was was this in here right this part of the loop
[02:56:27] Thanks, Dev.
[02:56:31] Um...
[02:56:35] Thank you.
[02:56:36] is that like...
[02:56:39] If it's a...
[02:56:41] If it's a single
[02:56:44] element, this is pretty easy to just like replace
[02:56:47] The children, you know,
[02:56:49] Um...
[02:56:53] It's actually a dysfunction, isn't it?
[02:56:59] but, um,
[02:57:08] How did you get so close to the actual code? This is actually funny because it's
[02:57:14] It's actually...
[02:57:22] It's almost, it's almost bright.
[02:57:29] Funny.
[02:57:30] Great.
[02:57:33] Render.
[02:57:36] Act.
[02:57:37] Only part it's missing is the actual call to render, I think.  Anyway, um...
[02:57:47] That's a syntactically correct little crash gun.
[02:57:50] I was getting to the end of the point. My point here is
[02:57:53] Which is mostly that like
[02:57:58] Okay.
[02:57:58] While this wrapping seems kind of...
[02:58:02] fine. It can be incredibly...
[02:58:04] Um,
[02:58:06] you know, wrapping each one of these in a crate effect,
[02:58:09] it can kind of like solve this problem to a certain degree.
[02:58:13] it gets a little bit more complicated when you have fragments because
[02:58:18] Now you're replacing parts
[02:58:21] of your UI, not just replacing a single value in the index.  And when I created solid initially, I actually used
[02:58:28] like fake
[02:58:30] special fragment type nodes, actually. It wasn't just because the dot, there's no
[02:58:35] The problem with document fragments is they lose their children.  So I did this trick where I'd keep references and each nested effect could like...
[02:58:43] operate on the specific portion of it.
[02:58:46] So
[02:58:47] It was expensive and it was complicated.
[02:58:51] So
[02:58:52] I'm actually kind of...
[02:58:54] I'm not going to go into too much detail of what that looked like because I got rid of it.
[02:58:59] The second problem,
[02:59:02] is context.
[02:59:04] Thank you.
[02:59:10] You guys trying to make me crash again?
[02:59:13] *laughs*
[02:59:14] Um,
[02:59:15] The second problem is...
[02:59:19] context.
[02:59:26] And because...
[02:59:31] If you...
[02:59:32] are
[02:59:34] passing functions out
[02:59:36] of the of the thing
[02:59:39] they're no longer executing underneath the context provider.
[02:59:43] Can you picture like you create instead of this being a toggle, this is a context provider and you're literally
[02:59:49] Go like create context.  And then the...
[02:59:52] functions are literally passing
[02:59:55] and getting evaluated by something above it.
[02:59:58] like some effect
[03:00:00] that's higher up.
[03:00:01] I
[03:00:04] So like...
[03:00:09] I started here because I assumed
[03:00:14] and I think most people who make reactive libraries assume,  that people can really just pass functions anywhere.  If you guys remember old solid,
[03:00:22] I mean, it still works in solid, but if you delete this, it still works because you can just pass a function in. And because of this recursive logic on insert,
[03:00:32] it will resolve it.
[03:00:34] We don't do that for attributes, but generally for inserts you could do that.  But if you look if we do this now, you see this like
[03:00:42] type error because I actually made this illegal even though it works in solid 1.7. And the reason for this is
[03:00:50] Besides it being really confusing when you go from here and then suddenly it goes this times two and this doesn't work and you actually have to change it now to here.
[03:00:58] This is an old knockout problem. Beyond that being really annoying to deal with,
[03:01:07] Okay.
[03:01:10] The consistency of being able to pass, like say always pass as a value is a good mental model.
[03:01:15] It was that people were taking components...
[03:01:19] fragments, whatever, and just passing random functions in because they realized they could  just execute them by passing them in.  Like you could have a component that doesn't take a function and people just
[03:01:28] Like...
[03:01:29] for children, people would just pass the function in, like suspense. And what would happen is,
[03:01:35] It...
[03:01:35] it would get passed through the component because they go, you know, props.children,
[03:01:41] and get a function and then pass it
[03:01:45] like into something that would then pass it through.  Like this problem is something that I call onioning,  where essentially on the reactive graph side,  you're always putting functions and functions and functions.  And then,
[03:01:58] On the other side...
[03:02:00] you're always unwrapping the functions. So it's this two-sided thing and this is fundamental to fine-grained.
[03:02:06] Um,
[03:02:08] And
[03:02:10] My initial approach was, because I assumed that people could pass functions wherever the hell they wanted, was that I needed to guard really heavily on effects and make them as granular as possible.
[03:02:21] However...
[03:02:24] That means...
[03:02:26] Uh...
[03:02:28] You know...
[03:02:29] That doesn't solve the context problem.
[03:02:31] So the solution to the context problem is actually not that difficult.
[03:02:39] You basically can...
[03:02:42] specifically in things like context providers,
[03:02:45] Also,
[03:02:46] Do this thing.
[03:02:48] That's why the children helper in Solid, if you guys are familiar with it, basically goes through and calls all the functions through.
[03:02:56] But...
[03:02:58] We have to be careful
[03:03:01] of this double toggle problem that I showed before, where it calls if you blend them all together,
[03:03:09] you
[03:03:09] then you're going to call...
[03:03:12] What?
[03:03:13] If you blend them all together, you're going to
[03:03:17] put them all together in here. If you call function, function, function,
[03:03:21] your nested control flows under your context provider would also completely wipe out like React does.
[03:03:30] So how do you solve this problem?
[03:03:32] The answer
[03:03:33] is actually
[03:03:35] Relatively simple.
[03:03:36] You rap...
[03:03:37] all the functions you return
[03:03:40] with Create Memo.
[03:03:43] Now, as I said, I would have liked to probably show this a bit better, but if you wrap the functions with create memo at the control flow points, it means that...
[03:03:56] Um.
[03:03:59] Even if you are...
[03:04:01] unwrapping
[03:04:02] the functions,
[03:04:04] um
[03:04:05] they'll return the same previous value unless they've changed.
[03:04:11] Smells like React.
[03:04:13] I...
[03:04:15] but it's react on each person.
[03:04:19] individual...
[03:04:20] thing. Basically,
[03:04:23] I'm getting there.
[03:04:25] Um,
[03:04:28] you
[03:04:30] There is a difference from React, which we'll get to as well.  But you start putting create memo on the control flow functions you return.  This way that they isolate.  So around the time I released Solid 1.0,
[03:04:43] I had a children helper.
[03:04:45] that literally went through and wrapped every function you returned in Create Memo
[03:04:51] And then I had an insert function that basically wrapped every...
[03:04:55] thing that it got coming back out the other side.
[03:04:59] in render effects.
[03:05:03] It worked, but try debugging that code.  It's like playing ping pong because you're wrapping everything on one side and then you're like...
[03:05:11] wrapping it again on the other side
[03:05:14] So
[03:05:15] And...
[03:05:17] As I told you,
[03:05:18] New area, no one had been working on this stuff.  Um,
[03:05:21] you know, Solid was still at the top of benchmarks with this, because this only impacted areas
[03:05:28] where
[03:05:29] you weren't directly going into a div because a div is where it stops.  Once you hit an element,  you just render the thing in.  It's when you start putting control flows,  nesting of control flows,  when you start critting,
[03:05:43] maybe fragments. As I said, originally Solid was using render effects for fragments, but
[03:05:50] Then I was like, oh, this is really complicated for bookkeeping.  So we started turning them into arrays.
[03:05:56] with memos for expressions.
[03:06:00] Right, which is where I was getting where someone someone earlier in the stream asked if like it's a better return a function or return a fragment with just one expression. Well, it just makes it into a memo. So fragments.
[03:06:14] would memoize the reactive expressions, not components, because they're not necessarily going to return the, you know, if they return a function, they should memorize it themselves. But
[03:06:25] you know,
[03:06:26] Any, like, we can, I'll just open another playground just so we can see this really
[03:06:30] Really simply.
[03:06:33] I'm just going to...
[03:06:35] make a fragment down here, const F equals
[03:06:39] show you the rules for fragments.
[03:06:43] D
[03:06:46] Create comp, let's just do comp.
[03:06:50] Let's do
[03:06:51] s signal function. Okay, here we go. So what we got here is three different types of expressions  for this f here. Okay, if we go and look at f what you're going to see is an array,
[03:07:03] With D directly, because it's just a...
[03:07:06] Simple value, create component directly,  'cause it's a component.  And then S is a memo of S, or if it's S times two,
[03:07:16] Expand it out. It's a memo that wraps S.
[03:07:23] So...
[03:07:27] In a sense, getting back to what I was talking about here,
[03:07:32] Thank you.
[03:07:35] There's a lot...
[03:07:36] of rappers, but only in the case
[03:07:40] Like each Dom notes is a reset.  Yeah.
[03:07:43] Each nested DOM node is a reset.  That's why when I did the example earlier,  and it turns this into a div,  that was my little cheekiness of doing a reset,  because technically it's just a node element.  It handles its own state in isolation.
[03:07:57] Right.
[03:07:58] So this is actually one of the biggest difference.
[03:08:01] in a sense, because what you can view is
[03:08:04] fragments,
[03:08:05] And...
[03:08:07] Control flow.
[03:08:08] in between
[03:08:09] your element,
[03:08:11] And...
[03:08:12] Um,
[03:08:14] Yeah, basically fragments and control flow in between like where your state changes and your elements act like mini...
[03:08:20] auto-memoized VDOMs.
[03:08:22] Every time you hit a native element, it stops.
[03:08:25] and it starts over again, which is different than React, which
[03:08:29] It's a whole beat on him.
[03:08:32] So...
[03:08:34] -
[03:08:38] Yeah, yeah, where I'm going.
[03:08:41] I realized in Solid that this was like
[03:08:43] crazy amount of wrapping. People didn't hit this problem very much because your control flows are generally not that nested and your fragments do hit elements and
[03:08:56] you know, it's generally okay until you start...
[03:09:02] getting into that over wrapping on both sides loop, like with context providers.
[03:09:05] Thank you.
[03:09:06] *laughs*
[03:09:08] And then I realized something.
[03:09:16] No. See, inside of div...
[03:09:19] You don't know. We just do multiple...
[03:09:23] We do, well, let's take a look.  We do multiple effects or we do one effect that writes to, we have a mechanism for grouping effects.
[03:09:32] Um...
[03:09:34] So, yeah.
[03:09:35] - Mm.
[03:09:36] Mixed
[03:09:37] But like, yeah, I mean, let's look at some compiled output. Look at the difference between this and this.
[03:09:44] Right?
[03:09:45] Here it is.
[03:09:47] What we actually do is, in this case, is actually--  because we separate our inserts and we don't group them,
[03:09:53] we actually create three effects.
[03:09:55] One.
[03:09:57] for
[03:09:59] This is an interesting one. Why is this? Okay, no, this insert D is not
[03:10:04] function.
[03:10:05] So this one will just do the insert logic normally.
[03:10:08] This one will do the insert logic normally as well.  This one will pass a function to insert,  which will create effect on the inside.
[03:10:16] So we just
[03:10:18] But essentially we separate into three different insert calls and then
[03:10:24] There's I think we I decided that inserts shouldn't group together because
[03:10:33] But generally speaking, you don't need to reevaluate them together usually.
[03:10:37] attributes don't carry as much expense.  So it's kind of like a heuristic thing.
[03:10:43] But...
[03:10:44] What would I...
[03:10:45] What I was trying to get at is I realized...
[03:10:48] though, that there is a simple pattern
[03:10:51] that avoided us from having to wrap everything all the time on both sides.
[03:10:57] The first thing
[03:10:58] that I realized...
[03:11:00] was that
[03:11:01] So
[03:11:03] If we memoize the things that matter,
[03:11:06] like those fragments or control flow places where logic can split and run independently.
[03:11:12] children
[03:11:14] control flow.
[03:11:16] Doesn't need to wrap each one because all the key memo places are
[03:11:20] are taken care of.
[03:11:22] The only thing you have to separate
[03:11:24] is...
[03:11:25] The first one.
[03:11:27] What I mean by that is...
[03:11:30] Okay.
[03:11:31] If you pass a provider and you pass props.children...
[03:11:36] You don't want...
[03:11:38] props.children.
[03:11:39] to get wrapped up with
[03:11:42] the children it returns.
[03:11:44] You want the create to happen.
[03:11:46] and then separately unwrap
[03:11:48] all the things it returns.  Because you never want...
[03:11:52] those, you never want the update
[03:11:55] the
[03:11:57] things that returns to cause it to recreate them again. It creates a loop.
[03:12:01] It blows everything out.  So as long as you separate the very first one,  instead of like, basically, if you go, if it's a function,
[03:12:09] Memoirize that
[03:12:11] then make a separate one where you just go infinitely
[03:12:14] chugging through these
[03:12:16] while it's a function.
[03:12:18] You won't...
[03:12:20] cause...
[03:12:21] um,
[03:12:22] You won't cause it to...
[03:12:24] - Uh.
[03:12:26] blow itself up.
[03:12:28] So, as long as I prevented the end user from just passing random functions everywhere, like I talked about in Solid 1.7,
[03:12:39] by making it
[03:12:41] illegal.
[03:12:43] It's not going to matter in a div, but people start doing that in components and context doing that as long as
[03:12:49] We prevent that.
[03:12:52] It's a simple thing to do.
[03:12:54] It meant that we didn't need to re-memo-wrap everything.  Essentially, we can just...
[03:13:00] trust the compiler to put the memos in the right place. And I realized
[03:13:05] much later, probably solid 1.7 time period or 8, that we didn't need to wrap all the effects.
[03:13:11] we only needed to separate again off the one level.  And then we could,
[03:13:18] basically just
[03:13:20] fire through these because
[03:13:22] they're already memorized.
[03:13:25] Okay.
[03:13:27] Why am I talking about this? Because
[03:13:30] If you thought that fine grained rendering
[03:13:34] was like a VDOM already.
[03:13:39] Thank you.
[03:13:43] I kind of came to an interesting...
[03:13:46] realization,  um,
[03:13:49] while working on solid 2.0. Um,
[03:13:52] Which is that
[03:14:02] Do you know how many functions you're passing around?
[03:14:06] What I realized in solid 2.0
[03:14:08] was that
[03:14:10] Some of you might have seen that I've been working on stuff
[03:14:13] where
[03:14:14] I might create render
[03:14:17] Effect.
[03:14:18] is split as an API.
[03:14:21] Right? We're all accustomed to
[03:14:24] Um...
[03:14:27] you know, writing effects like this these days, you just go make an effect,
[03:14:30] read some stuff, do some side effect. But for async reasons,
[03:14:36] I've been looking a lot at
[03:14:39] splitting them so that there's the tracking side.
[03:14:42] You know, where you go, oh, I listened to count.  And then there's the side where you're like,
[03:14:47] Now I actually insert
[03:14:49] it in the element.
[03:14:50] whatever this value is you got from count.
[03:14:53] I love when it doesn't do what you expect, right?
[03:14:56] Something like this.
[03:14:58] in order to split this up.
[03:15:05] It...
[03:15:06] It means...
[03:15:07] that
[03:15:11] Well, you have to make a couple decisions, right?
[03:15:13] If you have nested components...
[03:15:16] Do they get created on the effects side?
[03:15:19] Or do they get created on the pure side?
[03:15:22] If you have nested reactivity, if you're building up a whole graph,
[03:15:26] Right? Before...
[03:15:27] we were, it was very like, basically we were just had this kind of hodgepodge together where we're just calling functions and that return functions, return functions. And then eventually they kind of come out the other side backwards.
[03:15:38] And we resolve them through.
[03:15:40] If you're going...
[03:15:42] to split them
[03:15:44] You have to decide where
[03:15:47] you do this.
[03:15:48] Right?
[03:15:49] And
[03:15:51] what I realized is that this resolution
[03:15:55] is always on this side.
[03:15:58] In a sense, you create
[03:16:00] The DOM elements, like all these, you know...
[03:16:03] buttons and all these pieces in the pure side, which probably seems kind of weird, but...
[03:16:11] you insert them or attach them to their parent,
[03:16:14] in the effect side.
[03:16:18] Thank you.
[03:16:19] What this means is
[03:16:21] This side being pure,
[03:16:25] is essentially
[03:16:27] a memo and like it's similarly there, which got me to realize, I know this kind of crazy. It took me so long to get here is that
[03:16:38] Even though there can be...
[03:16:41] You know.
[03:16:44] Let me do this for emphasis.
[03:16:52] Even though there can be other
[03:16:55] effects
[03:17:03] Even though there can be other effects in the pure side and other effects, and you can nest these separate starting points, these mini virtual DOMs as I was calling them, inside each other like this.
[03:17:16] the actual place where the world sees the impact doesn't happen directly.
[03:17:22] Until
[03:17:23] you run the outside.
[03:17:26] And this means because they're returning these values, essentially, like,
[03:17:32] this one returns count here and this one returns count here that
[03:17:39] If you're already wrapping at all the right places, like with the control flows and the fragments,
[03:17:45] The unwrapping
[03:17:47] Thank you.
[03:17:48] Thank you.
[03:17:51] happens over here.
[03:17:55] and it only needs to be one layer deep,
[03:17:57] Like we talked about before.
[03:18:00] essentially...
[03:18:03] We don't need...
[03:18:05] To nest...
[03:18:08] additional create effects to do the rendering like I was doing before.  You know, when I was like this effect,
[03:18:15] is like nesting a div
[03:18:18] inside a component.
[03:18:20] the looking at the like
[03:18:22] return type of the count.
[03:18:25] or thing is not something that we have to handle
[03:18:29] recursively. There's basically no onioning because you already have
[03:18:35] all the memos
[03:18:37] coming in and this side only needs to trace through the memos and
[03:18:42] Which means that the act of resolving...
[03:18:47] the  the inserting of the Dom stuff like I was showing like that insert I
[03:18:53] expression is the exact same logic you need to resolve children
[03:18:57] Because it's,
[03:18:58] It's all the same thing. It's just resolving stuff on the pure side.
[03:19:02] There's no additional effects involved. So
[03:19:05] it collapses the whole system and uh
[03:19:09] you
[03:19:10] I want to show you what that looks like, actually.
[03:19:15] So I'm going to go into DOM expressions.
[03:19:18] and I'm going to show you
[03:19:24] Let me show you something because
[03:19:26] If we look in something like solid today and we go into the client.js,
[03:19:33] And we look for our
[03:19:36] Favorite
[03:19:37] Insert.
[03:19:38] expression thing.
[03:19:40] There's a bunch of extra hydrating logic, but what you're going to see is ignoring the hydration logic.  It goes while typeofCurrent equals function, unwrap it like we were just talking about.
[03:19:49] And then he goes, OK, if they're equal, early return it.
[03:19:53] If it's a string,
[03:19:56] do some text operations. You can avoid the multi stuff right now. Um,
[03:20:01] If it's
[03:20:02] a bullion
[03:20:03] basically just skip it, clean it out if it had stuff.  Like, because you skip nulls and Booleans in JSX,
[03:20:12] If...
[03:20:13] If...
[03:20:17] Oh yeah, sorry, this is current.  This is not what you think it is.  Current is the previous value.  This is the weird thing I had to do  because of the nesting of functions.  What actually happens in solid, sorry,  is if it's a function, it creates the,
[03:20:29] Effect.
[03:20:30] And then...
[03:20:32] Sorry, it jumped on me here.
[03:20:36] There it is.
[03:20:37] I
[03:20:38] It creates the effect...
[03:20:40] And then what actually that was a weird jump.
[03:20:43] Sorry, that was not...
[03:20:45] Insert.
[03:20:46] Expression.
[03:20:48] jump to a different version of the code.
[03:20:52] Okay, sorry. Top-level crits effect and then it does the while that I was talking about, sorry.
[03:20:58] I told you it had to create one level deeper of effect, and then it does the
[03:21:02] recursively calls itself and does the insert again.
[03:21:05] But the stuff's all tangled together.  If it's an array, then it normalizes the array information coming in.  And then it, again, does an insert expression.
[03:21:15] Um...
[03:21:16] It...
[03:21:17] And basically, there's all this kind of tangled...
[03:21:20] logic that handles both resolving and normalizing of the values and
[03:21:27] doing the side effectful part of actually rendering in this function.  This is the core of DOM expressions and it's probably the most important function in the whole library is this insert an expression.  The reason I want to show this is
[03:21:39] If we...
[03:21:40] If we were to change this around to split,
[03:21:44] Thank you.
[03:21:45] like I was talking about.
[03:21:47] Sort of expression.
[03:21:51] Thank you.
[03:21:54] Thank you.
[03:21:56] This...
[03:21:58] the...
[03:22:00] Thank you.
[03:22:01] What actually I sorry I have to go to insert first the thing that calls insert expression my bad I
[03:22:06] Insert expression gets called by a function called insert, which checks if it's a function
[03:22:12] and runs it normally or otherwise it checks if it's an effect and wraps it.  In the old version, as I said, it just called insert expression  and put it in an effect in this version.
[03:22:23] the separation.
[03:22:24] of the render, the
[03:22:26] passes it to the normalize first, so completely normalizes it before it passes it to the insert.
[03:22:34] the insert
[03:22:36] Now, which is what I was trying to show you,
[03:22:39] It only does the side effects. It's like,
[03:22:42] If it's a string, do the stuff.
[03:22:45] If it's this, clean it up.  You see there's way less code here.  I can fit it on one screen now.  If it's a node, replace it.  If it's an array...
[03:22:54] If the previous one was empty, clean it, otherwise do this.  This is basically reconcile and do all the diffing.  So normalization handles all the weird
[03:23:03] There's no normalized array call here. There's way less like
[03:23:08] if it's this, do this kind of logic.  And...
[03:23:11] The normalized code,
[03:23:13] That I...
[03:23:17] That's in that first half.
[03:23:19] looks like this. It calls this one helper called Flatten
[03:23:24] And then, um,
[03:23:26] It does a little bit of normalization of changing text nodes to strings of text nodes, which will probably go away in the future.  But the reason I want to show Flatten is because...
[03:23:37] and
[03:23:39] If I go to
[03:23:40] Solid JS
[03:23:43] here, which is
[03:23:46] It's always the GitHub.
[03:23:48] So Reddit.
[03:23:48] Let's get it.
[03:23:49] Um,
[03:23:51] and I go to the next branch here.
[03:23:54] Thank you.
[03:23:55] Packages.
[03:23:59] Solid. And I go to...
[03:24:07] the
[03:24:08] children helper,
[03:24:09] the thing that roots it all as children
[03:24:15] Thank you.
[03:24:18] It just goes create memo, flatten.  It's the exact same logic...
[03:24:25] of resolving...
[03:24:27] The...
[03:24:29] all the arrays and and functions and arrays and all that kind of stuff between rendering
[03:24:36] Um...
[03:24:37] into the DOM or resolving children's for context.
[03:24:41] Right. So.
[03:24:42] What does that logic look like?
[03:24:45] signals,
[03:24:47] Um...
[03:24:49] So
[03:24:50] Apologies.
[03:24:52] signals.
[03:24:53] I know this is very specific to solid but right now but this is a big revelation to me in terms of rendering, which is why I wanted to talk about this is because
[03:25:03] Core...
[03:25:05] No, yeah, core utilities.  Yeah, utils.  Flatten utilities.
[03:25:10] is this function. There's some stuff involved, but it goes, if type of children equals function and not children length, this is checking for functions with arguments for some reason, something I've always done.
[03:25:21] I have some other options here, but essentially it does a while loop where it unwraps it.
[03:25:28] And then...
[03:25:31] If it's not an array, it just returns the value.  If it is an array,
[03:25:35] Nested goes in.
[03:25:38] and it goes through each element of the array.  Again, function unwraps it.
[03:25:43] if it if it is an array calls itself again,
[03:25:47] you know, and recursively goes through and handles functions array. The only thing that's a little bit interesting here that I'll mention is that
[03:25:53] Each element of the array is handled in a separate try catch.  This is just a small note, not too important, but it's so that if...
[03:26:02] And he...
[03:26:03] part of it errors specifically because async through,  it still processes the next thing in the array.
[03:26:10] Um,
[03:26:11] like the next item. This is the React 19
[03:26:15] problem. You know how in React 19 if they throw on async,
[03:26:21] originally, I think they fixed this. It would make like basically if you had siblings doing async, they would waterfall.
[03:26:28] It's because if you throw up a promise while iterating over one of the pieces of async, it doesn't get to the next item.  So this is the protect against it.  It's funny, in Solid I never used to worry about it because we didn't throw, but in Solid 2.0 working on this, I realized I had the throw.  And this, again, the same throw interruption impacts DOM rendering the same way as it impacts...
[03:26:48] um
[03:26:49] resolving, you know, children. So this way, the siblings still pass through.
[03:26:57] Yes, this is what I meant. I was helping Deb with a demo and I hit this. My point is,
[03:27:04] Thank you.
[03:27:05] Yeah, my point is...
[03:27:07] The signals library now has the majority...
[03:27:11] of the code,
[03:27:12] Thank you.
[03:27:13] for rendering, so to speak. It's not rendering, it's flat, it's flattened, essentially. It's like flat, you know, it's like map.flat. The reactive equivalent to map.flat is basically, if you separate the effects,
[03:27:28] full part of rendering from the pure part, you can reduce the problem
[03:27:32] into these flat operations as long as each section is separately memoized. So
[03:27:38] Yes.
[03:27:40] What we've created here, ironically, is
[03:27:44] Is sort...
[03:27:46] of
[03:27:47] A beat on.
[03:27:48] Right.
[03:27:50] Except...
[03:27:52] It's only as deep as the decision points.
[03:27:57] You don't recreate any...
[03:28:00] artifacts like virtual nodes. It's just the holes
[03:28:04] Right. Because
[03:28:07] Your skeleton
[03:28:09] our DOM elements
[03:28:11] that original pinpoint update.
[03:28:13] thing we looked at. But then the logic that helps you do control flow within the holes is essentially
[03:28:21] separately reactively memoized. The difference between reactive memoized and top-down memorization is you
[03:28:27] you can start at any point. If you have a fragment,
[03:28:31] with
[03:28:31] 200 children
[03:28:35] eat
[03:28:36] inside a fragment, each with 200 children.
[03:28:40] If you update the one memo
[03:28:42] the second one down in one of the rows.
[03:28:46] a reactive signal library will start from there.
[03:28:49] rather than go all the way to the top, check
[03:28:53] diff all the 200 and each of their 200.  You know what I mean? Like it won't it doesn't have to mark it dirty all the way down the chain  and it doesn't have to check dirty all the way down the chain.  But essentially
[03:29:05] It's not actually...
[03:29:08] that different when you consider that...
[03:29:11] I was talking about those streams going through your app when they update.  When I split the render effects, like I was talking about here,  when I split the front half from the back half, where is this?  Where is it?
[03:29:24] I
[03:29:25] I thought I'd put it in one of these. When I split the render effects like this,
[03:29:29] you actually see that split. The front half
[03:29:33] is essentially the virtual DOM.
[03:29:37] And this is the actual effect.
[03:29:39] the deeper this piece is,  the more...
[03:29:45] dynamic work is being done, even if it's slightly more granular.
[03:29:50] But the difference is as you construct your graph,
[03:29:53] Every...
[03:29:56] element every
[03:29:58] It's a chance to restart.
[03:30:00] - It's a chance to
[03:30:01] Act in complete isolation.
[03:30:05] Thank you.
[03:30:06] Anyway.
[03:30:08] So
[03:30:10] I'm hoping, I'm hoping
[03:30:13] some of this makes sense. Did we answer the question though that we set out to answer here?
[03:30:22] This is basically the...
[03:30:28] This is basically the core mechanism though, right?
[03:30:34] If you have...
[03:30:35] How did I frame it in the video description? Let me see if I can go on YouTube and see what I actually wrote.
[03:30:42] um...
[03:30:43] for this stream.
[03:30:45] Give me two seconds.
[03:30:50] Sure, okay.
[03:30:54] What do they ask? What makes solid salt 5 different than preact quick or react with Jotai? Okay.
[03:31:00] So
[03:31:01] Thank you.
[03:31:03] the
[03:31:06] the the difference with with um there's basically three stages of this right
[03:31:14] There's React.
[03:31:15] which when state changes,
[03:31:17] Everything...
[03:31:18] below needs to rerun.
[03:31:21] Right?
[03:31:22] both if you update the smallest thing or you replace something or do some kind of control flow.
[03:31:28] Like if...
[03:31:29] If you map over some data,
[03:31:33] Like an array.
[03:31:34] and a checkbox and a single, you know, like a done on a single to do changes.
[03:31:39] React has to mark the whole
[03:31:42] to-dos list as dirty
[03:31:45] rerun that component, even if it's memoized and it doesn't like touch the other piece, it still goes, okay, well,
[03:31:51] this array did change.
[03:31:54] So it reruns the whole array.
[03:31:56] And then it goes and it goes, okay,
[03:32:00] I realize that this item in the array has changed.  Recreate that item.  And it goes, okay, I realize this particular field has changed.  Recreate that field.  It can skip the other work, but it basically...
[03:32:12] does everything.
[03:32:14] um
[03:32:15] Even with Jyotai, Jyotai can be like, hey...
[03:32:20] We know...
[03:32:22] that
[03:32:24] you know, we have this state that's higher up.  We don't need to re-render all the components in between.  Only this component depends on that state. Jyotai saves you
[03:32:33] that problem, but it doesn't change the fact that
[03:32:37] at whatever point you
[03:32:39] start rendering the data from Jyotai where you use it,
[03:32:43] that becomes like the use state localized.  Jyotai just lets you get rid of the code
[03:32:50] in between where it's defined
[03:32:52] in the tree and where it updates.
[03:32:55] like, and where it's used.
[03:32:58] Okay.
[03:32:59] Thank you.
[03:33:01] Thank you.
[03:33:02] Thank you.
[03:33:05] Thank you.
[03:33:07] Thank you.
[03:33:13] Yeah, the infinite loops did not let me help because I don't have a working example to show you.
[03:33:19] And rebuilding it over and over again is kind of difficult.
[03:33:22] Um,
[03:33:23] See, with the flatten helper, it's a way easier for us to build a renderer now because
[03:33:30] Um...
[03:33:32] we can literally just like wherever the
[03:33:35] Not this, but wherever this code is here, we can just basically be like, instead of doing this, we can just be like flattened.
[03:33:45] This and replace child.
[03:33:47] is essentially what the logic becomes.
[03:33:50] Um...
[03:33:51] Because it's a generic routine for saying, if it's an array, if it's a function, don't worry, we'll just reduce it down for you.
[03:33:58] Um...
[03:34:00] Thank you.
[03:34:01] Hmm.
[03:34:03] I'm like debating whether I want to do that, but given time, I don't know.
[03:34:08] Yeah.
[03:34:10] But...
[03:34:12] What I'm getting at is
[03:34:15] when I'm talking about the difference between these solutions,
[03:34:19] In React,
[03:34:22] wherever you
[03:34:24] Come.
[03:34:28] wherever this statement happens, wherever you go const,
[03:34:32] you know, S, use state.
[03:34:37] That's.
[03:34:38] That's where
[03:34:40] the rendering starts from, wherever you call that set. With Jyotai,
[03:34:45] you can essentially
[03:34:48] pull this out.
[03:34:50] So to speak,
[03:34:53] But then, like, wherever you...
[03:34:55] bring it back in.
[03:34:56] That's the component that will render.  Wherever you put set doesn't need...
[03:35:02] to
[03:35:02] Like quite often we hoist stuff because we need...
[03:35:05] We need set.
[03:35:07] If you bring it higher up in the tree so that other things farther away call set,
[03:35:13] then
[03:35:14] Unfortunately, everything below it changes. With Jyotai, you can actually separate the read from the set, essentially.
[03:35:22] but you're still rendering components completely from that point, no matter how much or how little you do. Quick
[03:35:30] And preact...
[03:35:33] in a sense with their signals implementations, we make the signals,
[03:35:38] Signal.
[03:35:40] let you do this Jyotai thing
[03:35:43] And in addition,
[03:35:46] Even if it's in here,
[03:35:48] If there's a specific place where you're like div...
[03:35:53] you know,
[03:35:55] s.value, I can think of what they do. When you put it in a specific node, they can go, okay,  we don't have to rerun this component. We literally just have to update this.
[03:36:03] Mm.
[03:36:04] But,
[03:36:06] If.
[03:36:08] If this is happening,
[03:36:13] Thank you.
[03:36:18] So to speak, like...
[03:36:24] Your control flow, like, let's pretend it's...  Let's actually do s.op. Let's do something more fun.
[03:36:30] s.value.map.
[03:36:36] Thank you.
[03:36:41] essentially
[03:36:43] you're not getting fine-grained updates anymore.  You're returning right into...
[03:36:48] into VDOM update territory, right?
[03:36:53] Amen.
[03:36:56] Fine grained rendering
[03:36:58] means that
[03:37:02] you only care about the holes.  You're never recreating the dominant elements
[03:37:08] that you don't need to, essentially.  It's all guarded with separate events.  You don't have to update the data
[03:37:15] from the value of
[03:37:18] to know that you can make it
[03:37:21] granular. Obviously, things like proxies make this easier. You find that's why Vue, Solid,  Svelte all have proxies to make it easier to trigger. But it's more so that
[03:37:31] Each of these pieces aren't defined so much by the component that they're in, but
[03:37:38] But always by the expression that they're in.
[03:37:45] Yes, you should be able to build some amount of control flow aspect of it.
[03:37:51] Uh...
[03:37:52] Which would definitely...
[03:37:55] Because yeah, it's the memoize control flow.  The interesting...
[03:37:58] Part of that
[03:38:00] is...
[03:38:03] Mm-mm.
[03:38:04] like what the VDOM is doing at that point, because you are still, there's still one extra step of creating the VDOM nodes. It's basically like hyperoptim, like you can use signal style optimization to
[03:38:18] create VDOM nodes that then get diffed.
[03:38:21] you know what I mean? Like it's, it's one extra step. So I'm, I would not be surprised. Um,
[03:38:26] to see, not Svelte 5 levels, but to get to Svelte 3 levels, as you were saying. So yeah, that makes sense. So
[03:38:37] Thank you.
[03:38:38] It's interesting because does any of this actually matter to you from a practical standpoint?
[03:38:43] Um...
[03:38:45] It just means that we've seen a reduction of
[03:38:49] almost like a streamlining of code in the same way that
[03:38:54] Um,
[03:38:56] I showed the move to solid 2.0 instead of introducing new concepts.
[03:39:02] These things are all the...
[03:39:03] the same concept. I think that's one of the most interesting things that I've been, I've been kind  of realizing as I've been working through, you know, these kind of problems, uh, is that,
[03:39:16] Like...
[03:39:19] Um...
[03:39:20] Like...
[03:39:21] If...
[03:39:21] Suspense.
[03:39:24] in a fine grained rendered system.
[03:39:27] is literally a combination
[03:39:30] of computations in a certain configuration.  It's like we're playing with Legos. Instead of like,
[03:39:37] instead of creating
[03:39:40] A bunch of like...
[03:39:41] new concepts and code.
[03:39:43] Like there's a bit I needed to make a special type of
[03:39:46] computation, you know, that has a little bit of special logic. And, you know,
[03:39:52] I've introduced this idea of like schedulers and solid in terms of time, which
[03:39:58] But...
[03:39:59] once I have those primitives,
[03:40:01] like the idea of a scheduler.
[03:40:04] you can model like incredibly complicated things by just
[03:40:08] putting the pieces together. Now once, on one hand, you, this might sound like I'm making the RxJS argument, where it's like, you know, it's so much easier to do all this retry logic,
[03:40:18] because you have these pieces, but then you're like, well, do you even need this at all anyways?  You could just write the thing more directly.  Why do you have to jump through these hoops?  Well...
[03:40:27] For it to work reactively, you need to work within the language of it, so you have to jump through the hoops.
[03:40:33] But.
[03:40:34] It's interesting because it makes the concepts not special.
[03:40:40] Yeah.
[03:40:45] Yeah, what's a live computation? Oh, nothing. I was just a term that I used
[03:40:49] for, I wanted to make,
[03:40:51] Um...
[03:40:52] an eager computation that, um,
[03:40:56] Yeah, honestly, this is just telling it to participate in...
[03:41:02] Let me look here.  Yeah, too deep for the stream, I think.
[03:41:06] It's mostly just because I wanted it to...
[03:41:09] participate in suspense.
[03:41:11] um itself it's in case someone does something async top level anyway.
[03:41:18] It's not important. Okay.
[03:41:20] Okay.
[03:41:21] Pfff.
[03:41:21] I'm here to answer any more questions on the rendering.  I know I kind of got off a little bit here, but I'm hoping like
[03:41:28] you can start seeing fundamentally that at its core,
[03:41:32] fine green
[03:41:33] rendering
[03:41:34] is actually more of the same in terms of just component or signals composition. You're just like,
[03:41:39] writing functions that return memos that get read by other functions that  return memos. And they just kind of, at a certain point, there's like,
[03:41:49] Mm.
[03:41:50] one function that resolves it all down into like,
[03:41:54] a flattened version and then you take the flattened version and you look at what you had before and either you insert it or you diff it if it's maybe you know some elements and then you're on your way there isn't much more to it.
[03:42:06] - Sss.
[03:42:08] Um,
[03:42:10] Thank you.
[03:42:11] Yeah, I don't know. Other than that, I wanted to talk about async, but I don't know if anyone cares to talk about async. I wanted to actually show something kind of cool and ask a question. The only problem is I didn't download it, which was silly of me not to do before stream. I was just so busy working on setting up that tier list that I didn't actually download the async example I wanted to show. Well, it's your example, Dev. Do you have an updated version of that anymore?
[03:42:37] that I can pull down.
[03:42:40] Thank you.
[03:42:42] I wanted to look at your demo for a minute.
[03:42:47] Thank you.
[03:42:50] Yeah, I just don't remember. Can you send it to me on Discord?
[03:43:01] Yeah, if you can send it to me on Discord, that would be great.
[03:43:11] uh...
[03:43:19] Thanks, Dev.
[03:43:27] Okay, nice, nice, nice. And I see you've actually copied the versions in. Okay, cool. Let me just...
[03:43:36] Grab that.
[03:43:38] I think.
[03:43:42] Thank you.
[03:43:43] All right.
[03:43:52] Not right now.
[03:44:05] Thank you.
[03:44:07] Thank you.
[03:44:08] Thank you.
[03:44:09] Alright.
[03:44:10] Let's get this.  So yeah, let's talk async for a bit,  unless people have more questions about reactive rendering.
[03:44:18] I actually tried to write an article about reactive branding.  I'll share it right now.
[03:44:22] I think it's linked to one of my older articles, which was...
[03:44:29] uh,
[03:44:30] Thank you.
[03:44:31] God, I have so many DevTree articles at this point, which was it.
[03:44:35] signals...  No, building reactivity...
[03:44:42] Build, I can never remember the name of the stupid
[03:44:44] - Very cool.
[03:44:46] Not taller than that, maybe.
[03:44:51] Yeah.
[03:44:53] The bottom of this article, I list link a much older article,
[03:44:58] reactivity to rendering.
[03:44:59] in-depth took it down. Okay, SoliJS reactivity to rendering.
[03:45:04] reactivity to rendering.
[03:45:09] Angular love. Interesting.
[03:45:13] It's fine.
[03:45:14] I've tried to cover this article in the stream before.  I don't know if I had much more success.  I was trying to show how to write the insert expression.
[03:45:27] Um,
[03:45:28] Um,
[03:45:30] logic and it's funny because it's just it's so much easier with flattening because with
[03:45:35] flattening
[03:45:37] The insert logic, if you don't care about diffing, it's literally replace child. You can just replace insert with replace child and just call flatten. Um, anyways, I'm going to share this on the stream just in case.
[03:45:52] Thank you.
[03:45:58] Thank you.
[03:45:59] Thank you.
[03:46:02] All right.
[03:46:03] you
[03:46:04] Let's do this.
[03:46:07] Okay.
[03:46:08] PS code.
[03:46:11] But...
[03:46:12] Open.
[03:46:14] Development examples.
[03:46:17] Thank you.
[03:46:18] Let's go full screen here. I trust you, hopefully, Dev.
[03:46:22] Thank you.
[03:46:23] Okay, so this is a simple example, but I want to talk about it because it poses an interesting question.  Oh, I love this example.  I love how you've written it.
[03:46:32] Okay, this is beautiful.
[03:46:34] Okay.
[03:46:35] This example is
[03:46:37] is probably the first compiled solid 2.0 code you've seen on stream.  I do a lot of hand stuff, but this is actually basically all the solid 2.0 stuff.
[03:46:48] but working with proper JSX suspense and all this stuff.  So, but I need your help,  which is why I wanna talk about this.  'Cause I wanna talk about expectations  and about how these things should work.  And okay, so let's build this first in case,  I can't remember what the build, is there a build command?
[03:47:06] What are we doing here?
[03:47:09] Dev, okay.
[03:47:11] death.
[03:47:12] Maybe I need to install it first.
[03:47:16] That's actually NPM. What am I doing? No, whatever.
[03:47:26] But the weirdest thing is I'm seeing Babel reset solid 0.19
[03:47:36] Thank you.
[03:47:41] I guess it's still compiled.
[03:47:44] That's interesting.
[03:47:54] Okay. Okay. We have dev and then I'm gonna, I think just M,
[03:48:00] MPX.
[03:48:02] serve the current folder is how we do this.
[03:48:07] Yeah, okay.
[03:48:09] I'm going to go.
[03:48:15] Oh, it's not a... I thought it was already cloned.
[03:48:20] OK, OK, fine.  I'll clone solid signals over as well.
[03:48:23] Hopefully I have that on here.
[03:48:25] It's possible that I don't.
[03:48:30] Yeah, see this is my new SysSentry computer. You can tell I don't do my work on this computer.
[03:48:40] which is why this is still, yeah, fine.
[03:48:44] Go get
[03:48:46] I mean, we're right here.
[03:48:48] Thank you.
[03:48:53] It's fine.
[03:48:54] *sigh*
[03:48:55] Oh
[03:48:59] Make another node here where I'm going to go.
[03:49:05] Get cloned this one.
[03:49:14] Just opening another window.
[03:49:20] Yeah, signals have been getting a lot of updates actually. So let's, uh,
[03:49:25] Let's make a file new window.
[03:49:28] file open
[03:49:31] Development.
[03:49:33] signals.
[03:49:38] Thank you.
[03:49:39] Thank you.
[03:49:49] Thank you.
[03:49:51] Thank you.
[03:50:02] Thank you.
[03:50:03] Thank you.
[03:50:04] Thank you.
[03:50:10] I'm trying to remember, do I just put the dis folder in, or do I...
[03:50:14] Copy, let's look at Rollup and see what it's doing.
[03:50:24] It's the alias plugin.
[03:50:26] I'm looking at the wrong...
[03:50:28] Maybe I'm looking at the wrong thing.  Where is it?
[03:50:34] Thank you.
[03:50:38] Look at the readme. Oh yeah, I'm like in the wrong thing.
[03:50:49] .
[03:50:57] Okay.  Yeah, 'cause all I was doing, I think was doing this.  I think I was literally just pasting it in like this.
[03:51:09] Thank you.
[03:51:13] Thank you.
[03:51:14] Let's see if...
[03:51:16] This will give me what I want.
[03:51:24] Amen.
[03:51:25] Thank you.
[03:51:27] Mm-mm-mm-mm-mm.
[03:51:33] Funny that the zooms are different on these. What does it say?
[03:51:45] Oh, interesting.
[03:51:47] It's because there's no...
[03:51:50] Okay, could you, I see you actually, okay, it's fine.
[03:51:55] This is, I see why it's because XJSX.
[03:51:59] is
[03:52:09] Thank you.
[03:52:10] Amen.
[03:52:12] Thank you.
[03:52:19] There's no dis folder in here.
[03:52:27] No?
[03:52:28] You know,
[03:52:42] The funniest thing is it's...
[03:52:44] Oh right, no, but where's dist? There's lib.
[03:52:50] This does not hear.
[03:52:53] That's what's weird.
[03:53:04] Yeah, I mean...
[03:53:06] put the wrong command in
[03:53:08] Thank you.
[03:53:09] There we go.
[03:53:12] All right.
[03:53:13] That's what I thought. CD, da-da-da-da. Okay.
[03:53:18] It's Dev.
[03:53:29] Oh, right, because the latest solid...
[03:53:34] Yeah, okay.
[03:53:37] Okay, I... it's...
[03:53:42] Okay, this is fun.
[03:53:46] This is what happens when you build demos.
[03:53:49] on the bleeding edge. I, I, the latest, I need to actually,
[03:53:54] It'll be easier if I add this into...
[03:53:58] file
[03:53:59] Open
[03:54:02] Open.
[03:54:05] Thank you.
[03:54:10] Thank you.
[03:54:11] I'm going to check out this version and build it.  I changed the error handling.
[03:54:16] which is why this doesn't work.
[03:54:18] All right.
[03:54:19] Let's try this again.
[03:54:23] Let's see.
[03:54:26] Alright, it's fine.
[03:54:28] I need to give you a new version of XJSX.
[03:54:32] Dev.
[03:54:33] Fine. Good now.
[03:54:36] Doesn't matter.
[03:54:37] Oh, okay. Beautiful. Okay. So we have, we have a simple demo. Okay. Let's, let's, let's talk this.
[03:54:48] Thank you.
[03:54:49] So...
[03:54:50] We have a loader for the whole app, then it comes in, and then we have a loading for this message. And then every time we click,
[03:54:58] It loads a separate phrase.
[03:55:00] Okay.
[03:55:01] Right.
[03:55:05] So we just got a couple of suspense boundaries, okay?
[03:55:07] And the way we author this,
[03:55:09] is like this. OK, so fairly straightforward.  The app.
[03:55:14] has a couple...
[03:55:16] fake
[03:55:18] fetch calls, one for the getting the hello and one for getting phrase.  You know, these would be API endpoints or server functions or something  for the case of this.  And then this is the app getting rendered.  And then the main component
[03:55:31] Um...
[03:55:33] Console logs, I guess, it sets up a signal.
[03:55:37] which is for the counter.
[03:55:42] I don't know why this is wrapped in-- shouldn't need to be wrapped in a function.
[03:55:46] On...
[03:55:52] Anyway, someone probably playing with something.
[03:55:56] And then...
[03:55:58] So
[03:56:00] Just for fun.  Yeah.  Okay.  And then, um,
[03:56:03] It's got one async calling the one thing based on the count and another async calling the get hello.  And then it's got an effect that listens.  This is that split effect thing I'm talking about, listening to the...
[03:56:14] the async phrase,
[03:56:16] And then
[03:56:18] Here we go.
[03:56:18] suspense around this.
[03:56:20] where the hello is and the button and then a separate suspense for that separate loader around the message where the message text is
[03:56:27] Um,
[03:56:29] It's displayed now.
[03:56:32] Um...
[03:56:33] There's a couple things I want to talk about in this demo. So because I need
[03:56:39] I need to kind of
[03:56:41] both show what it does but also get some feedback on some aspects of things that seem expected or not expected.
[03:56:49] The first thing that you're going to notice in this demo is that
[03:56:53] We're loading async up here.
[03:56:55] And yet the suspense is down here.
[03:56:57] And there's no problem.
[03:56:58] And
[03:56:59] That's because...
[03:57:03] essentially
[03:57:05] it's not until where it's read that,
[03:57:08] that it matters. It doesn't matter the order here, right? We're not awaiting or throwing or something. There's no waterfall by putting two fetches next to each other.
[03:57:17] And, um...
[03:57:22] Essentially...
[03:57:24] These are just independent.
[03:57:26] And
[03:57:28] they only go as far as they need to. Like if there was no hello here,
[03:57:33] This isn't being read anywhere.
[03:57:35] then our app is
[03:57:38] won't need to suspend.  Sorry.  Sorry.
[03:57:43] when we load it now. I mean, there is no hello, so I got rid of that.  But the only this part needs to suspend.  Right. You can start clicking this.  I mean, you could do it before, but my point is the outer part of the app doesn't need to suspend.  Obviously, there's no hello if I wanted to make the UI.
[03:58:02] of this example.
[03:58:04] Sorry, I'm going to close this because I don't need any more.  Nicer.
[03:58:06] I would, you know.
[03:58:08] put an H1 here and be like,
[03:58:11] Hello. Now it looks nicer again, but...
[03:58:14] The key point is that
[03:58:17] the whole outer shell of the app only suspends because it listens to that hello, right? And similarly,
[03:58:25] Okay.
[03:58:26] if the phrase wasn't a phrase and was just the count
[03:58:32] Then,
[03:58:35] Nothing.
[03:58:36] in our app really suspends. This is now just
[03:58:40] A glorified counter.
[03:58:45] Right? So...
[03:58:46] I don't know.
[03:58:47] as you can see, it doesn't matter if it fetches,  it matters if it's read and where it's read.
[03:58:56] Although this brings us to the first most interesting question here.
[03:59:01] This effect
[03:59:05] Isn't suspending...
[03:59:07] the components.
[03:59:08] But it is
[03:59:10] console logging the phrase when it comes back. So like when I load the page, you're going to see this before this shows up.
[03:59:16] because it needs the effect needs to wait for the data to come in.  When I click this, this will be one
[03:59:20] and then it'll show and if I go like this a few times you'll see it trying to fetch and then the  final one will come through right because of the way the create async does its cancel  cancellation but what I'm getting at is that like
[03:59:32] this updates immediately.
[03:59:34] And this takes time. So the effect
[03:59:38] isn't
[03:59:40] participating
[03:59:41] in the suspense.
[03:59:43] Only render effects do, the normal effect doesn't.  And I don't know if that's a good thing or a bad thing, honestly.  This is something that I've been trying to figure out when talking to people.  Like when I first made the demo, I actually had effects participate.
[03:59:57] So, um...
[04:00:00] this would cause the component to the whole outer component
[04:00:04] when the suspense was above it to suspend.
[04:00:08] And
[04:00:09] Dev was like, why is it suspending?  That's weird, right?  If I didn't have this console, this crit effect,  it wouldn't suspend.  And he's like, dude, he asked me straight up,  he's like, do I care...
[04:00:20] You know, like, should this cause things to suspend? Sure, this isn't ready right away.
[04:00:25] But...
[04:00:27] Does this mean that you shouldn't show or render the UI?
[04:00:31] I don't know. This is an interesting question to me because on one hand, you could say that to show things consistently, you should suspend. But on the other hand,
[04:00:41] if you assume side effects outside of the system,  you don't really care how long,  like it's not your responsibility to keep things outside of the system in sync.
[04:00:52] Thank you.
[04:00:53] Thank you.
[04:00:54] *click*
[04:00:55] um
[04:00:56] Bye.
[04:00:57] Thank you.
[04:01:02] You were dead with this one.
[04:01:06] Yeah, I don't know what that means, honestly.
[04:01:08] I don't think there is much boilerplate.
[04:01:13] If this is important to you, check out solid labels. There are
[04:01:17] things, there are packages
[04:01:20] that do this, but
[04:01:23] If you watch Northern Stream, I don't really get...
[04:01:27] what this even...
[04:01:28] Like what the boilerplate is.
[04:01:31] Um...
[04:01:33] Um...
[04:01:36] There should be a way to opt in out of different behaviors.
[04:01:40] I mean, technically...
[04:01:41] I mean, that's always the worst answer, right?  Um...
[04:01:45] Technically there is, right? Like depending on what you want to
[04:01:49] do render. The question is, do you view rendering being part of the framework synchronization  responsibility not to? Because you can understand this effect here, which is a way of
[04:01:59] observing the data fetching
[04:02:02] would cause the suspense above
[04:02:05] this, like if there's a Spence wrapping the whole app to trigger instead of being down here where the other ones are actually being accessed.
[04:02:15] Thank you.
[04:02:28] Yes, I yeah, I I I this feels reasonable. It's funny because Dominic from Sveld actually showed me a really cool async demo around the same time I was working on this, where he figured out a way of
[04:02:45] not splitting effects to get what he's going for.
[04:02:49] and but he but the effects were still blocking like this and it was because he was registering  the create async the component not where the read was  and because of that you know he's like we don't need to split the node dependencies because it
[04:03:00] taps into the component. And I was like thinking, I'm like, well,  I don't actually need to split normal effects technically. Um,
[04:03:08] if they don't participate the way this doesn't participate,
[04:03:13] We could just not split normal effects here.  But the problem of not splitting normal effects with throwing is
[04:03:19] If someone doesn't read first and they do something partially side-effectful, then they read and it throws, they might do that partially side-effectful thing multiple times. The splitting is actually kind of like a protection.
[04:03:29] for the user themselves in a throwing environment, right?
[04:03:33] Um...
[04:03:37] I mean,
[04:03:39] To be fair, if you were suspending the whole component...
[04:03:46] this only becomes an issue
[04:03:49] Um,
[04:03:50] Yeah.
[04:03:52] Because basically if it's not based on the depths, then it doesn't matter because you're not going to run the effect anyways.
[04:03:57] so to speak, until the component's done.
[04:04:00] So like if this component...
[04:04:02] was if this was suspending for a different reason,
[04:04:06] It would still get deferred. You're not going to run an effect on something that's off screen. I'm just saying it shouldn't be the one that contributes to it being off screen. Right. Like if if if if you know this wasn't a component that was suspended, we're not going to run an effect while it's like suspended off.
[04:04:23] But
[04:04:25] If this is the last effect that's waiting or async to come in and it's not causing the component to suspend,
[04:04:31] do we have to wait for it is essentially the question.
[04:04:38] Thank you.
[04:04:40] Yeah, essentially, yeah.
[04:04:46] Thank you.
[04:04:52] Oh, you mean, oh, that?  I mean, okay, yeah.  Then check out Solid Labels.  Solid Labels is a library released five years ago to do that.  It never really caught on.
[04:05:01] Though, to be fair, I--
[04:05:03] I don't think most people care.
[04:05:05] Um...
[04:05:07] The biggest thing
[04:05:09] is that like the second you have to move reactivity out of a file you need wrappers again
[04:05:14] So like it, but
[04:05:17] It basically creates a compiler that has to process more.
[04:05:23] to
[04:05:24] basically
[04:05:26] not change anything.
[04:05:28] except for like the immediate ergonomics of the thing in front of you.  But it doesn't.  I actually talk about this a bit earlier in the stream.  It's probably hard to dig back there.  Maybe there'll be a marker later later when we get timestamps, but it
[04:05:41] There...
[04:05:43] my opinion is...
[04:05:45] this kind of optimization is kind of
[04:05:48] Pointless.
[04:05:51] Thank you.
[04:05:54] Because it's not really an optimization.
[04:06:00] Okay, what do we got Greg? Greg and Devre talking.
[04:06:06] If it...
[04:06:07] doesn't actually read from anything, it should wait for the parent. The way that I'm phrasing this is,
[04:06:17] Yeah, it's basically...
[04:06:20] It affects participating in suspense.  They just aren't responsible for holding it.
[04:06:25] is my thinking.
[04:06:29] Thank you.
[04:06:33] Thank you.
[04:06:38] So there is a suspense in the parent component of Phraser, and the question is whether create effect inside Facebook should trigger suspense. Yeah, that's basically my, my, my, the question here. And we, we,
[04:06:50] Like,
[04:06:52] We're kind of...
[04:06:54] I originally thought the answer was yes, but I'm kind of leaning towards no now.
[04:06:59] Thank you.
[04:07:00] Yeah.
[04:07:03] I don't think people...
[04:07:04] Oh, yeah. Maybe not. I mean, to me, it's not even liking. It's just like...
[04:07:11] that is essentially what it has to be.  You can pretend it's not that,  but like it,  it is what it is.  It's,  it's,  it's kind of like futile,  futile,
[04:07:19] I guess it is me liking it. I'm just saying like trying to mask that part is kind of like a hopeless endeavor.
[04:07:27] Thank you.
[04:07:31] Yeah, yeah, I mean, sure. I need to put another suspense boundary in here.
[04:07:37] Um,
[04:07:41] Let's do it, suspense.
[04:07:46] Fall back.
[04:07:51] The universe.
[04:07:55] All right.
[04:07:56] So right now...
[04:08:02] There's...
[04:08:03] There's nothing. But if I change
[04:08:06] this to a render effect, perceptionally something that affects rendering.
[04:08:17] Now when we load it, we get the universe, and then it comes in.
[04:08:22] Ha.
[04:08:25] And because every time we update
[04:08:27] the phrase, it triggers the effect,
[04:08:30] The universe just keeps on coming.
[04:08:35] Right?
[04:08:38] That's the jarring moment.
[04:08:41] Right?
[04:08:44] Yeah, that's the jarring moment when you go, you just put an effect to observe something near where it's fetched and you're just like, what? Why the whole app thing? The thing is, you have to understand in React, this is what happens, right?  Right.
[04:08:56] Like if this was React...
[04:08:58] I mean, Deb did a talk on this, but think about...
[04:09:02] If you didn't want that to happen, you would have to pull the...
[04:09:05] the...
[04:09:07] the out another component
[04:09:09] And then,
[04:09:10] put the credit
[04:09:12] A...
[04:09:12] like put the effect or whatever underneath where you want it to be, like all the way down here, actually in the message component, if you didn't, if you didn't actually want it to, to update.
[04:09:22] Otherwise, like
[04:09:24] Like if you just wanted to trigger this suspense fallback.
[04:09:28] You probably would just not
[04:09:30] read it that way and you would use like, uh, what was that like deferred value or whatever,  like intentionally caused tearing or whatever, like there's, there's ways to do stuff in
[04:09:39] you know, or I mean, it's the real easy way to do it is just
[04:09:43] -Fuck.
[04:09:44] At the point of the promise, go then console log.
[04:09:47] Instead of, you know what I mean?  Like,
[04:09:49] There's other ways to do it.
[04:09:55] Thank you.
[04:10:03] So like, yeah, my...
[04:10:05] Yeah, let's go back to
[04:10:06] create effect here.
[04:10:09] Okay. People seem generally on board. I'm sure there's going to be some kind of edge case, but this is...
[04:10:16] This is sort of the thinking now.
[04:10:18] There is no universe. There's only us. Now,
[04:10:21] Um...
[04:10:24] and
[04:10:26] Making...
[04:10:29] Hello read is not a big deal.  We'll add that back in.
[04:10:33] to get our suspense loading. Okay. Now, because hello takes a little time to come in,
[04:10:39] that and then this is and we still have the same behavior where it delays where it comes in okay now
[04:10:45] What's interesting to me, though, most interesting to me about this example is...
[04:10:52] Picture
[04:10:54] that you wrote this message component like a long time ago.
[04:10:58] You know, it takes...
[04:11:01] props.text, right?
[04:11:03] and
[04:11:04] And now you want to make it async. Well, the answer in solid, as you saw, was just, it's a signal to signal. So now we're just going to change this one to phrase.
[04:11:14] And
[04:11:14] Now, without...
[04:11:16] changing the message component at all, we have it reading from async data.  And this is the suspense boundary.  Basically, like the pattern is you go, oh,
[04:11:25] you realize, you're like, "Hey, I want to add something async.
[04:11:28] At the point that we're...
[04:11:30] some point above where it's read,
[04:11:33] I mean, you could put the suspense inside if you really want to.  You just go, okay, this is where the placeholder is, and I want to catch...
[04:11:38] All the suspense below.
[04:11:40] But what's interesting is like the end components, like the, you know, maybe not your, you
[04:11:48] your like button component,  but like the,  the,  the next level up in the organism might not need,
[04:11:55] to change it all if you just add
[04:11:58] if you just change it to an async signal. Right.  We don't have TypeScript going here, but technically
[04:12:04] Phrase here is not any. Phrase is actually string. It can't be undefined as far as the program is concerned.
[04:12:13] So,
[04:12:15] You notice here that if you use Solid, we'd have...
[04:12:19] Um,
[04:12:21] Classically, we'd have a bunch of show components in here.  Because we're using the throw-based thing, we don't need to.  This is always defined where it throws.  So technically speaking, there's no undefined.  And we didn't need to change the component.  And it's kind of interesting, right?  Because when you look at stuff like...
[04:12:39] how you would solve this in React.  This is the right pattern.  You have the suspense on the outside  that come on the inside.  But if you...
[04:12:45] want
[04:12:46] the data to be in here to only trigger the suspense, you have to call the use in here. Now you don't want to fetch in here
[04:12:53] Because...
[04:12:54] You see the problem, you understand the problem of fetching in here. First of all, you have to actually pull this down and now you can't have it in this effect up here. But the other problem is that waterfalls because
[04:13:05] Because like,
[04:13:06] This component reads some data.
[04:13:11] you know,
[04:13:12] throws and then it gets down here and then it fetches and it throws. Um,
[04:13:17] Which is kind of awkward.
[04:13:20] Um,
[04:13:22] But...
[04:13:24] How else do you get the async here? If you want to fetch it up here and you want to get the async down here,
[04:13:31] you either put
[04:13:33] Use here and block here, but that's above the suspense. So you could make another component and  and
[04:13:40] put the use here, or you change this component to accept a promise.  So you have the fetch here, have the promise, pass the promise, and then use it in here.
[04:13:49] But now this component needs to be aware that it's async and
[04:13:53] Um...
[04:13:55] and you actually have to change the interface to accept string or promise.
[04:14:04] I mean...
[04:14:05] render effects have to cause the suspense
[04:14:09] because like they're literally like that's what these are like like it rendering the text if
[04:14:16] if you if they didn't cause a suspense you could end up with hold api i mean you could do that but you
[04:14:23] you want them to.
[04:14:27] Yeah, yes.
[04:14:29] Yeah, sorry, render effects are...
[04:14:31] equals JSX is the best way to put it.  Everything, like what I was showing earlier stream,  everything that we use to
[04:14:38] render in solid is effects.
[04:14:42] Yeah, it's the exact same thing. That's why they exist. If we didn't render JSX, we wouldn't need render. If we didn't render templating, we wouldn't need render effects. Like that is what they are by
[04:14:52] definition, they are basically the JSX.
[04:14:57] Create Renderer in fact exists because you can literally, as I was showing earlier, build the framework yourself.
[04:15:04] Thank you.
[04:15:04] Um, with like...
[04:15:07] from its own primitives.
[04:15:10] Anyways, what I'm getting at is it's interesting  'cause here we have this ability to not change the API
[04:15:17] to string your promise and have it have the same thing i i guess when i'm
[04:15:22] The interesting question, I guess, is if I take this create,
[04:15:26] Async.
[04:15:27] and stick it
[04:15:29] down inside the message component now.
[04:15:33] Just for fun.
[04:15:35] Put it here.
[04:15:44] And then props and let's make this
[04:15:47] props.count
[04:15:54] and then put count here.
[04:15:59] Do you guys think there's a waterfall?
[04:16:03] Because like technically speaking,
[04:16:06] This
[04:16:08] is an async.
[04:16:09] It reads here and it throws.
[04:16:11] triggering the suspense.
[04:16:15] D-d-d...
[04:16:18] Will that delay...
[04:16:21] This?
[04:16:30] Did I miss something here? I thought I got it. Oh yeah, you're right. Change text to count.
[04:16:34] Thank you.
[04:16:36] Yeah, good call.
[04:16:38] Thanks.
[04:16:39] Well, should this waterfall?
[04:16:43] Right.
[04:16:44] We do some async stuff here, we read it here, and this thing down here,
[04:16:51] is fine.  It's now just passing the count through.  But...
[04:16:56] This
[04:16:59] is doing async.
[04:17:00] There.
[04:17:01] It's a child. It's not a sibling. It's a child. We have a component.
[04:17:06] You know here that does suspense that is definitely suspending should it wait?
[04:17:10] To call it.
[04:17:14] Right?
[04:17:15] Anybody, any, Dev, Dev already knows the answer. Unfortunately, I was like trying to see if anyone else would guess, guess what happens here. Um,
[04:17:24] And the easiest way to confirm this is
[04:17:28] Let's make them both take the same time.
[04:17:31] amount of time.
[04:17:32] So
[04:17:35] Thank you.
[04:17:36] Is it going to be
[04:17:37] Showing up.
[04:17:38] One, then...
[04:17:40] two seconds later the other one or are they going to show up at the same time?
[04:17:50] Ah, they show up at the same time.
[04:17:52] Some nesting...
[04:17:53] Fetching.
[04:17:55] doesn't waterfall.
[04:17:59] Thank you.
[04:18:02] No? Okay.
[04:18:05] I have too much fun with this stuff.
[04:18:07] I think people at this point are just like, Ryan, you just tell us how it behaves.
[04:18:12] Eh, you know, like, we're going to assume that it already does the thing that doesn't seem possible.
[04:18:19] Thank you.
[04:18:20] *sad music*
[04:18:24] Yeah, you know... Guess what? We didn't need server components for this.
[04:18:31] Thank you.
[04:18:31] Uh...
[04:18:32] Oh well.
[04:18:37] Right.
[04:18:39] Uh...
[04:18:41] It's so funny because when you play with this demo, there's like so many...
[04:18:44] variations you can do where people like if people come in with React Brain, they're going to be like, this is impossible.  And this literally...
[04:18:51] It's so weird because sometimes when you make stuff...
[04:18:55] Like,
[04:18:57] I think in solid, so I can't be the guinea pig, but...
[04:19:01] because of how much simpler the model is,
[04:19:04] It's very easy to come up with an example
[04:19:07] where you kind of go like the original example that Dev made or what I just did here with nested and then you write it this way and then
[04:19:14] you in React, you see the waterfall, you go and you fix it in React, and then you come back to solid.
[04:19:19] and then it just works the way it originally did. I love demos like this, it's just
[04:19:25] .
[04:19:26] Okay, do you guys want to know how this works? Okay.
[04:19:29] So,
[04:19:31] The gist of it is it's...
[04:19:33] the same mechanism, and because you were following the rendering stream so far,  you should have an idea here.  This is an effect, right?
[04:19:40] This effect
[04:19:43] Catch us!
[04:19:45] Essentially, the way that this errors and async work in Solid 2.0 is that
[04:19:55] memos
[04:19:57] Catch the try, like every reactive context catches the try catch.
[04:20:02] But then it sets it on itself and says, I'm errored.  And if someone else reads it, it'll be like, I'm just going to throw the error.  So in a sense, they keep the propagation going.
[04:20:11] which I'll demo in a minute, but effects
[04:20:14] are the ultimate "I've caught it."
[04:20:18] So
[04:20:19] wherever you read the memo doesn't matter, it's what, like, is...
[04:20:24] holding it where it finally gets down to that effect.  It's just like the rendering.  Remember that normalization,  I showed you that flatten function,  where for each branch, it was checking,
[04:20:34] Because if it
[04:20:35] got that not ready error, it would...
[04:20:38] um, essentially
[04:20:40] let you process all the siblings,  but then it would throw...
[04:20:44] it up. Eventually there's an effect that's going to get that error and it's going to go, okay,
[04:20:48] I've got the error, but it's on the front half. So it hasn't run its side effect yet.
[04:20:54] And
[04:20:55] He goes, okay, now that I know that I have the, it's suspended, or I, not suspended, but like there's something async here.
[04:21:03] It uses its ownership context to find the suspense boundary and toggle it the way solid 1.0 works. The communication between this effect here and
[04:21:13] and the suspense is not throwing its context.
[04:21:18] The throwing lets us be non-null, unlike solid today.
[04:21:23] where it was null, but the suspense is still working off context, essentially.  So it just goes, okay.
[04:21:28] I'm under you. You should suspend.  But you should suspend...
[04:21:32] That's what that live computation was.
[04:21:36] essentially dev is
[04:21:41] Just because you're showing the fallback doesn't mean we have to destroy what's on the other branch.  We just keep it...
[04:21:47] sitting there off screen.
[04:21:49] Essentially. It's live.
[04:21:53] So...
[04:21:53] We've
[04:21:54] created
[04:21:56] a bunch of DOM nodes, and this is a fragment, these are siblings. So the first DOM node, and it actually doesn't matter that it's a fragment because there's an h1 here. Remember, we hit a div, it stopped. Like, it doesn't go into here yet. So the boundary here, like the memo, that, so to speak, you know, the top level one that gets all the stuff, just sees one, two, three, and it sees another suspense boundary, but it basically sees some elements and then another function.
[04:22:22] When it gets this...
[04:22:26] Because each one of these is processed in its own try-catch,
[04:22:31] Um,
[04:22:32] This throws...
[04:22:34] Um...
[04:22:35] I mean, it doesn't even matter if honestly, this would do the same thing.
[04:22:42] Bye.
[04:22:43] Let me do this, show you, it's the same thing.
[04:22:47] Um...
[04:22:48] If it was a fragment,
[04:22:50] The fact that these are separate.
[04:22:53] would matter, but because it's a div, this is its own separate render effect. It captures the
[04:22:59] the asynchronous and it just tells us it's going to fall back. But meanwhile, this is sitting here with a bunch of divs or a bunch of elements. This H1 might have no text in it yet because it aired out, but it has the H1 element. It's already rendered the page, even though it hasn't, um,
[04:23:16] shown it to you. And then it goes into here.
[04:23:21] Because
[04:23:22] These have nothing to do with each other and it tries to execute this and then goes here and it creates this and guess what another
[04:23:30] Fragment.
[04:23:32] and then it gets here, and this effect,
[04:23:34] Now...
[04:23:35] Also is where the throw happens.  And it errs.  And tells its suspense boundary that its fallback is.  But because...
[04:23:45] It returns the P in some of the text,
[04:23:49] The thing, you know, essentially...
[04:23:53] It's just sitting in off screen of this one.  So this one's.
[04:23:56] floating a p tag off somewhere, this one's floating the h1 tag off somewhere, and then
[04:24:04] When this resolves, it'll just
[04:24:07] tell these to re-execute the specific phrases, like phrase and hello to re-execute. So when hello  finishes, it goes, oh, re-execute this, which will then give it its text. And then it'll attach the  DOM nodes you created originally. It doesn't re-render anything. It just takes the DOM nodes  you created on that first pass and fills them in the same way as always.
[04:24:30] Thank you.
[04:24:33] Well, if there's no element,
[04:24:36] That's where the flatten does the work because
[04:24:39] It will...
[04:24:42] Essentially, suspense itself will catch it then. There's no effect.
[04:24:48] that it's going in, so suspense will catch it. It's a boundary. And
[04:24:51] it will call flatten. And when it calls flatten, do I have this code still open?
[04:24:58] When it calls flattened, I actually showed you all the code earlier.
[04:25:02] Core
[04:25:03] utils calls flatten.
[04:25:06] The first thing it's going to do is
[04:25:09] basically go through this array procedure. It's going to get to the flattened array and be like, okay,
[04:25:14] So for each child, get the child. I'm going to try catch.
[04:25:18] If child equals function, yes, it's an expression.
[04:25:21] Forget about this.
[04:25:22] Do child unwrap.
[04:25:24] It's going to throw at this point because it's going to go, "Not ready."
[04:25:29] And then it's gonna catch it and go, hey,
[04:25:31] It's not ready. If it's not not ready, it throw you.  Otherwise, it's just going to set a flag not ready then.
[04:25:37] It goes to the next...
[04:25:38] loop and draws its siblings.
[04:25:41] Right. And then
[04:25:43] When it's done rendering all the siblings, you know, with some holes, you know, where it threw, it's missing...
[04:25:48] the thing that threw it's it.  Um,
[04:25:52] It's not added. It then throws its itself.
[04:25:58] And then.
[04:26:01] essentially
[04:26:04] You have to remember that all these expressions that it's unwrapping here are separately memoized. So even though this whole function is going to run again,
[04:26:14] Okay.
[04:26:15] it's going to be reading as it unwinds the arrays and the functions it's going to be reading pre-memoized
[04:26:21] values, like all the things that were static, the things that were resolved are going to be
[04:26:26] already resolved again. So it doesn't need to create them again, but it also is non-blocking  because each separate element of the array can process itself before it communicates it upwards.
[04:26:40] Hopefully that makes sense.
[04:26:45] So whether it's doing our mini VDOM with the flatten utility, or it's just like literally just
[04:26:53] telling the one effect that, "Hey, there's no text here yet." That's the easier case to visualize.
[04:26:59] It doesn't need to...
[04:27:02] re-render.
[04:27:03] Right. This is not only it's technically blocking async is the funniest thing because of the throwing.  It's just fine grain blocking async.
[04:27:13] that doesn't re-render.
[04:27:15] It's basically...
[04:27:18] like everything Solid has shown to do before, right?  With rendering, we showed that you could not re-render components and do fine-grained updates.  This is fine-grained suspense.
[04:27:31] So current solid doesn't throw, so it has to null check. This doesn't need the null check.
[04:27:38] which is nice because as
[04:27:40] Katie is saying here, switch and show results in waterfalls, if I understand correctly. Right. Which is why I still like hoisting, why I still suggest hoisting type patterns. But the thing is, when are you calling show? Because
[04:27:53] If...
[04:27:54] Uh, God. I have to...
[04:27:57] reverse this, I think, now. Now that you've seen this example, let's go back to
[04:28:02] to...
[04:28:03] Fetching above, okay?
[04:28:07] Okay, we're fetching above.
[04:28:09] Okay.
[04:28:09] As I said, it's already cool that you don't have to change this to make it async, but now we're fetching above.
[04:28:16] Let's do something fun like...
[04:28:20] Thank you.
[04:28:21] to uppercase.
[04:28:26] Can you call two uppercase on undefined?
[04:28:30] Thank you.
[04:28:36] I don't think you can, no.
[04:28:38] You can call uppercase to uppercase on an empty string though, right?
[04:28:43] Okay, beautiful.  Okay, so this serves my purpose.  I'm...
[04:28:47] I am...
[04:28:49] Mm-hmm.
[04:28:50] I am basically, if this is...
[04:28:54] No.
[04:28:55] undefined at any point, this is going to error out, right?
[04:29:00] But...
[04:29:02] But I'm telling you, this will never...
[04:29:04] Proceed as undefined so I can put two uppercase here completely safely and
[04:29:11] And when my thing loads...
[04:29:14] and I click this,
[04:29:18] Now, what didn't happen? Why am I not seeing two uppercase? Oh, I have to save it first. Duh. Okay, let's try this again.
[04:29:27] See, it's uppercase now, right?
[04:29:30] Thank you.
[04:29:32] It's like a lot of...
[04:29:38] A lot of these advanced, like, these cases where, you know, like, you would put show,
[04:29:45] Like, you will use show for layout reasons.
[04:29:48] Probably.
[04:29:50] But maybe those are the places where you'd use suspense.
[04:29:53] Maybe not, but what's interesting is like,
[04:29:58] because
[04:30:00] it can't be null the way this is permissive like this. I mean, it gets really fun because then we can be like,
[04:30:04] Upper phrase, right?
[04:30:06] Like...
[04:30:07] that
[04:30:08] This...
[04:30:08] const...
[04:30:10] Upper phrase equals create...
[04:30:14] Memo.
[04:30:16] We already know
[04:30:17] conceptually that a function isn't going to defer to what gets called there.  But what's cool, unlike solid 1.1, is that
[04:30:24] Memos.
[04:30:26] Also,
[04:30:28] See, this can be null, right?
[04:30:31] can't be null so this is fine but they also
[04:30:35] propagate this. So this should just be the same problem. Create memos not defined because I did  not import it. That's my bad. Create.
[04:30:43] Memo?
[04:30:46] This isn't going to cause the Phrase component up here
[04:30:49] Like, you know how we were running about create effect and create render effect?  Create memo is not going to cause this phrase component.
[04:30:54] to, to,
[04:30:56] to suspend because memos only care about where they're read. Right? So
[04:31:02] This is doing our to upper phrase, right? And
[04:31:07] even though we're like deriving logic, first of all, this logic is not null.
[04:31:11] Um...
[04:31:13] Ever. Which is why this works.  But it also...
[04:31:16] just like any other reactivity rules, propagates it down to the read,  so it's only the suspense boundary that gets triggered.
[04:31:23] Upper phrase is the new double count. Okay.
[04:31:28] Thank you.
[04:31:31] I wonder this semester, can you do advanced things and fallbacks or the Dumbly V1? What happens?
[04:31:35] I mean...
[04:31:37] It's...
[04:31:37] I didn't think V1 was dumb. It was by design. Fallbacks
[04:31:42] are, get handled by the parent.
[04:31:46] That was always the thing.  It's actually hard.  Part of the difficulty writing error boundaries and suspense boundaries is that the fallbacks are not part of it.  They are part of the parent.  You don't want...
[04:32:00] it wouldn't make sense for the fallback to trigger its own suspense.  Right.  They go,  they get handled,  you know,  as you nest them by the parent,  like,  you know,
[04:32:11] .
[04:32:13] So
[04:32:14] This would be really weird, but like we could probably...
[04:32:18] put this here.
[04:32:20] And then like put...
[04:32:25] Yeah.
[04:32:27] And then depending on the difference on the loading times,
[04:32:31] I don't know if we have... Yeah, okay, there's still a different...
[04:32:35] Although it's 500. I mean, will it...
[04:32:38] Thank you.
[04:32:38] Okay, it won't...
[04:32:41] Okay.
[04:32:42] But they're fetching in parallel, so you don't see the difference. What I'm saying is,
[04:32:45] The...
[04:32:46] I have to make this one
[04:32:48] long
[04:32:50] It's now waiting for the phrase.
[04:32:54] Um,
[04:32:57] Or it should be waiting for the phrase?
[04:33:00] That's interesting. Maybe there's a bug here.
[04:33:02] Why am I...
[04:33:05] Because...
[04:33:06] Thank you.
[04:33:07] Oh, right.  This doesn't work because it has to  suspend because otherwise this will never be in a fallback.  Okay, I'm done. Fine. That's
[04:33:15] Yeah, this idea is dumb. It doesn't work. I mean, it works, but I need to like...
[04:33:24] I'm trying to think of an example where this would...  I'd have to add another async...
[04:33:28] for me to show you what, like, because this has to suspend, and then this has to suspend less long,
[04:33:38] for...
[04:33:40] Yeah, I don't feel like making the convoluted scenario, but yes, it should be caught by the parent's suspense.
[04:33:46] Yeah, the fallback isn't rendered.
[04:33:55] Thank you.
[04:33:57] Thank you.
[04:33:58] Okay.
[04:34:01] But...
[04:34:02] I think this kind of shows the three different scenarios, right?
[04:34:08] You can fetch nested without...
[04:34:11] Um...
[04:34:13] Okay.
[04:34:14] without waterfalls.
[04:34:17] And you can derive...
[04:34:20] without blocking too high like basically and and you can do all of this stuff
[04:34:25] without changing the API of your components that fall under it. So, um,
[04:34:33] Some people were worried about that, and maybe you're concerned about it, but it's like if you add async into your app, you're the one responsible for putting the suspense boundary in.
[04:34:42] Right.
[04:34:46] Like,
[04:34:47] I mean, that's kind of obvious, but...
[04:34:49] If you add
[04:34:51] Thank you.
[04:34:53] batching
[04:34:56] Are you the one responsible for changing all the component APIs between where you do the fetch and where you use it to promises so that the props accept promises?
[04:35:07] Um
[04:35:09] And
[04:35:11] So like, I guess the worst case scenario here is that you don't have access, so you can't add the suspense boundary.  Yeah.
[04:35:20] So then you would put the suspense boundary at the same height as
[04:35:25] where you would have put the use in React.
[04:35:28] The only...
[04:35:29] difference is, and this is more of a performance difference consideration, is while visibly it would look the same as React,
[04:35:35] Um,
[04:35:36] when it does an initial pass,
[04:35:39] it will render all the rest of your app except for the places, the small places where the async is being used. And it won't throw that away and re-render it again ever. It's like it's the render once happens during the initial suspense render.
[04:35:54] Um...
[04:35:56] Okay.
[04:35:59] Thank you.
[04:36:01] Right.
[04:36:02] I don't know. I think this is cool stuff.
[04:36:04] This is, I was talking a bit about this on a podcast not that long ago with the...
[04:36:09] Um...
[04:36:10] Was it like dot dev or whatever? Not. Why can't I remember?
[04:36:14] Tracy Lee, her podcasts.
[04:36:19] It was a really good interview. Not many people have watched it. I'm actually going to link it here in case people want to see it. I talk all about why...
[04:36:28] I think these models are really powerful.  Let's see if I can grab it here.
[04:36:35] I also talk about single flight mutations. It's so funny because we were talking, they got me on the stream to talk about single flight mutations in solid start because, you know, that's the thing, but I've been like,
[04:36:45] By the time something gets to the topic where like everyone's talking about it, it's already been like six months or eight months from when I was working on it.  So it's like it's kind of funny.
[04:36:57] Yes.
[04:36:59] Yeah.
[04:37:01] Thanks.
[04:37:03] Yeah, yeah. So there's a section on why I talk about the async stuff towards the end of this.
[04:37:13] Anyway.
[04:37:18] How does this work SSR wise?
[04:37:20] If I recall, there aren't holes that fill in the same way, but it's been a long time.  I've looked and I think, yeah, I've been thinking about this.
[04:37:27] I...
[04:37:29] SSR is tricky because...
[04:37:33] It was one of the last things that I was debating.  It was a long time ago, but when I was vetting this concept...
[04:37:41] So
[04:37:43] We have to treat create async similar to resources where we--  like, we could do the same rerender model like we do right now.
[04:37:49] where we render components.
[04:37:52] So like...
[04:37:53] And we cache the create async. What's interesting though, is we know whether to fetch again,
[04:37:59] based on whether...
[04:38:02] something through or not. Do you know what I mean? So like, I think we're actually safe, assuming that we can
[04:38:08] that we didn't fetch if something, if, if, if it threw.  Yeah.
[04:38:12] like when you're chaining async.  That was one of the problems I was trying to solve.  To be fair, SSR is a hydration I haven't gone to.  So far I've been only working on client side stuff.
[04:38:25] So yeah.
[04:38:29] Is it create async, support async generators? Yes.
[04:38:32] But I'm not sure how I feel about...
[04:38:37] me and Dev have already hit some stuff  we talked about on the server signal stream.  Technically, if you just pass an...  Create Async takes a promise or an Async generator.  But it only...
[04:38:48] Um,
[04:38:49] suspends during the initial...
[04:38:52] until it gets its first payload, which is a choice, right? My reason for thinking that that is the correct choice is if someone wants to wait till the end to show the data from the async generator, then they could just convert the generator into a promise, essentially. The benefit of supporting generators...
[04:39:11] the way that I'm explaining where it's like basically until it gets the first  chunk of data,  it's suspended is that it just gives you like a pipe,  right?  Um,
[04:39:20] It just kind of, yeah, I don't know.
[04:39:23] Yeah, you think that's the correct choice, yeah.
[04:39:25] So yeah, I've already implemented that part as well.
[04:39:29] I'm interested to understand what the hack for SSR looks like, because it's not like we're going to sit there...
[04:39:38] and
[04:39:39] I don't think we're going to sit there and process the whole...
[04:39:43] stream. I'm guessing it's basically again the same logic when the first chunk or the first piece comes in, we assume suspense is over, that's what gets flushed. And then the rest of the data gets serialized over the wire. And we just
[04:39:56] We just...
[04:39:57] write it in on the client.
[04:40:01] So basically, stream, first piece of data,
[04:40:05] Okay, stream hits, data hasn't connected to the stream data, suspends.
[04:40:12] Watch this show.
[04:40:14] First piece of data comes in.
[04:40:16] Suspense boundary resolves.
[04:40:18] send it to the client,
[04:40:20] With that data.
[04:40:21] Additional data comes in over the stream on the server during the SSR process.
[04:40:27] It...
[04:40:28] then serializes into the page's HTML, like as part of the streaming,
[04:40:32] Yeah, I don't know. I honestly don't know how...
[04:40:35] how to do this with SSR, because like,
[04:40:38] It's almost like if you never close the stream, the page would never stop loading because you would basically serialize it through that initial thing.  Getting the stream to pick up again differently in the client is...
[04:40:52] not something that
[04:40:54] I know...
[04:40:56] what we would do.  I think that's been my biggest concern about async generators as a
[04:41:01] primitive on the basic side because
[04:41:03] It works for your client-side only, but I don't know how to...
[04:41:06] make it work with SSR without it being like this weird thing where like the stream just  keeps the original HTML request open and it just keeps on streaming it into the page which is really odd. Anyway.
[04:41:17] Thank you.
[04:41:19] Maybe Deb will figure that out for me.
[04:41:21] Um...
[04:41:23] Yeah, I don't know.
[04:41:24] I don't know if there's anything more with this example I wanted to talk about, but I'm glad to get some clarity on the creative.
[04:41:30] fact question at least. It helps me at least
[04:41:34] Good.
[04:41:35] understand
[04:41:36] everyone's perspective a little bit better. Yeah. Okay.
[04:41:42] Yeah, I think...
[04:41:45] I think that's what I wanted to get out of this async segment.
[04:41:51] I
[04:41:52] Yeah, I think that's what I wanted to get out of this.
[04:41:56] Other than say that I'm very stoked about this demo, it makes me very happy to see
[04:42:01] in one's
[04:42:02] small place, all these concepts and ideas coming together. I think it demos well.
[04:42:09] Yeah, I mean...
[04:42:13] You could all, yeah, I mean...
[04:42:15] I think the...
[04:42:16] I don't even want to think of what the first stream does with async generators.
[04:42:21] I feel like that's only holding the flesh up to the first chunk again.  Basically, you treat async generators as...
[04:42:29] only unresolved until the first piece of data comes.
[04:42:33] Thank you.
[04:42:34] So defer stream would work the same way until the first piece of data comes,  we hold the stream.  I haven't added any of the hydration or SSR mechanisms into the
[04:42:41] you know, wrap around the corporate news yet.  We'll see how that works.  I think that's one of like those things that,  everyone wants a separate signals library,  which I built now and you know,
[04:42:53] pulling stuff in and figuring what stuff goes,  but it's like this extra layer.  And it's funny because so much of the mechanisms are all signals anyways.  So it's like,  do I just like,
[04:43:04] build
[04:43:05] very solid
[04:43:07] kind of specific stuff.
[04:43:09] seemingly like it's hard with streaming and hydration because, um, they require serialization. Um,
[04:43:17] So
[04:43:18] But like,
[04:43:20] I don't know. I'm going to see how that split works. It feels like
[04:43:24] Splitting for the sake of splitting is just like adding an extra like layer of wrappers and overheads to something that could just be
[04:43:31] straight up optimized. I know everyone wants like a separate signals library and we do need it so  that people can run signals on the server. So like, I think this is probably sensible for this. It's  just, it's an interesting split to me because I'm used to having complete power. I'm used to
[04:43:45] You know, like just like build exactly what I want to build and trying to like,
[04:43:50] look at this as like a general solution that also powers the other one is just like
[04:43:54] walking through tape.
[04:44:02] Well, I mean, the problem is certain ideas are core. Like, you can't really build transitions on top. They have to be core, like, or transactional stuff. The suspense type stuff is could be built after with the queues, but it's like, you almost have to expose too much to put it in fully in user space.
[04:44:20] So like there's a lot of like async
[04:44:22] type adjacent considerations that
[04:44:26] really require you getting your hands in.
[04:44:29] Just abandoned SSR, yeah. There we go. Solved.
[04:44:34] Thank you.
[04:44:43] You don't need a separate signals library? I thought you needed signals on the server.
[04:44:51] You're not the only one, so I mean, I've been hearing this complaint for years.
[04:44:56] Anyway, let's see if we can whip up a this week in JavaScript or something.
[04:45:03] Give me a moment. I put my stuff together.
[04:45:08] If you haven't liked the YouTube video, please do.
[04:45:12] We actually have a decent audience on YouTube today.  I'm sorry I haven't been paying attention to Twitch, and it shows.  There's only 20 people on Twitch right now.
[04:45:19] YouTube's like over 100.
[04:45:22] So
[04:45:23] Yeah, I did not get any new Twitch subscribers today.  I don't push Twitch hard enough.
[04:45:30] Not that I am in this...
[04:45:33] for, oh no, I did Julio Burgos,  subscribed with Prime way back at the beginning of the screen.
[04:45:40] Thank you very much.
[04:45:43] Anyway...
[04:45:45] .
[04:45:49] Um...
[04:45:50] Okay, so let me just get some stuff together for this week in JavaScript.
[04:45:57] I'm sorry, the rendering explanation was a bit of a mess.
[04:46:00] Um...
[04:46:02] Thank you.
[04:46:03] *sniff*
[04:46:04] Having the stuff crash on me multiple times was not fun.
[04:46:10] The funniest thing is,
[04:46:12] I mean, I got to play with it. You guys are talking about some of the video quality stuff. I've been having issues with my green screen and the lighting and stuff. I'm getting a lot of edge blurring and I didn't get this on previous versions of OBS and I tried to play with the settings before stream and I'm still having issues. So, yeah.
[04:46:27] Let's get into...
[04:46:33] I wonder if I should put my tier list up.
[04:46:36] Um,
[04:46:38] from earlier, let's see, I'm just getting everything ready.
[04:46:44] Thank you.
[04:46:47] Mm-mm-mm-mm.
[04:46:51] Alright.
[04:46:54] When's the last time I streamed?  It was a little, okay, there it is, January 10th.
[04:46:58] Okay.
[04:46:59] duplicate
[04:47:02] Let's go to solid.
[04:47:05] Thank you.
[04:47:05] Duplicate.
[04:47:07] Oh yeah, there's a couple spicy ones from my perspective on this one.
[04:47:11] bookmarks. I forgot what I've been talking about the last few days.
[04:47:17] All right.
[04:47:18] That's good enough to get started.
[04:47:24] I haven't really been on socials, as you guys can imagine, because I've been...
[04:47:28] It's been...
[04:47:31] focus so much on
[04:47:34] Thank you.
[04:47:35] Yeah, God, I haven't retweeted practically anything from the solid account in like two weeks. I'm the worst. Okay.
[04:47:41] That's quite...
[04:47:42] B-Sky, yeah, okay.
[04:47:50] Let's do...
[04:47:52] See if there's anything.
[04:47:54] on my profile here.
[04:48:05] Yeah, so 14 days ago I did stream, which means I talked about all of this stuff on stream.
[04:48:11] Yeah, okay, there's nothing on Blue Sky that's specific anyways too. Okay.
[04:48:15] Good. Let's do this.
[04:48:19] And talk this week in JavaScript.  Okay, so...
[04:48:24] Switch over to here.
[04:48:28] *sigh*
[04:48:29] Um...
[04:48:32] This one's probably gonna be short except for if I can find some spice out of my bookmarks.
[04:48:36] But let's see what my perspective is on this stuff, because honestly, I've been so deep down the reactivity rabbit hole that I am just not enough on stuff.  So.
[04:48:47] Yeah.
[04:48:49] Thank you.
[04:48:51] But
[04:48:52] First off...
[04:48:54] Yeah, I mean, what do I got here? It's 2025, did you company budget?
[04:48:58] budget money towards open source that runs it.
[04:49:01] I'm enjoying a lot of this push that David Kramer has been doing towards open source.  Obviously, he's been hiring.
[04:49:08] great people, people like myself, TK Dodo. Um,  and he actually has a post where he lists like a whole bunch of people, uh,  Nate Moore, um,
[04:49:17] from the Astro, like, you know, he was talking how he'd want to hire, you know,  he had a whole bunch of people.  There's a different tweet about that, but, um,
[04:49:27] obviously he's my boss so you know you're like we're just saying that but um
[04:49:32] No, I'm...
[04:49:34] I obviously liked seeing people
[04:49:37] put money where their mouth is.
[04:49:42] Yeah, okay.
[04:49:47] Yeah.
[04:49:51] Okay. Yeah.
[04:49:58] TK Dodo.
[04:50:01] you know, like React Query,
[04:50:04] Anyways, where was I?
[04:50:09] Yeah. Um...
[04:50:13] I'm trying to think if there's anything else on this.
[04:50:15] Yeah, here's the one. I think this is an old observation at this point.
[04:50:20] But...
[04:50:21] Ah, okay.
[04:50:21] Ken Wheeler talking about...
[04:50:26] the connection between programming and music.
[04:50:31] And he said that literally 90% of open source you use is written by failed musicians.
[04:50:38] Thank you.
[04:50:39] Which is kind of funny.
[04:50:42] Okay, I'll grab this one and this one.
[04:50:46] to see what's going on in a minute. Um,
[04:50:50] Yeah, I don't know.  I honestly...  After...
[04:50:54] Sure you called me out on like myself.  Well, I feel funny because I did like myself this thing as well.  But yeah, I post up music for my old band, Mr. Solid.  If people ever want to check that out.
[04:51:07] Self promo. Here we go.
[04:51:10] Thank you.
[04:51:11] Thank you.
[04:51:12] *laughs*
[04:51:14] Yeah, he caught me right off guard there.
[04:51:19] lots of albums over the years.
[04:51:23] I played with a band for like 15 years.  This is Blackstone.
[04:51:27] I don't.
[04:51:31] Yeah, anyways.
[04:51:33] Good stuff.  Uh...
[04:51:35] But it was interesting because I actually got kicked out of university.  That is actually an important part of the story.  I'm not telling people to get kicked out of university.  I was dumb.  I literally spent...
[04:51:45] my time doing music, I like
[04:51:48] would stay up late and it seems like business hours for doing music was between 10 and 1am.  Like that's when you got everything done and, you know, talking to the bands and, you know,
[04:51:57] you know, be practicing before that.  And I just I didn't go to class.  I I the final straw was that there was like a class that I thought I dropped and I literally
[04:52:08] like just didn't show up for the tests and it was enough to get my grade under passing.
[04:52:14] So yeah.
[04:52:16] I don't know. It's interesting. I did go back and get my degrees, so...
[04:52:19] for what it's worth. But
[04:52:22] That was for me, not for the knowledge. I'm not suggesting people don't go to university, but it was just interesting.
[04:52:28] observation
[04:52:31] So
[04:52:32] All right.
[04:52:33] Who we got here? Talking about propping up bosses. My previous employer, Matt Billman from Netlify.
[04:52:41] Started writing a blog again, built it with Astro.
[04:52:44] I thought I'd just share it so people can check it out.
[04:52:48] He's just talking about the importance of the web.
[04:52:51] Right. And just like,
[04:52:53] Why the web is a great place.
[04:52:55] but I'm hoping this is the start of something great so just putting out there Matt
[04:53:02] isn't always the most
[04:53:03] pushing on social, you know, that you don't see him that much.  The guy runs, um, Netlify and yeah, he's crossed 10k followers on Twitter.  Like that's, that's not what he's about.
[04:53:15] But I find what he has to say very insightful.  So...
[04:53:20] Yeah, more people should should check him out.  As I said, he's not the kind of person to get in your face.
[04:53:26] I think it speaks perhaps the difference in company, you know, between say like if you were to compare Netlify and Vercel, it's a very different vibe.  And I think that goes all the way to the top.
[04:53:42] But you can just, yeah.
[04:53:45] So
[04:53:47] Yeah, very, very cool.
[04:53:50] But does this go in Lighthouse? It's built with Astra, I'm sure it is.
[04:54:02] UBC, there you go.
[04:54:03] Another UBC grad.
[04:54:05] Huh.
[04:54:08] Yeah.
[04:54:09] Um...
[04:54:10] But this is kind of related.
[04:54:14] Because...
[04:54:15] Someone's like,
[04:54:17] Now we got to build it in solid start, right?
[04:54:20] And
[04:54:21] Actually, probably not.  If you're building a blog like that, Astro is...
[04:54:26] is the perfect...
[04:54:30] platform to do that. Right.
[04:54:34] Yeah, I...
[04:54:36] I made a comment...
[04:54:39] because I've been talking a lot with, yeah, I'm just trying to see here.  Yeah, I don't need to do that.  I've been talking a lot with
[04:54:45] Tanner and...
[04:54:47] spread at various points. If you remember way back to Jamstaff.com 2022, we had, Theo was making it like we had some secret pact alliance that would shape the future or something. We've been trying to see if we could work closer together for ages. Me and Tanner have managed to get there with Start, but
[04:55:06] And I want to get Tanner back on stream in the next few weeks to actually talk about that.
[04:55:14] Bye.
[04:55:16] Essentially, I was talking to them
[04:55:18] Because...
[04:55:19] people started kind of realizing
[04:55:23] that...
[04:55:26] Thank you.
[04:55:28] Meta frameworks aren't general. I was talking about this in my article, right? But they are more specific. It's funny, the frameworks are pretty general purpose.
[04:55:37] I mean, they might be good at client rendering, but like you need client interactivity, presumably in lots of things.
[04:55:42] But the meta frameworks aren't as much and
[04:55:45] Um,
[04:55:47] I wrote this statement which made no sense to anyone. React compiler is to signals or fine-grained rendering, to be clear, as Next.js is to Astro. And it's like when you have a goal in mind,
[04:55:58] There's like...
[04:55:59] The direct...
[04:56:00] Path.
[04:56:02] that is very
[04:56:03] Sorry, very
[04:56:06] efficient at accomplishing that
[04:56:09] and catering to its specific goal.
[04:56:12] Yeah.
[04:56:13] And then you have like the indirect path.
[04:56:15] that kind of does it maybe not quite
[04:56:20] Um,
[04:56:21] and misses maybe the primary...
[04:56:24] audience or goal, but maybe is
[04:56:29] more generalized, perhaps?
[04:56:31] but also way more complicated.
[04:56:34] Um,
[04:56:36] And like we talked a bit about the difference between singles and react  compiling the past.  Um,  it was just,
[04:56:41] Next.js is...
[04:56:44] targeting
[04:56:46] the same group as Astro. People wouldn't expect it first because React framework, you want reactivity, but they're actually aligned.  They're actually sitting at the same place. It's funny because people talk about their blog site.
[04:56:56] Don't build your block site with solid start. I mean, you can, but why would you do that?
[04:57:01] Right. And he's
[04:57:03] Colin, creator of TRPC, was like building... I'm gonna show you this thread. He was building...
[04:57:13] He was building this like
[04:57:15] you know, showing that he's like,
[04:57:17] RSCs are a shocking pleasant way to make static sites.  I'm surprised it's anyone, right?  Because they kind of...
[04:57:21] are good at this. This is what the use case is. Like the PHP, you load some data and then you load it in. You're like, tada, I'm done. And then he was like, well,
[04:57:30] Actually,
[04:57:31] The equivalent of Aftro is pretty fresh, you know? It's basically the same thing.  Must be admitted that the final Aftro build is 29 kilobytes versus 841 kilobytes for Next.js.
[04:57:42] But next, like prefetching and image optimization of the box.
[04:57:46] I also like TS files. I don't know. Okay, that's fine. To be fair, there is TypeScript support here in Astro. Astro does actually have link prefetching and image optimization. It might not be turned on by default, but it actually has both these features. So...
[04:58:02] I actually...
[04:58:04] At the end of the day, it's a syntax preference and 29 kilobytes versus 841 kilobytes.
[04:58:11] That's the important part.
[04:58:13] Right. Um,
[04:58:15] So,
[04:58:17] Thank you.
[04:58:19] The next column is Astro has all that stuff.
[04:58:22] I'm sure, uh...
[04:58:24] I'm sure, yeah.
[04:58:26] Ben got in here. Yeah, yeah.
[04:58:28] Yeah.
[04:58:28] you
[04:58:29] Yeah, so...
[04:58:32] Basically what I'm getting at here is
[04:58:36] I didn't, this is, he posted this the same day after I posted what I posted. It had nothing to do with it. But this is kind of what,
[04:58:45] It...
[04:58:46] It's kind of weird when
[04:58:49] You don't need an 840 kilobyte blog site.
[04:58:53] Do you know what I mean?  Like, I told you not to build...
[04:58:56] your static site would
[04:58:58] Astro, but should you be building it with next app directory?
[04:59:02] It's the funny thing is,
[04:59:05] I don't know. Like, this is kind of the question or thought.
[04:59:11] Oh, we got a raid coming in from...  I can never pronounce the names.  Misio Amisio.  Thank you very much for coming in.  We're just talking about some recent stuff.
[04:59:23] socials on a JavaScript framework kind of zone of things.
[04:59:29] Thank you.
[04:59:31] Thank you.
[04:59:35] I'm...
[04:59:36] I'm not.
[04:59:37] Are you surprised you don't refer to this in lockdown?  If you have something I know of.  I mean...
[04:59:41] There's, I mean, in Rust, that's true, but there's like the block DOM framework itself.  There's million...
[04:59:48] Um,
[04:59:50] In a sense,
[04:59:52] Ah.
[04:59:54] Dom C was a block Dom too. There's been libraries over time but popular ones
[05:00:00] this.
[05:00:00] I guess Million is probably the most popular
[05:00:04] Eevee might have done something in Eevee 3 or 4 that's BlockDOM that could explain that.
[05:00:12] Thank you.
[05:00:15] Yeah, I imagine not, but I appreciate the rate.
[05:00:24] Yeah, Evie is? Yeah, okay.
[05:00:28] It's...
[05:00:28] It's interesting.
[05:00:31] Yeah. Interesting to see if it makes its way into more mainstream. What instead happened is  the frameworks went more defined-grained renderings, signals kind of stuff.
[05:00:42] Yeah, I mean, it's possible. Aiden's been focusing other places rather than the tool  itself. He's been trying, you know, Million Lint or...
[05:00:55] all the other stuff.  So he might not be putting as much stuff in there.  It's still around as far as I know.
[05:01:01] I'm going to go.
[05:01:02] Um, anyway, uh, where was I going here?  Yeah.  Um...
[05:01:05] Yeah, I...
[05:01:07] What is...
[05:01:09] Next.js for and this is actually kind of tied into one of the bookmarks I was looking at here because a couple of these.
[05:01:15] showed up. Let's see. Honest opinion, Next is not the best option for interactive heavy apps like  cal.com, especially with the app router with RSCs. Next.js for sell is the WordPress for web  developers. It's the easiest way to launch SEO and performance-focused websites. However, to build  highly interactive or data-intensive apps, Next.js falls short in comparison with other frameworks.
[05:01:36] Probably the most interactive interactive dynamic app I've ever built.
[05:01:40] seen as V0Dev full stack next featuring very fast loading times, sharing, public private listen, and dynamic navigation.
[05:01:47] Thank you.
[05:01:48] I'm not sure.
[05:01:51] Thank you.
[05:01:51] It depends on...
[05:01:55] what you consider dynamic from an interaction standpoint. It's interesting where this kind of tension is coming in.
[05:02:01] Part of the problem is
[05:02:03] There's a...
[05:02:07] I...
[05:02:08] *cough*
[05:02:10] -
[05:02:11] Mutation stories, like dashboard, not even dashboards, but mutation stories where your primary content changes often, RCs don't help you there because they have to go back to the server and pull everything.  You don't get granular updates.  You can't be optimal there, especially in terms of mutation stories.
[05:02:28] So it's like,
[05:02:29] It's not the best pattern for a lot of highly interactive
[05:02:35] Applications.
[05:02:36] WordPress sites are blazingly, can be blazingly fast, especially on the static side.
[05:02:44] Yeah, okay.  So performance from our life because of the app and directory.  Yeah.  It's just, it's interesting to me.
[05:02:50] that it seems obvious to me that RSCs as an architecture would not be as good for
[05:02:56] where the content changes, like the primary content changes because like, wrap a lot because they do everything wholesale. They rely on caches on the server in scenarios where you could actually just not make the request in the first place.
[05:03:15] Thank you.
[05:03:16] Right?
[05:03:17] And the reason that this is kind of relevant here is because like,
[05:03:23] Like I keep on circling this. It's an interesting tension.
[05:03:32] From their perspective with aggressive preloading and server caching, they are a good choice for interactive apps.  Yeah, it depends on how interactive. I don't actually think they go all the way right. Technically you can stick
[05:03:44] classic isomorphic, you know,
[05:03:46] interactive type stuff in your next app,  but you have to close the loop on the mutations, right?  If you're using server actions to re-render part of the page,  it's really hard to like do granular updates on top of that.  You end up trying to introduce, it's very hard to like
[05:04:01] bridge that gap. People end up just making the
[05:04:07] use client larger and larger. The joke is like you just put use client at the top and you just forget about that, right? I'm not saying that's right, but I'm just saying like that's where the tension is here.
[05:04:21] -
[05:04:22] So it's like...
[05:04:25] I...
[05:04:26] It's interesting because I feel like
[05:04:28] Like,
[05:04:29] Whereas controversy, I've been kind of critical a bit of server islands because they cause
[05:04:34] even though they load from the CDN really quick,  they can't parallelize the process of fetching the data  for the server island, so to speak.  So they're actually,
[05:04:45] slower to load the secondary content that comes in the dynamic part, than if you had streamed from the edge or done PPR.
[05:04:53] So ultimately, you see the static content faster,  but the parts that load in are slower.  So if your primary content is not static,  then server islands are the wrong solution for you.  But if your primary content is static,
[05:05:06] you know, generally not getting invalidated all the time.
[05:05:09] Then,
[05:05:11] it's way simpler and way more performant.  I called it the new Jamstack  than doing what Next is doing.  So it's like, it's this very...
[05:05:19] interesting in the middle
[05:05:21] um, zone.
[05:05:23] Where
[05:05:24] it's not the best at heavily interactive stuff and it's not the best in
[05:05:29] at less interactive stuff.
[05:05:32] And the
[05:05:33] Arguably, you could say being in the middle means the more you expand, the more range you have, but arguably the better the solutions are on the outside, the less space it has to exist if the two ends meet.
[05:05:46] Thank you.
[05:05:47] Thank you.
[05:05:50] Yes, right, of course. But that only matters, like, if your primary content can't be served from the CDN, then, like,
[05:05:59] Like,
[05:06:00] Thank you.
[05:06:01] Like my hacker news example, silly thing. I mean, you'd probably catch some stuff there, but like if your primary content can't is literally like a header bar, then like server islands are going to be worse.
[05:06:21] Yeah, I mean, local first is like the extreme on the others, like not RSC side of things. It's like the it's the extreme of the.
[05:06:30] client granular thing that I'm talking about. So it's just, it's an interesting thing because
[05:06:39] RCs were designed to make...
[05:06:41] next fill into that zone, you know, but have they gone so far that they actually have departed? We did a whole stream last time about this, but it's interesting to actually see the conversations pop up now on
[05:06:56] Twitter about this, right? Like
[05:07:00] I don't know. It should be interesting to see how this kind of progresses out. Um,
[05:07:10] Before I get off this platform and look at that blue sky thing that I have to look at,
[05:07:14] CoreView's Calendar component is live, aimed to be a simple lightweight calendar component for SolidJS ecosystem.
[05:07:19] Thank you, Jasmine.  Super, super stoked about this.  Every time...  I told you it's endless, right?  When you...  People are like, oh, where's your blank library?  And you're like, oh, we have...
[05:07:33] chat cn we have all you know all the popular component libraries and approaches and you know things equivalent to this and that and then people are like okay but where's this one component you're like oh like a date picker or calendar or something it's like.
[05:07:47] They are the harder ones, and sometimes you will have all the components except for that one in a thing.  So I'm very stoked to see...
[05:07:53] you know, the calendar component.  It's just, it's one of those ones that I know takes a lot more time to make good.  And I'm glad to see that done.
[05:08:05] Thank you.
[05:08:08] The data loading side of RC0 were hyped, while the automatic code splitting is barely mentioned.
[05:08:14] Yeah, yeah. The coat... Well, it's... The coat size part is the part...
[05:08:18] It's funny though, but like it's interesting because
[05:08:23] Yeah.
[05:08:24] In theory, it should be this... Do you know why? It's because in theory it should be the same gains, almost equivalent to islands. But the problem is that...
[05:08:35] Thank you.
[05:08:35] because the bass line
[05:08:37] got bigger, people who make a lot of noise and make their simple demo apps, actually stuff got larger with Next.
[05:08:45] So like from from that perspective, like,
[05:08:49] In real apps, I think there's definitely a positive benefit on the code size because of this.
[05:08:54] Um,
[05:08:55] But
[05:08:57] the problem is
[05:08:59] Anyone doing anything trivial just to kind of be like, look at this, saw things got worse.  And no one's like...  The most complicated...
[05:09:07] app someone's going to build as a demo app is a blog site, which means that
[05:09:13] Someone could build it 10, 15, 20 times over with Astro plus Svelte or Solid before they even catch up to the next app that...
[05:09:22] It says, hello world.
[05:09:24] So like, that's why people don't talk about it.  But if you talk about a really large app that has lots of code and component things, there's a huge benefit, right?
[05:09:35] Are you sending one megabyte of JavaScript instead of 10 megabytes?
[05:09:41] Right. And and then the problem is,
[05:09:45] people doing simple stuff go, okay, I'm sending one megabyte when...
[05:09:50] If I choose this other solution, I'm sending 100 kilobytes.
[05:09:54] Okay.
[05:09:55] Thank you.
[05:09:56] Thank you.
[05:10:07] Yeah, I imagine so.  Yeah, I mean, our seas are basically islands.  It's the same.  It's yeah, like islands is...
[05:10:15] The only difference is the client side routing capability of RSCs and keeping share preserved state.  Island with like view transition and stuff doesn't handle preserved state and hydration properly,  but like from the initial render standpoint,
[05:10:32] like MPAs.
[05:10:33] are the same mechanism on islands going all the way back to like marco in 2014.
[05:10:41] Yeah.
[05:10:42] RSCs aren't special in that. They are actually just an implementation of islands from a certain perspective.
[05:10:50] Thank you.
[05:10:54] Yeah, and state preservation. Because just adding client-side routing to islands doesn't make it equivalent to RSCs. You have to be able to handle state preservation.
[05:11:04] Um, okay. So what's this blue sky thing I have to look at?
[05:11:09] Because I think I'm at the end of...
[05:11:11] Yeah, I'm good here. I mean, the only last thing here is new Honeypot documentary coming out, the Angular documentary.
[05:11:17] I'm
[05:11:18] Again, shameless plug because I'm a part of it.
[05:11:22] I actually recently did the VEAT one too.  I've been in three Honeypot documentaries now.  I think that's the record according to them, but...
[05:11:30] We'll see.
[05:11:33] I enjoy them.
[05:11:35] I like this kind of history of things.  I don't know if you guys put speed running, but I'm a huge fan of summoning salt.
[05:11:42] So like having someone go in our field and keep a history is really cool.
[05:11:56] Okay, so I'm getting shares. Let's start with this.
[05:12:00] Then, is this the one I want?
[05:12:03] Yeah, thank you. Yeah, perfect.
[05:12:06] Alright.
[05:12:11] Just saw an article pointing out the same crate act with Broke condition I've been highlighting, and nothing is noted as actually worse.  Shiree docs make no mention that it's outdated.  Pretty frustrating to watch.
[05:12:21] I'm
[05:12:21] It
[05:12:23] If I had a replay, I'd have to put a replay,
[05:12:25] I'll let the Rectic Metaful cut permissions and there's a...  I don't want to run nothing.
[05:12:31] So there's something giving team points, this needs to be championed from the team yak.
[05:12:36] Thank you.
[05:12:46] Oh, this is like a general launcher that launches things. Yeah, we talked about this back when Theo made the beat.
[05:12:52] argument.
[05:12:55] Cheers to everyone, but since the release of 19 it now breaks and stalls because RTO.
[05:13:01] So, oh, interesting.  So like just no one's doing it.
[05:13:08] Yeah, going to...
[05:13:14] There's abandoned, there's... Okay.
[05:13:17] So what's what's I need to find where the drama actually gets in.
[05:13:27] Okay, we got Spittak.
[05:13:30] with
[05:13:31] Vite core maintainer
[05:13:34] Let's see what this thread looks like.
[05:13:37] So
[05:13:38] Let's follow it down.
[05:13:40] Okay, so here we go.
[05:13:47] Okay.
[05:13:48] I meant everything sounds good except the changing installation docs is unrelated to 80% 20.  I agreed it shouldn't block, but I feel very certain that they say spas are valid.  Use V for that.
[05:13:56] Highly related to the situation being more toxic.  Spotlight is fine compile target output mode.  If there's a good React framework that can output Spotlight,  we should list that.  Vita is not a framework and we don't recommend cobbling  your own bespoke framework from a build tool.  Oh, this again.
[05:14:10] Man, I almost want to...
[05:14:13] Oh.
[05:14:15] I don't have time to do this.
[05:14:16] I wrote something...
[05:14:19] On the other day on HackMD,
[05:14:23] my falling out with React.
[05:14:26] Um...
[05:14:28] I could publish this as an article.
[05:14:31] And it's like right...
[05:14:33] this
[05:14:36] I'm going to go ahead and get some more
[05:14:38] ReactorDegreed, yes I think it should be added, actually I'm not.
[05:14:42] Remix move to ReactRoto is done, create VDAC after the meta launches, select React, blah blah blah.
[05:14:47] you know.
[05:14:48] I'm going to go.
[05:14:52] I'm gonna bring a critz-free, doesn't it, man?
[05:14:56] Amen.
[05:14:57] Don't have the dock or anything else. Okay, so they're talking.
[05:15:00] Okay, that's great, blah, blah, blah.
[05:15:04] Thank you.
[05:15:05] Production now, to correct the issue, not...
[05:15:08] It's a vote, some
[05:15:14] Okay, I'm still trying to...
[05:15:17] Create React defaults to meta frameworks.
[05:15:21] Oh, interesting.
[05:15:28] Hmm.
[05:15:29] That's interesting.
[05:15:31] because now Beats talking about changing what they point to with their CLI.
[05:15:37] Huh.
[05:15:38] CLIs and CLIs and CLIs.  Just kind of funny side, because we were actually looking at
[05:15:44] like our CLI has the same choice where you choose between just static beat templates and, uh,
[05:15:51] Solid Start templates.
[05:15:58] Alright, we got a drama one.
[05:16:04] It doesn't...
[05:16:07] See what Ricky has to say.
[05:16:09] The launch radio theory is late, but not if it remains the idea of no move, and it's for years in that.  So instead of the move, I'm hoping they've broken my nail leg.
[05:16:21] Not it.
[05:16:31] Oh, it's this. Rewrite. Let's spawn recommend VEAT. No to six.
[05:16:37] This is such a
[05:16:38] Funny thing.
[05:16:47] Yeah, yeah, I mean, V takes it on, I guess.
[05:16:51] .
[05:16:52] It's just funny.  Like...
[05:16:55] Thank you.
[05:16:56] This is such a weird...
[05:16:57] thing. And it's... I actually said that...
[05:17:01] in the article that I wrote that this was the, like, this change in React was the moment
[05:17:07] that
[05:17:09] things changed for me with React. I don't know. I don't know if it's premature to show the thing that I wrote.
[05:17:15] Um, probably.
[05:17:16] It's just, I was watching Theo's stream on Wednesday,  and he was doing a new video on the last framework.  And he made a comment about how...
[05:17:26] he could notice that I became increasingly frustrated with React.
[05:17:32] And
[05:17:34] you
[05:17:35] He thought it was because they were closing...
[05:17:38] The Gap
[05:17:39] you know, like basically React was 70% of where I thought it would be now that it's 90%.
[05:17:45] you know,
[05:17:46] it's close enough that it's good enough.
[05:17:49] and
[05:17:50] you know, it didn't really matter.  So that's why I'm frustrating.  And I mean, he's partially correct, but...
[05:17:57] What annoys me about the, you know,
[05:18:01] they did make improvements and stuff.  But what annoys me about that last gap is,  is almost like an acknowledgement that,
[05:18:07] They're...
[05:18:07] They're done.
[05:18:08] And I think that's the problem.  I don't think we should ever assume that we're done.
[05:18:14] Right. I think I think it's dangerous to assume that you're done.
[05:18:20] Things are changes like the one constant.
[05:18:25] I don't know.
[05:18:25] I will respond whenever Theo releases his video on the last React to last framework or whatever.  I will probably...
[05:18:38] look at that on stream and we'll respond to it. But, um,
[05:18:43] Until then, I don't think I want to poke the bear here.  This conversation, other than them...
[05:18:50] still going with like they don't want to promote...
[05:18:53] you know,  bundlers,  um,
[05:18:57] But they'll let CRA just like
[05:19:01] burn into the ground is...
[05:19:03] is more of a frustration for React folks and not particularly dramatic.  It's like we've known they've had this stance for a while.  It's like one of those really, it's really odd stance from the outside.
[05:19:15] So which makes it hard to understand, because you look at it and you're like,
[05:19:18] just being like do a spa with V is such a no-brainer but um
[05:19:25] their vision for React
[05:19:27] Which is-
[05:19:28] part of the
[05:19:30] the conflict here doesn't really allow for that because for them react is not
[05:19:36] what it used to be. It's not a library.
[05:19:41] Thank you.
[05:19:43] *sniff*
[05:19:45] You know, it's just...
[05:19:52] I mean, it's no secret.  On my last stream, I was...
[05:19:55] fairly critical of React and I've just kind of had enough. And I, I, I,  so I actually stopped and wrote it down because I was like,  when did this really start for me? When, like, cause,
[05:20:06] Every two years,
[05:20:08] Or so I write a reflection on where reacts at, you know, I did like two years after hooks and I did nothing like generally I
[05:20:14] I like keeping a pulse on it because there's like a feeling in the ecosystem around react and stuff and I
[05:20:22] I haven't written anything in two years.
[05:20:25] You know, I, I, I, yeah, after the hooks, when I did like finally understanding server  components, that was the one I did around 21 or 22 and I,
[05:20:34] I think...
[05:20:35] I'm not alone in my sentiment.
[05:20:38] But I also feel that the language that I chose to use, which is why I don't want to put it in here, is too harsh.  Um...
[05:20:48] This is why they can't recommend React and Beat.  Okay, let me see that one.  I mean...
[05:20:55] Thank you.
[05:20:58] *sigh*
[05:21:10] It's...
[05:21:14] Here's a get over your screen read.
[05:21:16] Ben's clearly living with nothing talking about what that means.  Does React team mean collaborate with folks outside of our cell at this point?  It's like the lack of docs around .use is intentional. The docs are focused on end user, and React doesn't want end users to use .use directly without server components to fetch data. They recommend people use frameworks for data fetching, cryptic or something.
[05:21:33] Use a document and send you can cache promise, blah, blah, blah.  So what does...
[05:21:41] What does this have to do with V?
[05:21:48] Thank you.
[05:22:04] Do you mean like from the fact that they don't want...
[05:22:07] They expose...
[05:22:09] external APIs, but they don't want everyone to use those APIs.
[05:22:13] So...
[05:22:14] This way they don't have to document...
[05:22:18] the things that are like not as refined.
[05:22:21] I mean, I do this too.  It would be like me documenting what Solid.js web exports a little bit  because I don't want you to ever use it.
[05:22:33] The difference is framework authors don't actually have to use it. So I don't actually
[05:22:37] Except for the local storage thing, arguably, but yeah, I, I,
[05:22:41] Yeah, I don't know.
[05:22:43] It's an interesting place to be.
[05:22:54] Because if you do React plus V, you literally can't do data fetching.
[05:22:59] Yeah. How does Tanner do data fetching? I mean,
[05:23:04] Yeah.
[05:23:10] I don't think that's why, though.
[05:23:12] I think...
[05:23:14] We're just seeing like two important philosophies line up in the most terrible way.
[05:23:20] Like I don't think it's specifically Next.js.  They don't care if it was Next.js or Remix or whatever.  It's just like they're trying to change what React is.
[05:23:29] And then at the same time, there's
[05:23:33] people who are willing to jump in and take that torch all the way for their benefit in terms of
[05:23:40] being the one react solution. So it's like
[05:23:43] You know
[05:23:44] you
[05:23:46] Oh man.
[05:23:51] What I wrote is so relevant to this, but I think I need to save it for my next stream.  It's already late enough.
[05:24:03] *sniff*
[05:24:05] Yeah, yeah, we're just we're going to leave that that where it lies for now.  It's just it's so tempting because it's completely on point with this.  And I think that like.
[05:24:15] *sniff*
[05:24:16] - -
[05:24:17] I think...
[05:24:19] We're in a pretty interesting place in terms of
[05:24:24] like where react sits and,
[05:24:27] I don't think there's an easy...
[05:24:30] Thank you.
[05:24:31] Thank you.
[05:24:32] solution for React. I mean, the problem is
[05:24:35] After a while, you build up so much infrastructure, so many pieces.
[05:24:39] That you can't move...
[05:24:42] without breaking.
[05:24:43] And...
[05:24:45] React is getting to that point where
[05:24:48] Like.
[05:24:50] They tried to take some steps and their feet broke off, you know, like, and then the thick thing and a bit of the shin broke off and they're like, okay, we're not moving anymore.
[05:25:03] And it's fine.  It's a natural life cycle.  But it also means that...
[05:25:09] React is peaked.
[05:25:13] That's the term, which is perfectly fine.
[05:25:19] Thank you.
[05:25:20] Mm-hmm.
[05:25:22] It just means that, like...
[05:25:26] because like when you're at your peak,
[05:25:28] Thank you.
[05:25:29] You're at your highest potential and you get the most things you know what I mean? Like so I
[05:25:34] Like, React will continue to grow.
[05:25:37] But
[05:25:38] Yeah, I think that is kind of like where we are now.
[05:25:45] It means that people mentally should
[05:25:47] be prepared that down the line there are different things, but people don't want to.
[05:25:52] But I think...
[05:25:54] we all feel it.
[05:25:59] Thank you.
[05:26:01] Like sometimes you just can't change the boundaries anymore.  You can't.
[05:26:05] You just got to...
[05:26:06] you know,
[05:26:08] React has done exactly what React was supposed to do.
[05:26:15] I think the crazy part is the people who think that
[05:26:19] Mm-hmm.
[05:26:20] like you like stagnating or like going out this way.
[05:26:24] Like,
[05:26:25] It is a thing that is.  It isn't like a good thing or a bad thing,  but people who stand behind it as being like,  you know, a good thing,
[05:26:33] are just...
[05:26:34] It's kind of like trying to stoke or hide a fire.  It's just where things are in its life cycle.
[05:26:39] React's going to grow like jQuery now, yes.
[05:26:48] It's interesting because...  Well, because they're still working...
[05:26:51] really important stuff.
[05:26:54] Re-re-re...
[05:26:54] Getting the compiler and getting our season was like the thing they needed to just kind of like
[05:27:01] Like, it's like when the, you know, the guy in the quicksand's moving forward as he's sinking and he just gets...
[05:27:07] you know, puts it in.
[05:27:10] They may have done it, you know?
[05:27:14] people, people, here's the thing, yes, people who use things most, love most, they're gonna be naysayers and stuff, so they're going, they're going to always...
[05:27:23] say that. They're going to be the first people to be negative. It's, I don't, they might be earning early warning signs. I think
[05:27:31] It has happened now.  You can never tell until you get past it and you can look back.
[05:27:36] And...
[05:27:37] no fault of Andrew Clark or whatever specifically,  but the moment that it became obvious to me was when,
[05:27:45] and this is not a stab at Vercel again, is when
[05:27:48] Next 13 was the real React 18 release.  That...
[05:27:54] was when they
[05:27:55] jump the shark you know that's a happy days reference but that that was  that was when you you're watching the show and you're like it's so sweet and then you're like
[05:28:05] Did they did that?
[05:28:08] I mean, the show's still sweet, but...
[05:28:10] It sticks with you.
[05:28:13] And then you're like, you think about it later and then you go back and go,
[05:28:17] Oh, that was when it happened.  It's not like the show deteriorated and wasn't good anymore.  It just...
[05:28:25] there was a subtle change and it took a while to be realized.  It's like,  you know,  follow the Roman empire or whatever.  Yeah.
[05:28:34] Thank you.
[05:28:40] Thank you.
[05:28:48] So yeah, I mean, it's it's
[05:28:51] I mean...
[05:28:52] There's...
[05:28:52] It's just where you are being being at the top isn't a bad thing, right?  It just you.
[05:28:58] I think I think
[05:29:00] I think that's the scenario. And for different people who live on different parts of the curve, that means different things.
[05:29:08] Right?
[05:29:09] There's always going to be people at the very front of the curve who are always chasing the newest things.
[05:29:15] There's other people...
[05:29:17] Um, who
[05:29:19] live for the innovation.  They live for the change.  They aren't necessarily chasing new things  just because they care about new things.  They like seeing the impact of those changes.  But those people...
[05:29:29] you lose once you get near the peak.
[05:29:33] Right?
[05:29:35] And then, you know what I mean?
[05:29:39] Yeah, I think React has finally got to the point...
[05:29:43] where
[05:29:46] I've lost interest.
[05:29:50] Anyway.
[05:29:53] Thank you.
[05:29:54] Oh, ending with that somber note, I guess.  Um...
[05:30:18] I don't know. Sorry. That's all I got. I wish I had something. I should have saved the Angular documentary.
[05:30:23] to now like
[05:30:26] the
[05:30:28] I was reading this comment from Dev and I was trying to figure out what he meant because I was like view
[05:30:36] doesn't have fine grained rendering yet.
[05:30:39] but I guess it will. Angular
[05:30:42] I mean, if...
[05:30:43] view
[05:30:45] If Vue can bring something to the masses, Vue already brought signals.
[05:30:50] So...
[05:30:52] Wilbering.
[05:30:53] but
[05:30:56] Thank you.
[05:30:58] Yeah, I guess the idea is that like something that's already established will
[05:31:03] take the stab enough to get to bridge the gap and then the next thing you know i don't know it's  interesting
[05:31:12] If it's not a fish.
[05:31:15] Yeah.
[05:31:16] Anyway, um...
[05:31:20] Yeah, I'm sorry about that. I didn't, I didn't realize to, I didn't mean to suddenly get so dark. Um,
[05:31:25] I don't know. Anyway.
[05:31:28] Thank you.
[05:31:30] Thank you.
[05:31:31] I think I'm gonna...
[05:31:34] I'm going to call it a night, uh, call it a week.  Hopefully I can get Tanner in on the stuff soon.  As I said, sorry again about the demo, not quite going there.  I hope you learned something still.  Um.
[05:31:46] You all have a great weekend.  Catch you later.