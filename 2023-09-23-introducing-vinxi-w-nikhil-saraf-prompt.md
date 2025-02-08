---
showLink: "https://www.youtube.com/watch?v=WBH7Ewa--Qg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Introducing Vinxi w/ Nikhil Saraf"
description: ""
publishDate: "2023-09-23"
coverImage: "https://i.ytimg.com/vi/WBH7Ewa--Qg/maxresdefault.jpg"
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

[00:00:00]  No, no, no, no. I'm not late. I'm perfectly on time. It's show time. Hi, everyone. Welcome to my stream today. I
[00:00:12]  was just trying to do some last minute coordination with Nikhil. He had a late night last night. He was working on his Veet talk, which, yes, was
[00:00:22]  supposed to be already submitted. He's running a little bit late on that. And I was helping him a little bit. And we were up. Well, for me
[00:00:31] , it was nothing, but we were up to like 5 a.m. his time trying to get it going until we realized that the stream that he was recording actually wasn
[00:00:42] 't recording audio. And then he just was like, I'm done. I'm going to go to sleep, which is really unfortunate because he did a he did a very
[00:00:50]  good pass over it. For those who don't know, VConf is coming up October 5th, I believe, and it's all pre-recorded. So
[00:00:59]  lots of fun. Yeah, if you're joining on the stream now, come say hi. Yeah, we are an hour early today for Nikhil's sake. He
[00:01:08] 's streaming, joining us from India, which is 12 and a half hours ahead of where I'm at. So this way he gets to join on at 11:30 instead
[00:01:21]  of like 12:30, like after night. Yeah, exactly. Yeah. Yeah. People expect me to talk a lot about spelled ruins. We'll talk a little
[00:01:33]  bit about it. Definitely in this week in JavaScript. But yeah, we're a little bit early today. Not that that necessarily helped Nikhil. I got a suspicion
[00:01:46]  that he fell asleep this evening for him, this morning for me. So yeah, we're going to give him a few minutes to join on. We need a few minutes
[00:02:01]  for everyone else to join on. Actually, I probably should be here right now, remind people that the stream is starting because as I said, it is an hour early
[00:02:08] . A bunch of people are used to the stream starting at 12 Pacific, 3pm Eastern. We are here one hour earlier than usual. So yeah, let me do the
[00:02:21]  retweet right now. I'm going to share my screen. Quote tweet. We're live. Right. It's funny, I always do the original as the
[00:02:44]  YouTube, because it has the thumbnail preview. But then when I do the we're live, I always do my Twitch handle, which, man, I got to get
[00:02:54]  better at Twitch. It's very clear after the Primogen raid last week. Like, I just suck at Twitch. Alright, let me get that go. Let's see
[00:03:10]  if people can get past the pre-rolls. Nice, nice. Yeah, honestly, my Twitter notifications have been off the, what's that, through the roof
[00:03:19]  since the Svelte release. So funny, because we're in one of those cycles right now, we're like, solid heads down, really trying hard to work on
[00:03:26]  these new features and new things coming up. You know, prepping RFCs, proposals, talking with people, you know, kind of figuring out things. So we
[00:03:35]  have not been pushing the Twitter, we have not been pushing the articles that hard or like, promoting stuff really very hard at all right now. And then this was this
[00:03:46]  whole Svelte release was like just a huge boost to solid out of nowhere, which we'll talk about a little later. But it means that like, everybody's talking
[00:03:55]  and it's a lot of conversation. Yeah, yeah. But yeah, I'm doing pretty good. I'm doing pretty good. If you can tell, it's
[00:04:05]  been energized. I like when these kind of discussions happen. And I'm going to obviously talk about this a lot more. But like, it's incredible to just have seen
[00:04:13]  what's happened the last few years. All right, I came here for this week in JavaScript. I'm sure a lot of people did as well. Yeah, good
[00:04:28] . I'm glad you like that. It's I do I in originally I was intending the stream to go a little bit more deeper on the decisions that I was making
[00:04:38] , like I didn't get it goes deep as I wanted to. And I took a very long time getting to where I wanted to get to. The problem was at the
[00:04:48]  exact moment where I was like, Okay, now let me lay out like the really hard part of the problem, the primogen stream came through. And it was just like
[00:04:53] , I was like, Okay, now I got to bring everyone like, you know, another like, we had an okay crowd going, you know, a couple hundred
[00:05:02]  people. But then suddenly, it's like, Okay, here's here's what 1600 people, even if half of them go, which was the case, I had to
[00:05:09]  like, suddenly bring, you know, another 600 people up to speed on what we were talking about, which meant that I didn't get to go quite as deep as I
[00:05:17]  want to, because I really thought it would be interesting to get into like the actual, like, trade offs and challenges that I was really thinking about in my head at
[00:05:25]  the really micro level, like a detail level, where instead, I kind of just got to present the general problem space, which also interesting, I do like streams like that
[00:05:35] . I've done that before, I was I was actually hoping we'd get to a point where we can be like, Okay, well, let's think about this solution
[00:05:41]  and like, run it through the scenarios. And let's think about this solution, I was hoping it would be kind of like a new type of stream. But instead
[00:05:46] , it, it resemble a lot of my previous solo streams. But I mean, there's value in that as well. How much of development is playing catch up with other
[00:05:58]  frameworks? Yeah, I don't know. That's not something I've really concerned myself with so much. I've never really done. Yeah, I don't know
[00:06:11] . I think if I was an application developer, and I was like building an app and a particular framework and added new features, I think I would feel like a lot of
[00:06:17]  my application development time was like, Oh, no, now I have to convert everything to hooks or whatever the newest thing is, or the latest state library or whatever. As
[00:06:24]  a framework author, I do pay a lot of attention to what other frameworks are doing. But it's more like architecturally, like holistically, like, like, where
[00:06:33]  the vision aligns. So a lot of times, before I step into a place, I have a good idea of, you know, what makes sense for the different
[00:06:40]  types of solutions, and I can have approach it that way. And since solid, it's relatively new, I haven't been in a place where I really need to play
[00:06:47]  catch up, like catch up on lots of like ecosystem and, you know, bigger stuff. But like, in terms of fundamentally, where things are going, we've been
[00:06:52]  at the front, because we were newer, it's harder when you have users to actually not be at the front. So yeah, I mean, for us, a
[00:07:02]  lot of times, I get the luxury of where we're ahead, we're ahead. And where we're not ahead, we're only a tiny bit behind. So I
[00:07:10]  get to just look at everyone else's solutions, and then like, kind of find the right solution for us. So it's, I never really feel that pressure. It
[00:07:18] 's like, we're, because we're still relatively, it's hard to say, we're not new, we've been around for like, I've been doing this
[00:07:23]  for seven years, but I just feel like maybe the patterns are good. We haven't really ever felt ourselves caught out where we like, can't do something. It
[00:07:31] 's usually just a matter of figuring out, like, what is the best solution for fine-grained reactivity or for solid. Yeah, do you scream? Yeah,
[00:07:45]  I mean, it is, it is a bit like that, isn't it? Yeah. How do you differentiate from them? Yeah. I just, yeah, it
[00:07:54]  was just, it was just, we've been very fortunate. We were so different from the beginning, although no one actually realized it. I think they're realizing it now
[00:08:01] . I think that's a funny thing that like, we didn't, I look, from a marketing standpoint, yeah, we need to differentiate, but I can't concern
[00:08:07]  myself with that because like, people get it or they don't get it. And I, yes, people focus on that. That's not what I'm focused on
[00:08:14] . I, it's like, I knew the technology was different enough that like, and compelling enough um, that it would just, hasn't been something that I've been
[00:08:21]  very interested in. I, I suppose it's interesting now because if everyone else is now doing the same stuff we're doing, then like it, you know, maybe you
[00:08:29] 'd think, oh, how do you differentiate in this world where everyone's now doing the same thing? But like, we were doing this five years ago. Like, it
[00:08:37] 's not like we haven't moved on from there. So like, everyone's like their own pace, you know, and own place in the kind of cycle. All
[00:08:47]  right. Yes. Yeah. It's for Nikhil. Yeah. We'll, we'll talk about that too, because like, I think vibes are important. I did
[00:09:02]  a, I did a, uh, a survey a while ago and he, Rich is right. Most people don't care about important stuff when they choose frameworks. They
[00:09:11]  don't care about mechanics, transparency, any of this stuff. Like I did this poll and people said syntax was like how they chose their framework. And I was like,
[00:09:18]  that's nuts. It's like, but again, maybe like there's a lot of truth to that. Like on the positive syntax is easy. It's so funny
[00:09:32] . It's, it's one of those weird things. It's like semi easy to change. Cause it's not the hard part. Like changing an architecture is a hard
[00:09:39]  part. Changing syntax is trivial, except for the tooling side of things. It's, it's, it's, it's a challenge. But the thing is, if
[00:09:46]  someone else already built the tool, then it's dirt simple. Like, you know, JSX, like if we want to like have Svelte templates, Svel
[00:09:50] te already has the tool chain. You just go, okay, no problem. Svelte. Right. Obviously that's less compelling now that Svelte has a similar
[00:09:57]  reactive system, but like people were doing that before they're basically like taking Svelte cell templates and combine them to solid. Cause it would be faster that way.
[00:10:06]  Um, but I like, I never had any interest in that on the solid side because it was kind of like the fact that you could, cause you had those primitives
[00:10:15]  that was more important to me, but everyone has like their own gauge of where these things are. Yeah. We'll talk about that a bit more later. Yeah.
[00:10:28]  Yeah. I, I, I started splitting them off, uh, like a year ago and then I never ended up getting around to publishing them into their own separate videos.
[00:10:36]  Cause they, they often don't work completely separate from the stream. Um, they usually reference it. Um, I, I hope the timestamps are good enough for
[00:10:45]  some people. I mean, you're right. If I publish them separately, I think I'd get more eyeballs right now. Our format, it's, it's kind
[00:10:51]  of crazy to me that every week, 3000 plus people check out the stream after the fact on YouTube, not live, but after the fact, watch. And it's like
[00:10:58]  a four and a half hour stream. Like how do we consistently have so many viewers? The average watch time on my streams is high. It's like almost 30 minutes.
[00:11:06]  Like the average per watch person watching stream watches, you know, it longer than most people's whole videos are. So like we have good metrics on that side. It
[00:11:17]  makes you wonder like if it was actually in a more consumable fashion, wouldn't the channel be 10 times more popular? Maybe. But again, I don't know if
[00:11:27]  I have time for that. I'm pretty happy. Um, let me see here. I wanted to check something. Look at this 9,999 subscribers. We are
[00:11:37]  so close to 10,000 subscribers. Um, so yeah, I don't know a few more people, subscribe, like video, do whatever you need to. I would
[00:11:45]  love to get to 10,000 subscribers on, on YouTube. Um, but again, it's crazy when you consider the viewership of a lot of the streams, typically
[00:11:53]  around three to 4,000. Uh, um, let me go back and switch it to popular or whatever. Like it's, it's like, obviously these ones are
[00:12:01]  super thing, but you're fine that the vast majority of streams. Okay. I mean, I'm still in the fives or there's a lot in this three
[00:12:09]  to 4,000 range. Um, and there's only 9,000 subscribers, so I don't know how the views work exactly, but it means that out of our
[00:12:17]  subscribers, most of these people actually, you know, watch every video. So, I mean, or at least a portion of our video, which is kind of cool
[00:12:26] , you know, it's kind of nuts. Yeah. Yeah. I know. I, I, I, yeah. If, if there's any win here, it
[00:12:39] 's that I think people will finally understand how revolutionary signals and solid were and how different it is from react. Like it, yeah. Anyway. Uh, yeah. Someone
[00:13:00] 's been working on SWC plugin. The reason I chose Babel was honestly, because it like literally worked with everything. Like it just, it just, it was
[00:13:08]  just very easy. Um, you could like every tool chain in existence at that point chose Babel. It's kind of funny how it's kind of flipped back. Bab
[00:13:17] el is actually more advanced than SWC in a few places, which has made it hard. Um, the guys working on the SWC version of plugin, uh, actually
[00:13:25]  had to like kind of fake some stuff because it's not quite as optimal as the output. Yeah. The thing you ought to understand for me is I understand build times
[00:13:32]  important, but I've never killed cared about build time as much as I've cared about what the end user gets like UX, always more important than DX in my book.
[00:13:40]  Almost always. I mean, there's a scale where that triples back on you, but like, generally speaking, I care what the end user gets more than anything.
[00:13:47]  Um, which is probably why we're not as popular as we should be. You know, a lot of people like, Oh, the DX, cause that gets the front
[00:13:53]  of the funnel, all the people join on. I want to make sure that the product you build is the best possible product you can make. And that's, that
[00:13:59] 's what solid does. But yeah, I mean, I'm not a rust programmer. So like people have been playing with rust and doing that. I chose Babel because
[00:14:06]  I was able to iterate on stuff, um, as a lot faster because I can do the JavaScript stuff. Um, that, yeah, I don't know what other comp
[00:14:14] ilers are, are built on. Um, you know, if they're writing in JavaScript, maybe they're a little bit faster than Babel. I worked on
[00:14:21]  the Marco team, which had a custom compiler and they actually went to Babel just so that they get more compatibility with other tools. I don't know how much I'm
[00:14:29]  too concerned. Like if you're a Svelte user and you already have a compilation step, I don't know if I'd actually be that concerned. Yeah.
[00:14:47]  Thanks. Thanks. Here's the prop for that thing. As far as I know, this only works for client side. You can't do SSR with this yet.
[00:14:52]  Um, but they've done an amazing job, um, with the, uh, SWC plugin. Yeah. Anyways, I've killed enough time. I've seen
[00:15:00]  that my guest has actually showed up. Hopefully he's still awake, but, um, we need to, uh, let me like, give me two seconds. Uh,
[00:15:10]  just cause I want to make sure that I spell his name properly. Unlike David who made the first version of our poster did not spell his name properly. And I would
[00:15:19]  like to welcome Nikhil to the stage here. How's it going? Okay. Yeah. There is an echo for some reason. Yeah. Give me two seconds. I
[00:15:31]  just got to change my settings. For some reason stream yard is playing back my audio through my speakers, which is coming through. Let me give me two seconds. Uh
[00:15:39] , I want the speaker to be here. Okay. Talk again. Hello. There we go. That should be fixed. Right? Yeah. I can't hear the echo
[00:15:50] , but I don't know about the other people. Yeah. They'll be fine. All right. How's it going to kill it. It's been, you know
[00:15:58] , only a few months. Um, you know, what possibly could have changed in the last few months. Things move fast. Yeah, no, for sure. Yeah
[00:16:08] . I like to sprint through things instead of doing one thing for very long. Yeah. For those of you who aren't aware, uh, Nikhil Saraf, a
[00:16:18]  member of the solid core team, but also has done amazing work across, um, different ecosystems as well, working with a lot of stuff in beat with react. Um,
[00:16:27]  he's going to talk about some of that stuff today, um, involved in stuff like bling, obviously he major contributor to solid start. Um, but yeah,
[00:16:37]  this guy has been trying to make a meta framework in some sorts for the, the last few years now. Yeah. He's like two years almost now. Yeah. Um
[00:16:48] , and we're very fortunate to have him around here. Um, he kind of became legendary in the solid community because his first week of using solid, he ported
[00:16:56]  solid three fiber. Like he just like went, Oh, okay. And it was fun. It was a good task because the universal render was pretty new. Yeah. Like
[00:17:04]  we, we'd only released a month before and you're like, Oh yeah, sure. I'll just port all of react three fiber over. Was my first like
[00:17:12]  proper integration outside your own examples. Pretty, pretty much. I mean, some people, yeah, I don't think anyone really played with it. And you did a multiple
[00:17:20] , you did ink, you did solid ink, like reacting and you did, yeah, we have a whole stream on, on this actually, which was, which was the
[00:17:29]  first keel stream. It was back when I was still doing stuff very, very late at night. Um, yeah, I can't even remember. It's my
[00:17:37] , it's my sweet spot. Just, just when everybody else is sleeping. Yeah. You, you were over here at the time. So it was also your late at
[00:17:45]  night, whereas now it's my morning and your evening. I think my, my time has stayed the same. Yeah. I'm trying to find, yeah, I'm
[00:17:55]  trying to find that original stream. Cause it was great. It was, uh, you, you, it was so funny. You came on the stream after only being
[00:18:02]  in our community for like two weeks. Yeah. Yeah. Here it is. Yeah. I think, I think that was the second guest or first guest. I think before
[00:18:10]  that you were just doing solo kind of streams. Exactly. Yeah. Uh, yeah. A lot of theory and stuff. Yeah. So this is, yeah, this will
[00:18:19]  be your fourth thing. Yeah. Fourth appearance. Yeah. Fourth, fourth appearance. Yeah. Yeah. I just posted that first stream up here, uh, which was
[00:18:30]  a fun one. And back then, back then, back then David wasn't doing his fun kind of thumbnails. So I think that one has like a boring, like just
[00:18:39]  solid logo in the middle kind of thumbnail. Yeah. I think it needs, I think it needs a redo from David, like, you know, get a fresh thumbnail out
[00:18:47]  there and get the, get the clicks up. I've heard people do like AB testing with their thumbnails as well. Like they keep changing their thumbnails every few days.
[00:18:56]  Yeah. Let's see what works well. Yeah. I mean, Theo was notorious for doing that. Like the thing is, as I was mentioned a few minutes ago,
[00:19:04]  I don't know if my streams ever going to have, like the content isn't as consumable enough, uh, to actually have that make a huge difference. Yeah
[00:19:13] . Yeah. I'm looking at the, the, um, yeah, I see exactly what you're talking about. Let me, let me just throw the screen in here
[00:19:20]  for a second. The, the solid logo plus three JS. That was, that was, that was about the ability of thumbnails I had in me at that time, but
[00:19:28]  it's a great stream because it introduced the world to Nikhil, but you still have more of a story that even, even tell than, um, than that,
[00:19:36]  because even then I didn't quite, I didn't have your full story. You were just like, yeah, I'm, you know, I joined the solid community.
[00:19:43]  I want to do this cool stuff. We had you back again, and that was when we unveiled the, uh, really cool features that we had working on with solid
[00:19:52]  start. This is one of the functions. Yeah. Server functions. And, uh, I think, did we even talk about islands then? Like, that's what I
[00:20:01]  was thinking because I feel like I've done a stream where we talked about islands and that stuff, but then that would be, that would be number five then. So I
[00:20:08]  might be miscounted. No, no. I think it was part of the stream. We, we, you, it was brand new. You, I was like
[00:20:14] , we're not ready to show that. And you're like, yeah, I'm ready to show that. Like you, you, you just took over again. Yeah
[00:20:18] . I thought the stream was over and then you're like, okay. Oh, yes, yes, yes, yes, yes. But that was, wait, we
[00:20:24]  had done that, that bad, like that long ago. I thought that was like towards the end of the year. This was, yeah. The stream happened. Oh,
[00:20:33]  yeah. No, the stream happened also like September or October because we kept delaying it. Like, you know, we want to do the beta launch properly. Right.
[00:20:40]  Right. So that was all about solid start. And then, um, yeah, you weren't actually in this string bringing the bling with, but big part of
[00:20:50]  bling, which was taking those server function ideas and, uh, moving them into, so they can be used in any beat thing. Yeah. We talked about you trying
[00:20:59]  to build your own competitor to Next.js. No, no, not exactly. You, you, you were frustrated that you were frustrated how slow next was, wasn't
[00:21:06]  it? Yeah. Yeah. Yeah. And see, I told you, this is not an area that I usually worry about. I'm like, I'm, I'm
[00:21:13]  worried about how slow next is when it comes to like what the end user gets. Nikhil was worried about those build times. Um, he, he's, he
[00:21:20]  was very, very happy with the next 13 and the app director. It took like five seconds every time I made a change to like anything to reflect anywhere. Right. But
[00:21:30]  you were like, you were very happy on the other hand, you're like this, the, the, the developer, like the actual app I'm building. You
[00:21:38]  know, you're, you're very happy with that side. You're like, I like the patterns, the async func components. It was, it was a
[00:21:45]  lot of, it was a lot of fun. Um, the building you were just like, damn, why can't I do this anywhere else? Um, right. Yeah
[00:21:51] . Um, which brings us to today. Cause like people, some people in the solid community knew you were working on start a bunch work on the island stuff. Then you
[00:22:01] , uh, started helping us do the Astro migration. Um, that was all you Ryan, that was all you. Yeah. But I mean, you got the
[00:22:10]  dev server stuff working at the beginning, but yes, you're right. You're right. I'm a huge, huge Astro fan and I pushed it harder than anyone
[00:22:17] . Um, yes. Uh, everyone knows how much I love Astro. Um, this week in JavaScript, we'll show more Astro love. Um, nice,
[00:22:26]  but, uh, and then, you know, you helped, uh, you helped, as I said, Tanner with bling, you worked with, um, fatigue
[00:22:36]  from rackus working on, uh, getting beat to do RSCs, um, which we talked about in fully react. What have you been doing like the last four
[00:22:44]  or five months? Just, I mean, actually in the middle, I think there's something that, uh, it was very like non web framework stuff, but I was
[00:22:52]  building game editors. Remember that phase? Like when I was building game engines, game editors, I still look fondly back at that time, but I just lost touch
[00:23:01] . As soon as I came back to India, I didn't have enough free time on my hand to just be building games, but yeah, that was a fun time.
[00:23:09]  Uh, but then, yeah, I think, uh, my experience has now been that I had written like four different server setups with wheat, like almost full meta framework
[00:23:21]  level work being done four times. First was beat next was my, like my first copy of next when it was just the pages out there, but I wanted the beats like
[00:23:31]  developer experience. Then we built solid start. Then I built my thing with Fatih, which was like the first RSC wheat integration, like, uh, building a wheat
[00:23:42]  plugin. But then when I built the wheat plugin, I realized we need a full framework to actually be able to use it. Like it's, it's the same
[00:23:48]  thing as like, you know, this, like how beats server support is right now. Like you need to build a full framework to be actually able to use beats like server
[00:23:57]  support, like, because you need to set up the module loader, you need to set development versus production, everything like that. And so I did that. So that
[00:24:04]  was fully react. That was a stream I was on. And then I decided to make a pull request to react core, which was like, I was like, let me
[00:24:10]  do this, right? Because they had react server dom back back. Do you have the link to that? Yeah. Wait. Yeah. Let's Okay. I'll
[00:24:19]  post it here. I don't know if you can. Yeah. If you put it in the private chat, I'll post it back. Sorry. Continue. Yeah.
[00:24:28]  Yeah. And so, uh, again, when I build that into, like when I build a wheat plugin, uh, and like in, in the react core thing,
[00:24:37]  I needed to build a test fixture. And so now for the fourth time I was building again, that whole setup, where you're building the client, you're building
[00:24:44]  the server, you're passing manifests around, you're like, uh, making sure all the assets match up. You're making sure CSS being loaded, making sure development server
[00:24:51]  is doing something different from production. So. And so now that I had done it four times, I was, and you know, I've been crusading, like for
[00:24:58]  almost a year that all of these frameworks should just effing collaborate and just like, you know, build that layer out so that, you know, not all of us have
[00:25:08]  to keep fixing the same bugs, build the same things again and again and again, and, uh, just kind of, you know, work together on this, on
[00:25:15]  this stuff. And, um, yeah, I remember, I remember that. Yeah. What was it? Uh, do I have this here winter kit? Yes. That
[00:25:24] 's, that's what I was going to link to. That was my first attempt at that. I was like, maybe my writing will convince people. So I decided to
[00:25:32]  write like a whole, whole thing about like, also got a logo. I was like, let's, let's not leave any stone unturned, uh,
[00:25:39]  to like, uh, but the idea was this only, right? Like build a server side, like layer that abstracts out the whole deployment layer, just like, you
[00:25:49]  know, kind of serverless does for the hardware. You do that for the software where like you have all these platforms, all these runtimes, uh, all these like
[00:25:56]  API discrepancies, things like that. You agree on the fact that, you know, we'll use the web platform APIs. You write a simple, like,
[00:26:03]  you know, JavaScript functions, you write your server handlers and everything else takes is taken care of. Your builds are taken care of, your deployments are taken care of
[00:26:12] , your optimizations are taken care of, your routing, your CSS, all of that is just taken care of. And like a lot of it comes from, you know
[00:26:20] , a weird kind of tendency I have is that, you know, I like to have my own opinions and I think a lot of programmers are like that, you know
[00:26:26] , where we want just things to look our way. Even if, you know, we don't really care about a lot of us don't, I feel like don't
[00:26:32]  care about how it works, but we really care about how it looks, right? Like we want the files to be the way we want them to be. We want the
[00:26:37]  functions to be named the way we want them to be. And so I feel like, uh, I feel like this, this, this freedom to have opinions only kind of
[00:26:48]  is enabled when the technology gets incredibly democratized. For example, if you want to just tweak like next.jss file system router a bit, you will actually have
[00:26:57]  to build all of next.js just to like, you know, do that because there is no way you can do anything about like, you know, go into that code
[00:27:06]  base and do something on your own there. Right. Devil's advocate on that is like it, they can kind of protect themselves for future things that they want to do
[00:27:15] . No, no. They get to have their opinions. It's just that if I want, uh, if I have a different opinion, I should get to have it
[00:27:25]  without incurring the huge cost of, you know, either development or I'm sacrificing on the performance or like I'm sacrificing on these things in the moment. Right. And
[00:27:33]  I should also have the freedom to change my opinion and have my tool adapt to my new opinions. And I think it's very different from, you know, maybe what
[00:27:41]  hardcore engineering is like, you know, you want something very stable, very like, you know, long-term sturdy, but, uh, you know, I think of
[00:27:49]  this way more as a craft and something, you know, I want to enjoy doing. And I don't get to do that without having my opinions, without having to like
[00:27:56]  play the game my way. And so I think like a lot of motivation comes from, if you see a lot of my history is finding something I like, but not being
[00:28:04]  sure about like the way it's all been set up in the, with their opinions and all. And so I just build it again, just for the sake of, you
[00:28:11]  know, being able to have my opinions and my experience has been that it's been the tools that allow me to have my opinion easily. Like VeeT does that
[00:28:18]  for you, right? Like you can just start doing like random module stuff, random compilation stuff. I just takes care of everything. Like I, it's for, it
[00:28:26] 's very cheap for me to experiment and very cheap for me to have my opinion and get, can be proven wrong, can be proven right. And, you know, stick
[00:28:32]  along with it. Like that's how we were able to develop so much on solid start so quickly. It's because experimentation was cheap and having opinions was cheap. Like
[00:28:40]  we could just change our opinions quickly and we would not have to be like, okay, this is gonna be a month's time to like do the new thing now. Yeah
[00:28:47] . I always love, I was just gonna say, I always love, love that alignment between us, because I also don't like opinions. I didn't want to have
[00:28:57]  to make like a meta framework. So like, yeah, this has been very much an aligned position for us. No, so it, the, the main customer of
[00:29:07]  like the thing I built is me like every day because almost like, you know, every year I feel like I'm having new opinions and like, I don't like,
[00:29:15]  you know, want to use my old thing because now it's like, it was too opinionated. And, uh, my main lesson has been that very architecturally,
[00:29:23]  I've realized that as much as you can push to the runtime, so that the runtime is something you can orchestrate from above, have your opinions on your compilation,
[00:29:32]  on your syntax, on your, like, you know, your way you want to arrange thing, but the runtime remains sturdy is when you get to have your opinions very easily
[00:29:39] . And it's mostly about stylistic things that most people have opinions about. And so that's actually been true with solid and how that has been able to like, you
[00:29:46]  know, cater to so many different styles of like, you know, people writing their code and like doing different kinds of tricky things with it. But I think that's what
[00:29:54] , that's been my focus with Vinchy's. Like I've been focusing on the runtime so that kind of, I can have any opinion I want, like my
[00:30:00]  file system router can be anything and my, you know, kind of server functions can be kind of built anyway. Like, you know, I, sometimes I feel like doing
[00:30:07]  dollar signs. Sometimes I feel like doing Someone wanted to know. Yeah. What do you think about file? Uh, I would not do it because I don't like
[00:30:15]  those long file names because, uh, I feel like on my Chrome tabs, like on my tabs, I wouldn't be able to see them very well. Uh, and
[00:30:22]  I don't have a problem with a lot of files being named the same, like, because you get to see the directory when you're searching through the files and VS code
[00:30:30] . So I just kind of ignore the fact that all of them are called page.tsx or something like that. But, uh, but I really liked the fact
[00:30:37]  that Remix is built in a way where like, it's very easy for them to try these two, like, you know, the customer can just be like, I
[00:30:42]  want to do flat system writing or I want to do like this nested thing. And it's like, just up to them. Yeah. No, it's,
[00:30:49]  it's, it's been a huge inspiration for me. Like when I saw that, that, you know, they're experimenting with different file system routing methods and, you
[00:30:55]  know, then they're not having to change their whole system because of it. That's when I realized file system routing is a modular thing. It's not like an,
[00:31:03]  uh, it's not an inbuilt thing into the framework. Like the runtime should just support your file system being mapped to any routing framework. Yeah, no, exactly.
[00:31:12]  This is why I thought this was an appropriate question because it, doesn't actually matter, um, that much, but Remix was actually trying. I don't know
[00:31:22]  if it's just the two, there was also a third proposal about like a hybrid. They were trying multiple at the same time and it was just a switch. And I
[00:31:30] , as you said, it became very obvious that you're like, well, is this something for Google? And I think another interesting point of this is, um, and
[00:31:36]  before we get right into Vinci is over the course of this time period, where you've been looking at the stuff, you have been looking at existing, um, generic
[00:31:45]  solutions like hat tip and you know, tried, I tried to force some stuff on Astro that maybe you didn't want to force, you know, but like,
[00:31:52]  No, no, no, no, no, no. Okay. So I, I'll go back, go back to that kind of history. Right? So I think
[00:31:57]  the first time we started just getting frustrated about this, there were, there were two tracks we were looking at. One is, you know, find some server layer that we
[00:32:05]  can build on top of or figure out some other framework that, you know, we can extract their pieces, like, you know, convince them to like pull out their pieces
[00:32:13]  and build on top of that. Because the main thing we needed is like to have common eyes like maintaining this like layer, like kind of this democratized layer. Uh
[00:32:21] , Astro was our candidate because like, we just tried that, you know, you could just kind of hack on most of the things on top of it. And we
[00:32:28]  had, we had a good relationship and it was easy to build those like, you know, server client plugins. It was the main thing that allowed you to like control a
[00:32:36]  server and a client build from outside the framework. Like most of the frameworks had the client server build inside them. Like you couldn't control the two builds separately. And
[00:32:45]  that's what Astro gave you had tips issue was that you had to, you'd have to build the, build the adapters yourself, right? Because they give you
[00:32:51]  these utilities, but the adapters have to still be built by hand and maintained by you. And so I think that was one of the main reason. And the other was
[00:32:58]  obviously, it's just like, you know, one person maintaining and we've obviously like, it's us also just a few people maintaining things. But this layer is something
[00:33:06]  you feel like it's like that kind of enterprise security layer where you just want to be like, you know, kind of Java, this shit and like, just clean
[00:33:14]  all of it out. I mean, I got to throw this out there too, because it came up because like, there's that low level layer and obviously stuff like nit
[00:33:21] ro we'll talk about in a few minutes here, but there's also people trying to build the higher level layer. In a lot of ways, someone might look at something
[00:33:28]  like Vinci and think about stuff like Viet plugin SSR. Yeah, I think Viet plugin SSR is exactly in the space that Vinci is in.
[00:33:37]  It's probably that the abstractions that we've chosen are different. The problem space is kind of similar where you're trying to build server-side framework, server-side
[00:33:48]  apps with Viet as like your main kind of bundling layer and your module loading layer. I think the difference in opinions is obviously I think it is more oriented around
[00:33:58]  server-side rendering and doing like a client server interaction where I'm trying to build a full like server like framework layer where like you build your API, you can build your
[00:34:07]  API server, your static file servers, your SSR servers, your hybrid servers that you can do. That's the composable unit kind of in my space, because I
[00:34:16]  already have situations where I'm using Vinci, I think in five different projects, all in like different ways. Like one is just an API server, one is like
[00:34:24]  an API with a spa, one is like an SSR setup, one is like two different APIs, just for some reason I have them like at different endpoints. And
[00:34:33]  I have file system routing in some of them, some of them don't have file system routing, some of the conventions. Go ahead. Yeah, I was just going to
[00:34:42]  ask like, what's, sorry, you had one more example, didn't you? Sorry, I was counting. I counted four. What was the fifth server?
[00:34:49]  No, no, the fifth server, I think right now is, you can do like a spa, actually no, so we have four server modes, basically, which is
[00:35:00]  a spa, I don't think we have a fifth yet. I'm thinking of like, you know, if we need a MPA kind of native server mode, but
[00:35:08]  MPA just feels like a derived version of SSR or like something like that. Right, right. But I okay, so I guess that that's good on like
[00:35:17]  the this is how we use it side of things. But I guess my question for you is, what about Vinci's setup or abstraction do you think makes it different than
[00:35:26]  something like the plugin SSR is like if you could simply like say that in a fewer words, because I was like, you're saying it can do all this all
[00:35:32]  this, but like, why is that? Oh, so the thing is that the abstraction we've chosen is that our server is not like one read server. And so you
[00:35:42]  know, one read server is very good at like serving one kind of like, you know, plugin pipeline. And that means that you know, you're gonna have something for
[00:35:49]  your API servers, and something. But what you can do in Vinci's, you can have a specific pipeline for your API, a specific pipeline for SSR,
[00:35:56]  a specific pipeline, maybe you have like a, so for example, react server, right? So in your typical SSR setup, we'll have a client, client router
[00:36:04] , a server router, and maybe a public directory. But react server components, you need a fourth router where you need like your react server out like, you know, because
[00:36:14]  you actually have two different servers. And so for me, it's very easy to compose that because now it's just another fourth router at a specific base. And I
[00:36:21]  don't need to change anything in Vinci's core, all of my react server kind of setups were done on top of Vinci, without having to build like even a
[00:36:29]  framework, like, I can show when I show you examples, I show you like, it's one project where it's just like two files that are like frameworky,
[00:36:36]  like, you know, just some setup, but it's all in user land. And that's because I realized that the core abstraction for the server or like for the
[00:36:44]  web is the router, right? Like, it's like, at the end of it, all communication, all message passing happens through routing. And so what your server needs
[00:36:54]  to be able to give you is a very powerful way to build whatever router you want. Handle URLs however you want in a very hybrid manner, right? Like, you
[00:37:04]  want your static, you want your dynamic, you want pre-rendering, you want incremental rendering, you want your pure API servers, you want compression, you don
[00:37:12] 't want compression, like, all of it just has to be very composable at the, like, you know, server layer. Yeah, yeah, no. And that
[00:37:18] , that, that is what actually stood out for me. I, because when I did look at, here's the thing, you can comment after I say on this,
[00:37:27]  but when I looked at vPlug and SSR, and I think you felt similar, you, they were very opinionated about like the client side router. It was
[00:37:34]  like, it was like, they're trying to build an isomorphic router that would do everything that would do, you know, like the same thing you would have
[00:37:40]  for your client framework, the backend, which is what we see in most of these routers. And they have opinions about data fetching and they have like, everything gets
[00:37:47]  wrapped into the router in this single kind of piece. So if you go use vPlug and SSR solid, you're probably going to use vPlug and SS
[00:37:53] R's router with a solid adapter. Remix did the same thing. They're like, don't, we can have Remix or what was it? Svelte
[00:38:00]  mix I heard, like we can, you know, or view mix or whatever. We can make a version for all the different frameworks. You just take our baseline of
[00:38:08]  react router and wrap it, and then come up with view router for remix. And then you're good. And, and that, and the truth of the matter is that
[00:38:18]  yeah, these meta frameworks are largely just an extension of the router. I, I, this is part of the realization that had over time that I was trying to make
[00:38:26]  solid start disappear at one point and like, like take, make nothing import from solid start. And, uh, we, we talked about it before we'll talk about it
[00:38:33]  more today. And most of the stuff kind of got pulled into solid's router package. But the problem is if it goes there, then it doesn't go into solid remix
[00:38:43]  router. Like, like it's, it's duplication. So I think for me, the coolest or most like biggest innovation of something like Vinci was understanding that
[00:38:56]  there is a router aspect of the server and it's very important for figuring out how to do all the fancy stuff. File system routing is, you know, a big piece
[00:39:06]  to make the stuff wire up easier, but it's that you let the client router and that server router be separate, almost like pluggable. And in, so you
[00:39:15]  didn't have to have a prescriptive take on what routing should look like, which every meta framework, that's how they define themselves. So like you were like
[00:39:25] , no, no, you, you can handle that piece of the routing. We just want to have the cues so that we can tie into the bundling and that separation
[00:39:33]  makes Vinci different than any other solution I've seen in this space. Right. Because I leave everything to the runtime. Like I just want to know enough to like know
[00:39:42]  what to bundle, but everything else is on the runtime. And that means that all of it is up for innovation. So like, I'll talk about Weetpl
[00:39:48] ug and SSR. I think I've, I've looked at the situation very long and my kind of disagreement with Brillout, like the person who's built Weet
[00:39:55] plug and SSR was that he believes that, you know, there's no more innovation and routing in the sense that it's kind of a solved problem. And that
[00:40:01] , you know, we just, you know, we can just figure, you know, just move on. And I'm like, literally all the innovation right now is happening
[00:40:09]  in routing. Like islands is a routing innovation. Server components is a routing innovation. The next app directory is a routing innovation. And so I wanted my tool to allow
[00:40:19]  like any routing innovation to happen on top of it without the router needing to build the framework again, like just to like, you know, bring its runtime into the game.
[00:40:27]  So I'll talk about this later, but I have examples with Dan stack router with Tanner is the perfect person to bring in because the other side of that, of that
[00:40:36] , you know, coin, so to speak is, yeah, let solid, for example, keep it's a good routing system that works specifically for solid, not trying to
[00:40:45]  get forced on like remix router with solid was never going to be as optimal as the way solid built it because they have a different change detection. Like they just, it doesn
[00:40:53] 't update and doesn't work the same kind of, it's kind of way. Whereas, and, but on the other flip side of the coin is Tanner may have
[00:40:59]  built the best react router out there. Like, exactly. Like just genius work there. I mean, don't get me wrong. Like with file systems, you're doing
[00:41:09]  some compilation code gen anyways, but Tanner's router, I don't think people get it because everyone's like, yeah, I have a route type safe router. And like
[00:41:15] , you know, they kind of all like flaunt around like, yeah, I can do that, you know, but Tanner's router is type safe with zero code gen
[00:41:22] . There is no, I don't think there's any router out there that's actually type safe with no code gen or at least popular routing option. Like it doesn
[00:41:31] 't generate types. It just works. And I think that with file system routing has to generate like, I think one type for every page, but yeah, apart from that
[00:41:41] , like in the runtime, it's all like, you know, exactly. So that's why I think maybe file system router writing gets you a little bit away from that
[00:41:49]  because you have to generate some kind of code for file system running anyway. So you can generate the types to like, you kind of get there, but it was just
[00:41:55]  interesting that it was uniquely runtime only working TypeScript, which is quite powerful. But the problem is he sits there and he's got his router. And then it's like
[00:42:03] , what is he supposed to do with it? Like he can't take it to, you know, with react. I mean, this, the timing is just like this
[00:42:09]  perfect storm, right? Because you have to use a meta framework for react now. Right. So like Tanner amazing router doesn't have the meta framework. That means you
[00:42:21]  can't use it. Like, yeah, exactly. No, I, I, I didn't like that back when I was using next also, it's like, you
[00:42:30]  know, if I wanted to try another router or like, you know, anything new came about, like, I just couldn't do anything about that. Like all, or
[00:42:36]  I would have to just bail out of all of next.js's features like to use my own router there. And, uh, that was kind of annoying. Like
[00:42:43] , uh, and maybe the, like the idea is that I, I don't mind opinionated things. It's like, but the good stuff from the opinionated thing
[00:42:52]  should be available to everybody else to use as well. This is what rollup did. This is what beat did. And something needs to do that for the server as well
[00:42:59] . And I think, and we haven't mentioned it yet, but, but, but nitro was the third piece of the puzzle, which like solved it for the
[00:43:07]  server, which, uh, you know, they do that for the server, what we did for the client and what like rollup has done for like bundling JavaScript.
[00:43:14]  Like, so just go ahead. Yeah. I was going to ask you, so it did bug you a little bit when, when you were told that you should be
[00:43:23]  using a meta framework with react, like that you had to use next, did that bug you a little bit? No, I remember like in your last, uh, in
[00:43:31]  the last stream also, that's what my main frustration was is that I want to use server components, but I don't want to use next. It's slow, like
[00:43:37] , uh, and it's, uh, just so heavy. And, but then I had to build my own, like, you know, react server components, meta framework
[00:43:46] , just to be able to do that. Uh, that's the, that's the part that's most annoying. It's, it's whenever you want to try
[00:43:53]  out new opinions, try out new things, it's like the old tools just have this way of like not allowing you to actually, and maybe that's, that's fair
[00:44:02] . Like, you know, it's the part that they're, that they want to own. And so they don't want you to play with that, but I don
[00:44:08] 't really want to own anything. Like I just, I could care less about like who owns that layer. I just needed to work the same everywhere all the time. Like
[00:44:17]  it's that kind of layer, right? Like for example, wheat, like you just want it to do its job. Like, and like, that's just so
[00:44:24]  many things like, you know, I believe that so many new frameworks have come in the last, you know, two, three years is because of like wheat, right?
[00:44:31]  Because wheat allows you to do that client side bundling set up so quickly that not everybody has to now build create react app or view CLI. And like, you know
[00:44:40] , every tool just uses wheat and it has to become the same for like, you know, kind of server side stuff. Yeah. Yeah, no, it's a
[00:44:48]  natural evolution here. Um, we, we, yeah, we probably should get around to showing, um, Vinci, but I guess, I guess there was one last
[00:44:59]  inspiration that you saw that finally put the pieces together for you because you are, we're already doing this stuff. You had some ideas, but you were like, what should
[00:45:09]  the API look like? How should I actually approach this in a generic way? Uh, we should talk about Bun, shouldn't we? Yeah, actually, no,
[00:45:16]  even before Bun, I'd like to mention one last huge inspiration was Daniel Ray's, Daniel Rose, like, talk from, I think, Agent Conf, that is,
[00:45:25]  when he took Nitro and he took wheat and he just plugged wheat into Nitro and, you know, uh, gave you that, like, development server for React and
[00:45:34]  then, like, kind of wheat just disappeared in the build step. And that is what gave me the insight that wheat is not meant to be the owner of the whole
[00:45:44]  server because wheat does one pipeline, right? What Nitro showed you is that, you know, you can, you can have these, like, routing subsections, each
[00:45:52]  have, like, just be their own handlers completely, like, you know, and that's when I realized that wheat actually fits into that, right? It fits into
[00:45:58]  one of the routing handlers into Nitro. And so Nitro owns the server, both during development and production. And then wheat kind of plugs in, like,
[00:46:06]  so for example, the static server doesn't need wheat, doesn't need wheat. And the, uh, the, the kind of the, the client servers do, right
[00:46:15] ? And maybe, maybe at some point, I have, like, an Expo server in it, which, like, Expo doesn't need wheat at all. It
[00:46:20]  has its own dev server. And so that becomes, like, another router. So that, so wheat was part of the puzzle from the, from the right, and
[00:46:27] , like, Nitro was the big owner. Yeah, yeah. The comment here is, this is what Nuxt does. And it, it's funny, because Nu
[00:46:35] xt is also from the Vue community. Also, as wheat is, I think they kind of all understood this, and maybe not everyone else understood this. Right,
[00:46:44]  right, right. No, I, uh, I think that is what gave me the most confidence about Nitro as well, is, is seeing the quality that Nuxt
[00:46:51]  has. It's, it's, like, you know, top-notch, like, in everything, like, the CLI, to, like, the loading
[00:46:57]  page, to the plugins, the quality of the code, it's, it's just top-notch. And so that's what gave me the confidence. Nitro
[00:47:03]  has to be, like, you know, very high quality in that sense. And that's the main thing I was looking for from this layer, is kind of that
[00:47:09]  reliability, and, you know, it be, be, like, you know, on top of the game, like, you know, just have the most latest stuff.
[00:47:16]  And Nitro did that with the streaming stuff, like, very recently. Now they have, like, all kinds of streaming support. And so just out of the box,
[00:47:22]  like, you know, React streaming, solid streaming, it just works out of the box. And it's just amazing to see. Yep. Um, and yeah, one
[00:47:33] , one was the, one was, like, what told me how I can, like, you know, design the API for something like this. Maybe you can pull
[00:47:41]  it up, or I can just send you the... Yeah, yeah, I'm looking for the bun app thing. Because the funny thing is, I never saw that's
[00:47:46]  being released. I remember Jared... It's never been released. Okay, because Jared talked to me in a private channel on Discord. And he was all like, Ryan,
[00:47:55]  what do you think about this approach? He would really want, he didn't want to, like, you got to understand, Jared's in this place where he's playing
[00:48:00]  catch up. Everybody has their own ecosystem, like, the webpack ecosystem around Vercel and Next. And, and, you know, the beat ecosystem and all
[00:48:07]  this. And he's a bundler. And he's like, how do I play in this game? He's like, I don't want to redo work for all
[00:48:12]  these different setups. He's like, I just want to have one way that you can build apps in, in, in bun. And he did this. Let me
[00:48:23]  get this. So he was actually dealing with the exact problem space that, you know, I was dealing with in my head is that you actually want like, inherently node to
[00:48:32]  have that server layer, right? Like, where 10,000 things don't have to be built on top, just so that you can get that experience of kind of
[00:48:40]  deploy anywhere, build anything. So this is the bundler on top. At the end, there is like a sneak peek of the kind of the bun app API. Yeah
[00:48:49] . Yeah, I just remember this because he was like, right, he was trying to see if solid would universalize on use server use client like react, because he was
[00:48:58]  like, look, I made this so solid could use use client and use server without react. This is completely react independent. You can just set it up like this.
[00:49:07]  What do you think? What do you think? And at the time I was looking at it, I'm like, I got bling, huh? Yeah, but this
[00:49:13]  was the first moment where I was like, okay, react is such a force. I have to actually like, think about this because people like, like, like, Jared
[00:49:23]  don't want to remake everything a bunch of times. So he, he, he forced me to think of like, what is the best possible pattern here? Because he,
[00:49:31]  he was like, look, Ryan, it's, it should, this should, this should work for you. Right. And I'm like, in theory, but
[00:49:37]  I don't, I don't know if this is what I want. Um, continue. No, no, just scroll down. Uh, we can go to like the
[00:49:45]  main reference I had seen. This is the first time I saw an API like this, uh, keep going, keep going. It's, it's just at the end
[00:49:53] . It's a small section. Oh yeah. Sneak peek. Yeah. Yeah. So it's just this much, no more details, but this was enough for
[00:50:00]  me to like get super excited because I, there's no code written for this. And so all of my understanding was just trying to interpret this, these APIs and like,
[00:50:09]  try to like make a sense of what he has been thinking. So, because if you go to the next JS style framework, one, the good, no, go to
[00:50:15]  that. Actually, we don't, don't go to the other tab yet. Okay. There's, there's not enough detail here. Most of the details are there
[00:50:22] . So there's, there's tabs on the code editor. Okay. Yeah. So if you go to this one, this one might be a little confusing to like
[00:50:30] , you know, just kind of gauge on your own, like what's going on, but, but you would find a lot of API familiar here from like what you've
[00:50:37]  seen and eventually like, um, the, the kind of the essence there was that he tried to split up build configs and routers. And so routers would
[00:50:47] , routers would refer to build configs by name. So, uh, you would have a build key by name. I, I removed that kind of interaction as like
[00:50:55] , if you want a router config, just put it in, like, you know, whatever build config you have, put it along with the router. It doesn't help
[00:51:01]  to have other things. Right. But if I understand this is, each of these is a separate config for the bundler in bund in this case. Um, so it
[00:51:10]  goes, I know how to build react SSR. I know how to build react client. So this is the two builds and then it assigns what I actually think
[00:51:19] , because when I started doing this really, and I, I was like, okay, let's, okay. If we have one build config, the assumption is probably you
[00:51:25]  can have multiple handlers that are referring to that build config, right? Otherwise, why would you separate them out? And I'm like, when you do that, then
[00:51:31]  you actually have to start building the routers. Like, and for every router, you figure out what the build config for that router is because you actually have to build each
[00:51:39]  router separately. Most of them. Right. And so it actually is like, I found it just some kind of indirection. Uh, and I didn't find
[00:51:50]  it helpful. Right. Because it's your, what you're saying is the routers are actually the builds. And this is just telling you how to do these builds.
[00:51:57]  Like basically you'll have as many builds as you have routers. Exactly. I got you. And so in this case, we have handler mode, which I'm
[00:52:07]  gathering is for SSR. Yeah. So it just gives you like, it gets the, uh, event from the, you know, the event and the request, and
[00:52:14]  then it, and it set, it sets it up at X, I guess as a handler dot TSX and it, and then it uses react SSR, which,
[00:52:23]  um, outputs to a build server. And then the, and so style, no, no. So there's an interesting style and door section there. So door is
[00:52:31]  like what directory to look for files in and style is like, you know, what file system routing convention should do use. So he already imagined that, you know, if
[00:52:39]  you had different file system routing conventions, you just have different styles. Right. Oh, I see. So this could be remix flat instead of next JS. Right.
[00:52:48]  Right. So he basically looked at the different styles of routers said what the entry point for the router file system router is. And then like, as it set the handler
[00:53:00]  output, this is like your entry server. This is your entry server typically. Yeah. And then he did the same for the pages. Yeah. So this is the client
[00:53:09] . This is the client. So the build mode is basically like a, it's a static file server, but during development, it's a VEAT built file
[00:53:17]  server. Like, so you just have to treat it as like a subsection of your routing. So in this it's underscore pages, everything there is that you can just
[00:53:26]  assume it's static files in production during development. It's transpired files from VEAT. Right. That's build mode. But yeah. So for your client,
[00:53:36]  you use that typically. Sorry. It's interesting. I guess this is, there's some reality to this because when you set up your VEAT config, typically
[00:53:45]  as an end user, you can set up one VEAT config and you're like, sweet, the plugins handle both SSR and client together. I spoke a lot
[00:53:53]  about this at the last VEAT conference. It's really cool how, because the plugins themselves had an SSR mode and not SSR mode, they got sliced the
[00:54:02]  other way, which meant that you could focus on specific concerns rather than having like the, like this problem of like, this is client, this is server. Like you
[00:54:11]  got away from the four build problem where you have like dev server production, whatever, and said it took those things as a single thing. And then you would focus on a
[00:54:20]  single aspect. But in reality, when you build your meta framework, you end up actually making multiple builds. Anyways, you make a client build and a server build like
[00:54:29]  this. So yeah, it is one of those funny oddities that when you get into the meta framework level, you actually do end up with two separate configurations. The
[00:54:39] , the, I actually hit the main pain point was when I was doing the react server component stuff, because that's when I had to start doing three at the same time
[00:54:47] . That's when I realized that, you know, these are not meant to be like, kind of vertical like that, they actually have to be separate pipelines, so that
[00:54:55]  it can be very clear about what's happening in each of the sections, because there could be completely different things happening like, in all three places. Yeah, I think
[00:55:03]  the interesting thing about this is, this layer is very helpful to the meta framework author. It, but like, a lot of people aren't gonna bother with this unless,
[00:55:17]  like, a lot of people are still gonna just pick up a meta framework, right? Like, like, but the power here is that, like, I remember how
[00:55:26]  much code I used to write into every single adapter to basically do this setup, because everything had multiple builds, everything, you know, generally, to an end user, you
[00:55:35]  don't need to expose this API, but to a framework author, a meta framework author, this is actually quite powerful to expose. Okay. Yeah, I mean, another
[00:55:44] , I think, advantageous part of, like, doing the wheat nitro thing we do right now is that we actually do, like, a two stage build process,
[00:55:51]  where once all the routers are built using wheat, so that's the same result, regardless of the runtime or the platform you're deploying to. And then at the
[00:55:59]  end of it, nitro does one pass, where it, like, you know, puts everything together into, like, the setup that the, the target platform requires.
[00:56:07]  I want to look at the API server for one second, maybe if, okay, because this one doesn't even need much in the way of a bundler, literally
[00:56:16] , just, it just simple, it's just like, give me an entry point, essentially, and map it through there for anything that starts with slash API. Yeah,
[00:56:27]  I guess the bundling is so that, you know, because node modules resolution might be slower than just, like, you know, having one bundle that load, that loads
[00:56:35] , so maybe you still want that. And then maybe you still want, like, you know, cross-platform stuff, like, you want to be able to
[00:56:43]  deploy it to node or, like, Dino or something, and so you still need a build process. Yeah, no, this looks, this looks very cool. Funny
[00:56:50]  thing is, it's a great influence for Vinci, which I think is where we're going to go next. But I actually didn't note this before, but this
[00:57:00] , on the bottom, Bun gives a lot of credit here that I didn't see. Bun, I didn't realize Bun's bundler and minifier is based on
[00:57:07]  ESBuild's design. Thank you, PaperDay, for porting ESBuild's test suite to Bun. So basically, the bundler in Bun is a port
[00:57:16]  of ESBuild, which is pretty cool. And then Vinci is sort of up. No, I think only the API is, only the API is. Yeah,
[00:57:25]  yeah. You're right. Because, and the funny thing is, this is still not out yet. But this is, like, basically, this idea, how to
[00:57:33] , like, the truth is, he didn't get a chance to actually test this with anything. So in a sense, Vinci is further along now that, you know
[00:57:40] , you've actually had the experience of actually using it. But this was, this idea of API kind of came from Bun. But, okay, enough on Bun. What
[00:57:49]  do you think? Should we show people Vinci now? Sure, sure, sure. Okay. Do you want to share your screen? Or how do you want to
[00:57:58]  do this? So I actually wanted to also get you to build something from scratch. Okay. Just like, you can say, like, you know, build your own solid
[00:58:10]  start kind of experience. Sure. But it depends, it depends on how much of my code you want to see, or like, we can go there, you know,
[00:58:19]  first, we can get you to build something and then go through my code. Let's look at it. Yeah, I mean, it's fine. Do you want
[00:58:26]  me, if you want me to drive at the beginning here, we can do that. Do you want to code or not? Yeah, just, yeah, sure. Let
[00:58:34] 's do it. That's fine. Let's, let's, let's try Vinci. Do you want to do that shared VS code thing so that I can join
[00:58:40]  as well? I don't know. Okay, yeah, we can do that too. Let's see, Vinci. Let's, let's look. There is
[00:58:47]  a website that, there's a Git repo and now there's a, I'm still working on the tagline. Okay. But if you go to get started, yes
[00:59:00] , I started doing something with this. We'll get started. I think I have a few like this. What is it? It's so funny, because this is a
[00:59:08]  lot of this is like the lorem ipsum, right? Like, yeah, how to use Docus. Yeah. Okay. Don't share the site yet
[00:59:15] . But where, where should we? So what, what, what is a router is an interesting section. What is a router? What is a router? Yeah. Okay
[00:59:25] . Yeah. Um, can I, very quickly, is there an example or anything? Okay. Yeah. Can be very quickly before we actually go into the particular things,
[00:59:36]  I just want to show the API in use. Um, this is incomplete. Go to the solid one first. Yeah. I think that'll be more. Okay.
[00:59:48]  But I mean, it's cool that you can see that this is like basically the same formula. Essentially, this is an SSR app. You have a static public directory
[00:59:57] . You have a client build, um, which is a mode build, uh, which handler is app dot client TSX targets the browser, and you run solids plugin
[01:00:08]  with SSR true. This enables, um, hydration. And then you said that the base, I guess it goes. Okay. So you, you have to think that
[01:00:18]  this is the client assets. This is not the main entry point. So the client assets are served at like a hidden kind of location. Yeah, exactly. And then the
[01:00:27]  SSR side, the entries apps server target server, and then plugins true. Yeah. And then you can assume the base is like the top level entry for the server
[01:00:36] , like the SSR. What I wanted to say here is you can see a little bit of influence from bun app here right off the bat in terms of this kind of
[01:00:43]  configuration. Okay. So what is the router? I just wanted to give people the picture first before. Yeah. So I get actually, if, if examples are insightful
[01:00:52] , we can go to see, see, go and see a few more examples because, uh, even because this is not most, mostly theoretical. Yeah. Well, then
[01:01:00]  let's just build something. Let's just build something. Yeah. Yeah. Yeah. I, I do want to get to the examples and maybe you can share your screen
[01:01:06]  then, but let's, let's just build something. Uh, yeah. Uh, what is this? Um, this funnily enough, this is last stream
[01:01:13] , uh, not last last the nitro stream. I, I, we did this thing and you saw how easy it was to build something with nitro. You just
[01:01:21]  put these defined event handlers and you set up your nitro config and it was just using its file system routing, but this already has quite a few opinions kind of baked
[01:01:30]  in. So what we're going to do today is we're going to actually, I'll keep this window. We'll use this window. I'll just, uh
[01:01:37] , I'll just go and make a new project. Um, make directory. What do we want to call it or do you have a CLI now? Uh, no
[01:01:47] , I mean, it's just one installation. So, because like, it's, it's quite minimal in that way. So you can just do, yeah, just
[01:01:54]  do make the, like when she, uh, something example, when she or something, when she start or something, uh, whatever, she example, let's just do
[01:02:04]  that. Okay. Yeah. Just, just like do, uh, NPM in it or yarn in it or something. Uh, just yeah, open it. Yeah
[01:02:12] . I was gonna, I was gonna open it in here. Let's go open. Yeah. So we're not, but nitro, we used the CLI.
[01:02:19]  So we had something on it kind of built in, but we're, we're, we're vinci example. Should I just do this? Uh, don't
[01:02:26] . Uh, yes. I trust the authors. All right. Okay. Uh, so now yeah, I'll just do NPM in it. Sure. Yeah.
[01:02:37]  Sure. Yeah. Okay. So now just NPM install Vinci. So I want to take you through like a progression of like, you know, how things would
[01:03:07] , you know, how things could involve. So like, let's say now you have nothing and you just start like, uh, you just do like NPM run dev
[01:03:13]  like, okay. So just add a dev script here or just do NBX VINCI dev. Sure. I, the dev script is sorry. MPX.
[01:03:23]  No, no, just VINCI dev. Just VINCI dev should be fine here. And VINCI dev is when you're doing it. Yeah.
[01:03:28]  Yeah. I gotcha. Yeah. Okay. So when it doesn't find anything, it's a simple beat app. So you can add an index.html here
[01:03:40]  and just get going. I'm going to move it across so that we can kind of keep this going while we, while we go out of the way, what is a
[01:03:49]  router? Maybe we'll keep that for reference. Okay, cool. So right now it's a localhost 3000, not serving anything, but you're saying as if
[01:03:55] , if I go in here and I go index.html and I'm just going to be really basic, like without anything, the browser will add all the records for
[01:04:05]  me. Hello. Yeah. You're saying hopefully, yeah, we have a website. And so it's, it's already beat powered enough, right? So you can
[01:04:16]  just add a TypeScript file and, you know, console or something in there or alert something. Right. Right. So you're, you're saying. Yeah.
[01:04:24]  Let's do that anyway. Like, I think that's a good progression. I think so. Cause you're, you're, you're saying that if I just make
[01:04:32]  it random, can I just make a index. Dot. Any, any file name. Yeah. Yeah. JS, I'll get crucified for that. TS doesn't
[01:04:41]  matter. You're saying that I could put a script tag in here. Yep. Um, and it's like, I'm trying to remember the, like the last time
[01:04:49]  I actually used script tags, like directly. Um, God, what, what's the argument? Source. Source. Yeah. Source. And it's like, I can
[01:04:58]  do this. Basically. And type is equal. And you have to do type is equal to module. Right. Yeah. Type module. Yeah. I could arbitrarily
[01:05:09]  run some code side effect. Yeah. Yeah. Or actually, does this still work? The browser's disabled this yet? Uh, I guess we'll find out.
[01:05:26]  Nope. They haven't. Nice. Okay. Yeah. So, yeah. So, uh, I just, because we're building a solid thing, let's just install
[01:05:36]  V plug-in solid and just have some solid code running in that type script file. Like. Oh, okay. Right. So, uh, PM, PM. So
[01:05:44] , V plug-in solid solid. And then just because like, you know, we can just make a V file here, V config file. So typically for,
[01:05:53]  uh, for my, uh, when she use cases, I like to have an app dot config file, but let's just stick with the V convention because like, you
[01:06:00]  might have your own V config files already. So just make a V config file here. Okay. So new file, uh, with a V dot config dot, I'm
[01:06:12]  going to do JS for now. Okay. Yeah. And, and just, just start with a V simple V config. So import define config from, uh, V
[01:06:19] . I can dig, this is the reason to use TypeScript from. Yeah. Uh, it's, it's, it's, it's, it's, I
[01:06:28]  know. It's yeah. Yeah. Yeah. Um, from feet. And just add that, just add that as a plugin and what you want. Right. Export
[01:06:39] . Is it default? I can never remember. Yeah. Um, define, define, define, define, config to plugin and then plugins, plugins, brackets, solid.
[01:06:55]  Yeah. Like that. And then no, no, no. Yeah. I just import solid from the plugin solid. I think that's right. Okay. Yeah.
[01:07:06]  I never have to write this boilerplate anymore, but I know for you, you always said it was really important that you could just literally take any existing project and just like
[01:07:14] , like just go in and just add it like this. Um, and then what do we want to do here? That didn't take very long. Okay. Yeah
[01:07:23] . I know. I know. Yeah. Okay. So, uh, I mean, we could, we could, we could call render. We can make like a client
[01:07:30] , client rendered thing. So we want to, which means we have to actually go, uh, PMP install solid, uh, JS. Oh, right. Yeah.
[01:07:39]  It's all good. And then we want to import, uh, render from solid JS web and we're going to go. Was it render? Let's go back
[01:07:55]  to index HTML. Let's actually give it, let's, let's, let's give it a, uh, a div for fun. I mean, I could have
[01:08:05]  done body, but then the script, yeah, let's just do div and then like, uh, what ID, ID, um, route. Yeah. I guess HTML
[01:08:16]  doesn't like, whatever it says. Div is not self closing. Yeah. Yeah. I know. It's so used to JSX and then we need to,
[01:08:25]  we'll, we'll import, um, app from, uh, app dot TSX. That doesn't exist yet. Um, and we will, I mean,
[01:08:40]  you don't need to do that. You can just write it in here as well. Like whatever. Oh yeah. I guess that's the element by ID. It doesn
[01:08:50] 't care about the extension, like being TSX. Um, yeah, I mean, I, yeah, I would, I would have had to get you to rename it
[01:08:57] . So it's fine. Like we can do this as well. Right. And then, oh, you're right. I could just change this to index dot TSX
[01:09:03] . You're right. Why am I, why am I, why am I making this harder for us? Yeah. And then this is index dot TSX. Though
[01:09:10]  it might have been helpful when we went to SSR or something, but it's fine. We'll get there when we get there. Right. So function app, um
[01:09:21] , equals return h1, um, hello, you know, let's just get this alive. And then you're going to tell me we can't find react.
[01:09:33]  Um, so that's a typescript issue. That's fine. That's a typescript. That's fine. I mean, yeah, I know. You need,
[01:09:38]  you need a TS conflict file. Uh, don't you want me to send you one? Uh, you're right. I mean, I probably have some, right.
[01:09:47]  It's the standard one we do in solid start. I imagined do solid start. If you want, I just sent you one here that so you can, yeah, but
[01:09:57]  this is fine. I mean, most of it, I just need to, some of the past stuff doesn't make sense. Um, new file, TS config dot
[01:10:09] . Is it Jason? Jason. Yeah. Yeah. Jason. And then we don't, we don't need remove types base. Yeah. Yeah. Just move that.
[01:10:21]  Okay. And then hopefully, yeah, there we go. Okay. Proper. Okay. So let's, I, it's so silly to me how react has poll
[01:10:31] uted the global namespace. Like you can have no types defined and it's like, oh yeah, we can't find react. Like that just tells you it's,
[01:10:38]  it's very indicative of like where things are at. Um, anyways. Yeah. It's a privilege. It's a privilege. Anyways, uh, where were we?
[01:10:50]  PMVM dev. We're hoping that this actually still does something valuable for us. The funny thing is because I didn't change. Oh, you can't tell
[01:10:58] . I changed the message. I did lowercase. There we go. So we're already, the lesson is that without any configuration, it just acts as one single week
[01:11:10]  SBA setup. So implicitly it's actually building one SBA router and a public directory, like router for you. Like, so it's building two routers,
[01:11:19]  a public static directory, and a spa router with your entry point being index HTML. That's what's happening internally, but we don't need to show you that.
[01:11:28]  So let's, let's first try. Okay. You know, we're building a SPA, we're building a SPA and we need an API, right?
[01:11:34]  We need some kind of server just to like, you know, build an API server next to this. No SSR yet, just another API server. Yeah. I
[01:11:41] 'm just gonna say right now, this is really quite cool. Cause you know, a lot of frameworks have templates. It like, you don't like, this doesn't
[01:11:50]  feel like you even need a template for it. Like you literally go like install a new project. I mean, maybe the index HTML is the template. Like tell, tell
[01:11:59]  people that they can, they can, they have to like reference the index.tsx. I know VEAT has this feel to it. To be fair,
[01:12:06]  this is not any different than like a standard VDAP. Yeah. Yeah. This, this is basically a standard VDAP right now. Yeah. So, uh
[01:12:12] , so the, the first time you want to do something nice with the server, you know, something additional, the first time you want to deal with the server is the
[01:12:18]  first time there'll be a major change from like your VEAT config to something new. Okay. So let's do that change, but you don't need to change
[01:12:24]  the name of the file. We accept VEAT configs as a configuration file. So just, uh, yeah. Can I, can I make like a server
[01:12:31]  folder maybe just to make it easier for me? I mean, it doesn't really matter. What do you know? Sure. Sure. No, it's just having like
[01:12:39]  a flat list of files is also like not that bad because you can just name the files. You can just name the files. Okay. Fine. You're right. We
[01:12:44] 're right. We, we, we're going to, okay. So what do you want me to do the VEAT config? We can leave it. So,
[01:12:49]  so let's install Vinci. Oh, we've already installed Vinci, right? Yeah. Yeah. So let's import import. Yeah. So go to the
[01:12:55]  VEAT config instead of import defined config from VEAT, just do, uh, create app from Vinci port, create app from Vinci. Okay. Maybe
[01:13:08] . Yeah. You can give me feedback if I should just call this defined config, but there's a reason it's called create app. And it has a different,
[01:13:13]  it has a different, it's different, right? It doesn't take the same. It is different. It does take different arguments, but also way more powerful. I
[01:13:21] 'll show you that. So just go to create, uh, just call this create app. So you actually have to do a little bit ceremony here. So for, yeah
[01:13:27] , so you need to set up the routers that we were setting up for you by default. So there's a public static router. Uh, the mode is it's
[01:13:34]  all typescript. So you can just start getting suggestions. Uh, yeah. So mode is, uh, static. Uh, there's a door D I R thing
[01:13:46] . I missed the comma. Oh, wait. Yeah. That's going to be public. Is it just public? And actually, actually, if we, if we don
[01:13:57] 't have a static file server, we don't need to do that. Like if you don't have a public directory yet, we can skip that also. Let's,
[01:14:03]  let's just skip it. Let's just skip it. So next mode we need, what we need, we need a, we need a, we need a spa
[01:14:10]  mode for the index HTML, which is just good spa. Yeah. Yeah. Spa just get, and everything needs, every router needs a name for reasons. So just give
[01:14:21]  it like a client or anything like that. Yeah. Solid spa. Perfect. That's perfect. Yeah. Um, just look up the suggestion. So, uh, it
[01:14:32]  needs an entry point, uh, but it's not quite, it's called handler, I think. Yeah. Yeah. So, uh, that'll be the index
[01:14:39]  HTML. Oh, cool. So I can actually make it the same index. Yeah. We don't experiment with a lot of other HTML files, but index HTML will work
[01:14:50] . Uh, the target just put a target. The target will be browser. Oh, no, sorry. Uh, this is still on an older API, the last release
[01:14:58] . So good compiled. Um, I should just look at the suggestions. Is there build or compile in the, this release build? Okay. So it's called build
[01:15:10] . Yeah. Actually, there might be wrong. Wait, what is the last thing I released? Love new projects. Just, uh, let's, can we, we
[01:15:21] 'll, we'll find out, we'll find out if it, if it fails on that. So, cause you have a target here, which is out of date,
[01:15:27]  but I assume you must have a solid spa basic example. You think this is up to date. I mean, this is up to date, but there's a,
[01:15:39]  there's not like one last thing I haven't released yet. Okay. Um, so actually let's just try with build, but more likely that it's from five,
[01:15:47]  no, the build is probably it. My type skip must be fine. Okay. Uh, so it's an object, uh, and that takes a target, uh
[01:15:56] , that'll be browser for this one. And that takes a bunch of plugins. So you put your plugins in there and this one has to be a function that returns a
[01:16:07]  list for specific reasons, but let's just, that's fine. Yeah. So it's a lazily evaluated list of extensions. You can actually make this an as
[01:16:17] ync function and like, you know, do dynamic imports if you need that. Gotcha. Okay. Uh, I think this is, let's just run this so that we
[01:16:27]  have the same thing as we had earlier. Apparently Vinci's getting used out in the, in the wild. Um, yeah, I need to like last two days
[01:16:37]  for my, like we talk and all, I went through a whole cleansing of the API because I still thought it was too complicated. So, okay. Let's, uh
[01:16:43] , is it compile? Okay. We will, we'll find out. We'll find out very soon. Just let's restart this. We should be able to get the
[01:16:51]  same thing we already had. Okay. Okay. So let's go over and see. Yeah. It looks okay. Just open it on a new tab. I'm,
[01:17:04]  I don't feel like you're like, you're like, I don't believe it. I don't feel certain that it's working. Okay. New tab.
[01:17:09]  Yeah. Okay. Perfect. So it's, it's the same thing. Uh, well, actually, so does this work just out of curiosity? Yeah. HMR
[01:17:18] . Yep. All of HMR at all already work. So, okay. So you can imagine like, you can imagine or you're like your default beat config gets translated
[01:17:27]  to what you just wrote essentially. Yeah. Okay. Right. So, uh, so just, yeah, go look at your beat config file again and just imagine that
[01:17:36] , you know, this is kind of the implicit thing you have when you're running a beat, like a typical beat server. So now let's say we want to add
[01:17:43]  an API server to this. I would typically add the API server on top. First. Yeah. Yeah. Because you want it to catch the spas. Yeah. The
[01:17:50]  catch all. Yeah. Yeah. Okay. So this one will be mode handler. Mode. Oh, come on. Type, Brian. This is one. Yeah.
[01:18:01]  Yeah. Name. Name. Name can be just API or something, you know, solid API, API, whatever. Yeah. I'm sure. Solid API. Let's
[01:18:10]  do it. Yeah. And, uh, the handler can just be, you know, an API.ts file we build. Yeah. Let's do it. Hand
[01:18:18] ler. Yeah. Or API.ts and then build. We, there's no build. Right. No, no, no. Let's. So you have to specify
[01:18:31]  the target. Yeah. Right. Right. Right. Okay. Yeah. Because there is a build step, but, but it's not. Yeah. It doesn't
[01:18:38]  need a bunch of plugins. We just need a target of server. Yeah. Perfect. Okay. Okay. So, uh, let's just add an API.ts file
[01:18:50] . Yeah. I, this is a good comment. So this is, this is, you can, you can credit Ryan for this when he was like, oh, you
[01:19:01] 'll have to create a new file. I was like, okay, I'll just make it work with read config files as well. And I think it's really nice
[01:19:07]  that way. Like the fact that we don't have to educate people about another file. Yeah. Cause the, the, the difference is even, I don't expose this
[01:19:15]  to solid start developers. All my idea was what if you just in this file, put export default, define fig. And instead of importing that from, uh, VE
[01:19:27] AT import it from solid start. So it has exact same signature as VEAT. So as VEAT adds new features and changes, you can, can keep your
[01:19:35]  VEAT config. And then all we did was kind of backdoor the solid option, the start options into the, into the config. But generally speaking, the
[01:19:44]  idea that we ended up doing with, for solid start, um, is just the, having the exact same API as VEAT. So I guess this is why that
[01:19:53]  works. I mean, you can, you can, you can, you can show that off here, right? Like, so in your VEAT config file, you
[01:19:57]  can just create a function called define config that encapsulates this, like, so maybe because that will give people a taste of what it is like to build a framework on top
[01:20:06]  of this. So let's just go to VEAT config once. Okay. Oh, I'm sorry. I'm, I'm a little all over the place
[01:20:11] , but let's just make a function called define config that, that returns, that returns this. Define config. Yeah. I mean, and let's say it takes
[01:20:22]  no arguments for now, but it can be configured later and it returns this create app thing. Yeah. No, let's make it return the whole create app thing.
[01:20:30]  Yeah. Yeah. Yeah. Yeah, exactly. And then. Yeah. So you can imagine define config now coming from some library or meta framework, and then you're just
[01:20:47]  having to do this and all of this is gets encapsulated and they can expose whatever they want. So they can expose you to add new plugins, change the names of some
[01:20:54]  of the routers, add your own routers, whatever the framework feels comfortable exposing to you. I want to show one, one cool thing here. So if you
[01:21:01]  just shut the server once, like, yeah, uh, so sorry, right now, right now we're running the CLI through, uh, Vinchy, right
[01:21:10] ? But one thing I really wanted is that, you know, so your weed config JS file is a JavaScript file. You can actually do node, weed.config
[01:21:18] .js, and that will allow me, that will allow you to run the server, like just through normal node. So just do node and, uh, just do it
[01:21:28] . Yeah. Just make the type module. Yeah. And, uh, just put, uh, dash dash dev at the end. So it just runs. Right.
[01:21:43]  Yeah. And so it just starts the dev server and you can actually, it's much easier to do some of the debugging things. Did it fail? Yeah. Uh,
[01:21:52]  Handlers, it's because it's because we haven't, it would have failed anyways, because we haven't actually implemented him. Can we, can we, can
[01:22:00]  we implement handler here? Yeah. So actually I just go to read config once and put API under a more restrictive base path because they should have hit the spara spa thing
[01:22:11] . Right. So just put a base thing in the API, uh, uh, an option called base. Yeah. And just put like slash API so that, you know
[01:22:22] , your API serve that, uh, yeah. Uh, now just restart the server and I think we should still be getting, I don't, so. Yeah.
[01:22:33]  Yeah. Yeah. I, yeah. I haven't got hot module replacement for the weed configured, but yeah. So the API is not being, uh, called yet because
[01:22:42]  it's hitting the spa. Uh, so, okay. Now let's build the API, uh, and point we were building. All right. But you're saying I
[01:22:50]  don't have HMR anymore. Like, no, no, you have HMR. You don't have HMR in the weed conflict file. Oh, okay. Gotcha
[01:22:57] . Okay. Okay. Like it doesn't reload the server on its own right now. Okay. So, uh, you basically, you can just start your export default
[01:23:07]  event handler. Uh, no, just do, uh, just call, just import event handler. Just start writing it. I think you'll get suggested event handler. Does
[01:23:20]  it, okay. No, no, no, it was just event handler. It's an import from Vinchy slash runtime slash server. Okay. It's,
[01:23:27]  it's essentially like full disclosure. It's a re export from H3, but I've tried to encapsulate H3 and Nitro and that whole stack within Vinch
[01:23:39] y so that I don't have to teach too many different things. So just go to runtime slash server. Yeah. And so this is basically an event handler there where
[01:23:49]  you get an event and say using function, you respond with, you can respond with plain JavaScript objects. You can respond with strings. You can respond with actual HTTP response objects
[01:23:59] , whatever we take care of building the appropriate headers for you. Okay. Um, so let's just return a JavaScript object from here, like something random, like hello
[01:24:11]  message or something like that. Yeah. Okay. This is very similar to what we were doing with Nitro last stream. And you're saying if I go to slash API
[01:24:23] , I should get greeting. Hello, which I do. Yeah. And, and you'll get like all the HTTP headers and everything like that. You actually want to try
[01:24:33]  returning a stream. You can actually return a stream from here as well. Like, and that will be handled if you can build a stream by hand. Yeah. I
[01:24:41] , I, I don't feel like doing that. That makes sense. It's very annoying to do that, but no. So, uh, I mean, just to
[01:24:49]  show, maybe you can use one of the solids like streaming things. Oh no, but you'd have to build some suspense layer there, right? Like, yeah. Okay
[01:24:58] . I mean, we, we, we, we could, yeah, we have to make a server render and yeah. Anyway. Okay. Uh, no, but
[01:25:08]  okay. We're, we're going to get there anyway. So the idea is you, you now already have, you have an API and you have your spa running together
[01:25:16] . You can probably, there's an interesting question. I don't know if you know about this. Does H3 still wrap your error with custom class? Last time I
[01:25:22]  checked, it was a deal breaker. Can't do instance of, do you know about that? No, I'm not sure. Okay. Yeah. Fair enough.
[01:25:29]  Um, we're getting, we're getting, we're getting readable stream. It's easy to construct the class, but it's how do I get it to actually stream
[01:25:41]  things slowly? So if somebody can send me that code, then we can just put it there. Um, just to show that, like, you know, it's
[01:25:49]  just, you just return a readable stream and it'll take care of, you know, doing the streaming for you. Right. Yeah. And that's all nitro's
[01:25:56]  handling. Yeah. And then you can obviously, you know, your whole world of like node.js is available to you. You can build, uh, you can actually
[01:26:04]  use express handler, you know, express plugins and all also, because nitro shims like the node request and node like response objects as well. Right. Um,
[01:26:13]  what are you doing? Oh, nothing. I was just like, yeah, you know what? I don't even feel like doing it. I was like, we,
[01:26:21]  I really started thinking I could build a button that called the API, but you know, no, we can just, just do a quick one. I just do an on
[01:26:28]  click. Yeah. And then the on click, you can just do a fetch call. Exactly. Um, on click. Yeah. Whatever. Make it a lambda,
[01:26:38]  make it a lambda. Yeah. We can just do it in line, I guess. Just do fetch. Yeah. Just do it in line. Uh, fetch slash API
[01:26:46] . And it's just to get, so that should be easy. Um, I'm just gonna, I don't care about async functions. Come on. Then our
[01:26:58] , our dot JSON. And then, uh, and, and then just console log it. Yeah. I think this will work. Yep. Lovely. Let's go
[01:27:12]  back to 3000. See our console. Click it. Yay. Okay. Yeah. Perfect. Perfect. Okay. So now, now let's say, you know, we
[01:27:22] 're building an API and I think, you know, it's more fun, uh, if I can get that file system routing kind of thing in the API directory, right
[01:27:29] ? Like maybe I have like 10 routes. I don't want to declare all of them, register them, have my own router in there. So, uh, just
[01:27:36]  for this, we have a, we have a package called, uh, Vinchy slash router. It has a few common route, you know, file system routing conventions
[01:27:44] , just to, you know, get you kick off, get you started, but you can have your own conventions just as simply. So just do, uh, uh,
[01:27:53]  PNPM I at the rate Vinchy slash router. Vinchy router like this. Yeah. So it's, it's, it's not a runtime
[01:28:04]  router. It's just a kind of a file system. Yeah. Actually, let me see. Maybe when she'd out, it does have a, because it has a
[01:28:13]  simple, like API runtime router also, because that is, uh, API. Yeah. I think. Okay. Yeah. So just, uh, yeah, just import
[01:28:30]  this into my config file. Yeah. What does this look like? What am I importing? Uh, you're importing, uh, from this slash router slash, uh
[01:28:44] , slash API. Yeah. And you're importing, uh, you're importing API router. Is it like, do you know how it's spelled? Uh, it's
[01:28:56]  underscore, uh, it's, it's like lowercase API. Like that? Yeah. Yeah. And so just to wrap your API config into this, it has
[01:29:06]  a few defaults for your API. Okay. Uh, so when you say rapid, what do you mean? Just, just like this object here, just make it an
[01:29:15]  argument of API router. Do this. Yeah. Yeah. You can remove mode, uh, name also you can remove, like these are inbuilt into it handler.
[01:29:30]  You can keep a bill. You can remove base. You can keep, um, and then just add, give it a directory thing, like give it a dir, which
[01:29:41]  would be what folder to look at. So maybe we can have an API folder as well. Right. Do we need a base then if we have any, oh yeah,
[01:29:50]  that's the base. Yeah. Those are independent. So just run this once as well. Okay. Actually remove the handler as well, because now, now that you
[01:30:05]  have in top level, the handler is inbuilt for this one. So, uh, just do NPM run dev. Yeah. Uh, yeah. Move this in here
[01:30:15] . Perfect. Yeah. Yeah. Although this will be API slash API, right? Yeah. Yeah. That's, that's fine. Uh, PM, PM dev
[01:30:23] . Yeah. Oh, yeah. So now it should be. This one should fail. But, okay. Wait, uh, wait, go back. Did it, uh
[01:30:39] , let's go to this one. Uh, let me see the config here. Name mode base. Directories there. Style is there. Handlers there. Plug
[01:30:59] in space. Okay. Fuck it. Uh, can you just undo your changes? I'll just send you, uh, this code. You can just include the file
[01:31:10]  router by hand. Okay. Just copy away. This chat is not enough. I'm, I'm sending it to you on discord. Uh, I don't know if
[01:31:21]  you want to open the chat right now, but. It's okay. Uh, this card's usually off screen. This time it's not. It's okay.
[01:31:28]  Okay. Yeah, I don't mind. All right. This, this will be the most complex piece of code. You guys will see in this whole thing. Because file
[01:31:40]  system routers have regular expressions, which is. Okay. Well, I mean, this is fine. We get to see what it's like to build a file system router
[01:31:49]  here. So I, what, what file should I put this in? In, in the config file itself. Can I put, make it another file? This just seems
[01:31:56]  like a lot of. Sure, sure, sure, sure, sure. Um, I'm going to make. Yeah. Just make a file router file or something.
[01:32:04]  Yeah. And is this all JavaScript? Can I get away with? Yeah. Yeah. Yeah. It's all JavaScript. API router.ts Oh, it's interesting.
[01:32:19]  It doesn't seem to be using file URL to path. Oh yeah. So that, I mean, that might be from, you know, some. I need some
[01:32:27]  other piece of code. I need to export this. Yeah. Okay. I don't know if we want to dig into what it is to define it. Let's look
[01:32:38]  at, let's, let's look at first how to use a router. Yeah. So just, uh, there's a style configure. Okay. So you have
[01:32:47]  to make two things, a directory and a style. So your directory becomes, uh, Okay. Okay, fine. I'll do directory first. Directory becomes, we're
[01:32:57]  still going to do slash API. And then what's, what's actually, uh, in directory put a, uh, Oh, this might be the mistake on us
[01:33:11] . You put a dot in front. That might have been the issue from last time. Uh, but it's okay. Uh, we can have two API routers if
[01:33:21]  you want, like a different sub part, but, uh, put, put style here. Actually it might be better to show this raw thing. Um, and the
[01:33:28]  style is just takes the class. Okay. So import, uh, what did I, what did I call it? It doesn't matter what I called it. Cause I
[01:33:41]  did a deep default export. Let's call it AP API router. Yeah. And API file system routers. Correct. And it's from here. And then we
[01:33:54]  just do it. Like, do I call it? Yeah. Do I just give it an instance? Yeah. Yeah. Oh, it's a class. Just give it
[01:34:01]  a class. Yeah. So I'm going to, uh, whatever. Yeah, that's fine. Okay. So that's not going to be enough because we still need
[01:34:14]  to set up the handler to like, because when you do this, all you've told when she is that, you know, I have a bunch of routes and please
[01:34:21]  give them to me when I ask you for routes, but you still need to like set up the runtime server. We'll get to that. But let's just run this
[01:34:27] . Uh, I think I should have console logs for like any routes I discover. So it discovered this route in your files. Right. Perfect. So, uh, now
[01:34:37] , now go to your, uh, actually you will, you will have to create an API.ts on the top, like as your main runtime entry point. Is
[01:34:46]  this, this refresh? Yeah. I mean, but this is, I'm not hitting an API. I'm hitting our other. Yeah. Yeah. Yeah. No,
[01:34:55]  I, yeah. Uh, like, I haven't done, done this yet. This will not work. This will not work yet. Yeah. Yeah. No. So
[01:35:02]  you need to create an API.ts file. That's not this one. No, no. So this is a file system route thingy, but you need your
[01:35:11]  main entry. You need your main entry handler. Okay. So just, I, I'm going to send you the code for that as well. It's a tiny snipp
[01:35:19] et. Oh, I see. Yeah. Cause you're right. There's a handler API.ts. Yeah. Oh God. This is the worst time for this.
[01:35:35]  So once, once in a while, my, uh, my new arc browser just decides to stop letting me, uh, yeah. Okay. Like navigate left and right
[01:35:46]  on my Mac. And that's when I start panicking, uh, handler. I get this. I send it to you over here in discord. Okay. Okay.
[01:36:00]  All right. So you, you, you, there is one dependency you need to install. Uh, it's part to rejects speed. This handler. Okay.
[01:36:15]  Is, is also okay. Yeah. So this is a little bit involved. Um, yeah. Yeah. So this is typically like, you know, if you want a
[01:36:25]  file system router for your API, you need a router in the middle, right? Like to do the file system part. I got you. So Vinci has a
[01:36:34]  bunch of defaults, which probably work where you can just import an API router and just go, you're showing me the code you would write to actually. Yeah.
[01:36:45]  Write your own router. And I, it, it, it's, it's built on top of like this path to regex thing, which does all the matching
[01:36:54] . I just need to like literally be like, okay, call this handler. Like, um, do I need to install this now? Yeah. I just installed that
[01:37:02]  one package I sent you. So typically you would not need to do that. You just use one of our routers. Uh, it's just not like as robust yet
[01:37:11] . Actually, I think the issue is probably like in that. Yeah. We missed the dot slash. Yeah. Yeah. I think so. Okay. And we can
[01:37:19]  still give that one, that thing a try, but yeah. So this code, if you'll see at the bottom, uh, just go all the way at the bottom
[01:37:27] . What we're doing is we're creating a router with our routes. Yeah. And just calling router.handle, right? Like, and so you, we need
[01:37:34]  a basically a router that takes the event maps, maps the URL against whatever existing routes it has. So then our API, I'm going to rename it to greet to be
[01:37:43]  a little bit different. Um, it, it, uh, it, it's API is different now, right? Like our actual. No, no, it's
[01:37:51]  the same. It's, it's, it's, it's the same. It still uses event handler? Because I just, yeah, yeah, yeah, yeah.
[01:37:55]  Okay. I just passed the event handler. Like, yeah. Then all the native routers will be based on the same server runtime, like, uh. It's just
[01:38:02]  because I saw this event handler here. So yeah, they can be composed together, right? Like they're just functions that. Okay. They, they, they, they
[01:38:10]  just are nothing actually. They're mostly for TypeScript. Uh. So I guess my question then becomes. So you should just, you should be able to call the API
[01:38:21]  slash greet here and be good. Um, let's go back here. Okay. It works. Okay. So yeah, we went a little bit in the weeds here.
[01:38:35]  Um, actually just, uh, can, can we just try the API router thing once again? So you can just add another router at the bottom and comment that one out
[01:38:42] . I think I just want to make sure that, you know, we can just show that experience as well. Like when you don't have to do this,
[01:38:49]  uh, just comment this one out and then, and just add, add API router. Oh, what was it again? It was, uh, it was, we're
[01:38:59]  going to import API router from. Vinchy router. Vinchy router slash API. Vinchy router. Oh yeah. I'll fix it in a second
[01:39:12] . Slash API. Yeah. Yeah. Yeah. And then I just need to go, uh, what is it? It API router arguments. And just pass the
[01:39:26]  base and the door. Base is API and the juror is dot slash API. Yeah. So this, the, the file convention is kind of like the old school,
[01:39:42]  not next file convention, which is like the square brackets or dynamic patterns and things like that. It found it this time. Yeah. Yeah. Yeah. Yeah. So
[01:39:50]  I'm pretty sure this will just work. Yeah. Yeah. That's way simpler. Yeah. Yeah. Yeah. But you've also got to see like, how would
[01:39:58]  you do it if you had to do it yourself? Yeah. If you, if you didn't like, if you didn't like this one, you end up defining a
[01:40:05]  handler. Um, so you can basically create a router. Um, and actually, no, so I just want to take you through this. So if you scroll all
[01:40:13]  the way to the top, you'll see that I import file routes from Vinci slash routes. So all you're doing when you're configuring a file system router is
[01:40:22]  instructing Vinci on what Vinci slash route should look like, but it doesn't actually do anything with it. You just get to import it. And now you
[01:40:30]  get to use it in your router. It exposes the path. It exposes any keys you decided your file system router decide to expose on it. So if you see
[01:40:37]  there's a dollar sign handler that my file system router exposes. Yeah. If you go to, if you go to API router, the other file, uh, the
[01:40:46]  file below that. No, no, the other file. If you scroll down, if you see the two route function, it returns something with a dollar handler. And this
[01:40:54]  is just saying like, you know, this is a reference to a file that dollar handler represents when you actually get a reference to this, there's a few functions that
[01:41:02]  are added. So there's a dot import added to it and a dollar required added to it so that you can do synchronous requires or dynamic imports based on it. You know
[01:41:10] , you can set conventions here because this is default, but you could set other conventions. It could be a different export. Yeah. It could be a different export. So
[01:41:19]  you could put, you could put like loader here or, or route data and it would be able to handle that. So you could, so, so we can
[01:41:28]  try something like, you know, what if this was get like, you know, what if we wanted to be like, you know, this should be a, so make
[01:41:34]  this export function, get export cons, get is equal to this. Yeah. And now, uh, just, yeah, save this. And in, in the API
[01:41:49]  router. Uh, just do pick get capital get from here and just scroll up. I think, uh, there's a school of a bit. So this is dependent on
[01:42:00]  it having default. Just make it dependent on it. Like finding get as an export. So right now, right now it does some defensive pro yeah. Yeah. So
[01:42:10]  right now it does some defensive programming, right? Where it's like, if there's not a default export, don't add it as a route yet. Like things like
[01:42:16]  that. Uh, but actually, no, just go to beat config and enable that router. This is still using like the inbuilt router. Ah, yes. Uh,
[01:42:25]  sorry, my bad. So yeah. Yeah. So, so this was the main reason that you would want to do your own thing is like, you know, you
[01:42:30]  just want your own conventions. Uh, so this is like Svelte kit and solid start have a convention of using these capitals. I think remix two adds this convention
[01:42:40]  as well as using capital get, but we're basically saying here. Yeah. And it found it. Um, let's hope it still works. Um, okay. It
[01:42:51]  didn't quite work. What happened? What happened? What happened? Good. Mod default is not a function. Okay. Oh yeah. Okay. So go to the runtime
[01:42:58] . Go to the runtime. Uh, API, no, go to the runtime. Oh yeah. This, uh, the one on top API. Okay. Yeah.
[01:43:06]  This one. Yeah. Yeah. And so over here, uh, mod dot get is the function you want to use, not mod dot default. So that way, like
[01:43:15] , you know, so that's what I mean by it's all handled by the runtime. Like if the runtime doesn't cooperate with the bundle, nothing works, but it
[01:43:23]  also means the runtime can do anything. Like it can decide to call cat for all four. It can decide to call cat and post for like different kinds of, because
[01:43:30]  you have the method available there. So you can have a get and a post and do the routing in that handler. You just saw where you changed it to default right now
[01:43:38] . Yeah. Um, sorry, a question came up from, from chat. So were you instructing me to do something? I was just, Matthew Phillips is asking some
[01:43:47]  interesting questions in chat. And I was wondering if we can answer them for him. Um, yeah. So, uh, one of them was, yeah, nitro
[01:43:55]  has this like really fast kind of router matching thing. It's called radix. I think radix three or something. Um, it's a, it's a router
[01:44:03]  tree and it does a matching really quickly and it's based on regular expression. So it doesn't do like looping of every router. I think it builds like an optimal
[01:44:11]  kind of regular expression to do the matching. Uh, but yeah, otherwise it's probably in the most simplest sense you can think of. It's like, you know
[01:44:19] , figuring out the first match in the router. Like how else will it know? Like kind of what to hit. So kind of I'm, I'm leaving the fact
[01:44:27]  that the router matching is happening by, by nitro. And they have actually worked very hard to build a very fast router, which like, uh, uses like the cheapest
[01:44:37]  kind of, uh, techniques. But I think at the end of the day, it's like regular expressions. Matt, yeah, I think it's this radix
[01:44:44]  tree thing that, uh, let me see if I can send you a link. We, we covered this on the on JS, uh, stream. I'm pretty sure
[01:44:54]  we talked about this. Yeah. Um, okay. Yeah. I mean, biggest thing here is there's a, there's an infinite amount of configurability in this approach
[01:45:07]  between what happens at compile time. like you can basically set the conventions, um, here. I don't think we're probably going to get much further than me playing
[01:45:16]  with this example. We might actually have to see some actual examples of stuff you've built. Um, because yeah. I mean, do you want to do, do you
[01:45:23]  want to do SSR? I, I, I, I, like, I think, I think we need to, I think we need to get a little bit to
[01:45:33]  the, to the point here. Um, because like, yes, SSR would be a similar thing where you could come up with a convention for your file system routing
[01:45:45] . I mean, there is a, there is a next JS pre-config option where you can get like the next 12 pages directory out of the, out of the
[01:45:55]  box. Right. Let's just look at a couple of those examples instead of building it ourselves. It might be the easiest way to go. Let's go. Yeah
[01:46:01] . Uh, I still prefer it when you drive. Is that okay? So like you can just open the, I think you can clone the repo or you can just open
[01:46:10]  it on GitHub. Like if there is, I should just go on GitHub and just like press, uh, just go into that like editor mode in GitHub only. Like
[01:46:17]  I think that's best. There's an editor mode. Yeah. Just go, go to, go to, uh, go to, uh, uh, Benji.
[01:46:27]  Yeah. Let's do that. Benji. And just press, uh, press dot, like press the, uh, period key. What is this? It opens
[01:46:47] , it opens BS code for you. Like you can't really, I don't know if you can write back stuff yet. Maybe you can, I'm not sure.
[01:46:55]  But yeah, it gives you the whole kind of BS code experience. What, what? If people don't know this. What is this? I, I, I usually
[01:47:10]  use like, uh, stack blitz. I don't know what he does. I don't know what he does. Yeah. What, what, what is this
[01:47:25] ? So, so this is not really quote spaces. This is just like, uh, just kind of the client side of the editor. So it doesn't get saved there
[01:47:34] . But I think it has like a whole gate thing. So you can probably make full requests and all from this thing, but you can't run anything really for that.
[01:47:42]  You need to go into quote spaces. Okay. I, I, yeah, I, I am, I am. I was semi tempted just to pull the repo down
[01:47:52]  so that like, we could like run a couple of the examples. Um, the, but, but yeah. I mean, see the examples are not going to show you
[01:48:03]  anything, uh, anything new for say, like, because none of this innovation is early. Like at the runtime level, like most of these things exist. And it
[01:48:12] 's like, the idea is most of it is about. Right. I see what you're saying. Like, like, like, I'm not going to show you anything
[01:48:19]  new that nobody has seen before. Like, right. In terms of features or anything. I, I, it just, it's kind of interesting here. Cause you,
[01:48:26]  this, this is, uh, like, for example, you're a tan stack router app here for SSR. You have, oh, this is, um,
[01:48:33]  Daishi or isn't it? Or what's what water is this? Uh, I don't know whose it is, but it's a, it's a, it
[01:48:40] 's, it's one that I think has been there for a long time. Oh, it's the super small router. Yeah. Yeah. Yeah. Cause. Okay.
[01:48:50]  Yeah. But tan stack. So, cause you have all these conventions, like, like for example, like in tan stack router, I'm going to, I'm
[01:48:57]  going to blow this up a bit so I can see better. Yeah. Um, the, the route also only, only the router and the client, only the server and
[01:49:05]  the client files are special from a benchy perspective. Everything else is like kind of special also because you specify the handler there. Yeah. Yeah. I see. Cause you
[01:49:14] , you, you've basically like this, this is all out in the open where people, where you've like configured stuff here. Yeah. I think this is, this
[01:49:22]  is all copied from like, uh, tanners kind of like, uh, examples. So it's, it's not, it's already like this much ceremony is
[01:49:31]  already needed. I think. Right. So I just kind of. For, but this is an example of showing how you have cons loader, um, you know,
[01:49:39]  uh, and this is his loader and I'm gathering this works kind of similar. Um, like we can see the file system router for this as well. Like it
[01:49:48] 's, it's out in the open. Like if you go to the config file app.config.js. Yeah. Uh, so if you'll see,
[01:49:56]  we have like tan, tan stack file system router here. This is actually using next.js convention, like the new app directory convention. So you'll see I'm using
[01:50:04]  page layout, that kind of stuff. Yeah. And there's another example in which I use the old next.js like pages directory thing. So, and so this
[01:50:11]  is the, so there's dollar component. And there is a, you can also export error boundary. You can export loading and you can export loader. You can also
[01:50:21]  export a config object, which becomes the routing config and the double dot. And there's a difference between the single dollar sign and the double dollar sign. The double dollar signs
[01:50:30]  are, um, kind of synchronously imported. Right. And then the double dollar signs. Yeah. And so those can be dynamically kind of imported. Right. So
[01:50:39]  they've been cut split. Yeah. Yeah. These are, this happens as part of the initial bundle and this gets code split and loaded later. And can be dynamically loaded
[01:50:50] . Yeah. Yeah. And, uh. Interesting. Some of this, some of this might be from like some experimentation I was doing. But, uh, the API eventually
[01:51:01] . So if you scroll down. Yeah. The API you had just written. I've changed that a bit. No, just in this file. If you go to
[01:51:08]  the bottom, it's almost a flat API now. Like I don't have a bunch of nested objects. And the routes feels like a composable thing that you can
[01:51:16]  put your own router into, right? Like, so there's a tan stack file system router here, but you can bring your own. It can take whatever options it needs
[01:51:23] . So I removed like, and it can actually be a router. That's not even a file system router. It can be like a federated router. You can
[01:51:30]  be fetching code for it from like some random places, like from the internet, from the database, something like that. Like I just made it very open ended. So
[01:51:38]  you just have to give me a list of routes and like, you know, some file parts to map them to. Right. Gotcha. So, I mean, I
[01:51:49]  want to show one powerful part. So if you go to the SPA examples, right on top of the SSR examples here, you'll see there are two tan stack
[01:51:56]  router examples. One is like a whole, uh, an old school next. So if you go to pages, so this is like an old school next.js.
[01:52:05]  Index. Yeah. Yeah. And go to the, go to the tan stack router app and they're both kind of functionally equal. Like go to this and go to
[01:52:13]  this, uh, and this is, this uses pages. Yeah. Yeah. Yeah. And so this uses the page layout and things like that. And they're both kind
[01:52:22]  of just functionally equal. Like both of them have nested routing. Both of them build out to the same output, things like that. Just different file system routing
[01:52:30]  conventions. And all it takes is like in your app config file, you just have different like file system router setups. That's interesting. Yeah. Uh, and then,
[01:52:44]  yeah, just, you can extend this to, you allow any router to exist. So I can do this for the act router. I can make a remix clone and like
[01:52:50]  basically probably less than an hour. I can be like, at least on the convention level and like getting the baseline experience. Right. Cause I have a few, yeah
[01:53:00] , I have the solid example here. Yeah. Uh, let's see one with data. I think it must, so this one is just doing the data in line.
[01:53:11]  I think if you go to go to the solid start example. Yeah. Uh, yeah, that's yeah. Because that one's not actually using solid start. I
[01:53:19]  think it's still. Yeah. It's funny. Cause you, you base this, this isn't actual solid start. You actually just built something with the same convention.
[01:53:27]  Yeah. Uh, that one doesn't go to some, there's some, there's some, go to ID. Yeah. Okay. This one, this one has
[01:53:34]  our data. Yeah. Right. That's, that's cute. Yeah. So yeah, again, this was just a matter of, of doing some configure. I think
[01:53:44]  you did end up hiding this for me. Temporarily funny. We don't even really use this package. Um, but the, like you actually, the code
[01:53:53]  is in here only. It's so I, this was my first example. So go to frameworks, no, no frameworks. No, there's, I built a frameworks
[01:53:59]  folder. Oh, okay. So this is solid start. Uh, and go to index.js. Yeah. This is like the, the same config you've been seeing
[01:54:08]  at other places. Right. If you come here. Yeah. There's a hazard out data. Right. So yeah, all the, basically, as you showed, you
[01:54:16]  can do next app directory. You can do remix style, which is what you did with Tanner. You can do solid start style. It's just a matter of changing
[01:54:27]  the configuration. Yeah. I can also have examples with MDX. So if you go scroll up, uh, in the examples, go to spy MDX. Yeah.
[01:54:38]  And like, I can do this in spa mode and SSR mode with react server components. It's like, for me, it's, it's no big, big
[01:54:45]  deal in person. Like, uh, so you'll see the MDX files and TSX files and you just, you can see the configuration for it. So go
[01:54:52]  to app.config.js. Yeah. Yeah. And these are like, there's, there's a router in here as well. Like, uh, so this
[01:55:01]  is being driven by router and, uh, you'll see that, you know, if there's MDX, I don't look for default export things like that. Yeah
[01:55:09] . Uh, and then if you see here, I just pass extensions, uh, scroll all the way down. Yeah. I'm just passing, uh, I'm
[01:55:19]  passing the MDX plugin and I think, okay. So I think the extensions are part of the default go scroll up. I think over here, I'm just defaulting
[01:55:31]  to MDX also. Yeah. So that just gives it enough information that it needs to read those files, fill them into routes and like make them part of the routing
[01:55:39]  tree available. And like none of my runtime actually needs to be aware of like, you know, some of these routes are coming from MDX. Like it's the same
[01:55:46]  for it. Right. What, one of the things that I actually wanted to show off, but you can't do without the demo is you've built a couple interesting
[01:55:55]  features on top of the router. Like we kind of get it. You can basically use this to define any kind of custom routing system, but, you know, people might
[01:56:03]  be like, okay, so what, you know, veet glob lets you write this logic, but it's, it's the benefit of tying into this routing system is
[01:56:11]  it handles all the code splitting rules, you know, systematically explain, explain the CSS. How does this, like, what does this do for CSS? Right. So
[01:56:22] , so one of the big problems, I think that most of the frameworks have given up on solving mostly is that, you know, actually maybe remix is one that actually does
[01:56:30]  try to solve it properly. Is that there is, when you actually want like CSS files to be imported in your components, you need a way to actually be able to say
[01:56:38]  that this CSS should also go away when my, like, you know, this kind of dependency tree goes away somehow. And it's very difficult problem to solve because once
[01:56:47]  something gets imported, the CSS gets imported. Now you, the only way you can make sure you can remove it is like, if all of the instances of the components have
[01:56:56]  gone away, anything dependent has gone away and that it will never not come back. And, you know, that kind of surety you need so that before you can
[01:57:04]  remove the CSS. Now the one place where you have this information is if your CSS is coped to routes. If your CSS is coped to routes, when you switch
[01:57:12]  away from a route, you know that you can offload that CSS and you have to load the CSS for the new page. And so you actually need your dev server
[01:57:20] , your production server to actually have this strong association between your routes and your CSS. And typically most meta frameworks are able to do this in a way where like, they know
[01:57:29]  that for a specific route, what all CSS needs to be loaded. But they don't have enough, for some reason, they don't do enough to actually offload that
[01:57:37]  CSS when somebody switches to a different route. And what you'll see is that, you know, if you have a, if you have two routes, one where the
[01:57:44]  background is red and the other with no background set, what would happen is if you go to the first page, the background becomes red and you switch routes, the background stays
[01:57:52]  red. It doesn't realize that the background red was just for that page. And so what we do is we actually handle all of this automatically for you. We, we
[01:58:02]  know your routes. We know what CSS gets loaded for each route. All you have to do is you, you use like a special version of lazy that we export,
[01:58:10]  which actually has this kind of like asset handling in build. And so what it makes sure is that, uh, it's typically our version of lazy is typically used for routes
[01:58:19] , uh, like importing the component for a specific route. And what we do is we make sure like we offload all the CSS. When, uh, you go to
[01:58:27]  that page, uh, when you go away from that page. Yeah. Can't use CSS modules. You can use CSS modules, but at the end of the day
[01:58:35] , uh, the priority is in making sure that what I'm doing with raw CSS works, right? Obviously I like, you know, I can solve this by doing like
[01:58:44] , yeah, this is interesting. Yeah. Cause remix does this, right? Like you can literally not use CSS modules, throw some CSS on a page, go between two
[01:58:52]  pages and have the styles change. It was actually very cool demo in one of the earliest remix demos that did this. Yeah. But they don't allow you to import
[01:59:00]  that. It's not through an import. It's through, uh, it's through going, uh, going through that export constant links thing. Like you have to,
[01:59:09]  you know, do that, there's a special export to get that feature. And I wanted the out of the bottom box experience to be that, right? Like that
[01:59:17] 's what you want from your CSS handling, especially when, uh, ideally we should be also trying to do that, but we doesn't know enough about like sub routes in
[01:59:27]  your thing. So for it, it's one big app, all the CSS belongs to probably all of the app. And so it just lazily loads the CSS doesn't
[01:59:35]  offload it. But I think only once you have knowledge about the router and like the different routes, can you actually start off loading CSS when you don't need it
[01:59:43] ? Okay. What I've done in the background while you were just talking here is I've loaded the latest version of Vinci based solid start. Cause I think, I
[01:59:55]  think, I think we need to, to show a little, like we've been showing how the build stuff we've been showing some examples, but what does this actually
[02:00:03]  end up looking like when a meta framework actually does the work of actually wrapping these details for you? And why is this interesting? Cause I, I, I think this is
[02:00:15] , I think this is an interesting situation in general. We can actually showcase a couple of this stuff, but I wanted to just, I pulled down solid start here. Um
[02:00:21] , the first thing. Can I show, can I show one, one interesting feature? Like I wanted to show how far we took like the, like, you remember
[02:00:31]  how, uh, when Jair Samner was talking to you, how he wanted you server to become like a horizontal technology, not a vertical technology. I mean, do
[02:00:39]  you have an example in here? Yeah, yeah, yeah. I have examples across the board. So, uh, I'll just show you a quick like source code first
[02:00:47] . Like, so where it comes from, if you go to, uh, uh, packages. Yeah. You'll see there is this V Vinchy references,
[02:00:56]  uh, thing. It's a few files. It's like different parts of the puzzle that have to be fit together. Uh, it, it, it has knowledge about
[02:01:03]  client components and server components as well. But what we are using it right now for is a server action set up, right? So, uh, if you scroll up,
[02:01:11]  I'll show you a few places this is used. Uh, a few examples all the way from like vanilla. So go to the vanilla example. Okay. Yeah, this
[02:01:18]  is good. vanilla spa. Yeah. Yeah. This is a vanilla spa index. HTML. Uh, it imports your app client file. Go to your app client file.
[02:01:27]  All right. Uh, and you'll see this imports say hello from underscore, uh, from actions. So to clarify, there's no framework here. This is just been
[02:01:38]  vanilla. JavaScript. There's no, yeah. Yeah. Okay. No react. No solid. Nothing. It's just funny. You have the TSF extension.
[02:01:46]  So I was kind of like, yeah, I'm used to it. I just do it by default kind of when I'm copy pasting things around and like, you
[02:01:52]  know, kind of, I did, I added a middleware there for like some, just like, you know, testing things out. But yeah, if you see this
[02:01:58]  actions file, it has use server on top. And that has all the implications you're imagining, right? So the say hello stays on the server. It becomes part of
[02:02:06]  the server bundle that gets built with this. You can, you obviously have to deploy it. If you want that experience, you get to import it. All of Type
[02:02:14] Script works out of the box. This is actually persistent, right? Because I'm keeping like, it's only one instance of this thing. So it's persistent. So
[02:02:21]  my store count keeps on going up. And, um, uh, you already seen how it's used in the client, right? You just import it and you just call
[02:02:28]  it like it's an async function. Right. You can go to app config.js. I just want, yeah. Two seconds. Yeah. So literally you just
[02:02:35]  went console log await, level await. Yeah. Um, and then, yeah, the question is, how did you wire that up? Well, so it's,
[02:02:44]  it's a, it's slightly, uh, involved. You have to add a server plugin. The reason for this is because eventually at the end of the day, you
[02:02:52]  need nitro to actually combine all your server actions together. Uh, even if they're built kind of as separate entry points. Uh, and that's what this top
[02:03:02]  section is doing. Then you add two things. One is to your client. You add the client router plugin so that it knows, uh, how to interpret your server on
[02:03:13]  the client. Yeah. So it's, uh, so it's, it's just, you know, does the transpilation, makes it a proxy reference, whatever it
[02:03:20]  needs to do. And then you add a server router for, uh, for handling the actions. But server router has an inbuilt handler in it because you know, there
[02:03:30] 's a typical way you want to handle the server actions. So there's one inbuilt, but you can override that handler if you want, if you want to write
[02:03:36]  your own, you can pass that and you, we allow you to pass a middleware. So middleware is a concept I recently added. The idea is you can write
[02:03:43]  one middleware file and use it in as many routers as you want. And you can choose to skip routers or you can choose to include all routers and the
[02:03:51]  middleware only gets bundled once and it gets run before everything. Okay. This question's got to come up here at this point. this is cool because you obviously
[02:04:00]  it's the vanilla, um, use server example, but didn't we do this before? Wasn't there like something called bling? Um, why, why, why
[02:04:10]  aren't we just using bling here? Actually, I've not tried it yet, but we can use it. So bling bling would work out of the box
[02:04:20]  in this because it's all based on a wheat plugin. We wrote the reason is because it wasn't built around. It is built around those dollar sign convention. Like
[02:04:27]  there's no technical reason per se. Uh, it's, it's built around because if you see like the Vinchy references thing is also built in user land.
[02:04:35]  It's nothing that Vinchy has to do inbuilt for it. So bling could just work as well. The conventions I wanted to try out were this use client
[02:04:43]  to server, server components, client components thingy. And so for that, I needed like a full cross module thing. Like, you know, things going both ways
[02:04:50] . I needed, I needed the concept of use client where the server could, uh, give up and just be like, you know, this is client trend and things like
[02:04:58]  that. I need, I need that to be a little clearer for me. Cause sorry. We had island dollar sign and we had server dollar sign. Those sound like
[02:05:07]  the same thing. What's the difference here? Maybe none. Oh yeah. Wait. So there's, there's one issue, which is that all of the previous solutions
[02:05:17]  we had were because they do not have kind of control of the server. Right? Uh, so what, what was happening as an issue is that your server would be
[02:05:28]  dependent on whatever was accessing these server functions to be imported on the server as well. If that didn't, if that didn't happen, those server actions would never get registered
[02:05:39] . Yeah. Yeah. And that means that you would just be like shooting blanks. Right? Like there's just be like, you, you call those server action,
[02:05:45]  but they never got imported. So they never got registered and that had like its own series of issues. Yeah. There's, there's two, two problems I think.
[02:05:53]  Right? Right? Like someone puts a server function, a lazy loaded component. You never navigate to there on the, on the server. It's not, there's
[02:06:01]  no backend for it. So someone client navigates to the page, tries to call the server function. There's no backend. Solid start has this issue today. It's
[02:06:07]  kind of annoying. Yeah. Our router is smart enough to handle it, but if it's in an end user client, uh, like lazy thing that they, that the
[02:06:14]  end user did, it doesn't load properly. Yeah. Second thing is island optimizations, the other side, and it's the same. It's a, it
[02:06:21] 's not, it's not too bad of a problem, but in solid start, whenever you go into an island, do one of those imports, like it basically makes a
[02:06:28]  separate bundle per use per entry point. It can't bundle them together. So it's like a little death by a thousand cuts. Like it's not that bad,
[02:06:37]  but essentially you need a bundler to understand the dependency graph of these things and how they tie together. Whereas- And they're typically tied to the routes. The main thing
[02:06:47]  is that they're tied to the routes. Yeah. Because you're, you can bundle the islands that are used on the same route together or like, you know, it
[02:06:52]  uses dependencies of the routes. And so that's why I think you need a bundle that's aware of your router to actually do this well. Right. And the tricky
[02:07:00]  part is bling's compiler part of the solution is great. Get stuff like secret dollar sign and all these, you know, tricks laser loading, but it does not have
[02:07:09]  knowledge of the router or the dependency graph. It's basically a Babel plugin. I mean, I think it's in, so in a sense, uh, bling
[02:07:17]  only solved half the problem. We still need that half and applying bling type transformations to something like this is important, but you actually need the bundler to be aware
[02:07:28] , unfortunately, which makes things a little less generic than we would love. But that's actually the only way you actually fully solve the problem. Yeah. But I mean,
[02:07:38]  this use server stuff, I was able to make it incredibly generic, right? So you see, I'm using it in a vanilla thing, but I'm also able to
[02:07:44] , if I think solid spa should have that as well. If you go to solid spa basic, go to app, okay. No, uh, go to SSR
[02:07:52]  basic. Okay. SSR basic. Yeah. Yeah. So this has, this has actions as well. And, uh, where am I using it? Count count.
[02:08:05]  I think counter probably uses it. No. Uh, you see what? Yeah. Okay. This, I'm just doing a top level console of eight here as well
[02:08:14] . Yeah. Uh, and so this, again, the same experience. Um, if you go to app config file, it's probably the same amount of code. Like
[02:08:23] , uh, just add, add those plugins in the specific areas and add the router at the end. And then the last, yeah. Yeah. Yeah. And then,
[02:08:35]  and then the same thing is happening at the react RSC level also. So if you scroll up, there's an RSC example, go to spa, go to
[02:08:42]  the spa one. Yeah. And if you look inside app, there's probably actions, but this one has the whole experience. This has server components. This has like as
[02:08:53] ync functions, uh, all of that. Uh, you know, um, counter is going to be a used client and then, uh, actions is going to be
[02:09:02]  used server. This is like your handler, like your main server action handler. Yeah. The examples are a little messy because they want to show someone how they would implement this
[02:09:11]  less what the end user would use. Yep. So I think if you go to FW, if you go to the one on top, uh, so spy is like
[02:09:21]  the raw one. FW is one where I've like actually built some abstractions. Uh, this is what I would want somebody to use typically, uh, go
[02:09:30]  to app. You'll see, there's no Vinchy here. Almost like none of these files actually even use Vinchy, uh, for anything. Uh,
[02:09:37]  they just, yeah, do that. Say the client. Yeah. So on, on change, I just call that only here. You'll see. So I've published
[02:09:47]  two packages, Vinchy slash react, Vinchy slash react server. And I think Vinchy slash react server DOM, things like that, uh, which
[02:09:54]  just exposes a server component thing. Yeah. And if you go to app config.js. Sorry. Uh, I think this is probably like that simple kind of thing
[02:10:06] , like how you had done it. So this is another example of how you do an RSC kind of thing. So this is, this is actually full RSC.
[02:10:14]  Like I can add a file system router and you would get to like, this doesn't have SSR properly yet, but an SPA with like, you know,
[02:10:21]  the server sending you a whole tree and then you're just populating the client that, that, that, that setup is already there. This is, this is, this
[02:10:29]  is an index HTML file. So this is literally an, an SPA being driven by like react server components because that app.tsx file never goes to the client.
[02:10:40]  Um, this, this is, this is completely on the server. Like this never goes to the client. And so there's a lot of things that need to be
[02:10:47]  managed for this because now that you have a space where your, there are, there are assets, there are CSS files that are being just loaded on the server and never on
[02:10:55]  the client. And you need to account for that. You need to actually send that style.css file along. So there's a different kind of, you know,
[02:11:01]  thing you would need to do. And if you were stuck in a framework, you need to like redo an entire pipeline just to be able to do that. But we have
[02:11:08]  a few like manifest API's that help us do this very quickly. Yeah. Um, but yeah, the idea was that we, we build a, so like,
[02:11:15]  you know, references thing to give you functionality, like use server, use client, use worker, all of these are just pragmas that we can compile and kind of bundle
[02:11:24]  together for you. And that works in vanilla stuff. It works in solid, it works in react. It works with react server components all across the board. Right. Yeah
[02:11:33] . No, it's super powerful. Yeah. I, I wanted, yeah, I wasn't sure you had a good demo for this, but the vanilla demo actually
[02:11:40]  really says it all. Um, because yeah, what I just did funnily enough, uh, yeah, I, I was like, solid start is an example,
[02:11:50]  which is where I've actually refined this, these patterns considerably just to make, you know, work within our framework. And I just switched branches between the, the Vinci
[02:12:00]  branch and the, the, the original, uh, solid start branch. And what's really cool about this is if I go into the packages, there's a bunch
[02:12:08]  of garbage in here right now because, um, solid start has all these things. So basically I, I, I left start node. Um, and I left, uh
[02:12:19] , sorry, let, let me see if I can refresh this. No, but those, those node values don't have deleted on that one. I think it's okay
[02:12:28] . I'm just going to clean up here basically. Yeah, exactly. Because they're installed already. I'm just going to clean up some of this stuff for a
[02:12:35]  second so that I can show the Vinci example, because I left start node so I could still run the old start side by side, but, um, all of this
[02:12:43] , I'm just going to delete for a moment. Um, I, I think, I think, yeah, we're good. Um, the reason I want to talk
[02:12:52]  about this is because if you ever seen the salt start project, it looks kind of like this, right? There's, there's all these things and these things and
[02:13:01]  these things and these things and these things and these things, right? And if you, if you look at the start new project, it looks kind of like this. Um
[02:13:09] , there's, there's, there's this, there's this. Yeah. There is some stuff. If you notice there's islands and spa handling already, but like
[02:13:17]  some of the, my, my nightmare was those adapters. My other nightmare is like we go into beat and this plugin JS and I was like, okay, what
[02:13:25] 's going on here? We got like 10 plugins that, no, six plugins that feed into each other. I mean, it's, it's not a bad setup.
[02:13:31]  Um, we're doing all this. It was getting convoluted. Yeah. It was getting pretty convoluted. It was, it was, it was,
[02:13:37]  it was, it was like, yeah. How many lines is that? Uh, I, I, I think about 800. Let's yeah. Okay. 730.
[02:13:46]  Right. Um, and basically the equivalent to that. And this doesn't, and this, this doesn't even have the file system router and everything like that. Yeah.
[02:13:54]  Yeah. Right. I forgot. Yeah. It's cause there's also FS router here. Yeah. Uh, which one's a long one. This is long.
[02:14:02]  I think manifest is also decently long. Yeah. Manifest is not bad, but yeah. I mean, yeah. Basically 300 lines for handling a manifest, but
[02:14:13]  like the config here now looks like, okay, create, this is the defined config function we were talking about a moment ago that we did ourselves. Um, we get
[02:14:21]  those server references for, for both use, server use client. We have our static router. We have our SSR router, which is mostly the same as the other router
[02:14:32] , which does our plugin, merges the plugins in does a few aliases. We have the client router, same, almost same stuff. And then that references thing.
[02:14:42]  And that's, that's, that's, that's basically it. This, this 120 line file, basically I did, there's some tools to count code and
[02:14:50]  I compared like, this isn't a hundred percent done yet. And there's some stuff missing some features and stuff, but I compared it like left or right. And it
[02:14:58]  was, it was literally, I got the delete, like I got to keep 10% of the code. I got to delete 90% of the code of solid start by
[02:15:07]  moving to Vinci. Um, just, just to kind of put that in perspective. Um, if this isn't, that was a crazy number for me too,
[02:15:18]  when I heard that. I mean, we're not, we're not done yet. There's a couple of things I'm pulling into the router, which is why that
[02:15:23] 's happening. But like, like it's, it's like 1200 lines of code now instead of 10,000. So just, just to kind of put this in perspective
[02:15:35]  of what, what this means to have this kind of stuff, because yeah, there is an FS router. We, we have some rules here to configure, but this
[02:15:42] , this router here is like what, 130 line file compared to like a thousand line file. Um, this, we, we had the opportunity here to also fix a lot
[02:15:55]  of these like key pieces that made examples not work as well. Uh, things like, uh, client mode being isolated, right? Like I haven't actually shown this
[02:16:08]  at all on stream yet. That's why I was just kind of taking a moment to talk about this. Like, like root TSX was fine, but the problem is
[02:16:15]  a lot of apps actually, you know, when they're CSR mode, they actually kind of start like this, right? You can go, you go, like you
[02:16:22]  set up some providers, some error boundary, suspense, you inject your routes. This is your experience when you use create react app on a client side app. And we
[02:16:30]  kind of got away from this with H uh, from with, uh, with SSR. And unfortunately server components has this weird thing where there's actually kind of a static
[02:16:40]  part of the top of the app and a non-static part because the way mutations refresh. So like I realized that if we changed the route to actually be more like the
[02:16:50]  old create react app kind of style where you, it's the beginning of the app. And if we actually move the document into, um, this is some middleware
[02:16:59]  stuff we're playing with. Um, don't worry too much about it into the, into the server entry, then you fix CSR mode, you fix, um,
[02:17:09]  you know, some, some of the oddities on how, how these pieces work together. Another thing you notice here, yeah, we're playing around with middleware again
[02:17:16] . And the reason we're playing around with, yeah, I haven't PM, PM, I get the reason we're, we're, we're playing around with
[02:17:22]  middleware is yeah. You could define it. Um, you know, wrapping our handler, but we wanted a way to be able to do it globally. Um, you
[02:17:33]  know, like everything was too wrapped into itself in terms of our API routes and our server functions and stuff. And this gives like this, this made the ability to do stuff
[02:17:43]  universally easier. Like there's a lot of good things that we picked up both from patterns from Nitro and from being able to use something like Vinci. Um,
[02:17:52]  plus our learnings from our first time through. Um, I mean, yeah, yeah. I mean, there's a saying almost like, you know, if you want
[02:18:00]  something right, you've got to do it twice or something like, I feel like we're just doing that. Um, yeah. I mean, just go on the
[02:18:09]  solid start repo and look at the kind of bugs they get almost 90% of them aren't about the stuff that like we actually worked on, on solid starters. All like
[02:18:19]  the other underpinnings like, Oh, this doesn't work on windows. What's wrong with this adapter when I deploy them for sale, blah, blah, blah,
[02:18:23]  blah, blah, blah, blah, blah. And it's like, like, trust Nux to do what Nux does. Trust solid to do what solid does.
[02:18:31]  Trust, you know, sorry, a nitro to do what Nux does. Yeah. I'm so looking forward to just being like, please file this in the
[02:18:40]  nitro repo. This is a nitro bug. Right. But like this, like nitro's powers Nux. So it is pretty, you know, yeah,
[02:18:52]  exactly. It has to be so mature and robust. Like, right. So it's just gone to enterprise already. Yeah. So there's, there's some more changes
[02:19:01]  coming with this, but I just wanted to kind of give you an idea because I honestly, when I switch branches every time I'm reminded, cause I have to delete
[02:19:07]  all the packages. Um, so this, this is, this is just like it, the cool thing here is other than the, this kind of, you know, entry
[02:19:18]  changes that we're talking about here, maybe like defining a middleware step or these kind of, you know, the app change entry client is basically identical entry server,
[02:19:28]  other than moving the document here is identical. The routes folder is the same. Like the hacker news example, which is always my example, um, is yeah. It's
[02:19:40]  like this, this is the same hacker news example. Like we basically your source folder other than the entry files is, is, is the same. I think we're
[02:19:51]  going to improve some conventions around, uh, route data loadings. I mean, it's not, I think I know we will, but I just wanted to kind of
[02:19:58]  point out here that like, um, generally speaking, we were able to build the same experience just with incredibly less, um, code to maintain. Yeah. And this
[02:20:11]  was like, I think a week of work needs to be like overall, like, yeah. Well, they're going to get the, those pieces in. I, I
[02:20:19] , I, I mean, we still got more work on the experimental side, right? We haven't brought back in the, uh, the islands router, but we,
[02:20:25]  we do have, uh, islands work. Yeah. Like I believe I just have to go into the config here and go, uh, just change islands true or something
[02:20:37] . Yeah. Yeah. I think the hacker news example should be a good one. Yeah. Oh, this one also. Yeah. This one has a counter or something,
[02:20:45]  right? Like you need some plan. Yeah, exactly. So you, you know, the, the basically, yeah, you can see here the define config pattern where
[02:20:56]  there's a start option, but the rest of the options here are actually just the stock Vite config options being passed through. So other than this start can start option,
[02:21:04]  everything is Vite. Um, right. That that's generally the pattern here. I don't know. I, I think this is a pretty cool project. I it
[02:21:14] 's going to have a very big impact on what we're doing here with solid. Yeah. I mean, for this, like I, I'm like, I am just
[02:21:22]  such a big customer of this thing myself. that I care like absolutely zero if nobody else even uses it because I have already used it enough to make it worth all my time
[02:21:33] . Like, and all of our products that are like company are now being built on top of that. Like, because it just gives me all the control. Like, you
[02:21:39]  know, with Vite, how you feel like you can just do anything with it, like on your app. That's how I now feel about my server. Like I
[02:21:46]  can do anything. Eventually I can trust that it will deploy to Dino or Vercel or Netlify or Cloudflare or anywhere. Like I, without
[02:21:53]  me having to worry about, you know, figuring out all that in the middle. Yeah. I just love that. Like you could see from these examples, you could literally
[02:22:00]  just set up, you just set up, like you even made a very basic version of solid start in here. Um, so like, yeah. And there is a basic
[02:22:10]  version of solid start in there. Like that's the framework's example. That's why I've been dead. Like, right. People can feel like they can build
[02:22:16]  their own one. The next, like probably five files. Yeah. And that like, obviously you've built stuff that's basically the same as next JS. I haven't
[02:22:25]  seen any, anyone build the SvelteKit plus sign router yet, but I mean, it's completely doable. Um, if you, if you, yeah, it
[02:22:33] 's so doable. Yeah. So Uh, we could redo it right now, but actually it's okay. We don't have to do it right now. I don
[02:22:40] 't think, I, I think, I think we got pretty deep already when we were looking at the, the other routing solutions. Yeah. Yeah. Yeah, no,
[02:22:48]  for sure. Um, yeah. Uh, chat's been a little quiet for a while. I want to, I want to invite them back to, to have,
[02:22:55]  to, to talk some stuff because I, I feel like we went and showed what we wanted to show. Um, but yeah, let's, let's get some questions
[02:23:03]  in here for Nikhil for a moment. Let's, let's, what's up. So, uh, support or contribution. Yeah, of course. I mean,
[02:23:10]  support is always great. Like, you know, because when I, when you build something, you just follow the happy path because you know, the happy path, but
[02:23:18]  do you never find out where things go wrong until the rubber meets the road and people start using, using it. And so obviously we already tested well enough and like, you
[02:23:27]  know, windows and macOS because a lot of my, the people at my company use windows, but it's always helpful to have people use it in terms of contributions.
[02:23:36]  I think like, this is something that Ryan probably understands from my perspective is that I don't like maintaining things. Like once I'm done with something, it's like
[02:23:44] , so tough for me to get back to it, like kind of do the gardening part of like, you know, the projects. And so I have very deliberately kept the
[02:23:52]  scope, like of Vinci itself in, in terms of like, if you think about the scope of what it's trying to take care of, it's very big,
[02:24:00]  but the code base is like, maybe like another thousand lines or something. And the thing is, it's delegated all of his responsibilities to nitro, to wheat and
[02:24:08]  like a few wheat plugins. And so the idea is that any development that needs to happen, happens on top, right? So all my RSC stuff has happened on
[02:24:18]  top. Solid start is built on top. All of it happens in user land. When I need to build a specific API router, a certain convention, I don't go
[02:24:25]  to Vinci and print it. I build a separate package that I can, you know, maybe it's still part of the Vinci project. Maybe it comes out and
[02:24:32]  like, I just delete it and I let it, let people just write their own routers. But for me, it's very important that the the scope be minimal
[02:24:38] , that it remains in kind of in control and just like doesn't go out of hand. And my main purpose is that it should foster innovation on top of it. And
[02:24:50]  it's completely designed in that way. It exposes the raw wheat plugin APIs to you. And you can just go ham on top, like you build your own frameworks
[02:24:58] , build your own opinions, how about the raw nitro configuration? The thing is, I've tried to avoid exposing most of the nitro configuration, because what I have
[02:25:08]  to do or what Vinci has to do is to make sure it gives you a consistent experience in development and production. And so it's not as easy to just allow you
[02:25:15]  to configure some wheat stuff. Because during development, you're in a very different environment than usually nitro expects you to be. Because you're in this kind of wheat
[02:25:23]  environment and you don't, I like, so nitro's typical dev experience is that it doesn't ES build like rebuild of your whole server every time you change something.
[02:25:35]  So it doesn't actually do HMR per se. It does a full rebuild of your server, restarts your server, runs your server in a separate worker actually. It
[02:25:43]  doesn't even run the server on the main thread. And so I actually removed all those things. I built like a different dev server, which runs on the main thread
[02:25:50] . All the wheat kind of servers share a module scope because sometimes you need to communicate between them during development just so that, you know, they can figure out what the other
[02:25:59]  is doing, especially the server and the client, right? The server needs to know what the client is importing. So it needs access to the dependency graph from the client.
[02:26:07]  I think, yes, I'm answering the nitro question. So that's why I've tried to avoid exposing too much of nitro because I have to fulfill the
[02:26:15]  same obligation. Like let's say you, you do something of like the, uh, the default imports thing, like the unimport thing or like the unstorage thing.
[02:26:23]  All of them depend on nitro doing something during development that I can't fulfill in wheat very easily. I have to rebuild all of that. So it's like most of
[02:26:32]  those things can be added in user land. So default imports like that automatic imports can be just added as a wheat plugin or unstorage can just be imported and used.
[02:26:41]  So I just felt like it wasn't being very helpful to expose too much configuration. If you see my configuration, I think I have like three or four options only in like
[02:26:49]  the top level, like the routers, there's a few, a bit of the server config and like, uh, just the name of the app, like just for
[02:26:56]  logs and all like, There's one thing in nitro that I'm actually interested in, um, around this zone and that's, uh, the pre-rend
[02:27:06] ering and stuff like that. Do you have any, do you have any thoughts on how to handle pre pre-rendering in Vinci? I guess that's more of
[02:27:12]  a build step thing than a devs thing. It is, it is a build. I mean, typically, uh, your dev step can also decide to like, you
[02:27:21]  know, do a pre-render and then serve that startup as the same thing as just returning the server result. Um, but yeah, during the build step right now
[02:27:28] , what we do is we, uh, respect the same kind of pre-render config that nitro has, which is a list of routes. And we just kind of
[02:27:36]  render those routes for you statically and put them in the public directory. But I mean, I think the, we still have to figure out the best way for this.
[02:27:45]  What you actually typically want is routes to be able to inform you that they need to be pre-rendered or not. And that means that it somehow has to be coming
[02:27:53]  from the routing configuration, informing nitro, which routes want to be pre-rendered on what schedule, things like that. And so I have to figure out,
[02:28:02]  and that means that you have to kind of statically analyze these routes to figure out if they need to be pre-rendered or not, because you don't want to
[02:28:08]  import them and then see inspect that config object and things like that. Um, but because of like, you know, respecting kind of that localization thing that you want things
[02:28:17]  to be close together, then pick options that make sense with the route should be in that route file. And so this, this is a little bit of an unsolved
[02:28:24]  problem space here, but I already have in my mind what how I would do it. You would be allowed to have some kind of configuration object with a pre-render option
[02:28:33]  on it, or just be doing export cons pre-render. And then I would just statically analyze the result of it and give it to you during the build config,
[02:28:41]  like, uh, so that you can decide what to do with it, like, you know, how to interpret the pre-rendering. Yeah. I mean, I
[02:28:47]  put Nikhil on the spot right now, because that's like the, I, out of all the features that I was asking for, I think that's like the
[02:28:52]  last one that I, that I'm looking at. Yeah. That's all gone yet. No, no, but it's been at the back of my mind as well
[02:29:00] , because I, I think I'm building a dog site and I need some like pre-rendering for that as well. Um, but, uh, so I need
[02:29:09]  to solve that there anyway. I think you've already answered this question, but like you, you gave us some examples, but your, your hope is that like,
[02:29:18]  if Tanner wants to, you know, gets, uh, tan stack start going, he's just going to look kind of like what I've done at solid start and then
[02:29:27]  put that in his user land. Right. Yeah. Yeah. Yeah. Yeah. You can copy one of my tan stack router examples. Like I have two, three different
[02:29:35]  examples with SSR, with SBA, everything. Yeah. Yeah. I, I, I, I've taken some of the configuration stuff further and whatnot, but
[02:29:44]  yeah, we, me and Tanner and Nikhil are still very much in conversation and very much aligned on this stuff. Um, but yeah, I think Vinci, I
[02:29:51]  think you built a bunch of examples to show that it could initially, I think there's enough here to do what needs to get done. Yeah. Uh, let's
[02:30:02]  see. Yeah. It's an interesting question. Yeah. Uh, okay. You've been referring to this as a router, but it's very different from what we typically
[02:30:11]  refer to as a router. Do we need a new terminology? Hmm. I mean, see at the basis of thing, I have of it, I'm thinking of it
[02:30:18]  as a router, right? Because it's saying for this section of routes do X, right? Like treat it as an SSR app or this section of the routes treated
[02:30:27]  as a, uh, client side app, but this section of the route treated as a static file system route server, like, uh, static file server. Um,
[02:30:36]  I do agree that the term route maybe gets overloaded in this scenario, but I think in the true sense of router, a router in Vinci is a router. Like
[02:30:47]  it, it, it picks up a bunch of URLs in a sub section of your app and decides who to kind of send it to and like, you know, how to
[02:30:54]  build it out and how to be able to serve it. Yeah. Meta routers. It's funny. Cause I, I, I use the term meta bund
[02:31:03] ler, um, in my stream post, but then you, you also use the meta bundler in your V talk. Uh, I saw, yeah, it was from
[02:31:10]  your thing only because if I have to describe it, I can't give it a really good descriptive word. So that's why I've just started calling it like a server
[02:31:17]  side SDK for JavaScript now. And the idea is it is a bundler. It is a router. It is a file system router. It is a development server.
[02:31:24]  It is a production server. It is a server runtime that, you know, goes across the platform. 90% of this comes from nitro. The other 10, 20
[02:31:33] % comes from wheat. A thin layer comes from me on top. Uh, Oh yeah. Yeah. This question. Yeah. Yeah. Exactly. Talking about layers.
[02:31:43]  So, uh, I, I share your fear of flares, uh, personally as well. Right. Uh, but I think typically, um, especially when like wheat
[02:31:54]  does not actually want to extend itself to become like that server side framework layer, uh, as in like, whenever you talk to the wheat guys, they don't want to
[02:32:04]  become the CLI. They don't want to become the service. I say they're like, you know, build your own CLI, build your own CLI
[02:32:09] . Don't, you know, try to trick the wheat CLI thinking into that it's a server side framework at that moment. And they also want you to do your
[02:32:16]  own builds on the other side. Nitro doesn't have like the development kind of server experience, uh, that wheat is able to give you, especially for the client.
[02:32:25]  And even for the server, they don't have that HMR experience. They actually rebuild the whole server, reload the whole server and things like that. And so I,
[02:32:32]  instead of building another layer, it was, I needed a way to marry these two and have them do what they're good at, uh, really well. And I
[02:32:40]  saw that the, that kind of collaboration was actually shared between the two teams as well. Like the white, the wheat guys have actually expressed a lot of times that, you
[02:32:49]  know, it might be fun to integrate with Nitro and like, like, you know, have some examples where Nitro is being used with wheat. And I've seen
[02:32:55]  interest from the Nitro side where they've shown examples of like wheat being used in Nitro, for example, Daniel Rose talk. And it is that kind of,
[02:33:03]  that showed me that, you know, there is this, there's a room for an abstraction here. And when I saw one, that's when I realized that there is
[02:33:10]  actually a layer very, very desperately missing for us to like build actually like, you know, complex server side apps, which are not tied to opinions from like one meta framework
[02:33:21] . Right. You, you, you kept on building this layer that, that is Vinci over and over and over again. And each time it wasn't super simple
[02:33:31] . It was actually kind of substantial. Complicated. Yeah. And like half the times I didn't have half the features I'd built at the previous time or add,
[02:33:38]  like, you know, half the time I didn't have adapters because I didn't go that far. Other times I didn't have a good build setup because I didn
[02:33:45] 't go that far. Like, you know, every time you have to do it again, again, you're compromising on half the things because, you know, it
[02:33:51] 's just a lot of work. Um, so I agree, uh, that it's, you should be fearful of layers. Uh, but you know, just like
[02:33:59]  all of computing, things are built on top of each other. Uh, and, uh, I think the way you write your code has almost nothing to do with Vinci
[02:34:11] . Most of the, like, if you see most of your code, you're never importing Vinci in your code except maybe like the event handler function. So it's
[02:34:17]  really a build tool that doesn't even come with a lot of its own opinions. Like it's the, maybe the only opinions it has are the same opinions as beat
[02:34:26] , right? So all the other opinions are kind of whatever you want them to be, like whatever file you want to use as your handler, whatever way you want to do
[02:34:34]  your file system routing, whatever exports you want, they're all up to you. Right. Um, there's a question. I think Vinci is Vite based
[02:34:42]  though, right? You can't use web pack. Yeah. Yeah. Don't use that pack. Yeah. Yeah. Even if you want to, don't use it
[02:34:49] . Yeah. It's about duplicating the conventions and the like thing, like you could basically build something that apes next JS, but then it'll be built on
[02:35:00]  Vite, which sounds like a win anyway. Exactly. It'll be 10x faster already. Did you talk about the name yet? Is it because of Nikhil's
[02:35:10]  and Renaissance man? No, I don't give myself that much credit, but it actually, the name does come from my love for the late, great Leonardo da Vin
[02:35:20] ci. Uh, there are a few things I actually shared a birthday with, uh, Leonardo da Vinci. So I was like, you know, one of those people
[02:35:28]  who like looked up, uh, who share, who you share birthday with and then I started reading about him. And it is just crazy. The kind of like disciplines that
[02:35:36]  he excelled in and was able to just go wide, you know, across the board with like creativity, design, innovation at that stage and at, you know, super
[02:35:45]  young. And so I always wanted to like, you know, use some, use that name for something. And it just seemed very appropriate to use it here. Uh
[02:35:52] , yeah. I mean, it comes from da Vinci. I have like a, I think a GitHub, uh, organization called Dev Vinci for devs. Uh
[02:36:00] , but yeah, I mean, I just, I just love the name. I love the story and I love the man, like, uh, everything that he was able
[02:36:08]  to accomplish. And I think, uh, you know, it's somebody actually kind of like, look up to it. You know, you want to be like the da
[02:36:15]  Vinci of your times kind of, that kind of thing. Um, so, uh, the name comes from that. Obviously V-I-N-C-
[02:36:23] I was probably not available. And, uh, the X, it was just to replace the C. I mean, the pronunciation is Vinci. How many packages have you
[02:36:33]  called Vinci over the years? Because I know this isn't the first one. So not a lot of packages actually. So a lot of V-I-P
[02:36:40] -Os I've called Vinci. Okay. But never felt good enough about it to release it. Uh, this is the first one that I was like, you know
[02:36:49] , I'm going with it. Like, you know, this makes sense. There's the V-I for V-E-E-T and like, you know
[02:36:53] , kind of giving a hard tip to V-E-E-T as well. Uh, and, uh, I don't know. It just, I just really
[02:37:00]  like the name. I hope people don't start mispronouncing it like Ving-Chi and things like that to make sure people know it's V
[02:37:06] ing-Chi. Or, or, or, Da-V-E-T-Chi. Yeah. Every product can use a good story, go along the
[02:37:13]  name. There you go. Yeah, for sure. Um, yeah, definitely. Uh, yeah. Okay. This is a fair question. Uh, we can both take
[02:37:21]  a stab at this. Although I think I'm, I'm directing this one more because it's in user land. Um, what's the next step to get Vinci
[02:37:28] -based sales already? Well, right now we were actually supposed to talk about this, but we accidentally doing the beat talk the whole time. We were finalizing the
[02:37:36]  middleware level, uh, layer, which will help me get the auth examples. What I'm doing right now is I'm going one by one through solid starts examples and
[02:37:43]  converting them. And you can actually see this happening, uh, in real time in the repo, because I basically have been all the ones like not bare cause it's too
[02:37:57]  simple, but most of them, I've been making a Z version so I can compare the old version with a new version, new version side by side as I go
[02:38:04]  to make sure I have the behavior. And I'm just converting these one by one. Um, all of these ones have been converted. We MDX works. We actually
[02:38:12]  fixed MDX and Nikhil did it. And the main branch of salt start, which I've been having issues since Vite four now works with MDX. Release
[02:38:20]  went out yesterday 0.36 anyways. Um, but what I want to show here is that like the tailwinds, all styled MDX hacker news, um,
[02:38:29]  these ones, uh, work, uh, uh, some of these examples don't exist anymore. This, I don't know what that's doing there. Um,
[02:38:38]  Did you already check the MDX on the main branch? Yeah. Oh, it works. Yeah, that, that fix was all we needed. Um, so the next
[02:38:46]  thing I need to do is get the auth examples and the Prisma examples working, which means I need to get the middleware, um, nailed out. And then that
[02:38:55] , uh, that will get the TRPC. Uh, I need to figure out what's up with V test web sockets, because we don't own that layer
[02:39:05]  that, that this is going to get pushed out responsibility. Yeah. That's going to get pushed out of here for, for now. It might come back in the future
[02:39:13]  as an example. Um, that will only leave the movies notes and to do MVC examples. And these ones, uh, the notes and movies are based on islands,
[02:39:25]  which I, I'm not going to let islands prevent us from releasing the beta here because they're still experimental. Um, so I'm not too worried about this.
[02:39:36]  Yeah, they work, but not the router. And the problem is I want to pull stuff back into the router. Similarly, the create route data and stuff. I want
[02:39:47]  to pull that back into the router. Cause I, if you look at these examples, can I, can I show you really quickly what I, well, actually hacker news
[02:39:53]  is a way better example here. Look, look what's going on here. You're going to see something. This is the part that I was hiding here. I
[02:40:01] 'm part of the thing is, okay. We imported create handler and start server and some props object thing from salt start, but because Oh, you're right. You're
[02:40:12]  right. You're right. You're right. You're right. You're right. You're right. You're right. I do this all the time, but,
[02:40:17]  but like, yeah. So let's look at an actual project here. What I mean is because of the way we're doing this props in on the document, we
[02:40:25]  don't have all the uppercase, uh, uh, components anymore. So the API surface gets much smaller. Children as props. That's the, I think the
[02:40:34]  new convention, you should, you will have to sell people on it. But yeah, I think children should be passed as props between like routes and like, well, exactly
[02:40:42] . The router has to be updated to fit this. But what I want to have to point out is there's a reason for that, which I was trying to talk about
[02:40:48]  a bit on last stream with the data fetching. Um, because the, if you want to have server components, you can't have context. I'm still working
[02:40:55]  through that a bit, but what I want to show is that these imports in the client of server entries come from solid start, but like nothing else comes from solid start in
[02:41:07]  these examples. I've updated them. This is from the router. This is from solid. This is local. Like what I wanted to kind of show here is that
[02:41:15]  solid start doesn't, except for that entry stuff, like the middleware and the entry doesn't need to be someplace you import from basically everything comes from the packages because ultimately
[02:41:27]  I want to get to a point where router is in here and you can just replace it because as long as like, as long as you have file routes, as long as
[02:41:36]  you have, which this does come from solid start because it exports the routes from it. As long as you have, and this is just json file routes returns j
[02:41:43] son. As long as you have a convention for the, for the routes, any router can just do the conversion on the fly and do it. So technically speaking, solid
[02:41:53]  start could support any solid router. I, I was serious about this app entry. I want it to feel like CRA where it is the app entry where you can do
[02:42:04]  that. So basically two categories, finish up the middleware to finish up most of the examples, uh, sorry, three categories, um, finish porting stuff back to
[02:42:14]  the router, like create route resource and whatnot. And then third category is missing features from Vinci right now. The only one that's on my list is that pre
[02:42:24] -render, um, capability so that we can do the, like the equivalent of the static rendering adapter and finish the single page app mode, which works fine. It just
[02:42:32]  serves the initial page from the server right now, but it completely isolated. It doesn't have all the bugs we have right now, um, for it. So those three
[02:42:40]  things and the beta is ready to go. Um, that's, that, that's the thing I, as I said, I'm not too worried about the islands routing
[02:42:47] . We're working on that. Um, there's just a few things in flux right now, right? Cause solid 1.8 is making good progress. Um,
[02:42:54]  I've also been working on solid 2.0 at the same time. Um, and obviously the solid beta two that I'm talking about right now and been trying to do
[02:43:03]  releases for bug fixes for solid beta one. Um, as I said, it did a release of all these things last week. Did, uh, there's, you
[02:43:11]  can, yeah, what was I gonna say? Uh, 0.36 was released on solid start for the initial beta. Um, solid, uh, 1.7.
[02:43:22] 12, uh, came out with a bunch of, uh, with some updates this week. Um, I have new beta versions of the dom expressions for solid 1.
[02:43:32] 8. And, uh, yes, next week, I think we're gonna unveil what we've been doing with signals for solid 2.0. So, um,
[02:43:41]  just a lot of stuff going on. Nice. All right. Let me see. Did I miss any questions? Yeah, to be fair, it's not, um
[02:43:53] , it's not any, if you've been watching my streams, there's, there's nothing new here. Honestly, this stream and my last couple of streams put together
[02:44:01]  and then made into a tight package is basically my V talk. But, um, like you, you guys already know everything I'm going to talk about at the V conference
[02:44:09] , but I just tried to do it in a very presentable way. Um, there's just so much work going on. Um, I'm trying to understand what
[02:44:28]  this question means because if like you set up the configuration and then the stuff just works, but I'm, I, I mean, I guess there's always that you can
[02:44:44]  make the configuration always, you know, slightly more easier. Like, for example, you could have like out of the box or routers that you can just initialize
[02:44:51]  that has a few defaults, uh, things like that, or maybe like a plugin system. Actually, I don't want to introduce another plugin system, but yeah,
[02:44:58]  I, the, the main piece of composability would be routers that you could get out of the box. For example, I give you that server actions router, right
[02:45:06] ? That you can just include in your plugin. And that just gives you a thing that handles our actions. So that kind of functionality, we can just expose a react
[02:45:14]  spa router that has some react plugins and in it, some spa configuration into it. And those, those just would be packages on top. Like that's, I don't
[02:45:24]  want to bring that into the core layer. The core layer will be very thin and driven by raw configuration. Not a lot of defaults also like, uh, because I
[02:45:33]  mean, defaults become like an API contract that you have to continuously maintain. Then I want to not have like a lot of default API contracts just be everything driven by
[02:45:45]  whatever your configuration is. Right. Speaking of configuration, this is actually a question that I have too, because I've been trying to figure out how to set up V test
[02:45:53] . Um, so what we can do is probably the best thing is that Vinci should wrap over V test and because I don't know how you would configure V test
[02:46:08]  properly for all your various environments. Like how do people do it right now? Yeah. I mean, that's a great question. I think we probably need to talk to
[02:46:17]  someone and the client, like how, how do they manage all that in their V test config? Uh, I'm not sure. Uh, how do they run server
[02:46:27]  tests and client tests separately, things like that. Like all those kinds of things. I think the testing stuff is something I need to figure out, but I think it's
[02:46:35]  probably something that Vinci will take a little responsibility for and like make sure that because it's taking, it's the bundler, right? The bundler is part of
[02:46:44]  your testing setup. Like how, how do you test without awareness of what the bundler is going to do? Right. Yeah. If you're doing unit testing,
[02:46:58]  I guess unit testing, you don't need to think too much, but if there's any, like, you know, higher level kind of integration testing or doing browser testing
[02:47:06] , you probably need all the parts working properly. But I think a separate V test file as Brandon is recommending, uh, can work like, because you'll just have some
[02:47:16]  like index.test.tsx. It's importing some other TSX files. You make sure like your solid plug isn't there is in there in the V test
[02:47:25]  config. I think that would work for you. Yeah. Yeah. I'm not as familiar on the setup on V test. And I, I feel like we just need
[02:47:33]  to have a quick session with like an Alex Lowe, who does all the testing stuff pretty much for solid, um, just to get an idea or some, someone
[02:47:41]  on that side. Cause like there, there's a lot of variability in these test setups. And I feel like, I feel like, like there, there's probably an
[02:47:51]  answer here. I'm sure it's a separate V test config. Yeah. This is what I was saying that. Yeah. Okay. Let's, that's,
[02:48:04]  that's good. Yeah. Cause that's one of my examples on my list. I actually like our list of examples here. Cause they give me a chance to touch on
[02:48:10]  a lot of different types of technologies. Um, what is, what has Vinci just joined? Uh, it's a meta bundler that sits on top of VE
[02:48:20] AT that ties together file system routing and, uh, like VEAT bundling to serve as almost like a base for building meta frameworks because the 80% of code
[02:48:33]  in most meta frameworks is all the same, whether it's SvelteKit, Astro, solid star remix, whatever. Quick city analog. Yeah. All of them
[02:48:43] . So the idea was, Oh, could we generalize those pieces and, and quite a few have asked that question, but the, often we get mired in,
[02:48:55]  um, uh, opinions, um, that are, that actually wrap up very hard on the frameworks themselves. People to react dev, they fall react conventions. People are
[02:49:05]  view dev, they fall view conventions. So a lot of thinking here is about how to do this in a way that, um, finds the right abstractions. Would you
[02:49:15]  consider merging with VEAT? I think you already said they weren't interested, but I don't think so. They're, I think they're looking for tools to
[02:49:25]  be built on top of them, but yes, definitely. I would love to shift the maintenance burden of this to some, to someone else, but, but yeah.
[02:49:35]  Yeah. Yeah. Yeah. Yeah. I'd maintain it if nobody else. Yeah. We're, we're just wrapping up a bit here on the, on, on
[02:49:41] , on the Vinci topic, which talked a bit about solid start, uh, talked about, um, because we're, we've been rebasing solid start onto Vin
[02:49:49] ci. Um, yeah. I don't know. Does anyone have, yeah. Does anyone else have any other, uh, questions for Nikhil while we have him
[02:49:57]  here? How, how night it's probably it's almost two 30 in the morning for you? I think. Not, not that bad. Yeah. Not that bad.
[02:50:05]  Yeah. Yeah. No, because I, I want to listen to, uh, do you talk about Svelte and Svelte, right? I'm here
[02:50:14]  for the show. Yeah. Yeah. All of this is the prelude to the main show. Yeah. Oh, is that people want to hear me talk about signals
[02:50:25]  and Svelte and ruins. I see. Um, you just call it ruins. You don't call it ruins. Um, but no, I didn't say
[02:50:38]  that. Um, uh, Oh, what's okay. Sorry. What's next for Vinci? There's this question is what next after solid start, but I'm
[02:50:51]  going to take this as what's next for Vinci or you think you're almost done. No. So actually the, uh, the two things that I'm keen
[02:51:00] , uh, three things, actually, there's the whole pre-rendering kind of ISR thing. Like, you know, how to play well with CDNs
[02:51:06]  and things like that. I need to just learn from like, you know, what Vercel is doing, what Nux is doing, figure out what is the
[02:51:13]  abstraction layer there. Second is testing. And third is, uh, web sockets. So I, I, you know, the server led needs, needs, needs to
[02:51:21]  have web socket support on whatever platform we deploy. Maybe it can restrict support on some platforms if it's not available, but on whatever platforms it is available, I need access
[02:51:32]  to it. Like, because, uh, I want to build like those web socket kind of based applications. So that has to be handled natively by Vinci. Uh
[02:51:41] , but apart from that, I don't, uh, Vinci itself will not add new features per se. It will try to expose as many of, uh, nit
[02:51:50] ros and weeds features it can without like, you know, making it more complicated than it needs to be. Like, if there's some features that I think can be done
[02:51:58]  in user land, I would allow, I would prefer that because the main intention is keeping the surface layer very, very small, uh, in terms of the code I have
[02:52:06]  to maintain. Even though the scope can be big, I'm standing on the shoulders of giants for almost everything we're doing there. Like that's how the code gets
[02:52:14]  to be so small. And so I intend to keep it that way. And, uh, I'm, yeah, I've tried actually very hard up till now to lot
[02:52:21] , let the scope expand, even though sub packages have included in there. I don't enjoy seeing them there because it feels like, you know, they're kind of a
[02:52:29]  crutch there, but for now it's fine. I just get to develop them quickly, but maybe they go out into some other data. I feel the same that
[02:52:41]  it's crazy that after this change, another thing that's been going on in the solid community is that there's a new solid CLI that's much more powerful than what
[02:52:47]  I built for start. And they they're getting the ability to actually do the start templates. It's not very far-fetched to picture that when solid start gets
[02:52:56]  perfect, you know, CSR capability that we just update the starter templates in, in like the templates repo to be built on whatever start is. And then the CLI
[02:53:06]  just becomes solid CLI and then the solid start repo is literally a single package. Like we are, we are very close to it not being a mono repo. Um
[02:53:17] , so yeah, it's, it's very, very cool. Um, uh, does Vinci expose an API? I want to try it as a core for a
[02:53:26]  similar project. Um, what, what sort of API, like everything is in some way, so it's completely runtime. Like if you, if you saw, you
[02:53:33]  could actually do node and run your config file, the big, because the idea is it's completely a runtime driven thing. Like the CLI literally just does that. So
[02:53:43]  you can actually just like import, create app in your own node file, do whatever you want on top of it. It exposes a serve function and a build function.
[02:53:52]  You can call those if you want, or you can do something else with like the app you caught. You will get access to the config, all the routers you
[02:53:59] 've configured and things like that. Right. According to Vinci co-based Nikhil is a JS, JS doc developer, not TS developer. Okay. Yeah. Let
[02:54:06] 's talk controversy. What's up? No, no. So this, uh, this was my big lesson from understanding kind of Rich Harris's argument about, uh, JavaScript
[02:54:16]  and JS doc. And it's, it's mainly, uh, it's mainly coming from, uh, the perspective of a library author. I think the biggest,
[02:54:25]  biggest advantage that JS and JS doc has that as is that, like, I am reading the source code when I go to definition, like for any of the things, like
[02:54:34] , even when I'm doing it, like in my app, whenever I go to like, uh, I go to like, see where something is imported from, it's
[02:54:41]  the raw JavaScript source code that I wrote back then I make any changes. I try them out. It works in my example. I just copy, paste that into my
[02:54:50]  repo, push it, release it. And so the development cycle, the debugging cycle, I just, we don't have like the Vinci repo has zero build steps.
[02:54:59]  Like nothing gets built it. Like it just continuously is always live. And so I can just start running any example. I don't have to run any other dev servers
[02:55:07]  for it. Like no other watchers, nothing like that. It's all like always coming directly from source. Uh, and the source is also of a way that I
[02:55:15]  can copy paste it around into the browser, test some things out there. Um, and at the end of the day, like, uh, like if i had used
[02:55:26]  typescript i would still have wanted to do it in a way where i'm being able to use the source directly in my project like i'm not doing a build step and
[02:55:36]  the only issue was that like like our previous solid start like our older version it's all written in typescript and it still doesn't have a build step because that part is
[02:55:44]  so important to like doing iteration and debugging and like you know doing fixes and things like that and so i'm i can't give that up like for no like for the
[02:55:54]  small amount of convenience like writing raw typescript gives me it's not enough to like let go of their convenience of doing the fixes and the debugging and like just like patch package
[02:56:07]  and things like that like uh all of that is just too too important to like uh you know fight over js versus ts like that and of course i love typescript like you
[02:56:18] 'll get strong types for everything you use from winchie like very strong types uh uh but yeah you don't have to read the source code i have to read it
[02:56:28]  and like maintain it every day and like debug it so it's very important uh that uh that it'd be maintainable and uh and yeah i mean kudos to rich
[02:56:41]  Harris for like stand taking that stand and i think i think it's the correct one yeah it just keeps going back about you svelte copying solid solid copying svel
[02:56:49] te svelte copying solid i i don't know there's a lot of learnings here that i think can be generally known like you you realize these things i don
[02:56:59] 't know i still don't like typing js docs but i like that's where most of the benefit comes in yeah yeah i think i think it's a very it's a
[02:57:09]  very decent experience like obviously my preference would be i just write raw typescript files and it works everywhere but it's not the situation right now i don't want to have
[02:57:20]  to write typescript files run a build step and then be able to use something like that is the thing i just want to avoid um that it does look better yeah i
[02:57:31]  agree typescript does look better but uh not not you know not pretty enough for me to give up on all the other things uh okay i got a i got another question for
[02:57:44]  you just because i think this is a fair question a lot of people kind of come in and they see people come on stream and talk about stuff role models how they learn where
[02:57:52]  they got to um i feel like i'm too far removed from that it's been like 20 years but yeah you're a little a little bit a little bit oh hi
[02:58:00]  suesh um so okay it's been uh it's been kind of a wild path so you know typically just like with most parents i think my my parents sent me to some
[02:58:13]  computer class back when as a kid to like i think i learned visual basic back then built a few like you know drag and drop uis that's when i my interest
[02:58:23]  peaked didn't learn enough but got an idea of like you know that you know computers can be controlled by like writing lines of text then in class 9th and 10th
[02:58:33]  i did computer applications as like an optional subject that's when i learned java for the first time and learned programming and got good enough that you know i could do some like
[02:58:46]  simple like ask i text based games in it like things like that um then eventually i discovered youtube i discovered and no actually my greatest learning actually came when i was in grade
[02:58:59]  12 when i had to build a website for the model un conference uh i was hosting back in school and we didn't have good developers and so i just learned html
[02:59:09]  and css and i've seen that desperation and like wanting to build something has been the biggest driver of learning for me it's like mostly i don't know anything about
[02:59:21]  something that i just you know imagine that i should be able to build and then i just learn everything that is involved in building that and i'm okay taking time typically once i
[02:59:31] 've learned the things involved in building it i most of the time give up on the project because in the back of my head i know what i'm doing it for it
[02:59:39] 's because i want to learn these new things sometimes the project is interesting enough to finish it but i don't feel guilty over unfinished projects because it's like i typically learn so
[02:59:50]  much from any new project i do uh that uh the best the best thing for me has always been just focus on building new projects or like i think it's uh it
[03:00:02] 's great to just try trying to copy projects that already exist like you know try to bring one opinion you think is you know different from the existing library try to recreate some of
[03:00:12]  it try to bring your own opinion uh that that's been my style i have typically not had a great college experience when it comes to like computer science education per se i always
[03:00:22]  felt like you know they're taking four months to teach something that you know typically if you're building a product you would need to learn in three to four days like that
[03:00:30]  databases class took like four months to teach me like simple sql and postgres and things like that and like once i had to start building my startup product i had to
[03:00:39]  learn that in like three days four days to like fit the timeline and so it's just i think a very different reality from what you actually hit at your work where you need
[03:00:48]  to learn technologies very quickly and so the thing you need to be really good at is to like you know know about the fact that there are these unknowns here there are a
[03:00:58]  few knowns that you know go with the confidence that you'll be able to figure out the unknowns and everything that you need to figure out the unknowns is online and i think
[03:01:06]  it's that kind of philosophy about any new project i take i think that just lets me be very confident you know whatever comes my way it'll be you know whatever it is
[03:01:17]  it's it's probably either been solved before or like you know there are the pieces are there in the world to solve it you know no problem is really that impossible per
[03:01:28]  se right no yeah i mean i don't know if that's a great answer because i can't you know i'm too young as well to be like you know this is
[03:01:36]  how i've learned very well but when i look back to what i've done most of my learning has happened like this like anything new that you see from me it's
[03:01:44]  happened because i built a project that i needed to learn how to do that for uh there's no other way i've learned anything actually really no no and that's that's
[03:01:55]  very true um that that's that's how these things actually tend to go once you kind of leave that so i think i know i think that's great advice um i think
[03:02:02]  if there's one prescriptive thing i could say which is like a much simpler thing than like you know just go build things is like read uh read the code from
[03:02:09]  the best open source projects out there like just imagine like you know you're getting to read material from like the best physicists right like that's the kind of research papers you want
[03:02:21]  to read to figure out how to write good research papers right and so then the same is true for open source and everything is available to you like like how react has been written
[03:02:29]  is available to you how solid has been written is available for you to read and so if you are to actually improve the way you write code the best thing to do is
[03:02:37]  actually to read a lot of these libraries and their source code whatever library you use go read its source code like you will never be like uh you'll never regret it plus you
[03:02:46]  will just be way more informed about what your library is doing uh and you would feel the confidence that you know i could have like most of my most of the times i've
[03:02:55]  read the source code for something i come out of thinking i could have written this and there's a lot i learned in the process but it just makes me more uh more
[03:03:04]  aware of what is happening in the ecosystem and like actually gives me more confidence about my ability because you also get to see that you know none of these people are like some like
[03:03:14]  you know aliens or something that are writing like some magical kind of in kind of enchantations that are just making a code like work it's it's that steve jobs
[03:03:23]  thing of like you know everything around you has been built by people like not much smarter than you and i think that both that realization that confidence that comes along with it and
[03:03:32]  all the learnings that comes along with like you know reading people's code and like becoming you know once you knew if you want to become good at writing something the best thing
[03:03:42]  you have to do is that you know read a lot first then write a lot and so those are the two things i've told you is like basically read a lot of code
[03:03:49]  and then write a lot of code like the but you don't like to write boring mundane code so just do it for projects that you like to uh like to see be
[03:03:57]  in the world right like or projects you already like and you want to copy them yes no that's the that that that that is that is continuing good advice um yeah i
[03:04:12]  think we're gonna wrap up here on with nikhil and vinci um is there anything you want to shout out i there's a question here where's the best place to
[03:04:19]  discuss vinci like what this i mean i think i guess that's still the github repos probably where uh most of my attention would be but yeah maybe we open
[03:04:30]  up a discord like if if there's enough people showing interest and things like that we'll open up a discord so that people can come ask for help and things like that
[03:04:40]  um step i get yelled at by yeah no no anything else you want to anything else you want to shout out what about the solid discord yeah i mean the people are probably going
[03:04:52]  to be talking about that around start for a little bit but vinci expands beyond that so um yeah i mean the solid people also like the thing is i have stopped spending
[03:05:03]  too much time like i don't have enough time to be on discord very long now so uh i i'm i'm out of the conversation mostly nowadays um yeah that's what
[03:05:12]  that's great at signs for yeah those those i end up seeing yeah no the parasocials right getting yelled at by ryan clorence will make you learn
[03:05:24]  a lot especially about legal issues responsible open source maintainer then sounds like vinci needs more maintainers yeah i mean always i mean yeah i mean uh i would love all the
[03:05:44]  help i can get but my kind of solution to making sure it doesn't require a lot of maintainers is keeping the surface area very low uh in terms of the code
[03:05:54]  i i think there's an interesting place where we're finding a lot of symmetries like yeah we're using nitro but we're also like tend to use the other
[03:06:03]  stuff i feel like the unjs community um their discord was actually private until recently um they're now uh open discord and there's a lot of overlap there in terms of
[03:06:14]  the sentiment um so right no i i'll i'll talk to um i'll talk to you as well like about uh seeing if he if he wants to include vinci in
[03:06:26]  the unjust namespace but if even if not like maybe i can just share the discord for a bit like because the relevant people are probably uh oh yeah brandon i would love
[03:06:38]  i actually yeah we can do a call sometime later uh uh and discuss like you know how analog can play along with all of this um but yeah more uh yeah i'm
[03:06:51]  keen to now find out how what people think about this and you know uh how we can take this stuff forward uh because this is the kind of layer that just really gets helped
[03:07:00]  by get more getting more standardization more kind of robustness more stability like this this is not where your opinions get involved like you just keep it simple that like just make
[03:07:12]  it works definitely and with that i think we're gonna call it um thank you for joining me today nakil i've learned a lot uh it's very powerful um uh
[03:07:24]  project it's made this new move for solid start possible which i'm very excited for we got a little work to do still but it's it's looking very very promising so
[03:07:35]  thank you very much and uh we're gonna let nikil go now so have a good one yeah and we're gonna get to this week in javascript here in a
[03:07:44]  moment all right how is everyone doing people still awake all right yeah no that was a lot of fun i i i keep it's funny because like we we come at different
[03:08:05]  sides of the coin but like we seem terribly aligned sometimes it's so funny like i when i was like really hyping on the astro thing when you're going to everyone
[03:08:12]  being like what about this what about this idea you know with astro um you know i i i i come to nikil um you know and i'm like i was
[03:08:21]  thinking this i what do you think about pitching it this way to the astro guys and nikil's like oh i built that last week and i'm like what and he
[03:08:28] 's like oh no no i like i like on astro he's like no no no i just went and built it last week and i was like what what so like um
[03:08:36]  it's it's very cool to see these projects come to fruition because we keep you know we keep on struggling on the same kind of stuff and we keep on learning we
[03:08:43]  keep on getting better at it um i'll only be able to sleep yeah yeah we're gonna get there very very soon um i i was able to get a little bit que
[03:08:58] ued up here um for all you lucky that this week in javascript's happening a little bit earlier this week although when did primogen start streaming on fridays i never
[03:09:08]  had a primogen conflict before but now he's like streaming at fridays around noon one o'clock almost my exact same time so um it's cool last week he
[03:09:16]  came and dumped a whole bunch of people on us after he's done but i never remember him ever being active on fridays he streams every day now two to three times a
[03:09:25]  day ah okay yeah yeah that that that that i mean he there's a reason he's the you know one one of the best um big big fan uh it's just
[03:09:35]  you know what i mean like you're not competing with him in in in this category i could i could pick my hottest topic the thing that everybody wants to hear from me
[03:09:45]  you know like say svelte 5 and signal stuff and i mean primogen could be like i don't know playing around with some funny green screen trick and it'll like
[03:09:58]  have you know 20 times the number of viewers so yeah yeah yeah he'll still active in the chat yeah all right all right all right so let's get ourselves ready for
[03:10:14]  this um there's some you're still around yeah yeah yeah myself yeah my people do go back and watch these five hour streams surprisingly so you know there's that as well
[03:10:27]  but uh yeah let me get this all synced up here um because yes okay we're going to talk about svelte 5 and ruins a bit i haven't dug
[03:10:39]  as deep as some people have so we're going to actually get some of my honest reaction here i kind of do this on purpose um i'm sure everyone's here to fill
[03:10:48]  in the rest of it um i already have some thoughts obviously but mostly reacting to the reactions i i i actually i read the article but i didn't actually go to play with
[03:11:01]  it or do anything at all yet so like i don't have there's other people who have more informed opinions about the specifics but i think as long as like i i
[03:11:10] 'm pretty confident we'll be able to you know take this on for real right now and understand what's going on enough um but i think uh we're not going to know
[03:11:24]  the full story until we talk to someone from the svelte team themselves someone who actually built the features that we're talking about and luckily for all of you all we
[03:11:39]  will be having the one and only dominic ganaway come on the stream and tell us all about what he's been working on with svelte um in a couple
[03:11:48]  weeks next week i'm in new york um unfortunately and then the following week um i'm actually away again but we're we got vconf going on so like it
[03:12:00]  kind of the timing makes sense but um right now i mean i told him i'd confirm 100 with him next week but we're looking at october 13th dominic g
[03:12:11] anaway going to come on and talk about his story of how he went from creating the fastest virtual dom framework to bringing svelte into the future we're here his story
[03:12:23]  we're going to learn all about svelte 5 in the process but i'm very interested about his years on the react core team i'm interested about um his time
[03:12:33]  spent with lexical this guy has always been a huge inspiration to me um i've watched his work right from when i first saw it um you know back around 2016 and
[03:12:46]  with inferno um he's defied logic you know it's so funny because people didn't realize back then but like virtual doms have always been kind of a little bit
[03:12:55]  slow you know and he showed that the virtual dom didn't have to be slow um so yeah amazing engineer great guy we're gonna have him on stream to talk about his
[03:13:06]  stuff i should meet up with richmond i'm in new york um yeah i i tried to arrange it with the people in our community who do it i i think it
[03:13:19] 's a little bit too late now i'm just not very i don't have time to do that kind of stuff but yeah i'm at ijs on i believe th
[03:13:27] ursday so i'm gonna be around wednesday and thursday night um in new york city um so yeah i yeah yeah exactly like i don't think i don't
[03:13:47]  think we're gonna i'm gonna give a bit of i i i don't know 100 and i you know i'll save it until we actually go through the stuff and go
[03:14:03]  through the reactions um yeah i i i'll have to see what this one is i probably already have it if it's if it's relevant um yeah i i have that
[03:14:15]  one what else do you have for me yeah i mean svelte 5 is not out yet right um yeah thank thank you for the for the first for this um yeah
[03:14:36]  where is it nothing's off the table we deliver showcasing things and say so we can gather feedback exactly this i use a stream for this kind of stuff it's even more
[03:14:47]  preliminary uh kind of deal uh when i have ideas then you're going to go to an rfc process i i think this is exciting i think doing the blog article
[03:14:58]  and the video and stuff and announcement styles is is is an exciting way of doing this um okay so we're almost ready here let's uh let's get this going
[03:15:15]  all right okay cool all right how are we doing with three hours and 50 minutes in the stream that's a good time to start this week in javascript i think um
[03:15:27]  yeah prime's got 2 000 viewers on twitch right now all right it's all good let's um let's get the banner up and let's get started and talk about
[03:15:41]  this week in javascript which for most people there was like one really big announcement the funny thing is i was so absorbed in that announcement that i actually missed a couple
[03:15:53]  other things that were going on and we're going to talk about the big thing which was the preview for svelte 5 obviously for our there's there's other things that
[03:16:03]  might be bigger for other people but obviously with our audience signals reactivity this is a big topic it's kind of like my area of expertise we're going to talk about this
[03:16:14]  but before that you know i'm figured we can look at a few other things you know in and about um like we always do uh so let's get warmed up for
[03:16:25]  this week in javascript okay so to begin with i i love seeing this tori story i'm going to do a little solid news at first um there there's been
[03:16:39]  a kind of push on uh getting tori and solid demos up and i'm i'm pretty stoked about this uh i i think moving to desktop moving to mobile is really
[03:16:50]  interesting space and uh it's great to have partners like this that that are doing you know such a good job of of showing what's possible you know you build a library to
[03:17:02]  build it on primitives and then see people actually take it and build amazing things that you like didn't even imagine at first so i'm very stoked about what what this
[03:17:12]  um you know means for stuff it's going to be hard because it's felt stuff's going to like filter through the the stream the whole thing but there there is some other
[03:17:20]  really um you know things that went on like for me personally this week it really started because i was i i i i mean i'll show you right now because i'll do
[03:17:35]  this right now you can get the kind of back door here into this i don't have any ongoing articles i i mean i guess i have the two-way binding as
[03:17:42]  a two-way street article which i haven't released yet which might be actually really relevant now with some of the criticisms that are coming towards the svelte um this is
[03:17:49]  all about the dangers of two-way binding and how we don't do that um but if you look at my most recent article it's about sixty five hundred you know
[03:18:02]  sixty five forty which is you know okay on views but not great and if you look at the stats i don't know if i can see this when you look at the sources
[03:18:09]  google makes the kind of peasley amount um okay this is not the right week of stuff let's look at the month for the whole article yeah yeah exactly twitter is good google
[03:18:20]  is decent but the thing is twitter is always going to be in this kind of mid-range right the trick is you want google search and like these android kick quick boxes
[03:18:30]  to kick it over over the wire right let me show you the difference between an article that gets picked up say by google right what that looks like the difference is when an article
[03:18:41]  gets picked up let's do infinity here gets picked up by google these two way outweigh like the twitter or the dev2 stuff like it's it's it's
[03:18:55]  usually not even freaking close um the google search box stuff and often even though twitter and well svelte.dev really pushed that one cool even even though twitter um you
[03:19:10]  know is a large number here classically for my articles reddit was actually the thing that got it going it was always the place that i that got the initial chunk of views
[03:19:22]  if i go through my historicals on on any article that you know picked up reasonably well like this one usually i think let me see here let's go all time infinity
[03:19:35]  it's hard to see reddit was like other stuff caught up over time but it was always reddit that led the charge and usually i had a consistent thing as articles that
[03:19:44]  picked up well in reddit would actually pick up well on google again so you can see the google search making up the vast majority of of these numbers coming in so i was
[03:19:54]  very disappointed when i when i learned out that i don't know if anyone's been to our javascript recently on reddit our javascript let me see if
[03:20:03]  i can go here they closed the community down so you can't like post anything anymore um like they control the threads so i went to post to a bunch a few other communities
[03:20:14]  or something like oh maybe our web dev and all this and i basically they told me because i you know haven't i think i posted them a couple times in the past
[03:20:24]  but because i haven't posted like other content um that i was self-promoting too much uh which is kind of awkward because if you go to like a beginner reddit
[03:20:34]  you can see a bunch of articles that are like oh learn how to do this do all this kind of stuff but the general reddits don't want to get flooded with
[03:20:42]  that stuff which means there's this really awkward place for articles like my my last article the islands one where you're talking about it's not promote promoting like any specific framework
[03:20:54]  it's talking about technology and analyzing like if i copy the text that article made it into a discussion post reddit would you know have no problem with it but these but because
[03:21:04]  it's an external link it basically is like self-promoting and got removed hacker news i i showed this years a couple years ago kept on saying you're over self-
[03:21:12] promoting and i'm like is it promotion and the and the reason it is is because you're sending it away from their site to your site so you're promoting yourself
[03:21:21]  right um i i always get responses back and forth and i'm not going to show this from the reddit mod right now but it was like he was basically saying like you
[03:21:29]  know the second that you like it doesn't matter if it's like not for a company it could be even for your like or like for anything the second like you open your
[03:21:36]  mouth you basically are promoting your own brand and i'm like isn't that what you do literally with every post you make like i don't mean like a link like literally
[03:21:44]  if i go on reddit and i write something i'm promoting my brand and obviously they had to keep to the light of the law i'm not going to make a big
[03:21:51]  deal about it but it it's it's been very challenging sometimes because personal things like dev2 always get blocked like like a lot of these places by default they're like oh
[03:22:00]  it's dev2 it's a low quality article medium stuff like that they tend to block and then like it's interesting because with dev2 i'm not even really promoting
[03:22:08]  my own brand so much like it's not like ryan.com or something so you're in this kind of weird boat where you can write an article like the one we
[03:22:17]  went over last week where it's like very much informational it's not promoting a specific framework i do i even mention solid in this whole article oh i mentioned solid start for where
[03:22:28]  i got those numbers from yeah no not even mention the whole article but it's self-promotion and then reddit doesn't pick it up google doesn't trigger and
[03:22:39]  like basically the article flops not necessarily because of content but because i couldn't get the right cross posting at least that's been my experience it's almost completely based on
[03:22:51]  your ability to promote the cross posting rather than the content that makes a difference here um yo i i remember when medium used to be good too yeah i haven't tried r programming
[03:23:06]  i was hoping to get something a little bit more web specific so like but it was it was just interesting i i mean i got some great offers from people like bd
[03:23:22] ougie you know for open source uh people like um where mark uh from uh frontend masters suggestions or other blogs that can do but it it doesn't matter the initial blog
[03:23:34]  you post to you know dev2 or whatever it's not gonna make a huge difference sometimes it will like obviously better viewership you know for certain platforms but i you know we
[03:23:43]  built that up over the years with dev2 it's more of like the cross posting where communities already exist and i i've been having as i said a hell of a
[03:23:52]  time with this because it's like yeah see egghead like anyone who want people want my specific solid content but i'm talking about ideas stuff kind of like personal blog stuff that
[03:24:02]  isn't actually it's related solid perhaps but i'm not like saying oh you should use solid at all it's not self-promotional at all like it wouldn't go
[03:24:09]  on these other kind of places if you tried pointer io you know newsletters like there isn't actually a salute a great solution i mean yeah i mean i thought that's
[03:24:23]  common dinner i've stopped posting my work to read on hack news because i use this platform as a consumer i want to hear authentic real experiences and not self-promotion even
[03:24:29]  for good actors well i i think it's the best i need to promote our quality work the funny thing is like it really isn't even promotion from this perspective right and i
[03:24:39] 'm saying it was actually if i had something self-promoting for like solid it'd be actually really easy to know where the post because all those other guys who came
[03:24:46]  and offered would pick it up or i'd post on the solid forum or something like it's the stuff that's advanced but not self-promoting that's the hardest to
[03:24:55]  actually place because they still call it self-promoting except you have no place to put it so anyways um i i've been struggling with this for a couple years now i
[03:25:04]  know i kind of get the reasoning after talking these these like mods for a long time i'm i'm gonna still put it out that it's like a big failure on
[03:25:13]  their part i'm blaming them i know that's probably not nice they're just doing their job by the letter but they are really failing um it is it is yeah so
[03:25:26]  like we we we cheated hacker news for a while i just write a new article and then get someone else to post it right like and i we can still do that right it
[03:25:36] 's just it's funny when you go to these places and you build up decent credibility you know at a certain point you think you go okay you got four thousand karma or
[03:25:47]  you know whatever your hn score that that credibility says that you're not that but it's you know so like i mean i get it it's just like i i
[03:26:05]  it is very annoying because it's like it's not about someone buying a product so to speak um i as i said it's it's it's it's so funny that
[03:26:20]  i i i we i for a while there i did for because i used to care about hn like i don't care about hacker news anymore i used to like have a
[03:26:25]  group of people that they're like yeah we'll help you ryan and every time i did a new article we'd all sync up and be like okay let's do
[03:26:32]  this you know and because they they would have too low hn credit to actually post it would get auto flagged right away but because my hn credit for the stuff i
[03:26:42]  did post and they didn't take away was so high i could just unflag it and basically make it go through and it's like a similar kind of thing basically
[03:26:53]  as long as my credit is high enough because of the stuff i have posted that i can i can vouch for other people but i can't vouch for myself um so it's
[03:27:04]  it's it's it's just it's a very funny system so it's like yeah i don't know it yeah i i feel like this kind of stuff i mean it
[03:27:18] 's it's fine maybe i shouldn't care about this but i've noticed that my the success of my articles has largely relied on the on these kind of cross-post
[03:27:29] ing scenarios um in terms of being able to get out to a wider audience i don't make money on this i don't care i just want the ideas to permeate right
[03:27:38]  i want the ability for people to understand these things because these are questions i could ask them all the freaking time what's the difference between server components and islands and resum
[03:27:48] ability it's just so yeah anyway i just wanted to put that out there um yeah i actually did an audit at one point for the hacker news guys and i was like 40
[03:28:10]  of my articles i think was i i said could be considered self-promotional because they talk about um solid but i think in the recent years the number is even lower
[03:28:19]  it's like 30 and i don't usually post those to these places because i understand that so it's like yeah it's it's very yeah i don't know that that
[03:28:31] 's how my week started with a little bit of an annoyance but uh it got it got it got better um slightly no it didn't get better um i want to
[03:28:45]  talk about this last week we ended on a very um dire note right we were talking about the node bun uh stuff and we're like it was crazy to think that no one
[03:28:56]  supported node anymore like what what was going to happen to the project that so many people depend on and and i i said like i think this is actually a really serious problem
[03:29:06]  like we're all kind of like yeah you know that sucks blah blah but like this this risk of a of a failure systematically like across the board is actually real and then like
[03:29:19]  two days later daniel rowe posts this that lodash declared issue about anchor city and closed every open issue in pr like there it is done lodash done lodash
[03:29:30]  is huge right obviously it was uh originally like a modernized port of underscore which was like the original javascript well it's not the original there's a few older j
[03:29:39] avascript utility libraries but it's very popularized it was written by jeremy as kenis critter backbone js and then lodash was like an updated version of that
[03:29:47]  it's it basically replaced underscore over the years and now it's just dead so yeah i don't know i has anything changed in the last week since this happened i i just
[03:30:10]  it okay yeah let's let's get the update here because i i the truth of matter is i only saw the original thing and i was like man i'm gonna have
[03:30:27]  to talk about this so let's what what's happened here okay so this is a just a clean state for v5 don't fall for a joke is that what this is
[03:30:46]  okay well that's good so then they're they're actually oh i see so that's what this is i want to do this okay well screw this yeah when can i
[03:31:04]  do this on the salt start repo can i just close all the issue when i release beta 2 can would everyone be okay if i can just like close everything i mean to
[03:31:12]  be fair like 80 of the issues would be closed anyways yeah never mind i was actually worried about this i mean don't get me wrong there is actually a serious problem um but
[03:31:24]  yeah beta 2 let's just let's just close all the solid start issues i i think actually i probably have to because i think it'll be confusing the old issues and
[03:31:36]  the new issues most of them don't apply anymore look at the quote tweet lodash maintainer made a thread off this one okay okay there's a lot of these notes bug
[03:31:57] ging me they changed the ui on the web which pisses me now off because you should just like look i know mobile you can do it but now i have to
[03:32:03]  go to view post um behavior to like to actually find the find the like the actual quote tweets right yeah it's all good see this is what happens when you're really busy
[03:32:23]  and you just see something you're like it was so on point with what we were talking about i guess that's why the joke is so good right because like it you
[03:32:33]  know yeah it's all good it's all good it's all good it's fine i i i i i was pulled in by this one i admit i i still think
[03:32:52]  there's a serious there's a serious issue um and it's only getting more serious year after year um it's like the long decay decay decay um okay let's keep on
[03:33:06]  going um there's there's a few other little pieces of news uh i'll talk about solid stuff again in a minute um i saw this uh really cool uh post by
[03:33:20]  lee rob talking about where to meet people and he ranked the value of the different types of uh communities and i think he's right this is this is a great list um yeah
[03:33:35]  it's funny he put reddit above large open source disc open discords and he's probably right large discords become really hard to navigate after a while youtube comments this
[03:33:48]  is such a this is such a i have to admit sometimes reddit feels like youtube comments but the front of the list is actually pretty on you know youtube is bad when facebook
[03:34:05]  when when facebook his groups is higher yeah no youtube comments are pretty bad not that i'm telling you not to comment please comment on this video it'll improve um my my
[03:34:16]  reach so please like comment subscribe anyway um but i i do think it's kind of i i this is this is true honestly and i mean i'm a little spoiled here
[03:34:29]  i moved to the bay area and then like i start going to the local meetups like the the react world meetups around here and it was um it was amazing honestly i
[03:34:39]  met amazing people got it involved that's how i ended up at reactathon i'm pretty sure you know ben the promoter of the react meetups and reactathon met
[03:34:48]  him numerous other people um small community conferences twitter he put really high up which is good and i think it's because you get surprisingly good direct access i actually think invite only
[03:35:03]  small discord might actually be sometimes better like higher rated than this large industry conferences yeah um sub only twitch chat yeah in general i think he's underrating discords in general
[03:35:30]  i think discord's actually really good i think github and reddit are sort of middling um sub only twitch chat yeah yeah like i don't mean invite i i
[03:35:46]  he put in by the only i didn't lose it i i think there's a difference between small discords and large discords i think discords up to 10 000 people
[03:35:56]  are in one category and then over 10 000 they're like a different category maybe about 8 000 like i think that's where the switch happens i'm trying to think i
[03:36:05]  experienced it with solid actually maybe maybe it's actually smaller than that maybe it's like yeah actually yeah i'm gonna say 6 000 discords under 6 000 are different than disc
[03:36:15] ords over 6 000 rough generally speaking i find the ones under 6 000 a lot more valuable um by the time you get to something like reactiflux or whatever like
[03:36:25]  or like the large large like react discord i yeah it might as well be just reddit but you lose track of everything it's it's pretty hard yeah i honestly twitter
[03:36:44]  deserves to be up pretty high you if you ask smart questions and act appropriately you have incredible access to people i know this because i really was nobody when i joined twitter and yes
[03:37:02]  i i guess i you know i i you know talked about important stuff and wrote articles over time and i kind of built up but like even from my first day i feel
[03:37:13]  like i could have been like you know if if i acted accordingly talked could have reached out to with a question to someone who was you know popular let's say like and and
[03:37:21]  good-hearted someone like dan oh rich harris i'm gonna use an example rich rich has been amazing to me since i joined the community uh you know you know you know
[03:37:34]  there's a good chance he'll respond to you you'll you'll see this with this felt five responses and stuff someone will flag like there's one that flagged both
[03:37:42]  of us and i didn't respond because i was like this isn't my response it's a rich response and rich responded so like i feel like you have incredible access you know
[03:37:51]  um a lot of people type me on stuff and unless it's like look at this specific bug like you know and like if it's a question of interest i'll usually
[03:38:00]  respond and try and answer it best i can obviously if it's like spend some time now and debug it out i'll get to it later you know there's there's cues
[03:38:08]  for that but if you're asking a quick question i i'll try my best reddit used to be better i know i i i i get downvoted on red
[03:38:20] dit so much and it's so funny because i i usually don't feel like i'm like hot take guy but it's like sometimes you think the people on reddit you
[03:38:27] 're just like like it's hacker news is like this a bit too you're just like do people really just know nothing like you're not even rude to them you're just
[03:38:36]  like yeah you you take something for granted that you kind of assume you're just kind of like oh you know like blah blah blah right because it needs a compiler or something
[03:38:45]  right and they're just like downvote you know there's some community the problem is there's some communities out there they get so caught up in their marketing hype and stuff
[03:38:57]  that it's like i feel like reddit brings out those kind of you know fan types that like you know hid behind the screen kind of thing where they they'll just say
[03:39:08]  whatever just to like get a rise i don't feel like twitter feels like has slightly more accountability yeah yeah exactly i i'm it's not limited to nice people like rich
[03:39:25]  harris or so to speak like um i'm not saying that brendan ike isn't a nice person as well i'm but yeah let me let me pull this
[03:39:33]  one up why not i'm here we go i'm sorry to bother you brendan ike but i can't find a definitive answer anywhere on the internet i know
[03:39:46]  set timeout isn't technically a part of javascript it's the point one one exists with it earlier yeah see look just you know this this is why twitter this
[03:40:01]  is when twitter is amazing right um yeah like yeah twitter definitely there's a lot of garbage and we're gonna see a lot of garbage when we talk about the svel
[03:40:14] te 5 stuff with the reactions and stuff but twitter has the ability to be amazing okay sorry i'm on the wrong tab i should be on this one no i should be on
[03:40:27]  this one people really do know nothing sometimes yeah no it's fair i i my favorite ones is i got into like i got so badly downvoted on one of my
[03:40:42]  articles when i was like i i said something i guess a little cheeky i in response i'm like it's kind of ironic that the just javascript framework now is
[03:40:50]  going to be like not just javascript like talking about react forget right and people were like just downloading it like crazy and i'm like you guys understand that when you
[03:41:00]  compile something that has different semantics than javascript like you need to compile it to get it back to javascript that it's not just javascript to be
[03:41:10]  fair a lot of people have a hard time with that um i feel like that's going to come up in our discussion about svelte as well um but like yeah yeah
[03:41:20]  it's it's it's all good twitter absolutely deserves to be up here the only stuff better than twitter i agree is this um if you can find it it's amazing
[03:41:33]  okay um there's other couple things that i wanted to talk about here's a here's another one another person i am a huge fan of um probably didn't get everyone's
[03:41:49]  radar here but sarah drasner view core team member former view core team member kind of in charge of the angular team and whiz teams that at uh google is
[03:42:01]  now leading core web android ios matly and multi-platform infrastructure so clearly she's doing a good job um but like she's now in charge of the whole like
[03:42:16]  how would you explain this it's like all the application platforms um that's this is probably an interesting success story for people to follow along with um you know her path from
[03:42:32]  i talked to her about this because she said she was largely unknown and she just wrote articles for a long time and you know teaching people stuff where she could and she joined the
[03:42:41]  view core team and she you know did some stuff around around uh teaching around that as well and then at some point you know she found some success and then she had this
[03:42:54]  back catalog of amazing content that people hadn't really seen and it just kind of kept skyrocketing up for her she left netlify i think i believe to start her
[03:43:04]  own company and then ended up at google as a you know uh was a director or um and yeah she's she just keeps on going um yeah anyways congrats to sar
[03:43:17] ah i wanted to throw this out here and you know big part you know the amazing team she has a big part but it also takes inspiration from the leadership of you know you
[03:43:27]  know i don't know is it a coincidence that angular's turnaround happened around the same time she joined the team i i don't know you know or so yeah i i
[03:43:38]  wanted i wanted to just give a quick shout out there um as well uh let's keep on going okay yeah what else was was kind of cool to look at um we we
[03:43:52]  talked about this a little bit last stream but jacob is already sort of hinting at where remix is heading with server components um so like i i i think this
[03:44:10]  gives us a hint you see they're feeding the form actions back in through promises and then you can basically get the user get the form get this and then like do the redirect
[03:44:24]  stuff directly to the component basically this used to be loader code now it's right in your top level component i do think it's interesting about the weight syntax and like all
[03:44:34]  of the ceremony around it i i didn't like a weight because it's blocking and it didn't sit well with me but i kind of liked that conceptually um it
[03:44:43]  had this kind of pause room zoom thing on something it renders once it's kind of awkward in react where you know on the client it renders multiple times you can never
[03:44:51]  have a universal model but i'm not even sold on a weight anymore i feel like and i talked a bit about this with the cache apis last week but i feel
[03:45:02]  like you almost just want to be able to i mean it's so funny million js makes a bunch of funny uh examples like this over time but i feel like what you almost
[03:45:13]  want to do uh let's forget about that this is what what i had some stuff i had from last stream let's clear this for a second i feel like what you almost
[03:45:22]  want to do in a component is just be like const user equals fetch user right and then be like you know whatever i'm just gonna i mean this is not a i
[03:45:37]  don't have increment here it's a button but you get you and be able to go user.name you don't want to wait you don't want freaking anything else uh
[03:45:46]  you just want to like be able to call call fetch user and then get the user and be done with it right maybe the user um is id12 you know you know
[03:45:59]  and i i realized after the last stream when we're talking about this stuff that what if you did this by just basically defining what what const for fetch user equals cache you
[03:46:17]  know whatever the async function is that actually does the fetch of the user what if the cache function in say a reactive library literally just returned a function that returns the signal so
[03:46:31]  the cool thing here if you if you create your api like this and i know this a little bit of tangent but just follow me here is that you just call fetch
[03:46:39]  user for 12 and then user would update appropriately when it came in right you you do that fine-grained suspense stuff from 2.0 where it's non-blocking
[03:46:48]  but it can do fine-grained you know but more than that because of the cache because like i'm missing the obviously it's the id and stuff being passed in
[03:46:58]  because you're actually subscribed to 12 so if someone else invalidates 12 like you update the user somewhere else well you still have the subscription here so it'll automatically update right i
[03:47:10]  i i'm kind of entering this mode like obviously someone would be like well what if it's props.id right and that that does make it a little bit more fun because
[03:47:21]  maybe you'd have to do something like create now it to be reactive you have to do this you know and then actually probably call it as a function but my my point
[03:47:34]  is yes because this is reactive but if it's something that was like a server component or like a server piece then like you know it's only gonna ever run once so the
[03:47:44]  fact that this reactivity exists doesn't actually matter like it might as it could be you know this anyway it's it just it's just something that i've been thinking
[03:47:57]  about recently because i i don't i still don't like async and await and i couldn't really put it up put it forward to myself too much but it's when
[03:48:07]  i started seeing this await promise all scenario i was like these have nothing to do with each other why do the ideal isn't you don't want to go away to wait
[03:48:17]  because then it's waterfall but you don't even want to await the whole thing you just want these to come in naturally whenever they're ready and only impact the part of the
[03:48:26]  ui where they matter right so yeah i don't know i think i think for react this is probably the best that remix can do and i think it's actually pretty
[03:48:39]  good i think i i like where this is heading but i i i i do i i yeah i don't think i'm gonna be sold on async components well you see
[03:48:49]  the thing is on the client with react instead of await you use use but it's the same idea you'd go use this right they they still have the semantics of both
[03:49:02]  um you need await or you need use i'm just like what if we just got rid of that part we we simply just use like because in react you use the cache
[03:49:11]  and then you go use use this or you go await this what if you just got rid of that because i mean you don't really use is non-blocking um well
[03:49:24]  i think i guess it isn't it throws the whole component this yeah i i feel like we're on the verge of something that's really really quite nice um anyway but
[03:49:39]  how do i conditionally rendering without a wait well you read the signal right like so to speak how do you conditional rendering with a little you don't have to is this a
[03:49:51]  joke again i i fall for parasocial stuff all the time and it is easy for me to say i don't have to make a stuff lane values well depends on
[03:50:04]  what your suspense implementation is i i'm saying is like in a fine-grained system and we've already been working this with solid 2.0 is uh was the playground
[03:50:14]  example this can throw because it's not ready yet but when this throws it's contained by this expression you know you've you've seen what solid outputs right it's insert
[03:50:24]  whatever this right so this throws we control it here we don't actually have to re-render a whole component here we can literally just laser the the one part of the the
[03:50:36]  ui right i this is just a reactivity superpower this is maybe one reason why you want signals i i we've been really pushing the envelope with 2.0 on
[03:50:47]  the patterns for async and signals no i don't believe any other framework has done this yet um i was going to be cheeky and be tempted to call uh solid signals
[03:50:56]  like solid signals 2.0 like basically release the call it signals 2.0 as a branding thing like everyone's getting into signals right now we have signals 2.0 but
[03:51:04]  i think that's probably too cheeky um anyway uh yeah i i i i do think this is interesting though it's it's like you never wanted to do this before
[03:51:21]  i i i understand on the other hand when you're like a server mentality this is what you do all the time you're like okay i got some promises i need to await
[03:51:27]  these await all of them but it's like i still going over this gap is what's weird for me i mean the tricky part is and i've hit this i was working
[03:51:37]  with the guys from post the other day they they're the guys who have the post news you've seen that they they have like them you know i guess about a million
[03:51:44]  signups or whatever solid start based production app and he's like talking about he's kind of lamenting over he couldn't do a top level of weight right because he's
[03:51:51]  trying to get to the cookies we had this like problem where the cookies api was async and he was trying to get to the cookies and i was like your best bet
[03:51:58]  is to access the day you need the cookies in the middleware step where you can do an async function so i do get the tension there it's just it like this
[03:52:07]  is all part of where my thinking has been at i want to separate the asynchronicity um signal kind of conversion piece from the cash um sorry from the like streaming
[03:52:25]  suspense serialization side that's largely what we've been doing in 1.8 i don't think i'll talk about that today but basically in 1.8 the serial
[03:52:35] izer is exposed in a certain way and our mechanism for how streaming works has basically nothing to do with the resources resources is just a wrapper and this will in the future let us
[03:52:45]  break apart resources into the pieces that we actually recognize as the right pieces because if you just set it off going and right do the right serialized calls streaming will just do
[03:52:55]  itself um anyway i'm tangenting a little bit uh but i do like seeing this evolution i think if i look here they they there's a few other um there's there
[03:53:09] 's a there's a few other examples um yeah yeah maybe he's just quote tweeting himself i i think it i think it's it's cool to see this is already getting
[03:53:23]  to this like nice place i think the challenge we still have is what i explained last week with like remix guys know this too it's just like the implicit waterfalls that
[03:53:33]  come from view hierarchy because like await is blocking so if as long as you do this fetch above the await in child components you're fine but like there's something about this architecture
[03:53:44]  that i i understand why they've been like really trying to figure out how to get it right because it's it's it's a little bit awkward i think there's
[03:53:51]  more to the story that we're going to see essentially is what i'm saying um okay i think there was one other non-svelte thing no i'm wrong everything
[03:54:04]  else is felt isn't it yeah everything else is felt um okay i'm not i'm not there yet i've got a couple other things um but we're getting close
[03:54:28]  signals are so good why aren't there signals too yeah it seems like it would be something yeah yeah yeah i there's there's something about the marketing and branding um that
[03:54:42]  makes things really challenging which we'll talk about when we get to the svelte side because yeah i definitely okay so i got a couple more things solid related before i move
[03:54:51]  on i want to say this little thing isn't true some people point out that lit html does this but it's surprising there there's this article which is felt
[03:55:02]  uh what uh which is about like kind of post that it was like felt ecosystem can tires the entire javascript ecosystem because using javascript library saw it's easy since
[03:55:11]  sales gives you control over the dom without requiring any glue code right they're talking about actions i guess that's technically glue code though but you know we have our directives similar
[03:55:19]  and dave's like sweet i guess we fall in the same category and i i actually think this is one of the most illustrative examples um which is why i after
[03:55:28]  i saw this i'm like i really miss our solid introduction video the fact that in solid you can literally go document create element and then insert it in the jsx like it
[03:55:36] 's literally a development um you know that you can access the dom do stuff with it here i think someone gave us silly example we can go anchor download dot click um i
[03:55:53]  i i there a bunch of framers came out and said that they did it as well but it's actually kind of crazy how not common this is because the level of abstraction
[03:56:03]  that we've been building over frameworks like not just the virtual dom a lot of libraries most of them don't know how to handle an html element like they they know
[03:56:11]  how to handle strings but they know how to handle but like they know how to handle like they have syntax for like inserting stuff but they it's like their own internal like
[03:56:20]  mechanisms and they don't actually know what a dom element is so yeah yeah the my standard solid talk talks about this a lot i i think like one day people will get
[03:56:40]  it and it'll probably be very late in the game but i this was a fun moment um because it's one of those example where the like the the the quote tweet like
[03:56:50]  you know got ratioed um i don't know it's it's an interesting place this was even before the svelte announcement so there's like an interesting tension going
[03:56:59]  on i don't know if i like it um but we'll get into that um i've been working on solid 1.8 um 2.0 i i i i wanted
[03:57:07]  to know and let's ask the stream here i feel like if i asked the stream this would be a much different question but i was trying to figure out who's using transitions
[03:57:14]  because transitions make my life way way way way super hard and i sometimes wonder if i've been nerd sniped by react because the truth matters most people have no clue what transitions
[03:57:22]  are but they probably used it indirectly with the router other people have used it like occasionally and then for the people have used it they're really kind of split on whether they
[03:57:30]  like it or not um so this suggests that it's worth rethinking i think i see incredible value in transitions but it's like very hard to justify the complexity they bring when
[03:57:42]  there's other solutions potentially so this survey did what i wanted it to do um sorry the the solid 1.8 tweet was this one i did another poll and which is
[03:57:54]  just kind of silly it's just i i just want to mention it apparently different web servers do different things with comment nodes if you didn't know it engine and engine engine x
[03:58:04]  basically if it sees a hashtag prefix it thinks it's like its thing that it can use for like plugins and we've been using this in solid for years no one mentioned it
[03:58:14]  to me uh until recently so it's going to get fixed in 1.8 um just wanted to kind of throw that in there anyway all right oh yeah one more the
[03:58:28]  typescript documentary went out yesterday and i didn't even notice i was like so absorbed in all this conversation about svelte and signals and stuff that this you know incredible
[03:58:39]  effort you know that came out uh and i watched it this morning on 1.5 as i was prepping for the stream so i got a good idea of it um it
[03:58:49] 's funny how they they advertise it it like uh obviously matt is a big name name and uh this guy can't remember his name at the moment he's actually like one
[03:59:00]  of the original like creators of typescript um why am i not remember his name anyway um but behind the scenes here you've got myself i think theo mishko mish
[03:59:12] ko actually has a bigger role in it because he talks about angular's early adoption of typescript but like i'm i me and theo are in the documentary for about like two
[03:59:22]  seconds just talking about stuff but um you know i i like some slippery little logo placements in here you know it's it's all good this is something funny around i
[03:59:32]  i i realized about the documentary all in all it's a really good story and it tells the whole thing i i'm i'm i'm i'm pretty stoked about this people
[03:59:39]  should check it out it's just it was it was it was a it was amusing to me that i was like so absorbed that i completely i knew this was coming for weeks
[03:59:45]  and i just like completely missed it yes yes of course anders yes yeah c sharp which classically was my favorite uh programming language for quite a while um definitely my favorite language
[04:00:03]  that anders has created a full bunch of influential foreheads yeah i mean we talked a bit about a solid doc i don't they the thinking was a little bit early um
[04:00:16]  which i i agree with um but yeah yeah no it's great people should check it out uh as i said stuff maybe got overshadowed by some of the other things
[04:00:29]  going on this week but i uh i i definitely think it's it's a it's a good thing to check out um okay okay so i've talked about basically everything possible
[04:00:41]  i could talk about about before getting to the big news of of this week um so let's get there it's funny because i saw the ruins thing advertised and i i
[04:00:58]  like or like the thing like coming next week and i did not expect this to be what it was i was like ruins what what what's ruins like first of all i
[04:01:08]  didn't expect them to brand try and brand something new for what i believe to be signal macros is the term um but like it makes sense for svelte trying to
[04:01:19]  like do something mystical or magical or kind of make it um you know their own kind of thing so let's let's take a look at um what the hell they introduced
[04:01:32]  why do you guys keep on saying did i say ruins wrong is there is there some different way to say ruins maybe i need to bring someone else on the stream to tell
[04:01:51]  me how to pronounce it oh this is my chat's great runez it's not runez oh man this is the problem with naming things people people like can just come
[04:02:17]  up with like any sort of you can say spelled hooks i really want to differentiate from hooks in a minute because we'll see um rooms oh okay okay let's let's stay
[04:02:34]  on this okay in 2019 svelte 3 turned javascript into a reactive language svelte is a web framework that uses the compiler yes very very cool very ahead
[04:02:45]  of its time i can't think of before this point anything quite like this in the javascript space yeah write less code i mean okay the big thing is the big
[04:03:04]  thing is they they it's hard to say this to a certain degree because you could have there were frameworks that worked vdom-esque that were kind of like this if you
[04:03:18]  think about it because like angular also like let you do stuff you know what maybe this isn't fair because like angular used zone js but they let you write plain objects and
[04:03:33]  like obviously they had a terrible update cycle but like you could basically write this code this code works in angular right angular didn't use a compiler to do it but there were ways
[04:03:45]  that like this kind of stuff existed i will say using a compiler absolutely brilliant right and it was all about highly efficient write less code right i wish you could write all
[04:04:02]  my javascript like this yep okay we're not gonna watch the video right now chat gpt answer ruins sounds like ruins well ruins sound like runes oh so it
[04:04:23] 's like difference between ruins and ruins runes like tunes ruins ah that's interesting yeah i've always said it the other way that's interesting 1.5 thank you okay
[04:05:01]  cool okay what are ruins magical symbol mark yeah okay yes i'm sure this is people's reactions well no the reality is that application go complexity figuring out which values are reactive
[04:05:24]  and which aren't can get tricky and the heuristic is only let declarations yep the problem also is that this doesn't work well across files right so then they show
[04:05:36]  writable subscribe example and then now they're like no you can just see what you can do here and then they're like no you can do here and then you can
[04:05:48]  do that yeah there's a lot of code changing to make this work interesting thing about this is it does parse javascript because you're looking at this and like this is
[04:06:05]  a getter right i know why this is a getter because i it's a function call you need to wrap the function call but this is interesting because this is not
[04:06:17]  a function call why do i wrap it in a getter isn't this the same as count okay let's let's see and yeah they showed an example okay so they
[04:06:33]  basically turn it into this kind of like a props object almost yeah interesting so i guess felt now has the d d they've they've inherited our destructuring isn't good
[04:06:45]  um i guess is is a takeaway from this yeah it compiles to a func to call but i'm what i'm getting at is i have to know that this is
[04:06:55]  a function call conceptually like like i like this if you tried to say this is javascript and looked at this i i have to know that this is a function
[04:07:04]  call like or it's a special thing like it does not count like accessing it makes it of type number but but like yeah okay one thing i do like about this though inherently
[04:07:20]  from what i'm seeing here is reactivity still can't leave a file like it can leave it through a wrapper but in itself it can't right because they're the
[04:07:30]  reason this works is because they're applying svelte rules because it's not like this isn't calling the function here it's not setting it you know it's not like
[04:07:40]  i mean there could be like a dot value underneath the hood but like they're when when this file gets transformed they are transforming this and this these are both getting through like
[04:07:52]  these all three are i mean technically this is getting transformed because probably bringing in a hidden import right so technically they're transforming this this this and this there's four points of transforming
[04:08:06]  formation here okay yeah i i've been worried about that too this is why i'm giving this eye look on this okay and this is fine this is thing you you know
[04:08:23]  the getter is special you're not denoting it it's just i wonder if they use the same heuristic we do where they like like they know that it can
[04:08:34]  be reactive because the property access okay anyways because it's runtime reactivity svelte was always compile time so this is this is like a compile to runtime thing it's
[04:08:45]  interesting because some people are really surprised by this fact but um you know because theoretically you're like oh a compiler that does all the reactivity head time that must be the most
[04:08:56]  optimal system and in my experience it isn't and actually it has a really hard time to there's a reason why none of the compiler systems have ever beat so solid to
[04:09:05]  date in the ngs framework benchmark i've even the ones i've built myself haven't been able to beat solid and the reason is the big win for the compile time is
[04:09:17]  being able to know the dependencies so if they're fixed but if they're dynamic or they're deep it's very hard for the compiler to do the right kind of analysis so
[04:09:28]  like the depth being able to do deep reactivity like either nest signals or use proxies actually can make a bigger difference than the dependency piece so over time we have
[04:09:39]  to show that compile runtime reactivity was actually more performant than compile time when it came to actual apps so what if we can do compile augmented uh runtime reactivity is what
[04:09:50]  i'm getting at because then you can if you know the dependencies you can optimize them right like svelte's weird javascript like the fact that this doesn't
[04:10:02]  work is crazy was always crazy to me i mean it's an untracked thing but it meant that you had no composability you literally had the right the right stuff
[04:10:14]  in line for it to work in svelte right like it's like you suddenly pull out a function it's like it doesn't work anymore so now we have computed
[04:10:34]  and of nfx i'd like the naming to be fair derived is what i've called it in my uh my article see i love the language aspect of this years ago
[04:10:46]  i've been talking about this like since 2018 but i think probably my best article is the one i released in 2021 um when i was talking oh i posted on my birthday
[04:10:57]  interesting um the this one and if you look at it i i was like signals reactions i guess i could call them effects and then derivations i i've been honing this
[04:11:10]  language forever if i went back to medium i think i could probably find let me look at medium it's been a while i might even signed in probably not it's been so
[04:11:20]  long i don't even know what i signed in with it was so long ago it was probably like google okay sweet i just want to i've been writing about reactivity
[04:11:31]  for a very freaking long time and i want to see where i because the truth of matter is mob x kind of like knockout had these pieces and they found it accidentally they
[04:11:44]  just had signals and computed which was like everything mob x was the first one to actually separate the side effects as a thing as far as i know so they had like the
[04:11:52]  three stages view had it as well i think although they it wasn't very they didn't have composables mob x also liked objects it was kind of the time why react hooks
[04:12:02]  a declarative love story it's funny i i early on mistook react hooks for being the same sort of declarative data thing right because i was talking about view data
[04:12:15]  methods template and recompose where am i doing here oh yeah react surplus const use effect yeah and i didn't include memo in that example but i think i think yeah which one
[04:12:34]  was it i'm pretty sure hook api the universal api for the front end this is this has got to be it back in 2019 knockout yeah yeah i think
[04:12:49]  this is this is probably my first published work on suggesting that that all the frameworks were basically falling on the same same patterns um anyway uh let's get back here a bit
[04:13:03]  so yeah this this this is obvious of where this should head um derived is interesting it's not a return function call like effect but expression as an a function parameter oh yeah
[04:13:19]  yeah yeah yeah yeah yeah they they they they also yeah yeah this is cool they also yeah see this this is something that was always really tricky for me to figure out and the
[04:13:31]  is because they they didn't if you think about it they got rid of this is smart in the way that you can't write statements like they try and keep it pure
[04:13:47]  if you do this it's a lot harder to write impure stuff you want your drive values to be pure you don't want side effects they shouldn't console log that you
[04:13:53]  want them to like this is the this is a nudge to say like this should return a value it's an arrow function without the curly braces but it also means that there
[04:14:03] 's a special syntax here to make this work so there's a difference it's like you have to know that these are functions here but not here but okay let's let
[04:14:14] 's keep on going yeah i mean that the surplus example was back in the it's that's basically what solid is right um which we'll we'll get to i i didn
[04:14:26] 't use solid in my early examples because i didn't think anyone would use solid you know so i i looked at other places yes yeah and and view view had this as i
[04:14:38]  said they did it in a not weird way like knockout i i've done this in talks let me actually see if i maybe i can find one of my old talks
[04:14:48]  um do i have to have a my drive my folders talks solid talks the future is reactive there we go let's look at this um do do why reactivity oh yeah
[04:15:10]  knockout 2010 here we go observable observable pure computed and then like you do like this stuff mob x plus react see they wrapped it it was a little bit different so
[04:15:22]  you don't really see it see observable is this let's keep on going svelte i said that this is the same language when you return in value you were doing
[04:15:29]  computed essentially and when you didn't do an equal sign you were doing effects more or less um view composition api similar kind of pattern they have reference reactive um these are
[04:15:42]  the stores but i i these aren't equivalent examples and then i was trying to say that like react was kind of similar but they the react team kind of proved me wrong that
[04:15:52]  this wasn't the their thinking um i remember when i first did this it's funny because evan you actually did the reverse of this tweet about a year later after this
[04:16:00]  obviously i had the advantage of knowing about view but he didn't know about solid as much where i went back like how do you turn a ref into um implement ref with create
[04:16:09]  signal right um these are all very similar concepts but my whole point of my talk was that i took this from mobx essentially there's observable state computed values and side effects
[04:16:22]  like render and this is the three pieces like i signals effects i always skip because these are the hardest and derivations right um anyway let's i digress again i'm
[04:16:37]  doing terrible at this but you want them to be pure so this is a way of doing that and accomplishing that okay so i'm going there they talk about knockout
[04:16:51]  it's it's i love this statement look like every other framework we've come to realize that knockout was right all along this was not obvious i i i i've been
[04:17:03]  trying to say this for like ages the problem was like knockout wasn't actually completely right all along this is this statement is like the biggest fu to react that you could ever
[04:17:13]  say like you people think that you you go to react devs and core team you go react sucks you think you you insult them that doesn't insult them or react's
[04:17:21]  awkward or i don't like hook rules and all that that doesn't insult them you tell a react core dev this statement here this is this is the worst swear word you could
[04:17:32]  ever get you this is the worst swear word you could probably ever give them like this is like this is this these are words i wouldn't say on stream you know like
[04:17:44]  if if i was talking to a normal non-technical person there is nothing more offensive than this than this line um the truth is it's not accurate knockout had a
[04:17:57]  lot of flaws i spent a lot of time learning from react to fix the flaws that knockout had that that was why and i'm glad that solid got a mention here
[04:18:08]  because to be fair we talked about solid popularizing it but we did a lot more than popularize it we showed that the values that you you know we've come to learn
[04:18:19]  from modern frameworks are still applicable in this model everyone thought that this was freaking spaghetti code to a binding land there is a different way to solve these problems and that's largely
[04:18:31]  what solid has accomplished i mean i'm glad it got popular but sometimes i feel our popularity has been gauged by the fact of like everyone else basically adopting what we've
[04:18:39]  been doing yeah i mean svelte 5 and solid i i mean the single implementations are a little bit different i think the biggest thing is they're doing a few
[04:18:58]  optimizations now where they can compile in some of the fixed dependencies that don't change if they're not dynamic i believe which should give them a slight performance edge on some runtime
[04:19:08]  stuff that we haven't touched i it's very very my small but yes generally speaking svelte 5 and solid probably should and well it depends on the rendering too solid does
[04:19:20]  some stuff that's more optimal for rendering but like view vapor is another one i think all three of these frameworks are going to be like almost identical um when it comes down
[04:19:27]  to it did tom see this i don't know we're gonna have to ask him about it but like this is like this is like this is like you know like this is
[04:19:38]  this is the this is the freaking sorry like this is more than a jab this is the cross right like this is like oh man this this amuses me to no end
[04:19:50]  i did get to see this one you know more so uh because it ended up in a few quote tweets uh that went up on twitter but like man like react core team really
[04:20:02]  really wanted to kill this like knockout thing they they they are so predisposed against signals i've never seen that like you know how like you know you know rich came
[04:20:13]  out and was like v dom is pure overhead and he's pretty anti v dom i've never even been that anti v dom i have a lot of respect for dominic an
[04:20:20] naway's work on v dom stuff like inferno all that you know like i they're these stories are never that simple but the react core team is so anti signals it
[04:20:16] 's almost comical like like like like it's so fundamentally greats them i i'm surprised how quiet they've been right when the angular stuff came out that's when
[04:20:40]  the whole backlash happened and was felt like that's the end of the story right name of javascript framework um a popular javascript framework that doesn't have signals react
[04:21:03]  anyways um they don't have to i think like it's good that they they stick to their guns but i i i i think like okay let's keep on going signal
[04:21:15]  differently those signals are under the hood implementation detail rather than something you interact with direct okay i'm confused by this sentence yeah no i'm sorry it's felt good at selling stuff
[04:21:28]  but that's bullshit i'm sorry i swore on stream like it's not a hidden intro it's not a hidden hidden thing like i understand like like you can't
[04:21:42]  i i guess i okay here's the argument i i could see you because writing the symbol accesses the value or writes the value you don't actually ever get to hold on
[04:21:57]  to it makes it under the hood but the the problem is look at look at look i i just went over it look at the way that we've taught signals and react
[04:22:08] ivity for gears like a decade it's it's it's it's not the fact that it's a dot value or a function call it's this language of of reactivity
[04:22:18]  with the with the semantic expectation of auto tracking and and and this like you can wrap it up you know make it look nice whatever you know but this is signals you know
[04:22:34]  like semantically like i i could if you if you kept let and didn't have like the this kind of semantics around it i could i could i could agree with
[04:22:50]  you but you are declaring these things with auto tracking like you're even using a getter to push it between files like you understand that these are function semantics like you
[04:23:09]  understand that these are function semantics like this is not under the hood not even remotely like like okay we'll we'll probably talk about this more let's just keep on going
[04:23:26]  yeah i mean this is always a problem with compiled solutions um but it's not it's not even hidden like it's it's it's like literally in front of you
[04:23:39]  i'm i did let's pull out another article about this uh i wrote something called uh reactive script right quest for a reactive script and in this i i detailed this when
[04:23:52]  did i write this this was like november 2021 okay i i detailed potential approaches to like i said i was very influenced by what svelte had done with svelte
[04:24:04]  script and jay phelps wanted to talk to me rxjs guy you know about reactive languages because he's been building reactive languages and i was like okay okay
[04:24:11]  i was working on marco at the time and i was like okay what what how can we possibly attack this thing right obviously um we could we could basically denote something as reactive
[04:24:28]  by putting a dollar sign on the back of it right essentially so now because it's that you know not to call it as a function in a sense um you know so
[04:24:38]  the idea is you you it's up to the developer to mark something as reactive so that they know like okay i'm going to back to the reactive and mark it as reactive
[04:24:46]  now it's going to operate that way right then uh keywords or decorators this is kind of what svelte does but it has trouble with composition because you what you come
[04:24:57]  up with custom labels marco actually solves this by making things into tags to have the syntax but i i explained the cross file difficulty here and then finally function decorators and
[04:25:08]  i i the first time i i saw i said marco does this a bit here but the other place i saw this was view was working on this ref sugar thing and you
[04:25:17]  know you wrap the function call and then you can treat this as a normal value into the compilation so like the problem was yeah they need this double dollar sign to do the
[04:25:29]  get like essentially you there there's all these like you there at a certain point you look at this and you're like these are just functions why am i working so freaking hard
[04:25:40]  to hide the fact that these are functions right like you do these wrappers like i'm sorry the double dollar sign here i think was actually their notation for or maybe a single
[04:25:48]  dollar sign there's a notation where you can make anything into something that returns a reactive value and then yeah i i i tried to you know influenced by svelte because
[04:26:00]  this is said that syntax is the most important choice for choosing a framework i i rich has got this nailed here right like people care about syntax more than they care about things
[04:26:10]  that are things that are actually important so um i was like okay well could we do something like svelte and i i so i wrote this whole thing out picturing how
[04:26:20]  you could actually write a purely reactive language without the dollar signs without the function things and i i would argue that this potentially could be considered a reactive language and maybe this is hidden
[04:26:36]  enough that you wouldn't call this uh signals but basically everything above this the fold here yeah i mean this is signals and i i i mean this isn't yeah i mean
[04:26:47]  we're mincing words here if we think it's anything but that in the word you never have to get an object that isn't okay okay so yeah i mean
[04:27:27]  this is an interesting area i'm actually very stoked about progress in this area i wrote that article so that other people could work on so people have built this and let's get
[04:27:37]  let's finish the article i don't get too distracted like every framework we come to realize not goes right simpler times ahead yeah okay blah blah blah yeah this simplifies a bunch
[04:27:47]  of concept good on you guys yeah like these are things that they had like a bunch of these different ideas when literally they only needed one idea so great great great try it
[04:27:59]  preview site yeah i haven't looked at the preview site i don't know if we should we look at the preview site does this i mean what can we do here so am
[04:28:14]  i supposed to believe that i can do what what is it dollar sign state can i do this okay i i need i need a mutation for this to do what i need
[04:28:35]  it to do right i want to go name plus string because i need i mean i don't know if that makes a difference in this implementation but oh man i love s
[04:28:45] velte 4. sorry i can i go back good on them is this svelte 4 or this svelte 5. yeah yeah yeah okay sweet it's s
[04:29:15] velte 5. oh man that that's exciting i mean i'm pretty sure everyone did i close the other REPL okay no you guys see what i'm i'm
[04:29:34]  seeing right you understand why i gave it the slow the slow clap this is this is like it's the it's the solid output right it's a template function main that you
[04:29:48]  that you clone where's the main call like svelte used to be like this crazy i mean i already closed it but like um this felt used to be this like
[04:30:05]  crazy output like uh i have to add the click handler but it would generate like piles of code to to do something simple like this whereas and then i'd show solid and solid
[04:30:17]  would look like this and you'd be like okay yeah i get what's going on it used to be inline react yeah kind of yeah it would like create these big
[04:30:27]  class components and stuff it used to be like inline react free hooks so this this is it's like view vapor yeah so i yeah this is this is basically everybody's just
[04:30:42]  building solid at this point okay cool well that's good to know i was going to ask dom about this no i mean the there's in things that they're going to
[04:30:52]  do that is that are interesting there's going to be some different pieces there i'm very interested here with the details of what they're going on here but i mean this i
[04:31:01]  mean template source world they okay so they still create the ink why are they what's this anchor doing i'm not sure okay text see how they're doing the wrappers the
[04:31:14]  reactive reactors on text event click pop anyways like this is a walk so i like their walk approach they're a walk this is what marco does for their walks where they
[04:31:24] 're they do this if you want i'm pretty sure if you're wondering what this push and pop is they're like they're hiding the walk strings we're solid we have
[04:31:32]  like dot next dot uh first child sibling or whatever they've encoded the walks in the background and then use this as a way to navigate through the walks so there there are
[04:31:42]  differences here but like the core of it is the same render once fine-grained updates in the dom like if i took view code view vapor code i took solid code
[04:31:50]  from the playground i mean we already saw this right let's where's the solid code from the playground um i mean there's some imports here messing my stuff up but we
[04:32:01]  have a template function and then uh yeah i mean i've got a bunch of other in here like the cache but then we basically call our template function and then we write that
[04:32:14]  insert wrapper and if i add an event here what was it on click do something what was i doing i don't even care users whatever set user i don't it doesn
[04:32:28] 't matter um let's actually add something here to do set user we're just making stuff up here um click insert return element obviously there's there's there's a mechanical
[04:32:46]  event i'm not going to call it a copy but like yeah such child text stringify get name event click yeah i mean different syntax but you you it's the same
[04:32:58]  flow right you got your template function you open this template get the reference of the element they they walk see this dot child i'm gathering i mean let's add some more elements
[04:33:12]  here let's see how they do their walks i'm sure dom has like optimize the crap out of this yeah see the the this dollar sign child is just first child like
[04:33:32]  this the walks right here and then these are the insert statements here's the event handler yeah and mechanically this works very very very very very similar right right so does still
[04:33:58]  inline things like render effect instead of pulling insert into the library okay yeah yeah the the push pop kind of walking approach i thought that was what it was maybe that's
[04:34:14]  a bit of what's going on here is very common in things that like i think amber did it too where you uh you want to encode the walks but this isn't
[04:34:22]  even what's happening here it looks like they're they're actually doing like child child like if we added what happens if we add it like a span here as a sibling
[04:34:31]  will we get a next sibling yeah see child sibling see yeah these are the walks what's great about this if you know anything is when you compile ssr or so you
[04:34:42]  don't see it here because we don't see the hydratable mode the code to hydrate and the code to um create is uh or is almost identical because that you
[04:34:52]  just don't make the template and then everything else works the same this is a great code savings this is why solid has always been smaller than svelte when you actually
[04:34:59]  make real world demos like drastically smaller svelte was larger than react it looks like this solves svelte's problem of being producing really large um javascript bundles
[04:35:15]  okay i mean again i this is this is great stuff so yeah uh looks like us vapor and um and uh view vapor solid and svelte fiber like basically siblings very
[04:35:36]  very cool okay i don't know if there's anything else i want to play with here we'll we'll just continue on with with stuff okay yeah let's i'll
[04:35:44]  close this down for a moment okay okay so i guess yeah sorry this one's sitting at the one yeah i guess this is true um it's kind of insane actually i don
[04:36:04] 't even know how to what to think about this because i know some people from the solid community were kind of like put off a little bit because they're like we did
[04:36:13]  it first blah blah blah and it's like no we didn't really do it completely first knockout did it first you know but it's like you also know that that at
[04:36:23]  the time solid came out the approach was incredibly unpopular when i tried to talk to people about stuff they were just like shut up like you don't know what you're talking
[04:36:33]  about that's impossible through the react core team told us you know that wasn't a thing it was funny i even i think i even got that much nicer from rich even
[04:36:42]  at one point because like we were arguing about jsx and stuff but it's just funny because like like people really didn't think or want this to be viable and now it
[04:36:53] 's like i don't even know it's it's it's it's amazing um i i think it's i think his yeah what how did he explain that i
[04:37:17]  feel like it's obviously bad about react but it doesn't address the complexity about ux yeah no this is a myth this person's never used solid let's continue going i
[04:37:26]  i like i think i said this earlier my biggest hope like if the best thing that comes out of this for me personally is that people will finally understand that solid and react aren
[04:37:38] 't the same thing and just like understand how revolutionary solid was you know continues to be like syntax is just like the most not important thing in reality but it's the thing
[04:37:52]  that people like judge your stuff by we completely changed the way front end worked i guess i i mean i would have believed it but apparently the work done has completely changed the
[04:38:05]  way that everyone builds on the front end and people still think we'll react it's it's so funny um anyway but i think what he says about unreasonable is that both yeah
[04:38:26]  i think he says something because no one would have predicted it i think he's just saying like how can a couple you know contributors a small team of people have such an
[04:38:38]  impact that literally like the minds like google want to eat it up and all over the place it seems people are just that's what they're doing like this is like how could
[04:38:49]  this possibly happen like i was i told surplus sjs were doing these ideas i a lot of my work was refinement on that uh showing that that we could get the
[04:39:04]  full modern experience there the performance raw number stuff existed before solid like but was it usable you know a lot of that came into you know the jsx transform uh a lot of
[04:39:16]  it came into context um just so many pieces and small micro decisions and then building out features on top to show that this was viable um yeah i don't know uh let
[04:39:29] 's let's continue on my main stride and we could get to bookmarks but yeah this is this is thing okay yeah yeah so yeah when solid when i released solid
[04:39:42]  1.0 and a bunch of new people came on the first thing it felt like they were doing is a bunch of people like i like svelte but i see solids
[04:39:50]  much faster it's not even that much but like solid's faster has all these this power of composition i want to use my svelte syntax so alexis actually
[04:40:01]  built this like this is actually go use solid labels this is that same demo you saw from the the other code thing the funny thing is to be fair i think this was based
[04:40:10]  on views ref sugar um which i said was very also marco six's work was kind of similar yeah view ultimately dropped the ref sugar and i think this was a really smart
[04:40:20]  move from them because they could they were trying to chase svelte's simplicity and they couldn't get there with this there's too many like gotchas like the get
[04:40:29] ters and stuff like this like svelte beauty was always in its abstraction i said this last stream being really really restrictive so you couldn't do a bunch of stuff you could
[04:40:40]  do in other frameworks or you'd have to like do them completely differently but you never felt like you're out of javascript which is insane right because svelte is
[04:40:47]  about the farthest thing from javascript right like it's there's people who say like oh svelte just javascript like i i i don't even
[04:40:53]  this is my reddit problem again i don't even know how to talk to those people like it's there's like there's things that are like kind of nuanced things that
[04:41:03]  are kind of not true things that are kind of like lies we tell ourselves that's like the next step beyond that you know what i mean like anyway the view team was just
[04:41:14]  like i think they went through the whole thing and they're like you know if it looks like a function talks like a function walks like a function it's a function in
[04:41:22]  their case it was a getter but you know what i mean like they couldn't force it they they tried and they're just like and i felt this with solid too the
[04:41:31]  solution was worse than the problem it's like okay yeah you know you have to need a function but now if you write this code you have to kind of know that it's
[04:41:40]  a function you know like this is cool because it lets you destructure but now you need to wrap like to know that why you would ever need a dollar sign proper dest
[04:41:49] ructure or like whatever here you have to understand the there's a the problem like you don't get to hide these details um yeah i to be fair i know evan
[04:42:01]  was pushing this thing a lot more so but like view spent two when when did they finally can this thing like i feel like you spent over a year yeah so yeah august
[04:42:15]  4th 2021 so that yeah they were doing it there and what when did the when did the update come in when they canned it um i don't know when they canned
[04:42:26]  it but they spent almost two years with this thing i think we covered it in the news they tried all these sort of things now just because it wasn't right for you doesn
[04:42:35] 't mean it's not right for svelte svelte has a lot of things they couldn't do really smoothly so i i'm actually kind of supportive and i
[04:42:42]  can see why svelte went this way but it is very interesting because there there is this kind of tension because like obviously different frameworks don't need to prioritize that so this
[04:42:56]  can be uniquely svelte um even if we all like like alexis is a genius he probably i think he whipped up this plugin in about a week that's
[04:43:05]  that's probably one of the things i think if you got good primitives someone can go create one of these compile things very quickly like over you know a week or so right
[04:43:14]  if you already i think a lot of work with svelte 5 is the fact that like you saw the output of the renderer it's it's it's completely different
[04:43:21]  than how svelte worked before they actually changed to a fine green renderer amazing whereas like if you already have that have those primitives coming up with the syntax sugar is
[04:43:29]  like whatever right um but that's only basic syntax see i i want to talk to dominic because i know he's done more than that like there there's some there
[04:43:40] 's some really cool stuff that dominic can do with a compiler but you know let's keep on going to be fair view had a solution for nested state right from
[04:44:03]  the start i think as well view those guys if you've been playing with reactive i said i give you a hard time sometimes about the composability because like i i use knock
[04:44:13] out composability was like one of the biggest wins and then they view got away from it because they were trying to hide in plain sight i got a lot of respect from that
[04:44:23]  perspective because i don't think view would have been as popular if they didn't hide in plain sight um because people really really hated these kind of primitive things react was so
[04:44:37]  brutal on it and picking it apart that when they introduced hooks like my jaw dropped i'm like man like game on right like the the funny thing i already released solid by that
[04:44:47]  point but the second i saw hooks i'm like all right like in my mind i'm like we already had a very good alternative to reacts model but i thought it was
[04:45:00]  a dx problem i thought like no one's going to use this because no one will ever accept the developer experience of this people want plain objects they you know some people in my
[04:45:09]  classes but like there's like there's trade-offs here where like i felt the better model was this composable pattern but everyone wants the dx react i gave up i
[04:45:21]  i just was building stuff for myself that's why i didn't open source solid earlier i only open sourced it because of benchmarks and then react was like hooks are good and
[04:45:32]  then i was like that's when the light bulb turned on for me uh you know like it was it was suddenly very clear i'm like if this is okay well you
[04:45:43]  can do way more like it like this like you know like a whole ton gets unlocked people's preference this stuff is borderline religious yeah that's fair i think people like
[04:46:06]  yeah okay view view was kind of pushed into this because they were supposed to be the easy framework so dot value is fine i i don't like it because i prefer function sem
[04:46:18] antics over getters because really we are dealing with functions but and there's a whole chain of that but generally speaking dot value typing it like who cares i mean it is more
[04:46:27]  characters but who cares but the problem was felt was coming in and felt was felt was beating view at being the easy front of the funnel framework so if you start strategically this
[04:46:36]  was a real problem for view at a certain point i think view just accepted and goes like those trade-offs just aren't worth it you know i'm to me that's
[04:46:45]  a testimony to evan's like evan is a smart guy and he knows exactly he understands it you know i think he had to try it he had to see it but
[04:46:54]  he understands it i think a lot of people don't right like sometimes the the solutions worse than the problem but on the other hand you know that evan wouldn't give
[04:47:05]  up composability once he that opened up for him for anything that's why these apis look like this that's why they don't look like svelte it's very
[04:47:15]  interesting for svelte to come back this way yeah yeah you got to be careful with this i've had this problem yeah i mean there's other languages that actually do
[04:47:43]  nice stuff we don't have them and svelte is a language it's okay as long as people you know you know don't treat it like it's just j
[04:47:54] avascript anyways let's let's the funny thing is to this day some people still prefer prefer view too when view announced composition api it's a lot of the same feeling
[04:48:05]  that the svelte community is right now where everyone's like it's react hooks i'm going to tell you this right now svelte community it is not react
[04:48:12]  hooks this is so much better don't be concerned about that part okay right straight up like this is a very good thing for consistency like this is from like i remember we had
[04:48:28]  that list of what's important in that article yes there's a syntax cost here but this is the kind of thing that any framework author understands is valuable it like when we
[04:48:40]  talk about what's actually important this is one of those moves it changes what's felt is a little bit i think though which makes it hard and they're trying to keep within
[04:48:50]  their style which is where this tension comes from but if there's someone who can do that it's rich harris he understands that feeling it's not something this is why
[04:49:01]  i leave this stuff to my community to build because i honestly it's not something that i'm too concerned with i i think it it just it's i just know that this
[04:49:09]  isn't where my strength is my strength is like we came up with the signal rendering pattern you know we didn't come up with it sorry surplus did but like we refined the
[04:49:19]  signal uh rendering pattern you know basically the same as it was today seven years ago right now seven years later other frameworks are catching up but it's not like we stopped doing
[04:49:30]  what we've been doing for seven years i'm we're already on to the next thing right um so like rich and the this felt team it's like if if i was
[04:49:41]  going to trust someone to solve this api thing um i i think they they would do it and it will be good because now we have the same base so alexis
[04:49:53]  can go update his plugin you know he whatever they land on he can go to change that in a couple hours and then you know if it turns out to be good well
[04:50:02]  then that's something worth considering you know i mean it is interesting if that means both become the same thing i i don't know i i i still have my reservations but this
[04:50:11]  can always be an option right i i think for me transparency is very important like if you know as i said if it's a function it should be a function but yes
[04:50:22]  they are transforming files everywhere right yeah view value works without translation don't have that exactly solid also works without transpilation i want to make that very clear all solid changes the js
[04:50:39] x so look look but one of them people are bringing up react right now not that i think it's good but imagine the react teams are because they hope to get a
[04:50:55]  lot of similar events you need to recommend yes let's talk about react for a moment because i could have been the ceo of ruins sorry this is just this is just another
[04:51:05]  fun joke i i honestly felt is so good at selling stuff that it's been so hard i'll get to react in a minute but like like it's funny solid's
[04:51:17]  been doing this stuff the way it's basically been for years um and i didn't i made very specific set of trade-offs because mechanically is where i'm focused i
[04:51:28]  wanted to create the thing that would in my opinion create the best ux for the end user right i i i really i i'm aware of dx this is why i
[04:51:36]  didn't push solid back in the day you know because i was i realized i thought like you know people wouldn't care about that it's not like i'm oblivious to
[04:51:42]  it but i i'm never going to compromise ux or dx never never not like i think there is a ratio where where it matters where people are comfortable to make that kind
[04:51:52]  of thing where you have to actually like it dx is more important but for me i think i i think when it translates say to performance or something i think it's like
[04:52:01]  a thousand times multiplier essentially like the time a developer waits versus the end user waits it's worth it when times a thousand is the improve like the difference you can make right like
[04:52:13]  if if if it costs the end user 10 milliseconds it better save the developer um 10 seconds you know around that range anyways let's um what was interesting here sorry is that
[04:52:33]  like because the frameworks were so built on this front of the funnel thing and like advertising their easiness for so many years to compete with react so that they could like steal the
[04:52:44]  venture they they've had to sell a message that i never felt was really honest i wrote an article a long time ago it's my least favorite article a bunch of people
[04:52:54]  found solid because of this article but i wrote this article and i'll share it on stream it's funny years later how much i mean this is biased as bias can get uh
[04:53:08]  why and why solidjs do i need another review this has a huge disclaimer in the front i'm gonna apologize to people who get offended by this this is why i push
[04:53:20]  solid back when i did i'd already written it but i talk about my experience with react i talk about my experience with view and svelte and svelte especially i
[04:53:28]  felt like everything they told me at the time was a lie and no good about it this is not it's not a lie in a real sense i guess it's like this
[04:53:37]  it's like the it's me it's well meaning but like i'm a technical guy so when someone says no runtime you know like disappearing framework like i expect it to
[04:53:46]  disappear not just be hidden somewhere else or you know virtual atmosphere overhead or use bad benchmarks or just like it drove me nuts and i understand this is not important stuff but the the
[04:54:00]  way the framework positioning thing works almost forces you to follow that line like this in the same way svelte's hidden the the signal implementation details to me that's like another
[04:54:10]  one of those like yeah i'm gonna put this under the like why category right and it's not a lie it's just like a way of selling it right whereas different
[04:54:19]  frameworks have different things they care about right um some firms care about the enterprise um i think one of the trickiest things about solid is we've had a hard time marketing because
[04:54:28]  our brand is trust right like it's about transparency it's about trust and this is really hard because when someone tries to market something you're like no that's not true
[04:54:41]  we can't market that way um but like i i feel like those kind of trends even though they have nothing to do with the technology actually have a bigger impact on where things
[04:54:53]  kind of end end up and it's just something about this like ruins you know like it just kind of fits in with something that's very svelte i'm not
[04:55:02]  saying this in a critical sense it's just it was one of those things where it's like you you know what i mean like it kind of it makes sense it follows what
[04:55:14]  the framework is but it's like it's one of those things where it's like challenging to figure out where the balance is i mean think about it svelte was created
[04:55:23]  so anyone could use it it was a framework for everyone easiest funnel top the funnel thing so it this all perfectly consolidates with that identity i worked on marco and that
[04:55:34] 's when it really opened my eyes that different frameworks have different identities they have personalities they have philosophies behind them and you when you work on them you have to serve that philosophy
[04:55:43]  even in your decisions when you as a framework author are conflicted like two-way binding i am not a fan of two-way binding but it was the right move for
[04:55:53]  marco six and it's so it was conflicting even for the marco team a bit like we did our best to make it a good version of two-way binding
[04:56:03]  but it had to fit with the design of the framework rather than any of our personal opinions about it and i feel like you that's what gives the framework its brand and its
[04:56:13]  and its meaning so yeah it's it's a tricky place okay let's catching up a bit with chat so yeah i i i i i got something for you i
[04:56:45]  don't got one article i have i have like three articles multiple articles like when that thing happened with devon gavitt i i posted some of huge articles on this stuff
[04:56:56]  but let's we're actually going to touch on those articles in a minute here because we're going to talk about react right because joe savanna amazing guy he is
[04:57:10]  now kind of like one of the leads on the react team at facebook if you've seen him on the recent server component um uh conversations you've uh he he's basically the
[04:57:23]  lead on react forget he's uh he built reactive libraries at uh meta i i love following his stuff when he talks about his insights on reactivity and language it's super
[04:57:34]  interesting especially because i think the area around forget is really interesting um you know like it's very interesting now that we've gone to this point that we can look at stuff as
[04:57:44]  a language but you'll notice that very very quickly they want to distance themselves from the signal thing this is technically true but there's a fundamental difference spell five is the first
[04:57:54]  single base framework that correctly makes signals and implementation detail this new category not another entry in this existing thing he retracts a bit after our thing more actually it's the closest i
[04:58:02] 've seen he mentions that like the getters are leaks but essentially they they really wanted to kind of point out this fundamental difference and the thing is i don't see it right
[04:58:15]  and as long as you identify the entry like let count you know make it state and as you know and you have these function semantics or like these kind of drive things
[04:58:28]  like the thing is outside of javascript language i could see this argument being made but like i i feel like there's this fear here that when react forget launches and it
[04:58:41]  looks just like these kind of things they want to put themselves in a different category and i given the reaction to this felt release i don't think people are going to let
[04:58:50]  them do this this is good and they they have to avoid this from a fundamental standpoint but the problem is and i came to realize this a bit later is we've been teaching
[04:59:02]  signals as an inclusive thing we've been teaching it as a form of reactivity the syntax didn't matter the implementation didn't matter the concept of the language of this reactivity
[04:59:12]  mattered so it's very hard when if react does come up with something that's very similar to this and works kind of the same way and uses signals under the hood or
[04:59:23]  whatever then are all the frameworks the same like i think react doesn't want to get pulled out of that mind share but the reality is i don't think people are going to
[04:59:34]  let them like that's why that's why this discussion's happening it's very subtle i feel like this is like a a positioning thing for a future positioning and i think
[04:59:42]  it's interesting but i don't i i don't i think people will just see through it um unfortunately for them um the problem is they spent so much time bashing uh
[04:59:56]  you know kvo key value observables all that that unfortunately this is the syntax thing coming back to haunt them right because like if if i go back to signals week
[05:00:09]  uh i i call it when when we had that big thing react versus signal i had this great discussion at the bottom with dan abramoff right for the um that kind
[05:00:29]  of got into it right because i i i i made this very you know this is the knockout 2010 react hooks 2018 thing the thing is the difference that i didn't realize
[05:00:41]  right away was although you could write your react code like this react doesn't actually want you to use memo like this for them like dan made this this really freaking honestly please
[05:00:58]  never write code like this but he wanted to do it to be illustrated he wanted to show that they could just make the whole function reactive and that like you could just write plain
[05:01:07]  looking javascript and react would handle it for you ideally they would want to compile it to something kind of like what svelte's doing um you know symbol like
[05:01:19]  but the the problem is like i'm using props here but it could also be stayed in the component like our sir dan's using this and he's showing that like because of
[05:01:29]  without the function semantics we don't listen to the whole thing but the the problem with this example is it's it's just a stupid example sorry like there's lets and
[05:01:40]  reassigning stuff in there you could rewrite and then he shows like this like wrapping this in a separate expression and doing all this and then you know it kind of goes on
[05:01:51]  and on and on but then like the thing was you could also just write it like this const this like if you write it as derived and this works also in react like if
[05:02:02]  you turn these into memos or whatever as long as you could just write it as expressions that equal something then it's just he was work the refactor story actually isn
[05:02:13] 't that bad it um right because you could obviously write the whole thing in a memo and do the same thing reacts doing but this is just not the way you would want to
[05:02:23]  actually write it um and what i was getting at is if you had that fancy compiler wouldn't you want to just write it like this anyways like have it be declarative like
[05:02:36]  this yeah see it's the same thing without our dollar sign states and memos and wrappers but the key part that i got from this was that the react core team
[05:02:45]  wasn't viewing like even though hooks promoted this kind of declarative data structure which i as i i think i think i what my first hooks article what did i call it here
[05:02:57]  uh a declarative data love story the react core team weren't actually in love with the class declarative data it was just a way that they could do some kind of
[05:03:07]  composition they wanted um right because if you were you would just not write this crazy spaghetti code you would just literally it just as i said look at the look at the last version
[05:03:21]  of my code example you like how is the crazy spaghetti code better than than this you have to change the way you think about data but this is because you're thinking in terms
[05:03:33]  of data flow instead of control flow and react wants to guard your ability to do stuff control flow wise but the truth of the matter is you know data flow isn't bad
[05:03:45]  okay all right looking at some comments here see this is the thing be able if state of a component removes any need i've ever had for two-way binding constant signals
[05:04:01]  are the best dimension model hands down i think okay yeah i have nothing to say about htmax um nothing nice at least but um the the thing is yes if you it
[05:04:15]  the problem with a statement and i think dan makes a statement here somewhere is that you say oh we just make the whole component reactive is that like they were viewing it as
[05:04:28]  like we're limiting the reactivity to small scopes and they make the whole thing reactive the problem is by making explicit scopes we can make things outside of the component reactive
[05:04:37]  which is something react can't do and something that svelte has never been able to do until now so this is the right evolution right i have whole talks about why
[05:04:45]  we need to move beyond the component model um it's hard to you can if you do too many optimizations on the component level itself you get trapped by it and this impacts
[05:04:54]  things like you know future hydration techniques and all the stuff for zoomability who cares so like this is yeah this is this is a place where i i do want to see where
[05:05:09]  they end up because on one hand it's a maybe this is really boiled down to a syntax game right to be fair joe got a lot harsher um feedback
[05:05:19]  from other people like people saying like you know this is just signals it's not implementation detail you know i haven't looked at all of these to be fair um there's ev
[05:05:30] an we tried the exact same thing two years ago yeah yeah so yeah i mean i get some of this um okay let's keep on going knockout did it first yeah
[05:05:54]  yeah i mean it's it's i'm trying to remember if there's any good conversation off of this one it's just yeah this hooks conversation i really want people to
[05:06:06]  understand that hooks are not this like that previous conversation with dan really opened my mind to it even more it's not only like the semantics are different when your component re-
[05:06:17] renders over and over again that like what matters outside is different than what's inside it actually changes the way you write components i saw someone make a joke or something around oh
[05:06:26]  now i can just change all my use blank to whatever and have it work in svelte obviously i got suckered into the joke again because i'm like no they
[05:06:33] 're not hooks um but i think i think it's important to kind of hooks are different but uh reactive language is not so anyways yeah in any case i think that i think
[05:06:47]  the end of our conversation was that we're kind of agreed that there is definitely convergence um there is a convergence here that's happening and i think that's very very interesting
[05:06:59]  um okay let's look at some bookmarks now conversation happening in the community about this um yeah so this is the underhood detail thing yeah we talked about this already i think
[05:07:15]  um yeah i'm i'm not i'm not yeah i disagree with this based on the feedback we got from view users when we tried reactivity transform to them it was
[05:07:26]  a compile time transform that was too magical and they much preferred having direct control over raster signals especially in non-component context yeah because it's it's it's like
[05:07:34]  i i had this in a different article it's it's just like you move the function call to the other side and make it a dollar sign you're just kind of like
[05:07:43]  you know what i mean like it lets you type less but it's it's kind of like you invented a whole new magical language which is fine if that's your pr
[05:07:53] erogative which is why this could probably work for svelte but you like you could just like it's it's not even saving you much right um yeah i i
[05:08:07]  should like this comment right yeah i i've already gone over to these points so yeah i i i think yeah what what else what else is there yeah so auto under the
[05:08:22]  hood not a thing this meme never dies i mean uh svelte had a context api the thing is if you svelte always had a render once like
[05:08:56]  component system like or like view it's a split mode where there's like the initialization that renders once and then like the view part that updates specifically so context and s
[05:09:06] velte like view like solid is kind of fixing you don't need state changes it's what you put in the context that matters right like i think they use stores um the
[05:09:17]  context api was just a way of doing di for stores so a lot of people didn't use it they just use globals because like most time context is just a
[05:09:24]  global anyways so i feel like context probably doesn't change all that much here because like in solid our context api is literally just a container it's just a it's just
[05:09:33]  a reference it's like you could have just imported it globally but use context because you want it to be part of the tree it helps with ownership and you know some complicated cases
[05:09:40]  i i actually recommend it because it keeps things more organized but generally speaking context it's unlike react where it's actually a a re-event part of the re-
[05:09:47] enter cycle context is literally itself isn't reactive okay yeah i mean i wonder if this is some of these quote tweets are kind of really interesting i think this surprisingly i think strange
[05:10:03]  will have to be more depth plus standard signals interest is good for everyone yeah the other side of the coin okay here's a fun one yeah the funniest thing is yeah i
[05:10:17]  guess someone already mentioned this probably i this is something i found too in order to ship the interface you basically have to make like a signal wrapper anyways we use a we use a
[05:10:33]  like this one you like you this is very to purpose you get the counter you call counter.increment counter.count that's fine but like i actually liked um the
[05:10:42]  the the one thing i stole from hooks like we were already doing stuff like this but the one thing i stole from hooks was the destructure array because i actually liked being able
[05:10:50]  to name the variables in the local context i think that was brilliant actually while keeping the read write segregation svelte doesn't have to worry about read write segregation because this doesn
[05:11:00] 't escape the context it's in which is uh really cool it's it's like they solved one of the hardest problems with a by using the compiler um whereas we have
[05:11:11]  a very explicit api for splitting it but the thing is once you leave the file it's explicit you're calling dot like this increment is set and this is get right so
[05:11:21]  now you have counter dot set encounter dot get like basically the like i i imagine you could actually change this to a setter and and and call this value and you know
[05:11:34]  you'd have the view api here okay so yeah i mean some people are saying this isn't an improvement but on the other hand it's the same thing everywhere which
[05:11:49]  is i think really great um view reactivity transform we already kind of talked about this um okay maybe greg can help me a bit with this what happened here i'm sure
[05:12:04]  i'm doing something wrong but it seems hard to compose things using spelt ruins um what what's this example count state update state plus okay that's fine count plus one
[05:12:20]  oh oh interesting is this still is this still the hoisting problem is this still the hoisting problem i don't know if greg's still here with
[05:12:41]  us yeah yeah yeah see the the the thing is compiler is always an extra layer right so what he's show uh i think rich showed here that he can do yeah there you
[05:13:02]  go this is the this is ref um from view and this is solids create signal so but it's kind of funny because i feel like to actually use this stuff you're
[05:13:12]  going to come up with uh because you have to move it between files i think you're actually going to have to come up with a convention like this the funny thing is we
[05:13:20]  baked our convention in svelte is leaving it a bit more open with the compiler that people can come up with their own convention um i mean obviously you can always make your
[05:13:29]  own convention convention when you make your own custom hook or custom signal but uh yeah no this this obviously makes a ton of sense um when you get when you understand that the
[05:13:42]  function semantics like why this is wrapped in a get and why this is wrapped in a function call um all right yeah it depends on the community in the ecosystem yeah the
[05:13:59]  funny thing is like i'm sure pattern will arise but there has to be one that's the interesting thing is for this to work there will be a convention like there will be
[05:14:08]  a pattern around these kind of things um because you do need the wrappers okay i want to look and see what greg had to say about this greg creator of
[05:14:17]  leptos commonly hangs around on around the stream to answer my questions doesn't seem to be around at the moment though no there's there's no read write segregation which can
[05:14:27]  cause spaghetti reactivity it turns out ruins ruins just aren't reactive outside the electroscope you can store mutate them that demonstrates value nice yeah yeah yeah that's interesting
[05:14:41]  so it's i i this x plus y is because this is outs yeah so interesting so this how no oh it's because of mutate okay yeah yeah oh that's
[05:15:06]  interesting it's it's this is referenced as a read but not as a write and the write happens here which is the problem like if this was a read this would track properly
[05:15:21]  because in order to go to the next scope you have to read it right like if this was like a like this it was like wrapped in a function it would read properly because
[05:15:29]  you'd have to read count in order to do whatever op like thing you're reading inside because you you read on the point it passes in but in the chase of a
[05:15:39]  state update this is a read but it's not a write at which point it doesn't even know what this is okay yeah okay that that makes sense that's interesting yeah
[05:15:58]  so this is this is this is the challenge with the compiler right you there's always going to be edge cases on the scope of things of like where like the compiler ends and
[05:16:08]  the runtime starts when it's a component the boundaries are well defined when it's something else and it's it's a little bit trickier especially when those boundaries are implicit
[05:16:20]  i mean that's the reason why quick has dollar signs they want to make it like really clear that like this is a reactive statement this is not and this is interesting this is
[05:16:30]  actually really challenging like this from my like my brain space as a framework author this is actually really a fun problem to look at because like i want to try and i i
[05:16:41]  like i love to like think about this and see if we figure out good solutions to this because yeah i i don't think this is expected from an end user but it makes
[05:16:49]  sense from the way the compiler works but again that requires you to now know about signals having function somatics and understand what the compiler compiles to like that's that's
[05:16:59]  a decent amount of complexity behind the hood of what you see right like because the first time you do something like this it's not obvious why it behaves like this huh that's
[05:17:11]  that that's that's very interesting this aged well uh good old times yeah i mean the funny thing is everyone knows this isn't this announcement was like two days after hooks like
[05:17:27]  yeah this yeah it's it's interesting um okay yeah okay let's let's talk about adam rakis he this guy is my favorite chip poster i'm he always has
[05:17:48]  the right framing to stir up the crap and uh i i i i think i think this is this is uh this is this is on point right boohoo solves like every
[05:18:07]  other framework now it's such a lazy take right it is like i do appreciate the shout out here but what was more interesting was a lot of the conversation here i had
[05:18:19]  a bit of a back and forth with rich harris which i want to talk about now yes uh sorry before i get to that yeah getters and function calls are unfortunately implemented
[05:18:32]  detail for starts from javascript for get a better language support when you need them there's a question if we're doing compiles now why aren't we doing extra mile
[05:18:37]  implementing a full single perimeter into the language we are there is a standards i talked about this a couple weeks ago dominic myself rich evan they we're all in the
[05:18:46]  same room now talking about getting signals into the browser the problem is there's two sides of the signals the first part is the mechanical side and the other side is the language side
[05:19:02]  and because of how extensible our frameworks depend on these kind of patterns um it's hard to get alignment on the language side of things because like we're constantly extending them
[05:19:14]  and we want to we want access to the reactive graph we're tailoring these things to our i the best outcome i see for this right now is us simply having something that
[05:19:24] 's interruptible in the sense that like we have the same auto tracking and can depend on like maybe the c level you know in the browser to optimize the propagation reactivity
[05:19:35]  i don't think this will solve our universality on uh on an api side it's it's it's actually a hard problem because in one sense felt's trying to
[05:19:43]  hide the reactivity by not having an accessor and always treating it as a reader right but the i i'm stuck on this one because sometimes you do pass things around which
[05:19:57]  is why the function semantics come in like i for a long time i was looking for like variable decorators so i could just say like like i want i would love
[05:20:05]  to have a mechanism in javascript that was like what svelte did for local scope so i could just say like yeah this lives within this file doesn't escape it
[05:20:14]  um and but like you already see the challenge of that scoping thing in that example that greg put out there like you have to realize when you pass something to a
[05:20:27]  function it leaves the scope well guess what um it's not gonna like you had to access the value for you to call the function like the only way i see this happening is
[05:20:41]  if reactivity expressions could get their own uh get their own uh syntax almost where you like it's it's the function you pass into create memo or the function you pass
[05:20:54]  into uh uh create effect like if the wrapping reactive expression there's a way that you could wrap it on the one side and get it on the other side and then you could
[05:21:07]  transport it but even then like you almost need the type system playing into it it's it's very complicated i actually i've been trying to wrap my head around what a proper
[05:21:16]  solution would look like because even the compiled solutions you have to do a lot of work and then you have to do a lot of work and then you have to do a
[05:21:25]  lot of work and then you have to do a lot of work and then you have to do a lot of work and then you have to understand reactivity and the brow and
[05:21:29]  getting in the browser of the standards that's been like because it was mostly rx i guess in the past but it's been something that's never really worked out but
[05:21:38]  i do see a lot of common ground we are converging so there's opportunity here yeah yeah cross file compilation yeah marco has been doing this uh with marco 6 but
[05:21:53]  yeah yeah i yeah to be fair the the flex these nuts got some funny uh meme post responses um yeah i mean most our interest right now is about standardizing the signals
[05:22:23]  or like the atoms and even the drive values but keep the effects in the zone yeah so i mean this is just one of those yeah i the the the need to
[05:22:51]  pass it around is really a challenge here i i see i like locality a lot of solids apis are built around locality right that's the reason we tell you to
[05:22:59]  access the value in the props not the passive signals because i want to handle the pass through i want you to pretend like it's a value but under the hood i still need
[05:23:09]  to be able to pass stuff through right i i think that that's the thing i like apis that force um that kind of locality but you still need to pass
[05:23:19]  stuff through and i i don't know if functions not working is is is odd like it really gets in your way to compose like this needs to go much deeper into the language
[05:23:30]  level but yeah where do i want to go here yeah so weslow goes yeah i agree svelte maybe syntactically more similar to other frameworks but it's still
[05:23:48]  much lighter than others and i i had the i mean this is a little cheeky for me i was i i was like is it actually lighter because like obviously historically speaking s
[05:23:56] velte produced bigger bundles right because of the the compiled output i was like trying to figure out what was actually lighter you know like there's a lot of complexity you know
[05:24:07]  all these things instead like you can look if you had framework a which didn't even use the jsx transform um let's pretend vobi actually from fabio right or
[05:24:16]  sinuous another one it's basically solid but no doesn't use like the a fancy jsx transform maybe uses like uh tag template literals and just calls functions and just does
[05:24:29]  that no compiler on one side but you know the pass through functions and then on the opposite end you have you know the svelte syntax that we're seeing proposed like
[05:24:39]  i definitely feel the vobi side is lighter like it's not even close right i think we make these trade-offs and there's like a zone we find that where it
[05:24:50]  fits nicely for us but for me i never consider the svelte side lighter because i understand what goes into it right so this is where the composition i've been curious
[05:24:58]  about how about how you know svelte leaves this impression i mean i never quite see it i'm too mechanical what what i've come to realize that normal people and in
[05:25:05]  the kindest possible way you are not normal talking to me don't choose things based on technical characters they choose things based on aesthetics or perhaps more accurately vibes right this is what
[05:25:15]  this is where the vibes comment comes in and it was what i was talking about when i was saying you know where people choose things because on syntax some people vibes with solid
[05:25:23]  reactive model which we stole it but for a lot of people not everyone this is a good thing you know um this just feels lighter like wearing a linen shirt on breezy day
[05:25:33]  weeks we'll see optimized for vibes right right it just shows like you know where we have this read and write segregation you can just you know there's there's less code to
[05:25:42]  write right um yeah yeah yeah yeah thank you rich for defending read write segregation yeah but this is this was my response to rich's thing lightweight syntax in your favorite like
[05:26:16]  i i i i think like it it's not that simple right like the the the thing is even if this seems like less i could never look at it as anything but the
[05:26:41]  whole iceberg so to speak and you know he's saying first law of thermodynamics it can't be stored only transmuted you know he's just saying like you push the
[05:26:49]  the complexity from one place to the other if you move the complexity from the place where it affects the end users and put it down here then your your your net positive essentially is
[05:26:59]  his argument right and my my response to that is yeah these things aren't all or nothing my current thinking is more you is that the more you push under the surface the larger
[05:27:10]  the whole thing gets sometimes that matters sometimes it doesn't so it's a really tricky balance like we use compilers in solid we aren't like bobe like we
[05:27:19]  do more compilations so we definitely push a bit under the ice but like the balance is tricky i understand by doing that i'm adding a complexity layer that actually makes the
[05:27:30]  whole framework heavier not maybe too much but it makes it heavier so like from a sense i have a very hard time like we do it to make it you know maybe
[05:27:42]  easier for people but it it increases the the overall weight and i i i realize people don't generally see it that way so when i see felt i don't see a lightweight
[05:27:52]  framework i see a very heavy framework um it's it's it's just because i understand like it's everything we talked about so far when we're like understand like it
[05:28:03] 's what you don't see is still there like i can't unsee it i don't know how else to say it like when i see this i see every i don
[05:28:10] 't see that code i see what it compiles to i i just i don't you know you know what i mean i know not everyone sees that you know but it
[05:28:18] 's like if i have to understand how something works that's what i see um felt was amazing in its previous versions at making the abstraction really believable i think the value the
[05:28:32]  the the success with the abstraction is ultimately where this passes or fails anyway um yeah this was a great chat with rich all right what what's going on twitch chat what did
[05:28:53]  i miss what what are we doing here can you make a language everyone can make a language i mean the problem with languages all the tooling the reason we chose jsx to
[05:29:17]  solid was because like all the tooling exists the the ironic thing is like as felt's got more mature we could also choose their language too you know um if we wanted that to
[05:29:25]  be our templating language like we could just use their tooling i the challenge of the language is obviously consistency and abstraction and all that kind of piece from a design part which is
[05:29:35]  you know an interesting problem but the other problem is actually you know code completion and syntax highlighting i have a whole stream on building a language in fact this is the perfect time
[05:29:45]  to bring it up if you're into that marco i worked on i worked on a framework that was a language in the in the in the complete sense and this is if
[05:29:54]  you ever feel like yeah let's just build a language i'm positive this stream will either excite you a ton or basically completely demoralize you so yeah i i
[05:30:25]  i this is a great topic honestly i i spend a basically actually convert marco into solid in this in the stream really a lot of fun uh i just yeah i will throw
[05:30:36]  that out there it is definitely uh uh it's definitely a tricky thing like the problem is like let me find it uh just rich truth about svelte this is still
[05:30:53]  one of the best documents about svelte of all time let's drop that in the chat too if you haven't seen it i've shown this on stream dozens of times
[05:31:04]  but you know let's put it back in here again he explains that languages that have been too ambitious have basically failed and the reasons felt is good is because he was thinking
[05:31:17]  inside the box he kept javascript syntax when i wrote my reactive script article it was the same goal i'm like can we keep javascript syntax it's just there
[05:31:24] 's something about the tooling level and stuff but it is dangerous to play with semantics too hard right like there's different levels of acceptance like like those ng4s or
[05:31:38]  v4s and view on html semantics like for me personally that they drive me nuts but you know some people will accept it and i feel like sometimes it's
[05:31:47]  felt it's the same kind of thing as long as you understand like it's not html or it's not javascript but some people the fact that they
[05:31:55]  don't realize that it's not is the saving grace so if you do good enough with the abstraction and they don't realize they're ever not coding in javascript then
[05:32:04]  you get that win um at least for a while i think the problem and challenges as frameworks mature how do you go from here right and some people there's a theory put
[05:32:16]  out there that you know these tools uh resemble what what uh like the thing that created them like the scenario um taylor hunt oh man i want to see if i can find
[05:32:29]  it i i would have posted this but he didn't post it himself uh taylor hunt form uh uh where is his username is tight everywhere um building world's fastest i
[05:32:46] 'm probably fastest website other mistakes we had him as a guest he's marco core team um uh i don't follow people on here usually yeah why not react but
[05:33:24]  he he wrote some new articles recently and um he he wrote this amazing series where he talked about performance and and basically the lengths he went to get optimal performance in a front-
[05:33:35] end app it's it's an it is amazing honestly it's one of my favorite article series ever because it's it's a real use case where stuff like partial hydration and
[05:33:45]  streaming actually made a difference um like obviously ebay does that and it's a huge company but this is like at a scale where you could actually see the impact in a
[05:33:54]  measurable quantifiable way that wasn't obscured necessarily by ad revenue that he he did the the he did the ultimate bake-off and it's it's it's his insights
[05:34:04]  are profound he came back here to write a bit more to talk about like ultimately why you know to choose react but he has this premise in this article um which is front-
[05:34:20] end frameworks and no exception he's saying what there's a law to this code struggles escape why is created you can also trace latest strengths and weakness all the way back to
[05:34:28]  the goals of the original authors is it because of backwards compatibility developer cultures feedback loops blah blah blah blah blah so he was talking about svelte svelte was first class
[05:34:36]  transitions blah blah data viz basically he was saying svelte came out of the newsroom right angular came out of the need to build internal apps at google react was
[05:34:48]  created to stop facebook org having conway laws you know take over he he basically um talks about this in terms of the incentive and how frameworks never really uh escape in it ironically
[05:35:01]  solid was what was created at uh the at a startup um where uh that constantly like pivoted like that couldn't like what is it called the eternal startup like the startup
[05:35:18]  that can never quite get there where we had to constantly just pivot and change the code and just like it was it was a long-standing code base that lasted years but
[05:35:29]  we had to constantly modify it um we didn't have the resources to necessarily replace stuff um it wasn't at the same kind of scale it was just like everything had the these
[05:35:42]  modular pieces anyway i i think this is a very interesting um explanation for all you know all these kind of inherent um traits of the frameworks uh anyway you guys are talking
[05:36:25]  why are you uh you guys are talking about htmx okay i'm probably gonna have to have someone on stream to explain to me why htmx is
[05:36:40]  any different than any of the panel replacing um software we've had in the last 15 years um and not in that it's slicker and lighter but in how it actually solves
[05:36:54]  any problems right like i i get it but it's like i think i get it but at least it's it's it's it's sort of like uninteresting right
[05:37:05]  it's like okay yeah i switched some stuff yeah like you you there's there's a lot of things where you wouldn't want to go to the server all the time so
[05:37:12]  it's like you definitely want javascript state still so you do have to it's not like live view where you get to uh how should i put it where you
[05:37:21]  like have a source of truth on the server you still have the conflict so it's kind of like it's i mean i can picture really simple sites for this is valuable but
[05:37:32]  like i i haven't made one of those sites in 15 years so i mean i i guess the problem is a lot of people have been kind of pulled into react and they
[05:37:41]  shouldn't be there and htmx is like this the savior for that you know but yeah um but if it centralizes state on the server that's a very
[05:38:01]  inefficient model right like if you actually have to go back to the server for your state like constantly like that then you're kind of like i i use this metaphor before but it
[05:38:11] 's like i i use it for back end people it's like if you can hit a level one cache instead of hitting um in your cpu instead of hitting ram you
[05:38:23]  want to and instead of hitting your hard drive you you know you you know you want to so it's like i don't yeah i don't know like if you have web
[05:38:34]  sockets like you have a freaking flow that's a different thing but if you're literally just like swapping partials like that model doesn't scale i mean it scales
[05:38:46]  in a interesting way where the problem is i i maybe this is the the the gist of the the disagreement that i you know kind of went on twitter between me and prime
[05:38:58]  a little bit someone pointed out last week that when his people flooded in that we had like a bit of a thing i i i'm trying to remember what who who theo was
[05:39:07]  like what did i miss and and someone's like ryan uh you doing some kind of like when all the prime uh people came across basically telling them that they were doing
[05:39:18]  it wrong it's just that you to a certain degree you can control the server like that's on your side so up to a certain scale you can always make more of it
[05:39:34]  optimize it better and keep on doing what you can do but you do not control the end users devices which means that and because of the latency you know getting longer the further
[05:39:47]  away you get from that central source the server it means that the impact that you can make on the last stages for the ux of the end user is it's it
[05:40:00]  like it makes such a bigger difference like sure go make this thing on the server a billion times faster that'll save you cost on the back end yeah definitely make things faster it
[05:40:13]  will help but if if you sacrifice the front end the actual longer latency piece for that you you you haven't accomplished anything so it's it's like like well i mean
[05:40:29]  you made your costs cheaper and probably even cheaper because the latency on the other end actually slowing your end users down so now they're hitting your server even less like it's it
[05:40:37] 's win-win but i mean that's that's not a good solution like you you gotta you gotta make the expensive stuff actually cheaper not the already cheaper stuff cheaper no
[05:40:51]  remix is state is not on the server people get really confused by this remix is a single page app like next it's it's there's nothing you can have a session
[05:41:09]  but i mean any backend server can have a session yeah i mean yeah and with vanilla.js and stuff yeah i don't know i just it's been a very long time
[05:41:20]  since i built an app that like that would do the trick but you're right like if i was building something about as complicated as hacker news which this is what i'm
[05:41:29]  saying like i just don't think of an app that i like a demo app i built then i think that like htmx is probably good but the problem is like
[05:41:40]  if you take that too far you end up with github no one wants github right that's like that's what i picture when i picture htmx
[05:41:49]  right if you're making the if you're making the ajax calls anyways but when you're not that's why we have these hybrid models now and the problem is when
[05:42:07]  you have to deal with two different systems to play this game it's it's not a it's not a fun game we've been there before anyways we we sidetr
[05:42:22] acked on htmx hard here for a second i'm sorry it just it keeps on coming up but it's like one of those things where it's just like like
[05:42:32]  i i've probably already seen my piece on it before like it's i don't know why it keeps on coming up in my chat it's like people expect me to have
[05:42:39]  like some kind of opinion or like do this or kill that it's just like it's like it's just like there's there's like a realm where it matters but
[05:42:48]  when people compare it to stuff like react it's like it's it's hard to even put them in the same room you're just kind of like oh you could put them
[05:42:54]  in the same room but like they're not doing the same thing right like they're not accomplishing the same goal so anyway um anyways check out taylor's article um
[05:43:06]  the the yeah it's it's it's it's very insightful um anyway we got here because we were talking about svelte's ability to think inside the box how no
[05:43:23]  one actually wants to build a different language maybe wasm will change it like we're hitting the limits of javascript that's why we keep on having these compiler conversations
[05:43:32]  the problem is while it is javascript it's still javascript i mean that's such a funny statement of saying this but like what we are like there's a
[05:43:42]  trade-off here when you use javascript syntax you expect something to be javascript like um so um so you know here we are yeah okay sweet you have
[05:43:58]  you have my agreement that's all that that is awesome right i'm but like was it ever hard to build these sites before like that's how that confused me a lot
[05:44:20]  it was like was this actually ever a difficult like was this piece the hard part i guess there was like is htmax solving the problem of the heavier back end it's
[05:44:28]  like i don't need laravel or whatever or django or whatever i can just use you know like those frameworks actually add other features on top of the view
[05:44:36]  layer like yeah but i mean there's lots of ways to reach 100 on the benchmark right 15 minutes to six hours wow we're going hard today in your ht
[05:45:04] ml for thank you yeah okay well i mean there there we have it all right i mean it's it's all good yeah this is a record i yeah no this this
[05:45:30]  is definitely a record i i'm sorry we we i blame htmx yeah the truth of the matter is it's like i work in a zone of apps so like
[05:45:49]  h even when i go in the more static side like i would still lean towards more um what's the term expressive frameworks on the js side even into the zone of e
[05:46:05] -commerce so like htmx takes up a zone that it's like yeah not even docs i i just don't even know where i'd use htmx
[05:46:19]  um it's tricky because like if i was not in javascript then maybe i'd consider it but there's already so many good tools in javascript like most
[05:46:30]  of the places where you use htmx i'd probably just use astro and then be like yeah what whatever you know like i can serve some static pages from ast
[05:46:37] ro too you know you could build an e-commerce solution with it i suppose but yeah e-commerce might be okay because like there isn't that much state you really want
[05:46:51]  on the client the source of truth really like people can't buy without everything being verified yeah i i'll get that might be a zone it's just interesting because most of
[05:47:07]  the tools have been looking at how they expand the range and htmx falls into the zone where there's like a lot of overlap at a certain point where like people
[05:47:14]  are kind of getting to like if i had to choose one tool the problem is the one tools aren't good enough i guess right so that's why htmx
[05:47:21]  is a nice refresher but it's like nah you know yeah anyway all right sorry we've talked way too much about htmx in general i'm very excited
[05:47:43]  to see more about like the how this felt stuff comes along as i mentioned before i think it was in a response to the one of my own tweets what's interesting here is
[05:47:55]  uh it wasn't this one it was just like now now that this is out there now that like most javascript frameworks are using signals um they're like it opens
[05:48:09]  the door for a different type of discussion to happen uh you know people talking about standardization people talking about syntax and stuff like these are good conversations to have and i'm i
[05:48:19] 'm excited for them so um sorry i'm just laughing at at this let's let's just call it a day i it's it's been a long stream the
[05:48:53]  the thing is the model of having toolkit render svelte components as html frames sending with the same json dealing with and it's faster i can do tests well
[05:49:03]  you've you're basically building your own server components so wouldn't it be amazing if you just had like a straightforward dx that did this automatically like it's it's cool
[05:49:18]  that htmx is kind of a primitive the problem is like i'd never interface with that primitive directly if i had the choice i think because you're introducing a second
[05:49:28]  tier dsl anyway sorry just still going anyways um uh yeah i think we're good right let's call it a stream uh next week i'm in new york
[05:49:56]  i don't know what i'm doing any of those evenings but i'm there and uh then as i said following week vconf could be fun and then hopefully cross our fingers
[05:50:09]  we're gonna be back with dominic ganway to get the real dirt on svelte 5 and what's been going on um i said i i think right now
[05:50:19]  we're just reacting to the news but i think i think we're just seeing the surface like if if like think about it like it's kind of like what angular do with
[05:50:27]  the signals like you put the signals out there first marco with the tags api you just you try it with the current version to get a feel for the api
[05:50:34]  and then the real thing comes and i want to know about the real thing and i think all of you should too so have a good weekend till next stream i'm signing off