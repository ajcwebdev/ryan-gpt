---
title: "jfZdl3QckMM"
slug: "jfZdl3QckMM"
duration: "5:53:49"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/jfZdl3QckMM.m4a"
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
[00:00:00] Thank you.
[00:00:02] Hello everyone and welcome to my stream today. How's everyone doing today?
[00:00:08] Come say hi.
[00:00:11] Bye.
[00:00:12] Yeah.
[00:00:14] Thank you.
[00:00:16] Been a little while.  I think it's been like three weeks since we've done a stream.
[00:00:19] Um,
[00:00:20] Just...
[00:00:21] Doing green smoothie today.
[00:00:24] Sticking it up a little bit.
[00:00:29] I'm excited because we're going to talk about...
[00:00:35] reactivity and signals, which
[00:00:37] To no one's surprise, is one of my favorite
[00:00:40] Topics.
[00:00:42] Thank you.
[00:00:45] Hello.
[00:00:49] Yeah.
[00:00:50] Thank you.
[00:00:51] Thank you.
[00:00:53] Thank you.
[00:00:56] *punch*
[00:00:58] Mm.
[00:01:00] I've been busy.
[00:01:04] Admittedly,
[00:01:24] Sorry, my mic cut out there.  Admittedly, a lot of...
[00:01:30] How should I put it?
[00:01:31] exploration into reactive stuff's been really on my mind. I apologize to all the Solid Start users out there who are probably like, when's the new Nitro release going to get in there, you know?
[00:01:47] Hey, Brandon, how's it going? Um,
[00:01:51] Yeah, nice to see everyone.  Hair check.  I don't know.  My hair is just like sticking up in the back right now.
[00:01:57] Yeah.
[00:02:00] Thank you.
[00:02:01] I've been cooking.  Yeah, that's one way.
[00:02:04] Cool. Yeah.
[00:02:07] I ever heard about signals.
[00:02:12] *sniff*
[00:02:13] I have not, I have to admit.
[00:02:16] This is kind of one of those interesting things.
[00:02:18] Not that interesting, but like I went back
[00:02:22] more to learn about the academic aspects of signals. I was just a, you know, you know, the thing was like you learn the framework and then you learn the fundamentals kind of thing. I was just a knockout user, you know.
[00:02:34] Thank you.
[00:02:35] 14 years ago. I mean, when I started using Knockout,
[00:02:38] Even though I'd been like a web developer for almost, I guess, technically over a decade at that point, I admit I did not know JavaScript very well.
[00:02:47] Um...
[00:02:49] I...
[00:02:52] I mean, to be fair, web development in the late 90s, yeah, I did JavaScript a bit then.  But then, like, through the 2000s, I wasn't writing in JavaScript.  I was writing in C Sharp, you know, .NET kind of stuff.  And Ruby on Rails, a little bit of PHP.  So, like...
[00:03:07] But yeah, I mean, in 2008,
[00:03:09] And JavaScript had already kind of taken off and I,
[00:03:12] I admittedly didn't know very much. I learned it on the go. I learned Knockout.
[00:03:17] Which
[00:03:18] made me very excited and
[00:03:21] most of my,  everything I've learned since has come back,
[00:03:27] After that.
[00:03:32] Okay. Yeah. And then that's been, I used to read stuff by Andre Stoltz, creator cycle JS. And I, the way he described, obviously he was talking a lot about RX style streams, which he said was not like FRP.
[00:03:44] standard FRP, but even what they described as standard FRP didn't really quite fit with  what I was doing with signals.  I think if I read it now, I'd have a much better understanding and much better perspective,  let's say, on...
[00:03:57] Thank you.
[00:03:57] how these pieces fit together and what the similarities are. But I started from a very narrow place, basically, Knockout.js, and then kind of expanded out there. I just had a lot of time. It's been like,
[00:04:09] 14 years since I first used Knockout.js.
[00:04:17] It's like instead of signals you had event emitters and you composed all signals out of Rx operators.
[00:04:22] See, the funny thing is when I look at André's work, he suggested that event streams weren't necessarily
[00:04:29] FRP. Like there was a big
[00:04:31] debate back then  in like the 2016 time period  where everyone was like
[00:04:37] thing that like there's a difference between
[00:04:40] FRP like as like stated in academics and then like what RxJS was doing but I don't even know
[00:04:49] How would 2014 Ryan react to solid?
[00:04:53] I mean...
[00:04:55] 2014's were like 10 years ago?
[00:04:58] He would have been pretty excited, although he would have been like, I'm not sure about this JSX thing.
[00:05:02] I was not a fan of JSX.
[00:05:06] Um...
[00:05:08] So yeah, I think...
[00:05:11] I think 2014 me,
[00:05:13] would have really liked
[00:05:16] Um...
[00:05:18] modern...
[00:05:19] I think like, I think like view plus the composition API, like 2014, we did not like view that was there, but if view looked like it does today, back then, I, I think, um, I'm, I'm going to be a little bit more.
[00:05:34] that's probably where I would have been.  I would have been very excited about...
[00:05:38] Like, Vue 3.
[00:05:39] Um...
[00:05:41] Yeah.
[00:05:48] Did I vote? I am a Canadian living in the US so I did not vote, I can't vote.
[00:05:58] *sniff*
[00:05:59] Timmy and I love Svelte.
[00:06:00] I don't know.
[00:06:05] Like, I...
[00:06:06] I might have liked Svelte 5 a bit, but I think...
[00:06:14] Yeah, I don't know. Given where I was at, I actually think Vue 3 would have been where my head was at.
[00:06:21] Um, it's funny given what I know now. Um,
[00:06:25] Thank you.
[00:06:26] But.
[00:06:27] Yeah, uh...
[00:06:30] *clicks*
[00:06:32] Thank you.
[00:06:33] Thank you.
[00:06:35] Like, I think Svelte 3 and 4 would have turned me off even back then.  Svelte 5 would have been...
[00:06:42] Would have been interesting.  But I mean, it's hard to picture...
[00:06:48] Yeah.
[00:06:49] Yeah, I don't know.
[00:06:53] I used to like Ember a lot. So like the handlebar syntax of Svelte's templating would have been really attractive.
[00:06:59] But
[00:07:01] I'm not sure if I would have liked the ruins.
[00:07:04] or sorry, runes. I can't freaking say that.
[00:07:08] Um...
[00:07:09] So
[00:07:10] Yeah, hard to say. I'm trying to think of 10-year-old me.
[00:07:15] .
[00:07:20] *sad*
[00:07:24] Yeah, I'm sorry. Runes. Runes. Like, that's failed attempt.
[00:07:31] Like was it from Microsoft that had like a,
[00:07:35] Was it?
[00:07:37] Sound machine.  No, I guess that was Zoom.  Room...
[00:07:41] Zune
[00:07:44] Rune? Anyway, I'm not doing this again.
[00:07:50] My friend said, "Rune." My friend Rune says, "My friend Rune
[00:07:56] "Rune said, ruins."
[00:07:59] Ruin Svelte, okay.
[00:08:02] That's a that's like a tongue twister for me. I can read, you know,
[00:08:06] mile a minute on, you know,
[00:08:08] Dr. Seuss, you know, Fox and Sox and...
[00:08:12] Osei can you say, but I can't say that sentence.
[00:08:18] Thank you.
[00:08:21] Zune, yeah, yeah.
[00:08:25] Thank you all. Yeah, okay, okay. Let's see here.
[00:08:30] Yeah, okay, so that is my only browser. Give me a second here. I actually have to like open some stuff here in the background while I actually get set up to share my screen.
[00:08:38] Um...
[00:08:40] So let me see here.
[00:08:43] Box and Socks. Yeah. Great book.
[00:08:47] *sniff*
[00:08:48] Thank you.
[00:08:49] All right.
[00:08:50] But what we're here to talk about today is a lot about signals and the future of signals. And it's kind of funny because...
[00:09:02] Yeah, I don't know. Do I even want to dive into it yet? Just give me like a second because I'm still prepping. What can I talk about while I'm getting stuff ready here?
[00:09:11] Thank you.
[00:09:12] what I've been up to
[00:09:15] I went to nextconf, that was interesting.
[00:09:19] Amen.
[00:09:21] Thank you.
[00:09:22] Thank you.
[00:09:25] I mean, I think the biggest takeaway for me personally from Nexcom is I feel less worried about
[00:09:36] Yeah, I don't know. I feel I feel I used to like get really worked up about whatever react was working on and be like, Oh, no.
[00:09:43] how does this fit into my mental model of the world? And I feel like after leaving NextConf,
[00:09:47] For once, I actually just don't care what React's doing.
[00:09:52] I think the cache API,
[00:09:56] is
[00:09:58] So much better now like like just like
[00:10:02] worlds better. Like
[00:10:05] Whether to use cash or a wrapper, I don't care about that detail too much. There's a reason to use use cash and we talked about it a couple streams ago or like last stream like three weeks ago, but like
[00:10:15] Um,
[00:10:17] *sniff*
[00:10:18] Just...
[00:10:19] Getting into a world where explicit is as ergonomic as all that auto magic is just
[00:10:25] huge, but like
[00:10:28] I don't know. It's just funny. I was watching some of Theo's stream. And I think, let's see, can I get my screen share working here?
[00:10:38] Share screen.  Um...
[00:10:40] entire screen.
[00:10:45] Yeah, here we go. So it still works. And
[00:10:50] And I think he had a
[00:10:52] He had a tweet or something here. Yeah, he put this thing up, you know, and I was looking at this and I was like,
[00:10:59] I was like...
[00:11:04] I get what this is doing, but I wonder if...
[00:11:09] Many people actually get what this is doing. Like,
[00:11:13] It's kind of cool when...
[00:11:16] Um...
[00:11:18] Thank you.
[00:11:19] It's funny when you're when you're writing frameworks, you're always in the the event queue, you're always trying to.
[00:11:26] Um...
[00:11:27] Thank you.
[00:11:28] Thank you.
[00:11:30] do... there's always ways you can like warp JavaScript. This is like one of the reasons I actually love JavaScript is because you can kind of like, you have so much
[00:11:39] so many places to like get into it.
[00:11:42] that you can do some pretty cool stuff.
[00:11:48] Well, I think...
[00:11:53] I think the thing is,
[00:11:56] Not...
[00:11:58] Exactly. I think most people look at this and they're like, "Oh, set a medium." First of all, I got a question for you guys.
[00:12:04] Do you guys know what set immediate is?
[00:12:08] Sorry, this is a little tangent. We'll get into the really cool signal stuff shortly, but I just wanted to talk about this for a minute. The idea here is that they were trying to come up with a way so that...
[00:12:23] They could detect
[00:12:26] on a render pass.
[00:12:27] Um,
[00:12:28] you know, the parts that are static or dynamic, right?
[00:12:33] But
[00:12:36] Yes, it creates a macro task, not a micro task, a macro task, because some of you might be thinking, why didn't.
[00:12:44] You just like...
[00:12:46] Q...
[00:12:47] what was like two micro tasks or to go promise.resolve  or something here.  Why are they using set immediate?  Set immediate is just set timeout.
[00:12:55] It's a fast set timeout. It's a set timeout that goes in the front of the list, but it's not.
[00:13:00] It's not
[00:13:03] Amen.
[00:13:04] Yes, it's faster than setTimeout0. That's essentially what it is. And in the browser or environments that don't have setImmediate, we actually do tricks like this. There's like postMessage on the Windows object, which lets you also do this kind of thing without setImmediate. There's a few hacks, almost
[00:13:23] Most framework authors are actually very familiar with these kind of hacks around scheduling because quite often,
[00:13:32] The problem is, micro task queue is a queue  that just keeps on feeding into itself.  And at a certain point, you have to let it just flush out
[00:13:40] and then get control.
[00:13:42] Um...
[00:13:43] The problem.
[00:13:45] here and the reason that these kind of solutions like as it's a whole category of solutions but
[00:13:50] you know,
[00:13:51] After watching, you know, most a lot of people were looking at this and it's like, I get it.
[00:13:55] They render the sync render.
[00:13:57] And then,
[00:13:58] They
[00:14:00] go and then they call the abort controller
[00:14:04] And then
[00:14:05] you know,
[00:14:06] this, you know, will cancel it out, right?
[00:14:11] before any of the async stuff runs.
[00:14:15] It's... it's... it's...
[00:14:16] not exactly
[00:14:18] True. This
[00:14:19] This sets up
[00:14:21] Um...
[00:14:22] A macro task,
[00:14:24] But the reason...
[00:14:29] Is not because you don't want
[00:14:32] the microtask queue to run. It's not because you're preventing this, it's that
[00:14:37] I mean,
[00:14:39] Check it out.
[00:14:40] Thank you.
[00:14:41] I mean, I'm just trying to think if I should like how much I should show on this, but
[00:14:47] If I wrote a function that's like,
[00:14:49] an async function like this, let's say like,
[00:14:53] Hello.
[00:14:54] All right.
[00:14:56] And I go return five.
[00:15:01] Thank you.
[00:15:01] If I go console.log
[00:15:04] Hello.
[00:15:07] What do I see? I mean, I just spoiled it. It's in the freaking corner.
[00:15:14] Um,
[00:15:16] I see a promise.
[00:15:19] Like...
[00:15:20] And
[00:15:22] As soon as you go into this zone,
[00:15:24] It's a promise. It doesn't matter if you can resolve immediately. It's a promise.
[00:15:29] So you have this interesting thing where...
[00:15:32] With promises.
[00:15:35] They can basically...
[00:15:38] two other promises that can cue other promises, like the whole callback stack.  I don't know if you've ever seen like a promise when you promise then and then you like return a promise.
[00:15:47] Um, you know, like a classic example, this is like when you're doing like fetch.
[00:15:52] So you might do something like
[00:15:55] function, fetch, user, whatever. And then you do a
[00:16:01] You first await
[00:16:03] Um...
[00:16:04] Sorry, I gotta make this async.
[00:16:07] But
[00:16:07] I guess this is more prominent when you weren't using await syntax, but let's say you did like a fetch call of some sort. Right. And then you get the results.
[00:16:16] And then you go like you can just return
[00:16:20] JSON here, even though this technically-- or sorry, res.json.
[00:16:24] Even though this technically...
[00:16:27] is a promise
[00:16:30] Promises chain like that, essentially.  If they see a promise at the return value, they'll automatically...
[00:16:37] You know, the thing listening to fetch user will automatically do that.  You don't have to await this is what I'm getting at.  And it's similar characteristic to this where it's always a promise regardless.  So...
[00:16:52] What this means is
[00:16:54] I
[00:16:56] at least the way I took this code is, they actually want the micro task
[00:17:01] Q.
[00:17:03] To, uh...
[00:17:05] to empty out.
[00:17:07] What they're trying to do is they call the first set immediate so that they're like,  okay, make sure like the current macro task is out of the way.  You know, whatever's currently synchronously going, just let it go.
[00:17:20] Okay, all the micro tasks that are currently queued, whatever is going on, just let it go. Okay.
[00:17:26] and they immediately queue on these two right after each other which means they  should be running in quick succession on macro tests but between these two
[00:17:34] the Microtask queue can still run. They've just said it that these two are right
[00:17:39] next to each other. There's like nothing in between them.
[00:17:42] And this means that
[00:17:44] micro tasks, you know, like
[00:17:46] silly things that can resolve immediately.
[00:17:48] Like an already imported code split that has already been imported or whatever, or like
[00:17:54] a synchronous return value inside an async function can all resolve synchronous, like not synchronously, but before
[00:18:02] these things actually complete out.
[00:18:05] At least that's how I take it. Maybe I'm wrong. Maybe I didn't watch the talk or whatever. I think I actually missed this one. I was outside at the time, but like...
[00:18:15] Mechanically, when I see that, that's what I'm seeing here. This is an example of the kind of
[00:18:21] framework trickery. Sometimes we play around similar with stuff like animation frames to make sure  that we can get enough work in before the paint but sometimes you want something to render after  paint. Well how do you tell something to render after paint right? RequestAnimationFrame is  before paint so you actually need to request an animation frame
[00:18:42] And then, inside it,
[00:18:45] do a set immediate like basically you want the next macro task after
[00:18:51] the animation frame.
[00:18:52] So this is a whole category of scheduling kind of optimizations.  Anyways, um,
[00:19:00] Thank you.
[00:19:01] It's funny because
[00:19:02] While this wasn't a solution I looked at using an abort controller, which is kind of clever here because it'll cancel the stream.
[00:19:09] Our single flight mutations actually have to do the same kind of thing, right?  Because we have to basically, we don't cancel all of them, but we're going to run over a bunch of cache functions and promises that some of them have to respond.  Other ones will recognize as not needing to be refetched and we basically have to cancel out.  It's also similar to a trick that we've been using on client side hydration with create async.
[00:19:33] Because we need to kind of run...
[00:19:34] the function to get the reactive dependencies.
[00:19:37] but we don't actually want to run the promise again on the client we want the the uh
[00:19:45] server serialized data to just show up.  So yeah, it's kind of interesting
[00:19:52] what goes into solving these problems.
[00:19:55] But then you remember the whole reason that you're solving this problem is because the architecture, they're using react server components, something that.
[00:20:02] Honestly, I don't really care about, so actually...
[00:20:04] while very cool, that's actually doesn't actually have anything to do with
[00:20:08] With anything.
[00:20:09] that I'm thinking about these days, but
[00:20:13] Yeah, I know. Long way to get around to that. If you're interested in these kind of mechanics, there's a lot of interesting little tricks you can do in the frameworks around the event queue. Very powerful thing. Everyone should learn more about it.
[00:20:30] This is where I'm supposed to have a link to tell you where to learn about it.  All I know is that a video that I haven't seen, apparently,  that Lydia Hall, formerly from Vercel, created about the...
[00:20:43] So maybe someone could share that in chat. I heard that's a good source.
[00:20:47] Her work generally is very accurate, so probably a good place to look at.
[00:20:53] Thank you.
[00:20:56] .
[00:21:01] Anyways, how's chat doing? Post messages the fastest, yes.
[00:21:07] Yeah, sorry, I'm just catching up on chat. It's been like seven minutes, sorry.
[00:21:11] You guys probably should have interrupted me.
[00:21:15] Can we avoid these set of meetings by calling them BORT before pre-render?
[00:21:21] I don't know the timing of abort.
[00:21:23] Even if Bort queues a micro task, the timing might be wrong.
[00:21:33] Yeah, that's what I meant, probably.
[00:21:37] Might have got her last name wrong, is it Holly?  Holly?
[00:21:39] Okay.
[00:21:40] Anyway.
[00:21:42] Oh, cache API. I've been talking about the use cache API. We actually talked about this on stream.
[00:21:47] last time
[00:21:49] So it's a very clever way of defining any function as cacheable, but the whole trick to it is it's a server function, essentially.  So...
[00:21:57] It becomes its own entry point, closes over the same variables. There's a whole bunch of stuff you can do about it.
[00:22:04] funny kind of things is when you come to the realization, I was like, okay,  maybe I should add use cash to solid or, you know,  should Tanner put it in tan stack? And then you're like,
[00:22:13] Actually, you probably don't actually need, like the reason that API is attractive is because of server components.  If you don't have server components, you don't really care.
[00:22:21] Um,
[00:22:22] So it's kind of
[00:22:24] Yeah, it was kind of interesting to be standing in a space where, you know, rightfully so, a lot of people are really excited about this stuff.  But then on the other hand, you're kind of like...
[00:22:33] It's good to solve the problems you created, right?
[00:22:36] Thank you.
[00:22:37] So,
[00:22:39] Anyway, um...
[00:22:45] Yeah, sorry, that was just a little tangent. We should probably talk about actual stuff.
[00:22:55] Thank you.
[00:22:56] Thank you.
[00:22:57] I mean, I can try and look it up.
[00:23:05] I don't even know. What was it? Task queue...
[00:23:12] Is that right?
[00:23:15] Here we go.
[00:23:16] This is probably the video I'm talking about.
[00:23:20] Ain't seen it.
[00:23:21] It's 12 minutes, so apparently...
[00:23:26] Yeah, here we go. Let's just drop this in.
[00:23:33] Yeah, I mean, this is the one thing.  Board control is really powerful because you can, like,
[00:23:38] do stuff, but if we could cancel promises
[00:23:42] in a generic way. Like there was this interesting discussion we had when designing create resource  because we have an abort control friendly fetch primitive, but I didn't bring it to
[00:23:50] into solid core because I was like I don't actually care like
[00:23:54] Okay, like there's a certain perspective, like once the promise is out there, like it's out there, like we can just ignore what happens when it comes back, like the cancellation, it's too late. You know, by the time we send the cancellation down the wire, the server has already hit the database, you know, like the whole thing is too late.
[00:24:09] But like...
[00:24:11] So I was like, what's the point of a board controller if literally we have race condition protection built into the primitive that calls it?  But like if promises just had the ability to do this.
[00:24:23] natively, it'd be really interesting. On the other hand, would they be a promise? Right? The promise of a promise is that they like always resolve either they like, I mean, to be fair, you could always just not call resolve. But when you design with promise based API, it's that like, they're going to succeed or not succeed. So one of the things is like, by API design, something like a callback,
[00:24:42] Um, isn't like.
[00:24:45] guaranteed to call. It might call multiple times, might call once, might never call. Promises are designed in such a way that there's an expectation that you call resolve or reject. Like,
[00:24:54] Don't get me wrong, some people or some code will not call words over reject, but via API, you are guided to do that. If they were cancelable, I don't know if that
[00:25:03] like changes the expectation. I guess canceled ones reject. So I guess that's fair. Yeah. Yeah.  I wish maybe I wish they were just cancelable.
[00:25:10] That might have been easier.
[00:25:16] Thank you.
[00:25:20] Thank you.
[00:25:23] I can't sleep too hard in breath.
[00:25:28] Once can only start doing side effects, even if you cancel it later.  Yeah.
[00:25:32] Yeah, it's...
[00:25:34] It's...
[00:25:36] I don't know. Some people ask me why...
[00:25:38] I'm so stubborn about suspense being built around promises.  It's just like,  it really aids people's,
[00:25:44] Like...
[00:25:46] This then that.
[00:25:47] you know, so to speak, in terms of thinking in API design standpoint.
[00:25:52] To be fair, solid suspense could run completely off flipping signals. It's basically a counter.
[00:25:58] But...
[00:25:59] I there's something nice about
[00:26:03] It's funny sometimes when you work on APIs, you can't like pinpoint it, but you can kind of like get a feel for like,
[00:26:09] how things guide you in a
[00:26:12] reasonable, responsible way.
[00:26:14] I don't know. That's the best way I can put it. Okay. Um, yeah, so we're talking reactivity again.  I know we talked a bunch about it over the summer, but let's kind of get back up to date or up to speed with what the hell I'm talking about.  Because a couple of weeks ago, I think it was like October 23rd, I released this article. And...
[00:26:39] I don't know.
[00:26:41] This article was relatively well received, but it's such a juxtaposition when I look at the numbers. If I go here in my dashboard,
[00:26:50] And we look at Web Components are not the future, released September 26th.  And we look at the 54,000 viewers and hearts.  And then you see this one here, which has literally...
[00:27:01] 20 times less
[00:27:03] reach or ownership. It's, you know,
[00:27:07] It's a beautiful contrast because I can tell you out of these two articles which one is way more important than the other one.  And it's not the one about web components.
[00:27:16] I can't imagine anything about web components being that important.
[00:27:19] Um,
[00:27:21] So, yeah, I...
[00:27:27] I...
[00:27:28] This article...
[00:27:30] is one that I'm
[00:27:32] very proud of and the work that we've been doing to get here is really important. I feel maybe some  of the most important work that I've done in the last three or four years, but
[00:27:43] Um,
[00:27:44] I don't think anyone's going to really recognize that until, you know,
[00:27:48] So
[00:27:49] Bye.
[00:27:50] It's going to be a while, I imagine.
[00:27:54] But I want to talk about it today. Anyway, not just the article. I've actually been...
[00:27:58] plowing ahead in this direction because
[00:28:04] Thank you.
[00:28:09] Thank you.
[00:28:11] you
[00:28:12] It's a different audience.
[00:28:18] People care about the web component topic because it was like, it pressed a hot button, so to speak.
[00:28:25] This...
[00:28:26] work, this whole article series.
[00:28:29] is
[00:28:33] the culmination of work that we've been doing around the solid community for almost a decade
[00:28:41] Um,
[00:28:42] Thank you.
[00:28:43] And
[00:28:45] You know, it's just it's it's one of those things like even like solid itself.
[00:28:53] I suspect that things will get more popular when other people adopt it rather than just on the sheer power of what we do ourselves.
[00:29:01] Not clickbaity enough yet.
[00:29:03] What are mutable singles? Yeah, exactly. What am I talking about? Right? I'm gonna drop this article down here just in case anyone hasn't read it as of yet. But...
[00:29:12] you know actually you know what maybe i should tell twitter that we're live
[00:29:15] Actually, no, I'm streaming live on Twitter, so they should know.  Yeah.  This makes my life so much easier.
[00:29:22] Thank you.
[00:29:23] Anyway.
[00:29:24] I should actually get Twitch going in the background too. Give me two seconds.
[00:29:28] Because...
[00:29:29] Twitch is where...
[00:29:33] Alright.
[00:29:36] Give me two seconds here.
[00:29:40] Yeah.
[00:29:41] Thank you.
[00:29:42] This is a good time also to remind people to...
[00:29:45] like and subscribe and
[00:29:48] comment and the whole thing as always helps
[00:29:52] A lot.
[00:29:53] get more viewership, especially on important topics like what I want to talk about today, because
[00:29:59] let's face
[00:30:00] That um...
[00:30:02] I don't know how this stuff gets views otherwise.
[00:30:11] Okay, so what are mutable signals?
[00:30:17] I think...
[00:30:19] The first thing, I led with mutable signals  because signals is a term that everyone's kind of
[00:30:25] associating with reactivity, but the reality is
[00:30:28] signals
[00:30:29] are immutable.
[00:30:30] Like at their core, signals are immutable.
[00:30:33] It was really funny because we've had this kind of
[00:30:38] immutable primitive for like over a decade and i remember when the react team came in  and they're all like mutation versus immutable and it's like no no
[00:30:45] A lot of people didn't realize this.  Signals...
[00:30:49] being immutable.
[00:30:50] within their graph, basically follow the same FP principles that React has.
[00:30:56] Right. You could picture a world in which you built React
[00:30:59] using
[00:31:01] signals. You wouldn't do things fine-grained
[00:31:03] But you could picture that
[00:31:05] you know, a react component is a computed or derived
[00:31:09] value. In fact,
[00:31:12] I don't know if anyone's ever done this kind of experiment or play around.  I had an interesting conversation once with...
[00:31:21] with Danny Ramoff kind of related, but it was like,
[00:31:25] If you,
[00:31:27] If you took a component that was
[00:31:30] basically React component.
[00:31:33] And then you put
[00:31:35] Um...
[00:31:36] I don't know if I actually have anything to show here, but like you could picture
[00:31:41] If you want to convert a React component into a solid component,
[00:31:46] Usually all you'd have to do is just return a create memo and put all the content of the react component in it. Like inside the create memo, you can destructure, you can do literally every single reactism, early returns.
[00:31:57] All of that stuff.
[00:31:59] but inside the memo, right? Because
[00:32:02] Um,
[00:32:06] uh,
[00:32:11] uh
[00:32:13] Like,
[00:32:14] Inside here, this expression will always run again.  So like if we had,
[00:32:20] props or something, you know?
[00:32:23] and then we were like, okay, const, like, pretend this is destructuring it in the component. You know, like, you could basically
[00:32:32] Go props and be like,
[00:32:35] I'm just going to make it count here.  And then we're going to have
[00:32:40] return
[00:32:42] The...
[00:32:44] I'm not saying this is an efficient use of solid,
[00:32:47] But...
[00:32:49] Okay.
[00:32:50] Like...
[00:32:52] Render.
[00:32:55] Let's just make a little app here.
[00:32:59] and document.get
[00:33:03] Actually, this is...
[00:33:05] Get element by ID. I'm trying to remember what the ID is on this one. It might be app, it might be root.
[00:33:12] Can I get a new playground? Let's see what this is.
[00:33:16] app okay
[00:33:19] Stop.
[00:33:21] All right. And then...
[00:33:24] Let's... let's uh...
[00:33:27] Let's build something in here for a second just to kind of show what I wanted to show.
[00:33:32] Um,
[00:33:34] Let's go const.
[00:33:37] count
[00:33:40] equals create signal. And sorry if I'm like spending way too much time on something really, really basic.
[00:33:47] But.
[00:33:49] Thank you.
[00:33:50] My point is, um...
[00:33:54] Thank you.
[00:33:54] Comp.
[00:33:58] count
[00:34:01] No.
[00:34:04] Obviously I'm doing this part in solid syntax.
[00:34:08] But in...
[00:34:09] equals,
[00:34:11] button, what is it? On click equals
[00:34:18] We don't need the event.
[00:34:22] I know, I'm going to fix the signal thing in a second.
[00:34:26] There's so much wrong with this, right? Count.
[00:34:31] Set count.
[00:34:35] Click. OK.
[00:34:40] Render.
[00:34:42] I have to actually import something from solid.
[00:34:44] Forward.
[00:34:46] Great.
[00:34:47] Signal create memo.
[00:34:50] from solid
[00:34:53] JS and import.
[00:34:57] Render.
[00:35:00] from
[00:35:04] S.
[00:35:05] Solid JS.
[00:35:07] Slash web, okay.
[00:35:09] Yeah, okay, like this is not good, but my point is like you at a really simplistic level
[00:35:18] Like...
[00:35:20] I mean, we could probably even...
[00:35:23] make this whole thing.  Like if we really...
[00:35:27] dislike calling count as a function. I could put this in a memo and then
[00:35:34] so on.
[00:35:37] But what I'm getting at is like,
[00:35:41] Right, I was going to show you early returns, right?
[00:35:45] Um...
[00:35:46] if
[00:35:47] Count...
[00:35:49] bigger than five
[00:35:52] return
[00:35:54] div
[00:35:55] Thank you.
[00:35:56] Thank you.
[00:35:57] Log, um, large count.
[00:36:01] There we go.
[00:36:04] Like, there we go. Like, conceptually,
[00:36:10] within the scope of reactivity,
[00:36:14] signals are immutable.
[00:36:20] Oh, we can do document body. It's just my understanding is that the playground has a special element for it. And then if you do body, you actually wipe out the playground itself.
[00:36:30] Because it also has other stuff
[00:36:33] in the document. I don't know if it's completely isolated, it might be now.
[00:36:37] *laughs*
[00:36:39] Funny. Yeah, so what I'm getting at is
[00:36:44] Thank you.
[00:36:45] Thank you.
[00:36:45] Thank you.
[00:36:47] It's always possible to rerun things in a coarser manner, right? You can just...
[00:36:56] merge them all together in some kind of expression.
[00:37:00] What does...
[00:37:01] Add to the return.
[00:37:03] Um,
[00:37:04] Thank you.
[00:37:05] I mean, it's just a function that gets the latest value. I mean, technically, if I'm really
[00:37:12] doing it here. We don't even need the create memo. We could probably just
[00:37:16] We can just do this with a function actually.
[00:37:21] You didn't miss anything yet, Dev.  I'm literally just talking that signals are immutable.  I think this is a fact that kind of...
[00:37:29] surprises people, even though like it
[00:37:33] There's a huge similarity
[00:37:35] like when you like look at things from far away or close between the reactive graph and say the  component graph the difference is one generally operates on data and one operates on view i mean  even when you think of server components and the way the react team views their server  components as data essentially like their view data like essentially like
[00:37:57] It...
[00:37:58] it's a part of the graph that returns view, you know, instead of data, right? When we work on solid or
[00:38:07] This is similar with Tanner's mentality. He's dealing with data primarily. Like, that's what he's thinking about. He's like, how can I make my data most efficient and manage that so that my projections of said data are minimal? React is like, don't worry about that separation.
[00:38:22] We're all just going to
[00:38:23] bung it all together anyways. So like, who cares?
[00:38:27] Well, there's reasons to care, but...
[00:38:30] That's what we're going to talk about today, right? Like at a conceptual level,
[00:38:35] you know,
[00:38:37] we've kind of like here's our like simple recreation of react.
[00:38:45] Thank you.
[00:38:46] Thank you.
[00:38:47] All right. So everyone's still with me so far. I don't think this is crazily complicated, to be fair, but I would say that one day.
[00:38:56] Um...
[00:38:58] Right, a lot of research is modeling circuits, real-time systems.
[00:39:03] Yeah, I mean, this article, I talk a bit about how
[00:39:08] When I first saw Svelte 3 and later the React compiler, people challenged that these frameworks are fine-grained in the rendering. And to be honest, they share a lot of the same characteristics. If we were to end the story with signals and derive primitives we've seen so far, you could argue equivalents, except for these systems not allowing the reactive to live outside the UI components, right? The first thing you start seeing is like when you have this control,
[00:39:28] to be able to do this kind of thing,  you have the means of...
[00:39:33] making it portable, right?
[00:39:35] Rich Harris just gave
[00:39:38] a talk at vconf. I think it was something like, was it rich?
[00:39:45] Harris.
[00:39:47] Thank you.
[00:39:47] Be conf.
[00:39:49] Uh...
[00:39:50] So 5 beyond components is what he called it.
[00:39:54] And it's just funny, like once you land here, this is the revelation, right?  Because if I type in world...
[00:40:03] beyond
[00:40:04] components.
[00:40:05] Thank you.
[00:40:06] you're going to see my talks in the last three years.  Like this is...
[00:40:12] Mm-hmm.
[00:40:12] This is basically the whole premise of what we've been doing
[00:40:16] with solid.
[00:40:18] Right?
[00:40:19] Right. So like,
[00:40:21] This is what fine grained gives you, but
[00:40:24] it's more than that it's more than granular updates right uh just on a subsurface because cell 3
[00:40:32] and the React compiler sort of have these granular updates.  It's actually very hard to observe because of the granularity.
[00:40:40] Um,
[00:40:41] the difference
[00:40:42] between something written in solid,
[00:40:46] Or Svelte 3.
[00:40:47] or sorry, written in solid from Svelte 3 or the React compiler.
[00:40:51] Because the only places in the code
[00:40:55] where you have access to write stuff in.
[00:40:58] are essentially the side effects.
[00:41:00] So,
[00:41:01] you can only sneak a console log into a place where the framework does side effects.  And for that reason, it's not observable
[00:41:10] the internals of the framework here, even though
[00:41:13] In reality,
[00:41:15] Svelte 3 and the React compiler do more work.
[00:41:18] So...
[00:41:21] Thank you.
[00:41:23] What is the difference?
[00:41:24] What is the key, key difference?
[00:41:30] Right. I assume that in this code, the div we create every time. Exactly. Right.
[00:41:35] Like,
[00:41:36] The reason we don't do this in solid, right?  This is view actually.  Like if you look at this, this is view.
[00:41:42] view has a JSX form where they return the function like we just this is this is view if I put
[00:41:48] like, right? View is a VDOM library where you put your state up here,
[00:41:54] And then you put your template down here.
[00:41:57] Right.
[00:42:02] Right? Well, that's what I'm getting at. I don't know if it's an interesting question because I worked on advanced compilers when I was working with Marco. And in some ways, it's not as advanced as the React compiler, but in other ways, it's further along this path.
[00:42:19] because it was doing cross-modular analysis  to the point that it understood exactly everything  that was reactive in your whole application  from a graph standpoint and all the dependencies  and was able to...
[00:42:30] Like...
[00:42:32] This is more than...
[00:42:34] what the Svelte compiler does.  And it's doing something similar to React compiler,  but in an actually maybe more informed way.  React has the compilers a lot more complicated,  it's smarter around
[00:42:45] like certain typing type stuff.  Whereas Marco,  the syntax is so explicit.  The job's actually easier  to have greater analysis.  And Marco does not solve the problem  that I'm going to talk about today.  They ended up moving to a runtime level
[00:42:59] compile reactive system on top of their compiler, kind of similar to what Svelte's doing.  Still better informed because of the cross modular stuff, which is a
[00:43:07] place that Svelte could go perhaps in the future if that's like so their intent. But
[00:43:14] I don't think...
[00:43:16] you're going to see a React compiler be able to produce what I'm going to show you today.
[00:43:22] I don't know if it's theoretically possible.  It might be. I don't want to say never say never, but...
[00:43:27] You...
[00:43:28] But yes, sorry, this thing is, this is the problem. Like, I don't want to, right now this is just a div. Picture if this was actually heavy. You don't want to do this work every time. This is why solid, this is why you don't do this in solid.
[00:43:40] Right?
[00:43:42] Thank you.
[00:43:43] Thank you.
[00:43:44] You can write this in solid.
[00:43:46] Um...
[00:43:47] in a in a in a in a different way right you you can you
[00:43:53] You can just write this with like a show component or some other way.  Like the best way to write this is,
[00:43:58] component in solid.
[00:44:00] would be like this return div
[00:44:07] Thank you.
[00:44:08] Props.
[00:44:12] props.count.
[00:44:16] bigger than five
[00:44:20] Thank you.
[00:44:26] Thank you.
[00:44:26] large count
[00:44:32] props.count.
[00:44:34] Something like that. This is the
[00:44:37] the more efficient
[00:44:39] way of writing in solid that's formed the document.  I guess this is still short enough that it fits in a one-liner.
[00:44:45] Thank you.
[00:44:47] But it's funny, this early returns thing is actually going to come up again, maybe later when we talk about Dominic and this week in JavaScript. I don't know if I want to divert there.
[00:44:57] right at this moment, but this was also another topic
[00:45:03] Separation UI and logic used to be a thing. Yeah, it's
[00:45:06] It's a funny thing because
[00:45:10] Eh.
[00:45:11] There is a separation, but there's such a huge overlap
[00:45:15] that
[00:45:16] both extremes are kind of terrible, right?  Like if you try to, if you try to overlap them too much,
[00:45:24] arguably what React does.
[00:45:28] you end up
[00:45:29] Getting...
[00:45:30] sort of trapped
[00:45:32] by that fact a little bit,
[00:45:34] these inefficiencies show up. But if you try and keep them separate, you can be more efficient, but it gets a lot clunkier. There's a lot of duplication. So like,
[00:45:45] The key is recognizing that...
[00:45:49] there is an overlap. And I tend to lean closer towards React because I think that overlap is like the 70 or 80% case.
[00:45:56] But
[00:45:58] you have to leave the door open for the other 20.
[00:46:04] Yeah, yeah, I just don't have a problem, right?
[00:46:08] Um...
[00:46:09] Thank you.
[00:46:10] and disabling change to checking.
[00:46:12] Yeah, it's the thing is,
[00:46:18] That's fine too, but you have to understand when you do this, when you say always notify
[00:46:25] And
[00:46:27] You do stuff. You're telling everyone downstream that it's their responsibility for diffing what actually has changed.
[00:46:33] Right now, like if it's a fundamentally a stream conceptually where every, you
[00:46:39] every single element that comes down  should be seen as a distinct thing,  then yes, that makes a lot of sense.  But if you're just mutating...
[00:46:47] data and you don't want to
[00:46:51] Like...
[00:46:52] You...
[00:46:53] You're basically just pushing the work downstream if this value should be viewed not as a stream, but as an actual value.
[00:47:02] There's a better
[00:47:04] option is what I'm getting at.
[00:47:13] Thank you.
[00:47:17] Yeah. Oh, okay. So you're talking about some kind of rendering consideration. Yeah. Because like what happens here now is this div only renders once now. Before we weren't looking at it, but like...
[00:47:31] Is this even worth looking at? But you all know that if I click this, you're only going to see...
[00:47:37] Like the...
[00:47:39] Even though this flashes, it's not actually re-rendering.  It's literally just this text changing.
[00:47:43] Um...
[00:47:44] Anyway, um...
[00:47:46] Thank you.
[00:47:48] Whereas before you would have seen the whole div like unmount, but that's something else. Let's continue on.
[00:47:55] *sigh*
[00:47:58] Right, so what do I... yeah, this is just showing that fundamental thing, right? If
[00:48:05] If you create an effect,
[00:48:08] you know, based on a signal.
[00:48:10] If you go and update the thing without calling the setter,
[00:48:14] the effect's not gonna trigger.
[00:48:16] because it doesn't listen deeply.
[00:48:19] Whereas if you set it with a new object,
[00:48:23] it will run again, essentially.  This deep mutation is not...
[00:48:28] Like the reactive system, the whole key to reactive system is that it knows
[00:48:32] when you set the value, it looks for the set on the specific property,  the specific function, whatever it is.
[00:48:39] It calls a function in the background, and it reads with a function.
[00:48:42] If...
[00:48:44] you don't intercept the read or the write, it breaks. You have to intercept both sides.
[00:48:55] Thank you.
[00:48:55] Right, so  I'm just kind of talking about the fact  that a reactive graft...
[00:49:03] is essentially...
[00:49:05] this
[00:49:06] kind of immutable
[00:49:08] Um,
[00:49:09] I say stream, but not in the pure sense of the stream, but like stuff
[00:49:13] progress it through, right? In this example, I have a start log, and then I go, you know,  whatever the pre's value, which, you know, let's say it's nothing plus whatever the current log is. So start,
[00:49:23] And then when the effect runs the first time, it's going to log start.  And then when the effect logs, you know, um,
[00:49:29] when we set this one, the previous can get appended.
[00:49:33] you know,
[00:49:34] What I'm trying to show here is that we have the ability
[00:49:39] to do what I call reducing operations.
[00:49:43] within...
[00:49:44] essentially like you can see the same thing
[00:49:47] Uh,
[00:49:49] computed
[00:49:51] is a function of its reactive inputs,  but it's also possible,  depending on the design of the computer,  to also be a function of its previous inputs
[00:49:58] Um, output. So like
[00:50:01] This is very common in
[00:50:06] in immutable setups, because what it lets you do is you can look at the new inputs, you can look
[00:50:13] at the previous value,
[00:50:15] And then you can diff those to kind of decide...
[00:50:20] you know, compare them to kind of decide how to move forward.
[00:50:23] You always have this previous value, which is immutable fixed in time.
[00:50:28] Okay.
[00:50:29] to fall back on.
[00:50:31] Right.
[00:50:34] So yeah, let's look at this example a bit.  I'm going to focus on example here for a second.
[00:50:42] You're still not sure if signals should be reduced. Not possible to miss updates, especially  after getting lazy.
[00:50:49] Well, that's the thing. Signals are fundamentally different than streams.
[00:50:54] because...
[00:50:58] They aren't...
[00:51:00] Thank you.
[00:51:01] like they aren't streams, like, like, because it doesn't matter.  They, their only responsibility is they are a value conceptually.  Like they're like, it doesn't matter the journey.
[00:51:13] they are the value, which makes effects interesting because you have the same question about effects. Should effects see every possible
[00:51:21] Um,
[00:51:22] permutation of the input values that come in, right?
[00:51:26] um,
[00:51:28] It's interesting, right?  Like if you were trying to like log every change to a value, effects actually don't really help you there per se.  If, you know, within a given timeframe, you do multiple updates.  The whole idea of at least with signals is that they are a value conceptually, not a stream.
[00:51:50] And that the goal of effects isn't
[00:51:53] to serve as the log, which is funny because that's the example I used, but as a way of doing external synchronization with the current state.
[00:52:04] It's funny because this ties into another conversation on Twitter. There's some view guy going like, "How do I make an effect not run the first time in Svelte?"
[00:52:13] That's a weird ask.
[00:52:14] funnily enough, but...
[00:52:18] Thank you.
[00:52:21] Yeah, I mean, reducing computations or whatever are similar to the scan operator. You know the old joke where you could write Redux in one line of code?
[00:52:33] using with a folder scan with RxJS, like here's Redux.
[00:52:37] Create memo is also Redux in one line of code.
[00:52:42] Thank you.
[00:52:43] Thank you.
[00:52:44] Thank you.
[00:52:51] - Signals are a value that changes time.  Stream is a time containing different values.  Yeah, exactly.  There's a fundamental difference here.
[00:52:59] It's a huge optimization authentic, right?  Because this is the whole purpose for a signal system.  It's not that you...
[00:53:07] capture every single thing that has changed in the stream. It's so that
[00:53:11] at the
[00:53:11] You can keep stuff at sync at the rate that the consumer can handle it.
[00:53:17] right you have to make sure that if you're updating in third-party system that could  be including the dom something outside of the reactive system
[00:53:24] You want to make sure that any snapshot that is consistent, that's the guarantee.
[00:53:29] that we have.
[00:53:30] We're not guaranteeing that we don't miss...
[00:53:34] any intermediate states.
[00:53:36] We're just guaranteeing that it's consistent.
[00:53:42] Thank you.
[00:53:46] Yes. I mean, as fine-grained as possible.
[00:53:53] Depends, right?
[00:53:55] Like, it depends on what's causing the effect not to run.
[00:54:00] Yay.
[00:54:04] This part isn't so much where my definition of fine-grain falls.  The goal of fine-grain is being able to apply...
[00:54:13] changes
[00:54:14] in a granular fashion, not
[00:54:17] the fact that it's lossy or not, right? Like,
[00:54:21] Bye.
[00:54:22] It's...
[00:54:22] Time is not really...
[00:54:25] something that signals are worried about. They don't
[00:54:28] have a concept of time.  They just are like,
[00:54:32] Am I consistent? It's like it really is like an electric circuit.
[00:54:36] like sort of specific mechanisms like buffers or whatever,  electric circuit only exists in the state that it's observed in, right?  Right.
[00:54:45] Like, you know, when you talk about digital clock cycles and stuff, like the circuit is
[00:54:49] like true physical reality doesn't mirror this,  but all models based on it,  um,
[00:54:57] is that you can only really exist in one state at any given time.
[00:55:02] - Sss.
[00:55:08] Thank you.
[00:55:09] Thank you.
[00:55:12] Yeah, I've pretty good listening, of course, yeah.
[00:55:21] User only cares about the next animation frame.  Yeah, for example, yeah, that's a great example, right?  Our concern is only as far as synchronizing with...
[00:55:30] the system that consumes it.
[00:55:36] Thank you.
[00:55:37] Yeah, RxJS has a lot of things, but like their behavior subjects generally aren't implemented like signals with the same guarantees. They aren't as concerned with this consistency thing. Subjects are like...
[00:55:53] signals in that they are a value. They don't care. I think they're lossy, like they don't care about  the stream as much. But the biggest reason that signal implementations are a thing is  because of the guarantees we have on propagation, because signals are synchronous.
[00:56:09] Going to async is a whole other topic, which we've covered and we might do a little bit today if we have time, but yeah.
[00:56:16] Thank you.
[00:56:17] *sniff*
[00:56:18] If the signal falls in the forest and there's no effect observer, nothing happens. There we go. Thank you, Greg.
[00:56:24] That's...
[00:56:26] Okay, so.
[00:56:30] Okay, let's...
[00:56:32] Let's kind of continue on.  I made an example here.
[00:56:36] Where...
[00:56:38] I...
[00:56:40] wanted to show
[00:56:41] how we break apart from our immutable reality, right?  Because this is immutable, not much different than React.  But what if we put signals and signals
[00:56:50] and effects and effects.
[00:56:53] Right. The idea here is there's a user object. And the funny thing, this is like completely what we used to do in the knockout days, because you get some fresh data from the server, and then you'd like create a signal for each property or something.
[00:57:04] This is before we had proxies and whatever, which we'll get to, but this is the same concept.
[00:57:08] Pretend now instead of just having our singular signal, when we create a user,
[00:57:16] they we actually end up
[00:57:18] creating a signal
[00:57:19] for that user of that user, which
[00:57:22] in turn has a signal for its name. So here what we're doing is we're like creating a signal for user
[00:57:27] Right?
[00:57:28] and we're making a new user object here. And in the process of wrapping it, we're also creating a signal for the name.
[00:57:36] And then we have an effect that listens to the user.
[00:57:39] gets the U out, and then we have a nested effect
[00:57:42] which gets the name out.
[00:57:43] So when this first runs, it'll run console.log user, user ID, and then it'll console.log
[00:57:49] name, user ID, right?
[00:57:51] So user1 named John.
[00:57:53] Now,
[00:57:55] If
[00:57:56] We set a new user.
[00:57:58] kind of like the immutable approach, you know, when you just swap the whole user out, maybe fresh data from the server.  We end up creating a new signal for the name and putting it through.  And you're going to see both things log again. It's going to log user2 and now name Jack, right?  Right.
[00:58:14] because it will trigger rerunning this thing.
[00:58:17] which will console log it and console log this.  But, but, but, if we just go in and...
[00:58:23] change Jack's name to Janet by just setting the name. We only need to rerun the internal effect.
[00:58:30] It's only the nearest effect that runs. So when we swap out user, we swap out this whole block.
[00:58:35] but when we swap out name,
[00:58:37] We only need to run this thing.
[00:58:40] And...
[00:58:41] This is interesting because we found a way of doing less work.
[00:58:48] Right?
[00:58:50] Thank you.
[00:58:52] Yeah, with map array.  I mean, this is the key.  This is basically the whole premise of like,
[00:58:58] fine grained rendering essentially.
[00:59:00] But what I'm getting at here is
[00:59:05] This system is no longer immutable.
[00:59:09] Because we're actually changing the user's name, we're not replacing the whole user.
[00:59:14] Originally we could have just swapped it out, but for this system we're actually now changing the user's name. If we didn't have the means to individually set the name, this internal effect wouldn't do anything. It would always rerun this.
[00:59:30] We can...
[00:59:31] We don't need to go this way.
[00:59:33] we could keep it immutable if we wanted to, right?  By not adding the nested signal.  This is what I was talking about earlier with React,  everything being a memo.  Like picture now if we just created a user,
[00:59:43] and created our effect.
[00:59:45] And now when we set the user,
[00:59:47] and then we update that user's name to Janet, we're swapping the whole thing. All we have to do is get the user
[00:59:52] and diff the values.  And if the values are different...
[00:59:57] or not.
[00:59:58] console had the right thing. So the first time
[01:00:00] we get the new user and we see that hey this user's ID is not the same so we're going to actually console.log
[01:00:05] the user ID, and then we go, "Oh, this name is not the same.
[01:00:09] and we do John. So the first time it runs, it's brand new, so it does both. Then we set user ID 2 named Jack and it does both. And then the last time, the ID hasn't changed between these two, so it doesn't run this and only runs the second one.
[01:00:23] so
[01:00:24] This is React.
[01:00:25] essentially, right? This is immutable change. It has the exact same logs
[01:00:31] as before.
[01:00:33] Right? Except...
[01:00:34] You did it without nesting signals and without nesting effects.
[01:00:40] I'm always worried about memory leaks.
[01:00:43] That was an old problem. It's one that's been solved largely now because there's a reason. First of all,
[01:00:51] Biggest problem with these observer patterns is that they go back and forth, right?  Like even though only one side needs a subscription, we do the other side so that we can do the proper cleanup.  So they subscribe on both sides, which means that if left alone...
[01:01:05] Unless...
[01:01:07] Both are released.
[01:01:09] like lose reference, they will memory leak in theory. But what we have going for us that's beneficial is that
[01:01:17] in modern reactive systems, at least, or it's why solid has that really annoying
[01:01:22] "This is created outside of a root, blah, blah, blah." You know the warning?
[01:01:27] Essentially,
[01:01:29] um
[01:01:30] On the effects side, when we create effect under an effect,
[01:01:34] you kind of know, like, if this, we create this and then we create this one under.  So when this one reruns, that's fine.  But when this one reruns, you're creating a new effect, like you're running all of this code. So
[01:01:45] every time an effect reruns,
[01:01:48] If it had any child effects, we've released them, the same way we've released the dependencies.  So if we release this effect,
[01:01:55] when this effect reruns or when it's released itself.
[01:01:59] Then this...
[01:02:01] This subscription...
[01:02:03] to the signal will be undone, which means that half of the dependency is gone, which means that
[01:02:12] The effect is free to dispose of itself and the signal
[01:02:17] is also free to dispose of itself if it ever loses reference.  So like the memory leak problem actually
[01:02:24] has not like I used to have memory leak problems in Knockout a lot.
[01:02:27] Since moving to solid, like the memory leak thing has just not been a thing.
[01:02:35] Thank you.
[01:02:36] I, Signia either has global
[01:02:39] signals
[01:02:41] mostly when you use it with React or they're tying into React's
[01:02:45] lifecycle, but given that the I'm not actually completely sure, but this was the this was the innovation that surplus
[01:02:52] added to the front end.  This is what made fine grain rendering possible,  like with SJS.
[01:02:58] Otherwise you'd have to depend on the component structures.
[01:03:02] View.
[01:03:03] didn't have this means before, but they've been adding--  I forget what it's called, but they've added something with Vue 3  that has this kind of release.  Svelte is based on this mechanism now, too, with Svelte 5.  But this has been--
[01:03:16] Since SJS back in our surplus, I guess, back in, because SJS was created in 2012.  I think surplus came around 2015 or 16 time period.  This mechanism has been around and we adopted it immediately in solid back in 2017.  Yeah.
[01:03:30] Um,
[01:03:35] Thank you.
[01:03:38] Well, here's the thing. It could be documented, but like, do you...
[01:03:43] I don't know if you really want to do this all the time.  We'll get to this in a minute, but I'll show why.
[01:03:52] it's fine. Like, technically, this is how the rendering works. But like,
[01:03:57] I think you'll find when you do your real life problems, like at a less scale, you're not going to find yourself doing this all too often.  You might, but let's continue on for a little bit.  Okay, so we get...
[01:04:09] This, the biggest difference is
[01:04:11] It's not that expensive, but every time you do this change,
[01:04:14] You have no choice but to run all of this.
[01:04:18] Whereas when you do granular changes like this one here,
[01:04:22] It is only this code that's run.
[01:04:25] Right.
[01:04:25] This always runs everything.
[01:04:29] Given that diffing is fairly performant and that mapping over data especially deeply nested is cumbersome, people generally have opted for the latter. React is basically this, what I just showed. However, diffing only gets more expensive as our data and work related to it increases. Once resigning to diffing, it is unavoidable. We lose information. You can see that in the example. When we set the name to Janet in the first example, we were telling the program to update the name to set Janet. In the second update, we're setting a whole new user and the program needs to figure out what has changed in the first example.
[01:04:54] everywhere the user is concerned consumed like obviously we're only doing the diff here in  the single effect but the point is when you go this way
[01:05:02] when you're setting a whole new value or you say like we mutated name,
[01:05:07] And it's the same value and you turned off the equality check. We're pushing
[01:05:11] the work down the line.
[01:05:14] Okay.
[01:05:16] Right?
[01:05:18] So...
[01:05:20] The whole point is this is why we came up with stores, right? Essentially using proxies. And Vue's reactive is very similar. And Svelte recently has their state object in the ruins actually are also proxy stores.
[01:05:37] We'll talk a bit more
[01:05:39] about
[01:05:40] trade-offs with those designs in a moment. But the idea here is,
[01:05:45] This is the thing that is hard for a compiler or React to do.
[01:05:50] which is essentially this idea that these are nested proxies and that
[01:05:57] Um,
[01:06:01] Thank you.
[01:06:02] we can have our, you know,
[01:06:06] our code here, like our double nested effects. And we still have the means here to either replace the name
[01:06:14] Or, um...
[01:06:16] update or replace the user, let's say,
[01:06:19] or update the name.
[01:06:23] This actually
[01:06:25] isn't
[01:06:28] It's funny. I use this example, but this is not actually how our stores...
[01:06:32] work.
[01:06:34] I guess it's
[01:06:35] It's how our stores work today.
[01:06:39] But this isn't... So this is like a weird...
[01:06:43] I mean, these effects are different too.  This is like a weird pseudo place  between solid 2.0 and solid 1.0.  I'm hoping it's still illustrative,  but my point with this example is that  when you have proxies,  you have the potential to still replace the whole user  and trigger both or just update the one thing.  And instead of,
[01:07:02] Going through...
[01:07:04] All this wrapper extra stuff that we had here like this was the cumbersome part and
[01:07:09] Thank you.
[01:07:10] We essentially get a version that looks almost...
[01:07:14] Like, on the...
[01:07:16] on the creation side,
[01:07:18] It's as simple as like
[01:07:20] the immutable version.
[01:07:22] Which made the creation simple and the update simple, but made the effect complicated, right?
[01:07:29] Thank you.
[01:07:30] Whereas this version...
[01:07:33] The effect is
[01:07:34] easy, but you had all this creation stuff.
[01:07:37] The proxy version actually is the
[01:07:39] the best of both worlds. You have the simple effect
[01:07:42] And you have
[01:07:44] the simple creation.
[01:07:50] What's the pattern with creative fact that there's more than one signal? I'm not quite following the
[01:07:55] the question like
[01:07:57] Um.
[01:07:59] It tracks all of them. But so if you like in these examples, if you had more than one signal here, you would have to
[01:08:06] you know, diff all the differences between all the signals.  And with my nested example,  you'd either have separate effects listening to each signal or parts of  signals or like, or, you know,
[01:08:21] Yeah, it really depends on what we're rendering here.
[01:08:28] I'm not quite sure I understand the question.
[01:08:32] Yes. Yeah. This is an old FPS.
[01:08:37] conversation, right? Like,
[01:08:40] if you know anything about game rendering,  the biggest...
[01:08:45] They traditionally do immutable changes where you re-render the scene.
[01:08:51] And the whole argument there was that FPS is kind of consistent.  You can predict it, right?  Regardless of what work you have to do, the cost is the same.  So regardless of the update, you always get the same cost.
[01:09:05] the same cost. Whereas when you have
[01:09:08] in these granular systems, it can go between the update doing basically zero work to the update doing all the work.
[01:09:15] Um,
[01:09:16] So this was long used in the game industry in terms of justifying the mentality. A lot of moving parts, it's easier just to re-render the graph consistency. There's lots of reasons to kind of take this perspective.
[01:09:30] But on the other hand,
[01:09:33] we know theoretically it's not the most
[01:09:36] efficient way of doing things.
[01:09:43] Well... I think there's still space here, which is why we're talking about today. I... like, if we did it today,
[01:09:52] When you do it like Vue and Svelte, where their signals just become proxies kind of automatically, like if you have a ref in Vue, not an explicitly shallow ref, or you state in Svelte, they automatically become proxies as you get deeply nested data.
[01:10:08] We don't do that in solid.  So there's like interesting...
[01:10:13] repercussions, which I think we should continue looking at.
[01:10:19] Thank you.
[01:10:23] Does the nesting actually do anything? Yes.
[01:10:28] In the create store example,
[01:10:30] It does, because it's the same thing.  Where is it?  Where am I looking at?
[01:10:37] Um...
[01:10:38] Yeah.
[01:10:39] Because on this side, it runs both because let's say we're setting a new object so that in this,
[01:10:46] like I'm kind of leveraging the fact that we're using proxy access.  So user.id here, it's the dot ID that's tracking.
[01:10:53] Technically, so like...
[01:10:56] When it saw the ID change, it re-ran the whole thing.
[01:10:59] But here we're like, yeah, like this example is kind of
[01:11:05] Mmm.
[01:11:06] Yeah, this example is bad, and I'm glad that we're bringing it to
[01:11:11] to attention that it's bad but here by only
[01:11:15] Updating the name.
[01:11:16] like the name.
[01:11:17] You're not hitting this.
[01:11:19] you're hitting only user.name, which means that it's only running the inner effect.
[01:11:30] Thank you.
[01:11:31] Generally speaking, with stores, you either write to it in an event or you write to it in an effect. You don't write to stores in a pure derived way because it breaks the graph. I've covered this before.
[01:11:48] You could.
[01:11:50] Right. In this particular example, you could.
[01:11:55] Thank you.
[01:11:56] the
[01:11:58] benefit of the nesting is more apparent when
[01:12:02] these have state created under them.  Because you can put create signal inside the effect.
[01:12:09] Right? So like pretend this effect had to create signal in it that was also read in here.
[01:12:16] So,
[01:12:17] Like,
[01:12:18] This is.
[01:12:19] This is how Svelte 5 works, essentially, with the component.  Because you can nest state in a...
[01:12:25] in an effect graph, essentially.
[01:12:28] Right. Components aren't really components.  They're like it's the decision points that the control flow that actually define things.  Right. This is how solid renders and this is how like obviously in trivial cases,  we can pull this out, but sometimes the closure between this scope
[01:12:44] and the underlying scope is actually relevant.  Like you create state in here.
[01:12:49] And then that state is right in here.  And then you don't want to like reset it unless the, like the inner of the outer scope reruns.
[01:12:59] Yeah, I was mostly just trying to show the independent updates.
[01:13:06] Right, so what did I say here? Why does this matter? Picture if you had a list of users instead. Consider an immutable change. Yeah, right.
[01:13:11] So
[01:13:12] If you've ever updated a list of users,
[01:13:14] Right?
[01:13:16] you kind of map over
[01:13:18] A list.
[01:13:19] And then you go...
[01:13:22] find me the user with the ID. So you go through and go, if the user is not this ID, just return the existing user in the map. Otherwise, copy the user and add the new name. This is how you do an immutable change in
[01:13:34] like React or most things. You have a list of users
[01:13:37] You go change the ID with this name, you return a new list with
[01:13:43] the user with the updated name.
[01:13:45] Right?
[01:13:47] But with mutable change,
[01:13:49] You could just...
[01:13:50] find the user,
[01:13:52] and assign the name, right?
[01:13:54] And...
[01:13:55] If you think about the repercussions between these two operations in the scope, it's a huge difference because this one
[01:14:02] the
[01:14:03] framework or whatever gets
[01:14:05] I list an array
[01:14:07] a new array with
[01:14:09] all the same users except for one that has a name.  So when it goes and iterates over to diff, it's going to be like, OK,
[01:14:17] I need to run the logic that does the array diffing.  And then it goes, OK, let's go through each one.  Hasn't changed, hasn't changed, hasn't changed, hasn't changed, hasn't changed, hasn't changed, you know.
[01:14:24] you know, 200 times, it finds the one that has changed and goes, okay, what's changed about me?  So then it goes through and it needs to go, okay, has the ID changed? Has the title changed? Has the thing? Oh, the name has changed. Update that. That's the process.
[01:14:39] that you get with immutable change, right?
[01:14:41] even with the memoizing compiler or whatever you're doing, you're essentially going to run through the whole list and then do a bunch of these really quick, shallow checks and nested shallow checks and so on.
[01:14:51] But with immutable change,
[01:14:53] you literally go, "Oh,
[01:14:55] Update the one signal with the name.
[01:14:57] So instead of running anything, you don't have to tell the list to update. In this case,
[01:15:02] you didn't actually update the list. It's the same list reference, it's the same user reference,
[01:15:08] It's just like the one place in the DOM where the name is. It just goes ping, update that.
[01:15:12] You didn't have to do any of that, right?
[01:15:14] The one signal updates, no list recreation, no list diffing, no row recreation, no
[01:15:19] DOM diffing.  By treating immutable reactivity as first-class instance,  we get the authoring experience similar to immutable state,  with the capabilities that even the smartest compiler cannot  achieve.
[01:15:30] But we aren't here to talk about reactive stores exactly. What does this have to do with the derivations?
[01:15:42] Oh, what's the argument for set user if using proxies anyway?  Well...
[01:15:51] Big one for me is the loss of scope, right?  I'm still a big believer of unidirectional flow.  And like, I actually...
[01:16:01] I...
[01:16:02] I love that I have articles for all of these topics now.  Let me see if I can open link in a new tab.
[01:16:08] React, I've written this article like twice actually, to be fair. I wrote it like in 2018 the first time. Two-way binding is a two-way street is a good one, but the one I'm looking for here is thinking locally with signals. This is a whole argument for basically saying that React has all the same benefit, or solid and signals have all the same benefit of a
[01:16:27] of
[01:16:28] of
[01:16:30] something like react like it's not like something like the world goes crazy  it's it's just there's there's the classic example where you like
[01:16:38] Go, I have an object, you pass it to some function.
[01:16:41] And then it's like,
[01:16:42] Can you say anything about that object afterwards when you pass it to the function with this expectation of it being mutated?
[01:16:49] so there's like this control that you get by by having a separate setter where you're saying like  i'm explicitly letting it like even though solid has the it's like the first step there like
[01:17:01] When I create stores, especially global stores and stuff, I generally create actions, right?  Like I won't pass the setter straight down.  I'll actually like make a pattern like it'll look something like.
[01:17:13] you know,
[01:17:14] something along the lines of like,
[01:17:17] you would use the store something like
[01:17:20] you know, here's our store. And then you'd be like increment,
[01:17:24] decrement.
[01:17:25] Like this, I usually keep the same
[01:17:27] thing, right? So
[01:17:29] create my store or whatever, right? Like this is, this is the pattern I usually use because I, so I actually wrap the specific operations. But if you look at it from a DOM standpoint, even like when you're, when you're passing stuff to a component on
[01:17:43] Click.
[01:17:44] on save, you're actually
[01:17:46] at a component level, defining the actions
[01:17:50] that you pass through because then you call the setter here, right? Set
[01:17:53] set store, whatever, right? So
[01:17:56] In a sense,
[01:17:59] It's...
[01:18:01] To be fair, if your reactivity was limited to your local scope, which is something that Svelte does to a certain degree, it doesn't completely, though.  I did a whole stream about this.  I was really excited about Svelte's ruins from the perspective of not letting reactivity just flow everywhere.  But then I found out from Rich that they don't actually do that.  So I got really disappointed and decided that I didn't actually care about ruins that much after all.  But...
[01:18:23] And I found
[01:18:24] problems and why they did it the way they did, which means that it doesn't solve what I want to solve, which means that, you know, it's, it's, it doesn't do what I need it to do.  But generally speaking, there is incredible power to being able to control and say like, no, you.
[01:18:40] Don't get to update this.
[01:18:42] You can.
[01:18:48] And there's another reason.
[01:18:51] Thank you.
[01:18:53] There's another reason, which this is why I think these...
[01:18:59] these things are important because
[01:19:03] Yeah, derived values, we know them are immutable, right? Okay, so yeah.
[01:19:07] I want to talk about...
[01:19:10] driving mutable things. Because I told you most frameworks have stores.
[01:19:15] But not every framework
[01:19:17] has
[01:19:18] derived mutable
[01:19:20] Um,
[01:19:21] stuff.
[01:19:22] The derivations generally are...
[01:19:26] immutable, even with drive state. Like, don't get me wrong, there's benefits to that. Might look at that a bit later. But generally speaking,
[01:19:36] Derivations are
[01:19:37] Um,
[01:19:39] immutable and it makes sense, right? We have a function that
[01:19:42] returns next. I've been using this, if you've been noticing, all throughout this whole  series of articles, state equals function of state. And
[01:19:51] Um,  yeah,
[01:19:55] It's because...
[01:19:57] At its core...
[01:20:01] Derivation is generally immutable. You get the previous state to get the next state out. It's a function call.
[01:20:07] When the inputs change, they rerun, you get the next value. They serve a couple important roles in React Graph. First, they serve the memoization point. They can save work on expensive or async calculations if we recognize the inputs haven't changed.
[01:20:18] and we can use the value multiple times without recalculating it.  Secondly, they act as a convergence of nodes.  And this is what I was kind of hinting at earlier when we were talking about React.
[01:20:28] they are joins in the graph. Like generally speaking, you have a bunch of different data  points and then when you end up deriving stuff, you're usually combining
[01:20:37] these values together, right?  You you might go
[01:20:42] take a name and a format signal, and then you get a formatted name.
[01:20:46] these essentially act, you know, even into the DOM to a certain degree, you end up
[01:20:52] derived values generally are,  sometimes they're just a transformation,  but quite often they're a convergence.  You always...
[01:20:59] start from multi and you narrow it down.
[01:21:07] There's no convergent nodes in React though.
[01:21:10] Is that true?
[01:21:12] I guess it's not granular enough.  Like you can't converge something when the whole thing  is already like one thing.  I mean, you could argue that components
[01:21:22] are, right? Because components take multiple props.
[01:21:27] and aspects in an
[01:21:29] Bring them in.
[01:21:33] Yeah, but from an update cycle, React doesn't ever diverge. Once a parent
[01:21:41] Once a parent
[01:21:43] Thank you.
[01:21:43] is like you are updating...
[01:21:47] Short of short cutting, which is different than divergence,
[01:21:50] you are literally updating everything below it.
[01:21:53] You go, this has changed everything below it.
[01:21:56] Needs to get blown away.
[01:21:58] Right?
[01:21:59] So like...
[01:22:01] it might diverge in UI aspect, but at that point you do a change and
[01:22:07] The whole thing is a single tree from like a single...
[01:22:11] push out from things. Yes, they can shortcut with memos, but
[01:22:15] like,
[01:22:16] You're in it from that point. You are doing everything below.
[01:22:24] Yeah, components are totally convergent nodes. Well, we already showed that, right? When I showed a React component, it was just a create memo return. Like, it's...
[01:22:31] Yeah. It's...
[01:22:33] If you kind of take that aspect, um,
[01:22:37] So I call them joins in a graph. They tie multiple different sources together, defining their relationship. This is key to understanding updates, but it also goes to why the finite number of sources increasing dependency would become untangled. Oh, this makes me really sad.
[01:22:49] This...
[01:22:50] is gone now. I wish I'd taken a screenshot of it. Seb
[01:22:57] from the React core team.
[01:22:59] He moved to Blue Sky.
[01:23:03] Um...
[01:23:04] today or yesterday and he deleted all his tweets on his account except
[01:23:09] for one with the blue sky icon.
[01:23:12] And it removed.
[01:23:14] It removed the picture here because it was an embed
[01:23:18] from Seb's Twitter.
[01:23:22] which basically he he he said he said um
[01:23:28] For those of you guys who don't know, Sebastian Marcobogde, I think his name is, he's the visionary behind React.  After Jordan Walk stepped away from it, for the last decade, he's basically been the man, so to speak.  There's multiple people on the team, but he's basically...
[01:23:51] like if
[01:23:52] And be fair, Facebook's a big company,  and they have all different things,  but if you want it as close as like,
[01:23:58] myself to solid, Rich Harris to Svelte, or
[01:24:03] Um...
[01:24:05] avenue to view. It's not Dan Abramoff, despite popular belief. It's actually Seb. And he said  something along the lines of his problem with fine-grained reactivity...
[01:24:17] Yeah, he's at Vercel now. Yes, exactly.
[01:24:20] Uh,
[01:24:23] Um,
[01:24:26] Yeah, I mean, if I can get it back, I will replace it with it.  But this is unfortunate because I think I use their quotes in a number of my articles.  I should have not used embeds.
[01:24:38] I did it so that it would like link through and I was thinking, oh, clever, but like who's going to delete their Twitter?  Well, Danny Brumoff, I think, did it at one point, too. Right.
[01:24:51] Yeah, but essentially he said that his problem with fine grain reactivity was essentially the fact that
[01:24:56] By nature, everything ends up converging anyways.  So any gains you get basically...
[01:25:02] go to waste. It's like basically pointless. Like everything just converges.
[01:25:09] Which makes a lot of sense. With deriving immutable data structures, you only have joins, you don't have forks.
[01:25:14] As complexity scales, you're destined to merge.  Interestingly, reactive stores don't have this property.  Individual parts update independently.
[01:25:22] So how do we apply this to derivations?
[01:25:25] Right.
[01:25:30] So, Anders Stoltz published an amazing article several years back where he linked together  all the types of reactive iterable pre-nodes.
[01:25:40] I told you earlier in the stream that I love...
[01:25:42] his writing. I'm just going to throw this out here. This is, this is like one of those like
[01:25:50] articles.
[01:25:51] Thank you.
[01:25:52] of like, it's just, it's such a systematic way of thinking and approaching the problem. He basically defines everything on the basis of like, JavaScript as functions, or functional programming as functions, whatever, whatever thing floats your boat.
[01:26:06] Right, so he's like, look, at the base, you have a value or object, right?
[01:26:10] And then you have a function which is, you know, X returns Y.  And then he goes on and goes...
[01:26:15] then you can have getters
[01:26:17] which is...
[01:26:18] you know,
[01:26:20] Thank you.
[01:26:21] a more specific version where you're, you know,
[01:26:24] no input gets x, right?
[01:26:28] And similarly, you can have a setter where the input
[01:26:32] you know, impacts things.
[01:26:39] Yeah, this has always been for me, like I've associated with
[01:26:45] with, with,
[01:26:47] under because he's this is not the laugh this is not the first version of this  he had done like most of it and then like he finally got the missing piece like
[01:26:57] This is a sequel to an article he'd written about two years earlier.
[01:27:00] But the idea is, as he kept on layering on stuff, getter, setter,
[01:27:06] Which is these, by the way, this is the cornerstones of signals here, right?  Getter, setter.
[01:27:10] getter getter so it's a getter that gets a getter  and guess what you can have setter setters  and I think you can actually have getter setters  to be fair  like there's a little bit more space  in here
[01:27:22] But it's like a setter.
[01:27:24] that takes a setter essentially, like, so you can dynamically pass in the setter that will be used, right?  Whereas a getter is a getter that returns a getter.
[01:27:35] Um...
[01:27:36] Okay.
[01:27:38] Why am I going with this? Well, because he started recognizing that iterables
[01:27:43] are a type of getter-getter.
[01:27:46] And that...
[01:27:47] Promises are a type of setter setter.
[01:27:50] Right. And
[01:27:52] observables are also a type of setter setter. So he just kept on building it out and then he's like, and asyncr intervals are actually
[01:27:59] you know,
[01:28:00] intervals with promises and anyways
[01:28:02] He was using the shape of the API to actually define...
[01:28:08] the characteristics of the type of solutions you could have as a way of
[01:28:12] sort of
[01:28:13] confirming with himself
[01:28:16] that the spit like that like
[01:28:19] He explored the whole space of the potential of, you know,
[01:28:23] these reactive
[01:28:25] potentially reactive operators.
[01:28:29] Right. This is this is absolutely brilliant because he he managed to like
[01:28:39] kind of observe the shape of the pattern
[01:28:42] To kind of understand like I'm sure there's other setters and other getter getters, but he painted a whole picture on  how the
[01:28:51] these primitives are related to each other. And he did it all by understanding
[01:28:56] their nature by the shape of their API.
[01:28:59] Thank you.
[01:29:01] Um...
[01:29:04] And I actually had a similar experience
[01:29:07] kind of experiment when I was working
[01:29:12] um getter setter well that's exactly what i'm what i'm going to go to right now um
[01:29:18] I...
[01:29:19] two years ago,
[01:29:21] Everyone knows how much I care about derivation, right?  But I was like,
[01:29:26] I was like, okay, we're going to start working on solid 2.0, right?
[01:29:31] just over two years ago, maybe two and a half years ago, and I started talking about characteristics of
[01:29:37] of, you know,
[01:29:39] things that I considered important. I basically at some point decided that we needed
[01:29:45] to kind of look at, reconsider our...
[01:29:49] are primitives, right?  And this was like a lot of
[01:29:52] like I was just saying what aspects of reactivity I thought is important,  like evaluate on pull, like being push pull, you know, this is,
[01:30:01] high importance and I'm very confident in our solution.
[01:30:04] Right.
[01:30:06] Bye.
[01:30:08] high-level direction, different, create computed, writable memos.  So I first put out this proposal, and this is based on old Knockout and View style writables.
[01:30:17] And I was like, no, this isn't what I want to do. I was like,
[01:30:21] I was like, because this whole approach is very similar to just having a memo
[01:30:27] which then
[01:30:30] kind of rope back to the source signals.
[01:30:34] What I realized is from a shape perspective...
[01:30:39] This wasn't a two-way thing. See, old two-way binding frameworks had this way that you could like have a computed value that you could write to. So that when you pulled the value, it did the computation. And when you wrote to it, you wrote back to it and then transformed it from the, you know, what would be considered the transformed version back to the base version so it could get pulled again. For example, this full name thing is a classic example of this where the idea is,
[01:31:03] you could make
[01:31:05] Um...
[01:31:06] a full name set full name and then what would happen is when you basically grab the full name you would get
[01:31:13] First.
[01:31:14] last with a space in it, and then when you set it, it would split
[01:31:18] the full name you gave it by the space and then set the two signals under the hood.  This is how this worked in view and in Knockout.
[01:31:25] But I was like, why bother with this when you could just wrap
[01:31:28] this whole create hypothetical, writable thing could just be written with a memo.
[01:31:34] that
[01:31:35] you know,
[01:31:36] basically this. You can easily see how you could just wrap this in your own function and do this. You didn't need a special primitive to get this functionality.
[01:31:45] Right. CreateRatable is a getter set or Angular link single.  Angular very recently added this...
[01:31:52] ability that I was talking about here a couple of years ago. Svelte has a linked signal as well, I believe.
[01:31:59] I don't know between Svelte or Angular.  I think I saw a post in a Discord where Dominic was sharing it,  and the Angular guys were like, they both call them linked signals,  which makes me think that it was a conversation between those two.
[01:32:14] where the naming finally listed.
[01:32:18] Thank you.
[01:32:20] Oh, you ditched it?
[01:32:22] Okay, good to know.
[01:32:25] Because I think you didn't ditch it before influencing Angular to go with it.
[01:32:30] Um,
[01:32:31] What was interesting was...
[01:32:36] I...
[01:32:36] what I wanted was almost like a controlled component.  Like I wanted something that would be mutable  and then it would reset when the stuff updated.  And the reason for this is  one of the worst problems for Synchronite,  like...
[01:32:49] Like, I've written about this before in our...
[01:32:54] and we've covered it on stream before, but essentially
[01:32:59] How many times have people written a component and done something like this? Name, set name,
[01:33:06] equals create signal
[01:33:08] props.name
[01:33:11] create effect, let's say.
[01:33:13] forsake.
[01:33:14] set name
[01:33:16] Props.name.
[01:33:17] Basically, some way of keeping...
[01:33:22] It didn't...
[01:33:28] some way of keeping it in sync.  This is terrible from a reactivity standpoint.
[01:33:35] React tells you not to do it.
[01:33:37] even themselves. They're like, no, you can actually set it synchronously.
[01:33:42] You know, it's actually better like in React, it's actually better to just do this when it reruns the component in solid.
[01:33:48] we actually were like, well, use create computed.  It runs without triggering rendering,  but I'm trying to get rid of create computed.
[01:33:55] The reason this is bad is because it
[01:33:58] The name, it breaks the graph.
[01:34:01] The name doesn't know...
[01:34:04] like doesn't know that it depends on props.name.  Like this is, this could be empty and it'd actually still work.  My point is there's no connection between this source and this name.
[01:34:15] like this right could happen anywhere.
[01:34:19] I'm going to call this crit effect, it's easier for people to see it. So like, it means that when you have graph propagation, it's like stops there, it doesn't realize
[01:34:29] First of all, this basically triggers a whole other reactive update by doing it this way.
[01:34:34] Like the first change, the props name, like
[01:34:37] Prop's name was used somewhere else.
[01:34:40] like in your div.
[01:34:42] Like if we had a div here that was like,
[01:34:45] Profs.
[01:34:47] dot name
[01:34:49] and the name, like if we put both side by side, there would be
[01:34:54] a short period of time
[01:34:57] where these names would not match.
[01:35:01] Remember consistency matters. It's because we can't know. You basically broke the graph.
[01:35:08] Never, like we, this, there isn't a problem with using effects to write the state, but using it as a synchronization mechanism is bad. If you want to use an effect to write the state, it's because you're reading from the DOM, you're doing like a, like an animation or something. It's not for this.
[01:35:25] This should never, never, never, never, never, never do this.
[01:35:30] And
[01:35:32] The problem is there just isn't a good solution to solve this.
[01:35:36] And I was like,
[01:35:38] I knew that...
[01:35:39] from the shape.
[01:35:43] I knew from the shape that I wanted it like this because in theory you can see that
[01:35:47] Field depends on props.field.
[01:35:49] I didn't know how I was going to implement it.
[01:35:51] But I knew...
[01:35:53] that it is, right? Like I here's the example again, right?
[01:36:00] And then...
[01:36:02] So I put it out there and then Milo came back and he was like,
[01:36:08] Uh, we can just do this.
[01:36:10] Let me highlight this code so you can take a look at it.
[01:36:14] Really simple.
[01:36:16] This isn't the full version with the previous values, but you can see the point.
[01:36:20] He made it computed.
[01:36:23] which is a memo that creates a signal in it
[01:36:26] based on the function you pass it.
[01:36:28] So, you know, props to...
[01:36:30] whatever props dot name here or whatever so
[01:36:33] this signal
[01:36:35] will be set with props.name.
[01:36:37] Right. Let's let's
[01:36:39] Let's let's let's actually just
[01:36:42] make this the thing, "props writable."
[01:36:47] props don't name okay
[01:36:49] Let's look at this.
[01:36:50] There we go.
[01:36:52] It runs this function that we pass to it.
[01:36:55] and creates a signal with its value.
[01:36:57] And that signal is returned to a memo, which is...
[01:37:01] here and then it returns
[01:37:03] our getter and our setter.
[01:37:05] So what happens is this getter
[01:37:08] gets the computed,
[01:37:09] gets the first element array, which is the getter side,
[01:37:12] and calls the getter. So that's easy. Basically, when you read from this name, you're actually depending on both this signal
[01:37:20] and this memo, right?  It's nested like our effect example.  And then on this side, when you write the value,  it calls the computed, so it depends on the read
[01:37:28] of the
[01:37:29] of the memo.
[01:37:31] and then it calls the write of the signal.
[01:37:33] So in essence, what happens is,
[01:37:37] The graph is not broken here because when props name changes, anything that listens to name knows that it actually listens to
[01:37:46] both
[01:37:47] this memo
[01:37:49] which means it actually listens to props dot name kind of indirectly and then
[01:37:55] when you do write
[01:37:56] It just updates the internal signal.
[01:37:59] But if this function triggers again,
[01:38:03] it reruns and creates a new signal.
[01:38:06] And this still gets notified
[01:38:09] and this write function gets updated.
[01:38:12] Okay.
[01:38:14] It only returns a new signal
[01:38:17] when
[01:38:18] "Profstor name changes", not when you set name.
[01:38:24] Thank you.
[01:38:25] Thank you.
[01:38:29] Right?
[01:38:32] Like, I can think of more efficient ways to implement this,  but this is a very fundamental, right?  Because I told you a moment ago, this is higher order.  It's just a...
[01:38:41] getter getter and a getter setter.
[01:38:43] Right?
[01:38:46] Thank you.
[01:38:48] Thank you.
[01:38:49] What do you got for me, Dev? You trying to derail me with something?
[01:38:56] What are we doing here?
[01:38:59] Uh...
[01:39:02] Also, thanks for this
[01:39:04] Also, thanks for the sub. What do we got here?
[01:39:08] What do you got for me, Dev?
[01:39:12] Update, it's now a third order signal. Higher order lazy signals coming in clutch now. A signal for actual value coming from the server wrapped inside a lazy memo so that it only runs when it's read, wrapped inside an async memo that holds the serialized payload from the server, which is wrapped in a proxy.
[01:39:26] *laughs*
[01:39:26] I don't necessarily want to think about what that means.
[01:39:30] But...
[01:39:32] Thank you.
[01:39:33] Yes, I think there's a whole design space when you start considering the composition.
[01:39:39] of
[01:39:40] of signals.
[01:39:47] What happened if it calls that name? I don't get it. Okay. If you call set name,
[01:39:53] It's... it's...
[01:39:54] This memo...
[01:39:56] is just returning the signal and then you're calling the setter on it.  The reason there's these array syntax is in solid create signal returns an array.  So this returns an array here.
[01:40:06] So...
[01:40:07] you're you're calling the memo like when you call the set
[01:40:11] it's just overriding the signal inside here.  And because you're accessing it here, the second one,  it's re-triggering whatever is calling this here.  So you're just like...
[01:40:20] you're basically just reading the Create Memo, which goes, nothing's changed.
[01:40:25] Whenever you call...
[01:40:26] whenever you call set, it basically goes,
[01:40:30] So first it goes calling the memo.  Nothing's changed.  Call the set on it.
[01:40:35] which then triggers this
[01:40:36] side to get
[01:40:38] you know, wherever it's used and it goes, calls the memo and goes, Oh, nothing's changed.
[01:40:42] And then
[01:40:43] gets zero and then reads this and gets the new value.
[01:40:54] Thank you.
[01:40:57] The reason we did the initial link was because dominant conflinder would derives, but it had problems. Let's see if we were in the problems we had. Okay, interesting.
[01:41:08] Thank you.
[01:41:10] Thank you.
[01:41:13] So like you start seeing that like there's a whole other dimension here by following the shape.
[01:41:22] I mean, you can write it right now like this or a variation of this, but yes, the answer is yes.  And let me show you why.
[01:41:29] because
[01:41:31] Yeah, so getter, getter, getter, setter.
[01:41:33] It occurred to me while writing the previous version of this article about
[01:41:38] I actually complain about
[01:41:40] Let me see if I go here. In the previous article that I wrote in the summer,
[01:41:45] beginning of August, I actually complain about the fact that
[01:41:48] the one inconsistency in React...
[01:41:51] is that like this is don't do this.  Remember, this is the same thing I was showing before, the create writable.  But basically over the process of writing this series,
[01:42:00] Thank you.
[01:42:00] What I realized was that this is such a...
[01:42:04] common thing
[01:42:06] that
[01:42:08] It's not much of a stretch to just make create signal work this way.
[01:42:13] So the plan isn't actually
[01:42:16] to ship
[01:42:17] create writable.
[01:42:18] It's just...
[01:42:22] It's literally just that if you pass a function to signal,
[01:42:29] Now it's a drive signal because that's the that's that's the mentality here.  It's one of the weirdest things.  And I think I pointed this out on a stream before is
[01:42:37] If you use React,
[01:42:39] And so you have a function, you know, like so my comp, right?
[01:42:43] And
[01:42:45] you can go in here and you go const,
[01:42:48] Count.
[01:42:49] Sorry.
[01:42:50] count, set count.
[01:42:52] equals
[01:42:53] you state.
[01:42:56] Props dot
[01:42:58] Count. One cousin.
[01:43:01] const double count
[01:43:03] equals
[01:43:05] Use memo.
[01:43:08] Um...
[01:43:15] props.count
[01:43:17] times 2
[01:43:19] And then we'll do two.
[01:43:20] Props.count.
[01:43:25] Even though the component reruns,  so if the prop's count changes and the component reruns,
[01:43:33] In React, it will see that the memo has changed and re-evaluate it and get a new double count, right? But
[01:43:39] This doesn't reevaluate. This is only the initial value. The only hook
[01:43:45] that runs something top level
[01:43:47] that doesn't
[01:43:48] like invalidate it's not a dependency array to be fair but it is
[01:43:53] It's
[01:43:54] It is odd. You know what I mean? Like the only one that doesn't do it is use state.
[01:43:58] like for something that always redoes all the work,
[01:44:02] you know, that goes, okay, we check and we rerun the whole component.  This is the one that doesn't update.
[01:44:07] And
[01:44:14] Essentially, like...
[01:44:18] Thank you.
[01:44:22] I did a little bit of work, a little bit of stuff I was playing around with.
[01:44:27] I mean, I'll probably load a playground up for that too.  I have the latest solid 2.0 reactivity stuff, obviously the demo, like I've got it here, but
[01:44:39] Essentially,
[01:44:42] Thank you.
[01:44:44] What I'm getting at here is it occurred to me that we could
[01:44:48] Do I have the code here? Let's go.
[01:44:51] Create.
[01:44:52] signal.
[01:44:54] We could detect if it's a function and create a memo in that case, which adds a little bit of COVID.
[01:45:00] thing doesn't have create memo in it and what where i was getting at here is create memo itself
[01:45:08] Amen.
[01:45:09] can be set up so that when it reads,
[01:45:14] Iki...
[01:45:15] if there's no dependencies,
[01:45:17] For it?
[01:45:19] like it doesn't track anything, it's possible
[01:45:22] That's what this is doing. This is just compiled down. You can basically delete the node and in the future just return the closed over value. So you can actually release that memo if it's not necessary. Because the one problem with an API that takes a function is like how do you store a function as signal? Well,
[01:45:36] We have this already in solid.
[01:45:38] If you've ever used solid and you store a function in it today, you
[01:45:43] I guess I should turn TypeScript on to show you this.
[01:45:46] You can go like
[01:45:47] You can make a signal with a function and go create signal.
[01:45:52] and pass in a function, okay?
[01:45:55] Doesn't really matter what the function is. But
[01:45:58] When you try and go...
[01:45:59] set function, right? And update that function.
[01:46:03] You...
[01:46:05] can't just if you just do this
[01:46:08] It's going to error at you because it's like,
[01:46:11] because we have a function functional setter we saw it up here right count count plus c because  we have a functional setter if you want to restore a function you have to set it you actually
[01:46:21] You have to do that. You have to use the function form if you want to set a function.
[01:46:26] And
[01:46:31] Because of that,
[01:46:32] Is it
[01:46:33] It's actually more consistent if you had to
[01:46:37] Also,
[01:46:38] I
[01:46:39] pass in a function to set a function here. So there is this small edge case where you want to store a function signal and it's not reactive. So I've made it so that it releases in that case. There's other benefits of memos releasing when they have no dependencies anyways, but essentially it's actually symmetrical. And the positive of this kind of approach is that
[01:47:02] There's no new import, no new concept, no nothing.  You just...
[01:47:06] I'm creating a signal.
[01:47:08] is my signal, where is it here?
[01:47:13] Yeah, sorry.
[01:47:15] Is my signal
[01:47:17] based on a value or does it depend on something?
[01:47:22] Ta-da, right? This is like...
[01:47:24] This is, you know, it didn't even occur to me to make it like I'd create writable.  But then once I realized that this is such a common thing,
[01:47:32] Why not just make it the thing like you this?
[01:47:37] The problem with the create effect update loop, this thing is people get
[01:47:43] Here.
[01:47:46] because
[01:47:47] they know signals and then they go like, "Okay, how do I possibly make this update with this?" And they go for the Signal API.
[01:47:54] They don't know about create writable or create other things.  So I was like, what can we just shortcut this and just be like, that is what a signal is.
[01:48:02] Anyway.
[01:48:03] We're barely scratching the surface. There's way cooler stuff. This is the least interesting part of today.
[01:48:08] Um,
[01:48:10] So,
[01:48:15] What I'm getting at here is,
[01:48:17] It's an interesting exercise when you follow the shape.
[01:48:22] And
[01:48:25] But the truth is, this is not...
[01:48:28] a writable derivative. Technically speaking, this is still immutable.
[01:48:33] This is still a signal.
[01:48:35] We haven't actually solved the problem.
[01:48:40] Thank you.
[01:48:40] You have to differentiate the case because there's a difference conceptually between, um,
[01:48:48] creating a signal like
[01:48:52] from count like this,
[01:48:54] Let's see.
[01:48:57] and creating a signal like this.
[01:49:00] Right. Like there's a difference between one that initializes with that value and one that
[01:49:06] updates with that value.
[01:49:12] - Thank you.
[01:49:13] Okay, so... Yeah.  On here.
[01:49:15] I have so much on this topic.
[01:49:18] Like I have like two more articles.
[01:49:21] Anyway, let's keep on going.
[01:49:25] So,
[01:49:28] Here's the thing in kind of a nutshell, right?
[01:49:32] Signals, stores, memos, this. I love these graphs by the way. This is how I do all my development,  like space planning. Like I use these for everything. This is how I created solid in the first place.
[01:49:43] Um...
[01:49:45] Thank you.
[01:49:46] uh,
[01:49:47] I think I showed that on a previous stream.
[01:49:52] Um...
[01:49:55] Yeah.
[01:49:57] What was it?
[01:49:58] what every framework could learn from React.
[01:50:10] Now that one doesn't have it. Doesn't have the same
[01:50:15] This is clearly...
[01:50:19] Not my most popular article. Okay.
[01:50:23] Uh...
[01:50:25] Uh.
[01:50:30] Thank you.
[01:50:34] Thank you.
[01:50:40] Yeah, the whole article is about me recognizing
[01:50:47] basically on a quadrant wrap, but there was an open space that hadn't been explored.
[01:50:54] Anyway.
[01:50:56] Yes, looking for some read from what I thought five years ago.  Let's let's talk. Let's continue now.
[01:51:02] But the thing is, it's clear, like on a mutable side, on the source side, you have signals.  And on the derived side, you have memos or computeds.  On the source side for mutables, you have stores, but there's nothing on the drive side, right?
[01:51:14] So,
[01:51:16] You know, first couple things, you could obviously
[01:51:19] pass values through, right? You can always drive a store from another store, you know, by putting getters in. But like this, changing the shape here is actually kind of awkward.
[01:51:29] Do you know what I mean?
[01:51:30] You could use like a memo.
[01:51:32] to like
[01:51:33] project an object that wraps getters over stores and can create a shape.
[01:51:37] Right?
[01:51:40] But...
[01:51:43] The fundamental problem here is these are all
[01:51:49] All derivations are based on calling a single function.  So how do you possibly... It merges things.  How do you possibly...
[01:51:57] Thank you.
[01:51:58] like let things fork out if essentially you're
[01:52:02] Calling a function and returning a value.  It's like, by its very shape, it's a merger.
[01:52:09] Right? And I read this whole thing, incremental computers from Signia. We talked about this a bit on stream. But like,
[01:52:17] Signia is clearly
[01:52:19] built for React.
[01:52:22] Because like...
[01:52:25] If you look at this really cool example, which is, as I said, complicated, and we covered this a bit on stream already.
[01:52:31] Um,
[01:52:33] But...
[01:52:35] They came up with something that's very similar to Mapper Rain Solid.
[01:52:38] where they, you know,
[01:52:41] if you could make it by hand by making this map function by using a computed and then
[01:52:47] basically handle the diff like operation equals add, replace, remove, handling diff operations to produce
[01:52:56] the next data and more
[01:52:59] diffs for the next thing down the line. So if you pass the diff all the way through,
[01:53:03] it lets you do stuff like
[01:53:06] map over a list of names.
[01:53:09] And then...
[01:53:10] you know, for each one split and reverse the name, like basically reverse the letters.
[01:53:16] And what they showed is that there's five items in the list.  And when you call and then
[01:53:20] It calls
[01:53:22] You basically you have five, right?
[01:53:25] because it called this map function callback five times.  Now, if we push a new name onto the list,
[01:53:32] you can see that the results reverse the name.
[01:53:35] But they only called
[01:53:38] it one more time.
[01:53:40] because they were able to use this diffing logic to only apply the specific patches.
[01:53:45] So this is pretty powerful.
[01:53:48] I
[01:53:49] Right? They added, they changed the first person's name to Sunil, again, only
[01:53:53] One more run.
[01:53:55] They pop something and guess what?
[01:53:57] they realized they didn't actually have to, uh,
[01:54:00] map anything again so the map function doesn't call, the list just gets shorter. So this is
[01:54:06] powerful stuff but what you notice about in this example is
[01:54:09] The source...
[01:54:11] List.
[01:54:13] Thank you.
[01:54:14] is still...
[01:54:17] Like they're using Imer to do
[01:54:18] fine-grained updates, essentially.
[01:54:21] This is what they're using here. But...
[01:54:23] Under the hood, it's actually creating a new array every time. This is a mutable change. They're just doing a smart diff with it. But the problem is, they're still cloning the array every time they're still doing all the work. And
[01:54:36] while they're saving on the payout, which is great,
[01:54:40] They're not like...
[01:54:41] this assumes that the array is not a store or a proxy, it just assumes that it's always going to be this big chunk of an array.
[01:54:49] Like.
[01:54:53] And I mean, there's nothing wrong with that.
[01:54:56] Per se.
[01:54:58] But...
[01:55:00] Every single step of the derivation has to pass the diff along to benefit from it.
[01:55:06] You pay the cost of the whole chain. In some cases, freshly different server, there's no stable references. Something needs a key, the models,
[01:55:12] Two, you know.
[01:55:13] Which is what React does.
[01:55:15] Imr doesn't, so it was kind of obvious.
[01:55:19] What I ended up with is a silly meme, but it's true.
[01:55:23] Sometimes...
[01:55:24] like,
[01:55:25] It's not hard to write code.
[01:55:28] that would just update the store.
[01:55:30] in an effect. Like, we're trying so hard  to derive it, to not break the chain, to keep  things, you know, consistent, you know, for async  considerations and all this. But like,
[01:55:38] Compare
[01:55:39] This
[01:55:41] to get this.
[01:55:43] you know whole thing versus literally just using a store and going create effect
[01:55:50] Add the
[01:55:51] Add the reverse name to the store.
[01:55:54] Like you basically in a two liner accomplish
[01:55:59] All of this
[01:56:00] don't have to diff all the way down the line, it's just the one element updates, like we showed earlier, where the one piece updates in the DOM or whatever.
[01:56:07] You saved this whole thing, writing all this custom code, doing all this.
[01:56:11] by doing the wrong thing.
[01:56:17] Right? Like everyone knows you shouldn't use effects.
[01:56:22] But it's like,
[01:56:25] The correct solution is so much harder.
[01:56:31] So, like...
[01:56:36] It's just like...
[01:56:39] *sniff*
[01:56:39] It was really frustrating because I couldn't accept...
[01:56:45] that this was the best we had.
[01:56:48] Especially because this is what React pushes you to.  React basically tells you that this is where,  this is the best you have.
[01:56:54] when you know that you can cheat it a little bit and just
[01:56:59] get past it. So,
[01:57:02] The gist of it was I followed the shape.
[01:57:09] Right, with a signal, when you set, you know, you can basically update a to-do.
[01:57:17] When it's immutable, like the proper way to update it to do is you set a new object, but if you need the previous value, you can pass it in and then you clone it and say, now this was false.  Now this is done.  This is how you update an immutable atom.
[01:57:29] But
[01:57:30] With create memo you can also project, you know, add a new field onto it to do with priority for example. And every time the priority changes
[01:57:37] it will, you know,
[01:57:38] return a new one. This is how immutable changed. And what I noticed was this function
[01:57:44] the memo function was the same function
[01:57:46] as the setter function,
[01:57:48] Right?
[01:57:51] So I was like, why don't we do this with stores?  If stores...
[01:57:54] do this
[01:57:56] then
[01:57:58] Why don't we just make
[01:58:00] something that does this. Now, as I said, I've covered this a bit on stream before.
[01:58:05] but
[01:58:06] The key thing...
[01:58:08] you have to understand is someone asked earlier, why do you have set store?
[01:58:13] Right. It's a proxy. Anyways, it's kind of the same thinking here.
[01:58:19] Implementation today isn't leveraging the fact, but like createWritable, we now know that the only thing that can update this projection is within the scope of the function that we pass into createProjection.
[01:58:30] While there's implementation details that I haven't worked out completely on this side, conceptually this is an API shape where we could have enough knowledge here of not, or at least directing the graph in such a way that it wouldn't, it won't break. Yet.
[01:58:45] with mutations be able to granularly update the pieces.
[01:58:49] Right?
[01:58:55] And similarly, how I was showing earlier, how you could have a drive signal.
[01:59:00] By passing a function, why not have a drive store?  Like writeable store, like this is the createWritable, this is the createWritableStore scenario, right?  By doing the same kind of thing.
[01:59:12] Right. And this is an example where the prop forwards through.  And here's an example where the prop diffs against the current version.
[01:59:20] We'll talk about diffing in a bit because it still exists in this reality.
[01:59:24] But the more important part here to understand is that like,
[01:59:29] If...
[01:59:30] we kind of follow the chain here by following the shape.
[01:59:33] we have the potential of
[01:59:36] unlocking that fourth quadrant.
[01:59:38] Um,
[01:59:39] And you've probably already done this before.
[01:59:43] To be fair, um...
[01:59:46] You've used projections every day if you've used
[01:59:51] Modern frameworks.
[01:59:53] And
[01:59:54] I do admit that projections might not be the most obvious thing because, you
[01:59:59] Like,
[02:00:01] because they're a function still,
[02:00:03] it's really weird to have them do all the same work every time. Like, for example, if you
[02:00:08] had to do with priority and listen to these three. Like when you update done
[02:00:14] you know, a done gets update, then it resets all the values.  Maybe these haven't changed, so like nothing gets notified,  but it does rerun this effect.  You are still converging.
[02:00:23] at least at this point, even if you come diverge after like if all of these update downstream independently. So this isn't
[02:00:33] amazing and honestly as this gets nested you're probably not going to just do this right
[02:00:37] Um,
[02:00:38] I used the Trello demo that I showed before.
[02:00:42] as an example here where basically we use this as a way to apply
[02:00:48] fine-grained updates.
[02:00:50] like from optimistic updates, like one at a time. And then when the fresh
[02:00:54] data comes from the server,
[02:00:56] reconcile it, diff it. I talked about the Trello demo in a previous stream, I'm not going to get too much in detail, but instead of using effects, this is a much more streamlined version of this.
[02:01:05] Thank you.
[02:01:06] Thank you.
[02:01:07] But yeah, I mean,
[02:01:09] If you think about it,
[02:01:11] a for loop in a framework with a
[02:01:14] for passes in index is an example
[02:01:17] of
[02:01:20] A projection.
[02:01:21] you have some data from rows that does not have an index on it per se like i guess technically speaking um
[02:01:29] The array has an index on it.
[02:01:32] But like if you...
[02:01:33] In this example, this is actually like a signal, let's say, like a single signal. It's not fine-grained. You're projecting
[02:01:41] It's not like a store. You're actually project, you can project the, you're projecting the index onto each row.
[02:01:47] Um...
[02:01:52] Thank you.
[02:01:55] Similarly here, we can use this  as a way of projecting selected state.  The JS Framework benchmark, we have create selector and solid.  We can implement this using a projection.
[02:02:06] Basically, the idea is you get a selected ID
[02:02:09] and you assign it to an object.
[02:02:11] And then
[02:02:13] essentially
[02:02:14] You can toggle the object between undefined and not
[02:02:19] And
[02:02:21] Only the row, single row will update. I showed this previously because I've been working on benchmarking it. And while this is technically slightly slower than create selector, when I benchmarked it, it was so close that I don't think that we actually need create selector anymore. It all compresses down into the same thing.
[02:02:37] Right, because now instead of like updating, if you've done something like this in React, you know, like,
[02:02:42] If you update the selected ID row and you check it against the row ID and do it every single row, you're gonna check in a thousand rows. This check
[02:02:51] causes it only to...
[02:02:53] flicker two things in the projection, which only causes two rows to update.
[02:02:58] Why is it slower?  It uses a store.  The thing is Create Selector was so hyper optimized  for this one use case that it actually like
[02:03:08] Didn't even use the reactive system.  It reversed onto the reactive system.  I came up with a completely custom way to do it.  Instead of tracking dependencies, it would actually...
[02:03:19] Um,
[02:03:21] it would actually call the computed directly itself.
[02:03:25] Um...
[02:03:26] If
[02:03:27] was a very, very specific performance.
[02:03:31] pack, whereas this is a general solution.
[02:03:34] Yeah, I would say that
[02:03:36] the slight difference you know um it's funny because the selecting benchmark is very harsh  it's like six times x slow down so it's like it's and it's one of the quickest operations  on the whole benchmark so it's like any variation is amplified so like it shows
[02:03:51] the test came out as like,
[02:03:53] slightly slower, like maybe two milliseconds, but that's at 16 times slowdown.
[02:04:00] So like
[02:04:03] Yeah, it's...
[02:04:04] It is a trade-off, but it completely removed the need for a specialized hack.
[02:04:09] Anyway.
[02:04:15] The whole point of this is that...
[02:04:19] I think we've always viewed mutability as like a bad thing.
[02:04:25] But it's actually a pillar of reactivity. It's something that
[02:04:29] You can't really do
[02:04:32] with compilers or core screen, like it doesn't work.
[02:04:37] Um...
[02:04:38] And the bigger thing for me is this really, we'll get into this in a second.  I'm now viewing things as mutable and immutable reactivity.  Before everything was basically immutable reactivity or nested immutable reactivity.  I didn't view mutable as its own category.
[02:04:54] But signals and stores are not the same thing.
[02:04:57] Neither are memos and projections.
[02:04:59] So like even if we could unify the API,
[02:05:03] Like even if we could like say, oh, all signals, you know, when they come off, you can come  stores.  I don't know that we should.
[02:05:09] Right. Like.
[02:05:11] I got here by following the shape. So different
[02:05:15] libraries have different shapes. Obviously, if you're using ruins as felt, you don't have the setter functions. And if you're using view, you don't have the dot value. So like,
[02:05:23] I actually got here specifically because the function shape of solid let me kind of do the same exercise that on under stalls did you know so many years ago and
[02:05:37] Like there's more to explore here.
[02:05:40] But.
[02:05:42] You know, I showed this on stream previously, like,
[02:05:45] Um,
[02:05:46] I've implemented a very basic version of this.  So like...
[02:05:50] you know, we can play with it. And I've actually done a bunch of bug fixing, right?
[02:05:55] So
[02:05:57] Let's...
[02:05:58] Let's take a quick pause. I want to see if people are awake because I have more immutable stuff on it. I want to dump on you guys here in a second.
[02:06:08] Because that was...
[02:06:10] I wrote that a couple of weeks ago.
[02:06:12] As you can imagine,
[02:06:16] you
[02:06:17] Thank you.
[02:06:19] Thanks, Ian.
[02:06:21] *sniff*
[02:06:23] Thank you.
[02:06:24] Thank you.
[02:06:25] *cough*
[02:06:29] Okay.
[02:06:31] uh,
[02:06:32] King out.
[02:06:35] Gotta love all the authentication these days.
[02:06:38] Um,
[02:06:41] I'm sorry.
[02:06:42] There is a lot more.
[02:06:46] Thank you.
[02:06:47] Thank you.
[02:06:50] Yeah, I know this is a deep topic. I should have warned people more like
[02:06:54] Like this article.
[02:06:56] This is probably...
[02:06:58] the most cutting edge stuff. And there has been exploration here in the past. MobX State Tree
[02:07:04] is one of the most...
[02:07:06] like furthest in this zone.  I don't think they've quite gone in a certain direction because like react is what they were feeding into, but there's a lot of.
[02:07:16] pieces, especially when we get into the details that, um,
[02:07:22] Mobax, Immer, like
[02:07:25] Michelle Westerit has honestly
[02:07:28] like shown the way we are lucky on that side, maybe not on the framework rendering side.  I'm trying to bridge that gap, but there's a lot of prior work here for the stuff that I want to talk about next.
[02:07:43] Thank you.
[02:07:44] funny how much when it's boiled down to well that's the the that's the funny thing right like
[02:07:52] I think we all understand that reactivity is mutable, right?  Like, even though the cells are immutable, like the difference between immutable and mutable stuff all comes down to.
[02:08:03] the source of like that change,  right?  Because,
[02:08:06] If you think about it,
[02:08:08] What makes reactive systems...
[02:08:11] Um,
[02:08:12] mutable
[02:08:13] is if you have...
[02:08:16] structures of these immutable atoms. Because once you form them to structures  that can change and references that stay, it's no longer immutable.
[02:08:26] But like,
[02:08:28] Bye.
[02:08:29] That's why you use these technologies in the first place. So like
[02:08:35] It doesn't...  Like, if all we were doing was...
[02:08:39] I mean, maybe not.  Like, as I said, Signia looks like it was built for React, essentially.  They're trying to give React as much knowledge as possible  to push the diffs down the line.  But if you build...
[02:08:49] with a different thing that you think that you could get the mutability all the way down to the dom, it completely changes your perspective on what's important and
[02:08:58] And so on.
[02:09:04] Thank you.
[02:09:06] Could we be on a flight again soon? Lovely.
[02:09:11] Yeah, I'm not on the 288 flow camp at all.
[02:09:16] Because Ryan always changes his dreams.  I love that sarcasm.
[02:09:20] Okay, okay.
[02:09:22] So people are still alive out there.  I'm glad to hear that.  I'm sorry this is a lot.
[02:09:29] But hopefully some of you find this valuable.  One thing that sucks about...
[02:09:34] streaming to Twitter right now is I can't actually see the accurate
[02:09:38] count of live viewers from the other platform they all get combined so like when i go into twitch i can see
[02:09:44] and our Twitch numbers are down a bit,
[02:09:47] but I can't tell my YouTube numbers, I guess.  I guess if I went to YouTube, I could see our live YouTube numbers.  It's a good time also for people to subscribe or whatnot.  Another reminder,
[02:09:59] follow the channel, hit like.
[02:10:02] you know,
[02:10:03] Greatly, greatly appreciated.
[02:10:06] Yeah, yeah, we have much higher on YouTube.  I think streaming to Twitch acts are streaming to Twitter hurt Twitch more than the other ones.
[02:10:15] But yeah.
[02:10:16] Twitter's like this like counter that just keeps on going up.
[02:10:21] Um,
[02:10:22] All right.
[02:10:26] So
[02:10:27] Yeah, this ratio is not good enough.
[02:10:30] We have 115 concurrent viewers and only 51 likes.
[02:10:34] So that's on YouTube. We have another 30 or so viewers on Twitch and another, I don't know how many are on Twitter right now live, but.
[02:10:41] Let's get those numbers up.
[02:10:45] Thank you.
[02:10:46] Thank you.
[02:10:46] Yeah.
[02:10:49] Oh, two less people watching. But we got four more likes. I appreciate you.
[02:10:54] Thank you.
[02:10:56] All right.
[02:10:57] Alright, let's continue.
[02:10:59] Okay, so...
[02:11:03] *Sigh*
[02:11:06] Mm-mm-mm-mm-mm.
[02:11:10] Let's...
[02:11:12] We share this to the stream and we're going to talk about the next topic.
[02:11:19] Okay.
[02:11:22] So,
[02:11:24] The first place that I went to when I started thinking more about this mutable reactivity was like,
[02:11:32] Array of Operations, because...
[02:11:34] In the
[02:11:35] Everyone can picture how you update an object and it's all fine grained.  It's like really easy to picture how like
[02:11:43] It... it...
[02:11:46] It's the two MVC...
[02:11:52] Sorry.
[02:11:54] I'm trying to think of how to phrase this.  Like, it's very easy to picture how you can have a signal update one place in the DOM.  And when you have objects and objects and stuff, it's not hard to picture, like...
[02:12:02] You update the name.
[02:12:04] you know, in the user how it could
[02:12:07] you know, update the one place. But when you start dealing with arrays and structural stuff, you start going, okay, well, if I have granular reactivity on my side, can I do better than all these like,
[02:12:19] diffs and map functions and stuff that, you know, we tend to use, right?
[02:12:28] Thank you.
[02:12:33] So I started looking at array operators really basically.
[02:12:37] And I was like, interestingly enough,
[02:12:39] Like,
[02:12:40] you can kind of split them between immutable and mutable operations and there's some new ones  you might not be aware of i don't know if you guys are aware with width it's literally a  shortcut way of assigning one index with an array and returning a clone probably the most
[02:12:53] Um,
[02:12:54] inoptimal operator ever, but it exists.  But yeah, map, flat, flat map, filter, reduce, slice,
[02:13:02] with
[02:13:03] 2-splice 2 thing. 4-H is technically not...
[02:13:07] like either or, but I'm going to put on the mutable side because 4-H gets you to like
[02:13:13] like it doesn't map, it doesn't return a new array. So you know, then obviously pop push shift on shift.
[02:13:20] Assigning it an index, splice, sort, reverse.  It's interesting that now there's like two splice, two sorted, two reversed.
[02:13:32] So I was just like, okay,
[02:13:36] And there's a couple of things that you kind of like realize right away when you're looking at this, right?
[02:13:40] Um...
[02:13:43] It's possible to clone any data and then mutate it to perform an immutable
[02:13:50] action, essentially.
[02:13:51] So in a sense, immutable actions are a superset immutable ones from a certain perspective.  Because if I wanted to add something in the middle of an array,
[02:14:00] I could use
[02:14:03] You know, I could probably find a way of like using reduce to do it, but I could also just clone the array and then splice it in.
[02:14:09] Right.
[02:14:11] Thank you.
[02:14:13] But on the other hand, reduce could also be used to implement every single immutable operation.
[02:14:19] Right. You can.
[02:14:20] not these ones necessarily, but these ones, right?  You can implement map or filter with reduce if you want to.  It isn't always the most optimal to do it.
[02:14:28] O to N operation, but as a baseline you can't. In general, all immutable operations are O to N.
[02:14:34] but with varying costs. The benefit of mutable is that it can be
[02:14:37] O of one, right, in terms of like,
[02:14:41] in terms of like big O, you know,
[02:14:45] efficiency.
[02:14:46] But what does any of this have to do with reactivity?
[02:14:50] Someone in the solid Discord asked, like, what was the best way to map or filter store?
[02:14:55] And I was like...
[02:14:57] Hmm.
[02:14:59] I started like kind of wondering, I'm like, does
[02:15:03] mutable reactivity actually change anything here.
[02:15:06] Right? So...
[02:15:08] Let's do a little bit of exploration here, if you'll stay with me.  Yeah.
[02:15:12] But...
[02:15:15] *sniff*
[02:15:16] Um,
[02:15:17] I'm going to start with map function because it's basically what all UI rendering is.
[02:15:25] If you think about it, UI equals a function of state, it's a map function at its core.
[02:15:30] Um,
[02:15:32] So are create mem or computed. They're essentially map functions. Create projection is actually more like 4-H, just kind of a side note, but mapping at its heart is immutable.
[02:15:41] But we can map over mutable data.  One of the benefits of doing so is we can update it independently of the map running.  If your data is immutable, the only way you can update the value is to
[02:15:51] update the source and remap it, right? So this is kind of like a classic example. Let's pretend you  have like an array that you're going to double, right? You can map over it, call your doubler function
[02:16:02] And then...
[02:16:03] when you update the Ray later, you'll clone it, add this at the end, and then run over it again.  This is just immutable 101.
[02:16:18] One thing I will say is my preference is not create mutable  as it is in solid today.  I'd rather our like explicit setter version
[02:16:27] mutable be used. Right now you have to use the produce function, so it's not as convenient, but I'm not
[02:16:34] like the biggest benefit of solids create mutable today is that it can like
[02:16:38] invisibly sneak its way into existing APIs that aren't expecting to be observed.  But I feel like that's a special case.  It's a dangerous thing to just like,
[02:16:48] put proxies into intercept stuff. I think there's probably better patterns.
[02:16:54] Like it makes a lot of assumptions about how the library that you're sneaking it into handles their data.
[02:17:00] Um...
[02:17:01] But in general, yes, mutate.  I mean, all our stores technically are immutable, even if I if they have like an immutable interface on the outside, they do mutate the underlying data, which is more efficient from update standpoint.  And in terms of notification, notifying change, right?  Only the one thing needs to update.  But obviously, like when you do immutable data.
[02:17:23] I made the same example reactive just for the case of showing it.  Create signal, create memo, array, map, doubler, and then
[02:17:30] I copied it and
[02:17:31] The reason I did this is I'm just trying to show that, like, I might write something like this, but in my head,
[02:17:38] I'm picturing like a setter essentially, but fundamentally the same thing's happening, right?
[02:17:45] created an array,
[02:17:47] You map over it, creating another array, which gets stored here. Later on, you clone that array, which triggers this again, which maps over, creates another array and stores it.
[02:17:56] Right?
[02:17:57] We add a new item, we clone the array with a new item, we map over all the items of the array to produce another array.
[02:18:02] This example allocates for a raise by the time we're done. Now, conceptually, we could remove  one of these allocations by not cloning on right, right?
[02:18:09] A lot of people when they're in their frameworks, they'll do something like this, they'll push.
[02:18:13] you know, and then like still tell it the trigger, you know, this is like the old felt like,
[02:18:20] push to the array and then assign the array kind of mentality or  even in react people do this a little bit they'll like push and then set and react doesn't
[02:18:29] necessarily do equality checks on simple stuff. Generally speaking, hooks actually got people thinking about this more. Back in the class component days, the referential equality wasn't really something that we talked about at all, if you remember, and it's largely because of those dependency arrays. But
[02:18:51] regardless people still do stuff like this so there we go we saved
[02:18:55] Cloning one array.
[02:18:56] Thank you.
[02:18:57] And honestly, if you remove the...
[02:18:59] equality check with signals, you can do the same thing.
[02:19:03] We could also remove an allocation by not mapping over the array again.
[02:19:07] Essentially, instead of calling array.map the second time, we know we're only pushing an item at the end, so we can push it and then we can do this.
[02:19:17] It has us writing the code differently though, so like,
[02:19:19] it doesn't work in our set array type example of reactivity,  but I wanted to kind of show like the mentality switch  of going from something that's immutable  to something that's immutable, right?  And we can also avoid...
[02:19:31] allocations here.
[02:19:32] by only storing the final results.  My, my, we could also just say that we only have a doubled array and that we create it  by doubling the values.  And then when we push, we double it.  Like I'm just.
[02:19:42] going from our baseline essentially of
[02:19:46] of like where we start when we think about like doing an immutable operation  to get a double array to like the mutable version, which is
[02:19:55] In a sense,
[02:19:56] a lot more efficient because it's only creating a single array and it's only doing the one change.
[02:20:04] There's no more map function though
[02:20:07] This is the most optimal way probably to write this code.
[02:20:11] but only if you care about final results. If you need the array somewhere else, then you need the intermediate.
[02:20:15] And the other thing you should note is there's no history, there's no previous value.
[02:20:21] We don't need it here, but...
[02:20:23] Um,
[02:20:24] you kind of need explicit knowledge at all points.  Like if you the difference with this is
[02:20:30] If you called
[02:20:31] say, like, set array in two different event handlers.
[02:20:35] the logic of how to handle the stuff is encoded into the graph where
[02:20:40] you know,
[02:20:41] You could you could push something here or add an item.  You could remove an item.  There's all these different operations here.  We've gotten very, very specific where
[02:20:51] We know we're doing a push, you know,
[02:20:53] So like, these are not equivalent.
[02:21:00] Thank you.
[02:21:03] I mean, what do you mean proxy won't be? Because I mean, I'm
[02:21:08] Proxies can be immutable.
[02:21:14] What?
[02:21:15] I mean, sorry, I'm missing something here because we've literally been talking about proxies in terms of stores this whole time.  I'm just establishing.
[02:21:23] immutable change.
[02:21:24] Proxies can be immutable. If proxies are immutable, then we're not gaining anything though because nothing changes. There's no value to the interception, right?
[02:21:34] Like...
[02:21:36] If proxy is immutable, then its value doesn't change, which means we're not tracking anything.  I don't think I quite understand.
[02:21:44] Thank you.
[02:21:45] Okay.
[02:21:49] So anyways, where is it going?  Instead of describing the final, we'd look at, we described the necessary changes to get that output, right?  This is actually less declarative if you think about it, right?
[02:21:56] Okay.
[02:21:57] Often you need to do intermediate value anyways, it's applied to other computations because we need history, provide information about what has changed.
[02:22:03] What I was kind of getting at is,
[02:22:06] this like
[02:22:07] Technically, when you write it this way, you literally can pass any operation here and you don't care, it still works.
[02:22:14] Whereas if we were
[02:22:16] Trying to do that.
[02:22:18] like with a completely mutable example, let's say we're using create projection to project out our store.
[02:22:25] This we'd have to have custom logic inside our projection to know what to do like say when the array length got longer we'd have to know to push on the new element like this example could handle our specific.
[02:22:37] doubler case, right? We could set the array
[02:22:40] you know, we can, you know, push on the one value.
[02:22:44] and then trigger this projection
[02:22:46] which then...
[02:22:48] Would would check and say oh
[02:22:50] There's only one more value. I need a process. And this is perfectly fine grained. It's basically the equivalent
[02:22:56] of what I was showing here.
[02:22:59] with reactivity, but
[02:23:02] If...
[02:23:03] You weren't doing a push if you were doing
[02:23:06] A removal, you need different logic here to handle the different cases, right?
[02:23:13] Thank you.
[02:23:15] Thank you.
[02:23:17] Thank you.
[02:23:18] Basically, it'd be safe to say you basically need a diff to apply derived mutable updates.
[02:23:24] So is this any different than being immutable? Right?  Because like if you're going to bother like
[02:23:28] pushing a diff through them, what are we doing?
[02:23:34] Thank you.
[02:23:42] I think the only difference is that dipfink has a potential stop here. Any additional  changes or derivations will only need to apply to the relevant part of the data rather than the whole thing. If only one  index in our array updates, we don't need to notify things that depend on
[02:23:55] the other, we forked the reactivity stream, right?  So what I'm getting at is that one benefit here is after we
[02:24:01] handle the diff at this point,  or like the specific set of changes,  anything listening to doubled array,
[02:24:07] could
[02:24:08] independently be notified, essentially.
[02:24:11] Like it doesn't need the diff to transfer further down.
[02:24:19] Oh, yeah, yeah, sorry, that's implied. I...
[02:24:24] I'm already like...
[02:24:27] That's the solid 2.0 API, essentially.
[02:24:30] Right. I mean, I guess you don't need a setter. The one reason that I was
[02:24:36] looking at a setter instead of a mutable versus immutable store, um, is that,
[02:24:42] Um...
[02:24:45] the untrackability
[02:24:47] You don't want the settable...
[02:24:50] like there's still a value to having the set
[02:24:52] start as point of time. If you had a settable proxy, you could actually
[02:24:59] split it up and like path part of it down.
[02:25:02] And
[02:25:03] you start getting the same classic immutable versus immutable problems on the setting side. I think it's actually important to have a singular
[02:25:12] function or singular entry point.
[02:25:15] Anyway.
[02:25:16] Um,
[02:25:21] So I can keep going. Templating is a map function, right?
[02:25:25] Um,
[02:25:26] Thank you.
[02:25:27] Basically JSX, when you look at a component, it's a map function.
[02:25:31] put data in and you get JSX out, right?
[02:25:34] Um,
[02:25:36] So...
[02:25:37] Okay.
[02:25:38] .
[02:25:39] This kind of got me thinking about...
[02:25:42] like
[02:25:43] control flow in UI frameworks, right?
[02:25:45] Thank you.
[02:25:46] So it's weird in that
[02:25:48] In my perspective, we have four different control flow components.
[02:25:53] and most JS frameworks don't. Most JS frameworks have like one or like one with two modes
[02:26:00] But Solid itself ships with two.  And then Solid Primitives has a few others,  but like two of them are important for me.  I pulled out my four...
[02:26:09] my for graph again and you can see this right.  Immutable versus mutable keyed versus non keyed and
[02:26:16] kind of
[02:26:20] I'm going to, sorry, zoom this.
[02:26:22] a little bit less so we can get all in one page.
[02:26:28] In solid, these are the names of the operation, but I identified that for optimal operation,
[02:26:34] there are four different types of map functions for UI.
[02:26:48] Yeah, although there's a third dimension for it to mutable and mutable the data inside the array.
[02:26:57] Um...
[02:27:02] maybe, I actually talk about
[02:27:07] each of these as applied to mutable and immutable data. And my assumption in that is that
[02:27:12] Um...
[02:27:14] Because being immutable is being immutable, there isn't actually that much difference.
[02:27:20] because it has to be immutable all the way down.
[02:27:22] And then...
[02:27:23] Once you're mutable, then all bets are off. So I'm not actually sure that's true.
[02:27:31] Yeah, I mean, I do talk about each of these methods.  If you try to apply the other one, like if you
[02:27:36] are talking about something best for key to mutable and you use mutable data.  I do talk about that in this explanation here, but generally speaking,
[02:27:45] these each one is kind of optimized for their space.
[02:27:48] So I'm going to go clockwise around here, starting from here.
[02:27:52] And we'll go through all four really briefly, because I think this is actually really relevant when even talking about how other JavaScript frameworks work.
[02:28:01] because key by index is actually the default in almost
[02:28:05] every JavaScript framework.
[02:28:08] which is like, you know,
[02:28:10] In React, it looks like a map function with no key. In Svelte, it looks like each with no key. In Vue, it's very similar. In Solid, it looks like this index component here.
[02:28:22] Thank you.
[02:28:23] And
[02:28:25] The thing to understand with the key by index or non keyed is essentially if you.  Render some data and create some dom rows. So these are these rows are the dom and this is like the data thing. Initially.
[02:28:38] the data is associated with the row in the DOM. But then if we say shift,
[02:28:42] So like remove the first item in the list.  What a non keyed or key by indexed approach will do is it will
[02:28:50] So
[02:28:51] remove the last element in the array, like the last DOM row,
[02:28:55] and then it will shift up.
[02:28:58] the data. So the thing that was
[02:29:00] Item two is now associated with the Dom and item.
[02:29:04] Sorry, the thing that was item two, which is I guess row the third row here ends up here. This one ends up here.
[02:29:11] essentially, because you remove the first items, you remove this item, and then these just shift up and they get rid of the extra DOM element.
[02:29:19] Um,
[02:29:21] All right.
[02:29:22] This is, as I said, the most common, and basically every framework ships this as the default.  Interestingly enough...
[02:29:28] This is not the default in solid. We don't usually tell people to use index, but this is the probably the most common thing to do.
[02:29:37] In VDOM frameworks, they tend to iterate over the whole list, running all callbacks, and then match up index with the DOM elements when applying the changes.  In reactive frameworks, we tend to cache the map rows and update the row data at the index it has changed.  In solid particular, it's clear what's going on here as the index is constant and the item is a signal.  This is kind of an interesting thing from our API, you can see this, that in solids, you can actually see that the...
[02:29:59] item is
[02:30:00] the signal that can change.
[02:30:01] and the row is constant because if you think about it, when you map over the function the first time,
[02:30:06] or when you add a row.
[02:30:07] You know, that's the only time that callback function is called. So this
[02:30:11] index can never change in the DOM.
[02:30:15] See the blue, green, green, whether you add or remove rows, it will always stay the same.  However, the item associated with that row can change.
[02:30:23] So that's a key point.
[02:30:26] even though it's kind of like backwards thinking of this compared to React's approach,  that is effectively what happens when you key by index.
[02:30:33] Everyone polling so far?
[02:30:36] this is like what happens if you forget to put the key in your Svelte or,  um,
[02:30:41] React component.
[02:30:45] With immutable data, when dealing with immutable data, the list is always updated on any change anyways, which means this map function will always run on any change. The entries at any updated row are new references.
[02:30:55] This means that items that aren't changed versus the previous index don't need to be updated. However, something like our shift operation, while not actually creating any new references, moves the position of the array causing all equality checks to fail. Moving items as new items with this approach, which makes it less optimal for these sorts of operations. What I'm getting at here is...
[02:31:15] Like in solid,
[02:31:16] Thank you.
[02:31:17] So
[02:31:18] and technically, I guess, in React or whoever use it, when you do this,
[02:31:22] operation of shifting, you actually have to go in
[02:31:26] And
[02:31:27] look and go, oh, I need to update all the data associated with this DOM element now.  Because before, you know, name was John.  Now name is James.  Before ID was one, now ID is two.  Like, basically, when you shift it up,
[02:31:41] Like there are operations like changing in place where these aren't
[02:31:45] affected, but say like a shift is a good example. We actually end up
[02:31:50] updating
[02:31:51] all the rows.
[02:31:53] with our immutable data.
[02:31:56] Because with immutable data, even the
[02:31:58] the like if you want to change the name of a user
[02:32:02] Um,
[02:32:03] you need to
[02:32:04] clone the whole array, which means that it will trigger this process.
[02:32:08] One of the benefits here is that...
[02:32:14] Thank you.
[02:32:14] Thank you.
[02:32:15] you sometimes can save on paint. Like if there's a lot of static layout here or like CSS styles based on like row style,
[02:32:21] this can cause less repaints because nothing moves in the DOM.
[02:32:25] just like specific
[02:32:27] data points update, but sometimes it can also be
[02:32:30] like disorienting because
[02:32:32] I mean...
[02:32:34] Visually, it will look...
[02:32:36] to a certain degree, like you just removed the first item.
[02:32:39] Um,
[02:32:40] But from work standpoint, like if something was expanded,
[02:32:44] in the if something was expanded in the in this row, let's pretend you had like this, the details open when you moved it to this DOM element, you actually have to re render the expanded part, like actually create the DOM elements again when you shifted the data up and actually remove this expanded part when this one isn't expanded as it shifts up.
[02:33:02] which kind of gets at the problem which I'll talk about in the next section, but just something to  be aware of why someone might want to use immutable data. The other one would, and then  with mutable data using a dictionary, we don't need to recreate the way if something nested updates,
[02:33:16] Right. Um,
[02:33:18] So we don't always need to run the map function, only array operations that would add or remove items would trigger it.  However, in those cases, since moving the items are seen as new, it isn't a particularly efficient way to do these types of mutable data.
[02:33:28] like because moving stuff around
[02:33:31] is always seen as new.
[02:33:33] Basically, the one place where this is fairly efficient is that if the item hasn't moved,
[02:33:39] you can just like skip these and just update the one row.  But with mutable, you don't even trigger the whole array thing,  because if you're updating a name on a user, it doesn't actually trigger the array process.  So the only operations that are left to do are like the moves.  So this is like generally just not a good.
[02:33:57] thing for like mutable data.
[02:33:59] because it's basically, it doesn't get any of the benefits.
[02:34:03] And it's just...
[02:34:05] Um...
[02:34:07] the few places that it actually triggers, it's less efficient.
[02:34:16] Jopia likes create mutable specifically.  He didn't like the API shape of all the stores,  but technically speaking, our stores have always been mutable  and we've always had them, so.
[02:34:29] Yeah, he just liked the idea of being able to mutate stuff everywhere and no amount of
[02:34:35] Like as much as
[02:34:36] Like I'm talking about these APIs and talking about like
[02:34:41] None of this changes my principles here. I'm still not a big fan of being able to mutate everywhere, so to speak.
[02:34:49] Yeah, it's pizza pants. Well, I haven't even got to what solid is doing yet.
[02:34:54] Right.
[02:34:57] Um...
[02:34:58] But yeah, so you kind of you kind of follow along.  So key takeaways with with key by index or non keyed.
[02:35:05] Item data can change but index is constant.  Best suited for immutable data as any change would cause re-execution anyways.  Best suited if the row data doesn't move
[02:35:13] or is removed, or if it can't establish an identity, i.e. a primitive value.
[02:35:19] I'll show an example of why in a minute.
[02:35:22] Not recommended outside of suitable cases, but sometimes can be performance boost by saving repaints.
[02:35:30] Thank you.
[02:35:32] On projections, projections are a derived store, essentially. They're a mechanism for
[02:35:43] for doing
[02:35:45] derivations dynamically on nested
[02:35:50] fine-grained reactive data structures.
[02:35:56] Anyways, so explicitly keyed.
[02:36:02] This is like when you had the key prop on your component does this.  Now when we remove row zero, row zero actually gets removed.  So in a sense, these might shift up in the DOM.
[02:36:12] but the same data is associated with the same row.  So like if this is expanded and you remove this,  well, this is still expanded.  Like you didn't have to render any new DOM elements,  you didn't have to change anything.
[02:36:22] This keeps the data with its row.
[02:36:29] Oh, yeah. We literally just spent an hour with that article. I mean, I...
[02:36:35] We'll talk about it more throughout the stream, but yeah, I'm the the the key part about it is
[02:36:40] stores are...
[02:36:43] our mutual reactivity is can be very efficient.
[02:36:46] It gives the ability to...
[02:36:48] kind of split the reactive graph again and with
[02:36:51] we're missing a way of doing it in a drive way, which is what we've been working on.
[02:36:59] Thank you.
[02:37:01] Thank you.
[02:37:04] Slightly off topic, as templates are a map function, is it always necessary to convert data types to an array?
[02:37:13] Well, no, I mean, like, I mean...
[02:37:16] I just mean like a map function in
[02:37:18] in general, like
[02:37:20] in
[02:37:21] Like,
[02:37:22] input in thing out.
[02:37:25] Not necessarily like an array map function. I just mean a map callback function.
[02:37:32] When working with that, that would be okay to make an error that means Tom directly or does that break reactive rendering and deeper content.
[02:37:40] Thank you.
[02:37:44] No, I mean, you could definitely support those kind of data structures if it if it makes sense. The biggest challenge is see what's nice about order is what ties these things together, like why I'm showing all these like I love using our shift because it like it shows where things get messy is when you mess with the order of things.
[02:38:09] Um...
[02:38:11] Anyways, KEED is the most recommended approach for most frameworks.
[02:38:16] Many have warnings in their docs or even development environments.  If you use a map without a key, they'll be like, you should be using a key.  Everyone's seen that error in React.  The idea here is that the same row data is always the same UI element, that when you shift a row,  the first DOM element is removed and the others stay unchanged.
[02:38:32] The key thing here is while we pretend UI is a function state, the DOM is a staple itself with form state, focus state, web component state, CSS transitions. So using non-keyed approaches can have severely detrimental side effects if you're moving elements around. You can read more about it here. Yeah.
[02:38:48] This is a classic...
[02:38:51] from the JS Framework benchmark author,
[02:38:53] Stefan Cross.
[02:38:55] But.
[02:38:56] I'm going to link this one here.
[02:38:58] for thing, but he talks about this, but he was showing that
[02:39:03] The difference between keyed and non-keyed is he highlighted a green and then he deleted it.
[02:39:08] But then he's showing that like if he highlighted here,
[02:39:11] And then he added
[02:39:12] like, replace the row.
[02:39:15] like,
[02:39:15] essentially because of like
[02:39:18] Here's another one where he has an animation.
[02:39:21] Thank you.
[02:39:22] Uh, is it the animation...
[02:39:24] Yeah, he's talking about this X.  He has that weird animation where it grows...
[02:39:31] and then deletes and he's showing that it deletes and then it shrinks back down  on the new element that wasn't being deleted.
[02:39:38] See, it switches to 3 midway where this one, when it gets to the full size, deletes.
[02:39:46] Gone, right? It's basically the inherited element when you're non-keyed
[02:39:52] 8
[02:39:53] adopted the state of the DOM.
[02:39:55] And this is the biggest reason why
[02:39:59] everyone frowns on
[02:40:01] on non-key. I give an example about the expansion stuff. Basically, you should almost always avoid
[02:40:08] non-keyed approaches if
[02:40:14] If you're like, if there's like basically any kind of,
[02:40:19] chance of preserving state in the dom.
[02:40:22] And usually it's better when you have things like models, things that are like objects that you're mapping over, like non-permittive values.  Um...
[02:40:30] Anyways, key showed it in
[02:40:34] You can do it like this in React and Svelte.  You add this parentheses.  In solid, there's a primitive, which you can go like key by ID.  It does a similar thing.
[02:40:44] But again,
[02:40:47] Only use key where it makes sense.
[02:40:49] where it establishes an identity. For example, if you had a list of strings and you had an input
[02:40:56] So
[02:40:57] that this is react code here.
[02:41:00] that you basically updated the list. See, I used width.
[02:41:04] but essentially with whatever is currently on the input.
[02:41:07] Can you guys picture what would happen
[02:41:09] if you're keyed by item,
[02:41:11] And every time you type a character,
[02:41:14] you set the the key again.
[02:41:20] Well, this here is a good way of making janky UI. You can also make janky UI if you key by a primitive value and then have like an input that
[02:41:31] that sets the key.
[02:41:33] Yeah, the input re-renders every time so you're but it's an input.  So what happens when it re-renders every time? Well, it
[02:41:40] It loses focus, right? Like
[02:41:45] It's possible in a simple case that like
[02:41:48] React will be able to tell that it's the same element or something. But generally speaking, this is a very good way of like
[02:41:55] like unmounting and mounting an input element and losing focus while you're typing like each character.  I've had reports like this before. It's pretty funny.
[02:42:07] Thank you.
[02:42:08] Thank you.
[02:42:09] This is a case where it doesn't make sense of the key.  If literally all you have is strings,
[02:42:17] Thank you.
[02:42:19] Thank you.
[02:42:20] Thank you.
[02:42:21] Anyway, if all you have is strings and array, it doesn't make sense to
[02:42:31] use a key thing. This is like the one exception, right?
[02:42:34] Anyways, as with non-keyed, any change will lead to
[02:42:37] this routine running but with keys the number of map callbacks in the update can reduce this. My benefit might be more obvious with signals as moving a row only requires an index change if the row isn't listening. Yeah, one of the things might be interesting here is if you notice in the solid version,
[02:42:52] both the index
[02:42:53] and the item have the potential changing. They're both signals, unlike the previous one. Right?
[02:42:59] One benefit is that when references are completely lost, like fresh data from the server, this approach has a key to match it on. So while row callback and signals all update if the server change, also move rows around the...
[02:43:11] Also moved rows around the overall differences in values should be kept minimal. Yeah.
[02:43:15] Um...
[02:43:17] Yeah, it's interesting. This is basically a shallow diff for all intents purposes. So there is some value there because it actually is diffing against something explicit.
[02:43:30] With mutable data, again, nested updates don't require this routine to run.
[02:43:36] But for but for the you know, so if you update like the name on a user, then it's not going to run this. But
[02:43:42] You know, for...
[02:43:45] Thank you.
[02:43:46] For other changes, this is pretty good because you don't lose references.  Like if the key is the same, it stays with the DOM.  You don't have to worry about re-rendering.  So this is a pretty good choice for mutable data.
[02:43:59] Um,
[02:44:00] The immutable nature of the item with the same identity have the same references, so the extra check only beneficial if the reference is somehow lost, maybe fresh data from the server.  But for that to happen, then all downstream reactivity needed to be replaced, basically state you never want to be in.  So the one downside of using keyed for immutable data is...
[02:44:16] In any situation in which...
[02:44:20] the key would match.
[02:44:22] but the reference wouldn't like you have a different object
[02:44:26] you would have had to recreate all the reactivity, like nested reactivity for that object anyways.
[02:44:31] So it's not really a place you want to be at.  Basically, what I'm saying is, while this is better than non-keyed, for mutable data, if you think about it,
[02:44:39] it doesn't even need an ID because the references are stable. You don't want to recreate all the nested signals essentially.
[02:44:46] It doesn't make sense.
[02:44:48] to need a key.
[02:44:54] React is immutable to keep the old values  in a concurrent rendering sense. How does mutating the values  not cause issues as small as the spend?  Well, we use the same trick. Every signal  is immutable, so  we do keep the previous value around.  We just do it at a hyper granular level.
[02:45:10] So essentially, instead of like, they're like, look, we have
[02:45:16] the old value of like, and we have that previous value already anyway, because every signal has
[02:45:22] you know, the ability to have the previous value kind of passed in.  So we just
[02:45:28] instead of like
[02:45:29] having like the previous tree or whatever. We just have the
[02:45:33] previous version of every single signal on the page.  So we actually fork the graph.
[02:45:39] essentially, and then merge it back together. It's almost the exact same concept, except it's done at a more granular level. It's like done at a data level instead of like a component tree level.
[02:45:53] Anyway.
[02:45:56] Thank you.
[02:45:57] Thank you.
[02:46:05] Doing it with stores was a little bit more tricky, but it essentially is the same idea.
[02:46:15] So take away item data and index can change. Best to do for immutable data as any change would cause re-execution anyways. Best to do for most non-permative situations. So this is a good thing and to be fair, now we're done. Most frameworks, even Svelte 5, I believe, this is all they ship with. Solid has...
[02:46:31] two more mapping functions. First, we have four, which is our primary one. This is our default one.
[02:46:39] this is the one that we tell everyone to use essentially, which is
[02:46:43] actually in the mutable keyed side.
[02:46:46] So I don't have anyone else to show for this because this, to my knowledge, doesn't exist in any other framework. It probably does by now, but in terms of the major frameworks, they don't have this control flow.
[02:46:58] What I started realizing is that mutable
[02:47:03] is mostly an optimization here.  This method works very similar to explicit keys,  but relies on the fact that nested reactivity  keeps references.  And so you can see the index of the signal,  but the items is constant.  This approach, so if you try and use forward immutable data,
[02:47:18] It works very similar to having explicit keys.  Any change will cause the item reference to no longer match,  so it recreates it.  The one gap here is if you lose references,
[02:47:26] there's no explicit key to fall back on.  So this isn't great for data coming from the server.
[02:47:31] And, you know, it will always recreate rows.
[02:47:34] So,
[02:47:35] Like.
[02:47:37] It's not amazing for immutable data because essentially
[02:47:42] it's less granular. If it's mutable and you update a name,  you don't need to rerun the row here with the mutable data. It won't
[02:47:50] rerun the other rows, but it'll rerun that row.
[02:47:53] which makes it worse than, say,
[02:47:57] keyed with signals because with keyed,
[02:47:59] with signals, you just pass the new date. You don't rerun the callback function.
[02:48:03] You just pass in the new data.
[02:48:05] So it'll only update those locations with four,
[02:48:10] Item is not a signal, only index is a signal.
[02:48:14] You start, this is actually kind of a funny,
[02:48:17] comparisons you go around the table because we started with with index where index is a constant and item was a signal then we went to keyed where they're both signals and now we're at four which is the opposite where index is a single item is not a signal like it's it's kind of funny as we move around but yes this is not actually great
[02:48:39] Um,
[02:48:40] for nested immutable data, because it actually would recreate the row, essentially, were you to set a new object completely.
[02:48:52] I'm not sure.
[02:48:53] Um,
[02:48:55] it's not terrible for simple things,  but it's,  it's not actually the most optimal approach.  Um,
[02:49:02] for
[02:49:03] for immutable data. For mutable data,
[02:49:06] This is similar to Keat, except it removes...
[02:49:09] any
[02:49:10] a necessary signal reference that has the slimmest syntax so far. So you don't have to worry about keys. In cases where the row doesn't depend on an index, no rows or signals are needed to be updated on any change from the perspective of the map function. Yeah.
[02:49:22] So think about it.  If you don't use...
[02:49:24] the index
[02:49:26] here. And this is why if you see Solids Map Array, we don't actually create these signals if you don't
[02:49:32] past this, like take a second argument. We don't actually need to create any per row
[02:49:37] like signals for this operation. The only thing that this does
[02:49:44] with mutable data. It's just move the rows
[02:49:48] around and if you don't care about where it moves to, we don't have to update any signals. It's just a way of telling the Dom like, okay, move this row here, move this here. All the updates per row are completely fine grained. They won't even trigger the map function. This is part of what makes this so powerful, right? If you
[02:50:06] always assumed immutable data, you would never make this
[02:50:10] component, but with mutable data,
[02:50:13] This doesn't need
[02:50:15] to even run most of the time.
[02:50:18] It's add, remove, move operations. If you update anything else,
[02:50:22] Um...
[02:50:25] you know, nothing else needs to update.  And even with those move operations, you don't even need to
[02:50:30] like,
[02:50:31] update anything in here.
[02:50:34] which is super powerful.
[02:50:38] So, item data is constant but index can change. Best suited for mutable data changes as it removes unnecessary overhead. Best suited for non-permative situations.
[02:50:47] Okay.
[02:50:50] Right. And then it's the last one. I originally wrote this a few years ago.
[02:50:55] I was making a 3D demo.
[02:50:57] Um,
[02:50:59] You guys might have seen this one before.
[02:51:02] And I came across
[02:51:05] this, uh, this problem.
[02:51:10] Anyone seen this demo before?
[02:51:14] The idea is you could bring up the number of blocks to the
[02:51:19] like the craziness and you could still have super good performance in some frameworks, not in others.  And this was originally a demo to show off how good React concurrency was, but then Svelte came out and actually absolutely demolished it.
[02:51:32] And then the solid version came out and absolutely demolished Svelte and
[02:51:36] But anyway...
[02:51:39] Thank you.
[02:51:41] Yeah.
[02:51:44] Yeah, like this is getting locked by my screen, like my screen FPS.
[02:51:49] Like...
[02:51:52] Anyway.
[02:51:57] The key for this was I designed a new control flow.
[02:52:01] component.
[02:52:06] Nah, this was before Million was created. This was like, this is the reason I joined Twitter.
[02:52:14] It's funny because I just signed on to Blue Sky for the first time in over a year just to check it out today.  But I was kind of dragging my feet.  Twitter, I didn't join Twitter until...
[02:52:25] like 2020 essentially like it was like December 2019 and it was because
[02:52:30] It's...
[02:52:31] Someone had built this demo and they're like, "Show Solids the fastest."
[02:52:35] Um,
[02:52:37] So that's what I did.
[02:52:39] And, um,
[02:52:41] .
[02:52:42] Yeah, so this is a couple years before Millionaire.
[02:52:48] Thank you.
[02:52:50] Yeah, this is my screen sync rate that's keeping it
[02:52:56] at 120 when I was getting at it's the
[02:52:58] You know how like...
[02:53:00] Like...
[02:53:02] Like, it's odd that
[02:53:04] It's odd that like
[02:53:06] I think it's my screen unless we set like a maybe we set a limit in here somewhere.  I can't remember. But yeah, 98 is not going to be the same as.
[02:53:15] Like we don't drop off 120.
[02:53:17] Until...
[02:53:19] until we were at about
[02:53:20] $3,500?
[02:53:23] Blocks.
[02:53:25] So you'd think these would be way faster.
[02:53:28] But even at 10,000, we're still at 40 FPS here.
[02:53:34] Yeah, Vsync, yeah, exactly.
[02:53:42] Yeah, I think Svelte 5 would probably be a lot faster now.
[02:53:47] Yeah.
[02:53:49] You might even want to look at Rich's original implementation.
[02:53:53] Because he...
[02:53:55] He, uh...
[02:53:56] He did a really great one there too, which inspired this one, to be fair.
[02:54:02] But yeah, let me share this.
[02:54:09] To be fair, this isn't using the key part about this is this is not using solid.
[02:54:14] This is using 3GIS, but this is not using Solid 3.  This is built...
[02:54:20] This is a joke. This is not actual  solid three. This is like
[02:54:25] What I... This is like, what could we write in...
[02:54:29] 70 lines, right?
[02:54:32] Like this, we actually, there's actually a solid three library.
[02:54:39] Yeah.
[02:54:41] Thank you.
[02:54:45] So anyways, it's not that important.  The key for me was this actually was where I first implemented the first repeat.
[02:54:56] um, operator, which is different. It's funny. View has a repeat operator and knockout did too, but it doesn't work like this.
[02:55:04] Um...
[02:55:07] Yeah.
[02:55:11] Yeah, I think that's one of the, this is actually a really good point.  I think this was one of the cool things about like the abstraction.  It was really easy for us to do these kinds of experiments early days because they can in solid, like, unless you use lowercase tags, you're not actually using any DOM APIs.  So like you can build these abstractions even before we had the universal render really trivially, because we had no real concept of components or just like functions.  So like, you could just like do whatever you want in the function and then like.
[02:55:37] Ta-da, component, you know? So...
[02:55:39] It made these demos work really easy.
[02:55:44] Oh, I get, I'm funded by, I'm very proud to say this, I'm funded by Sentry.
[02:55:51] I and previously I worked at Netlify both companies have helped me they actually hired me with the knowledge that I would be working on this stuff.  Um.
[02:56:01] full-time that was like the that was the plan so
[02:56:05] Um.
[02:56:06] Yeah, I've been one of the few people fortunate enough to get paid to work on what I work on.
[02:56:16] Anyway, how does repeat work?
[02:56:23] Thank you.
[02:56:26] it just puts a count in on the length.  And something occurred to me a while back that this is...
[02:56:34] kind of
[02:56:35] The craziest thing about non-keyed with mutable data
[02:56:38] is it turns back into
[02:56:41] Um...
[02:56:42] basically the object...
[02:56:44] like fine-grained thing. I don't know if you'd want to do here, but if you think about it, this doesn't even take the list because it's not, it's keyed by index, it's not keyed by the list, so it doesn't need anything, there's no references, it doesn't need the list. And
[02:56:59] There.
[02:57:00] And what it does is it returns a constant value.
[02:57:05] Right. So this just repeats the thing.  And for a lot of times, people just don't even do this.  They just like they don't need the index because like it doesn't matter.  And they just repeat the item like.
[02:57:14] a thousand times.
[02:57:15] But
[02:57:17] The key here is
[02:57:19] is, is,
[02:57:20] is
[02:57:22] how this works with immutable data that's control flow it's like you could just replace index right  but there's one there's one important difference
[02:57:28] Without nested reactivity proxies, the above looks more like this. See how we're calling a function here?
[02:57:34] For the list,
[02:57:36] And the problem with this is whenever you update the list and it's immutable, you have to literally update every single row.
[02:57:41] Right.
[02:57:42] So while it's convenient that as you add the rows, it just fills them in and then you remove them,
[02:57:48] you know, it just removes them. And if you move them, it just, you know, essentially moves the data around because
[02:57:54] This is the data. It's whatever you access. It doesn't need to even pass it through. The problem is every change essentially causes every row to update. So this is the worst.
[02:58:04] possible, probably immutable thing. The difference with index is index does a diff for you
[02:58:10] Essentially, it's a basic diff, but if we go all the way back here, it passes you the specific items. So it knows it only calls the rows where the item has actually changed.
[02:58:21] So if you're doing immutable data, it's like, okay,
[02:58:23] This row is changed. I'm going to update just this row.
[02:58:28] But...
[02:58:29] And it over-updates when you shift stuff.  But the difference with repeat is...
[02:58:36] When you're doing immutable data, it's like hitting all of it.
[02:58:39] Right. But.
[02:58:41] The opposite is true. With mutable data,
[02:58:44] It doesn't need the diff at all.
[02:58:46] it doesn't need signal to be provided as a store already has one, right?  The store is the signal. The index is constant.  This differs from four where we need to project an index signal over the map.  So basically, unless the length of the array changes, the map function here doesn't need to do any work.  It isn't even responsible for moves.  It just handles additions and removals much more optimally than using index.  What I'm getting at here is if you think about it, if you swap two items in the list,
[02:59:11] Only those two items will notify here.
[02:59:16] If you go replace 0 with 1,
[02:59:21] then only those two rows need to, like, it only listens to those two rows. It doesn't need to rerun
[02:59:27] the repeat it doesn't need to rerun any of the other rows.
[02:59:30] If you, you know, if you update a nested item, well, then it's not even here.  Something inside will update.  So it's like essentially.
[02:59:40] because it's,  this is constant.  And,
[02:59:44] Like the index doesn't change?
[02:59:46] So
[02:59:48] Like if you add a row, it's just going to go, OK, run one more of the map function.
[02:59:52] If you remove a row,
[02:59:53] or remove two rows, even if it's the first row, it's just going to remove the last row and shift all of these
[03:00:00] you know, conceivably up, right?  Because that's how non
[03:00:03] Eid works. But what's
[03:00:06] crazy about it is
[03:00:10] you never actually need to pass a list to it. So this this is
[03:00:13] a much more optimal approach. Because again it doesn't need to create any signals.
[03:00:18] In the same way that
[03:00:20] This doesn't need to create any signals if you don't listen to the index.
[03:00:24] Right.
[03:00:25] So...
[03:00:27] It's interesting.
[03:00:36] No, I mean Netlify didn't use solid very much either. I mean there's a few little things but it's...
[03:00:44] I've been trying to, you know, at different points, I've been like trying to reconcile like why I get employed. And I think, I think,
[03:00:52] The work that we're doing with Solid, the stuff that we cover on the streams is
[03:00:56] I guess important enough
[03:00:58] Um,
[03:00:59] for exploring the space of what's possible
[03:01:03] Um...
[03:01:05] the impact that solids had on the wider ecosystem
[03:01:10] is much
[03:01:12] larger than our adoption numbers would be.
[03:01:15] would
[03:01:17] would, um...
[03:01:18] Um,
[03:01:20] would show, so to speak. It's kind of a funny thing. You know, people keep on, I've had a conversation, people, or I was on some Reddit and someone's like, blah, blah, blah, you know, this blank, you know, solid, no one uses blah, blah, blah. But it's like,
[03:01:33] or
[03:01:34] is solid what everyone uses.
[03:01:36] Thank you.
[03:01:37] They just don't know it.
[03:01:38] Anyway.
[03:01:40] Thank you.
[03:01:41] Thank you.
[03:01:44] you
[03:01:46] Thank you.
[03:01:47] Thank you.
[03:01:48] Thank you.
[03:01:51] Anyway, my point is...
[03:01:55] Index the cons if items data isn't required. Best suited for mutable changes as inefficient for mutable data. Best suited if the row data doesn't move or is
[03:02:03] or is removed, or if it can't establish a primitive, not reference outside a suitable case.  Basically, all the things about index are true.  This is just...
[03:02:11] with like for mutable data, much more optimal.
[03:02:18] So, concluding thoughts on this control. So, it might be awkward that there are four different methods. This only increased by the fact that
[03:02:24] in terms of algorithmic, uh, efficiently favors mutable and non-keyed, generally speaking, like
[03:02:29] This is definitely the cheapest.
[03:02:31] Right.
[03:02:32] Um,
[03:02:34] It's possible to combine all but repeat realistically  into the same syntax with configuration,  but does that reduce cognitive overhead?  It also begs the question,
[03:02:43] are all operations equally split, like four
[03:02:46] different ways. Like if we have this graph, you know, where we have mutable versus mutable, we
[03:02:51] Will we have four different versions
[03:02:53] a filter or reduce like
[03:02:55] Will we...
[03:02:57] Like,
[03:02:58] Will we have one best for keying or like, is it going to be something similar in the other operators?
[03:03:05] It's interesting question.
[03:03:08] Thank you.
[03:03:10] Thank you.
[03:03:14] Thank you.
[03:03:15] Yeah, I guess that's the thing.
[03:03:19] Huh.
[03:03:20] Singles and Angular, yeah.
[03:03:22] and many great people on the Angular team.
[03:03:25] Um.
[03:03:28] So,
[03:03:32] Again, I hope you guys are still with me. I'm going to continue. Because I started looking at other stuff. I was like, "Well, let's do reduce." Because reduce is like the super operator.
[03:03:40] So I started the same way that I started with map, where I'm like, OK, what if we have a sum accumulator? Right.  And then we take an array.
[03:03:49] And I started trying to do that same
[03:03:53] thing of where we reduced it from a
[03:03:55] immutable thing to immutable thing in a generic way.
[03:03:59] And I just, I just, I just, I, I just stop almost immediately.  There's a huge problem with reduce and it's this accumulator.
[03:04:05] Because...
[03:04:06] Suddenly...
[03:04:08] E
[03:04:09] Like,
[03:04:11] Like obviously with some we can solve this specifically.
[03:04:17] you know, maybe if we could like
[03:04:19] have a way of reversing things like the problem like obviously with the push it's very easy to just add the last number but you start going like do things get weird if you like replace a number in the middle
[03:04:31] Um,
[03:04:32] What do I say here?
[03:04:35] What appears to me right away is that the final value can't be calculated without running through the whole list.  The accumulator suggests orders matters too. Yeah.  With map, you could always run an individual thing, but with reduce...
[03:04:46] you kind of have to
[03:04:48] run everything like how do I get the sum without having the previous sum like now specifically some  operator actually being off to the point could reverse or apply new ground change but this sort  of reversal always isn't always possible and it smells that we don't have a generalizable solution  we can't make the assumption about reducing general at minimum we need to run all the rows  after the change since the accumulator could affect downstream calculations but to do this we need to  store the accumulator at each step which is fine for primitive values or mutable accumulators but
[03:05:18] What I'm saying here is like,
[03:05:19] If you want to start at an arbitrary place like index, like if the changes on the second index,
[03:05:25] You don't need to run the first index if you cache the value from that accumulator and then ran everything.
[03:05:33] down again, but this only works
[03:05:35] if the accumulator itself is immutable or like a primitive value,  which is immutable. And if you store each,
[03:05:43] Bro, like each...
[03:05:45] you have n elements in array, you have n stored accumulators.
[03:05:58] Thank you.
[03:06:00] Yeah, exactly. This is what I'm getting at.
[03:06:06] Thank you.
[03:06:10] Thank you.
[03:06:11] Thank you.
[03:06:12] At some point it has to sum all the results, yes, exactly.
[03:06:20] Thank you.
[03:06:25] At minimum, yeah, okay, blah, blah, blah.  So you have to stop and consider what you're optimizing for at this point.
[03:06:35] Is it the iteration of the callback or the final output?  The reason we care so much about mapping  is because the mapping itself is expensive,  but here it isn't so clear.  If we're reducing to a single value,  the rendering at the end isn't going to be the expensive part,  but the calculation, but more expensive
[03:06:49] but is that more expensive than holding all the subresults in memory and immutably cloning it?
[03:06:56] Thank you.
[03:06:57] Yeah, yeah, yeah, yeah. In some specifically, we can solve this. I'm just...
[03:07:04] I'm
[03:07:07] Right, right. This is the thing where we start getting to categorizations here, right? But we also have to ask ourselves what we were actually saving.
[03:07:20] Yeah, yeah, yeah, yeah, exactly. If you're always changing the first value, then you're doing the most work because you have to reaccumulate all the way along and you're like,
[03:07:29] At a certain point, this
[03:07:31] the
[03:07:32] like the general solution I'm thinking about is probably worse than just running it, right? This is always a risk.
[03:07:41] Okay.
[03:07:42] I think we should look at categorizing solutions. What makes map work pretty well and reduce not so well? Map is isolated one-to-one, which means that granular changes are trivial. Reduce has no such guarantees. Now, if we were mapping one-to-one, then maybe it could, but that is only a subset of potential operations, right? So I had a funny example here where I was like, what if we...
[03:08:02] did like a normalization step where you took the ID of an object in an array and you accumulated it, right? This is basically mapping an array to an object.
[03:08:10] but each goes in its own lane, right?
[03:08:13] Right. And basically showed like with our
[03:08:16] like our previous example where the map function we could basically
[03:08:20] do the exact same thing that I did last time where I
[03:08:24] called the method for each Ray member, and then when I added the new one, right?
[03:08:29] So like.
[03:08:30] This is...
[03:08:32] Admittedly, this would only be interesting if ID changed.
[03:08:34] as it's acting as the key here. That's true. If ID doesn't change, there's no real benefit to this whole thing.
[03:08:42] Mm-hmm.
[03:08:44] Otherwise, nested updates could easily take care of that. This is an example that wouldn't have the same overhead, but also the work the accumulator is doing is hardly expensive. Still, it could listen to array changes, change against the existing keys, and only assign and remove the necessary entries.
[03:08:58] So that's two examples. We have sum and normalize where the general reduce operation would be less optimal than the specific solution. And I suspect
[03:09:06] that this be true in most cases.  The accumulator API makes optimizations hard to generalize.  We've looked at this
[03:09:12] as one-to-one, like with our map function or normalize, and as many-to-one with our sum.
[03:09:18] which leaves many to many, the simplest many to many doesn't combine rows  and happens to be another operator, which is filter, right?  I might be passing by this one too quick, but what I'm trying to get at is
[03:09:30] It feels like there isn't something generalizable here because every time you like,
[03:09:35] get into a certain category of problem
[03:09:37] you basically can find a more optimal solution than the general form.
[03:09:42] Thank you.
[03:09:45] And
[03:09:47] Again,
[03:09:49] What I'm trying to determine is how much of the solution deserves in the reactivity space or just should we use a
[03:09:55] Typical.
[03:09:57] mechanisms for optimizing it, like memoizing calculations and stuff.  Like, should this have anything to do with reactivity?  That's the question I'm asking ourselves here, right?
[03:10:05] So I looked at filter.
[03:10:07] Thank you.
[03:10:08] The first automation can be filtered returns the same results not to notify downstream.
[03:10:13] Mind you, that's the most trivial case for map to handle.  What I mean is like a downstream map, if it gets this
[03:10:18] a different array, the first thing it's going to do is just go through all the elements and see that they're the same and pass on. There's cost to that though, but I'm just saying it's not...
[03:10:27] the most expensive thing.
[03:10:30] Another potential optimization would be the only
[03:10:33] all the callback functions impacted by reactive changes that would rerun.
[03:10:36] It's interesting because generally we don't track callbacks in our control flow operators.
[03:10:41] Right. So what I'm getting at is
[03:10:43] Um,
[03:10:45] If I was making a generic reactive helper here, I wouldn't actually track this usually. We track the array
[03:10:53] like almost like an immutable sense,  but we don't actually track the,  like the sub statement.
[03:10:58] Um...
[03:11:00] you
[03:11:01] That's it.
[03:11:02] So does it make sense to like trigger stuff independently from this expression?
[03:11:07] If the filter condition changes, then all rows would need to
[03:11:10] re-execute. So what I'm saying is if we change from calculating isOdd versus isEven,
[03:11:16] I don't think we get any benefit. Like if this tracking could change this logic from like not equal zero to equal zero, do you know what I mean?
[03:11:25] If that was what was reactively being controlled,
[03:11:29] We don't get any...
[03:11:31] benefit.
[03:11:33] to
[03:11:34] this tracking versus just like re-running the whole array because you have to rerun it anyways.
[03:11:40] If we...
[03:11:43] So our only real value is if the individual value changes.  So let's say like someone...
[03:11:48] changes
[03:11:50] So,
[03:11:52] you know,
[03:11:53] three to four, for example.
[03:11:55] then in theory we could only run that one row.
[03:11:58] Right.
[03:12:01] This is only a consideration with nested mutable reactive data, as immutable data would always replace the whole source anyways. That's a good point.
[03:12:08] Um,
[03:12:10] So...
[03:12:11] Yeah, I mean, this...
[03:12:12] Like, I'm...
[03:12:14] If a change is found, then we produced a new array and notified downstream.  If nothing changed, then the optimization would be present.  The problem is we're still sending down the new array.
[03:12:22] in the filter operation. So like the next thing down the line
[03:12:26] isn't benefiting from this. This is a little bit different than our map case
[03:12:30] Because the map is kind of like...
[03:12:33] our projection, it's spreading it out. It's kind of the end of the line. This is
[03:12:37] probably with the intention of
[03:12:39] feeding into the next thing.
[03:12:43] So like it starts asking this question:
[03:12:46] With filter, is the callback function ever the expensive part?
[03:12:53] You want to reduce downstream work. Instrasting filter always results in a whole new array updating because it's always an add or remove operation.
[03:13:01] So there is potential little to gain from optimizing filter when put against the overhead of bookkeeping.  Yeah.
[03:13:08] Right? Like what I'm getting at here is like,
[03:13:12] Thank you.
[03:13:14] You can find ways to optimize it not notifying when like nothing's changed.  But as soon as you change, you have to
[03:13:20] Basically...
[03:13:21] doing an array operation downstream.
[03:13:25] So where can we get benefit? Unless we can communicate in a diff, right? That's really the only thing left. If we can say like, oh, we only added something to the end of the array.
[03:13:35] rather than communicate the ray.
[03:13:37] That's like...
[03:13:38] We're kind of doing full circle here on the Signia thing, right?
[03:13:42] Um,
[03:13:43] Like it feels like filter is,
[03:13:45] basically innately.
[03:13:47] Thank you.
[03:13:49] an immutable operation.
[03:13:55] - Yeah.
[03:13:58] If you know which elements changed, can't you untrack all the other elements when reducing?
[03:14:09] Thank you.
[03:14:11] I don't think that gains us anything.
[03:14:17] we track so that we can granularly only update the things that we need to update so it's important
[03:14:23] would track everything perceptually in this case because we'd want to
[03:14:27] know if any value changed so that we can make a decision on
[03:14:31] when to...
[03:14:32] Update the filter next.
[03:14:35] Um...
[03:14:36] The tricky part is like,
[03:14:39] What you want to be able to do is basically say, no, don't run these other, like basically all you're doing here is saving running this callback in some cases.
[03:14:46] So if you have a thousand rows, maybe you can know only to run this callback on two rows instead of a thousand rows.  But the thing is.
[03:14:53] If
[03:14:54] I
[03:14:55] either of those results in the change are still going to now pass in the 98 rows down the line.
[03:15:02] which which then will
[03:15:05] you know,
[03:15:06] be where the more expensive work is happening, I guess.
[03:15:10] Oh, the reduce operations, sorry, I'm way behind.
[03:15:19] Okay.
[03:15:21] Thank you.
[03:15:23] Thank you.
[03:15:25] Well, I mean, maybe you could use generators, but what I'm getting at here is like we're talking about
[03:15:31] basically
[03:15:33] Yeah, I mean,
[03:15:34] If the tie is fixed, you could use like a...
[03:15:38] kind of like
[03:15:39] generator
[03:15:41] way of pulling it through, so to speak.
[03:15:44] But I mean,
[03:15:47] it's the diffs you want to communicate in, right? Like,
[03:15:49] Regardless of the mechanism of the linking...
[03:15:53] Right. Generators are poll based. Signals are poll based.
[03:15:59] Right? Like, I don't think this actually changes all of much, right? We need, like, the key here is,
[03:16:10] Is there any place to optimize?
[03:16:14] Thank you.
[03:16:15] Thank you.
[03:16:18] I'm not talking about optimization you can compile it.  This is all runtime.
[03:16:21] runtime mechanisms here that I'm talking about.
[03:16:26] So this brings us back to our math function.
[03:16:29] Our map function already does a shall diff, so we have to put that up against additionally supporting detecting changes in serialization.  Basically, we're in this zone now where we can basically have the filter communicate what's changed,
[03:16:40] But then we need something on the other side to be able to
[03:16:43] Accepted and one of the funniest things I did a test a while back and found it didn't make a meaningful difference in the JS framework benchmark  I think this might be worth spending time in the future again, but I
[03:16:52] To date, I haven't seen this work well, in the same way that adding the second map function that solves rendering didn't make a meaningful difference.
[03:16:58] I think I might have started this article by telling a story about how Solid used to do
[03:17:04] are
[03:17:05] map function right in the DOM. We didn't have four, we had a compiled four component that literally
[03:17:10] like just updated the dom directly.
[03:17:13] And when I changed it to using 4, I actually pulled it out.
[03:17:17] And then there's a separate reconcile for the DOM.  And because of some of the implications that happen there and general overhead, it didn't actually...
[03:17:25] make
[03:17:26] a difference, so it actually got faster after I made that change, and then
[03:17:30] I tried doing stuff where I'd like
[03:17:32] put
[03:17:33] Um...
[03:17:35] like hints from when four ran and communicate it through.  So like a perfect example is like when you provide a new list,
[03:17:44] Right.
[03:17:45] If no items in the list are shared,
[03:17:48] you can do a much quicker thing.  You don't have to check all the items of the list.  You just clear them and create them.
[03:17:52] So I was thinking, okay, well, if solid's four component,
[03:17:55] is doing a basic diff here, it would know if none of the items changed. So like in the benchmark,  when you have the replace rows benchmark, we essentially could have the four communicate to the
[03:18:05] You don't have to diff here, like literally just wipe them out and replace them.
[03:18:08] And I did that change.
[03:18:10] and it didn't actually improve performance scores at all.
[03:18:13] Um...
[03:18:15] Which is kind of crazy. Like...
[03:18:18] A simple shallow diff was
[03:18:20] not significantly more expensive.
[03:18:23] Thank you.
[03:18:24] Um,
[03:18:25] Only the same things get mapped out, but it's a matter of saving iterations to shallow reference check. The only real savings here is if we could cache the mapped version between filter changes, but that isn't something that feels like it can be done reasonably automatically.
[03:18:35] Maybe weak maps and off screen.  Basically, there's always going to be a cost of keeping things around unless we know we can keep it around.  We can make versions that do that today, but, you know, it probably needs to be deliberate.
[03:18:44] What am I saying? Topics large, interesting to see mutable reactivity lead to new ways of types of optimization. But I think at least as of today, we are constantly be moving to an immutable and immutable world where there are clear locations for optimizations and others that are more specific. Coming up with general tools here is going to take some time. There's still a lot of optimization that comes on mutable reactivity, even with immutable helpers, because they don't need to run in as many places. Map is by far the most important one and handles, I imagine, the vast majority of cases. But I feel there's a couple more big realizations to have here before we get this all released.
[03:19:14] Thank you.
[03:19:15] Basically, what I'm getting at here is like,
[03:19:19] Generally speaking...
[03:19:21] the big benefits are not doing the rendering, right? So like,
[03:19:26] virtualization type techniques are probably more
[03:19:29] powerful
[03:19:31] then
[03:19:32] these granular...
[03:19:34] things like I was trying to think of it like map,
[03:19:38] we need so we hit this i'm not sure if i will be making a optimized
[03:19:43] filter
[03:19:44] or reduce any time soon because it seems like each of these operations can benefit from a specific
[03:19:51] type of
[03:19:52] pattern. I suspect a lot of these could be built on top of create projection.
[03:19:57] but it's to solve specific problems.
[03:19:59] cases or specific operations.
[03:20:02] I think this is the world that we kind of go into here where, um,
[03:20:07] It's
[03:20:08] there's always the simple immutable
[03:20:10] way, which is inefficient.
[03:20:13] And then
[03:20:14] Mutable updates are all specifically optimizable based on the specific type of operation they do.  That's sort of where I'm landing here.
[03:20:23] Makes sense.
[03:20:24] Hopefully.
[03:20:26] Okay.
[03:20:27] Got...
[03:20:29] Another one.
[03:20:32] Thank you.
[03:20:33] Are you guys still with me? I know this is heavy.
[03:20:42] because it's going away.  It's going to be replaced with something else.
[03:20:48] This is the hardest problem with doing create async.
[03:20:52] I was hoping...
[03:20:54] that
[03:20:57] We could get far enough, like in the remix sort of sense of the word, you know, where you like provide an API that's like overly simplistic, they get you like 90% of the way and like not worry about the rest until 2.0 came out when we'd actually fill in the missing pieces. It's I've been trying to avoid adding back the things that I know are going away.
[03:21:16] Thank you.
[03:21:17] Thank you.
[03:21:18] Um
[03:21:20] So that's not a great answer. It's just...
[03:21:25] *breath*
[03:21:27] there's going to be something equivalent, but...
[03:21:33] Like the 90% case should be using suspense.
[03:21:39] Maybe the 95% case should be using suspense.
[03:21:43] So it's like...
[03:21:45] The biggest reason you want to use
[03:21:47] loading is so that you can
[03:21:50] basically have a mechanism for
[03:21:53] showing
[03:21:56] like kind of like breaking out of transactions.
[03:21:59] or transitions.
[03:22:01] Essentially, it's like using deferred value in...
[03:22:04] in React.
[03:22:06] Using it just to be like, here's my app switch statement loading error data is not the way resources were ever intended to be used.  And I apologize for the API that made people think that that's the way it should work.
[03:22:20] like create resource added these properties for different reasons.  And then people were like, oh, it's react query.  And it's like, no, that's that's not really what it should be doing.
[03:22:33] We need to expose this capability, but not for the reason that people think
[03:22:38] They want it.
[03:22:41] So it's just a bad API design.
[03:22:46] Okay.
[03:22:51] You can use create resource with a little bit of work. I mean, I ended up forwarding latest. It's arguable that I should just forward loading and bite the bullet for now.
[03:23:04] Yeah, it's visually useful to highlight stale data.
[03:23:10] When...
[03:23:11] using
[03:23:13] transactions basically.
[03:23:16] Right.
[03:23:19] Like, it...
[03:23:21] .
[03:23:24] Like,
[03:23:25] You can use suspense, but suspense
[03:23:28] on mounts. So the idea is you use transactions
[03:23:31] Thank you.
[03:23:34] And then you can use is pending from the transaction to show the still data.  But there's times that you, the trick is with loading, you can compare the load
[03:23:44] You can basically...
[03:23:47] Flip it.
[03:23:49] around to escape out of it. There are use cases for it.
[03:23:56] Yes, exactly. And I add the latest back kind of begrudgingly because again, it's also not going to be there in the same way.
[03:24:05] Let's just add loading back.
[03:24:08] it's easier, and you guys will have to slightly refactor that with 2.0. I was trying to introduce a new base with
[03:24:15] with
[03:24:16] create async, but I can't
[03:24:18] implement the other pieces until I have the reactive system that works properly.
[03:24:23] I mean, I can show really quickly here, what is it, Solid.js.
[03:24:31] signals.
[03:24:36] Yeah.
[03:24:38] What I've done, and I hope I have tests showing this create async. Yeah, okay.
[03:24:44] is...
[03:24:47] There's an "is pending guard"
[03:24:49] Which...
[03:24:51] is because every single signal can be async,
[03:24:54] In
[03:24:55] in 2.0, instead of putting .latest on everything, there's an isPending guard that you can use to wrap any
[03:25:03] reactive expression. It can obviously just
[03:25:05] grab create async here, but it can also grab a memo or it can grab a function that has multiple memos or multiple create async calls in it. So this is API wise the directions going I can't do this in solid because it's 1.0 because the async isn't transitive. Similarly, latest.
[03:25:22] whether we continue calling it latest, but it's the same idea.
[03:25:25] We can actually...
[03:25:27] use latest as a way of
[03:25:29] of
[03:25:30] kind of like
[03:25:31] getting out of like, you know, the possibly undefined value, right?  In 2.0 create async, because they'll be throwing will always
[03:25:41] from a types perspective, be the return type.  It'll always be like...
[03:25:45] Even if it's like a promise of user coming in, A will always be user non nullable. Latest.
[03:25:51] will give us a way of not suspending and getting
[03:25:55] user or undefined.
[03:25:58] Anyways, I've implemented both actually. I did that last week.
[03:26:02] now in the 2.0 thing, it's coming along quite nicely.
[03:26:06] But we probably should just add the dot loading for now. It's really trivial for me to add it. I just...
[03:26:13] Yeah, I was hoping
[03:26:15] we'd get things along further. Anyways.
[03:26:18] I
[03:26:20] Yeah.
[03:26:23] Yeah, the problem with mutable data structures is that they need to keep references, which means they must be mutated.  But it means that they have to own anything passed into them, making it difficult for them to share.  In basic cases, this is fine, but if you build stores over shared sources like cache, etc., that can be mutated in unexpected ways.  All it takes is a nested write, maybe intended to replace, but instead merges and suddenly you have two identical entries in a list when you're just trying to swap positions.
[03:26:53] star nodes in multiple locations with no penalty. A change in one location notifies
[03:26:57] notifies changes at all. So clearly there's some powerful characteristics found here that exceed immutable data stores, but can we fix these issues while preserving them?
[03:27:05] So,
[03:27:07] I don't know, have any of you used stores in Solid and had some weird stuff happen?  I get bugs occasionally where people are surprised that it mutates the objects that they pass into it.  They'll initialize it as a store with some data.
[03:27:21] Update the store.
[03:27:22] update their data separately and then be like, what's going on?
[03:27:28] *pfff*
[03:27:29] Is that anyone here? I think it's an important aspect of this topic.
[03:27:33] I don't think everyone's
[03:27:35] has hit this issue.
[03:27:40] But...
[03:27:41] Yeah, I just want to throw it out there to chat in case someone out there has at least hit this issue.
[03:27:48] Thank you.
[03:27:52] You sort of raise, which mutates in place.  I mean...
[03:27:58] If you did that in a produce function it would be fine.
[03:28:01] But yes, people hold the thing.  So there's an interesting choice to go here, right?  So.
[03:28:09] To me, this starts with, to ensure we don't override source data, we need to deep clone everything stores are given. That's pretty expensive.
[03:28:15] i.e. that what is initialized and everything being set. However, this means equality checks won't work in the future with its source. We can't tell if references have changed because even store internals no longer reference it. Stores have to clone
[03:28:26] and proxy.
[03:28:28] -
[03:28:29] So
[03:28:30] That's an interesting one. Our clone should be structured, but we can't just use structured clone. It needs to respect or stop at nested proxies since we don't want to clone those. A setter might only work on a small part of the store, but we want to keep references for all. This means we need a custom clone mechanism.
[03:28:46] So this is a big ask, but I'm thinking about it because
[03:28:52] There seems to be this constant concern with stores that it's mutating your data.
[03:28:59] Thank you.
[03:29:00] Cloning returns. The first point has a lot of consequences. When does it not matter? Fresh server data doesn't matter as no shared references between the store and the new input is possible. But otherwise we can't assume something set is the same as its source. You can't use a store as a previous state in an immutable structured diff for example.
[03:29:16] If you've ever tried to use
[03:29:20] Like there's an old Redux example where it's like undo, like time travel.
[03:29:24] I had to come up with a kind of like way of producing snapshots myself.
[03:29:29] and cloning it to make those kind of demos work.  Because generally speaking, we mutate the past with a store.
[03:29:36] So like the first,
[03:29:39] Obviously, with immutable change, these, like, redux and stuff will always create new objects.  So generally, like, it doesn't... it's not a huge problem.  But if you start...
[03:29:48] If it tries to go back to references it had in the past, we've now messed with them.
[03:29:53] Thank you.
[03:29:53] Thank you.
[03:29:54] you
[03:29:56] We'll update properties on the object that we have.
[03:30:00] But when you add a new object later, like something that's not already in the store, it then takes over that object.
[03:30:07] too. So even if you start the store with like something fresh and clean and you start setting those objects from other locations,
[03:30:14] If it's not just an update of specific properties, if it's getting a whole new reference, the store will start will keep that reference and forevermore as you update it.
[03:30:22] will mutate that reference. That's just how it works.
[03:30:25] Thank you.
[03:30:26] *snap*
[03:30:27] I think the first
[03:30:28] Understanding, though, is, as I said, if you clone
[03:30:32] always, you no longer have referential equality checks so you can't do immutable diffs,
[03:30:39] which is something we do with reconcile is one of the options it's
[03:30:42] So
[03:30:44] So this kind of suggests that if we went down this path where we're cloning,
[03:30:48] we'd actually need two different types of operations.
[03:30:53] for like diffing, right?  One for diffing frustrated from the server  and one for managing immutable diffs like Redux.  Like basically there's two different types of diffs.
[03:31:01] There's one that...
[03:31:04] is like
[03:31:05] reconcile that kind of merges and there's one that takes the previous state
[03:31:09] and takes the new state, diffs it, and then applies those patches
[03:31:13] into a clone.
[03:31:19] You guys get what the fundamental problem is.  If you don't clone...
[03:31:23] you
[03:31:24] Mutated.
[03:31:25] Like, so it's not safe anymore.
[03:31:28] from like, you have to own it. And if you clone it, you can't do like a traditional immutable diff. You can't like all the references are lost.
[03:31:39] Right. I should drop this into chat if I haven't yet.
[03:31:44] Right.
[03:31:46] On the mutable side, I can picture, you know, like an apply diff store next value current. Basically you need three inputs. Memo is the secret here because a memo has the previous so you could always take the new value and the
[03:31:58] previous value and diff it and have the memo return it.  So you can basically like come up with a way of like creating a set of patches and then apply the patches like in a projection.
[03:32:09] Right.
[03:32:10] And what I point out right away is this is not that different than doing something with Imer.
[03:32:17] But I think having the key argument is still important.  So it might be worth implementing ourselves.
[03:32:22] But
[03:32:22] Like what is interesting is we could just say like, okay, if you want to do immutable diffs like redux style, you should just go grab immer.
[03:32:30] I don't know if you guys all have seen this, but like...
[03:32:35] - Immer.
[03:32:37] patches, they have the ability
[03:32:41] to, what is it?
[03:32:42] produce with patches
[03:32:45] and it even has the inverse patches, which is genius, which is a reversal of the patches. You can basically
[03:32:52] do a mutation.
[03:32:53] on a store.
[03:32:55] Like...
[03:32:56] Figure out what it is.
[03:32:57] And then...
[03:32:59] get a list of operations and then apply those operations.  They have like another apply patches.  So what you could perceptually do is the apply patches.
[03:33:08] What you could perceptually do is get...
[03:33:13] We don't need to produce with patches, to be fair.
[03:33:17] Probably.
[03:33:18] Um,
[03:33:22] I'm trying to think, you can get Imer to do the diff for you, to like, not from this, like, because you already have two objects, you can have Imer to take the old, the objects, the new object, do the diff for you, and then take the patches and apply them directly to.
[03:33:37] the
[03:33:37] the store.
[03:33:38] is essentially what I'm getting at.
[03:33:43] That's one operation. The other operation is reconcile.
[03:33:48] I think this one still exists because
[03:33:50] Um,
[03:33:53] There's still value in having something that's saying, I got arbitrary data morphed
[03:33:58] the store into that shape.
[03:34:00] Right. You don't have a past. You don't like it's not like like if you're getting fresh data from the server.
[03:34:05] Immutable diffs.
[03:34:07] without keys aren't going to give you anything.
[03:34:11] Right?
[03:34:13] Yeah, the inverse patches is genius. A moment ago when we were looking at reduce, we were like, "Oh, but we can't reverse it."
[03:34:21] This is...
[03:34:23] This is very, very cool.
[03:34:26] Because you can basically collect a list of patches and their inverse and then apply them and then maybe keep on collecting the inverse, you know, and then go back to any step through applying backwards.
[03:34:39] But...
[03:34:41] What I'm getting at is I think...
[03:34:43] that
[03:34:46] Immutable diff.
[03:34:48] might belong...
[03:34:50] on the outside of stuff. I think there's still the more basic, like I get fresh data from the server, nothing matches, I need to
[03:34:58] Basically...
[03:34:59] morph this into that data.
[03:35:04] So,
[03:35:06] I want to...
[03:35:09] I want to talk a bit about this because there is something else we have to think about if we go the cloning way.
[03:35:16] What do I say here?  Operation Relecated.
[03:35:18] Key can help but not hijack anything, but without reference equality, shortcutting with the store owning its own sources. I see no reason why you wouldn't attempt to keep most of our instances as possible. Yeah. So the idea is right now, reconcile and solid has a merge option. This would basically be merge always true because you couldn't do a referential check. Basically merge would be set. Reconcile would only work in merge mode with a key.
[03:35:37] And if you wanted a non-merge mode, you'd have to, you, you'd,
[03:35:41] do a separate kind of diff thing like I talked about. There is this diff thing is attractive,  don't get me wrong. Perfect examples, you're on the server,
[03:35:49] produce the diff, send it over the wire, and have the projection apply the diff.  So you can do the diff across the wire.
[03:35:57] And like, in a sense, this is like
[03:35:59] when we talk about local first and we talk about, you know, web sockets and stuff, this
[03:36:05] kind of approach with create projection.
[03:36:08] is what makes create projections so powerful conceptually.  Right. It's it's don't get me wrong at the edge of the graph.  It's no different than writing an effect into a store.  So maybe but you kind of
[03:36:19] This is what makes stores so powerful.
[03:36:22] Right.
[03:36:23] The ability to work with diffs store.  If you have store type technology and you're not,  you don't have methods like reconcile or this kind of diffing stuff,  you're not even tapping into a,
[03:36:35] like
[03:36:36] But 10% of the power here. I mean, it's the reason
[03:36:40] why
[03:36:42] Like this was really critical actually for me deciding solid was viable. Um,
[03:36:47] Um,
[03:36:48] Was that I managed to show the diff performance was as good as the fastest speed on libraries because this is a
[03:36:55] It wouldn't be enough, like if we just did these reactive updates, like
[03:36:59] and just like let...
[03:37:01] these other cases just fall to the side. Everyone deals with fresh data from the server at some  point. You can't just re-render everything in that case. It's important to have these tools
[03:37:11] Um...
[03:37:13] So,
[03:37:14] You know, DB Mon, which I think I showcased last week, the classic demo, there's actually a really good benchmark from the guy who created the EV framework.
[03:37:23] What was it, UI?
[03:37:26] Bench.
[03:37:27] Local void, yeah, this one.
[03:37:32] I'm definitely going to be pulling this one out again recently.
[03:37:39] Right? What's really cool about this one is you can actually build the implementation locally.  This might be something we do in the future on stream, but
[03:37:46] Um,
[03:37:49] Yeah, it solid's already in here.
[03:37:54] But essentially,
[03:37:56] It has a whole bunch of tests, like
[03:37:59] I can't
[03:38:01] It tests tables, it tests tree shapes, and it basically tests all the difficult VDOM stuff.  This is the most...
[03:38:10] like diff heavy, um,
[03:38:13] .
[03:38:14] benchmark that there is. This is probably like this should just be called the virtual DOM benchmark. And
[03:38:21] Um,
[03:38:22] it's a really good way to understand the cost of different kind of diffing algorithms and stuff. Like if I,
[03:38:28] Let me see here. Enable full render measurements, disables. I'll keep that on.
[03:38:34] I'll just do a quick run so you can see what it looks like.  But you can also put a custom URL.  This way he didn't have to worry about
[03:38:40] um,
[03:38:41] It.
[03:38:42] And then...
[03:38:45] I just--
[03:38:46] Click this? Oh, that's why.
[03:38:50] Yeah.
[03:38:51] I have a pop-up blocker.
[03:38:54] Thank you.
[03:38:58] I just turn it off for this site.
[03:39:01] No, that is not how I do it.
[03:39:06] Okay.
[03:39:06] So...
[03:39:11] You can tell that I like never use this thing.
[03:39:15] Intentionally at least. That's so annoying. Can I open this link in a new tab? Probably not.
[03:39:21] Because it needs to communicate back to the new window.  OK, I will figure this out at a different point.
[03:39:28] Oh, there we go. Disable.
[03:39:30] Done.
[03:39:32] refresh the page,
[03:39:34] Thank you.
[03:39:36] See, it does a whole bunch of different shapes of tests.
[03:39:45] reports the data. Then when you go back to the main page, it actually has
[03:39:50] Um...
[03:39:51] the results for
[03:39:55] for all of these. Generally, when I test solid, I do
[03:39:59] enable, disable, actually switch the defaults because
[03:40:03] These are very good if you want to test the pure algorithm. This is like what it's like when you render with the actual DOM and usually you'll have referential text. But
[03:40:13] Anyways.
[03:40:15] This is a.
[03:40:16] This is a great benchmark and probably the one that I'll be referring to as I continue to kind of like
[03:40:22] Go through this stuff
[03:40:26] But what I was trying to get at is, consider merging scarcity in general when things can live in multiple locations. When they might not all be array siblings that can manage by key. This is even more primary than different. Consider the difference between this. Okay. Pretend we're cloning now when we set something to a store. So we got a list from, I don't know, maybe a server, some kind of list.
[03:40:50] Is there the difference between setting the list
[03:40:55] inside our store.
[03:40:57] and then taking the first index and setting it.
[03:41:00] versus
[03:41:02] Setting the list inside our store.
[03:41:05] and then grabbing the first index
[03:41:08] from the list from the store and setting it as selected.
[03:41:14] Thank you.
[03:41:15] A simple imitation of these would have different results. Since everything is cloned entering the store, the first example makes two copies of the item at zero. One in the list and one that was selected.
[03:41:27] Right.
[03:41:28] Because if you're cloning, it'll clone the whole list and then it'll also clone this.
[03:41:33] Whereas the second version, we could know that it was the same item because it's referencing the item from the store.
[03:41:39] When we're reading,
[03:41:41] and we don't need to clone it again.
[03:41:42] This stable proxy identity is important for equality in things like moving items and lists. You don't
[03:41:47] want to create a new item, everything is wasteful and you don't want to merge
[03:41:51] what is there if it wasn't conceptually the same item as it would be.
[03:41:55] non keyed that way. Yeah. So what I'm getting at is
[03:41:58] The fact that these could be
[03:42:00] Different is weird.
[03:42:02] you would need
[03:42:03] If you're cloning, you'd actually like need to make sure
[03:42:06] that
[03:42:08] Any...
[03:42:08] You need the source reference to the item.
[03:42:12] to link back to the clone somehow so that if you ever tried setting it again
[03:42:16] in a different location, it would know that you've already
[03:42:20] cloned and proxied it.
[03:42:22] Right? It's no longer the same reference.  Like, usually, if we weren't cloning,  we'd have the proxy. So if you tried to set this up,  we'd be like, oh, no, we already have a proxy for that one.  You know what I mean? But...
[03:42:32] But this...
[03:42:34] With cloning, there's this degree of separation that makes things way trickier.
[03:42:39] Yeah.
[03:42:40] We have a global proxy map so we can do that. But if we want the first example to work the same, we need some extra smart web managing cloning. The only way we know that these are the same objects are the source references.
[03:42:50] Would we keep that around indefinitely? That's one option. Have immutable internals that could always compare against, but arguably we'd only need to keep this information for the lifetime of the set operation. This issue also carries into different considerations, because if we reconcile this with a different current product, say product 3.
[03:43:07] We don't want to transform the existing product zero into three as it would update
[03:43:12] it in the list as well, assuming we were able to preserve this linking.  Key would have to protect us again.
[03:43:18] But the harder problem now is how to get the shared reference of product 3 in the list.  Otherwise they'd now be unlinked.
[03:43:24] unless keys were globally unique that that
[03:43:27] they won't help us much. Yeah. I mean, you might not understand what exactly what I'm saying here,
[03:43:32] But.
[03:43:33] there's an interesting problem when you start trying to
[03:43:38] compare, like, like do a reconcile, like a diff operation and decide that the object is the object.
[03:43:47] that it should have the same equivalence thing when you're cloning.
[03:43:50] And...
[03:43:52] if that reference happens somewhere else, like basically we have to keep around multiple copies
[03:43:57] of the object that could link to the proxy.
[03:44:00] Um...
[03:44:02] It's a bit of a mess.
[03:44:07] So things are infinitely easier if there's no shared references, right?  If you could say that you can only put an object in the store in one location, but I don't think that
[03:44:14] is a decision that one can make.  The exploration above was incomplete,  but it led me to include a couple of things.  Immutable diffing can shortcut on matching references,  whereas reconciling will never match references,  so it ends up deep diffing always.  However, this would always be true of data from the server.  Shared references establish identity internally.  The input of the diff method shared references are...
[03:44:33] that
[03:44:34] the intended linkage in the final result. Key lets us link between input and
[03:44:38] and store, but only as a tool to preserve the shared references. While shared internal references from the server seem unlikely, it is only assumption we can make.
[03:44:49] Cerebel and server functions can handle this because they dedupe.
[03:44:54] and deduping could be done in user space if desired.
[03:44:58] What I'm saying is it's possible...
[03:45:01] Um,
[03:45:03] Thanks to like deduping serialization to actually like if you passed some object that was in two different locations from the server for it to be the same object.
[03:45:14] But...
[03:45:16] It...
[03:45:19] Like basically...
[03:45:22] Thank you.
[03:45:22] Thank you.
[03:45:23] *sniff*
[03:45:25] Sorry, I don't even know if I'm being clear here.  You can start seeing the complexity just later on here  when you have to worry about the difference  between different keyed inputs that are not
[03:45:35] referentially equal to shared references with inside this structure itself and whether the structure
[03:45:41] that's serving as an input also has shared references.
[03:45:46] For any of this to work, we need the source input to be linked to the store. Whether that is temporary for the length of the set or for all time is an interesting question.
[03:45:54] When we didn't clone store equals previous, but we can't make that assumption anymore.
[03:45:59] I'm not yet clear the overlap of the different patch operations. We won't realize that
[03:46:03] Even the previous value is insufficient, but I'm, yeah, I'm not actually not worried about this anymore. I'll continue.
[03:46:10] So yeah, I started thinking more along these lines and I was like, can cloning...
[03:46:16] Like, how would we even implement this before we even get to reconcile, like make cloning work?
[03:46:21] So the first thing I think we need is a week map.
[03:46:26] Look...
[03:46:27] Basically, we need an additional week map that would happen like whenever you're called set or I guess it could even be a map for the length of the set so that when any object got set in, we could link it back to the cloned object.
[03:46:42] or the proxy so if we ever hit it again it would just keep the reference internally.
[03:46:46] Um...
[03:46:49] But the interesting thing is, if we're using key-based operations, we actually have multiple different objects with the same key that are supposed to be the same object but not be referentially the same.
[03:47:02] So this list might have
[03:47:04] multiple import sources pointing to the same...
[03:47:08] Output?
[03:47:12] But technically this would work, I think.  So...
[03:47:17] But there is this like interesting awkwardness because
[03:47:22] Obviously
[03:47:25] Like I've got an example here where we
[03:47:27] Thank you.
[03:47:28] pretend if the user
[03:47:32] creating an object.
[03:47:35] Set it.
[03:47:36] mutated that object and set it again.
[03:47:39] The problem here is
[03:47:42] If we're keeping this map of references,
[03:47:46] to some cloned object and they mutate their data.
[03:47:51] we'll see it still as the same object.
[03:47:55] So...
[03:47:56] This...
[03:47:58] If someone did this, essentially,
[03:48:02] even though they mutated it, it still map back to the version that we created that was this.  So you'd actually end up with a list with ID one John at both indexes.
[03:48:13] Thank you.
[03:48:14] Because if we used a map lookup to prevent the duplication,
[03:48:20] it wouldn't be aware of the mutation.
[03:48:23] of
[03:48:23] of the outside object.  Again, you probably shouldn't do this.
[03:48:27] Um...
[03:48:28] And obviously, you can kind of see this is dumb here.  But what if someone did this?
[03:48:33] had a couple separate set store calls.
[03:48:36] and they didn't realize that they were just mutating it and setting it again.
[03:48:40] Again, like, this is not a good pattern.
[03:48:43] But what I'm getting at is
[03:48:47] The whole reason we're trying to do this cloning thing, so that people can feel they own their own objects,
[03:48:52] But this is just the problem in reverse. Instead of mutating their objects on them,
[03:48:57] we're ignoring their mutations.
[03:49:00] Right. The solution to actually solve the problem just reverses the problem.
[03:49:07] We could argue that we could keep this for the length of the lookup of the individual set.
[03:49:12] We use a similar trick for
[03:49:13] Making stores on track.
[03:49:16] This would at least fix the second case.  But is that too specific?  Is it weird that this is broken...
[03:49:23] But this would work because they're separate sets.
[03:49:29] I don't know.
[03:49:31] I hope you guys get the problem.
[03:49:36] If you have an object and you're setting it to a store and you have to clone it,
[03:49:40] because you can't keep the reference, you don't want to like mutate their object, and you do it, okay, well, I'll keep this reference,
[03:49:48] and I'll link it to the clone. So the next time they try and set it,
[03:49:51] I will just pull out my clone instead.
[03:49:54] if they mutate the object,
[03:49:56] then you're going to pull out the clone of the first object as it originally was,  not the mutated version. So they won't get what they expect.
[03:50:07] I hope that's clear.
[03:50:10] Huh.
[03:50:12] Thank you.
[03:50:16] Basically, what I realized as I worked through this is the only real place for this to work is if we hijack unwrap.
[03:50:24] because Unwrap has a set for deduping, if we made that a map, it'd be possible to inject
[03:50:30] during these operations, special deduping logic, so that Unwrap would be able to
[03:50:36] Um,
[03:50:38] take the data as it came in and ensure that we deduped.  But again, there's going to be special rules here based on like length of the set, length of the reconcile operation.
[03:50:50] Thank you.
[03:50:50] Thank you.
[03:50:52] You would only lose the reference if the state was local to the component right.
[03:51:00] No, like, what I'm trying to say is, like,
[03:51:03] I'm trying to think of how to, I think the problem is, I think that our challenge here is the problem statement isn't clear enough.
[03:51:19] - If people believe their own
[03:51:21] they own the data line.  Won't they be surprised if they can mutate their own order to trigger some magic?  Well,  it's not about triggering magic.  It's more like it,
[03:51:26] it doesn't do anything. Um, it's like the opposite problem. See, uh,
[03:51:32] Okay.
[03:51:34] Okay, let's try something.  Let's go...
[03:51:38] Let's go A equals...
[03:51:41] ID 1.
[03:51:42] Name.
[03:51:44] equals
[03:51:46] Jay.
[03:51:47] and const b equals ID two.
[03:51:55] Name
[03:51:57] Okay.
[03:52:00] So,
[03:52:02] We're going to go const
[03:52:05] Store
[03:52:09] SetStore.
[03:52:12] equal create store
[03:52:17] A, B, beautiful.
[03:52:19] Okay.
[03:52:24] import
[03:52:26] Create store.
[03:52:30] From solid
[03:52:32] JS.
[03:52:33] Store, okay.
[03:52:35] Let me think of how to do the set store.
[03:52:50] Thank you.
[03:52:51] I have to do a little setup to make this work, but if I remember correctly, it's 0...
[03:52:58] If I set 1 to undefined,
[03:53:05] or actually maybe we'll start it like
[03:53:12] - Trying to think of, there's a pattern of changes
[03:53:15] that we can do to the store that will...
[03:53:18] confuse the hell out of people. But I think this will actually work.
[03:53:24] If we set--
[03:53:26] 0,0,0.
[03:53:29] A
[03:53:33] Think this will work?
[03:53:45] One...
[03:53:46] Okay, so let's switch them. Let's go set 0 to B, set to A.
[03:53:54] Console.log.
[03:53:56] A
[03:53:58] Okay, so this one isn't a problem case.
[03:54:02] Um.
[03:54:05] There's a scenario
[03:54:08] in which
[03:54:10] This swap is fine.
[03:54:12] because we're just switching the same references around.
[03:54:15] Um...
[03:54:21] There's a case where if you update it, they end up getting merged.
[03:54:33] We can't see the console logs.  They're in the corner down here.
[03:54:37] They're kind of small, but they're there.
[03:54:42] Yeah, I don't think this will actually... I'm trying to think of the scenario of the show where the mutation happens, but essentially...
[03:54:51] It's like I can make a mutation happen right now, but this is kind of the wrong way to make it happen.
[03:54:59] People because objects merge.
[03:55:01] So like this, this is not a valid case.
[03:55:05] See if you look at this, they're both H.
[03:55:09] Thank you.
[03:55:11] But this isn't what I was trying to actually show
[03:55:15] There is an actual legitimate...
[03:55:16] case where, um,
[03:55:20] essentially
[03:55:24] Through operations, when you...
[03:55:27] I think it's it's probably I probably need to use reconcile to actually show
[03:55:31] this happen.
[03:55:32] And I,
[03:55:33] So sorry, I can't think of the example off-head.
[03:55:37] What I was trying to get at here is if our idea is to clone
[03:55:42] clone on set, essentially.
[03:55:46] Like,
[03:55:47] If when we set this into our store here,
[03:55:52] If we clone this...
[03:55:57] We want to keep a reference to any object in case we set it again so we know that it's the same object.
[03:56:04] But if someone mutates it,
[03:56:06] we end up with the original clone.
[03:56:11] Let me try that one.
[03:56:18] Thank you.
[03:56:19] Thank you.
[03:56:19] Thank you.
[03:56:29] Let me see here.
[03:56:41] So we start with store with data.
[03:56:46] Thank you.
[03:56:48] Reconcile active data.
[03:56:52] Merge true.
[03:56:56] And then...
[03:56:57] Thank you.
[03:56:58] Thank you.
[03:57:02] Interesting.
[03:57:04] And what if I'm going to guess they're both be right.
[03:57:09] Yeah, I mean,
[03:57:12] Okay.
[03:57:14] Yeah, this is this isn't bad example. The reason this is happening partially is because they're not
[03:57:20] Keyed, but
[03:57:22] Yes.
[03:57:24] I don't think anyone expects...
[03:57:26] that
[03:57:28] Yeah, this is actually a good example.
[03:57:31] Thanks. Because what's happened here is that...
[03:57:37] Because the store takes ownership of data A,
[03:57:41] when we create it.
[03:57:43] And
[03:57:45] It...
[03:57:46] when we switch active data A to active data B, it actually changes this into data B.
[03:57:52] And then it adds data B.
[03:57:54] So now,
[03:57:57] It's not just...
[03:57:58] the fact that this is the same in here,
[03:58:02] It's the fact that
[03:58:05] If we console log
[03:58:09] Data A.
[03:58:11] It's it's shows B.
[03:58:14] Thank you.
[03:58:15] Thank you. This is a good example. See, we can
[03:58:18] add a key property, for example, here.
[03:58:23] E
[03:58:24] Name.
[03:58:27] And...
[03:58:31] This actually keeps it
[03:58:33] Um...
[03:58:34] separate here.
[03:58:37] But...
[03:58:39] I think
[03:58:41] The challenge here is that...
[03:58:48] Thank you.
[03:58:49] Like,
[03:58:50] Thank you.
[03:58:53] There's definitely cases where...
[03:59:02] expectations based on whether they're shared references or not can open up
[03:59:07] a weird can of worms.
[03:59:13] Oh, sorry. Yeah, I need to...
[03:59:18] Yeah, sorry.
[03:59:22] Right.
[03:59:25] this actually this keying actually separated it but like you can see that without the keys
[03:59:30] Like...
[03:59:32] This morphs this, which is different than this.
[03:59:35] Right. So like key kept them separate because they realized they were different objects, but without the key.
[03:59:43] It merged the one into the other one.
[03:59:52] Right? You'll see that A is B at the end. Okay. So...
[03:59:59] -
[04:00:01] Generally speaking,
[04:00:05] Keys with Reconcile is important.
[04:00:09] But it's more than just that, which is what I've been trying to kind of
[04:00:13] get at with all this is like
[04:00:16] generic fixes to this
[04:00:19] are inconsistent. So maybe I just have more work to do, admittedly.
[04:00:25] Cloning seems like a good idea, but it reverses the problem.
[04:00:29] You want to clone because you don't want to steal from the immutable sources, but at a certain basis, I think we have to recognize that we have to own the data being put into the store.
[04:00:40] Um,
[04:00:41] Thank you.
[04:00:43] It's it's it's it's it's it's it's definitely a tricky problem.
[04:00:48] Thank you.
[04:00:49] I'm going to continue on this path because I can at least see how we could try and implement it, but...
[04:00:55] Um,
[04:01:01] you can start to see like
[04:01:03] Like, it's not hard to picture...
[04:01:06] how
[04:01:10] If like, let me like pretend
[04:01:14] that
[04:01:16] We are like,
[04:01:17] Where's the other one? Where was it? This one.  Pretend like there isn't even a reconcile percent.  You're doing like a diff and you,
[04:01:23] take some objects from an immutable like redux store and
[04:01:28] the operation is like apply this patch to the diff, like, uh, sorry,  was it immer here?  Was there an example, like one of these, like,
[04:01:36] operations, replace, pretend the value is like
[04:01:40] like an object. And then we hijack that object in the store and we start changing it. And then the reference inside immer is no longer the
[04:01:48] Like...
[04:01:48] the right reference.  Like if you don't clone,
[04:01:54] Bye.
[04:01:55] you do risk regardless
[04:01:58] you know, taking ownership of that. And if you do clone,
[04:02:03] It seems like there's a lot of...
[04:02:09] Awkward trade-offs that need to be worked through.
[04:02:13] Thank you.
[04:02:17] Yeah, well, diffing is an important part
[04:02:22] of the stores because
[04:02:26] you can't always know the granular changes that need to happen.
[04:02:30] Especially if you get...
[04:02:31] stuff. So like going to mutable reactivity has the ability to
[04:02:36] communicate downstream changes without diffs, but
[04:02:40] There is presumably at some point...
[04:02:44] Thank you.
[04:02:45] Unless you start on the client where you have all the details or something, there's probably somewhere that needs to do a diff.
[04:02:51] Um, most often that's the point at which you do like the async fetching that,
[04:02:57] we need
[04:02:58] good solutions around.
[04:03:00] Okay.
[04:03:03] So, what did I say here?
[04:03:06] I'm going to benchmark this.  I'm going to try some stuff.  I need a little bit more exploration here.  It seems...
[04:03:15] If we could do cloning in an effective, consistent way,
[04:03:19] that was performant.
[04:03:21] it would be more predictable for people. Right. But what I, the reason I showed this example is because some of the things
[04:03:29] Like if people mutate data,
[04:03:32] themselves were kind of
[04:03:33] Out of luck anyway.
[04:03:35] Right?
[04:03:37] And
[04:03:39] This was an interesting realization to me, maybe less to other people, but it's like all the mechanisms to try and protect ourselves seem to also...
[04:03:48] Just reverse the problem.
[04:03:51] Anyway.
[04:03:52] Last section here I'm going to talk about is
[04:03:56] What if we did want to do an immutable diff?  If we didn't want to do immer?
[04:03:59] Um...
[04:04:01] There's some interesting stuff here.
[04:04:06] could do hashing that's interesting
[04:04:15] Thank you.
[04:04:18] Hmm.
[04:04:23] Thank you.
[04:04:26] Actually, probably.
[04:04:30] Oh, that's interesting. Yeah, because we don't actually care
[04:04:39] Yes. I think so, actually.
[04:04:43] Thank you.
[04:04:44] Thank you.
[04:04:46] Because we...
[04:04:47] You're right, the reference isn't what matters. We just care about the actual data.
[04:04:56] Thank you.
[04:04:57] Thank you.
[04:04:59] Thank you.
[04:05:00] Thank you.
[04:05:04] Thank you.
[04:05:06] Yeah, yeah, I do think so. I think this is getting in that realm.
[04:05:17] Thank you.
[04:05:18] Is it better to handle the objectivity of curve behavior? Basically makes it you understand how objectivity refers to. Yeah, the only challenges.
[04:05:25] There's a Crate Immutable inside solid primitives,
[04:05:29] that exists to do the cloning.  It's I made this for the guys for X state at some point and then like we ended up in solid primitives.
[04:05:38] And
[04:05:39] Um...
[04:05:40] Thank you.
[04:05:41] Okay.
[04:05:43] I think
[04:05:45] What I remember when I was looking at it was, internally we can do something that's very hard to do in user land in terms of optimizing this kind of approach.
[04:05:55] But it's possible that I've just overcomplicated things and I need to step back a bit and take a
[04:06:02] refresh on that.  It just,  I ended up going down this path because I,
[04:06:08] You know, it's like, can we fix stores? If stores are such an important part of the future, can we can we fix them? And the answer might be no, like this might be part of its nature. This might be part of the realization here.
[04:06:18] Um,
[04:06:20] So
[04:06:22] But yeah.
[04:06:26] Interesting thing, I don't know, have you all seen this before? I actually hadn't
[04:06:32] I didn't realize there's like a generic established patch format.  This is what Emmer uses. It's actually basically a standard.  The difference is this uses a string path instead of an array path.  Emmer used an array. I would use an array too. It makes way more sense.  But
[04:06:45] Thank you.
[04:06:46] It basically...
[04:06:48] defines a generic diff format.  And apparently it's actually like some sort of standard.
[04:06:58] So,
[04:07:00] It's it's it's definitely interesting.
[04:07:03] Um...
[04:07:04] I actually this is probably more interesting to people who want to get into more details here, but I
[04:07:09] I had actually
[04:07:11] started playing with the idea.  Like, my only...  I was like, maybe...
[04:07:15] My only grief with this approach was that it seemed like it produces like
[04:07:21] a flat set of changes. And I was like,
[04:07:24] Wouldn't it be interesting if we could do like a hierarchical diff so that like we could apply the operations...
[04:07:32] without like stepping in and out all the time and like without going all the way up a path
[04:07:36] and applying it all the way up a path and applying it. Wouldn't it be cooler if we could  apply all the changes as we went? So I started playing around with some
[04:07:44] formats where I made the path the thing.
[04:07:47] But
[04:07:49] Yeah, I don't know if this will be interesting to everyone, but essentially what I realized, like this, this one's actually awkward because you can't do lookups very easily because it's just based on array index.
[04:07:59] um because you know as you add the patch you like don't know then i  started playing around with like what if you use the path as objects
[04:08:07] which wasn't bad.
[04:08:09] Um,
[04:08:10] This is kind of
[04:08:12] The problem is you start losing order of operations, but maybe because they're localized, it doesn't actually matter.
[04:08:19] So, can I start going through ideas?  This is for immutable diffs, to be fair.  This is a different problem.
[04:08:27] List unshift, push this, set a name, unshift.
[04:08:31] So I always love using unshift or shift because affecting the beginning of the race seems to mess with everything.
[04:08:38] So this whole...
[04:08:40] Like,
[04:08:41] What if you like...
[04:08:44] Push something in front of the array.
[04:08:46] changed it, pushed something else to the front of the array and changed it.
[04:08:50] But...
[04:08:51] If you...
[04:08:52] had multi operations at the same key as an array, then you keep order.
[04:08:57] Then I was like, okay, well, what if
[04:09:00] you change the order. So push these on,
[04:09:04] and then do that because now they get grouped. So technically these would get applied out of order,  like you do the operation then change the name operation then change the name, but this is actually fine too.
[04:09:14] Then I was like, what if we splice something in the middle?
[04:09:17] But again,
[04:09:19] It actually all works, so.
[04:09:21] I think the funny thing I concluded at the end was that
[04:09:25] comparing this diff that's hierarchical with this diff didn't actually save us any work because the root path isn't nested.
[04:09:34] This only saves work if there's shared sections of the path.
[04:09:38] It is actually technically smaller output
[04:09:40] But I think I'm probably...
[04:09:43] over engineering stuff anyways.
[04:09:46] Just another random thought.
[04:09:50] It's a good question. I don't know. I should go ask over there. Um,
[04:09:57] I... this... this...
[04:10:01] section or this what we're talking about here. Mostly, I just want to bring attention to the fact that
[04:10:07] There are...
[04:10:10] implications of trying to
[04:10:13] manage diffs on mutable data.
[04:10:16] Essentially.
[04:10:17] because of shared references.
[04:10:19] and it might make sense to pull the diff outside and apply it inside.
[04:10:25] Um,
[04:10:27] Essentially.
[04:10:29] It's...
[04:10:33] It's interesting regardless.  I don't think...
[04:10:37] There's
[04:10:39] a world where we don't need...
[04:10:42] mechanism for diffs, but it's definitely looking at the complexity of
[04:10:48] that that kind of comes out of this. I'm almost just I'm almost at the point now where I'm thinking that maybe
[04:10:58] And I'm going to have to benchmark this, but maybe reconcile...
[04:11:00] is a mistake.
[04:11:02] Maybe we should always be doing immutable diffs.
[04:11:05] and then just have the patch function
[04:11:09] clone
[04:11:11] the object. So essentially stores themselves never actually clone.
[04:11:15] They assume ownership.  But if the patch ever sets an object, if it does the clone coming in on the set...
[04:11:23] Thank you.
[04:11:23] Um,
[04:11:25] And.
[04:11:26] It does the immutable def...
[04:11:28] Like maybe that's always just the better...
[04:11:31] option. It's a little bit more to write.
[04:11:34] per se, because you basically have a projection with a create memo. But
[04:11:38] Like,
[04:11:40] I don't know. It seems like I'm
[04:11:43] going way too deep on solutions that are
[04:11:46] kind of crazy. We might need our own diff so that we can do like ID based, you know, like key based  diffing. Most tools like expect React to do it so they don't do it. But it's just like,
[04:11:57] It's,
[04:11:57] It is surprisingly awkward.
[04:12:11] Well, yeah, the thing is, I think Mitchell Westridge said this once is that he was saying that this is outside of the scope.
[04:12:20] of MobX, generally speaking. He was like, "That's why MobX state tree exists, right? Or Imer exists or that." So I think
[04:12:29] This piece could be seen in
[04:12:32] Like there's lots of options that don't need to necessarily be part of the core store implementation. Like a conclusion might be just that like, maybe we do provide a diff, but the expectation is that stores themselves don't change, but the way we apply diffs change.
[04:12:46] That might be the best of all worlds.
[04:12:49] So yeah, at least this conversation let me think out my thoughts a little better.
[04:12:55] Create mutable
[04:12:57] is going to be
[04:12:59] shipped off to Solid Primitives or Legacy or something in the near future because
[04:13:05] We...
[04:13:07] The plan is that the store API is going to accept the produce syntax or the mutable syntax as the primary one.  It's still going to have a setter, but it's going to...
[04:13:17] Mm-hmm.
[04:13:17] It doesn't make sense to have two different types of stores when they basically do the same thing.
[04:13:25] We want to keep all the characteristics that are read-write segregation, but we want to make it easier to do updates.  I mean, don't get me wrong.  I love the path syntax.  I came up with it for a reason.  It's succinct.  It's declarative.  It's beautiful.
[04:13:38] But...
[04:13:39] It's.
[04:13:40] Like Reconcile is.  It's like it's something built.  It's a helper.  It should be a helper built on top of a more fundamental basis.  And through this exploration, I've realized, you know, like...
[04:13:50] that the
[04:13:52] Stores are in their essence mutable, right? So it is
[04:13:57] that good that they are.  Some interesting things that you all might find interesting  about the new implementation of the solid stores  that I've been playing around with to create store.
[04:14:09] for the 2.0 stuff.
[04:14:12] is...
[04:14:13] Um.
[04:14:15] how to actually get
[04:14:18] the right to do it, because what I'm doing is I'm actually sending
[04:14:22] a global set
[04:14:24] for writing. So when you create a store,
[04:14:27] or so when you call the set function, it adds the store to this global writing function.
[04:14:32] and then it clears it when it's done, the synchronous store set.  And then when you're inside the proxy setting the thing, it asks if
[04:14:44] the set has the target.
[04:14:46] And if not, it doesn't
[04:14:49] write to it. So essentially,
[04:14:51] In this way, we actually use the same proxy for the read and the write.
[04:14:55] but you can only write to the proxy during the execution of the set store call.
[04:15:03] It's cool because it keeps references this way.  I also use this trick if you look on the get side,
[04:15:08] We use this trick to actually...
[04:15:12] make them non-tracked.
[04:15:14] This is another classic problem with stores.
[04:15:18] I have an example in here. You write something like this, doesn't this mean that whatever scope here is going to actually be tracking draft.list.0? You're trying to write to something, but you end up tracking yourself by accident.
[04:15:35] So,
[04:15:37] basically...
[04:15:41] We can we're using this mechanism to basically guard against both writing and against tracking yourself with inside the set function so.
[04:15:53] There's like a bunch of weird edge cases.
[04:15:58] around, yeah, like,
[04:16:00] This gives us a lot more control and guarantees.  Like before we were setting a global
[04:16:08] like MobX, they have like a strict mode, right?  Where it's like, you can only write  when you're inside an action.  This is keying it even more specifically  to the specific store, so to speak.
[04:16:21] Um,
[04:16:24] Anyway.
[04:16:27] I have not looked at CRDTs in detail, to be fair.
[04:16:32] Um...
[04:16:36] *sniff*
[04:16:36] Thank you.
[04:16:37] It might be interesting to look at the format.  Then again, one thing that I did realize through this operation,  which I didn't talk about at the end here going through this thing is...
[04:16:47] Um,
[04:16:49] I start worrying about
[04:16:52] Like I'm like, I noticed that this worked, but then I noticed in the spec,  they have like move and copy and these other operations.  But then I realized I was like, how do you get a move or copy operation out of like, uh,
[04:17:03] Like,
[04:17:03] a mutation set of mutations. You don't really.
[04:17:07] And then I looked at Imra's source code and they only do add, remove, or replace. Which means that I think that from our perspective, there's only a small subset of actually diff operations that we actually need. We in fact need to only implement these three.
[04:17:19] So,
[04:17:21] I'm not as worried about the diff format.  I know I wrote a whole thing here about how the hierarchy basically optimized the diff format for applying patches rather than for creation.  It was essentially what I was working on.  I don't know if people realize that the path syntax in solid started because I was trying to actually come up with like a diff format.  I was trying to make my own version of Redux based on merging mutable diffs.  And the path syntax was originally my syntax for figuring out how to apply changes.
[04:17:51] to take a raise of a raise.
[04:17:54] so that you could have an array of
[04:17:57] paths and then
[04:17:59] I decided at a certain point just not to do that. It simplified things so then
[04:18:03] We can make arrays top level, for example, in stores. And we didn't, because instead of packing an array, you pass in the list of arguments.
[04:18:12] So like,
[04:18:13] we got rid of and it was awkward having a double array wrapper syntax just you know a rave and a
[04:18:19] et cetera. But, um,
[04:18:22] Definitely.
[04:18:23] My gut feeling here is that the...
[04:18:27] diff format or patch format is not the most important part of the problem here.  Actually,  the,
[04:18:34] I think this is actually simplifies drastically. I think
[04:18:38] I...
[04:18:39] Thank you.
[04:18:40] I think that
[04:18:42] writing
[04:18:43] A diff or even using existing tools like immer
[04:18:46] if applicable, kind of alleviates some of the tension here.
[04:18:55] Right  How should I put this
[04:19:04] These are a different patch algorithm from reactivity perspective.
[04:19:09] The only thing is, like, I guess...
[04:19:11] I'm often thinking a lot of this stuff is coming from outside of the system.
[04:19:19] But yeah, I mean, maybe I should take a look. You guys seem to think it's relevant. So...
[04:19:26] Like I'm looking at something that basically has three operations.  So like,
[04:19:35] Like the patch part of MR is a plugin, but it's also probably a fairly straightforward routine.
[04:19:45] Anyway.
[04:19:51] Okay, let's see 420. Okay, I got a couple more updates. So unless you guys want to talk more about stores.
[04:19:56] Um,
[04:19:59] I got a couple async updates here before we get into this week in JavaScript.
[04:20:03] This should be quicker.
[04:20:06] you
[04:20:12] If you remember a few months back, I was all talking about
[04:20:18] run once reactivity and
[04:20:21] you know, uh,
[04:20:24] ways to fix suspense and all this stuff.
[04:20:27] I've
[04:20:28] Having a bit more time, I realized that
[04:20:31] my crazy solutions all didn't work.
[04:20:34] Thank you.
[04:20:35] Thank you.
[04:20:36] I'll explain pretty why, but it's actually, there's two types of problems that you have
[04:20:44] when dealing with async.
[04:20:46] with its signals graph.
[04:20:48] You have what I call
[04:20:50] lazy sink causes waterfalls, right?  Which is like, if you have a diamond,
[04:20:54] Thank you.
[04:20:55] If...
[04:20:56] A is a signal.
[04:20:58] and then B and C are both async, and then D is the combination of those, if B and C are async and lazy,
[04:21:04] and only read in the effect, what would happen is you'd read
[04:21:10] The first one.
[04:21:12] And I should say, lazy async causes waterfalls when you're throwing.
[04:21:18] I'm assuming that non-nullable async is your baseline starting here.
[04:21:24] But essentially, if you get here, you throw.
[04:21:27] And then you have to wait for this to resolve, to run this.
[04:21:30] And throw it. So if you're being lazy here, you actually don't fetch this
[04:21:35] until after you fetch the other one, it's an immediate waterfall.
[04:21:39] Right, so if B and C are async and lazy and only reading the effect, what would happen is when you read user and start fetching, then throw, user details won't read and fetch until after user result.  You could guard to prevent this problem.
[04:21:52] You can be like, if it's
[04:21:54] Pending.
[04:21:55] and is not... basically if they're both not pending...
[04:21:59] Grab it.
[04:22:01] But...
[04:22:03] The reason this would work is because the pending would catch the throw, essentially.
[04:22:09] And that way, like it would it would basically fetch here and fetch here.  Like so this would go throw this would catch it, but it would fetch.
[04:22:16] this would run.
[04:22:17] - Throw.
[04:22:19] Actually, does this even work? I'm probably wrong.
[04:22:23] Yeah, this and will short circuit it. This code doesn't even work.
[04:22:31] This code doesn't even work.  You literally have to...
[04:22:35] say is not pending
[04:22:38] Like you basically have to actually
[04:22:39] I should edit this.  You see the problem, right?  The short circuits, the way I wrote it.
[04:22:44] You essentially have to actually do this.
[04:22:49] I was trying to be all compact.
[04:22:51] But...
[04:22:52] The reality is you actually have to
[04:22:56] If not is user pending,
[04:23:01] More like this, user pending.
[04:23:11] Thank you.
[04:23:18] details pending
[04:23:23] Thank you.
[04:23:24] Thank you.
[04:23:30] Turn
[04:23:32] Not.
[04:23:36] Thank you.
[04:23:47] Thank you.
[04:23:50] I'm sure I could have done this with an or in a shorter way too. Anyways, my point is...
[04:23:57] My point is, this is not...
[04:24:01] Nice.
[04:24:06] Right.
[04:24:08] You could use pending the trigger the fetch, essentially, if it was lazy, and then guard against it.
[04:24:16] But...
[04:24:18] This is not lovely.
[04:24:21] In this case, each throw would get caught by as pending and each fetch would happen, but it doesn't get as much.  Non-throwing approaches async don't necessarily have this issue, but might require guards anyways if they want to avoid undefined, right?  Because you'd have to check if they're there.  Like, it's the same...
[04:24:34] It's the same pattern. Even if you initially fire off the request the first time, updates will have the same problem
[04:24:40] Unless you're tearing...
[04:24:42] Right.
[04:24:43] So
[04:24:44] Unless you opt into tearing, keeping old state while new async is in flight, or schedules fetching.
[04:24:48] Right.
[04:24:50] So what I'm trying to say is like,
[04:24:53] This guard is probably wrong too.  Um...
[04:24:59] Actually, yeah, because this fails and doesn't call this one.
[04:25:07] God, I gave it too much of a benefit of the doubt.
[04:25:13] It's more like this:
[04:25:15] This is pretending like it's solid today.
[04:25:19] where
[04:25:23] Where
[04:25:27] where it's just undefined.
[04:25:30] So you actually have to do this.
[04:25:32] You...
[04:25:34] And the...
[04:25:37] U
[04:25:40] D.
[04:25:42] Thank you.
[04:25:44] All right.
[04:25:45] Fixed. Okay.
[04:25:49] No, I'm missing... I'm missing...
[04:25:57] Whatever.
[04:26:03] Thank you.
[04:26:05] Thank you.
[04:26:08] Okay.  My whole point is that
[04:26:13] This is not very convenient with lazy.  So the only way to get around this is if you survive the quest the first time,
[04:26:20] Even if you initially fire off the quest the first time, the updates will have the same problem unless you opt into tearing, keeping the old state while it's syncing or scheduled the fetching. Yeah, so what I'm saying here is, even if
[04:26:29] You aren't lazy?
[04:26:31] initially like you just
[04:26:32] when you declare this, it runs right away.
[04:26:37] The next time...
[04:26:40] you do an update because these are both based on A. You update signal A,
[04:26:45] And the effect runs.
[04:26:47] Thank you.
[04:26:48] -
[04:26:49] Uh, where's the original version? Yeah. And the effect runs.
[04:26:53] This is using the new split effect syntax.
[04:26:57] But the next time the effect ran, you'd hit the same problem because now you'd be throwing or now you'd be undefined, right?
[04:27:03] So...
[04:27:06] Like...
[04:27:08] This doesn't go away unless
[04:27:11] Perhaps maybe you show the previous value.
[04:27:14] Right? Like,
[04:27:17] Thank you.
[04:27:18] But...
[04:27:19] Async tearing is wasteful.
[04:27:21] So when I was working on this run once thing, because that was my idea. I was like, we run it immediately.
[04:27:26] Right.
[04:27:27] Like.
[04:27:27] fetch immediately. So the first time we get, you know, we don't have to worry about it fetching. And then the second time,
[04:27:34] we just give the old value of user,
[04:27:38] and the old value of user details,
[04:27:41] and
[04:27:43] That won't
[04:27:45] maybe won't cause us to update, but on the positive, um,
[04:27:51] both will fetch again.
[04:27:53] because it
[04:27:53] They're lazy. They'll both fetch again.
[04:27:57] But because they won't be blocked, because they won't throw, they'll just get the old value.  But there's a problem with the old value.
[04:28:04] This shape.
[04:28:06] If you have a signal,
[04:28:08] that feeds into an async that depends on async, but this signal also is read by this one.
[04:28:15] So I have an example of where you use a signal to get a user
[04:28:18] And also,
[04:28:19] Get...
[04:28:20] a best friend based on their user ID and their friend's user ID.  Like you want to get the friendship record, let's say the connection between these two people.  So you use the you can use the base user ID and you can use
[04:28:33] the best friend ID off the user. So you there,
[04:28:38] Thank you.
[04:28:40] B and C are async, okay?  This is an unavoidable waterfall.
[04:28:44] Right? You can't get the best friendship
[04:28:47] unless you get the best friend ID off the user.  You can't like this is a waterfall.  You can't avoid it.
[04:28:53] However, run once not throwing is detrimental here.
[04:28:57] When A is updated and it notifies B,
[04:29:00] and C: they both get queued to run.
[04:29:02] B runs fetching the new user,
[04:29:04] Then CRuns. It sees the existing user
[04:29:09] Um,
[04:29:10] here, the old user,
[04:29:13] with the new user ID.
[04:29:15] and it fetches the friendship information between the new user ID
[04:29:20] Thank you.
[04:29:22] And the previous user's best friend.
[04:29:27] Then,
[04:29:28] This completes
[04:29:30] updating the user record, which sees a new different best friend, and then it fetches again.
[04:29:35] So,
[04:29:37] Instead of.
[04:29:40] it being a waterfall, just a waterfall.  If we use fetch once kind of thing where we like let it resolve and not throw,
[04:29:49] Yeah.
[04:29:50] we actually
[04:29:52] end up fetching here
[04:29:54] Twice.
[04:29:55] even though technically we should fetch here and then fetch here.
[04:30:00] Tearing we accepted for UI, but for data fetching it's terrible. It's possible
[04:30:05] To guard this, usually we null check, but isPending could be used similarly to remove intermediate fetch right, if not isPending.
[04:30:11] you know,
[04:30:13] this return fetch
[04:30:16] you know,
[04:30:17] this
[04:30:18] But the funny thing I realized is solid today.
[04:30:21] is actually like this because we don't
[04:30:23] Un-
[04:30:24] set undefined with a resource. We keep the old value, right?  Technically it suspends.  But if you ever chained async, which we don't actually do because, you know,  it all depends. People don't do it much. We actually do this.
[04:30:37] You're probably already doing guards around this.
[04:30:40] If we nulled out values while fetching, we wouldn't have this problem, but we'd also have some pretty blotchy UI unless we said suspense was necessary.
[04:30:48] Even transactions and transitions would be subject to this double fetching because when working on the alternative reality, async still is an instance. There's no real guard except the one that we enforce or the one the developer needs to put in themselves.
[04:31:01] Okay.
[04:31:04] So...
[04:31:05] basically what I'm saying is
[04:31:08] We haven't hit this problem very much, but in a sense, solid's
[04:31:10] approach is a little bit
[04:31:12] Thank you.
[04:31:14] like, forces you to manually guard here
[04:31:17] When you chain async?
[04:31:20] which is kind of awkward.
[04:31:22] So basically what I'm saying, if you follow this conclusion that
[04:31:25] like if you're throwing and doing this stuff that
[04:31:28] You can't be lazy.
[04:31:30] essentially.
[04:31:33] Um,
[04:31:34] because you can't
[04:31:35] You can't tear...
[04:31:39] There's really only one option.  Suspense is necessary.  Making it optional doesn't work if you don't want to tear.  Tearing can be unpredictable.  It isn't just part of UI.  It could be data fetching.  It could be...
[04:31:53] In the UI, it could be missing classes or rendered elements or other oddities, but
[04:31:58] Not everyone wants to use suspense, but when they essentially recreate it or transactions in their attempts to not use it, you put placeholders in your UI or you leave the current data in place and place loading guards around downstream calculations.  The biggest opposition to suspense is that it's jarring when things under it cause it to fall back. The answer is usually to go more granular, but if you want to default values, it is a bit awkward because you can do that at a single point high up without upheaving anything.
[04:32:21] everything below, whereas suspense being granular, we need to push down pretty far.  You can opt out of suspense with guards like it's pending.
[04:32:29] or even look at a way to resolve the last result value, like latest, which I was talking about.
[04:32:36] Um...
[04:32:37] or I keep on going back and forth, whether I want to call this.
[04:32:42] Um.
[04:32:43] Thank you.
[04:32:44] But essentially,
[04:32:48] It makes it difficult...
[04:32:50] It's perfectly fine if people want to guard against specific behavior, but it's difficult to have the default behavior involved.
[04:32:58] cause data to be fetched multiple times or cause
[04:33:03] Um,
[04:33:04] weird tearing to happen, essentially. Right.
[04:33:08] It's very difficult.
[04:33:10] to say like,
[04:33:12] It's going to do a bunch of broken stuff unless you...
[04:33:14] Do something.
[04:33:18] Let's talk about latest for a minute.
[04:33:19] Although...
[04:33:21] A good point here is latest can only be resolved shallower. We can't stop a dependency from throwing in the first place.
[04:33:27] but we can instrument the reed and we can't,
[04:33:30] guarantee that it doesn't throw.
[04:33:33] Sp.
[04:33:33] Yeah, okay. I have an example here.
[04:33:36] User, fetch from some ID. First name, create memo, user first name. First letter, latest.
[04:33:42] First name zero, two uppercase.
[04:33:44] Initially, there's not a value, so latest at minimum needs to be a try catch, right?  Because if you tried to read first name,
[04:33:52] From here.
[04:33:55] So
[04:33:56] it's not going to be defined, right?
[04:34:00] even
[04:34:02] Obviously, it can throw if it's never been...
[04:34:07] evaluated before um but even if like we told it not to throw
[04:34:14] it's going to be undefined. There's no possible way this has a value, right?
[04:34:17] Thank you.
[04:34:20] So while we could say that under latest, this could just return undefined,
[04:34:25] it's going to throw the second you try and get zero out of undefined.
[04:34:29] So a latest helper actually needs to catch and squash basically all errors that happen under it and either return the value
[04:34:38] or undefined. That's basically the operation. It's like try and get the sync value or return undefined. It's not actually latest. It's not actually like a history. It has to be like,
[04:34:48] attempt to resolve this synch, which is why I kind of wanted to call it ResolveSync, except ResolveSync also doesn't make a ton of sense.
[04:34:56] So
[04:34:57] Let's assume it resolved to John the first time, but now we go fetch the user again and something else causes us to look up at the first letter.  When it goes to read the latest again, even though first name should throw it is in latest mode and will return the value John,  which will get us the J safely. One thing that worth noting is if the memo or async has a default value, then the latest would be able to resolve, always resolve out a value. Part of me wonders for the reason is
[04:35:21] wonders for that reason, if the helper itself should take a default value, then again, you could always just or it. What I'm saying here is if if create memo here has a default value, then when it goes to read,
[04:35:33] It's.
[04:35:34] in this latest mode, it doesn't need to actually throw or be undefined.  It can actually be this default value and actually resolve.
[04:35:43] It's kind of interesting that you can set defaults
[04:35:46] Through this,
[04:35:48] mechanism?
[04:35:55] Latest might not be the right name because it really uses the latest value. Something in the future could cause it to fail. We don't get the latest value, we get undefined. So it's more like a try catch with a special mode switch that tries to resolve sync. Like resolve sync maybe. It doesn't force us to resolve synchronously though. More like a
[04:36:11] try to resolve synchronously.  Maybe latest just reads better.
[04:36:15] So basically run once doesn't work. There's no way to avoid scheduling. We need to always throw or force undefined. So we need suspense. We can have better dev tooling around it, but that is what it is. Guards can be helpful like it's pending or latest if we don't want to suspend in places. But fundamentally, if you don't want the fallback to happen for data that you did initially suspend on, we don't have much recourse except to perform transactions or the developer has to use the old latest user or user trick.
[04:36:40] That
[04:36:41] Just isn't the default the system can take when propagating change through the graph, right?  The whole reason we were looking at this run once thing was we were thinking, couldn't we make all user reads be latest or user, essentially?  That was the revelation, like, in the summertime a few months back.  And I think the answer to that question is no.  It's just not a safe default.  If you know that's what you want, go for it.
[04:37:02] But we can't actually make that the default behavior.  The current behavior, you know, minus the couple
[04:37:09] like bugs and the changes to the throwing is actually closest to the right behavior, I think.
[04:37:16] Do push-pull lazy async memos bring benefit? I saw in the previous lives their performance  benefits but they also make things more complicated. Do they really matter? Well, here's the funniest thing is
[04:37:29] I talk about this in my article series.
[04:37:33] At this point, because in order for this to work, async has to be scheduled.
[04:37:38] The only thing that is lazy is the memos now. Everything else is scheduled.
[04:37:43] Async scheduled.
[04:37:44] Effects are scheduled.
[04:37:47] you know, we've actually reduced the surface area solids reactivity  significantly with, you know, projections and like this kind of thinking.  Obviously, there's a lot of utilities, but
[04:37:57] Um,
[04:37:58] you know, with the create writable signal merge and stuff, we're actually getting down to like basically having five reactive primitives and not five with a bunch of dot blanks under the hood, you know, like signal dot link or whatever.  I mean, literally five primitives.
[04:38:13] But
[04:38:15] So
[04:38:17] Yeah, I don't know. It's funny. Solid is the only non-lazy...
[04:38:21] system, all the other ones are lazy and
[04:38:24] All I've managed to show here is that most of the time lazy doesn't actually make sense.
[04:38:28] most of the time, like for most things.
[04:38:31] I think memo, like, computeds are, like, the one place where they make sense.  But almost everything else needs to be scheduled, so...
[04:38:37] Yeah.
[04:38:38] I don't know.
[04:38:41] Current? Yeah, it's  really interesting. It's
[04:38:45] It's not latest. It's not even current. It's like,
[04:38:50] I guess it's current.
[04:38:53] Yeah, it is current, isn't it?
[04:38:57] Because it's not the last result value.  It's like,
[04:39:00] try to get what it is right at this moment.
[04:39:07] Yeah, but when I benchmarked the new version, here's the thing.
[04:39:14] When you do a benchmark, like a rendering benchmark, how many memos do you create that aren't being used?
[04:39:20] The fact that the memo is lazy is irrelevant at that point.
[04:39:24] Because like in solid,
[04:39:27] Render effects.
[04:39:28] and memos run immediately
[04:39:32] on creation. And in fact, I think async, I'm still even with the not late with the scheduling, I'm still going to run it immediately. So if you
[04:39:41] are going to eagerly run
[04:39:43] the stuff
[04:39:46] even though you have
[04:39:47] Um,
[04:39:49] what eager like scheduling like you schedule everything so it's like eager resolution not just pull like
[04:39:56] We're never going to find benchmark.  It's very rare to find benchmarks that are like tests that actually show the impact of having lazy memos unless the benchmark shows.
[04:40:06] situations where not everything needs to be calculated. Like that one like Preact signals test. It's like something that you basically never hit in any focused
[04:40:16] like,
[04:40:17] application scenario. It only happens when you're like in real life.  It happens. There's sometimes parts of the graph that are disconnected and it happens like
[04:40:26] in these like very fictional kind of situations where you're like almost testing for it but like  if someone goes and makes a benchmark they're not going to like  make additional memos that aren't going to be used
[04:40:38] So it is kind of hard from a benchmark perspective.  I have hit value in this kind of lazy calculation and pull approach when like interrupting with other libraries like React.
[04:40:48] because they're pull-based.  So deferring the work can make a lot of sense  until React wants to see it.
[04:40:55] I love ladies and gentlemen, officer and kids. Mike Pearson had a whole arc of how eager signals remove the benefit of cold observables.
[04:41:01] It's true. That's why our from operator wasn't that interesting. But then
[04:41:04] On the other hand,
[04:41:08] Like...
[04:41:10] Thank you.
[04:41:12] Yeah, that's probably where your benefit is putting lazy memos at the end of event streams.
[04:41:18] Because you need like a potential sync to be there.  You need to make the thing.  Then again, create async.
[04:41:26] I mean, this is more fun for you.  Again, create async essentially is...
[04:41:32] you should be able to just pass an observable.  If you go create async,
[04:41:36] return observable because it accepts async iterators.
[04:41:40] But then this one is not lazy, so...
[04:41:43] I don't know.
[04:41:46] Thank you.
[04:41:48] It's funny, though, because create async is probably going to like, I don't need the from operator anymore now that I've created async.
[04:41:59] Couldn't you like just defer hooking the stream up like until you want to listen to it?  I don't know.
[04:42:07] Thank you.
[04:42:09] But yes, generally speaking, if you if you look at like my scheduling logic commits over time on the solid signals repo, it's just like it's just like
[04:42:18] More and more and more stuff is just going back into the queue again.
[04:42:22] Thank you.
[04:42:24] Anyway.
[04:42:25] Done.
[04:42:26] So
[04:42:28] Do, do, do, do.
[04:42:30] talked about those. Okay, let's let's let's get a little bit of this week in  JavaScript in before we're done. Give me two seconds to get
[04:42:38] that together
[04:42:39] Yeah.
[04:42:42] observables aren't async iterators anymore
[04:42:46] I mean, they never exactly were, but wasn't there an interrupt for them?
[04:42:52] Like,
[04:42:54] I mean, are I...
[04:42:56] Now I want to look this up, rx.js.
[04:42:59] I think.
[04:43:02] Thank you.
[04:43:07] I thought people just put the symbol on it.
[04:43:15] Thank you.
[04:43:16] I see. It's still open.
[04:43:19] Thank you.
[04:43:22] Thank you.
[04:43:22] Thank you.
[04:43:24] Oh, I see. So basically...
[04:43:30] Thank you.
[04:43:32] Although I see something merged here. Sorry, let me go back to sharing my screen. Give me two secs.
[04:43:44] Thank you.
[04:43:45] Oh, okay. So this was merged in 2023 and then they like went against it?
[04:43:55] Thank you.
[04:44:00] Although this...
[04:44:03] It looks like
[04:44:04] Thank you.
[04:44:04] He mentions that library in the PR, core team approved.
[04:44:10] Thank you.
[04:44:13] Thank you.
[04:44:15] Thank you.
[04:44:16] Thank you.
[04:44:17] Thank you.
[04:44:18] It looks like this got merged, but like there is an RX4 away, but he's also saying that this got merged.
[04:44:26] Hmm.
[04:44:30] I guess we'll have to try it sometime to find out. Okay, give me a sec.
[04:44:37] Thank you.
[04:44:40] Thank you.
[04:44:41] Thank you.
[04:44:42] Thank you.
[04:44:45] Thank you.
[04:44:47] Oh, actually, I had one other thing on the show. I mean, it's not a big deal.
[04:44:51] Um...
[04:44:52] The reason I pulled this up was that I actually proved that in the new implementation for Solid
[04:44:57] reactivity actually
[04:44:59] Mm-hmm.
[04:45:00] implemented both that triangle and that diamond and they both work.
[04:45:03] They were like test cases from that one I was showing, like,
[04:45:06] were
[04:45:08] Beef.
[04:45:10] And then C...
[04:45:11] And then front is like the front half of the effect.
[04:45:14] Then you see cfetch_later.
[04:45:17] Yeah, and you can see the waterfall happening properly without double fetching.
[04:45:22] Anyways, not that important.  If you care about seeing this example, you can uncomment either or.
[04:45:30] But yeah, this is the triangle.  And then if you comment out the triangle,
[04:45:38] You can also see the diamond.
[04:45:43] Thank you.
[04:45:44] Sorry.
[04:45:45] Which...
[04:45:46] is...
[04:45:47] You see them both fetch at the same time.
[04:45:49] And then as they update every interval fetch at the same time,
[04:45:55] Betfetch.
[04:45:57] effect, fetch, fetch, effect, anyways.
[04:46:01] Just...
[04:46:05] Stuff. Okay.
[04:46:07] Let's go back.
[04:46:15] Okay.
[04:46:20] Thank you.
[04:46:21] Thank you.
[04:46:22] Thank you.
[04:46:24] Thank you.
[04:46:28] Thank you.
[04:46:30] God, there's so many notifications right now. Did I kick over a hornet's nest before I went on stream?
[04:46:37] Whatever.
[04:46:43] Um...
[04:46:45] Thank you.
[04:46:46] Thank you.
[04:46:47] Okay, two seconds. I'm just setting up.
[04:46:50] My Twitter tabs.
[04:46:53] Guess who's a people want
[04:46:55] blue sky content at some point too, but that's not...
[04:46:59] completely where I'm at yet.
[04:47:02] Okay.
[04:47:03] Thank you.
[04:47:05] Last time we streamed was September...
[04:47:09] Thank you.
[04:47:10] Yeah, good. Good.
[04:47:13] And good was September 22nd, I think.
[04:47:19] Okay, let's go through this stuff.
[04:47:25] Bye.
[04:47:27] Thank you.
[04:47:29] Thank you.
[04:47:31] Then solid is here.
[04:47:35] Okay.
[04:47:37] Thank you.
[04:47:40] Sorry, October 22nd, not September.
[04:47:44] Huh?
[04:47:45] All right.
[04:47:49] Thank you.
[04:47:50] All right. Cool. People still alive, still awake? I know this has been long, really deep.
[04:48:00] All right.
[04:48:01] Thank you.
[04:48:04] Thank you.
[04:48:09] Thank you.
[04:48:09] Okay, so I'm going to talk about this week in JavaScript.
[04:48:15] I don't know if I'm
[04:48:17] as connected these days because as i mentioned it seems like there is a mass exodus to blue sky which
[04:48:24] It was kind of nice. It was quiet.
[04:48:27] Got work done, as you can tell from
[04:48:29] all the content in the stream.  So,
[04:48:31] Maybe it's good that everyone went away.
[04:48:34] Um...
[04:48:36] Thank you.
[04:48:37] I
[04:48:38] First, a little bit of solid bookkeeping. SolidHack is still very much in progress.
[04:48:44] Um...
[04:48:48] open the actual link for this.  More challenges. We've been doing
[04:48:54] ones every week.
[04:48:56] been great uh
[04:48:59] payouts so far. A lot of really, really cool contributions. There is only
[04:49:08] Five more days left.
[04:49:11] So...
[04:49:13] Just word out to all you all.
[04:49:16] Um,
[04:49:17] It is coming to a close, but it's been amazing.
[04:49:24] Right, yeah. This is one of my favorite things. We've been doing rewards for guides, so much needed how-tos for solid start have been coming out. It's funny, I build up these things and we put them together and write some bare minimum docs just to keep on moving forward. But then it's like, there's so much hidden potential when you put the pieces together that really needs to be highlighted.
[04:49:51] Every day if someone's like, oh, how do you do this?  And it's like, oh, I haven't thought about it.  Oh, yeah, you just do this.  And then you put it together and you're like, oh, wow, you could write an article about that.
[04:50:01] I'm not going to.  I've got other stuff I'm working on, clearly, but like
[04:50:06] There's a lot of power here that's
[04:50:08] barely being tapped. So I think the, especially the guides bounties have been really, really good.
[04:50:16] Um...
[04:50:17] Anyway.
[04:50:18] Yeah, let me see here.
[04:50:24] yeah no Attila's been doing some great streams recently on some of these topics too
[04:50:28] Um,
[04:50:32] What you're seeing here, so just little solid news type stuff. What do we got here?
[04:50:38] I've been having some trouble doing the retweets on, um,
[04:50:41] Because I don't know how many of these projects are actually, the voting is going to start soon. And people have been building some really cool stuff. And I'm like, is this solid hack or not? Like this library from dev using use socket as a way of doing web socket.  Yeah.
[04:50:58] You know,
[04:51:00] server signal type stuff.
[04:51:02] Really, really cool demos.
[04:51:06] Yeah, Cobalt's getting more and more UI components.
[04:51:10] Yeah, here's the data, the data UI guide challenge.
[04:51:14] I think we,
[04:51:16] posted retweeted that
[04:51:19] Um...
[04:51:21] Somewhere in here.
[04:51:25] Thank you.
[04:51:27] Yeah, this is this has been my biggest challenge because I don't want to like bias things, but like it's really tricky when there's so many cool demos here.  This is Trello using the server signals. Another cool solid piece of news.
[04:51:41] There's a book.
[04:51:42] I almost wanted to see if I could get it printed.
[04:51:44] But this book's been in the works for like two or three years now.  But there is a full like how to use solid book.
[04:51:55] Thank you.
[04:51:57] which is pretty freaking cool as far as I'm concerned.
[04:52:00] Um,
[04:52:05] Yeah, I don't know what to say beyond that because...
[04:52:11] I, it was shared with me.  So I looked through it.  It was very detailed, a lot of chapters.  I mean, you can see it kind of from the overview here.
[04:52:21] But like,
[04:52:23] There's a book.
[04:52:25] We've accomplished something.  Like...
[04:52:30] It's very, very cool. I'm very happy to see these kind of projects come together.
[04:52:34] Um...
[04:52:36] More challenges, blue sky account setup.
[04:52:40] more conference talks,
[04:52:46] Again, I posted this and then found out there's a solid hack
[04:52:51] contribution. This is
[04:52:54] Solid Desk Op written in a native script, develop Mac OS with Solid JS. Honestly, this thing looks
[04:53:01] Crazy.
[04:53:03] Um...
[04:53:05] It's really cool.  I keep on hearing people say,  oh, before it was like,  I'd develop a solid if there's a meta framework.  And then the next thing is like,  if I could do native or other platforms.  And it's like,
[04:53:16] that area is catching up between like NativeScript and Tori at such a rapid pace.
[04:53:22] I don't think, I don't know if people know this, but like in terms of Sol's adoption in large companies, some of our biggest adoption is through non-web platforms, right? It's hard to convince people to move off React because, you know, it's good enough, right? But there's certain places, like,
[04:53:37] television development especially is a place where solid is getting a lot of ground because of the low memory footprint.
[04:53:46] So like,
[04:53:47] Other platforms, it's an area that, well, React Native has crazy solution that's way ahead of most other solutions in terms of how long and how much effort's put in.
[04:53:58] we're getting pretty close to a point now where, um,
[04:54:02] you know, thanks to Native Scream and Tori that like, this is, this doesn't have to be such an  equal ground. You can be like, yeah, I built my application in solid. I built,  you know, solid start for the web app and I built it using Tori for native. And that's,
[04:54:14] That's like, that's a real thing. So, um, I don't,
[04:54:18] you know,
[04:54:19] Thank you.
[04:54:21] The scariest thing about what's happening with Solid right now is that everyone's running out of excuses. They just gotta admit that they just don't care.
[04:54:30] Um...
[04:54:31] Which is a fine position to be in, but like...
[04:54:37] you know,
[04:54:39] the excuses are getting, you know,
[04:54:44] pretty, pretty thin at this point, you know, it's like, oh, it's because other people aren't using it. It's like, yeah, but
[04:54:49] If you use it, maybe then other people use it because they'll see you using it.  It's like it's like.
[04:54:55] who's going to jump first kind of scenario.
[04:54:57] So.
[04:54:59] Yeah, it's kind of it's kind of funny that we're getting to that point.
[04:55:06] Thank you.
[04:55:07] Honestly, that's the best point I could hope for.  There's only so much you can do.
[04:55:12] *laughs*
[04:55:16] Isn't Tori a web view? Yeah, it's interesting because there's there is an
[04:55:21] This was explained very much in detail on stream, but I don't... it's not like capacitor or like ionic.
[04:55:34] Like, it's not like it just runs just straight up like...
[04:55:39] like, oh, here is a web view and you're doing everything.  It's much lower level integrated.  It's not the same as React Bridge, but it's not like
[04:55:47] my understanding is not just like the straight up web browser.
[04:55:53] Okay, is that it? But you have access? Okay.
[04:55:57] Thank you.
[04:55:58] There is a very detailed explanation when I watched in my native script and
[04:56:04] Tori streams that I did.
[04:56:06] A year ago.
[04:56:09] - Thank you.
[04:56:10] We focus more on like the that, but like because Attila was trying to make me like less afraid of like rust, essentially.  So we were looking at those aspects more than the solid aspects.
[04:56:24] Thank you.
[04:56:28] Thank you.
[04:56:30] Thank you.
[04:56:31] I mean, there's definitely a JavaScript executing layer here.
[04:56:41] But yeah...
[04:56:42] There are subtle details, and honestly, it's not an area...
[04:56:49] Thank you.
[04:56:51] Thank you.
[04:56:52] Thank you.
[04:56:55] Yeah, honestly.
[04:57:00] Sorry, this is just a side.  I just saw this, but...
[04:57:09] It's actually
[04:57:10] has been
[04:57:12] really annoying
[04:57:15] all the references
[04:57:19] to embeds
[04:57:20] in my articles.
[04:57:24] are gone now.
[04:57:28] And no way to get...
[04:57:34] them back.
[04:57:38] Thank you.
[04:57:42] Thank you.
[04:57:43] Thank you.
[04:57:48] Thank you.
[04:57:50] Thank you.
[04:57:52] I'm not sure.
[04:58:01] Anyway, where was I? Let's go forward.
[04:58:11] Thank you.
[04:58:15] Okay, I'm going to flip over to my profile here.
[04:58:20] to do
[04:58:23] Thank you.
[04:58:25] It was funny, we were updating
[04:58:28] It's kind of interesting little side story, but we're updating the solid site for the JS framework benchmark, and it kind of asked a question of like,
[04:58:35] What do people want to see in benchmarks?
[04:58:38] Right, fastest versus common.  I'm glad that common won by such a huge thing.  We actually went with React books and Preact classes because I followed...
[04:58:46] the docks are
[04:58:48] In the end,
[04:58:49] but
[04:58:52] it's kind of an interesting question, right? Because
[04:58:56] This is kind of like the current state of performance in the JS framework benchmarks.  And if you look at it, Preact hooks and React hooks are almost identical in performance.  But I was like looking here and I was like, Preact was way up here before.
[04:59:08] It's because these are classes.
[04:59:10] So
[04:59:11] and the React was hooks. Over time, classes have gone more performant. It never used to be that way.
[04:59:17] So I was like,
[04:59:20] as like, is this fair?  Should we use the class version for both React and Preact?  But it turns out that React basically said that classes are legacy, where Preact actually has both examples in all their docs.  So I went with Preact classes here and then we kept React as hooks.  So I think that was the final version here, which looks like this. So.
[04:59:43] Yeah.
[04:59:47] Thank you.
[04:59:51] So, yeah, no, it's...
[04:59:57] Thank you.
[04:59:58] It is an interesting dilemma though.
[05:00:00] Um
[05:00:00] Because Preact also has a signals version, and some people are like, "Use the signals version."
[05:00:04] But it's like,
[05:00:05] It's kind of like in the middle.
[05:00:19] We already talked about that.
[05:00:22] Okay, yeah, let's talk about early returns.
[05:00:26] I talked about this a bit earlier.
[05:00:29] But
[05:00:32] Um,
[05:00:35] I missed this article originally.
[05:00:38] And yeah, component composition is great.
[05:00:43] When I first learned about React and blah blah blah, virtual zone pass, blah blah blah,
[05:00:48] Separations of concerns. Okay, cool. So it talks about conditional rendering. And one thing I do  really like about this example here is it's basically showing a pattern where you can
[05:01:01] hoist the logic, the layout out of the logic, right? He's showing that like as it goes, he has to add all the more conditionals. I think
[05:01:09] Part of the problem...
[05:01:10] With this...
[05:01:12] is...
[05:01:13] The problem isn't
[05:01:15] that there's conditionals. The problem here is that
[05:01:18] you have mutually exclusive conditions. There's a difference between conditions that
[05:01:23] Um,
[05:01:24] are
[05:01:26] like turn this on and off and ones that are always
[05:01:29] mutually exclusive. So
[05:01:32] And
[05:01:33] Like.
[05:01:34] the complexity of,
[05:01:36] comes in here was that, oh, they missed the empty state.  But it's because...
[05:01:43] basically these are all mutually exclusive at least these two end up getting tied together but if you think about it
[05:01:49] All of these are actually tied off the same thing.  They're all based on the data prop.
[05:01:53] Um...
[05:01:54] So fixed it, empty screen.
[05:01:58] Okay, back to the drawing board, right?
[05:02:01] Pulling out the layout is smart.  It lets us focus on
[05:02:04] what's here.
[05:02:06] Right.
[05:02:08] But...
[05:02:09] Um,
[05:02:12] The idea here is that
[05:02:14] If we...
[05:02:15] separate these mutually exclusive states into separate things, then the code is much easier to read. Instead of trying to go, "Okay, what's this combination? What's this combination? What's this combination? What's this combination?"
[05:02:28] you now can go, when this, do this, when this, do this, when this, do this.
[05:02:40] So, and the argument is reduced cognitive load, yeah, right?  Clear path for other, nothing is nested.  Like async weighted becomes easier to reason about when reading top down.
[05:02:49] Async await is like the worst thing in a component, but that's a whole other thing. Even if
[05:02:54] A statement with a return represent one state the user can see. Notice we've moved the data sign to the last branch because only one where it matters. That's true. Easy to extend. Yeah. Now we can also add more conditions like error handling without fear of them breaking other states. It becomes simple to dropping when an if statement.
[05:03:08] Except...
[05:03:10] Again, this works because all the heavy loading is happening here.
[05:03:14] If adding error conditions required you to go to here, go to here, and go to here, this might arguably be worse.
[05:03:21] Right.
[05:03:22] I think it depends on the type. Better type inference, right? Because
[05:03:26] Not data means it's thing, right?
[05:03:30] But the complaint is layout duplication. You're re-rendering the layout component
[05:03:35] every
[05:03:35] Time.
[05:03:37] .
[05:03:38] Now,
[05:03:40] As you guys know.
[05:03:42] and solid.
[05:03:43] re-rendering the layout component every time is about the worst thing you could possibly do.
[05:03:48] Right. So like,
[05:03:49] But also we don't have early returns, so we can't really do this.
[05:03:53] Unless you put in a memo, which then also is about the worst possible thing you could do. But...
[05:03:59] My grievance with this is
[05:04:01] that
[05:04:03] is it was twofold because I saw this article and I was like,
[05:04:09] This is not great.
[05:04:12] Like I understand that you want to optimize readability over optimization, but like to the layout. But the fact is,
[05:04:20] What's the difference between early returning
[05:04:23] and just recognizing that
[05:04:25] and
[05:04:25] This is a
[05:04:27] you know, trinary or whatever.  It's like three...
[05:04:30] three possible returns, right?
[05:04:34] I think...
[05:04:36] The thing is, at the beginning, you treat them all like they're flat.  But if you actually make the same.  So when you switch to early returns, you decided that these are three mutually exclusive states.  If you make that same assumption.
[05:04:48] about your code.
[05:04:50] Anyway,
[05:04:52] Um.
[05:04:55] You can...
[05:04:58] you can slightly change the code layout. Yeah. So for example, here,
[05:05:03] Don't get me wrong, I'm not a huge fan of going turnarary, turnarary,
[05:05:07] ternary one two three but actually if i let's
[05:05:12] Let's put this into a place that has syntax highlighting. You can see what I'm talking about.
[05:05:20] Thank you.
[05:05:21] Mmm.
[05:05:23] If you have a syntax error
[05:05:27] Thank you.
[05:05:30] The reason...
[05:05:31] Oh, did I miss?  Yeah, the reason I wanted to...
[05:05:34] Thank you.
[05:05:36] I say this.
[05:05:41] That's just...
[05:05:45] Thank you.
[05:05:47] something... okay
[05:05:52] Let's try this again.
[05:05:54] Yeah.
[05:05:56] Thank you.
[05:05:59] Thank you.
[05:06:00] When you lay it out like this, not only are you not like duplining the layout, you are actually still doing like, it's like the earlier turn, you're just doing like this, then this, then this. There's three data flow paths.
[05:06:14] arguably
[05:06:15] This is slightly less clean than the if statement, but it is still bang, bang, bang.
[05:06:21] Right?
[05:06:23] The funny thing about this though is,
[05:06:26] from like the alternative perspective here is,
[05:06:29] If this is the baseline,
[05:06:32] Is early returns just a different templating language?  See, you can't put a hook
[05:06:37] in between after the first return.
[05:06:40] You can't like put a hook here.
[05:06:41] right all hooks all data stuff has to be here that basically
[05:06:47] Even.
[05:06:49] Everything below your last hook
[05:06:52] technically is the template.
[05:06:54] So in a sense, a different way to look at this is this is just an alternative template syntax that's not JSX, but it's still templating because you still can't actually nest state down here.
[05:07:04] So everything after this is technically the template.
[05:07:08] Right.
[05:07:09] which
[05:07:11] means that effectively all you're doing is adding a
[05:07:13] Additional way of doing the same thing you could have done in the template you're using statements instead of expressions sure but like
[05:07:21] You're doing this for convenience in terms of that.  The other problem with early returns, kind of fundamentally, again, it doesn't impact  React very much here, is that...
[05:07:33] Essentially,
[05:07:35] you're ensuring
[05:07:37] like
[05:07:38] Can you mind the...
[05:07:40] Consider the difference between these three.
[05:07:44] when you have a condition
[05:07:47] Early return.
[05:07:48] If you change this block or you change this to text.
[05:07:52] When something changes,
[05:07:54] This is all that needs to change.
[05:07:56] from like a fine grain perspective.
[05:07:59] It's only the condition needs to change.  The higher up you hoist this, the more work you have to do.  You almost always want to actually push the conditional logic  as far down as possible.
[05:08:10] Obviously not at the cost of
[05:08:12] you know,
[05:08:13] breaking apart mutually exclusive paths necessarily, but
[05:08:17] from a pure work standpoint,
[05:08:21] This has no choice but to rerun the whole component.  This runs this, and this reruns this.
[05:08:34] Thank you.
[05:08:37] So like...
[05:08:42] like...
[05:08:43] How did I phrase it here?
[05:08:45] This may reflect on how far reacting use we're going to have.  Early returns lend to architectural inefficiency.  It pulls decisions upwards where further...
[05:08:52] Farther positions are pushed down the more often it can be. It might not impact React but it doesn't leave a way forward.
[05:08:57] Um...
[05:08:59] Yeah, let's try to focus on readability, right? I think you can read the last thing with the higher end of them. With all these inline turners, it's very hard to compute your head what actually is rendered at any given time, because they're not mutually exclusive, is what I'd argue.
[05:09:29] return hooks can't be declared after the first return. So we are gaining in hoisting and unwinding is mostly introducing a secondary statements and taxed or template everything after the last hook is part of the template to me it's a wash on scaling cognitive complexity because the nature of the Hansen determines whether it aligns with the split or causes additional duplication that can lead to
[05:09:46] Mr. Lead to Errors. I often say premature boundaries are the enemy of future optimization and this seems like a way to add more with very little upside. Yeah, because what I was going to put in here is
[05:09:56] When he was talking about in the article,  like, oh, look how you don't have to null check data anymore.  Well...
[05:10:02] Guess what? You don't have the null check data in this example either.
[05:10:05] Right.
[05:10:07] because the condition still exists. Obviously
[05:10:12] Um...
[05:10:13] The reason I say it's a syntax thing is because
[05:10:16] It's messy, right?
[05:10:18] The ternarines are messy, right? But if I think pure
[05:10:24] wrote something here. Essentially, they showed there is an example that showed do expressions.
[05:10:28] Somewhere down here, yeah, what was it, do expressions?
[05:10:31] No, it wasn't that one. But like even solids control flow,
[05:10:35] basically alleviates the readability or svelte or views control flow.  It alleviates the readability.  It's just kind of interesting to me that like,
[05:10:44] conceptually,
[05:10:45] the the return single template languages actually have only a single way of doing this kind of
[05:10:50] control flow where React offers like a secondary way by allowing early returns.
[05:10:57] But it also like...
[05:11:01] pushes people to making inefficient decisions.
[05:11:12] I think people care about syntax though, yeah.  I never said people were smart.
[05:11:20] I'm sorry, one of my pet peeves is people over indexing on syntax.
[05:11:26] Like it's, it's just like this, it's, it's the thing that you can just be like, oh, snap, I changed it.
[05:11:31] like
[05:11:33] It's...
[05:11:37] Thank you.
[05:11:40] Yeah.
[05:11:42] Yeah, switch match. Sorry, switch match is a good example. Yeah.
[05:11:50] If create variables, the thing is we can actually create variables nested.
[05:11:54] in control flow. If you do a show, you can actually create signals inside
[05:11:59] The show component callbacks.
[05:12:05] Yeah.
[05:12:06] Thank you.
[05:12:07] Thank you.
[05:12:08] But like, yeah, no, yeah. Just create better syntax, which is what I'm saying. We, we have, right. And I think, uh, templating language have, and you can with JS. I'm just saying like,
[05:12:19] It's
[05:12:20] It bugs me that
[05:12:23] When the solution pushes you towards less efficient approaches, it bugs me.  Like, it's like, oh, we should early return.  It's like, no, no, no.  We shouldn't early return.  We should, like.
[05:12:32] step back and think about what we're doing here. Early return is like,
[05:12:36] This is what I meant by not leaning to a way forward.
[05:12:39] you know, maybe it doesn't matter in React, but this is always...
[05:12:44] better than this.
[05:12:47] Like mechanically, like there's no like this is the absolute truth.  There is a great follow up here where.
[05:12:56] Where was it?
[05:12:59] I tend to optimize for humans first, then for forms. If necessary, I value readability very highly. If I can't understand new code, then it's difficult to refactor, introduce new changes, and use bugs. Only optimize when necessary. As an application developer, I agree. As a framework author, I understand that at some point you'll need to optimize, and certain decisions make it nearly impossible to do so later. Luckily, in this case, I don't think it's a real readability concern. It's a syntax problem.
[05:13:20] Um...
[05:13:21] that not the one? No. There's another one.
[05:13:25] There was a really cool discussion.
[05:13:28] Thank you.
[05:13:31] Thank you.
[05:13:33] I'm not gonna find it now. This is making me very sad.
[05:13:37] uh maybe it was after my my comment one of the responses to this one
[05:13:44] Thank you.
[05:13:45] OK, are you optimized for the machine or for other humans?
[05:13:48] Start with the first, get the second. One is physical law and one is social. You can't remove gravity, but you can make efforts to stop people from falling off cliffs. My concern, aren't limited to machines. Some of it may be preference to early returns introduced a secondary way to do conditionals. In the case of React, they have additional hook rule consideration, so it isn't just like we're dealing with a simple function.
[05:14:08] Thank you.
[05:14:08] They are just an extended part of the template as all hooks need to be declared before the first return. It distributes the logic in a way that takes up more space. Some people do prefer having things more spread out, but I like decisions reflecting where they sit hierarchically. Removing duplication in the template can be good not just for performance, but for composition. The article gave an example where only the success paths need to pass the title to layout, but the separation reduced
[05:14:28] So the separation to reduce logic, however, the opposite is often true.  If the component used elsewhere, you might need to apply the same logic across three  templates now instead of a singular space.  Let's pretend there is a toggle for mobile versus desktop layouts, so missing things
[05:14:39] is just as possible with this approach,  except now the logic might not be in your view.
[05:14:44] It's funny because like Marco, again, I know you guys don't think, but Marco 6 is like the exact opposite of this.  You can just nest state.
[05:14:52] like inside the template and with the widget as much as possible.  Having seen that this is like,
[05:14:57] the like
[05:14:58] I love Marco's capability, maybe not always the syntax of that, but its capability is
[05:15:04] like unparalleled. This is like the exact opposite spectrum. It's like the wrong direction. Interesting. I prize the other way around, catch humans in the social net to protect them from relentless gravity.
[05:15:14] What I'm getting at is if you do things a bit differently, you can land more with the physical environment rather than fight against it.  You sometimes don't need a net if falling is the way you get around.
[05:15:22] Like flying with a wingsuit in the canyon of technology.  Not everyone in Coder knows how to wingsuit properly, but most know how to walk a bridge.  It depends on your peers which code style suits you best.  God, I love analogies.
[05:15:34] Right. But I actually enjoyed this conversation a bit because I think this is sometimes my biggest gripe with React. React's abstraction is just far enough from the underlying like DOM, you know, React's abstraction.
[05:15:46] mutable re-render, underlying DOM is mutable, it's retained mode.
[05:15:51] that
[05:15:52] Sometimes.
[05:15:54] if you align with what you're building on top of more, you can just get more out of it. So like,
[05:16:00] We make assumptions based on like
[05:16:03] this is what people think is convenient or this. And it's like,
[05:16:07] We have to obey them.  This is why it's very important when we build frameworks,  we think about developer experience on that.  But on the other hand, sometimes the assumptions just
[05:16:15] aren't necessary and you shift things a little bit and you're like,  Oh,
[05:16:18] actually
[05:16:19] like this best practice actually is just not important at all anymore.
[05:16:28] Thank you.
[05:16:29] Thank you.
[05:16:30] Thank you.
[05:16:37] Thank you.
[05:16:39] Thank you.
[05:16:41] .
[05:16:46] This is all I've been, that's why the React compiler does that.  Does the React compiler do that?
[05:16:52] Does it
[05:16:53] Does it look for the duplicated JSX ranges and then like dedupes them and then brings them back into here? I hadn't actually seen that.
[05:17:05] If it does, that's...
[05:17:06] That's definitely interesting. I wonder what thing does it consider it too separate that it can't merge it back together?
[05:17:16] Thank you.
[05:17:17] Okay. Just throwing that out there.
[05:17:25] Do you have an example? Example of what?
[05:17:32] if you mean like my general statement about like aligning with the platform or not in terms of like
[05:17:37] architecturally, it's like
[05:17:41] Thank you.
[05:17:45] I doubt that that's something. Yeah. I mean, maybe there's a future in which they can solve that specific case. But I think I think the problem is like,
[05:17:52] I don't know. It's just very interesting to take perspective of like the compiler will solve it all for us one day versus just like this.
[05:17:58] Can you write the right thing? I don't know.
[05:18:00] Um.
[05:18:02] In any case, um...
[05:18:08] The reason I thought this was interesting is because it reminded me of like,
[05:18:12] Well, I'm going to be missing all the freaking Dan Abramoff quotes.
[05:18:21] Thank you.
[05:18:23] *pain*
[05:18:28] This is so frustrating.
[05:18:31] All the embeds that are missing now...
[05:18:39] Thank you.
[05:18:41] But it reminds me of this example, I'm just going to pull it up again. Dan showed some really convoluted logic where data is happening in multiple different places.
[05:18:52] Right. And then he's like, look, if you have this crazy convoluted logic and you want to add more convoluted logic, um,
[05:18:58] You know, okay, so it's all the same. He's like,
[05:19:00] Okay, that's fine. And then he's like,
[05:19:03] Let's add some more convoluted logic.
[05:19:05] And look how hard it is. But in solid, now it's like this and like this and he breaks it apart, right?
[05:19:11] And then...
[05:19:13] you know,
[05:19:14] Thank you.
[05:19:19] I was like, why wouldn't you just if you just align it to
[05:19:24] And obviously there's some extra syntax here because it solves functions.  But if you just align it, if you took his original code, let me see here.
[05:19:32] Yeah, here.
[05:19:34] you could, this is the React version aligned.  I could take all of that crazy looking logic
[05:19:39] as long as I restructured it in a way that followed the data flow, instead of the control flow,
[05:19:44] And yes, I needed to duplicate...
[05:19:47] some kind of check when I added the extra logic here.  Like guess what, count bigger than zero is in two locations.
[05:19:54] But the end code of saying, Hey,
[05:19:58] This is something else. This is heading. This is count. These are the things I care about.
[05:20:02] Right?
[05:20:03] I care about this.
[05:20:05] I drive this out and I put it in is a billion times cleaner in the end than
[05:20:10] I don't even know...
[05:20:12] what this code is doing.
[05:20:15] Like,
[05:20:16] like
[05:20:17] Dan was like,
[05:20:19] proud of the fact that like he'd taken some really convoluted code to illustrate the point,  add a bunch of like logic and showing like how much harder to do it. But like the truth is,
[05:20:30] In solid, you just wouldn't have written the polluted code in the first place and you just would have written this.
[05:20:36] I feel that way about this early returns thing where people are like,
[05:20:42] The problem with this article
[05:20:44] was that
[05:20:45] the
[05:20:46] Logic wasn't mutually exclusive in the first place.
[05:20:52] Switching to early returns pushed the person to make the right pattern.
[05:20:57] But they could have just made that right pattern without their early returns.
[05:21:01] Right?
[05:21:02] Like,
[05:21:05] Yeah, anyway.
[05:21:11] Yeah, which is which gets me to they really don't think of React in terms of state derived in effect, which is literally their API, which is what makes it so confusing, right? Because it's.
[05:21:24] Let's go ahead a little bit here.
[05:21:33] Yeah, I mean, I guess I think in data flows always. So like,
[05:21:41] Like...
[05:21:42] I
[05:21:43] I...
[05:21:44] I...
[05:21:46] Thank you.
[05:21:46] And it's probably the same reason I don't like the early returns.
[05:21:49] Because it's a control flow mechanism.  This is the exact same argument.  It's like data flow is a control flow.
[05:21:55] Right.
[05:21:57] As it gets more complicated, I still prefer data flow over control flow.
[05:22:01] It's it's.
[05:22:02] It's
[05:22:03] it's like it's just the way i think maybe that's not the way everyone thinks which  is why we have such a fundamental thing i think it's
[05:22:09] being able to know like how to get this piece of information
[05:22:15] is more valuable than the imperative logic of how you got to it.  Like, oh, if this condition, then do these things or this thing.  I know people think of parity imperatively, this and this and this,  but the data flow is actually like,
[05:22:26] the ultimate truth. And it usually, when reduced down like an equation like with math,
[05:22:30] is can be more optimal.
[05:22:33] Thank you.
[05:22:35] So it's like a win for clarity and a win for performance.
[05:22:46] Where was I going?
[05:23:04] Met dev. That was cool. Okay.
[05:23:08] Types-- this is an interesting question.
[05:23:11] But
[05:23:13] I actually...
[05:23:15] If you cap a
[05:23:18] I'm not too worried about that.  Let's just finish to the last thing.
[05:23:21] Theo posted this thing, which is funny because it's just a view.
[05:23:31] Thank you.
[05:23:32] Thank you.
[05:23:35] Thank you.
[05:23:36] Thank you.
[05:23:47] The other argument is that you can't do control flow and solid without verbatim both syntax.
[05:23:51] That's probably fair.
[05:23:54] But then unless you just like jam it in and create memo, but then like you don't want to do it that way.
[05:23:59] Solid...
[05:24:01] doesn't want
[05:24:02] um
[05:24:04] control flow, though, really, anyways. So it's
[05:24:07] Yeah, I don't know.
[05:24:13] Like, it's one of those situations where I'm not even remotely convinced at all. Like,
[05:24:19] like it's probably true but it's like every every time there's an example it's just like
[05:24:28] Yeah, I don't know.
[05:24:32] I think so.  I mean, if you watch it with my stream, I actually think ruins are not great because I actually...
[05:24:40] I was thinking about that because we actually have this, right?
[05:24:43] If you've ever seen the solid
[05:24:45] solid labels.
[05:24:46] thing, right? Solid labels, had it for like three years now.
[05:24:50] It's basically...
[05:24:52] It's ruins, right?  Effects, signal, blah, blah, right?  The problem besides the teaching element of it,  which is, like, I was convinced  it swayed at NextConf towards it  because I was like, oh, you know,  it wouldn't be hard.  We literally already have this capability.  But I actually...
[05:25:08] I forgot that I did a whole stream on ReactiveScript where
[05:25:13] Essentially, I concluded
[05:25:15] that the API here
[05:25:17] at least from my perspective, it's fine, it's felt like Sitter or whatnot, isn't just
[05:25:22] like a preference dislike, but actually
[05:25:25] Um,
[05:25:28] like gets in the way.
[05:25:30] Um...
[05:25:32] Like, I'm actually like,
[05:25:35] I...
[05:25:36] It's it's it's kind of awkward.
[05:25:38] that
[05:25:39] like I was like sold on him like who cares I can just give it to him but I actually think it's
[05:25:43] Probably.
[05:25:44] bad that people would use this API.  Like, sure, they could, but  ultimately, it's actually like
[05:25:51] Thank you.
[05:25:52] I wasn't prepared to talk about this one.  I probably should talk about this again,  but I actually did a whole stream on it,  so I feel like...
[05:25:58] Like, one of those examples where I kind of, like, forgot that I had already, like, went really in depth and I concluded that it was, like,
[05:26:09] Which one was it? Revisiting SolidScript reactive compilation.
[05:26:15] This stream is probably...
[05:26:19] Thank you.
[05:26:26] Yeah, there was...
[05:26:37] Yeah. I can't remember what the conclusion was at this moment,  but I remember like it came back and we were talking about it.  I actually had a discussion with the core team about this, you know,  like, well, why not? We could just release it. And then I was like,
[05:26:50] Actually, maybe I'll open this off screen so I can actually
[05:26:53] See this?
[05:26:55] Bye.
[05:26:56] I...
[05:26:57] I think if I look really quickly, I can find what I was looking for.
[05:27:04] Give me two seconds. Sorry, people.
[05:27:08] Thank you.
[05:27:10] Thank you.
[05:27:11] Thank you.
[05:27:15] Thank you.
[05:27:26] Oh, damn it, I didn't actually write it down.  I just said the exact same thing I just said.
[05:27:35] Thank you.
[05:27:36] Thank you.
[05:27:37] Thank you.
[05:27:38] Yeah, basically, I have reasons that I don't think ruins are the direction that I'd want to go with solid from a technical aspect to actually get in the way.
[05:27:49] I can talk about it again, but I think I covered it pretty good in the stream.
[05:27:56] No, like, I think it's a bit covered in the stream, but I actually
[05:28:01] I actually think that like,
[05:28:03] The part of the syntax they compile away actually...
[05:28:09] is missing. Like, I want ruins, but then I still want the setter function. Like,
[05:28:13] Basically, they can't solve the immutable
[05:28:16] read/write segregation problem in a way that's satisfactory,  especially for deep nested reactivity, which we covered  mostly in the store--  and sorry, in the stream.
[05:28:25] So like giving people a syntax that's not expandable.  So the full capability solid is actually kind of backwards.  And so one of the other benefits would be so you can easily combine mutable and immutable reactivity, which I'm now coming to realize or think is actually really good.
[05:28:41] Bad idea. So like
[05:28:43] It's
[05:28:44] It's not just
[05:28:47] Thank you.
[05:28:48] Like...
[05:28:49] I actually think it actually doesn't give the same capabilities. It actually gets in the way.
[05:28:56] Thank you.
[05:29:01] Yeah, yeah, yeah, like there's
[05:29:06] I it's interesting, I think.
[05:29:09] in an immutable world,
[05:29:11] I might want ruins, but in a mutable world, I think...
[05:29:14] think it's not where I want to be.
[05:29:17] and not just for deaccess and people can pick up this i actually think it actually gets in the way
[05:29:22] I mentioned earlier from a compiler standpoint that the one thing React can't do is...
[05:29:29] is like matches the mutable reactivity and
[05:29:34] Thank you.
[05:29:35] Yeah, I mean, there might be a ways around it, but
[05:29:39] Yeah.
[05:29:42] OK, let's go back here.  Anyways, Theo showed this thing, Vine, for its view with HTML template language.
[05:29:53] Um,
[05:29:54] And with component function stuff, he's like, this looks so good, right?
[05:29:58] Thank you.
[05:29:59] Now,
[05:30:00] it's just funny react.
[05:30:03] and Theo goes kind of it's more simply solid but interops are traditional view files yeah so
[05:30:08] If you don't like SFCs.
[05:30:10] So then I looked at the post engagement here and it's like,
[05:30:13] Angular does that, that makes sense.  Blah, blah, blah.  Why is everything have to be dramatic?  Where is it?  Because the view ecosystem's underrated, that's fair.
[05:30:21] Chest pain, anytime I see something that's not JSA, sex, that's fine.  Dev reacts.
[05:30:25] Blah blah blah.
[05:30:26] There's something that's like, oh, it's funny.
[05:30:28] these guys will do anything but write react bro they invented react
[05:30:32] something, something, React.
[05:30:35] uh,
[05:30:37] Basically, I've just kept on seeing these comments and quotes talking about React here and I was just like,
[05:30:42] What?
[05:30:45] Why is...
[05:30:47] everything react, right?
[05:30:50] I was also on the Svelte Discord earlier and I was noticing these people complaining about the ruins syntax. It doesn't take long to... I mean, it's fine. I don't need to pull up the Reddit. So not Discord, I was on the Reddit. I don't need to pull up...
[05:31:05] Reddit right now, they know what I mean. But there's people going on and on about how Svelte is React and all this stuff. And it's like,
[05:31:15] I... I...
[05:31:16] Yeah, I just don't.
[05:31:18] Mm-hmm.
[05:31:20] I haven't decided if people are trolls or if they really believe that
[05:31:26] Svelte 5 or the view composition API is like these frameworks attempts at copying React.
[05:31:37] You don't need to pull up Reddit, period.
[05:31:41] Thank you.
[05:31:44] Thank you.
[05:31:47] Thank you.
[05:31:50] But basically it led to this comment here, which is, "Syntax in JS frameworks is overrated.  Is anyone actually surprised that the same people who complained about Svout ruins being  too much like React now, that they are migrating their apps or realizing how much cleaner it  is?  Ruins are never about React."  Yeah.
[05:32:06] It's...
[05:32:07] we've talked about this agnosium,  but like,
[05:32:10] Evan showed that cool thing where he basically...
[05:32:14] Exported solids signal API using views, signals as a, you know, ruins, I just showed labels, which is basically ruins, you know, three years ago, the change, the interrupt from a syntax level here, even with react itself is so trivial, but react
[05:32:32] behavior, the reason Svelte didn't come out a year ago when they showed the ruins the first time, is because the behavior is a thing that actually matters. The semantics, the meaning of these statements, there's a difference between, there's a huge, huge, huge difference between hooks and signals. They do not run at all the same way.
[05:32:50] And
[05:32:51] But
[05:32:53] you know, people see hooks or they see a function.  And it's like, oh, it's React.  And it's like, no, it's actually nothing like React.  And I understand.
[05:33:02] This is largely because what people get out of these tools,  they don't understand them in the same way as  framework authors, but like
[05:33:09] hearing about syntax endlessly when it's literally the thing that like,
[05:33:14] Like if you don't like solid functions, wrapping them in dot value, like view style, I think I did it in the code sandbox took me
[05:33:21] 10 minutes.
[05:33:23] As an author or like a maintainer, you don't want to necessarily offer like 10 billion different syntaxes. I mean, you could I think Vue was looking at that at one point, but like
[05:33:34] The problem is you divide everyone.  Like you can't make,  like there's no consolidated way of approaching it,  but there's nothing that stops people  within their own projects to make these kinds of decisions.  So it's like,
[05:33:47] The funniest thing is now with this felt kind of backlash, and I guess we can see this better on Blue Sky, although I don't think I'm logged in right now, because I posted the exact same thing as an experiment.
[05:34:03] Thank you.
[05:34:04] Let's see here.
[05:34:07] Which post is more popular?
[05:34:10] I have not looked at my notifications, let's look at my profile.
[05:34:12] Um...
[05:34:14] Okay, Twitter still wins.
[05:34:17] But I got to talk to Rich.  Basically, the idea here is that React, they're still reeling from this whole thing, right?  Which was...
[05:34:26] dumb to begin with. I have a whole conference talks about this. Literally,
[05:34:30] What people should be looking at is an, like,
[05:34:33] the expression count. This stuff is wrappers, you're missing the script tag here, so the script tag here would be the same as the function example, but essentially
[05:34:41] This is one line. This is one line. They're identical. Oh, you have to cut typing a few extra characters doesn't actually matter at all. So like, I guess the problem is when people see stuff like this versus this, it's like, oh, wow, the world's over. And it's like, maybe, maybe Svelte deserves this because they're the ones who made a big deal about this versus this in the first place. But it's also like,
[05:35:04] This is...
[05:35:05] not
[05:35:08] Like,
[05:35:09] When you consider the clarity, the expressiveness of intent that can be added here versus typing five less characters or whatever it is, it's...
[05:35:19] It's kind of...
[05:35:20] It's insane that this is even a topic.
[05:35:23] To me.
[05:35:24] I know, like...
[05:35:29] It's just the thing, we've been so spoiled down the DX train that this is where we sit now.
[05:35:37] You know, like...
[05:35:40] I know I'm going to sound like an old guy, but like 15 years ago, you didn't have such good tooling and capability that like,
[05:35:48] No one's going to be
[05:35:49] I don't know. I guess we had CoffeeScript and CoffeeScript let you type less. So fair enough.
[05:35:54] You know, people have always wanted that kind of thing.  But it's like the interesting part about CoffeeSix script to me wasn't the space syntax.  It was the fact that it had like.
[05:36:04] arrow functions with bindings and like, um,
[05:36:08] So
[05:36:09] classes, if that was what you were into, or, you know, like,
[05:36:13] destructuring. It had a whole bunch of stuff that came in ES5. It wasn't because
[05:36:19] you got to type less. There's always going to be a tool that lets you type less. It's called Marco. But
[05:36:26] Like...
[05:36:27] All right.
[05:36:28] um
[05:36:28] Is that really...
[05:36:31] like what this is about.
[05:36:37] Thank you.
[05:36:38] people will die for syntax.
[05:36:43] *laughs*
[05:36:44] Uh...
[05:36:47] Yes, it was most people in the 1.2. Hey, Jay.
[05:36:50] Yeah.
[05:36:55] Thank you.
[05:36:56] No, I am on a Mac OS machine.
[05:37:05] Sorry, just catching up with chat here.
[05:37:12] Most people look at how things look. Yeah, I know. I know. It's just...
[05:37:17] We're at a point now where the looks are so superficial that,
[05:37:22] that you literally can be looking at the complete opposite thing and they look identical.
[05:37:28] that
[05:37:30] Like,
[05:37:31] I can say stuff like,
[05:37:33] Ruins are nothing like react felt three was just like react and confused the hell out of people on a daily basis.
[05:37:44] And they literally don't think about how any of it works.
[05:37:51] Thank you.
[05:37:52] Yeah, I mean...
[05:37:55] It's an... I mean...
[05:37:57] I love this about JavaScript and about the web, that you can just pick it up and not worry about this stuff and just build something.
[05:38:05] But...
[05:38:06] Yeah, I mean...
[05:38:08] Maybe I'm in the wrong field.
[05:38:13] I literally only care about how things work.
[05:38:17] *sigh*
[05:38:19] *sniff*
[05:38:25] Thank you.
[05:38:27] What am I saying? Did I say ruins, ruins? I don't know.  You won't believe the Imperials reason they tell us, so they type fewer characters.
[05:38:34] Thank you.
[05:38:36] I compile it so...
[05:38:39] Jay, I didn't even realize...
[05:38:42] How does commenting even work on
[05:38:45] On...
[05:38:47] on X.
[05:38:48] Is it enabled? I didn't even realize there's a chat in here.
[05:38:53] Oh, there is.
[05:38:54] You're the first one.
[05:38:57] I
[05:38:59] Well, that's good. I'm glad chat is enabled.
[05:39:01] Thank you.
[05:39:03] Ugh.
[05:39:06] I don't know.
[05:39:08] The syntax thing is just...
[05:39:11] It's something I'm going to have to live with. I've known this for years that this is what people look at. It's just like...
[05:39:17] There are...
[05:39:19] There are mechanical implications of syntax and back and forth.  They aren't completely on it.
[05:39:23] separate, they are related, there are importance elements of it, but like,
[05:39:29] The number of characters you type is probably not an important element of it.
[05:39:36] So...
[05:39:39] Yeah, I don't know. I'm I'm I'm
[05:39:42] I'm at the end here.  I'm going to wrap up here in a minute, but, um,
[05:39:52] I don't know. I...
[05:39:53] Maybe maybe I should pull up the Reddit. Maybe this is the last thing that I want to look at here.
[05:40:01] Let's see if I can go R svelte.
[05:40:05] Thank you.
[05:40:08] I'm going to look at my notifications.
[05:40:14] I saw this thing and maybe this is where I'm going to go. With frameworks like homogenizing, I believe Svelte has no future.
[05:40:22] You've got to love Reddit.
[05:40:26] Thank you.
[05:40:27] "Svelte is my favorite framework, but I worry about choosing it, it could become obsolete."
[05:40:33] Thank you.
[05:40:37] Thank you.
[05:40:39] It has compiler, signal based reactivity, simple HTML like formatting.  Here's the thing.  Solid has a compiler.  View is working on vapor.  Signal is being docked by everyone.  View is similar.  Moving towards being complete.
[05:40:50] being complete signals.
[05:40:52] Weren't they always complete signals?
[05:40:58] Thank you.
[05:41:01] Thank you.
[05:41:02] Thank you.
[05:41:05] Oh.
[05:41:09] Yeah, I mean, I can understand the sting from Evan's standpoint.  Yeah.
[05:41:13] You know, he's like, they're called observables and refs and view.
[05:41:16] signals came before the composition API, like,
[05:41:21] by several years but
[05:41:23] I get what he's saying.  View...
[05:41:26] has been doing this kind of reactivity under the hood for
[05:41:29] even longer.
[05:41:32] So,
[05:41:33] Okay, let's key here.
[05:41:38] Yes, state-derived effect.
[05:41:40] Yes.
[05:41:41] Problems that when viewed eventually the compiler does felt have to offer.
[05:41:45] And when Vue has acquired it, how can they do something better with funding?  It looks different for Vue, except Vue has jobs and libraries that aren't abandoned.
[05:41:55] It's funny, I'm sure like we actually get this question, I think on solid discord or Reddit as well.
[05:42:03] Are people worried that after seven years or
[05:42:07] Yeah, Svelte
[05:42:08] Actually, we should wish Svelte happy birthday.
[05:42:12] Uh, just a second, GitHub.
[05:42:15] Svelte is almost...
[05:42:18] To the day, I think...
[05:42:22] It's fault.js maybe.
[05:42:24] is almost to the day,
[05:42:28] Eight years old.
[05:42:32] Thank you.
[05:42:34] I know there's probably a quicker way of figuring this out. But what I like to do is go to
[05:42:40] What is it?
[05:42:41] commits usually.
[05:42:45] Where is it?
[05:42:48] No, not the specific commit, I need the commit history.
[05:42:51] Why am I not seeing it right now?
[05:42:54] Um...
[05:42:58] I mean, you can look back on releases.
[05:43:01] Am I not seeing it right now?
[05:43:07] Thank you.
[05:43:09] Thank you.
[05:43:10] I'm just blind.
[05:43:19] Thank you.
[05:43:21] I'm just so blind right now, why am I not seeing it?
[05:43:28] Commits.
[05:43:32] The clock icon.
[05:43:34] Thank you.
[05:43:34] Yeah, it's because I'm blown up. I think that's the problem. I'm so blown up here.
[05:43:41] There it is.
[05:43:43] All right.
[05:43:44] Thank you.
[05:43:45] How many commits does Svelte have, roughly?
[05:43:52] Thank you.
[05:43:52] Thank you.
[05:43:57] Thank you.
[05:44:00] Too far.
[05:44:03] This is my hacky way of
[05:44:14] Over 9,000?
[05:44:16] Yes, over 9,000.
[05:44:22] Too far.
[05:44:25] 95.
[05:44:30] Thank you.
[05:44:32] Thank you.
[05:44:36] Thank you.
[05:44:38] November 15th, 2016. Next Friday will be Svelte's 8th birthday.
[05:44:48] Okay, so are we worried that
[05:44:54] After eight years, Svelte's finally just going to drop off.
[05:44:58] It's so funny, like, when...
[05:45:00] When these companies picked up React when it was like a year old, like what were what were they worried about?
[05:45:08] Thank you.
[05:45:12] Thank you.
[05:45:29] So, yeah, I mean, I don't even know what I want to say about this.  It's just...
[05:45:35] It's so...
[05:45:38] I'm starting to wonder
[05:45:40] If
[05:45:43] People just want to give up.
[05:45:49] Like just like if it's been so long that they're just like,
[05:45:54] Like,
[05:45:57] Bye.
[05:45:58] It's kind of crazy that...
[05:46:00] you've been able to use Svelte for years and years and years and years,  and people still treat it like this new thing.  And I guess the problem is there's an expectation of adoption to a certain  degree that I guess...
[05:46:13] frameworks now just don't hit because of how saturated it is, right?  Svelte's been doing pretty well for itself, but compared to Vue or Angular, it's, you know,
[05:46:25] It's just a splash, right?  Solid is like a splash of svelts, you know, so to speak.  So like it's a and quick interesting is even a splash of solid.  Like basically it's completely inverse based on the year that the framework was created.
[05:46:40] But like,
[05:46:42] There's still an incredible amount of value in this exploration.
[05:46:46] You know, so like
[05:46:49] I don't know. Hopefully, hopefully.
[05:46:51] Hopefully people, um,
[05:46:55] can kind of see past this,  but I just,  it's just more and more.  It's just,  I bet you if I look here,  I'll see more comments about,
[05:47:05] about react.
[05:47:11] Thank you.
[05:47:11] Yeah, no, it's fine. It's just...
[05:47:14] I don't know. It's...
[05:47:20] Maybe it's just that the arguments and stuff get old.  Every year, you check in and see where things are at.
[05:47:32] It's just...
[05:47:37] It's an interesting question. Are we supposed to just like, is Evan, Rich and myself supposed to just like throw in the towel and just say like, let's make the one super framework now that we maybe mostly agree on a lot of stuff?
[05:47:49] or
[05:47:50] Is that how you beat React?  Or do you have multiple...
[05:47:54] options like is this a problem people are feeling now that things are consolidating that like
[05:47:59] they want to pick a horse and they can't make a decision.  So they're actually being a little bit like,
[05:48:04] trying to go in that direction.
[05:48:08] It's interesting because each, maybe they're right, each framework has had its own identity.
[05:48:14] previously.
[05:48:16] And
[05:48:17] Um,
[05:48:19] Yeah, I mean, I never was really concerned with it initially because I was just building what I was building.
[05:48:24] And in terms of signals, but now like everybody has signals, I'm continuing to push in the directions, look at the reactivity stuff.
[05:48:31] Svelte's very concerned with syntax, for example. So they spend a lot of time. The one tempting thing about doing something like Ruins was actually copy Svelte's Ruins identically. I trust that they've considered syntax probably more than I have.
[05:48:54] You know, and, you know, Vue's always thought about onboarding, like how...
[05:48:59] you know, step up. I mean, Svelte has too. Both Vue and Svelte actually invest a lot of time in docs and training and tutorials to get the front of the funnel, which is great because it really helps with adoption, but compared to React,
[05:49:12] you know, just starting that far behind.
[05:49:15] So it's like,
[05:49:17] I don't know, like maybe is that what?
[05:49:20] where we're at, that were people looking for.
[05:49:24] Right? Like these things are still developing.
[05:49:31] Thank you.
[05:49:32] Thank you.
[05:49:33] It'd be interesting to be able to share everything you can see soon.  Yeah, I mean, this is interesting.
[05:49:39] It's hard though, because the signal scheduling is different. The interesting part is one thing that Svelte, Vue, and Solid All-House have been common is our components are DOM elements.
[05:49:50] Like when I try to interrupt with React, it's like,
[05:49:53] React doesn't know what a DOM element is.
[05:49:56] But like...
[05:49:57] like these all have dom elements but on the on the flip side
[05:50:06] I don't even think this is the problem. Do you know what I mean? Like people go, Oh, the ecosystem is up. It's not the ecosystem of libraries.
[05:50:14] I don't think.
[05:50:16] Thank you.
[05:50:16] 'Cause...
[05:50:18] I don't know.  I like,  there seems to be whenever someone's like,  Oh,  why don't there this and solid?  I go looking at like,  Oh,  there is actually,  you know,  like this hasn't actually been a problem.  It's,  it's the ecosystem in terms of like,
[05:50:28] Hiring jobs
[05:50:30] training, education, like it's, it's, it's the, there's a people aspect that goes beyond the libraries.
[05:50:38] Okay.
[05:50:40] Thank you.
[05:50:42] Thank you.
[05:50:46] Yeah, like, it's not that you can't find...
[05:50:52] these libraries like, oh, there's maybe more maintainers that are React library, there's more choices, but you have
[05:50:58] Like,
[05:50:59] I keep every week someone's like, I wish I could use Shad Cien in solid.  It's like we have like three of them.
[05:51:10] Yeah, I mean, yeah, I mean, it's like my web component argument.  It's...
[05:51:16] There's just so many other factors.
[05:51:24] Thank you.
[05:51:25] I... I don't know. I...
[05:51:31] I...
[05:51:36] Thank you.
[05:51:42] Content creators. Yeah, but like it's it's the it's the like everybody standing on the cliff scenario. I'll jump if you jump like it's it's that scenario.
[05:51:57] No, no, sorry, I didn't get to that. Honestly, that's a whole other topic. And I'm really actually trying to wrap up. I'm sorry, I keep on stringing on this point, but I actually have to wrap it up. I'm getting close to the six hour mark. In terms of Yeah, sorry, let me see where the thoughts on back pressure. So see frame rate back pressure. But all this. What's my situation?
[05:52:16] And
[05:52:18] *sniff*
[05:52:19] Yeah, I don't...
[05:52:20] I...
[05:52:21] I, it's, it's an area that I haven't been.
[05:52:25] focusing or looking at at all, really.  I've been my most recent exploration has been largely around
[05:52:32] Um,
[05:52:35] granularity projecting throughout the reactive graph. So like,
[05:52:39] trying to find ways to reduce the amount of diffing needing, but keeping things granular. Um,
[05:52:46] Yeah, anyway. So yeah.
[05:52:51] Um...
[05:52:57] Yeah, so I haven't actually been keeping up with JayWire
[05:53:01] Yeah, it's all good.
[05:53:07] Anyway, I'm going to go.  Thank you all for joining me.
[05:53:18] Yeah, we'll catch you all soon again, if not next week.  Probably actually wait for Thanksgiving.  So we'll see you hopefully next week.
[05:53:26] We'll see.
[05:53:29] I had my first.
[05:53:30] I mean, it's always this stuff.
[05:53:39] Thank you.
[05:53:39] Thank you.
[05:53:43] All right. Catch you all later.