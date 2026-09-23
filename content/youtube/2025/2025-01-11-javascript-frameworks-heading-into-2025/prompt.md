---
title: "D1XN8j77Ntk"
slug: "D1XN8j77Ntk"
duration: "5:25:33"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/D1XN8j77Ntk.m4a"
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
[00:00:01] Thank you.
[00:00:02] Alright, sorry for the delay.
[00:00:06] Had some technical problems the last couple of days.
[00:00:10] How are you all doing?
[00:00:12] .
[00:00:14] I'll give you a few moments to catch on.
[00:00:18] I hope everyone had a...
[00:00:20] good uh
[00:00:22] Good winter break.
[00:00:25] I did.
[00:00:27] I actually stepped away
[00:00:30] From the work.
[00:00:31] for long enough to just
[00:00:34] Yeah, I don't know. It's been a while. I always feel that temptation. You know, I just can't leave, get alone.
[00:00:40] But, um...
[00:00:41] It's good. I came back refreshed. I've been doing a lot of work on solid 2.0.
[00:00:46] Come say hi in the chat if you're here. I'm sorry I started late.
[00:00:51] Thank you.
[00:00:52] Thank you.
[00:00:54] Alright.
[00:00:56] Thank you.
[00:00:58] Thank you.
[00:01:00] Thank you.
[00:01:02] Hello, hello.
[00:01:06] Yeah, so literally the day...
[00:01:11] before I set the
[00:01:14] you know, get back into things Sunday night, my computer just dies.  Just like I was doing like, I think the 15.2 Sierra or whatever OS it's on these days update.
[00:01:29] It just completely died.
[00:01:31] went in, did the disc fix or sort of the disc, um,
[00:01:37] storage fix, um, this utility, that's what it's called. And this, and, uh,
[00:01:44] It didn't find anything at first.
[00:01:47] Thank you.
[00:01:48] And then I realized you have to like show the volumes and if the volume is corrupted or something, anyways, I fixed it and then it lost my user and then I had the.
[00:01:55] wipe all my hard drives and
[00:01:57] Basically, I lost all my benchmarks.
[00:02:00] and my prototypes. Yeah.
[00:02:05] Thank you.
[00:02:08] Which sounds worse than it necessarily is because like I was committing regularly to  like the signals repo is just like the places where I was like putting stuff together and  trying it.
[00:02:20] It's actually not the worst thing, it just meant that like,
[00:02:23] Now I have to do that all again, which means that I decided to just do things for real.  And I've actually started, if you're following on the solid repos, if you look in the next branch, you'll see the beginnings of solid 2.0.
[00:02:34] Um...
[00:02:35] Yeah.
[00:02:37] Sequoia, yeah, Sequoia, yeah, I mean I should know that I've been looking at these trees. Yeah.
[00:02:42] Thank you.
[00:02:44] Yeah. The funniest thing is one of our saving graces on the store benchmarks I talked about a bunch last time is that...
[00:02:51] bunch of people in the community wanted to try it, see if they could optimize things, do their own results. So I actually pushed up a branch
[00:02:59] where I didn't only have
[00:03:01] my,  um,
[00:03:03] the benchmark, but luckily I had like
[00:03:06] 20 different snapshots of different versions of the reactivity that I was like comparing head to head. So I actually have that still so
[00:03:14] Yeah, as I said,
[00:03:15] Not bad, but it finally incentivized me.  I felt like I was starting with a clean slate.
[00:03:19] But that's not why we're here today. Today, let's see, I'm going to get into Twitch too. I probably should tell people I'm streaming.
[00:03:28] Um...
[00:03:30] Make sure that my Twitch category is in the number one for some reason.  StreamYard always puts me in like talk shows or something, which is...
[00:03:38] infinitely annoying, um, just on an aside.
[00:03:41] Let me see if I can fix that.  Yep.  Talk shows and podcasts.
[00:03:45] Oh.
[00:03:53] Yeah, let me see if I can actually fix that.  But yeah, in general,
[00:03:58] Thank you.
[00:03:59] - Thank you.
[00:03:59] I'm very excited to talk about JavaScript frameworks. I always am, obviously. But
[00:04:09] this it's always this time of year um i feel like you get a chance to like actually like
[00:04:14] dig into,  um,
[00:04:17] Thank you.
[00:04:18] you know, where things have been going. You get all those surveys coming in at the end of the year, which I haven't talked about really much on stream either. So, um,
[00:04:27] Yeah, I want to talk about the survey. I want to talk about my article. I want to talk about the state of things as I see it.
[00:04:35] Um,
[00:04:36] So,
[00:04:38] I'm pretty excited about that because it's funny.  Some people are saying that my article is spicy.  I didn't think my article was that spicy.  I leave that for the stream.  I leave that for you guys.  I leave that for chat.
[00:04:49] Yeah, I think this will be a good one.
[00:04:54] I went to our stores like yesterday. Yeah.
[00:04:58] Is there a new framework that never happens?
[00:05:01] Yeah, yeah, well, it's funniest thing is, you know, every time, you know, I'm kind of thinking like, okay, what am I going to stream now? A year ago, I came on the stream and told everyone that I was not going to stream as often, right? And this year, I didn't, I did not stream every single week.
[00:05:16] I cut it down between work and a lot of the streams I've met
[00:05:20] Might not been that interesting for everyone because I was like very deep into doing research about specific problems.  We'd have people raid us and it'd be like, what the, like, what are you talking about?  And it's like, oh, the subtle differences between reconciling nested reactivity, blah, blah, blah.  Like no one had any clue what the hell we were talking about.  Today's stream, much more general.  We're going to get that Excalibur out.  We're going to talk about.
[00:05:48] different frameworks, we talk about different tools, we're not going to be completely down the solid
[00:05:54] rabbit hole. I'm glad people are hyped for 2.0. Um,
[00:06:00] Yeah.
[00:06:01] Yeah, yeah, I finally got my eyes tested. I probably should have got glasses like 10 years ago.
[00:06:10] I have no clue how I passed my...
[00:06:13] Licensed.
[00:06:14] the last couple times.
[00:06:16] But, uh...
[00:06:18] Here we are, so yeah.
[00:06:20] I have two prescriptions. I went from zero prescriptions to two prescriptions. I basically can't see it all.
[00:06:26] Um...
[00:06:27] Anyway, yeah, so the glasses are new.
[00:06:34] -
[00:06:35] *sad music*
[00:06:37] Okay, let's make sure that people know...
[00:06:42] We're live.
[00:06:44] Let me...
[00:06:45] Present my screen.
[00:06:48] Thank you.
[00:06:54] Which one are we on? Yeah, this one. See my benchmark notes?
[00:07:00] This is like the long journey to solve the...
[00:07:03] the
[00:07:04] store stuff. I actually don't have
[00:07:07] very much in the way of...
[00:07:13] of notes for the stream.  It's going to be very off the cuff,  just the way I like it.  So that's good.  See, they already know I'm live on Twitter  because I'm streaming to Twitter.  In fact, I can see myself
[00:07:26] Ooh. But let's look at...
[00:07:29] Blue sky.
[00:07:32] Thank you.
[00:07:33] Alright.
[00:07:35] Yeah, sorry, running a bit.  So there's been some interesting stuff the last couple days  I want to talk about too when we get a chance.
[00:07:46] Thank you.
[00:07:49] Twitch.tv/ryansolid
[00:07:55] Yeah.
[00:07:57] all right
[00:07:59] Thank you.
[00:08:01] Thank you.
[00:08:01] Thank you.
[00:08:03] Thank you.
[00:08:03] Okay, cool.
[00:08:06] Thank you.
[00:08:07] Thank you.
[00:08:09] Thank you.
[00:08:10] conspiracy theory intensifies.
[00:08:15] Okay, so yeah, like the video people. Yeah, YouTube definitely helps. Twitter helps. Basically anywhere you are it it helps. Let's see here.
[00:08:24] Let's go to dev because I'm going to pull up my article. Theo covered this act, my article on, um,
[00:08:31] I'm going to go.
[00:08:32] on
[00:08:35] I'm going to pull up a Skellidros too, I suppose.
[00:08:39] Yeah, fun stuff.
[00:08:42] on its last stream on Wednesday.
[00:08:44] Um,
[00:08:45] Thank you.
[00:08:46] About a hundred percent.
[00:08:49] Whatever your percentage is. And I had a few thoughts because he ended up going on a tangent. I mean, it's funny, I guess, I guess it's just the content that I try and tackle. Like he, he, he's like, okay, let's do Ryan's article. And then it took him like three hours. You know, last time it was one of the web component when it also took him like three or four hours to get through the whole article. Um,
[00:09:10] So to be fair, that's why all my streams are like five hours, because...
[00:09:15] the topics,
[00:09:16] require, I guess, a decent amount of establishment.  But the biggest takeaway that I got when I was watching the stream was
[00:09:26] I'm kind of sick and tired of React.
[00:09:28] I know that's like a weird conclusion.  It has nothing to do.  Like, I don't have any problem.  I like...
[00:09:32] I'm just--
[00:09:33] Like...
[00:09:35] There was a sort of react...
[00:09:37] hinge on the whole content and it's fine. I mean, that's Theo's zone.
[00:09:41] But I was looking at it, and I was just like,
[00:09:43] Man, like...
[00:09:45] Thank you.
[00:09:48] I think the perspective, like, as I said, I don't blame Theo for this.  Just the perspective of web dev has shifted in such a way that,
[00:09:54] that
[00:09:57] The React lens on what I'm saying is...
[00:09:59] is annoying and frustrating to actually deal with.  So again, nothing to do necessarily with the framework.
[00:10:08] All right.
[00:10:09] You know, but like
[00:10:12] Bye.
[00:10:13] it muddles the message a lot. And
[00:10:16] I...
[00:10:19] Yeah, I've probably got quite a bit to say about React today in general because...
[00:10:25] It's been...
[00:10:26] It's...
[00:10:27] Thank you.
[00:10:28] Eh.
[00:10:29] I think there's a sentiment that's kind of been rising up
[00:10:33] And I want to kind of...
[00:10:35] take it head on at a certain point because as most people know I am a pretty big
[00:10:40] uh supporter i've always been a big supporter of react like comparatively like obviously people who  write react every day and are diehards you know are more supporters of react than i am but like  generally speaking most people are surprised of how positive i generally am towards react and  i think that's actually a very pragmatic position to be
[00:10:59] But I think that
[00:11:02] talking about surveys, talking about heading into 2025,  talking about where frameworks are today, we got to put where React sits
[00:11:11] in perspective, and my perspective
[00:11:15] Um,
[00:11:16] might be a position that doesn't get me any friends.
[00:11:21] Right.
[00:11:23] Thank you.
[00:11:23] Thank you.
[00:11:25] Thank you.
[00:11:26] Yeah, yeah, exactly.
[00:11:30] for having...
[00:11:33] ReactiveJSX, I like JSX.
[00:11:36] I know people don't like JSX, but like if you view JSX as a
[00:11:43] Templating language, which can be
[00:11:46] piecewise chopped up, then like
[00:11:51] Like, that's what JSX is to me, right?  Like, it's not like...
[00:11:55] Like some people are like,
[00:11:56] Like...
[00:11:57] streams.
[00:11:58] are things that you can chop up.
[00:12:00] You know, like when you are...
[00:12:02] putting together a string of HTML on the server.
[00:12:07] very arbitrarily. Components in a lot of template DSLs and the markup in them
[00:12:13] less so.
[00:12:14] And I think...
[00:12:16] I think that's why I like JSX, but that's a different comment completely from where I'm on React.
[00:12:24] Oh, would I still like React if there's no JSX?
[00:12:28] I mean, tag template literals...
[00:12:31] Oh, no, this statement can't be true. Like, not absolutely.  Type template literals, on one hand, you can be like,
[00:12:39] Yeah, you know, they're native, they're strings, you don't have this.  I mean, and if we ignore the fact...  I mean, it's funny, you can actually do a lot of really interesting typing with strings these days.  But the problem with type template literals is there is an expectation...
[00:12:54] that
[00:12:55] they run a certain way. They have a set semantic at runtime.
[00:13:00] where JSX has no set semantics.  So like the challenge with template literals is like,
[00:13:05] there's no way to say like, I want to defer the execution of this expression.
[00:13:10] or I want to do like schedule this here. You, when the template literal runs,  that's what you get. You can defer it yourself. You can pass functions in,  you can do all that. But then the templating DSL becomes this big clunky mess. So like,
[00:13:22] it's good and you could compile
[00:13:25] Take template literals.
[00:13:26] to be the same as the JSX or the do these things that I'm talking about.  But that would be breaking the established runtime semantics.
[00:13:34] of them. So from that pure perspective,
[00:13:37] Tag template literals are more limited. It's just
[00:13:41] by design. It's not like that they're a bad solution, it's just that they're incapable of having different semantics than
[00:13:49] the ones presented by how they're in the spec.  The same reason I did not want JSX to get into the browser, really.  JSX is incredibly powerful because it's
[00:13:59] Portable.
[00:14:00] and doesn't have defined semantics.
[00:14:03] Yeah, the troll arrived.
[00:14:07] - Yeah.
[00:14:09] Thank you.
[00:14:09] Almost all my web dev news content students and context are never done. There's a difference. When I say context and react, there's a difference of being in a world where you're aware of react and being in a world where you're aware of react and being in a world where you're aware of react.
[00:14:19] We're like
[00:14:21] react.
[00:14:23] Thank you.
[00:14:24] How should I put it? Like...
[00:14:26] it is the web synonymous, right?
[00:14:31] I feel like when you live in that world, you can't like... perfect example, someone's talking about out of order streaming, right? A technology that's been present since 1997 in some form, people were playing around in 2000, big companies, BigPipe, Facebook, you know, their old XMP, whatever stuff.
[00:14:48] It has nothing to do with server components, but in a React world since that's the only way you can do out-of-order streaming,
[00:14:55] And that's not even true in React World, because actually Remix did out-of-order streaming without it.
[00:15:02] People started, like, when they talk about it, they started equivocating it.  Like, basically saying, oh, yeah, you know, RSCs, out-of-order streaming.  And it's like...
[00:15:09] No.  You know, that's the problem.  It's like when you allow it to...
[00:15:14] narrow the scope of how you view the whole universe of the whole web. That's the problem with React. And it's funny, any popular solution is going to have this problem, especially when it's what you get coming out of boot camps. But
[00:15:27] You know...
[00:15:30] I would love if the intelligent narrative around the stuff went beyond that.
[00:15:36] Oh yeah, we'll talk about Angular today.
[00:15:38] I think Angular is doing great.
[00:15:41] Hey, Tanner.
[00:15:47] Thank you.
[00:15:48] Thank you.
[00:15:49] You haven't missed anything yet. I was just talking about how React is kind of like a central focus of conversation on web dev, but we have to make sure that it's not our whole world.
[00:15:59] I
[00:16:01] Has anyone considered leaving me out for ethical reasons, with meta being this horrible company
[00:16:05] Oh man, like it's funny because
[00:16:08] I bet you there are. I see this stuff on Blue Sky all the time, you know.
[00:16:13] Compelling reasons.
[00:16:15] But at least for the content of the stream and a lot of the stuff that we talk about here, it's...
[00:16:21] For me, it's on the mechanical side.
[00:16:27] Okay, Tanner wants me to share some news. I'll bite.
[00:16:31] What's up, Tanner?
[00:16:32] Thank you.
[00:16:37] Let's see here. What's Tanner got for us?
[00:16:42] "Three build environments, four beat plugins, dev prod, two frameworks. The crap ton of work to make it with DevLife and I love it. It's close to finishing." Okay, so he's talking about
[00:16:49] framework agnostic work with Start
[00:16:54] Depending on where you stand it seems impractical or get excited but for the benefits of the fields more inward, I feel like constraint helps you produce better results overall and more resilient to change even within a single framework's evolution.
[00:17:05] Yeah, okay.
[00:17:07] When people like Tanner are viewing the options, I'm usually the person who's like the most not into agnosticism anymore. Like I started, don't get me wrong, at the beginning of my journey, I was like, let's make everything agnostic. You know, DOM expression, Solids built on an agnostic render for signals, you know, like...
[00:17:28] But like,
[00:17:29] Man, when you want to get to optimize, you want to get to deliver, you want to get to maintenance, it's a lot of work.  The key thing is you've got to have an incentive, right?  And the best...
[00:17:37] incentive to, I'm not going to put this in Tanner's mouth so much, but like, what did I say the best use of web components were?
[00:17:44] For migrating.
[00:17:47] agnostic solutions look a lot more attractive when you're starting from point A and you want to get to point B.
[00:17:53] Point B.
[00:17:54] Just putting that out there, you know?  And the interesting thing is,
[00:17:59] how little difference for some of these higher level abstractions  that the underlying tool needs to be in terms of like
[00:18:06] producing the same results. There's huge differences in implementing it.
[00:18:09] Like you can ask the people who made React query versus made solid query.  There have been bugs on the solid query side.  I'm not going to say it's like without fault, but mechanically, what's all query does for you out of the box.
[00:18:22] you know, using solids underlying primitives is incredibly more.  It makes it way easier to be like, oh yeah,
[00:18:27] I just want this thing to work with out of order streaming. No RCs involved. I want this thing to auto serialize. I want this thing to do that.
[00:18:33] That's a billion times easier to do with save solid than it is to do with React.
[00:18:38] It's an interesting journey to watch, you know,
[00:18:43] people kind of step back from that
[00:18:45] single worldview. So I think that's probably where Tanner is getting to here.
[00:18:49] React will die eventually.
[00:18:51] I'm just...
[00:18:53] Let's see if I can actually highlight this.
[00:18:57] Okay.
[00:18:59] I'm happy to support you.
[00:19:00] Frameworks in their heat, but I've used to bank on them for success. Cool.
[00:19:07] Thank you.
[00:19:09] Thank you.
[00:19:12] Thank you.
[00:19:13] Right now it's still in DOM expressions. We'll make a call at some point.
[00:19:20] Thank you.
[00:19:20] I don't know.  I'm just trying to get stuff done.
[00:19:25] Most of the stuff is...
[00:19:26] Portable. Okay, so let me continue on here, right?
[00:19:31] *sniff*
[00:19:32] Just keeping this in mind over the this whole stream
[00:19:38] as we talk about the different topics, I think will help.
[00:19:44] Thank you.
[00:19:47] Thanks for saying that. I appreciate it.
[00:19:50] Okay, so...
[00:19:54] I was I'm serious. I wasn't going to write this article.
[00:19:58] I wasn't sure if I was going to do this stream.
[00:20:00] Um,
[00:20:03] I ended 2024...
[00:20:06] It's so funny because right now I feel like really energized about the new stuff I'm doing.
[00:20:10] you know, but I ended 2024 kind of on a low note, right? Cause like
[00:20:15] We've been and it was kind of evident halfway through the years because we've been
[00:20:20] working on all this new stuff since about 2020. Like there's been a ton
[00:20:25] of innovation in the space for the last four to five years. Tons.
[00:20:29] Lots of new ideas, new architectures, new approaches, new...  Like, people are trying...
[00:20:35] Like...
[00:20:36] It's that in itself initially was refreshing compared to how it'd been before.  If you go back to 2016 to 2020, like the four years before that, you had the whole like,
[00:20:48] I mean, I don't have to look up the article.  You guys all see it.  The JavaScript fatigue thing.
[00:20:51] Don't get me wrong, the fatigue's still there, but people were like, being all like meh meh meh meh meh, right?  And then it was like, "Okay, well, I don't want to deal with this. Just give me Create React app."  It was like, people got angry at you for creating a new framework.
[00:21:05] There was like legitimate, I've talked about this before, like there was hostility.
[00:21:11] We're during 2020
[00:21:13] there is less hostility in the last few years.  But the funny thing is,
[00:21:16] as Theo actually noted on stream is,
[00:21:19] How many new front-end frameworks have come out during this time period?  I don't mean like meta frameworks.  I mean like front-end frameworks.  Ones that are specifically...
[00:21:28] front end.
[00:21:29] And the aunt, because he, you know,
[00:21:32] The answer I think
[00:21:33] is not
[00:21:34] Many.
[00:21:36] In fact,
[00:21:37] out of ones that are like
[00:21:39] gone to a certain stage of popularity,
[00:21:43] I mean, let's add this chat.
[00:21:47] What was the last front-end framework?
[00:21:52] Right. Okay. Yeah. Quicken Hathbards. Yeah. You guys, this is the thing. But I'm going to ask you,
[00:21:59] I...
[00:22:00] Popular zero.
[00:22:03] What I was going to ask you, though, is...
[00:22:05] I mean, Enhanced actually maybe has a legit claim on what I'm saying, but most of these frameworks came out...
[00:22:12] Out the gates.
[00:22:14] with the backend in mind.  Like they weren't a meta framework,  but you don't need a meta framework for quick.  Like, like Quick City,
[00:22:22] I know like start is solid starts, you know, starter and you can do quick as
[00:22:27] CSR only, but generally speaking,  basically, QuickCity was
[00:22:31] like our Quik was like a meta framework out the door. Like that's what it was building. It was  like we are building a isomorphic thing. Quik's technology doesn't make sense if you're not server rendering it. Like if you're not
[00:22:42] like,
[00:22:44] you know, Briza, kind of similar thing.  I mean, doing really cool stuff with like the client server stuff with the signals.  But...
[00:22:55] Like, we haven't had
[00:22:57] the
[00:22:57] traditional front-end framework for a while. But yes,
[00:23:02] Popularity, I have a whole theory on that. I think because of the saturation, the year you come out is like
[00:23:10] your ceiling is almost like
[00:23:12] Inverse, exponentially inverse to the time the front-end framework came out in terms of popularity.
[00:23:20] Like if you released in 2010 or 12 or 13, the ceiling is that much higher.
[00:23:27] 2016.
[00:23:28] 20...
[00:23:30] you know, 18...
[00:23:32] 2021, you know, by the time you go down the scale, it gets harder and harder because like, sure, Solid was released in 2021, but effectively existed kind of as a thing.
[00:23:43] since 2018 that people could actually use.  People were using solid and prod before 1.0.
[00:23:51] Definitely. And like
[00:23:53] Svelte was 2016, but let's say, like, realistically, let's say Solid was 2020 and Svelte was 2019...
[00:24:01] Right.
[00:24:02] 2018, let's say 2019. Like as we get further in time, the less likely the frameworks get a foothold. Um,
[00:24:14] Yeah, I'm hoping they improve it.  Hona's JSX solution...
[00:24:19] um some people had some fun and put in the js framework benchmark and it lost to blazer i mean  that pretty much covers it for anyone who watches my stream regularly but
[00:24:29] Yeah.
[00:24:30] Yeah, okay, but this is, you know, we might go as far as saying that the last front-end framework right now, this might change the future, might have been solid.
[00:24:40] Someone was like, "Well, Svelte 5 feels like it's new enough that it's a new front-end framework."
[00:24:46] Maybe Vue Vapor will feel different enough.
[00:24:50] But it's an interesting
[00:24:52] I'll come back to this point, but it's an interesting...
[00:24:55] thing that
[00:24:57] that part hasn't
[00:24:59] progressed nearly as much.
[00:25:02] Yeah, or Inferno, yeah.
[00:25:09] Thank you.
[00:25:12] Thank you.
[00:25:17] So like, how fast did React spread?  I mean, React...
[00:25:21] React got popular pretty quickly.  Like there was a bit of a pushback the first couple years, but by 2015, they'd spread pretty wide.
[00:25:30] It only took them two years.
[00:25:32] to get numbers that
[00:25:34] new tools do not even get today.
[00:25:39] Anyway.
[00:25:40] Thank you.
[00:25:42] - Thank you.
[00:25:42] where is getting to this is like,
[00:25:46] Last year...
[00:25:47] was I feel like maybe this is just me self-projecting was a year of coming to terms with the fact that  like all these experiments we did didn't quite work they didn't quite solve the problem they weren't
[00:26:00] There are improvements here and there, but we didn't get that
[00:26:03] you know, that we'd been promising or that we'd been wanting, right?
[00:26:07] It's actually kind of funny because this is a time period that I haven't actually been
[00:26:11] promising that much because I've been exploring a lot.
[00:26:16] But...
[00:26:17] I feel like, in general, the sentiment...
[00:26:20] Um...
[00:26:21] is like
[00:26:24] There are these things.
[00:26:25] Some of them good.
[00:26:27] But...
[00:26:28] Like, we haven't solved it.  And...
[00:26:31] I think that with the, you know, the state of the world right now,
[00:26:37] Um...
[00:26:39] you know, stuff with the economy, jobs, you know, difficult issues. I don't think
[00:26:46] We're in a position right now
[00:26:47] where anyone is going to solve it short term.
[00:26:51] Even like...
[00:26:54] Frameworks have never been an area where there's like a lot of funding, but even the ones that have it, you know, things feel like they've kind of slowed down again.
[00:27:03] And I think the big thing is in kind of fighting against this trend of complexity, we tried to start over with simpler tools.
[00:27:12] And the result was...
[00:27:16] simpler at first and everyone got excited and then when they tried to build the thing with it they realized oh this actually isn't really simpler
[00:27:24] And
[00:27:26] I think
[00:27:28] I mean, this continues to give voice to the no-build people of the world, like go back to my...
[00:27:34] my, you know, whatever Laravel servers or whatever, but like,
[00:27:39] We'll get into it. I'm just saying that clearly
[00:27:42] while things have become easier,
[00:27:44] Um...
[00:27:46] I think we've kind of recognized or started to recognize that like,
[00:27:50] Sometimes things that are difficult to solve are difficult to solve, right?
[00:27:54] Tools are complicated, but so the problems are.
[00:27:57] Um,
[00:27:59] It was important for me because it set me free.  I felt all this pressure.  Like I had to solve this problem.
[00:28:05] the last couple of years. And now I'm like,
[00:28:08] You know, somewhere mid-year, I was just like, maybe don't, you know?
[00:28:11] Um, right?
[00:28:14] Okay.
[00:28:14] So,
[00:28:18] Yeah, being backed by a fan company is huge for adoption, right?  Um...
[00:28:26] Mm-hmm.
[00:28:28] But like, it's an interesting thing because it also means that you're subject to what the company is like, what their goals are. So like,
[00:28:38] There's trade-offs here.
[00:28:41] And no resume feeling is solid, got it.
[00:28:44] I mean...
[00:28:47] We'll get there in a minute.
[00:28:49] Um,
[00:28:51] Anyways, I was already talking about this. We've been all server-centric the last few years.
[00:28:58] And people came to me and they're like, why are we talking about this stuff now?  Right.  Like there's a whole bunch of people who are building single page apps and they're like, why are we...
[00:29:08] on the server? Why are we talking about server rendering? Like, why am I hearing about Lighthost  scores and everyone complain about hydration? I don't need hydration, I just render on the client.
[00:29:18] So
[00:29:19] And
[00:29:20] It is interesting to see how much the world changed in a very short order.  Like everything just flipped.  Whereas like something like, oh, that's bad.  This is good.
[00:29:29] Um,
[00:29:30] And I,  I multiple times I tried to explain to people and be like,
[00:29:34] like what the benefits are, but like, let's face it,  when you're talking about technical benefits,
[00:29:39] I mean, especially to someone who's a reactive.  It's like...
[00:29:43] we don't care. Good enough is good enough, right? Like, why do I care about this stuff?
[00:29:48] Right.
[00:29:48] Does React let me build my project? I'm done.
[00:29:51] I think what happened, and I think it's pretty obvious at this point, is we had two factors, right?  We had...
[00:29:58] COVID pushing online
[00:30:00] I'm shopping.
[00:30:00] pushing e-commerce really hard.
[00:30:02] And then we got all the like low interest rates.
[00:30:05] you know, happening to push the economy, basically pushing into the investment into areas that could support e-commerce, essentially.
[00:30:14] I think this is what led to a lot of meta frameworks, you know.
[00:30:18] They're all VC backed in some sort of way, except maybe analog, you know, I mean, I don't really consider solid start. I may not consider SvelteKit, but like Astro is a company, Remix was a company, Quick was built through Builder, Fresh is with Dino.
[00:30:32] Um,
[00:30:34] Okay.
[00:30:35] You know, like.
[00:30:37] There is an incentive here, right?
[00:30:41] Yeah, and we also got 10 years in the media in Android Phonia. I did a whole talk on it. I linked it in here.
[00:30:52] Thank you.
[00:30:57] But like...
[00:31:00] if you've been watching my stream the last couple of years,  when I do this yearly kind of recap,
[00:31:08] I've talked about this tension between frameworks and I pulled this up every year. I've been talking about on the server this tension and I
[00:31:18] drew people on a graph before. I probably don't have it on this ScalaDraw because I think I've since this is like
[00:31:25] This is a newer one than the time period where I was doing this.  Yeah, yeah, this one's not...
[00:31:30] I've talked about this idea of the...
[00:31:37] basically two extremes, like
[00:31:41] the
[00:31:44] Oh, why am I dotted?
[00:31:47] Like on one side,
[00:31:49] They're being...
[00:31:52] isomorphic or basically like same code runs on both sides, but maybe runs a little different.
[00:31:57] And then...
[00:31:58] what I'm calling split execution, right?
[00:32:02] Thank you.
[00:32:03] And
[00:32:05] It's funny, Theo went and did a video because he tangented for like an hour and a bit.
[00:32:12] on what I meant in this one sentence where I said,  the last couple of years I've seen spawn influence isomorphic.  Same code runs differently on client server approaches up against MPA  influence split execution.  Islands to server code component approaches and search find a universal  solution for all.  What I'm trying to say is,
[00:32:28] We've been trying to decide.
[00:32:30] And this isn't just in JavaScript. I mean, I think everyone
[00:32:34] who's not in JavaScript is firmly on this side over here. But whether like,
[00:32:39] We should like like
[00:32:42] single, single app,
[00:32:45] single code base,
[00:32:49] single mental model, or whether we should have like,
[00:32:56] clear client server
[00:33:00] separation,  separation,
[00:33:03] maybe...
[00:33:05] different languages.
[00:33:09] Um...
[00:33:15] Thank you.
[00:33:17] Maybe...
[00:33:18] multiple templating approaches.
[00:33:23] I mean, I have a hard time saying
[00:33:25] great things
[00:33:27] about the split execution side. Don't get me wrong, there are benefits to both sides,  but we've been seeing these two mentalities
[00:33:35] head to head and every tool seems to kind of pick a side because they're making advances to get the benefits of the other side.
[00:33:45] You know, like these were classically, you know, MPAs.
[00:33:49] These classically had...
[00:33:52] you know,
[00:33:53] Stuff that didn't render until you go into clients, so you have white spaces.  You know, these kind of things.  These, to classically, didn't have, you know, client-side routing.
[00:34:01] These, you know, classically did a lot of...
[00:34:07] bad waterfall data fetching mechanisms. The ice marker apps tended to
[00:34:14] you know, have issues with...
[00:34:19] you know, I'm trying to think, like, overfetching.  You know, like, there's lots of problems that...
[00:34:26] You know, too many...
[00:34:29] back and forths, you know?
[00:34:31] Yeah, Waterfalls is definitely the big problem on this side.  So, like...
[00:34:35] Yeah, I mean, I guess I could write that down, you know.
[00:34:39] issues like
[00:34:41] waterfalls,
[00:34:43] overfetching
[00:34:48] It's used like...
[00:34:51] Client.
[00:34:52] Routing.
[00:34:57] Um...
[00:35:03] Thank you.
[00:35:05] Thank you.
[00:35:06] Like.
[00:35:08] optimistic UI
[00:35:11] Thank you.
[00:35:11] A lot of the points around interactivity, you know.
[00:35:17] Thank you.
[00:35:19] Or state preservation.  State preservation.
[00:35:21] Thank you.
[00:35:22] Anyways.
[00:35:26] Yeah, oh yeah, yeah, sorry.
[00:35:28] Hydration errors. Thank you.
[00:35:33] Right. You guys are helpful here. Duplicate logic.
[00:35:40] Thank you, Chad.
[00:35:41] Thank you.
[00:35:43] What?
[00:35:45] Thank you.
[00:35:47] Yeah, the chat is super helpful here.
[00:35:54] Thank you.
[00:35:55] Thank you.
[00:35:59] Yeah, yeah, yeah, definitely.
[00:36:02] bundle size
[00:36:06] Um...
[00:36:08] Execution.
[00:36:09] Yeah.
[00:36:10] Beautiful. Yeah. See, and people have been
[00:36:14] Funny thing is, double data problem...
[00:36:18] Yeah, I'm going to...
[00:36:20] Yeah, let's put it on here because it belongs over here. But the funny thing is,
[00:36:26] Thank you.
[00:36:28] The funniest thing about this is as
[00:36:30] He approaches.
[00:36:32] kind of started approaching each other.
[00:36:35] Shoo!
[00:36:37] That...
[00:36:39] really funny observation is  they didn't exactly
[00:36:44] they would kind of solve their issues,  but then at the cost of basically getting the issues out,
[00:36:53] of the other side.
[00:36:56] You know what I mean? Like, like they,
[00:36:58] The... the...
[00:37:01] They basically were just trading one type of issue for another type of issue.
[00:37:06] You get all the issues, yes.
[00:37:08] You get all the issues.
[00:37:10] Hey Nikhil, how's it going?
[00:37:12] Yeah.
[00:37:13] So, like...
[00:37:14] Yeah.
[00:37:16] This is what I was trying to
[00:37:19] Do you want your split applications to have hydration errors?
[00:37:23] Well, guess what? You can with React server components, though.  You know, like...
[00:37:28] Like just just like in the JS space, just so you can understand what I'm talking about when I talk about solutions, just to kind of give you like a
[00:37:34] a kind of an idea here of like this zone here is like over here.
[00:37:38] Isomorphic.
[00:37:40] This is stuff like
[00:37:42] Solid.js.
[00:37:44] So I'll start...
[00:37:46] Belt kit.
[00:37:50] Remix.
[00:37:53] um,  noxed,
[00:37:58] Next.
[00:37:59] pages
[00:38:00] directory.
[00:38:03] I'll just call it next pages for short.
[00:38:06] Right.
[00:38:07] And then
[00:38:08] it.
[00:38:09] This over here is like...
[00:38:13] Astro...
[00:38:16] Next app directory.
[00:38:20] Fresh.
[00:38:23] Oh, sorry, I missed an important one over here.
[00:38:25] Quick.
[00:38:28] Um...
[00:38:30] The reason quick
[00:38:32] is
[00:38:33] is over here. And it's important to understand it because they actually came up with novel ways to attack these issues.
[00:38:40] Right?
[00:38:41] Um,
[00:38:42] Right?
[00:38:44] But they're firmly in the isomorphic group, right? You don't, there's no use client, there's no is island or whatever, you know?
[00:38:51] Um,
[00:38:53] But right now there are two different architectures.  These are different architectures.  These are not the same thing.  They're capable of a lot of the same capabilities.  Both of these can stream.  Both of these, you know...
[00:39:06] You know.
[00:39:08] Right?
[00:39:10] Right.
[00:39:12] It's sometimes hard to talk about these without the full picture, because like...
[00:39:20] Rails is obviously over here, but they're like further over because they're not prescribing a client side solution.
[00:39:29] Laravel and them, you know, they sit over here somewhere, right?
[00:39:33] So in one way you can view these split execution things like a better middle ground between
[00:39:38] you know, rails and like
[00:39:40] where we've been.
[00:39:43] It's...
[00:39:46] The one and a half data problem.
[00:39:48] Yes.
[00:39:51] In the case of React, React actually has the double data problem, though.
[00:39:57] Like RSCs actually have the double data problem.
[00:40:00] The one and a half data problem, I get what you're saying.  You're saying the isomorphic parts need the data and the non-isomorphic parts don't.
[00:40:06] Don't.
[00:40:08] But the problem is React, the parts that are server only still actually double serialize, both as HTML and as diffable JSX on or whatever you want to call it.
[00:40:20] RSC is actually, funnily enough,
[00:40:24] Fixed this issue, but introduced this issue.
[00:40:30] No silver bullet.
[00:40:32] Yeah, yes, yes. Rails was stimulus to split execution. Yeah. Fair enough. Yeah. I'll, I'll, I'll, I'll, it's like,
[00:40:39] Yeah.
[00:40:40] Thank you.
[00:40:44] -Farces has a 2.5 data problem.
[00:40:50] It might actually, to be fair, when you consider the size of the sterilization considerations.
[00:40:56] But this is the problem, right? You start looking at these issues and what you want to solve and you're like, okay,
[00:41:02] I can solve waterfalls, I can solve overfetching reasonably enough,
[00:41:07] at least compared to like these guys have a different version of overfetching.  It's like, uh,
[00:41:14] over rendering
[00:41:18] That's why you need like...
[00:41:19] server caches.
[00:41:21] Um,
[00:41:23] -
[00:41:24] But like...
[00:41:27] like if you consider these kind of equivalent, you can solve these
[00:41:30] Uh...
[00:41:31] If as soon as you add anything meaningful in the client this size you get the hydration errors and
[00:41:36] you know, like it becomes a question of what's more important, bundle size execution or double data?
[00:41:43] or duplicate logic. These are the things that
[00:41:46] that
[00:41:47] that end up being, like, as the rest of these kind of melt away as people solve them,
[00:41:54] you know,
[00:41:56] Mmh.
[00:41:57] It comes down to duplicate logic.
[00:42:00] bundle size, and double data.
[00:42:06] Would you put 10 sec start? Oh yeah.
[00:42:09] Right here.
[00:42:12] Tantac Start and Solid Start are incredibly...  There's differences mechanically in some of the stuff that Tanner's been working on,  but philosophically they are...
[00:42:23] in the exact same...
[00:42:25] place on this grid.
[00:42:28] more aligned than pretty much any of the projects where we're sitting.
[00:42:34] Hey, Maple. Yeah. So like
[00:42:39] *laughs*
[00:42:40] Yeah, I think that
[00:42:44] Well, I'm not giving
[00:42:46] a super technical, like...
[00:42:49] example of what these things are, I hope through me listing the solutions.  Like for me, it's a pretty clear
[00:42:55] divide. I can just go, yeah, you're here, you're here. I don't
[00:42:59] I think it's enough to, like, if you're familiar with some of these solutions, you can understand the categorization.  This is something you could tell at a glance. There's mechanical aspects of it.
[00:43:07] But this division is actually fairly absolute.  It makes a huge difference on developer experience and impacts UX.  These are, and there's clear principles, like there's a certain physics
[00:43:19] to the separation, like a certain consequence. Yes, the lines are blurring and muddying, but the core architecture defines this, right? The funny thing is like, there's like another example where the side is trying to meet with the sizes like lakes, I call them like the opposite of islands when you're trying to have like the server functions, but like lakes have huge problems because they're like waterfall prone, like, so like,
[00:43:41] There's a lot of technologies that try and play around in the middle.  Single flight mutations.  They make...
[00:43:48] Like split execution is very classic for the whole like web server approach where you're like,
[00:43:53] Next page.
[00:43:54] you know, get the next page, you know, post something, post a form, return the next page. Versus our isomorphic ones where everything is very client centric. So you post and it's like,
[00:44:03] Check, you're good. Then the client navigates to the next page and then it pulls the data. You get a waterfall there. We can solve the waterfalls, right? We can come up with smart solutions to these things, right?
[00:44:15] Right? Like, how do I put it up here?
[00:44:18] It's an exercise of two opposites trying to approach each other in the middle.  This has resulted in amazing developments in routing, like NextAppRouter, or ViewTransitions routing, like improvements to the split execution size,  as well as technology like out-of-order streaming, server functions, optimistic updates, server islands, and single flight mutations.
[00:44:32] But even so, the gap remains larger than anyone imagined. This is what I'm trying to say here.  I've been talking to you guys for the last couple of years, like going like, we're getting there.  You know, like the holy grail. I think once on here I was like drawing like a box.  Maybe I did something like this and I'm like...
[00:44:48] Let's make it green. Green's a happier color.  And we were like, can we get here?  This is the magical zone.  It's so funny because when you put PHP in Laravel,
[00:44:57] In the equation, right?  You kind of go out here and you're like...
[00:45:00] You're like, okay, Laravel, let's make that.
[00:45:03] Black, sorry. Rails.
[00:45:07] And they're like standing over here.
[00:45:09] .net.
[00:45:10] And they're looking at us over here and they're like,
[00:45:13] What kind of crack are you guys smoking?  Like, why are you...  You guys are, like, sitting there, like, focusing in this, like,  golden area over here.  You're looking.  It's, like, people, like, chasing after treasure.  And they're here going, like...
[00:45:25] You guys are nuts.
[00:45:27] Right?
[00:45:28] But this kind of puts the whole
[00:45:32] perspective. There's a lot of conversations in the space right now that look like this.  There's probably like a really good chart where it shows this kind of thing. But like another example,  you know, like in the front end space is you'd have like certain libraries here,  certain libraries here, and then like web components over here.
[00:45:47] Like it's,  it's,  it's that kind of thing.  It's like,
[00:45:51] V-DOM.
[00:45:52] or signals.
[00:45:54] And then like web components.
[00:45:56] You know, like,
[00:45:57] There's this place where...
[00:46:01] The two parties that are fairly invested are trying to
[00:46:05] navigate to.
[00:46:06] And then there's going to be like this zone where there's like people are just like,
[00:46:10] miss the boat, so to speak.
[00:46:13] And I think
[00:46:14] it's fine because not everyone needs solutions here.  These solutions probably fit in a very specific case.  But if there is some idea of where...  See, I think the thing is...
[00:46:24] there's a center that people kind of picture in the head for them they're like
[00:46:29] I picture all the things I could build on the web,
[00:46:31] and the kind of tools I need for it.
[00:46:34] there is a point where I just strike the right balances.  And collectively, the community,
[00:46:40] has been kind of
[00:46:41] you know, wavering to where they can find
[00:46:44] that center
[00:46:46] And
[00:46:47] I think it's very far left or very far right than a certain group
[00:46:52] You know, and because like at a certain point, you know, I said I was tired of reacting to the beginning of the stream.  How many people are tired of this whole conversation?
[00:47:00] Got any you guys in chat?  Yeah.
[00:47:03] You know what I mean?
[00:47:06] Yeah.
[00:47:07] Thank you.
[00:47:09] Yes, right?
[00:47:15] Thank you.
[00:47:16] Yeah, and these people too, I didn't put them.  There's the whole people in this graph.
[00:47:22] that are out on this side because if this is where the isomorphic is then like
[00:47:29] VIT
[00:47:31] React starter...
[00:47:32] is over here
[00:47:34] you know, so to speak, right? Like there's, there's all these people over here.
[00:47:38] Um...
[00:47:40] Thank you.
[00:47:41] Thank you.
[00:47:41] You know, why am I even getting pulled into this conversation? You know, like,
[00:47:46] Who's out with React starter?
[00:47:50] I mean, it's basically any framework starter, right?
[00:47:54] Um,
[00:47:56] you
[00:47:56] Yeah, it's just like Vite plus Vite.
[00:48:02] front-end
[00:48:05] of your choice.
[00:48:07] This is a category now.
[00:48:11] Um...
[00:48:15] Yes. Do you know who else is over here? Yes. Thank you. PWA local first. Yes, yes, yes, yes.
[00:48:21] They're also over here.
[00:48:22] Thank you.
[00:48:24] PWA local first.
[00:48:32] Thank you.
[00:48:33] So these frameworks just don't make sense of real problems. Well, it depends what the problem was.
[00:48:39] you
[00:48:40] The thing is,
[00:48:42] This is kind of right now an inverse of how I usually draw this. I usually call the left hand side the MPA Laravel side or even like static web server if you go even further over. And then I usually call this side like the app side the right side. So right now this is inverted to my usual scale.
[00:48:58] But...
[00:48:59] If you look at this, the types of apps you're building,
[00:49:02] This chunt for the middle is, if you look at the scale, I've shown this on Tox.  I think it was in my, let me see if I have my drive.
[00:49:11] Uh...
[00:49:14] Front-end Extendential Crisis.  I stole this from...
[00:49:18] from Fred K. Scott, who was trying to put the frameworks under a specific thing. I just did that, but I'm not going to
[00:49:25] do that right now. Where is it?
[00:49:28] The Spectrum.
[00:49:30] Spectrum. Yeah, spectrum. Right. Left side, right side.
[00:49:35] Do you know what's right smack in the middle of the spectrum?
[00:49:39] Whew.
[00:49:41] e-commerce.
[00:49:50] Thank you.
[00:49:53] The amount of apps that don't need a server at some point is a mission outlier in my opinion.  Or...
[00:49:58] It's...
[00:49:59] Thank you.
[00:50:02] Yeah. Yeah, I basically was going to agree with you on that.  Like it's more of that like that don't benefit from a server in some sort of way is an outlier.  Like there are.
[00:50:15] They can continue to do what they do, but there are...
[00:50:19] benefits to offloading it,
[00:50:22] The web is
[00:50:24] in its nature, started on the server.
[00:50:30] If people are trying to expand their range here a little bit.  But my point is React and all our frameworks all started over here.
[00:50:39] Right.
[00:50:41] The web started over here.
[00:50:43] Thank you.
[00:50:44] this
[00:50:45] middle zone
[00:50:47] is roughly
[00:50:49] This middle zone.
[00:50:51] The problem is when you take people who are used to this and you try and retch them this way,
[00:51:00] well like not producing a gap like trying to cover the whole range  you end up with needing to fill this middle space and
[00:51:06] That is a tough ask.
[00:51:10] But it's
[00:51:11] It's in the middle.
[00:51:13] Because e-commerce is in the middle.
[00:51:19] Thank you.
[00:51:21] Thank you.
[00:51:22] Thank you.
[00:51:28] Thank you.
[00:51:29] Thank you.
[00:51:32] Thank you.
[00:51:33] Fines and laughing. Oh, fuzzy.
[00:51:36] I'm sorry.
[00:51:42] Yes. Yes.
[00:51:44] Thank you.
[00:51:45] Yeah. And yeah, I mean, there are like local first is in that zone, right?
[00:51:51] Thanks.
[00:51:52] So yeah, it's interesting.
[00:51:54] so often if you're getting live or synced here.
[00:51:56] Yes, exactly. So like,
[00:51:59] Is this an example? I mean, it's like the whole politics thing when
[00:52:02] Communism becomes fascism, like you loop around on the other side, maybe.
[00:52:10] I don't know if I can't find it.
[00:52:15] Thank you.
[00:52:19] This is true.
[00:52:20] But if you look over time,
[00:52:24] it
[00:52:24] Interactive in websites is something that will increase over time.  It's just like it's one of those things.  The expectations always are increasing.  So while the tools that were built over farther on the side are definitely situated  better place where they could, you know, be the target for the next thing,  they're trying to come back this way to meet in the middle  and they know they need to improve.
[00:52:45] Like...
[00:52:47] Let's face it.
[00:52:48] I said this ages ago, especially when I worked on eBay.
[00:52:50] React would, you know, as it was, would have been a terrible solution for eBay.
[00:52:55] React Server Components
[00:52:58] in principle,
[00:53:00] could be a good solution for, um,
[00:53:04] for something like that.
[00:53:06] Server components lets
[00:53:09] React go from this
[00:53:11] to basically...
[00:53:14] here in a reasonable way. Don't get me wrong.
[00:53:16] There are tons of e-commerce sites built in React,  but probably would have better not been.  I think React was really...
[00:53:23] especially when e-commerce are the focus, that they realistically should be sitting over here.  And they wanted to extend this way.
[00:53:31] I mean, it's not lost on me that Remix is on Shopify...
[00:53:36] and what not.
[00:53:38] So like...
[00:53:40] There is a trade-off there when you want to make it easy for your developers to be able to build their storefronts.
[00:53:45] But from like a pure technical standpoint...
[00:53:49] Shopify should be Astro.  Like, just like,
[00:53:53] Astro, funnily enough, didn't quite get to the e-commerce level either. They had to stretch up a little bit because when you're a static site generator and that, you can't get there. This is like this place that people have been trying to get to the last couple of years. It's all about e-commerce.
[00:54:13] Thank you.
[00:54:15] Thank you.
[00:54:17] Thank you.
[00:54:19] Hey, how's it going?  Hey, great, we got showing from other frameworks.
[00:54:25] Apollo works on Svelte, Shy with Quick.
[00:54:31] Oh.
[00:54:33] There you go, yeah. Glasses thing is all completely new to me.
[00:54:38] I mean...
[00:54:40] Yes, I mean, Marco did start here. This is why Marco was sitting alone for like a decade.
[00:54:46] Right? Marco,
[00:54:48] built
[00:54:50] that in the middle dynamic e-commerce thing. The problem with Marco is its slice was
[00:54:55] pretty thin
[00:54:57] Right.
[00:55:00] Right? Yeah, I mean, the same reason I'd say that Astro is the solution for... is the same reason Marco. Like, just, that is...
[00:55:08] But it is interesting because that has been what's pushing it.  If you want to make sense of the web the last few years, that's what's been pushing it.  That was my point with what I was saying.
[00:55:17] Um,
[00:55:18] There is a tension here. There are sides of this discussion.
[00:55:24] This isn't like...
[00:55:26] Sorry, bug on Theo, but he somehow made this whole conversation about Next.js and
[00:55:32] Thank you.
[00:55:33] I couldn't.  I couldn't.
[00:55:35] Um,
[00:55:37] Thank you.
[00:55:38] Yeah.
[00:55:43] I'm trying to write some fresh-time paper in this spot. Does it occupy some space to Afton's? Yes.
[00:55:47] Yes, fresh is the same as Astro.
[00:55:49] Yes.
[00:55:59] Oh, man. I'm like the worst person to bring this kind of stuff. Every framework has this angle for marketing.
[00:56:08] And I find most marketing...
[00:56:10] B.S. Um...
[00:56:13] like,
[00:56:14] Svelte, note worthy here. I mean, they're a much better place here, but when Svelte 3 came out,
[00:56:19] I just couldn't take it, like the disappearing framework, you know, like
[00:56:24] There is stuff about Svelte 3.  Like, I love Svelte 5. I love how Svelte's grown over the years.  But Svelte 3, when it came out, that I was just like,
[00:56:33] Man, this is like, I guess, compelling marketing, but like...
[00:56:38] I I
[00:56:40] There's two sides to this kind of thing.
[00:56:43] On one hand,
[00:56:45] This is a good shout out that MetaFrameworks essentially...
[00:56:49] can be agnostic like Tanner Linsley wishes because
[00:56:53] Most of the upper abstractions don't need to be that tied to the renderer.
[00:56:58] So,
[00:57:00] Like...
[00:57:02] Basically what you're describing here with Remix is literally
[00:57:05] how every meta-framework works, essentially, right?
[00:57:09] Um, like all of these here in a sense.
[00:57:13] Right.
[00:57:14] People who use Next even the Pages directory for, even though it had funny stuff like
[00:57:20] get server side props and all this kind of garbage.
[00:57:25] You didn't need to use effect. You could do the data fetching in those places. It was the same thing. I think
[00:57:33] You know, what was nice about Remix is that they chose to use web standards.  But like, again, this is one of those things where actually almost all the modern tools use web standards.  You could say it's because of Remix, but it's more likely due to the fact that
[00:57:48] When
[00:57:49] a new baseline does appear and is useful to use, people will use it. The problem is the first
[00:57:55] Movers in any kind of range don't have those tools available for them at the time, so they have to make the thing themselves.  What we've learned over time, and I think this is the real lesson for people building frameworks, is...
[00:58:05] it's usually better to err on the side of the platform in hoping that in the future, like,
[00:58:11] those simplifications align. The problem is you can't always do that because the platform versions sometimes are kind of dumb and they don't do what needs to be done.
[00:58:19] you know, and you're kind of stuck with it.
[00:58:22] Right. So, you know, we try and say like, OK, well, if this is how it works,
[00:58:27] you know, let's not mess with it too much.  That's safer.  And that's what a lot of frameworks have been doing  the last few years.  But like early...
[00:58:35] 2010 to 2015 or even a little earlier, like 2017, 2015, it's like time like react and angular one came out  We were kind of in a very different mindset. We're like browsers suck and
[00:58:44] They're all different. They're not things. We're just going to standardize our way for us and not worry about whatever crap they're doing because it's going to take forever.  This is part of the reason why I think the original divide with web components, people and stuff happened in the first place was because like...
[00:58:59] The...
[00:59:00] They need a solution now, and they're like, I'm not going to wait for it.
[00:59:04] I think it's a good thing.
[00:59:06] over time,
[00:59:08] we've kind of gone to a place where we've kind of shifted our perspective. But
[00:59:12] Still, it's kind of hard to work on a platform that never decays or never goes away.
[00:59:17] even on the server, which isn't like, you know, W3C, it's not the web.  You have people like Jared Sumner being like, man, streams in nodes suck, you know?
[00:59:27] He re-implemented streams completely different because
[00:59:32] Like basically the API,
[00:59:34] for node, for streams
[00:59:36] was too introspectable, which wouldn't allow the dude that sort of
[00:59:39] um, performance optimizations that he wanted to do. They were too, too flexible.
[00:59:44] they let the user get in the middle of something that prevented performance optimization.  Basically, it was a dead end.  So he was like, no, I'm not going to do it.
[00:59:53] But...
[00:59:55] It's a gutsy move to take when those kind of bodies will continue to
[01:00:00] move and people continue to use them.  I'm just throwing, sorry,  I know I went on a completely different side.  Remix is a great solution.  I just wanted to kind of point out  that a lot of times...
[01:00:08] the
[01:00:11] like a lot of the core pieces are like,
[01:00:17] It's a perception thing, right? Like,
[01:00:20] Remix actually depends a lot of its behavior on React.  It wouldn't be able to do the streaming and deferred if it didn't have React under the hood.  But on the other hand, um...
[01:00:31] Yeah, I don't know.
[01:00:36] You can build an entire Remix app without a single use date.  That is true.  You could build an entire GraphQL app without use date too, right?  Or actually 10...
[01:00:48] I think you can build an entire tan stack without use state, right?  You just use query.
[01:00:53] Right.
[01:00:55] I think it's fair. I think what I'm trying to get at is the solutions
[01:00:59] are
[01:01:01] more similar than people realize.
[01:01:03] And we tend to get focused on the wrong things.
[01:01:09] Sorry, I took that off tangently too far.
[01:01:12] I appreciate the cybernuclear enhanced framework because at least it doesn't mean anything.
[01:01:25] Um, it still impacts measurable page scores.
[01:01:31] I think there's a difference, but it's just because it's duplicated doesn't mean it's encoded the same way. Like one's encoded in JSON and one's encoded in HTML and how it works.
[01:01:41] manifest itself as different.
[01:01:48] So
[01:01:49] Thank you.
[01:01:50] Bye.
[01:01:54] Yeah, I like this point, Tony, just catching up with chat here, is that while it has a single mental model, the fact that it runs on both sides means that...
[01:02:03] No one quite knows how it runs.  There is something clearer about
[01:02:08] That's like the clear separation because you're like this code does this.  This code does this. What's funny is
[01:02:15] When you...
[01:02:16] Try and meet in the middle.
[01:02:18] You end up inheriting both problems because the islands themselves are
[01:02:23] have
[01:02:24] a different mental model than the server part yet have the same fuzzy execution model
[01:02:34] I don't know. I don't think... Remix?
[01:02:40] Yes, I think they will support the ability to do stuff with server components. I wrote a while ago
[01:02:45] about Universe of Router.  A lot of the moves that Remix have been making  or React Router people have been using
[01:02:51] or-
[01:02:52] I like to say myself and Ryan Florence are often actually fairly on the same page because...
[01:02:57] I'm working on a framework that is not React. He's working on a framework where he can't wait for React. It's the same kind of mental thing. He's... generally speaking, he's trying to find solutions to problems that are real. We end up hitting the same problems and kind of end up solving them actually relatively similarly. So in a sense...
[01:03:12] If anyone's familiar with the work of SolidStart, it was to make it router agnostic. I developed SolidStart right from the beginning, knowing that all the functionality was going to be in the router.
[01:03:21] which is basically what they're doing with React Router 7,  and pulling the stuff of Remix back out.  I think once you look at that,  and then you kind of view server components  a slightly different way,  you start seeing that there are patterns  where you can bridge this gap.  The challenge though is,
[01:03:39] I
[01:03:41] Ryan Florence is over here with us in isomorphic land. He doesn't actually like the split execution. You can tell he likes elements of it.  He wants to embrace it, but like the way that they showed that demo where they're using server components and loaders, that is not here.  That is here. Architecturally, that is still over here. That's lakes is what I call that thing. It takes a...
[01:04:00] There's a very different...
[01:04:03] mentality
[01:04:04] that comes being on this side.  So in a sense, yes and no.  We will see if they go all the way over,  but my suspicion is that
[01:04:13] As I said, me and Tanner are almost identical to the same page.  I think Ryan Florence is going to get to the almost same place in the coming months.  I could be wrong, but my suspicion is they will not be moving all the way over to here.
[01:04:30] Thank you.
[01:04:32] Yeah, I mean, I think when I talk about
[01:04:37] Astro here I am talking about with view transitions. Otherwise they're they're kind of more on this level of rail sides when you add view transitions. The problem is when you add view transitions state preservation becomes a challenge because hydration timing becomes awkward. You actually need to reimplement the rules of server components. I.e. client components can only run on the server initially if you don't want your whole app to blow up.
[01:04:56] Either that or they have to be completely isolated. So from in a sense, it's that same set of trade offs. That's why for me, when I talk about Astro and Next, it's basically the same thing.
[01:05:06] One...
[01:05:07] Yeah, just different flavor.
[01:05:22] Thank you.
[01:05:23] Yeah, just catching up, you guys.  Okay.
[01:05:27] I actually remember they should be contained very often boundaries.  Like, that's what I'm saying. Lakes kind of mentality.  I think there's a middle ground.  I think that I can show you guys how...
[01:05:36] To get closer...
[01:05:38] to this without the trade-offs of lakes
[01:05:41] But that's... it's...
[01:05:44] We're yet to see if the value is there and I think this has really been the problem here
[01:05:48] Right?
[01:05:49] Yeah, working on Solid heavily, especially now that I'm not working on Solid Start as much.  I have the Start team to thank for that.
[01:05:55] FYI, Tanner's very active in chat here, but most recent news is that there's been kind of a merging of efforts between SolidStart
[01:06:03] And we've always been on the same page and since the naming and stuff, and we always knew that we can align. But now that's TANSTAC Start is actually getting further along, building on the same foundations, the teams have basically united at this point to be the same team.
[01:06:18] Um,
[01:06:19] Not officially, officially, but officially enough that I expect in the coming months that we're going to end up in a zone where...
[01:06:27] you know, it might take a little longer, but I'm hoping to get to zone where we could even get to a point where
[01:06:32] potentially we could have a single CLI and be like, do you want to build your app in React or solid?
[01:06:37] That's long term, but the router's going to come along. But what I'm getting at is
[01:06:44] We are very, very much aligned.  I'm going to have Tanner on the stream again soon.  He wanted to come on today, but we didn't want to hijack this topic.
[01:06:53] Um,
[01:06:54] Thank you.
[01:06:56] I mean, we're already on technology side there, right? We were building on the same basis.
[01:07:02] Yeah, everyone's excited about that, yeah.
[01:07:06] Power VEAT, actually, and the Environment API in VEAT 6.
[01:07:11] And power of nitro.
[01:07:15] Thank you.
[01:07:15] Right? But yes, mostly power of beat.
[01:07:19] Right.
[01:07:20] Like, it's funny, you guys never noticed that they were both start?
[01:07:25] This is...
[01:07:26] This has always been the long, long, long-term plan.
[01:07:33] It's just like, it's how long. And I've got other stuff to focus on because Solid 2.0 is going to be hot.
[01:07:37] Anyways.
[01:07:38] Keep on going.
[01:07:40] What I'm trying to say here is that
[01:07:46] the gap is still there. Like nothing's fully covering it in a completely cohesive way. And  more importantly, when you assemble these things together, things are not so simple anymore. So,
[01:07:55] It's like, and I would argue if we're actually solving the problems.
[01:08:04] Thank you.
[01:08:07] Thank you.
[01:08:08] I know there's something else I can say. Yeah.
[01:08:12] Um...
[01:08:17] Thank you.
[01:08:19] We're not even selling the center center problems yet. Probably. I did a talk. If you guys know me, you've seen it. I'll drop the talk in chat so that you guys can check it out at your own leisure. Not right now.
[01:08:31] Let's go to YouTube.
[01:08:35] There we go.
[01:08:38] Now, not double your... how did I end up with double your speed with single flight mutations? That's not what I clicked on.
[01:08:47] Haha.
[01:08:48] That's funny.  They're trying to market it.  This was a good...
[01:08:51] podcast too, but people haven't been
[01:08:54] people haven't been like viewing this video or nearly enough.  I talk all about the technology behind single flight mutations and the,
[01:09:03] development there, whatever. People get lost on the technology. I don't care. Let's go here. Okay.
[01:09:08] Thank you.
[01:09:08] Okay, so...
[01:09:09] This talk...
[01:09:13] Thank you.
[01:09:16] This talk... I go on a very long mission trying
[01:09:23] all the different frameworks. And this is a mission I went on stream so I don't have to tell you guys.  And we already did a live stream for this talk essentially. But this is the condensed version.
[01:09:31] At the end...
[01:09:32] I built this...
[01:09:33] a site with quick
[01:09:35] with RSCs and with Salt Starts,
[01:09:37] And I got the same result for all of them because they all had the same...
[01:09:42] Like not detail features, but they all had similar qualities.  They were all small.
[01:09:48] They were all...
[01:09:50] quickly rendered, they all streamed, I believe.  They all,
[01:09:55] They all had double data.
[01:09:57] So, you know, they all had client-side routing.  They all had, like, basically, even though the ways they got to where they wanted to be was different, they all...
[01:10:09] And you know, they all attack the problem different.  I ended up with the same result because ultimately the double data
[01:10:16] made all the difference and
[01:10:18] That was inherent to the client side routing.
[01:10:21] Basically,
[01:10:23] I know it sounds dumb, but like, after working so hard the last few years, to just look at it and be like,  yeah, none of this is making, pushing the dial for a lot of stuff.  Like, don't get me wrong.
[01:10:35] Thank you.
[01:10:36] Like,
[01:10:37] If I want a static site and I don't need a client-side router,
[01:10:42] and I'm going to use Astro.
[01:10:44] or even quick as an MPA of something much more interactive and powerful,  I'm going to get great results for it.  But the second that I try and cross this gap over here,
[01:10:54] everybody just craps out the same um and the quick guys are mad at me for saying this they're like oh  we're getting there we're getting there and i'm like okay sure good but like for me there's actually  i started realizing that this was kind of like a fundamental problem like i figured out ways to  solve this problem and i and there's ways that i've heard from misco  on how to solve this problem but the truth of the matter is
[01:11:16] There are
[01:11:16] They're not simple and they're not...
[01:11:20] *sniff*
[01:11:21] I don't know how realistic they are.
[01:11:26] Yeah, do you want to know what double data is? Sure. This is important.
[01:11:30] Um...
[01:11:32] Thank you.
[01:11:33] And I actually have it in this talk.
[01:11:36] I can actually show it
[01:11:38] pretty easily too. But if you've ever had a client side framework and you render the page,  and you notice this like next data tag or whatever SvelteKit data or whatever tag,  there's all the data gets sent down as both JSON and on the page. Like if I go to like,  do I have a solid start Hacker News? Perfect. And I go here and I pick a piece of text,
[01:12:02] Like,
[01:12:03] spot in quotes spot the differences colon and then I go to
[01:12:09] Um,
[01:12:11] the network and I look at the document. Let's refresh the page.
[01:12:17] And I look at the response.
[01:12:22] and I search in this response for this text
[01:12:25] I should find it in two different places.
[01:12:28] If
[01:12:29] If...
[01:12:29] if I did everything right.
[01:12:32] Of course I'm not finding it in both places right now.
[01:12:36] Am I even looking at the right thing? How about spot?
[01:12:39] Oh, it's probably because the quotes are escaped.  Dumb Macy.  Spot.
[01:12:44] The...
[01:12:46] What was it? Spot the...
[01:12:48] differences. Is this too...
[01:12:56] It's because someone uses the same thing in multiple places.
[01:13:01] Let's try an ever-increasing timer. Let's try this. I just we just gotta find a phrase that
[01:13:08] There we go, twice. One time in this blob content, see this JSON?
[01:13:12] And then if I go up to the other place, you're going to see it actually in the markup in the HTML, div, text, one of the things.  It does not matter the technology you use.  If you have client-side routing, this will happen.
[01:13:26] Um...
[01:13:27] Yeah.
[01:13:29] Pretty much.
[01:13:30] or if it doesn't happen,
[01:13:32] you potentially have
[01:13:35] tearing hydration issues.
[01:13:37] But this is what I'm talking about. There are MPA frameworks like Quik,
[01:13:42] And like when it's an MPA, not when it's the client-routed.  And Astro that solved this, because there are ways to solve this,
[01:13:50] Um, but.
[01:13:52] Like RSCs do not solve this.
[01:13:55] Yeah, yeah, they count as client-side routing.  But, like, I think that if you just take something that would be an MPA and add...
[01:14:07] view transition API.
[01:14:11] *sniff*
[01:14:12] and
[01:14:13] like
[01:14:15] It is client-side routing, but like
[01:14:18] It's not...
[01:14:19] achieving the same thing. It's the fact that you need to hydrate, that there is state preservation, like
[01:14:26] Thank you.
[01:14:28] *sniff*
[01:14:29] It's funny because like if I took HTMX or took Astro,
[01:14:34] with shared preserved state, I can break those frameworks in two seconds.
[01:14:40] Thank you.
[01:14:41] Like, there's no guardrails against it.
[01:14:46] if you are server rendering and expecting to hydrate.  If you are always client rendering, then you're fine.  But like, essentially,
[01:14:54] There are people who will not hit the problem,  but if you're being earnest about it  and actually trying to solve it in a real way,  then I guess I should say client-side routing would stay...
[01:15:05] preservation or with shared state.
[01:15:17] Thank you.
[01:15:19] the one that's slow to load
[01:15:24] Thank you.
[01:15:24] Because no one has solved it.
[01:15:27] Thank you.
[01:15:29] Thank you.
[01:15:33] yeah yeah and the if you take a page like this hacker new where we have like 300 comments or  500 comments and they're nested so they're kind of a pain in the ass to
[01:15:43] Paginate?
[01:15:44] I mean, this is a good example because it makes it hard for people to cheat. Um,
[01:15:49] But it's showing a more extreme, but like this is a real thing.
[01:15:55] Generally, yes, but it doesn't have to.
[01:16:04] Thank you.
[01:16:06] I mean, watch my talk. I mean, it's right here. But the short of it was...
[01:16:13] Every framework that I did this one, not every framework, some of the frameworks did a lot worse.
[01:16:19] But this was solid start in this example.
[01:16:25] I did load a large page with a thousand comments, to be fair.  This was next page...
[01:16:30] directory.
[01:16:32] These are some other frameworks you guys may know.
[01:16:35] Thank you.
[01:16:37] This is Astro.
[01:16:41] This is React Server Components.
[01:16:44] This is quick.
[01:16:45] This is quick when I add the client side routing back in.
[01:16:49] Like, I'm not going to squabble over a couple ones and twos and threes.  Like, within plus or minus five, we're not going to make a big deal over.  But my point is...
[01:16:58] Thank you.
[01:17:00] Thank you.
[01:17:01] What I'm getting at is that these are partial hydrated solutions.
[01:17:07] The cost isn't necessarily the execution. Quick was actually the one that helped me here because Quick does not execute any code. It just like does not hydrate. So for the data serialization to make this much of a difference.
[01:17:21] is
[01:17:22] is basically saying that
[01:17:24] Yeah, this is a simple page.  Bigger page, this is a bigger concern.  But, like, quick hydration cost is not, like...
[01:17:31] Like, it doesn't scale, it is zero. You know what I mean? Like...
[01:17:39] Thank you.
[01:17:42] Anyways, you...
[01:17:46] Yeah, I'll keep this open because it's a good reference for the rest of the stuff I'm talking about here.  But what I'm trying to get at is...
[01:17:54] We, I talked about this part with a year, we were having a really hard time measuring the impact of any of these updates or changes, like making heads or tails of them.
[01:18:08] Right?
[01:18:11] It's all good, Dev.
[01:18:19] No, no. Quick as an MPA solved it. But once you like, like Astro as an MPA solved it, but once you add client-side routing...
[01:18:29] you're back again because
[01:18:31] there's the potential
[01:18:33] of something in the future
[01:18:35] needing that data and you can't be so restrictive on it.  Watch my talk. Honestly, it's, I'm not going to do the whole talk content again. It's,
[01:18:43] Uh.
[01:18:44] But yeah.
[01:18:50] Thank you.
[01:18:51] Yes, there's a pattern next.  Yeah, that's like a form of streaming.  But the thing is,
[01:18:56] that's sending the data over the wire too, right?  Like that's what streaming does.
[01:19:02] You can do it without server components too, by the way, just in case anyone's wondering.  And in fact, you can do it in most frameworks now.
[01:19:08] Not through server components, but you can send the data
[01:19:12] Yeah.
[01:19:16] Thank you.
[01:19:20] Thank you.
[01:19:24] I was trying a little bit a while ago, like we had a whole stream where I was talking about this.  Probably the original Facing Accidental Crisis, where I started like trying to hack stuff like into data URLs and like trying to like, I did one thing where I used HPH to...
[01:19:38] HTTP/2 push to like side load it and I actually got a performance gain. It was pretty cool. I got into the 70s.  But it wasn't very practical like
[01:19:48] Yeah.
[01:19:51] I think...  I'm not taking this as...  Like...
[01:19:58] I'm not taking this like, oh, we have to sell the problem.  I think we have to put in merit.  Not all pages are as data heavy.  And I think that...
[01:20:06] But I do think that it's kind of like when people benchmark reactivity, like signals benchmarks.
[01:20:11] They're great for library authors being like, oh yeah, I got this like graph shape faster, but they don't translate to your real app basically at all. People who like to push signals benchmark, it's like put.
[01:20:22] some load on the end of it. It's funny because Dan Abramoff made the same comment about JS framework benchmark. And I'm like, No, it's not the same because there is a load you are actually rendering DOM elements. There is like, you did put a resistance on on the, you know, there's a load on the end of the wire, so to speak.
[01:20:36] But like...
[01:20:38] What I'm getting at is
[01:20:39] Some things are expensive.
[01:20:41] So...
[01:20:42] If they're going to be and there are places where you can make improvements around those expensive things and improve performance.  But what I'm getting at is the diminishing return when.
[01:20:51] the expensive thing isn't addressed. So like from from my perspective,
[01:20:56] I just stepped back and I was like, okay, we're not solving this right now.
[01:21:01] So...
[01:21:03] What should we be focusing on?
[01:21:06] Right?
[01:21:08] Like, that's the question.  Because, like, as I said, we've been having a really hard time, right?  That was this.  I don't know if you guys saw that SSR benchmark from Fastify.
[01:21:18] Um,
[01:21:19] Bye.
[01:21:20] people have been trying to like show off the different server things and trying to come up with a comparison has been kind of a mess.
[01:21:27] You know, like...
[01:21:30] Thank you.
[01:21:31] The Fastify one was actually pretty funny because literally every framework went a few days where they were the fastest.
[01:21:39] And then something got changed, and then the other one got the fastest, and the other one changed, and the other one got the fastest.  Except React. Obviously, React was never the fastest.  But every other framework literally went through a cycle.  It was solid, and then it was felt, and then it was viewed.
[01:21:52] And...
[01:21:53] I did a stream about this a while back.  I'm going to take a look at it.
[01:21:57] uh,
[01:21:58] I don't remember which one exactly, maybe I should find it for someone, but where I actually went in detail about the differences between the different versions of the implementation and the different tricks and different approaches they did to try and find the fairness.
[01:22:10] But the initial results were all over the map.
[01:22:14] And, uh,
[01:22:15] Yeah, this is we've gotten to a part where there isn't like it's not that clear.  I do. I base my work off empirical
[01:22:23] stuff. So it's really hard when you can't
[01:22:26] when you can't like focus in on what you're actually improving.
[01:22:33] Thank you.
[01:22:35] Thank you.
[01:22:38] Thank you.
[01:22:40] Thank you.
[01:22:42] Yeah, I'm just reading chat here a bit. Can we not just send the data for that aren't going to be hydrated as long as we integrate the fetch room? Okay. I don't know if I want to get into this. The problem that our RSCs have is...
[01:22:55] You have to serialize
[01:22:56] the props. So
[01:22:59] Because you're on the server, right?
[01:23:03] And...
[01:23:04] You could
[01:23:06] not render something initially on the server.
[01:23:08] or you could render something on the server, but you could conditionally not render it initially on the client.
[01:23:14] is the way to put it. So like picture your server component
[01:23:16] has a bunch of
[01:23:18] markup or something, right?
[01:23:20] solid
[01:23:23] Here, let's pick something here. See how I can toggle the visibility, right?  You could pretend that this toggles a client component that does the toggling,
[01:23:31] But inside here is server-rendered markup. Okay? Now,
[01:23:36] if
[01:23:38] This is closed.
[01:23:40] And I send it
[01:23:42] to the client,
[01:23:44] I'm still sending this.
[01:23:46] Because
[01:23:47] If the page rendered like this and then I open it, I'm not going to go back to the server and fetch it again.
[01:23:52] So I still render everything with the server components, you know,
[01:23:57] If the server component decision points point me a certain way, even if the client could or couldn't show it, I'm still going to render it.
[01:24:04] That means that coming into the client components, I have to render the prop, which means I have to render this, which means that if it's visible,
[01:24:10] on the page like this, I am rendering as HTML and as JSX JSX on.  And my understanding, actually, this is the fundamental problem.  React server components are even more so because they diff when different stuff comes in the class server.  They actually want the whole data tree.
[01:24:26] in the quiet. So they literally just send everything twice.
[01:24:30] And some, as a...
[01:24:33] as a...
[01:24:35] God.
[01:24:36] Parasocial mentioned earlier, JLark, I forget what account you're working under today.
[01:24:43] I hope that explanation explains it.
[01:24:48] Thank you.
[01:24:52] I mean, I'm okay if we're talking about a specific technology that's React focused. My problem is
[01:24:59] is...
[01:25:01] not
[01:25:02] looking at it that React server components and Astro Islands are the same thing.
[01:25:08] We have to look at it in that kind of
[01:25:11] Scope.
[01:25:12] There's difference in implementation, but fundamentally what they're trying to accomplish, principle-wise, is very similar.  I think implementation matters.
[01:25:21] This is an important thing that I think people have to understand.
[01:25:25] though, is because
[01:25:27] There's quotes.
[01:25:29] You know?
[01:25:31] I'm going to switch to, sorry, no, I'm going to switch to this view for a minute.  There are quotes of me on the web.
[01:25:39] you know, like on Twitter and stuff, saying things online. It's like, "The future of React is bright," or something, a couple years ago. And I believe that because I'm a pragmatist, right?
[01:25:49] React.
[01:25:50] Thank you.
[01:25:51] is
[01:25:52] a framework that is popular,
[01:25:54] It's a framework where its maintainers are doing the right things.  They are improving it in meaningful ways.
[01:26:01] They're making it easier to use.
[01:26:05] So how, and it's the most popular solution out there.  So how can the future of React be anything but bright?
[01:26:11] But,
[01:26:16] If I close my eyes,
[01:26:17] and think about the best possible solution for the future of the web. It's not React.
[01:26:22] I think that's kind of understood now.
[01:26:26] There's a reason why no new frameworks look like React.
[01:26:30] There's, you know, there's like, yes, when we're talking about people, we're talking about training and education and ecosystem and people and jobs and hiring.
[01:26:42] React's a no-brainer.
[01:26:43] It has a very bright future.
[01:26:46] But if I'm thinking empirically of the best possible solution that I could have for the web,
[01:26:53] Something like React is not part of it.
[01:27:00] Thank you.
[01:27:01] so yeah I mean if anyone wanted to know what I actually think about React that's it
[01:27:08] It's funny because Dan Abramoff often talks about evolutionary dead ends.  He like, I don't have those tweets anymore because he deleted them off Twitter.  But for a while there, he was kept saying, oh, I don't see any interesting.  It's an evolutionary dead end. It's dead end. Blah, blah, blah, blah.  And it's like.
[01:27:24] You can say that all you want.
[01:27:26] You can be the loudest voice saying that,
[01:27:29] But look what people
[01:27:32] who create our building. They're not
[01:27:34] building React.
[01:27:38] Thank you.
[01:27:38] Like, don't be wrong, the people who are working on React are building React, and the people who work on React are brilliant.
[01:27:46] It's just...
[01:27:48] It's funny...
[01:27:51] situation we find ourselves in where people are like, React for a very long time has been in this boat where the next thing will be the fix.
[01:28:01] People are like, "What's up with the performance?" And it's like, "Oh,
[01:28:04] Don't worry.
[01:28:05] there's server components coming.
[01:28:07] there's a compiler coming.
[01:28:11] Sure.
[01:28:13] These are great technologies.
[01:28:14] Honestly, not enough people are talking about the React compiler.
[01:28:19] maybe too much discourse about server components. But
[01:28:24] It doesn't change.
[01:28:26] the, you know, this kind of fundamental fact from where I'm sitting.
[01:28:32] We knew the compiler wasn't going to make React faster.
[01:28:35] Like, it's fundamental. I think everyone should have understood that, but the takeaway, and I don't even know if the people who said it were actually...
[01:28:44] like trying to mislead people. I don't think they were, but the takeaway from the community was like, okay,
[01:28:50] Don't worry, we'll wait. React will get there.
[01:28:54] The reality is React is never getting there.
[01:28:57] It's fine.
[01:28:59] That is perfectly fine.
[01:29:01] React is exactly what it's meant to be.
[01:29:09] But...
[01:29:11] You know, this is why
[01:29:13] It's funny, more and more over time, I just...
[01:29:16] started not caring as much as NextConf, which is very interesting because they had a bunch of really
[01:29:20] There's a couple of really cool innovations that came there.  I think some of you guys saw that trick with the timeout in terms of canceling promises.  The funny thing that when you're working in the space,  not working directly in the space, like on the frameworks, you don't realize it's
[01:29:32] People come up with tricks like that all the time to solve problems that they create because you're like, OK, I want to have an abstraction like this.  The abstraction kind of leaks.  How do I.
[01:29:44] Thank you.
[01:29:44] practically in a reasonable way.
[01:29:46] If you've ever seen how solid to create async does hydration on the client, you know exactly what I'm talking about.
[01:29:52] But...
[01:29:54] Thank you.
[01:29:56] the reality is I sat there and I was like okay this is cool but is like does it apply to
[01:30:00] No.
[01:30:00] Because I didn't create that problem in the first place, so I don't have that problem. Like it's hard to get excited
[01:30:06] about problems you create yourself.
[01:30:09] It's hard to get excited about fixing
[01:30:14] or improving on a paradigm
[01:30:16] that already doesn't accomplish
[01:30:18] what I wanted to accomplish in the first place.
[01:30:22] So...
[01:30:23] like viewing React on a whole like that
[01:30:26] is kind of
[01:30:28] where I'm sitting.
[01:30:33] Thank you.
[01:30:36] Anyway.
[01:30:37] Sorry for that little tangent.
[01:30:39] Had to get off my head. It's going to come back again in a minute probably.
[01:30:43] Especially when
[01:30:46] we talk about the future in AI, which we'll get to in a bit.
[01:30:57] The Reacting of the web with the composable pattern, yeah. I think I've learned a lot
[01:31:03] from React.
[01:31:04] And I mean,
[01:31:06] *sigh*
[01:31:08] it's one of those things where like
[01:31:11] Thank you.
[01:31:14] React has changed the way everyone views the web in a way that
[01:31:17] is
[01:31:19] I can't emphasize...
[01:31:22] its legacy and can't emphasize like the impact.  In fact, I did a whole stream on this.
[01:31:27] It's funny, it's been a couple years now.
[01:31:32] YouTube.
[01:31:34] Bye.
[01:31:35] Uh, where's my...
[01:31:38] I think it was... I'll see if I can grab it, but it was like the...
[01:31:41] uh, do do do do, not talks, past live streams.
[01:31:46] Why am I just not seeing it here live?  It was basically on...
[01:31:51] Thank you.
[01:31:53] Thank you.
[01:31:54] React, the most prolific JavaScript framework or something along those lines,
[01:32:02] Probably not. Yeah, React.
[01:32:05] This one. Did this two years ago.
[01:32:08] I'm going to go.
[01:32:09] Why is the time so big on there?
[01:32:13] Sorry.
[01:32:14] Let's get rid of that.
[01:32:17] Thank you.
[01:32:18] There we go.
[01:32:21] But it's like...
[01:32:25] That's great. But where do we go to next? Because we can't just like stay in the same place.
[01:32:30] that
[01:32:30] Uh, what do you got, Dev?
[01:32:34] Is this what you said to Dan Abramoff?
[01:32:43] Oh, yeah. We found one of his evolutionary dead ends. He brought them over to Blue Sky. I guess it's so commonly in his vocabulary.
[01:32:51] Thank you.
[01:32:53] Any solution that doesn't earnestly take advantage of two-world split, an evolutionary dead end, because the two-world split is fundamentally the shape of the problem.  This is very interesting, because I would say the exact same thing about statefulness being a fundamental shape of the client.
[01:33:04] Any solution that doesn't use signals to be similar to a solution dead end.
[01:33:09] Yeah, it's funny. But yeah, it's funny. I don't like talking in absolutes like this, generally speaking. It's just...
[01:33:17] Um,
[01:33:19] I
[01:33:20] It's just one of those...
[01:33:22] things and some of it is because I often view the mentality react as a subset of
[01:33:26] of what we do with reactivity because
[01:33:30] In...
[01:33:31] React components are reactive and in signals,
[01:33:35] Like...
[01:33:38] the whole world gets to be reactive.  Like, essentially, like, you can view, you know,  you can view React's render as, like,
[01:33:46] I'm like a Memo in effect.
[01:33:49] Anyway.
[01:33:56] Thank you.
[01:33:58] I find comforting the fact that React is Java, okay, where it is solving problems with crit is often log-related. So effectively I'm running React every day. Yeah, that's the thing.
[01:34:06] React is a very bright future because people use React and will continue to use React.
[01:34:12] It's funny because on this blog post, at the end, the first comment is, "React is dead." That's like the first top comment on this. Let me scroll down here. It's something along the lines of like,
[01:34:25] Thanks for the article. It was interesting. I understand that you're somewhat of a public figure and you probably wouldn't mind what you say and how you do it, but I don't have a problem saying I have to see it. React is dead.
[01:34:34] No, React is not dead.
[01:34:35] Um,
[01:34:38] And I think I want to say this,  so the millions of applicants  have been in React  and those requirements,  but what's beyond my confidence  is starting a new product in React.  People will still start  new products in React.  It's the obvious choice, right?  There's a bit of like,  no one got blamed for,  what was that stupid thing?
[01:34:54] I can't even remember the saying now.
[01:34:57] No one gets fired for choosing...
[01:35:00] Thank you.
[01:35:03] I can't even remember the saying now.  It's just like blanking.  IBM?  Yeah, IBM.  Yeah.
[01:35:08] But the reason that saying is even a saying is because everyone jokes about like...
[01:35:13] Apple coming in, right?  Like the...
[01:35:17] Thank you.
[01:35:25] Thank you.
[01:35:30] *sad music*
[01:35:33] I think it's both. I think
[01:35:36] I wasn't going to get into this until we talked about AI though.  So let me go a little bit further.  I know I launched into that a bit,  but I think it's both because I think it comes down to language.  I talked about this.  If you've ever seen my world beyond components talk from a couple of years  ago,  um,
[01:35:54] Yeah.
[01:35:55] It's not just the performance.  I'd sit about React being kind of like this like subset thing.
[01:35:59] of like the zone of which we can design in. But it, and don't get me wrong, sometimes  adhering to limitation is the greatest form of like innovation.
[01:36:08] But it's like...
[01:36:10] Um,
[01:36:11] being able to describe a problem. He's felt three on an extreme,
[01:36:18] had a lot less language to the design problem.  Yeah, I'm going to talk about this when we get to compilers.
[01:36:23] Yeah, let's continue on.
[01:36:26] I
[01:36:26] Let's finish the server stuff first.
[01:36:29] Only the Sith deal in absolutes, yeah.
[01:36:34] Thank you.
[01:36:43] All these evolution dead end etc. sound like growing scope ambition to me. If you seek to cover more of course you need to take more to count otherwise you're faced with a dead end. Yeah. Maybe this is just Dan Abramoff projecting.
[01:36:55] Like, where can React go from here?
[01:37:02] Anyways, I was saying how this was very difficult to tell the impact of any of these technologies. Benchmarks suck.
[01:37:12] Marketing. God, don't get me started on marketing.
[01:37:15] Um,
[01:37:17] One of the biggest ones for me that everyone knows me knows one thing is
[01:37:22] Again, this is part of this React world mind view.  PPR.  PPR is a real thing.
[01:37:28] And you can technically see why there could be benefits to it.  But it's also one of those things that is probably like,
[01:37:37] way, like, kind of overhyped in a sense, because like,
[01:37:42] It's about how fast you can get the static stuff that's already static out there.
[01:37:46] So like,
[01:37:47] Do you serve the static part from a CDN or do you serve it or do you send a static string
[01:37:53] to
[01:37:54] your user from an Edge server.
[01:37:57] Don't get me wrong, the CDN in theory should be faster, but like,
[01:38:01] How much are you willing to go through to get there?  The problem is in something like React,
[01:38:07] PPR.
[01:38:09] I saw someone claim that PPR removed loading spinners, and I was like,
[01:38:13] And then it occurred to me that React had no way to say hold the stream.  You know how like remixers defer?
[01:38:18] And in Solid, we have similar defer stream.  In React,
[01:38:22] They were basically, they didn't realize they could defer the stream, so they used PPR essentially as a way of...
[01:38:27] You know, it was not deferred because it was all... this part was pre-rendered, but essentially it got rid of the loading splinters because it deferred the stream.
[01:38:35] Right, like you said, don't send the stream until this content's ready.
[01:38:38] And I...
[01:38:40] You know
[01:38:42] I was annoyed enough one day that I was like, screw it.  I'm going to take a PPR site.
[01:38:48] and I'm going to take a Netlify Edge site, an Edge stream, and show that there's basically no difference between them.
[01:38:55] Right?
[01:38:57] I mean, Vercel didn't lie.  Their PPR is faster than their Edge.  It has to do with network hops.  It has nothing...  It doesn't necessarily have to do...  Like, by using PPR, they circumvented their own infrastructure.  So, yes, it's faster.
[01:39:14] Netlify Edge actually has to do a similar kind of hop thing,  but they're on the same hub.  Like...
[01:39:20] Dino has it so that their edge and their...
[01:39:24] like routing things in the same place.  They're not like jumping back to Cloudflare or something, but like Cloudflare itself
[01:39:31] has a very fast edge.
[01:39:33] Right?
[01:39:34] because they're not going through these AWS or through these, they're not resellers. So it's not a fundamental issue of the technology.
[01:39:42] Edge streaming is fast.
[01:39:44] It's that...
[01:39:45] Um...
[01:39:48] it's unfortunately that the infrastructure basically invented a technology to  make it faster,  so to speak.  Right.  And there's other reasons too,  right?  Obviously,  if you keep your server,  uh,
[01:39:59] farther from your database,
[01:40:01] Waterfalls on the server suddenly matter. And as we know, React server components are
[01:40:07] don't really protect you against server waterfalls. And if you pretend server waterfalls don't exist, you're going to hit them. So the best way to mitigate that is to put your database next to your web server. But
[01:40:18] If you treat it like a client app, like if you're isomorphic, you're already guarding against waterfalls.  So the perceptual difference between rendering it on the edge or rendering in the client  and the waterfall attribution basically means that it doesn't actually make a difference.  And I took Vercel's own example and remade it, and sure enough,
[01:40:34] Actually, in this case, solid on the edge was slightly faster, but
[01:40:39] I'm not...  Like...
[01:40:40] I'm comparing salt to React there. That's not what I'm trying to do. I was trying to show that PPR
[01:40:45] for a simple static site didn't really matter.
[01:40:49] Obviously, there's also Astro server islands, which
[01:40:54] If your content, primary content is not dynamic,
[01:40:58] is a brilliant solution. It's the new Jamstack, as far as I'm concerned. You know, Jamstack, dead, long-lived Jamstack, as you guys are saying. Astro Islands, instead of using the Edge,
[01:41:07] Get the thing from the CDN and then start the request from the client.  It's like old CSR, except with static pieces.  It's a brilliant solution.  I don't know if I showed an example here.  It was...
[01:41:18] slower
[01:41:20] It was fast on this example because the main content was mostly static.
[01:41:25] But like, if I tried to do like a Hacker News or like any actual app, like example, it's the same.  It's like CSR all over again.  Like you'd be better just like.
[01:41:35] waiting for the response to like old SSR from...
[01:41:38] five, ten years ago or whatever. But
[01:41:41] if your primary content is mostly static, Astro
[01:41:45] Server Islands are the perfect technology.
[01:41:47] and way simpler than PPR or setting up edge streaming.  So there's that kind of thing, but like,
[01:41:54] In terms of complexity,
[01:41:56] PPR is the most complicated.
[01:41:59] Um,
[01:42:01] And it basically has almost no benefits over efficient edge streaming. Yet, I don't know if you can get the capabilities in React Land
[01:42:07] Without it.  Like, because...
[01:42:10] It's a next.
[01:42:12] and the React has only been building features so far as it seems to cater towards the next solution.
[01:42:18] So like, we're kind of like on this path.  I would have, I probably should have made an example  on Remix and showed Edge streaming from Remix.  I think that would have maybe been more effective way  of proving my point.
[01:42:28] But like...
[01:42:29] Essentially,
[01:42:31] It bugs me a little bit that like,
[01:42:36] Yeah.
[01:42:37] It's tricky. We need this is this is the whole conversation why we're just kind of spinning our wheels because it looks like we're not really accomplishing much of anything.
[01:42:49] I feel like React is too complicated for what it does. When you don't have various requirements or performance architecture, it's just so much more work to get something to work. I mean...
[01:42:57] I don't know. Yes and no. I think complexity is going to be the driver of our conversation today.
[01:43:05] Right.
[01:43:08] Like...
[01:43:10] There's a bunch of people I mentioned here not wanting to wait through this mess. They basically are looking at
[01:43:16] Laravel, and they're looking at traditional servers.  You know, this is a great...
[01:43:20] Choice.
[01:43:21] when your solution falls in
[01:43:26] a place where that makes sense. Like, you know, if I bring back our diagram here, if you're over here,
[01:43:32] even up to e-commerce maybe you know you're fine but if you live over here
[01:43:38] It's... don't kid yourself.
[01:43:40] HTMX is not going to save you.
[01:43:42] But most people are over here, so it's like, why the hell am I trying to...
[01:43:46] put React on my marketing site. I mean,
[01:43:48] I'm with you. It's just like,
[01:43:53] We have good solutions over here.
[01:43:55] Especially when you consider stuff like Astro as well.  But Astro is a complexity jump for people, right?  It's like now you have VEAT and Bundlers and Build Steps.
[01:44:04] It's funny because classic languages have compilers too, but in JavaScript, it's such a like...
[01:44:11] It's...
[01:44:12] You know?
[01:44:15] Most people doesn't mean most money yet.
[01:44:19] - -
[01:44:21] Yeah, okay. And I should be careful of...
[01:44:26] interchanging the words, and I might have in my article.
[01:44:31] Complicate and complex are two very different things. The solutions
[01:44:34] that
[01:44:37] we are getting to are definitely more complex.
[01:44:40] There's a lot of, it's not just moving parts, but emergent behaviors caused from the different pieces working together.
[01:44:48] So,
[01:44:49] Yeah, I should be careful with the use of the word.  I agree.
[01:44:54] you
[01:44:57] So like...
[01:45:00] I don't know. All I wanted to kind of wrap up on this point is that like we went back to the basics, you know, everyone's like, you know,
[01:45:09] 21, 22, we were like, you know, like when all these meta frameworks came up, we're like,
[01:45:13] Server rendering, you know,
[01:45:14] just HTML, you know, the, like the, the, the remix mentality that, you know, we were talking about earlier, but I think we're starting to realize as people are building bigger and realer projects on these technologies that like.
[01:45:28] You need...
[01:45:30] Like...
[01:45:32] It's not that simple, right?
[01:45:35] you end up kind of getting back there.  I think the classic one is you start your app on RSCs  and then end up making everything into a client component.
[01:45:42] I've seen it happen.
[01:45:44] Like...
[01:45:46] It's...
[01:45:48] We're in an intro, you know, we're in this kind of weird zone where we haven't really solved it and
[01:45:55] At least there's different solutions to attack the problems, but you know,
[01:45:59] There's varying degrees of complexity. Most people who follow the stream probably are doing okay at following along with this, but
[01:46:07] I don't know how anyone else does.
[01:46:15] Right. Okay, this is a good one.  Gavin, I'm the most popular build system  since I can work in a special ID.  So, I don't know. It is kind of funny  because I sometimes feel like the no build
[01:46:26] People,
[01:46:28] are also like
[01:46:31] The...
[01:46:32] the like.net Java people. It's like, it's a weird place. There's like, you could take the people who are like no build web components,
[01:46:41] And like,
[01:46:43] classic back end and it's like
[01:46:46] there's a certain alignment they have there.  You know,  maybe it's like an anti-react kind of sentiment.  Um,
[01:46:52] I don't mean React, I mean anti-front-end framework in general  kind of sentiment. And it's like
[01:47:01] I don't know. If you put the whole picture together, I'm not sure. I'm not sure that it, like, I think you're just, like, moving where the pieces fit. And there's a reason that the focus has been in a different place the last few years, or last while, because...
[01:47:15] Part of it initially was because we all wanted an ice marks experience.
[01:47:21] It made everyone want to develop apps.
[01:47:24] But I think it's also because to accomplish...  I think it's hard...
[01:47:31] Like both sides, it's hard to approach this middle zone.
[01:47:36] Thank you.
[01:47:36] Anyway.
[01:47:43] Aren't no-build people, real-people?  Like Ruby and...  Okay, I mean, yeah, I mean, DHH is often talked about...
[01:47:50] about no build. So I guess there's them too. What I'm...
[01:47:56] It's- it's just- it's-
[01:47:58] It's interesting to me because the if you fall down the conclusion.
[01:48:03] of what
[01:48:04] They're hoping to accomplish
[01:48:09] It's funny, I call it uninteresting. I don't know how else to call it. It's just like,
[01:48:12] it doesn't do the thing. There's a reason why I kind of put them over here in the diagram. Like it's like
[01:48:19] Yeah, I don't know.
[01:48:23] Thank you.
[01:48:24] No build is a myth.
[01:48:30] Thank you.
[01:48:31] Thank you.
[01:48:33] Right. I mean, people are worried about timing to build, but it's funny. I used to use like Visual Studios and I remember like I used to build games. I had like a game engine I built in C#. I remember just waiting forever. I mean, this is why JavaScript was so freeing when I returned to it. I was a JavaScript developer. And then I spent, I mean, I'm not a JavaScript developer. I was a kid. But then I spent a bunch of years in the .NET ecosystem over a decade. I was doing everything from web to trying to make video games. And then I went back to JavaScript and I was just like, pooh, you know,
[01:49:02] But like...
[01:49:04] I mean, this leads us right up to the next topic where I want to talk about, which is compilation, right?
[01:49:10] I made this joke to Rich Harris a couple years ago, but like...
[01:49:15] Um...
[01:49:17] I think we can't deny
[01:49:20] that compilation is ever-present aspect of JavaScript development.
[01:49:24] You know, we hit something we can't do, you know, maybe it's a browser feature or, you know, like isn't in this thing, you know.
[01:49:31] Internet Explorer doesn't have blank.
[01:49:33] clunky syntax.  You know, we don't like...
[01:49:36] calling our signals as functions, the ability to address language shortcomings, you know, doesn't have types.  We build a compiler, pretty much, you know.  It's so ubiquitous at the point that if you guys saw that whole, like, I can't remember what it's called.  Like, it's not like, is it not standards thing from CC39?  I can never remember what it's called.  It's like, they're talking about having a compiler track, basically.
[01:50:01] Um,
[01:50:05] Right? Like...
[01:50:09] It's an interesting proposition.  I don't know if it's a great idea, but  we're kind of like acknowledging  that the compilation is...
[01:50:17] basically a huge part of JavaScript.  Because like,
[01:50:22] And bundling through extension, right?  Because like...
[01:50:25] Let's list some of the benefits here.  I mentioned some of the article, but I feel like there's more.  Types.
[01:50:31] Linting.
[01:50:32] tree shaking, code splitting, minification, Iphomorphism, you know, convert the code to work differently in the client server.  We do that in solid a bunch. Macros.
[01:50:41] you know, use server.
[01:50:45] server dollar sign,  DSLs, you know, different templating languages,  like, you know,  JSX, for example.  Monolithic authoring distributed deployment. This is something  seen a lot of now in MetaFrame, which you like,  write your code in one way, and then
[01:50:59] it shows up, you know, this can deploy to Cloudflare,  this could deploy to AWS, you know,  and even the same project could be split  across multiple workers or whatnot.  These are things, you know,
[01:51:12] that
[01:51:13] Uh...
[01:51:14] Okay.
[01:51:15] you can do in other languages as well. I'm just saying like,
[01:51:19] This is the kind of power that you have with...
[01:51:24] with build.
[01:51:26] Yeah, HMR is probably a good extension of this I haven't talked about.
[01:51:34] Thank you.
[01:51:36] Yeah. Yeah. I mean, tree shaking is incredible. I've shown this on stream before, but like in solid,
[01:51:43] If you don't use transactions or, sorry, my favorite one is if you don't use suspense, but the router has transactions,
[01:51:50] We actually tree shake the transaction code completely out of the solid
[01:51:54] Like if you're using, even if the library uses transactions, but you don't have like the suspense to trigger it or something like basically.
[01:52:01] Like, although I don't know if that's the right mentality for that feature at this point, but a whole different thing.  But like...
[01:52:06] Basically, you can tree shake
[01:52:09] code paths
[01:52:12] Within...
[01:52:13] like a function, you can have a function with conditions, like Boolean conditions. And if you never
[01:52:19] If you set them to false by default and you never import a function that could set it to true,
[01:52:24] It literally changes the makeup of your code.
[01:52:28] It drops out
[01:52:31] chunks of code like as I said
[01:52:33] if you just use it's so funny because people go and they go oh solid seven kilobytes
[01:52:38] But in reality, Solid's smaller than Preact,  like, unless you use the features, because...
[01:52:44] if you only import certain things,  the other things drop out all the scheduling stuff,  all the suspense that that's,
[01:52:50] like all the transactional stuff,  like this is such a powerful thing.  Yeah.
[01:52:57] when you consider the extent it is,  there's no comparing.  It's funny because when I was at eBay  and we were talking micro front ends  and people were trying to bring in,  what was it, module confederation with Webpack  and we were like...
[01:53:09] There was actually a debate between the framework maintainers and some of the project teams because a bunch of them were like...
[01:53:18] Bye.
[01:53:19] Like...
[01:53:20] It's sometimes better, depending on the type of library it is, especially if it's like a large utility library to compile in the specific
[01:53:28] tools for the specific
[01:53:30] page, even if there's potential duplication, than it is to pull in the whole library with stuff that no one would possibly use, and especially multiple versions of the SID library with functions that no one would use.
[01:53:42] the giving up the tree shaking was huge. Um, like,
[01:53:48] Yeah.
[01:53:51] Yeah, I mean...
[01:53:54] All these technologies like we've been talking about, like with partial hydration, resumability.  How do you how the hell do you do that without compilation?
[01:54:02] Right?
[01:54:04] I would say every advancement in the past 15 years in this field has been built on this foundation. There's no alternative that could even remotely be considered adequate by comparison. Call it unfortunate, call it a limitation of the JavaScript language, call it necessary complexity, but to deny it is futile.
[01:54:21] You guys all know what I feel about the no-build topic.  I think...  I think, like...
[01:54:26] People aren't even on the same planet at that point.
[01:54:29] However,
[01:54:30] I do
[01:54:32] think we should be critical of it. I think we have to understand where this complexity comes from.
[01:54:39] I don't see how people who build stuff reach me in the bathroom.
[01:54:43] Who cares?
[01:54:44] Well, there's like a whole...  Do I talk about the shift left here?  Yeah.
[01:54:51] Maybe later.  But there's like a whole...
[01:54:55] Like...
[01:54:57] Even stuff that happens in your IDE
[01:55:00] Um,
[01:55:01] I had a whole stream with Dylan from Marco, and we were talking about all the tools you need to make your own custom language, like Marco.
[01:55:11] Like...
[01:55:11] A lot of the tools run in your IDE or they run pre-build time as well. There's build time,
[01:55:17] authoring time
[01:55:19] you know, like there's different steps and different points at which they run, but they're all the same kind of mechanics and they're all compilers in a sense.
[01:55:27] Thank you.
[01:55:30] Thank you.
[01:55:32] I'm, uh, for the end of the start, the front, I've started for the base of Web. Well, I mean, this comes mostly from the fact that they, they, they can approach developing on the web, like an application, like the learning, um, react as a client dev kind of perspective is very similar to learning how to develop for iOS.
[01:55:56] Like you're like, "Okay, I can make an app and put it in the App Store."
[01:55:59] They don't need to know that it's a client server architecture.
[01:56:04] Really, they can literally just build something like it's a single application.  That's one of the main points.  So that's why they aren't familiar with basic web because they are taught how to build applications.
[01:56:25] Thank you.
[01:56:26] Thank you.
[01:56:28] Thank you.
[01:56:47] Well, I mean, HXMWRLF only is server-driven. In this stream we care about...
[01:56:54] Both, right?  There's an argument that, like...
[01:56:58] All interactions should be both. You need to give the, if you want your stuff to be responsive, you should be giving affordances to the user immediately. And don't get me wrong. I'm sure HTMX is a way to do like placeholders and of some sort. I don't know how much it has to escape the model to do optimistic updates, but I'm not going to contend on that. I think the challenge is actually shared state. And I think that's where things get tricky when you have state that persists in the client.
[01:57:23] and can change
[01:57:25] Because you have to communicate that back to the server to have the server put in the right, render the same stuff, or you have to wait till it comes back again on the client to actually do the thing.  Because...
[01:57:35] The problem is if the state of the client and the way that it interacts with the pieces
[01:57:40] on the, like, if it gets complicated enough, it becomes very prohibitive.  And you start getting like ASP.NET, like old school, like ViewState, where you start like  serializing the whole page.  What's lovely about HTMX is it's not opinionated about the state management aspect, so you can  literally use it for anything.  But on the same side, the trade-off is that it's like not a complete solution.  It's like not a whole thing.  It's like, this is a good tool, but it's not like...
[01:58:02] Like, I can't put it on the same scale of comparison to, like...
[01:58:06] the stuff I talk about  because it just like
[01:58:08] They...
[01:58:08] It isn't intended to actually solve...
[01:58:11] the problem.
[01:58:15] Thank you.
[01:58:16] This is one of those things though, it's like one of those things, what if you can make the servers super fast and do everything through server, the problem is a server can never be as fast as a server.
[01:58:26] Fast.
[01:58:27] Like, it's like, don't get me wrong, things can be made faster over time, but it's like,
[01:58:36] Every piece can be made faster over time. It's like when you're talking about like internals of a computer.
[01:58:41] and you're talking about the CPU versus like the level 1, 2, 3 caches and the RAM.
[01:58:46] And then you're talking about the hard drive and then you talk about the network.  You know that each step down the ladder is exponentially slower.
[01:58:52] So like...
[01:58:55] the closest you can be
[01:58:58] To the source.
[01:59:00] is the interesting, the question is sometimes the source isn't what you think it is. The source is the user, i.e. it's interactive. Then
[01:59:08] you want to be close to them. Sometimes the source rarely is the, but it can be, is the, it's the server. It's the database. It's the thing driving it. And the user is not, is not really a participant in that case.
[01:59:18] There's a good argument for the opposite side, which is something like Live View or whatnot.
[01:59:24] Yeah, it's interesting.
[01:59:29] Thank you.
[01:59:30] Yeah, and there's a little bit of that.
[01:59:32] But I think we need to at least understand it.
[01:59:37] Yeah, exactly. The worst part is the complexity.
[01:59:41] We have to understand the complexity.
[01:59:44] I agree with you here, Darrell.
[01:59:47] What we disagree is I think that you have to understand that the benefits...
[01:59:52] are important.
[01:59:54] Me as a developer would trade my happiness for end-user happiness
[02:00:00] You know, theoretically, like I would
[02:00:02] pay extra seconds of build time on my side,
[02:00:05] you know, to ensure that the end user gets the best possible experience.  I don't want to do anything to sacrifice the end users.
[02:00:12] experience. Their experience is way more important
[02:00:14] than the cost that I have, generally speaking.
[02:00:18] So, I...
[02:00:20] But my problem is I don't like when people hide the complexity.
[02:00:25] you know, marketing when they pretend like it's not a real thing.  The worst of this category is just JS.  When people go, it's just JS because.
[02:00:34] Man, like...
[02:00:37] Nothing is just JS or everything's just JS, right? In a sense, compilation is just JS now at this point. Babel changing your code, you know, to support ES25 or whatever is just JS. But like...
[02:00:49] Oh.
[02:00:50] I don't know, I had big arguments with people who were like, Svelte 3 is just JS.  It's like, no, JavaScript does not act that way.
[02:00:58] And I think
[02:00:59] This is one of those kind of funny bits is I've had the same conversations now with people who were on the React compiler who were like, it's just JavaScript now.  And it's like.
[02:01:07] But it's not.
[02:01:09] I...
[02:01:10] You know, like...
[02:01:12] That isn't what gist.js is.
[02:01:14] Um,
[02:01:15] Old React, arguably, they were also just JS quote  because they were load level, right?  JSX was just calling function calls.  I agree more with that definition of JS
[02:01:25] just JS, but you can't have them both be just JS. This is why the talk about compilers in the,  like the last year has been kind of one of those, like,
[02:01:34] muddy topics because
[02:01:36] I've literally have both sides telling me it's just JS.  And the funniest part about this, it's a swap that's happened.
[02:01:43] react
[02:01:45] has gone with their compiler to be something more like Svelte 3.
[02:01:49] It's not the same, but they've simplified their syntax significantly so that you don't express things in terms of performance optimization, which probably makes sense.
[02:01:59] because hooks, especially memorizing hooks, were there specifically for performance. They
[02:02:05] they had nothing to do with execution.  Like they did in the fact that you didn't recalculate values  and you had to go manually do it.  But they are different than computed in reactivity.
[02:02:18] I didn't always understand this,  but Dan Abramoff,  like for them,  I,  you could tell in their head that those extra hooks,  like use callback,  use memo,  react.memo,  we're just kind of like,
[02:02:28] temporary placeholders for an idea of how they thought things should work in the future.
[02:02:32] which is a very different role than like computed things have in reactivity.
[02:02:38] But...
[02:02:39] Thank you.
[02:02:39] That being said,
[02:02:41] You...
[02:02:42] You can't observe
[02:02:45] the render anymore. If you put a console log, it's not going to necessarily run where you wrote it.
[02:02:51] Um...
[02:02:53] they've changed the mechanics of how your code runs under the hood.
[02:02:58] So
[02:03:00] In a sense, it's basically all to auto-memolize, like all to prevent certain code paths from rerunning.
[02:03:08] too much. And that's actually what the Svelte 3 compiler is. People wondered how Svelte 3 worked without a VDOM. You know, it wasn't signals.
[02:03:16] Oldsfeldt
[02:03:17] Dominic Ganaway went as far as saying that it was basically a VDOM, but it wasn't so much a VDOM, it was more like
[02:03:26] a dirty checker, kind of similar to Angular, but
[02:03:30] it had an auto-memoizing compiler, essentially.
[02:03:34] That's what Svelte 3 is. It's an auto-memoizing compiler over Angular-style dirty checking.
[02:03:40] Uh...
[02:03:42] And...
[02:03:43] What the React compiler is, is an auto-memoizing compiler over VDOM.
[02:03:47] There's a huge amount of similarities between those.  But ironically, at the exact same time, Svelte
[02:03:53] change from that to Svelte 5
[02:03:57] Which is...
[02:03:58] basically a compiler that is a syntax sugar over fine-grained signals rendering similar to something like solid.
[02:04:08] Mm-hmm.
[02:04:09] It's a very...
[02:04:10] interesting switch of positions.
[02:04:13] Right?
[02:04:20] Okay, I'm catching up with chat here.
[02:04:23] Why hasn't React stopped using GDOM? I'm dumb.
[02:04:27] Well, it's because...
[02:04:30] The VDOM is not
[02:04:33] Thank you.
[02:04:35] and implementation detail in React.
[02:04:37] That's one of the biggest lies we've probably ever been sold.
[02:04:42] It is in a sense, but let me explain what I mean. React's mental model is one that requires re-rendering.
[02:04:49] That is, when you look at the code,
[02:04:52] your expectation, even without the compiler, even with the compiler removing the hooks and stuff, it's you see the code, you update it, it reruns. That is the React mental model.
[02:05:03] If something reruns...
[02:05:06] And the expectation is that it runs over and over again.
[02:05:09] You need
[02:05:11] a virtual representation.
[02:05:13] It's, um...
[02:05:14] Immediate mode, not retained mode, right? You can do smart optimizations under the hood.
[02:05:19] But conceptually,
[02:05:25] you are recreating everything every time, even if you aren't. And that alone
[02:05:31] is why React is a VDOM, in my mind.  Like, it doesn't get to escape that  because it doesn't get to change what makes it React.
[02:05:39] Dominic is such a legend, yeah.
[02:05:42] Thank you.
[02:05:45] Thank you.
[02:05:46] There we go, Svelte became solid, React became Svelte, and all we need is solid to become React, complete the cycle.
[02:05:50] And that is kind of what's happening.
[02:05:55] Actually, ironically, that is actually what's, it's funny.  I didn't think about it this way.
[02:06:01] Um...
[02:06:03] But...
[02:06:04] Solid...
[02:06:05] is the last...
[02:06:06] Bastion right now, not last, there's a few others like Preact I suppose and uh, you know some of the other frameworks I guess uh,
[02:06:13] Let me think here, but we're kind of like the just JavaScript in the original react sense of just JavaScript.
[02:06:21] Thank you.
[02:06:21] But like...
[02:06:23] Yeah, that's funny.
[02:06:28] Okay.
[02:06:29] Is it? I mean, it's interesting.
[02:06:34] It's...
[02:06:36] VDON is usually... I wonder if the Hyperscript runtime
[02:06:41] is simpler...
[02:06:43] Thank you.
[02:06:44] then
[02:06:46] I know what you mean though. We take a lot of complexity of compilation time.
[02:06:51] But like...
[02:06:53] with signals, but like the runtime is actually pretty simple.  It's why when people look at solid compilation, they're always like, Oh,  this is fairly straightforward.  In fact, in the last couple streams, when I'm showing solid 2.0 on, I've  literally just been hand compiling the stuff because it's like.
[02:07:05] It's--
[02:07:05] Like, it's very basic.
[02:07:08] um
[02:07:10] But yeah, I guess it is simple in the fact that you don't have multiple moving pieces. It's like if your whole app was a single signal and single in effect, right? So yeah, I'll take that, yeah.
[02:07:20] Thank you.
[02:07:21] React VDOM was better than DitedCycle but now worse than
[02:07:24] Real reactivity.
[02:07:30] Yeah, it exists until you don't have to care until you have to care.
[02:07:39] Who gets this chairman thing?  Yeah, I mean, there's a bit of that too.
[02:07:43] Thank you.
[02:07:46] Hyperscript mentioned yet.
[02:07:50] Yeah, no, React with signals is not, no, I, this is another one of those things. It's fine. I don't get too much into it. But when people talk about state libraries in React.
[02:08:00] it's they're not doing the same things react with signals is view
[02:08:04] It's not
[02:08:05] It's not a...
[02:08:07] Yeah.
[02:08:13] But as I said, it's a funny conversation when everyone claims to be just JavaScript and it's kind of flipped.
[02:08:25] But yeah, I summarized here.  React is kind of acknowledging that re-renders do matter enough to optimize around, which is
[02:08:32] Interesting.  I mean, they acknowledged that earlier, probably with hooks, to be fair.
[02:08:36] But like this is the full cycle of that.
[02:08:40] Which is funny because if anyone remembers the original talk of React, like Jordan Walk's talk back in 2013, the whole point was you don't have to worry about re-renders.
[02:08:48] They're basically showing how they spent the last five years worrying about nothing but re-renders. Just putting that out there. Svelte trade away its minimal syntax for more expressive language.
[02:08:59] We're good trade off because now they have way more capability.
[02:09:02] and a better fundamental basis performance. But again, it's like opposite the original selling point. This is an old one, but I saw this and I kind of laughed a bit. It's because the originals felt one didn't have the script tag either, which always bugged me. At least someone added the script tag in. This is probably why this caught my attention more than any, because the missing script tag really irked me in the example. I don't know why, but
[02:09:23] you know, it was basically saying that like some people in the Svelte community have been saying  that it's becoming React. It's such a funny concept to me because the idea of denoting state as state is
[02:09:36] maybe a React thing. For me, it was a knockout thing.  It's wherever you saw it first.
[02:09:43] The thing is, Svelte 5 is nothing like React.  Svelte 5 is like solid, not like React.  But...
[02:09:51] I get why there's tension there.
[02:09:56] It's mostly misguided, in my opinion, but...
[02:09:59] It's interesting when you build a community on a set of beliefs and then you kind of basically say, no, you know, this is we've changed our minds.
[02:10:10] Thank you.
[02:10:11] you know, at such a fundamental level when it was the selling point.
[02:10:16] Thank you.
[02:10:18] I don't think he ever made that blog post.
[02:10:24] It's becoming React.
[02:10:27] Yeah.
[02:10:30] It's not that simple. The problem, we've been kind of playing around with this a bit. React has
[02:10:38] Um...
[02:10:40] semantics around component rerunning that go beyond this. This is one of those, mitosis from Builder.io.
[02:10:46] It's a perfect example of it. They wanted a universal JSX renderer so they could basically convert React into other frameworks.
[02:10:55] But React wasn't the right basis for it because...
[02:10:58] React's semantics were weird because of the rerun cycle. It was like different than other ones. The ironic part was
[02:11:05] If we took solid as the basis, which we did, we ended up compiling like dot map into basically the same as solids four or whatever.  But so we looked for syntax things and they were more aggressive with mitosis.  But before, like early mitosis days when it was JSX light or whatever, I spent a lot of time with Steve Stuhl.
[02:11:22] the CEO of Builder.  And we talked through these solutions.  And basically we realized that if we took something like
[02:11:31] solids execution semantics, we could put it on React. We've already seen MobX kind of do that. Sure, it's not as efficient, but you can force the meaning to those things. But React's meaning to their hooks was not equivalent.
[02:11:44] You could always put a reactive system to kind of drive a VDOM library the same way, or get rid of the VDOM, but the opposite wasn't true.
[02:11:53] Anyway.
[02:11:58] Thank you.
[02:11:59] Thank you.
[02:11:59] Thank you.
[02:12:01] Thank you.
[02:12:06] It's like Windows, yeah, yeah.
[02:12:11] That's funny.
[02:12:13] Thank you.
[02:12:14] We'll see how the communities react to this over time. In general, I think the compiler stuff
[02:12:20] is interesting, at least.  It's probably where I'm most interested in work  on the React side these days.  Because there is a world in which
[02:12:30] there is a convergence to a certain degree between signals and non-signal stuff from the perspective that is if you can mask all side effects, it's impossible for the developer to tell the difference. That's the theory. So there might be a future where React has signals under the hood.
[02:12:44] If.
[02:12:46] It's funny, they could use their compiler as a migration tool in a sense if they could figure out
[02:12:54] Like you basically, the stricter and stricter they make it, the more possible it is to...
[02:13:00] for no one to understand how it operates to the point that you could actually completely switch  what's under the hood. So maybe that is the plan. Maybe I just revealed React's big plan moving  forward. We'll see.
[02:13:16] Thank you.
[02:13:19] Yeah, I mean, except it doesn't do the same thing.  This is something, again, I said a few minutes ago, people have to understand, like,
[02:13:25] signals or state in React doesn't make React, it doesn't make it remotely like Solid or Svelte 5.
[02:13:31] Like...
[02:13:32] It just, the biggest thing
[02:13:35] And I mean, this is a little tangent on its own is, and I talked about them in my last stream, where were the two streams ago, is that
[02:13:42] compilers
[02:13:43] don't know how to do nested reactivity and mutable reactivity.
[02:13:48] We worked on this problem pretty hard actually on the Marco team and
[02:13:53] we ended up going with a partially runtime solution.  That was the one that,  that's the piece that like eventually swaps people over.  It's because it's very hard to do that  kind of granular tracking updates  from a compiler perspective.  And that's something that React can't duplicate,  like solid stores.  Like it's something that allows granular tracking
[02:14:12] um, notification. Like you can have a list of to-dos, update the checkbox on what to do, and go in and just update that one place without re-running the list or in the component in the middle. Memorization can't save you from that. In fact, Misko Hevery from QUIC
[02:14:27] Um,
[02:14:28] called it like two years ago because we knew like something along react compiler won't be able to solve this problem and he was right
[02:14:35] "Upcoming React file only posts are the problem." Oh, political title. Here, here you go.
[02:14:41] Thank you.
[02:14:41] But give this a read if you're wondering about
[02:14:45] the fundamental shortcomings of the approach of the React compiler.
[02:14:49] you know, why it was not going to make React faster.
[02:14:53] Anyway.
[02:14:55] Thank you.
[02:14:58] Thank you.
[02:15:02] Yeah, yeah, yeah. The thing is, the problem, that is a fine solution, but in my opinion,
[02:15:12] It doesn't solve deeply nested state like I just talked about, especially like stores.  And secondly, the challenge with this is...
[02:15:20] If you don't give yourself the language to describe the problem,
[02:15:23] you don't have as much control over it.
[02:15:27] That might be fine.  And if you're targeting...
[02:15:31] humans and being simple, you know, maybe that is a good trade off. It's felt
[02:15:35] 3 was very well loved.
[02:15:36] Maybe the React compiler would be well loved, but
[02:15:39] You know where I sit, I'm looking at like the best possible solution. So
[02:15:44] It's...
[02:15:45] It's interesting. It's interesting where you sit on that scale of things.
[02:15:50] Thank you.
[02:15:51] Thank you.
[02:15:52] It doesn't help with the JS framework benchmark.
[02:15:56] into I don't want to spoil the end of it, but I did the compiler in the JS framework benchmark.
[02:16:01] and
[02:16:02] React hooks without the compiler,
[02:16:04] React with the compiler.
[02:16:06] React without the compiler, but written the same way that I wrote the compiler code. And as you can see here,
[02:16:13] The optimized hand optimized one that I originally wrote back in the day with a little suggested help from Dan Abramoff on the best patterns is still faster than React with the compiler.  The hand optimized memorization was more precise.  I had the language.  I had the ability to describe exactly what I wanted to happen.  The compiler does a pretty good job, though, almost indistinguishable.  So there's a good chance the compiler will make you better.  And if you write the code like a...
[02:16:36] like an idiot and don't do any checks, the compiler makes a more significant improvement.
[02:16:42] But essentially, it doesn't make...
[02:16:46] react faster.
[02:16:51] Thank you.
[02:16:53] Thank you.
[02:16:57] Thank you.
[02:16:58] Thank you.
[02:17:07] Yeah, which is a great improvement.  Rackenpilers, like, don't get me wrong.  I'm just saying like,
[02:17:12] you know, solving the problems that you create, right?
[02:17:17] Uh...
[02:17:21] Okay, so where were we?
[02:17:26] I think...
[02:17:28] We're it's time to talk about AI and dev tools.  So this one we talk about bundlers and talk about all this stuff. Um,
[02:17:35] Thank you.
[02:17:37] Thank you.
[02:17:37] Productivity, yeah. Velocity. I remember that on eBay. Everything was about how can we improve developer velocity.
[02:17:49] Thank you.
[02:17:51] You would though, right? Think you hide too much? Yeah, I mean,
[02:17:55] This is this is an important topic because
[02:17:59] You know how I said a few minutes ago that React
[02:18:02] Um, likes to
[02:18:04] kind of sit there and be like,
[02:18:07] don't worry we'll solve this you know
[02:18:10] come up with the right idea and then the
[02:18:12] performance and the other stuff will happen later, you know, kind of like an ivory tower, tower kind of approach. And I'm like,
[02:18:18] That's...
[02:18:19] absolutely backwards from what I do it.  I try and vet if something's worth doing.  And then if it's worth doing,  you know,  or at least shows potential,  then I go after it.  Otherwise,  if I can't get the performance or I can't get it to where it is,  then it's the wrong idea.
[02:18:33] Or at least it's not the right time.
[02:18:35] And
[02:18:36] Oh.
[02:18:37] I think...
[02:18:39] that
[02:18:41] Where was it going with that?
[02:18:46] Yes, AI is going to be the next thing.  This is my call shot here.  It's not in the article, but my gut is,  now that the compiler's out and you can't say that  that's going to fix everything or React server components or whatever,  the next thing is, and we already saw this,  SWIX kind of led the charge for this a few years ago,  and I've seen some other people where they're like,
[02:19:04] you know, they're like, "Well, I'm just gonna keep on using React until I'm replaced by AI."
[02:19:09] Right.
[02:19:10] And it's like...
[02:19:11] They're just assuming that...
[02:19:14] because React has the largest, is the most popular, has the best training set, that React would be the choice, the tool of choice for AI in the future because
[02:19:21] AI is most capable of writing React code. These
[02:19:26] are
[02:19:27] True statements.  Don't get me wrong.  It's just...  It's a funny...
[02:19:33] you have to look at where you want things to go.
[02:19:36] Right.
[02:19:38] Do you want...
[02:19:39] to take something that
[02:19:44] Like, is your goal to get React out of...
[02:19:49] the AI or is your goal to get the best
[02:19:53] possible
[02:19:54] app widget component out of the AI.
[02:19:58] Like, don't get me wrong.
[02:20:00] I think AI will be turning out a lot of crap for many years to come.  But...
[02:20:06] Conceptually,
[02:20:07] If you could remove your human aspect of it, close your eyes,
[02:20:11] and be like, okay, what do I want this thing to do?
[02:20:14] to come out of AI to be or what it to do.
[02:20:19] Thank you.
[02:20:21] Is this where you want to be?  It's not where I want to be.
[02:20:28] AI keeps you stuck in what has been done before.  Exactly.  It's bad for innovation.  Tony, you're on fire today.
[02:20:35] Like,
[02:20:37] Bye.
[02:20:39] Thank you.
[02:20:43] I mean, it's a good investment. I think one of, I did have a good conversation the other day. I was actually talking to Theo after stream a bit about AI because he's,
[02:20:51] we were talking about some topics and he said it made him a faster, more capable developer.
[02:20:59] which is different. I was talking about low code and no code, because the problem with like local to no code was it didn't really get there. You know, when people talk about AI, they're like, it's not here yet. It's, you know, it's gonna take a while, whatever. It's kind of like no code or low code. I've been, I've been,
[02:21:12] visual coding tools I've been seeing those for years I my first experience with them was probably  and visual coding was Delphi back in 94 95 it's like based on Pascal it's like a visual  Pascal kind of thing I think and then visual basic and .NET in like around 97  and you know like the tools have obviously evolved over time but like
[02:21:37] It's been 30 years now.  We're not really there.  Some people feel AIs like that.  But then I've used Copilot and...
[02:21:44] And co-pilot...
[02:21:47] has made me faster, very helpful, but as a
[02:21:50] Tony said:
[02:21:52] Do you know where it's made me really fast?
[02:21:55] I've been refactoring...
[02:21:57] all the tests from solid 1.0 to solid 2.0.
[02:22:01] Copilot is a genius there. It can see me change store syntax from path to produce syntax, essentially, and just automatically know how to change it.
[02:22:11] after a couple tries, you know, part of it is a pattern matching on the same page and whatever, but like nothing too smart, but it drastically improved. I've accomplished stuff over the last day or so that it would take me.
[02:22:24] way longer before because of AI.
[02:22:27] But it's repetitive...
[02:22:28] tasks. Sometimes it'll suggest an algorithm and I'll look at them and be like,  that's probably fine. I'll just optimize it a bit here. So there are benefits, but
[02:22:37] Okay.
[02:22:38] And in that sense,
[02:22:40] being popular is really important. Like,
[02:22:42] I had some people on Discord, not ours, I think it was Theo's Discord, who were like, I really like Solid, but I'm not getting as good enough suggestions. It keeps on giving me React code. So, you know, they're like, I don't really want to use Solid because I don't get code suggestions, you know, or accurate code suggestions from it.
[02:22:57] and
[02:22:58] Yeah, I mean, that's
[02:23:00] Pretty tough.
[02:23:01] But it's like, again...
[02:23:06] What do you do about it? Do you just sit back and go, okay, well, I'm just going to keep on doing the same things again.
[02:23:11] Maybe.
[02:23:14] but like
[02:23:16] At some point, something has to move forward.  Otherwise, everything stagnates.
[02:23:21] And
[02:23:23] So my look towards AI is exactly the same as my look towards everything, which is let's figure out.
[02:23:29] what we should be doing and then make it our best attempt at getting there.
[02:23:39] AI, average intelligence. Oh, yeah.
[02:23:42] Love that too. Yeah.
[02:23:47] Thank you.
[02:23:48] Yeah.
[02:23:50] Thank you.
[02:23:53] Thank you.
[02:23:54] Now you make me want to look up what Delphi was.
[02:23:58] Thank you.
[02:24:00] I'm sorry.
[02:24:01] I barely remember it.
[02:24:07] Tanner's just going off too. See, I knew  I was like half tempted to invite him on. I knew he'd have great stuff to say.
[02:24:15] Um,
[02:24:20] Because we have to basically really want to do that on. Yeah, that's a good question.
[02:24:25] This is an interesting concept, like actively trying to train AI purposely.  I don't know.  I feel like with docs, if I know Astro has been doing some stuff to kind of push stuff through, they have like their AI.  I forgot what the name of it is.  I'm sure Fuzzy, if he's around, but yeah, it's interesting.  Like the other kind of considerations we have to do in this kind of modern world, like could...
[02:24:48] Training AI.
[02:24:49] with examples be more beneficial
[02:24:52] than like even standard docs.
[02:24:56] Thank you.
[02:24:59] Oh, OK, it was a specific employee of OpticPascal.
[02:25:01] I was like...
[02:25:03] 11 or 12 so like forgive me a little bit of my memories foggy.
[02:25:15] You guys are now just... more trolls are coming out. We should use AOT teachers how to write web components.
[02:25:24] Thank you.
[02:25:26] Thank you.
[02:25:29] Houston, yeah. Perfect, thank you. Yeah.
[02:25:36] Thank you.
[02:25:38] I mean, any tool can be a crutch. I don't know. I, I, people are always looking for the next excuse. I'm not going to hold that against them. It's just at a certain point.
[02:25:46] I just, I bring it back again.  You know, I'm tired of react a little bit, you know, some point ever people get to get  tired.
[02:25:54] But yeah, I mean, here we go. Here's Devin.
[02:25:56] Decided to build a CSR to do app in about 30.  It's funny 'cause my boss at the time, Matt Villeman  from Netlify showed Devin, it was a cool technical thing  deployed and he showed how easy it was to get the whole thing done.
[02:26:07] I, of course, did the thing I always do, which is take something that was kind of like a marketing, cool, technical show hawk and pick it to crap.  And I was just like...
[02:26:17] It...
[02:26:17] Anyone knows the 2D MVC app
[02:26:20] Should be 100 Lighthouse score.  Everyone, if you go make it, like even in React, it might be 99 or something.  React sometimes for some reason doesn't get the 100 quite often.  It gets like 99.  I don't know why.  But I think at Tootmvc, everybody's going to be like 100 on mobile devices.
[02:26:40] And, you know,
[02:26:42] But it was like this example, it's like the prompt, build me to do MBC.  And it brought in 130 kilobytes of JavaScript because I did some reverse engineering at the time.  I think it brought in like one of the big style libraries.  And what did it do?
[02:26:58] Chakra UI with frame or motion
[02:27:02] bundled with Webpack,
[02:27:04] No tree shaking.
[02:27:10] But it was just kind of funny because
[02:27:13] Like, my point is, like, is this what we're going to come to expect?
[02:27:18] Are we going to say build me blank and just end up with this giant thing?  Because this is like it's kind of indicating.
[02:27:25] representative, you know.  I'm pretty sure...
[02:27:28] Someone goes out and is like, okay, I want to build a to-do app, you know, as an example, you know, for example, on my very basic blog site, my homepage in and they'll be like, okay, what do I have to use? I should use Next. Yes. And.
[02:27:40] What should I use? Oh, I should use Framer Motion.  And they take their static blog site and they...
[02:27:46] basically do this to it. So it's not surprising that AI would do exactly the same thing. It's just
[02:27:53] .
[02:27:54] It's...
[02:27:56] Like maybe the no code side of things is just not where we should be focusing.  Vercel's V0 actually has been doing pretty good here at creating prototypes.  I've heard people actually create solid prototypes with V0 or basically take the V0 code and very easily convert it to solid.  So, you know, maybe that's where we're sitting right now.  But as Tanner said a minute ago, like.
[02:28:17] is react really where we want the base forever?  I don't know.  So the problem is change is going to have to start with people.  And it,
[02:28:26] No one's incentivized to do anything right now.  So it's just kind of like...
[02:28:30] It's funny. This is kind of like a side tangent and not really what the core of my article is about, but it's just...
[02:28:38] I don't know.  I...
[02:28:40] It would be very depressing if...
[02:28:43] AI was the thing that bridged the gap for React to be used indefinitely.
[02:28:51] Yeah.
[02:28:52] Thank you.
[02:28:54] Thank you.
[02:28:56] Thank you.
[02:28:57] AI as to nokotas, that CN as to component dependencies. I don't know, but that probably makes sense to people. That's why I'm highlighting it.
[02:29:08] See, no, there might be other ways to win.  I'm going to talk about that in a minute.  Let's finish with the dev tools.  React scan.
[02:29:21] Cut.
[02:29:21] Everyone gets a chuckle over this, right?  I don't know if re-rendering is important,  but Aiden is funny.  He...
[02:29:28] Follow his stuff. He's... he created a million.
[02:29:33] which
[02:29:34] makes your React code actually faster, unlike the compiler.  Like the compiler will make your React code, but Aiden's approach  actually makes the rendering faster.  So like the JS framework benchmark.
[02:29:46] If you took React and then put
[02:29:48] like his approach in,
[02:29:51] jumps to the
[02:29:52] to the front. But it doesn't solve the rerender, it doesn't solve the memoization, it doesn't solve the other half. So in theory,
[02:30:00] If you took...
[02:30:02] Millions block DOM and the React compiler and put them together
[02:30:06] you would have
[02:30:08] a framework performance wise, that would be very
[02:30:13] in the same realm as solid or svelte or whatever. So like, maybe, maybe, maybe, maybe that is  something people might be interested in if they care about that mental model. But, you know,
[02:30:26] Because...
[02:30:29] React developers are the wrong audience because they don't care about performance.
[02:30:33] you know, it's probably hard to get an adoption.  So Aiden's been almost on a quest to show people how slow the React apps are.
[02:30:40] React Lint, all these different things to kind of help them
[02:30:44] with performance problems, but also kind of be like, look, hey, this is
[02:30:48] This is...
[02:30:49] what's going on and react scan is the latest in this series because it shows  you re-renders visually like when you type in this field and like
[02:31:05] So like...
[02:31:09] I don't know. I think the more interesting thing to me is dev tools are getting a lot smarter.
[02:31:16] and capable.
[02:31:17] And I think we're actually getting to a point where...
[02:31:20] I mean, this is not old news, but...
[02:31:22] we're going to,  the expectation of them both in the browser and in the IDE,  especially is going to skyrocket.  That's one,  obviously that's an obvious point.
[02:31:33] Per...
[02:31:34] prediction, but I expect more growth over the next little while in that area than in the frameworks themselves for the most part, which is kind of interesting and kind of funny.
[02:31:42] I guess that's why people are...
[02:31:45] Um...
[02:31:46] creating companies around it, you know,
[02:31:48] Void zero.
[02:31:50] Shout out Vue and VEAT Creator Avenue.
[02:31:54] start a company around, uh,
[02:31:57] those technologies like V and V test and kind of like roll down and the whole thing.  So I think, I think, I think it's very, I think it's interesting that that is a place where, you know, a company can be formed.
[02:32:12] I don't know.  I...
[02:32:14] These are just kind of movements that you should pay attention to. I don't think things have completely come to fruition, but it gives you a good idea of where things are heading.
[02:32:24] Thank you.
[02:32:26] Thank you.
[02:32:27] See, the thing is, I always thought that, and I'd be okay if those who care will use something better. The problem is those who care aren't using something better, which is where we're getting to, which is tricky.
[02:32:45] Thank you.
[02:32:46] Nah, not as easily.
[02:32:53] In a sense,
[02:32:55] I mean, view right now, there could be a view scan for current view.  View right now doesn't work like Solidus felt.  It has signals, but it's more like...
[02:33:03] like MobX plus React, like you could look at
[02:33:07] component or template re-renders in Vue and be able to get something like React Scan. You could not get that in Svelte 5. You could get in Svelte 3, but you couldn't get that in Svelte 5 or Solid.
[02:33:20] But because of the way that our frameworks work for rendering, you already have a React scan, actually.
[02:33:28] I can show it to you for solid.
[02:33:31] Um...
[02:33:32] So
[02:33:34] Um...
[02:33:35] It's really cool. It's built into the browser actually.
[02:33:39] So like when I click this button,
[02:33:41] You can see
[02:33:43] the this number here
[02:33:45] updating so
[02:33:48] I know that's kind of like the facetious answer.
[02:33:51] But, um...
[02:33:52] Because we don't do anything beyond what's necessary when it comes to rendering, the paint flashing or updates in the browser already do it for us.
[02:34:04] Do you know what I mean? Like...
[02:34:07] It's...
[02:34:09] It's not equivalent.  It's just...
[02:34:11] Yeah.
[02:34:28] It's hard to see what's causing me render exactly.  I think...
[02:34:32] We have...
[02:34:34] Solid DevTools shows the signal graph
[02:34:37] and lights it up in a similar way.
[02:34:40] But there isn't much attachment to the UI.
[02:34:43] Um...
[02:34:48] Like it will show you all the different signals and then show you how the updates propagate through the graph.
[02:34:52] It's pretty cool, actually.
[02:34:54] And using that information is pretty valuable, but...
[02:34:58] Probably we need to put a little more investment in it to get it to a place where it's super wowing people.  When it came out a couple years ago, people were like, whoa, that's cool.  You can see how you could take that technology and apply it in the IDE and then start getting to a point where you could be like,
[02:35:14] Hey...
[02:35:16] When I call this set signal,
[02:35:20] color all the places that are impacted by this.
[02:35:24] Like we have enough information conceptually that with the right type of analysis, we know exactly what updates in your app.
[02:35:33] or potentially could update.
[02:35:37] What do you got here? Right now there are few if any bridges between foreign continents. Bridges aren't built via migration guides, they're built via common extraction ideas and tools, which is why I'm so bullish and solid when I'm attempting to build.
[02:35:47] Very cool.
[02:35:51] Thank you.
[02:35:52] Thank you.
[02:35:53] It is definitely getting easier to switch between JS frameworks, but it... no one got fired for choosing React.
[02:36:04] Yeah, God, the meaning of render is fun.
[02:36:08] Thank you.
[02:36:10] Anyway, uh...  Doo-doo-doo.
[02:36:13] Okay, Tanner, we got to your part.  No, um...
[02:36:16] There's a couple things that I think...  It's so funny to say this because people are only just starting to catch up to the fact that we've kind of pendulum swinged over to...
[02:36:26] you know, like being so server-centric,  but this movement has been going for a very long time,  like five years, longer actually.  I'd say even though it went into full speed  around COVID in 2020,
[02:36:37] I'd say from 2017 or 18 onwards, was really led by Next.js.
[02:36:43] was really the start of this kind of progression. So in a sense,
[02:36:47] we're getting on 10 years along this path, which is funny. I mean,
[02:36:51] SPA's had their
[02:36:54] you know, 10 years and then like the last couple of years overlap, you know, like we're kind of already starting to see people push back against that movement. Part of it, obviously.
[02:37:05] is if you notice that
[02:37:09] the newer, you know, meta frameworks all have spa modes.
[02:37:12] I think Svelkit was actually the first there. Solid Office Start was obviously built with that in mind from the beginning, but we took forever to come out, so I don't think we get any points. Remix is recently added SPA mode this year.
[02:37:26] I'm next...
[02:37:28] might have had it there, I'm not sure, I can't remember.  I remember talking to them and it was unclear whether they did.  But the point is that
[02:37:36] Most frameworks now that are traditionally SSR actually have a way to do one client only.
[02:37:43] Remix of importing all their non-server functionality back to React Router on a common base.
[02:37:48] I don't think it's because of server second.  I think it's because of the conceptual router is the core of the universe  mentality.  And I think,
[02:37:57] remix, you know,
[02:37:59] probably always should have been that way.
[02:38:02] Um,
[02:38:03] But it took a while to get there.
[02:38:05] Um...
[02:38:06] But I think when you kind of combine these kind of factors together, when you consider the approach that with Solstart we took to server functions, you know, this is a couple of years ago, but we showed off this year, we introduced single flight mutations.
[02:38:20] kind of gives us kind of foundation for,
[02:38:22] for
[02:38:25] things that developing in a way that's like spa centric or single page app  centric,  and then just having nice server add ons.  Like I love the server function,  single flight mutation mentality because like,
[02:38:37] You don't need to server render the page to benefit from that, right?  You can use the same APIs you've always used, you know, you can use like a query, you know,
[02:38:45] and then be like, oh, I just want to, instead of hitting an API endpoint, I'm going to, I have a monolithic setup.
[02:38:51] I'm going to use surfactant, but it's
[02:38:53] part of that isomorphism, I think
[02:38:57] I think basically the last few years...
[02:39:00] have been very strong like you should be over here
[02:39:04] even though like these solutions were kind of dragging you could argue um
[02:39:11] On this side, I think we're actually seeing a bit of a pendulum swing back on onto the side. I know
[02:39:17] kind of short but  it's funny uh
[02:39:22] Maybe this is why you don't follow the hype,  but I definitely went through a cycle  where I was very concerned about this side of things.  And I think...
[02:39:30] A lot of people have been, and I think we're starting to see a bit of this, you know, part of it is like obviously choose the right solution.
[02:39:37] But there was a hope that there'd be a singular solution.
[02:39:40] For me, it's very clear now.  It's just like, if you want to do this, use Astro.  If you want to do this, use Solid Starter.  You know, but like...
[02:39:47] Um...
[02:39:48] I think that...
[02:39:50] were kind of
[02:39:51] starting to see that push back. And a big part of that also, besides the fact that, you know,
[02:39:57] We got the TanStack start, which is pretty big on the React ecosystem, kind of showing those mentalities. We've also seen an increase in local first and Sync Engine technology. I'd like five startups reach out to me over the fall about their technology because as I said, solid reactivity is a natural fit with this stuff.
[02:40:19] I don't know what it's going to look like.  A lot of these companies and things are kind of
[02:40:23] New?
[02:40:24] But, um...
[02:40:27] There's an interest there. I don't know where this interest is coming from.
[02:40:30] Because
[02:40:32] It's not e-commerce.
[02:40:34] But there is an interest there, so I'm calling it out right now.
[02:40:37] you're going to see more and more
[02:40:39] of this kind of pushback. I don't, I don't, again, I don't know who's using local first or  sync engines. I don't know what they're building, but there is an interest.
[02:40:50] Thank you.
[02:40:51] I think they will potentially, but the problem is what do they do?
[02:40:58] I've
[02:40:58] *laughs*
[02:41:00] Like, it's kind of...
[02:41:03] It's not an architecture, it's a different encoding for your UI.  You could have always done this, do you know what I mean?
[02:41:10] The
[02:41:11] The benefits...
[02:41:13] come from the architecture change.
[02:41:16] So it's like...
[02:41:18] I don't know. I...
[02:41:20] I think, I'm not sure if they will be more popular than RSCs.
[02:41:26] I just I think that some people will
[02:41:29] see that they're a viable alternative and then,  then realize that they don't even need them at all.
[02:41:36] Potentially.
[02:41:44] Thank you.
[02:41:46] The islands mode is not in a state that I can recommend it to anyone.
[02:41:52] I, the islands mode is an example of me getting tired.
[02:41:56] sucked pretty far into this and then being like, let's pause for a moment and rethink
[02:42:05] As I said, I went from being 100% here to kind of being like,
[02:42:10] I should spend a little more time looking at Quick again.
[02:42:13] But to be fair,
[02:42:15] Since neither side is solving my problem,
[02:42:18] I've got other fish to fry right now.
[02:42:29] Thank you.
[02:42:34] server functions are really the that that was the thing and what that was that was the thing when i  was first building solid start and i've made my first what i it's funny i call them actions and  then i changed the server functions but i called them actions uh back in 2021 and they didn't use  a compiler they used proxy um where because i'm big on proxy where with state where you
[02:42:58] went
[02:42:59] up the property name, like dot this, dot this, dot this,  to create a URL.
[02:43:04] on the client and on the server,
[02:43:07] the
[02:43:09] You would just...
[02:43:13] It would register an endpoint.
[02:43:15] when it hit the call, essentially.
[02:43:20] And the second I did that and I started plugging them into create resource, solids like data  fetching primitive and the serialization, everything just worked. I was just like,
[02:43:30] Man, this is it's funny because
[02:43:32] I'm a guy who came up during the microservices age, like a bunch of nanomachines on AWS, pre-serverless.
[02:43:40] You know, I mean, I was building stuff on servers before that, but when I, you know, like .NET and garbage, but I didn't really manage the servers back when I was doing a lot of .NET stuff when I was far enough in my career where I was, you know,
[02:43:54] director of technology at a startup or whatever,  like when I was building stuff and I was the one responsible,  it was during the like, uh,
[02:44:02] late 2000s, early 2010s, and the kind of rise of like the microservice architecture.  And the thought of going back monolithic scared me. I was like,
[02:44:12] Yeah, like I did convert my company to serverless.
[02:44:15] back in 2017, 2018, like AWS Lambda.  But like, I did not think that Monolithic was going to go.  I used SOAP RPCs in .NET.  Like I was not...
[02:44:29] that but then when I had that moment and I was playing around with it I think it was Brillout um
[02:44:36] who's behind a, um,
[02:44:40] Oh God, I can't remember. V plugin SSR. I think he's rebranded it recently, but he, I was talking to him about it because he's working on solid adapter and I was like trying to solve this problem. And he said, he pointed me to one of his libraries wildcard. And I, when I saw that, like it was an RPC thing. Right. And, and, and then I put it together with the implications for a client centric thing. I was just like, this is it.
[02:45:03] Right from that moment, I was like,
[02:45:06] I realized I could invest heavily on solid's own router on its own ecosystem and not build a meta framework. And that's really what made solid start possible. I'd already kind of started on it. But that's when I knew that
[02:45:16] it was going to be a thing.  Obviously, eight months later, Nikhil Sarov  came and showed us how  server functions should really be done.
[02:45:26] And
[02:45:26] Then we pulled Tanner in and we tried to generalize it with bling.  And then, you know...
[02:45:33] Other people thought this was a good idea. They added server functions to quick. They added server functions to or they call them server actions to next like it went through a whole cycle, but like that was the moment definitely when like.
[02:45:50] it clicked for me in terms of what an isomorphic meta framework could look like.
[02:45:59] Thank you.
[02:46:01] Right, so it's an overcorrection. Good to know. Thanks, Christopher. I don't know why. It's like the thing that says fringing off the VC side that I keep on seeing. I'm omnipresent of it because I'm always...
[02:46:14] talking to people, new customers, new people can use solid. But I was like,
[02:46:18] I don't visualize it yet. It's a bit like people working on like the socket stuff, like the live view stuff. I don't know what they're building.
[02:46:27] But I'm curious.
[02:46:31] Okay.
[02:46:43] Yeah, yeah, yeah, yeah, yeah, yeah, yeah.
[02:46:49] Well, I mean, the beautiful thing about the offline or the local first approach is that you don't have to worry about the async anymore.  That part's been...
[02:47:01] I kind of joked about this a couple streams ago, but...
[02:47:04] With all these like technologies that we're working on here for server client thing, are we just building our own sync engines? Like this is when I was with Dev on my last stream, I was kind of asking him like, this is really powerful, but like, do I want to build my own sync engine or would I rather just have someone else offload that and me just treat everything like it's a client app again.
[02:47:22] pushing very hard on this side of the graph, so to speak.
[02:47:27] I don't know. But it's definitely not over here where the conversation is on that. So yeah.
[02:47:33] Yeah, you're right here, Dev.
[02:47:34] The conversation's right here, yeah.
[02:47:39] So maybe that's the forward, the path for isomorphism is abstract the weird parts, you know?
[02:47:47] Maybe there is a viable model that's not split execution.
[02:47:52] I mean,
[02:47:53] It is, but it's hidden from you.
[02:47:56] Okay.
[02:47:59] So instead of your wins ways, I want to talk about the JS survey for a bit. We haven't talked about it on the stream. And as you guys know, I don't care about any of the results except for the front end framework section. So I don't need to do a full thing, but let's look at state.
[02:48:13] of JS 2024.
[02:48:18] And other people have covered this, obviously, so...
[02:48:22] You probably are familiar with everything. You know that...
[02:48:27] Thank you.
[02:48:28] Thank you.
[02:48:32] Syntax is still the most popular podcast followed by Primogen. I didn't realize he had a podcast.
[02:48:38] Um,
[02:48:39] Theo has crept the second...
[02:48:42] The second most popular streamer.
[02:48:45] you
[02:48:46] And
[02:48:48] most...
[02:48:50] People building frameworks are generally in the top 15, 20 people on this list.
[02:48:59] But libraries and front end frameworks
[02:49:05] are an area that
[02:49:07] is interesting to me.  Um,
[02:49:10] because
[02:49:12] I...
[02:49:13] I...
[02:49:14] I know real numbers matter, but the ranking gives me a good comparison aspect here.  And the biggest winner...
[02:49:23] of
[02:49:25] front-end JavaScript frameworks in 2024, at least according to the survey's view.
[02:49:30] I'm just going to put it right out there.
[02:49:32] View.
[02:49:34] went up in usage.  It passed Angular, I guess, last year,  but not just on survey projects,
[02:49:41] Quick Crest, if you actually look at NPM,
[02:49:44] View is past Angular.
[02:49:47] Um,
[02:49:48] As far as I've checked, last time I checked, it's fine. They've always been close.
[02:49:53] So
[02:49:54] Um,
[02:49:56] awareness seems to be about the same. It's interesting to me that
[02:49:59] our React's awareness is lower,
[02:50:03] I...
[02:50:04] This might say a difference between the type of people
[02:50:09] participating in the survey this year.
[02:50:11] Generally, interest always goes to Svelte.
[02:50:15] and solid smaller frameworks.
[02:50:18] Right.
[02:50:19] These are things that you haven't used, but you're interested in trying.
[02:50:24] But again, look at you.
[02:50:25] Shoo!
[02:50:27] Most frameworks over time go down, right? What's this one? Quick?
[02:50:30] Sorry, uh, HTMX.
[02:50:33] - Yeah.
[02:50:33] But view
[02:50:35] It's up.
[02:50:37] So
[02:50:38] Who else is this?
[02:50:40] Alpine. Slightly up. Interesting.
[02:50:44] I wouldn't expect that.
[02:50:48] But generally speaking, over time,  frameworks go down, new tools come in, solutions come up.  Sol and Svelte, as I said, have been pretty much the top for the last...
[02:50:57] the last few years.  But...
[02:51:01] Um...
[02:51:02] View
[02:51:03] Thank you.
[02:51:07] And I'm going to skip her attention for a minute.  I'm going to go to positivity.
[02:51:11] Again, this is another thing.  This is people who have used, or this is everyone, I guess.  Positivity is people who have used and people who haven't used.  This is just any kind of...
[02:51:20] sentiment towards your framework. And again, over time,
[02:51:24] Sentiment tends to go down.
[02:51:35] Thank you.
[02:51:36] Yeah, no, I definitely believe this. I'm just thinking in the public space and largely that's where a lot of this voting happens.
[02:51:46] *sigh*
[02:51:47] It's...
[02:51:48] Interesting though, right?
[02:51:50] Positivity, general positive vibes.
[02:51:53] My solid's been flatlined, which isn't good for a new project.
[02:51:56] It's like we're like solidly number four. Things come, things go. We're just like constant. Um, with this one here, that's quick.
[02:52:08] This is HTMX, I'm gathering.
[02:52:10] Uh, but you...
[02:52:13] view
[02:52:14] went below us and then view went above us again.  View...
[02:52:17] in the last couple of years went from fifth back up to second. Svelte is still very, is number one on positivity. And if you look here,
[02:52:26] react
[02:52:27] has been going down. In fact,
[02:52:29] other than who's this red one?
[02:52:32] Preact.
[02:52:35] And who's this yellow one?
[02:52:37] Alpine, interesting. Alpine can go off in interest but down in positivity.
[02:52:44] Oh
[02:52:45] Out react.
[02:52:47] Alpine
[02:52:49] Preact.
[02:52:53] And who's this? Lit.
[02:52:56] Like most things are heading downwards.
[02:52:59] View is going up.
[02:53:00] And Angular swung way up this year.
[02:53:04] Shuk!
[02:53:05] Like, it's doing a cup here, so you get flatlined here. I mean, to be fair, it's so far on the bottom that
[02:53:12] There wasn't anywhere else for it to go, but look at this.
[02:53:16] general positivity
[02:53:18] for both
[02:53:19] view in Angular over the last two years is
[02:53:23] is considerable. This caught my eye.
[02:53:32] Thank you.
[02:53:36] Views of a trip should be a mass of the best mass of the back in the Holy King is not afraid to innovate on their own ways.
[02:53:41] Thank you.
[02:53:44] This caught my eye because as I said, interest,
[02:53:49] It favors the small libraries. They're ones that are like, "Hey, I wish I could use this one day."
[02:53:54] Retention satisfaction
[02:53:56] Also,
[02:53:57] favors the small libraries.  Because retention is, I'm a user, would I use it again?  This is the one that when you have a product is Satisfact score,  you know, like your SAT score,  like everyone's considered this the most valuable one  when you're like a startup.  So from that perspective, I'm happy.  Solid has been the highest satisfaction of frameworks ever.
[02:54:15] for the last four years.
[02:54:16] edging out Svelte slightly. So Solid users really love Solid.
[02:54:20] But look again, view.
[02:54:24] Correct that and actually Alpine.
[02:54:27] So if Alpine's positivity is down, it's because not abusers of Alpine, it's because everyone else doesn't care about Alpine as much.
[02:54:35] But look at this one.
[02:54:37] Preact?
[02:54:39] It's interesting. So
[02:54:40] Right now, the top five for satisfaction are solids felt...
[02:54:45] View.
[02:54:46] Preact
[02:54:48] Alpine.
[02:54:49] Look at react on this.
[02:54:51] *Sigh*
[02:54:53] This is expected over time that your framework goes down. But what's weird is
[02:54:58] is
[02:55:00] Thank you.
[02:55:01] Many of the other frameworks have actually gone up.
[02:55:07] Good luck.
[02:55:09] Not all of them.
[02:55:11] Angular, again, it was at the bottom of
[02:55:14] But...
[02:55:16] In general,
[02:55:18] positivity is kind of like
[02:55:22] how everyone sees you and this is how your own users see you, putting both of these stories together
[02:55:29] means that
[02:55:31] view an Angular, at least from a reputation standpoint,
[02:55:35] are very impressive.
[02:55:38] Um,
[02:55:39] - -
[02:55:40] And both are large enough ecosystems based on usage.
[02:55:46] to actually make a difference here. So yes,
[02:55:49] If people are leaving React, usage doesn't seem to be impacted.  If you look at the actual values,
[02:55:56] reacts well at the top.
[02:55:59] Mm-hmm.
[02:56:00] But.
[02:56:02] If you look at it like generally in terms of where people are sitting in terms of like how they feel about these things.
[02:56:10] React's general positivity has been on the way down.
[02:56:13] And its users are
[02:56:15] Again, this is Angular's original line. It's kind of expected. If you're at the top, you have to go somewhere, but it's interesting.
[02:56:26] So what do I have to say here? Yeah.
[02:56:29] Thank you.
[02:56:33] One thing that caught me with the results this year was a growing dysfunction with our tools.
[02:56:40] Some have shown more positivity than other.  This differs from satisfaction, which is focused on the current user's tools and caters to smaller players like Solid and Svelte.  Yeah, it's less about like, yes, I know...
[02:56:53] We're biased. It's funny because they used to make the SAT score like the front page one.
[02:56:58] But I think after Solid won the first year,
[02:57:01] or came first, they stopped doing that because a bunch of people complained.
[02:57:05] because it wasn't popular and then they made usage the front page.
[02:57:10] But, um,
[02:57:13] What I say here is
[02:57:14] These aren't the tools that I talk about as much, but when the economy is tight, maintenance is a concern, they tend to shine.  Both Vue and Angular frameworks I'd have my eye on this next year.  Not because I expect to be blown away by some innovation.
[02:57:27] but because these tools go the extra mile to make developers happy.
[02:57:31] I did make one snipey little comment.  Sometimes the best tool is in the best tool.  I think this is a little misunderstood.
[02:57:37] I mean, like,
[02:57:39] You know, I'm always thinking in terms of like...
[02:57:42] mechanically, like the best possible solution that gives you the best possible results.
[02:57:48] That best that I'm putting in quotes isn't always the best solution for you.
[02:57:53] So, um...
[02:57:55] Yeah, I do think...
[02:57:58] This is a difference the last two years compared to like almost the whole decade before.
[02:58:04] React slipping.
[02:58:06] from perception basis.
[02:58:08] As I said, positivity is about perception, not about actual users.
[02:58:13] You expect people to be dissatisfied, but perception-based, it's slipping.  So I think it's a very interesting time, especially for Vue.  But Angular, because of where it's sitting, generally, but even Angular is...
[02:58:28] Showing like it's here to stay.
[02:58:30] I mean, it's much lower, but, like, I think this is a good time...
[02:58:37] to
[02:58:38] If you're still worried about job market and worried about maintenance,  to look at both frameworks seriously. Angular has done amazing stuff for the last couple years  in terms of
[02:58:48] modernizing the framework.
[02:58:50] And
[02:58:52] view...
[02:58:54] Thank you.
[02:58:55] Mmm, sorry. Maybe I don't have much to say about view, but...
[02:58:58] People like it.
[02:59:02] *clicks*
[02:59:03] Okay.
[02:59:04] you
[02:59:07] *sniffles*
[02:59:09] View Vapor was going to be interesting, but I don't think that's like a driving force here. I'm obviously a big fan of View Vapor, but...
[02:59:15] Maybe it's just people are sick of React leaving, but enough are coming to web and have to balance it out.  Yeah, I mean, there is obviously that too.  I often say that the winner or the incumbent has to give up their position.  They can't just...
[02:59:28] Um,
[02:59:30] be beat, so to speak. Like when React came out between Angular 1 and Angular 2, it was because of Angular 1, Angular 2. Angular had the top slot, they had to lose it. It's not that React had to win it. And I feel like that's kind of what's happening a bit of right now.
[02:59:47] interesting. As I said, Vue is  probably, it's a funny thing for me to say because I don't have much to say about  Vue. Maybe that's part of its appeal. But Vue is the framework I'd be  definitely watching most over
[03:00:00] next 12 months. I think Angular is also very, very interesting.
[03:00:09] Yeah.
[03:00:10] Join our Discord. I mean, there's not many postings, but usually a couple come up a month, you know.
[03:00:17] There's waves of them.
[03:00:21] Maybe not as much to last a little while.  It's interesting because as I said...
[03:00:24] There was a lot of startups doing stuff with Solid.
[03:00:28] It's all getting more popular.  So there's like a balance where we're getting more of that.  But I also think that things are a little tighter now than they've been.
[03:00:34] you know, a couple years ago.
[03:00:36] I'm getting that sense.
[03:00:37] All right. I'm sorry. Let's go back here.
[03:00:43] Okay.
[03:00:44] Let's talk about signals a bit.
[03:00:47] Yep. And it's funny, Vue clicked with Angular devs because it actually had a similar syntax. Sometimes it's that surface level syntax stuff that wins people over, right? There's some people who will never accept JSX, even if they're wrong.
[03:01:00] So.
[03:01:02] All right.
[03:01:05] Thank you.
[03:01:09] The trickiest part about it is,
[03:01:12] Vue going to Vapor is even a bigger change than React, than Svelte going to Svelte 5, I think.
[03:01:21] Like, especially because
[03:01:23] It's like they almost have to pace themselves because the moved, I mean, they succeeded with the move to Vue 3, I guess now that the last couple years showing the switch, it took, you know, a bit like two years. It's just how much do you change so rapidly?
[03:01:37] I mean, I'm impressed.
[03:01:39] from the fact that they can go from
[03:01:41] Options API to exposing their signals
[03:01:45] to finally vapor.
[03:01:48] That's a very well executed plan if they can pull it off over like a
[03:01:52] six year period, right?
[03:01:54] It's kind of crazy to think about it now when I think back to it, like solids,
[03:01:58] approach
[03:02:01] You know, and I mean, let's say SJS or Surplus like before it goes back to 2016 and it's taken web dev 10 years to catch up.
[03:02:10] Right.
[03:02:11] I said I didn't completely invent this approach.  Might have popularized it, you know.  But, like, it took...
[03:02:17] You could have picked up solid in 2018 or 2019 and have almost the same experiences today and like been there like...
[03:02:26] Eight years ago.
[03:02:27] Like, it's kind of crazy.
[03:02:30] Yeah. I don't feel like Solid's as far ahead as the others now. They've definitely caught up over the eight years. I'd say we're only a couple years ahead now, but...
[03:02:40] Um...
[03:02:41] It's...
[03:02:42] It's just kind of crazy to watch that whole cycle play out.  And everyone's on their own journey point along the signals journey.
[03:02:55] Yeah, it's going to increase the gap, but by how much? Svelte will have those same features, I bet, within two years.
[03:03:03] year and a half
[03:03:04] Probably.
[03:03:06] Svelte is right on our heels.
[03:03:11] There's some syntaxal things and conceptual things that might be hard for their ecosystem to follow, because I don't know if Svelte 5 Ruins got everything perfectly right, but compared to where Svelte 3 is, they jump leaps and bounds.
[03:03:22] That's just from my perspective. I'm not saying this to sound like I know it all. I'm just saying like,
[03:03:26] my perspective on like where frameworks are and their understandings of how signals play into the roles.
[03:03:36] I
[03:03:37] Do you think Vaporiscuits came off all the people who choose Solve for its main benefits rather than just one of the kind of Irish?
[03:03:41] Oh, yeah, I mean, no, I'm fine with it. I think some of our community was actually more threatened by Svelte 5. I don't think anyone's too worried about Vue Vapor specifically. I mean, Vue is more popular than Svelte, so there's that.
[03:03:55] But there's like...
[03:03:56] You know what? All three solutions are very philosophically different, which is kind of a big piece.
[03:04:02] Meet me and
[03:04:04] Eben share a certain pragmatism on mechanics that I think might bring  you and Solid Cults together.  But then both of them are very far off in like Syntax Sugar Land,  which,
[03:04:16] with Wysol always appealed more to
[03:04:17] reactives
[03:04:19] or would be reactive just simply because we're about just JavaScript or about
[03:04:23] fundamentals just about making the mechanics work in a way that's consistent.
[03:04:31] Yeah, I mean...
[03:04:33] No.  And as I said...
[03:04:36] Svelte's actually closer on the scale to where we're at. I think anything we're doing in solid right now might take another five years to show up in view. So I'm not too worried or concerned about that. Like people who want to...
[03:04:50] continue pushing the stuff forward, know exactly where to go.
[03:04:55] Thank you.
[03:04:57] Thank you.
[03:04:58] Anyway.  Where we go here.  It is no secret that pretty much all non-React frameworks run off signals now, but some time  has passed and developers are starting to understand the depth of the trade-off's presence.  While this author's biased opinion that these are minor issues, I do expect people to come  to a new appreciation for React.
[03:05:16] This is why I was careful what I wanted to say about it.  It's funny.  This whole stream we've been talking about React negativity, I am just starting to see that pushback now again.  I saw the pushback before where people are like, I like React.  Maple is a classic example of this who is like, I like React principles better.  I'm not a big fan of Solid.  I'm like, I'll convince you one day.
[03:05:38] But like...
[03:05:39] There's some of that, but mostly it's people who didn't try it.
[03:05:43] Then people try it and they're like,
[03:05:45] Oh.
[03:05:47] We're fine. People are finally getting past the O standpoint now. I think.
[03:05:53] I think people, a lot of people outside, like Solid's ecosystem, we've been using signals everywhere now.  So I say most of Solid.
[03:06:02] ecosystem now is like over here.  But I think the people who picked up signals in the last couple of years are  kind of,
[03:06:11] here, like,
[03:06:13] Angular's
[03:06:14] journey might be
[03:06:15] here right now.
[03:06:19] But like...
[03:06:20] Uh, yeah, I, I, I mean, we're going to see, I think, I think, I think we're definitely getting over this.
[03:06:26] Peak.
[03:06:27] that's happened the last couple of years.
[03:06:31] *sniff*
[03:06:32] And I'm starting to see people go like, no, I just like reacts, you know, simplicity, quote unquote.
[03:06:38] Um...
[03:06:40] I expect more of that to happen now legitimately because before people said that stuff and they actually had no clue what they're talking about.  I think a lot of people...
[03:06:53] you
[03:06:54] I
[03:06:55] underestimate
[03:06:57] What makes React good?
[03:07:04] Thank you.
[03:07:06] It's so funny, as I said, this is why syntax and stuff wins framework battles or whatever.  Because this is...
[03:07:14] I'm sorry, it's the dumbest
[03:07:16] Thing it like really doesn't matter and
[03:07:21] doesn't impact anything, actually makes your code less clear what it's doing.
[03:07:26] But...
[03:07:28] Like if you're used to doing it, it trips you up like every time it's just like, I'm supposed to do it this way.
[03:07:35] Yeah, Dev mentioned there's Babel plugins.  Svelte compiler does it.  There's different solutions to this problem,  but I think those solutions are actually...
[03:07:44] bad because they hide what's happening.
[03:07:47] Um,
[03:07:51] Thank you.
[03:07:52] Yeah, I mean, if I wanted to be disingenuous, I could say that.  I'd be like, yeah, we'll just fix it with our compiler.
[03:07:58] You know, be solid. I just,
[03:08:02] I don't think that's
[03:08:04] That's good.
[03:08:08] What I'm getting at is...
[03:08:13] I think people should have appreciated React more. Everyone's like really swingy on this stuff.
[03:08:19] even if
[03:08:20] I...
[03:08:21] from an implementation standpoint, you know, aren't in
[03:08:25] completely stoked with React. I think that
[03:08:29] We should appreciate React. You know, you have to understand both sides if you want to understand the tradeoffs.
[03:08:36] That being said, signals are still evolving. The collective experience in this area has grown immensely. That's the biggest benefit here. I was asked if I cared about ViewVapor.
[03:08:44] So
[03:08:45] the fact that everyone's using signals is a bigger validation of what we're doing than anything. The  fact that it's not just signals, they're going to fine-grained reactive rendering approaches. Like the
[03:08:55] Like Svelte 5
[03:08:57] And ViewVapor, when you look at the compile code and you take solids compile code and you just put them next to each other, you're like, this is the same thing. Like,
[03:09:05] This is way more powerful. You know, when someone would talk about, say, React being the last framework,
[03:09:14] It isn't because that's not what frameworks are doing. Like it's not
[03:09:19] you know,
[03:09:23] *sniff*
[03:09:26] And having so many new eyes on it is gonna change things.  The funny thing is we had like a decade,
[03:09:33] with the VDOM to understand it and understand what we could do within all the applications and  so many React developers trying it and doing stuff and expanding the capability to show what's capable of
[03:09:43] signals haven't even got a fraction of that attention.
[03:09:46] People have no idea of what
[03:09:48] where this is going and how much more we'll be able to do.  This is a...
[03:09:54] fundamentally more powerful technology, makes it more dangerous potentially, but it has the ability and capability of doing so much more.
[03:10:03] You can think of stuff today, you know, give guys a quick, you know, another shout out.  Resumability.
[03:10:09] is driven by signals. You don't get that granular ability without signals.
[03:10:15] And that's only one way that you could leverage them.
[03:10:20] I don't expect necessarily like a huge thing this year.  I know you guys are all hyped for Solid 2.0.  I think it's going to be like a lot of little small...
[03:10:28] improvements and innovations but they're going to show the unique value proposition people don't get  it yet still but i think that we're starting to have a collective base that the benefits are  people can start to understand this is way more than about performance
[03:10:41] All right.
[03:10:43] Thank you.
[03:10:44] Yeah, I...
[03:10:47] This has been years, honestly.  This is like...
[03:10:52] Yeah.
[03:10:53] AlienSignals, I have heard of this. Whenever a new benchmark comes around, believe me, I get flagged on it. I have not looked at the implementation details. My stage of where I am right now working on the SolidSignals implementation is we're based on Reactively still. If you look at XReactivity in those benchmarks, that's actually Solid 2.0.
[03:11:14] Funnily enough, people already, they don't realize it, that they're already testing solid 2.0 in that, in that, uh,
[03:11:21] in that benchmark.
[03:11:23] So it's significantly ahead of where solid is.  It's not as fast as Alien, not as fast as Svelte 5 either.  I have not looked at it.  As I said, I've been working on mechanical things for features mostly.  I've implemented suspense again.
[03:11:38] in the signal graph which is really cool because when i it's really cool when you go over to like  the the render library and you make this suspense component and it's like create suspense
[03:11:46] Like, you know what I mean? Like it's, even though there's no DOM,
[03:11:51] expectation there.
[03:11:54] in the core API.
[03:11:56] The fact that it's something that can be represented through base primitives is really powerful.  And for me, I've been working on that.  The idea of...
[03:12:05] Thank you.
[03:12:06] React, like original reactivity had dependency graph.
[03:12:10] And then the innovation that came from surplus, so in SJS, and that we brought to solid,
[03:12:16] and now most fine grain renders do this, is
[03:12:20] the ownership graph, the idea, almost like components, but that signals can own signals and you can basically build the whole world out of signals.
[03:12:29] When I was working on suspense and transactions in solid 1.0, I started seeing commonality patterns around scheduling.  And we had a single scheduler and I did a bunch of hacks around it.  With 2.0, what I did was I rewrote the scheduler to be able to be multi-cued and hierarchical as a mechanism to be able to control things like suspense off screen and all this stuff in a direct mechanical way that you can actually control.
[03:12:52] as a primitive itself that you can build. And I think that's going to be the groundbreaking change. But that
[03:12:57] with the obviously non-nullable async and whatnot, but like basically
[03:13:02] the capability of these primitives will let us model much more powerful things,  much simpler, which I think is going to be really exciting. I, I,
[03:13:12] Do hope to look at the performance basics.  Milo is going to look at Alien signals and see if we can get the raw updates a bit faster.  That being said, as I said earlier in the stream,
[03:13:20] signals performance itself is not that important.
[03:13:23] because it's not the load-bearing part, the rendering is.
[03:13:29] you can double the speed of your signal library in those benchmarks and make no  dent on the JS framework benchmark.
[03:13:34] or minimal. So
[03:13:36] I...
[03:13:38] I do, I obviously want to make stuff faster, but it's not a priority as of yet, but I am definitely very interested to check out Alien Signals.
[03:13:49] There probably should be, but as I said, it's similar to looking at the Alien Signals stuff.
[03:13:54] I want to
[03:13:56] The problem is when we get into the transactional piece, it's going to be hard to break it out.  It's going to get weaved into all the little...
[03:14:04] aspects of it. I don't know how swappable the underlying implementation is going to be. I guess we'll see. I'm trying to keep things really separate this time. That was the problem with the whole 1.0. The reason we got stuck
[03:14:12] We people are like, Ryan, why is solid signals?
[03:14:16] And why all this and all like all these questions. And it's like, because the second I added transactions, you know, transitions, you know, like the concurrent rendering and solid back in 2019. God, it was five, six years ago. Um, and I,
[03:14:29] It's been very hard to update this core signals library.  Like the constraints there were too, like I just wove everything through.  I told you it was all tree shakable, but it's, it's very entwined.  Uh, right after the 1.0 release around the 1.2 time period, I tried to actually pull  it out and like read design transactions.
[03:14:45] I'm
[03:14:46] I don't like going into that code right now. We have, as I said, 2.0 is a complete signals rewrite because that's what needed to be addressed. Our core approach has aged, right? We had signals right back from the beginning, you know, and it's the same signals and it was faster its time. It's not fast now, but, you know, seven years later, but...
[03:15:11] I haven't been able to really touch it in five or six years.
[03:15:18] No, no. The solid talk has only came up recently because it's one section on signals. We've been talking about React actually most of the time.
[03:15:28] Thank you.
[03:15:29] Thank you.
[03:15:30] One signals topic.
[03:15:33] Thank you.
[03:15:34] Thank you.
[03:15:35] Thank you.
[03:15:35] Thank you.
[03:15:36] But yeah, I think...
[03:15:42] I think the spec is interesting, but like anything,
[03:15:47] Um...
[03:15:48] I want to...
[03:15:50] explore...
[03:15:52] Uh...
[03:15:54] what's possible rather than be constrained by like how to like standardize it.
[03:16:00] There's actually a really good comparison here.  I don't know if I can find HTMX 2.0.
[03:16:06] Um...
[03:16:09] Thank you.
[03:16:10] Was this an old blog?
[03:16:13] No, I don't know. Maybe I'm wrong. Maybe it was a different release. There's something that Theo recently covered on a stream. And it was basically where Carson was saying that his goal was that HTMX be like jQuery. And it's funny, because if you watch this stream, maybe a year ago, was it the first time I mentioned it? I basically said that HTMX didn't interest me. It's the new jQuery. Well, he's gone and
[03:16:37] owned it. And
[03:16:40] One of the things he's saying is like, we don't expect
[03:16:43] our major releases from now to have any changes.
[03:16:46] like breaking changes.  We won't change the defaults.  We won't do anything.  We just, you know,  small implementation improvements  and all this stuff.  I'm like, is that even  a major release then?  Because you're not actually,  like, why even release anything?  You know,
[03:16:57] But basically his goal, he was like, like jQuery, I want to melt into the browser, right?
[03:17:04] And it's so funny because when I'm thinking about stuff, I'm like...
[03:17:09] it's like on the opposite end of the spectrum, right?  Because in a sense, signals getting in the browser, is that like, have we won?  Have we become jQuery? Like...
[03:17:17] is our approach going to be the one that's adopted?  But there's two sides of that coin, right?  Like one side, you can measure success by the fact that like it becomes a standard,  you know, in the sense like Jamstack became the standard.  That's how people build modern serverless websites.  But on the other hand, like
[03:17:35] Um,
[03:17:37] What happens to jQuery itself, right?
[03:17:41] jQuery is on a lot of pages that wishes it was not there. I've never tried to get jQuery out of eBay, right?
[03:17:47] Um...
[03:17:48] It's...
[03:17:48] It's kind of funny.  Um...
[03:17:51] because
[03:17:55] I could go on a whole separate tangent about that, but it was just one of those kind of weird things.  Like everyone aspires to be the disappearing framework.
[03:18:05] Now that I use web components or something, I don't need a framework. But then it's like,
[03:18:10] Like...
[03:18:11] what happens to the thing that was there?
[03:18:15] Okay, is this an HTMX?
[03:18:19] htmx.hp
[03:18:22] I'm just like typing it in here.  Essays.
[03:18:26] future.
[03:18:28] Thank you.
[03:18:29] Yeah, yeah.
[03:18:30] Is it the new guarantee query?
[03:18:34] I don't think it's arrogant. This is exactly my original take of HTMLX.
[03:18:42] Thank you.
[03:18:43] building the 100-year web service.
[03:18:50] This is... oh, it's a video. I don't want to watch that.
[03:18:59] Yeah, I mean, his goal is for his thing to become a standard.
[03:19:04] No new features is a feature.
[03:19:08] People shouldn't be pressured.
[03:19:11] to upgrade H2nex over time unless there's specific bugs they want fixed. They should feel comfortable that H2nex that they write in 2025 will look similar to H2nex they write in 2035 and beyond.
[03:19:24] Intercooler is right. Many JavaScript problems are updated in dissonance. Intercooler is not. It's not because it's dead, but rather because it's mostly right. Basic idea is right in the platition. This is such an interesting idea, right? The idea that you think that you've solved everything.
[03:19:37] I think that's I think that statement's more arrogant than than calling yourself
[03:19:41] the new
[03:19:43] jQuery, to think that
[03:19:46] that nothing needs to change because you got it right.
[03:19:50] Hmm.
[03:19:51] *Sigh*
[03:19:53] Thank you.
[03:19:54] the documentation will improve tests will be updated blah blah blah but there will be no  massive rewriting constant updating this is a constant software industry in general in  the friendly world which is a complicated levels of churn
[03:20:04] Mm-hmm.
[03:20:08] Yeah.
[03:20:09] what this is actually a bigger sign  though is being not ambitious.  I think it's good that
[03:20:15] he understands exactly what his intention is for the project.
[03:20:18] It's funny because like...
[03:20:21] I don't know what version are they on right now?
[03:20:24] Like two? Like...
[03:20:26] Some of you should expect things to continue working as before, right?
[03:20:36] Yeah, it's funny. I mean, that's what the web platform is for. And I know that he's probably working with the web platform. Yeah.
[03:20:45] I think they said triptych project into the standard stuff. See that makes sense to me because libraries exist so that you can do what the platform can't do. So writing a library that doesn't update ever is the most uninteresting thing possible because like then it's in the wrong place. It should be if the pattern is right and it's never going to change it should be part of the platform.
[03:21:08] Otherwise,
[03:21:09] Yeah.
[03:21:13] I found because of its philosophy.
[03:21:18] Thank you.
[03:21:21] I should figure out how to codify that, I guess.
[03:21:26] Thank you.
[03:21:28] Yeah, I think that's the gist of it. Let's see here. I think he wants to support different... yeah, put patch delete. Yeah, I mean...
[03:21:36] Sure, why not? We should have that.
[03:21:39] Funny thing is, forms...
[03:21:41] aren't, it's funny, we try and model stuff off forms because of declarative, but like, this is one of the funniest tensions when you look at stuff like Remix and all that stuff, people like look at them, they're like,
[03:21:50] In some ways, it gets rid of a whole bunch of code.
[03:21:53] I have a talk that I did last, I think it was for the dev world last February.  And I go through this evolution of the history of single-page apps.
[03:22:04] all in solid start. I started a client-side app and then I do this and I had a feature and I basically go through the full history of how we developed different client-side apps and then make a joke at the end when I realized like, oh, I forgot to turn on SSR. People assumed it was on because of all the features I was using. But in that talk,
[03:22:20] Um,
[03:22:22] The code did disappear when I did the smarter forms and the, you know, the actions and the query cache and all this kind of stuff like it did.  It was just kind of funny because...
[03:22:32] One of my first pushbacks against it is it's
[03:22:35] is a lot
[03:22:36] less capable in a certain way.
[03:22:40] to represent things that way. Like you really kind of got to go out of your way. But again, if all the logic is on the server for the most part, um,
[03:22:50] Kind of works, except for as a
[03:22:53] Izzy.
[03:22:54] It's got to do the model comes into a shared state and preservation, but yes,
[03:22:59] There's nothing wrong with
[03:23:01] doing this. I guess that's the key thing, different verbs.
[03:23:04] 'cause,
[03:23:05] Yeah, posting get.
[03:23:07] Thank you.
[03:23:08] Yeah, no.
[03:23:13] That's good.
[03:23:16] Thank you.
[03:23:25] Yeah.
[03:23:30] Thank you.
[03:23:31] Yes, yes. Couldn't say this. You couldn't agree more. Honestly, this scares me. I hope we don't get here for a while.
[03:23:41] this whole like standard setting the way signals bind to the DOM, it's tricky.
[03:23:50] Even the web platform, yeah, you could deserve to take a little bit away there.
[03:24:01] We will never get fully past syntax reality to come to terms with.  Yeah, I know.
[03:24:09] Thank you.
[03:24:11] Yeah, no, I'm, I think this is, if this is his goal and he's put it out this way, I think this is great.
[03:24:20] I mean, honestly, it's very difficult as a single maintainer.  You have to make that choice of whether you're going to continue being that guy  or if you're going to try and
[03:24:28] influence and
[03:24:30] bring in other people and expand out your world and, and,
[03:24:35] you know, almost
[03:24:37] It's like the classic, like,
[03:24:39] Anytime someone is good at something, do they just do it themselves or they make a company out of it? Like it's a smaller scale.
[03:24:46] So like
[03:24:48] I have respect.
[03:24:50] for this in that he knows exactly his outcome. Which is very different, as I said, from where we're with Solid. Because Solid, I don't know where this goes. I just know that we can do better.
[03:24:59] So it's like it's like a very different place.  But I wanted to bring this article up because it's like it's a different perspective of looking at how.
[03:25:08] library or framework we get towards standardization.
[03:25:13] Thank you.
[03:25:14] Right.
[03:25:15] Okay.
[03:25:16] Very cool.
[03:25:17] Very interesting.
[03:25:20] What else? So what section are we in here?
[03:25:23] Uh, looking forward. Yes. What's the next topic?
[03:25:27] Web Components.
[03:25:28] Thank you.
[03:25:29] No, I don't really have anything more to say about Webcom.  I had to include it because I knew people would...
[03:25:37] expect it so I obviously linked to my article
[03:25:41] I just...
[03:25:42] don't really have anything to say about web components either way. They're
[03:25:46] I talk about some things not being interesting.
[03:25:49] you
[03:25:50] Web components are definitely in that pile.
[03:25:53] Okay, so yeah, overall, where I think in here, I'm not predicting some big technology problems.
[03:26:01] Jump.
[03:26:02] To be fair, there wasn't a big technology jump this past year either.
[03:26:06] Um...
[03:26:07] But what I've noticed is that people aren't in that place where they want it again.  I think no one's creating a new JavaScript framework anymore.  We're not going through that buzz.  So we're not getting pushback.  If someone does, you know, like Brisa or something, people are actually pretty supportive.  Yeah.
[03:26:20] because it's a rarer thing.
[03:26:22] Um...
[03:26:23] Okay.
[03:26:24] But...
[03:26:25] Yeah, it's just there's a different sense here. It's funny. I wrote this, I swear, before the whole Jordan walk.
[03:26:32] templating view GSX thing because this has been going on for months, but I said I've watched the conversation to devolve from whether presumably makes sense versus partial hydration to the who has the best templating syntax again.
[03:26:44] This has been going on for months now.  I know that one last week blew up, but...
[03:26:50] Um,
[03:26:51] It's just like a sign of where people are at.  People have ever kind of accepted the fact that, you know...
[03:26:57] I'm using React, you know?
[03:26:59] And they're not
[03:27:00] or they decided, Hey, I'm going to try a new tool, but it, you know, which is why people are like doing these kind of subtle battles.  Because no one's talking about the technology. It's like, it's like.
[03:27:13] Did you know R4 component has a fallback? No.
[03:27:19] This is
[03:27:22] Okay, because I think it's kind of a reflection thing where...
[03:27:25] people are almost
[03:27:27] I don't know.  Like it's,  it's,  it's,  it's pushed out to far enough along the line.
[03:27:32] Thank you.
[03:27:33] Um, so I don't, I don't.
[03:27:35] I think it's a good time for us to kind of like reflect where we are.  I think I felt 2024 was kind of coming to terms of where things are at.  So, you know, maybe there isn't a lot of innovation around the corner.
[03:27:49] you know,
[03:27:50] It's on the horizon, but not right now.
[03:27:53] That's okay. I say that literally as I'm working on some of the most exciting stuff ever in Solid 2.0, but I mean in general sense, I don't actually think that
[03:28:00] most of the community is actually
[03:28:03] you know, they're kind of hitting the end of their line from that 2020 stuff.  The server stuff's kind of drawn out, you know.
[03:28:11] All the big changes and movements have happened.
[03:28:17] Yeah, next month we're going back to CS vs. Tailwind completely.
[03:28:22] Thank you.
[03:28:24] Yes.
[03:28:26] The truth is, it's just because I think there's a lot of complexity.  Nobody really wants to think.  I think after the whole push, like, oh, PPR this, RSCs this...
[03:28:35] Mm-mm.
[03:28:36] you know,
[03:28:37] Resumability even islands this people are just like
[03:28:40] I'm just building a React app, you know?
[03:28:45] Or maybe a Vue app.
[03:28:47] or Angular, really, actually.
[03:28:49] I'm not.
[03:28:51] You know, it's...
[03:28:52] It's hard to make decisions on what technology is worth investing in.  So I think people kind of aren't.
[03:28:59] I think there's a lot of the raw capabilities of the next generation here.  The fact, like every time I look at Quick and I mentioned them again,  I just see this potential technology just sitting there, you know, um, um,
[03:29:11] Thank you.
[03:29:12] Like, the pieces are there, but I'm not sure the right...
[03:29:16] they've come together in a super consumable piece, not just quick, like in other places too. Like you look at maybe stuff that
[03:29:21] Aiden's doing with a million or like, like, or like these, like these snippets of it all over the place.  But I think we're at least acknowledging that in our quest for simplicity, we set ourself.
[03:29:32] on a path that adds complexity back.
[03:29:35] A single solution hasn't shown itself. HTMX is not going to take over the world.
[03:29:39] Right. A couple of years ago, that was kind of the thing. I know maybe it's partially memed, but, you know, it's a great option to have. React isn't necessarily any more complex at doing things in other solutions. Right. What I'm getting at is like that, you know, some people for them, they say, you know, React seems simpler, you know.
[03:29:54] I know that confuses a hell of a lot of people, but like there is a certain mentality that's
[03:30:00] here.
[03:30:00] Especially if you've, you know...
[03:30:02] just don't want to think about things and good enough is good enough.
[03:30:07] Um...
[03:30:09] Async and client server interactions.
[03:30:11] And bikes.
[03:30:14] Async and client-server interactions by extension are complex.
[03:30:18] Right? We've seen that. Like, there's a reason waterfalls, all these things, like...
[03:30:24] All these pieces are really tough.
[03:30:27] Um,
[03:30:28] And compilers can't solve issues, but they can.  Oh, I'm getting raided like right in the middle of my
[03:30:35] My, uh, my, my...
[03:30:37] my conclusion here.
[03:30:40] Oh.
[03:30:41] Raider from Theo. Did Theo rate us? Did he finish his announcement? 424. Whew.
[03:30:48] BAM
[03:30:52] Yeah, today's been pretty good stream. I don't I don't know what Theo launched. I was curious but I it being Friday  I stream every Friday and today is actually one of my
[03:31:03] more...
[03:31:04] generally more interesting annual streams where I talk about the state of
[03:31:07] JavaScript frameworks at a very holistic level.
[03:31:10] across the whole ecosystem.
[03:31:13] So, yeah.
[03:31:16] Yeah, I was literally just getting to the conclusion of my article that I wrote.
[03:31:21] Yeah, we were talking a little bit
[03:31:23] Creating with HTMLX right now? Well, there you go. Yeah.
[03:31:26] Talking a bit about local first, talking about compilers, talking about
[03:31:31] AI
[03:31:38] It's true.
[03:31:39] ignore me keep ranting it's 2025 the release of marco 6 we're not talking about marco 6  i see that 2024 wasn't and i told them if they didn't get it out in 2023 i had to stop talking  about it so
[03:31:58] Thank you.
[03:31:59] Yeah, I was wondering who is building local first stuff, honestly.
[03:32:05] Very, very interested.
[03:32:08] Thank you.
[03:32:10] I see, because...
[03:32:12] This one time law. Well, because the technology is present there and I,
[03:32:17] And I see a lot of startups and people trying to innovate in this space, and I've been
[03:32:22] bunch of them keep on reaching out to me because the potential assaults
[03:32:25] granular propagation, but I just, I was like, I don't know what you're doing.
[03:32:31] *laughs*
[03:32:32] Yeah, I mean...
[03:32:34] I suspect as much. Maybe there's enough room for improvement. That's why...
[03:32:40] Bye. Yeah.
[03:32:43] There you go.
[03:32:46] Anyway, um...
[03:32:51] What I was trying to get to here, it's funny because I'm literally at the tail end of my conclusion on this stuff, but just that...
[03:32:57] Like...
[03:33:00] It's okay that stuff's complex. I think we're at a phase right now because of where innovation is that you can probably ignore most of this complexity and just go build stuff because...
[03:33:11] It's not going away.  None of these solutions quite cut it.  Pick something that makes sense with you.  I know this is like the generic, like, senior software, it depends answer.  But I actually mean it this time because I'm usually the guy that's like...
[03:33:23] go try this new thing, it's really cool.
[03:33:25] I actually do think right now we're in a get it done time period.  And because of that, I think people who do seek to innovate,
[03:33:33] you're under the radar in a way that you haven't been in for the last couple of years, which means
[03:33:39] I really want to see what you're going to build because I know I'm building really cool stuff.  Solid 2.0 is already in progress now.  If you go in the next branches on our repos, you will see movement.  Um...
[03:33:52] I've done most of the work on the signals, updated signals library.  So it's it's got a lot of cool stuff coming.
[03:34:00] Uh...
[03:34:05] I guess my question for people doing local first stuff is like,
[03:34:10] What are you actually building?
[03:34:13] Like,
[03:34:16] Like what aspect of local first?  Is it just like it's a it's like an app that you've kind of.
[03:34:22] always have open like
[03:34:28] Yes. Yeah. Sorry if I didn't introduce myself. I am the creator of SolidJS.
[03:34:38] Thank you.
[03:34:39] Thank you.
[03:34:43] Interesting. So it's like a physical thing. It's like you always hear the joke when someone's like, okay, let's go in the...
[03:34:50] I'm on the subway in New York, as an example.  But you literally were going in and out of--
[03:34:58] locations where you'd lose signal
[03:35:03] Thank you.
[03:35:04] Thank you.
[03:35:05] Okay, yeah, okay.  And then you talk about like...
[03:35:09] Collaborative piano role, okay.
[03:35:12] So yeah, it's kind of funny. Like in some ways you'd think that like say persistent connections like WebSockets,
[03:35:19] And local firsts are on the opposite end of the spectrum because one, you know, perceivably...
[03:35:24] Um...
[03:35:27] You, you know, you need a server that's always live, you know, like live view or something where like it's constant WebSocket kind of scenario. Probably should be using something like Elixir. And then on the other hand, you have stuff where it's like, no, we're not actually connected to the network all the time and we should work regardless. But
[03:35:44] From the client perspective,
[03:35:46] Both of those look almost identical.
[03:35:48] Right? Like
[03:35:50] Essentially, you're representing something locally, almost like a database, almost like some kind of data store. And the communication aspect is obscured from you.
[03:36:04] It's very interesting to see those two extremes line up.
[03:36:08] Thank you.
[03:36:08] Hmm.
[03:36:11] So this is a dozen for local first, but none of them are perfect. It seems to be a new trend that some mobile apps have worked all the way. Yes, the thing that makes me most excited about
[03:36:20] local first is one of the, one of the most difficult challenges with our typical API setups when we have like, you know, REST APIs or whatever is, and I mean, GraphQL kind of solved this to a certain degree, but is that we,
[03:36:34] fetch all this data down, right? And sometimes it's too much.
[03:36:38] But let's say we have some control over it.  But generally when we're like, okay, I need new data, we go and we fetch
[03:36:44] large amounts of data. So I guess it is mostly an overfetching thing. But the problem is once it gets to the client,
[03:36:50] It's fresh and we don't know the difference between
[03:36:54] this larger data fetch more than we needed, and what we already have.  So we have to diff it. Now, classically, you use a framework like React.
[03:37:03] and you would
[03:37:06] just
[03:37:07] push all the data in, re-render the whole thing, reactives it for you, solves it.
[03:37:12] But it's like...
[03:37:13] I couldn't picture a more inefficient way of doing things.
[03:37:17] Because it's basically assuming you can't know anything, but
[03:37:21] When you get fresh data from the server in large portions, what better can you do?
[03:37:27] Right? Like, because it's like when you have something that's client interactive, when you're only on the client and you're just updating the things that you need.
[03:37:34] react
[03:37:37] We render model is.
[03:37:38] horrendous. Like, it's just, like, you're just doing all the stuff that's completely unnecessary.
[03:37:43] You could just be like, "Okay, I changed this, changed the thing." You don't need to... I have a list, I checked it off, I don't need to re-render the list to figure out which items in the list changed to update the one thing. It's just like, "I checked the box, checked the box."
[03:37:58] It's it's kind of funny that
[03:38:02] we take that kind of mentality, right? Um,
[03:38:06] those two kind of extremes
[03:38:08] And they're not actually like,
[03:38:10] I'd say the granular side benefits something like signals, right?
[03:38:15] on the client only. But then the second you add server data, it's kind of like, ugh, you know, now we have to deal with these fresh data.
[03:38:22] We've solved this in Signal's libraries to a certain degree, although XMavisol is the only one that really does this readily. We diff the data before we feed into the UI. That way, whenever fresh data comes in from the server, we actually diff the data and then just do the same pinpoint updates.
[03:38:37] But
[03:38:38] Thank you.
[03:38:39] What if...
[03:38:40] the mechanism for pushing the data was aware of the diffs itself. Instead,
[03:38:45] of us overfetching it.
[03:38:46] That is a game changer because it means suddenly that
[03:38:51] That granular knowledge of exactly what updates propagates
[03:38:55] from the backend or from the sync engine or whatever.
[03:38:59] Which means that...
[03:39:00] this classical diff problem becomes a granular problem.
[03:39:05] So...
[03:39:06] I'm excited because
[03:39:09] Local firsts or these kind of technologies might be single best place
[03:39:12] to use solid in the future. It actually bridges up that gap. Like I don't get me wrong.
[03:39:17] Diffing of data is really cool.  And it's an approach that I've optimized to the point that
[03:39:22] even at being our worst case,
[03:39:24] We're as fast as the fastest VDOM libraries like Inferno in that zone, but
[03:39:30] If you don't have to diff at all,
[03:39:32] It's a no-brainer.
[03:39:33] Right? Like it just makes a ton of sense. So I'm very excited by this technology because I think it actually unlocks the potential to
[03:39:42] of fine green libraries because it's it's more accurate to what you're doing it's like
[03:39:48] you don't have to think about stuff as this like
[03:39:50] classic client server model, like refreshing the page.
[03:39:55] That's coarse green and
[03:39:57] inefficient by default. Like it makes sense why React has been on server components. They're good at
[03:40:02] diffing so they don't care if they re-render the whole page again.
[03:40:05] But think of what you can do if you don't have to.
[03:40:08] There's no way that ever is the best way...
[03:40:10] to ultimately solve the problem.
[03:40:14] Anyway, sorry, it's kind of a tangent, but it made me, it's definitely something that I think about often.  A lot of the work actually I've been doing in Solid 2.0 is around improved performance of these kind of diffs I was talking about, but also granular propagation.  A lot of times, and maybe I can show this.
[03:40:33] Um...
[03:40:35] with almost React code.  But I mean, I could probably show it with solid code.  But a lot of times what you'll do...
[03:40:42] is you'll
[03:40:44] you'll like
[03:40:45] I'm sure about it.
[03:40:46] you'll have multiple data sources.
[03:40:48] So let's say you have like,
[03:40:51] A, B,
[03:40:54] B, and then...
[03:40:56] when you render it, they'll come together, right?  You'll have D, which is a function of
[03:41:02] A and.
[03:41:03] B...
[03:41:05] And maybe you'll have...
[03:41:07] E, which...
[03:41:09] has C in it directly or it's a function of C or maybe you have F which is
[03:41:15] A and C. But my point is,
[03:41:17] you lose the benefits of granularity because sure yes if a changes you know only the update dnf
[03:41:24] And if C changes, you know they'll only update these. But overall,
[03:41:28] as things rise in complexity, things reconverge anyways.  And once they're converged, it's difficult to unconverge them.  This is kind of like the basic truth of
[03:41:37] most systems and why React can get away as far as it can when solving a lot of these problems. But,
[03:41:43] If you can refork the data back apart,
[03:41:48] Um...
[03:41:49] so that you could know
[03:41:51] Um,
[03:41:52] instead of it all combining, that you could actually
[03:41:55] split in and go like, no, when this change, it's only when C changes that F like, like if you, I'm not describing this very well, but if you, if you have this potential of projecting C,
[03:42:06] The problem is, sorry, I guess I know how to say it.  The problem is that you're not always dealing with
[03:42:11] simple values a doesn't always equal five and b equal six and c equal
[03:42:19] um, seven. Sometimes
[03:42:21] These are models. You have multiple property fields on them. And
[03:42:26] because...
[03:42:28] you change the name of A
[03:42:30] Maybe that doesn't impact the calculation here.
[03:42:34] because it's actually the address of a,  like a different value that actually impacts it.  But because of you kind of combining this logic together,
[03:42:44] it all gets entangled.
[03:42:46] If we have a way of re-
[03:42:50] beating out the pieces that we need granularly, we can break this cycle. And I think ultimately
[03:42:57] That will allow us to achieve...
[03:43:01] Basically escaped the...
[03:43:04] how should I put it, escape the destiny that's kind of been set forth with us in current modern frameworks. I have other streams about that. I've been working on a new primitive called create projection, which is a drive mutable.
[03:43:17] reactivity, it's pretty complicated. I'll present it at a point when I think people will actually  understand what I'm talking about, because I'm getting a little ahead of myself here.
[03:43:26] What do we got here? Chat?
[03:43:29] eyeing local media track,  but we enjoy it in the orange.  Okay.  Yeah, I've been, I've just...
[03:43:38] I guess there's...
[03:43:40] Looker is a really bad term.
[03:43:44] Okay, Dev, I'll bite. What do you...
[03:43:47] What are you saying here?
[03:43:57] Thank you.
[03:43:58] Thank you.
[03:44:03] Okay.
[03:44:09] Okay.
[03:44:10] Thank you.
[03:44:11] Yeah
[03:44:18] Thank you.
[03:44:20] Yeah, I'm trying to think of concrete solutions of it. My problem is I've probably gotten too far away from my experience.
[03:44:27] When I was last building products and wasn't a framework dev, I was building social media apps, things like Instagram.
[03:44:36] And...
[03:44:38] Thank you.
[03:44:39] I'm just trying to put it back into my perspective of what's in this blue area.  Because I can definitely think of what's in this purple area.
[03:44:48] Because there's definitely things that are very hardcore on that side. It's understanding where this blue area is. And you're suggesting that the blue area is actually a larger piece of the pie, which is actually interesting.
[03:45:01] that
[03:45:06] Thank you.
[03:45:09] and want to be able to work. Yeah, exactly.
[03:45:14] Yeah, so it's like
[03:45:16] It's a...
[03:45:19] Like collaborative apps
[03:45:21] Yeah, I mean, I probably use one every day. If you guys see, I write tons of notes in HackMD. HackMD works perfectly fine when you lose connection. I'm sitting there and I'm writing down my crazy idea of how the future of the web should look like, and then I lose internet connection, I still type, and then I come back and it's still going, yeah, okay.
[03:45:40] But
[03:45:40] Again,
[03:45:42] Yeah, I guess this is a class of application.
[03:45:49] Thank you.
[03:45:50] Once again, pointing the importance of using local first peer interaction with a network and offline first.
[03:45:57] Thank you.
[03:45:58] Thank you.
[03:45:59] Thank you.
[03:46:02] Thank you.
[03:46:03] Hmm.
[03:46:05] Yeah, it's so funny.  We were on this path for a long time  where PWAs were the future.  It was so funny.  There was like this whole thing around Google around 2017,  and then it just died out.  And I think they came to the realization  that Apple was just never going to let it in.  I think Apple did like in 2022 or 2023.  It took like an additional six years or something.  Or have they even still?  I don't even know.  Maybe that's something else that Apple allowed through.  But it's just...
[03:46:32] It went.
[03:46:33] maybe it was the shift towards e-commerce, um, you know, and the push, you know, around COVID, uh,
[03:46:40] you know, where online shopping was, but
[03:46:43] Local first...
[03:46:44] went from being
[03:46:46] where we were heading to being like,
[03:46:49] almost like a joke afterthought
[03:46:51] for almost four years there. So I'm very interested to kind of see this swing back.
[03:47:00] Thank you.
[03:47:03] Thank you.
[03:47:05] Thank you.
[03:47:07] Yeah, I'm like 10 minutes behind chat.  I should catch up.
[03:47:14] It's a long comment. To me, and this kind of local versus means you have a thing to handle
[03:47:22] Did you have to really work the internet?
[03:47:25] Traffic, yeah.
[03:47:27] Okay.
[03:47:32] It's all good. I followed what you're saying, at least. Local first.
[03:47:36] Purple is where the is authoritative blue is more traditional architecture.
[03:47:41] Purple is a very specific use case, yeah. And I think maybe a better known use case
[03:47:48] Thank you.
[03:47:50] Thank you.
[03:47:50] Thank you.
[03:47:53] Thank you.
[03:47:55] Thank you.
[03:48:05] Yeah, I mean, there are some articles.  I don't have them off the tip of my...  I think if you... I know this sounds sad, but it's like...  Solid...
[03:48:16] or React.
[03:48:18] Devs.
[03:48:21] No.
[03:48:24] No.
[03:48:26] Then you get the solid...  Let's try SolidJS. You get the...
[03:48:30] There was one, there's a couple that I remember that was actually really well, not about converting components.  I don't have it off the top.
[03:48:40] I don't have it off the top of my head. I know the problem is there's enough kind of garbage out there too.
[03:48:45] uh
[03:48:46] -
[03:48:47] Thank you.
[03:48:48] Thank you.
[03:48:54] Thank you.
[03:48:55] Thank you.
[03:48:55] Yeah.
[03:48:57] Thank you.
[03:49:00] What made me want to make solid?  I mean, we've got to go way back.
[03:49:05] I first started coming up with the ideas for Creating Solid about 10 years ago. In 2015, I was a knockout JS dev. I was doing observables or
[03:49:16] the signals, essentially.
[03:49:19] And...
[03:49:20] React started getting popular and I like didn't
[03:49:24] get it. See, I'm like that old man kind of thing. I mean, that's not true. I did get React's thing. I had to grudgingly admit that React, you know, made sense for a lot of things, but I basically watched signals libraries die.
[03:49:37] because...
[03:49:39] Everyone, there were two magic.  People don't understand how they update.  They weren't very predictable back then.  They didn't have guarantees and they're inefficient.  And,
[03:49:48] But like,
[03:49:49] I saw talks, like, if you've ever seen Ryan Florence's
[03:49:54] Ryan Florence.
[03:49:56] Florence.
[03:49:58] Hype.
[03:50:00] 2014
[03:50:03] or 2015.  I saw Ryan Florence's hype talk
[03:50:07] In 2015.
[03:50:09] And
[03:50:11] uh there's this demo
[03:50:15] love love love love ads  I know you guys can't hear it which is fine  but you don't need to hear it
[03:50:22] To see it
[03:50:23] Um,
[03:50:25] He makes like a SSR app in this thing, which is crazy ahead of its time.  But what I was looking for is...
[03:50:32] At a certain point in the app, he does this...
[03:50:35] Taki does this demo and
[03:50:39] Maybe it's earlier on in the talk.
[03:50:42] Not this one.
[03:50:46] I wish like I anyways, he does this demo of database.  It's called it's now common benchmark.  It's called DB Mon.  Oh, yeah, this one here it is.  And he and he put
[03:50:59] Um...
[03:51:02] I think it's Ember, Angular, and React next to each other, basically spitting
[03:51:08] This is what I was talking about earlier. You know, what I consider, this is like the worst case scenario. He was spinning full pages of data
[03:51:16] from the server in real time.  He's basically just going like,  here, get me the snapshot for the data, all the data.  Like you never want to do this in real life,  but he's like, how fast can they each framework process it
[03:51:28] *coughs*
[03:51:33] See, at first he...
[03:51:37] At first he does it with a reasonable refresh rate and shows that
[03:51:42] Ember has some hard times showing the mouse over, but then he goes a bit further
[03:51:47] And
[03:51:47] unhooks it and just lets them go at full speed and at full speed
[03:51:55] Thank you.
[03:51:57] You can see that react absolutely demolishes the other ones because it's a diffing problem right and
[03:52:05] I looked at this.
[03:52:07] And
[03:52:08] everyone's like, yeah, it reacts fast,  and signals are slow, and KV was slow.  And I was like...
[03:52:13] I know because of Pinpoint updates, in theory, we should be way faster than React.
[03:52:20] Can we make our worst case fast?
[03:52:24] And
[03:52:25] Um,
[03:52:27] I realized that using proxies we could.
[03:52:30] So
[03:52:33] Um,
[03:52:34] I remade that demo with proxies, essentially.  This is-- I haven't updated this in like five years.
[03:52:41] and
[03:52:43] I showed that signals could be as fast or faster than most VDOM libraries.
[03:52:49] The other problem was signals are expensive for creation.
[03:52:52] So I basically went through a series of benchmarks to kind of prove
[03:52:57] that this approach I liked. And do you know why I like this approach? It's because
[03:53:00] You know how some people like React hooks better than class components, how you could just define exactly what your logic was and have it all laid out? I really found that comfortable. React did not have hooks back
[03:53:10] in 2015.  So I was like, I need to build a framework that has
[03:53:15] Basically...
[03:53:16] these like knockout, like these granular instructions and
[03:53:21] I wanted that back. I didn't even think of hooks, honestly. I just didn't like React classes. I liked having these granular things and I wanted to prove that it's viable. I know that's kind of like a long...
[03:53:33] winded answer, but I tried to learn where Knockout failed.
[03:53:39] and essentially apply React's philosophy of top-down unidirectional flow to signals.
[03:53:46] and then show that it could outperform
[03:53:49] it was clear mental model and outperform it in every type of benchmark possible.  And once I had accomplished that,
[03:53:57] I kid you not.
[03:53:59] A couple weeks or months later, React released hooks,  and then both frameworks ended up looking identical  because I'd already swapped to JSX.
[03:54:06] And then it was like,
[03:54:08] I was like, oh, okay, well...
[03:54:11] I guess other people might like it. I didn't, even though I did all this work, I just did it for myself as like that old guy who likes his old things that no one cares about anymore. I didn't think anyone would actually switch over to signals or over to like hook like things. I thought people like plain data, you know? Um,
[03:54:28] And React basically opened the door for us.
[03:54:31] Because once they did that, floodgates came on and people were like, oh,
[03:54:36] Like this is a pattern.  I think Theo first found us because of that.  But essentially React changed itself to look like solid.  Of course, they don't list any reactive libraries or influence for hooks because they weren't.  They were thinking about some functional programming thing.  But the ironic thing is when most people look at hooks, they think reactive programming.  It's kind of funny.  Anyway.  Yeah.
[03:54:58] That's a very long winded answer, but essentially I made it for myself because I really enjoyed
[03:55:05] Um...
[03:55:06] this kind of
[03:55:08] mentality of
[03:55:10] defining state and dependencies and whatnot.
[03:55:17] Thank you.
[03:55:18] Yeah, I saved myself money, which is what you're noticing now. What am I streaming at? Am I at 720 right now?
[03:55:30] Yeah, I'm at 720.
[03:55:33] Yeah.
[03:55:37] I saved myself some money. It's because I'm using StreamYard. It's funny, I'm feeding OBS through StreamYard. I just never set up OBS on its own or
[03:55:44] Why not?
[03:55:46] um
[03:55:46] Yes.
[03:55:47] Both Ryans used to be Ember devs. I was an Ember dev as well. I mentioned Knockout, but I also did a lot of Ember. But I know Ryan Florence is an Ember dev too. I think this is what sold them. Like right before that, this is when Ryan Florence like
[03:55:59] flipped over and he's like,
[03:56:01] I'm going to be reactive and he's been there ever since.
[03:56:07] Thank you.
[03:56:08] Thank you.
[03:56:12] Thank you.
[03:56:14] Yeah.
[03:56:16] I mean...
[03:56:18] How many people are on stream right now?
[03:56:21] 150, okay.
[03:56:23] From Twitch. Just seeing how many of the Raiders are left.  Because, I mean...
[03:56:27] I...
[03:56:30] I love questions and answering questions.
[03:56:35] But I also am a bit conscious of some stuff like the basics like how signals work.
[03:56:47] There is a lot of good content on the web for that.
[03:56:51] I will link one of my own articles if I can. Where is it?
[03:56:56] Um...
[03:56:59] Building.
[03:57:01] It's like so long ago it's not even my...
[03:57:04] Building...
[03:57:07] No.
[03:57:09] Thank you.
[03:57:09] Probably faster than Google it than look at my own article list.
[03:57:14] signals from scratch.
[03:57:17] Thank you.
[03:57:18] *Sigh*
[03:57:19] It's not even the top match anymore. Thank you, Angular, stealing my thunder.
[03:57:27] Introduction...
[03:57:29] Two of...
[03:57:31] boing!
[03:57:32] Grained.
[03:57:35] Yeah, this and building a reactive live representatives.  Because I didn't call them signals in this thing.  That's why.
[03:57:42] Bye.
[03:57:43] This article series, both what they are and how to build a basic one, these two parters, basically are a good introduction. Solid also has like a five minute explainer that goes into detail.
[03:58:01] Yeah, yeah.
[03:58:05] It's been a few years, February 9th.  I published this book.
[03:58:08] article on my birthday. That's kind of funny.
[03:58:13] I've my best articles have been published on my birthday, actually.
[03:58:17] I think if I think
[03:58:20] How I wrote...
[03:58:22] the fastest
[03:58:23] JavaScript framework.
[03:58:30] February 9th, 2019, also on my birthday.
[03:58:34] Yeah.
[03:58:36] Thank you.
[03:58:37] Uh...
[03:58:38] I've been at this a while now.
[03:58:45] If I'm being honest, I'm a bit concerned about Ergonauts' split effects and async first reactivity. Can you even know why those changes will be necessary? Well...
[03:58:55] Okay.
[03:58:57] Thank you.
[03:59:01] I get why there are concerns here.
[03:59:09] Thank you.
[03:59:10] Split effects, for those who don't know...
[03:59:15] is this idea that I've been playing around with, which it's not a new idea by far. It's the idea that
[03:59:22] Create effect.
[03:59:25] Thank you.
[03:59:25] React devs are going to find this familiar, is the idea that
[03:59:29] You.
[03:59:31] you actually
[03:59:35] And like console.log.v.  Uh oh.  I'll do it like this.  The idea that...
[03:59:41] createEffect takes two arguments.  Instead of just being a single argument with the reactive tracking,  you put the tracking in one half,  and then you put the effect in the second half.  So it's almost like the dependency array.
[03:59:52] Coming back.
[03:59:53] Only.
[03:59:54] for effects, not for computeds.
[03:59:57] or stuff, but only for things with side effects.
[04:00:03] And
[04:00:04] We were joking earlier that React turned into Svelte and Svelte turned into Solid and Solid's turning into React. And I kind of...
[04:00:12] Um, you know, because like,
[04:00:14] React compiler makes it actually more like Svelte 3. Svelte 5 ruins is almost
[04:00:20] identical to solid and that
[04:00:23] This is part of my joke of, you know, solid becoming like old react is that.
[04:00:29] Yes.
[04:00:31] It's the emphasize the difference between the pure and side effect part of, of, of,
[04:00:39] of rendering. And I know that might not be obvious to what I mean to people. It's just when you run a React component,
[04:00:45] it's all pure. I know there's JSX but if you ignore that you just set up a
[04:00:51] It's not pure pure.  It's not like...
[04:00:55] It's not like...
[04:00:57] Um...
[04:00:58] Like...
[04:00:59] you are creating things like the hooks are actually being created on the hood but essentially
[04:01:05] you are, nothing you do impacts you.
[04:01:11] the outside world.
[04:01:13] And more importantly, at the time that the pure execution runs, like React component,
[04:01:20] React knows all the dependencies, because it has all the dependency rays. Before it ever runs any effects,
[04:01:26] like side effects at the,  at the initial time that it runs,  it knows what,
[04:01:30] All the things...
[04:01:32] that it depends on. Now in React's case, it goes, has this change and then it cues this on.
[04:01:38] And in Soled's case,
[04:01:40] It now knows.
[04:01:42] If we split effects like this, it now knows without running the effect
[04:01:46] that hey...
[04:01:48] If count changes, I will need to run this effect in the future.
[04:01:53] In a sense,
[04:01:56] this model that I'm talking about is like reacts
[04:01:59] model, except instead of the components being the conduit,
[04:02:04] It's the reactive graph being the conduit. It's the link between count
[04:02:08] and this count being the conduit. The component only runs once, but you're actually building a pipe
[04:02:15] that's almost identical philosophically to react where the pure parts are
[04:02:21] are pulled through to these effects instead of it being components
[04:02:26] that rerun.
[04:02:28] It's a bunch of effect syncs.
[04:02:31] pulling down granularly like streams through your app.
[04:02:36] your data. So when one piece updates and it goes, "Hey,
[04:02:40] We know all the way through to the thing, to like the effect here, which in solid,
[04:02:46] rendering, like this count in the button here,
[04:02:50] That's an effect.
[04:02:51] It's the same principle, right?  It's just an effect that says update the text of this DOM element.
[04:02:58] It knows to pull all of that through.
[04:03:02] But it doesn't do the work right away.
[04:03:04] So the reason this is important is if you have async work, things that you want to be interrupted,
[04:03:11] You know
[04:03:13] ahead of time
[04:03:16] Thank you.
[04:03:19] before you run the effect, what could be impacted? The problem with solid today without split effects is that
[04:03:26] It's too late. If you read an async value for the first time in an effect,
[04:03:30] you've already ran the effect. Now this is an argument that we could just split render effects, like things for rendering, but
[04:03:36] If
[04:03:38] Like, I don't know why you do this, but if you want to fetch
[04:03:41] Something.
[04:03:43] and console log it.
[04:03:45] Thank you.
[04:03:46] Right? Like if we wanted to...
[04:03:49] I should just pull in the solid 2.0 runtime so I could show this off better.  But if you wanted the console and this count isn't used anywhere else,
[04:04:00] We it's too late by the time we run the effect, right? The whole point of these like async and suspense models is to basically
[04:04:10] No.
[04:04:12] what the dependencies are,
[04:04:14] so that we can...
[04:04:17] you know, alt stuff without getting in weird torn states where like some of the effects are run and some of the effects haven't run.
[04:04:24] And as I said, in solid, being granular, this is super powerful, right? Because
[04:04:30] stuff like suspense and whatnot can actually...
[04:04:34] build up parts of the app behind the suspense boundary and then complete the
[04:04:39] pieces granularly instead of like
[04:04:42] doing full re-renders when things are done, right?  It's non-blocking, but it still has to have this property.  I don't know if I'm doing...
[04:04:51] uh, a very good job, but like, I guess it's part of your same question. Cause
[04:04:58] This is an async first thing. We would not care about this if we weren't caring about async. Async interruption is why we want to separate pure from side effects.
[04:05:09] That being said,
[04:05:12] A secondary goal of solid is so that you don't have the right create effect very much at
[04:05:17] anymore.
[04:05:18] Right. Think think of
[04:05:20] You know, when do you actually use CreateEffect?
[04:05:29] People who say Svelte turned into React have no clue what they're talking about.
[04:05:33] F side note.
[04:05:35] Thank you.
[04:05:39] Some people already used on, but this isn't a syntax or stylish point of view.
[04:05:49] it's not about performance.  It's about the concept that
[04:05:55] Um,
[04:05:56] it's about predictability.  It's about...
[04:06:00] And it's about consistency.
[04:06:02] It's that you want
[04:06:07] You don't want to show things torn or ripped or in half and half states.  You don't want the UI to break apart over async.
[04:06:15] There are other benefits.
[04:06:18] Because if you can pause or interrupt the pure part,
[04:06:23] async becomes non-nullable is what I call it. In React,
[04:06:28] When you...
[04:06:30] suspend, use a fetch or use something,  and it throws a promise, it interrupts execution.  So you don't have to null check the value
[04:06:42] of that promise coming back anywhere in your code.
[04:06:46] Right.
[04:06:48] Like...
[04:06:49] Uh.
[04:06:51] Um...
[04:06:52] I really should pull the runtime out of somewhere.  I just don't know if I have it at the moment on this computer.  An example, I could dig through the Discord to find an example,  but let's say we have an async value. Let's call it user. Okay.  I'm going to create async.
[04:07:09] And.
[04:07:10] This is not functioning code, I'm just doing it for illustrative purposes.  And inside create ASIM, we fetch user, which is some...
[04:07:17] maybe props.id or whatever, which is like some...
[04:07:20] like returns.
[04:07:22] promise, right?
[04:07:24] Okay.
[04:07:25] In this model,
[04:07:27] Thank you.
[04:07:28] user
[04:07:30] can always exist.
[04:07:33] It will never be...
[04:07:35] undefined, right? Like in create resource, there's a time period where you have to null check it. You have to go, even with suspense, we were like, Hey, does this user exist? But what this can, if, because in solids current implementation, suspense uses context, but it doesn't null check. Cause if user has
[04:07:53] Name.
[04:07:54] Thank you.
[04:07:56] and it's undefined
[04:07:59] Like you have to do this or it throws.
[04:08:02] Um...
[04:08:04] Because it's potential that it doesn't exist.
[04:08:08] With...
[04:08:10] kind of this blocking interruptible async, you can actually write the code
[04:08:16] in such a way that you don't have to null check it. Um,
[04:08:20] So it's mostly...
[04:08:23] It's mostly for this desire to propagate async. What's interesting is in a granular system with signals, unlike React, React you await in the component or use in the component, it blocks the component, but in something like Solid,
[04:08:39] You could...
[04:08:41] have a child component here.
[04:08:43] Cold user.
[04:08:46] you know, and then pass user to it.
[04:08:49] and this user
[04:08:52] Like, nothing's blocked here. Like,
[04:08:54] This we could we could put
[04:08:58] We can put...
[04:09:01] I don't know, we could put something else here. I don't know, like header or something. Doesn't matter. Header is gonna get rendered
[04:09:07] immediately,
[04:09:09] Um,
[04:09:09] Because we can hide the suspense component.
[04:09:13] inside the user.
[04:09:15] If we want.
[04:09:16] Sorry, I'm not using proper solid syntax, I should do this. Even though this looks like we're calling it here, we're not actually blocking until we finally use the user somewhere down the chain.  Which means every derived value through the chain doesn't matter. It's only when you get to a side effect.
[04:09:31] that syncs it, like for rendering, that we actually look up the tree to find the suspense boundary, which is cool because it means that you can have
[04:09:40] Multiple
[04:09:41] of these.
[04:09:43] like, and multiple of these
[04:09:46] whatever, user one, user two, whatever.  And then
[04:09:51] Thank you.
[04:09:51] These are not
[04:09:53] Thank you.
[04:09:53] Siblings aren't blocking children aren't blocking
[04:09:57] unless you like you do a condition around them that way. Like we could,
[04:10:01] we could pass...
[04:10:04] This is going to be so cool when I actually finish the work that I'm doing literally right now to do a release with the JSX compiler and showcase this. It's going to be an upcoming stream, but essentially...
[04:10:18] will be able to control the placeholders with suspense
[04:10:22] based on your UI completely independent of where you declare the data fetching or where the blocking actually happens. The blocking where it happens will be the farthest level down in the tree where you want. And the async will propagate to the graph like if someone has a computed like you know, something like create
[04:10:39] constant, like, I don't know, upper name.
[04:10:44] equals create memo
[04:10:48] let's say it's user.name or something,
[04:10:52] Thank you.
[04:10:53] This
[04:10:54] calculation here.
[04:10:56] won't cause this component to suspend.  It's wherever upper name gets used way down the tree,  the closest suspense boundary to that.  Basically, there's no...
[04:11:07] Uh,
[04:11:08] Cologne hierarchy has nothing to
[04:11:11] to do with the final resolution. And
[04:11:14] as I said, because it's granular, like, notice there's no null check here. It's because
[04:11:19] This async concept of not being ready will propagate through the whole graph. If user isn't ready, then upper name isn't ready. Everything potentially becomes async and suspense works along the same principle.
[04:11:33] Again, I don't know if I'm doing a good...
[04:11:36] job here. I'm going to talk about this next week. I'll record and put it up on YouTube. Yeah.
[04:11:42] Yeah.
[04:11:47] Thank you.
[04:11:49] Yeah, I mean, this is how Solid already kind of
[04:11:53] works, right?  It's just now if you go the extra distance of splitting the pure part from the side effect part,  you can freely...
[04:12:02] Do this.
[04:12:04] and coordinate the effects accordingly.
[04:12:10] technically, and I have demos of this right now  where the current reactive, you don't need suspense,  but weird stuff happens if, like,
[04:12:17] Certain value fields...
[04:12:19] Um,
[04:12:21] wait on async and others don't like you can render a UI and then if the class for some reason depends on the users.  You picked it based on the first letter of the user's name that you haven't loaded yet, you'll like render
[04:12:32] the user but not apply the CSS or something.
[04:12:37] So like there's this level of granularity that it still makes sense that you have stuff like suspense.
[04:12:42] to make sure that you coordinate it so all the effects in that block
[04:12:47] like all the rendering and user effects,
[04:12:49] are scheduled once, you know, all the async in that block resolves. So like,
[04:12:55] but what's interesting is
[04:12:57] While it mechanically looks the same as something like React, technically, the stuff that isn't blocked can be rendered ahead of time because we're non-blocking, like behind the hood in terms of our component renders.  We block on the data graph, but not on the component tree.
[04:13:13] So it basically...
[04:13:15] is the most efficient way I think we've seen to date to avoid waterfalls.
[04:13:19] Naturally.
[04:13:21] Obviously, I'm still a big proponent of fetching in the loaders or isomorphic loaders and stuff because of code splitting.
[04:13:31] If code splitting were not a thing, this approach
[04:13:34] almost completely eliminates client-side waterfalls.
[04:13:38] Um...
[04:13:44] Thank you.
[04:13:50] Thanks.
[04:13:55] Yeah, I mean, yeah, we could do something like.
[04:13:59] function user
[04:14:01] Prabh.
[04:14:03] You know?
[04:14:06] We could put the suspense boundary in here, obviously.
[04:14:09] return.
[04:14:11] Bents.
[04:14:14] Thing with solid too is like you can put the suspense boundary if you want.
[04:14:19] inside the same
[04:14:21] component
[04:14:24] whatever, like...
[04:14:25] H1.
[04:14:31] props.user.name, whatever. Like, and then suspense, fallback,
[04:14:39] equals
[04:14:42] loading user whatever
[04:14:45] Yeah.
[04:14:46] it's,  it's,  it's basically,  it's kind of cool.  Cause like the reason that this is really powerful,  isn't when the suspense is in here.  It's like when the suspense is,
[04:14:58] is out.
[04:15:00] here.
[04:15:01] Right. I think this is the most powerful part of this approach, because if I put the suspense out here now, I realize we're not going to render anything until all the users are loaded when I do this.  So I could wrap each one individually. But the important part about here is picture what your user component look like before you added suspense, before it was aware of async.  Picture what your user component look like.
[04:15:21] Why? It looked like this.
[04:15:23] It had props to that user and you pass it to the user and you got the name.
[04:15:26] The fact that you added the async data loading
[04:15:31] and the suspense does not change...
[04:15:35] the API of your user component.
[04:15:38] at all. One of the challenges that they've been facing in React is like, sure, they have a great  pattern on how to, you know, use and use suspensive stuff, but like, where do, how do you fetch?
[04:15:52] How do you set up a cache?  Like, how do you make sure that it doesn't like refetch on reload?  Right.
[04:15:57] And one of the things is we'll fetch high and pass the promise through.  But now you're passing promises through.  You actually change the API of your code.
[04:16:05] where this approach
[04:16:08] is seamless. In fact, you know,
[04:16:10] Synchronously, you always knew you had a user. Now, async doesn't change the fact. You can literally add async to your program without changing your child components.
[04:16:22] Yes, yeah.
[04:16:31] Yeah, I mean...  The thing is, if you've been watching my stream  and I've been talking about this stuff,  I do probably have the tendency to scare you  because I...
[04:16:42] Yeah.
[04:16:43] I get into the details. I find every edge case. So when you watch my stream, I'm like sitting here picking stuff apart and it's like, oh my god, this is this is scary because I'm literally thinking of every possible thing I could go wrong. And you know that if.
[04:16:55] I'm thinking of it.  There's probably things that I haven't thought of.
[04:16:59] Yeah.
[04:17:00] Yeah, I mean, if you really, here's the way I look at it.
[04:17:05] Async does add color.
[04:17:08] But so do signals. So why add like another color?
[04:17:12] Signals are already a coloration through your components.  And if you're in solid, you're using signals.  So why not just make everything signals?
[04:17:21] Thank you.
[04:17:26] Yeah. Syntaxially, we're close enough to React that people who use React, they'll have that gotcha moment where they're like, why doesn't this work? But once they get past it, we speak the same language.
[04:17:40] So...
[04:17:46] Yeah, I mean, it's...
[04:17:50] Yeah, it's interesting. Dev's getting ahead of me. I'm barely scraping together these examples and getting the code to work and he's trying to do a talk on it. Elements of Solid's solution today already work like this, but 2.0's new foundation...
[04:18:09] Especially the non-nullable async and the split effects, it just
[04:18:13] Right now it feels like it's an inconsistency, like there's a gap in our solution that doesn't work the way it is. For me, SOL 2.0 is a lot like React 16.
[04:18:23] Like react up to 16.
[04:18:27] had an idea like,
[04:18:29] what it was doing, but
[04:18:31] only sort of and it started making a bunch of stuff and it was like okay this is cool this is cool and it kept on going forward and adding stuff and slightly tweaking stuff
[04:18:40] And then...
[04:18:42] They got to around React 15 and they're like, oh, crap.
[04:18:46] We need to change something. People talk about React with not breaking changes, but if you remember back to the difference between 14 and 15, the whole idea that like when you set state, it doesn't update the state. That wasn't always true in React. Like it was like, sometimes it would update the state and other times it wasn't. It was kind of like unpredictable behavior. Around 15, they're like, okay, we definitely should be keeping the state in the past until after the flush. Like they kind of started working out what
[04:19:12] the scheduler should look like. And then with 16, they came in and they're like, okay, this is a scheduler. This is the consistent model. And React's basically been on that path since then. Once 16 came out, that's modern React. Hooks didn't come out to 16.8, which actually came out, I believe over a year ago.
[04:19:29] Maybe two years later, like 16 was the big marker.  And I feel like for us solid is kind of, that's the tipping point.  I had a lot of good ideas.
[04:19:39] But
[04:19:40] ...
[04:19:40] there was like gaps or inconsistencies or little pieces that,
[04:19:44] you know,
[04:19:48] didn't quite fit.
[04:19:50] One last thing I want to show here just on this topic, because people are worried about effects.
[04:19:57] I think one of the most common reasons people make effects is because they're creating like an form, right?
[04:20:05] And they'll get like some default data from the form and they'll be like,  but the problem is they have, um,
[04:20:13] to have a local copy of the form, like ephemeral state.  So you'll be in the situation where you have like
[04:20:19] A name.
[04:20:21] So name, set name, right?
[04:20:23] and you go, you know, we'll create a signal here.  But you also have
[04:20:28] a name coming in for the props. And a lot of people do, I'll use solid syntax, but they do create effect
[04:20:36] set name props.name, right?  This look familiar to all you guys.  This React even themselves says  that this is a terrible pattern.
[04:20:46] Right?
[04:20:48] And
[04:20:49] This is probably one of the most common places where people use effect, but the problem is it delays it. It renders the first thing
[04:20:56] Blank because the name isn't present and then schedules this effect later in solid we came up with something called create computed  Which is like a synchronous render, but I don't like this solution and
[04:21:05] um, Reacts equivalent was they were like,
[04:21:08] You should do something like...
[04:21:12] If.
[04:21:12] props.name not equal name
[04:21:17] set name
[04:21:20] Yeah.
[04:21:21] props.name or something.
[04:21:23] You can either key it on the outside or you can they actually tell you that it's like there's a whole doc on when not to use effect where they basically tell you can inline set it.
[04:21:32] And then like use it like this stuff is bonkers to me.  The solution for this installed 2.0 is really,  really simple and you're going to love it.
[04:21:42] Done. Um, I
[04:21:46] Basically...
[04:21:54] basically the concept here is that
[04:21:58] Signals can also be derived.
[04:22:00] And what this means is that you can update the local copy using this mechanism, but when the fresh props come in, it will overwrite it.
[04:22:09] Right. This is this is
[04:22:11] the signals and stores were going to do this way. It's just,
[04:22:14] It's just kind of the scenario where...
[04:22:19] It's...
[04:22:20] Yeah, I don't know.
[04:22:22] It's funny when you look at React code and you state  It's like the only thing if you do this you guys all know this doesn't update when the props update right and
[04:22:33] It's the only thing that's top level that doesn't
[04:22:36] update, right? I, I,
[04:22:39] And
[04:22:40] Anyways, I anticipate that effects will be used way less in Solid 2.0 anyways.
[04:22:50] It's still early.
[04:22:53] I've been working so hard recently because of
[04:23:00] because of dev.
[04:23:01] Um,
[04:23:03] and uh him doing the thing but i still need to put the rfcs out to get  official support yeah how does username work with gel yes it throws
[04:23:12] That's exactly what it does. We're it's. But the difference is.
[04:23:16] In solid, all these expressions get wrapped. So when we throw, it doesn't get caught by the component tree. It gets caught by the thing. You know, everyone hates all those function wrappers in solid, but they have
[04:23:27] a positive benefit that we don't have to throw away the whole render tree when we throw. We literally can just throw away that one computation, which means it gets to keep rendering. This is the part that I probably
[04:23:40] didn't explain well enough.
[04:23:42] Like,
[04:23:43] If you have
[04:23:45] Sorry, let's go back here. I can go back to this example here.
[04:23:51] Bye.
[04:23:53] going back time yeah if if if this throws
[04:23:59] Because it's not there.
[04:24:02] We've caught it.
[04:24:04] Ta-da, it's caught.
[04:24:06] which means
[04:24:07] We can continue to the next line.
[04:24:10] and continue rendering
[04:24:13] the rest of this page.  It's only when like upper name or in this case,  user gets called,  but even here it's,  it's not here.  It's only when it gets called here when you're like,
[04:24:23] in the effect that it's like, crap, I don't have the value.  And at that point, this under the hood, if you've ever seen the output of solid, I guess...
[04:24:32] I'm going to comment some stuff out so that it actually compiles.
[04:24:36] It's also wrapped in a function. This is insert, it's just an effect.
[04:24:41] of a sort. So again, this insert just catches it. So it can continue rendering the rest of the DOM beside it as well and just go,
[04:24:49] Two things: it renders nothing.
[04:24:52] which wouldn't be acceptable from a UI standpoint, but it also informs the suspense context.  It doesn't throw up to the suspense context. It's...
[04:24:59] It's a context provider. It just tells the suspense context. It's like, hey,
[04:25:03] um
[04:25:03] don't actually attach your children. So it goes and renders all this stuff, but then it's just holding these DOM nodes in space and it renders the fallback.
[04:25:13] And then
[04:25:15] when it resolves,
[04:25:17] It notifies this thing.
[04:25:19] and finishes the render.
[04:25:22] And at that point, the H1 didn't get re-rendered again.  The whole tree didn't get rendered again.  It literally just set the text on the H1.  But at the same time, it informs the suspense context.  It's like, hey, we're good.  And the suspense goes, am I waiting for anything else?  No.  And then it...
[04:25:37] just swaps.
[04:25:39] these children back into place and removes this. But doesn't re-render it. It literally just updated the text node and then swapped the content.
[04:25:47] the content index.
[04:25:48] So, um...
[04:25:51] Yeah, that's how it works under the hood.
[04:25:56] Thank you.
[04:25:59] Thank you.
[04:26:01] Yes, what is going to happen when you do that? Let's go.
[04:26:10] console dot log
[04:26:13] user
[04:26:14] Thank you.
[04:26:19] Now where is it?
[04:26:22] It's like, it's not doing what I want it to do.
[04:26:26] Thank you.
[04:26:27] No.
[04:26:30] I was looking for the linter to yell at you.  Um...
[04:26:37] It's not...
[04:26:39] It's not because there's other errors on this page.
[04:26:44] Basically...
[04:26:48] *sniff*
[04:26:49] Thank you.
[04:26:51] Thank you.
[04:26:53] The reactive variable count should be used within JSX. A track scope like a creative factor inside of event handler function or else its changes will be ignored.
[04:27:04] Yeah, sorry. It was the other errors on the page. My point is that
[04:27:10] Um,
[04:27:12] I'm tempted, we talked about this with solid strict mode, I'm tempted to just yell in general in the dev tools or at least warn at runtime. But the linter already tells you not to do this because
[04:27:26] No one should ever run a console log outside of use effect because it literally doesn't
[04:27:31] do anything. Now, what actually happens
[04:27:36] it's going to throw the whole component and the next decision point up on the tree is the one that's going to catch it or an error boundary or something. So in that case, yes, you're quite a bit less efficient because...
[04:27:48] Now,
[04:27:49] if this was async or whatever,  it's actually the parent suspense that's going to find it.  And,
[04:27:57] It's going to...
[04:28:00] It's not particularly good, but...
[04:28:03] It will work. It's just not great. Um,
[04:28:07] But yes, tooling should tell you that you shouldn't do this because it's already not a good thing to do.
[04:28:16] Thank you.
[04:28:18] Yeah, by throwing, essentially. Yeah.  It's not... This is fine-grained async.
[04:28:25] We should really embrace this term. Amplify the marketing. Yeah.
[04:28:33] Thank you.
[04:28:36] Thank you.
[04:28:38] Thank you.
[04:28:41] Yeah, Solid only emulates React
[04:28:45] behavior when you're doing the worst possible thing with it.
[04:28:51] Like the thing you don't want to happen.
[04:28:54] Thank you.
[04:28:56] Thank you.
[04:28:58] Yeah, anyway.
[04:29:02] Oh...
[04:29:02] Funny. Yeah, we should do some This Week in JavaScript to wrap up here. I also think...
[04:29:09] I saw something that I actually wanted to...
[04:29:13] to look at here, which is
[04:29:17] I had a question for you guys based on some...
[04:29:21] work that I've been doing recently.
[04:29:24] Mmm.
[04:29:29] Maybe it's too detailed question.
[04:29:33] I was working on reconcile, which is our diffing.
[04:29:39] Um,
[04:29:40] approach
[04:29:42] And I realized...
[04:29:43] that my immutable diffing swap works really well.  It has a problem, though, because it only...
[04:29:51] You can immutably diff something from the point of the diff
[04:29:54] downwards, but if you're nested immutable diff, so like if you have an object that has
[04:30:00] as an array of users and you're just dipping one of the users in that array
[04:30:05] Thank you.
[04:30:06] with some like new copy from the server, let's say.
[04:30:09] the
[04:30:10] The problem is while you can merge, not merge, but like swap the object into the other object, you can't
[04:30:18] The way the API for reconcile is, you can't replace
[04:30:22] It like it doesn't know that the parent is
[04:30:26] is a different user.  So I've been kind of like debating whether...
[04:30:32] whether this would be acceptable.
[04:30:35] Of course, it's too long for the
[04:30:38] page, but trying to decide if
[04:30:41] it would be fine if the reconcile function
[04:30:44] In this case, if you're trying to do a nested reconcile, see the beautiful thing about our reconcile function is when we go set store.
[04:30:50] I'm not.
[04:30:51] you can just pass reconcile right into it and be like passing some
[04:30:56] fresh data, let's pretend your store is a user and you're like, here, let's reconcile this user and then it'll like,
[04:31:02] basically update the data
[04:31:04] in the store and do the fine grain updates.  But if let's say the store has a dot user field and you reconcile it
[04:31:11] this
[04:31:12] even though it swaps internals of the object, it,
[04:31:16] Because you're passing in the user and you're passing the data, it can't change the reference to the user on the store itself. So I'm thinking the solution is you have to actually assign it to the user when you diff. I don't know if this makes any sense to anyone to have an API like this, but that you would...
[04:31:34] Diff...
[04:31:35] You basically apply this change
[04:31:38] to
[04:31:40] that property and then also have to assign it for it to actually work.  I don't know.
[04:31:46] It's I'm trying to get some comments on this.
[04:31:49] But
[04:31:53] Okay, it's fine. I will look at the Preact signals thing.
[04:31:58] Amen.
[04:32:02] You send it on Twitch.
[04:32:08] Well,
[04:32:11] It depends because if the diff finds that the top of the object is the same,
[04:32:17] Um,
[04:32:22] It's not going to act this.  This set isn't actually going to trigger anything.
[04:32:29] I know it's weird.
[04:32:33] Alright, this one, okay, let me grab it.
[04:32:41] Thank you.
[04:32:42] Thank you.
[04:32:46] Thank you.
[04:32:48] Thank you.
[04:32:52] um
[04:32:54] Oh.
[04:33:00] Pre-act signals got a huge performance boost. Signals rendered as text-proft effects only pull as fast as needed for rendering. Since computers didn't run as needed, they now only run as often as their downstream DOM output can be painted.
[04:33:11] Okay, so...
[04:33:13] This is a scheduling trick.
[04:33:16] I was saying before,
[04:33:17] that rendering rather than reactivity performance is actually
[04:33:21] what makes a big difference here.
[04:33:25] I'm gathering...
[04:33:27] what they're doing is...
[04:33:30] There,
[04:33:34] Throttling the reactive updates
[04:33:39] based on the frame rate.
[04:33:41] Like the paint rate.
[04:33:44] Because it's in your control when you can pull it.  And so...
[04:33:48] they're wasting less frames, which is
[04:33:51] increasing the FPS.
[04:33:59] That's what my guess is anyways.  It's funny.  Jason Miller always likes these kind of like...
[04:34:05] Update timing type.
[04:34:07] demos like he had another visual one
[04:34:12] But yeah, I mean, this is considerable difference here.
[04:34:17] Thank you.
[04:34:22] Thank you.
[04:34:24] Yeah, okay. So, basically...
[04:34:29] The scheduler isn't...
[04:34:31] being throttled by QMicroTask, it's being throttled by
[04:34:37] Um...
[04:34:39] What do you call it? The other one, request animation frame.
[04:34:48] Thank you.
[04:34:49] Thank you.
[04:34:53] Thank you.
[04:34:54] I mean, yes, this is possible because pre-examines use a two-phase design. Basically all signals use two-phase design.
[04:35:04] Yeah. The funny thing is, it's a very
[04:35:07] If it's what I think it is, it's a very easy...
[04:35:10] implementation but this is what a thing to implement but what i'm what i'm getting at is  this is what i was talking about before when i was saying that the first piece was
[04:35:19] the dependency graph and then the ownership graph and then the next pieces are all around scheduling.
[04:35:25] And
[04:35:26] You control when stuff pulls. So
[04:35:30] in a sense, like suspense. It's not just even full scheduling like this. You control
[04:35:36] Like it's suspense holding the effects as an example where the split effects is
[04:35:41] you pull the pure part first and then schedule the effectful part. Off screen,
[04:35:48] is an example of, again, zoning out a section of the UI and saying, don't pull this
[04:35:55] But like nothing stops you from saying pull this every five seconds or on animation frame or whatever, like this kind of base primitive.
[04:36:04] when exposed to primitive is incredibly powerful because
[04:36:09] You only need this is basically the realization I feel like Milo kind of pioneered when he came out with reactivity
[04:36:16] reactively, because reactively doesn't have effects.
[04:36:19] It was one of the first reactive libraries I ever saw that did not have effects.
[04:36:22] And
[04:36:23] And essentially, his use case was polling on his phone.
[04:36:28] things. We didn't need to schedule effects. He just had a regular polling interval. And I think that's
[04:36:35] I think that's an important piece of it, this kind of mentality of controlling the pull.
[04:36:44] Thank you.
[04:36:45] Marco actually, I think does the same requesting.  I wasn't really sure if I was confident that.
[04:36:52] Paint is where I wanted to do this. I mean don't don't get me wrong. I
[04:36:56] Scheduling on Paint seems reasonable when you're primarily rendering the DOM, but there might be scenarios where you don't want this behavior. In general,
[04:37:05] because reactivity is lossy for it's on events, like you're, you're,
[04:37:09] it's about current values.  It doesn't matter when you poll as long as you
[04:37:16] pull consistently, like you get all the data, you do all the effects in one go, you won't have tearing, whether that's every five seconds or whether that's a billion times a second.
[04:37:26] So...
[04:37:28] Yeah.
[04:37:29] The salt...
[04:37:32] Yeah, I mean, his explanation of why they can do this is how every reactive library or signals library works.  That's what I'm saying.
[04:37:42] If you want to see what I'm talking about, look...
[04:37:45] solid
[04:37:48] JS signals.
[04:37:52] Bye.
[04:37:53] source
[04:37:56] Um...
[04:37:59] core
[04:38:01] Scheduler, okay.
[04:38:05] See how schedule is like if schedule return otherwise schedule true Q microtest flush link. If I change this one line to say run animations
[04:38:13] request animation frame, I think that's what we get.
[04:38:19] I'm not 100% sure, but I'm pretty sure, like, roughly speaking...
[04:38:23] It's changing this one...
[04:38:26] Thing.
[04:38:35] Okay, I mean, if it's not requestAnimationFrame, then it's probably some other mechanism.
[04:38:44] Fundamentally, it's the same idea because what ends up happening is
[04:38:50] Um...
[04:38:52] Thank you.
[04:38:53] memos notify down through the whole graph.  We have a whole stream where Milo joined us and explained it.  And then at a certain point,
[04:39:00] effects.
[04:39:02] when they get notified.
[04:39:05] if their state is currently clean, they queue.
[04:39:08] on our queue, essentially, themselves. And then this queue function
[04:39:14] that I show here in the scheduler is literally
[04:39:19] Push it.
[04:39:21] into the right cues.
[04:39:23] and then schedule, which we just saw above. So like,
[04:39:28] It's just a matter of finding the right pattern.
[04:39:32] Thank you.
[04:39:34] What we did with Marco was...
[04:39:37] we ran as much as we could immediately.
[04:39:39] And then if...
[04:39:41] we would queue so we do like a post message to do a set timeout essentially for the next
[04:39:47] We do a, what was it, requestAnimationFrame and then postMessage. We basically have to use a combination of two timers to get on the next paint frame. In this case though, they want to, they want to, uh,
[04:39:59] Paint
[04:40:00] Um,
[04:40:04] they want to paint before the frame. So like I'm gathering it would be just request animation frame.
[04:40:09] It says it's rendering faster, but what are they mentioning?  What are they measuring on the FPS?  Do you understand what I'm what I'm getting at?  Like.
[04:40:17] Did I lose it already?
[04:40:20] This is Devs.
[04:40:25] *cough*
[04:40:26] Thank you.
[04:40:29] This is this one.
[04:40:31] It's funny, I didn't think I closed it down.  It doesn't really matter.
[04:40:34] Um,
[04:40:37] Like,
[04:40:39] this kind of optimization
[04:40:42] You're right, if you're seeing numbers above 60 frames per second, it means that they're not, they're measuring
[04:40:50] They're not...
[04:40:51] They're just measuring the total time
[04:40:54] Like,
[04:40:55] it's not corresponding to...
[04:40:58] to the actual like
[04:41:00] framing of their actual
[04:41:02] work being done.
[04:41:10] I mean...
[04:41:13] In this case, Preact...
[04:41:16] does the same thing as solid when it comes to text nodes.  Like they,  they,  they have this one optimization where if it's a granular,  I think,  fine.  I have to pull it up again.  Um,
[04:41:31] Thank you.
[04:41:33] Oh no, it's right there. It's blue sky. That's why I'm not looking at the right one.
[04:41:37] He said, since...  Yeah, what does he say here?
[04:41:41] Blah, blah, blah.
[04:41:47] Yeah, I don't know if he's mentioned here. Signals rendered as text props.
[04:41:51] effects only pull as fast as the need for rendering yet.  Because basically...
[04:41:55] So
[04:41:56] preact has a split mode where if you like bind directly in a very specific place it works like  solid fine-grained but then when it's structural or if you read something at a component level it goes
[04:42:06] defaults back to the dom. So basically in this,
[04:42:11] Example here. I imagine
[04:42:14] they're leveraged a place where they don't have to do the BDOM and they're just doing the granular update. It's not their
[04:42:21] They don't have that capability
[04:42:24] with everything
[04:42:26] But...
[04:42:28] I imagine that's what they're showcasing here.
[04:42:35] Yeah, yeah, yeah, yeah. But it's more like fine-grained op...
[04:42:39] it's it's they call fine green to opt out but it's more because they actually don't have
[04:42:43] the granular control flow mechanisms, right? So it's like, calling an opt-out
[04:42:50] is one way of looking at it. But like on the other hand, it's more like,
[04:42:54] They have
[04:42:55] a couple optimizations
[04:42:57] Over...
[04:42:59] a system that's generally a VDOM library.
[04:43:05] Yeah, opt out of VDOM maybe, yeah.
[04:43:08] Yeah, yeah, that's what it feels like more to me. It's like in these specific cases,
[04:43:14] Yeah.
[04:43:16] Anyway, let's talk a few things this week in JavaScript before I get too ahead of myself.  Give me a second to get myself...
[04:43:24] Good here.
[04:43:26] We'll talk about what's been going on.
[04:43:30] Thank you.
[04:43:31] Thank you.
[04:43:33] Um...
[04:43:35] I didn't do as much diagramming as I thought I would this stream.
[04:43:39] It's all just...
[04:43:40] I'll just, um...
[04:43:43] Okay.
[04:43:44] I'll just talk in crap, I guess.
[04:43:50] Thank you.
[04:43:52] We did some diagramming, so...  There's that, but...
[04:43:59] Alright, so I'll add that.
[04:44:07] Thank you.
[04:44:10] Thank you.
[04:44:10] Thank you.
[04:44:13] Alright.
[04:44:15] Uh-uh.
[04:44:15] Thank you.
[04:44:19] It's so funny.
[04:44:24] Okay, there we go.
[04:44:28] Thank you.
[04:44:31] I guess it's been a while since I've done one of these, so...
[04:44:34] I probably have a decent amount to catch up on.
[04:44:40] Yeah, December 13th.
[04:44:43] Yeah, it's literally right after I stream that they did the state of JS survey. Okay.
[04:44:47] you
[04:44:48] All right, well, let's talk about this week in JavaScript.
[04:44:53] If I'm smart, I have my banner. Bam. Okay, there we go. This week in JavaScript. Um,
[04:44:59] But it's been more like a month almost.
[04:45:02] Yeah.
[04:45:03] Had a good time off. I hope you all did as well.
[04:45:06] This year in JavaScript.
[04:45:08] Yeah.
[04:45:13] Thank you.
[04:45:13] -
[04:45:16] Alright, um...
[04:45:19] First of all,
[04:45:21] I think we already talked about this on stream, but JS survey came out.  We, we went in detail.  I was happy that solid again was the, the.
[04:45:31] the highest on satisfaction.
[04:45:33] Obviously, it's not the only metric and maybe not even an important metric, but it's an important metric for us because it's all we can really hope for.  We're not the biggest solution.  We don't have the most usage.  But if our developers are happy, well, that makes me happy.  So very stoked on that.
[04:45:51] Dev joined the SolidJS core team.
[04:45:54] the work he's been doing on...
[04:45:57] WebSockets and
[04:46:01] uh server signals and a lot of different experimental technologies really interesting  we want to throw down on the support on that plus he's just a great guy so very very cool stuff
[04:46:11] Yeah.
[04:46:13] What else?
[04:46:15] Yeah, a lot of me stuff coming out here.
[04:46:20] This podcast, I go into detail about...
[04:46:24] the stuff that we did in Solid Start.  It's so funny because I don't think most people know about it.  It's fine when Tanner releases the same stuff, you know, in the coming months.
[04:46:33] It'll be headline news, but...
[04:46:38] Very, very cool stuff.
[04:46:41] Thank you.
[04:46:42] Dev...
[04:46:43] leaked all the secrets too of what's coming in 2.0. Um,
[04:46:47] A lot of solid news.  Funnily, I guess...
[04:46:51] been solid on the brain.
[04:46:55] It's...
[04:46:56] Maybe it's been a slow month.  Um...
[04:46:59] But yeah, we talked about this already, fine-grained async.  Currently, when someone reads from an async signal, everything being rendered under suspense is thrown away.  Well, actually, that's not true in solid 1.0, but you have to null check.
[04:47:10] Fallback is shown, then after Async finishes everything,  it's rendered solid 2.  Okay, so actually solid 1.0 does actually work this way,  but you have to null check, which kind of...
[04:47:19] makes it much more awkward.
[04:47:22] Mutual derivation, yep, this is new. Create projection.
[04:47:27] This is the ability to actually have stores and things be derived.
[04:47:32] split effects and flush boundaries, knowing that we render
[04:47:34] effects depend on without running it, no way to prevent side effects, split effects in V2, let effects run pure reactive logic and effector logic separately, flush brownies allowed effects in trees to compete all reactive logic without committing any side effects, underlying capability that enables suspense off screen and other features, good, drive signals, that's what I showed before where you can literally just pass a function into a
[04:47:53] Create signal. Create a signal that's both settable and derivable. Yep. Lazy memos. Yeah, our memos are going to be lazy.
[04:47:59] Most systems already are, but, um,
[04:48:03] I just did our reactive systems like eight years old. And then yeah,  we're, this is kind of contentious, so I need RFCs, but I've been working with
[04:48:13] automatic batching and
[04:48:15] Which means that
[04:48:18] When you set a signal, it doesn't immediately propagate everywhere.  You it's queued on the next micro tasks and you would have to actually call flush sync  if you want to read the value on the next line.
[04:48:27] Um,
[04:48:29] This is a controversial one.
[04:48:31] And then
[04:48:33] Yeah, I'm still working on transactions, but yes, I'm very excited as well, Dev.
[04:48:39] It's funny, I talked about most of this stuff, so it's not that interesting. I talked about how I lost all the stuff on my computer.
[04:48:45] My article...
[04:48:46] Okay, this one's good.  Before we get to that one...
[04:48:51] Let's see if there's any actually solid news.
[04:48:56] I love when people make animation libraries in Solid. It makes me very happy because this is the type of library that I will never make myself.
[04:49:04] So seeing someone make something like Framer Motion in Solid, I know we already have animation libraries, but every time I see a new one, it gets me very excited.
[04:49:19] Thank you.
[04:49:20] Thank you.
[04:49:22] Yeah, I mean, this is an interesting one.  Some of the imports change,  which I think we'll be easily be able to handle.
[04:49:29] I...
[04:49:31] The APIs for core stuff like create
[04:49:34] Signal is fine. I think create effect is going to be the hardest one. And I don't know how to auto migrate that one.
[04:49:42] Um...
[04:49:44] Yeah, it's an interesting question, and it's something that I want to open up as part of the discussion of what this is going to look like.  Because, I mean, it's one of the pieces that definitely is going to delay stuff on the release.  It's just...
[04:49:54] Thank you.
[04:49:55] Yeah, this is going to be a little bit...
[04:49:58] to think about.
[04:50:04] I have a list that I haven't published yet.
[04:50:08] Um,
[04:50:10] Of course I'm not signed in.
[04:50:12] Um...
[04:50:14] Starting with GitHub.
[04:50:15] Yeah.
[04:50:17] God, I'm just...
[04:50:22] Thank you.
[04:50:24] Thank you.
[04:50:26] Thank you.
[04:50:29] Thank you.
[04:50:31] This is a rough outline of what I'm going to be talking about in a bunch of upcoming RFCs but I have
[04:50:38] mostly laid out
[04:50:42] the changes and stuff for 2.0. And I think each one of these will require its own strategy in terms of migration.
[04:50:50] Yeah.
[04:50:59] Simple effects are easy, but like I found this  even with myself, it's a little bit tricky.
[04:51:03] Um...
[04:51:06] Thank you.
[04:51:07] Because like what you end up doing is having a bunch of effect like signals right in multiple places and then you end up turning them almost into an array of signals. And then you know what I mean like the code change on I know this because I had to rewrite the compiler right for these parts the code change on the like the effect itself and what it's doing is identical. That part easy.
[04:51:29] Yeah, I guess you're right. It's actually not that hard.
[04:51:31] You go through and you look for all the function calls or property accesses.
[04:51:38] And then you...
[04:51:39] put them
[04:51:41] into the front half in an array
[04:51:43] And then
[04:51:44] You keep the effect code in the second effect, and then you just pass that in as the first argument and reference the change variables.  Okay, it's doable.
[04:51:52] Thanks.
[04:51:59] Thank you.
[04:52:01] I don't think you can rely from sync effects to micro task effects.  How do you detect if something needs to be synced?
[04:52:08] we sync across boundaries.
[04:52:11] Well, I...
[04:52:12] Yeah. And then this is kind of what you're kind of you kind of get to because it's like,
[04:52:19] People relied on
[04:52:21] that behavior
[04:52:23] even though
[04:52:25] They shouldn't like from a principal standpoint, they shouldn't have been doing that, so to speak.  But people did.
[04:52:31] You know, like...
[04:52:33] we always say don't care about the order of effects, don't
[04:52:38] you know, like,
[04:52:40] It's sh-- our effects were still scheduled, they just weren't async.
[04:52:45] So I think we might be okay.  Like...
[04:52:48] We did run our effects all at the end.
[04:52:51] So like
[04:52:53] It...
[04:52:54] But
[04:52:55] Yeah, there will be timing differences.
[04:53:03] Thank you.
[04:53:08] Thank you.
[04:53:10] I don't think so.
[04:53:15] I have a legacy thing already set up in the repo for stuff like create resource and like old store APIs and stuff like that.
[04:53:22] But I...
[04:53:25] Because...
[04:53:26] Yes, the flushing happens later now, but it always happened later.  Do you know what I mean?  Like...
[04:53:33] We actually...
[04:53:35] We used to always flush synchronously at the end, and now we flush...
[04:53:40] on the micro tasks. The only place this is going to hit you is places where you would have called batch.
[04:53:46] Um...
[04:53:47] Batch code.
[04:53:49] can be
[04:53:51] Code that already uses batch can be easily converted, but the problem is code where you didn't use batch
[04:53:58] will be batched now.
[04:54:00] So...
[04:54:02] It's not bad for memos because if you can access, like if you write a signal and read the memo, you get the updated value.  The problem is if you try to set a signal and then read from the DOM.
[04:54:13] There's no way we can...
[04:54:15] migrate that unless
[04:54:17] like we could determine that was your intention.
[04:54:28] Thank you.
[04:54:29] But anyways, I have... I have... yeah...
[04:54:35] I wonder how lazy we'll look into. So far, lazy looks the same. I just replaced create resource with create async. We'll see if it actually works, but...
[04:54:43] Thank you.
[04:54:44] Um...
[04:54:46] Anyway.
[04:54:49] Yeah, let's get back to...
[04:54:53] This one.
[04:54:56] Not this one, sorry. This one.
[04:55:02] Thank you.
[04:55:04] Thank you.
[04:55:05] What was I even talking about?
[04:55:11] Some other solid stuff I'm going...
[04:55:14] Thank you.
[04:55:17] Thank you.
[04:55:17] Basically, Aria Kit being...
[04:55:22] being
[04:55:23] pushed into solid or being sort of ported into solid. So,
[04:55:28] It's a project that definitely has interest. It's come up a few times in the past.
[04:55:33] Um,
[04:55:35] Thank you.
[04:55:35] Danny's heading the cause here. So like hopefully people come help check it out. I don't know. Um,
[04:55:42] He's right, we probably will need
[04:55:48] we probably will need to
[04:55:51] - Thank you.
[04:55:52] Thank you.
[04:55:53] Thank you.
[04:55:54] have some core intervention here because there are patterns that are in react that are really awkward like as
[04:56:02] is really an awkward as hell pattern.
[04:56:05] As as a component might be fine, but like
[04:56:09] Stuff that requires introspection, often in component libraries, is really odd.  And it's a very big reactism.
[04:56:24] Thank you.
[04:56:25] Will create async be able to return a store?
[04:56:30] Right now we have created a sync store in the router.  We might still need to do that. Like basically the answer is yes.
[04:56:37] Um,
[04:56:38] It's it's it's but it's actually the combination of two permittives.  It's actually taking a create async and then deriving
[04:56:44] Um...
[04:56:46] driving a
[04:56:50] a projection from it. I'll show people how to do that in the future.  Basically, now that we have derived stores, you can take
[04:56:57] something that's
[04:56:59] like a memo.
[04:57:01] and then drive it out to a store.
[04:57:03] Like you can take something that's like an async signal and then turn it into a store.
[04:57:08] *sniff*
[04:57:09] Thank you.
[04:57:11] introspection is sometimes a problem  I'm not saying this one, it's just like
[04:57:18] React has this weird pattern where
[04:57:21] you render the VDOM and then you clone the VDOM and then you add more properties to it.  As might be fine, but there's like a lot of these component patterns that involve introspecting
[04:57:30] the rendered BDOM and then copying it and then changing it and then rendering it.  And in solid, you get a real DOM node back and then cloning it makes no sense.  Like it just doesn't, it's just not a pattern that makes sense with that.  So there's other ways to do accomplish similar things, but some API surfaces are just like,
[04:57:46] It's funny when you talk to the React Core team like Seb, they actually hate those patterns.  At a couple of points he was lamenting that he couldn't do any optimizations because of children introspection.
[04:57:57] We're in a slightly better boat, but it's still...
[04:58:00] kind of unfortunate.
[04:58:04] Yeah, yeah, this is also...
[04:58:08] doable yeah
[04:58:11] Yeah.
[04:58:12] You basically, this saying that every time...
[04:58:16] I this isn't quite right, but conceptually it's the right thing.  It's like every time create the async data updates,  different with the current data in the place and then fine grained.
[04:58:26] push it out. So if your data updates, you automatically get fine-grained updates. Yeah, that's conceptually it. Okay.
[04:58:32] Um...
[04:58:35] So
[04:58:36] Yeah, there's a few patterns. Anything that uses
[04:58:40] like reacts clone element is one that doesn't make sense in solid.
[04:58:46] Thank you.
[04:58:48] Thank you.
[04:58:50] Thank you.
[04:58:53] Thank you.
[04:59:03] Yeah, it is an interesting problem to solve. I'm looking forward to seeing work in this area.
[04:59:09] Um...
[04:59:11] Thank you.
[04:59:12] Yeah, we talked about this.
[04:59:16] This is a cool little demo I saw which is I mean it's not quite correct solid people who are like why aren't you using create resource?  But it shows how quickly you can get set up on Hono and Dino.  Anyways, uh...
[04:59:29] Yeah, there's been a discussion
[04:59:32] Recently.
[04:59:34] about TypeScript.
[04:59:37] Um...
[04:59:38] Why am I not seeing the original thing I posted?
[04:59:45] Maybe this is the original one. About TypeScript and signals. For anyone who doesn't know the problem, I'm going to just put it out there so you know.
[04:59:53] Signals are pretty sweet. TypeScript, the signals has this one really freaking awkward
[04:59:59] Thing.
[05:00:00] which is,
[05:00:01] Count...
[05:00:04] Can be zero, right?
[05:00:06] Or maybe if I may count null.
[05:00:08] Let's make it null.
[05:00:10] and then say that it's like
[05:00:13] Thank you.
[05:00:14] Make undefined, and then I'd be like number.
[05:00:19] Thank you.
[05:00:26] Yeah, I'm trying to think of the best way to
[05:00:29] to show this.
[05:00:32] Um...
[05:00:39] Thank you.
[05:00:43] Let's do what I want it.
[05:00:47] Object could possibly be undefined, right?
[05:00:50] This is fine. This suits my case.
[05:00:54] Let me put this in a function so that it stops yelling at us.
[05:01:06] There we go. We're in a function format.
[05:01:09] Thank you.
[05:01:12] Count is possibly undefined. Basically the problem is even though we checked if count existed, it's telling us it could be possibly undefined. That's because each invocation of count
[05:01:23] Um...
[05:01:24] sees it as a fresh thing. There's no type narrowing.
[05:01:27] And I did a whole stream about this a while ago.
[05:01:31] about signals and TypeScript, I think it was about a year and a half ago. So
[05:01:37] people are finally, because Angular also chose functions for their signals,  we're finally talking about. Don't get me wrong, see, if you had count.value as your API,
[05:01:48] I don't.
[05:01:51] This doesn't exist so it's not going to work here, but generally speaking,
[05:01:56] Thank you.
[05:01:57] This doesn't have the same problem.
[05:01:59] even though it's a getter,
[05:02:01] and it could return a random number, count up value,  like you find in view and preact,
[05:02:06] will treat the narrowing properly.
[05:02:14] Probably.
[05:02:19] Yeah, I mean, one of the reasons...
[05:02:24] The problem is that...
[05:02:27] like, how should I put it?  Getters is the wrong solution.  Like, it's fine that Svelte went with classes,  but that's like bringing a machine gun to it.  Like...
[05:02:38] The problem is that, like...
[05:02:41] It doesn't matter the shape of your reactivity, whether you use .count, whether you have ruins, whatever.  Eventually, someone...
[05:02:47] can do this.
[05:02:49] And reactivity will
[05:02:53] still work const d equals whatever this will be reactive regardless of this and you will have the same problem
[05:03:01] Functions are the fundamental piece of composition.  If you force people into wrappers, you force people into computers, you're just creating extra nodes.  This has different implications.  The worst thing is if you had APIs that expect signals, and now you're like, oh, I don't have a signal.  I need to wrap it in something just to make it...
[05:03:18] play along. Of course, you could then have the choice with your API to go take a signal or not a signal,
[05:03:23] But you see where you're going. You lose this, like everything I built in solid was to try and make this part transparent. So you treated everything as reactive on the inside. You don't want to get into is signal land. You don't want to get it.
[05:03:35] I'm...
[05:03:37] It is my opinion...
[05:03:38] that in JavaScript
[05:03:41] functions are the right way. It's almost non-negotiable. We've had whole streams about this. And
[05:03:47] It's...
[05:03:49] It's very unfortunate that it doesn't work with TypeScript.
[05:03:53] Thank you.
[05:03:54] Thank you.
[05:03:55] Thank you.
[05:03:56] Yeah, I mean, and this is people ask.  The problem is we use it in templating.
[05:03:59] So...
[05:04:00] Here's a beautiful one.
[05:04:03] ever,  ever had,  like now that we have non null things,  um,  this is a lot nicer,  but sometimes some people,  I,  I've joked that my whole point of,  of,  of,  uh,
[05:04:14] async, of non-nullable async, is so that I can solve this stupid problem. Because like,
[05:04:20] What I'm getting at is picture if you had to do this.
[05:04:23] user,
[05:04:24] then user...
[05:04:27] dot name.
[05:04:28] like you don't always, everything in JSX or any templating language for that matter, generally is an expression, which means that it's very awkward to try and pull out the,
[05:04:37] the thing like you could hoist it but you could do this in any scope. You start writing code,  this becomes awkward because everything has to be like obviously you can wrap it in a function.  When you wrap stuff in a function you can like declare it but like a lot of places you don't get to.
[05:04:56] Thank you.
[05:05:02] Thank you.
[05:05:13] Thank you.
[05:05:20] Yes, right. And that's that's been the whole problem here. I mean, I'm, I'm even okay if I can make our accessor type have that annotation.
[05:05:33] Thank you.
[05:05:36] Yeah, I'm not worried about show. See, the problem is show, we already do that kind of like a certain amount of narrowing.
[05:05:43] because we can pass the function form out.  You can go show...
[05:05:48] show when and then pass a function callback.  The problem is even if you try and be clever  for any type of narrowing,  is it a string, is it a value?  It just doesn't...
[05:05:58] Even within the show condition, you can't
[05:06:01] Do it. Like...
[05:06:03] It's actually really frustrating.
[05:06:11] Don't get me wrong, people use solid all the time and the tools you give them are clearly adequate on a type of time. It just, this is, this thing just bugs me. Like it just really, really bugs me.
[05:06:21] bugs me that like
[05:06:24] the
[05:06:25] Because there's a lot of people that will never do this.  It bugs me that the show component...
[05:06:31] even has to have a function form.
[05:06:35] Okay.
[05:06:35] It's actually a weird complication because once I added the function form, we had to actually consider what happened if someone access the function outside the lifecycle, like if they put it in a set timeout.
[05:06:47] These are things that
[05:06:50] wouldn't have had, like, wouldn't have been worrying about.
[05:06:55] Thank you.
[05:06:56] The problem is,
[05:06:58] If you provide the variable that way, you're kind of guaranteeing that it's true.
[05:07:03] because it like it would only call it if
[05:07:05] It was truthy.
[05:07:07] Thank you.
[05:07:08] Anyway.
[05:07:12] Well, people, Angular decided that functions were the correct way to go as well.
[05:07:18] So
[05:07:20] People in the anger community started talking about this.  A lot of type narratives that say always on or always off.  That's pretty extreme.
[05:07:26] This triggered a whole bunch of conversation.
[05:07:29] I added that like
[05:07:32] Thank you.
[05:07:35] API matching is a pain in the butt. I added that every function is there, so you're going to get there.
[05:07:42] I think...
[05:07:43] What was interesting, the most important thing to me was that Josh Goldberg, who also wrote our ESLIMP plugins, very good at TypeScript, finally got him to, or someone good at TypeScript to talk about it, and he understood...
[05:07:59] with our conversation, what we're asking for, because it's not about purity. It's not about
[05:08:04] Idipotency, it's like a specific other characteristic. So what he did is
[05:08:11] Was he...
[05:08:13] opened up
[05:08:14] A.
[05:08:15] different type script issue.
[05:08:18] that apparently is... it's still an annotation, but at least it's...
[05:08:23] He's basically trying to
[05:08:26] Thank you.
[05:08:27] Yeah, we call it identity. So maybe it's like potency. It's basically trying to come up with a way that we can
[05:08:34] classify
[05:08:37] this kind of thing so it acts like propped up value.  I don't know if this will go anywhere.  There's a whole bunch of descriptions.
[05:08:45] Um...
[05:08:48] Thank you.
[05:08:49] But at least the right people are talking about.  We have Alex from Angular here.
[05:08:53] Um...
[05:08:55] Ryan Kavanaugh, obviously, TypeScript.
[05:08:59] maintainer, you know, like
[05:09:02] Andrew, we have people actually in the conversation. I'm hoping this one
[05:09:06] goes a little further so at least we can talk about it
[05:09:13] Thank you.
[05:09:14] Yeah, Fabio.  Yeah, so like...
[05:09:17] Yeah, this is in the works at least. That's my hope.
[05:09:27] Thank you.
[05:09:34] Thank you.
[05:09:35] Thank you.
[05:09:41] Thanks for joining.
[05:09:47] yeah and I would be okay with this as well
[05:09:52] But they aren't pure, right?
[05:09:55] Like we just need, it'd be nice to have something because the workarounds are horrendous.
[05:10:02] So anyway, just wanted to bring this issue to people's attention.  I'd love more opinions on this, honestly.
[05:10:13] All right.
[05:10:15] *sad*
[05:10:18] Thank you.
[05:10:21] What do I got left?
[05:10:26] Yeah.
[05:10:27] view it's so funny when i saw this i was literally thinking about how to do view transitions and  solid it's cool that they're thinking about how to use view transition in a sense i wonder if this
[05:10:37] API design is almost similar to the old, this is for React.
[05:10:42] Oh, they already merged it.
[05:10:44] Huh.
[05:10:44] That's cool. Similar to the old, like they used to have like a react transition group.  It's like the idea of using this wrapping component.
[05:10:53] Once you have something like suspense...
[05:10:57] Okay.
[05:10:58] And you have like this ability to denote...
[05:11:02] when
[05:11:03] things are coming in and out. See, I was thinking,
[05:11:06] Um,
[05:11:07] playing around with the timing of
[05:11:09] in our transitions.
[05:11:11] like you could await a transition and then
[05:11:14] have
[05:11:15] the await after the await, like have that moment before actually rendered, does the effects. But when it's knows that it's fine from a pure standpoint, that you could
[05:11:27] take your snapshot at that point.
[05:11:29] I can basically give end users a hook so they can set up a few transitions however they want.
[05:11:33] based on transitions.
[05:11:35] There's a few different API ideas.  I'm gonna check this one in more detail.  I do think it's, I think it's interesting  that we're finally getting to a point,  'cause view transitions,
[05:11:43] in these kind of scheduled frameworks are something you have to play with because you don't want to just wrap the whole async things because the view transitions can be blocking what you want to do is have
[05:11:53] the framework do the async work
[05:11:56] be ready to render because it knows like suspense is done or transition is  done.  And at that point in time,
[05:12:02] Take your snapshot.
[05:12:04] Render the page.
[05:12:06] and then do the transition.
[05:12:10] But you want to wait until all the async work is done. And the only way you can do that is if you can actually hook into the internals of the framework or they expose a hook to it.
[05:12:17] Cool API. I'm gonna I'm gonna definitely double look at this, but it's it's good that this is where we're getting to because if we can get native solutions like this it just saves us from needing to do much in
[05:12:27] in user space.
[05:12:37] Yeah, I'm going to need to spend more time to actually look at this, but this one caught my eye. What else is interesting?
[05:12:46] I think we already talked about this.  He's talking about...
[05:12:48] Um,
[05:12:50] the fact that we react context
[05:12:53] ends up re-rendering.
[05:12:55] the whole app tree.
[05:12:57] when the value changes and everyone's like, this is why you signals.
[05:13:03] Okay. Maybe my last topic of today.
[05:13:09] .
[05:13:13] Yeah, having an API where you call the get and set. The other problem is you have to get the get and set from somewhere, which I think with something like Jotai isn't bad because you're using like React. So like you're defining them generally. My understanding is you're defining them at top level of the component.
[05:13:31] Like almost like books.
[05:13:34] I mean, the set is fine. Set always works. But the get is the key one. Whereas, I mean, it's fine. There are some reactive libraries that have that API with the get. But picture like literally littering it all over your template and like every single spot because...
[05:13:49] you
[05:13:50] where you access it matters because if you're inside this expression, well, then only that  expression runs. It gets a lot clunkier. There are frameworks that do that though,  like they'll have just like a dollar sign or something.
[05:14:06] Thank you.
[05:14:07] You define them after outside, but the get, doesn't the get happen like top level, like in the component?
[05:14:13] Like,
[05:14:14] you're saying, "Hey, component, subscribe basically to this value."
[05:14:23] Whereas like
[05:14:24] Well, I mean, you see, when you use signals, you end up like...
[05:14:28] putting the, it'd be like your template would be like 50% gets.
[05:14:36] Or use Adam. Okay.
[05:14:39] Thank you.
[05:14:40] Thank you.
[05:14:41] Proxies are fine, but you need it.
[05:14:45] you
[05:14:47] not for primitive values.
[05:14:50] Thank you.
[05:14:53] Thank you.
[05:14:56] Oh, OK, it's for derived values.  Yeah, yeah.
[05:15:01] That's
[05:15:02] That's fine. I'm mostly thinking about like templating concerns.
[05:15:09] Yeah.
[05:15:11] Pretty much. It's funny, when I originally designed solid, I thought everyone would only not use primitive values and then signals became the hot thing.
[05:15:19] I
[05:15:19] Um...
[05:15:22] Okay, what do we got here?
[05:15:24] I don't even know if this is something worth ending on.
[05:15:27] This is
[05:15:28] JavaScript developers are the least knowledgeable when it comes to backend concepts and ideas.
[05:15:37] I mean, front-end developers are probably the least knowledgeable when it comes to back-end concepts and ideas in general.
[05:15:43] But are backend developers the least knowledgeable when it comes to front-end concepts and ideas?
[05:15:49] I don't know. This is Bait. People get mad, but Spyro really did hamper knowledge of a lot of traditional web dev, and that's relevant again. We just find Spyro is awesome, and we'll catch up. Comfort's talking on this very topic. Oh, there you go.
[05:16:00] I don't know.
[05:16:03] What the...
[05:16:10] It's kind of interesting because it's also like
[05:16:14] I guess they're talking about like JavaScript like
[05:16:18] Node developers or whatever. That's because you have to have school schools junior and many people's first structure weren't
[05:16:23] Sure, that impacts things, but it's also just because they're...
[05:16:30] It's not the place where their problem exists.
[05:16:34] Like,
[05:16:35] a lot of people building
[05:16:37] If you're building an app,
[05:16:38] conceptually, like a mobile app. You don't care, but you need it to run on a server just because you don't care where that server is. You go get it, you go to Netlify or Vercel, you get a serverless function and you just,
[05:16:51] run your app. The server isn't even a thing. So would they know less about server? Yes, because they literally don't care.
[05:16:59] Um...
[05:17:03] Thank you.
[05:17:03] yeah i changed my mind on this one i i actually don't think this is an interesting topic at all
[05:17:09] Nevermind.
[05:17:13] Yeah, exactly. Let me see. Did I have anything else on Blue Sky that was worth?
[05:17:20] that was worth talking about.
[05:17:22] Yes, yes. Good, good. We actually have something good to talk about.
[05:17:27] Okay, last topic of the day.
[05:17:30] I got some spaghetti or yeah, egglie ole ole.
[05:17:35] Waiting. Um...
[05:17:39] I have seen this issue. I didn't even look at it to know what exactly what issue this is.
[05:17:45] Google Translate uses a font for text replacement breaks React. This issue has been open since like 2014 if I remember.
[05:17:51] Oh no, it's 2018? And everyone discovers it for the first time
[05:17:57] Later
[05:17:58] I looked this up myself because people were complaining about this with Solid and I was like,
[05:18:02] I don't think anyone could possibly solve this.  And I looked it up and sure enough, there's a React issue.  So I just said, I'm able to reproduce this bug's.
[05:18:10] .
[05:18:12] It's funny because this topic is one of those
[05:18:16] you
[05:18:17] This topic is one of those topics where like...
[05:18:21] where
[05:18:23] They're like it pulls out those same guys that I showed on my Excalibur earlier, whereas like they're just kind of like off to the side and have no clue what's going on.
[05:18:31] They're like, this is why JavaScript frameworks are terrible or whatever.  And it's like.
[05:18:37] You guys understand that this would literally break anything? Like Dan goes
[05:18:44] As each next...
[05:18:45] Unfortunate soul describes issue. At some point it seems like there may be a plan to get it fixed on the translate side using ShadowDom or something. Is this still on the radar?
[05:18:52] He asks Addy Asmani, is there no official word yet? I think a large extent of library spaces because yes, the component libraries are expected to have control of the DOM they produce, and no, it's not expected to do random things in your page or to replace a single node.
[05:19:06] Yeah.
[05:19:08] it.
[05:19:08] This is just one of those things. My response was, it breaks more than React. This issue isn't some weird Reactism. It's any declarative UI that manages elements needs to know where they are at all times. It owns that part of the DOM. If something outside the library moves them around or inserts things in between, things will go wrong.
[05:19:26] And Eric's like, doesn't literally any extension that alter the DOM do this?  I'm like, yep.
[05:19:33] Right.  Right.
[05:19:33] A lot of them mess with the head, so it's outside of our responsibility.  Some add stuff to the end of the page, so they can go unnoticed.  But things that inline starts to change HTML are going to be a problem.
[05:19:43] Thank you.
[05:19:44] Sometimes things get by, but the cases that don't.
[05:19:47] Google Translate, Search Highlight are probably the more content sites where hydration doesn't make much sense.
[05:19:52] And I think this is a common misconception, this is why I want to talk about this. This isn't an SSR problem.
[05:20:02] I think this has to be actually on the extensions, and I think the platform needs to give them better tools.
[05:20:07] This is not fixable from a framework or library standpoint.
[05:20:12] From my opinion.
[05:20:18] Thank you.
[05:20:20] Thank you.
[05:20:25] Yeah, like I don't know if browsers can fix it directly, but they need to give them the tools for it. See, this is everyone as so this these kind of issues break SSR because they completely kill hydration in every framework because they literally expect the DOM one way and they crawl it. But you can be on a client side website.
[05:20:41] and the same thing happened.  You can go client side, you can hit translate,  and it changes the DOM, and then the
[05:20:46] frameworks screwed.
[05:20:49] Sometimes non-VDOM libraries  get a little bit more leeway.  Like people like,  or like granular stuff,  like things like quick and solid  sometimes get away,  but we can still get screwed up by it.  Even if we keep references,
[05:21:02] solid walks,
[05:21:03] Break it even if we aren't dipping we still like
[05:21:07] have to walk to nodes so stuff gets
[05:21:09] changed before we can like find it.
[05:21:12] Sometimes we will clear stuff
[05:21:15] If we think we own all the nodes in the parent instead of working in a range.  Sometimes stuff will work fine though.  So I just think that we...
[05:21:24] I think it's important to understand that even if stuff can sometimes work in non-vDOM libraries,
[05:21:29] it doesn't mean that they should work.
[05:21:31] And I have an example here.  This isn't even completely lived to declare frameworks.  jQuery could hit this if you don't grab  every single element by selector.
[05:21:38] or make some assumptions.
[05:21:43] Like, if you assume your sibling elements, you ins...
[05:21:48] Like if you assume some sibling element that you inserted is what you think it is or maybe your element is a direct parent of some text and now it isn't. These sort of things recap it in general. Like the truth of the matter is like if you were using jQuery.
[05:21:59] and you selected an element,
[05:22:01] And
[05:22:03] You expect that whenever a user does something, you put some text in it and then...
[05:22:08] Google
[05:22:09] puts up like
[05:22:11] a font element in it.  It's like,  it's not,  you know what I mean?  Like it's not the same.
[05:22:16] thing, you can't, it breaks your walks.  It doesn't matter how small the scale is.  If you're controlling an element and Google goes and changes on you, you're not going  to know about it.
[05:22:24] or like or sort of translate does i'm i shouldn't say google specifically
[05:22:29] Obviously condescites have less dynamicism and interactivity so they don't hit this as much.
[05:22:38] Yeah.  Anyway, it was just funny because yeah, what I was talking about happened here.  To me, this is a strong condemnation of the whole pattern of web development.  We aren't lowly apps.  We can't control over the UX user.  It's in the HTML team.  We respect that.
[05:22:52] Internet is for the end users. It shouldn't be up to extensions to use the shadow down the meatless secret nod trees. Frameworks are broken. They wire you up.
[05:22:59] Obstruct extensions.
[05:23:04] um
[05:23:05] I mean, that's an opinion to have, I suppose.
[05:23:09] Why do I feel like this person probably likes web components?
[05:23:14] Thank you.
[05:23:16] Anyway.
[05:23:19] Thank you.
[05:23:21] I feel like it should be able to change the page, but it'd be nice if there was a web  area where you can really report each change to the framework that can be defensive.  I mean, yeah, that's interesting. That's another alternative approach.
[05:23:34] a little bit
[05:23:36] Tricky though.
[05:23:39] Because frameworks often don't have a complete view, like technically altogether they have a complete view of the page, but they might not have.
[05:23:47] at any specific part of complete view, you know, like whether they're using components or whether, you know,
[05:23:53] *gasp*
[05:23:54] I don't know. I guess like if you have a full VDOM tree and you can link it, maybe this is more of a signals problem. Like I literally don't have a complete view of the DOM. Everything is granular and isolated. So like,
[05:24:05] If some element got notified that it changed,
[05:24:11] Yeah.
[05:24:14] It'd be kind of hard.  We don't really link back that way.  We rely on closures.  I don't know.
[05:24:19] Tricky.
[05:24:22] Thank you.
[05:24:24] But this person doesn't do JS at all.  Yeah, that's actually more fair.
[05:24:29] Okay.
[05:24:32] mutation of their
[05:24:34] Uh, yeah. Anyway.
[05:24:37] That's all I got for today.
[05:24:39] today's stream got into some of the topics I wanted to.  I have to admit, it didn't quite go exactly where I wanted to.  I thought I would...
[05:24:47] break into some more interesting diagramming,  um,
[05:24:51] But I had a good time.  I hope...
[05:24:53] All of you did.  My plan...  I'm still working on 2.0 stuff.  Enough so that I might be able to actually stream some of it next week or the week after.  Depending where I are.  I got a lot of work ahead of myself.
[05:25:07] But...
[05:25:07] Yeah.
[05:25:08] I don't know.
[05:25:10] Thank you all for joining. Obviously, I would love the like or the follow helps a lot. Just getting the word out there.
[05:25:18] So
[05:25:19] Thank you all, and...
[05:25:21] Yeah, I don't know if there's anyone to raid right now.
[05:25:25] Don't follow enough people.
[05:25:27] Oh well, I'm going to end the stream now. You guys all have a good one. Have a great weekend.  Catch you next time.
[05:25:32] Thank you.