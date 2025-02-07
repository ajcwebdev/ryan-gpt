---
showLink: "https://www.youtube.com/watch?v=sMbICJUGJj4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Designing Signals 2.0"
description: ""
publishDate: "2024-03-23"
coverImage: "https://i.ytimg.com/vi/sMbICJUGJj4/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Alright, alright. We should get started. Hopefully
[00:03:02]  my mic works this time. You guys can tell me if you can actually hear me this time. Last time I did this, I came on and there was no mic.
[00:03:18]  Alright, good, good, good, good, good, good. I'm stoked to have you all with me today. I'm stoked about the topic today, I
[00:03:26]  have to admit. I might be like pushing it a little bit, you know, but this is where my head's at. I mentioned, you know, a few streams
[00:03:36]  back that we'd be, you know, changing up. You know, I spent a lot of time about two years when I started interviewing every single person in the meta framework
[00:03:45]  space. Right? And I started trying to understand what Nuxt did and SvelteKit and Remix and just working my way through all that. Then I
[00:03:54]  spent last year. And then I spent last year doing a lot of stuff. And then I spent last year doing a lot of R&D around SolidStart. What are
[00:04:00]  the best patterns? How do RCs work? We spent a lot of time dissecting this stuff. And we're now at a point, well, if you saw the
[00:04:04]  announcement that SolidStart is reaching 1.0, which means, you know, that's a long journey. It's been three years. And both of the, you know
[00:04:14] , basically the first two years of the stream was all in support of that. I'm back to talking Reactivity. I don't know if people out there realize it
[00:04:27] . The last time that I did any kind of significant change to the reactive system in Solid was probably September 2021. So like almost three years ago, you know, we
[00:04:39]  haven't really changed very much since then. And it's kind of crazy when you think about it, right? Because we had stuff like transitions and concurrent rendering and suspense and
[00:04:49]  out of order streaming and all these things for years and years and years. And they're becoming the thing that everyone's talking about fine green rendering signals, you know,
[00:04:57]  and but we've had a lot of time to kind of think about where to take this next. And I would have loved to have worked on this stuff earlier. But
[00:05:11] , you know, small team, even if we multi-thread stuff and have different people looking at different things, me, myself have a hard time, you know,
[00:05:21]  if my job is to get stuff out the door, I have a hard time necessarily multi-threading too far. That's my thing. But anyways, that's
[00:05:30]  why we're here today, right? I just say hi to a bunch of people. Happy birthday to me. Well, happy birthday to you then. Yes. I think
[00:05:40]  Alex from our community just had a birthday too. He woke up to bear the mention in the Solid Start release, thanking him. And he said that was a great birthday wish
[00:05:52] . So yeah, birthdays around. Hi, everyone. How are you doing today? Yeah, not first. But, um, hype. Definitely hype. Hype.
[00:06:04]  Signals the sequel. Yeah. You know, that makes me think of that, um, that, uh, that, uh, when Michael Rawlings joke about signals during
[00:06:13]  signals week. More hype. Yeah. Signals 2. Yeah. Okay. The title of the stream, well, at least the image is a little bit provocative or suggest
[00:06:25] ive. I'm not going to apologize for that. It just, I, I, I, I feel like when we say signals, it means a lot of things
[00:06:33]  to different people. I was just actually talking to Ryan Florence on Twitter, trying to clarify what, you know, the difference between signals and backbone events were like. So even
[00:06:41]  putting a 2.0, um, you know, it's pretty extreme perhaps, but I think there is a, an evolution along this path. And I, I
[00:06:50] 'm seeing this while working with the people in TC39 on the signals proposal, right? Cause there's like, what's the minimum viable product now? And honestly, if
[00:07:01]  you ask me about that now, compared to like a few years ago, I would say this stuff's a little, you know, different. So even calling what's coming
[00:07:08]  out there as signals 1.0, so to speak, isn't really fair. So we should talk about that. Right. The thing is for solid. at
[00:07:22]  2.0 is about returning to the basis, right? Solid start represents the, the greatest extent away from the core we could go, right? You, you start with
[00:07:34]  this, you know, the core is the, those, is the signals. It's a reactivity. Then you build some stuff that can render on top of it
[00:07:41] . And then you build some component libraries and then you, and you build a router and you build all these pieces to finally put it all together and layer it as far as
[00:07:49]  you can with solid. And the journey of solid 1.0 has been that when we started, people told, told us what we were doing wasn't possible. Like
[00:07:58]  that's just not how things worked. It wouldn't be performant. It wouldn't scale. It'd be messy. You know, we heard tons and tons of,
[00:08:06]  you know, criticisms about this. So I felt, I felt, and a lot of the work here was to prove that we could do the full picture from end to
[00:08:16]  end and not just do it, do it well, but what that's mean is we've had to build out every other piece of the ecosystem in the process. How
[00:08:27]  do you handle metadata? You know, how, how different CSS style stuff, things I'm going to admit challenge me because I don't, I, there's zones that
[00:08:39]  I care to be building general solutions in. There's other zones that I want to leave it open to others to build solutions in. Solid Start was a challenge because we wanted
[00:08:48]  it to still be a general solution, even at the probably most opinionated layer you could get at. So I'm very excited to return to my roots, return to
[00:09:02] , you know, just the reactivity that powers it all. Anyway, sorry. I'm still, I'm still like getting through chat when people are just saying signals 2
[00:09:12] .0 signals. Good. People are excited. You know, good. Yeah. Mic check. I'm like 10 minutes behind in the chat. Sorry, guys.
[00:09:24]  All right. All right. Okay. I'm just, I'm just catching up. Okay. The heck 2.0. Yeah. Yeah, exactly. The conversation with
[00:09:36]  Ryan Florence. Rust. Well, what does rust have to do with it? But sure. Let's, let's have rust represent. We got signals in rust too.
[00:09:45]  We got signals in dart. I don't know if people see it. There's solid dart, which is a dart signals implementation. There's, there's, there
[00:09:55] 's, there's signals. Like, I guess, like my, my name, the signal signals everywhere. Um, it's not an understatement at this point.
[00:10:03]  I, I mean, yeah, finally a non-meta major. See, I've got, if I'm only here, I must be way behind on the,
[00:10:13]  on the chat. Um, sorry. These are just so many of you today. See, and this is an interesting question, right? Because I've looked at many
[00:10:31]  of the other reactive libraries over time. Um, I've been working with people in the TC39 who are involved around like Ember. I actually haven't talked to
[00:10:41]  YehudaCats much, you know, uh, um, at all really outside a few Twitter conversations, like in public. So I can't say much on
[00:10:52]  that. I thought Starbeam's idea of resources was interesting because it's a different model. I, I'm going to talk a bit about the model we've been
[00:11:01]  using for the last, like, oh God, eight years now. Um, but yeah, I, I, I, I think we're in the same zone.
[00:11:10]  I want, I want to talk about what problems we want to solve, what layers onto it. There's a challenge when you're dealing with primitives that you could just
[00:11:20]  like keep on adding them. And I'm trying to understand what the base set is and what the minimum requirement is here. And to be fair, I'm not straying
[00:11:29]  too far from what we've done to date. I'm just, I, so this is definitely going to have our slant on it, but our slant, as
[00:11:39]  it turns out, is been what people, is the direction others are taking, you know, things like view vapor, things like, uh, Svelte five.
[00:11:49]  And like signals, like watching that angular keynote the other day was amazing because like they, they, they, they just, they said it so matter of factly, you
[00:12:01]  know, like, oh yeah. Um, I forget there was like a place where they had a slide up and they're like simplicity, maintainability, all like all these
[00:12:08]  great qualities of them using signals. And I'm just like, it's awesome to see that because when I started, that was the thing that was in question. And
[00:12:17]  now we're talking about, you know, Google keynote where it's just like the assumed standard. It's like, yeah, yeah, of course, this is what you
[00:12:26]  get. So yeah, we've come a long way here. Um, yeah, there, uh, I don't know. I don't know if spend the
[00:12:48]  time and to be fair, we are looking at implementing the browser signal spec as a base to build a new reactivity off of its, its potential there, but that's
[00:12:57]  not where my like complete focus is. I want to explore the possibility first. That's what I've always been about. I want to, I want to look at
[00:13:04]  what we want to accomplish. Hi, I'm new to this. What pattern do signals follow? Um, if I mean, general sense, or if we're talking
[00:13:17]  like gang of four patterns, it's the observer pattern. Um, but it's, it, it goes, you know, it's, it's a bit more than
[00:13:26]  this because in a sense signals really originate from a lot of the research around synchronous, um, reactivity and synchronous reactive programming. And this, you know, it
[00:13:38] 's influenced a lot by like digital circuits, like the, I, if you've ever done any kind of, uh, whether the FPM GA programming or whatever, like
[00:13:47]  digital logic, VHDL, Verilog, you'll know what I'm talking about where there's this idea of like a clock cycle. And essentially whenever changes happen
[00:13:56] , they all apply at the same time. It's not like this, then this, then this, then this, even if you write your code a bit like that,
[00:14:02]  you're describing a set of rules that occur on each tick. And signals are, uh, direct from that line of academia. Um, if the signals problem makes the
[00:14:15]  browser, will framers become faster and villain genius without signals? I doubt it. I mean, signals are still an extra primitive concept. And if we were to actually
[00:14:35]  finish the story, we have to talk about effects and DOM updates. And I think like it's interesting, right? Cause people are wondering like, maybe if we could pull
[00:14:48] , fold the whole thing into the C level, it never even needs to get out to the JavaScript. I don't know. Um, I'm suspect, but I
[00:14:54]  think there's a lot of difference in effect. And we'll get into that because I want, I'm going to get into the definitions here and what I think about what
[00:15:02]  1.0 or whatnot means. Um, uh, people excited about the solid start. Hey, fuzzy. Yeah. Tori is signals plus rust. I mean
[00:15:16] , people using solid with Tori is, is, you know, a bit of that, but I was actually talking about like leptose where the signals are actually in
[00:15:25]  rust. Um, what's my drink of choice today? Okay. Now we're getting to the important questions. It is still this coconut water that apparently, Oh,
[00:15:44]  actually one of my front, one of my lights isn't on. Yeah. I'm like, it looks really murky, but to me, it looks like a nice
[00:15:51]  pink color. It's just the, the condensation on my glass. Anyway. Oh, the signals and VDOM related. They're not, um, all
[00:16:05]  right. Okay. I think I'm finally catching up to everyone. Fellow coconut water enjoyer. Yes. Solid native when well, um, I'm have no intention of
[00:16:19]  building own native platform. It's a lot of work. If you just saw the react native release, you know, and they've been, they have a whole new architecture
[00:16:27] . They've been working on this Facebook with like a team, a sizable team for years working through react native. We don't have those resources. If you look
[00:16:34]  at the approach solid has taken over the years, it's maintenance, maintainability is a huge part of our concern because we recognize that we are a bunch of open source volunteers
[00:16:43] . We don't have full-time team of, I don't know, 40 devs or 60 devs or whatever. You know, I'm just pulling numbers onto
[00:16:51]  my hat, sort of some of those numbers are real, but, you know, working on these projects. Um, like on the other hand, do you want to
[00:17:00]  use mobile with solid easily? We already did streams on this. So you can use native script, which, you know, not everyone might say they want that, but I
[00:17:11] , I was quite impressed by it. Um, that very one-to-one API approach. There's Tori mobile, which we were just talking about another great
[00:17:20]  option. Both of those allow a very, uh, native, um, level kind of interrupt. There's obviously things like a capacitor by ionic, which is more of
[00:17:29]  the web view approach to my understanding. But like there are decent solutions on mobile and I think they're just going to get better. And I think we should put support
[00:17:38]  into that because let's be fair view and Svelte are also going to be in that same boat. They're going to want to kind of get, get in there
[00:17:44] . They also do not have, you know, uh, huge team to build the native development up. I think we should, you know, this is part of my
[00:17:54]  choose your battles layering, uh, thinking. Yeah, yeah, this is my actual shelf. It's just, my office isn't situated this way in reality, like
[00:18:06]  my, my shelf's over here. Well, the thing is, if you address the primitives, you address the base, then people can do whatever they want with it
[00:18:21] . So that's why 2.0 is early. I just, I would have come back here earlier if there, if like, I, I kind of joked back
[00:18:28]  in the day, I didn't want to build solid start. I want someone else to build solid start. Cause I was like, you know, the farther away you
[00:18:34]  get from the core of the framework, like you build solid start, you build solid start, you build whatever thing, you know, go for it. You know, like
[00:18:41]  the way next was built, but the reality of it is to get adoption these days, people expect, you know, to have the, you know, all the features,
[00:18:49]  you know, and we had to take this to the extent even to prove that it was possible before people would take us seriously. And that's just the reality of it.
[00:19:00]  It is what it is. Do I feel like we've sunk more time there than I would have wanted to? Yeah. But I, I mean, once, once
[00:19:06]  I was involved, that was the danger of it. I wasn't going to settle for something that wasn't up to the standard that, that we had to solve it itself
[00:19:14] . So, yeah. Thoughts on Dioxys Live View? I mean, not to hijack too much, but sure. Quick thought. I think stateful
[00:19:27]  servers are interesting. I think they're a technology and place that I'd want to do more with. That being said, if I had the ability of stable servers,
[00:19:38]  I'd still not diff. I'd probably use signals and go for a more reactive approach. A Dioxys is a diff-based approach, which like Live View itself
[00:19:45]  is, but I think we can do better. But that, again, Rust on the server is super fast, so it is what it is. But the other bigger
[00:19:53]  part is, today, most front-end frameworks work on the premise that you won't have stable servers. That's the baseline, so they don't make those assumptions.
[00:20:00]  Which means, while I quite enjoy the simplicity of the Live View model, there's a whole section of people who can't, today, actually just pick up that model
[00:20:11] . All right, all right. We should get on topic at some point. You know. Probably. This is my name. If you're streaming to Nitro,
[00:20:29]  it's weird. All, every other adapter, other than that AWS one, works with streaming. So, I don't know what's, what's up with it.
[00:20:36]  Like, in fact, the Netlify and Vercel AWS functions, like their functions that run on ADFs, also work with streaming. My Hacker News
[00:20:43]  demo, I deployed to everywhere. Even Amplify works with streaming. I deployed that just the other day. So, I, I'm, yeah, I don't
[00:20:52]  know. How are we doing? Day 33, did new people just join on, or did I get raided by someone? Probably too early to get raided.
[00:21:02]  Good. I am in software and development, at least on Twitch. So, that's, that's good. And, uh, oh. Dev, thanks for the sub
[00:21:09] . 13 months. That's, that's awesome. I, I missed that earlier. Thank you very much. Probably one of the longest Twitch subscribers we have. I
[00:21:24]  say we, I mean, I do. Dax, Brian, interview when? That's a great question. I don't know. I, I don't know
[00:21:35]  if I would. Yeah. Okay. Sorry. It's good. Never first can have their own dapper and not the rep line, but first gotcha. Yeah.
[00:21:43]  Um, I think I'd take everything too seriously. I think Dax would hurt my feelings. It'll happen. Oh, front end masters. Hey, there you
[00:21:56]  go. I had, if you haven't seen my course there, um, I'm actually going to talk a little bit about the stuff, uh, related to that.
[00:22:04]  It's more like a sequel to the front end masters course. Cause I, the first, uh, hour or two-ish of it, I talk about the basics of
[00:22:11]  solid and I talk about the reactivity system. And I want to talk today a bit about, um, yeah, I mean, we, we should just get this rolling
[00:22:18] , right? Uh, it's hard because it seems like, you know, there's, there's so much energy in the air right now, but, um,
[00:22:26]  yeah, I, the way we teach reactivity, I think has to change a bit, um, or should change a bit. And I think that'll help people adopt
[00:22:37]  it. Um, I say that after literally trying to perfect the solid explanation into five minutes. Um, if you guys aren't familiar, uh, to the, the S
[00:22:47] ina, um, DX on solid managed to manage to make our intro video into five minutes to condense the whole explanation that, you know, I take, you know
[00:22:55] , originally hours to explain, but I think we, we need to relook at this a bit. And that's a part of what I want to talk about today.
[00:23:10]  Um, yeah, I, I, I, I, I hear you, Joe, but the truth of the matter is this, like, there's so many people
[00:23:17]  that it's just like, next is default option these days. I, I, there's a, there's like this simple happy path and there's this mentality and it
[00:23:25] , and it's even being kind of bred by the react team. Right. In the sense that it's like, you need a framework to, you know, to
[00:23:33]  do react. That's kind of where our, you know, we're at today. And while not everyone fits into that bucket, that's, that's kind of the
[00:23:43]  thing. Ooh. Hey, Jadon. Speaking of which Jadon is going to be on the show, uh, pretty soon. I, I believe next
[00:23:50]  week, and we're going to talk about Wiz, um, and resumability and all the cool stuff that goes, goes along with that. So yeah, exciting stuff
[00:23:59] . I know we're just starting up here. I'm playing with chat, but yeah. Well, I mean, Wiz is the original resumability framework, to be
[00:24:09]  fair. That's why we need to talk about this. I've wanted to have Jadon on for a while. And I was always like, is there going to
[00:24:16]  be like some like NDA Google stuff we have to worry about, but I think the perspective around the, uh, um, Wiz has changed and in good part,
[00:24:26]  thanks to the narrative that Miskill and Quick have pushed, um, people care about this outside of large corps and outside of Google. Yeah. Finally, some public content
[00:24:39]  in on Wiz. Exactly. And where better to find it? Right here. All right. Yeah. Uh, was one of the, uh, my understanding is one
[00:24:53]  of the co-creators of Wiz or co- like they're, they started as a small team and he was, he was one of the like main guys near the
[00:25:01]  beginning of Wiz to my understanding, but we'll get all the details about that next week. So, yeah, I mean, we, we, we, we,
[00:25:16]  we should talk about that because I mean, we will talk about it a bit with, uh, with, with, with, uh, Jadon next week. But
[00:25:27]  the one thing you got to give some credit to both on the Marco and Quick side is Wiz was not that approachable a few years ago. like actually figuring out how
[00:25:37]  to make it develop, like you can come up with the most brilliant solution, but actually trying to come up with a developer experience that developers love is a whole other thing.
[00:25:47]  And our job as firm authors is to marry them both together. I think the direction that Wiz is going is definitely, you know, on that path. But I'm saying
[00:25:54]  it's like, it took a lot of work and rethinking to get there. Anyway, yeah, geez, we're just talking crap and it's already been a
[00:26:03]  half an hour. Hmm. Okay. So I actually made some notes for myself today, so I try and keep on topic. But as I said, keep, keep chatting
[00:26:14]  with me, you know, um, it's all good. So I already talked about what signals 2.0 is. Um, yeah. What is signals 2.
[00:26:23] 0? It's, it's looking at rethinking the, the, the, the kind of core abstraction primitive around primitives around signals. I'm not saying like we
[00:26:37]  get rid of crate signals, so to speak. I'm just saying, look at how things have to adapt to meet the needs that we want today. Cause this has been
[00:26:45]  a very long running thing. Um, what is signals 1.0? Well, you know, because it's gotta be a 1.0 before a 2.0
[00:26:54] , I, it's not as clear of an answer. You know, in 2022, 23, every library started adopting signals in some sort of way, but even those were
[00:27:04] , uh, quite different. And you have to understand, like when I started teaching signals, um, I taught them a very different way to how they work today.
[00:27:16]  Right. When we teach signals, we teach push. Right. Yeah. I'll give, I'll give a shout out here. I, I actually, um,
[00:27:39]  no books, whatever. I can't pronounce name, um, been long involved with the Ember community. Um, and it's done a lot of great work around Em
[00:27:48] ber reactivity. So I'm just gonna, and big push on, uh, I keep on seeing, promoting, uh, like star beam, which is a universal react
[00:27:57] ivity, um, thing that, uh, that, uh, Yehuda from Ember came up with. Yeah, so yeah, show me the code. We
[00:28:08] 'll, we'll get to, we'll get to code in a bit. Don't, but, uh, let's, let's start with, well, actually let
[00:28:14] 's get to code right now. Why not? I'm just gonna, I'm just gonna open. I'm just gonna open up a playground for fun. And let me
[00:28:21]  share my screen and present. See, if you've ever watched me, um, let's see here. Is this one, yeah, let's go cool. Everyone
[00:28:34]  can see that. If you ever watched me teach reactivity, um, or most people, even I I've, I've been noticing Evan gives a similar talk. I
[00:28:45]  don't know when he started doing it, but it probably would have been after they've released the competition API. I think I wrote an article. Some of you might
[00:28:57] 've seen it. Um, uh, what was it? I think it's on page two. It's, it's been that long ago. Uh, it was called
[00:29:06]  hands-on. No, not that one. It was, well, I think it's linked here building a reactive library from scratch. And I made a very,
[00:29:12]  very simple reactive library, um, create signal, whatever. I actually grabbed the code from this simple reactive library, and I'm just gonna paste it into our playground here just
[00:29:26]  to kind of show something, right? Cause I think this level of understanding, and I'm not going to go over this in crazy detail. I expect you to be somewhat
[00:29:35]  familiar with this is at least important to understand or talk about where we're going right now. Okay. So as usual, I'm going to give a little bit of
[00:29:41]  background. Okay. Good to know. Start being still pre-1-1 production. So don't try it on real projects. Like Angular is, do you think any
[00:29:54]  other friends might be a candidate to merge with solid? For example, quick. Quick is probably the most likely framework, uh, like the closest to solid, I would
[00:30:11]  agree. Um, so this is, this is, this is definitely something that, that, you know, me and Misko talk about joining efforts, talk about, he
[00:30:20] , you know, just the other day we were talking about like, if I could work on this new version of signals, they'd want to adopt it and quick. And
[00:30:26]  at a certain point, you know, who knows? Right. Um, but we'll get there. Um, let's, let's start with the, the,
[00:30:37]  the basic, basic, basic version of signals. What's this? No, that's not in here. That's not in my article. Sorry. The most basic
[00:30:46]  version of signals involves create signal, which is a read function that when it reads something, it checks if there's a currently running context and then it subscribes. And
[00:30:55]  then when you write the value, you notify everyone. And the reason I'm, and there's even this cleanup function that goes through and, uh, removes dependencies on
[00:31:05]  both sides. And then there's create effect, which simply pushes itself on the stack, pops it off. But if you remember in that article, I got to the computed
[00:31:18]  value, I got to create memo and I just said, Oh, let's write a signal and have an effect right to that signal and call it a day. And
[00:31:25]  I kind of breeze it over and I go, and I go, yeah, this isn't how it really works. Um, but you know, it'll work for our
[00:31:33] , you know, simple example. And the reason is this system that everyone teaches, you know, reactivity in 50 lines of code, cause you can, you know,
[00:31:42]  if you forget about the create memo, it's 50 lines of code is I'm going to turn off the notifications on type check is a push based system. Um,
[00:31:55]  that is not actually how any of the signal libraries work. We teach it to make it simpler because what you can do in a push based system is you can go, we
[00:32:05] 'll just use solids syntax. We can go create signal and I'll put a one. And then what I'll do, I'll do const double. I mean, everyone
[00:32:15] , this is at this point, this is like hello world in a reactive system, pretty much, right? And we'll go S times two. And, um,
[00:32:26]  maybe we will do great effect and it's going to go console dot log double. Okay. And if all goes good. Oh, right, right. Yeah. Yeah
[00:32:47] . Like get my, get my console back here. If all goes good, we're going to see this two in the thing. Can I blow this one up too?
[00:32:55]  Hmm. I can't. Hopefully you can see there's a little two here. Okay. But this is, this is the basic example. And then you go like
[00:33:05] , let's set, um, to two. And now you see two and four. So it runs once you see two runs again, you see four. Now, if
[00:33:15]  I set it to two again, in my basic example, you're going to see this little colorful two here because it console logs four twice. Which seems kind of waste
[00:33:27] ful. So the first change we make in a actual reactive system is when we write the new value, if it's the same early exit, right? If value equals next
[00:33:37]  value or do some kind of object check or whatever, just return. And if we do that now, we're back to, even though we set the value, you know
[00:33:47] , I can add another set one here because it starts at one. You're only going to see two console logs, even though we called set four times. This is
[00:33:57]  basic kind of reactivity. You see, uh, for signals, you see, you see all the principles in play. The problem is this is a push based system and
[00:34:09]  it's not how an actual signals based system works, right? People fall on me so far, right? So what I mean by that is, okay, this effect,
[00:34:23]  that's fine. Right. But, you know, we can also like get rid of the effect and do something like this. So we could, let's say
[00:34:33]  we call double, right? Because one of the cool things about reactive system is that you can just access the value. So I'm just going to call double at each point
[00:34:42] , right? People always wonder why I called solid computed. Everyone else calls them computers and I called them create memo, like react. And they're like, why did you
[00:34:50]  do that? Well, if I put a console dot log in here and said, Hey, you know, S times two or something. I'm not running the
[00:35:06]  effect anymore, but you, what you see is there's still two console logs because the first time it runs, you call double, it prints it out. When setting it
[00:35:17]  to the same call value and calling double again, doesn't rerun this function. Right. And then setting to two and calling double now calls that function, right?
[00:35:28]  And if I call double one more time here, it's also not going to call it again. So from the kind of reverse view of this API, asking for the
[00:35:37]  value multiple times does not have it run anymore. So like, well, this is a push based system. This is already getting away from RxJS or backbone because
[00:35:53]  it's a push based system with memoization. To be fair, this system breaks pretty hard with the diamond problem. If you're familiar with it, like if we
[00:36:02]  had multiple dependencies, I'm not going to go into that because this is already a solved problem. But I want to talk about why when we teach reactivity, it's
[00:36:10]  kind of limited. Well, we're at 300, uh, 320 people across both streams. It's probably the biggest dream I've had so far. And it's,
[00:36:19]  I'm like looking for the raid and the raid didn't happen. This is just naturally everyone being here. That's so awesome. Okay. Okay. Let's keep on
[00:36:27]  going. So this is a push based system. So, and I said, signals aren't quite a push based system, right? This is a, you could argue
[00:36:39]  this a push based system with auto memorization. The, on the other hand, you know, you always hear people talk about react and react goes, we're so simple
[00:36:46] . Well, why are they so simple? Well, let's, let's look at the alternative way of looking at this. What if instead of doing this, I
[00:36:53] 'm going to console out a bunch of other stuff. We instead just go, okay, we'll let the value equals one. Okay. And then I'm going to
[00:37:04] , I'm going to, I'm going to make a set function. We'll, we will see why in a minute, but we'll say that value equals V.
[00:37:15]  And now we have const double equals, sorry, equals value times two. And let's see here. Um, and what else am I missing here in our example
[00:37:37] ? All right. I should probably put the console log in so you can see it. Cause this is a basic poll based system, right? If I go, Hey
[00:37:50] , value times two, we have our console logs here, right? I'm still calling double and set and double and set. There's something you're going to notice here
[00:38:03]  though. They're logged four times here, two on the first value, two on the second level value. So the naive poll based system and by poll, I just mean
[00:38:13] , you just ask for the value, right? You just like go get me the value and then it pulls and asks this and it just pulls you. Calling a function
[00:38:23]  is just a poll, pull, right? Right. So like, how would you check this? Right? Well, I mean, the first problem is this isn't very
[00:38:39]  optimal, right? Because you're, you're running it all four times. So what do you do in react or any framework that uses poll based system? You go
[00:38:47] , okay, let's introduce our own function. Let's call this one memo just for, for sake, right? What memo takes a function. And then, um,
[00:38:55]  let's see how, how are we implementing memo today? Um, let's do something like what last, I want to say, um, let's say last input
[00:39:10]  we we're going to need, and I'm going to use an array. I'm just running a memo function. We probably get this off, uh, um, probably
[00:39:17]  get this off of, uh, I don't know, like NPM or something, but I'm thinking I'm picturing something where you like return like, I
[00:39:26]  don't know, the function, same function with the args. And then we kind of like, um, we'd have to go through all the args, right
[00:39:33] ? So like let I equals zero, I, this is, this is very naive. I'm sure there's like loopholes. Like if you pass it an
[00:39:42]  argument, let's function, but args.length, I plus plus, and then what we're going to do essentially is if at any point, args, I
[00:39:53]  does not equal last, last in I, we're just going to return the function with, um, we're going to call the function. essentially, and actually let
[00:40:12] 's, let's, let's get a little bit fancier than this. Let's actually, what do we want to do here? We're going to say last,
[00:40:20]  last in equals these args and then last out equals here. So now we've updated those, and then basically if we go around and we realize the arcs the same
[00:40:33] , we're just going to return last out, right? So I, I just wrote a very basic memoization function. So you take the original function and returns a
[00:40:45]  version that doesn't call it again, unless the arguments have changed from the last time it ran, like a one depth memo function. So, um, if we go back
[00:40:54]  here and go demo and go memo this, hopefully it's like, I did something wrong. Oh, you have to actually return the value, but no, what did
[00:41:09]  I do wrong here? Um, oh, right. You need arguments here too. So, um, let's, let's pass V into here now. Right.
[00:41:21]  Just for simplification, but you can view this like the dependency array in react. Um, sorry. And it's not V it's value, value, value, value
[00:41:36] . Yeah. Okay. I did it. We were back to a single console log for each of these. Um, hopefully, hopefully you can all see this and can
[00:41:48]  follow what I, what I just did essentially. I, yeah, I can get, I can get all this reactive stuff out of the way now. Um, I
[00:41:59] 'll keep it, I'll keep it up here just in case I want it later, but essentially we wrote a memo function and now it has very similar behavior. Well,
[00:42:11]  sort of similar because our problem now is like, how do you write an effect when we, when we do this yeah, but we'll talk about eager and lazy in
[00:42:33]  a minute. This is why I'm actually late laying this out. So how do you do an effect in this system? Because sure. We can see that these are derived
[00:42:42]  values. Well, we can add our own effect function. Let's, let's add effect function. Um, and I, let's make effects array. So let
[00:42:51] 's go, uh, let's go const. I mean, this is really inlining it, but let's, let's do that and let's make it like,
[00:42:59]  um, function fact. And then all we gotta do, I think is just what, like effects, this one's gonna take a function. I'm gonna go effects
[00:43:13]  dot push function. Okay. Um, and then on the other hand, um, we need to probably, let's see here in our setter, where's our set
[00:43:30] ter here. So instead of just setting the value, like you could think of this as like in a component registering its effects, then we would go through like for,
[00:43:42]  um, let's use I again equals zero. So I smaller than effects dot length, whatever, I plus plus, we will kind of go effects. I, and
[00:43:57]  we'll call it right. So now if we bring back our effect essentially, right, this way we don't have to call double ourselves a billion times. Hopefully
[00:44:21]  we go effect now double takes value, um, you know, we can see it. Well, actually there's a problem. Two runs once because by the time the,
[00:44:38]  but, but the reason it's running is because the effect doesn't run until I call this first setter. this is, we're back to double executing again,
[00:44:48]  even though like we were, we're memorizing our function. So technically we have to memoize our effect as well. Um, like basically every time I call set,
[00:44:59]  it just goes through and calls them all. And we don't want to necessarily call them unless something changed. So I'm going to like, this is really hacky as
[00:45:07]  hell, but I just want to show kind of conceptually what like react hooks are kind of doing. So we're effects push memo. Now we memo that function as
[00:45:17]  well. And let's just pass, um, double and value to here and then DV, DV, and we get the logs. Like we expect, they only log one
[00:45:34]  more time. So as long as we just keep on memoizing everything, our poll based system can be pretty efficient. But this, this is kind of like, you
[00:45:46]  can see the difference between the push base system. Cause the push base system had the ability to like, just like not even care. just like new via notification. What
[00:45:56]  effects need the run this one. You're going to go like, every time I set, I need to like go check, run the stuff, make run it, use
[00:46:03]  memoization to stay with myself from extra execution. Okay. Okay. People falling. Hmm. You're right. And I could have done that, but now it's
[00:46:18]  too late. See, not thinking. Oh, well, I am sorry. Run it back. I'm not running it back. Um, yeah, this is the
[00:46:41]  best part about our playground. We can literally take snapshots at each stage. I am well, I mean, let's, yeah, let's do this. Let's
[00:46:49]  snapshot this one. Okay. Right. So this is poll based. because I'm actually done with my, the demo I wanted to do. And then I'm going
[00:47:04]  to go all, hopefully all the way back. Undo everything I did. All the way back. I'm going to take another one of these. Push. Based
[00:47:44] . Thank you. All right. So what's the point of this whole, um, this whole lesson here? Because actual signals, as many of you know, um
[00:48:09] , are push-pull. They actually do both. They, the funny thing is solid is also push-pull, but it's actually more push than pull.
[00:48:20]  And newer systems are more pulled and push. And that's why, like, the reason I'm talking about this in terms of what signals 1.0, 2.
[00:48:28] 0 is a solid 1.0 or the new one's 1.5. It's, I, I want us to start thinking about the complexity that, and the,
[00:48:37]  the considerations that come into these trade-offs. I wrote an article, unsurprising to most of you, that I wrote an article, um, called Deriv
[00:48:47] ations and Reactivity. State is Function of State. Um, great article. Right? Yeah, they made it just for me, right? But, I,
[00:49:09]  I, this article is good for helping people understand the difference between push and pull and push-pull. But that's not completely why I'm here, because, again
[00:49:19] , again, again, I, I told you, we teach push. When I got to push-pull, I was just, like, hand-wavy
[00:49:25] , and then I'm, like, read Milo's article. I, I, I didn't actually get into it. And if you care to get into the details
[00:49:33]  of push-pull, you can watch my stream last year with Milo, where we talked about it for, like, an hour and a half or two hours.
[00:49:39]  I think it was an hour and a half in Milo. I also had the guys from Angular talking about their push-pull system for, like, two and a
[00:49:46]  half hours on stream. So, there's plenty of content to talk about different push-pull algorithms. I, I, I don't care about the way you
[00:49:54]  choose to do push-pull. I care about the implications of different decisions that you make. Not performance, not, like, which algorithm you use. I mean,
[00:50:03]  like, bigger questions. Like, eager versus lazy, um, you know, uh, scheduling, batching. And I, I need to talk about this because this
[00:50:18]  is, this is getting to where the, the signals, you know, proposal for TC39 is, is sitting, right? And you have to understand where the source
[00:50:30]  of a lot of this stuff was. In the example I showed a moment ago, I showed each system in two modes. I showed it the mode with effects, and I
[00:50:39]  showed it in the mode without effects. And it's important to see both because effects are largely the most disagreeable part of, of trying to standardize on what,
[00:50:55]  like, the meaning of signals are. Um, because it's where a lot of the complexity comes in. But, yeah, let's, let's just talk about
[00:51:08]  a world where we're all push-pull in the first place. You guys, you guys, the chat, call bags equals sandbags. Are you guys talking about
[00:51:19]  cycle.js in the, in the chat or something? Or, uh, under Stoltz's work? I'm just, you guys, yeah. Don't
[00:51:34]  forget to like the stream. Thank you, thank you, thank you, sir. With so many of you people here, it makes a huge difference. If you're on
[00:51:38]  YouTube, you can just hit the like. How many people on Twitch? We have about 78 on Twitch, which means 270 of you, roughly, are on YouTube right now
[00:51:47] . So, I want to see 270 likes. Call bags are actually purely push-based. Well, I mean, and this is the whole thing, right? The
[00:52:02]  push side of push-pull is purely push-based too, right? So, like, there's, there's interesting trade-offs, um, to this.
[00:52:13]  Because when you have a push-pull system, you are doing two waves. You are pushing and then you are pulling. The other ones, either, they do it
[00:52:19]  in generally one pass. They either just push or they pull, just pull. Um, pull has the benefit of like when you have crazy diamond problems. Like, this
[00:52:28]  one, this is one of my favorite examples of all time. Pull, at least, you know that you, you're kind of going to go all the way through,
[00:52:36]  right? Like, if you go E, what do you need? It'll go B. You know, like, generally pull-based systems will pull all the way through
[00:52:44] . Push, you don't know at E if, if D is changed. Like, you might go A, B, E and then, like, miss this change
[00:52:53]  and then C updates D and then run E again. Push-based systems have this kind of challenge. And I go into detail about, like, what that means in this
[00:53:02]  article. I don't, I don't completely want to get there right now. But, once you decide that you want to solve the consistency of an issue, like
[00:53:12]  pull does, and you want to, you know, not do everything. Like, the problem, both of them have shortcomings, right? Like, a push-based
[00:53:20]  system only does the work it needs to because it knows exactly what's changed. But, it doesn't know how it's going to be used. So, it's
[00:53:29]  idea of what it needs to is just, like, anything that could be changed due to this, go do it. Pull-based system goes, I only care about the
[00:53:36]  thing I'm looking at. So, it's good at localizing your changes, but it has no clue in that local scope if anything's changed. So, it,
[00:53:46]  like, has to do all the work that way. Push-pull lets you scope on both sides. It goes, okay, I know everything that could have possibly
[00:53:54]  changed, so I know I can disqualify a bunch of these other things to pull. But, on the other hand, I'm only going to pull what I care
[00:54:01]  about. So, if there's other changes out there, you know, they don't need to propagate. But, that whole premise is based off laziness. And,
[00:54:12]  for some people who don't know this, Casolid's reactivity system long predates, you know, it's been out there for a long time. Even though
[00:54:21] , technically, we are push-pull, I say solid is more push than pull in that it always propagates out the change. So, technically, it has all
[00:54:32]  the wastefulness of a push-based system. But, it doesn't have the cycle problem. Because, when it reads D, it actually pulls the value through.
[00:54:44]  So, it's, like, push than, it's, like, it's almost more like, it's a, it, I mean, they're all push than
[00:54:49]  pull. But, it's actually, like, push and then pull as you're pushing. It's, like, pull as you're pushing. It's the best
[00:54:55]  way I can explain solid today. Like, if it gets here, it goes A, then B, then gets to E. And, then, like, because it
[00:55:01]  does the two waves, like, it still notifies. And, then, when it runs, it has, it basically does all the work eagerly. Which,
[00:55:13]  in some ways, it seems wasteful. But, there are implications of that. See, on one hand, you could argue that, for most systems, the stuff that
[00:55:22]  you have on screen is the stuff you have on screen, so to speak. Right? Like, there's not that many computations that are sitting there that need to re
[00:55:36] -execute. That are expensive, that you're not benefiting from the re-execution. Because, you know, they can be dynamic, right?
[00:55:45]  Like, inside derived values and solid, you can change the dependencies on the fly. It's not like having a dependency array on the end. If there's a conditional,
[00:55:53]  then, while one condition's true, it's shortcutted that way. And, it's not depending on those other things on the other branch. So, like, who
[00:56:01]  cares if you run a couple extra computants that aren't being used initially? They're not, like, aren't being used in the view. Like, it comes
[00:56:10]  up fairly, not very often, except for when it does. However, there are some nice benefits to being lazy, right? Because, then, obviously, things that are
[00:56:23]  never used never need to impact anything. Right? So, I knew with Solid 2.0 that I wanted to go to lazy. But, that isn't big news
[00:56:33] . Because, literally, like, pre-act signals are lazy. I think view signals are lazy. Pretty much everybody else's signal implementation, other than Solid, are actually
[00:56:43]  lazy. They're all push-pull. But, Solid's actually the only remaining one that's eager. It doesn't make any difference in any benchmark or anything
[00:56:53]  you see. Because, literally, you only do the work you need to do. So, you know, you're not going to hit this problem. But, there
[00:57:00]  are benefits to being eager when we start talking, getting into other zones. Like, in the Solid 2.0 zone. So, that's why I'm bringing attention to
[00:57:12]  this right now. Because, I just want you to understand the difference between eager and lazy push-pull. Because, lazy will say, I'm not going to
[00:57:21]  run any of these until I get down to E. And, then, you know, I'll notify down. And, then, when I run E, that's when
[00:57:27]  I'm going to start doing the work. Where, an eager one will say, I'll notify it all. And, then, I still kind of actually push down,
[00:57:35]  push downwards. The reason that we were eager and pushed downwards is because of equality checks. This is something that's actually important to understand. What if you don't want
[00:57:49]  the data, like, what if, even though you changed A, C doesn't change. So, D doesn't change. So, you know, only this side matters
[00:58:00] . It's a lot easier to do equality checks on a push-based system. Like, pull-based, it's a little bit fun. Because, you actually have
[00:58:11]  to walk up things that, you know, may have not changed. So, like, there's a trade-off here. You know things could have changed, but
[00:58:21]  you're not guaranteed to know that E has changed. Whereas, in a push-based system, or even a push-pull-based system that's eager, or
[00:58:30]  more on the push side of things, you can actually, you know, not get down to E until you've made sure that everything else is run. The second
[00:58:42]  benefit for eager versus lazy is that, think about when things run. If you have a lazy system down here, and you're like, you have like a scheduling consideration,
[00:58:55]  like React, right? Like, in React, the effects run after render, right? If you don't hit something in the drive data until you're running the
[00:59:07]  effects, these run at effect time. There's no phases. There's no, like, pure stage. Like, in React, you do a pure render, where you
[00:59:17]  get a VDOM back, and then you do a real render, and then your effects run. You have a guarantee that every memoized value, computed value,
[00:59:26]  whatever in your stack, has run before render. And it happens at that timing. Whereas, in a lazy system, those things could run depending on where they're consumed.
[00:59:41]  So, like, there is a definite trade-off here. Yeah, yeah, yeah, they refer to it as a clock, right? And SJS was based
[00:59:56]  on it, was based on a clock, and that was where Saltwood originally was. And I actually have an old demo here in a code sandbox about it. The problem
[01:00:03]  is, it's challenging for me, is that I don't think developers expect that. The benefit of a clock is that you know that everything's committed at the same time
[01:00:18] . So, there's no way that any future change can impact, like, the current propagation. It's kind of like the way React leaves set state in the past
[01:00:27] . But, it's also, like, really, people struggle getting their head around it. Oh, sorry. Oh, you're talking about, oh, sorry, I
[01:00:43]  see what you're saying. Sorry, I was making a different point. Yeah. Well, I mean, that's an interesting question, right? No, it depends
[01:00:57] . Your effects should be the only form of actual tearing, right? So, as long as you schedule your effects. Push-pull always schedules effects, regardless, right
[01:01:08] ? That's a trade-off. But, I mean, it doesn't matter, because, like, if you have effect E, F, G, H,
[01:01:17]  all the way down the line here, and they read some of these same data things, they're always going to get the most updated date value, because you pull it,
[01:01:23]  essentially. So, it will only, the push-pull just saves the recalculation, but you're always pulling at the end. What push-p
[01:01:30] ull also does is it saves which of those things, you know, maybe only E and G end up on the list. But, because you're pulling in the end
[01:01:40] , tearing isn't particularly a problem. What's, I guess, an example of this would be something that someone might do in Solid right now. Have you ever used a
[01:01:50]  chat? You guys are in a chat right now on Twitch or YouTube. You know exactly what I'm talking about. You know how it keeps on scrolling, right?
[01:01:57]  Like, you type something and it scrolls with you, right? One way to implement that is to read the DOM pre-render, and then, you know, like
[01:02:09] , so, like, say the list changes or something. You know it before you render, read the DOM position there, and then, after it renders, see
[01:02:20]  the change and scroll it. Like, basically, it's usually a two-part system. Now, if you were using a memo or computed value or whatever to read it
[01:02:31] , and then use a factor effect to do the last stage here, in a lazy system, like, if it was pulling the value from the memo, it wouldn't
[01:02:45]  run it until after render. Do you see what I'm saying? Whereas, like, in Solid today, it's very easy to just do that and have a working system
[01:02:56] . Like, memo listens to on list change, gets the position before render, then after when you, when the effect runs and it's already done the render, grab
[01:03:07]  the value, you know, and do the change. But if you move it to being lazy, you're not actually running the computed part until after render. So, I
[01:03:17]  don't know, I'm just, you guys are all just trolling me in the chat. Yeah, okay, that's fine. Do you understand what I'm getting
[01:03:29]  at? Like, you remove the guarantee that all pure calculations happen before all effectful calculations. That, that, that, that is, like, something that a lazy
[01:03:43]  system has to take into consideration. It usually doesn't matter because you're guaranteed that any effectful calculation that depends on pure calculations, every pure calculation it needs will be
[01:03:55]  calculated before it runs. And so, like, you don't have to worry about, like, the values being wrong, you know, or that different effects see different
[01:04:06]  values. They will all see the same value. The problem is that you no longer have this sort of definite pure phase. And this can impact stuff like suspense and transitions
[01:04:20]  and concurrency. What am I bringing up? Well, okay, we'll get there in a minute. Let's, let's keep on going. I just wanted to
[01:04:29]  talk, you know, at this point about, you know, push-pulls, added complexity. We talked about scheduling and eager versus lazy. You know, batch
[01:04:40] ing is another concern. I wrote a whole article also about this, you know, back in the day. What was it? Consistency. Consistency in
[01:04:51]  UI frameworks. Let's, let's grab this one. I'm going to drop this in here. All right. Where I ran this very simple use state, use memo
[01:05:05] , and then, like, click. And then inside the click, we, we wrote what the count is, what the double count is, and what the text currently
[01:05:14]  in the node is. And if you remember, every framework had a different answer. React said 0, 0, 0, view said 1, 2, 0, S
[01:05:24] velte said 1, 0, 0, and solid said 1, 2, 2. I argued at the time that react was correct, if not in the past. It
[01:05:34] 's actually pretty, okay. And solid was correct, but it was, you know, in the present. But these two were inconsistent. And it's an interesting dilemma
[01:05:52]  to be in here, because you're at the edge of the reactive system here, because essentially you have derived state, and then you have update. And the thing is,
[01:06:06]  you can see why each framework ended up where it is. React was like, look, we pull when we pull. All this is some, like, pure part. So
[01:06:13]  at the, when React runs your code here, they've updated nothing. They're like, look, count has not updated. You call it set count, but we
[01:06:21]  don't update it. Double count, therefore, couldn't have run again. It doesn't update. So the text is not updated. Simple. Solid is on the other
[01:06:29]  side. The second you set the count, it went and did all the work. And then when you read it, it was like, okay, yeah, count, double
[01:06:36]  count, element, everyone's up to date, perfectly in sync. Svelte was a fun one, because Svelte looked at it, and they're like,
[01:06:45]  okay, well, in theirs, it was like count plus plus. So when they looked at it, Svelte was like, okay, so count is updated here
[01:06:53] , but double count hasn't run because it's still the closure of this, right? Like, how could double count have run on the very next line? So, and
[01:07:02]  obviously, we haven't updated the text yet, because at the time of you calling this function, you've only updated count. Vue was like, okay, yeah
[01:07:11] , we're a reactive system. So you set count, we've updated it. And double count, you know, we always give you the latest value. So when you
[01:07:18]  read double count, well, you get the latest value as well. But we haven't scheduled our rendering yet. Each system has a logical reason for ending up where they
[01:07:35]  ended up. The problem with sync, you know, solid solution goes like, clearly, that's the right answer, right? And a bunch of people excited about that
[01:07:43] , is that like, if you call set count, like 10 times here, like you do 10 times the work. Vue, React, and Svelte all
[01:07:51]  assume some sort of implicit batching, where you get the chance to do your work before it actually impacts the DOM. React goes like, we need to be consistent. So
[01:08:01] , you know, everything's in the past. Vue goes, look, we have a reactive system, we'll always give you the latest value, but scheduling, you
[01:08:08]  know, we'll schedule the expense of work. And Svelte is like, we will follow the rules of what it looks like if you're just following JavaScript.
[01:08:18]  But yeah, so like, it's like, and don't ask us to explain how double count works, we have a compiler. I think that's fair to say.
[01:08:30]  So, the thing is, obviously, if you do fine grained rendering, like Solid does too, where you update, like, in this case, you're updating one
[01:08:41]  text node, doing it a bunch of times is kind of like, who cares? Like, if you want to batch it, then batch it if you need to. But
[01:08:47]  the base case is not that bad. But I think this sort of thinking is still very important to kind of understand, like, the challenges and thinking that goes into batch
[01:09:02] ing, right? A lot of systems that have a lazy system, essentially, because you can always ask for the latest value, tend to both be lazy and auto batch
[01:09:16] ing on a micro task like view, basically, they almost all look like view. So, this is kind of like, so this is kind of where we are today
[01:09:27] , where most, you know, arguably, the signals 1.0 solution involves laziness and potentially auto batching. But this is a critical piece, which is why
[01:09:42]  nobody wants to touch effects with a 10-foot pole, in terms of trying to come up with a spec for this stuff. Because, like, who's to say view
[01:09:51]  is right, or solid is right, in this zone, is kind of been the position frameworks are taking. What if I never want the work done? I know that
[01:10:03]  sounds weird, but like, what if it's off screen? Like, what about suspense? What about any other kind of work which needs scheduling? Yes, React does
[01:10:21]  have Flush Sync, Svelte and View have Tick, Solid has Batch, so technically, every framework can do the opposite operation with the right syntax,
[01:10:32]  you just have to, it's what the default is, you have to call something else, right? So, but it is an interesting one, because this is one of
[01:10:44]  the debates, Solid was the only system that was set up to be purely sync, but most of the places people have been going to have been async, you're
[01:10:57]  right. It's very easy to just call Flush sync if you want it to update immediately, but I mean, there's an interesting consequence there. That means, at
[01:11:03]  that point, you're going to do all the work, which is, again, what Solid is doing, which seems fine, but like, there's a difference between,
[01:11:08]  a subtle difference between, say, Tick in Svelte or View, which you use an await, it makes an async function. There's a positive to that
[01:11:15] , it means that scheduling still happens when it happens, you don't actually force any work to happen earlier, and if other things would happen afterwards, they would still get
[01:11:24]  to apply. Async means that you are definitely waiting async, you lose the ability to interact with this thing synchronously, which can also have impact, you know
[01:11:40] , on events and, you know, like events are designed to work synchronously, you know, you could probably just do all the stuff above the await, but I'm
[01:11:48]  just, I'm just kind of pointing out that like, there are considerations and trade offs between the two different APIs. Yeah, I have to admit, I don't
[01:12:00]  know a single person who actually likes generators, like, it's like this mechanical thing that solves so many problems, can model so many things, but it's like, also
[01:12:17]  like, the ugliest, every time I look at it, it's like, yeah, I don't know. Async generators seem like hard mode, I don
[01:12:25] 't know, it's just like, in some ways they're so simple, because you're just like, oh, tick, tick, tick, tick, tick, you
[01:12:33]  know, so to speak, you can just pull yield, give up control flow, like, it's just funny though, like, have you, have you ever seen a
[01:12:41]  JavaScript framework that uses all generators, like the to-do MVC? Yes, these videos are always on YouTube, and it's streamed live on YouTube too,
[01:12:51]  I leave them up, all my stuff, we get some timestamps, so yeah, you can always come back, I know this stuff can be heavy and dense, I
[01:13:03]  try my best, I answer the questions, but it's all up there for, for longevity or whatever. Yeah, I've seen, I've seen the flow abstraction
[01:13:15] , I, I've always confused a little bit about this, and we'll talk about it when we get to async flows a bit, because, like, what tracks
[01:13:22] ? I almost, the only time someone ever convinced me that they, that we wanted a flow type abstraction was that they had a website where they could capture the Konami
[01:13:31]  code, you know, up, up, down, down, left, right, left, right, AB, start, you know, the, the classic, you know
[01:13:37] , Contra, get 30 lives, basically, you know, or old Ninja Turtles, like, basically all the old, like, Nintendo games had this code.
[01:13:46]  You could just enter in on the controller, and get, like, some bonus, and he, he convinced me that detecting something like the, the Konami code in the
[01:13:54]  code was actually tricky in a signals-based system. There's too much, like, state ephemerals, it's another, it's like using a state machine
[01:14:01] , it's like an argument, and in some ways I thought the flow was a lot cleaner of an approach than, say, using, like, X state or whatever,
[01:14:07]  for, if this was just your problem. But, outside of that, I, I've been having a real hard time there. Yeah, yeah, for, like
[01:14:16] , you like sync model for teachability mental model? Yeah, it, it, it, it makes things just so much easier. I was talking to Dax, uh
[01:14:29] , SST or whatever, and he, he was one of the biggest proponents of, like, our sync model, and he was just, like, it just,
[01:14:36]  it's, like, when people come in, and they expect stuff to work a certain way, it's so nice when it does, which almost never happens in React
[01:14:42] . So, like, it was, like, one of the fresh breaths, like, it makes you feel closer to the platform, it feels like you know what's going
[01:14:48]  on, you know? You know, for, like, even though it might, in theory, might not, like, be completely performant, if you just go,
[01:14:54]  set this state, and then it sets it, and then you can see it, you feel good about it. Like, the, don't, you gotta be careful taking
[01:15:01]  away the developer's ability to just console log everywhere. Like, this is a, this is a JavaScript developer thing, maybe, but, like, when you do something
[01:15:10] , you want to log, and you want to see that it did something. And this is, like, it was one of my criticisms of React for Git, actually,
[01:15:18]  because I was, like, how do I make sense of what executes anymore, right? Like, if, if we assume that, you know, function bodies are
[01:15:26]  basically pure, then you, like, console logging could poke a hole in the veil, so to speak. I don't know if that's true, we'll look at
[01:15:34]  the article later about React for Git on this week in JavaScript, but, yeah. So, anyway, I, I'm hoping you, you're feeling, you know
[01:15:48] , the tension. Yeah, see, maybe if you have a good enough abstract and good enough dev tools. Um, I know the Nuxt dev tools are great, I
[01:15:57]  have not played with the Vue dev tools. I haven't even installed the solid dev tools other than, I think, not on this machine, at least, I
[01:16:05]  did look at them in one, because it's really cool, there's, like, a visualization of, like, when you, you could, like, basically see when
[01:16:11]  you update one piece of state in, like, one place, you could, like, go, oh, and it updates this node over here. It's basically, like
[01:16:18] , a perfect visualization of your data flow through your application, it was really cool. Anyways, um, I know Vue has, and the Vue community has amazing dev
[01:16:26]  tools, it's a place I'd love to get, uh, get, you know, polished, so to speak. Yeah, well, yeah, when a div
[01:16:33]  is a div, thanks, this is exactly what I'm talking about, you know, you can go, you, in solid, you can literally go, like, div
[01:16:42] .jsx and see that it's a div. These are interesting things, because they sometimes make your life a little bit harder, but then on the other hand, they
[01:16:50]  make you feel like you're right there. I mean, Svelte is actually really good on that kind of level of, of abstraction, where, um, it
[01:16:58] 's not quite as flexible, like, being able to pass divs around, like, the way we do, but, like, on the other hand, they, they
[01:17:05]  make you kind of feel like you're just in JavaScript land. Even, like, in this example, um, it's sometimes not what you're actually looking for class
[01:17:14] ically, which is why I think they went to Svelte 5. Like, people go, like, that's sweet that it works like JavaScript, but I actually don
[01:17:20] 't want it to work like JavaScript, I actually want to do more here. But, like, I think those little wins, those little feelings of being connected, are
[01:17:30] , have always been what made Svelte always feel so good to use. No. Okay, sorry, I should give that an actual, an actual thing. Prox
[01:17:42] ies are a mechanism. Proxies are, like, a function call. Uh, I, you know, like, so, like, and you go, okay,
[01:17:49]  well, a proxy with an event emitter. No, no, um, signals are a DAG. They are a directed acyclic graph. It's
[01:17:58]  not about the individual tracking mechanism. It is about the data propagation. It's about the guarantees. There we go. Another shout out to the Vue folks. There you
[01:18:16]  go. Thanks, Theo. Yeah, no, it's, it's, it's, it's pretty good. I, I need to up my tech at some
[01:18:24]  point. Um, I keep on mentioning it. Um, and we're like, oh, yeah, we'll get to it one day. Yeah. So. Oh,
[01:18:37]  thank you. So, yeah. So, getting, getting, getting back to, to our, over, our, our, our arcing thing here. That's
[01:18:55]  kind of like signals today. You go look at Preact signals. You go, you look at View signals. You go look at, um, uh, quick signals.
[01:19:10]  Whoever else signals, Angular signals, probably. Yeah. I imagine it's the same thing. But. Solid already is doing more than that. And that's what View
[01:19:21]  Vapor looks to aim to do. And what Svelte does. And it's not just on the rendering side. We introduce a whole other graph. Everyone knows about
[01:19:30]  the dependency graph, right? We teach push, pull. We talk about data dependencies, but we secretly, or not so secretly, have a second graph. And you
[01:19:41]  see this in Solid's DevTools. Um, sorry, not to get hijacked too far over, but synthetic events were for fairly good reason. They want to
[01:19:58]  do event delegation, which automatically does significant performance improvement. But it's also because back, you got to, when React came out, the web was way better than it was
[01:20:07]  in the jQuery days. But we still needed to patch native behavior. I'm sure if you talked to them, if they could change things, they would get rid of
[01:20:15]  on change. Or like do something, sort of shoot something like a bit different. But in general, they, like, they. They needed to solve a gap in
[01:20:29]  the, in where browsers were at and how different events were handled. Um, it looks really nasty now, you know, in hindsight. It's one of my, like
[01:20:39] , on, the way on change works in React just drives me nuts. Like, developers come into Solid, Preact, any other framework is like, on change. And
[01:20:46]  it's like, no, that is not what the browser on change does. But, like, I can't fault them for trying to polyfill it. If you
[01:20:56]  go back, Knockout had a change, like, base that worked like, like, no, Knockout's change actually worked like normal change. They actually had, like
[01:21:03] , a second mode, like, value change, which worked like React's change. But, like, my point is, like, there was a good reason to have to
[01:21:10] , like, polyfill this early days. And then they were stuck with it and couldn't change it. Anyway. Anyway. We were, we, we, we
[01:21:30] , I, this is my fear. This is my challenge. So, when I talk about ownership, um, the coolest thing about Solid is you never actually, you almost
[01:21:38]  never actually see the ownership graph. Um, we hide it under the render function. But there's this idea of roots, right? And now, I, I,
[01:21:50]  I, I can't use our simple code anymore to do this. But if you've ever seen something, uh, in Solid, you can basically, like, like,
[01:22:00]  let me go cons. I'll just do, let's just do create effect. It's the easiest thing to do. If I go and create effect, and you
[01:22:11] , everyone in, in, in, uh, React is used to returning a cleanup function. But what I, I'm just going to say on cleanup console dot log.
[01:22:20]  Hi, or something like that. Let's create effect. But if I, if I go, like, let's listen to count here. Whatever. It doesn't matter
[01:22:34] . Um, oh, I need on cleanup as well. On cleanup. It's not too surprising, people, that we're going to see high. Like, initially
[01:22:43] , none, because it doesn't release. But every time we rerun it, we're going to see high, right? It's the same rules with create effect.
[01:22:47]  Whenever it runs, we run on cleanup. But the thing you have to understand is, this on cleanup is not specific to an effect. I could put it in create
[01:22:56]  memo. I could put it in the component body here. It's specific to the reactive context. And it's funny. I've been talking to framework authors a lot
[01:23:09] , uh, you know, over time. Uh, people like Fabio from Vobi, Alexis, uh, um, obviously works on solid stuff and million stuff,
[01:23:17]  but he's, he also had his, his own framework compute state and like, you know, there's sinuous and there's a whole bunch of these reactive based frameworks
[01:23:24] . Now they all kind of take the ownership model for granted, but it was never present until SJS, uh, and surplus. Um, but it's become kind of
[01:23:32]  the norm, but it's not in all the VDOM implementations. You won't find it in quick or in preact. So this ownership model is the
[01:23:42]  idea that if you put an effect in an effect, you, you can basically register this effect with the parent effect. So when the outer effect runs, I mean,
[01:24:05]  we, we can just do this for, for fun. Let's just, let's make two signals and two buttons. Let's just double everything up. We're going
[01:24:13]  to, we're going to put count two here and we're just going to, we're just going to double, we're just doubling it up. Count two, set
[01:24:24]  count two, set count two, count two, increment two. Okay. Okay. Okay. Sweet. All right. I should change the message. I should be inner
[01:24:39]  outer. Right. So as I do the inner one, you're going to see inner clean up every time it runs. if I do click the outer one, what
[01:24:53]  you're going to see is outer run, inner run once and outer run once the inner, outer, inner, outer, inner, outer. So basically like the cleanup
[01:25:10]  function, create effect automatically has a cleanup function registered in it. And it makes sense because if you didn't do this and old reactive systems don't, and I don't
[01:25:21]  even old, even modern ones don't, they return a dispose method. You'd be sitting there managing the disposal manually of when this effect stops. But by the very
[01:25:30]  nature of what we do here, we don't lose memory this way. If the outer effect reruns or is disposed of, then the inner effect is also disposed
[01:25:39]  of. You don't need it anymore. And you can think about it. If the outer effect reruns, you don't want to create a new effect every time and
[01:25:45]  not dispose it. It'd be a memory leak. So the base, there's ways to work around it. We have like run with owner and this whole stuff,
[01:25:54]  but the base model here in solid and renders that copy or mimic solid, fine-grained rendering stuff like Svelte 5 or ViewVapor is this idea of
[01:26:06]  being able to have kind of like a disposal unit based on being able to like nest these things. Cause that's basically how we do our fine-grained rendering. Yeah
[01:26:18] . Yeah, kind of. Yeah. Like that's how our renderer, how do you think we get like such fine-grained rendering work working? It's
[01:26:26] , it's not just effects. It can be memos too, but like think about show like a, like conditional statements and stuff. And inside them, they create dom
[01:26:35]  nodes that also have effects in them that render certain elements and stuff. Like this is the secret to fine-grained rendering, the decision points where you choose to listen to
[01:26:47]  is where it marks essentially. So if only count two updates, then you don't count one can stay the same. If count two updates, then it's possible that
[01:26:55]  there's a decision. Like if count is bigger than five, like we can do stuff like this, right? We can go, we can go, uh, what if
[01:27:03]  we said like, if count is bigger than five, then create the effect and register. Yeah. Let's do that. Right. Now, the interesting thing is this
[01:27:21]  inner effect doesn't exist at this point. But when I bring this one up, see outer, outer, outer, outer, outer, outer, outer, outer. Oh
[01:27:28] , inner, inner, outer, inner, outer, inner, outer. Essentially, we can bisect our whole app by using a whole React graph. This is what
[01:27:41]  I say when I say reactivity is all we need from a solid standpoint. It's that we have this automatic ownership model. This is what SJS and Surplus gave
[01:27:53]  us. This model that is smart enough to be able to handle hierarchies, right? Not every reactive framework has this. That's why I'm calling this React Sign
[01:28:06] als 1.5 in a sense, because this is the piece that enables fine-grained rendering. It can. The challenge is it does. What's interesting here is
[01:28:27]  that why do you make a new effect here? Why do you nest an effect? What is the... What is, like, because actually, with this count here,
[01:28:34]  we don't need this count here, right, anywhere. It's generally this. It's because there's a decision to be made, right? So it's not because
[01:28:44]  there's a component boundary. We don't care about component boundaries. We might as well just be functionally called. It's because there's a decision point. If there
[01:28:51]  is no decision, if your HTML shape is completely static, then there's no need to nest the reactivity, because everything would be present at the beginning that's present
[01:29:02]  at the end. And that's simple fine-grained stuff, like Preact Signals updating a text node in the React implementation or whatever. But if we're
[01:29:11]  talking about conditionals and for loops and structural stuff, then there is this desire to have these contexts. It's not component-based. It's not based on what
[01:29:23]  the end-user authors, like, directly, like, how they want to break up their code. It's based on the actual decision points in your actual app, right
[01:29:30] ? We don't need a compiler to analyze them. You do write them, the end-user. You go, yeah, there's a condition here or there's
[01:29:37]  a loop here. But that's the context. We don't need a new context per every component. You can break into a billion components. We need a context per structural
[01:29:47]  decision point in your app. Right? So, in a sense, it's not a particular view or a particular component, but it definitely mirrors that. It's just
[01:30:03]  the, it's kind of like the largest scope of decision. Yeah, yeah. It creates multiple because, yeah. The thing is, we were able to hide the
[01:30:27]  main root. It's in here. It's in, it's in render. One of the funniest things that people don't always realize about Solid, I'm going to
[01:30:34]  break this for two seconds just to show you what I'm talking about. But if I go like this and I make these into capital button, okay? Now, there is
[01:30:42]  no capital button, but if I look at the output code, you're going to notice something kind of funny here. So, there is no, other than this render
[01:30:51]  call here, which is called document create elements. So, if we made this into create root, essentially, there's no DOM APIs anywhere to be found here. None of
[01:31:02]  this is DOM. The only thing that, like here, this create component call just calls your button component, which I haven't implemented. But my point is, we
[01:31:15] 've, when people kind of misinterpret us as being tied to the DOM, not really. Like, the lowercase JSX becomes DOM elements because it's convenient. But
[01:31:25]  generally speaking, the rest of this is a tree, essentially. It's not a virtual DOM tree. It's not based on your view size so much. I mean
[01:31:34] , I guess this is based on the size of the number of components you have. But, like, if I go back now and do this, you'll see that we
[01:31:43] 've hoisted the templates out, so to speak. Like, so that the actual size is, it's based on the intersection points, like adding click handler and inserting
[01:31:54]  children dynamically, adding click handler. Like, it's, it is a tree. It's just not a virtual DOM. And it's not done even, like,
[01:32:09]  there's three types of rendering in web frameworks, generally speaking. There's this, fine-grained, which just updates as much as it can based on the react
[01:32:19] ivity. Like, it tries to get as small as possible based on tracking. There's single-pass diffing or dirty checking, popularized by Angular, used by
[01:32:28]  Lit, used by most, you know, lightweight frameworks, Svelte, B4, version 5. And then there's VDOM, which is churn out
[01:32:38]  the two-pass, generate the stuff in a virtual way, and then diff it on the second pass to update the actual DOM. But both of the, both the
[01:32:47]  latter two ways I just mentioned involve doing this kind of dipping pass based on some kind of unit, like a component, or some kind of thing that's defined, you know
[01:32:59] , by the way you break up your code. Whereas the reactive approach here is based on control, based on data flow. So, like, the breakpoints are based on
[01:33:07]  the conditions of rendering or whatever. It's not based on components. Anyway. But, yeah, the main root is hidden in here. If you look at render function
[01:33:18] , if I go to solid.js code, you'll just see that it basically just, it wraps crate root insert into document, whatever you pass here. But it's
[01:33:28]  basically just a crate root call. Yes. Yes, yes, yes, yes, yes, yes. Let me see if, I think it's at the end of
[01:33:43]  this article. It's an older one. Yeah, here. Interesting how solid takes this and makes full rendering library at it? Check out solid.js reactivity to rendering
[01:33:51] . I wrote this article a long time ago. Hopefully, the Angular people at InDepth have not taken it down. This is an Angular. These guys, it
[01:33:59] 's funny, the Angular community was very helpful early days because I'd write, like, these huge, like, 20-minute read articles, and they would post them.
[01:34:07]  This one isn't in my medium, isn't in my dev too. I explain how to build a solid-like renderer from scratch. Yeah, it's
[01:34:23]  a tree of extractives. These practically tend to align with extracted templates. Well, right, because you can only merge a template as far as there's a decision point,
[01:34:31]  right? Because otherwise, it would be static. Like, if you could go through and extract all, like, if there was no decision points, your template would just be
[01:34:38]  one large blob. So, yeah. Yeah, yeah, I guess that's fair to say. That's said quite elegantly. Yes. Yeah, and that's
[01:34:57]  what I'm saying. We already have native solutions. Not React Native. But we have universal renders. We have solid 3.js. We have solid ink and
[01:35:11]  PDF and all of those things. You don't need a virtual DOM to do that stuff. This is part of why we had to go so long to get back to the
[01:35:20]  fundamentals. In the process, we built everything. Everything you can do in React, with the exception. Well, I'm not going to say with the exception. Because
[01:35:31] , like, we prototyped it. But we didn't release it. Everything you can do in React, you can do in Solid. I was talking about RSCs
[01:35:41] . We never released our server component solution. But, like, you can do everything you can do with a... My whole premise, theory, behind thing is everything that
[01:35:53]  can be done with a diff can be done without a diff more efficiently. That's, like, the guiding principle here. That, I mean, whether that developer experience is
[01:36:04] , you know, aligns with your expectation is another question. But, you know, and there's a few hard problems we haven't solved. Like, state preservation
[01:36:17]  in HMR. It's actually kind of trickier with fine-grained systems. But it is my belief that anything that can be solved with a diff can be solved
[01:36:30]  more often without a diff. Yeah, we have a solid... Yeah, is it Solid Inc.? We have the CLI, like, for it. It's the
[01:36:46]  funniest thing about this, too. And people don't realize this. It's been a few years. And part of it is because Nikhil Sarif is, you know
[01:36:51] , like, the man, so to speak. Like, he can just prototype and hack out stuff, like, at a rate no one can match. The first week he
[01:37:01]  joined Solid, like, he used Solid, he made three libraries. He didn't maintain them. It's way easier to make a library than maintain them. But he
[01:37:09]  made a Solid CLI, Solid PDF renderer, and Solid 3.5 report. He just went in and, like, hadn't used it before. And he just
[01:37:17]  was like, here, you know, you guys have a community thing. And we're like, come demo it. So, like, it's definitely doable. A
[01:37:26]  lot of people assume, because of the rhetoric that surrounded React when it first came out, that you can't do these things without virtual DOMs. Right? And it's
[01:37:34]  simply just not true. What are you using for CLI terminal rendering? Anyway. Uh, did I share this article? I put it up on the screen.
[01:38:12]  Yeah, I shared it. Good. Okay. I, I, I, we're not going to get too much into it today, but I actually kind of prototyped
[01:38:18] , like, how, like, even a fork component, talk about reactive routes. I've never given this topic a good enough, uh, refresher, I have
[01:38:26]  to admit. But, I mean, that's the problem, or that's, that's the thing. That's where we are today, right? We're at a
[01:38:32]  situation now where, when we talk about it, I think the ownership graph is really powerful. We talked about disposal, right? And cleanup, right? Nested things.
[01:38:42]  But it's also how solid's context API works. Um, you know, when you use, use context and provide context, we're actually, we didn't invent
[01:38:52]  another thing. We already know this, right? So if you set some context and make a, a, a node here, we just walk up the reactivity graph
[01:39:02]  because, um, we can't use other methods. We don't have artifacts like a VDOM. It actually took me a while. This is one of the things
[01:39:10]  that I think solid did first out of like SJS didn't have this. One of the, one of the, one of the changes we made was I was trying to
[01:39:16]  figure out how to do context. And it was actually tricky because you don't want to rely on the realized DOM tree. That's one way of doing it. That
[01:39:24] 's how like the web component context spec works. That's how I've done it with solid, uh, components. That's how I do it with islands, but you
[01:39:31]  you're creating stuff here before it's even inserted in the DOM. So the timing's wrong. You want context to be available synchronously at render time, but you also
[01:39:42]  haven't like no VDOM nodes or like, what, what are you tracing? Like the functions are just functions. There's no output. Like what are you walking
[01:39:49]  up? And I realized that the same nesting of the reactivity graph essentially could be the, could use context. So you don't need, even though our APIs
[01:39:59]  are all DOM based, there's a reason you want the context provider. You don't want it to like compete with each other. You want it to be like, there
[01:40:07] 's a reason. Like I think Dan had a, uh, an article about this a while ago, Dan Abramoff. And he was like, why is it
[01:40:14]  not use provider? Why do we make you use a component for it? Right. These kinds of fundamental decisions are important because if you make someone use a component, they
[01:40:24]  have to wrap it. Right. There's no way, like no misunderstanding. There's only one provider of this type here. Like if you had it use provider, someone
[01:40:34]  in a different sibling could just be like use provider, use provider. And you can all override each other or like mess with it. This API forces it, I've
[01:40:42]  always loved react attention to detail than that. They just don't just follow a pattern because of the pattern exists. And, but technically speaking for us, even though we're
[01:40:53]  doing JSX, it is actually a reactivity feature, um, from the ownership graph. What are we paying not to be done to a financial piece of trade?
[01:41:09]  Well, I mean, classically, um, it was memory, but then the VDOM also creates a lot of temporary artifacts. Um, reactivity, the memory
[01:41:21]  overhead used to be considerable consideration. Um, there, there's like, if something over executes here, we're creating real DOM elements. Like reacts worst case is
[01:41:40]  better than our worst case, but sometimes our worst case is so much worse that people notice it sooner. Like if you're doing something really dumb, like you'll notice it
[01:41:51]  immediately where react will just slowly and slowly and slowly and slowly kind of creep out of your control. Um, you can lose reactivity. We've seen this. I
[01:42:00]  think this is the thing, you know, where people like, aren't using this model, like they're not thinking the right way. They can lose reactivity. React
[01:42:07] , react always just does all the work anyway. So same sort of optimizations don't make sense for them. So it's like, like these, these are things
[01:42:20]  like for me and a while it's all users, like the trade-offs are like not even close, but like I can, there are definitely like, there are differences
[01:42:30] . I think the question is solid in this router because he couldn't make it perform. Like reacts model and solids model were opposite to the point that if you try
[01:43:07]  and force. Yeah. I mean, this is actually a prime example of your previous question, because the problem was most of the time when I get a react library and we
[01:43:17]  read the solid, we have to do this diffing and we have a data diffing thing called reconcile in our stores and it works fine, but it always pains me a
[01:43:23]  little bit. Like obviously if you're setting something across a wire, you don't have any referential things. Like async stuff, you're generally going to diff
[01:43:31] , but it always bugged me that anything that was like deeply in the client, why are you diffing when you don't need to? And it, it,
[01:43:39]  it occurred to me, uh, like it would be really cool if we actually had fine grain updates in the router. But the challenge for Tanner was that we did that,
[01:43:48]  we implemented and it worked lovely and solid and it, and it was fine. But on the react side, they had no way to interact with that. Like, so
[01:43:56]  I guess maybe there's an interoperability story. Um, right. Like if, if, if you, you need to be using signals of fully leveraged signals signals
[01:44:06] , like reverse it. Like they only execute as much as needed. Whereas an immutable data structures do the change at the root and they clone all the way up.
[01:44:16]  So, you know, at the root, you can, you can very easily in a immutable setup, like react, be like run this, if this changes. So
[01:44:26]  you check, you do memo, you, you, you rerun the code anyways, but then you get there and you go, okay, do I do the work?
[01:44:31]  And you go, has this changed or anything below it? A reactive system doesn't do that. A reactive system goes, I will change when, at the point that
[01:44:40]  I change at. So you can't easily be like, oh, tell me if something, this or everything below it changed. That's like, it's anti the pattern
[01:44:48] . You don't want to run when the stuff below it changes, it will handle itself. But when you're trying to interface with react, which doesn't understand that,
[01:44:55]  like you have to make the use thing. And that has to be your point of change where, uh, like a deep fine grain system won't actually notify because it
[01:45:04]  will go, oh, actually only this one field changed way down here. React somehow has to now listen to all the potential fields, um, you know, below that point
[01:45:12]  of change, whereas a reactive system would be like just more optimal and just be like, okay, change done. So it's like, it didn't sit quite right
[01:45:23]  trying to do both. And then you were forced to do like, it wasn't just detecting the change. You'd have to also propagate in a way that react understood.
[01:45:29]  So even if we realize it changed, then you'd have to like give it an immutable data structure. So like every other part of the react, uh, rendering could
[01:45:37]  diff because the next thing might be like, oh, has this changed? Cause that's what react does. Like as it renders, it goes, has this changed
[01:45:43] , has this changed, has this changed? It just keeps asking that same question over and over and over and over and over again. So we're like trying to force a
[01:45:51]  system. That's just like, I know exactly what happens. Just update it into a system. That's like asking that diff question. Have I changed, have I changed
[01:45:59]  is, was not performed enough for react. Like we were hoping that like react would just make do, you know, people using reactor used to not, um, having perform
[01:46:08] ant things, but it was a little bit too much. It's a, it's a, it's a, it's a dirty checking. It's a single
[01:46:29]  pass diff basically. As I said, you can basically put everything into three categories, right? Um, I perform, I'm on the fine grain side incremental, uh
[01:46:40] , dom is a single pass V dom or dirty checking. And then other V doms are to pass. I mean, to be fair, like I didn't say
[01:46:59]  it originally, I'm going to, I'm going to attribute that to the other person working on the tan stack router solution at the time with me. Who's usually a
[01:47:11]  lot more vocal about that kind of stuff. Losing reactivity. Sure. Two seconds. I mean, I can show you losing reactivity right now. What if
[01:47:23]  instead of going count five here, I go count five and I go, or let's go number five. And then I go const number equals count. Now I've just
[01:47:41]  completely killed this. So you won't see any effects run because this never updates because you referenced the signal outside of the effect. The component doesn't rerun. It
[01:47:54] 's not a tracking context. So that's how you lose reactivity. If you access the value in a place, it's not listening. Yeah, anyway, let
[01:48:12] 's keep on going. So ownership model, disposal, context, error boundaries, right? Because again, these are kind of view based concerns. What ownership, like, uh
[01:48:28] , what, what Daniel was getting out earlier, like ownership considerations are kind of view based considerations or hierarchical. Like you care about error boundaries because they are a section of
[01:48:40]  your app. Right. Because like you want to go, okay, something aired down here. I can't show it consistently. I'm going to just bail out and
[01:48:49]  show something else and tell people they need to try again. But again, we can use the reactive system nesting as a way of, of setting owner boundaries. Uh,
[01:48:58]  sorry, like error bounds because error bounds, what are they? But like another way of doing a conditional, they're an if statement, right? They're another way of
[01:49:05]  saying like, show this or show this. What's another one? Um, suspense, show this or show this. All of these mechanisms were built off the reactive context
[01:49:14]  instead of the component context, which is why in solid, there's that tweet. I think I showed the other week. Um, let's see if I got on my
[01:49:24]  bookmark still. Um, where to, to, to, to, to, to, to, to, to, to, I'm not going to find it
[01:49:37]  right now. Oh yeah. Yeah. Where someone showed this. Yeah. Example. And let me get a big screen for you where the first thing that everyone, you
[01:49:48]  know, some people notice is like, why do you need a separate component for suspense and react? Right. Why, like why does the suspense out here and why is
[01:49:54]  the status component over here? Like, yeah, this is really nice using use, but why isn't this all in one component? Well, the reason is because react works
[01:50:02]  at a component basis. So because we work at a control boundary basis and solid, you could literally just take this code and stick it up. You know, like put the
[01:50:11]  anchor tag in the suspense boundary, put the, the, our, you know, use resource or whatever above. And the suspense can be nested because it happens at
[01:50:18]  the control flow level. We don't need the separate components to do things like suspense or error boundaries. It's just, just another component. Right. So this is
[01:50:37]  why ownership is powerful, um, so to speak, right? There, there's so many use cases where we needed a construct, you could say, and where react has
[01:50:51]  its components, we could just leverage the already existing nesting of, of reactivity. So in another way, while this ownership graph is another graph, it means that
[01:51:05]  when I create this effect here, right? This effect keeps track of all the effects that are created under it and releases them when it reruns the same way it releases dependencies
[01:51:14] . It, it does have this incredible power of being able to simulate all the hierarchical stuff without adding another structure. We didn't, we don't need to add
[01:51:25]  another representation. We don't need to take up more memory for another representation of, of this data. We, it's all the same thing. As you can start seeing
[01:51:33] , these are just little bits of improvement that actually take care of that overhead and remove the classic trade-offs of using this approach. Because signals again, isn't, I
[01:51:44] 've said this a billion times. It's not like you add signals and suddenly you think it's faster. It's that you are able to remove something else that was
[01:51:52]  making your system slower. Signals, adding anything to a system, adding signal system will make it slower. You know, like look at the pre-act benchmarks, adding
[01:52:00]  signals to pre-act makes, makes, make it slower. But it's what you can get rid of once you embrace the approach, which is why, as I
[01:52:12]  said, I call this maybe signals 1.5. Yes, ownership is a treat. You're, you're absolutely right. It's, it's not even a
[01:52:23] , really a, a graph or anything. There's only a single owner kind of consideration. There's places where we hop, like a for loop. You don't want
[01:52:33]  to, every time you do a for loop, you don't want to release all the elements above. So we actually hoist the ownership a level above. So the
[01:52:41]  creator of the for actually owns it and we independently release individual elements, but it's still, you only have a single owner. So yes, it is definitely just a straight
[01:52:51]  tree. Control boundary is any decision point in your app. Like if this, if this was your app here, your whole app, essentially, there's no decision point except
[01:53:03]  arguably where you insert this text. But if this piece was, and I'm going to use react syntax to make react developers more familiar. If this was like count is
[01:53:18]  bigger than five or something, then I'm just going to end it, whatever. Now there's a decision point because now there's a control flow. Like now this may
[01:53:33]  show or may not. And right now it's just a button, but it could also be a whole section. Of your app and inside that app, there could be
[01:53:40]  more decision points, but it doesn't matter how many components there are. It matters how many decision points there are. And you can see it. You wrote the decision point
[01:53:47]  right here. You go like a count equals five. It's not hard to picture what the output of this compiled is. It's a little bit optimized because we do a
[01:53:52]  bunch of memoized stuff, but you can actually see that it's actually. Wrapping a memo around this count bigger than five, and then it inserts your expression
[01:54:05]  like. This, this is where the, like the decision point happens. That, and that's what I mean by control boundaries. So like you could put a suspense thing
[01:54:16]  here. It doesn't matter. Components don't matter. Anyway, let's keep going because we're at almost two hours here and we're, we're only
[01:54:34]  at signals 1.5. So we've done, we've been able to do a whole lot with, with, even with our eager approach to building up, uh,
[01:54:51]  incredible patterns here. Right. We can handle, you know, suspense, concurrent rendering, um, transitions on top of this pattern. But there's, there's like
[01:55:10]  rough edges, so to speak, that I feel like could be improved. There's places where, you know, eager evaluation isn't great. Like resumability,
[01:55:23]  you don't want eager evaluation for resumability. You only want to run the code when you need it. Right. So like all of this stuff is can, because
[01:55:34]  we were dealing with primitives can obviously just keep on getting built on top of itself. But there's a real question of like, taking what we've learned and trying
[01:55:45]  to apply that in a way that just streamlines this a lot. Signals are observable. Ah, me and Ben Lesh have had like long conversations or signals
[01:56:11]  are behavior subjects or something, but that doesn't carry the graph implications of this. Like signals mean more than just the event emitter. They mean the actual graph that
[01:56:27]  comes with it. Yeah. From my experience using proxies quite slow. Is it notes when the Consolid uses proxy projects that I know is a solution for it
[01:56:36] ? We actually try to avoid proxies as much as possible. Um, our stores use proxies, but our props are actually, um, getters, um
[01:56:45] , rather than proxies, unless you use dynamic shapes like spreads. We have to make sure that that spreads work, obviously, I'm just, okay, okay
[01:56:56] , but like, uh, uh, we actually use getters in most cases. And by that, I mean, like, it's like object get, like, I
[01:57:05]  guess I could, let me just, just again, for sake of fun, we'll just do this. And then I need to make this something that would possibly be
[01:57:13] , yeah, I'm just gonna call it like that. If I look here, what you're going to see is get on click returning thing or yeah, get children return
[01:57:23]  count. Like we, we generally use getters instead of proxies, but yeah, you can see the difference. It's actually JS framework benchmark, the,
[01:57:36]  the proxy version of solid is actually in one in here and it is slower. Um, cause like solids here, right? 1.08. And then the proxy version
[01:57:52]  is right here at 1.14. So that that's like 0.06 slower on the chart. Um, which makes the proxy version almost as slow as lit. Um
[01:58:05] , and getting towards, uh, sorry, I got to scroll a bit. Um, um, God, um, trying to scroll till I see something I'm familiar with
[01:58:18] . Yeah, um, view and, uh, some, I guess, optimal no zone angular. Basically, I, I wouldn't be too worried about proxies
[01:58:33]  here. Um, okay. There's angular signals here. So sometimes like the, the overhead of, of like proxies compared to the overhead of the rendering is
[01:58:48]  probably not going to kill you. Okay. Is that example done with proxies? Svelte 5 uses proxies for deep reactivity, but if I
[01:59:13] 'd be interested, I'd be interested to know if it, if it was my, my, my guess is the benchmark hasn't been updated. Yeah. That's
[01:59:31] , that's, that's my guess. We'll see. When Svelte 5 comes up, I suspect that the switch to proxies will slow it down considerably
[01:59:39] . Not much, like 0.05. Right. And they create proxies lazily. Yeah, yeah, yeah. I mean, that's, that could also
[01:59:51]  be the situation. Yeah. I, there's no proxies are enough of an overhead that I'm pretty confident that you'll see a bit. Could there be
[02:00:00] , well, then it can't be dynamic. Like if you knew the shape would never change with view knows all about this. Cause they used to have this thing where you
[02:00:09] 'd actually call a special API to add properties. No one wants to go there again. Right. Like if you know, the shape won't change, it's fine
[02:00:20] . But like, if you're talking about deeply nested stuff. Yeah. Like in checks. Yeah. Yeah. And, and we actually pretty smart in our heur
[02:00:35] istics. Like we even can tell in certain types of spreads where we don't actually need to be dynamic. Like we actually do a lot of checks. Like if we
[02:00:44]  can tell that all the sources aren't proxies either, then we know that we don't need to have proxies. Cause then we know the shape doesn't
[02:00:51]  change. So we, this was something I did for mobile. There's a bunch of people who are using low end devices and they're like, is it possible you solid
[02:00:58]  up proxies? And I was like, not today. Cause in certain cases, and, but basically I may, I figured out a way that with the exception of
[02:01:05]  them calling, passing function calls to spreads. If they don't create any proxies themselves, solid won't create any additional proxies. So it is possible
[02:01:16] . Yeah. We, we really look like, yeah, it's a level of performance optimization we look at. Anyway. All right. All right. All right. Sorry
[02:01:27] . So when I talk about signals 2.0, what am I talking about? Well, I'm going to actually talk. There's a few, there's a
[02:01:36]  few sources here, um, that I think are, are worth looking at. I'm just to see if I can look at my notes. There should be, yeah,
[02:01:45]  there's pages of them here. There's actually a solid 2.0 thing, but that's not what I'm looking for. Um, I actually might've not
[02:01:56]  written this out as nicely as I'd want. Um, I'm just double checking really quickly. Do I have a feature of reactivity design doc? Yeah. Um
[02:02:11] , yeah, this document I've shared and talked about before on stream. Um, but it's worth refreshing on. Um, this was, this was just like me roughly
[02:02:23]  talking about stuff. Yeah. Yeah. I was working on what the next JS framework benchmark should look like. I'd been working with Misko a bit a while ago and
[02:02:35]  he came up with an example, but I mean, that's a whole other topic. I, I, I, but yeah, I have an idea of what benchmark
[02:02:41]  I want to see. So high level, high level, there's two topics that I think are, that I think are rough, that I think need to be improved,
[02:02:59]  um, moving into what I call signals 2.0 and these are fundamental enough that they have to be approached at the core level. Um, I'm already assuming that
[02:03:10]  there's an ownership model, right? Cause that's how we got to where we are. As I said, um, it's like, you, you just watch the
[02:03:17]  slope where frameworks kind of start where, you know, maybe without signals and then they add them kind of inefficiently. Um, and then they add a few optimizations in
[02:03:28]  their current model stuff. Like that's where I kind of consider stuff like preact is at, and then they go, okay, I need to get to the next
[02:03:36]  level. So then they add ownership and then they, and they add this ability to do the fine grain rendering, stuff like view vapor, self five. Okay. Now
[02:03:44]  we're kind of caught up to where solid is. So like there's a few, right. But then the, the, the next thing is, and I think people
[02:03:52]  are starting to see is that signals are also the thing that unlock, uh, resume mobility and solving hydration based problems as well. Like there's, that's one zone
[02:04:01]  that they improve. Um, there's, there's several like different applications. We saw performance and rendering. I went over this all last stream after the, you know,
[02:04:11]  the big long, uh, you know, thread with Adam. I actually saw something similar on a Reddit, uh, in solid form. Someone was like, now that everybody
[02:04:21]  has signals, you know, what are you going to do? You know, you know, niche, whatever. And it's like, no, no, this is
[02:04:27]  this picture. If we had that, those 10 years back that everyone spent working on react to work on what you can do with a date with data flow, like what you
[02:04:35]  could do if you had knowledge of how data, you know, work through your act using signals and stuff like that. We've been a very different place. This, we
[02:04:44]  have years of stuff to kind of work through. And I'm just kind of pointing out what I think where the next couple steps are. And for me, it comes down
[02:04:53]  to async and it comes down to concurrence. Um, these are places that I think, which basically just boils down to async, I guess. These are
[02:05:03]  places that I think are valuable enough that we need the core permatives to kind of, um, handle nicer. And if anyone's used solid, um, you know,
[02:05:14]  1.0, they've used create resource, which is basically like building tan stack query right into the framework, like not all the caching capabilities, but like,
[02:05:23]  essentially you just go like, you know, I, I probably, if I go to, uh, www.solidjs.com, not the blog. I
[02:05:33]  go to, if I go to the tutorial and I pick a tutorial on resources, I mean, it's, let's, let's replace this, uh, solve.
[02:05:43]  It's, it's, it's pretty straightforward. You're literally just like, like this is fetching from an API from the star Wars API. And you just
[02:05:55]  go create resource, set the source, call the fetch call, and then like, you're done. You know, it even has a loading state indicator. Um, this
[02:06:06]  tie is works with suspense. It enables out of order streaming on the server. It's, it, it handles automatic serialization across the wire. Basically, you don't
[02:06:16]  have to worry about anything. You just go like, use this, wrap some suspense around, call it a day, right? So we need, this seems good,
[02:06:30]  but there's, there's shortcomings, um, in, in our approach today that I think have to be handled. Um, because the first shortcoming here is this
[02:06:41]  user can be null at the beginning, right? So if you, if, if instead we wanted to get user.name here, uh, I'm going to,
[02:06:51]  let's just edit this right here. Let's say we only cared about user.name and I put this here. It's, it's going to error out because user
[02:07:01] .name is not defined or whatever. Let's see if I can do this. It's, there's an error here in the console. If I put a question mark
[02:07:09] , well, now we're back in business and we'll just see the name as we go. But the, the, my point is this mechanism, there's no
[02:07:16]  suspense involved here or anything, but even adding suspense doesn't change this. It's because it's, we can just continue picking up rendering where we left off. There was
[02:07:25]  like, we're only re-rendering this one text cell here in this pre. So like, and this one, cause the user loader state loading state changes.
[02:07:36]  But my point is we're not rewriting a component or doing anything else that like, essentially you are stuck doing the null checks yourself. Right? How would I
[02:07:53]  compare to quick two point quick 2.0 is there, they're still working on speeding up, uh, serialization for format optimization, uh, which is, which is
[02:08:01]  a great thing because it'll improve this, the performance of the resume ability, um, in terms of like initial page vendor cost. Um, but we're, we
[02:08:10] 're, we're kind of, this is much more fundamentals thing we're looking at here, but this is, the thing is react. I, I often like make it
[02:08:22]  kind of, you know, thing about like the, the, you wouldn't even be able to do this in react because like you'd, okay. Let's pretend
[02:08:29]  there was a suspense boundary let's, uh, let's put a suspense boundary in here. Um, let's go, let's just go suspense, right? Go suspense
[02:08:41] , let's put suspense boundary in here. Let's go fallback equals loading. Let's get rid of this and let's put suspense here. Okay. Susp
[02:09:05] ense. Yeah. And hopefully, okay. You see that loading? Hopefully that's updated. Let's refresh. Do this work? Yeah. Okay. Loading, loading
[02:09:14] , whatever. Okay. Um, cause it's actually pulling it away before it was actually keeping it there. So now we have the suspense fallback and actually let's put
[02:09:22]  like this, just like the sanity check. It's their new one. Yeah. What I'm trying to get at here is because instead of having to create resource or
[02:09:32]  whatever, they would have use and use is basically like a weight it's blocking, right? Um, they throw. And then when the component's done, it re-
[02:09:40] renders the whole component. Whereas in our case, we just care about this read. And funnily enough, the same pre is probably getting inserted and uninsert
[02:09:50] ed, but the, like the user name is what's changing. So yeah, you basically wrap a lot of different shows because like what happens when you have like 10
[02:10:00]  fields at a certain point, you're just like, I don't want to check this every single place. I want to, you end up writing show components. Wait
[02:10:09]  for this week in JavaScript. Um, but like, I think that async, and this is also important for resumability too. Like this is why I
[02:10:32] 've been talking a lot with Misko about this too, because in their case, sometimes like these computations haven't even loaded yet. Right? Like, like this
[02:10:42]  piece of code hasn't loaded yet. So how can you handle the stuff where you don't have to like aggressively guard and block everywhere? Yeah. Sorry. Yeah.
[02:11:01]  It's the other way around. Wrap, put a show inside each suspense. Yeah. It's the other way around. Yeah. Yes. Yeah. Yes. Yes.
[02:11:08]  With view. I don't have this problem. Null chucking every part of the data, but I use VF and VL. Well, yes. Yes.
[02:11:16]  That's, that's exactly the problem. But using VF or VLs or using show component, the same idea means that from that point, like pretend there
[02:11:29] 's some other stuff in here. You know, I'm, I'm, I'm just making up like pretend there's like, you're basically blocking at that point.
[02:11:41]  Wouldn't it be way better if like, cause you know, we don't run components. We just use getters. Wouldn't it be cool if you could create
[02:11:50]  a resource down here and have it pass the user like, like pretend this isn't actually pre, pretend this is pre and it can render it stuff. And you could basically
[02:12:00]  fine grain, go all the way down the tree to the point where this is actually used and not worry about the null check, not block it right at the root with a
[02:12:12]  VF or a show component, actually do all the work up front that you can. And then just update the pieces fine grain where they come in. Right. Well
[02:12:24] , that's what we should do. It's that simple. Right. Well, this is cause this is not react. Suspense disuses context. The
[02:12:47]  reason react does it's cause it literally throws. It throws away everything you do here. When it gets here, it goes. Okay, first of all, you have
[02:12:56]  to use it here. And then it goes, Oh, I'm going to throw away everything. We don't have to throw away the first time you read something. We
[02:13:05]  can render your whole page off screen and then just update the pieces as the data comes in. Right. So how do we do this? Well, async generators to
[02:13:15]  the rescue. Right. Is this what we've been waiting for? You guys can all come out of the woodwork and do that. And that's yeah. I mean
[02:13:25] , wait and use both have the same problem. Use is a bit better because it's not. it doesn't have to block like like it's not like now we
[02:13:38]  can't do anything else like like react has the ability to control things a little bit yeah yeah yeah you're still here no i i i i'm i'm i'm
[02:13:57]  i'm a little bit i'm i'm i'm i'm i'm i'm i'm not completely serious right i'm not suggesting async generators i'm but what we
[02:14:08]  do want i realize conceptually is we want a bit of both we want our component our ownership tree to be non-blocking as possible you can't at some a certain
[02:14:21]  point you're going to hit something where you need the data and it's going to depend on it but you don't want the end users authoring experience to do that
[02:14:28]  we like we we actually have some other challenges in solid right because what if i need to make a memo on this if i go const um username right and i go user.
[02:14:43] name now this actually let's do this let's go back to our little pre okay back to our little pre okay because if i go here and i go username and then
[02:15:00]  i go like this i mean clearly it works right but uh yeah it's hard for me to show if i make this a create memo like an actual reactive primitive and not
[02:15:17]  just like reading in the inside you're not going to see it here probably i i need to i need to wrap the whole i'm gonna fine let's just do this i
[02:15:31] 'll show you what i'm talking about let's put a suspense component around the whole thing i'm going to app suspense suspense i'm gonna go only initial this is what
[02:15:49]  we want here right but oh no we're hitting only initial every freaking time right watch me get rid of them create memo oh this is good this is loading it's because the
[02:16:04]  second you read this in a reactive context the way solid is right now is it triggers the suspense above because you've now read it in that context using the ownership tree right
[02:16:16]  whereas here you're reading it under this suspense but here when i make this a memo it's not just a function that gets run lazily here it's being under this context
[02:16:27]  this is a this is a flaw in solids design right now from my perspective it forces you that in some cases you end up you end up doing what react does right like
[02:16:39]  now you're making another component right like so at our worst case here we get as bad as react and that's something i want to avoid so these are part of this
[02:16:54]  of the same kind of problem it's because this guy doesn't know like this guy might not know that it's reading from an async value having that color your graph
[02:17:07]  makes things really difficult we can get to this but the answer is don't it's derive and mutate the derived value you don't actually you you want this the create resource
[02:17:28]  is basically an async memo it's basically derived data derived from an async source if you want to mutate it you need to we don't have create writable
[02:17:39]  yet but you want to mutate the layer on top of it you don't want to mutate it otherwise you have two conflicting sources of truth this is actually one of the
[02:17:46]  biggest reason why create async is a so much better design than create uh resource because we remove the ability to mutate um but we'll get there yeah yeah okay we
[02:18:03] 'll get there um but what what i'm trying to show here is that these are these are kind of related problems because essentially we're just using the context that it's being
[02:18:18]  read at it it's it's not enough for our async solution because you you know we're null checking and we are doing that so we kind of want the ability
[02:18:29]  for this asynchronously to go through the graph and only impact where it's finally being used right like reading it here shouldn't cause this to suspend it should cause this to
[02:18:50]  suspend the other problem is why are we doing these null checks so what i proposed is what if reading an async resource or whatever throws when it's when it's when
[02:19:17]  it's when it's not ready i know it's react but it doesn't throw along the component view graph because i'm not reading it here right i'm reading it like
[02:19:31]  so i'm reading it here or i'm reading it you know even when i create memo here i'm reading it here so like it goes i want to throw along the
[02:19:42]  dependency graph so if something derives from it and it's not ready and something reads it it would go like read this try to read this realize that that it's as
[02:20:03] ync and essentially stop here automatically without you needing a null check it will throw at this point but it won't throw away the component it will only throw up to this binding where
[02:20:22]  it is at which point everything else just keeps on going like it always has and when it resumes continues propagates then it will run the computation again but it won't necessarily
[02:20:42]  have to rerun the whole component no it wouldn't stop siblings because it's these are like if you've ever looked at what solid compiles to these are separate expressions if
[02:20:54]  there's another sibling here that you know was something else right it's not it's it's instead of it's kind of a combination of both things instead of blocking on
[02:21:10]  the it's fine grain blocking it's the best way to put it it takes the best parts of reacts model of of like you know not needing the null check but then it
[02:21:20]  doesn't interrupt the the rendering of components because think about you're only ever reading it in one of these sinks like where you're like like like like like whether it's
[02:21:31]  a you know create render effect or reading it in like uh um one of these uh you know like in this dom element or whatever like we can continue to just go oh we
[02:21:45]  can't insert the children yet trigger suspense to tell it to do its thing but we can just keep on rendering it you're getting there does it what if does it break
[02:21:59]  the dependency tracking because you know that this tracks when you get to user it goes oh i am listening to this and i throw so it only tracks as far as the first
[02:22:12]  thing that throws i'm glad you're you're you're you're on the right thinking if it tracks as far as first thing throws it's like any conditional right like you
[02:22:21]  know how you can have a create memo and you can have an if statement and if you go down one branch versus another branch you can depend on different things but it doesn't
[02:22:29]  matter like this is one of those old examples i think i do i have it in my um where is it just this is just a refresher for people because we didn
[02:22:42] 't go here but um the first name last name problem yeah yeah this one right where you have a first name and last name and then you have the choice of showing a
[02:22:54]  full name right and then yeah okay so i'm making full name a derivation here what i'm getting at is if full name is off and we is this the right one
[02:23:10]  no where is it yeah i think this is the right one i'm trying to find where there should be a third signal that's like show full name where is it yeah yeah
[02:23:22]  yeah here it is yeah sorry wrong example show full name set show full name if in this example you have a first name last name and then you toggle the show and then display
[02:23:38]  name that's based on either you just show the first name or you show first name and last name if display name show full name is false so we're going to set
[02:23:46]  the false here and you change the last name nothing runs because nothing is listening to last name because you're only listening to first name right so and some people i remember was it
[02:24:00]  michael jackson or ryan florence one of them was using solid and they once they realized this properly they got like really scared or you know but if you think
[02:24:06]  about it it's based as long as the condition is reactive it is basically impossible for this to bite you because it's only like when you change this condition that last name
[02:24:21]  could ever become a dependency and then you'll run the work then like like as long as this is reactive and it's it's the same thing with with what i'm
[02:24:32]  talking about uh where where where i was talking about here sorry i'm is that like as long as this is reactive and it's a decision point and it throws as long as
[02:24:46]  it won't run anything until it gets to the next uh like thing but that's that's fine there is there is there is a there's a trade-off here
[02:24:57]  you you you'll you'll see you'll see it in a second yeah i mean something like multi but the thing is with async you're kind of always you're already
[02:25:11]  there anyways right because you do part of the work and then you come back and you do the rest of the work no no no no we don't we don't need
[02:25:22]  concurrency or any or parallelism this is pure signals what i'm trying what i'm trying to get at here is there is a problem though the basic cases like this you
[02:25:36] 're not gonna have a problem because it will just continue its work you know here so we unblock the big stuff and then we block the little stuff you know so to
[02:25:47]  speak because now you know this is wrapped in the getter if it's a component we we push all the work down to the leaves and we don't and we we have
[02:25:59]  you know we basically don't have to null check anymore that there is a downside here though and that is um that what if you're listening to two async sources right
[02:26:11]  i told you this is basic like basically a drive state right like base like whenever user id changes derived async fetch user if memos are lazy does that mean we don
[02:26:36] 't fetch until the first time we hit this yeah but no no no i sorry dave i don't think you're following me we already isolate the expressions we don't
[02:26:57]  run anything again we're like okay here uh we run like uh let's here it's so hard because these examples are so hard okay easy actually you know what let's let
[02:27:16]  me really spell this out let me go text content equals this because attributes are more visible here i'm just going to use text content instead of um okay when we have an
[02:27:30]  element here like this this button that has text count and that is count times two we wrap that update in its own effect so if this count was async and it threw
[02:27:44]  like we're i mean effects a bad we we essentially we essentially can just like there's we don't lose like all every all the rest of this just continues to you know
[02:28:02]  render it doesn't get rerun again we only need to rerun this function and then we're going to have an element here we're going to have an element here
[02:28:18]  and we're going to do that and one of them is async well yeah so what will happen so you're kind of going down the chain it will stop evaluation at the
[02:28:25]  first async one so you didn't you didn't actually do the work in the first place but you're right you i mean you're offloading the work until the
[02:28:34]  async's done so like when it got to the first one because it depends on it right when it got to the first piece you know let's say that the really
[02:28:45]  expensive client side evaluation depends on this async data and it happens after when it got to the async it stopped and then when it reran yes the stuff before the as
[02:28:55] ync would run again but i mean this this this is this yeah this is an interesting question right because it pushes you into wrapping stuff um independently so what your your concern is
[02:29:11]  it's expensive computation is before you do the async and then you put that in like in this in the create async call instead of putting it in a memo before they
[02:29:22]  create async call right does that make sense like i see what you're getting at because what you're saying is like what if what if what if like right now this is
[02:29:33]  just like user id right but what if it's like um you know sorry do this what if it's what if it's let's go return what if it's like
[02:29:53]  do expensive stuff then like then do it and then it hits this it's async and then it it has to do the expensive stuff again when it when it gets to this
[02:30:05]  point usually at least in my experience the expensive stuff happens after but even if expensive stuff was before the answer is const expensive stuff equals create memo expensive right expensive you you know
[02:30:30]  what i mean like okay yeah yeah i mean any model that's gonna like well is it a problem the current model no not so much because you're not gonna run the
[02:30:55]  stuff up to the async again um essentially you see affordable stuff but yeah i mean you're starting to see i mean this is this is why i'm putting out there because
[02:31:09]  it it's not without some considerations a big one for me um as i mentioned before is you can recreate the diamond problem right because like pretend this is async and this
[02:31:27]  is async right right and e depends on it if it reads b and throws and it's lazy then c doesn't know it gets read making async stuff lazy in
[02:31:44]  general is a tricky thing to go with so this suggests to me at minimum some things you probably don't want to be lazy i mean there's a trade-off there right
[02:31:57]  if your async fetching is isn't lazy it means that even if this isn't connected or like on screen you're going to be still data fetching it in the
[02:32:06]  background but on the positive you want to make sure that b if these are both async are both queued so you don't have a waterfall here like you're not
[02:32:15]  waiting for b to finish before c does implicitly so that's why i'm proposing create async why i'm not just using every create memo like we you could see a
[02:32:26]  future where create memo could just work like this because you know it gets a promise does the thing but i actually think the starting point of the async where you accept the
[02:32:39]  promise needs to run eagerly if you want to solve the diamond problem waterfalls are the most important thing to avoid if possible like these are things that just instantly double the time
[02:32:56]  for no real reason and now now now you're getting to the the other side of it right because sure we can have our create async primitive and if anyone's seen
[02:33:14]  what i've proposed here it's if you've seen solid router it looks more like this get rid of expensive here for now um it's more like this right where you
[02:33:31]  you basically just have a single a single thing reactive tracking return the promise but sorry i'm trying to get back to the point i was getting at the there is still this challenge
[02:33:56]  here that even if you preemptively do the the stuff you don't like how does suspense work in this model how do you make sure to you know not run all
[02:34:08]  the end user effects right and what that comes down to um i is where i i had in here what i considered the ability to to control flushing boundaries essentially it's kind
[02:34:26]  of like the ownership idea but the idea that that you could basically have things that flush together whether that's suspense or not um and yes if you hit during rendering if you
[02:34:45]  hit any of these a things things hold the end user effects now there's we still have a problem here how about if you're halfway through rendering and you hit this thing well
[02:34:55]  something that solid does today is that we we call render effects immediately and then afterwards we schedule them at the same time as like after the first run as as sorry as like
[02:35:13]  same time as user effects essentially. They run before but they schedule like afterwards so they also get held like if you're in a suspense state like we've detected async but
[02:35:22]  I think one of the easiest solutions to this kind of zone is have render effects split the pure from the from the effectual part. It's kind of funny it's
[02:35:35]  like the opposite of like I just showed you how we're trying to change create resource into something simpler like get rid of that like just like that essentially with create async I
[02:35:45] 'm suggesting that render effects should be a pure part and an effectual part. That way you can run the pure part the dependencies for rendering as many times as you want
[02:35:59]  you know and this comes to concurrency in play before running the actual rendering effects so here is where you catch all the async stuff that dependencies and then if it doesn't
[02:36:13]  pass that you're free to run this you know as many times as necessary as async pieces kind of come in you know with fine grade notification but then when the effects
[02:36:26]  are ready you know like start all the async stuff done then you can go run these effects before the end user effects this being kind of like the split between between the effects
[02:36:42]  zone and the pure zone remember I mentioned earlier that problem of when you go lazy you no longer have guarantees of the computations happening during the pure phase you know how do
[02:36:54]  you solve that scrolling problem one way of solving that scrolling problem would be to use a render render effect where you can measure because you know everything that happens in the pure side half
[02:37:07]  of the render effect happens before rendering and then end user effect or you know typical create effect would would happen after rendering so you'd have that guarantee of always measuring before and
[02:37:25]  getting it after because basically async and the pure part of rendering effects are always scheduled to happen before the actual rendering or the rest of the side effects work we kind of
[02:37:43]  bring back that model with laziness by by basically giving these a special time to execute yeah except the the biggest difference between this is we take a function so our ours are dynamic
[02:38:01]  they can change at run time but yes yes you guys are hitting on it this is a big part the thing is you never end users almost never write render effects this is
[02:38:15]  what we this is what the JSX produces you don't write these you generally just write your data and do that I'm talking about what this turns into right it is
[02:38:31]  it is a lot like the react split here and I think there's something valuable to learn from react from that right this is how they keep their cleanness this is
[02:38:44]  how they they basically can solve you know the concurrent rendering and stuff this is better than our current solution which holds work because now we could actually continue to update render effects even after
[02:39:00]  that first initial render what if end users well that's the whole thing I'm saying end users don't need render effects but effects at all is hard animations places where you
[02:39:12]  read the DOM this is generally where it is you need that entry back into the system there's events like when the user clicks and then there's you know post render type effects
[02:39:23]  things like oh this updated I need to read a value from the DOM or whatever I mean the problem with that is one of the my there's a couple things here you
[02:39:41]  are now responsible for hoisting this if you want to actually you know do these things also I have to take SSR in consideration things like out of order streaming one of
[02:39:51]  the big like if even if you go back to eBay back in the day and look at their old fragment streaming thing they had a concept similar to suspense sure it was just a
[02:40:00]  direct read like promise into a component like an await component or control flow but what these patterns do with suspense do is they invert control so what ends up happening is you create
[02:40:14]  some async data you derive it you put it in your view this render effect happens under the hood you're not really doing anything with it it's just your JSX
[02:40:23]  and then you set where your placeholder boundaries are like from a layout standpoint with suspense and then the right stuff shows at the right time regardless of race conditions or regardless of how
[02:40:36]  these things kind of come in trying to hoist this yourself and losing that inversion of control when you know someone adds something new async downstream or something becomes a source of you
[02:40:48]  know complexity like yes you can always hoist it up right I'm making the same argument people make against route loaders I suppose but the difference here is that we're
[02:41:01]  actively trying to push the dependencies downwards right we want to flatten the hierarchy as much as we want we want to get the async reads as close to the DOM as possible to
[02:41:12]  do the least amount of work so if we're pushing stuff downwards like that we we don't want you to worry about how to hoist it all the way back up
[02:41:21]  right the difference between this and a VDOM is VDOM produces the artifacts this is this is like not unlike what we've always done in solid in terms of react
[02:41:35] ivity and data right we're not creating a virtual representation here yeah and what you've noticed here is essentially we still have create effect right I was just reading this whole thing
[02:42:02]  like we still have create effect right for end users but like create computed is not really part of this model right which is actually important to talk about in a moment because we
[02:42:15] 're actually we we we actually keep on parity if not reduce the number of primitives here and that create resource becomes great async essentially create render effect changes its form but no
[02:42:30]  one uses it directly anyways create effect effect still exists this better sets up things like concurrent transitions you can see the pure effect split this better sets up not need null checks meaning
[02:42:44]  the awareness of async is a lot easier even when you're deriving async you know stuff just kind of you just wire it up and it kind of fits to where
[02:42:56]  the dependency like where you need it in your UI but another side effect so to speak of getting rid of lazy is around scheduling we have something today in solid called create computed
[02:43:13]  which runs before rendering and does side effects which is like the dumbest thing you could ever come up with I did because these are use cases it's like all the reason reacts
[02:43:24]  tells you not to use effect we covered it on stream but in their docs they actually suggested rather than use effect just right to like the state while it reacts rendering and it
[02:43:36] 's probably better than using use effect create computed is our version of that it's like the thing that we have is the escape hatch in a sense for all the things you should
[02:43:45]  never do because you should be deriving data as much as possible but create computed is really easy where you can have a signal and then have it you know like sometimes deriving
[02:43:58]  data is hard right like because you're like what if I have a source you know coming in from above and then I want to keep my internal state so like as you
[02:44:06]  edit it you know you have a signal but then you want to make sure that whenever the props change you overwrite that that signal with the value from the props I kind of
[02:44:17]  think of like the perfect example of that get rid of all this but let's pretend button was you know like this right and then you know it doesn't really matter but
[02:44:32]  you like it doesn't I don't have any anything here but like pretend you had like in here you had I don't know value set value okay equals create signal right and
[02:44:49]  then you might initialize it to props dot value let's say okay button's not a good example but but then you might go okay create computed or you might say create
[02:44:57]  effect but the problem with create effect is it runs after rendering so you everything's a double render but you do create computed and go set value props dot value or something and then
[02:45:06]  this way you could have some logic in here that like you know whenever you you know whenever you do something I don't know I've just got a button here you basically update
[02:45:20]  the value of this and then when the props change it overrides it this is this is very common kind of synchronization thing and I talk about my derivations of
[02:45:28]  reactivity how synchronization is not great right actually have it right here see synchronization state a state b okay that's derived and then synchronization would be is it yeah okay
[02:45:46]  derived upper name being uppercase version name synchronization would be having state of upper name and an effect that writes to it every time you you run it and the the
[02:45:59]  thing is the difference between derived here and this effect is it's possible and you see it here it's possible for me to write to that signal myself independently of of of this
[02:46:14]  you know reaction the problem with this though is we can't track up the graph as soon as you inject a signal in here we lose all those properties that we like about
[02:46:26]  derived data because we don't know anymore right with a memo or derived data you can always go okay you read this you read this let's say this I have it in my
[02:46:40]  example here upper name let's say our state is upper name now we don't know that this effect updates upper name whereas here we know that upper name depends on name right
[02:46:54]  like we can see it it's like in here we track it when it does it but here upper name has no idea that it depends on name this effect just writes a value
[02:47:05]  to it it doesn't realize that it depends on name you've broken the graph essentially by using synchronization here it's a track dependency here it's attractive this effect but
[02:47:18]  this has no idea that it's been derived which means that you lose all those nice properties of signals yeah local copy right I think these are the places I think that
[02:48:00]  these are the places where we need to look at the primitives again because like we don't want to encourage this right one of the things that we've been talking about is
[02:48:10]  something called create writable which is essentially which example here the the idea is instead of writing this you would write this it's slightly different but it's but it changes this
[02:48:40]  considerably because now you have a primitive that's aware of its dependencies and can still be overridden but then but then you know trace back right this subtle little difference is
[02:49:00]  generally the pattern that you we you essentially should be following here we should be we should derive on top of this data and then mutate it ephemerally because ultimately
[02:49:14]  eventually the source of truth needs to get back and drive down from the top right you need to save it to the server and have it come you know back down but we do
[02:49:24]  have ephemeral state and we want to be able to like not rely on synchronization so this this is this is the kind of thinking or you know where we're at
[02:49:36]  the funny thing is this is actually not that hard to implement in solid it's it's actually a memo of a memo it's like second order memo I'm not going
[02:49:45]  to pull out the implementation right now probably it's like in a discord chat and I'm probably going to piece through it a bit but essentially the idea is you can you can
[02:49:55]  basically make like it's like you can or no it's a memo of a signal like essentially you you derive a signal so instead of like it's it returns a signal
[02:50:09]  essentially so that when this changes you get a fresh fresh reference to that signal right yeah and there's things called writable computed in view and knockout where you can set custom
[02:50:29]  logic but I'm saying it's like we really need to get away from synchronization another one where this is tricky is stores but like where I'm what I'm trying
[02:50:38]  to get at is instead of props about value this could also be some async thing right so like you know this could be like const my user equals create async you know
[02:50:54]  fetch user which is going to give me some promise or something fetch user props.id okay right and then what I'm suggesting here is then you could be like look user
[02:51:10]  dot name and now name that name like this this is this is the sort of you're you're kind of making a derived like you see how we keep the graph this
[02:51:34]  way obviously solving this for stores or deep proxies is something that's a little bit more challenging but essentially this way we keep the properties and you don't have like the
[02:51:49]  problem is if you start doing writes while you're deriving stuff some nodes might run more than once you know they might have the old value and then you write in then
[02:51:59]  they get the new value you want to kind of avoid this kind of jitter so to speak help with optimistic ui yeah I mean the the other change helps too I
[02:52:24]  don't know if any of you guys have been trying to build a trellix demo with solid you basically need to merge stores essentially to get it to work properly and
[02:52:35]  we don't have a primitive for that today and it's hard because you have to build it into the because of the way our resources work because we don't have the the
[02:52:44]  derived async currently it's actually a bit of a pain you end up just using like an effect or computed to write to a store to do the diff with the async
[02:52:52]  thing and at that point of read is where the suspense triggers it would be way nicer if we could just derive it and then merge the data in the derived value so yes
[02:53:03]  I think this has benefits in that in that case as well yeah I mean the trickiest part now is there's a certain duality between primitive version and the store version
[02:53:25]  like there's create async if you've seen the router we also have create async store which automatically diffs its data coming in this create writable again which is
[02:53:38]  works on single field you're probably going to want a version where you can basically diff the data coming back from create writable as I said these cases yeah these cases will
[02:53:59]  allow for keeping the directionality and allow for super fine-grained updates essentially like if anyone's used create async store in like with their data thing and without like trying
[02:54:10]  to merge their optimistics like when your optimistics kind of separate like this thing is like magic like you essentially just like get the data and then it diffs the data and
[02:54:19]  then automatically just updates the one place in the UI no components rerun it looks insane like it looks like you're like how is it that I'm like using this with
[02:54:27]  like cache and actions from the router data loading patterns and it's revalidating and fetching everything and then like literally nothing reruns and it's just like bang this
[02:54:35]  little one tick in the UI updates when I'm getting fresh server data invalidation patterns like it feels super powerful we need the same kind of power in and on the memo and
[02:54:48]  actually if we did we we wouldn't need create async store we could just use create async and then whatever like create diff or whatever was like whatever the primitive was
[02:54:57]  could just wrap it and that would handle both cases both diff derived normal data or diff derived async data this is the important part you can see when you start dealing with these
[02:55:09]  primitives is the patterns just fall into each other at that point because then like okay you have whether whether it's a memo whether it's async whatever the source is
[02:55:18]  you have a common pattern for being able to handle say how do I do a diff of the data and that could derive naturally from whatever source right as long as we keep the
[02:55:28]  directionality how do we you know so this this is you know I don't want to get too I'm very careful here of not getting too crazy down the rabbit hole of
[02:55:39]  making a whole bunch of different primitives the stuff that needs to be core needs to be core the other things can be easily built in user land can be easily built in
[02:55:47]  user land I just async is important enough because of that different characteristic of lazy versus eager you know so anyways are the links from YouTube not coming through is that the problem
[02:56:17]  okay did you go yeah the links don't come through through YouTube that they do come through through twitch oh it's funny I saw you talking about it but I guess the
[02:56:31]  links didn't get through yes some people have made it in the community package yeah yeah I want to see what that looks like I want to know what the optimistic updates look like
[02:56:48]  which brings us to an interesting point it's an interesting question right it depends on how well we can merge the stuff right if we derive too much are we keeping like I
[02:57:14] 'm not if if we don't have to keep complete copies of everything in memory then we're good see we do everything by reference anyways so we don't really want full
[02:57:22]  copies we want we want to be able to it's it's it's an interesting problem I I actually there there basically every one of those touch points will probably would probably need
[02:57:38]  its own copy of at least some portion of the data so yeah it's it's it this it's deep stores in this area is is an unexplored area and it
[02:57:47] 's place that I'm interested in but okay yeah I talk a bit more in this article I shared earlier where I talk about being able to control flashing again this is but
[02:58:10]  the async stuff actually I actually talked about render effects here I use create memo here but I realized afterwards the the problem yeah async components I gave up on that because
[02:58:27]  it's just blocking it's confusing yeah yeah never mind I think I covered everything in this article pretty well um I I I think what I want to see is the whole
[02:58:46]  effect scheduling suspense side of things it's in the effect zone it's in the ownership tree it might be possible that that can keep out of any kind of common piece of
[02:58:59]  runtime but it gets harder and harder when we start introducing ideas of async where we could you know propagate it through right see I've got if I go to solidjs g
[02:59:13] ithub right now there's a project here and you guys may have seen it may have not it's kind of gets buried down here somewhere it's called solidjs slash
[02:59:27]  signals and this is very rough I only started looking at it again this week um as you can see but this was the beginning of an implementation and the truth of matter is I
[02:59:44]  haven't actually played with it all that much I I was trying to get effects to work um and what what's interesting here is that um create async is implemented a
[03:00:00]  basic version of it um that Milo implemented I don't know if I'm gonna be happy with how this works yet but it's it's here um so he's been
[03:00:10]  working doing a lot of research here on this we have what create render effect create effect create root run with owner catch error this is the full API surface right now catch error
[03:00:23]  run with owner create root create render effect create effect create memo create async create signal yeah that's about that's about it in this in this library um it's pretty small
[03:00:39]  I think that you know uh Rahim and Milo been working on it way more than I have I was actually kind of thinking that I'd actually try it and see
[03:00:49]  see how see if it was like behaving the way I wanted to but I don't know how much time we have to do that right now um but for those who are wondering
[03:00:59]  if this is already in progress it is um I ran the previous version of this through the JS framework benchmark uh really raw where I just kind of like hacked it together and it
[03:01:10]  was 0.02 slower than current solid in my local tests without doing any kind of optimization um so it's a good baseline to get started here um yeah like let's
[03:01:26]  let's just pull this down locally um let's see if let's see what we can do here solid start no um let's see if I actually have it I might actually
[03:01:38]  have it from before let's let's see if I have it in fork um x reactivity is this the original version of it yeah yeah yeah this is the same repo
[03:01:58]  yeah cool cool okay let's open it all right look around open development okay all right so other thing we could do though there's a bunch of tests in here
[03:02:36]  but I maybe maybe maybe all we need to do is just build the library as is right now right and then just copy the ESM output into like the playground play with it
[03:02:51]  maybe I should install first shouldn't I should probably delete the old disk folder because my suspicion is this is way out of date this is to be fair I didn't test
[03:03:11]  the latest version I got in the other day noticed that effects were running synchronously and I want them to be delayed and then I kind of like was like okay well let
[03:03:19] 's get okay so what's dist here oh perfect prod node dev types okay so I can literally just take prod here and all what is it about 900 lines of code here okay
[03:03:37]  I wonder if code size would be interesting there's some big comments in here so let's just copy that and then looks good to me some of these things are exported there
[03:03:52]  probably don't need to be okay and then we can just call this signals.ts work post it beautiful import import create signal from signal signals moment of truth here this work
[03:04:32]  let's just do both let's just do both create effect let's just do both create effect hello set all right all right please work I haven't even tested this
[03:05:15]  so the tests work fine locally but I have no clue what this will do in this environment get any errors in the console I wonder if like I'm hitting on something
[03:05:41]  because it's there's create effect here right like there's definitely create effect okay let's let's let's just do the whole thing let's I wonder if this is
[03:06:02]  like I wonder if this is let's just oh interesting it's it's in the actual console but it's not in this console that's interesting okay that's fine
[03:06:39]  we don't need this console anyways right yeah I don't know why am I like well let's not worry about that let's not worry about this let's just let
[03:07:05] 's was the create root even necessary no it wasn't okay to be fair we're probably just not warning and I still think we probably should if if I do this world yeah
[03:07:17]  what's interesting here is the create effect is already using this because let's let's play here flush sync right let's go flush sync there we go hello world hello John
[03:07:31]  the first thing you notice about this system is it's it's it's doing global batching like view like react like spelt basically like everyone else right second thing to look
[03:07:51]  at here okay so flush sync works let's let's let's let's let's do let's make const double again like we did earlier in the stream create memo let
[03:08:01] 's go console.log do the work and then let's go return s let's view create create demo now oh I guess let's do it's not double let's
[03:08:32]  do two upper and let's call this one upper yeah yeah we see we see uppercase world and uppercase john and do the work twice now sorry I'm
[03:08:59]  trying to get like like I want this to get smaller but yeah and then let's see what else we we're just trying stuff okay what what if we get rid of
[03:09:12]  the crit effect yeah okay and let's call upper ourselves yeah so what you're seeing here is that without the effect the memo doesn't run that's another difference here so
[03:09:29]  this is lazy right upper never runs in this here flush sync doesn't do anything because there's no effect setting john doesn't do anything it's only when there's a sync
[03:09:42]  when there's an effect that the memo runs so yeah okay perfect okay so this is this is the basics of it we have a lazy reactive system that does microtask
[03:10:01]  space schedule schedule queue scheduling and auto global batching okay um you know what I want to see I want to I want to play with create async play with create async
[03:10:17]  I I want to see how this works um because I am curious let's do um new promise so funny because I have to like move this in order to new promise
[03:10:53]  let's get res let's just set a timer I can do something like set timeout res world and let's not uppercase it world for one second and then
[03:11:24]  this no longer has a setter which means this whole thing is pointless what's going on here let's refresh it okay okay so first thing this shows me is by default
[03:11:50]  this does not have my crazy behavior because it's asking me to null check this right right it's just doing do the work hello undefined do the work hello und
[03:12:07] efined okay now my understanding is that it's just because of the default of how this is set up that this behavior that I want does exist but it's not how
[03:12:23]  they defaulted it let's take a quick look at the code again and see what they're doing create async write value write write write write signal okay what I'm looking
[03:12:42]  for there's something called let me see here utils what's in utils nothing no I did at this point you're right at this point the flush but that's
[03:13:07]  a good question because at this point the flush sync I think is not important no yeah sorry the flush sync was just when so I can show that we could set it twice
[03:13:19]  so the flush sync doesn't make a difference here now now we're back to kind of natural behavior let's I want to look at the implementation of create async because I
[03:13:28]  know that Milo did a whole bunch of work here I think we need to look at the what is this being passed into because there's I'm not seeing it right
[03:13:59]  now there should be a read so he's doing read read and let me sorry I need the code for this is in something called core I think what core loading wait wait
[03:14:19]  read returns read wait goes this loading throw not ready error okay okay so okay that's interesting so the question is I'm just gonna go back to the playground because I guess
[03:14:39]  I could have just looked at the code in the playground but I think if we go in here and we change find it create async what if it's wait no here
[03:15:09]  no okay I'm gonna have to look at this more it's interesting I actually see the code in here that suggests that oh actually no okay nevermind I I see the
[03:15:31]  I see the code in here that suggests that that it can handle the throwing but I haven't looked at this very much no I never looked at QT actually people brought
[03:15:49]  up to me later on but most of my influence came from Knockout then MobX and then SJS yeah it's it's hard to get around the small window yeah it
[03:16:04] 's fine I we we can continue to explore this in the future I just want to set the basis I I think I'm good on this for now because I I it
[03:16:19] 's interesting because I see the code that that that does it right if we look for wait here it goes it basically during the async time it's supposed to throw not ready
[03:16:34]  error and then if I look for not ready error I'm hoping then it tracks it and then sets it out so like it looks like the code is set up to do
[03:16:51]  this I just am misunderstanding how to actually trigger it because the wait seems to be only available on the internal node and then if I if I had Milo he could probably
[03:17:07]  tell me exactly what I'm doing wrong but I hadn't I I hadn't been able to test this yet so I thought okay maybe I'll just try it right now because
[03:17:20]  there's two computations here there's their signal so he's modeling it using a signal and then the signal read read I wonder what the double read does but then basically
[03:17:41]  I would I would have hoped that this wait here would have been the thing that threw I wonder if like I wonder if you like the problem is you actually have to like wait
[03:17:51]  all the way through I don't know that would be interesting to say the least but no well no that's the idea sorry if I didn't explain this already the we
[03:18:11] 're starting from the signals package this was the effort I haven't I haven't reviewed it in the very much in the last year but this is the new like we're starting
[03:18:21]  solid 2.0 from starting from building the base primitives and the signals and then building everything back up on top of it again yeah so like the the idea here it
[03:18:41] 's like yeah it's like what what how many places can I put weight until this works but the idea here is that yeah in any case the idea here is that we
[03:18:59]  will I mean effects probably aren't being batched anyways I wonder yeah yeah yeah no I don't think I'll be able to get to there the idea is this work
[03:19:20]  will then become the foundation we build the next version of DOM expressions on and then everything kind of channels out from there so it starts with rebuilding the reactivity system and then
[03:19:30]  on these primitives which we've identified and then it will continue to kind of go out into the rendering and then you know on it this is the big part if when we
[03:19:43]  get like the current version of these signals don't have concurrency or transitions the async model isn't quite where we want to get it to yet but essentially when we build
[03:19:55]  up this reactive system and add those couple of features most of the rest of the 2.0 stuff can be will be built on top of it this basic I think the
[03:20:04]  brunt of the work is in this signals repository and then from there you know we'll have to do a bunch around DOM expressions around you know the split between server and client
[03:20:21]  like server has some different behavior like right now we don't actually have reactivity on the server that can aliasing and then kind of build out there to solid 2.
[03:20:32] 0 but like the big chunk of the work is this stuff just haven't as I say got back to it months I I that's that's my that's what I'm
[03:20:47]  anticipating this this this I'm hoping to get the right async model and get transitions in the next you know couple months couple weeks and then building out the rest of solid
[03:20:59]  at that point that part should be yeah my target was for for the fall but yeah yeah just to give you kind of an idea no exactly like yeah so so you know
[03:21:19]  this is where it's at today the basics of the system are good I know they're performant we need to work on the async model and the flushing model render
[03:21:28]  effects I knew I was a little premature coming in here today I was hoping I could just like play with it and see it we see the async stuff works it's just
[03:21:35]  not doing the behavior that I want quite the behavior I want to get to yet but this is this is the base place I'm going to start putting a lot more focus
[03:21:44]  here I've been very distracted with solid start so I'm very excited that's the big thing I'm very excited here we've talked about all the decisions making that got us
[03:21:53]  to this point talk about all the different kind of things and while I've made a big thing out of it the end result actually shouldn't be that big so to speak right
[03:22:05]  it's it's you make a lot of hard to sign decisions and then like we're talking about you know I can see the library getting a lot larger when we when
[03:22:19]  we add some of these features but like you know tree shakable the signals library on its own is really nice abstraction we didn't talk about it here but like create store
[03:22:29]  is in here and we simplified create stores implementation as well actually I can probably show it in the tests the store implementation it's also in that all that code that 800 lines
[03:22:45]  or whatever it's it's it's about 200 with all the comments and Typescript and everything in here and the biggest the biggest difference that we've been looking at with
[03:22:56]  stores is let's look at an example here is using produce as the as the as the default API for it so that you would use localized mutations no more of this weird
[03:23:14]  you know undefined merge object not merge object stuff it's a lot like immer this way we still offer the path syntax but the store basically set store call gives you reference
[03:23:25]  to something that you mutate I think it would help people understand what's happening a lot better we're still keeping the read write segregation because that's still important to us
[03:23:33]  but especially because when you pass stuff through you don't want anyone just to write stuff randomly but the idea here is that yeah it allowed us to simplify things and actually make it
[03:23:48]  represent something that's more like natural javascript than like our dsl that we built on top yeah anyway I think we're good on this topic we start talking about
[03:24:01]  this week in javascript because there's some good stuff here as well give me a second when we for me to kind of switch modes here but we haven't talked
[03:24:12]  about solid start yet so yeah what does flush do flush schedules when the effects run yeah like it's basically saying like run them now essentially all right let's let's get this
[03:24:32]  going thanks for joining me today I know it was a little rough towards the end the learning part was good the future stuff was a little bit rougher than I'd like
[03:24:40]  but I think the direction is actually getting pretty clear and the trade-offs a lot better understood yes yeah it's kind of ironic because I did so much work to give an
[03:24:57]  immutable JS interface to over something that is actually mutable underneath the hood we first played with this store design when I was working with Tanner because he refused to use em
[03:25:16] mer for some reason I guess he didn't want the extra blow but I was like this can be where your interface is if you want the router to support both sides have it
[03:25:24]  use emmer for react and have it use our store API for solid and just swap it and then all the rest of the APIs can look the same react can get its
[03:25:33]  immutable stuff and do its updates it way and solid can get its fine-grained updates because like the thing you have to understand is emmer lets you write mutations but
[03:25:43]  you still have to under the hood it still has to do all the object cloning and all the like reference like structured cloning and like all the checks and react as it
[03:25:51]  renders and all that kind of stuff in solid's case like just you know the mutation literally like it's a proxy it's just like trigger this one spot you know
[03:26:02]  and then it'll just trigger the signal over there so like the overhead is significantly less you know on our side but I mean yeah yeah it's so funny I I really
[03:26:20]  like strict contracts and stuff of immutability and I've always tried to kind of push people that way because I find in the long run it makes them do the right stuff
[03:26:31]  which I think is ultimately very important but I can understand why you know people might not you know have the same opinions as me on this stuff yeah anyway okay yeah I think
[03:26:50]  I think I have everything set up for for this week in JavaScript so we should get started shouldn't we roll it back when did this week start anyways what are we on with
[03:27:05]  22nd there there was there actually that much stuff this week just scrolling yeah there's a few things okay let's get let's keep going yeah local mutability is fine
[03:27:32]  and that's that's that's what we're playing here at all right all right all right let's do this um okay let's switch over all right and let me
[03:27:46]  get my banner and talk about this week in JavaScript um not nearly as much as trying to catch up from three weeks last time but definitely a few things definitely came up um
[03:28:02]  so i'm i'm i'm uh happy to talk about those um let's get started um there was an interesting typescript discussion that came up last week um i guess last
[03:28:16]  friday and the whole article here about like what happened to it yeah you can't make children type safe and react in typescript um it's talking about this whole select
[03:28:30]  option thing component is always a JSX element right so i like this the reasoning behind this is always true and this is this is one of the earliest issues we actually opened as
[03:28:45]  part of the solid community on typescript because like we're trying to be like why can't element two be a div well you know we tell everyone a div is a div
[03:28:54]  why can't element two be a div and and like they're they're talking about all these things option as any i should be shown below probably enough this does work if
[03:29:17]  i call option manually yes but as you call this JSX it does not right it's not possible to restrict it okay blah blah okay we know this but there was i
[03:29:26]  thought there was something here about let me see and would you ever even want to okay so dan's actually agreeing that you'd want to there and i was actually saying that it
[03:29:47]  was kind of annoying because because the div equals div thing so actually it seems like he's in agreement why you would want it indeed restricting direct children type is pretty useless
[03:29:58]  because okay because you can't pass my option even if it's renders option this is one point where flow type is this is the thing i'm not as clear about
[03:30:06]  maybe you typescript people can help me out here i don't care if someone passes and maybe people do i don't care if someone passes capital option or my option i care
[03:30:15]  that they ultimately return lowercase option right and if the types work the way that our types would we could ensure that right it's hard because our functions are just functions we
[03:30:28]  wouldn't want to ensure that people only return one type of component i suppose but it would be interesting if we can ensure like like the right dom children get inserted like i mean
[03:30:41]  i mean this starts getting like really crazy but picture if you could actually know that like you can't put a certain type of element inside another certain type of element and type
[03:30:50]  script could tell you that right yeah yeah if you don't need render types if you got return types it would be enough exactly yeah yeah yeah a few folks are like yeah we
[03:31:11]  love type save slots yeah it's it's interesting but yeah so so i kicked up a little bit of a thing on this this is like one of those things i just
[03:31:21]  i would love see typescript help people you know get from you know not just react there's a few things on this list this is one of them it was a good discussion
[03:31:34]  it's interesting to hear that even the react team there's a few cases where they're like thought about it but i yeah i don't know um this this is like
[03:31:45]  first week that i use jsx with typescript like we we basically identified five issues i think one or two of them have been addressed now this is one of the three remaining
[03:31:55]  ones that i just love to see to be fair if it's not immediate children it doesn't actually do a ton but i mean it's still really interesting to think that
[03:32:08]  you could actually be like no you can't put um you know i mean i guess most rules in the dom can be broken anyways but it'd be interesting to say like you
[03:32:20]  can't put this type of element inside of this type of element right like this is an actual problem we have with ssr um because the they'll like get pushed
[03:32:29]  out like picture if if you could say like you know tables they're very specific on which elements go inside which children like picture can be like no no you can't put that
[03:32:37]  element there and typescript could tell you to be fair a lot of things would probably just be any anyways i don't know it'd be interesting we talked about this a
[03:32:54]  bunch last stream i just retweeted the python paradox it's a good read for anyone all right so we got the react compiler thing yeah and we have the whiz thing
[03:33:06]  okay let me just check if there's anything else i want to talk about yeah okay this this is low-hanging fruit there was this poll this week where people were
[03:33:19]  asking web devs what the default hp method for the form element is i'm gonna hey i've got chat here do you guys know what the default uh hp method
[03:33:29]  is for the form element yes yes it's definitely put and delete yeah thanks guys no because seriously can i right i i mean no one's gonna admit that what they voted
[03:33:48]  for now right yeah yeah okay thanks chap for participating in this i see a lot of gets which is the correct answer i do see a few posts or people say i voted post
[03:34:07]  because like honestly post would probably make a ton of sense i'm not sure i even remembered this when i first was working on this stuff um i think i did because i
[03:34:19]  was working on marco and it refreshed me on it but like if you actually go and do a form action in solid start we don't do what next does which is automatically
[03:34:28]  make it a post we tell you to add the post method to it if you want to use an action we're like we only support post actions um on you know so please
[03:34:38]  put the method equals post on it um so that's that's our middle ground right the the remix guys like brian florence would kind of like don't they
[03:34:49]  made it stink how next a little bit not much but next high you know and rscs can like say like post by default and and more than that they hide that
[03:35:02]  fact because you don't write method equals post you you they just like automatically make it a post and then the web the default is get so it is kind of interesting right
[03:35:20]  so yeah a lot of people from the single page app world never needed to know this and that is what adam rack is the same here i know he's a bit of a
[03:35:32]  shit poster but he's like if but knowing shit like this matter more devs would know it learning typescript is more value career learning react is more value learning next is more
[03:35:40]  valuable learning solid some people thought this was like a slight against solid i think he just literally ran out of characters um because he's been very supportive of solid start especially since
[03:35:51]  i chewed him out on signals last week so yeah it's funny i bet if you pull the button they can get right but they've been promoted to do that yeah
[03:36:21]  no this this is the problem when you diverge from standards i think it's okay to say like look they should be post but then have a capital form component when you next
[03:36:34]  has a lowercase form which makes you kind of be like oh i thought forms just worked like this and it's like no they they don't right like our middle ground
[03:36:45]  isn't great because now you know it'll complain at you but at least um you know we're we're teaching while we're complaining so yeah it's it's it
[03:37:05] 's it's it's it's interesting um i i thought this one was worth pointing out because this conversation just keeps on going on um where's this one 676 uh
[03:37:19]  adam goes on to show a very like broken js example and was like look if you don't know this then you don't know do it like basically just being cheeky but
[03:37:28]  um i don't know there's a lot of weird stuff in the dom um you probably should know your tool but it also probably like if this was something you knew you
[03:37:44]  literally for the last 12 years could have coded and never come across this and been perfectly successful in web dev like this could have not mattered even remotely anyway let's keep on going
[03:38:01]  what what other cool stuff here on the random bag oh yeah this this this is a fun one it's like rough some feathers but if you're using xjs and s
[03:38:09] sr mode for documentation you're probably making making a mistake i like this graph um sometimes we uh we raid uh chris after after the stream but um he points this like
[03:38:23]  little pocket for ssr i don't know if i agree i think the ssr pocket can extend in space but to this point i'm in agreement you don't
[03:38:34]  really need server rendering for docs probably not the question is how small this portion actually is what we're seeing is this portion is actually trying to eat this portion right but yeah
[03:39:05]  i don't know if it's a is this is is that all that controversial did anyone else reply oh there's our there's the going further left with sr tech
[03:39:12]  is a mistake funny enough i see this with remixed as the next one since next aggressively builds routes ahead of time going further right with sr tech is becoming more and more
[03:39:19]  worthwhile just for daily past yeah i mean this is an interesting one next cash is so heavily that people end up not doing that much dynamic stuff with it but this is this is
[03:39:30]  the hot spot right you see like ebay right this is where like we all know we can make these performantly it's it's trivial this is where performance starts to
[03:39:39]  matter and it's like right on the the flux point where you don't want this so this is what this is almost where like the whole conversation is focusing on but i think
[03:39:51]  in general like uh fred from astro had a graph kind of like this and he tried to place the frameworks on it i think this is a pretty good look at
[03:40:02]  kind of where these things kind of said okay we have okay let's get there in a minute uh let's some quick solid js news while we're going um atilla has
[03:40:18]  been on fire or atilla however you say the name i i asked and everyone's like oh it's all good and i'm like well that's not helpful but yeah
[03:40:29]  great podcast talking about solid for an hour as an outsider not just me chatting off i i thought this was actually really really useful one from a third party like from a react developer
[03:40:39]  standpoint i think i think it helps you know i've been so deep in signals i don't always you know you know i i maybe can't relate as much anymore um
[03:40:50]  so i quite enjoyed this podcast um new guide on how to use web uh create extensions using solid js pretty sweet as well i saw i saw this i thought it was kind of
[03:41:04]  interesting nuxt hub um because we both use nitro under the hood they had no problem just like deploying a solid solid app just worked straight out of the box this makes me
[03:41:14]  happy with solid start it's nice to see this kind of like benefit of everyone just kind of using the same tool and just being able to just get it to work um
[03:41:25]  okay yeah okay let's let's let's we'll do that one after let's keep on going no let's go to the next one okay let's talk about this
[03:41:42]  one um i actually i want to actually i'm going to change my view here just give me one second i'm going to change what i'm presenting okay because i'm going
[03:42:00]  to present a chrome tab oh will that work yeah let's try this do you see the weird about borders i see it's like it's like cutting it off on the
[03:42:27]  top and the bottom anyway okay well i'm glad this looks okay for you it looks weird for me um i thought this was cool um new article we have to open it
[03:42:45]  in this tab for this to work ah it's opening it in another tab of course damn it i didn't think this out very far okay give me a second we will
[03:42:55]  do what i want to do in a second for now i'm just going to share the whole screen we'll we'll come back to what i wanted to do um he talks
[03:43:05]  about how the react compiler uses type inference to figure out how to auto memoize props because or autumn auto memoize stuff so he's showing like here's like a simple example
[03:43:19]  where you've memoize the component in react as a user user first name rate that he's talking about identity so basically because they know that a primitive can be the same
[03:43:35]  but an object can't be if they know that something that calculates tax can only return a primitive you know the a can inform their approach here because he look he's
[03:43:52]  using using he's saying naively you could just use use memo to wrap each of these calculations but because they know the type is what the type is they can decide to not
[03:44:05]  use it so he's explaining how they do it solving the equation the process solving these type equations called unification unification process attempts to find a substitution of type variables that make
[03:44:12]  all the type equations equal so on the type equation for our example are pretty straightforward but the point subtotal we don't know its type blah blah blah blah blah blah blah
[03:44:20]  blah now we're getting back to our original question the price point the compiler can infer that all the values are primitives there's no actual need to memoize total subtotal
[03:44:28]  or tax in the price point saving bundle size and memory so instead they basically don't memoize this and then just check the primitive value and do a shallow check kind of
[03:44:40]  similar to how svelte used to do which is they create their element total so basically if it's not equal replace it otherwise return the previous value of t1 that's
[03:44:51]  essentially how their compiler works right so they were able to use rules of react and say like you're mutating local state without using set state interesting stuff the funny thing
[03:45:15]  about this thing is i think this is very powerful because they could tell that the work here isn't expensive because it's just an equality check because of the value but um
[03:45:30]  so that that answers like a pretty important question but what i thought was interesting was devin gavitt's response in your example what if calculate subtotal or calculate tax was
[03:45:46]  a very expensive operation wouldn't it be worth memoing then even if the inputs were primitives great question there is a potential trade-off we've been thinking about the
[03:45:55]  compilers away bound re-renders in practice this hasn't been a problem and not memoizing everything has been the right trade-off considering memory bundle size interesting so
[03:46:02]  in that case you'd still need to write use memo manually i guess perhaps worth reframing the compiler is something that reduces unnecessary re-renders rather than something that optim
[03:46:11] izes performance when re-rendering is necessary i've seen it marketed as you'll never need to use memo again but it seems like it's probably not really true it does
[03:46:19]  absolutely optimize performance when re-render is necessary too because of the memorize component re-renders much faster because not everything has to be re-computed all right
[03:46:29]  okay in my opinion it's still a react issue when compared with something like solid in your example if only state changes you would still call calculate subtotal even though the items didn
[03:46:39] 't change it's less granular so you still need to think about what to manually memo oh he even mentioned us i missed that yeah okay so yeah this this was an interesting
[03:46:52]  conversation um and the the yeah the reason i was talking about it is i found this example really interesting because um i actually he i think they did it intentionally perhaps because i use
[03:47:12]  this exact example in one of my talks um right um let me show here um share screen now i can do this because this is the easiest way for me to get it
[03:47:28]  in here so let's do this you can do it for further navigation oh we could basically no one so it didn't remember my time stamp i hope other people got it
[03:47:38]  acting to talk about auto reactivity it isn't only that memoization is insufficient to solve the performance consideration it's that with implicit memoization it's a lot harder to explain
[03:47:49]  the mental model the audio is going through what do i mean by that well pretend you have a bunch of code that just looks like plain javascript that runs from top
[03:48:13]  to bottom um how can you like does it still feel like it runs top down if only certain parts of the code just happened to to run like this is a fictional situation
[03:48:28]  um this i i no one knows how the react compiler is going to run at this at this point but i just wanted to kind of do this mental exercise because when i
[03:48:36]  was working on marco we had a very similar kind of concern because pretend you put a console log in each of these functions and this is just like a simple setup where you
[03:48:44]  uh calculating you know maybe went to a restaurant bought a bunch of food calculating the total and then you're calculating like a federal tax and then like a local tax and obviously the
[03:48:55]  first time this runs it'll run and you'll get three console logs right you'll get the one for the subtotal you get one for the tax and get the one for
[03:49:01]  another tax but the question comes in what happens with this code when you go oh i'm in the wrong state or what not and you just switch that and you only change
[03:49:12]  the state tax rate well if it was a most frameworks today it would just rerun everything you get the three console logs and you see the output but would it be strange if
[03:49:23]  just the last function just happened to run now i've inlined it so it's very clear to see that only that function depends on the state tax rate but it could
[03:49:35]  also this could have all been in line like just a bunch of logic inside your component and the compiler just decided well these lines of code need to run these other lines don't
[03:49:43]  need to run and it's kind of hard to actually explain i think it becomes difficult to explain it top down in fact you might start talking about data dependencies changing and honestly
[03:49:54]  if you've used react any time recently hooks or whatever like you're familiar with talking about data dependencies and and this is where i'm getting at you might even describe this
[03:50:05]  as being reactive it's not about memorization anymore anyway uh yeah i just just wanted to show that little clip for a second because um it was just interesting that that piece from
[03:50:19]  that talk basically ended up uh and i gave that talk a few places but that it basically ended up in uh in that article almost as the actual example um so yeah i
[03:50:33] 'm gonna swap this back so i can share everything again um but yeah it's it's interesting because i think that the the takeaway for me here is like it's what dev
[03:50:50] in said it's like don't get me wrong like it's sometimes in solid you have to decide what's expensive and when to create memo as well you know like when you
[03:50:58]  want to do a calculation but it's like it's like don't get me wrong like sometimes in solid you have to decide what's expensive and when to create memo as well
[03:50:58]  you know you know like when you want to do a calculation but it's like i think it reacts doing the right choice of not over memoizing generally speaking but it's
[03:51:09]  important to realize that they're not like they're not like removing the need to be aware of how data flows through their app like like it's it's a better default
[03:51:24]  right i think that's how i i wrote it um you know this optimization will allow some code that is not that's written kind of naively to operate better but it
[03:51:43]  won't necessarily optimize like it won't necessarily like it's only so much you can do right it's it's not going to necessarily make your like yeah i don't know
[03:51:48]  how to phrase it because it it it sounds like it will make the it'll make the worst cases i thought even the worst case is better it's it it's kind
[03:52:07]  of like the default is in a better place which means it'll have an impact across a lot of projects in ways that will be meaningful but it's not going to probably
[03:52:20]  make headlines and when you need to optimize you're still going to need to go in and optimize yeah what devon said yeah i mean it's it's it's a
[03:52:41]  really cool thing it's just it's interesting i i feel like it's because like reacts at a point now where like they don't have all enthusiasts running it anymore you
[03:52:52]  have just average people and a change like this will make the average developers improve the average developers life right like this is this is one of those places where you're putting like i
[03:53:04]  i think uh we have a response here somewhere um can i say something something writing your own compiler in a whole type system with interference at least now worst pair of ts not
[03:53:12]  just do memorization for web framework sounds like jumping the shark and then uh lauren tan you know works on the react team at facebook said doing it this way is hard mode
[03:53:22]  but it speaks to react principles absorbing complexity so product code is easy to understand and change in isolation the compiler is an extension division use standard js values idioms without comprising
[03:53:29]  too much on other things right so like this is one of those things where i feel like like like when you're already at the 80 20 split and you're like you
[03:53:39] 're like okay we know that that last 20 is really hard to get but we we feel like we've exhausted everything else we're we're just gonna like pay the 80 cost
[03:53:50]  for the to get the last 20 right like that that's that's where we are in the cycle here um it's like it's like it's time to approach the
[03:54:01]  hard problems things that have less return like absolutely but like but have the ability to like like like smooth out the edges you know requiring a build is already duplex it's
[03:54:31]  funny joe you make me i've got i was looking at my articles and i know this a little bit of a tangent but i have plenty of these unpublished articles
[03:54:42]  that i just think maybe i should just they're they're like opinion pieces i should just uh publish one of these days because they're like what you said there just got me
[03:54:49]  thinking about it two-way binding is a two-way street whole article about that dude to do never released it i wrote this one uh when did i write this one
[03:55:00]  about a year ago looks like i wrote it like march 2023 custom javascript ast transforms are irrelevant as ever this is talking about no build is a myth and how it can
[03:55:13]  never how it just can't compete um that was that was it looks like july 2020 2022 evolution over revolution talks about design principles anticipating rewrites value of simplicity right
[03:55:31]  simple over easy i don't know i never i just never released these front-end platitudes you know talking about when we get hooked on like short statements that sell it
[03:55:44]  but don't actually that are actually not even true like they're actually not even close to being accurate but like that's what everyone repeats long after the technology is there like virtual
[03:55:56]  dawn is faster than the real dawn you know yeah maybe i should publish something the fallacy of universal solutions yeah i don't know maybe maybe maybe thinking marco oh 2021
[03:56:18]  i don't know i've got like five articles that were just kind of like sitting here really look forward to debugging this compiler code really look forward to seeing you know
[03:56:41]  i don't know if you're not going to be able to do that really look forward to seeing you know i don't know if you're not going to be able to
[03:56:44]  do that really look forward to seeing you know i don't know if you're not going to be able to do that really look forward to seeing you know i don't know
[03:56:47]  if you're not going to be able to do that you know i don't know if you're not going to be able to do that you know i don't know if
[03:56:51]  you're not going to be able to do that you know i don't know if you're not going to be able to do that you know i don't know if you
[03:56:55] 're not going to be able to do that you know i don't know if you're not going to be able to do that you know i don't know if you're
[03:56:59]  not going to be able to do that if you've ever seen the cover you know it is with uh crossing the chasm i fred i think sent me this book
[03:57:08]  at one point he thought that it would help me understand how to find success but if you look at the actual cover of the book it shows the the classic adoption curve maybe i
[03:57:22]  can find the image i can blow up the cover no it's just going to be small everywhere but can we blow up this image you know i love all you guys but
[03:57:47]  the truth is you guys tend to live in this front zone here everyone who watches a stream is probably over here where they sit on the adopter sure at work they might
[03:58:00]  do something but their personal interests they're innovators they're early adopters right um they that's why we have so many people build their own frameworks are involved in open source
[03:58:10]  here you know um talking here right we were just talking about joe who uh creates loom which is a uh web component library built in solid that does 3d does
[03:58:24]  all three like does 3d rendering with web components crazy library so like you know you know we've we've already mentioned a few other people already in the stream so the funny
[03:58:36]  thing is solid solid has been trying to figure out how to jump this gap for a while here see whole product solution this is why solid start has been so important because it
[03:58:51] 's how you show that you can cross this this gap right people the the bar for this kids keeps on getting higher and higher right the shift change the thing is react you
[03:59:04]  know so you know a lot of us frameworks even svelte is like you know just kind of getting its latches on here reacts kind of here but they're they're
[03:59:14]  struggling with like i still use java so they're trying to figure out how to get here i mean it's crazy when you consider how popular react is but when you look
[03:59:24]  at the whole entirety of of web dev you know how many sites are react versus jquery or whatever like like they're definitely they're in a point where they actually
[03:59:35]  have you know a lot of this market in fact they're losing this side now to a certain degree and they're they want to cement this area and you know even get some
[03:59:48]  of these guys and this is the scenario we're in here like if you look at the under the curve sides this is not even properly represented this area is so much bigger than
[03:59:58]  this area right all right all right so always with the hard truce some are invaders some are unemployed uh um yeah big yeah i was just getting there sorry i
[04:00:35]  maybe there's a delay it's because the total area underneath this greatly exceeds the other side like like like like the volume here is exponentially bigger than these yeah couple orders of
[04:00:51]  magnitude bigger yeah yeah yeah couple orders of magnitude bigger yeah green is php yeah i mean yeah i mean yeah i i guess it's all their own chasms
[04:01:20]  their own challenges but yeah but yeah essentially this is i'm just kind of pointing out here this kind of thinking diagram is why react is shifting i think over time because they have
[04:01:34]  much bigger fishes to fry than us we can sit there at the front of the curve and be like look our stuff is so much smaller and faster and better and we might
[04:01:44]  even be right but like who cares so you know it's awesome to see this whole arc with react um in a lot of ways the fact that like me someone who like
[04:02:05]  goes on the record to say i love react it's getting to a point where i'm like going oh i'm not sure about this anymore it makes me uncomfortable means react is
[04:02:14]  in a good place you know you know it's fine they'll they'll leave all the people with like-minded to where i'm at you know to come and use
[04:02:26]  solid or whatever but yeah but yeah but yeah yeah react is still growing at an alarming rate it's not slowing down there's so much volume in that area right right right
[04:02:39]  right so anyway it was just interesting observations um about growth and where things had anyway uh let's keep on going let's keep on going here we go are we ready to
[04:03:05]  talk about angular and wiz we're going to talk way more about angular and wiz next week um because we're going to have jatin from the wiz team friend of mine
[04:03:17]  come and share all his wisdom about wiz he's been working on it for several years now and uh uh he knows his stuff a lot of people hadn't heard of wiz
[04:03:27]  before this week a lot of you have because misco has been citing wiz for ages now talking about quick because it was the framework that inspired quick but but you know all
[04:03:44]  this wisdom sounds like a wiz kid yeah well the funny thing is if you actually see jatin's username on twitter i think it's wiznastics yeah people want to
[04:03:57]  know what's up so let's talk about it because i am a little bit closer than this i saw this actually even came up like on an internal feed at work where people
[04:04:07]  were like oh this angular wiz thing does this mean anything for us and um yeah let me talk a little bit about this because not that i'm officially affiliated with the project but
[04:04:17]  i know the people in the teams i've been talking to them about it this for months i may have accidentally leaked that this was happening on stream live last week last week
[04:04:27]  you guys may have seen that i didn't know that it was a leak but if you remember um that long conversation we had with uh with adam racket where i was just like
[04:04:38]  signals are the future signals will take over the world blah blah blah you just don't get it you know being all melodramatic um perhaps uh where is it where is it where
[04:04:53]  is it where is it where is it yeah if we get down to the very last part of the thread three solves everything four i think i cut off early when i was
[04:05:00]  reading it out loud but i got here i'm like look maybe you don't need it maybe it isn't necessary so get a second opinion ask richard ever why they're
[04:05:07]  taking their frameworks felt and view this way or misco how it is what make quick possible jason why preact side step on react shadow why angular is going to migrate
[04:05:16]  their whole community or how they see a future to merge with wiz which powers google search photos of gmail it just goes on i don't typically like shouting it out but i
[04:05:24]  figured after eight years people get it maybe they do yeah so i i don't i don't i didn't realize i didn't realize i didn't really think i guess
[04:05:31]  i might have accidentally let this one slip um last week um i didn't know if it was exactly a secret if you actually look at that uh jadden replies and he
[04:05:43] 's like yeah signals is what makes this possible um so i i was like okay maybe it's okay yeah thanks for coming by today um and yeah i mean the the
[04:06:01]  gist of it and i think i showed this on stream before is like you there's basically a path to resumability misco was right that current frameworks can't very
[04:06:16]  easily be resumable but if you fully get into signals then there's a path to resumability it's like a hop step you like first kind of got to get
[04:06:24]  into to that to get to the next stage you need fine-grained reactive rendering and then you get into resumability wiz did this though without resumability without
[04:06:34]  signals they had their own kind of approach and jadden's going to talk to us about this historically um and it was kind of difficult to use i don't want people
[04:06:47]  to get strong wiz was the first like it is the resumable framework it is the the blueprint for this stuff but the dx was nowhere near what we'd expect for
[04:06:58]  a javascript framework and it's been incredible work here when they realized essentially that signals were the bridging gap to get the dx that they finally wanted with wiz after all
[04:07:10]  of all of these years um essentially it's it basically gave them that mechanism and angular was working on signals because you know as you know they had the interest in it and this
[04:07:22]  started this kind of thing i i met last fall with jatin alex pavel the whole you know angular signals team with and and wiz team and we we discussed you
[04:07:34]  know what problems we were facing what we were thinking about in terms of the future we we talked a bit about async flows about concurrency a lot of these kind of
[04:07:43]  ideas it was right after i wrote that hack md actually um because i was like we were very much on the same page on a lot of these kind of problems so it
[04:07:52] 's not surprising and with the angular team which and wiz team and whoever else is working on frameworks at google you easily have several little dozen people that can work towards making this
[04:08:07]  thing a reality so yeah it's going to probably take a bit for it to completely merge and what we're seeing is on the first side wiz adopting signals which is actually what
[04:08:18]  they're talking about here because youtube um they've been trying to get better performance on youtube so they've been trying to bring wiz in youtube was originally written in polymer uh
[04:08:29]  web component framework yeah from google um and they were bringing wiz in to improve the performance but like the dx thing was a challenge i know that some wiz had adopted jsx and
[04:08:41]  they're doing almost like react type rendering for a bit not quite like it was still resumable but it was like it was like with uh like more like they're they
[04:08:51]  were trying to make compromises so the developers would want to work with it and it was getting mixed results um and my understanding as i said general clear it up next week
[04:09:03]  is that wiz or sorry is that signals basically help them find that golden path so to speak i i love watching this talk not because yeah it's it's it's just right
[04:09:16]  here takeaways performance by default simplicity maintainability the they're they're talking about signals here and the fact that that is like just the expected headline is so awesome to see like
[04:09:29]  half of this talk is talking about how great signals are um which is which is really really awesome like they fully embraced um embrace this you guys are talking about what time it is
[04:09:46]  4 a.m wow um yeah i mean it is on the 80 20 thing but it's not as far off like i it's a performance optimization that i feel can
[04:10:03]  be done without without impacting hopefully if it can be done without impacting the code you write i think that's the important thing here um i am worried about transparency but i i think
[04:10:19]  it is something that's on my list i think there's a lot of ways you can take um reactivity if you have an async reactive system that understands like can
[04:10:29]  that's possible like i was showing with the like throwing and create async then there's a lot of capability that you have in being able to like control that the other part
[04:10:42]  is the serialization this is why it's quick version two they're working so much on serialization they have to prove that that initial serialization cost during server rendering is
[04:10:51]  worth it because that's where a lot of expenses like you are trading execution for bandwidth here and if you talk to anyone bandwidth is probably the most expensive thing for the page load
[04:11:03]  ultimately serialization problem is the problem we need to solve so i'm going to focus on anything that reduces serialization execution over execution probably that's why i was interested in
[04:11:15]  server components i think there's a potential of server components to actually solve serialization i think that it's way more important than than um than necessarily the raw performance aspect we need
[04:11:29]  to make sure that um we don't need to like we that we can keep data on the client and the client and data on the server on the server yeah um simple
[04:11:41]  versus easy i talked about that a ton last week um to be fair that i mean i didn't talk about it there's islands in solid start they're just hidden behind
[04:12:05]  an experimental flag you can just go on and turn it on the solid start talks are in islands but that's a whole other thing but okay i i think i think there's
[04:12:18]  a lot like just to hear the angular team talk about signals was just like it was a lot because it's like it's this is like the reality we live in now
[04:12:29]  now which is incredible um more than even like this news which is also incredible i i i think that it makes a lot of sense to angular because they're enterprise the type of
[04:12:42]  stuff they're doing zoomability requires like it has importance to enterprise but like there's a lot of pieces it's the people in the middle of the graph that probably don't
[04:12:53]  care about presumably as much um yeah so i'm i'm i think that there's like angular is continuing the show that they're they're like serious about the future and
[04:13:10]  i think this is really compelling um honestly so it's so funny people are like oh is this the end of angular no i my gut is angular more absorbs wiz we'll
[04:13:26]  see how it goes but the but just because but on but on the other hand angular also changes a lot like but angular is already changing so dramatically solid and react as i
[04:13:42]  explained last week's stream are not going to merge they're not in the same zone at all the most similar framework to solid is quick to be fair um i i think uh
[04:13:57]  actually which reminds me quick i saw shine in the chat i i didn't see you guys announce it i was going through my my metrics like i do on a weekly basis
[04:14:07]  and i saw the quick hit 20 000 stars on github earlier this week um and yeah i mean this when you consider that no one knew what zoom ability was a couple
[04:14:20]  years ago um i mean to be fair when i was working on marco we kind of come up with a similar thing but we didn't have a name to call it and
[04:14:27]  when misco says like this is resumability we're like ah this is the thing now that it's as much of a vernacular you know that people are excited
[04:14:37]  about stuff like angular wiz i i kid you not a few years ago if someone said like angular plus wiz were merging i don't think anyone would have cared you know like what
[04:14:46]  does that mean what's resumability what but the work that quick did about getting out in front of it and showing what was possible is like why we're even talking
[04:15:00]  about this right now right like i like wiz would it could have stayed internally inside of of google you know a lot of things are like that um i think as i said it
[04:15:15] 's a combination of many things but putting room zoom ability on a map on the map um definitely is what quick did so i i i think i think a big shout out
[04:15:26]  deserving there okay fine the most similar to solid is felt five it is almost identical okay fine you you win greg yeah so five and view vapor are actually yeah i i i
[04:15:43]  yeah okay fine they're like basically identical yeah those aren't out yet but yeah very soon yeah it was mitzko's vision for angular but and it's so funny
[04:16:09]  if you watch the talk where he introduced resumability in 2019 at ng comp people were basically almost apologizing for him like they were like they're like the other guys
[04:16:22]  were like oh yeah don't worry angular is not going to change that crazily this is misco and his crazy ideas sounds really cool wouldn't that be cool in the future
[04:16:30]  too what do you guys think yeah like at least that's the vibe i got from it he he came completely out of left field i understand this was a framework that didn't
[04:16:41]  even do hydration at the time like the they serve they serve they server rendered and then they deleted it all and client rendered it like and he's like he's like talking
[04:16:52]  about like resumability um yeah but yeah i i mean i haven't even looked at this i posted this like right before i started streaming and it it looks like people
[04:17:12]  have caught on so yeah this this this is this is awesome to see um yeah no the angular has way too much recognition everywhere that i don't yeah my my um what
[04:17:34]  i'm imagining is they'll have the ability to optimize angular under certain cases that like essentially yeah it'd be interesting i want to know i can't say definitively i want
[04:17:48]  to know what jadden thinks i maybe this is talking about the future and that's like you know not to be discussed yet but you guys can come next week and
[04:17:56]  bug him about and see what he says well the thing is astro doesn't care what you use there so i doubt they will add signals so they'll just be like use
[04:18:08]  whatever library you want it doesn't what's lovely about astro is it's like basically like php or rails they don't care what you do in the browser at
[04:18:18]  at all so um yeah i doubt they'll ever add their own signals implementation or like there's no reason to cut off the others so to speak right like so like you
[04:18:37]  know if you yeah you can basically choose any signals library and have them talk to each other um where do i want to go next okay yeah let's talk okay there's one
[04:18:58]  more thing but maybe i should leave it till next week i saw this post from dimitri and he posts very hard-hitting but generally speaking very like thought like
[04:19:14]  very critical but like also very you know true statements you know and he he basically wanted to call google out on the patting themselves on the back thread essentially sarah announced
[04:19:30]  anglers merging with wiz let's let's just read this thread for a moment in the thread she makes claim that wiz power search workplace it does and youtube and that the merge
[04:19:41]  will bring impressive improvements to anglers performance due to wiz yep right make no mistake the amazing performance of youtube looks like this three seconds to render an empty page 11 megabytes
[04:20:04]  of javascript blah blah blah blah keep in mind you read about this so we have youtube's own engineering leader literally responsible for the abysmal performance described above congrats
[04:20:13]  great milestone see we're gonna have jadan on here next week but i i hope that's why i'm covering this week because i don't i then we at chrome
[04:20:23] 's engineering adios monitoring graduate years of work at youtube miserable place i think this is the right call for both parents that's the future the wealth recess graduates youtubers em from technically
[04:20:38]  great both frameworks bring strong complementary value propositions the table instead of trying to see who can copy the other one better where if we leverage these are unique that's a google
[04:20:47]  dev expert blah blah oh shy okay interesting yeah i didn't even realize you're in this this thread shy angular writer gdes web performance thing blah blah blah but continue pat
[04:21:10]  each other in the back while destroying the any semblance guy so his point was that youtube has terrible performance the interesting thing is i think youtube had terrible performance before anyways we
[04:21:21]  know that whiz powers google search and google photos and those are performant apps or at least i know search is 100 percent i what what i think what we're i think
[04:21:34]  i think it's interesting because if you go on youtube someone was doing this after the announcement looking they're like isn't this all web components it still is i don't know
[04:21:48]  which portion um wiz has improved i'm gathering they basically got in there and allowed for a certain uh amount of like loading time improvements but yeah i guess i guess the interesting
[04:22:02]  challenge here is question is is they they have shown the improvements but it makes you wonder how bad things were before that's at least my i think it's my interest here
[04:22:20]  i think jadden ends up responding somewhere in this thread i saw it here um but it's it's it's it's it was an interesting look here because he's
[04:22:31]  basically saying there's nothing to celebrate um i don't know i do wonder about the challenges of trying to build the stuff out of scale because i heard it from the other
[04:22:48]  side when i was talking about like the challenge of like getting the youtube devs to want to use wiz like in terms of the experience um because like it didn't have great
[04:23:00]  dx originally and it's like how much are the platform engineers like the people who are working on chrome or all the people mentioned in this thread um responsible versus the product engineers
[04:23:16]  that build it every day it's an interesting tension like this is something we faced at ebay uh to a certain degree where like developers wanted to use react and like you
[04:23:29]  know why we couldn't use react and but it's like at a certain point the management wanted to use react as well because the developers were unhappy but the truth matters even
[04:23:45]  if you use marco you know we'd look and be like oh my god what are they doing right and and this is the same in every company i'm not trying to
[04:23:54]  like you know i'm just saying like i i think i think the challenge here is actually building stuff at scale with that many developers trying to work on the same project and
[04:24:07]  i don't know if it's even a technical issue anymore which is interesting but yeah i i don't know this is it is it is hard when you like are pushing about
[04:24:24]  technical performance things and then you don't how do you deal with like like how do you how do you measure that or show that at the community way right that that does
[04:24:34]  it because they actually had an example where they said like this improved this loading time 60 but holistically you know what's the impact of these things google would know but it's
[04:24:46]  difficult when you're an individual developer out here trying to verify anyway i don't know it was it was an interesting thread um right the the question is search is three meg
[04:25:11] abytes of javascript so the argument is you can build a smaller search perhaps but when you think of what search does and what it's capable of and the way that it
[04:25:21]  loads everything it's like ads consideration all those things it could be a lot worse i know that's not saying much but it's very easy for us to be like oh
[04:25:33]  well i just built my example and it's way faster right um which i mean maybe this is the argument that you know people using and maybe only dx matters but i i
[04:25:46]  think i think i think it could be a lot worse like the whole reason wiz exists is because it like lazy loads and can selectively control the different javascript that gets
[04:25:56]  loaded into the package and only run the javascript that's necessary when it runs there's a whole bunch of other garbage on top of that i know this from ebay
[04:26:03] .com between the way advertisements work and other kind of add-ons the core search experience even given that is still you know pretty performant if they could just gut it
[04:26:17]  and start over again i don't know how long before i just hit this anyways are people afraid that we get the result of dx of the performance of angular well if the
[04:26:31]  performance of angular this would never fly uh you know like for what they need it for wiz is like very similar to marco there's a real performance shelf that they care about
[04:26:40]  yeah i mean to be fair this thread seems hating i think that what they're trying to point i think what he's trying to point out is that like there's a whole
[04:26:52]  echo chamber on on twitter about these things how does that reflect with reality i don't know man i figured rated after painting i don't know if it gets react yeah does
[04:27:06]  react ever claim that it's performant see that that was that was cheeky there that's not called for i'm sorry it's just like this is the problem with this
[04:27:21]  kind of stuff and it's the reality what the best that anyone can do in these situations generally speaking is is uh is incremental improvements in certain areas where they can just like
[04:27:37]  just make things a little bit better right but i mean is this an opportunity for some newcomer to offer a better video service thing with like a nicer ui or something
[04:27:49]  i don't know like yeah yeah that that is true like the the he was asking to get blocked yeah there's also this i feel like the there's probably like the
[04:28:17]  people google there's you know like made here syndrome concern you know that being said i know how amazing the tech is a whiz and we'll hopefully understand that next week
[04:28:33]  but yeah yeah it's interesting though because you look at the efforts the google chrome team goes to improve performance you know it's incredible they try and work with everyone to just get
[04:28:46]  it to that next level yeah no i don't think so this is a problem with developing and scale in the way that our stuff works the theory at least is that with
[04:29:03]  something like resumability and fine-grained rendering signals you can isolate the impact that any one developer has on how crappy the experience ends up being yeah you can look
[04:29:25]  at one large app with no idea how it's in plan and blame the framework yeah definitely that's the thing it's you have all these platform engineers trying so hard to just
[04:29:34]  make things better easier for things and then not to crap on the product guys i've been there too there's a gap there but then it's like then you have to
[04:29:43]  you have somebody else that's telling them that they need this this and this and like these things aren't always aligned with each other i mean depending on the type of app
[04:29:57]  three megabytes of javascripts is pretty bad i mean here's the question though you guys all know that i've run basically i mean let's look here i
[04:30:19] 'm pretty sure if i go to my network tab we'll oh not on this computer i basically run perma disabled cache right and like okay i got 1.2 megabytes
[04:30:30]  here but my point is oh and then some more stuff but my point is most of this is not critical blocking it's just like this isn't even let's let's
[04:30:43]  do something like this is an mpa every single search is a page load right this javascript might load in but you can see most of it's lazy let's
[04:31:03]  actually look at what loads in initially here that probably isn't important first up this is vitals these are my these are my uh let's actually open this in uh in inc
[04:31:16] ognito window because i'm i'm interested search query crossing my guess would be that the critical part of the page is delivered in the first 500 kilobytes the these
[04:31:49]  three i think everything else after probably doesn't matter anyway i mean we could look at okay so first thing definitely streaming going on see the html hasn't even all
[04:32:19]  delivered and we're already processing stuff right what do you got here fonts coming in we have what's this javascript this looks like the main bundle i'm going
[04:32:53]  to see the lcp is already done here so they get the majority of the content at 400 milliseconds in this run before that yeah so yeah obviously ssr and then
[04:33:03]  main bundle what's this yeah i don't know what's happening during this script running time this is the part i'm most interested in i feel like there's a bunch
[04:33:31]  of work happening here i don't know it's hard to tell when you know when the interactivity is actually open it's going to happen when the interactivity is actually
[04:33:36]  opened like i'm gathering because the way wiz works you could probably interact with the page anywhere around here but it's like then what the hell is all this other stuff well it
[04:33:49] 's all the other stuff anyway it's enough looking at that i think i think building any app at scale is difficult demo apps are easy even startups to a degree are
[04:34:18]  easier once you're pushed to actually like solve problems at a certain point it becomes way harder for any framework the framework is only the starting point this is this is actually why i
[04:34:30] 'm so big on the approach we've taken with signals and these primitives because i expect this is why i never let the meta framework like it to a certain degree when
[04:34:40]  you get to the real push comes to shove all these like opinionated things where you think like okay this is how you do it it all goes out the window because you ultimately
[04:34:48]  just have to build what's fast and what works and like like you know it goes beyond what like that the happy path at a certain point which is why as i said i
[04:35:03]  like things like signals because i'm just like look you have the pieces if this part isn't optimal enough like don't do it the solid way necessarily or the react way
[04:35:13]  but you still have the you can interface with it in a very natural way no matter what you're doing or however you approach it right like you give people the building blocks and
[04:35:25]  they aren't trapped in because you know react re-renders now you're screwed you know i mean you could always step out of it but like like getting back in is
[04:35:33]  that much more of a hoop whereas like if you're like okay this is all i need this like it just makes interfacing with the boundaries of what's expected much i
[04:35:43]  think easier if you if you give people those building blocks yeah no we we can we can ask jadon about about about that definitely okay we can we can we
[04:36:18]  can ask jadon about about about that definitely okay anyway um i think i think we're we're done on on on this topic um let's talk about solid start release
[04:36:41]  um which isn't the other thing um attila over at react paris had some fun with it i'm not gonna spoil anyone that's some people figured it out anyway
[04:36:52]  figure it out here's the announcement so i was like ryan would never say figure it out i thought that was actually the funniest part about this are those notifications uh but
[04:37:14]  um yeah uh solid start release um it's been a long time coming and honestly this was a big thank you this was a big thank you message to everyone involved uh i
[04:37:30] 'm glad that people have responded well to it um and taken notice uh i wasn't sure you know honestly like when i started this i was like man this is just too much
[04:37:45]  work and at many phases during this i was just like how are we going to maintain this because the important thing for a library of our size is being able to maintain it
[04:37:54]  and and you know with our user base we have a fraction of the resources that other frameworks have you know like we've we've arguably out of the most yeah i mean
[04:38:15]  the number of people who who get paid full time to work on solid is you know basically is is me right um we've been using grants and stuff we get a lot we
[04:38:31]  get money for our open collective to sponsor fellowship programs we have tons of people volunteering getting stuff done but it's like it's it's why we got jammed up a
[04:38:40]  bit on getting the signal stuff it's why there's you know it's still work to be done it's it's it's it's hard you know a lot of frameworks
[04:38:51]  these days you know don't have a lot of resources a lot of them maybe only have two or three people working on them but two or three is still two or three times
[04:38:58]  the amount of you know potential output that you know you know it's significant um there are frameworks like view which have shown that this open source model can work you know but
[04:39:13]  even then nuxt you know has a different set of people working on it and we were trying to do solid start and solid and i mean it's tricky easy sell it to
[04:39:28]  shopify i don't know in this market if anyone's buying you know i would love to do whatever could to secure this the future of solid i mean that's no
[04:39:38]  that's no stab at netlify or anything it's just like where we're at you know if if people if there's companies out there that want to see solid getting
[04:39:51]  further i mean you know reach out to me um it's like i can be nothing but grateful for those who have helped us get to where where we are it's it
[04:40:04] 's it's it's it's challenging right like we've we've done a lot of really good stuff we've seen the work at solid has influenced the rest of the
[04:40:15]  ecosystem when i started this i thought that no one would care and now other than react pretty much every framework's on a trajectory path of basically doing the almost exact same stuff that
[04:40:28]  we're doing like like and it's not just like the signal stuff i mean that's obvious it didn't stop eight year years ago or seven years ago uh i guess
[04:40:40]  solid technically came out almost exactly six years ago so i'm gonna assume people weren't familiar with these techniques before solid uh open source but let's see it didn't stop six
[04:40:50]  years ago you know when these rendering techniques were made continue to work with solid start even i i mentioned it in the beta we got a lot of you know influence from a lot
[04:41:04]  of different projects here you know recognizing exactly what remix did well looking at the different routing patterns i think like our routing was uh inspired by nuxt initially and um server functions
[04:41:20]  um or sorry api routes were inspired by spholtkit um we kind of took our own take on server functions or outdata route actions but the optimistic ap
[04:41:35] i came from remix completely right and uh you know all of these were really big influences but on turn i feel like we've influenced you need to have an impact like the whole
[04:41:50]  server function thing um i came out i believe first in solid it proceeded next proceeded quick proceeded whoever else um that kind of kind of joined the rpcs with the actions
[04:42:05]  um i i think stuff like our work into single flight mutations i already mentioned we're i'm i think remix is already working on it um so like there's a lot more
[04:42:18]  that's here to to go um but like like honestly i can't picture getting here without what everyone else has contributed to this and it's always like a bit of an
[04:42:38]  uphill battle but like we keep doing it because we're passionate about it right the elan for call milling exchange rewriting twitter so solid to join to this note i
[04:42:59]  haven't been paying attention what's going there yeah exactly the the view i think it's probably the community most similar on this kind of trajectory where they kind of scattered around
[04:43:16]  and use open source to try and get there but as i said like even stuff like nuxt isn't wrapped in but then like i'm sure if it wasn't evan
[04:43:26]  would evan's been amazing and you know like getting like beat teams and all this you know different stuff um both they they're our biggest they're they're our biggest
[04:43:46]  open collective sponsor and they fund me which is big part for funding solid like there's nothing else i can compare honestly netlify has been um it's been amazing to
[04:44:01]  me um but i mean as i said like it's hard you want it you don't one developer's great but you at a certain point you want to be able to grow
[04:44:09]  with it you know like i think there's brussell has three developers i think next has i don't know how many one next at least you know at least in
[04:44:22]  the close to 10 range i think maybe a little under i don't know maybe six six eight i don't know um and then you get into stuff like facebook itself the uh
[04:44:34]  work on react yeah i i i say dozens but like i'm i'm i'm pretty sure the number is over for these teams at the you know like angular google i
[04:44:44] 'm sure the number is over three but probably under 100 or under under you know like it's it at that point to me that's almost like uh exponential right like it's
[04:45:00]  like the difference between one and two is huge the difference between you know what i mean like because that's double your effort the difference between 32 and 33 not so much no
[04:45:12]  one solves the double data problem today um i think there's a solution to it but my point here is this release um doing salt start in general is very ambitious of us
[04:45:36]  i knew it was the right thing to do but it's taken very long time not just because i'm a perfectionist it's just it's important um and there's like
[04:45:49]  if it was me by myself it would take another decade like so many people have been involved in this project that you know doing their little part has made such an incredible difference
[04:46:02]  and um like i i tried to grab everyone who who did any prs but then i realized after i'd use the github api to get all the prs
[04:46:16]  that there's a lot of prs that we closed not because they weren't good prs it's just like we saw them a different way or we did that so
[04:46:23]  i i went through the list one by one afterwards um and tried to find anyone who had closed prs on that i didn't merge who weren't already in the list and
[04:46:31]  add them to the list um and like i really tried not to miss obviously people report issues and stuff and well and that would be kind of beyond my feasibility to be
[04:46:45]  able to to pull all those names down but i really wanted to add everyone unfortunately github um cut me off at 200 but yeah the this is everyone who who submitted
[04:47:01]  or um submitted a pr even whether it's merged or not on the repo and obviously all these companies as well the big thing for me is recognizing that not all these people are
[04:47:14]  associated with solid anymore and not all these companies exist anymore um some of them went under because you know the economic there's startups or whatever but they still put their money and
[04:47:26]  their time in to make this possible and it was and it was cool to see because everyone got mentioned here so when they the release came out they they they they saw this
[04:47:46]  i that's what i wanted to accomplish here um this this release is called clown town i was or welcome to clown town um which is a little bit aggressive perhaps but it was
[04:47:57]  important to me i i don't know i don't even know if people remember this reference even if if they even know i i didn't rehash it in here i didn
[04:48:08] 't need to drag things through the mud anymore but it was important to me because at one point solid star project you know publicly was like you know called clown town essentially what we
[04:48:22]  were doing over here and it had a big impact on people working and maintaining the project at the time a lot of people you know everyone we weathered the public you know relatively
[04:48:35]  well i felt and we represented ourselves but when you're working open source and you're not making money and you're not you know like at some point you just kind of
[04:48:44]  go well is this worth the headache do you you know do you pull away do you prioritize that other things and for me i was just like okay no like we got we
[04:48:57]  have to show what what you know it kind of focused in on me even harder to make sure that we reach this goal and that we do things better but um you know not
[04:49:09]  everyone ultimately came out of the the other side of that i remember one of the other ryan remembers this yeah i'm i mean that's why i didn't want to
[04:49:24]  be too too uh descriptive i didn't i didn't want to like necessarily you know um you know point fingers at another project or whatever who as i said made this was
[04:49:42]  a this was like what a year and a half ago like we're all in a different place now um but it was a formative experience for people on the solid team not
[04:49:55]  just solid start but it actually made a big difference you know to to you know realizing where we were in the solid team that was i've never experienced public scrutiny like that
[04:50:09]  you know randos not even randoms like god people like trying to at like matt billman and the netlify crew and being like trying to blame them and
[04:50:22]  trying to like i don't get me fired i don't even know it was like shame on you and all this stuff and then you know called into the integrity of the whole
[04:50:34]  team so that's why i named this release this because it's kind of like a nod to the fallen heroes so to speak um everyone who got us here across the finish
[04:50:50]  line because i don't want to bring this into solid 1.0 release i i want i want people to celebrate of what they can accomplish the way they can build on the
[04:51:00]  web just how amazing the technology is and the dx and every bit of it and i'm maybe i need closure a bit on you know the aftermath on all this we never
[04:51:14]  really talked about it we talked about a bit on stream i guess or maybe i was on guest stream but you know this this is how for me at least we we we
[04:51:28]  know we made it we we did it we we started at one place we learned we conquered we succeed right to nikil's you know me good yeah he's he's other
[04:51:50]  than myself like he said he's the both of the top contributors there nikil nikil this is everyone on the on the you know you know and this is something the
[04:52:02]  original docs work yeah everyone on the first like five or six lines probably did a freaking ton of work here at at some point because i think it actually ordered in in contribution until
[04:52:15]  i started like adding stuff at the end i do feel bad there's a few people down here that would get special shout out like uh paulo and devrb and
[04:52:21]  i think there's another one in here they worked on the islands demo on that branch that took forever to get merged and when it got merged it got merged in such a messy
[04:52:31]  way that i i think i lost most of their commit history these guys did incredible work to prove the the movies app you know which is like an incredible demo um i i they
[04:52:43]  didn't get as enough recognition as they deserve i found their names through closed prs where when i didn't merge the islands demo and then they were still working on it
[04:52:53]  even you know afterwards and i like couldn't merge the branches i found them on those closed prs and added them to the list but they did way more um for that
[04:53:02]  than what actually shows on on on on this like it was it was incredible to go over the list because i remember lots of those prs and suggestions and things where people were
[04:53:14]  excited about the project for a while and wanted to help you know uh whether it was like little document changes or like you know work on the cli or you know you
[04:53:27]  know yeah there was like phases like where different developers are coming in and do you know a small handful of prs to get their thing working or whatever you know and they could
[04:53:39]  come and go but i i look at the list room reminded me of that anyway i'm sorry for the music in the present yeah we're close now there's some bugs
[04:54:00]  coming in which is good i do how many issues do we have right now yeah um solid core bug this one's apparently very hard to reproduce so that one's going to be
[04:54:13]  fun the minchi issues in terms of style counting this is someone trying to do something with solid that doesn't really work and i just haven't had time to tell them
[04:54:22]  figure out what the right solution is this is weird but completely avoidable um this is probably a vinci bug vinci vinci yeah pretty good place honestly yeah like the
[04:54:49]  clown thing i'm done talking about clowns i this this i know this will be fun for the next like week or so um i just it was important to me to to
[04:55:02]  finish that cycle thank you anyway um yeah i'm sorry this is a little much as uh it was uh it was it was it was important release i've it's been
[04:55:33]  three years i kid you not it's been it's been three years um we it's funny last year we were celebrating with astro right you know they're like yeah
[04:55:45]  three years since the first committed astro um solid starts first commit it's probably around the same time i mean let's let's let's look um view two i mean there
[04:55:59] 's the beat community getting in there again our sir our sir our sir beat two there's the view community getting in again to show us how the their work on developer tools
[04:56:11]  are just completely game changing in terms of what we're capable of especially for library authors i i give them top marks on that side yeah when's this initial commit okay not
[04:56:28]  quite next week april 1st i i i i was playing around with this before but obviously i didn't publish it up yet but yeah like basically around the exact same time
[04:56:40]  that after was starting i was like yes i need an ssr solution look create solid like the stuff's already actually in here at this point so yeah i i had
[04:56:53]  started this around the same time around the christmas break of 2021 it was before solid 1.0 even if you if we actually look at the package json here what version
[04:57:06]  of solid were we on um see if i can find it do these examples package json solid js 0.25 there you go so yeah i mean we had everything we
[04:57:23]  need already back then we had out of order streaming suspense on the server um you know transitions you know why not thanks shy oh this tweet is from an hour ago i
[04:58:03] 'm going to open this up off screen just because i could decide what i want to do with it oh man that did that one sentence oh okay i'm going to bring
[04:58:34]  this up because i missed this did that one sentence make it somehow did that one sentence make it somehow on this we have a complete docs rewrite but that the the the opening
[04:59:01]  sentence somehow made it how did this is even possible that the the opening sentence somehow made it how did this is even possible what's that what's that what what what what
[04:59:16]  what what i i i i i don't even know we literally deleted the project and started over from scratch that one sentence somehow somehow still persists here that's crazy
[04:59:57]  that's no i mean he's right i i have no idea how that that's no i mean he's right i i have no idea how that that's no i
[05:00:12]  mean he's right i i i have no idea how that i have no idea i mean at this point we're on like the third rewrite of the docs like we don
[05:00:40] 't even like this doc site is is pretty much dead um oh no it made it here how does this stupid sentence just keep on making it here how did this like
[05:01:13]  it's it's like the only part of it it's funny because like all yeah do they still do they still have it at least do they still do they still
[05:01:47]  have it at least like i honestly have no clue how this one sentence just keeps on it's i guess it's technically two sentences but it just keep it it's probably
[05:02:04]  like just such a well-written i i i i i wow i i have no cl the funny thing is i i guess i don't have the current yeah i
[05:02:44] 'm gathering the it's i'm gathering it it's like not there anymore but yeah yeah it's the old docs right it's just yeah it's just guides okay guides
[05:03:11]  is the guides section still here yeah let's see if it's okay okay yeah i i i don't even understand how this is possible but yeah i i i don
[05:04:06] 't even understand how this is possible but because the the the the it was moved out of our repo which is where the problem was like it was insult like uh nikh
[05:04:17] il was doing like some simple uh how should i put it like he was doing like like some prototyping in the solid repo and then they they wanted to set up a separate
[05:04:28]  docs repo and so they moved the project they got moved out of the solid repo and then other people are contributing there so i never actually saw the the stuff happening and then we
[05:04:39]  we started the project new inside the starts repo after the whole thing happened i i just don't i don't i don't know that's that's definitely uh definitely
[05:05:07]  odd i almost like want to go back through commits to understand how that po how this could possibly happen but you know we're kind of at the end of our stream here
[05:05:32]  i just i i got it there for sure i mean it's funny if it's just like that one sentence that that it's a little bit comical like it's like
[05:05:44]  but like i i just i i am i'm at a loss here because like i can't even i don't even know how many commits to go back like we have
[05:06:07]  fork solid start like like if we go back to let's say like the docs aren't even i don't even remember when that happened it was like july or something
[05:06:39]  yeah it's funny because like the whole thing wasn't actually in the repo so yeah this would be yeah this is like trying to go through a million nakil prs
[05:07:14]  yeah i don't know go to that file and check the history yeah okay you're right that's something i can do relatively easily okay docs i'm actually just going to
[05:07:26]  do it right here if i can i do have to um docs core concepts routing do i do i not have like so out of date here it's funny like bsc
[05:07:50] ode i usually have like the blame thing here i haven't updated this forever i guess i could do it on github as well but it's just packages start no not
[05:08:01]  start packages it's not packages it's the thing is docs might have moved at this point we might be this might might be this might be not advanced core concepts routing flame
[05:08:22]  Blame. Yeah, I don't know. I guess it came over with the initial commit. I don't know. Yeah. All right. But, I
[05:09:13]  mean, yeah, anyways, let's just go. So, anyways, crazy. That's a crazy way to end the stream. But, yeah, anyway.
[05:09:38]  I'm dumbfounded. But, yeah, I'm way over. I'm over time. We'll have to pick up next week. Anyway, you all have a good
[05:09:51]  night. I got to go. So, until next week, catch you guys. Have a good one.