---
title: "RQd6FIV7JPM"
slug: "RQd6FIV7JPM"
duration: "6:13:38"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/RQd6FIV7JPM.m4a"
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
[00:00:01] Alright. Hello everyone and welcome to my stream today.
[00:00:05] I wasn't sure if I was gonna stream it first because
[00:00:09] It's been one of those two weeks where I've just been doing a lot of work, a lot of bug fixing, a lot of refinement, finishing little pieces up and...
[00:00:18] I don't know if I had a really exciting headline for this one.
[00:00:23] That's probably the hardest part, coming up with the stream covers and the stream titles.
[00:00:29] I don't need an excuse to talk for several hours straight, but actually coming up with the materials is probably the hardest part of doing the stream.
[00:00:39] Which is good, because it means I don't waste that much time worrying about streams, unlike videos, which take absolutely forever to make. So yeah.
[00:00:49] Yeah, I started half an hour earlier or later just because I was like...
[00:00:55] I had to make the cover and I was like,
[00:00:58] Thank you.
[00:00:59] I need a moment.
[00:01:01] I thought I might get another solid release out if there's another bug to fix.
[00:01:05] But it turns out it was just, I think,
[00:01:08] Well, there was one feature refinement out of the two, but it was just a...
[00:01:14] some adjustments coming up with a mental model and I still have more work to do on solid start  specifically. Um, but yeah,
[00:01:21] Solid 2.0 core, isn't it?
[00:01:23] pretty nice place um the
[00:01:27] I had a list of features I wanted to get to, and I think we've really...
[00:01:31] hit them all um sorry just let me move my camera slightly um
[00:01:37] So yeah, pretty excited about that. Yeah. Anyways. Um, yeah, people should come and say hi in the chat before we get going.
[00:01:46] Hyped? I'm glad you're hyped.
[00:01:48] Let's go, let's go, let's go, let's go, yeah.
[00:01:50] Hello.
[00:01:52] The key thing about being feature complete is the docs team finally feels comfortable to actually go in and start working on the docs.
[00:02:00] people the last thing people want is uh you know do the work and then for me to  like keep on adjusting and tinkering i think we're outside a really good place um
[00:02:11] Okay, so like...
[00:02:13] Eh?
[00:02:16] Some people, we got a little criticism when I went straight from experimental to beta, because I want some people to work on stuff.  I want hand stack libraries to be able to, you know, go and, you know, people feel confident and stuff.  I would more likely say that, like...
[00:02:33] Mm-hmm.
[00:02:34] We were still missing some stuff at the beginning of beta when we went in, and now we're not. There might be bugs obviously still.
[00:02:39] But like...
[00:02:41] It might have been a little bit premature to go beta right at the beginning.
[00:02:46] But I needed to push things forward, which it did. So
[00:02:50] No regrets. But yeah, beta seven came out yesterday.
[00:02:56] As I said, still working on some downstream issues, but
[00:03:00] I can now make demos of every single feature that I want as core solid 2.0.  So I'm pretty excited about that.
[00:03:07] Hey, hello, hello.
[00:03:09] Get Autonomous better in the shot. Yeah, no, exactly. Right.
[00:03:13] Bye.
[00:03:14] Sorry, just grabbing a little food here. I do eat sometimes. You wouldn't be surprised, you know, being on six-hour streams.
[00:03:22] Hmm.
[00:03:23] Okay.
[00:03:26] Thank you.
[00:03:27] Thank you.
[00:03:28] But.
[00:03:29] We should get started here. Let me get Twitch going in the background too.
[00:03:35] also if you haven't yet this is probably a good time
[00:03:37] to like, comment, subscribe, the whole deal. I never say that enough. The channel suffers for it.
[00:03:45] It just is what it is.
[00:03:48] Mm-hmm.
[00:03:49] Thank you.
[00:03:51] Yeah.
[00:03:53] Twitch is actually pretty dead. Seems like most of you all are on YouTube or on X.
[00:04:05] Hey Brandon, how's it going?
[00:04:08] Video dead? Not that I can tell, but if you guys see something different, let me know.
[00:04:15] Stream froze. Uh oh.
[00:04:20] Thank you.
[00:04:25] Thank you.
[00:04:26] Thank you.
[00:04:28] Thank you.
[00:04:29] Hmm. Weird.
[00:04:35] Yeah, one big change is when I moved the signals repo internal into the mono repo, which
[00:04:41] Before signals were getting updates at a rapid rate, much faster than the repo was, I was just doing tons and tons of releases. Signals are in a pretty good place, so I brought them internally.
[00:04:53] Okay, let's see here.
[00:04:57] Thank you.
[00:04:58] Thank you.
[00:04:59] I hope it wasn't my internet connection.
[00:05:03] Alright, alright, well...
[00:05:05] Let's see here, what did I want to...
[00:05:08] Yeah, Twitch.
[00:05:10] Is back to...
[00:05:13] Thank you.
[00:05:14] Okay.
[00:05:17] Thank you.
[00:05:18] Thank you.
[00:05:20] *throwing*
[00:05:26] Thank you.
[00:05:27] Thank you.
[00:05:28] So let's see here, where do I want to get started? Probably...
[00:05:33] If we take this a couple ways
[00:05:35] um,
[00:05:38] Probably let's
[00:05:40] just demo some of the
[00:05:42] it freezes when he checks twitch is that what is that what's going on
[00:05:49] Funny though, because I'm not even sharing my screen yet.
[00:05:54] Thank you.
[00:05:57] That's really odd.
[00:06:01] I wonder if it's like having trouble having
[00:06:04] two videos, because I have like a
[00:06:06] I can obviously see what I'm
[00:06:09] presenting through
[00:06:12] through stream yard but i wonder when the
[00:06:15] when I go to Twitch.
[00:06:18] That's where the problem happens.
[00:06:23] All right.
[00:06:29] Cool.
[00:06:30] All right.
[00:06:34] No more freezing, hopefully. Okay, sorry. I just said X open.
[00:06:39] All right, let's get...
[00:06:44] Thank you.
[00:06:48] Thank you.
[00:06:48] You're
[00:06:50] like bs code i haven't opened that for ages
[00:06:54] Cursor.
[00:06:56] Thank you.
[00:06:58] Thank you.
[00:07:00] Thank you.
[00:07:02] Thank you.
[00:07:03] Nothing freezing on YouTube. Well, there you go.
[00:07:06] I'm sorry.
[00:07:07] All right. Um...
[00:07:10] Oh, yeah, this was fun.  The AI actually...
[00:07:14] finished regenerating the signals library from scratch, passing all the tests, um, uh, past week, uh,
[00:07:22] So, I mean, it's doable.
[00:07:25] I actually got
[00:07:27] a different agent to
[00:07:30] to check it. I didn't get any further on this one, the GSAI benchmark, but
[00:07:35] Yeah, the signal's from scratch.
[00:07:37] And then I got to do some further refinement from missing goals, but what did I do?
[00:07:41] Repo comparison on...
[00:07:44] on performance. This is kind of interesting.
[00:07:50] It's a little off-topic, though. Maybe we'll talk about it later.  Okay, let's, uh, let me...
[00:07:55] open
[00:07:57] the
[00:07:59] the solid
[00:08:01] 2.0 repo.
[00:08:03] um,
[00:08:06] Okay.
[00:08:09] Whatever.
[00:08:10] It's a little out of date, so let's...
[00:08:15] But
[00:08:16] Oh, weird. Why is it still showing Google?
[00:08:22] Sorry, let me see what's going on here.
[00:08:29] Thank you.
[00:08:32] Should be the entire window. Let me share my screen again.
[00:08:37] Oh, it's an entire window. That's why my problem was.  Okay, let's go here. There we go.
[00:08:41] Sorry, I got stuck on Chrome while I was talking.  Okay, Google, we're back.
[00:08:46] All right.
[00:08:51] Yeah, last time on here from...
[00:08:55] Like 12 versions. Okay, let's uh...
[00:08:58] In the
[00:09:03] Oh, we plug in
[00:09:05] Solid is out of date, too. I mean, it's not a huge, huge deal, but...
[00:09:12] If you plug in solid, it should be like net four, sorry.
[00:09:17] Not a huge deal, though.
[00:09:22] I'd like to know how you use AI. I covered that a couple of streams back.
[00:09:27] Um
[00:09:33] Thank you.
[00:09:35] Honestly, I can't say that my workflow is particularly optimal.  I was having trouble with overlapping.  I was going to reach out to Theo a month ago and be like,  I need a workflow where I can cross-sectionalize workspaces  so that I can work on features independently and they can just like...
[00:09:53] take multiple repos and just build them into these virtual workspaces so that I can work on each feature independently.
[00:09:59] I never got around to
[00:10:01] Because he wanted feedback because he was working on something.  I find out later that it was actually him.  I think he was working on T3 Code or something.  But this was like before it was public.  Um...
[00:10:12] But I never got around to reaching out to him because, yeah, the biggest challenge for me is...
[00:10:17] Thank you.
[00:10:17] parallelization of a lot of the different ideas, because eventually the stuff starts overlapping.
[00:10:23] Actually having signals in a separate repo actually helped a bit for a while there. So mono repo is kind of awkward.
[00:10:29] But of course you could just make copies of the mono repo.  So maybe that will make it easier.
[00:10:34] It's interesting because AI has been such a huge productivity boost for me.
[00:10:42] because as my problem was never the concepts or the ideas i just didn't have enough
[00:10:47] I, people just,
[00:10:50] building this stuff, right?  Like,  the bottleneck  is often...
[00:10:58] me communicating ideas to other people.
[00:11:01] So like...
[00:11:05] AI has been incredibly helpful for me.
[00:11:11] Thank you.
[00:11:13] I still think about the blessed way to bundle solid.js.
[00:11:17] To be fair,
[00:11:20] they have a reasonably fair point.
[00:11:22] The challenge is,
[00:11:25] And I think this is something you see in the solid ecosystem you've got a little bit is
[00:11:29] I did stuff the way I wanted to initially, but kept it deliberately very open so people could do whatever the hell they wanted.
[00:11:36] So sometimes my recommendations made into the docs
[00:11:40] Sometimes, though...
[00:11:42] people would just go build their other thing because a new tool X came out and they wanted to do it better, but they didn't follow my recommendations, right? So like,
[00:11:51] Like a perfect example of like TS up or TS down or whatever.  I have no clue what that is.  But apparently that's like the last couple of years has been like the way they do TypeScript, right?  I'm a roll up guy, right?
[00:12:02] um
[00:12:03] - Thank you.
[00:12:05] And then people come in and like report issues about like TSP down.  It's like, well, what the hell are you guys doing?  Like the rollup preset is exactly
[00:12:12] how the output needs to be, right?
[00:12:15] Um,
[00:12:16] But, you know, whoever
[00:12:18] went and did whatever like there's like a missing gap and that's docs because we probably didn't  explain why we made the decision of how why it's the roll-up plugins the way it is so yeah i do get  it the the ironic thing is for the guy and for people who are wondering what what the  hell i'm talking about is someone was on x and they were like
[00:12:38] I... it's fine, I don't need to find it right now. I don't need to call them out.
[00:12:42] But they were trying to figure out how to bundle a solid library. And the truth is,
[00:12:48] At a baseline, if you just want to ship a solid library,
[00:12:51] Just...
[00:12:52] Ship.
[00:12:53] the .jsx file or
[00:12:55] Do compile from TypeScript out of JSX, but just ship the JSX. So you could just use TSC. Ship the JSX file.
[00:13:03] and the types and put it on a solid export condition.
[00:13:07] That at the baseline will get you where you need to be. Then we'll find it and we'll compile it for you into each app the way you want. What's weird, the difference between Sol and React on bundling is that
[00:13:19] I...
[00:13:19] I mean, I feel like this hurts it long term too because React actually changed its JSX transform at some point.
[00:13:27] people pre-compile everything and then you get the final source, the React libraries. And we do  recommend that for the no build people to also make a pre-compile thing, but because of all the different
[00:13:39] like permutations of like,
[00:13:42] CJS. ESM.
[00:13:45] client, server, hydratable, not hydratable,  like whatever variation.  Like at a baseline, you're making eight different bundles.  So it's like, just ship the source code, right?  But again,
[00:13:57] that guidance probably needs to be harder, like harder
[00:14:02] um established in the doc see something like spelt people don't worry about that because  everyone no one expects the code to just work so like they're like okay we're shipping the source
[00:14:12] same with Vue, but for React, React was
[00:14:15] pre-compiling it
[00:14:18] and shipping the compiled output, which is a little bit different.
[00:14:24] Get workspaces. This is my answer. Work trees. Yeah. I mean, Cursor keeps on making work trees for me.
[00:14:32] Thank you.
[00:14:33] Hey Anthony.
[00:14:37] Every framework is just a giant config file.
[00:14:41] Yeah, TS up and TS down, yeah.
[00:14:45] Yeah, well, at least meta frameworks are. I don't know what the actual core frameworks
[00:14:53] He's not wrong, but he's also...
[00:14:55] wrong in that React doesn't have a best way to bundle. In fact, ReactDocs went out of the way  to avoid mentioning v despite it being the best method. That's true.
[00:15:05] React is just popular enough that every... Yeah, exactly. This is the core constraint here.
[00:15:11] JSX does not have a prescribed compiled output, but every tool builds React's old output in.  Some might use the React's new output and updated, but literally, the state of things is React would compile JSX a certain way.
[00:15:25] and every tool just copied it,
[00:15:27] there are themselves like TypeScript did and all these things, you know, bun, whatever.  They're just like, look, we have react compiler built in and then react went and changed their compiler.
[00:15:36] Okay.
[00:15:37] I don't know if they all updated right away.  I think they might have by now.
[00:15:40] But it's like kind of unfair to everyone else, right? Especially when like reactive like themselves are like, look,
[00:15:46] Thank you.
[00:15:47] like JSX spec, there's no prescribed compiled output, right?
[00:15:52] But this is an old topic.
[00:15:55] Thank you.
[00:15:57] Yeah, redwood. That's what I mean by the meta framework level. I think it's where this really comes in.
[00:16:04] When the bugs are fixed. Sorry, I know this is terrible. When should we expect all 2.0?
[00:16:09] I'm gathering that's why a lot of you guys are here  because you want to know where we are at.  And the answer is...
[00:16:15] when the bugs are fixed and the bugs don't get fixed unless people use it and  people don't use unless the docs are present and people don't write the docs  unless the, the,
[00:16:24] the, um,
[00:16:26] - APIs are stable.
[00:16:28] What?
[00:16:29] There's still a little bit to go, but
[00:16:32] At least we're getting to actual point when people can use it.
[00:16:41] Yeah, I'm just here for the release date, of course. Yeah, okay. Sorry. Let's continue so we actually can get into where I wanted to get into. So, do, do, do, do, do.
[00:17:01] That's kind of interesting. I haven't actually installed this for a while that I didn't actually notice that, like I installed on my local machine.
[00:17:09] but not on...
[00:17:12] Uh...
[00:17:16] Yes, all signals is in the local repo.  Okay, let's try it.
[00:17:20] Let's just go PNPM build.
[00:17:23] This is a good test because obviously when you do all the changes. Yeah, exactly. Okay. So what's going on here?
[00:17:31] Because obviously when you do all the tests on like in one machine, you set everything up to work on one machine and you don't like pull it from scratch, you're going to miss stuff.
[00:17:40] So...
[00:17:43] Thank you.
[00:17:48] Cannot copy.  So this is, so even though the repo works for me  on my computer, when I switch to another computer,  the repo's having an issue.
[00:17:56] because the because the bundling time okay this is the perfect kind of thing that ai
[00:18:02] can help me with.
[00:18:04] Can't seem to build the repo. I think, uh,
[00:18:11] Where I think turbo depths might be in the wrong.
[00:18:16] from order or some of the package.
[00:18:22] Linking.
[00:18:25] I notice.
[00:18:26] and it makes you with pure depths with a fresh install.
[00:18:32] Thank you.
[00:18:33] Okay, let's get that going.  It's like...
[00:18:38] This is the stuff I suck at, just on a side note. Like I expend all
[00:18:43] I can like
[00:18:45] Figuring out why the repo doesn't build is the most painful thing, right? I don't care about like tricky concurrent
[00:18:55] rendering bugs and like working through those scenarios,  but figuring out why Turbo doesn't build completely cripples me.  This is, this is the biggest benefit of AI. I had this problem,  this issue where we were,
[00:19:07] We support CJS in Solid. A lot of libraries have started dropping support for that and
[00:19:13] And
[00:19:16] you
[00:19:17] And basically the challenge is that
[00:19:22] Actually, this is related to that sync dual types. We need to generate two different
[00:19:29] TypeScript things. Apparently we need to generate both like an MJS and CTS version of the types, which we've never done in solid 1.0 and it was a gap. So I,
[00:19:37] I had no clue how they changed the bill process to do that. So I like actually was just like, AI, can you fix this for me? Um,
[00:19:44] God, I'm using auto right now, which is horrendous.
[00:19:47] Hopefully it can handle it.  So I've been having weird...
[00:19:51] Weird, weird...
[00:19:52] feelings about agents recently. I was really stoked on Opus 4.5, then I switched to 4.6, which like slowed things down a little bit, but still seemed very smart. Then I switched to GPT 5.4, which was...
[00:20:06] Seems.
[00:20:07] It's very smart.
[00:20:09] and very quick.
[00:20:12] And then...
[00:20:13] I decided that I don't really like
[00:20:15] GPT 5.4's attitude. Like, I don't know how to put it. It has a different personality.
[00:20:22] Um,
[00:20:24] And then I was trying like some of the cursors built in models.  And in the end, like I think Opus 4.6 is still the best.  I have no empirical
[00:20:33] science behind that. It's just that
[00:20:36] Like...
[00:20:38] Opus is kind of like humble and smart. It reminds me of like
[00:20:43] a developer I'd like to work with. And
[00:20:47] GPT seems like it's a show-off and
[00:20:51] gets a lot of things wrong and then like doesn't admit when it's wrong.
[00:20:55] Um...
[00:20:57] Which pisses me off.
[00:21:00] Yeah, 4.0.
[00:21:01] I don't seem to have access, at least in cursor, yet to 4.7.
[00:21:05] Let's see what I can do.
[00:21:07] Not auto.
[00:21:08] Oh, it is out.  Fucking hell.  Like, as of, like, yesterday or today?
[00:21:15] I want to try 4.7, I'm going to be curious about that, not that it needed for this.
[00:21:20] I'm sure that I'm sure.
[00:21:23] Yeah, so what we've got here is Composer, too.
[00:21:26] Thank you.
[00:21:29] But yeah.
[00:21:31] 50% off during launch period, no arguments there.
[00:21:35] Yeah, it was funny. I literally looked yesterday and I didn't have 4.7. Maybe I had an updated cursor, but here it is.
[00:21:48] Yeah, just to say...
[00:21:51] I'm curious, 4.7 might be even better.
[00:22:02] Thank you.
[00:22:05] Thank you.
[00:22:05] So as I said, this is the kind of stuff that I love AI for because like honestly hunting down freaking why the repo isn't building or the tests. The only thing that I've been finding though that's been really painful, which unfortunately this is getting in the way of what I wanted to show off today, but we'll get there, is that...
[00:22:22] Sometimes the tests, as the suite gets larger, we'll just
[00:22:25] fail intermittently. And, and, and again,
[00:22:29] Classic GPT.
[00:22:31] Yeah, everything passed except for the 20 tests that failed, but they were there before I did any work.  And it's like, no, they weren't GPT.
[00:22:41] No, they weren't.
[00:22:42] Like every time.
[00:22:44] It's like, it wasn't us.
[00:22:47] Every time. It's like, just put a release, completely clean slate, everything was working 100%. GPD changes one thing, the test breaks, and it's like, no, it wasn't me.
[00:22:57] Um...
[00:23:00] .
[00:23:02] *sigh*
[00:23:07] All right.
[00:23:09] Anyway.
[00:23:12] No problem, I will just rewrite the test, yes. That's the next step, right?
[00:23:17] Well, if it was me, then the test must be wrong.
[00:23:23] Real accountability problem.
[00:23:26] Sometimes it's nice. GPD, I like sometimes putting ideas with because it's so confident that it can solve stuff. Usually the epiphany moment happens when you're like, GPD, you're completely wrong.
[00:23:41] in basically everything you're saying, but you made me think of something.
[00:23:45] You know?
[00:23:47] Anyway.
[00:23:55] I haven't had this happen yet, ever.
[00:24:03] finds a failing test, then skips it and says it's fixed yet.
[00:24:12] Alright, so hopefully...
[00:24:18] But even right now, I'm not confident that it's actually fixing my issue.  It's fixing my issue in my local repo, but it's not...
[00:24:26] Thank you.
[00:24:29] I'm fixing...
[00:24:32] help future people who download the repo at any dungeon.
[00:24:41] Okay.
[00:24:44] Thank you.
[00:24:45] It's such a weird way of asking, I'm not saying it right, but whatever. You know what I mean? My gut is that they're going to make this work and then leave the repo broken.
[00:25:00] Thank you.
[00:25:01] Oh, this is a node issue? Huh.
[00:25:10] Thank you.
[00:25:11] What is the issue?
[00:25:17] *sniff*
[00:25:18] Thank you.
[00:25:38] What's the native node LPS?
[00:25:46] I mean, you guys in chat might even know.
[00:25:55] Thank you.
[00:25:56] Do I have MVM on here?
[00:25:59] Looks like it.
[00:26:01] Thank you.
[00:26:03] Thank you.
[00:26:04] Thank you.
[00:26:04] Thank you.
[00:26:07] Let's go up to 24.
[00:26:12] Yay!
[00:26:14] And.
[00:26:15] Thank you.
[00:26:15] And it is
[00:26:18] default 24
[00:26:20] I think that's right.
[00:26:21] Okay.
[00:26:23] Thank you.
[00:26:24] Thank you.
[00:26:25] Thank you.
[00:26:27] Set, load,
[00:26:31] Thank you.
[00:26:34] Thank you.
[00:26:36] Thank you.
[00:26:41] Yeah, looks like I'm on the right version, whatever.
[00:26:44] I.
[00:26:48] Champion film.
[00:26:59] Huh?
[00:27:00] It's like a formatting issue right now with...
[00:27:05] these two files, it really doesn't matter.
[00:27:15] Thank you.
[00:27:17] Yeah.
[00:27:19] All right, so build's working. Let's ppm test, make sure we're not insane. Okay, cool, cool.
[00:27:27] Sorry for the weird AI tangent.  It seems like it starts every stream this way now.
[00:27:36] Yeah, I've been using planned mode slightly less recently.
[00:27:42] Only slightly though.
[00:27:45] Like I use plan mode when I'm like implementing features, if I'm like attacking PRs until I notice like something really weird, I can just be like, Hey,
[00:27:53] What do you think about this PR? What would you do about this? And it's usually smart enough to not go and implement it right away now.
[00:28:00] Um...
[00:28:09] Thank you.
[00:28:14] Did I already push it up?
[00:28:18] No, I didn't. Okay, good.
[00:28:20] Thank you.
[00:28:20] and
[00:28:21] Thanks.
[00:28:27] Thank you.
[00:28:30] Thank you.
[00:28:33] All right.
[00:28:34] Thank you.
[00:28:39] I would have never found that node was the issue. It would have taken me a lot of time to figure that out, for sure, yeah.
[00:28:46] Yes, which apparently is exactly what I need having unlimited juniors at my disposal.
[00:28:55] Yeah, plan mode is my go-to here.
[00:28:59] Um...
[00:29:08] Yeah, formatting the issue doesn't matter.  Okay, cool.  So now the repo working, okay, pnpm build.
[00:29:16] PMTM.
[00:29:19] or pnpn filter ssr example stream
[00:29:24] Yeah, let's do it. Cool. I want to show you guys
[00:29:28] Um...
[00:29:34] Okay, I wanna show you all an example piece of code  that I've been using.
[00:29:39] Yeah.
[00:29:41] um
[00:29:43] I use this example probably more than
[00:29:47] people realize this is this is like my smoke test before releases.  It's been in the solid repo forever.  Let's see, actually, let's make this all bigger.  Yeah, there we go.  Hopefully that helps people see it a little bit better.
[00:30:01] And essentially,
[00:30:04] what this is
[00:30:06] is, let me get the code window a little bit bigger here,
[00:30:11] is an SSR example.
[00:30:15] I do it both with render to stream and render to string  just to keep back compat.  And then they both share the same core thing,  but basically the entry point,
[00:30:23] is an Express server.
[00:30:25] on port 3,000 that support sends the static assets, and then everything else gets fed to a render to stream call.
[00:30:33] Um...
[00:30:35] which takes the URL,
[00:30:37] And this is like the most simplistic SSR example ever.  And then from our Beat plugin, we are actually not even Beat plugin.  We don't have Beat here.  This is just using a virtual asset manifest that I--
[00:30:51] that got built the built-in roll up essentially just as like a
[00:30:55] to handle the thing that Beat would be doing.
[00:30:58] Um,
[00:31:00] Thank you.
[00:31:01] And
[00:31:03] The example is
[00:31:05] It's not exactly what we would be doing here, but it's close enough so that the actual code itself is pretty clean.
[00:31:14] It's static. Oh yeah, payback and styles. So in the source folder, what we have is index, which is literally just hydrate app, which is the thing. So this is document level.
[00:31:24] handling and then inside components, we have a bunch of pages. Um, we have a router, which is
[00:31:30] I wrote this router before I even wrote solid router because I literally was just like,  okay, how do you write a reactive router?
[00:31:38] And it turns out,
[00:31:41] fairly simplistically.
[00:31:44] I...
[00:31:46] I probably haven't gone over this example enough.  I recently did update it to TypeScript, which was very much needed, but essentially,
[00:31:55] I wrote it as a, as a hawk, higher level component for those who aren't familiar with it.  And what it does is.
[00:32:02] essentially creates a signal that represents the location.
[00:32:06] and then determines the match.
[00:32:08] Um...
[00:32:10] by if
[00:32:11] the location is equal to whatever you ask it.
[00:32:14] And then if it's in the browser, add some pop state logic.
[00:32:20] And then, which honestly, this could have just been like a unsettled, to be fair, whatever.  I wrote this so long ago.
[00:32:29] And then I make...
[00:32:31] a router context which passes in the location signal,
[00:32:37] And then
[00:32:38] Honestly, yeah, why is this even...
[00:32:41] This could just literally be set location.
[00:32:47] and matches.
[00:32:48] It's funny, over time this has actually reduced
[00:32:51] So I think it's, yeah, set location.
[00:32:54] and matches. This is a pattern you'll see I use a lot, where the reed
[00:33:01] is a signal or store. And then I use an object to express the options on it, like tuple. I pretty much use this pattern
[00:33:13] Au revoir.
[00:33:15] And
[00:33:17] Thank you.
[00:33:20] Not any real router.  This is like, this is like,
[00:33:24] how you'd write a router
[00:33:26] If, if, if, uh...
[00:33:29] Like this is the core mechanics of it. What I like this from a from a from a learning standpoint is the fact that this is all a router is from a core, like at a base level, it does a million other things. So like if you want to make an actual router, you have to you probably want to do path matching and all that stuff. This router does not do that. Like its idea of match is equal.
[00:33:48] There's no like nested routing, no thing.  This is just like...
[00:33:53] If I didn't want to have router in my project and I just wanted to like have
[00:33:57] pages, like single pages and I just switch through the pages, I could like skip having a router and just have this.  So I didn't care about query prams. I think routers have a million other concerns.
[00:34:06] This is the most simple reactive router you could probably design that still
[00:34:11] fully functional with SSR. So that's probably
[00:34:14] Yeah.
[00:34:18] Thank you.
[00:34:18] Yeah, values methods. Yeah, this this is this is this is a great pattern. So
[00:34:25] Yeah, router contacts, you'll see in 2.0 you don't need dot provider. It's a small
[00:34:31] quality of life change. And then use router, simple, use context for the router context, if not router throw, router context is not available. And then return router. So like literally,
[00:34:41] There's nothing here. And then link
[00:34:44] This is before I even switched to the capital A anchor thing, you know.
[00:34:49] you know, maybe that might be fun to do, but whatever. The link is
[00:34:53] Get the set location from our use router.
[00:34:56] Um,
[00:34:58] History push state.
[00:34:59] the path
[00:35:01] from the from the link.
[00:35:02] Props.
[00:35:03] And then set...
[00:35:04] set the location, which is that signal that we pass through to the new path.
[00:35:09] Um...
[00:35:10] And then this just wraps an anchor with class link with this href on click, right?  Because we do prevent default.  But this I mean, what's cool about this, obviously, is you can
[00:35:22] If there's no JavaScript on the page, like it fails, the link still technically works because you encoded the link here and on click doesn't fire, which doesn't prevent default. So this is this is a link that works. And that's that's it. That's a 62 line router, essentially.
[00:35:38] It's just a signal that stores the location.
[00:35:42] What's cool about this and why I think this is kind of illustrative is
[00:35:46] because the way solid 2 is built this router is fully suspense fully transition capable like  it basically does everything automatically like this this this has
[00:35:59] because transitions are implicit now,  like this is basically...
[00:36:03] this simple piece of code.
[00:36:05] is actually like
[00:36:07] relatively...
[00:36:09] I won't say bulletproof, but like it does everything you'd expect it to do.
[00:36:14] This is kind of the power of the model here. But I just wanted to show you so everyone could understand what the code was doing here.
[00:36:23] It's because then
[00:36:25] But my app TSX...
[00:36:28] There's a reason we have file based routing, but my app TSX, I just use the router to get the location and the matches.
[00:36:35] It doesn't need to set the location. That's only handled by the links. You could call set location yourself if you wanted to. All this does is a bunch of lazy loaded components. Profile is not lazy loaded. I'll explain why in a minute.
[00:36:48] But essentially, we just get our page here, which is,
[00:36:52] HTML, head, title, blah, blah, blah. We put our hydration script. This is in solid apps. We need to do this. So this way it starts, it can manage hydration before the framework even loads. We have a bit of an inline script that handles data serialization, streaming capability, event replay capture, like all those stuff.
[00:37:12] And then the body, I don't even know this ID app's needed because it literally hydrates from the head, so this is probably unnecessary. Whatever.
[00:37:21] And then...
[00:37:24] Here's our nav bar, which is a UL.
[00:37:27] And
[00:37:27] you know, a lot of linked tags have like,
[00:37:30] active link and all that.
[00:37:32] I just put a class on it selected when it matches index matches profile.  I mean, this is redundant.  A lot of people will build this into their link component.  The challenge is, and if you've ever used something like Bootstrap,  you know what I'm talking about is it's often not the link itself,  but it's the parent of the link that is is handling this kind of thing.  So yes, there is duplication here because I'm saying path zero matches index,  you know, like
[00:37:55] this but you like
[00:37:57] This is all you need mechanically.
[00:38:04] Thank you.
[00:38:05] Yes, well, not key presses.
[00:38:09] The events... Oh, actually, it does. Yeah, actually, on input...
[00:38:13] Yeah, yeah. It tracks key presses. Yeah. On input, um...
[00:38:18] on click.  There's like three or four. There's like four  events that we do by default. The other  ones you can also like
[00:38:27] You can also like...
[00:38:29] Add.
[00:38:30] add it to your render script and it'll generate it with with other events
[00:38:36] Yeah, so again, CSS people tells me
[00:38:40] that we could do it differently. This is the most simplistic writer you will ever see.  The funny thing is, if I wanted to make this even simpler,
[00:38:48] I'd get rid of the link tag.
[00:38:50] And then I would like use an anchor here and then use event delegation over the whole thing, which is how SolidRouter actually works.
[00:39:00] but you get the idea.  Like mechanically we need,
[00:39:04] one signal location, and then we need a way to ask
[00:39:08] If...
[00:39:09] Like the matches here is only existing just so that we can like select the right tab.
[00:39:15] And then
[00:39:16] Um,
[00:39:17] if we want to know that if we're in a transition,
[00:39:19] we just go is pending location. Again, we just get the signal here and we're like, look,
[00:39:23] is if
[00:39:25] if
[00:39:25] If we're in the process of navigating or something and it's pending, then we just ask it, is pending is just something from solid.
[00:39:34] There's this, we don't need anything special here. We just go, it's a signal like still in flight. Can it commit? It's async. So pretty straightforward. And then we have a loading boundary where when the page is loading initially, because when you look at this, this, the router is just a big switch match. It's switch match when matches this, this show home show profile show setting. So stream and all of these
[00:39:57] are lazy loaded so if you're on a different page you don't load the code for the page you don't need yet.  There's no router preloading or doing anything fancy here. This is just
[00:40:05] And then finally, we put our index.js script tag on the page, make sure it's async so it does not block when streaming.
[00:40:15] And that's kind of the gist of the top level app. Each of these, if you look, are the different pages.
[00:40:20] like home, which is, um,
[00:40:24] Just a signal with an on-settle call.
[00:40:27] with proper cleanup
[00:40:30] Um...
[00:40:32] The
[00:40:33] Thank you.
[00:40:36] that shows a counter, you know, pretty straightforward.
[00:40:41] Profile is the fanciest page because this is how I originally came up with the strategy for data loaders.
[00:40:49] with file system running.
[00:40:52] Again, this demo has been in the solid repo.
[00:40:56] since like the beginning of time almost.
[00:40:59] I use this
[00:41:01] from
[00:41:02] like very early.  This is how I tested initial SSR  back in like 2019-ish time period.  It's how I designed the data loaders  because I was like, okay, well,  how do I want this to work mechanically?  That's what thinking you're in.  So I'm like...
[00:41:19] If instead of making the profile look,
[00:41:23] lazy what I actually want
[00:41:25] is the index route to load the data,
[00:41:30] And then,
[00:41:31] call the actual profile component with that data,
[00:41:35] and the actual profile component, the nested one, is lazy.  Ignore this stuff.  This stuff you're seeing here is something that the Beat plugin actually injects.
[00:41:44] for asset management.
[00:41:46] Pieces if you look here that you'll see them to all this like second home and stuff is the
[00:41:51] The V plugin automatically injects this stuff.
[00:41:56] the that's the one dirtiness in this example i don't have that  so it's you know and the file system router generates it and start and whatever
[00:42:05] The reason it has these keys I showed in a previous stream is so that we can do smart stuff like hold on CSS and we can...
[00:42:15] coordinate asset preloads and all that stuff without doing any extra code. This, this, this example,
[00:42:20] Um,
[00:42:22] I should check it here. I don't know if it's
[00:42:26] actually still doing like does it you still use um
[00:42:31] Virtual manifest.
[00:42:36] Yeah, we don't use...
[00:42:40] We don't use any special like.
[00:42:43] while like analyze, we used to use something in this example for years, which analyze stuff for, I think for preload, but this actually handles all the preload tags and the head and all this stuff automatically.
[00:42:54] This piece here, like you could pretend the solid manifest thing is the V and virtual manifest thing is something that the V plugin already does. So like, um,
[00:43:03] generally speaking, this is just like everything in this file is just like
[00:43:08] followed fucking Vite.  So yeah, this is actually not...
[00:43:12] It's super simple. So anyways, moving back to our example here, my point is,
[00:43:17] Instead of lazy loading the data fetching, the data fetching is part of the main bundle.
[00:43:24] Thank you.
[00:43:25] So this is adding to the main bundle, but then we lazy load the code.  And what this lets us do is fetch the code.
[00:43:31] and do the data fetching in parallel at the same time. This is basically
[00:43:37] the a loader um isomorphic loader right it's not it's not like remixes loader i had this pattern  way before that it's it's it's an isomorphic um
[00:43:49] piece of code that's in the bundle.
[00:43:51] the main bundle on both sides, and when you go to that route, it will load the data, whether it's on the client or the server, and then lazy load the component with that data. And the component itself,
[00:44:02] Um,
[00:44:03] is a little bit more interesting. But let's -- before we dig into the specifics of each  route and how that works, let's start our streamed example.
[00:44:13] on port 3000.
[00:44:16] And...
[00:44:18] Look at this. Okay.
[00:44:19] Ta-da!
[00:44:20] This is our counter, right?
[00:44:23] as I refresh page, you don't see a flicker here because there's nothing async on this page. So the
[00:44:28] that
[00:44:30] the thing was wrapped in a loading boundary, didn't really matter.
[00:44:32] Um,
[00:44:34] The reason this page
[00:44:38] sorry, I guess the settings page is the next page I should show. Settings page. This is proof that hydration works, essentially. And if we check
[00:44:47] There is no...
[00:44:51] Thank you.
[00:44:52] Not sources, console. Why am I...
[00:44:56] Let's look at console, yeah, there's nothing in here.
[00:44:59] Okay, the hydration worked. There's no warnings, no messages, no nothing. Okay.
[00:45:03] Settings was like my next one, whereas like...
[00:45:07] This is like the first Angular demo ever, which was like
[00:45:11] and I type in the box, it adds it in the string, right? And obviously you want to make sure when you refresh the page,
[00:45:16] It also does that and settings
[00:45:20] Unsurprisingly, it's just a signal.
[00:45:23] Um,
[00:45:23] There is a unique ID.
[00:45:25] because we're, I guess this is how I demo the unique ID feature, because this is how you can set a label.
[00:45:31] Um...
[00:45:33] Honestly, mechanically, all this does is when you click on write,
[00:45:37] it highlights, right? The funny thing is that
[00:45:40] Yeah, when you click on write,
[00:45:42] it highlights this.
[00:45:44] That's what all the label does when you need the label for. I think I might have also did this to
[00:45:49] dub it in React's face that you can just use for in solid back in the day.
[00:45:53] But this is the basic text input.
[00:45:57] ID, value,
[00:45:59] text on input update that text nothing really fancy here
[00:46:06] you
[00:46:08] But I'm working my way up.  Sorry, what do we hear?
[00:46:18] I like Solve, but I don't get the incentive in learning it would be given the web dev is pretty much an AI wasteland now.  I mean,
[00:46:25] Thank you.
[00:46:27] Some things can't
[00:46:29] There's this...
[00:46:31] I'm not saying that...
[00:46:34] certain trends aren't going to impact us forever in a certain sense,  but there's also some things that are not sustainable. And,
[00:46:41] Measuring on lines of code is, I think everyone, you can kind of fundamentally understand that this is not something that could ever persist.
[00:46:48] You know what I mean? Like...
[00:46:50] It's it's it's moronic.
[00:46:52] Mike...
[00:46:54] The best code I write has the least line of code. So like these things are against each other to the point that
[00:47:02] Anything that people think they know right now, they don't know.  So I wouldn't worry about that.  The real concern is whether people think that like frameworks aren't necessary  or I'll just use React or just use default option.
[00:47:13] Tanner wrote something actually really apt about that. Let's
[00:47:20] Maybe we can find it.
[00:47:22] And I think he's 100% on this. Where is Mr. Lindsley?
[00:47:27] All right.
[00:47:30] Because he was talking, obviously, going from next to Tanstex Darps.
[00:47:35] Ironically, I think the shift to AI should actually increase 100 times, I should bookmark this, the thought and care you put into framework and toolkit selection, even if it takes 100%.
[00:47:43] hundredth of time to implement.
[00:47:49] Thank you.
[00:47:51] Nice manual student talk at a
[00:47:55] um react summit
[00:47:59] Anyways, we'll talk about the React server component stuff with TANStack a bit later.
[00:48:05] It's just...
[00:48:07] Anything people think they've concluded about AI right now, they're probably wrong.
[00:48:12] Probably.
[00:48:18] Yes, you can have an individual loading wrapper. And the profile example will show that in a second.
[00:48:32] Wasn't that a joke in the 90s?  Yeah, yeah.  And that's the other thing.  If you've been around long enough,  you start seeing the same trends kind of...
[00:48:38] wrap around again.
[00:48:43] The devaluing of popular languages, very much to the system going back to the 70s, there's always been a drive by good energies to move away from commodities.
[00:48:50] I mean, it is on us.
[00:48:54] So we have to be vigilant, but
[00:48:56] You know, whatever.
[00:48:58] you know, like...
[00:48:59] I'm not worried about that.  Like, that's just not...  This is just not something that...
[00:49:04] that fits into my reality of where things are at. Like people, there's a whole narrative of this  stuff on, on, you know, X or whatever, but you learn just to kind of ignore it because it's just, it's noise.
[00:49:16] Anyways.
[00:49:17] I'm getting there because each example is going to build up, right?  So obviously...
[00:49:20] Simple, right? I do love the little details here that solid 2.2.
[00:49:25] makes a little bit cleaner, perhaps. But
[00:49:30] Not a huge thing here. So profile was the original one here because let's look at the profile page.
[00:49:37] prop.user, which is the first, actually let's look here.  We load a user and then we purposely cascade loading the info.  Now don't get me wrong.
[00:49:46] In a real app,
[00:49:47] If you have the user ID,
[00:49:49] You should be able to load these
[00:49:51] in parallel. This example I built purely to show how cascading data fetching works.
[00:49:57] Um...
[00:49:58] It's something you want to avoid.
[00:50:00] But...
[00:50:01] This...
[00:50:02] This is pretending like you can't grab the info until after you've loaded the user, right?
[00:50:08] You can see it. Create Memo.
[00:50:11] fetch it, right? That's what the new promise is. And then here for info, get the user and this. This is basically
[00:50:18] a test case that I've been running for years because I wanted to show that the data waterfall. So user has to resolve before info can resolve.
[00:50:27] or even be fetched.
[00:50:28] Inside the page,
[00:50:30] There's a separate loading boundary
[00:50:32] See, out here we're just reading user, so it can independently load from
[00:50:38] info.
[00:50:38] which is just a for loop over this in its own loading boundary. Now,
[00:50:45] Let's go here back to profile, and you see it there. See when I navigated to the page?
[00:50:54] Well, actually, let's start with here. Let's load the page. Loading, loading, double loading.
[00:50:58] loading, loading, right?
[00:51:00] But when I went from here to here,
[00:51:03] you didn't see the top of the loading. The reason is the top of the loading is an existing loading boundary, not a new one that came with the page. So it's part of the transition. So basically the thinking here is initially you don't have the user, you don't know the user.
[00:51:16] you're going to have to show
[00:51:17] some kind of UI loading schedule thing.
[00:51:21] At least that was the thinking. I'm going to show something different about that in a minute. Right. But with the transition,
[00:51:29] we actually hold
[00:51:32] this page until we've loaded the user at least. And then we only, but we're like, it's okay. Like most of these pages, they're not async, but as you move around, you don't see the loading indicator.
[00:51:44] This one's like, look, we want to wait on this, but we don't want to wait on this.  We put a nested loading indicator to suggest that we want to be able to like,
[00:51:53] we're fine when this is available. And all it does is hold the page a little bit. You barely see it. It goes gray for just like the tiniest
[00:52:01] Bit?
[00:52:03] But it works.  And this is why this initial example is a counter.  Because you can see it's still counting up.
[00:52:10] while it's switching.
[00:52:12] which is very important because even though we've switched, our switch statement has gone to the next page,
[00:52:18] this counter is still active.  Reactive updates are happening on the page in front of you.  And if you look at the code, you're just like,
[00:52:25] How was that?
[00:52:26] possible, right?
[00:52:28] Because I mentioned transitions earlier. Solid has implicit transitions now. So you don't think in terms of transitions. I showed you what the router was. The router is just like setting a signal, right?
[00:52:40] The app is just a giant switch statement, right?
[00:52:43] Okay.
[00:52:45] that graying out that you're slightly seeing
[00:52:47] is
[00:52:48] is this is pending, setting a class on here briefly.
[00:52:53] Right? So...
[00:52:55] Essentially, if I went into the profile page and said, "No, we want this to be longer. We want this to..." No, this example doesn't have HMR.
[00:53:04] Um...
[00:53:06] So I'm, and it's cascading, sorry.  I just, let's make the first...
[00:53:10] like even longer. Okay, let's go here.
[00:53:13] And then I'll go string build.
[00:53:17] Obviously I can update this, the biggest tools, but
[00:53:20] This is my baseline with nothing. No beat, no nothing. This is the most minimal example. When I switch here, you're going to see it's going to hold a little bit longer here.
[00:53:28] Hopefully you can see that where it's gray and still counting up.
[00:53:33] Right. That's the pending coming in.
[00:53:36] And technically,
[00:53:38] During that...
[00:53:39] 800 milliseconds of time here where I have my simulated fetch
[00:53:44] what's happening
[00:53:48] Let's go back.
[00:53:50] What's happening is...
[00:53:53] Even though this is a switch statement, both this reality and this reality exist at the same time.
[00:53:59] And this is something built innately into the reactive system. It is not a compiler, it is not
[00:54:04] any like
[00:54:06] special like
[00:54:08] wired code that we built in the router or like...
[00:54:12] something inside switch and match that like is special switch and match could literally be a bunch of ternararies, you know, like, like just simple memo. It's something core to the reactive system that when async is pending, we can have a, I'm calling it zombie. I don't have a good idea, but we can have a zombie reality on screen while a second new, uh,
[00:54:34] speculative reality lives off screen. And this is just a feature of the reactive system itself.  So that's why I've used this demo forever. Um,
[00:54:46] because
[00:54:49] of this feature right now.
[00:54:53] There are some questions about managing the loading a moment ago, and I got this working now, which is kind of exciting.
[00:54:59] What happens if I remove this loading?
[00:55:03] fallback around the whole switch statement.
[00:55:06] Generally speaking,
[00:55:08] This is not...
[00:55:10] something you want to do.
[00:55:11] And to be fair, I've shown in previous demos on SolidStreams where I've just had like remove the loading and
[00:55:18] It works.
[00:55:20] The problem is, and I've changed this now in the rules in Solve 2.0, is if
[00:55:26] If there's no loading boundary,
[00:55:28] Thank you.
[00:55:29] above.
[00:55:30] you can get what I call unpredictable pairing, which is this idea that like some stuff waits on async and doesn't come in, even though it's granular.
[00:55:37] you'll see some stuff and not other stuff, just because like some stuff's blocked and some stuff's not.
[00:55:42] So I made a rule.
[00:55:43] Um...
[00:55:45] in Solid 2 that I never had in Solid 1, which was like...
[00:55:48] If there is
[00:55:50] Async read, like an example of an async read is...
[00:55:54] reading this, sorry, in here, reading this
[00:55:58] this user, right?
[00:56:00] Actually, you know what?
[00:56:02] Bye.
[00:56:04] Why is this?
[00:56:06] It's not possibly undefined. Why do you think it's possibly undefined?
[00:56:09] I haven't actually updated the types here.
[00:56:12] User is not possibly undefined.
[00:56:15] Info is not possibly undefined. Sorry. This thing's out of date. Now you're like, am I lying? Will this cause this to error?
[00:56:22] Well, it won't because user is not possibly undefined.
[00:56:27] user is an access or abuser, even though it's async.
[00:56:31] Sorry, funny, I forgot to update that way better.  My point is this user
[00:56:38] is potentially async. This is the first async read. It is above this loading boundary. So if
[00:56:45] I went in here
[00:56:46] and remove this loading boundary like I just showed here,
[00:56:53] It's possible that...
[00:56:56] If
[00:56:58] Thank you.
[00:56:58] it could like
[00:57:00] block this but still show this
[00:57:04] That's inconsistent. You get there. We don't throw away the whole component.
[00:57:08] It would just like
[00:57:09] You do.
[00:57:10] blanks profile and then um and then um
[00:57:15] The sector could be for you.  And then their name would pop in later, which is...
[00:57:19] weird as hell, right? So
[00:57:21] I...
[00:57:23] I like React. I took the fact that if you don't have a top level loading boundary,
[00:57:31] You know, like that's an error, right?  You should have a loading boundary, at least above the top of sync read.
[00:57:37] Except...
[00:57:38] during SSR.
[00:57:40] If we have SSR, this concern goes away.  Kind of like in React server components, this concern goes away.
[00:57:47] And the reason for that is everything is implicitly a transition.
[00:57:50] See, React Server Components has that same kind of behavior, so it's fine.  See, the problem in classic client-side apps is you can't just say, "Oh,
[00:57:58] will handle it in a transition because you can't,
[00:58:01] Like if you noticed in our application, when we switched between pages,
[00:58:08] Thank you.
[00:58:09] Here.
[00:58:10] Um.
[00:58:13] there's this transition, right, that we're doing.  And we never show this top level loading again,  even though we can hold it.  And the reason is,
[00:58:24] because it's a transition, we don't have to worry about that tearing.  We were fine.  It's but you can't really transition
[00:58:30] effectively when there's nothing there in the show in the first place.
[00:58:33] That's why the loading boundary should be there.
[00:58:35] But
[00:58:36] On SSR, when it's from the server, you do have that content.
[00:58:42] Right.
[00:58:43] Assuming
[00:58:44] that if there's no loading boundary you just
[00:58:46] hold flushing the whole stream, which honestly isn't great, but it's like old school, like old school.
[00:58:53] React, or SSR, if you wanted to send the page...  People didn't stream.  They just...
[00:58:59] They just...
[00:59:00] waited for all the async and then rendered everything.
[00:59:04] So,
[00:59:06] if
[00:59:07] you could guarantee that the content was there on the server,
[00:59:11] before you hydrate it, before you even send it to the client.
[00:59:14] then
[00:59:16] you don't have to worry about that weird, unpredictable pairing problem.
[00:59:20] And when you go back to that page or ever trigger it again, because it'll be client side only navigation, you'll have a transition to guard you.  So technically speaking, with SSR, we can remove that top level loading boundary.
[00:59:32] And what ends up happening is
[00:59:35] Um,
[00:59:37] We just wait.
[00:59:39] if we're on this page per user.
[00:59:42] And just don't wait for this.
[00:59:45] So if I start the stream with this update,
[00:59:49] Actually, did I build?
[00:59:52] So.
[00:59:53] And then start.
[00:59:56] What should happen is this behaves the same.
[01:00:00] But now when I refresh the page, what you're going to see,
[01:00:04] is there's no initial loading, just only this that's loading, because the page actually waits for John to load
[01:00:09] before it flushes.
[01:00:11] And then it shows us. Now we have ways to do this already with specific, like async things, say first stream. But now we have a behavior that
[01:00:21] If people do async above the top level loading, we just
[01:00:24] like hold the page flush um
[01:00:26] to manage this. So, you know,
[01:00:31] The funniest thing is,
[01:00:35] This is like the PPR thing.
[01:00:38] where everyone's like, PPR gets rid of loading spinners.  I'm like, PPR doesn't do it.  What gets rid of loading spinners is strategic holding spinners
[01:00:48] of
[01:00:49] of the page and obviously with PPR you cache it so that it's synchronous so it's not like
[01:00:55] you know, putting in the extra
[01:00:58] like waiting on anything, but it's mostly just a structural thing. It has nothing to do with PPR.
[01:01:03] Um,
[01:01:11] Yeah, sorry. I already did, but I'll do it one more time.
[01:01:14] Can we make it one more bigger? Yeah, okay, let's do that.
[01:01:19] I'll make the chat a little bit smaller. Maybe I can just collapse the AI.
[01:01:24] Uh, not that way.
[01:01:28] Poggle agent.
[01:01:29] Yeah, let's do it that way. There we go.
[01:01:34] Thank you.
[01:01:37] I just have my face closed.
[01:01:40] That's lovely.
[01:01:43] Um...
[01:01:46] Yeah, sorry. And actually,
[01:01:48] If I do this,
[01:01:51] because I'm just blocking my own terminal that you guys probably don't care about.
[01:01:56] the code will be even a little bigger.
[01:01:59] Um,
[01:02:01] I don't think it blocks any of the example here.
[01:02:04] But do you get what I'm saying, the difference?
[01:02:06] Because there's no outer loading boundary now,
[01:02:09] when we load the page, it waits for John the same way
[01:02:13] This waits.
[01:02:17] before it does this, right?  If we put the loading boundary in,
[01:02:22] on the outside.
[01:02:25] Which, to be fair,
[01:02:28] if we're doing a CSR app would be necessary because there's no
[01:02:32] page the show.
[01:02:34] Um,
[01:02:39] We get that slightly different behavior.
[01:02:43] Sorry, not there.
[01:02:46] where it loads and then loads and you get the double cascade. But,
[01:02:50] This example,
[01:02:52] You can also design your code not to double cascade.  This example is just purposely trying to show what the double cascade looks like.
[01:03:00] Right.
[01:03:03] So,
[01:03:04] This is a, this, removing the upper loading boundary trick is something that React does with server components, but we can get away with here because everything's automatically transitioned, um, which is nice.
[01:03:16] Um...
[01:03:17] So yeah, I love this example, as I said, because it shows parallel data fetching.
[01:03:22] And it also shows just like
[01:03:25] very subtly
[01:03:28] Like,
[01:03:28] the await being up here essentially, because we could access our user.  And that's passing down to this profile component.
[01:03:35] that you know
[01:03:37] like,
[01:03:38] You know, let's go super aggressive.
[01:03:40] I'm not saying you should do this.
[01:03:41] because obviously we don't want to wait forever.  But let's say I don't really
[01:03:47] know what I'm doing with Solid. I haven't made any decisions on stuff.
[01:03:51] I'm just going to
[01:03:54] I'm doing SSR and I just
[01:03:57] Thank you.
[01:03:58] I'm going to have no loading boundary. Like, screw it. Let's get rid of all the loading boundaries.
[01:04:06] So, profile doesn't have a loading boundary. And keep in mind, with no loading boundary here,
[01:04:14] This is the lazy component too.
[01:04:17] So like, even though
[01:04:19] There's data fetching, there's lazy component loading,
[01:04:23] And there's no loading boundary. It's not around the first data.
[01:04:27] It's not around the second data. We're just trying to show everything we can. This component
[01:04:32] is oblivious that async
[01:04:34] even exists. It's like I get an info and I get a user. Okay, done, right?
[01:04:41] Let's do this.
[01:04:43] What's our base experience? I'm not going to say it's a great experience, but it is an experience. I think controlled loading is actually a very important thing.
[01:04:52] our base experience at least is,
[01:04:55] Um,
[01:04:56] is that when I load the page,
[01:04:59] It loads.
[01:05:00] And the funny thing is because
[01:05:02] You don't even see the flickers.  Browser's paint hold.  So, like, if you don't want to stream, it's okay.  You know what I mean?  Like, just...
[01:05:08] Thank you.
[01:05:10] It shows the page when it's loaded. This is the classic SSR example, right?  And then when you navigate away and come back, the transition just holds a little bit longer.
[01:05:17] Right?
[01:05:19] um
[01:05:20] But.
[01:05:23] Again, I didn't make a transition. I don't even know how to call it because the challenge here is we don't have transitions. We just have good async default behavior. So it's like, do I even call this a transition? I don't even know.
[01:05:36] the challenge of not calling a transition is Svelte has a very similar feature,  but Svelte doesn't have the guarantees of transitions like React does. So it's like,
[01:05:44] How do you...
[01:05:45] say it's just async like Svelte, but then be like, but we're doing like way
[01:05:49] more better stuff than Svelte.
[01:05:50] It's trickier from a language standpoint. You almost want to name the thing. But naming the thing makes it too heavy, too much. You don't need to.
[01:05:59] Wow, it works.
[01:06:00] Um,
[01:06:01] And
[01:06:04] If you want a loading boundary, you're like, you know what?
[01:06:07] Guys.
[01:06:08] I was looking at the UI.
[01:06:10] today.
[01:06:11] And
[01:06:12] I don't like how long this page takes to load.
[01:06:15] like really awkward, even when we're like switching, it's like, why are we waiting for this stuff when
[01:06:21] we don't need to like we just we can show the top of the page first.
[01:06:26] This area here, we can just defer it.  It shouldn't be blocking the navigation.  It's just like extra information.  You know, like, okay, well, no problem, guys.  I will just come in here and wrap this in its own individual loading boundary.  That way it's not going to hold things up.  And...
[01:06:40] Um...
[01:06:41] Thank you.
[01:06:41] Thank you.
[01:06:43] Let's deploy that and
[01:06:45] Okay guys, look, see, now you're not waiting for it anymore.
[01:06:48] much faster navigation. Okay.
[01:06:51] So...
[01:06:52] You know, like that's
[01:06:55] That's the goal here, right? You want these pieces to be movable. You want loading to be something you decide from a design standpoint, not from a mechanical, like there might be a mechanical aspect here because you're like, this is taking particularly long to load, so I don't want to block this. But it's also kind of like,
[01:07:16] It.
[01:07:17] placeholders and affordances are a design issue.
[01:07:21] They're not a...
[01:07:22] Like it is where design meets technology, like, but it's not like,
[01:07:29] People should be able to just like move them wherever they want.
[01:07:33] Thank you.
[01:07:37] Thank you.
[01:07:39] We have stuff like that built into SolidStart, but it's not like something in the core of the framework, right? SolidStart, it's not, I don't know if,
[01:07:50] I forget if we actually have like known bot thing,  but we have a mechanism that if you know what bots use,
[01:07:57] and this could be like a plugin or something for start i suppose
[01:08:01] You can just change the render mode.  It's very easy to say, like...
[01:08:07] Just wait, hold.  The biggest problem is, as mentioned, is
[01:08:11] Uh,
[01:08:12] Out of order streaming.
[01:08:14] requires JavaScript.
[01:08:17] Yeah.
[01:08:18] I mean, these are async transitions, but the thing is, the reason
[01:08:22] I don't
[01:08:24] This is
[01:08:25] a great default.
[01:08:27] Oh.
[01:08:28] Thanks.
[01:08:29] Yeah, this is okay. But the problem is, where are the transitions, you don't see the transitions
[01:08:35] in the code.
[01:08:39] Like...
[01:08:40] That's the challenge.  This is just...
[01:08:43] These are async transitions. It's just they're just
[01:08:45] It's just not obvious.
[01:08:48] from the code.
[01:08:49] which is what makes this a little bit awkward.
[01:08:57] Okay, let's go on to the next example.
[01:09:01] The only reason I keep on adding the...
[01:09:04] the loading back to the home, because I actually don't even really care to have the loading in the home here, is because
[01:09:11] the render to string example that I share this repo, I showed at the beginning, I made it render a stream, render to string. Render to string,
[01:09:18] can't handle async.
[01:09:21] that's outside of a loading boundary because it's literally in the signature.
[01:09:26] Stream returns either a stream or you can .venn it.
[01:09:31] like promise it and wait for the whole thing. But the problem with string is
[01:09:35] You can see it visually here. RenderToString returns HTML. Why are we not getting types here?
[01:09:46] It's being slow, whatever, it doesn't matter.  My point is it can't await.  It has to, on the very next line, give you your HTML.
[01:09:54] Which means that there is no opportunity...
[01:09:58] for it to wait. What if that lazy component hasn't loaded on the thing? This example works perfectly fine with all these. The reason I keep this around is this demo, even though it has all these async features,
[01:10:09] works perfectly fine with renderToString.
[01:10:11] We just render as much as we can, and if it hits loading,
[01:10:17] that's also just like fine rule to show the fallback.  And then the client is,
[01:10:21] picks up after hydration and finishes out.  It does the data fetching,
[01:10:27] uh,
[01:10:28] Because we can't even serialize the data fetching with rendered string because there's nothing to stream. It literally has to render what it can so it will try to data fetch on the server and then go.
[01:10:43] basically you just shouldn't use async with this but like in theory
[01:10:46] I have this whole testbed set up so that like render to string completely works.  And what it'll do is it'll fetch on the server.
[01:10:52] detect that it's like
[01:10:55] fall back.  And then when it gets to the client,
[01:10:57] hydrate the fallback while fetching
[01:11:01] on the client the data and actually finishing the loading boundaries traditionally. Whereas like in the streaming example, we don't fetch again on the client, the data just streams over the wire.
[01:11:15] essentially. So we fetch on the server, when we get the client, we match up the serialization IDs and we just stream the data straight across. We don't actually ever refetch.
[01:11:27] But with rendered a string we can't do that.
[01:11:33] Thank you.
[01:11:38] I mean, for solid start, the way that we do it is we actually have a mode switch, which is like in the middle, like at the render level, like the render handler, you literally just go like, if this is a mode switch,
[01:11:55] change the mode to async instead of stream. Um,
[01:11:59] For like...
[01:12:02] I don't know. I think it is...
[01:12:05] I think there's an example
[01:12:07] which gives advice on how to do that.  I think it's like in the docs,  but yeah.  Yeah.
[01:12:13] Thank you.
[01:12:16] So yeah, that's the only reason why I keep on going back here,  like out of like to just keep on adding back
[01:12:22] the the the loading here because
[01:12:25] We need the loading here.
[01:12:28] It's kind of funny because what it means is with render to string, the very first time the server starts up, it will hit the lazy component unless you preload it, obviously.  And it'll actually stop right here, like even on home.  So it'll render the fallback even on home.  And then the client will pick it up and go.  If...
[01:12:47] But the second time you hit the server, where the server's already loaded the lazy component,
[01:12:53] and then it hits a sync page, it will actually just render the whole page, and then the client will hydrate that part.
[01:12:57] So there's like this weird disconnect. RenderString really shouldn't be used anymore.
[01:13:03] But
[01:13:04] Um...
[01:13:06] obviously still support it. Rendered a stream on the other hand,
[01:13:10] is smart enough that like in both cases it can manage things in a reasonable expected way um
[01:13:18] You still have that same wait for async on that initial load on the server, but
[01:13:25] But.
[01:13:27] Like...
[01:13:29] It doesn't change the mode that now suddenly something's running on the client on the server. It continues being server-driven with the stream. When the lazy resolves, the server renders the content and that gets swapped in for the fallback.
[01:13:44] So anyways, I'm going to...
[01:13:45] I'm gonna just put this back in before I forget because I'm just gonna leave it there, but the control is the key.
[01:13:52] Okay, let's look at the next example in this. What's the next page that we have here?
[01:13:59] Stream. So what is stream?
[01:14:01] Stream is
[01:14:04] Oh yeah, async iterator. This is how I test async iterator. So picture
[01:14:09] Your data on the server now is a list
[01:14:12] Maybe it's coming from AI or something. Maybe it's like LLM response where you're getting a stream of data.
[01:14:21] And then it gives you an update every second.
[01:14:24] And then the stream example does two things. It tests an async iterator memo that
[01:14:29] grabs that accumulates
[01:14:32] that value. It looks like it's actually dipping it each time. Is that the way I want to do this?
[01:14:39] Well, I guess actually sort of for memo, you have no choice. Yeah, of course. It's literally accumulating and getting new list each time. And then a projection, which this is my favorite one.
[01:14:50] It's actually pushing the value
[01:14:54] each one, so it's actually doing a granular update of the stream data.  So instead of recreating the array every time and saying this is my memo value,  the projection, which is a store, is just pushing the new value on the end,  which is interesting because when you write this code,
[01:15:07] That's what you write, it makes sense.
[01:15:10] But what's odd about it is
[01:15:13] is when you think about it is when you run the code on the server
[01:15:18] Yes, the server is getting the new value and sending it across the wire or pushing it on, but the client also hits this code.  So the client has to go, "Okay, I'm hydrating an async iterable.
[01:15:30] How do I like...
[01:15:33] How do I manage this right because you don't want to be like you want the server stream to come to the client?  Now there's different modes.
[01:15:42] We have like a hybrid mode, which only takes the first promise from the server and then the client takes over.  However, the default is actually that the server is a source of truth.  And just like with promises, the server continues sending its values over the wire and the client continues receiving them.  The funny thing is this is obvious.  When you have a memo, you're actually sending...
[01:16:01] the whole value, you're sending
[01:16:03] array,
[01:16:04] um,
[01:16:05] you know, value zero, array length two, three, four, five, because you you're just keeping on
[01:16:12] It's a stream.
[01:16:13] of what you're returning. What you're returning here is
[01:16:17] is this, uh,
[01:16:18] accumulating array. Now, if you were
[01:16:22] Doing this a little smarter, you might have the...
[01:16:27] The memo.
[01:16:29] Only...
[01:16:31] read, not do the accumulation and have something downstream of that memo doing it.  Like, so basically the async thing here, that's like managing this just gets the value and then you'll like accumulate outside.  So you're not sending over the wire, this duplication.  But the reason I'm not worried about that is because we have the projection version, which is much nicer because what the projection is doing is.
[01:16:51] you might be going, okay, well, if it's not yielding anything, and it's just pushing this into a value,
[01:16:56] How's the client getting the value across the wire? It's because
[01:17:01] built into solid with projections with async iterators, we actually created a  patch format that streams over the wire.  So we actually diff like, like.
[01:17:11] whatever change you make to the projection  in each iteration gets sent over the wire.  So we don't have to send a snapshot like we're doing here.  We're actually only sending what changes,  which is really cool because down here,
[01:17:24] Each of these examples feeds into
[01:17:27] two different scenarios.  Again, they have their separate loading, but
[01:17:30] We probably didn't even need this.
[01:17:32] to be fair.
[01:17:35] whatever, it doesn't really matter.
[01:17:38] But each the memo
[01:17:41] goes into a for loop, which shows the ID in the text. That means that every time MemoItems updates,
[01:17:48] It has to re-render first the first item, then both items together, or three items. To be fair, this isn't that different than any other reactive update if you're just using signals. You just end up like...
[01:17:59] doing the work here because
[01:18:03] It first does one item, then it gets two items, and then a different object makes two items, three. This isn't very efficient.
[01:18:09] This side, though, I love.
[01:18:11] because it's using the new repeat component and what the repeat component does  is it doesn't get the array look it just cares about the length
[01:18:18] And because
[01:18:20] This is a store that's only getting the values pushed to it from the server.  So the server is literally going each value, push it on.  And then the client goes, OK, get the patch, push it on.
[01:18:30] It doesn't need to re-render or update any of the other rows.  It literally just goes, okay, there's a new row, length has increased.
[01:18:37] just add the new row with the new...
[01:18:41] Um.
[01:18:42] with the new value. So there's no, there's no diffing. This is end to end zero diffing. Just add the item to the end of the list. Um,
[01:18:51] So this is a great example of why projections are super powerful here. Because we built in the patch format, this just works automatically that the server rendering, the original SSR that grabs your stream, will automatically
[01:19:05] send patch updates over the wire all the way to the UI, which also doesn't have the diff and can  accept those patch updates.
[01:19:13] The renderer still diffs, yes. The DOM level renderer still diffs.
[01:19:18] But if you've ever
[01:19:21] If you've ever seen...
[01:19:24] the internals of which I've shown on stream previously of like the reconciling and, and
[01:19:30] It's so funny because...
[01:19:34] he's kind of
[01:19:36] React doesn't do this is why it gets penalized a bit, but the JS framework benchmark, which has pushed everyone through hyper
[01:19:44] you know, on reconciling large, like 10,000 row tables.  The trick to why the fastest frameworks are the fastest is not purely algorithmic.  There's always the part that needs to be sorted, which the algorithm matters.  And we do...
[01:20:00] have a good algorithm there not the fastest that we've had actually at one point solid had an algorithm that was like
[01:20:06] three times more code, but was slightly faster than our current algorithm. But
[01:20:12] or sorry, slightly
[01:20:14] faster on the
[01:20:15] what I call the worst case scenario,  which is like when you actually have to do the sorting.
[01:20:20] It does it in a couple less moves or whatever.  But most...
[01:20:25] The way that most framers get performance out of the DOM, uh,
[01:20:30] Reconcile part is the shortcut. They use algorithms which attack the list from both sides.
[01:20:37] And when they see that it has the same thing, it just skips over them.  So it's a very quick, it's basically minimizing the range in which their actual changes happen.  So adding stuff to a list.
[01:20:46] the whole, it'll just go same, same, same, same, same, same, same, same, same, same, same, same, oh, something.  It's like, it's very, very cheap.  It's not doing anything fancy.  It's not like comparing the different row orders or something.  It's essentially just like a very quick sweep of everything matching.  So adding to the front or the beginning...
[01:21:04] Um,
[01:21:06] Either side, very, very cheap.
[01:21:09] Okay.
[01:21:11] Even with swaps.
[01:21:13] Like,
[01:21:14] Very, very cheap because it'll find, it'll go from the beginning until it finds the things.  And then this one's swapped with this one.  It's cheap.  It basically everything but a random, random sword goes.
[01:21:25] can be
[01:21:26] trivialized from a performance standpoint, which is why stuff like the JS framework benchmark doesn't actually capture the cost of really complicated reconciliation. You have to use like UI def or something. But my point is that
[01:21:39] For
[01:21:41] exactly these kind of cases, the diffing at the DOM level is dirt cheap, um, because it's literally just like, it does scale with a number of elements, but so like the ideal, ideal solution would get away from the declarative diffing definitely. But, um,
[01:21:57] It is literally just...
[01:21:59] a
[01:22:01] a sweep of like same depth,  same depth,  same,  like,
[01:22:04] Equal check.  Nothing deep.  Nothing like comparative.  It's literally just like...
[01:22:09] Does this div equal what we think is there? Yes, yes, yes, yes, yes, yes, yes, yes, yes, yes, yes, yes. Do that even...
[01:22:14] 10,000 times as
[01:22:15] Dirt cheap.
[01:22:19] Thank you.
[01:22:22] and behavior. Uh, you repeat, uh, is not, I don't stack is not how it works. I mean,  technically it is like if you make the length lower and higher,
[01:22:34] Um...
[01:22:36] It does only drop off the last couple or have them on like the, because the index don't work.  So technically, yes, it is like a stack.
[01:22:44] It can also act like a cue too.
[01:22:48] because you can use a from on Compete, so you can actually use a windowed, so you can actually move it through a range, and then it'll only like add the ones that are on the end and drop off the ones on the other end without touching the ones in the middle.
[01:22:59] Obviously four can handle this, but four is like your more typical, um, diffing algorithm. What's cool about using only count and length here is repeat is not aware of the list. So when stuff changes or moves, it's literally the fact that this is a store like that, like that.
[01:23:16] it's basically non-keyed where 4 is keyed.  Where it's like, oh,
[01:23:22] it's like you reactively updated
[01:23:25] What's at item's eye?
[01:23:27] If you didn't update what's at that
[01:23:29] index, nothing's going to update. So it turns everything hyper granular in a non-keyed way.
[01:23:38] because you could also just like change the list and instead of
[01:23:41] Like basically if the length doesn't change, repeat doesn't run. So if you had
[01:23:47] *laughs*
[01:23:48] 10...
[01:23:49] items in a list and you replace them with a completely 10 different items in the list
[01:23:54] Repeat doesn't do anything.
[01:23:57] It's just that this binding here, when it goes, oh, whatever at index one has changed, will trigger.  Index one will change, will trigger.  So these bindings will change, but there's no...
[01:24:06] repeat does zero work.
[01:24:08] Um...
[01:24:10] That's the definition of non-keyed.
[01:24:11] It just it's something to keep it.
[01:24:13] keep into consideration here that you can see it right from the arguments, like essentially
[01:24:18] Keyed or repeat doesn't manage the reactivity for you.
[01:24:23] So if you have...
[01:24:24] as I said, items like this that don't change, chats are generally good things.  They don't generally aren't that editable and you, and you're just adding stuff to an end or something.  Repeat is incredible because essentially it doesn't do any extra work for stuff that's fixed.  It doesn't do any diffing. It doesn't trigger. It doesn't trigger like to be fair.
[01:24:41] Stores have that quality like the old to do app if you hit done undone that doesn't change the list doesn't add items and
[01:24:48] four doesn't trigger. Like if you're just like changing the text on this four doesn't
[01:24:52] 4 doesn't trigger. But,
[01:24:55] Um...
[01:24:57] repeat takes that further because of the shape of the solution
[01:25:00] unless length changes doesn't trigger, where four will change, um,
[01:25:05] will trigger if like indexes change.
[01:25:09] Okay.
[01:25:13] So
[01:25:14] Anyway,
[01:25:15] Uh...
[01:25:16] This example is a little bit simple.
[01:25:20] Side note, just before I move on, last thing I want to show us, if I refresh this quick and then navigate while it's thing, we can interrupt the streaming without...
[01:25:27] worrying about weird stuff happening.
[01:25:31] I just want to point that out. We've we've gotten very good
[01:25:35] at our hydration technique in 2.0, where it actually, when it goes to hydrate a part of the page,  it actually snapshots what it expects from the server. So it's possible for it to hydrate
[01:25:48] with the expected value and then apply new changes on top
[01:25:53] even though
[01:25:54] a lower section hasn't hydrated yet because that lower section will still see the snapshotted  values when it hydrates and then it'll apply it on top which means that we've completely isolated  hydration from reactive change which is amazing because it means premature cancellation that was  happening while streaming while people are like clicking buttons while things streaming doesn't  happen anymore which means handling stuff like interrupting streaming while navigating  doesn't cause weirdness everything just works perfectly we've kind of fixed streaming hydration
[01:26:24] because you have the same concern here when the stuff's streaming from the server. You want to make sure that the
[01:26:29] that it works. Now, this is the accumulated ray and this is the push ray.
[01:26:34] The demo is a lot less interesting than the code you needed to write.  But as you can see,
[01:26:39] these just stream in one at a time.  This isn't using loading or anything.  This is just literally a streamed data source.  The loading here,
[01:26:48] was just so that
[01:26:50] when it shows the first item,
[01:26:53] It, um...
[01:26:56] it has a placeholder. If we got rid of the loading here
[01:27:00] on
[01:27:01] on these. Let me see what
[01:27:05] I haven't tried this yet, but this is part of the game here.
[01:27:10] this should trigger the top level loading.
[01:27:13] Um...
[01:27:15] Never tried this, so we'll see if it works.  But if I'm right,
[01:27:20] then
[01:27:21] What should happen is when we load the page, we'll see this loading until the first item shows up.
[01:27:27] Bye.
[01:27:28] Do we have a bug with our projection code?
[01:27:32] We do. Lovely. Okay, cool.
[01:27:35] This is something for me to dig into.
[01:27:37] Let's see what happens when...
[01:27:40] when we remove this loading too.
[01:27:43] Let's make the whole thing
[01:27:46] Do that. All right.
[01:27:50] It's why
[01:27:51] This is why we play with this.
[01:27:54] Now it should...
[01:27:55] Yeah, OK, so it's just in general without the loading around, we have an issue. Sweet. But you see that now it waits for the whole page.
[01:28:03] Before it shows it?
[01:28:04] You don't even see the flicker because of that.
[01:28:06] Um...
[01:28:08] And this one
[01:28:10] Yeah.
[01:28:11] The client side works. See here now, this page with no loading anywhere.
[01:28:16] just holds the transition until that first item shows up and then it streams it in.  I just wanted to show because there is a slight difference between having streamed data sources and loading boundaries. Loading boundaries only care when it doesn't have a value.
[01:28:29] So essentially...
[01:28:32] Once it gets its first value,
[01:28:34] were considered loaded.
[01:28:36] The stream sources are kind of just
[01:28:39] like that, right? You go, I want a data stream. It's going to wait until that first item comes,  but then it'll stream the rest in.
[01:28:45] Um...
[01:28:46] So small detail and this helped me find a bug. So that is very, very cool.
[01:28:52] Okay, to be fair, this example is... Yeah, actually, I can show this. I can show the serialized format.
[01:28:59] It's just going to be a little noisy because
[01:29:02] Both are streaming in at the same time.
[01:29:06] Um,
[01:29:07] And actually, I'm going to have to
[01:29:09] Because
[01:29:12] uh...
[01:29:14] The after the fact?
[01:29:17] Thank you.
[01:29:18] This example isn't like, I need to do it with the fallbacks, but back in and let me explain why. Because if you look at this code,
[01:29:29] Thank you.
[01:29:30] there's no server functions here. Like if this was a server function,
[01:29:35] what you would see is this, like let's pretend this is on the server, right? So this is a server function.
[01:29:40] Our server functions support async durables. If this was a server function and then you called it, on the server it would just call it natively, kind of like what we're seeing here. But on the client it would make an RPC call and then the stream would come through like that and you'd see it over the wire format also on the request. Because there's no server function,
[01:30:00] for functions in this example. This is literally creating a generator
[01:30:04] on the server
[01:30:06] that it streams over on SSR and then after the fact on the client it's literally just  feeding this in from the client it's not actually going coming from the server if it was a server  function it would so the only way that I can actually show you this the serialization format  is during that initial SSR because in this example that's the only time it's actually  hitting the server so that's why because the bug because it was broken um sorry because it was  broken we've just found that bug I actually need to add the loading back because
[01:30:32] we want it to actually show the working serialization format. So let's do that. Let's do that.
[01:30:39] and load the page.
[01:30:43] Yeah, see, there's a hydration bug, but I think once I...
[01:30:47] Build, start.
[01:30:49] add back the loading boundary.
[01:30:52] um
[01:30:54] we will see no hydration error. Yeah, there's no hydration error. Okay, so let's look at the wire format.
[01:30:58] Um...
[01:31:01] What do we want? Network?
[01:31:04] Should we look at stream.html?
[01:31:07] Response?
[01:31:11] Yeah, let's see if I can make this a little bigger for you all.
[01:31:18] Thank you.
[01:31:19] So what are we doing here? We draw the page, then we set up our initial script tag, we set, this is all expanded out so you can read it. Then we then Sarah Bell serializes async iterator because it recognizes it right off the beginning.
[01:31:32] throw blah blah blah so this is actually the cerebellum implementation of an async iterator.
[01:31:37] And then... so there's a little code there. This compresses incredibly tight.
[01:31:42] And then
[01:31:44] There we go. So this is the inline script.
[01:31:46] And then
[01:31:48] We render loading, loading, so we render the fallback with the placeholder.
[01:31:54] Um, pieces...
[01:31:57] Back to this, this is the fallback here.
[01:32:01] template to comment, that's just the pattern we've been using. I'll explain the template element more, it's actually really cool when we get to reveal. And then what you're going to see here is
[01:32:11] As the chunks finish,
[01:32:13] First,
[01:32:15] Peace.
[01:32:16] There's a UL.
[01:32:19] And then there's a list with the first item in it.
[01:32:23] There's some comments separators and then
[01:32:25] uh
[01:32:28] That's the memo and this is for the projection. Same kind of thing, the list for the first item.  And then what you're going to see here is because at that point the server is like, I'm done with the HTML.  I'm just sending the data across and the client's rendering it, even though the server did the data.  This is the swapping stream logic that gets locked in. This is the asset management. Blah, blah, blah.  Don't worry too much about this stuff. And then we start getting, and this is the data serializing for the first item.  And then what we're going to start to see is
[01:32:55] The memo.
[01:32:56] and the stream both serializing
[01:32:59] their thing. The difference is the memo
[01:33:01] Then it's the second item.
[01:33:04] Oh, interesting. Maybe this one doesn't... Oh, yeah, yeah.
[01:33:07] We have a D. This is actually really nice here.  We have a D duplicator.  So even though the second item has...
[01:33:16] sends both items, we actually dedupe it so we don't send it twice.
[01:33:19] Cerevel, this is the first item again. If we go to R17, you'll see that R17, wherever we actually serialized it for a time, these are actually the same objects. So R16 and then the, this is funny. So the R17 here is actually the first item and then it gets reused.
[01:33:39] when we serialize
[01:33:41] The second item.
[01:33:43] Whereas...
[01:33:44] Um,
[01:33:45] for the projection, it's a little bit goofier because we actually, it's a patch. So we actually send, again, in this case,
[01:33:54] The memo is actually shorter probably, but because you can literally do any mutation you want on it, the patch format has to be a little bit more robust, but the patch format here sends the second item.
[01:34:04] And then what it does is it also updates the length to two.
[01:34:08] So two patches. Here's the item and here's the length.
[01:34:13] And then third item comes in. If you notice, 17, 21. Reuses the same two items from the previous one, so it doesn't actually have to serialize the data again. Adds the third item.
[01:34:25] Here, the third item is also added for the projection.
[01:34:28] except, and it sets the length to three.
[01:34:32] Fourth,
[01:34:33] length of 4,
[01:34:35] reuses the same three objects, adds it to four,
[01:34:37] Yeah, this is awesome. I forgot that Sarah Bell
[01:34:41] uh, D dupes, which is amazing in this case, because it means that the memo isn't actually re like the for loop when it sees what changes each time it actually sees a stable reference, which means it's not actually recreating all the rows, even without the.
[01:34:55] The...
[01:34:57] Even without the projection, it's actually not recreating all the rows because Cerevel is actually using the exact same object reference.  So when four sees it, four will be like, oh yeah, it's the same thing.  Don't create new DOM nodes.  So Cerevel's deduping here.  Yeah.
[01:35:09] We have...
[01:35:11] probably the craziest serializer in the JS Framework space, other than maybe Marcos.
[01:35:20] Thank you.
[01:35:20] That's why Tanstack picked it up too. This is, Alexis' work here is amazing. It didn't even occur to me. Thanks for making me look at the wire format. This is awesome.
[01:35:33] Thank you.
[01:35:34] Thank you.
[01:35:37] Thank you.
[01:35:38] TLC is how you age yourself. I had articles where I like to reference TLC about waterfalls.
[01:35:43] But yeah.
[01:35:44] Um,
[01:35:45] This is awesome, actually. The fact that the
[01:35:49] Patrick Barrett: patch format and the non patch format in this example, or basically the same length.  Patrick Barrett: is amazing because essentially Sarah well knows not to send the stuff multiple times because it's it d dupes it so it actually only sends the new item each time, even though, like it does create a new array with the existing items.
[01:36:09] As I said, the stuff compresses down...
[01:36:11] significantly fine. Like it's, you know what I mean? Like,
[01:36:16] But yeah.
[01:36:19] Yeah, good point. Quick Serializer. Yeah, Quick Serializer. I don't know it does data deduping, but Quick Serializer is just crazy. I don't even... Okay, fine.
[01:36:28] Quicken Marko.
[01:36:29] Yes.
[01:36:33] Thank you.
[01:36:33] I don't even know how to turn that on.  To be fair, the CSP was designed for our JSON requests,  like the server functions.  There was no security concern with the actual...
[01:36:49] server rendered stuff like this because it's not actually like calling eval it's literally the
[01:36:56] the...
[01:36:59] Like when
[01:36:59] It's, yeah...
[01:37:02] I don't actually know how to do that. I don't think solid, like solid start
[01:37:05] can turn that on. I don't think solid can because I think the actual SSR, this doesn't apply to.
[01:37:11] Thank you.
[01:37:12] *sigh*
[01:37:13] Um...
[01:37:14] But yeah, that means this works even better than I thought.
[01:37:17] Um,
[01:37:18] which is really cool because it means, I mean, we can kind of test our
[01:37:22] theory here, but I mean,
[01:37:27] Let's test our theory here.
[01:37:29] Let's go into this example.
[01:37:32] inside the component here, inside the for.
[01:37:34] and just do a good old like
[01:37:37] console.log
[01:37:41] I don't want to do top level reading. I'm just going to do like
[01:37:49] I could do like index.
[01:37:53] Exactly. And then I can do like
[01:37:57] Item I, exactly.
[01:38:00] It's going to come...
[01:38:01] playing at me about a top level read, but there's no downside of doing it this way.
[01:38:07] If my theory is right,
[01:38:10] Okay.
[01:38:12] Other than seeing one twice on the client,
[01:38:16] because of the way we have to pick up.
[01:38:19] Actually, I don't know if we'll see one twice.
[01:38:23] I don't know what this is gonna do. I guess we're gonna find out.
[01:38:29] This is the memo side, keep that in mind.
[01:38:32] Yeah, yeah, yeah, it's warning me, but...
[01:38:35] This is my point.
[01:38:36] Each, yeah, each component here, even in the memo,
[01:38:41] renders once, 0, 1, 2, 3, 4.
[01:38:44] So
[01:38:45] Thank you.
[01:38:46] That's that's awesome. Obviously, you shouldn't read in a reactive value directly because it won't update, which is what the warnings telling us here. But
[01:38:56] This confirms that
[01:38:59] Um...
[01:39:01] Even though technically we're just like yielding an array,
[01:39:06] that gets longer each time, each component only gets rendered once.
[01:39:11] God, that makes me happy. That's so cool.
[01:39:13] Thank you.
[01:39:16] Thank you.
[01:39:16] All right.
[01:39:18] Obviously, the same is true on the...
[01:39:22] on the projection side.
[01:39:24] But...
[01:39:25] is it's just pushing it, but
[01:39:28] It's very, very cool to see that
[01:39:31] Like, just...
[01:39:32] the different pieces were coming together to,
[01:39:35] do exactly what they should be doing.
[01:39:37] Okay.
[01:39:38] Um...
[01:39:40] That's awesome.
[01:39:43] Thanks for saying so, Fuzzy.
[01:39:45] Um...
[01:39:48] So, yeah, I mean, even when we try and make things not granular, we're not particularly great at that.
[01:39:56] Thank you.
[01:39:57] And actually you can see here, index zero, only the first component gets rendered on the server. So this is the difference between having a stream of data and having a like loading boundary, like
[01:40:12] thing. Stream of data means
[01:40:15] like you're not waiting on these separate things, you render the server,
[01:40:19] Thank you.
[01:40:20] up until you have something to render.
[01:40:23] which is in this case the first item.  And then you continue streaming the data over as the client picks up and renders it.  But the data is still coming from the server.  You don't have to restart your connection.  Now, obviously, if you want to restart your connection,  you can use one of the different SSR hybrid modes.  If you use hybrid, what it'll do is it'll actually...
[01:40:40] only do the first promise on the server  and then pick up your subscription on the client.  This is how you'd probably want to handle something real,  like a convex or like something  that's actually like a persistent stream.  This has a finite limit  and you're just showing these five items or whatever.  Like if it's something that's like just like,
[01:40:55] a single response that you know will end, that you're not holding open forever, this is probably the way to go. If it's something that you go, hey, the client needs to subscribe forever, you don't want to keep the initial HTML page open forever, then I'd use hybrid mode instead of client mode on the process.
[01:41:10] specific projection. You can just go here and just be like, SSR source, server is the default, and you can just be like, no, I want
[01:41:18] hybrid.
[01:41:21] Sorry, I didn't complete that on a hybrid.
[01:41:24] And with hybrid, it will only do the first data on the
[01:41:27] server and then the client will pick up and continue fetching the data or like reopen the stream on the client. So, um,
[01:41:38] Yeah, I mean...
[01:41:40] You have options.
[01:41:42] Yeah.
[01:41:42] But this
[01:41:45] examples pretty good I know any questions before I move on to the next one
[01:41:50] Thank you.
[01:41:51] Because to be fair, I've probably shown this exact example before on a different stream.
[01:41:57] Um,
[01:41:59] Thank you.
[01:42:00] I think I had this last time.
[01:42:02] Next, the next component that I want to show is...
[01:42:07] error.
[01:42:09] This is something that we used to do, but I wanted to test it again.
[01:42:12] What you're asking? How do we handle error boundaries while streaming?
[01:42:18] So we have two scenarios, inner boundary, where the error is inside the loading boundary,
[01:42:24] and then outer boundary where the error is...
[01:42:27] outside the loading boundary.
[01:42:30] Why is this important?
[01:42:32] Well, both scenarios can exist and
[01:42:36] Loading has an interesting...
[01:42:38] Characteristic, it controls...
[01:42:40] the stream, right?
[01:42:43] When you.
[01:42:45] Inside loading boundary is actually fairly trivial because what happens is if you error inside here somewhere, like the sign.title errors, then it's not going to be a little bit.
[01:42:54] Before loading can flush, error will handle it and go, okay, I'm aired.  And then loading goes, okay, I'm not waiting anymore.  Async.  I'm just going to show the error.
[01:43:02] Right? Easy.
[01:43:03] But what happens
[01:43:05] when
[01:43:06] You have a scenario where
[01:43:08] the error escapes the loading boundary and gets up to here.
[01:43:12] And the challenge here is,
[01:43:13] This is already flushed. You've already rendered your page. You've already sent it to the client. The errored
[01:43:19] boundaries on the client but the server is still waiting on something and then the server realizes  errors it gets to loading and then loading's like uh yeah you gave me an error um
[01:43:28] I'll just send it to my parent except the
[01:43:30] The parent's not there anymore. It's already on the browser.
[01:43:33] Um...
[01:43:35] This is something that 1.0 solved, but I wanted to make an explicit scenario test around this to make sure we kept that behavior.  The answer is actually fairly simple.
[01:43:45] If...
[01:43:47] Obviously, if errors on the inside, you handle it as normal. The server is rendering, doing its stuff, it hits an error, and then the loading boundary can flush that error.
[01:43:56] Um,
[01:43:56] and hydrate the error on the client properly.
[01:44:00] when the air is on the outside,
[01:44:04] Now,
[01:44:05] I should say before I go much further here, most people, this is why they're like, you should just make error and loading the same thing.  And it's like, no, I think people, I've already showed how you can just move loading wherever you want to make sense.  I feel the same about error.  I think these things are UI considerations.  Marrying them or forcing them to be together is a mistake.  It's a limitation.  So how do we handle this?  Well, when loading goes, hey, is there anyone above me?  It's like, no, they've already gone.  Loading goes, okay, fine.  I will grab the error for you.  I'm not going to show any UI because I don't know what to do with this.
[01:44:35] to hydration so what will happen is on the client when it starts hydrating down
[01:44:40] It'll get to Aaron and Aaron will be like, yeah, I'm good.
[01:44:42] It doesn't know what's going to happen yet.  And then it gets to loading and loading pauses because on the client, we don't  have, we haven't loaded that yet.  We're we've hydrated the top part of the page.  We haven't got the new chunk yet to hydrate the inside of the page.  Right.  We start hydrating before the page finishes loading.  We hydrate as we stream.  Right.  That's why.
[01:44:59] Like there's a lot of challenges here.
[01:45:01] What happens is when loading finishes and loading goes, oh, actually I errored.
[01:45:05] It basically goes, okay,
[01:45:08] I'm going to go to hydrate loading now because I'm resolved and it goes, oh, I've aired.  So there's nothing for me to hydrate.  Essentially, I'm done.  So it just goes, okay, I've got this error.  I'm going to throw it.
[01:45:18] So,
[01:45:19] And then I'm gonna throw it back up.  So that the client error that thought it succeeded before  now fails and now shows its fallback.  So essentially what we're doing is
[01:45:28] The...
[01:45:30] artful way of describing this is
[01:45:34] The page renders up to the loading boundary,
[01:45:38] sends it to the client, the client hydrates,
[01:45:41] sees that it's not aired, is just waiting on that loading.  And then when that loading on the server,
[01:45:48] finds that it errored, like something down here errors, it throws it on the server,
[01:45:55] through the loading boundary,
[01:45:57] basically throws it to the client and the client
[01:46:00] throws it all the way up to the client boundary that handles it.  So you basically throw an error from the server and catch it in the client.
[01:46:07] That's the mechanism here. And that's what this test is designed to, or this page is designed to do. So let's start that up and look at that.
[01:46:18] I'm not.
[01:46:18] Thank you.
[01:46:19] Thank you.
[01:46:19] Um,
[01:46:21] These are just like the little kind of details you hit when you work on this stuff. And that's why the stream I kind of view around refinement, right?
[01:46:28] Each of these has a reset button.
[01:46:30] So when you reset it, it passes the next time.
[01:46:35] But when you initially load the page,
[01:46:39] Um,
[01:46:41] You can see that it has a successful item and then a failed item, both in the error and loading state.
[01:46:48] So both
[01:46:49] And then both of these are still resettable.  The one that initially started the error boundary that's inside that basically aired on the server, then serialized and was hydrated is resettable as is the one that.
[01:47:01] succeeded on the client and then threw later and caught in and did that. The only thing you might be noticing, you're like,
[01:47:08] "Why is there an error in my console?"
[01:47:10] I haven't been able to solve this. I don't know if this is solvable, but the problem is if it does actually error,
[01:47:17] and I need to serialize that error to throw it,
[01:47:19] Um,
[01:47:21] to the client, like on the outer case,
[01:47:24] I can't easily get rid of this without patching Sarah Bell because Sarah Bell actually like sees the uncaught error.  Like we actually serialize the promise and Sarah Bell's like, oh, um, it errored.  Uh,
[01:47:37] Thank you.
[01:47:38] I'm going to think if there's something I can do here. This error doesn't actually
[01:47:43] um, matter that much because like it did error, but it is something worth pointing is that, um,
[01:47:50] because this promise doesn't have listeners until
[01:47:54] It hydrates.
[01:47:55] Saravelle serialized the promises and basically views it uncaught, even though technically speaking
[01:48:02] it is caught and handled here.
[01:48:06] Yeah, this is one of those weird ones. That being said,
[01:48:11] people are kind of used to seeing errors when they're erred.  Like the important part here is not the person looking at the logs and seeing the error.  The important part here is that the error is actually handled properly.  This is just a kind of artifact of the fact of throwing an error where the listener doesn't exist yet.  If you throw an error and no one's dot vending the promise yet,
[01:48:30] That's what you get in the console. If someone's listening, then they're like, oh, it's handled, or if there's a catch on it. But if there's no catch initially...
[01:48:39] Are you supposed to serialize something that...
[01:48:42] Um...
[01:48:43] Squashes the error no because then you can't listen to it. So it's like it's kind of like
[01:48:48] There's no winning here, perhaps, unless we could attack it at the Cerevelle level.  I'm not too worried, though, because as I said...
[01:48:56] Seeing an error in the console when something actually errors actually makes sense, so...
[01:49:00] It's not the worst.
[01:49:01] But
[01:49:04] Yeah.
[01:49:05] For all that explanation, this is one of those things where the details...
[01:49:11] are complicated, but the end result is
[01:49:14] dirt simple. The end result is you just don't have to worry about what's first, the loading the error. You just design the page the way that makes sense to show these affordances and, uh,
[01:49:25] You're good to go.
[01:49:27] Okay.
[01:49:28] Stream, are you guys still alive?
[01:49:31] *Ding*
[01:49:34] I got a new feature to show you.
[01:49:37] Thank you.
[01:49:38] Yeah, see this is where people go to and it could but why?
[01:49:44] like now,  now loading boundary has to like also carry the error stuff.  And it's kind of like,
[01:49:50] Um,
[01:49:51] It basically...
[01:49:53] These things can be independent.  So there's like someone...
[01:49:56] could go and make...
[01:49:57] A wrapper, like if you wanted a loading boundary that had error built into it, you can take these two permanents and make it.  But if I'm going to make it, then...
[01:50:08] Um...
[01:50:10] Thank you.
[01:50:11] Like I'm kind of taking the choice out of here.
[01:50:17] - Thank you.
[01:50:18] Thank you.
[01:50:19] Thank you.
[01:50:20] So like this is a convenience feature.  I don't care about convenience as much.  Like it's kind of like the complexity that comes from like,
[01:50:29] that compared to just like having two independent parts that work independently is, is, is, I don't think worth it.
[01:50:36] Thanks for the support chat.
[01:50:45] *laughs*
[01:50:51] Yeah, exactly. And don't get me wrong, syntax sugar can be worth it. It's just it's not
[01:50:55] It's.
[01:50:56] It's not where I start from. I feel like this is maybe the fundamental difference between Sullivan's belt.
[01:51:02] Maybe because I think differently like this, this is why I'm, I'm,
[01:51:06] sometimes like confused why people make a big deal about certain aspects of Svelte because I'm just like
[01:51:11] Yeah, but then, you know, there's consequences to these things. I would, I generally try and choose a
[01:51:18] Like you could say that like if on error isn't present, then don't treat it like an error boundary. Treat it like this. It's like an optional opt-in that like when you add this property, now it's responsible for catching it. That's like a bit more reasonable than saying that loading is always an error boundary.
[01:51:35] Um...
[01:51:36] Thank you.
[01:51:37] So, like, it's just...  It's trying to decide whether, like...
[01:51:41] the forking code is worth doing just to add it as a prop.
[01:51:51] Yeah, I'm not sure. I struggle with this one a bit.
[01:51:55] Ooh, actually, before we go to reveal, there's actually one more feature I want to, I want to, I want to show. I forgot about this one.
[01:52:06] Yeah. How do I want to do this one?
[01:52:09] Um...
[01:52:14] I had an idea.
[01:52:17] Okay.  What if...
[01:52:21] I think that's it for Aaron unless you guys have a comment on that.
[01:52:27] Thank you.
[01:52:28] To be fair, React's async system is perfect.
[01:52:34] this. There's just a whole bunch of
[01:52:37] like
[01:52:39] like not all the like RCs are a bit different, but like essentially you have a bunch of APIs to basically do what we're doing. Like this is
[01:52:46] This is like, what if you
[01:52:48] took React,
[01:52:50] and Sausfeld.
[01:52:52] and kind of like,  I think that undersells it though.  Cause it's like most of the stars already doing before I saw the salt  stuff.
[01:52:59] The implicit transition piece, like realizing that was possible from Svelte was key.  But it's like, what if you could take those simplifications, um...
[01:53:07] But follow reacts.
[01:53:10] prescriptiveness completely. I think this is the thing that's lost with people.  People see something and they're like, "Oh, this is easier, simple."
[01:53:17] That's good. Why the hell is React doing this stuff?
[01:53:20] And
[01:53:21] some solutions will just cut out
[01:53:24] what React's doing and go for that simple thing.  This is doing everything React is doing.  React solution I don't consider
[01:53:30] childish. I think React solution is actually very well thought out of.
[01:53:34] Some other framework solutions are not as well
[01:53:37] thought out of
[01:53:38] in my opinion, and might even look like this.  But React solution is actually very, very good.  The problem is for them is that the
[01:53:45] API constraints are too big.  And I don't mean in like a subtle ergonomic sense,  like we were just talking about like, oh, what if you use on error  instead of error component, you know, like not that level.  It's like from a structural level, it makes it hard.  And it's not their fault.  It's because they're not fine grained.  They don't have the same tools available to them.
[01:54:06] But I think it's very, very important, and the only reason I'm stopping on this is
[01:54:10] React solutions are
[01:54:11] like, or their theory behind their solutions are very, very good.  People should not discredit React's
[01:54:19] Like discredit their implementation. Don't
[01:54:21] discredit
[01:54:23] the thinking, the design, the constraints that they, like, the invariants, like, don't, these are all real, um,
[01:54:31] we ignore them to our own peril.
[01:54:34] react
[01:54:35] understands the physics of things very, very well.
[01:54:39] better than pretty much anyone. And I think anyone who ignores the physics will find themselves, you know,
[01:54:45] Falling off a cliff.
[01:54:47] Thank you.
[01:54:48] What we have that's really special here is we've been able to keep Reacts physics while offering this experience.  That's the key.
[01:54:56] It's not just offering the experience, it's keeping Reacts physics.
[01:55:04] Right. Um,
[01:55:08] Obviously, there's other details and stuff with React, which I don't agree on.  But at a general thing, I just...
[01:55:14] React has the best...
[01:55:16] async solution.
[01:55:18] out there right now that's like published, officially released.
[01:55:22] It's just impossible to use.
[01:55:25] Like,
[01:55:26] That's the way I look at it. It's so hard to use that even when the core team tries to demo it, they trip over themselves. But the actual mechanics of it, the physics of it,
[01:55:38] is brilliant.
[01:55:43] I think people like they like
[01:55:46] um yeah i think it's really important that people understand that like react doesn't make up the  constraints just for their own thing like sometimes people go oh they're solving their own problem  and to a certain degree there's elements of that when it comes to implementation details but there is
[01:56:01] There is like a...
[01:56:03] There is like a truth underlying behind all this.
[01:56:10] Yeah, I mean, I... I mean, maybe I'm interested to take a look at that at some time. I dropped my server component implementation because...
[01:56:22] I...
[01:56:23] thought at the time
[01:56:25] That...
[01:56:26] there was holes like,  like react wasn't wrong is essentially the thing.  The implementation problem with react is hard to solve,  but their biggest problem is that they serialize too much.  They just,  but it,
[01:56:40] It's hard to avoid serializing so much. So it's like,
[01:56:43] *sniff*
[01:56:45] It's...
[01:56:46] Yeah, I don't know if it's simple.
[01:56:48] Thank you.
[01:56:49] What gives me joy is when we find those intersections...
[01:56:53] where we can actually
[01:56:56] find that thing where we can keep what React's doing, but actually find the true simplification. I think we've done it here. I'm very, very excited about this in a way that I haven't been excited about stuff in almost a decade because it's like,
[01:57:10] This actually checks off the boxes. I'm actually kind of a little bit worried.
[01:57:15] I have to admit, because I've always been fairly even keeled.  People respected the fact that when I talked about
[01:57:21] other, you know, JavaScript framework when I talk about like, you know, stuff like that, I'm very kind of neutral and I'm pragmatic and realistic and I go to performance and none of this has really changed. The problem is,
[01:57:36] It's because in my head when I looked at solid, I was like, yeah, you know, it's good.  It's very good.  It does a lot of great stuff, but there's gaps.  There's things that aren't perfect.  You know, like, and every framework has this issue and framework authors are going to be the most...
[01:57:50] critical of this, right? I remember when, you know, the first time I saw Next.js and people were like,
[01:57:55] really excited about it. I'm like, yeah, no, I mean, this is a huge step forward, but like,
[01:57:59] People are like, well, why are you even working here?  It's like the endgame.  I'm talking about like PagesRouter, like...
[01:58:05] eight years ago. And I'm like, no, Next.js is like a two out of 10 right now.
[01:58:08] And people like that blue, like, actually, I'd step back and be like, you guys in the scale of where do you think these solutions need to be? Where do you think next? Yes. And I hear a lot of eights.
[01:58:19] And I'd be like, like for me, it was like a two.
[01:58:22] I think the challenge is
[01:58:23] It...
[01:58:24] that upper range of where the numbers get always
[01:58:29] gets further.  And honestly,  next since then has raised the bar significantly.  I just sing,  like go back to like 2018 and the,
[01:58:36] Thank you.
[01:58:36] I think...
[01:58:38] that
[01:58:41] Well...
[01:58:42] the top
[01:58:44] our ceiling
[01:58:45] keeps on getting higher, so that kind of forces everything else down.
[01:58:52] And because of our
[01:58:54] desire to dream is going to keep that going. We'll never reach the 10 out of 10.
[01:59:00] The challenge is,
[01:59:02] I think...
[01:59:03] where my perspective is.
[01:59:05] Followed
[01:59:07] is getting to a point
[01:59:09] We're, no, we're not getting to 10 out of 10.
[01:59:12] But our comparative score
[01:59:16] is...
[01:59:18] producing a gap from my perspective that it's becoming harder and harder for me.
[01:59:24] me to be as like
[01:59:26] Oh, just use whatever you want.
[01:59:28] Um...
[01:59:31] That's a personal challenge for me because
[01:59:34] Um,
[01:59:35] This is not a zone I'm very comfortable in. I'm worried that I'm coming off as like too much of a shill.
[01:59:41] um,
[01:59:43] Which is weird, as I said, because I'm usually not a shell.  For me, it's all about...
[01:59:46] the technology.
[01:59:48] I just think what we're doing is
[01:59:50] That good.
[01:59:51] Anyway.
[01:59:55] No, that's the funny thing. We shifted some stuff around, made it more domp. If anything,
[02:00:00] Point outwork is trying to make DOM expressions do less. I really huge props to Tito. He's basically been removing all the edge cases. The goal of DOM expressions,
[02:00:11] longer term hopefully and i we get there is that we can simplify it enough and i don't think we  can get it there completely because i fight
[02:00:18] it at every turn, but
[02:00:20] Maybe it could get simplified enough that it could be easier implemented, almost like as a spec in a different thing.  So you can move to OXC or whatever.  Right now, that Babel plugin is so...
[02:00:31] It has too much special cases. It's too powerful. It does too much.
[02:00:36] So in a sense,
[02:00:38] I don't know if we can ever get there completely where it's not a lot of work to kind of port it, but you know, like get, get down to a simplicity that's like say reacts GSX transform would be nice.  Um, I don't know how easy to get there without losing some of the optimizations we have built in.
[02:00:52] But generally, the direction has been to simplify and remove stuff.  We're not...
[02:00:58] were like...
[02:01:01] We're not about compilers. We're about
[02:01:05] like, transparency. We're about...
[02:01:07] what you see is what you get. So like, yes, templating can never live up to that expectation completely. But, um,
[02:01:16] I think that like...
[02:01:18] we haven't been looking at trying how to like do more with compilation all that stuff that's like  complete opposite direction in fact it's like how can we rely on compilation less and you  might be like that's weird well it all it means is that
[02:01:32] future optimizations, a future capabilities that compilation can give us, can help us get even further because we've made the runtime. Like compilation is a last step optimization. If you rely on it too early, you end up
[02:01:47] Accepting things are...
[02:01:48] like you basically compromise too early.  You basically get to a point where you're like,  um,  you,
[02:01:55] You could have solved something in a way that actually worked mechanically from the runtime stand, but then you decided,
[02:02:00] I need a compiler. And then once you say I need the compiler, you can't get rid of the compiler. Like it becomes the thing, right? Like, which means like you, you, you might have cut off a whole design space where you could have actually come up with a,
[02:02:11] better, different design because you didn't have a compiler.  You basically use the compiler as a crack.  Now you could argue that with a compiler now you open to have more possibilities,  more things that you can, um,
[02:02:23] do, right? Which is always true.
[02:02:25] But again, it's a layers thing. If you can get rid of the compiler and do more,  then when you add the compiler, you can do that much more.
[02:02:33] That's just kind of the way I view things.
[02:02:37] So if anything, yes, we've tried to do less compilation.
[02:02:46] Solid's always been easy to write by hand.
[02:02:49] I like relatively that's what I demo in all my talks. People who came on my stream, like an hour or sorry, a year ago when I was first working on solid 2.0, the demos didn't make much sense to a lot of people because I was handwriting them. I was literally like I had the reactivity system and I was literally just going like create effect, update this dom element. Like I built whole suspense demos, like what I'm showing you today, completely.
[02:03:11] by hand without the compiler. Because all the compiler does is like write a couple of facts.  You just like write your normal code. And then when the DOM elements is like document.createElement.
[02:03:20] create effect.
[02:03:22] some signal
[02:03:24] element.set
[02:03:26] text or, you know,
[02:03:28] You know what I mean? Like, so writing solid by hand without a compiler is easy. Like not easy, easy. Like you want the convenience of the declarative templates, but the data itself is already declarative. So like,
[02:03:39] it's not like a huge boundary, because you're not creating BDOM nodes, or there's no transform happening.
[02:03:46] The transform is literally the same primitives that you use to write your normal code. So it's like,
[02:03:51] If you go, okay, create a DOM element,
[02:03:54] create an effect. Like that's what the solid compiler is doing.
[02:04:00] Thank you.
[02:04:03] So like...
[02:04:05] I mean, I think most people now have seen...
[02:04:10] I wonder if I can actually, you know,
[02:04:13] Let's just do it in here.
[02:04:16] Network.
[02:04:18] Home.js. Here we go.
[02:04:21] What is the compiler outputting for this simple component?
[02:04:26] Welcome to this, this, this span and beautiful.
[02:04:30] So this is the compiled output.
[02:04:32] First of all, this code here,
[02:04:34] is exactly the same code
[02:04:37] Let's go back to home.
[02:04:40] This code here, const signal of on cell return clear interval.  OK, that's the same.
[02:04:45] Then we have a fragment with
[02:04:48] three elements in it, okay?
[02:04:50] Switch back.
[02:04:51] So this is hydration code. Keep in mind, this is not the basic code, but it goes, get me the first template, which is.
[02:04:58] that
[02:05:00] which is the first element.
[02:05:02] get me the second template.
[02:05:04] which is this, the second row,
[02:05:07] And then finally, get me...
[02:05:09] The third template,
[02:05:12] Although it's an iffy, so give me the third template which is a span
[02:05:17] And then it goes,
[02:05:18] Insert.
[02:05:20] this signal, so basically its child is the signal
[02:05:25] and return. Now you might be going, "Okay, well, what's this insert? This insert is special." Like GitNextElement
[02:05:31] is either clone this or match it on hydration.  So don't worry too much.  What's this insert?  This insert,
[02:05:38] I mean...
[02:05:41] Let's do it.
[02:05:42] I just, this really drive home my point. Sorry, don't need Slack.
[02:05:47] Mine works slack, so I quit.
[02:05:51] What I mean here is
[02:05:55] Let's do something even more obvious, because it's easier to see
[02:06:02] It's easier to see--
[02:06:05] attributes than insert, because the insert has a little bit of logic, because it has to handle both strings and DOM elements. But if we go stream build,
[02:06:13] Um...
[02:06:15] An interesting
[02:06:17] Warning.
[02:06:18] Use stream build, probably because it didn't.
[02:06:20] And then we'd set text content.
[02:06:25] Then we look at our home again.
[02:06:27] Thank you.
[02:06:29] Here we go. I got rid of the insert now because it's just setting the text content. What you're going to see is the same thing as before, except this one actually steps in because
[02:06:37] Anyone who knows a text node,
[02:06:40] It's a little bit faster to update the data than recreate the text node.  So our template now,
[02:06:44] has a space
[02:06:45] on our span, so this is the text node. We don't need closing tags, it's a DOM specific thing, but there's a space here.  So basically what it does is get the first one, get the second one, and then the third one is
[02:06:55] Get the third element.
[02:06:57] walk into that text node,
[02:06:59] and then create an effect
[02:07:01] based on whenever the signal changes, set the property data on that text node with the value you get.
[02:07:06] Like,
[02:07:07] That's all the solid compiler is.
[02:07:12] It's it's.
[02:07:13] And this is not the...
[02:07:16] Um...
[02:07:18] the like DOM running code, the hydration code. Yeah.
[02:07:25] Oh, I'm not showing the code, damn it. Sorry.
[02:07:28] Thank you.
[02:07:30] Huh.
[02:07:32] Thank you.
[02:07:32] *laughs*
[02:07:33] Oh, right.
[02:07:35] Okay. Sorry.
[02:07:38] Okay.
[02:07:40] All right.
[02:07:42] Let me try that again.
[02:07:46] Okay.
[02:07:47] It's fine. It won't take very long.  What I went in was I changed the span to text content to use an attribute so I could show.
[02:07:53] But what I was trying to show is that when
[02:07:57] is that
[02:07:59] This...
[02:08:01] This component,
[02:08:03] has signal, it has an on settle for the interval, and then it has a fragment
[02:08:08] In fact, if this wasn't a fragment, this would be even easier.
[02:08:12] But it's a fragment, so there's three templates essentially in the fragment, because the fragment's just right.
[02:08:16] Text.
[02:08:17] Text.
[02:08:18] and then text with some text content. So
[02:08:22] how that maps in the compiler,
[02:08:25] Template, template, template. Three templates that can be cloned or can be found and then
[02:08:30] our component, the top part is identical to what you wrote, and then our JSX becomes
[02:08:36] Git.
[02:08:37] The first one.
[02:08:38] Inarray, get the second one.
[02:08:40] Then the third one is an IV where it gets the third element, which is that span.
[02:08:45] walks into the text node. You see here there's a space here.
[02:08:49] we don't have closing tags. Um,
[02:08:52] on these because the browser can actually cure them so we don't have to encode them.
[02:08:56] So walk into the space.
[02:09:00] And then making a fact that says on the signal change,
[02:09:04] set the data property which is
[02:09:06] faster than recreating the text node on that existing text node to update it whenever that signal changes.
[02:09:11] That's what our compiler does.  Yes, this is more...
[02:09:15] complicated compilation
[02:09:18] Um...
[02:09:19] then
[02:09:20] Reacts call h function, but the runtime like there's no like
[02:09:25] h function, like...
[02:09:27] handle this, handle this, handle this. It's literally like we just created an effect.
[02:09:31] And we said it.
[02:09:32] property on this DOM element which we walked to. So the compiler looks at the structure of the code and then figures out
[02:09:38] how to
[02:09:40] get the top level templates, in this case for matching hydration or how to clone them, and then it just walks to the nodes it needs to.
[02:09:48] based on the shape, which is
[02:09:50] very apparent in here, and then it just creates an effect that updates them. So like,
[02:09:55] There's almost...
[02:09:57] This effect is a render effect. It's just aliased through the...
[02:10:01] um through the to the domic the compiler but it's it's essentially the the same
[02:10:08] Thank you.
[02:10:09] There isn't much to it is all I'm trying to say.
[02:10:15] Yeah, we still have the H version. It's just kind of a waste of time.
[02:10:19] It's fine. It just, you don't get the nice ergonomics of compiled getters in the JSX, which is the reason why the compiler, like, to be fair.
[02:10:30] If
[02:10:32] Yeah.
[02:10:33] If our heuristic
[02:10:35] Yeah, it's just kind of wasteful because you could apply our heuristic to something almost like the standard GSX compiler and produce H functions and then compile away the...
[02:10:46] like the reason we have the H version is so that it works with the standard React compiler.  But if we had an H version that didn't
[02:10:52] work with the standard React compiler, it would still be slightly less efficient than
[02:10:58] what we're doing here. So there's like no point of it existing, um, except to work with a standard React compiler.
[02:11:08] Yeah, also, yeah, that's the idea of what I've read just now.
[02:11:15] Yeah, I mean...
[02:11:17] They...
[02:11:19] The thing is,
[02:11:20] Are they going?
[02:11:21] Are they going back?
[02:11:24] to VDOM in that case, because the tricky part is you have to
[02:11:29] wrap
[02:11:33] like there's only two ways to go you either use your own JSX compiler
[02:11:40] And then you make like a
[02:11:42] h function that
[02:11:44] expects.
[02:11:47] reactive  behavior
[02:11:49] functions, which will be less optimal than your direct
[02:11:52] like vapor compiler or you, um, or they default back to the V Dom in that case.
[02:11:59] I use the standard JSX compiler and
[02:12:03] Um...
[02:12:05] Yeah.
[02:12:11] I mean, it's, this is what I was talking about. This is why we've been trying to simplify it. There's a whole project. Look at the internals of Babel plugin decide some there's, there is a version that was built on SWR.
[02:12:28] I think someone's built a version now in OXC.  Neither of them are as capable as the Babel one,  just because there is logic in there.  Theoretically, someone could do it.  The thing is, it's just...
[02:12:40] Thank you.
[02:12:42] like there's some features that Babel has that the others don't have.  It's really good at, uh,
[02:12:47] doing almost like pre-pack style pre-evaluation so we can inline stuff.
[02:12:51] There's optimizations that Babel's good at, but...
[02:12:54] I think that's probably...
[02:12:56] I think the hardest thing has just been like, I think it might change with OXC.  I don't know how much rust is in there.  I just didn't want to move off JavaScript.  AI might make me okay with moving off JavaScript though.
[02:13:07] I was just worried that I wanted something I could edit, I could make work. If you have a parser, you can rewrite the logic in the various things. These options, even SWR and OXC has only been something that's been available for us the last couple of years. Until that point, it was either write a custom compiler by hand or use Babel.
[02:13:28] Double.
[02:13:29] It's funny, Babbel was considered great at one point, or you know, like when I made the choice back in like 2018-19,
[02:13:37] Like I was actually working the Marco team and they were moving to Babel too, you know, like, like they had their own custom compiler and they're like, screw this use Babel now everyone can use it.
[02:13:48] So it's kind of ironic. We've gone full circle now. We're like, people will prefer custom compilers or obviously, ideally stuff that works with like, OXC or SWR or whatever.
[02:14:00] But like there was a time period where using Babel over custom compilers was  seen as actually really beneficial because of like,
[02:14:08] maintenance and accessibility.
[02:14:10] So it's kind of interesting.
[02:14:13] Uh.
[02:14:15] Jared made a BUN transpiler for Solid the week before he released BUN the first time. He was like literally like three, four days before release. He's like, okay, I'm just gonna make a solid thing. And then he kind of stopped because he realized how complicated it got. But he had a basic working GSX compiler and BUN. He put it together in like a day or so. So, but the, you know, there's a lot more to it than that.
[02:14:40] Thank you.
[02:14:41] Thank you.
[02:14:42] So it's not like our compiler,
[02:14:46] that's a very limited scope which makes it a lot simpler than
[02:14:49] React compiler.
[02:14:51] the Svelte compiler.
[02:14:52] the quick compiler.
[02:14:54] We have like, it is, there's, there's more like the,
[02:14:58] It's a little bit more complicated than the straight, like, you could make a JSX compiler almost with like a string replace.
[02:15:05] set up without even parsing the AST. Like you literally like
[02:15:08] Like it's very like one for one, the output.  So ours is not like that.  So yes, our compiler is more complicated  than the standard JSX compiler.  But in terms of,
[02:15:17] Solutions, it's always weird when people call, oh yeah, you know, those compiler frameworks like solid and styles. Solid is not a compiler framework. Solid is just JavaScript framework like React.
[02:15:28] Well, at least React was before the React compiler, which makes us
[02:15:32] a very much just javascript framework now
[02:15:36] *sigh*
[02:15:41] Yes, exactly. People don't need Babel anymore because they're not using it for transpiling.
[02:15:46] Problem is the first thing that replaced Babel was ESBuild, and ESBuild didn't support plugins.  So there was no, like, it really wasn't.
[02:15:52] for that time period when people were moving off Babel initially, there was nowhere for us to go.
[02:16:01] Thank you.
[02:16:05] Yeah, I mean, how do you convince these large teams to invest in it?  So far, our biggest mobile or type, our biggest consumers on these like,
[02:16:16] third party or like these off web things has been in television, like the Peacocks, NBC, Universal, even Netflix was looking at us.  So I said that got abandoned. I'm pretty sure because the migration reacted to our we don't have the same push on mobile. I mean,
[02:16:32] If someone wants to do it, there's nothing technologically stopping them.
[02:16:36] We've had a universal mobile capability for five years now.  It's funny.  I wonder if, like, I think Svelte is getting it, like,
[02:16:44] very soon, right? Like imminently. But like, we've had this for five years. It just, there hasn't
[02:16:52] I'm not going to be the one driving it, and there clearly hasn't been enough interest, but completely possible.
[02:16:58] Thank you.
[02:17:03] Thank you.
[02:17:04] Thank you.
[02:17:05] Babel...
[02:17:08] Since Vite, these things have kind of disappeared. No one cares about this stuff. Babel is just a...
[02:17:14] It takes JavaScript-capable code, including JSX, and spits out JavaScript-capable code. It existed so that we could migrate code so you could write stuff in the latest async await or use the latest features and then have them still work in IE11.
[02:17:33] Um,
[02:17:34] That's just not a world we live in anymore, which is why it's dropped off.  But essentially it was very common.  We had all our build processes because we literally couldn't write
[02:17:41] modern code because of the browsers we have to support.
[02:17:46] Thank you.
[02:17:46] Yeah, the only thing is like today, now Lynx is the solution this past year. Before it was native script. Before it was this. These things seem to come and go over and over and over again. So it's very hard for people to invest unless you know that if you know that Lynx is the future, then build Lynx solid and be successful. I think the challenge is that.
[02:18:07] It's not the solid side. I know people are like, I don't know if solid is going to be successful. I mean,
[02:18:12] whatever that's on you.  I I'm confident on that.  I just said,
[02:18:16] Mm-hmm.
[02:18:17] It takes a lot to invest on a specific...
[02:18:20] third party side.
[02:18:23] Like,
[02:18:24] So, like, the Lynx team works both the way.  The Lynx team is like, I don't know if Sol is going to be successful, you know, so I'm going to just make a React thing.  And on my side, I'm like, I don't know if Lynx is going to be successful.  So, like, neither team is going to be the one driving that unless...
[02:18:40] you know like someone spent the research to realize the solution is like
[02:18:46] really worth pursuing. I thought Tori was for a while. Some people tell me Tori uses web views and that's why it's not good and that's why OpenCode switched from
[02:18:55] Tori using solid now to I think electron with solid I don't know so like
[02:18:59] like
[02:19:02] Thank you.
[02:19:04] Thank you.
[02:19:06] Thank you.
[02:19:07] No, I'm streaming on YouTube and on Twitch.
[02:19:13] The link on my profile on X will link you to YouTube, but you can also find me on Twitch.
[02:19:22] Thank you.
[02:19:23] Thank you.
[02:19:24] So yeah, I mean, if someone wants to, we would be completely supportive of getting links, you know, going.  It's just like...
[02:19:34] Thank you.
[02:19:35] it's tricky because...
[02:19:39] pretend we went all in on Tori and then Tori wasn't thinking, this is not our area specialty. I'm building a UI framework. I know nothing about mobile development.
[02:19:47] Let's just not, I can't make that judgment.
[02:19:51] If there's someone who's the intersection of good mobile development,
[02:19:55] and good web development,
[02:19:57] I think they would
[02:19:59] you know,
[02:20:00] presumably go like, yeah, link solid, that is the thing. And then
[02:20:03] They push it. It's just not my place to do. And it's probably not the links people, because they maybe don't know what good web development looks like. So like,
[02:20:10] Yeah.
[02:20:14] .
[02:20:16] It's...
[02:20:18] Um,
[02:20:20] Thank you.
[02:20:21] Anyway, where were we? I got kind of crazily off topic talking about the Babel compiler. I think it was because I was trying to just show the compilation thing, which is fine. We can continue past this. My point is that...
[02:20:38] compilation, uh,
[02:20:41] Solid is not a compiler.
[02:20:44] Um...
[02:20:45] framework per se.
[02:20:48] Yeah, that's what it was. It was about wondering how much compilation kind of plays into it. And it's like,
[02:20:53] Not a ton.  The truth of the matter, though, is I am interested in the capabilities of what compilers can do to a degree.  Like Ripple is interesting because they've found ways to get...
[02:21:04] incredible performance from their compiler approach. And
[02:21:09] what I, similar to Marco, WYSIWYG editability. So I mean, there's an ergonomic win potentially and a performance win. The challenge is people don't care that much about performance wins these days.
[02:21:23] So it's like, it's really hard to sell.  And if the ergonomics win...
[02:21:28] you know, is subtle. I think the challenge is,
[02:21:31] I don't know.
[02:21:33] I feel for Dominic and co on this is like,
[02:21:39] The people who like JSX
[02:21:41] are fine with JSX as it is.
[02:21:44] Like even people using solid who understand the compilation is different.  They, they, they still kind of view it as like, oh, it's just JSX.  It's just the thing I returned. It's just the thing, right?  There's the, this keeps clear JavaScript semantics, you know?
[02:21:57] The people who are willing to get past the JavaScript semantics, like the Svelte and the views of the world,
[02:22:03] They have this like incredible, weird hate of J like irrational.  I'd almost call hate of JSX.
[02:22:09] Like, it's kind of crazy when you actually consider that from like JSX is almost actually technically it's.
[02:22:16] more powerful and superior in a sense.  And I'm not saying this from like a, like a preference standpoint, it's like, I
[02:22:24] there it's it's portable right i mean don't get me wrong like
[02:22:28] limitations can be good.  So like,
[02:22:31] in a sense, like...
[02:22:34] And there are
[02:22:37] JSX as it is today...
[02:22:39] Um,
[02:22:40] doesn't support certain features. And when you say like, I'm not on spec, like you can just go add  those features in a sense, that's what Ripple kind of almost did. It's like, I've got JSX, but I can like
[02:22:49] do whatever the hell I want with it.
[02:22:53] But like...
[02:22:56] the people on that side,  for some reason,  just absolutely hate JSX.  Like I go on Reddit occasionally.  People like,  why did you choose SvelteKit over Solid  or Solid Start over SvelteKit?  And it's literally JSX is what comes up.  And it's like,
[02:23:09] It...
[02:23:11] I don't even know how to relate to those people.  Like it's really hard in my head.  I'm like,  I look at Svelte templating.  I look at Svelte templating.  I'm like,  it looks like markup is a markup walks like markup.  Like who,  like the,  the,  the only difference is it's,  it is kind of cool how it portable it is.  Like how,  like that's a thing that you can return.  I think that's a,
[02:23:31] But like most people aren't going to even care about that.
[02:23:34] But for some reason, it's like,
[02:23:37] irksome for people JSX. And it's like,
[02:23:40] I can't even picture a world where...
[02:23:44] I could like hate JSX enough to
[02:23:47] Yeah, it's very, very difficult for me.
[02:23:49] Right. Which is probably why.
[02:23:52] I'm not a Svelte or a View user. I could see other reasons for picking the different frameworks, definitely.
[02:24:01] Um,
[02:24:02] those reasons shrinking
[02:24:04] rapidly over time for sure, but like,
[02:24:07] Um...
[02:24:09] JSX, really?
[02:24:12] Like, I think there's like this like,
[02:24:15] vibe thing, like this sort of like perspective experience thing that maybe it's because I've used GSX with React where people are just like,
[02:24:23] Like, it's...
[02:24:25] I can't... I don't even know how they can...
[02:24:28] justify it to themselves. Like I,
[02:24:30] Bye.
[02:24:31] confusing.
[02:24:33] Thank you.
[02:24:34] Thank you.
[02:24:36] Thank you.
[02:24:39] Thank you.
[02:24:40] Thank you.
[02:24:44] .
[02:24:47] Alright, Dominic's right here. Ripple's syntax is breaking out to be TSRX, its own product that will be a framework agnostic.
[02:24:53] Well, you heard it here first, folks.
[02:24:56] Yeah. So.
[02:24:57] Yeah.
[02:24:59] I mean, wow. I mean, if you think about that, that's
[02:25:03] That's interesting.
[02:25:04] God, he's going to sidetrack me right now to even think about it.  Um...
[02:25:09] Wow, that's interesting.
[02:25:11] See, that changes the equation completely.
[02:25:16] Um,
[02:25:19] Oh.
[02:25:20] Like,
[02:25:21] Because then it's like,
[02:25:22] What if you just wanted to use the syntax with solid because you like the ergonomic benefits?
[02:25:27] Right, because it's like,
[02:25:30] That's interesting, right? I mean, you guys in the chat decide, but like, what if
[02:25:35] You could use something like solid.
[02:25:36] and get that like
[02:25:38] what I usually don't care that much about, like,
[02:25:41] boost on the Svelte side, but you get to keep
[02:25:44] Kind of less the magic.
[02:25:47] I think that could be compelling for a lot of people.
[02:25:53] I haven't a new rational hate for cuts and templates, so...
[02:25:56] Yeah.
[02:25:57] I see I don't I'm going to get back to Ripple in a second here or to what Dominic just said, but I don't I don't
[02:26:04] Yeah, I don't have any rational hate of it.  For me, it's just a matter of like, I'd make a pros and cons list and talk about it from  a technical aspect.
[02:26:12] I think one of the cool benefits of it is when you can define the syntax, like the problem with JSX is just because that spec is out there, you can't really change it. Like if you can define the syntax, then you have the ability to.
[02:26:21] define more behavior, right? You can bend the rules more. It is a slippery slope, so I don't know where it sits. This is going to be my biggest question of where this ends up sitting. But if, if he can, if Dominic can create a tight spec here,
[02:26:33] It's interesting. I wrote that thing a while ago. What would the successor JSX look like?
[02:26:38] Dominic can answer
[02:26:40] that question.
[02:26:41] That's really interesting, isn't it?  Especially if it's something that could work for React as well.  You know, like this is a very interesting question.  Like very, very interesting.
[02:26:51] Thank you.
[02:26:53] Thank you.
[02:26:59] Thank you.
[02:27:00] I was one of these guys who, well, I mean, none of it is HTML.  That's the thing everyone's going to realize.  None of it is actually HTML.
[02:27:11] Thank you.
[02:27:11] Thank you.
[02:27:14] Thank you.
[02:27:15] It's a new format. Look at Ripple. Actually, no, let me post Ripple here.
[02:27:22] So you guys can check it out. As a framework in its own right, it is very cool. Ripple.js, let me see if I can find it. Or TS, right? Ripple TS. I love that. Everything was JS. Now it's like, why haven't we made the move to TS? Because everything is TS, right? Now?
[02:27:41] It's a special syntax around components and templating.
[02:27:46] um, is what he's saying, export it out, but it's actually a full JavaScript framework that uses
[02:27:51] a different sort of reactivity. It's like
[02:27:54] Somewhere...
[02:27:55] between
[02:27:57] React's like component owns the state and solid signals, but using, but at the same time being neither. It can get rid of the re-render problem react.
[02:28:08] Um...
[02:28:10] But also,
[02:28:12] So
[02:28:12] simplify some of the overhead of signals structurally by using the fact that it's component based.
[02:28:22] Thank you.
[02:28:24] - Want to write HTML, CSS, and JSON,  and write function all the time.
[02:28:30] Yeah, the problem is, like, you write that, but it's...  Bear my mind, I was talking about transparency before.  There's nothing real about any of this.  Like, part of the thing that I think that makes what TSRX interesting is,  if you look at Ripple, I think they support, like, Svelte, they have, like, style.  Like, if I go here and I go, like...
[02:28:48] Find me something with style. I think there's
[02:28:53] Okay.
[02:28:55] Yeah, see, you can do this in Ripple. You can do style components. If that was something that any framework could leverage,
[02:29:03] That's interesting, right?  Again, like...
[02:29:06] If you...  Like...
[02:29:10] Ripple is not solving your want to put these in separate files, but the reality is that
[02:29:15] these stop being separate
[02:29:18] over a decade ago.
[02:29:20] You can pretend
[02:29:21] But I don't like pretending.
[02:29:28] Thank you.
[02:29:31] Right? Like that's what it comes down to. You're
[02:29:35] Like...
[02:29:37] Do you pretend or do you not pretend?
[02:29:40] I'm not a pretender.
[02:29:42] but the...
[02:29:45] Thank you.
[02:29:47] And the thing is, I don't think other framework authors are either.  Like, Rich might let the, like, it's just HTML, CSS, JS,  that's travel, like, a little bit out there because it benefits spell.  But he knows it's not.
[02:29:59] Like...
[02:30:00] Dominic knows it's not.
[02:30:04] What's cool is what this little component wrapper does is it goes, "Okay, now this doesn't have to be a separate file. This is just a module." You start looking at these things as modular and then
[02:30:13] This makes a lot of sense.
[02:30:15] You know?
[02:30:16] This was a separate file, now it's a module.
[02:30:18] I think there's other features. I think they have something like server functions in here. Same idea.
[02:30:23] Inline modules, that's all we're seeing here.
[02:30:26] Like, if this...
[02:30:28] Sorry, I want to go back to the this the component thing. But if this
[02:30:33] was instead like import like an inline module as component or as ripple or whatever.  And you just put the code in here.  Then like...
[02:30:42] Like...
[02:30:44] That's essentially...
[02:30:47] What it is, it's just another like little language chunk.
[02:30:50] with inline modules. I think it's interesting. I mean,
[02:30:54] At that point, could you just go like import blank as Svelte and then like have like a Svelte component in here?
[02:31:02] Ultimately...
[02:31:06] Thank you.
[02:31:07] Are you going to pretend that everything, like, it's not even pretend.  Well, actually it is pretend because ultimately JavaScript's on the outside.
[02:31:15] You could say that HTML is on the outside because JavaScript lives in a script tag.
[02:31:20] But...
[02:31:21] Unless the outer HTML is actually real HTML and not getting converted into JavaScript again, it's kind of like...
[02:31:29] Because now we're living in weird inception mode where you have...
[02:31:32] actual HTML,
[02:31:35] that inserts a script tag that has JavaScript,
[02:31:38] which
[02:31:40] fakes HTML on the inside.
[02:31:43] Which is fine. Like I accept that. But like the the the authoring experience makes you think that it's on the outside. So like this is just a it's just smoke and mirrors. It's not you know what I mean? Not not ripple. I just mean the general idea of like single file components being any closer to some underlying platform thing. It's a lie.
[02:32:02] Yeah, so this is about like familiar feeling and for a lot of us who've been in web dev like pre-react, pre-dat, we had our set zones, you know.
[02:32:13] Um...
[02:32:20] The funny thing is if you view each thing as its own little app or its own little template, I think it's funny. I think it's actually the react re render model, like the functional programming push that actually is more.
[02:32:30] abrasive, right? It's people couldn't put their finger on it, but it's that re-render over and over thing either sits with you really nicely because, you know, you think in terms of like immediate mode, FP,
[02:32:43] you know, functional programming style like that.
[02:32:46] Or it's really weird with you because you're like, look, I have this DOM, I have this JS.
[02:32:51] I don't think anything about this stops you from saying I have this JS and I have this DOM.
[02:32:55] you know, or even, you know, sols.jsx or whatever.
[02:32:58] I know you're like, oh, what's this if doing in here?  But like...
[02:33:03] What were you going to do? Put it in the handlebars? Oh, suddenly it's way better. You know?
[02:33:09] you know,
[02:33:11] Mm-hmm.
[02:33:12] whether it's a map function, an if, a ternary, whatever the hell you want to do here,
[02:33:17] This if is still here, you know, like...
[02:33:21] Syntax is so superficial.
[02:33:28] Ripple pulls the period that breaks them out. I'll be adding React RTS plugin to SolidRx soon.
[02:33:35] Bam. That's exciting.
[02:33:37] Yeah.
[02:33:38] Yeah, big prop to Dominic.  If you guys don't know, did a stream with him when they launched Svelte 5.  Big, big part of moving Svelte to Ruins.
[02:33:47] Um,
[02:33:48] I know people have different feelings about that, but...
[02:33:51] And the current async system as well, a lot of work on that.
[02:33:55] you
[02:33:57] But like...
[02:33:59] Brilliant engineer, author of Inferno, author of Ripple. This guy's been contributing to the space for years.
[02:34:04] If you don't know who he is, you can follow him on the platforms.  He's always true ADM.
[02:34:09] uh,
[02:34:11] Dominic's the man.
[02:34:12] Thank you.
[02:34:14] Thank you.
[02:34:16] Thank you.
[02:34:17] Yeah, I think this is the underlying takeaway on a lot of stuff.  Like, the bundler is the...
[02:34:26] Is the...  Bundler and framework need to know about each other.  We've tried to keep it separate.  I think the first framework, they're really...
[02:34:33] I'd make that like
[02:34:35] present and obvious was probably quick.
[02:34:38] But Marco is also right with Marco six right on that ripple.  Like we're getting to a point now where.
[02:34:44] It isn't so much about
[02:34:45] You know, like...
[02:34:46] next versus react and like
[02:34:48] you know, meta framework framework. It's actually about how well the bundler can integrate.
[02:34:53] That's the friction point.
[02:35:00] Bye.
[02:35:01] Thank you.
[02:35:03] Thank you.
[02:35:05] So like, the funniest thing is the, the, the old separate three separate bio thing hasn't  existed for a while.  Maybe I don't know how to get people back there because even Svelten View, you know,
[02:35:18] I just...
[02:35:19] ignore the all the only reason the the chrome around it exists is to give you  portability and capability but if you just take what's in here like
[02:35:28] I'm looking at view or I'm looking at Svelte or whatever,  like more or less,  I understand you're like,  but it has a component or a function wraparound and I had the import stuff,  but it's like,
[02:35:38] hiding that
[02:35:40] doesn't mean that it doesn't happen.
[02:35:43] You know what I mean? Like...
[02:35:45] This just gives you more control.
[02:35:48] And it basically doesn't matter.
[02:35:51] Don't yes, it's noise, arguably.
[02:35:54] But
[02:35:54] This part in most frameworks is very, very similar, you know, other than syntax.
[02:36:00] You know, if it's a show,
[02:36:02] or this is Signal or whatever. But it's, you know what I mean?
[02:36:07] structurally these things look the same.  The biggest lie, or not lie, the biggest like dis...
[02:36:14] Mm-hmm.
[02:36:14] Separation now is rerun versus not rerun.  React and SolidCode can look identical, but operate completely different.  You know, that's the biggest split now.
[02:36:23] We almost all write the same...
[02:36:26] code in here now.
[02:36:28] Not everything is the same.  React is because that rerender model is different.  I think that's still the biggest difference.  In my head, I was like,
[02:36:34] If.
[02:36:35] This is the controversial part.
[02:36:39] Thank you.
[02:36:40] In React, you can write stuff in a completely different way to leverage the re-render model. You don't have to use useMemo, for example. You can write stuff in line and do all that.
[02:36:50] Dan Abramoff had this great example at the bottom of my articles where he was doing this crazy for loop in the middle of this component and doing all this stuff. And he's like, how do I port this back to, you know, solid or, you know, a system that depends on declarative data only? And I was like,
[02:37:05] The funny thing is, I was like, well, what if instead of us focusing on that for a second, how about if I rewrite your React code the way I'd write it in solid?
[02:37:13] Just get, you know.
[02:37:14] And
[02:37:15] Of course it was cleaner.
[02:37:17] Maybe people wouldn't have thought of that. He's like, but what happens if you change this now? You have that in two places? I'm like, yes  I
[02:37:23] But it's still cleaner.
[02:37:25] So
[02:37:25] And I think that's the key.
[02:37:28] The difference here.
[02:37:30] And controversial for me to say, but I think...
[02:37:32] the ideal
[02:37:35] way you would write or structure a React component is the way you would, you're basically forced to write it in Solid.
[02:37:43] Which is an interesting place to be.
[02:37:45] because
[02:37:47] for like AI and stuff.
[02:37:48] Because React compiler does the same thing and restructures stuff towards that thing.  Eventually, what you get to a point is this top section is declarative. You end up with var const or varial equals some expression. If you unwrap the loops, you unwrap the conditionals, you do that, you end up with a series
[02:38:06] of variable declarations that are derived from other variable declarations.  It's always cleaner than the mess and it's always more specific.  People don't think that way so they can't write it as easily.  But the compiler, when it hoists and do that, essentially is doing that.  It's like, "Okay, take this calculation, assign it to a variable." Then she just like,
[02:38:23] you end up with a series of these variable declarations  which is basically what you write when you write signals so
[02:38:32] And
[02:38:34] Thank you.
[02:38:35] Thank you.
[02:38:36] Is it better to let the AI go off crazy and write a bunch of garbage?
[02:38:41] Or is it just be like, just write the freaking declarations.
[02:38:46] Thank you.
[02:38:48] Thank you.
[02:38:52] Thank you.
[02:38:57] For people who aren't engineers, they prefer to have less control in order to be guided, more done through detail.
[02:39:03] I think AI maybe will hopefully solve this.
[02:39:11] Thank you.
[02:39:13] Render complexity, yeah, definitely. It feels like programming threads back and then worry about re-entering code. Yeah.
[02:39:19] I mean, this is why models evolve. Okay, so I went on a little bit of a tangent here.
[02:39:24] Glad I did, though, because Dominic here in the chat talking about this pull request.  For anyone to check out pull request 866, it looks like this is going to be very interesting.  Maybe have Dominic come back on stream, talk about Ripple and talk about this sometime shortly in the future.  Although I've got some leave coming up, which means I won't be streaming for a while in a month or so.  I've got a couple more streams before that, so I don't know if I'll catch them before then.  We'll see how these can progress, but very, very, very interesting.
[02:39:52] I think it's a good place to cap up on the compiler conversation. I still got another  example to do.
[02:39:59] Um,
[02:40:01] But yes, very, very interesting stuff.
[02:40:04] um
[02:40:06] But yeah, the last example that I want to do
[02:40:11] is
[02:40:13] the reveal example.
[02:40:15] Thank you.
[02:40:16] What is Reveal? It's what we talked about last week.
[02:40:20] It's a Spence list.
[02:40:25] Essentially, I made an example where you can toggle either together or collapsed, but essentially
[02:40:31] Thank you.
[02:40:32] What are this example is?
[02:40:34] is
[02:40:37] Reveal is a component that's like a context provider around suspense.
[02:40:42] What it does.
[02:40:44] is
[02:40:45] it controls the visibility of all loading boundaries underneath it.  And I actually have an example where it, it, it, um,
[02:40:54] is nested, so you have a reveal and a reveal with one card or a couple cards outside of it.  These async cards are just separate loading boundaries. You see them all over the place.
[02:41:02] I have another example where you just have
[02:41:05] One, two, three.
[02:41:06] Reveal has two options. It can be together or collapsed or neither. If it's neither,
[02:41:12] It loads...
[02:41:15] Things in visual order, one, two, three.
[02:41:19] But it shows all the fallbacks. If you say "together", it loads them all together. If you say "collapse", it only shows the fallback of the current one, like, next one it's working on. It doesn't, like, show all the fallbacks.
[02:41:30] Collapsed his
[02:41:32] The thing is, if your loading boundaries have no fallbacks,
[02:41:36] You don't even need collapsed. You could just say reveal.
[02:41:41] Thank you.
[02:41:42] But essentially what we've done here is these async cards are very simplistic. They're just
[02:41:47] A loading boundary.
[02:41:51] that
[02:41:52] This delays some value for the set of time that you set in as the prop.
[02:41:57] If you look here,
[02:41:59] But these ones just happen to load in order.  They don't have to, but 500, 11, 1700.  And then these ones, 700, 900, 13, 15.
[02:42:08] But there's like some internal behavior now.
[02:42:11] Thank you.
[02:42:12] Who cares?
[02:42:13] Why do I want to reveal component?
[02:42:16] Together,
[02:42:18] There's a couple reasons for it.
[02:42:22] Together is interesting for that weather app.  And maybe we can try that again later.  I'm gonna actually switch to Together  so we can see this again.  What Together does here,
[02:42:30] is you notice how that we have one, two, three,
[02:42:36] One, two, three.
[02:42:38] Thank you.
[02:42:39] Actually, I need to remove the closest so we can see better.
[02:42:44] The nested one's like messing with us a little bit. So it's like losing height.
[02:42:49] But basically these remember they were like 500, 1100, 1700. Wait until 1700 to show them all. Nested is interesting because
[02:42:59] Um,
[02:43:01] Collapse doesn't do anything when together it doesn't matter, but Ness is interesting in that
[02:43:05] These can...
[02:43:06] independently show first, I think. Doom Doom.
[02:43:12] Yeah, that's actually a good question about how Together should work with
[02:43:15] with collapsed right now, this group finishes first and then this group finishes first.  So you can kind of control
[02:43:22] But it's like,
[02:43:23] So there is some isolation caused by it together.
[02:43:26] Here.
[02:43:27] Yeah.
[02:43:28] -
[02:43:30] in order,
[02:43:32] shows all the loading boundaries.
[02:43:34] And just does them...
[02:43:37] as they load in in order
[02:43:40] Obviously their times put them in order so like if they're out of order what would happen is like
[02:43:46] I mean, I can actually show that in a second, but if they're out of order,
[02:43:50] It can't show...
[02:43:52] two before one, so if two finished first,
[02:43:55] it would actually wait
[02:43:57] to show it until one showed up.
[02:43:59] Collapse is the most interesting version because you only see the next loading boundary. See how it goes like,
[02:44:05] A and then loading B and then loading C. So it kind of goes A, B, C.
[02:44:09] And similar for the nested case,
[02:44:13] Um,
[02:44:14] It blows this one, then this one, then this one, then this one.  It actually kind of collapses along here.
[02:44:21] So,
[02:44:23] That's the gist of what Reveal does, the client side.
[02:44:27] It gets interesting. You might be like, well, why don't you just put these under a single loading boundary? I think the weather app is a good example of it.
[02:44:37] Um,
[02:44:38] you might want to add more items to the list later  and you still want those to show up together as well.  So like you don't want to ref...
[02:44:45] and because the way we never go back to loading, you actually want these to have separate loadable boundaries and not, you know, impact the rest of this. So it's perfectly fine, you know, to,
[02:44:57] to say I'm gonna load all of these together.  The reason is you might not want,  this nested case kinda like,
[02:45:03] shows this off a bit, but
[02:45:06] If the loading placeholders were actually cards or something that was like,
[02:45:11] preserve space, this prevents like the weird flicker in effect, right?
[02:45:19] Thank you.
[02:45:21] *sniff*
[02:45:28] Okay, yeah, so let's talk about it. Does it perform the rendering after the latest async card is rendered? Or I'm particularly hoping it doesn't first render it later. Okay, cool.
[02:45:38] on the client,
[02:45:41] Um.
[02:45:45] Let me think about how the...
[02:45:46] Yeah.
[02:45:47] We load in the background, so
[02:45:50] Yes, actually, yes.
[02:45:51] But the more important part was making this work on the server.  I didn't want...
[02:45:56] just because inner two finished first,
[02:45:59] I didn't want to like wait flushing it. So I
[02:46:03] The system, what makes this really cool is
[02:46:07] we can actually send
[02:46:10] we don't hold the stream on stuff that isn't visible yet.  So if Outer 2 finishes first for some reason, like 100 milliseconds,
[02:46:19] Um...
[02:46:21] we can actually
[02:46:23] send it to the client, we can render on the server, send it to the client and have it just waiting there. It won't swap into place until the other ones come in, but we actually don't hold up the
[02:46:33] the stream for this. This is important because there was some talk about batch queries. And don't get me wrong, batch queries make a lot of sense when you're hitting one database and you're like, I don't want to hit it 50 times. I want to hit it once with all the items I want. But
[02:46:48] You know, something like the Weather App.  But in a case like this, where...
[02:46:52] The problem with batching,
[02:46:54] or putting in the same async is now everything is beholden to. You can't render, you can't do anything until everything finishes.
[02:47:02] This mechanism lets you keep these things independent.
[02:47:05] you know, as I said, not in all cases you want them to be independent, but it keeps it independent so that like,
[02:47:10] I mean, let's see if I can prove this.
[02:47:12] I haven't actually tested this. This might fall on my face while I'm talking, but if this last card
[02:47:17] is now 150.
[02:47:26] Thank you.
[02:47:26] Can I prove what I'm talking about?
[02:47:29] Or is this not working yet? First of all,
[02:47:34] We just saw...
[02:47:36] it behaved properly, right? We saw it like kind of come in and flipped. Even though this one finished first, it didn't show till last.
[02:47:42] But the real question is here,
[02:47:50] No, what I'm saying is the server side they are erasing in the real thread is relevant only on the client. No.
[02:47:56] Yeah, so...
[02:47:57] What the real question is,
[02:48:00] and this is the one that should be interesting is
[02:48:03] If we refresh this
[02:48:07] What I want to see
[02:48:09] is
[02:48:13] Let's hope this works. It looks like it worked.
[02:48:16] loading loading loading loading
[02:48:20] Loading, loading. First of all,
[02:48:22] Mechanism I'm doing here is, I'm loving. I know this won't translate off the web.  You know how I showed you before the placeholders worked by doing
[02:48:31] Let me see the first placeholder by doing template.
[02:48:34] and then showing
[02:48:36] And then all the way down to the comment with the same ID, that's the fallback.  So technically it's not in the template.  I just use the template as an ID marker because it's invisible.  So I can grab this and then walk instead of like searching the whole Dom to find the swappable parts.  I can actually query selector this so that I can do this.
[02:48:53] But look at the ones with the suppressed fallback.  The ones with the suppressed fallback...
[02:48:58] we still render the fallback right away.
[02:49:01] But we put it inside the template instead of between the template and this.  That way, when it's told to reveal, this all happens before the JavaScript framework loads.  So this reveal behavior happens even if the client framework hasn't loaded yet.  It's part of that inline script.  It can just grab the fallback out of the template element and insert it in between the template element and the template.
[02:49:24] and the string here.  So basically like clone it in.  So we actually render the fallback immediately.
[02:49:31] in the case that we detect there's a fallback.
[02:49:35] And,
[02:49:36] But where it gets interesting here, so that's what these are is.
[02:49:42] Outer two is the first template. See?
[02:49:45] Outer 2
[02:49:46] is the first thing they've streamed. It's not blocked.
[02:49:50] Um,
[02:49:56] Yeah, yeah, exactly. So, and the client, because we can render in the background with suspense too,  should be decoupled too. I need to double check that, but generally speaking,
[02:50:05] of, yeah, I care about performance, guys. Of course I'm gonna make things not blocking. Everything in solid
[02:50:12] is blocks the least amount as possible causes the least amount of waterfalls.  That's by design. There's no reason not to be that way, right?
[02:50:21] But yeah, see, outer two streamed first.
[02:50:23] It couldn't replace itself, first.
[02:50:26] It had to wait for the other ones to come.
[02:50:28] but it actually was the first one we sent across the wire. So
[02:50:32] This is great because it means that we're not like picture if...
[02:50:37] Picture if like this was the first request was the slowest on the page, like outer one was the slowest on the page.  Can you picture if you.
[02:50:44] Or like, like the reason you want this is nested cases.  Interesting, but forget about nested.
[02:50:51] This is eBay.
[02:50:53] Header.
[02:50:55] First, actually, let's look at eBay.com.
[02:51:00] Do you see something? Second.
[02:51:03] section, section, section, section, section.
[02:51:07] Section.
[02:51:09] Puder.
[02:51:10] I know for a fact stuff like the homepage,
[02:51:13] in order streams. It goes from top to bottom.
[02:51:15] Because they don't want layout shifts.  I don't think they even show loading indicators.  No, they don't.
[02:51:19] It's not there.  They literally...
[02:51:22] Just
[02:51:24] dun dun dun dun dun dun dun dun. It has the least amount of layout shift and it just kind of like flows in depending on the order.
[02:51:30] But they can't show this before they show this. They definitely do not want to do that.
[02:51:35] because then you have things jumping around.
[02:51:38] Usually the first stuff will come really fast, but it rapid fires down.
[02:51:42] So if this finishes before this, they'll show this right away.
[02:51:46] But if this finishes first, I'll wait for this to show before showing both of them.
[02:51:50] Now,
[02:51:53] That's why this is relevant here, because this ABC means that
[02:51:57] If A takes the longest...
[02:52:00] Yes, we won't show it.
[02:52:03] We won't show B and C until A comes in.
[02:52:06] Unfortunately,
[02:52:08] But I mean, it makes sense because you don't want it to jump around.  But that doesn't stop us from sending BNC to the client.
[02:52:15] Because we need, picture if these were huge amounts of HTML being sent over the wire.  Can you picture just waiting and being like, okay, wait, hey, you're finally run.  Now send the whole page.
[02:52:25] I mean, it's fine, but...
[02:52:26] It's so much better.
[02:52:28] Um,
[02:52:29] if we can send BNC first, if we can leverage it for out of order. Don't get me wrong. In order streaming like eBay does, it doesn't actually buffer it the way I'm talking about it. It doesn't actually send BNC first because there is a cost of taking the template and swapping it in.
[02:52:42] So...
[02:52:43] You know, there is an argument there, but since we don't have real in order streaming and this is only simulating it, blocking would just be the worst of both worlds. I guess we would literally, uh.
[02:52:53] You know what I mean?
[02:52:55] we just would hold it and then not
[02:52:58] Like we're already doing out of order streaming here.  So why would you hold it?
[02:53:06] It only matters when you have HTML still collection.  Yes, but that's what e-commerce cares about.
[02:53:16] I think, yes, yes. That's what this nested example is showing.
[02:53:23] The thing is,
[02:53:25] I don't have it here.  We can wire it up, but we could have...
[02:53:31] typical collapse and then have inner be together. So we go one,
[02:53:35] wait for both of these to show it. And I think that's a more common one where you'd go,
[02:53:39] typical collapsed or like typical reveal on the outside and then put together a
[02:53:44] on on the inside.
[02:53:48] There is a question, I suppose, of what if you wanted to opt out of the reveal pattern somewhere and just have stuff loaded randomly.
[02:53:56] Um...
[02:53:58] That's actually a good...
[02:53:59] A good question.
[02:54:01] I actually...
[02:54:03] Huh.
[02:54:10] Yeah, that's an interesting one. I actually don't have an option to do that right now. Once you go to reveal, you're sort of coordinating your options are in order or together.
[02:54:20] But that's something I should consider.
[02:54:27] Thank you.
[02:54:29] Yeah, yeah. Exactly.
[02:54:35] So
[02:54:36] Anyway, but yeah, that's interesting.  What if you...
[02:54:39] Wanted to just...
[02:54:43] Hmm.
[02:54:44] That actually impacts the API design.  I don't know why I didn't think of this.
[02:54:50] Thank you.
[02:54:54] Because you actually need, if you wanted to opt out, you'd have to be like,
[02:55:01] You need a nested reveal that was like,
[02:55:04] not together, not collapsed, like literally like
[02:55:08] YOLO reveal.
[02:55:10] You know, like you basically need an opt out version here.
[02:55:14] I think that's...
[02:55:15] That is a gap. Okay. That's interesting.
[02:55:19] All right.
[02:55:23] Thank you.
[02:55:25] Yeah, that is actually interesting. Nested loading will get you out of it too, but
[02:55:32] Um,
[02:55:33] that's not really what you're trying
[02:55:35] to do, I think.
[02:55:42] Thank you.
[02:55:43] I struggle to think we're bringing us more worse than the alternative. Yeah, I mean,
[02:55:48] Yeah.
[02:55:49] The only problem is
[02:55:53] So what you're saying is that maybe we shouldn't stream early?
[02:55:59] like this old
[02:56:01] Hold two?
[02:56:09] I was thinking the independence was valuable.  Um...
[02:56:13] but we can't hydrate it early.
[02:56:17] Yeah, that's an interesting question.
[02:56:25] Thank you.
[02:56:29] Well, actually, big HTML, not a big deal.
[02:56:34] But
[02:56:36] Less of it still probably good.  Like if the time difference is enough,  like if you,  if you,  if I can send two to the server,  uh,
[02:56:45] like,
[02:56:46] And the next one's like,
[02:56:48] half a second later
[02:56:50] It's better to send it early, right?
[02:56:54] It might not make a huge difference, but it's probably still better to send it early.
[02:57:01] Thank you.
[02:57:04] Probably not. No, I, overrides, granular overrides are not great for boundary type scenarios. Um,
[02:57:14] I think...
[02:57:16] Like we need a clear boundary the same way like loading is a clear boundary.
[02:57:21] Reveal the clear boundary.
[02:57:24] Yeah.
[02:57:26] Okay.
[02:57:30] Well, I mean, that's the question.  I mean, it's just...
[02:57:35] It's just send sooner than later seems like a good thing.
[02:57:42] Thank you.
[02:57:44] You're right in that like
[02:57:48] It isn't that.
[02:57:49] Okay.
[02:57:50] You're like, the compression could be better, which I agree.
[02:57:56] Okay.
[02:57:57] But like at a certain point...
[02:58:02] Like obviously this is silly because I'm like literally looking at like a
[02:58:07] single div or whatever, but like,
[02:58:09] A certain point just
[02:58:12] E-
[02:58:13] Thank you.
[02:58:14] Yeah, that's an interesting question.
[02:58:25] - Yeah, I mean, that's the question.
[02:58:29] I...
[02:58:29] you're trading one side for the other side.  You're like, I can make the HTML smaller,
[02:58:35] because I can compress it better.
[02:58:38] or I can just send it earlier.
[02:58:41] Thank you.
[02:58:43] And then I'm sending less later.
[02:58:49] Yeah, it's interesting.  This might not...
[02:58:53] the
[02:58:55] We'd have to measure it. I was mostly focusing on mechanically not blocking.
[02:59:00] I wasn't worried too much about a...
[02:59:05] like what other like the last class optimization can come in.
[02:59:14] Use an idle network, exactly. I think it's still probably a win on average enough that I'd want to keep this behavior, but it is a question.
[02:59:22] Like it's small, perhaps.
[02:59:28] But yeah, I mean, this is the real reveal component.
[02:59:35] It's definitely interesting.
[02:59:39] On the client,
[02:59:44] we... because of the way suspense works and loading works, like...
[02:59:49] we're going to still walk into it and render it.
[02:59:52] we just won't show the fallback or won't like reveal this,  you know,  show the thing.  So from that perspective,  um,
[03:00:01] It doesn't like there's there's no consideration.  It's just it's all parallelized. So.
[03:00:07] Yeah.
[03:00:11] I think you can like tell that like
[03:00:29] I think it's going to be hard to benchmark because I think it's going to depend on the situation.
[03:00:33] But yes, I agree with you that...
[03:00:36] the compression like
[03:00:38] can make a...
[03:00:39] probably a real like
[03:00:41] Thank you.
[03:00:42] The compression can make a big difference. It depends on the size of the chunk. It depends on
[03:00:48] the
[03:00:49] the delay difference,  but it like,
[03:00:52] I would err generally on earlier is better.
[03:00:56] Like...
[03:00:57] Not always, but...
[03:00:58] If I was, you know,
[03:01:04] but if
[03:01:05] The bottleneck is because the soundtrack is very big, you'll still compress this chunk and get the benefits of compression.
[03:01:10] Yeah.
[03:01:15] I hate options. If we have to, I don't trust people to...
[03:01:21] We'll cross that bridge when we get there.
[03:01:30] I actually want to talk about something kind of related.
[03:01:35] We made a breaking change last minute. I talked to ecosystem and everything. Everyone seemed to be on board, but I got rid of the initial value on signals.
[03:01:45] And this is like a very
[03:01:48] It's kind of actually where I want to go next anyways.
[03:01:50] I think
[03:01:52] Unless anyone else has anything else on here.  But I want to talk about the cost of providing options.  Options, like...
[03:01:59] I'll put this way, I deleted a thousand lines of code just by removing the initial value option, which seems insane.
[03:02:08] Thank you.
[03:02:11] I think this is a case where like the optimal solution,  there's no optimal solution covering all this,  all this cases,  but the difference between the optimal and the unoptimal solution is,
[03:02:22] in like is not
[03:02:25] huge like
[03:02:26] It'd be interesting to see if there's...
[03:02:32] like,
[03:02:34] Thank you.
[03:02:35] Like, you could probably create a scenario under certain conditions that it would be.
[03:02:44] But it's kind of like
[03:02:47] I
[03:02:49] Thank you.
[03:02:50] I think this is a scenario where it's probably beneficial and at worst case where it's not beneficial it doesn't matter.
[03:03:00] Like basically we can always fall back to compression giving us a reasonable size.
[03:03:05] But we can't always fall back to the knowledge of
[03:03:09] uh,
[03:03:10] being able to flash stuff early.
[03:03:13] Thank you.
[03:03:14] Thank you.
[03:03:16] Thank you.
[03:03:18] Thank you.
[03:03:20] In terms of we stream SCC with Broadly, we just send it down when it should be displayed. The longer the stream, the more benefits we get.
[03:03:31] But the stream, like...
[03:03:33] We're...
[03:03:34] *sniff*
[03:03:37] I don't know enough if SSE is different, but this is all over the same initial stream, right? Like on HTML. I thought the chunk size is what mattered, not the fact that you're streaming like essentially like.
[03:03:48] We...
[03:03:48] We don't if we send the bit, the larger the chunk, the more each chunk can benefit.  But the fact that the stream has been open longer doesn't make a difference.  So maybe SSE is a little bit different.  But my understanding is like the reason why we're having this conversation is because like this is all the same stream.
[03:04:04] It's just that
[03:04:05] Do we
[03:04:07] Send stuff early.
[03:04:09] So that it's there so we don't have to send over the wire later?  Or do we send a bigger chunk later so that we can compress it better?  Because...
[03:04:18] we don't benefit from the compression if we send more chunks.
[03:04:22] At least that's the way I understood it.
[03:04:28] Thank you.
[03:04:31] Right.
[03:04:37] But sorry, unless I re-route this.  Let me start my screen as.  Just send it down when it should be displayed.
[03:04:43] Thank you.
[03:04:44] Thank you.
[03:04:46] The longer the stream... I think you mean the larger the chunk, yeah.
[03:04:50] Thank you.
[03:04:52] I don't think the latency was... I mean...
[03:04:56] But you get what I'm saying, right?
[03:04:59] *sniff*
[03:05:01] If...
[03:05:01] If these are separated by...
[03:05:05] 500 milliseconds.
[03:05:07] getting there sooner
[03:05:10] is...
[03:05:12] bigger than any difference the compression is going to make on time.
[03:05:20] Mm-hmm.
[03:05:21] It's only the fact that we, like, what we're actually weighing...
[03:05:27] is like
[03:05:28] Like maybe if we more like combination, the chance like we don't have actual in order streaming.
[03:05:33] Like,
[03:05:34] Like the JS doing the swapping and all that was where like the overhead differences, like you could probably optimize a case where JS is not doing the swaps.
[03:05:42] Right.
[03:05:43] exactly what you're saying. You could kind of force it into in order.
[03:05:49] Which I don't think really an option for us because we're innately out of order.
[03:05:53] Um...
[03:05:57] Like we're still swapping it
[03:06:00] into
[03:06:02] I guess we could do less swaps, but we're still going to be swapping it into...
[03:06:07] Maybe multiple locations actually.  Yeah, because the loading boundaries can be separated by real elements.
[03:06:13] Like even if we wait, like these two get still get swapped in separately.
[03:06:19] Because the div around this...
[03:06:22] and the div around this might already exist.
[03:06:25] Thank you.
[03:06:26] So they're actually getting inserted into two separate places.
[03:06:29] We're not doing actual in order.  If we were doing actual in order, I think that would be more of a point.  But this is actually...
[03:06:36] using out of order and simulating
[03:06:39] This is like simulating in order in an out of order system, which means that the overhead of doing swapping is still
[03:06:46] the same.
[03:06:48] So the
[03:06:53] Thank you.
[03:06:54] That was something that I realized was a design miss as I was talking about it.  I don't think the individual loading boundaries should be.
[03:07:02] But I think
[03:07:04] that
[03:07:08] I think that there should be a nesting of reveals that lets a nested reveal opt out of the parent.
[03:07:14] Like basically say, for my children, I don't care about the order.
[03:07:23] Thank you.
[03:07:28] So
[03:07:31] Yeah.
[03:07:33] It's...
[03:07:34] It's hard to say for every scenario, but generally speaking, since we don't actually offer in-order streaming, I don't think the combining the chunks is as beneficial for us.
[03:07:44] Thank you.
[03:07:47] Yeah, sorry, this got really derailed.
[03:07:52] Um.
[03:07:53] Sorry.
[03:07:56] Yeah, let...
[03:07:58] I want to switch gears here. I want to talk about...
[03:08:03] Okay.
[03:08:05] I want to go to github.com.
[03:08:08] I want to go to the solo.js repo.
[03:08:11] you
[03:08:12] Yeah.
[03:08:13] Um,
[03:08:15] I'm gonna go to next
[03:08:19] What was new reactivity? That one feels like it was a long time ago. It's like not new at all.
[03:08:25] Okay.
[03:08:28] Thank you.
[03:08:29] And I want to go to documentation.
[03:08:32] And I want to go to solid 2.0.
[03:08:34] And I want to talk about a few of the new things in here.
[03:08:38] That's where I want to go next. Yes. Um,
[03:08:43] I can probably shut off this demo.  I think...
[03:08:46] I think this has served its purpose.  Is reveal... yeah, so I'm going to put this back to...
[03:08:52] Thank you.
[03:08:53] this
[03:08:54] Because we actually made some good changes here that might be worth committing for the update.
[03:09:00] simplifying that code
[03:09:02] and removing the
[03:09:06] Optional types. Yeah, let's do this.
[03:09:09] Let's just commit this.
[03:09:13] Thank you.
[03:09:14] Demo clean up
[03:09:18] or example.
[03:09:25] See if I missed anything else.
[03:09:27] No, I think that's good.
[03:09:30] Oh damn it.
[03:09:31] Whatever.
[03:09:32] Thank you.
[03:09:35] It says E SSR example cleanup doesn't matter.
[03:09:38] That's why you get...
[03:09:40] You get...
[03:09:42] AI to write your commits, fix you from typos. Okay, let's switch over.
[03:09:48] Because I want to talk a bit about...
[03:09:50] um
[03:09:51] what's what's left to do and where things are at because i they're
[03:09:56] I have actually updated the RFC documents.  I don't want to go through them all in detail.  Again, we did that on a previous stream.
[03:10:03] But...
[03:10:06] These are much more complete now than they were before and serving as kind of a basis for docs.  And for this, I am going to switch my views so that I'm not blocking the text.
[03:10:14] Um...
[03:10:16] Yes.
[03:10:20] Hey.
[03:10:21] Thanks for dropping in and saying hi.
[03:10:28] Thank you.
[03:10:30] so okay  we've talked about
[03:10:33] Quick checklist imports, 1x imports smooth batching reads, right?
[03:10:38] Setters don't immediately change reads return values, become visible after microtask flushes, effects create effective split, we talked about this.  Cleanups return a cleanup function, lifecycle on my replace unsettled, can return a cleanup, async loading is pending, refresh indicators, index gone, use for keyed false, for uses accessors, stores...
[03:10:58] Draft first setters, store path exists as an opt-in helper.
[03:11:03] plain value snapshot replaces unwrap when you need reactive, use, remove for ref,
[03:11:08] Merge helpers, merge split on mid. Okay.
[03:11:10] Um.
[03:11:14] showing the import differences,
[03:11:19] This behavior that scares the hell out of people, understandably.
[03:11:25] I think...
[03:11:26] Okay, yeah.
[03:11:29] you
[03:11:31] This is an interesting one.
[03:11:35] Thank you.
[03:11:37] The initial value argument is gone.
[03:11:41] which is kind of a recent thing. We did it.
[03:11:44] you can always just set prev=0
[03:11:47] Um,
[03:11:50] We did it so that we could collapse the options a bit.
[03:11:55] even though we still pass the previous through, you can do something like prev equals zero or whatever like this, generally speaking.  I don't think many people use the previous argument, and the confusion was that
[03:12:06] So
[03:12:07] The previous argument was never visible or read somewhere.  People were trying to use it like latest, like they were trying to be like, get, you know, like when async's in flight, I said initial value.  Why can't I look at the initial value instead of looking at the in-flight async?  And it's like.
[03:12:23] the idea of something being uninitialized is super, super important in the way that the system works. You can't have it like,
[03:12:29] not be uninitialized.
[03:12:32] Having an initial resolve value is important. So initial value was never actually a real initial value.
[03:12:40] We still have it for stores because stores need to make a proxy.
[03:12:45] because you mutate them like they're an actual
[03:12:48] Like...
[03:12:48] proxy, but for memo signals, et cetera, there's no initial value
[03:12:53] Um,
[03:12:54] Yeah, to clean up.
[03:12:57] do I think these examples are at least getting a little bit
[03:13:01] Better.
[03:13:02] Let's...
[03:13:03] doesn't show the cleanup logic in here.
[03:13:08] Huh?
[03:13:16] Talk about warnings.
[03:13:21] Yeah, this throws an error now. If you try and write to a signal inside a computation, it actually throws, not just warns.
[03:13:30] Yeah, people didn't even know it had a default argument. I used it in the renderer, so...
[03:13:35] It's
[03:13:36] Fucking... This is why I think it's okay.
[03:13:40] - -
[03:13:41] The on...
[03:13:43] I...
[03:13:45] Yeah.
[03:13:45] but
[03:13:47] I'm trying to think if there is actually lots of renaming. I'll get down to it. Some of them
[03:13:51] The renaming also usually contained behavior changes too.
[03:13:56] So let me keep on going here. Actually, you know what, I'm going to copy this document so people can follow along if they're curious.
[03:14:07] Okay.
[03:14:07] But yeah, this right,
[03:14:12] Now actually throws.
[03:14:14] Unless you, we have something, there's an option you can do to get out of it, but
[03:14:18] Generally speaking, you shouldn't do that.
[03:14:20] Obviously suspense.
[03:14:22] Loading. Errored.
[03:14:28] The basic parameter plays createResource with async/createMemo or createStore for collections and wrap consumers in loading.
[03:14:35] uh,
[03:14:37] Huge difference.
[03:14:40] Thank you.
[03:14:41] Thank you.
[03:14:42] Yeah, this whole section explaining how to replace create resource.
[03:14:48] Thank you.
[03:14:50] Thank you.
[03:14:52] Thank you.
[03:14:55] Thank you.
[03:15:00] The funny thing is what we've replaced it with is so much better.
[03:15:04] I'm actually really excited about this.
[03:15:08] We just made refs way more powerful.
[03:15:15] To be fair, it's different. We don't throw when you...
[03:15:22] call setter in the back half. You can't make that illegal.
[03:15:26] We throw when you call the setter in the front half.
[03:15:33] Thank you.
[03:15:35] The biggest... you can look at the change log.
[03:15:39] Thank you.
[03:15:40] Thank you.
[03:15:42] AI is pretty good at writing changelogs.
[03:15:46] So where was I?
[03:15:47] Um,
[03:15:54] This is showing the difference between showing a pending indicator or due loading.
[03:15:59] latest
[03:16:03] Refresh, refresh pattern using refresh.
[03:16:07] Actions + Optimistic Helpers
[03:16:11] These go kind of hand in hand.  You don't need to...
[03:16:14] But
[03:16:16] Do do do do do do.
[03:16:21] Thank you.
[03:16:24] We kept store path, which is...
[03:16:26] if you want to use the path syntax with a little bit of difference.
[03:16:30] unwrapped a snapshot, it does have a different meaning. It's because the underlying part of the story is
[03:16:35] immutable so we can't pull out the original object anymore. Snapshot will apply the current
[03:16:41] changes on top of your object and give you a new one.
[03:16:46] merge, prop split props, merge and omit.
[03:16:49] Which is nice and clean.
[03:16:52] Thank you.
[03:16:53] Function forms for createSignal and createStore.
[03:16:59] Thank you.
[03:17:02] This is wrong. Oh, man. You always miss these things. Like, why is items a number...
[03:17:09] Items is not a function.
[03:17:11] Just items dot length. Blah.
[03:17:14] index is
[03:17:15] gone, four children use accessors,
[03:17:20] Yeah.
[03:17:21] Index just becomes that.
[03:17:25] Which is nice because most people aren't going to bother using index.
[03:17:32] Call them.
[03:17:35] Thank you.
[03:17:41] Same idea.
[03:17:42] Yeah, I can't believe I missed that, the way to opt out of reveal behavior.
[03:17:49] It makes sense to make it a reveal with
[03:17:53] um
[03:17:54] Like...
[03:17:57] like a different option. The problem is I was, this is going to cause another slight breaking API change. I was using Booleans because they're clean and because they're mutually exclusive. Now, like, now we're going to have three, we're going to have like
[03:18:10] reveal
[03:18:11] reveal together, reveal collapsed, and reveal natural.  And at which point you're like, shouldn't it just be reveal mode equals to string?
[03:18:20] Do you know what I mean? Instead of like
[03:18:23] having a separate...
[03:18:24] Booleans you have to remember the name of.  You could just go reveal mode.
[03:18:28] I was just, when there was only two, we could kind of get away with not having a mode and I kind of liked that.
[03:18:33] But now
[03:18:34] You know, I like the way it read so you could be like,
[03:18:38] It could be like reveal natural.
[03:18:41] I still might do that.
[03:18:47] Thank you.
[03:18:48] Thank you.
[03:18:50] Muted false, yeah.
[03:18:57] Yeah, what's cool with refs is we accept array refs now, so you can apply multiple refs.
[03:19:03] They get a bit of like the classless treatment where we can combine, like spread refs into refs through component trees if you want.
[03:19:11] calling the only difference between
[03:19:15] Um...
[03:19:17] The key part here is that
[03:19:24] It becomes more common for a directive to have like a...
[03:19:29] The idea is
[03:19:31] you return a ref function.
[03:19:33] Right?
[03:19:34] is the key to this. Where
[03:19:37] You...
[03:19:38] A directive is now like this.  Originally, what I like about this pattern
[03:19:43] is if you had some code in your component,
[03:19:47] It would look like this, and then you would just...
[03:19:50] pass this into the ref naturally.
[03:19:53] Now we've made it so that
[03:19:56] Um...
[03:19:57] you
[03:19:59] essentially
[03:20:00] Thank you.
[03:20:01] Thank you.
[03:20:04] Thank you.
[03:20:05] you can just extract that code into the same kind of separation.  I know it's weird to have like L here and then why you're writing it to here.  The reason is in this scope here, this is like an effect scope.  It's like a place where it's safe to write.  You can write a signal here. You can go set signal.  Like this could be set signal in fact.
[03:20:22] Thank you.
[03:20:24] So it's not considered an impure write, whereas this scope is set up. It's like the same as being top level in a component.
[03:20:30] So this is an...
[03:20:32] its own createPermitSubscription tier, avoid imperative DOM mutation at this level. In fact, it'll error at you if
[03:20:37] Not DOM mutation, but if you try and like call set signal in here, it will error at you. Apply phase, unowned. DOM rights happen here, new primitives should be created in this callback. Yeah.
[03:20:49] So like
[03:20:51] Back to your question, um...
[03:20:56] It works the exact same way. You can pretend this is the component body,
[03:21:01] And then this is what you pass to the ref.
[03:21:03] We did a little bit of trickery with the compiler, not much.
[03:21:08] So that
[03:21:10] like
[03:21:11] This runs...
[03:21:14] Um,
[03:21:16] For native elements, it was easy. For components, it was a little bit different, because of the way they use getters. But generally speaking, this runs
[03:21:23] immediately the setup.
[03:21:26] like wherever you, the call site is. And then
[03:21:29] when the ref function is called,
[03:21:32] that's where it actually becomes live. So you can view the setup basically
[03:21:37] as an untracked top level thing. Basically, this is just a micro component.
[03:21:42] It's...
[03:21:44] If that makes any sense, which, as I said, it's very cool because if you originally had this logic in a component, you would just extract the top part into the function and then...
[03:21:54] past the
[03:21:55] results of that function into the ref
[03:21:58] Does that make sense?
[03:22:01] Thank you.
[03:22:04] Thank you.
[03:22:08] Thank you.
[03:22:12] Hopefully that makes sense.
[03:22:17] Yeah, yeah. The reason you never want to use Booleans
[03:22:21] is because of the combinatorics of them.
[03:22:24] There is an interesting argument, though, if...
[03:22:28] they're actually mutually exclusive see and the funny thing is if
[03:22:33] Thank you.
[03:22:35] It's a little bit different with a DOM element.
[03:22:39] because
[03:22:41] E.
[03:22:42] It's the inclusion like you can just go like, reveal natural.
[03:22:48] is like
[03:22:49] the syntax is a lot cleaner than like mode equals one two three
[03:22:53] The interesting thing is I wonder if from a types perspective we could actually make them all mutually exclusive.
[03:22:59] That would be interesting, actually.
[03:23:02] I feel like I'm not telling you to use a bunch of Boolean combinations in your logic. I'm just saying that simply from like an API standpoint, it's actually kind of clean with Boolean expressions.
[03:23:15] Timing. Um...
[03:23:23] Thank you.
[03:23:24] I mean, the...
[03:23:28] Mm-hmm.
[03:23:29] Generally speaking, your refs
[03:23:33] is going to...  Okay, well, there's two different ways, right?  This...
[03:23:39] is like...
[03:23:40] the basic example where generally speaking,
[03:23:45] Thank you.
[03:23:48] Thank you.
[03:23:50] Effects get schedule after render.  So if this is inserted,
[03:23:54] you know that the effect will run after, like in the same way in your component body. Like I use this pattern in components
[03:24:00] a bunch where I just go like,
[03:24:03] pass like the the magic ref thing that everyone a number of people dislike is i just pass l to ref
[03:24:10] and then go like,
[03:24:12] unmount or create effect. It doesn't matter. These
[03:24:15] These happen afterwards.  If you wanna be more explicit here,  it's the reason to explain.
[03:24:20] turn L into a signal itself.
[03:24:25] So then you have element signal and then just go set element signal here and then the effect can listen to it.
[03:24:31] It just...
[03:24:33] Mm-hmm.
[03:24:33] The reason I'm talking about relying on timing here is like in React, they don't trigger refs by signals. They're not tied to state. So for a lot of things,
[03:24:41] You don't actually need...
[03:24:44] Um...
[03:24:45] the elements to be signals. They're not coming in and out. Now, I guess if I was making a generic
[03:24:51] directive that people could use however the hell they wanted to,  then there's an argument making a signal because you have no clue what they're going to do with it.  Are they just going to call it in the middle of their function somewhere and then pass the ref function in like...
[03:25:05] later or something. Like if people just do this and inline it all the time, then the timing should be right.
[03:25:11] It's just that like
[03:25:12] Who knows, what if they call tooltip up here and then pass the ref function in, then your timing is going to get
[03:25:18] Weird because maybe this runs and the L isn't there yet.
[03:25:25] Thank you.
[03:25:26] Like there's this if L check, but the funny thing is you you don't even like for the basic case you don't even need it.
[03:25:33] Right. It's it.
[03:25:35] The element will always be there at the point that this runs.
[03:25:42] Thank you.
[03:25:43] Hopefully that makes sense.
[03:25:48] or L changed. Again, similar thing. Make it a signal if you needed to. Most refs elements don't change.
[03:25:55] Thank you.
[03:26:00] If you need it to change, then make it a signal, yeah.
[03:26:07] So effect function does an execution is after, so L is set by the time the effect function, yes.
[03:26:17] Thank you.
[03:26:18] Yeah, yeah, sorry. We've always been like that, so I didn't really highlight it too much.
[03:26:24] Um,
[03:26:25] And the split helps too on it too. Like the effect function happens
[03:26:29] The effects happen after rendering, like from the scheduling time.
[03:26:34] Point.
[03:26:35] Yeah.
[03:26:37] *laughs*
[03:26:38] Thank you.
[03:26:45] Class to class list, we already saw this today.  It was kinda cool, you know, being able to like,
[03:26:51] support, because these compose, you can, like refs, one of the reason I love this, these patterns that support the arrays, is you can always get like props.ref or props, you can, you just spread them in. And these, these attributes are designed already to flat map.
[03:27:08] There might be a performance hit if you're relying a ton on flat map. We're going to see as we convert Cobalt. But generally speaking,
[03:27:17] Thank you.
[03:27:18] this allows composition in a way like we don't you don't have to worry oh combine my like they're already trying to combine class list and class and stuff this just
[03:27:26] takes care of it. This will definitely be better than what we're already doing. You know what I mean?
[03:27:33] Thank you.
[03:27:37] Yeah, I'm...
[03:27:39] This is an interesting question. We talked about this last stream a bit with Brenly.  Because there's a few things like initial value, which lend very well to code mods.
[03:27:46] Um...
[03:27:48] Stuff like this class class list without spreads, super easy to code mods.
[03:27:53] Um,
[03:27:54] Stuff like this tooltip may be not as easy.
[03:27:56] Um...
[03:28:01] Renames, somewhat easy.
[03:28:04] It's tricky because AI can do this stuff very easily.  We've already seen that.  We've been able to migrate stuff forever.
[03:28:11] AI has no problem taking this kind of guidance and getting us to stuff.  AI is more expensive than code mods for sure. Um, but yeah, like this one,  easy code mod theme provider to theme. Um,
[03:28:22] So this is something that's on the list of research.  The challenge for me is I am not familiar with code mods at all.  There have been people who started look research very early on,  but I don't know where they landed or what they care.  My biggest concern is like,
[03:28:37] Do we hold up the 2.0 release waiting on these cold mods to get made?  I'm not sure.
[03:28:43] I am maybe leaning on AI too hard a little bit here, but AI has been very successful.
[03:28:56] Um...
[03:29:05] So these are new additions. Let's look here.
[03:29:08] It's the coolest. Reveal.
[03:29:12] So yeah, it is.
[03:29:13] Replacing it.
[03:29:15] But it's not a pure rename. Repeat is new, action is new, create optimistic and optimistic, store new, create projection is new, is pending, is refreshing, latest, refresh, resolve, loading.
[03:29:27] Again, loading is kind of... Oh, the loading on prop they're talking about.
[03:29:31] They didn't actually show that kids not migrated. I'll show loading on in a minute.
[03:29:35] DeepStore,
[03:29:37] It's new, reconcile.
[03:29:40] different function.
[03:29:41] That's not new.
[03:29:44] Hmm, that's a mistake on their part.  Function form, it's new, effect bundle.  Yeah, this is new.  Create effect can actually manage its own errors.  Create memo.
[03:29:54] Lazy options, unobserved call backfires and signal lose subscribers, source cleanup. Detailed removal guide.
[03:30:00] Batch to flesh.
[03:30:02] So yeah.
[03:30:03] Yeah.
[03:30:04] This just comes this.  If you need a synchronous, apply now, apply flush.  Create computer, create memo, create effect to drive signal.
[03:30:10] Create computer is used for three patterns.
[03:30:14] Is that double?
[03:30:17] make it derived,
[03:30:18] SideEffect on change, use splitCreateEffect.
[03:30:22] This is not exactly equivalent, but it's
[03:30:24] Better.
[03:30:26] Drive with Rightback.
[03:30:28] Are you using it to synchronize props? Use the...
[03:30:31] use this form.
[03:30:34] Um,
[03:30:36] So
[03:30:37] Onhelper?
[03:30:42] Thank you.
[03:30:47] His solid one, Abandoned. I mean, it depends on what you mean by abandoned. It's superseded.
[03:30:53] When it...
[03:30:54] Um...
[03:30:56] People are still working on this.  There's a 110 branch.  You know how we're on 1.9?  There's probably at least one more miner coming out,  but it's mostly in, like, stability mode bug fixes.  There are certain bug fixes that, like...
[03:31:09] we would never fix just because they would structure or break stuff.  So I have been a little aggressively closing bugs that I know we won't fix in 1.0,  but are addressed in 2.0.  In fact,  the solid repo has 60 open issues.  Now I was able to close 40 issues from 2.0.  And I think there's more.  I,
[03:31:27] There's just what happened with, I was always on top of issues in solid.  We, we, I, for the longest time, I kept the solid repo and under 40 open issues.  Um,
[03:31:37] But over time, I couldn't actually address these issues. It just wasn't possible on solid bones. The part of what makes me so excited about solid 2.0 is I can finally close the majority of the open issues.
[03:31:48] I think we've kind of fixed everything.
[03:31:50] Um,
[03:31:51] So there's obviously still like a few things and there's enhancements and stuff like people want them, you know, not clear if we can go that direction or whatnot.  But like.
[03:31:59] Um,
[03:32:00] the number of things that I consider buggy behavior that exists after 2.0 are basically gone.
[03:32:06] Thank you.
[03:32:13] I'll get to the create effect thing. I'm not sure what you're talking about yet, but
[03:32:18] you
[03:32:20] It's so that we can run the front half before the back half. We can collect all the async dependencies for every single thing in the boundary before we run any side effects. And also because the async is interruptible, like you can like, if you try to put it together, you could like Zalgo it, right? If you were like,
[03:32:38] console log A, like effect A, effect B, effect C, all inside of single create effect body,  you have no idea what order those will run. It will depend on when A, B, C,
[03:32:47] resolve. Whereas if you hoist out
[03:32:51] into the first function ABC, then you know that they can all resolve before you run any side effects. So it's both locally to make sure that the effect can run to completion. And it's also so that you can make sure that
[03:33:06] you are aware of all the async before any effect runs.
[03:33:11] Thank you.
[03:33:17] Data Star disk got
[03:33:21] Are you...
[03:33:23] Are you talking about two-way binding? Like in Svelte?
[03:33:32] Or view?
[03:33:34] Yeah.
[03:33:35] Whatever.
[03:33:36] Um...
[03:33:41] So let me continue here because I don't...
[03:33:49] Okay, so you still do Coaching and whatnot and return with the side effect, I wonder.
[03:33:53] Complex effects. Yeah, we've done, trust me, this is one of the most controversial things that like everyone comes in with their like super complicated example of what they're doing with effects in solid. And then we like,
[03:34:04] There's a few enough common patterns that maybe it's worth writing an article to show like people how to deconstruct it.  Usually the answer is break it apart.  The only there's only been one case that I'm that's like, and that is kind of annoying.  And it's not about conditionals.  It's about deeply nested data structures and expecting those works like stores.  I think that's where it gets.
[03:34:23] trickier to be as granular.
[03:34:26] where people were basically
[03:34:29] YOLOing it and just were like, I'm gonna write a whole bunch of conditional logic around my store that like
[03:34:35] I, you know, based on the path, it will hit some deeply nested properties and not other deeply nested properties. Like, that is hard. Conditionals, I'm breaking that apart logically, not so hard.
[03:34:49] But...
[03:34:50] deeply nested property access in stores is hard. We'll talk about stores in a minute.
[03:34:58] Thank you.
[03:34:59] Like you showed the brother girl having...
[03:35:09] -
[03:35:12] Thank you.
[03:35:17] Oh, you're talking with split effects. Yeah, yeah.
[03:35:21] I mean, this could just be straight input here, but yeah, I mean, it's what I just explained in terms of.
[03:35:26] separating the tracking from the side effects, discovering all the async ahead of time.
[03:35:31] Um...
[03:35:44] Thank you.
[03:35:50] Oh, don't get me wrong why the split effects annoying for my, I don't get me like, this  is one of the things I did a dedicated stream on this, the physics.
[03:35:57] It's not as many people checked out, but the physics of solid 2.0 is an amazing  stream in terms of understanding these aspects specifically, because it's like,  I really get into the basic thing is.
[03:36:10] This is reality. Pretending it's not reality isn't going to get us anywhere, so we just got to face it.
[03:36:16] Um...
[03:36:18] that's kind of the thing on it uh where are we on helper
[03:36:22] Psst.
[03:36:23] This is just showing that in to
[03:36:27] I thought I hand edited this just to be count. See how they short formed on count here? This could just be count here too.
[03:36:34] It's like they, on...
[03:36:35] edited my edits like when they reprinted it doesn't matter um
[03:36:40] But you know what I mean?  Like there's no reason this can't take the same form of just being count value preview.
[03:36:48] this
[03:36:50] Thank you.
[03:36:52] Oh yeah, we supported this multi-depth pattern. I hated doing this. It made the on logic way  more complicated, because it had to iterate through
[03:37:01] I was like, you could just support this and be done with it, which is what we do do.  This is like someone's arguing that they still wanted on after 2.0.
[03:37:10] Or that we should make effects like
[03:37:12] also work like this and I was just like man that's terrible. I know view probably does it but like view doesn't view for like this nice and neat so you can like
[03:37:20] write this slightly different view will add like
[03:37:24] Bye.
[03:37:25] Thank you.
[03:37:26] code size and logic branching. I just don't think it's worth it. It's like, is it worth adding six lines of code for that?
[03:37:35] I don't think so.
[03:37:37] that everyone has to pay for?
[03:37:40] Thank you.
[03:37:46] Thank you.
[03:37:48] On also the defer option, we still have the defer option. Okay, so I updated this one, I just didn't update
[03:37:54] That one.
[03:37:58] I was trying to show that the code is almost identical. Anyway, on error catcher, error defector, error option, blah, blah, blah. These didn't make sense anymore, unfortunately, because they basically just became boundaries themselves.
[03:38:10] so
[03:38:12] Thank you.
[03:38:13] I like this example where they're showing catch area around an effect.
[03:38:17] and the fact that you can now with create effect the second argument doesn't have to only just be  the effect which is the function you can also have a separate error handler if you want to handle  these errors if this if your effect errors that's still going to go to error boundary but if you have
[03:38:33] The front half, if the error comes from the reactivity, you have the success case and the error case.
[03:38:39] Um...
[03:38:41] Thank you.
[03:38:43] Like if there's something async that fails,
[03:38:46] you can kind of handle this without
[03:38:49] unhinging, like,
[03:38:51] without like going to the error boundary, you know, like if you're doing just, if, if this is just doing some logging or something and you're not rendering it, why would you?
[03:38:59] Thank you.
[03:39:00] Like, I don't know what you're doing with your facts.
[03:39:02] but
[03:39:03] If you're not rendering, there's no point...
[03:39:06] Thank you.
[03:39:06] having it like
[03:39:08] craft that whole part of your UI probably. You should just have
[03:39:12] Some special handling.
[03:39:15] Um...
[03:39:16] Thank you.
[03:39:21] I'm new. Do you have a planned session for the advanced journals already done? I have an old frontends master's course. We could look at doing that again. It's tricky for me.
[03:39:31] I live
[03:39:32] I'm not the best person at teaching
[03:39:36] beginners. I'm good at teaching fundamentals, but there's a difference between fundamentals and beginner.
[03:39:42] Um,
[03:39:43] Sometimes.
[03:39:45] You know, it's like,
[03:39:47] I used to teach guitar lessons, right? And when you teach a beginner guitar, you usually show them a little piece of something you
[03:39:58] think they can play from a song they recognize so they can play and be like, yeah, I'm jamming it.
[03:40:02] But if you want to learn guitar the best,
[03:40:05] You learn your skills.
[03:40:08] You learn...
[03:40:11] You learn music theory.
[03:40:13] and,  uh,
[03:40:17] Bye.
[03:40:18] That's a, that's a, it's a, it's a different kind of challenge. I'm, I'm at a point where I'm better at teaching theory, I think, than I am at teaching beginners.
[03:40:29] Thank you.
[03:40:33] I do have an example of this.
[03:40:35] Thank you.
[03:40:36] Thank you.
[03:40:37] Thank you to Dev Eggerell.
[03:40:44] Who's right here.
[03:40:47] Um...
[03:40:49] Collections...
[03:40:52] This is one of my standard...
[03:40:55] things that we do, which is called Erid Counter.
[03:40:59] This is why this decision came apart. He made this demo and we're like, this is really weird.
[03:41:04] Oh, did we get, did I get rid of it in this version?
[03:41:07] That's hilarious.
[03:41:10] It's not there. Oh, why is it not there?
[03:41:13] It was like there the whole time and then I removed it.
[03:41:18] I mean, we can add it back.
[03:41:22] Thank you.
[03:41:24] Thank you.
[03:41:28] Thank you.
[03:41:29] Thank you.
[03:41:31] Thank you.
[03:41:32] Thank you.
[03:41:33] Thank you.
[03:41:36] Mm-hmm.
[03:41:37] Thank you.
[03:41:40] Thank you.
[03:41:42] Thank you.
[03:41:44] Thank you.
[03:41:50] Thank you.
[03:41:51] I can't remember what he actually originally wrote, but it was something like this.
[03:41:59] Thank you.
[03:42:00] Thank you.
[03:42:01] Thank you.
[03:42:04] Thank you.
[03:42:05] Thank you.
[03:42:08] Thank you.
[03:42:10] - Yeah, I'm good.
[03:42:16] Thank you.
[03:42:18] Thank you.
[03:42:21] Thank you.
[03:42:23] Thank you.
[03:42:26] Thank you.
[03:42:26] Thank you.
[03:42:36] The first error is making sure that you import all the permanents you use in your example.
[03:42:42] Thank you.
[03:42:43] All right.
[03:42:47] All right, sweet.
[03:42:48] Thank you.
[03:42:50] So,
[03:42:51] There's a reason for this design, right?  Because you hear success error,  and then when I click on it at a certain point,
[03:42:58] Let's get rid of some of this stuff. It's gonna error here. StackBlitz always adds so much garbage.
[03:43:08] It's going to air at some point.
[03:43:13] No? It's not airing today?
[03:43:15] Oh, there it aired. And then we say, oh no, status error, blah, blah, blah, blah, blah,  caused by random ASINC error, get phrase here. Now, why did I do it this way?
[03:43:24] This effect
[03:43:27] is reading from upper phrase, which is async, that is
[03:43:31] above.
[03:43:32] the loading boundary.
[03:43:34] There might be an upper level loading boundary, but it's not there.
[03:43:38] Basically,
[03:43:41] We were we were having this kind of interesting conversation here because we're like well, I
[03:43:47] You might put side effects that have nothing to do with rendering,
[03:43:51] near where your data is.
[03:43:54] So wrapping the whole thing in a loading boundary is the wrong thing because essentially
[03:43:59] The affordance...
[03:44:01] that
[03:44:02] Um,
[03:44:03] you're trying to accomplish here is like, it should be based on the UI shape.  It shouldn't be based on your data shape. Right? So the problem was,
[03:44:13] If.
[03:44:14] we weren't going to say, "Hey, this effect is listening here. Let's look up and trigger the loading boundary above it."
[03:44:20] It's weird to do the same thing for async errors.  Like if this errors,
[03:44:25] Why would you...
[03:44:28] Actually, let's make it a little bit heavier. Let's make it a cons layer. Why would you...
[03:44:35] trigger an error boundary above this
[03:44:37] Right.
[03:44:38] Like,
[03:44:38] Don't get me wrong, if this had bad code in it, like this, like...
[03:44:42] crashes in the middle of you showing the error doing the side effect yeah you you should bail  out we we have no recourse but if if you just fetch some data and that data
[03:44:52] failed to load.
[03:44:54] The fact that this...
[03:44:58] errors,
[03:45:00] would lose look like has nothing to do with the UI. Yes, you want to show this error boundary here in the UI like, hey, this is aired out.
[03:45:07] But...
[03:45:09] you
[03:45:10] If it was here that was getting triggered, you'd unmount the whole app.
[03:45:15] Thank you.
[03:45:17] So, like, the kind of thing that me and Dev kind of came to the conclusion was, is that render effects, part of rendering, part of the view, part of things that actually care about the structure...
[03:45:29] should play into the boundaries, but normal effects
[03:45:32] aren't boundary conditions.  They don't,  they'll be blocked by boundaries.  So if they're in a boundary and the boundary like hasn't mounted yet or  whatever,  they're not going to,  they're not going to run,  but they're not,
[03:45:42] going to contribute to the boundary. They're not going to be like,  "Oh, because you read this thing here, now this section can't load."
[03:45:50] they're not a render concern.  They are...
[03:45:54] essentially
[03:45:56] Side effect.
[03:45:57] So,
[03:45:59] we will like, if this effect is inside a loading boundary or part of the UI, we're not going to run it until it's mounted. But if you have it here, and this is mounted, and this is doing its thing, it's going to run and it's not going to trigger error or loading boundaries.
[03:46:13] Um...
[03:46:14] based on the reactivity propagation. It'll trigger errors if it literally errors out.
[03:46:20] itself.
[03:46:21] Or like, so if you throw an error here or throw an error here, then it'll trigger up because we have no recourse in terms of catching it. But
[03:46:28] you can basically manage the errors yourself. So you can just go like, Hey, um,
[03:46:35] you know, do whatever you need to do here.
[03:46:40] Thank you.
[03:46:47] More music theory stuff. Pretty simple rules, especially for stubs. I would say just being able to recall it when you have to know how to apply it effectively.
[03:46:55] Uh...
[03:46:57] I mean, playing guitar, there's multiple memory, which is a whole other thing that you learn.
[03:47:04] from repetition
[03:47:07] But generally speaking, I think
[03:47:10] That's why I don't know if I'm...
[03:47:13] the best teacher for beginners.
[03:47:15] Thank you.
[03:47:17] Thank you.
[03:47:18] Note the problem with try-catches. I think you're gonna get to it. I actually made a special try-catch for this. It's because we throw async. So...
[03:47:27] Thank you.
[03:47:27] Um,
[03:47:30] I could make a special try-catch because you'd want a try-catch that ignored...
[03:47:35] um async throwing so like a not ready error
[03:47:39] But then you're going to have to wrap this in a special try catch anyways.  And I was just like, why do I have this primitive?
[03:47:48] With the addition of async, is there a need for debouncing cancellation buffers? Will we eventually revanch everything the same way? No.
[03:47:53] That's the beautiful thing about this.
[03:47:56] The re...
[03:47:56] Yes, you may reinvent it.
[03:47:59] The same reason why people use RxJS with signals.
[03:48:02] but I will not reinvent it because I don't need to.
[03:48:05] I only care about the point at which it enters. If you need to debounce stuff, then you debounce it
[03:48:11] coming into the system. My only responsibility is showing stuff
[03:48:15] synchronously. And if I can't, I have a pending state or transitional thing where I hold stuff.  I don't really care about how you schedule async.
[03:48:25] the whole key to the system, like this git phrase,
[03:48:28] returns a promise, so this is async. But if you look at this code, other than like the stuff we made for reportances here around loading or whatever, you're not like, where's the async?
[03:48:39] It just happens that the source here of this data is async that takes 800 milliseconds to resolve. The thing is
[03:48:48] The second, this is part of the design, and I talked about this in a previous stream.  The second we try and absorb the promises from you right away,  this is the difference between, like, say, uh,
[03:48:58] Mm-hmm.
[03:48:58] a lot of frameworks, React, Svelte, whatever, is like, they absorb it where you await or where you use. We absorb, we try and absorb it way earlier
[03:49:07] Um, and because we do that,
[03:49:09] Um,
[03:49:11] It's basically like...
[03:49:15] We just kind of push the async to the edges.
[03:49:20] Like if you want to debounce it, debounce your promise or whatever you're doing at the edge, they bring it in.  It's just, it's not...
[03:49:27] It's use an event library that like RxJS and plug it in.  It's not really our responsibility.
[03:49:34] Yeah.
[03:49:41] Thank you.
[03:49:42] As you could bounce an async create memo and fetch the data with a downstream.
[03:49:48] I
[03:49:51] Go for it. Like...
[03:49:53] I think you get what I'm getting at, though.  I don't...
[03:49:58] Like,
[03:50:00] To me, that's still the edge of the system because
[03:50:04] Like this can be an async function obviously and then you're going to do your logic here, but then the rest of the system doesn't care. So like...
[03:50:12] Will you still need debalancing logic? Probably, and there's solid primitives for that or whatever, and you can use those. It's just like, it's just not...
[03:50:21] Thank you.
[03:50:23] We've managed to keep it outside of what the framework has to worry about.
[03:50:31] Thank you.
[03:50:34] Yes.
[03:50:37] Like...
[03:50:38] Thank you.
[03:50:39] because we're all about keeping a consistent graph.  I,
[03:50:47] Bye.
[03:50:47] I mean...
[03:50:49] The challenge is,
[03:50:52] And he...
[03:50:52] When you're not using such a strictly derived system, like when you're not doing this, like what I'm showing here, like you're trying to bring the debounce stuff, like you're breaking the graph at that point when you start doing writes.
[03:51:03] like when it's not purely derived like I'm doing here, like when you're like, I have a computation that's, or when you're writing to setters multiple times, you're breaking.
[03:51:11] you're kind of breaking the graph traceability,  which is perfectly fine  because your source outside is coming from the outside.  It can input whenever it wants the same way
[03:51:21] that I can click this button as many times as I want.
[03:51:24] Um,
[03:51:26] But
[03:51:27] - Like,
[03:51:29] What I'm getting at is
[03:51:37] We don't care about connecting the dots there because it's from outside the system. It's a user's action or it's your event stream.
[03:51:45] Once it's in the system, we very much want to connect the dots.  And I'm actually going to talk about that a bit more in a minute when I get into the next document, the last new document.
[03:51:53] Um,
[03:51:55] But yeah, let's continue on here a bit.
[03:51:58] "produce is not removed," it's the default,  just showing that now stores are mutable.  You can use the store path, sorry.  "Create mutable, modify a big store."  This is a controversial one for people.  "Create mutable gave you a proxy you could write to directly.  "In 2.0, create store draft setters give you the same earnouts,  "while keeping writes explicit."  You know, kind of like actions in MobX.  This is the suggested migration.
[03:52:18] I doubt anyone who uses create mutable will like this suggestion.
[03:52:24] But Solid's core is not shipping with CreateMutable. I think I've made that very clear.
[03:52:32] I know it's controversial.
[03:52:34] So
[03:52:34] But with our deferred flushing,
[03:52:37] There's no...
[03:52:39] nice way
[03:52:41] to
[03:52:43] Basically, picture if you push A, B, C.
[03:52:46] In a row.
[03:52:48] In here, you can say in the scope,
[03:52:50] we are dealing with the latest value and we can see that A has been pushed before and we add B after and we add C after it. Out here,
[03:52:59] Not in that scope.
[03:53:00] because stuff's in the past.
[03:53:02] Pushing A and pushing B would be pushing them onto the same
[03:53:05] Index.
[03:53:06] Because the length wouldn't have updated.
[03:53:10] not having a rapper
[03:53:12] You have two choices.
[03:53:16] Stay in the past, which is what we're now saying is the default behavior, which completely breaks sequential updates.
[03:53:22] Right?
[03:53:24] That's why the wrapper is important.
[03:53:25] or
[03:53:27] Always be in the future.
[03:53:28] which doesn't work with async. It's fundamentally broken.
[03:53:32] So
[03:53:34] Someone in third party land will make a Crate mutable. They'll do it very easily. They'll use Crate store.
[03:53:39] They'll wrap a proxy around it.
[03:53:41] so that every get
[03:53:44] grabs latest value.
[03:53:46] So each individual get will grab the latest value.
[03:53:50] and each individual
[03:53:53] Right?
[03:53:55] will call a set call.
[03:53:58] Independently?
[03:54:00] Um,
[03:54:01] which is fine. So each each right call set and then they'll do something like they'll they'll they'll probably like like if there is a listener, um,
[03:54:11] don't do the latest value. So like if you're in a reactive scope,
[03:54:15] So basically, grab the latest value unless you're in a reactive scope.  That's probably how they would do it.  Because in a reactive scope, you don't want to be tearing,  but everywhere outside of a reactive scope, you would be tearing.
[03:54:27] you could kind of almost get to something that's like create mutable.  It'll be slightly less efficient.
[03:54:32] Um,
[03:54:33] If...
[03:54:34] risks tearing.  It will definitely be inconsistent  from the external system standpoint.  It's why we didn't go that way.  But someone could approximate this if they want to.  There's just no way...
[03:54:45] that
[03:54:46] I could say like, yes, this is a good pattern when create mutable was
[03:54:50] already like suspect is never being a good pattern.  I've said this like a million times over the years.
[03:54:56] Um,
[03:54:58] I've
[03:54:58] just kind of gone down to a place where
[03:55:02] It's not just like create mutable isn't a good pattern. It's like
[03:55:06] Thank you.
[03:55:09] It also fits...  It's not just me saying it from an opinion standpoint.  It actually, structurally speaking, from...
[03:55:16] from an actual like
[03:55:18] structured scientific standpoint, create mutable is a bad pattern.
[03:55:21] Um, so
[03:55:24] I...
[03:55:25] We have the permits to rebuild it.
[03:55:27] It's just...
[03:55:29] Not.
[03:55:30] I'm hoping you do this instead.
[03:55:33] If you use MobX, you wrap your rights in an action anyways, so it's not too much of a change.
[03:55:39] people like it's a good pattern to control rights this way.
[03:55:43] But there's always going to be that guy.  So...
[03:55:46] I'm sure someone's going to make a create mutable.
[03:55:54] Thank you.
[03:55:56] Yeah.
[03:55:57] I'm moving to solid 1.0.
[03:56:01] Didn't you use a solid router? No, I've never used create mutable.
[03:56:05] Never. I've never found a...
[03:56:08] There is not a, we have a lazy memo thing in solid router.
[03:56:13] create mutable,
[03:56:15] I don't
[03:56:15] Aye, aye, aye.
[03:56:16] I'm
[03:56:17] I mean, you make me want to look now, but...
[03:56:21] I find it very hard to believe that I would ever have found a user create mutable, ever.
[03:56:29] um router
[03:56:33] The only thing I can think of is...
[03:56:36] Is it in utils? Not in Marauder, it's top level. It's...
[03:56:48] How'd they come up with a really clever...
[03:56:52] on the matcher create memo object
[03:56:56] Yeah, this is not using create mutable. This is this was like a lazy prop.
[03:57:02] derived prompting. This is like my approximation of a projection before a projection. I still like  this because it's more streamlined than using a projection in this case, but this is like me  trying to create a projection, like a lazy projection.
[03:57:14] I wonder if I could just swap it with a projection now. Doesn't matter.
[03:57:17] So yes, no, I create mutable is garbage. Always has been.
[03:57:25] It's just the wrong thing, always.
[03:57:33] Thank you.
[03:57:35] Thank you.
[03:57:40] Thank you.
[03:57:40] Thank you.
[03:57:41] To this day on my company I have to explain to people why they should dereference like to take advantage of MobX.
[03:57:48] Oh, yeah, yeah, yeah, yeah, yeah.  Like the reeds, right?
[03:57:52] I mean, it's different when you build your whole system around reactive reads than you know to do it.
[03:57:59] And okay, there is one use case.
[03:58:03] But it's like a terrible one.  And it ties into the split effect problem.  It's when you have...
[03:58:11] Imperative APIs.
[03:58:13] And you just like, look, I don't care what it is.  Just make this reactive.
[03:58:18] and you're like, I'm going to feed this object into some like third-party library that has no idea about reactivity
[03:58:23] And...
[03:58:24] just let it go ham with it.  And,  uh,
[03:58:28] you
[03:58:28] you know,
[03:58:29] It can modify it.  We can listen to stuff and hope it updates.  And yeah, like...
[03:58:37] The...
[03:58:39] That's scary as hell to me.
[03:58:42] Thank you.
[03:58:43] Thank you.
[03:58:44] It's not like the setter pattern doesn't let people...
[03:58:48] You can wrap, like if that third-party library does mutation, you can go like call that third-party library function inside a setter.  Still works, like create mutable.  It's just like, I feel like at least then you're calling it out.  You're like, look, I'm calling set set.
[03:59:03] I'm going to update the store in here because otherwise you can literally update something anywhere.  Like it's just like, ooh, YOLO.
[03:59:09] Uh-huh.
[03:59:11] Thank you.
[03:59:15] It's all good, Deb. But yeah, no.
[03:59:23] I built it because there is like that edge edge use case.
[03:59:28] I'm hoping
[03:59:30] If we look back to the actual docs here that this can still work for people.  I know. Okay.
[03:59:36] There's people who use and depend on Create, Meetable, and Solid 1.0.  Huge, large projects that have that ancestry that we're like
[03:59:44] I was MobX with React, then I switched to Solid using CreateMutable from MobX and React.
[03:59:51] giant, huge projects, hundreds of pages of code.
[03:59:54] and this made it  because MobX already had the grind thing  they just switched the stores with Creamy
[04:00:00] They kept the code almost the same and they're able to do a huge migration and they saw it
[04:00:05] huge performance benefits.  Some of the biggest migrations I've seen in history has been because of  CrateMutable, especially from people previously in MobX.  They just, their, their, their apps got so much better without them having to  change a ton of logic, because they're already kind of set up properly with  MobX.
[04:00:20] So those people
[04:00:23] I'm not going to try and make you feel bad about using create mutable.  I think that the being able to recreate this in user space is still really important.
[04:00:31] I think that
[04:00:33] if we can maybe get a solid primitives,  I feel almost too prescriptive.  But I need to get this the hell out of core  because it's poison.
[04:00:41] I'm just saying that like,
[04:00:43] If...
[04:00:44] If it lets you migrate to solid 2.0, then I am...
[04:00:49] Like...
[04:00:50] Go for it.
[04:00:51] you know,
[04:00:52] It's just...
[04:00:54] I can't responsibly recommend anyone...
[04:00:57] to use this from like a Greenfield perspective.
[04:01:10] Yeah, I mean, go for it. The funny thing is that the path, we were talking about this earlier in a context demo where I was just showing it just like,
[04:01:21] We don't actually need selectors because the reactivity is actually fine grained.
[04:01:25] So like all you do is you take the setter and instead of returning set state from a store, you just...
[04:01:30] wrap specific setters, uh
[04:01:33] It's... ah...
[04:01:35] Every to-do MDC example I've ever made generally follows this pattern, but we can stack with it right now.
[04:01:42] And I can do it again. I'm actually going to leave the effect back in here.
[04:01:47] Um...
[04:01:49] Whatever. Um...
[04:01:51] Let's pick an example.
[04:01:54] Solitude experiments,
[04:01:57] What do we want? Doesn't even matter which to-do's.
[04:02:03] Simple to dos.
[04:02:05] Thank you.
[04:02:07] The thing is,
[04:02:09] See...
[04:02:10] To-do's?
[04:02:11] store
[04:02:13] Create to do is
[04:02:15] adds three actions back. And then how did I implement this crazy thing? I didn't, I just used create store and then wrote three actions and then returned the store and then returned the three actions. These actions just call, call, call.
[04:02:26] cover set to-dos.
[04:02:28] So, like...
[04:02:29] This is why people don't use stuff like Zuzan.  Like, it's...
[04:02:32] Why? Like, you don't need state libraries when you can literally just, like,
[04:02:37] This might be a fun exercise for someone else in a stream.  Recreate every React state library just using all its built-in primitives.
[04:02:44] because it'd be dirt simple.  This is also why it was kind of interesting.  When it all got popular,  it was hard to get some win in on the state library  because people are excited, like XState.
[04:02:54] XState would actually require different things.  XState is actually substantial enough.  The state machine itself and the management of that,  I think, is sufficient.  I think stuff like RxJS is a different realm.  But most of the Jotai's and that,  I remember, I forget who I was talking to,  they were trying to make versions for Solid,  and then they just gave up because it was like,
[04:03:11] It was like,
[04:03:12] It was kind of like, why?
[04:03:15] Do you know what I mean?  Like they're like,  okay,  here's Joe tie solid.  And then it was like,
[04:03:19] I mean, it's good for a migration tool.
[04:03:22] But it was kind of like
[04:03:24] We kind of displaced all the state libraries.
[04:03:31] Thank you.
[04:03:33] Thank you.
[04:03:34] Thank you.
[04:03:39] Yeah, suspense isn't not...  Suspense isn't...  It got renamed, is a better way to put it.
[04:03:45] but it got renamed to Loading.
[04:03:47] And because
[04:03:48] It's not quite the same as before. It only triggers initially unless you use the on prop, which I can show a bit more detail in a minute.
[04:03:55] uh
[04:03:57] You can view it 99% as a rename.
[04:04:02] When I say the suspense is over, I just mean that we fundamentally changed how suspense works.
[04:04:09] Yeah, I don't know. I think every example I've covered on this  stream already talks about suspense enough that I probably... or...
[04:04:16] Thank you.
[04:04:18] Where was I?
[04:04:20] Thank you.
[04:04:21] Yeah.
[04:04:23] It's not that it's deprecated.  We just have...
[04:04:26] Transitions are gone explicitly. Suspense we made into a simpler loading component.
[04:04:37] I haven't tried it with Solid 2.0 yet because we'll talk about it maybe briefly, but they just got it working.
[04:04:46] HandStack router has amazing TypeScript support, which is really good. Solid router does not have as deep TypeScript support.
[04:04:56] Mechanically, I'm trying to find the best, simplest way to do routing.
[04:05:00] So
[04:05:02] You know, that's.
[04:05:03] That's the goal there.  Well, mechanically doing what it needs to,  but TypeScript is something we're definitely lagging behind  compared to the TanStack router.
[04:05:12] Thank you.
[04:05:17] Thank you.
[04:05:18] Yeah, I mean, it's been it's the display statement. I mean, this has been
[04:05:24] It's been the case since day one, right?
[04:05:28] It just...
[04:05:29] State isn't a problem for us.  And to be fair, it's a good thing to control.  React's going to want to control more state.  You watch.  That's the only way you really get a wrangle on async.
[04:05:39] This one's...
[04:05:42] can go either way. I've cut this because I was hoping to push this a little out. The only reason that the From and Inobservable helpers were ever core and not solid permanence because solid permanence didn't exist at the time.
[04:05:51] I'm just trying to keep things lean.
[04:05:53] You don't really need it, like...
[04:05:56] This is...
[04:05:57] unless your observable has an async iterator protocol built into it, and a lot of them do, you can't do this.  So this is like an oversimplification, but this is like
[04:06:08] This is like the general...
[04:06:10] thinking.
[04:06:11] Similarly,
[04:06:14] Instead of like
[04:06:15] observable and subscribing to that, you could also just
[04:06:19] use an effect to subscribe to a signal and write to it. This advice
[04:06:24] is overly simplistic because
[04:06:26] Like...
[04:06:27] There's like four different ways you can turn an observable into an async iterator and all that like, and you might actually still want to use like some kind of separate sequencing call setup.
[04:06:37] I just, it's, it's, I don't think it's our responsibility to figure out all the ways to do that.  I think that this fit, it's very nice in third-party land.  Now that we have base supports for streams, that's an easy, like,
[04:06:50] this is something you can do. I think better solutions will come along and
[04:06:55] those better solutions can cater to those better cases and don't have to be core.
[04:07:03] If you need standard use of the Differentials, you'll need to build an adapter around a crit effect. There's a known gap.  The 1x of the community doesn't have direct crit yet. I expected it to be this is all permanent.
[04:07:14] So yeah, here's the quick renames, even though they're not exactly the same.
[04:07:18] Um,
[04:07:20] Crate selector is just gone. I mean we say it's a rename, but it's the new primitive where I'm at the snapshot because it's different. Not the only one that arguably
[04:07:31] is like the last these two are the most like we just renamed them for no reason
[04:07:38] equal function is equal, get listener and get observer.
[04:07:42] This would just make their language more consistent.
[04:07:45] Listener was something I picked up from SJS. Everywhere else, internally, all different things we use, the term observer,
[04:07:51] Um,
[04:07:56] removals, start thing, use them, then thing, batch,  create computed, it's gone on, on air, produce,
[04:08:04] Now default, creating from observable, create deferred.
[04:08:08] The whole enable scheduling thing and the concurrent stuff, I'm cutting out of the core.  We just don't.
[04:08:16] Needed.  I don't think there's some talk about adding it back,  but I,  after I made the demo,
[04:08:22] that doesn't even work in React anymore, the Sushpinski's demo. I just
[04:08:29] It's not as nice to have something automatically handle it.
[04:08:34] for sure, but I'm okay with where we landed.  For those who aren't familiar, this demo,
[04:08:40] involves like a billion triangles all calculating off the next triangle while putting in an artificial delay in and
[04:08:49] React used this originally as their Fiverr demo to show that Fiverr is powerful, but if you make this in React now, it's completely glitched and doesn't work.
[04:08:56] because they changed the priorities, because they were worried about the transition starving.
[04:09:02] Given that.
[04:09:03] i don't care about concurrent rendering from a like a performance standpoint it's like
[04:09:08] If you really want to defer work, just make it async.
[04:09:14] See? Because the graph gives the guarantees to make sure that it doesn't fan out, that everything doesn't update unless it updates together. I just made a request idle callback.
[04:09:23] to resolve the promise and cancelled if this
[04:09:27] memo re-ran before it was able to complete its work.
[04:09:30] It's really that...
[04:09:33] simple and
[04:09:35] The end result is you get the same depth, super smooth demo, you know, that React made.
[04:09:42] you know,
[04:09:43] So like if you ever come across some weird ASIC, like some weird expensive computation that's expensive and you say you want to offload it to a web worker or offload it async, just make it async and call it a day. We don't need concurrent mode or whatever. Like.
[04:09:56] That's why I'm...
[04:09:59] cutting it. It just, it just, it was, people look at the solid bundle size, even though I think it will be bigger with this.
[04:10:06] slightly because of some of the other changes.
[04:10:10] it
[04:10:11] The old solid bundle size, almost a third of it was this like scheduling code that like no one ever used.  It was tree shaken, but like when you went to like stuff like it would just, yeah.
[04:10:20] - Right.
[04:10:27] Thank you.
[04:10:31] index array, map array key false,  or set boundaries no longer needed  'cause boundaries self heal, enable scheduling removed,  write single doesn't even be an experimental API,  use or just refs.
[04:10:41] with factories. We don't need these after boolean namespaces on captures and then I got rid of almost all the fancy namespaces stuff. Right, okay cool.
[04:10:52] Number eight, Dev Diagnostics. This is a new document that wasn't there when I first published the RFCs. It's because I did a basic DevTools report that's the same as a solid 1.0 DevTools report, but then I noticed we started, like, we have a lot of warnings and errors.
[04:11:08] in, in, um,
[04:11:10] in solid and
[04:11:12] to clean up in forbidden scope. And what I decided to do, because I was asking AI how to best help it write better code, and what they suggested was that warnings at runtime are ignored generally, like they're not browsing the console or whatnot. So what, and I wanted something also that would work with dev tools, and obviously errors or something, because if something fails, they check on it. But the AI suggested that what I should do is actually give it
[04:11:37] a diagnostic or an event.
[04:11:39] loop that it can listen to. So basically you could just
[04:11:42] Dev.diagnostics and dev tools can listen to this tool too, but essentially AI can listen to it and then as it
[04:11:49] encounters errors.  It would know...
[04:11:52] how important they are in terms of severity,  where they happened in the code,  and then be able to use that to help you write better code.
[04:11:59] I designed the system, even though right now this is just like our simple warnings and errors that are actually already communicated.  I designed the system so that we could do waterfall detection so that we could add more advanced diagnostics at a dev level that you don't have to warn the people about or like.
[04:12:17] be too noisy, but AI could do where they'd be like, oh, this is caused by cascading.  Is this an issue?  We're not sure, but at least surface it without like spamming people in their like
[04:12:27] console with warnings. So this idea is that
[04:12:32] The framework itself, and this comes straight from signals, not from SolidJS, but from the core signals library, could actually provide more diagnostic tools at runtime, kind of like React scan or whatever, like thing built into the actual signals library itself to identify possibly bad topologies in the graph or propagations so that like...
[04:12:53] You could just wire it up and be like AI, build the thing, run it, build a report essentially, and then it can analyze that.  It's the same way people do with security, but we do it for graph data topologies to ensure that your app was as performant as it could be structurally.  And we can do this because we push the async to the leaves. Async is not opaque to us. I talked a bit about this last stream.
[04:13:14] But because it's in the graph, we can tell when we have async re-entry.  I had a whole plan about adding the async diagnostics, but I kind of pushed it out because I was like,
[04:13:25] That's a new feature. We don't need it to, to be, you know,
[04:13:30] part of this.
[04:13:32] But
[04:13:34] Thank you.
[04:13:34] I
[04:13:35] Yeah, that's the core idea here. Strict read untracked. What else is there? Pending async, forbidden scope, no owner effect, no owner cleanup, no owner boundary, run with a supposed owner, dev.subscribed, dev.capture.
[04:13:50] message node and then it's right now these are error and warning severities categories
[04:13:57] triggers, yeah.
[04:14:00] Thank you.
[04:14:01] Yeah, this is
[04:14:03] Thank you.
[04:14:08] A V plugin that captures the browser console and serves something that would be helpful. How do we enable
[04:14:12] Right now, this is a programmatic API, which I'm showing you, where there's capture and then there's subscribe.
[04:14:20] Yeah, this is great for DevTools too. I've kept the current DevTools hook. I'm hoping Damien will have more feedback for me in terms of how we can make this work in the future.
[04:14:32] Thank you.
[04:14:36] Well, the problem is not everything errors and warns.
[04:14:42] So for all of these, you're still getting console errors and warnings. And this is an addition. But the waterfall stuff I was worried was too noisy. So until we can determine it,
[04:14:53] Um,
[04:14:54] Because I came up with an idea for waterfall detection, but I'm worried that it's still too noisy. But this could be helpful, right?
[04:15:05] Like maybe there's another severity.  We have error in Warren right now.  Maybe we can have like hint or like...
[04:15:11] uh, info or something. Right. So we can have like,
[04:15:15] um, things that like even with the waterfalls, there's different shapes. We can be like worn because we like think this is a concern or other things where we don't know it's a concern and we can just put it as info. What I'm hoping this does though is
[04:15:27] Because, yeah, I think our async system is amazing that we can detect
[04:15:32] Because of the way the transitions are built in, we know that if
[04:15:36] you lazy load a component and then fetch under it.
[04:15:40] Um,
[04:15:41] that you have a waterfall.
[04:15:44] It might be intentional, but we know you have a waterfall. We can tell if you navigate to a page  and it lazy loads the component and then fetches under it. And you might be like, well, that's what  I expect, but a better system would hoist the fetching and fetch the code in the, you know,
[04:15:58] and the, uh, thing at the same time.  And we can, we can identify that.  And I think that's.
[04:16:05] Uh,
[04:16:06] That's the kind of thing.  What if someone accidentally wraps some code in a show?
[04:16:11] with it's unnecessary and the show blocks the async, which prevents the child component from fetching data.
[04:16:18] you know,
[04:16:19] It's funny, React talked about this, you know, we should have like async detection.  The problem is promises are opaque.  They're really hard to see where they're going.  For us, we have full visible view of the asynchronous.  I talked a bit about this last stream.  That's why I'm heading this direction.  I think the warnings in the console are a little bit too noisy.  Obviously, if we can identify real things that are real, I will definitely promote them to the console.  But now we have a, we can start at this diagnostic layer as we decide how to promote the right kind of warnings and errors.
[04:16:50] Thank you.
[04:16:54] How does solid, I have no clue.  I haven't done a performance benchmark recently.
[04:17:01] Um.
[04:17:03] Last time I checked, it was similar to solid.  It might have been slightly slower.
[04:17:07] - It probably got slower.  The biggest thing here, and I, I, I,
[04:17:11] I'm going to go back to performance in a bit once I get stuff a little bit further along.
[04:17:17] Um,
[04:17:20] It's funny, the earliest versions were faster than Solid 1.0, and then the latest versions have been slightly slower.  Not latest, but when I switched to the latest rewrite, it was slightly slower.
[04:17:30] Like 0.01, like...
[04:17:32] Like...
[04:17:34] Not really...
[04:17:37] Like, we're not talking about dropping out of, like...
[04:17:40] the same zone as Svelte 5 or View Vapor or whatever. I'm just, the thing is that I mentioned this on previous stream,
[04:17:48] Thank you.
[04:17:49] It's hard to compare because
[04:17:51] Oh.
[04:17:52] The best mental model here for Solid 2.0
[04:17:56] is
[04:17:57] is this:
[04:18:00] Yeah.
[04:18:02] Look at React, right?  React is...
[04:18:05] over here somewhere if I keep on scrolling back.
[04:18:10] We'll eventually find it.
[04:18:13] Am I getting close?
[04:18:16] React hooks, yeah, right here, okay.
[04:18:19] 151, okay.
[04:18:21] kind of like
[04:18:23] just past the midpoint of the graph towards the back half. Now, if we go over here,
[04:18:30] and find
[04:18:31] React hooks compiler hooks, 156, oh that's funny, I want to expect compiler to be that much slower.
[04:18:38] Let's keep on going.
[04:18:41] React Hooks use transition, 188.
[04:18:45] Now we're getting into like Ember Zone, like...
[04:18:50] and knock out and like, what the hell are you doing zone?
[04:18:53] But my point is, and actually look, Fray is over here too, which is actually another built-in, no one remembers this thing, but it was actually another thing that had built-in transitions automatically.  Solutions that have transitions and async...
[04:19:07] first in mind from a runtime level.
[04:19:10] Svelte is really cool with the compiler where they literally look for the await keywords.  But I think systems that are fundamentally using transitions for every single operation
[04:19:22] going to be slower,
[04:19:24] than ones that do not.
[04:19:28] In the case of React, we go from 1.5 to 1.88.
[04:19:31] So,
[04:19:33] I had to kind of adjust my expectations because if solid
[04:19:37] Where is it? If solid --
[04:19:41] We're solid these days. I can't. It's so funny how this whole area has like
[04:19:47] grown
[04:19:49] immensely we're okay there's felt five here solid we're like
[04:19:52] neck and neck. Everybody's almost the same here. Every run we just hop around.  This is a cool one. Inferno jumped ahead of us somehow.
[04:20:01] Probably without making any changes.
[04:20:03] Like,
[04:20:04] That's actually interesting.
[04:20:05] Anyways, here's Pota, which is made by the guy who's been working a lot on the DOM expressions for Solid 2.0.
[04:20:14] It's up here too, so that's good. There's GVapor, also the same.
[04:20:18] These libraries are barely determinable. If solid goes from 1.12 to 1.13, like loses that 0.01%. And this actually dealt with this, this issue, the slower, which is one of our biggest slowdowns. But if we, we went to here.
[04:20:33] Um,
[04:20:34] and was the same as Svelte 5, you probably wouldn't
[04:20:37] even showed up behind Star 510.
[04:20:41] You wouldn't blink a beat.
[04:20:42] Probably. And yet,
[04:20:45] That change would be the same change as I was showing with React going back 30%.
[04:20:50] Like now everything, it's all the transition.
[04:20:53] And
[04:20:54] The cost is big.
[04:20:56] maybe 0.01 on the scale.
[04:20:58] For me, that's worth it. Maybe it's not worth it for everyone, but for me, I don't care about the JS framework.
[04:21:03] benchmark anymore. It's been like, it's like, why does anyone care about the JS?
[04:21:09] framework benchmark that much anymore. It's kind of funny like solid was like clearly up here ahead of everyone for like
[04:21:16] seven years.
[04:21:17] I kid you not, maybe not seven years for Inferno, but...
[04:21:21] because that was between me.  But like, any of the big frameworks,  or like no one, like we were upfront,  no one cared for seven years.  Now people care now.  So I mean...
[04:21:34] I don't know. I think it's convenient when it's convenient.
[04:21:41] Thank you.
[04:21:47] Yeah, actually, interesting story about that.
[04:21:53] Alien Signals
[04:21:55] is what our signals basis is based off, except Milo found a way to make it faster.
[04:22:02] Um,
[04:22:03] It's not the signals that are bottlenecking us here.  It's like the transition behavior.  That's probably our bottleneck here.  Like the async first thing.  Check out this library called R3.  It's worth checking out.
[04:22:21] If not, I can get to it here.
[04:22:23] He basically figured out...
[04:22:26] This is what solid 2.0 is about.
[04:22:30] based off of...  It's like it took...
[04:22:35] alien signals and then optimized it for the projection case, which no one else has
[04:22:41] Optimistic. Alien signals is actually a big part. You'll have to see comments about alien signals in here because literally the source code is alien signals. So if it makes it easier for people, Solid 2.0 is based off a fork of alien signals.
[04:22:55] Thank you.
[04:22:57] Here's R3, you should check it out.
[04:23:00] Thank you.
[04:23:01] Yeah.
[04:23:03] The question Milo had was,
[04:23:07] Can...
[04:23:08] Most of the graph doesn't move around that much.
[04:23:11] Can we do it in one phase? The challenge, Alien Signals is a very, very, very efficient way of doing a push-pull, like a two-phase thing where you update, you flash up, you fan out, notify, and then you pull what you need.  But the thing is, it's a two and a half pass.
[04:23:28] pattern, essentially. When you flush out,
[04:23:30] Pass one.
[04:23:32] Past two, you pull until you get to the thread of what you got.  And then you propagate back down.
[04:23:40] So I kind of call that like
[04:23:41] Two and a half.
[04:23:43] Milo was like, "Can we just make this in a single pass?"
[04:23:47] And...
[04:23:48] what this library does,  it's more complicated,  so there's more code than alien signals,  but what it does is,  when...
[04:23:56] The graph doesn't change shape.
[04:23:58] when it's static, it just...
[04:24:00] moves forward height-based. It's basically only if something moves, like jumps height in a crazy way that we haven't detected yet, that it falls back to alien signals.
[04:24:10] So it's kind of like the Chrome runtime or like a browser runtime where it
[04:24:15] with monomorphic, polymorphic fallback.  Like we kind of like have a optimized case  and then we have a de-optimized case.  What's cool about what Milo's done is actually is,  after you hit the de-optimized case, which is like de-optimizing back  to alien signals kind of style performance,
[04:24:31] - Baby.
[04:24:32] Future runs will be usually still optimized, so you'll end up back on the optimized case again.  Because once the height adjusts, then we will...
[04:24:41] run in the right order again and we won't have to fall back to alien signals. So
[04:24:45] He's got benchmarks. He wrote the same JS reactivity benchmarks that everyone used, the one that proved that alien signals was the fastest. And he hasn't been very vocal on it on socials because he's been like using this as a research paper. He's a university student and he's going to be pushing it. He hasn't been pushing it in the like...
[04:25:05] Primetime, but yes, uh
[04:25:07] Even though solid probably does not have the fastest reactivity system because of the stuff that I hammered onto it.
[04:25:15] The core, I think we have our basis is the most powerful reactive system out there. It's basically like
[04:25:23] What if you could do something
[04:25:26] incredibly fast, and then in the worst case, be alien signals.
[04:25:36] They won't.
[04:25:37] Because the trade-off here is that it's...
[04:25:40] push based, which means it's eager. And this is the thing.
[04:25:47] You don't have to be eager and we support lazy, but if you're def... the eager part is interesting because...
[04:25:54] I think the lazy thing is overrated when you're building UIs because you're building structured data structures that sit and persist in a tree.
[04:26:03] There's benchmarks showing stuff that's...
[04:26:06] Basically, if you're going to be completely lazy, you might as well just stay on alien signals. This will probably fall back to alien signals. But because of async, I'm content with this being eager.
[04:26:16] Because this is eager,
[04:26:18] And async has to be eager because otherwise you get async waterfalls.
[04:26:23] This actually fit the shape. Originally I wasn't on R3, I was just going to use alien signals or reactively, like basically
[04:26:30] The progression thing is that Milo made Reactively, which drastically improved the performance of signals libraries. He wrote an article, and that article was basically at the same time that spawned everyone else picking up signals. People credit it to Solid, the signals thing getting popular, but at the exact same time,
[04:26:48] like it was like 2022 or whatever, at the exact same time that everyone's like, oh, hey, I should use signals too.  You know, like when Preact and Angular and all that stuff, all the research happened.  Milo basically was like, bang, we can make signals super fast.  You can find that article still. It's called Supercharging Stuff.  And...
[04:27:04] Thank you.
[04:27:05] That kind of kicked off this thing where like Preact was like trying to make a faster signal thing and everyone was using his benchmark that Milo made to show how their signals work.
[04:27:15] Rep could get faster. And out of that thing was where alien signals ended up coming. They can't, they kind of came in a little bit later and they're like, look, we have the fastest signals implementation. And it was from that whole push-pull system. It was faster than everything else and stayed that way. And that was kind of the common communication. You ended up adopting it.
[04:27:34] So on.
[04:27:36] Um,
[04:27:37] And everyone's going to be happy.  But then when working on Solid 2.0, we kind of started realizing that
[04:27:45] Boob.
[04:27:45] that whole push, pull, push and try coloring, like, which is, as I said, I think it started with maybe MobX algorithm. But if you look at Milo really pushed this kind of approach forward.
[04:27:57] We were like, what if you didn't? We wanted to start solving these projections, which are really tricky when you have a change that goes down one specific deep reactive path and you don't want to over notify everyone.  And I started hacking stuff on top and it was driving Milo crazy. He's like, this is terrible. He's like, can I actually solve this algorithmically? And that's where this came about. It was when we were working in Solid 2.0, we realized like...
[04:28:18] Hoşbuld!
[04:28:20] Good. It works.
[04:28:22] Except there's a whole category of problems that it's not optimal for.  And I think the React core team actually came to the same thing.  If you listen to Joseph on his talk, talking about it, the situation he was talking about that he thought a specialized system could be better than a generic system for handling stuff.  And talking about the algorithmic tracing wasn't as fast as possible.  He was talking about push, pull, push.
[04:28:44] So we're like, okay, okay.
[04:28:45] Like, to be fair, these things happen independently.  Milo had already created R3 by the time that Joe gave that talk.  But it feels like the React team came to actually the same conclusion Milo did.  So I was like...
[04:28:57] And they're very much on the eager side, right?  They ecohydrate.  They don't, the thing is, if you're going to do work, you might as well do work sooner.  That's kind of the mentality.  And I think it plays out, especially on structural stuff.
[04:29:06] So we're like, what if we can make React a system that...
[04:29:10] could do that and that that's that's the the gist of this here  i probably should do a whole stream on r3 at some point but
[04:29:17] It's...
[04:29:18] If you look in the reactivity benchmarks,
[04:29:22] like
[04:29:24] R3 either is basically the same performance as Alien Signals on some tests or better.  Like, it's probably the fastest reactive library out there.  I think after that, the Alien Signals guy went in and also improved some performance some places.  So I'm not up to date on today's thing.  But then, like, any improvement that Alien Signals makes ends up getting backported into R3 because it's basically a fork of Alien Signals.  So, like...
[04:29:49] Like...
[04:29:50] Okay.
[04:29:51] It's kind of this
[04:29:54] interesting evolution. In either case, um, I, you could say that I, I,
[04:29:59] I,
[04:30:00] I'm very aware of
[04:30:01] the best techniques in signals that's going on right now. I said, if we adopted alien signals, the work that solid wraps it would make alien signals slower the same way that's making R3 slower. I just wanted to get a really solid, pardon, foundation to build this async system on and the end result, as I said, we're going to have to run the JS framework benchmarks again. It might be a couple of percentage slower here, there, but
[04:30:25] Compared to that 30% react, that's not what's happening.  And that's the kind of change we're doing.  We're adding something that's so...
[04:30:32] hugely different that it traditionally has been a huge performance thing.
[04:30:37] And you're just not paying the cost. So I can say that a win.
[04:30:43] You know, React and data started the fastest.
[04:30:47] Yeah, I mean, if you if you if you do that,
[04:30:50] then
[04:30:52] Like, I don't even...
[04:30:56] Yeah, I mean, those aren't signals.
[04:31:00] That's...
[04:31:02] I mean, it's...
[04:31:03] - Fine, I mean,
[04:31:05] If you're fortunate enough that your thing doesn't change shape, he reacts in a different category because they re-render everything.
[04:31:12] The...
[04:31:13] There's a clear trade-off there. They're not dynamic because literally they recreate everything, so it's fine.
[04:31:22] Datastar, I'm not sure, is being honest.
[04:31:25] You know what I mean? Like it's, it's,
[04:31:27] It's fine. It's just...
[04:31:29] It's like...
[04:31:30] If it works for a use case, go for it.  Is it real?  Hmm.
[04:31:35] Thank you.
[04:31:37] Um...
[04:31:38] Thank you.
[04:31:41] Sorry, yeah, I got sidetracked by that, but yes. Okay, cool. Diagnostics. Let's switch around. Let's get this week JavaScript going.
[04:31:50] *clicks*
[04:31:50] I think. So give me two seconds.
[04:31:55] Oh, before actually that, you guys, I think...
[04:31:57] I've shown what's been cut. What the only thing that I haven't talked about, you know,  let's, let's quickly do this before I go this week in JavaScript.
[04:32:05] Um,
[04:32:06] I'm going to quickly make a HackMD.
[04:32:08] Um,
[04:32:10] Because we should...
[04:32:12] we should talk
[04:32:14] really quick about like
[04:32:17] post 2.0
[04:32:20] solid yeah it's 2.0 objectives because i feel like we got enough
[04:32:25] Now,
[04:32:26] to
[04:32:28] to
[04:32:29] be like 2.0 I mentioned blocked a bunch of stuff which is why we haven't been able to like it's taken me forever um
[04:32:36] to...
[04:32:37] get to certain topics and why it's taking forever to clear that issue list down to where I want it to be.  But there's, I feel like now with 2.0, you know, like getting featured, like there's still a lot of work until it gets out the door, but I want to draw a line.  I don't want to add any more features at this point. I know people want features, but I think what I've shown you at this point is what 2.0 is going to be more or less.
[04:32:58] gives me tons of ideas for upcoming minor releases though. Because there's a bunch of things that
[04:33:05] that are clear that we should do. Actually, the first one that I should mention is waterfall detection. I could do this during its lifecycle
[04:33:14] But I'm probably not going to bother with this right now yet.
[04:33:20] um
[04:33:23] We are going to do a performance pass, so I'm not going to count that out. Next one, activity.
[04:33:31] PeopleLive. I know a lot of people have requested that.
[04:33:35] I feel like
[04:33:37] Because we didn't have it in 1.0, I don't need to hold 2.0 waiting for this.  I think this is probably the most requested feature at this point.
[04:33:48] We have all the underpinnings. I could actually literally like go make it today.
[04:33:52] like I did it before I removed it but I had something activity. I'm just not confident in  all the permutations and I don't want to commit to something until I've spent enough time with it.
[04:34:01] I built activity, but then I saw that the React one actually manages the DOM in a DOM-centric way. And I think what this means is that there's going to be a core primitive that has to be able to hold reactivity that has no impact on visibility. And the visibility layer has to come in after. So I have to design a primitive.
[04:34:19] that basically pauses reactivity within a scope,  kind of similar to the way suspense works,  but it has no tie to...
[04:34:26] to the UI.
[04:34:28] what the design of that looks like, I don't know, which is why this is getting deferred.
[04:34:31] Thank you.
[04:34:33] Three, view transitions.
[04:34:35] Similar.
[04:34:37] I think this is a very Dom-centric thing.  I think this naturally comes afterwards.  I think, though, we're not...
[04:34:45] We have the scheduler now that we're not blocked. Um, so I I'm,  I'm very excited about the potential here.  I think this is going to take a little bit of work to figure out, but, um,
[04:34:57] This seems like another thing that
[04:35:00] This is how I want to handle animations and transitions in that sense.  I don't want to add Svelte's system. It's crazy. It's the reason that Svelte 5 took so long. I think it's an amazing system.
[04:35:13] I'd rather...
[04:35:15] this live outside of the core framework. So if we can do something with view transitions, I think that's cool.
[04:35:22] For solid meta, I think...
[04:35:27] I think we should
[04:35:29] bring the meta tag stuff in core and the resource handling even more core. I don't know what this looks like.
[04:35:36] I did the most baseline thing for solid 2.0.  This might even be 3.0.  Like this might be the thing that we learn as we go.  I'm the least confident on us being able to pull this off right now and coming up with the right...
[04:35:49] mechanisms for managing it.  This takes a lot of bundler awareness,  a lot of stuff beyond what we're doing.  I think 2.0 right now is gonna be an experiment a bit  on how that works with the lazy loading components and stuff.  I'm still working through solid start stuff.
[04:36:03] when those bugs work,
[04:36:05] get passed, we'll call it and continue. It's possible that we already have the underpinnings  and we can literally just bring meta across as a miner, but this might be maybe 3.0 territory.
[04:36:19] 5. Server Components
[04:36:21] Um
[04:36:23] not
[04:36:24] not 2.0.
[04:36:26] Um,
[04:36:29] Bye.
[04:36:30] Deal with server components.
[04:36:38] Thank you.
[04:36:41] Sorry, let me just catch up with the thing here.
[04:36:52] I don't know about guide.  We don't precompile generally, though.  Precompiling is not...
[04:36:59] the way to go. I talked about this earlier in the stream.
[04:37:02] Um
[04:37:03] I suggest still, even though people like TS up enough, but roll up, plug in solid.
[04:37:11] preset solid is
[04:37:14] is, is, has all the right conventions. The idea is you ship the source directly without the, with  the TypeScript separate here, and then it builds the ESM and CJS versions of your client side  bundle. The reason is the same source code can produce server, client, hydratable, whatever,
[04:37:30] ESM different bundles.
[04:37:34] Solid prefers to compile the source, but if you need
[04:37:41] I usually like doing the client side bundles at least, so people with no build can do stuff.
[04:37:51] Thank you.
[04:37:54] More docs. Cute. Um, people are always working on docs. Um, it's, it has the most active people of the whole solid community. Um,
[04:38:04] Always looking for help there.
[04:38:06] Docs are hard.
[04:38:11] beyond like I docs beyond what are there already is beyond the scope of what I, I can contribute to.  I'm not.
[04:38:20] an expert i can't make you know what i mean like
[04:38:25] As long as I can clearly communicate what each thing does, like, like from a reference  guide standpoint, that's about.
[04:38:30] this, but yeah, more docs are not on.
[04:38:34] We'll have 2.0 dock update for the release.  That's a prerequisite.
[04:38:38] Post release, that's a whole other thing.
[04:38:47] Thank you.
[04:38:48] Thank you.
[04:38:54] you
[04:39:02] I mean, a really hard...
[04:39:06] You can update it.
[04:39:07] With animated bits and everything will be perfect. Yeah, I mean,
[04:39:12] Yeah.
[04:39:14] really hard to...
[04:39:18] I'll see. I'll see what I can do here. This is a, this is like a huge ask because like, who's going to do it? We have, let's say I have four people working on docs fairly regularly, but are they going to do that?
[04:39:31] animated visuals.
[04:39:33] I...
[04:39:35] How do you compete with
[04:39:37] With like
[04:39:39] like meta backing teams of dozens of developers.  Yeah. You know what?  I'll see if I can raise funding for this.
[04:39:47] specifically.
[04:39:50] It's like this is, I mean, almost all our fellowship money goes into docs.  It's just really hard.
[04:39:56] Like,
[04:39:58] I.
[04:39:59] If
[04:40:00] I think this is kind of
[04:40:02] Yeah.
[04:40:06] Thank you.
[04:40:07] Thank you.
[04:40:08] Thank you.
[04:40:10] Thank you.
[04:40:16] They were, although most of them work on React Native, to be fair.
[04:40:22] I don't know. I don't think that's the state of things anymore.  It used to be the state.  But yeah, since the...  It might not be the state now.
[04:40:31] Google has 60-ish developers working on the Angular and adjacent teams.
[04:40:37] I think meta was fairly similar at one point.
[04:40:41] that are not all working on the docs effort, but it means that you could actually like
[04:40:46] have developers building doc solutions.
[04:40:59] Yeah, I mean, if docs are going to be the pain point there, this is a very difficult thing for us to overcome. I'm just going to put it out there.
[04:41:10] Because like...
[04:41:13] Despite everything I do,
[04:41:18] I think we'd need about five times the resources we currently have to actually
[04:41:23] get to a point where
[04:41:25] Where this could satisfy...
[04:41:29] Honestly.
[04:41:31] which seems a little bit out of reach right now, but maybe not in the future.
[04:41:36] But the problem is we don't get there without more adoption.  So this is a very catch-22 scenario.
[04:41:45] Um, okay. Sorry, where was I?
[04:41:50] Post solid. Server components. What do I want to say about server components?
[04:41:53] Have a design, have some ideas of how to do it.
[04:41:57] Um,
[04:41:58] and
[04:41:59] Right now, it's just a matter of coming up with the right encoding format. I prototyped something a little while ago.
[04:42:05] We'll see how that goes.
[04:42:09] But I needed to put on hold.
[04:42:12] uh the the
[04:42:15] So Sol Meta should actually probably move down.
[04:42:18] We should make this one five.
[04:42:21] Mm-hmm.
[04:42:23] Thank you.
[04:42:23] In a sense, though, I think we might be maybe keep alive and view transitions are the same, but we're looking at like.
[04:42:32] Thank you.
[04:42:33] So, what other day not?
[04:42:37] We have at least a few minor...
[04:42:40] versions on the books already here in terms of features.
[04:42:47] Well, I mean...
[04:42:49] Why does Tanstack have server components?
[04:42:52] Not I...
[04:42:57] Let's talk about Tanstack server components in a minute.
[04:43:01] Let's switch over.  I just wanted to...
[04:43:04] So the way I look at this is...
[04:43:08] Thank you.
[04:43:09] Sorry, we should lay this out better.
[04:43:14] - Followed.
[04:43:17] 2.0 where are we at
[04:43:21] Right.
[04:43:22] So,
[04:43:24] Thank you.
[04:43:26] What's left to do?
[04:43:30] Thank you.
[04:43:31] Amen.
[04:43:33] Performance audit. I have not picked the performance in like
[04:43:39] Six months.
[04:43:41] probably worse than I think it is, but let's look at that.
[04:43:46] Docs.
[04:43:50] I'm going to give this another separate doxing tutorial.
[04:43:56] Docs we could branch out a lot.
[04:43:58] Honestly.
[04:44:00] Because there's also like migration guides and like...
[04:44:04] A whole bunch of stuff out there. Um...
[04:44:09] What else am I thinking about here?
[04:44:13] Code mods?
[04:44:14] Thank you.
[04:44:15] Thank you.
[04:44:17] Thank you.
[04:44:18] Even before that,
[04:44:25] First party libraries.
[04:44:30] We've already got router and meta going, but I think
[04:44:35] start, I need to at least have start working even if it's not released.
[04:44:40] Um,
[04:44:42] This can kind of slide into
[04:44:45] to RC time period.
[04:44:47] Um,
[04:44:51] Sorry.
[04:44:53] DevTools update.
[04:44:59] Thank you.
[04:45:06] Yeah.
[04:45:08] Pre-factor DOM expressions? I...
[04:45:11] We're almost there, but you're right.  I am still missing...
[04:45:14] We've done a lot of DOM expressions. What I am missing here is, which is a good point, is...
[04:45:22] integrate
[04:45:24] SLE and for those who don't know it's like a replacement for lit.
[04:45:30] Fallen, lit.
[04:45:33] Um.
[04:45:35] Thank you.
[04:45:36] I still have that on the list.  I think DOM expressions, you've done them major and weren't...
[04:45:42] It's... it's... it's...
[04:45:44] it's very, it's,
[04:45:46] I feel like we've done like 90% of the objectives there for 2.0.  Honestly, other than one or two things that are kind of still up to debate,  I would almost consider DOM expressions where it needs to be.  I think we're very, very close there.
[04:45:59] Obviously we're missing SLD. I think there's a couple open questions, but like,
[04:46:04] Yeah, I'd say like 95% of the work is done there for DOM expressions. I'm pretty happy with that.
[04:46:10] You might think there's more stuff, we'll see, but very close to crossing the line.
[04:46:15] Well, see, that's the thing. That's outside of
[04:46:23] People won't
[04:46:25] do that until I
[04:46:26] until docks get up to speed, or they feel that at least the same time that they feel stuff's solid. I don't think
[04:46:32] Now that the API is finally stable, I think this is where that
[04:46:36] pushed to getting Cobalt and stuff going. Again, these
[04:46:39] are outside of my range.
[04:46:42] encourage people
[04:46:44] like cobalt
[04:46:46] developers and give them resources like
[04:46:48] Sorry, I should put testing library in here too. There's things that we manage
[04:46:53] And there's things that are in the ecosystem. I can encourage the ecosystem, but I can't control it.
[04:46:59] I just need to give them enough time.
[04:47:03] How long do you hold solid 2.0 release on ecosystem? Not sure.
[04:47:11] Thank you.
[04:47:16] Thank you.
[04:47:18] Okay, so I think...
[04:47:24] You can understand...
[04:47:25] I think
[04:47:29] Thank you.
[04:47:30] Migration guide. I'll put this together here.
[04:47:33] The tutorials are worth mentioning because they're ancient and there's like a specific infrastructure piece.  We've moved all the docs, but the tutorials over.  Oh.
[04:47:40] obvious one that that's
[04:47:42] Thank you.
[04:47:43] That's a pre-thing of the tutorials.
[04:47:47] Playground.
[04:47:50] Big one.
[04:47:53] Okay.
[04:47:54] Thank you.
[04:47:56] Thank you.
[04:47:57] Thank you.
[04:47:58] So there's still a lot of stuff to do.
[04:48:01] If you notice though,
[04:48:02] I'm involved in a lot of these, but these are, especially these ones. But this is getting beyond me personally. So,
[04:48:14] Um...
[04:48:16] Thank you.
[04:48:17] Just...
[04:48:18] This is going to be engaging the community and getting this stuff
[04:48:23] Rolling forward that when people ask me how long it's gonna take for solid two to come out. It does depend on
[04:48:29] on
[04:48:30] more people
[04:48:31] than me. I needed to get ahead of it. I need to get things in a good place. This is going to be the blockers.
[04:48:39] These are not the blockers.
[04:48:41] You can understand why I want to draw the line, hopefully.
[04:48:50] Honestly, I have no clue what you're talking about either.
[04:48:56] Thank you.
[04:48:58] What do you mean client-only components?
[04:49:01] We already people already asked for client only components.  We have a client only thing in solid start.  I'm not really sure.
[04:49:12] Thank you.
[04:49:13] Thank you.
[04:49:15] Have you been keeping... have you been watching Tanstack at all?
[04:49:20] Thank you.
[04:49:24] Thank you.
[04:49:27] Thank you.
[04:49:28] Thank you.
[04:49:30] Thank you.
[04:49:32] Thank you.
[04:49:38] Yeah, the thing is, router and meta are already in okay places.
[04:49:44] Testing library is something I'm working on right now.  Like this is where I personally am going next and a little bit here.
[04:49:51] I...
[04:49:52] That's what I put performance audit number one, but that is not
[04:49:55] the order of this list at all. Performance audit is
[04:49:59] after
[04:50:01] probably around where CodeMods is.
[04:50:03] I mean, if I was actually prioritize this in order,
[04:50:07] There's different people, but it's probably a bit more like this.
[04:50:13] Thank you.
[04:50:18] Thank you.
[04:50:21] Thank you.
[04:50:22] Thank you.
[04:50:48] That's a better order.
[04:50:50] Thank you.
[04:50:51] Thank you.
[04:50:52] Thank you.
[04:50:53] Thank you.
[04:50:55] Thank you.
[04:50:59] Thank you.
[04:51:04] There.
[04:51:10] Thank you.
[04:51:12] Thank you.
[04:51:12] Thank you.
[04:51:15] Technically, this is like Doc's team.
[04:51:22] They're gonna bug Milo like crazy. Milo's kind of responsible for the playground.
[04:51:27] So he's probably trying to do final exams.
[04:51:31] right now. Docs, Milo,
[04:51:35] Um...
[04:51:37] me
[04:51:39] Alex is working on testing library. Ren Lee.
[04:51:45] Um...
[04:51:50] Also at start I'm gonna have to bring Atilla in as well.
[04:51:55] This is
[04:51:57] Me and Tito.
[04:52:02] Thank you.
[04:52:05] It's probably the docs team again.
[04:52:08] It's funny because when I say docs team, I'm like...
[04:52:13] Sarah
[04:52:14] Or...
[04:52:16] Like the same people again, Gremly.  Like there's a whole...
[04:52:19] You group it on them.
[04:52:21] Oh, know what I'm missing here too?
[04:52:25] opinion
[04:52:28] Thank you.
[04:52:29] uh,
[04:52:30] I think this is important. ESLint.
[04:52:35] Thank you.
[04:52:38] I don't know who's doing this classically.
[04:52:43] We have our ESLink guy, but he's been busy.
[04:52:49] Just need to.
[04:52:52] Let's see there.
[04:53:01] Yeah.
[04:53:05] And the thing that's not here too, that's probably important,
[04:53:09] Thank you.
[04:53:10] If I talk to David, website,
[04:53:13] update
[04:53:15] Redesign he's been waiting for this chance.
[04:53:18] So.
[04:53:20] I...
[04:53:22] Amen.
[04:53:27] There's more people on docs, less.
[04:53:31] Yeah, logo. Yeah.
[04:53:33] Thank you.
[04:53:34] Logo yeah, we've talked about the logo too.
[04:53:40] Thank you.
[04:53:42] Thank you.
[04:53:48] Yeah, I don't know if you've been watching my streams, but I'll talk about a minute when we talk about server components. Okay, yeah. But...
[04:53:58] Um...
[04:54:00] Thank you.
[04:54:00] This is kind of...
[04:54:03] the
[04:54:05] Okay.
[04:54:08] where stuff, like what's left to do. You notice it's a lot of meta stuff. It's not like
[04:54:16] much of it directly on  solid itself
[04:54:20] It's a very different list than this one.
[04:54:24] Anyways, let's switch to this week in JavaScript.  I think we're at a good point to switch gears here.  I don't know if there's a ton, but I do want to talk about
[04:54:34] Some stuff.
[04:54:35] Thank you.
[04:54:36] So give me two seconds while I switch views and stuff.
[04:54:41] um
[04:54:50] Just give me a second.
[04:54:52] Thank you.
[04:55:07] Actually, I'm just going to put this on because I just saw I opened my feed and this is what I saw.  And I was like, whoa, what's what's going on? This is so nice.
[04:55:17] Like, opened my feed and I saw this.  Had to talk to a colleague at work, and he said, "You're a big React guy."
[04:55:21] As he said that, I realized that I'm not really.  If I ever had to choose to be labeled, I would be labeled a solid guy.  Solid is such a well thought out framework.
[04:55:28] I love TAN stack, but I have come to realize most of its offerings are direct response to deficiencies of React.  Solves first classes, most of it is simpler and smaller, not needed.
[04:55:36] RCs aren't.
[04:55:39] It's like people just tell me what I want to hear.
[04:55:42] *sniff*
[04:55:43] Thank you.
[04:55:47] Thank you.
[04:55:48] Thank you.
[04:55:49] Okay, but yeah, let me throw the banner up for this...
[04:55:54] This Week in JavaScript.
[04:55:56] Um.
[04:55:58] Thank you.
[04:56:00] It's just funny when I haven't seen this stuff, it just landed right on my feed.  So let's do this.
[04:56:07] I wonder what their responses are.
[04:56:11] Thank you.
[04:56:12] Oh.
[04:56:13] Heart, Brandon.
[04:56:15] Thank you.
[04:56:17] I'm glad that people like what we're doing.
[04:56:26] Thank you.
[04:56:30] Thank you.
[04:56:32] All right.
[04:56:40] Yeah, but that's not his point. Yeah. Yeah.
[04:56:44] This is your use. Make sure you have to end up in less forgetting. Okay.
[04:56:46] All right, let's flip around here just because it was very sweet comments.
[04:56:54] Thank you.
[04:56:55] Thank you. Okay, so let's... sorry, I actually do need to...
[04:57:03] I feel like I haven't posted much since the last stream was April 3rd.
[04:57:07] So let's just...
[04:57:13] Okay, there...
[04:57:17] Thank you.
[04:57:20] Bookmarks.
[04:57:25] Literally these two and we already talked about this
[04:57:29] So we'll talk about this. So there's actually nothing in bookmarks.
[04:57:33] because
[04:57:33] I'm pretty sure I retweeted that one so that's fine. And then let's switch to SolidJS.
[04:57:40] Thank you.
[04:57:42] Thank you.
[04:57:44] All right. Okay, cool. We ready? Let's talk.
[04:57:51] This month in Solid, talking about the beta stuff...
[04:57:53] Not too surprising. It's been the biggest thing for the last month since the beginning of March. Beta has now been out for about a month and a half. So...
[04:58:02] making good progress. Obviously not everyone's jumped on board. I was on the red end and people were like,
[04:58:07] What?
[04:58:08] what do you think, a solid 2.0?  Have you jumped over?  And most people said no.  And it's because the docs aren't there.  I don't blame them.  But it doesn't stop the tinkerers.  And to that point, TAMSTACK...
[04:58:18] 2.0 beta support are already going. Like these guys, I haven't even got the solid start yet and they're already got a hand stack going in here. I might have just broke some stuff with the, with the beta, the seven release. Um,
[04:58:31] Because we are adjusting a couple things.  They shouldn't be huge.  But I'm hoping that we get to where we need to go.  I feel like I'm done with the API changes now, pretty much.  And we're just going to...
[04:58:45] I'm banging out these bugs. So, very cool though. You can go and install Tansac Start with Solid 2.0 and apparently
[04:58:56] query and router and it
[04:58:58] And it's working. So I have no clue how these guys did it. I didn't talk to them too much.
[04:59:04] I think this is awesome though.
[04:59:07] I...
[04:59:08] I know people are really excited about Solid 2.0. The reason we went beta earlier
[04:59:13] than I might have thought originally was one part cursor and AI.  The other part was Tanner himself. Tanner came to me and he was like,
[04:59:19] Brian, I just need...
[04:59:21] I just need solid 2.0 right now.
[04:59:23] I can't wait any longer. And I'm like, I was planning to do this. And he's like, you know,
[04:59:27] I respect that, but I just need it right now.
[04:59:31] And I was like, okay, fine.  Give me a day and I'll think about it.
[04:59:34] And then we ended up with the beta release.  Um,
[04:59:38] Thank you.
[04:59:39] Thank you.
[04:59:40] Yes, I talked about this earlier.  If you want the...
[04:59:45] The short answer is yes.  The more nuanced answer we talked about earlier.
[04:59:49] I'm
[04:59:53] Thank you.
[04:59:54] You will still be able to use something like create mutable, I'm sure. Solid is not
[05:00:00] it.
[05:00:02] Um...
[05:00:06] Yeah.
[05:00:08] What can I say? This is what you want to see, right?
[05:00:12] Um, Brenly, obviously very involved in both start projects in the future for, and so a big part of it, but Burke also great member of the solid community.
[05:00:21] big guy behind the some of the
[05:00:23] Especially the start initiative on the Tanstack side.  So...
[05:00:28] That's awesome.
[05:00:30] You know, uh...
[05:00:32] So
[05:00:33] Yeah, I mean,
[05:00:35] They just tell you how to install it here, join the Discord, try it.
[05:00:40] So yeah, yeah, no, this...
[05:00:42] These guys are on it.
[05:00:48] Thank you.
[05:00:49] Just in case people are talking about component libraries, base UI apparently has an unofficial solid port.
[05:00:55] I like giving exposure to people pointing out stuff that I might not know or others might know.  No matter how many times you guess there's a solid version of this, people don't believe you.
[05:01:06] So, you know, there you go.
[05:01:10] I thought this was cool.  It's a little...
[05:01:15] game app created in S with solid and tailwind apparently. Um,
[05:01:20] And I guess probably the pixie
[05:01:22] Renderer.
[05:01:29] Just highlighting...
[05:01:33] See, not much on solid. Okay, let's switch back around and get on the topics I wanted to talk about.
[05:01:43] Yeah, 10 of end-to-end test, they just start fixing the test at the Tube with beta. Yeah, but I mean, how many of those bugs are my fault or their fault, right? The fact that I get the, by my fault, I mean, like, solid having a bug versus, like,
[05:01:57] um,
[05:01:58] TanStack. I mean, this is good. This is finding issues that will actually, you know,
[05:02:05] Um...
[05:02:06] Help us find those issues earlier.  This is the exact kind of testing I'm looking for, you know.
[05:02:12] So I'm glad that it was able to just come across. Query was the real surprising one. I have no  clue how they pulled off query. I mean, I know how I'd implement it, but I don't know how they pulled off query.
[05:02:24] Um...
[05:02:26] AI apparently. I don't know.
[05:02:28] This is the biggest change here. I think we might be the... This is a big change for Solid. Solid 2.0 is a big change from Solid 1.0.
[05:02:38] Not...
[05:02:39] as drastic in some ways as view two to view three or felt
[05:02:44] four to svelte five.
[05:02:46] But on the other hand, this is probably the first migration of the sort that can really leverage AI as a first class citizen.  I think this is a game changer.
[05:02:56] We'll see.
[05:03:02] Is Tanner running a company? You can view it like that Tanner
[05:03:06] Um,
[05:03:09] Tenor...
[05:03:11] is very good. You can almost view it like him running a company. He's very good with people.  He gets good connections. He knows how to connect the people to the work and the money to the money  to where he needs to get it done.
[05:03:21] I am not nearly as efficient as Tanner at this to make sure that people, you know, can...
[05:03:28] I do a lot of the work myself.
[05:03:32] Tanner is very efficient on the work side too, but he's definitely stepped back in recent times to make sure that he can get the right funding. And that's probably something that I should be doing instead of being head down in the research, but research is also where I'm strongest. So...
[05:03:49] Yeah, I mean...
[05:03:50] The biggest thing is because Tanstack supports React,
[05:03:54] their pool is just bigger, like...
[05:03:58] Even if I spent my time trying to like get more funding and more work for people working on solid, the pool is so much smaller compared to.
[05:04:06] To react so it's like it's hard to justify spending as much time there when I could just be doing the work and
[05:04:11] Um,
[05:04:12] But...
[05:04:13] You know, that's changing. Tanstack investing in solid so heavily, like downstream, like the way that things are happening is huge for us. As everyone knows, I think we're like so close to cracking 2 million downloads a week.
[05:04:28] That would have been crazy, like even a year ago. I think we were almost at
[05:04:32] 300,000 downloads a week. I don't know where we are at right now. Maybe we, we might have flattened out a little bit. Yeah, we flanned out right under 2 million. We're at like 1.942 and we were at 934. And yeah, we're like just under 2 million downloads a week. When I say flattened out, I mean, in the last since March.
[05:04:51] But there's a little spike there.  I mean, like...
[05:04:54] A year ago, we were at 400,000 downloads a week.  Now we're almost five times that.  So like good stuff's happening.
[05:05:01] You know, it's just...
[05:05:06] I don't think any UI framework has grown as much as solid has in the last year.
[05:05:12] Table, there's probably a port of it. I don't know if it's on 2.0 yet.
[05:05:20] Okay, so let's grab a couple of the topics.
[05:05:26] I've seen talk of AI removing the need for frameworks as an author using AI to assist
[05:05:31] It feels we aren't there yet. Trying to debug fixed framework code without introducing regressions is non-trivial. To think app code isn't going to be missing edge cases is fanciful. I didn't know how to say it. I tried to say it more politely. That's why I used the term fanciful. Um,
[05:05:45] It's kind of ludicrous, honestly.
[05:05:48] I just know this because like the kind of loops I go in trying to debug
[05:05:53] issues in this framework, like where you're like, fix this, but break this, fix this and break this, fix this and break this.  And it's just constant loop. And if it weren't for like the immense amount of tests, you're like, how do I, would I even know?
[05:06:04] picture
[05:06:06] Writing an application where you don't test every...
[05:06:10] edge case
[05:06:12] Adieu.
[05:06:13] Because you like...
[05:06:15] there's behaviors you're not even responsible for, they're just
[05:06:18] There's just things that just kind of happen,  timing in your app or whatever.  And they're not like some kind of fundamental thing.  Like we have a very...
[05:06:26] first principles approach here because we're like, we have a primitive that does a specific thing and we need to make sure that under different conditions it continues to still do that specific thing.
[05:06:35] But picture building an app where it's not nearly as tight.
[05:06:39] or hardened or whatever term people use. It's funny. I find myself using different words these days because I'm talking AI like I never use the word hardened.
[05:06:47] before AI. I know it's a security term, maybe it's a tech thing, but
[05:06:52] hardening tests was not something that I used as a term before. Just like I didn't use invariant too often before AI. It's like just talking to them has changed my language I use. Anyways, kind of aside.
[05:07:08] *sniff*
[05:07:09] *sniff*
[05:07:11] when you consider all the things that could go wrong, how like,
[05:07:16] you use the application to just build the behavior you want, and you trust that it will generally work.  If you were to remove the framework from that equation, the thing that's actually putting the guarantees in place,
[05:07:27] Like who knows what you're going to end up with?  People are like, "Oh, just build it all with vanilla JS."
[05:07:32] And it's like,
[05:07:33] every single race condition, everything like
[05:07:37] Uh-uh.
[05:07:38] I tried to make a
[05:07:40] a test to see how much tokens were,  but I think stuff's still too variable.  I can't really get a controlled set  in terms of like comparing vanilla JS to a framework.  The problem is, the challenge here is  to come up with a test that AI can generate  in a predictable way that isn't,
[05:07:58] It's the same problem as any benchmarking that isn't trivial is very hard.
[05:08:02] Um,
[05:08:03] To the point that like,
[05:08:06] I'm not sure if it would show anything yet.
[05:08:09] So,
[05:08:10] Still thinking about that, but...
[05:08:13] Honestly, after debugging these issues,
[05:08:15] I don't know how anyone could assume that they could just like wing it vanilla JS style and expect to have the same kind of confidence in their code.
[05:08:24] Thank you.
[05:08:27] Reasons had really good AI, right? They are really good at happy code path, but edge cases are just human job to find. Right. Exactly. So, which means frameworks aren't going away because frameworks are literally there to give you guardrails around those edge cases. Like,
[05:08:43] It's...  Yeah, it...
[05:08:47] I worry about DSP lawsuit writing COVID-19.
[05:08:50] Is there vibing now that we built those for robots now for you? I mean,
[05:08:53] That's fair.  My whole, like...
[05:08:56] idea here on the diagnostic system
[05:08:58] There is a readability concern, but I think
[05:09:03] I don't think it's the way you...
[05:09:05] Thank you.
[05:09:06] You might be thinking, see,
[05:09:08] AI doesn't care
[05:09:09] If you're
[05:09:11] signal calls a function
[05:09:13] or uses a dollar sign. Do you know what I mean? Like AI doesn't, probably doesn't care if you had to type
[05:09:20] three extra characters.
[05:09:25] Like, it's just syntax.
[05:09:28] People care about that, but AI...
[05:09:31] does not care.
[05:09:33] What they might care about is structural guarantees, you know, things that like,
[05:09:37] in terms of like,
[05:09:40] I have to imagine AI looks at code more similar to the way I look at code.
[05:09:45] where it goes okay this is the declaration this is this like it looks at it structurally in terms of like
[05:09:52] like where it fits into almost like a pattern and
[05:09:59] Different concepts requiring branching and that, that's where complexity comes in.
[05:10:03] Typing more characters is not so
[05:10:07] Bye.
[05:10:08] I think
[05:10:09] We will still...
[05:10:11] like things that are good for you, AI is still good for humans. What we might not care about is superficial stuff and I think I'm pretty okay with that.
[05:10:22] Thank you.
[05:10:24] Thank you.
[05:10:24] Thank you.
[05:10:28] Yeah, I don't think so.  React becoming the last framework is not...
[05:10:32] No, the reason I...  It's for all the reasons.  If...
[05:10:35] we already had that Tanner quote, but if
[05:10:38] And I...
[05:10:39] does it react doesn't become the law.  I mean, okay.  There's an argument react comes the last rumor because you just don't care  enough about the output, but at some point, if AI removes the friction,  you'll just want the better output.
[05:10:51] So it's not that there's no framework or React to the last framework.
[05:10:56] it just, the cost of switching frameworks goes down.
[05:10:59] I don't know.  That's why I don't buy into React the last framework at all.
[05:11:05] Okay.
[05:11:08] Okay, Deb, I'll bite. What is this?
[05:11:19] *laughs*
[05:11:23] Okay, I see where you're going with this. I don't know. I mean...
[05:11:28] This is a topic, maybe let me look at it in a minute.
[05:11:33] Let's go back here for a second, back to...
[05:11:37] Back to where we were at.
[05:11:41] Yeah, it's because I switched over to Twitch again.  We should be back now.
[05:11:49] Yeah, it's whenever I switch over to Twitch that
[05:11:52] that it goes.
[05:11:55] Hopefully the audio still works when that happens.
[05:11:58] Um,
[05:12:02] If you put the edge cases into a skill or agent's envy, then it will know about them and not introduce those bugs.
[05:12:08] When I read this, I was like...
[05:12:11] I thought it's interesting to treat framework as a skill or as some kind of description rather than actual code. That's interesting, right?
[05:12:20] Because it's like these cases are completely independent.  My thinking is around emerging behaviors, but it isn't like those don't exist in higher abstractions.  And this doesn't preclude abstraction.  I guess it is like...
[05:12:30] Generally, everyone needs a framework, not everyone needs a general one. Do we trust AI to make or maintain those mechanisms as they apply to your code base? Because basically,
[05:12:39] What I'm getting at here is
[05:12:40] If you don't create the framework, the AI will create the framework for you.
[05:12:46] At which point,
[05:12:47] you're the one left maintaining it instead of someone else.  Maybe that's where you want to be.  I mean, Theo had a great video where he was telling him  to build an open source so everyone could fork their own  version of the software and then manage it themselves.
[05:13:01] I think that's cool. And I think for like enterprise customers or something, that's like something very desirable. But once someone forks your thing,
[05:13:09] the guarantees go out the window right once they start modifying your stuff then  we can't trust it in the same way so while this is good in theory if you  want to take that stab i think most people will still just default to to
[05:13:21] them maintaining it. Maybe they'll trust the AI to maintain it and that's what Theo's point is.  But I think people still don't want to take on what they don't want to take on even with AI. They're just
[05:13:31] You know what I mean? So like...
[05:13:33] Yeah, I...
[05:13:34] I guess we'll have to see if AI makes a huge difference here. My point is that like,
[05:13:40] Thank you.
[05:13:41] When I first read this, I had to step back and think about this a little bit more
[05:13:45] openly because like I was just picturing like
[05:13:48] like me going into HackMD and just writing everything I knew about every edge case and every JS framework into like this like thousand page thing and then expecting to fit that into, into the, the, the,
[05:14:01] skill thing that the AI loaded, like, could like, would we just like use up
[05:14:06] all of AI's contacts before it did anything.
[05:14:10] But more realistically, could you...
[05:14:14] come up with some kind of tighter list that
[05:14:17] they gave enough direction without giving all the answers.  That's an interesting question.  Like, is that what the framework is?  I don't know.  But yeah.
[05:14:25] Me and Matthew have had similar things previously. I was like saying like, I wonder if he'd like use all the context, you know?
[05:14:32] Thank you.
[05:14:33] Here's one. There's a conflict of the statement. Removing the need for a framework with AI is different from maintaining a framework with AI.
[05:14:39] AI has strict spec default. There's an error tolerance when your product specs are flexible.
[05:14:43] I think we might...
[05:14:44] feel that way because they use the library frameworks to abstract a lot of problems away, but even in product code when you go into the same area again and again to fix an issue you get the sense this effect is multiplicative.
[05:14:54] Main problem is frameworks to really solve is reusability, composition, anything else is extra.  Web components can solve that out of the box. So there's a web component person.  So there's a chance that AI will eventually retire frameworks with current trends, the property might be true.
[05:15:07] with
[05:15:07] web components. Maybe this is a misunderstanding. Composition reusability is simple at the surface. A function composes
[05:15:14] and is reusable. Frameworks are about consistency, about making it so discrete pieces can be independently authored yet play a role in shared orchestration.
[05:15:23] Okay, I don't know if he just was placating me, but...
[05:15:27] Thank you.
[05:15:28] You kind of see why frameworks are different than web components.
[05:15:33] Worth pointing out anyway. Let's keep on going while we're on this AI topic.
[05:15:39] This one, this one's been a little bit troublesome for me.
[05:15:42] I was trying to think of how I'm going to do coding demos in the future.  And then I'm like, but no one codes.  So they're not going to like, cause I do these demos where I like, I like make it  show how really difficult or awkward something or how much code they need.  And then I just like.
[05:15:57] Usually my demo is like,
[05:16:00] Hey audience!
[05:16:03] Here's a problem. And everyone's like, oh yeah, I know the problem. Okay. And they're like,  how would you solve it? And you write something overly naively simple. And then you're like,
[05:16:10] oh, this doesn't work in React or something like along that lines. And then you're like,  let's make this work in React. And then sometimes you code it.
[05:16:17] usually be effective. Other times you might like
[05:16:20] Show the code.
[05:16:22] And then you'd be like, oh, this is all the issues and this is the thing.  And then at the end of my demo, I'm just like, huh, let's do the same thing as solid.  And then I just write the original code we did at the beginning and it just works.  There's variations of this demo.
[05:16:35] The React compiler demo was like this too, if you think about it, when they first announced it.  They showed a simple example, showed why it completely broke in React,  and why it was over-rendering, showed how to fix it by showing a whole bunch of...
[05:16:47] create memo, use memo calls.
[05:16:49] And then we're like, what if the thing just worked? React compiler, right?  It's the same formula, right?
[05:16:55] um obviously i find myself using that formula way more um
[05:17:00] then React is because usually they're not
[05:17:03] doing it against themselves, but
[05:17:05] If people don't view themselves as the one writing the code, do they feel the pain?  So that me sitting there trying to type stuff out, it's always very painful because I always screw things up and miss typos and the audience wants to yell at me.  And it's like, oh, did I miss a character here?  My bumbling around only emphasizes the impact of this, where you can literally hear the people shouting from their screens, so to speak.  Yeah.
[05:17:32] But...
[05:17:34] Thank you.
[05:17:34] What if...
[05:17:36] No one codes anymore.
[05:17:38] Because in a sense, I haven't been writing very much code.
[05:17:41] So it doesn't have the same impact.
[05:17:44] They are reviewing it, right?  So jumping straight to the screenshot might be fine, I guess.
[05:17:50] Um,
[05:17:52] "I think it's roughly the same, but with different framing. Teach them empathy for the agent that will experience it if it goes through the same problem challenge face. Give them a simpler decision to instruct their agent to use better solutions instead."
[05:18:01] That curse me that at some point in the future, my live tech demos wouldn't involve me doing any live coding. That's until the conference Wi-Fi fails.
[05:18:09] Yeah, some of it is using gen. The tricky part with code gen is for new features. It's not very helpful because you need like rocks, all the docs and training. You know, like, while I make a thing that like the reacts training is overwrought, like people's concern about that.
[05:18:26] I think brand new things as they first come out, like you still need to give it.
[05:18:29] a little time for things to kind of absorb into the
[05:18:33] the ethos, you know.
[05:18:35] It's hard because I find myself a lesser boat of 80 advantage to use simplicity code ahead, right?  But who's touching code am I? They only will reach for the most library and never the best one. It's fair.
[05:18:44] Focus more on selling how the better solution architecture help devs
[05:18:47] using AI to output better code that's more reliable.
[05:18:51] I used AI a ton, but still care a lot of the quality.
[05:18:54] It's hard to measure, hard to demo in a way that triggers emotion.  There's skepticism.  Conceptual arguments are lost in people.  Otherwise, I think Sol would be more popular.
[05:19:03] I feel like we spend a lot of time here talking about conceptual arguments,  but people are just like, who cares?  Use React, right?
[05:19:10] It's...
[05:19:12] Thank you.
[05:19:12] because my experience shifts from this is hard to write to this is hard to trust right that's the  reviewing thing
[05:19:17] So I think it's actually better.  And I tried this recently on a stream when I was talking about the async stuff.  I think it's better to actually show the broken code, but make it people think that it's correct.  Kind of like I do in the first step.  So be like.
[05:19:33] Present a problem.
[05:19:35] Lead the honest and simple solution.  Even the audience knows that the simple solution is...
[05:19:40] doesn't work.
[05:19:41] Then show them something that looks reasonable.
[05:19:46] Convince them.
[05:19:47] that the code is good.
[05:19:50] even though it's way more bloated,
[05:19:52] And being like, look, yeah, this and this and this and this.  And then they're like, oh,
[05:19:56] And they're like, oh, yeah, yeah, yeah.  So you have to do that.  That kind of sucks, but it works.  I get you, you know.
[05:20:01] And then go, actually, guess what?  Fooled you.
[05:20:03] Again, this still doesn't work.
[05:20:06] show them all the ways it's broken.
[05:20:09] And then...
[05:20:10] go back to the original example at the beginning and show how it's not broken and works with solid.
[05:20:17] That might be the proper sequence of events.
[05:20:21] So instead of making them go through the pain,
[05:20:24] of getting to the right solution. Stop like at the 80% mark.
[05:20:30] And make them think that they've solved the problem...
[05:20:32] but really haven't.
[05:20:36] I don't know. Food for thought.
[05:20:44] I mean, this is an angle, obviously, it's easy to reason about, but...
[05:20:49] I...
[05:20:51] And that doesn't give the emotional response of the pain you felt going through and writing it.
[05:20:59] But,
[05:21:00] Maybe we can trigger that same emotional response by giving people a false sense of security.
[05:21:06] and then ripping it away from them.
[05:21:10] You know, where they're like, okay, because that's what AI does. You build something with it and  you're like, damn, how did it do that? That's great. And then, and then you realize you're like,
[05:21:19] You ship it and then you realize, holy crap, everything's broken.
[05:21:24] Thank you.
[05:21:29] Thank you.
[05:21:29] Async rug pull, yeah.  I don't know.  I'm just kind of thinking out loud.  But I think that like...
[05:21:37] The way we demo
[05:21:39] It's different. And I think
[05:21:40] This, I think maybe that's the new solution.
[05:21:44] I think it's...
[05:21:46] Maybe.
[05:21:47] not actually spending the significant time fixing things
[05:21:51] But...
[05:21:52] coming up with a justifiable position
[05:21:56] And then
[05:21:57] poking holes in it.
[05:22:03] Well, the thing is...
[05:22:05] Thank you.
[05:22:06] I do do that, but then you lose a bit of the impact.
[05:22:10] There's a difference between you missing a comma and you catching yourself immediately, which happens like it didn't compile and you're like, oh, okay, that's fine.  That happens to live demos and you getting stuck and not being able to present the demo.
[05:22:22] I'm not suggesting like when you can't find the one comment and you're sitting there like what the hell's going on. I'm talking more of like
[05:22:27] Like the natural thing like this. Oh, didn't. Oh, right. And then you like when it's part of the flow people
[05:22:33] get pulled in because they're writing the code with you in their heads.
[05:22:38] Thank you.
[05:22:39] Thank you.
[05:22:41] Thank you.
[05:22:47] Well, I mean, that's the thing. I think I have to control that. I don't think I can have necessarily trust AI to make the faulty demo. I mean, I could probably find a demo that AI will make faulty pretty easily. But then like...
[05:23:03] I mean, maybe that's a trick, and then, like, you know...
[05:23:05] trust on the day that it won't. I think it's better to appeal with some pre-generated code or  pre-made code to the human and be like, hey, they don't care or know what AI, you can even fake it  and be like, AI generate this and then show them it. It doesn't really matter. The point is that  they're now the ones reviewing it and they have to make sense of it and you make it look really  sensible until it's not.
[05:23:34] Anyways, just food for thought.
[05:23:41] There's a lot of people trying to tell me how to sell solid.  And I'm like, basically, the selling thing, this just doesn't work.
[05:23:51] You need to target people where they feel it and just telling them that it speeds up development, lowers costs, reduces complexity, better performance, more accuracy, blah, blah.
[05:24:02] Thank you.
[05:24:05] And...
[05:24:06] You know we've been able to make that statement forever. No one cares.
[05:24:14] you
[05:24:16] I think this points a fool's ear. The barrier to new programming language has never been lower. 100,000 efforts should focus on onboarding AI assistant development, solid derivatives for tooling, document ecosystem, or world-class AI. AI doesn't change the fundamentals, but I suppose we are at that point where the inefficiency of AI is a bigger problem to solve. I don't think these are annihilated, but it's harder to prove. Yeah.
[05:24:37] Thank you.
[05:24:38] Yeah.
[05:24:44] You mean when people don't have to deal with problems, does the problem really exist? If a tree falls in force, there's no one around to hear it? Does it make a sound?
[05:24:51] The problem is people still have to deal with the problem. So I think that's really what it comes down to. We have to
[05:24:58] make convince them that they're still the ones who have to deal with the problem
[05:25:05] Not being stressed by hydration errors.
[05:25:09] That's an emotional response.  Yeah.
[05:25:11] Uh...
[05:25:12] Oh, where do we got here? Okay.
[05:25:14] Pop quiz for people in the chat. You guys are probably the only ones who could probably answer this.
[05:25:19] What is this a logo mashup of?
[05:25:25] Thank you.
[05:25:26] Thank you.
[05:25:27] Thank you.
[05:25:28] Thank you.
[05:25:29] Thank you.
[05:25:30] I'm going to let you guys guess at this one.
[05:25:34] Bye.
[05:25:35] Thank you.
[05:25:36] Thank you.
[05:25:40] Raphael, I see your question. I'm actually going to pull something from Reddit, which is actually...
[05:25:46] a great answer to that question.
[05:25:50] Okay.
[05:25:51] ...
[05:25:52] Solid Duck Rocket. But the question is like, okay, so this stream probably recognizes this as the infamous solid duck.
[05:26:00] So this is the solid logo as a duck.
[05:26:03] Cartoonized. But does anyone recognize where this rocket's from?
[05:26:11] Thank you.
[05:26:11] Thank you.
[05:26:14] Thank you.
[05:26:17] Oh, we have ding ding ding. We ever we saw this in a discord channel, but yeah.
[05:26:24] solid
[05:26:26] Dar.
[05:26:28] Not star, solid star.
[05:26:33] Of course, I'm never going to find it.
[05:26:37] beta star.
[05:26:41] There it is.
[05:26:44] Solid star. Datastar with solid JS reactivity. Star is an almost drop-in replacement Datastar with solid JS reactivity under the hood enabling interoply between hypermedia-driven frontend logic and solid components.
[05:26:56] So it's just Datastar, so it's HTMX plus solid reactivity system.
[05:27:02] I didn't even realize it's a project, but it looks like...
[05:27:09] Katcha who's on the solid start team was actually a big part of making this, but
[05:27:16] It's a thing.
[05:27:17] uh
[05:27:19] Thank you.
[05:27:21] Yeah, it took me...  Because if you actually look, this is the...
[05:27:27] The data star, let me see if I can find it.
[05:27:31] Data start.
[05:27:34] It's the Datastar Rocket logo. There it is.
[05:27:42] Thank you.
[05:27:43] Thank you.
[05:27:43] But...
[05:27:46] fun.
[05:27:50] Thank you.
[05:27:57] Yeah.
[05:28:03] - Okay, so what we got left,  we should talk about HandStack server components.
[05:28:08] Yeah, okay. Okay, before we do that, I will look at what you have posted. How does
[05:28:14] Svelte async work with context.  What happens when a parent component fetches some data  and sets it into some context for the child component to render?  Does it trigger the pending boundary above the parent
[05:28:24] component or the child component.
[05:28:26] Apparently you can't set context after an await. This might be a bug.
[05:28:31] Not a bug. The error?
[05:28:33] Could be clear in this case, but the behavior is by design. Svelte renders things out of order.
[05:28:38] So the setting context after wait is likely too late.
[05:28:42] just put a promise in the context and await it where you need it okay i mean that
[05:28:46] makes sense to me.
[05:28:49] Thank you.
[05:28:50] past async to get to context is being wrapped in a promise.
[05:28:54] I mean,
[05:28:56] The demo is purely demo.  Yes, they actually enforce it.
[05:29:02] Which I mean, is good in one way, right?
[05:29:05] The challenge here is that
[05:29:09] I'm trying to see what you were trying to get out of, because the challenge here is,
[05:29:14] So
[05:29:15] If you unwrap too early, you block the whole render tree.  This would have been a good quote from my last stream where I spent the whole time explaining the
[05:29:24] the um
[05:29:27] this diagram here.
[05:29:30] Because the problem is
[05:29:33] Here in this zone, it's a promise, right? So if you're up in your top of the route thing,
[05:29:41] If you keep it a promise, you push this bar down
[05:29:45] very far, which means you have promises everywhere, but it means that you're less blocking by moving the whole bar down.
[05:29:52] Obviously, we find this interesting and solid because we've decoupled this, which means  that we can be colorless and non-blocking everywhere.
[05:30:00] there's a definite trade-off. You might not care about this trade-off per se,
[05:30:03] Um, but...
[05:30:05] understanding this, it's
[05:30:07] eat
[05:30:08] There.
[05:30:10] recommendation is basically to reduce the blocking, right?
[05:30:15] So much for having it in DX. I mean...
[05:30:18] It's funny, I guess this is like, this makes it more real for people.
[05:30:22] Like for me, this is just obvious when I look at the shape of the problem like obviously this is not gonna be better DX and
[05:30:30] I saw Rich claiming they have an Edge in DX because no split effects.
[05:30:34] No, I mean...
[05:30:36] I said the whole last thing.
[05:30:38] Yeah, it's funny. It's fine.
[05:30:41] Like...
[05:30:42] You know...
[05:30:42] I mean, obviously this is this is
[05:30:46] I'm going to show this example again just for fun, but obviously
[05:30:49] this is contrived, but it doesn't matter if it's context or components or whatever. If you can fetch up here,
[05:30:59] Thank you.
[05:30:59] and then pass it through a bunch of different components so that it gets rendered down here.  And these are actually the same components, just accepting a different value.
[05:31:07] and put the loading around here so when I load it what you can see is the outside
[05:31:12] these all render once and then these pop in like loading
[05:31:16] Top.
[05:31:17] You know?
[05:31:18] the
[05:31:19] But what?
[05:31:21] Like this demo is almost impossible to create in an ergonomic way in any other framework, right? Because what I'm doing is as I'm passing it down, I'm actually multiplying an
[05:31:30] adding to the props. I'm like,
[05:31:32] Fetch this thing, add a one.
[05:31:34] times it by two or times it by three, and then stick it in this component and put in a loading boundary.
[05:31:40] Because this is a
[05:31:42] is a number, even though this is async,
[05:31:45] Doesn't matter if it's async, but because it's async, fetch a number in two seconds.
[05:31:49] We take that number that it fetches in two seconds,
[05:31:51] because it's already a number, we can add to it here in the props. We don't have to worry about it. Like we've already done the await, but we're not blocking here. We're blocking at the end. So we can add it and then take that prop and times it by two. We can touch it in every single component down the tree until we actually render it. And yet somehow
[05:32:09] not block anything.
[05:32:11] Until the end
[05:32:13] The other option,
[05:32:14] which was I think really
[05:32:17] Good. I really enjoyed it.
[05:32:20] Sorry, someone showed it in their...
[05:32:23] own framework in Retend.
[05:32:25] Hopefully it's still there.
[05:32:27] is essentially what, I mean, forget about these signals, but essentially,
[05:32:32] driving it with doing.then
[05:32:34] as you pass it through, right? So like there's the plus one, there's the plus two, and then do plus three, and then
[05:32:42] Doing it down there's times 2 times 3 and then putting it through here and then they have a special type right this could be just promised though.
[05:32:51] But yeah, I mean...
[05:32:52] You could do something similar in Svelte where you could like...
[05:32:55] just keep on vending the promises. You couldn't await them though, because I think the await keyword is special.
[05:33:01] I think this is the biggest challenge here of overloading the await keyword is it, it means always the same as use.  Like it means like it's part of the framework.  It's not like you can't just.
[05:33:12] use it maybe if you wrap it in a function
[05:33:14] I wonder if you could just like wrap in a function, make an async function, then you could get away from that.
[05:33:19] Fine, using dot then isn't that bad either.
[05:33:22] But then, yeah, if you need to compose anything, you'd have to like promise chain it.
[05:33:28] I don't know if we're rewriting the playground from scratch.  I think we're just updating it.  I think we...
[05:33:39] were CodeMirror at one point, but we had issues with it. I can't remember why
[05:33:46] I think the guys work on it more, but I'm pretty sure we were Codemir originally, and then we switched to Monaco, probably for some reason for control. I don't know if I have much to say about this beyond what I said last stream, honestly. This doesn't surprise me, it just comes with the territory.
[05:34:03] We can.
[05:34:05] I
[05:34:06] Like,
[05:34:07] I...
[05:34:08] I guess it's more ammunition if we needed to care about the, uh, like the DX here. But for me, this is just so obvious that it
[05:34:16] I think we talked about this, like,
[05:34:18] Nothing touches the DX that we're doing for async and the guarantees.  Like we've really hit a home run here.
[05:34:24] um
[05:34:25] Thank you.
[05:34:25] It's fine.
[05:34:27] Um...
[05:34:30] Thank you.
[05:34:33] Thank you.
[05:34:34] All right.
[05:34:37] Let's move on.
[05:34:39] Let's talk about...
[05:34:41] server components for
[05:34:44] CanStack.
[05:34:49] What did I say here?  In my early designs, I noted I wasn't sure this is where  it ultimately needed to land, but given the state of things,  and the competition is not gonna punish it at all,  it's a huge capability upgrade that will put RCs  in the hands of those who can before.  Yeah, okay.  So basically, Tanner announced React Server components  for TanStack.
[05:35:05] And
[05:35:06] While I'd say the response is overwhelmingly positive,
[05:35:09] there was still a substantial portion of negative views where they're like,  these aren't the react server components we were hoping for, you know?
[05:35:18] And a lot of this derives from, they were like, people wanted like next JS structure.  They're like, I think there was actually a conversation I was having here where someone was like,
[05:35:27] This is barely RSC, and when I see I was implemented, I was very disappointed.  Calling RSC without having any of the conveniences misleading, maybe.  Okay.  When I hear RSC, I think implementation that is explicitly mentioned on the official React docs.  I'm not even saying it's necessarily bad.  It's just not what I expected when hearing RSC.  That being said, I think this is less convenient and more borderline.  Which is true.  It does have more borderline.  We also have a ton of code using Next.js style RSCs that we can't trivially port.  We need to retrain our devs.  I was really hoping for something that lets me port TAN stack because I'm not really happy with Next.js.  But I also think these perimeters look cool.
[05:35:57] They should be a built bundler integration that does something similar to Next.js that can vary the primitives.
[05:36:04] And I was like, well, they still support you as client. You can do that.  That's the thing. I'm not happy. And I'm like, if you're happy next,  you probably know reason to move.  I know I wasn't happy with that pattern when we're consolid. I ended up here.  The thing I'm not,
[05:36:15] happy with Next.js, but entirely different reasons.  I'm pretty happy with the React team came up with in regards of RSCs, and I'd love to see that in RSCs and Tanstack.
[05:36:24] Again, based on the official docs, this is what I assume RCs entail anyways.  Okay.  So this is where the thing, people who are used to RCs next are kind of very disappointed.  And I...
[05:36:36] I
[05:36:37] Wasn't expecting these people to come out of the woodwork, which is interesting.  This is more of a testimony on where Nex sits than anything, because I thought people...
[05:36:46] Benefit of the doubt.
[05:36:48] Next has a pattern.
[05:36:49] Next is a popular framework.
[05:36:51] People are probably happy with next to that.  It's completely okay for Tanstack not to be next.  Do you know what I mean?
[05:36:58] If you like what Next does, use Next.
[05:37:01] But there's a group of people that would, I guess, do almost anything to...
[05:37:05] get off of Next and they're really hoping that someone would just rebuild NotNext.
[05:37:10] And I guess like Cloudflare is vNext or vNext or whatever is an example of that.  But people want an actual...
[05:37:17] maintain project, not someone's experiment.
[05:37:21] And
[05:37:23] So they're hoping TAN stack would be that thing, but
[05:37:25] TanStack has its own identity.
[05:37:27] So...
[05:37:28] I can see that.  I wasn't expecting to see as much of this  because it's kind of like
[05:37:35] Yeah, as I said, I think this has more to do with Next than it does with Tanstack.
[05:37:39] Bye.
[05:37:40] Thank you.
[05:37:42] Sounds like he's actually looking for Waku. Yeah, possibly.
[05:37:48] Thank you.
[05:37:49] But yeah, I mean...
[05:37:52] *sigh*
[05:37:53] The design here is not surprising to me, but it's probably surprising to people outside of our ecosystem because
[05:38:00] This is the design that we came up on stream the last couple of years, essentially. It's tailored for React here, but this should look familiar if you've watched my streams the last couple of years.
[05:38:15] Um,
[05:38:16] So let's see, status quo, most people think RSC is the server first way, the server owns  a tree, use client marks, interact parts, blah, blah, blah.
[05:38:29] work field builds from the start, but it also turns RCs from a useful primitive thing your whole app has to orbit. That's a fair way to put it. The framework ends up owning how RCs are created, where they render, how interactive boundaries are defined, how UI gets composed when data or users change.
[05:38:42] the part we keep getting hung up on. We do not think you should have to buy in the whole model  up front just to get the value of RSCs. Okay.
[05:38:50] What if you could use RSCs as granular as you could fetch JSON?  In fact, what if the client decide how server rendered UI gets fetched, cached and composed?  He says the client, but he means the isomorphic code base.
[05:39:00] He means the code that is outside of the server functions, which if you think about it, runs in the client and on the server during our SSR.
[05:39:12] It's...
[05:39:13] It's not surprising because you came up with it. Yeah, okay. In Tanstextart, the core idea is that RSCs are just streams of data that you can fetch, cache, and render on your terms anytime the client inside the server owns a component tree.
[05:39:26] That one shift makes them far more composable without changing anything fun to how they work.  With Tantac start, RSCs are just React flight streams.  That sounds too obvious to say out loud, but that's exactly the point.  We do not want to wrap a black box convention, blah, blah, blah.  To be fair, the convention is important structurally of server first.  The same reason islands are great or web components, well, aren't great,  but why web components are designed the way they are with the Shadow DOM.
[05:39:56] You have two systems that basically are meant to stay isolated.
[05:40:01] and you have one connecting tree.
[05:40:03] The problems I...
[05:40:05] explained are all structurally based, and that's why the solutions for them are very similar.
[05:40:10] And in so
[05:40:12] islands, next server components, web components, all have this kind of
[05:40:18] Uh,
[05:40:19] almost coloration rule where you can import from one but not the other.
[05:40:24] um,
[05:40:25] like server components say that you can import client components into server components but you can't
[05:40:31] import server components into client components.
[05:40:34] Um,
[05:40:36] So that's kind of the structural rule around it. And it's for good reason, because it lets them keep the server tree as one consolidated tree means you never go back and forth to serve. There's no possible waterfalls. It's basically encoded into the system. And the client kind of just sits in these little pockets.
[05:40:55] This is very powerful because you know what...
[05:40:59] Nothing on the server has to go back through the client to get to the server again.
[05:41:04] Like what's what happens on the server stays on the server.
[05:41:09] Sorry.  I just made me think of how much that's like the Vegas thing.
[05:41:12] Thank you.
[05:41:14] Oh
[05:41:16] Like almost memeable.
[05:41:19] Thank you.
[05:41:19] But...
[05:41:20] Thank you.
[05:41:21] This does break a partisan point.
[05:41:25] Because otherwise we wouldn't be having those security concerns that we were having.  I'll get to it in a minute.
[05:41:31] But let's continue here. What does this mean in practice? You can create and return them from anywhere. You can decode them, cache them however you want. What does this look like?
[05:41:42] Sure, create server handler...
[05:41:46] So this is how they use server function and the returns in RSC and they just call rendered a stream. Okay. Seems straightforward. And then
[05:41:55] You can also, and then you can read them inside query using create readable stream.
[05:42:00] Um...
[05:42:02] I think get them out and then
[05:42:05] render them as like query.data.
[05:42:13] Although, I think the thing is you actually, what if you need to pass props to them? This is passing arguments, so what if you need slots? I guess we'll get to that in a second. Caching.
[05:42:25] Yeah, because it's just a query, it's caching. See, the funny thing that I think that was kind of discounted is, well, I think the structural part of normal RSCs is really important for serialization, like, even though React doesn't really leverage it.
[05:42:38] Like,
[05:42:39] Bye.
[05:42:39] And it's hard because of async.  But generally speaking, if you know that the tree is always on the server and that the only way that stuff gets to the client is through those client components serialization, everything that doesn't get serialized as props into client components can literally just never get sent to the client.  And it's a little bit harder when you're driving all the fetching from the client.
[05:43:00] because now your context,  you're like long living things  that are living in the client,  which in reality,  some of that stuff's going to be there anyways.  It means you're less likely  to be able to drop the serialization  or the double data problem structurally,  which is why the original form  is kind of useful.  But it is...
[05:43:17] worth pointing out that react ends up double serializing everything because they end up  serializing the GSX of the server components as well. So you're like, you have this, you  still end up double data encoding. Cause you have it in the props and it's the GSX. So it's like, um,
[05:43:33] and
[05:43:34] they're not really winning the way like say islands and astro are
[05:43:39] So I understand.  This is why I kind of like was like,
[05:43:41] Thank you.
[05:43:42] like kind of backed away because I was like, I'm probably fine just not using server components because I'm like not getting that win anyways.
[05:43:48] Um,
[05:43:49] But what is cool?
[05:43:51] here is that you can just give it a key. This is using query, right?
[05:43:55] .
[05:43:55] Caching.
[05:43:58] The challenge with RSCs traditionally is when it's one free...
[05:44:03] Every time you re-render, you're re-rendering this one tree, which means that if you fetch from five different data sets, now suddenly you have to manage on the server.
[05:44:12] Now,
[05:44:13] a cache because you don't want to like refetch all the data every time you do everything.  Whereas when you have more granular chunks of server functions, your data might be less  likely.  Like you can basically go, I need this piece.
[05:44:25] versus that piece. And the server might not even need the cache because it's like just like the same way like
[05:44:31] You might cash it.
[05:44:33] to the client so you don't fetch something you already have, if you treat it like data. But you might not like,
[05:44:38] need a server-side cache to accomplish this granularity.  Like the problem is when you go and you say, hey, I updated something in next,  it's like re-render the whole page.
[05:44:48] This is why caching has been so hard in Next.js over the years, and they've had to come up with stuff, right? When RCs become just data, the cache network gets a lot simpler because they're just granular streams delivered plainly over HTTP, handled transparently, right?
[05:45:00] A bunch of people, I saw them, some people responded like, how does this work with React Cache and blah, blah, blah, and all this?  And it's like, once you start building with this structure, I suspect you're not going to need the same tools because you already...
[05:45:12] the whole
[05:45:13] Caching your waterfall concerns are already structurally handled by you using these client-side tools.  We've been dealing with waterfalls and basically caches in the browser forever.  It's just structurally the way you build your apps these days.  That's why we have route-level hoisting and stuff.  I'm not saying these are the best DX patterns.  I'm just saying we literally build to account for waterfalls.
[05:45:35] So like, because these patterns are in place,
[05:45:39] Even though the mechanism itself doesn't prevent waterfalls,
[05:45:43] The way you use it will generally not waterfall, right?  This is a very different take than when Next came out and they're like, huh...
[05:45:51] No more client waterfalls, only server waterfalls. Yes. And they made it sound like
[05:45:56] Not all waterfalls are bad.
[05:45:58] You know, like they made it sound like server waterfalls were like a good thing.  No, they're not.  But like it was almost like that kind of spin.
[05:46:06] This system...
[05:46:08] If you keep the client patterns, which would waterfall, because it's isomorphic on the
[05:46:12] If you solve the waterfalls on the client, you're also solving the waterfalls on the server.  So hence no waterfalls.  So structurally...
[05:46:20] even though it's not the most ergonomic or automatic, you've actually
[05:46:24] solved for that problem.
[05:46:26] And caching is a very similar concern because structurally you're only invalidating what you need to invalidate.
[05:46:31] Well guess what, you probably don't need additional server-side caches.
[05:46:37] .
[05:46:40] Thank you.
[05:46:41] I mean, yeah, it's not for stuff that changes often. It's not a strong point. It's actually best suited usually, like that architecture when you have things like islands.
[05:46:51] when you want to do e-commerce, not for things that are updating rapidly.  Of course, you can just put client components on it,  but at a certain point, your client components grow,  and the mutation story is still awkward unless you add,  let's say, client components have their own APIs,
[05:47:06] If you have to run the data through the certain components, it's like
[05:47:08] full page again. So like you end up with like two different apps, two different  architectures sitting next to each other, like you do with islands.
[05:47:15] It doesn't feel as unified.
[05:47:17] This however, does more. Query fine-grained control. Yeah, so he's showing
[05:47:24] He's showing different payloads here, right? Get greeting.
[05:47:28] server function,
[05:47:30] So he's rendering one thing.
[05:47:32] And then getting the query.
[05:47:34] Automatic route-based caching, that's fine. CDN caching to get, of course you can do that.  Security one day data flow. Okay, well it's because because this mechanism is using query,
[05:47:44] He's not using flight protocol back. He's using server functions, not server actions. So they're not using the official react mechanism.
[05:47:52] which kind of gets back to, I said earlier, the benefit of,
[05:47:58] of
[05:47:59] server components in the next sense is that the server becomes one tree and the client is interlaced. So you never do this, but
[05:48:07] UseServer added this new complexity because you can render a server
[05:48:13] action or like a use server inside a server component.
[05:48:16] Which meant that...
[05:48:20] you have server talking to server.
[05:48:22] But
[05:48:23] These are in two different requests. So how does a server talk to a server over two different requests?
[05:48:30] Thank you.
[05:48:30] Thank you.
[05:48:33] Thank you.
[05:48:35] Thank you.
[05:48:36] Thank you.
[05:48:38] I'm going to put this blog post in here so people can read it if they want to follow along.  Well, guess what? Go see the client.
[05:48:44] This has been basically the security hole.  It was first, like, originally it was about, like,  them not encoding or hiding stuff in forms and all this.  But generally...
[05:48:55] If you're going from one server request to a next server request,
[05:48:59] and you're handling this via closures and stuff, your stuff is going through the client in the middle.  Even though it looks like you're looking at server code, you're like, I have a server component  with a server action calling something on the server. The bridge between that is a hidden client-side bridge.
[05:49:15] Thank you.
[05:49:17] Thank you.
[05:49:18] Thank you.
[05:49:18] So like, by treating this as just a data format, they're not completely
[05:49:28] Cleaning the loop.
[05:49:30] And especially if like, don't get me wrong, everyone's scared to use server or like server function. It's all about the syntax.
[05:49:37] Right.
[05:49:37] It's not about, he's talking about like, it's not about the syntax.  The, the, the fear here is that.
[05:49:44] like...
[05:49:45] classically,
[05:49:47] People don't like, like, React actually almost pushed it this way. They didn't want you to use used server originally inside client components.
[05:49:53] Because think about bundling
[05:49:55] can leak.
[05:49:56] What if you accidentally include something...
[05:50:00] from the server in the client side bundle.
[05:50:03] Because it's in the same file and you use it inside the user, but maybe you don't use inside your component and somehow it just ends up in the same file because it doesn't split properly.
[05:50:11] This is scary.
[05:50:12] Now,
[05:50:14] The thing is,
[05:50:17] If that fails, you know it at compile time.
[05:50:20] There's no hidden runtime behavior behind that. It's like it's bundled wrong. So that's why you can do stuff like import server only or things that throw when it's not on the server. That pushes it to runtime. But theoretically speaking, this is something that you can tell from bundling. You know this when you build your package. This is not a runtime behavior.
[05:50:40] It's so in a way, it's way safer than a scenario where you're implicitly have this behavior because you're communicating server to server through the client in a hidden way.
[05:50:52] So, um,
[05:50:54] Yeah, it's not about the syntax. It's about the fact that
[05:50:58] Um,
[05:51:00] the way they encode that communication. So if you had a server function,
[05:51:07] And
[05:51:08] And this is the thing here. It's not about userver. It's that
[05:51:12] If you're in here,
[05:51:15] rendering a server component wherever it is.
[05:51:18] And that server component,
[05:51:21] Thank you.
[05:51:22] calls a server function,
[05:51:24] Like your server component's not going to have an event handler to call the server function.  Do you know what I mean?  Like...
[05:51:31] It can call server function while it's on the server, that's not going to the client.
[05:51:36] it's the thought that you can make a server component
[05:51:41] have a client-side event on it that then calls back to the server that closes over.  That's the problem.  And because structurally you're using basically like...
[05:51:50] react query or whatever, like you're using these client side primitive tools to do it. You don't end up here.
[05:51:57] It's not about used server, it's literally just the structure doesn't lend to it.
[05:52:03] Thank you.
[05:52:08] Yeah, I mean component to action, yeah.
[05:52:14] That's not the way people talk about it as much because they talk about the full flight format. But if you think about it, it's actually a structural concern.
[05:52:21] No server components at all, client first.  Hybrid server components are static shells,  mostly static, fully static.  One framework, one manager model, what we saw on tannis.com,  blog, page drop, yeah.
[05:52:32] No kidding.
[05:52:35] Thank you.
[05:52:37] Lighthouse score went up significantly.  Page load went up significantly.
[05:52:41] Transfer size dropped significantly.  So there's benefits to doing this.
[05:52:46] RSC is a great one when the content is, is when the page is content heavy or dependency heavy.
[05:52:52] docs, blog, blah, blah, blah, but it's less obviously useful when the page is already mostly client state.
[05:52:55] dashboard, blah, blah, blah. So we think they matter, blah, blah, blah. Introducing composite components. Okay, now we're getting
[05:53:01] here, because this is the thing.
[05:53:04] Thank you.
[05:53:06] Thank you.
[05:53:08] So how are they doing then? Handler await, create composite component source,
[05:53:14] So this one now has props and they return the source
[05:53:18] And then...
[05:53:22] Oh, and then they passed it in into a composite component.
[05:53:28] Oh, that's an interesting API.
[05:53:31] I need to think about this
[05:53:34] And it's experimental. Okay, cool.
[05:53:37] this kind of next app drive, blah, blah, blah. Okay. So that's, that's the gist of it. Um, for people who don't get it, like,
[05:53:43] The idea here is
[05:53:45] The arguments, like the post ID, the things that trigger re-render, this is an important split, by the way. The things that actually trigger refetching only happen in the query level.
[05:53:56] these slots
[05:53:58] Like these props on the component don't trigger
[05:54:02] re-render which is important because when you when you try and just like stick server components in  the clients any
[05:54:07] like prop change or something could cause it to re-render.  And then you're like, well, what the hell?  Why are you just going to the server causing waterfalls?  This separation kind of protects you a bit  because you're basically saying like, look,
[05:54:18] I'm only going to the server to update if
[05:54:23] if like post ID changes.
[05:54:26] Changing the props, things that are client-side rendered, even this, you might be like, "How are you doing a render function on the server?"
[05:54:32] I explained this in a previous post, how to do this.  But all of these prop level type changes
[05:54:40] aren't going to, uh,
[05:54:43] Impact you.
[05:54:44] because
[05:54:46] you can change this and these are slots so the client can keep on updating without going back to the server. This is the key insight that we had a couple, maybe about six months ago, and that changes the equation considerably.
[05:55:00] because component re-renders
[05:55:02] do not
[05:55:03] cause you to go back to the server.
[05:55:06] It's only if you like your data or your changes.
[05:55:12] So what does this have to do?
[05:55:15] With anything?
[05:55:17] I don't know. This is pretty cool.
[05:55:19] to see this implemented. I said I wasn't sure if this is where
[05:55:22] we should land initially. And what I meant by that is, um,
[05:55:27] Thank you.
[05:55:28] I just need to get back to my profile. What I meant by that is that
[05:55:35] Okay.
[05:55:37] Thank you.
[05:55:38] We've been following this, but I have basically four HackMDs, which charted my...
[05:55:45] My...
[05:55:46] kind of
[05:55:48] journey towards the current solution.
[05:55:51] Right.
[05:55:52] It started with this one back here where I was talking about the problem with data fetching patterns, right?
[05:55:58] This is an old thing, but basically the idea was when you have mutations, it changes that loop. It's a full circle. It's not just like a get. And once you have that full circle,
[05:56:12] I...
[05:56:13] It changes things. So like classically you do, you do a simple fetch call and do a direct mutation, right? So you just be like, it's single flight. You just like send the data in, do some change, get the patch back, you know, so like say updated to do get the to do back with the updated info.
[05:56:28] Caching is optional, mutations are arbitrary,
[05:56:33] But the cons is every single place that you used to do, you're going to have to manually update.
[05:56:37] Um,
[05:56:38] Difficult to apply changes.  Yeah, sorry.  Always requires manual mutation to apply changes.  Alt data is required to be in the browser.  Blah, blah, blah.
[05:56:46] Then there's like tan stack query, which improves on this because
[05:56:50] Now you can automate stuff, but the problem is that it's usually double flight.
[05:56:57] Like you do the...
[05:56:58] Post.
[05:56:59] and then you do the get.
[05:57:01] And
[05:57:02] It's also
[05:57:04] you know, again, data in the browser. So this is not a bad solution.  It's just the multiflightness is kind of awkward.
[05:57:10] Right. Then we got like remix, which is also generally multiflight, isn't as granular.
[05:57:17] Uh, but on the positive,
[05:57:20] is automatic compared to the first one. So in a sense,
[05:57:23] I put them in a weird order because this one's almost a better version than the remix version.
[05:57:28] But...
[05:57:29] It's important because when we get to server components,
[05:57:33] it's like taking the remix version a little bit further where it was like,
[05:57:39] by making it single flight, essentially.
[05:57:42] by using server components like NextStyle.
[05:57:45] but loss of granularity, generally full page, cash credit service, which is safe work.
[05:57:50] So what I ended up coming up with was what we have in Solid Start today, which if you notice has...
[05:57:56] Only one con. It's the only thing in this whole list. This is two cons. This is three cons. This is two cons. This is
[05:58:02] three cons. I realized if we combined a couple of these approaches, we can make it single flight  by using the router. And then basically all the, the only con is that
[05:58:11] the
[05:58:12] all the data code is required in the browser.
[05:58:14] Right.
[05:58:15] But that's, but outside of that, it solves every other problem.  And that's what Sol started today. That's.
[05:58:21] what Tanstack was doing, that's FeltKit, this basically defined the single flight  mutation router where mutation approach kind of came up with this, right?
[05:58:30] But it would actually show that this was actually acceptable in a lot of cases compared to RSCs. It actually had less cons.
[05:58:37] Even though like
[05:58:38] You know, like it was for things that were...
[05:58:40] highly interactive, it's made a lot of sense.
[05:58:43] But then
[05:58:45] you know, I started thinking more and I was like, "Circlements actually composable?" We covered this on stream before, but essentially
[05:58:52] Not really.
[05:58:53] So I use this against myself that we didn't need server components.
[05:58:57] But then we start switching around here because...
[05:59:02] Tanner is like,
[05:59:03] I don't want to use use client.  I want to use server components.  So this was the start sketch of,  of basically making a server function called return,
[05:59:12] uh, server components
[05:59:15] This is describing how we would do render props
[05:59:20] essentially, and slotting.
[05:59:24] And then, but how do you solve double data? So like, I,
[05:59:28] I basically was like, I don't know if this is good.
[05:59:31] And this finally manifested when we got to isomorphic first,
[05:59:36] which is
[05:59:38] where we kind of got that split where we have create server component or whatever with the props ID, which is the fetch. And then we slot through the.
[05:59:47] the other stuff by putting it on here
[05:59:50] But...
[05:59:52] Thank you.
[05:59:53] This is kind of all the preface to understanding the design of this thing.
[05:59:57] Um,
[05:59:58] It's interesting to see the
[06:00:00] journey actually materialize.  I think it's really cool what they've done here.
[06:00:05] The only thing that I think I want to leave on this note here is I thought
[06:00:09] I was thinking it might be cool
[06:00:13] And I don't know, I don't know, it's funny, we couldn't do this in solid, I don't think, but I think it'd be possible in React is, what if,
[06:00:19] What if service component would look like this?
[06:00:23] server component, whatever it is.
[06:00:27] And this might seem kind of crazy, but this is where you put the stuff you need to
[06:00:32] This is where you put the stuff that causes it
[06:00:35] So let's call it git.
[06:00:37] user...
[06:00:39] user leg book.
[06:00:40] component I love. I think
[06:00:45] Just something I kind of...
[06:00:47] Thought.
[06:00:48] Because functions don't have a meaning,
[06:00:52] Um.
[06:00:55] In.
[06:00:56] in our encoding format here.
[06:01:02] Thank you.
[06:01:08] I was thinking, what if...
[06:01:13] Same solution as Tanstack, but what if
[06:01:16] And then you do something like...
[06:01:19] and just
[06:01:20] Children.
[06:01:22] uh
[06:01:23] TSX element.
[06:01:26] Whatever.
[06:01:28] Um.
[06:01:31] You're going to make me do it.
[06:01:33] I'm just trying to get TypeScript off the yellow. JSX.
[06:01:37] from
[06:01:39] SolidJS or something.  Sweet.  It types.  What if you could do this?
[06:01:47] Thank you.
[06:01:48] Get user component.
[06:01:50] What is the type of this?
[06:01:54] const
[06:02:01] What's the type of user?
[06:02:03] Oh sorry, I forgot to put it. ID3.
[06:02:08] Thank you.
[06:02:09] Or sorry, actually, this one would be just three, get user component three.
[06:02:14] What's the type of this?
[06:02:17] Thank you.
[06:02:19] Actually, what if we could do this?
[06:02:26] Thank you.
[06:02:27] It's just something funny that I was thinking about. The type of the components would actually be
[06:02:34] proper.
[06:02:35] It's user of props children JSX, JSX element.
[06:02:41] I
[06:02:43] I know this is just like a funny aside. I was just thinking if I was ever to design the solution,
[06:02:49] I would consider this.  The tricky part, obviously, is because we'd have to write the...
[06:02:54] wrap this in a memo, we would actually like get a function and calling that as a JSX element doesn't exactly work. Or maybe we need like a special hook, but like for something like react.
[06:03:05] I think API-wise, this actually works.
[06:03:07] Because if you said that encoding, returning a function from a server function was a server component,
[06:03:14] like that was what it is, like you don't really care what this is, then
[06:03:18] from a TypeScript standpoint.
[06:03:19] Awaiting that would give you a server component.
[06:03:25] This is about the most minimal syntactical way I could see it.  And the cool thing is because you on the server,
[06:03:31] control calling this and passing the fake props in and doing all the rendering, like the render to stream essentially and all that, you can basically call this however the hell you want to manage it.
[06:03:43] Like there's no need for the explicit like render to dream or whatever because
[06:03:48] it's just part of the
[06:03:50] The syntax, I don't know, just an aside.
[06:03:52] Is this just weird?
[06:03:56] Thank you.
[06:03:58] I don't know. Just food for thought for people in the future, I guess.
[06:04:04] But maybe if Solid ever supported
[06:04:09] Server components, I can see it looking something like this.
[06:04:12] Um,
[06:04:13] PR problem is we have to always wrap our JSX and functions that inject reactive context.  And this actually gives us the means to do this because technically speaking, we'll both be calling the component on the server.
[06:04:26] Um,
[06:04:28] to inject the proper placeholders. So technically we can, the it's whatever the server function  protocol that can actually provide the wrappers. And then on the client,
[06:04:37] Uh,
[06:04:40] whatever return on the client side wrapper side of it, we could just
[06:04:44] Basically, the whole thing could be handled by the server component encoding.
[06:04:48] and reading.
[06:04:50] So,
[06:04:51] Yeah, I don't know. Interesting.
[06:04:54] Okay, cool.
[06:04:59] I think...
[06:05:01] That's almost it.  Oh, yeah, right.  Last note to end on.
[06:05:10] Okay.
[06:05:11] After the server component thing, negativity came out,
[06:05:16] There's pushback, right? Where was it?
[06:05:21] I think people might not be following the bus react path of this protesting capability.  But and then Ricky was like, hey.
[06:05:27] Why is one path blessed for another?
[06:05:29] You know?
[06:05:30] If you shouldn't do it this way, we wouldn't have demoed it like this originally or allow you to do stuff. I don't know if he was talking about the slotting, but generally he was like,
[06:05:36] I don't see an issue with this.
[06:05:38] So I started quote treating this to like reply to people because he's basically saying,
[06:05:42] It's okay to use server components this way, you know?  But,
[06:05:46] I think this whole discussion around server components and HandStack started up again yet another like, oh, those React developers are just learning what, uh,
[06:05:59] rendering on the server is like.
[06:06:01] which to me is really comical in a sense for react you could say this  about other frameworks perhaps you know like maybe they didn't care but react was
[06:06:10] literally built with server rendering in mind. Ricky mentions that back from like the very first open source commit, they were talking about server rendering APIs. But to understand this, you have to go back farther to fax.js, which is gonna be our last little quick shout out. I know I've shown this out on the stream before, but
[06:06:29] Before Jordan Walk created
[06:06:32] React?
[06:06:33] he created facts. And it's called facts because like, it's a very similar concept because actually, resumability from Quik,
[06:06:42] They describe it as like a fax machine. Like you fax, like you take a snapshot and then you fax at the client and they just have a pickup without like having to re-render everything.
[06:06:52] Um,
[06:06:54] This is the fax.js here means the exact same thing. Their whole idea, his whole idea was coming up with a system
[06:07:02] And this is where react originally was doing like string diffs instead of like, uh,
[06:07:06] like the way the virtual DOM was today. But the original idea here is that you can just render something out on the server and then pick it up and hydrate it in the client.
[06:07:16] That was the gist of it.
[06:07:20] Like, all they need to do is two main topics are statefulness and event handling. These will be covered further down the README. Okay.
[06:07:26] This is 15 years ago. The reason why Factors use a top-level event delegation for event system is so that the interactive portions can work with markup regardless of where the markup was generated. Once you have a component instance generated, the last two parameters of the gen markup method specify whether or not the markup should be generated and returned and whether or not the event system should be used. For server-side rendering on Node.js, just the first parameter true, second to false, changes arbitrarily, blah, blah, blah.
[06:07:50] What I'm getting at is
[06:07:52] They this is
[06:07:54] very early like server SSR hydration story, with the idea that they would use string diffs. Like, this is the, like, it makes you wonder if React came up with the whole virtual DOM re-render method originally actually to solve server-side rendering.
[06:08:12] Out of like...
[06:08:13] Because if you think about it,
[06:08:15] It probably wasn't the logical solution for how to update things on the client.  They just realized that it would actually still work here.
[06:08:21] I wonder if Jordan Walk's original...
[06:08:24] like inspiration was actually for SSR.
[06:08:28] And the whole, like, you can use that snapshot, the diff, just kind of.
[06:08:32] came out of like, oh, we already have this system. It's actually not that bad. It actually  outperforms in a lot of ways. Some of the current systems
[06:08:40] you know,
[06:08:41] out there.
[06:08:42] Um,
[06:08:44] The only other contributor is Jamie Kyle. That's crazy.
[06:08:48] Um,
[06:08:50] Just, just kind of food for thought.
[06:08:52] You know, I think it's just funny because...
[06:08:59] Obviously, there's always pushback on this stuff.  I think someone was like...
[06:09:04] There was a response...
[06:09:06] Yeah, what was it?
[06:09:09] You can just SSR template data point and the tag literals. What have we been doing? I mean,
[06:09:17] If things are that simple, only things are that simple.
[06:09:21] I think...
[06:09:24] I think, I just think it's funny that
[06:09:26] Time has passed so far along this route that we don't even remember where we started from and
[06:09:34] People assume that, like...
[06:09:38] It's almost because they morphed into their own things.  People assume that...
[06:09:41] Um,
[06:09:43] these other considerations weren't taken into consideration.
[06:09:49] It's tricky because when new developers come in, they don't have the same kind of scope or history, but...
[06:09:53] react
[06:09:55] was...
[06:09:56] Very SSR first right from the beginning.
[06:09:59] Some people mentioned that it was not pleasurable using SSR.  I get it.
[06:10:03] But that's what he said. I mean, it did, but the pain to use in practice, sorry, and you're growing a tree is easy, but the server fast, serialized, hydrate, blah, blah, blah.  Was one big proposition next at it, but that took time.  The gap is still being felt today. The fact that we need a meta framework suggests we haven't boiled this down enough.  I think we are very close to getting their hump, but it's been like 15 years.
[06:10:21] Thank you.
[06:10:25] Thank you.
[06:10:28] I'm catching up with chat here.
[06:10:32] fetch and set a memo thing. Why would anyone ever want this? I mean, technically speaking,
[06:10:37] If you're talking about server components,
[06:10:39] There is a world where it can remove double data serialization and it can remove, um,
[06:10:45] and you can ship less code to the client.
[06:10:52] Given all the recent concerns, RSCs took a back seat.
[06:10:56] Yeah, probably no one wanted to talk about it.
[06:11:01] That makes sense.
[06:11:04] You don't need them, no. I mean, but like...
[06:11:08] RSCs are like a boundary consideration, right?
[06:11:11] Basically, if you can reduce the size of the client piece, then you are reducing something.
[06:11:20] RSCs also give you this, you only use what you actually render things. You stop thinking about data to pass around and fetch pizza in your eye. Yeah, exactly. Which is nice. The problem is in practice, this doesn't actually...
[06:11:31] always map out nicely.
[06:11:34] But definitely for like mostly static content.
[06:11:40] Oh, fax machine.
[06:11:44] you
[06:11:54] Ryan to Ryan handoff. Did I miss, did I miss a, a,
[06:11:58] A raid? Oh, that's too bad. I'm literally just finishing up here.
[06:12:03] Um...
[06:12:06] um
[06:12:07] - Sorry, folks.
[06:12:11] I'm just wrapping up. You caught at the very end of the stream.
[06:12:16] Yeah.
[06:12:19] I am done. I have been streaming for six hours, so...
[06:12:25] Sorry, couldn't be more interesting.  Maybe I'll just pass you on to see him griffing.
[06:12:30] So...
[06:12:31] Uh.
[06:12:33] Oh, I love you.
[06:12:35] Yeah.
[06:12:37] Yeah.
[06:12:38] I don't know what he's working on today, but...
[06:12:41] I am literally just finished. We talked about RSCs, we talked about solid 2.0, we talked about a lot of cool stuff.
[06:12:50] Shoot us.
[06:12:51] Yeah.
[06:12:53] I'm mathematically proving guarantees the solid offer. All of them. I don't have time to get into it anymore.
[06:13:00] Oh, well. Okay. You all have a great...
[06:13:04] It'll be another couple weeks till I stream probably one of my last streams.
[06:13:11] before I go on break.
[06:13:14] Um,
[06:13:15] But yeah.
[06:13:18] Otherwise, yeah, I'm going to start the rate up for you all.
[06:13:24] Game gripping seems to be gone.
[06:13:26] And
[06:13:27] I think
[06:13:32] I think I will catch you all on the other side. All right.
[06:13:36] See ya.