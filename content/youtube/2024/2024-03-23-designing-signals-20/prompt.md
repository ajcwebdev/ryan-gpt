---
title: "sMbICJUGJj4"
slug: "sMbICJUGJj4"
duration: "5:10:03"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/sMbICJUGJj4.m4a"
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
[00:02:58] Alright.
[00:02:59] All right, all right, all right. We should get started.
[00:03:02] Thank you.
[00:03:02] Hopefully my mic works this time.
[00:03:07] You guys can tell me if my...
[00:03:09] If you can actually hear me this time. Last time I did this, I came on and there was no mic. So...
[00:03:18] All right. Good, good, good, good. I'm stoked to have you all with me today.
[00:03:24] I'm stoked about the topic today, I have to admit.
[00:03:30] I might be like pushing it a little bit, you know, but this is where my head's at.  I mentioned, you know, a few streams back that we'd be, you know, changing up.  You know, I spend a lot of time
[00:03:41] about two years when I started interviewing every single person in the meta  framework space.
[00:03:46] Right.
[00:03:47] trying to understand what Nuxt did and Next did and SvelteKit and Remix  and just working my way through all that.  Then I spent last year...
[00:03:54] doing a lot of R&D rounds all to start. What are the best patterns? How do RCs work?  We spend a lot of time dissecting this stuff.
[00:04:01] And
[00:04:03] we're now at a point, well, if you saw the announcement, that solid start is reaching 1.0, which means
[00:04:10] You know, that's a long journey. It's been three years and
[00:04:14] And the first two years of the stream was all in support of that.
[00:04:20] Thank you.
[00:04:21] Thank you.
[00:04:22] I'm back to talking reactivity.
[00:04:24] I don't know if those people out there realize it.  The last time that I did any kind of...
[00:04:30] significant change to the reactive system in solid
[00:04:33] was probably September 2021.
[00:04:36] So like almost three years ago, um,
[00:04:40] You know, we haven't really changed very much since then. And it's kind of crazy when you think about it, right? Because we had stuff like transitions and concurrent rendering and suspense and out of order streaming and all these things for years and years and years. And they're becoming the thing that everyone's talking about. Fine green rendering, signals, you know, and...
[00:04:59] But we've had a lot of time to kind of think about...
[00:05:03] where to take this next and I would have loved to
[00:05:07] Um...
[00:05:09] to have worked on this stuff earlier, but, you know, small team, even if we multi-thread stuff  and have different people looking at different things, me, myself,
[00:05:20] Have a hard time, you know, if my job is to get stuff out the door, I have a hard time
[00:05:25] necessarily multi-threading too far.
[00:05:28] That's my thing.  But anyways...
[00:05:30] That's why we're here today, right?
[00:05:32] I should say hi to a bunch of people.  Happy birthday to me.
[00:05:37] Well, happy birthday to you then.  Yes.  I think...
[00:05:42] Alex from our community just had a birthday too. He woke up to Baron Dimension in the Solid Start release thanking him and he said that was a great birthday wish. So yeah, birthdays around. Hi everyone, how are you doing today?
[00:05:56] - Thank you.
[00:05:58] Yeah, not first.
[00:06:01] But hype, definitely hype, hype signals the sequel.
[00:06:06] You know, that makes me think of that...
[00:06:08] that
[00:06:11] That Michael Rawlings joke about signals during signals week.
[00:06:15] I'm
[00:06:16] More hype, yeah.
[00:06:18] Seems too.  Yeah, okay.  The title of the stream,  well, at least the image,  is a little bit provocative or suggestive.
[00:06:26] I'm not going to apologize for that.  It just,  I feel like,
[00:06:30] Thank you.
[00:06:31] When we say signals, it means a lot of things to different people.  I was just actually talking to Ryan Florence on Twitter, trying to clarify what, you know, the difference between signals and backbone events were.  Like, so even putting a 2.0, you know, it's pretty extreme.  Yeah.
[00:06:46] perhaps, but I think there is an evolution along this path.  And I'm seeing this while working with the people in TC39 on the signals proposal, right?  Because there's like, what's the minimum viable product now?  And honestly, if you ask me about that now compared to like a few years ago, I would  say this stuff's a little different.  So even calling what's coming out there as signals 1.0, so to speak, it's...
[00:07:11] isn't really fair.
[00:07:13] So we should talk about that.
[00:07:16] Right. The thing is, for solid...
[00:07:22] At 2.0,
[00:07:23] is about...
[00:07:25] returning to the basis, right? Solid Start represents the greatest extent away from the core  we could go, right? You start with this, you know, the core is the signals, it's the reactivity.  Then you build some stuff that can render on top of it. And then you build some component libraries,  and then you build a router and you build all these pieces to finally put it all together  and layer it as far as you can with Solid Start. And the journey of Solid 1.0 has been that.
[00:07:53] When we started...
[00:07:55] People told
[00:07:56] told us what we were doing wasn't possible.
[00:07:59] Like, that's just not how things worked.  It wouldn't be performant.  It wouldn't scale.  It'd be messy.  You know, we heard tons and tons of, you know, criticisms about this.  And...
[00:08:09] Thank you.
[00:08:10] Okay.
[00:08:11] I felt, and a lot of the work here, was to prove
[00:08:15] that we can do the full picture from end to end. And not just do it, do it well.
[00:08:20] - Thank you.
[00:08:21] But what that means is we've had to build out every other piece of the ecosystem in the process.  How do you handle metadata?  You know, how...
[00:08:30] different CSS style stuff. Things I'm going to admit
[00:08:36] challenged me because I don't... There's zones that I care to be building general solutions in. There's  other zones that I want to leave it open to others to build solutions in. Solid Start was a challenge because
[00:08:47] We wanted it to still be a general solution even at the
[00:08:51] Probably most opinionated layer you could get at.
[00:08:56] So,
[00:08:57] I'm very excited to return to my roots, return to, you know, just the reactivity that powers it all.
[00:09:08] Anyway, sorry.  I'm still getting through chat when people are just saying  Signal is 2.0, Signal is good.  People are excited.
[00:09:16] You know.
[00:09:17] I'm
[00:09:19] Good. Yeah. Mic check. I'm like 10 minutes behind in the chat. Sorry, guys.
[00:09:23] All right.
[00:09:26] All right.
[00:09:27] Okay, I'm just catching up, okay?
[00:09:31] Thank you.
[00:09:33] Dang 2.0, yeah, exactly. The conversation with Ryan Florence.
[00:09:39] Rust?
[00:09:40] Well, what does Rust have to do with it?  But sure, let's have Rust represent.  We got signals in Rust, too.  We got signals in Dart.  I don't know if people have seen it.  There's SolidArt.
[00:09:49] which is a dart signals implementation
[00:09:53] Thank you.
[00:09:55] There's signals, I guess like my name, the signal signals everywhere. It's not an understatement at this point.
[00:10:03] I...
[00:10:04] I mean,
[00:10:07] Yeah.
[00:10:08] Finally, a non-metamater. See, I've got, if I'm only here, I must be way behind on the, on the chat.
[00:10:15] Um...
[00:10:16] Sorry, there's just so many of you today.
[00:10:23] See, and this is an interesting question, right?  Because I've looked...
[00:10:30] at
[00:10:31] many of the other reactive libraries over time. I've been
[00:10:36] working with people in the TC39 who are involved around like Ember.  I actually haven't talked to Yehuda Katz much, you know, um...
[00:10:46] at all, really outside a few Twitter conversations, like in public.  So I can't say much on that.  I thought Starbeam's idea of resources was
[00:10:56] was
[00:10:57] interesting because it's a different model. I'm going to talk a bit about the model we've been using for the last like
[00:11:03] Oh God, eight years now?
[00:11:07] But yeah, I think we're in the same zone.  I want to talk about what problems...
[00:11:15] we want to solve, what layers onto it. There's a challenge when you're dealing with primitives  that you could just like keep on adding them. And I'm trying to understand
[00:11:24] what the base set is and what the minimum requirement is here and to be fair i'm not  straying too far from what we've done to date i'm just i so this is definitely going to have
[00:11:35] are slant on it, but
[00:11:38] our slant as it turns out is
[00:11:41] been
[00:11:42] what people, is the direction others are taking. You know, things like View Vapor.
[00:11:47] things like Svelte 5.
[00:11:51] And
[00:11:51] like,
[00:11:52] Signals like watching that angular keynote
[00:11:56] the other day was amazing because like,
[00:11:58] They just they said it so matter of factly, you know, like, oh, yeah, I forget.  There was like a place where they had a slide up and they're like,
[00:12:05] Simplicity, maintainability, all these great qualities of them using signals. And I'm just like,
[00:12:12] It's awesome to see that because when I started, that was the thing that was in question. And now
[00:12:19] we're talking about, you know,
[00:12:21] Google Keynote where it's just like the assumed standard. It's like, yeah, yeah, of course this is what you get.
[00:12:27] .
[00:12:28] So, yeah, we've come a long way here.
[00:12:40] Thank you.
[00:12:45] Yeah, there. I don't know. I don't know if I spend the time. And to be fair, we are looking at implementing the browser's single spec as a base to build a new reactivity off of its potential there. But that's not where my complete focus is. I want to explore the possibility first. That's what I've always been about. I want to look at what we want to accomplish.
[00:13:11] Hi, I'm new to this. What pattern do signals follow?
[00:13:15] I mean, general sense, or if we're talking like gang of four patterns, it's the observer pattern.  But it's a bit more than this, because in a sense, signals...
[00:13:29] really originate from
[00:13:31] one of the
[00:13:32] research around synchronous reactivity and synchronous reactive programming. And this, you know, it's influenced a lot by like digital circuits, like the I if you've ever done any kind of, whether FPMG a programming or whatever, like digital logic, VHDL, Verilog, you'll know what I'm talking about, where there's this idea of like a clock cycle.
[00:13:54] And essentially, whenever changes happen, they all apply at the same time.  It's not like this, then this, then this, then this.  Even if you write your code a bit like that, you're describing a set of rules that occur on each tick.  And signals are direct from that line of academia.
[00:14:11] Um,
[00:14:13] Thank you.
[00:14:21] If the signals problem makes the browser, will frameworks become faster than VLNs without signals?
[00:14:26] I,
[00:14:27] Doubt it.  I mean, signals are still an extra...
[00:14:32] primitive concept. And if we were to actually finish the story, we have to talk about effects  and DOM updates. And I think...
[00:14:43] Like...
[00:14:45] It's interesting, right? Because people are wondering, like, maybe if we could fold the whole thing into the C level, it never even needs to get out to the JavaScript. I don't know. I'm suspect.
[00:14:54] But...
[00:14:56] So I think there's a lot of difference in effect and we'll get into that because I'm going to get into the definitions here and what I think about what 1.0 or whatnot means.
[00:15:07] Um...
[00:15:09] People excited about the solid start? Hey, Fuzzy.
[00:15:12] Yeah.
[00:15:13] Tori is Signals + Rust.
[00:15:16] I mean, people using solid...
[00:15:19] with Tori is a bit of that. But I was actually talking about Leptos, where the signals are actually in Rust.
[00:15:36] - What's my drink of choice today?  Okay, now we're getting to the important questions.
[00:15:40] it is still this...
[00:15:43] coconut water that apparently oh actually one of my front one of my lights isn't on yeah i'm like  it looks really murky but to me it looks like a nice pink color it's just the
[00:15:53] the condensation on my glass. Anyway.
[00:15:57] Thank you.
[00:15:58] you
[00:15:59] Thank you.
[00:16:00] How the signals in BDOM are related? They're not.
[00:16:09] Alright, okay, I think I'm finally catching up to everyone.
[00:16:12] Fellow coconut water enjoyer, yes.
[00:16:14] Solid native win. Well,
[00:16:16] um
[00:16:18] - Thank you.
[00:16:19] I have no intention of building own native platform. It's a lot of work. If you just saw the React Native release, you know, and they have a whole new architecture. They've been working out this Facebook with like a team, a sizable team for years working through React Native. We don't have those resources. If you look at the approach Solid has taken over the years, it's maintainability is a huge part of our concern because we recognize that we are a bunch of open source.
[00:16:43] source volunteers. We don't have a full-time team of, I don't know, 40 devs or 60 devs or whatever.  You know, I'm just pulling numbers onto my hat, sort of.
[00:16:52] some of those numbers are real, but, you know, working on these projects, um,
[00:16:57] I
[00:16:58] Like...
[00:17:01] On the other hand, do you want to use mobile with Solid? Easily.
[00:17:04] We already did streams on this. You can use native script.
[00:17:08] Which, you know, not everyone might say they want that, but I was quite impressed by it.
[00:17:13] Um...
[00:17:15] that very one-to-one API approach. There's Tori, mobile.
[00:17:18] which we were just talking about.
[00:17:20] Another great option.  Both of those allow a very native level kind of interop.  There's obviously things like Capacitor by Ionic,  which is more the WebView approach to my understanding.  But like there are...
[00:17:33] decent
[00:17:34] solutions on mobile and i think they're just going to get better and i think we should put support  into that because let's be fair view and svelte are also going to be in that same boat they're  going to want to kind of get get in there
[00:17:45] They also do not have, you know...
[00:17:48] a huge team to build the native development up.  I think we should, you know,  this is part of my choose your battles layering strategy.
[00:17:57] thinking
[00:18:00] Yeah, yeah. This is my actual shelf. It's just my office isn't situated this way. In reality, like my shelf's over here.
[00:18:09] Okay.
[00:18:10] Thank you.
[00:18:14] Well, the thing is, if you address the primitives, you address the base, then...
[00:18:19] people can do whatever they want with it.  So that's why 2.0 is early.  I just,  I would have come back here earlier if there,  if,
[00:18:26] Like...
[00:18:27] I kind of joked back in the day, I didn't want to build Solid Start. I want someone else to build Solid Start.
[00:18:31] Because I was like,
[00:18:33] The farther away you get from the core of the framework, you build Solid Start, you build whatever thing.  Go for it.  The way Next was built.
[00:18:42] But the reality of it is to get adoption these days, people expect, you know, to have...
[00:18:48] the, you know, all the features, you know, and
[00:18:51] We had to take this to the extent even to prove that it was possible before people would take us seriously.  And that's just the reality of it.
[00:19:00] It is what it is.
[00:19:01] Do I feel like we've sunk more time there than I would have wanted to? Yeah. But I mean, once I was involved, that was the danger of it. I wasn't going to settle for something that wasn't up to the standard that we had of Solid itself. So, yeah.
[00:19:16] *sniff*
[00:19:19] Thank you.
[00:19:21] Thoughts on DioxLiveView? I mean not to hijack too much, but sure, quick thought. I think stateful servers are interesting.
[00:19:30] I think they're a technology place that I'd want to
[00:19:34] do more with. That being said, if I had the ability of staple servers, I'd still not diff.  I'd probably use signals and go for more reactive approach. A dioxys,
[00:19:43] is a diff-based approach, which like WideView itself is.  But I think we can do better.
[00:19:47] But again, Rust on the server is super fast, so...
[00:19:51] It is what it is. But the other bigger part is today, most front end frameworks work on the premise that you won't have stable servers.  That's the baseline. So they don't make those assumptions, which means while I quite enjoy the simplicity of the live view model,
[00:20:04] Um,
[00:20:05] there's a whole section of
[00:20:08] people who can't today actually just pick up that model.
[00:20:14] Alright, alright. We should get on topic at some point.
[00:20:21] you know,
[00:20:22] Probably.
[00:20:26] Thank you.
[00:20:28] This is my name, I'm going to be streaming to Nitro.  It's weird, every other adapter other than that AWS one  works with streaming.  So I don't know what's up with it.  In fact, the Netlify and Vercel AWS functions,  like their functions that run on AWS,  also work with streaming.  My Hacker News demo I deployed to everywhere.
[00:20:45] Even Amplify works with streaming. I deployed that just the other day. So
[00:20:50] I'm...
[00:20:52] Yeah, I don't know.
[00:20:57] How are we doing? 233, did new people just join on  or did I get raided by someone?
[00:21:01] Probably too early to get rated.  Good, I am in software and development, at least on Twitch.  So that's good.
[00:21:07] And oh, Dev, thanks for the sub.
[00:21:12] 13 months.
[00:21:15] That's that's awesome.
[00:21:17] I missed that earlier.
[00:21:19] Thank you very much.
[00:21:21] Probably one of the longest Twitch subscribers we have.
[00:21:26] I say we, I mean I do.
[00:21:29] Dax, Brian, interview when?  That's a great question.  I don't know.
[00:21:34] I don't know if I would...
[00:21:37] Bye.
[00:21:38] Yeah, OK, sorry.  It's good to have their own dapper and not the rep line, but first gotcha.  Yeah.
[00:21:44] I think I'd take everything too seriously. I think Dax would hurt my feelings.
[00:21:49] Thank you.
[00:21:50] Yeah, it'll happen.
[00:21:55] Oh, Fernand Masters. Hey, there you go. I had, if you haven't seen my course there, um,
[00:22:01] I'm actually going to talk a little bit about the stuff related to that.  It's more like a sequel to the Frontend Masters course,  because the first hour or two-ish of it,  I talk about the basics of solid,  and I talk about the reactivity system.  And I want to talk today a bit about...
[00:22:17] Yeah, I mean, we should just get this rolling, right?
[00:22:20] It's hard because it seems like there's so much energy in the air right now.
[00:22:26] Yeah, the way we teach reactivity, I think, has to change a bit or should change a bit.  And I think that'll help people adopt it.  I say that after...
[00:22:39] Literally trying to perfect the solid explanation into five minutes. If you guys aren't familiar  to
[00:22:46] Fasina DX on Solid managed to make our intro video into five minutes to condense the whole explanation that, you know,
[00:22:54] I take, you know, originally hours to explain, but
[00:22:58] I think we need to relook at this bit. And that's a part of what I want to talk about today.
[00:23:03] Thank you.
[00:23:08] *sniff*
[00:23:10] Yeah, I hear you, Joe. But the truth of the matter is, there's so many people that it's just like, next is default option these days.
[00:23:20] I there's a there's like this simple happy path and this is mentality and it's even been kind of
[00:23:26] bred by the React team, right?  In the sense that it's like, you need a framework.
[00:23:31] to you know to do react that's kind of where our you know we're at today
[00:23:37] And while not everyone fits into that bucket,
[00:23:41] That's...
[00:23:42] That's kind of the thing.  Ooh, hey, Jadon.  Speaking of which, Jadon is going to be on the show pretty soon.  I believe next week.  And we're going to talk about Wiz next.
[00:23:52] and resumability and all the cool stuff that goes along with that.
[00:23:58] Yeah, exciting stuff. I know we're just starting up here. I'm playing with chat, but yeah.
[00:24:03] Thank you.
[00:24:05] Well, I mean, Wiz is the original resumability framework.
[00:24:10] To be fair.
[00:24:11] That's why we need to talk about this.  I've wanted to have Jadon on for a while.  And I was always like, is there going to be like some like...
[00:24:17] NDA Google stuff we have to worry about. But I think the perspective around the whiz has changed and in good part, thanks to the narrative that Miss Gill and quick have pushed. People care about this outside of large corps and outside of Google.
[00:24:35] Thank you.
[00:24:38] Yeah, finally some public content in Unwiz, exactly.  And where better to find it?
[00:24:42] Right here.
[00:24:43] You alright?
[00:24:48] Yeah, Malte was one of the, my understanding is one of the co-creators of Wiz or co, like they started a small team and he was, he was,
[00:24:59] one of the like main guys near the beginning of Wiz to my understanding.
[00:25:06] But we'll get all the details about that next week.
[00:25:11] So,
[00:25:13] Yeah, I mean, we should talk about that.  Because, I mean, we will talk about it a bit with Jadon next week.  But...
[00:25:28] The one thing you got to give some credit to both on the Marco and Quick side is...
[00:25:33] Wiz was not that approachable a few years ago. Like actually figuring out how to make it develop, like you can come up with the most brilliant solution, but actually trying to come up with a developer experience that developers can
[00:25:44] love.
[00:25:45] is a whole other thing.  And our job as Frank authors is to marry them both together.  I think the direction that Wiz is going is definitely
[00:25:53] you know, on that path. But I'm saying it's like,
[00:25:55] It took a lot of work and rethinking to get there.
[00:26:00] Anyway.
[00:26:01] Yeah, geez, we're just talking crap and it's already been half an hour.
[00:26:05] Hmm.
[00:26:06] Thank you.
[00:26:07] Okay, so I actually made some notes for myself today, so I try and keep on topic.  But as I said, keep chatting with me.
[00:26:14] You know, it's all good.
[00:26:17] So I already talked about what signals 2.0 is.
[00:26:21] Yeah, what is Signals 2.0?
[00:26:25] I...
[00:26:26] It's looking at rethinking the kind of core abstraction primitive around
[00:26:36] primitives around signals. I'm not saying like we get rid of create signals, so to speak. I'm just saying look at how things have to adapt to meet the needs that we want today because this has been a very long running thing.
[00:26:47] what is signals 1.0?
[00:26:51] Well, you know, because it's got to be a 1.0 before a 2.0.  I...
[00:26:56] it's not as clear of an answer.  You know, in 2022, 23,  every library started adopting signals in some sort of way.  But even those were quite different.  And you have to understand, like,  when I started teaching signals...
[00:27:11] and
[00:27:12] I taught them
[00:27:13] a very different way to how they work today. Right. When we teach signals, we teach push.
[00:27:23] Right.
[00:27:26] Yeah, I'll give a shout out here.
[00:27:32] Thank you.
[00:27:33] I actually...  Nullvux...  Whatever, I can't pronounce the name.  Been long involved with the Ember community.  And...
[00:27:47] It's done a lot of great work around Ember reactivity, so I'm just going to end big
[00:27:52] push on, I keep on seeing promoting like Starbeam, which is a universal reactivity
[00:27:59] thing that, uh,
[00:28:00] that Yehuda from Ember came up with.
[00:28:04] Yeah.
[00:28:05] So...
[00:28:07] Yeah, show me the code. We'll get to code in a bit. But let's start with
[00:28:14] Well, actually, let's get the code right now. Why not?
[00:28:17] I'm just going to open...
[00:28:19] I'm just going to open up a playground for fun and let me share my screen and present.
[00:28:24] See, if you've ever watched me...
[00:28:30] Let's see here. Is this one? Yeah, let's go.
[00:28:33] Cool.
[00:28:34] Everyone can see that?
[00:28:36] Have you ever watched...
[00:28:37] We teach reactivity.
[00:28:40] Or most people even.  I've been noticing Evan gives a similar talk.  I don't know when he started doing it.  But it probably would have been after they released the Composition API.
[00:28:54] I think I wrote an article...
[00:28:57] Some of you might have seen it.
[00:28:59] Um...
[00:29:01] Thank you.
[00:29:01] What was I do? I think it's on page two. It's been that long ago. It was called hands-on. No, not that one. It was, well, I can get the link here. Building a reactive library from scratch. And I made a very, very simple reactive library.
[00:29:16] create signal, whatever.  I actually grabbed the code from this simple reactive library.
[00:29:21] And I'm just going to
[00:29:22] paste it
[00:29:24] into our playground here just to kind of
[00:29:27] show something, right?
[00:29:29] Because I think this level of...
[00:29:31] understanding, and I'm not going to go over this in crazy detail, I expect you to be somewhat familiar with this, is at least important to understand or talk about where we're going right now, okay?
[00:29:40] So as usual, I'm going to give a little bit of background.
[00:29:45] Okay, good to know. Start being still pre-1-1 production, so don't try it on real projects.
[00:29:55] Thank you.
[00:30:01] Thank you.
[00:30:01] Like Angular is, do you think any other firms might be a candidate to merge with solid?
[00:30:05] For example, QUIC. QUIC is probably the most likely framework
[00:30:09] like the closest to solid, I would agree.  So this is definitely something that, you know,  me and Misko talked about joining efforts,  talked about, you know, just the other day,  we were talking about like, if I could work on this new  version of signals, they'd want to adopt it in Quicken.  And at a certain point, you know,
[00:30:28] Who knows, right?
[00:30:30] Um.
[00:30:31] Okay.
[00:30:32] But,
[00:30:33] We'll get there. Let's start with,
[00:30:36] The basic...
[00:30:39] basic, basic version of signals.
[00:30:42] What's this? No, that's not in here.  It's not in my article, sorry.  The most basic version signals involves createSignal,  which is a read function.
[00:30:49] that when it reads something, it checks if there's a currently running context and then it subscribes.
[00:30:55] And then when you write the value, you notify everyone.
[00:30:58] And the reason I'm, and there's even this cleanup function that goes through and
[00:31:03] that removes dependencies on both sides.
[00:31:06] And then there is create effect.
[00:31:09] which simply
[00:31:12] pushes itself on the stack, pops it off.  But if you remember in that article,
[00:31:17] I got to the computed value, I got to create memo, and I just said, "Oh, let's write a signal and have an effect right to that signal and call it a day." And I kind of breeze it over and I go,
[00:31:28] "Yeah, this isn't how it really works."  But it'll work for our simple example.
[00:31:35] And the reason is this system that everyone teaches, you know, reactivity in 50 lines of code, because you can, you know, if you forget about the create memo, it's 50 lines of code.
[00:31:45] .
[00:31:47] is...
[00:31:48] I'm going to turn off the notifications and type check.
[00:31:52] is a push-based system. And
[00:31:54] That is not...
[00:31:56] actually how
[00:31:58] any of the signal libraries work. We teach it to make it simpler because what you can do in a push-based system is you can go
[00:32:05] Will this use SOZ?
[00:32:07] We can go create signal and I'll put one. And then what I'll do, I'll do const double. I mean, everyone, at this point, this is like, hello world in a reactive system, pretty much, right?
[00:32:21] We'll go s times 2.
[00:32:25] Yeah.
[00:32:25] And
[00:32:28] Maybe we will do great effect.
[00:32:33] and it's going to go console.log
[00:32:37] Double.
[00:32:38] Okay.
[00:32:40] And if all goes good...
[00:32:44] Oh, right, right.
[00:32:46] Yeah, yeah.
[00:32:48] Like, get my console back here. If all goes good, we're gonna see this 2 in the thing. Can I blow this one up too?
[00:32:56] Mm-hmm.
[00:32:57] I can't, hopefully you can see there's a little too here.
[00:33:00] Okay.
[00:33:01] But this is the basic example.  And then you go like, let's set...
[00:33:06] to two.
[00:33:09] and now you see two and four. So it runs once, you see two, runs again, you see four.
[00:33:15] Now,
[00:33:16] If I set it to 2 again in my
[00:33:18] basic example, you're going to see this little colorful 2 here because it's console.logs4 twice.
[00:33:26] Which seems kind of wasteful. So the first change we make in an actual reactive system is when we write the new value,
[00:33:34] If it's the same, early exit, right? If value
[00:33:37] equals next value or do some kind of object check or whatever, just return.
[00:33:43] And if we do that now, we're back to, even though we set the value, you know, I can add another set value.
[00:33:50] one here, because it starts at one, you're only going to see two console logs even though we called set four times.
[00:33:55] This is...
[00:33:58] basic
[00:34:00] kind of reactivity you see for signals.  You see all the principles in play.  The problem is this is a push-based system  and it's not how an actual signals-based system works.
[00:34:13] Right?
[00:34:18] People follow me so far, right?
[00:34:20] So...
[00:34:21] What I mean by that is, okay, this effect, that's fine, right?
[00:34:26] you know,
[00:34:27] We can also...
[00:34:28] like get rid of the effect and do something like this.  We could, let's say we call double, right?  'Cause one of the cool things about a reactive system  is that you can just access the value.  So I'm just gonna call double,
[00:34:41] at each point.
[00:34:43] right people always wonder why i called solid  computed everyone else calls them computers and i called them create memo
[00:34:49] Like React?
[00:34:50] And you're like, why did you do that?  Well, if I put a console.log,
[00:34:54] in here.
[00:34:55] and said,
[00:34:56] Hey.
[00:34:59] you know,
[00:35:00] S.
[00:35:01] times two or something.
[00:35:05] I'm not running the effect anymore, but...  what you see is there's still two console logs, because the first time...
[00:35:12] It runs, you call double, it runs,
[00:35:16] prints it out, when setting it to the same call value and calling double again, doesn't rerun this function.
[00:35:22] right? And then setting to 2,
[00:35:26] and calling double now calls that function, right?  And if I call double one more time here,  it's also not gonna call it again.  So from the kind of reverse view of this API,
[00:35:37] Asking for the value multiple times does not have it run anymore.
[00:35:42] So, like...
[00:35:44] Well,
[00:35:46] This is a push-based system.  This is already...
[00:35:50] Getting away from...
[00:35:51] from RxJS or Backbone because it's a push based system  with memoization.  To be fair, this system breaks pretty hard  with the diamond problem, if you're familiar with it,  like if we had multiple dependencies.  I'm not going to go into that  'cause this is already a solved problem.  But I wanted to talk about
[00:36:08] why when we teach reactivity, it's kind of limited.
[00:36:13] Well, we're at 300...
[00:36:15] 320 people cross both streams. It's probably the biggest stream I've had so far and it's
[00:36:19] I'm like looking for the raid and the raid didn't happen.  This is just naturally everyone being here.  That's so awesome.  Okay.  Okay.  Let's keep on going.
[00:36:29] So,
[00:36:30] This is a push-based system.
[00:36:33] *sniff*
[00:36:34] And I said, "Signals aren't quite a push-based system."
[00:36:38] Right.
[00:36:38] You could argue this is a push-based system with auto-memorization. On the other hand,
[00:36:43] You know, you always hear people talk about React, and React goes, "We're so simple." Well, why are they so simple? Well, let's look at the alternative way of looking at this. What if instead of doing this, I'm going to console out a bunch of other stuff.
[00:36:57] We instead just go, okay, well let value
[00:37:01] Equals one.  Okay.
[00:37:03] And then
[00:37:04] I'm going to
[00:37:05] I'm going to make a set function.
[00:37:08] We will see why in a minute.
[00:37:12] But we'll say that value equals v,
[00:37:15] And
[00:37:17] Now we have const double.
[00:37:20] equals
[00:37:22] Sorry, equals.
[00:37:25] Thank you.
[00:37:26] Value times two.
[00:37:29] and
[00:37:34] Let's see here. And what else am I missing here in our example?
[00:37:39] Alright, I should probably put the console login.
[00:37:43] So you can see it because this is a basic
[00:37:47] poll based system, right? If I go
[00:37:50] Hey...
[00:37:53] value times two,
[00:37:57] We have our console logs here, right? I'm still calling double and set and double and set. There's something in the notes here, though.
[00:38:04] They're logged.
[00:38:05] four times here, two on the first value, two on the second level value. So the naive
[00:38:12] poll based system and by poll i just mean you just ask for the value right you just  like go get me the value and then it pulls and asks
[00:38:20] this and he just pulls you
[00:38:22] Calling a function is just a pull, pull.
[00:38:26] Right?
[00:38:31] Right. So, like, how would you check this, right?  Well, I mean, the first problem is this isn't very...
[00:38:39] optimal, right?
[00:38:40] because you're running all four times.  So what do you do in React or any framework  that uses pull-based system?  You go, okay, let's introduce
[00:38:49] All right.
[00:38:50] function, let's call this one memo just for sake, right? What memo takes a function and then, let's see, how are we implementing memo today?
[00:39:01] Let's do something like what last.
[00:39:05] I want to say...
[00:39:06] Um...
[00:39:07] Let's say last
[00:39:09] input,
[00:39:10] We're gonna need, and I'm gonna use an array,
[00:39:13] I'm just running a memo function.  We probably get this off...
[00:39:16] Um...
[00:39:17] Probably get this off of...
[00:39:19] I don't know, like NPM or something.  But I'm thinking I'm picturing something where you like return
[00:39:25] Like, I don't know.
[00:39:27] the same function with the args, and then we kind of like,
[00:39:30] Um...
[00:39:32] we'd have to go through all the args, right? So like let i equals zero,
[00:39:37] This is very naive.  I'm sure there's like loopholes.  Like if you pass an argument, let's function.  But args.length, I++.  And then what we're going to do essentially is...
[00:39:50] If at any point args I...
[00:39:53] does not equal
[00:39:56] Last.
[00:39:58] Last in
[00:40:00] I...
[00:40:01] We're just going to return.
[00:40:04] the function
[00:40:08] with we're going to call the function essentially.  And actually let's get a little bit fancier than this.  Let's actually.
[00:40:17] What do we want to do here? We're going to say
[00:40:20] last
[00:40:21] in
[00:40:22] equals these args.
[00:40:24] and then last out.
[00:40:27] equals here. So now we've updated those. And then basically, if we go around and we realize the  args the same, we're just going to return last out.
[00:40:37] Right? So I just wrote a very basic memoization function. So you take the original function,  returns a version that doesn't call it again unless the arguments have changed.
[00:40:49] from the last time it ran, like a one depth memo function.  So if we go back here and go demo and go memo
[00:40:57] this
[00:41:00] Hopefully.
[00:41:03] It's like I did something wrong.  Oh.
[00:41:06] You have to actually return the value.
[00:41:08] but
[00:41:09] No, what did I do wrong here?
[00:41:12] Oh, right, you need arguments here too. So let's pass v into here now, right?
[00:41:22] Just for simplification, but you can view this like the dependency array in react.
[00:41:29] Sorry, and it's not the its value.
[00:41:33] value,
[00:41:35] value,
[00:41:36] value.
[00:41:37] Yay, okay. So, I did it. We were back to a single console log for each of these.
[00:41:46] Hopefully
[00:41:48] Hopefully you can all see this and can follow what I what I just did.  Essentially, yeah, I can get
[00:41:55] I can get all this reactive stuff out of the way now.
[00:41:59] Um.
[00:42:00] I'll keep it.
[00:42:02] I'll keep it up here just in case I want it later.
[00:42:04] But
[00:42:06] Essentially, we wrote a memo function,
[00:42:08] And now it has very similar behavior.
[00:42:11] Well,
[00:42:12] Sort of similar because our problem now is like, how do you write an effect?
[00:42:17] when we when we do this.
[00:42:24] Thank you.
[00:42:31] Yeah, but we'll talk about eager and lazy in a minute. This is why I'm actually laying this out.
[00:42:37] So, how do you do an effect in this system? Because, sure, we can see that these are derived values. Well,
[00:42:44] We can add our own effect function.  Let's add an effect function.  And let's make effects array.  So let's go, let's go const
[00:42:54] I mean, this is really inlining it, but let's let's do that and let's make it like.
[00:42:59] Um...
[00:43:01] function effect.
[00:43:05] And then,
[00:43:07] All we got to do, I think is just what like effects.
[00:43:10] Actually, this one's going to take a function.
[00:43:12] I'm going to go effects.
[00:43:14] .push
[00:43:16] Function.  Okay.
[00:43:18] Um...
[00:43:20] And then on the other hand,
[00:43:22] Um...
[00:43:24] We need to probably let's see here.
[00:43:29] in our setter, where's our setter here?  Instead of just setting the value,
[00:43:34] Like, you could think of this as, like, in a component registering its effects.  Then we would go through, like, four...
[00:43:41] Um...
[00:43:43] Let's use i again, equals zero.
[00:43:45] I smaller than...
[00:43:48] Bex.length.
[00:43:51] Whatever.
[00:43:52] I++
[00:43:53] We will kind of go effects.
[00:43:57] i and we'll call it right so now if we bring back our effect essentially
[00:44:06] Right.
[00:44:09] This way we don't have to
[00:44:11] call double ourselves a billion times.
[00:44:19] Hopefully, go effect.
[00:44:23] Now double takes value.
[00:44:25] Um...
[00:44:29] Thank you.
[00:44:29] you know,
[00:44:31] We can see it. Well...
[00:44:33] Actually, there's a problem.
[00:44:35] two runs once, because by the time the...
[00:44:40] But the reason it's running is because the effect doesn't run until I call this first setter.
[00:44:45] This is, we're back to double executing again.
[00:44:48] Even though, like...
[00:44:50] we were memorizing our function so technically we have to memoize our effect as well
[00:44:56] Um,
[00:44:58] Like basically every time it calls set, it just goes through and calls them all.
[00:45:02] And we don't want to necessarily call them unless something changed. So
[00:45:05] I'm going to like this is really hacky as hell, but I just want to show
[00:45:10] kind of conceptually,
[00:45:12] what like react hooks are kind of doing right so we're effects push memo now we memo that function  as well and let's just pass
[00:45:19] Um...
[00:45:21] double and value to here.
[00:45:25] And then DVR.
[00:45:28] D. V.
[00:45:31] And we get the logs like we expect.  They only log one more time.  So as long as we just keep on memorizing everything,  our poll-based system can be...
[00:45:42] pretty efficient.
[00:45:43] But this is kind of like...
[00:45:47] Thank you.
[00:45:48] you can see the difference between the push-based system  because the push-based system is,
[00:45:52] had the ability to like,  just like not even care,  just like knew...
[00:45:55] via notification, what effects need to run. This one you kind of go like every time I set, I need to like go check, run the stuff, make it use memoization to stay with myself from extra execution. Okay.
[00:46:08] People falling?
[00:46:11] Okay.
[00:46:14] you're right and I could have done that  but now it's too late
[00:46:19] -
[00:46:20] See? Not thinking.
[00:46:23] .
[00:46:25] .
[00:46:29] Oh well.
[00:46:32] I am sorry.
[00:46:34] I...
[00:46:35] Run it back. I'm not running it back.
[00:46:38] Thank you.
[00:46:39] Yeah, this is the best part about our playground. We can literally take snapshots at each stage. I am
[00:46:46] Well, I mean, yeah, let's do this.
[00:46:49] Let's snapshot this one.
[00:46:51] Okay.
[00:46:52] Right?
[00:46:53] So this is
[00:46:55] Pull.
[00:46:56] Based?
[00:47:00] Because I'm actually done with my...
[00:47:02] the demo I wanted to do.  And then I'm gonna go all, hopefully all the way back,
[00:47:08] undo everything I did,
[00:47:10] Thank you.
[00:47:12] Thank you.
[00:47:15] Thank you.
[00:47:16] Thank you.
[00:47:21] Thank you.
[00:47:24] All the way back.
[00:47:36] Take another one of these.
[00:47:42] Push. Based.
[00:47:49] Thank you.
[00:47:52] Thank you.
[00:47:57] Thank you.
[00:47:57] *thinks*
[00:47:58] All right. So what's the point of this whole lesson here?
[00:48:06] Because actual signals...
[00:48:08] as many of you know, are push/pull. They actually do both.
[00:48:13] They...
[00:48:15] The funny thing is, Solid is also push-pull, but it's actually more push than pull, and newer systems are more pull than push.  And...
[00:48:24] That's why, like, the reason I'm talking about this in terms of what signals 1.0, 2.0 is a solid...
[00:48:30] 1.0 or the new ones, 1.5.  I want us to start thinking about the complexity and the considerations that come into these trade-offs.
[00:48:40] I wrote an article.
[00:48:42] Unsurprising to most of you.
[00:48:45] that I wrote an article called "Durivations in Reactivity: State is Function of State"
[00:48:51] Great article.
[00:48:54] Right.
[00:48:57] Yeah, they made it just for me, right?
[00:49:02] Thank you.
[00:49:06] -
[00:49:07] Thank you.
[00:49:07] But...
[00:49:10] Thank you.
[00:49:11] This article is good for helping people understand the difference between push and pull and push-pull.  But that's not completely why I'm here, because...
[00:49:18] Again, again, again, I told you, we teach push.  When I got to push-pull, I was just like hand-wavy, and then I'm like, read Milo's article.
[00:49:27] I didn't actually get into it.  And if you care to get into the details of push-pull,  you can watch my stream last year with Milo,  where we talked about it for like an hour and a half or two hours.  I think it was an hour and a half in Milo.  I also had the guys from Angular talking about their push-pull system for like,
[00:49:45] two and a half hours on stream. So there's plenty of content to talk about different push-pull algorithms. I don't...
[00:49:52] care about the way you choose to do push-pull.  I care about the implications of different decisions that you make.  Not performance, not like which algorithm you use.  I mean, like...
[00:50:04] bigger questions like eager versus lazy.
[00:50:10] you know, uh,
[00:50:12] - Yeah.
[00:50:12] scheduling, batching,
[00:50:15] And
[00:50:16] I need to talk about this because this is...
[00:50:19] This is getting to where the signals proposal for TC39 is sitting, right?
[00:50:28] And you have to understand where the source of a lot of this stuff was. In the example I showed a  moment ago, I showed each system in two modes. I showed it the mode with effects and
[00:50:39] and I showed it in the mode without effects.
[00:50:42] And...
[00:50:44] It's important that
[00:50:45] to
[00:50:46] The both. Because...
[00:50:49] Effects.
[00:50:50] are largely...
[00:50:52] the most
[00:50:54] disagreeable part of trying to standardize on what the meaning of signals are, because  it's where a lot of the complexity comes in.
[00:51:04] But,
[00:51:08] Yeah, let's just talk about a world where we're all push-pull in the first place.
[00:51:13] You guys, the chats, call bags equals sandbags.
[00:51:19] Are you guys talking about CycleJS in the chat or something?  Or...
[00:51:25] under Stoltz's work. I'm just... you guys are...
[00:51:28] Yeah.
[00:51:34] Don't forget to like the stream. Thank you, thank you, thank you, sir.  With so many of you people here, it makes a huge difference.  If you're on YouTube, you can just hit the like.  How many people on Twitch? We have about 78 on Twitch, which means...
[00:51:43] two hundred and...
[00:51:45] 70 of you roughly are on YouTube right now.  So I want to see 270 likes.
[00:51:53] Thank you.
[00:51:57] callbacks are actually purely push-based.  Well, I mean, and this is the whole thing, right?  The push side of push-pull is purely push-based too, right?  So, like...
[00:52:07] there's there's interesting trade-offs um
[00:52:12] to this because when you have a push-pull system,  you are doing two waves.  You are pushing and then you are pulling.
[00:52:18] The other ones, they do it in generally one pass.  They either just push or they just pull.  Pull has the benefit of when you have crazy diamond problems like...
[00:52:28] This one is one of my favorite examples.
[00:52:30] of all time, pull at least
[00:52:34] you know that you're gonna go all the way through, right?
[00:52:38] Like if you go E, what do you need? It'll go B.
[00:52:42] you know, like generally pull based systems will pull the way through push.  You don't know at E if
[00:52:47] if D is changed,  like, you might go A, B...
[00:52:51] E and then like miss this change and then C updates D and then run E again.  Push-based systems have this kind of,
[00:52:59] challenge and I go into detail about like
[00:53:01] what that means in this article.  I don't completely want to get there right now.
[00:53:06] But...
[00:53:08] Once you decide that you want to solve the consistency of
[00:53:12] a issue like pull does and you want to you know not do everything like the problem both of them  have shortcomings right like a push-based system only does the work it needs to because it knows  exactly what's changed.
[00:53:25] But...
[00:53:27] It doesn't know how it's going to be used.  So its idea of what it needs to is just like anything that could be changed due to this,  go do it.  Poll-based system goes, I only care about the thing I'm looking at.
[00:53:38] So it's good at localizing your changes.
[00:53:42] but it has no clue in that local scope if anything's changed, so it has to do all the work that way.  Push/Pull lets you scope on both sides. It goes, "Okay,
[00:53:52] I know everything that could have possibly changed.
[00:53:55] So I know I can disqualify a bunch of these other things to pull.  But on the other hand...
[00:54:01] I'm only going to pull what I care about.
[00:54:02] So if there's other changes,
[00:54:04] out there.
[00:54:06] You know.
[00:54:06] They don't need to propagate.
[00:54:09] But that whole premise is based off laziness. And for some people who don't know this, because Solid's reactivity system long predates, you know, it's been out there for a long time.  Even though technically we are push-pull, I say Solid is more push than pull in that it always propagates out laziness.
[00:54:29] The change...
[00:54:31] So technically it has all the wastefulness of,
[00:54:35] of a push-based system.
[00:54:37] But it doesn't have the cycle problem because when it reads D it actually pulls the value through so it's like push then it's like it's almost more like it's a it I mean they're all pushed then pull but it's actually like push and then pull as you're pushing it's like pull as you're pushing is it's the best way I can explain solid today like if it gets here goes A then B then gets to E and then A
[00:55:01] Like, because it does the two waves...
[00:55:03] Like it still notifies...
[00:55:05] And then when it runs,
[00:55:07] It basically does all the work.
[00:55:11] eagerly, which in some ways has seemed wasteful, but there are implications of that.
[00:55:18] See, on one hand, you could argue
[00:55:19] that
[00:55:20] For most systems...
[00:55:23] the stuff that you have on screen is the stuff you have on screen, so to speak.
[00:55:26] Right? Like...
[00:55:31] There's not that many computations that are sitting there that need to...
[00:55:36] re-execute
[00:55:38] that
[00:55:39] are expensive that you're not benefiting from the re-execution because
[00:55:43] you know,
[00:55:44] They can be dynamic, right?  Like inside derived values and solid,  you can change the dependencies on the fly.  It's not like having a dependency array on the end.  If there's a conditional...
[00:55:53] then while one condition is true, it's shortcutted that way, and it's not depending on those other things on the other branch.
[00:56:00] So like, who cares if you run a couple extra computers that aren't
[00:56:06] being used initially, they're not like, aren't being used in the view. Like it comes up fairly
[00:56:12] Not very often, except for when it does.
[00:56:16] However...
[00:56:16] There are some nice benefits to being lazy, right? Because then obviously things that are never used...
[00:56:23] never need to impact anything.
[00:56:26] Right? So...
[00:56:29] I knew with Salt 2.0 that I wanted to go to Lazy, but that isn't big news.
[00:56:34] because literally
[00:56:36] like Preact signals are lazy, I think Vue signals are lazy, pretty much everybody else's signal  implications other than Solid are actually lazy.
[00:56:44] They're all push-pull, but Sol is actually the only remaining one that's eager.
[00:56:50] It doesn't make any difference in any benchmark or anything you see because literally you only do the work you need to do so
[00:56:56] you know, you're not going to hit this problem.
[00:56:59] But
[00:57:00] There are benefits to being eager.
[00:57:03] when we start talking
[00:57:06] Uh...
[00:57:07] Getting into...
[00:57:08] other zones like and in the solid 2.0 zone.  So that's why I'm bringing attention to this right now,  because I just want you to understand  the difference between eager and and lazy push full because
[00:57:19] lazy
[00:57:20] will say I'm not going to run any of these until I get down to E.
[00:57:24] And then I'll notify down and then when I run E, that's when I'm going to start doing the work.
[00:57:30] where an eager one will say, I'll notify it all, and then I still kind of actually
[00:57:35] push down, push downwards.
[00:57:38] The reason that we were eager and pushed downwards is because of equality checks.  This is something that's actually important to understand.
[00:57:47] What...
[00:57:49] if you don't want the data, like what if even though you changed A, C doesn't change?
[00:57:55] So D doesn't change.
[00:57:57] So,
[00:57:59] You know, only this side matters.  It's a lot easier to do equality checks on a push-based system.
[00:58:05] like, poll-based, it's a little bit fun because you actually have to walk up things
[00:58:12] that, you know,
[00:58:14] may have not changed. So like there is a there is a trade-off here.
[00:58:19] You know things could have changed, but you're not guaranteed to know that E has changed.
[00:58:24] Whereas in a push based system,
[00:58:26] or even a push-pull based system that's eager or more on the push side of things,
[00:58:32] Thank you.
[00:58:32] you can actually, you know, not get down to E until
[00:58:38] you've made sure that everything else is run. The second
[00:58:41] benefit.
[00:58:43] for eager versus
[00:58:45] lazy is that think about when things run. If you have a lazy system,
[00:58:50] Down here.
[00:58:52] And you're like,
[00:58:53] you have like a scheduling consideration like React, right?  In React, the effects run...
[00:58:58] after render.
[00:59:00] Right?
[00:59:02] If you don't hit something in the drive data,
[00:59:06] Until
[00:59:07] you're running the effects.  These run at effect time.
[00:59:11] There's no phases, there's no like pure stage. Like in React
[00:59:15] You do a pure render where you get a VDOM back,
[00:59:18] And then
[00:59:19] you do a real render and then your effects run.
[00:59:22] You have a guarantee that every memoized value,  computed value, whatever in your stack,  has run before render.
[00:59:31] And
[00:59:33] It happens at that timing, whereas in a lazy system,
[00:59:38] Those things could run...
[00:59:40] depending on where they're consumed.
[00:59:43] So like there is a definite trade off here.
[00:59:51] Thank you.
[00:59:52] Yeah, yeah, yeah. They refer to it as a clock, right? And SJS was based on it, was based on a clock and that was where Saltwood originally
[01:00:00] was and I actually have an old demo here in a code sandbox but the problem is
[01:00:05] It's challenging for me is that I don't think
[01:00:09] developers expect
[01:00:11] The benefit of a clock
[01:00:14] is that
[01:00:15] You know that...
[01:00:17] everything's committed at the same time so there's no way that any future change can impact
[01:00:21] like the current propagation.
[01:00:25] It's kind of like the way React leaves set state in the past.
[01:00:29] but it's also like really...
[01:00:33] people struggle getting their head around it.
[01:00:39] Oh, sorry.
[01:00:42] Thank you.
[01:00:42] Oh, you're talking about... Oh, sorry. I see what you're saying. Sorry. I was making a different point.
[01:00:48] Yeah.
[01:00:52] Well, I mean, that's an interesting question, right? No, it depends. Your effects
[01:00:59] should be the only form of actual tearing.
[01:01:02] Right? So as long as you schedule your effects. Push-pull always schedules effects regardless.
[01:01:08] Right? That's a trade-off.
[01:01:11] But I mean,
[01:01:13] It doesn't matter because like if you have effect E, F, G, H all the way down the line here and they read some of these same data things, they're always going to get the most updated date value.
[01:01:23] Because you pull it, essentially.  So the push-pull just saves the recalculation,  but you're always pulling at the end.
[01:01:30] And what PushPull also does is it saves which of those things,  you know, maybe only E and G end up on the list.  But because you're polling in the end,
[01:01:39] tearing isn't particularly a problem. I guess an example of this would be  something that someone might do in solid right now. Have you ever used a
[01:01:50] A chat.  You guys are in a chat right now on Twitch or YouTube.  You know exactly what I'm talking about.  You know how it keeps on scrolling.
[01:01:57] Right? Like you type something and it scrolls with you, right?
[01:02:02] One way to implement that is to read the DOM prerender
[01:02:08] And then
[01:02:11] you know, like, so, like, say the list changes or something,  you know it before you render, read the DOM position there, and then...
[01:02:18] after it renders, see the change and scroll it.  Like basically, it's usually a two part system.  Now, if you were using,
[01:02:28] a memo or computed value or whatever to read it
[01:02:32] and then ran, used it like a use of factor effect to do the last stage here in a lazy system.
[01:02:40] Like,
[01:02:42] If it was pulling the value from the memo, it wouldn't run it till after render.
[01:02:49] do you see what I'm saying? Where it's like in solid today that it's very easy to just
[01:02:54] do that and have a working system.  Like Memo listens to onListChange,  gets the position before render,  then after when you...
[01:03:04] When the effect runs and it's already done the render, grab the val, you know, and do the change.  But if you move it to being lazy, you're not actually running the computed part until it
[01:03:14] after render.
[01:03:20] So, I don't know, I'm just...
[01:03:24] You guys are just trolling me in the chat. Yeah, okay, that's fine.
[01:03:28] Do you understand what I'm getting at?
[01:03:31] Like,
[01:03:32] you remove the guarantee that all pure calculations happen before
[01:03:36] All
[01:03:37] Effectful calculations.
[01:03:41] That is something that a lazy system has to take into consideration.
[01:03:46] It usually doesn't matter because you're guaranteed that any effectful calculation that depends on pure calculations
[01:03:54] Every pure calculation it needs will be calculated before it runs.
[01:03:58] And
[01:03:59] So you don't have to worry about...
[01:04:02] like the values being wrong.
[01:04:04] you know,
[01:04:05] or that different effects see different values. They will all see the same value. The problem is that you no longer have this sort of definite pure phase. And this can impact
[01:04:17] Stuff like...
[01:04:19] suspense and transitions and concurrency.
[01:04:23] What am I bringing up?
[01:04:24] Well, okay, we'll get there in a minute.  Let's keep on going.  I just wanted to talk, you know, at this point...
[01:04:33] about, you know, push pulls added complexity.  We talked about scheduling.
[01:04:37] and eager versus lazy.  Um,
[01:04:40] You know, batching is another concern.  I wrote a whole article also about this, you know, back in the day.  What was it?
[01:04:46] Um,
[01:04:49] Consistency.
[01:04:51] consistency in UI frameworks. Let's let's grab this one.
[01:04:55] I'm going to drop this in here.
[01:04:59] All right. Where I ran this very simple use state use memo
[01:05:06] And then like
[01:05:08] click and then inside the click we wrote what the count is, what the double count is, and what the text currently in the node is. And if you remember every framework
[01:05:18] had a different answer.
[01:05:20] Um...
[01:05:22] React said 000, Vue said 120, Svelte said 100, and Soled said 122.
[01:05:29] I argued at the time that React was correct,
[01:05:32] If not in the past,
[01:05:34] Mmh.
[01:05:35] It's actually pretty...
[01:05:36] Okay. And Solid was correct, but it was, you know, in the present. But these two were...
[01:05:43] inconsistent.
[01:05:47] Right? And
[01:05:50] It's an interesting...
[01:05:53] dilemma to be in here because you're at the edge of the reactive system here because
[01:05:59] Essentially, you have derived state.
[01:06:01] And then...
[01:06:03] you have
[01:06:05] And the thing is, you can see why each framework ended up where it is. React was like, look, we pull when we pull.
[01:06:11] All this is some pure part. So when React runs your code here, they've updated nothing. They're like, look,
[01:06:18] Count has not updated.
[01:06:20] He called setCount, but we don't update it. DoubleCount therefore couldn't have run again. It doesn't update.
[01:06:25] So the text is not updated.
[01:06:27] Simple.  Solid is on the other side.  The second you set the count, it went and did all the work
[01:06:34] And then when you read it, it was like, okay, yeah, count, double count, element, everyone's up to date, perfectly in sync.
[01:06:41] Svelte.
[01:06:43] was a fun one because Spelt looked at it and they're like,  okay,  well,
[01:06:46] In theirs, it was like count++. So when they looked at it, Svelte was like, okay, so count is updated here, but double count hasn't run because it's still the closure of this, right? Like, how could double count have run on the very next line?
[01:07:02] So, and obviously we haven't updated the text yet, because at the time of you calling this function, you've only updated count.
[01:07:08] -
[01:07:09] Vue was like, "Okay, yeah, we're a reactive system, so you set count, we've updated it."
[01:07:15] and double count, you know, we always give you the latest value, so when you read double count, well, you get the latest value as well.
[01:07:21] but we haven't scheduled our rendering yet.
[01:07:26] Amen.
[01:07:28] Thank you.
[01:07:29] So each system has a logical reason for ending up where they ended up.
[01:07:37] The problem with sync
[01:07:39] you know, solid solution goes like, clearly that's the right answer, right?  And a bunch of people excited about that.  Is that like, if you call set count like 10 times here,
[01:07:46] like you do 10 times the work.
[01:07:48] view
[01:07:49] React, and Svelte all assume some sort of implicit batching.
[01:07:54] where you get the chance to do your work before it actually impacts the DOM.  React goes like, "We need to be consistent so everything's in the past."  Vue goes, "Look, we have a reactive system. We'll always give you the latest value, but scheduling...  we'll schedule the expensive work."  And Svelte is like, "We will follow the rules of what it looks like if you're just following JavaScript."
[01:08:16] Um,
[01:08:21] But yeah, so like it's like and I don't ask us to explain how double count works. We have a compiler.
[01:08:27] *laughs*
[01:08:28] I think that's fair to say.
[01:08:31] So,
[01:08:33] Yeah.
[01:08:34] The thing is,
[01:08:36] Obviously, if you do fine grained rendering like Solid does too, where you update like in this case, you're updating one text node.
[01:08:42] Doing it a bunch of times is kind of like, who cares?
[01:08:44] Like if you want to batch it, then batch it if you need to.  But the base case is not that bad.
[01:08:49] But.
[01:08:49] I think.
[01:08:51] This sort of thinking is still very important to kind of understand...
[01:08:57] Like...
[01:08:58] the challenges and thought thinking that goes into batching.
[01:09:02] Right.
[01:09:03] So
[01:09:04] A lot of systems that have a lazy system, essentially,
[01:09:10] Because you can always ask for the latest value,
[01:09:13] tend to both be lazy and...
[01:09:16] auto-batching on a micro-task like Vue. Basically, they almost all look like Vue.
[01:09:22] so
[01:09:24] This is kind of where we are today.
[01:09:27] where most
[01:09:29] you know, arguably the signal is 1.0
[01:09:32] solution involves
[01:09:36] laziness,
[01:09:38] and potentially auto-batching, but this is a critical piece, which is why nobody wants to touch effects with a 10-foot pole.
[01:09:46] in terms of trying to come up with a spec for this stuff because like
[01:09:50] who's to say view is right or solid is right in this zone.
[01:09:56] is kind of been,
[01:09:58] the position frameworks are taking. What if I never want the work done? I know that sounds weird, but what if it's off screen?
[01:10:06] Like, what about suspense? What about any other kind of work which needs
[01:10:10] scheduling.
[01:10:20] Yes, React does have Flush Sync. Svelte and Vue have Tick.
[01:10:24] Solid has batch.
[01:10:26] So technically every framework can do the opposite operation with the right syntax.  You just have to, it's what the default is. You have to call something else.
[01:10:35] Right.
[01:10:42] So, but it is an interesting one because this is one of the debates.  Solid was the only system that was set up to be purely sync.
[01:10:50] Um,
[01:10:52] But...
[01:10:53] Most of the places people have been going to have been async. You're right. It's very easy to just call flush sync if you want it to update immediately.
[01:11:01] But I mean, there's an interesting consequence there.  That means at that point, you're going to do all the work, which is again, what solid is doing, which seems fine.  But like there's a difference between a subtle difference between say.
[01:11:10] tick in Svelte or view, which you use in await. It makes an async function.
[01:11:14] There's a positive to that.
[01:11:16] It means that scheduling still happens when it happens.  You don't actually force any work to happen earlier.  And if other things would happen earlier,
[01:11:21] afterwards
[01:11:23] they would still get to apply.
[01:11:25] Thank you.
[01:11:27] if they happen before the scheduled time.
[01:11:29] Thank you.
[01:11:30] The other downside, the flip side,  async means that you are definitely waiting async.  You lose the ability to interact with this thing synchronously,  which can also have impact
[01:11:40] you know, on events and, you know, like events are designed to work synchronously, you know,
[01:11:45] You could probably just do all the stuff above the await, but I'm just kind of pointing out that like...
[01:11:52] There are considerations and trade-offs between the two different APIs.
[01:12:02] Thank you.
[01:12:06] Yeah, I have to admit, I don't know a single person who actually likes generators. Like, it's like this mechanical thing that solves so many problems can model so many things. But it's like also like,
[01:12:17] the ugliest
[01:12:19] Every time I look at it, it's like...
[01:12:22] Yeah, I don't know.
[01:12:23] Thank you.
[01:12:24] Async generators seem like hard mode.  I don't know.  It's just like in some ways they're so simple because you just like go tick.
[01:12:31] tick ticker, you know, so to speak, you can just pull yield, give up control flow, like
[01:12:36] It's funny though, like
[01:12:39] Have you...
[01:12:40] Have you ever seen the JavaScript framework that uses all generators like the to do MVC?  Go check out Crank.js and look at the to do MVC and then like people should come back and then see what they they feel.
[01:12:53] Yes, these videos are always on YouTube and it's streamed live on YouTube too. I leave them up. All my stuff, we get some timestamps. So yeah, you can always come back. I know this stuff can be heavy and dense. I try my best. I answer the questions, but it's all up there for...
[01:13:08] Or longevity or whatever.
[01:13:14] Yeah, I've seen the flow abstraction.  I've always confused a little bit about this,  and we'll talk about it when we get to async flows a bit,  because...
[01:13:20] like,
[01:13:22] What tracks?  I almost...  The only time someone ever convinced me  that we wanted a flow type abstraction  was that they had a website  where they could capture the Konami code.  You know, up, up, down, down, left, right, left, right, A, B, start.  You know, the...
[01:13:36] The classic Contra, Get 30 Lives,
[01:13:40] basically, you know, or old Ninja Turtles, like basically all the old Nintendo games had this code.  You could just enter in on the controller and get like some bonus.  And he convinced me that detecting something like the Konami code in the code was actually...
[01:13:56] tricky in a signals-based system.  There's too much, like,
[01:13:59] state ephemeral. It's like using a state machine. It's like an argument. And in some ways I thought the flow was a lot cleaner of an approach than say using like x state or whatever, for if this was just your problem.
[01:14:10] But outside of that, I've been having a really hard time there.
[01:14:17] Thank you.
[01:14:21] Yeah, yeah. For later, do you like sync model for teachability mental model? Yeah. It makes  things just so much easier. I was talking to Dax, SST or whatever, and he was one of  the biggest proponents of our sync model, and he was just like... It just... It just...
[01:14:36] It's like when people come in and they expect stuff to work a certain way, it's so nice when it does.
[01:14:40] which almost never happens in React.
[01:14:42] So like it was like one of the fresh breaths, like it makes you feel closer to the platform.  It feels like you know what's going on.
[01:14:49] you know,
[01:14:50] Even though in theory it might not be completely performant, if you just go set this state and then it sets it and then you can see it,
[01:14:57] you feel good about it.  Like the don't,  you gotta be careful taking away the developer's ability to just console log  everywhere.
[01:15:06] This is a JavaScript developer thing maybe, but when you do something, you want to log, and you want to see that it did something.
[01:15:14] This is why it was one of my criticisms of React for Git, actually, because I was like,
[01:15:20] how do I make sense of what executes anymore? Right. Um, if,  if we assume that, you know, function bodies are basically pure, then you like,
[01:15:28] Console logging could poke a hole in the veil, so to speak. I don't know if that's true. We'll look at the article later about React Forget on this week in JavaScript. But yeah.
[01:15:43] So, anyway...
[01:15:47] I'm hoping you're feeling the tension.
[01:15:53] Yeah, so maybe if you have a good enough abstract and good enough dev tools.
[01:15:57] I know the Nuxt dev tools are great.  I have not played with the Vue dev tools.
[01:16:01] I haven't even installed the solid dev tools other than I think not on this machine.  At least I did look at them in one because it's really cool.  There's like a visualization.  And for like,  when you,  you could like basically see when you update one piece of state in like one place,  you could like go,  Oh,  and it updates this node over here.  It's basically like a perfect visualization of your data flow through your application.  It was really cool.  Anyways.  Um,
[01:16:24] I know Vue has, and the Vue community has amazing dev tools. It's a place I'd love to get
[01:16:27] get, you know,
[01:16:30] polished, so to speak.
[01:16:34] Yeah. When a div is a div. Thanks. This is exactly what I'm talking about. You know, you can go in solid, you can literally go like,
[01:16:43] div.jsx and see that it's a div.
[01:16:45] These are...
[01:16:46] interesting things, because they sometimes make your life a little bit harder, but then on the other hand they make you
[01:16:50] feel
[01:16:52] Like you're right there.  I mean, Svelte is actually really good on that kind of level.
[01:16:56] of abstraction where...
[01:17:00] it's not quite as flexible, like being able to pass divs around like the way we do. But like, on the other hand, they make you kind of feel like you're just in JavaScript land, even like in this example.
[01:17:12] It's sometimes not what you're actually looking for classically, which is why I think they went to Svelte 5. Like people go like that's sweet that it works like JavaScript, but I actually don't want it to work like JavaScript. I actually want to do more here. But like...
[01:17:25] I think...
[01:17:26] Those little wins, those little...
[01:17:29] feelings of being connected are, have always been what made Svelte always feel so good to use.
[01:17:37] No.
[01:17:38] Okay, sorry, I should give that an actual thing.  Proxies are a mechanism.  Proxies are like a function call.  I, you know, like, so like, and you go, okay, well, a proxy with an event emitter.  No, no.
[01:17:54] Signals are a DAG.  They are a directed acyclic graph.  It's not about the individual tracking mechanism.  It is about the data propagation.  It's about the guarantees.
[01:18:09] Thank you.
[01:18:10] There we go. Another shout out to the view folks.
[01:18:16] Thank you.
[01:18:18] There you go. Thanks, Theo. Yeah, no, it's pretty good. I need to up my tech at some point.  I keep on mentioning it. And we're like, oh, yeah, we'll get to it one day.
[01:18:31] Thank you.
[01:18:33] Yeah.
[01:18:37] So...
[01:18:39] Oh, thank you.
[01:18:41] *laughs*
[01:18:42] -
[01:18:44] So yeah.
[01:18:47] Thank you.
[01:18:48] So getting back to our overarching thing here.
[01:18:57] That's kind of like signals today. You go look at Preact signals, you go look at view signals, you go look at
[01:19:05] quick signals,
[01:19:10] whoever else signals, angular signals probably. Yeah. I imagine it's the same thing.
[01:19:15] But
[01:19:18] Solid already is doing more than that, and that's what ViewVapor looks to aim to do, and what Svelte does. And it's not just on the rendering side.
[01:19:26] we introduce a whole other graph.
[01:19:29] Everyone knows about the dependency graph, right? We teach push-pull, we talk about data dependencies. But
[01:19:36] We secretly, or not so secretly, have a second graph.  And you see this in Solid's DevTools.
[01:19:44] Thank you.
[01:19:47] Thank you.
[01:19:47] Thank you.
[01:19:49] Sorry, not to get hijacked too far over,  but synthetic events were for a fairly good reason.  They wanted to do event delegation,  which automatically does significant performance improvement,  but it's also because back...  You got to remember when React came out,
[01:20:05] The web was way better than it was in the jQuery days,  but we still needed to...
[01:20:10] patch native behavior.
[01:20:12] I'm sure if you talked to them, if they could change things, they would get rid of on change.
[01:20:17] Or do something a bit different?
[01:20:20] But in general...
[01:20:22] They, like, they...
[01:20:27] they needed to solve a gap in the,  in where browsers were at and how different,
[01:20:32] events were handled. It looks really nasty now, you know, in hindsight.
[01:20:39] It's one of my, like, the way onChange works in React just drives me nuts.  Like, developers come into Solid, Preact, any other framework is like, onChange.  And it's like, no, that is not what the browser onChange does.  But...
[01:20:50] Like,
[01:20:52] I can't...
[01:20:54] fault them for trying to polyfill it. If you go back, Knockout had a change, like, base that worked like, like,  No, Knockout's change actually worked like normal change. They actually had, like, a second mode.
[01:21:04] like value change, which worked like React.  But like my point is like,
[01:21:08] There was a good reason to have to like polyfill this early days.  And then they were stuck with it and couldn't change it.
[01:21:19] Thank you.
[01:21:25] Anyway, this is my fear, this is my challenge.  So when I talk about ownership,
[01:21:34] Um,
[01:21:35] The coolest thing about solid is you almost never actually see the ownership graph.
[01:21:41] We hide it under the render function.
[01:21:43] But there's this idea of
[01:21:47] of
[01:21:48] roots, right? And now I can't use our simple code anymore to do this. But if you've ever seen
[01:21:54] Something
[01:21:57] in solid, you can basically like, let me go cons.
[01:22:02] I'll just do...
[01:22:05] Let's just do create effect. It's the easiest thing to do.
[01:22:10] By going create effect. And everyone in React is used to returning a cleanup function.
[01:22:16] But I'm just going to say on cleanupconsole.log...
[01:22:22] high or something like that. Let's create effect.
[01:22:29] But if I go like, let's listen to count here.
[01:22:33] Whatever, it doesn't matter.
[01:22:35] Um, or I need on cleanup as well on cleanup.
[01:22:40] It's not too surprising people that we're going to see high, like initially none because it doesn't release, but every time we rerun it, we're going to see high, right? It's the same rules with creative act. Whenever it runs, we run on cleanup. But the thing you have to understand is this on cleanup.
[01:22:52] is not specific to an effect.  I could...
[01:22:56] put it in create memo.  I could put it in the component body here.
[01:23:01] It's specific to the reactive context.
[01:23:05] And it's funny, I've been talking to framework authors a lot over time, people like Fabio from Bobi, Alexis,
[01:23:14] Obviously works on solid stuff and million stuff, but he also had his own framework CompuState. And there's Sinuous and there's a whole bunch of these reactive based frameworks now. They all kind of take the ownership model for granted, but it was never present until SJS and Surplus.
[01:23:32] But it's become kind of the norm, but it's not in all the VDOM implementations. You won't find it
[01:23:37] in QUIC or in PREACT. So this ownership model is the idea that
[01:23:44] - Yeah.
[01:23:46] If you put an effect...
[01:23:49] In an effect,
[01:23:55] Thank you.
[01:23:56] you can basically register this effect with the parent effect.  So when the outer effect runs, I mean, we can just do this for fun.  Let's just...
[01:24:09] Let's make two signals and two buttons. Let's just double everything up. We're going to put
[01:24:14] Count.
[01:24:16] to
[01:24:17] here, and we're just going to
[01:24:20] We're just going to double. We're just doubling it up.
[01:24:23] count to set count to
[01:24:26] set count to
[01:24:28] Count two.
[01:24:29] Increment 2.
[01:24:34] Thank you.
[01:24:37] to do button. Let's go increment to count to sweet.
[01:24:45] Thank you.
[01:24:47] All right, I should change the message. I should be inner
[01:24:51] Outer.
[01:24:52] Right. So as I do the inner one,
[01:24:55] Here's the inner.
[01:24:57] clean up every time it runs.
[01:25:00] If I click the outer one, what you're going to see
[01:25:03] is
[01:25:03] inner run once and outer run once,  the inner outer, inner outer, inner outer.
[01:25:11] Like the cleanup function, CreateEffect automatically has a cleanup function registered in it.  It makes sense because if you didn't do this, and old reactive systems don't, and I don't even old, even modern ones don't,  they return a dispose method, you'd be sitting there managing the disposal automatically.
[01:25:26] manually of when this effect stops. But by the very nature of what we do here, we don't lose memory this way. If the outer effect reruns or is disposed of, then the inner effect is also disposed of. You don't need it anymore. And you can think about it. If the outer effect reruns, you don't want to create a new effect every time and not dispose of it. It'd be a memory leak. So, the
[01:25:48] the bass
[01:25:50] there's ways to work around it. We have like run with owner and this whole stuff, but the base model here in solid and
[01:25:56] Renders that copy are mimic solid.
[01:26:00] fine-grained rendering, stuff like Svelte 5 or ViewVapor,  is this idea of being able to have kind of like a disposal unit
[01:26:10] based on
[01:26:11] being able to nest these things, because that's basically how we do our fine-grained rendering.
[01:26:18] Yeah.
[01:26:19] Thank you.
[01:26:20] Thank you.
[01:26:21] Kind of, yeah. That's how our renderer... How do you think we get such fine-grained rendering work working? It's not just effects, it can be memos too, but think about...
[01:26:30] show conditional statements and stuff.  And inside them, they create DOM nodes  that also have effects in them  that render certain elements and stuff.  This is the secret to fine-grained rendering.  The decision points where you
[01:26:44] choose to listen to is where it marks.
[01:26:48] essentially. So if only count two updates then count one can stay the same.
[01:26:54] If count to updates,
[01:26:55] then it's possible that there's a decision.  Like if count is bigger than five,  like we can do stuff like this, right?  We can go...
[01:27:01] We can go...
[01:27:04] What if we said, like, if
[01:27:05] count is bigger than five.
[01:27:09] then
[01:27:10] create the effect and register
[01:27:13] Yeah, let's do that.
[01:27:14] Right?
[01:27:17] Now...
[01:27:18] Thank you.
[01:27:19] I
[01:27:20] Mm-hmm.
[01:27:21] The interesting thing is this inner effect doesn't exist at this point, but when I bring this one up,
[01:27:26] See outer outer outer outer outer outer outer outer outer. Oh inner inner outer inner outer inner outer outer
[01:27:31] - All right.
[01:27:33] essentially...
[01:27:36] we can bisect our whole app by using a whole React graph.  This is when I say reactivity is all we need.
[01:27:43] from...
[01:27:45] from a solid standpoint.  It's that we have this automatic ownership model.  This is what SJS and Surplus gave us.  This model that is smart enough to be able to handle
[01:27:58] Um,
[01:28:00] hierarchies.
[01:28:01] Not every reactive framework has this. That's why I'm calling this React Signals 1.5 in a sense, because this is the piece that enables fine-grained rendering.
[01:28:20] It can. The challenge is, it does.  What's interesting here is that
[01:28:28] And
[01:28:29] Why do you make a new effect here? Why do you nest an effect? What is the... what is... like, because actually with this count here, we don't need this count here, right, anywhere. It's generally...
[01:28:39] This. It's because there's a decision to be made.
[01:28:43] right? So it's not because there's a component boundary. We don't care about component boundaries.  We can might as well just be function you call. It's because there's a decision point.  If there is no decision, if your HTML shape is completely static,
[01:28:57] then there's no need to nest the reactivity because everything would be present at the beginning that is present at the end.  That's simple fine grained stuff.
[01:29:05] Preact signals updating a text node in the React implementation or whatever.  But if we're talking about conditionals and for loops and structural stuff,  then there is this...
[01:29:18] desire to have these contacts. It's not component-based. It's not based on what the end-user authors, like directly, like how they want to break up their code. It's based on the actual decision points in your actual app.
[01:29:30] We don't need a compiler to analyze them.  You do write them, the end user.  You go, yeah, there's a condition here, or there's a loop here.
[01:29:38] But...
[01:29:39] That's the context. We don't need a new context per every component. You can bring in two billion components. We need a context
[01:29:45] per
[01:29:47] structural decision point in your app.
[01:29:51] Thank you.
[01:29:52] Right? So in a sense, it's not...
[01:29:56] a particular view or a particular component,
[01:30:00] but it definitely mirrors
[01:30:02] that. It's just
[01:30:04] the, it's kind of like the largest scope of decision.
[01:30:14] Thank you.
[01:30:17] Yeah, yeah, it creates multiple because, yeah.
[01:30:25] The thing is we were able to hide the main root.  It's in here, it's in render.  One of the funniest things that people  don't always realize about solid,  I'm gonna break this for two seconds  just to show you what I'm talking about.  But if I go like this  and I make these into capital button, okay?
[01:30:42] Now there is no capital button, but if I look at the output code, you're going to notice something kind of funny here.
[01:30:50] There is no other than this render call here, which is called document create elements.  So if we made this into create root, essentially,
[01:30:58] There's no DOM APIs.
[01:31:00] anywhere to be found here. None of this is DOM.
[01:31:04] The only thing that like here this crate,
[01:31:08] component call just calls your button component, which I haven't implemented. But my point is,
[01:31:15] We've
[01:31:16] when people kind of misinterpret us as being tied to the DOM,
[01:31:20] Um,
[01:31:21] Not really. Like the lowercase JSX becomes DOM elements because it's convenient. But generally speaking, the rest of this is a tree.
[01:31:28] essentially. It's not a virtual DOM tree. It's not
[01:31:31] based on your view size so much.  I mean, I guess this is based on the size of the number of components you have, but like
[01:31:39] If I go back now,
[01:31:41] And do this.
[01:31:43] you'll see that
[01:31:45] we've hoisted
[01:31:47] the templates out, so to speak, so that the actual size is it's based on the intersection points like adding click handler.
[01:31:54] and inserting children dynamically, adding click enter.
[01:32:00] Thank you.
[01:32:01] it is a treat.
[01:32:06] It's just not a virtual DOM and it's not done
[01:32:10] even, like, there's three types of rendering in web frameworks.
[01:32:13] Generally speaking.
[01:32:14] There's this fine-grained, which just updates as much as it can based on the reactivity.  It tries to get as small as possible based on tracking.  There's...
[01:32:23] single pass diffing or dirty checking,  popularized by Angular, used by Lit, used by most
[01:32:31] you know, lightweight frameworks, Svelte before version five,
[01:32:36] And then there's VDOM, which is
[01:32:38] churn out the two pass, generate the stuff in a virtual way and then diff it
[01:32:44] on the second pass to update the actual DOM.
[01:32:46] But both the latter two ways I just mentioned involve...
[01:32:51] doing this kind of dipping pass.
[01:32:54] based on some kind of unit like a component or some kind of thing that's defined you know by the  way you break up your code whereas the reactive approach here is based on control based on data  flow so like the break points are based on the conditions of rendering or whatever it's not based  on components
[01:33:10] Anyway.
[01:33:13] Thank you.
[01:33:14] But yeah, the main root is hidden in here.  If you look at render function, if I go to SolidJS Code,  you'll just see that it basically just...
[01:33:21] It wraps...
[01:33:22] Crepefruit
[01:33:24] Insert.
[01:33:26] into document whatever you pass here but it's basically just a create root call
[01:33:35] Yes. Let me see if
[01:33:42] I think it's at the end of this article. It's an older one.
[01:33:46] Yeah, here. "Interested in how solid takes this and makes full rendering library at it? Checkout solid.js reactivity to rendering." I wrote this article a long time ago, hopefully
[01:33:54] the Angular...
[01:33:56] people at InDepth have not taken it down.  This is an Angular, these guys, it's funny,  the Angular community was very helpful early days  'cause I'd write like these huge,  like 20 minute read articles and they would post them.  This one isn't in my medium, isn't in my dev too.  I explain how to build a solid like render from scratch.
[01:34:22] Yeah, it's a tree of extracted... these practically tend to align with extracted templates. Well, right, because you can only merge a template as far as there's a decision point, right?
[01:34:32] Because otherwise it would be static.  Like if you could go through and extract all,  like if there was no decision points,  your template would just be one large blob.
[01:34:39] So yeah.
[01:34:41] Yeah, I guess that's fair to say.
[01:34:48] That's said quite elegantly.
[01:34:53] Okay.
[01:34:54] Yes, yeah, and that's what I'm saying, we already have native solutions.
[01:35:01] not React Native.
[01:35:04] But we have universal renders, we have solid 3.js, we have solid ink and PDF and all of those things. You don't need a virtual DOM to do that stuff. This is part of why we had to go so long to get back to the fundamentals. In the process, we built everything you can do in React.
[01:35:26] With the exception of
[01:35:29] Well, I'm not going to say with the exception...
[01:35:31] Because like,
[01:35:32] We prototyped it.
[01:35:33] but we didn't release it.
[01:35:35] Everything you can do in React, you can do in Solid.
[01:35:39] Thank you.
[01:35:39] I was talking about RSCs, we never released our server component solution.
[01:35:44] But...
[01:35:45] Like you can do everything you can do with my whole premise theory,  uh,
[01:35:51] behind thing is everything that can be done with a diff can be done without a diff more efficiently. That's like the guiding principle here.
[01:35:59] Um,
[01:36:01] that, I mean, whether that developer experience is
[01:36:05] *laughs*
[01:36:06] you know, aligned with your expectation is another question.
[01:36:11] But, you know, and there's a few hard problems we haven't solved, like, um,
[01:36:15] Uh,
[01:36:16] State preservation in HMR.
[01:36:20] It's actually kind of trickier with fine-grained systems.
[01:36:25] It is my belief that anything that can be solved with a diff can be solved more oftenly without a diff.
[01:36:39] Yeah, we have a solid...  Yeah, is it Solid Inc.?  We have the CLI, like...
[01:36:45] It's the funniest thing about this too, and people don't realize it's been a few years. And part of it is because Nikhil Sarif is, you know, like...
[01:36:53] the man, so to speak. Like he's, he, he can just prototype and hack out stuff like at a rate no one can match. The first week he joined Solid,
[01:37:02] like he used Solid, he made three libraries. He didn't maintain them. It's way easier to make a library than maintain them. But he made a Solid CLI, Solid PDF renderer and Solid 3.5 report. He just went in and hadn't used it before and he was like, "Here, you guys have a community thing." And we're like, "Come demo it."
[01:37:22] Um...
[01:37:23] So like, it's definitely doable. A lot of people assume because of the rhetoric that surrounded React when it first came out that you can't do these things without virtual DOMS.
[01:37:33] Right.
[01:37:34] And it's simply just not true.
[01:37:41] Thank you.
[01:37:43] Thank you.
[01:37:47] Thank you.
[01:38:01] you
[01:38:02] What are you using for CLI terminal rendering?
[01:38:08] Anyway.
[01:38:09] Did I share this article? I put it up on the screen. Yeah, I shared it. Good. Okay.
[01:38:14] We're not going to get too much into it today, but I actually kind of
[01:38:17] prototype like how like even a four component talk about reactive routes. I've never given this topic a good enough
[01:38:24] Uh,
[01:38:25] refresher, I have to admit.
[01:38:28] But I mean, that's the problem or that's that's the thing.  That's where we are today, right?  We're at a situation now where
[01:38:34] when we talk about it,  I think the ownership graph is really powerful.  We talked about disposal.
[01:38:40] Right. And clean up. Right. Nested things. But it's also how solids context API works.
[01:38:46] Um...
[01:38:47] You know, when you use use context,
[01:38:49] and provide context, we're actually, we didn't invent another thing.  We already know this, right? So if you set some context...
[01:38:57] and make a node here, we just walk up the reactivity graph because
[01:39:02] Um...
[01:39:03] we can't use other methods. We don't have artifacts like a VDOM. It actually took me a while. This is one of the things that I think Sala did
[01:39:11] first out of like SJS didn't have this one of the one of the one of the changes we made was I was  trying to figure out how to do context and it was actually tricky because you don't want to rely on  the realized DOM tree that's one way of doing it
[01:39:24] That's how like the web component context spec works.  That's how I've done it with solid.
[01:39:28] uh components that's how i do it with islands but you're creating stuff here
[01:39:33] before it's even inserted in the DOM.
[01:39:35] So the timing's wrong. You want context to be available synchronously at render time.
[01:39:39] But you also
[01:39:42] Haven't like
[01:39:43] no VDOM nodes, or like, what are you tracing? Like the functions are just functions. There's no output, like what are you walking up? And I realized that the same nesting of the reactivity graph,
[01:39:54] essentially could be the could use context.  So you don't need.
[01:39:59] even though our APIs are all DOM based,  there's a reason you want the context provider.  You don't want it to like compete with each other.  You want it to be like,  there's a reason like,  I think Dan had a,  an article about this a while ago,  Danny Abramoff.  And he was like,  why is it not use provider?  Why do we make you use a component for it?
[01:40:18] Right.
[01:40:19] These kind of fundamental decisions are important because if you make someone use a component,
[01:40:24] They have to wrap it
[01:40:26] right? There's no way, like, no misunderstanding. There's only one provider of this type here. Like,
[01:40:32] If you had a use provider, someone in a different sibling could just be like use provider, use provider, and you can all override each other or like mess with it. This API.
[01:40:42] forces it. I've always
[01:40:44] I love React's attention to detail than that.  They don't just follow a pattern because the pattern exists.  And...
[01:40:51] But technically speaking for us,
[01:40:53] Even though we're doing JSX, it is actually a reactivity feature from the ownership graph.
[01:41:06] What are we paying not to have you done the financial business and payouts?
[01:41:11] Classically,
[01:41:13] Um.
[01:41:14] It was.
[01:41:15] Memory but then the VDOM also creates a lot of temporary artifacts. Um,
[01:41:23] reactivity the memory overhead used to be considerable consideration um
[01:41:29] Thank you.
[01:41:30] There's like...
[01:41:33] Thank you.
[01:41:34] If something over-executes here, we're creating real DOM elements.  Like, React's worst case is better than our worst case.
[01:41:43] But sometimes our worst case is so much worse that people notice it sooner.  Like if you're doing something really dumb,
[01:41:50] Like you'll notice it immediately where react will just slowly and slowly and slowly kind of creep out of your control.  Um...
[01:41:57] you can lose reactivity.
[01:41:59] We've seen this. I think this is the thing, you know, where people like aren't using this model, like they're not thinking the right way. They can lose reactivity.
[01:42:07] React always just does all the work anyway, so...
[01:42:13] Same sort of optimizations don't make sense for them.
[01:42:16] So it's like,
[01:42:18] I
[01:42:19] Like these are things like for me...
[01:42:22] And a lot of solid users, like, the trade-offs are, like, not even close.  But, like, I can...
[01:42:28] There are definitely like there are differences.
[01:42:35] Thank you.
[01:42:42] Thank you.
[01:42:57] He's a question about the exclude solid in his router.  Because he couldn't make it perform...  Like, React's model and Solid's model were opposite  to the point that if you try and force...
[01:43:09] Yeah, I mean, this is actually a prime example of your previous question.
[01:43:13] Because the problem was,
[01:43:15] Most of the time when I get a React library and we read the solid, we have to do this diffing.  And we have a data diffing thing called reconcile in our stores.  And it works fine.  But it always pains me a little bit.  Like obviously if you're sending something across the wire, you don't have any referential things.  So like async stuff, you're generally going to diff.  But it always bugged me that anything that was like deeply in the client, why are you diffing when you don't need to?
[01:43:37] And it occurred to me,
[01:43:40] Uh, like...
[01:43:41] it would be really cool if we actually had fine-grained updates in the router.  But the challenge for Tanner was that
[01:43:49] We did that we implemented and worked lovely and solid and it was fine, but on the react side
[01:43:54] they had no way to interact with that. Like, so I guess maybe there's an interoperability story.
[01:44:00] Right? Like if
[01:44:01] If if you
[01:44:03] you need to be using signals of fully leveraged signals. Signals
[01:44:07] Like,
[01:44:08] reverse it like they only execute as much as needed
[01:44:11] Whereas immutable data structures do the change at the root, and they clone all the way up.  So you know at the root, you can very easily in an immutable setup like React be like...
[01:44:23] run this
[01:44:24] if this changes. So you check, you do memo, you rerun the code anyways, but then you get there and you go, "Okay, do I do the work?" and you go, "Has this changed?"
[01:44:33] Thank you.
[01:44:33] or anything below it. A reactive system doesn't do that. A reactive system goes
[01:44:38] I will change when at the point that I change at. So you can't easily be like, "Oh,
[01:44:45] Tell me if something this or everything below it changed. That's like it's anti the pattern. You don't want to run when the stuff below it changes. It will handle itself.
[01:44:52] But when you're trying to interface with React, which doesn't understand that...
[01:44:56] Like you have to make the use thing.  And that has to be your point of change where like a deep fine grain system won't actually notify because it will go, oh, actually only this one field changed way down here.
[01:45:07] React somehow has to now listen to all the potential fields.
[01:45:11] you know, below that point of change.  Whereas a reactive system would be like just more optimal  and just be like, okay, change, done.  So it's like,
[01:45:19] It didn't sit quite...
[01:45:22] write, trying to do both. And then you were forced to do like, it wasn't just detecting the change, you'd have to also propagate in a way that react understood.
[01:45:30] So even if we realize it changed, then you'd have to give it an immutable data structure.  So like every other part of the React rendering could diff because the next thing might be like, oh, has this changed?  Because that's what React does. Like as it renders, it goes, has this changed? Has this changed? Has this changed?  It just keeps asking that same question over and over and over and over and over again.
[01:45:48] So,
[01:45:49] where like
[01:45:51] Trying to force a system that's just like
[01:45:53] I know exactly what happens, just update it, into a system that's like asking that diff question, have I changed, have I changed, was not performed enough for React.
[01:46:02] Like we were hoping that like React would just make do, you know, people using React are used to not having performant things, but it was a little bit too much.
[01:46:23] Thank you.
[01:46:26] What's your thoughts incremental long? It's a dirty checking. It's a single pass diff, basically. As I said, you can basically put everything into three categories.
[01:46:33] Right.
[01:46:35] I perform... I'm on the fine-grained side.  Incremental DOM is a...
[01:46:41] single pass VDOM or dirty checking and then
[01:46:45] other VDOMs or two pass.
[01:46:52] Thank you.
[01:46:54] Thank you.
[01:46:55] It's lawless.  Yeah, I mean, to be fair, like, I didn't say it originally.  I'm going to I'm going to attribute that to the other person working on the TanStack router solution at the time.
[01:47:08] With me.
[01:47:11] Yeah.
[01:47:12] who's usually a lot more vocal about that kind of stuff.
[01:47:17] Losing reactivity? Sure. Two seconds. I mean, I can show you losing reactivity right now.
[01:47:23] What if...
[01:47:24] Instead of going count five here,
[01:47:27] I go,
[01:47:28] count five and I go, let's go.
[01:47:32] Number five.
[01:47:34] And then I go const
[01:47:36] Number
[01:47:37] equals count
[01:47:40] Now I've just completely killed this. You won't see any effects run.
[01:47:45] Because this never...
[01:47:47] Updates.
[01:47:49] because you reference the signal outside of the effect.
[01:47:53] The component doesn't rerun. It's not a tracking context. So
[01:47:58] That's how you lose reactivity, if you access the value in a place that's not listening.
[01:48:11] Yeah.  Anyway,  let's keep on going.
[01:48:15] So ownership model,  disposal,  context,  context,
[01:48:20] Error boundaries.
[01:48:23] Right?
[01:48:24] Because, again, these are kind of view-based concerns.  What ownership, like, what Daniel was getting at earlier, like, ownership considerations are kind of view-based considerations, are hierarchical.  Like, you care about error boundaries because they are...
[01:48:40] a section of your app.
[01:48:41] Right?
[01:48:42] because like
[01:48:44] You want to go, okay, something aired down here.  I can't show it consistently.  I'm going to just bail out and show something else and tell people they need to try again.
[01:48:52] But again, we can use the reactive system nesting as a way of...
[01:48:57] of setting owner boundaries, sorry, like error bounds.  Because error bounds, what are they?  But another way of doing conditional, they're an if statement.
[01:49:04] They're another way of saying like, show this or show this.
[01:49:07] What's another one? Um, suspense.
[01:49:09] Show this or show this.
[01:49:11] All these mechanisms...
[01:49:13] were built off the reactive context instead of the component context, which is why in solid,
[01:49:18] And there's that tweet I think I showed the other week.
[01:49:22] Um,
[01:49:24] See if I got in my bookmark still.
[01:49:27] Um...
[01:49:28] where...
[01:49:34] Thank you.
[01:49:37] I'm not going to find it right now. Oh, yeah, yeah. Where someone showed this example, and let me get a big screen for you, where the first thing that everyone, you know, some people notice is like, why do you need a separate component for suspense and react? Right? Like, why does suspense out here? And why is the status component over here? Yeah, this is really nice using use. But why isn't this all in one component? Well, the reason is because react works at a component basis. So because we work at a control boundary basis and solid, you can
[01:50:07] literally just take this code and stick it up, you know, like put the anchor tag in the  suspense boundary, put the, the, our, you know, use resource or whatever above. And the suspense  can be nested because it happens at the control flow level. We don't need the separate components  to do things like suspense or error boundaries. It's just.
[01:50:25] Just another component.
[01:50:28] Right.
[01:50:36] So, this is why ownership is powerful.
[01:50:41] so to speak, right?
[01:50:44] There's so many use cases where...
[01:50:47] we needed a construct, you could say, and where React has its components,
[01:50:52] we could just leverage
[01:50:55] the already existing nesting of reactivity.
[01:50:59] So in another way,
[01:51:02] While
[01:51:03] this ownership graph is another graph. It means that when I create this effect here, right,
[01:51:08] this effect keeps track of all the effects that are created under it and releases them when it reruns the same way it releases dependencies.
[01:51:16] It does have this incredible power of being able to simulate all the hierarchical stuff without adding another structure.  We don't need to add another representation.  We don't need to take up more memory for another representation of this data.  It's all the same thing.  As you can start seeing, these are just little details.
[01:51:35] bits of improvement that actually take care of that overhead and remove the classic trade-offs of using this approach.
[01:51:42] Because...
[01:51:44] Signals, again, I've said this a billion times.  It's not like you add signals and suddenly you think it's
[01:51:49] faster. It's that you are able to remove
[01:51:52] something else.
[01:51:53] that was making your system slower.  Signals, adding anything to a system,  adding signal system will make it slower.  You know, like...
[01:51:59] Look at the Preact benchmarks. Adding signals to Preact makes it slower.
[01:52:04] But
[01:52:06] Thank you.
[01:52:08] It's what you can get rid of.
[01:52:10] once you
[01:52:12] embrace the approach.
[01:52:13] Which is why, as I said, I call this maybe Signals 1.5.
[01:52:19] Yes, ownership is a treat. You're absolutely right. It's not even really a graph for anything.  There's only a single owner kind of consideration. There's places where we hop
[01:52:31] Like,
[01:52:32] A for loop, you don't want to, every time you do a for loop, you don't want to release all the...
[01:52:37] elements above. So we actually hoist the ownership a level above. So the creator of the four
[01:52:42] Axie owns it and we independently release individual
[01:52:45] elements, but it's still, you only have a single owner.  So yes, it is definitely just a straight tree.
[01:52:53] Control boundary is any decision point in your app.
[01:52:57] If
[01:52:59] If this was your app here, your whole app essentially, there's no decision point except arguably where you insert this text.
[01:53:07] But...
[01:53:08] If this piece...
[01:53:11] was, and I'm going to use React syntax to make React developers more familiar.  If this was like count...
[01:53:19] is bigger than five or something.
[01:53:24] then I'm just going to end it, whatever.
[01:53:27] Now there's a decision point.
[01:53:29] because
[01:53:30] Now there's a control flow. Like now, this may show or may not. And right now it's just a button. But it could also be a whole section of your app.
[01:53:38] And inside that app, there could be more decision points.  But it doesn't matter how many components there are.  It matters how many decision points there are.  And you can see it.  You wrote the decision point right here.  You go, like, count equals five.  It's not hard to picture what the output of this compiled is.  It's a little bit optimized because we do a bunch of memoized stuff.  But you can actually see that it's actually...
[01:53:57] Wrapping a memo around this count bigger than five and then it inserts your expression.
[01:54:07] This is where the decision point happens.
[01:54:12] And that's what I mean by control boundaries.
[01:54:14] So you could put a suspense thing here. It doesn't matter.
[01:54:19] Components don't matter.
[01:54:26] Anyway, let's keep on going because we're at almost two hours here and we're only at signals 1.5.
[01:54:37] *laughs*
[01:54:38] So,
[01:54:40] Thank you.
[01:54:41] we've done,  we've been able to do a whole lot with,  with,
[01:54:46] even with our eager...
[01:54:48] approach to building up
[01:54:52] Bye.
[01:54:52] incredible patterns here.
[01:54:54] Right.
[01:54:57] we can handle
[01:54:59] you know, suspense, concurrent rendering.
[01:55:03] transitions
[01:55:06] on top of this pattern.
[01:55:09] But there's like...
[01:55:11] Thank you.
[01:55:13] rough edges, so to speak, that I feel like could be improved. There's places where
[01:55:19] you know, eager evaluation isn't great.
[01:55:22] Like resumability, you don't want eager evaluation for resumability. You only want to run the code when you need it, right?
[01:55:27] So like
[01:55:29] All of this stuff.
[01:55:32] is...
[01:55:33] Mm.
[01:55:34] can because we're dealing with primitives can obviously just keep on getting built on top of itself.
[01:55:39] But...
[01:55:40] there's a real question of like,
[01:55:42] taking what we've learned
[01:55:44] and trying to apply that
[01:55:47] in a way that just streamlines this a lot.
[01:55:51] Thank you.
[01:55:53] *laughs*
[01:56:01] Thank you.
[01:56:02] um
[01:56:06] Signals are observables.
[01:56:08] Me and Ben Lesh have had like long conversations or signals are behavior subjects or something, but that doesn't.
[01:56:15] carry the graph implications of this.  Like...
[01:56:18] Thank you.
[01:56:19] *laughs*
[01:56:21] Signals mean more than just the event emitter. They mean the actual graph that comes with it.
[01:56:30] Yeah.
[01:56:32] From my experience using proxies quite slow.  Is it notes when the can solid uses proxy projects that I know is a solution for it?  We actually try to avoid proxies as much as possible.
[01:56:40] Our stores use proxies, but our props are actually
[01:56:45] Getters.
[01:56:47] rather than proxies, unless you use dynamic shapes like spreads.  We have to make sure that spreads work, obviously.  I'm just...
[01:56:55] Okay.  Okay.  But like, uh...
[01:56:59] We actually use getters in most cases, and by that I mean it's like object get. Like, I guess I could, let me just
[01:57:07] Just again, for sake of fun, we'll just do this.  And then I need to...
[01:57:11] make this something that
[01:57:13] would
[01:57:14] possibly be
[01:57:15] Yeah, I'm just gonna call it like that.
[01:57:17] If I look here, what you're going to see is get on click returning thing or get children
[01:57:23] return count like we
[01:57:27] we generally use getters instead of proxies.
[01:57:30] But yeah, you can see the difference actually.
[01:57:34] JS framework benchmark.
[01:57:36] The proxy version of Solid is actually in here, and it is slower.
[01:57:42] Um,
[01:57:43] Because, like...
[01:57:45] Solid's here, right?
[01:57:48] 1.08
[01:57:50] And then the proxy version
[01:57:53] is right here at 1.14. So that's like .06 slower on the chart.
[01:57:59] Um,
[01:58:01] which makes the proxy version almost as slow as lit.
[01:58:05] Um...
[01:58:07] And getting towards, sorry, I got to scroll a bit.
[01:58:11] Um...
[01:58:14] God.
[01:58:15] Um...
[01:58:16] Trying to scroll till I see something I'm familiar with.
[01:58:19] Um,
[01:58:20] Thank you.
[01:58:21] View.
[01:58:23] And, uh...
[01:58:25] some, I guess, optimal no zone angular.
[01:58:30] I...
[01:58:31] Basically, I wouldn't be too worried about proxies here.
[01:58:37] Okay, there's angular signals here. So... sometimes like the overhead...
[01:58:42] of
[01:58:44] of like proxies compared to the overhead of the rendering is probably not going to kill you.
[01:58:53] Thank you.
[01:58:54] Thank you.
[01:58:55] Okay.
[01:59:01] Thank you.
[01:59:04] Thank you.
[01:59:05] Is that example done with proxies?
[01:59:11] Svelte 5 uses proxies for deep reactivity, but I'd be interested to know if it was.
[01:59:18] Hmm.
[01:59:19] My
[01:59:22] My guess is the benchmark hasn't been updated.
[01:59:30] Thank you.
[01:59:30] Yeah. That's that's my guess. We'll see when Svelte 5 comes up, I suspect
[01:59:36] that the switch to proxies will slow it down considerably. Not much, like 0.05.
[01:59:46] Thank you.
[01:59:47] Thank you.
[01:59:48] Right, and they create proxies lazily. Yeah, yeah. I mean, that could also be the situation, yeah.
[01:59:53] Yeah, there's no proxies are enough of an overhead that I'm pretty confident that.
[01:59:58] You'll see a bit.
[02:00:01] Could there be? Well, then it can't be dynamic.
[02:00:03] Like if you knew the shape would never change, Vue knows all about this because they used to have this thing where you'd actually call a special API to add properties.
[02:00:11] No one wants to go there again.
[02:00:15] Right?
[02:00:18] Like if you know the shape won't change, it's fine.  But like if you're talking about deeply nested stuff,
[02:00:25] Yeah, like in checks. Yeah.
[02:00:31] Yeah.
[02:00:33] And we're actually pretty smart in our heuristics. We even can tell in certain types of spreads where we don't actually need to be dynamic. We actually do a lot of checks. If we can tell that all the sources aren't proxies either, then we know that we don't need to have proxies because then we know the shape doesn't change.
[02:00:53] This was something I did for mobile. There's a bunch of people who are using low-end devices, and they're like,
[02:00:57] is it possible you solid out proxies?  And I was like, not today,  because in certain cases,  but basically I figured out a way  that with the exception of them  calling passing function calls to spreads,  if they don't create any proxies themselves,  solid won't create any additional proxies.
[02:01:14] So it is possible. Yeah, we really look like it's a level of performance optimization we look at.
[02:01:23] Anyway. Alright, alright, alright, sorry. Um...
[02:01:29] So, when I talk about Signals 2.0, what am I talking about? Well, I'm actually going to
[02:01:34] talk there's a few sources
[02:01:37] here.
[02:01:38] that I think
[02:01:40] are are worth looking at. I'm just see if I can look at my notes.
[02:01:46] There should be, yeah, there's pages of them here.
[02:01:48] It's actually a solid 2.0 thing, but that's not what I'm looking for.
[02:01:54] Thank you.
[02:01:56] I actually might have not...
[02:01:59] written this out as nicely as I'd want.
[02:02:01] I'm just double checking really quickly. Do I have a future of reactivity design doc? Yeah.
[02:02:10] Thank you.
[02:02:11] Yeah, this document I've shared and talked about before on stream, but it's worth refreshing on.
[02:02:18] Um,
[02:02:21] This was just like me roughly talking about stuff.
[02:02:28] Yeah, yeah, I was working on what the next JS framework benchmark should look like. I'd been working with Misko a bit a while ago and he came up with an example, but I mean, that's a whole other topic. But yeah, I have an idea of what benchmark I want to see.
[02:02:44] So...
[02:02:49] Thank you.
[02:02:50] Thank you.
[02:02:51] High level.
[02:02:53] High level, there's two topics that I think are rough, that I think need to be improved, moving to what I call Signals 2.0.  And...
[02:03:06] These are fundamental enough that they have to be approached at the core level.  I'm already assuming that there's an ownership model.
[02:03:11] Right. Because that's how we got to where we are.  As I said, um,
[02:03:16] It's like you just watch the slope where frameworks kind of start
[02:03:20] Where, you know, maybe without signals.  And then they add them...
[02:03:24] kind of inefficiently, um,
[02:03:26] And then they add a few optimizations in their current model, stuff like that's where I consider stuff like Preact is at.
[02:03:33] And then they go, okay, I need to get to the next level.
[02:03:36] So then they add ownership and then they,  and they add this ability to do the fine grain rendering,  stuff like view vapor, cell five. Okay.
[02:03:44] Now we're kind of caught up to where solid is.
[02:03:47] So there's a few...
[02:03:49] Right. But then the next thing is, and I think people are starting to see, is that signals are also the thing that unlock resumability and solving hydration.
[02:03:58] based problems as well.  Like there's that's one zone that they improve.
[02:04:04] Thank you.
[02:04:05] There's several different applications. We saw performance and rendering. I went over this all last stream after the, you know,
[02:04:11] the big long, you know,
[02:04:13] thread with Adam, I actually saw something similar on Reddit, in solid form, someone was like,  now that everybody has signals, you know, what are you going to do, you know, you know, niche,  whatever. And it's like, no, this is this picture, if we had that those 10 years back that everyone  spent working on react to work on what you can do with with data flow, like what you could do if you  had knowledge of how data, you know, work through your act, using signals and stuff like that,
[02:04:43] We have years of stuff to kind of work through.  And I'm just kind of pointing out what I think where the next...
[02:04:50] couple steps are
[02:04:52] And for me, it comes down to async and it comes down to concurrency.
[02:04:56] These are places that I think
[02:05:01] Which basically just boils down to async, I guess.  These are places that I think...
[02:05:04] are valuable enough that
[02:05:08] we need the core permittives to kind of,  um,
[02:05:10] handle nicer. And if anyone's used solid
[02:05:15] you know, 1.0, they've used create resource,  which is basically like building TanStack query  right into the framework.  Like not all the caching capabilities,  but like essentially you just go like,
[02:05:26] I probably, if I go to www.solidjs.com, not the blog, I go to the tutorial and I pick a tutorial on...
[02:05:37] resources.
[02:05:39] I mean,
[02:05:40] Let's replace this solve.  It's pretty straightforward.  You're literally just like,
[02:05:48] Like this is fetching from an API.
[02:05:51] from the Star Wars API.
[02:05:55] And you just go create resource, set the source,
[02:05:59] Call the fetch call.
[02:06:01] And then like you're done.
[02:06:03] It even has a loading state indicator.  This works with suspense.  It enables out-of-order streaming on the server.  It's...
[02:06:12] It handles automatic serialization across the wiring.  Basically, you don't have to worry about anything.  You just go like, "Use this."
[02:06:19] Wrap some suspense around, call it a day.
[02:06:24] Right?
[02:06:27] So we need
[02:06:30] This seems good, but there's shortcomings in our approach today that I think have to be handled properly.
[02:06:38] because the first shortcoming here is
[02:06:41] This user can be null.
[02:06:43] at the beginning.
[02:06:44] Right?
[02:06:45] So
[02:06:47] If instead we wanted to get user.name,
[02:06:50] Here.
[02:06:51] I'm gonna, let's just edit this right here.  Let's say we only cared about user.name,  and I put this here.
[02:07:00] It's gonna error out because user.name's not defined or whatever. Let's see if I can do this.
[02:07:06] there's an error here in the console. If I put a question mark
[02:07:10] Well, now we're back in business and we'll just see the name as we go.  But my point is this mechanism, there's no suspense involved here or anything.  But even adding suspense doesn't change this.  It's because...
[02:07:21] it's we can just continue picking up rendering where we left off
[02:07:25] There was
[02:07:26] like
[02:07:27] We're only re-rendering this one text cell here in this pre.
[02:07:32] So like...
[02:07:33] And this one because the user loading state changes.  But my point is we're not rewriting a component or doing anything else.  That like...
[02:07:40] Essentially,
[02:07:42] you are stuck doing the null checks yourself.
[02:07:46] Right?
[02:07:52] How would I compare to Quick 2.0? Quick 2.0 is they're still working on speeding up serialization for format optimization, which is a great thing because it'll improve the performance of the resumability in terms of like initial page vendor cost.
[02:08:08] Um,
[02:08:10] But...
[02:08:11] We're kind of, this is much more fundamentals thing we're looking at here.
[02:08:17] But this is the thing is react.  I often like make it kind of, you know,
[02:08:24] thing about like the you wouldn't even be able to do this in react because like
[02:08:28] You'd okay. Let's pretend there was a suspense boundary. Let's, uh, let's put a suspense boundary in here. Um, let's go. Let's go suspense, right?
[02:08:40] Go suspense.  Let's put suspense boundary in here.  Okay.  Let's go...
[02:08:45] fallback,
[02:08:48] equals
[02:08:50] loading
[02:08:55] Let's get rid of this.
[02:08:57] And...
[02:08:59] Thank you.
[02:09:01] Let's put...
[02:09:03] suspense here. Okay, suspense. Yay. And hopefully,
[02:09:08] Okay, you see that loading.
[02:09:09] Hopefully that's updated. Let's refresh. Did this work?
[02:09:13] Yeah, okay. Loading, loading, whatever. Okay.
[02:09:16] Um,
[02:09:17] Because it's actually pulling it away before it's actually keeping it there.  So now we have...
[02:09:21] The Spence.
[02:09:21] fallback. And actually, let's put like this, just like the sanity check, it's our new one yet. It's okay.  What I'm trying to get at here is
[02:09:29] because
[02:09:30] Instead of having a create resource or whatever, they would have use.  And use is basically like a wait.  It's blocking.
[02:09:36] right?  They throw.  And then when the component's done,  it re-renders the whole component.  Whereas in our case,  we just care about this read and...
[02:09:45] funnily enough,  the same pre is probably getting...
[02:09:49] inserted and uninserted, but the like the user name is what's changing.
[02:09:55] So yeah, you basically wrap a lot of different shows because like what happens when you have like 10 fields at a certain point?  You're just like I don't want to check this every single place and
[02:10:04] I want
[02:10:06] You end up writing shell components.
[02:10:08] Thank you.
[02:10:13] Thank you.
[02:10:14] Thank you.
[02:10:19] Wait for this week in JavaScript.
[02:10:26] I think that async, and this is also important for resumability too.  Like this is why I've been talking a lot with Misko about this too, because in their case,  sometimes like these computations haven't even loaded yet.
[02:10:39] Right.
[02:10:41] Like, like this piece of code hasn't loaded yet.  So,
[02:10:46] How can you...
[02:10:48] handle the stuff where you don't have to like aggressively guard and block everywhere.
[02:10:59] Yeah, sorry. Yeah, it's the other way around. Put a show inside each suspense. Yeah, it's the other way around. Yeah, yeah, yeah. Yes.
[02:11:06] Yeah, yes, yes.
[02:11:10] With Vue, I don't have this problem null chucking every part of the data, but I use VEF and VL. Well, yes, yes, that's exactly the problem, but using VEF
[02:11:20] or VLs, or using show component, the same idea.
[02:11:25] It means that from that point, pretend...
[02:11:29] There's some other stuff in here, you know, I'm just making up like pretend.
[02:11:34] There's
[02:11:37] Like, you're basically blocking at that point.
[02:11:42] Wouldn't it be way better?
[02:11:44] if like, 'cause you know we don't run components,  we just use getters.  Wouldn't it be cool if you could create a resource down here?
[02:11:50] and have it pass
[02:11:52] The user, like, pretend this isn't actually pre, pretend this is pre.
[02:11:57] And
[02:11:58] it can render its stuff and you could basically fine-grained go all the way down the tree to the point where this is actually used.
[02:12:06] And...
[02:12:08] not worry about the null check, not block it right at the root with a VF for a show component.  Actually do all the work up
[02:12:16] front that you can
[02:12:18] and then just update the pieces fine grained where they come in.
[02:12:23] Right?
[02:12:24] Well, that's what we should do. It's that simple, right?
[02:12:36] Thank you.
[02:12:40] Thank you.
[02:12:41] Bye.
[02:12:44] Well, this is because this is not React.  Suspense disuses context.  The reason React does is because it literally throws.  It throws away everything you do here.  When it gets here, it goes, okay.
[02:12:55] First of all, you have to use it here.  And then he goes, oh, I'm gonna throw away everything.
[02:13:02] we don't have to throw away the first time you read something. We can render your whole page  off screen and then just update the pieces as the data comes in.
[02:13:11] Right?
[02:13:13] So how do we do this? Well...
[02:13:15] async generators to the rescue, right?  This is what we've been waiting for. You guys can  all come out of the woodwork and
[02:13:21] End of that.
[02:13:23] And that's, yeah, I mean,
[02:13:25] Wait and use both have the same
[02:13:29] problem uses a bit better.
[02:13:31] Because it's not...
[02:13:32] It doesn't have to block.
[02:13:35] like
[02:13:37] Like, it's not like now we can't do anything else.
[02:13:42] like React has the ability to control
[02:13:45] things a little bit.
[02:13:47] Yeah, yeah, yeah, you're still here.
[02:13:51] *laughs*
[02:13:52] *laughs*
[02:13:54] I
[02:13:55] No, I'm a little bit... I'm not completely serious, right?
[02:14:05] I'm not suggesting async generators.
[02:14:08] But what we do want, I realize conceptually, is...
[02:14:12] We want a bit of both.
[02:14:14] We want our...
[02:14:16] component or ownership tree to be non-blocking as possible. You can't. At a certain point,  you're going to hit something where you need the data and it's going to depend on it. But you don't  want the end user's authoring experience to do that. We actually have...
[02:14:31] some other challenges in solid, right?  Because what if I need to make a memo on this?  If I go const,
[02:14:37] Um...
[02:14:38] username.
[02:14:42] right? And I go user.name. Now, this
[02:14:48] Actually, let's do this.
[02:14:51] Let's go back to our little pre, okay.
[02:14:53] Back to our little pre, okay.
[02:14:55] Because if I go here and I go,
[02:14:58] username.
[02:15:02] And then I go like this. I mean, clearly it works, right? But
[02:15:09] Uh...
[02:15:10] Yeah, it's hard for me to show.  If I make this a create memo,
[02:15:15] like an actual reactive primitive.
[02:15:18] and not just like reading inside.
[02:15:22] You're not gonna see it here, probably.
[02:15:27] I need to wrap the whole...  Fine, let's just do this.  I'll show you what I'm talking about.
[02:15:32] Let's put a suspense component around the whole thing. I'm going to go app,
[02:15:36] Suspense.
[02:15:38] suspense,
[02:15:41] I'm gonna go...
[02:15:48] Only initial. This is what we want here, right? But, oh, no, we're hitting only initial every freaking time, right? Watch me. Get rid of the create memo.
[02:16:01] Oh, this is good. This is loading. It's because the second you read
[02:16:06] This in a reactive context,
[02:16:08] the way solid is right now,
[02:16:10] is it triggers the suspense above because you've now read it in that context using the ownership tree.
[02:16:16] Whereas here you're reading it
[02:16:19] under this suspense.
[02:16:21] but here when I make this a memo it's not just a function that gets run lazily here, it's being under this context. This is
[02:16:28] this is a flaw in solids design right now,  from my perspective.  It forces you that in some cases you end up
[02:16:36] you end up doing what React does.
[02:16:39] Right? Like now you're making another component.
[02:16:42] Right?
[02:16:43] Like, so at our worst case...
[02:16:45] here, we get as bad as React. And that's something I want to avoid.
[02:16:52] So,
[02:16:53] These are part of the same...
[02:16:56] kind of problem.
[02:16:58] It's because this guy doesn't know...
[02:17:02] Like this guy might not know that it's reading from an async value.
[02:17:05] Having that color your graph makes things really difficult.
[02:17:15] We can get to this, but the answer is don't. It's derive and mutate the derived value.
[02:17:24] You don't actually, you want this, the, create resource is basically an async memo.
[02:17:31] It's basically derived data.
[02:17:33] derived from an async source.  If you want to mutate it,
[02:17:36] You need to.
[02:17:38] We don't have create writable yet, but you want to mutate the layer on top of it.  You don't want to mutate it.  Otherwise you have two conflicting sources of truth.  This is actually one of the biggest reasons why Create Async is a so much better design.
[02:17:49] than create resource because we remove the ability to mutate.
[02:17:52] Um, but...
[02:17:54] We'll get there.
[02:17:59] Thank you.
[02:18:01] Yeah, yeah.
[02:18:03] Okay, we'll get there.
[02:18:06] But what I'm trying to show here is that these are kind of related...
[02:18:12] Pfff.
[02:18:13] problems because essentially
[02:18:16] we're just using the context that it's being read at.  It's not enough for our async solution  'cause we're null checking and we are doing that.
[02:18:27] We kind of...
[02:18:29] want the ability for this  asynchronously to
[02:18:33] go through the graph and only impact
[02:18:37] where it's finally being used.
[02:18:40] Right?
[02:18:41] like reading it here,
[02:18:43] Should
[02:18:45] cause this to suspend, it should cause
[02:18:50] this to suspend.
[02:18:53] The other problem is, why are we doing these null checks?
[02:18:58] So...
[02:19:01] what I proposed.
[02:19:04] is
[02:19:06] What if...
[02:19:09] reading
[02:19:11] an async resource or whatever.
[02:19:15] throws.
[02:19:16] When it's not ready.  I know, it's React.  But it doesn't...
[02:19:22] throw
[02:19:26] Along the component view graph because I'm not reading it here, right? I'm reading it like so I'm reading it in
[02:19:33] here.
[02:19:34] or I'm reading it
[02:19:36] Even when I create memo here, I'm reading it here.
[02:19:39] So like it goes, I want to throw along the dependency graph.
[02:19:45] So,
[02:19:47] If something derives from it and it's not ready,
[02:19:52] And something reads it.
[02:19:53] It would go like, read this.
[02:19:55] "Try to read this.
[02:20:00] realize that it's async  and essentially...
[02:20:06] stop here automatically without you needing a null check. It will throw.
[02:20:11] at this point.
[02:20:16] But it won't throw away the component, it will only throw up to this
[02:20:21] binding where it is
[02:20:23] At which point...
[02:20:25] Everything else just keeps on going like it always has.
[02:20:30] And when it resumes, continues,
[02:20:34] propagates.
[02:20:35] Then it will run the
[02:20:38] computation again.
[02:20:41] but it won't necessarily have to rerun the whole component.
[02:20:47] No, it wouldn't stop siblings because it's...  If you've ever looked at what solid compiles to, these are separate...
[02:20:54] expressions. If there's another sibling here
[02:20:57] that was something else.
[02:21:00] Right? It's not...
[02:21:01] It's...
[02:21:02] it's instead of it's kind of a combination of both things instead of
[02:21:08] blocking
[02:21:10] On the.
[02:21:11] It's fine-grained blocking, is the best way to put it.  It takes the best parts of React's model,  of like, you know, not needing to null check,
[02:21:20] but then it doesn't interrupt the rendering of components,  because think about it, you're only ever reading it
[02:21:27] in one of these sinks
[02:21:28] like where you're like, like, like whether it's a, you know,  create render effect or reading it in like a,
[02:21:36] Um...
[02:21:38] one of these
[02:21:40] you know, like in this DOM element or whatever. Like,
[02:21:44] we can continue to just go, "Oh,
[02:21:46] We can't insert the children yet.
[02:21:48] trigger suspense to tell it to do its thing, but we can just keep on rendering it.
[02:21:56] You're getting there. What if... does it break the dependency tracking? Because you know that this tracks.
[02:22:03] When you get to user,
[02:22:06] It goes, oh,
[02:22:07] I am listening to this and I throw.
[02:22:09] So it only tracks as far as the first thing that throws.  I'm glad.  You're on the right thinking.  If it tracks as far as the first thing throws, it's like any conditional.  Right?
[02:22:20] Right? Like, you know how you can have a create memo and you can have an if statement.  And if you go down one branch versus another branch,
[02:22:27] you can depend on different things.
[02:22:29] But it doesn't matter. Like, this is one of those old examples. I think I...
[02:22:33] Do I have it in my...
[02:22:36] Um...
[02:22:37] Where is it?
[02:22:40] This is just a refresher for people because we didn't go here, but um...
[02:22:45] The first name, last name...
[02:22:47] problem. Yeah, this one, right? Where
[02:22:50] You have a first name and last name, and then you have the choice of showing a full name, right?
[02:22:55] And then...
[02:22:58] Yeah, okay, so I'm making full name a derivation here.
[02:23:01] What I'm getting at is
[02:23:02] If
[02:23:03] Full name is off.
[02:23:07] And we
[02:23:08] Is this the right one?
[02:23:11] No, where is it?
[02:23:13] Yeah, I think this is the right one.
[02:23:16] I'm trying to find where there should be a third signal that's like show full name.
[02:23:22] Where is it?
[02:23:24] Yeah, yeah, yeah, here it is. Yeah, sorry wrong example show full name set show full name
[02:23:30] Thank you.
[02:23:32] If in this example you have a first name, last name, and then you have a toggle to show and then display name that's based on either you just show the first name or show first name and last name. If.
[02:23:43] Display name.
[02:23:44] ShowFoneName is false. So we're going to set the false here.
[02:23:48] and you change the last name
[02:23:50] Nothing runs...
[02:23:52] Because nothing is listening to last name because you're only listening to first name.
[02:23:56] Right? So...
[02:23:59] And some people, I remember, was it Michael Jackson or Ryan Florence, one of them was using solid.  And once they realized this property, they got like really scared.  But if you think about it.
[02:24:07] It's based as long as the condition is reactive, it is basically impossible for this to bite you.
[02:24:15] Because...
[02:24:16] It's only...
[02:24:17] like when you change this condition that last name could ever become a dependency.
[02:24:25] And then you will run the work then.
[02:24:28] As long as this is reactive, and it's the same thing with what I'm talking about earlier.
[02:24:36] where I was talking about here, sorry, I'm
[02:24:39] is that like
[02:24:41] As long as this is reactive and it's a decision point and it throws, as long as
[02:24:46] it won't run anything until it gets to the next,  uh,
[02:24:51] like,
[02:24:52] thing, but that's fine. There is a trade-off here. You'll see it in a second.
[02:25:05] Thank you.
[02:25:07] Yeah, I mean something like multi, but the thing is with async you're kind of always, you're already there anyways, right? Because you do part of the work and then you come back and you do the rest of the work.
[02:25:19] No, no, no.  We don't need concurrency or parallelism.  This is pure signals.
[02:25:28] What I'm trying to get at here is
[02:25:32] There is a problem.
[02:25:34] Though.
[02:25:35] The basic cases like this, you're not going to have a problem because
[02:25:39] it will just continue its work
[02:25:41] you know, here.
[02:25:43] So we unblock the big stuff and then we block the little stuff.
[02:25:47] you know, so to speak.
[02:25:49] Because now, you know, this is wrapped in a getter if it's a component.  We push all the work down to the leaves.
[02:25:55] And
[02:25:56] We don't and we we have you know, we basically don't have to null check anymore. I
[02:26:02] There is a downside here, though, and that is...
[02:26:06] that what if you're listening to two async sources?
[02:26:10] Right.
[02:26:11] I told you
[02:26:13] This is basic like
[02:26:15] basically a drive state.
[02:26:20] Right. Like
[02:26:21] like whenever user ID changes,
[02:26:24] derived async fetch user.
[02:26:27] If
[02:26:28] Memos are lazy.
[02:26:33] Does that mean we don't fetch until the first time we hit this?
[02:26:40] Thank you.
[02:26:42] Thank you.
[02:26:46] Thank you.
[02:26:49] Yeah, but no, no, no, sorry, Dave, I don't think you're following me.
[02:26:55] We already isolate the expressions.  We don't run anything again.  We're like...
[02:27:00] Okay, here.
[02:27:04] We run like
[02:27:06] Thank you.
[02:27:08] Let's hear.
[02:27:10] It's so hard because these examples are so...
[02:27:12] E- hard. Okay.
[02:27:15] Easy. Actually, you know what? Let's let me really spell this out.  Let me go text content equals this because attributes are more visible.
[02:27:23] Here, I'm just going to use text content instead of
[02:27:26] Um...
[02:27:28] Okay. When we have an element,
[02:27:32] here like this, this button that has text count and that is count times two. We wrap that update in its own effect.
[02:27:38] So if this count was async and it threw,
[02:27:44] Like we're,
[02:27:45] I mean, effects of bad--
[02:27:47] We essentially
[02:27:51] Thank you.
[02:27:52] we essentially can just like, we don't lose, like all the rest of this just continues to, you know, render.  It doesn't get rerun again. We only need to rerun this function.
[02:28:08] Thank you.
[02:28:14] Thank you.
[02:28:17] Well, the signals, and one of them is async. Well, yeah. So what will happen, so you're kind of going down the chain.
[02:28:24] it will stop evaluation at the first async one.  So you didn't actually...
[02:28:31] do the work in the first place. But you're right. I mean, you're offloading the work until the async's done. So like when it got to the first one,
[02:28:39] Because it depends on it.
[02:28:41] When he got to the first piece,
[02:28:43] You know, let's say that the really expensive client side evaluation depends on this async data and it happens after.  When it got to the async, it stopped.
[02:28:52] And then when it re-ran, yes.
[02:28:55] the stuff before the async would run again. But I mean, this, this, you,
[02:29:01] This is this yeah, this is an interesting question, right because it pushes you into wrapping
[02:29:07] stuff.
[02:29:09] um, independently. So what you're, you're concerned is it's expensive computation is before you do the async.
[02:29:15] And then you put that
[02:29:16] in
[02:29:18] Like in the create async call instead of putting it in a memo before they create async call.
[02:29:25] Does that make sense? I see what you're getting at.  Because what you're saying is, what if...
[02:29:30] What if, what if?
[02:29:32] Like, right now, this is just, like...
[02:29:35] user ID, right?
[02:29:36] But what if it's like,
[02:29:39] Thank you.
[02:29:40] you know,
[02:29:41] Sorry.
[02:29:41] do this. What if it's
[02:29:47] What if it's, let's go.
[02:29:50] return
[02:29:52] What if it's like do expensive
[02:29:56] Duh.
[02:29:57] then do it.
[02:30:00] hits this, it's async, and then it
[02:30:02] It has to do the expensive stuff again.
[02:30:04] when it gets to this point.
[02:30:09] Usually, at least in my experience, the expensive stuff happens after, but
[02:30:12] Even if expensive stuff was before, the answer is
[02:30:17] const
[02:30:18] expensive stuff.
[02:30:20] equals create memo.
[02:30:23] Expensive.
[02:30:24] Right.
[02:30:29] expensive, you know what I mean? Like, okay.
[02:30:34] Amen.
[02:30:38] Yeah. Yeah. I mean, any model that's going to like,
[02:30:46] Well, is it a problem in the current model?
[02:30:49] No, not so much because
[02:30:54] You're not going to run the stuff up to the async again.  Um...
[02:30:59] Essentially.
[02:31:04] You see affordable stuff. But yeah, I mean you start to see I mean this is this is why I'm putting out there because it is
[02:31:10] It's not without some considerations.  A big one for me, as I mentioned before, is you can recreate the diamond problem.
[02:31:20] Right.
[02:31:22] because
[02:31:24] Pretend this is async and this is async, right?
[02:31:29] And E depends on it.
[02:31:31] If it reads B and throws,
[02:31:34] And it's lazy?
[02:31:37] Then C...
[02:31:39] doesn't know it gets red.
[02:31:41] Thank you.
[02:31:42] Making async stuff lazy in general is a tricky thing to go with. So
[02:31:47] This suggests to me, at minimum...
[02:31:50] Some things...
[02:31:53] you probably don't want to be lazy. I mean there's a trade-off there right?
[02:31:57] If your async fetching isn't lazy, it means that even if this isn't connected or like
[02:32:04] on screen, you're going to be still...
[02:32:05] data fetching it in the background.
[02:32:08] But on the positive, you want to make sure that B, if these are both async, are both cued, so you don't have a waterfall here. Like you're not waiting for B to finish before C does implicitly.
[02:32:20] That's why I'm proposing create async, why I'm not just using every create memo like we
[02:32:26] You could see a future where Create Memo could just work like this.
[02:32:30] Thank you.
[02:32:30] because, you know, it gets a promise, does the thing.
[02:32:34] But I actually think the starting point of the async where you accept the promise needs to run
[02:32:40] Eagerly.
[02:32:42] if you want to solve the diamond problem.
[02:32:49] Waterfalls are the most important thing to avoid if possible. These are things that just instantly double the time for no real reason.
[02:33:01] And now you're getting to the other side of it, right?
[02:33:06] Because.
[02:33:07] and
[02:33:10] Sure, we can have our create async primitive. And if anyone's seen what I've proposed here, it's
[02:33:16] if you've seen Solid Router, it looks more like this.
[02:33:24] Get rid of expensive here for now.
[02:33:26] Um...
[02:33:28] It's more like this.
[02:33:30] Right?
[02:33:31] where you basically just
[02:33:35] have a single...
[02:33:37] a single thing.
[02:33:39] reactive tracking,
[02:33:41] Return the promise.
[02:33:44] But,
[02:33:45] Thank you.
[02:33:49] Thank you.
[02:33:50] Sorry. I'm trying to get back to the point I was getting at.
[02:33:55] There is still this challenge here that even if you preemptively do the stuff, you don't like how to suspense work in this model.
[02:34:05] How do you make sure to not run all the end user effects?
[02:34:10] Right.
[02:34:12] And what that comes down to
[02:34:14] Um,
[02:34:16] I is where I I had in here what I considered
[02:34:21] The ability...
[02:34:23] to control flashing boundaries, essentially. It's kind of like the ownership idea, but the idea that
[02:34:31] that
[02:34:32] you could basically have things that flush together,  whether that's suspense or not.  And yes,  if you hit the,
[02:34:42] Mm-hmm.
[02:34:43] during rendering, if you hit any of these things, hold the end user effects.  Now, we still have a problem here. How about if you're halfway through rendering
[02:34:52] and you hit this thing.
[02:34:54] Well,
[02:34:55] ...
[02:34:56] Something that Solid does today is that we call render effects immediately and then
[02:35:02] Afterwards we schedule them at the same time as like after the first run as
[02:35:07] as
[02:35:09] So
[02:35:10] same time as user effects, essentially.  They run before, but they schedule afterwards,  so they also get held.  Like, if you're in a suspense state,  like we've detected async.  But I think...
[02:35:23] one of the
[02:35:24] easiest solutions to this kind of zone is have render effects split
[02:35:29] the pure
[02:35:31] from the
[02:35:32] from the effectual part.
[02:35:34] It's kind of funny.  It's like the opposite...
[02:35:36] of
[02:35:37] Like I just showed you how we're trying to change create resource into something simpler.  Like get rid of that.  Like just.
[02:35:43] like that, essentially, with CreateAsync. I'm suggesting that render effects
[02:35:50] should be a pure part and an effectful part.  That way you can run the pure part, the dependencies for rendering, as many times as you want
[02:36:01] you know, and this comes to concurrency in play, before running the actual rendering effects.  So here is where you catch all the async stuff, that dependencies.
[02:36:11] And then if it...
[02:36:13] doesn't pass that,
[02:36:15] You're free to run this as many times as necessary as async
[02:36:20] pieces kind of come in, you know, with fine grade notification. But then
[02:36:25] When the effects
[02:36:27] are
[02:36:28] Ready?
[02:36:30] you know, like, so all the async stuff's done, then you can go run these effects before the end user effects.  This being kind of like the split between
[02:36:39] Um,
[02:36:41] between the effects zone and the pure zone. Remember I mentioned earlier that problem of when you go lazy, you no longer have guarantees and
[02:36:49] of the computations happening during the pure phase.
[02:36:53] How do you solve that scrolling problem?
[02:36:57] One way of solving that scrolling problem
[02:37:00] would be to use a render effect.
[02:37:04] where you can measure because you know everything that happens in the pure side, half of the render effect, happens before rendering.
[02:37:12] and then end user effect or typical create effect.
[02:37:17] would happen after rendering.  So you'd have that guarantee
[02:37:24] of always measuring before and getting it after.
[02:37:27] because basically async
[02:37:30] and the pure part of rendering effects,
[02:37:33] are always...
[02:37:35] um, scheduled to happen
[02:37:39] before
[02:37:40] the actual rendering or the rest of the side effects work.  We kind of bring back that model with laziness by by basically giving these a special time to execute.
[02:37:53] Thank you.
[02:37:54] Yeah, except the biggest difference between this
[02:37:57] is we take a function so our ours are dynamic they can change at runtime but yes
[02:38:07] Yes, you guys are hitting on it. This is a big part. The thing is you never end users almost never write render effects. This is what we this is what the JSX produces.
[02:38:19] You...
[02:38:20] don't write these. You generally just write your data and do that. I'm talking about
[02:38:25] What this turns into
[02:38:30] Right? It is a lot like the React split here.  And I think that something...
[02:38:36] valuable to learn from React from that, right?  This is how they keep their
[02:38:42] cleanness, you know, this is how they they basically can solve, you know, the concurrent rendering and stuff. This is better than our current solution, which holds work is now we could actually continue to update render effects.
[02:38:58] even
[02:39:00] after that first initial render.
[02:39:04] Well, that's the whole thing.
[02:39:06] I'm saying end users don't need render effects, but effects at all is hard. Animations, places where you read the DOM, this is generally where it is. You need that entry back into the system. There's events, like when the user clicks, and then there's...
[02:39:20] you know, post render type effects things like, oh, this updated, I need to read a value from the DOM or whatever.
[02:39:31] Thank you.
[02:39:34] I mean, the problem with that is one of the, my, there's a couple of things here.  You...
[02:39:41] are now responsible for hoisting this if you want to actually...
[02:39:46] you know, do these things. Also, I have to take SSR in consideration, things like out-of-order streaming. One of the big, like, even if you go back to eBay back in the day and look at their old fragment streaming thing, they had a concept similar to Suspense. Sure, it was just a direct read, like, promise into a component, like an await component or control flow, but...
[02:40:05] What these patterns do with suspense do is they invert control.  So what ends up happening is,
[02:40:12] So you create some async data, you derive it, you put it in your view,
[02:40:18] This render effect happens under the hood. You're not
[02:40:21] really doing anything with it.
[02:40:22] It's just your JSX.
[02:40:24] And then...
[02:40:26] You set where your placeholder boundaries are.
[02:40:28] like from a layout standpoint with suspense...
[02:40:31] And then the right stuff shows at the right time, regardless of race conditions or regardless of how these things kind of come in.
[02:40:39] Trying to hoist this yourself and losing that inversion of control when, you know, someone adds something new async downstream or something becomes a source of, you know, complexity.  Like, yes, you can always hoist it up.  Right.  I'm making the same argument people make against.
[02:40:53] route loaders, I suppose.  But the difference here is that...
[02:41:01] we're actively trying to push the dependencies downwards, right?  We want to flatten the hierarchy as much as we want.  We want to get the async reads as close to the DOM as possible  to do the least amount of work.  So if we're pushing stuff downwards,
[02:41:15] Like that?
[02:41:16] We don't want you to worry about how to hoist it all the way back up.
[02:41:26] Right? The difference between this and a VDOM is VDOM produces the artifacts.
[02:41:31] This is this is like not unlike what we've always done in solid in terms of reactivity and data.
[02:41:37] We're not creating a virtual representation here.
[02:41:48] Yeah, and what you've noticed here is  essentially we still have crit effect.  Right? I was just reading...
[02:42:01] this whole thing. We still have CrateEffect, right?  For end users. But CrateComputed  is not really part of this model, right?
[02:42:09] which is actually important to talk about in a moment because –
[02:42:15] We're actually...
[02:42:18] We actually keep on parity, if not reduce the number of primitives here, and create resource becomes create async, essentially.
[02:42:26] Um...
[02:42:27] So
[02:42:28] CreateRenderEffect changes its form, but no one uses it directly anyways.
[02:42:33] CritEffect still exists.
[02:42:35] This better sets up things like concurrent transitions. You can see the pure effectful split. This better sets up not needing null checks, meaning the awareness of async.
[02:42:47] Um,
[02:42:48] is a lot easier even when you're deriving async.  You know, stuff just kind of, you just wire it up and it kind of,
[02:42:55] fits to where you need it in your UI.
[02:42:59] But,
[02:43:00] Um...
[02:43:02] Thank you.
[02:43:06] Another side effect, so to speak, of getting rid of lazy is
[02:43:11] around scheduling, we have something today in solid called create computed, which runs before rendering and does side effects, which is like the sorry, the dumbest thing you could ever come up with. I'm I did because these are use cases. It's like all the reason reacts tells you not to use use effect. But if I covered on stream, but in their docs, they actually suggested
[02:43:29] rather than use effect, just right to the state while it reacts rendering.
[02:43:36] and it's probably better than using use effect.  Crate computed is our version of that.  It's like the thing that we have is the escape hatch  in the sense for all the things you should never do.
[02:43:46] because you should be deriving data as much as possible.  But Create Computed,
[02:43:51] It's really easy where you can have a signal
[02:43:54] and then have it
[02:43:56] you know, like sometimes driving data is hard, right? Like, because you're like, what if I have  a source, you know, coming in from above and then I want to keep my internal state. So like, as you edit it,
[02:44:07] you know, you have a signal, but then you want to make sure that whenever the props change, you overwrite
[02:44:12] that signal with the value from the props.
[02:44:16] I kind of think of like the perfect example of that.
[02:44:22] get rid of all of this, but let's pretend button was, you know, like this, right?
[02:44:28] I
[02:44:28] And then
[02:44:30] you know,
[02:44:31] It doesn't really matter, but
[02:44:34] You, like...
[02:44:35] It doesn't I don't have anything here, but like pretend you had like in here you had.
[02:44:40] Um...
[02:44:42] I don't know, value, set value, okay.
[02:44:46] equals createSignal, right?
[02:44:49] And then you might initialize it to props.value, let's say. OK, button's not a good example, but but then you might go, OK, create.
[02:44:56] computed or you might say create effect but the problem with create effect is it runs after  rendering so you everything's a double render but you do create computed and go set value
[02:45:04] props dot value or something.  And then this way,
[02:45:08] you could have some logic in here that like, you know, whenever you
[02:45:12] you know,
[02:45:15] Whenever you do something, I don't know, I've just got a button here.  You basically update the value of this.  And then when the props change, it overrides it.  This is very common kind of synchronization thing.  And I talk about my derivations of reactivity, how synchronization is not...
[02:45:31] Great, right? I actually have it right here. See, synchronization. State A, state B.
[02:45:35] Um,
[02:45:37] Okay, that's derived. And then synchronization would be...
[02:45:41] Uh...
[02:45:42] Oh, where is it?
[02:45:44] Yeah, okay.
[02:45:47] derived, upper name being uppercase version name,  synchronization would be having state of upper name  and an effect that writes to it every time you run it.
[02:45:57] And
[02:45:58] There...
[02:45:58] The thing is, the difference between derived here
[02:46:02] And this effect is it's possible
[02:46:06] and you see it here, it's possible for me to write to that signal myself
[02:46:10] independently
[02:46:12] of
[02:46:13] of
[02:46:14] of this, you know, reaction. The problem with this though is we can't track up the graph.
[02:46:19] As soon as you inject a signal in here, we lose all those properties that we like about drive data.
[02:46:27] because we don't know anymore, right?  With a memo or drive data, you can always go,  okay, you read this, you read this.  Let's say this...
[02:46:39] I have it in my example here, upper name.  Let's say our state is upper name now.
[02:46:45] we don't know that this effect updates upper name. Whereas here,
[02:46:50] We know that upper name depends on name.
[02:46:53] Right? Like we can see it. It's like in here.  We track it when it does it.
[02:46:59] But,
[02:47:00] Here
[02:47:01] Upper name has no idea that it depends on name. This effect just writes a value to it. It doesn't realize that it depends on name. You've broken the graph.
[02:47:10] essentially by using synchronization.
[02:47:13] Here it's a tract dependency. Here it's a tract of this effect, but this has no idea that it's been derived.
[02:47:20] which means that you lose all those nice properties of signals.
[02:47:28] Thank you.
[02:47:31] Thank you.
[02:47:42] Thank you.
[02:47:44] Thank you.
[02:47:45] Yeah, local copy, right.  I think these are the places...
[02:47:51] ...
[02:47:57] I think that these are the places where we need to look at...
[02:48:03] the primitives again.
[02:48:05] Because like...
[02:48:07] we don't want to encourage this, right? One of the things that we've been talking about is something called "create writable"
[02:48:12] which is,
[02:48:13] Um...
[02:48:14] is
[02:48:15] essentially of which example here? The idea is instead of writing this,
[02:48:20] You would write.
[02:48:22] This.
[02:48:29] Thank you.
[02:48:32] Thank you.
[02:48:36] It's slightly different, but it changes this considerably because now you have a primitive that's aware of its dependencies and can still be overridden, but then...
[02:48:48] Bye.
[02:48:48] But then.
[02:48:51] you know,
[02:48:53] trace back, right?
[02:48:56] This
[02:48:57] Subtle little difference.
[02:49:00] is generally the pattern that you essentially should be following here.  We should derive...
[02:49:07] on top
[02:49:09] of this data and then mutate it ephemerally because ultimately, eventually the source of truth needs to get back and drive down from the top.
[02:49:18] You need to save it to the server and have it come back down.  But we do have ephemeral state, and we want to be able to not rely on synchronization.
[02:49:30] So this is the kind of thinking where we're at.  The funny thing is this is actually not that hard to implement in Solid.  It's actually...
[02:49:41] A memo of a memo.  It's like second order memo.  I'm not going to pull out the implementation right now.  Probably it's like in a discord chat.
[02:49:50] And I'm probably going to
[02:49:51] piece through it a bit, but essentially the idea is you can you can basically make
[02:49:57] Like,
[02:49:59] it's like you can or no, it's a memo of a signal.  Like essentially you derive
[02:50:05] A signal.
[02:50:07] So instead of like, it returns a signal essentially, so that when this changes, you get a fresh reference to that signal.
[02:50:16] Thank you.
[02:50:19] Right, yeah. And there's things called writable computeds in Vue and Knockout.
[02:50:27] Um,
[02:50:28] where you can set custom logic.  But I'm saying it's like,  we really need to get away from synchronization.  Another one where this is tricky is stores.  But like where I'm trying to get at is  instead of props about value,
[02:50:40] This could also be...
[02:50:42] Good.
[02:50:43] some async thing.
[02:50:45] Right. So like, you know, this could be like const
[02:50:50] my user equals create async.
[02:50:54] you know,
[02:50:56] fetch user, which is going to give me some promise or something.  Fetch user props.id. Okay. Right. And then
[02:51:04] Thank you.
[02:51:05] What I'm suggesting here is, then you could be like, look, user.name, and now,
[02:51:14] Name...
[02:51:15] that name.
[02:51:20] Thank you.
[02:51:22] Like...  This is the sort of...
[02:51:28] You're kind of making a.
[02:51:31] a derived...
[02:51:33] Like you see how we keep the graph this way.
[02:51:35] So obviously solving this for stores or deep proxies is something that's a little bit more challenging.
[02:51:41] Um...
[02:51:42] But essentially this way we keep the properties and you don't have like,
[02:51:48] The problem is if you start doing writes,
[02:51:52] while you're deriving stuff, some nodes might run more than once.
[02:51:57] They might have the old value and then you write it and then they get the new value.  You want to kind of avoid...
[02:52:01] this kind of jitter, so to speak.
[02:52:04] Thank you.
[02:52:07] Thank you.
[02:52:08] Thank you.
[02:52:12] Thank you.
[02:52:13] Thank you.
[02:52:15] Thank you.
[02:52:19] Help with the optimistic UI. Yeah, I mean, the other change helps too. I don't know if any of you guys have been trying to build a Trellix demo with Solid.
[02:52:28] you
[02:52:29] basically need to merge stores essentially to get it to work properly.  And we don't have a primitive for that today.  And it's hard because you have to build it into the,  because of the way our resources work,
[02:52:42] because we don't have the derived async.
[02:52:46] Currently, it's actually a bit of a pain. You end up just using like an effect or computed to write to a store to do the diff with the async thing. And at that point of read is where the suspense triggers. It'd be way nicer if we could just derive it and then merge the data in the derived value.
[02:53:01] So, yes, I think this has benefits in that case as well.
[02:53:14] Thank you.
[02:53:18] Yeah, I mean, the trickiest part now is there's a certain duality between the primitive version and the store version.  Like, there's create async.
[02:53:28] If you've seen the router, we also have CreateAsyncStore, which...
[02:53:32] automatically diffs the data coming in.
[02:53:35] This is create writable, again, which works on single field.
[02:53:39] you're probably going to want a version where you can
[02:53:42] basically diff...
[02:53:45] the data coming back from CreateWritable.
[02:53:49] As I said, these cases...
[02:53:52] .
[02:53:56] Yeah, these cases will allow for...
[02:54:02] keeping the directionality and allow for super fine-grained updates essentially. If anyone's used createasync store in like
[02:54:08] with the data thing.
[02:54:09] and without trying to merge the optimistics,  like when your optimistics is kind of separate,  this thing is like magic.  You essentially just get the data,  and then it diffs the data,  and then automatically just updates the one place in the UI.  No components rerun.  It looks insane.  It looks like you're like,  how is it that I'm like...
[02:54:26] using this with like
[02:54:27] cache and actions from the router data loading patterns,  and it's revalidating and fetching everything.  And then like literally nothing reruns.  And it's just like, bang, this little one tick in the UI updates  when I'm getting fresh server data in validation patterns.  Like it feels super powerful.  We need the same kind of power in...
[02:54:46] And
[02:54:47] on the memo.  And actually if we did,  we wouldn't need create async store.  We could just use create async.
[02:54:53] And then whatever...
[02:54:54] like create diff or whatever was like whatever the primitive was could just wrap it and that would handle both cases both diffed
[02:55:02] derived normal data or diff derived async data. This is the important part you can see when you start dealing with these primitives is
[02:55:09] the patterns just fall into each other at that point because then
[02:55:13] Like, okay,
[02:55:14] you have, whether it's a memo, whether it's async, whatever the source is, you have a common pattern for being able to handle, say, how do I do a diff?
[02:55:22] of the data, and that could
[02:55:25] derived naturally from whatever source, right? As long as we keep the directionality.
[02:55:30] How do we, you know, so
[02:55:32] This is...
[02:55:34] You know, I don't want to get too...  I'm very careful here of not getting too crazy down the rabbit hole of making a whole bunch of different primitives.  The stuff that needs to be core needs to be core.  The other things can be easily built in user land, can be easily built in user land.  I just...
[02:55:50] Async is important enough because of that different characteristic of lazy versus eager.
[02:55:55] Um...
[02:55:58] you know, so anyways.
[02:56:03] Oh.
[02:56:07] Well...
[02:56:14] Are the links from YouTube not coming through? Is that the problem?
[02:56:18] Okay, did you go? Yeah, the links don't come through through YouTube that they do come through through twitch.
[02:56:26] Thank you.
[02:56:27] Oh, it's funny.  I saw you talking about it, but I guess the links didn't get through.
[02:56:36] Yes, some people have made it in the community package. Yeah.
[02:56:42] so
[02:56:45] Yeah, I want to see what that looks like. I want to know what the optimistic updates look like.
[02:56:51] Thank you.
[02:56:54] Which brings us to an interesting point.
[02:57:02] Thank you.
[02:57:03] It's an interesting question, right?  It depends on how well we can merge the stuff, right? If we derive too much,
[02:57:10] Um,
[02:57:13] Thank you.
[02:57:14] If we don't have to keep complete copies of everything in memory, then we're good.  We do everything by reference anyways, so we don't really want full copies.  We want...
[02:57:24] We want to be able to...
[02:57:27] It's an interesting problem. I actually...
[02:57:33] Basically, every one of those touch points would probably need its own copy of at least some portion of the data.
[02:57:41] So, yeah, it's a this it's deep stores in this area is an unexplored area and it's a place that I'm interested in.
[02:57:55] Thank you.
[02:57:57] but okay  yeah I talk a bit more in this article I shared earlier  where I talk about being able to control flushing
[02:58:08] Again, this is...  But the async stuff actually...
[02:58:14] I actually talk about render effects here.
[02:58:17] I use create memo here, but I realized afterwards the problem.
[02:58:22] Good.
[02:58:25] Yeah, async components, I gave up on that because it's just blocking. It's confusing.
[02:58:30] Yeah.
[02:58:30] Yeah, never mind. I think I covered everything in this article pretty well.
[02:58:35] Um,
[02:58:36] Thank you.
[02:58:39] I think...
[02:58:41] What I want to see...
[02:58:44] is
[02:58:46] The whole effect, scheduling suspense side of things,
[02:58:49] It's in the effect zone. It's in the ownership tree. It might be possible...
[02:58:54] that that can keep out of
[02:58:57] any kind of common piece of runtime.
[02:59:01] But it gets harder and harder when we start introducing ideas of async where we could propagate it through, right?  See...
[02:59:09] I've got...
[02:59:11] If I go to SolidJS,
[02:59:14] GitHub right now.
[02:59:17] There's a project here and you guys may have
[02:59:22] seen it, may have not, it's kind of gets buried down here somewhere. It's called solid.js/signals.
[02:59:30] Thank you.
[02:59:32] And this is very rough. I only started looking at it again this week, as you can see.
[02:59:40] But this was the beginning of an implementation. And the truth of the matter is,
[02:59:44] I haven't actually
[02:59:46] played with it all that much. I was trying to get effects to work
[02:59:50] Um,
[02:59:51] And what...
[02:59:52] What's interesting here is that...
[02:59:57] Create async is important.
[03:00:00] implemented a basic version of it.
[03:00:01] that Milo implemented. I don't know if I'm going to be happy with how this works yet,
[03:00:06] But it's here.
[03:00:10] So,
[03:00:12] He's been working, doing a lot of research here,
[03:00:15] On this, we have what create render effect, create effect, create root.
[03:00:19] Run with owner, catch error.  This is the full API surface right now.  Catch error, run with owner.
[03:00:25] CrateRoot.
[03:00:26] create render effect, create effect, create memo.
[03:00:30] create async, create signal.
[03:00:33] Yeah.
[03:00:33] That's about it in this library. It's pretty small.
[03:00:40] I think Rahim and Milo have been working on it way more than I have.
[03:00:46] I was actually kind of thinking that I'd actually try it and see, see how, see if it was like behaving the way I wanted to.  But I don't know how much time we have to do that right now.
[03:00:57] But for those who are wondering if this is already in progress,
[03:01:01] It is.
[03:01:02] I ran the previous version of this through the JS Framework benchmark,
[03:01:07] really raw where I just kind of like hacked it together.  And it was .02 slower than current solid in my local tests.
[03:01:15] without doing any kind of optimization.
[03:01:20] So it's a good baseline to get started here.
[03:01:23] Yeah, let's just pull this down locally.  Let's see if...
[03:01:30] Let's see what we can do here.
[03:01:32] Solid start. No, um...
[03:01:36] Let's see if I actually have it.  I might actually have it from before.  Let's see if I have it in fork.
[03:01:43] Um...
[03:01:47] X reactivity, the original version of it.
[03:01:57] Yeah, yeah, yeah. This is the same repo, yeah. Cool, cool. Okay.
[03:02:02] Let's open it.
[03:02:03] Thank you.
[03:02:06] Thank you.
[03:02:07] All right.
[03:02:09] Look around.
[03:02:12] Open...
[03:02:13] Development.
[03:02:16] Thank you.
[03:02:18] Thank you.
[03:02:25] Okay.
[03:02:29] Thank you.
[03:02:31] Alright, so other thing we could do though, there's a bunch of tests in here.
[03:02:37] But.
[03:02:38] Thank you.
[03:02:39] Maybe all we need to do is just build the library as is right now.
[03:02:46] Right.
[03:02:47] and then just copy the ESM output into like the playground play with it.
[03:02:52] Maybe I should install first, shouldn't I?
[03:02:54] Yeah.
[03:02:56] Thank you.
[03:02:59] Thank you.
[03:03:02] I should probably delete the old disk folder because my suspicion is this is way out of date.
[03:03:09] I'm gonna...
[03:03:10] This is, to be fair, I didn't test the latest version. I got in the other day, noticed that effects were running synchronously and I wanted them to be delayed. And then I kind of like, it was like, okay, well,
[03:03:20] Okay, so what's dist here?
[03:03:22] Oh perfect, prod node dev types. Okay, so I can literally just take prod here and I'll
[03:03:31] What is it?
[03:03:34] About 900 lines of code here.
[03:03:36] Okay.
[03:03:37] I wonder if code size would be interesting.  There's some big comments in here, so let's just copy that.
[03:03:42] And then
[03:03:50] Looks good to me. Some of these things are exported that probably don't need to be. Okay.
[03:03:56] And then we can just call this
[03:04:02] signals,
[03:04:03] dot ts
[03:04:05] work.
[03:04:07] Post it.
[03:04:08] Beautiful.
[03:04:14] import
[03:04:17] Thank you.
[03:04:17] create signal
[03:04:20] from signal
[03:04:22] Signals.
[03:04:27] Moment of truth here.
[03:04:29] Thank you.
[03:04:30] Thank you.
[03:04:31] this work.
[03:04:35] I'm going to go ahead and get to the next one.
[03:04:36] um
[03:04:39] Let's just do both, create effect.
[03:04:49] Hello.
[03:04:51] Thank you.
[03:04:52] Thank you.
[03:04:54] Set.
[03:05:00] Thank you.
[03:05:04] All right.
[03:05:07] Thank you.
[03:05:09] Please work.
[03:05:12] I haven't even tested this, so...
[03:05:16] The tests work fine locally, but...
[03:05:20] I have no clue what this will do.
[03:05:23] in this environment.
[03:05:27] Yeah.
[03:05:29] Do we get any errors in the console?
[03:05:39] I wonder if like I'm hitting on something
[03:05:44] Because it's...
[03:05:47] There's create effect here, right? Like this definitely
[03:05:50] Great.
[03:05:51] Backed.
[03:05:54] Thank you.
[03:05:57] Okay, let's, let's, let's just do the whole thing. Let's
[03:06:01] I wonder if this is like...
[03:06:07] I wonder if this is...  Let's just...
[03:06:13] God.
[03:06:15] And...
[03:06:22] Oh, interesting.
[03:06:26] It's in the actual console, but it's
[03:06:29] Not in this console.
[03:06:32] *laughs*
[03:06:37] That's interesting. Okay, that's fine.
[03:06:40] We don't need this console anyways, right?
[03:06:49] Thank you.
[03:06:50] Yeah, I don't know why...
[03:06:55] Am I like...
[03:07:00] Thank you.
[03:07:01] Let's not worry about that.
[03:07:02] Let's not worry about this. Let's just, let's, was the create root even necessary?
[03:07:09] No, it wasn't. OK.
[03:07:11] To be fair, we're probably just not warning and I still think we probably should if I do this.
[03:07:16] World, yeah. What's interesting here is the create effect is already using this because let's play here. Flush sync.
[03:07:24] Right.
[03:07:26] Thank you.
[03:07:27] Let's go flush sync.
[03:07:29] There we go. Hello, world. Hello, John.
[03:07:32] The first thing you notice about this system is it's
[03:07:39] It's doing global batching.
[03:07:42] like view, like react, like spelt basically like everyone else, right?
[03:07:48] Second thing to look at here. Okay, so flush sync works.
[03:07:54] Let's make const double again, like we did earlier in the stream. Create memo.
[03:08:05] Let's go console.log.
[03:08:07] Do the work.
[03:08:11] And then
[03:08:13] Let's go return
[03:08:16] S
[03:08:17] times two
[03:08:21] Great.
[03:08:21] I'm all...
[03:08:24] *sniff*
[03:08:26] Now...
[03:08:30] Oh, I guess let's do it's not double. Let's do
[03:08:33] to upper.
[03:08:38] And let's call this one upper.
[03:08:47] yeah we see we see uppercase world and uppercase john and do the work twice now
[03:08:58] Sorry, I'm trying to get like...
[03:09:00] Amen.
[03:09:01] I want this to get smaller, but...
[03:09:05] Yeah.
[03:09:06] And then let's see what else we, we're just trying stuff. Okay. What, what if we get rid of the crit effect?
[03:09:14] Yeah. Okay.
[03:09:17] And let's call upper ourselves.
[03:09:22] Yeah, so what you're seeing here is that without the effect, the memo doesn't run.
[03:09:28] That's another difference here. So this is lazy, right?
[03:09:32] Upper never runs in this... here.  Flush sync doesn't do anything because there's no effects.  Setting jawn doesn't do anything.  It's only...
[03:09:41] When there's a sync, when there's an effect,
[03:09:43] that the memo runs so
[03:09:46] Yeah. Okay. Perfect.
[03:09:49] Okay.
[03:09:50] So this is the basics of it. We have a lazy reactive system
[03:09:55] that
[03:09:57] Does...
[03:09:59] Thank you.
[03:10:00] Microtask space. Schedule. Schedule.  Choose scheduling.
[03:10:04] and auto global batching. Okay.
[03:10:09] Thank you.
[03:10:10] You know what I want to see.
[03:10:12] I want to play with Crate Async.
[03:10:16] Play with Create Async. I want to see how this works.
[03:10:20] Okay.
[03:10:23] Um...
[03:10:24] Thank you.
[03:10:25] Thank you.
[03:10:31] Thank you.
[03:10:34] Because I am curious.
[03:10:37] Let's do...
[03:10:40] Thank you.
[03:10:41] new promise,
[03:10:46] Thank you.
[03:10:49] So funny, because I have to like move this in order to new promise. Let's get
[03:10:56] Rez.
[03:10:57] Right, right.
[03:11:00] Let's just set a timer.
[03:11:02] Thank you.
[03:11:03] You do something like
[03:11:06] Set timeout.
[03:11:11] Rez.
[03:11:13] World.
[03:11:17] And let's not uppercase it. World.
[03:11:21] for one second.
[03:11:23] And then
[03:11:25] This no longer has a setter.
[03:11:27] which means this whole thing is pointless.
[03:11:33] Thank you.
[03:11:34] Thank you.
[03:11:37] Thank you.
[03:11:38] What's going on here?
[03:11:42] Let's refresh it.
[03:11:45] Okay, okay. So first thing this shows me
[03:11:49] is by default
[03:11:51] this does not have my crazy behavior because it's asking me to null check this right.
[03:12:04] Right, it's just doing do the work, hello undefined, do the work, hello undefined. Okay. Now, my understanding is
[03:12:10] is
[03:12:13] that
[03:12:14] It's just because of the default of how this is set up, that this behavior that I want does exist, but it's not how they defaulted it. Let's take a quick look at the code again and see what they're doing. Um...
[03:12:30] Thank you.
[03:12:32] Create async.
[03:12:35] rate, value, rate, rate, rate, signal.
[03:12:41] okay what i'm looking for there's something called
[03:12:47] Let me see here.
[03:12:52] Utils. What's in utils?
[03:12:54] Thank you.
[03:12:55] Cheers.
[03:12:56] Nothing.
[03:12:58] you
[03:13:03] No, I did, at this point, you're right.  At this point, the flush, but that's a good question.  'Cause at this point, the flush,
[03:13:09] Sink.
[03:13:10] I think is
[03:13:12] not important.
[03:13:14] No, yeah, sorry.  The flush sync was just when,  so I can show that we could set it twice.  So the flush sync doesn't make a difference here now.  Now we're back to kind of natural behavior.  Let's...
[03:13:26] I want to look at the implementation of CreateAsync because I know that
[03:13:30] Milo did a whole bunch of work here.
[03:13:34] I think
[03:13:36] we need to look at the
[03:13:43] Yeah.
[03:13:51] What is this being passed into?
[03:13:57] Because there's... I'm not seeing it right now. There should be a...
[03:14:01] Read so he's doing read read and
[03:14:06] Thank you.
[03:14:07] And
[03:14:09] Let me, sorry, I need to, it's the code for this is in something called
[03:14:14] core, I think.
[03:14:15] The co- what?
[03:14:17] Core loading. Wait.
[03:14:19] Wait.
[03:14:20] read returns read,
[03:14:22] Wade goes...
[03:14:24] This loading
[03:14:26] Throw not ready error.  Okay, okay, okay.
[03:14:28] So,
[03:14:30] Thank you.
[03:14:32] Okay. That's interesting. So the question is.
[03:14:36] I'm just going to go back to the playground because I guess I could have just looked at the code in the playground, but...
[03:14:41] I think if we go in here...
[03:14:44] and we change
[03:14:47] Find it create.
[03:14:50] async.
[03:15:01] What if it's... wait...
[03:15:04] No.
[03:15:08] Here?
[03:15:11] No, okay.
[03:15:12] I'm gonna have to look at this more. It's interesting. I actually see the code in here that suggests that
[03:15:19] Oh, actually.
[03:15:26] No? Okay, never mind.
[03:15:30] I see the code in here that suggests that it can handle the throwing, but...
[03:15:37] I haven't looked at this very much.
[03:15:45] No, I never looked at QT, actually. People brought up to me later on, but most of my influence came from...
[03:15:53] Knockout, then MobX, and then SJS.
[03:16:00] Yeah, it's hard to get around the small window. Yeah, it's fine.
[03:16:05] I we we can continue to explore this in the future. I just want to set the basis.
[03:16:11] I think I'm good on this for now.
[03:16:16] 'cause I, it's interesting 'cause I see the code  that does it, right?  If we look for weight here,
[03:16:29] it goes, it basically during the async time, it's supposed to throw not ready error.  And then if I look for not ready error, I'm hoping,
[03:16:40] Then...
[03:16:42] Thank you.
[03:16:45] It tracks it
[03:16:47] and then sets it out.  So like it looks like the code is set up to do this. I just,
[03:16:53] a misunderstanding
[03:16:55] how to actually
[03:16:57] trigger it, because the wait seems to be only available on the internal node.
[03:17:03] And then...
[03:17:05] If I had Milo, he could probably tell me exactly what I'm doing wrong.
[03:17:09] But I hadn't been able to test this yet, so I thought, okay, maybe I'll just try it right now.
[03:17:20] Because there's two computations here.  There's their signal...
[03:17:25] So he's modeling it using a signal, and then...
[03:17:34] Thank you.
[03:17:34] The signal... read, read. I wonder what the double read does. But then basically I would have hoped that this wait here would have been the thing that threw.
[03:17:47] I wonder if like I wonder if you like the problem is you actually have to like wait all the way through
[03:17:52] I don't know.
[03:17:54] that would be interesting to say the least
[03:17:58] But
[03:18:00] No.
[03:18:06] Well, no, that's the idea. Sorry, if I didn't explain this already...
[03:18:10] the we're starting from the signals package. This was the effort. I haven't, I haven't reviewed it in the very much in the last year, but this is the new, like we were starting solid 2.0 from
[03:18:23] starting from
[03:18:25] building the base primitives in the signals and then building everything back up on top of it again.
[03:18:35] yeah so like  the idea here  it's like what
[03:18:42] It's like, how many places can I put weight until this works?  But the idea here is that...
[03:18:53] Yeah, in any case, the idea here is
[03:18:57] That...
[03:18:58] We will...
[03:19:01] I mean, effects probably aren't being batched anyways.
[03:19:08] Wonder...
[03:19:13] Yeah.
[03:19:16] Yeah, no, I don't think I'll be able to get to there. The idea is this work will then become the foundation we build the next version of DOM expressions on and then everything kind of channels out from there. So it starts with rebuilding the reactivity system. And then on these primitives, which
[03:19:33] we've identified.
[03:19:35] And then it will continue to kind of go out into the rendering and then, you know,
[03:19:41] on it. This is the big part. If when we get like the current version, these signals don't have concurrency or transitions. The async model isn't quite where we want to get it to yet. But essentially, when we build up this reactive system and add those couple of features,
[03:19:58] Most of the rest of the 2.0 stuff will be built on top of it.
[03:20:04] I think the brunt of the work is in this, signals.
[03:20:07] repository.  And then...
[03:20:11] Um...
[03:20:12] From there, we'll have to do a bunch around DOM expressions around, you know,
[03:20:19] the split between server and client, like server has some different behavior.  Like right now, we don't actually have reactivity on the server
[03:20:29] that can aliasing and then kind of build out there to solid 2.0.  But like,
[03:20:33] The big chunk of the work is this stuff.  Just haven't, as I say, got back to it.
[03:20:41] Thank you.
[03:20:42] Months.
[03:20:44] That's what I'm anticipating.  This...
[03:20:51] I'm hoping to get the right async model and get transitions in the next couple of months, a couple of weeks, and then building out the rest of solid at that point. That part should be, yeah. My target was for the fall.
[03:21:06] Um...
[03:21:08] But yeah.
[03:21:09] Yeah, just to give you an idea.
[03:21:12] No, exactly. Like, the...
[03:21:15] Yeah.
[03:21:16] So, you know, this is where it's at today. The basics of the system are good. I know the performance. We need to work on the async model and the flushing model render effects. I knew as a little premature coming in here today, I was hoping I could just like play with it and see it. We see the async stuff works. It's just not doing anything.
[03:21:36] the behavior that I want, quite the behavior I want to get to yet. But this is the base place. And I'm going to start putting a lot more focus here. I've been very distracted with Salt Start.
[03:21:46] Um,
[03:21:47] So I'm very excited.  That's the big thing.  I'm very excited here.  We've talked about all the decisions making that got us to this point.  Talk about all the different kind of things.  And while I've made a big...
[03:21:59] thing out of it. The end result actually shouldn't be that
[03:22:03] big, so to speak, right? It's
[03:22:07] Thank you.
[03:22:07] it's you make a lot of hard to sign decisions and then you,
[03:22:12] Like we're talking about, you know, I can see the library getting a lot larger.
[03:22:17] Um,
[03:22:18] when we add some of these features, but like...
[03:22:22] you know, tree shakable,
[03:22:24] The signals library on its own is really nice abstraction. We didn't talk about it here, but like create store is in here and we simplified create stores implementation as well.
[03:22:32] Um,
[03:22:35] Actually, I can probably show it in the tests.
[03:22:39] The store implementation is also in that all that code that 800 lines or whatever.
[03:22:46] It's... it's...
[03:22:48] It's about 200 with all the comments and TypeScript and everything in here.  And the biggest difference that we've been looking at with stores
[03:22:57] is
[03:22:58] Um...
[03:23:01] Let's look at an example here.
[03:23:03] is using produce as the
[03:23:07] as the default API for it, so that you would use
[03:23:11] localized mutations, no more of this weird, you know, undefined merge object, not merge object stuff.  It's a lot like immer this way. We still offer the path syntax, but the store basically
[03:23:22] Set store call gives you reference to something that you mutate.  I think it would help people understand what's happening a lot better.
[03:23:29] Um...
[03:23:30] We're still keeping the read/write segregation, because that's still important to us.
[03:23:34] But...
[03:23:35] Especially because when you pass stuff through, you don't want anyone just to write stuff randomly. But the idea here is that
[03:23:43] Yeah, it allowed us to simplify things and actually make it
[03:23:48] represent something that's more like natural JavaScript than like our DSL that we built on top. Yeah.
[03:23:56] Anyway, I think we're good on this topic.  We start talking about this week in JavaScript because there's some good stuff here as well.
[03:24:06] Give me a second for me to switch modes here.  But we haven't even talked about Solid Start yet.
[03:24:15] So, yeah.
[03:24:17] What does flush do? Flush schedules when the effects run.
[03:24:22] Yeah.
[03:24:25] Like it's basically saying like run them now.
[03:24:28] Um, essentially. All right, let's, let's get this going. Thanks for joining me today. I know it was a little rough towards the end. The learning part was good. The theoretic, the future stuff was a little bit.
[03:24:39] rougher than I'd like, but, um,
[03:24:43] I think the direction is actually getting pretty clear.  The trade-off is a lot better understood.
[03:24:52] Yes.
[03:24:53] Yeah, it's kind of ironic because I did so much work to give an immutable JS interface over something that is actually mutable underneath the hood.  And Imer gives a mutable interface on top of something that's actually immutable under the hood.
[03:25:09] Um...
[03:25:10] We first played with this store design when I was working with Tanner.  Because he refused to use emmer for some reason.  I guess he didn't want the extra blow.  But I was like...
[03:25:19] This can be where your interface is. If you want the router to support both sides, have it use immer for React and have it use RStory API for solid and just swap it. And then all the rest of the APIs can look the same. React can get its immutable stuff.
[03:25:34] and do its updates that way and solid can get its fine grained updates.  Because the thing you have to understand is
[03:25:40] Immer.
[03:25:41] lets you write mutations, but you still have to, under the hood, it still has to do all the object cloning and all the, like, reference, like, structured cloning and, like, all the checks and react as it renders and all that kind of stuff.  Um...
[03:25:54] in solid's case like just
[03:25:57] you know, the mutation literally, like, it's a proxy. It's just like, trigger this one spot, you know, and then it'll just trigger the signal over there. So like, the overhead...
[03:26:06] is significantly less on our side, but I mean, yeah.
[03:26:16] Yeah, it's so funny. I I've I've really liked strict contracts and stuff of immutability and I've tried I've always tried to kind of push people that way because I find in the long run it makes them do the right stuff.
[03:26:32] Which I think is...
[03:26:34] ultimately very important. But I can understand why, you know, people might not, you know, have the same opinions as me on this stuff.
[03:26:43] Yeah.
[03:26:47] Anyway, okay, yeah, I think I have everything.
[03:26:52] set up for
[03:26:55] for this week in JavaScript.
[03:26:58] So we should get started, shouldn't we?
[03:27:01] Roll it back.
[03:27:03] When did this week start anyways? What are we on, with 22nd?
[03:27:10] There, there,
[03:27:14] Thank you.
[03:27:15] Was there actually that much stuff this week? Just scrolling.
[03:27:21] I'm not
[03:27:23] Yeah, there's a few things. Okay, let's keep going.
[03:27:26] Thank you.
[03:27:29] Yeah, local mutability is fine.  And that's what we're playing here at...
[03:27:35] All right, all right, let's do this.
[03:27:39] Okay.
[03:27:40] Let's switch over.
[03:27:43] All right.
[03:27:44] And let me get my banner.
[03:27:50] And talk about this week in JavaScript.  Um...
[03:27:53] not nearly as much as trying to catch up from three weeks last time.
[03:27:59] But definitely a few things definitely came up. So I'm, I'm, I'm happy to talk about those. Get started.
[03:28:08] Um,
[03:28:10] There was an interesting TypeScript discussion that came up last week, I guess last Friday.
[03:28:17] And the whole article here about like
[03:28:21] What happened to it? Yeah. You can't make children type safe in React and TypeScript.
[03:28:26] Um...
[03:28:28] Thank you.
[03:28:29] And it's talking about this whole select option thing.
[03:28:33] Component is always a JSX element.
[03:28:36] Right.
[03:28:39] So the reasoning behind this is always true. And this is one of the earliest issues we actually opened as part of the solid community on TypeScript because we're trying to be like, why can't element 2 be a div?
[03:28:52] Well, you know, we tell everyone a div is a div. Why can't element to be a div?
[03:28:57] And
[03:29:01] Thank you.
[03:29:05] and like
[03:29:08] Yeah.
[03:29:09] They're talking about all these things.
[03:29:14] option as any I should be showing below. Funny enough, this does work if I call option manually.  Yes, but as you call this JSX, it does not, right? It's not possible to restrict it. Okay, blah, blah. Okay, we know this.
[03:29:25] But...
[03:29:26] There was, I thought there was something here about
[03:29:30] Let me see.
[03:29:33] And would you ever even want to?
[03:29:40] Okay, so Dan's actually agreeing that you'd want to there.
[03:29:45] And I was actually saying that it was
[03:29:48] kind of annoying because because the div equals div thing so actually it seems like he's in agreement why you would want it indeed restricting direct children type is pretty useless because of great okay because you have my
[03:30:00] - Option, even if it's renders option.
[03:30:01] So one point where flow type is innovating  where typescripts check render types.  Well, see, this is the thing I'm not as clear about.  Maybe you TypeScript people can help me out here.
[03:30:08] I don't care if someone passes, and maybe people do, I don't care if someone passes capital option or my option.  I care that they ultimately return capital.
[03:30:17] lowercase option.
[03:30:19] Right.
[03:30:20] And...
[03:30:21] If the types worked the way that our types would, we could ensure that.
[03:30:25] Right? It's hard because our functions are just functions.  We wouldn't want to ensure that people only return one type of component, I suppose.  But it would be interesting if we can ensure like
[03:30:36] like the right dom children get inserted.
[03:30:40] I mean, this starts getting really crazy, but picture if you could actually...
[03:30:45] know that like
[03:30:46] You can't put a certain type of element inside another certain type of element, and TypeScript could tell you that.
[03:30:54] Right?
[03:30:57] Yeah, yeah.
[03:30:59] You don't need render types. If you got return types, it would be enough. Exactly. Yeah. Yeah. Yeah.
[03:31:05] Thank you.
[03:31:10] A few folks are like, yeah, we love typesafe thoughts.
[03:31:13] Yeah, it's interesting.
[03:31:17] But yeah, so I kicked up a little bit of a thing on this. This is like one of those things I just I would love to
[03:31:22] see TypeScript help people, you know, get from
[03:31:27] you know, not just react
[03:31:30] There's a few things on this list.  This is one of them.
[03:31:33] It was a good discussion.  It's interesting to hear that even the React team,  there's a few cases where they're like...
[03:31:38] thought about it, but I...
[03:31:40] Yeah, I don't know.
[03:31:44] This is like first week that I use JSX with TypeScript.  Like we basically identified five issues.
[03:31:51] I think one or two of them have been addressed now.  This is one of the three remaining ones that I'd just love to see.
[03:31:58] Thank you.
[03:32:02] To be fair, if it's not immediate children, it doesn't actually do a ton.
[03:32:06] But, I mean, it's still really interesting to think that you could actually...
[03:32:10] be like, no, you can't put
[03:32:13] Um...
[03:32:15] you know,
[03:32:16] I mean, I guess most rules in the DOM can be broken anyways, but it'd be interesting to say, like, you can't put this type of element inside of this type of element.
[03:32:23] Right. Like this is an actual problem we have with SSR because the
[03:32:28] they'll get pushed out. Picture if you could say like
[03:32:32] You know, tables, they're very specific on which elements go inside which children.  Like, you can be like, no, no, you can't put that element there.  And TypeScript could tell you.
[03:32:44] To be fair, a lot of things would probably just be any-ing anyways. I don't know, it'd be interesting.
[03:32:51] -
[03:32:53] We talked about this a bunch last stream.  I just retweeted the Python paradox.  It's a good read for anyone.
[03:33:01] All right, so we got the React compiler thing.
[03:33:05] Yeah, and we're the Wiz thing, okay.
[03:33:07] Let me just check if there's anything else I want to talk about.  Yeah, okay, this is low-hanging fruit.
[03:33:14] There was this poll this week where...
[03:33:18] People are asking
[03:33:20] Web devs, what the default HV method for the form element is.
[03:33:23] I'm going to, hey, I've got chat here. Do you guys know what the default is?
[03:33:28] a few methods for the form element.
[03:33:34] Yes? Yes, it's definitely put and delete. Yeah, thanks guys.
[03:33:41] No, seriously, can I...
[03:33:45] Right. I mean, no one's going to admit that what they voted for now, right?
[03:33:51] *laughs*
[03:33:54] Yeah.
[03:33:55] Yeah. Okay. Thanks chat for participating in this. I see a lot of gets, which is the correct answer. I do see a few posts or people say I voted post.
[03:34:07] Because, like, honestly, post would probably make a ton of sense.
[03:34:12] Thank you.
[03:34:13] I'm not sure I even remembered this when I first was working on this stuff.  I think I did because I was working on Marco and it refreshed me on it.
[03:34:21] But like...
[03:34:22] If you actually go and do a form action in solid start, we don't do what next does, which is automatically make it a post.  We tell you to add the post method to it if you want to use an action.
[03:34:33] We only support post actions on, you know,
[03:34:38] So please put the method equals post on it.  So that's our middle ground, right?  The Remix guys like Brian Florence would kind of like...
[03:34:48] Don't... they made it to Stinkow next.
[03:34:51] a little bit not much but next high you know and rscs can like say like
[03:34:56] post by default and
[03:34:59] Thank you.
[03:35:00] and
[03:35:01] More than that, they hide that fact, because you don't write
[03:35:05] method equals post you you they just like automatically make it a post and then the web  the default is get so it is kind of interesting
[03:35:18] Right.
[03:35:22] So...
[03:35:25] Yeah, a lot of people from the single page app world never needed to know this. And that is what Adam Rack is saying here. I know he's a bit of a shit poster, but he's like, if knowing shit like this mattered, more devs would know it. Learning TypeScript is more valuable, career learning React is more valuable, learning Nex is more valuable, learning Solid. Some people thought this was like a slight against Solid. I think he just literally ran out of characters.
[03:35:47] because he's been very supportive of Solid Start,  especially since I chewed him out on signals last week.  So, yeah.
[03:35:55] Bye.
[03:36:04] It's funny, I bet if you pull the button, they can get it right, but they wouldn't go to ToDo app.
[03:36:12] Thank you.
[03:36:13] Thank you.
[03:36:15] So
[03:36:15] - Yeah.
[03:36:17] Thank you.
[03:36:18] Thank you.
[03:36:19] Thank you.
[03:36:20] Yeah, no, this is the problem when you diverge from standards.  I think it's okay to say, like, look, they should be...
[03:36:29] post, but then have a capital form component.  When you next has a lowercase form, which makes you kind of be like,
[03:36:37] "Oh, I thought forms just worked like this." And it's like,
[03:36:40] No, they don't, right?
[03:36:43] our middle ground isn't great because now you know it'll complain at you but at least um
[03:36:50] you know,
[03:36:52] We're teaching while we're complaining.
[03:36:56] Thank you.
[03:36:58] Thank you.
[03:37:01] So, yeah, it's interesting.
[03:37:11] I thought this one was worth pointing out because this conversation just keeps on going on.
[03:37:16] Where's this one? 676.
[03:37:19] Adam goes on to show a very broken JS example,  and was like, look, if you don't know this,  then you don't know, like basically just being cheeky.  But,
[03:37:30] you
[03:37:30] I don't know.
[03:37:33] Thank you.
[03:37:34] There's a lot of weird
[03:37:35] stuff in the DOM. You probably should know your tool
[03:37:39] But it also probably like if this was something you knew,
[03:37:43] You literally...
[03:37:45] for the last
[03:37:47] 12 years could have coded and never come across this and been perfectly successful in web dev.
[03:37:52] Like this could not matter even remotely.
[03:37:58] Thank you.
[03:37:59] Anyway, let's keep on going. What other cool stuff here on the random bag? Oh, yeah.
[03:38:05] This is a fun one. This might rub some feathers, but if you're using Next.js and SSR mode for documentation, you're probably making...
[03:38:11] making a mistake. I like this graph. Um, sometimes we, uh, we raid, uh, Chris after,  after the stream, but, um,
[03:38:22] He points this little pocket for SSR. I don't know if I agree. I think the SSR pocket is
[03:38:28] can extend in space, but to this point, I'm in agreement.
[03:38:33] You don't really need...
[03:38:37] Server rendering
[03:38:39] For docs.
[03:38:42] Probably not.
[03:38:45] The question is,
[03:38:47] how small this portion actually is.  What we're seeing is this portion is actually trying to eat this portion.
[03:38:59] Right.
[03:39:02] Bye.
[03:39:04] But, yeah, I don't know if this is all that controversial.  Did anyone else reply?  Oh, there's Theo.  Going further left with SR tech is a mistake.  Funny enough, I see this with Remix devs and Next one since Next aggressively builds routes ahead of time.  Going further right with SR tech is becoming more and more worthwhile just for data learning paths.  Yeah, I mean, this is an interesting one.  Next caches so heavily that people end up not doing that much dynamic stuff with it.
[03:39:29] But this is the hot spot, right?  You see like eBay, right?  This is where, like, we all know  we can make these performantly, it's trivial.  This is where performance starts to matter,  and it's like right on the flux point where you don't want,
[03:39:44] this.
[03:39:45] So this is almost where the whole...
[03:39:48] conversation is focusing on.
[03:39:52] But I think in general, like, Fred from Astro had a graph kind of like this, and he tried to place the frameworks on it.  I think this is...
[03:40:00] pretty good look at kind of where these things kind of sit.
[03:40:07] Thank you.
[03:40:07] Okay, we have...
[03:40:10] Okay, let's get there in a minute.
[03:40:13] Let's some quick solid JS news while we're going.
[03:40:17] Attila's been on fire  or Attila however you say  the name I asked  and everyone's like oh it's all good and I'm like  well that's not helpful
[03:40:29] But yeah, great podcast talking about solid for an hour as an outsider, not just me chatting off. I thought this was actually really, really useful one from a third party. Like.
[03:40:38] from a React developer standpoint.  I think...
[03:40:41] It helps, you know, I've been so deep in signals. I don't always, you know,
[03:40:46] Thank you.
[03:40:47] You know, I maybe can't relate.
[03:40:49] as much anymore um so i quite enjoyed this podcast um
[03:40:54] new guide on how to use web, create extensions using SolidJS.
[03:40:59] Pretty sweet as well.
[03:41:02] I saw this and I thought this was kind of interesting.  Nuxt Hub, because we both use Nitro under the hood,  they had no problem just deploying a solid...
[03:41:10] Solid app.
[03:41:11] just worked straight out of the box. This makes me happy with SolidStart. It's nice to see this kind of like benefit of everyone just kind of using the same tool and just being able to just get it to work.
[03:41:24] Okay.
[03:41:30] Yeah, okay, let's let's let's we'll do that one after let's keep on going.
[03:41:36] No.
[03:41:37] Let's go to the next one.
[03:41:41] Okay, let's talk about this one.
[03:41:44] Um...
[03:41:46] Bye.
[03:41:47] I actually...
[03:41:49] I want to actually, I'm going to change my view here.  Just give me one second.
[03:41:53] I'm going to change what I'm presenting.
[03:41:56] Okay.
[03:41:59] Because I'm going to present...
[03:42:05] A chrome tab.
[03:42:07] Oh, will that work?
[03:42:11] Yeah, let's try this.
[03:42:14] .
[03:42:18] Do you see the weird borders I see?
[03:42:25] It's like cutting it off on the top and the bottom. Anyway.
[03:42:32] Okay, well, I'm glad this looks okay for you. It looks weird for me.
[03:42:40] I thought this was cool. New article.
[03:42:45] We have to open it in this tab for this to work.  Ah, it's opening it in another tab, of course.  Damn it, I didn't think this out very far.
[03:42:53] Okay, give me a second.
[03:42:55] We will do what I want to do in a second.
[03:42:57] For now, I'm just going to share the whole screen. We'll come back to what I wanted to do.
[03:43:04] He talks about how
[03:43:06] the React compiler uses type inference to figure out how to auto-memolize props.
[03:43:11] Because or autumn.
[03:43:13] Auto-memoied stuff.  So he's showing like...
[03:43:17] So here's like a simple example where you've memorized a component in React.
[03:43:22] as a user, user-person name like that.
[03:43:26] Thank you.
[03:43:27] He's talking about identity.
[03:43:32] So basically because they know that a primitive...
[03:43:35] can be the same, but an object can't be,
[03:43:38] if they know that something that calculates tax can only return a primitive,
[03:43:45] Um,
[03:43:47] you know, it can inform their approach here. Because he, look, he's using, he's saying,  naively, you could just use use memo to wrap each of these calculations.
[03:43:57] But
[03:43:58] Because they know the type is...
[03:44:00] what the type is,
[03:44:02] they can decide to not use it. So he's explaining how they're doing. Solving the equation. The process of solving these type equations is called unification. Unification process attempts to find a substitution of type variables that make all the type equations equal. Solving the type equation for our example are pretty straightforward. The points subtotal, we don't know its type. Blah, blah, blah, blah, blah, blah. Now we're getting back to our original question in the price code. The compiler can infer that all the values are primitives. There's no actual need to memorize total, subtotal, or tax in this price code, saving bundle size and memory.
[03:44:31] So,
[03:44:33] Instead,
[03:44:34] they basically don't memoize this and then just check the primitive value and do a shallow check,  kind of similar to Asphalt used to do, which is they create their element,
[03:44:44] total. So basically if it's not equal,
[03:44:46] replace it, otherwise return the previous value of t1.
[03:44:51] That's essentially how their compiler works.
[03:44:54] Thank you.
[03:44:57] Right.
[03:45:00] Yeah.
[03:45:01] Thank you.
[03:45:07] So they were able to use rules of React and say, like, you're mutating local state without using set state. Interesting stuff.
[03:45:15] The funny thing about this...
[03:45:17] Thing is, I think this is very powerful.
[03:45:20] Because I could tell that the work here isn't expensive because it's just an equality check because
[03:45:26] of the value. But
[03:45:29] Um,
[03:45:31] So that answers like a pretty important question. But what I thought was interesting was
[03:45:38] Devin Gavitt's response.
[03:45:42] In your example, what if calculate subtotal or calculate tax was a very expensive operation? Wouldn't it be worth memoing then even if the inputs were primitives?
[03:45:52] "Great question. There is a potential tradeoff. We've been thinking about the compilers as a way of bound re-renders. In practice this hasn't been a problem and not memoizing everything has been the right tradeoff considering memory bundle size. Interesting. So in that case you'd still need to write use memo manually I guess. Perhaps worth reframing the compiler as something that reduces unnecessary re-renders rather than something that optimizes performance when re-rendering is necessary. I've seen it marketed as you'll never need to use memo again, but it seems like it's probably not really true."
[03:46:21] It does absolutely optimize performance when re-render is necessary too, because of a memorized component, re-render is much faster because not everything has to be re-computed.
[03:46:29] All right, okay.
[03:46:31] In my opinion, it's still a React issue when compared with something like Solid.  In your example, if only state changes, you would still...
[03:46:37] call calculate subtotal even though the items did change.  It's less granular, so you still need to think about what to manually memo.
[03:46:43] Oh, he even mentioned us.
[03:46:44] I miss that.
[03:46:46] Yeah.
[03:46:47] Okay.  So, yeah, this was an interesting conversation.
[03:46:54] And, yeah, the reason I was talking about it is I found this interesting.
[03:46:57] example really interesting because
[03:47:01] Um...
[03:47:05] I
[03:47:06] I actually, he, I think they did it intentionally perhaps, because I used this exact example in one of my talks. Um,
[03:47:19] Right. Let me show here. Share screen. Now I can do this because this is the easiest way for me to get it.
[03:47:27] in here. So let's do this. You can do it for further navigation. Oh, we could base. No one
[03:47:35] So it didn't remember my timestamp.  I hope other people got it.
[03:47:38] React team that talk about auto-reactivity.  It isn't only that memoization is insufficient to solve the performance  consideration, it's that with implicit memoization,
[03:47:47] it's a lot harder to explain the mental model.
[03:47:50] The audio is coming through, right?
[03:47:53] Did I share that right?
[03:47:56] Kids are going to have to tell me.
[03:48:00] Okay.
[03:48:02] Thank you.
[03:48:04] Right? What do I mean by that? Well, pretend you have a bunch of code that just looks like plain  JavaScript that runs from top to bottom.
[03:48:14] Um,
[03:48:15] How?
[03:48:16] Can you-- does it still feel like it runs top down if--
[03:48:20] Only certain parts of the code just happen to run.
[03:48:24] Like, this is a--
[03:48:26] fictional situation.
[03:48:29] No one knows how the React compiler is going to run at this point, but I just wanted to do this mental exercise.  Because when I was working on Marco, we had a very similar kind of concern. Because pretend you put a console log,
[03:48:41] in each of these functions.  And this is just like a simple setup where you
[03:48:44] I'm going to go ahead and go ahead and go ahead and go ahead and go ahead and go ahead and
[03:48:45] calculating, you know, maybe you went to a restaurant, bought a bunch of food, calculating the total, and then you're calculating like a federal tax and then like a local tax.
[03:48:53] And
[03:48:54] Obviously, the first time this runs, it'll run, and you'll get three console logs, right? You'll get the one for the subtotal, you get one for the tax, and get the one for another tax. But the question comes in,
[03:49:04] What happens
[03:49:06] with this code when you go, "Oh, I'm in the wrong state," or whatnot, and you just switch that, and you only change
[03:49:13] the state tax rate. Well, if it was most frameworks today,
[03:49:16] It would just rerun everything, you get the three console logs,  and you see the output.
[03:49:21] Would it be strange if just the last function just happened to run?
[03:49:26] Now, I've inlined it so it's very clear to see that only that function depends on the state tax rate.
[03:49:33] But it could also-- this could have all been inline, like just a bunch of logic inside your component.
[03:49:39] the
[03:49:40] Compiler just decided, oh, these lines of code need to run.  These other lines don't need to run.
[03:49:45] And...
[03:49:47] It's kind of hard to actually explain.  I think it becomes difficult to explain it top down.
[03:49:51] you might start talking about data dependencies changing.  And honestly, if you've used React any time recently,  hooks or whatever.
[03:49:58] You're familiar with talking about data dependencies.  And this is where I'm getting at.  You might even describe this as being reactive.
[03:50:05] Thank you.
[03:50:06] It's not about memorization anymore.
[03:50:08] Thank you.
[03:50:11] Anyway, yeah, I just just wanted to show that little clip for a second because it was just interesting that that piece from that talk basically ended up and I gave that talk a few places, but.
[03:50:24] That it basically ended up in...
[03:50:26] in that article almost as the actual example.
[03:50:30] Um...
[03:50:31] So, yeah, I'm going to swap this back so I can share everything again.
[03:50:39] Um...
[03:50:43] But yeah, it's interesting because I think the takeaway for me here is like,
[03:50:50] It's what Devin said.
[03:50:52] Don't get me wrong.
[03:50:53] it's sometimes in solid you have to decide what's expensive and when to  create memo as well you know like when you want to do a calculation but it's like
[03:51:02] I think it reacts doing the right choice of not over-memorizing.
[03:51:07] generally speaking, but it's important to realize that
[03:51:11] They're not.
[03:51:13] like removing the need to be aware of how data flows through their app.
[03:51:18] Like,
[03:51:19] Like...
[03:51:21] It's a better default.
[03:51:24] Right. I think that's how I wrote it.
[03:51:28] Um...
[03:51:30] This optimization will allow some
[03:51:35] code that is
[03:51:37] Not.
[03:51:38] that's written kind of naively to operate better.
[03:51:42] But it...
[03:51:44] Won't necessarily optimize...
[03:51:47] Like, it won't necessarily like
[03:51:50] There's only so much you can do, right? It's not going to necessarily make your
[03:51:53] Like...
[03:51:55] Yeah, I don't know how to phrase it.  Because it sounds like it will...
[03:51:59] Make the...
[03:52:00] It'll make the worst cases...
[03:52:03] I thought in the worst case is better. It's it it's kind of like I
[03:52:08] the default
[03:52:10] is in a better place, which means it'll have an impact across a lot of projects in ways that will be meaningful.
[03:52:18] But...
[03:52:19] it's not going to probably
[03:52:23] make headlines. And when you need to optimize, you're still going to need to go in and optimize.
[03:52:29] Yeah, what Devin said.
[03:52:33] *crying*
[03:52:36] Thank you.
[03:52:38] Thank you.
[03:52:39] Yeah, I mean, it's a really cool thing.  It's just...
[03:52:44] It's interesting. I feel like it's because  React's at a point now where...
[03:52:49] Like...
[03:52:50] they don't have all enthusiasts running it anymore.  You have just average people.  And a change like this will make the average developers--  improve the average developer's life, right?  This is one of those places where you're putting--  I think we have a response here somewhere.
[03:53:07] Can I say something? Writing your own compiler in a whole type system with interference, at least now, worse, perot, just do memorization for web framework sounds like jumping the shark.
[03:53:15] And then Lauren Tan, you know,
[03:53:19] Works on the React team at Facebook said, "Doing it this way is hard mode, but it speaks to React principles absorbing complexity, so product code is easy to understand and change in isolation. The compiler is an extension of that vision. Use standard JS values, idioms, without comprising too much on other things."
[03:53:32] So like this is one of those things where I feel like
[03:53:36] like when you're already at the 80/20 split,
[03:53:38] And you're like, okay.
[03:53:41] We know that that last 20% is really hard to get.
[03:53:45] but we feel like we've exhausted everything else.  We're just going to pay the 80% cost to get the last 20%, right?  That's where we are in the cycle here.
[03:53:56] Um,
[03:53:58] It's.
[03:53:59] Like it's time to approach the hard problems,  things that have less return,  like,  like,
[03:54:06] Absolutely. But like, but have the ability to like,
[03:54:12] like smooth out the edges, you know?
[03:54:19] Thank you.
[03:54:21] Thank you.
[03:54:25] Thank you.
[03:54:29] Requiring a build is already duplex. It's funny Joe you make me I've got I was looking at my articles and
[03:54:36] And I know this is a little bit of a tangent, but I have plenty of these un...
[03:54:40] unpublished articles that I just think maybe I should just they're like opinion pieces I should just
[03:54:46] publish one of these days because they're like, what you said there just got me thinking about it.  Two-way binding is a two-way street.
[03:54:53] whole article about that.
[03:54:55] Do do do do do do. Never released it. I wrote this one.
[03:54:59] When did I write this one? About a year ago.
[03:55:02] Looks like I wrote it like March 2023.
[03:55:05] Custom JavaScript AST transforms are irrelevant as ever.
[03:55:09] This is talking about no build is a myth.
[03:55:12] and how it can never, how it just can't compete.
[03:55:15] Um, that was
[03:55:17] That was--
[03:55:19] It looks like July 2022.
[03:55:23] Thank you.
[03:55:24] Evolution over revolution. Talks about design principles, anticipating rewrites, value of simplicity, right? Simple over easy. I don't know. I never, I just never released these front end platitudes.
[03:55:38] Thank you.
[03:55:40] You know, talking about when we get hooked on like short statements that sell it.
[03:55:45] but don't actually that are actually not even true.
[03:55:48] They're actually not even close to being accurate, but that's what everyone repeats long after the technologies
[03:55:55] They're like virtual Dom is faster than the real Dom, you know,
[03:55:58] Maybe I should publish something. The Fallacy of Universal Solutions.
[03:56:02] Thank you.
[03:56:05] Yeah, I don't know. Maybe...
[03:56:10] Maybe...
[03:56:12] Thinking Marco.
[03:56:13] Oh, 2021.
[03:56:18] I don't know. I've got like five articles that were just kind of like sitting here.
[03:56:25] Thank you.
[03:56:29] I really look forward to debugging this compiler code.
[03:56:33] Uh...
[03:56:37] Thank you.
[03:56:39] Thank you.
[03:56:40] Thank you.
[03:56:46] Thank you.
[03:56:47] publish it all
[03:56:54] Yeah, it's fine.  This is...
[03:56:57] Have you ever, what's that book called? If you've ever seen the cover, you know what it is. Crossing the Chasm.
[03:57:05] I... Fred, I think, sent me this book at one point.
[03:57:10] He thought that it would help me understand how to find success.  But if you look at the actual cover of the book,
[03:57:18] It shows the classic adoption curve. Maybe I can find the image and I can blow up the cover.
[03:57:26] No, it's just going to be small everywhere.
[03:57:29] But...
[03:57:35] Can we blow up this image?
[03:57:38] Thank you.
[03:57:39] Thank you.
[03:57:41] Thank you.
[03:57:42] You know,
[03:57:44] I love all you guys, but the truth is,
[03:57:48] You guys tend to live...
[03:57:50] in this front zone here. Everyone who watches a stream is
[03:57:55] is probably
[03:57:56] Over here.
[03:57:58] where they sit on the adoption group. Sure, at work they might do something, but their personal interests, they're innovators, they're early adopters, right?
[03:58:07] That's why we have so many people build their own frameworks or involved in open source here, you know, talking here. Right. We were just talking about Joe, who creates Loom, which is a web component library built in solid that does 3D does all three like does 3D rendering with web components. Crazy library. So like, you know, it's a great way to do that.
[03:58:30] You know, we've already mentioned a few other people already in the stream. So the funny thing is I
[03:58:38] So
[03:58:39] Solid has been trying to figure out how to jump this gap.
[03:58:43] for a while here. See, whole product solution. This is why SolidStart has been so
[03:58:49] important because it's how you show
[03:58:52] that you can cross this this gap.
[03:58:55] Right.
[03:58:56] people, the bar for this kiss keeps on getting higher and higher, right?  The shift changed.  The thing is, React
[03:59:04] you know, so, you know, a lot of us frameworks even Svelte is like, you know, just kind of  getting its latches on here. React
[03:59:11] Kind of here.
[03:59:13] But they're struggling with like...
[03:59:15] I still use Java.
[03:59:17] So they're trying to figure out how to get here.  I mean, it's crazy when you consider how popular React is.
[03:59:24] But when you look at the whole entirety of web dev, you know, how many sites are React versus jQuery or whatever, like...
[03:59:31] Like they're definitely neat.  They're in a point where they actually have,
[03:59:36] you know, a lot of this market. In fact, they're losing
[03:59:39] this side now.
[03:59:41] to a certain degree. And they want to cement this area and, you know, even get some of these guys. And this is the scenario we're in here. Like, if you look at the under the curve sides, this is not even properly represented. This area is so much bigger than this area.
[03:59:59] Right?
[04:00:07] Right, so...
[04:00:16] *laughs*
[04:00:18] Always with the hard truths.
[04:00:21] Some are invaders, some are unemployed.
[04:00:29] Yeah.
[04:00:33] Yeah, I was just getting there. Sorry, maybe there's a delay. It's because the total area underneath this greatly exceeds the other side.
[04:00:43] Like,
[04:00:45] Like, the volume here is...
[04:00:48] exponentially bigger than these th-
[04:00:54] Yeah.
[04:00:55] A couple orders of magnitude bigger, yeah.
[04:01:07] Thank you.
[04:01:12] Green is PHP.
[04:01:14] Yeah, I mean...
[04:01:16] Yeah.
[04:01:18] I guess it's all their own chasms, their own challenges, but yeah.
[04:01:24] But yeah, essentially, this is, I'm just kind of,
[04:01:29] pointing out here, this kind of thinking diagram is why React is shifting, I think, over time, because they have much bigger fish to fry than us.
[04:01:38] We can sit there at the front of the curve and be like, look, our stuff is so much smaller and faster and better.  And we might even be right.  But...
[04:01:46] Like, who cares?
[04:01:47] .
[04:01:49] Yeah.
[04:01:51] Thank you.
[04:01:53] So
[04:01:56] You know?
[04:01:57] It's awesome to see this whole arc with React in a lot of ways.
[04:02:02] The fact that
[04:02:04] Like me, someone who like...
[04:02:07] goes on the record to say I love React, it's getting to a point where I'm like going, oh, I'm not sure about this anymore.  It makes me uncomfortable.  It means React is in a good place.
[04:02:17] You know.
[04:02:20] It's fine. They'll leave all the people
[04:02:23] with like-minded to where I'm at, you know, to come and use Solid or whatever, but yeah.
[04:02:30] But yeah.
[04:02:32] Yeah, React is still growing at an alarming rate. It's not slowing down. There's so much volume in that area.
[04:02:40] Right?
[04:02:41] Thank you.
[04:02:44] Thank you.
[04:02:50] So anyway, just interesting observations about growth and where things head.  Anyway, let's keep on going.
[04:03:00] I
[04:03:02] Here we go.
[04:03:04] Are we ready to talk about Angular and Wiz?
[04:03:07] We're going to talk way more about Angular and Wiz next week because we're going to have Jatin from the Wiz team.
[04:03:16] friend of mine, come and share all his wisdom about Wiz. He's been working on it for several years now. And, uh,
[04:03:24] He knows his stuff. A lot of people hadn't heard of Wiz
[04:03:27] before this week. A lot you have because MISCO has been citing Wiz for ages now talking about QUIC because it was the framework that inspired QUIC.
[04:03:37] But...
[04:03:39] Thank you.
[04:03:40] Thank you.
[04:03:41] Thank you.
[04:03:42] But all his wisdom...
[04:03:44] Sounds like a whiz kid.  Yeah.  Well, the funny thing is if you actually see Jadon's username on Twitter, I think it's whiznastics.
[04:03:54] Thank you.
[04:03:56] Yeah, people want to know what's up. So let's talk about it because I am a little bit closer than this. I saw this actually even came up like on an internal feed at work where people like, oh, this AngularWiz thing, does this mean anything for us?
[04:04:26] week.
[04:04:27] You guys may have seen that.  I didn't know that it was a leak,  but if you remember that long conversation we had with...
[04:04:37] with Adam Rackett where I was just like,
[04:04:40] signals are the future signals will take over the world blah blah blah you just don't get it you know
[04:04:44] Being all melodramatic,
[04:04:47] Perhaps.
[04:04:48] Uh...
[04:04:49] Where is it? Where is it? Where is it? Where is it?
[04:04:51] Yeah.
[04:04:53] If we get down to the very last
[04:04:55] part of the thread, three...
[04:04:58] solves everything for...
[04:05:00] I think I cut off early when I was reading it out loud, but I got here.  I'm like, look, maybe you don't need it.  Maybe it isn't necessary to get a second opinion.  Ask Richard, Evan, why they're taking their frameworks felt and view this way or MISCO, how it is.
[04:05:11] what make quick possible Jason why preact side step on a react shadow why angular is going to migrate their whole community or how they see a future to merge with whiz which powers Google search photos of Gmail, it just goes on. I don't typically like shouting it out but I figured after eight years people get it. Maybe they do. Yeah, so
[04:05:28] I don't, I didn't realize, I didn't really think, I guess.  I might have accidentally let this one slip.
[04:05:34] Um, last week, um,
[04:05:37] I didn't know if it was exactly a secret.  If you actually look at that, Jadon replies.  And he's like, yeah, signals is what makes this possible.  So I was like, okay, maybe it's okay.
[04:05:50] So
[04:05:53] Thank you.
[04:05:55] Yeah. Thanks for coming by today.
[04:05:57] Um,
[04:05:58] And...
[04:06:01] - Okay.
[04:06:03] Yeah, I mean, the gist of it, and I think I showed this on stream before, is like,
[04:06:08] There's basically a path...
[04:06:11] to resumability.  Mitsko was right that current frameworks can't
[04:06:15] very easily be resumable, but if you fully get into signals, then there's a path to get to resumability. It's like a hop step. You like first kind of got to get into that to get to the next stage. You need fine grained reactive rendering and then you get into resumability.
[04:06:31] Wiz did this though without resumability without signals. They had their own kind of approach and Jadon's gonna talk to us about this historically.  And it was
[04:06:42] kind of
[04:06:45] Difficult to use. I don't want people to get strong. Wiz was the first
[04:06:50] Like it is the resumable framework. It is the blueprint for this stuff.
[04:06:54] But the DX was nowhere near what we'd expect...
[04:06:58] for a JavaScript framework.
[04:07:01] And it's been incredible work here when they realized essentially that signals were the bridging gap to get the DX that they finally wanted with Wiz after all of these years.
[04:07:14] It basically gave them that mechanism.  And Angular was working on signals because, as you know, they had the interest in it.  And this started this kind of thing.  I met last fall with Jatin, Alex, Pavel, the whole Angular signals team and Wiz team.  And we discussed what problems we were facing, what we were thinking about in terms of the future.  We talked a bit about async flows, about concurrency, a lot of these kind of ideas.
[04:07:44] It was right after I wrote that HackMD, actually,  because I was like, we were very much on the same page  on a lot of these kind of problems.  So it's not surprising.  And with the Angular team, which...
[04:07:57] and WizTeam and whoever else is working on frameworks at Google, you easily have
[04:08:03] Several dozen people that can work towards making this thing a reality. So
[04:08:10] Yeah, it's going to probably take a bit
[04:08:13] for it to completely merge. What we're seeing is on the first side, Wiz adopting signals,  which is actually what they're talking about here.
[04:08:20] because YouTube
[04:08:23] They've been trying to get better performance on YouTube, so they've been trying to bring Wiz in.  YouTube was originally written in Polymer.
[04:08:29] A web component framework?
[04:08:31] I'm sorry.
[04:08:32] from Google, and they were bringing Wiz in to improve the performance.
[04:08:36] But like the DX thing was a challenge.  I know that some wiz had adopted JSX and they're doing almost like react type rendering for a bit.
[04:08:45] not quite, like, it was still resumable, but it was, like, it was, like, with, uh, like, more
[04:08:51] Like they were trying to make compromises so that developers would want to work with it.
[04:08:56] And it was getting mixed results.
[04:08:59] And my understanding, as I said, general, clear it up next week, is that Wiz...
[04:09:04] or sorry, that signals basically...
[04:09:07] Thank you.
[04:09:08] help them find that golden path, so to speak. I love watching this talk, not because,  yeah, it's just right here.
[04:09:17] Takeaways, performance by default, simplicity, maintainability.
[04:09:20] They're talking about signals here and the fact that that is like just the expected headline is so awesome to see. Like half of this talk is talking about how great signals are.
[04:09:33] Which is really, really awesome.  They fully embraced this.
[04:09:41] Okay.
[04:09:43] Thank you.
[04:09:44] You guys are talking about what time it is? 4 a.m.? Wow.
[04:09:49] and
[04:09:52] Yeah, I mean, it is on the 80/20 thing, but it's not as far off.
[04:09:59] It's a performance optimization tool.
[04:10:03] that I feel can be done without
[04:10:07] who
[04:10:08] without impacting...
[04:10:12] Hopefully if it can be done without impacting the code you write. I think that's the important thing here. I am worried about transparency.
[04:10:18] But I think it is something that's on my list.  I think there's a lot of ways you can take...
[04:10:24] um reactivity if you have an async reactive system that understands like can you that's
[04:10:30] Pawsible like I was showing with the like throwing and create a sink.
[04:10:34] then there's a lot of capability that you have to,
[04:10:38] in being able to like,
[04:10:40] control that. The other part is the serialization. This is why it's quick.
[04:10:44] version two, they're working so much on serialization.  They have to prove that that initial serialization cost  during server rendering is worth it.
[04:10:51] Because that's where a lot of expense is.
[04:10:53] Like you are trading execution for bandwidth here. And if you talk to anyone,
[04:11:00] Bandwidth is probably the most expensive thing for the page load, ultimately.  Serialization problem is the problem we need to solve.  So I'm going to focus on anything that reduces serialization...
[04:11:11] over execution, probably.
[04:11:14] That's why I was interested in server components.  I think there's a potential of server components to actually solve serialization.  I think that it's way more important than...
[04:11:22] then, um...
[04:11:24] than necessarily
[04:11:26] the raw performance aspect. We need to make sure that, um,
[04:11:32] We don't need to...
[04:11:34] Like we that we can keep data on the client and the client and date on the server on the server and
[04:11:43] Thank you.
[04:11:44] Thank you.
[04:11:46] yeah um simple versus easy i talked about that a ton last week um
[04:11:54] To be fair.
[04:11:59] I mean, I didn't talk about it. There's islands in Solid Start. They're just hidden behind an experimental flag. You can just go in and turn it on. The Solid Start talks are in islands, but that's a whole other thing.
[04:12:15] But, okay. I think there's a lot, like, just to hear the Angular team talk about signals was just like, it was a lot. Because it's like,
[04:12:26] It's, this is like the reality we live in now, which is incredible.  More than even like this news, which is also incredible.  I, I, I,
[04:12:37] I think that it makes a lot of sense to Angular because they're enterprise, the type of stuff they're doing.  Zoomability requires, like, it has importance to enterprise, but, like, there's a lot of pieces.  It's the people in the middle of the graph that probably don't care about Angular.
[04:12:54] presumability as much.
[04:12:56] Um...
[04:12:58] Yeah, so I'm I'm
[04:13:01] I think that...
[04:13:03] there's like anglers continuing the show that they're,  they're like,
[04:13:08] serious about the future and I think this is really compelling, honestly.
[04:13:17] It's so funny.  People are like,  oh, is this the end of Angular?  No, I...
[04:13:20] My gut.
[04:13:22] is
[04:13:23] Angular more absorbs  Wiz we'll see how it goes but  The but the
[04:13:29] Just because...
[04:13:30] But on but on the other hand,
[04:13:33] Angular also changes a lot like but Angular is already changing so dramatically.
[04:13:40] Solid and React, as I explained last week's stream, are not going to merge. They're not in the same zone at all.  The most similar framework to Solid is Quick.
[04:13:51] to be fair. Um,
[04:13:54] I think.
[04:13:56] Uh...
[04:13:58] Actually,
[04:14:01] Which reminds me, I saw Sean in the chat.
[04:14:03] I didn't see you guys announce it.  I was going through my metrics like I do on a weekly basis,  and I saw the quick hit 20,000 stars on GitHub.
[04:14:11] earlier this week. Um,
[04:14:14] And, yeah, I mean, this...
[04:14:16] When you consider that no one knew what Resumability was a couple years ago, I mean, to be fair, when I was working on Marco, we kind of come up with a similar thing, but we didn't have a name to call it.  And when Misko was like, this is Resumability, we're like, ah, this is the thing.
[04:14:32] Now that it's as much of a vernacular, you know,
[04:14:36] that people are excited about stuff like AngularWiz. I kid you not, a few years ago, if someone said like, "Angler + Wiz were merging," I don't think anyone would have cared.
[04:14:45] you know,
[04:14:46] Like, what does that mean? What's resumability?
[04:14:49] But...
[04:14:50] Okay.
[04:14:51] The work...
[04:14:52] that quick did about getting out in front of it and showing what was possible
[04:14:56] is...
[04:14:58] Like,
[04:14:59] why we're even talking about this right now.
[04:15:02] Right?
[04:15:04] I like Wiz would have could have stayed internally inside
[04:15:08] of Google.
[04:15:09] You know?
[04:15:11] A lot of things are like that.
[04:15:13] I think...
[04:15:14] As I said, it's a combination of many things, but putting room of zoom ability on the map
[04:15:19] Definitely.
[04:15:22] is what quick did. So I, I, I think, I think a big shout out deserving there.
[04:15:30] Thank you.
[04:15:31] Okay, fine. The most similar to solid is Svelte 5. It is almost identical. Okay, fine. You win, Greg.
[04:15:39] Yeah.
[04:15:40] So five and view vapor actually. Yeah, I I
[04:15:44] Yeah, okay, fine. They're like basically identical. Yeah.
[04:15:47] *sniff*
[04:15:49] Those aren't out yet.
[04:15:53] But yeah, very soon
[04:15:58] *cough*
[04:16:04] Yeah, it was Mitzko's vision for Angular.  And it's so funny.  If you watch the talk where he introduced Resumability in 2019 at ng-comp...
[04:16:16] People were basically almost apologizing for him.  Like they were like, they were like, the other guys were like, oh yeah, don't worry.  Angular is not going to change that crazily.  This is Misko and his crazy ideas.  Sounds really cool.  Yeah.
[04:16:29] Wouldn't that be cool in the future too?  What do you guys think?  Yeah.
[04:16:32] Like...
[04:16:34] At least that's the vibe I got from it.  He came completely out of left field.  You understand, this was a framework that didn't even do hydration at the time.  Like, they server rendered and then they...
[04:16:47] deleted it all and client rendered it. Like, and he's like, he's like talking about like, resumability. Um,
[04:16:57] Yeah.
[04:17:03] Thank you.
[04:17:05] but yeah, I mean, I haven't even looked at this.  I posted this like right before I started streaming  and it looks like,
[04:17:12] people have caught on. So yeah, this, this, this is, this is awesome to see. Um,
[04:17:18] All right.
[04:17:20] Yeah.
[04:17:23] Thank you.
[04:17:26] No, Angular has way too much recognition everywhere. I don't, yeah.
[04:17:33] What I'm imagining is
[04:17:36] they'll have the ability to optimize Angular under certain cases that like essentially...
[04:17:44] I
[04:17:45] Yeah, it'd be interesting to see.  I want to know...  I can't say definitively.  I want to know what Jadon thinks.  Maybe this is talking about the future, and that's like, you know...
[04:17:53] Not to be discussed yet, but you guys can come next week and bug him about and see what he says.
[04:18:00] Well, the thing is, Astro doesn't care what you use there, so I doubt they will add signals.  They'll just be like, use...
[04:18:09] Whatever...
[04:18:10] library you want.  It doesn't,  what's lovely about Astro is it's like basically like PHP or Rails,  they don't care what you do on the browser at,
[04:18:18] at all. So, um, yeah, I doubt they'll ever add their own signals implementation or like,  there's no reason to cut off the others, so to speak.
[04:18:30] Thank you.
[04:18:32] Right? Like...
[04:18:36] So, like...
[04:18:38] You know, if you...
[04:18:40] Yeah, you can basically choose any signals library and have them talk to each other.
[04:18:44] Thank you.
[04:18:47] Um...
[04:18:48] Thank you.
[04:18:51] Where do I want to go next?
[04:18:55] Okay, yeah, let's talk...
[04:18:58] Okay, there's one more thing, but maybe I should leave it till next week.
[04:19:04] I saw this post from Dimitri and he posts very...
[04:19:09] Hard-hitting, but generally speaking, very...
[04:19:13] Like...
[04:19:14] thought
[04:19:15] like very critical,  but like also very,  you know,  true statements,  you know?  And,
[04:19:22] He...
[04:19:23] He basically wanted to call Google out on Twitter.
[04:19:26] the padding themselves on the back thread, essentially. Sarah announced the Anglers merging with Wiz.
[04:19:32] Let's just read this thread for a moment.
[04:19:36] In the thread, she makes a claim that WizPower is a search workplace, it does, and YouTube, and that the merge will bring impressive improvements to Angular's performance due to Wiz, yep.
[04:19:49] Thank you.
[04:19:52] Thank you.
[04:19:55] Right.
[04:20:00] "Make no mistake, the amazing performance of YouTube looks like this. Three seconds to render an empty page, 11 megabytes of JavaScript, blah blah blah blah blah blah." Keep in mind you read about this.
[04:20:08] So we have YouTube's old engineering leader literally responsible for the abysmal performance described above. Congrats great milestone.
[04:20:15] See, we're going to have Jadon on here next week.
[04:20:19] But I hope that's why I'm covering this week because I don't.  Then we at Chrome's engineering at iOS, monitoring crowd of the years of work at YouTube is real place.
[04:20:29] Okay.
[04:20:31] I think this is the right call for both parents. That's a future welfare test.
[04:20:35] Courageous YouTubers EM from technically great.
[04:20:39] And
[04:20:41] Both frameworks bring strong complementary value propositions to the table.  Instead of trying to see who can copy the other one better, we leverage these unique.
[04:20:47] across the Google Dev Expert, blah, blah, blah.
[04:20:49] Oh.
[04:20:50] Shy.
[04:20:51] Okay, interesting. Yeah, I didn't even realize you were in this thread, Shai.
[04:20:56] Thank you.
[04:20:56] Thank you.
[04:20:57] Thank you.
[04:21:00] uh
[04:21:04] AngularBrader GDEs, web performance thing, blah, blah, blah.
[04:21:10] They continue patting each other in the back while destroying any semblance of the guy. So his point was that YouTube has terrible performance.
[04:21:16] The interesting thing is,
[04:21:17] I think YouTube had terrible performance
[04:21:20] before anyways.
[04:21:22] We know that Wiz powers Google Search and Google Photos, and those are performant apps.
[04:21:26] or at least I know search is 100%.
[04:21:30] I think what we're...
[04:21:33] I think...
[04:21:36] Thank you.
[04:21:39] I think it's interesting because if you go on YouTube, someone was doing this after the announcement and looking there like isn't this all web components it still is I don't know which portion.
[04:21:49] Um, Wiz has...
[04:21:52] improved, I'm gathering, they basically got in there and allowed for a certain amount of loading time improvements.
[04:22:00] But yeah, I guess the interesting challenge here is
[04:22:05] question is, is
[04:22:07] They have shown
[04:22:10] the improvements.
[04:22:13] Thank you.
[04:22:13] But it makes you wonder how bad things were before.
[04:22:18] that's at least my interest here.  I think Jadon ends up responding somewhere in this thread.  I saw it here.  Um,  but,
[04:22:27] It was an interesting look here because he's basically saying there's nothing to celebrate.
[04:22:34] Um...
[04:22:37] I don't know.
[04:22:41] I do wonder about the challenges of trying to build the stuff out of scale,  because I heard it from the other side when I was talking about the challenge of like,
[04:22:50] getting the YouTube devs to want to use Wiz, like in terms of the experience,
[04:22:57] Um...
[04:22:58] because like it didn't have great DX originally.
[04:23:02] And it's like,
[04:23:03] How much are the...
[04:23:05] platform engineers like the people who are working on Chrome or all the people mentioned in this thread
[04:23:11] Um,
[04:23:13] responsible versus
[04:23:15] the product engineers that build it every day.
[04:23:18] Thank you.
[04:23:20] It's an interesting tension. Like, this is something we faced at eBay to a certain degree, where, like, developers wanted to use React.
[04:23:28] And like,
[04:23:31] you know why we couldn't use React.
[04:23:34] Thank you.
[04:23:35] And but it's like at a certain point, the management wanted to use React as well.
[04:23:40] because the developers were unhappy.
[04:23:45] But the truth matters, even if you use Marco,
[04:23:48] You know, we'd look and be like, oh my God, what are they doing?
[04:23:51] Right. And this is the same in every company. I'm not trying to like
[04:23:54] You know, I'm just saying like,
[04:23:58] I think
[04:24:00] I think...
[04:24:01] the challenge here is actually building stuff at scale with that many developers trying to  work on the same project
[04:24:07] And
[04:24:10] I don't know if it's even a technical issue anymore, which is interesting.
[04:24:16] But, yeah, I don't know.  This is...
[04:24:21] It is hard when you like
[04:24:23] are pushing about technical performance things and then you don't,
[04:24:27] How do you deal with like, like,
[04:24:29] How do you
[04:24:30] how do you measure that or show that at the community in a way right that that does it because  they actually had an example where they said like this improved this loading time 60 but
[04:24:40] Holistically.
[04:24:41] Okay.
[04:24:41] you know, what's the impact of these things?
[04:24:44] Google would know.
[04:24:47] But it's difficult when you're an individual developer out here trying to verify.
[04:24:53] Anyway.
[04:24:53] I don't know.
[04:24:54] It was an interesting thread.
[04:24:57] Um...
[04:25:01] Thank you.
[04:25:07] Right. The question is search...
[04:25:11] It's 3 megabytes of JavaScript.  So the argument is you can build a smaller...
[04:25:16] Search perhaps. But when you think of what search does and what it's capable of and the way that it loads everything, it's like
[04:25:23] and ads consideration, all those things.
[04:25:28] It could be a lot worse.
[04:25:30] I know that's not saying much, but it's very easy for us to be like, oh, well, I just built...
[04:25:35] my example, and it's way faster, right?
[04:25:38] Um...
[04:25:41] Which, I mean, maybe this is the argument people are using, and maybe only DX matters.  But I think...
[04:25:47] I think...
[04:25:48] it could be a lot worse.  Like the whole reason Wiz exists is because it like
[04:25:52] lazy loads and can selectively control the different JavaScript that gets loaded and
[04:25:56] into the package and only run the JavaScript that's necessary when it runs.
[04:26:00] There's a whole bunch of other garbage on top of that.  I know this from eBay.com between the way advertisements work and other kind of add-ons.
[04:26:08] The core search experience, even given that, is still
[04:26:12] you know, pretty performant.
[04:26:14] If they could just...
[04:26:16] gut it and start over again?
[04:26:20] I don't know how long before I just hit this anyways.
[04:26:25] Aren't people afraid that we'll get the result of DxO with the performance of Angular?
[04:26:31] Well, if the performance of Angular, this would never fly.  You know, like...
[04:26:35] for what they need it for. Wiz is like very similar to Marco. There's a real performance shelf that they care about.
[04:26:44] Yeah, I mean, to be fair, this thread seems...  I think what he's trying to point out is that
[04:26:51] Like there's a whole echo chamber on, on,
[04:26:54] Twitter about these things, how does that reflect with reality?
[04:26:58] Thank you.
[04:27:02] I don't know, man. If it rated up for Payton, I don't know if it gets React.
[04:27:06] Yeah, does React ever claim that it's performant?
[04:27:14] That was cheeky there.  That's not called for. I'm sorry.  It's just...
[04:27:19] Thank you.
[04:27:21] Like, this is the problem with this kind of stuff.  And this is the reality.
[04:27:26] the best that anyone can do in these situations, generally speaking, is, is
[04:27:32] uh
[04:27:33] is incremental improvements in certain areas where they can just like
[04:27:38] Just make things a little bit better.
[04:27:41] Right.
[04:27:42] But I mean, is this an opportunity for some newcomer to offer a better video service thing with like a nicer UI or something?  I don't know.
[04:27:50] Like...
[04:28:01] Yeah, yeah, that is true.  Like he was asking to get blocked.
[04:28:10] Thank you.
[04:28:11] Yeah.
[04:28:12] There's also this, I feel like there's probably like the people, Google, there's, you know, like made here syndrome concern.
[04:28:21] you know, that being said, I know how amazing the tech is of Wiz, and we'll hopefully understand that next week. But yeah.
[04:28:35] Thank you.
[04:28:36] Yeah, it's interesting though, because you look at the efforts the Google Chrome team goes to improve performance, you know, it's incredible. They try and work with everyone to just get it to that next level.
[04:28:48] Thank you.
[04:28:49] Thank you.
[04:28:53] Thank you.
[04:28:54] Yeah, no, I don't think so. This is a problem with developing and scale in the way that our stuff works.
[04:29:02] And the theory, at least, is that with something like resumability and fine-grained rendering signals, you can isolate the impact that any one developer has on how crappy the experience ends up being.
[04:29:18] Thank you.
[04:29:19] Thank you.
[04:29:25] Yeah, you can look at one large app with no idea how it's  implied in playing the framework. Yeah, definitely. That's the thing. It's
[04:29:31] You have all these platform engineers trying so hard to just make things better, easier for things and then
[04:29:37] Not to crap on the product, guys.  I've been there too.  There's a gap there.  But then it's like...
[04:29:43] Then you have somebody else that's telling them that they need this, this, and this.  And these things aren't always aligned with each other.
[04:29:54] Thank you.
[04:30:05] I mean, depending on the type of app, three megabytes of JavaScript is pretty bad.  I mean, here's the question, though.
[04:30:11] You guys all know
[04:30:12] that I've run
[04:30:14] basically
[04:30:18] I mean, let's look here. I'm pretty sure if I go to my network tab,
[04:30:21] Well, oh, not on this computer.  I basically run perma disable cache, right?
[04:30:28] And like,
[04:30:29] Okay, I got 1.2 megabytes here.
[04:30:31] But my point is...
[04:30:34] Oh, and then
[04:30:36] some more stuff, but my point is
[04:30:39] Most of this is not critical blocking. It's just like, this isn't even, let's do something.
[04:30:46] Like, this is an MPA. Every single...
[04:30:50] Search is a page load.
[04:30:55] Right?
[04:30:58] This JavaScript might load in,
[04:31:01] But you can see most of it's lazy. Let's actually look.
[04:31:04] at what loads in initially here.
[04:31:07] that probably isn't important for stuff.  This is vitals.  These are my...
[04:31:13] Let's actually open this in
[04:31:16] in the incognito window.
[04:31:22] because I'm interested.
[04:31:28] Search.
[04:31:31] query crossing.
[04:31:35] My guess...
[04:31:40] would be that
[04:31:42] The critical part of the page is delivered
[04:31:46] in the first 500 kilobytes.
[04:31:48] These three.
[04:31:50] I think everything else after probably doesn't matter.
[04:32:02] Anyway.
[04:32:06] I mean we could look at
[04:32:15] Okay, so first thing, definitely streaming going on. See, the HTML hasn't even all delivered and we're already processing stuff.
[04:32:22] Right? What do you got here?
[04:32:24] fonts coming in,
[04:32:26] We have
[04:32:32] It's this.
[04:32:40] JavaScript.
[04:32:43] This looks like the main bundle.
[04:32:48] LCP is already done here.
[04:32:51] So they get the majority of the content at 400 milliseconds in this run.
[04:32:56] before
[04:32:57] that
[04:33:00] two
[04:33:01] yeah so yeah obviously ssr'd and then
[04:33:04] main bundle,
[04:33:06] What's this?
[04:33:13] Yeah, I don't know. Let's try one more.
[04:33:16] Thank you.
[04:33:25] I wonder what's happening during this script running time.  This is the part I'm most interested in.  I feel like
[04:33:32] There's a bunch of work happening here. I don't know. It's hard to tell when the interactivity is actually opened. Like,
[04:33:38] I'm gathering because the way Wiz works, you could probably interact with the page.
[04:33:44] Anywhere around here.
[04:33:46] But it's like, then what the hell is all this other stuff?  Well, it's all the other stuff.
[04:33:54] Anyway, that's enough looking at that.
[04:33:58] Thank you.
[04:34:10] I think building any app at scale is difficult.  Demo apps are easy.  Even startups to a degree are easy.
[04:34:17] easier
[04:34:20] Once you're pushed to actually like solve problems at a certain point it becomes way harder for any framework. The framework is only the starting point. This is this is actually why I'm so big on the approach we've taken with signals and these primitives because I expect.
[04:34:36] This is why I never liked the MetaFramework.
[04:34:38] to a certain degree. When you get to the real push comes to shove, all these like opinionated things where you think like, okay, this is how you do it. It all goes out the window because you ultimately just have to build what's fast and what works.
[04:34:51] And
[04:34:51] Like,
[04:34:53] Thank you.
[04:34:54] Like,
[04:34:57] It goes beyond...
[04:34:59] what like the happy path at a certain point. Which is why, as I said, I like things like  Signals because then it's like, look, you have the pieces.
[04:35:06] If this part isn't optimal enough,  like, don't
[04:35:10] do it the solid way necessarily or the react way
[04:35:14] but you still have the,  you can interface with it.
[04:35:17] in a very natural way, no matter what you're doing or however you approach it.
[04:35:21] Right.
[04:35:22] Like,
[04:35:23] You give people the building blocks, then they aren't trapped in because, you know, React re-renders, now you're screwed, you know? I mean, you could always step out of it, but, like,
[04:35:31] like
[04:35:33] getting back in is that much more of a hoop. Whereas like if you're like, OK,
[04:35:37] This is all I need.  This, like, it just makes interfacing with the boundaries of what's expected much more
[04:35:44] I think easier if you
[04:35:46] If you give people those building blocks.
[04:35:53] Yes.
[04:36:15] Yeah, no, we can ask Jadon about that, definitely.  Okay.
[04:36:23] *laughs*
[04:36:26] Yeah.
[04:36:30] Anyway, I think we're done on this topic.
[04:36:37] Um...
[04:36:38] Let's talk...
[04:36:40] about solid start release.
[04:36:43] which isn't the other thing.
[04:36:46] Attila over at React Paris had some fun with it.
[04:36:49] I'm not going to spoil anyone.  Some people figured it out.
[04:36:52] Anyway, figure it out. Here's the announcement.  So I was like, Ryan would never say figure it out.  I thought that was actually the funniest part about this.
[04:37:00] Are those notifications real?
[04:37:02] I would never say figure it out.
[04:37:04] Yeah, you're right.
[04:37:11] Thank you.
[04:37:11] Thank you.
[04:37:18] But yeah, the Solid Start release has been a long time coming. And honestly, this was a big thank you message to everyone.
[04:37:29] involved.
[04:37:32] I'm glad that people have responded well to it and taken notice.
[04:37:37] Uh,
[04:37:39] I wasn't sure, you know, honestly.
[04:37:42] Thank you.
[04:37:42] Like when I started this, I was like, man, this is just too much work.
[04:37:46] And at many phases during this, I was just like, how are we going to maintain this?  Because the important thing for a library of our size is being able to maintain it.
[04:37:54] and with our user base.
[04:37:58] we have a fraction of the resources that other frameworks have.
[04:38:02] You know?
[04:38:06] Like,
[04:38:09] We've...  Arguably, out of the most...
[04:38:14] Yeah, I mean...
[04:38:17] The number of people who get paid full time to work on solid,
[04:38:22] is
[04:38:23] you know, basically is me, right?
[04:38:27] Um...
[04:38:28] We've been using grants and stuff.  We get money from our open collective to sponsor fellowship programs.  We have tons of people volunteering, getting stuff done, but it's like,
[04:38:38] It's
[04:38:39] It's why we got jammed up a bit on getting the signal stuff.  It's why this, you know,
[04:38:44] It's still work to be done. It's hard.
[04:38:49] you know,
[04:38:50] A lot of frameworks these days don't have a lot of resources.  A lot of them maybe only have two or three resources.
[04:38:55] people working on them, but two or three is still two or three times the amount of potential output that
[04:39:01] you know,
[04:39:03] You know, it's significant.
[04:39:05] Um,
[04:39:07] There are frameworks like Vue which have shown that this open source model can work.
[04:39:12] You know, but even then, Nuxt, you know, has a different
[04:39:17] set of people working on it. And we were trying to do Solid Start and Solid and
[04:39:24] *laughs*
[04:39:25] I mean, it's tricky.
[04:39:28] Easy, sell it to Shopify. I don't know in this market if anyone's buying, you know,
[04:39:33] I would love to do whatever it could to...
[04:39:35] to secure this the future of solid I mean that's no that's no
[04:39:40] stab it and it will fire anything. It's just like where we're at, you know?
[04:39:46] If there's companies out there that want to see solid getting...
[04:39:51] further.
[04:39:52] you know, reach out to me. Um,
[04:39:56] It's like I can be nothing but grateful for those who have
[04:40:01] helped us get to where we are.
[04:40:05] it's challenging, right?
[04:40:09] We've.
[04:40:10] We've done a lot of really good stuff. We've seen the work at Solid has influenced the rest of the ecosystem. When I started this,
[04:40:17] I thought,
[04:40:18] that no one would care.
[04:40:20] And now
[04:40:21] Other than React, pretty much every framework's on a trajectory path of basically
[04:40:26] doing the almost exact same stuff that we're doing.
[04:40:29] Thank you.
[04:40:30] Like, which is...
[04:40:33] And it's not just like the signal stuff.  I mean, that's obvious.  It didn't stop eight years ago or seven years ago.
[04:40:40] uh,
[04:40:41] I guess solid technically came out almost exactly six years ago.  So I'm going to assume people weren't familiar with these techniques before solid open source.  But let's see.  It didn't stop six years ago.
[04:40:52] you know, when these rendering techniques were made
[04:40:56] continue to work with Solid Start even. I mentioned it in the beta
[04:41:00] we got a lot of
[04:41:02] you know,
[04:41:03] influence from a lot of different projects here, you know,
[04:41:07] recognizing exactly what Remix did well.
[04:41:10] Looking at the different routing patterns, I think like our routing was inspired by Nuxt initially and
[04:41:18] um, server functions.
[04:41:21] or sorry, API routes were inspired by SvelteKit.
[04:41:25] Um...
[04:41:27] Thank you.
[04:41:28] We took our own take on server functions, route data, route actions, but the optimistic API came from Remix completely, right?
[04:41:39] And
[04:41:40] Uh...
[04:41:43] Thank you.
[04:41:44] you know, all of these were really big influences. But on turn, I feel like we've influenced
[04:41:48] you need to have an impact like the whole server function thing. Um,
[04:41:52] I came out, I believe, first in...
[04:41:55] solid, it proceeded next,  proceeded quick, proceeded whoever else.
[04:42:02] That kind of joining the RPCs
[04:42:05] with the actions.  I think stuff like our work into single flight mutations,  I already mentioned,  I think Remix is already working on it.
[04:42:14] Um...
[04:42:16] So like, there's a lot more that's here to
[04:42:21] to go.
[04:42:23] Um...
[04:42:24] But like, what?
[04:42:27] Like...
[04:42:28] Honestly, I can't picture getting here without...
[04:42:32] what everyone else has contributed to this.
[04:42:36] and
[04:42:37] It's always like a bit of an uphill battle.
[04:42:40] But like...
[04:42:43] we keep doing it because we're passionate about it, right?
[04:42:47] Elon for Carl Milling's change of rewriting Twitter.
[04:42:56] Thank you.
[04:42:58] So solid to join to this note. I haven't been paying attention once I go in there.
[04:43:04] Thank you.
[04:43:07] Yeah, exactly. Vue, I think, is probably the community most similar on this kind of trajectory where...
[04:43:15] they kind of scattered around and use open source to try and get there.  But as I said, like even stuff like Nuxt isn't wrapped in.
[04:43:22] But then like
[04:43:24] I'm sure if it wasn't, Evan would, Evan's been amazing and, you know,  like getting like beat teams and all this, you know, different stuff.
[04:43:33] Thank you.
[04:43:35] Thank you.
[04:43:37] Both. They're our biggest open collective sponsor.
[04:43:49] and they fund me, which is
[04:43:51] big part for funding solid like there's nothing else I can compare honestly Netlify has been amazing to me um
[04:44:00] But, I mean...
[04:44:03] As I said, like, it's hard. You want it.  You don't want developers. Great.  But you at a certain point, you want to be able to grow with it, you know, like.
[04:44:10] I think there's.  Brissell has three.
[04:44:14] developers, I think Next has
[04:44:17] I don't know how many of them are next, at least.
[04:44:21] you know, at least in the close to 10 range, I think maybe a little under, I don't know, maybe six,
[04:44:27] Sick.
[04:44:28] eight, I don't know. And then you get into stuff like Facebook itself, the work on react. I say dozens, but like, I'm, I'm pretty sure the number is over
[04:44:41] for these teams at the you know like your angular google i'm sure the number is
[04:44:45] Over three...
[04:44:47] But probably under 100 or under under.
[04:44:53] You know, like it's
[04:44:56] At that point, to me, that's almost like exponential, right?
[04:45:02] The difference between one and two is huge. The difference between, you know what I mean, like...
[04:45:08] Because that's double your effort. The difference between 32 and 33, not so much.
[04:45:17] Thank you.
[04:45:17] No one solves the double data problem today. I think there's a solution to it.
[04:45:25] But my point here is,
[04:45:28] This release
[04:45:30] Um...
[04:45:33] Doing Salt Star in general is very ambitious of us.
[04:45:37] I knew it was the right thing to do, but it's taken very long time
[04:45:42] Not just because I'm a perfectionist, it's just it's important.
[04:45:47] And
[04:45:49] There's like
[04:45:51] If it was me by myself, it would take another decade. Like, so many people have been involved in this project.
[04:45:57] that doing their little part has made such
[04:46:01] an incredible difference.
[04:46:05] And, like, I tried to grab everyone who did any PRs, but then I realized after I used the GitHub API to get all the PRs that...
[04:46:17] There's a lot of PRs that we closed, not because they weren't good PRs, it's just like we saw them a different way or we did that. So I went through the list one by one afterwards.
[04:46:25] Um,
[04:46:26] and tried to find anyone who had closed PRs on that I didn't merge who weren't already in the list and add them to the list.
[04:46:33] Um...
[04:46:35] And
[04:46:36] Like...
[04:46:38] I've really tried not to mispeak. Obviously people report issues and stuff and well and that would be beyond my feasibility to be able to pull all those names down.
[04:46:48] I really wanted to add everyone.  Unfortunately, GitHub
[04:46:52] Cut me off at 200.
[04:46:55] But yeah, this is everyone who...
[04:46:58] who submitted
[04:47:01] Or, um...
[04:47:03] submitted a PR even, whether it's merged or not,
[04:47:05] on the repo.
[04:47:07] And...
[04:47:09] Obviously all these companies as well.
[04:47:12] The big thing for me is recognizing that not all these people are associated with solid anymore.
[04:47:17] And not all these companies exist anymore.  Some of them went under because, you know, the economic or their startups or whatever,  but they still put their money and their time
[04:47:28] in
[04:47:29] to make this possible.
[04:47:34] Thank you.
[04:47:36] Thank you.
[04:47:39] And it was cool to see because everyone got mentioned here.  So when the release came out, they...
[04:47:45] They saw this. That's what I wanted to accomplish here.
[04:47:50] This release is called Clown Town, or Welcome to Clown Town.
[04:47:54] which is a little bit aggressive perhaps, but
[04:47:57] It was important to me.  I don't know...
[04:47:59] I don't even know if people remember this reference even.
[04:48:04] If...
[04:48:05] If they even know I didn't rehash it in here.  I didn't need to drag it.
[04:48:10] things through the mud anymore. But it was important to me because
[04:48:15] At one point, the SolidStar project, you know, publicly was like, you know,
[04:48:20] called clown town essentially what we were doing over here.
[04:48:24] And
[04:48:25] It had a big impact on people working and maintaining the project at the time.
[04:48:29] A lot of people, you know, everyone, we weathered the public
[04:48:33] you know, relatively well, I felt and we represented ourselves. But
[04:48:38] when you're working open source and you're not making money and you're not, you know, like,  at some point you just kind of go, well, is this
[04:48:45] worth the headache? Do you, you know, do you pull away? Do you prioritize that other things? And,
[04:48:51] And
[04:48:52] For me, I was just like, okay, no, like,
[04:48:55] we have to show what, you know, it kind of,
[04:49:01] focused in on me even harder to make sure that we reach this goal and that we do things better but
[04:49:07] Um,
[04:49:08] You know, not everyone ultimately came out of the other side of that.
[04:49:17] Thank you.
[04:49:19] Thank you.
[04:49:20] I wonder if the other Ryan remembers this.  Yeah, I mean, that's why I didn't want to be too...
[04:49:25] to
[04:49:27] descriptive. I didn't I didn't want to like necessarily
[04:49:30] you know,
[04:49:32] Um...
[04:49:34] Thank you.
[04:49:35] you know, point fingers at another project or whatever.  Who has I said?
[04:49:40] made
[04:49:41] This was like, what, a year and a half ago.
[04:49:46] We're all in a different place now.
[04:49:48] um,
[04:49:49] *shriek*
[04:49:50] But it was.
[04:49:52] uh, formative
[04:49:54] experience for people on the solid team, not just solid start, it actually made a big difference.
[04:50:00] you know, to to, you know, realizing where we were in this solid team that was
[04:50:04] Uh...
[04:50:05] I've never experienced public scrutiny like that.
[04:50:09] you know, randos, not even randoms, like
[04:50:13] God.
[04:50:14] people like trying to at like Matt Billman and the Netlify crew and being like trying to blame them and trying to like
[04:50:23] I don't get me fired. I don't even know. It was like,
[04:50:26] Shame on you and all this stuff and then
[04:50:30] Bye.
[04:50:30] you know, called into the integrity of the whole team.
[04:50:37] So,
[04:50:38] That's why I named this release this because it's kind of like a,
[04:50:42] nod to the fallen heroes, so to speak.
[04:50:45] Um,
[04:50:46] everyone who got us here across
[04:50:50] the finish line because I don't want to bring this into solid 1.0 release.
[04:50:55] I want people to celebrate of what they can accomplish,  the way they can build on the web,  just how amazing the technology is and the DX and everybody.
[04:51:04] bit of it.
[04:51:06] And
[04:51:07] I maybe I need closure a bit on
[04:51:12] you know, the aftermath on all this.  We never really talked about it.  We talked about it a bit on stream, I guess,  or maybe I was on guest stream.
[04:51:19] But
[04:51:21] you know,
[04:51:22] This is how...
[04:51:25] For me, at least.
[04:51:27] we've,
[04:51:29] We know we made it. We did it. We
[04:51:32] We started at one place.
[04:51:35] We learned.
[04:51:37] We conquered...
[04:51:39] We succeed.
[04:51:43] Thank you.
[04:51:45] Right. To Nikhil's, you know, yeah, he's he's other than myself.  Like he said, he's the both of the top contributors there.  Nikhil, Nikhil, this is
[04:51:57] Everyone...
[04:51:59] on the
[04:52:00] on, you know,
[04:52:01] you know, and this is something we don't dox work. Yeah. Everyone on the first, like,
[04:52:06] five or six lines
[04:52:07] probably did a freaking ton of work here at some point.  Because I think it actually ordered in contribution  until I started adding stuff at the end.  I do feel bad. There's a few people down here that I can get special shout out, like,  Paulo and DevRB, and I think there's another one in here.  They worked on the islands demo.
[04:52:27] on that branch that took forever to get merged.  And when it got merged, it got merged in such a messy way  that I think I lost most of their commit history.  These guys did incredible work to prove the Movies app,  which is like an incredible demo.
[04:52:42] I, I, they didn't get as enough recognition as they deserve.  I found their names through closed PRs where when I didn't merge the islands demo and then  they were still working on it even, you know, afterwards.  And I like couldn't.
[04:52:55] Merge the branches. I found them on those closed PRs and added them to the list, but they did way more for that than would actually shows on on.
[04:53:06] It was incredible to go over the list because I remember lots of those PRs and suggestions and things where people were excited about the project for a while and wanted to help.
[04:53:18] you know,
[04:53:19] Uh...
[04:53:21] whether it was like little document changes or like, you know, work on the CLI or, you know,
[04:53:28] you know,
[04:53:30] Yeah, there was like phases where different developers are coming in and do, you know, a small handful of PRs to get their thing working or whatever.
[04:53:37] you know, and they could come and go. But I look at the list, reminded me of that.
[04:53:43] Anyway.
[04:53:45] Thank you.
[04:53:57] I'm sorry for the music in the front. Yeah, we're close now. There's some bugs coming in, which is good. I'm
[04:54:03] How many issues do we have right now?
[04:54:06] Yeah, solid core bug.
[04:54:09] This one's apparently very hard to reproduce so that one's gonna be fun.
[04:54:13] some Minchi issues in terms of style counting.
[04:54:16] This is someone trying to do something with solid that doesn't really work.  I just haven't had time to tell them, figure out what the right solution is.  This...
[04:54:25] um,
[04:54:26] is weird but completely avoidable.
[04:54:29] Um...
[04:54:32] This is probably a Vinci bug.
[04:54:35] Vinci, Vinci.
[04:54:37] Yeah.
[04:54:40] Pretty good place, honestly.
[04:54:46] Thank you.
[04:54:47] Thank you.
[04:54:47] *sniff*
[04:54:48] No, the clown thing, I'm done talking about clowns. I know this will be fun for the next week or so.
[04:54:56] Um,
[04:54:58] It was important to me to...
[04:55:02] to
[04:55:04] Finish that cycle.
[04:55:09] Thank you.
[04:55:16] *sigh*
[04:55:19] Anyway, um...
[04:55:22] Yeah.
[04:55:26] Yeah, I'm sorry for those little matches. It was a, it was, it was important release. I've, it's been three years. I kid you not, it's been, it's been three years.
[04:55:40] We is funding last year we were celebrating with Astro, right? You know, they're like, yeah, three years since the first commitment Astro.
[04:55:48] Um,
[04:55:49] Solid starts, first commit.
[04:55:52] It's probably...
[04:55:54] around the same time. I mean, let's, let's, let's look, um, view two. I mean, there's the beat community getting in there again, or sorry, or sorry, beat two. There's the view community getting in again to show us how their work on developer tools are just completely game changing, right?
[04:56:15] in terms of
[04:56:17] what we're capable of, especially for library authors. I give them top marks on that side.
[04:56:25] Yeah, when's this initial commit?
[04:56:28] Okay, not quite.
[04:56:29] next week.
[04:56:30] April 1st.
[04:56:33] I was playing around with this before, but obviously I didn't publish it up yet.  But yeah, like basically
[04:56:39] around the exact same time that ASTRO was starting,  I was like, yes, I need,
[04:56:44] an SSR
[04:56:46] solution, look, create solid like
[04:56:49] The stuff's already actually in here at this point. So yeah,
[04:56:53] I had started...
[04:56:54] this
[04:56:56] around the same time around the Christmas break of 2021.  It was before solid 1.0 even.  If we actually look...
[04:57:03] at the package.json here,
[04:57:06] What version of solid were we on?
[04:57:09] Um...
[04:57:11] See if I can find it.
[04:57:13] do these examples, package.json.
[04:57:15] SolidJS 0.25. There you go.
[04:57:18] So...
[04:57:20] Yeah, I mean...
[04:57:22] We had everything we need already.
[04:57:23] Back then we had out of order streaming, suspense on the server,
[04:57:28] you know,
[04:57:30] transitions.
[04:57:34] You know, why not?
[04:57:37] Good.
[04:57:38] *Sigh*
[04:57:44] Thank you.
[04:57:46] Thank you.
[04:57:51] Thanks, Shai.
[04:57:56] Thank you.
[04:57:59] Thank you.
[04:58:00] Oh.
[04:58:01] This tweet is from an hour ago.
[04:58:04] I'm going to open this up off screen.
[04:58:07] Just because...
[04:58:09] I could decide what I want to do with it.
[04:58:13] Thank you.
[04:58:29] Oh man!
[04:58:31] That one sentence...
[04:58:33] Oh, okay. I'm going to bring this up because I missed this.
[04:58:36] Did that one sentence make it somehow?
[04:58:46] Did that one sentence make it somehow on this?  We have a complete docs.
[04:58:54] Rewrite.
[04:58:55] But...
[04:59:00] That opening sentence somehow made it. How did this even possible?
[04:59:10] Thank you.
[04:59:11] What's up? What's up?
[04:59:14] Okay.
[04:59:16] What?
[04:59:26] Bye.
[04:59:26] I-I-I don't even know. We literally deleted the project and started
[04:59:32] over from scratch.
[04:59:35] That one sentence somehow...
[04:59:38] somehow still persists here.
[04:59:46] That's crazy.
[05:00:01] *sniff*
[05:00:10] What?
[05:00:11] That's no, I mean, he's right. I have no idea how that works.
[05:00:24] I have no idea.
[05:00:25] Uh...
[05:00:37] I mean, at this point, we're on like the third rewrite of the docs.  Like we don't even like this doc site is is pretty much dead.
[05:00:52] Oh no, you made it here.
[05:00:58] Tuh!
[05:00:59] How does the stupid sentences keep on making it here?
[05:01:05] What?
[05:01:06] Thank you.
[05:01:09] *laughs*
[05:01:10] Thank you.
[05:01:12] Thank you.
[05:01:17] Thank you.
[05:01:19] *laughs* How did this- like it's like the only part of it- it's funny because like
[05:01:27] All, yeah.
[05:01:30] Thank you.
[05:01:34] Do they still have it?
[05:01:36] At least...
[05:01:42] Thank you.
[05:01:54] Like, I honestly have no clue how this one sentence just keeps on.  I guess it's technically two sentences, but it just keeps...
[05:02:03] It's probably just such a well-written...
[05:02:07] I...
[05:02:11] Thank you.
[05:02:14] Thank you.
[05:02:17] Thank you.
[05:02:21] Thank you.
[05:02:22] Thank you.
[05:02:28] I... I... I... I...
[05:02:31] Wow. I have no clue. The funny thing is, I guess I don't.
[05:02:36] have the current...
[05:02:41] Yeah.
[05:02:43] I'm gathering that it's...
[05:02:47] I'm gathering it's like not there anymore, but...
[05:02:50] I'm sorry.
[05:02:52] *sniff*
[05:02:56] Yeah, yeah, it's the old docs, right?
[05:02:59] It's just... Yeah, it's just...
[05:03:09] Guides. Okay, guides. Is the guides section still here?
[05:03:17] Thank you.
[05:03:19] Thank you.
[05:03:21] Thank you.
[05:03:24] Let's see if it's...
[05:03:35] Okay.
[05:03:36] Thank you.
[05:03:40] Thank you.
[05:03:44] Thank you.
[05:03:46] Thank you.
[05:03:55] Yeah.
[05:03:56] Thank you.
[05:03:58] Bye.
[05:04:02] I don't even understand how this is possible, but...
[05:04:10] Because it was moved out of our repo.
[05:04:14] which is where the problem was like it was insult like, uh,
[05:04:17] Nikhil was doing like some simple
[05:04:22] How should I put it? Like he was doing like some prototyping in the solid repo.
[05:04:26] And then they want to set up a separate docs repo
[05:04:30] And so they moved the project, they got moved out of the solid repo and then other people are contributing there. So I never actually saw the
[05:04:36] the stuff happening. And then we started the project new inside the starts repo after the whole thing happened.
[05:04:50] Thank you.
[05:04:53] *cough*
[05:04:55] I just don't...
[05:04:57] I don't...
[05:04:58] I don't know. That's...
[05:05:03] That's definitely...
[05:05:05] Thank you.
[05:05:06] Definitely odd.
[05:05:08] I almost want to go back through commits to understand how this could possibly happen.
[05:05:16] Thank you.
[05:05:17] But...
[05:05:18] you know, we're kind of at the end of our stream here.
[05:05:26] *sad*
[05:05:36] *laughs*
[05:05:41] Thank you.
[05:05:49] Thank you.
[05:05:50] I've got it there for sure. I mean, it's funny if it's just like that one sentence that it's a little bit
[05:05:57] comical like it's like but like I I just I am I'm at a loss here because like I can't even I don't even know how I
[05:06:05] when he commits to go back, like we have fork solid start, like,
[05:06:11] Thank you.
[05:06:12] Like...
[05:06:13] If we go back to
[05:06:15] Do do do do do do do do do do.
[05:06:18] Let's say...
[05:06:23] Like the docs...
[05:06:26] aren't even
[05:06:36] I don't even remember when that happened. It was like July or something.
[05:06:42] Thank you.
[05:06:43] *punch*
[05:06:44] Thank you.
[05:06:49] Yeah, it's funny because like the whole thing wasn't actually in the repo.
[05:06:53] So,
[05:06:55] Yeah, this would be...
[05:06:59] Thank you.
[05:07:02] Yeah, this is like...
[05:07:04] Thank you.
[05:07:09] Trying to go through a million Nikhil...
[05:07:13] PRs, yeah, I don't know.
[05:07:17] Go to that file and check the history. Yeah, okay, you're right. That's something I can do relatively easily. Okay.
[05:07:23] Docs.
[05:07:26] I'm actually just going to do it right here if I can.
[05:07:29] I do have to...
[05:07:31] um
[05:07:34] Docs.
[05:07:37] core concepts.
[05:07:39] routing
[05:07:43] Thank you.
[05:07:43] Do I not have?
[05:07:45] I'm like so out of date here.
[05:07:47] *sniff*
[05:07:49] It's funny, like VS Code, I usually have the blame thing here.  I haven't updated this forever.
[05:07:55] I guess I could do it on GitHub as well.
[05:07:57] But.
[05:08:00] It's just packages...
[05:08:04] start no not start packages it's not packages it's
[05:08:08] The thing is, docks might have moved at this point.  We might be...
[05:08:12] This might be...
[05:08:15] Not advanced, core concepts.
[05:08:19] Routing.
[05:08:21] Flame
[05:08:34] Thank you.
[05:08:51] Yeah, I don't know. I...
[05:08:53] I guess...
[05:08:56] Thank you.
[05:08:59] It came over with the initial commit. I don't know.
[05:09:05] Yeah.
[05:09:06] Thank you.
[05:09:09] Thank you.
[05:09:11] All right.
[05:09:15] But I mean...
[05:09:16] Yeah, anyways, let's just...
[05:09:20] Go. Anyways. Um...
[05:09:23] Crazy.
[05:09:24] That's a crazy way to end the stream, but
[05:09:31] Thank you.
[05:09:32] Yeah, anyway.
[05:09:35] Thank you.
[05:09:37] Thank you.
[05:09:38] I'm dumbfounded.
[05:09:41] But yeah, I'm way over. I'm over time. We'll have to pick up next week.
[05:09:48] Thank you.
[05:09:49] uh, anyway, you, you all have a good night. I gotta go. Um,
[05:09:55] So until next week, catch you guys.
[05:09:58] Have a good one.
[05:09:59] Thank you.
[05:10:00] Thank you.