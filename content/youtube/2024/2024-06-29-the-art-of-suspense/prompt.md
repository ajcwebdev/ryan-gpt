---
title: "k3RU0ayAdW4"
slug: "k3RU0ayAdW4"
duration: "5:07:28"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/k3RU0ayAdW4.m4a"
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
[00:02:29] Hello everyone and welcome to my stream today.
[00:02:33] All right, come say hi in the chat if you're here, if you're alive.
[00:02:36] I know it's been a few weeks again.  I've been traveling.
[00:02:39] Mm-hmm.
[00:02:42] Thank you.
[00:02:44] *clicks*
[00:02:47] I couldn't do it.
[00:02:50] Couldn't go like two seconds without making that joke.  Suspense puns are almost as bad as solid puns.
[00:02:59] Thank you.
[00:03:01] Bye.
[00:03:03] All right, there we go.  See, it's funny when you're streaming.
[00:03:06] Because you'll say something, and then there's naturally going to be a delay before people see it.  And then naturally going to be a delay before...
[00:03:14] um,
[00:03:16] I see the response. So it's always kind of funny because you there's always that moment where everything starts and you're just a little bit behind the eight ball, so to speak.
[00:03:27] Anyway, uh...
[00:03:29] Glad to see everyone's doing good today.
[00:03:32] All right.
[00:03:35] A...
[00:03:37] Yeah.
[00:03:38] Good. Glad to see everyone here.
[00:03:40] Yeah, it's been a while, hasn't it?
[00:03:43] If.
[00:03:44] I did, you know, family vacation.
[00:03:49] went to like Disneyland and stuff. And then, uh,
[00:03:52] I went to Amsterdam.
[00:03:55] for React Summit, which was fun.
[00:04:00] I...
[00:04:01] actually gave the opening keynote at react summit, which
[00:04:05] You might not expect the creator of SolidJS to give the opening keynote at
[00:04:10] What do they advertise it? The world's biggest React conference.
[00:04:14] Um,
[00:04:15] But...
[00:04:16] Here we are, you know, I think, I think it was a good talk. Um,
[00:04:21] if you haven't seen it maybe it might be worth checking out um
[00:04:27] I, uh...
[00:04:28] Mind you, if you're a regular watcher of the stream, you've probably seen a lot of the content. I basically, I don't know if you guys remember, like,
[00:04:34] Four months ago, I did the front-end extension crisis stream.
[00:04:40] It's like a five hour stream.  I tried to condense that into 20 minutes.  That's pretty much what my talk is about.
[00:04:46] Oof.
[00:04:47] Yeah, you liked it? Yeah, yeah, no.
[00:04:49] Thank you.
[00:04:50] But it also meant that I was right there on the ground floor when everyone was realizing what was happening with suspense with React 19.
[00:04:58] Um,
[00:04:59] Which was...
[00:05:00] an interesting experience to say.
[00:05:03] So I had some insight from like I was in a meeting where they had a bunch of library maintainers all sitting around.
[00:05:12] you know, talking about the future of React. That was the whole idea. And this just dropped.
[00:05:16] And basically,
[00:05:18] I kid you not the room, like, basically, there's other topics, right, that people want to talk about.
[00:05:23] But like it was like 70% wanted to talk about the suspense thing, 30% the other topics.
[00:05:29] And like,
[00:05:32] After a short realization and working through it, I think someone made a joke that it was like a support group.
[00:05:40] To be fair, one of the other topics was how to communicate better with the React core team.
[00:05:46] to get, you know,
[00:05:49] So, I mean, it wasn't even completely unrelated to the whole thing.  I think...
[00:05:54] That is a challenge, right?  When you're steering the ship as something as large as React,
[00:05:59] you know, how all these things kind of come together.
[00:06:03] and how to kind of like deal with a wider ecosystem that's not going to do things exactly the way you expect.
[00:06:10] uh all that being said um
[00:06:13] the suspense topic in general is super interesting
[00:06:17] because
[00:06:19] Yeah.
[00:06:20] I will say it was interesting to hear
[00:06:24] people from meta side, especially of the React team talking about what,
[00:06:29] They do.
[00:06:31] when using React and meta, which to me, and I'm hoping mostly people on the stream,
[00:06:36] is like the obvious things people should be doing. But the discourse that we see on platforms like Twitter,
[00:06:43] lead you to thinking that it is
[00:06:47] something else going on.
[00:06:48] Right. There's all these people like, oh, I need to co-locate my data fetching and all this stuff.
[00:06:53] But they don't even do that at Meta.  So they actually hoist their fetching up because that's the only logical thing to do.  So we're going to talk about that a bit today.
[00:07:03] But first, I probably should tell people that I'm live so they can get past that Twitch pre-rolls.
[00:07:10] - Hey.
[00:07:11] Thank you.
[00:07:12] Thank you.
[00:07:15] I think the new Capala with the new Valvish thing in the draft after hooks. What do you think? Um,
[00:07:21] Thank you.
[00:07:22] Okay.
[00:07:23] It's an interesting one. I got a chance to talk with one of the authors of the compiler when I was there. And there's a lot of really cool things about the compiler.
[00:07:33] this is one of those things where like,
[00:07:36] The technical...
[00:07:38] aspects of the compiler,
[00:07:41] are pretty impressive compared to compilers that we've seen released to open source. I've seen some  compiler projects that have not been released to open source that are equally or more so impressive.
[00:07:51] ones that I'm not allowed to talk about.
[00:07:54] Um,
[00:07:56] But I don't think...
[00:08:00] It's so much.
[00:08:02] The challenge here is,
[00:08:04] Effectively for the developer,
[00:08:07] There's a nice DX story here.
[00:08:09] But from the DX story side, I don't feel it's revolutionary compared to, say, what we saw in Svelte 3.
[00:08:16] three years ago.
[00:08:18] So it's kind of like,
[00:08:21] Technically, it's more interesting.
[00:08:23] but effectively,
[00:08:26] Maybe not.
[00:08:27] I guess we're going to have to see.  Like, I think it's kind of cool that people...
[00:08:31] perhaps can just write
[00:08:33] really simple code.
[00:08:36] you know, stuff like where they don't have to be as aware of things at first.
[00:08:41] and get good results.
[00:08:44] So it pushes off optimization, which I think does make it a big deal.
[00:08:48] but
[00:08:49] On the other hand, like...
[00:08:53] Thank you.
[00:08:54] so what? I don't mean that. It's just like, I never cared about Svelte for its syntax. I never  cared about, you know what I mean? Like if you don't care about that side of things, mechanically,
[00:09:07] You know what I mean? Like,
[00:09:09] If I'm going to write optimal React code, I'm going to write optimal React code.
[00:09:13] It might help
[00:09:15] it will help a lot of people write more optimal React code without realizing it.
[00:09:19] But it's like,
[00:09:22] What does that even mean?
[00:09:25] Well, I talked about the compiler a little bit previously, and I think there was one update since the last stream.  But I don't want to tangent too hard.  I mean, let me see if I can share my screen.  It's been so long that I don't even know if it's going to let me present my screen without restarting the screen.
[00:09:42] Let's see if I can share my entire screen over here. Let's share.
[00:09:46] All right, let's...
[00:09:47] Yeah, we're in, right?
[00:09:50] Because if I go to my profile over here somewhere...
[00:09:53] And I,
[00:09:54] I think I had one comment about the compiler.
[00:09:58] since we last streamed. Yeah.
[00:10:03] If you remember last stream, I went.
[00:10:07] on
[00:10:09] the stream and I actually built a benchmark with the new React compiler and we tested it on stream together.
[00:10:17] After the stream, I realized that my depiction of the compiler wasn't fair.
[00:10:26] Right? And the reason it wasn't fair is because I was comparing
[00:10:29] something that
[00:10:31] actually, I originally wrote a very hand optimized version. And in fact, when I originally wrote it, I was hitting some questions and design things. And I actually reached out to Dan Abramoff, and he actually helped me
[00:10:42] make it even better.
[00:10:44] Against...
[00:10:45] Like the compiler doing something against some just random react code.  The random react code wasn't completely unoptimized because structurally it was still set up the  right way.  But like,
[00:10:58] Yes, obviously my hand optimized code is going to be better than the compiler.
[00:11:03] So instead, I was like, what if we had a third option that I didn't test on stream?
[00:11:08] which is a no compiler option. So we basically have hand optimized by me,
[00:11:15] purposely removed the optimization version so still like semi-optimal
[00:11:20] with a compiler.
[00:11:22] and then that version without the compiler.
[00:11:25] And that's a bigger spread, right?
[00:11:29] I know we were going to talk about suspense, but we can talk about the React compiler for
[00:11:33] for a bit. Yeah, you're right. I need to actually tell people that I'm live here because we're  jumping right into it.
[00:11:39] Give me two seconds, then we'll...
[00:11:41] Then we'll talk. We'll continue this conversation. Let me get back to my profile here, whatever.
[00:11:47] God, I'm the worst. I am definitely getting as these user interfaces.
[00:11:52] are changing, I am definitely feeling my age coming in because I,
[00:11:58] I think I think this will happen to all of you one day.
[00:12:02] But over time,
[00:12:05] Thank you.
[00:12:07] Thank you.
[00:12:09] It doesn't matter how quick you are on the draw today.
[00:12:13] Um,
[00:12:14] Double check that I'm on, yeah.
[00:12:17] you will get to a point where you just get
[00:12:19] less able to change in your ways and you'll get accustomed to previous patterns and then you will
[00:12:24] Definitely.
[00:12:26] Unfortunately, start having harder times with stuff that you've always considered incredibly easy.
[00:12:33] Anyways.
[00:12:36] Thank you.
[00:12:37] Did I say anything else other than I'm live?
[00:12:41] Talking.
[00:12:42] Yeah.
[00:12:44] compiler and suspense. Yeah, let's make it.
[00:12:51] Yeah, let's make it a little spicier.
[00:12:55] All right.
[00:12:56] Thank you for reminding me.
[00:13:00] Yeah, we, so anyways, where I was going with this is, so we don't like,
[00:13:05] get pulled completely off the whole stream  on the compiler stuff, but it was a good place  'cause it's right where we left off on the last one.  What does it say?  On stream, I can think power, I went back now  and compared non-optimized code with the compiler turned off  and this was more illuminating.  Okay, just what's cool about this benchmark,
[00:13:22] is,
[00:13:23] We saw that the compiler version on the stream  was slightly slower on some of these things.  But you--
[00:13:31] I...
[00:13:32] manage to like
[00:13:34] It's nominal.
[00:13:35] and it isn't and after i did the test run without you know a bunch of background  processes my computer running clean and stuff you know we still saw this small split
[00:13:44] But yeah, stuff like select rows  is particularly different, swap rows.  But if you look here on the third column,  let me see if I can blow this up for you  because I understand that this is not...
[00:13:56] Um, yeah.
[00:13:57] *clap*
[00:13:58] It's tricky. Open image in new tab.
[00:14:02] There we go. Is that better, guys?
[00:14:05] But...
[00:14:07] If I remove the compiler together and I don't do the hand optimizations,
[00:14:13] stuff like partial updates, things where you're doing more...
[00:14:17] fine grained updates stuff looks like rose
[00:14:20] doubled,
[00:14:22] Swap rows.
[00:14:23] from who froze.
[00:14:25] Basically every part of it.
[00:14:28] of this got slower and it's it's a more sizable on average right  because if react is you know 50 roughly slower than vanilla js you know in this scale
[00:14:38] Keep in mind, there's always a scale to consider.
[00:14:40] And,
[00:14:41] here without the optimizations, and keep in mind, this isn't much application code. This is just down to the metal sort of,
[00:14:50] you know,
[00:14:51] you know,
[00:14:52] basically everyone has the same dom overhead this is just really forcing pushing the like
[00:14:59] It's like amplifying on the overhead of the framework itself, essentially. Right.
[00:15:05] when you're looking at it relatively, because everyone has to do the same DOM work.
[00:15:09] Um,
[00:15:10] and this has basically no app code.  There's a sizable improvement that the compiler gives you  for free essentially, right?
[00:15:18] So, I mean, this is a pretty impressive skill.  You know, I'd take this if I didn't have to worry about this at all, right?  It's one of those challenges where, because, like, use Memo, for example,
[00:15:28] doesn't
[00:15:29] go away with the compiler. Like, yes, you don't need to write it most of the time, but if there's something that's expensive that should be, you know, memorized, you still might have to manually do it. The compiler...
[00:15:41] I think there was an exact example, and they're working on this to improve it, but where there were cases where you'd still need to use memo if it was very important to save certain calculations.
[00:15:54] I,  I,
[00:15:56] That was from the React team themselves.  I don't know if stuff has shifted over time,  but I'm just like, keep in mind that underneath...
[00:16:02] every good abstraction is the truth.  But in any case, we can see here that when we-- instead of comparing the compiler  against optimal hand code, and instead against completely unoptimal code,  we can actually see a reasonable performance improvement from the compiler.
[00:16:18] Okay.
[00:16:19] And when we look at stuff like memory usage,
[00:16:22] The compiler was the highest out of the three in terms of memory usages, but this didn't make a nominal, like it was nominal, it didn't make a huge change over React. Like the hand optimized also a slightly higher memory for certain things.
[00:16:39] But it looks like
[00:16:42] Yeah.
[00:16:43] For some reason, this is an interesting metric. I don't know why no compiler would be,  I guess because of all the extra crap it has to create.
[00:16:50] when it's when it's like
[00:16:53] updating rows, it actually has worse memory characteristics.
[00:16:56] But generally speaking,
[00:16:58] The memory overhead is not that significant. And then when we talk size, this is what I screwed up on stream originally, because I didn't have everyone on React 19.
[00:17:11] This is a small, small, small, small app.  So this scales probably a bit differently, but basically no compiler.
[00:17:19] 179.5.
[00:17:21] manually i added 0.1 kilobytes and then it was only two kilobytes more uh
[00:17:26] uncompressed with the compiler. And once you compress it,
[00:17:29] into reasonable size because React itself is about 40%
[00:17:34] 243 kilobytes.
[00:17:36] The apps probably less than five kilobytes.
[00:17:39] You can kind of see here that the difference between no compiler and hand optimized in this case isn't even different.  And the compiler basically adds one kilobyte.
[00:17:47] I mean, if you looked at the application code, you could argue that that's perhaps like a 20% code increase, but I'm not ready to make that happen.
[00:17:55] off the single test.
[00:18:00] Anyway.
[00:18:04] Thank you.
[00:18:06] Hopefully food for thought for people.
[00:18:11] Yeah, I mean, I had an interesting question when I was talking.  I can never pronounce the name properly.  The guy from the React core team who was at React Summit.
[00:18:22] Bye.
[00:18:23] Um,
[00:18:25] And I was like, I've been having a hard time showing people the difference.
[00:18:29] between
[00:18:31] Um,
[00:18:33] fine-grained updates, and the compiler updates.
[00:18:35] And like the React team kind of rides themselves in this.  They think like, because in the sense,  the compiler is really clever  that it's very hard to observe the difference.  There is an actual difference in execution and rendering.
[00:18:48] in
[00:18:51] in the difference between Solve and React.
[00:18:54] But because of how the compiler handles side effects, it's almost impossible to actually show it.
[00:19:01] the
[00:19:03] if you try and observe side effects in the compiler, React will
[00:19:07] log stuff as if it's rewriting everything all the time.
[00:19:11] So all my clever tricks to try and show exactly what's running or not running is basically doesn't work.  The only way to make it work is pull it into the graph, have it be a drive value.
[00:19:22] And that defeats the point of what I'm trying to show.  I'm trying to look at the overhead of the overhead.
[00:19:27] of
[00:19:28] the framework mechanics itself rather than
[00:19:32] Like,
[00:19:34] your application code.
[00:19:36] I want to show what's actually running from the framework standpoint and
[00:19:40] they make it almost impossible to show it. So like, on,
[00:19:43] I think this is...
[00:19:45] like,
[00:19:45] make sense because a lot of these side effects, they can even just tree shake out.
[00:19:50] But it doesn't let me like...
[00:19:53] What's the term, you know, like when you put a spy in there or like a...
[00:19:56] monitor the actual behavior as easily as like a, as a layman dev, just trying to come in and see what's going on.
[00:20:05] So,
[00:20:06] Thank you.
[00:20:08] I think that's the way it probably has to be, because I think as a developer using this technology, you're not supposed to really understand how it works.
[00:20:14] right they don't want you to be able to breach the abstraction i once made a comment that i said the  problem with use effect
[00:20:21] was that was the first moment that people understood how React actually worked?
[00:20:26] Until that time, they might have had a mental model that hooks are kind of like signals.  But the second they understand the use effect, that layer between the abstraction and the metal,
[00:20:36] erodes away and it like like the and suddenly they're like oh that's how react works
[00:20:43] I think if you provide an abstraction that is non-introspectable,
[00:20:48] On one hand,
[00:20:49] You can say it's magic, but more so...
[00:20:53] it then becomes a baseline there's nothing to prove otherwise do you know i mean like so like
[00:20:58] I think it's clever because as long as it works properly, it's,
[00:21:05] you know, it becomes the new mental model, so to speak. Like,
[00:21:10] basically
[00:21:12] If you can't look under the hood,
[00:21:15] then there's no big reveal.
[00:21:18] So I don't know. Take that as you as you will.
[00:21:29] Thank you.
[00:21:30] Thank you.
[00:21:31] It's like an Eminem reference.
[00:21:34] I guess I'm old enough for that.
[00:21:37] Bye.
[00:21:39] Oh, mmm, mmm, mmm, mmm.
[00:21:45] Thank you.
[00:21:46] I agree.
[00:21:54] Yeah, but like, do you care? You're saying it's weird, you don't know what's optimized, but like, do we really care?
[00:22:00] Thank you.
[00:22:00] I...
[00:22:02] I think...
[00:22:03] the average developer shouldn't.
[00:22:06] I think...
[00:22:08] So from that perspective,
[00:22:10] React compiler is pretty cool because it raises the floor significantly.
[00:22:16] on what you can do with react, it does not
[00:22:19] raised the ceiling though.
[00:22:21] The ceiling stays the same.
[00:22:24] For all those people who are like, oh, yeah, now react has signals. It's like, not even freaking close.
[00:22:29] But like...
[00:22:31] Does that matter?
[00:22:33] I don't know if the performance is good enough for you before.  I'm assuming it's going to be good enough for you after with the compiler.
[00:22:41] Thank you.
[00:22:43] Yeah.
[00:22:47] How do you turn to library devs? Well, yeah, right. This is where you can start getting into the friction with the library devs, right? Because there's different levels. When I talk about developers, I'm talking about like people who are application developers, library devs, like being able to have a little bit control and understanding what they're doing. They want to be able to create the most optimal thing themselves. It's a hard pill when the reacts like, don't worry, we'll take care of it. And it's like, do I trust you? You've said that before.
[00:23:11] You know what I mean? Like...
[00:23:14] You actually see this a lot.  I forget where there was a comment.  Maybe I bookmarked it.  But like if you listen to like Tanner or Ryan Florence or someone like,
[00:23:23] Let's see if I can find my notifications here.
[00:23:27] No, no, bookmarks, yeah.
[00:23:29] If you listen to Tanner or Ryan Florence talk, I got one here with Tanner.  Do I have a Ryan Florence one anywhere?
[00:23:36] Maybe not.  They keep on talking about how fine-grained...
[00:23:41] like, check out this new fine grain thing that I'm doing, right? And it's like,
[00:23:47] They had the work against the React status quo to get there,  and they're really happy about mechanically doing that.  Were the React team...
[00:23:55] It's kind of like
[00:23:57] Don't worry about that.  Yet they are actually working really hard on that.  Brian Florence, I forget where.  Yeah, he's talking about some fine grained.
[00:24:07] router data validation thing, I think.  I was reading that stuff and Tanner's stuff,  and I keep on coming back to the fact that, like,
[00:24:15] I mean, Tenors is right here.
[00:24:17] You know what, let's use tan stack query instead of the routers built in loaders with zero sacrificed SSR. Picture teaching the router how SSR
[00:24:24] a client query route plus query serialized query on every client pretty sweet we're about to take it even
[00:24:31] take it even
[00:24:33] What? Show more.
[00:24:35] Yeah.
[00:24:37] Take it even further with the ability to stream non-hoisted use suspense queries from the server to client, then seamlessly hydrate them automatically.
[00:24:46] I think you get all the time this now.  Okay.
[00:24:50] And I don't like...
[00:24:52] I understand why people are excited about this.  How many,  how many likes are on this one?  280.  Yeah,  this is exciting,  but it's like,  this is the way Saul has been working for five years.
[00:25:02] you know, to a certain degree.
[00:25:03] with create resource. So it's like,
[00:25:06] I...
[00:25:07] It's like...
[00:25:09] It...
[00:25:11] Thank you.
[00:25:12] I don't know.
[00:25:13] it's funny, the library authors seem very much more in aligned with where we're sitting. And then
[00:25:21] You know, yeah, I wonder how this tension plays out. Because I said, there's a Ryan Florence tweet, I don't have a bookmark where he was basically talking about fine grained updates as well for remix. And I'm just thinking, huh, you know, like,
[00:25:33] What's pushing this?
[00:25:37] Thank you.
[00:25:43] right right  and they could
[00:25:48] Right, because million JS, and we saw Aiden actually on stream, I was a moment ago, I highlighted one of his comments.
[00:25:55] and the compiler are almost like passing chips, like,
[00:26:00] I said a while ago that I didn't think the compiler was going to win any benchmarks, but MillionJS wins every benchmark.  You know what I mean?  And...
[00:26:08] It's just because like,
[00:26:13] It's quite possible that React in the future does try and optimize some of those areas.  But they also had Dominic from Inferno in there, kind of optimizing along that same...
[00:26:23] vain.
[00:26:24] And.
[00:26:26] And I mean, this...
[00:26:27] remains to be seen.
[00:26:29] But...
[00:26:30] They said that the structural stuff, the stuff that compiler fixes, you know, that that part were from application code.
[00:26:37] they're like most people's apps are actually a lot of application code and  that application code is actually what slows down the apps. So the fact that,  you know, frameworks can render, you know, a couple, you know,
[00:26:47] you know, tens or hundreds of milliseconds faster, certain things, doesn't matter as much as your application code. So like, we're not going to prioritize or do trade offs or based on being able to do like these render techniques, like some of the optimizations, I think,
[00:27:01] that million does might be challenging for their concurrent model.  I don't know.  Aiden can probably fill me in on that better,  but like,
[00:27:09] essentially,
[00:27:12] They went and they tried Inferno.
[00:27:16] you know, at Meta and it may, you know, it was faster, some things, some startup time things, but it didn't barely made a dent.
[00:27:23] And then they were like, okay, we're going to go this concurrent way of, you know, and
[00:27:29] kind of take things, you know, the other way. Because, you know, if we can schedule or manage the application code, we can deal with the parts that, you know, people can't control. It's the same strategy, the compiler, we can make the unoptimal code people write better, that'll have a bigger impact
[00:27:46] than making the framework faster. I think that's generally their thinking. But
[00:27:51] The question you should be asking yourself in this scenario is, how much of that is due to the actual architecture pattern of React itself, the BDOM, the re-render?
[00:28:01] How much...
[00:28:02] of that overhead is inherent to that model.
[00:28:07] so like
[00:28:11] I mean, it's unanswered, right?
[00:28:14] to a certain degree.
[00:28:15] But that's where I'm coming from when I'm looking at these things, because
[00:28:21] if the model is inherently expensive and then your app code ends up just
[00:28:25] magnifying that, you know.
[00:28:27] then
[00:28:28] Yeah, I think...
[00:28:30] if you want to keep the model, then you have to deal with that.  But if we're talking about something else, then like,
[00:28:36] Maybe there's other directions you can go.
[00:28:39] Right.  Because millions direction, largely...
[00:28:43] is taking a page from what
[00:28:46] lit or solid did, which was like, let's optimize
[00:28:50] the pure rendering, the not pure, but like the creation stuff, you know, our ability to just like,
[00:28:56] Very quickly...
[00:28:58] generate
[00:29:00] large blocks of code, right?
[00:29:03] or view.
[00:29:04] React prides itself on having the first run be the same as the second run every time.
[00:29:10] And I,
[00:29:11] We're going to talk about that today, actually.  We're going to do some coloring.  I call this stream the art of suspense.  You'll see why in a little bit.
[00:29:19] Thank you.
[00:29:19] *sad music*
[00:29:21] Oh.
[00:29:27] I'm
[00:29:30] I mean, sure, out of the box.  But for me, when I'm talking about that, I'm talking about like...
[00:29:35] they're raising the floor.  It's going to be much harder  with the compiler to write
[00:29:42] truly inefficient React code. So they are definitely raising
[00:29:46] like the floor of the performance. It's just like,
[00:29:49] Yeah, I don't know.
[00:29:52] Thank you.
[00:29:53] Thank you.
[00:29:56] Thank you.
[00:29:57] But in reality, the production use case, okay, yeah, did I get it?
[00:30:00] Miss any of Adrian's comments yet.  In reality, the production use case for Fast DOM updater tool is very small.
[00:30:06] Oh, what do you got for me, Hayden? Is this a Dominic...
[00:30:11] Post, I will take a Dominic post. Give me a second.
[00:30:18] I saw this. I even bookmarked it. I was going to talk about this, but you're right. The compiler is a good time to talk about this.
[00:30:25] JavaScript compilers today are fixated on compiling individual modules. That is sensible and deterministic property, but really the TruePower compilation is cross-module.
[00:30:31] Thank you.
[00:30:33] Oh, he's gone here, hasn't he?
[00:30:36] I, I, I...
[00:30:37] I know there are some cross...
[00:30:40] compiler libraries and devs or cross-module compilers, libraries and devs right now.
[00:30:45] I worked on one for a couple of years.
[00:30:48] you know,
[00:30:49] It...
[00:30:50] Still not released because of complications there, but Marco six, which I'm not supposed to talk about is a cross module compilation.  Um,
[00:31:00] system. That's how they can trace reactivity through the whole thing. Imagine being able to  inline components that you know used once, including their props. You could even inline  well-known props on init, remove entire terms of code due to dead code elimination. You'd even argue  that there would be no need for something like RSC as a highly intelligent compiler could do all  that work for you, remove the limitations to refactoring your code to make it work.
[00:31:19] Thank you.
[00:31:19] The drawback is going to be debugging experience,  more quality as the developer doesn't show it,  the harder it is to read about some bugs,  the solvable though, as it's been shown in other languages.
[00:31:28] I'm with him up to the RSC comment.
[00:31:31] Like, I get what he's saying, but the data fetching RC thing specifically is a pain in the...
[00:31:37] pain because
[00:31:42] Yeah.
[00:31:44] Thank you.
[00:31:45] I talked about this in my talk.
[00:31:49] There are some things that we don't know about.
[00:31:52] whether they are implicitly server or not.  And even the smartest compiler can't make that decision point.  Like I've worked on resumable systems and this is what he's describing is  basically how, you know,
[00:32:03] like,
[00:32:05] Quicks for zoomability is in cross-module.
[00:32:08] Module.
[00:32:09] But,
[00:32:09] Marco's is and
[00:32:12] The biggest difference between the two because of that is that,
[00:32:17] Marco can...
[00:32:19] confidently tree shake
[00:32:22] out the code we're quick to bundles it separately for you and it might never get loaded but
[00:32:27] The key here to understand is that
[00:32:30] Both of those
[00:32:32] Um,
[00:32:33] architectures,
[00:32:35] have to include the potential of any code coming in
[00:32:39] below a decision point.
[00:32:40] which means that any data that you need to serialize
[00:32:44] you have to serialize any data that could be read below that decision point.
[00:32:49] So like the island architecture, the clear boundaries of like use client or, you know, Astro's island syntax or whatever it is.
[00:32:58] Actually,
[00:32:59] are important.
[00:33:02] to actually accomplish
[00:33:04] What RCs do?
[00:33:05] an automated compiler,
[00:33:08] Thank you.
[00:33:08] Can't do that.
[00:33:10] I don't think it can solve the data serialization problem.
[00:33:13] it doesn't know, it's kind of like similar to that problem of like showing the CSS on the page, like how much CSS in line, like the part, you know, there's people trying to solve the like initial CSS, so you only show what's on the page and then load the CSS later.
[00:33:29] We start getting to this area where it's a lot easier for a human heuristic to be like,
[00:33:35] you know,
[00:33:36] this component generally appears on the page at first and pull that in
[00:33:40] it's a lot easier for us to go like,
[00:33:41] for like, I think I actually had a conversation with Adam Rackis the other day on Twitter, too, where he was talking about data loading and he was like,
[00:33:49] you know,
[00:33:50] Wouldn't it be cool if something went down and then basically anything that was static
[00:33:55] pull out that data fetch and have it hoisted.  But anything below a decision, then it can be loaded later  in the client or whatever.
[00:34:04] And it's like, not necessarily that decision point doesn't define whether you actually generally want to always load it.  Like, what if the decision is 99% one way and 1% the other way? Like,
[00:34:15] even creators of things like quick understand that and they were trying to use ai intelligence to
[00:34:21] look at end user usage to determine
[00:34:24] how to branch on those paths but there there has to be more than just the static analysis of the  compiler
[00:34:30] In order to accomplish these sort of things, there is actually a real decision point. You could try and use, as I say, AI models and analytics and stuff that kind of come in, but the compiler itself is insufficient, at least to be able to handle what I call the RSC problem.
[00:34:46] Yeah.
[00:34:46] you know, without like a
[00:34:48] I mean, the automatic part without like some sort of
[00:34:52] you
[00:34:52] notation or something.
[00:35:01] But yeah, the inlining thing was interesting. I talked about this in an article about five years ago, because in order to get to a point where you can inline,
[00:35:09] I was saying like components have to basically be functions.
[00:35:12] Like you need to get away from them having instances.
[00:35:16] And like, so when I was designing solid, I was very much thinking about it.  Dom working on Svelte 5, which is kind of like solid.  I can see why he's here again.  I mean, to be fair, he did some of this work in prepack as well.
[00:35:27] Um,
[00:35:28] But like,
[00:35:29] I think he's in a place where he could attack this inlining thing.  But yeah, basically I got to the point where I could only inline components in the same
[00:35:36] file module. And I was just like, is this worth it? And I'm like, maybe like something, the JS  framework benchmark where you, you know, just put everything in the file. But I imagine with Svelte,  this is uniquely challenging because Svelte is single file components. So you can't inline,  you know what I mean? Like, so...
[00:35:52] That's interesting.
[00:35:58] Yes, for suspense. And I haven't talked about that yet.
[00:36:04] Thank you.
[00:36:06] And the answer is...
[00:36:07] Probably...
[00:36:09] Yes, unfortunately, which means that RSCs have a lot more weight than you'd think.
[00:36:22] Yeah, it's cool. But as I said last time, I kind of think Ryan Florence and crew are doing it wrong. I think Next.js is actually the approach that makes sense.
[00:36:32] And I don't say that happily, it's just
[00:36:35] how I view the world.  Tanner was posting some stuff too,  and I'm like,  they're kind of gone off this thing.  I think people just don't get RSCs and...
[00:36:44] I think the thing they want them to be are not what they are.  And I think maybe that's ultimately going to be their failing, but,
[00:36:52] Effectively, no solution is
[00:36:55] out there, presumably whatever you know, thing actually accomplish.
[00:37:00] What?
[00:37:01] RSCs accomplish. So
[00:37:04] Thank you.
[00:37:05] Yeah.
[00:37:07] Yeah, even even Marco six Marco six is a very smart, reasonable framework. It does not
[00:37:13] actually solve the RSC problem because you hit it the second you try and add client side routing back in. Seriously, if you guys have not watched my talk,
[00:37:21] I'll post it again here.
[00:37:24] Thank you.
[00:37:25] It is...
[00:37:27] I've talked about this on stream, so you guys should all be familiar with it.  But maybe having it condensed and in your face is the way to do it.
[00:37:35] But like
[00:37:38] Yeah, let's just drop this one right in here.  Don't, maybe don't leave the stream right now, but.
[00:37:46] Thank you.
[00:37:48] but like,
[00:37:53] Yeah, I mean...
[00:37:55] This is the kind of...
[00:37:59] problem space.  And keep in mind,  I backed off RSCs  for the solid start release  or not RSCs.  I got to stop saying RSCs.  Server components in general,  not non-React version.  But that doesn't,
[00:38:15] That doesn't change my view of how uniquely...
[00:38:18] Powerful they are.  Yeah, like from my view of the world,  Arcees are just a more advanced lineage of islands.
[00:38:26] Right.
[00:38:27] Um,
[00:38:28] Whereas like presumability is trying to take our current app, single page app mentality further mostly.
[00:38:38] The funny thing is when you hit something like...
[00:38:40] Marco, which is trying to
[00:38:43] not do that.
[00:38:46] so to speak, where they are actually solving for the MPA case, but just in the most optimal  way possible. And they hit resumability as well. But the problem, as I said, is,
[00:38:57] Client-side routing?
[00:39:00] Maybe that's actually, it's so funny how that works. It's like
[00:39:05] Quickwent works so hard on trying to keep the single app mentality.  Like, you know, like you're just writing something kind of like react with some dollar signs.  Ignore those.  Right.  But the truth of the matter is like.
[00:39:17] Resumability is like the ultimate MPA optimization.
[00:39:24] And it can't handle client-side routing.
[00:39:27] in an efficient way today.
[00:39:29] Whereas,
[00:39:30] Islands, which were the initial version of the MPA framework, you know, been going on now for over a decade of islands, thanks to Marco.
[00:39:42] RSCs actually are an approach to solve the client-side routing.
[00:39:48] You know, so like, yeah.
[00:39:58] Yeah, I don't.  Server data, I understand that's why they want to do it,  like the relay perspective, but like...
[00:40:05] And that's one perspective of it.  But,
[00:40:08] it loses all the like finesse of it.  I mean, if that if that's all you wanted with server data, then then remixes.
[00:40:15] Good, do lakes. Nuxt is good with their server component things. I just don't call those actual server components. It kind of misses the point.
[00:40:23] Um,
[00:40:24] And the reason, you know, when Waku came out and the React core team's like, don't do that.
[00:40:29] to a certain degree.
[00:40:31] just like let people just drop server components anywhere is because of fetch waterfalls.  Mutation waterfalls, you know, people are more accepting of, but fetch waterfalls, you know,  where you start weaving these things through each other and they can actually pass props to each other,  then you can't render one thing until...
[00:40:47] part runs on the client, part runs on the server, part runs on the client, and it's just back, forth, back, forth, back, forth.
[00:40:51] It's terrible.
[00:40:53] So like,
[00:40:56] Thank you.
[00:41:00] Yeah.  I don't know.  I,  if you want to get stuff small and granular,  you,
[00:41:04] Your best bet is keep the outside of the onion as static as possible and push your interactivity to be as thin of layers as possible and as closest to the leaves as possible.
[00:41:18] Some things are not close to the leaves, but make them a very thin layer and project the server back through them again.
[00:41:26] Thank you.
[00:41:30] MPJ. Who's MPJ?
[00:41:37] Facts.  Quick after this feature.
[00:41:42] Ascrow doesn't actually solve the client-side routing thing.
[00:41:45] QUIC needs something like server components to kind of bridge the gap.
[00:41:50] Um,
[00:41:51] Yeah, it's one of those really tricky things because...
[00:41:56] It's a reason why I started my research on the server component side.
[00:41:59] Because the problem is...
[00:42:03] It's even too late for us to a certain degree.  It's much harder to...
[00:42:07] to
[00:42:10] get back to server components when you have a bunch of advanced features than it is to start with that mindset in mind. The reason that we didn't end up shipping
[00:42:19] Uh,
[00:42:20] you know, something like server components and solid other than like
[00:42:23] some really odd dx issues like where i was having a real hard time justifying the mutation story for  apps and all that and i couldn't unify it but like from a pure like who cares mechanical  standpoint was that we had out of order streaming
[00:42:36] Out of order streaming,
[00:42:38] makes stuff drastically more complicated.  I could picture how I could take Astro without out of order streaming and have a working islands router demo.
[00:42:48] That would basically do the right things.  Astro today, naively, like just using VTransition, will fail.  Again, watch my talk.  I'll explain why it doesn't work.
[00:42:59] for this, but
[00:43:00] I could see how you could...
[00:43:02] implement something Astro-like or maybe a layer on Astro that could get you kind of in the way,  and then you could try and get resume building quick. But at some point,
[00:43:10] we're we have all these distinct pieces we need these pieces to talk to each other right like  some of those limitations that astro have is because it doesn't own the client side framework so
[00:43:20] like react or fresh with preact is just better situated when we talk about an app context because  state has to persist i keep on getting bugs from people from things like nano store and it's like  you have to understand that like
[00:43:32] Lazy hydration?
[00:43:34] is not
[00:43:35] a sensible thing to be doing unless you can wake up and,
[00:43:40] as it goes, you know, like as things change, not on some arbitrary thing. You have to make sure that  you don't hydrate or initialize the app after any state on the client that it could read has updated.
[00:43:53] Now, Quik does that in its own world of things, right?  But like...
[00:43:58] Yeah, like something  like nanostore, the framework's not going to have the innate  knowledge of it. So like
[00:44:04] Yeah.
[00:44:06] there's not an actual clear path forward right now where I can tell anyone go use this technology and you're future proofing. Everything right now is very...
[00:44:19] temporary. It's very intermediate.
[00:44:23] That's probably why people are betting on React because they're like, look, these guys will figure it out eventually.  I don't care if the stuff is like super inefficient right now.  Maybe one day they'll, you know, they'll get there.
[00:44:32] History has shown us that that's not the case, but...
[00:44:36] It might be different this time. What does that mean? You know?
[00:44:39] It'd be different for us.
[00:44:42] Oh, yeah, yeah, yeah. I saw that. Yeah. The funny thing is I didn't, I don't, I I'm sorry. I actually don't even know what that is.
[00:44:50] Thank you.
[00:44:51] Thank you.
[00:44:52] Thank you.
[00:44:54] Okay.
[00:44:55] Thank you.
[00:44:57] My introduction to Tech YouTube,
[00:44:59] was Jason Langstrom.
[00:45:02] Um, basically. And that's the only thing that I paid attention to. And then, um,
[00:45:07] I saw Jack Harrington and I was like, this guy's pretty cool.
[00:45:11] You know, and then, you know,
[00:45:14] I started streaming and then, you know,
[00:45:15] I started seeing all the others, but yeah.
[00:45:22] Thank you.
[00:45:24] They've talked about it. I don't know. But do you want more competition in this space? What's that framework going to be like?
[00:45:32] Thank you.
[00:45:36] I think the thing is Astro has a really sweet spot.
[00:45:40] And if they just stay there, they're probably going to do very well for the next...
[00:45:44] five years enough that they they are very viable if they try and overextend in these kind of ways and do stuff
[00:45:51] They're going to get it.
[00:45:52] in this log against react that they probably don't want to be in right now they can just be like  look you can use react here and people can be like okay yay we love astro
[00:46:08] Is there a theory or a feature where the state graph can be defined as on which notes on the side?
[00:46:12] I don't think so.
[00:46:14] I don't like how do you make that choice except for some kind of heuristic based on like what? Right.
[00:46:21] Like,
[00:46:22] the update cycle, but like...
[00:46:25] I don't think that, I don't think you can automate this without AI or without like some kind of
[00:46:32] statistical analysis it's not like
[00:46:35] Like just work through the problem yourself and then just think of like every exception case and how you can't make a general assumption there.
[00:46:44] Thank you.
[00:46:47] No, no. And I said that in my talk, honestly.  I don't talk about the Rails and the HTMXs and Laravel or whatever, because...
[00:46:54] from my perspective, they're just not even on the map.  Like, you know, like, it's not because, like, you know,  I might be critical of stuff like Quick and all this stuff.  It just, I just don't even, they're just, like, not even...
[00:47:08] Like the one thing that could change that is if,
[00:47:11] if like staple servers come back and then the interaction gets a little bit interesting, you know, and we've been seeing people playing around with that. But otherwise, if we're talking about in the stateless world,
[00:47:20] JavaScript is the only option, not even close.
[00:47:26] Like...
[00:47:28] Thank you.
[00:47:29] Thank you.
[00:47:31] Profiler guided. Yeah, yeah. Like, right.  Like, so you're that's what I say. You need like to run something.  You need to actually.
[00:47:39] do something you the analysis of like the structure the code can't tell you this you'd have to be like  it's slow or you'd have to be like users use this or you'd have to be like you need you need some  kind of input that is not the code itself i don't the question is can like
[00:47:56] I don't know...
[00:47:59] If you look at it this way, use server and use client might not even have to be a rule, but you change the wording and then it becomes an intention. You need a way to flag the intention. And we've gone there with reactive languages because we've gone to a point where like...
[00:48:15] Um,
[00:48:16] you know, there's state and there's derived state and there's effects. And we can understand the  intention of those and the guarantees with them and we built a language to it. If we can build a language
[00:48:28] to this
[00:48:30] then yes, but
[00:48:33] the language initially might be like use server use client do you understand what i'm saying like like
[00:48:40] You need a way of describing the problem in such a way
[00:48:44] to actually do it because just structurally, I don't think there's enough information there.
[00:48:50] You have to say, this is high priority, this is low priority.  You need some kind of way of...  So when I said impossible, I don't mean like...
[00:48:59] in all futures, impossible. I just mean the way people view the way they write their code today,  not possible.
[00:49:06] We need a way of...
[00:49:08] describing the intention in a way that is still permissive enough that the server or sort of the compiler builder analyzer can do something with it.
[00:49:17] But...
[00:49:18] explicit enough that you know it actually knows what the hell we intend.
[00:49:24] Right. I don't think this is a structural solve kind of problem.
[00:49:30] So ultimately, soon clients had run for sure to the state. Yes. Yeah. I mean, if you want one solution, if you don't care and you have multiple solutions, you know, and you can be like, look, I have my marketing page app here or site and I have my interactive site here.  Then, yeah, keep on doing what you're doing. But if you want to have one single model, precision state is a must.
[00:49:54] Big Town Super Town.
[00:49:59] Yeah.
[00:50:00] Thank you.
[00:50:01] Somehow we got completely off mark today on talking about compilers, but I'm glad you guys are like that.
[00:50:09] Right.
[00:50:11] Thank you.
[00:50:12] Technically, we have RCs in Ocam on Gleamon's Arts.
[00:50:14] Okay, yeah, I mean, I don't know enough about these other languages, but I have to imagine from a fundamentals point that
[00:50:21] that there has to be a language that captures the intention.
[00:50:24] it's not enough to be purely structural to be able to make these kind of decisions. You have to have some kind of
[00:50:32] Thank you.
[00:50:33] Yeah, anyway, but--
[00:50:35] You know, I'm just speculating here. Keep in mind like
[00:50:38] I've never learned Oak Hamill, so, you know.
[00:50:42] Yeah, the Russian guy, he likes reminding everyone how he has the best reactive library framework, whatever.
[00:50:51] He probably does.  I've been trying to follow his writing...
[00:50:55] There's tons of genius in it.  I just can't.
[00:50:58] get the whole conclusion. It's tricky. I think it's just a language barrier. But he does show up on my...
[00:51:05] articles sometimes and on twitter and responding to stuff and usually everything you post is
[00:51:11] Pretty spot on.
[00:51:16] Okay.
[00:51:18] All right. All right. All right.
[00:51:26] Didn't realize people want to talk about compilers so much.
[00:51:28] I honestly just chose this cover, you know...
[00:51:33] topic in general because it aligned a bit with what I've been doing in solid. I've been working a lot on reactivity, you know, signals 2.0, so to speak.
[00:51:42] async and all that stuff. And I was like, the suspense topic seems like it's like right in the same ballpark, right?
[00:51:49] Um,
[00:51:51] but I think we need a little bit of like,  uh,
[00:51:55] Thank you.
[00:51:58] How should I put it?  We need a little...
[00:52:01] introduction a little bit fundamental so we're talking the same language before we actually pour into it. I just want to quickly see if there's anything
[00:52:10] Why am I talking about...
[00:52:13] DX here.
[00:52:14] Man, I'm so sick of syntax arguments on Twitter.  I think I got on one the other day.
[00:52:20] Like as bad as talking about Celsius versus Fahrenheit.
[00:52:25] Thank you.
[00:52:29] Thank you.
[00:52:30] Thank you.
[00:52:32] Okay.
[00:52:33] So yeah, I was gone. There's a gap.
[00:52:37] Okay.
[00:52:41] Before we go, I want to say one last thing about benchmarking.
[00:52:44] Oh!
[00:52:46] Dan removed his post.
[00:52:49] Thank you.
[00:52:50] No, Dan is gone?
[00:52:56] Is Dan gone?
[00:52:58] What's going on here?
[00:53:00] Dan.
[00:53:06] It should just be Dan, but...
[00:53:08] There's a Dan 3.
[00:53:12] Oh, it's a parody account.
[00:53:16] Thank you.
[00:53:17] I'm not.
[00:53:18] Dan 2 is gone.
[00:53:22] Wow.
[00:53:24] .
[00:53:25] Oh, man.
[00:53:27] So there's nothing to show.
[00:53:32] This is too bad.
[00:53:34] Dan was comparing the JS framework benchmark.
[00:53:38] to, um,
[00:53:41] to like putting a car up on those rollers where you don't actually connect it to a power source  and you just run the engine as fast as it can to kind of test the characteristics of the engine.
[00:53:58] Thank you.
[00:53:59] You guys are tennis gone, maybe permanently with the blue sky.
[00:54:03] Yeah.
[00:54:05] Yeah. Oh, well. And
[00:54:08] And because he's basically saying, you know, most code is app code and all this. And I talked about this a bit earlier, but because we talked about the compiler, the compiler, and we talked about this, I should take care of this right now, before we get too off track.
[00:54:21] I took a little different. A benchmark is like taking a car to the racetrack and seeing which is the fastest.
[00:54:27] Um,
[00:54:28] But if in reality, you're just driving around town, what does it matter?
[00:54:32] Um,
[00:54:33] Because...
[00:54:34] The DOM is the load.
[00:54:36] You know what I mean?
[00:54:37] right? Like the Dom is the thing that's
[00:54:41] you know, is the load, it's the road.
[00:54:46] And I said, I still want to build the fastest, most efficient car.  We know you like to...
[00:54:50] Okay, where is this?  Loose on the weekend, blah, blah, blah.  I'm just talking car ads.
[00:54:56] The glue is disproportionately measured in benchmarks. It's stress test at weights that exceed normal usage. It doesn't test every possible scenario or even realistic ones, but it tests all the basic functionalities in usable UI.
[00:55:06] It drives.  Ultimately, we know every driver app code is different.  The driver is more impactful than the car.  And when you move between cars, the part...
[00:55:14] that part is going to stay the same but what sort of car do you want to drive yeah see what i was  trying to say is like
[00:55:19] Saying that the app code is the most expensive,
[00:55:22] assumes that
[00:55:25] Like, you know,
[00:55:26] It's like, yes, but then shouldn't every...
[00:55:28] framework have the same
[00:55:31] app code in these examples, right?
[00:55:33] I guess the difference between render models, between React or Solid or something like that, would make the app code run differently. But I don't see that as something working negatively.
[00:55:42] you know, to our disadvantage here.
[00:55:45] So I think it's still important to stress test the car itself without a driver, so to speak.
[00:55:53] Anyway.
[00:55:54] Just a small tangent.  I guess the bigger learning here is that Dan is no longer on Twitter.  So, yeah.
[00:56:03] Okay, let's move on.
[00:56:14] Yeah.
[00:56:15] You're saying the same things. Yeah.
[00:56:18] Yeah, mostly. I just think...
[00:56:21] Like,
[00:56:22] Thank you.
[00:56:24] He was saying that almost that like...
[00:56:29] d
[00:56:30] it wasn't real because there was no load on it.  And I,  I,
[00:56:34] Like I'm an electronics guy, right?
[00:56:37] like, you know, it's like when you test something without hooking up to a speaker, you know,  there's no sync, there's no whatever. I don't think the benchmark,
[00:56:45] is that there's no sync.  It's more of like,
[00:56:47] you know, there's a huge sink.  It's like putting the car on like a track with a ton of resistance.  Do you know what I mean?  Like,
[00:56:56] it's yeah i don't know that it's maybe it's a subtle difference
[00:57:05] Yeah, yeah.
[00:57:06] Yeah, I know.  That's why there's a Dan, too.  Now there's no more...
[00:57:12] There's no more Dan. Oh, what?
[00:57:14] It's surprising. Sorry, I thought I was already following Coding Yardin.
[00:57:18] You guys should too.
[00:57:20] It's the random things I notice.
[00:57:23] Anyway.
[00:57:25] Thank you.
[00:57:28] Bye.
[00:57:29] We're going to talk about syntax more later, but I want to get into the meat of the discussion today.
[00:57:34] Um,
[00:57:35] So let's, let's,
[00:57:37] Bye.
[00:57:42] -
[00:57:43] Let's let's get somewhere else. Let's go Excalibur maybe.
[00:57:49] Yeah.
[00:57:53] Let's find some space. That seems like some space.
[00:58:01] I do.
[00:58:04] Yeah, okay. That's fair. Yeah. Yeah.
[00:58:08] How much of that is...  Or the most efficient car, yeah.  How much of that is like...
[00:58:15] Thank you.
[00:58:15] personality thing.
[00:58:22] Like,
[00:58:23] Thank you.
[00:58:26] Yeah, Dan definitely doesn't drive a Lambo.
[00:58:31] Can you guys guess what I drive?
[00:58:33] Not a Lambo.
[00:58:36] But there is a weird personality alignment on this.
[00:58:41] Honda, close, not quite.
[00:58:44] It's actually not I drove Japanese cars most of my life, but I now have an American car, but actually it's German technically.
[00:58:56] I drive a Ford Focus RS. Before that, I drove an Evo Lancer. I never owned a Subaru STI, but that's where I am.
[00:59:10] Right.
[00:59:11] I actually did drive a Volkswagen Jetta for a while.
[00:59:14] But you...
[00:59:16] I think you guys get what I'm saying, right?
[00:59:19] Cars that look basically like a consumer compact car, but have...
[00:59:25] Boop.
[00:59:27] you know,
[00:59:28] the best technology, all wheel drive, you know,
[00:59:31] Good horsepower, yeah.
[00:59:33] you know,
[00:59:34] You know, that kind of thing, you know?
[00:59:39] Yeah, I loved my...  Yeah, honestly...
[00:59:43] That Evo was unreal.
[00:59:50] There you go.
[00:59:52] Joe, FK, it's time.
[00:59:55] Thank you.
[00:59:56] you
[00:59:57] But, yeah.
[00:59:59] So...
[01:00:00] But yeah, you know.
[01:00:02] Not a Lambo guy.
[01:00:03] Not a Porsche guy, not a...
[01:00:06] Not even like a...
[01:00:08] boss Mustang kind of guy.
[01:00:12] I like cars that
[01:00:14] And my RS, I guess, has a tiny bit of a wing on it,  but I don't need a huge wing.  I'd rather...
[01:00:22] The car...
[01:00:23] look clean
[01:00:25] but have a lot under the hood.
[01:00:30] I love GTR.
[01:00:31] GTRs.
[01:00:32] Yeah, if I had a lot of money...
[01:00:35] Yeah.
[01:00:36] Yeah.
[01:00:40] All right.
[01:00:40] Yeah, I, yeah.
[01:00:43] Okay.
[01:00:45] Yeah.
[01:00:47] Right.
[01:00:49] Here you go.
[01:00:50] Does that say anything about leptos?  I don't know.
[01:00:54] No, I love...
[01:00:57] GTR is so cool.  I mean, they are obviously  the R35 generation or whatever,  but...
[01:01:05] I still have a very big soft spot for the R34 and the R32.
[01:01:09] Um,
[01:01:10] Anyway.
[01:01:15] Thank you.
[01:01:17] Thank you.
[01:01:18] Thank you.
[01:01:20] Thank you.
[01:01:21] All right, sorry, this went...
[01:01:25] Again on a tangent.
[01:01:29] I did own, because of my love of GTRs, I did own a...
[01:01:33] uh,
[01:01:35] an Infinity G35 for a while.
[01:01:40] And it was the nicest car I'd ever owned to that point.  It had like nice seats and nice heating and a nice sound system.  Uh,
[01:01:47] Right. Because that's a that's technically what do they call those?  Like they're like.
[01:01:53] They're called the Skyline GT350.
[01:01:58] in Japan or whatnot, that's Nissan Skyline GT350.
[01:02:03] But yeah, I don't know.
[01:02:07] Thank you.
[01:02:09] Amen.
[01:02:10] Anyways, car conversation is a little bit off point. Let me see if I can get a playground up going to from what I want to do here.
[01:02:21] um no until the last demo i did whenever i'm showing this this is my like world beyond components talk
[01:02:28] But I'm like,
[01:02:29] "Look at how you don't need a compiler."  Let's reset that.
[01:02:34] We need riser.js.
[01:02:38] Oh, man.
[01:02:41] Okay.
[01:02:42] I don't know the best way to do this.
[01:02:46] But I wanted to do some sort of coloring because
[01:02:49] I feel like...
[01:02:52] I feel like...
[01:02:55] One of the differences, before we even get into suspense for a moment, but I want to, like, show...
[01:03:02] something here, which is that like
[01:03:05] I'm going to do my classic example.
[01:03:15] Um...
[01:03:18] Thank you.
[01:03:22] Okay.
[01:03:23] And we're going to do one more, we're going to do a create effect.
[01:03:29] Actually...
[01:03:33] Yeah, we're going to create effect and the create effect is going to this is going to show double count.
[01:03:38] It's funny, I want to start with React, and we will go there in a second.
[01:03:43] And the crit effect is going to console.
[01:03:46] dot log.
[01:03:49] Count.
[01:03:52] Thank you.
[01:03:59] Thank you.
[01:04:05] Okay.
[01:04:06] Thank you.
[01:04:07] Thank you.
[01:04:08] Everyone can see this, right?
[01:04:13] Thank you.
[01:04:15] Thank you.
[01:04:16] So,
[01:04:17] Thank you.
[01:04:18] what I'm trying to do here is I don't actually care what,  what this is very much.
[01:04:26] I just want to kind of show a cycle.  Let's actually...
[01:04:31] change this to
[01:04:33] React code. I wonder if I paste stuff in
[01:04:36] Yeah, this is not going to work.
[01:04:38] Um,
[01:04:39] I almost have to take a screenshot and draw over it.  It's probably going to be our best bet.
[01:04:44] Um,
[01:04:48] Yeah, okay.
[01:04:49] It's fine.
[01:04:52] Because I actually don't care if this app actually works or not.
[01:04:55] I just need to...
[01:04:57] Let's make a react version of this.
[01:05:01] Use state.
[01:05:07] Use memo.
[01:05:10] Count times two.
[01:05:12] Count.
[01:05:16] Thank you.
[01:05:18] Use effect.
[01:05:25] Yeah, count.
[01:05:31] Thank you.
[01:05:31] Change text alignment.  Yeah, but I don't even get like...
[01:05:35] Thank you.
[01:05:35] I don't even get like...
[01:05:39] syntax highlighting or whatever.  And what I want here is...
[01:05:46] There we go.
[01:05:47] I should do that just so I can see.
[01:05:49] What I really want to do here is just like,
[01:05:53] Turn off the bell.
[01:05:55] Thank you.
[01:05:56] Thank you.
[01:05:58] Actually, let's align this so that
[01:06:02] executable parts run on or on different lines.
[01:06:06] So be useful.
[01:06:10] Thank you.
[01:06:11] Yeah.
[01:06:12] Thank you.
[01:06:16] Okay.
[01:06:19] There we go.
[01:06:21] Okay.
[01:06:23] Now I have no clue if what I'm trying to do here  is gonna make any sense or if it's even a good thing to do,  but we're gonna try and do this right now.
[01:06:29] Because...
[01:06:32] We have some React code.
[01:06:35] Thank you.
[01:06:37] And if we insert,
[01:06:40] An image.
[01:06:41] Oh, I'm like dumb.
[01:06:43] I'm trying to remember, where do my screenshots last up?
[01:06:47] I put them somewhere.
[01:06:50] Yeah.
[01:06:51] I can't remember where I put them on this computer.
[01:06:55] Found it.
[01:06:58] Let's just drop it right here.
[01:07:00] Okay.
[01:07:06] Let's look at the statement by statement,  but we're gonna do a little coloring here.  I'm gonna define some swatches here for color code.
[01:07:14] sake, but we're going to say that
[01:07:17] I'm going to make it solid.
[01:07:19] I'm going to say...
[01:07:21] that this
[01:07:23] is pure.
[01:07:27] Thank you.
[01:07:29] And then...
[01:07:33] Thank you.
[01:07:36] Thank you.
[01:07:39] This
[01:07:42] is render.
[01:07:46] And then...
[01:07:56] Thank you.
[01:07:58] This is
[01:08:01] is post render.
[01:08:05] I want to talk about scheduling essentially is what I'm doing right here. Okay. Everyone following so far?
[01:08:14] Yeah, I did read his articles translated to English and I still don't quite.
[01:08:20] follow him 100% of the time.
[01:08:25] you
[01:08:27] you
[01:08:28] Um, okay. So...
[01:08:31] Okay.
[01:08:33] If this is React,
[01:08:35] And we're just going to scribble along the side here.
[01:08:40] We're going to start...
[01:08:41] With pure...
[01:08:44] Right.
[01:08:46] When we run our code,
[01:08:49] This runs during the pure phase.
[01:08:55] The...
[01:08:58] This whole thing runs during the pure phase.
[01:09:03] This is
[01:09:06] Count runs during the pure phase.
[01:09:12] And then...
[01:09:16] This JSX all runs during the pureface. This is what it looks like in React, okay?
[01:09:24] Right.
[01:09:25] And...
[01:09:27] Thank you.
[01:09:29] If I...
[01:09:30] Switch now to red.
[01:09:33] Or sorry, I'm going to switch to blue now.
[01:09:36] The only other thing that we have here,
[01:09:38] is this
[01:09:40] which runs
[01:09:41] post-render.
[01:09:42] So what I'm trying to show here...
[01:09:46] is that
[01:09:48] I
[01:09:50] There is no...
[01:09:51] render
[01:09:53] kind of exposed to you
[01:09:55] as a React developer.
[01:09:57] Um,
[01:09:59] Pretty much the whole component runs pure except it schedules the use effect to run post render.
[01:10:07] More people should like the stream.  Is this where I remind people to like and subscribe because it makes a big difference?
[01:10:16] *cough*
[01:10:19] Right. The truth of the matter is outside of this,
[01:10:23] React, you know, we'll do something like have like you can picture your components being called.
[01:10:29] you know, during like,  it's unfortunately called the render phase,  but you'd be like,
[01:10:35] Run components.
[01:10:38] And then there's patch, patch,
[01:10:41] and diff, right?
[01:10:42] or diff and patch, sorry.
[01:10:44] diff,
[01:10:46] and patch.
[01:10:49] that happens outside your...
[01:10:50] This happens outside here and in this phase,
[01:10:55] Thank you.
[01:10:59] This is green.
[01:11:05] And this is red.  So essentially...
[01:11:10] at all times with React,
[01:11:14] but wait.
[01:11:18] When the code you write as an end user  is either gonna be pure code  or it's gonna be scheduled post-render.  The actual rendering or effectful part of the stuff
[01:11:28] of the framework is actually completely hidden from you at all times.
[01:11:32] And it's important to note that even...
[01:11:35] part of this use effect.
[01:11:38] is run.
[01:11:40] during the pure phase. They know that this use effect
[01:11:43] Um,
[01:11:44] is related to count.
[01:11:46] that they can choose whether they schedule it or not. Right.
[01:11:49] Okay.
[01:11:54] Thank you.
[01:11:55] Thank you.
[01:12:03] So then, all right, let's get out of here. So,
[01:12:07] Let's take our solid example and do the same thing.
[01:12:13] um exercising as this right
[01:12:17] I'm going to talk about SOLID today first, and then we can talk about
[01:12:22] what some of the other frameworks are doing, right?
[01:12:25] I actually don't need to switch this to a new line because there's no dependency array.
[01:12:31] Thank you.
[01:12:31] This one I
[01:12:33] Do...
[01:12:35] Thank you.
[01:12:37] You know, whatever, I'll just do it for fun.
[01:12:40] Okay.
[01:12:41] Thank you.
[01:12:44] all right let's do this
[01:12:52] Actually, I want to add one more thing to this example.
[01:13:01] Do I?
[01:13:03] Hmm...
[01:13:07] No, not yet. We'll get there.
[01:13:10] Thank you.
[01:13:12] Thank you.
[01:13:17] Okay.
[01:13:18] Someone was asking if the Mac just copied it, but no, I mean...
[01:13:24] Let's...
[01:13:27] Thank you.
[01:13:28] Let's move this over.
[01:13:31] I'll first paste our image in.
[01:13:43] Okay.
[01:13:45] Thank you.
[01:13:46] I'm going to just because so I can get it all on the screen.
[01:13:51] I'm going to
[01:13:53] Just copy it over like this.
[01:13:57] Okay.  And then this is...
[01:14:00] Solid.
[01:14:03] today.
[01:14:05] Thank you.
[01:14:09] Let's just say solid. Okay.
[01:14:17] No, it doesn't run all pure.
[01:14:19] Let me get here.
[01:14:27] I mean...
[01:14:28] Thank you.
[01:14:29] I think there's something we have to look at here.
[01:14:31] Because...
[01:14:33] If we're talking about the initial render,
[01:14:36] And yeah, this runs pure.
[01:14:40] This runs pure.
[01:14:46] And, you know,
[01:14:48] Thank you.
[01:14:50] Thank you.
[01:14:52] And this runs pure as well.
[01:14:57] Okay.
[01:14:58] And then obviously...
[01:15:06] this runs post render.
[01:15:10] Initially.
[01:15:11] And I want you to note something.  Nothing about the effect, including knowing the dependency of count,
[01:15:17] runs pure. So we don't actually know
[01:15:20] what the effect runs depends on at the time.  Because you'd run pure, then render, then post-it render.  Like...
[01:15:28] And then solid when it updates is a little bit more interesting because, you know,
[01:15:49] Does React?
[01:15:51] regardless of whether it updates or
[01:15:55] So just kind of like move these around.  So they're a little bit more grouped together.  React, regardless of whether it's first render or updates,  it does, it looks the same.
[01:16:03] Whereas in a fine-grained render like Solid,
[01:16:07] what ends up happening is
[01:16:09] None of the stuff outside.
[01:16:11] Runs it runs again
[01:16:12] Obviously.
[01:16:14] because we don't re-render components. So when something updates,
[01:16:20] focusing just on the expressions.
[01:16:24] This renders runs pure.
[01:16:28] This renders runs after.
[01:16:34] And this...
[01:16:36] renders
[01:16:38] render now and you might be going, OK,
[01:16:40] Because...
[01:16:45] Essentially, I'm
[01:16:46] Our render effects
[01:16:49] render during the pure phase during our initial renders.
[01:16:53] We run them eagerly the same way create memo runs eagerly in solid.
[01:16:58] And then after the fact,
[01:17:00] they get scheduled like this.
[01:17:05] Okay.
[01:17:07] Right. And the reason I'm highlighting that is because it's literally just this expression, right? We don't recreate the rest of the stuff.
[01:17:16] No.
[01:17:17] No, no, no, no, no, no.
[01:17:19] Memos and effects are very, very, very, very, very different.
[01:17:22] I use that as a basic example so people understand reactivity, but memos are the key to like the derivation and stuff is the key to everything.  Let me drop an article in.
[01:17:36] Um,
[01:17:38] I guess this is like, should be like the next reading for anyone who reads my introductions series.  Maybe I should tag this one on as like part three.
[01:17:47] you know, the I have, you know, but derivations and reactivity is important.
[01:17:54] Thank you.
[01:17:55] Thank you.
[01:18:01] Thank you.
[01:18:03] The reason I wanted to show this is
[01:18:06] is because...
[01:18:08] I'm going to make one more example here.
[01:18:11] I'm going to add...
[01:18:12] Like, uh,
[01:18:14] In front of the effect, I'm going to hoist out a function.  I'm going to call it const const.
[01:18:18] Triple.
[01:18:19] Count.
[01:18:20] And I'm just going to make it a function, not a memo. Okay.
[01:18:25] And it's going to be...
[01:18:28] count,
[01:18:30] times 3.
[01:18:33] Okay.
[01:18:36] Thank you.
[01:18:37] The reason I want to do this
[01:18:40] Thank you.
[01:18:44] I'm going to show you in a minute.
[01:18:55] Thank you.
[01:18:57] Thank you.
[01:18:58] Thank you.
[01:18:59] Huh.
[01:19:01] Thank you.
[01:19:02] *crying*
[01:19:12] Oh, did I not...
[01:19:14] Duh. Sorry, I need to do one more screenshot.
[01:19:18] I didn't actually update this to use triple count.
[01:19:24] Oh, that's annoying.
[01:19:26] It's fine. It auto formatted on me. It's fine. Auto formatting is a good thing. Um,
[01:19:32] Just...
[01:19:33] was trying to do something very specific.
[01:19:37] All right, let's try this again.
[01:19:43] Thank you.
[01:19:48] The reason I want to include the function here, because I want to make this at least aware, even with solid today or whatnot, is that.
[01:19:57] Doing our same exercise again.
[01:20:02] on update.
[01:20:03] Pure.
[01:20:07] Thank you.
[01:20:11] - Red.
[01:20:14] Blue, right? What what what colors trip this triple count function?
[01:20:29] .
[01:20:32] Thank you.
[01:20:37] I find it funny in virtualization and games similar beats all competitors in terms of speed.
[01:20:42] Engine. Yeah, I mean, if you cheat the benchmark, then you cheat the benchmark. Every framework can add virtualization. The point isn't to reduce the DOM work. It's to show the overhead of the framework doing the same DOM work.
[01:20:59] So like,
[01:21:01] This is kind of part of the...
[01:21:05] the problem with benchmarks in general,  like,
[01:21:09] everybody can virtualize everyone yeah
[01:21:13] right
[01:21:17] Yeah. So how's the guessing going? Green, blue, green, blue, green, blue, non red green.  OK, yes. Purple. Who? No, the answer is is blue.
[01:21:26] And the reason the answer is blue is because it's just a function.  You called it at the time you're running this.  So it is just blue.  There's nothing...
[01:21:33] There's nothing fancy about it.
[01:21:37] But what it does mean is,
[01:21:41] is there is a definitely a difference scheduling wise between using a memo and not using a memo.
[01:21:49] Right?
[01:21:50] If I did the same thing in React,
[01:21:53] Again, I mean, it's unsurprising that if I put it in effect,
[01:21:57] It would just call the function at that point.  But I just want to, this is a bigger difference from a reactivity standpoint.
[01:22:04] Um,
[01:22:06] As I said, this is just an aside.  I just want you to think about this.
[01:22:11] in general, about the meaning of
[01:22:14] you know, when something is part of the different parts of the graph,
[01:22:17] Right.
[01:22:18] The thing is, in React,
[01:22:21] Actually, you know what? The React example wouldn't be that. The React example
[01:22:27] You would have to depend on triple count.
[01:22:30] Sorry, yeah, I'm wrong. Sorry. It would depend on triple count, which means that it would be green
[01:22:36] in React because you would have to get that dependency to feed into the use effect.
[01:22:41] So,
[01:22:42] Yeah, it would be green in React.
[01:22:45] Yeah, that was actually my whole point I should make. Sorry, I got lost there.
[01:22:51] In React, it's green.
[01:22:53] In solid, this is an inconsistency.
[01:22:56] you're beating me to it, Craig.
[01:23:03] Yeah.
[01:23:05] If you use both effects, then it'd be purple.  Yeah, yeah, yeah, yeah, yeah.
[01:23:10] No.
[01:23:12] React would be green.
[01:23:15] Thank you.
[01:23:16] is what I'm getting at because
[01:23:18] you for it to be a dependency of use effect here, you'd have to execute it out here like it would have to be executed during the pure phase and then the effect would would do that.  So react is all green except for just this thing in here.
[01:23:32] And,  and,
[01:23:33] what i was trying to get at is technically solid these binding like the red here isn't
[01:23:41] Like during initial render, I'm kind of lying because
[01:23:46] The technically the expression runs during the green here and the creation of the elements, but the actual insertion happens.
[01:23:57] in the red zone, so to speak.
[01:24:01] Um,
[01:24:02] we like memo up and then we unwind back into into insert like render effects. So like technically there is like
[01:24:10] A little bit of green.
[01:24:12] Like,
[01:24:13] or red, like,
[01:24:14] Right there.
[01:24:17] Initially,
[01:24:20] But when it comes to updates, it's like the whole expression, right?  So I'm trying to show actually the inconsistency of
[01:24:27] between
[01:24:28] our model, right, compared to React, which is always the same.
[01:24:33] in terms of execution scheduling, okay?
[01:24:37] Thank you.
[01:24:41] I'd ask the answer to Svalt. Yeah, I mean...
[01:24:44] felt
[01:24:45] Um,
[01:24:46] Thank you.
[01:24:47] It's still five.
[01:24:50] it's going to be similar to what I'm about to show you,  which is the next thing. Older Svelte is kind of like,
[01:24:59] I don't even really know. I think older salt was so simple that like they didn't even really take scheduling into consideration that much.
[01:25:07] Like,
[01:25:08] like everything we just kind of rerun and then whatever the value was when it  reran like old felt was kind of similar to react so i wouldn't be surprised
[01:25:17] And if it was all green,
[01:25:21] or like
[01:25:23] maybe like this. Olds felt was more like react. Um,
[01:25:29] There's no dependency array bit, but you know what I mean? Like,
[01:25:35] They definitely didn't have this or this update model part.  They were just like this more or less.
[01:25:40] They might not run all the code again,  but like, so like you could skip the state part,  but all the expressions they would,
[01:25:46] basically like check if they have to run them again.
[01:25:53] Okay, okay, so I
[01:25:57] you're already starting to see the inconsistencies.  And the reason I wanted to do that is because I wanted to go, this is what's solid today, right?  That's what I was saying.
[01:26:05] Now, what if...
[01:26:08] we look at the update
[01:26:11] And I'm going to use this last example again because it's more interesting.  So let's label some stuff.
[01:26:17] Um...
[01:26:19] Yeah, so this one is...
[01:26:23] Solid update.
[01:26:28] And then we'll call this one
[01:26:30] So...
[01:26:32] What?
[01:26:34] Solid update.
[01:26:36] number two okay.
[01:26:38] It's not even number two, it's like solid update.
[01:26:41] with function. OK, doesn't matter. OK, so I'm going to take this example again.
[01:26:47] And
[01:26:48] present like solid the reason this works this way in solid is because we  eagerly evaluate all our memos not just initially but after the fact
[01:26:55] like when we cue them, all our computed values onto a stack. So they always run before the effects,  before the render effects, and we get that clear green that always happens. However, if you have a lazy system,
[01:27:11] Right.
[01:27:14] If you have a lazy system,
[01:27:18] And so now we're going to call this one
[01:27:21] Lazy.
[01:27:24] signals and if you want to know frameworks that have implemented lazy signals it's basically  everyone but who's not solid or sjs at this point
[01:27:31] this has been the new trend when preact added signals, angular added signals, when
[01:27:38] Svelte's adding signals. They all went lazy because lazy means that you don't have to do  the work for the memo unless someone listens to it. Now in a lot of apps that doesn't
[01:27:47] actually matter very much.  Like you wire the graph.
[01:27:50] But there are situations where that actually is a benefit. I just never cared about it very much. But
[01:27:56] The big win is that you don't have to run this, right?  But if you naively take lazy signals on the update,
[01:28:03] and you come back here,
[01:28:05] Let's let's try color coding again, shall we? Let's get our pen.
[01:28:10] Thank you.
[01:28:10] Well, I don't know.
[01:28:13] We know...
[01:28:15] that this is always going to be render.
[01:28:18] And we know,
[01:28:21] That this is going to be blue.
[01:28:24] as will this always be blue. What color is this memo?
[01:28:29] Well, the answer is the memo is actually blue as well.
[01:28:33] because...
[01:28:36] It's read for the first time.
[01:28:39] Actually, no. Actually, the memo isn't blue. Sorry, I got this wrong.
[01:28:42] You know what color the memo is?
[01:28:50] It's red.
[01:28:52] Thank you.
[01:28:55] Yeah, it's just because that's when you called it.
[01:28:58] Thank you.
[01:29:01] Okay.
[01:29:03] So,
[01:29:04] This is...
[01:29:05] A bit of a mind twist because...
[01:29:11] From my perspective.
[01:29:13] I mean, you'll see what this has to do with suspense in a minute.
[01:29:17] But like...
[01:29:20] Yeah, because it's lazy.  If you use lazy signals, you don't compute something until you need it.
[01:29:32] So,
[01:29:33] And what I'm getting at is a memo that is right next to it.
[01:29:38] that is used
[01:29:39] in effect will be blue
[01:29:42] Um...
[01:29:44] Basically the order of the execution of this stuff.
[01:29:48] depends on where it's consumed. And more interestingly is,
[01:29:54] There's no...
[01:29:56] guarantees on execution. See, the funny thing about
[01:30:00] The thing about this model is...
[01:30:03] If you did all the pure work,
[01:30:06] And then we're like...
[01:30:10] Hey.
[01:30:11] I don't want to continue...
[01:30:13] I'm waiting for something async.
[01:30:16] you could just stop and not run any of this blue or red stuff.
[01:30:22] And, you know,
[01:30:24] You wouldn't care.
[01:30:26] And if you went here, you know, like...
[01:30:28] Yeah, you wouldn't run this function, but also you can get it.  You're just calling this function.
[01:30:33] But when you got here...
[01:30:36] It's already too late.
[01:30:39] to say stop.
[01:30:41] Don't run any of the red or blue stuff.
[01:30:44] Because it got run for the first time.
[01:30:47] And it's red.
[01:30:49] Not the first time, the very first time it's green.  But my point is when something changes, count changes or something,
[01:30:56] It's not going to run this until it turns red.
[01:31:06] Yeah, yeah. Triple factoring of the count would be blue, yeah.
[01:31:12] You mean the other way? Yeah.
[01:31:15] If triple count was called down here, it would be red.
[01:31:18] Yeah, it'd be wherever the function was just to show, I want to show the memo like behavior before we got into it so you can understand how it translates. Right. So this is the signal solution that everyone's been pushing.
[01:31:31] And it's not actually very...
[01:31:34] good from a
[01:31:37] It's too late. You're already in the queue  sitting there
[01:31:41] running
[01:31:43] running.
[01:31:44] you know, these effects. Okay.
[01:31:48] So, okay, I just wanted to kind of,
[01:31:52] establish this. And the reason I want to establish this is because if we go back to the beginning, we're
[01:31:57] No matter what I do with React,
[01:31:59] it's always going to be pure except for this thing it's very easy to run everything
[01:32:04] And then...
[01:32:06] And then...
[01:32:08] you know, schedule this blue thing.
[01:32:11] React basically has this whole cycle kind of dialed in.
[01:32:15] Can we get that sort of predictability?  Like solid today is actually very close with fine grained updates, very close to having  that sort of predictability, but it's not perfect.
[01:32:24] What if...
[01:32:35] You did this. Now, I know you guys
[01:32:41] No one likes this
[01:32:43] But...
[01:32:44] What if.
[01:32:48] We did this.
[01:32:52] And what if the render effects also
[01:32:55] did this.
[01:32:56] Essentially.
[01:32:59] So basically, there was two halves.
[01:33:02] So like this double count was like this.
[01:33:08] Right?
[01:33:10] Thank you.
[01:33:12] Now, you're going to tell me
[01:33:14] that this looks a lot like React.
[01:33:18] I'm sure.
[01:33:21] But if you separate...
[01:33:23] Thank you.
[01:33:24] the two halves,
[01:33:44] you
[01:33:45] Let's run it. Let's separate the two halves. What do we got here?
[01:33:50] Well, I don't know.
[01:33:51] We already know in all of these initially we're going to be doing a lot of green.
[01:33:55] Right.
[01:33:56] But I'm going to run the initial...
[01:33:59] run through. So we're going to call this one,
[01:34:06] Split.
[01:34:10] Initial, okay?
[01:34:12] We're going to split initial here.
[01:34:14] we're going to what we're going to see is,
[01:34:17] Yeah, obviously green.
[01:34:19] Green, obviously.
[01:34:21] But not...
[01:34:22] This is still lazy.  I should emphasize this because this is not the order.  Sorry.  Let's actually do the order of how this works.
[01:34:30] I mean, this could run eagerly, but it doesn't have to.
[01:34:33] It can call this eagerly.  And then so it goes green.
[01:34:37] It could...
[01:34:38] Yeah, I guess, I guess, yeah, you know, this is a year.
[01:34:42] because otherwise the graph can't be created.
[01:34:44] And then...
[01:34:46] It gets the effect that,
[01:34:49] And, you know,
[01:34:50] Technically,
[01:34:51] This is deferred still.
[01:34:54] We'll get to that in a second, but it's still queued like the eager one is. So I'll get to that during the pure queue. So then we get here.
[01:35:03] And this is green.
[01:35:06] It reads...
[01:35:07] The double count.
[01:35:10] Okay. And maybe we have those little red squigglies here like I showed before.
[01:35:15] And then it reads this still during the pure phase, which means it reads this still during the pure phase.  And then finally...
[01:35:25] we get our blue
[01:35:27] after we've rendered everything right.
[01:35:29] So this looks like,
[01:35:33] Similar,
[01:35:35] to...
[01:35:38] to i i never did this version of the diagram i never like for us but if this had been
[01:35:46] Sorry, this version. I never did this initially, but if this is initially, this would have still been blue even initially. So the difference between this.
[01:35:53] and split initially is that it actually
[01:35:57] is the same as React's behavior.
[01:36:00] And after the fact,
[01:36:08] Thank you.
[01:36:13] Split update.
[01:36:17] Thank you.
[01:36:23] Well, it knows the dependencies, so now you update count.
[01:36:28] Count actually...
[01:36:29] queues up
[01:36:31] This first.
[01:36:32] which means this runs green.
[01:36:38] And this runs green.
[01:36:40] which means this runs green.
[01:36:42] And sorry, I already missed this one.  This one means this one runs green as well.
[01:36:47] And then...
[01:36:53] This runs red.
[01:36:55] It does the insertion.
[01:36:58] It's like the code you don't see.
[01:37:00] And then...
[01:37:02] This runs blue.
[01:37:06] Thank you.
[01:37:10] And as I said, effectively, this was
[01:37:12] Always like that. So
[01:37:15] We've...
[01:37:16] Basically,
[01:37:18] Through this process,
[01:37:20] If you noticed...
[01:37:22] They're the, we're looking at the same picture.
[01:37:25] between update and split. It's not quite the same. This one just does way less work on update than  initially, but the scheduling guarantees are actually the same and they're the same as React.
[01:37:37] Right.
[01:37:39] Thank you.
[01:37:48] If you pass signal directly to Dom Parson had a signal, then you don't need the split tracking from the effect.
[01:37:56] So you're saying if like every...
[01:37:59] Only if it was compiler. The important part isn't
[01:38:03] the auto tracking. The important part is when the code actually runs from a scheduling thing. This has nothing to do with auto tracking, right? Like,
[01:38:11] It's like...
[01:38:12] like unless the compiler was like looking for it,  the important part is that the front bit, this expression,
[01:38:19] runs
[01:38:20] separate from the thing that actually does the thing this isn't about tracking yes this is  tracking scope this is a non-tracking scope but that doesn't
[01:38:28] You don't split it because of tracking.  You split it because...
[01:38:32] you want one to render
[01:38:35] one to execute during one time
[01:38:37] point and the other stuff that we execute afterwards.
[01:38:43] Yeah.
[01:38:44] Here's the thing.
[01:38:45] Okay.
[01:38:47] Dependency.
[01:38:48] This can be dynamic. There is one difference between this
[01:38:52] and react.
[01:38:54] you can put conditionals in our expressions right this is not just a dependency array  every time it ruts it can actually change
[01:39:03] what it depends on.
[01:39:04] So any static analysis, it's a problem that Svelte had and even Marco and why we went to runtime to a degree like.
[01:39:12] compiler based is a good optimization but it can't it's not as dynamic there's a reason why
[01:39:17] currently runtime-based reactivity frameworks are faster than compiler bases because like they  technically the compiler should be faster but the handling of dynamicism um
[01:39:30] means that whole categories of
[01:39:32] things over execute where they don't need to.
[01:39:37] This is not again, this is one of those places where you don't know which path it's going to take ahead of time.  It's kind of like the routing problem.
[01:39:44] Thank you.
[01:39:47] To be sure, this is an R-Change of a Letter.  No, the thing is,
[01:39:50] solid this is an a reveal that solids designs decisions even though
[01:39:55] They weren't as clean.  Always were like React when it comes to the thoughts on scheduling.
[01:40:03] and why lazy is actually at odds with that thinking.
[01:40:07] The reason Solid has concurrent rendering, the reason Solid can do suspense and transitions,
[01:40:13] decently was we ignored cases like this a little bit.
[01:40:19] You know, like where the function...
[01:40:22] And we're like, eh.
[01:40:23] And, you know, some loopholes around effects.  Like if this was, you know,
[01:40:28] But otherwise, we're like 95% react when it came to scheduling standpoint, the difference between
[01:40:35] solid and react is that the dependency, like, or not even solid yet, but like this,
[01:40:43] this thing I'm talking about with the split is the dependencies can be dynamic.  It's like,
[01:40:47] you have one more dimension.  It's like, I don't know, you guys know calculus?
[01:40:51] It's like...
[01:40:52] It's like React is...
[01:40:55] this like gives you like this one view of how things work like a
[01:41:02] I don't know, like...
[01:41:05] How do I put this?
[01:41:11] it's like the relationship between velocity and acceleration,  you know,  like,
[01:41:17] We are one step back where like,
[01:41:22] we can dynamic like signals,
[01:41:26] are just like adding this
[01:41:27] Bye.
[01:41:28] I don't know what to call it.  You guys, technical, it's like when you step...
[01:41:33] through that kind of difference like
[01:41:36] when you're going between like velocity and acceleration, like that kind of dimension.  It's not a dimension, though, like a spatial dimension.
[01:41:43] It's like,
[01:41:45] we're basically approaching the problem
[01:41:48] by constructing
[01:41:53] Reacts scheduler
[01:41:55] dynamically at runtime.
[01:41:57] It's like that extra level degree of control.
[01:42:01] react to the project insult. Maybe that's it. Yeah.
[01:42:04] Yeah.
[01:42:08] What's gain from have signal drivers from around the consistent schedule? Yes. Thank you. Now, see, we're following this is this. This is why I started here.
[01:42:17] Right?
[01:42:17] I think React has one of the best...
[01:42:22] approach his thoughts to like async model, right?
[01:42:25] Right.
[01:42:27] Yeah. So like
[01:42:29] in a sense, what makes solid feel so powerful compared to react is that we have the ability to like,
[01:42:36] have that extra bit of control. React is like,
[01:42:39] when you have the equations, because you know that, you know,
[01:42:42] how to calculate acceleration,
[01:42:45] or velocity but you don't have the means to show that they're
[01:42:50] a projection of the other one that, you know, like it's just derived
[01:42:53] you know, are a derivative of it, right?
[01:42:56] Like,
[01:42:57] solid gives you the control like the gives you the syntax gives you the means to
[01:43:02] to basically...
[01:43:04] create that derivation.
[01:43:07] So,
[01:43:09] Thank you.
[01:43:11] Yeah. Why am I getting here?
[01:43:16] And why do I care about scheduling?  Well, it depends on
[01:43:20] Thank you.
[01:43:21] how you want to handle
[01:43:22] concurrency, right?
[01:43:25] And how do you want to handle async?
[01:43:29] Correct.
[01:43:31] Because...
[01:43:32] Thank you.
[01:43:33] The reason for all of this stuff is...
[01:43:37] Kind of back down to an article I wrote a while ago.  I'll share this one.  I also have some new updated things, but it's like,
[01:43:45] What did I, what was this article? Um,
[01:43:50] Thank you.
[01:43:54] Why all the suspense? Yeah, yeah, this one. I'm going to drop this one in here.
[01:44:09] Oh, weird. Sorry. That link won't work because it has a...
[01:44:14] Instead of hitting the enter key, I hit the...
[01:44:16] Hit the there's like an apostrophe or something at the end of it. Okay, let's try that again. Um,
[01:44:28] I don't know that concurrent rendering has helped them a ton, honestly.
[01:44:34] But there's something nice about it.
[01:44:39] async models that make sense. And if you start kind of thinking in this sort of
[01:44:43] derived calculus sort of kind of way you start seeing and like in terms of projections you start seeing like signals are like
[01:44:53] Almost something very similar to the React mentality, but expressed
[01:44:57] as primitives that have nothing like it separates the like it gets rid of like the like
[01:45:02] a lot of the rendering aspects of it.
[01:45:05] you know, like component view hierarchical thing.  It's just the guarantees.
[01:45:10] And in a sense,
[01:45:12] if you could approach async as if signals were just a pro like that system was just a projection of
[01:45:20] of
[01:45:21] of the async model.
[01:45:23] then you could
[01:45:25] perhaps picture something where like,
[01:45:28] all the pieces just...
[01:45:30] fit seamlessly because they think it's a hard topic, right? It's way easier to talk about  consistency in user interfaces. This is where we always talk about stuff,  you know, we update something, it doesn't reflect properly in the other side.
[01:45:42] And
[01:45:43] I talk a bit about this before, but what I wanted to get at is like,
[01:45:58] This classic problem of like...
[01:46:03] So, you know, you have a lot of different things, you know, you have a lot of different things.
[01:46:09] account let's pretend that he needed to calculate the double count on the server
[01:46:15] and then you update it. There's going to be that time period when you initially load it,  that the counts the initial value and you have not calculated
[01:46:23] the
[01:46:24] the drive thing. And then it will come in and then there's a point where you update it. And  you'll see again, the updated value with the old value until finally the new value comes in.
[01:46:34] And,
[01:46:36] It's very easy to do this in any framework. You just use effect and feed it back into the state tree.
[01:46:41] But...
[01:46:42] The question is,
[01:46:46] What if you could treat async as if it's part of the graph, right?
[01:46:51] Like it's part of the derived graph, right?  That's essentially...
[01:46:55] the question here. Could we make other guarantees, right?
[01:46:59] The problem is...
[01:47:02] That there's only really...
[01:47:04] You can't get the async stuff any sooner than you can get the async stuff, right?
[01:47:09] So there's only three options here.
[01:47:12] when you're in one of these intermediate states.
[01:47:16] Bail out, as I call it, like hide what's going on.  They put it behind a fallback, basically be like, I'm never going to show it.
[01:47:22] when it's inconsistent.
[01:47:24] I'm just going to show...
[01:47:25] you know, when it settles.
[01:47:28] You could stay in the past.  You can be like, I'm going to keep on showing the previous, like the one and two, all the way until...
[01:47:35] 20 and 40 both come.
[01:47:37] Or you can be like,
[01:47:40] do an approximation in the client. Let's say you knew that,
[01:47:46] Times two is such a bad example, but like...
[01:47:50] Like,
[01:47:50] If you could approximate it, maybe you can show the thing before it actually loads and then show the real thing when it comes in.  Obviously, with times two, it's pretty easy to approximate it.  You just times it by two.
[01:48:03] And
[01:48:03] These are basically the only three options you have for async.
[01:48:07] And this kind of brings us to our topic of suspense today because
[01:48:11] suspense is involved in all of these,  but the key part about it,
[01:48:16] is that everyone associates it with is the bailout, right?
[01:48:22] But,
[01:48:23] It's not the whole story.
[01:48:29] Thank you.
[01:48:30] Thank you.
[01:48:32] So, yeah, I mean, I talked about this article a while ago.
[01:48:37] But,
[01:48:39] Yeah, don't worry. I'm going to also grab some HackMDs while I'm at it just because I haven't for a while.
[01:48:48] on the
[01:48:48] Just get myself ready here.  Cause I think it's,  uh,
[01:48:53] Oh.
[01:48:55] Thank you.
[01:48:56] got it it shows you how long i've been in here been here yeah let's give this s let let let let
[01:49:01] Let me...
[01:49:04] Get my two-factor authentication going here.  Sorry, guys, for the delay.
[01:49:08] All right.
[01:49:11] Thank you.
[01:49:14] Thank you.
[01:49:15] It's... all right.
[01:49:21] All right.
[01:49:24] Thank you.
[01:49:25] All right.
[01:49:27] Let's continue on.
[01:49:31] I think the first thing we have to kind of acknowledge
[01:49:35] in this conversation is,
[01:49:38] Frameworks don't need to handle this.
[01:49:41] Thank you.
[01:49:41] necessarily there's always solutions outside of it but it's pretty compelling
[01:49:47] to look at this from a first principle standpoint and then be like,
[01:49:51] How do I...
[01:49:54] you know,
[01:49:55] implement this in a way that's like nice or logical for people to use right because the benefit for a
[01:50:01] principles standpoint is that
[01:50:05] Uh...
[01:50:07] like
[01:50:08] In theory, you can present a completely consistent, perfect model.  In reality, that might fall apart a bit.
[01:50:16] GitHub forgot who I was, yeah.
[01:50:19] Anyway,
[01:50:21] I'll get to my HackMDs as relevant when we get there, but...
[01:50:25] the thing that
[01:50:28] It's funny because I didn't actually write about this part and I probably should have.  Let me see if I can...
[01:50:36] Thank you.
[01:50:40] Thank you.
[01:50:42] Is this the...
[01:50:43] No, it's not this one. Sorry. I just need to find the right one.
[01:50:49] Thank you.
[01:50:51] Yeah.
[01:50:51] Thank you.
[01:50:54] Okay, this is the right one. Okay.
[01:51:01] I'm going to drop this in here for anyone who cares to read, but we'll talk a bit to this while we continue on here.
[01:51:11] -
[01:51:13] um
[01:51:14] Thank you.
[01:51:16] Thank you.
[01:51:19] I'm trying to think of how I want to handle the next piece.  Sorry, just give me two seconds as I kind of...
[01:51:24] noodle on that. It's just
[01:51:28] Thank you.
[01:51:30] you
[01:51:31] Thank you.
[01:51:33] Bye.
[01:51:34] We've kind of talked about, we've danced around pieces of this before on the stream.
[01:51:39] So I'm trying to decide like how...
[01:51:41] basic or like how far back on a pull this.
[01:51:47] is like, I think...
[01:51:50] And it's one of the challenges that we've faced recently is like,
[01:51:53] people don't know why suspense,  or if they do implement suspense in a lot of frameworks,  it's like not...
[01:51:59] particularly interesting, right?  Because hiding stuff until it's ready
[01:52:03] isn't.
[01:52:04] that hard of a mechanism to make, right?
[01:52:07] you
[01:52:08] basically have some way of detecting the asyncness.
[01:52:12] In React, they throw promises and other frameworks. They just
[01:52:16] like register that they got a promise.
[01:52:19] you know,
[01:52:20] like view setup function.
[01:52:23] And then...
[01:52:25] or like await components in like Svelte.  And then...
[01:52:31] When it finishes awaiting promise, then then you show the, the, you know, while it's not, you know, visible, you show like a fallback and then when it's finished, you show the.
[01:52:39] updated rendered thing.
[01:52:42] But
[01:52:45] this whole topic is a lot harder than just hiding stuff because
[01:52:49] Hiding stuff is pretty jarring.
[01:52:51] Right? Like...
[01:52:52] Let me go here.
[01:52:55] Let's go to the tutorial.
[01:52:58] Right.
[01:53:00] I mean, it's fine.
[01:53:03] Let me see if...
[01:53:08] Thank you.
[01:53:10] people are used to this, right?  When you've switched between pages, you see loading, you see loading, you see loading.  But like picture if it was something that you want to update that like wasn't so substantial,  like you were flipping...
[01:53:21] through like a cart of like the same type of things like a,
[01:53:26] you know a bunch of i don't know maybe user profiles when you're going one two three like
[01:53:34] Depending on where this is, it's a lot to always just fall back to loading indicators like this.  I think a lot of people would be fine with it, but the tricky part with...
[01:53:45] with a lot of these mechanisms are
[01:53:48] The second...
[01:53:50] you have something async in flight.
[01:53:53] It's game on.
[01:53:54] Right? Like,
[01:53:56] you,
[01:53:57] It has no choice.
[01:53:59] but to default to this kind of hiding loading indicator.  And the truth of the matter is, I would argue...
[01:54:07] that
[01:54:07] and I did hear that all...
[01:54:11] of these three options are equally viable, like things that you would be interested in potentially doing sometimes, right?
[01:54:19] Sure, you want to bail out on initial load.  But once you've loaded some content, maybe you want to stay in the past and just apply the updates as they come in.
[01:54:27] You know,
[01:54:30] There's actually a fourth option that I don't actually
[01:54:32] have here, which is to not
[01:54:35] Um,
[01:54:36] Right.
[01:54:37] Sometimes you want to tear.  Maybe you have a type of head.
[01:54:41] where you have an input and you want to be able to have the input update pretty quickly,  but then the search results are async and they can come in
[01:54:48] you know, as waterfall.
[01:54:50] Right.
[01:54:50] These are situations where...
[01:54:55] We're essentially like...
[01:54:58] Thank you.
[01:55:00] Hmm.
[01:55:03] It's difficult to just have a single solution handle all these problems.
[01:55:08] And a lot of the design around things like suspense are trying to make it so that it is possible to opt in and opt out of these behaviors.
[01:55:18] Thank you.
[01:55:18] So like...
[01:55:20] The simplest example I can think of here was I posted this article, which is like,
[01:55:25] pretend you have two pieces of data that you show on the page,  like a user name or a street address.
[01:55:29] If you're able to edit either of these,
[01:55:33] you know, independently, you wouldn't care. Like if you had two inputs,
[01:55:37] and two pieces of data.
[01:55:39] you know, separate parts of the page, doesn't matter. And you were able to update one,
[01:55:44] and have it update right away.
[01:55:45] independently of somewhere else on the page updating.
[01:55:50] you know, obviously you don't really care that these update independently.
[01:55:54] However,
[01:55:55] Yeah.
[01:55:56] Maybe if you had a process that involved, say, like a form where you updated both of them together, like this is a user and the street they live on.
[01:56:03] You might not expect these to update separately.  Like if you click Save, you might expect
[01:56:09] the update for both of these to come in at the same time. Now, keep in mind, I'm talking about sync right now.
[01:56:15] no async, just like a simple example.
[01:56:18] So because it's sync, there's no delay anyway, so they would probably update at the same time.
[01:56:23] But...
[01:56:24] Thank you.
[01:56:26] like,  like,
[01:56:28] So conceptually, I just want to kind of establish this idea that it's possible that
[01:56:33] that
[01:56:35] Depending on the action you're taking, you might have different expectations on what updates come in together or not.
[01:56:47] where we hit this and sync all the time is actually in the reactive graph,  right?  So like if there was cross dependencies downstream,  you don't want to do independent dependencies.
[01:56:57] calculations multiple times because you process things in the wrong order.  It's the reason we have signals, right? It's to make sure that like,
[01:57:03] If you know,
[01:57:05] something like, I don't know why, like if the name...
[01:57:08] the way you displayed the name changed based on the person's address.  You wouldn't want to like...
[01:57:13] process the name first one way and then realize that the address is also changed and then have  to process the name again sure it's synchronous so it's all going to kind of come up really quickly  but there's a cost of processing and you want to make sure that every node executes once right so
[01:57:29] There is...
[01:57:30] a consideration even synchronously about...
[01:57:34] things that are
[01:57:35] conceptually connected
[01:57:36] versus conceptually separate.
[01:57:40] right luckily for us on sync systems it's not hard to solve because literally like that's why  react exists that's why solid exists we have these rendering libraries to make sure that
[01:57:49] they're you know we're not going to get these weird mismatches where something
[01:57:53] you know, see something that's out of date mixed with something that's up, you know, updated. And then like,
[01:57:59] either not get the final...
[01:58:01] correct solution or
[01:58:04] you know, run things more times than they need to.
[01:58:11] Right.
[01:58:13] So the funny thing though is if I took that same example and brought it back into async,
[01:58:20] where we have these two pieces of data,
[01:58:24] Thank you.
[01:58:26] pretend for the sake of this, and I'm just using my article here as kind of the basis here, pretend that we had a stylized showing of like the person's username, maybe we like made a graphic for their, for their
[01:58:39] the first letter of their name that was like in some special stylized text
[01:58:43] Right.
[01:58:44] So whenever we change their name, we actually have to go generate an image.
[01:58:48] So we can show it. Right.
[01:58:52] Bye.
[01:58:54] Thank you.
[01:58:57] So again, if the address and the name have nothing to do with each other conceptually from a UI process standpoint, how like maybe it's not the user's address, maybe it's a different address over here and a user thing over here.  I don't know why your UI would be like that, but I'm just saying then you'd have no problem with these things updating separately.  Right.
[01:59:17] But...
[01:59:19] we do have to consider
[01:59:22] you know, the case
[01:59:23] I guess even before we consider the case of like them together, we have to consider the case of,
[01:59:28] If I update the name,
[01:59:31] Say it starts as John and changes to Jacob.  See, those both start with J.  So maybe stylized.  Let's pretend it's just a stylized version of their name as an image.
[01:59:41] When we go and click Save,
[01:59:43] we could show Jacob immediately
[01:59:46] right? Because we know they've changed to Jacob, but there's no way we will have that stylized  image for Jacob right away, right?
[01:59:53] So, you know, this is where our options are show.
[01:59:57] Jacob's name immediately while still showing John's image until
[02:00:00] The new one comes in.
[02:00:02] Show John in both places until the image for Jacob comes in.
[02:00:07] Show some kind of like loading
[02:00:10] placeholder
[02:00:12] for the image and show Jacob's name right away.
[02:00:15] And then when it comes in, show the image for Jacob or
[02:00:20] approximate it,
[02:00:21] which is kind of like optimistic update.
[02:00:25] Show Jacob's text and then show the, don't show an image, but where the images maybe  show like text of Jacob that's sort of in the same style, but not.
[02:00:33] fully rendered.
[02:00:36] But you can kind of see that there is really...
[02:00:39] four options here.
[02:00:42] Yeah, I mean, that's why not show the old image with the loading indicator. That's, that's, that's hold that's option two.
[02:00:50] Right.
[02:00:51] Thank you.
[02:00:52] I'm not saying you don't necessarily need an affordance,  but that, I mean...
[02:00:58] Why not actually showing that loading indicator
[02:01:01] may or may not be difficult. I'll get to that in a second. But
[02:01:05] that is a variation on hold essentially,  right?  Like,
[02:01:08] You show both John until then the image comes in.
[02:01:12] I guess, oh, are you talking about tearing?  Show the old image of the loading indicator.  Yeah, I guess the other one is,  I guess I see what you're saying.  You're saying show Jacob,
[02:01:22] but then show the old image with the loading indicators.  I would consider that then...
[02:01:31] That's not hold.  That's,
[02:01:32] essentially placeholder or approximate, it's three or four.
[02:01:37] Yeah.
[02:01:37] Show the old titania.  So that's basically...
[02:01:40] three or four because you're not I guess you're tearing
[02:01:46] Yeah, so you're saying tearing plus an additional loading indicator.
[02:01:54] Okay.
[02:01:55] Maybe that is just one.
[02:02:01] Yeah, I'm going to consider that one.  That one's not bad. There's a lot of places...
[02:02:06] That's a perfect example of where you might say tearing is acceptable, right?
[02:02:11] Right?
[02:02:12] Like,
[02:02:13] Places that I...
[02:02:15] Sometimes with the loading affordance, tearing is fine.  Places that are really awkward for tearing...
[02:02:21] are like let's see if i can find it movies
[02:02:24] app.
[02:02:28] What was it?
[02:02:30] Taste.
[02:02:31] Movies app.
[02:02:34] Um...
[02:02:39] I can't even...
[02:02:40] Or is it taste.js? Was that it?
[02:02:47] you
[02:02:48] This demo, the Angular...
[02:02:51] Yeah.
[02:02:52] Of course, it's down.
[02:02:54] Well, that was short lived. Sorry. I had this in my pocket as my example of tearing and it's I have but I haven't been here for a while.
[02:03:02] None of the other frameworks actually tear in here, I don't think.
[02:03:06] But the...
[02:03:07] The Angular. OK, there it is.
[02:03:09] See, when I change the categories here,
[02:03:12] Go from action to
[02:03:15] This is an example of tearing, right?  I go to adventure.
[02:03:18] it's going to show adventure and then it's going to load the data.
[02:03:21] 3, 2.
[02:03:23] Comedy.
[02:03:25] It's funny because...
[02:03:27] And it's already been preloaded, so I'm not going to see it.  Let's go to history.
[02:03:32] Right.
[02:03:34] Thank you.
[02:03:39] Yeah, I mean, that's the thing. There isn't actually a problem with any of these.
[02:03:44] is what I'm getting at. You might actually want them for different types of situations, right?
[02:03:51] You might say tearing is fine.
[02:03:54] You might say, I want to hold.
[02:03:56] right?
[02:03:57] Um, I, I love hold with loading indicators.  One of my favorite ones, uh,
[02:04:04] like
[02:04:08] Yeah, I wonder if I can actually see holding with a loading indicator in here.
[02:04:15] I think Nux does it too. If I go to here,
[02:04:19] Thank you.
[02:04:21] No.
[02:04:24] Thank you.
[02:04:26] Thank you.
[02:04:27] Thank you.
[02:04:29] Thank you.
[02:04:29] Thank you.
[02:04:32] Hmm. Trying to see if I don't think anyone actually know that the other demos don't do the category thing the same way.
[02:04:46] Thank you.
[02:04:48] That's hold with the loading indicator, I think.  You see that?
[02:04:56] Yeah, see that's holding with the loading indicator.
[02:04:59] As soon as I click on it, the loading indicator goes, and then...
[02:05:04] Um, then it comes in.
[02:05:07] Right. You notice how there's no loading on the actual thing.  Right. And it holds on the current page.
[02:05:14] Yeah.
[02:05:15] Yeah, that's a good example.
[02:05:17] Um...
[02:05:19] Yeah.
[02:05:22] Thank you.
[02:05:29] Oh, yeah. Holding by itself is completely unresponsive. Yeah, yeah.
[02:05:33] Yeah.
[02:05:34] Yeah, yeah. You want it. Holding needs to have a loading affordance. Okay.
[02:05:40] Keep on going.
[02:05:42] Yeah.
[02:05:46] Thank you.
[02:05:49] Thank you.
[02:05:51] See, this example shows holding with an affordance of baiting out the...
[02:05:57] the current text while it's waiting.  It's still on the same page, but then it fades out the current text while it's holding.
[02:06:05] If it's too slow, if it's fast, it does it fast.  But if it's slow, you'll see...
[02:06:09] You'll see it fade out the text while it holds.  Anyways.
[02:06:13] Yeah.
[02:06:15] So where was I going?  Oh, yeah.
[02:06:19] But yeah, what I was trying to say is there isn't a clear answer for every situation.
[02:06:23] Like if there's a lot of input changing often quickly, you might want to tear like a live search box.  If you're coordinating many parts of large portions of the UI, you probably want to hold.  Dropping to placeholders when you've already have content is jarring and having things flying all over the place is disorienting.
[02:06:37] Placecolors are great.
[02:06:39] You know, when it's like initial load, when you were like switching to something and you're like context switching.
[02:06:45] or you know it's going to take a long time.
[02:06:48] Thank you.
[02:06:48] And then approximating isn't always possible.  It's good for mutations, like optimistic mutations, but you can't always do it.
[02:06:54] Right. So,
[02:06:57] It's kind of like this interesting question, right?  Because where I'm getting at is most...
[02:07:03] synchronous frameworks provide synchronous guarantees, but then the second you go in async, you tear and trying to actually
[02:07:13] make a,
[02:07:14] things behave in a different manner is actually hard.
[02:07:19] If you're terror by default,
[02:07:22] the way to implement holding involves
[02:07:25] is challenging, right? Placeholders is not too bad. We talked about that, right? But
[02:07:31] Like,
[02:07:32] You can see this even in a situation
[02:07:35] Like, um...
[02:07:37] like our movies app, but like our image example was good.
[02:07:41] too, right? Because like,
[02:07:45] If we
[02:07:47] -
[02:07:47] If we are changing the state,
[02:07:50] I don't know if I should just draw this in Excalibur off.
[02:07:54] or like we if we need a visual aid for this but like if you have text
[02:08:00] John.
[02:08:02] Right.
[02:08:03] And then you had...
[02:08:06] I don't know, over here.
[02:08:08] John, you know, we'll call this our image. I'll make it
[02:08:12] Red. I don't really care.
[02:08:15] you know,
[02:08:17] And,
[02:08:18] Um,
[02:08:21] Actually, this isn't good to see visually.
[02:08:26] I'm, it's actually easier to see with code, like, because you're like,
[02:08:31] How do you get this to hold for you?
[02:08:35] in this scenario.
[02:08:38] Because...
[02:08:40] I mean...
[02:08:41] Let's see if I did actually put--
[02:08:44] code in here.
[02:08:46] Yeah.
[02:08:48] Thank you.
[02:08:51] Thank you.
[02:08:54] Thank you.
[02:08:55] I'm just gonna make up some syntax here.  You guys don't have to worry about it too much.
[02:08:59] But
[02:09:01] Yeah, I think I'm done with this.  Okay.
[02:09:04] Thank you.
[02:09:06] pretend
[02:09:08] This is you rendering these things together.
[02:09:11] And then you have...
[02:09:13] a signal
[02:09:15] you know, some state for the name, some state for the address, and some state that generates it,
[02:09:20] asyncly generates the image URL, where you're going to load the image from based on that name.  Okay.
[02:09:28] Right?
[02:09:30] How would you hold in this situation? Because
[02:09:33] If someone goes,
[02:09:35] Set name.
[02:09:36] to
[02:09:38] Jacob, right?
[02:09:40] The second you do that,
[02:09:44] Well, you know what ends up happening.  You end up running this effect with the updated name.  The name URL has not had a chance to thing,  so it returns probably the previous value.
[02:09:54] Like,
[02:09:55] How do you hold...
[02:09:57] name so that it doesn't get up because you need name to trigger to generate
[02:10:03] The new image.
[02:10:05] Bye.
[02:10:06] Hmm.
[02:10:08] Like, you need name...
[02:10:11] Like, what if I have a second effect over here that's just create effect?
[02:10:18] Console.log name.
[02:10:21] How could I ever stop this from running?
[02:10:28] Do I even want to?  Like...
[02:10:31] If I actually update name,
[02:10:35] it needs to
[02:10:37] No.
[02:10:39] to run these things. It has to run this.
[02:10:43] right other or sorry it doesn't have to run this it has to run this
[02:10:46] It has to run this.
[02:10:48] To even know...
[02:10:50] that it can generate the next image.  But if it's run that,
[02:10:54] Like, is it too late?
[02:10:56] Mm-hmm.
[02:10:57] Like the reason because...
[02:10:59] This effect has nothing to do with this effect.
[02:11:05] Thank you.
[02:11:12] Right.
[02:11:15] Thank you.
[02:11:15] Like, I don't know.
[02:11:19] It's fine. Losing some viewers here, it's fine. But like,
[02:11:23] Just...
[02:11:24] Think about...
[02:11:26] You have to...
[02:11:28] update something to trigger something,
[02:11:30] but that trigger is going to affect other things. Now you could say don't run any of the effects,
[02:11:37] as a way of holding,
[02:11:38] But how do you show the loading indicator
[02:11:42] if you don't run any effects.
[02:11:52] Right. I mean, we can make excuses for ourselves, but these are also trivial examples. I'm picturing examples where this is non-trivial, right?
[02:12:00] Like,
[02:12:01] There is...
[02:12:03] There is something very awkward here, right?  Like we can obviously...
[02:12:07] we can obviously like,
[02:12:10] use suspense and be like,
[02:12:13] Don't show it out of...
[02:12:15] So update the name right away. This is tearing, but trying to actually implement holding, you know what the answer is?
[02:12:22] This is how you implement holding.
[02:12:27] Thank you.
[02:12:36] .
[02:12:37] essentially.
[02:12:43] I'm going to assume that this is fixed, right?
[02:12:46] Okay.
[02:13:03] I think, is this right?
[02:13:06] Yeah, yeah, yeah. This is how you do it.
[02:13:09] Right?
[02:13:10] And then you set...
[02:13:13] Named Jacob.
[02:13:15] And then...
[02:13:19] Maybe, I mean, let's do this.
[02:13:27] Thank you.
[02:13:30] I'm trying to think of like, I'm just making this up right now.  Cause it's like, I'm picturing what the system would be like.
[02:13:36] But you'd almost have to be like...
[02:13:40] Thank you.
[02:13:42] Whenever name...
[02:13:44] image URL changes
[02:13:47] Thank you.
[02:13:48] Set display name.
[02:13:51] to
[02:13:53] Name.
[02:13:54] Or something like...
[02:13:56] But maybe like...
[02:13:59] on track.
[02:14:00] Name or something.
[02:14:02] Okay.
[02:14:04] I,
[02:14:05] This is essentially what you'd have to do.
[02:14:08] if you wanted to implement holding.
[02:14:11] Right. You essentially have to create a second signal.
[02:14:16] to show that and have that one update independently
[02:14:21] of the one that triggers
[02:14:23] the fork of the stuff.  And then when it finishes,  then update the state that you're displaying to match it.
[02:14:35] Right. But I mean, it's not even enough to do that. Like, do you understand? Like,
[02:14:42] This is such a simple case because it's flat.
[02:14:46] And you know exactly, but every possible signal or...
[02:14:50] derivation along that path
[02:14:53] is going to basically, you're going to have to make your own copy of it.
[02:14:57] I guess it's source state. So it's all the source states that could be impacted along the line into async data would have to be copied.
[02:15:05] Yeah, and people do this all the time, to be fair.
[02:15:12] I mean, I would like to compute it, but it's hard.  It needs to synchronize with...
[02:15:17] with this, right, which is the only reason I used an effect.
[02:15:21] like,
[02:15:22] Technically...
[02:15:25] Yeah. OK. Yeah. Can we write this as a memo?
[02:15:31] Um,
[02:15:34] It's like...
[02:15:36] Thank you.
[02:15:40] Uh...
[02:15:42] Like maybe something like this would work and then make this const
[02:15:47] display,
[02:15:49] Name. Yeah, I like that better.
[02:15:52] And then...
[02:15:56] We just have to set the initial value to
[02:16:00] John.
[02:16:02] or something like that.
[02:16:06] Something like this.
[02:16:09] And then this actually has to get hoisted.
[02:16:12] above here so the reference works.
[02:16:16] Okay, slightly better.
[02:16:18] Same problem, though.
[02:16:26] Thank you.
[02:16:27] Some parts of the app might want the held version,  some might want the fresh data.
[02:16:31] Yeah.
[02:16:32] Yeah.
[02:16:33] But like...
[02:16:36] This is like literally dealing with one async thing.  Picture if you had multiple async things.  Picture if they were hierarchical, how much forking of state you would have to do.
[02:16:53] I mean, you could do nested, create a fact, sure. But like when I'm kind of,
[02:16:58] like does that simplify writing the logic at all here?
[02:17:03] Maybe, but it doesn't remove the need
[02:17:07] For the state, I don't think.  And like some things are nested. Sometimes they're two different places  in the display. Like,
[02:17:13] Like this, this, this is my fictional create render effect of you displaying something on the screen, right?
[02:17:18] Like these are, I use console logs here, but like these are basically render effects.
[02:17:24] Streams in RxJS solve this. Nope.
[02:17:27] I mean...
[02:17:30] But you still in the end have to deal with the synchronization of state, which RxJS does not solve.
[02:17:36] through, right?  Like it's good at handling transforms.
[02:17:40] But like...
[02:17:42] Bye.
[02:17:43] At a certain point,
[02:17:45] If you want to...  I just...
[02:17:48] wanted to kind of put it out there. What if you actually tried
[02:17:51] to...
[02:17:53] to get this holding behavior yourself.
[02:17:56] This is the most basic way of doing it, right?
[02:18:01] If I didn't use create async,
[02:18:03] it actually might even be easier.  That's why derivations look good.  But if we use create effect, we could also...
[02:18:10] like if we were using create effect, the generator image, we could set both.
[02:18:14] um signals at the same time right if we weren't using derivation like we could be like
[02:18:19] We could be like...
[02:18:21] generate image URL and get image URL and then go set,
[02:18:25] image that set, um,
[02:18:30] display name that that's that's generally how you do it the
[02:18:33] You, you,
[02:18:36] I generally don't recommend doing writes inside something that is quote pure,  but if you were using effects to do the fetching,  you would just have two signals that you'd set.
[02:18:52] Right, and choose a name.  But I'm saying this is like the simplest case.
[02:18:57] Right. So to speak. And I would I was trying to suggest that.
[02:19:02] is
[02:19:04] What if...
[02:19:05] what I started with just worked that way.
[02:19:10] without you having to manually duplicate the state.
[02:19:15] Right?
[02:19:17] Like,
[02:19:19] Thank you.
[02:19:20] This is like one piece of state that you'd have to duplicate.
[02:19:26] What if there was...
[02:19:28] dozens.
[02:19:30] like keeping display versions of everything.  Like this is like a mechanical problem.  Like this is not...
[02:19:37] your intention being displayed on the app. This is like mechanically solving for stuff, using  signals as counters to keep track of references, like that level of solution. What's great about  signals and stuff is that creating these kind of solutions allow is easier to do because it doesn't  tap into the react render cycle, which is incredibly inefficient if you're just doing all these crazy  little state rights. But it's not the ideal place you want to be. Ideally, you want to just be like,  look, here's my data that's derived from this. And this is what I want to display consistently.
[02:20:08] Right?
[02:20:11] Create transaction, yeah, we're getting there. Yeah. Yeah. Yeah.
[02:20:15] Um,
[02:20:17] All right.
[02:20:19] Yeah, so...
[02:20:25] Thank you.
[02:20:27] Thank you.
[02:20:34] So what do I have here?  Return our example, which is already displaying the name  John and an image of it.  If we independently update the name or address,  it would be fine for those changes  to come in independently, yes.  But we'd expect the case of the name to show John  until we can display Jacob.  You know, if we're trying to hold, we can do that.
[02:20:50] We can show an affordance for loading, which we talked about,
[02:20:55] Thank you.
[02:20:56] If we change the name and change the address, we accept that the address change appeared before the name change if they did not feel connected processes.
[02:21:05] Yeah, no more than a ticking clock.  Because, I mean, I think you start seeing the problem here is because if you actually...
[02:21:12] Had.
[02:21:14] to
[02:21:15] block
[02:21:17] all the effects.
[02:21:21] you know, like my previous example,
[02:21:24] Yeah, OK, sorry, I've jumped around a bit.  I'll help clarify.  This is how you would manually implement it, right?
[02:21:30] What I originally wrote...
[02:21:35] Thank you.
[02:21:37] Yeah. OK. Sorry, I'm just going to continue here.
[02:21:44] What?
[02:21:45] All I was trying to suggest is that
[02:21:49] in this part here is that if the address was related to the name and you click save at the same time, you might expect them all to come in at the same time again.
[02:21:57] I was trying to basically my assumption here is it's the process that defines the dependence between things.
[02:22:04] not necessarily the dependency graph,
[02:22:07] And, uh,
[02:22:09] Yeah, not necessarily the dependency graph because...
[02:22:13] obviously, like if you have multiple effects,  obviously a single effect that's showing something inconsistent can't be allowed to show it.
[02:22:21] But,
[02:22:23] if for any group of changes
[02:22:26] that you expect to come together.
[02:22:28] If any of the effects show, you're going to potentially have
[02:22:32] tearing, which is what I was showing before. And if you didn't want tearing, then you're
[02:22:36] that grouping isn't enough to only look at the dependencies,  or which effects put stuff together, you basically would have to look at
[02:22:45] Every year.
[02:22:46] downstream change from that single update process.
[02:22:51] Thank you.
[02:22:52] Thank you.
[02:22:54] Thank you.
[02:22:57] I would be having to read a signal in an effects scope just to tell it the need to wait for it rather than duplicating states.  Yeah.  But it's not, you understand it's not, it's not.
[02:23:06] Without duplication, how do you
[02:23:10] Show.
[02:23:11] show something and be calculating the next thing at the same time.
[02:23:17] Thank you.
[02:23:18] Right?
[02:23:19] I mean, that's kind of what the problem is, right?  Because if you don't,
[02:23:26] Thank you.
[02:23:28] Yeah.
[02:23:32] Thank you.
[02:23:36] Thank you.
[02:23:36] Right? Because like, like consider, yeah, sorry, this is what I was trying to show this example.  Consider if these two things are independent, like the name and the address had nothing to do  with each other with this code example, okay? Now,
[02:23:48] Someone set name.
[02:23:49] We're back to only having a single thing.  If someone set name...
[02:23:53] And it's off, you know, generating the name.  And then someone sets address.
[02:23:57] If these were two separate
[02:24:00] things.
[02:24:01] You'd be fine if,
[02:24:03] having the console log,
[02:24:04] Kind of go like this, like,
[02:24:06] John.
[02:24:08] with the updated address.
[02:24:10] still showing John's current user URL.  And then when Jacob comes in,  show Jacob new address and Jacob,
[02:24:20] and Jacob's URL.
[02:24:21] So you still kind of want the address to update.
[02:24:25] even though you're waiting on...
[02:24:27] the name right and even though they're in the same effect
[02:24:36] Like,
[02:24:37] You might want that to happen.
[02:24:42] Bye.
[02:24:43] Conceptually, I'm hoping people are following.  I understand this is complicated.  I'm just trying to suggest that
[02:24:49] the grouping of effects might happen automatically because of where something is in the JSX or, you know, some kind of other consequence.  But things...
[02:25:00] The update together separately might not at all be related to how you actually want to display or do side effects on them.
[02:25:10] And if we simply just block all the effects to get our holding,
[02:25:15] then nothing updates.
[02:25:18] right obviously if it's in the same effect it's obvious that it doesn't update but
[02:25:23] Nothing updates if we block all effects.
[02:25:31] Thank you.
[02:25:36] Thank you.
[02:25:39] Yeah, I mean, I keep on going on here. I don't know how deep I want to get into this.
[02:25:42] But like I started talking about hierarchical because we've established that dependencies aren't sufficient.  It's process.  I was thinking like, what about children?  Like, you know, tab A and tab B.
[02:25:51] Right.
[02:25:53] It's it's you have the same problem again.  You're showing tab a.
[02:25:57] You click on tab B.
[02:26:00] you got to still show tab a,
[02:26:03] Well, I
[02:26:04] B's loading if you want to hold.
[02:26:08] And the problem is if there's something interesting,
[02:26:10] updating on tab a you can't just unmount it you even if you
[02:26:15] you can't shut it off and even in memory,  do you know what I mean?  Like if,  if you've ever seen something like a,
[02:26:22] like solids create memo or something. If you create something nested, like a nested effect, the second
[02:26:29] that
[02:26:30] the outer effect runs, the internal effect is going to get thrown away. Maybe you haven't
[02:26:37] rendered
[02:26:38] the new thing in the DOM yet, but you've released the memory because now you're taking the other branch, you're taking the other condition.
[02:26:44] And
[02:26:46] But...
[02:26:47] In this world where we're trying to hold, it's quite possible that things need to still update.
[02:26:54] even though they're below the point at which we've forked.
[02:26:59] Trying to do that manually
[02:27:01] this way,
[02:27:03] is
[02:27:04] basically impossible.
[02:27:07] It's not you have to hoist all the state data up to where the decision point is, like where the route is, where the tab switch is.
[02:27:14] in order to do it. You maybe use context or something. But the problem is,
[02:27:18] The second you...
[02:27:20] - Yeah.
[02:27:21] like,
[02:27:23] It...
[02:27:24] The second you switch to the new page, you have to not...
[02:27:29] Any decision, like you have to not release the current page.  It's not enough just not to show it.
[02:27:34] but you actually have to not release it, which means that
[02:27:38] and
[02:27:39] It can't be running...
[02:27:41] the same code path, every control flow,
[02:27:45] Fork decision has to keep both copies.
[02:27:49] of it if you want it to stay live.
[02:27:56] Right?
[02:27:58] You know, I'm trying to think of how to show this, but like,
[02:28:00] Create...
[02:28:02] Memo.
[02:28:04] simplest version count.
[02:28:08] Bigger or...
[02:28:11] Tab.
[02:28:13] equals...
[02:28:15] Thank you.
[02:28:16] Eich.
[02:28:18] Thank you.
[02:28:20] A...
[02:28:23] otherwise B, okay?
[02:28:25] Simple as I can, you know, we can make this example. When tab changes,
[02:28:33] between A and B, like
[02:28:35] You could say visible tab,  you know,  we could play that game,  but you need to duplicate all the logic because the,
[02:28:42] What if the fetching happens or the async thing happens below the fold?
[02:28:48] You have to hoist it up, I guess, is the other possibility.  Because...
[02:28:52] It's not going to run...
[02:28:55] Tab B.
[02:28:56] until you change this. And the second you change this, you are releasing tab A.
[02:29:03] right because when you rerun the memo
[02:29:06] This gets garbage collected.
[02:29:12] Right?
[02:29:18] Yes, yes. This is where I'm trying to get at here. So because we talk, we always talk about suspense.
[02:29:24] But it's important to understand that suspense is only one of the three modes.
[02:29:28] suspense impacts the other stuff with the transitions.  But I think it's important to understand that like,
[02:29:34] Thank you.
[02:29:35] Trying to...
[02:29:37] you basically have two options.  You either hoist or
[02:29:42] all the state up, like when you have to deal with it hierarchically,
[02:29:46] or you come up with a means where every decision points aware of the fact that it can hold both  decisions. This is kind of beyond what I think, you know, between duplicating states and stuff that end users
[02:30:00] You can build your architecture that way.
[02:30:02] Definitely.
[02:30:03] But you start seeing that, like, if you've ever been down this road,
[02:30:07] I mean, I think you just...
[02:30:08] Give up on holding being an option.
[02:30:10] generally speaking.
[02:30:14] Right. You accept a certain amount of tearing. And maybe that is the wise thing to do.
[02:30:19] But like, it is not easy to
[02:30:22] to
[02:30:22] avoid to do holding
[02:30:25] without having a framework
[02:30:28] Yeah.
[02:30:29] known mechanism in place.
[02:30:32] Okay.
[02:30:36] Right.  So...
[02:30:39] All...
[02:30:40] I'm trying to get to with this part of the discussion here is that like
[02:30:45] this is why there are transitions or transactions or whatever in
[02:30:50] in, in,
[02:30:52] in the suspense frameworks is because once you commit
[02:30:56] to being consistent.
[02:30:58] While suspense is a great tool to hide stuff,
[02:31:03] It's too jarring.  Most people want suspense initially so that they can like,
[02:31:08] show some placeholders, but they don't want it to keep on triggering over and over again.
[02:31:13] when stuff changes. But if you want to keep that consistency,
[02:31:16] you're going to either have to have controlled tearing
[02:31:19] or you're going to have to hold. And holding is very hard to do hierarchically.
[02:31:25] which is a large part of the design decisions behind suspense. Okay.
[02:31:28] Anyways, let's continue here.
[02:31:34] Thank you.
[02:31:36] Thank you.
[02:31:38] Okay.
[02:31:39] you
[02:31:43] Mm-mm-mm-mm-mm-mm.
[02:31:47] See, what did I end on this? Yeah, I was just saying.
[02:31:50] Yeah.
[02:31:52] Thank you.
[02:31:53] I think my last point was...
[02:31:57] Yeah.
[02:31:58] I don't even know. Is there any interest in this part of the topic? I was, it's just that this is a big ask.
[02:32:05] I'm recognizing from,  for people because I,
[02:32:09] My last real understanding with this model kind of came in is that if transactions are essential,
[02:32:15] as a way of doing it.
[02:32:17] it's awkward that you'd have to wrap every setter with a transaction if you  didn't want it to,  you know,  fall back,  you know,  if you didn't want it,  if you wanted.  So like,  could,  is there a way to,
[02:32:27] we can have implicit transactions, but because
[02:32:31] of the way that I was telling you everything's tied to process.
[02:32:35] it's hard to actually have implicit transaction.  It's kind of like a decision you make by the actions that you do in your application, right?  Whether things are connected together or not defines whether it's a transaction
[02:32:48] would need a transaction or transition. It's not the grouping of effects that decides that,  or the dependency graph, it's actually the processes you do in your app.
[02:33:01] Thank you.
[02:33:05] Thank you.
[02:33:07] So, yeah.
[02:33:09] Thank you.
[02:33:12] Yeah, sorry, I just want to read my conclusion.  It's nearly impossible to automate transactional boundaries.  There's tension between responsiveness, especially of inputs,  and this desires to have everything apply at once.  Yeah, that's the other thing.
[02:33:23] There's times you need tearing. So, you know, you want to be able to, you know, not freeze your input because it has some async dependency downstream.
[02:33:34] What things go together goes beyond dependencies. It probably needs to be explicit. Concurrency seems unavoidable. It'd be great to keep things simple, but pairing is difficult to avoid and blocking is untenable in many situations because both of those facts, it seems like we're stuck on explicit transaction model if we want to have tools in this area. Okay.
[02:33:52] That was my conclusion here.
[02:33:54] And that's essentially like...
[02:33:59] what, where like react sits, right? Um,
[02:34:04] Thank you.
[02:34:05] How I got here from when I was talking about scheduling is that,
[02:34:08] In order to do transactions, you need to be able to pause and
[02:34:14] stuff or basically run the pure part of calculations multiple times without doing any side effects.
[02:34:21] Right.
[02:34:22] if you've got to be able to test it, you got to be able to run the data, hit the async, pause it,  and be able to resolve all that stuff without the side effects impacting
[02:34:31] And you can't do that if your rendering is all
[02:34:36] freaking weaved together happening at
[02:34:39] Sorry, that's a good example, but like happening at random times in the cycle, you know, you get this far and go, oh, crap, that's where my async dependency is.
[02:34:49] I like you don't you don't get to do that if the first time you understand that you need something async is when you're already in the effects queue.
[02:35:03] Thank you.
[02:35:04] Right. Yeah, I mean, I guess this is part of the challenge here because people...
[02:35:08] I get this over and over again.  People don't know how to use  suspensor transactions.  So when we go to build stuff,
[02:35:15] everyone's like, oh, you know, I would just do it this way. But like,
[02:35:20] There's...
[02:35:21] You can accomplish...
[02:35:24] Well, this is what this next article is.
[02:35:28] not not a real life example but i have better examples here i was trying to get the heavy  theoretical stuff here because i was like okay
[02:35:37] What if we tried to just...
[02:35:41] do...
[02:35:43] the different models ourselves. I showed you how hard it is to do holding when you're in a current framework with that tears generally. But what if we started the other way? What if we started where holding was the default behavior?
[02:35:57] When you hit async,
[02:35:59] And how would you make it do all three things, placeholder, tear, you know, whatever?
[02:36:04] So that's here. So let's start with something simple.
[02:36:07] You get a post based on, like, I don't know, the route ID.
[02:36:11] And then you have a nav that shows the selected
[02:36:14] Post.
[02:36:15] And then you show the post title and the post body.
[02:36:19] Now, if you're not going to do that, you're going to do that.
[02:36:22] If you notice one little detail, there's no null check on the post here.
[02:36:26] because
[02:36:27] I'm assuming...
[02:36:29] a holding model so with a holding model
[02:36:32] it's possible to basically...
[02:36:35] When we get here,
[02:36:37] Thank you.
[02:36:38] And when we get here,
[02:36:40] to just pause it. You get here and we can throw. I don't mean throw the component. This is solid.  It's fine grained. We'll just throw this one little binding and we'll just throw this one  little binding. And then when this finishes, we'll finish our rendering.
[02:36:54] Okay.
[02:36:55] So that's the thing here.  Basically non-nullable async data because...
[02:37:02] Because of...
[02:37:03] being able to hold essentially you never have to check if the data is there  it will always be there right this is what i've been
[02:37:10] talking about a lot the last like in my singles 2.0 stream.
[02:37:18] Thank you.
[02:37:20] I mean, my HackMDs, I'm hoping, eventually have the right content.  I don't think this stuff is digestible by people.  Otherwise, I'd be publishing this stuff on Dev2 or whatever.  I think it still needs more explanation.  For me to get this to a Dev2 article would take me about...
[02:37:35] a week's worth of work per, you know, I think both of these might be my sequel to derivations  and reactivity article. I just don't have time right now. And I know it's funny, I'm not wasting,  but like spending time explaining this to people on stream. I mean, this also helps me talk it  through. I feel like the first time you write something, you have an idea. The second time  when you try and teach someone, you learn the second stage. So you guys participate in chat  is really great.
[02:38:02] Yes, yes. I, I just, I don't like the term transition. It's overloaded. So I, when I talk about react, I'll call them transitions and we have them solved today, but I am, I am, I'm generalizing it as transactions as a term.
[02:38:18] but like, let's pretend this is what you could do.  You could literally just write some async data  and it'd be non-nullable  because you know that it will just,
[02:38:28] block,
[02:38:29] fine-grained where you need it.
[02:38:31] Okay.
[02:38:32] Now,
[02:38:34] If we were consistent by default upon running this page, we'd show nothing until the posts are available.  If you think about it, if we were like truly consistent as our default, we'd be like,
[02:38:43] we'd have a blank screen until the posts loaded because we wouldn't run any of the effects.
[02:38:49] right and this is kind of consistent with how react server components handle
[02:38:54] when you have no suspense on the server, it just waits until you render everything.  And then it ships all the HTML.
[02:39:00] Right.
[02:39:01] This is one of the challenges I actually had, side note, with Solid, was that our client model is tear by default. And so it's very difficult for us to change our server model to be hold by default. But I kind of like that about how React server components actually hold...
[02:39:17] our SSR now kind of holds by default, just as a side note.
[02:39:22] But essentially, if this is a client app, I'm not talking about SSR right now.  If this is a client app, you'd literally render nothing until the data loaded.
[02:39:31] Um,
[02:39:32] Thank you.
[02:39:33] Now, we could...
[02:39:35] obviously show the nav earlier than that.
[02:39:39] and a loading state. So that's what suspense is for, right? So you just go in here and go, okay,  I'm going to wrap this with suspense. And now I can show the net of the second I load the page,  show the loading post. And then when the data comes in, it comes in, right? This is what  suspense is for, right? So I'm just saying if we had a fictional framework,
[02:39:57] where no suspense meant we don't render anything until async resolved.
[02:40:02] This is kind of what my mental experiment is, right?
[02:40:07] I think this would be confusing as hell because people would come and render stuff and they'd add something async and then like everything would hold up on them and they'd be just like, what is going on here? But if you could change the norm of expectation.
[02:40:19] Like this would be,  this is what this mental exercise is.
[02:40:29] Thank you.
[02:40:29] Yeah, no, I see the argument for this.
[02:40:33] I don't know what that demo example would be, to be fair.  I haven't built...
[02:40:39] a real world app in about four or five years, which sounds terrible, but it's true.
[02:40:45] I spent the first 20 years of my career building apps or websites of dynamic nature.  I'll call them apps. But then the last five years, I haven't done almost zero. So it's like,
[02:40:59] It's, yeah.
[02:41:09] Yes, exactly. This is what I'm saying in terms of a
[02:41:13] Yeah.
[02:41:19] .
[02:41:20] Yeah, yeah, yeah. The funniest thing is, like...
[02:41:24] Yeah, it...
[02:41:28] The challenge with that is, I honestly think for me to switch around to get into that mode,
[02:41:34] it would take me a couple weeks of effort.
[02:41:39] to find the right example and then actually try and build it out.  I remember I was making the real world demo, which isn't even real world.
[02:41:48] And a while ago with Solid, and I like using that, even that's a big demo. I like using
[02:41:54] different demos as a way of testing
[02:41:56] those kind of ideas.
[02:41:58] But like...
[02:42:00] Yeah.
[02:42:01] No, it's interesting.  I suspect...
[02:42:05] that I just literally don't have the time to do it.
[02:42:09] But
[02:42:11] Yeah, it's interesting. Unless like it was a real long draw. Like I spent like I did it to my stream time and I did it over the course of like a couple months.
[02:42:18] like piece by piece.
[02:42:21] Because like...
[02:42:22] It's funny, like when I'm working on solid, like I just got a solid release out today and I've been working on it the last two days.
[02:42:27] I have a hard time even being able to like,
[02:42:31] switch context and work on a specific library in the solid ecosystem or,  you know, solid start or whatever.  And, and then like go to the next one, because like,
[02:42:40] If I drop anything too long, the bugs start stacking up and, you know,
[02:42:44] unhappy developers wanting, you know,
[02:42:48] help and whatever, you know, different situations. So it's like, it's very difficult to actually
[02:42:55] not just be jumping from specific narrow focus thing to specific narrow focus thing.
[02:43:00] The reason I'm in here is I'm literally working on Sol 2.0.
[02:43:03] reactive system, right? Whereas like,
[02:43:08] Yeah, I almost...
[02:43:10] Yeah, all my work is like,
[02:43:11] in these very focused little chunks.
[02:43:17] Thank you.
[02:43:18] I am kind of hoping...
[02:43:21] It helped, I sometimes go on other people's streams,
[02:43:26] and do stuff where they're building something real and maybe then I can help them or something like that.  It's very hard for me to...
[02:43:33] have like something that I actually want to build to actually do unless it's like, again, a technical demo and then it's very small, right? Like,
[02:43:41] Like,
[02:43:42] Yeah.
[02:43:56] Thank you.
[02:43:59] I'm not familiar with that issue. Submit a bug if there's a bug.
[02:44:05] 1.8 is a really recent release.  1.8 has been out for like six months.  I'm not familiar with this.
[02:44:16] I guess so. But I mean, on the other hand, yeah, I mean, it's just it's pretty challenging to find.
[02:44:24] to
[02:44:25] like to do find time to do things more ambitious than like a hacker news or that kind of stuff um
[02:44:35] Yeah.
[02:44:38] It's easy. I'd rather help someone build a real project that they want and are able to do. The challenge, obviously, with that is...
[02:44:48] Um,
[02:44:51] A lot of those are private and then the results don't get shared anywhere.
[02:44:57] I don't know.
[02:44:59] I mean, it's interesting. I'm not...
[02:45:01] sure if the stream is perfect for it. Would people want to see, I mean,  it might be worth putting up the polls on fine.  People want to see like, see like several, uh,
[02:45:10] Like the problem is I actually...
[02:45:12] use a stream for me too like
[02:45:14] That's like lost time.  I mean, it's probably fine, but like...
[02:45:19] would people want to see an ongoing project over several weeks being built?
[02:45:25] Okay. Anyway, getting back to where I was going here.
[02:45:34] Thank you.
[02:45:35] If we were consistent by default,
[02:45:39] Random picture not showing anything. Okay. Okay. So where I was getting at here is you show suspense. It does what you want.
[02:45:45] Right, via PlaySoy.
[02:45:47] The other way to show now right away would be opting into tearing. Okay.
[02:45:52] And the way you'd opt into Taring, I don't have an exact syntax, but you've used this in create resource dot latest or whatever.
[02:45:58] If you could basically...
[02:46:00] Put latest on it.
[02:46:02] then it should be possible to opt into tearing because then it's not going to trigger suspense.
[02:46:09] Um,
[02:46:10] presumably, and then you should be able to just get the latest value. But you notice that these  null checks now are here because technically, to get the latest value includes undefined,  I think, which means that there is a state, a period where it's not
[02:46:23] Available and you'd be just showing empty H ones and peas, but to be fair, I
[02:46:28] I doubt anyone would try and show an empty header.
[02:46:31] when they're waiting for the data, if they want to opt into tearing,
[02:46:34] I mean, obviously you can set default value on our create async and then you don't have to null check. But I think more than likely what you would do is you'd actually show a placeholder anyways, right? It's not even real tearing, you know, you could just go show latest post.
[02:46:49] And then...
[02:46:50] Use the type narrowed version of this and...
[02:46:54] we're kind of back in business.  But the thing I want to note here  is the similarity between show  when latest posts fall back
[02:47:02] this type narrowed
[02:47:04] And,
[02:47:05] our suspense version.
[02:47:07] Are suspense version basically the same structure, just way cleaner and you didn't have to worry about
[02:47:14] the null checking and all that in this
[02:47:18] future
[02:47:20] framework, you know, kind of zone that I'm talking about.
[02:47:26] Thank you.
[02:47:29] Thank you.
[02:47:34] Yeah.
[02:47:35] Also, side note, I think I am probably the worst person to actually do this. I think
[02:47:41] I think there's people on the solid team who built way more,
[02:47:45] They've done way better sites and work on this.  Especially on the DX team, people who build the solid docs team.  They're actually all better...
[02:47:53] equipped to actually show something, you know,
[02:47:57] Truthfully,
[02:48:00] People who are good at making videos, I'm not one of those.
[02:48:04] Mm-hmm.
[02:48:11] Solid two win. Well, we're getting there. Okay, so let's talk about this a little bit more so
[02:48:16] Okay.
[02:48:20] Thank you.
[02:48:22] Okay, so this is just initial render.
[02:48:25] and showing how you could do tearing, how you could do a placeholder, how you could maybe
[02:48:30] this would like what holding could look like, right?
[02:48:34] How about taking our same example and updating, right?
[02:48:38] Well, if it was a...
[02:48:40] purely consistent model
[02:48:42] then when we update, change the route, go to post ID 2,
[02:48:48] You know, we just wouldn't show...
[02:48:50] The nav, everything would basically, all the effects would basically be held.  And then once the async finished, it would go and then it would update the nav, and then
[02:49:00] you know, whatever the nav is, and then it show the data, right?
[02:49:03] Each of H1P would be notified the post possible change and they would hold effects until the post is available.
[02:49:09] this would mean that nav would not be able to render basically
[02:49:13] It's almost like you have like an invisible suspense wrapping your whole lap.  I think if you went like a consistent first kind of scenario, it's not quite the same as suspense, but.
[02:49:23] Essentially something collecting and holding the effects.
[02:49:27] Again, if we have suspense,
[02:49:30] As we change the ID, we just
[02:49:32] unmount, render the new things.
[02:49:34] you know,
[02:49:35] The funny thing is with suspense here is it doesn't even...
[02:49:39] necessarily.
[02:49:40] render new things, it just
[02:49:42] detaches these nodes
[02:49:44] And then...
[02:49:46] And then when the text changes, it reattaches the nodes.
[02:49:51] the way like we don't actually do re-rendering and suspense on the client like it's it's actually  in this case i think it would actually just
[02:49:57] Right.
[02:49:59] Okay.
[02:50:00] And then our tearing solution,
[02:50:04] would actually...
[02:50:06] show the updated ID right away, and then it would show the old stuff until the new stuff loaded. Right?
[02:50:15] So you wouldn't really like, obviously what I'm trying to get up, get with with the tearing examples.
[02:50:21] If you wanted a placeholder,
[02:50:24] You'd probably just use suspense and not bother with this.  Where is it?  I'm trying to find it.  Show component that I showed here.  Like you wouldn't bother with this.  If you actually wanted tearing, you would do this.  And then.
[02:50:34] It would...
[02:50:36] It would just do its thing.
[02:50:39] I think...
[02:50:41] latest as an API is awkward.  This is a whole other tangent,  but I think there's some challenges there.  I don't think you guys care about those challenges just yet.  If you're really interested in, you can read the article.  Let's continue though.  Okay.
[02:50:53] it was just kind of noting that,
[02:50:56] In general,
[02:50:58] Um,
[02:50:59] It's important to note in this example,
[02:51:02] that,
[02:51:03] if we had a downstream component that we were rendering here,
[02:51:09] Um,
[02:51:11] you
[02:51:11] like let's say this is a post page and then we rendered a post component in here,  they wouldn't expect post to ever be null, right?  You could basically build components that are expecting,  synchronously expecting that the post data was there, right?  Like post accepts post.
[02:51:29] And then...
[02:51:30] If it was...
[02:51:33] Where is it? Sorry, I scrolled too far.
[02:51:38] Thank you.
[02:51:39] If you read the async thing directly, since it's non-nullable, there'd be a guarantee that post would be there.  Or if you grab the latest using latest API, it could be null, which means that you have to actually give it a default value.  It's kind of an interesting...
[02:51:55] kind of thought that it might be possible with, you know,
[02:52:00] to have TypeScript
[02:52:01] help you in these situations where you,
[02:52:04] Basically, people can author...
[02:52:08] simple components that aren't aware of async.
[02:52:10] that are non-nullable.
[02:52:12] And then at the point of passing them props, you can still pass them something that will pass.
[02:52:17] resolve.
[02:52:18] you know, like this async,
[02:52:22] resource, something that is non nullable because of the blocking nature of the system, or be able to grab the latest value and because of it being nullable,
[02:52:32] you know, force it to default.  And like, if you just tried the past post out latest to it  or latest wrap post, I haven't signed on the API on it,  whatever, then because it could be null,
[02:52:42] you get a TypeScript error.
[02:52:45] Anyway.
[02:52:51] uh
[02:52:52] Thank you.
[02:52:53] Yeah, I mean, the way Solid Start works right now  is you have to put a suspense boundary in above the highest async.  So everything in the outside the suspense boundary  flushes immediately, synchronously.
[02:53:05] If suspense boundary suspends, then we send that on the next stream thing.  And hierarchically, any suspense boundary below will just either come in together or as its data resolves.
[02:53:16] But our main mode right now for solid start and all solid rendering generally is that outside the first suspense boundary has to be synchronous.
[02:53:25] and we'll send that response
[02:53:27] pretty much right away.
[02:53:31] Unless...
[02:53:34] Thank you.
[02:53:34] while rendering into the suspense boundary.
[02:53:37] we hit resources that are like defer the stream.
[02:53:40] And then we'll wait.
[02:53:42] from sending the stream until those ones have resolved.
[02:53:47] Because even when we...
[02:53:49] walk into suspense. It's still like
[02:53:51] we do the whole first pass synchronously. So we do walk in and find all the,
[02:53:57] everything as far as we can. So we do know
[02:54:00] if we hit resources that need to be deferred and that need to hold the stream it's just our default
[02:54:06] We need suspense in order to do that the way we are today.
[02:54:13] um not really because post.latest or post you almost kind of do it the other way around because if you
[02:54:21] I guess you could. Yeah, fair enough. You can.
[02:54:24] That way, that would be how you would do something that suspends only the first time.
[02:54:31] Right?
[02:54:32] Because you would essentially read the latest.  It'd be undefined.  Then...
[02:54:37] you would
[02:54:38] read from posts which would suspend. And then the next time around,
[02:54:42] when it updates, post.latest will have a value and then it won't read post and won't suspend.  So yeah, that would be the trick if you wanted to
[02:54:49] have something that would
[02:54:51] suspend the first time and then
[02:54:54] uh,
[02:54:55] basically
[02:54:56] Um...
[02:54:59] tear after the fact.  That's probably a really good pattern  for a lot of people, actually,  now that you mention it.
[02:55:06] Well, the reason, well, because if you, solid today is as if almost as if latest was the default. It's not quite true, which I'll get to a bit later here, but it's the, we have to null check everything because we don't block.
[02:55:22] even fine-grained.  If you hit...
[02:55:27] post dot title and posted null, like that's going to throw.  It's going to error because post isn't there the way solid is today.  We don't have like a throwing suspense mechanism.
[02:55:37] So,
[02:55:38] Generally,
[02:55:40] you're going to have to provide initial value
[02:55:45] when you
[02:55:46] intend to use latest,
[02:55:48] because
[02:55:49] Or, you know,
[02:55:50] someone has to provide an initial value along the lines because
[02:55:55] that latest value before any data has ever been resolved  is going to be undefined, right?  There's the time to get the first data.
[02:56:04] Right.
[02:56:05] Whereas if you have a blocking system, like I'm talking about with Create Async here, where you're not opting out into the latest.
[02:56:12] you know because the way it runs that it will always have a value um but
[02:56:17] it's, you know, it's one way or the other, right? Either you
[02:56:21] you wait for there to be a value and it's blocking or you grab the latest and it's not blocking but  it's possibly undefined.
[02:56:29] This or statement is.
[02:56:31] Clever because...
[02:56:33] It's essentially saying,
[02:56:35] if there's a value,
[02:56:37] go with that. Otherwise,
[02:56:40] Wait for it.
[02:56:44] I was assuming this post was calling post as a function.  Maybe that's the wrong assumption.
[02:56:53] Thank you.
[02:56:55] Yeah, and SolidStart does. We assume that you need suspense for async, which is where this conversation comes in, because it's hard not to have...
[02:57:06] The framework needs to know to wait.
[02:57:10] Right. If we go render,
[02:57:12] and we don't hit any suspense and we hit and you call some problems like how do we know
[02:57:18] how do we know to wait? Now we could wait on every resource, every async call that you make  on the server to finish before we send any response back. But how would we  possibly stream that? We need a way of knowing
[02:57:30] what's ready.
[02:57:31] what things depend on. And
[02:57:34] As I said, I do like how React with RCs have changed the default to hold.  But classically with SSR,
[02:57:42] you try and render synchronously and then like the client picks up the slack.  So yeah,
[02:57:47] You need mechanisms to be able to tell the server to wait. Suspense is
[02:57:52] that mechanism.
[02:57:53] I think...
[02:57:54] If you unified the consistency first model, you could argue you wouldn't need suspense.
[02:58:00] But we're not like we're not there. Right.  Because when we added this stuff to solid, it was often like you can use create resource without suspense and solid.  Right. You can just like go in.
[02:58:09] use it to load async data.
[02:58:11] um,
[02:58:12] And
[02:58:15] the way we opted into like a tearing model by default because that's how all reactivity works. It
[02:58:21] Like you didn't like if you have an effect that writes the state, you know, that's basically how all async is work.  So I didn't think much of it.  But now in hindsight, you know,
[02:58:28] I kind of realized that like,
[02:58:31] there might be better defaults, right?  And that's really what this conversation is about.
[02:58:37] Thank you.
[02:58:39] Right. And
[02:58:42] Yeah, I mean...
[02:58:44] I think one of the hardest parts here is I have no idea
[02:58:48] Thank you.
[02:58:48] The problem with all these examples is we're kind of okay if it holds the world, you know?
[02:58:54] You know, we're just like we're looking at this and we're like, OK, well,
[02:58:58] I mean, that's not the example, but it doesn't matter.  We're kind of okay that...
[02:59:03] okay this doesn't update this doesn't update this doesn't update but the problem is withholding the world is
[02:59:08] without transactions like i was talking about before without transitions or something
[02:59:13] Nothing is responsive.
[02:59:15] while it's holding the world.
[02:59:17] You need to be able to fork it if you're going to take that hold the world positioning as your default.  Because otherwise...
[02:59:27] You hit something async and now nothing is responsive.
[02:59:31] And I think that,
[02:59:33] The problem is today in React and Solve, you need to wrap your stuff in a start transition.  I have an example here and here, but you go use transition and then you call start.
[02:59:44] around your setter.  And that tells us that these things need to update together,  that this is a process.  It's a fine API.  And the key part is it actually gives you back a signal  where that you can use as a loading state.
[02:59:55] And we built this into stuff like our router.  So when you go is routing, it will...
[03:00:00] give you a signal and you can actually show that, you know, hey, it is routing, you know,
[03:00:04] You can keep the stuff on the page and then here's a fade. You can do that.
[03:00:09] some kind of other sign, but you can hold while showing something's going on. You can't show a loading indicator if you walk the whole screen. That's why you need
[03:00:17] transitions or transactions if you have a holding model.
[03:00:21] But...
[03:00:23] If everything's holding by default,
[03:00:27] I think it's confusing.  People went back the second they had async.
[03:00:31] that.
[03:00:31] the whole app freezes, right?  It was what Benton said earlier, where he's like,  holding is great as long as you show it, right?  Otherwise, it feels like it freezes up.  So if your default is holding everything,
[03:00:42] And then someone adds something async and then you're like, why is my app so slow?
[03:00:45] It's going to reflect poorly.  One way you can get around that is make transactions implicit.  So...
[03:00:51] You know, you don't kill the stuff running on the on the page while something else unrelated updates. But
[03:00:56] The challenge with that, as we already talked about, is it's not clear what things are grouped together.
[03:01:01] And set and.
[03:01:03] If you just treated everything as a separate transaction, which is fine,
[03:01:06] There's no clear way of getting the pending state in right here.
[03:01:10] it's very obvious you have like this return pending that you can use for your trans your transaction but
[03:01:17] Here, it's like, what, does every state setter have the ability to check?
[03:01:21] If it's pending,
[03:01:22] Right? Because it's not about the read. It's about the write.
[03:01:25] Right. Latest.
[03:01:27] Latest is great because...
[03:01:30] latest doesn't get you the next value.  Latest gets you...
[03:01:35] the past value. Do you know what I mean? Like,
[03:01:38] If you look at all these examples where I'm talking about the latest post, it's actually...
[03:01:44] It's maybe latest to the poor name for it.  It's after we've changed to the next ID.  We've gone from one to two.
[03:01:53] latest
[03:01:54] actually means get one, ignore that two is in flight.
[03:01:59] So Latest is actually not
[03:02:02] like,
[03:02:04] It gives you a way to read the past. There's no way to
[03:02:07] opt into reading the future.
[03:02:10] Right.
[03:02:10] And
[03:02:11] I think it's important to understand on transactional side,
[03:02:15] it's kind of intentional because those whole branches just need to re
[03:02:20] live in the future and the other branches need to stay in the past you don't want
[03:02:26] That sort of tearing, but you need a way for the branches that are in the past to know that, hey, there's something happening in the future.  And I have no clue of what kind of API surface we'd need for that.
[03:02:38] Explicit transactions are very nice because they let us group things together the way we want to.
[03:02:43] And, you know,
[03:02:45] Thank you.
[03:02:45] they give us a clear API fixture, right?  You can't just like have set count return a signal  because then it's like,  you don't get a chance to insert it into the graph, you know?
[03:02:56] Like you could call that count in 10 different places,  like in an event handler,  you can't,
[03:03:01] There's no...
[03:03:02] You're not going to assign a variable that you pre-declared
[03:03:06] you know, at the top of your file component, sorry, top of your component that only runs once,  and then have that somehow insert into the,
[03:03:14] the render, like that we're not re-rendering. Like there's, you basically have to have the marker for whether something is listening to be pending to happen ahead of time. This, it would be no different in React either, right? Because
[03:03:28] the events happen outside of the render model, like where you actually do the set count happens outside.  So you need to actually have the fixture to track the transition already existing at render time.
[03:03:39] So,
[03:03:40] Like, yeah, the APIs here get kind of challenging.
[03:03:49] I still understand forking.  If you hold, how is that different from just deferring the state update until the async tasks are done?
[03:03:55] Complete.
[03:03:57] Well, what I'm talking about forking is if both...
[03:04:01] slides could exist at the same time, right? You're right. The naive, like simple approach is like  when you get to go from A to B and you have that, you know, switch happening here between these tabs,  you release A,
[03:04:14] And, you know,
[03:04:15] render B and then A is basically dead. But what if
[03:04:20] instead of doing that,
[03:04:22] You had a different copy of this memo, essentially.
[03:04:28] so this one doesn't rerun it stays on a and you have a different copy
[03:04:32] that evaluates now to be. So both of them are live at the same time.
[03:04:37] And then you can like realize that these are connected in different time and then
[03:04:43] eventually stitch them back together.
[03:04:46] We have a version of this in solid right now.
[03:04:49] But you have to basically fork the reactive graph.
[03:04:52] Um,
[03:04:53] is the thing because really as i've already kind of shown here with the manual
[03:04:58] approach.
[03:04:59] you need to have different copies of the signal or different way of reading the signal
[03:05:05] that reads different values in order to make this work. And, you know,
[03:05:10] In general, I mean, it's true with React too.  Like you have to, they have hooks where they persist state.  You have to have a different version of that state on the concurrent.
[03:05:19] branch for it to work and read from.
[03:05:28] Why create async as it today is not often using a mutate method like create resource? Mostly because of directionality and single source of truth.
[03:05:36] It's hard to extend that.
[03:05:39] that writeability piece.  Like if you want to have like create async store or something like that,  it's the reason why it's create resource doesn't have like a,  like has a weird experimental thing trying to get stores to work.  It's because trying to write to a store is different than writing to a  signal.  So,
[03:05:53] It's almost better...
[03:05:55] I think it's better to treat async as derived value and then
[03:06:02] have a way to write
[03:06:05] over it.
[03:06:06] Right, like projected temporary. So we like we had an idea in solid I've shown before called create writable, which is a writable memo. It's still fine for directionality. The biggest problem is like when you have like an effect right to a signal, you're like restarting the update loop again.
[03:06:21] when you have like basically you,
[03:06:24] you can't have any guarantees because you can't backtrace through the right.  Like, like if you have a signal and you're like,
[03:06:33] If you have signal A and B and you have an effect that writes to B,
[03:06:38] depends on A.
[03:06:39] B doesn't know that A is its dependency.
[03:06:43] Because you've decoupled it.  Because...
[03:06:46] Essentially, the effect listens to A and then it writes to B, but B doesn't know that it that it kind of depends on the effect, which depends on it. You've broken that linkage.
[03:06:54] Whereas, you know,
[03:06:55] Mm-hmm.
[03:06:57] Like if you used create memo,
[03:07:00] And you directly see that,
[03:07:02] B depends on A, and we can make sure not to execute things unnecessarily.
[03:07:07] And I think...
[03:07:08] that if you treat async like that you you you have the same kind of benefit of directionality in the  graph and
[03:07:15] it's,
[03:07:16] Vying to derive something that also can be overridden.
[03:07:20] because you still keep the directionality of driving.
[03:07:26] I don't I've shown this before.  I don't have an example with it right now, but like create writable.
[03:07:31] could basically
[03:07:32] be used as a way of, it would have a, like, create writable has a signature like this. Create
[03:07:38] So let's pretend it's like count,
[03:07:41] that count. I know that's terrible. It's in all my examples. But if you had create writable,
[03:07:46] then it could sync with like say props.count.
[03:07:49] Okay.
[03:07:51] but also overwrite that value. And because of the directionality, you know that it depends on props.count,
[03:07:58] even though it can be temporarily overridden.  If props.count ever updates, it will overwrite the value that you've set in count.  But at least you have you keep this directionality, right?
[03:08:09] which is very different than if you have a situation where you have, um,
[03:08:14] Thank you.
[03:08:15] this.
[03:08:25] Thank you.
[03:08:29] Thank you.
[03:08:38] Because with this...
[03:08:40] you don't actually know that count depends on props.count.
[03:08:47] Like this, this is just the value.  I mean, this could even be null because the first time it runs it, I mean, effects run later.
[03:08:54] I mean, you start getting into a place where...
[03:08:57] You're like,
[03:08:59] Doing...
[03:09:00] value rights.
[03:09:02] during rendering and it's just a nasty place you don't want to be with
[03:09:05] By changing everything to being derived, it cleans everything up.  And similarly, my thinking is that
[03:09:14] Why not just...
[03:09:16] put the async thing in here.  So you create something async and then have essentially a writable projection on top.  This way you keep the source of truth when the async data updates.
[03:09:25] it refreshes
[03:09:27] the your writable temporary version and you update this as you wish and then you push the changes back to the server async pulls through and you get the loop and you keep the directionality anyways um
[03:09:41] Sorry, a little bit of tangent. I hope that kind of makes sense. It's just,
[03:09:46] CrateWritable made CrateAsync less extensible.  Or sorry, not CrateWritable, sorry.  Having mutate on CrateResource made it less extensible.
[03:09:55] Because you'd have to preserve that
[03:09:58] the right side as well.
[03:10:01] And they could have different rules.
[03:10:03] Anyway.
[03:10:08] Thank you.
[03:10:10] Thank you.
[03:10:11] Thank you.
[03:10:13] Thank you.
[03:10:17] Thank you.
[03:10:17] Yeah, I mean, but the thing is,
[03:10:21] As long as
[03:10:23] those units, see, we have this lovely thing in our systems where we execute everything synchronously. So like,
[03:10:30] We are fine to have these. Yeah, you can say that the state, but like they can't see each other. They live in their own bubble of world. And by the time they reconcile and everything comes together, they will be consistent.
[03:10:50] Yeah, I mean, in a sense, but what I'm getting at is if you actually don't want to tear, you're going to have to be a little bit.
[03:10:59] hierarchically,
[03:11:01] you can hoist, but it becomes like, it becomes the more complex the situation comes in terms of  structural considerations, the harder it becomes like I demonstrated earlier.
[03:11:10] Right.
[03:11:11] like,
[03:11:12] Um,
[03:11:14] Like the, you know, display name versus name, you know, I mean, that one's simple, but like,
[03:11:25] Thank you.
[03:11:30] right so um where am where am i going here um not that this
[03:11:41] And
[03:11:42] Thank you.
[03:11:44] So yeah, React has this position that new suspense boundaries created under a transition don't get added to the transaction, instead go to fallback.
[03:11:52] But this, you know, doesn't help with things already on the page.  They need to stay in the past.
[03:11:56] the typehead problem yeah so you can as i said you kind of end up in this situation
[03:12:01] where like,
[03:12:03] If you go implicit transaction,
[03:12:05] even if we solve the API,  you'd still need a way to be like,
[03:12:09] No, I want this
[03:12:11] not to update, you know,
[03:12:15] transactionally like
[03:12:16] not be held up by
[03:12:19] async. I want this just to tear on its own.
[03:12:23] I don't know.
[03:12:26] I kind of got that far in this thinking and then I got here and I was like, well, what about inconsistency first?
[03:12:32] Right.
[03:12:34] Let's go back to where...
[03:12:36] Like now that I've gone way down this deep end, let's go back to how frameworks are today.
[03:12:47] Right.
[03:12:52] Right.
[03:12:53] What are the options? We lock up all effects like proposed basically treating the top level as if it were a suspense of sorts. This aligns with idealized server rendering, probably.
[03:13:00] We do inconsistent tearing based on how effects are grouped.  We expect people to use the tools provided to get the experience they want.
[03:13:06] Or we default to .latest instead of throwing, but we
[03:13:09] we're back to null checks.
[03:13:12] but tearing happens predictably. Yeah, there's basically, we have three options here, right?
[03:13:19] I guess to be fair, there might be a third option, which is like,
[03:13:25] not even trigger suspense.
[03:13:27] Unless you like if you if you default to latest that suggests not triggering suspense. So like right now solid actually triggers suspense.
[03:13:35] But...
[03:13:37] I think the problem is, so instead of latest, you'd want to have wait.  And if you set wait, it would throw and then resume when it came back.  To be fair, like I was saying, like, what if you like swapped it around?  So it's latest by default.  But then if you wanted to wait, you would, you know, wrap it.  But what I realized is that wrapping something like to say, hey, what?
[03:13:55] throw is the same as doing a null check.
[03:13:58] Like it's basically pointless to have an implicit...
[03:14:02] Wait.  So like from, you know,
[03:14:06] Yeah, here was my conclusions.
[03:14:11] We maybe eliminate some options, but unless we want to give up colorless async, you know, like the null checking ability, you have to go by throwing by default, right? Because basically throwing by not like not throwing by default throwing by often makes no sense.
[03:14:25] which means that top level will never tear predictably.  What I mean by that is if you have a system that throws,
[03:14:32] you're going to at least have effects that share the same dependencies, which means it's possible to have like name update one place, but name group with async thing not updated in a different place.
[03:14:42] Right. The one benefit of the current systems is that they tear, even though they tear, they tear predictably like name will be updated everywhere.
[03:14:50] you know, and
[03:14:52] But so like this is kind of the crux of the problem.
[03:14:58] So we really have to think hard whether we want to freeze, you know, like, as I said, like, make sure everything's consistent before we show anything by default above suspense.
[03:15:07] or except that top level there is inconsistent tearing.
[03:15:11] Freezing top level is a lot nicer if we have implicit transactions as consistency first wouldn't have to block the universe. However, without an API to track the state of the particular transaction, it's pretty difficult.
[03:15:20] The linking has to be on the right side and we can't just inject signals into the graph, they need to already be there before.
[03:15:26] This could be an option worth exploring, but it seems awkward.  So if we aren't implicitly transacting, how do we feel about freezing top level?  Most people should be using the tools like Suspense, but if they don't, they'll find themselves unexpectedly waiting for stuff.
[03:15:39] They'll think their app is slow.
[03:15:41] You know, to be fair, this only happens if they opt in to create async. If they just use effects, they will still just
[03:15:46] everything will work as it does today.
[03:15:49] We see this all the time with the router when people don't realize there's a transaction on their hood.  I don't think it's intuitive at the moment.  However, having unpredictable tearing due to effect grouping is hardly better.  I can see people trying to work around either behavior.
[03:16:00] At least with freezing, they have control by using latest.  I see this on the router all the time where people start using dot latest to cheat out a suspense with arbitrary tearing.
[03:16:08] they would probably need to just move stuff into different components for no real explainable reason other than, hey, you should use suspense.
[03:16:15] If all roads lead to the same place  and freezing is more instructional,  maybe it's better choice  or maybe I should spend some time  thinking about implicit transactions.  In either case, it doesn't feel like
[03:16:26] It does feel like
[03:16:28] pieces of solutions are aligning. And by that I mean like,
[03:16:31] if you make certain decisions, they lead to other decisions. Like there's clearly like,
[03:16:36] the paths aren't like a bunch of combinatorics.  There's like one path or the other path.
[03:16:41] So basically either we leave things relatively solid 1.0 style and null check.
[03:16:47] or we have to go pretty deep along the rabbit hole.  That's kind of where my thinking went through.
[03:17:00] So I was talking to some people in the discord of after,  after this,  and I realized that like,
[03:17:06] Yeah.
[03:17:07] It's...
[03:17:10] It is interesting that if you avoid certain primitives,
[03:17:13] you can basically avoid this whole thing altogether if you just like
[03:17:17] use effects to do data loading, then you never have to worry about this.
[03:17:23] even with all these models in place.  But it's like,
[03:17:28] It's not going to...
[03:17:29] if you want it to be a consistent story with like SSR and like the whole  pieces to work together,  you almost have to like,
[03:17:36] go all in, which is...
[03:17:38] Um,
[03:17:40] challenging, right? Because it's like, I don't know if
[03:17:44] I don't know if people in the ecosystem are ready for this.  In a sense, this is the problem React has been facing because React...
[03:17:50] might academically have worked it out. Like the, this is, was this whole exercise with the Scala  draw where I showed that reacted basically figured out how to make a consistent async model. And I've  basically figured out how to,
[03:18:03] do the same fine grained in a reactive system. But
[03:18:08] It's like,
[03:18:11] it's a big ask when people are like,  I'm just building my site.  I don't understand any of this.  Like think about how much language and how much,  um,
[03:18:19] Misunderstanding goes into this stuff.
[03:18:22] I'm happy with the null check, yeah.
[03:18:24] But it's like,
[03:18:26] Because of React, people aren't happy with a null check.  It's the first thing I get every freaking time.  It's weird to have a suspense component and a show component.  You're like, what am I doing?
[03:18:36] Right. And the second you get rid of the null check,
[03:18:40] Stuff starts looking so, I mean, I've showed it in some of these examples I've shown, like,
[03:18:48] This is way nicer or where's the suspense version?  This is way nicer than what most frameworks and tools get to do today.  The fact that you can just like write that and just be like, look,
[03:18:57] SSR, everything taken care of.  I don't even have to think about it.  Async will just work exactly, you know,
[03:19:03] the plan, you know, like
[03:19:08] Yeah.
[03:19:10] We were getting the error.  Well, it's more of that.
[03:19:13] There's ways that we can enforce this stuff.
[03:19:16] like more strictly.
[03:19:18] There's ways that we can just make rules that will make people very miserable, but will remove the foot guns.  Because there is a consistent model here.  You just have to be aware of it.  One example is don't let people write.
[03:19:32] During the.
[03:19:33] The pure face. They can't write
[03:19:35] Like can't set state, can't set signals, can't do that during the pure phase. And if you look
[03:19:41] at my diagram here,
[03:19:43] you know,
[03:19:44] here the pure phase is basically every freaking thing that they taught you
[03:19:51] except for here so you're allowed to call set state here and you're allowed to call in inside your  event handlers
[03:19:56] You can't call setState anywhere else, right?
[03:19:59] And if,
[03:20:00] if we literally erred
[03:20:03] in that scenario.
[03:20:04] Thank you.
[03:20:06] There's a whole bunch of people who would be like throwing up their arms and  couldn't figure out how to do stuff and,  you know,  be very confused and get very upset.  But,
[03:20:14] there wouldn't be a foot gun.  It just wouldn't work.
[03:20:24] Thank you.
[03:20:26] The problem is...
[03:20:29] Thank you.
[03:20:29] I'm saying it doesn't fork by default.  You have to opt in with a transaction.  The problem is that...
[03:20:37] Thank you.
[03:20:38] The biggest challenge with suspense is that once you're in a suspense zone,
[03:20:43] Okay.
[03:20:48] There's only two ways out.
[03:20:49] there's
[03:20:53] Dot latest or...
[03:20:55] So make sure that it only suspends initially.
[03:20:58] So like opt into tearing.
[03:21:00] Thank you.
[03:21:00] Or and maybe maybe like that's such a common option that people should just use that like all the time.
[03:21:09] or
[03:21:10] Using transactions, which require people to wrap their actions and their setters.  And I don't think they're thinking that way.  You know, if I'm just creating some random app, am I going to do that?
[03:21:23] I think because otherwise the default suspense behavior has you dropping back to fallbacks really, really,
[03:21:31] awkwardly. Like maybe if that part could be addressed in a consistent way, then the rest of this falls together. Right. But the problem right now is you set some state,
[03:21:39] it triggers something async.
[03:21:41] You know, you've just kind of blown up the world.
[03:21:44] It doesn't actually blow up in Saltz case because we don't re-render.
[03:21:48] Um,
[03:21:49] but it unmounts it so it's like really freaking awkward like the way that it like
[03:21:53] kind of pops in and out on you.  So like,
[03:21:58] Yeah, I imagine...
[03:22:01] That like...
[03:22:07] I imagine that like...
[03:22:10] that's the catch, I think.  I think that's ultimately going to be the catch.  It's around the fact that
[03:22:16] like,
[03:22:19] there isn't really much in between.  And maybe it's just a matter of setting the right defaults.  That's why I'm doing this exploration.
[03:22:27] Because like,
[03:22:30] The latest challenge is because...
[03:22:36] Yeah, I mean, latest or...
[03:22:38] post, as we saw before, actually keeps things non-null, right?
[03:22:47] Yeah, that's interesting. I think that's worth thinking through.
[03:22:53] Um, okay.  That is an interesting thought, but I, I, yes and no.
[03:22:59] Yes, yes, to a certain degree, but like,
[03:23:02] Sometimes that's the best place for things to go.
[03:23:05] Otherwise you duplicate your whole view tree logic outside in like a separate state container.
[03:23:10] And maybe you're fine with that, you know, like old NBC, but like, there's a reason we got away from that model.
[03:23:16] I think there is a certain amount of overlap. I think we have to recognize that
[03:23:21] these aren't,
[03:23:22] like they aren't one-to-one i think like
[03:23:24] If you think all state belongs in the component, you're wrong.  But on the other hand, if you think all state belongs out, you're going to get a lot of duplication.
[03:23:36] Right.  Ness is specifically possible.  They're raising.  Yeah.  I mean,  that's generally it as well.  I think I,  I,  I,
[03:23:42] I believe that if this model is adopted,
[03:23:46] It will be beautiful.  But I think it's really hard to get people to actually adopt these kind of things.
[03:23:56] Well, it's not about the async logic. It's about getting the async in. And this is going to be really relevant when we talk about what happened with React 19 in a few minutes.
[03:24:06] Um,
[03:24:08] Thank you.
[03:24:13] Thank you.
[03:24:14] Yeah, but I mean, suspense has this weird inversion of control where like,
[03:24:18] it just goes up to the boundary.
[03:24:21] that that's where it jerks.  And the reason you do that is because you, you, you want, you,
[03:24:25] you want to be able to like not have a billion spinners and just have one.
[03:24:29] So like,
[03:24:31] Yeah, maybe we should fundamentally look at the nature of that.  See, for me, a lot of this stuff, and sorry, let me just get this here.
[03:24:40] Um...
[03:24:43] One second. I want to
[03:24:45] I want to grab an example here.
[03:24:50] One more example.
[03:24:55] Where is it? Two seconds.
[03:24:57] Okay.
[03:24:59] Too much chat in the Discord.
[03:25:01] But before I got here.
[03:25:03] All right.
[03:25:05] Thank you.
[03:25:06] The reason that I'm getting this point is because
[03:25:11] Even before hitting suspense, you start thinking about the power of...
[03:25:15] of these async primitives, right?
[03:25:18] And,
[03:25:20] I'm not going to say this is optimal from a performance standpoint.
[03:25:24] But...
[03:25:25] I have implemented the non-blocking process
[03:25:30] are the blocking async or like the fine-grain blocking async.
[03:25:34] Right?
[03:25:36] For example, count.
[03:25:41] And then picture create async where it depends on count.
[03:25:45] And then it,  uh,
[03:25:48] I'm just returning it after 400...
[03:25:52] Thank you.
[03:25:53] milliseconds and then there's a double count which is a memo
[03:25:58] that
[03:25:58] depends on data.count. Notice no null check here.
[03:26:02] Right. Even though data is async.
[03:26:05] And it's an object, no null check here, times two.  And then I created an effect on count.
[03:26:09] And then I create an effect.  This is with the split effect, right?
[03:26:13] which has a count and double count.  And I console log that.  And then I set an interval where I update the count from one to 10.
[03:26:20] at a very fast pace.
[03:26:22] It's so fast that it interrupts.
[03:26:25] the async.
[03:26:26] from running because this takes 400 milliseconds so this is already to two to three to four even before
[03:26:33] Um,
[03:26:34] this finishes resolving.
[03:26:36] So what you actually end up seeing here
[03:26:38] is
[03:26:39] this first effect that's tied to count just go one two three four five six seven eight nine ten  and then the async
[03:26:46] log happen at the end with the final value.
[03:26:50] So this is an example of
[03:26:52] what I call...
[03:26:53] unpredictable tearing where it's partial. It's based on the effect grouping. This is like the easiest thing to do in the world. Like it's already set up this way.
[03:27:01] But you see it goes 1, 2, 3, 4, 5, 6, 7, 10.  And then the last one comes in afterwards.  Now, if I made...
[03:27:07] This is
[03:27:09] interval slower than
[03:27:12] then...
[03:27:13] the Fetch. You'll see that each
[03:27:15] fetch comes in
[03:27:18] You know, as it goes, right?
[03:27:21] Tchoo!
[03:27:22] do do
[03:27:23] But...
[03:27:29] Thank you.
[03:27:36] Thank you.
[03:27:37] Yeah, well, I mean, but you still have this complexity outside when you have
[03:27:43] you still have the complexity outside when you have like multiple things that depend on that like
[03:27:47] I guess because I think in signals, you could pull the whole signal graph out of your UI.
[03:27:53] and still have to
[03:27:55] answer this question, you know, like,
[03:27:58] should count
[03:28:00] Update.
[03:28:01] in this scenario.
[03:28:05] When you,
[03:28:06] There's somewhere else that, you know,
[03:28:08] show that, you know, shows
[03:28:11] count with double count, you know?
[03:28:19] What if without a factor memo? Yeah, okay. Yeah, sorry. So you want me just...
[03:28:23] Go like this.
[03:28:27] Okay, I'm going to do the effect first.
[03:28:31] Without...
[03:28:32] The memo, the same thing happens.  The reason I want to show the memo for you guys  is to understand that it's actually transient,  which was not the case in Solid 1.0,  that it actually propagates the async
[03:28:44] through
[03:28:46] here like if i go back to the
[03:28:49] Like, obviously, this is the same thing.  Like the async actually propagates through the memo, which is something that we don't have today, which is freaking cool.  But yes, you want to know what happens if I do this?
[03:29:04] Let's do this.
[03:29:06] Thank you.
[03:29:06] Yeah, there we go.
[03:29:08] It throws. It throws here.
[03:29:14] But you have to remember...
[03:29:17] Thank you.
[03:29:18] that--
[03:29:23] Yeah, it throws.
[03:29:25] Thank you.
[03:29:27] But what I'm getting at is you have to remember  when you're doing initial render that you're part of a pure render phase.  So if it throws...
[03:29:35] coming back to here inside a component,
[03:29:42] uh wherever this demo is if it's if i just access it at top level for some weird reason and it throws here technically speaking it's
[03:29:53] part of the memo above it,
[03:29:54] that
[03:29:55] you know, we'll do it.  I don't recommend accessing ASAP
[03:30:00] data top level in your components, it's as bad as
[03:30:03] It's,
[03:30:04] basically like putting an async await you get you end up with a react model
[03:30:09] Basically,
[03:30:10] Yeah.
[03:30:11] People shouldn't do that.
[03:30:13] That's an interesting question.
[03:30:17] Oh, no, the function's fine.  Sorry, the function's fine.  Sorry, I missed the function wrapper.  I meant top level in the corner.  But if I...
[03:30:23] If I just...
[03:30:25] If I just put this, if I got rid of the memo here,
[03:30:30] and just went, uh...
[03:30:32] and just went,
[03:30:34] Double count.
[03:30:38] That's fine too.
[03:30:39] I think the most interesting thing about this is if you try and read something,
[03:30:45] you know, like in an event, right?  This is why suspense is probably important.
[03:30:50] or not probably it's definitely important because if you have an event on your dom
[03:30:54] that is reading this data.
[03:30:57] you probably want
[03:31:00] You can obviously put latest around it.
[03:31:03] But you more than likely you want that whole section to be under a suspense boundary because
[03:31:09] If you...
[03:31:10] I mean, what is a scenario where...
[03:31:14] you've,
[03:31:15] not loaded the data, but you can run effects like run run
[03:31:21] events against it. I'm not sure. I think you should be grouping these things together based on like,
[03:31:27] whether they've loaded or not.  People shouldn't be clicking buttons  on something that hasn't loaded yet.
[03:31:33] But yes, it throws.
[03:31:40] I mean, what do you do?  Like rerun the event later?  Like, you know,
[03:31:48] Like, then you lose the synchronous time of the event.  I mean, more than likely, the button click is...
[03:31:55] going to either be disabled,
[03:31:57] until the thing loads or it's or it's going to be part of the suspense boundary you know like you
[03:32:04] I don't think it makes sense to build something where you're trying to interact with something that hasn't loaded yet.
[03:32:11] I don't know, maybe that's a hole in this. It's a question. I did think about this, though.
[03:32:22] Thank you.
[03:32:22] you can also use latest to get to,  to,  to get out of the throwing,  so to speak.
[03:32:29] I'm also talking about loading. You can also ask if it's loading.  You know, the loading and latest are like the two helpers are really important here. But in any case,
[03:32:39] Just kind of wanted to show that like,
[03:32:45] it's kind of cool, you know, I mean, I'm trying to think of like a scenario here that show like really show this in action, but
[03:32:52] Like,
[03:32:53] You could pretend like
[03:32:55] I don't know, you could pretend like, forget about this for a second.
[03:33:00] I mean, what could we do that was fun?  We could make like a...
[03:33:05] Counter.
[03:33:06] Component.
[03:33:08] And then like
[03:33:10] Okay.
[03:33:11] const,
[03:33:13] What are we going to do? Make a div?
[03:33:17] equals document.createElement.
[03:33:21] And then...
[03:33:24] Return div.
[03:33:27] and then
[03:33:28] Create an effect.
[03:33:34] It's like.
[03:33:39] I
[03:33:40] Document.
[03:33:46] or actually just div.text.  So let's make an h1.
[03:33:57] I mean, you guys have all seen my old...
[03:33:59] solid demos, right?
[03:34:09] I guess this is a render effect.
[03:34:15] you
[03:34:19] Thank you.
[03:34:20] Um...
[03:34:26] Thank you.
[03:34:28] I guess to be fair, I...
[03:34:30] I could actually just do it right here.
[03:34:32] Just go...
[03:34:39] Thank you.
[03:34:40] Thank you.
[03:34:41] Okay.
[03:34:44] All right.
[03:34:45] Thank you.
[03:34:48] Thank you.
[03:34:52] you
[03:34:54] Oh, and then let's get rid of this.
[03:35:04] Let's create.
[03:35:12] Yeah, I'm like, I'm just trying to think of like,
[03:35:16] Um...
[03:35:19] Thank you.
[03:35:20] Let's just move this in here for now.
[03:35:26] you
[03:35:27] I'm trying to think of ways to like show
[03:35:31] format.
[03:35:33] Thank you.
[03:35:35] Thank you.
[03:35:37] document.
[03:35:39] .body.
[03:35:41] And
[03:35:43] Counter.
[03:35:46] Thank you.
[03:35:47] What am I doing funny here?
[03:35:57] Thank you.
[03:35:58] Thank you.
[03:36:06] It's funny because HMR is not going to work properly the way this is.
[03:36:18] Thank you.
[03:36:23] Thank you.
[03:36:24] This is kind of what I want to do is set count.
[03:36:27] Count.
[03:36:31] plus one,
[03:36:35] Thank you.
[03:36:38] Yeah.
[03:36:40] Thank you.
[03:36:41] Thank you.
[03:36:42] Um...
[03:36:46] But in...
[03:36:48] dot text.
[03:36:50] Content equals click.
[03:36:54] Thank you.
[03:36:57] Yeah, I mean, this one's just holding, but like...
[03:37:00] It's, I mean, if I really wanted to get fancy here, I could probably hoist the
[03:37:08] The...
[03:37:12] I could probably do something like...
[03:37:15] display
[03:37:19] Thank you.
[03:37:21] See right now I don't have um
[03:37:25] I don't have...
[03:37:27] Um...
[03:37:29] I don't have like a transaction.  So there's no loading indicator there.
[03:37:36] Um,
[03:37:37] I can separate the effects to get that effect, but it's not real.
[03:37:41] What do I want to do? I want to
[03:37:43] on a move
[03:37:46] I want to move...
[03:37:48] the H1
[03:37:52] into
[03:37:53] Everyone with H1 into here?
[03:37:55] I'm just trying to picture a scenario where
[03:37:58] Like,
[03:38:03] Thank you.
[03:38:04] essentially,
[03:38:08] You could have a dumb component
[03:38:11] that
[03:38:13] renders an H1.
[03:38:15] you know,
[03:38:17] And
[03:38:21] Thank you.
[03:38:22] Thank you.
[03:38:23] Thank you.
[03:38:30] props.count.
[03:38:34] Props.
[03:38:36] double count, let's say.
[03:38:39] Thank you.
[03:38:42] Right.
[03:38:44] And then...
[03:38:48] Thank you.
[03:38:53] have essentially...
[03:38:57] Did I call it display?
[03:39:05] Count.
[03:39:07] Turn.
[03:39:09] count
[03:39:13] get double count
[03:39:18] Return double count and I'm basically just hand compiling this.
[03:39:23] Um...
[03:39:29] Thank you.
[03:39:32] Thank you.
[03:39:32] And then,
[03:39:34] Thank you.
[03:39:34] So H1 here.
[03:39:37] Yeah.
[03:39:39] Thank you.
[03:39:39] you
[03:39:41] Thank you.
[03:39:42] And then what I could do,
[03:39:45] is...
[03:39:49] Thank you.
[03:39:50] - Choo-choo-choo-choo-choo.
[03:39:52] um
[03:39:54] Yeah, let's pull async right out of the puzzle here.
[03:39:58] Thank you.
[03:39:59] Right.
[03:40:01] I could author...
[03:40:06] I can author my component here.
[03:40:10] It's funny.
[03:40:11] Why does it...
[03:40:15] That's actually funny.  I wonder why it's not showing...
[03:40:18] the
[03:40:20] the count initially
[03:40:26] That might be a bug on my side.  I don't know what this is.
[03:40:30] Interesting. Okay. So there's still some work to be done here, but...
[03:40:34] Thank you.
[03:40:36] What if I change this to one?
[03:40:39] Okay.
[03:40:40] Okay, something is...
[03:40:42] not happening as I'm expecting it to. But in any case,
[03:40:48] We see this updating initially.  We created a component that essentially has no clue about async.
[03:40:54] It just takes two props in.
[03:40:57] Right.
[03:40:58] And expects those props to always...
[03:41:02] be defined.
[03:41:04] And then essentially,
[03:41:08] We can add async into the tree here.
[03:41:14] Thank you.
[03:41:16] And then like,
[03:41:18] Um...
[03:41:20] What am I doing wrong here?
[03:41:22] Data.
[03:41:27] And then like, yeah, anyway, this is still very much a work in progress.
[03:41:34] But I just kind of...
[03:41:37] kind of like
[03:41:41] The thinking that's going into that, yeah.
[03:41:47] Yes, this is equivalent of having async without colored functions. Yes, that's what I'm trying to show here.
[03:41:55] Right.
[03:41:56] But does it work?
[03:41:58] Don't get me started on that. But yes, this is the idea. I am comparing it to coloration of async because
[03:42:06] The point here is that...
[03:42:09] we were able to build a component that was just able to render
[03:42:15] And then we were able to add async capabilities above it without impacting its functionality, without having to go back into it.
[03:42:25] If you use latest, I don't know if I haven't exposed latest yet.  This is very...
[03:42:32] new but yeah i i just this this kind of playing around here right  yeah
[03:42:42] But yeah, this is essentially where the thinking is going.
[03:42:46] To be able to support these models, you need to have consistent scheduling.
[03:42:50] as I was trying to show before.
[03:42:52] And
[03:42:54] To do that, you need to actually separate the dependencies so that you can run in the purest  part and only effects on the side part.
[03:43:02] All right.
[03:43:03] And yeah, as I said, I don't it's hard to tell how worth it all these things are.
[03:43:09] But,
[03:43:11] Seeing stuff come together like this, it feels incredibly powerful.  So, yeah, I'm...
[03:43:18] This is going to take a little time to rough out the edges, but like,
[03:43:21] This is like,
[03:43:22] As I'm trying to say, I think it's like,
[03:43:25] It's like React's model, right?
[03:43:28] without
[03:43:29] a lot of the
[03:43:30] trade-offs of the React model because it's not blocking like
[03:43:35] Like,
[03:43:37] We don't have like the reason this example works is because like if I had suspense, which I don't have, it's actually this read.
[03:43:46] that is triggering the throw it only throws right
[03:43:51] here because
[03:43:53] This is a getter.
[03:43:55] which then...
[03:43:56] tries to read
[03:43:58] the memo which tries to read the async so if you put suspense here
[03:44:02] like obviously you'd probably in a situation like this put suspense around  this whole section.  But my point is like,
[03:44:08] the throw is pushed all the way down, which is the opposite where React, the throw happens right
[03:44:14] here.
[03:44:15] you generally will be like,
[03:44:19] where you introduce the async data into the component.
[03:44:24] is where the throw happens.  And don't get me wrong,  they could try and push it down,  but if they pushed it down,  you have to rewrite display.
[03:44:35] There's a logical place to introduce it.  You want to introduce it
[03:44:39] I'm not saying you have to fetch.  I'm fetching in here.  You can hoist the fetching up.  But what I'm saying is you have to...
[03:44:47] introduce it at the level you tend to want to introduce it at the level where you're aware of
[03:44:53] Like,
[03:44:53] suspense to a certain degree.
[03:44:55] But
[03:44:58] I mean, it could still be a level in between these two.
[03:45:01] But the important part is you we can push.
[03:45:05] the read all the way down
[03:45:07] to the leaves without rewriting the leaves.
[03:45:27] Yeah, I mean, it's fine. We just don't do get.
[03:45:34] Make this count.
[03:45:36] Good.
[03:45:37] Make this double count.
[03:45:40] And then...
[03:45:41] Call this as a function.
[03:45:43] And then call this as a function.
[03:45:47] Yeah, the getters aren't important.
[03:45:49] Same thing.
[03:45:51] The...
[03:45:54] I'm just pointing out that like
[03:45:58] Thank you.
[03:46:02] would the old current API still work for 2.0?  I mean,
[03:46:08] From this perspective, create resources, just adding a bunch of stuff on top of create async.
[03:46:14] Right.
[03:46:15] The tricky part is the implied behavior changes that would come with this.
[03:46:22] in the way async is happening. It's syntactically, it's not a problem. We could port old primitives across, but I think this change might be significant enough that
[03:46:32] I don't know if old code would run optimally.
[03:46:37] I mean, it's fine. I guess you just have extra null checks.
[03:46:41] I don't know.
[03:46:42] I haven't figured that out if we'd force it into a weird place where you'd have to null check still.  Yeah.
[03:46:51] Is failing render silently better than getting an error about accessing blah and not define?
[03:46:56] Is it going to fail to render silently, though?
[03:47:00] Thank you.
[03:47:01] Like,
[03:47:02] If it throws, you're going to catch it in an error boundary.
[03:47:06] if it's delayed, it's not that it's going to fail to render, it's going to,
[03:47:12] slow down silently. Like you're not going to understand that why when I click this,
[03:47:18] It took...
[03:47:20] a second suddenly somebody entered async you're like why isn't the snappy anymore that's the biggest fear here
[03:47:27] And the solution to that,
[03:47:30] is what I'm dwelling on a lot because obviously if
[03:47:34] we change the,
[03:47:36] Um,
[03:47:38] if we can separate the processes in terms of like transactions or transitions,  you won't be as impacted by it.  But that's the challenge in this kind of async model.
[03:47:48] Um,
[03:47:50] I
[03:47:51] consistency is guaranteed, not speed.
[03:47:54] Right.
[03:48:00] Thank you.
[03:48:02] elaborate a bit more on nested objects. I'm not quite
[03:48:06] following are you like
[03:48:08] Generally speaking,
[03:48:10] like react or whatever or like most of these kind of
[03:48:14] most signals things like the entry point is here so like
[03:48:18] Nested reactivity,
[03:48:20] doesn't apply to async in the same way.  It's almost impossible because...
[03:48:26] Like usually there's a source of the async.
[03:48:29] It's,
[03:48:31] So ultimately, the reactive systems themselves as they propagate data only really understand synchronous things. All the async here is doing is breaking up that synchronous things into patches. So like there's no such thing as nested async, so to speak, I don't think.
[03:48:45] Um,
[03:48:47] you'd have to be able to convert it back out into something that you can
[03:48:53] Thank you.
[03:48:53] Read.
[03:48:56] Anyway, but yeah, I mean, this is very...
[03:49:00] rough
[03:49:01] example of people,
[03:49:03] As I said, the code's not finished.  People want to play with it.  Maybe I can...
[03:49:07] share this right here. Let me share that.
[03:49:13] Thank you.
[03:49:15] Thank you.
[03:49:16] You catch errors in the error boundary. It's where the read is.
[03:49:21] So we don't, you don't,
[03:49:26] It'll be the error boundary close to where, like, it's the same thing with our resources.  When a resource errors, it's not like this component errors.  It's wherever the this is read errors, the next closest error boundary is what clicks,  which might end up with multiple error boundaries.
[03:49:40] showing up at the same time.  But it also makes sense because it's like this part of the UI is
[03:49:45] could
[03:49:46] Render.
[03:49:48] an update. Here's that. Now,
[03:49:52] The key part you have to understand is this propagation from create memo. It means now that because we can pass it through error boundaries are only tied to effects like.
[03:50:01] If a memo errors, it's only going to matter if an effect reads from it, including a render effect.  So like all propagation changes.
[03:50:10] is based on effects and the effects create the hierarchy of the render tree.  So like,  well,
[03:50:17] Unlike solid today, we actually get a very clear separation
[03:50:22] which is I'm pretty stoked about because
[03:50:25] It's,
[03:50:27] There are clearly two graphs.
[03:50:34] I'm still confused with the two callback.
[03:50:36] You shouldn't set signals in the first one, but what else is decided for what goes where?  Yeah, basically the first one tracks in the, this will help you a bit.
[03:50:45] This side tracks
[03:50:47] This side does not track.
[03:50:49] So if everything reactive should be here.
[03:50:52] The part that gets weird, and this is the part that I came to realize over time is,
[03:50:57] Creation isn't a side effect.
[03:51:00] So,
[03:51:02] When we render
[03:51:04] like child components under conditional, it all happens on this side.
[03:51:08] This is like where you finally insert it into the DOM.  So like nested,
[03:51:12] effects go in this side nested
[03:51:15] everything goes on the side.  You shouldn't be creating...
[03:51:18] reactivity on this side.
[03:51:23] Um,
[03:51:24] Thank you.
[03:51:25] And this is what I'm getting at is it's why it's sort of like that React projection thing I was talking about.
[03:51:32] You want the creation all to happen on the pure side.
[03:51:36] all the creation and even our nesting,
[03:51:40] is on the pure side right like like i'm saying components are like nesting so like
[03:51:46] Yeah, it took me a moment to realize that, but then I got it.
[03:51:55] So yeah, the effect will...
[03:51:58] catch. But then the effect...
[03:52:01] knows its owning effect and it can trace up the error boundaries that way.
[03:52:08] So,
[03:52:09] But it's actually the effect that does the catching.
[03:52:12] so to speak, right?  Like it's where the sync is.  The fact that an async...
[03:52:17] or memo,
[03:52:18] Error is irrelevant.
[03:52:21] if no one...
[03:52:23] is listening.
[03:52:25] Right. It's like if a tree falls in the woods, you know,
[03:52:32] Thank you.
[03:52:33] Thank you.
[03:52:34] Thank you.
[03:52:36] Yeah, I think there's something here.  This is still very rough.
[03:52:41] I just needed I did the signals 2.0 stream, which you guys should check out if you haven't already, where this wasn't working at all.
[03:52:47] And now we're a little bit further along.  As I said, I don't...
[03:52:50] My week was like spend a day
[03:52:53] two days on this, including those write-ups,  spend two days working on solid,  one day looking at solid start,  trying to get it on block.  Like I don't, I have to time slice stuff,  you know, plus whatever, you know,
[03:53:03] of work and learning.  I've been doing some onboarding stuff at Netlify.  I like...
[03:53:10] Yeah, I basically have to keep on juggling slices right now.
[03:53:19] I guess I'm asking if an effect has a depoogle and only updates the fields that need because of this.
[03:53:24] Yeah, I mean, I think there's a gap in general of projecting like,
[03:53:29] State and stuff like Signia has something called like incremental computations, which can handle this. Our fork component or map array is an example of this. There, everyone needs we need data to get.
[03:53:42] to get, uh,
[03:53:46] We need data to get to be derived, right?
[03:53:50] Oh, I got a bunch of highs.  Did I just get rated?
[03:53:56] Oh, wow. Yeah.
[03:53:58] Teach a rating with a party of one
[03:54:01] 58. Wow, that's awesome. Glad to see you guys here. I was just wrapping up on showing off. Um,
[03:54:08] cool new
[03:54:10] async model that I was working on for solid 2.0 signals.
[03:54:14] Um,
[03:54:18] It's so funny because this is so rough that I'm doing the DOM APIs by hand.
[03:54:23] But the idea was I was showing that if you had
[03:54:26] Like, uh,
[03:54:29] a component.
[03:54:31] that
[03:54:31] rendered two numbers, let's say a count and a double count.
[03:54:37] in this new model that I've been working on.
[03:54:40] If...
[03:54:41] We I'm going to comment this out first.
[03:54:44] If...
[03:54:45] We...
[03:54:47] Thank you.
[03:54:48] say, author that data in such a way
[03:54:50] that
[03:54:51] um you know you have a count and a double count and then have a button that updates the count  sorry this is like raw dom apis and then
[03:54:59] display. I'm just calling the child component basically. And I click it and updates right away.  Yeah. But it's possible with this new model that, um, that, that I'm working on here so that,
[03:55:13] if we introduce something async into the puzzle, like maybe
[03:55:17] DoubleCount needs to go fetch something from the server.
[03:55:20] Um,
[03:55:22] and just to really bring in my point i i'm returning an object
[03:55:25] So you can see that like,
[03:55:27] like this should theoretically be undefined at first.
[03:55:31] It's possible with this new reactive model.
[03:55:34] to see there's a delay now between when I click
[03:55:38] And when it shows up,
[03:55:40] it's possible without changing things,
[03:55:43] the component underneath
[03:55:46] to basically have colorless async, like not needing to null check.
[03:55:51] Um,
[03:55:52] And yeah, it's a cool little trick because essentially,
[03:55:57] Um,
[03:55:59] because it's solid and reactivity, we've actually pushed
[03:56:03] the reed.
[03:56:04] all the way down to the leaf node. So like if we had something like suspense here,
[03:56:08] it would actually trigger all the way down the tree without actually having to rewrite your components. Now, pretty technical topic, obviously, but
[03:56:15] Um,
[03:56:17] Yeah, this is colorless, non-blocking async.
[03:56:21] which is super relevant when we want to talk about blocking async,  because I was going to talk about the React 19,
[03:56:28] Thank you.
[03:56:34] Yeah.
[03:56:36] So I don't know if you guys...
[03:56:39] heard about that controversy at all with React 19?
[03:56:43] Um,
[03:56:45] But they did some funny stuff with their suspense that got some people pretty upset.
[03:56:49] And I guess it's, I don't know if there's anything else on this topic I want to talk to, but we can kind of start getting into their mindset.
[03:56:56] Thank you.
[03:56:57] Thank you.
[03:56:57] Thank you.
[03:56:59] Well, I've just spent the last hour showing people how you can create a completely non-blocking async model when we're like literally.
[03:57:09] You could...
[03:57:11] have everything render
[03:57:13] except for the async piece and then have the async piece fit in
[03:57:17] And instead of like,
[03:57:19] throwing or awaiting at your component boundary, we push it right down to the leaf nodes, just like  signals normally do. So you update only the things that change, only await the things that change.
[03:57:29] React model is pretty much the opposite.
[03:57:34] Thank you.
[03:57:39] And
[03:57:41] you know, they have a weight in their server components, you know, where they block even even I think promise all is a smell because
[03:57:49] at least on the client, because the client, you have things updating all the time.
[03:57:52] Why would you try and block in the middle of your, you know, obviously they don't use a weight in, in, uh,
[03:57:58] on the client components that you have to use.  But I'm just saying like promise all is already suggesting  that you have to wait for both halves to come in together.  And I want all these things firing in independently, right?
[03:58:13] But this is kind of...
[03:58:16] Yeah, let's take a look.
[03:58:20] at that conversation a bit.
[03:58:23] So the gist of it was, and I think this is going to get, this is my understanding now is it's going to be reversed. I was actually there on the floor when they decided to make that change. Everyone is talking about it at React Summit in Amsterdam. But I think it's going to be a little bit different.
[03:58:37] Thank you.
[03:58:39] Let's go back to the start of this.
[03:58:42] Now I definitely need to blog about React 19 changes around suspensive sibling pre-rendering. I haven't seen anyone so far from the React core team who thinks this is the right trade off. Version 19 isn't out yet so maybe there's a slim chance to get them to reconsider.
[03:58:54] Basically,
[03:58:56] Let me see if I actually still have it.  I remade...
[03:59:02] uh sorry give me two seconds i haven't been in here for a while
[03:59:06] I actually...
[03:59:08] made the exact example that he's talking about.
[03:59:12] Um,
[03:59:16] I thought I did it in code sandbox.
[03:59:19] Let me see if I did it.
[03:59:22] Give me two seconds here.
[03:59:27] Thank you.
[03:59:35] Thank you.
[03:59:41] Okay, this is not it.
[03:59:45] Thank you.
[03:59:46] This is me helping someone debug. Maybe a stack blitz. Give me two seconds.
[03:59:50] It just it'll help with the with the explanation.  So I haven't been on this computer for such a long time because I was traveling.
[04:00:04] React 19 suspense. That sounds like it. Okay. Check us out.
[04:00:08] I'll show you the issue right now.
[04:00:13] So, I'm going to say,
[04:00:14] Picture you have a component.
[04:00:17] I love how long this is taking to load. Anyways.
[04:00:20] Picture you have a component.
[04:00:22] And in your component, you have a suspense fallback.
[04:00:24] And inside your suspense fallback, you have
[04:00:28] component A, component B. And component A has a component C in it. And I just went fun, had fun with this. B has D and E. It doesn't matter. I've just put a bunch of components. I made a tree. At the bottom, I have C.
[04:00:39] which is,
[04:00:40] listens, uses.
[04:00:41] Fetch is something.
[04:00:42] and then I have D which fetches something and I have E that fetches something, right? So
[04:00:48] If you look at this hierarchy,
[04:00:50] I have a spence up here and then I have some nested components, all siblings of each other, some in separate places.
[04:00:55] sibling tree branches.
[04:00:58] that are all fetching data.
[04:00:59] And with React 19, what ends up happening is I took a timestamp here.
[04:01:05] And then I...
[04:01:06] subtracted the timestamp. So this is how many milliseconds
[04:01:10] between each of
[04:01:13] these components
[04:01:15] um, rendering. If you actually see here that I write a div with the count, I call it, but the count is, where's my fetch function?
[04:01:23] is literally the ID
[04:01:25] of the...
[04:01:27] thing plus
[04:01:29] the current time minus the start time.
[04:01:32] And I'm...
[04:01:33] I'm faking a two second delay.
[04:01:36] So these all...
[04:01:38] our siblings doing a fetch. And if I refresh this thing, you can see that
[04:01:44] It takes six seconds.
[04:01:46] for this to load because there's clearly two second interval between them, two, four, six.
[04:01:52] Oh.
[04:01:53] In React 18, it did not work this way.
[04:01:56] In Solid, it does not work this way.
[04:01:58] But this was the change in React 19.
[04:02:01] Any...
[04:02:02] where in the tree that hits a use or hits something async,  it just stops rendering there, which means the next thing that hits async,
[04:02:11] waterfalls and then the next thing waterfalls and
[04:02:15] Essentially something where someone writing it might think, oh, it would be, if every request took two seconds, it'd be parallelized, it'd take two seconds. It's now suddenly six seconds.
[04:02:27] Hunt.
[04:02:27] Yeah, you only cared because React.lazy, which is fair.
[04:02:32] Okay.
[04:02:33] But...
[04:02:36] Oh, and this has the Canary version React 18. Yeah, see, I couldn't go back to React 18 because React 18 didn't have use.
[04:02:41] And I started doing stuff and I was like, okay, I'm not even going to.
[04:02:45] Do this.
[04:02:47] Yeah, to be honest, this is crazy.  Yes, this is, this is, this is, this is like,
[04:02:52] bonkers crazy like
[04:02:54] But it is and it isn't.
[04:02:57] um i'll give you the crazy argument first because i heard it firsthand
[04:03:02] Those...
[04:03:03] The guys over at React 3 Fiber were...  One of the guys was at the conference and he was like...
[04:03:09] he's like, this is untenable. He's like,
[04:03:12] With React 3D, we actually build...
[04:03:17] essentially...
[04:03:18] all these async resources, like building textures, building models, you know, building part of the 3D graph. And they rely on transitions as a way of like having it really smoothly come in, you know, while this background process is happening.
[04:03:34] If...
[04:03:36] Every async thing waterfalls, all the...
[04:03:39] parallel stuff waterfalls like basically he's like we don't have like you know half a dozen
[04:03:46] data async data fetches on a page. We have
[04:03:50] hundreds of these async calls spread throughout the components setting up these resources.
[04:03:57] He's like, this is just like non-starter, right?  Can you picture having to wait for each mesh to--
[04:04:05] to actualize before moving on to the next one.
[04:04:09] Thank you.
[04:04:10] Um,
[04:04:11] Obviously,
[04:04:12] they hadn't considered this.
[04:04:16] Um, but like,
[04:04:18] There were some people who were
[04:04:21] who are pretty upset about it.  You have to understand, in some ways,  at first I thought people were overreacting, because let's face it,
[04:04:27] In React,
[04:04:28] Doing this,
[04:04:30] Yes, it goes to siblings. But if comp A...
[04:04:34] if C was inside D,  if we had children hierarchy,
[04:04:39] Yes, React would be waterfalling already anyways.  Like if you fetch data in one component and then the child component fetches data, you would have a waterfall in React.
[04:04:48] You don't insolid.
[04:04:50] But in React, you do.  So, like, I was like, okay...
[04:04:52] At first I was like,
[04:04:53] I didn't understand it completely.  That's like,  maybe this is a shallow thing or like,
[04:04:57] Like, but no, it's literally,  they block anywhere in the tree.  And it makes sense  because it makes it consistent with server rendering  because on the server,  they don't need the parallelization.  They can just async await.
[04:05:07] render to that point, then render to the next point, and render to the next point.
[04:05:11] Um,
[04:05:12] Whereas
[04:05:13] And that's pretty efficient because nothing else updates.  But in the client...
[04:05:18] As we can see, this is a little bit awkward.
[04:05:21] And, but...
[04:05:22] I...
[04:05:24] Let's read a little bit for it.
[04:05:27] farther they are overreacting yeah
[04:05:33] Thank you.
[04:05:34] Yeah, I mean, when I saw this and I was in a meeting, I was like, I was like, you guys, there's no way this sticks like this. This has to they have to do something about this, right?
[04:05:43] because people were getting kind of worried, right?
[04:05:46] This is a great response from Sophie Albert.
[04:05:49] Discussion at React core team meeting say few notes. This was not motivated by RC Vercel, but actually Facebook site, which is faster this way due to less CPU load. The simplification enabled several newer changes that would need weeks of plus work to get back even if desired. Okay, let's keep on reading.
[04:06:05] The proper fix is
[04:06:07] is a major refactor to be able to track multiple in progress components without re-executing  unnecessarily. So we have our best of both worlds. Until then,
[04:06:15] We're left with two suboptimal options.  Recognize the old way is better for React query users with lazy fetches.  New way is better for teams that have already structured the code to initiate earlier fetches.  People who hyper-optimized performance have already done this and have a higher ceiling.
[04:06:28] Okay.
[04:06:33] Did you just listen to what they said?  Just hoist it.
[04:06:37] Thank you.
[04:06:38] Yes.
[04:06:40] Just hoist it.
[04:06:43] I think this will help you understand why this is...
[04:06:46] Such a big deal. I mean,
[04:06:47] I...
[04:06:49] myself.
[04:06:50] when I reposted this it said,
[04:06:53] Hopefully this doesn't come as a surprise to anyone that the answer is
[04:06:56] you know, a determining factor was that those already optimizing for performance hoisted.
[04:07:03] The thing is,
[04:07:05] Hoisting
[04:07:06] makes a hell of a lot of a sense.
[04:07:09] It's the reason we have loaders in Remix. It's the reason...
[04:07:14] Why...
[04:07:16] Like,
[04:07:20] React is so easy to write it wrong.  I mean, especially if you're not hoisting.  I told you the difference of the depth can make all the changes.  Like React server component, move a component around,  suddenly you have a waterfall, right?
[04:07:32] you know,
[04:07:34] I...
[04:07:36] Hoisting is the only foolproof way to do this, whether through some fancy compiler like Relay,
[04:07:43] But generally speaking, you hoist
[04:07:45] the data fetching up.
[04:07:47] I've been saying this for ages, but there was opposition to this statement.  And do you know where that opposition came from?
[04:07:54] React.
[04:07:55] No, local data fetching is fine, blah, blah, blah, blah, blah, blah.  And I guess they were talking about server components, to be fair.
[04:08:01] you know, server waterfalls aren't as bad as other waterfalls.
[04:08:04] But this is like an acknowledgement here that...
[04:08:10] They do hoist.
[04:08:12] I this is the first I've I've actually seen that because I mean, I was in a conversation like multiple Twitter spaces with Danny going on and on and on about how like hoisting is not a good solution to this problem.
[04:08:24] And it's like, oh yeah, but we hoist.
[04:08:26] which...
[04:08:27] Like,
[04:08:29] Like, yeah.
[04:08:30] This is...
[04:08:31] As I said, it should be obvious.
[04:08:35] But...
[04:08:36] But like,
[04:08:37] a lot of people purposely did not you know like
[04:08:41] If you talk to the Alex from tRPC is a perfect example.
[04:08:47] Like he...
[04:08:48] Like, obviously, this is a surprise.  This change.  He said, I hoisted intentionally when I knew there'd be a waterfall.  That's fine.  But, like, the whole...
[04:08:56] TanStack query side of the world. There's a whole basically
[04:09:00] push to people be only just local data fetch. And the thing is, reality,
[04:09:05] is it could never be the optimal solution.
[04:09:09] especially with the way React blocks.
[04:09:14] Thank you.
[04:09:17] As I say, not as I do.  Now, I don't know.  I can't find anything where the core team, like in writing, pretty much said this stuff.  But there was when I was kicking a fuss about waterfalls, there was so many things.
[04:09:28] conversations saying like,  oh no, local's better.  You just do it.  And I'm like, well,  you had to hoist on the client anyway.  They're like, no, no,  we never hoist on the client.  I'm just like,
[04:09:37] You know, but...
[04:09:38] It's like,
[04:09:41] Of course...
[04:09:42] Facebook.
[04:09:44] Or meta hoists.  Like...
[04:09:47] Thank you.
[04:09:48] Yeah, I think the only people who have an illusion about this are like a certain, you know, group, maybe group of people like on Twitter or something like.
[04:09:58] Like,
[04:10:03] Thank you.
[04:10:06] Thank you.
[04:10:10] Yeah, Relay doesn't work with hoisting yet. Relay is...
[04:10:14] I mean, and that's been the thing, right? Internally, they have relay to do the hoisting for them, right? So like,
[04:10:24] Yeah, I haven't seen the latest Theo video, so probably  I guess, yeah, I'm a little  late on this. I was away, but
[04:10:31] Like,
[04:10:33] The thing is,
[04:10:36] I get why they made this decision, right?  I hope you guys can get too.  Let's look back in this example.  Think about what React has to do
[04:10:44] in this example. Let's pretend it's ABC.
[04:10:48] React is a re-render based framework. So,
[04:10:52] If.
[04:10:54] If you've already hoisted your data,
[04:10:56] and you get here and you go in render, you go component A.
[04:10:59] You see the async thing and you're like, okay,
[04:11:02] I can't go any further.
[04:11:05] Then you go to component B.
[04:11:07] So you go to component A, you go into component C,
[04:11:10] And then you go, okay, I see the async thing and you can't go any further.
[04:11:13] and then they go to component B.
[04:11:15] and then they go to component D.
[04:11:18] And they go, OK, I can't go any further.
[04:11:20] And then they go to component.com.
[04:11:22] E, and then they go, I can't go any further.
[04:11:24] And then guess what happens?
[04:11:26] A comes back.
[04:11:28] And guess what?  So then they go to component A and they're like, okay, sweet.  I can render it.  And they finish component A.
[04:11:33] And then...
[04:11:35] I don't know how many times in the cycle they do it.
[04:11:40] It would be interesting to test...
[04:11:42] um,
[04:11:43] the test with,  um,  uh,
[04:11:47] React 18 or an older version that actually had this behavior. But my point is because they have to do a re-render model, they end up re-rendering as the stuff comes in. They have no choice to. So they render everything.
[04:12:00] initially,
[04:12:02] And then they have to render it everything again when suspense finishes.  So they were thinking, well, what if we got to A and we just stopped?  Now we're not rendering B and we're not rendering D and E and the rest of the common tree.
[04:12:14] And then...
[04:12:16] We continue.
[04:12:17] And then we get to D and then we,
[04:12:20] And then we stop.
[04:12:23] you know,
[04:12:24] Like,
[04:12:24] Like basically with this model they only have to render every component once.
[04:12:29] through the course of suspense. They might have to re-render the component itself when they stop and then they continue, but they don't have to render the whole component tree under the suspense again. And with the
[04:12:38] old model, the model people want, they basically were completely re-rendering the tree, you know, some amount of times.
[04:12:46] I don't know if it was with every resolution or if it was a certain amount, but they were doing a lot of re-rendering.
[04:12:51] for stuff that no one will ever see.
[04:12:54] So, I'm going to say,
[04:12:56] You know, at Meta, some of that work,
[04:12:59] is expensive, I guess.
[04:13:04] Right?  I...
[04:13:06] you
[04:13:08] You know, even even if it's, you know, performance optimized, they're
[04:13:13] there must be a cost to rendering React components.
[04:13:18] That's the second takeaway from this that I found interesting.  Because you wouldn't make this optimization if you didn't recognize that there's
[04:13:27] and an overhead to rendering React components.
[04:13:31] even without doing the side effects, even without doing the Dom diff or whatever, rendering in React has a cost.
[04:13:39] We like to pretend that it doesn't have a cost.  Oh, it's not important.  But it was enough for them to make...
[04:13:44] this optimization, a meta,
[04:13:48] Just putting it out there.
[04:13:50] Thank you.
[04:13:50] So,
[04:13:53] Yeah, I mean, this is...
[04:13:55] I found this situation very illuminating because it both acknowledged the need for hoisting
[04:14:02] And that...
[04:14:03] React components in a vacuum.
[04:14:06] have a real render cost that needs to be considered at scale.
[04:14:13] I'm going to go.
[04:14:14] I'm just throwing it out there, right?
[04:14:17] Thank you.
[04:14:19] Like,
[04:14:20] That would have been my hunch, but I can't speak to Metascale, but I'm glad they've been able to speak for us.
[04:14:29] It could be, but like...
[04:14:31] Think about it.  What's if their code is well written,  maybe it has a compiler in there or something.  They're going to memoize the code.  They're going to have create the hooks are going to,
[04:14:40] be there. Yes, the initial creation, it's there. But if you render it again,
[04:14:46] and nothing's changed,
[04:14:48] then you're just...
[04:14:50] pulling from the same source, I would think. Maybe there's a technical piece I'm missing here on that.
[04:14:55] that made this exceptionally more expensive.
[04:14:57] But...
[04:14:59] Otherwise, I would think...
[04:15:01] that they wouldn't have to do all the work on re-renders here either.
[04:15:09] Right? Like they don't have to run
[04:15:12] most of the app code because like that's why react renders are cheap because they don't have to
[04:15:19] render you do all the app code work every single time that's why you have hooks
[04:15:23] Right?
[04:15:24] Like,
[04:15:26] that's what makes it comparable.  Because if React had to run all the app code,
[04:15:32] like every time it rendered, it would be incredibly slow, right? Wouldn't it?
[04:15:38] They try to only run what changes.
[04:15:42] Right, but is it the first render every time? If it's the first render every time, then yeah, I think that's pretty legit.
[04:15:50] Like if both when they do the first render,
[04:15:53] Because you could argue that
[04:15:55] that first render doesn't matter that much.  Like I made this argument actually with solid suspense solution because it's,
[04:16:02] If you're waiting on the async anyways, yes, the rest of the work is going off in the space,  but no one's waiting on it.
[04:16:07] Do you know what I mean?
[04:16:08] Like,
[04:16:09] But if the second render, like when the stuff comes back,
[04:16:12] or any subsequent render when stuff comes back is like the first render again when suspense
[04:16:17] finishes, then yes, I could see why the expense would be more.
[04:16:22] because then it would treat it not as re-renders.
[04:16:25] I don't know if I want to look at this.
[04:16:28] Yeah.
[04:16:31] I'm going to...
[04:16:38] Was this an actual meme? I mean, I love it, but was this an actual meme?
[04:16:48] Thank you.
[04:16:49] Yeah.
[04:16:51] Uh...
[04:16:54] Anyway, thank you for that.
[04:16:59] Thank you.
[04:17:01] Thank you.
[04:17:02] um
[04:17:03] Yeah, I mean...
[04:17:06] Thank you.
[04:17:14] I don't think they care about rebranders, though. The optimization about showing the fallback as quickly as possible.
[04:17:19] Mm-hmm.
[04:17:21] Yeah, OK.
[04:17:22] Yeah, I'll accept that, right?  As we said, all the pure stage stuff could be a blocker.
[04:17:28] And
[04:17:30] they can't show the fallback until they've,
[04:17:34] Yeah, you can't show the fallback until you get to the end.
[04:17:39] So they're literally seeing it, probably literally seeing a gap between
[04:17:44] Like very small, maybe in the fraction,  like tens to hundreds of milliseconds  between showing the fallback.
[04:17:50] for exceptionally
[04:17:51] large things. Okay. Yeah. That makes sense to me.
[04:17:59] But,
[04:18:00] you
[04:18:01] Yeah, I mean...
[04:18:03] It is.
[04:18:06] Yeah, it's interesting.
[04:18:09] Because like,
[04:18:10] To be fair,
[04:18:11] If you were to parallelize this,
[04:18:14] you would still
[04:18:18] have this delay to show the fallback, I guess.
[04:18:24] I guess this is an interesting scenario in React land at meta where
[04:18:28] The synchronous work is so much.
[04:18:31] that it can actually delay synchronous work.
[04:18:35] which is
[04:18:36] pretty challenging right to deal with like if you're like
[04:18:40] Because the only way to look ahead is to render ahead, right?
[04:18:43] like,
[04:18:45] There's no avoiding that.
[04:18:49] whether you're solid, whether you're React, whatever, you're going to render ahead to look ahead.
[04:18:54] I've taken that for granted from the perspective of that if I render ahead, I get to save that work.  Next time when the data updates, I don't have to re-render anything. It's solid. We render once.
[04:19:04] But,
[04:19:05] I was assuming that React didn't want to go that way because obviously...
[04:19:12] you know, they'd have to redo a bunch of work. But
[04:19:16] the argument that the initial sync
[04:19:19] data,
[04:19:20] to render was slow enough to delay the fallback.
[04:19:24] is interesting.
[04:19:25] That being said,
[04:19:27] It's kind of true of anything.
[04:19:29] Right?  Like if that stuff wasn't async,
[04:19:33] it would also take just as long to render.
[04:19:37] So,
[04:19:40] Yeah, maybe it's just like one of those like,
[04:19:43] cheeky little optimizations. I love them too, right?  You do that and then you're like, you know,  you get to save in a place you wouldn't  usually get to save.
[04:19:52] So,
[04:19:54] Anyway.
[04:19:55] Still very, very illuminating conversation, I have to admit.
[04:20:02] Okay, let's finish this.  I think our document today around how to structure your fetches,  when to fetch if not, isn't good enough.  That's true.
[04:20:09] Ultimately, I recognize your frustration for your frustration too, but also recognize it's not an easy fix that's better for everyone.  I wish I had better news to report, but...
[04:20:16] Yeah. Good news. We met.
[04:20:18] We care a lot about spas.  Team misjudged how many people  rely on this today.  Still recommend preloading,  but recognize not always practical.  Plan the whole 19 release  until we get a good fix.
[04:20:26] Thank you.
[04:20:28] Thank you.
[04:20:33] Thank you.
[04:20:36] Yeah.
[04:20:37] Okay.
[04:20:39] Thank you.
[04:20:40] Thank you.
[04:20:41] It is. Yeah. Yeah.
[04:20:45] There isn't like an amazing fix for this though, I don't think.
[04:20:49] Because you still got to render to render, right?
[04:21:01] In any case, I'm glad that like a good outcome came out of it.  This is a great example of community outcry leading to something so.
[04:21:08] Yeah, I'm trying to remember, did I have any more notes?
[04:21:12] Yeah, no, not really. People are asking.
[04:21:16] I don't get where React moved away from their loader like POC.  Well, the problem is
[04:21:21] This doesn't feel natural.  Yeah.  I mean...
[04:21:27] It's hard to be too prescriptive around data fetching patterns.
[04:21:30] Thank you.
[04:21:31] People have to have some choice.  And at the core level, I can understand why React wouldn't want to do that.
[04:21:38] All right.
[04:21:40] Okay.  It's funny.  This is a mixed bag today.  So we're just going to wrap up on this week in JavaScript.  Then I'm just going to,
[04:21:47] I don't have a header today.  We're just going to...
[04:21:49] continue with some of the posts I put aside.
[04:21:53] So let's continue along that.
[04:21:57] We talked about benchmarking, we talked about the compiler.
[04:22:04] Thank you.
[04:22:07] Yeah, everyone likes that demo.  My problem is I think everyone who likes that demo  has no clue about RSCs.
[04:22:13] It's kind of unfortunate.  I can understand why the React team  was kind of hesitant here.  And then they're like, okay, well, Remix is at least adopting them.  You know, maybe...
[04:22:22] this will change the narrative.
[04:22:25] There's so much not happening.
[04:22:27] Thank you.
[04:22:27] Yeah, I'm...
[04:22:31] I, I, it's, it's, it's kind of interesting because it's an example where people are like, yeah, this is how they should have been.
[04:22:39] And it's like, actually, no, you know, Nex has RSCs.
[04:22:45] mostly right. There's some details, but like there's a reason they are the way they are.
[04:22:50] And it's,
[04:22:52] Thank you.
[04:22:53] If they weren't that way, then you'd probably want a different solution.
[04:22:59] Okay, so let me...
[04:23:02] Let me open up a few...
[04:23:05] other things here
[04:23:08] just a second, I want to make sure I got my stuff. So I got
[04:23:11] let's let's go boom boom boom good we okay
[04:23:17] Just give me a second.
[04:23:19] I got one on bookmarks.
[04:23:22] one on my profile, and then I'm going to put one on SolidJS.
[04:23:26] Okay, cool.
[04:23:29] you
[04:23:35] I mean...
[04:23:36] It's one of those...
[04:23:40] I guess I'm just talking from a purist standpoint.  It doesn't...
[04:23:47] it's
[04:23:49] I don't think of a good analogy for this because it's like,
[04:23:52] It...
[04:23:54] Remix is fine. It's just like,
[04:23:57] React's trying to introduce a new architecture, one that I would argue is as significant as moving to single page apps in the first place from Rails.
[04:24:06] And,
[04:24:06] And like people are just like not getting that point.
[04:24:11] Thank you.
[04:24:13] Yeah.
[04:24:14] Thank you.
[04:24:15] well,  I mean,  this is what I've been struggling with.  Like,
[04:24:22] I don't think that like what Remix is doing isn't like what Remix did is actually very similar to what Nuxt did actually.
[04:24:31] and some degree what waku tried to do initially um like this isn't new news to me i know it helped  people and ryan florence is a great speaker but like this lakes thing has been floating around
[04:24:43] Even Jamie Kyle, you know, when they were at the Critter of Babel or whatever, he was on Twitter saying like, this is how I want server components to be. And he was basically describing the solution like,
[04:24:54] two years ago.
[04:24:57] This is like, there's a reason they're not like that.  Do you know what I mean?  Like, so it's like...
[04:25:02] Thank you.
[04:25:05] it's backwards. And the primary benefit
[04:25:12] Like,
[04:25:13] Thank you.
[04:25:14] the thumbnail.
[04:25:15] I was talking earlier about pushing the interactivity to the leaves or thin layers.  This puts the interactivity at the root.  It's like it just doesn't.
[04:25:24] at least with their guarantees in terms of loaders, like in terms of it being at the route level,  you don't have to worry about fetch cascades, which is a problem when people just let anyone  interject server components anywhere. But the challenge again is like,
[04:25:39] the layouts become client components, which makes no sense, right? I, I, I,
[04:25:44] If they support use client as well, then I mean, it's fine.  I would just build my remix apps the same way that I build my next apps and just basically forget that there's a default export and just build everything from the loader.
[04:25:58] Right? That's essentially
[04:26:02] You want the root to be...
[04:26:05] But then I'd be using use client in there as well, like projecting.
[04:26:08] server content, client content, having client content being projected into the server content
[04:26:17] is
[04:26:18] is fine, but it also like,
[04:26:22] It's like the wrong banding.  I don't...
[04:26:26] It's fine.
[04:26:29] Anyways, okay.  Let me just scroll up and see what I want to talk about.
[04:26:34] Yeah, let's get back to
[04:26:38] Here, where are we?
[04:26:45] Thank you.
[04:26:54] *Sigh*
[04:26:56] Oh.
[04:26:58] Uh, no, their loaders return server components. I showed this a bit last stream, but essentially, you have a remix loader, it returns, it can return server components. And then,
[04:27:09] Basically, when you use your loader data, when you go like use loader data, you get server components back and then you can inject those into your client page.
[04:27:22] Yeah, it's a migration path version.  But like anyone who's been following Stream, I've been spending a year trying to figure out if there's a hybrid universal model.
[04:27:31] Um,
[04:27:33] That's not it.
[04:27:35] Like, I mean, it's fine, but it also, it defeats the purpose of server components enough that I don't think it matters. Like, that's the way I'd implement server components. If I want to be like, hey, guys, I got server components. Okay.
[04:27:50] like,
[04:27:51] Thank you.
[04:27:52] Like it's novel, but...
[04:27:54] But it's also kind of like, who cares?  Like, I mean, if that's their intention with that, they are freaking geniuses.
[04:28:03] Because...
[04:28:04] You don't really adopt the composability in the same way when you do that way. I mean, I already said that I don't think server components are actually composable. So like that aligns.
[04:28:12] I think me and Ryan Florence agree about a lot of things.  So I don't know.  But if I was being a pessimistic, sarcastic kind of person here...
[04:28:21] I might even take this approach as just a way of placating people when they don't actually really believe in them.
[04:28:29] Maybe.
[04:28:34] Right.
[04:28:35] Thank you.
[04:28:40] So, yeah, I mean, maybe it's the smartest move.  I think the problem...
[04:28:47] for any React framework right now is that
[04:28:51] And this includes Astro to a degree.  People go...
[04:28:54] well, I want to choose a React framework  because React tells me to choose a framework.  So I want to choose a framework  that I know will support React into the future.  And if you don't support RSCs,
[04:29:04] or you aren't fully react, it's like a bad stigma. Like,
[04:29:09] If you're, you know, where if you go, oh, I want to support React the best way possible, I have to use Next.js because Next.js supports blank.
[04:29:17] If Remix doesn't support the stuff coming from the React core team along those lines,
[04:29:22] it looks like they're not the blessed path.
[04:29:27] So it's an interesting tension to walk, right?  And I said it affects Astro because to a certain degree,  like Astro will never be the best way to walk
[04:29:37] create React apps from React's perspective.  They'll never edit.  There's a reason it's not on the first page of the docs.  When you go into how to, they recommend Gatsby remix,  and next Astro's on the other page.  You know what I mean?
[04:29:49] Like,
[04:29:51] Thank you.
[04:29:51] Nobody wants to be pushed off onto that other page.
[04:29:55] So like...
[04:29:57] I do think that like,
[04:30:01] There's...
[04:30:01] you know you can drag your feet for a while you can you know do whatever needs to be done but like
[04:30:07] I do get that sense.
[04:30:13] Yeah, yeah, I definitely agree.
[04:30:16] But on the other hand,
[04:30:18] I don't know who, it's not like you can blame one side either way.
[04:30:23] React has been building all this, like at the same time, Remix was building all these APIs. React core was also building them. It's not like I know React released them later, but we all knew they were coming.
[04:30:35] Right.
[04:30:36] I knew this because React actually released
[04:30:39] documents showing what's coming, working groups, all these kind of things.
[04:30:44] So when I built...
[04:30:46] a bunch of features into solid, I kind of copied, inspired by React, whatever you want to take,
[04:30:51] into adding transitions and stuff, but then we release them.
[04:30:55] And then we built our whole ecosystem, including the router, on these primitives back in 2019, 2020.
[04:31:01] So at the exact same time, Remix was building all their features. I was sitting there building the  exact same features or our versions into Solid, into Solid Router, except I had
[04:31:10] the primitives that were coming in React.
[04:31:12] years later.
[04:31:13] stuff that hasn't even come completely now  because we're seeing the gap  on the client-side data fetching story.  I had client-side data fetching story.  So I watched this play out
[04:31:24] And the whole time,
[04:31:26] It was like, oh, man, all these really cool things they do with action, all that.
[04:31:29] You literally go like use transaction and you delete like.
[04:31:32] three quarters of the code, you know, their transition loading states again, suspense. It's like all these things were
[04:31:38] But they couldn't access them because they weren't ready.  So they were in a really hard place.  Do you wait for React or do you build different versions?  So while React team is very gracious, and there were influences, definitely.  Remix's direction helped shape.
[04:31:53] I think...
[04:31:54] optimistic updates from Remix, everyone copied. Everyone knew, my gut is everyone knew there was going to be something
[04:32:02] like actions, right?
[04:32:04] It was obvious to me in 2020 when I first added, you know, the RPC style versions to SolidStar. We had we had
[04:32:12] or was it 2021?  We had a version of server actions.  They weren't compiled, but they were proxy based,  like right from 2021.
[04:32:20] And like,
[04:32:21] I think people could kind of feel that that was the direction.  The React core team has got a good pulse on this.  But I think the optimistic updates Remix showed with the progressive enhancement was genius.  And I think stuff did back influence them.  But I think React was already on this thing.  They knew they needed nested routing.  They knew they needed these pieces.  I knew I needed these pieces.  I think it was dead obvious.  But the problem is Remix couldn't wait for React to deliver these pieces, even though everyone knew that React was building this stuff.
[04:32:55] Right. So like...
[04:32:58] I don't know.
[04:33:00] This is...
[04:33:05] Yeah, I don't know much about React actions. How do they different from our actions? I didn't really catch the difference.
[04:33:13] I probably should look into that.  I saw the release and I was just like, okay.
[04:33:16] I saw that they had a way to natively support stuff, but I didn't look too close into it.
[04:33:23] Right.
[04:33:24] But...
[04:33:25] What?
[04:33:26] The...
[04:33:31] Yeah. Yeah. I mean, it's a tricky place to be in when when talking about like the remix scenario.
[04:33:38] Um,
[04:33:42] Thank you.
[04:33:44] Yeah, okay, sorry, I missed this part.  Yeah, taint is tricky in general  because we were playing with something with Bling  on a compiler side,  but you also have to handle references coming out
[04:33:55] You have to tell the serializer,
[04:33:58] In our case, and React case, I think we own the serializer.
[04:34:01] So like we have some power there.
[04:34:04] I was talking to Alexis to see if we can do something like Taint right at the serializer level.  I think that's really the only way to go.
[04:34:12] Bye.
[04:34:15] Again, this is the advantage of being dialed into the core team.
[04:34:21] Oh, yeah, yeah, yeah, yeah. Oh, yeah, the added, oh, you're talking about the Zod stuff.
[04:34:27] Right, right, right.
[04:34:33] Yeah, that makes sense. Yeah, I mean, the protocol for server RPCs is framework agnostic. You don't actually need that's why we were building bling, you don't need to be tied to a framework. But actions are tied to routing.
[04:34:47] Right, so...
[04:34:49] If you have a...
[04:34:50] React or solid framework.
[04:34:54] They have to be somewhat router aware.  So...
[04:34:58] Yeah, I don't see how you do it in a framework agnostic way unless your framework is framework agnostic to begin with like Astro is, right?
[04:35:04] Mike.
[04:35:05] They can do it because it's tied to Astra's approach to routing.
[04:35:11] Yeah, that makes sense. But yeah, the Zod validations is clever. It's tricky.
[04:35:16] It's one of those things that it's like,
[04:35:18] Thank you.
[04:35:20] I don't know.
[04:35:21] Sometimes adding, like, we have a version with Zodd validations in our ecosystem.  I think it's called PRPC, which takes our server functions and adds Zodd validations.  But it's like building that core is making a bigger something.  Well, first, it assumes Zodd.  And to a certain degree, I don't know.  They...
[04:35:38] I'm sure they can make it accessible. Like for example, big,  I'm big on the Valabot on, on this side, you know, it's,
[04:35:45] extremely smaller and I think it's faster too than Zod.  Tying to specific libraries is a dangerous proposition.  You have to consider about, but anyway, I'm just...
[04:35:58] Thank you.
[04:35:59] diving down specific. Let's keep on moving on.
[04:36:04] Um,
[04:36:05] Thank you.
[04:36:06] Anyways, yeah, so I got a few more. Let's get a few more discussions, see if there's any more hot topics we want to talk about, right?
[04:36:15] Thank you.
[04:36:20] Okay, so when did I last stream? Let's keep on going.
[04:36:26] Pitch solid at Amazon.
[04:36:28] That's cool.
[04:36:35] I don't know why I grabbed this Adam Aracus post. He complains about everything.
[04:36:41] He's talking about how caching invalidation is really poor with RSCs and
[04:36:47] uh
[04:36:48] It's just because of the render model, everything needs to be cached.  I'm not worried about that. We already talked about
[04:36:53] Okay, this is a good tweet. I think it's important because it's related to what we were talking about with suspense. We never released official suspense board in the client because it leads to client waterfalls. Instead, we shifted to an RC strategy. I'll let you read between the lines.
[04:37:08] Thank you.
[04:37:09] Huh?
[04:37:10] Oh man, TK Dodo is great.
[04:37:14] Okay, everyone, you can use suspense for data fetching now.
[04:37:18] Uh.
[04:37:19] Thank you.
[04:37:20] Okay, I get what he's saying.
[04:37:23] Thank you.
[04:37:24] on like Seb working through RSCs, working through this stuff, I heard this from Dan too, they were  they were not happy with data fetching waterfalls, which is why they've never made like a create  resource API or like they never made like a, you know, like the like we had, they showed a  hypothetical one in one of their early experiments, but they never released it. So from that perspective,  even used didn't come out until React 19. So like from that perspective,
[04:37:49] I can see what he's saying here.  What's interesting, though, is that
[04:37:53] They did trying to support third-party libraries like React Query,  be all like, hey, you guys, you can...
[04:38:02] You know, you suspense today.
[04:38:04] simply by using lazy or use one of our
[04:38:07] partners and they push people to use
[04:38:09] if they want to use suspense, use React query, use, you know, a few of the other libraries out there.  And I remember that I remember them being like really excited, like, but look, we support suspense.  And like it was the only way to use suspense and react during the react 18 time period.  So while I get that they said it wasn't official.
[04:38:25] there was definitely like messaging that was like,
[04:38:28] You can use suspense today with these solutions in the clients. So
[04:38:34] Yeah, I can understand why it's awkward from the ecosystem standpoint.
[04:38:39] But it's also like,
[04:38:43] Yeah, I think it's interesting. I think
[04:38:48] I think perspectives have changed a lot over the last couple of years.
[04:38:52] And I think people probably...
[04:38:55] need to kind of acknowledge that even the React team is learning.
[04:38:58] Right.
[04:39:04] Thank you.
[04:39:04] Thank you.
[04:39:09] I'm very thankful that React rolled back  in suspense gate. We're willing to work with us.  I think the future is bright as ever. Now this is where I go next.  I'm increasingly concerned how much React is pushing render  as you fetch, hoisting plus preloading as  the blessed, and last week almost required
[04:39:24] too soon approach for client-side data fetching, despite the current state of the ecosystem.  Regardless of the library you use to fetch client-side data, if you're not using a framework,  SSR-level route loader or async paradigm, your solution probably resembles some kind of hook.
[04:39:36] I'm happy about the concern for blah, blah, blah. Relay is one of the few libraries you could argue.
[04:39:41] Colocation on the hand feels natural, blah, blah, blah.
[04:39:44] You got server components for film nicely. My point is RCs are not the only answer to co-located data fetching and honestly still requires some kind of hoisting convention, blah, blah, blah.
[04:39:53] Thank you.
[04:39:54] I'd like to see more attention going to retaining something awesome DX being able to co-locate data requirements uses.
[04:39:59] with my blah blah blah, sorry.
[04:40:04] Yeah, this is a great post from Tanner.
[04:40:06] Please don't kill co-location.  Well...
[04:40:09] Thank you.
[04:40:11] Ah.
[04:40:18] Thank you.
[04:40:20] I will say to him this much.
[04:40:23] While they shouldn't kill it,
[04:40:26] it's never going to be guaranteed to be optimal.  And usually the mental overhead of knowing that is probably not worth it.
[04:40:36] yeah I we don't have to kill it but we have to be aware that it's probably not great I know  everyone pushed this way but like there's a
[04:40:46] I think the Rebix guys were some of the first in the React community to really be like, we need loaders, you know.  But it took them a while to even get them into the router, right?
[04:40:54] Whereas like Svelte,
[04:40:57] um solid other we already knew this and we'd already like knew that this was valuable even on  the client side i think everyone knew this or should have i don't know how the dialogue got  so far where people thought they couldn't didn't need to hoist
[04:41:12] It's kind of crazy to me, but...
[04:41:15] It is what it is.
[04:41:20] Oh, we had eight in here earlier.  I should have asked him what this meant.
[04:41:25] I know what it means.  He was just saying, remember I told you before,  earlier in the stream, that I couldn't figure out  how to look at React compiler and figure out
[04:41:35] what actually runs.
[04:41:37] because I couldn't introspect because the compiler would remove all my introspection.  It looks like Aiden's found a way around it.
[04:41:44] where he's using his own compiler tricks, probably, and his own profiler to actually be able to tell you what the hell's going on here, which is actually just...
[04:41:54] Lovely because this is
[04:41:56] This is pretty cool. Obviously, this is for his performance tool that he's building with Million to help increase the performance of your React app to show you where those pitfalls are.
[04:42:04] But, um...
[04:42:06] Yes, thank you, Aiden. I think I should look at this a bit more so I can actually show the difference between reactive rendering and solids rendering. I wonder if the way I could use...
[04:42:16] his tool on solid as well and then we can compare straight up because my
[04:42:20] I think that might be the only way that I can fairly show...
[04:42:25] the difference between signals and that there is a difference.  I just can't show it, but this would show the difference.
[04:42:33] Mm.
[04:42:35] No, people co-locate for because if your tree gets bigger or large enough,
[04:42:42] you start getting duplication when you split.  Anyone who's used large MVC,
[04:42:46] applications, especially stuff that we're doing around like 2010 on the client.
[04:42:52] You get to a point where you're like recreating.  If you're not careful, you're recreating things.
[04:42:59] like view state in this other tree if you don't co-locate.  There's definitely imbalance here. The things aren't one for one, like there's overlap.
[04:43:07] I don't think we kill all code location, but I think data fetching does need to be hoisted up to appropriate nodes. That's my perspective.
[04:43:15] But otherwise, if you pull out too much, there's a lot of duplication.
[04:43:23] Thank you.
[04:43:24] Thank you.
[04:43:25] Thank you.
[04:43:27] Thank you.
[04:43:28] That sounds like a lot of fun.
[04:43:36] There's a certain chicken and the egg problem.  I'm gonna identify with React on this side.
[04:43:41] Dev tools might, if they waited for everything to be ready, no one would adopt, like it would take forever. Like they need people to be on board to help build these things. Part of this.
[04:43:51] You saw it with hooks too.
[04:43:52] They rely on the community
[04:43:54] to propagate stuff out there.  I rely on the community.  Sure, React's development manpower is...
[04:44:02] might be
[04:44:04] in the ballpark.
[04:44:05] like the like actual paid people around meta and bursell working on react might be in the ballpark of you know
[04:44:11] Let's estimate the...
[04:44:14] About 50 times more resources than I have working on salt, maybe 80 times more.
[04:44:21] But even with that many resources, you can't get everything perfect. You need the community is like
[04:44:27] a 10,000x multiplier on this.  You know what I mean?  Like, so...
[04:44:32] I think they released RSCs at a fairly reasonable time.  I think they had to be careful around messaging  of what was production ready.  But other than that...
[04:44:42] They had to get them out there at that time to get to the adoption where they are now.
[04:44:47] Thank you.
[04:44:50] Yeah, Next as a product has to worry about that.  React as a core team, I think...
[04:44:55] tried to get stuff out at a reasonable rate.
[04:45:00] you
[04:45:01] Right.
[04:45:03] What else we got here?
[04:45:07] I wonder...
[04:45:08] Yeah, do we want to talk about that yet?
[04:45:12] Yeah, okay. Yeah, let me look here. Some solid stuff.
[04:45:16] More components. I love the ecosystem just keeps on growing. Every time I look, there's like a new template. Okay, official solid start template code sandbox. Lovely.
[04:45:25] I'm just doing some solid news.
[04:45:27] for a moment, 2T UI.
[04:45:32] SolidRenderingNativeC plus.
[04:45:34] I get giggles every time I see people do crazy stuff like this.
[04:45:38] Where like, cause like who would have thought  a JavaScript framework was going to be running native code,  you know,
[04:45:45] I know React does this, but a lot of people also thought it was because React's VDOM.  Well, news, it's not.
[04:45:50] And it's just so cool to build something, you know, as a JavaScript developer who, you know, just builds websites and then see people make like these native app applications and you're just like,
[04:46:00] This is nuts.  Anyway.
[04:46:03] Thank you.
[04:46:03] Um,
[04:46:05] I don't even know what this means, but maybe someone in chat can tell me.  I think SolidJS is the Apex twins of frameworks.  Real people get it.  It's fired.  Everyone's super underrated.
[04:46:14] Thanks, Ben Holmes.
[04:46:16] I think that's really high praise.  I just don't know anything about it.
[04:46:23] Um...
[04:46:26] Yeah, see, primatic dropping drop. All these posts are people porting libraries. I'm stoked for our ecosystem.
[04:46:33] Our weakness on ecosystem, obviously, is jobs and training and teaching and that side of things.  But the libraries just keep on coming.
[04:46:48] Thank you.
[04:46:49] Yeah, I have no clue.
[04:46:52] Absolutely no clue. I, uh,
[04:46:56] It's a less known electronic band.  Okay.  I,  I listened to punk rock,  heavy metal and like,
[04:47:03] death metal. I don't
[04:47:05] And some amount of pop.
[04:47:07] But yeah.
[04:47:09] I don't know electronic and I don't know hip hop or rap or whatever.
[04:47:13] Thank you.
[04:47:18] Um...
[04:47:24] Thank you.
[04:47:27] Yeah, I don't know.  People could, there's, okay, I guess we're just caught up here.  Oh, one more shout out, which is kind of cool.
[04:47:35] I don't know. The team at VoxLab deployed vote compass for the upcoming election. Answer the number of questions to learn. So...
[04:47:40] The UK election company software is built in solid. That's a lot of users. I'm excited to see this in action.
[04:47:49] Anyway.
[04:47:51] Okay.
[04:47:52] That's my solid news update. Let's uh
[04:47:55] Let's go back to a couple more.  Let's talk about JS survey came in, JS survey.
[04:48:08] I made a solid website for someone and he made me remake it because of a
[04:48:13] auth library like clerk. Okay. But it wasn't clerk because I think we have good solutions in the clerk space.
[04:48:19] Um,
[04:48:20] are reasonable ones.
[04:48:23] But yeah, it's interesting.  I guess very specific libraries makes things hard.
[04:48:29] So like if there's like a specific requirement,
[04:48:35] you
[04:48:36] Yeah, I did that earlier.  We actually started the stream with that.
[04:48:45] Thank you.
[04:48:46] Thank you.
[04:48:51] Solid with Quickify.
[04:48:53] Yeah, I'm actually interested the other way around.  It's funny, before Quickify came out or any of that,  I made a quote sandbox to show how it could be done with Solid.  I wrote it like...
[04:49:02] three years ago. I'm just, I getting reacts ecosystem libraries is like mostly the last thing you want to do.
[04:49:10] I understand in that case,  that's probably like where you want to be,  I guess you have no choice,  unfortunately,  but like,
[04:49:18] you don't want the preact thing to happen you don't want everyone just to like start using react  libraries and not building libraries there because react libraries will never be the good solution  for you ever so it's like it's really awkward right like think about quick like small fast  partial and then you get react and just like oh like it's like the antithesis like if someone has  to use a react library like you're like okay i begrudgingly accept it but it's like like
[04:49:43] The last thing a quick app wants on its page is anything React.
[04:49:54] Maybe. Hard to say.  I'm hoping it will have to be after Vite 6.  The reason Saul started is the way...
[04:50:01] that it is, is largely because
[04:50:03] We needed multiple builds and environments and getting that in Dev and Nitro is difficult.
[04:50:09] um so we can't have dev and nitro which means we can't have full nitro and hence the whole thing  beat six will is a big part of changing that like we needed  what vinci does in order to power the stuff we do which means that like
[04:50:23] Yeah, we need Vite to upgrade to Nitro update. I'm glad that Vinci has influenced Vite so that we can do it. But until that happens, it's like just not possible.
[04:50:34] Thank you.
[04:50:36] Good.
[04:50:39] This is probably a fucking nudity.
[04:50:42] Yeah.
[04:50:47] *sniff*
[04:50:48] All right. Anyway, we got a couple more before I'm done here.
[04:50:54] JS framework or JS survey came out again.
[04:51:00] I see that Rich Harris likes my view of the chart.  It's funny, back in the day, they only had rank.
[04:51:05] They did not have...
[04:51:07] value. So it was always these very defined differences. And he's saying,
[04:51:12] Svelte is the most interesting framework consistently since it came out, which is pretty cool. It means that
[04:51:21] of people who haven't
[04:51:22] not used it
[04:51:24] people are interested in learning it. If you look for solid, solid
[04:51:29] was...
[04:51:30] third was second
[04:51:33] couple years ago. Last year was third behind Quick and then is back to second again this year. So
[04:51:40] This is a really good metric to show that people...
[04:51:44] onboarding
[04:51:46] uh, part of your marketing is working like that. People who, who, who haven't used your framework  before really are interested in it. I mean,
[04:51:57] Um,
[04:51:59] Yeah. Is this interest or positivity? Yeah, yeah.
[04:52:03] And I think it makes a lot of sense.  I think Svelte is one of the more interesting solutions out there, definitely from that  perspective.
[04:52:10] Um,
[04:52:13] Okay.
[04:52:15] I also did one of those ones as well.
[04:52:20] This used to be the front page.  It used to be satisfaction.
[04:52:24] And this is, so this is the metric we care about on the solid side.  Felt interest.  I think that,
[04:52:30] So retention is based on of people who have used it, who would use it again, like who liked using it.
[04:52:37] And again, when you have a smaller user base, this makes sense, but it means that
[04:52:42] solid for the third year in a row. Users of Sol are the happiest users. Svelte is right behind. Like, we're basically neck and neck on interest in
[04:52:52] And
[04:52:53] on satisfaction. So I'm like not surprised. Felt
[04:52:58] is more known to people.  So more people are interested in learning about it.  Solid has smaller user base that's felt.  So more people are happy using it.  So it's,  it's,
[04:53:08] it's kind of here nor there. Um,
[04:53:11] But it was fun looking at the survey.  I don't have time to go too deep into it.
[04:53:15] But, um,
[04:53:18] There are parts of the survey that have made me a little bit more pessimistic.
[04:53:28] Yeah.
[04:53:28] It's about all those people who like JSXLs, people who don't. Basically,
[04:53:34] So is a great thing for WordPress folk that need more. You guys are just
[04:53:37] Okay.
[04:53:39] In any case, um,
[04:53:41] Thank you.
[04:53:42] I don't know.
[04:53:45] One thing that's alarming is something...  Let's see if I can pull this up real quick.  JS...
[04:53:51] state of
[04:53:54] you
[04:53:55] Fred K Scott tipped me off onto something, and I think this is really worth talking about  in terms of libraries here.
[04:54:02] There's this...
[04:54:03] Bye.
[04:54:04] Now, where is it?
[04:54:09] I want to this chart.
[04:54:11] I want to just talk about this for a moment.
[04:54:15] Fred pays a lot of attention to this because generally speaking,
[04:54:19] You start down here and neutral in terms of negative opinions.  And then you want to get to positive opinions as your usage goes up.
[04:54:28] right, if you're really high up here, it's natural that as your usage goes up,
[04:54:32] things swing back. It's a crescent, so to speak.
[04:54:36] And,
[04:54:37] Thank you.
[04:54:39] You know, you could see some interesting frameworks like that kind of just go like this off.
[04:54:43] The thing that concerns me
[04:54:46] and Fred mentioned it too, is
[04:54:49] Thank you.
[04:54:49] Frameworks?
[04:54:52] The sentiment...
[04:54:53] is going more like we should be heading this way.
[04:54:56] in this arc. And if you look at it, a perfect example is VTest.
[04:54:59] And I think this one here is Vite.
[04:55:01] Right.  Well, you see these things arcing up like this.
[04:55:05] But that's not what's happened. Playwright's another one.
[04:55:09] That's not what's happening right now.  What we're seeing is a lot of tools are turning further left sooner than they should be.
[04:55:17] Like, I don't know, is that Svelte?
[04:55:19] Um...
[04:55:22] Uh.
[04:55:23] - Yeah.
[04:55:25] Turbo repo.  This lower corner used to be full of hope.
[04:55:29] But look at this.  Here's solid.  June.  We're already boomeranging back.  According to this slightly,  not much,  but it's something that I'm looking at.  Tori's okay.  Okay.
[04:55:39] Look at Remix. Remix is just going straight backwards.
[04:55:43] quick. It's just going straight backwards.
[04:55:46] Like,
[04:55:47] I think the sentiment down here in this corner is,
[04:55:51] Turbo Pack.
[04:55:52] Straight backwards.
[04:55:54] Turbo Repo,
[04:55:56] Less so.
[04:55:57] I think people right now are less accepting of new things.
[04:56:01] this year and I think this might look well Svelkit boomeranging too
[04:56:06] This last year was hopeful.  Everything was kind of coming up, curving up.
[04:56:10] This year, things...
[04:56:11] with exception to a few things. Look, Astros still
[04:56:15] positive.
[04:56:16] But most of these early projects now are boomeranging back hard.
[04:56:20] And or like, as I said, they're just like going straight backwards, like Remix or Quick is.  And it's like it's kind of concerning.  I'm going to put out there.
[04:56:29] The huge one going back, I mean, webhack.
[04:56:32] What else are mocha?
[04:56:34] Ones that are going back down are like the worst.
[04:56:37] Parcel.
[04:56:38] Another one.
[04:56:40] Gatsby.
[04:56:41] Cordova?
[04:56:46] But being here isn't even bad.  This is expected.
[04:56:49] This is your end of life cycle. If you're at the top heading backwards,
[04:56:52] You did a good job.
[04:56:54] Like you get the standing ovation on the way back.
[04:56:57] It's very troubling when this side can't
[04:57:00] keep going and then get pushed over too soon.  It's very troubling to,
[04:57:05] Yeah.
[04:57:09] Yeah, I...
[04:57:11] Yeah.
[04:57:17] Yeah, people...  Yeah.
[04:57:20] Yeah.  I mean,  the ones that are most concerning,  obviously it was if you go straight back,  but like this is,
[04:57:25] I'm hoping things pull out of it, but right now it looks like in general, people are less open to new solutions as they were the last two years, which is something that I keep my eye on.  Anyways, that's my takeaway here.
[04:57:41] Thank you.
[04:57:42] so I don't know.  I'm,  I'm paying attention to this for all the good stuff.
[04:57:48] You know, that's in here. There is that. Okay. Um,
[04:57:53] Okay, we talked about state of JavaScript.
[04:57:56] We talked. Okay, that's good on that. Let me look at my...
[04:58:00] Solid. I think I'm just on bookmarks now.
[04:58:02] Oh, no, there's one more.
[04:58:06] Yeah, so this was an interesting conversation.
[04:58:09] I don't know how to get into it, but it is about this, right?  Where...
[04:58:13] Why do you think Svelte is not more popular given these constantly positive results?
[04:58:16] And then people like ecosystem is hard. It's been five years. This discount, it's been more than five years, been like seven years of salt, but five years since salt three discount you pride the start not a reason you would never hear someone say Angular has a huge vendor lock in a conversation. People love salt. Why is it not adopted frequently?
[04:58:33] People want to use Svelte, but the business reality seems that Cycle update new frameworks for longer than a few years.  Again, historically, this is not true, but even Greenfield projects are not rare and not subject to this limitation.  He's right.
[04:58:42] People aren't choosing new frameworks for Greenfield, which is crazy.  I talked about this before.
[04:58:48] My naive assumption that it does not have to feature maturity for another place, but I want more information. No, it's not that.
[04:58:54] But if you look the last eight years, it's more than technology or features.  When you consider how quickly people adopted React back in 2014 compared to the maturity of the tools right now, it isn't even close.  Modern tools are miles ahead in that regard.
[04:59:04] People, job market wants stability.  There's a perception that JS is constantly evolving because it is.  And it isn't a fear about best practices.  React changes every few years.  They just want to go to the answer to consolidate.
[04:59:15] What does Rich say here?
[04:59:17] Thank you.
[04:59:17] Question of saturation. Yeah, I mean...
[04:59:20] you
[04:59:21] It is mind-boggling, this change of sentiment, right?
[04:59:26] It's like...
[04:59:28] People were pessimistic and then they were kind of hopeful, but now they're pessimistic again because the economy probably they're not trying new things and I think
[04:59:35] that
[04:59:37] Like,
[04:59:38] Yeah, this is just, it's a tricky place to be in that people aren't even choosing arguably better solutions for Greenfield.
[04:59:45] We talked about the compiler.
[04:59:50] Tenor, I don't have much to say this.  He's basically describing something we had in Solid.
[04:59:55] for years, which I already talked about. Um,
[05:00:00] That just leaves one thing.
[05:00:05] I think there's such a way to use React system where they're packed for almost everything. Well, the funny thing is React set what those everythings were. There wasn't a package for everything when people adopted React. There wasn't even for the first three or four years.
[05:00:16] And the packages that matter in React actually do change rapidly over time.
[05:00:21] I always use Shad C as an example  where it came out of nowhere and then everyone had to use it.  So it's like
[05:00:28] I don't know.
[05:00:34] No one got fired for selecting view in 2014. People got fired because they selected view 2 in 2020.
[05:00:41] Yeah, exactly.
[05:00:48] But yeah, it is weird.
[05:00:50] um what do i got i'm glad they're type of syntax discussion now you know
[05:00:53] I've tried to explain why SolidWorks the way it does for ages and was met with developer has to write parentheses. Yeah, that's because it's consistent.
[05:00:58] was actually happening.  Yeah, this is just...
[05:01:02] There's been some syntax conversations.  I'm glad that they're switching around.  This is my last little bit.  I don't really care about syntax that much.
[05:01:10] Like when someone goes, which one of these seems more like HTML?
[05:01:13] you know,
[05:01:15] This or this.
[05:01:17] like,
[05:01:18] This is such a loaded question because
[05:01:21] Obviously, this is...
[05:01:23] syntactic HTML, but this V model is whatever the hell that is. And then this obviously is JSX. So
[05:01:30] It isn't.
[05:01:31] But it's like,
[05:01:33] Who...
[05:01:34] cares? I think when people ask this question, they're sort of implying that people actually  care that it's like HTML, where in 99% of the cases, it doesn't matter. It's like HTML.  What's actually interesting is what vModel is, but
[05:01:46] you know, whatever.
[05:01:48] You know, like we all like ref in JSX.  What the hell is that?  Like there's always some kind of special thing.
[05:01:55] So I don't know.  So like this is an example of the type of syntax conversations that I,
[05:02:00] get pulled into that really don't matter.
[05:02:03] This is...
[05:02:04] This is an interesting conversation because...
[05:02:08] Because...
[05:02:10] Thank you.
[05:02:12] There's a conversation where Evan said something about...
[05:02:15] low cognitive overhead of assignment based directory also compiler approach is too magical  work against hand tissue works well for svelte's audience but blah blah blah  because they were talking about why you didn't do the ref sugar like svelte style
[05:02:27] And then Rich, you know, and Evan's like composition API works exactly the same in and outside of view components.
[05:02:33] And then he showed this example, which is kind of mind boggling, which was like, look,
[05:02:39] If I render uppercase,
[05:02:41] It works. But if I put message here,
[05:02:44] Mm-hmm.
[05:02:45] It does object, object.  And you're like, but message is a computed.  Why doesn't it automatically unwrap?
[05:02:50] But you can...
[05:02:51] But message lowercase is also ref.  And yet I can call a function on it and treat it like,
[05:02:58] it isn't actually...
[05:03:00] Like where's the dot value?  You know, where's the...
[05:03:03] Function call, like, this is...
[05:03:06] kind of bonkers that this works almost exactly the opposite way.  Like they actually see the symbol and compile it, but here they don't.
[05:03:13] I don't even know how this works, to be honest, right?  And obviously he shows in Svelte, it's the same in both cases.  But it is an interesting thing that...
[05:03:22] Bye.
[05:03:23] Thank you.
[05:03:25] Svelte is all magic all the time.
[05:03:29] And it comes with those limitations that they've classically had.  View is magic sometimes for convenience, but it causes weird inconsistencies.  And then in Solid's case, we're like, just freaking call the function.  So I don't know.  I'm glad this is where conversations have gone on syntax, unless of...
[05:03:46] This, although to be fair, this has a thousand views at this point.  I probably aided in that.
[05:03:51] where this conversation probably has 80.
[05:03:55] I don't know. I want more of this because I think syntax for a reason is interesting. I think
[05:04:00] this
[05:04:01] actually is completely
[05:04:03] pointless. I actually responded to this just to be facetious, just to be kind of annoying,  where I was just like, seems like HTML definitely is a desire to have something seem like it's not  because like, let's face it, this stuff all gets compiled to JavaScript in the end.
[05:04:16] Who cares?  And some people brought up no build reasons and all this,  but like,
[05:04:22] Sure.
[05:04:22] You know, and if people but let's face it, if you're using Vue,
[05:04:26] you're either, if you're using no build, you're probably not going to use JSX anyways, you're  going to use like HTM by preact or whatever. And if you're using view, you're going to use a build  step and you're going to compile this stuff to crap anyways, you get the performance and the  bundle you want. So it's like
[05:04:42] This is like the most meaningless difference in the world.  B model is worth arguing over.
[05:04:48] The fact that this is HTML does not matter.
[05:04:53] People who like A, think that Alpine and B are a viable option.  Yeah, that's funny.
[05:05:09] Self is simple and complex. Solid is harder and simple.
[05:05:14] View is the middle. Yeah, kind of.  Assault 5 is going to be interesting because it's kind of like...
[05:05:19] solid but like a tiny bit more magical i don't i that's gonna put in a really weird place for
[05:05:24] for view.
[05:05:25] because it's,
[05:05:27] Yeah, I don't know.  I guess we're going to have to see how that plays out.  Anyways, I got to go.  It is after five.  We've been going for five hours.  I've been going too long.
[05:05:37] But, you know, it's been a while.  I miss you guys.  So clearly...
[05:05:43] You know, pretty clear at this point, because given how long I've been streaming here, there was more content than I thought. I sort of got lost in the weeds a little bit on some of the async stuff, but you know, it happens.
[05:05:57] I'm hoping you got something out of it.  I've been exploring this stuff.  It's interesting to me.
[05:06:03] I'm really excited about the future here, but I recognize that there's a lot of pitfalls, potentially.  So I am...
[05:06:10] I appreciate brainstorming this stuff with everyone.
[05:06:13] *laughs*
[05:06:15] Oh, did, sorry, did Rich ever respond to that?
[05:06:21] Okay.
[05:06:22] Let me see.
[05:06:25] To be precise, I meant script section.  He's saying that...
[05:06:29] Yeah, what Evan's argument is, is that
[05:06:33] Inside the template, you're like in a different zone that has different rules. And I can argue that there's a clear boundary here, whereas just random JavaScript file kind of thing is not as clear of a boundary. I guess dots felt is a clear boundary, but he's saying like,
[05:06:48] templates are allowed to have different rules.  And I'm going to generally agree with him.
[05:06:53] This one doesn't make sense to me because
[05:06:55] I don't view this as purely a template thing when like,
[05:06:58] like I'm trying to work that out. But in general, I do agree that templates are allowed to have different rules. Anyways,
[05:07:05] um yeah sorry i realize i'm not sharing my screen right now you probably didn't see what i was saying  but yeah uh
[05:07:13] All good.
[05:07:14] You guys have a great weekend.
[05:07:17] Well, next weekend, next week's a holiday, so I won't have a stream next Friday, but hopefully you'll see me the week after.  Okay.
[05:07:24] So until next time.
[05:07:26] All right.