---
showLink: "https://www.youtube.com/watch?v=82dzMKZzHrY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JavaScript Frameworks - Heading into 2024"
description: ""
publishDate: "2024-01-13"
coverImage: "https://i.ytimg.com/vi/82dzMKZzHrY/maxresdefault.jpg"
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Sorry for a bit of delay. Just getting myself ready here.
[00:02:35]  But we're still going to preamble here for a moment anyways while people join the stream and we advertise that we're live. I didn't bought, it's
[00:02:43]  interesting, midweek we hit that 30k stars on GitHub and I did like a mini stream and I tested streaming directly to Twitter. I'm not doing that today.
[00:02:58]  I'm just going to go with my normal Twitch and YouTube combo but, you know, anyways, let's get this party started here in a minute. Okay, okay
[00:03:13] . Let's advertise that we're actually live now. I'm excited. I'm excited. I did a little bit of prep today. Although, you know, me
[00:03:23] , I never really get around to doing very much prep. But I think this topic, I like, you know, at least once a year checking in on what everyone is
[00:03:35]  doing in framework land. And so let's see if I can get this started here in two seconds. Sorry, just kidding. Oh, I see. Sorry,
[00:03:52]  give me two seconds here. Just a little bit of technical fun. My I wish my computer monitor was smarter to detect when I have multiple screens tech tapped in, but it
[00:04:03] 's all good. Let's see here. Let's get Twitter going. Okay. All right, so do everyone have a good new year? Come say hi in chat
[00:04:29] . If so, let's go here. Twitch TV slash Ryan solid. That's right. God, every time when I've been around a way a while, I
[00:04:51]  just like never remember anything. Yeah, that's right. Oh, right. The absent-minded professor. All right. All right, cool. But yeah, lots to
[00:05:07]  cover today. I'm pretty excited about that. I did this very similar stream last year. I want to do it again. It turned out pretty good. Can anyone
[00:05:18]  tell me if RSC requires a server? Yeah, maybe we'll talk about that a bit today. Last day, last time we spent a lot of time talking about this
[00:05:28]  general move to the server and talking about the tension between, you know, different approaches, different frameworks we're taking. Kind of as like a sub-context.
[00:05:35]  I think there's going to be a bit of that today because we're talking about JS frameworks and we can't talk about JS frameworks without talking about HTMX in 2024
[00:05:43] . So this is all kind of going to be part of that perspective talking about today. So, yeah. Yeah. Sorry for making people stay up late. Lots of
[00:05:55]  highs in the chat. Hey, Nate. All right. Good. Yeah. People come in all over. Hey, Alex. It's been a long time. Southeast Asia
[00:06:08] . Oh, yeah. This is like the worst time, isn't it? It's probably like two in the morning or something. Even three in the morning. Yeah
[00:06:16] . I don't even know. Philippines. You guys are in Peru. You guys are crazy. Ethiopia. Yeah. Oh, man. Thank you, Fuzzy. All
[00:06:35]  right. Yeah. There's just. Yeah. Happy Friday. I'm glad to be back. I'm glad everyone's here. All right. All right. All
[00:06:45]  right. I should have made myself like a little bit more prepared. You know, we got to get some Excalibur probably. Maybe I just need a clean slate
[00:06:53]  on Excalibur because like. I mean, there's a lot in this one. I could like just take over a different portion of it. You can just like
[00:07:04]  work somewhere out here. I know people like hate me for this, but I still prefer the whitest Excalibur to the black Excalibur. I
[00:07:15]  don't know. Hey, Greg, how are you doing, if there's some like leptos or WASM in general news, I'd love to hear about
[00:07:36]  it. That's a place where I got a gap on my knowledge. There's a lot happened in WASM frameworks in 2022, like an insane amount. 2023 hasn
[00:07:43] 't, I haven't heard as much. So when we get around to there, if you're still around, I'd love to have a little bit of input. Either
[00:07:52]  that or just like send me a message somewhere, maybe on Discord, if there's anything I should know. You prefer the white too? Yeah. Light mode for the
[00:08:02]  win. Yeah, that's awesome. I mean, I think you learn a little bit each time you try a different tool. You see like a slightly different perspective.
[00:08:16]  Yeah, light mode. Ooh, did I just blind everyone? I mean, to be fair, I think I did the video last year in dark mode. I don't
[00:08:25]  know. I can't make up my mind. Maybe I'll just like strobe it and make a lot of people. No, that's not funny. Yeah, I
[00:08:33]  feared as much. The year WASM after all. Okay, so I've got a couple of things, how we're going to run this today. First of all
[00:08:51] , 12th website, every developer must know. First of all, I got my article, which is a good baseline. And I think I'm going to look at my
[00:09:04]  last year's article too. Second thing is I want to talk about every framework I can, at least a little bit. Talk about what they've been up to,
[00:09:15]  where things are kind of heading. And I got to pick it. Everyone has their favorites, but I got to pick an order. So we're going to do hype driven
[00:09:22] , like prioritization. So it's going to be based on stars in the last 12 months to get an idea. That's how I'm going to order my conversation
[00:09:33]  on frameworks, right? This number is very, you know, it's a bit different for each framework, which means, as usual, we're going to start with React
[00:09:44]  pretty early here. But if you look, actually, actually, next.js is the biggest. That still means React's the winner, technically. I'm going to
[00:09:53]  focus around the main, like, framework or library or whatever the hell you want to call it, and then talk about the meta frameworks at the same time. Because usually
[00:10:02]  you can't really talk about them without the other. So React is clearly the first one on the list. But funnily enough, not because of React. Because Next
[00:10:11] .js is apparently the highest starred JavaScript framework on average over the past 12 months. Even more than React itself. Of course, it makes sense. React already has,
[00:10:25]  like, 220,000 stars. And Next.js had, you know, a bigger range to come into. They're at 117,000, which is not too
[00:10:35]  shabby. But we'll get there, right? I also want to, as I said, I want to talk about trends. I want to talk about some technical
[00:10:43]  stuff. You know, very important when considering the direction of the web in the future. There's been a lot of conversations. People don't get, you know,
[00:10:51]  where does HTMX fall short? God, can I just use islands and, you know, be done with it? I've heard a lot of interesting takes like that
[00:11:00] . And I think it's important that we kind of understand the differences here as they affect how we are going to purchase stuff in the future. Has web development gotten too complicated
[00:11:11] ? You know, these are all really good questions. So, you know, we're just going to roll with that. All right. Here we are. How are
[00:11:21]  we going? Just hi to more people. Where are we? Is there any book you'd suggest to become a better developer? That's an interesting question. I feel
[00:11:34]  like there was a time period where I would have had answers for that. But like for me, the book part of my journey was like very, very early, like 30
[00:11:44]  years ago or something. I'm kind of bad now. I kind of just do everything by doing. That's why I don't know. I think people maybe a
[00:11:54]  bit closer to it might be better at answering that question. I'm here watching for us both to be blinded by the flash. Sorry about that. It's funny
[00:12:12] . I used to watch streaming when with the little one way back. It was actually speed run streaming, a lot of bright colors, but not too bright, like a
[00:12:24]  lot of blues, greens, like Super Mario speed running. When my oldest was very, very, very young and we're up very, very late, I just like
[00:12:34]  turn on a Grand Pooh Bear video or something. Take you in my favor, Ryan. There's some pretty great Ryans, honestly. Obviously, Ryan Florence is one
[00:12:46]  that comes to mind, but there's also Ryan Dahl. I'm probably forgetting other great Ryans, but, you know. Now, I don't know anything specifically
[00:12:58]  about that. For me, when there's issues like security holes, sometimes they're systematic because, like, perspective, you know, on, like, what responsibility of
[00:13:10]  the library, the framework is. But sometimes it's literally just, like, like, someone will find a solution for it. So, like, these dramas are, like
[00:13:23] , oh, how did we not know? But then, like, afterwards, everyone, you know, you're kind of done with it. Hey, Johnny. All
[00:13:35]  right. I'm glad to see everyone starting to show up here 30 years ago. Okay. I like, I'm exaggerating. That's when I learned the program.
[00:13:43]  I turned 40 in 2023. So, you know, I've been developing in some sort since I was about 10. I was learning quick basic. I guess I
[00:13:59]  was, I was younger than that. My dad went back to school, to college. He was, like, an iron worker, and he decided to take computers. And
[00:14:09]  he brought, he started getting into programming. He showed me, like, quick basic. And then my uncle gave me some of his university textbooks. He was, like
[00:14:20] , the youngest uncle, you know. And, yeah, I want to say I was about 10. Yeah. I mean, it sounds about right. I feel it was
[00:14:29]  before 93. It's hard to say, right? Because web got big around 1994, and I was front door almost, like, immediately building websites. I started my
[00:14:41]  band in 1995, and, like, we all needed a website. It was the hot new thing. So, I got into HTML, like, very early on. Host
[00:14:53] ling is crazy. Yeah, I was thinking about developers, but, you know, Ryan Reynolds. Okay, fine. I look late 20s. Yeah. Do you
[00:15:03]  know why? Because I'm Canadian. No offense to Americans, but Canadians look younger. Just, I've noticed this. Just, it's, it's, it's
[00:15:10] , it's, it's, it's, it's crazy. Yeah, my, I did a stream right, I mean, I didn't cover the migration.
[00:15:30]  I did a stream showing the features and what it changed, is the best way to put it, right before I break, but migration's tricky because it's not because it
[00:15:38]  starts tricky. It's because the router is just not the same, like, it's, like, it's a different router. So, it's, like,
[00:15:45]  it's, like, it's just different. I think if you took current start and then took the old version of the router, like, version 0.9, you
[00:15:54]  might have an easier job migrating if that's, like, what your goal is. Anyways, anyways. Just, yeah, not as much sun damage. I'm
[00:16:01]  just, we're just, you know, we, we, we, we gotta actually get started on the topic of the day at some point, right? Let me
[00:16:16]  see if I can pull up, I had some notes that I, that I took before the stream, that, you know, are actually, means that I'm, like
[00:16:33] , semi-prepared for this, which is unusual. Uh, where did those notes go? Here they are, yeah. Sorry, just juggling the double screen
[00:16:44]  deal. Um, but yeah, as I said, we're just gonna kind of go down, we're gonna talk about the different frameworks. I think we should really start
[00:16:51] , actually, though. We should go back to 2023, um, article, which I released, uh, I think, December 29, 2022. Okay, so, sn
[00:17:00] uck in on the previous year. But, um, I remember this article because this is probably my most successful article of all time. And it only came out because, uh
[00:17:09] , Theo Brown, you know, T3GG, he was like, Ryan, what were your big articles of the year, blah, blah, blah. And I,
[00:17:16]  I noticed that in 2022, I had some good ones, but none, none, like, that really were ground shaking. And I, I was trying to give him articles
[00:17:23] . I'm like, yeah, this one's not right, this one's not right. And I'm like, and he's like, yeah, I'm trying to
[00:17:27]  do this award show thing. And I'm like, uh, I don't know. I'm just gonna write an article right now. And, um, so I
[00:17:35]  did. And anyways, it ended up being this article. Um, I guess people are interested in trends of stuff around this time of year. So anyways, uh, let
[00:17:44] 's, let's, let's, what did I predict? In 20, at the beginning of January, 2023, I basically made a few statements. Um, I
[00:17:54]  thought that wrangling in complexity was going to be the main focus of 2023. I, I, I was like 2022, we all showed which technology was possible, but
[00:18:04] , um, we have this kind of problem where all the solutions are kind of unwieldy. People are having a hard time wrapping their heads around it. Um, you
[00:18:13]  know, and it was, I figured people like, we need to deal with the complexity. What did I write here? Um, you don't dump a bunch of
[00:18:22]  innovation in space in a short time and not expect something to give. After a remix return to, it's just PHP rails for SP MPAs and, uh, single
[00:18:30]  page apps respectfully has been largely successful. Even if they both lack important benefits and more sophisticated solutions. Um, having time spent with quick Marco server components, like bunch of a
[00:18:40]  mess. And I think the tricky part is, I, I mean, obviously it's not hard to say that I was right here is we spent a lot of time
[00:18:50]  on this and a lot of people just were like, this is too complicated. And they just jumped ship. I'm, I, I showed HTMX here being like
[00:18:57]  the second most starred JavaScript framework, UI framework in, in the past year on average. But that doesn't really give it the right showing here. Right. Cause like
[00:19:08]  until June, like no one's heard of it. And then suddenly it's like, this is almost like bond bond went from zero to 30 K stars in like a month
[00:19:18] , month and a half. Um, this, this is very similar rise for HTMX, um, where essentially out of nowhere this summer, it basically just,
[00:19:28]  you know, took, took over, so to speak. Astros also had a very strong year. So like, this is, this is the thing we, I guess
[00:19:35]  we haven't succeeded on the, the, you know, more typical JS framework side and wrangling that complexity since people, people are trying to escape. We'll talk
[00:19:43]  about that more later. Um, but yeah, that was one of the big ones that I, I kind of predicted coming in over a year ago. The other one
[00:19:50]  was, um, I figured people would be doing a lot of stuff with edge functions. Um, uh, obviously because coming out of 2022, everyone's like, yeah,
[00:19:58]  we have edge functions. We have edge functions, but like, we weren't sure you can deploy to them, but like no one else could do much with them. Like
[00:20:06]  edge function, like we all have this idea of like, maybe like edge functions could just replace normal functions and everything could be on the edge. Um, it's kind
[00:20:15]  of obvious this wouldn't work. So I was hoping, um, that we'd have a lot of improvements here in terms of, uh, being able to develop in a
[00:20:25]  monolithic style, but then, uh, you know, be able to basically automatically distribute it across infrastructure. And we'll get to it, but we did have one example
[00:20:35]  of this being built into a framework this year. So we, we are still in its infancy. I thought we'd get further in 2023, um, but,
[00:20:45]  um, it at least got started. Um, other things I said, uh, will 2023 be the year of web components? I don't know. I wish, I
[00:20:51]  wish I should do like a Twitch poll. Does anyone think 2023 was the year of web components? Well, I guess a better question is, was it the year of
[00:21:10]  the Linux desktop? Uh, okay. So will 2023 be the year of Wasm? That's an interesting question, right? This is why I was like, kind
[00:21:27]  of get, see if, uh, if, uh, maybe I can sneak this out in the background of Greg could fill me in. Yeah. Oh, Greg wrote me
[00:21:43]  a whole, like article, like a few minutes ago. I got to like, thank you, Greg. I'm just like reading it off screen, but they pick
[00:21:53]  up some of the things here. He, he agreed that late 2022, like over the break into the like January or whatnot, February of 2023 is a big Wasm time
[00:22:03]  period. Um, most of 2023, uh, uh, consolidation, which is honestly what we've seen in most frameworks, but okay. Dioxys had enough full
[00:22:14] -time funding for full-time work for a couple of devs, which is pretty exciting. Ooh, Dioxys is adopting signals. Okay. We should talk
[00:22:25]  about that in a minute. Um, yeah, I'm, I'm just going to talk about this stuff right now. I'm going to put Greg on here. I
[00:22:33]  hope he doesn't mind. Um, because I'm probably not going to talk about, um, Wasm outside of this point in the stream. So I, this is
[00:22:41]  a good time to see, to get a little Wasm update. Zillum is a Rust native, a GUI framework in development that's with a bunch of support
[00:22:49]  at Google, right? First real Rust native GUI, not Elm, not React, not SOLID, but a secret fourth thing, kind of like Swift.
[00:22:57]  Um, yeah. And then Leptos, Leptos. I could, I could do a Leptos update later, actually. We'll do the Lept
[00:23:07] os update later. Although, um, yeah, yeah. I think, I think, I mean, yeah. Nah, I've got it. Here, Greg,
[00:23:22]  you get, you get, you get first shot. I said, I was doing a hype order, but you know, Leptos gets first shot here. Big server
[00:23:27]  function rewrite that supports a bunch of additional encodings. That's interesting. Right. So similar to the work SOL has done in CeroVal and QUIC.
[00:23:33]  I've done experimental work on more statically typed view tree, universal rendering, reducing sizes. Yeah. So some stuff in work, um, getting Leptos hello world
[00:23:43]  size down to 10 kilobytes. Awesome. Signals coming popular in Rust. Even smaller island demo hopefully coming this spring. Okay. Cool. All right. L
[00:23:57] eptos might come up again, but I'm glad to at least get a bit of an, uh, an update there. Um, I, I, I said
[00:24:04]  it was still a little bit early for Wasm when I made my predictions a year ago. Um, but, you know, I, I'm glad to see that it
[00:24:11] 's still coming along. I mean, this was quite the showing in the end of 2022 when it was like vanilla JS solid. And then like all the rust frameworks and
[00:24:22]  then like Svelte and view and lid and preact and everyone else. It was like, it was quite a showing. Um, but something else has happened, started
[00:24:32]  happening this year where other JavaScript frameworks are crossing the divide and, um, and joining solid up at the front, which we'll talk about. 23, the year of
[00:24:45]  boring maintenance. Uh, yeah, there we go. There we go. Okay. So, yeah, I mean, will AI no code take my job? No, but
[00:24:55]  it might help you migrate from one framework to another. Yeah. I see why this article did good. I was like a little bit, uh, spicy here. I
[00:25:02]  feel like I've, I pulled some of the punches on my latest article cause I didn't want, because I, I did, I wasn't prepared to summarize my opinions
[00:25:11]  on the, you know, the simple path of JS frameworks, you know, the HTMX astro side, um, uh, essentially in, in like a one
[00:25:20]  sentence or in an article, but that's what we got to stream today. So we can talk about this, but, um, I didn't, unfortunately did not
[00:25:29]  use AI to migrate anything. I was pretty optimistic that in 2023, we see it. I did, we did see some cool code gens and stuff, but, um,
[00:25:38]  I think the work into AI, um, is getting more interesting than I even saw in 2023. Anyways, that's basically what I was trying to predict a year ago
[00:25:48] . Um, my reflection on 2023 is a little bit different. We'll get to some of these topics anyways, but let's, let's, let's change gears and
[00:26:01] , um, talk about what actually happened in 23 instead of my, you know, predictions coming in and let's just start, let's just get into the frameworks.
[00:26:14]  Um, there we go. Having a new job in 2023 is good. A lot of layoffs in 2023. Um, on the other hand, uh, tough year for
[00:26:35]  tech. I'm not, I usually don't really comment much on the social side of things. I work purely on the technology, but, um, definitely was a
[00:26:45]  hard year for a lot of people. So, okay. So let's talk react. What, what, what, what, what was the big stuff that we want to
[00:27:06]  talk about for react? Um, I'm just going to give react a header here, react. And we'll just, we'll just kind of go from there.
[00:27:15]  Um, well, for react itself, I don't even remember if there is any big releases. See in 2022, they released react 18 or is it 2023 now? I
[00:27:28]  can't even remember. Um, it was, it was, yeah, it was 2022. They released react 18, which was like a big react release. And then
[00:27:35]  the real react 18 release happened in October, 2022 with next 13, end quote. Um, and, um, I, I think that what we've seen is react
[00:27:50]  been very aggressively pursuing canary releases where they've been like kind of sliding out all these new experimental features on people. Um, I expect that to continue, uh, honestly
[00:28:03]  with react. Um, I think the most interesting thing for 2023, um, with react is I want to talk about react server components for a moment, which is unsur
[00:28:12] prising to anyone here. Um, I even went to a conference where I went to a react conference to talk about react server components, which was react-a-thon
[00:28:21]  San Francisco, which is, was amusing because obviously I have nothing to do with server components. Um, but that was, that was, that was, it was definitely an
[00:28:31]  interesting to have a panel of myself, uh, Ben from Astro and Tanner Lindsley to talk about react server components, all people who generally don't use react server
[00:28:39]  components. Um, I know Ben's a big fan. I just, just in the general sense, but I think what the react team did do a good job of
[00:28:48]  doing this year was trying to at least get people to understand why they would even think of doing this crazy thing. I don't know if you guys saw this, um,
[00:28:57]  probably have, but like Danny Abramoff had a really cool concept for the talk. I don't know if the talk itself ended up as great as I'd hoped.
[00:29:06]  You could tell like it was more of a raw idea, like the first version and you might've need a little more polish, but he went on remix conf and he
[00:29:13]  basically described what if react had been server first and then added the client features later. Um, and I always, I always liked this talk because it, it's a
[00:29:24]  story of Marco essentially, um, he decided to tell the story of Marco and I it's, it's interesting to see the kind of parallels there. Of course,
[00:29:35]  in reality, we live in, um, react has been a client single page app framework this whole time. So expecting the millions of react users to swap over to RSC
[00:29:47] s is pretty big ask. Um, so, you know, got to put that on balance, but I do think this is interesting. Cause I think they, this
[00:29:56]  is the first time in years that we've seen the react core team come out and engage people this way. Like Dan was always good at engaging people on like Twitter, but
[00:30:06]  we actually saw them like going to conferences again, talks, trying to, you know, both from the, you know, the face of the core team type. People
[00:30:14]  who all work at Brussels now, um, and from the, uh, uh, the people who work at meta, um, who are, you know, doing a lot
[00:30:21]  of work, but you know, aren't as known anymore. People, uh, aren't as known yet, perhaps like Josephana, um, uh, uh, uh
[00:30:29] , Eli White, like these, these people are working with teams in meta to work on react. Um, you know, they might not be as, you know, face
[00:30:39]  using like say Andrew Clark or Dan Abramoff, but, um, I saw. Um, uh, like a two prong, uh, approach here where they
[00:30:47]  were actively engaging the communities, getting in, uh, Twitter spaces, conference talks, making presence that I haven't seen them heard, you know, from them for, I
[00:30:57] 'd say like three or four years. So, um, the end result is hopefully that there's a certain group of people that are at least getting the whole server component thing
[00:31:08] . Um, I know a lot of people have their, you know, concerns around this model, but I just wanted to kind of like put it out there that the
[00:31:17]  react team is starting the effort to actually find a way to talk about them in a way that people can understand. This is a part of that wrangling the complexity,
[00:31:25]  right? Right. Yeah. And, and react forget we'll talk about in a second is seems to be incoming pretty soon. Oh yeah. On, on that mark
[00:31:35] . I mean, Dan's been writing, trying to work on these, um, uh, things. Oh, okay. That's posted probably on Twitter. Maybe, maybe
[00:31:48]  we can ship that along and we can talk on this week in JavaScript. I was going to mention that Dan actually has, she checks out something MPN audit. Okay
[00:31:57] . Before you memo, February, 2021 was the last react topic that Dan wrote about on his blog. Um, I referenced this article a ton. Um, this is one
[00:32:07]  of my favorite articles, um, to reference when talking about why signals are better than reacts model. Um, and, but it's a very clever, um, article.
[00:32:21]  Because he brings comparisons between stopping re-renders and react to optimizing server components, even though like server components weren't even really, I mean, they did a demo
[00:32:31] , but they weren't like something you can go use back in February, 2021, but it wasn't until December, 2023. So almost what three whole years, Dan
[00:32:44]  log sat quiet and he's back now, Dan is back. So yeah, the two reacts, this is, this is kind of the, this, this mentality I'm
[00:32:55]  talking about, like trying to find the right way to talk about server components, right? Cause sometimes it might be easier to talk about them. Like as a new framework wrapping
[00:33:05]  an old framework, how do you unify that model? All right. So I got, I got a tweet here. Let's see if it's a, this
[00:33:18]  week in JavaScript tweet, or if it's a, uh, or if it's a different kind of tweet. Um, all right. Okay. Well, sure. I
[00:33:31] 'll give it. React server components do not require a server it never has. I get that this is confusing, but I'm at a loss of what to do. People
[00:33:36]  keep repeating that it does and speak about it as if we're a true fact. Can someone please spread the word? Yeah, of course not. The, the very
[00:33:42]  first react server components demo, the notes demo didn't do server rendering. I don't know if people remember this in 2020, uh, December, they did a demo.
[00:33:53]  It was a notes demo and it was not server rendered. And this is actually really, really important. Um, when we get to talk about Astro, I'm
[00:34:04]  going to bring this up again, because otherwise we'd spend our whole time talking about react here. Um, but there is a server components are in one way. I
[00:34:20]  told everyone, you know, early in the year, I'm like, just think about them like islands. It will make your life way easier than trying to get all fancy
[00:34:26] . Cause most there's this problem with server components where a lot of people were like, um, let's picture that they're like API requests that send back HTML.
[00:34:33]  That was like the mentality they were taking and that's mechanically how they work, but that's not actually how you should treat them because then people are start going like,
[00:34:42]  well, why can't I import server components to my client components? And then react teams like, no, no, no, like structurally, that doesn't make
[00:34:48]  sense. But then like other people like next are certain next where it was like, oh yeah, look, we got server components. So you can just import them. Look
[00:34:56] , we like kind of solve that problem for you. And I'm like, no, no, no, no, no. That's, that's a very, that
[00:35:03] 's not the way you solve that problem. Like that's like, that's not a good pattern. We had people, uh, Jack Harrington making, you know,
[00:35:09]  I think he was making some videos about this talking about like if they would just fix it. I think it's not, it's inside the react community too. Um
[00:35:15] , what's his, uh, Daishi who does all the like state managements, he made a framework called Waku, I believe, um, in react ecosystem around
[00:35:24]  server components. And he was doing the same thing and it was like, no, no, no, no, don't do this. And it's, this was like
[00:35:31]  early in the year because the problem is you're inherently can create waterfalls just because if the server, if the client can call the server at any number of points,
[00:35:43]  which can have client components in it, that can also call the server, there's no way for those server pieces to know about each other. And then you're just like
[00:35:49] , oh, I have to do a piece of state. And then I went, wait for it, wait for it, wait. Like it's inherently waterfall prone. It
[00:35:55] 's not a good pattern. Do not do this. So I was like, think islands guys, just please think islands. Now we're, we've come far enough on
[00:36:03]  this that it's like, no, we're not server red. We're not like islands. I, this is really why I believe that we're talking about a
[00:36:13]  new paradigm. I've been trying to explain this to people that there were single page apps, there's multi-page apps. And then there's this, this is not
[00:36:20]  a single page app. This is not a multi-page app. This is something else. Okay. Of course, I probably have the chat going off now going like
[00:36:28] , what the hell are you talking about, Ryan? Oh, sorry. Just, there we go. 4% market share. Oh no, no, sorry. I
[00:36:46]  have no offense to Kenzie Dodds and his categorization, but I, I, the whole Pespa, Pempa, whatever, the whole progressive enhancement,
[00:37:01]  at least from my perspective, is not a axis on trying to figure out what these architectures are. You could basically ignore the progressive enhanced part and actually, unless that
[00:37:13] 's like his naming for what we've been doing in next, since the beginning, which is like server render once, then pick up and become a client app, unless that
[00:37:21] 's what the naming is. But I call those single page apps. I call them spas. I think it's easier to do that. I know some people consider single
[00:37:29]  page apps, SBAs as like only client render, but they haven't been only client render for like eight years. So I think it's easier to retroact
[00:37:37]  the, the client render only ones as client render only or CSR rather than to try and come up with a bunch of these other terms. Cause it's like, it
[00:37:47] 's, it's like filling out a table and then the intersection of the axes, there's a bunch of gaps. Cause the actual choice of the axes is incorrect. That
[00:37:55] 's just my perspective. I'm pretty critical or anal about categorization. It helps my thinking model, but yeah, I, yeah, I, I feel like we
[00:38:07]  talked about, we'd agree about all the things. Like technically this is just like an actual matter of like, I've refused to, to acknowledge that categorization.
[00:38:29]  Anyway. Yes, exactly. And it's, I spent a lot of time looking at that kind of thinking of like, what's the category, what's an architectural consideration
[00:38:38]  versus what's an optimization consideration. It, it, it, it helps me. I realized everyone's going to have their own perspective on this. But it's one of
[00:38:46]  the reasons why I've been like, I've never picked up the PESPA, PEMPA, whatever. It does kind of annoy me a little bit when
[00:38:53]  people call like, when they say SYNC SPA mode and they mean CSR, you know, but yeah, it's not that big deal. Anyways. Server
[00:39:04]  components are pretty cool. I am bullish on server components. So this is a great tweet. I need to add this to my bookmarks. In fact, I need
[00:39:18]  to just retweet this right now because I need to help Dan spread the word. And I mean, even more so like, check this out code sandbox, not that
[00:39:31]  one. Do you hear code sandbox is going to limit free accounts to 20 to 20 makes me very sad. I'm pretty sure I have way more than 20 code sandbox
[00:39:42] es. I use this to actually do my development. Like when I've got a prototype, prototype idea, like this is, this is what I do. I go in
[00:39:49]  code sandbox. Usually I like stack blitz, but usually I've always found code sandbox when you're not trying to do a full stack app a little bit quicker or lighter
[00:39:58]  than using booting up a web container. But now they're kind of going that way. And so, yeah, starting January 3rd, your free plan will be limited
[00:40:04]  to 20 sandbox. Take action, avoid destruction, your service. Yeah, I am. There's no action for me to take here. Like, um, I am
[00:40:11]  screwed pretty much. Like, let me go. My drafts, I do reproductions here too. Like, I think I have more than 20. That's, that
[00:40:19] 's not including the ones that are actually like, you know, solid demos. Yeah. Anyways, why do I want to look my drafts? I was playing, we
[00:40:30] , we, we built kind of like an islands thing, it's all started, but, but, and then we built kind of like a server computer. Component
[00:40:38]  things installed started about a year ago, but I was playing and I was like, I was like, I was like, what if I just started again with no server?
[00:40:45]  So here you go. Here, here is server components and no server. I call it on server, but literally this is just a client side code sandbox. I
[00:40:54]  made a server component, which is just div counter provider, which is a client component. Let's say counter, which is a client component, another one. And see,
[00:41:02]  I'm nesting it all nicely in here. And then the, the counter component has state and uses context. So there's an interval, which is a context that
[00:41:13]  updates, and then there's a state, which is the name, and then it has some children. It passes through. And the context is your typical context provider creates a
[00:41:22]  signal. And then on an interval of every second, it updates it. Reason I'm showing you, this is, this is exactly Dan's point. This is all
[00:41:31]  client side, essentially, I just kind of denoted stuff was server versus client by instead of using a bundler, what I did was you'll see I called wrap island
[00:41:40]  or whatever, but it doesn't matter. I just made like a, instead of a bundler trick, I just wrapped it in JavaScript to like, to eliminate the difference
[00:41:47] . And if you look at this example, I'm here, I'm updating it when there's more than five, it shows the next thing. But then at an
[00:41:54]  interval, I send in the new stuff, and it's able to continue the persistence of state, and the stuff comes through. Like, if I didn't go all the
[00:42:05]  way, like clicked it a few times, and then the server update came in, and then when I add it after, see, it comes in. There's only one
[00:42:13]  trigger event. I'm not requesting more data from the server. There is no server in this case. But I just wanted to like show, I wrote a diff file
[00:42:19]  in about 100 lines of code, and then the index file is basically take those components I showed you and then pretend this is the update coming from the server. Some serialized
[00:42:28]  data, basically a template, children's, the templates, some updated names here, update the name to capital letters, and template. And then, sure enough, we
[00:42:37]  have working contacts, this is basically server components in the client, without SSR, in 100 lines of JavaScript. Just, it's not using the fancy JSX format,
[00:42:49]  it's just like using some HTML, but you get the idea. The concept here is really one of a client-side diff, so to speak. Anyways, no
[00:43:01]  server, server components. I don't know if I'll come back to this example. It is a pretty cool example, but that's a whole other thing. Maybe I
[00:43:13] 'll just stick this in chat, in case anyone wants to check this out at some point. So, if you want to know what server components are from this perspective.
[00:43:32]  Yeah, I mean, we talked a lot about, I was excited about the bundling thing, giving this ability. Again, this is that whole idea of what I
[00:43:43]  was talking about, prediction, where I was like, be able to, you know, separate a monolithic development experience into different places where it goes. The thing is,
[00:43:53]  it is really just about having two trees weave around each other, maybe even more. You can maybe do three trees. And basically have some kind of system or rules in
[00:44:04]  terms of that weaving so that you can basically extract one tree from the other tree and have each work in its expected environment while completely being able to, like, share context and
[00:44:15] , you know, talk to each other, you know, between the pieces. Share context isn't the right term because you can't put context as a server component,
[00:44:22]  but you get the client components can talk to the other client components. Like, it's a way of basically interweaving these trees so they are separatable, but you
[00:44:30]  have a single experience. It's very cool. But yeah. Anyways, this is like just some experiment I was playing with. I'm going to talk about this,
[00:44:41]  though, probably more a bit later when it, regarding Astro, but we're still, we're still talking server components right now. Anyway. Anyway, anyway, anyway
[00:44:52] , anyway. Where are we? RSCs finally kind of coming into their own. People, Next13 might have put them out there for the world to try.
[00:45:11]  It might have been a little bit early. It's, it's, I get a lot of flack sometimes when people are like, why Solid Start still in beta,
[00:45:19]  right? Like, a lot of people are kind of figuring out stuff right now. It's fair. Like, in a way, I view all of Next13 a beta
[00:45:25] , right? Even though it was a production release, it was kind of like the beta run, right? They learned a lot in this year. A lot of things changed
[00:45:33] . A lot of things broke along the way. Yeah, let's talk about Next.js next, right? Let's talk about Next. Yeah, this is just
[00:45:42]  helping me keep, keep, keep notes here. I'm trying to think if there's anything I want to say about RSCs. Starting, starting to adopt, right
[00:45:52] ? I'll just leave that there. Let's talk Next.js. Yeah, I mean, people, people didn't know what they're dealing with. They're
[00:46:01] , they're, like, it took the React team stepping in and getting like, hey, guys, you know. But for me, Next.js's story kind of
[00:46:09]  continues where this React story came from. It's interesting because obviously they were the first to get, like, the RSC stuff, right? If you go back to
[00:46:19]  the end of 2022, there was the whole, you know, here's how you do RSCs, do like the, like, render them. But there was
[00:46:33]  this, like, thing is, like, how do I mutate my data? What if I want things to actually update? And there wasn't, like, a clear
[00:46:41]  story coming in the whole beginning of the year. So people would build, like, these, like, read-only kind of apps. But then when they had the update
[00:46:50]  data, they were like, okay, well, I guess we'll, like, jam some, like, client state library in there. Like, there was no story on
[00:46:55]  how to do mutation. It took until about April to actually even get to that story, so to speak, right? Because they needed an interface for passing this stuff along
[00:47:10]  and figuring out how to, like, you know, do, you know, do a mutation, stream back the RSCs, have that whole cycle work. What's
[00:47:19]  the API? And they ended up consolidating around use server, right? Which, as many of you know, is basically a variation of server functions, which are basically
[00:47:31]  these compiled RPC calls. Very similar to what we added to Solid Start back in 2022. But they also wanted the action semantics, kind of like the remix style,
[00:47:47]  right? Which is also something we had in Solid Start in 2022. But they decided to just combine the whole thing into a single interface. There's no difference between a
[00:47:57]  server function and a server action. There are only server actions. And server actions are pretty cool because they feel like old actions. You get rid of the, what I
[00:48:11]  call is the, the, the cascade. If you've ever used tanstack query or any of the tanstack libraries, and I've talked about this in previous
[00:48:20]  streams, like, usually what you will do is you'll be like, okay, I'm going to, like, I don't know, update post, right?
[00:48:29]  And you'll send the new post data, right? And then you'll get a response back from the server. That's like, yay, it succeeded. And then
[00:48:44] , then you'll be like, okay, revalidate post or revalidate. I mean, it could be everything. It could be post, you know
[00:48:56] , it doesn't matter, but you go revalidate. And then it's like update UI. See, it's, this is a waterfall, the two cascade
[00:49:06] . Now, to be fair, this could have returned the data you need. But what is, we kind of got really not psyched about this, because sometimes you
[00:49:21] 'll update one thing that can impact other places. And we got to this point, like, GraphQL was like, we can handle this all for you. So when you
[00:49:30]  update, you get back exactly what you need, and everything will propagate. People really hate writing to caches. Like, really hate writing to caches. To the
[00:49:39]  point that I think almost every application that was not needing it for performance reasons, everyone just was like, screw this, just revalidate post, move on. This
[00:49:48]  is why tan stack query got so popular. People didn't want to deal with revalidate, like, worrying about caches. So the standard pattern for client
[00:49:56] -side apps is a two, it's like a two request process. And to be fair, we've been dealing with this to some degree on client-side single page
[00:50:06]  apps forever. Because, like, picture if, like, the classic example, you're in a new post thing, you click submit, and then you go to the
[00:50:15]  next page, and you show the list of posts again after you're done. In that scenario, yeah, you're going to be on the page, you're going to
[00:50:23]  post your new post, create it. And then, even if you got the data back, when you go to the next page to show the listing, you usually fetch
[00:50:32]  the list again. So, like, this double thing is something we're very used to. And a lot of times, from an affordance standpoint, you could say,
[00:50:40]  like, look, when I'm doing a mutation, the user just performed that action. They're accepting more of a little bit of time. They expect this action to actually
[00:50:49]  require doing something. You're saving something. Mentally speaking, you understand that this, you know, might take a couple hundred milliseconds longer than, like, you know
[00:51:00] , some other more trivial action. But I just wanted to kind of point this out here. I mean, you could argue this is why optimistic updates for really light actions,
[00:51:13]  like hearting a post or liking, you know, a tweet or whatever, is so popular because we didn't want to, like, have that delayed feedback for something
[00:51:23]  that didn't feel like it was worthy. But this is very common in client-side apps, whereas in multi-page apps, you just send back the next page.
[00:51:34]  And in React server components, you just send back the next page. But this is essentially kind of, like, at the heart of it. To be fair, you
[00:51:45]  can solve this with a cache API. And, like, if you have the knowledge of the cache and you control both sides, you can do this in a single request,
[00:51:54]  right? And you know the router. Like, it is possible to basically send the post, know that it's going to redirect to the next page, and return with
[00:52:03]  the data for the next page here without rendering on the server. You don't need RCs to do this fundamentally. You just need a router-aware cache, like something
[00:52:11]  that we have in SolidRouter. But I don't, I haven't seen anyone actually do this pattern. But just, I just want to kind of throw it
[00:52:21]  out there. This is one of the wins on the RC side in the server actions. You guys are giving me too much credit. My understanding is Svelte's
[00:52:35]  form actions, like remixes, like, are very similar to, like, remixes, essentially. Or solid starts today, like, when you're not considering, like
[00:52:45] , islands or, like, server component type stuff. Like, basically, we go through this kind of exercise. The action part is just telling you it's on the server
[00:52:59] , right? Or, like, the form, like, the idea here, you, you, you, I don't even think it's the action part. You
[00:53:04]  literally, in Svelte, go, like, dot server if you want the thing to, like, be on the server that you're calling. And Svelte
[00:53:10]  wires it all up for you if you name your file appropriately. But generally speaking, Svelte, Remix, SolidStart, we all kind of use the same patterns
[00:53:18]  for mutation. We use forms. This lets it be progressively enhanced, but it doesn't actually fundamentally change the process that we do, so to speak. That being said
[00:53:32] , if Svelte or Remix explicitly pushed you into using keys, then they could do a single request with this model without RSCs. I'm just,
[00:53:47]  I'm just, I just wanted to kind of throw that out there. But mechanically, they work the same when JavaScript is enabled as the stuff that we've been doing
[00:53:55]  since the dawn of time with single page apps. The difference is the API is nicer. Instead of going, like, hey, I have to make an API route.
[00:54:03]  You're just, like, oh, you know, action this or dot server this or use server this or whatever. Like, it's just, it's just nicer way
[00:54:15]  of, like, not getting rid of all that boilerplate, so to speak. But mechanically, nothing has changed. Okay. So, just, I just kind
[00:54:26]  of want to kind of push that there on server actions. It took some time to figure out what the patterns are, because you got to be, the one thing that React
[00:54:37]  wanted to be able to do, I'm pretty sure, is they didn't want to ship a ton of JavaScript to the client when you have server actions and server zones.
[00:54:45]  Like, obviously, you can make the RPC call, but how do you handle that request response back, right? You don't need any more JavaScript to do.
[00:54:52]  So, one of the interesting things that the next guys did was they overloaded the basic form element to push actions through. So, you didn't need, like, a
[00:54:59]  form component, because a form component would probably have to be a client component, because it'd have client JavaScript logic. And React wanted it to work both when the JS was
[00:55:09]  off, so it's just normal form, which is fine. You can do that with a capital form component. But also, not require the JavaScript at the element level
[00:55:18] . So, when you're in a server component area, it doesn't suddenly have to become a client thing. A client router that's higher up in the page that's
[00:55:25]  handling event delegation could handle this. That way, like, if someone posted to a form that was not in a client component, that form didn't have to be a client
[00:55:33]  component itself. And then it would just do a submit event. The outer app would catch it. There would be client JavaScript to handle it and do the proper insert,
[00:55:42]  but the form component itself wouldn't have to be a client component. So, all these details are very important here and very interesting. I was very inspired by Next
[00:55:51]  forms when I designed the ones for Solid Start, which have that same kind of characteristic where you can just stick a form element and just pass in the action. It involved some
[00:56:01]  trickery. I think Next actually uses a compiler, and this got us to our first, like, controversial thing in the year for them because even though they made a
[00:56:10]  very big deal about the fact that you can't just, like, put server functions and client components because, like, the closures, you know, might accidentally pull in
[00:56:19]  something that could get bundled somehow. If the module wasn't side effect-free or whatever, they're worried about that. Well, as it turned out, even
[00:56:28]  putting server inside server could still leak stuff to the client because those server, the server in your component that gets rendered initially and the server in the server function that happens when you
[00:56:40] , like, perform the action, those are two different servers. One is happening initially when you render, and the other one's happening when you request from the client.
[00:56:49]  So any data that's implicitly passed between those via Closure is going to have to go to the client. There's no way to avoid that. So, like,
[00:57:01]  there was a bit of a, like, you know, them putting passwords out in the open, you know, that whole kind of thing. This is why I'm skeptical
[00:57:12]  of Closure Extraction a little bit because, like, one of the many reasons, actually. But that's a whole other topic that's not deserving of today.
[00:57:21]  Today, I just want to say is they next ended up adding encoding to make sure that this stuff was, you know, obscured and couldn't be cracked into. And
[00:57:32]  next also, obviously, React added the Taint API so that you don't have to worry about this. I think one of the challenges, and this is something we
[00:57:43] 're going to see kind of a theme coming in the rest of your React, is how many new hooks have they proposed this year? Like, they're mostly aimed at framework
[00:57:52]  authors and library writers. But there's getting to a complexity that, no, you as the end developer might not need to worry about them. But, like, there
[00:58:00] 's a lot of new you something because as we enter this world, so to speak, so that we can, like, handle this stuff. And I'm not going
[00:58:11]  to lie, I am not up to date on it. I honestly, like, when I try and follow a conversation about suspense on React on Twitter, I honestly don't
[00:58:21]  know what's going on. I think if I spent some time, I'd be able to figure it out. Like, I was seeing a chat between, like,
[00:58:29]  Dominic, who maintains React Query, and, like, some React core members, and I was like, there's a lot here that I don't understand what's
[00:58:38]  going on. Like, they're speaking their own language. And I thought I knew that language. So I can understand why other people might be feeling that way. Okay
[00:58:48] , I'm going to get to why the complexity is good or important in a minute. But, I mean, complexity isn't good, but why it's merited.
[00:58:58]  But, yeah, it's kind of interesting. Okay, what do we got here? For server actions, if a browser has a different version of the server support, function
[00:59:08]  got renamed, should the framework solve that or the infrastructure? That's interesting, because Vercel actually has been solving this through infrastructure, because, like, keep old de
[00:59:17] ploys around. My mental model here is we should treat it like API endpoints. What would you do for an API? Like, they might look trivial, but,
[00:59:31]  like, if you had slash API slash update post or whatever, post to, like, I think people should treat these with the same thing. I guess the problem is
[00:59:42]  I'm saying that without, like, the fact that, like, it's so easy to rename a variable or so easy to do this. But this is not a new
[00:59:50]  problem for us, I don't think. I mean, obviously, the challenge is, like, new version of the function and front and back can get deployed at the
[00:59:59]  same time, so you can go wipe your hands. But what if a client has a long-lasting client and it's still pointing to the old versions? Tricky.
[01:00:11]  I've never worked in a framework that offered API versioning itself, but if that was where you would get to normally, I think this is where we'd get to
[01:00:22] . Or for the run for the pages and back to the post. Actions are literally, yes, kind of, yeah, that's a good way of thinking about
[01:00:44]  it. Like, from a classic website example, you might post to something for, and then it will do whatever that action is, and then you'll, like, if
[01:00:54]  it's remixed or whatever, like, you'll respond with a redirect or something. Just like when you do a post request, you'll, like, post to
[01:01:01]  post ID something or posts at a new thing, right, without the ID, and then it will redirect you back to get, you know, page posts or whatever, and
[01:01:09]  you'll get the HTML back, right? Like, it's the same kind of mutation cycle that you have with classic website. You post and then, you know, redirect
[01:01:20]  to the new page or whatnot. Use, use form status, use form state, use optimistic, and cache are the only new things from React in terms of this stuff
[01:01:36] , I think. Yeah, there was some stuff around suspense, though, that was happening at the same time. Like, use external store is not that new, but,
[01:01:44]  like, basically, I forget that there's a couple other ones. I saw one, and I was like, I haven't even seen that one. Like, there
[01:01:53] 's been some stuff that, like, doesn't get talked about a lot of, some of those unstable underscore use blanks as well. So, we need the use,
[01:02:06]  well, with the use helper, hopefully you won't. It just, they recommended this at first because they didn't want everyone just going around throwing promises. Okay.
[01:02:20]  Yeah, and I do think there's easy for people to mess this up. I was talking, Dax posted something the other day on Twitter for those people who know him
[01:02:29] , and he basically said that, what did he say? I finally built something with SR plus server action management, not Next.js, so you know he's talking about
[01:02:39]  us. It would be us or quick, but knowing Dax, it was us. It's kind of crazy how I can leak all this stuff by just submitting a single
[01:02:45]  keyword. He's not saying that it was a security hole. He was just saying that he forgot to put use server. Like, he decided, like, he forgot
[01:02:52]  to just, like, say it was a server thing, and it ended up in his bundle. Because, like, it was arbitrary. Like, whether, you know,
[01:03:00]  I get the feeling people are more likely, less likely to name a file. But, I mean, it could even happen. You could just write a file and not
[01:03:08]  put .server in the file name as well. Like, it's that level of error. So, there's, like, this tension between being really strict here,
[01:03:15]  but then it not being permissive, or, like, being, like, having this flexibility where, you know, as things change, you can adapt it.
[01:03:25]  Like, this is kind of the challenge, like, Astro's had. I know they feel it. Like, they're very strict because you have, like,
[01:03:30]  a whole different .astro thing going on, right? But, like, that makes stuff less permissive. There are, I don't know if people know
[01:03:38]  this, there's no such thing as server components. Like, not actual, like, from a definition standpoint. Sure, there are components that are rendered as server components,
[01:03:47]  but there's no such thing as server components. There are client components, and there are shared components. There's no server components. Either you have a component that does not
[01:03:57]  have used client on it, so it is not a client component, or you have one that does. That's it. So, if you are starting from a server
[01:04:05]  root, so it is, like, the beginning of your app, then a shared component is going to be rendered on the server, and it's effectively a server component.
[01:04:13]  If you take that same component and stick it imported from a client component, and then, like, use it in your client component, guess what? It's now in the
[01:04:21]  client scope. So, like, this is incredibly powerful when it comes to being able to, like, build a client component. Build these dynamic pieces, but it is
[01:04:36]  maybe too flexible and permissive that people can screw it up. Encryption can change in every next build, so this isn't really an API version, but
[01:04:52]  you can change anything. Oh, that's unfortunate. Hey, Kelvin, how are you doing? Ah. Yeah. That's a whole other topic. Yeah, we
[01:05:12]  can get, like, meta on that, but no, no, not today. Yeah, I mean, to be fair, this should be solved by m variables, and
[01:05:24]  in a sense, a beat has a certain amount of that functionality actually built in, too, as well. Right, like, the beat prefix in verse-not,
[01:05:34]  like, almost all beat frameworks have a defense against this, but I'm pretty sure he was literally just, like, hard-coded in the file. So, yeah
[01:05:44] . I know some people are working on it. No news on that yet. Linting? Yeah, and one thing that people have been doing is Next.js
[01:05:59]  has, like, a side-effectful import called import server only, and that import server only basically, it basically, like, does a check, like, am I
[01:06:12]  in the client build? Then throw, like, it just kills, and nukes the thing, so there is, like, an import you can stick in to
[01:06:22]  be, like, I want to make sure this never gets to the client, and anything that imports it will die because of it. A lot of the times, this just
[01:06:28]  happens naturally because you can't use it, but in his case, he had isomorphic APIs that could work server or client, so it didn't catch him.
[01:06:35]  Like, 90% of the time, you do this, and it'll be, like, you'll get, like, a client build error, or, like, not
[01:06:41]  a builder, but you try and run the client, and it'll start complaining to you about Postgres, and you're, like, no, okay, something really bad
[01:06:47]  happened here. You know, it would never deploy, but, or if it deployed, it'd basically die. Yeah, I don't know. It's, it would
[01:06:54]  never pass any kind of test. Anyway, yeah. I just wanted to kind of throw that, this example out here. I, I, that was, like,
[01:07:09]  a heated thing, but for me, um, that wasn't the only heated thing for next, um, this year. Uh, there's something earlier in the year that
[01:07:20]  people didn't pick up on, um, and that was, and this relates to that edge, uh, runtime stuff, right? Like, everyone at the end of last
[01:07:29]  year was really hopeful about the edge. So, they were, like, hey, uh, let's, let's all, you know, work together and make a
[01:07:40]  new standard. You know, we don't want a repeat of what happened in browsers, right? Because if you remember the browser wars, there literally was, like, features
[01:07:47]  only available in IE and Chrome and Firefox, and standardization was out the window, and it was just, like, a big mess. And then we all ended
[01:07:53]  up having to, like, polyfill everything for different platforms. And honestly, this is, like, what it's like to write a JavaScript framework these days. I
[01:08:00]  honestly didn't want to do that, so I, you know, it was, like, thank you, Nitro, you know, so to speak. But, but
[01:08:07] , like, that's the kind of scenario we're in now. So, they're all working together, trying to standardize. And then Next releases, I think
[01:08:15]  it was, like, 13.1 or something, 13.1.4, like, some kind of, like, minor patch release. And suddenly they added as
[01:08:26] ync local storage to their runtime, and, like, Netlify and a bunch of the other, like, you know, like, a bunch of other providers, Cloud
[01:08:33] flare, that, like, did use Next.js, all, like, died immediately. Someone did the update, and then all the deploys died, and they
[01:08:39] 're just, like, what the hell happened? And, and, and these people were not very happy about this. Because, as we've already talked about, Next
[01:08:48]  is the most popular, you know, this year hype-wise, the biggest number of new stars for JavaScript framework over the 12-month period. So, and it's
[01:08:58]  one of the, for the meta framework set of things, it's, it's, it's the, it's, like, the, probably the most, you know
[01:09:05] , like, React itself, the most, like, out there, the most used. So, it's really awkward when they do a release and it just, like,
[01:09:13]  breaks everything. Now, wasn't the committee supposed to prevent this from happening? It's like, the new, yeah. So, like, this is Luca Casan
[01:09:37] ato, hopefully I got his name right, you should get it, like, I'm, I'm Italian somewhere as well, and I think, I'm pretty sure
[01:09:46]  that's his background too, his last name's always the same as mine. But, he, he is known because he works on Dino, he was one of the
[01:09:56] , I think, the original creator of Fresh framework. You know how Vercel said the Edge, Next, JS Edge runtime would be totally standard and portable and such?
[01:10:06]  Well, Next, JS now requires these standard Edge runtimes to implement Node.js-specific APIs, like, async local storage API with no specification. Yeah.
[01:10:15]  January 2020, pretty upset. I saw this firsthand because I was working at Netlify, obviously, and people were, like, just scrambling because, you know
[01:10:27] , in typical manner, Vercel likes to launch Next and Vercel features together. Like, it's, like, they make a big launch out of it
[01:10:34] , and it's, like, the big Vercel event. So, basically, it means that they don't always share, like, Vercel is great.
[01:10:40]  Like, when I want to work on stuff, solid-specific features or whatever, I've been working with them, you know, hand-in-hand, you know
[01:10:47] , the new build API, you know, like, these things were awesome. But when it comes to Next, Next doesn't have that same feel to it. It
[01:10:56] 's almost like they launch with the Vercel infrastructure, and then everyone has to go, like, catch up. And this was another one of those cases. And the
[01:11:05]  funniest thing about this is, yeah, I can understand why everyone got upset about this. But async local storage is actually really, really, really, really, really useful
[01:11:19] . Like, we almost need it if you want to have nice APIs on server functions. Because the whole promise of server functions or server actions is that you can just function
[01:11:30]  here, call it here, and it works. But there's, like, metadata. Like, how do you get the request when you're on the server? You don
[01:11:36] 't want to make that, like, a fake argument or whatever, because then you don't keep the transparency of signature. The beautiful thing about server functions is TypeScript and
[01:11:44]  everything just works because the function is a function is a function. You just go, okay, here's the arguments. Then when you use it on the client, well,
[01:11:50]  same arguments. You know, same return type. You have this, you know, ability to get basically perfect type information, and it makes it really nice. Just without
[01:12:01] , like, any extra code gen or anything. It just works. You just import the function. Ta-da. But how do you get this metadata? Well, at
[01:12:10]  the front of the function, it's not too hard. You're handling a request. You have the request event. You could call some kind of global thing that reads from
[01:12:18]  the current request. You know, you could probably figure it out. But what if someone goes await, and then you got to get it after the first await? You
[01:12:26] 're, like, down in some library or something. It turns out there is, like, almost zero way to actually polyfill that. It kind of actually sucks.
[01:12:36]  Which is really, really, really unfortunate. I, like, when I designed server dollar sign for solid, originally we, like, used server dollar sign dot request to get
[01:12:51]  the request. We did a bunch of stuff, and there was no perfect solution. We tried to use this, but, like, this doesn't work with arrow functions
[01:12:58] , you know, so we're trying to transform them. But then we don't know, like, if someone defines the function somewhere else and then imports it into the server
[01:13:04]  function. Like, there was holes with every single approach we took here. And then I remember looking and going, oh, well, if we had async local storage
[01:13:12] , but no one supports that. Oh, well. Oh, there's this async context proposal. Well, I'm sure we'll get that in five years.
[01:13:19]  And I kind of gave up, and I was like, whatever. Next goes and adds this in January. By March, every single platform supports async local storage. So
[01:13:30] , it, you know, might not be what, you know, everyone wanted, but it is what it is, you know what I mean? So, I can
[01:13:45]  understand why, if this was your problem, I'd be angry about this. But, I'm kind of, like, I kind of, like, thank you. Because
[01:14:00]  now, it all starts, new version, use async local storage. I did find out that not every platform supports it. StackBlitz doesn't support it. So
[01:14:08] , I had to do a partial patch polyfill that works in some cases. But, generally speaking, this is a very important API for server functions, server actions,
[01:14:20]  the whole thing. And now, we have it in Cloudflare. We have it on Vercel Edge, Netlify Edge. We always had it on V
[01:14:30] ercel functions and Netlify functions, because they're AWS, which also has it, which is Node. But, Dino Deploy, yeah, like, they
[01:14:38]  all support async local storage now. The Apple style force, yeah, yeah. I guess they got more than their keynotes ideas from Apple. Yes, server
[01:14:53]  functions are more complex than extra code gen, but, like, from the developer standpoint, like, the actual type part is not. The type part is literally import to
[01:15:09]  import. Yeah, yeah, yeah. We're excited about this. But standards take years and years and years. And, I mean, you could take it two ways.
[01:15:20]  The other thing is, once Next made this move, we had no choice but to follow. Because otherwise, our API, like, I struggled with this when we were
[01:15:27]  originally designing server functions for Solid, right? And this, like, that was, I don't know, that was, like, months before Next released anything. Almost
[01:15:37]  a year, actually. And, like, I just sat there and I gave up because I'm like, what can I as one person do, right? And then
[01:15:48]  we conceded to, like, a slightly worse API. Now that Next has a better API, why would anyone accept any less? So, yeah. When it comes
[01:15:58] , 100%, I'll be stoked. But where we're sitting right now, like, that's where it is. So, it's unfortunate because, I mean,
[01:16:09]  I was sitting with Luca and we were sitting there and we were talking about this. And he's just, like, it's really annoying when you work to try and standard
[01:16:18] ize a platform. And then, you know, it turns into, like, let's all decide what our favorite Node APIs are, you know? Like, I mean,
[01:16:26]  there's always the pursuit, right? And you almost made some kind of post at some point about, like, how, like, Winters, like, two things
[01:16:36]  you learned this year. One thing was about bundles and bundling on demand or whatever. And, you know, that kicked up a bit of a fight from Evan Yu
[01:16:46]  going, like, what's your problem with the beat? Beat's super performant. Sorry if your guys' stuff isn't performant, right? But on the other
[01:16:53]  side, he was talking about, like, the standardization of edge functions and basically saying, like, it wasn't a thing. And it's, like, I
[01:16:59] 'm still optimistic. I think it's too early, but you have to start the process early because it takes, like, years and years and years, you know? It
[01:17:09] 's so funny because, like, on the web side, I'm, like, a level, I'm in, like, a different layer. So I'm, like
[01:17:14] , you know, I'm, like, oh, man, those guys on the standards is killing me. I'm just going to implement this stuff myself, right? So
[01:17:19] , like, I can see the tension there, right? We talk about web components and I'm, like, but, you know, now I'm talking about this.
[01:17:28]  I think both pieces are really important. I think we have to work together to getting the standards there eventually. We just can't wait for them pretty much ever. So
[01:17:37]  it is what it is. So, yeah, I think this was an interesting topic from a framework standpoint because now this is a real option and this has enabled stuff that
[01:17:57] , you know, that I quite like for Solid. And I imagine it will enable it for other frameworks as well. So, yeah, that's enough on that one
[01:18:06] . There was one other Next14 I wanted to talk about or Next, really, feature I want to talk about, which is Next14, which is, and this is
[01:18:17]  important, again, to talk about the big picture here, which is the experimental pre-rendering, partial pre-rendering, which is this idea where you can,
[01:18:27]  like, render the static part. Outside and then, like, ahead of time and then have the rest of the stuff stream in. See, at first, I didn
[01:18:36] 't get this feature because stuff that is static that's already available, if you have streaming, this is how it already works. Every framework that has streaming can do this,
[01:18:48]  whether it be Next13, whether it be SolidStart, Marco, at least out of order streaming. I don't think Quick has it. Who else? Next?
[01:19:01]  Oh, Remix has it, out of order streaming, right, with the defer. So, why make a big deal about this? Well, I think when we
[01:19:11]  realized the edge was not going to be the database solution, and, you know, I like to cheekily add the fact that React server component design and, like, routing
[01:19:20]  design specifically encourage server-side waterfalls. They need to get rid of those waterfalls. So, what you can do here is respond immediately on the edge while keeping
[01:19:36]  the red stuff back on your server, like, close to your database. So, those waterfalls don't matter as much. I mean, they still matter a bit.
[01:19:45]  I worked on an ORM before I worked on Solid, and I spent my whole time trying to kill server-side waterfalls. But it's a lot less going
[01:19:51]  from your in-AWS serverless function going to some database service than it is going from, like, some edge function, you know, something out on Cloudflare
[01:20:01]  and going to that database. Those waterfalls have very different latency. So, there's that aspect. But the other one is this is our first showing that I've
[01:20:15]  seen where we have distributed infrastructure where you write your code in one way, and it automatically generates both a edge function proxy and the serverless function. We're actually distributing the
[01:20:28]  work without the developer having to, like, manually do it. There might be, like, a setting you have to turn on, but it's not like you have
[01:20:36]  to go, hey, run this code here, run this code here. So, from my perspective, this is actually a huge show in what I was talking about, mon
[01:20:45] olithic authoring with distributed deployment. Oh, yes. SvelteKit has out of order of streaming. It didn't originally, but it didn't when it was in
[01:21:00]  beta. Did SvelteKit get out of order of streaming by the end? I think it did. It must have by this point. I can remember. I
[01:21:07]  remember checking Svelte back in, like, 2020, 2021, and it 100% did not. But I have to assume by the time they released it in 2022,
[01:21:15]  they have out of order of streaming. Okay. So, that's Next.js. Right? So, we talked about server actions. We talked about async local
[01:21:31]  storage. And we talked about, what was the last one? Partial pre-render. Just going to get some cliff notes for people paying attention. I don't
[01:21:47]  know if there's anything else. Anything else big on Next for you guys that really stood out? Chat's gotten quieter, and I'm disappointed. Maybe I'm just talking
[01:21:57]  too much. Where did you go, chat? All right. It's all good. There's a local first trend with the coffee free. Yeah, yeah,
[01:22:19]  yeah, yeah. I think the approach can also move to the edge because you didn't think of the edge. Exactly. I mean, to a certain degree, a lot
[01:22:25]  of that approach can move directly to the browser. I've been waiting. It's funny. When there's trends, like, these cycles that go around, every time it
[01:22:32] 's a little bit different. But I've been, like, waiting for local first to make a comeback. Local first was, like, hot for a bit around 2015,
[01:22:41]  16, 17. And then around 2018, we completely dive away from local first again. I expect, my estimate was that 2027 would be when we would be talking
[01:22:53]  about local first again. Maybe it'll happen a little sooner, I guess. We'll find out. Yeah, I'm not going to get into comments here about Evan picking
[01:23:04]  a fight. Evan is tenacious, definitely. But he defends what's his, and we'll talk about you in a bit. No, I'm doing it in
[01:23:13]  hype order, so quick will be a bit later. My hype order is determined by GitHub stars, new GitHub stars this year. Okay, so who else do we want
[01:23:27]  to talk about? Remix. No? Yeah, I think out of React frameworks, next is number one. Next is number two. They're probably tracking the wrong
[01:23:46]  repo for Remix. Maybe not. SvelteKit's here, too. To be fair, this is the whole framework, both Quick and QuickCity. So
[01:23:55]  that's why it's combined. But yeah, it looks like my next one is Remix. I don't think, is Gatsby here? I wonder if
[01:24:06]  Gatsby doesn't even show up. Like, what category is Gatsby? Duplicate. Let's look here. What is a Gatsby? G
[01:24:14] atsby. They probably made it like a static site, a static site framework or something. Static site generator. By total number of stars. No, last 12
[01:24:27]  months. I only care about. 2.4. Okay, yeah, Gatsby's last. Okay, so let's talk about Remix then. I'm going
[01:24:37]  to give a quick shout out to CreateT3 app. This is amazing growth over the last year. This is, obviously it helps when you're built on React and Next
[01:24:48] . You get a certain amount of free stars, so to speak. But this is still amazing. You'll find the React ecosystem and the Next ecosystem, as you kind
[01:24:57]  of go out from it, will always have an easier chance getting, you know, because there's that many more users you tap into. Still, when you see CreateT
[01:25:06] 3 app up here and you see like, this just gives you an idea, you know. And this is hype. It's not total. But this just gives you an
[01:25:14]  idea, right? Like Redwood or Gatsby or whatever, Blitz. This is very impressive regardless. So we're going to talk about Remix next,
[01:25:27]  not Gatsby. I just wanted to double check. We'll talk about Gatsby in a minute. But let's, Remix. For me, highlights for
[01:25:35]  Remix this year and why you should be paying attention is they've been, obviously they did a bunch of work. Is Remix 2.0 officially out yet?
[01:25:45]  They changed the router and the flat route stuff. But I think for me, that stuff aside, you know, like API changes, VEAT move. Move to V
[01:25:56] EAT. This is huge. Mark Deglash joined the team. And I know he's not the only one involved. In fact, the VEAT move
[01:26:04]  involved some other contributors from the open source. But like this, they're part of the family now with the rest of us, which is cool. Because a lot of
[01:26:14]  the shared plugin infrastructure, when you build a plugin for VEAT, you're building a plugin for Spellkit, SolidStart. Noxed, Analog
[01:26:27] , Rackus. God, why can't I think of Marco, Quick. Like, basically everybody but Next. I think it's easier to just say that. You
[01:26:40] 're building for everyone but Next. Yeah, so, yeah, Remix 2.0 did come out. Yeah, yeah. I remember with the new flat routing and
[01:26:47]  all that stuff, yeah. So, Astro, yeah. Sorry, yeah. So, that's huge because now they're part of the family, which is exciting
[01:26:58] . They've been, like, slowly refining their technology and, obviously, their APIs, just, like, doing the tweaks. They basically pioneered ephemeral optimistic
[01:27:14]  updates. Like, I said popularized in a tweet, but I meant pioneered. No one was doing that. When I saw Remix, I realized that was
[01:27:22]  the thing. People talk about actions and loaders and nested routing. All this stuff actually kind of in certain ways, not the actions necessarily, but the loaders and
[01:27:31]  all that stuff existed in other frameworks in slightly different forms before. Nested routing, all of that stuff. You know, smarter data loading, all that. But ephem
[01:27:39] eral optimistic updates, even, like, Apollo didn't do that. Relay didn't do that. Tensec query didn't do that. No one in this query
[01:27:49]  space was doing that. They all said write to the cache. Writing to the cache sucks. I'm sorry. No one wants to write to the cache. Remix
[01:27:55]  let you basically not have a cache on the client side or ignore that it was there simply from an API standpoint. Absolutely genius. If you have any doubts in your mind
[01:28:05]  about that, I strongly, strongly suggest checking out, like, any of Ryan's demos. In fact, we can just go to my profile here, and I think Ryan
[01:28:14]  did one this past week. Here you go. You can, yeah. You can, yeah. Like, let's, yeah. Yeah. Remix is sweet.
[01:28:28]  No, we'll talk about Fresh when we talk about Preact. So, like, this is just a great demo. One of the cool things they've been working
[01:28:49]  on is making Optimistic Update shareable across components. This is a big part of the new Solid Start API. So, I'm almost 100% positive Ryan could be
[01:28:57]  talking about Solid Start as well here. But even in the basic form, stuff like SvelteKit can do this. Any of the new kind of, this is just
[01:29:08] , the Optimistic, I think SvelteKit has Optimistic Updates, right? This, this, he's showing how with Optimistic Updates,
[01:29:20]  he can, like, still, he can still, like, let me see if I can find it. He can still, like, let's, he's going
[01:29:30]  to just add a card here. So, he's not, while it's being saved, he's, he's moving it. So, like, basically all the,
[01:29:45]  like, cancellation, all the stuff that's happening automatically, he basically created his stuff, while it was still pending to, in the server, he actually moved it to
[01:29:56]  a different location. This is, and the thing is, the code to do this is actually dirt simple. I'm not going to go through it all. I just want
[01:30:04]  to say that Remix's approach to Optimistic Update is something that, you know, they got a little flack for saying people stole stuff from them, and everyone
[01:30:11] 's like, no, we didn't steal from you. Everyone stole this from Remix. Like, this is, this is the, the gold from Remix. As
[01:30:20]  I said, it's the Ephemeral Optimistic Updates. Feeding state back into your component, rather than using a cache. It completely changes the game
[01:30:29] . I'm pretty sure when I saw that, I adopted it to Solid Start, and I'm pretty sure the patterns in Solid Start influenced the next APIs. So, like
[01:30:38] , like, there was, like, this kind of change, chain through. And, and, and, and Quick APIs, I should mention as well. Solid Start
[01:30:47]  probably influenced the Quick APIs as well. So, like, but, yeah, Remix was on it, on this. And, yeah, I just, you know.
[01:30:58]  Where do I want to go here? Oh, right, right. You're right. I forgot to talk about Forget. We're going to talk about Forget in a minute
[01:31:07] . It shouldn't be, we're going to add Forget here so I don't forget about it. Where is it here? Let's add Forget. Forget. We
[01:31:16] 'll talk about that in a minute. I built the way to synchronize stores between sourcing clients that include Optimist Office for one of my projects. Do you have a
[01:31:31]  stateful backend? Probably too many deals for me to get into right now. In any case, Remix continues to impress with, like, these kind of details.
[01:31:51]  One thing that was actually really cool that I wanted to talk about specifically is that they added CSR mode, which, don't get me wrong, is not a new thing
[01:32:03]  outside of React. SvelteKit supports CSR mode. I don't know about analog, but I wouldn't be surprised because Angular basically couldn't do SSR
[01:32:17]  until last year properly anyways. But in React, this is kind of unheard of for meta framework. I mean, and it makes so much sense. It's funny
[01:32:33]  because Ryan posted a tweet today about how everyone's talking about RSCs in terms of this announcement. But that's exactly why this is so genius. There are so many
[01:32:41]  people out there on React Router, even, who can't just migrate to Next. React comes in and is like, hey, you need a meta framework. Even
[01:32:49]  going to straight normal Remix from React Router is a hop for some people. So Remix is like, okay, fine. Take your CRA React Router app and
[01:32:57]  just drop it in and have it work. Right? This is the same messaging that I've been doing on Solid as well. Like, this is very good. My
[01:33:07]  only gripe with this is calling it SPA mode because technically all remixes are SPA. But, you know, so I call this, you know, SSR
[01:33:15]  false or CSR mode. But this makes a ton of sense. What's the advantage of CSR over playing SolidJS? There's a couple, right?
[01:33:31]  You get file system routing, if that's something you care about. Some people don't, but that's something you might care about. You get API and server routes.
[01:33:38]  If you do want to split it between, like, a static hosted endpoint and, like, an API, like, you could, like, build in a single monore
[01:33:45] po. You could do that anyways. But, you know, server functions are a thing. I guess that's not true CSR. But the thing is, like,
[01:33:52]  if you, you know, could just, if you, if the problem is the client component's not running on the server or that kind of thing, like, it's
[01:33:59]  very easy to just, like, migrate your app and then add the APR. It's incremental. So, like, I'm of the opinion with SolidStart that
[01:34:06]  I want it just to replace the templates eventually. When we get to a good place, every Solid project, you know, you could go build a Solid project, use Ast
[01:34:13] ro, use stuff. But, like, the generic starter, who cares if it's Veed or SolidStart? SolidStart will just let you continue the build from that
[01:34:21] , right? Obviously, there's the Veed template, like, the official Veed template that, like, Veed ships. But you start with SolidStart,
[01:34:29]  you can just go from that. And Remix is definitely on that same kind of wavelength. I don't necessarily agree with that. Actually, I don't agree with
[01:34:44]  this at all. But I do see how this argument could be made. I don't think CSR means better DX, necessarily. It's, there are benefits.
[01:35:03]  Well, the thing is, an SS, the inverse argument here is that an SS, I had a whole stream about it right before break. An SSR single-
[01:35:12] page app, like, your typical Next or Remix, basically, as long as it can render once on the server, is already basically CSR+. Like, because after
[01:35:23]  that point, it is, like, clients rendered single-page apps, so, like, the difference is, like, non. Sometimes that initial jump is significant, which
[01:35:30]  is why this release is important. But, like, generally speaking, it's just the same thing but better. In the past, this hasn't always been the case because
[01:35:38]  people would wait for data fetching, and it would get jammed up. And it's not too hard to see the difference between a page. Like, sometimes you
[01:35:46]  could, like, load the page in the client, then go fetch the data. And because the resources, like, the JS was already loaded in the client and the images
[01:35:54] , maybe some, like, you could get a better experience even on initial page load in a client-rendered app than a single-page app. But since streaming,
[01:36:01]  again, there are cases where streaming doesn't work perfectly. But when you have the control over streaming and when stuff streams, it's just basically straight-up win for
[01:36:12]  SSR from a UX standpoint. But I guess you said DX. And, yeah, I guess making something do more is fine. Isomorphic JavaScript in JavaScript frameworks is
[01:36:23]  kind of fundamentally awkward. It's, like, expecting it to run on both sides when one side you have a DOM and the other side you don't. It's
[01:36:32]  never perfect, which is why stuff like server components are interesting or islands because it shrinks the size of that. The isomorphic stuff kind of sucks. So I can
[01:36:39]  see that. Sorry. I was reading UX, not DX. I don't care about DX nearly as much. So I jumped on this. You said DX. Yeah,
[01:36:47]  sure. If you only have to worry about one environment, yeah, the DX is probably better for highly interactive applications. But, sorry. I saw UX in my head
[01:36:57] . And UX is what I care about. Yeah, yeah, sorry. Yeah. This in spell kit, SSR is easier than CSR. It shouldn't be
[01:37:10] . Like, you could argue that you, if it is, it's because you can wire your data sources easier and basically, like, okay, the data's on the
[01:37:17]  server. It's like using a server function. That's easier than setting up an API endpoint. But in general, the same code is, like, your component code is
[01:37:24]  the same, except now there's, like, this extra dimension where you might have something that doesn't work on the server. You're making more. Yeah, I
[01:37:47]  mean, it's hard to say. The time spent rendering and booting up, it's, like, the cost of, but then you're making more calls, which
[01:37:53]  means you're spinning up more instances. Yeah, I, I'm sure there are some parts of these solutions that are more expensive, like, annoying server rendering. Right
[01:38:09] . The, the JSON payloads are more, but, like, running React on your server, um, might be more expensive. Like, when you do a comparison
[01:38:22]  between, like, say, a Svelte server, uh, rendered page or solid, which compiles to string decadding like this and compare it to, uh
[01:38:30] , like, React, there's already a huge difference, almost 10x difference in performance because of React rendering the virtual DOM. Um, yeah, anyway, yeah,
[01:38:42]  this topic's gonna be hot. Someone said that, I didn't put this in my article, but someone's, like, saying, like, CSR will be hot
[01:38:49]  in 2024. And I agree. This is part of, this is part of the, like, that step back movement that I want to talk about. This is part of
[01:38:57]  that, like, stuff's too complicated. I'm gonna just do CSR. Remix is well-suited for it. SolidStarts, Falcant
[01:39:05] , Nuxt. There's a solution in every framework that, uh, for this now, right? It just, it's not Next. I mean, Next can do
[01:39:12]  it. You can do it. You can, the thing is, these things kind of superset themselves. So, like, you can always take an SSR app and
[01:39:20]  then, like, um, basically wrap a route in, like, they do this in the client and then you kind of essentially get a CSR experience. Um,
[01:39:33]  so, I'm not gonna say Next doesn't do it, but it's a different mentality feel when you come in and you're just, like, yeah, I'm
[01:39:41]  not doing SSR. SSR, false. Bam. I just move my app over. Oh, look, it worked. You know, like, I think that's
[01:39:48]  the thing. I don't know if it's that easy with Remix. Um, but, I mean, it's, it's, hopefully it's pretty close
[01:39:55] . I think it's hard being in Remix's position. I, I, this is a gamble that, like, Tanner's taking as well. I mean, if
[01:40:14]  you look at this, I don't know if this is accurate. Remix is, yeah, they had a decent year. They're just kind of, like,
[01:40:25]  in the middle of things, you know, Sveltec. I mean, we're, yeah, like, Remix and Sveltec having equal stars in
[01:40:31]  terms of hype is not fair because Sveltec has a much smaller pool than React does. Do you know what I mean? Like, this is, you know what
[01:40:42]  I mean? Like, this is why, I'm not sure if, I think the React audience has this kind of knowledge that Remix is always kind of a step
[01:40:51]  behind. Like, I, you guys are getting me to bring all the This Week in JavaScript stuff up right now, but it pains me to see stuff around this because,
[01:41:01]  like, let me see. Can I go to bookmarks? Look. Where is it? There were no server actions when we created Remix, so we created route
[01:41:14]  actions. Now, React has server actions. There was no fetch data in components on server before Remix, so we created route loaders. Now, React can fetch
[01:41:22]  in SSR with RCs. React had no way of knowing pending statement actions, so we added use navigation, use fetcher hooks in Remix. Now, React has
[01:41:28]  use form status, and React has suspense and transitions, things that were not publicly available when Remix was built. React had no way to know results in action. So,
[01:41:38]  you know, use data, now it has use form status. React had no way of the state of a transition, so we had to use transition. Now, React
[01:41:46]  has use transition, so we changed it to use navigate. React had no way of optimistic updates. People at criticize Remix for not doing the React must not be paying attention
[01:41:54]  to the timeline. React merged Remix into main. It'll take a bit of time to adjust, blah, blah, blah. Okay. This is the thing. Rem
[01:42:02] ix did not wait. Even the streaming solution they came up with. There's all, like, you don't need server components to use suspense and streaming on the server for
[01:42:15]  React. This is just, like, it's not necessary to use server components. But React themselves kind of pushed that narrative, especially with Next.js. Remix
[01:42:24]  just went and implemented it themselves. And for me, this has always touched me a bit because I was working on Solid at the same time. The difference was Solid released
[01:42:36]  all the suspense stuff early, like 2019-ish time period, 2020, some of it by the time we were done when we got the streaming working for the HTML, not
[01:42:44]  just data. And so I'm sitting there working on Solid start. They're working on Remix. We're working on exactly the same problems, except I'm watching
[01:42:52]  the Remix guy, like, reinvent all the wheels. I'm like, the framework should take care of that. The framework should take care of that. In Solid,
[01:42:57]  I was just like, oh, sweet. You start trying to, like, I had all the pieces already because I'd built stuff that was kind of, like, you
[01:43:04]  know, similar to React's upcoming APIs that hadn't come out yet. So, like, when I released a router or a piece, it was, like, so
[01:43:12]  much smaller in code and complexity because I already had the tools. And I knew the tools were coming in React. Everyone knew the tools were coming in React, but Remix
[01:43:20]  had no choice. They couldn't wait for it. I watched the same thing to a smaller degree with Tanner, but it was just, like, it was so awkward because
[01:43:27] , like, I remember when they're adding these transition stuff. And I was like, I did this actually in a talk about suspense where I literally implemented, like, Rem
[01:43:35] ix-style actions in, like, 10 lines of code. And all the race conditions, all the stuff taken care of because of this React primitive. If you go
[01:43:43]  look at the Remix code for it, it was much, much, much more complicated. I was able to ensure the race conditions just by being, like, okay,
[01:43:49]  do this, start transition, done. Like, it was, like, a two-liner. And it was just, like, it was so hard knowing what was coming
[01:43:58]  in React. And, like, just, like, some of the stuff wasn't known about. We didn't know about the next specific APIs, like, it starts
[01:44:06]  with. But they had to build the whole thing from scratch in their own zone, which is very similar to, like, what I was doing in scratch. I just was
[01:44:13]  able to put the stuff in the right places. And then it, you know, comes out in React a year or two later. And now people are, like,
[01:44:19]  oh, why didn't you do it the React way? Well, you know? Yeah, I mean, they thought that for a while. But the truth of the
[01:44:33]  matter is I think Preact has different goals, right? They really want to play into the simplicity stuff. They didn't follow React into Fiverr, concurrent renderings
[01:44:42] , you know. And, like, I think server components are where, say, Shopify wants to be. They started with Hydrogen. It wasn't there yet. I
[01:44:50]  think, like, they have a lot of data from early. I don't think anyone will ever get the Remix guys to go on the record for, like, or
[01:45:00]  Hydrogen guys about, like, issues with server components. But, like, they picked up Remix without RSCs. With RSCs are, like,
[01:45:10]  mentally the perfect solution for Shopify. Like, that's what I would want them to be. Performant, partial Hydration. It's, like, e-commerce.
[01:45:19]  It makes sense. Yet, they kind of went back to Remix. DX is way better with Remix, you know, for the early, you know, server component
[01:45:27]  stuff. That's what they're doing with Hydrogen. But it tells you just, like, there's more to that early story that no one's talking about.
[01:45:35]  I think they'll get there again. But I don't know if server components are up to the task as they are today. I think, like, maybe, like,
[01:45:42]  there's some performance concerns. I think there's more going on. I think we still need to weigh this out and watch very carefully. Like, Remix keeps on hint
[01:45:51] ing RSCs. But, like, it's very, it's, like, committal, then not committal. Like, you're kind of
[01:45:56] , like, what's going to happen here? They're probably coming. But I think they're biding their time quite purposely. And I think there's stuff we don
[01:46:01] 't know. Just throwing it out there. Remix is the same thing JQuery is with JQuery. Eh, sort of. It's, Remix, it
[01:46:17] 's, I don't think that's actually good at it. Because React team knows what's up. And they work on stuff. But to come up with a proper solution
[01:46:24]  that's generalizable takes more time than coming up with a specific solution for your zone. So the React team was working on this stuff at the same time earlier. It wasn
[01:46:30] 't like Remix influenced them completely. There's a few places, like, that ephemeral state, I think, took everyone off guard. Like, the optimistic
[01:46:37]  updates. And everyone's, like, give me, give me. But for the most part, we're kind of working on the same problems. Kind of know what's
[01:46:42]  going to happen. So I wouldn't say that, like, Remix actually, like, there's elements of it that React learned from and put in. And they're
[01:46:48]  going to give them credit. But I'm not on the React team, so I don't have to give them as much credit. I think React would have landed in mostly
[01:46:54]  the same place otherwise. So it's just that we all knew the problems that needed to be solved. And it just takes a little bit of time to find the right
[01:47:07]  fit when, like, from the React brain rather than the Remix brain. Yeah, they might have been. But, I mean, sometimes people will be like, oh
[01:47:19] , is that a skill issue? Is that, like, your architecture issue? Maybe that's better. Yeah, maybe that's better. Maybe that's better. Yeah
[01:47:40] . It's hard for me on the side. Because we could say for React. But the problem is, then you look beyond Remix and everyone is also doing the same
[01:47:48]  stuff. Like, the React ecosystem was just kind of in this bubble waiting for the core team to do something. And, like, Svelte and Vue and
[01:47:54]  Solid and whoever else were already doing a lot of this stuff, too. Like, it wasn't specific to Remix so much. It's just in the React ecosystem it
[01:48:06]  was. Because for some reason, everyone was just, like, waiting for the React core team to park the clouds and shine down their light or whatever. It's like,
[01:48:13]  when is it going to drop? And Remix and guys were like, no, I need this today. I'm going to build it. You know. No.
[01:48:28]  No, not at all. Like, maybe some of their closed source stuff. But, like, the Progressive Enhanced demo that Remix is really popular for when
[01:48:37]  they released that beta. Rich Harris did the same demo with Svelte Kit four days before it. I think that the Ryan and Florence had better showmanship. But
[01:48:49]  all these frameworks started back in 2020. Solid Start didn't start until, I want to say, January 2021. But Svelte Kit was summer 2020. Remix
[01:49:08]  was around the same time. Yeah. They really don't predate. Remix might have been the first one to, like, release. Like, try and sell it
[01:49:17] . But, yeah. They don't predate. And, like, a lot of these patterns, like, run data patching and routing, like, nested
[01:49:33]  routing with parallelized data loaders. We had that in Solid in 2020 officially in the router. But, actually, we had it in demos going back. But, like
[01:49:42] , that's how I was killing everyone at SSR benchmarks back in 2018. Sapper had that same pattern as well as the predecessor to Svelte Kit. So
[01:49:50] , it's, like, it's not actually new in the wider JavaScript range of things. It was just that, like, I mean, you can go back to Em
[01:49:58] ber Router. But they didn't do the parallelization properly or, you know, they weren't even worried about async in the same way because it was, like
[01:50:05] , 2012. And Ember Router is what inspired the original React Router. I mean, it's complicated. There's bits that each I'm improved upon.
[01:50:12]  So, I'm not going to, like, take it out of the thing. But I'm thinking, like, on broad strokes, Remix pushed React. But the
[01:50:21]  rest of the ecosystem was already kind of already there. Like, there is a bit of a narrow scope when it comes to React. It's funny because the Remix developers
[01:50:32] , a lot of them were Ember developers back in the day. They knew about how to kind of structure the apps. That's why React Router, you know
[01:50:41] , is designed the way it is. Like, the whole use of the word link as a route component, I think we deserve, goes back to Ember. It's
[01:50:53] , like, so annoying to me, like, but it's fine. Because a link component in HTML has a different meaning. Yeah, I was there, too.
[01:51:06]  I put some knockout JS in my jade templates. Anyway. Yeah, which is why I agree. There's a skill issue. That's why I think Remix
[01:51:20]  was the right move. But I think idealized server component platform makes a ton of sense for them. And they were willing to back on that. You know, so,
[01:51:30]  like, yeah. Anyway. Anyway. A lot of sympathizing here, you know, with this kind of situation. Okay. So, what do we got here?
[01:51:45]  Move to beat. Ba, CSR mode. Re-inventing the wheel. I'm excited for Remix. As I said, we'll talk more.
[01:52:03]  But, like, I think if Next represents, like, where the React team sees the future going, you know, there's going to be good stuff the next year.
[01:52:10]  Remix, bringing their more tempered mentality to these solutions is something I'm looking forward to even more. Because, like, we kind of have a lot of similar
[01:52:22]  mindset and thinking. Like, waterfalls are bad. I don't care where you put them. Yes, you can say that they're good enough, you know,
[01:52:30]  but push comes to shove. Maybe they're not. And maybe you shouldn't help people make waterfalls. I think, like, that's where Remix's heads at
[01:52:37] , right? But then again, like, React, right from the beginning, was, hey, it's good enough, right? That's why we have virtual DOMs
[01:52:44]  everywhere and not signals. So, you know, sometimes it is good enough. So, I don't know, hard to say. Right. Next can provide CSR
[01:53:01]  and SSR at the same time. I think anyone, like, can do that, as I said, if you have that ability to say, like, client only and
[01:53:07]  then, like, delay the timing with the rendering. I was just commenting on there's a difference by making a spa mode or CSR mode. It's way more
[01:53:17]  of a nod that we're going to help you come over from CRA. I think that's why the RSC conversation comes in and stuff, because it's, like,
[01:53:27]  a very, it's not, like, oh, you can kind of, like, do this. This is, like, just, like, bring your app across.
[01:53:33]  We accept you. Not really. Those are different waterfalls. Those are JavaScript loading waterfalls at Quick Causes themselves. Okay. Gatsby. I'm only
[01:53:58]  going to talk briefly about this. The only reason I can talk about Gatsby is because I have not looked into Gatsby at all. However, however,
[01:54:06]  however, however, Netlify released a blog December 18th that told me that Gatsby was not dead and that, in fact, people are developing stuff in G
[01:54:16] atsby. So, let's see what Gatsby, what happened to Gatsby in 20, um, 2023. Stability issues. Support for different platforms
[01:54:30] . So, not just Gatsby Cloud. So, now they can deploy to different ones. So, my understanding is that it's just Netlify right now
[01:54:38] . So, you can deploy Gatsby or Netlify. But having the mechanism so you can swap it is a good start. Let's see. Gatsby
[01:54:43]  adapters. Okay. You can deploy to Netlify. I'm sure getting deployment for Rercel would not take very much or AWS. Okay. Image CD
[01:54:54] N, which is, okay, so they're leveraging new Netlify platform features. Okay. There we go. So, Gatsby is not dead. And,
[01:55:06]  admittedly, probably not the framework that I'm going to talk about much on these kind of things because I'm always on the cutting edge. But, it looks like it
[01:55:15] 's continuing to get support, especially with stuff that's actually useful for developers. Which, you know, is never the stuff I talk about. But, you know,
[01:55:26]  these are actually useful features for people building real apps. So, I don't know if there's any talk of RSCs, probably. I heard some murmurs at
[01:55:37]  some point. Let's see. Can I search for RSC in this? No. Server. Come. Nope. Okay. So, I think that's pretty much
[01:55:51]  walking dead. Yeah. And it's not just from the BeFair. It's not just from the merger with Gatsby Cloud. There are a certain portion
[01:56:07]  of enterprise solutions that have used Gatsby outside. We had a decent Gatsby deployment even before we merged with them. We already had customers. It's just
[01:56:20]  the Gatsby is really smart. Like, one of the smartest systems for using data invalidation for their, like, incremental static generation or whatever. Like, a lot
[01:56:32]  of platforms have the ability to do that. Like, Bracell or Netlify or Gatsby Cloud. But Gatsby was, like, one of
[01:56:39]  the only ones I know of that would actually, like, because they had the full data pipeline where you could be, like, update one field in the database. And they
[01:56:47]  could be, like, okay, exactly these pages need to invalidate. Like, that, it was complicated with those, with the Gatsby solution. It's not
[01:56:55]  generalizable. But that, like, that is the kind of power that they were looking for and the kind of optimization that mattered to people who have, like, hundreds of
[01:57:03]  thousands of pages or whatever. You know what I mean? Like, millions of pages. Like, so, I get why people still use it. But, yeah,
[01:57:12]  I mean, we, what is it? 2.4 stars a day. It, on most, most of it at the beginning of the year. Yeah, this is
[01:57:20]  tailing off, like, yeah. Okay. It is what it is. I just, I probably won't talk about Gatsby next year because it doesn't really
[01:57:30]  fit into my, my, my scope of the world. But I, I just wanted to mention that it is important to know that it is not unsupported.
[01:57:39]  Okay. Because of GraphQL? Yes, largely because of GraphQL. Yes, largely. Largely. It's, it's smart. We've been thinking
[01:57:52]  about other types of solutions using signals and using reactivity to do the same thing. So, like, I'm looking forward to that future because if we can, there's
[01:58:00]  a really cool stuff when you understand the data dependencies of your app. And it's not just, like, the level of granularity in theory we can get of the
[01:58:10]  solutions we're working on is insane. Right? Because it's, if you've ever seen convex work with solid or whatever, like, you literally go and you update
[01:58:21]  a field in the database. And if you feed that through to a solid store, then, like, it's, it can literally be filled in a database, single
[01:58:32]  field in the DOM. No re-rendering, no, you know, like, no, you know, diffing or whatever. It's like, literally the
[01:58:41]  pipe connects almost directly, which is like, okay, fine. There's a little bit of diffing to be fair. I guess there's data diffing, but like
[01:58:51] , generally speaking, there's no re-rendering or like, like virtual DOM creation or intermediate throwaway objects or anything of that stuff. It feels like you essentially go
[01:59:01]  in, update a field in the database, field in the DOM updates, directed, right? And you can take that same kind of mentality when you start thinking about partial
[01:59:11]  pre-rendering, when you start thinking about suspense boundaries being cache boundaries to the point, like you get to a place where you're like, I'm updating my data
[01:59:20] . And because I understand the data shape and I understand how these pages use that data, I can invalidate parts of the page, not even the whole page and not even
[01:59:29]  every page, just like parts of different pages in a way more granular level. where things that like, generally you're like, oh, I thought it used all this
[01:59:38]  data, but it was actually only a child of it. It uses like, this could be insane. And I'm, but again, you, you also question of who
[01:59:48]  needs this solution. I don't know. I don't, someone might, but it's just like the potential there is just through the roof. Yeah. Yeah.
[02:00:02]  Yeah. I mean, I'm not saying the APIs are good and you, this is the thing you, you already get a considerable improvement in these cases. That's why
[02:00:10]  like you would, to actually benefit from this granularity, you'd have to have such a large scale. I'm seeing this granularity could be for people at that larger
[02:00:20]  scale could be even like exponent, like an order of magnitude better than what, like you can offer with a more, less granular solution. But, you know, like
[02:00:31] , I don't know if I need it. Anyway, let's talk about forget. One last thing. Forget was actually talked about. Um, I think the most
[02:00:42]  interesting news for me this year was that forget, um, became the auto reactivity compiler, not the auto memo, memoizing compiler. They changed their terminology. Um,
[02:00:57]  I, they, people don't know sometime in 2022, they kind of like rebooted the forget project. Like it basically, they, there was that old demo that
[02:01:10]  they did, like, I think, uh, react comp 2021. And, you know, uh, Sean was working on it and it was a very smart memoization.
[02:01:19]  They reset it in the summer. They're like, okay, new approach, new team. Uh, Josefana took over and they, he actually wrote reactive languages at
[02:01:28]  Facebook before he was on this team. Like kind of like a language design perspective, really smart guy and they have done incredible things. Um, with, with forget,
[02:01:40]  they really want to make it so that you aren't aware of the memoization going on in the background. That's the key, the second you see a leak,
[02:01:50]  something doesn't make sense. There's some side effect that you can track. Then you immediately realize that JavaScript is not JavaScript, which is like often why people's, you
[02:02:00]  know, concern with Svelte might be like when you write something, it's what you write is not what you get. Um, I actually think Svelte 5
[02:02:09]  solves that a lot better. But forget compiler is like hyper on that side where you're going to write a bunch of stuff that looks like JavaScript, but doesn't actually
[02:02:17]  execute the way you would expect it to if you were actually watching it. But maybe you can't notice as long as there's no side effect, no one knows. Um
[02:02:25] , I, some people call this the impossible project reacts been using this a little bit as like, uh, how should I put it? Like it feels like whenever there
[02:02:35] 's like a signals conversation or some kind of thing, everyone's like, oh yeah, forget, we'll solve this. So it's very easy to be like semi dismiss
[02:02:42] ive. Cause you're just like, you know, like every time it's like, oh, whoa, how does react handle this? And you were like, oh yeah
[02:02:52] , it'll be solved and forget it'll be solved and forget. Like you repeat that enough times and you're just like, like, I mean, it's pretty good
[02:02:59]  mantra, I guess. Um, I think the more interesting part about forget is whether like, we're talking about wrangling this complexity. There's different ways to
[02:03:09]  wrangle complexity, right? Like complexity is complexity, right? Um, it's this whole easy versus simple thing, right? React was always like, we're simple,
[02:03:22]  not easy, right? The thing is you can have something that's simple, but becomes kind of complicated or involved because you have so many pieces that are simple, but
[02:03:32]  you got to put them together. And it's a lot complexity, at least by my definition is in this zone where you can't, it's no longer easy to break
[02:03:44]  the pieces apart. Like you, they're entwined in such a way that you, it's harder to reason about them anymore. There's a different, like,
[02:03:52]  so in the same way, there's a difference between easy and simple. I'd say there's a difference between complicated and complex. That's probably not as well founded
[02:03:59] , but I'm just saying, like, there's two concepts that describe a characteristic. I don't know if I named them properly, where these are similar concepts, but
[02:04:09]  they are, they are actually different the same way easy and simple are. Forget is an easier, not a simplifier. It's an easier, you only pull off
[02:04:19]  simple if the, if the abstraction has no leaks, zero leaks, which is almost, which is pretty difficult for something like forget. You have to have a boundary of your
[02:04:29]  compilation because you live in a JavaScript world. So the component is that boundary, which means that there is an edge, right? It's, it's, it's
[02:04:39] , people seen Svelte 5. It's, it's the same kind of question, right? Like, do you process all the files or just the ones that end
[02:04:45]  with dot Svelte? There is a boundary to the range of where this language lives. And I think the biggest question about forget is in a world, in this
[02:04:57]  world, is React just JS anymore? That was its selling point. That was what got it to where it was, right? Yeah, we're just pulling all of this
[02:05:08]  week in JavaScript in here. Why not? Because I think it's all relevant to when we talk about frameworks. Because, uh, where is it? Bookmarks. Dan
[02:05:17] , do I, do I not have it? Did I not bookmark it? Yeah, I probably didn't. This is so sad. You think you have like
[02:05:27]  the perfect thing lined up? That's fine. That's fine. We're going to find it. Dan Shipper. JavaScript Jabber. Great guy. Performance expert.
[02:05:40]  Um, he did a poll. He did a poll. Framework is the most unreact. It's funny. This, yeah, okay. I'm like,
[02:05:54]  this is not what I voted. But EHT master it won. And. The funniest thing is when I, when I, years ago, I would have said Svel
[02:06:07] te was the most un, un, like, react. Um, because of this philosophical divide of just JavaScript being simple, not easy, but react is like very quickly
[02:06:18]  becoming Svelte ironically. Um, and it's funny, I don't think HTMX should win necessarily, but out of these choices, it's fine.
[02:06:27]  I actually put other because I said the most, um, to, to me, the most unreact framework is react itself. But because of like everybody, the best way
[02:06:35]  I can put it like positionally, you can, you can think about it is like react started in one place where it's kind of out of left field. And
[02:06:44]  then everyone else admired portions of react, took elements of it, um, moved closer from where they were to where react was. And like, kind of like, it
[02:06:55] 's, it's, it's a multidimensional thing. You can't think of it as a straight line, but like from their different vantage points kind of,
[02:07:01]  you know, adopted react because that's what was accepted. And everyone kind of moved a little bit closer in the meanwhile, react moved right across the field themselves. So if
[02:07:09]  you actually look at the full Delta of the distance, where reacts heading is probably further from its initial starting point than any other framework would be because react kind of passes past those
[02:07:20]  frameworks. It's not going further out from where it started. It's actually coming closer, you know, or like at least on one dimension, maybe it's going
[02:07:29]  out. Like, sorry, I'm the spatial stuff is so, or I wish I could draw better, like Theo or whatever. This is how I view things. And
[02:07:36]  I'm, I've, I've had these streams and everyone goes, Ryan, what the hell are you talking about? Every time I try and do this, but I
[02:07:41]  always view things in kind of like a multidimensional plane and I use it to kind of like pick certain axes that I care about. And that mental model helps for
[02:07:48]  me to understand the value of different frameworks and features. There's, but it isn't a single map. That's why I can't just like drop a 3d
[02:07:56]  or a bunch of things on you. I just write occasionally make those two axes graphs and like try and show it to people and people like explain this. And I
[02:08:04] 'm like, uh, I'm sorry if you don't get it, you don't get it. Yeah. So it took a ton of influence from react in a certain
[02:08:14]  aspect. In a sense, I think there's somewhere where I actually wrote here that I said that solid is actually almost swooping up in the space that react used to live
[02:08:22]  in. Like react started further over on one side, but they've actually kind of walked past us now at this point. Right. Cause like, like, like react
[02:08:31]  was, we're just a library. Now there you need a meta framework. Like react was like, we're just JavaScript. Now we're suggesting we compile your JavaScript
[02:08:43] . So it acts in a different way because it's easier for you. React was simple versus easy, but, or simple is better than easy. Now it's like,
[02:08:52]  nah, easy is pretty good too. Like, like just waiting for, with the compiler react supporting like mutability instead of immutability, like, you know what
[02:09:05]  I mean? Like that, yeah, I don't know. It's, it's, it's, it's kind of funny. And I think this is the biggest
[02:09:17]  takeaway from react. Even like some people will say, oh yes, react was client and now it's server components and all that. it's not as big for me
[02:09:25]  as understanding how one shifts as they go through the adoption curve. React now is well into the mainstream, right? It was, it's funny cause compared to jQuery and
[02:09:41]  like the big JavaScript things that are used on more sites. React could still consider itself kind of at the front of the curve. Like it's still gaining adopters, but
[02:09:49]  for it to get to its next stage in life, its priorities have to change for it to succeed. And I think it's doing the right stuff. It's just
[02:09:56]  like, it's a departure from where it was. And it's crazy when you think of something from our scope, how popular react is, but like, there's a
[02:10:04]  much bigger world out there. Anyway. I think forget is very interesting. It's not like you have to change all your code to forget, but I worry a little
[02:10:21]  bit that like, and maybe I shouldn't be worried. Like react is just not the react that, you know, I initially inspired solid or like, you know, was
[02:10:32]  the thing that, that basically had that impact on the ecosystem that way. A lot of the things that made react react are still there, but a lot of things are
[02:10:41]  changing. And I think that pretty much sums up react for, you know, for 2023, 2020, 2024, we're going to continue to see the most popular solution
[02:10:53]  go through a migration. The tricky part is like, it might be happening to them right now, but there's no like react to pick up the pieces. You know
[02:11:10] , there's no clearly different approach for people that like is, is, has a, like quite in the right place. Everybody's like almost too, um, similar
[02:11:21]  to react for, for it to be obvious to people where the, like the better solutions are. So people look at stuff that's drastically different and that might not be the
[02:11:33]  best thing to do. Like sometimes you got to acknowledge, even when you're on the outside, the rack does a lot of things. Well, even if you know
[02:11:42] , not everything, okay. I think you should show people how to contribute to solid JS for the sake of solids teacher. Yeah. I have no clue what that even
[02:12:04]  means. How do you show someone to, I don't even, the funny thing is, I, how many react developers have ever contributed to react? I don't
[02:12:15] , I, I like that react core. I don't even think I, I go in the react core code base and I, I've spent a lot of time there
[02:12:21]  looking at the features. I don't even understand how it works. Honestly. I haven't spent as much time, but like it's, I don't know. I
[02:12:28] , I, it's, it's interesting. I don't, I, I honestly just don't know what, what that, what this even means. Like, what
[02:12:34]  do you mean show people how to contribute? If, if I knew what they would contribute, then I just write it myself. Perhaps. I don't know. It's
[02:12:42]  interesting. It's gotta be like, probably much less. Yeah. I think it's much less. Yeah. Yeah. And it's not about more necessarily. We
[02:13:01]  got some good libraries. It's, it's about continued maintenance and stuff. People, people create stuff and then, you know, it's like they use it and then
[02:13:10]  like other, like you, you just need a volume of people in these other frameworks. That can continue to maintain stuff and keep the ball rolling. Cause otherwise you have
[02:13:18]  like a solution for everything. And then it's like, when's the last updated? Two years ago. Ryan. So how are the frames to do the performance stuff?
[02:13:29]  I mean, generally speaking, they're just more performant and you don't need that stuff. One of the big reasons for that is signals. That's what that
[02:13:39]  that's kind of like why framework authors drool over signals. People can write code that seems fairly logical and it's just that much more performant, but there is a
[02:13:49]  catch. So, but this is why signals are so hot. Yeah. Honestly, I talked about this in a, in a previous stream, but like docs effort.
[02:14:02]  God, it's so sad. The best way people can contribute is honestly docs. I know I'm just keep on shoving everyone over to Sarah, but like,
[02:14:10]  like in general, it's, it's, it's really tricky. And, and solid start, there's more contributors to solid start to solid core. It makes sense
[02:14:17] . The further you get from the core, the more like loose things get in, the more opportunities there are for, for contribution. Right. So anyway, but we
[02:14:26] 're not talking about solid right now. Um, we'll, we'll talk about solid in a minute, a few minutes. I got to hurry up though. React,
[02:14:32]  I knew it was going to be the longest. Let's keep on going. What's our second most popular JavaScript framework. Um, this year it's HTMX.
[02:14:43]  I think. Yeah. I haven't looked at Hermes. It's interesting. That's the compiler. Like that's the engine that they're like using behind forget.
[02:14:53]  Right. Like that they intend to for, for optimization. We will react adopt signals. No, probably not. Or they'll do something that's kind of like signals
[02:15:03] . God, you guys. Fine. Before we go to HTMX, I want to show you one more thing. One, one, one, one, one more
[02:15:09] , one more thing. Sorry. Bookmarks. No, uh, profile. I saw this. It's pretty cool. Um, Dominic did this. React's
[02:15:22]  looking at a way that through the context API, if you use use inside another hook, it can trigger this hook to run without the dependency changing. And if the return
[02:15:31]  value of foo is different, it then reruns the component. Basically like a signals ask thing where use has the ability to re-trigger a component. If our
[02:15:41]  rerun specific hooks independently of the component rerunning. So they won't do signals. And the reason they'll do this is because use memo is what react forget will
[02:15:56]  make disappear. So what their hope is that eventually you'll just go use my context in a component. And then they'll memoize, um, wherever this is,
[02:16:07]  uh, essentially, uh, the values taken or where it's used. And then they'll be able to like tell, because it uses foo to just update the
[02:16:17]  component only if foo changes. And they'll be able to do this by you basically just writing. Use this foo. That's, that's the goal, right
[02:16:28] ? Um, because they'll basically be able to erase all this kind of extra boiler plate. Um, so to speak, so they won't go to signals. That
[02:16:40] 's their plan. Yeah. The thing is there's a control aspect of it that I think is interesting because they, they have a zone they work in. It's so
[02:16:56]  funny because reacting talks about forget a lot is like, oh, we're just making it. So things are reactive everywhere. You don't need a signal. The whole component
[02:17:02] 's reactive or whatever. But the problem with that is what happens when you go outside of the component? Like the reason you use signals isn't because you, you consider
[02:17:11]  about the component being reactive. It's because you want the whole world to be able to interact with your, uh, uh, reactivity and not have it being contained inside
[02:17:19]  a component. Yeah. Not the same, but yeah, I, I have a lot of shirts. I have almost, I have a lot of, I don't
[02:17:33]  have a react shirt. I don't think today. I'm not wearing any framework shirts, just good old guardians of the galaxy, but you know. Yeah. I
[02:17:51]  mean, will they adopt signals? I'm not sure, but I mean, one of the big trends here is we're going to continue talking about signals, right?
[02:18:04]  Yeah. Yeah. Huge difference. Docs. Docs. Solid.js.com is the new docs. Solid.com slash docs, I think is the old docs
[02:18:10] . Yeah. These are what I wrote in the week before I did the 1.0 release. And I just like wrote a single file. I spent most of my time
[02:18:23]  actually on a tutorial. I did this in about a day. This is the multi-month effort of the, of the solid docs team. So yeah, different,
[02:18:37]  very different. no, uh, I, I don't think so react is all about composability. So their solution is much closer to Svelte 5. They
[02:18:57]  were hoping Svelte 5 would be the same, but because of the boundaries and Svelte 5, you know, the, you have them to the API wrappers
[02:19:04]  and stuff. They were like, okay, fine. We admit this isn't good. We're going to solve this. They want to, they want to make it
[02:19:09]  somehow that something you import into react can also not need to be like in wrappers. Like they want to do cross module analysis, essentially kind of like what we do in
[02:19:17]  Marco. Um, so yeah, no, it will definitely be composable still. Oh, they, they, they react at least we'll never give up that. There
[02:19:29] 's no way that they would go to old Svelte, old, old Svelte, like Svelte 4 earlier is kind of like a non-starter
[02:19:36]  for a lot of people who have the same philosophy beliefs that react and solid have. It's just like, it just doesn't, it's just not the way to do
[02:19:44]  things. Um, okay. Okay. Sorry. So let's, let's, let's move on here. Um, we need to send you 20 react shirts. Okay
[02:20:02] . So how are we doing here? Okay. HTMX, let's talk, talk about HTMX. I don't have a ton to say about HT
[02:20:09] MX, admittedly, mostly because I think HTMX is kind of, maybe I have something to say, but only because HTMX is kind of misunderstood and
[02:20:19]  maybe it's me misunderstanding it, but HTMX is mostly a primitive. like it's a way to do HTML, like it's a way to do HTML part
[02:20:31] ials. It's not really a framework. It'd be like if I ship signals with solid. And then I was like, look guys, here are signals. You
[02:20:41]  can do amazing reactive updates that are only in fact one part of the DOM and it's declarative because you just declare your data and then it'll update those specific places.
[02:20:52]  And then ta-da, you don't need a JavaScript framework. You have signals. That's what HTMX feels like to me. You know, we could
[02:21:00]  argue actually maybe one step further where like maybe signals plus like a JSX binding thing so that you could like go here. A div is a div. So you can
[02:21:08]  do declarative, some people actually find solid really attractive because of how you could just like literally go in, just go in the playground and forget about all this react looking stuff
[02:21:22]  and just be like, oh, you know what? I can just, you know, const my div equals, you know, this, you know, like there's no
[02:21:29]  components needed. It's just like a div is a div, you know, like if I create it this way. And, and then, you know, go document
[02:21:41]  dot append, you know, like, like, let me put something in here so you can see it. You know, I can go, hi, and then go,
[02:21:52]  let's append the div. Then at least in theory, maybe I make an H1. Oh, I actually have to probably append it to the body being dumb body.
[02:22:07]  Ta-da, like, sweet, you know, and guess what? There's signals that update it. Like, if that was your mentality of the world, then
[02:22:18]  like, there's a certain simplicity there that's really nice. And there are people who view solid this way. But the reason I'm making the drawing the comparison to
[02:22:29]  HTMX, because to me, that is not what solid is. Like, it's an aspect of it. It's how we keep the level of transparency. It
[02:22:36] 's one of our philosophies. But it's not what, you know, makes solid powerful. It's the fact that we have the full abstraction that handles all the pieces
[02:22:45]  around the library that makes it consistent. That is what's interesting. The fact that I can do this is trivial. And that's kind of how I feel about HT
[02:22:55] MX. Right. HTMX being your state is problematic. But we'll get to that in a minute. Yeah, I mean, we are kind of going
[02:23:23]  for a circle. I used update panels in .NET in 2005. And, I mean, people who watch my stream regularly know I call that the dark ages of web
[02:23:35]  development. It was. But there is a major difference with HTMX that I actually like. Because it assumes one thing that all those other frameworks that did this kind of
[02:23:49]  stuff before didn't assume. It, or did assume. HTMX doesn't assume that your server has to be stateful. It might help that your server is
[02:23:58]  stateful. But it doesn't assume it has to be. It's not worried about freaking serializing all the data state of your DOM back so that the server knows what
[02:24:06] 's up. You know, update panels and their post backs and all. They were horrendous. HTMX is like, no, screw this. We're just sending
[02:24:12]  HTML. So, it's great. In the same way, this is great. In fact, like, I'm not done my demo. I guess my real show
[02:24:25]  of why this is great would be, like, update count or set count. I don't really care. The reason this is great is, picture 0. And then
[02:24:42]  I was like, okay. Yeah, sorry, it's not, the playground's not clearing properly with me just appending it to the body like this when it does
[02:24:59]  the reload. But let's say I was set count C equals C plus one. And I do it every second. Okay, sweet. Okay, let's do this
[02:25:12] . What I'm getting at is, look, now I don't need a React or JavaScript framework. This is, like, incredibly powerful. I can do all my
[02:25:21]  updates and, you know, it's succinct and it's nice. The API is, you know, pleasant enough to deal with. Like, this is not a web
[02:25:33]  application. And I think if I, if my requirements for a web app or a website were simple enough to a certain degree or, like, from, like, or
[02:25:52]  they're server stateful, then I, like, something like HTML is more than adequate. Right? I think Theo did a drawing. And I, I, I
[02:26:05]  could, like, look it up, but I could also redraw it in two seconds. Right? He, he, he did this. Right? Uh, he,
[02:26:12]  he, he made a line and he was, like, he was, like, server, client. Um, and then he was, like, was it, uh
[02:26:40] , like, here, um, let's do, like, this. He was, like, he, he called this next JS. And then he called, basically
[02:27:03] , this HTMX, more or less. Something along these lines. Right? And he's, like, it's really sweet because people who don't need to go
[02:27:11]  here can do so much with here and they won't get angry that someone's forcing them over here or forcing them to have this. Right? I'll, I'll,
[02:27:19]  I'll agree with that take pretty well. Um, and, you know, it's a, it's a very clear visual way of explaining. Like, like,
[02:27:29]  where these zones split. But I, I think there's, like, a more fundamental, mental question. In the same way we're asking ourselves about CSR, um
[02:27:37] , these days. We're, we're, we're, we're kind of re-asking the question about stateful servers, um, a bit. Because the
[02:27:47]  challenge is, with partials. is understanding where, like, especially the challenge actually with having two solutions, uh, in these zones is understanding where the ownership is.
[02:28:02]  Because you can, you can still use HTMX and then add like a client framework. Some people, I've seen people trying to use HTMX with React
[02:28:09]  and stuff and like, and doing that. The, the challenge is if your state is all server-based, then like you have no problem here. You might have
[02:28:23]  a really hard time here, though, if your state is completely server-based. Like, it's a little bit tricky. I mean, it's, it's not
[02:28:29]  impossible, actually. You can just keep on fetching from APIs. But, you know, you got a little bit more work. If your, if your state is all
[02:28:35]  client-based, well, this is very easy. This is not very easy because, like, as you switch these partials, how does the server know about what
[02:28:45] 's in the client? I, I think I should start by saying what statefulness is. An example of that is, there's a difference. When you're in a
[02:28:55]  UI, you might have pieces of state that you update or change that aren't stored to a database. Like, they're actually UI state, like you toggle the view
[02:29:07] , you collapse a div, you, you know, details. You, you do these kind of interactions. We, you, you're scrolled on a scroll bar.
[02:29:15]  You do all these things. And that stuff starts, usually, like, the easiest mental model for us is to have them in the client. But you could have its state
[02:29:28] fulness be on the server. This is, like, how, like, .NET did. And it would transfer it back. So, if you, like, collapse
[02:29:34]  something and went back to the server, you know, it would communicate that. So, when it sent the page back out, the thing would still be collapsed. And what
[02:29:40] 's happening, in my opinion, right now is a lot of people are living in this zone in the center where there's a third place that state can live. It can
[02:29:50]  live in the client, persist in the client. It can persist in the server, or it can live only within inside the chunk component in the general sense, not in
[02:29:58]  the React sense piece. If the state only exists in the piece that you're swapping out, call it an island if you want, then you don't have any real
[02:30:08]  problems. Because, like, if you ship out an island and send it to the browser and it contains all the state it's going to need to interact with, then
[02:30:19]  it will work properly. If, however, that state exists outside it and multiple of these islands have to communicate with each other, there's no way, unless you send
[02:30:35]  it back yourself for a serialization, that these different islands are going to be aware of it. Like, when you go to server render the next page, or the
[02:30:43]  next partial, it needs the information, and it needs information that's persisted on the client, you have to send it back. Otherwise, this piece will have the old
[02:30:52]  information, because it never got it, and whatever else you have in your view, you know, on the other side, will have the current information. I don't know
[02:31:02]  if this makes much sense to people. I'm terrible at explaining things these days, I find. But, essentially, without manually sending it back and forth, if it
[02:31:12]  lives outside on the client state, there's a potential for tearing. Now, you could say that this is fine for a state that's only client-side, because you
[02:31:22]  only render it client-side. This is why people are putting web components in HTMLX. This is why people are doing client rendering in HTMLX. I.e
[02:31:32] ., if you put React in your HTMLX page, only render it, or partial, only render it in the browser. Don't try and do SSR. Because the
[02:31:41]  second you do SSR with partials, you have a tearing of state. You have a client that, you know, has updated count to 10, and that partial piece
[02:31:51]  isn't aware of that when it's on the server, unless you explicitly send it back. And the bigger that state gets on the client, the less likely you're
[02:32:00]  going to be controlling that sending back. So, for, like, something that cares about client state in this zone here, HTMLX's solution, or assumption, rather
[02:32:14] , to not, you know, worry about that kind of state is a good thing. But it means that, if you actually do need to worry about the state,
[02:32:23]  you have to do manual, you have to do manual stuff. That's just the reality of it. So, like, it's hard to consider these even solving the same
[02:32:32]  zone of, of, of, of issue. react with server components is trying to like go further and further and further and further back. But like this moving forward would
[02:32:50]  require a significant investment on the client side of it. One that I'm not sure a lot of these frameworks care to do. HTMX might be one of the exceptions
[02:33:02] . I know there's like a hyperscript thing people are working on. But like historically stuff like AlpineJS, SimulusJS from Rails, like
[02:33:15]  these as client frameworks are not particularly impressive. I don't know why it is. We built a petite solid on stream one time, right? Just for fun. And we
[02:33:31]  scored about the same as like Inferno at the time. It was more up by Lit, like somewhere over here. But like, can you guess where Alpine
[02:33:42] JS is on these kind of client side benchmarks? Right beside its buddy Blazer. So like, there's some overlap, but like, I guess I'm not
[02:34:03]  making this clear enough. There's a fundamental issue here with the idea that if you preserve client state, you have to be able to send it back to the server.
[02:34:17]  So I think this is going to be a world where are I mean, I let me ask the audience here. Are we going back to going back to server stateful
[02:34:28]  servers? Like, is that the thing? When I say state, I don't mean like your bonus database. I mean, literally, I'm keeping track of
[02:34:49]  every, like, temporary thing, like I moved some piece of my UI or whatever, like every piece of state needs to be communicated back to server. Like stuff like Phoenix
[02:35:00]  Live View does an amazing job of this. There's there's there's there's like there are these solutions that exist. I'm just catching up here with the chat
[02:35:14]  because I was talking for a while. People are liking Alpine with HTMLX. Of course they are. Right, exactly. But it's like, it doesn't even
[02:35:33] , it doesn't solve remotely what React solves. Like, and overly, it's unfair to make a comparison like this because HTMLX deals with a primitive that I think
[02:35:46]  is very powerful in the sense you could say that server components are kind of like HTMLX. Like the idea of serving up partials, the difference of server components can persist
[02:35:55]  state, right? Like client side state works seamlessly in server components. When I had that diff up earlier, I had state in the client, if you pretended that update
[02:36:11]  came from the server, then like we, we, the reason server components work is because they, the client components only render during SSR. Like the problem is if you
[02:36:23]  don't render the client components during SSR and you have lots of stateful interactive pieces, you get a really weird experience where like, like it's, it's like
[02:36:32]  the way we did websites in 2010, where you like load the shell of the page and then you have the JavaScript stuff, um, all popping in. Right. The
[02:36:41] , the reason Astro, which we'll talk about very soon, I think it's the next one on the list, is so powerful. It's because it does SS
[02:36:47] R. If Astro did not do SSR for those islands and just did CSR, it's kind of like who cares. Like I understand that they advertise that
[02:36:57]  as like something they can do, which is cool that they can do it. But generally speaking, like an express server with like, that's how we built websites back in
[02:37:08]  2010 or 12. Like what ended up happening is our, the islands got bigger and bigger and bigger and bigger. The power of islands is not that. Islands power is
[02:37:18]  that you can nest them and you can project them. It's not like micro front ends. Micro front ends are like, here are our isolated things. Like in one sense
[02:37:31] , micro front ends are great because like, you know, big teams need them and they can move independently. But the actual power of islands architecture, like we've been
[02:37:39]  able to do micro front ends, like sure, wrap it with a nice DX, but it's because of that kind of transclusion, that like projection of stuff, the
[02:37:50]  way that you can get two trees woven together. If, if people just wanted to stick like some client JavaScript inside a server rendered thing, you know, we've been
[02:38:05]  doing this the whole time. There's no revelation there. You know, like, I don't know, sales JS is another one, like, but literally express server or
[02:38:15]  anything like that's how client side JavaScript framers worked. Maybe this is part of why, uh, CSR is on the comeback, but it's like, there
[02:38:29] 's a reason we ended up here in the first place because you don't want, at a certain point you start and you go, okay, that's fine. I can
[02:38:36]  render my HTML and I have a few of these islands, little pieces, but at a certain point, you're like, I have too many of these to manage the states
[02:38:43]  of them connect. They are related to each other. And if your only option there is to blend them all into one giant island, at a certain point, you're just
[02:38:52]  like, I'm just going to do the whole thing as a single page app anyways. That that's how it got there. That's why I'm saying the fact
[02:38:59]  that Astro does server rendering is what changes, breaks the pattern. For example, it's because the solution isn't necessarily just make a big island. It's like,
[02:39:08]  let's talk about how we can share a state. What makes React server components so compelling is they actually can persist this through route navigation. Something that even the view transition
[02:39:20]  API and Astro doesn't really succeed at. As for HTMX, it seems like a good solution for some things. I think it will continue to gain popularity.
[02:39:35]  I think people will be hyped about it. But it's like, it's, I guess, in a sense, when you leave someone in a place where you're
[02:39:49]  like, they need to find a solution that doesn't exist, they end up building their own framework. HTMX is the framework that backend developers built every single time they
[02:40:00] 're like, oh crap, I got to put some React piece on my page. Like every time like, okay, I need to, I've got my express server
[02:40:08]  here. That's JS, but let's, let's say, you know, Django and Python or something. And they're just like, crap, I need some
[02:40:14]  interactive part. I need to put React into it. Do I use next JS? No, I'll just build something myself. A lot of them were like, yeah,
[02:40:21]  sure. I'll make myself. And they spend like a day and they do it. HTMX is like that person decided to like spend a couple months on it instead
[02:40:30]  of a day and took it to that next level. Whereas like, okay, look, this has all the niceties you need. And this can do partials and
[02:40:37]  more interesting stuff. Have at it. That's where I'm sitting on it. It's like, we shouldn't be comparing like, like the only, I guess the
[02:40:48]  only reason HTMX haven't existed in the past is because this was kind of so easy to do yourself anyway. Like you didn't really even bother with it. Maybe
[02:40:57]  not all the way to what HTMX does, but you just kind of go like, okay, sure. Like, I'll just like, you know, put
[02:41:02]  a web component on a page or whatever. Like I think HTMX has kind of taken like the gone, like, okay, no, this is a real pain point
[02:41:11] . And as I said, people, people are loving it. I, I do expect sometime in the next year where people realize like, oh, this isn't really a
[02:41:18]  replacement like this. This is good for a lot of stuff, but like, we're not really even comparing apples to apples here. Like, but who knows? Maybe,
[02:41:27]  maybe that won't happen. Okay, stay full servers on the edge seem pretty hard. Yeah, getting back to my question I asked six minutes ago. It just doesn
[02:41:43] 't need a stay full server. But if the state doesn't live inside the component you're swapping. It has the same issue that like view transition API has,
[02:41:57]  like, Astro's view transition API. Like, I showed it on my Astro stream, like essentially, the server is not aware of the state that you change
[02:42:08]  in the client when it goes to render the next piece. What if you only do HTMX for stuff you'd use RSCs for and keep your URI frame
[02:42:25]  for URI frame for? Can you server render the JavaScript inside the components initially? Can you transclude? Can you send the HTML between, from the client components through
[02:42:40] , like, can you send additional server children through, which have more client components? Can you, like, can you set up the hierarchy so you don't just hit that
[02:42:49]  first island and die? Yeah, RSCs are stateless. That's the whole, the state's in the client. The client is the source of truth.
[02:43:02]  That's why it's a very smart design in that they, it's the initial SSR solves the initial page load issue and the continued updates using reacts, coordination, mechanisms
[02:43:19] , suspense, and transitions make the, makes the swap in, even if stuff's only getting client updated, rendered, um, like, uh, smooth, basically.
[02:43:32]  Yeah. I mean, I, I've thought about that, right? Like what it would be nice primitive to have. Um, it would save, it would definitely save
[02:43:47]  me from writing. The funny thing is I don't need the declarative bits. I just need the mechanical bits and I kind of, yeah, I mean, it
[02:43:56] 's, it's interesting. I, I would use it for like router. I think the one place I'd use it is like for route nested route sections.
[02:44:18]  Right, right. And in the performance on the server rendering is huge, right? That's a big thing like that. The only problem is, I mean, this
[02:44:28]  is, this is a tricky one. I kept on trying to explain this to people. Um, it doesn't end with just rendering the server on the page. Like the
[02:44:48]  cost of, like, if you're going to need to do that decline, JavaScript anyways, for stuff like, yeah, if you can get away with jQuery,
[02:44:56]  then good on you, I guess. Right. That's how we like the role that Amazon or like, or that's how Amazon rolls. Right. Um, but like
[02:45:03]  generally speaking, you don't control the end user's device. You control the number of servers you have. So like, while there's a cost on that initial load
[02:45:16] , if you're going to push stuff like onto the client anyways, having JavaScript on both sides is the only way you can actually optimize the handoff in a reasonable way.
[02:45:24]  Um, the reason why partial hydration for quick or the RCS and like all these things that actually reduce the load up page. Cause it's not over when you put the
[02:45:33]  HTML on the page, your page has to be interactive and the network latency and those aspects are much bigger than your CPU. So while at a large enough scale, CPU
[02:45:48]  cost becomes a big concern and you'd want to optimize it. The impact you make to your end user is way more considerable different. Like basically, if you care about
[02:45:57]  your end user, you choose JavaScript. You, you will give them a better, you have the potential of giving them a better experience, unless you're ready to hand write
[02:46:08]  like jQuery style, practically all the JavaScript you want to use. And you can scale that on your developer team. Otherwise, no. How are you doing, Theo?
[02:46:17]  Glad you can join us today. It's actually 200 viewers across Twitch and, uh, YouTube, but it's yeah. Yeah. Yeah, completely. Yeah. And
[02:46:39]  to be fair, like this, this graph I said next, because that's what Theo used. Like, I think this has been the goal, the goal of JS frameworks
[02:46:48]  for a while now has been trying to pull this over. I, the thing is, I don't see this red line moving over here. We'll see. Did
[02:46:58]  I summon Theo with HTMX? Yeah, I'm not sure. The concept of HTMX. Yeah. And that's kind of like the scenario we're in
[02:47:20] , right? Anyway, just catching up with chat here. I finished all my coconut water. Yeah, okay. I'm actually very, this is one of the
[02:47:43]  most exciting things about server components, potentially, is if you could get the logic. I think one of the challenges here is like, some large companies do stuff like this.
[02:47:53]  Google compiles Java to JavaScript. I think the problem people miss here is stuff is not just templating. There is actual JavaScript logic involved. So if you're fine
[02:48:06]  having GoLogic working and then JavaScript logic, the, the, the key though, is you got to get the, I think you need to get, do you
[02:48:15]  have a way of rendering the JavaScript pieces, like the client components on the server in your Go server? Right, right. This is what I'm saying. On a
[02:48:33]  cost basis. Yes, but end user basis. I'm saying, yes, it could be prohibitively costly to a certain degree. But like, at a certain point
[02:48:47] , I don't know what your user base is onto that. But until you get to the scale where that's going to kill you, because of the cost, you
[02:48:56] 'll be delivering a better end user experience for your end users. And your developers might actually even be happier. I'm not going to take that take. That's Theo's
[02:49:05]  take. I'm, I, I, I, I don't really know anything about developer happiness. It's the knowledge of hydration, right? The problem is your
[02:49:28]  JavaScript needs to wake up in the client. Now, if your JavaScript is related to like some pinpoint interactions that you don't need very much, then you're fine.
[02:49:39]  But if you're trying to do anything substantial there, you have JavaScript that needs to run in the client and needs to like do stuff. And you have data you need to
[02:49:51]  send with that JavaScript in order for it to interact with it. So there's a data serialization consideration as well. So if you increase the amount of data serialization
[02:50:02]  and the amount of JavaScript, essentially, what I'm arguing here is you can know in that zone, which is now owned by JavaScript, because it needs to run on the
[02:50:16]  client. The only one who can optimize it to send less is that JavaScript framework itself. The fact that we run JavaScript on the backend or an SSR is what lets
[02:50:28]  us know how to skip serialization of certain parts of data. It's what allows us to know what JavaScript to use. The optimization happens in the JavaScript layer. If you
[02:50:40]  don't do that, yeah, you can client render it, then that's fine. But I'm saying it's like, like, you inevitably get here as your
[02:50:51]  need for client interaction goes up. I wrote an article about this a year and a bit ago. Let me see if I can find it. I called it the JavaScript paradox
[02:51:04] . I go into this more detail, but it's basically explaining why the only way to get less JavaScript in the browser is to use more JavaScript. My take is the
[02:51:21]  lesser end test will always be cheaper even if you're doing SSR. Yeah, it would be interesting to know. That came up a little bit earlier, but yeah,
[02:51:34]  it'd definitely be interesting to kind of know that for sure. I think HTMX, as I said, will continue to gain popularity. I think people who try
[02:51:48]  and use it for for like, for a lot of basic stuff, like the site that I'm looking at right now, HTMX could probably handle it. Probably getting
[02:52:01]  much beyond this though. I think people are going to get disappointed, but it's fine. Like to be fair, we have a, we have a decent range here.
[02:52:09]  We're talking about HTMX right now. Do any SSR frameworks embed data for the client who has to use? Pretty much all of them. That's like
[02:52:24] , like that's basically, that's pretty much how they all work. They, they, you pull the data on the server and you send it along. You could
[02:52:37]  stream it too. And that way, you need the data for the hydrate. Now, arguably, if you don't hydrate, like we create the problem, you
[02:52:45]  know, in a sense, if you're just doing jQuery, then maybe you don't need all of that data, but like you're going to get to, there
[02:52:52] 's a point, there's an influx point, which happens early enough on the app cycle that you're going to hit this. Yeah. Yeah. I'm not
[02:53:06] , I'm not, I'm not saying that, but like the funniest thing about this is that aspect hasn't changed. If anything, the ones that need more have
[02:53:21]  only gone up in time. So why were you guys tempted by React in the first place? Like, why weren't you just not like, why weren't you just using
[02:53:30]  whatever tool you had available to you? Like, that's the part I don't get about this. I'm not saying that there are, aren't more sites like
[02:53:42]  that. I'm just saying like, that's always been the case. If, if, if anything, there's actually less proportionally now than before, you know,
[02:53:54]  like the interactive bar has gone up higher. So then like, how would you ever expect that to actually replace the thing that was developed because of the shortcoming?
[02:54:21]  Yeah. Yes. Probably. I mean, Marco, when they developed it at eBay, there was a real performance need. They had the show. They, the problem is
[02:54:33]  if you have the need, which is probably more people than they realize you get to a certain level of complexity and like, you're like, I want my developers to be
[02:54:45]  able to work with one mindset. Like none of this has fundamentally changed. I said, the only thing that I think makes HTMX really appealing is that they,
[02:54:54]  they're unlike any solution in the zone before they, they're not forcing you to have a stateful server in the backend. They're saying you can do this without a
[02:55:03]  stateful server in the backend, which I think is the, it's, that's the piece, which makes it more approachable. So there is a certain subset of
[02:55:12]  people where now this is actually a approach that's viable where it wasn't before. And then there's another group of people who, who at least think it's a
[02:55:21]  viable approach when it really won't be for them, but at least they can come in. So like this, this is, this is the, this is the biggest strength
[02:55:31]  of HTMX here. And I said, over the next year or so, we're going to see that shake out between the people where this new zone enables them,
[02:55:39]  which probably the majority of this section and the other people, um, that will realize that like, where this falls short, no one forces them. Yeah. Pretty
[02:56:01]  much it's, but no, why? Because it's nice. I think this is like this there, there's probably some, it's so funny for all the
[02:56:11]  complexity complaints. I think there's a DX piece here. Um, I don't think power marketing maybe, but like react is such a like small piece compared to WordPress or
[02:56:20]  whatever. You know what I mean? Like, like reacts market share on top sites is like, I don't know. I forget what it, it's like the 10
[02:56:29] %. And like, you know what I mean? Like the most sites out there are actually using a lot of other stuff. It's just funny when it kind of creep
[02:56:37] s into like our tech sphere of influencer sphere of like mind share side. It's good. It's getting a lot of attention. It's I've, this is the
[02:56:47]  most I've talked about HTMX pretty much ever because it's just hasn't interested me because I know that it just doesn't matter where I care. It's that
[02:56:56]  simple. I think it does matter to a lot of people though. So it's cool. That continues to grow. I just literally, there's almost no part of
[02:57:03]  it that like I'm going, Hmm. Interesting. You know, WordPress is for dental offices. There you go. All right. that's, that's not happening
[02:57:28]  probably anytime soon. Unfortunately, I think react is going to be the default choice for quite a while. Okay. Who's next on our list? That's enough HTM
[02:57:36] X. It looks like Astro's at 38. Let's see here. So actually, why do I have a separate category here? Yeah. So Astro's
[02:57:56]  at 38 and then Svelte's at 28. Okay. So Astro's next. Let's talk Astro. Um, what do I, it's funny HT
[02:58:05] MX, I just draw this diagram. I don't have anything else to add here. Okay. Let's talk about Astro for a moment. Okay. This
[02:58:22]  is in the last 12 months. So this is about hype. We're doing hype order. dental. Oh, there you go. Okay. What do I want to
[02:58:36]  say about Astro? Lots of growth and really, and releases. I want to talk about both of those. First of all, Astro really came into its own
[02:58:51]  last year. Like I remember for the longest time, me and Fred would talk and we're kind of lockstep with solid and Astro in terms of adoption and stuff.
[02:58:58]  And we had a little bit of a headstart, but like, it was always pretty close this last year. Astro just kind of like really took off. Um,
[02:59:05]  again, it's kind of like the HTMX thing. And there's a certain aspect to it, right? Um, you know, people mentally wanting to get
[02:59:13]  it away from single page apps, SSR, all this complexity that we've been talking about today. And Astro is brilliant when it comes to like figuring out their niche
[02:59:24]  and, and like, you know, just owning it. Right. The thing is like, I remember early, the first release in this year was Astro 2.
[02:59:36] 0 in 2023. Let me, I feel like it was, it might've not been Astro 2.0. Yeah. January, 2023. Right. Um, content
[02:59:50]  collections came in, right. Better error handling, all this stuff and update to beat, but whatever. My point is first Astro 2 comes out, which doubles down on
[03:00:01]  that, like basically making this kind of like turning the, uh, front matter of their files into basically a database, which is kind of with type safety, you know
[03:00:11] , which is incredibly powerful. That's part of the story. I Astro, um, at this point, when 2.0 came out around this time, people kind
[03:00:22]  of just, it's like the United nations, like everyone's like, okay, you know, if I, if I can't choose between what JavaScript framework, I
[03:00:31] 'm going to use, I'm just going to use Astro. And again, kind of like, it's just HTML, this kind of mentality, um, uh,
[03:00:42]  kind of got us to this zone now where we, where we're sitting, where, um, people have, you know, had enough. Right. And if I'm
[03:00:54]  building that site, why would I bother to do anything else or anything more? Um, this, this is pretty powerful. I think MPAs have been just like
[03:01:07]  we said CSR is underrated. I think MPAs have been underrated, um, for the last several years. Um, just because it's been a
[03:01:16]  long time since the browser was like a problem. Like when you, this site is an MPA, you know, like, yes, I can see this thing spinning when
[03:01:27]  I switch between these pages, sorry, documentation is not where I want to go. It says home showcase blog, but like we don't have to worry about the paint
[03:01:37] . And the truth matters is it was streaming. You can even show loading indicators here. That's like Marco's old trick. Like it's not a problem. In fact
[03:01:47] , when I went and did the, the start, the solid start docs, it looks like I'm loading everything in the computer. I, I did it with islands
[03:01:55]  and an MPA myself. This is what's all start, but I just wanted to like kind of point out that MPAs are, are, are not particularly problematic
[03:02:05]  for, you know, a doc site or lots of different kinds of content sites anyways. So Astro is really cool because literally you, it's funny, it's
[03:02:14]  JSX, but it feels like HTML. So people just kind of come in and then just like drop their thing out and you can just do whatever you want. Astro
[03:02:20]  equals convenience, right? We've had a great time with them. Like this Nord VPN site is a solid as an Astro solid site. A lot of that combination was
[03:02:30]  used a lot. That's why I'm also a big fan because we've always really worked closely together on a lot of, um, you know, large deals and
[03:02:36]  they come in through Astro. Right. Which leads to this kind of Astro goes V for SSR. Um, and I think that, I think that's a
[03:02:47]  pretty fair thing. I, this is something that I was kind of touting even most of the year, because it kind of seemed like the obvious thing. You could just
[03:02:54]  bring in whatever you want. Astro has its own opinions, which, um, go a little beyond that, which is why I might not make that statement today.
[03:03:05]  But for general purpose standpoint, I would say close enough. So Astro, it's so funny when HTMX came out, I was like, I went to
[03:03:24]  friend, I was like, so you, are you supporting it? Like Astro supporting HTMX? He's like, I don't know why you do that.
[03:03:31]  I'm like, trust me Astro is where people are going to go first for HTMX on the JS side. You're right for go and whatever other, for
[03:03:36]  us language, you're gonna do something else. But Astro is like the logical place to put HTMX. And actually later in the year, I think Ast
[03:03:42] ro 3, they released support for the blog here, can I see all the releases? Whatever, let's go. Astro 3.0, they added support for
[03:04:02]  partials. Maybe it's not that one. Is it Astro 4.0 that added support for Astro? Astro did three major releases this year, not because
[03:04:13]  of, you know, it's terribly unstable. It's just because the team's been a complete beast. Let me see here. Partial, or do they call them
[03:04:22]  fragments? let's try this one. Partial fragments. Yeah, like wait, it happened this year. I'm not finding it in the release article. Maybe it
[03:04:40]  was like in a minor update. My point is Astro very much is the place where people can try any idea out and they can just do it and not be, they
[03:04:51]  can kind of push away the, that framework knowledge thing. You can make a site and then put a little piece on. It's that same kind of ease of use
[03:05:00]  that I was talking about, you know, in that HTMX might give to other languages. You know, one of the big parts with Astro this year also is
[03:05:10]  they got like proper HMR working inside the islands. Like this is the kind of stuff that, you know, in one sense you go like, oh, I've
[03:05:20]  had HMR working in my client side forever, but have you had it in a place that you, it also works with your, with your landing page of your marketing site
[03:05:28] ? So like, Astro is, is definitely, you know, well deserved in terms of a lot of the, it's, you know, kind of gain in
[03:05:42]  here. People always come to me and, and like, you know, should I use it solid with Astro? I'm like, yeah, um, probably it's
[03:05:50] , that's a good way to go depending on what your use case is. But in a lot of cases, it's a great way to go. 3.4
[03:05:59]  was the release. Okay, there we go. I'm on everyone's team. So yeah, I think I, it's funny. I got so much spicy stuff
[03:06:23]  to say about React and HTMX. I don't have much to say about Astro. I think the, I think the only thing that I'm going to,
[03:06:28]  going to say about Astro, which is a little bit tricky here is Astro is if I go back to my Excalibur draw, it's, it
[03:06:47] 's still in this red zone, even with view transition APIs, right? Like no one's expecting Astro to be a client side framework. It literally has no client side
[03:06:58]  portion is literally purely in the server. I'm saying Astro islands with view transition APIs still is in this zone, not the full zone. Um, and it's
[03:07:11]  for the same reasons that I was talking about with HTMX, right? Client's persisted state literally breaks hydration in frameworks. You can't render the next page
[03:07:24]  and reference state that's been updated on the client when the server doesn't have it. This can even happen with lazy, um, lazy hydration. If you aren't
[03:07:35]  waking things up via reactivity, like if you have islands and you say, I'm going to wake that up later. And if the state that it depends on changes,
[03:07:42]  hydration won't match and it'll break. But that's not the concern. Astro's assuming that the majority of the cases when you use Astro, the state
[03:07:55]  is in that third zone inside the component itself, the island itself, not persistent on the server, not persistent in the client majority is in the component itself. So it works
[03:08:05]  in a very nice range and it's very happy there. The thing you have to understand about these partial solutions, even ones that can persist islands is how this is actually
[03:08:22]  something I hit with solid. Actually. I was thinking about it. It's, it's, it's actually very hard. HTML is an output format. How should I
[03:08:33]  put it? Like think about when you, maybe I can pull my discord up on my computer and see what I give me two seconds. I'm going to pull out an
[03:08:43]  example piece of code for you to look at and think about here, consider this component. Okay. I'm going to just put in a solid playground just so you can
[03:08:56]  see it. Consider this component. This is a react component. Pretend it's a server component. I'm telling you a server component and inside you have some data that
[03:09:05]  comes in the props and you're mapping over it and you're setting a client key, right? In fact, you know what, I'm gonna make another one too.
[03:09:14]  Consider even this component. If the HTML that you get at the end is not the same as the intermediate virtual DOM output that you get from something like react. What I
[03:09:37]  mean by that is like, obviously, um, like in a, let's pretend this client component rendered to a span. In one example, if show is false,
[03:09:50]  you just get a span back. If a show is true, you get a div and a span back. Okay. But when you only get the span back or the client
[03:10:01]  component back, the rendered HTML has no knowledge that this expression even exists. If this was client as well, what I mean by that is like, unless they had an
[03:10:19]  ID, like a key, so to speak, when you're doing your HTML diff, the first client, if you initially just rendered client, and then your update has client
[03:10:30]  client, how does it know which of the two clients is this is the one that it should persist and which is the one that it should create new. Now, don
[03:10:50] 't get me wrong. Astro has an ID mechanism where you can actually like, say persist with an ID, but I'm saying in the general case here, HTML
[03:11:00]  loses this information. It doesn't know to resort existing items a list. It has to do non-keyed updates, basically for everything. And this is true for any
[03:11:13]  persisting HTML based system. I know a lot of the swap things like turbo links or HTMX don't do diffing, right? They just like swap panels.
[03:11:23]  So it's easy. But I just want to kind of point out here, just kind of an interesting side effect of this, the combination of both client state living in the
[03:11:34]  browser and hydration basically breaking because server has isn't aware of it when it tries to render the next page. And the fact that HTML loses information, it's the same
[03:11:48] , like similar to like, I don't know if you've ever seen people, I have talked about this for experiments where people render, try and not do the double data
[03:11:57] , they try not to render that big blob of JSON on the bottom. And in HTML, someone asked earlier, like, does any JavaScript framework extend the JSON along the bottom
[03:12:05]  of the page? And I said, like, every framework. Well, if I just pull out like, our favorite Hacker News demo, that's not, that
[03:12:12] 's not CSR. Right. You'll, you'll always see this big, where is it script at the bottom that has all the data. And that same data will
[03:12:25]  be rendered into the page, right? Like we'll, we'll find the same text multiple, like two times on the page. What's interesting is that, sorry
[03:12:38] , where was I trying to think of my explanation? I was talking about the diff, right? What's interesting is that it's almost impossible to avoid that in these hydration
[03:12:50]  frameworks, because the final output in the HTML, let's say it's a formatted date, you don't have the original date. So if something changes the date
[03:12:59] , you need the original date, not the formatted date. It's lossy. In the same way, DOM structure wise, HTML is lossy. Having these updates
[03:13:08]  being non-keyed is probably okay, potentially. But I just want kind of like, just kind of pointing out there that the stuff that React server components does,
[03:13:23]  is not exactly equivalent to an HTML diff. And these kind of these kind of gaps are kind of part of what makes server component solution, um, kind of compelling because
[03:13:38]  it, it does actually, you know, deal with persistent client state automatically. It, you know, it, it does deal with the fact that the structures are, you
[03:13:49]  know, can, it can do keyed updates. Oh, big raid coming in right now. So I got switch to Twitch and see what's going on. Oh,
[03:13:58]  wow. That's a lot of people. Um, coding garden messages closed down. Um, wow. Thank you for joining my stream. I'm talking about JS frameworks
[03:14:11] , uh, kind of talking about a year in a review, talking about where the frameworks are, talking about the technologies. Um, so far we've talked about React.
[03:14:22]  We talked about HTMX and I'm just wrapping up here with Astro. Um, but, uh, yeah, welcome everyone. Yeah. Yeah. No,
[03:14:34]  a lot of spicy takes about HTMX. I'm unfortunately I got, I still got a lot to cover, so I, I can't, I can't get
[03:14:40]  back to it, but thank you very much for joining, joining the stream. Um, what I'm doing is I'm going over, uh, a lot of the trends
[03:14:47]  and JavaScript frameworks, um, past year and going into 2024 and I'm going over each framework in what I call hype order, which is the number of new GitHub stars
[03:14:59]  over the course of a year. So that was Astro. Um, I guess my biggest takeaway on the Astro side is I think it's going to continue doing what
[03:15:10]  it does well. And I think people are going to continue using it because it does fit a good majority case. I think there's, I still, I still think
[03:15:21]  that there's this gap, um, in this zone that is like only currently really supported, um, you know, by client side based frameworks. Basically what I'm suggesting
[03:15:36]  is this happens before this, and I'm not even sure if this ever happens, not that it needs to, it's just interesting. Um, some of the kind
[03:15:46]  of technical problems you have when you face, when you work on these problems. You've been doing PHP and Laravel, uh, yeah. Yeah. Yeah. It
[03:16:05]  does help. Um, definitely. Um, but the, some of the serialization cost isn't just over the wire. It's actually the cost of serializing the data
[03:16:15] . I don't know if you guys remember from a couple of years ago, I did a demo with Ryan Florence made some comment about streaming, not mattering and, uh
[03:16:22] , islands, not mattering. I can't remember it. Like people are talking about it. And I, and I pulled up Marco and remix on like a large
[03:16:29]  hacker news page. And I did the, like the, the web perf test page thing where they record the video of it loading. Um, and it was like, it
[03:16:41]  was like a blowout. Like Marco was, was like visible in two X, like two and a half seconds and like hydrated by like three and a half seconds and
[03:16:53]  remix like showed up at like nine seconds and was hydrated at like 14 seconds. Like it wasn't even remotely close, exact same demo. I built them both myself by hand
[03:17:04] , um, using, you know, specific data set. And yeah, that example was purely data serialization cost overhead, not the cost of actually, um, necessarily sending
[03:17:14]  it though. Sending it would be a portion of it, but even the cost of actually serializing it would actually be considerable. It's hard to say there's
[03:17:22] , there's a niche need, uh, wasn't frameworks are good. It's, I think I can see why people would use a wasn't framework, but like the
[03:17:36]  fundamental, like I know, uh, Greg from laptop has been working at shrinking the stuff down. Um, you know, like getting it into a reasonable range. If
[03:17:44]  that's the case, then we, we can probably talk. But the biggest problem with wasm frameworks is that the upfront cost can never really compare to the JS frameworks.
[03:17:53]  Like update performance is not a problem. Like they can update and for live site, perfect fine. It's just the actual like code, like the actual, like I built
[03:18:01]  a site and I need to load a page that overhead will be prohibited for a lot of, uh, types of sites. And don't get me wrong. You don
[03:18:09] 't, you don't all need that, but it's ironic when the people building and choosing that probably do it because of like the better server side rendering. Like if you
[03:18:17]  just love rust, go for it. But if like, if you care about the server rendering speed and you're like, yeah, I'm going to deliver the best experience
[03:18:23]  from my customer that they're kind of funnily at odds with each other. You're almost, as I said, better to use a JavaScript framework on both sides
[03:18:35] . So yeah, that's my summary of Astro. Lots of growth, lots of releases. Um, I'm very excited. I think they're going to continue on
[03:18:46]  this trajectory. Astro is one of the greatest communities. Um, so yeah, who's next on my list? Uh, okay. Next what Nux is at 21
[03:18:56] . Let's go back to frameworks. Svelte. Let's talk about Svelte. Svelte is next on our list. Okay. Svelte
[03:19:06]  on the hype meter was, had kind of taken a break for the last couple of years. They wouldn't have been early as early on my list. Um, if you
[03:19:15]  go back like 2022, 2023, like a lot of us in the JavaScript framework world, where we don't have many resources, they spent two and a half years building
[03:19:24]  a meta framework. So yeah, Svelte was very quiet pretty much all of 2022. They released Svelte kit like right in December. I think it was
[03:19:34]  like right at the end of 2022. 2023 Svelte bounced back, um, completely. And the streaming wasm, uh, it helps. Sorry, just on a
[03:19:53]  side note. It definitely helps. Um, and progressive enhancement use laptops. He has progressive enhancement and it's, uh, streaming, I believe. Um, that being
[03:20:05]  said, uh, like, you can also stream and jet like it's going to be a question of if it's good enough for your use case. People seem to
[03:20:24] , it's, it's a different order of magnitude difference. Like even when I say that react is like 10 times slower than solid and, uh, uh, server
[03:20:35]  rendering and I think Leptos is 30 times faster than the react. So another like additional three or four times faster than solid at server rendering. Like how long does it
[03:20:45]  take to server render, at least the static part of the initial render of the page on a server? We're talking like two, three milliseconds. How long does it take
[03:20:56]  to send crap over the network? We're talking in hundreds of milliseconds. Like even if react is really slow compared to the other solutions and it takes like 20 or 30
[03:21:04]  milliseconds to render a page, it is like 10 times less impactful than the difference you can make over the network calls. Like it just, it matters if you have a lot
[03:21:14]  of servers and it's going to be expensive and a lot of stuff hitting you, you know, like when you get to that scale, I know everyone's been like drinking
[03:21:21]  the primogen juice or whatever. Right. And he works on a large service like this. I can respect that, but it's like, like the, the,
[03:21:36]  the, the, the difference you can impact over the network is going to trump the difference you can make on the CPU rendering on the server. It's not even close.
[03:21:48]  definitely. Definitely. Definitely. I had a great conversation with a guy who was working on a real-time, uh, game dev stuff. We, we, we
[03:21:59]  do part of the, the, and he was talking about like how they're encoding stuff, but part of the problem here, you, they should be worried about data on
[03:22:08]  the wire and they should be worried about CPU speed of the devices you don't control, which is like people's phones. So like just coming up with a super good
[03:22:16]  encoding that's expensive to run on someone's device is not going to help you either. Um, part of the reason partial hydration like islands is attractive and server components, um
[03:22:28] , although maybe not react server components, but like the concept of this thing is not just the partial execution of JavaScript, which, which reduces the execution cost of JavaScript and
[03:22:37]  the size of JavaScript. It also reduces the serialization size in theory. It doesn't in RFC's case we've shown necessarily, but in theory it should be able
[03:22:44]  to reduce that serialization size and the amount of data, um, over the wire compared to traditional SSR. because you don't need the hydrate at all,
[03:22:55]  which means you don't need the data for it all. Yes. I think this is a very attractive premise. As I wrote in that article, I talked about a bit
[03:23:10]  earlier about the JavaScript paradigm. I don't have it open anymore. It's very awkward that JavaScript's like the only way we can actually viably do this these days.
[03:23:19]  There's a big benefit for having the same language on both sides. I think latency and serialization are as you mentioned about that. If others, I can make much
[03:23:34]  higher write the new specifically. Yeah. Yeah. We should learn about JavaScript and learn fast, change fast, and deliver fast. Yeah. I mean, there's that side
[03:23:44]  too. And some people, so like people usually put those, they think a lot of people, some amount of people are obviously not, if you have a backend house
[03:23:50]  and you have all this stuff, but the reasonable amount of people think that like JavaScript and the ecosystem, the DX around that makes you ship faster. So if you put both
[03:23:56]  pieces together, it gets even more compelling, but I'm not going to comment on that. All right. So we were talking about Svelte. This is,
[03:24:15]  this is why the stream is fun because we just get to keep on going. Svelte. What's the big headlines? Well, SvelteKit 3, 1
[03:24:23] .0 came out right at the end of last year. But big thing happened this year was Svelte 4 and 5. There's also SvelteKit 2,
[03:24:34]  but it was a, it was a nominal change. I think that the adoption of SvelteKit speaks more than, you know, the, the stuff they added
[03:24:43]  in SvelteKit 2. I think the big, the big key thing here is Svelte 4 was the first major release of Svelte in four years,
[03:24:51]  basically. And then they very quickly stopped. 5 isn't out yet, but we need to talk about, they put the preview out. 5 is coming out imminently
[03:25:01] , I think, right? Svelte 5 isn't out yet, right? Just like, it could have been released yesterday and I wouldn't have known. Yeah,
[03:25:08]  it's not out yet. It's fine. But why Svelte 5 exciting? Well, I'm gonna go back to my post here for a moment here.
[03:25:26]  Not that one. This one. Here's another Theo Tweet. The current state of JS frameworks. Carcinization is an example of a phenomenon called... I don't
[03:25:39]  know if this is intentional to play off my last name, even though that's like an actual thing. But basically, why do JavaScript frameworks keep evolving into SolidJS?
[03:25:46]  Essentially, Svelte 5 marks the adoption of signals. And I, we talked about signals, signals. Last year, signals kind of started popping up, or 2022
[03:26:02] , right? Signals became a big deal, right? Solid obviously had them, but then Preact and Quick added them. View had them as well, to be fair
[03:26:12]  too. Sorry. Sorry. Sorry. Solid and View had them, but then Preact and Quick added them. And then the beginning of this year, Angular announced signals
[03:26:22] . And I actually want to talk more about Angular when we get there. So I will do the majority of the... It's tricky. How do I talk about this in
[03:26:35]  order? It doesn't matter. My point is with Angular adopting signals. The whole conversation kind of blew wide open. And then Ruins for Svelte 5 basically
[03:26:50]  changed Svelte's reactive system to signals. And I think this is an important trend to understand for 2024, because it's not just about signals. Everyone's like,
[03:26:59]  oh, what's the big deal? Signal, signals. They've been around forever. Signals. I don't want to hear any more about signals. And the truth
[03:27:04]  of the matter is it's not about having signals. It's about what you do with them. And that was why Solid, you know, signals of some form have
[03:27:13]  been around forever. You know, as I mentioned, View didn't expose them as signals, but they have the reactivity. I think the API choice of, you know
[03:27:22] , bringing them out, you know, is an important part of the piece to have that control, right? And in that sense, we can say Solid pioneered that
[03:27:32] , right? View didn't like Solid. I mean, it's hard to say. Knockout was first, but then Solid was published in 2018, very signals forward.
[03:27:42]  View did not switch to being signals forward until like 2020 when they did the Composition API a couple of years later. Then shortly after we got Preact quick, you know
[03:27:54] , and the whole thing kind of cannonballs. But the thing is you have to do something with those signals. Otherwise, no, everyone would ignore them because we had
[03:28:01]  them in Knockout and MobX. And that's fine-grained rendering. And what's very exciting for Svelte is that Svelte 5 not only has
[03:28:11]  signals, but it basically compiles to what Solid compiles to. Like it has that performant rendering that's made, you know, Solid kind of stand out for the
[03:28:24]  last six years. That is the thing. We were talking about Wasm a minute ago, right? And stuff like JS Framework Benchmark. I think I
[03:28:34]  had it in the old article. Let me see if I can pop this out again. I shouldn't have closed it. Open link a new tab. What I meant is
[03:28:41]  we talked about how coming into 2023, there was like Vanilla JS Solid, Wasm Frameworks, then like every other framework, you know, kind of fast ones
[03:28:56]  like Svelte or View, and then like Preact, and then finally React and Angular and the mainstream ones kind of over here. This, what we're seeing right
[03:29:06]  now is frameworks adopting signals so they can jump the gap, get in front of the Wasm frameworks and join Solid up here. Svelte 5 is up there,
[03:29:18]  right next to Solid. And that's part of the trend here. Right. So, where I'm getting to here is that I'm very excited because Svel
[03:29:46] te got so much more interesting to me in this period of time, not because signals and ruins, like it's funny. Some people will say it loses its Svelte
[03:30:00] -ness and I can get it because honestly, I think people will feel like when they use it, it feels a lot more like using Solid rather than using Svel
[03:30:09] te for, but what is kind of cool about this whole thing is that like, go dash this, is like, okay, better performance in the client. Secondly,
[03:30:30]  smaller build output. This makes a difference. I don't know if you've ever seen this stuff before, but like, to do MVC size comparison. Okay, obviously
[03:30:46] , I'm the author of this article. So, you know, take that with a grain of salt, but it came from originally a comparison. Right. Like,
[03:31:05]  Svelte had this problem where its compile output didn't scale very well. Like, Svelte was the smallest, right? So, here's Svelte,
[03:31:11]  here's Solid, here's Preact. But then, as you added more components, like, basically, by the time you hit five, Svelte was already bigger
[03:31:18]  than Solid and Preact. And by the time you hit 80 components, like a large site, Svelte was considerably larger than even React. So, like,
[03:31:27]  somewhere around 50 or 60 components Svelte, well, you can actually see it here. Svelte's almost caught up at 40 components, unique component instances. Like
[03:31:35] , the curvature on code size for Svelte was very poor, because of the way they, you know, basically put too much in the component code, they had no
[03:31:44]  change management system. So, again, Svelte 5 solves that as well. What else does Svelte 5 follow? Composition. You can now use the
[03:31:53]  same reactive primitive everywhere, not just in Svelte files, you know, before they had these two things with stores, right? Basically, every gripe I've ever
[03:32:02]  had about Svelte, they solved, essentially, with Svelte 5. Now, of course, I'd be biased, because, you know, that whole
[03:32:10]  joke about now Svelte is solid. So, obviously, if they made Svelte into Solid, I would be happy with it. But, like, I
[03:32:18]  think it's very exciting when you consider it that. Rich gave a recent talk, sells a superset of HTML, and I think that's why I prefer writing Svel
[03:32:29] te over other firms, because it lets me write websites how when you first learn your channel and not write JS to produce HTML templates. Yeah. Yeah, I think there's
[03:32:37]  a certain thing where people like SFC formats and other people will swear by JSX, because, like, it's one of those transparency things. Because the truth of
[03:32:45]  matter is, Svelte's HTML is not actually HTML, right? Like, to do anything in Svelte, you actually have to be using a lot of JavaScript
[03:32:53] . So, Svelte hides that detail from you. Or other people like JSX, because it's closer to how the stuff actually gets constructed or updated. So,
[03:33:00]  this is, like, that whole kind of mentality switch. It's like, if you know what's up, maybe this doesn't matter to you as much kind of
[03:33:08]  scenario. So, it's one of those tricky ones, because I like, I actually really like Svelte's direction with the ruins in the dollar sign, because it
[03:33:17]  makes it clear when I'm not in JavaScript anymore. Old Svelte, like, you wrote stuff that looked like JavaScript, but it wasn't JavaScript, right? I
[03:33:24]  think when it comes to templating and syntax stuff, like, everybody's kind of, they're all kind of similar. I sometimes like posting, if you follow me,
[03:33:33]  where, like, I compare some syntax pieces. Because, like, there's some things that Svelte or, like, Vue also do very well, but
[03:33:39]  there's some things they do very poorly around composition. Like, try and make your own four component in Svelte or Vue. It's much more awkward than doing
[03:33:46]  it in, like, JSX. And I think, like, I think there's, like, interesting trade-offs in this. But I think people do have preferences
[03:33:54] , and I think that aesthetic bit is something that Rich constantly nails. Because, like, he understands that kind of emotive feeling people have towards those kind of decisions.
[03:34:04]  I have to admit, I don't get at it very much. I, like, I did a poll a few years ago, and I was like, oh, what
[03:34:09] 's, you know, what's the most important thing? And basically, the answer that won the poll was things that are superficial. I know that's not what I wrote
[03:34:15]  there, but that's what I was fishing for. So I think that, like, I think there's part of the human developer psyche that's important to understand when
[03:34:27]  designing a framework to kind of get there. I'm very much more concerned on mechanics, but I do think that Svelte 5 in pretty much every way is an
[03:34:36]  improvement. And for other people, the opposite is true. They'll never be able to stomach it. Right? Right. So, like, I think Sol got,
[03:34:57]  like, some attention initially because, like, more than looking like React, the JSX is something that people like. There's this feeling that you can just hold it in
[03:35:07]  your hand. It's funny, I had that in a playground before I put these server component comparisons in here, and I was talking about, like, HTMX.
[03:35:14]  Oh, yeah. Oops. Oh, let's put a timer in there. Whatever. This is a div you can hold in your hand. Nothing feels lower on the
[03:35:28]  abstraction tree, really, than a div you can hold in your hand. Right? So, like, yeah. Right? So, I think we're never going to have
[03:35:47] ... This is why I actually don't... The number one reason I don't focus on the syntax stuff is, while it's important, and I think it helps a
[03:35:54]  lot with adoption, especially with learning and beginners, it's literally the thing that I don't, like, we'll never agree on. Like, you could... People sw
[03:36:02] ore by the VDOM. People swore on, you know, the different technical approaches, like Svelte compile away components and all that stuff. Now everyone's
[03:36:10]  going towards signals and fine-grained rendering like solid. But the thing that stays the same or doesn't converge is this UI DSL thing. People will never agree
[03:36:19]  on that piece. They might all be compiling to Solid under the hood, but they'll, you know... And for me, that's why I'm like, I
[03:36:28] 'm not touching that with a 10-foot pole. Like, it's fine. There's single file components libraries for Solid. You can, like, write stuff that looks
[03:36:35]  like Svelte and then get Solid out. I mean, you don't need to do that now because Svelte 5 is basically that, but, like, we
[03:36:40] 've had that for years. I've never officially sanctioned them because, like, honestly, that's a piece I know I will never win. Like, people have
[03:36:48]  opinions. Like, there's no winning or, like, having an edge is a better term. It's not about winning. It's about having an edge on that side
[03:36:57] . So, like, yeah, I can, like, React. I can hide behind philosophies and stuff. But I'm, like, that's why I,
[03:37:10]  like, div or... This isn't even a div anymore. It changes to H1. But you get what I mean. It's a lot to maintain and then
[03:37:19]  you're responsible for and then you fragment the ecosystem. It's kind of dangerous. Like, technically, I've felt comfortable with this because, like, with Solid's approach
[03:37:29]  of primitives and this, anyone who wants a DSL can go make it. There's... You can go find DSLs out there and use those because you
[03:37:38]  start from the fundamentals. But, like, supporting yourself is more work than I have time for. I have a whole stream about that. If you're interested in the work
[03:37:48]  of managing your own DSL, which is insane work to do, you can watch my stream with Marco's Dylan Piercy, where he literally goes through all the things
[03:38:04]  you have to maintain to maintain your own language. Marco has arguably the nicest, it's the smallest, it's the most performant, the smartest language pretty much ever designed
[03:38:15]  for a JavaScript UI framework. It will... I like using Marco sometimes because, like, the Svelte guys go, like, I prefer writing less code. I
[03:38:21] 'm like, you can't beat Marco. Sorry, guys. Marco always wins. But this is why you don't do this. If you don't really believe in it
[03:38:31] , like, you want to commit. Go for it. Check it out sometime. Strongly, strongly recommend this one. Yeah, it could have been. And it
[03:38:46] 's kind of funny, because I think this is why Dominic was excited. I was trying to get Dominic to work with us, I think mentioned, but I couldn
[03:38:54] 't pay him. And he joined the Svelte team and he ended up just, you know what I mean? So it is what it is. I agree this
[03:39:13]  is, but it doesn't use less. Yeah, it's not even close. Like, if you want to start with this reason why a lot of new frameworks to start
[03:39:18]  with JSX, you can literally make the JSX DSL work for you over a weekend. Single file component DSL, you know, with all the tooling and everything
[03:39:26]  will probably take you and get TypeScript working, will take you, like, especially your first goal, probably take you about a year. Like, it's, it
[03:39:34] 's, it's, it's just not even, it's not even close. I'm not worried about the analysis. I'm worried about the, for me, the
[03:39:47]  reason I don't like to template literals for my purposes was that, um, they, they have a runtime semantic. Like they, they have an expectation that you
[03:39:58]  can just use them in the browser and they work. And I wanted to do more with the compiler than I could do with that. I need to analyze the holes, not
[03:40:05]  just the, the static parts. And with tag template literals, if you change that behavior, it'd be really weird. Like to have them like not work at runtime
[03:40:13]  and only compiled. Yeah. I mean, there, there, this is part of that signals conversation, um, which I'll get to in a, in a,
[03:40:26]  when I talk about angular, I'm going to save the signals conversation to angular. Cause I feel even though there is a bit here, I it's less about Svel
[03:40:33] te adopting signals, even though that means we're in another, you know, before I was saying beat everyone, but next signals is like everyone, but react. Um
[03:40:43] , but we're, we're kind of like in the, in a zone right now where, um, uh, it's not just about adopting signals, which is what
[03:40:55]  I was trying to get at. It's, it's about, it's, it's about what you do with them. And Svelte 5 is very exciting
[03:41:03] . Um, so I imagine that we're going to, that's the big one for Svelte rolling out this year. I, I, I, they might have
[03:41:13]  more stuff that I'm not aware of. I know like, for example, I miss this on Astro. Astro is like releasing something pretty big coming up as well
[03:41:21] . Um, some kind of like thing, like service they're offering, but I'm talking pure technology here and Svelte 5 is a absolute game changer, right
[03:41:32] ? Um, so I don't know. Svelte 5, some people might've dismissed Svelte prematurely because of the language stuff. Come back and look at
[03:41:41]  Svelte 5. Honestly, like it is, they've addressed a lot of the stuff. Okay. Let's keep on going. Um, who's after S
[03:41:53] velte? Million. Okay. Let's talk about million JS. Very good year for million JS. For those who aren't aware of million, um, million is a
[03:42:04]  JavaScript framework. Um, but it actually started its life as just an optimizer for react. Um, essentially Aiden applied a lot of the same optimizations that we
[03:42:19]  do use with signals, um, to react templates. There's basically two types of optimizations that solid does that made it really unique as a renderer. One of the
[03:42:29]  optimizations we did was fine-grained updates, not component level, reduce the cost of components compared to other reactive libraries. And at the same time, reduce the cost
[03:42:38]  of reruns compared to VDOM libraries. But the other thing we did was, uh, template optimization where we clone templates and, and essentially do them in blocks
[03:42:51]  and then kind of go in and then attach the reactive pieces. And it's, and Svelte 5 has the same optimization in it. Million was like, what if
[03:43:01]  we took that approach to VDOM? What if we blocked the, instead of having multiple VDOM nodes, just make a big like HTML block and just treat it
[03:43:09]  as a single node essentially. Could we improve the performance of react? Well, as it turns out, the answer to that is a resounding yes. JS Framework
[03:43:17]  benchmark, for example, which we've already been looking at million, I think even jumped out in front of solid or any of the, yeah, yeah, yeah. It
[03:43:28] 's the fast. Yeah. These, these are all block VDOM libraries in this benchmark. They are, they're actually ahead of the reactive libraries here. Um,
[03:43:38]  as I said, they're almost all tied at the same score, but the, the, the blocked libraries are like fractions, um, faster in this benchmark. The
[03:43:46]  reason is that they have better memory, um, release timing. It's not about allocations about memory, uh, garbage collection, um, because they don't allocate
[03:43:55]  as much, um, like reactive nodes. So they have a slight advantage on memory. They have a slight disadvantage, which I think on no, they're actually pretty
[03:44:09]  in line across the board. So it's just the memory allocation compared to singles. The, the thing is this benchmark won't capture is that, um, this benchmark won
[03:44:17] 't leverage the fact that the partial updates, the signals actually have benefits when you consider like not just cloning a single template, so to speak. So this, it gets
[03:44:29] , it kind of gets buried here. Um, it often when, uh, when, uh, when like, when you ask Aiden, if he was going to
[03:44:38]  make it a full JavaScript framework, he's like, I would have just created solid. Um, so, uh, there, there, there is that kind of keep in
[03:44:46]  mind, but he, he, the key part is he's figured out how to make react at least on the leaf nodes more performant. And anyone who can make
[03:44:56]  react more performant gets a lot of attention because like, let's face it, lots of react users. I already talked about that before being a big thing. So million
[03:45:09]  has had quite the year. Million. Yeah. Well, I, I, I had Aiden on stream and we kind of talked about this, my prediction. I
[03:45:19]  mean, it's not even a hard prediction. React for Git is not going to outperform million JS, not even close, but that's because they're trying to add
[03:45:27]  different things. Yeah. Um, the, the cross file analysis of Marco is kind of, it's kind of like a different level, but yeah, but that
[03:45:53] 's on you. You can always turn off my stream. Sorry. I have so little, um, sympathy for the fatigue thing. I understand that there's a paralysis
[03:46:17]  consideration, but honestly, there's an easy answer to your solution. Use react. We already talked about it. Um, just use react. I know I want to change
[03:46:30]  that trend, but as long as people are in a zone where there's like too much going on, then like, that's where we're going to be. Yeah
[03:46:42] . I mean, we, we actually even measured million versus concurrent rendering and million was killing concurrent rendering too. It was fun because these things. Yeah. Like we'll,
[03:46:55]  we'll see, but my, my wager is that million, like the thing is million doesn't handle the state situation. So like in a benchmark million will always
[03:47:06]  win in reality, I'm not actually sure it's more complicated when you consider state propagation million just optimizes the pure rendering side of things. But yeah, but yeah,
[03:47:35]  So like, I don't know, I don't have a ton more to say about million. I just wanted to kind of give Aiden a shout out kids, brilliant
[03:47:43] . And, um, like I, he, he well deserved in getting the hype this year. Because if you look at it, million showed up even ahead of view,
[03:47:53]  um, and angular and obviously solid and quick. I'll talk about those in a few minutes, but let's keep on going. Um, there isn't much more
[03:48:01]  to say. I, I only think I want to add about million is Aiden got some money to do, um, some, some, uh, do more work with
[03:48:12]  million. And he put up, he's been working on like having, uh, a performance optimizing, uh, AI. So this is what I'm talking about AI being
[03:48:21]  more prevalent coming into this year, last year, not much, you know, some code gen, maybe some UI stuff. This is kind of interesting, right. This
[03:48:29]  is a very cute video. Um, it's not letting me go full screen here, but yeah, so you probably can't see it very clearly. Why is this slow
[03:48:39] ? The markdown component is likely being re-rendered unnecessarily each time task view component updates, which can be inefficient if the markdown content doesn't think. And
[03:48:50]  it actually shows the code change. basically his whole thing here is like, he's making AI that you can ask why your react app is slow and it should help you
[03:48:59]  fix your react apps performance. I think this is, um, really interesting space. I, I mean, I ironically say that like, you know, the answer is because
[03:49:15]  it re-renders, but I, I do think he is doing interesting work. Um, so big props to, to him and what he's accomplished already with
[03:49:27]  million. Um, they, they, this was their, like a release year. So they had a really good boom, but already at 13, almost 14,000
[03:49:36]  stars on GitHub. So good on them. Uh, okay. Okay. So let's continue. What's next on the list. Let's talk view view. I,
[03:49:55]  I got, I got, I got a comment on Twitter, which is fair. Um, after I released my article, um, this article that we're reading right
[03:50:04]  now, uh, uh, uh, there was a comment that was along the lines, quite interesting. You don't even mention Nuxt as solid start uses nitro,
[03:50:11]  which is born from Nuxt. And, um, yeah, I have a terrible, uh, tendency to kind of like ignore view a lot of times. Um, because
[03:50:23]  I, I, I, I, I, I focus on I focus on unstable software and if you've seen anything view ecosystem stuff, they're all about like what
[03:50:34]  makes the developer happy. See if Svelte historically was about like, how do I make this as easy as possible? Svelte's always the winning. It's
[03:50:43]  the easy framework. view is like the comfortable framework, right? How do I make you most comfortable? It's not necessarily easy. It's easy most of the time
[03:50:55] , but I'm going to focus on making like you comfortable, so to speak. And I, so I, I w I was actually like fishing a bit, trying to
[03:51:02]  figure out like, what do I want to talk about view this year? Because first of all, I wanted to talk about vapor, but vapor is not out yet,
[03:51:11]  but coming up, it should be vapor is views version of Svelte five or solid JS, depending on what you call it. They also showed a benchmark part where the
[03:51:18]  year where again, view jumped that gap, like we just talked about. So view with vapor will have another framework with a solid like renderer. So it's not just
[03:51:26]  about having the signals. It's about doing the performance rendering, you know, so views there, but what, you know, that isn't, that's what I
[03:51:33] 'm looking forward to for the future. What did you do this year? Well, as it turned out, they released two minor versions, version 30, 3.3 and
[03:51:42]  version 3.4. And the headline for each of them, well, 3.3 script setup, which was a nicer way to initiate your components in your single file components
[03:51:56] . And 3.4 was the improved template build speeds. And some other quality life things. Basically, if you, if you follow what I'm getting at is this
[03:52:07]  is stuff that I would never ever cover on one of my streams or really talk about much. Cause I don't care how fast your build is, you know, someone else
[03:52:15]  works on it. And again, I'm appreciated of that someone else, because what the whole ecosystem now, especially the remix is on Vite, again, from the
[03:52:27]  Vue community. I'm not worrying about deployment adapters and winter CG and the, and, uh, async local storage gate because of Nitro and UNJS
[03:52:38] 's amazing ability to polyfill across these environments. So really important work, um, that I depend on every single day. So I'm very happy for the Vue
[03:52:54]  community and the, the individuals who do the work around it because they build amazingly fast things that make developers happy. That's what I'm going to put it. right
[03:53:14] . Developer's happy. The easiest framework, right? But the, as I said, this is just not a zone that I have much to comment on because the V
[03:53:33] ue community is already doing such a good job. So, um, I, I should admit like, I, I, NUX3, I think finally officially came
[03:53:45]  out this year because they were on beta. When's next NUX3 release? When's the official, official stable release? Oh no. It came out right at
[03:53:53]  the end of 2022. NUX4 is coming very soon. I know NUX added like their version of server components, which got my attention when I said
[03:54:05] , no, those aren't server components. Those are lakes. But I actually, unfortunately don't actually know anything beyond that. I know it's, it's a,
[03:54:15]  uh, let's see here. NUX3 is there a NUX3.1. I just, I want to make sure I remedy this a little
[03:54:23]  bit and see January 30th. Let's look to have NUX3 release notes. This is NUX2 release notes. All right. it's fine
[03:54:48] . I'm not going to look too much for it. The biggest thing is NUX has always impressed me with the ease of use stuff like automatic imports and they continue
[03:55:01]  to like improve, especially as I said, evident through stuff exposed through Nitro, that kind of core stability in such a way that everyone can use. It's, it
[03:55:10] 's incredibly admirable of NUX and the Vue community in general, but it's the headlines in terms of tech that I always chase. So unfortunately I don
[03:55:22] 't have much more to add to Vue. I'm very, very excited to see how vapor impacts the ecosystem. Um, but you know, there's kind of gaps
[03:55:33]  and busy years. And I think today, I think, I think this was like, uh, 2023 for Vue was just like a holder steady kind of year versus
[03:55:43]  like spelt where it's like finally, like, here's all the stuff getting unleashed out. And to be fair, when we get to a few other frameworks,
[03:55:49]  it was also hold holder steady as well, so to speak. that is a hot take. I don't know if people would agree with that. Yeah. NU
[03:56:06] X dev tools. Yeah. You're right. They had those really cool dev tools where you could like inspect the code and then like, like the UI and it would show
[03:56:13]  up in the code again, make developers happy. Like the, this kind of stuff is really cool. What they've been able to, um, you know, accomplish,
[03:56:23]  like being able to like, look at your site, like let's not stop with HMR. Let's actually be able to like inspect a piece here and then have
[03:56:30]  it actually take you straight to the code. You're on 3.9. Yeah. Yeah. Yeah. I, I, I want to give a shout out too,
[03:56:43]  because NUX, uh, sorry, one of the more, one of the template optimizations I added, ended up adding to solid more recently. It's not
[03:56:52] , it's a size optimization. It's not a performance optimization. Um, I actually got by seeing, uh, Evan's keynote on vapor. He showed off reducing the
[03:57:01]  HTML template size and, uh, we implemented that in solid this year. So that was very cool. Um, kind of back coming from vapor. He, I noticed he
[03:57:09]  wasn't using closing tags and we, we added that optimization, I think it's all 1.7. So yeah. All right. Um, next framework on the
[03:57:18]  list. Um, We talked about Vue and Nuxt. Quick's 13.8. So that's not right. Oh, interesting. Quick and Quick City actually have
[03:57:34]  different numbers. I was wrong. Anyways. Um, next framework is Angular. Let's talk Angular. Does anyone care about Angular? No, I, I, I
[03:57:43] , I think Angular has had quite a year. I said, this was a Svelte year. This was all, this was, this was an Angular year as well
[03:57:51] . Um, and for me, it started really subtly, but Angular has kind of really come back. And I think it's not, it's not cause they
[03:58:07] 're gaining ground against React or anything like that. It's because it's that their developers are just feel like they're getting hurt again. Angular spent its head down.
[03:58:23]  They were working on Ivy. They're working on the stuff. And, and essentially some of the people are like, felt like, you know, they're happy with it
[03:58:31] . But, and I went to Angular conference, I said a couple of years ago, I was surprised at the positive attitude compared to what I had been to a few
[03:58:39]  React conferences during that time period. Um, but it's a whole other thing when you kind of feel like that the team is really putting that love out there. To be
[03:58:50]  fair, Angular had SSR. They just didn't have hydration. They called it destructive hydration, but it was really just like, I server render now, I client render
[03:59:02] . But yes, uh, let's see. They use the term non non destructive. Hydration. This is the question. They're the only ones who use the
[03:59:18]  term non destructive hydration, because let's face it, destructive hydration is not even hydration. It's not even a real thing. But this is how you can find it.
[03:59:28]  that's Angular. Um, it looks like they released it this year in in April. So they, they, they, they, Angular now has hydration. Um,
[03:59:40]  but essentially, yeah, I mean, we can, we can summarize stuff pretty quickly here with the Renaissance. Okay. For me, it started with self closing tags,
[03:59:56]  which was the end of last year. I know this seems silly because everyone has self closing tags, but like Angular, for some reason, because of the HTML spec and stuff
[04:00:05] , didn't self have self closing tags allowed in templating, which is, you know, crazy to people. I remember people making jokes about it when they released it,
[04:00:12]  but this was a sign of things to come. Then signals. They were the, they really were the tipping point. A lot of frameworks already moved to signals by this
[04:00:25]  point, but Angular signals was a big motion that this, like these things were, you know, times were a changing. Um, uh, today we are open their first
[04:00:39]  PR. They were very open to community. I worked a lot with Alex and Pavel on this amazing guys. I love every time I can sit down with them and
[04:00:48]  also jam from whiz and get into the depths of with signals. Um, they really got into this. They were on stream with me, um, at the beginning of
[04:00:57]  the year in 2023, great stream to watch. If you care about the details of that. Um, they got the old react team out of the woodwork, like Pete
[04:01:06]  Hutton, Jordan walk coming into this signals, which was like, I couldn't do that on my own. I couldn't ask for that publicity. Um, I wrote
[04:01:13]  if I, one of my favorite articles of all time, uh, which is the, the, the, my perspective of the, the react versus signals. Um,
[04:01:24]  I, it was a, it was, you know, it's pretty. Yeah. So funny actually. Uh, yeah. Michael doing his parody of this was just
[04:01:42]  too funny. Um, anyway, I, I, uh, I think that funnily enough, I don't think 2023 was the year of signals. I think 2024
[04:01:54]  is the actual year of signals. Uh, even, even in this case, because, Oh, I, where did I go? I closed my article. I'm
[04:02:05]  so silly. Uh, dev two. Um, it's, it's, it's, it's basically, it's not just, as I said, people adopting
[04:02:23]  it. It's because, um, and actually the angular guys said the exact same thing. It's when you now have every JavaScript framework, except react using signals, adopting
[04:02:35]  fine-grained rendering, understanding the patterns, there's no way this doesn't get attention. And one of the big ones here is basically there are representatives from every
[04:02:47]  JavaScript framework sitting in a TC 39 group meeting almost every Tuesday. I miss a few of them because I have to drop my kids off at school to talk about bringing signals into
[04:02:56]  as a browser spec. It has not been released yet. So, you know, to the public, so people can like comment on it yet, but there is a reference
[04:03:03]  implementation and we're testing ideas and kind of agreeing on stuff. This is, this is going to continue to be a topic. As I said, standardization is probably
[04:03:12]  going to take a while, but I think that, um, it is very exciting to see this kind of progress. Um, we've been talking, you know, it
[04:03:28]  takes a while. We've been talking since September, I guess. Um, Dominic kind of triggered this originally from Svelte when he was like on Twitter,
[04:03:35]  trying to like stir things up. Um, actually before he even joined Svelte team, he was kind of like caught on it when he first made octane, which
[04:03:42]  was like his like react signals kind of implementation. Like what would forget look like if it was implemented with signals. And then, uh, those guys, you know, after
[04:03:52]  angular announced, and then like people kind of, they want to see this happen. Um, Milo is probably doing most of the representation for solid, um, in
[04:04:02]  these conversations I've been busy working on start. Uh, but yeah, there, there's key people, um, from, you know, you know, from the different
[04:04:12]  frameworks, all sitting there, we even have like, uh, people, Ember, like we've been last with RxJS, not even the signal side.
[04:04:20]  Like this, this is a, this is quite a group, um, and things are looking pretty positive. So I am pretty excited about this. Yeah. They're
[04:04:30]  trying to propose as a Dom spec. Um, but I think people are kind of, I don't know if this will ever work, but people are kind of excited for
[04:04:37]  the potential signals there. Like just have this reactive kind of Dom thing. I honestly think because of side effects and Dom is side effects that this kind of fundamentally at odds
[04:04:47]  with things, but who knows? Well, maybe eventually, um, yes, Rx is trying to, or Rx style observables are trying to get in through that
[04:04:56] . I think there's a reason why people are hesitant on bringing reactive pronouns into the language, but there is definitely a feel that's a gap. I am a bit worried
[04:05:05]  that this is a bit trendy. Like, yeah, sure. It's, it's kind of like bringing JSX into the browser. It's like, you know
[04:05:11] , 10 years ago, everyone was like, yeah, we need a VDOM, you know, reacted. And then like by 14, everyone went to VDOM
[04:05:17]  signals seem to be equally overhyped right now. Um, but you know, we'll see. Can't be worse than web components, right? Famous last words
[04:05:29] . I don't know if it'll have a significant performance. It might. That is the attractive part because the dependency graph can be resolved through the C plus layer or
[04:05:48]  like the underlying thing. But, um, uh, what I'm excited about is the potential for things like dev tools. Like what if we all have the same signals implementation
[04:05:58] ? We could, what if we could track through dependencies rather than code execution? Like we could actually go like, oh, you know how you have async await and
[04:06:06]  you can actually see the async await path and the debugger. So like, you can go, okay, I'm in this code after the wait, but you know
[04:06:12] , like before Chrome added that, it was hard, but now you can like actually see like what you can follow the whole async thread. Picture if you can follow the
[04:06:21]  whole dependency thread, like this is updating cause this updated, you know, cause this updated and you could actually see that in debug tools. That would be amazing if the browser
[04:06:29] , like we all have signals so we can all just kind of look and go, oh yeah, it's just a signal. So we can see this dependency track update
[04:06:36] , like that would be huge. Not an initial proposal. I think that's dangerous. I very much vied against, I don't want it to have to do with
[04:06:49]  DOM. It'd be the worst if, if like, cause there's a temptation, but like mechanisms like suspense and that involve our ability to schedule. And I think it
[04:06:59] 's important that we don't just like try and force it into prematurely. So I, we're not trying that with the TC 39 spec right now. Yeah
[04:07:12] . I, I don't, I don't think so. If that makes any sense. Um, yeah, I proxies are proxies. I like right
[04:07:24]  now we are literally just focusing on the signal primitive and the drive signal or memo or computer, whatever you call it primitive and with acknowledgement that we need a solution for effects as
[04:07:35]  well. But you can, you can understand why people, yeah. Like, I mean, this local server, you can picture like in any of the DOM, maybe
[04:07:42]  guys are people be excited about it because picture, if you could just like go like what I showed here, uh, sorry, where is it? What if you could just
[04:07:50]  go like, instead of the declarative, but just be like, you know, create element, this text node equals signal. Like what, like, and then you
[04:08:01]  could just like, you could just, you could do this, like, that would be pretty crazy. My main goal is not that I even care about them interopting
[04:08:10]  with each other in terms of, uh, you know, a lot of people care about like the API interface. I don't, I don't care about that. I
[04:08:16]  think we all have our different needs. I think it's challenging because I think that the, we need internals exposed to fully leverage them, but they're also not
[04:08:25]  what we want to expose to the end developer, generally speaking. So like any standard thing wouldn't really, it could be end user usable, but I don't really want
[04:08:35]  to expose it to them. My interest is, as I said, having the graph be knowable in a consistent way in the browser. So, but tooling could work.
[04:08:46]  I don't like building tooling. If you've noticed, like, I like solving complicated mechanical problems. I'll leave the tool building to the view community. Yes
[04:09:13] . Uh, either we have to schedule, um, either there will be a schedule piece or I think that we can, this is the part where there's little details,
[04:09:24]  but generally the effects are the only scheduled part. So you will have the ability to schedule an effects run because the computers are all lazy. They're pulled. So you'll
[04:09:34]  have, we should have the ability to like schedule when they actually grab the value. Yeah. There'll be more details and the spec kind of like thrown out, but
[04:09:46]  yeah, this is a very exciting, um, update. Uh, and, uh, I think it's, it's, uh, definitely why signals like signals have a
[04:09:57]  lot of momentum behind them right now. Uh, do, do, do, do, do, do, do, do. There we go. All right. Let
[04:10:12] 's continue on. We're talking about angular, right? That was the signals part of angular. Um, they got hydration. That's exciting. They got new control flow
[04:10:28] . You know what? I'm just going to pop up angular 17. Um, release announcement because it came out, uh, in November. They, they, their new
[04:10:40]  control flow instead of like this NG template stuff is more like Svelte essentially. Um, I think it's interesting. I think language specific DSLs, um
[04:10:53] , have composability concerns, but on the other hand, I definitely like using Svelte's templating more than say angular views. So like that's kind of
[04:11:06]  cool. Um, and the big thing here is they've actually improved the performance. This is angular 17, not like signals, not, or anything. Plain angular 17
[04:11:19]  is in view Svelte performance territory. Just like straight up. They've jumped, they've, they've been locked up with the react for years. Now they
[04:11:32] 're caught up to like view. And so ironically, view and Svelte are about to jump up to solid. Um, but like this, this is still very significant
[04:11:44]  here. Um, there's going to be a time period, I think where most JavaScript frameworks are going to like react is going to be in a performance category, all
[04:11:54]  of its own, like not in a good way. Um, to be fair, this benchmark only tests a very simplistic thing. If you ever, if you remember my
[04:12:05]  stream with Dominic Ganaway, he was saying that Inferno and react for Meta's, uh, um, code base made a very insignificant difference. The
[04:12:16]  startup was slightly better, but, but it didn't actually help them very much. So to be fair, this benchmark is not everything, but it's still nice to see
[04:12:25]  this kind of consideration, uh, being taken by the angular team. So like this is, you know, this is, this is, you know, much better performance
[04:12:34] , like hugely better performance. Um, you know, even like before the control flow change, which is only like 10% here, angular is in like the one eight
[04:12:47] ies, one 76, one eighties range. So like it's, I said it when view three came out, that's not often you see a major framework, make
[04:12:55]  that kind of jump. I can't say that anymore. Um, because angular just made the same kind of jump. Very similar to the view two to view three performance jump
[04:13:05] . It's quite impressive. Anyway, I think that's all I want to say about angular. Um, they, they had a good year, brought them back in
[04:13:16]  the conversation, um, which is quite, quite impressive. All right. All right. Who, where are we at next? I think we're at solid. Classically
[04:13:26]  I'd say Svelte was the easiest framework, not even close. That's the view is losing a little view used to be like the easiest framework, especially for beginners
[04:13:38] . And they kind of like, they lost some ground to Svelte and you could tell they were kind of jealous for a bit and they were working on like syntax
[04:13:44]  trying to match with Svelte. And then they smartly, I think, stepped back from it. And ironically Svelte 5 syntax resembles what view was proposing.
[04:13:56]  It's, it's, it's, it's, it's actually really interesting to me. Like if you, the, the whole dollar sign ruins thing is very,
[04:14:03]  very, very similar to what views ref sugar was. Um, so much so that we actually have solid libraries that look like Svelte 5 because, um, like Alexis
[04:14:13]  copied views Svelte, views, ref sugar. And yeah, it amuses me to no end because I can't remember what it was called, uh, uh
[04:14:25] , God, solid labels just for fun here. Um, see, it's, it's, it's just amusing to me because if I, if you look at this
[04:14:39] , it was like, they came up three years ago. Here you go. Svelte ruins three years ago. It's not identical, but it's just, it
[04:14:46] 's, it's, it's amusing. Ooh, no zone with signals. That's interesting. Yeah. To be fair, I didn't give react a title easy
[04:15:11]  either. I just wanted to kind of, I w I don't actually know react. I mean, angular is so like all encompassing. It's hard to give
[04:15:25]  it a single title. Um, I think the biggest headline for angular here is what I put there with the renaissance. It's like, you know, like
[04:15:39]  comeback kid, but the, it's not a kid and it's not even, I'm not asking the comeback is impacting any kind of like meaningful metrics. It's,
[04:15:49]  it's a mindshare comeback. I think it's, it's huge, you know? Yeah, of course. Yes. The spell five is, I already talked
[04:15:58]  about, so I think so five is going to be pretty sweet. Um, it just amusing to me that essentially because this compiles down to solid, unlike views ref
[04:16:14]  sugar, we, we, Alexis basically copied views API, applied it to solid three years ago and basically had, uh, had ruins, which is, which is just
[04:16:29]  funny to me. Um, cause it's the same thing where there's no function call or he did this ref signal thing, which is weird. And the ref signal,
[04:16:37]  I understand because that's in the view APIs, but he could have wrapped it himself and not use it and use functions. Like the way like view didn't, or
[04:16:44]  felt didn't give you this primitive, but technically speaking, they could have, anyways. Java in JavaScript. Yes. They're not nice. We're so back.
[04:17:07]  Yeah. I like that. That's better. We're so back. Yeah. Thank you, Greg. Okay. Sorry. Um, solid. Um, yeah. Solid
[04:17:25] . Solid had a slow year, which is why it's so low on the hype train. I think, um, we had no major, we had a couple of
[04:17:38]  minor releases, um, like view, we had no major releases this year. Um, so you can kind of understand why, uh, this is probably the lowest we've
[04:17:52]  been on the hype train for the last couple of years. We focused a lot on solid start. Um, solid start pretty much occupied most of this year and finally got
[04:18:01]  the beta out like right at Christmas time, which, as I said, doesn't help us in the last 12 months. If I look at this last week though, solid
[04:18:10]  is, you know, number three, again, HTMLX is just killing it right now. But, um, you know, just kind of, you know, just
[04:18:20]  this solid had a very slow year. Um, that's, that's, you know, like view, I think, uh, I've talked a lot about this before
[04:18:33] . I think the big headline for solid is start is close to 1.0 and we owe the view community for that. Um, Viet, Nitro, N
[04:18:45] ux, like all of those people are a big part of this. It freed me up the time to actually work on the features that I care about. Um, so,
[04:18:52]  uh, we, we have bugs right now we're working on, but the category of bugs of like, oh, this isn't bundling right. Or this isn't
[04:19:00]  working. It's not like these features are difficult to implement. Like every bug now, I'm just like, oh man, like these, these are probably not my
[04:19:10]  problem. They're probably nitro problems or, you know, like some integration piece that I don't understand. You know, it's, it's, it, I
[04:19:19]  think the most exciting result of this is focusing on stuff other than start, you know, this, this, this is, this is a, this is a big win.
[04:19:32]  Um, start was very ambitious. The reason solid start matters for people who don't follow solid, probably not many people who follow the stream in that case is start is
[04:19:46]  decomposed in the meta framework. It's basically said that I don't own basically anything except a place to put stuff together. We have a great server runtime in Nit
[04:19:59] ro and H3. We have a great build process in Vinci on top of Vite. And guess what? Routing data loading. That's not my concern.
[04:20:09]  Use solid router, use tan stack query, use 10 stack router when it's ready. You it's router agnostic and you're like, how can you make a
[04:20:15]  framework that has the features you want? Well, as it turns out with the right primitives, you know, you can do so. And in a lot of sense
[04:20:24] , it's very similar to some of the approaches that react has been doing, um, you know, making these primitives that can work across meta frameworks. In our case
[04:20:33] , start is a really nice layer to get in. It's a starter template is it has, you know, CSR mode or spa mode, if people care about it
[04:20:43] . So people can just start out on it as if it was just a basic V template, and then add the router. It's CRA all over again, and then build
[04:20:51]  up from that, except when none of the bad stuff, you don't have to eject. It's all in your fingertips. Thanks to Vite's amazing plugin system
[04:20:57] . So I'm super happy because like, if I want to worry about islands and server components, guess what? That is not solid starts responsibility. There might be like a
[04:21:09]  couple of tweaks. We need, you know, the serve to handle, you know, some special headers to, to, you know, pass them through or whatever,
[04:21:16]  but this is not a solid start issue. You know, we have servile handling our serialization. We generalize this whole years have been about making it possible for a
[04:21:27]  small team to, you know, us, not you guys who are developing, but a small team of developers maintaining start start or unsolid be, to be able
[04:21:35]  to be pro productive and be able to manage it. We cut this start code base by 10 X, right? Like the CLI is moving to the community project. You
[04:21:46]  know, going to be dropping that in a moment. Like essentially when everything does only as much as it needs to life gets a lot easier. So I'm excited because
[04:22:01]  this year, yeah, we get to continue looking at stuff like server components. I showed that diffing example earlier, you know, kind of finish up the work we have
[04:22:12]  on islands. Solid start 1.0 probably will have its basic version of islands, but I want to get to that next step with like server component types type scenario.
[04:22:21]  The other thing is bringing up the work on solid 2.0, which is a big one, a lot of async updates, store updates, basically getting to correct some
[04:22:33]  of the assumptions I made. Ooh, I feel like solid 1.0, even though it came out in 2021, basically we've been 1.0 since 2019. Concept
[04:22:43] ually, we haven't really changed all that much. It's been five years, it's time to take what we've learned. And yeah, I am very excited
[04:22:53] . There's slow years like last year, where you know that, you know, you're not going to get as much hype, but that's so that you can,
[04:23:04]  you know, kind of like, you know what this, VMware said in 2022, Sveld and 2021 Sveld had a slow year, and then they released
[04:23:14]  Sveld kit right at the end of 2022. And then 2023 was amazing year for us, for them. For us, 2023 was our, was our 2022 for S
[04:23:22] veld. Like this next year, everything blows open. So I am, I am very excited for where Sveld's going. This, you know, even
[04:23:32]  for a slow year, we didn't do bad, so to speak. So yeah, solid 2.0 on the way. Well, I'm not going to give
[04:23:44]  you any promises on the date on that. But start is close. So I'm pretty excited. Yeah. Later, later in the year. But yeah, I get
[04:23:59]  the focus on it again, which is huge. The meta meta framework, the unmeta framework. Yeah, you guys can choose. Yes and no. There is
[04:24:12]  a certain amount of that responsibility pushed on to Nikhil from that sense. So I'd say, you're right, my 10x isn't, isn't fair.
[04:24:28]  We did reduce, I like, it's not, Nitro took a nice chunk out of it, probably almost half. But you're right, the other half of the
[04:24:45]  savings are probably mostly sitting in Vinci. But Nikhil got to redesign it in a way that was more module and agnostic in a sense. So because we
[04:24:57]  were able to separate those concerns, things like bundling around server functions and islands, like the bundling solutions, like he built them for React and they worked for Solid.
[04:25:08]  Yeah, I think it's good that you point out Vinci, because technically it's probably the biggest risk factor of this structure. But it also is very generalized.
[04:25:23]  So like, there is a bit of like this pile into the other pile, but it's not quite the same. Like we had the most maintainable Vip plugin before
[04:25:31]  in SolidStart. And now we have like, the separation of responsibility is a lot cleaner now. Signals 2.0, I'm hoping for, I think the work
[04:25:42]  that we're doing on async could be that significant, where, that's why I'm like, really dragging on the spec a little bit, because I'm like
[04:25:50] , like, the stuff that we have in mind, it could be a game changer, you know, and then it's gonna be like, is everyone going to get signals
[04:26:01]  2.0, you know, because it got to branch out. Yeah, to be fair, um, all those choices are just because we had templates, um,
[04:26:22]  available. If it, like, they're, they're, they're actually just templates. We, my intention eventually is just to kind of combine that, that template repo
[04:26:33]  with the Solid template repo. And then like, we could just have a nicer CLI there. Like, honestly, we just needed the examples to push the development forward
[04:26:42] . Um, and kind of show people how they can do things. That's what they're there for. A lot of frameworks have those. Um, for most people,
[04:26:52]  they should just be starting with basic and we should make that a lot clear. It's, it's tricky because like my actual expectation is I want more create T3
[04:27:04]  apps in the world. I think, I think everyone's so funny. I give react crap about frameworks and it's because I want to have that control. I don't
[04:27:15]  want to be forced to use a framework, but I think a lot of people do want frameworks and I think those opinions are more like templates. Like they're not like
[04:27:25] , like they're, they're fashionable. They come in and out and that's why I want to enable. I want to enable all the create T3 apps out there
[04:27:32]  possible because you know, yeah, honestly create T3 app is, is an amazing project and what those guys have done. Um, there's something coming up for solid along
[04:27:42]  the same lines. I think, I'm trying to remember what it's called. It's called like solid. Uh, I don't even know what it's called
[04:27:49] , but it's built on top of solid start and it's, is it UI kit or something? I don't even know. It's media kit, solid media kit
[04:27:55] . It's built on top of solid start, but it has all those opinionated pieces like opinion, like, like, you know, uh, image generation and like all
[04:28:03]  the, like, you know, I, it has more of the stuff that people expect from a framework, but that's, I said, that's good for the
[04:28:11]  people maintaining that I'm, I'm, I'm really focused on the, making sure the core building blocks are good. All right. It's all at 2.0
[04:28:22]  signals 2.0. Okay. I've been talking about solid a bunch this whole year, so I don't think there's any surprises here for anyone, but I am
[04:28:29] , I'm happy about these unlocks. It's so exciting when like starts been this monkey on my shoulder for, for a while. I think the biggest blocker
[04:28:39]  to start 1.0 getting out the door now is going to be docs. It's, it's that simple. So, uh, it's unfortunate because I put und
[04:28:47] uly pressure on people. Um, cause I, I would love the release start probably in a month, month and a half-ish time period, if possible, maybe two
[04:28:55]  months being realistic, but there's no way I can picture the docs being anywhere where I want in that kind of time zone. It's funny. Start has so little
[04:29:04]  features, but we need guides. The solid start docs right now suck because they have a bunch of references to libraries that aren't even part of start. Like how do you
[04:29:13]  sell, how do you document a framework that has no, no pieces, like has nothing that actually belongs to it? Interesting. question for a better docs writer than me
[04:29:26] . Cause if you let me write your docs, you just end up with the, the solidjs.com/docs, which we already talked about is not the greatest
[04:29:36]  thing in the world. Yeah. This is what you end up with. This was copied directly from a, some read me files in the solid start GitHub repo. And I
[04:29:45]  apologize to everyone for that. I tried my best, you know, I can write okay when I, when I want to, but yeah. All right. Next.
[04:29:55]  But do you feel comfortable releasing something as 1.0 with crap docs? I don't know if you can call something 1.0 unless the docs are good. Like I
[04:30:12] , the docs have to come before the 1.0 in my mind. Otherwise like, like I, I think we could go to 1.0 pretty quick here.
[04:30:26]  You know, we, we got a few bugs that iron out, but nothing that should take more than a month or so between, you know, a few more releases testing
[04:30:31]  or whatever, but best docs, um, Astro views pretty good too, but Astro probably. Reacts rewrite has been pretty good, but I have a,
[04:30:52]  and we're modeling a lot of stuff after the react rewrite. It's just, it's challenging. React is It's challenging. Call it an RC. Yeah, you
[04:31:06] 're right. That's what we're going to do. We're going to RC run it. Yeah. Give me a, give me about a month and then we
[04:31:10] 'll just start RC running and convince people to help us with docs. Yeah. I think that's good. Yeah. I mean, we have docs right now. I'm
[04:31:20]  just saying they suck. I like to the point that I am embarrassed of them. Okay. Next framework. Quick. Quick, quick, quick. Quick's interesting one
[04:31:35]  because on the hype train they're below solid, but this was a big year for quick. They had their 1.0 release. I think this is just a testament of
[04:31:51]  how much harder it is as a JavaScript framework year after year based on your release date. How much harder it was for solid after Svelte, you know, our
[04:32:04]  1.0 was after Svelte 3. How much harder it was for Svelte than it was for Vue. How much harder is for Vue and Angular
[04:32:11]  than it was for React. Like this should have been the, like the big push, right? And they're, they're almost at 20,000, but like
[04:32:29]  release and then do, do, do, do, do, do, do, do, do, do, do. The sad part about this is Quick has, you
[04:32:39]  know, how I, I don't talk about Vue. I like talking about Quick because the innovation that they have going on is really interesting. I find myself always
[04:32:50]  being like interesting, you know, because I finally did an the Astro integration, so like Quick is a signals framework and they have resumability and as in the
[04:33:19]  previous year, resumability was like a big, you know, RSCs versus resumability is a big topic that I focused on, but I actually don
[04:33:27] 't think there's actually like the, it's very clear to me now how those are different buckets. I was talking earlier about how, um, like resumability was
[04:33:45]  basically an optimization and, uh, it's, it's kind of tricky because all those considerations about when I was going over the templating, when I was talking about
[04:34:02]  Astro and talking about like HTML template diffing versus not like, it's that same level of question that you kind of hit here. The resumability in one
[04:34:12]  sense is like the most optimal islands because they're small and they wake up at just the right time every time. But on the other hand, auto detection can't tell if
[04:34:28]  something should be client or server. Once you hit a decision point that can change after initial render, it has to assume it's in the browser via auto detection. So
[04:34:39]  like if you hit, and if that detection point is high in the hierarchy tree, like say at a route, then when you go to the next page, you load all
[04:34:50]  the JavaScript. Is that a problem? I don't know, but it's, it's very different because it's harder to keep those models clear from each other.
[04:34:59]  You can go like, well, it's fine. I have server functions. Those are only on the server, but that the fact that any piece of code at any point
[04:35:06]  can run in either place is a tricky mentality to get around. And I think this is the thing is I like resumability from the optimization standpoint of saying this JavaScript doesn
[04:35:18] 't load. I think a lot of the quick isms have been challenging for people. Even if the syntax looks like React, it's a lot to kind of think
[04:35:26]  about like where my code is running. They'd argue you don't need to worry about it, but people still do. So it's, that's, that is one
[04:35:36]  of the challenges. I know for a fact that they are doing a lot of cool stuff. If you watch my Solid serialization stream, Solid may have been the first
[04:35:52]  to have server functions out of like the popular frameworks. Wow. Like quick out of them after and next out of them after, but quick. I've talked about this,
[04:36:07]  this demo before, but like where where Misko basically touches a file on the file server. And because he's just wrapped his watch method on his server. It's
[04:36:22]  not loading for me. Lovely. In a server function, he's able to just like touch a file and have it kind of stream in, into the client. Basically he
[04:36:32]  has a stateless backend, like not completely persistent, but his server functions can exist over time. You can do the exact same thing in Solid start. And in a sense
[04:36:40] , you do the same thing when you do server components in Next.js as well. But these guys are constantly pushing the boundaries here. I know that they're working
[04:36:50]  on new serialization formats to optimize. One of the challenges with resumability is that you have to serialize the complete state of your app. Not just the like
[04:37:03]  the like stateful parts, but like the internal framework representations of the data. So they got hit early in the year where I think it was Evan Yu again, being like
[04:37:14] , Hey, is resumability actually faster? And he actually showed, you know, where quick wasn't really any faster than view for booting up in this like
[04:37:21]  extreme demo. And that just pushed Manu to go, Oh, yeah, this is an optimal, like, we run this way, but we don't have to,
[04:37:27]  we can defer this work, and he fixed it. And then suddenly quick was much faster on this boot up, you know, and similarly, right now, they dump a
[04:37:35]  whole bunch of crap into the HTML, which increases either HTML, which actually has negative performance impact. So they've been working on new techniques to reduce the amount into thing
[04:37:44]  serialization has a real cost, we've been talking about this in bandwidth, resumability actually increases bandwidth and serialization, it can improve bandwidth serialization by having the
[04:37:53]  same trick as islands to be able to reduce the data you need for partial hydration. But resumability itself is a solution that involves on a base level doing more serialization
[04:38:05] . So this is not like, this is why we need to figure out what the right balance is and have the right and you can kind of can't tell with these
[04:38:14]  kind of solutions until you optimize and optimize and optimize. This is the challenge. It's a challenge I went through with solid when I was trying to prove signals. Doing signals
[04:38:21]  and treating them the way knockout.js did wasn't going to convince people that signals were good. I mean, sure, nice DX, you know, you borrowed that
[04:38:32] , but then just feed into a V DOM. To actually get to the point where the rendering was good, we had to optimize to a degree that we showed that what
[04:38:40]  was possible. And I think that's where Qwik's sitting right now, which is tricky because they're solving a problem that people haven't necessarily realized that they have
[04:38:49]  or that there can be a solution for. So it's hard. This should have been a really good year for Qwik. Instead, it was mediocre. And
[04:38:58]  I hope that they continue to have the space to be able to continue to innovate because they're doing amazing things. And it'd be a real shame if they can't continue
[04:39:09]  to do that. Manu is a machine. Yeah. I find reasonably a bit limited for a case where you need to store the state on the server and doing client
[04:39:23]  side navigation after the first load. Yes. It's exactly what I was describing. At some point, parents will get so fast, they will update in time. Like every
[04:39:34]  time you hit counter, you become. Yeah, exactly. With all the time travel we do and shadow DOMS and portals and all the magic. Yeah. Yeah
[04:39:53] , it's all, it's all HTTP. To be fair, Qwik only has in-order streaming. They don't have an order like React or Marco or
[04:40:02]  Solid does. So they're, and yeah, and then the streaming that they do over server functions is just like literally just like, yeah, we're just chunk,
[04:40:14]  sending the chunks over piece by piece. It's all HTTP. The key to this stuff is that it's not, yeah, this is not about like WebSockets
[04:40:22] . So I actually had LiveView on and we were testing it. WebSockets actually suck for startup. So like, yeah, it's generally we're all working
[04:40:32]  in a zone of stateless. This is why I want to talk about HTMX. The question of stateless versus stateful backends is going to be a question
[04:40:38]  that comes up a lot in the next little while. It's kind of obvious like where the web's been heading with serverless and stuff that we'd want stateless
[04:40:46] , but I don't know people like there are use cases and you can get really good experiences and it's very clean. Having seen like Phoenix or so even LiveView.
[04:40:56] js, it's a clean model to have the server run it. So I like, I get it. It's just like, I don't think that's what
[04:41:05]  most people have for infrastructure. I could be wrong though. I mean, WebSock is after the fact maybe, but initials all about HTTP. Yeah. So
[04:41:24]  like it could be faster, but you'd have to have persistent connection. And I don't think most frameworks are going to design with persistent connection in mind. So like
[04:41:39] , yeah. if stateful is on the table, which it hasn't been for years for most things, then like all the math changes, but yes, right now
[04:42:03]  I'm looking at quick and talking about a bunch of really innovative technology, but what's the package. And I think that's going to be the trickiest part.
[04:42:12]  I'm hoping. Yeah. I don't know. We'll, we'll see how things run for them for the rest of the year. We already talked about remix because
[04:42:24]  of react. I'm looking forward to quick innovation. Uh, what did I say here? Um, better serialization. These are actually real problems, especially having large
[04:42:46]  enterprises, you know, it's like, it's just like, how do you sell this to a developer who thinks a single page app is fine? Like CSR
[04:42:55] , like quick has like, if people think, uh, CSR is fine, quick has no ground to stand on, which is really unfortunate for them. If people think
[04:43:04]  that, that on the opposite side, they think that like Astro or HTMX is fine, you know, then quick has no ground to stand on. It's
[04:43:14]  just a very awkward place to be. Um, that's why it's good that they integrated with Astro and stuff, because then they can be part of the dialogue.
[04:43:20]  But the problem is quick is more optimal than Astro is at the Astro side of stuff, or it's close to like, in theory, it's more optimal
[04:43:27] . I think in practice islands versus the stuff might not actually make any difference. It's like the last X percent. We talked about that before, but like it was,
[04:43:36]  this is why quick was having a hard time. Like why they need to go there. They're like, we already do what Astro does better, but that that's
[04:43:42]  like missing the point. Do you think Dino is basically dead early? No, I think Dino is still going. Um, let's, let's,
[04:43:57]  let's keep on going. I Dino, I'm not going to companies. I can't tell you about, I don't care. I only care about their technology
[04:44:09] . Um, so yeah, it's yeah. Let's keep on going. Okay. Lit. Okay. Lit. I'm just, I'm going to skip over you
[04:44:18] . We already talked about, I don't have much to say about most of them. These guys are like, you hasn't moved much. They're the react was
[04:44:26] m framework. I don't believe you has like server components. If they do, then I, then they, they deserve a big mention. I think for the most part
[04:44:36] , you is just like react classic, um, like V dom style in rust. So I'm not, I, I don't have much to say for them. Let
[04:44:44] 's talk lit. Um, Scalibra lit. Give me a letter, not a pencil. Lit big thing for this year for lit was free release where again
[04:45:02] , I, I've been mentioned them earlier. Guess what? Support for single signals like, um, and they also have new optimized templates, which I wouldn't be surprised
[04:45:15]  is similar to the templates that we do in solid or million or that. So like, yeah, compiler optimized templates, compiler optimized optimized templates. I don't have specific
[04:45:32]  stuff to say about lit other than they make web components viable, um, to use because you need a framework really to get the same support out of web components that you
[04:45:45]  want out of other frameworks. So yeah, neither here nor there. Let's lit is pretty good at what it does. So I, I don't have any much else
[04:45:54]  to say about it. Use react circuit 2020. There you go. The only added SSR at all last year. Yeah. We just haven't got the Lept
[04:46:13] os yet. I don't know. Is Leptos not on this list at all? I assumed it was just further down. Let's otherwise we should get Lept
[04:46:30] os on this list. Yeah. We should get Leptos on this list. It's not. We'll get to Leptos. I'm almost done the
[04:46:35]  list that I actually care to cover. Um, Alpine. I already showed the benchmark. That's all I have to really say about them. They're still growing,
[04:46:45]  which is good on them. Let's talk Preact. Yeah. I, I, I, I wonder if Fresh is on this list. I'm going to talk
[04:47:05]  about Fresh. Yeah, it is. But I'm going to talk about Preact first. Preact's just been steady. See, just like steady. They're at
[04:47:16]  35,000 stars. It's a hard zone when you get into the 30 Ks to get like game ground. You got to like break through like Svelte
[04:47:23]  has. Otherwise we all kind of sit around 30 Ks. 30 K is like the new 20 K, which is the new 10 K. Like that's, that's
[04:47:30]  my, my feeling. Like back in 2010, getting to 10 K star was impressive. 30 K is like that now. Um, it's like where you're kind
[04:47:40]  of like things have slowed down. All the early adopters know who you are, but you know, mainstream is a whole other thing. And don't get me wrong.
[04:47:50]  You can be around 30 K stars and have, you know, you know, a million downloads a month or whatever. Um, but yeah, Preact, um,
[04:48:01]  again, is another framework that I haven't been keeping up as much tabs on. They did a lot of good optimizations around SSR earlier. Um, let's see
[04:48:12]  Preact. Let's go to Preact. Do they have any, what's there? Let's go. Let's they're, they're deep into version 10,
[04:48:23]  uh, releases. Is that like the only, okay, there we go. 19, 10, 19, two pre-compiled JSX transform. Yeah. I
[04:48:34]  mean, I, my understanding is Preact has been doing meaningful continued maintenance stuff. This wasn't like, like solid and view. This wasn't like a particularly exciting year
[04:48:46]  for them until you get into the, the, uh, the meta framework area. And we can talk about fresh. Um, fresh has been doing cool stuff. Part
[04:48:56] ials. Um, what else is on the list? Uh, uh, uh, I think that, did they solve nested yet? Um, I'm going to think
[04:49:09]  of partials is the big one that comes to mind when I think about Preact. Obviously, um, Marvin, um, from Preact core team is now working
[04:49:17]  on fresh officially, which is huge. Um, they've been doing minor releases like crazy. Like if I go fresh, I think 1.5 was the partials.
[04:49:25]  They, are they already on 1.7 yet? They, no, maybe not. Maybe 1.6. Simplified typings. Um, yeah, they,
[04:49:35]  there, there's regular work happening now. Um, really cool to see this HTMX-like API in here. This is what I was talking about where the
[04:49:45]  attraction of this is. Preact likes keeping it, um, to the basics. As I said, fundamentally, the only reason why I haven't really considered this kind of
[04:49:54]  approach mostly is because fundamentally these, I was talking about the, the, uh, the preserved state problem. I don't think Preact, I don't think Fresh
[04:50:03] , Astro, um, HTMX, pretty much any of the islands solutions have actually really focused on this flaw. I, uh, once you add clients and navigation
[04:50:15]  for MPAs, it's perfectly fine. You don't have this problem, but once you get to client side navigation, um, you need a solution more like React
[04:50:24]  server components. You don't necessarily need to not use HTML, but this is why I actually put a halt on the work I was doing, um, with our,
[04:50:31]  like we solid start had something, you know, along this lines about a year, uh, just over a year ago, um, around the time the next 13 release,
[04:50:40]  we had our version. I realized this flaw and I've been thinking about it and working through it ever since, um, when I'm not working on primary start, none
[04:50:47]  of these other frameworks have actually solved it yet. So, um, yeah, I, I do think it's, uh, on the other hand, I do think that
[04:50:57]  this, uh, in general is progressing. We're starting to get focused. Like, I think all this evolution here will have us start focusing on the, on the
[04:51:05]  right thing. Uh, yeah. Layout to this nested routing support. Yeah. Yeah. The fresh has been like regularly doing updates now. I, for a while
[04:51:20]  there, I think it was fresh 1.3 or whatever. It felt like fresh hadn't, uh, hadn't done very much recently. Right. It basically,
[04:51:30]  they came out like, like, what was it? Beginning of 2022, maybe even 2021. I can't remember. And then it was like, we didn't hear anything
[04:51:40]  before it. We can report that fresh is not only still alive and kicking, but it's actually adding new stuff. That's actually very interesting. Fresh is a build
[04:51:51]  step. Now. There we go. It's up. It's no, I, I was pretty much. I think that's what they, yeah, that's a
[04:52:08]  good question. What's a pre-compiled JSX transform. I I'm not sure. Isn't all JSX pre-compiled? I'm, I
[04:52:15] 'm, I'm, I'm a little bit confused. You're right on the pre-act stuff. I wasn't sure what I was reading. I suppose that's
[04:52:19]  worth looking into, but not right now. Um, generally speaking, pre-act is going to continue keeping to the basics. It's kind of stepped out of react shadow
[04:52:30] . I think right now there's a lot of people looking for simpler solutions and pre-act is going to, you know, I talked about solid, keeping it simple
[04:52:39] . Pre-act is really the keep it simple framework. Now, now that I think about it, I'm going to say that keep it simple. Right. So I
[04:52:52]  like, you can see initially that they saw HTMLX, they see partials. That's a primitive you can work with. They're going to integrate that primitive directly,
[04:53:01]  give people a lot of control, gives people a lot of power. Ultimately I'm suspect whether that will actually be like the right abstraction, but I think I'm learning
[04:53:12]  as pre-act goes along. I'm glad they, I'm glad they made that step because technically for doing stuff like nested routing, I kind of want a partial
[04:53:21]  mechanism under the hood. All right. Who's next? Uh, there's not that many. Marco. Um, sure. What do I want to say about Marco
[04:53:32] ? Uh, yes. Well, this is what I have to say about Marco. We had Michael in the stream. They released Marco run, which was, which is
[04:53:46] , um, their meta framework, which is very similar this year, which is very, you know, it's on beat. It's like, we all have meta frameworks
[04:53:54]  now. Um, a year ago, I told everyone on the stream that if Marco six wasn't released in the next year, um, I would stop talking about Marco
[04:54:08] . Um, we're here now. So, uh, I guess, I guess I'm done talking about Marco until Marco six comes out. I, I, I
[04:54:31] , I don't know what to predict. To be fair. Um, I, I haven't been involved, um, very much in the Marco team the last several months
[04:54:40] . Um, over time, you guys figured that the gap would get bigger, wherever I get an opportunity, I do try and promote and look into stuff. And I'm
[04:54:49]  always, you know, very interested in the work. Um, that's, you know, I, I do keep my tabs on it, but, um, yeah
[04:54:57] , the, the, it's a bit like quick in the side, they're doing stuff that is groundbreaking, um, completely groundbreaking in terms of technology, um, more
[04:55:07]  so than pretty much anyone else on this list. But if it's not in people's hands, what can we talk about? The real Marco has never been tried.
[04:55:16]  Yeah. I, I know they're getting a lot closer, but I said that a year ago too. So, um, big, uh, to be fair, there
[04:55:26] 's one other topic, which is a miracle in itself to TypeScript. Run the meta framework and TypeScript to Marco. I know there's TypeScript in most frameworks automatically
[04:55:38] . And then obviously stuff like view and Svelte made big moves. Getting TypeScript in Marco is almost no short of almost miraculous because Marco has the most advanced,
[04:55:46]  uh, UI language for like, so like trying to map that was incredible. So, I mean, again, there's something I could talk about because it's absolutely kind
[04:55:56]  of miraculous how they pulled it off. Um, but yeah, I think that's it for Marco here. Let's continue. I I'm almost at the end of
[04:56:07]  my list. We already talked about Leptos earlier on in the stream at the very beginning because it's the most hyped framework clearly, but now we're getting into frameworks
[04:56:16]  that average less than one GitHub star a day. Um, I mean the stencil, but I mean, these are still getting updated. Pushed a day ago, pushed
[04:56:26]  12 days ago, two days ago, days ago. These are, these are, these are still being maintained, which is a good, good, good sign. Mith
[04:56:34] ril. It's just, oh, except for Knockout. No one's pushing Knockout in two years, sadly, but I think I'm, I'm basically
[04:56:43]  at the end of my list. Um, so to speak, we talked about, um, Leptos and Dioxys a bit at the beginning of the stream.
[04:56:51]  So I'm good on my WASM and I'm good on my frameworks. So let's, let's wrap up here with a little bit of, uh, some conclusion
[04:57:00]  thinking kind of stuff. Uh, right. I, I covered most of the topics I want to in, in my article. Um, I don't even know if
[04:57:11]  I like this conclusion completely that I wrote in the article, but my, my, my feeling here is that we're kind of entering this zone where even though it's kind
[04:57:26]  of obvious that things are converging. Yeah. I'm going to full screen for this one so I can talk it and fix my, like, my camera here,
[04:57:37]  even though it's kind of obvious that things are converging. We're now going to start get that. We're starting to get that pushback from people who are like
[04:57:49] , prefer being on one side versus the other side. less right. Um, you're in JavaScript. Um, no, like, I think stuff like I've been
[04:58:05]  talking about all these server first frameworks based on some kind of partials, whether they're RSCs or Astro or Marco or, um, HTMX, especially
[04:58:18]  the ones that are toying into getting client navigation, working with that with the accepting of react server components. I think they're going to realize really quickly that they have
[04:58:27]  huge shortcomings. Now there might be other ways to solve this other than the way of react has been solving it. But I think like while the developers of these frameworks
[04:58:35]  might know that I don't think that the general population understands these limitations, but on the same time, I don't think they care to. I think there's enough overhead
[04:58:43]  here that like people like mentally have had enough and they just want like that little piece they can attach to, you know, use. And honestly, that's perfectly fine.
[04:58:53]  Cause like the cool thing about the web and website, so you can just build them yourself and you're good to go. You know what I mean? Like you don
[04:58:59] 't need, uh, like, uh, crazy degree, you know, figure this stuff out. So I understand the pushback. It's just funny that I'm the
[04:59:12]  guy who never, I'm never like right tool for the right job kind of person, but I would rather people use the right tool for the job at least, you
[04:59:21]  know, to a large degree rather than suffer the pain of like, of, you know, using the wrong tool. And as these things converge, it's harder to identify
[04:59:34]  that it's like, and even the things claiming to cover the whole range don't necessarily cover it completely. So I, I can definitely understand that tension, but I
[04:59:46]  think the kind of key takeaway from that is nothing is replacing something else here. Like it's not like, like HTMX now can replace this. It can, maybe
[04:59:56]  in your specific use case, but in the general sense, nothing's completely made something else obsolete on both sides. Um, they're just extending their range. Um,
[05:00:07]  which means in a sense, not much has changed except arguably that complexity that we've been trying to wrangle in. So I, I get, I get, you know
[05:00:17] , why, you know, there is that skepticism, but I'm, I'm remaining optimist here because I think 2022 showed what was possible 2023 for a lot
[05:00:30]  of frameworks was heads down doing the work, trying to like, like make it viable for people to use it. It's gonna, that's gonna continue bleeding into 2024.
[05:00:41]  Um, the unfortunate thing here is you, some of us were kind of hoping by this point, it'd be very clear what the path forward is. And, um,
[05:00:50]  I don't, I don't feel it right now. Um, one of the ironies here might be that what reacts doing with RCs might be technically the best
[05:01:02]  direction of solution out there. Like if I was trying to choose a direction to follow, but the implementation makes it harder to swallow and the complexity that comes with it does as
[05:01:13]  well. So it's not easy. I think for most people making a choice on frameworks this year, they're going to continue to go with most of the status quo
[05:01:27] . Um, although I wouldn't be surprised if it, that involves a little bit more on the RSC sides and in a sense, ironically, using stuff like Astro
[05:01:38]  to maintain the status quo, because the, while the frameworks themselves are trying to advance Astro kind of acts like a time machine. And I feel like HTMX does
[05:01:47]  as well, where people kind of like, don't worry about the new advanced frameworks features and use them like the way they use them in the past. And that's
[05:01:54]  going to continue to be the case here. I feel that's probably a temporary step because I think the stuff that's being worked on has a potential to outshine,
[05:02:04]  but that's kind of where we're at. I did update my background. I had too many new Legos to add. Um, and it was just getting,
[05:02:14]  it was kind of dark in here. Less complex than the demo prototypes we showed in 2022, but we also learned all the shortcomings. So then we gained back complexity when
[05:02:27]  we're like, oh crap, this didn't work right. Think about it. We did these server component things that are rough and then we started refining them and be
[05:02:33]  like, yeah, we're getting a sweet spot. And then we're like, oh crap, there's security concerns and stuff. And then like, now we're
[05:02:38]  next.js is, you know, encoding stuff, for example. Like I think there's, I think ultimately, I think we made it come out on even because of
[05:02:48] , we improved some stuff, but then found gaps in other places. Oh yeah. And the award that was, yeah, I forgot that. That was, that's a
[05:02:55]  community hero award from ng Poland, angular. I guess it was JS Poland, but an angular conference that gave me a community award, which is really nice of them. And
[05:03:05]  beside it though, you can't see it behind the quick logo. I think there's also my, my JS nation breakthrough of the year award. Yeah, probably.
[05:03:14]  Honestly, this quick thing you see maybe in the corner is really cool. MISCO 3D printer was big part of that, which is really awesome. But yeah,
[05:03:26]  I did what I set up to do today, which was talk about the different frameworks. To be fair, there's a whole bunch of like, this week in JavaScript type
[05:03:38]  stuff, but I covered like half of it. You know, other than, yeah, I covered like half of it in the course of the stream anyways. So I'm
[05:03:49] , I'm not terribly choked. I'm trying to see if there's anything that I, I missed. And I think that, yeah, I don't think
[05:04:01]  I actually missed very much. Um, I mean, I didn't mention this during the million part of the stream, but they joined a Y Combinator. So yeah
[05:04:09] , I think, I think that's basically it. I would love to dig into like Dan Abramoff's function of state and data thing. Cause I think there's
[05:04:18]  some subtlety there that's not there, but we'll leave that for another stream and we'll call this one where we are. Yeah, I can see that
[05:04:35]  where you're saying like, because then you fill in the gaps and you end up there again, anyways, I do think some abstractions work better than others. I
[05:04:43]  like these are like, these things are evolved. So as we change the boundaries and move the pieces around a bit, like it does generally shuffle in better over time,
[05:04:55]  but yeah. All right. Yeah. I'm going to call it. It's after five. I need to eat some food. I am hungry. Um, thank you
[05:05:05]  for joining me on this stream and, uh, figure out what I'm going to stream next week. See you till then.