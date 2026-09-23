---
title: "BBWA7PGJcts"
slug: "BBWA7PGJcts"
duration: "5:01:25"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/BBWA7PGJcts.m4a"
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
[00:00:03] Hello everyone, welcome to my stream today.  Um...
[00:00:09] This one, we're going to talk a lot about React.
[00:00:13] like the title says, and I mean a lot about React.
[00:00:16] Uh,
[00:00:17] I've talked about React a bunch on various streams at different times, different aspects of it.
[00:00:24] But...
[00:00:25] I thought it was probably a good time to finally just like address the whole thing and kind of
[00:00:30] really give my thoughts on
[00:00:31] On React.
[00:00:33] Because I don't
[00:00:35] I don't think it's what a lot of people expect.
[00:00:37] And I've...
[00:00:39] I keep on getting pulled into these conversations and seeing these dialogues that
[00:00:42] I'm not like particularly...
[00:00:45] happy with and I think it misrepresents react, misrepresents
[00:00:49] myself as well and what I like
[00:00:53] my perspective on, on, you know, the frameworks and, um,
[00:00:57] Yeah, I mean,
[00:00:58] The truth of the matter is, React is...
[00:01:01] like holistically looking at the whole
[00:01:03] progression of React is probably
[00:01:06] my favorite javascript framework which a lot of people don't expect me to say that so um you know  i'm just putting that out out there um
[00:01:15] So yeah, let's just...
[00:01:16] I'm getting, I'm just kind of rambling here.
[00:01:19] I get some stuff going on. Actually, I should probably post that I'm live on Twitter.
[00:01:23] So bear with me, come say hi in the chat.
[00:01:25] Um...
[00:01:27] Let's see where we are. Where is my stream? Yes.
[00:01:31] Quote tweeted.
[00:01:32] We're live.
[00:01:35] How's it going, everyone?
[00:01:39] Alright.
[00:01:40] Thank you.
[00:01:41] Oh, great. People saying hi. Got the popcorn. Yeah, see, people expecting something spicier, and there might be something spicier, but it's not what you're expecting.
[00:01:49] Hi.
[00:01:51] everyone's around that's awesome
[00:01:55] Hey, Theo.
[00:01:56] Thanks for popping in.
[00:01:59] Yeah.
[00:02:00] Hey.
[00:02:02] Yeah, just doing all the welcomes. Make sure I take a little sip from my drink here.
[00:02:07] Thank you.
[00:02:08] Thank you.
[00:02:09] Thank you.
[00:02:10] Thank you.
[00:02:12] Yeah, no, for sure.
[00:02:14] React?
[00:02:17] Um,
[00:02:18] really is amazing.  Someone was saying that in the...
[00:02:20] the channel, my first framework, yeah.
[00:02:24] It wasn't mine though, to be fair. I've been at this a little bit longer and that gives me a little bit of perspective perhaps, which is kind of what I want to bring to the conversation here.
[00:02:36] And it's funny, as I was saying before, I'm bound to get...
[00:02:40] pulled into these conversations about React because, like...
[00:02:43] I'm working on a different JavaScript framework, a framework that looks like React.
[00:02:47] and
[00:02:51] I mean the comparison is going to be made whether we like it or not, but I
[00:02:57] I've...
[00:02:58] I haven't always been a fan of React.
[00:03:02] But...
[00:03:04] It's undeniable.
[00:03:06] you know, its impact. Anyways.
[00:03:09] I'm going to talk more about that in a minute.  I'm actually just rambling right now to try and give people some time to join on.  It seems like every few seconds I wait.  Um...
[00:03:17] More people join on, more people will see what's going on.
[00:03:21] Mmm, it's a great muffin.
[00:03:23] *Tonk*
[00:03:25] Thank you.
[00:03:26] I've spent like all morning collecting these clips.  It's been a very busy week for me, actually.  I've been working on solid 1.5 bug fixes.  I've been working on solid start...
[00:03:34] For those of you who've been waiting for
[00:03:36] a bump up until the start. Happened last night.
[00:03:40] So we got 1.5 in solid start. But, you know, I've got two conference talks coming up. I'm talking at React Finland, September 15th, I believe. And I'm going to be live there in Finland. And I'm also talking at ViteConf in the beginning of October, which is pre-recorded. So I have to get the recording in this week as well. So next week.
[00:04:02] So I've been working a lot on conference talks and that's partially why I've been, you know,
[00:04:08] kind of thinking about this stuff and kind of kind of reviewing or reflecting on
[00:04:13] on where things are at, so to speak.
[00:04:16] Alright, good, yeah. See more and more people coming in on Twitch and on YouTube.
[00:04:22] Which, by the way, I guess I'm supposed to say if you haven't subscribed yet or whatever,
[00:04:26] Go click the follow button or whatever.
[00:04:30] *clicks*
[00:04:31] Do I sleep with my earrings? I just caught that. Yeah, I actually tend to. I take them out, wash them again.
[00:04:39] you know
[00:04:40] here and there, but I tend to actually...
[00:04:42] Um,
[00:04:43] sleep with them.
[00:04:44] I'm so used to it at this point.
[00:04:47] All right. Yeah. So I guess I'm supposed to get started. Just give me two seconds here. Let's just...
[00:04:54] two more seconds to give people a little bit more time
[00:04:58] All right.
[00:05:00] It's funny because I was debating to start with this week in JavaScript, but...
[00:05:06] The truth, because like so much of those conversations are why I ended up here.  I didn't really have an idea for a stream this week. Um, and.
[00:05:13] But I think it's probably better...
[00:05:16] Um...
[00:05:18] to just
[00:05:20] go right into this and we'll worry about...
[00:05:23] This week.
[00:05:25] in JavaScript later.
[00:05:26] All right.
[00:05:29] Alright, so...
[00:05:31] Shall we get started?
[00:05:33] Yeah, nice to see everyone.
[00:05:37] All right.
[00:05:42] See, these are great tips.
[00:05:47] Thank you.
[00:05:49] Thank you.
[00:05:55] See, this is the funniest thing.
[00:05:57] This is why I need to do this stream.
[00:05:59] People think that I tried to fix React.
[00:06:01] It's so funny. I
[00:06:04] I have no interest in fixing React.
[00:06:06] And I think, yeah, let's get started here so I can actually address this question directly.
[00:06:15] Alright, so...
[00:06:17] Yeah, I'm just going to start right here because
[00:06:19] to
[00:06:21] to have a stream like I'm going to have today,  it's going to be filtered by my bias,  my perspective.  And that's something anyone who's listening has to take into consideration.  I also would love for people to be participating in the chat and put in their  opinions too.  I'll address them and talk through them as we go,  because honestly,  there's a lot of thinking and thought that go into this stuff.  I mean,  from,
[00:06:41] higher level vision to API designs. And I would love to get into any of those details
[00:06:46] with anyone given the chance just because
[00:06:50] Like, there's so much here.  I...
[00:06:52] This is why I wasn't worried about doing a stream like this because I knew
[00:06:55] I could pretty much walk in with almost no prep and talk for like four hours about React and like no problem.  This is just one of those subjects where it's like,
[00:07:02] If someone asked you to give a talk with no prep, could you do it?  And I'm like, yeah, definitely.
[00:07:06] Part of it is because of my passion and interest of being kind of like a web, JavaScript web historian a bit.  So just...
[00:07:13] plays into it quite well.
[00:07:17] So
[00:07:18] Yeah, and to be fair, yes.
[00:07:21] Uh,
[00:07:22] Yeah, exactly. That...
[00:07:24] And that's why I have to answer this question, because I think it's confusing.  I know no one was actually...
[00:07:30] suggesting that it was an insult. I think the best of everyone here in my chat, in the community. So just, yeah, let's go here.
[00:07:40] First thought, I low-minded Lynn Tyler.  Career to react.  Yeah.  Um...
[00:07:45] I don't.
[00:07:46] But then I do like it's let's let's kind of start here.  So first thing I want to say is yeah, no hate here.
[00:07:52] This is... There is no hate.
[00:07:54] I don't want
[00:07:56] people to kind of like build up this narrative. I,
[00:07:59] There's no...
[00:08:01] I don't, there's no need for it. Um,
[00:08:04] I'm going to go ahead and get a little bit.
[00:08:05] I want people in the chat to give their comments and talk about what they like or didn't like or be descriptive, but there's no hate here.
[00:08:13] React isn't broken from my perspective. I want to be very clear about
[00:08:17] I do not think React is broken.
[00:08:19] I think React is a different model
[00:08:23] Um,
[00:08:24] One that perhaps I might not think is the most intuitive for certain things or the best at
[00:08:29] solving all problems, but there's nothing in here. I don't find anything inherently broken about React. It makes a lot of sense to me.  I think React is very very very well designed.
[00:08:38] So I want to kind of put that out here.
[00:08:41] Um...
[00:08:42] And
[00:08:43] I think it's also really, really important for people to understand
[00:08:47] that...
[00:08:48] Solid...
[00:08:49] doesn't fix React.
[00:08:51] React is a completely different paradigm.
[00:08:54] and
[00:08:55] It was kind of a funny thing, because most people...
[00:08:58] Not most, but a good number of people I know. Can I go soon?
[00:09:01] Well, you saw React.
[00:09:03] You saw a way of improving it, and that's why you created SolidJS.  That's kind of something logical.  You see the JSX, you see the similar-looking hooks API, and you're like...
[00:09:12] This guy found a way to solve React.
[00:09:14] with slightly different trade-offs.
[00:09:16] That's SolidJS.
[00:09:18] But the actual story is like nothing like that.  The truth of the matter is...
[00:09:24] I saw React back in...
[00:09:27] 2013
[00:09:29] Look at it.
[00:09:30] and was like, God, I hate this.
[00:09:32] I
[00:09:32] like, I don't like this. And it was, it was, it was a first reaction. I like,  I was trying to be open-minded to kind of like,
[00:09:41] come in and be like, "Okay, well,
[00:09:44] yeah this kind of trades off here trying to see the similarities but for the most part my takeaway was like
[00:09:49] I don't know. I like my pug template separate from my JavaScript logic. I don't know if I like JSX, I don't know if I like any of this stuff.
[00:10:01] I did see a lot of similarities to what I was already doing.
[00:10:04] which we'll talk about in a bit.
[00:10:06] So I was just like, okay, well, React is kind of...
[00:10:11] interesting but I prefer using knockout.js and fine-brained reactivity and composing stuff using  primitives and stuff like that so I just I wasn't in the market for React I saw the class component  I mean it wasn't even real class components it was like old school faux class prototype kind of  wrapper type components and I was just like man these uh life cycle functions and stuff they remind me of asp.net
[00:10:34] I don't like components with life cycles. I hate them.
[00:10:38] I mean, I said no hate on this dream, but where I was sitting, I was just like, this is just not for me.
[00:10:43] Um,
[00:10:44] so
[00:10:45] So we're going to review this when we go through React's history, but I just want to kind of put this in perspective to people.  So I'm just sitting there working...
[00:10:54] on
[00:10:56] knockouts and fine grained reactivity
[00:10:58] And...
[00:11:00] I start seeing people talk more and more about React and see performance benchmarks.  And as I said, this is going to parallel through.  My story is going to come out through the majority of what we talk about today.  But what I want you to understand was.
[00:11:13] I saw React as a solution
[00:11:15] to the problems I was having
[00:11:17] with reactive libraries.  The same arguments they made when they first presented React.  I looked at it and I was like, it isn't necessarily that I have to do what they're doing.
[00:11:26] I just have to understand the value of what they're doing and then apply it to fine grain.
[00:11:32] And I did that. So I wasn't trying to fix React. I was like, React's over here. I'm fine with that. I wanted to fix reactive libraries. And I saw an opportunity.
[00:11:41] So I looked at that and I was like, okay, well, yeah, maybe two way binding isn't great.
[00:11:47] Maybe it's kind of chaotic and if we do this kind of separation of read and writes, we can control things better.
[00:11:55] But I'm like, this is tricky because I've got all these primitives
[00:11:58] you know, like separate little pieces. I don't have these components that re-render. How do I do this?
[00:12:03] And that's when...
[00:12:05] I started working on Solid and trying to solve those problems. It was trying to figure out how to make
[00:12:11] reactivity more predictable to make it, you know, do what I wanted to do and
[00:12:18] That, that's what I said. I, I didn't think anyone else would like it. Honestly, I was just like,
[00:12:22] Oh, okay. Well, I love reactivity. Some people in my work love reactivity. Maybe we can use this and it'd be really cool. And I've got some better patterns here. Now we, we aren't like blowing up the world on every change because of some crazy butterfly effect, you know,
[00:12:36] good kind of, not immutable, but good read-write segregation.  And we were building this stuff on top of Knockout at my work.  It was just logical that I'd try to build a better version of Knockout  using these patterns that I'd...
[00:12:48] applied on top of Knockout that I basically inspired by React.
[00:12:52] And at a certain point, even not even the earliest days, if you watch my stream, I decided that JSX was a good
[00:12:59] thing too, and that this modularity should continue into the view code.
[00:13:05] what that ended up meaning was I had a JSX framework with all these little  fine grained primitives. And I was like,
[00:13:12] I'm kind of happy. I like it. Maybe we'll use it at work. And then
[00:13:16] I found a benchmark online and I was like, "Oh, I want to enter it. I want to show that reactivity is fast like I know it is."
[00:13:23] Because...
[00:13:24] I'd seen some other stuff that suggests otherwise, and we'll cover that in the stream today.  And I just knew that...
[00:13:32] I could do amazing things with this approach.
[00:13:36] Then,
[00:13:37] Re-act released hooks.
[00:13:39] And then I was just like...
[00:13:42] I was talking to someone earlier today, Theo, because he was saying the Hooks announcement was really a groundbreaker for him.  And if you ever watch that talk, and I'll pull it up here a little later, it starts with Dan doing the technical explanation.  And then Ryan Florence gives this really great real demo.  And Theo was like, when Ryan got through that demo, I was just sold.  It was just everything aligned and it made sense.
[00:14:04] But for me personally, I was like,
[00:14:06] I got two minutes in. Dan showed
[00:14:09] The hooks.
[00:14:10] And I was just like...
[00:14:11] Oh my god.
[00:14:14] I knew what that would mean.  I was like...
[00:14:18] Never in a million years did I think React would go that way.
[00:14:21] And we'll talk more about that.  But I suddenly was like,
[00:14:24] They just created something that looks like SolidJS.
[00:14:27] and they're telling everyone they should use it.
[00:14:30] Like, I...
[00:14:33] I mean, I'm sure.
[00:14:34] Like no one here had heard of any of my work before that point.  Like that's when the moment happened.
[00:14:41] So,
[00:14:43] To be very clear,
[00:14:45] I never tried to improve on React.
[00:14:49] They just happen to...
[00:14:51] do the most
[00:14:52] unexpected thing
[00:14:53] And we found ourselves here.
[00:14:56] So do I like, do I owe my career to React? I don't know. But I definitely wouldn't be here.
[00:15:02] - -
[00:15:06] Right. I can understand coming in after the fact, like people kind of coming in and be like, oh, yeah, you know, it looks like React.  There is a React influence. I can't deny that.
[00:15:13] But--
[00:15:14] It's like not what you think.
[00:15:17] I've done React development, I've done mostly React Native actually.
[00:15:24] I understand, and benchmarks and demos and stuff, but
[00:15:27] I haven't maintained giant React apps. My experience with giant React apps didn't happen until post Hooks. That was the point when I convinced my company, um,
[00:15:36] that Solid wasn't quite ready yet.
[00:15:38] And it was probably a good thing because I ended up leaving anyways, and we needed, we'd really...
[00:15:43] restrained resources to actually go to react and hooks are a big part of why I did that because I was like
[00:15:48] React finally has some of those qualities that I think are really
[00:15:52] important.
[00:15:53] in the framework.
[00:15:55] But I just wanted to be clear.  I never...
[00:15:58] I don't view...
[00:15:59] what I've done as fixing React.
[00:16:05] All right.
[00:16:06] I hope I made my point there.
[00:16:10] And
[00:16:13] So when I look at this, I'm going to try-- as I said, I can't deny my own bias.
[00:16:17] But I want you to know that
[00:16:21] I do have a perspective here and a way that-- a framing.  So you can see that.
[00:16:25] In my perspective, and you can say what it is, in some ways, at the beginning of React,
[00:16:31] they got more credit than they deserve in some sense.
[00:16:35] But...
[00:16:36] moving forward
[00:16:37] Several years later, from my perspective, they get less credit than they deserve today and more criticism than they deserve.
[00:16:44] Um,
[00:16:45] So like there's this weird kind of
[00:16:47] contrast going on in the sense that early days of React, you know, you have the whole histories written by the victors kind of scenario where people's memory is a little bit shady and the
[00:16:58] they kind of
[00:16:59] assume
[00:17:01] Like the things didn't happen.
[00:17:04] as smoothly as the history books would have you believe, so to speak.
[00:17:08] But similarly,
[00:17:10] years later
[00:17:11] when you have this giant incumbent that dominates the whole industry.
[00:17:15] I think
[00:17:16] they get a lot of...
[00:17:19] undeserved...
[00:17:21] criticisms. You know, I have someone the other day was trying to decide if react
[00:17:25] was a net positive on web dev, like its existence.
[00:17:30] Should we consider
[00:17:32] like a world of React never existed.
[00:17:35] So
[00:17:36] And
[00:17:37] I think that's silly.
[00:17:39] Because...
[00:17:41] This is part of maybe giving React too much credit.  Something else would have filled its place  and would have been kind of similar.
[00:17:47] I
[00:17:48] But what...
[00:17:49] the difference comes in not about
[00:17:51] what happened at the beginning when it caught attention or arose, but how they've managed the narrative since.  And that's the incredible story of React and the React team that we're going to be telling today.
[00:18:03] Um--
[00:18:05] is, is,
[00:18:07] It goes beyond just the early days. It's something
[00:18:12] There's a reason, React.
[00:18:14] has been so successful and it's not
[00:18:18] I don't think it's all the things that people sometimes attribute it to.
[00:18:21] There was actually a great video a little while ago, like why React One, and that's honestly the closest
[00:18:29] I've seen to my perspective on it. And I actually
[00:18:32] gathered a lot of sources and information from the same places to kind of put together what I wanted to talk about today.
[00:18:38] Um,
[00:18:39] But obviously, as I said, this is very biased and I'm...
[00:18:43] I was there and I had my own perspective. So let that all filter in.
[00:18:49] All right.
[00:18:50] How's everyone doing chat?
[00:18:52] Yeah, Tyler completely killed it with that video.  I remember watching it.  I'm like, this is by far the closest that I've seen.  The only thing that...
[00:19:02] Tyler
[00:19:03] I mean, he mentioned it and Stephanie had a good perspective was, um, my perspective was a little different because I was very heavily on the knockout camp. So more than perhaps others, I felt that there were other solutions like reactive solutions.
[00:19:15] that, that, um,
[00:19:17] solved the problem and could have
[00:19:19] you know, gone a different way. Whereas, but if you step back, you know, and you see Angular and Backbone and the whole conversation, you'll understand that like,
[00:19:28] from the general sense,
[00:19:30] Um...
[00:19:31] It...
[00:19:32] there was, there is a good reason for things being the way they are. And
[00:19:37] What I loved about Tyler's video more than anything was that
[00:19:41] He didn't just go, oh, jQuery to React.  Revolution.  Because that's not how...
[00:19:46] these things.
[00:19:47] happen.
[00:19:49] And...
[00:19:49] This is very relevant today
[00:19:51] And that's why we're going to this, you know, we'll do this week in JavaScript at the end, even though that's what spawned this, I think like just understanding.
[00:20:00] that. Oh, the guy who made the video. I probably should link the video in the chat or someone should link the video in the chat.
[00:20:06] Let's see if I can actually...
[00:20:07] find it here.
[00:20:09] Um,
[00:20:10] It's kind of almost like the
[00:20:12] shortest version of what we're going to be
[00:20:15] Talking about today. Yeah, let me see. I found it.
[00:20:19] Why React 1?
[00:20:23] MooTools did it first, yeah. And to be fair, I'm probably not going to be terribly fair to MooTools today because...
[00:20:31] for my purposes
[00:20:33] I'm going to
[00:20:35] Kind of shortcut a little bit at the beginning, but yeah, let's.
[00:20:41] Yes, React did a lot of things, including created a generation of devs, you're surprised if a function doesn't rerun on a state change.
[00:20:49] But I mean, that's a flavor of its own type of reactivity.  And I think that's--
[00:20:54] That's good. I mean, it's different. I don't think...
[00:21:01] We're too easy to just kind of go, "This is bad," or whatever, right? But it is interesting because on the same token,
[00:21:07] people should realize where their biases are or kind of understand what assumptions are making. And if you've only grown up in a single worldview, then you're not going to maybe have that perspective.
[00:21:21] Thank you.
[00:21:22] The key thing about React is people often want one true solution for their problems. People thought React was it, tried hard to make it, and later realized it wasn't. Well, I don't know if they realized it wasn't. Maybe they have. Maybe some have. But yeah, I mean, it's...
[00:21:34] That's why this is, like, there doesn't have to be one. We don't have to play the Highlander game here completely.
[00:21:41] and we're going to get a lot of React love.
[00:21:45] Yeah, no, this one's going to be a fun one, Theo, but I think you probably know most of what I'm already going to be talking about.
[00:21:51] um all right so
[00:21:54] With that all being said,
[00:21:56] Um...
[00:21:57] I think you can't talk about React without talking about what happened before React.
[00:22:03] You gotta paint the picture here. And that's what that video that I shared earlier really does.
[00:22:08] Um,
[00:22:09] And
[00:22:11] I've got my own perspective, but I saw something just the other day, ng-conf was happening,  which again, we don't always pay attention to ng-conf classically.
[00:22:20] especially people more like myself that may have been on the react side of  things or,  um,
[00:22:26] Um...
[00:22:28] you know, knock out or pretty much view or pretty much anything that's not Angular.  But I'm learning to pay attention to ng-conf.  When you realize that Michiko Haveri spilled the secrets of Qwik,
[00:22:40] literally in an ng-conf in 2004
[00:22:42] 19.
[00:22:43] Just like went up on stage, explained quick to everyone.  No one got what he was talking about, but he did it.
[00:22:48] I want to pay more attention to ng-conf because clearly there are some good ideas coming out of the Angular community, even if we tend to like you want to talk about a framework that doesn't get much credit.  Yeah, I think I think we're a little bit hard on Angular, too, maybe way too hard.  But OK, when I want to show was something from Sarah Drasner's.
[00:23:13] speech. And Sarah Drasner, I am
[00:23:15] super, super excited about her working with the Angular team, because she's basically  worked with a number of frameworks at this point.
[00:23:21] point and she's completely
[00:23:24] Um...
[00:23:25] Amazing so here. Let's let me share my screen and see what I want to talk about here. I
[00:23:30] So,
[00:23:31] I did a similar graph last week on This Week in JavaScript, not as detailed, but where I was trying to show
[00:23:38] how like,
[00:23:39] There's a
[00:23:40] few types of frameworks and mentalities and how they kind of,
[00:23:45] been on this kind of line. I used it to try and show that you could draw a line from
[00:23:50] Um,
[00:23:51] essentially
[00:23:53] Backbone
[00:23:55] through React...
[00:23:57] through svelte
[00:23:59] to Marco Six or, you know, like I was trying to show, show that there's this line.  But what I liked about this image from, from Sarah,
[00:24:06] talk was that she showed that this is actually really quite
[00:24:12] messy with the arrows and the influences. It's not as simple as saying like there's the functional programming frameworks and the OOP ones.
[00:24:20] There's a lot of shared
[00:24:22] references and actually it almost helps to start
[00:24:26] with part of this diagram is framing. I don't know if I want to keep doing this throughout what we're talking about today, but I feel like I want to kind of
[00:24:34] As we go through the years of React and talk about the development, I want to map this out a bit for ourselves, perhaps.
[00:24:41] I think
[00:24:42] if we start with this like pre-react zone
[00:24:45] I'm going to make a couple of these lines right here.
[00:24:48] Um,
[00:24:50] Because I want to...
[00:24:52] kind of
[00:24:53] Yeah, these are rough zones. And let's say this is like...
[00:24:57] - Thank you.
[00:24:59] 2007 to 2010.
[00:25:03] And then let's make this zone...
[00:25:06] 2000
[00:25:09] tend to
[00:25:11] Actually, I'm going to shift the boundaries here slightly.
[00:25:13] 2009.
[00:25:15] to 2012
[00:25:18] And we make this one...
[00:25:19] 2009. I'm going to choose where I want stuff to land here, to be fair. But we're going to add some more of these later, but I just want to kind of help paint this picture of the world before React.
[00:25:37] - Thank you.
[00:25:37] Um,
[00:25:39] Not to my knowledge, at least not outside of...
[00:25:43] meta and I given that
[00:25:47] Yeah, we'll talk about that in a minute.
[00:25:57] Yeah.
[00:25:58] Yeah, so let's come start here.
[00:26:01] The most obvious thing to start here, and sorry, this is going to be a mess.  Maybe I'll just do frameworks in a different color so we can see them.
[00:26:09] I'm going to just put jQuery here.  This is when I said I was going to be mean to Mootools because, I mean...
[00:26:15] Well, I don't have to be mean, right? Let's add move tools here. But honestly, I didn't use move tools, so I don't know much about it. I also did not use
[00:26:22] prototype.
[00:26:24] prototype
[00:26:25] JS. So I can't tell you how this
[00:26:29] This is like...
[00:26:32] I was doing web dev at this time, but I was working in .NET.
[00:26:36] using giant
[00:26:38] Um,
[00:26:40] I don't know what else to call them, but like
[00:26:43] components essentially that had huge overridden lifecycle functions with huge switch statements.
[00:26:49] So during this time period, like I was very much aware of
[00:26:53] of how
[00:26:54] I absolutely hated class components.
[00:26:58] I said no hate, but again, the...
[00:27:00] Let's just move on from that. So my point is there's jQuery and then somewhere around 2009,
[00:27:09] people like jQuery is very imperative.  It's like vanilla JavaScript.  People decided that like, okay, well we need something
[00:27:15] better here. We need something more structured and arguably, I don't know which one came first, but
[00:27:22] And we can look at the dates on Google, but it doesn't really matter because in
[00:27:27] End of 2009, I think Backbone came first, and then Angular came almost...
[00:27:32] And when I say Angular, I mean AngularJS, the original.
[00:27:35] And then,
[00:27:37] Yeah.
[00:27:38] I kid you not, like...
[00:27:40] uh let's do one more
[00:27:42] almost six months later, knockout.
[00:27:45] JS came out. So you notice the JS, this is kind of a trend here, but I just want to point out
[00:27:51] And we're going to need this space to get a little bit bigger.  But I'm going to...
[00:27:56] These all kind of came out
[00:27:58] around the same time, each with their own kind of idea of how they're going to update the Dom.
[00:28:02] And Backbone was like,
[00:28:04] We're going to have NBC structure, but...
[00:28:08] I mean, our views aren't really smart, so we'll just have the ability to re-render them.
[00:28:13] Okay.
[00:28:14] So...
[00:28:15] we can use innerHTML and just blow out the DOM
[00:28:18] And because we use this MVC to keep the state out of the DOM, it's not too hard for us to just replace giant portions of the DOM. This is...
[00:28:25] Incredibly inefficient.
[00:28:26] But it gave us something more structured than jQuery.
[00:28:31] Is the best way I can put it.
[00:28:33] So,
[00:28:35] like that one came first and I could probably draw some back arrows here because there is a
[00:28:42] some like these guys all borrowed from these tools here. I'm going to say jQuery for the sake of it, but I like I honestly
[00:28:49] I like
[00:28:51] Okay.
[00:28:56] Right.
[00:28:57] Yeah, so some people are asking because they might have not heard of Knockout.js.
[00:29:00] or some of these,  but that was Backbone.
[00:29:05] Okay, and you can still probably find it today, backbone.js.
[00:29:10] Yeah, you know, it had models, view, controller, some built-in templating so you can basically wipe out your inner HTML. It had a great system to keep your front-end and back-end in sync. It was a modern framework for the browser.
[00:29:26] It didn't.
[00:29:27] invent MVC, but it kind of brought it to
[00:29:30] the browser for us all to use patterns that we've used in backend frameworks.
[00:29:35] Angular--
[00:29:37] had some similarities to that, except Angular was like,  okay, we gotta be a little smarter here.  So what if,
[00:29:44] instead of like wiping out the view, let's, um,
[00:29:49] More or less
[00:29:51] Uh...
[00:29:52] kind of keep references...
[00:29:55] and kind of walk the Dom and then figure out
[00:29:58] what has changed
[00:30:00] And
[00:30:00] then apply those changes.
[00:30:03] This digest cycle, also called dirty checking, was kind of like it's big bread and butter.  Because for the first time, we weren't inner HTML-ing stuff.  And to be fair, in jQuery, you didn't have the inner HTML stuff.  You're just using DOM.
[00:30:18] directly, but Backbone had kind of made it really easy to update stuff and not worry about those details. Angular was like, okay, we need to be a bit more optimal.
[00:30:26] But,
[00:30:27] Angular 1 had a lot of interesting ideas of how to accomplish that.
[00:30:30] and
[00:30:31] the thing I want to point out at this point is none of these frameworks really,  they were like MBC.  They had no,  they didn't know where to put the state in the client.  They're like,
[00:30:39] Like they had models that were staple.
[00:30:41] and then they have views which are stateless and then controllers wiring them together but there's no idea of like like you know the old if you have
[00:30:48] two components on the page, how do you represent that? Well, I guess you need another instance  of the same model. Like, they weren't really clear on
[00:30:59] how to manage state in the client. They'd come from things that were kind of stateless, like
[00:31:05] back-end servers where MVC just works amazing.  And they're trying to apply the same patterns in the browser.
[00:31:11] So,
[00:31:12] So
[00:31:13] So yeah, I mean,
[00:31:14] This is fine. Knockout, I always talk about because it's like my favorite.  Um...
[00:31:20] Like Knockout.js and React are my favorite frameworks of all time.  And to be fair, neither of them are frameworks.  They're both just UI libraries.  I love this because the site feels like it's lost in time.  They're one of the first sites to have really nice interactive tutorials.
[00:31:33] you know?
[00:31:34] But if you want a very high-level idea of what were Knockout fits in, let me see if I can find documentation.
[00:31:42] They were this simple library where you created instances
[00:31:47] for your
[00:31:49] kind of views where you actually, it wasn't just a controller, but each view managed its own state.
[00:31:55] In those states, what you could do was you could
[00:32:00] make primitives to represent that state. And there's basically three types of primitives. The first type of primitive is
[00:32:07] was called and this has got a bunch of noise in it damn it i wish there's like a better example here
[00:32:12] Um,
[00:32:14] But the first kind of primitive is called unobservable.
[00:32:17] which is basically the same as useState,
[00:32:20] And then they had something called the computed, which is...
[00:32:22] If you're a React person, you might think this looks like use memo.  Then they had something, but you could also use computed to do side effects.  They didn't really distinguish the difference. I want to be clear, this is a completely different model, but essentially,
[00:32:36] If you've used Solid or React,
[00:32:38] Knockout from 2010 is going to look really
[00:32:41] similar because it is essentially they did their data binding differently they had like a whole
[00:32:48] declarative binding system, but essentially they'd use these primitives to compose behaviors, kind of like hooks.
[00:32:54] back in 2010.
[00:32:56] Um,
[00:32:57] So that's what knockout.js is.
[00:32:59] and where I was sitting.
[00:33:02] You know, but I mean this isn't, my point is,
[00:33:06] There was these guys, and then
[00:33:08] Not long after, you know,
[00:33:11] Ember.
[00:33:13] JS kind of came in
[00:33:15] And
[00:33:16] Who else was worth mentioning? I mean, there's so many frameworks from this time period, but let's put Elm in here more on a functional side a little bit later around 2012.
[00:33:27] Um...
[00:33:29] But...
[00:33:32] Yes.
[00:33:33] The data binding for Knockout was kind of similar, but it updated completely different. The way that Knockout, Angular I mentioned did these like
[00:33:41] long kind of digest loops that they went through and they checked everything. Knockout did something called fine-grained reactivity where they did pinpoint updates to the DOM. So the problem, you'd create the DOM tree and put these bindings in and as
[00:33:56] it initialized, Knockout would walk through your actual physical HTML, like actual DOM tree, find these attributes and then attach like,
[00:34:05] you can think of it like effects to each DOM element.
[00:34:09] so that when-- and they parse the signal read code,
[00:34:13] which was tied to an object. And you'd pass that object in, which is like your view model, like a component, and then it would
[00:34:20] it would...
[00:34:21] Basically tie it so that when you updated one
[00:34:24] Signal, it would just update the one effect in the DOM.  And if this sounds really similar to you,  this is where Solid.js and Vue actually came from.
[00:34:33] which is important to point out here. But that was much later.
[00:34:43] Yeah, I mean, the whole library framework thing is...
[00:34:46] is neither here nor there. But there's other ones. Knockout wasn't the only reactive library. I think there's CanJS and a little bit later on Reactive. We'd have to look through this and find
[00:34:58] Them but I wanted to kind of point out that like yeah, Elm is kind of here. Ember was like 2010 11 ish  um
[00:35:06] There's a lot of playing going around here.  Angular did dominate though.
[00:35:11] AngularJS was... Backbone was really popular initially, even though they came out almost the same time. Backbone really dominated everything from 2009, 2010, 2011. By 2011, Angular had just taken over 12, and basically it flipped to AngularJS being the...
[00:35:28] the kind of popularized way of doing it because it was more efficient. It was just, it was a natural thing. Knockout was something that
[00:35:35] was too magical for a lot of people. I feel like if you want positioning to understand it now,  Knockout was kind of like this felt at its time where people were just like,
[00:35:44] this is crazy magic.  I don't know what to do with this.  It's really cool.  But like,  it was just kind of like,
[00:35:51] Like, it just didn't make sense to people because it had all these like automatic updates and automatic dependency tracking, you know?
[00:35:57] Um,
[00:35:58] And even though it's a really simple mechanism that I've taught on my streams, you know, if you've watched my other content, for people in 2010, this was like as magical as you could get.
[00:36:11] So yeah, anyway, like we're kind of getting setting the stage here.  And the reason I want to set the stage here,  because you're already starting to see some of this stuff, like even let's,
[00:36:19] I mean...
[00:36:20] I guess we're going to see newer Ember if I look up Ember right now.  All right.
[00:36:23] Ember.
[00:36:24] JS. I want to point out that a lot of these frameworks haven't actually changed
[00:36:31] too much and probably looking at Ember is probably like maybe I'm like lying. It's like the worst example because Ember used like handlebars and
[00:36:37] Um...
[00:36:39] for its templates.
[00:36:40] Um...
[00:36:42] And yeah, I'm just not going to...
[00:36:44] Yeah, my luck when I'm like showing this stuff off. My point is before react,
[00:36:49] we had certain things and those certain things that we had,
[00:36:52] are
[00:36:53] we had declarative views.
[00:36:55] We had stateful rendering.
[00:36:57] we had classes. If you go back to Ember, we had like, like ember.createclass. I'm not going to probably be able to find
[00:37:05] Mm-hmm.
[00:37:05] like this kind of stuff because like obviously components have changed and  reacts had its influence everywhere, but,
[00:37:13] I wanted to point out that
[00:37:15] We have
[00:37:17] A lot of
[00:37:18] things that people associate it with, like react because like,
[00:37:21] React came
[00:37:23] uh,
[00:37:24] Okay, so I'm going to move this bar a little bit because I realize now I don't need it to be that wide.  But React came...
[00:37:32] Here?
[00:37:33] Let's see.
[00:37:34] Here's React.
[00:37:36] A lot of people kind of draw this line that goes from jQuery to React, and they basically ignore the tons and tons of innovation
[00:37:45] that was going on
[00:37:46] during this time period.
[00:37:48] If that makes any sense.
[00:37:51] Like...
[00:37:52] Like...
[00:37:53] Like, there's just...
[00:37:55] There was so much stuff happening here that...
[00:38:00] The people like there's way more libraries than I could put in here.  This was a time when people were realizing that single page apps were a real thing.  Like it was possible to build a whole app in the browser.  You have to go back in this time period.  We're still talking about rails backends and some.
[00:38:14] PHP and whatnot, suddenly somewhere around here, around the backbone, people are like, "Holy crap, I can just only use JavaScript," which is huge.
[00:38:22] But for some reason, this whole phase, as I showed you,  people had things that looked like components.  People had things that looked like hooks.  And not just knockout,
[00:38:35] you know, Backbone had a philosophy  where you can just like throw things out  and re-render them.  And like a lot of the concepts...
[00:38:43] even though the performance might have not been great and the rough edges,
[00:38:47] existed here, but they just weren't really refined.  The problem is we had the technology,  but we didn't have the best practices.
[00:38:53] And this is going to be very important to understand where I'm getting to with React.  Like, essentially...
[00:38:59] We had the means, but we just didn't know what to do.
[00:39:03] if that makes any sense.
[00:39:05] Right.
[00:39:07] So, yeah, everyone's following around so far.  Yeah, what's my thoughts on state management?  We're going to get there because the funniest thing is,
[00:39:13] Until you get to React,
[00:39:15] All of these solutions had opinions on state management because they were MBC or MBM. They all had the M. Actually, there's only one solution here that didn't have
[00:39:27] didn't provide the M.
[00:39:28] Funnily enough, and that was Knockout. Knockout
[00:39:32] said, "Okay, look, you provide your own models, but then you have to map them to these observable things." In a sense, you could say that state management, but it was a local state management.
[00:39:41] So it was like the view
[00:39:43] View models and components aren't the same, but Knockout essentially had local state
[00:39:49] and the view binding.  Basically, in my opinion, Knockout was the first just-a-view library.
[00:39:55] Um,
[00:39:56] So it's, but this is important to understand because React was not influenced by Knockout at all.
[00:40:02] *laughs*
[00:40:03] To be fair, React,
[00:40:05] kind of came in and they're like, yeah, we like functional stuff from Elm, which I haven't talked about at NAC.  And we like that redraw everything that Backbone is doing.
[00:40:14] And this is kind of where React came into this tree, because
[00:40:19] I haven't talked about Elm. Elm is crazy. It's a compiled...
[00:40:24] JavaScript language that's like...
[00:40:26] functional, functional, functional, pure.
[00:40:29] Elm actually has influence on solid, funnily enough, because they had signals originally. They got rid of them over time, they changed their model, but Elm actually had the concept of signals with that reactivity. So anyways, I'm going to just put Elm in here for now.
[00:40:45] My point is, up until this point,
[00:40:48] we had elements of what
[00:40:52] React was popularized for. And people, if you jump from jQuery to React, yeah, it's hell of a revolution. If you live through these years,
[00:41:00] You saw tons of churn.
[00:41:02] Tons of similarities and it's all just slight differences in evolutionary changes.
[00:41:07] So, yeah, I mean, some people are still talking about framework versus library in here. What do we got? React is a library that can be used as a framework. Fun.
[00:41:18] libraries provide developers with predefined functions in the classes to make the work easier and boost the development process. Yeah, I mean, I think calling
[00:41:25] - Yeah.
[00:41:26] React or any... I know what... See, I feel like library was the perfect marketing thing for React because they could come in and be like, look, we're lightweight. We don't try and put all these opinions on you. That being said...
[00:41:40] All...
[00:41:41] Like, we...
[00:41:43] All our single page app frameworks start with like a render call. We basically give control to the library framework, whatever.
[00:41:51] when we call render.
[00:41:53] And at that point, they call us, which is what most people define as frameworks.  So I think it was a useful distinction to talk about scope.  But in the purest sense, I'm not sure if React was ever actually a library.
[00:42:06] Not that I'm sure that that actually matters much.
[00:42:12] Right? So,
[00:42:13] Yeah, I mean, it's funny because there is a gray zone there.  Because for those of you who know Solid, you can use Solid like a library.
[00:42:23] if that makes sense, right?  Like we generally use render and we make a tree and we make an app and you generally use Solid like as a framework.  But because the reactivity of Solid could just be like,
[00:42:34] So a couple of things you put on the page, you know, and it's all independent and it's not like here.
[00:42:39] framework do it, you couldn't control it.  I would argue that you could say that the reactivity of solid could be considered a library, but I don't, generally speaking, all of these UI frameworks are frameworks from my perspective.
[00:42:54] But it's just different.  And I want to get there because Elm is, I don't know.  Have you, have you,
[00:43:04] you've all seen Elm before. I think Elm is one of those  things where, like, I hope people,  it's a delightful language for reliable web  applications. I hope people don't
[00:43:12] like lose this in time. Elm, ah, it's just...
[00:43:16] Can I find an example?
[00:43:18] It's
[00:43:20] Yeah, it's got their own language. I want...
[00:43:24] Oh, where is it?
[00:43:26] Yeah, this is all the text.  I want to see their-- I probably shouldn't divert too far into Elm.
[00:43:32] Because it's like its own language.  But like...
[00:43:35] see this idea, they have a model, an update and a view. And they basically said, "Look, here's our state.
[00:43:44] Here is our
[00:43:46] kind of like,
[00:43:47] update ability, which is kind of, if you notice, they're all written as like pure functions. They're like derivations. And then here's our view or side effects. This kind of comp
[00:43:55] functional split is very important,  and will come back up again in framework design.  But Alma was very cutting edge  for bringing these kind of functional ideas
[00:44:05] into the modern front-end vernacular, even though React  is the one who really carried it.
[00:44:19] Oh, this is a fun one.
[00:44:24] Mmm.
[00:44:27] *click*
[00:44:28] I wouldn't mind if someone asked me this question because, I mean, you could kind of think through it and talk it through.  I would probably mind if they thought there was a right answer to that question.  I think that would actually...
[00:44:41] Bug me more.
[00:44:42] Um...
[00:44:43] Yeah, Elm syntax is kind of crazy because it actually is very vertical, which is something you might not expect, right?  But...
[00:44:51] Um,
[00:44:54] - Okay.
[00:44:54] I...
[00:44:55] Yeah, it's very cool in its own sense.  But anyways, I'm trying to paint this picture here.  And I hope now that you're kind of seeing what's going on here.
[00:45:03] to where React kind of comes in here. So there was a lot going on. I think I've established this. So let's, I'm going to throw something up here just a second.
[00:45:17] enter react right that's that's where we're at right now we're going to talk  about react so what where did react come from react was created by jordan walk um
[00:45:26] I was actually a little bit disappointed because I've been having fun with this recently, even though it didn't show up.  I was like, this is the perfect stream for it.  I was going to like Google Jordan Walk.
[00:45:34] Right. And to show you guys, because one of the most
[00:45:38] or actually what was that who created
[00:45:41] React, yeah.
[00:45:44] Yeah, yeah. Okay, it still works. Yeah.
[00:45:46] So it tells you right away who created React, and it shows Jordan walk.  And then you look over here, and you're like...
[00:45:54] Is this Jordan Walk?
[00:45:55] It's actually Andrew Clark and Dan Abramoff. It's kind of funny. For the longest time,  it was just like a picture of Dan Abramoff.
[00:46:05] And I think sometimes there's some confusion there. Dan did not create React.
[00:46:09] He's an amazing steward and maintainer of where React is today, but it's just
[00:46:14] Jordan critted.
[00:46:16] react and
[00:46:18] Essentially, uh,
[00:46:21] it was not his first foray into trying to create a JavaScript framework.
[00:46:26] Jordan had lots of ideas and he was
[00:46:31] he had a vision
[00:46:33] for where the web could go.  And I think one of the things that people don't realize is,
[00:46:39] A lot of the developers who were building stuff between 2009 and 2012 developed in the pre-single page app web. They had experience, they understood that it wasn't
[00:46:48] just simply a win to do single-page apps.  They understand the trade-offs.  So they're always...
[00:46:53] considering how
[00:46:55] - Yeah.
[00:46:56] their paradigm could expand. And Jordan was actually no different.
[00:47:00] If you want to see something by Jordan that predates React, just to give you an idea of what he was working on before he did React, he actually did something called Fax.js.
[00:47:08] I love looking at this.  Look,  hasn't been touched in a,  like,  Oh,  I guess there's someone did something fixed to read me five years ago,  but like it's,  this is 11 years old.  Um,
[00:47:15] It's 113 commits.
[00:47:17] I don't know where the...
[00:47:19] where the start is but this shows you that in 2011 and 2012 Jordan was working on this not react okay
[00:47:28] So React, probably somewhere in 2012, is where he began his work here.  He kind of moved on from his original work
[00:47:36] framework that he had and
[00:47:38] Let's see here.
[00:47:40] Um...
[00:47:42] and
[00:47:43] he tells everyone that they should just use React  because it's much better in every way.  But I want to just kind of point out here  about what he was trying to accomplish with Facts.js.  Because this puts you in perspective.  Because sometimes when I pull up Marco  and show people that Marco was doing partial hydration in islands  and out-of-order streaming and all this stuff,  and they were doing it in 2000,  it didn't get released in 2014,  but they were working on that stuff in 2012.  I want you to understand that
[00:48:07] you know, Jordan working, you know, Facebook and stuff like we're thinking about
[00:48:12] stuff that we're only releasing into the wild now. Look, seamless client server rendering.
[00:48:17] So this was...
[00:48:18] Jordan's 2011 framework, he was worried about isomorphic rendering.
[00:48:23] He wants React, he wants to use automatically update on state change, no bindings necessary, so no data binding. This is still kind of like React.  Performant, obviously, and structural high level components functionally
[00:48:32] define declarative use. This all sounds great and this is all before React so
[00:48:36] Okay.
[00:48:37] And
[00:48:39] Yeah, show us an example and
[00:48:41] Oh, interesting.
[00:48:43] I think we see JSX as a predecessor here, or at least Hyperscript.  He's using functions to define the view.  But what I wanted to kind of point out here is
[00:48:53] Yeah.
[00:48:54] I guess these are kind of like components and it returns a div. There's similarities here to React, but the reason he called it fax.js
[00:49:00] to my understanding was he had this idea that the app could
[00:49:04] render on the server
[00:49:06] and then be sent across the wire
[00:49:08] and then continue in the browser. That was
[00:49:11] That was like...
[00:49:13] his goal here, right? Kind of like a fax machine, like the idea that you could like,
[00:49:18] start in one location and pick it up in another location.
[00:49:21] And the way he saw to do that was using a diff engine.  Essentially,  he was picturing a world where you could have the server send,
[00:49:29] Updates.
[00:49:31] essentially like send like
[00:49:32] for
[00:49:33] pages maybe even, and then the client would diff the changes. So you could keep them going to the server and diff them and essentially
[00:49:40] only apply the updates on the diff. So he basically designed a diff engine that worked for cross-server browser. And if that sounds familiar to you, I am describing
[00:49:50] React server components. And this is
[00:49:54] 2011.
[00:49:56] Okay, so I want to put it out there to you all that
[00:50:02] that there is...
[00:50:04] some sort of... like a lot of these ideas have been floating around
[00:50:10] forever and even influenced like where
[00:50:14] Jordan saw React might get one day.
[00:50:17] He, you know, his original thought was, you know, this is how I could do something.  And because think about what you had to solve a scale for a company like Meta or like eBay, in case of Marco, like they had these like.
[00:50:31] Uh, I, the eBay was Java and I think, uh,
[00:50:34] Was it PHP over Facebook back then? But they had these classic backends and if JavaScript was going to get a toehold in here, it needed to be able to properly handle server rendering and actually be able to deliver the same level of experience. So...
[00:50:50] This was very much on people's minds.
[00:50:53] And...
[00:50:55] Essentially, I just wanted to point this out here because this is where we enter into this conversation.
[00:51:03] because Jordan
[00:51:05] decided he'd done this. I don't know the whole story behind this, but he figured out, he started working on a new framework. And I think it was him and I'm trying to remember who he kind of co-wrote it with. But this was kind of the influence and inspiration that led to him working on the framework. And
[00:51:22] Um...
[00:51:24] I actually got a little clip here I want to show that.  It's nothing to do with Jordan.
[00:51:28] Jesus Christ.
[00:51:30] But...
[00:51:31] Oh.
[00:51:32] But I want to show you kind of the perspective
[00:51:35] of React in hindsight. This is better than I could say it, so I'm just going to grab this Rich Harris talk, and you guys just chill on this for a second, because this is probably...
[00:51:44] my best take on how
[00:51:47] React entered...
[00:51:48] our world. So yeah, let's just do this for a second, okay?
[00:51:59] Thank you.
[00:52:04] Thank you.
[00:52:05] Thank you.
[00:52:07] - Thank you.
[00:52:08] It was.
[00:52:10] So
[00:52:12] -
[00:52:14] Thank you.
[00:52:15] Thank you.
[00:52:23] Yes.
[00:52:24] Thank you.
[00:52:25] Oh really? The audio is not coming in?
[00:52:28] Oh, the volume's too low.
[00:52:32] Is this better?
[00:52:33] Sorry.
[00:52:35] This is important.
[00:52:41] So still can't hear, eh?
[00:52:43] Oh, that's too bad.
[00:52:46] I assumed that I could get this audio device. Oh man, that's that's gonna that's gonna put some fun fun on us here  um
[00:52:53] *ding*
[00:52:54] Hmm.
[00:52:57] Gotcha, okay.  Well, it's good we hit this now, so we can figure this out.
[00:53:04] Thank you.
[00:53:06] Thank you.
[00:53:07] Thank you.
[00:53:08] Thank you.
[00:53:08] Thank you.
[00:53:10] I'll give you the link, but I've got too many video clips for us to resort to this. So give me two seconds.
[00:53:16] What I'm gonna actually do
[00:53:18] Thank you.
[00:53:19] Um,
[00:53:20] is...
[00:53:23] I'm gonna I'm gonna do something here with the sound. Give me give me two seconds.
[00:53:27] Thank you.
[00:53:37] It's funny, I didn't realize it was actually playing through my speakers is how you all heard the sound in the past.
[00:53:42] Let me just try this for a second.
[00:53:46] Thank you.
[00:53:51] Thank you.
[00:53:52] Thank you.
[00:53:53] Thank you.
[00:53:55] Can you hear it now?
[00:53:57] Thank you.
[00:53:59] Did that work?
[00:54:03] Thank you.
[00:54:06] Did the...
[00:54:10] Thank you.
[00:54:13] OK, yeah, OK, one more thing. I know exactly what I need to do. I'm sorry.
[00:54:19] This is going to be fun.
[00:54:22] Thank you.
[00:54:22] Thank you.
[00:54:23] Okay, I got it, I got it, I got it.
[00:54:27] Thank you.
[00:54:31] Um...
[00:54:38] Thank you.
[00:54:39] Thank you.
[00:54:43] All right.
[00:54:46] Thank you.
[00:54:47] There's a lot of people.
[00:54:49] I just want to present it.
[00:54:51] said.
[00:54:52] Thank you.
[00:54:54] No, still no.
[00:54:56] Oh man, that's funny.
[00:55:01] I've shown videos on stream so many times before.
[00:55:05] Um,
[00:55:07] And I can't.
[00:55:08] It...
[00:55:09] It always...
[00:55:11] worked. So that's that's pretty that's pretty interesting here.
[00:55:15] I'm going to try something which is probably terrible, but I'm going to just try straight up using the MacBook.
[00:55:24] Pro speakers and
[00:55:26] built in just
[00:55:31] Right.
[00:55:32] Like, this shouldn't be using my headphones anymore.
[00:55:36] Just think of you.
[00:55:37] Oh, yeah, it's still coming through my headphones. That's hilarious.
[00:55:40] Thank you.
[00:55:41] Bye.
[00:55:43] Thank you.
[00:55:44] Oh, interesting. Okay, I got it. I got it. I got it.
[00:55:48] Thank you.
[00:55:49] Thank you.
[00:55:53] Thank you.
[00:55:55] Thank you.
[00:55:56] Yeah, yeah, yeah, yeah, yeah, yeah. Okay. Yeah. Okay. That's funny. Okay. It's, it's, it's act. Even though I changed what StreamYard's using, it didn't actually change the audio device that, uh,
[00:56:06] Um...
[00:56:08] that YouTube's using here.
[00:56:10] which is funny because I changed StreamYard, but I actually have to get the browser
[00:56:19] to do this. That's that's that's annoying.
[00:56:22] And...
[00:56:27] not going to help us a bunch, is it?  'Cause I'm looking for a setting here, but it feels like,
[00:56:35] Yeah.
[00:56:36] I almost have to reset the browser.
[00:56:40] Yeah, sorry. I just, sorry about the technical stuff. We will figure this out.
[00:56:46] Yeah, it's not enough to reload the page. I actually, sadly enough,
[00:56:50] have to probably reload the
[00:56:52] browser.
[00:56:53] Unless unless there's like a
[00:56:55] place that I can--
[00:56:59] Yeah.
[00:57:00] -
[00:57:02] But I can't...
[00:57:05] Yeah, okay. Yeah, let's...
[00:57:07] Yeah, let's see that.
[00:57:10] Firefox.
[00:57:11] Yeah.
[00:57:13] Thank you.
[00:57:15] Thank you.
[00:57:17] Thank you.
[00:57:20] Thank you.
[00:57:23] Thank you.
[00:57:29] Oh, I see. Yeah, it's because the system. Yeah, yeah, yeah. Okay, so this is a fun thing. It's because the system is like,
[00:57:36] it's like I'm using this.
[00:57:39] But what I wanted to do is a system actually to to do this right.
[00:57:45] Thank you.
[00:57:47] Now,
[00:57:48] if I change the output and I change the input on the system,
[00:57:52] then that should be enough. All right. Sorry, this is
[00:57:57] And is that enough to fix?
[00:57:59] Google Chrome.
[00:58:03] - The why is this? - It is, okay.  Sorry about that.  So now we have something that will work.
[00:58:10] Yeah, okay, cool. And what I can do is I can
[00:58:13] I should be able, if I'm smart enough here, StreamYard should still be able to
[00:58:18] essentially
[00:58:22] I like I'm still coming in through my mic. I can tell.
[00:58:25] And I can still hear
[00:58:27] I can still hear stuff like my own monitors. So I think, I think we're good now. Okay.
[00:58:32] So,
[00:58:32] Thank you all for your patience.
[00:58:34] And
[00:58:35] Let's...
[00:58:36] Let's get this going. All right. So I want to, I think Rich Harris gives the best introduction to
[00:58:42] to, to,
[00:58:43] like the feeling when React came in. Okay. The wisest of the JavaScript elders came down from  the mountain and said, I have created jQuery.
[00:58:52] And the villagers said...
[00:58:54] "JQuery? The actor from Zombievers?" And Elder Rezik, for it was he, said, "No, it is not a man. It is magic. With these spells we shall tame the capricious browser gods and bend them to our will."
[00:59:06] And the villagers rejoiced, for the browser gods were indeed capricious and cruel, and  had visited much misery upon their lands.
[00:59:13] And they replowed their fields with the new magic, and at the time of the next code harvest,
[00:59:17] all agreed that the fruits of their labors tasted sweet,
[00:59:20] AN AJAXY.
[00:59:22] And there were conferences and t-shirts and other assorted merchandise, and that
[00:59:26] It was the end of the first JavaScript era.
[00:59:30] The tide came and went.
[00:59:32] The moon rose and fell. Years passed, and while jQuery was still the dominant religion, there were some who grew fearful that it was not powerful enough, the elaborate designs of the modern age.
[00:59:42] Then one day a traveller came from the western lands of Zuckerberg and said, "Hear me, for I bring a message of great import: you're all doing it wrong."
[00:59:50] Thank you.
[00:59:54] These primitive incantations do not befit our modern age of science and technology
[00:59:59] look at these wretched
[01:00:00] structures you have built. I would not step inside for fear of my safety.
[01:00:03] "In Zuckerbergia, we build not these mud huts, but magnificent towers that reach the very heavens
[01:00:08] And we do it not with magic, but with machines.  Come, let me show you.
[01:00:13] And the villagers looked upon the machines, and they liked not what they saw.
[01:00:19] as a heretic.
[01:00:21] And yet some felt these machines could perhaps help them meet their own ambitions, and the heretics grew in number until the heresy became the new orthodoxy and the land was covered in machines.
[01:00:32] It was the second era of JavaScript.
[01:00:35] I'm here today to talk about the third area, the chapter that's being written right now.  My name is...  All right, so...
[01:00:42] Yeah, okay. Hopefully you guys are all still here with me. That was... sorry.
[01:00:54] Little bit of a volume boost there. Okay, so
[01:00:57] - Thank you.
[01:01:00] Yeah, he did skip the lot in the middle. And I think that was my point, right, when I was talking about this. That's where the perspective is. And I just wanted to kind of...
[01:01:11] put that out there so you can kind of see,
[01:01:14] You know, but he did bring up a lot of good points. When...
[01:01:18] React came on the scene. It presented a lot of really powerful ideas. Um,
[01:01:22] you know,
[01:01:23] JSX
[01:01:25] And the important part there is that I'm sharing the separation of concerns.
[01:01:30] the modern component model
[01:01:31] Um,
[01:01:32] formalize the idea of unidirectional flow
[01:01:35] and most importantly, look at a framework as a philosophy.  And I wanna touch on each one of those here,  to kind of really get a perspective  of what it was like in 2013 and '14.
[01:01:45] Another great talk from this point was from Pete Hunt.
[01:01:49] But when you start to build abstractions on top of
[01:01:53] You know, HTML.
[01:01:55] you start to have to invent a lot of things in order to get
[01:01:58] to the level of expressiveness you need  to build real applications.
[01:02:02] So now I'm going to pick on Angular.
[01:02:04] And I just pulled this quote out from the Angular docs, and I've highlighted
[01:02:08] every concept that they've created that
[01:02:10] I'm not...
[01:02:11] I'm either not really sure what it means as a new user of Angular, or it sort of exists
[01:02:15] JavaScript
[01:02:16] Um...
[01:02:17] And it's based on the idea that
[01:02:19] They want to augment HTML.
[01:02:21] to support two-way data binding.
[01:02:23] And in order to do that, you have to rethink the idea of skills.
[01:02:25] And if you rethink the idea of scopes, you have to rethink the idea
[01:02:28] of --
[01:02:29] composed of
[01:02:30] and modularity and you start building directives
[01:02:33] and all this other stuff.
[01:02:38] But I think the framework cannot know how to separate your concerns for you.
[01:02:43] It should only provide
[01:02:45] Powerful and expressive tools.
[01:02:47] to let you do it.
[01:02:50] What I mean by that is that a lot of frameworks force you into this MVC style of development.
[01:02:57] And MDC was great.
[01:02:58] However, your controllers tend to get
[01:03:00] really fat, or maybe your models get
[01:03:02] if that's your style of building
[01:03:03] or maybe even your views.
[01:03:04] Alright, sorry. Yeah, this video was a little bit quieter. But hopefully you picked up some of this. And he talked to most of the points, but...
[01:03:14] Essentially,
[01:03:16] This was kind of the first presentation where, like, they really had to kind of convince people that this was...
[01:03:24] it was important to be able to, you know, escape from, uh,
[01:03:29] kind of this MVC pattern, right? Um, so this, this was one of the, the, one of the kind of pieces to  that. Um,
[01:03:37] I think the other one that came out around the same time that I want to show here is from Tom.
[01:03:45] This is where he kind of explained...
[01:03:48] What I consider like...
[01:03:51] What the re-render aspect of React?
[01:03:55] Let me...
[01:03:56] Oh, interesting. This one didn't want to open on the same browser window. Let me...
[01:04:00] Get that one out of the way.
[01:04:02] Um...
[01:04:03] Let's get here.
[01:04:06] And yeah, I will also link some of these things, but let's see if we can
[01:04:11] Let's see if this works for us.  - The simplest way, conceptually,
[01:04:15] that we've found to build views to build this piece.
[01:04:18] is to just basically avoid mutations.
[01:04:21] all together.
[01:04:22] And you're thinking to yourself,
[01:04:25] You need to update things, right?
[01:04:27] But...
[01:04:28] Instead, you know,
[01:04:29] What we found is that if you could just
[01:04:32] Anytime your data changes,
[01:04:33] If we could just
[01:04:34] blow away our view and just re-render the thing from scratch,
[01:04:38] Like that would be so much easier.
[01:04:41] It would make your application
[01:04:42] The structure of your application and the amount of code that you have to write
[01:04:45] It just makes it so much simpler, right?
[01:04:48] Because you can describe what your view looks like and then never worry about updating it.
[01:04:51] It's just like, okay, when my data changes, I'll just blow it away and re-render it.
[01:04:57] But like, does that work?
[01:04:59] Huh?
[01:04:59] In the browser, it seems like that would be prohibitively expensive, right?  That we all know that Don is slow and
[01:05:04] I feel like that's gonna be like really memory expensive
[01:05:08] It's not going to be slow.
[01:05:10] And additionally, if the user is typing into a text box,
[01:05:13] And then some comment changes where you run that thing, and you try and blow that away. And when you render it's like,
[01:05:18] You're going to lose their state.
[01:05:19] Maybe there's some internal state that you're not even showing, you're not even displaying to the user.
[01:05:24] But you're going to blow all that away, right?
[01:05:26] So,
[01:05:28] Conceptually, we still want this model, though.
[01:05:30] From a developer standpoint, we want to be able to say,  okay, anytime anything changes,
[01:05:35] we're just gonna start over.  We're just gonna blow everything away  and re-render from scratch.
[01:05:39] But we want to do it in a way that's actually performant and actually provides a good user experience.
[01:05:44] right?
[01:05:45] So this is--  Yeah.  So I mean, this pretty much--  I'm going to put a couple of links here.  Here's the Pete Hunt talk, and this is the Tom
[01:05:54] a Chino talk.
[01:05:57] I just, I wanted to put these ones in because I'm just kind of like to give you a little bit of perspective here, because a lot of people come into WebDev more recently have seen stuff that Dan's done or that, you know, Rich Harris has done amazing speakers on these topics.  But like the quality of this video is amazing.
[01:06:14] pretty poor.  That's why I was looking at what we were going on.  Like, can we get better than 360p?  And we can't.  It's kind of lost in history,  but these were...
[01:06:23] Just as groundbreaking in terms of thinking of where we we get today. I mean people pretty used to these concepts by now  but
[01:06:31] This is
[01:06:33] actually like
[01:06:35] This was a big deal. I just said that technology was there, but you have to understand we didn't know how to use it.
[01:06:42] Um...
[01:06:43] And I got one more from this chain before we kind of break off and kind of dig into this and talk about this a bit.  And that's my favorite, honestly, from...
[01:06:54] Jing Chen.  So let's talk about some of the problems behind NBC.
[01:07:00] that make it not scale.
[01:07:01] and how Flux proposes
[01:07:02] solve some of those problems.
[01:07:04] Well, NBC works pretty well.
[01:07:06] for
[01:07:07] Small applications.
[01:07:08] Everything has its own particular role to play.
[01:07:11] The problem is that it doesn't make room for new features.
[01:07:15] Let's look at what happens to this diagram when we add a lot of models.
[01:07:18] That won me add a lot of views.
[01:07:22] There's just an explosion of arrows.
[01:07:24] And if you just look at these arrows,
[01:07:26] Can you tell if there's an infinite loop here?
[01:07:29] where you know
[01:07:30] the model triggers something in the view,  and the view triggers something in a different model,
[01:07:33] If it goes in a cycle,
[01:07:35] It's really hard to tell just by looking at this.
[01:07:37] And that's with all of your relationships drawn out.
[01:07:40] If you were to look at that in code and try to figure out, where do I have an infinite loop somewhere in here that's causing my app to just go
[01:07:47] constant loops
[01:07:48] really difficult.
[01:07:50] I was drawing a very similar diagram while I was trying to figure out the architecture of one of our more complicated interfaces
[01:07:55] Looks very much like this.
[01:07:57] And it was so complicated that I ended up
[01:07:59] Drawing numbers.
[01:08:00] instead of arrows.
[01:08:02] to represent the relationships between them.  That's how dense the arrows were getting.
[01:08:07] So we want to do away with all of this.
[01:08:09] What we proposed instead,
[01:08:11] It's a thing called flex.
[01:08:12] Single directional data flow
[01:08:14] Um,
[01:08:15] And that avoids all of the double arrows that go in both directions that make it really hard to understand the
[01:08:22] What we have is an action coming into the system
[01:08:25] a dispatcher that sort of acts as the traffic controller for the whole thing,
[01:08:28] the store, which is the data layer that
[01:08:31] basically updates whenever you get a new action.
[01:08:33] And then the views revender whenever the stores say something has changed.
[01:08:37] And then from the view side,
[01:08:39] They can throw another action back into
[01:08:42] The dispatcher here is the main
[01:08:44] the main piece that enforces that there's no cascading effects.
[01:08:48] Once an action goes into the store,
[01:08:50] You can't put another one in.
[01:08:52] So
[01:08:53] The stores are completely finished processing it.
[01:08:55] That's pretty abstract though.
[01:08:57] Let's work our way back.
[01:08:58] But yeah, I mean, I hope I've emphasized how this was a real problem. People didn't know how to structure apps, right? NBC is an architecture.
[01:09:09] Um...
[01:09:10] You know, and...
[01:09:12] One that kind of was inherently built from a world where
[01:09:15] our controllers weren't stateful.
[01:09:18] Right.
[01:09:19] So like this, to be fair, I said it was important to recognize the stuff in the middle from a technology standpoint, but React did come in with a philosophy.  And I think...
[01:09:30] I think this is really important to get because I said it started in the  sense from Jordan's facsimile thing that I showed you earlier.  Like Jordan,  Jordan was completely on it.  Like he's later on this talk.  It's funny.  They're doing like an outro here and he's,
[01:09:43] You know, just check this clip out.  And your drawing gets updated.
[01:09:48] And then what Jordan did is he's like...
[01:09:51] All right, I'm gonna take the exact same code that renders an action button as divs and spans in the document,
[01:09:58] And I'm going to turn it into a native component
[01:10:01] So we use titanium.js.
[01:10:03] to basically take this representation of JavaScript, the same code that we would run,
[01:10:08] in the browser,
[01:10:09] and turn that into rendered native components
[01:10:13] using JavaScript core bread.
[01:10:15] um
[01:10:16] Which is pretty nuts.  We don't talk about that too widely yet,  because we haven't done a ton of stuff yet.
[01:10:21] This talk happened July 8, 2013.
[01:10:26] and they're describing React Native.
[01:10:29] So, as I said, there's incredible vision behind this stuff. I want everyone to stop and appreciate it. From Jordan basically describing server components back in 2011,
[01:10:42] to like this talk up here where they actually slip in that they essentially were working on something like React Native back in 2013.  This is before people even liked React.  If you looked at...
[01:10:55] Rich's talk at that one point in it, he was like, you know, the people sent the Zuckerbergian away because, you know, it was heresy.
[01:11:05] So I do want to kind of point out
[01:11:09] that
[01:11:10] This is all part of
[01:11:13] of
[01:11:14] a mentality built around
[01:11:18] diffing, essentially. Like, this idea that you can
[01:11:22] build something and throw it away over and over again.
[01:11:29] Right.
[01:11:30] So, yeah, like there are hints throughout React's history about where things would go.  And this is just in the first two years when they were still trying to get people in on the idea.
[01:11:41] Right.
[01:11:43] So as I said, we already talked about JSX separation concerns, modern component model,
[01:11:48] Formalized unit directional flow.
[01:11:50] But for me,
[01:11:51] Ultimately,
[01:11:53] The real thing...
[01:11:55] was the philosophy and
[01:11:58] And I want to pull up this article, this little-known article from Dan Abramoff.  He wrote this in January 2015.  I don't even think he was part of the React team at this point, or maybe he just joined on.  And I want to kind of throw this out there because...
[01:12:15] He never finishes the article.  At the end, he's like, we'll examine in the next articles to be continued.  And he never...
[01:12:21] finish this article.
[01:12:23] Um,
[01:12:24] and it's kind of funny because like,
[01:12:29] He was like...
[01:12:31] Pfft.
[01:12:32] Let's just read it from this for just a minute, because I think this is something to reflect on, right?
[01:12:38] "I've seen React misunderstood by smart people more often than any other JavaScript library. React is packed with ideas that were radical at the time of its introduction. This introduced an air controversy that hasn't quite dissolved. After a year of using React observing people learning it, I can say that the best parts of React are not the ones that made it famous. It's not about the virtual DOM. It's not about the custom event system or server rendering or JSX. Rather, they are a few boring, old and powerful ideas." He called them "old."
[01:13:05] He called those ideas old.  Okay.
[01:13:09] Using other people's code is like surfing, you control and surrender. You've got to trust the wave to carry you, but stop paying attention, the first abstraction leak will throw you under the water.
[01:13:17] When we see something that is new both technologically and philosophically, we tend to focus on technology part because we need to tame the magic first.
[01:13:24] We've had enough black boxes in our careers.  We want to understand, if not the full picture,  then at least up to the level where we can make a snarky comment  that is also correct to some degree.
[01:13:33] How is more viral than why at this point?
[01:13:38] Yeah, so here's my secret, right?
[01:13:47] He goes on to talk about a bit more, but he's like,  React's true strengths are composition,  unidirectional data flow, freedom from DSLs,  explicit mutation,
[01:13:57] and static mental model.
[01:14:00] This is how he summarized it. And I'm going to agree with Dan
[01:14:05] I'm agreeing here with 2015, Dan, in fact, that
[01:14:09] This is what's important. I wanted to show, you know, these pieces of the philosophy so people could understand it, right? Like, composition is king.
[01:14:21] Unidirectional data flow is how we wrangle in our programs.
[01:14:24] Freedom from DSLs, I'm gonna say that he's
[01:14:28] This is a little bit...
[01:14:29] Thank you.
[01:14:30] Strong I don't I think JSX is a DSL so I don't I
[01:14:34] I...
[01:14:36] I think restraining the DSL is powerful, but it is a DSL nonetheless.
[01:14:41] But...
[01:14:43] Moving on explicit mutation and static mental model these
[01:14:48] help people reason about what's going on in your app.
[01:14:52] And this is what React brought to the world. As I said, the technology pieces existed. They, as Dan called them, old and boring. But...
[01:15:01] Mm-hmm.
[01:15:02] Being able to codify what's valuable is something that React did and did very, very well.
[01:15:10] Yeah, so DSLs, what he's talking about is the template language. Remember in that talk with Pete Hunt, I don't know if you guys all heard it, he was highlighting all the words that Angular introduced.
[01:15:20] to describe the language and that you needed to know  to even get some data bound.  The ironic part is if you're talking about language,  domain specific language and not templates,  React has actually introduced a lot of it  since where it started.
[01:15:32] You know, some of today's stream is going to be seeing that whole thing where the hero lives long enough to become the villain.
[01:15:41] That's what's a bit have been going on with React.
[01:15:46] Right.  Um,
[01:15:48] Thank you.
[01:15:52] So I think this is really...
[01:15:55] key to understand.
[01:15:57] If you're coming out of that introduction,
[01:16:00] some people were bought into what React was saying, some people didn't at first, but because...
[01:16:06] of
[01:16:07] that fundamental philosophy
[01:16:09] React was able to take over people
[01:16:12] it was a subtle thing.  They would try it and be like,  Oh,  this actually isn't bad.  And then it would grow on them.  And it was the way they were able to build on top of it,  you know,  take in react case,  the,  the,
[01:16:23] the components of
[01:16:24] were these primitives that they could build on top of.
[01:16:27] um
[01:16:28] Mm-hmm.
[01:16:29] And...
[01:16:30] That was enough to get people up and started. Within two years, by 2015, the narrative around React had completely changed.
[01:16:40] It wasn't...  The early years, people were like,  ugh, JSX and whatnot.  But if you go...
[01:16:46] you know, forward a couple of years,
[01:16:49] things changed so much.
[01:16:51] And
[01:16:53] Suddenly, the virtual DOM went from being like a...
[01:16:57] Oh, you know, a novel trick to being like, well, I mean, you've seen the memes about it for probably still to date.
[01:17:07] like
[01:17:08] you know, V DOM is faster than the real DOM, you know, have you ever, let me see if I can find one V DOM.
[01:17:14] real dom.
[01:17:17] Like,
[01:17:18] There's enough memes to fill a book, but this is what started out of this, right?
[01:17:26] Um...
[01:17:27] And
[01:17:29] And part of this
[01:17:32] kind of came about
[01:17:33] Because...
[01:17:34] Like, the model was great, the patterns were great, and apparently...
[01:17:39] The performance was great.
[01:17:41] So I want to talk about that for a little bit and do a tangent because...
[01:17:46] This
[01:17:47] Around 2015-16, once React started getting adopted, we started seeing like...
[01:17:54] kind of like a narrative develop around
[01:17:58] like being performant essentially.  And,
[01:18:02] Um,
[01:18:03] I think it's kind of
[01:18:05] interesting because
[01:18:08] The VDOM wasn't necessarily
[01:18:10] that performance. If you listen to more of those talks I showed you at the beginning,
[01:18:16] Pete and Tom were just like, look, we realized you'd think that blowing everything away would be really bad.
[01:18:21] you know, and really,
[01:18:22] and we couldn't do that, but it turned out it was fine. It was as fast as Angular.
[01:18:27] It's okay, you know?
[01:18:29] But...
[01:18:30] What ended up happening is somewhere in the middle,
[01:18:34] we decided
[01:18:35] that react
[01:18:36] was even faster.
[01:18:39] And
[01:18:40] I think we got to give credit where that's due to...
[01:18:43] Our man, Ryan Florence...
[01:18:45] Um,
[01:18:47] who
[01:18:48] Some of you know it's a creative react router.
[01:18:50] also created a remix and arguably one of the best public speakers,  especially on topics related to React,
[01:18:56] ever.
[01:18:57] his talks are all...
[01:18:58] absolutely amazing. And I'm going to, I wanted to pull this one out because
[01:19:03] This is the beginning of that moment where people started going...
[01:19:08] really highlighting
[01:19:09] this whole performance thing, right?
[01:19:14] So this is all the same app.
[01:19:16] And we actually have--
[01:19:18] a real version of this thing
[01:19:21] at work,
[01:19:23] And it monitors all of our databases.
[01:19:26] well, all of our database clusters.
[01:19:29] And I did it in each one of the popular frameworks.
[01:19:35] Ember was the original one that we had and we started running into some performance issues.
[01:19:40] Actually, the memory
[01:19:42] just kept climbing and climbing and climbing, so we put a meta refresh on the HTML for every minute.
[01:19:48] Otherwise we'd hit the V8 1.48 whatever gigabyte limit and then
[01:19:54] Yeah, it would die.  All right, so you can see as I move my mouse around in this  version, that pop up-- this is ugly.  It's just funny demo code.  But you can see that every now and then that stops.
[01:20:04] My cursor gets way far away from the pop-up.
[01:20:07] Angular does a great job.
[01:20:08] And then React over here is also doing a great job.
[01:20:11] Down in the bottom corner, you can see the memory usage of each of these apps.
[01:20:16] um,
[01:20:17] and
[01:20:18] uh,
[01:20:20] Stanley Stewart, I don't know if any of you know him, he used to be a co-worker of mine, one of my favorite people.
[01:20:24] He identified a memory leak in Ember, which apparently he fixed last night.
[01:20:28] But I didn't get his code to fix it.  So we'll see this number just keep climbing over here.
[01:20:32] Um,
[01:20:33] So this is me.
[01:20:35] Let's pump it up a little bit. Let's make it do something more.
[01:20:41] 25 rows is not a big deal.
[01:20:44] 50s for the inches of time, let's go straight to 100 rows of data.
[01:20:53] We'll let Amber think about it. There we go.
[01:20:55] um so now we're already at 100 megabytes down here
[01:20:58] And you see I'm not getting any pop-ups as I move my mouse around.
[01:21:03] Um...
[01:21:04] We have 100 database clusters now in our real app.
[01:21:07] So this is not like some contrived example, that's where we're at.
[01:21:11] And it is useful to see them all.
[01:21:13] Angular does a great job still.  It can scroll pretty well.
[01:21:17] You can see the scrolling sort of jumps, like it gets stuck.
[01:21:20] occasionally when it hits a digest loop, I think.
[01:21:23] And then our React again does
[01:21:25] great job we don't get any jumpiness when we scroll
[01:21:28] and the pop-ups are very fast.
[01:21:30] Um...
[01:21:31] Let's just see how different these...
[01:21:33] things really are.
[01:21:35] So as soon as it's done chunking new data and rendering,
[01:21:38] I'm just going to do it again.
[01:21:47] .
[01:21:50] .
[01:21:57] I mean it's...
[01:21:59] Yeah, it's coming. Now here's the really impressive part. So Angular's still doing a pretty good job here, and this is a contrived example.
[01:22:06] But as I try to scroll
[01:22:09] It's not really working very well and the pop-ups aren't
[01:22:12] showing up
[01:22:13] But man, React is still just like,
[01:22:17] It's like nothing is even happening over here.
[01:22:20] And you also notice as I hover over this, my pop-up
[01:22:25] it's the stuff is changing inside
[01:22:27] But over here we get like,
[01:22:29] shows up and then it disappears and now it's never back again
[01:22:34] So,
[01:22:35] All this demo is basically saying is, you know what?
[01:22:40] The human mind not be able to process 2000 things on a page at once.
[01:22:44] But...
[01:22:45] If your app wants to do that, it can.
[01:22:47] Right. So...
[01:22:50] Yeah, this demo was a big deal at its time.
[01:22:55] And it kind of cemented this narrative that virtual DOM was faster than real DOM.
[01:23:04] Yeah.
[01:23:05] "This presentation makes the Ember team to completely change the renderer." Yeah. People understand how huge this was. This was like, people are just like, "Ugh." You know? And honestly, the thing about this, and I'm going to drop this link in the chat, because again, this is amazing talk.
[01:23:22] If you go to the end of the talk,
[01:23:24] and I suggest you do if you haven't seen it at all.  Ryan Florence, and this is 2015,  it describes how he's going to make Remix  five or six years later.  This talk actually has a whole section  where he shows how to do progressive enhancement  with server rendering.  So again,
[01:23:41] I just want to talk about, you know, and draw attention to the long-term vision and direction
[01:23:48] even at this point. Basically,
[01:23:51] all the secrets of remix are kind of on display in this 2015 talk. And
[01:24:00] The thing is, the benchmark...
[01:24:04] I love this one because this benchmark is actually still here today.
[01:24:07] You can go and find it and it's on GitHub here and
[01:24:13] Yeah, it's...
[01:24:13] Let me drop that in the chat for you all, in case you want to check it out yourself. It runs on your computer.
[01:24:19] A lot of some of the older benchmarks did.
[01:24:22] It looks like I put a dash in front of it. Sorry, but, um,
[01:24:26] I want to show this one because it hasn't been updated for ages, but
[01:24:30] This benchmark...
[01:24:32] is real, right?
[01:24:35] um,
[01:24:36] I don't know if we can find old Ember, but if we take React...
[01:24:41] Obviously things are much faster on computers today that no one's like worrying about this kind of stuff anymore.  You can't see this closely, but React is getting about one...
[01:24:48] 30...
[01:24:50] uh,
[01:24:51] 130 frames per second or whatever on my computer and I can crank it up I guess and it
[01:24:57] It doesn't change it too much.
[01:24:59] But...
[01:25:01] If I
[01:25:02] If I take something,
[01:25:03] you know, naively implemented in something like Knockout. Remember,  Knockout was my favorite framework. Let's try Ember first.
[01:25:12] Ever?
[01:25:12] Ember is okay. It's getting actually 120, so they might have updated Ember after this thing, but let's take my old buddy Knockout.
[01:25:22] Knockouts getting about 50.
[01:25:24] by comparison.
[01:25:26] in this benchmark.
[01:25:27] Um...
[01:25:28] And you have to understand back then,
[01:25:30] when computers weren't this fast.
[01:25:32] It was more like Knockout was getting like 10.
[01:25:34] Right.
[01:25:36] In fact,
[01:25:37] In this benchmark,
[01:25:40] If I took an inner HTML,
[01:25:42] in vanilla like this.
[01:25:46] It's actually, I'm getting a hundred here.  It's actually faster than Knockout using inner HTML.
[01:25:52] I thought it was half the speed of just like someone naively putting in your HTML and
[01:25:57] And
[01:25:58] This...
[01:25:59] This benchmark is kind of stupid in the sense that whoever is going to try and send a whole  page's data constantly.
[01:26:06] at fractions of seconds to diff that.  Are you more likely to interact in a specific way,  or are you more likely just like smash the page with data?  And I have to admit, this is,
[01:26:20] Yeah, like this just wasn't...
[01:26:22] you know, the
[01:26:24] this is just wasn't what these kind of fine grained libraries were built to do.  They were, they were very, very poor at this benchmark.  Let's see if we have Inferno here.
[01:26:38] Yeah, there we go.
[01:26:39] Yeah. I mean, there are faster VDOMs now, right? Inferno is pulling at about a 160, right? Um,
[01:26:45] But I just want to, like, point out here that, like...
[01:26:50] that
[01:26:51] Like...
[01:26:52] This was groundbreaking, and it made me...
[01:26:55] Go, okay, no, I need to show how reactivity can still play in this game.
[01:26:59] And this is a little bit tangent, but like,
[01:27:04] Yeah.
[01:27:05] Solid's getting 180.
[01:27:07] So,
[01:27:08] You don't need a BDOM to do this.
[01:27:10] Cheers.
[01:27:10] But I do want to kind of...
[01:27:15] point out
[01:27:17] that
[01:27:18] that this
[01:27:21] This changed everything. People started really getting actually into benchmarks after this. That talk was February 2015.
[01:27:29] The infamous JS framework benchmark that you guys might all be familiar, you know, the ones with the colored graphs, the greens, the reds that you see everywhere.  The first version of that was a GIST on GitHub that was authored in January 1st.
[01:27:46] uh,
[01:27:47] 2000
[01:27:48] 15 as well.
[01:27:49] Let's see if I can...
[01:27:51] Let's see if I can pull this up.  But I think this started...
[01:27:54] Where was it?
[01:27:56] Yeah, here.
[01:27:58] it's
[01:27:59] Someone made this demo app that did the JS framework benchmark back in this. Suddenly performance entered the conversation.
[01:28:06] Um,
[01:28:07] around 2015 and it wasn't really the highlight before that. I think a lot of you have seen this table now.
[01:28:13] But
[01:28:14] To kind of put in perspective...
[01:28:16] I've got round one here.  The first time...
[01:28:20] Stefan...
[01:28:22] publish the results.
[01:28:24] And...
[01:28:25] I don't, there's only limited set of frameworks that were available at this time.
[01:28:29] But like...
[01:28:30] We see Angular and Angular 2 and Aurelia and Ember and Mithril.  Racktiv, if you aren't familiar, is Svelte's predecessor created by Rich Harris.
[01:28:40] react
[01:28:41] Vidom and Vue.
[01:28:43] and
[01:28:44] Essentially...
[01:28:45] If you look here,
[01:28:46] React
[01:28:47] is this gray one.
[01:28:49] It's.
[01:28:49] It's pretty good actually in this world. Like you see Ember being these really tall ones.
[01:28:54] But it's not like leading the pack, it's just kind of...
[01:28:57] mostly
[01:28:58] kind of middle of the pack in a lot in a lot of these benchmarks and to be fair at this point
[01:29:04] We didn't understand a lot about these benchmarks.
[01:29:07] we didn't understand the difference between how you can use keyed and non-keyed to kind of
[01:29:11] cheat at it or whatnot.
[01:29:14] uh that's fine
[01:29:17] Um...
[01:29:18] It wasn't until round three in July 8th, 2016, that the benchmarks actually kind of started resembling what we see today.
[01:29:28] And you can see that, you know,
[01:29:31] We were filling out our chart before, right?
[01:29:33] Um,
[01:29:34] The world had started...
[01:29:36] growing
[01:29:38] beyond where we started at, right? Because I'm going to put another line in here.
[01:29:42] And
[01:29:43] Thank you.
[01:29:45] And essentially,
[01:29:47] A lot of these frameworks and different ones showed up
[01:29:51] in here during this time period where I'd call like
[01:29:54] let's go, what do I want to say?  2018
[01:29:58] 2013, 2000.
[01:30:00] 2005.
[01:30:00] 14
[01:30:01] Um...
[01:30:03] And then...
[01:30:07] We're gonna...
[01:30:09] Put one in here for...
[01:30:12] 2000...
[01:30:14] 15
[01:30:16] 2016, right?
[01:30:18] Um.
[01:30:19] I don't have exact dates, but...
[01:30:23] Oh, not that.
[01:30:24] the lead.
[01:30:25] Um,
[01:30:26] Somewhere around this time
[01:30:28] We're going to start seeing stuff like...
[01:30:30] view show up
[01:30:32] Um...
[01:30:34] Uh...
[01:30:36] Who else? Nope.
[01:30:41] maybe reactive
[01:30:44] Um...
[01:30:46] mithril
[01:30:48] different BDOM libraries.
[01:30:51] Um...
[01:30:52] So this kind of...
[01:30:54] This is all kind of during this time period and they all had their various influences.
[01:31:00] Actually, maybe I should...
[01:31:02] Rearrange
[01:31:03] them around like this. So,
[01:31:05] Let's get some more arrows going because
[01:31:08] essentially
[01:31:10] I think...
[01:31:12] I could be wrong here, but if I'm right,
[01:31:15] I...
[01:31:16] The arrow's roughly... Mithril was like this...
[01:31:20] And like...
[01:31:21] VIEW was like knockout
[01:31:24] and React, because it's using the VDOM, and like...
[01:31:28] Reactive was like very much like knockout.
[01:31:32] You can kind of see how this started building out further from here through this time period.
[01:31:41] Thank you.
[01:31:46] So,
[01:31:47] Yeah, I mean,
[01:31:49] And we're playing a little catch up here because I think...
[01:31:53] If we go further out into here, we're going to find
[01:31:57] Preact
[01:32:00] and
[01:32:02] Inferno.
[01:32:04] Alright.
[01:32:06] Um.
[01:32:07] And these are again very much
[01:32:12] off react right?
[01:32:20] Yeah, this is what I'm getting at. Basically, during this time period,
[01:32:26] Um
[01:32:27] we started seeing a bunch more frameworks come in and they,
[01:32:31] Aligned with reacts mentality. I would say
[01:32:35] 2017, 16, 17 was when React really exploded.  Like when we were like, yes, like this is just the way.
[01:32:43] Um,
[01:32:44] and
[01:32:46] I was showing this table.  I mean, when this got posted around 2016,  you could see a lot of different libraries.  And you're like, okay, yeah,  Vanilla.js is obviously our baseline.  It's amazing.  And a lot of libraries were like,
[01:32:59] in the yellows here, like around double the speed. We had some red ones like reactive, again,  reactive libraries didn't do well in a lot of benchmarks. Um, generally, um,
[01:33:10] Was not doing great
[01:33:12] Ember.
[01:33:13] I mean,
[01:33:15] cycle, some of the more functional programming ones,  there's a lot of approaches that people played with  that were incredibly, a lot slower, right?  The funny thing is, like, React...
[01:33:25] and Angular.
[01:33:27] Almost all...
[01:33:28] stayed around the same zone all throughout the years.  It was like they were watching each other. Um, and actually I missed one on,  on our chart, uh, an important one, uh,
[01:33:39] right around here.
[01:33:40] Um...
[01:33:43] Angular.
[01:33:44] Not AngularJS, actual Angular 2.0.
[01:33:47] came out around this time period as well.  And it was funny because it was influenced by React,
[01:33:52] And it was influenced by...
[01:33:55] old Angular. Okay. But
[01:33:59] What you start to see here is there's like a singularity building around React here.  It's like this is a...
[01:34:06] Like,
[01:34:07] everyone kind of acknowledged what reacted had done. Um, and,
[01:34:12] this zone of all the arrows.
[01:34:17] Yeah, I can bring, I can bring view down.  Thank you.
[01:34:21] Oh.
[01:34:22] These things aren't connected properly.
[01:34:25] All right.
[01:34:26] Let's bring view down.
[01:34:29] Alright.
[01:34:32] Okay, a little bit better.  But yes, there's just too much...
[01:34:36] going on through React.
[01:34:39] Oh
[01:34:40] What made these older reactive frames so much?  Well, the problem is they were...  I don't know why reactive wasn't doing good...
[01:34:47] on some of these. Let's look at where it's slow, reactive, reactive.
[01:34:53] Yeah, honestly...
[01:34:55] I'm honestly not...
[01:34:57] Sure.
[01:34:58] Reactive has the fastest select swap rows, which is interesting.  I think people don't understand keyed versus non-keyed back in.  Generally speaking, the problem is reactive libraries have a huge amount of memory that was necessary.
[01:35:11] Um, so you look at reactive.
[01:35:13] They required more memory to set up all the subscriptions and bindings.  So they lost hard on things that involved creation or just mass blasting out the stuff.  If you had a benchmark, like an animation benchmark, where you had the...
[01:35:26] update some circles, or do one specific change, like,
[01:35:30] some action or animation. Reactive libraries tended to kill VDOM libraries. It was the reverse thing.
[01:35:39] generally rendering large pages was something that VDOM libraries did better.
[01:35:45] Right? So, okay.
[01:35:48] But it's funny.
[01:35:50] There's actually...
[01:35:52] Only a couple green libraries on here. And one of the key ones here I want to point out is actually Inferno.
[01:35:57] Inferno came on the scene and
[01:35:59] You could just tell. It's just like
[01:36:01] It was just faster than everything else.  Like, not even...
[01:36:06] close and it was a VDOM library.
[01:36:09] like React. And I think that's important to point out here, because as I said, React's always been kind of middling, but now that we've started doing these kind of
[01:36:19] benchmarks and stuff we actually started seeing super fast
[01:36:23] Um...
[01:36:24] React like libraries like Inferno.
[01:36:29] and
[01:36:31] Actually, the author of Inferno, Dominic Ganaway, the creator, joined the React team like six months after Inferno went out. He told me one time he went to a conference talk and everybody wanted to know how Inferno was so fast.
[01:36:43] And he actually, after he'd done his talk, he had a little session with all the framework authors and he just went over it.
[01:36:51] and kind of like
[01:36:52] It was like, he said, he was like, I was like, I didn't know these people that well and like knew of them.  And it was really intimidating because he was like the like the new kid coming in and.
[01:37:02] you know, all these experts who've been working on Frames Forever were just like, "How did you do it?" You know? And
[01:37:09] As I said, long story short, he actually joins the React core team,  where he ended up working on stuff like Prepack, which if you haven't seen it,
[01:37:16] um pre-pack
[01:37:19] Um...
[01:37:21] Facebook, although it might be easier to search meta.  It's prepack dead.  Facebook archive.  It is dead, which was this thing  basically would evaluate.  Yeah, they're not going to give me a good example.  It evaluates code ahead of time at compile time.  So he started working actually on a React compiler  at the time to see if he could push the performance,  both taking the techniques away
[01:37:41] of, um...
[01:37:43] of Inferno, which is incredibly fast VDOM.
[01:37:47] and seeing if you could push the boundaries even further with a compiler.
[01:37:52] And we're going to talk about, I'm going to get into that in a minute and the impact of that.
[01:37:57] But...
[01:38:00] Code Rebuilding. No, I mean the beef Inferno.
[01:38:03] is different and diverged, but Inferno looked identical to React.
[01:38:08] pretty much at this point with class components and stuff. It looked almost exactly the same. It was like a drop in. It has it compact just like Preact.
[01:38:15] um,
[01:38:16] And it was just
[01:38:17] It killed at the benchmarks.
[01:38:21] But yeah, we'll get to that in a minute. So yeah, 2016, 17,
[01:38:27] Dom's
[01:38:29] brought on the team by this point react has kind of gone through a change of  guard jordan walk isn't really running uh
[01:38:35] the, the isn't like really as involved anymore. And the, the,
[01:38:40] big part of React has actually been Seb, Sebastian, Marc Baje, I never say his name right, and Dan and Andrew came in around this time too. The current React core team came in during this time period.
[01:38:59] And yeah, I think it's...
[01:39:03] it's good to kind of understand
[01:39:06] I think the Scaladrox already shows it really well, how prevalent
[01:39:11] this thinking it got.  It's funny because...
[01:39:13] We had frameworks every week during this time period because like back here,  we had tons of frameworks because everyone's like, Oh, what's the paradigm?  I'm going to try all these different, crazy, different approaches here.  We just got a ton and ton of VDOM libraries that were,
[01:39:29] essentially trying to
[01:39:31] push the boundary in a different way can you be small like preact fast like inferno
[01:39:41] Yeah, we can get to this later, but if you've been watching the stream, the dialogue I'm going to point out here is I don't think React is going to borrow very much from Solid.
[01:39:49] at all.
[01:39:50] Um,
[01:39:51] Thank you.
[01:39:51] And it's because they've had a vision for,
[01:39:56] For like a decade now.
[01:39:59] Um...
[01:40:00] So...
[01:40:01] Okay.
[01:40:05] So, yeah, I look, yeah, we okay. So I'm just catching up on my notes are because this the thing is where we are right now in our stream and our conversation.
[01:40:16] is...
[01:40:17] kind of
[01:40:20] I don't know if I want to break React into Ages...
[01:40:24] But it's kind of...
[01:40:26] what one might consider
[01:40:29] uh,
[01:40:30] I'm actually going to extend this out to 2017 as well.
[01:40:33] the kind of golden age or of the first age of React. Like this is...
[01:40:39] how it kind of started, how it grew.
[01:40:43] And how by the end of 2017, we have stuff like React Native, or that was in 2016, I believe. But React had shown off its capability and had grown to be the most popular JavaScript framework.
[01:40:56] It didn't pass jQuery completely until much, much later.  But it had already won by this point.  And that's where most people's videos might end.  But we're only...
[01:41:09] Like, this is...
[01:41:11] if you look in years,  we're,  this is only the,  we're only gotten the first four years of react here.  Um,  and,  um,
[01:41:18] it's we've had what it's been another five years.  Like this is only halfway through our story.
[01:41:23] Right.
[01:41:25] - Yep, yeah, exactly.  All the tooling came up with React.  And this is a really good point, thank you.  I didn't have this.
[01:41:30] kind of mentioned, but
[01:41:33] The tooling built around this ecosystem, which is crazy in a sense, because React defined a spec with JSX and then they didn't have to worry about...
[01:41:43] If you're building a new framework today and you try and build your own DSL like Svelte or Vue or whatever, you have to do an incredible amount of lifting to get like all the niceties that we know.  You know, get the language server for TypeScript, get prettier, you know, code formatting and completions and syntax highlighting and like all of that stuff.  The React team was obviously involved with pieces of that.
[01:42:08] from time to time, but
[01:42:10] like the whole ecosystem kind of built around this model.  Like it was just this crazy convergence point.
[01:42:18] Um...
[01:42:19] And I think I think
[01:42:21] I think that's kind of, you know, worth pointing out.
[01:42:28] Right.
[01:42:29] Ever was actually the first to use ES6 compilation by default. Yeah, I mean, it's quite possible. But the thing is, like,
[01:42:36] Yeah, I mean, the funny thing is if you go back and look at React code from like 2015,
[01:42:41] It might not all be what it's cracked up to be.  One thing that I didn't show from this benchmark finally  was going from React,
[01:42:49] 0.14 to 15 was actually a pretty big performance regression here.
[01:42:53] I think they address stuff over time, but like...
[01:42:58] React kind of grew up.
[01:43:00] between this time period and
[01:43:04] you know, it established itself and changed.  It was like, okay...
[01:43:08] the
[01:43:09] we now care about
[01:43:11] weird like consistency issues and all this stuff like it was a changing of the guard in terms of  people and a changing guard in terms of philosophy
[01:43:21] Redux was Dan before he got to Facebook.  Oh, that's because since React was a while back then.  Yeah, yeah, yeah, exactly.  They pulled a lot of people in from their ecosystem.  Dan obviously was working on Redux.
[01:43:32] and obviously Andrew Clark and also stuff like Recompose and what was it?
[01:43:39] Yeah, was it recomposed? Yeah. There's a lot of patterns and stuff. I can't...
[01:43:45] I...
[01:43:46] I can't, like, there's new things every week.  Like, you can go look and see some old Kenzie Dawn articles,  but things like Hawks.
[01:43:53] We're talking about not introducing stuff.  Technically, hawks or higher order functions are a functional programming pattern,  but hawks is definitely a part of the React vernacular,  the ability to wrap components and get them.  Things like render props.
[01:44:09] Even though React, funnily enough, had rejected the DSL, they had essentially introduced the
[01:44:16] concepts and language just as much as if they had a DSL.
[01:44:20] Um,
[01:44:22] Right? Like...
[01:44:23] I think this is something kind of worth getting into.  But the reason this all worked,  because it was React's...
[01:44:35] approach to composition. I don't know, have you... was it Recompose.js maybe?
[01:44:40] If you've ever seen Andrew Clark's Recompose, I think this is something here.
[01:44:45] We're gonna get to hooks in a minute, but this is all pre-hooks.
[01:44:49] Um...
[01:44:51] recompose
[01:44:52] was this idea that you could use higher order components to inject state into your function components.  Everyone just wanted to do these function components, which
[01:44:59] It's funny because if you think about it for a second,
[01:45:04] It's not completely funny, but if you think about it for a second,
[01:45:09] React put all the logic together in the component and said, no, we don't need separation concerns.  You can split the code the way you want to and break it, slice it up the other way.
[01:45:17] But then...
[01:45:21] people started flocking to function components.
[01:45:23] which are basically just like templates.
[01:45:26] for the most part. And then they were like, "Well, I want to use state with it." I guess the thing they want to get rid of, get away from was the class methods.
[01:45:33] But recompose was a really cool idea because then you could stack these things on top
[01:45:38] and inject state and then essentially write your function components and then put your logic on top.  And the funniest thing to me, and people might disagree with me on this,
[01:45:46] But as you start composing large portions of the state...
[01:45:52] using special
[01:45:54] Mm-hmm.
[01:45:55] these primitives they had, like...
[01:45:57] the inject state or reducers and all that stuff and you start stacking them on top of your component  and then and then having your component
[01:46:05] This
[01:46:07] started to look like a view.
[01:46:09] Um...
[01:46:12] Yeah, yes, right? Like, doesn't this... like, this started to look like VIEW and
[01:46:19] I mean, I like this pattern, but if you've ever seen the options API from view, it was basically this thing, these defined objects that you'd stick on top, and then you'd have your view underneath. And if you squinted hard here, this pattern kind of looked like it. And I know this is not the takeaway that most people would have here. But
[01:46:37] This was the first indicator to me that
[01:46:40] Like,
[01:46:41] trends just kind of go in these circles.
[01:46:43] Right? Like...
[01:46:46] I'm going to keep this here,  but I'm going to scroll down.  But like,  uh,  you know what I mean?  Like the,
[01:46:51] Yeah, I don't think I can bend-- can I bend this line?
[01:46:54] Yeah.
[01:46:55] Like...
[01:46:56] I don't know if there's...  There's probably an end of this loop here,  but essentially...
[01:47:03] Thank you.
[01:47:04] There was this dance through the early phases of our frameworks where it was like, okay,
[01:47:11] Functions are cool.
[01:47:13] And then,
[01:47:16] And then it's like, oh, no, there's too much stuff, you know?  And then it's like,
[01:47:26] I actually had like a while ago I'd really thought about this, but
[01:47:31] I'm trying to remember what the order is.
[01:47:33] But...
[01:47:34] like  Every time we weren't no one was completely happy with
[01:47:39] with
[01:47:40] The...
[01:47:42] with any of these. You build everything up in functions, and then you get to a point where the function had too much stuff in it.
[01:47:50] And then,
[01:47:51] you'd be like, "Yeah, actually, I have this backwards."  Then you would end up extracting stuff into objects and pass it through the functions.  Then eventually those objects would just become classes.
[01:48:02] And then at a certain point, you were looking at your classes and you're like, I don't like all the methods hanging off them.  I want to get back to functions again.  And we did this dance together.
[01:48:10] Like...
[01:48:11] through framework trends, like multiple times, where it's like functions to objects, to classes, to functions, to objects, to classes, like, and
[01:48:19] Um,
[01:48:21] Yeah.
[01:48:22] Something had to break
[01:48:24] the cycle.
[01:48:26] Because we weren't getting anywhere, right?  And sometimes this distinction is what made you decide which framework you liked.  Like this was as opinionated as the DSL.  It's like, well, I like objects.
[01:48:38] I like functions, right?
[01:48:40] I like classes.
[01:48:42] And...
[01:48:43] Yeah.
[01:48:44] As I said, but what made React really cool, and this is the part that I want to highlight here is,
[01:48:49] It could do it all.
[01:48:51] A framework might be opinionated about like, yes, this is the way we do it.  This is the way to do it.  But because it reacts focus on its primitives,
[01:48:59] at the time, it could actually...
[01:49:02] Mm-hmm.
[01:49:03] Be...
[01:49:04] All of that.  And you might be going,  oh, is that great?  Like...
[01:49:07] I mean, I was in projects.
[01:49:09] where all three patterns are being applied, whether it was like using the hooks to inject objects like recompose, whether it's the old class components or functions.
[01:49:22] Yeah, right. I do think that's why classes versus objects is worth a distinction here.
[01:49:28] Right?
[01:49:31] But yeah, it's more the way that they're being used because objects get introduced almost as like output of factory functions and then they become the thing because no one wants the functions anymore.  And then they evolve into the classes, which then get devolved back into the functions.
[01:49:45] Um...
[01:49:47] So yeah, this little loop
[01:49:50] Um,
[01:49:51] was real and we needed something to change. But in a sense,
[01:49:54] Everyone was very very happy where React was and
[01:49:59] And React was kind of at this all-time high.
[01:50:03] um...
[01:50:04] And
[01:50:06] I guess the challenge here was
[01:50:08] Things weren't going to always stay this way, right?
[01:50:12] new problems, web dev moved on and I think from React's perspective they hadn't finished
[01:50:18] The mission.
[01:50:19] Right?
[01:50:20] Like,
[01:50:21] this wasn't about being reactionary.  React was like,  they set out to do something at the beginning  that I've talked about,  you know,  with the work from Jordan.  And they were like,
[01:50:31] we still have more work to do.
[01:50:33] So...
[01:50:35] Um,
[01:50:36] As time goes on, we get later in this graph.  It's funny, Svelte actually exists
[01:50:42] Um...
[01:50:43] Here?
[01:50:45] Let's add Svelte here.  But...
[01:50:47] Svelte
[01:50:50] here
[01:50:51] is not much different
[01:50:54] than
[01:50:55] reactive.
[01:50:57] to be fair.
[01:50:58] Thank you.
[01:50:59] Svelte does exist here.
[01:51:01] Um...
[01:51:03] But...
[01:51:04] Thank you.
[01:51:05] It becomes much more relevant when we get into the next period, which I'm going to call 2010.
[01:51:12] 18
[01:51:13] to
[01:51:15] 2000
[01:51:18] I mean, it's almost...
[01:51:20] till now and you you come out probably thinking like four years is a long
[01:51:25] freaking time, you know, for these categories.
[01:51:29] Most of the time we've been doing two years and like tighter gaps, but
[01:51:33] This has really been part of the same time period here, right?
[01:51:39] Um...
[01:51:41] And...
[01:51:42] We're going to get into...
[01:51:44] We're going to get into that here in a second.
[01:51:46] One sec.
[01:51:52] as we talk about modern React.
[01:51:56] Thank you.
[01:51:57] Okay. And modern React is probably something that continues to kind of shift in definition.
[01:52:05] But I think it's important...
[01:52:08] to know that it has its roots back in this earlier time period,
[01:52:13] But essentially...
[01:52:15] it's continuing to evolve even today.
[01:52:20] So...
[01:52:21] Let's see here.
[01:52:25] .
[01:52:31] Right, yeah. I could probably split this in two and actually wrote an article like
[01:52:36] Um,
[01:52:38] - Oh.
[01:52:39] There was actually a time
[01:52:42] Yeah, I think I nailed it perfectly, actually. I wrote an article right at the tipping point between people loving React and disliking React, and I actually brought that one back up on Twitter today, because it's been another two years since then, and it's like, how have things changed?
[01:52:58] Hooks did change the game and hooks are a big thing and they are
[01:53:02] But they weren't the first thing...
[01:53:04] that signaled the entrance to the modern React age.
[01:53:08] Right?  We focus on hooks because hooks were the thing that mattered to us and to the author and  name.
[01:53:14] Like, a bit of my personal story,
[01:53:17] flows into this time period.
[01:53:19] you know, because
[01:53:21] I
[01:53:22] was using my stuff and I've
[01:53:24] didn't care and I was happy using my stuff. Then Ryan Florence goes and makes a benchmark  and everyone's like, "Oh, I don't know if we should be using stuff like Knockout anymore,  because it reacts faster and all this stuff."
[01:53:36] And I'm like, okay.
[01:53:38] I'm going to show you that a reactive system can be fast.
[01:53:40] So that's when I set off right around the time of like 2016, 17 to work on solid.  Right.  I didn't release it too much later, so we can put solid on the map here.
[01:53:51] Um,
[01:53:52] Soled's a funny one, because...
[01:53:55] Solid is...
[01:53:56] is
[01:53:57] Again, I love how these arrows
[01:53:59] bend everything together because
[01:54:01] Solid.
[01:54:02] Why did I put it over here? Solid?
[01:54:04] Wasn't very influenced by Svelte.  Solid was influenced by...
[01:54:11] Knockout, way back here.
[01:54:15] influenced by
[01:54:16] Elm way over here.
[01:54:19] and influenced obviously.
[01:54:21] by React right here.
[01:54:23] Um...
[01:54:25] *sniff*
[01:54:26] And...
[01:54:27] - Thank you.
[01:54:28] But the important...
[01:54:30] thing is  sorry  it's kind of like
[01:54:33] Get into this thing is it?
[01:54:35] That's where I was sitting at when Hooks came out. But the role
[01:54:40] for React.
[01:54:43] was, as I said, React wasn't even thinking about Knockout.js or Reactivity.
[01:54:48] when they introduced hooks.  And I think to understand that, you need to actually...
[01:54:54] trace back to the first thing that they did to usher in this new modern age of React. And that was
[01:55:02] They introduced the idea of suspense and concurrency first and
[01:55:06] Um...
[01:55:06] So let's see if I can pull that up.
[01:55:09] Searching for a better way to collaborate with your team? Ads. Sorry.  An online whiteboard may...
[01:55:15] I hope.
[01:55:16] JSConf Iceland
[01:55:19] And even though it waited a little bit, it still froze later because
[01:55:23] The underlying problem is just that the update is big and it's synchronous.
[01:55:27] So as soon as React starts rendering, it cannot stop.
[01:55:31] Well, what if there was a way to make updates asynchronous, so that React is starting rendering something, but then yield back to the browser, and if there is a higher priority event, like an input,
[01:55:43] the browser could handle that first,
[01:55:45] and not start a thread.
[01:55:47] So I will disable the Throtlin for now. Let's see how it normally behaves in asynchronous mode.
[01:55:59] So, what you can see here is that when the input is short,
[01:56:03] and there is not a lot of computation
[01:56:07] it appears almost synchronously, so it feels like as if it was synchronous
[01:56:17] But if I type more, what happens is that instead of hanging the thread, the thread stays responsive, you can see that it's most agreed. But instead React just updates the charts less often.
[01:56:30] and they lag behind my input a little bit.
[01:56:33] But in many cases, this actually doesn't matter, and it's a completely fine compromise.
[01:56:38] from the UI perspective.
[01:56:42] Let's see what happens on a slow device.
[01:56:44] So I enable the CPU thromplein
[01:56:48] four times slower,
[01:56:56] You can see that it does stutter a little bit, but it smells green.
[01:56:59] and it tries to catch up to my typing even though the device is slower.
[01:57:04] compared to the synchronous version where it just stutters on every keystroke.
[01:57:13] This was the demo, and some pointing out React Fiber is a big deal. The thing is, they introduced Fiber and people were like, "Okay, that's cool," but it didn't mean anything until we could actually see a place where Fiber actually had a use.
[01:57:28] It's kind of funny because
[01:57:30] This demo, the original one, is actually the one demo that the current version of React's concurrent rendering is not good at.
[01:57:38] Um,
[01:57:38] because they actually changed their approach,  which actually makes this specific demo  not a good demo anymore.
[01:57:47] but
[01:57:49] It takes some hindsight perspective here to understand what they showed off here. And that was that,
[01:57:58] Thank you.
[01:57:59] they actually introduced two concepts, two features in this demo,  but they got wrapped into the same feature.
[01:58:06] Thank you.
[01:58:07] And...
[01:58:09] And I...
[01:58:11] To this day, I don't think it's very clear to a lot of people that there is actually kind of two sort of related features here.
[01:58:18] The
[01:58:19] The first one I showed you
[01:58:20] is actually kind of built upon the second. But the idea is
[01:58:24] that
[01:58:26] Um,
[01:58:28] - Yeah.
[01:58:28] React could render things in parallel. Not at the same time, obviously, because
[01:58:36] If you have one CPU core, that's all you can do. You can just take turns or whatever. But essentially, React now had the ability to do multiple trees.
[01:58:45] That was a big part of it.
[01:58:47] The second part, which is what we showed in this demo, was React had the ability to switch between those trees in rendering and actually schedule
[01:58:55] stuff based on a priority.
[01:58:58] But...
[01:58:59] Both abilities have...
[01:59:01] can be useful on their own,  even though they got wrapped into this single thing.  The piece that we just saw here,  where it's about giving each person
[01:59:10] piece of CPU was called time slicing originally. And the other piece actually, Dan demos a little  bit later, and it was the piece that I was actually more interested in.
[01:59:22] which is that
[01:59:24] see if I can find the beginning of this demo because it's actually kind of long, but
[01:59:29] So now when I click
[01:59:31] it shows an inline spinner. Yeah, okay. Yeah. To make load an ID an argument to render list,
[01:59:38] and I'm going to call render list, so
[01:59:41] If we are currently loading,
[01:59:44] which is what we wanted to ask React.
[01:59:46] then I just pass the current ID in.
[01:59:49] Otherwise I pass now.
[01:59:51] And I can even remove the
[01:59:54] the main placeholder now.
[01:59:56] Let's see what happens.
[02:00:00] So now when I click
[02:00:01] It shows any line spinner.
[02:00:04] And again, no race conditions. I can click here, then click here.  Okay, sorry, I jumped too far ahead.  Copy paste what I hope is less than a second.
[02:00:12] His origin...
[02:00:14] And I'll load the details first. Yeah.
[02:00:18] It shows the details, but the reviews are still loading.
[02:00:21] And when the reviews are ready,
[02:00:23] and show us the reviews.
[02:00:24] And again, there are no risk conditions I can...
[02:00:27] Go back, I can...
[02:00:29] hopefully you hopefully you pick up that piece but essentially um
[02:00:34] He was just showing like this flow and I'm just show really quick here is what kind of typical flow you'd find in a react app classically.  And I'll load the details first.
[02:00:44] So I can wrap the movie reviews
[02:00:46] Peace.
[02:00:47] Well...
[02:00:48] With him.
[02:00:49] Let's see what happens.
[02:00:51] Sorry, let's see it one more time.
[02:00:53] So I pause on new requests.
[02:00:55] I'll start floating in a movie
[02:00:57] And I'll load the details first.
[02:01:01] It shows the details, but the reviews are still loading.
[02:01:04] And when the reviews are ready,
[02:01:05] It shows the reviews.  Right.  And again, there are no risk conditions.  What he's showing here is when you go to a new route,  you have to go to the route to render the new route.  So you fetch the data when you go to the new route,  and then you have to show a placeholder for it.  And then as stuff comes in, you can show it.
[02:01:20] Right. And this this is pretty much
[02:01:24] the way you typically do stuff. But the idea that was
[02:01:27] is if with
[02:01:29] - Yes.
[02:01:29] With using...
[02:01:31] And then he goes and shows how you could
[02:01:33] making an API that works the opposite way, which is that when you click on it, it actually gives a pending indicator right away and then moves to the new page when it's done. But he had to do hoist a bunch of stuff up. And then what he ultimately showed with suspense was I think this.
[02:01:51] I'm bad at this, right?
[02:01:53] Yeah, this should be...
[02:01:55] Thank you.
[02:01:57] Now if I click on it,
[02:01:59] That didn't work.
[02:02:01] Okay, it's a live demo. Some things don't... Oh, right. I forgot to use my image component.
[02:02:08] That's why you should look at the Lynch warnings.
[02:02:11] So let's use the image component.
[02:02:15] Now click on it and it jumps on the page when the image is ready.
[02:02:21] Right.
[02:02:23] this demo is
[02:02:25] Um,
[02:02:26] shows a completely different use for concurrent rendering,  essentially showing that you can
[02:02:31] show a pending state without dropping back to a skeleton and then loading the data in. And there's  different ways to do that, but the key part of this demo that Dan was showing is that it can  do that by just writing almost very simple React code and then just wrapping it in, um,
[02:02:48] this kind of idea of a transition.
[02:02:51] and
[02:02:53] This...
[02:02:55] Technically,
[02:02:57] The only requirement to do this is be able to render in parallel. You don't actually need time slicing to accomplish this because this is bottlenecked by input output. It's bottlenecked by a request to the database for some data. It's not like that typing example where it's CPU bound. If react
[02:03:13] goes and
[02:03:15] renders that off page and you're not really interacting with the current page like who cares you don't actually need time slicing but  these things kind of got conflated with each other and
[02:03:24] into concurrent mode, even though there are two very distinct use cases.
[02:03:28] But I did want to show them off here because this is when
[02:03:33] Like the...
[02:03:34] We were first introduced...
[02:03:36] to
[02:03:37] modern React, why they wanted React fiber.
[02:03:41] think this talk
[02:03:43] was more interesting to someone like myself, like more on the framework author side, because like, I'm suddenly like, oh, wow, I,
[02:03:50] Like this.
[02:03:51] You...
[02:03:52] I mean, people build apps with UIs could probably respect this problem, but there was always a way you could solve it. You could just hoist the state up.  But being able to handle this at a fundamental level so that you could kind of invert the control was incredible.
[02:04:07] But...
[02:04:09] it does come at a cost here because if you can parallel render
[02:04:13] suddenly...
[02:04:15] Our expectations on the way that components should run
[02:04:18] have to change.
[02:04:20] We have to be...
[02:04:22] we have to like follow some rules. Otherwise things can clash with each other.
[02:04:28] And
[02:04:30] The problem was,
[02:04:32] React wasn't
[02:04:34] React wasn't almost restrictive enough to have
[02:04:38] the way to...
[02:04:40] to express that intent.
[02:04:41] with the class components.
[02:04:44] So what ended up doing was they actually were thinking, we could hit...
[02:04:51] two birds with one stone?
[02:04:56] What if we could...
[02:04:59] Both.
[02:05:00] solve our problem of not having the language  to be able to express some ideas,  and finally give React
[02:05:08] a composition model that has been missing since the old mixing days. The class components actually hurt composition.
[02:05:14] big time, which is really awkward because React was built on composition and suddenly
[02:05:20] composition was not
[02:05:21] you know,
[02:05:23] not as good as it once was. It was cool because it actually pushed people into other patterns,  but that's part of the reason I think we ended up with function components. That whole loop happened  because the industry and everyone was like, okay, yeah, we need classes. And then it was like, oh,
[02:05:41] Let's get back. React started  with create class, which is basically objects.  Classes.
[02:05:48] to functions.
[02:05:50] So this was kind of...
[02:05:55] it's funny.  Sometimes I feel like react demos during this time were backwards.  Like they essentially showed just tried to show us the results.  So we get excited about it.
[02:06:04] um,
[02:06:04] but not how to get there.  And no one really understood what they were doing.  They were like, okay, that's a cool demo, but...
[02:06:11] Like
[02:06:12] could connect the dots.
[02:06:14] which is one of the biggest challenges.
[02:06:17] Um,
[02:06:19] And
[02:06:20] From a lot of people, this is really exciting, but it didn't really mean anything to them.
[02:06:24] Of course,
[02:06:25] Then,
[02:06:26] almost immediately
[02:06:28] after about six months later, the same year, 2018,
[02:06:32] they drop the bomb that changes everything.
[02:06:40] Yeah, someone's asking about this. To be fair,
[02:06:44] This pattern of using the router exists way back in Ember days.
[02:06:50] It doesn't...
[02:06:50] change very much. The problem is
[02:06:54] even with these mechanisms like being able to invert control,  you still need to start the fetching at some point.
[02:07:00] So nesting stuff down the component tree
[02:07:03] isn't.
[02:07:04] like doesn't work very well. So that's why these nested routers are a thing because they give us the anchor points.  But the coolest thing is you can use these technologies together. You can let the router do the fetching but be non-blocking.
[02:07:15] And then you can let suspense
[02:07:17] Handle everything in all the race conditions below it automatically. I think this is something that's been missed  on a lot of the first ones because suspense wasn't ready yet, but like I
[02:07:27] I don't want my...  It's kind of funny.  I...
[02:07:31] The...
[02:07:33] The loaders and stuff shouldn't be considered blocking functions.  They should run and then your app should be rendering at the same time.
[02:07:41] like they shouldn't expect the data to be there at the time of,
[02:07:46] that they run.  That's what suspense gives you.
[02:07:49] So while those patterns are common, like these are complimentary, they're not competing.
[02:07:54] I just think that a lot of React libraries had to build in a world where that didn't exist yet.
[02:08:01] Yes, yeah, I think there's a gap here.
[02:08:07] Thank you.
[02:08:07] Right? And...  So...
[02:08:10] Essentially, as I said, we now...
[02:08:14] had a really cool idea of why they did fiber, but this wasn't really useful because you weren't going to go use this. At the end of the demo, they're like, "Now you have a lazy component." I was like, "Okay, sweet."
[02:08:27] There wasn't much else you can do it.
[02:08:29] I think the bigger change, as I mentioned, was
[02:08:34] the
[02:08:34] They worked on it a bunch, but they decided that it was time to address...
[02:08:38] that problem, you know.
[02:08:40] that I was mentioning a moment ago. How to express the intent,
[02:08:43] how to get composition back that they lost in class components.
[02:08:47] This for me is probably the most seminal talk for me, like changed my life.
[02:08:53] Um...
[02:08:54] But I'm just going to throw this on here for you all to enjoy. Of course it doesn't.
[02:08:59] There were
[02:09:00] This is Dan, October 26, 2018. I have that date memorized.
[02:09:06] Because it was just one of those life events for me, which is sad in some ways.
[02:09:11] but also, you know,
[02:09:13] It is what it is. Let's see.  What's the initial state?
[02:09:17] to specify
[02:09:18] Okay, so I jumped way ahead. Sorry. Where are we? I thought I had the link at the right spot, but
[02:09:24] Let's...
[02:09:27] And the input has...
[02:09:30] I will find the marker.
[02:09:33] There's the state here
[02:09:35] just a little bit further.
[02:09:36] Under an input, valid.
[02:09:39] He's just making a simple name tag that you can update.
[02:09:44] So I...
[02:09:45] I need to bind
[02:09:47] Sorry, I need to bind the event on there
[02:09:53] Okay, so now I can actually edit it and...
[02:09:56] It works.
[02:09:57] So a familiar class component, as if you work with React, you probably
[02:10:02] write a lot of those.
[02:10:05] But let's take a step back.
[02:10:09] What if we didn't have to?
[02:10:11] right in class.
[02:10:12] when we wanted to use tape.
[02:10:15] So I'm not sure how that's gonna work, but I'll just start with what I know. I want to render an input.
[02:10:21] So.
[02:10:21] I'm gonna put an input here.
[02:10:24] And the input has a value, and that value is the current name.
[02:10:28] So I'll just pass the name.
[02:10:31] I don't know where to get name from.
[02:10:33] So it doesn't come from props.
[02:10:35] Uh...
[02:10:36] I'll just declare it and I don't know...
[02:10:41] I'll fill it in later.
[02:10:43] So it's gonna have a change calendar as well. So I'm gonna declare onChange
[02:10:47] Handle name change.
[02:10:52] And I'm adding a function here, jake's in a bun.
[02:10:57] And then here I want to tell React to Seth
[02:11:00] the name to something.
[02:11:02] But again, I'm not sure how to do that from a function component, so I'll just call something called setName.
[02:11:09] with the current input value.
[02:11:14] And I'll just think,
[02:11:15] split it here.
[02:11:21] Thank you.
[02:11:25] Alright, so these two things are closely related, right? So one of them is the current value of the name state variable
[02:11:33] And the other is a function that lets us set
[02:11:37] the namesake variable.
[02:11:39] And so because these things are closely related, I'm actually going to put them together as a pair.
[02:11:44] values.
[02:11:47] So I'm going to get them together from somewhere.
[02:11:51] So where do I get them from?
[02:11:53] from React Local State.
[02:11:56] So, how do I use
[02:11:58] react local state from a function component.
[02:12:02] Well, what if I could just...
[02:12:04] use
[02:12:05] state.
[02:12:12] and pass the initial state.
[02:12:14] to specify it.
[02:12:19] Let's see if this works.
[02:12:22] works.
[02:12:24] Thank you.
[02:12:29] You could tell he's pretty proud at that moment. It's like when you have a secret that no one else knows and you get to show everyone and you're just like, yeah.
[02:12:40] Yeah, exactly. Yeah. Like, yeah, like,
[02:12:44] What's the classic one? Like we have something we,
[02:12:47] we think you'll really like, you know, man.
[02:12:53] This whole talk is actually great.  And actually, Ryan Florence makes another appearance later on where...
[02:13:00] he kind of goes into use effect and actually showing people how--  this is a long coding demo, so it's not really good for the sake of the stream.
[02:13:10] But, um...
[02:13:11] This whole talk again is great because he makes it real.  But for me, the second that I saw Dan's talk personally, this probably meant more to me  than other people.
[02:13:24] That was essentially the moment that I realized that Solid.js was a real thing.
[02:13:29] was like
[02:13:30] the heat.
[02:13:32] Like, I saw him do the tuples, and I'm like, oh, that's how you do it.  I've been...
[02:13:37] - Okay.
[02:13:37] I've been struggling with how to keep the separation with a good API. And then, and then secondly, I was like,
[02:13:44] Wait.
[02:13:46] How is that possible?
[02:13:48] the key thing here is
[02:13:51] And you can see this.  If you go in React, I forget what it was, React Hooks.
[02:13:55] prior
[02:13:57] art or whatever.  Yeah.
[02:14:00] Where is it? Is it in here?
[02:14:03] - That's it.
[02:14:08] prior art for hooks. There is not going to be any mention of those reactive systems that I talked about before, right?
[02:14:14] Um...
[02:14:15] They talked about some
[02:14:18] yeah, future thing. They talked about an idea that Dom, we already talked about him and Inferno, had in terms of syntax.
[02:14:24] talked about a pattern that Ryan Florence had come up with,  talked about some stuff in Reason, talked about...
[02:14:32] RxJS, actually, of all things for subscriptions,  all of these friends, but like zero mention...
[02:14:37] of the API that I showed you earlier with Knockout that looked
[02:14:41] Almost exactly...
[02:14:43] identical and
[02:14:45] or even Vue, which looks really identical, or RACTIVE, or all of those libraries. Because, honestly, they weren't looking at those libraries. Somehow,
[02:14:55] um,
[02:14:56] and
[02:14:57] Maybe this comes from
[02:14:59] Uh,
[02:15:00] Like...
[02:15:01] this web of how much cross-pollination has happened over the years.
[02:15:05] Um...
[02:15:06] they had pulled in influences from different places and,
[02:15:11] Um,
[02:15:12] that they'd somehow...
[02:15:13] managed
[02:15:15] to, uh...
[02:15:16] to kind of land on almost the same...
[02:15:19] Same patterns. I can't explain it exactly.
[02:15:22] But, um...
[02:15:25] Mm.
[02:15:27] It's important to understand this is a completely different execution model. In React,
[02:15:31] We have these functions that run over and over again. So you have to think of a way to actually preserve state in them. It's a complete opposite of a reactive system
[02:15:39] where you have
[02:15:41] It's that state that reruns over and over again.
[02:15:43] so
[02:15:46] Hooks.
[02:15:47] mind-blowing.
[02:15:49] Demo.
[02:15:50] Right.
[02:15:51] change everything.
[02:15:54] But...
[02:15:56] Yeah, and they brought something to React that I don't think anyone actually...
[02:15:59] realized what happened. I mean, there's some great conversation from that time. Like the problem best visual of what Hooks did initially for people was
[02:16:08] was like this. I don't know if you can see this that well. I don't know if blowing up my screen will help anymore. Probably not. But Sunil, who's later would become a React core team member as well, posted this thing where he's like, "Look, I got this class component.
[02:16:20] And I got all this code and the black stuff was actually stuff that he was able to delete because it just wasn't necessary anymore.  When he moved to hooks, the yellow stuff was stuff that was concerned with like the window object.  And he was showing like with the life cycles, the stuff was sprinkled all over.  He, you know, the stuff related to the theme and the context is green and the stuff for the local state was blue.
[02:16:38] With hooks, this mess of stuff,
[02:16:41] Suddenly,
[02:16:42] look like a bunch of blocks that were together.
[02:16:45] where
[02:16:47] Green stuff was together.  The blue stuff was together.  The yellow stuff was together.  And then in the view, it kind of sprinkled in.
[02:16:52] Um,
[02:16:53] This is incredibly powerful cold location.
[02:16:55] I've actually only ever seen one framework take it farther where the green is actually next to the green and the blue, like the whole thing combines. That's upcoming Mark 06.
[02:17:05] But...
[02:17:06] Like, this was...
[02:17:08] This is just mind-bending.
[02:17:11] To be fair...
[02:17:12] This is...
[02:17:14] What...
[02:17:15] I personally liked about libraries like Knockout because they were always like this.
[02:17:19] But until someone actually pointed this out,
[02:17:22] No one was going here.  And I mean...
[02:17:25] We showed Vue, talked about Vue.  Vue had a reactive library like Knockout,
[02:17:31] did not go this way. It looked like they had these objects.
[02:17:35] Um,
[02:17:37] it was incredible the impact this had across the ecosystem.  I,  you know,  we talk about reacts influence,  you know,  on philosophy.  It was,  it was basically they've,
[02:17:46] Even if you...
[02:17:47] ignore the technology, they've impacted
[02:17:51] Best practices.
[02:17:53] for years and years and years.
[02:17:56] Right.
[02:17:57] like another example,  like,
[02:17:59] Rich Harris, fresh out of that conf.  When did he post this?  October 30th, four days later.  He's like...
[02:18:08] He just...
[02:18:09] He first is like, okay, well, we need hooks for Svelte.
[02:18:12] So he's like, okay, I can do this.
[02:18:15] Yeah, that makes sense.
[02:18:17] It's like, okay, that's cool.  And then he's like, okay...
[02:18:20] Wait, wait, wait, no. He's like, screw it. I'm just going to use the compiler and do it.  This is not obviously final svelte. He realized that you need a special syntax to show derived state because there is a difference.
[02:18:32] But the point is, hooks are what...
[02:18:37] influence Svelte 3's API design.
[02:18:40] And
[02:18:42] ebbin you to expose their reactive system.
[02:18:46] This was a not popular thing.  I showed those old libraries like Knockout, right?  I showed them basically being the same thing.  But it was magic back in 2010 when this was happening.  People...
[02:18:59] played with it, but then ultimately we're like, we're going to leave the magic in the past.
[02:19:03] Hooks
[02:19:04] We're like, oh no, this is okay all of a sudden.
[02:19:07] And
[02:19:08] I mean, that's huge. And I just said, I told you all, I warned you at the beginning, this was tying to my personal story.
[02:19:14] That is my personal story.
[02:19:16] I was that weirdo that already thought that this was the best pattern before React told everyone to.
[02:19:22] And that's the only reason why I'm here.
[02:19:24] So this was, this is like, I can't state enough.
[02:19:30] how
[02:19:32] Like...
[02:19:33] As I said, can you picture being view?
[02:19:34] having the ability to have done something like hooks for like
[02:19:37] four years and just being like, no, no, we don't think that's the best pattern until react actually does it.
[02:19:45] Like...
[02:19:46] I mean, this is a crazy thing because...
[02:19:51] In a sense,
[02:19:52] If you focus just on the hooks themselves,
[02:19:55] I would argue that a reactive system is just better
[02:19:59] for this kind of syntax or this kind of approach.  It just, it aligns more with the way it works.
[02:20:06] But as I said, React wasn't interested in that.  They were like, how do we solve this composition problem?  It had nothing to do with reactivity in the sense that I talk about reactivity.
[02:20:17] Right.
[02:20:18] That's what they were trying to do.  That's why every time someone asks me like,  oh, what's React gonna take from SolidJS?  And I'm gonna be like, probably almost nothing.
[02:20:29] Maybe I'll make a good API design decision that I get to before they release it and it tweaks their thinking a bit.  But they probably would have landed on it anyways.  They have amazing API design.
[02:20:40] Um,
[02:20:41] I've seen that again and again. I think the only... I got one for you.
[02:20:45] - Thank you.
[02:20:46] Solid.
[02:20:48] When React introduced useTransition,
[02:20:55] - Thank you.
[02:20:55] They had the first argument being the starting the transition and the second argument being the like is pending.
[02:21:02] And in solid, I was like, this isn't the pattern we use, and I reversed it.  So I made the isPending the first argument, and I made the startTransition the second argument.
[02:21:12] React later switched it to the same order as Solid.
[02:21:15] That's about the extent of that influence from my perspective. And I don't think they even looked at what I was doing. It was just the logical decision. They just introduced the wrong order. And luckily, I realized that. And...
[02:21:29] and made my APIs that way, and they ended up
[02:21:33] you know, realizing it later and following suit.
[02:21:36] But, you know what I mean? I don't think that was them looking at solid, so to speak.
[02:21:42] But as I said...
[02:21:45] Hooks didn't just change everything for React, they changed everything outside of React.
[02:21:50] That's the
[02:21:51] Impact.
[02:21:52] It's also...
[02:21:53] why they're not probably
[02:21:57] Like,
[02:21:58] phased by a lot of the conversations that are happening right now.
[02:22:01] Alright?
[02:22:05] People are still talking about Redux.
[02:22:09] um
[02:22:15] Hooks gave me the React syntax I wanted,  so I'll give you the way to use the syntax I wanted.  Yeah, I mean, the thing is...
[02:22:20] Hooks are like clearly one of the best things that ever happened to React.  It's just unfortunate that that model...
[02:22:27] aligns a little bit better with the exact opposite mental paradigm or like thing, but we're gonna get into that more in the future and what that means. I think right now, um,
[02:22:38] Like this, this, this was 2018.
[02:22:41] people's minds were
[02:22:43] B'loan.
[02:22:44] and
[02:22:46] and everyone was rushing to kind of fill in the gaps here.  It's funny, most of these frameworks only show up once,
[02:22:53] But
[02:22:54] I want to point out here that like,
[02:22:59] Like...
[02:23:00] Oh, no, I deleted that one, sorry.  That...
[02:23:03] In a sense,
[02:23:04] because of how big the API change was,
[02:23:06] I'm going to put view...
[02:23:08] Three.
[02:23:09] and Svelte 3 out here.
[02:23:11] because kind of like Angular 2,
[02:23:14] Like, they're actually worth...
[02:23:17] pointing out.
[02:23:18] I mean, in the case of Svelte, it wasn't that painful.
[02:23:22] because, um...
[02:23:24] essentially
[02:23:26] They were...
[02:23:29] how should I put it, like they didn't really have many users before V3, but going from  Vue 2 to Vue 3 was a big lift for a number of people.  And...
[02:23:38] I want to point out here that
[02:23:41] Essentially,
[02:23:44] Um...
[02:23:47] Like, this happened.
[02:23:49] You know
[02:23:51] Bye.
[02:23:51] Jewish
[02:23:54] I mean...
[02:23:57] Anyway, like...
[02:24:02] I mean, in a sense, I should put React...
[02:24:05] Let me actually get rid of these last two arrows.  Because React at this point is just...
[02:24:10] is just a...
[02:24:11] Too crowded.
[02:24:13] It's actually easier to treat...
[02:24:15] this new React that we've been talking about as
[02:24:19] another
[02:24:20] thing here too.
[02:24:21] So let's say 2018, so a little bit later than solid, so right here.
[02:24:26] react
[02:24:28] I don't know what to call this. It's like React Next or whatever. It's not Next though, because Next is Next.js, but we need something to denote what this version of React is.
[02:24:38] - Thank you.
[02:24:42] React 2 clearly. Thank you, Theo. Of course, this is React 2.
[02:24:46] Hmph.
[02:24:48] Yeah, I mean, 16.8, yes. It was like somewhere around 16. I mean, to be fair, I guess I could call it...
[02:24:53] But it wasn't actually 16. 16 put it in process, but like...
[02:24:58] That's fine. I'm going to call it React 2 because that's actually better. Um, from my perspective. React 2 is very influenced by React. React 2 was, um,
[02:25:08] I mean, that's the difference here. I don't know if React 2 had any new influences. It goes all the way back to
[02:25:14] I didn't put it on here because it wasn't like a framework thing,  but like obviously...
[02:25:18] Bye.
[02:25:19] our old buddy Fax...
[02:25:21] JS.
[02:25:22] Um...
[02:25:24] is part of this
[02:25:25] Lovely graph as well.  But...
[02:25:28] But what's more important is these lines.
[02:25:32] 'cause we had
[02:25:34] We had this happen.
[02:25:37] Right. Like this sort of ecosystem thing. And to be fair,
[02:25:42] Solid probably deserves to point an arrow at React a little bit.
[02:25:47] two here, even though it's like a
[02:25:49] and on almost like
[02:25:51] of.
[02:25:52] straight horizontal one
[02:25:54] Um,
[02:25:57] So
[02:25:58] -
[02:25:59] This is kind of...
[02:26:03] Like this is a big change and react pulled it off.
[02:26:07] almost seamlessly, well at least at first, is how I would put it. Because this is one of those
[02:26:15] points. The problem is
[02:26:18] It was only one piece of the puzzle that had been of a plan that's been rolling since about 2000, I want to say 2015 ish.
[02:26:25] Um,
[02:26:26] And
[02:26:27] By the time we get...
[02:26:28] to 2020.
[02:26:30] Someone earlier made a joke that I should draw...
[02:26:33] align here.
[02:26:35] in 2020, like kind of like a
[02:26:39] half wine or like a
[02:26:41] Um...
[02:26:43] And I think you're actually kind of right.
[02:26:45] From a framework's perspective, it doesn't really matter as much.
[02:26:50] But this sort of halfway point, and I guess it aligns with Vue. Vue was 2020, so it was 2019.
[02:26:57] From this perspective,
[02:27:00] things started to change.  And part of it was...
[02:27:04] people seeing other systems do hooks in a way.  And part of it was from hooks themselves,  just kind of understanding how that dynamic worked, right?
[02:27:14] That's a congested flight path.
[02:27:17] Yeah.
[02:27:18] Um...
[02:27:19] And that's going to be part of it.
[02:27:22] Right.
[02:27:23] Um...
[02:27:24] The first one that kind of called it, I think, was from...
[02:27:29] uh,
[02:27:31] The first kind of hint
[02:27:33] that we got like maybe something's up
[02:27:35] Dan actually covered this in this article, which is making setInterval a declarative
[02:27:40] hook with react
[02:27:42] And
[02:27:43] This article is amazing.
[02:27:46] That's fine.  I was using light mode.
[02:27:50] And...
[02:27:51] In the words of Ryan Florence,
[02:27:53] I've had a lot of people point to setInfoHook as some sort of Aegon React space.
[02:27:57] It just...
[02:28:00] People didn't get why they couldn't just put an interval at the top of their component.
[02:28:06] Right? Like,
[02:28:07] Why can't we just do this?
[02:28:10] So,
[02:28:11] And.
[02:28:13] I mean...
[02:28:16] If you've used React before,
[02:28:18] Um...
[02:28:20] you can't kind of get it. You're just like, there's no way this could possibly work the way you want. Sorry, use intervalism, right? Because that one's actually the fixed one. I want to
[02:28:29] Where's the actual original?
[02:28:31] demo, the thing that actually
[02:28:35] Didn't work. Where can we start at the beginning?
[02:28:39] They're not going to
[02:28:40] Oh, that's funny. The article doesn't actually have the original...
[02:28:46] Yeah, here it is, Stack Overflow.
[02:28:49] See?
[02:28:51] To be fair, the person here at least knew enough to put it inside a use effect.
[02:28:58] Right. So like,
[02:29:00] But like yeah stuff just wasn't working the way they wanted to because I
[02:29:06] They figured out that they needed an empty dependency array
[02:29:10] so that the interval only gets set up once. But then they didn't understand that this time
[02:29:15] variable, it's the same as this time variable,
[02:29:17] Yeah.
[02:29:18] which has been closed over. It never changes.
[02:29:20] On the first render you get a zero.
[02:29:23] When the interval fires, it's 0 plus 1.
[02:29:26] Sometime later this thing fires again. The interval just keeps on firing and all it ever sees is 0 plus 1 and it shows 1 forever.
[02:29:33] This is the egg on the face example, right?
[02:29:36] Thank you.
[02:29:38] The thing is,
[02:29:40] This makes a ton of sense.
[02:29:42] Right? SetInterval
[02:29:44] is
[02:29:45] like an external
[02:29:48] change mechanism that isn't part of React system and we need to have these things
[02:29:53] come together.
[02:29:54] Essentially.
[02:29:55] And the problem was
[02:29:57] There wasn't an easy way to pull something out of the component
[02:30:00] anymore. Like the class components did that for us, but now with this you're just like,  okay, well I guess I'll use useEffect.
[02:30:05] But the problem is
[02:30:08] you're still driving state. So somehow you have to combine state and stuff that kind of was outside of the render cycle together.
[02:30:15] And you've kind of
[02:30:17] remove that from the language.
[02:30:23] Thank you.
[02:30:24] Right?
[02:30:27] so
[02:30:28] Like, okay.
[02:30:30] Fair enough, but Dan goes through this article and the thing is I
[02:30:35] - Thank you.
[02:30:39] I'm trying to remember if this is the final version. No, yeah, I've used interval, but the version I like is,
[02:30:45] To go back to
[02:30:47] before he extracts it into another hook.  Because he goes through all the process,  and I like how he explains it.
[02:30:54] and explains how you can use refs for effects, but essentially
[02:30:57] Before he extracts the hook...
[02:30:59] Yes, this is the version that I think is the most illustrative.
[02:31:02] of
[02:31:03] of where we ended up with the hook.
[02:31:06] Um
[02:31:07] Now, don't get me wrong.  I think useEffect is actually...
[02:31:10] fairly well designed hook.
[02:31:12] because
[02:31:13] When used...
[02:31:14] independently on its own
[02:31:16] it cleans up after itself. I know that's kind of like a funny thing, but like,
[02:31:20] If you ignore all this other noise...
[02:31:22] Inside the effect you create the thing that you'll get rid of later. So it only lives inside this zone. It keeps it
[02:31:31] It keeps it tight.
[02:31:32] essentially.  And because of that,  um,
[02:31:36] you don't need refs. Once you're inside this escape hatch, you don't have to worry about the outside world.
[02:31:41] Until you do.
[02:31:42] That's where the complexity suddenly triggers on. Because suddenly, if you have two use effects that need to communicate with each other, you need a mechanism for them to talk to each other that isn't stateful because you don't want to re-render.
[02:31:54] And
[02:31:55] Again, this makes a ton of sense.
[02:31:58] But you have to know that, or understand that.
[02:32:05] Yes, I think this is dead on, right?
[02:32:10] It's a primitive, so you're supposed to compose on top of it, right?
[02:32:14] Like,
[02:32:16] Things like...
[02:32:21] The most egregious thing about using useEffect, and I could go over this again, but I think Theo already did this on stream, it's kind of obvious, is basically using it to synchronize state.  You should derive data where you can. Like, state should derive from other state, you should use memos if they're expensive, but you shouldn't be using effects to write to state, because in React,
[02:32:39] That's basically, you can pretend it compiles to
[02:32:42] rerun component. Every time you write the state it's like rerun component inline. So  if you start doing that, if you have something that
[02:32:49] runs
[02:32:50] Because something causes the component to run.
[02:32:53] And then you get to another point, it's like, "Rerun me again." You're double rendering.
[02:32:57] at least every time. And that's the first one. The second one actually isn't bad. Stuff like async,
[02:33:06] is internally how you would do it.  But I think...
[02:33:10] I actually don't actually have a huge problem with useEffect for doing async fetching it. I mean, that's what
[02:33:14] something React query is using under the hood. There's an argument that you should always use  higher level primitives if they're available.
[02:33:20] But like, generally speaking,
[02:33:22] UseEffect is doing its job there.  But as I said, the problem is people aren't used to thinking about...
[02:33:31] their apps as pure graphs.
[02:33:34] Right?
[02:33:35] right? Like, like, and this is not a re that's funny. This is one of those things that's a solid  and a react actually have in common. Um, surprisingly is we both want you to derive data  and have a distinction between things that are effectful and pure. This is actually really good
[02:33:50] UI design
[02:33:52] uh,  pieces that react had kind of discovered over time.  Um,
[02:33:57] But yes, there was definitely this sense of
[02:34:01] You know, it started, as I said, with this article where people are just like, this is crazy.  You tell me to set an interval.  I need to add, like, I started with something that looked like you'd be top level and,
[02:34:10] Maybe I would add an effect.  That makes sense.  Now I need a ref...
[02:34:14] I need to extract a callback, I need two effects, and I don't even know what this thing is doing anymore.
[02:34:20] Like,
[02:34:21] That, that, but you know,
[02:34:23] How often do you hit this in real life? Maybe you don't hit it. Like who wants to use that interval? So this kind of passed.
[02:34:29] But at a certain point, people hit it for real.  And I think this is probably...
[02:34:35] the...
[02:34:36] This was like six months later, but this is probably the article that was kind of
[02:34:41] pushed it forward. Um,
[02:34:44] and they're saying that React became a black box. Basically, they're concerned that React became
[02:34:48] magic, essentially.
[02:34:51] You know, React Expert says, "Check out this cool thing we do with hooks.
[02:34:55] React core teams, this will break for the credible subtle reasons.  Oh, you're right.  Honestly, this was more intuitive with classes.  Don't worry.  It'll make sense.  You just need to clearly configure your brain.
[02:35:03] And to be fair,
[02:35:05] to react.
[02:35:06] Rich Harris made this graphic. This is, this is, this is, but we, we, we did see these conversations. These were like,
[02:35:13] The real conversations like this did happen out in the wild, you know, on Twitter, even if
[02:35:19] Rich did completely manufacture this graphic.
[02:35:23] Um,
[02:35:24] But...
[02:35:26] Yeah, not many folks are talking about it publicly, perhaps fear for embarrassment or their lack of knowledge.  But recent Twitter banter over the last few months, as well as conversations I've had with a handful of thought leaders,  have made it clear that very, very few people in the community understand how React works now.
[02:35:41] So this is kind of...
[02:35:44] interesting because we've shown an API that is so well designed, makes a ton of sense, solves all the problems,
[02:35:51] And
[02:35:54] Get
[02:35:57] there's this gap here. How do you deal with this gap? And as I said,
[02:36:01] This was a very nice way of talking about kind of wrapping head around the concurrent changes.
[02:36:07] um
[02:36:08] Other people have been pushing stuff, like Creative Xstate, David Corsett, talking about  use effect.  Use effect has been kind of the struggle here.  And the funniest thing is, use effect shouldn't even be something that we talk about.  Just like, oh yeah, we did the side effect.  It's like...
[02:36:24] Somehow
[02:36:26] Use effect.
[02:36:27] became the thing that everyone decided to build around. And I get it.
[02:36:33] And I said, I have this problem with solid a lot too.  And it comes back to this knockout mentality, actually,  where at a certain point you're like,  I got state and I want to update that state.  So you're just tempted to just write all of these,
[02:36:44] computations and in your head you're just like, I see that I wrote a function that will run when this changes and it will update my state.  So you can break your logic into this kind of thing where you're like, okay, here's my data, here's my updates.
[02:37:00] And
[02:37:00] and
[02:37:02] It's just easier to kind of write it that way, even though it's not good.  And that's essentially it. UseFX, as we mentioned, shouldn't be the focus,  but yet it keeps on being in. And it's kind of the same reason why...  It's related to the reason why people are into stuff like fine-grained,  like solid and view and not RxJS.
[02:37:21] RxJS
[02:37:22] If you've ever written anything in RxJS...
[02:37:25] I'm going to throw this out here.
[02:37:27] I am actually quite familiar with RxJS, and it's many, many operators.  But what I wanted to show here, if I can show just a simple operator expression, is...
[02:37:38] Yeah, not subscribe. I need something a little bit...  Yeah, here we go.
[02:37:41] from event
[02:37:42] pipe scan this thing
[02:37:45] subscribing thing
[02:37:47] Right.
[02:37:48] So,
[02:37:49] They're using a piping syntax that puts this to this to this,  and they're applying the scan operator as a way of basically taking the input value  and feeding it back through again.  It's kind of like a reduce operation for those...
[02:38:01] who might not be
[02:38:04] familiar and
[02:38:05] Essentially, you can take something kind of imperative, like an event listener, and then  suddenly have the ability to go, "Okay, take a click event, pipe, throttle it, scan."  You can describe stuff incredibly.
[02:38:16] tersely with
[02:38:17] as a matter of like
[02:38:20] pieces, like the fine pieces with RxJS. You can basically take any kind of idea and then find
[02:38:26] the like
[02:38:27] what primitives form that idea.
[02:38:30] and make like
[02:38:32] make it a function of some known operation.  That's what RxJS does for you.  But you know what the challenge is?
[02:38:38] What if the wiring needs to change?
[02:38:41] There are operators for that, but things start getting a lot more complicated because with RxJS it says push. You start from the event and you push, push, push through this chain.
[02:38:50] Right. And if
[02:38:52] if the structure changes...
[02:38:55] It's hard to deal with that. React is almost the opposite. It's like pull, pull, pull, pull, pull.
[02:39:01] like essentially,  um,
[02:39:04] We're gonna rerun and then we're gonna just get the the piece as we need it and
[02:39:09] as we've requested.
[02:39:11] And
[02:39:13] In both of these cases,
[02:39:17] you're part of a system that's already been wired for you.
[02:39:21] And
[02:39:23] you don't have much dynamicism, like,
[02:39:26] In RxJS, you can actually change what the piping is, but largely like in React, it's kind of out of your hands now.
[02:39:32] It's just like, "Okay, this is the component lifecycle, and
[02:39:36] these hooks will get kind of pulled in according to these rules.
[02:39:44] Right. So this is why I wanted to show it, because what the someone once asked Steve Sanderson, Steve Sanderson, the creator of Knockout.  And let's see if I can find it. Knockout versus RxJS.
[02:39:58] And it was in like a...
[02:40:01] Uh...
[02:40:02] Yeah, I'm probably not gonna find that. It's like in a stack overflow question or something and
[02:40:06] Uh,
[02:40:07] He...
[02:40:09] Where was it?
[02:40:11] Yeah, I'm not going to find it. That's fine.  He basically said that what was really cool
[02:40:16] is that...
[02:40:18] In Knockout, you can write things as expressions still.
[02:40:22] Right?  Like, you didn't need to do all this piping thing.  You wrote things as if they were pull.  Right?  Like, you could write your expressions like, oh, in here...
[02:40:34] name to uppercase. So you could basically write the stuff in line in your templates, right?
[02:40:39] And...
[02:40:41] Like the...
[02:40:42] That kind of
[02:40:44] windows into imperative logic is what
[02:40:47] made things nice because sure you could
[02:40:50] If you add a couple more operators on here and you're doing something really complicated this is this this representation is really good  but it like
[02:40:57] I mean...
[02:40:57] Do I have an open code window to show you what I'm talking about?
[02:41:01] Let's say file new, let's do new text file or whatever. Okay.
[02:41:06] If...
[02:41:06] And can I change it to JavaScript?  Okay.  I'm just going to throw this out here just so you can see what I'm talking about.  But like...
[02:41:15] Okay.
[02:41:16] Is it easier to combine two values by saying like name equals first name,
[02:41:22] plus last name
[02:41:25] or you know,
[02:41:26] Thank you. Or...
[02:41:30] Let's pretend something like...  Let's use double count.
[02:41:38] equals
[02:41:39] count times two, okay?
[02:41:41] - Thank you.
[02:41:43] Versus like...
[02:41:45] So,
[02:41:46] Uh...
[02:41:47] From...
[02:41:49] Sorry.
[02:41:51] Some like count.
[02:41:53] dot pipe
[02:41:56] Double...
[02:41:58] *sniff*
[02:42:00] subscribe...
[02:42:03] What?
[02:42:04] Um...
[02:42:11] you know,
[02:42:12] Do something, I guess I'm going to call this one double count out.
[02:42:18] Like...
[02:42:21] My point is like...
[02:42:23] For a lot of people, even if it's like double,
[02:42:27] then subtract 2.
[02:42:30] Right?
[02:42:31] Right?
[02:42:32] dot pipe
[02:42:34] Dot...
[02:42:35] Subtract
[02:42:37] Two, like...
[02:42:38] .
[02:42:40] There's a huge difference in writing your code this way, right?
[02:42:48] and
[02:42:53] I mean, this is not
[02:42:55] This is...  Yeah, you're right, you're right.  Someone's pointing out that I can do this.  I don't actually have to call pipe a second time.  Yeah, yeah, yeah.  Okay.  But...  You...
[02:43:03] Yeah, you get what I'm saying. It's clearer, it lets you represent stuff. But at a certain point, if I'm a developer,
[02:43:10] Like now pretend that this logic
[02:43:13] is in a div.
[02:43:15] Right?
[02:43:17] If this logic's in a div,
[02:43:19] I can just go.
[02:43:21] Okay.
[02:43:24] If this logic needs to be in a div,
[02:43:31] You know what I mean? Like, I have to hoist
[02:43:33] it out into
[02:43:35] double
[02:43:36] count or something.
[02:43:38] dollar sign.  And then I need to...
[02:43:41] Go div.
[02:43:44] Hey.
[02:43:44] Thank you.
[02:43:45] and
[02:43:46] Like, you...
[02:43:48] Everything just gets...
[02:43:49] I actually looked into using RSJX as a reactive library background.  Unless, if you're doing things fine-grained,
[02:43:55] you actually need to
[02:43:58] You need to actually hoist things out.  Otherwise, I could have put it in the subscribe, right?  I could have, like...
[02:44:05] put the div...
[02:44:07] Inside here.
[02:44:09] and
[02:44:09] put, you know, did my stuff in here. And instead of subscribe, maybe I'd be like combine,
[02:44:17] and I pipe a bunch of streams together.
[02:44:22] There is some benefit...
[02:44:24] for being able to express logic in this kind of like, oh, there's just an expression. And
[02:44:30] So use effect lets you change things.
[02:44:33] to write logic like this instead of like this, in a sense. Like when you drive state, it's not bad, but like, like,
[02:44:39] If you are using
[02:44:42] you know, like,
[02:44:43] This is already a memo. This does not take much to
[02:44:47] to kind of go, "Oh, this is a memo."
[02:44:52] Alright next let's put a function here. You can already see that but
[02:44:56] Like when logic gets more complicated with computations, it's a lot easier sometimes to just lay everything out
[02:45:03] in some kind of imperative code block  where you can go, okay,  when the number,  when the...
[02:45:11] when the
[02:45:12] When the subtotal changes, we have to apply this tax and this thing, and it's easier to apply the taxes.
[02:45:19] than to actually have them all be derived.
[02:45:28] But the...
[02:45:29] I mean, that's the whole point of views of it.  To have an imperative escape hatch from React,  it cannot be compared to any reactive logic.  Right, but actually this is a place I say stuff is actually...
[02:45:37] sort of comparable and why people get pulled into it because they see okay, it's much easier for me to express things as simple expressions. So they start just writing these
[02:45:45] expressive blocks and
[02:45:48] treating it like a reactive library because in a sense useEffect feels like a reactive computation. You say what the dependencies are, it feels like a subscription.
[02:45:56] It feels like what goes in here.  UseEffect feels like what goes in here.  It doesn't matter.  This is just a dependency array, this whole stuff in front,  but it feels like what's in here.
[02:46:08] and
[02:46:09] Um...
[02:46:10] This should be the output, but
[02:46:12] -
[02:46:14] Picture using this to feed back in.
[02:46:19] Right.
[02:46:21] Right. You have to shift around, but when you put...
[02:46:25] Sorry, when you give people a place, like a clear place that's like use...
[02:46:30] my logic, that's where they have the tendency to do it. And as I said, I'm not saying it's a good thing. I'm just saying,
[02:46:37] Like that's how we end up here.
[02:46:43] And like,
[02:46:44] This kind of conversation...
[02:46:48] went on for
[02:46:50] Um,
[02:46:51] for quite some time, right? Like,
[02:46:53] Um...
[02:46:55] I actually...
[02:46:56] I...
[02:46:57] I actually had a tweet for a while here because around 2020, I mentioned that, um,
[02:47:03] I noticed what I call a temperature change around React.  And I don't mean, like, at that point,  there was a bit of a Facebook backlash going on,  around the beginning of COVID.
[02:47:12] Um...
[02:47:12] But like where developers are just like,
[02:47:15] rejecting the concepts and the vision of React, like in current mode and suspense.  They're basically like, I don't want these.
[02:47:20] React can build them, but I don't want these. I'm going to keep on using React the way I've always used it. And even frameworks like Preact and Vue, like announcer, like we're not supporting these features.
[02:47:30] Um,
[02:47:31] and everyone was like, yeah, Vue is so awesome. They're not going to do concurrent rendering.
[02:47:36] And maybe that's fine, but it was such a definitive statement that I was like...
[02:47:42] I mean, sure, don't do it.
[02:47:44] Thank you.
[02:47:45] And I understand they had to tell the community who thought that stuff was coming, but like
[02:47:50] I was saying it felt more like a badge of honor or something, right?  And people were just kind of...
[02:47:56] Thank you.
[02:47:56] And I just had enough of it.  I'd seen a bunch of people on Twitter acting like the members of React core were clowns or something for doing this esoteric thing that only matters to meta.  And I'm like, did you guys watch the demos?
[02:48:11] The stuff that Dan presented in that 2018 time slicing demo are real things.  Maybe the type ahead thing you can solve pretty easily with a debouncer.  It'll be good enough.
[02:48:24] I mean, obviously the thing was better. Like, time slicing may be something you don't need to worry about. But those
[02:48:29] That inversion of control, good patterns around data, like skeleton screens, loading states,
[02:48:36] The problem is,
[02:48:37] People at that point
[02:48:39] Didn't see the full picture and they might not even see this picture today, but like this is what makes a
[02:48:46] streaming rendering possible and and all those other improvements are coming down it's it's it's
[02:48:53] I had a chance to sit down
[02:48:56] Um,
[02:48:57] with
[02:48:59] Dan Abramoff and talked to him a bit about it.  And he explained that...
[02:49:03] if we go back to our timeline,  everything started around 2015 because while this framework thing was going on  with,  with react,  you know,  which,  you know,  and where we're sitting,  react was like,
[02:49:15] At Facebook, we're like, okay.
[02:49:18] We think...
[02:49:19] and I'm gonna use a different color here, that GraphQL,
[02:49:25] is the solution.
[02:49:27] They had a real problem with data fetching and distributing data pattern flows, and it was really...
[02:49:33] awkward um when you try and scale it up and you have this desire to make all state local like  they could try using stuff like use query type patterns but they needed stuff far more granular  like to be able to scale like key invalidation is fine but like normalized caching and stuff  actually made a difference so they they basically created um
[02:49:56] Relay.
[02:49:57] around this time period using it internally. This was all brought upon because of the desire to get the feeds on the mobile app, essentially.
[02:50:09] And this is kind of crossed with React Native in terms of...
[02:50:14] motivations.  Because early on, around the 2012-13  period, Facebook  was betting pretty much on mobile web.  They were hoping that  they would be able to
[02:50:26] bet on the web and have a single platform that worked
[02:50:29] everywhere. I don't know if people remember this. They even have like their own kind of
[02:50:34] Um...
[02:50:34] environment, I think, on the phones. It was a while ago. But
[02:50:41] but essentially
[02:50:44] Essentially, they figured out Relay. It worked pretty well.
[02:50:49] But once they'd explored that path, they were reasonably happy, but it was very complicated.  And the question came up around this time, you know, they'll say Relay caps off right on this 2015 line.  What comes after GraphQL? What comes after Relay?  And...
[02:51:06] They already had an answer from the past, like fax.js, which we talked about earlier, and that started
[02:51:12] everything
[02:51:13] that came
[02:51:15] Right? Because...
[02:51:17] If you follow down this line of thought and you're like, what comes after, like, they needed to be able to solve server rendering, they needed to be able to solve, um,
[02:51:30] - Thank you.
[02:51:31] No, the flux, to be clear, was much earlier.  That was...
[02:51:35] like they were already using flux and talking about in 2013-14 i guess to be fair
[02:51:40] We should consider the relay boundary right about here, but
[02:51:45] Like...
[02:51:46] Mm-hmm.
[02:51:47] They'd already been working on GraphQL and figuring all that stuff out. Flux was like
[02:51:54] a direction and something that they strongly believed in.  But that was present probably even before they open sourced it.
[02:52:06] Um...
[02:52:08] So
[02:52:10] Yeah, so I mean...
[02:52:13] Where I'm going here is...
[02:52:16] Suspense.
[02:52:18] you know, where does suspense show up?  Suspense showed up
[02:52:21] Here.
[02:52:25] Hooks showed up shortly after here.
[02:52:33] It's funny, like the order and then finally React 18,
[02:52:36] which is around here.
[02:52:38] came up with streaming, um,
[02:52:42] And
[02:52:43] Somewhere out here
[02:52:46] We got two more ones we're going to have. We're going to have react
[02:52:49] I'm just putting RCs for short, React Server Components.
[02:52:53] And we have...
[02:52:55] Um,
[02:52:55] compiler.
[02:52:57] And to be fair, internally, I'm pretty sure a whole bunch of crap happened in the middle here.
[02:53:02] Right? Like,
[02:53:09] Someone's asking me what I mean by prolific.
[02:53:10] What I meant is...
[02:53:12] like widespread in
[02:53:15] adoption,
[02:53:16] and mindset and mentality before I moved react to out of here
[02:53:21] which is kind of where we've been going recently.  If you look, like, the whole world converges on arrows in React,  both from, and this is like a mindshare perspective.  Like, React basically managed to...
[02:53:33] pull its gravity to pull in the whole universe.  So that's sort of what I was getting at.  It's not, this is more on the like framework,  author, mindshare side, but it's true also  in terms of job marketing, whatever.  React is like a singularity that like, like a black hole,  it just like pulls everything in.
[02:53:51] it's everywhere. I mean, that's the opposite of prolific, I guess, because prolific means  it's like spread everywhere. And I'm saying it's actually more like it just like,
[02:53:58] It's like a gravity well.
[02:54:00] Um,
[02:54:01] But like...
[02:54:04] All of these features actually played together because in order
[02:54:09] for them to get streaming rendering.
[02:54:11] they needed to have suspense.
[02:54:13] Right?
[02:54:16] And
[02:54:17] this is kind of a weird arrow,  but for suspense to really work in the proper way,  they needed granularity with hooks.  And in order to get like,
[02:54:25] this
[02:54:26] And then...
[02:54:29] This is...
[02:54:30] just something else. But what I'm getting at is, this is all part of a bigger picture that's been kind of
[02:54:36] getting put together here.
[02:54:39] and
[02:54:42] It wasn't obvious where they were going until...
[02:54:46] They got there. The funniest thing is like I know this from being work on stuff. You need suspense or something like suspense in the async to do streaming and
[02:54:54] But they didn't tell us about this here because like, what did they release with Spence? What was it like lazy?
[02:55:00] Lazy is like this thing. The other thing that's missing here actually
[02:55:04] and it kind of ties into RSCs is
[02:55:06] data loading primitives.
[02:55:09] Right?
[02:55:10] Like...
[02:55:11] Yeah.
[02:55:11] And
[02:55:13] And as I said, this is sort of the crossroads here.  I'm kind of laying this out here.  So I'm going to create a banner here, which is...
[02:55:28] We are now, I talked about modern React.
[02:55:30] But now we are definitely moving into
[02:55:34] the future of React.
[02:55:37] If you've been following everything so far, I hope...
[02:55:41] it kind of makes sense at least how,  how this whole story kind of,
[02:55:47] plays out together.
[02:55:49] But...
[02:55:51] The thing is,
[02:55:54] The other day,
[02:55:55] Um, let's see, I'm going to go, this probably will come up again on this week in JavaScript.  Um, but I want to pull this out here is Dan, uh,
[02:56:03] asked everyone...
[02:56:05] If...
[02:56:06] If
[02:56:07] asking a question about JavaScript.
[02:56:09] Right?
[02:56:11] And
[02:56:12] I was...
[02:56:12] I asked him, I'm like, are you ever concerned that the level of abstraction we were heading towards in JS frameworks is going too far?  That is hard to keep things in one head.  Should we be trying to mitigate that or is it inevitable and we should be working on shoring up
[02:56:24] the language, essentially. Should we just build better abstractions? And Dan very strongly responded, "It's not far enough."
[02:56:31] At the right level, all things work in unison and complement each other in a deeply intentional way.  Much of the complexity we know now is caused by fragmentation and parts not understanding each other.
[02:56:40] There's a reverse trend for unification and it's,
[02:56:43] Good.
[02:56:44] Thank you.
[02:56:46] So,
[02:56:48] from
[02:56:50] From his perspective...
[02:56:53] The problem is that the abstraction today still leaks.  They've been trying to build all the pieces in the right way.  Like, actually...
[02:57:00] Sorry, there's another piece of this tweet that's actually relevant.
[02:57:03] which is he goes, don't get me wrong, with higher...
[02:57:06] on the abstraction ladder you go, the more ways you can absolutely fuck it up.  And if you get the design right, you can do the things naturally.  They're not even thought possible at a lower level.  This is a big if, but I'm sure
[02:57:17] there'll be progress on this.
[02:57:22] Thank you.
[02:57:25] So...
[02:57:26] What he's he's what he's suggesting here is that
[02:57:31] Um,
[02:57:34] Like...
[02:57:36] like even more ambitious.
[02:57:41] Yeah, this is the whole framework versus library thing.  Like this is a clear trajectory.  Yeah.
[02:57:46] I agree with this kind of
[02:57:49] kind of positioning, but it's more than that.  He's just talking even on a pure,
[02:57:56] abstraction
[02:57:58] level. Um,
[02:58:00] Like, how...
[02:58:02] if they do a good enough job
[02:58:04] shoring up the gaps in the abstraction,
[02:58:07] certain classes of problems just disappear and everything just works really nicely.  It's almost like creating a programming language.
[02:58:14] which you start to understand why things like the compiler and compilation
[02:58:22] Um...
[02:58:23] kind of come into mind here.
[02:58:25] Um,
[02:58:27] because
[02:58:29] How do you...
[02:58:30] finish this story. I actually, somewhere in the chain, someone's like, well, abstractions are
[02:58:34] are a thing, you know?
[02:58:37] You know, like we're programmers, we deal with abstractions all day long. And I'm like, yeah, but at what point
[02:58:43] Does it...
[02:58:44] Um...
[02:58:47] Like...
[02:58:48] Do the escape hatches get too far from what your understanding is?
[02:58:55] Upscape hatches are vital. They're what you need from a design standpoint to be able to account for the things you can't account for.
[02:59:04] But...
[02:59:05] if the model
[02:59:06] gets far enough from the escape hatches
[02:59:09] Like if the distance spans, people no longer feel like they understand how things work.  That's the use effect problem.
[02:59:15] The model had gone far enough from the escape hatch that they couldn't reason about it anymore.
[02:59:22] Your options are to get rid of the escape hatch, like have the perfect abstraction.  Because in a sense, the escape hatch is an abstraction leak.  Yeah.
[02:59:30] Or...
[02:59:31] Um...
[02:59:32] you know, trying
[02:59:34] figure out how to minimize that gap a different way.  Right? That's the thing.  If you go really, really,
[02:59:43] Like, how should I put it? Like, I asked this question, I'm like,
[02:59:47] Picture writing all your code in like C# with garbage collection and all this stuff and then but the only way you could debug your code is using assembly.
[02:59:56] Like, essentially, if something goes wrong and you see sharp code, you
[03:00:00] You can't debug through your C# code, you drop into assembly mode.
[03:00:04] to figure out what's going on.
[03:00:07] Like...
[03:00:08] that would be very painful.  And sometimes working...
[03:00:11] when JavaScript's like that because you write your code in this,
[03:00:14] language, whether it's React or Solid or Svelte, I mean, they aren't all compiled languages. You write your code in your language and then
[03:00:23] When you go to
[03:00:24] something goes wrong and you go to like look at the
[03:00:27] debug and look in the internals, you're in assembly. You're in low-level JavaScript.
[03:00:32] and
[03:00:33] There's a couple...
[03:00:35] trains of thought in there, and that's something maybe that's worth ranting about later. But my point is, Dan and React
[03:00:42] which started as we're just a view library.
[03:00:45] is now saying
[03:00:49] Look, we spent some time there, we've learned the lessons, and now we believe that we can present a better abstraction
[03:00:56] So you don't have to worry about that. That's what he that's what he's saying.
[03:00:59] He's like saying like
[03:01:01] we haven't taken things far enough. We can't get the new stuff coming out soon enough.
[03:01:12] React, yeah, I mean, yeah.
[03:01:22] "Paraphrasing, useEffect can't be reasoned about because it's gone too far from the model. Would you say that it still applies to useEffect intended?"
[03:01:28] Use cases, are you purely talking about how...
[03:01:30] Well, I'm...
[03:01:33] To be fair, I've said that UseEffect was beautifully designed and consistent and made sense.
[03:01:41] But I think...
[03:01:44] I think even in the intended cases, if the gap gets too big, it's still difficult.
[03:01:51] Like even, obviously when people use it unintentionally,
[03:01:54] It's hard.
[03:01:55] But
[03:01:56] Like,
[03:01:58] Yeah.
[03:02:01] at a certain point,
[03:02:03] it's hard to straddle both lines.  Both the lines of like,  this is a simple thing.
[03:02:08] that's easy to explain.
[03:02:10] and actually under the hood that this whole other system is present.
[03:02:14] That was the whole thing.  If you remember the Jared Palmer article where he was saying,  reacts becoming a black box.
[03:02:22] It's because...
[03:02:23] um...
[03:02:24] essentially
[03:02:26] he felt that he couldn't dig into it anymore.  And the truth matters react is the same in a lot of ways,  the same react.  It's always been,
[03:02:33] This is what's confusing. If you're someone who's working on the framework and you're writing the stuff and you're like, okay, this is better patterns, you find good patterns for people and the underlying React is still React.
[03:02:43] How suddenly...
[03:02:45] do we find a place where the perceptions change so drastically?
[03:02:53] Yeah, yeah, yeah, but...
[03:02:56] I...
[03:02:58] I agree with this.
[03:03:01] fundamentally, that's what I said, when I was looking at those examples where people are getting stuck, you're like, well, obviously it doesn't work that way. But I'm more talking about the future React. I think this trend,
[03:03:10] perhaps of getting further away
[03:03:12] from the escape hatches.
[03:03:14] is an inevitable thing. I think React today is walking a line, and that's why some people are very unhappy with it. Other people like it makes sense and they're doing that. But I'm seeing the direction
[03:03:24] of the Arrow...
[03:03:25] going
[03:03:27] further.
[03:03:27] Like today isn't the end of it.
[03:03:30] Right.
[03:03:31] when you start looking at where things are going.
[03:03:35] Um...
[03:03:36] Especially when we talk about the context of compilation.  But I haven't given you guys any context about this, right?
[03:03:43] So,
[03:03:43] discussion before the context is not right.
[03:03:47] Let's talk about
[03:03:49] a few of the things, right?  And the first one,
[03:03:54] is
[03:03:56] React server components.
[03:03:58] This is the first completely like...
[03:04:02] mind bend of things. Right. And in a lot of ways,
[03:04:06] mind-bending very similar to what we saw when...
[03:04:12] Some of these previous announcements. So let's look at this one.
[03:04:16] The next key point is that server components
[03:04:19] let you decide the trade-off for every concrete use case.
[03:04:23] And so...
[03:04:24] If you have some code that does some data fetching and just some preprocessing,
[03:04:29] It makes sense to put those components on the server.
[03:04:32] And then if you have some code that needs fast interactions, respond to input immediately.
[03:04:37] It makes sense to put it on the client.
[03:04:40] But because there is no technological wall,
[03:04:42] and you're within the single technology,
[03:04:45] a lot of the code can actually be shared
[03:04:48] And we expect that the majority of components
[03:04:51] will be shared components.
[03:04:53] that can run both on the server
[03:04:54] and on the client.
[03:04:56] And for example, if you're developing something like a content management system,
[03:05:00] where you have some kind of articles
[03:05:02] It makes sense to render those articles
[03:05:05] on the server.
[03:05:06] But then in the admin panel, where you're able to edit them, it makes sense to render them on the client so that you can preview changes immediately.
[03:05:15] And so this is what being in a single paradigm and unifying client and server gives us.
[03:05:24] The last thing I want to recap from Lauren's demo
[03:05:27] is that server components let me create
[03:05:29] User interfaces that feel modern and app-like
[03:05:32] but the way I write them kind of reminds me of building an old-school web page.
[03:05:39] So what I mean by this is, here's the search results server component.
[03:05:44] that accepts search text
[03:05:46] as a prof,
[03:05:48] and
[03:05:49] I don't really need to think about how exactly
[03:05:52] the client-server interaction happens, instead I can focus on
[03:05:55] describing the UI that I want to see.
[03:05:58] And in this case, I want to see the search input.
[03:06:01] and a list of results.
[03:06:03] And that's it.
[03:06:05] And so the search input here is a client component.
[03:06:08] that has its own state,
[03:06:10] but it also triggers a refetch
[03:06:13] of the server tree with the new search text.
[03:06:16] And so we're back.
[03:06:18] In the search results,
[03:06:19] server component, but this time the search text is different.
[03:06:23] And so we're going to give the new results
[03:06:25] uh and we're going to emit uh
[03:06:28] A list?
[03:06:30] But in the client, React is smart enough to figure out
[03:06:34] Uh, do only...
[03:06:35] do the parts, to only update the parts they changed.
[03:06:38] So in this example, it's the list itself that might have changed, right?  So we might have had, we might insert some new DOM nodes.
[03:06:47] for new search results and remove some of them or maybe update them.
[03:06:51] Uh...
[03:06:52] But it's smart enough to understand that the search input has not changed.
[03:06:56] Because it's in the same place.
[03:06:58] So it doesn't destroy its state.
[03:07:01] and
[03:07:02] It's really curious what kind of features you can build on top of it.  Yeah, I mean...
[03:07:07] Dan does go on a bit more here. I was trying to find a good clip for this one. It was a little bit harder. Like Lauren's demo was really good.
[03:07:14] But
[03:07:15] I think this one's one that's been harder to demo.  The key part that I was trying to get at here  was that it's a server-driven model.  It feels like an old PHP or Rails app.  And...
[03:07:26] Um,
[03:07:27] It's funny because React through Next, they mentioned actually, I think, someone here that they're like,
[03:07:33] They straight up mentioned that they're working with Next.
[03:07:36] users and people who don't use Next.js.
[03:07:39] Right.
[03:07:40] about how they're working on this model, but
[03:07:44] you know it actually has a lot of the same motivations and stuff that you might have found  you know in something like Remix.
[03:07:50] Except React core team has been building, has been working on this thing.
[03:07:55] for ages. This whole story is them writing their own version of Remix. And then at the  same time, I showed you that talk with Ryan Florence back in 2015, where she came up with  the idea of Remix. Basically, it's like the same timeline. The only thing is we have two  competing approaches on it built on top of the same framework, which is really interesting.
[03:08:14] Um,
[03:08:15] But...
[03:08:17] Yeah, some people are talking about... Yeah, they don't reduce the size of React DOM.
[03:08:23] But, like...
[03:08:25] if you use Astro+React it also doesn't reduce the size of React DOM so to speak.
[03:08:31] It's about scaling at a different point, right?
[03:08:36] Like...
[03:08:37] React server components let a React app flatline, essentially,
[03:08:42] to a certain degree, where they can basically...  Yes, the initial...
[03:08:48] cost upfront.
[03:08:50] is higher.
[03:08:51] than something else, but
[03:08:54] Like...
[03:08:54] I mean, you know how this works, right?  Like, if you got, like, a graph or something, right?  Like...
[03:09:03] Ah.
[03:09:04] She is black.
[03:09:09] A typical React app...
[03:09:13] is gonna like start up here somewhere
[03:09:16] And then it's going to...
[03:09:18] go like this, right?
[03:09:21] And then
[03:09:24] view
[03:09:25] might start about halfway down,
[03:09:27] and also basically
[03:09:29] do the same thing, right?
[03:09:31] And
[03:09:32] Uh...
[03:09:34] Solid.
[03:09:35] and Preact, I'll use Preact Purple here,  'cause, oh no, actually sorry, that was view.
[03:09:40] solid and pre-act,
[03:09:42] Might...
[03:09:43] Do
[03:09:44] something like this.
[03:09:46] and also basically be about the same thing.
[03:09:49] Um,
[03:09:51] So it gets felt in here. No, sorry.
[03:09:53] keep on changing it too early.
[03:09:55] Get svelting here.
[03:09:58] Maybe that's orange. And they'll start like down here and do something like
[03:10:02] this
[03:10:03] And then...
[03:10:06] Finally,
[03:10:11] Finally, um...
[03:10:14] something like
[03:10:16] What should we make React Server components?
[03:10:20] I don't know.
[03:10:21] maybe a different...
[03:10:23] blue
[03:10:24] React server components are kind of like
[03:10:28] Like...
[03:10:30] Like this.
[03:10:31] Um...
[03:10:36] They actually start above React.
[03:10:38] But they're kind of like...
[03:10:40] Like that.
[03:10:45] The line gets way more shallow. These aren't showing up enough.
[03:10:52] Uh...
[03:10:53] But yeah, I don't know.
[03:10:56] That's...
[03:10:57] That's the thing.  People are asking Marco and Quick.  Well,
[03:11:03] To be fair...
[03:11:06] Today,
[03:11:08] Uh, whereas Quick-- Quick will be like another purple--
[03:11:12] One...
[03:11:13] Quick is kind of like...
[03:11:17] Here.
[03:11:19] But maybe-- it's hard to tell-- maybe a slightly flatter line  than React Server Components?
[03:11:26] and then
[03:11:28] Marco, I'll use the orange.
[03:11:30] is like...
[03:11:32] here
[03:11:35] Marco six, yeah, it's about, it's like there.
[03:11:45] To be fair, okay, I actually have to change the quick line a bit because...
[03:11:49] The...
[03:11:50] I'm making an assumption here that you're going to need all the JavaScript.
[03:11:54] The problem with being able to show something like...
[03:11:58] Quick.
[03:11:59] or anything with lazy loading like Astro,  is they could also be like,  instead of this straight line,  they might draw themselves as like...
[03:12:09] some steps.
[03:12:10] Like they might be like
[03:12:12] They might be like,
[03:12:14] We actually...
[03:12:16] We actually are like a bunch of steps.
[03:12:19] So it's hard to draw quick,
[03:12:21] on a line like this because they might start
[03:12:24] from...
[03:12:27] from
[03:12:28] here.
[03:12:31] Damn it.
[03:12:32] Stupid thing, just get me out of here.  They might like start here at zero,  and they might just go hop, hop, hop, hop.  It's hard to draw something with progressive thing.
[03:12:45] Right. I mean,
[03:12:49] It depends on how scale you're, how interactive you are.  Like this is not, this diagram has...
[03:12:56] a limit
[03:12:58] to like how much I can show because if the app's super interactive like
[03:13:02] You, like...
[03:13:03] this bar is going to go up the more interactive. If it's not interactive, it's almost a flat line
[03:13:09] But if it's interactive, it goes like this. And to be fair, something like Marco also has the zero step.
[03:13:15] Like here.
[03:13:16] So like, but you kind of get what I'm getting at.  If, if, if I'd say if your site is mostly static,
[03:13:23] This is...
[03:13:24] like has a lot of static stuff, this is what it looks like.
[03:13:29] Um...
[03:13:31] and
[03:13:32] But if the stuff gets more dynamic...
[03:13:36] the whole graph tilts a little bit, where these ones get steeper
[03:13:41] I guess these ones fix rate.  This basically scales.  The flatness of the line scales based on interactivity.
[03:13:52] Yeah, yeah, so I'll try not to take that as an insult, but...
[03:13:59] Um.
[03:14:00] This one is definitely a challenge in terms of
[03:14:05] being able to like
[03:14:06] properly depict
[03:14:12] so
[03:14:15] Yeah, in any case, just kind of...
[03:14:20] Yeah, it's difficult.
[03:14:23] to
[03:14:24] to kind of
[03:14:26] Yeah, we chandited way, way hard just now into this.
[03:14:31] But
[03:14:32] Yes, with server components,
[03:14:35] At a certain point...
[03:14:37] Like if you're here
[03:14:39] It...
[03:14:40] If you look at our original line, here React and Solid
[03:14:44] Reacts over coins and solar are at the same size.
[03:14:47] The amount of this matter just melts away to a certain degree.  When you're over here, when the sites are smaller and especially static,
[03:14:56] Like, take any of these, like...
[03:14:59] If you're a static site,
[03:15:01] You might not ever
[03:15:03] get past
[03:15:05] this line, right? You might never get past there, at which point
[03:15:09] You're like, you're kind of hard pressed. You're like, why am I just not down here somewhere?
[03:15:14] Right?
[03:15:15] But over here,
[03:15:17] Yeah, I mean...
[03:15:19] Anyway.
[03:15:21] So yeah, let's get back around. So it's the server components.
[03:15:26] But that wasn't the takeaway I wanted you to get from server components. I was answering the question. The takeaway from server components is actually
[03:15:34] that
[03:15:35] Um...
[03:15:37] See if I can find it.
[03:15:40] They talk about reducing code size, but it's more of that...
[03:15:45] It's a server model.
[03:15:47] And this is important for our graph
[03:15:49] here that we've been drawing because
[03:15:52] In our last zone here on the framework side, if we go into
[03:15:57] what do we call it, 20...
[03:15:59] 22
[03:16:01] and beyond.
[03:16:02] I don't know. Let's just leave it as a dash. If we get into this zone,
[03:16:08] Thank you.
[03:16:10] I love how we have React 2 here thing,  but I think we actually end up with
[03:16:18] Um,
[03:16:20] if we get into this zone,
[03:16:23] It's funny, I didn't actually put Marco on the grid, and I probably should. Let's put Marco here, because no one cared about Marco back here, so they're kind of on their own over here.
[03:16:32] And Marco got influence from...
[03:16:36] some old server technology that you're not going to find anywhere.
[03:16:41] And over time, Marco did...
[03:16:43] Oh, f-
[03:16:45] Sorry.
[03:16:45] - Thank you.
[03:16:46] borrows stuff from react.
[03:16:48] But then...
[03:16:51] If we get here...
[03:16:53] We now have...
[03:16:55] Marco six
[03:17:00] Quick.
[03:17:04] RSCs
[03:17:06] React server components.
[03:17:08] or React 3, whatever you want to call this.
[03:17:14] It really is React 3, to be fair.
[03:17:17] Um...
[03:17:20] and
[03:17:22] We have...
[03:17:23] View four.
[03:17:26] Maybe this...
[03:17:27] I don't know if Vapor is going to become Vue 4.
[03:17:30] But like...
[03:17:31] I'm not talking about actual view 4, I'm talking about conceptual if they go this way.
[03:17:37] And then we have Svelte 4.
[03:17:41] Right.
[03:17:43] And
[03:17:44] Thank you.
[03:17:46] It's like...
[03:17:50] *phew*
[03:17:54] Thank you.
[03:18:08] This is controversial.
[03:18:10] But I'm going to argue that if not Marco, they're pointing at the same thing Marco was pointing at.
[03:18:16] Okay.
[03:18:17] Like this goes way back over here.
[03:18:19] Um...
[03:18:22] Zoom.
[03:18:31] and
[03:18:37] React 4...
[03:18:38] My understanding with Svelte 4 is they're actually going to add fine-grained stores.
[03:18:42] We'll see what else they do.
[03:18:44] Um...
[03:18:47] But this is...
[03:18:49] This is sort of...
[03:18:51] How
[03:18:52] I view things.
[03:18:54] which is interesting.
[03:18:57] Yeah, and actually write solid too. It should be in here too.
[03:19:02] Solid 2 might be like...
[03:19:04] here. Solid 2 might look like this, actually.
[03:19:07] *sniff*
[03:19:08] I don't know where these other ones come, but Solitude's
[03:19:11] Is it the, like, this is the inbreeding here, right?
[03:19:17] *laughs*
[03:19:19] *sniff sniff*
[03:19:20] *laughs*
[03:19:24] Thank you.
[03:19:24] One of the cool things I'm noticing is Solid is actually
[03:19:27] Oh, actually, and sorry.
[03:19:28] React 3 like if we assume we haven't talked about the compiler. It's gonna take some Svelte and
[03:19:34] So we're actually seeing...
[03:19:37] Um
[03:19:38] Solid's actually becoming
[03:19:40] a bit of a new...
[03:19:41] heat point the same way React was back here.  React is still a hot point here, and Svelte's got a bit of attention too, but you can actually see
[03:19:49] um,
[03:19:51] And I've talked about this before.  The reason Saul is getting inspiration here is because the move away from the component  model was our, our innovation.  Yeah.
[03:19:58] Right.
[03:19:59] Um,
[03:20:00] And then...
[03:20:01] Quick and Marco realize it for real, View Vapor is going to be kind of similar on to that side.
[03:20:06] React, funnily, if you notice of all the 2022 frameworks that are plus frameworks here,  React is the only one not pointing at solid.
[03:20:15] Um,
[03:20:17] It won't so
[03:20:20] This is sort of...
[03:20:24] What I was what I was getting at earlier. It's very obvious to me that
[03:20:30] um react won't borrow from won't borrow from solid
[03:20:34] where Svelte 4 and Vue have already talked about how they intend to borrow from Solid.
[03:20:41] It's a schism, right?  Yeah, I showed this on the--
[03:20:44] on the other side of things when I did the last stream.
[03:20:51] Yeah, so this is how
[03:20:55] How I...
[03:20:56] I kind of
[03:21:00] Yeah, this is sort of how I kind of see things. I actually think in reality,
[03:21:04] So like if I kept playing this this graph forward,
[03:21:09] A little bit.
[03:21:10] um
[03:21:11] I actually...
[03:21:12] think that
[03:21:15] that like...
[03:21:17] We already see Svelte.
[03:21:18] and React converging here, and we actually see
[03:21:23] I think Marco and Svelte are actually going to kind of converge a bit.  And,
[03:21:28] Um, yeah, we might end up with different flavors of mostly two different approaches. So, uh, we're gonna have to see where that goes.
[03:21:36] This goes beyond the scope of this.  We're talking about React today.  This is very...
[03:21:41] hypothetical, but what I'm talking about is we are seeing, I want to implement the numbers because we are seeing
[03:21:47] a new
[03:21:48] generation here.
[03:21:50] Which is interesting because...
[03:21:53] Two wasn't that long ago. Especially in Vue's case, it feels like we're like,
[03:21:57] As soon as we get something new with Vue, we're on to the next thing. It just changes.
[03:22:01] Um,
[03:22:07] Yes.
[03:22:08] Yeah.
[03:22:09] It's kind of interesting.
[03:22:12] And it's, it's, it's, it's why I have such a weird view.  And I like sometimes might sound dismissive and calling certain things superficial, but
[03:22:19] um,
[03:22:20] But yeah.
[03:22:22] But you can see, I mean, if you really want to take away, you can see all the...
[03:22:28] like...
[03:22:29] convergence points.
[03:22:31] If
[03:22:32] I haven't written it in here yet, but it's very obvious to me.
[03:22:36] that Angular isn't dead.
[03:22:38] We're going to see Angular...
[03:22:40] I mean, there's already been an Angular 3.
[03:22:43] but we're actually going to see
[03:22:44] Angular.
[03:22:45] three for reels.
[03:22:47] That's what's been going on over there. And they're actually looking at adding a reactive library and how to handle reactivity.
[03:22:55] Um...
[03:22:57] This is...
[03:22:59] It's funny.
[03:23:01] If you look at this graph,
[03:23:03] Oh, there was no Angular 3?  That's hilarious.
[03:23:06] If you look at this graph,
[03:23:09] Um,
[03:23:11] Where do the paradigm shifts happen?
[03:23:14] This is my thing. Victor is right the history.
[03:23:20] We'll see where things converge in the future, but
[03:23:24] the hottest points on this graph
[03:23:27] at least not from the usage, but from the framework author's mindshare perspective.
[03:23:34] The hottest points on this graph are
[03:23:36] Definitely.
[03:23:37] right here
[03:23:39] That is a freaking hot point.
[03:23:41] Right?
[03:23:42] And if I extend it fact,
[03:23:44] This was a hot point too.
[03:23:47] Um, to be fair.
[03:23:48] I don't have enough arrows going back to jQuery and all these guys.
[03:23:52] This was a hot point.
[03:23:57] I think this is a hot point too.
[03:24:00] I'm just throwing it out there.
[03:24:11] I mean,
[03:24:12] Yeah.
[03:24:18] Thank you.
[03:24:22] So, I mean, but today we're not actually talking about Solid.  I just wanted to show that we are getting into the next iteration of things.  And this is going to be super exciting here.
[03:24:35] And the one line that I haven't explained yet is the Reactis felt line.
[03:24:41] So I got one more video clip for you all today.  Jack is still learning at practicum to become a data scientist, but already receives...
[03:24:50] I want to talk about REACT.
[03:24:54] and memorization.
[03:24:56] Here, I have yet another Todoist.
[03:24:59] You know, as JavaScript developers, we just really, really love to do this.
[03:25:04] Thank you.
[03:25:05] So,
[03:25:06] We enjoy the simplicity of the React code here,
[03:25:10] Thank you.
[03:25:11] Two, we open up the DAB tools and we realize
[03:25:15] Whatever we added to do,
[03:25:17] with Taco with to do, all the other to do is actually getting re-rendered as well.
[03:25:22] The batch here shows how many times each to do has been re-rendered.
[03:25:28] So fix this, what we usually do is to wrap the to-do component and re-app the memo.
[03:25:36] But don't forget,
[03:25:38] The handle change is recreated on every render,
[03:25:41] So we better also grab that and use callback.
[03:25:45] Now, when we add a to-do, we toggle a to-do,
[03:25:50] No other to-dos are getting re-rendered.
[03:25:52] That's fixed.
[03:25:54] but
[03:25:55] This is going to be a moving target as the app scales up.
[03:26:00] So later, we want to build an even better to-do list.
[03:26:04] First, we want to pass down visibility prop.
[03:26:07] So we can use it to call getFilter functions to filter our to-do list.
[03:26:12] Okay.
[03:26:13] Then, we need a second prop named ThemeColor so users can pick a color to theme the user interface.
[03:26:21] Thank you.
[03:26:22] If we try this code out,
[03:26:24] It works.
[03:26:26] but the app feels pretty laggy and slow when we're picking color.
[03:26:33] And the reason is that
[03:26:34] Changing theme color will re-render the BlazingTodoList and TodoList, which will eventually call the GetFilter function again and again.
[03:26:44] If we pay attention to the zoomed-in number here,
[03:26:48] It's been executed about 200 times.
[03:26:52] Okay.
[03:26:53] I'm going to pause it there and skip forward.  I think that's...
[03:26:59] Like, this is like the...
[03:27:02] The like...
[03:27:04] - Thank you.
[03:27:05] Um...
[03:27:06] that's kind of like the point to it.  He jumps ahead and he's like,  I love this.
[03:27:11] Like because I mean it's a real pain here, right? People are like what is this? But the truth of the matter is I
[03:27:17] He was like, what if you could
[03:27:19] basically
[03:27:20] Worry about accidentally breaking the memorization.
[03:27:26] Okay.
[03:27:27] The community have to think about what should be the best practice of using React now.
[03:27:33] Sorry, I've got to jump even further ahead.
[03:27:34] So he's talking about DX versus UX and all this stuff. And basically he's like, you don't have to make the trade if you use a compiler. So he builds by hand here. I'm just gonna skip ahead. You can kind of see it like this. Basically, if you ever, it's a little bit different. But if you've ever seen Svelte, it's actually a lot like this, where he has kind of hoisted all these things into a slot, like these array positions, where every time it re-renders, it knows where to put the thing.
[03:27:58] And,
[03:27:59] Essentially, what's really cool about this is
[03:28:02] Yeah, it's a lot of code that gets generated, but what it means is
[03:28:06] You don't get the...
[03:28:07] you can write the code
[03:28:10] kind of like this, where there's a used state
[03:28:12] an assetter call, but he got rid of the need to write memos because essentially...
[03:28:18] React could look at the structure of your code and
[03:28:22] Um...
[03:28:23] Figure out...
[03:28:24] how to best execute it based on memorization rules.  And this ties in,
[03:28:32] The reason I want to point this out is it's tied into something Maple was saying a bit earlier.
[03:28:36] Um,
[03:28:37] Because when I was talking about escape hatches and use effect...
[03:28:42] If React is now magically
[03:28:45] doing this
[03:28:46] Right?
[03:28:47] If React is now magically, I'm gonna actually keep this big on the screen.  I'm just gonna add myself back on here.
[03:28:53] Yeah, if React is magically doing this for you,
[03:28:57] How do you reason about how the component updates?
[03:29:00] Like, look at this component. Think about it in the sense
[03:29:03] that
[03:29:04] Um...
[03:29:06] Only...
[03:29:07] when the filtered list changes, do we actually update the map?
[03:29:12] If you update the theme color,
[03:29:13] It doesn't update.
[03:29:15] I don't know if enough people actually sat and stopped and looked at this example and really sat there.
[03:29:21] If you think about things in the way React works and it runs top down,
[03:29:25] Can you?
[03:29:27] Figure out when filtered reruns again.
[03:29:31] Can you make sense of it?
[03:29:34] Like you're like, okay, well, if I'm running this function, I call get filtered, like this isn't a hook.
[03:29:39] it should run every time.
[03:29:40] But,
[03:29:41] With this compiler, it doesn't.
[03:29:46] I was working at Marco six and we hit this exact problem. We were sitting there and we're like we're like I
[03:29:51] Does it make sense to think of things as top-down renders again when
[03:29:55] on any re-render, only parts of the code re-render.
[03:30:00] Right.
[03:30:00] The truth matters.
[03:30:01] Svelte
[03:30:02] is like this. They have a component that runs top down essentially in its update function.
[03:30:07] They separate update from create, but essentially they rerun the component, except because of heavy memoization, only certain things update.
[03:30:13] And when we were working on Marko 6, it was like the same thing.
[03:30:16] even though we'd broken things down even more granular, almost like solid level, whereas on the reactor graph,
[03:30:22] it became incredibly difficult
[03:30:25] to actually think of this as something that runs top-down.
[03:30:31] Well,
[03:30:33] Mm-hmm.
[03:30:34] That's the question, right?
[03:30:37] If you seal the abstraction, if you get all the way here,
[03:30:41] Maybe it's fine, but you have to think of a new way of describing
[03:30:46] how things change.
[03:30:48] You have to think of a new way to...
[03:30:51] To... to...
[03:30:53] tell people
[03:30:54] what you're doing.
[03:30:55] Because the current model doesn't work and
[03:30:59] in the same way. And when you have a use effect in here,
[03:31:01] Like,
[03:31:02] What are you making? What are you making sense of? Obviously? This is still early days and we don't know what that looks like  but I really want the highlight of
[03:31:09] Under the hood, React is what React is.
[03:31:13] It's not changing.
[03:31:14] It's still re-rendering.
[03:31:16] But...
[03:31:17] what you see
[03:31:20] might be different from what you get.
[03:31:26] Right.
[03:31:27] And
[03:31:29] But as I said, it works with their
[03:31:32] Eight.
[03:31:33] I don't know. I guess I'll leave it open if it works for their model. I have to admit this was the one
[03:31:38] that I didn't see coming. The rest of the stuff, everything else React has done to this point,  like I've completely gone in the line of the model. This is very interesting stuff  and something we're gonna have to reflect on into the future.
[03:31:52] when we kind of think about how to describe this.  And, but the thing is,
[03:31:56] It's already happening.
[03:31:58] Can I show you all something to see what I...
[03:32:01] um, what, to kind of get at what I'm talking about.
[03:32:05] I've got another bookmark here.
[03:32:07] and
[03:32:08] It's a little bit further back, but I want to...
[03:32:11] Talk about this one for a second because...
[03:32:13] I think...
[03:32:14] I think this is- this is it all.
[03:32:16] React's working on rewriting the docs.
[03:32:19] If you're putting that much effort into writing the docs,
[03:32:23] you're probably not going to want to rewrite the docs again so soon.
[03:32:31] And
[03:32:32] you start thinking about how do you find the best mental model to describe to people what's happening
[03:32:37] And
[03:32:39] I don't know if this is where he ultimately landed on.
[03:32:42] But
[03:32:42] I read this.
[03:32:44] And
[03:32:45] I was like...
[03:32:47] Ah.
[03:32:48] You know, like the meme almost.
[03:32:51] What's the first line? "Effects are reactive."
[03:32:53] No one for years used the term reactive to describe React.
[03:32:57] But,
[03:32:58] But React now is starting to use that term to describe what they do.
[03:33:03] And part of this is talking about event handlers' effects serve different purposes.  That's why there's like use event.  This is all fitting into that narrative, which on the side of...
[03:33:10] I think useEvent is brilliant and it was like the missing piece that was kind of needed to kind of direct people where to use it. It's like such a subtle thing, but it like it actually does a lot.
[03:33:20] But,
[03:33:21] More specifically, look at the way
[03:33:23] He describes effects.  An effect reruns after its values it depends on change.  For example, imagine your effect connects to chat room by room ID.  You must include the room ID in your effects dependencies.  When your component is added to the screen, your effect will run,  connecting to the room with initial ID.
[03:33:37] When it receives a different room ID, your effect will clean up, disconnecting from the previous room, and run again.  When your component removed, the effect will clean up one last time.
[03:33:46] In other words, effects are reactive.  They react to values from the
[03:33:49] like props and state, this might remind you how React always keeps UI synchronized
[03:33:54] By writing facts you teach React how to synchronize other systems.
[03:33:58] But...
[03:33:59] You're mentioning how you hope they don't use this word too much, might change the definition.
[03:34:05] But what they're describing
[03:34:07] is reactivity.
[03:34:08] I could have used these in solid stocks.
[03:34:13] He's not talking about components re-rendering.
[03:34:17] He's talking about effects having dependencies, and that's when they rerun.
[03:34:30] That's not actually what's happening under the hood.
[03:34:33] But have they built a successful enough abstraction...
[03:34:37] It seems like that's what people want out of hooks, right? That's what we talked about. So
[03:34:42] is react.
[03:34:43] This is reactivity in the same definition that Svelte's reactive. I often say that Svelte and React are very similar, so it's always funny when
[03:34:49] when you go to the Svelte homepage and they're like,
[03:34:53] the truly reactive framework or something and just like
[03:34:58] Sure. But...
[03:35:02] But like
[03:35:03] If Svelte's truly reactive, then React's truly reactive.
[03:35:08] I think
[03:35:11] it is all reactivity.  It's not worth getting, like, bike shedding over, like, different types of reactivity.  Like, I wrote a whole article about where I was just, like, reacts reactive.
[03:35:18] get over it, right?
[03:35:19] But I want to...
[03:35:22] I think this is...
[03:35:23] This is important though because this is a change in explanation. It's a change in mental model and how they teach it.
[03:35:32] Right.
[03:35:34] blazingly reactive.
[03:35:36] Yeah.
[03:35:37] I, I, that did cross my mind when working on Solvedit.
[03:35:41] marketing stuff.
[03:35:44] Um, but...
[03:35:47] Do you see...
[03:35:48] the narrative, maybe I'm trying to
[03:35:51] put too many pieces together.
[03:35:55] But between what Dan said...
[03:35:58] earlier.
[03:35:59] between this
[03:36:01] between our whole graph here
[03:36:03] of what's going on here.
[03:36:05] RSCs are kind of like their own thing. And that's like, as I said,
[03:36:09] They're dealing with a scaling thing and it's very similar to
[03:36:13] why we use Marco at eBay and Wiz, which led to Quik.  They're attacking both relevant problems, right?
[03:36:22] They're attacking the
[03:36:24] the thing that Quick and Marco set out to do, and they're attacking
[03:36:28] Um,
[03:36:29] ultimately...
[03:36:30] this mental model gap that
[03:36:33] um,
[03:36:34] say Solid or Svelte have recently done a really good job of like
[03:36:38] poking a hole at.
[03:36:40] But...
[03:36:41] The truth of the matter is...
[03:36:43] React is still going to be React Under the Hood.
[03:36:46] so
[03:36:46] When we look at each other and we can kind of go, oh, see some influence and kind of think about it.
[03:36:53] As I said, that's why there's no, there's an arrow from React to Svelte, there's no arrow from React to Solid.
[03:36:58] If you look at the history of React,
[03:37:01] They have never...
[03:37:02] pointed an arrow
[03:37:04] Out.
[03:37:06] Like this,  this felt is the closest they've come.  And that's where this whole reactive talk thing is talking from.
[03:37:11] But they've never been connected to Knockout, like in this chain, anywhere.
[03:37:16] They have...
[03:37:17] fundamentally
[03:37:19] It goes back, all the way back to here,
[03:37:23] You could say that React, like,
[03:37:25] basically improved upon Backbone and Angular.  Like, they actually solved their models.
[03:37:30] Knockout has never been incorporated into React's model. It was the opposite side of the paradigm that they had never had any interest in. And in that sense,
[03:37:39] Solid is the purest version of what Knockout represents today, and that's why
[03:37:45] Um.
[03:37:46] we're all borrowing from each other, we're all learning from each other.
[03:37:49] But funnily enough, out of all the frameworks, React and Solid are probably the least
[03:37:54] Likely like now that I've
[03:37:56] I borrowed from them from the API standpoint to get the,
[03:37:59] the JSX or whatever, the composition,
[03:38:02] we're probably the least likely to actually borrow from each other.
[03:38:11] So, yeah.
[03:38:15] That's a bit of a rant, obviously, on that, but you start kind of...
[03:38:18] seeing that
[03:38:20] There are numbers here, like React 3.  We are heading into a new zone.  And what's really interesting to me is...
[03:38:28] how many of these architectures
[03:38:33] leave their old...
[03:38:35] ecosystem behind because they change what the question is.
[03:38:40] Because they change the mechanics too much.
[03:38:43] Like...
[03:38:43] Are we talking really a bunch of new frameworks all over again, just reinvented?
[03:38:48] Right.
[03:38:49] React Server Components
[03:38:50] being a server model
[03:38:53] kind of like stuff like React Query has less of a home in a certain sense. Like it still works on  certain places but if you think about it in the same way Remix has kind of been like saying oh you  don't need this kind of library.
[03:39:05] Server components actually cover the whole gap. Remix gives you a hint of it. Server components actually succeed at that whole problem.
[03:39:17] This is fun.  Well, yeah, jQuery too, right?  At a certain point, I didn't, like,  if I scale the graph further back  and get into what happened around here,  where around jQuery came out,
[03:39:27] We hit a point of complexity that was almost unreconcilable with the old server technology and people needed a reset.
[03:39:35] I feel like
[03:39:37] we might need a reset.
[03:39:48] I want to challenge this.
[03:39:53] A little bit.
[03:39:56] It's funny because I started lining this up. React never broke the past and they did a really good migration story and that.
[03:40:05] They have changed
[03:40:07] the way you write a React app
[03:40:09] three times now. Like they've... we're only...
[03:40:15] talking, we're only going React to React 2 here, because they've done a really good job in the migration, but hooks,
[03:40:22] is like a different framework.
[03:40:25] The move from React
[03:40:27] pre-hooks to react-hooks,
[03:40:29] and view to view two or view two to view three should have been no larger of an uplift in actual theory the move to view three should have been easier because the reactive primitives the mechanics of them already work the same way they just you wrote them differently I don't know why this was so painful and maybe there's an execution question there but the move from react classes react hooks is bigger than the move from view two to view three from a mechanical standpoint.
[03:40:59] And if you remember before hooks, there was actually class object components back in 2015 time period or 14. You might not remember this, but there was mixins.
[03:41:08] really common pattern. When we moved to class components, we had to ditch the mixins.
[03:41:12] So like,
[03:41:13] The real reason is React...
[03:41:16] in addition to having the officially  supported patterns, also  had lots of
[03:41:22] Like...
[03:41:22] hawks and render props and all these other patterns that emerge and people exploring them. And with such a large ecosystem and most of them not actually being core supported, it felt like a trend, like fashion. And
[03:41:35] Like, it was just all just...
[03:41:38] different flavors of the same thing.
[03:41:45] That's the challenge. When you go through that interaction, that's when you lose it. Angular to Angular 2.
[03:41:51] was such a painful-- was the same thing.  That's where Angular originally lost
[03:41:55] a lot of,  uh,
[03:41:57] of
[03:41:57] like they had the lead, they were the framework and
[03:42:02] they lost that
[03:42:04] Edge.
[03:42:05] when they went from Angular 2 to Angular 3.
[03:42:07] Sorry, Angular to Angular 2.
[03:42:11] Okay.
[03:42:13] Like,
[03:42:14] Sometimes that's what it takes.  It takes...
[03:42:17] not
[03:42:18] the incumbent actually being amazing
[03:42:21] But that when the time came to change,
[03:42:24] the migration was hard and people wanted to just for the sake of it, try something else.
[03:42:29] Because if you're changing to a new framework, you're changing to a new framework.
[03:42:34] There's a bit of that churn that's inevitable when you get to this point in your life cycle.
[03:42:38] Um,
[03:42:45] I honestly...
[03:42:46] This View 2, the View 3 thing confuses me a lot. I'm not part of the View community.
[03:42:51] I... I...
[03:42:52] Personally, when I saw Vue 3, I was like, come on, finally.  Fist pump, like, on the money, like...
[03:42:59] I've been waiting for you guys to do this for five years.
[03:43:01] This is the future.  But I think there's lag in community and people weren't as unified on it.
[03:43:10] like,
[03:43:11] I feel like...
[03:43:14] I feel like there's a lot of other elements there.  And if you talk to Misko about Angular2 Angular 2,
[03:43:22] He still talks about how like
[03:43:25] While it was painful, they did it from their perspective.  They did an amazing job of doing the migration.
[03:43:30] They had scripts, they had all this automated tools to do it.  And like inside Google, they did that lift.  If you want to talk about something being difficult, try and doing it in a huge corporation.
[03:43:42] Like...
[03:43:44] From their perspective, they did an amazing job at the migration.
[03:43:48] But it's different when you're not committed.
[03:43:50] like when you're in these other companies and stuff.
[03:43:58] Yeah, as I said, the funny thing is,
[03:44:01] I don't know if this is going to happen again.  I mean, to be fair with Vue,  if they move to Vapor and that leaves some of the ecosystem behind,  because Vapor is incompatible the same way Solid is incompatible with React,  you might see a bit of that thing.  But in my opinion...
[03:44:16] when you move to primitives,
[03:44:18] you move to longevity.
[03:44:20] That's part of React's secret.
[03:44:22] That's why people were telling us here that, "Oh yeah, React."
[03:44:26] Never broke anything or and which is fair. They didn't really but reacted like never change react completely changed  they just
[03:44:33] I don't know. The move, the hooks was genius. And I think...
[03:44:38] The focus on primitives is how you...
[03:44:42] how you can,
[03:44:43] continue to move forward. I have a lot of ideas on that in terms of migration strategies for Solid in the future, but
[03:44:50] Primitive's
[03:44:52] are your way out.
[03:44:53] Because you can always-- because if your whole system is based on abstractions and primitives, and--
[03:45:00] say one of those primitives changes or gets pulled out of the core, as long as you can rewrite that primitive in the new language and swap it back in, you'll be good enough until you can change to the new pattern.
[03:45:09] Like, it's layers by...
[03:45:11] definition, which means it's completely swappable.
[03:45:19] Okay.
[03:45:19] Maybe that was it. TypeScript.
[03:45:22] Angular was just way ahead of its time.
[03:45:29] No, I can't say yes to that question. Even if Solid handles all the exact same features,
[03:45:36] mechanically there's enough  differences that
[03:45:44] it would be impossible for me to chart...
[03:45:46] The future, so to speak.
[03:45:54] Yeah, I mean, there's so many brilliant parts of React's API and how they worked things in.
[03:46:01] Um...
[03:46:02] It's actually unfortunate on the context side because
[03:46:05] Hey.
[03:46:06] there's like  making the component that's a context  like provider have its own state  causes the whole tree to re-render  and
[03:46:14] you know, like generally causes big, so you don't use it for frequent updates.  If that just worked in a more fine grained way, like,
[03:46:23] When you build a Redux or something, or Jotai or whatever, they use context, well Jotai doesn't necessarily, but the frameworks that use context inject that state, they don't render the DOM tree, they just use a different change management system.  Which now is getting a bit more heat. I've been following the MobX React 18 concurrent conversations and they just keep on going on and on.
[03:46:45] Generally speaking...
[03:46:48] the trick to
[03:46:49] context is not to use react zone reactivity and I think that's where I
[03:46:54] It's one of those gaps on the composition story, right? I mean, it's not a big gap when you compare like say something like Svelte where you actually literally go to Svelte stores like you literally
[03:47:03] pull a switch
[03:47:06] Composition for some reason
[03:47:08] for a short period of time became less of the priority.  And I think that's unfortunate.  Composition is really the most important feature.
[03:47:25] Anyway, um...
[03:47:27] I don't know. This is...
[03:47:29] This is kind of the conversation I wanted to have today around React.
[03:47:34] and
[03:47:35] in that. I wanted to kind of illustrate
[03:47:38] Reacts journey, I wanted to show how their place filled in into the ecosystem and how
[03:47:45] they're continuing to
[03:47:48] not just evolve, but lead innovation
[03:47:51] and push boundaries. And I really want to show that like,
[03:47:54] Throughout they've been consistent
[03:47:57] in their model.
[03:47:59] And they've been consistent about what they...
[03:48:01] believed in.
[03:48:02] So
[03:48:03] It's so hard, I understand, from coming in and being like, oh, yeah, see this, grab this, see this, grab this.
[03:48:10] The one thing...
[03:48:12] .
[03:48:13] especially from this graph you can see really clear that React has been very consistent about, is they actually don't like Solid's model.
[03:48:21] ever since 2010 or 2009.
[03:48:25] Um,
[03:48:26] So,
[03:48:27] I think
[03:48:29] from that perspective.
[03:48:31] we shouldn't be comparing...
[03:48:32] these things in that way. Like,
[03:48:35] They're just like alternate
[03:48:37] models, alternate ways of thinking, and they don't actually overlap.
[03:48:41] Um...
[03:48:42] which is crazy when things can look so similar.
[03:48:52] So, yeah, I mean,
[03:48:54] What strikes me is
[03:48:57] at any point
[03:48:59] when you're that popular, you could have, they could have rested on their laurels, but they kept on innovating. They saw
[03:49:05] where things are heading.
[03:49:07] And it's hard to move the big ship.
[03:49:09] We just talked about view two to view three, right?
[03:49:12] react
[03:49:13] was already taking the steps back in 2015 to ensure their success in 2022.  I'm pretty sure they didn't expect it to be 2022. I'm pretty sure in their mind they're like, "Yeah, 2018."
[03:49:24] You know?
[03:49:24] Um,
[03:49:25] I'm pretty sure that this was like...
[03:49:29] Like...
[03:49:30] Maybe like initially a three year or four year plan and then
[03:49:35] somehow now
[03:49:36] Like the story's not even done yet. We're like seven years into a 10 year plan.
[03:49:42] Right. What started as maybe a three year plan.
[03:49:46] So...
[03:49:49] You know...
[03:49:50] things are still moving forward.  Um,
[03:49:53] And
[03:49:54] I hope
[03:49:57] I hope that people kind of
[03:49:59] recognize, react for what it is, and not just make these comparisons. I feel like
[03:50:08] reacts impact
[03:50:09] you know, in the job market, hiring its impact on other frameworks has made it
[03:50:15] So...
[03:50:17] not just well respected, but so
[03:50:20] fundamental to the language and the way we speak about and understand user interfaces that
[03:50:25] Um,
[03:50:26] It deserves our respect.
[03:50:28] Um,
[03:50:30] And I don't mean that just in like a legacy way because they continue to innovate, but in the sense of like,
[03:50:35] They've got a model.
[03:50:37] And they're working towards it the best way possible.  And that's really, really exciting.
[03:50:48] I feel a little crazy as I'm...
[03:50:52] Yeah, I mean, different amounts of how much framework you want. I think we're seeing more meta frameworks now because of the complexity, but there's always this bundling, unbundling thing.
[03:51:06] So that, you know, that's a big thing.
[03:51:08] All right, everyone. I think it's time to switch to this week in JavaScript.
[03:51:13] Um,
[03:51:14] If not anything else, I've got so many open windows.
[03:51:18] Um...
[03:51:20] But...
[03:51:20] This was an epic...
[03:51:22] conversation. Um,
[03:51:25] And
[03:51:26] I hope everyone
[03:51:28] got some value out of my perspective on these things.
[03:51:31] Um,
[03:51:33] So just give me two seconds as I...
[03:51:36] As I set up for that...
[03:51:39] I don't know
[03:51:42] Um...
[03:51:47] It's funny because I think most of this week in JavaScript for me,
[03:51:51] was...
[03:51:52] um, related to this, which is why it was the perfect topic.
[03:51:58] All right.
[03:51:59] and then duplicate
[03:52:05] Notifications, I just got so many freaking notifications. I was looking
[03:52:10] for my bookmarks.
[03:52:19] That's where we left off.  It's funny because I already talked a bit.
[03:52:23] about this but
[03:52:25] Because this kind of caps off the React thing.
[03:52:28] you know
[03:52:29] people are asking what thought about SunSol and he said, "If we preferred some other model, we'd be moving React to that model. I think we're really big on state immutability and purity because it unlocks things you can't do otherwise, like render multiple virtual trees ahead of time and interpolate." I'm actually going to talk about this conversation and the other conversations on
[03:52:46] Um...
[03:52:48] Yeah, we'll save this for this week in JavaScript.
[03:52:54] Well, thank you.  I think this is definitely one of my biggest live streams.  This is my highest live stream.  I hope people follow and stuff.
[03:53:02] I think there's a lot of good content. Maybe I streamed too long, hidden behind the layers, but it's the kind of stuff that's not into everyone. Someone made a joke the other day about explaining push-pull, and I will do that at some point, probably not on the stream.
[03:53:15] and how it would be a really interesting conversation for 20 people and no one else would care.  And I'm like, "Man, you're describing my stream."
[03:53:24] Like, that's what we do here. We dig into those details.
[03:53:33] Right, yeah. I mean, React does so many incredible things.
[03:53:38] The truth of the matter is,
[03:53:40] it's these kind of characteristics aren't limited to react
[03:53:43] Other frameworks can do the same thing.
[03:53:48] React's component model, what they taught us is why we're here though.
[03:53:51] They showed us that if you...
[03:53:53] can create that right abstraction, you have the ability to do anything.
[03:53:57] To be fair, I feel that way about reactivity, so in that sense I could argue that reactivity taught me that rather than react, but...
[03:54:03] I'm still going to hold that React also taught us that.
[03:54:10] Yeah, am I going to do a photo shoot where I mess with my hair and have a bunch of thumbnails? This week in JavaScript, I've generally been cutting, I'll be releasing, but a topic like this, I don't have an editor, I don't know how to do this, it's just tons.
[03:54:29] "What features React does have and Sol doesn't? Thanks to Stream."
[03:54:35] That's a good question before I get into this. What features does React have?
[03:54:41] Currently...
[03:54:43] I mean,
[03:54:44] The only one I can think of is they have element clone node
[03:54:49] where you can clone a virtual node
[03:54:52] Solid can never really have that.  There's other ways to model it,  but if you iterate over...  In React, you can get VDOM children back  and then iterate over them and then clone them  and then modify the VDOM before it applies.  And to me, it's like a huge abstraction leak.  And even Seb has in the past been like...
[03:55:08] Um,
[03:55:09] I don't.
[03:55:10] I wish we could get rid of this, but solid can't do that.  So if you want to do those kind of patterns,  you have to have components return objects.
[03:55:19] And then...
[03:55:20] kind of do the same thing, but it's ultimately
[03:55:24] somewhere you're gonna have to read those objects and do the rendering. So that rendering will happen in the parent rather than the child. Or you have to use render props and inverse the control.
[03:55:32] But
[03:55:33] Generally speaking, yeah, that's the only thing I think about.
[03:55:36] No, we have currency and time slicing. It's an opt-in, but yeah, we have pretty much all of the existing React features in that sense.
[03:55:45] Um,
[03:55:45] The time slicing is experimental, but I have a whole stream about it because some people were saying like you can't do that without a virtual DOM. Yeah, you can completely do it without a virtual DOM. Check out my stream last December.
[03:55:57] Um,
[03:55:57] We've had that capability for almost a year now.
[03:56:02] Um,
[03:56:04] So...
[03:56:07] So yeah, let's see. Is there any other questions before I can get the banner set up here?
[03:56:13] It's a library.
[03:56:16] Solid server
[03:56:18] Yeah, I mean,
[03:56:20] Yeah, I mean, Astro is amazing.
[03:56:24] Yes, yeah, there we go. We don't have a huge ecosystem, sorry. I was like thinking on technical stuff. You got me like all my technical brain going like, okay.
[03:56:32] What feature? Like, like, and I think React is going to have a few features, like, like, they're working on something called off screen, which Vue has, but I haven't implemented solid. So like, they might get a couple features that I'm not working on or focusing on right now, you know, first and all that. But like,
[03:56:47] Generally speaking, we do a lot of the same stuff.
[03:56:52] Well, yeah, although you kind of have to opt...
[03:56:57] into transitions and suspense and stuff.  So in a sense...
[03:57:02] It...
[03:57:03] is a
[03:57:04] feature like I guess react does a lot of that stuff automatically in the background and
[03:57:08] Um,
[03:57:10] But like...
[03:57:12] I mean, we saw it when he did the concurrent demo. Being able to do that so easily, like the navigation between tabs and holding the state using suspense without dropping the fallback stuff, and with parallel trees, that's really cool. I'd still call it a feature. I think it's kind of cool.
[03:57:32] Yeah, we've been lucky that doing the conversion has been so easy, but mostly because JSX is a battle. But to be fair, there are differences and people
[03:57:43] do get snagged on them. It is a different, very different, different paradigm. So...
[03:57:47] You know, I'm not...
[03:57:49] This isn't about like...
[03:57:51] React
[03:57:52] has a very...
[03:57:54] continued bright future. I really wanted to express on the stream how awesome React is.  I'm glad that people are interested in Solid as well, and I'm glad that I can
[03:58:05] show that a different model can also work.
[03:58:08] But like...
[03:58:10] I mean...
[03:58:11] use what makes sense for you and what makes you happy
[03:58:15] And a lot of times that is
[03:58:17] company risk consideration and a whole bunch of other factors that go beyond the technology and
[03:58:22] React.
[03:58:23] has all the boxes checked. It's an amazing framework.
[03:58:28] Um...
[03:58:30] Although, yes.
[03:58:31] I say that, but at the same time, I'm like...
[03:58:33] People give us a chance.  I would love it.  It's hard to get adoption in this field.  Even a few...
[03:58:41] projects just starting to show the power solid is going to make a huge difference for me personally.  I just wouldn't want that conversation ever to turn into a us versus them kind of thing.
[03:58:53] Yes, yes.
[03:58:54] And
[03:58:55] I've got some talks coming up this fall that I'm going to talk about this where
[03:58:59] People, yeah, it's going to...
[03:59:02] It's actually going to come up.
[03:59:04] I think
[03:59:05] on this week in JavaScript where I actually talk about being a compiler target because
[03:59:11] Like...
[03:59:12] Some people are like, "Oh, why do you care about how you can hoist the state out of components, that demo and control and all this stuff?" Devs are lazy. But the truth of the matter is, you can always build some DX abstraction on top of something. What's important is the fundamentals and the mechanics, and that's what I care about. I want to make sure we have the right primitives and we understand the right core pieces.
[03:59:32] People have already gone and built Svelte-like compilers in top of solid. If that's your thing, go for it. But a lot of times those
[03:59:38] projects hit dead ends because the amount of investment, if you want to go do that, you have to do so much work to actually
[03:59:44] Get there like the writing the compiler might be the easy part, but then you have like the length like I already talked about this typescript  syntax highlighting a whole bunch of things and in fact
[03:59:52] I got to completely confirm with it, but my, my, my, my, my co-worker, Dylan Piercey is  going to come on stream next week.  Talk about.
[04:00:00] Marco and Marco's TypeScript support and tell actually go into detail to explain what it takes to build a language from scratch, like to do the Svelte thing or the view thing. It is a hard amount of work. And he's gone through the whole experience himself of building, designing a language for UIs. And I think
[04:00:18] He really helped us appreciate how challenging it is and also remind me of how glad I am that I didn't take on that effort with Solid and got the focus on the things I wanted to focus on.
[04:00:28] *sigh*
[04:00:29] But to be fair, it's incredible work and I think the output
[04:00:32] of what Marco's doing here is just amazing.
[04:00:36] It'll be worth it in the end, but it is a huge investment.
[04:00:42] Which framework provides the most salaries? I mean, that's obviously React.
[04:00:52] Hehe.
[04:00:54] Will be fun.  Yeah, good.  I'm hoping I'm taking that as a confirmation.  Yeah, no.  Dylan is awesome.  And I think this is a really,  personally, as a framework author,  I think this is a really interesting topic  to kind of understand what the real cost is.  Like the end result with Marco always amazes me.  I do some piece of the experience.  I'm just like, oh, wow, that makes so much sense.  But it's like,
[04:01:15] And it's a lot of hard work to get to that place.  And I want to really kind of celebrate and look at what it takes to build something like that.
[04:01:25] Oh, yeah, yeah, we talked about a lot of this stuff. I'm super happy about that.
[04:01:29] seeing more and more options
[04:01:33] appearing
[04:01:34] Oh, right. How are we doing? This is something we could build.
[04:01:38] I mean,
[04:01:41] I mean,
[04:01:43] Technically no
[04:01:46] But I would...
[04:01:48] I would say Astro isn't
[04:01:51] Always the best solution for certain type of ROMs. You can do it. I don't know if I forgot to share this last week or something. Someone the flutter is
[04:02:00] Online editor for, yes, online editing Flutter.
[04:02:04] is an Astro app
[04:02:06] and the editor on it is written all in solid. So an astro
[04:02:11] Page...
[04:02:12] with
[04:02:13] server or server with a client-side solid single app.
[04:02:17] that is made for editing Flutter.
[04:02:20] I just just.
[04:02:21] Just think about that.
[04:02:23] - Okay.
[04:02:25] Uh...
[04:02:27] Yeah.
[04:02:28] *laughs*
[04:02:30] Yeah.
[04:02:31] Yeah, I mean, comparing these projects is pretty challenging. There's similarities and they do a lot of similar things, but I think one of the big differences of the focus. Astro,
[04:02:40] is
[04:02:41] much on the content side. They have an incredible ability with partial hydration and they can deliver these sites and  especially on the less dynamic side. Of course you can do the stuff like the Flutter thing I just talked about. They're built to handle the scenarios.  The majority of websites, the things where people use WordPress today or whatever, Astro handles that whole spectrum amazingly.  You add some solid or whatever in there and you can do almost anything. Quick and
[04:03:08] you know, is also very good in that range.
[04:03:11] But it's almost like you're underserving it at that point. Like, yeah, you can build your e-commerce site in quick. And that's kind of like where I feel like their starting line is. But where Quiket's interesting is it can scale almost all the way up to a single page app.
[04:03:23] Like...
[04:03:25] and does that seamlessly. That's a very rare quality. I don't know how important that quality is
[04:03:31] Everywhere, but
[04:03:33] And that's where the debate is.  But Quick does something very unique in that sense that...
[04:03:38] when
[04:03:39] if you have a site
[04:03:41] that
[04:03:42] JavaScript loading is very important.
[04:03:45] And complexity and amount of JavaScript on it is immense.  Interactive JavaScript, not static stuff.  And people only interact with parts of it.
[04:03:53] So as I said, I feel like this is beyond typical e-commerce.
[04:03:56] - I don't know.
[04:03:57] Quick...
[04:03:59] There's nothing like Quik.
[04:04:03] Thank you.
[04:04:08] or Preact Compat. The problem is, once you go down that path and you want to use Quick, it's kind of the same problem you have with Astro. You're kind of like, well, am I going to...
[04:04:19] use React at that point,
[04:04:22] Like, because now you have React.
[04:04:25] Thank you.
[04:04:28] Yeah, I mean, this is definitely a possibility. One thing that Solid has that Quick doesn't have is the super performant granular updates.
[04:04:36] Um,
[04:04:37] They've been, I helped them benchmark on the JS framework, and I think they're going to publish some stuff soon. They made a PR where they drastically improved their performance.
[04:04:46] after kind of looking at it because Quik's initial performance was not very good for client-side updates.  Where it's like literally solid as
[04:04:56] Just as you guys are aware, like just
[04:04:58] almost unmatched.  So, like...
[04:05:01] applying
[04:05:03] the benefits of solid and quick together could be really, really quite powerful to take the granularity. In a sense, that's what Marco 6 is. It's like if that package is already together and automated with a compiler like Svelte and everything is easy. So...
[04:05:17] you know, but...
[04:05:19] Everyone, like there's different lies of where preferences.
[04:05:23] Anyways, I've been just chatting here. It's been great hearing people talk in the chat. Should we cut to this week in JavaScript? Are people just still talking?
[04:05:33] I'm also looking forward to,  sorry, here if I didn't mention it,  see how we can do stuff with Bun.  I think...
[04:05:38] I think it's going to be a little bit, especially with any kind of custom compilation and stuff, Bun's getting more...
[04:05:43] compatibility and the features that Jared talks about, especially when he sends me like private messages where he's like, oh, I was thinking about this thing.  And I'm just like, oh, man, this is amazing.
[04:05:52] A certain part of me is kind of being back from like,
[04:05:56] But I think probably we should focus on stability first kind of scenario. So I'm
[04:06:01] I'm very much looking forward to see where Bun goes.
[04:06:14] Bond just released a plugin API. Oh, that's exciting. This is what I'm talking about. I'm
[04:06:18] Yeah.
[04:06:19] Jared is nuts in all the good ways.
[04:06:25] Oh man, that's another conversation. I didn't get into it.
[04:06:28] Thank you.
[04:06:29] Here's the thing.
[04:06:31] we can cancel Bun if we want to  and take it whatever context we want to take it on.
[04:06:38] But--
[04:06:39] If...
[04:06:39] He delivers the fastest...
[04:06:41] framework
[04:06:42] and
[04:06:43] He has no HR...
[04:06:45] Issues?
[04:06:46] like where people aren't happy doing what they do.
[04:06:50] No one's going to say a thing.  It's just drama.
[04:06:54] To be fair,
[04:06:55] It's a pretty strong message and not everyone agrees with it, but
[04:07:00] I could see a place where
[04:07:02] there are people where that's what they're in for.
[04:07:04] And maybe that's how he accomplishes his goals.  So...
[04:07:08] Yeah.
[04:07:22] uh
[04:07:23] Any... I'm not working on it.  People have been playing with it, though.  I think there was a project that tried to, like...
[04:07:29] build on top of React Native.  This stuff is possible.  Reactivity is incredibly dynamic.  It's just, it's not an area,  like I mentioned I use React Native,  but it's not an area,  like Native is not an area  that I'm specialized in.
[04:07:43] I'm hoping the community picks it up where it makes sense.  We have custom renders. We have a lot of capability, maybe something.  But it's also like it's
[04:07:52] I'm still very much focused on the core of things. I think with the project, our size, with our resources, that's the smart thing to do.
[04:08:03] Yeah, I think there's more people out there like yourself...
[04:08:10] Ha!
[04:08:11] That's a hard question. I mean,
[04:08:14] The thing is...
[04:08:16] this.
[04:08:18] I don't think the technology is going to, like the core technology, Marco Quick, are going to make the difference here.
[04:08:22] In my mind, if I was like armchair racing, I would say
[04:08:26] e-commerce still under values quick's benefit.  Like Marco gets all the
[04:08:30] benefits quick and where it gets those benefits. Marco six is actually kind of like better.
[04:08:34] where quick is better when you scale even beyond that.
[04:08:37] So from my zone,
[04:08:39] But like that's not gonna be the switch like either will be good.
[04:08:42] Right.
[04:08:44] But what's interesting to me is that because builders, like, the company behind them is CMS-focused, content site building, they built Party Town, they built all these tools around stuff to help people do e-commerce.
[04:08:57] Quick's always gonna have a really good e-commerce offering.  Same way that Marco's built at eBay.  It's always gonna be really good at that.  Even if, in my opinion,
[04:09:06] the technology architecturally wise is actually suited for greater things
[04:09:10] And...
[04:09:11] Marco might actually be technically
[04:09:14] better in that specific
[04:09:16] Case it
[04:09:17] I'm not like...
[04:09:19] both of them are gonna be fine.
[04:09:22] And because of Builder's focus, Quick will definitely be good enough.
[04:09:27] More than good enough would be amazing.
[04:09:32] - Okay.
[04:09:33] "Is solid going to be proving the same function as the function?" I mean, we already built that demo and we actually added client, server client, like, we'll see. I don't want to go
[04:09:43] I'm still we're still exploring what the best pattern is so I don't want to just like go like this is the solution and
[04:09:48] We could basically spend a few weeks, solidify some stuff and be like, bang, we can do what Fresh does.
[04:09:56] I don't know. I feel like that's not our endgame.  We want something more like server components.  We want something more powerful.  Yeah.
[04:10:02] Um,
[04:10:03] So
[04:10:04] While we can make those demos and we start showing how we could do server, we could use islands with client routing with partial swaps, really cool demo if you didn't see this all at start stream.
[04:10:14] I don't think that's the end of it.  I think we can do better.
[04:10:17] until then
[04:10:19] These are just experiments.
[04:10:26] Yeah, yeah, yeah, exactly. In a sense,
[04:10:30] In a sense, those are good for e-commerce too.  Yeah, don't get me wrong.  Marco...
[04:10:37] Fresh and Astro are basically the same as Marco 3 to 5, essentially.  The current Marco that's been around for the last...
[04:10:46] five or six years. Marco was doing basically what Astro and Fresh do, and that has been  plenty fine for eBay. So they are good for e-commerce as well. What I was getting at is  obviously Quick is good for e-commerce, but I think Quick's real advantage is when you get even  larger scale types of apps.
[04:11:09] if it could be physically supported. I'm not sure in that form. I feel like, as I said,
[04:11:13] We can do more.
[04:11:15] Okay, before we lose everyone,  no, actually, we still got good viewership.  This stream's been pretty good.  Let's cut over to...
[04:11:22] to my hot takes section of the stream, right?
[04:11:25] That's what we want. We want more hot takes.
[04:11:30] Um...
[04:11:36] Alright.
[04:11:42] All right.
[04:11:43] Cool.
[04:11:44] So let's do it.
[04:11:51] Alright, now it's time for This Week in JavaScript. This Week in JavaScript
[04:11:56] It's kind of a mixed bag.
[04:11:58] We already focused a lot on the stream on React, but
[04:12:03] There's a reason for that because
[04:12:06] A lot of the conversation for me has been fringing on the outside of that with React.  But before we really get into that.
[04:12:13] I just got to point out
[04:12:16] I...
[04:12:17] Been so stoked on seeing...
[04:12:19] the positive benefit that we've been seeing from like co-tweets and like,  um,  this kind of like framework love going around.  Um,
[04:12:30] Yeah.
[04:12:30] This one's a banger from Eleventy and Marco. Maybe you don't need that spa.
[04:12:38] Another great one, Quicken Astro. The web is better when we work together.
[04:12:41] Um,
[04:12:42] I talked about last week how I hope the love fest continues, and it looks like it has been.
[04:12:49] Um,
[04:12:51] and
[04:12:52] Honestly
[04:12:54] I think
[04:12:55] that uh
[04:12:56] It's just amazing to have this feature basically enable that.  And it's so funny because...
[04:13:04] for a lot of people involved, this has kind of been... a lot of these tweets have been kind of jokes and playfulness fun, but...
[04:13:13] It's been having a real positive effect.
[04:13:16] on...
[04:13:18] on people and just goodwill.  It's like something that I was describing to Fred from Astro that like something we
[04:13:25] People feel like we need it.
[04:13:27] Right?
[04:13:28] Like...
[04:13:29] Like,
[04:13:30] There's just been so much other negativity and it's like
[04:13:33] Wouldn't it be just great if
[04:13:35] if we can show friendship every once in a while.  And I was actually hoping that this React stream would show
[04:13:41] How much...
[04:13:42] you know how much i love react to people so they can kind of get that vibe  but so i was very much inspired by this um
[04:13:50] the the
[04:13:50] Twitter and Twitter memes have been just a crazy, crazy story, honestly. And
[04:13:57] um,
[04:13:58] I mean...
[04:13:59] It's so funny, anyone who's been working, who's been around our channels,
[04:14:04] know this.
[04:14:08] Um,
[04:14:10] So
[04:14:11] essentially, uh,
[04:14:13] Thank you.
[04:14:14] You've all seen these one word tweets or, you know, we're a company, we're a
[04:14:20] certain project shows or stuff. I believe this actually started
[04:14:23] from the Astros
[04:14:24] tweet.
[04:14:26] and
[04:14:28] For those who don't know,
[04:14:30] Theo actually, I think, put his whole story out on...
[04:14:34] on some kind of Instagram feed.
[04:14:36] But we're going to highlight Theo here because sometimes it takes...
[04:14:40] Just...
[04:14:42] Okay, fine. Story time on how I actually started the one word treat. Yeah. Um,
[04:14:48] some
[04:14:48] Yeah, quick context meet, software dev, blah, blah, blah.
[04:14:52] Yeah, we're sitting here in a private chat.
[04:14:55] And and
[04:14:57] And Theo was like,
[04:14:58] really wanted to write a tweet to say that HTML was awesome.
[04:15:04] Like it's, you know, and Fred was like, oh yeah, sure.  You can have access to the, to the, to the Twitter account. Um,
[04:15:12] And it was pretty funny because
[04:15:18] it.
[04:15:20] he basically went back again and did it on HTML.  And once,  once he started that,
[04:15:25] He went and opinioned content.
[04:15:28] And
[04:15:29] I believe like
[04:15:32] Very quickly, I think Solid was actually number three after that. We were on August 13th. And then Quick jumped in and all the rest of the crew around the MPA frameworks, Marco, which we did on last stream.
[04:15:47] Next thing you know, it moved from the frameworks
[04:15:50] to like
[04:15:51] Firebase, Vue, Vite, almost everyone jumped in on these one symbol things. And at some point,
[04:16:01] On September 1st,
[04:16:04] some large company
[04:16:06] decided that they were going to do it too. And honestly,
[04:16:10] I think this is because there's developers working at these companies that somehow got
[04:16:15] um,
[04:16:17] somehow
[04:16:18] Got...
[04:16:20] into the mainstream. I don't know how this happened exactly. It's interesting. I see.
[04:16:28] Yeah, and the funniest thing is,
[04:16:31] Apparently, Theo's original influence was actually a tweet from a year ago from BART about trains, which is a San Francisco-like transit.
[04:16:38] thing
[04:16:39] But,
[04:16:40] It's actually kind of crazy because...
[04:16:42] I don't know if people... I guess most people have been paying attention to this story, but...
[04:16:46] President Biden
[04:16:48] tweeted democracy
[04:16:50] yesterday, which is just mind-blowing that this started from
[04:16:54] We've been covering some of these tweets on the stream a bit, but it's something that basically...
[04:16:59] The first set of tweets were
[04:17:01] either Theo ghostwriting for framework accounts
[04:17:05] um
[04:17:05] or basically talking directly with
[04:17:09] other framework writers in a private discord that I may have access to. And basically, we're all like,
[04:17:16] in on it to basically the president
[04:17:20] you know,
[04:17:21] It's pretty crazy. Obviously, every step of the way,
[04:17:24] Um,
[04:17:26] goddess there
[04:17:27] Um...
[04:17:29] And there was like,
[04:17:30] Obviously, the September 1st thing blowing up had more to do with the corporate side and like...
[04:17:36] But yeah, I mean,
[04:17:37] It's just crazy.
[04:17:39] I
[04:17:40] Amtrak, Bloomberg, Washington Post, Oxus, and
[04:17:43] as far as we can trace the line,  it goes all back to that,  uh,  Astro tweet,  um,
[04:17:50] Yeah, most companies have devs.
[04:17:53] Right?
[04:17:54] Like, I think this is, I don't know, is there a message in there about the power of the developer network? I'm not sure.
[04:18:04] Theo's probably going to cover this more at some point if he hasn't already...
[04:18:09] Maybe I missed that segment.
[04:18:10] But I,
[04:18:11] This is just...
[04:18:13] It feels really cool to be...
[04:18:15] part of that even
[04:18:16] I said, kind of such an incidental thing, but it's part of, to me, it's an extension of that same goodwill thing we were doing.  Everyone just kind of joined on and it was, it was a fun thing.
[04:18:25] thing, you know?
[04:18:26] And I think sometimes we need fun.
[04:18:29] So...
[04:18:31] Thank you, Theo. And
[04:18:33] As I said, it took him convincing a number of us originally to get in on it.  And then that's all that takes to kind of roll the snowball until it's an avalanche.
[04:18:43] Yeah, yeah, PlanetScale, the database. The dev side, like,
[04:18:48] blew up so
[04:18:49] Quickly, I don't have links to those. We looked at them in previous tweets, but if you if you look like
[04:18:54] The 12th, the 13th, the 14th, there was a ton of them.
[04:18:59] Yeah.
[04:19:00] Yeah, that's right, actually. I remember seeing your post.
[04:19:04] Although
[04:19:05] I'm not gonna be, I don't think I can copy it from here.
[04:19:09] Oh, really? Planet Scale was before Astro? I might have missed that.
[04:19:19] But yeah, no, it's...
[04:19:21] Yeah, it's been a crazy ride.
[04:19:28] There's a Ukraine one? Wow, yeah.
[04:19:30] I've seen so many
[04:19:32] of this as well.  It's just kind of cool  to have a story  that actually started  from the JavaScript
[04:19:37] JavaScript.
[04:19:38] community, essentially.
[04:19:41] So...
[04:19:42] Anyway, yeah, let's continue on here.
[04:19:46] So yeah, that was tweets and memes. Um,
[04:19:51] I think...
[04:19:53] I think the other thing...
[04:19:55] That was...
[04:19:57] fun was
[04:20:03] The...
[04:20:04] I sometimes wonder if the
[04:20:06] perspective around frameworks has changed in the last few years. For the longest time,
[04:20:11] the new JavaScript frameworks,
[04:20:14] were kind of seen as...
[04:20:16] Like,
[04:20:17] an act of violence almost.
[04:20:21] And it's funny because I saw this attitude when I was working at eBay where they're like,
[04:20:27] People are just like, "Oh, this is how people get promoted, blah, blah, blah."
[04:20:33] The funniest thing is that
[04:20:35] I don't actually think
[04:20:38] Any JS framework actually...
[04:20:40] came up this way. I mean, someone in the chat mentioned Lit, because the reason I don't  point out is Angular was built completely outside of Google. Like technically, Michiko was working  for Google at the time, but like Angular, like Google didn't even want Angular initially. They  actually like, it took time. It wasn't actually until Angular 2 that Google's like, this is de facto.
[04:20:58] But it was not like, it wasn't like what people think.
[04:21:01] and
[04:21:02] Um,
[04:21:04] As I said, I'm pretty sure
[04:21:05] uh,
[04:21:06] Jordan wasn't
[04:21:08] trying to get promoted. You know, like there's just, I don't actually, like, if you look at recent history too, when you talk about Rich Harris, and Evan Yu and whatnot, like this just wasn't the thing, but...
[04:21:21] Anyways, I don't know. It's just funny because this is one of those sentiments that passes around, but it's also like...
[04:21:28] Probably...
[04:21:29] completely not true so
[04:21:31] That one was worth me pointing out, but let's keep on going.
[04:21:36] If you think you I'm glad Astro is trying to cash in on their their
[04:21:42] kind of
[04:21:43] attention due to the one word "me, my hope".
[04:21:45] I hope people do check out the framework. It's amazing. Where did I want to get to? Yeah, sorry.
[04:21:49] Here.
[04:21:52] I was talking earlier on stream about how React...
[04:21:56] And we're talking about useEffect and how React and
[04:21:59] reactivity have parallels.
[04:22:02] I thought this tweet from Seb was actually really interesting.
[04:22:07] And that like,
[04:22:09] He basically was trying to say, like, look, my top performance tip is avoid multi-pass rendering. I don't set state from an effect.
[04:22:16] It can be useful adjust based on the computer layout, but if it can be avoided, it's always better.
[04:22:20] And he goes in and he explains it. That's why I start by removing polypassing. He explains all data fetching, client render, after SR, often use these techniques, but with suspense, you can avoid it for both. He basically goes to explain this pattern. And the thing that stood out to me in my mind is because I've been trying to tell people in solid, if you saw my 1.5 release, to not do the same thing.
[04:22:39] I'm like, use...
[04:22:40] use memos and the truth matter is
[04:22:43] This was so well codified.
[04:22:46] in MobX, if you've never seen it, I hope you have. It's a state library from React that's reactive, kind of like Solid is. And Michelle Westrate basically coined in it, what can be derived should be derived.
[04:23:00] And this
[04:23:02] is the secret that will...
[04:23:04] save you lots and lots of pain,  no matter what UI framework you are using.  Because UI frameworks are all about synchronizing state.  That's like, it's all about,  it's not about,
[04:23:16] like,
[04:23:17] necessarily things changing through time.  It's about at any given point,  you have the state,  the UI is updated and responsive.  And it's super important  because you want to be interactive.  You need to show people consistent state  and you got to make sure that interaction  feeds back in in a consistent way.  It's the whole backbone of how
[04:23:35] WE
[04:23:35] trust our user interfaces. So that's why we use the type of reactive patterns we use in the frameworks we do because
[04:23:44] It's about synchronization. It's not about transformation.
[04:23:48] And from that perspective,
[04:23:51] The best way to do smart synchronization
[04:23:54] Is...
[04:23:55] through derivation.
[04:23:57] because
[04:23:58] I mean,
[04:23:59] This oversimplifies things again, but...
[04:24:02] There's a...  It's kind of like the two-way binding kind of thing,  but, like, if you got two...
[04:24:07] If you've got two nodes...
[04:24:10] Right.
[04:24:12] And
[04:24:15] You update one.
[04:24:18] and
[04:24:19] Let's see if I can draw this.
[04:24:23] causing something to happen
[04:24:25] And then I actually need a third node to draw this example.
[04:24:29] And then...
[04:24:34] Yeah, sorry, I've got my arrows backwards. Give me a second. Sometimes the Scala draws a little bit.
[04:24:39] Fine, let's delete that.
[04:24:44] If you have state, so this is state,  and this is something that listens to it,  like a use effect, let's pretend.  It depends on that state.
[04:24:52] And then this use effect
[04:24:55] writes to this state:
[04:24:58] Thank you.
[04:25:01] And
[04:25:02] that ultimately
[04:25:05] This depends on that state.
[04:25:07] Okay, I should use different color arrows here.
[04:25:10] So...
[04:25:12] Let's say that...
[04:25:15] oranges depends on
[04:25:20] and blue is rights. So
[04:25:23] you write to some state
[04:25:26] Okay.
[04:25:29] You write to some state.
[04:25:30] This depends on it and updates.
[04:25:33] which writes to some state,
[04:25:35] And this depends on updates.
[04:25:37] You get this mess.
[04:25:39] This is...
[04:25:40] Basically...
[04:25:42] what it looks like when you use...
[04:25:46] affects
[04:25:47] to synchronize.
[04:25:51] Okay?
[04:25:52] Thank you.
[04:25:52] Whereas
[04:25:54] If you use derivations to synchronize,
[04:25:58] And actually...
[04:26:00] Let's label our state so we know what it is.
[04:26:04] We have state
[04:26:06] and then these
[04:26:08] Maybe these should be different shapes.
[04:26:12] This is why you think ahead before you draw diagrams.
[04:26:16] Right?
[04:26:19] There we go.
[04:26:20] affects our boxes.
[04:26:23] Right?
[04:26:28] Thank you.
[04:26:29] If you
[04:26:30] In turn,
[04:26:32] I guess I can just grab this as a starting...
[04:26:38] If you change this to a derivation,
[04:26:42] Derive state instead?
[04:26:44] - Thank you.
[04:26:47] suddenly
[04:26:51] This
[04:26:54] Delete.
[04:26:55] Delete.
[04:26:57] This depends
[04:27:00] Maybe I'll just copy this arrow.
[04:27:03] This...
[04:27:05] B depends on A, right?
[04:27:09] And this here. You don't need the intermediate effect.
[04:27:13] to synchronize.
[04:27:14] First of all,
[04:27:15] and
[04:27:26] You don't call it... the problem with this is every time
[04:27:31] you go over this boundary, and I know I didn't draw this with a really good straight line,
[04:27:35] But every time you do a write,
[04:27:37] Like it's something like React, you actually, each time you do one of these,
[04:27:43] This could be a-- this is like a render.
[04:27:47] Essentially.
[04:27:55] Like...
[04:27:56] it not only makes your code simpler to use,
[04:28:00] It like...
[04:28:01] It knows that...
[04:28:03] B is of A and his thing like...
[04:28:05] It connects the dots for you in a way that
[04:28:09] Like...
[04:28:09] You can be optimal, right?
[04:28:15] So, anyways, this is what I mean.
[04:28:18] when I talk about
[04:28:20] using
[04:28:21] effects to synchronize.
[04:28:23] versus using
[04:28:25] um, derivations to synchronize. It's just, it's, it's, it's a way cleaner model.
[04:28:34] Yeah, reactivity is...
[04:28:36] That was kind of the point of my tweet.  That's what people do in reactive libraries.
[04:28:42] We even have a phrase for this, right?
[04:28:44] what can be derived should be derived. It's one of our mottos.
[04:28:48] So, um,
[04:28:50] Yeah.
[04:28:52] It was interesting to like,
[04:28:54] kind of...
[04:28:55] see that similarity in React. And while it might not be obvious to people, the reason this is important
[04:29:01] is because
[04:29:03] this line here
[04:29:06] There's a line here, and this line is like...
[04:29:09] where stuff is like can be considered pure.
[04:29:14] And
[04:29:15] this can be
[04:29:17] Effectful
[04:29:18] and
[04:29:20] Almost...
[04:29:21] A lot of the React concurrent
[04:29:23] features and like transitions, they depend on the fact
[04:29:27] that this part of the graph
[04:29:29] here and let's
[04:29:31] Correct. Green.
[04:29:32] can be like thrown away.
[04:29:35] Like,
[04:29:36] keep the knowledge that the state changed,  but we can recalculate B and stuff with different inputs as many times as we  want. And then when we get to where we want to be, we then run it.  So we can like, we can like,
[04:29:48] you know, possibly...
[04:29:50] What's the term? Hold, hold.
[04:29:52] hold the line here, so to speak. Like if we need to, we can choose how to schedule stuff to our benefit.
[04:29:58] You try and apply that
[04:30:00] To hear?
[04:30:01] And it's a mess. It's like a cascading waterfall type thing.
[04:30:04] like
[04:30:05] Where do you draw the line through here?
[04:30:08] It's like
[04:30:09] It's like...
[04:30:11] Um...
[04:30:14] *laughs*
[04:30:16] You know what I mean?
[04:30:29] So, yeah, this is something very obvious from Reactivity Land, but this is part of what I'm talking about, codifying those lessons.
[04:30:39] I actually think
[04:30:41] even if they will never implement
[04:30:43] stuff like solid, they should actually look at reactivity as an inspiration for the docs. We already saw, um,
[04:30:50] Bye.
[04:30:51] Dan describe
[04:30:53] React is...
[04:30:55] reactive, right?
[04:30:57] And his description sounds a lot like...
[04:31:01] how i described solid he doesn't talk about component re-renders i feel like there's more  opportunities here where reacts
[04:31:06] heading to kind of embrace this mental model.
[04:31:09] assuming that the escape hatches still line up
[04:31:14] properly.
[04:31:19] So, yeah.
[04:31:21] This was an interesting observation.  I think it's one worth pulling out.
[04:31:26] Um...
[04:31:29] Another one here was
[04:31:33] kind of again talking a bit about this i already talked about this a bit on stream
[04:31:38] But...
[04:31:39] We didn't talk very much about React 18.
[04:31:43] in the React segment.
[04:31:45] we looked a lot at
[04:31:46] the future technologies. But the truth of the matter is React, it's because kind of React 18 came and went.
[04:31:53] And
[04:31:54] it was kind of unclear
[04:31:57] what the impact was, like who this release was for.
[04:32:01] And
[04:32:03] Two years ago, I wrote that tweet about how I felt like the kind of backlash and people were almost like proud of not being React.
[04:32:10] Two years later,
[04:32:13] I don't know if the sentiment has changed all that much.
[04:32:16] But I get the sense that...
[04:32:18] Um...
[04:32:21] Like you can sense the difference where people used to really want to argue about this stuff.
[04:32:27] It's kind of like this is quite accepted.
[04:32:30] And
[04:32:30] When I look at
[04:32:32] the React
[04:32:33] Hook's announcement.
[04:32:36] October...
[04:32:38] Um...
[04:32:39] 26, 2018, and I compare it to the React 18 release, which is when they finally delivered
[04:32:45] on all the things that they promised, the suspense, all those pieces.
[04:32:49] It was...
[04:32:51] The juxtaposition, it couldn't be more different.
[04:32:55] how that felt.
[04:32:56] And
[04:32:58] In a sense, it's probably healthier. People were kind of going crazy around the hooks time.  It was like everything needed to be converted to hooks in the next week.
[04:33:07] people are now kind of like a little bit more leveled.
[04:33:10] But...
[04:33:12] There's a lot of innovation happening right now. We saw it in the Excalibur that we've been drawing on the stream, which is a big mess right now for those who probably follow. But there's a lot of really cool stuff happening in this outside range.
[04:33:24] and
[04:33:28] While I get the sense that a lot of people are kind of looking out for the next...
[04:33:33] thing. You know, they've seen all this innovation,  seeing what quick's doing. They're seeing what Saul is doing, Marco.  And then they're like,
[04:33:39] Astro, they're like, I want to be a part of this.
[04:33:43] There's a certain reality where they're like,  well, I'm going to be using React in my day job anyways.  So I hope some good stuff comes down from React.  And React 18...
[04:33:52] Dint.
[04:33:53] It wasn't a bang. It was kind of just like a...
[04:33:56] Oh, it's there.
[04:34:00] And I feel like that's it's definitely
[04:34:05] kind of
[04:34:06] It's shifted the mood a bit.
[04:34:07] Right. Um,
[04:34:12] There's a lot of stuff going on right now to be excited about.
[04:34:14] but at the same time
[04:34:17] There's almost an acknowledgement that you can't get too excited about it.
[04:34:21] And
[04:34:22] we can see the frameworks evolving in front of our eyes, almost building to brand new frameworks,  as I was talking about, special new comp...
[04:34:28] compilations, things like server components, things that are so fundamentally different
[04:34:33] Like, you know.
[04:34:34] even like quick on that where you can't really...
[04:34:37] use an existing framework to get there.
[04:34:39] So we're rebuilding them.
[04:34:41] So in a sense, whether you're React or with certain components, View with ViewVapor,
[04:34:47] quick, whatever. Like, it doesn't
[04:34:49] It feels like...
[04:34:50] Everything's new again.
[04:34:52] and
[04:34:55] At the same time,
[04:34:57] Maybe it's hard to get excited about it.
[04:34:59] I love this tweet from Madison.  It was like, everything okay, babe, you barely tested the newest JavaScript framework.  It just...
[04:35:04] It's such a change. Even two years ago, people would be angry at you when you said that you create a new framework. I experienced this. I created this all back in 2016.
[04:35:15] I guess open source in 2018. In 2020, people are still telling me that I was like,
[04:35:20] a bane on the existence for creating a new JavaScript framework.
[04:35:23] These days...
[04:35:24] No one cares.
[04:35:27] They're like, oh yeah, I mean, yeah, of course there's a new JavaScript framework.
[04:35:32] So in a sense, you're like, oh, that's a good thing.  But people were passionate enough to get angry about it before.  Yeah.
[04:35:38] I feel like it's the opposite. Everyone's just waiting.
[04:35:43] But for what?
[04:35:44] I don't know. I'm not completely sure.
[04:35:46] Thank you.
[04:35:47] A lot of people are working on really cool stuff.
[04:35:50] But the way that I get this
[04:35:52] feeling when I talk to people.  Everyone's kind of like in a holding pattern.  They're like,
[04:35:54] React's pretty good at what it does.  I don't have to do anything.  So whether it's new stuff from new frameworks,  new stuff from React...
[04:36:00] You or whatever.
[04:36:02] Everyone just...
[04:36:03] I'm not sensing the same excitement
[04:36:06] Um.
[04:36:07] like
[04:36:08] Four years ago was a very different world.
[04:36:13] Right.
[04:36:13] But
[04:36:15] So, yeah...
[04:36:16] Now the new thing is HTML framework, sure.
[04:36:18] But
[04:36:21] If you're going to be realistic here,
[04:36:23] They are very good for...
[04:36:25] certain range of problems.
[04:36:27] There
[04:36:28] There's limits.
[04:36:29] Like...
[04:36:30] it doesn't completely solve the problem. There's still work to be done to bridge the gap.
[04:36:34] So...
[04:36:35] While there's excitement there, and I shouldn't be saying,  people are very excited about Astro, and they should be.
[04:36:42] It's not quite
[04:36:45] It's very different than the kind of excitement that happened when React hooks were released.
[04:36:51] People are tired of the quirks with React, perhaps.
[04:36:53] But...
[04:36:54] They also...
[04:36:56] can't leave React.
[04:36:58] So I keep on talking to people and it's like some kind of like, everything's kind of cloudy and then they're looking and they're waiting for the clouds to part and some light to come through.
[04:37:09] Like as if like someone has granted them some divine blessing or something like that's, that's the atmosphere that I feel like.
[04:37:16] were kind of
[04:37:18] sitting in right now where
[04:37:20] Like...
[04:37:21] people are looking and they're like, "I can see that, I can see that, that's all really cool, but..."
[04:37:25] I don't know if it's going to be as impactful as React, so I'm not really going to...
[04:37:28] There's, you know, my hands are tied.
[04:37:30] And then...
[04:37:31] I'm sure React will do something good eventually.
[04:37:35] And that's all...
[04:37:37] That's all...
[04:37:39] that I'm kind of getting at here.  It was interesting.  I haven't looked at all the responses.  People have been responding to this.
[04:37:44] Not sure how many Reddit threads you read releasing, but there's still a lot of frustration going on with hooks.
[04:37:49] and
[04:37:51] Yes.
[04:37:52] there's a ton of stuff on use effects and hooks and,
[04:37:56] And
[04:37:57] I can respect this, but my point wasn't
[04:38:00] on Hook specifically, we talked about that earlier in the stream,
[04:38:02] Obviously people are still upset with hooks. It's just it feels like we're at this kind of turning point where people are
[04:38:09] We're...
[04:38:10] you know, starting the...
[04:38:11] turn away from the vision.
[04:38:13] you know, this is beyond hooks, just like
[04:38:15] concurrency in the whole model and,
[04:38:18] Two years later,
[04:38:20] Has it been delivered? I'm not sure. I was saying, I wonder if there's a sense of powerlessness or almost apathy. Like we just don't care anymore.
[04:38:28] Like...
[04:38:31] you know, like,
[04:38:35] I don't know. Maybe this is what maturity looks like.
[04:38:38] when you're young and you're excited about everything and then you get old and  you're just like,
[04:38:42] Yeah, that's life.
[04:38:49] Are we in a place where there's been a lot of dashed hopes like this one, PWA's Web Components was another one?
[04:38:57] Is the whole platform set out where maybe people like myself talk a lot about exciting new things on technologies? And then if they don't pan out, we just feel like, oh, well, maybe we shouldn't care anymore.
[04:39:10] I don't know.  This is a conversation topic that...
[04:39:13] is kind of why I did the React stream today.  I was hoping to kind of leave it on a positive note,  at least on the stream part,  but I wanted to kind of reflect on this  because it's like,
[04:39:25] We have a lot to be excited about.
[04:39:29] And
[04:39:30] I hope...
[04:39:32] that some point in the future,
[04:39:35] we can be again.  That's,  if that makes any sense.  I,
[04:39:39] Maybe this is like my own projection a little bit more than anything.  But as I said, I just...
[04:39:45] It's just a subtle, subtle thing, you know?
[04:39:48] - Yeah.
[04:39:52] Yeah.
[04:39:53] I love that we see iteration in real time.
[04:39:56] Right. I think this is the innovation. This is what I was talking about. People are looking for a revolution.
[04:40:01] But...
[04:40:03] We--
[04:40:03] We didn't jump from jQuery to React. There was all of this stuff in the middle.
[04:40:09] And I feel like
[04:40:10] If the next...
[04:40:11] thing is actually somewhere over here.
[04:40:14] We...
[04:40:14] In reality, we don't jump from React to whatever is over here. It's that
[04:40:20] Like...
[04:40:21] Thank you.
[04:40:22] everything iterates when we slowly get there until it becomes clearer and
[04:40:27] you know,
[04:40:28] what the thing is. There's been conversations about the gens of web dev and stuff. I don't want to get into that discussion because you don't really get to label the generations until you're already there.
[04:40:35] Like once it's actually settled, then you're like, oh, that's where the lines were.  Because at the time.
[04:40:41] Everything's just little steps.
[04:40:52] So, yeah, this is the sort of feeling.  And I said it...
[04:40:57] It's why we've been kind of having
[04:41:02] conversation is interesting because Dan is one of the most
[04:41:05] Generally, if...
[04:41:07] He's very positive and he's very...
[04:41:09] He gets a lot into the thinking and he gets excited about it.  Same way I get excited about it.  But if you want to see a topic that he doesn't get excited about,  ask him about other JavaScript frameworks.
[04:41:20] that actually still gets me excited  but like  you can just tell he's just like  you know  and to be fair people probably bug this  about him all the time they're like
[04:41:34] He had that Q&A.
[04:41:36] Right. And someone, of course, asks,
[04:41:39] What do you think about Svelte or Solid?
[04:41:41] And he's like, if we preferred some other model, we just do it, you know, end of question.  And he starts talking about some benefits.
[04:41:48] And
[04:41:51] And, you know, people jumping in, like Fabio, who's like, there's always trade-offs, immutability is probably slower, blah, blah, blah, optimizing.
[04:41:57] But then he started going, "The other thing we care about is pull rendering, where we only compute what's needed for screen, unlike push reactive approaches where code chains have to be executed on change and can do anything. We don't think of rendering as a signal, but more as a request."
[04:42:11] Which I think is a great answer. This is part of the reason why
[04:42:15] like the mental models are so different. One's kind of pull push.  What's interesting is Solid's actually a push-pull hybrid
[04:42:20] So that's why I'm able to
[04:42:22] Emulates so many different patterns that
[04:42:24] both do
[04:42:26] And I look forward to looking that in the future. Um,
[04:42:33] Yeah, someone asked him what have eliminated. StartTransition is one example I already said. We can start applying a lower priority state which may have CPU extensive work or may suspend for data code, but we remain interacting and can skip this update if we want to handle another change urgently.
[04:42:46] What's actually kind of cool
[04:42:48] is we actually do this in solid as well under the experimental
[04:42:52] flag. So again, this is not necessarily it's more complicated, but it's not necessarily
[04:42:57] part of their model.
[04:43:00] Someone's like, I like the idea that you can put, it's not someone obviously, in chat, hey.
[04:43:06] The idea that you can push to make sure your pure computations are consistent and pull to render at once, applying side effects, that would give you a lot of the same benefits that we achieve immutability. And in a sense, that's how solid suspense works. We hold the effects, essentially, so we don't actually push them, but we actually like...
[04:43:23] hold on to them, and then we do all the pure computations, and then once we're like, okay, everything's settled,
[04:43:29] we then run through the effects queue and we're actually pulling it. So this is actually very, I don't know why I didn't like this, very dead on to actually how we approach a lot of the problems that React does. But it just, he got asked this question over and over again in different forms. He started like quote tweeting
[04:43:46] quotes because like people just kept on asking because I think there's a lot of a lot of that  question right
[04:43:51] And similar question, I decided to step in and I was like, okay, well, what about...
[04:43:56] Um,
[04:43:58] the abstraction in general. Like, are we going too far with compilers and all this stuff?
[04:44:03] Dan's answer was like,
[04:44:05] I don't think we've gone far enough.
[04:44:07] Which is interesting, which means I actually think...
[04:44:09] react and Svelte align more in philosophy than you'd ever realize when you get this.  Like he's saying there's danger in it, but generally speaking,
[04:44:17] They want to create a language. That's what I hear here. And not just a lower level language that gives people the tools, they want to create a higher level language.
[04:44:26] Yes.
[04:44:28] I did already show this
[04:44:29] But...
[04:44:29] I...
[04:44:30] when on the React part, but I want to do this again here, because it's relevant to a different conversation.
[04:44:37] which is
[04:44:41] Kind of similar where Kevin...
[04:44:44] here started...  It was these kind of tweets that got me to do the stream this Friday.
[04:44:50] which is like...
[04:44:53] After reading this complex React thing,
[04:44:56] The mental overhead of using React is insane. One step there. I 100% believe we can do better. Maybe Solve is the answer.  So this is the kind of comparisons we get now, right? Where people are like,
[04:45:07] you know,
[04:45:11] like people are like well maybe solid's they're looking for a fix and i already mentioned solid  isn't a fix
[04:45:18] And
[04:45:21] One thing, Kevin here has been pretty...
[04:45:25] He's definitely more on the Svelte side of things. He kind of started saying like,
[04:45:30] One of the things he's noticed is like,
[04:45:34] He's like, well, I believe Saul is hugely forwarded.
[04:45:36] from React, but depending on your use case, I think Svelte is even bigger leap forward.  Svelte in particular appears to have specifically addressed the pain points we were facing when  building modern React apps.
[04:45:45] Which is interesting.
[04:45:46] Because we kind of get into here.
[04:45:50] Um...
[04:45:52] He's basically talking about how easy it is for him to build in Svelte.  And someone was like, well, I don't know.
[04:45:57] Svelte does a lot of things I don't care about, so that's why I'm not into it. What's the response?
[04:46:02] And
[04:46:03] I thought it was interesting where this conversation went, if I can find it.
[04:46:08] But...
[04:46:09] Let's see if I can find where this goes.
[04:46:15] Yeah, here it is. I think, and this is talking about Svelte, they took the approach of how we would like our code to look like to accomplish things and work backwards from there.
[04:46:24] And you can start to see the similarities to what Dan was talking about, about having the right abstraction.
[04:46:32] Heh
[04:46:33] And
[04:46:34] I personally think it's the right move in any radical paradigm shift, again, people looking for revolution, despite the cognitive shift required, piggybacking existing solutions.
[04:46:43] Right.
[04:46:44] It's funny because like,
[04:46:45] Part of the reason I was talking about this is because I don't view Solid as piggybacking,  but I guess I am because I'm just using...  I guess I am using things that are there, but it's not because...
[04:46:55] I care about those things is the best way to put it.
[04:46:57] So basically...
[04:46:59] The idea here is...
[04:47:00] Svelte is looking at where things go.
[04:47:03] they see things should be and they're trying to build backwards from it is the idea.
[04:47:07] And where I responded, the only thing I caution is that the presumption of knowing what the final result should be.  It's easier to make assumptions that reflect today or tomorrow's thinking, but restrict the ability to change those boundaries again.
[04:47:17] Fortunately, a good abstraction still leaves a lot of room.
[04:47:21] Um...
[04:47:26] So this kind of gets into this thing where we're like,
[04:47:30] I think...
[04:47:32] "Framework Dev, we should ask, what are we trying to do?"  The answer is build apps or translate brain ideas  into workable things.  Instead, we tend to focus on alleviating pain points  from existing systems through incremental progress  other than heading upstream.  I think this is interesting because I think it's,
[04:47:45] kind of perhaps misrepresenting like people,  I think people,  as I mentioned,  think I worked on solid as a way of addressing pain points.  I,  I didn't,  um,  which actually clarify here a bit.
[04:47:56] Your case Ryan, I think you've already demonstrated incredible progress feats with solid, but I challenge you to apply it
[04:48:01] your talent to solving entirely app building experience with none of the preconceived notions we carry today and
[04:48:06] Basically situations, if I were a brand new developer in say the year 2030 and I had an idea project, how would I
[04:48:12] want my experience to be, what to solve, and how easy would it be, then we bridge the gap to make a reality.
[04:48:20] And I said, "Right, I think about the future a lot.  I honestly don't know what it would look like, but I only have hints of what the qualities it should have.  So I focus on the minimal assumptions I need
[04:48:27] and leave the bike shunning to others. Those opinions will change over time.
[04:48:32] And I think this whole conversation, there's a lot of back and forth here.
[04:48:38] And I kind of mentioned here, yeah.
[04:48:40] In terms of decision-making, I wanted to clarify that I never saw my work in Solace fixing React.  It was more the opposite.  I felt React's philosophy was missing from React systems and that they had learned something important that others had missed.
[04:48:52] See, and he goes...
[04:48:54] I keep thinking about how powerful your fine-grained reactivity demos are, completely outside of component scope, but the very idea clashes with my idea that a lazy dev wants fewer controls, not more.
[04:49:04] So how do we take elegant concepts and use them under the hood to enable powerful DX?
[04:49:10] Kind of like how we abstracted the absolute power of atheism years ago.  And I love this conversation because I think it is actually the pure argument  between solid versus svelte. And in a sense,
[04:49:22] react on the solid side of things.
[04:49:24] or React versus felt or whatever. And even though React is now kind of crossing that line, that's why it's interesting to me.
[04:49:32] And what I said is...
[04:49:35] How do I explain to him? I said, that's one problem to solve.
[04:49:38] I'm sort of just less worried about that.
[04:49:41] At some point, people used this felt-like syntax on compiler because we had those controls.  You could basically build on top of.
[04:49:48] stuff and
[04:49:51] I said, "I see the lazy dev clash, but I can't be bothered too much by that. Lazy devs will always exist, and what is acceptable to them is tangential to fashion."
[04:50:00] Essentially, it's whatever is fashionable, whatever we decide is acceptable on the DX side.
[04:50:04] However, using primitives to build UIs,
[04:50:06] was faux pas when React's simple pojo state came on the scene. This is when React came out.
[04:50:12] but we still ended up moving on to
[04:50:14] where we are today with Hooks.
[04:50:18] So,
[04:50:19] I think the message here is
[04:50:22] it's good that certain people are
[04:50:25] focused on how to
[04:50:27] Build
[04:50:28] the experience that makes sense
[04:50:31] Today on how the future should look like I think that's what we all do to a certain extent and
[04:50:35] But...
[04:50:37] the patterns that we use
[04:50:41] do change over time
[04:50:43] and we learn from them.
[04:50:45] and
[04:50:46] if we try and sit too far in the future,
[04:50:49] we might end up
[04:50:51] with something...
[04:50:52] Maybe like web components, which in one side
[04:50:55] clearly makes sense to be
[04:50:57] the one possible future.
[04:51:01] But then...
[04:51:02] the whole world has gone a different direction.
[04:51:06] So,
[04:51:06] it's a balance in terms of how much
[04:51:09] you want to work there and
[04:51:11] And
[04:51:15] not every solution can actually cater to every sort of problem. Like,
[04:51:20] And
[04:51:21] person even like
[04:51:25] It's good.
[04:51:26] that
[04:51:27] we can accommodate the lazy dev.
[04:51:30] But...
[04:51:32] For a certain project it doesn't make sense.
[04:51:35] To actually...
[04:51:36] have them define what you do.
[04:51:39] Anyway.
[04:51:40] Thank you.
[04:51:45] Right, but yeah, I mean the the I
[04:51:48] The idea here is that
[04:51:52] that people don't want to do the work and
[04:51:55] I'd probably be the person with the least sympathy towards that.  It's funny.  When you work on a framework, you care about DX and UX.  Yeah.
[04:52:03] so much.
[04:52:04] You get into those details and you're like...
[04:52:09] Okay, how do we balance it so that it makes sense,  that it's intuitive,
[04:52:13] that it doesn't feel cumbersome. You get into all those elements and find the balance
[04:52:17] where you keep control, explicit in it, implicit in it.  There's those decision points at every point.
[04:52:22] Um...
[04:52:24] But it's like
[04:52:26] every single one of those
[04:52:27] is a trade-off.
[04:52:29] And you kind of, you start trying to figure out, you have multiple parties you serve, right? It's almost like a stakeholder on any kind of project. You're like, okay, you have these users, these users, and these users. And...
[04:52:39] It's an interesting question to define who are the stakeholders that you care the most about.
[04:52:44] And I...
[04:52:45] don't,
[04:52:46] I can see that Svelte actually does cater to the lazy dev.
[04:52:49] Or like, it's not lazy necessarily, but someone who just wants to get something done.
[04:52:54] In a sense, Astro does to a certain degree, too.
[04:52:57] Um,
[04:53:00] But I mean, these decisions come at a cost.
[04:53:11] Yeah.  Yeah.
[04:53:12] We can say that from that perspective that we've made things simpler in a certain way because you're not fighting certain things. But what I'm getting at is like,
[04:53:23] View.
[04:53:24] has
[04:53:25] basically the same reactive system
[04:53:27] And I would argue that they're close to the svelte on the scale because that's something that they care about.
[04:53:34] Um,
[04:53:37] And this is where the values meet the metal, you know, sort of the tire meets the road. Because
[04:53:47] there's going to be certain people that work on that developer experience.  You ever hear Rich talk, he's like, I want to envision that future
[04:53:54] Where...
[04:53:55] developers
[04:53:56] can just tell the computer what they want it to do.
[04:53:59] And it will just do it.
[04:54:00] And I want to bridge that gap.
[04:54:03] much as possible.
[04:54:05] and not
[04:54:06] worry about
[04:54:08] Um...
[04:54:10] You know figure out how we can do that, but figure out
[04:54:13] how
[04:54:14] we can help people
[04:54:16] Build stuff.
[04:54:18] you know, convert those intentions in. And I feel like the recent direction to react has been that way.
[04:54:22] But...
[04:54:26] I'm much more interested in how. I want to know how it works.
[04:54:30] like
[04:54:32] It's all, that's all fine.
[04:54:34] But,
[04:54:35] If you can't deliver...
[04:54:36] on
[04:54:38] It like you
[04:54:39] there's a huge difference in experience
[04:54:42] if something's fast or slow.
[04:54:43] Even if it's the ideal...
[04:54:45] scenario but if it's too slow then it's it's no good that happens in a lot of cases and it's
[04:54:51] And sure, I'm not saying things can't be fast enough.  I'm just saying that...
[04:54:56] Sometimes...
[04:54:58] the mechanical pieces
[04:55:00] and understanding the fundamentals
[04:55:04] is...
[04:55:05] is as, like, the journey is as important as the goal.
[04:55:11] But that's what I'm saying.  This is a deeply philosophical question when you get into that zone.
[04:55:28] So...
[04:55:30] I think this is interesting because I feel like these kind of conversations are going to come up again.  Same way that benchmarks have been coming up again and performance.
[04:55:39] Um,
[04:55:41] As I said, maybe my last topic here is...
[04:55:48] is that I'm glad that
[04:55:53] Yeah, we got some pull requests here.
[04:55:55] Improve DOM render performance.
[04:56:00] Yeah, I mean, it's unfair. This is in dev mode. But this is actually from my computer the first time I ran.
[04:56:05] quick on the JS framework benchmark.
[04:56:08] Um,
[04:56:10] This is just absurd. The real numbers are about...
[04:56:13] are
[04:56:14] are still back here, but it's more like 2, not 150.
[04:56:18] Um...
[04:56:19] But...
[04:56:20] They're doing really good work here and it looks like the expectation
[04:56:23] is...
[04:56:25] If I was to project based on this new update,
[04:56:28] that Quick's doing.
[04:56:30] There's 0.8 behind Preact.
[04:56:33] Yeah.
[04:56:33] faster than React,
[04:56:35] probably in a brown mithril range.  So like a little slower than Preact is what they're kind of aiming for for this first release, which is huge because look at this.
[04:56:44] execution line and look at look at this side so very
[04:56:48] I'm excited. They're approaching beta soon. We'll be able to get the benchmarks in for real and see exactly where it sits. But Qwik is making big improvements to performance here.
[04:56:59] That's the first thing.
[04:57:01] And then
[04:57:03] The second benchmark thing I want to point out here
[04:57:06] is that
[04:57:10] um
[04:57:12] I think we're making good progress to...
[04:57:18] where was I going to see?  We're starting to see,  uh,  Starbeam,  the universal renderer from,  uh,
[04:57:24] from
[04:57:26] from the Ember team is starting to make implementations.  They've added a lit implementation and an integration, I believe, with React.  So this is kind of interesting to see
[04:57:38] cross framework state management. Um,
[04:57:44] So, I mean, obviously stuff like MobX...
[04:57:47] works like that and you could probably use some React stuff. It's interesting to see this.
[04:57:54] The maintainer of this repo is going away, has been on vacation, so I've got to put a new solid  version in it.
[04:58:00] Millions hasn't been...
[04:58:02] hasn't been
[04:58:04] merged yet and it kind of caused a bit of a kerfuffle yesterday on Reddit because someone  just read, run it, ran it locally and they're like,
[04:58:13] Millions is slower than React. Why are they advertising that they're 11 times faster?
[04:58:17] on
[04:58:19] on
[04:58:20] on their
[04:58:21] on their page. And I think this is a little bit complicated scenario, because obviously different benchmarks weigh different amounts. I think some tuning needs to be happening. I think, I think,
[04:58:31] That's probably why this PR hasn't been merged.  It's been...
[04:58:35] a month, so I think
[04:58:37] I think
[04:58:39] I think there's some work being done here.
[04:58:41] Um,
[04:58:42] Yeah, both keyed and non-keyed is working.
[04:58:45] Pretty sure million and yeah, so hopefully in the next few days, this will get resolved. But I think I think this is just kind of
[04:58:52] The creator of millions is a really, really smart 17 year old.  I've talked to him a couple of times,  shared some white paper stuff he's been working on.  He's been doing a lot of research into this area.  And I'm, I'm very interested to see,
[04:59:04] what his determinations are, but I think it is important
[04:59:08] as much as we get excited about benchmarks and stuff,
[04:59:12] to
[04:59:13] you know
[04:59:14] try our best to have certain, like,
[04:59:19] you know, possibility of doubt, so to speak, and to use multiple benchmarks to kind of make the determination of where performance sits.  I like JS framework benchmark because it actually tests so many different things, but this isn't the only benchmark out there.  And...
[04:59:35] Yeah.
[04:59:36] it just,  it saves us sometimes,  you know,  in the,
[04:59:39] you know,
[04:59:40] everyone's kind of gone through this.  I think IMBA a few years ago was saying they were 20 times faster than React and
[04:59:44] They weren't.
[04:59:45] They had pretty good performance, but I think this is one of those things where
[04:59:52] you know,
[04:59:53] It's really tempting to count your chickens, so to speak.
[04:59:57] Um,
[04:59:57] Yeah,
[04:59:58] I imagine this stuff
[05:00:00] we'll be getting through...
[05:00:02] Also, Preact team's been hinting on Twitter that they have a big release coming out soon.  So hopefully next week is the week.
[05:00:08] I'm hoping to see whatever this reactive thing that there is. You better believe that I'm going to be their front row center to benchmark it. So I'm very excited for hopefully the next week in JavaScript.
[05:00:22] And with that, I think we are done for today.
[05:00:27] So...
[05:00:27] Thank you for joining me on This Week in JavaScript.
[05:00:30] - Yeah.
[05:00:31] Thank you.
[05:00:32] Alright.
[05:00:35] This is a long stream. It's already five o'clock. This is probably the longest stream I've ever done. It's been five hours.
[05:00:41] There's so much stuff going on, so I got to bail out pretty quick here.  If you haven't already, give the like button, subscribe, all that deal.  I appreciate it.
[05:00:51] helps me a lot.
[05:00:53] I'll be releasing this week in JavaScript as separate videos pretty soon, and I think that'll be
[05:00:59] um,
[05:01:00] fun for people to kind of be able to, you know, get into the content and make it more accessible.  I don't think my stuff is as clippable as Theo's. Maybe one day when I get an editor, but for now,  I'll put timestamps in and hopefully you guys can find the gold.
[05:01:15] so to speak.
[05:01:16] All right.
[05:01:17] So with that,
[05:01:18] I am going to go. You all have a great weekend.
[05:01:21] Till next time.