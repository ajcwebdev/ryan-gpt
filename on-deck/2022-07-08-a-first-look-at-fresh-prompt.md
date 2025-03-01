---
showLink: "https://www.youtube.com/watch?v=jfT7aEoeaGE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Fresh"
description: ""
publishDate: "2022-07-08"
coverImage: "https://i.ytimg.com/vi/jfT7aEoeaGE/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 03:57:41, which means the transcript is three hours and fifty seven minutes).
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

[00:00:00]  All right, we are live. Welcome to my stream today. It's been quite some time. Feels like it's been a month and then it was like a month before
[00:00:12]  that. As things would have it. I've just been doing a lot of stuff. Doing a lot of vacation. I just came back from a four week road trip across
[00:00:23]  the US and all the way into Canada. I went to go visit my great grandfather who or not my great grandfather, my grandfather. I talk from my kids perspective now
[00:00:34] . It's something you'll find you do when you have kids. Over in Thunder Bay, Ontario. So I went pretty much in a big loop around and came back down
[00:00:44]  through the Grand Canyon. It was like over 6,000 miles of driving. Oh, yeah. Okay. We got some people in the chat. Yeah. Come say
[00:00:56]  hi. Come join in. I'm streaming this on YouTube like I always do, but I thought I would also run this in parallel on Twitch. So we'll see.
[00:01:09]  I have like no, I've never really tried to promote or use Twitch. So I think I have like 10 followers or something. So we'll see if anyone joins us
[00:01:19]  through there. But for now, um, we just run like our normal stream. Uh, but yeah, a lot, a lot's been happening over the last,
[00:01:28]  uh, the last, uh, month. Uh, I feel like I missed a lot, actually, while I was away. Previously, I was kind of around and I
[00:01:36]  just wasn't doing stuff, but I, I was like driving every day. I, I tried to check out what I could, but I only really latched on to
[00:01:45]  a couple of things while I was away. So I, I've had to play a lot of catch up the last couple of days. Um, so yeah, a
[00:01:50]  lot, a lot's been going on, you know, just rambling right now. Well, I wait for some people to come in and join the stream. There we
[00:01:58]  go. Here we go. People come in. All right. Well, yeah. How's everyone else doing? As I said, I, I've been having a great
[00:02:09]  start in my summer. Um, yeah. Hi everyone. So many of you, oh man, I don't know. Yeah. Yeah. No, I've,
[00:02:21]  I've been doing good. Thanks. Um, yeah. I mean, I was debating, I was trying to, I realized this morning, I was like, Oh no
[00:02:31] , I don't have lemonade. Um, and since I moved the Friday streams earlier, I was like, okay, I'm not going to do my normal cocktails.
[00:02:39]  I mean, you can pretend like I have a gin buck or something right now, but, um, no, this is just an orange juice with ice. Um, nothing
[00:02:47]  too fancy. Yeah, no. Um, that, that used to be probably the game to guess what I was drinking each Friday, but, um, yeah, this is
[00:02:55]  lunchtime now for me. So, um, I don't want to get started too early. All right. Um, yeah. So, um, I'm going
[00:03:04]  to start this, uh, the same way I start all my streams, um, and just kind of talk about this month in JavaScript. Um, I'm right off the
[00:03:13]  bat. Um, we've had a lot of talk, obviously the streams are obviously a lot of, um, talking about performance, but the, the, the,
[00:03:22]  the, the highlights I've noticed a lot, uh, have, have been performance related. Maybe those are the things I pick out of, out at when I don't
[00:03:29]  have much time. Like when I'm trying to decide what I'm going to look at. Um, yeah, I, I do see a couple of people now coming from
[00:03:36]  Twitch. That's awesome. Um, but, um, yeah, let's just, let's just kind of go there. I, I, I, I, I
[00:03:44] 've caught a couple of things in the last two days, even like other people's streams, like, you know, you saw, uh, Theo's performance related streams
[00:03:51]  where he was testing, um, a really basic kind of like, he was testing the server performance. Like how fast can I get my HTML to the page? Um,
[00:03:59]  and, uh, you know, now that we have things like bun and Dino deploy and, you know, cloud flare, like there's a whole bunch of movement there
[00:04:07] . And, um, we'll talk about that a little bit today. Although admittedly, um, my focus is usually on the, uh, framework side, like
[00:04:14]  on the, um, both on the, the base, the part he didn't cover, like on, on the, on the, uh, essentially like how long it
[00:04:22]  takes to render stuff on the server from the framework perspective, that little gap and, and also like hydration costs, client side boot up, all, all those kind of things
[00:04:32] . So, um, you know, it's the other side of the spectrum. And, uh, yesterday I watched a great stream also with, um, Mishko
[00:04:38]  and the whole builder crew talking about the future of routing, which is, as you all know, it's a really big topic from my perspective. I think routing is
[00:04:45]  sort of the missing piece we need for bridging the cap, um, you know, solving the MPA versus SPA debate that's been going on. So, um
[00:04:53] , yeah, lots of good discussions and about performance, um, which is, as I said, right in my wheelhouse. So, um, really cool stuff. Yeah
[00:05:02] . The stream's back. Yeah. Yeah. Oh, bear with me. I'm, I I've, uh, I've been, uh, you know,
[00:05:09]  uh, trying to catch up the last couple of days. I also got back into Netlify and doing all that stuff. Uh, um, I, I basically did
[00:05:18]  my onboarding HR kind of training video type stuff. And then I was like off again. So, um, it's been, it's been busy, but yeah.
[00:05:27]  Yeah. Yeah. I, we knew it was coming. Right. It just, uh, um, like I was really excited a month ago when, when I saw
[00:05:35]  that thing where Cloudflare announced that they were opening sources or not, what was it opening source, but they're like releasing their runtime too. Like it's another viable
[00:05:43]  option that's probably goes that is going to go beyond just their infrastructure. So we're talking fun, we're talking Dino, we're talking Cloudflare,
[00:05:52]  talking node. We're talking like there's, there's an interesting mix and match of both infrastructure and these JavaScript front times. What's good is they are actually somewhat consolid
[00:06:01] ating on what those core pieces are that we need. Like the whole, uh, browser-based request response model and things like that. So we're going to look at
[00:06:09]  Dino today, obviously because we're going to be looking at fresh. Um, but, but yeah, I, I, I think there's a lot of really
[00:06:16]  cool stuff going on. Um, let's, let me just, uh, kind of share my screen here and I'm just gonna start at the beginning. Cause you know
[00:06:23] , it's easy for me to go timeline. I left town on June 9th and I went back to around June 8th. So right before I left. And the
[00:06:31]  very first story that I found was a performance based story, even back then, not that this is everyone's cup of tea per se, but, um, as you
[00:06:38]  guys know, um, worked with Marco dev team and, um, the newest member of the Marco dev team came over from Kroger and he, he, he'd
[00:06:46]  been working, he's written a great article series. If you guys haven't checked it out and he, he was, he was working on, um, basically upgrading K
[00:06:55] roger's, um, uh, website. So he made a prototype and he's like, okay, look, we want performance. We want load time. We sell
[00:07:02]  stuff, you know, this, these things matter. So he ended up on this path where he realized that an MPA was actually the way he wanted to go.
[00:07:08]  It made a lot of sense. Um, and he just, honestly, if we don't have to watch the whole video, but just, just, just check this out
[00:07:18]  for a second. Let's go back to the beginning here. Just so you understand, have a little context here. The demo is what he made. This is Kro
[00:07:27] ger's current website. This is Kroger's current native site. Here's amazon.com and here's walmart.com. And, and the, and
[00:07:35]  the, the, the whole thing is the demo is built with Marco using an MPA Kroger.com and walmart.com are using react. Um, amazon
[00:07:43] .com is using their custom almost vanilla JS setup and the native app, but I believe is probably, I don't know what it's using exactly, but, um,
[00:07:52]  it's built using native and he wanted to show load up time because I think some people kind of native, native knows that they have you. So they sometimes don't
[00:08:01]  focus on how long the loading came in. So he basically launched everything at the exact same time on a mobile device with low, slow internet. And you know, I like
[00:08:09]  doing lighthouse scores and stuff like this, but this is, this example is so illustrative. Like just watch how this comes in. First of all, the, obviously the
[00:08:17]  Marco MPA islands architecture thing comes around and then Amazon Walmart comes in, but it's still sitting there loading, right? You're kind of like, okay, Walmart
[00:08:27]  Kroger is one then finally comes in and he, he actually doesn't just do a single page load. He actually does a checkout process where you have to do it
[00:08:35] . See, he already bought the item in the Kroger by this point. Um, and I mean, you almost have to pause along and to actually see all the
[00:08:44]  things, but he, he, you find the results. Like these aren't all exactly equivalent, but he's actually showing like, uh, how the, the actual
[00:08:53]  user flow is. And this is, this is with, you know, so you can't, you know, some people are like, well, if you have an M
[00:08:58] PA, you're going to reload a bunch of stuff and you do the page navigation. This is taking that, those hits completely into consideration. And just, just watching this
[00:09:06] , it was, is, is really interesting because you can, you can definitely see the spinner get in of the spas, so to speak. And obviously his demo
[00:09:12]  is already done because he was using streaming and stuff, but yeah, Amazon's pretty good in terms of a huge company. Amazon is pretty good. They're there. They
[00:09:20]  finished it about a minute doing this workflow. Um, and interesting, I think native finishes, finishes up pretty quickly here, but, but essentially, I mean, as I
[00:09:29]  said, these aren't quite equivalent examples, but I mean, you watch this for, for a couple of minutes and I, I mean, we can go on,
[00:09:40]  but I think it takes almost a whole nother minute for the react apps to finish. It's just trying to show that maybe sometimes it's, it's like one size
[00:09:48]  fits all isn't where it needs to be today. I'm a big proponent of the potential of us consolidating on single solutions here, but like, it's just
[00:09:59] , it's just showing, you know, and obviously with the hindsight of knowledge, like the Kroger rewrite, he knew what he was writing better than the company
[00:10:06]  did as new requirements came and things got going, but like, I'm just still talking here and, and you know, like we, we don't have to watch at
[00:10:18]  all. I mean, I'm running out of things to say while we wait for the stuff to finish. So, um, you know, we'll, we'll
[00:10:25]  just move on. Do you think the focus on e-commerce for JS promises because unique requirements need to be booked? Um, I, I think, I think it's
[00:10:37]  because it's one of the few places where page load actually really, really matters. Um, other places, obviously it's good, but it might not translate to your
[00:10:48]  bottom line as much. And, um, e-commerce sites, especially really like religious about testing this stuff. Like at eBay, we had, uh, we had teams
[00:10:59]  like speed teams working on this stuff and they made sure nothing ever regressed. It was really hard because you couldn't, it's hard to add features and have the
[00:11:07]  page not slow down. So it, it, it, it put a lot of friction on velocity and they've been trying to figure out how to, you know, make
[00:11:15]  stuff work. But the problem is like all the way back to like the Java days, um, there was like when they had full Java backend, they they've had these
[00:11:23]  times and they're like, okay, we can't slip. So that's where Marco came from. Cause it was like, nope, can't do that. Need to
[00:11:29]  do this. And the, but the thing is, what's challenging is if you have new pages that don't actually have those stipulations, you might let those slip
[00:11:36]  and then it, then that's the new baseline. So I don't know if the approach actually holds up completely over time, but I mean, this is why builders make
[00:11:44]  such a big deal about it. And, uh, you know, eBay and Amazon, like Amazon's one minute here for this flow is actually very good. Amazon is one
[00:11:54]  of the best performing e-commerce sites, um, for, on the large scale. Um, you notice he didn't put eBay in here. Um, and I
[00:12:04]  mean, even, you know, like we, we know, um, that, you know, eBay is not faster than Amazon in this comp in this comparison. I think
[00:12:15]  he would want to focus on using Marco, um, in, you know, in a, in a different environment, but I mean, it's hard. Um, so
[00:12:22]  I'm very impressed with Amazon, even if that's a minute, because as you, as you can see here, um, he, uh, I think Walmart finished
[00:12:30]  at two minutes and 14 seconds and he, he, he didn't even get to the end of Kroger before he cut the video. Um, I love eggs
[00:12:42]  from eBay. Yeah. Yeah. Right. So, but I, I, I just like, it takes, it takes at a certain scale, it takes effort beyond just
[00:12:54]  the developer effort to maintain and keep that going over for years and years and years. And I think that's why it's always conscious. And that's why it's an
[00:13:01]  easy target to talk to, um, coming in because like, you know, you want those page speech, you know, you want the SEO benefit. You want to
[00:13:10]  be able to show up, uh, Google starts ranking your pages based on performance and stuff like that. So it's an easy topic. The problem is my hacker news and
[00:13:17]  hello world programs are not going to show the complete picture. Um, I I'm a framework author. So for me, when I'm looking at those examples, I'm
[00:13:26]  looking at mechanics. I'm so I'm, I'm going to focus on like taking something and pushing it to like the, you know, cranking it to 11
[00:13:33]  or whatever, just so that I can see where the bottlenecks potentially could be. But the truth of the matter is that's still a, uh, you know, death
[00:13:41]  by a thousand cuts kind of approach. Um, obviously the best example would be like a holistic real world example, but every real world example is different. And the more real
[00:13:50]  world you make it, the harder it is to port it across things. So I focus on the micro and hope that enough things add up. And in my experience at a
[00:13:58]  certain point, they probably don't, I think that's the whole thinking behind Facebook. Look at this as a more tricky engineering problem, you know, but on the
[00:14:07]  small scale, what I found with my work with solid is if I just make solid faster at like every little thing, it's generally pretty good for everyone. Like it's
[00:14:16]  a good baseline, right? I just, I just go, okay, fastest of this, fastest of this, fastest of this, fastest of this. And then like,
[00:14:23]  it kind of averages out pretty good, but, um, realize that it's not a foolproof thing. This is just the best we can do with what we have
[00:14:30] . So, and yes, probably using the money inside. Yeah. Yeah, exactly. Like it affects your bottom line. There's I've, I've seen numbers studies
[00:14:41] , some things internal, I can't share, you know, there is a, as far as we can tell, there is a direct correlation. Um, but it doesn
[00:14:50] 't, that's just an easy one for people to see. Like, I thought it was really interesting that I was on a space with Dan Abramoff a while
[00:14:57]  back. And he was talking about an example where they, it was hard to use the metrics to figure out where the bottleneck was or what the issue was, because for
[00:15:05] , for something like Facebook, it's not buys, but like engagement. And he was talking about how, as far as I could tell, the new solution was more performance
[00:15:14] . So they'd think they'd have better engagement, but it was getting lower numbers and it, it was actually some really tricky, intermittent behind the scenes bug. And
[00:15:24]  if they just trust only the performance numbers, they might've not found it. Like it was, it was a really interesting space. Unfortunately, it wasn't recorded. It
[00:15:30]  was very impromptu, but, um, this is hardly a science is what I just want to get out there. Right. Um, so anyway, let me
[00:15:39]  move on a bit. Um, you know, also at the same time, um, if you miss this, this was actually kind of cute. Um, Matt Phillips
[00:15:48] , uh, one of the core maintainers of Astro had, had mentioned that, um, the whole progressive part of the partial hydration happened by accident with, with Ast
[00:15:58] ro. It wasn't like their initial, uh, idea. Like they, they were working on the partial islands thing. And then, and basically he was partway
[00:16:10]  through implementing it. And Fred was like, I kind of like how this stuff hadn't loaded. So then they, they just kept that in and then made it, turned
[00:16:19]  it into a switch. I mean, it's, it's, it's a funny little anecdotal story, but, um, this pattern that they came up with,
[00:16:25]  with the directive based or, um, loaders is now getting copied all over the place. Um, so, um, I think, I think that's really an interesting
[00:16:34]  little story, right? Um, you know, the different pieces come together. Island architecture obviously existed before Astro for several years, but, but this whole progressive islands
[00:16:42]  thing, I think is something we, uh, we can credit them for. And it would, it happened by accident. I love stories like that. Um, right.
[00:16:52]  Yeah. I'm trying to remember what, yeah, more talking and, and this is kind of all on the same thing, right? Ryan Florence kind of went on a
[00:17:00]  little spiel, uh, around the same time, because he was like, I think people are really bugging him about partial hydration and it's funny. The stream
[00:17:07]  today is going to be about partial hydration and with fresh, but they're bugging about it with remix. And he's like, we'll see if you actually need it
[00:17:13]  and what you're optimizing for. Right. And I mean, there might've been a tone of like, you're generally not going to need it. And he's right
[00:17:19] . Maybe for a lot of things, your blog said you don't need it, but I mean, we can go back here. This is, this is a clear place
[00:17:24]  where, where there's benefits. So, you know, I think it's important to build to your use case. Um, okay. So skip, skip forward about
[00:17:35]  a month, because I'm trying to do this quickly so we can get to the good stuff and the fresh. Right. Um, um, so really cool thing was I
[00:17:42]  got to speak at JS nation. Um, and I did a talk on, um, Sol's reactivity that I really knew it. I've been, I've been
[00:17:50]  kind of planning this talk forever. Um, I was going to do, originally do it as a stream. And then once I was kind of testing ideas on someone else's
[00:17:57]  stream. Um, the guys from the core team from solid liked it so much that they made, uh, Dan, uh, Jutan went and made the, made the
[00:18:04]  intro video for solid based on that. I finally gave that talk, um, at JS nation. Um, but also, uh, solid one breakthrough the year on the open
[00:18:14]  source, uh, award. So that was really quite cool. Um, um, but it also kind of shifts into something that I saw really common theme. Um, and
[00:18:26]  it lends to rich Harris's talk at the open source awards. Um, and just a lot of what's been going on, the focus in the community right now
[00:18:34] , as much as we're talking about performance right now, and we're going to go in this wave documentation is just such a big push right now. Um, and I
[00:18:45] , I, if you didn't get to check it out, I mean, there's a sea chanty at the beginning, which people are kind of like 50, 50
[00:18:50]  on, um, do check out rich Harris's talk. I don't know if it's available yet. We should look, I know that the YouTube streams for JS
[00:18:57]  nation are out there. Um, so you, you know, but I don't think it's, I don't know if it's posted anywhere. Um, but it
[00:19:04] 's definitely really cool. And he talks about the importance of that. And we're going to actually talk a bit about our efforts on the community meeting that we were having,
[00:19:14]  um, next, next week. Uh, I'm trying to see if I have that listed somewhere here, but yeah, we'll get there. Yes. Um,
[00:19:22]  but yeah, no, I just wanted to talk about that. No, this is not what I want to talk about. It's just, it's, it's interesting
[00:19:28] . Um, if you guys follow Dan Abram off too, he has been going like a beast on documentation for re for react. And I don't know, even if
[00:19:37]  you're not a react fan and you're into this stuff, a lot of you guys follow Dan already, but seriously, um, really interesting stuff. I just,
[00:19:45]  I've just been, I just started bookmarking his stuff because I was like, I need to come back and think about this stuff. And it's, and I
[00:19:52]  have so many of them. I had the clear of a couple of them out here so I could like show it. Like he, he, they've been putting so much
[00:19:59]  thought into this stuff. Right. Um, I have so many topics because of, of what's been going on, but I just wanted to highlight just how cool the documentation
[00:20:08]  effort has been, um, going on there. There's some other cool talks, um, at the DIs nation as well. Um, uh, Yehuda
[00:20:16]  Katz, uh, from Ember introduced this like universal rendering thing that keeps on switching on me. And, uh, I thought it was interesting because it actually is a
[00:20:26]  lot of similarities to the system we have in solid. I think it's interesting because there's this desire perhaps for us to have like a universal rendering solution. Um, and
[00:20:42]  not, not used to render reactivity solution because reactivity is something that's portable. Like every you've seen people go, Oh, I can take this reactive system
[00:20:51]  and then I can like change my render and move it across. This is a place where we have a natural divide where we can go, we can switch our frameworks if we
[00:20:57]  want to, so to speak. And we can put our logic, but in a sense, the reactivity becomes the framework at that point. And that's sort of the
[00:21:05]  realization that led to a lot of stuff in solid. Cause I was like, that's like, there's no way to be completely, what's the term? Like
[00:21:14] , like, like not decoupled, but like completely free of any kind of walk-in. Um, and it's interesting because, you know, every time there
[00:21:24] 's a potential to see that similarities, um, there's this desire to, um, to kind of go, okay, well maybe we can all join in and do
[00:21:32]  the same thing. Right. But I mean, I was talking about Dan and docs, right. I'm going to jump, jump, jump to another Dan quote. Um
[00:21:41] , we really like consistency. Um, I, I've posted this like a year and a half ago and essentially I took this react code rewrote it in four
[00:21:53] , four frameworks and they all console logged here a different thing. So as much as I would love that reactivity to be all the same, there there's clearly differences.
[00:22:06]  And this isn't just a pure rendering thing. This comes down to the mechanics of how reactivity works, how it updates, like how, how like expectations on batch
[00:22:17] ing timing. Yeah. So we've got some comments in here. Yeah. I mean, I hope everyone appreciates react. React is great. React changed my mindset completely
[00:22:36] , which is kind of funny because you know, people expect me to be like, especially with solids positioning and stuff, everyone's like, oh, you're the,
[00:22:44]  like the anti-react or all that. It's like, no, no react react, um, completely affected my, my, my, my thinking in terms of
[00:22:52] , uh, values in terms of reactive leverage. I mean, if it wasn't for react solid might not exist. And I don't mean that from a technology standpoint,
[00:23:01]  cause we do completely different things, but it's more that I might've just been like, yeah, view is fine or spelt is fine. Like reacts. The
[00:23:09]  reason why, um, like I thought that there was a, there was an area, a zone that is not like view, not like spelt, but has that technology
[00:23:21] . Um, and that those kinds of technology, and, and actually because of this crazy, unexpected marriage, we can, can do stuff that the others can't.
[00:23:32]  So it's like, it's like, and, and, and like, as I said, solid today is just the beginning, right? We're, I don't
[00:23:39]  want to get too wax poetic about, you know, whatever, but you know, I watched the quick stream yesterday and I was like, okay, this little quick, heavy
[00:23:46] , I'm not going to be too solid heavier, but the potential, the stuff quick is doing is only accelerated by the potential of the stuff that, that we're doing
[00:23:54]  with salt in terms of the fine-graining, the reactivity. This zone is still very much, um, only at the beginning of being tapped. Um
[00:24:05] , I wish I had mods. Uh, what can I do? Put user in timeout. Done. Thanks. Well, yeah, I mean, there's a question
[00:24:24]  there, right? But do you know what I have to say about this? I see this, this is a funny thing because I, I felt like this throughout my
[00:24:32]  career. Um, because I worked, some of you guys know, I've worked at .NET, right? Um, through the 2000s. I did, I did
[00:24:40] , I was, worked in Microsoft shops. That's how I got into Knockout, you know, kind of makes sense. Um, and the amount of documentation, MD
[00:24:49] N, the, the, the quality there, the complexity there of, of like, AST, um, ASP.NET and the whole thing in my mind
[00:24:57] , I call it the dark ages these days, but in my mind, things have gone so convoluted, so complicated that it required like a book of docs and it
[00:25:07]  was too much. And that's why when I found Knockout, I was just like, let's just toss away this whole thing. Let's start over. And sometimes
[00:25:14]  I have concerns that we're getting there again today with SSR solutions. And I, I, I think the fueling on documentation is that I think when React is
[00:25:23]  just a simple library, you know, and Sol's kind of got that simple kind of, you know, primitive kind of thing you document, but then people can explore their
[00:25:31]  own patterns and they kind of go, once you throw SSR in, in it's, it's like never, uh, simple, at least with the current mental model
[00:25:39]  and stuff that we're trying to achieve and the build and the config and everything gets really, really complicated. And then suddenly now you, you're, you're writing
[00:25:47]  textbooks. And I, when I first saw Next.js, that was my impression. I was like, okay, this is the beginning of the end, right? I
[00:25:54]  mean, it's just where I sit. It's funny. I know people love Next.js, but like I was very resistant to going back there again. Um,
[00:26:01]  it's funny cause I'm there, I'm there now, but, um, it's no surprise to me, Svelte to SvelteKit, suddenly the
[00:26:09]  documentation, the thing that the truth matters if the tooling can keep up, maybe we can keep this running a bit longer, right? You know, things like the stack
[00:26:18]  blitz, um, you know, web container thing, development environments, tutorials, we can complete that story. Maybe we can seal cover the gap, but it is always
[00:26:27]  concerned me when that level of complexity gets to that level, because I feel like it's like the breaking point and start over again. And the thing is, but we haven
[00:26:35] 't really been able to break out of it completely. I don't, I don't, I don't like we tried to simplify in different ways. Like Svel
[00:26:43] te, Svelte kind of goes, okay, let's simplify the interface. You're just like using some JavaScript variables, but like, we all know that isn't
[00:26:50]  actually simple. It's actually incredibly complicated. Right. But it gives that perception, but you know, at a certain point, you're going to poke holes in and then
[00:26:57]  you're going to like discover the lies, so to speak, not that like actual lie, but you know what I mean? Like we try these ways to circle around
[00:27:04]  with abstraction essentially to, to alleviate this. And this is an interesting one because the effects make perfect sense from the way react works, but, and it keeps the model and
[00:27:16]  it's clean, but it is, it is, there's like a mental impedance here. People just, you know, and it's really hard to explain this from a
[00:27:26]  react perspective. And when you're writing docs, when you're working on a engineering solution like this, so it's kind of on the R and D side, you
[00:27:34] , you always hope that at a certain point you get that moment of clarity, like that essentially, like maybe it's not chiseled out yet, but it happens enough
[00:27:43]  times that you can be like, okay, we got there. Like I started, I kind of had an idea and then things just, I was on the right path and
[00:27:51]  things suddenly just started falling in my lap and suddenly I'm there. And I, you know, it happened to me with solitism point, like things all suddenly wind
[00:27:57]  up. I'm like, hope that decision there made sense. That made sense. That one's a little off. Let's tweak it. And then everything just comes
[00:28:01]  together and you're like, this is greater than the sum of the pieces. And I feel like the hope is that this complete story is just going to come together really nicely
[00:28:12] . Like use event, you know, suddenly alleviating that pressure on use effect. And you know what I mean? Like it kind of ties it together in a way that
[00:28:20]  it makes it clear. Maybe you figure out the perfect way to explain it in the docs. I'm, I think that's the hope, but we don't always
[00:28:28]  know. And I think that's the hardest part to be in because we, we, it's more than any one of us can figure out the amount of R and D
[00:28:37]  in UI. We're crowdsourcing it a little bit. Obviously we can dog food through large companies when we have that ability, but we don't know everything. There
[00:28:48] 's more too many use cases in the web. So this is like a long running experiment on the front end side from my perspective. So it's, it's a tricky
[00:28:56]  problem. Um, so yeah, you can kind of understand why this has been so hard to document, but it's hard to standardize. That's what this thing's
[00:29:08]  on my screen for, right? I'm actually writing an article right now about, about this. It's been like a month since I wrote an article. I think
[00:29:13]  the last one I did was about like different rendering patterns on the web. I'm talking about the cost of consistency here. This is not an easy thing to reconcile on.
[00:29:23]  Um, and maybe there is a right solution, but I think these are very long tails. I don't have the tweet on my fingertips, but at one point,
[00:29:33]  uh, Swix, uh, Sean Wang or whatever kind of made a comment, like he listened to one of my podcasts, he made a comment. He was like,
[00:29:41]  it's really unfortunate that, you know, new frameworks like solid come out and then they can't leverage what react has done. So we have to start over again and rewrite
[00:29:49]  all the components and, and, and, and, and do all that. And, you know, basically going like, they basically don't stand a chance. And
[00:29:58]  it's funny. I mean, I missed the initial thing there and Dan Abramoff replied himself and he was like, no, no, no, no, no.
[00:30:06]  Like, don't look at it like that. Like sometimes you don't want to take on those things, you know, like every so many years there's a rewrite
[00:30:15]  and there's a things swing the other way. You know, it's, it's good that we, some sides you want to increment and you want to build on and
[00:30:24]  you want to improve, but sometimes it's, it's good to just start from the ground up and take that new knowledge and find a new place. And it was funny
[00:30:31]  because it wasn't, I didn't view it as an, I thought it was kind of more of a tacky and solid than, than react. But Dan was
[00:30:35]  there right away to kind of clarify that. And I, I hold that too. Like react and solid, for example, we're doing very, very different things and it
[00:30:41] 's, it's, it's a good thing. And it's good that they're incompatible to a certain degree. Um, I have a weird perspective on that
[00:30:47]  and you guys can debate or argue with me about that, but it's, it's, it's kind of, that's, it's okay to kind of back multiple
[00:30:57]  horses, try different things. And we're in this very long running experiment from where I'm concerned. Okay. What do we got here to be fair? Okay.
[00:31:05]  Yeah, good. Okay. Yeah. This is a, you guys come in with the hard hitters. These are, these are good questions, right? Like, I
[00:31:21] , I kind of lament a bit. I think I was, where was I? I was, I was off, I was, which, which, which, which
[00:31:32]  one was it? Was it here? Let me come back into my stream. Cause I was lamenting about benchmarking and stuff. Uh, uh, where was it?
[00:31:41]  I'm not going to find it right now. That's my luck. Yeah. Nevermind. Forget, forget about my screen here. I, but essentially Lighthouse,
[00:31:51]  they're working on metrics, but I think a lot of the push right now, um, on the SSR side is because e-commerce is big money is because
[00:31:59] , is because people want to get into things like hydrogen. It's like, okay. React and Shopify e-commerce people want to move to these patterns. They want the
[00:32:08]  performance. And I think that our metrics right now are improving, but they're still kind of somewhat basic. And it means that like kind of cheating the JavaScript by lazy loading
[00:32:21]  it and like tricks like that things to get those numbers really positively impact. I don't know if they actually positively impact the user as much. We're gonna have to
[00:32:31]  use real metrics. Like I was talking about earlier, but I do think it's part of it. And then when you have everyone building those apps, you need the documentation
[00:32:38]  and it's just like this long chain, but maybe it's just, this is what we've always wanted. We wanted the unified model of the web, you know
[00:32:44] , you know, we want, we, we, we, we want to have our caking unit too, you know, it's our, you know, our bigger
[00:32:51]  caking unit too. It's like the trade-offs, right? Obviously. But we, we, we, we want all the trade-offs. Yes,
[00:33:01]  this is, this is a good point. Yeah. Yeah. No, this is, this is good. I was hoping putting on the screen would do it. But you
[00:33:12] 're, you're right. I probably should read it out loud. Um, yes, I will read the question out loud before answering it. Okay. All right.
[00:33:26]  Cool. Cool. Um, yeah. So what, what else has been going on? Um, yeah, we, we, we were here. Um, God, so
[00:33:32]  this is just funny. This isn't really worth it much of anything. I just, I just love the, the, the fact that senior devs sometimes are the absolute
[00:33:43]  worst, even when they try not to be, um, this, this tweet was funny, but it's, it's, it's kind of off topic. Um
[00:33:51] , yeah. And there, I posted the talk. Okay. Let's, let's, let's move on here. Bun. Yes. Fun. I've been,
[00:33:58]  I've been following bun for a while now. Um, and I, Jared has been doing incredible things on the performance side and, um, people in our community started reaching
[00:34:10]  out to do compilation with bun and that, that, that, that, that, that's what got my thing. I was like, oh, wow. You know
[00:34:16] , I watched ES build kind of come up, but he has build didn't give us custom AST. We can do much there. And SWC, it's like
[00:34:22]  on the list of like, we're going to move this all compiler to the SWC, but it's like, okay, well, why SWC if we can do
[00:34:30] , do bun. And then Jared went and he made a basic version of a dom expressions. So the solids compiler in bun. So you, you can actually do some really
[00:34:37]  basic stuff, maybe not much more than a counter app, but you can use solid and bun. He actually made the compiler, which he did on his own. He
[00:34:43]  just was like, yeah, I'm going to do that for an afternoon, which is insane. I'm going to work with him a bit more and kind of standardize
[00:34:49]  the output on it a bit so we can get there. I think that's an effort that we should definitely invest in. But in general, bun is just like kicking
[00:34:57]  up a storm right now because like, let's see if I can find it here. He finally released it. It's been over a year and I was pretty excited the
[00:35:09]  other day. I was like, oh, solid got 20,000 stars on GitHub. Yay. Right. Congratulations. Right. I'm pretty sure 20, the bun's
[00:35:16]  going to have 20,000 stars on GitHub within like two days. Like if you've ever seen the amount of interest here is unprecedented. So it's like, it
[00:35:27] 's like the, their star graph is like a brick wall. It's like, okay, a couple hundred, maybe a thousand. Okay. We'll get to about 2000
[00:35:34]  stars. And then it's like 20,000, you know? So why is everyone talking about bun? I have a couple of theories about this. First of all,
[00:35:43]  Jared's been doing amazing work, doing amazing demo for, for years and people have just been waiting for that 1.0. Everyone knows, you know, they've
[00:35:49]  been hovering. They're like, okay, when's it coming? When is it coming? Right. But the other interesting thing is, isn't it, wouldn't it
[00:35:55]  be great to basically use a lot of stuff that you've always used, um, you know, you continue to use next and then just have it faster. Like button attacks
[00:36:04]  things at such a low level that it feels like you as the developer don't need to worry about it. It just suddenly it's just faster and people are, are losing
[00:36:14]  it over. it because I mean, he, he, he knows his stuff. He's super low level. Um, you know, you know, and he just
[00:36:22] , he keeps on pushing the boundaries. You know, as I said, I feel certain kinship there because like he, he goes, okay, well, what,
[00:36:29]  what, what, what's slow? Like he acknowledges when stuff, he has a slower than a note, but he's like, great. This is lower note.
[00:36:34]  Then let's, let's fix that. And this is every little piece, you know, making it more optimal and on to the point that hopefully that the whole thing
[00:36:43]  together and button might've started as a bundler or something, but he, he, it's a runtime. He he's, he's, he's doing everything.
[00:36:50]  So he, he commented that he, that he does like 90 hours a week and that's what he's been doing. Um, I mean, I guess good on you
[00:37:01]  for doing that. I'm, I'm, I think now that he has users, that's when, you know, like, like the open source, I think
[00:37:06]  that's, that's when, that's when things really change, right? When your buyer. Um, so if you're interested in bond really into it, you know
[00:37:25] , get into it more, go help him. Um, I, I, I know he, he, his issues are going to burst in like momentarily. I think
[00:37:33]  I've looked, I think he had like, you know, maybe like, you know, a few dozen open issues, then like five days ago, it's just like
[00:37:41] , you know, hundreds like there, this, this, this is incredibly fast adoption. This is moving very fast. Um, yeah, this is super exciting. I want
[00:37:52]  to play with it. Um, this wasn't the right week. Cause I've been away till Wednesday. I didn't get to test anything. Um, but yes,
[00:38:01]  I think button is super, super, super exciting. It's part of that framework conversation that we've been having our sort of runtime conversation we've been having. And
[00:38:08]  I've talked to Jared a few times and like, it's, it's hard not to expect even greater things from bond in the future. So yeah, it is a
[00:38:19]  big deal. Um, yeah, I mean, after the bond announcement, it's hard to follow that one, but I got a couple more things before we move
[00:38:34]  on to fresh um tanner man tanner lindsley you know earlier i was talking about how hard it is to standardize on a on a on a on like
[00:38:44]  a single um technology you know it's like the the xkcd comic about standards like you know why can't we just all work together and produce this thing and it
[00:38:56] 's like we have 14 standards and then it's like new 15th standard like we all know that but you know i've had this problem with web components you know being
[00:39:04]  the the creator of more frameworks like it doesn't consolidate actually makes more frameworks and and and whatnot tanner has been working on framework agnostic libraries and he's taken the
[00:39:18]  opposite approach i actually i just i i absolutely love it because some i think it was in here someone was asking him about web components and about like how how we managed to
[00:39:30]  do this um and he he he made some yeah what was the most important thing making this universal web components and tanner's like more like the lack of components i i love
[00:39:41]  this response because i think he does he elaborate yeah no he doesn't okay that's fine i'll elaborate for him right this is this is like the this is like the
[00:39:51]  opposite uh kind of tick right this is the thing people go oh well we need a component that we can use in every in every system but the problem is components have execution behavior
[00:40:06]  uh expectations i i know this solid like whenever people come for the universal solution it never works for solid like never ever ever ever works for solid because people expect things to re
[00:40:17] -render you know and that's something we don't do and you know i that was one of my initial concerns like pointing solid to remix for example but this is cool because
[00:40:27]  he's going okay the fundamentals here are the change model so as long as i can drive your components and i'm fine so basically headless so instead of packing worrying about
[00:40:38]  the packaging and like that interface he's just worries on the change i mean this is sort of like a reactive thinking i he at one point tanner was actually looking at using
[00:40:46]  solid for his underlying reactivity that would work in all the frameworks um and he was getting stuck on something and the only piece he was really missing was um kind of a what
[00:40:57]  do we call the lazy memos it's uh but not like lazy in a view sort of way but more in like a like it marks itself as stale but doesn
[00:41:07] 't do the work until you um request it kind of imperatively and this is a pattern you'll never find in a reactive library because um it already kind of manages things but
[00:41:15]  if you're trying to interface a reactive library with something like react or something that's top down you you want you want to be reactive but you don't want to you
[00:41:24]  want to push the work into their work cycle um as it turned out tanner is in the end i think tanner was like okay i'm just going to keep this even
[00:41:33]  simpler so he he kind of didn't go that way but i i think it's a it's funny to point out that the the best approach to universal components is not components
[00:41:42]  just i just wanted to that that's what stuck out to me someone mentions here that isn't the builder team working on something similar to tasdac with mitosis yeah
[00:41:55]  um yeah mitosis is really cool um if i haven't talked about it before and of course i'm gonna think it's cool because it was based on solid um like the
[00:42:01]  jsx transformer originally it's called jsx light and was based on solid and then slowly over time they kind of added more reacts uh semantics to make it closer but it
[00:42:09]  added more holes because as you know components react don't render once and the syntax suggestions from mitosis would but you know you can't do early returns and stuff but um
[00:42:23]  yeah this is an interesting one right at the beginning i was pretty skeptical right because i i was i was thinking well you saw my the thing about all the different behavior how
[00:42:34]  does mitosis account for that and it can't completely and i think that's okay it probably gets close enough um but the the challenge is all the outputs do are a little
[00:42:48]  bit different the key insight from mitosis to get is that with a reactive system you can drive any other renderer that's the that's the universal thing it's like
[00:42:57]  what tanner is doing here to to a certain degree it's not the component model it's the change model that that could be so i mean from that percent perceptive perspective
[00:43:10]  perhaps you who does desire for universal reactivity is is you know a noble one but but essentially you can like we have something called react solid state there's also mob x
[00:43:23]  you you you have the ability to drive react in a way that looks kind of similar to solid sure components re-render but you can kind of time it and write the logic
[00:43:31]  in a way so you could basically port something that looks like solid and have it work in react kind of shed the re-render mentality of the component even though the components do
[00:43:41]  actually re-render in the background um mitosis kind of leverages that so it can port stuff to svelte and it just uses the fact that reactivity has
[00:43:50]  those three three primitives but i this might be a different approach i'm still more skeptical of this compared to uh tan stacks approach which is just focused purely on the change model
[00:44:04]  because mitosis for the component libraries that don't congruently fit with its model is always going to have a little bit overhead over the native version i'm i can
[00:44:17] 't say that with 100 certainty but that's my hunch especially when you consider things like react which aren't really statically in that analyzable um as as readily i mean
[00:44:28]  it's interesting you don't have to worry about that from the mitosis side because the code you write with mitosis is statically analyzable it's similar to spells
[00:44:37]  or solid or whatever it's reactive but when you think of the ideal patterns on the react side it's harder to do that mapping you know adding refs for things that
[00:44:46]  aren't refs you know taking into consideration the code that we runs over and over again um it is an easier problem than say solving the react compiler problem in the way that
[00:44:58]  people originally thought thought they would i think what react is doing with react forget is completely doable but i know i'm being a bit vague here i i'm just i i
[00:45:08] 'm i'm we'll see my toast is still on the r d side for me i i i'm i'm pretty stoked on the tan stack thing because i know for sure
[00:45:16]  this is going to be viable if that makes sense okay all right yes yeah yeah yeah i i think i think there's a certain level simple components i the thing is mit
[00:45:33] osis isn't going to take a really advanced react library and suddenly make it work in every framework in theory if you could work on the mitosis framework again this is the
[00:45:43]  standards problem again right mitosis is the new framework if you can build it from the towards the mitosis and get fairly consistent across the frameworks you'd probably be okay but it
[00:45:54] 's yeah it's investing in another framework essentially all right yeah but yeah no i tanner's been doing awesome work and i just wanted to call that out because he's been
[00:46:06]  able to figure out how to make it small make it fast i i'm super excited about this um i hope tanner has the ability to do more and more i mean
[00:46:15]  we're seeing a lot of jared tanner like kind of individual maintainers who've accomplished amazing things and our concern as community mostly should be is how sustainable that is um
[00:46:29]  i think it's hard speak from personal experience i think it's hard um i'm very stoked to have netlify's backing um to be able to kind of facilitate
[00:46:39]  what i do um but you know and tanner has his startups and whatnot but you know at a certain point like it's a it's a lot so for at least for
[00:46:50]  now i'm going to keep on celebrating um the successes and i i hope they are everyone's in good mental health and doing all that they need to get done um you know
[00:46:59]  for themselves as well as for the frameworks that they're doing amazing work um yeah i cut up mostly oh yeah i've been playing dnd that's good that's fun
[00:47:13]  but um yeah the routing stream i don't know if i have a ton that say about that let me just finish up the bookmarks here yeah okay last couple thoughts before we
[00:47:22]  move to fresh okay um and this is related to actually what we're just talking about with tanner and jared it's funny how this all kind of lines up the
[00:47:35]  trick is to make your personal projects into jobs um right this is about the system how do we sustain open source right this is this is a big topic i actually talked to t
[00:47:45] anner for like an hour hour and a half just in twitter dms like just back and forth talking about like how we can different models um it's just it's tricky
[00:47:56]  um talk to theo a lot about this too i mean he's he's he's obviously runs a startup ping which does great amazing quality uh guests on you know for video
[00:48:05]  streams and whatnot um and we use that for the dnd stream that that i'm on but like i don't this is not for everyone i think someone mentioned mentioned this but
[00:48:18]  it was like coding for 30 minutes on your day job coding on life your personal project it takes it takes something there right and i i wrote here it seems easy for someone
[00:48:28]  in my position to say so but like i agree i think i think once once i found the opportunity to work on the projects that i was passionate about it just unlocked me like
[00:48:38]  it just like like i got excited about development i got i wanted to do more i became a passion into its own and it's kind of it's kind of crazy because
[00:48:49]  like as i said it might not be everyone's thing but like i just i found more opportunities and it just they it just they just kept on snowballing right it was like
[00:48:57]  because of my work on solid which i did in my own time just something i was you know i was like oh maybe i'll do this in my startup but we didn't
[00:49:06]  end up using it i you know i ended up catching the attention of the guys from ebay and then i started working on marco which i learned incredible stuff from those guys
[00:49:14]  they're they are they are way ahead of the curve on the server rendering side and then you know today i'm at netlify this this all this progression and opportunities and
[00:49:24]  you know you know we're all launched from passion and desire and finding that motivation and for me that was because it's my own stuff i don't know where everyone i found
[00:49:37]  as an engineering manager everyone finds their motivation in in different places and i i don't think this is for everyone um you know some people care a lot about the end customer
[00:49:47]  seeing their joy some people care about solving the hardest problems everyone has their own kind of makeup but but i will say if you find that motivation i mean this is so obvious again
[00:49:57]  what i'm saying you'll be more likely happy with what you're doing right like you you'll find you find more of that satisfaction um and i as i started typing this
[00:50:06]  i was like oh man i i can't put this in a tweet because it's just it's just it's just too much right but like this has been amazing for
[00:50:15]  me but i i don't know i i think there's the whole other side too where if programming and coding isn't like and solving certain types of problems depending on what things
[00:50:28]  are aren't are something that you enjoy but aren't like your passion then like you shouldn't feel pressured by this kind of scenario there's this crazy duality you go from
[00:50:37]  one side where you have people i said like jared working 90 hours a week right um if i didn't have family and kids i might be working 90 hours a week
[00:50:47]  i feel like um i just enjoyed that much but i also enjoy other things so it's it's it's interesting but if you do have the chance maybe give something a
[00:51:03]  try at a trial thing if it makes sense for you i just i'm just saying working on this stuff it's been amazing for me i'm passionate about money oh man
[00:51:14]  yeah i missed that on motivation but money is another one so uh definitely if that if that's what works for you yeah yeah yeah and working getting involved in open source in general
[00:51:26]  is good if you can manage it it just doesn't matter what it is i remember i was talking to some people at ebay who were really bummed about having to
[00:51:34]  use mark od a bit they're worried to hurt the career prospects that basically we're sabotaging their career because they weren't using react and especially i think on the junior side
[00:51:49]  this is this is a real concern and it's hard as i told you about sometimes senior engineers being kind of infuriating like in that other tweet there because they can
[00:52:00]  only speak anecdotally about their experience and how all the knowledge is transferable and whatnot but i still believe it it just i do also know that res react on your resume
[00:52:12]  is worth a lot so um what i told them was i was like well why don't you do some open source if you if you want to commit your manager if you want
[00:52:22]  to do some stuff and you you tired with the market you're doing contribute i mean that's the exact opposite thing they wanted to hear but you don't need to use
[00:52:31]  react to do open source i mean obviously i'm talking about redwoods this is probably like a terrible example because redwood does use react but but i'm just saying like
[00:52:40]  getting involved you know and it doesn't happen in your own time sometimes sometimes you can work this into your your work thing is is is beneficial in general it's a good experience
[00:52:58]  uh yeah uh osss standards been issued for way too long companies hiring osss deaths is a dual edge sword right now yeah yeah it's interesting i i went through this
[00:53:09]  struggle with my when i was deciding what to do with solid um and i mean that that's worth conversation all on its own but it might take us a little while to get
[00:53:19]  through all that but essentially you can you have the scenarios like react where you're like the meta framework or you know angular google and then you have scenarios like the brus
[00:53:29] sell and what netlify are doing where they kind of letting open source be a little bit more open but like then you look at and you find people like evan you
[00:53:37]  from you and you're just like man that guy figured it out like he's somehow weaved through everything and stayed independent and just does his thing so there's always there's
[00:53:46]  always a trade-off right like obviously when you work for a team you have dedicated resources they will pay into it but you kind of maybe lose a bit of that ownership
[00:53:54]  you know the governance model might be a little difference when you're working for a company and they're just hiring lone guns like myself or rich harris or you know jared
[00:54:02]  palmer whoever sebastian if i say his name wrong so i apologize you the problem is you're paying the one person you're not paying the whole team so then you
[00:54:16]  might still have a hard time you still have to rely on the community of open source you know like there's more to svelte than rich harris right rich has a
[00:54:24]  job but they're you know ben mccann um like there's a lot of people involved in those projects right um and it's it's still a tricky it's
[00:54:37]  like that that helps a bit but it's still tricky right so you know tanner was talking about corporate sponsorship almost like a branding thing like you know almost like selling a product
[00:54:51]  um you know just for like good association and i was like i don't know does it feel authentic does it feel you know if like or does it sell does it feel
[00:55:00]  like selling out i i think i think this is this is the there i kind of said there's something sort of punk rock about open source i don't know if that's
[00:55:08]  getting lost in this kind of corporate buying it up landscape um but there's there's a certain group uh you know thinking that won't like think open source needs to stay completely
[00:55:22]  free for example and you know can't accept corporate money and i think this is this is a topic that i can't step in right now it's too big you know
[00:55:30]  oh man do you have any tips to get started with osss yeah sure um it's so funny um uh because it's it's kind of tricky at first right because you
[00:55:49]  i've had people come in they're like oh how can i get started and they they go i want to get started i want to be a contributor so i'm like
[00:55:54]  that's great that's great that's great first why don't you we just why why don't we just build something right like like just sort of build something when you use
[00:56:05]  something start by just using the project and seeing if it works for you and something like just i know that's not always applicable but it really i think with open source it usually
[00:56:15]  starts with finding a bug or you know trying something and and and reading the docs and when i say bug i mean bugging the software bugging the documents someplace that it
[00:56:27]  like like the experience wasn't as smooth as you'd want and then start small from there um you know people make kind of laugh about all those type of things i mean if
[00:56:36]  people try and correct things that aren't wrong then yeah i mean it's kind of annoying but most of the time when i have typos if you do it in a
[00:56:45]  tasteful way i think i think that's a like that's that's great you know some maybe some people get annoyed but i don't i think i think i think you
[00:56:53]  if you if you find a project you like and start getting involved in the community find any frictions you have to using it and kind of building on that that's a great
[00:57:00]  way to get started in open source um who's this theo guy oh man i talked about thio enough in the stream already oh he's showing up too really like the
[00:57:19]  media yeah okay i mean yeah sure i'll give you i'll throw the i'll throw this out here um if you aren't familiar with create t3 app as as you
[00:57:31]  all feels pretty vocal um has opinions has log experiencing next and kind of the technologies around that so he he's he's been talking for a long time he's like he
[00:57:42]  kept on seeing people get stuck and he's kind of come up with his his opinion of like the right pieces that go together in a modular way i if you watch mainstream you
[00:57:52]  know what i'm talking about so to my understanding i might not be complete correct here the community around his you know his streams and and you know discord decided like okay let's
[00:58:02]  just actually make this into a project and they just kind of took it on themselves like theo's busy building ping building his company and then they're just like let's make
[00:58:12]  the stack and they basically built a meta framework like this has been growing and growing and growing i think that it has over two over two thousand stars on github now
[00:58:20]  it's just been thing uh growing huge you know a very organic um place like not like like like a plan thing more just like patterns that make sense you know the the pragmatic
[00:58:35]  react framework 3k now yeah there we go like like like and yeah i i think i think i think i think it's i think it's really it's really cool
[00:58:46]  because like i mean i'm coming from the opposite side of the spectrum with solid i build it myself you know you build it they will come you know like okay well they're
[00:58:58]  slowly coming in gonna build more some more people come and you know kind of get there and then i find myself building a meta framework this is like the opposite side where like
[00:59:06]  it's like coming from a place of like like finding all those pieces already that already exist and then is this kind of like the community just built the meta framework i i think
[00:59:19]  i think it's i think it's really awesome to see this you know it's almost i think the tooling and stuff around it's getting so much easier i mean next as
[00:59:28]  a basis obviously makes a huge amount of sense but i even on the beat side we kind of see this a little bit where you you can essentially if you like want to
[00:59:35]  kind of make things in the image that you like you can go and do that and you don't need to rely on somebody from some company to build it for you oh man
[00:59:54]  yeah i think anthony's in here too i'm not going to have you guys go ahead and chat though but it's it's it's kind of it's kind
[01:00:02]  of funny because it's an opinionated react stack versus another opinionated react stack so the comparisons can be made right but you know i i i think i think it's interesting
[01:00:14]  i like the dedication to typescript um in create uh create t3 app i i haven't tried it i haven't tried redwood i haven't looked at redwood practically
[01:00:26]  at all so maybe that should go on my list of things but i i think it's definitely um i think it's definitely interesting um to kind of see that like this
[01:00:34]  is the power of open source and yeah this is this is why we do what we do this is why it exists it's just like as i said sustaining it is like this
[01:00:43]  other side of the puzzle so this is this is a i think i think things are getting better so we'll just see where this all lands i said when i've talked
[01:00:52]  to maintainers and stuff i feel like we're getting closer to being able to do stuff you know that we wanted to it's just it's when there's still a
[01:01:02]  gap and at a certain level maybe not a level that i've gotten to myself like when you get into like where tanner is and stuff it's like tanner should be
[01:01:11]  able to to you know make really good money off his efforts you know especially with the framework work agnostic stuff and it's just a matter of figuring out the best models
[01:01:23]  for that right like yeah i don't even i told you this is too big of a topic i don't want to get into it they like talk about vc money
[01:01:29]  and all that stuff okay okay we're we're we're we're like at an hour so i'm gonna i want to curb this part really quick here but i got like
[01:01:39]  just a couple more that just came up in the last couple days let's talk talk a little quick miss miss misko hevery actually put this out there talking about the web
[01:01:49]  and he decided that jen put the gens and this is very similar to actually what igor minor had in his article um i'm not surprised these guys are basically on
[01:01:59]  the same page given they worked together for like a decade on angular but um i i think i only had one comment here because obviously he's positioning quick as the future of the
[01:02:16]  web and i'm not going to disagree on that point i just think the the alignments are a little interesting because someone asked him well what's the difference between gen one
[01:02:23]  and gen two right like what where do you draw that line and yeah where gen 2 just a question dx and come gentry your whole app has rendered the components to me it
[01:02:36]  was the transition for to the component architecture and my only comment on this whole thing is i actually think gen 2 to gen 3 isn't resumable that's that's that
[01:02:48] 's a symptom that's like a side effect i think the the the the move from gen 2 to gen 3 is that is recognizing that components aren't the runtime model essentially
[01:02:58]  we we went for static then we added bits of javascript then we made components i think the unlock between gen 2 and gen 3 is that components can still exist but components
[01:03:08]  are not a runtime construct like as they are in react or svelte or view today um essentially the reason that resumable as possible is possible is because the components
[01:03:22]  can be breaking down into smaller pieces in the case of quick it's like they separate the event handlers from the view code from the component logic in the case of marco
[01:03:31]  it's along the reactive graph kind of similar to solid but compile i don't think it necessarily has to be compiled but the the thing that unlocks gen 3 and makes
[01:03:41]  resumable possibility is is basically the return to finer grain things like jquery mood tools were kind of finer grained it's that return while keeping the component dx that
[01:03:54] 's my opinion resumable is just a side effect just wanted to make that note okay and what else do we got here on a similar note i'm pretty strongly in
[01:04:04]  the compulsion never do data loading camp turns out mvc was right i think i think we're talking about the same sort of thing here as what i was just talking
[01:04:13]  about from a performance angle this is true you know that you need to hoist out your data loading if you do cascade you get waterfalls but all the work we see going
[01:04:23]  on is so that we can build this closer to the components and then have it hoist automatically whether it's relay whether it's uh remix loaders get server side props
[01:04:34]  you know stuff we're doing solid start you know and it's a bit kind of like we're first you know island's architecture we're trying to get the dx and partial
[01:04:44]  hydration we're trying to get the dx of these component frameworks but then have them be partial so um yeah i just i just want to throw it out there i it's
[01:04:56]  the spiral thing right you know people talking about we're not swinging all the way back it's it's gen 2 was like a dx explosion now we're trying to figure out
[01:05:06]  how to keep what we like about that while addressing the performance aspects that's it you know this is this this is this is all about performance um why did i bookmark this
[01:05:17]  um yeah we can leave this for another day it's just a funny example where in react you had to write like a like half a page of code and solid it's
[01:05:26]  a one-liner but i mean people who use solid should be pretty used to that by now so let's let's move on okay cool well some of you are still here
[01:05:34]  it's been it's been an hour um i think we should move on yeah some comments about dedication typescript yeah typescript is awesome i've been doing a lot of work
[01:05:48]  um improved types type typescript is also like the thing that i wrestle with the most but yeah i i could i could do that theo you could also have me on your
[01:05:59]  stream it can we can we can work both ways and theo actually ran away for a call for 10 to 15 minutes which is fine um no one believes me yeah let's
[01:06:14]  freshen things up i agree let's start let's let's let's let's freshen things up um let's let's get i'm just a little bit behind the
[01:06:31]  scenes let's let's get started with fresh right i need to put this banner up let's let's close down the the good old twitter and let's look at fresh
[01:06:40]  love this landing page has a cute little animation here has a guy drinking his drink and mostly they're dogfooding their own stuff fresh.dino.dev you know
[01:06:56]  that this is is done in their own site and and this counter i'm sure this page actually you know like let's check i'm pretty sure this page uses fresh itself and
[01:07:11]  then yeah we got some we're gonna look at this more in a minute but we got some serialized data props start is probably for the three let me let me blow
[01:07:18]  that up a little bit yeah it looks it looks like we got the serialized data for just this island prop chat this is using fresh right here they're using their own thing
[01:07:26]  it's kind of funny i was actually on a framework that had a counter that worked and it didn't actually use their technology on their main page which is kind of like bon
[01:07:34] kers to me because um yeah i just it was it was it was interesting because i was like trying to find the code for it and it was it wasn't there anyways
[01:07:43]  um that's the side um okay so let's let's get started with fresh um i got the docs here i have to admit i'm not quite as prepared for this one
[01:07:52]  as some of the other ones i literally came back two days ago and i was like originally going to do a stream about solid router which is what we're probably going to do
[01:07:59]  next week we've been doing a lot of work with solid router and i'm really excited to share that but i was like okay well i i want to talk about fresh because
[01:08:06]  i've been seeing a lot of talk about fresh and it's basically for those who aren't familiar it's a pre-act islands framework so it's kind of like
[01:08:13]  think astro but like everything's jsx um and i think that's really cool the second kind of cool selling point is that it because it's dino and everything's
[01:08:26]  kind of like automated typescript and automated uh tsx um compilation and all that there's no like notice noticeable build step you just kind of run dino start use deploy
[01:08:37]  it and everything just works in the background things are building things are working so like for me that's my like kind of dubious part of it like i don't really care
[01:08:48]  about that at all um part of it could be a bias because uh with solid we need a custom compilation so like when i see solutions that don't do custom compilation i'm
[01:08:57]  just like whatever but on the other hand like you know you get started beat is it that different but this does offer on demand like on request building which is something that we
[01:09:11]  actually have ebay with um the lasso bundler um and people like well where do you actually want this capability well at ebay's case internationalization was actually really good
[01:09:20]  like sometimes you don't need to generate all the languages you know at you know ahead of time um you can make your web pack builds take like hours um so this kind
[01:09:32]  of on-demand lazy thing and serving requests and then caching it you know works pretty well so i i mean i i can i can see the balance there um so
[01:09:42]  i think that i think for us i think what we should kind of take in is the experience like this is a dx thing mostly and just kind of feel like oh is
[01:09:50]  this that different than just loading a template pre-built with beat i don't know we'll find out so yeah let let's let's kind of get started here right introduction
[01:10:01]  no build steps zero config necessary okay sure um jit rendering on the edge sure tiny and fast and applying javascript is required by the framework yeah okay so it's a
[01:10:13]  zero default framework because it's using islands also client side yeah sure highly resilient because of progressive enhancement and use of native browser features sure type script of the box yep process running
[01:10:23]  on the next okay yeah so sounds pretty standard let's let's uh let's see okay i've got dino installed and dino deploy installed so i think our first step
[01:10:31]  is going to be creating a project here okay this is the first thing that's going to different okay okay well i mean it's from a url which is kind of cool
[01:10:39]  okay let's let's copy this and kind of get that going uh do i have a new window for this to let's see here oh yeah get started okay so let
[01:10:50] 's let's let's take a look here okay so actually i'll put this in a folder that i can find it again uh okay so let's make our project and we
[01:11:08] 're as you guys know we're gonna make a hacker news demo that's that's what we do here um so we're gonna make fresh hacker news right all right so
[01:11:18]  do i want t wind no i don't care about t wind okay do i use vs code yes i do okay sweet okay let's open that up that's pretty fast i
[01:11:29]  mean uh let me see where's the development examples and fresh hacker news okay beautiful okay what are we looking at here if you are familiar with fresh at all you probably want
[01:11:45]  to feel free to chat up in the in the chat to help me along the way because as i said i actually haven't built this yet um but i'm leaning on the
[01:11:53]  fact that it's pre-act so that we can pretty much port over like the next or the remix uh well not the next because they have that i think they fixed
[01:12:00]  it but my example has the nested anchors which took me forever to hand port but i'm pretty sure we can port like the remix example over yeah you guys are gonna
[01:12:10]  have tons of fun with with the puns yeah but i like it because it is the sorry i didn't read the question isn't the hacker news demo pretty old as a
[01:12:22]  not fresh right now yes it's still one of the easiest examples to come up with recursive partial hydration which is one of my favorite things to see again i don't
[01:12:30]  know if this actually works in fresh but i'm gonna assume it does and we're gonna we're gonna see how this goes right so this is what we generated we got some
[01:12:37]  vs code which i think yeah some dino stuff i don't know and you know json yeah this is kind of interesting so like import map right right off and this is
[01:12:47]  so this is kind of like package.json except no dependencies so the import map is kind of handling dependencies from my understanding because it's probably using just like the browser
[01:12:57]  style import match so we have this dino run command which seems fine and then import map will tell us where to get preact from and this way we can still import stuff
[01:13:07]  like the way we normally import it and they go to the urls in the background okay and then we have a dev ts which is our dev server presumably eight dev and
[01:13:21]  then we have main ts which is our start server okay cool and they're just telling me run dino task start okay so like npm run okay that's cool i've
[01:13:34]  used you know deploy before i haven't used fresher dino development directly so let's let's see here okay so what do we got here for a setup we have
[01:13:44]  static folder okay unsurprising um we have routes and islands okay so routes are following next.js convention it looks like beautiful and an api route interesting i wonder if ap
[01:13:58] i as a folder is special we'll check the docs for that um okay everything else is preacts style right okay and then the other interesting thing is islands so and the
[01:14:14]  islands is just a counter okay that's that's cool okay so what i'm what and they have an is browser that's good to know in the run time so i think
[01:14:27]  the key thing here is fresh and this is actually i kind of like this i think it's a pretty smart approach fresh uses the routes folder like pages folder but this whole
[01:14:37]  folder is static so they're like this entry point everything from routes is is sort of server rendered no javascript and then the islands folder they make all the client side bundle
[01:14:48]  entries if you're on the server it'll just import and run it on the server but then it'll make the separate entries here so instead of using like dot server they
[01:14:55] 're just like put in the islands folder and then the rest of this is actually actually all just server only so i'm getting a sort of astro feel here right where except
[01:15:08]  except it you know except it's gsx essentially where most of the code you're writing is just server only and then you just happen to put some stuff that you want
[01:15:16]  interactive over here right so yeah i think i can work with this pretty easily it looks like it's got that let's let's just uh make sure it runs uh what
[01:15:29]  is it task start 48 000 okay let's do this localhost 8 000 and our counter starts at three which seems to be the magic number for fresh and it just updates okay
[01:15:45]  cool so let's just jump into it then i got the docs ready right so we can we can look here we got we got routes we got routing okay yeah okay so
[01:15:57]  i guess let's look at the api route i want to see something because i wonder if i have fetch at my disposal i guess we'll find out um we don't
[01:16:09]  actually need an api route per se um for what we're doing here because we're gonna i mean we don't need to serve something externally the server is going to
[01:16:25]  do all the data fetching for us for our hacker news example okay that's good to know um sorry someone's mentioning that that uh the hacker news has been radically down
[01:16:42]  all day okay okay let's let's okay so let's let's stop this for a second um or we can start it i i want to clean out the folder here um
[01:16:58]  const handler i'm going to assume handler is special let me look at the pages default yeah okay so default export is the component for the route is my guess and then i
[01:17:11] 'm going to guess that handler is special oh man and probably because yeah request thing yeah okay cool so i'm going to just assume handler and this just handles api slash joke
[01:17:27]  so it handles i wonder if it differentiates you can get in post not important for our example let's let's move on okay so first thing i want to do is
[01:17:36]  let's just try and port the uh the landing page so to speak for for hacker news um because what we need here is i mean i could start here but probably should
[01:17:56]  start with the name one crops page props oh this is kind of convenient just looking at this you get it straight into the page props but if i'm right this should still work
[01:18:08]  with star road or is it like this interesting okay because sometimes i have problems with top level um things so this is hello this should be this so lower priority than name okay
[01:18:29]  so i actually have to delete name probably kind of don't want to delete it because i want to like keep a reference to it maybe i'll just like make a folder and
[01:18:39]  just call it garbage just it's the one problem sometimes when you do this you kind of like delete stuff that you want for reference later okay beautiful right so the slash work
[01:18:53]  though so it's the same problem i have with remix okay that's fine we can work around this um one of the problems i have is some some frameworks don't support top
[01:19:03]  level star roads and that's something i need for this hacker news example so i can add this to the list on that okay so let's see what we want to do
[01:19:12]  here i'm gonna i'm gonna use remix i think it's probably the easiest one to use as a base open um examples remix hacker news workers that's probably the one okay
[01:19:30]  cool all right see what you'll see what you'll see with the remix example is i actually needed to have both a a kind of like a dynamic road and an index
[01:19:48]  road um but let's oh i guess the fun thing from remix is is that we're gonna have to rename all the the twos okay i'm gonna try one more
[01:20:04]  let me think of something new window the other one we can look at it actually is astro and i know that that might seem funny but astro in certain ways it
[01:20:13] 's very very very jsx um in other ways it is not so i'm just going to kind of look at this one uh let's look here astro astro ast
[01:20:23] ro why am i not astro hacker news my luck is this is going to be different one than the one i'm thinking of okay that's fine let's open that one
[01:20:41]  beautiful okay let's look here stories yeah actually that's a good question my first question i should come in here is wondering is is there a shared layout essentially because if you
[01:20:58]  if you notice in um i guess i could just make it myself if there's a shared layout i can just make it myself because this is an mpa framework right so
[01:21:09]  yeah i i think i think that's the key here right if i was using a like remix for example you will notice that there is a root.tsx which has like
[01:21:21]  the document and all this stuff but here each page is its own page so this is going to be a little bit different right so um essentially yeah but where is it's
[01:21:33]  funny though this starts at div still where is the document so to speak like where's the html that's what docs are for right understand let's take a look
[01:21:53]  handle request handle handle handle interact violence is there a static dot html did i miss that no there is not okay okay well we can do a little experiment here
[01:22:29]  can't we i can take control of it if i want someone is saying in the chat but where do i take control yeah okay let's let's just uh let's let
[01:22:47] 's what we're gonna do is we're gonna make a component here um and we're gonna call it layout essentially um i think these folders out here don't matter um
[01:22:57]  so i can call them whatever i want i can go like a folder sorry i'm not in garbage make a folder out here call it components and then i can make a new
[01:23:10]  file and make this file i don't know layout.tsx. And let's see if we can export default some kind of layout. Thank you, Copilot.
[01:23:32]  Yeah, I mean, for beginning, I'm just going to see if our div -- I don't even care, honestly, that much. The layout I want to
[01:23:46]  get is going to be similar to the Astro layout, which we've done here before. Components layout. Because one of the beautiful things about this is I don't
[01:24:03]  actually need all the link components, right? I don't need, like, the links. This is all server navigated. I would love to set the title,
[01:24:13]  but I'm not going to worry about that. What I actually need here is just this, right? Header and then slot, essentially. But we don't have slots
[01:24:23] . So really what we want here is just -- here we go. Dino is telling me where stuff has failed already. All right. What am I doing wrong,
[01:24:37]  Dino? It's because I don't have the JSX import source, probably, that all the other files have here, right? We need to do that,
[01:24:49]  right? We need to do this thing. That is not why. Thank you. All right. Built with fresh. And we can link to fresh. We're
[01:25:20]  going to do that. It's fine. It's just a GitHub link. I'll worry about that later. But presumably, if we do this, props. We
[01:25:36]  have children. We should just put children. That can be cool, like everyone who else can do structures. All right. And I'm going to have to probably learn all
[01:25:53]  the TypeScripts. Oh, fragment for pre -- you need import explicitly fragment for preact? Okay. Is it like this? Like this? Thank you. Beautiful
[01:26:11] . Okay. Something about named exports. It's weird. I'm so not used to using named exports. Will this work, though? Just out of curiosity, if
[01:26:36]  I just kind of get the outlines here. I just want to go to my routes, and I just want to kind of wrap this thing with our layout. Okay.
[01:27:04]  I'm going to import layout from -- I'm still not used to using copilot. -- and put anything in here. Okay. So it still works, even if
[01:27:23]  TypeScript is complaining at me. Probably. Well, actually, let's see if it does still hydrate. Yeah. Beautiful. Okay. Okay. Nice. All right
[01:27:34] . So I guess -- because this example just like uses static CSS, let's start getting that CSS in here. -- let's just go here. Let's just go
[01:27:45]  here. Where is it? Public. No. Where did I put it in? The other examples. Source. Styles. Okay. Global CSS. Let's just copy this
[01:27:59]  over. Copy global CSS. And probably just paste it in here. And then -- Yeah, that's not the color we want. It's just -- I actually --
[01:28:27]  I need to figure out actually how to get styles on the page. That's one thing I actually didn't actually check in the original example. Was there any CSS in
[01:28:36]  the original example? I thought I installed the Deno extension. I just don't know what it does. Yeah. I don't know. I'm not used to tooling
[01:28:57] . So forgive me. I used coffee script for like 10 years. I had no use for anything. Let me see here. Okay. So CSS. I would --
[01:29:11]  if I want to put CSS on the page, I need the -- I need the document, ideally. I mean, I could just import it in my layout component, I
[01:29:23]  guess. I'm going to guess that works. But that -- yeah. So like, I mean, this is a long shot. But let's try import.
[01:29:48]  Where are we -- where are we? I put in static. I'll move it later. See if it actually does anything. Yeah. He doesn't know how to deal
[01:30:01]  with it. It's probably because it's a thing. Head component. Yes. That's what I need. I need the head component. Okay. So fresh has
[01:30:18]  a head component. Is it documented? Let's find it. Yeah, that's fine. Maybe not documented. Okay. Great route, dynamic routes, custom handlers
[01:31:03] , fetching data, adding energy to blood production. And we can try running down here. Running locally. Sounds good. Crater route. Sounds good. Dynamic routes
[01:31:13] , we already talked about. Custom handlers. Okay. That makes sense. So you can define gets. Okay. So this is like the API. Good. Yes
[01:31:29] . Handlers get. Yes. Handlers get. Okay. Good. Fetching data. Beautiful. Okay. I'll need this in a minute. Okay.
[01:31:51]  Okay. Okay. So let's, let's, let's, let's, let's look for our head component. Okay. It's in the source, which,
[01:32:01]  all right, there's no known modules. Sorry. That's something I'm gonna have to get used to. It's fine. Um, we can go find the
[01:32:08]  code where it lives. Um, refresh. All right. All right. Helpers. Nope. We have, let's see what we export from index here. Element
[01:32:34]  node store. Um, this is not the right fresh. Good call. Let's just go. Let's, let's go back here. Let's go fresh.
[01:33:00]  Um, you know, land fresh. That one looks better. There we go. All right. So we have a dev server runtime. Okay. Well, let's see
[01:33:16]  if I pick the right place. What does this export bundle. Does this export? See main TS seems to be the pattern instead of index TS. This is, this
[01:33:33]  is just running stuff. All right. All right. So let me, am I looking at it head? Head. All right. Export function head. Okay. Let
[01:34:01] 's see if, see what we can do here. All right. So what we want is see where's. Is there any example where actually. Installed from.
[01:34:18]  Maybe it's in garbage. Where's garbage. Where it's. Dollar sign fresh. Okay. I'm gathering. This is where, where we need to, to go
[01:34:29] . Something like that. Thank you. Whatever completion that is. Okay. From fresh.head.ts. I'm in runtime. I'm just guessing my way
[01:35:07]  through here. Okay. Ah, there we go. Beautiful. Okay. Let's do it. So what does head except. Thank you copilot. All right.
[01:35:33]  Head. Okay. Sweet. So we can get our title in here. And then we can get our links. Okay. So let's. Let's go back and copy
[01:35:44]  what we need to from Astro. All right. So. This presumably. Here. Interesting. But I don't care. And then this is fresh. And
[01:36:18]  then. What we need is. Just a good old. What is it? Link. I've been so long. there. Okay. We don't want Astro
[01:36:59] . Purple. Good. We're making progress. We want. We want. Some fresh green. Right. So let me see if I can. Find that. I
[01:37:10]  think I. Jotted that down earlier. Yeah. Here we go. CSS. All right. That's the worst. I've ever come up with for accessibility.
[01:37:33]  Don't hate me on me and that. We'll worry about that later. But now we can at least see that we have. A fresh based header. Yeah. Clearly
[01:37:42] . When using this color. You need to use black text. Don't worry about that after. Not here for the CSS. Okay. Sweet. Thanks for help from chat
[01:37:54] . I appreciate that a lot. Okay. Cool. So. Okay. Now. Let's see what we can do here. Because. Yeah. Let's see what we
[01:38:07]  can do here. Because it's funny. I wouldn't have expected Astro to be where I was going to get my main source from. But I actually think. I
[01:38:16]  think Astro is actually the closest. It's JSX is very similar. So let's just copy this Astro code right over. Good. Okay. No support
[01:38:35]  for HTML comments. Fine. And we're missing a bunch of variables that I have declared here. And these are going to come through crops. And probably page. Prop
[01:38:47] s. Import for something from somewhere. Okay. And. We're going to. We're going to send these through. We need story eventually too. Okay. Cool.
[01:39:05]  So let's look at how we fetch data. This is the next thing. Let's look at how we fetch data. So according to the fresh docs. F
[01:39:25] etching data. And then this puts it into here. Lovely. What's this context render user? Huh. Interesting. I'm going to just. We're just
[01:39:58]  going to. We're just going to take this one. Right. Here. And just drop it right in here. So it looks like this is mostly what we want.
[01:40:06]  And we want to. Fix up all these imports. Plus we need to get our types. Let me see if I can grab my types. I don't think I did
[01:40:18]  the types in Astro. But I can grab them from Remix. Version. Copy. All right. Not in routes. We're going to put it out here
[01:40:35]  somewhere. Paste. Not. All right. Story. Comment. Okay. We'll need those in a minute. Though. I actually probably. Actually only put the types
[01:40:57]  in the. Top level story thing. We want to get that from. There. And then this is going to be. Story. Data. No. And there is
[01:41:32]  coming from there. And. Okay. Sweet. And then we just need to. To make our API calls. All right. Probably. Don't need this anymore.
[01:41:57]  But I'll leave it for a second. I'm going to. Make another API folder. That's on the outside. I'm just going to copy. The stuff that
[01:42:03]  I've been doing. In the other projects over. Because it's. The API TS. I guess we're going to find out. If it looks like. From
[01:42:17]  that example. That we have fetch on the server. So I think. Oh yeah. We're in Dino. Of course we do. Some things become very easy
[01:42:23] . I'm just going to copy this one too. We'll worry about tidying up. The folder structure later. We just. Not. In here. Out here.
[01:42:35]  Move. Yeah. All right. Yeah. So. Then. Our fetching. Just becomes. Essentially. This. The equivalent. To whatever this is. So I
[01:42:59] 'm going to move this over. So we can see it side by side. Difference. Remix loader. And a fresh loader. Okay. So we
[01:43:07] . Don't. Do we need the URL. To get the search parameters. I guess. Is the first question. Okay. What are we getting. Params from
[01:43:28] . Not sorry. Context. Context is what I care about. Oh it's because I. It's because of this. Crap. I'm coming it out
[01:43:39]  for a minute. Context. Nevermind. I'm going to have to learn how to. Move around in Dino. Let's do this the trial and error
[01:43:57]  way. Which is. Essentially. Let's just. Log what we get. Context. And see how giant this object is. We're going to. Happen terribly
[01:44:16] . Page is not defined. That's fine. Okay. Let's. Let's do something like this. Let's. Let's add. Page. Equals.
[01:44:30]  Nothing. Now. Let's look what we get. Stories. G. Yeah. Okay. Don't necessarily see query parameters on anything here. But it looks like it
[01:44:52] 's. Got next. So it's like a middleware set up. And then it has render. Okay. We're going to hard. We're going to hard lock
[01:44:58]  the page for a second. And then we'll go from there. Okay. So we're not going to worry about that. We're going to bring page back. And
[01:45:04]  we're just going to. Keep this commented for reference. Let's just work backwards. Okay. We're going to go. On page equals one. Type equals.
[01:45:23]  Actually. What did that come up? Stories. Beautiful. Okay. Okay. It's going to be stories. Pop. And then. Move this here. Up here
[01:45:43] . And then. We're going to. Oh, I see. I'm going to have to rename it. Something different. That's fine. I'm going to
[01:46:06]  do something like this. We need to get fetch API. Where did I get the fetch API? Just. Curiosity. Where did I? Yeah. All right. And
[01:46:35]  then. Don't do that. And then. Return render. Stories. Right. And. Yeah. That's. That type script error. I'm not going to
[01:47:15]  worry about that. All right. Well, actually we have the. Did I delete the wrong thing? That's funny. I didn't. It just. Didn't
[01:47:43]  delete enough things. Um. I'm not going to worry about this for a second. Cause they. We'll worry about that later. Okay. And actually while we're
[01:48:08]  in here. Let's console. Stories to make sure that we're. We're getting them. We still have to fix a lot more of our app here. That
[01:48:26] 's fine. That's fine. Let's. Build this up a little bit. I'm just going to. Start over again. Doctype is not valid.
[01:48:38]  Jason. That's interesting. Oh, right. Did I not get to my console log? This is console log debugging. I. I. Okay. Okay. Hi
[01:49:00]  again. All right. So. We're getting. Hooked up on. Probably. Let's see if we get here. This is always where we get. H
[01:49:32] ooked up though. To usually something around the. Fetching that I'm missing. Type. G. All right. Yeah. Yeah. That makes sense. That
[01:49:43]  makes sense. Let's just make this top for now. Beautiful. Okay. Yeah. It's because I was messing with stuff. Okay. Cool. See, this is
[01:49:56]  a lot of beautiful. Hacker news data coming in. Okay. Sweet. So now we actually need to do this. So. I probably should make my props.
[01:50:08]  Interesting how it passes it through. Let's find out. Let me remove my stories console log. Let's see if it just passes it through transparently. Prams
[01:50:35]  URL data. Okay. It's under data. Beautiful. Okay. So then we know that. Is this a generic? Yeah. So then which. Okay. It's
[01:50:56]  getting some stuff from chat here. Response faker. That's interesting. Okay. Okay. Let's see what we can do here. Sorry. I probably should have
[01:51:15]  grabbed that right off the docs. Right? I think it was. I think it was. It might have been in here. Although I was looking at this one specifically.
[01:51:31]  Let's see. Let's see. Let's see. Let's see. That's. That lets me use my. Stories data. Okay. Cool. And then
[01:51:53] . All I need here is. The funny thing is. I kind of. Kind of what I actually want to do. Is I actually. Kind of want to do
[01:52:01]  this. I mean. I could. I'm assuming. That I'm going to have to calculate some stuff in here. So I'm actually going to pass. Page.
[01:52:09]  And type. And type. Through with the stories. And then that way. It's a little bit more complicated. It'll be stories. Stories data. Array
[01:52:22] . Is it. Is that stories data. Already an array? No. Actually. It's already. It's already. It's already here. It's actually. This
[01:52:31]  is actually what we want. So. Data. Should be. Stories data. Or null. And then. Essentially. I'm sure this. Further. I mean.
[01:52:52]  It's going to get angry at me. From a TypeScript standpoint. Because I'm not like. Checking for errors. But I should be able to go. Stories
[01:52:57] . Type. Page. It doesn't. Okay. It's fine. Where about TypeScript when it's useful. Story is not defined. Beautiful. Okay. So
[01:53:14]  it actually. Doesn't. Render the story. Because it doesn't exist. But. Okay. I have probably. Ignored TypeScript. For as long as I
[01:53:31]  can. Possibly ignore TypeScript. Yeah. I just say it's never null. And I can probably. Do that. By doing this. I mean. I
[01:53:42] 'm lying. But. Let's. Let's. Let's lie for a minute. And see if we can. All right. All right. All right. All
[01:53:57]  right. Okay. Making progress. Beautiful. Thank you. All right. So. Now we just need a story component. All right. And I'm going to add
[01:54:18]  that one in. It's going to be new. Actually. Yeah. We'll new file it. Because. As much as I can just copy almost everything directly from Ast
[01:54:30] ro. Funnily enough. We still need the. What do you call it? The wrapper kind of stuff. Let's try a remix for this one. Story
[01:54:45] . Components. Story. Component. Yeah. That looks beautiful. At least this one should be almost identical. Don't need link. And we need our.
[01:55:12]  Preact. Oh. All right. Because you need to. And. Then. Oh. Where are we? Fragment. I didn't need fragment. Okay
[01:55:45] . Okay. Okay. Interactive. Bear with me as I. I did in this very. small code window. Because I blew it up. Okay. And
[01:56:18]  then the last fragment. That work. I'm missing one. Closing fragment. Okay. Okay. So. What's going on. Where it's still not defined
[01:56:39] . So I probably crashed something a while ago. I'm going to have to restart the server. Either that or I imported it. I haven't imported it yet. Ha
[01:56:45] . That's probably. That's more likely. Import story. from. Stop doing that. Stop doing that. Yeah. Cool. Part one. All right.
[01:57:16]  So. We actually have to get the navigation working for real right now. But I believe. No. No. We need to get that. And I need to handle that
[01:57:29]  route. Okay. So. First thing is. We can change this to story pram. Or top. Means now. When we. No. Don't do that
[01:57:47]  one. Do any other one. When we switch between the pages. We can see our new stories. Okay. Just out of curiosity. Just to verify the claims here.
[01:58:01]  Now that we have this working. I'm in dev right now. So it might be. A little bit different in dev. I just want to see what's going on
[01:58:07]  with the network tab. Because this page. As you notice. There's no islands. You don't need to do anything. Right. So it's literally just a
[01:58:12]  page. Of HTML. That renders on the server. And yeah. As you can see. There is. Just some. Refresh JS. Which I'm gathering is
[01:58:21]  for hot reloading. Because I'm in dev. Out of. Curiosity. How do you not run in dev. Right. Because if I looked at the Dino.
[01:58:33]  JSON. There's dev TS. OK. Well. I'm gathering. If I take this command. And do the main. TS. I can do the same thing
[01:58:49] . Then. No. Did I do that wrong? Or maybe it's like. watch and some other stuff on here yeah dino run main ts it's like i
[01:59:02]  put a whole bunch of extra stuff that i don't need um sure why not um yeah why not um yeah thank you see this is this is why you know actually i
[01:59:26]  can't give them requests for that domain this is why dino is more secure reminds me of windows vista but i think that's that's a good thing i don't own
[01:59:42]  that domain i wonder if that's why that's being weird allow m that's bypass this prompt let's go dash dash allow m okay well it's fine you know what
[02:00:10]  we we'll deploy this in a little bit and then we'll we'll do it for real i was just curious because i like kind of introspecting as i go kind
[02:00:18]  of figure it out but you know what we can leave that to the end i i do want to continue here because i want to make an example with an island obviously right
[02:00:29]  so um yeah okay so we have our stories and they load what we because this doesn't handle the the route route uh the base route we're going to need oh that's
[02:00:42]  a good question how do you do the index route i think i i had that originally didn't i main dot tsx dash capital a thank you guys in the chat are
[02:01:01]  the best yeah and you can you can see uh okay there we go it's gone it's all gone no it came back okay i don't know why that's there
[02:01:23]  we'll we'll just continue going and we'll we'll figure this out okay so okay we got our story prams and we have our stories loading the only the only
[02:01:34]  challenge we have right now um on this first page is that it doesn't handle slash um and if i remember the original example handled slash um i'm just i'm like
[02:01:46]  my memory fog it wasn't main was it wasn't main ts that was that how we handled slash like if i go like something simple like export default i like i'm
[02:02:16]  not remembering this this is this is this is this is my memory fog here because i was the uh the slash route we had at the very beginning before we even started um whereas
[02:02:41]  like putting stuff in a garbage folder so i wouldn't forget i actually forgot what the what the what it is because in most things it would be index right but i feel
[02:02:52]  like that's very not you know oh it is some stuff's main some stuff's index okay sweet it's index okay cool so what we actually want to do for index is
[02:03:03]  basically copy this whole thing and hard code it for now in a real app we wouldn't do this but this is just going to speed up the missing part so we're
[02:03:16]  just going to do this i'm going to do this and we'll worry about everything else later okay and now when we go here at least we actually have navigation i'm seeing
[02:03:32]  an interesting css flicker i assume that's dev mode though we'll we'll get there okay okay so the reason uh we want to go and do pages next right
[02:03:42]  so um let's let's do that next um okay now that we have the pattern i'm actually more confident that i don't need this other stuff because we're going to
[02:03:55]  basically just repeat this pattern again but what's going to be interesting is we're going to we're going to um essentially add some um some hopefully by the end we're
[02:04:12]  going to add some recursive uh partial hydration um so the first thing i'm going to do here actually is i'm going to make the nav sorry i already made the
[02:04:22]  nav i'm going to make the comment component um and we're going to do this the unoptimized way first so i'm just i'm just like all thumbs
[02:04:37]  or whatever today um and then we'll we'll we'll try and make the optimized version later okay so unoptimized version looks like this actually this is our first
[02:05:13]  uh oh this is interesting can i actually do this unoptimized i i mean i i obviously can but yeah i mean this is an island this is our first island
[02:05:27]  actually so let's just move it into islands and and we need you state and we need one types dot yes and then all these links become oh sorry and myself anchor and
[02:05:59]  all these twos become href and the fragments become fragments and report from remix okay cool yeah what's gonna be cool here is we're gonna do recursive islands in
[02:06:24]  a minute but i just wanted to see if we could because you see how the comments are in the comments this this will be the the the the easy version of it um hopefully
[02:06:39]  i hope we'll we'll try it we'll try some stuff here um so uh let's make routes new folder stories i'm going to call the folder and then i
[02:06:52] 'm going to make the new file in here it's going to be um story story dot tsx i think let's see what we do here story story or i guess
[02:07:11]  yeah i'll keep the naming rename id and then this page is a lot simpler than the first page i'm going to copy this one yeah doesn't have as much stuff
[02:07:33]  i'm going to copy this over from from remix and we can go from there okay so first of all we don't need any of this stuff and this is dot ps
[02:07:50]  and this is capital comment dot tsx all right it's an islands all right and then this is dot dot dot dot okay and then okay sweet and then we use a
[02:08:19]  similar setup that we used here where we grab a parameter and we call our fetch api and call render actually i just grab this whole thing okay and this time our data
[02:08:51]  is of type ice story all right and then we do need to grab something from up here probably need this in the middle and then our fetch call just becomes this this
[02:09:28]  just becomes this and this just becomes this and then this goes away and then copying the same pattern here we need something like this all right there this one like this and it
[02:10:07] 's going to be data is going to just be the failures to the story and then it's just going to be by story and then don't forget the preact
[02:10:36]  stuff drop off the loader remove extraneous references to link and to href i wonder where something didn't come across properly but huh oh page you need to lay out
[02:11:11]  do not forget the layout the right place yeah and here left layout let me just import layout from the other or at document and i have some extra thing and that's
[02:11:56]  story and oh going oh i see okay yeah so the the yeah this was my my problem i had the stuff in the wrong place okay speed collapses okay okay well this is
[02:12:38]  all right i always have to remember this the jsx thing there's an and in here that should that should be uh to be uh is it that one no i don
[02:12:53] 't think it's that one one of these conditionals in here ends up returning at zero when there's no comments so i think it's i think it's uh i
[02:13:10] 'm i don't remember where it is um just like not seeing it right now but that's fine it's like let's look here this happens only on the jsx ones
[02:13:22]  and i always forget to get to it because it's text and then it's zero so it's a comment but it's got to be in the comment component and
[02:13:49]  we'll worry about that in a minute i just i've seen this one a few times the problem is the when i copy it from the different sources they they all treat stuff
[02:13:52]  a little bit differently um anyways let's worry about that in a minute i just i've seen this one a few times i've seen this one a few times the problem
[02:13:59]  is the when i copy it from the different sources they they all treat stuff a little bit differently um anyways let's worry about that in a minute okay so the first thing that
[02:14:05]  i'm noticing here is that when we go into the network tab um now now more than a refresh we're getting the rest of the javascript in and we get
[02:14:22]  the comments um so um if i go back to the the main page and i look here i'm gathering i'm not going to see any sort of data serialization because
[02:14:34]  there's no islands right but when i go into a specific story and i look in here i'm going to see this fresh islands props and it's going to pass in all
[02:14:42]  the data for all the comments on the page you get you all should be able to see this right and yeah it's it's yeah okay so let's do something about
[02:14:56]  that that's that's that's what i want to do i want to take this as simple example the problem right now is once we enter the first comment island the whole page
[02:15:05]  essentially needs to to um to be client side but i'm suspecting that we won't need to do this um when you have islands you can do some pretty smart stuff by
[02:15:16]  by hoisting and passing stuff we have through as children uh there's a question chat uh is there context render cool ended after ipi routes um my understanding with ast
[02:15:25] ro is you literally it just literally renders the page so like you you don't you don't have to call it it just it goes down the page and it's as
[02:15:34]  far as it gets so like if you return a response it returns response if you don't it'll continue rendering the page so essentially it's just it's you just read it
[02:15:41]  top to bottom with astro um so there's it doesn't really need to call it out um okay so anyways let's oh no i found it it's this one
[02:15:52]  props comment dot late and length is zero um so yeah sorry it's this one kind of change all the rest of the stuff all right because booleans are handle are
[02:16:11]  stripped in jsx but um other stuff isn't okay cool all right awesome so we have hacker news working on that and now let's let's let's let's see if
[02:16:24]  we can do something smart here so we have our comment island but what i actually want to do now is uh apply a technique that i've only so far that you i
[02:16:35] 've been able to apply in marco quick hydrogen and uh and astro um and i want to i want to do it here which is our ability to do recursive partial
[02:16:49]  hydration um we don't need this counter anymore and to do that what we're going to actually do is we're going to make our comment component actually a component and make a
[02:16:59]  what i call the toggle island um so i mean already you can see some benefits here on the network side like we're only loading about 7.6 kilobytes of
[02:17:09]  javascript here but we we can do better right um so let's and and i think we can get rid of that big blob of data serialization so to do that
[02:17:21]  i'm going to make a new file and we call it toggle.psx and i have a solid version of this so let's let's port this from solid because
[02:17:33]  in my astro version we i use solid to do the islands and i have it i have it right here so let's see if i can port solid looking component here
[02:17:48]  okay so we we don't need that okay so we're going to make a few little changes here because we don't have that you don't have actually hydrogen might be the
[02:17:58]  easiest one to talk you know what actually let's open hydrogen let's let's open hydrogen um let's let's do that this might be the easiest way to look at
[02:18:08]  this open um development examples hydrogen hacker news let's look at that all right so in hydrogen server server server clients he toggles the client component and then we have this comment server
[02:18:29]  component okay yeah i think this is going to be the easiest way to go we're going to take this toggle um from from there beautiful okay and then what we're going
[02:18:43]  to do is obviously grab our pre-act specific top stuff and then what we're going to do is get our fragment and use props here yeah for passing props children you
[02:19:06]  know what like everybody else does structure okay and okay so what we have here now it for people to know all to understand is we i'm i've taken the comment component
[02:19:25]  here and i've extracted the toggling like this thing you see how this is recursively passing comment through like it's common calling comment what we're going to do instead is
[02:19:35]  put the state in the smallest possible component which has the toggling and then pass the server rendered static code through the layers of dynamic client components so this will make more sense
[02:19:52]  when i when i grab the um comment server from from from them so i'm going to i mean we're now going to make a new file under components which is common ts
[02:20:04] x and it's going to be a slight alteration of our of our existing comment component um so i'm going to be able to take most of this stuff and move
[02:20:15]  it across but instead what we're going to do here is we're going to grab toggle from the islands folder make your completion and and and i'm going to change all
[02:20:49]  these anchors actually see what we're doing here comment calls itself still but it wraps it in this toggle so the only client component we actually need is here right so now
[02:21:07]  we can get rid of stuff like use state um in our comment so it's not stateful and and and then more fragments here yes my biggest question right now but
[02:21:39]  yes my biggest question right now is that you can see that you can see this is actually very similar to our previous component um except now actually i didn't check about the danger
[02:21:51] ously set html did i do that over here does preact do the dangerously set html thing i guess it does because the stories are working okay so
[02:22:02]  all right yeah so essentially instead of having a whole comment island we've actually shrunk our island to just the toggle toggle part and the rest of this is actually going to be
[02:22:16]  server now so now if we switch and we go here to our story and we import it from components instead of from islands oh no this is what i was worried about let's
[02:22:36]  just i thought there was a there's a chance this might not work but i want i want i wanted the conference the problem is it's okay let's see if i
[02:22:57] 'm if i'm before i discount this let's let's make sure that i'm not doing something stupid right um yeah let's make sure that i'm i haven't circular
[02:23:19]  convert type error converting circular structure to json starting it because i'm wondering if i'm causing like a loop somehow and okay we can give this a minute to make sure
[02:23:46]  that i'm not missing anything you know like this is in my error there as i said there's there is a chance that recursive partial hydration wouldn't work um because
[02:23:55]  this is still very very new um but the the challenge here is that i'm calling myself from the server component and passing it through a toggle which then calls a toggle which calls
[02:24:13]  it like they actually nest um and this this as i said what this should do is remove the need to serialize all the data um we've seen this in the other
[02:24:24]  islands frameworks um i like using this case because it's it's it's basically impossible for a single page app to make this optimization um and it's it's it highlights really
[02:24:38]  nicely for the for the performance characteristic of uh of partial hydrated pages okay so just let's double check our logic here so we have our layout we render our story our stories
[02:24:51]  map over the comments first level okay and we pass we have a key on the comment id and we pass in the comment okay to be fair i probably am missing a key
[02:25:05]  no i do have the key so the comment id in the past comment on the island version let's try it let's see this version okay i mean i don't think
[02:25:16]  that's what's causing the problem but i am noticing that i am missing a key here um nested um nested but i don't think that's the problem if
[02:25:28]  i remove the recursion um how do i remove the cursion without like obviously if i just comment out this whole block we're we're just not going to see very
[02:25:46]  much here it's all top level comments we don't see any of the nested comments the second that we now what if i remove the toggle let's let's play that
[02:26:03]  game let's remove the toggle so there and there oh it's because we don't need these extra ones too okay move the toggle now interesting just navigate around i just want
[02:26:38]  to 66 comments it renders but i guess we have none of the uis to indent it if i remove the toggles so we end up with more comments than before
[02:27:00]  and it renders the second that i put the toggle in okay let's go the other way let's put the toggle in but not render a comment i don't know
[02:27:13]  if that'll make it angry toggles in don't render we're fine and then render the comment recursive okay yeah i'm yeah i i think i think i'm
[02:27:45]  i'm gathering that this is just something that's not implemented yet yeah i i don't know if i actually uh address this earlier but the thing is the the the trick here
[02:28:02]  with the recursive partial hydration is that the the the this is so much easier to explain to people who are familiar with with uh with uh with um oh let's clear
[02:28:14]  this people who are familiar with like the shadow dom but but essentially maybe it's not easy to show with this this this this kind of shows what i'm talking about this
[02:28:30]  comment is a server component right so what ends up happening is you you can pass a server component can't contain sorry a server component can contain client components but client component can
[02:28:48] 't contain a server component otherwise some client state change could cause a server component to need to re-render and you you'd have to go back to the server for it right
[02:28:58]  but what this means though is on this boundary between client and server component generally speaking in most of these frameworks is that if you have a client component and you pass the server
[02:29:10]  component through it like to children what you can do is actually the server component will still get rendered on the server so this logic still gets rendered as part of the server and then
[02:29:19]  it gets passed in as the child prop to the client prop already pre-rendered so what i've managed to do with this pattern is essentially you render the comment and
[02:29:27]  when it has child comments it's still rendering these on the server and then their child comments come in again and still render on the server so right on the server and we end
[02:29:37]  up with just these islands that wrap all a completely static server tree and the benefit of doing this is if you look at this client component that i'm using it gets past no
[02:29:50]  props and because it gets past no props and it just maintains its own state we don't need to serialize any of the data for that prop so if you notice here
[02:29:58]  even though we're doing the children they're just kind of passed through so the the the cons are always rendered on the server regardless they're just passed through this tree and because
[02:30:09]  none of the state needs to get past to it we don't actually have to serialize any of the data required to render those components we just hide them here using like a
[02:30:18]  a class right we're just toggling the visibility and for that reason what we can do is we can both shrink the size of the javascript now in the client
[02:30:27]  our island only needs to be this big we don't need the whole comment island and secondly what we can accomplish by doing this approach is we saved all need for all data serial
[02:30:36] ization so instead of having that double data problem you know like um i'm gonna have to go back here and for now and change this to the not to the islands version
[02:30:48]  of the comment i was showing earlier when you go here essentially because we started the island where the comments started we had to render all sure we're hydrating it fine but we
[02:31:00]  we ended up actually having to hydrate and pass all the data for all of these comments so when you actually look at the network you actually see all the data passed and
[02:31:11]  and if i go into the div item view here in here you're going to see all the data again in the form of html see it's like it's it
[02:31:21] 's all it's it's it's it's all here this is the whole this is the whole blob of data um again so this is something that obviously every spa framework has
[02:31:32]  to deal with because they need to hydrate the whole page but one of the cool things about islands is is you can actually like clever kind of the same tricks you use
[02:31:40]  to hoist memo i don't know if everyone's read dan abramoff's uh um sorry it was overreacted um um he wrote something called before you memo
[02:31:51]  and he explains to people how you can improve react's performance by hoisting hoisting the state up essentially and changing the tree right or one's moving state down
[02:32:04]  but he calls lift content up and he's talking about how he he he can basically do this trick of passing things through and it changes the render characteristic because the past through gets
[02:32:16]  associated with the parent and i think um yeah this the he wrote this just to help people not use memo but you can tell that this was all just a preamble so
[02:32:27]  that he could help get people used to server component um patterns because this is the trick to islands this is how you actually optimize it you actually want to arrange your code in
[02:32:37]  a certain way if you actually want to be able to optimize for islands and the and this is true for react server components like with hydrogen or astro or all of these you
[02:32:46]  end up kind of doing this kind of state hoisting pattern hopefully that that answers the question a little bit anyways um i'm gonna leave this part of this now let
[02:33:04] 's let's get this deployed and moved on um essentially um there's a fixed fork um we i could try i i just i don't know enough like how dino
[02:33:23]  works like usually i'd be just like messing with stuff in my node modules but there is no node modules here so i'm a little bit out of my element um uh just
[02:33:33]  to be fair um so let's i i yeah i i can revisit it i'm going to leave the code for the other solution in line so i can change this um
[02:33:48]  i want to kind of switch over to talk about what the deployment story is i i've i've had some i've done some work with you know deploy in the past um
[02:33:57]  but uh mostly mostly through netlify i also have a specific dino deploy adapter for solid start but let's let's get this up i i'm not going to
[02:34:07]  worry right now about the user page it's not that important um so i think we've we spent enough time in this example for now um if the current version works let
[02:34:21] 's see what it looks like in prod and i think that's the answer we do we do have the current version working okay sweet okay so um yeah uh let's i i
[02:34:33]  if i remember correctly there's a couple ways to do this stuff actually um you know deploy ctl is one of them and the other one is i can just make the
[02:34:47]  github repo i actually did make the github repo so maybe maybe maybe that's just a better story right um you know deploy you know what maybe maybe i
[02:34:59] 'll just do that i i think i made where did i i think i yeah i made the github repo um i'm just gonna i'm so lazy actually i
[02:35:19]  don't want to add read me but yeah you get the idea i'm just gonna like copy this stuff over here and then let's push all our files up and then
[02:35:52]  all right cool all right and then i think we're good yes all right there we go okay well we'll update that a bit but now we we have a repo and
[02:36:10]  then i think all i have to do is if i go to my dno deploy and sign in i think i just have to link the github why is that
[02:36:23]  one there weird all right give me one second while we get this get this in sorry wrong place okay and i want fresh hacker news sorry it looks like i lost internet
[02:37:12]  for just a second main main i'm gathering main ts is the entry and then and then i need to add was it dino just try linking this now and see if
[02:37:46]  this works i think i have to add the the the token maybe i'm wrong because i did it from the ui beautiful okay right solid fresh hacker news dino dev
[02:38:10]  there we go okay okay we have oh did i never i never fixed we're missing one thing i never fixed the uh the page navigation look let's fix let's fix
[02:38:35]  that really quick um we never fixed the um the the page navigation um let's i i kept up page one because i wasn't sure how to get let's let's
[02:38:56]  do something here let's let's underscore what's what's underscore and what's contact see this again and see what we're dealing with yeah i imagine is underscore request is
[02:39:19]  that is that what that is in that example i'm gathering that's what it is all right can i go to get it yeah yeah yeah i i knew it would be
[02:39:43]  something simple simple like that i was just like i was just missing it earlier let's let's let's let's copy that over um there we go um how did i get
[02:39:57]  this here i don't need i should be able to do all of that stuff actually this actually this right there normalize url that's because of react server components and
[02:40:28]  then url page page and then telling me costing them thank you and then i have to apply this in both places both both here and here beautiful all right and now
[02:41:09]  if that's all right i should go back to localhost yeah someone's like you're not on localhost and they're absolutely right it's 8 000 isn't it
[02:41:20]  um we should have the pages working now yeah beautiful okay my bad but that means we get to test the other feature fix page navigation it should auto deploy right because i'll link
[02:41:36]  up all right all right and if everything works the way i hopefully magically works that's probably a deploy i was i was seeing page navigation works okay yeah it shouldn't
[02:42:09]  be the text nav accessible to how much of this do i anything is yeah okay we'll this we'll just worry about the top nav um actually too let's look here
[02:42:25]  um it's in our layout component nav class inner okay let's see if the funny thing is i actually didn't write this original example if you if anyone's wondering i actually
[02:42:40]  um this came from uh this came from you call it um uh what is it this came from um you uh funnily enough uh i'm pro i probably have stuff
[02:43:02]  that's like overriding other stuff yeah it's it's right here like i'm not i'm not like super familiar with with um with um with what they they
[02:43:15]  ended up doing here originally um oh this is just a pacity never mind you can tell how much i play css i'm actually gonna have to figure this out i
[02:43:34]  keep on looking at the deployed one localhost silly me i mean that's the bruce that's the brute force way of making it accessible though um yeah i i probably
[02:44:07]  should but i'm i'm lazy all right i don't want it to be white or something slightly actually this isn't going to work against black is it just i'm
[02:44:35]  not a designer forgive my terrible terrible it's gonna be like a green color now when i have her no okay then see the difference am i looking at the ghost yeah oh
[02:44:57]  thanks i'm like i'm like what's going on here oh man if it was possible i made it less accessible oh man i'm just i'm just i'm just
[02:45:18]  i'm just the worst here um five okay okay just can leave see there's a hover state and then built built with fresh is somewhere else let's inspect that i'm
[02:45:42]  just going to hard code that in really easily github okay make text readable okay okay so let's let's let's let's get let's let's let's
[02:46:16]  move on here um so now our example is readable and good okay okay so i'm going to move this to a browser where there's no browser extensions or anything else just so
[02:46:35]  i can see it a bit better all right so i can get an idea so just kind of get an idea of where we're sitting on this obviously um no javas
[02:46:48] cript on the initial page load because this is completely static page and then when we go into something at the comments um it's pretty smart it we we don't need very
[02:47:04]  much javascript at all um we could do better with the recursive thing but this is a this is a very simple example here where we can see that we can get
[02:47:14]  6.8 kilobytes and for people wondering how small 6.8 kilobytes is for this page it's still pretty freaking good because even without the recursive
[02:47:25]  to give you some ideas here um you know let's go in here svelte kit you know will on this page be 20 kilobytes hell solid start on this page
[02:47:40]  will be 12.6 kilobytes like we're we're we're like that this this fresh page using these techniques is already half of like a spa um obviously there
[02:47:54] 's things like quick where you know they can be like oh look no no kilobytes but you know as soon as you do this comment well uh this is 16.5
[02:48:07]  kilobytes so um you know there there's like this this is a pretty good starting point um hydrogen let's just just look at this one 58 kilobytes right smallest
[02:48:30]  react framer but yeah like if you if you want to start talking you know i mean if we bring out react it's sort of like shooting fish 61.9 and i
[02:48:39]  don't even want to load next um but i i have it here so we can um just kind of give give an idea of the difference that islands can make right 12
[02:48:51] 9. obviously i i i left the my my my my some of my favorite contenders to land here we got astro solid just to kind of give an idea um four
[02:49:03]  point four point eight kilobytes obviously um but this has a recursive hydration trick which we are yet to add to our to our um um fresh for example and then
[02:49:16]  um i got marco six here why not deploy to do deploy and this one's 1.6 kilobytes and i mean that's fine nothing is going to be mar
[02:49:26] co when it comes to this stuff so um we just use this kind of a guideline um to kind of know where things are at the uh but this is just javas
[02:49:37] cript load honestly the javascript load i'm not going to make the hugest difference it's just it's important just to kind of understand as a baseline what the islands
[02:49:45]  are doing for you here right like the smallest single page app example i have here is 12.6 kilobytes with solid and preact with fresh is already half of
[02:49:57]  that right so you know without probably even it can be optimized further in the future so i think i think this is like good understanding of where that kind of sits the other thing
[02:50:08]  we i want to kind of look at was let's just kind of get an idea of of what the what the load not what the what the load characteristics look like here
[02:50:20]  i'm going to just load the this comment page uh which one are we on i feel like i should be on the same one for everybody um which one um which one did
[02:50:33]  i go to sorry just looking here unhappy users notepad is that the one i looked at with everyone yeah i think i might have been looking at a pre-load
[02:50:47] ed page though because i don't think unhappy users notepad oh there it is still here it's funny though because it looks like okay there we go yeah let's let
[02:50:58] 's look at the load characteristics here and just do a quick timer profile yeah yeah yeah yeah the the data serialization size does have an impact here but i'm gonna let
[02:51:14]  perf tests show the impact i mean what you will see um and we can look at that in a second too we'll look at both okay yeah so this timeline is pretty typical
[02:51:24]  of an async render we have the initial load let's let's give it a one more run just kind of get an idea all right so um 230 let's let
[02:51:39] 's do that one more time i didn't like that one better 206 async render load our assets global cs being processed get our chunks in and then we get our
[02:51:59]  first paint um 409 and it's all the same because it's async rendering this is this is gonna i imagine is very very similar to the kind of scenario that
[02:52:12]  we're gonna that we see with something like astro right um just to kind of do that let me just get an idea both of these interestingly are on dino deploy so
[02:52:21]  i think that's kind of interesting um let's give it another go yeah same idea right first paint and contentful paint and that all around yeah so yeah yeah so we
[02:52:43] 're using 310 yeah okay so this is the same kind of ballpark scenario where you you have about about the this thing have the assets all load in first content hydration is
[02:52:53]  something that i wouldn't mind seeing but i guess it's hard to compare apple apples because we're not doing the recursive thing but yeah it seems about in the range right
[02:53:00]  so this is pretty typical um for this right we can take something like um remix and kind of look at the performance profile here and let me choose oh that's really let
[02:53:15] 's try that one more time better there we go no it's still not better let's keep doing it again this one's not on dino so i think that might
[02:53:30]  be actually the biggest difference here i've been pretty impressed with you know this is cloud flare okay yeah i'm not i'm not getting what i want here unfortunately um let's
[02:53:44]  let's not trust my local profiling that much more oh there we go here we go 340. i think the biggest thing you want to notice here is is kind
[02:53:53]  of like the difference in hydration kind of timing let's see let's look here that's interesting i'm not seeing much in the way of hydration here although i know this works
[02:54:11]  we tested it yeah that's interesting because it looks like the hydration stuff's happening here which is why is the first paint delayed is interesting because like if you look at the
[02:54:24]  the timing this is this is probably the hydration stuff happening here but if like compare the timing to like when i was doing remix you do the first paint then you see the hydration
[02:54:36]  stuff here right um that's interesting okay okay right very different timing than the other ones okay let's let's just run a few page insights you know just just kind of
[02:54:52]  getting get an idea of where where where we're at um these are always kind of fun to do um i'm kind of curious actually um for completely different different reasons because as
[02:55:03]  you as you as you all know um there is that terrible terrible page that i have here right so i'm gonna run solid right right off the bat here because i actually
[02:55:13]  know i should run the dino version shouldn't i um yeah let's let's run the dino version or netlify edge is probably close enough let's let
[02:55:31] 's just do that version this page is just mean i'm wondering if the api people are ever going to block me from just doing this no there's no no there
[02:55:47] 's no uh only quick does that waterfall request thing um by default every every all the other ones just load the javascript that's needed right let's just get a baseline
[02:56:02]  and kind of work from here yeah you guys are all familiar with the the page of doom which basically is this single page app killer yeah yeah i i this this page is it
[02:56:13] 's brutal okay so it's it's hard for a single page app to get past 50 on it right um i'm curious what our hybrid where our hybrid state gets us
[02:56:26]  because i feel like that we're going to still pay the serialization cost and it's actually going to be a real cost here unfortunately um so let's let's let's
[02:56:36]  take a look here i expect an improvement over like the spa i'm using solid as a guinea pig so that i just know that spelt kit remix and them are
[02:56:46]  all about the same um i'm just kind of i'm kind of curious what the timing is here this this page is is brutal um because it's it's it's like
[02:56:59]  a page of 14 000 comments like um just to kind of put it on on similar yeah like let me like it doesn't really matter which spa framework you put in here
[02:57:17]  it's gonna be brutal quick is pretty good but marco is probably i'm gonna pull quick up in a minute quick quick i've had some issues with quick server rendering performance
[02:57:30]  like i think they've improved it i've got some improved stuff and i was able to do the recursive thing i i i'm worried about this page can cause workers
[02:57:39]  to time out sometimes okay so yeah there's i am there's there's something that we're gonna run that again but i i think we still need to oh yeah something is
[02:57:53]  hitting the apis hard right now because nobody should be scoring no one should be scoring 22 on this let's let's see what's going on yeah i wonder if
[02:58:08]  the apis are being slow to respond if it is what's going on and because we've we've run this many times before well yeah okay okay yeah so we gotta okay
[02:58:23]  so we got some stuff to investigate perhaps okay yeah let me pull quick up um just because i can although quick's interesting because they don't load anything so they kind of
[02:58:37]  bypass this test a bit but then if you if you if you if you've ever seen like i i need to make this so it loads it eagerly because if you've
[02:58:48]  ever seen this like can i can i show you what i've shown this before i take throw slow 3g and i like load this you're like okay whatever it takes a
[02:58:55]  while understandable but the thing that that that always kind of gets it is is for a page like this which has a sentimental interaction you should preload it but if you don
[02:59:08] 't this happens you click it and then i'm talking to you still and you're waiting and it's loading and then eventually it collapses so um that's kind of the trade
[02:59:18] -off that that that can happen if you go too aggressive here um so like that that's the my quick example i haven't figured out yeah and this is very low
[02:59:29]  for quick yeah i think what we're having right now is we're hitting uh api um we're hitting some kind of api throttling thing happening here because let
[02:59:40]  me see if i can pull up something like marco actually maybe just even just the current let me pull up see if i can pull up like marco six i imagine
[02:59:51]  where we've hit i think the maybe the apis are talking either that or something has changed in page insights since i last checked so let's let's see what's going
[03:00:04]  on yeah yeah yeah i think i think the external data uh api so far it's been it's usually relatively consistent within the same zone yeah okay so maybe we're
[03:00:18]  just at a point right now yes where everything's a little bit slow because it's still kind of proportionally in the right place let's try i got one more right now
[03:00:29]  i got astro astro solid yeah because this one's actually one of the higher scoring ones too because again it it tricks it by using idle load time right but not
[03:00:44]  loading the scripts up front and this seems to play with into into into it but i am actually curious because i am seeing really fast render times but then i'm seeing an interesting
[03:01:02]  thing i'm gonna try this one more time yeah astro 66 marco 74 yeah so remix 39 what i think this let's okay yeah know what i want to do
[03:01:24]  i want to use something else here um to check this out because initial response time is good yeah sometimes i'm i'm confused by this because it's telling me the first
[03:01:39]  contentful paints at 6.6 seconds but but like there's no there's no good reason for that so let's unless data serialization is that expensive we can scale
[03:01:52]  down the example we can we can try let's let's let's well let's look at it let's let's let's view this let's view this for ourselves right
[03:01:59]  let's just take a look here um and view this for ourselves okay okay what are we seeing because the responsiveness is pretty fast it's no throttling what's
[03:02:23]  going on yeah there's something interesting about fresh's profile that i've never seen before and i think i think this is something see how this javascript all runs before
[03:02:38]  it registers the first paint event this is highly unusual um which is which is interesting i wonder if it doesn't on other pages too like i wonder if the page actually loads
[03:02:52]  fast but lighthouse isn't reporting it properly let's let's let's try something let's try something else on this page um yeah let's let's use the let's let
[03:03:03] 's use the astro version because that's probably going to be the closest to to what we're we're looking at okay because it should have a similar like island timing
[03:03:19]  profile kind of thing okay yeah okay so there's some initialization stuff then there's a big layout piece and then there's a paint and then there's the hydration okay
[03:03:39]  well hmm let's try this one more time well i hope not we just did dino deploy right it looks like i'm not seeing okay let's i'm gonna let's
[03:04:00]  do this one yeah this is interesting sometimes you find weird stuff on these timelines and it always it always kind of gets me interested because like one point at astro i had
[03:04:16]  we had accidental script tags mid-page which is causing early paint flushes which actually was good for performance but it was completely unintentional and um i've been kind of curious
[03:04:28]  ever since then to see if there's like actual notable differences on these timelines okay yeah marco is just kind of stupidly fast but i mean we expected that um okay
[03:04:49]  yeah see like it's usually this is this is kind of the typical profile like if you look at if you look at this there's the page loads you listen scripts and stuff
[03:04:57]  but there's a bunch of tasks layout rendering because this page is stupidly long then you see a first paint and then you see some scripts that happen for hydration right if
[03:05:05]  i follow um astro with solid it's a very similar thing we see this we see a bunch of rendering and then we see first paint and then we see a bunch of
[03:05:12]  scripts of the hydration all right and if i take something like remix same deal this um sorry let's let's get a bigger page on them you know this is a single
[03:05:22]  page app the hydration is just going to be much much much bigger but it's the same it's the same thing again um but what's really interesting about the fresh example is
[03:05:42]  this stuff happens here then there's the layout and then the first paint so it's like i'm is there is there a place i can't trust this is what i
[03:05:53] 'm getting at um i'm positive the first paint happens earlier we saw that even on the on the timelines so uh let's go to what was it what's the other
[03:06:07]  one it's web page test.org and actually let's let's do let's let's do let's do something a little bit different slash video okay let's actually um
[03:06:20]  try this um with a more detailed timeline to kind of get an idea of what's going on because yeah um yeah let's do that let's take let's try to
[03:06:35]  choose which ones i want to take for for for this um not worried about quick let's take fresh let's take fresh let's take um let's just take solid spa
[03:07:03]  something that's not even probably particularly performant i guess i could do because i want yeah i'm just going to take solid actually let's let's let's do let
[03:07:20] 's just do this one and then i need to make sure that's on the same page slash stories slash and then and 4g and let's just actually i'm going to
[03:07:38]  add one more i'm going to add uh marco probably just just because i want to see almost like a baseline okay okay let's this will take a minute appreciate i
[03:08:01] 've probably lost a few people over the course of the stream but just just this is a just curious obviously um anytime you you kind of play with something new you're going
[03:08:14]  to discover some things these are all actually on dino um i think through netlify maybe for one of them but i believe they're all from dino well
[03:08:37]  i guess the problem is solid marco versions do streaming so the the timing might be a little bit different yeah the the thing is that the netlify edge is dino
[03:08:53]  and i'm positive that i'm pretty positive that i that we didn't we didn't we did marco on the dino edge stuff because um we were doing all
[03:09:04]  the request response stuff and um yeah we hadn't got the serverless function stuff going i just created benchmarking game show yeah that's the problem is i don't usually use
[03:09:17]  this one all the time because it uh like went out on stream because it actually takes a little bit to actually calculate like what's going on um it's it's it
[03:09:25] 's it's a little bit more how should i put it trustworthy than page speed from lighthouse because i feel like what we're seeing here on the fresh stuff is is like like
[03:09:38]  i don't know maybe they they truncate the timeline but they're saying initial response 0.8 and then they're showing this timeline where the stuff's like right
[03:09:48]  there and if you look at let's say um solid okay it's just 1.7 like it's within the same range and then again okay so this one's good
[03:09:58]  but we're streaming so we don't see the content right away where is where's it gonna remix initial response 1.1 what i'm getting at is and it's a
[03:10:08]  little bit further down too why it's the first console full tape paint delay that's insane here right like solid 3.2 remix 4.6 6.6 here even
[03:10:23]  though i can see it like this this metric is not getting reported properly perhaps right like if you can see it this early it should be in the threes maybe even the tw
[03:10:39] os so yeah i think that's i think that's interesting to say the least yeah see this so oh yeah right the marco 6 doesn't support streaming yet interesting okay
[03:11:06]  so what i got here on this run was solid rendered first but it's streaming it in and then these two came in around the same time probably because the data serialization
[03:11:16]  and then marco one because it has less data serialization that makes sense to me and then let's let's let's look at the filmstrip and let's actually
[03:11:30]  change it to show no not largest contentable paint let's let's let's look at document complete how does that change the timing a little bit longer let's add fully
[03:11:49]  loaded interesting okay sorry did it did i reset fully loaded fully loaded okay okay so what's what's going on here huh interesting yeah that data is i i need i need
[03:12:23]  to compare it to more things but it is suggesting though that the first contentful paint is happening that late okay so my guess if i had to make a hunch here is
[03:12:39]  the data this is what we're seeing is um data serialization cost um it might be just slightly more expensive than whatever approach fresh is using for data serialization data serial
[03:12:56] ization maybe and it's it's pushing this back a fair bit um right because obviously i jumped straight to the death test right obviously i if we if we if we pick something
[03:13:04]  much more reasonable like say here um this is easy hundreds right um so i'm trying to uh yeah it's it's it's it's it's yeah one one
[03:13:28]  one one one one that's very nice um yeah i might i'm gathering it's hydration it can be some other stuff too like um part of it could be loading that
[03:13:40]  serialized data um and yeah but yeah it's it's probably hydration it could be it can also be i mean we can look we can look at the timeline here again and
[03:13:52]  see like i don't see anything particularly outlier here in terms of total time um so i think yeah i mean this is 1241 like there's there's nothing particularly
[03:14:07]  bad here um locally so i've i've i've actually had similar issues with astro taking this time i'm not i'm not sure what the difference is between fully loaded
[03:14:19]  and document complete because if i go document complete uh like i could actually it's pretty similar last change no that's basically the same as first paint the recursive comment stuff
[03:14:42]  would actually we don't have here on the fresh one that one would actually improve performance because it reduces serialization that's why marco is so far ahead it is generally the
[03:14:53]  serialization cost but what's interesting to me is i was expecting these to be about the same you know like and it looks like fresh actually comes in a bit sooner maybe
[03:15:04]  the time solid does for the streaming like slightly we're talking like very i don't know what the exact timeline is but yeah this is this is interesting okay i mean if people
[03:15:17]  are gonna bear with me i want to do one more i want to go back to here and do one more um it's always good to run these things a couple times too
[03:15:40]  um brian this one we're gonna run just the two of these one more time i'm gonna put astro in just to kind of get a that's probably the closest
[03:15:58]  to similar yeah but yeah the recursive client hydration but like solid has the recursive client hydration too right any single page app has the recursive client side rotation um the end
[03:16:20]  that means they have to serialize all the data and stuff so i mean yeah we this this is probably worth i i it's still early and i think like i usually
[03:16:35]  like i don't click on here usually because quicks in the past at least its serialization costs are actually the worst out of all the frameworks i didn't like showcase
[03:16:49]  its highlights i'm just i'm just i'm just kind of a little bit curious like this page again this is like stupid test as usual because you know it's it's
[03:16:57]  kind of derived but i'm just kind of curious because i'm less curious about this as as i mentioned before as this timeline that puts the first paint the first paint after
[03:17:10]  the fact is kind of crazy right like why why would the first paint sorry it's not let me get over here be like why is the layout like there's nothing there's
[03:17:22]  nothing happening over here like if i zoom out far enough i know it's hydrated and there's there's there's nothing there's nothing running over here like but there is
[03:17:35]  a bunch of scripts that run before the first paint event which is very unusual yeah oh yeah the astro one is yeah but you know what's funny about the client idol
[03:18:01]  i think and that's kind of why i'm testing this here um the client idol yeah the client idol will actually come and bite you usually on this part of the test
[03:18:16]  because it'll it will take longer yeah yeah okay i i have no explanation for this i'm pretty uh let's look here well the timeline looks better here i don
[03:19:02] 't have to see in uh that much javascript execution to be fair see on this side we have fresh on this side we have astro astro is doing a whole
[03:19:11]  bunch of hydration stuff at the end that's why it's taking so long but on the fresh side what is coming up here hmm hmm because the idol just pushes back work
[03:19:43]  if if if if if if if any of you are wondering i'm going to jump back in my history and see if i can go back to this timeline yeah between the three
[03:19:53]  three visually complete solid takes the longest makes sense or depends i guess it's close enough but then full on load time cpu busy time yeah i think this is probably worth
[03:20:10]  more investigation it's not very clear something on the client side of fresh is not happy here as well so it's both the weird delayed first paint and then something on the
[03:20:30]  client side yeah i know yeah yeah it's weird that the first paint is delayed um but it's also a little bit like this long tail is unusual too so like like
[03:20:52]  the thing that's kind of uh let me explain this a bit see marco's async like this one which is why like the problem is with stuff that renders
[03:21:03]  async you you load everything at this point you get the page you start loading the document and usually like it is a bit longer like with streaming we're already doing a bunch
[03:21:12]  of work at this point so like this can be shorter because like the page actually loaded back here and it's you know loading assets doing stuff getting javascript warmed up
[03:21:21]  doing all that so when we get to hydration time we're actually like kind of covering things so it is natural but this is still like a little bit and if i fast forward
[03:21:29]  all the way to the astro ones which is also async these are both async again like marco it's about four and this is yeah i don't know
[03:21:37]  it's just like a little bit not much but it's like it's it's it's a little bit so yeah no i i don't i don't i don't
[03:21:49]  well maybe i actually let's let's look at let's look at what what we're doing here let's look do we get any kind of thing because i don't think
[03:21:59]  so it looks like the script tag is inlined and it's at the bottom of the page which is good and then you have type module which is where the hydration happens okay
[03:22:11]  so revive which is hydrate doing this so technically speaking everything should load in before we should get our first paint hit the script tag and we should be we should be good to
[03:22:23]  go so this looks all fine from from my perspective it isn't doing any idle loading like if you look at astro's code um it's doing i mean this is
[03:22:37]  because of the recursive hydration we got like a lot of these um but it's it's doing like you can see these there's like there's there's code to delay
[03:22:52]  it unless well i guess we can look at what fresh does but it looks from what i can see that it just es6 straight up imports the comment at this point the
[03:23:06]  scripts module so this async timing just loads in or deferred timing i guess technically it loads in you know when the document's ready pulls in these files like there's there
[03:23:18] 's there's no lazy loading or anything here it's not like like after you saw like the promises and stuff i think this is just like client load yeah i mean this
[03:23:32]  is a single page app but trick but i i mean i think it might hurt like if you're already doing the work to to like do islands and reduce hydration costs i think
[03:23:45]  like this would hurt like if you don't know if you want to be able to do things like that you don't want to do things like you don't want to
[03:23:51]  be able to do things like that you don't want to be able to do things like yeah well lcp yeah i mean lcp is useless on this on this
[03:23:56]  one because uh because like there's so many content there's so much content on the page you get like i'm pretty sure lcp is based off visual page so basically
[03:24:04]  if you load two stories you have lcp and the page is like you know what i mean like anything else in the head let's look head link link link meta
[03:24:20]  meta script preloads for no actually this is not preloads this is just entry file and island code okay so it's just the javascript code loading in
[03:24:42]  the head yeah it's not it's not lazy this is it yeah this is all in the head in astro yeah yeah no it it looks eager like like i like i
[03:24:57] 'd expect if that makes sense um see if i can actually look at the marco one here script yeah that's the all the islands yeah async type module support streaming
[03:25:18]  eventually if it doesn't need to be yeah no this this looks the fresh one looks pretty much what i'd expect it to look like yeah that's interesting i mean we
[03:25:32]  can mess with it a little bit i mean i'm probably getting kind of long in the stream here but what we could do the browser flushes when it hits uh when it
[03:25:42]  hits a script tag yeah so we could we could we could do something like we could do something like on this page before we like draw all the comments in we could do
[03:25:59]  something like just like get the like maybe i'll just put in the nav like let's see if we can force an earlier first paint like just just for fun like we
[03:26:10]  can go the layout here and then after the after the header before this we can just do like script no fact it needs to contain anything this is a good question but we
[03:26:23] 're just going to put a script and this will be a synchronous script which which will tell the browser that it needs to uh um flush paint right away so yeah we're gonna
[03:26:37]  have to deploy it to check so we're just gonna do like uh force early first paint see let's see what this does let's see if this works okay i think
[03:27:05]  this is we were looking at the performance profile here yeah okay let's try this timeline didn't do what i wanted is it deployed yet no it is it's right
[03:27:40]  here maybe i actually need to put something in the script like maybe maybe maybe a blank script tag isn't going to do what i what i what i want maybe we have to
[03:27:52]  actually execute javascript because this didn't pull it forward at all what what module is this that it's evaluating forever anonymous function can we look and see what code we
[03:28:15] 're running it's probably all minified but what what what is this okay this is html what okay sorry let's let's look back at the performance profile and
[03:28:45]  see if we can load oh right because it's what they're saying is this is a script that's that's on the actual page it's it's it's it
[03:28:57] 's it's this big hydration blob let's go back to the interesting um yeah why is this it's running like you think to get down here it would first paint would
[03:29:33]  have to trigger but it's like running before first paint this is exceptionally weird okay we're gonna try one more thing here okay and make the inline javascript do
[03:29:45]  something like uh like uh let's just maybe have it do a query selector or something something that would cause it to have to like check the page right something like escaped
[03:30:09]  or something i think it we just like document get element by okay okay something that would cause it to read i'm trying to think of what's what would be a good
[03:30:35]  one let's see if it's actually even works properly because let's look at our localhost are we getting a okay we are let's it's funny every once
[03:31:09]  in a while you come across weird things another weird one for me is next js does the exact opposite to this okay that's more promising it's this script split at least okay
[03:31:26]  let's let's let's try and deploy this actually yes if i'm not i'm trying to stream but it reports first paint a gap between first paint and largest contemporary
[03:31:40]  paint which makes no sense when it's an async render i'm i'm constantly confused by next for that reason um yeah okay let's let's try this one okay
[03:32:06]  okay and then let's try this success you see first paint's up here now and the saddest thing about this is this stupid hack which we shouldn't do again i
[03:32:36]  don't know but what it's going to do here stories good for me 3.01 pro have this practically memorized at this point um this is just to show you how
[03:33:13]  much if i think is right how much next js or sorry how much lighthouse weighs in on the first paint no okay only only slightly better yeah okay okay okay well that's
[03:33:27]  still not too helpful but it changed our local timeline we can actually see the first paint happening here now instead of at the end it actually splits the layout yeah that's that's
[03:33:40]  that's interesting to say the least that um yeah that is that is very interesting to me yeah that is that is very interesting to me hmm you think the first paint event
[03:33:57]  would generally happen before all the scripts run at the end of the file but for some reason it doesn't yeah it doesn't in the typical place anyways i'm i'm
[03:34:07]  i'm i don't i think i think i'm done playing with this i don't i don't know if there's anything else specifically we we can do yeah make the
[03:34:14]  flesh component um i'm just gonna remove this and just go back to you know i'm gonna go back to where we were but yeah it's interesting yeah i don't
[03:34:32]  know as i said sometimes you get these weird side effects when you when you do rendering on the web as i said next js for some reason reports early first paints always maybe it
[03:34:43]  does something like that but i mean the html generally being returned here looks pretty normal um yeah i wonder what revive is doing i'm gonna assume revive is their their
[03:35:10]  their hydrate because it it takes in a keyed component and i'm gathering this is the name comment and so that they like they take the component island take the comment
[03:35:24]  and that key is probably used somewhere or without and they connect it to the data and do the hydration there's any other code in the page so they they basically just in
[03:35:36] line the hydrate script it makes a lot of sense i'd look at my build folder to kind of reverse engineer it but there isn't one i mean so you know
[03:35:49]  i mean we can that's what the browser's for right you can look at the minified code see what we're dealing with h is revive here we go h looks
[03:36:13]  for stuff that matches a certain pattern probably for hydration data breakpoint any of this oh i'm in the response i want to source at this point let's let's
[03:37:06]  let's see here because if we refresh because if we refresh hopefully we'll hit a oh right because i i uh i redeployed which probably screwed that up okay let
[03:37:21] 's let's try to get in here just the reason i'm doing this breakpoint here is i just yeah so i mean the page is here when hydration starts right like let
[03:37:34] 's try this again this is called per interesting i wanted to where's the h is revive h e function t t of document body okay let's let's go there
[03:38:03]  what okay wait wait you guys might be onto something something not working properly oh it's weird when i breakpoint here the page okay see it's like still loading and then when
[03:38:25]  the load times out it like fails and then when i continue i'm curious okay no that's fine it's just the pausing yeah it's part of those load characteristics
[03:38:54]  though that are causing it like the page is still loading according to the browser while the yeah this is interesting yeah thanks for looking at it i think this is something that we
[03:39:13] 're just going to have to figure out in the future here because it's it's it's it's curious just to say the least yeah i think that's right yeah
[03:39:30]  i mean module type our scripts of type module always get deferred to the page load event generally but i don't know why the first paint would get pushed back so so so
[03:39:39]  so very weird okay well definitely uh definitely uh definitely uh definitely some some interesting stuff going on in general though i look forward to to be able to get the uh recursive
[03:39:57]  hydrated version of this up and going in the teacher i think i think the interesting thing for me about fresh was i kind of i'm i'm also hi cousin yes hi jon
[03:40:10] athan i didn't actually notice at first i was just like oh yeah this could comment and then and then it's like um yeah what i was gonna say is um yeah
[03:40:22]  i'm just gonna make one more banner right here so i can break it up later i'm just gonna kind of give some overall thoughts now on on fresh and what what
[03:40:37]  i've seen so far i i think that having everything in the jsx is is really kind of cool um the one thing that became really immediately obvious to me when when looking
[03:40:51]  at the structure um of just doing the islands versus like it's funny because you've seen it with dot server but the islands approach it just makes it so obvious that everything
[03:41:02]  else is server do you know what i mean like you don't have to worry about it in the same way and have a bunch of like interlacing files and different like
[03:41:10]  dots or dot client and all that and and it very strongly says server is our default right i mean obviously saying dot server um is is a strong way of saying that but like
[03:41:23]  if you ignore the islands folder for for a minute everything here is is server and i think what's really cool about that is if other frameworks wanted to adopt islands like js
[03:41:39] x frameworks like remix or solid start this is kind of an interesting pattern because you you you do it in two steps you go to your root tsx and you remove the
[03:41:52]  script tags and then you'd have like an islands folder specifically and then just pull in the island components and that transformation doesn't seem too crazy right when i was looking at ast
[03:42:07] ro and marco and all that i was always like oh man you know this is like such a perfect environment for this everything's set up for it like it's worlds
[03:42:16]  apart in your in your thinking but this is the closest i've seen to like a full jsx solution where like like it does the stuff and it just feels and and
[03:42:28]  it feels like it just kind of works really naturally um i think getting used to dino is going to take a longer time for me though i i like looking at build outputs
[03:42:44]  i i like looking at source code in my node modules so like having it missing and there's probably ways you can do it and people are mentioning of using extension was really
[03:42:53]  really really strange to me i'm not gonna lie i was just like i was just like okay if i hover over this and i hold command and i can look at the code
[03:43:03]  okay okay so that works okay so yeah it is it is it is doable um i was just having trouble with this earlier for some reason if i go to fret okay yeah so
[03:43:15]  a little bit of getting used to it actually seems to be working now um so we can we can trace into the code to see what's going on um but yeah it
[03:43:25]  was just i i i like debugging things i'm kind of old school you some of the console logs so like having the ability to kind of just kind of go in it's
[03:43:34]  something i'm used to i'm not used to having i know yarn 2 did this too a bit or like i'm just not i'm not used to having my modules a
[03:43:43]  pmp m had a version of anyways i'm not used to having my node modules go away now i'm used to not having my build output to look at um so
[03:43:51]  it it definitely like took me like a moment there but once you forget about that um as i said the the the setup here is really natural um didn't worry too much about
[03:44:02]  import maps yet but i can see how that can work it doesn't i know it's like no config but i mean i count multiple fig files in here so like that
[03:44:12]  part isn't a different so i mean people can sell on that if they want to but to me this is this isn't really the no build thing doesn't really matter at
[03:44:24]  all um from where i'm sitting but you know i did mention the ebay use case at the beginning but in general it felt like taking down a modern framework kind of
[03:44:33]  starter um obviously the docs are going to are new and we got to do some work i i i i i play a lot with new frameworks so you can i'm used to
[03:44:42]  that you know like i built the quick hacker news before they had any docs so um it's perfectly kind of fine um and i think i think things are coming around i
[03:44:51]  think it's really cool that dino is kind of embracing this first class i'd love to see more frameworks take on this i i think the pattern here with the islands folder
[03:44:59]  is actually just really really makes a lot of sense i guess that's that's my biggest thing obviously i look forward to better docs um in the future i look forward to um
[03:45:07]  giving that recursive hydration so i can finish this example out and i think that in general um it's as i said it's kind of funny i was copying stuff from
[03:45:19]  astro and from solid and from remix coding in these uh frameworks is all really really similar for like the view templating part of the code um so yeah there wasn't too
[03:45:31]  much to get tripped up on um it's kind of funny how we've kind of developed out that way you know some people are like oh closer to html but
[03:45:37]  i don't think frameworks that are closer to html actually can offer that same experience if i'm moving between view and stealth i actually have to change my code a lot
[03:45:46]  more so it's it's uh it's it's kind of it's it's kind of interesting um uh it's all just templating but that's one thing that
[03:45:54]  i've kind of noticed from doing all this but in general i think i think fresh is a little bit early but i think it's i think it's really cool i think
[03:46:01]  what it's doing um is very timely and i think it's the right kind of thing to launch um um deno or dino with um yeah so any questions
[03:46:16]  before we wrap up the stream i'm gonna take off banner yeah i'm just gonna look what i got here what if hydration is screwed and it was only once friends on page
[03:46:27]  that's what i was suspecting for a moment which is why i put in the comment uh i was trying to break it there but i actually i mean it's still
[03:46:35]  possible something like that's happening um but but i i i don't i don't know if that's what it is when i was hitting when i was doing the breakpoint
[03:46:48]  i was hitting um i was hitting basically the page load failing uh i wonder if there's something that i can put further down to kind of debunk that but my gut
[03:47:04]  is that's not what it's happening like i i see hydration happening here i think this looks this is calling remove child here maybe yes it's s maybe we should maybe
[03:47:23]  we should see if it actually gets in here removing some stuff but i think it's it looks like it's removing um maybe their comment markers okay but yeah i i have no
[03:47:39]  reason to believe that it's it's that's what's going on but that's that is another reasonable um thing but you'd still get the first paint the thing is
[03:47:52]  even if it if it painted and then did like the really bad hydration of removing and painting and you get the first paint score something something is weird there the way you know lighthouse
[03:48:00]  is reporting it the way something's going on yeah i mean i i i guess so to me almost almost all the the next generation of frameworks do this um pretty well uh
[03:48:21]  where they where they put the request response model right in i mean remix is an obvious example but so spell kit um solid start yeah i i think i think there's some legacy
[03:48:33]  there but almost all the new ones that came out kind of edge first in the last year or two are very much on the same page here um next and nux have
[03:48:41]  a bit of a longer legacy but i think i think i think all the new ones had the benefit of having the spec in the browser and having all the runtimes converge on
[03:48:53]  it so um i don't know if i saw anything particularly unique about fresh in that sense but as i said as a as a dino launching thing i think it's
[03:49:02]  great i think it's it's it highlights what they should be highlighting you know mpas are just better at the edge um you know than other places perhaps and then just being
[03:49:13]  able to be lightweight preact is the one of the lightest feed on libraries it just it just carries the message really well yeah yeah yeah it's definitely an optimization technique
[03:49:27]  and it's it's it's it's something that like we use a lot at ebay and with marco and so that's why i was very i was very familiar
[03:49:35]  with using this pattern and it's funny as i said that dan abramoff article preparing people for react server components talked about it um it's what's interesting about it is
[03:49:45]  it's also something that i'm hope and the marco team are hoping in the future just goes away right it's it's components and the need for components which causes
[03:49:55]  this need for the structure right it's like that's why we have all this hoisting thing is because components have a runtime element and that's why you're seeing frameworks
[03:50:03]  like solid and quick and marco basically get rid of the runtime element of components so that they don't have to play this game um as i said quick is very quickly catching
[03:50:15]  up to where where marco is and where marco is is kind of crazy they've been able to use the reactive graph um similar to solid and basically just split everything up
[03:50:26]  that way and these kind of optimizations like i'm showing here you in you know how we did the island moving trick in marco you literally just write the code and the
[03:50:34]  compiler automatically generates even stuff more optimal than what we did with the with the recursive partial iteration it just it just works automatically you just write like normal code like your react app
[03:50:45]  and it just does that right so i think i think that um yeah i think these optimizers are great i think they're going to get it even better to the point
[03:50:55]  that people won't have to worry about it and they'll happen automatically yeah you mentioned the compiler exactly only thing i think for solid start that might be interesting here is if we
[03:51:09]  ever wanted to do that mpa we're going to have to do that we're going to have to do that and we're going to have to do that and we
[03:51:16] 're going to have to do that and we're going to have to do that and we're going to have to do that and then we're going to have to do that
[03:51:21]  and we're going to have to do that and then we're going to do it we're going to have to do that and then we're going to have to do
[03:51:25]  that and then we're going to have to do that and then we're going to have to do that and then we're going to have to do that and then we'll
[03:51:30]  have to do that uh it's an effort it's not far we're going to make an mpa framework right this second to do that or can you just go use
[03:51:38]  astro i like i have bigger fish to fry when there's good solutions out there and i think this becomes the most appealing to us when we actually accomplish that that thing that
[03:51:49] 's better than islands the thing that quick does the thing that marco does um i so i'm but it's gonna take me a while to get there so what i
[03:51:59]  suspect actually is someone will just write a beat plugin to do this and we'll just slide it in and it'll just work and that's why beat is so amazing so i
[03:52:08] 'm not actively looking at adding mpa mode of partial hydration to solid start but looking what i can see here i think i think someone could do it relatively like in a reasonable
[03:52:19]  way if they wanted to do the work of making an mpa framework um and if you're just making it for solid i'm sure that'll be less effort than trying
[03:52:27]  to like like you know do something astro which works for everything but it's not my personal priority but i can definitely fresh gives me an insight on how we can just like
[03:52:37]  add this to the check mark do you know any solutions to prepare parts of the component build time basically reducing that uh depends on what what you're talking about there's stuff
[03:52:53]  like prepack from facebook um which was kind of interesting which uh like pre-calculated stuff it could and like reduce the javascript but i think the biggest savings
[03:53:05]  you can make right off the bat here is just looking at stuff like these partial hydration frameworks we didn't focus on it too much here but they essentially know that some part of
[03:53:17]  the javascript only happens on the server and the rest only goes the client that's why it's so small here we only need to ship that comment component that's
[03:53:25]  why um fresh is so small on javascript load um compared to any single page app and those kind of optimizations um are present mostly are basically today only in multi-
[03:53:37] page apps you lose the client side navigation because of the tree hierarchy and i've explained that in other streams so are there some if you're looking at solutions to reduce j
[03:53:46] avascript load in the browser so like less hydrates less runs in general um yeah uh i would say on the mpa side there's quite a bit you know i mentioned
[03:54:00]  them astro marco quick um i think what's interesting to me as i said is is this escape from components um when you escape from components and use something like react
[03:54:13] ivity like solid scales on interaction not on component size not on view size like yes the template gets bigger than with the clone but if there's ever a partial hydration story you just
[03:54:24]  not shift the template so it's only the interactive points that actually ship any javascript like if you see a solid app like if you make all static html
[03:54:34]  there's basically no code it doesn't matter how many like the component calls are basically no ops like they just call one function like it doesn't matter how big your page is
[03:54:45]  um it's it matters how many points of interaction and i think i think that mindset shift and using compilers to support that is basically how we're going to accomplish
[03:54:57]  these things more so yeah exactly we have the fresh experience and i i think it's interesting people like uh um alexis and solid community has already made a solid kind of
[03:55:13]  thing this called solitude which is basically a uh um an islands architecture made all with solid components but i think i think it'd be really interesting to see this almost as
[03:55:25]  a beat plug-in that you could just slide right in disappearing application now we we hope as i said i think the most successful at that so far is marco upcoming mar
[03:55:37] co 6 it's it's as i said it's not even close right we looked at this right marco 6 for this which is um which is like 70 kilob
[03:55:46] ytes in a react framework like next um is 1.6 kilobytes and for information here um someone actually wrote the code in vanilla javascript with server rendered to see
[03:56:02]  how big this page would be and obviously that's fairly easy to do you can just use a selector and add each comment thing and it was about 200 or sorry it
[03:56:12] 's about what was it 400 bytes no it's yeah sorry it's about 300 bytes so essentially um the marco version is is about six times bigger than the vanilla version but
[03:56:24]  like if you put that in the scale the marco version is also you know 35 times smaller than the next js version so like yeah i i think i think we're
[03:56:34]  gonna see more innovation obviously not everyone's gonna be using marco's compiler it's kind of space age and so i i worked on it and that's why i i know
[03:56:44]  that i'm probably i don't know it would take me years to reimplement it so i'm not it's not like the top of my priority list but i think i
[03:56:51]  think it's interesting and i think the more great work is going to go in there all right i think we're good i think it has been four hours wow and some
[03:57:02]  of you people are still here that's amazing um thank you so much for joining me today um um it was a lot of fun we got to learn some stuff and uh next
[03:57:11]  week uh yeah we're going to be back we're going to talk about uh solid's routing solution um and i think i we've been doing a lot of updates um and
[03:57:20]  this is kind of in anticipating stuff coming for solid start and uh i'm gonna have ryan turnquist the co-author of solid app router on stream with me
[03:57:32]  so you double ryan's and we can uh we can take you through routing and solid and what it looks like today what's going to look like in the future and um
[03:57:41]  you know all the all the cool stuff then it's more than that all right have a good one everyone um so until next time see ya