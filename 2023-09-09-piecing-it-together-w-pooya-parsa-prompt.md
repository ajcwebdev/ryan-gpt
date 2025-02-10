---
showLink: "https://www.youtube.com/watch?v=seLSN1i8zRw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Piecing it Together w/ Pooya Parsa"
description: ""
publishDate: "2023-09-09"
coverImage: "https://i.ytimg.com/vi/seLSN1i8zRw/maxresdefault.jpg"
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

[00:00:01]  Hello everyone and welcome to my stream today. I'm pretty excited to get started up here. This stream today is actually pretty timely and pretty important for my own work. I
[00:00:18] 'm kind of guilty of sometimes using streams as a way of doing further research into projects that I'm very interested in. I use it to ask questions, you know,
[00:00:32]  when I find issues. This way I get to put the maintainers on the spot, so to speak. But yeah, today we're going to be talking about UnJ
[00:00:40] S and we're going to have Puya join us in a few minutes. But right now we're just going to ramble that preload. So everyone come and say
[00:00:48]  hi in the chat while we start getting started here. Let's go. Hey, good to see the regular is already here. I probably should tell people that we're
[00:01:05]  live. Less than an hour. Yeah. Apparently, let's see here. Let me share my screen. It's been a while. Okay. Yeah. Yeah
[00:01:16] . We'll talk about this week in JavaScript. There's been a bit later. There's been some good stuff happening. some controversial stuff happening as well. But we
[00:01:27] 're going to get started here pretty quick. But let's first get people in to the stream. get people in to the stream. Where are we? Where was
[00:01:49]  the stream advertisement? Yeah, here we go. All right. Yeah, people seem pretty hyped about this one. So this should be good. All right. All
[00:02:03]  right. Let's go. Let's go. Let's go. Let's go. How's everyone been? Good long weekend. I have a Twitch TV. Seeing
[00:02:22]  a lot of release announcements over the last week or so. People getting geared up for the fall. Oh, yeah. You know it's coming, right? Yeah. Hey
[00:02:35] , Brandon. Good to have you here. Core maintainer of analog Angular framework built on Vite and built on some of these UNJS libraries we're going to
[00:02:46]  talk about today. Hey, Jessica. Good to see you as well. Yeah. We got a lot of people coming in really stoked about that. Who's Pouya
[00:02:54] ? Yeah. I'm going to let him introduce himself in a few minutes, but he is involved in UNJS, which is what? What did I call it?
[00:03:04]  I mean, I think they have the whole morning. It's like an ecosystem of open source libraries following very much the UNIX philosophy. I think I'm taking that
[00:03:11]  right off the website. the viewership has been down a little bit this summer. I also took such a long time at those conferences. It felt like it was
[00:03:30]  like three months I was away. Hopefully, get back in a regular schedule again. Yeah. Oh, hey, Greg. You're here too? Yeah. It's
[00:03:42]  going to be a great one today. A lot of topical stuff. Hopefully, get into some discussions. I love to hear people's opinions about a lot of these current
[00:03:52]  events as well. And feel free to ask questions during the stream. We'll do our best to answer it. Um, yeah. Now, let's get people going
[00:04:01] . I hope I got my Twitch right. I'm like the worst at Twitch, which I remind people weekly, just like I'm the worst at node. I'm just
[00:04:10]  the worst at tooling. Oh, right. I got it right. Good for me. All right. How are we doing? Yeah. See, there's like no
[00:04:21]  one on Twitch right now. Everyone's on YouTube. Yeah. See, I'm just going to keep on talking a bit while people actually join on and get past those Twitch
[00:04:32]  pre-rolls because this is a... You got to make sure people are here for this. What are we on? Yeah, no, that is not what N
[00:04:45] JS is. All right. Good. We got some people still coming in. I don't know. Nothing, uh, excites the, uh, open source,
[00:05:05]  um, or tech Twitter like TypeScript. I'm, I'm, I'm kind of, uh, I'm kind of scared to go into that topic later,
[00:05:14]  but I guess everyone's got opinions, right? Oh, there we go. There are people on Twitch. What do you know? Yeah. It took, uh
[00:05:26] , it took, uh, it took a minute. Yeah. Rewrite into CoffeeScript. CoffeeScript. Yeah, I wonder if DHH would like that,
[00:05:38]  right? He's like the huge Rails fan. Um, I wonder, I wonder if, if CoffeeScript was his ideal form of JavaScript and he's never forgiven the
[00:05:46]  community since. Oh, man. Yeah. Yeah. I, um, somewhat. I, I love that a lot of people had big takes on it. I did not
[00:05:59] . I, I have my usual small TypeScript takes because you know how much I love TypeScript. All right, all right, all right. We, we haven
[00:06:10] 't, we have people here now. Okay. So my, my meandering talking and highlighting people's names in chat has worked. This is this. Where can I
[00:06:22]  find the TypeScript documentation for solid? It's the, this is a funny one. I'm going to use a minute here while we're doing this pre-roll right
[00:06:33]  now to answer that. The, the docs have like this really bad pseudo TypeScript throughout, which actually alienated a bunch of people. It's really weird challenge with
[00:06:44] , with docs where you have like some people who want all the examples in TypeScript, some people who want nothing in TypeScript because they can't read it. Like if
[00:06:51]  you go to solidjs.com and go to our tutorial, not tutorial, sorry. The tutorial has TS, but it doesn't use it. But if you go
[00:07:00]  to like the API reference, there is like all this type information and stuff in here. We have a separate guide specifically for TypeScript as well. So that, you know
[00:07:11] , people can get more stuff, but this is still not enough for a lot of people. So at least when we talk about docs, it's all just the new,
[00:07:18]  uh, docs that are a work in progress. You can just prefer choose if you prefer JavaScript or prefer TypeScript. Um, interestingly enough, it looks like defaults
[00:07:29]  to TypeScript unless it like remembers your settings, but probably defaults to TypeScript defaults to view. That can't be right. Let's change this and see if
[00:07:37]  it's like a local store. Yeah. Okay. Yeah. It just remembers your settings. So yeah. And this way, all the rest of the code examples throughout the
[00:07:47]  docs, wherever there is code examples, we'll use hopefully TypeScript versus JavaScript, hopefully. Anyway. Yeah. Yeah. Yeah. Yeah. I know why we're
[00:08:02]  actually here, but I, I'm, I'm just hogging the show here a minute. Well, making sure people are actually going to join on. And,
[00:08:09]  um, we don't have Pooja to no audience. Yeah. We're going to have a nice TypeScript discussion later. So let's not worry about that.
[00:08:20]  And let's instead look at what we want to look at today, which is on JS and more, more importantly, we should welcome our guest onto the stream today.
[00:08:34]  So let's welcome Pooja onto this, onto the screen today. Here we go. How are you doing? Hi, Rian. I'm super excited to be
[00:08:43]  here. Awesome. Awesome. Thanks for joining me. Um, I, I, it's funny cause Daniel Rowe, uh, came on here to talk to me about
[00:08:54]  Nuxt, I think about a year ago and he kept on, you know, mentioning on JS and I was like, yeah, yeah, whatever. I'm doing
[00:09:01]  my own thing, blah, blah, blah, blah, blah. You know, just kind of tell me about Nuxt. I want to see, like, I was
[00:09:05] , I was looking at the high level stuff. I wasn't looking at the lower level stuff. I was just curious about what made people really excited about Nuxt. And
[00:09:12]  he just kept on like, you know, being like, but there's this on JS thing. And I'm like, oh yeah. Okay, cool. So about Nu
[00:09:18] xt. And a year later, I've, I, you know, year of trial and error and building a whole bunch of stuff ourselves. I came back and I
[00:09:29]  was like, okay, what is this on JS thing? You know, but even before we get into that, how about you start by introducing yourself and telling us a little
[00:09:41]  about yourself? Okay. So, uh, that's a hard question. Uh, so basically my name is Pooja. Uh, you can read my username as PI
[00:09:50]  zero because I like PI number for some reason. Uh, before coming to JavaScript ecosystem, I think I was more backend developer. I was doing some, uh, hacking
[00:09:59]  stuff. And at some point, uh, back in university, I think almost six or seven years ago, uh, we had some challenges basically to make our tooling front and
[00:10:08]  tooling, you know, for our startup. And back in the time there wasn't enough tooling. Uh, I was so near to the JavaScript ecosystem. I think that
[00:10:16]  time was IOJS. I don't know from audience who remembers IOJS disaster. But I remember I started JavaScript with IOJS. And back in the time
[00:10:24] , I really thought that some toolings are missing. And that was, uh, almost the time that I was, uh, more interested in the open source development and making
[00:10:32]  some solutions for JavaScript. I was so lucky back in the time, uh, because next year was the hype and Sebastian and Alex made a frame awesome framework called Nuxt
[00:10:41] . Uh, which back in the time I joined with them and learned a lot about how to involve with the community, uh, how to make great diverse experiences. And yeah
[00:10:49] , it was kind of the beginning of my journey. I think, uh, in this open source. Yeah, it's just to help me out a bit. You said
[00:10:56]  back in the time, back at that time, a few times. When, when was that around? Was that 2015, 16? 16, I guess so. And
[00:11:04]  yeah, I, I remember that back in the time there was a framework called hack.js. And if anyone remembers it now, I think the success story is fastified
[00:11:12]  kind of. And yeah, I used to make a small framework with some very sophisticated, uh, building ecosystem. Uh, but yeah, comparing to Nuxt was much more
[00:11:23]  elegant. And that was the reason we joined the forces to make Nuxt better. And that's how the story started. Right. Were, so you, were you already
[00:11:30]  like doing a lot of open source at that time? Or was this kind of your entry into open source? Uh, well, before that, I was, uh,
[00:11:37]  kind of, uh, communicating to the contributing to the react native ecosystem because I was using it. Uh, a little bit also the larva ecosystem, but I believe like the
[00:11:49]  starting point for me to be a real, uh, open source developer was real because it was so much welcoming ecosystem. And, uh, especially with Evan that invited me
[00:11:58]  to the team. So I had a chance to actually work with real people in open source. Nice. Yeah, no, view community is great. And. Okay. So
[00:12:07]  you're, you're there, you're interfacing with people building these little projects. Do you know what you said off what became Fastify? And then, uh
[00:12:16] , you just found yourself, what building these pieces. What, what, what was that like? Okay. Uh, so the story goes a little bit, uh, forward
[00:12:27] . Uh, back in the time there was, we was making Nuxt, uh, I think one of the problems that we faced very early was the lack of good
[00:12:36]  quality packages in the ecosystem. Uh, I remember, I think, uh, the first packages was either consular or webpack bar, which are still whooping, having
[00:12:46]  a lot of number of downloads in NPM. And, uh, that was almost the first packages that we started to introduce to Nuxt, but being open to everyone because
[00:12:55] , uh, having such things, uh, like webpack bar was going to benefit almost everyone. Um, I even remember back in the time next years, uh,
[00:13:02]  for few versions, I started to use the same webpack bar library for some reason they ditched it. I never know why, but that was how we started. And
[00:13:10]  as of the controller package, which was a console helper, uh, it was almost entry point for creating smaller packages can, uh, that can not only benefit Nuxt,
[00:13:20]  but I believe everyone in the Java ecosystem. Right. Okay. Yeah. So this, this is just those basically Nuxt. Well, I'm trying to like position
[00:13:31]  it. Cause like you said, Nuxt itself was looking for quality packages, but this was to consume them, to use them or for like end users to use them.
[00:13:41]  Like it was about building their own ecosystem or just that they didn't, they were like surprised that these pieces were missing. Okay. I see, uh, well,
[00:13:51]  basically yes, our main goal was the experience of end users of obviously for Nuxt user. We wanted something so much elegant, something that works out of the box without configuration
[00:14:01] . And that was something that was missing in the ecosystem. For example, a webpack plugin to, to show basically two parallel sidebars that show you build process.
[00:14:10]  And, uh, I think back in the time, the reason that had this idea to create a separated package was that sometimes testing, uh, to develop something, uh,
[00:14:20]  within another meta framework is disaster. You have to not only test the package that you are making, but you know, so many other factors in, uh, putting it inside
[00:14:29]  it, but developing them separately was helping to, uh, create something isolated, something clean, and then integrate it with the core of Nuxt. That was kind of
[00:14:38]  the reason that we decided to make them separate and integrate to the core. Right. Was this, I mean, I'm just, you said you've, this is fast
[00:14:45]  forwarding a little bit, but like, just so I understand, was this during Nuxt two time period, or was this part of Nuxt three? Like what,
[00:14:52]  what, what I'm just trying to get his point. I guess almost by time of Nuxt version one or zero point something. Okay. So this was a part of
[00:15:01]  Nuxt right from the, from near the beginning. I did not realize that. Okay. Interesting. So, uh, at that point, you know, you pulled
[00:15:08]  out a few of these libraries. What, what were those like? What kind of libraries were those at that time? Like, are any of them still around today? No
[00:15:15] , of course. I think, uh, they are the ones with like most of the downloads, uh, over the time, we read rates over some of them. I
[00:15:21]  can say I rewrote them entirely over the time, but I'm glad that we found the problems. That was still, there was problems. There are still the
[00:15:30]  problems and we needed the perfect solution for them. So the name existed, but we iterated over them and re imagined how to solve that specific problem. For example, one
[00:15:39]  of the earliest ones was STDM, which today is, uh, like a ESM package. It has full type of script support. We added more environment prox
[00:15:47] ies to it, but back in the time it was introduced because we had so many checks in different places to basically check if we are in a testing environment, do we
[00:15:54]  have a console with TTY or not? And they was missing basically. So, uh, yeah, uh, they still exist. They still are probably the most popular packages
[00:16:03]  from NGS. And the reason they exist, I think is not, uh, because next users demanded the best experience. So we made something nice for them, but now
[00:16:12]  they can benefit everyone in the ecosystem. Oh, okay. Yeah, no, that's, that's interesting and good to know. Yeah, I, I did not realize
[00:16:19]  that. I guess, again, timing wise, this is, this is long before beat or, you know, like that kind of thing you guys were dealing with,
[00:16:26]  I guess, web pack builds, uh, with Nuxt at that time period. And, uh, basically just this gap, like I didn't even try and like people
[00:16:37]  were bugging me right from, I'd say 2017, 18 period about creating a solid meta framework. And I was like, I'm not gonna do all that work.
[00:16:46]  Beat was what tipped me on, but you guys, you were already like, okay, we're invested. We're doing this. We're doing this. How
[00:16:50] , where's all the pieces that we need? Okay. That, that, that gives me a lot of perspective. Yeah. So that's, that's awesome to hear
[00:17:00]  the story that those pieces are still there. Uh, when, when did it become like, was it always like in an un.js? Like when did it become
[00:17:09] , when did the project sort of get its name or face, so to speak? Oh, that's super funny because, uh, for the whole thing, we, uh
[00:17:16] , over the time, uh, we re-managed different names. Uh, first we had two packages. They was in the Nuxt namespace. So, uh
[00:17:24] , there was two of them and we made more and more of them. And at some point we decided to move them to a separate M space because that was a whole
[00:17:33]  collection. I guess the first separate name was, uh, no JS, something like that, because it was inspired from something else. We then renamed it the Nuxt community
[00:17:43]  and Nuxt country because there was packages that was contributed by Nuxt ecosystem. And, uh, when I started to seriously build Nuxt tree, uh, with the
[00:17:53]  help of the team, uh, we was thinking to have a good branding for it. And back in the time we was thinking that, okay, what we are making,
[00:18:01]  we are making universal JavaScript solutions because, uh, that was almost the time that edge workers was being popular. So almost the beginning of the time that no JS was not,
[00:18:11]  no longer the dominant runtime outside of browsers. So the name came up with, uh, universal JS, uh, on JS. I think now it's unified JS more
[00:18:20]  because we aim to unify everything, but that was the last rebranding for the whole collection name. So it came from different sources. Many people moved their reports to
[00:18:29]  the on JS collection over the time, but that's the last name. And that's how we came with it during the time of making like street back two years ago.
[00:18:37]  Yeah. So nuxt three was, yeah. Cause that's around when I first heard about that. That's why I, I even, I was surprised even people
[00:18:46]  apparently very close to the view and uh, nux community were surprised that this really started something as far back as next one. Um, but yeah, when nux three
[00:18:55] , like I I'm gathering all through nux two, there was this kind of idea of it, but I, would you say that nux three was when it really
[00:19:03]  kind of like became its own real external identity. Like were, were other people using these libraries before nux three? I mean, some people were, but like in
[00:19:13]  the way that you maybe pictured or intended. Uh, which ones you mean, nitro or general, general. Yeah. The general ones like, yeah. I mean,
[00:19:24]  nitro is obviously did nitro. Well, I guess I, I didn't want to jump too far ahead, but I'm also, we're also kind of getting
[00:19:30]  there. What, what, what, when did nitro show up? Uh, I guess almost three years ago. Uh, it was basically something interesting because, uh
[00:19:39] , there was internal team waiting with nux cause and it was talking basically about edge workers and how we can support nux for those targets. And, uh, I think
[00:19:49]  back to the time I started to make an experiment for nux. Uh, I think it was even before nux three that we had the initial pieces for nitro
[00:19:57]  to consign somehow make nux two, uh, build it and then re-optimize it for the edge workers in a effort of space. And that's how
[00:20:06]  it was started with as a nux two module. And then over the time it, uh, we named this first sigma because it was gathering every source and making it single
[00:20:16] . So, uh, that was the initial code name for nitro as sigma, I think for nux two, and then re-evolved to nitro
[00:20:22] , uh, when we was, uh, going to make nux three more stable, uh, mainly because first we wanted to, uh, make everyone able to use nit
[00:20:29] ro, even if it's not using nux, but more than that to make sure that we can properly test the core of the server side apart from the nux.
[00:20:37]  Right now we are running more than 360 I think tests if every time we make a change to nitro and yeah, it's going to be super expensive if you want
[00:20:46]  to also make a matrix that also tests over all the nux features. So one of the initiatives of separating was to make sure that we can have an eyes of the environment
[00:20:54]  to make sure that the server sites, uh, is stable basically. Right. Okay. So that, that, yeah, I'm just, I think actually we,
[00:21:03]  we jumped right into it for a bit there just for people who don't know what, what is nitro? Okay. That's a good question. That's a really
[00:21:10]  good question. And something that I welcome everyone to put a good description for it. So I tried to explain it, uh, in some way, uh, what it does
[00:21:19] , uh, in some ways it's a meta framework made for other meta frameworks, like any other tool that we have in Angeles. Uh, what it does is that it
[00:21:28]  takes your code. It takes your server side code. Uh, it adds some small, really tiny runtime things to it, uh, basically to support routing, support,
[00:21:39]  uh, storage layer that works everywhere, not node, not coffee workers, but everywhere. So it just takes care of the conversion for that. It gives you a hot module
[00:21:49]  replacement. Uh, it gives you some, everything that you need to make your code, make sure that your code is portable enough. And it converts them to the provider specific
[00:21:58] , uh, version. So it kind of, in some ways it's still Sigma. It just gathers all the sources, combines them at some runtime logic to them
[00:22:07]  and makes them ready for production completely standalone. Uh, but you can also use the standalone as a server builder, basically to build any kind of server you want. It could
[00:22:16]  be powered by express or any other runtime. Gotcha. Okay. Yeah. So nitro, um, which is, I have to admit one of the, my most,
[00:22:26]  uh, one of the packages that Andreas I'm most excited about and we were going to talk about and actually dig into a bit, a bit later, um, came
[00:22:33]  around pre, uh, Nux three as a way of trying to address the emerging edge function, server function, kind of serverless environments that are coming out. And,
[00:22:46]  um, yeah, I mean, I, I guess this was always, always kind of a bit of the goal, right? Cause as you said, nitro kind
[00:22:54]  of pulled all these pieces together and, um, yeah, I, I guess that's when things started kind of really being realized, but you said testing was actually one of
[00:23:04]  the biggest, uh, um, motivators for actually splitting these out into separate packages. I think that's, that's amazing because honestly, um, that's,
[00:23:16]  that's what makes these so consumable, I guess I'd say, because then you, you kind of feel like, you know, you can trust in this. So
[00:23:27]  what, what, where, where did I want to go on this next? Yeah. Yeah. Cause cause we got nitro, which pulls together all these things.
[00:23:36]  And I guess it was obvious when did, didn't nitro ever make it into Nux two or was it just became like the foundation for Nux three? It
[00:23:44]  became the foundation for Nux three, but it made first as a Nux module. So basically our first proof of concept that working proof of concept was a Nux module
[00:23:54]  for Nux two, basically. Very cool. Very cool. Some love from the crowd, cool innovations coming out of you, help the whole JS community beat nitro pretty
[00:24:06]  crazy. Yeah. Yeah. No, the, those things kind of all step in line is interesting. Cause, uh, my understanding is that Nux three, um
[00:24:18] , didn't, maybe it wasn't, maybe my timing's a little bit off, but like Vite came out, but like Nux three went ahead, like not
[00:24:26]  just on Vite, like it went ahead, like, was it, was it that Nux three started before Vite came out or we had so many times, uh
[00:24:36] , funny times, uh, because you know, uh, we started integrating Vite pack five for Nux two back in the time when we was planning to make N
[00:24:45] ux three. And, uh, to be honest, Vite pack five had so many good potentials because, you know, they also was working on this lazy compilation idea
[00:24:53] , uh, which I think we'd done it much more perfectly, but so basically we started experiments with Vite pack five for Nux three implementation. And it was always
[00:25:03]  in our plan to support Vite as target. Uh, I remember, I think the first attempt was also to support Vite for Nux two, because Nux
[00:25:14]  two was still depending on the legacy back four, but, uh, architecture of Nux is super extendable. Basically you can touch every part of the framework, uh,
[00:25:24]  you want, you can replace, you can remove the whole builder and replace it with another one using a Nux module. And that's how we started experiments with V
[00:25:32] ite support. And back in the time, there wasn't even a server implementation for Vite. So we had to make some really hacky stuff. I remember even the
[00:25:41]  plugin didn't have the support for server side, but that's how the reprogramming starts. We hack around, we prove something and then you make it stable.
[00:25:50]  But yeah, it was super fast and we quickly fell in love with it. I think everyone in the community fell in love with it and we put a lot of more repairs
[00:25:58]  to make it stable as is today. Yeah. Okay. Yeah. So, um, you, yeah, it's interesting because you've been involved with Nux project for
[00:26:09]  quite some time. Um, and were, I guess, had an interest in these, these pieces that we were talking about these, like the NJS stuff.
[00:26:21]  Um, how does, um, Knox and NJS fit together today? Okay. So basically I think, uh, Knox is like a meta framework, right? Uh
[00:26:33] , and for a meta framework, I would compare a meta framework to a Linux distribution, like open two, it's a gathering of, uh, open source pieces from
[00:26:42] , uh, different places and making the best integration of them. Uh, the way I see, uh, NJS is like a supplier. It's the first,
[00:26:51]  uh, fast class supplier for the Nux ecosystem. So basically every need that we need in Knox, that is not related to the user land directly. It's more technical
[00:27:00] . It's a missing piece in the JavaScript ecosystem. We spend some time to basically identify the problem and the real need, and we somehow design it in the NJ
[00:27:09] S ecosystem and it supplies the Nux, uh, and the whole community. Uh, I think it adds some complexities to the equation because if you want to explain someone how
[00:27:20]  Nux is working now, it's not just Nux and Vue. It's probably like three 30 packages behind the scenes, but it gives so much stability over the
[00:27:28]  time because, uh, that was a really good point that you also asked about testing. Uh, every piece of, in this puzzle, now it's perfectly tested.
[00:27:36]  We don't need to test them using poor request experimental poor request that is the Nux. We can write extensive amount of tests. We can well think about the specific problem
[00:27:45]  in a spiral scope. And then once we was pretty sure that stable enough, we can introduce it to the upper levers. But as a bi-product, we can also
[00:27:53]  leverage any, anyone else in the ecosystem. You can create your own distribution, like how many forks we have of 012, for example. We can create your own
[00:28:02]  distribution out of the system. Yeah, no, that's, that's very cool. I mean, I love primitives. I love small single purpose library pieces working
[00:28:10]  together. I think, I think this is great. And, uh, uh, when I guess what I was kind of interested in is because, I mean, this is
[00:28:20]  more of the politics and people side of things, but like is like, this seems great, but obviously like I've seen maybe not to this extent, but I've
[00:28:30]  seen, you know, other libraries or frameworks and stuff like they build stuff and they go, well, Hey, anyone could use this. And then they might, you know
[00:28:40] , publish a package or talk about publishing a package. It might never happen, might happen. And they, and you know, it's basically at the purview of
[00:28:49]  the driving framework. Like it's not just the thing that you use to test or dog food out the ideas. It becomes like basically the boss or the driver. Um,
[00:28:59]  that's why I was kind of wondering, like, can you speak a little bit more about the relationship between like, I think Nux, the framework Nux, the
[00:29:06]  company and on JS, like, like how, how, how do they all kind of go together? Well, that's a tough question. Uh, first, uh
[00:29:15] , something to answer is that I really admire all the team, uh, both Daniel that is, that is leading the Nux roadmap and Sebastian that is now focused on the
[00:29:24]  company. Uh, and that I'm now focused on the NGS. Uh, what we over the time, over the years learned from others and community was that we could
[00:29:33]  both be good. We could have a good feeling to the people. We can be open, have an open ecosystem. We can have an open framework, but also have
[00:29:40]  a stable company on top of it. So the relationship is that, uh, we give value to users via Nux Labs, uh, when we can make a commercial product
[00:29:49] , but we never close the ecosystem. I really wish that Sebastian was in this chat and we could, we could also explain better, but that's how the relationship works instead
[00:29:57]  of just, you know, forcing users to use the solution. We open every place. We open every layer, yet we can still give users the value in any level that
[00:30:06]  they want. Uh, if they want to leverage next, they can do, uh, if for some reason they wanted to go smaller and leverage something smaller, they can
[00:30:13]  go, or if they can go higher and use some products, like next studio to make your project based on the club. But none of them are never meaning to have vendor
[00:30:21]  locked in. Basically you are free to use whatever you want, but we also give you value through these three different layers. And that's something to be honest, I
[00:30:30] 'm really proud of today, uh, with this separation of concerns, because this is something that I think makes sense for everyone. We give value to users, whatever they
[00:30:39]  want. Right. Okay. Yeah. Cause yeah. And that clarifies a bit because honestly, I I'm not that familiar. I think it's Nuxt Labs.
[00:30:47]  Like I'm not very familiar with what the company side of it was. I, my understanding when I was talking to Daniel a bunch, um, he, he was saying
[00:30:56]  that like Nuxt is kind of like its own kind of open government governance model and it's like fully open source and it's not like just consumed by this, you
[00:31:05]  know, company. It's not like just completely driven by that. And then it was interesting because as you mentioned, un.js has also been kind of unrolled from
[00:31:13]  Nuxt itself. Um, so we're Daniel's like the lead on, uh, Nuxt is my understanding. You're the lead on un.js. Um,
[00:31:21]  I, I got that right. Right. Yes. Uh, yeah, exactly. That's, uh, the length that we went, uh, something to add to
[00:31:30]  this, uh, we went even more lengths in un.js. We have, you know, different maintainers from different backgrounds. They also might be not related to Nu
[00:31:38] xt. So the government's guide that we ended up finally for An.js was that respect every maintainer in An.js to have their own full freedom. So basically
[00:31:46]  it's not like, because we want something for Nuxt, we would put it through An.js. All of these are working completely independent and the maintainers in the
[00:31:55]  An.js organization also have, they have their own freedom of choice to basically build whatever they feel is, uh, beneficial for the ecosystem. But you know, most
[00:32:04]  of the times we end up to leverage everyone else in Nuxt because things are designed to work together perfectly. Right. Yeah. No, I, that, that makes a
[00:32:13]  lot of sense. And I, I'm just going to pull this up here just to see how obvious, like, so An.js, like Nuxt is obviously a
[00:32:18]  framework. It's pulling stuff together and Nuxt Lab has some commercial products built on top of that. But An.js is a very different kind of setup because like
[00:32:30] , like how many repos are, are in An.js? I'm just like scrolling view all repositories. There we go. Don't ask me. Some of
[00:32:39]  them are sometimes really scary to maintain because something, one of them is GT, for example, and if you can find it, it's basically a super fast transformer to
[00:32:49]  support, uh, ESM and types in runtime. Sorry, what is it called? It's started with J I T I. Oh yeah. Yeah. The second one
[00:33:00] . And you know, it's popping, uh, tailwind CSS today also for loading configuration. It was something I just find out after I saw it jump in the downloads
[00:33:14]  in the months. And I was super surprised, uh, that this happened. I'm pretty sure other libraries here are having some unknown users from popular frameworks, but somehow
[00:33:24]  it putting so much dangerous for me because just, you know, make a simple mistake. Everyone's just making some issues. No, it's broken everything. But yeah,
[00:33:34]  I'm also kind of glad that this could be useful for others as well. Something that we made initially for Nuxt to leverage Nuxt users is now open for everyone
[00:33:42]  else. Yeah. That's that's, I guess that's another interesting part about this because some of these libraries and these utilities, um, over time, the platform might
[00:33:52]  get rid of the need for a lot of these tools, but then you have like longstanding projects that don't get the opportunity to change. And then like, for how
[00:34:01]  many years later are we maintaining this piece? Cause like, let's like, like, if, if you started new today, well, I guess this does also Type
[00:34:11] Script, right? So is this like running TypeScript in node natively? Is that what this is? I'm just, I mean, you would, uh, if
[00:34:21]  you see the, uh, header, you can see it's using Babel right. Yes. And, and common JS, it seems somehow oldish, but something
[00:34:31]  I'm really glad is that how we could make it working as stable. It's basically we barely need to maintain this one because it was, uh, really solid, uh
[00:34:39] , over the time that we made it and we made a redistribution of Babel that is more efficient than Babel itself. It's super compact. It's less than
[00:34:47]  one megabytes, I think. And it basically gives you every opportunity that you need instead of installing like 40 megabytes of some binaries. You just support TypeScript
[00:34:56] . Have fun with that play on words always. Oh, sorry, not solid. I mean, in some way it's good, but it made for solid. Yeah,
[00:35:07]  yeah, no, no, I mean, this, this, this is great, but yeah, I mean, yeah, the, I guess I was wondering how you maintain
[00:35:15]  all of these libraries and the answer is, have multiple maintainers kind of working together. Yeah. That's a really good question. Uh, well, uh, I
[00:35:24]  think I'm mostly focusing on these projects, uh, on a daily basis, like checking, I think over 200 notifications per day, but I'm super glad that we are
[00:35:34]  shaping a new team. Uh, so basically over the years, uh, we started with growth ecosystem. Uh, when we started Nuxry project, it got much more
[00:35:42]  serious with NJS project. And back in the time it was all focusing on developing Nuxry. So we didn't have to shape up a proper team,
[00:35:50]  but once Nuxry was stable and I'm super thankful for Daniel here, uh, because he is really doing great job on Nux. Uh, this is somehow that
[00:36:00]  gave me, gave me the opportunity to focus more on the NJS, but we are gathering a more, uh, bigger team of maintainers to jump in and
[00:36:09]  help us on maintaining this smaller repos inside NJS. Because if you want to grow, we certainly need to trust some more people, not depend on one person.
[00:36:18]  And that's definitely the goal to increase the amount of the people in the team to focus on slower packages. But, uh, as part of this mission, I think,
[00:36:27]  uh, one thing that we are focusing is the new website to give people some learning materials, because if you want for, to have more contributors to the open system,
[00:36:35]  open source, uh, ecosystem, we need to teach them what is this libraries, how they work, how you can build something with them. And then when they are familiar
[00:36:43]  with the lower level stuff, they can contribute. So one of the initiatives that we have is that we provide more learning materials and developer materials that people can involve more and
[00:36:54]  develop more to the NJS ecosystem. Yeah. Yeah, no, that makes a lot of sense. It's, I have to admit there's been a few times
[00:37:02]  I've been like in panel talks with Daniel and I'll make some off the mark comment about like, oh, it'd be great if we could make this agnostic
[00:37:09] , but like realistically, no one's going to do that. And then Daniel like very politely puts up his hand and he's like, yeah, we, we,
[00:37:14]  we're, we're working on it. We have a library for that. Um, so, uh, you know, as polite British, uh, accent or whatnot
[00:37:23] . So I, uh, I think it's very cool to actually see this, you know, there, because as some of you know, and I'll probably talk about
[00:37:34]  a bit more in the coming weeks, um, finding it's a, it's a real gift to go out and be looking for certain libraries, you know, to build
[00:37:43]  foundation for a meta framework and then find that they already exist. Um, so I, I'm very thankful for the work, um, that you are all have been
[00:37:52]  doing and not just to, um, you know, publish that package because it's convenient. I, I've noticed a real dedication, um, to just the, the
[00:38:03]  idea of open source behind this. It's more than say what Nuxt just supports today, for example. Uh, you know, uh, because like, if I'm
[00:38:13]  like, I guess a perfect example of this is, is, uh, and where I'm thinking of that is, is Nuxt, um, has its own like
[00:38:20]  request response event, like object setup, right? Like it's, it's already got its own, uh, abstraction for that. And I'm, I'm gathering it
[00:38:30] 's based on built on top of H3, right? But, um, I, my understanding is like, you've recently been adding a bunch of features including support
[00:38:41]  for like the web response and request objects and readable stream and all that stuff, which I'm not even sure if Nuxt is even using, but it, it exists in
[00:38:49]  this library. Yes, indeed. Uh, well, actually you can leverage it today for any server route. Uh, and I think we have to solve some challenges basically
[00:38:59]  for view side to unplug the streaming for cell head, uh, cell headers, but, uh, something really beautiful about this, I would say, is that everyone that depending
[00:39:08]  on NJS ecosystem immediately has the updates. So if we have a future industry, not only Nuxt users, but any other framework, any other user that uses
[00:39:17] , uh, this ecosystem, they can leverage it immediately. They don't need to wait for it for other iteration, for releases, for collaboration is immediately available to everyone.
[00:39:26]  Even this is streaming, even though we don't support it through view, you can leverage it today for any other server routes or API routes. Yeah. For, for those
[00:39:35]  not familiar, like H3 is basically like, express right app app use, you know, you can, can see it, but then it just works on any,
[00:39:46]  uh, serverless environment, right? Like that's, that's the beauty of you just create app app use event handler. You know, this is just a string response
[00:39:56] , but you can also, you know, get fancy. I mean, maybe I'll see this and you can return basically any sort of proxy request. You have so many
[00:40:06]  actual different middleware next. Yeah. This reminds me a lot. Something to add about this, uh, something I was really excited back in the time when I was
[00:40:17]  designing H3, uh, you are completely right. This was basically made to be a replacement for H3. So it went with some lengths that you can basically use H
[00:40:25] 3 media, express media over inside an H3 application right now, or we could use any NPM packages with H3 in any serverless environment. But something really
[00:40:34]  special I would say about H3 is that it uses, uh, composables, uh, comparing to other more traditional server frameworks, you basically register some plugins that they add
[00:40:45]  you some features basically application-wide. But it wasn't designed for the era of server workers, because in workers, like clients, the bundle size matters. You cannot just
[00:40:55]  install like 100, 400 megabytes of packages. So these composables are only included bundle only when you need them, but not only when you need them in the line
[00:41:04]  that you need. If you have a event handler that probably after condition is required to read the body, it exactly reads it at that point, not earlier. Yeah, I
[00:41:14]  was, I was gonna, I was wondering if that was the name for this, because another example of this pattern that, uh, our TypeScript fanatic friends will
[00:41:22]  be familiar with and for the exact same use cases, actually, I'm really excited about this. I don't know if you saw the library Valabot. It's
[00:41:29]  like Zod, it's a validation library, but I'm hoping this gets the idea of composables through. If you've ever seen Zod, it's Z dot
[00:41:36]  dot chaining dot. And that means you have to pull the whole library in. Whereas composables, as you're saying, is, it's like this, where you
[00:41:43]  have like one function that has specific behavior, and then you can import separate functions that have that specific behavior and they all work together to build the thing, but you only
[00:41:52]  bring in as much as you want. Obviously Valabot is a huge deal for validation on the client, because this means suddenly you don't need to pull in all like
[00:42:01]  a huge validation library in the browser, which is giant. But this is also important in serverless runtimes with coldstart. Um, so it's very cool that H
[00:42:11] 3 is doing this like event handler proxy. It's almost that same, you know, it's that same kind of pattern. I composables. Okay. I hadn
[00:42:20] 't heard that term, but I think that makes a lot of sense. I think even you invest, uh, basically made the name when making composables for view three.
[00:42:30]  Oh, but there's something interesting. Another thing in on JS is on city. Basically we support view feature called composables for every other framework. That's how we un
[00:42:41] blocked for Nitro. Okay. Yeah. Yeah. That's interesting. Yeah. So you're saying like the composition API. Yeah. Yeah. I guess that
[00:42:48] 's good, good naming. I, I'd never really thought of it that way. Yeah. Makes sense. Um, obviously the, the patterns that were brought to view
[00:42:59]  in the composition API are very, very similar to the reactive patterns that, uh, were in stuff like knockout or solid or whatever previously. And, uh, that
[00:43:09] , that kind of building up the thing as, you know, primitives yet composables. Yeah. And composition, obviously it's a great name because composition is actually one
[00:43:17]  of the biggest arguments for that. That's one of the reasons I sometimes get on Svelte's case because, uh, the composition model completely changes from within inside
[00:43:25]  the file to outside the file. Okay, cool. I'll, I'll, I'll go with that composables like it. Let's see what, uh, what
[00:43:33]  do we got here? I got some specific questions coming in, but I want to actually, we'll, we'll get to them when we get to them. Well
[00:43:42] , I'll loop back over these questions in a, in a few, in a few moments or a few minutes when we get back there. Chaining patterns, sad library
[00:43:50]  size. Apparently this is a thing. This is, I can now port payload to H3 from express on a worker and have stateless serverless CMS. That sounds,
[00:44:02]  that sounds pretty awesome. Yeah, no, this is, yeah, no, this is, this is very cool. Um, and I guess one of the bases of
[00:44:14] , of Nitro, um, we're going to get to Nitro because Nitro is like the thing that I'm actually very interested in, but there's a few
[00:44:21]  other of these packages we saw. Um, I think you can see some of them inside the tree. You might think history is the smallest unit, but it's not,
[00:44:30]  we have a package inside called Radix 3 and, uh, it's basically a super efficient router, uh, because you asked about, about the use cases. Uh
[00:44:39] , I can't name, but that super popular football streaming service that is using Radix 3 to stream the videos out of the closedware workers right now and apply the routing
[00:44:51]  on each request on each, uh, basically chunk of the frames for each user using this library. And I'm super glad that, uh, we could help different people
[00:44:59]  and different companies to leverage the smaller things. Some, many of them are untold, but yeah, I'm super glad to see such patterns from different people because some of
[00:45:08]  my friends was asking me about question Radix 3 and just find out that it is being used also for them. But it's also the powering, the Nux,
[00:45:15]  the route rules, every other feature we have in Nitro. So this kind of composition basically leaves in cross ecosystem in Nux and on JS that we make small units
[00:45:24]  that they can leverage for different use cases. We just don't, uh, make them private for one package. Yeah, no, this is great. One, one of
[00:45:32]  the trickiest things about primitive design, generally speaking, is that you are kind of in this place where like, I always worry about boundaries because like, I mean,
[00:45:43]  there's an argument you just break, keep on breaking things smaller and smaller, then you don't have to worry about that. But like when you put stuff together, sometimes
[00:45:50]  you don't align the pieces properly or you don't break them in the right place. And then like you get stuck with certain, uh, uh, like repercussions
[00:46:03]  of those kind of decision points that end up impacting future decisions. Um, like with Andre asks, like there's a lot of library, how did you ever decide like what
[00:46:14]  deserves a library? What, like, how do you make that distinction or how, how, like, what should be a separate library? What should get added to a library
[00:46:21] ? You know, when to break a library apart, like I I'm guessing radix through like, like what was for H three or rad radix three. Uh
[00:46:31] , so basically it's three because it's a three. You got the joke. Uh, uh, because it's the structure called radix three. So we call it
[00:46:38]  radix three. Uh, but that's okay. Uh, I think the reason is that sometimes we try to think about the bigger picture about what we are going to
[00:46:49]  make in the next steps and if it makes to be usable for other packages, we immediately separate it for the case of radix three, there was two reasons. First,
[00:46:58]  I wanted to, uh, basically just test only the three matter, not something that is involving the H three matching, H three matching, because it involves all the notice overhead
[00:47:09]  on it, but I wanted to basically, basically benchmark specific library. That is only a three matter. But the second part was that we reused the same radix
[00:47:17]  three matter also for route patterns, which is something separate from the H three. So in Nuxt and Nitro, we have a concept called route rules. Route rules are
[00:47:27]  a pattern that they can map and match a wildcard amount of routes with some rules. For example, we can proxy them. We can add some headers to them. We
[00:47:35]  can add some authentication to them. And, uh, our mission was that design an API that is basically compatible with most of the platforms like versatile and Netlify and
[00:47:44]  Nginx, if you want to have self hosting system. So, I mean, the popular choice, uh, for routing is usually, uh, regex match
[00:47:52] ers because they are quite much more powerful, but the consideration for this package was we were basically thinking how we can leverage the most of the ecosystem by making the simplest possible
[00:48:02]  thing. Sometimes when we overcomplicate thing, uh, you are completely right. You cannot just make proper decisions, how to make sure that they don't break everyone
[00:48:10]  in a small change, how they can make sure that it's compatible for everyone. So for many of these packages, we probably sometimes I think for even months, I think
[00:48:19]  I have a project to announce very soon called on X. It's over a year. I'm thinking about it. I'm actually, I have several implementations of
[00:48:27]  it, but we don't release them until we are really sure that they are good primitives for the ecosystem and they are not going to be broken easily. Yeah. Yeah
[00:48:36] . So basically it takes time because as I said to you, in order to, this might not be as obvious, but in order to come up with the right prun
[00:48:44] itives, you actually have to understand the problem very well. And yeah, that's, that's sometimes more difficult than you might think it is. Uh, you know
[00:48:54] , but yeah. Okay. So this is, yeah. So this was just a case of like, you hit the same, uh, problem twice and you're like,
[00:49:01]  okay, or three times. And you're like, that's enough to pull it out into its own library. Um, yeah. Yeah. I'm, I'm,
[00:49:09]  I'm trying to decide if I want to like look at in specific at any of the other on JS libraries right now, you've got a few of them pinned here.
[00:49:18]  Um, yeah. Or if we should stop for a moment, pause and answer a couple of the questions before I lose track of them later, I want to get past
[00:49:30]  the more, you know, who are you part before we answered a few of the questions coming in, but yeah, let's, let's answer a couple of quick questions
[00:49:37]  right now. Um, let me see if I can find them to do, do, do, do, do, do, do, do, do, do.
[00:49:47]  Yeah. Here's one. I've been spending a lot of time playing around with real time sync via HTT to streaming and Jason patch. I wonder if Nitro allows
[00:49:55]  us to use a configuration. Yeah. Via the underlying node implementation. Okay. That's a good question. Uh, no, not at the moment. It's something that
[00:50:05]  we was working with Daniel, I think almost two years ago. That's something we experimented back in the time. Uh, we plan to support it through a listing
[00:50:12] , which is either on JS package. So basically we want to have the HTTP to experience from development, but no, it's not having any special implementation for HTTP two right
[00:50:23]  now. But once we have it, we basically have it for everyone for every stage. Awesome. Yeah, no, that's the great thing about this, right?
[00:50:31]  You've people can like work together towards a solution that hopefully is a general one. Uh, another one. What is the reason benefits to use proxy server provided by NGS
[00:50:41]  H3 XY during nitro dev server? Okay. Uh, that's a good question because it was something I was working on yesterday. So HTTP X Y is basically a
[00:50:51]  rewrite of HTTP dash proxy, which is super popular ecosystem of NPM, but it's not maintained for three years. And I thought something interesting, by the way,
[00:51:02]  about this, HTTP X Y is a rewrite of the type of script of the older packets. And during the rewrite, I found several problems and bugs that we never found them
[00:51:10] . And we was always getting reports from users all kinds of type of script. Let's shout out to users that just remove that script. It's solved the bugs legacy bugs
[00:51:18]  for us. But yes, uh, talking of the proxy, uh, the way that uh, Nux dev server and Nux dev server works is that we create
[00:51:27]  a main process and we fork another node.js process that basically runs it and natural also forks the worker for it. Uh, the reason is that this way we can
[00:51:37]  have an isolated environment for development environment and we can fully reload if we want. We can also apply source maps and any other flags that we want to need. Uh, we
[00:51:46]  can avoid this, uh, memory leaks and any other thing. And in order to have a multi-layer nested, uh, setup, uh, that when
[00:51:54]  you are started, dev server starts another process and you just don't feel it, it just works. Uh, for that we use, uh, proxy internally, basically two
[00:52:02]  prices right now. And this proxy just works out of the box. And the other reason for proxy is the HTTPS because internals of Nitro in development time,
[00:52:11]  they don't need this HTTPS. They just have to work together. But in development, you just may need to just run HTTPS server, uh,
[00:52:18]  which is easy because we can run it on the proxy layer and then internally we can convert it to the HTTP that all the complications. I I'm super stoked. There's
[00:52:27]  people like yourself working on this level of problem. Cause like these kind of requests coming in on these pretty detailed things. I get them fairly often. And I'm just like
[00:52:36] , I'm like, oh man, I have to stop and actually figure out what the solution is for like how I want to change things so that the architect in a way
[00:52:44]  that support these things. And I'd rather be looking at about anything else. So I'm very thankful for, for, for the, for your work here in,
[00:52:54]  in terms of like, you seem very knowledgeable about this area. You've been working on this for quite some time. It's been what, six, six years, seven
[00:53:04]  years working on Nuxt in at, uh, at this kind of core level in terms of the, um, the, getting like all the server pieces working together.
[00:53:13]  Right? Uh, well, I want to take all the credits because it's amazing community and amount of people that are working and involving it. But yeah, I'm
[00:53:23]  super glad and thankful that you're saying that. That's nice. Um, I'd love to get an overview of unplugging. So would I, can we talk about
[00:53:30]  unplugging for a minute? Cause yeah, there's a couple of these packages that I want to talk, take a look, take a look at, because they're
[00:53:36] , they're very, as I said, they're, they're part of those building blocks that kind of go together. And, um, yeah, uh, I can
[00:53:44]  quickly give a quick context and story. So basically when, uh, Anthony joined us, he wanted to basically, uh, promote wheat across ecosystem. And the first, uh
[00:53:53] , question and problem that we had was that how we do not duplicate the stuff. I mean, if you are going to make and maintain like two plugins for web pack
[00:54:00]  and wheat, it's not practical. We have to just drop one of them. So we came up with this idea. Okay. Why we cannot just make one and just
[00:54:07]  converse to the different packager. So that's how we, uh, unplugging and using unplugging, which has, I think, an extensive community. I think
[00:54:14]  it's unplugging ecosystem, something like that. Uh, there are many other, uh, plugins that they are working agnostically. So you can use them with some
[00:54:25]  experience for web pack and beat. Yeah. This way we avoid making duplicate logic for different models. Okay. So, okay. So this is the plugin format that is
[00:54:36]  used by beat. I, I was always wondering about this. I thought I heard somewhere that this started as an idea from Jason Miller, but I, um, from Pre
[00:54:45] act community, but I like, is that, is that the same thing? Like this is basically, that's like basically rollup had its plugin system essentially. And
[00:54:56]  then, uh, I forget what it is. I, I thought the story was that Jason had, maybe it was for what he had that WMR or like what thing
[00:55:05]  where he was like trying to universalize it. And then beat ended up like also doing the same thing. And then like, do you know the story behind this at
[00:55:15]  all? Uh, 34? For, I'm plugging like, like, like, did it, like, when did the, uh, how should I put this? Like
[00:55:24]  425 commits. Oh, you mean the time when it was introduced? Because I thought like, uh, let's, can we 400 commits? So I'm, I
[00:55:35] 'm just, there's probably like a faster way to do this, but this is my. I think you can check NPM releases maybe because they give you also the
[00:55:42]  timeline. Okay. So I got to the oldest commit here, July 12th, 2021. But what's like the, the, using the rollup, um, style
[00:55:54]  plugin system predates this, right? I think they were. Yeah, it definitely predates it, uh, because for night rule and, uh, for next,
[00:56:06]  the way that we write plugins is basically same as rollup. We use that object syntax. So that's why we based the API based on rollup and convert it to
[00:56:13]  the webpack. Although it's simpler, you know, uh, the whole, uh, logic behind Andres is to keep things simple. And if you want to choose
[00:56:19]  a format, uh, to be mostly compatible with everything, but also usable for every, everyone else was to choose the simplest one, which was the rollup interface, which
[00:56:28]  is almost similar to beat. Right. Yeah. Okay. Yeah. I, I, I thought there, I, I see. So this is like the formalization
[00:56:35]  of, of, of something that was already kind of starting to happen in, in nature out there anyways. And this is, this is, yeah, I see. Yeah
[00:56:44] . So we got basically V, web pack four, web pack five, yes, build RS pack thing. Okay. So yeah, this is pretty cool because it does mean
[00:56:53]  that almost every single bundler now can use the same, uh, plugin format. I, I, yeah, I, I, I, I, is, is
[00:57:10]  this used now by these projects or like, like, did it, like, does V use unplugging under the hood or does it just support a very similar like plugin
[00:57:22]  format? I guess that's what I'm wondering. So I think the ecosystem, uh, largely is depending on unplugging for many of the plugins that are made for reads
[00:57:31]  because as a bike product, you know, when people make a plugin using unplugging, they not only leverage the with ecosystem, but also anyone else that is using for example
[00:57:41] . I see, I see, I got, I see what you mean. Like, this is a, this is a way of authoring the plugin in a single
[00:57:50]  format that can fit into there. So it's not just like, obviously it works with V because it's the same as V to roll up more or less, but,
[00:57:57]  but this actually works like generates what you need to for web pack four and web pack five. Yeah. That's, I gotcha. Yes. What V uses is for
[00:58:05]  its plugins is on build, which is another project. On build is basically, uh, easy peasy builder for your ESM packages. And I was surprised that,
[00:58:14]  uh, someone started to add it to the beat, uh, to build the plugins for bits. Right. It's also better document meant it than beats plugin system. Uh
[00:58:24] , probably spoken from some, by someone with experience wrestling with the beat documentation at various times. Um, I, I, I think that's the interesting thing. Cause I
[00:58:36] , I guess with V around now, a lot of on, uh, on JS is, uh, you know, stuff that's in that realm ends up interfacing
[00:58:45]  with it a fair bit. Like what, what's another one that I thought was interesting? Um, uh, was it on M I, I find beats environment variables really
[00:58:57]  confusing at times. And I was like, Astro made their own kind of thing on top. When I was playing with Astro a bit, I was like, Oh
[00:59:04] , okay, cool. So you just rename them to this right now. If you saw a start, we have the, the beat ones. I think what it,
[00:59:11]  what it comes down to is that there's like the client and the server, and there's the things that get processed at compile time, which V cares about and things that
[00:59:20]  are in runtime on the server, which V does not care about. And because like beats got like server integrations would leave it really open, but it's, it
[00:59:29] 's, it's not, it does like intended or designed to be the full server runtime. So it's. Use cases for environment variables are a little bit different. Yeah
[00:59:38] . Uh, spoiler. This is another thing. I super sad that I use this name. Uh, the other one is STD dash M. Uh, I will
[00:59:46]  explain you this one before, just quickly. This is basically, if you can go to the source and the packages, we basically wrote the, some part of the node.
[00:59:55] js code in a way that it works in the workers. So basically that is something that recently, I think, uh, runtimes like Dino are doing, but this
[01:00:04]  was our first initiative to make sure that Nuxt works in every place without node because we basically wrote node here. So that's how we can run H3 and any
[01:00:14]  other express application in any worker. Because if you go to the node, you can see the modules. Yeah. Yeah. Basically. Yes. That's how we wrote all
[01:00:24]  of them. So sometimes it's crazy. Yeah. Basically some of them are mocks, uh, because it needs platform support, but some of them are actually working
[01:00:38]  different places like, uh, streaming or request and response. They are fully functional replacement for node that works. Okay. I see. I see. So I, I grabbed
[01:00:46]  the, the wrong library. This is, this is the one that this is actually very cool as well. I was looking for environment variables, but this one actually is the
[01:00:54] , the thing that actually makes all the platforms have the same, uh, APIs available to them. Yeah. We call it not less because it's without node. Yeah
[01:01:04] . Yeah. Node async hooks is one that I'm very interested in right now because this was a blocker for me for ages. Um, because I was like,
[01:01:14]  Oh, I'd love to use like async local storage, you know, great way to get the request context into a server functions. But then I was like, crap
[01:01:24] , I can't do that. Um, only supported node. What are we doing all these other environments? I gotta like find other ways with compilers and try
[01:01:31]  and hack around it to make it work. Yeah. Um, something I would suggest you to do is to try to use onctx because that's the package that we
[01:01:39]  are integrating async local storage right now, but we are collaborating with the runtimes like, uh, clover guys and also, uh, chrome team that is contacted
[01:01:47]  TC39. They are pushing forward the async hooks, uh, API, but if you use, uh, onctx, uh, it can handle all the logic
[01:01:55]  behind the scenes. So depending on the platform, it can leverage async local storage or the async hooks when it's ready to use. So basically if you migrate with
[01:02:04]  earlier, you can make sure that as soon as this policy is ready, you, you can leverage it basically. Right. There's some funny comments from the, from
[01:02:13]  the audience. Is this bun, you know, rewriting node. Unbun. Oh man. Unreact. Uh, people are having fun with this. Um
[01:02:26] , but yeah, uh, yeah, no, this, this is, this is very cool. Crypto. That's another one that basically there's a bunch of these
[01:02:32]  poly fills that I've been writing by hand to kind of work under different environments and yeah, here they all are. Um, very cool. Is. Yeah. Is
[01:02:42] . What is this? I'll say a few V is bad at environment variables. Um, is, is there anything? I don't think there's anything that solves process
[01:02:52]  and important medical ability. Is that true? Is, do you, is there anything for environment variables, uh, in this, uh, you can go to the city
[01:03:00]  dash it is something we basically extracted from some work runs in nitro. Uh, so basically it's like a proxy. Uh, it tries to use different environments and different
[01:03:11] , uh, uses. And, uh, this is one of the libraries I told you that they are iterating over the time. Back in the time, CDM was
[01:03:17]  basically provide this flags, which was really useful for everything in ecosystem. You wanted to check something, but recently we added runtime detection for runtime keys and two new features and
[01:03:28]  van process, which are now abstracted. Uh, you can also basically see the implementation because it's not that much cryptic. It's something really simple. It's
[01:03:38]  I think less than 100 kilobytes. Uh, basically what it does is to provide the proxy to use the basically the runtime, the most available runtime. So for
[01:03:49]  beat in development time, you have, uh, import meta that we can use. Uh, for Dino, we have some strange API for m.2 object. Uh
[01:03:58] , but for the rest, we support shims. So if you run a CDM in a browser, uh, that is compiled through wheat or any other builder, and
[01:04:07]  it's not providing any run and dynamic runtime environment variables, it falls back to global beast. If you put something to the global, it reads that M if you write
[01:04:15]  to it, it tries to an internal shim. So we have full read and write functionality in the runtime. You can provide underscore underscore M underscore underscore. So this is
[01:04:25]  how we also worked around with, uh, some strange API in corporate workers, because you only have access to the M within a request, which is really limiting. So,
[01:04:34]  uh, this extracted from the logic from nitro in here, and it's basically open for everyone. Even if you are not using nitro and, uh, for
[01:04:43]  the incompatible environments or builders that I hope sometimes don't support import method at M has a first class citizen, you can plug it and shim it and basically we
[01:04:52]  can enable the functionality for them and super cheap. It's, it's, uh, like a proxy. Yeah, I, I found the right bit of code here,
[01:05:02]  right? For the new proxy is it's literally a proxy get has set that just wraps this, uh, get M call, which then tries to do. Yeah.
[01:05:11]  Yes. And to be fair, uh, to mention that you might ask like why I'm calling every time. The runtimes are to blame, honestly, because as I
[01:05:20]  mentioned, they only provide you after some time. I think other runtimes also have different strange behavior. That's why we have to defer this. Okay. But yeah
[01:05:30] , it's pretty much tested and it's using in used in any other environment. So we can kind of rely on it. The best option up there. Right. Very
[01:05:38] , very cool. Yeah. I, I have not had the most fun time with this. I was very confused at first because people were reporting these issues and I'm like
[01:05:50] , what are you, what are you talking about? I thought we'd handle this. It's like beat did not handle this. And then sort of patching them
[01:05:56]  ourselves and man, I, I, I've had a lot of, uh, adventures in this, uh, you know, uh, so it's, it's again
[01:06:05] , very cool. As I said, I just should have listened to Daniel a year ago. Um, and there are many cool things. I think you have to just
[01:06:17]  see them like magic. Uh, it was a dream for, I think three years ago, I started this call as panier because it's easy to work with everything,
[01:06:25]  but finally, uh, Anthony just quickly then quickly then make it possible. So the idea behind this is that you'll load a file, a type of script file, and
[01:06:33]  you work on it. Like you are just editing the code and you can just serialize it back to the code. So it's just like open the code as a code
[01:06:40]  and then stay with that code. Gotcha. So it's a very simple transform, but how does it, okay. It's, you know, it's just,
[01:06:51]  you are basically think that you are editing a JavaScript runtime code. You just push to an array. It's pushing to the ASC syntax. Okay. So yeah, it
[01:06:59] 's an ASC. I was wondering what the ASC syntax was. Okay. And then you just, Oh, interesting. Okay. I'm just trying to.
[01:07:07]  It's just code. You have code in runtime. Yeah. So like you could literally have like a function. It could be like blah, blah, blah, function and
[01:07:15]  then parse that and then replace the function with a different function. And then like, I don't know why you do that, but then like basically have an output, the
[01:07:24]  code of that new function. Yeah. Although it preserves the coded side automatically for you. So if you use tabs or two spaces, it just preserves it for
[01:07:33]  you. It's just seamless. This is built on top of Babel, right? No. We use Babel for ASC parser for TypeScript parser,
[01:07:43]  but it's used recast. Okay. Yeah. I'm not familiar with recast. Yeah. By the way, to just mention Babel has one of the most
[01:07:50]  stable implementations of TypeScript parser. It's not that popular for TypeScript, but even if you check the landing page of TypeScript, they mention Babel
[01:08:00]  because they have a really good ASC parser. That's why we use it. People, this is the coolest thing about going over on JS stream is that there are
[01:08:11]  so many useful things for different people. You know, like this, this is a very cool tool. Yeah. I'm glad you like it. I mean, it
[01:08:26] 's, it's hard to picture something simpler for this, for doing very straightforward kind of like little code mods type things where you're like, especially the kind of stuff you
[01:08:38]  might find in like a, maybe like a beat plugin or something where you're just like transforming like a specific like piece or pieces. Um, you know, this isn
[01:08:49] 't like writing solids JSX transform, you know, that's, that's, that's a bit more complicated, but this is, uh, yeah, no, this
[01:08:56]  is pretty cool. Yeah. Yeah, definitely. And, uh, I'm not writing JavaScript. I'm writing on JavaScript. Just to answer, just, I think
[01:09:11]  we have other, more libraries for generating the DTS files. Yeah, no, this, this is, this is, this is cool. Um, yeah. Yeah
[01:09:21] . How many more of these like little, little, uh, miracles are we gonna find in here? Um, I, some people pointed me to this one for a while
[01:09:32]  ago. What was this on head? This is, this is, this manages like the meta tags at the top of, uh, right? Yes. Uh, yes.
[01:09:41]  Basically we was iterating over for, I think over a year. Uh, Nux has its own, uh, view meta and view head, uh, libraries that was
[01:09:48]  still back in the time open to everyone, but the core concept was that how we can open to open to everyone, basically create an API for managing the head that is
[01:09:58]  basically fully integrated for Nux, but this also can be used outside of the Nux. And the main initiative for that was that in Nitro, we could also reuse
[01:10:06]  it somewhere that we don't, we are not in the context of view. We are still adding headers for view, but we are not in the context of view. So
[01:10:13]  this library, that's how it was born and it's now having so many other integrations. So there's an external package that can generate you some Json schema
[01:10:22] . It can have so headers automatically has some kind of shortcuts, but it's basically a head manager with lots of develop experience. I can add in addition. Yeah. I
[01:10:33]  love how always like visit the doc document. Like how, how many doc sites do you have? This is, I think this is part of probably one of the really cool
[01:10:41]  things about this. You know, there's, it's hard enough sometimes to manage, you know, one library and have docs for that. But Andres seems to
[01:10:48]  have just like doc sites for everything. It's very, very helpful. I think main credit goes to how Nux documentation builder works. That's super easy to make docs
[01:10:59] . And we also have Nux studies. So you don't even need to go to the GitHub to edit something. That's something that makes it easier for everyone.
[01:11:06]  Right. Yeah. Cause I mean, one of the interesting things I was looking at on head and I was like, okay, I get that, uh, how to work
[01:11:11]  in the, in the client, let's say, but I was like, SSR is like a whole other level of kind of figuring out how that comes in. But
[01:11:19]  I mean, I guess you just build stuff on, on top. Um, yeah, this is, I won't bug you too much more about on head at this
[01:11:27]  moment. I'll take that offline, but I'm, I'm always, I'm, I've been looking at meta solutions again recently, just because I looked at S
[01:11:34] velte and was like, wow, this is so easy and simple. I should do that. And then, you know, this came up in a conversation. I'm
[01:11:40]  like, okay, I should check it out. By the way, uh, some spoiler, uh, because you mentioned the docs, uh, and how we can manage this
[01:11:48]  amount of docs. Uh, some other interesting project in, on JS we have is untyped. Uh, back in the the time I made untyped because
[01:11:55]  we had those sorts of options just for Nuxt. And we had to also maintain the code for runtime normalization. We had to maintain some code for adding JSON docs,
[01:12:04]  JS docs. And we also had to make a documentation. I actually real documentation. Uh, there is a playground we can open and we can see it's more in action
[01:12:12] . Uh, but basically the idea is that you just write one type of script file. It extracts you different kinds of things. So we generate types of it,
[01:12:21]  we generate actually the documentation out of it, which is now in the next documentation. We plan to use it for H3 and we can also validate in the runtime using JSON
[01:12:30]  schema and it's all using a loader. So it's just magically working. And I think Jessica is also making something interesting with it, which I can spoil now.
[01:12:40]  Yeah. As you can see, it's just coming from the code. If you just edit the default, just edit the defaults for you and makes a new JSON
[01:12:48]  schema. I see. You get the schema, you can mess with the schema a bit, have it print out this, have it print out this. Yeah. Okay.
[01:12:56]  And then even, okay. That's how we generate the documentation on the fly for users based on the code. All right. Very, very cool. It's like
[01:13:10] , I want like one step further. Huh? I guess that's the other thing. As you start building libraries, you end up finding more use cases and more libraries
[01:13:28]  to kind of help put it all together. Right. That's, that's, that's awesome. What was the other? Oh yeah. Yeah. What did I want
[01:13:41]  to see? Unplug in. There was another one, one of the, I want to talk about unstorage for a minute. Cause I like, this, this
[01:13:50] , this was the one that I was like, that's craziness, Daniel. And he was like, we do it. What is unstorage? Yeah. It
[01:14:00]  was craziness. I remember back in the time, you know, I live in Amsterdam and I used to smoke a lot of weed. So I was explaining the idea with
[01:14:07]  my friend while I was high. And he was saying, no way you cannot make it happen. Yes. Some of the ideas that are not believable at the beginning.
[01:14:15]  Unstorage purpose, as you can see in there is to provide the simplest possible storage interface, but make it as much as powerful as you want. So, uh
[01:14:27] , basically it's platform agnostic. Uh, it just works out of the box for any different provider you want. Uh, it doesn't need the browser, uh
[01:14:35] , storage or the fastest unlock node. Uh, the API works similarly for our different, uh, providers. And, uh, one of the most powerful parts inside our storage
[01:14:45]  is that you have units style mounts. So we can combine different storage sources into one source of storage interface. This was really important for us for Nitro, because we
[01:14:55]  wanted to provide one simple API that everyone can depend on it. Uh, for documentation dealer of nice, for example, we have a multi-source feature in a way that
[01:15:03]  you can have multiple, uh, sources of GitHub repositories or even, uh, APIs. And we could just combine them together in a single interface. Uh, for the
[01:15:12]  same interface, we also store the caches and store everything else inside it. And it's just as simple as using one interface. : I love this because have
[01:15:23]  you ever tried to, I mean, you have, because you've been working on this and Nux, but people think about like when you have examples in a repo,
[01:15:34]  right? Like, like, let's say solid starts repo and you want to pre-generate stuff, um, you know, from, uh, like an examples,
[01:15:41]  like templates. And the problem is a lot of the examples have to be like dirt simple because sure you can do, you can like, you can maybe build in some
[01:15:52]  kind of simple JSON data that you put an example and be like replaced with your database of choice or whatever. But like it starts getting kind of really less fun when you realize
[01:16:02]  that that example might get deployed to Cloudflare, might get deployed to Node, might do all that. And, you know, you cut, you end up like
[01:16:09]  either having, you know, the opinionated packages, but like, like, you know, what's a classic one, like Prisma not working on edge or whatever,
[01:16:17]  you know, like these kinds of scenarios. And it's sometimes hard to show the most basic mutation API. Like I want to show off my form posting progressive enhanced feature in
[01:16:28]  the framework. And then you're like, yeah, but I need a backend storage. Like, so our problem was like our notes app demo or to do MVC
[01:16:35]  demo where we want to show like this full stack stuff. It's like, what storage do you pick? Like I started actually, uh, just like trying something in memory
[01:16:43] , right? Like just like put a file with an array in it, you know, singleton, and then it updated. But you know, the problem with that is
[01:16:48]  stuff like HMR, right? Like you're like, you start like refreshing stuff, you do a code change. And now like there's a disconnect between like,
[01:16:56]  what's, you know, does the module get reloaded? Do you reset it? And then what's the memory? And like, you could write to a file,
[01:17:05]  I suppose, but like, then, you know, wait, FS, well, you know, like, there's a whole bunch of these kinds of details, um,
[01:17:13]  that suck for these kinds of demos, just having even just one option where you can just go, okay, universal key value, you could, you know, it's
[01:17:22]  no relational data space, but like, that's enough that you can build all these examples and be confident that you could deploy them anywhere. Um, just as like a proof
[01:17:31]  of a showcase of how, you know, certain features of the framework work. It's actually, it's, it's pretty, it's pretty cool, pretty important.
[01:17:40]  Yeah, definitely. That's one of the core concepts that we made it in first place. So we can enjoy ourselves to create some small to do. So I think
[01:17:47]  Sebastian has a popular demo with Knux that is basically, he made a to do application exactly just on top of one storage, nothing else, and just works everywhere. And
[01:17:57]  yeah, that's exactly the point of having something like this. The count, the counter is the universal language. So that's how things work, eh? Um,
[01:18:11]  um, no, okay. So yeah, this, this is very cool. Um, like I did, I, I, I have multiple uses of where I would want
[01:18:19]  to use this right now, even today in the solid start repo, just because of that's like, literally I did, I have the file and memory thing and HMR
[01:18:28]  gets kind of messed up. Someone actually asked a question about HMR earlier in the stream and I lost it somewhere. Uh, I think they, they're asking about
[01:18:37]  how server HMR worked. We didn't, we didn't talk about that yet. Did we? Uh, I don't think so. Yeah. Uh, question.
[01:18:49]  How much you trust and you love your followers? Because I want to show you a spoiler. You love them. Yeah. You, you want, you, yeah,
[01:18:59]  I mean, just one second. I can share spoiler and decided. Okay. Yeah. It's, it's, it's okay. As long as you're fine with
[01:19:06]  people seeing this, you know, so, uh, we have dozens of packages in Angeos. Some of them are private. This is our next thing to introduce.
[01:19:14]  And it's basically, uh, payments on storage, but for database, it works everywhere. There you go. Oh, man. Well, uh, just going through
[01:19:25]  the documentation. I hope you, uh, keep it private, but it's basically the same idea for it. And yeah, the basic of it is that it, uh
[01:19:33] , fully, uh, safe. So you can add, uh, any parameters include. And, uh, the plan is to make it as important out of the box for
[01:19:41]  nitro. So similar to on storage, it knows the proper driver to use for the proper deployment target and you can just switch between them. Uh, I mean,
[01:19:52]  this, that is, that is, that is awesome on, on data. Yes. Something more awesome about it is, uh, I not sure if I can show you
[01:20:04] , but, uh, we are working with Sebastian for us having a small OR inside it. So we can also have five, uh, queries inside this layer. So
[01:20:13]  not only is a universal and small layer up for database, but you can also have your own type of schema on top of it. Also we can bring on your own integration
[01:20:23] . So we have some integrations, for example, for drizzle, you just import it from, uh, core and just works out of the box for every provider that you
[01:20:31]  need. And it just takes away the configuration. It just works. Yeah. I mean, sign me up. Uh, that this, this is, this is great
[01:20:44] . I mean, obviously there's, there's like specifics when people get far enough down their rabbit hole, but the thing is like how far that gets you from zero to
[01:20:54]  something is huge. And I I'm gathering the way you're building this is a way that's, um, somewhat extensible, right? Like is it, it
[01:21:05] 's this, this is actually an interesting question. And one that I've always kind of wondered about if, if like, if it's, if it's a philosophical thing
[01:21:11]  or a design kind of thing is when you have to make something agnostic, you end up, there's like this problem, the lowest common denominator, right? Like
[01:21:19] , you're like, what are the features that everyone, um, manages? And then I, I support those. How do you handle the cases where, you know
[01:21:28] , certain solutions or certain like platforms can do more and other ones can't? Yeah. That's a very good question. I think, uh, our first target is to
[01:21:38]  support things in agnostic way and to push the platforms to support it. So even though the platforms do support something, even like node, we add some policies for them
[01:21:47]  so we can emulate the working, uh, the thing that is working for them, but, uh, I think we are never close. So we have other specific hooks
[01:21:55]  for different platforms. For example, we have event dot wait until, which is like closer and specific API. So basically we don't block, uh, the features from platforms
[01:22:05] . That's when we don't support them, but we try to have risk to keep the abstraction and also encourage people to be on the abstraction because, uh, you
[01:22:14]  know, the second that you go to the trap of vendor lighting, it doesn't matter how awesome it is. You're always lighting. You have to always use their service
[01:22:21] . It doesn't matter how awesome they are, but you know, they can just change the pricing. You can just want to change it. On the other hand, sometimes
[01:22:29]  the features are what drives it. So it's kind of like, I think, I think at a certain point, like the agnosticism doesn't end up matter
[01:22:37] ing as much. Like you try to be as an agnostic as you can be at a certain point. You're shipping a product that you had to make certain
[01:22:44]  decisions that you want to maximize. So I guess the answer is that because everything's modular, there's always the ability to just bail out at one at a level, you
[01:22:54]  know, and be like, okay, um, for this thing, I'm all in on cloud flare. Um, there's, there's no general purpose piece here yet
[01:23:03]  for durable objects or whatever it is. And you're just like, I'm in, um, exactly. You know, even for Nitro, sorry for interrupting,
[01:23:12]  uh, just about to mention, even for Nitro, every preset is just a preset for configuration. That's why we call them presets. So if you just want to
[01:23:19]  support the completely different platform in your own specific way, you can just drop it and just add your own template. It just works. So exactly. We, uh, advice
[01:23:29]  to use the best practices out of the box, but every possible piece of this puzzle is, uh, changeable and customizable. So we never like to use those other
[01:23:38]  open source because open source lighting is also another kind of lighting. We don't want to make people addicted to Nitro. Even if you want to change it, you can
[01:23:45]  change every part of the core. That's awesome. Yeah. Decisions that work for everyone in all cases. What's so hard about that? Yeah. Well, I
[01:23:54] , I mean, yeah, that's what's important to have a, you know, a realistic outlook on, on, on these sorts of things. All right. I
[01:24:02]  lost my screen share a bit because I would let you share that very awesome spoiler of new stuff coming out. Um, we were just kind of going through a bunch of
[01:24:11]  the kind of un libraries. This we haven't even touched on like, you know, oh, here we go. Cookies. That's a simple one. Uh,
[01:24:21]  because it was annoying me a lot because cookie packages, right? If you want to use cookies, use npm cookie, right? It's not using compatible. It
[01:24:29]  doesn't have types. So it took me, I think two hours to make a compatible package. Now it's a friend. It has types and we can use the river
[01:24:35]  and we use the river. Well, one thing, okay. I was thinking about actually recently was, um, one thing that, um, remix did that really well.
[01:24:45]  And we ended up like kind of stealing it from them was they were one of the first that I saw make a session management on top of like the web request response,
[01:24:55]  um, piece. Uh, where, where does this, is there an un session or something? Am I, am I like, uh, yes, it's a utility
[01:25:04]  mystery. So basically we use, you use some, uh, comment packages. We increase every data in the cookies. I think similar to them. I didn't check
[01:25:12] , but yes, that's it. It's inside H3. Okay. Utiline inside of H3. Yeah. I didn't actually, I guess I didn
[01:25:18] 't go to the full H3 docs site. It's the online playground for all of these as well. Like, oh man, let me just go up to the top
[01:25:25]  here. Uh, where's actually, does H3 have a docs site? Not yet. We plan to do this in a few weeks, uh, because like I said
[01:25:33] , uh, we were focused on the next something now. So some of these people don't have that yet. You know, there's a dozen of them. Uh
[01:25:39] , I can't show you. Is there an example? No, I mean, I just found the API reference on here. If you find my core request, if you
[01:25:47]  can find it, I add an example in it. Uh, I'm trying to also find you the one in Nux because interesting everything in Nux is also compatible for
[01:25:56]  other platforms. So, uh, I shared you a link in stream yard and if you can open it. Yeah, let me take a look. Okay. Uh,
[01:26:04]  not that one. Uh, sorry. Uh, let me find the server piece. Yes. This one. Okay. So not the one that got a different one for me
[01:26:15] . Yeah. That's the shortcut for the server part off server. All right. Let's pull this over. So yes, uh, the line 13 is the usage
[01:26:30]  of the composable. You don't, that's it. That's how we integrate everything. So it's easy from history. You would give it a configuration interface for
[01:26:40]  password and the other things just work out of the box. When you use new session, it initialization and gives you the context. Yeah. This has been one of
[01:26:51]  the, the, the fun parts I've been trying to decide what to do here. Um, yeah, we'll, we'll talk about that more later. It's
[01:26:59]  just the eight, the composite, the power of this composable approach is that everything is that you have the H3 event and then basically all the helpers, it's
[01:27:09]  not event dot blank. You just, you just call a function and pass the event as the first argument, um, generally in like all the APIs are like that,
[01:27:17]  like redirect events. That's going to be a way, uh, very soon. Uh, as soon as we have pacing context, uh, universally, uh, it's
[01:27:26]  basically actually under an experimental flag for nitro right now. Uh, we are just waiting for platforms to be ready, but as soon as it's ready, we just can
[01:27:33]  remove that. So if that was your question. Yeah. Yeah. But yeah. Yeah. No, what I was thinking about is like, if, if people want
[01:27:46]  to build their own interfaces, it's like, uh, they, they have, they would have to mirror the API calls and then trans they'd have to basically shim
[01:27:55]  the whole thing up, but I think that's fine. I, I mean, this is just my, my brain thinking about these, these pieces going together. Uh,
[01:28:04]  okay. So where was I? Uh, yes. Um, yeah. Okay. So sessions, what, what other cool stuff should we throw at them? I'm
[01:28:11]  sure Puyo and gang have thought of all of these, but, um, any, any, anyone have, uh, have something that they think is probably in here
[01:28:21] . Uh, I mean, some of them are some really simple ideas. Uh, by the way, gigat, I was going to make a purpose for, uh
[01:28:30] , solid to change it. Uh, gigat is one of the projects here. I'd like you to see. Yeah. Yeah. Um, it's also one of
[01:28:36]  the powerful ones. It's basically covering every building package that we have is all the packages using on build, which is all of using all builds that Knox is using on build
[01:28:45] . Uh, you get is one of them is a basis for downloading its repos. Uh, there's so many of them. Uh, I think console, you
[01:28:54]  should be addicted to it. It's the first time you use it. You would be addicted to it. It's, uh, basically console helper. It's also,
[01:29:01]  I think, first package in this whole thing. It's still live today. It's also super compact is zero dependency, super small, but also useful. We can have
[01:29:11]  beautiful. Oh, yes. Okay. I am a simple box. Consola dot box. Nice. That's beautiful. Uh, as I mentioned, uh, the
[01:29:26]  audience, uh, listen is one of the other packages. I think it's funny for people to see, uh, it's listen, but with them. Okay. I
[01:29:37]  have to search for it. Sorry. NIST. Listen, listening, uh, but it's not listen, listen. Yes. Because it's promised, right?
[01:29:49]  Uh, then got you. Okay. Yes. And, uh, it's something really simple. It was the idea that we had a listener in Knox and it wasn't
[01:30:00] , I think for me making sense to be in the source of basis of Knox because we could extend it a lot. And I'm super glad that we separated it because over
[01:30:08]  the time we added so many features on top of it. today, we can use listen, even for existing, uh, express applications. And immediately after you install one
[01:30:17]  package, it gives you QR code. It gives you, uh, uh, HTTPS support. It gives you tunnel support using code for workers. It gives you H
[01:30:26] MR even, uh, also for, uh, stack leads and all the experience enhancements using a simple package that you can add to your project. It's not likely at
[01:30:37]  all. You can choose even your server framework and you just run the command. What, sorry, what I'm trying to follow what this does. This creates an end
[01:30:44]  point or no, basically just starts the listener of your, uh, actually the server application, no matter what is it, but in a much nicer way comparing to node because
[01:30:54]  node just gives you a callback, just show it whatever you like, nothing else. Right? So basically adds all the experience package on top of your server with just
[01:31:04]  one command. Okay. And this is the program you can open and see how it works. Okay. Okay. So listen, and then this is the handler. Sorry.
[01:31:12]  I was like handle. Okay. Okay. I got you. Okay. Okay. So this is like a very, very quick way to set up, uh, like a
[01:31:21] , a server. Yeah. And server. And this is all the spot powers. Nice run next. We use it for showing the server and it came with a lot
[01:31:29]  of, you know, trial, uh, and efforts because we have other tool over the packages for, uh, listening for, uh, getting a port and it's well
[01:31:38] , that's true with other different platforms and windows and other environments. So this gives a stable use experience, solid use experience to users. Very, very cool. I
[01:31:48]  saw something else while I was scrolling and it actually reminds someone earlier was asking, um, how, how you felt about, um, automatic imports and ice. Unimport is
[01:32:03]  not just for Nuxt. It's for everyone. Eh? Yes. Uh, it's the package that Anthony basically made because, uh, back in the time he had
[01:32:11]  some, uh, internal packages. We wanted to integrate them well with Nuxt. So we reiterate it over using, uh, on JS ecosystem to make a new vision
[01:32:19] , but yes, it's basically what's powering Nuxt and Nitro, but is basically used by everyone. It's open to everyone. And it gives the,
[01:32:27]  let's say, real good, the experience that you don't need to import things and also unimport things when you don't need them anymore, because usually you end up
[01:32:36]  to use something and your ID just keeps it in top. You forget to add it, remove it back. It just gives one source and one of this go to discovery
[01:32:43]  source to import things magically from the proper one with, uh, type support and everything. Sorry. This line just made me chuckle. Um, Yes, it works.
[01:32:55]  Yeah. You know, we have presets for them. Yeah. Yeah. Yeah. Yeah. Well, so how does this, how does this, uh, like, how
[01:33:07]  does this actually work? Is it that, like, it looks for these symbols in the file and then knows, like what to import because of that? Yeah, exactly
[01:33:19] . It finds the, especially use cases and adds, uh, the import using a transform step. So it's also three shakable. It's, you know,
[01:33:26]  comparing to the global usage, it's fully also performance. Yeah. Sorry. I'm just laughing at someone converting use state calls to use signal calls. Um, anyway
[01:33:35] , uh, yeah, or yeah, no, I see. Okay. Yeah. That, that makes, that makes a lot of sense. Fairly straightforward to set up
[01:33:50]  too. Um, how, oh, actually, well, I, I, here's the question I, I, I have for this. Cause doesn't Nuxt automatically
[01:33:57]  find other components in the project? Like, how, how does this work for like dynamic stuff? Like, like how do you, like, how do you auto import
[01:34:09]  components? For example, like how would, how would someone approach this so that they could auto import components? Uh, components is a built-in feature of Nuxt.
[01:34:15]  I think we had it since Nuxt 2 or maybe 1. I don't remember, but it's a separate feature. So it's not part of Omniport
[01:34:22] . It's a, it's called Component Discovery. It works really similar to this, but it's a view specific implementation. So that's why it lives in
[01:34:29]  Nuxt. Okay. Fair enough. But it's basically the same, uh, technique. And I guess for React entries and, uh, valid ecosystem, you probably can
[01:34:38]  depend on, on import for Component Discovery because they are like more like normal imports, right? You don't need the registry or any other different stuff. Probably it
[01:34:47]  works. Okay. Interesting. Very cool. Yeah. There, there's just a lot here. I, I looked at, I've looked at it briefly before, but
[01:35:01]  I just keep on finding little pieces. Obviously there's like some of the, uh, like core building blocks. Like I'm gathering this is, uh, like implementation
[01:35:12]  of fetch that works everywhere. Um, we, I, I guess we might not need something like this coming up. I, I haven't looked at this yet, but
[01:35:22]  I just, it just, the other, another package for the universal fetch, but it's beyond fetch. Oh, this is super fetch. Okay. Yes. It's
[01:35:30]  kind of super fetch. So it gives you everything that you miss from normal fetch. We don't like next overwrite normal fetch, but we give their experience through this
[01:35:39]  layer. I got it. So first you don't need that dot JSON every time. I think it's obvious, right? That's what I will bring. So instead
[01:35:46]  of patching global fetch, you just have this instead. Okay. I'm, I'm, I got you. So it's like this kind of level of stuff.
[01:35:53]  It's not for, cause I was going to say the polyfill on fetch, you know, days are probably numbered. We also have it because node has it now
[01:36:02] . I was really excited. Like actually what's the LTS schedule here? We, we, we gotta be getting like, so, um, releases. No. Yeah
[01:36:15] . We must be getting, like, where are we? We are almost there. 16 is like dead this month. Well, I mean, we have to wait for
[01:36:26]  platforms. The, their teams, I really, I think they respect them. They are working their heart, their hardest work, but we have to wait, I think a
[01:36:34]  few months maybe until we can fully rely on it. Yeah. 16, end of life, three days. 16 is not even bad. Like 16 is actually like,
[01:36:48]  was the start of the good stuff. Like 14 useless, 16 started to, you know, you started being, you know, you obviously didn't have all the features,
[01:36:59]  but like it started being usable. You have like node stream and you can pull stuff in, but like 16 is already gone, like in, in, in three days.
[01:37:07]  And sorry for me, because of this, the degree of, of, uh, how, uh, like the, that's migration has been from like the old node
[01:37:19]  stuff to the universal stuff. This is like, IE, this is like IE 11 going down. Um, so, I mean, maybe not that joyous,
[01:37:27]  but very close. Um, so I am, I am pretty stoked about node 16 going off because it's funny note. Like, did they do this on purpose?
[01:37:37]  It looks like the maintenance window for node 16 is just surprisingly lower than like all the other ones. They're just like, no, we just want to kill it. Um
[01:37:44] , like this, this is celebration time. I, as you said, I guess some, some people have to support it, but like end of life, not, not
[01:37:54]  like, oh, we'll keep on doing patch release. It's, it's over. It is dead, dead, dead. Anyway. Uh, okay. R
[01:38:04] IP 60. Three days chopping block. Uh, uh, does auto importance increase on readability? I mean, it's, it's, it's, I guess it
[01:38:18] 's like the typescript army. I don't know. What, what's your personal feeling around auto imports? RIP 60. That's me. Yeah. I
[01:38:26]  love them. That, there you go. RIP 60. Made a difference in my life. Oh, that's developer. I'm not coming back without auto imports anymore
[01:38:34] . RIP 60. There you go. See, yeah, I, I, I've, I've been in both environments. Auto imports for the Marco framework. Yeah
[01:38:41] . There's my weekly Marco plug is such a game changer. It's very similar to Vite in our sort of view in that, like you have these single file components
[01:38:49]  and now you're not import, like there's no, you don't need to import the other components. They're just there. And in Marco's case, um
[01:38:55] , the reactivity is also markup. So their templates are, um, homogeneous. Basically there's no script or there's no like JS, CSS, HTML sections.
[01:39:09]  The whole thing is just HTML. And because of that, including, you can actually nest there's reactivity inside the components, like, or sort of inside the elements
[01:39:22]  and it's, uh, it's fine grained render. So it doesn't like re-render components. It's all like, like solid kind of style. Um
[01:39:27] , you can literally cut and paste the code out, which means that if you have like a component that's getting too big, you just go cut, move it over here
[01:39:35] . And auto imports is what makes that magical because suddenly you just like make the file, you call it whatever new component, cut, paste, new component. And essentially
[01:39:48]  it just all works. You, it's, it's, it's, you edit two locations to pull code out. Um, so yeah, I can see on that
[01:39:58]  extreme kind of case, um, like from a refactor ability point of view, auto imports is what kind of like would enable a system like that to be like,
[01:40:07]  basically like drag and drop. Um, I think on the opposite end of the spectrum, you have like the people who really like, like giant type definition type people where everything
[01:40:19] 's declared, but again, I'm not, I'm not a stickler on this. I, I coded in, uh, coffee script for years. We didn't
[01:40:25]  even have variable declarations. So, you know, you just fully typed. Uh, so auto imports are fully typed, not only fully typed, uh, but also
[01:40:36]  we have types of imports coming soon. So I think it's a huge fan for types of lovers. That's, that's good. Yeah. Cause solid actually auto imports
[01:40:46] , uh, it's control flow components, but then everyone had to import them anyways to get the typescript to work. No, it just works out of the box.
[01:40:53]  Uh, thanks to Daniel's work. Uh, not only that, but I think we have some good opportunities with those imports, because if for example, we have something
[01:41:00]  optional with types, global types, you don't know, you cannot just remove some types. If they are global types, they are always there, but it also imports and
[01:41:08]  generated types we can control. If something is enabled, we add the type. If it's disabled, we don't add it. So it's also, uh, dynamic
[01:41:15]  prototypes for users. Very, very cool. All right. I think we've, we've probably chatted enough about all the cool libraries. I want to, I want
[01:41:26]  to, unless you got another one for me, but I, I want to start, look, I want to take a, like a hands-on, I want
[01:41:31]  to use some of this stuff. I want to play with nitro. Is there, is there anything else we should look at before that? Um, did we miss any
[01:41:41]  of the cool packages? I mean, there's so many, I guess they're like your babies. We can't go to all of them. Yeah. That's a
[01:41:46]  good thing. Uh, I think C12 is one of the last things, like I love all of them, but C12, I think it's something useful specifically for
[01:41:53]  not only framework others, but if any personal project people have, it's basically a framework for loading configuration and handing all the edge cases and different commissions, uh, for
[01:42:04]  loading from an RC file, from loading from global configuration, loading different configurations, even multi-layer configurations, which is some of the powerful APIs and nox. Uh
[01:42:14] , it's, uh, coming from C12 package. And I think that's, I think the last one probably works too much. Sorry. What is it called
[01:42:21]  so I can pull it up? It's C12. It's, uh, like C and one, two. It's because it's configuration rate. There we go
[01:42:32] . C12. It just works. Okay. Load configuration, watch configuration. Oh, okay. Gotcha. It supports TypeScript, it supports HMR, it supports
[01:42:53]  basically everything you need for configuration loading. It just gots covered. Yeah. I love when you see like the libraries kind of like work together. All the pieces of
[01:43:09]  your puzzle coming together, so to speak. Some of the really cool, uh, new innovations that we added was this environment specific configurations. You know, you people usually use
[01:43:24]  different names for, uh, dot M file. Yeah. Uh, with C12, we can basically define some scope configuration that gets merged to the top layer using the
[01:43:33]  name of your end. Right. Okay. One of the examples was this, uh, on storage configurations. I think this was the reason we introduced the option. Imagine you
[01:43:45]  want to have different mount points for your specific provider. You can use the M to overwrite that kind of configuration. Yeah, no, this is cool. Yeah. Flex
[01:43:57] ible too. Both the M dollar sign to do it on a key level, both as a specific. Okay. Yes. I, I, I, I'm delight
[01:44:12] ing in seeing all of this kind of stuff. Cause I, these are the kind of problems you come across and you're just like, most of the time when I come
[01:44:18]  across one of these, I'm just like, okay, I'm just going to hack together. Like the first thing I can think of. And the problem when I do
[01:44:25]  that is first of all, it only works on node usually like, you know, I, I didn't consider all the other different platforms. It doesn't do things
[01:44:34]  nicely. It's not parallelizable. You know what I mean? Like I just, it doesn't do hot reloading. I just hacked this garbage together and you
[01:44:43]  kind of like patch it. And it is, it gives me such a light to actually to see, oh, well, you know, already thought of this.
[01:44:52]  So by the way, something more exciting is the extends feature. You probably can try it later on, but it's something really powerful. I would say, uh, it
[01:45:02] 's evolutionary next three. And also how next nitro pieces are working is that you can list your application. Uh, it's why of configuration, but into different sub
[01:45:12]  packages and uh, basically extends them. This is also how natural works. So nitro is basically like a very minimal framework. We configure it using a layer, which is
[01:45:21]  coming from a C12 configuration for each preset. It's nothing magic, just configuration. That's awesome. Yeah. The extends. Yeah. So it's like, I
[01:45:30]  mean, my biggest example of using this kind of pattern is like when you're setting up, like, I guess, jest or TypeScript kind of rules to this extent.
[01:45:37]  And you're saying this works even within third-party packages or modules. Was that what you're saying? Like in node modules? Definitely. We can also publish as
[01:45:45]  a package in the modules. Okay. I think you sort of answered this before, but let's answer again. Isn't it a lot of work to separate every aspect of
[01:45:58]  our project nitro knocks into a specific package? Maintaining all these packages seems like a really time consuming task. A lot of them have more configuration build than source files
[01:46:05] . Yes. No, I mean, no, I mean, it's makes life easier at some point. So basically there is some cost for initiating this project,
[01:46:14]  especially to think them through. That's what we basically need. So we made extensive amount of tooling for, for example, unbuild to make it easier to build things.
[01:46:23]  We have so many automations to make them separate separated. But, you know, once we have them, I don't know what was the last time I even looked at
[01:46:30]  C2. It just works. So we make it once. We just don't need to update it frequently anymore. So I think it's the difference of the cost
[01:46:39] . And something else that it adds is exactly as you mentioned, you love the puzzle pieces thing. When we add everything to the core, we cannot reuse things. We have
[01:46:48]  to copy paste or reinvent the wheel everywhere, even within Nux ecosystem. So this kind of separation actually saves time over in a longer time. And that's why we invested
[01:46:57]  initially for Nux3 to create a separate ecosystem. So yeah, in some sense it takes time, but it's something also reduces time for developers. They can focus
[01:47:08]  on what they are actually building. So in Nux, we don't build, you know, configuration loader. We use, we basically build what we need there.
[01:47:18]  I'm having a little bit of issue with StreamYard at the moment. I was trying to like show some comments and it was like half fading in. I don
[01:47:26] 't know if you all could see that. Like it was like the ghost, like I'm going to turn off the comment, but now it shows up and then it's
[01:47:31]  going to fade slowly. Can you see what I'm talking about? Yeah. So yeah. So quick comments. StreamYard is being very weird right now. No
[01:47:41] , I, I wanted to highlight that because I thought it was like Legos, right? The building blocks. All right. I guess it's, it's, it
[01:47:56] 's fun time now. We're going to, we're going to try to, you're going to show me, show me Nitro, um, which is kind
[01:48:03]  of cool because Nitro pulls together a lot of these pieces and something, uh, let's, let's actually just get started by taking a quick look again. I,
[01:48:13]  I've kind of pushed off Nitro to the end because it has, as I said, a lot of these pieces are under the hood, but, um, Nitro
[01:48:20] . Yeah. I know you explained a bit earlier, but like, why would someone want to use Nitro? What, like, like, if, if like,
[01:48:33]  why would someone pick, pick up this project? Like what's, what's, what's the goal of someone using Nitro? Hmm. So basically if you want to
[01:48:41]  make, uh, any server application for JavaScript and you don't want to use knives for some reason, uh, you can use directly Nitro because Nitro over traditional table
[01:48:53]  frameworks, smaller ones like express or like, you know, many of them, it's not barebone. It's, uh, meta frameworks for making servers similar to
[01:49:02] , it was a tweet by Anthony that compared that how it is compared to a builders for meta frameworks, uh, Nitro is the builder for several applications. So it just
[01:49:11]  makes the life easier for you. But more important than that, uh, it makes sure that the server that you are building is not going to be locked in neither for
[01:49:20]  open source locked in or vendor locked in because everything that we write in Nitro applications, it's considered to be agnostic enough as it provides you batteries in, you
[01:49:30]  know, all the goodies from H3 and configuration loader and they will experience. You are just packed it into one meta framework. So it's basically an ideal, I
[01:49:38]  would say option for making a server application using no, it's JS. There, there, there are some opinions in here too. Like I'm just looking at file
[01:49:49]  system routing, right? Like, like there are, is this convention? Is this, is this configuration? Yes, definitely. You can just remove it. Uh, everything
[01:49:58]  in Nitro and Nux is configurable. So if you don't like it, just disable it. Right. Right. So basically if I understand the approach to Nit
[01:50:05] ro is it's, it's set up with a bunch of good, it's, it takes all these packages, puts them together and sets them up with like a
[01:50:13]  bunch of good defaults essentially, but every piece is like, just don't use it basically. Yes. Uh, yes. That's one of the main things. Like
[01:50:24]  it basically aggregates all of these goodies, uh, together. Uh, also it has pieces for the providers that we constantly are in contact with them to make the configuration
[01:50:33]  right. And it's, believe me, it's not really good, easy task to do because usually their builder API changes over the time. And if you want to directly
[01:50:42]  work with one of the providers, you have to make sure it's updated. While with Nitro, it's basically like a preset. It's already set up for you
[01:50:49] . Uh, you know, there are some more additionals in Nitro, like caching API, which is one of the really powerful things in Nitro. Uh
[01:50:58] , I think caching is something really important for performances of the servers. And usually people don't use it for simple projects because it's hard, you know, how you
[01:51:08]  can implement a cache that is just, you know, storing things in the backend and just handling the caching headers and doing all these things for hashing the endpoints,
[01:51:17]  uh, because it's one of the hardest thing in programming. So basically in Nitro, you have some new compostables cached event handler and cached function,
[01:51:25]  just that when you use it, uh, every function that is coming is using, can establish your strategy to be cached. Even it hashes your implementation of the function
[01:51:34]  event handler. So if you change your event handler, all the caches are automatically invalidated. And one of the most important differences between this kind of cache comparing to
[01:51:42] , you know, popular platform caches we have is that after each redeployment, your cache is not going to remove. You made a good example of memory cache,
[01:51:51]  uh, that when you restart your server, it's gone, right? Yeah. So we have the same problem today with the different providers, like universal, when you make
[01:51:59]  a new deployment, the caches are gone and every new request needs a new cache. But, uh, because this one is powered by on storage layer. It's everything
[01:52:07]  is connected together. If you can have the freedom to store your caches permanently across deployments and it just works. Right. Yeah. I was interested about this because
[01:52:17]  like, um, every platform has like, what, ISR and DSG and all that kind of stuff as well with the static, like pre-rendering type stuff
[01:52:27] . Does this play into that or is this just like a layer above that? For pre-rendering? Well, yeah, I, I, I, yeah,
[01:52:35]  I mean, I, this is handling at an event handler level. Um, but I was, I was like, just curious on a side of like page request level,
[01:52:46]  you know, like, uh, Yes, definitely. Uh, because your page requests are basically several handles, right? So you might need to use this advanced API. We
[01:52:54]  have something cool called routing. If you open the routing and go to the route rules, uh, yeah. Uh, it's a little bit down with Tom. Yeah
[01:53:04] . Uh, you see the swr true? That's how it takes you to support caching internally matches, creates, uh, scoped, uh, handlers for
[01:53:14]  that kind of, uh, routes like slash plug and applies the caching strategy to them. So if you have a default renderer, that is the react renderer
[01:53:22]  review renderer in the application, it just works. You don't need to even update even handler. Very, very, very cool. Um, yeah. Uh, uh
[01:53:36] , a couple of questions came in. Oh man, this is just a second. I'm, I'm going to be right back. Like 20 seconds. All right
[01:53:59] . I just, I, I just wanted to see if I could, yes, I fixed it. StreamYard was acting up on us. Um, and I
[01:54:10]  wanted to get our comments back working. Here we go. What's the most exciting feature in nitro in your opinion? Alex, I see you. Uh, I don
[01:54:22] 't know. I love everything about nitro to be honest. Okay. Uh, yeah, I think. Yeah. The bit of the concept that is, uh, taking
[01:54:30]  away the private and probably the locked in vendor locked in is, uh, if it's, if you call it a feature, it's probably one of the main things
[01:54:37]  that it's going to resolve. I would say, but yeah, it's, you know, aggregation of the ecosystem. So I cannot just name one of my children
[01:54:45]  to be my favorite one of everything. Okay. Fair enough. That's that. I, I can see, I could see that. Yeah. I, something weird happened
[01:54:56]  to the chat as well. I think I lost a bit of it when I refresh there. Um, anyways, but we're back in business. Um, let's
[01:55:07] , uh, let's take a look here at, I, I, this is basically, this is a bit of a, how did you put nitro as a meta
[01:55:18]  framework in a box? This is a bit of like, to answer the question I asked earlier, this seems like you'd pick up nitro. If you're in like
[01:55:26] , I don't want an existing framework kind of mentality where you're like, I don't want noxt or next or spell kit. I mean, noxt is
[01:55:35]  already like this. So like if you're in view, you'd probably just pick up nox, but let's pretend you're in react world or something. And you
[01:55:43] 're like, I don't want to use next. I don't want to use remix, but I still want a full servers rendered solution. You might pick up nit
[01:55:52] ro, um, and do that. I, I actually, someone actually asked a question and it's gone now because I lost the part of the chat. They were like
[01:56:02] , they asked if it was production ready. Um, which stuck out to me. I wanted you to finish talking before I put that on the stream and yeah, I
[01:56:10]  mean, you can answer that is, is, is, is nitro production ready? Yeah, definitely. I mean, it's over three years that we are, I
[01:56:20]  think even more, we are developing nitro. So, uh, we have tested it through for different, uh, you know, scenarios for, uh, benchmarks, performance
[01:56:28]  side. So yes, pretty much, I would say production ready right now. Internally, we are making a lot of changes to, you know, the whole ecosystem
[01:56:36]  because it's all new to us. Also it new to I would say also platforms with, uh, encounters with like workers, but in a perspective of external usage, like
[01:56:47]  for user interface, it's completely stable, I think for using production. Yeah. Yeah. I, I mean the, the short answer, right, is it's used
[01:56:57]  by Nuxt. Um, it's used by analog as well. Um, and it's, yeah, I mean this, this is something that, uh, production
[01:57:06]  frameworks bet on. So I, I think, I think the answer to that question is definitely, and that's part of what makes it very exciting. Okay. So let
[01:57:16] 's, let's, uh, let's build something. Let's how to getting started. Let's, let's do this. I could get started on stack blitz
[01:57:25] . I usually always do this locally, but then everyone under learns how terrible like my local setup is and they're all like offering to help me and stuff, which is
[01:57:33]  great. I'm just like, yeah. Um, but yeah, it looks like I can get a starter template right on stack blitz, which might be our easiest option
[01:57:43] . There's also PMPM and bund commands. Very, very timely, but have bun bundler here. Um, yeah. Okay. So, okay. And
[01:57:57]  then there's also, you can get the latest. Okay. So yeah, is the stack blitz template good? Should I just go with it? Sure. I think
[01:58:04]  there might be some issues with types, but I, otherwise it should be super stable and they love a second. They're doing amazing job. Nitro is amazing.
[01:58:13]  There you go. That was fast. I mean, that that's a testimony to stack blitz. It's also testimony to hopefully like beats build time and nitro's
[01:58:25]  build time. Something cool. Maybe you stop my tweet. Uh, but just for audience, uh, you know, because we use list then you, there is a QR
[01:58:32]  code up in there and everyone in the audience now, they can just see what you are tracking. They can locally run it even in their mobile phones by just opening the
[01:58:41]  QR. It's a little bit up in the terminal. Oh, here. Oh, wow. That's that is link. We automatically generated. So, sorry. What
[01:58:51]  does this do? This is the QR code of your stack blitz. Everyone can now join. Oh, I've never used this feature and truthfully, I'm
[01:59:03]  not even signed in right now, which is funny. Yeah. Maybe I should sign in. Let's see if I can do this. Okay. No, actually I was
[01:59:13]  like waiting for some secret to come up, but it's like, no, no, I'm just, I'm already signed in. Okay. Good to go. Okay
[01:59:18] . Interesting. Yeah. I've never used this feature and the QR code, it makes it very convenient. Is this something that only happens in the stack blitz template
[01:59:32]  or like. Locally, you can also use dash dash tunnel, which like this part of other packages, it opens an open tunnel for everyone power by cluster. Okay.
[01:59:42]  People need the QR code a bit longer. I'm going to have to hide it at some point. You're covering. I hope it works. It was really experimental.
[01:59:54]  I think three in the morning, I had this idea and finished it. So I hope it works. Oh, 404 not found. Probably because it's it's
[02:00:07]  44. Have you saved it? Oh, do I have to save it? Or do you think when I signed in, I saved it? I don't know. Maybe
[02:00:16] , maybe if you refresh, there would be a new URL because the ID changed. Okay. Let's just, let's do this again, guys. Sorry. I
[02:00:23]  hope it works. I'm sorry. Well, the thing is, I, as soon as I change something, it's going to make a new URL, isn't it
[02:00:30] ? Because it's going to like save it. Yes. It's based on the, your public URL. So yeah. Yeah. So maybe, maybe I have the
[02:00:38] , I actually have to save it first for it to actually do that. Because if I, what can I do? Because I feel like we're going to get a new
[02:00:47]  URL the second I go in here and do something. That is amazing. Double exclamation mark. Save. So this is the one. Right. Yeah. Yeah.
[02:00:59]  Give it a second. Okay. Now we will have the proper URL that will not change. Hopefully. I see the TS stuff. Okay. All right. Let's,
[02:01:08]  let's do this. Okay. Someone says that's correct. All right. We did it. We succeeded. We conquered. Cool. Okay. So I'm gathering
[02:01:29]  the, this is what we see when we do the kind of, um, do kind of like what I call the bear, um, CLI install, so to speak
[02:01:40] , like the basic one, we get a project. Let's, let's, uh, let's, let's look at the project here. We have TS config
[02:01:50] . We have package.JSON package lock, nitro config and index. So this is actually pretty straightforward thing. Our package literally just installs nitro pack and
[02:02:04]  then two commands, nitro dev, nitro build, and then our nitro config is empty. This is autumn import magic. I'm gathering nitro, like I
[02:02:20]  don't have to import this. It just, or actually, yeah, I don't have to import this. And let's see here. I see. So
[02:02:40]  the import stuff isn't working quite right in stack blitz, but I can always find that import. Right. I get nitro pack. I missed it. All right
[02:02:51] . Nitro pack. Beautiful. Okay. Okay. Okay. Okay. All good. And then index and index is just a event. Define event. And import
[02:03:05]  it from hashtag imports. Define. Do you think it will quick fix? No. Is it also from, uh, you can import from history, but also hashtag
[02:03:28]  imports. I hope it works. So it's a virtual import. Yes. Something like that. Is it? Oh, I spelled it wrong. Yeah. Cool. So
[02:03:41]  basically that's the magic behind auto imports. We have a virtual. So if you don't trust like fully auto imports, we can import a manual like this. All right
[02:03:49] . So to begin with nitro, zero configuration out of the box index TS is basically just return our response string. So returning the string, it will treat that obviously
[02:04:04]  as HTML. And if I look at this, we'll see that the browser is plenty smart, that it knows how to wrap all our stuff and insert this in the body
[02:04:15] . That's what it does. Actually, if we actually look at the actual request on the network, we're just going to see. Oh, did I stop it
[02:04:23] ? That was weird. Okay. Let's start it up again. So because basically we send proper content type, browser can render it properly. And the content type is
[02:04:46]  the default from history when you return a string. It's by default HTML. Oh, what's the, oh, this is interesting. I wonder what this is. Local
[02:04:55]  service at runtime. This is from stacklets. Stacklets. Yeah. They like, they didn't know where to put it. So they like snuck it inside the
[02:05:02]  H1 tag. So that's interesting. Yeah. Fun stuff you learn. Okay. But the cool thing about this is I, I can probably render whatever the hell
[02:05:15]  I want in here. Right. I could, I could, yeah, I could, this is default. So is, is this the file system router already working for me
[02:05:26] ? Like if, if I went in here and went to the routes and then was like new file, um, hello dot TS and basically copied this again. And
[02:05:44]  then, uh, uh, uh, put this in here. I could also just be like, and actually, you know, if I want to get, we can do
[02:05:57]  stuff too. We can author an HTML strings. You know that, uh, you support TSX out of the box. Nitro tool. So if you have an
[02:06:08]  implementation for TSX, you just have it. That's helpful. Um, sorry. Graph equals. Hello. Hello. What am I doing? This is, this is
[02:06:27]  what happens when you don't have code highlighting. Okay. Um, yeah. So this, this alone isn't going to have like HMR, right? Like I
[02:06:34] , I refreshed it myself to get it to show up. Um, but hello. Hi. Okay. Cool. Oh, interesting. Can I not see? It's interesting
[02:06:53] . Why am I not seeing the full URL here? This is like my weaknesses stack splits. That's funny. Cause it's, I mean, we can always link
[02:07:06]  back. Right. So yeah, there's, there's some libraries out there that lit that are basically, um, basically like, uh, tag template literals is
[02:07:26]  the thing that actually comes to, to mind for me at the moment. There we go. Home. All right. There we go. Simple server side routed MPA
[02:07:40] . We just built an MPA. Okay. Sweet. This is my, my MPA framework of choice now. No, just kidding. Um, Um, uh
[02:07:52] , uh, okay. Just catching up with chat. It's mostly people telling me things. It worked. Um, You know, you can also quickly go local and
[02:08:09]  showcase the other tunnel thing to people as it's super easy to migrate because there is an export button in stack leads. You can quickly export it and start locally. If you
[02:08:18]  want. I see what's, so what's the tunnel feature that we were going to show off. You can locally run it. Then I can show you. Okay.
[02:08:26]  Okay. Fine. Uh, uh, we're, we're, we're, So it's in the left hamburger menu. Yeah. The top, right. The
[02:08:33]  close button. Yeah. Yeah. You can tell Oh, okay. You can tell how rarely I use that. I, I, I get everyone to do reproduction. So
[02:08:47]  I don't have to download the stuff to my computer. All right. Let's, let's find this. Um, So I'll just uncompress it in place
[02:09:00]  and then we'll move this into my dev folder. We can call this rename it to like, I don't know, something like nitro test And then move this
[02:09:23]  into here somewhere. Um, examples. Okay. Cool. All right. So let's, let's get this going locally then. Not solid start. New window.
[02:09:43]  examples. Nitro test. Very cool. Um, I suppose I trust the authors. All right. Here we are I guess we're using MPM. Okay.
[02:10:07]  That's it. Just a second. Okay. It's on 18. No, I'm just the, you, my last stream, I like you just went, the
[02:10:20]  last two streams, it like, wouldn't remember that we were on 18, like for some weird reason. It kept on switching back to 16. And we had this
[02:10:27]  whole discussion on MBM and stuff. Um, it actually is, is, uh, is it actually updated properly this time. All right. So locally after install, I
[02:10:40]  want to run tunnel. Okay. What does tunnel do for me? Uh, so yeah, it automatically installed the room for you. You have to just install the tunnel
[02:10:54]  implementation, the binary. It's done. Oh, you know, we have to install huge binary and we configure and do everything. So I'm just giving everyone access.
[02:11:05]  How, how, how does this actually work? Um, I know we're using CodeFlare as zero tunnel technology, it's also on edge. So basically it's
[02:11:14]  uses CodeFlare network and it's completely free. Yeah. I mean, I'm just, I'm, I'm honestly just really interested in what this, this
[02:11:24]  does. Like if I open this up, hope, you know, web browser, um, what, what am I supposed to see? Do you have any firewall thing
[02:11:39] ? Um, the, I wonder if I do there, there is a possibility that cause. Oh, uh, can you try dash dash host, uh, in your command
[02:11:51] ? Maybe it's a new thing. So close it and add a tunnel and dash host. Does it change the link for everyone? Yes. Uh, can I try
[02:12:10]  the new one? I hope it works. Yes, it works. That was the thing. Sorry. It's not that one. It's this one. Cool. See
[02:12:26]  MPA. There we go. Beautiful MPA. All right. Now we just got to add the view transition API and we're, we're all set. Okay
[02:12:35] . Um, very cool. Uh, all right. Just in case people are missing it. Um, all right. Attack Ryan. I mean, we can try Nit
[02:12:57] ro is fast. It wouldn't fit anything. All right. All right. This, this is fun. All right. Okay. So what this does essentially is people can
[02:13:11]  see the output and try our app as we're, as we're doing it. Um, okay, cool. So I made a very simple, uh, string render
[02:13:23] , but I guess the, the point here is you could really use this for anything, right? The event handler can, you know, we could define a JSON API,
[02:13:35]  for example, like, is it like, I, I think I saw in the Nitro docs that there is a convention for this, but I don't have to use
[02:13:44]  that, right? I can just like, I can just return JSON really. Yeah. Definitely. Okay. Actually. Can try to make it like a normal function,
[02:13:54]  not so you can have more logic inside it. And as first parameter, we also have event objects. So this all works off default exports, right? So if I just
[02:14:02]  made API dot TS, would I just do the same thing and then be like, oh, we also have an API directory. So it prefixes API for you.
[02:14:14]  You have an API directory as well. Does that, but like, does it do, does the API directory do anything special or is it just, no, it's just
[02:14:23]  a shortcut. So just make your life easier. It's just a shortcut. But like, if I make something called API TS and then I just return like garbage.
[02:14:38]  I think you need to add parentheses around it because I was it's. Yeah. Cause it's a, it's going to think it's a functions body. So have
[02:14:47]  to do this. Yeah. Yeah. Okay. But just under this, if API, so technically now that it's saved, we go back to the browser and if
[02:15:01] , if I go here and just go to slash API. Yeah. Okay. Yeah. So I'm a little bit confused with the shorthand like is, is I
[02:15:15]  thought this was, when I looked at the docs here, I just assumed that this was because someone wanted to put their API folder in an API folder, like, oh
[02:15:22] , I see. Instead of putting it in routes, it's an, okay. Yeah. You know, it's particularly useful for meta frameworks like Knox and because they have
[02:15:31]  also normal rendering routes. We usually want to scope everything under under slash API. So it's more conventional to have API directory to put everything prefixed inside it. Although we
[02:15:42]  can do some optimization, for example, for error handling, we could add some JSON error when we need it. So that's just making a more conventional directory to put
[02:15:52]  the API routes. But like, I mean, just, just putting it out there, like, this is just like adding a folder to a list of things to look in
[02:16:00]  because like, I could also return markup from slash API. And yeah. Okay. Okay. Simple route route route with parameters. Oh yeah. Yeah. Okay.
[02:16:12]  Let's what, what's the, okay. So name. Okay. So yeah. So this is a very basic. So if I made like AP, okay. I
[02:16:24]  mean, okay, fine. Yeah. I mean, I'm like fighting it a little bit, right? I don't have to fight it. I'm just like
[02:16:35]  fighting it because I can, I can, I can, I can move here and then I could rename this to, um, name, actually, yes. And actually can
[02:16:49] , can I, can I make this more fun? Can I make two things called hello? Okay. Um, and then what do I get from my handler? I
[02:17:01]  get the event and then event context prams. Okay. Event. And then Maybe that's garbage. Yeah. And then I mean, I'm just copying your example
[02:17:23] . Right. Um, I mean, I could just event dot context. We also have a composable for that. It's called get router param basically makes it more readable
[02:17:35]  if you want to use. Right. Um, what's the type of params record string. Okay. Okay. All right. And now hopefully, although I'm
[02:17:50] , I'm, I purposely kind of layered this a bit. If we go to, what did I call it? Hello, it's, it's going to give
[02:17:57]  me a page. And if I go to hello slash, um, Oh yeah. Right. All right. Basic stuff. But, um, Honestly, I wasn't leaving
[02:18:12]  the stress that it doesn't work because sometimes these things are easy to mess up things, but yeah. Yeah. Cool. Cool. Cool. Yeah. So yeah.
[02:18:21]  I mean, this is, this is a basic router. If someone wanted to, uh, yeah, I don't know if people are doing like, cause doesn't Nu
[02:18:33] xt do that thing where with nested routes, like if the file is the same name as the folder, it like, it treats it as like, uh, uh
[02:18:42] , layout kind of thing. And then you pass like the nested router convention. Nuxt has the nested routers. Right. Um, is, is there,
[02:18:51]  I guess they just use a different router essentially. Basically if the simple router doesn't do the trick, just bringing your own router, so to speak. Yeah, exactly.
[02:19:00]  It uses a view router behind the scenes, which is kind of more advanced because it's required more advanced use cases, for example, for child route. But we intentionally made
[02:19:10]  it simple, as I mentioned before using radix tree. Yeah. The reason that we made it simple was that we could integrate it with the providers, with the c
[02:19:17] aching layers. So it's not only easy for development, but we wanted to make it really compatible with DevOps, DevOps guys and platforms to optimize the routes. So this way
[02:19:26]  they are more predictable with more limited patterns and obviously you can bring your own router and it can create a middleware or something to bring your own router. Oh, cool.
[02:19:36]  Cool. Cool. Yeah. So you have a convention here with a middleware folder. Um, is the way this works is just, is all, I'm just
[02:19:44]  curious. I mean, this is just like, I, I'm sure people like can just drop this and do their own thing or whatever, but how does this, how
[02:19:52]  does it know which middleware to apply? Does it just go through the whole list alphabetically or? Yes. It goes, uh, so we can prefix them with
[02:20:00]  number. Uh, I mean, we basically support the middleware to be honest, to be compatible with express personally. I would prefer compostables all the time because exactly the
[02:20:09]  question comes what order it runs, which route is run. So, uh, I think there are some common use cases to use middleware like logging, but you can
[02:20:18]  always opt in for compostables instead of middleware in Nitro. Although you have a specific directory called the utils, uh, it's also imported. So if you
[02:20:25]  create anything in utils, you can also import it everywhere. Right. Right. Yeah, sorry. Here's the execution order thing. Yeah, yeah. Just, just
[02:20:34]  prefix it. Yeah. I mean, simple solution. Um, yeah, no, I hadn't looked a lot of these details cause I have to admit, um,
[02:20:43]  what I've been playing around with, uh, here doesn't use any of this, um, storage layer. Again, I think this is just a wrap. This is
[02:20:53]  just on storage, isn't it? Yes. It's pre-configured. It just works. Lovely. So as we have a specific mount points, so universally
[02:21:04]  you have a mount built called data and data is bound to a file system. So if you want to make a hello board, you don't need to then configure your
[02:21:11]  nice room. It just works. Right. So I always override it. I, I know so you have like Nux config versions. Interesting. Cause this is, cause
[02:21:19]  Nux also exposes Nitro to do stuff. So what you're saying is if I go in my Nitro config and I don't, I don't have to
[02:21:26]  go into it all if I want. Okay. So can, can we do some, can we do something here locally right now? Cause now we have, um,
[02:21:35]  a simple endpoint that I guess just it's a get. Um, but we could like, if we wanted to make it a post or whatever, we would just filter.
[02:21:46]  Hmm. It's fine. Let's not worry about post yet. I just want to, I just want to set up a key value store and read from it. So
[02:21:54] , um, use storage as an instrument using the memory driver. How would I, so by default, it's just going to be there and once the server starts,
[02:22:04]  it's going to, it's going to get created. Right. Or how do I, how do, how do I set this up? I'm just like. Oh
[02:22:10] , okay. Uh, so basically everything in Nitro, uh, is lazy loaded, uh, even the routes. So the first time that you use something or hit a
[02:22:18]  route, it's lazy loaded. It's same for a storage. It's a composable and a the first time you use it it's been using the instance although
[02:22:26]  all the drivers also themselves are lazy initialized so it's basically the first time that you use them gotcha so i can so i can just do this somewhere right my handler
[02:22:38]  can be async yes and then okay so i can i can do something i mean this is going to be really silly but um we're going to go into back into our
[02:22:48]  project and we're going to go to our api route and i'm actually going to make this a proper async function and then which means i'm actually going to
[02:23:01]  properly i think it's probably yeah yeah exactly i'm gonna actually properly do this okay and then i'm going to just sure uh let's go if you use data profit
[02:23:16]  prefix data prefix uh it's the permanent so instead of test use data okay so what's the what does the prefix to do yeah data it's just basically permanent storage by default
[02:23:30]  it's in memory but data is a default built-in amount point it just set up for you okay so this is going to use sorry go on yeah so i'm
[02:23:42]  gonna so i'm just doing something really v i'm just doing something silly here where i'm just okay okay so right now there's nothing in here right so if i
[02:24:08]  go and just refresh here we're just going to see okay i should have a space um yeah i'm just this is just dumb playing around right okay but if let's
[02:24:24]  say you go to one of these other routes um first let's go index first um let's go async because the the use i i i i gotta look back at nit
[02:24:44] ro docs here but the use yeah i mean i'm just gonna i'm just gonna put it in a different route handler this is like a really watch the like the chat
[02:24:54]  get ahead of me now because it'll like hit the endpoint um before i get to like do what i'm trying to do which is essentially you could maybe save the name
[02:25:14]  from hello endpoint and just show the greeting here that's maybe more practical yeah probably but it's fine yeah also tell her we data greeting and i'm gonna make it a string
[02:25:29]  that says i mean i'm just being very uninteresting here okay okay so actually my biggest oh what's this that's something oh you don't even heard about it so
[02:25:48]  if you use fetch dial sign fetch we also type it with all possible endpoints it knows the apis so if you try in your id just save it it's saved anyway
[02:25:59]  so if you have your id in one one of the routes uh try you can try it maybe in like index.ts you know you can just two seconds i want to
[02:26:10]  first do this and then i want to go back to this and then i want to go back to no i didn't do it right maybe we can check the data directory you
[02:26:24]  can see the your data is now stored in file system in top of the first directory so we have anything yes i spelled it wrong this is all because i spelled it wrong
[02:26:37]  um greeting is right there but i spelled it wrong in index i spelled the greeting yeah there's something nice about this file system kv storage is that you can easily debug your
[02:26:48]  things because you you can see the data right away yeah i went too far back using the browser gasket june back cool okay i mean this is a very simple mutation it
[02:27:03] 's just me being silly um yeah let's let's look let's look at the endpoint typing sorry i just wanted to finish doing what i was doing um which is this route
[02:27:13]  typing so uh i mean at the same time i'm going to introduce you one of the more powerful things in nitro is that you know when you try to fetch in
[02:27:23]  server side you always to have to provide the full url right you it's you cannot just fetch a real url but nitro powered by uninf as a specific feature
[02:27:33]  is called direct ssr calls so from one event handler you can fetch another event handler that doesn't even go through the network and it's just done magically behind the
[02:27:43]  scenes uh if you use a relative url so from index you can push for example pitch the contents of response of the name uh endpoints all right sorry i want to address
[02:27:52]  something in chat just two seconds it got to me uh wind is because all built on code gemper news and on js um uh is it similar to tan stack router are you
[02:28:02]  familiar with um not exactly one of the i mean the file system routing could be this yeah yeah yeah yeah i i guess yeah one of the differences with tan tanner's
[02:28:20]  router is it works without code gen like the types actually he somehow managed to make it so that like the the routes are actually type safe without code gen um which is one
[02:28:36]  of the most insane he's gonna code gen anyways uh when he generate if he uses a file system router so like i guess that if he uses it it's kind of who
[02:28:45]  cares because people are gonna people are gonna do it but what what made tan stack router really cool is that like if you just got one in a file defined your router and your
[02:28:55]  routes and then use them it completely is fully type safe without any code gen um which is a very unique principle i don't think any typed router out there works with zero
[02:29:07]  code gen to the level of what tanner is doing anyway sorry it was just a side yeah i mean he wasn't happy with it but like he never needed the code gen
[02:29:22]  that was the whole thing like the router actually works with he added code gen as like a feature for um like like so people would do file system routing but the the you
[02:29:35]  one of his oldest demos for it was like literally just defining all his routes in one file or you know ever just defining it all and it just it worked with zero without any
[02:29:46]  code gen dHH secret you guys are you guys are just like biting at it you everyone wants to talk type script anyways um oh man anyways sorry uh we we digressed
[02:30:09]  a bit sorry uh let's um it was just the the com the conversation um kind of went here uh but yes uh sorry uh type auto generated router types what else we
[02:30:28]  hear imports types this is the other i see these are all those functions um do these so you're saying do these get added as they're used yes no no they added
[02:30:47]  as you initiate the project that they are available for use okay gotcha okay that's fine yeah and then nitro config dot do okay yeah and it's all the type if
[02:30:57]  you check the main ts config basically there is nothing inside it it's it's the generated one yeah it's just like yeah and then yeah this one gotcha interesting okay
[02:31:13]  very powerful um yeah i gotta pick your brain about this because it seems like from your experience with nuxt a lot of the stuff that nitro does kind of automatically um
[02:31:24]  works in a very specific way because we kind of worked through this sort of problem space in terms of like typed routing or whatnot so it's like all these pieces are kind of
[02:31:37]  built in i i had uh brandon on the stream uh about a month ago talking about analog and we didn't quite get this deep into like these kind of aspects of
[02:31:47]  stuff um but this is this very cool uh kind of see that again it's just tucked in our little folder in our nitro build folder so this is this is kind of
[02:31:58]  like uh um this nitro folder is like kind of like a temporary kind of build folder and then this is the final output folder that like when i actually like run pm
[02:32:11]  pm build it'll end up in here right yes precisely it's fully portable you can just deploy off output without not modules yeah yeah makes a lot of sense okay okay so already
[02:32:28]  seeing the power of just having like kb at our fingertips automate typing we made a couple silly endpoints here um you i mean it's not hard from the the picture
[02:32:38]  you just take this and instead of returning the string call you know uh basically import render render render stream from you know render to stream from solidjs render stream return it like this
[02:32:54]  this basically um like i'm gathering this divine event handler uh handles a lot of different types of responses obviously we've seen string responses um can i return like a new response
[02:33:08]  object like uh like uh you know one of these um like define event handler it it must handle a lot of different types of return types right yes okay so i can make custom
[02:33:29]  responses i can set status codes i guess a lot of these details are coming come out of what the this event is right because and all the methods i and if i was
[02:33:40]  looking for docs for that i would not look at valley bot i would look at h3 right yes i just shared your link for the magic that is behind these direct responses oh
[02:33:55]  beautiful okay i feel like i've seen this before but uh let me look here yeah handle handler handler responses let's get it basically when you return something it goes to this
[02:34:08]  part is it empty is it a web response send web response is it a stream send stream is it a buffer it's a blob error yeah okay so basics kind of serializer
[02:34:22]  setup for response and then some of these other methods in the other methods in here like that's all h3 basically yeah event handler and then i was gonna wear these methods
[02:34:37]  is yeah so there's an event thing is web response send web response and utils so you have this i go up um this is the app which is the entry to h
[02:34:50] 3 and then if i go here and go to utils i'm going to see a lot of body parsing cache cookie proxy request response spawn status bunch of helpers
[02:35:08]  yeah okay so these are those wrappers we talked about where they get these the stuff off the events indeed so eventually when we get rid of noting it completely we just update
[02:35:19]  internals you don't need to modify your project source code beautiful yeah his stream does it have a pipe method yeah for pipe two it's a web stream that's whatever yeah
[02:35:32]  send stream here we go this is the interesting stuff exposure worker some stuff socket has pipe two has pipe two return readable stream pipe two writeable right nice node streaming yeah so
[02:35:49]  you got full streaming support here which is nice you can do stuff yeah very very nice early hints nice oh that's lovely are you saying that i can just like i could just
[02:36:05]  like go in and just like basically go like import early hints and then just set them like on a request as platform agnostic very very nice for those who aren't
[02:36:18]  familiar early hints is a way what one of the biggest challenges right now with streaming is that once you flush you flush you have to set your status code there's no there's
[02:36:29]  you don't get to change your like initial response um what early hints let you do is tell the browser um to immediately start um you know load pre-loading stuff
[02:36:41]  maybe even before you actually respond with the proper status or the the proper uh like uh request so it lets you load assets earlier this makes a difference in non-stream solutions like
[02:36:54]  a bigger difference but it's still it's still a valuable tool to get the pre-loading of assets happening faster anyway a little aside very very cool stuff i keep
[02:37:07]  on discovering all the like just as you go through you just see this stuff um but yeah the this this means i mean like the the simplest way of thinking about early early hints
[02:37:20]  is like if you if you if you get a server request and pretend forget about streaming for a second pretend you have to fetch data from your database it takes 400 milliseconds well
[02:37:29]  while you're waiting for that data to come back and for you to render the page the browser is just sitting there going okay i'm gonna wait for it then the page comes
[02:37:40]  in with all the data all rendered but the problem is it's at it's only at that point that it can go fetch the javascript and the css and
[02:37:48]  all the other assets that aren't in line because it gets that html file then looks at it and goes oh okay and quite often we set stuff in the head so
[02:37:56]  like we can do it as soon as the document starts parsing right but you still waited that 400 milliseconds with nothing um early hints gives us a way to tell the browser to
[02:38:10]  start doing the preload before the documents even been sent across so very very cool feature it's not supported everywhere it's just cool to see this like support where it is
[02:38:22]  supported um which is very cool yeah see it it's just it's this basic format it's another like http setup where early hints and then you have to like put your links
[02:38:34]  and you serialize them as lines instead of like as link tags um but honestly very cool to see okay a little bit of a tangent there i guess i suppose um nitro
[02:38:46]  usage in practice okay let's let me look at this let me look at this example uh here that you've shared with me see basically that we're hanging with exactly too so
[02:39:00]  we even though we don't stop for streaming yet we send early hints for next based on this utility yeah it's available for everyone it is it is very cool yeah um
[02:39:11]  i remember the remix guys also very excited about this initially because um they they weren't a big fan of streaming streaming has this really awkward bit that most libraries are designed to hyd
[02:39:29] rate all at once or basically like they expect the data to be there at the time you hydrate and a lot of like ssr libraries like uh like css
[02:39:41]  and js libraries or like you know head meta libraries they expect to be able to do the full rendering before they serialize what they need into the head so you got this real
[02:39:52]  awkward tension where you have these libraries on the server that expect to do their thing at the end when everything is done and you have these libraries in the client that expect everything
[02:40:01]  to be there before they start and the result is if you just left them to be like that streaming would basically be a cool visual effect but you wouldn't actually be able to
[02:40:12]  you know hydrate anything early or you know do anything so um but you know something can i add a cool tip uh to the equation imagine if you can cache your pages
[02:40:26]  even for zero seconds for just once so if you have like a concurrency of 100 requests per second and the responses are basically the same if you enable the caching using raft
[02:40:37]  rules or any other strategy uh the first request cannot be streamed right because the other libraries are incompatible but the rest of them in this concurrency all of them
[02:40:47]  can be streamed so the users would leverage from it okay okay yeah interesting yeah yeah i mean http itself is stream format i was just thinking one of the i'm i
[02:41:00] 'm trying to think of like um hmm i'm trying to think of this situation because when you when you say stream do you mean like the the the finished result um or the
[02:41:19]  uh exactly exactly we uh catch the ssr response html one once and for 99 percent of requests we can stream them so it's just the cost for the
[02:41:29]  first one first person right right and and yeah that is actually kind of interesting thing in general because that first cost is a large is a large part of uh of uh where all
[02:41:40]  the optimization goes in because caching coming in after the fact ends up being the thing um that's why personalization is such a big problem space especially in places like e
[02:41:51] -commerce where they rely on that cash speed to get their their seo it matters more than the actual speed of the framework but that first hit you know the cold start the
[02:42:03]  first render the like that always ends up you know eventually being the thing that people you know spend an absorbent amount of time optimizing for even if it's not like the
[02:42:13]  95 percent case or whatever um depends on how dynamic the content is okay let's catch up with chat here for a moment does it support jsx yeah we talked about that it
[02:42:29]  does support jsx you can just give it a factory because the typescript will just work um what are we seeing here okay when we start talking about all the issues that
[02:42:40]  this approach has which approach or early hints or streaming i i would i did talk about all the issues streaming has um i think parasocial you might have to be a little
[02:42:52]  bit more specific of which issue all right um okay i'm trying to think i don't think there's anything else i actually want to demo on the the nitro side
[02:43:03]  of things i think i think i got a grasp on the basics um i think it's a good time the to start uh you know asking any specific questions to puya so
[02:43:16]  we can actually let him go and not keep him here all afternoon um so yeah yeah we got some people talking about nox i'm just trying to see if there's
[02:43:29]  a any questions i'm how many questions i actually missed yeah actually this the first one's a great one how late is it for you i hope it's going to answer it
[02:43:41]  11 but i usually sleep late so it's early night i think because i heard i have to do some boxes on the next probably okay so not i'm not keeping you
[02:43:53]  too late no okay not at all i'm really enjoying this talk to be honest with myself i'm excited good good good good yeah i was just scrolling up on the chat um
[02:44:02]  trying to see if i could because part of the time i was actually like just uh skipping over um some of the questions because uh i was trying to keep topic on thing
[02:44:16]  um oh yeah here's a funny one it was about the router they're like could theoretically nitro power next.js app directory and page directory um i thought this was a
[02:44:27]  like i i think i think the answer i think this this is this is way back when we were talking about like how you could just make your own custom router and pass
[02:44:38]  it in so i guess that's a yes probably yes definitely i mean you can also pass a full full instance of express for example as uh under in nitro yeah i mean
[02:44:53]  i don't know if i ever showed this on stream but there's there's this project that nikil serif has been working on that's built on top of nit
[02:45:03] ro and he does it almost exactly that it was built on based on bun app and i'm gonna get nikil to come in uh and talk about vinci in the in
[02:45:14]  the future but essentially he actually has like in the same project built on nitro just basically vinci is a file system router kind of built on top of veed and
[02:45:26]  nitro um that's configurable and does the specific bundling pieces that you need for stuff like react server components or like server functions or solid islands or all that kind of
[02:45:39]  stuff and he's he basically generates the route stuff that then he feeds into the nitro config and essentially um he has applications i kid you not that literally have a client
[02:45:52]  rendered solid app and a rsc um folder like in the same project side by side some of the routes go to the solids single page apps some routes go to the react server
[02:46:02]  components demo all powered nitro same deploy same same thing so um i this is why i pulled out this question because it's actually very uh relevant to nikil's uh
[02:46:16]  work um and i think you'll be talking about that work coming up actually at beat comp um so yeah this this is a very cool project that kind of um yeah we'll
[02:46:30]  have nikil on again and talk about this kind of stuff but yeah it's nitro is able to power this instead of using you know this is an example of nit
[02:46:41] ro's flexibility instead of using the built-in file routing he was like okay i want to do a completely different thing i want to use something that uses say solid starts conventions
[02:46:50]  and something else that uses next js's conventions and stick them side by side in the same project and have them all work on top of nitro yeah to me it's
[02:47:02]  feeling so nice that we are opening up to the community and it's just you know helping other react developers leverage the same things that we built uh i think that was finally our
[02:47:13]  goal and i'm super glad these projects are popping out and i think uh distribution is more but for with conference i think we have so many nice things that are going to be
[02:47:22]  announced yeah no that's excited yeah especially yeah people you know talking about um i think nitro is going to come up in more than a few talks uh what so what
[02:47:35] 's next for for you and nitro what where where are we going to next you talked about a few projects you know they're interesting that you kind of you know may have
[02:47:45]  leaked on the stream but in in general what's next well uh i mean in general uh i have some uh like generic development experience tools that i wanted to invest on i
[02:47:57]  shared a link to extract run which is one of the projects i think it's over two years i have been thinking about it's something i think would make your life much easier
[02:48:06]  uh you can't spoil more but for basically just having a local development environment i believe that life should be easier you shouldn't install like 10 packages to just run a local
[02:48:15]  development environment that's something i'm really excited about i'm learning new language for that basically uh sorry is it this x run what is this yeah yeah that's the game for
[02:48:27]  now you can play the game until we release it uh because i was excited about it uh in nitro side i think uh web sockets are one of the the big
[02:48:37]  things that are coming very soon we are working on a generic feature called nitro tasks it's basically uh one of one on and off or task runner you can use it for
[02:48:45]  db migrations and things like that but yet there are so many small stuff that we are going to improve the ecosystem instead of you know introducing more and more packages very cool
[02:48:56]  very cool yeah so this just keeps on going and uh yeah talking to we should yeah i i was gonna leave for this week in jaffrica but we should talk because i
[02:49:06]  got you here we should talk a little bit about bconf i'm already mentioned it already but um you're speaking at bconf correct yes i probably have a quick speak
[02:49:16]  uh during with conf i probably spoil one thing i didn't mention today it's a new format preset for nitro but it's going to be amazing especially for people that want
[02:49:26]  to still host their applications it's going to be helping them a lot that's something i'm going to announce but also as you mentioned there are more not more nitro
[02:49:37]  related uh talks which i won't spoil but i'm so excited for them all right right yeah i i saw you up here so i was like oh okay they they don't
[02:49:47]  have any details on the on the talks yet up um actually the the the pre-recordings are due tomorrow right i just got mine in yesterday i probably the first last
[02:50:01]  year they they did the same thing they put the due dates on and then i i like actually submitted mine on the due date like two hours before the deadline and they're like
[02:50:09]  ryan you're the first one we got and i was like oh oh my god it's really how it's fun to be last minute doing things but it's interesting it
[02:50:18]  was the first yeah yeah i got an email that says your talk is due in eight days like a week ago um yeah other beat comps speak speakers being like what uh
[02:50:31]  yeah who else is talking at this one um jessica who's in our chat um who else is there um we a lot of great people here uh evan you
[02:50:44]  um tom presson werner from redwood i mean brandon who's also in our chat today friday case scott from astro daniel laro we've talked
[02:50:54]  about eric sims with stack let's just yeah so too many people anthony fu the and representation from like all the different frameworks here right we got nuxt ast
[02:51:08] ro um solid analog redwood react kent c dodds react was kind of uh less represented i guess there's rakis last year but um you've got kent c
[02:51:19]  dodds so he's still very close to the remix guys even though he's you know not um like part of the team anymore we got minko angular bun j
[02:51:29] ared sumner quick uh yeah another redwood one ben mccann from svelte um what else do we got here theo we like oh awesome talk from sarah she
[02:51:43]  does docs at astro i'm super interested in that topic marco i mean i'm just skipping over there's so many people elm there we go uh what do
[02:51:57]  we got tori like the everything is covered oh there's rakis here um yeah nikhil as i said he'll be uh probably talking a bit about vinci
[02:52:12]  so yeah this is this is going to be an event uh vconf was so fun the last year and the pre-recorded format actually made it really uh run like clock
[02:52:21] work they do such a good time uh job ahead of time to make sure everything kind of just like you know runs smoothly that um yeah i don't know it's interesting because
[02:52:32]  pre for a while there after you know when the pandemic was going on i was like oh i'd love to go to like an in-person event and they are great
[02:52:40]  in a different way but the pre-recording it's like a different art when you make talks for pre-recorded events you can play into it a bit right you
[02:52:48]  can like draw stuff on the screen or if you want to or you can like do a little video editing or you know stuff i i think it'd be really cool someone like
[02:52:57]  really got into it like that um i'm not very talented at those abilities so you know i did what i could but um still pretty much a typical slide style talk but
[02:53:08]  i think i think it's really cool what you can do with this format and uh great group across the whole ecosystem i think that's what's cool about beat it brings everyone
[02:53:16]  together does remix support beat now i i i don't know they there there was it's kind of like a bit of a funny story but um somebody i forget who it
[02:53:32]  was on remix's case uh about not doing hmr and and and i i forget some like in some github issue was like oh we don't really need hmr
[02:53:43]  it has bugs or whatever and then i we find out later that like ryan florence actually does hmr in was doing hmr in remix he actually was like putting
[02:53:52]  up a beat server beside the remix server and had them both running side by side it's like it was it was funny anyway yeah this is stacked yeah yeah no it's it
[02:54:11] 's it's it's gonna be a good time um so you you're saying you're only doing a you're doing like a lightning talk uh anyway i think we're
[02:54:33]  pretty good here um the chats the chat has uh has not produced any more questions i was hoping to give them a chance but yeah i'm very excited for b comp that
[02:54:48] 's when we're all gonna come together again coming up it's october 5th and 6th i believe though if they run it the same as last year that means it
[02:54:56] 's like a 12 hour format um where it uh basically runs from start to finish uh uh and then runs again like it's like it's it's like they did 12
[02:55:08]  hours of talks and they just backed it and repeat it again online so that all time zones could get it anyway um before i let you go and i move on to um this
[02:55:10]  week in javascript and some other stuff uh uh any shout outs you want to give puya uh i don't know i think it was really good cover today yeah
[02:55:32]  no we talked about a lot of stuff it was useful yeah very useful for me and i can imagine even more useful for people who haven't who haven't seen this stuff
[02:55:41]  before it's uh it's definitely uh very cool to see all the pieces you know that built kind of all work together so nicely uh it's i'm i'm i'm
[02:55:53]  very much uh looking forward to it uh yeah i mean yeah i'm going to talk about it a bit more um probably details but what one last thing before i i let
[02:56:11]  you go one of the reasons that my big interest uh in nitro and it's one of the things that i think people have been paying attention are probably already aware of because
[02:56:22]  i've talked about it but um the vinci project that nikhil has been building that allows for these file system routers um to play well together um in different bund
[02:56:33] ler configs to do stuff like server components in beat or our islands routing type stuff in beat uh is serving uh has is doing really we've been experimenting with it um in
[02:56:48]  solid start as a as a rebase i know we were looking at astro before and astro is very capable of doing what we need the challenge there was we sort
[02:57:00]  of we ended up disabling a bunch of astro features to get solid start to work we were kind of playing around their stuff and over time we might have also you know
[02:57:12]  got to a place where everybody could play nicely but in the meanwhile we want to look at some different options and looking at nitro and this on js ecosystem it became very
[02:57:23]  clear that this had all the pieces that we wanted basically out of the box just asking to be used so um we have been working on a new um a new a new beta
[02:57:38]  for uh um solid start build on a nitro foundation yeah i have this is this is the first time talking about it i i i figured you you you all get a
[02:57:52]  sneak a sneak uh a sneak preview of me talking about it this is the topic uh my vconf um talk that i just finished recording but knowing our community of enthusiasts there was
[02:58:05]  no keeping this one under the under the rug for very long yeah at this time to be fair a lot of the work that i did to generalize solid start so it
[02:58:16] 'd work on an any adapter format kind of applies here too in terms of our thinking but um this this is a this is a pretty what what we're able to do
[02:58:30]  with nitro here and with what nikil's been working on with vinci um is just it just makes a lot of sense i i absolutely love astro and the
[02:58:41]  astro team they've been incredibly supportive and we've been working a lot together uh recently i was just just did a pr on the solid renderer um for the after the
[02:58:53]  astro 3 release we hit some bugs on stream if you remember and i actually went in and pr'd the the astro renderer to fix them so still very much big
[02:59:03]  fan people should use astro with solid it it's a great combination but um as the platform for solid start um i'd say that's on hold indefinitely um to
[02:59:18]  be fair we could probably take the same agnostic parts and just swap the underpinnings if it made sense um because of you know how layered this approach is but in
[02:59:29]  terms of what where you know as we've seen today on js and nitro is an incredible um platform i think that's really exciting news and i think everyone is excited
[02:59:41]  here uh yeah to be honest i am glad that we are joining the forces this way and i hope we can also somehow help astro at some points to you know gather more
[02:59:53]  forces together but yeah yeah i i i uh i basically where where was i gonna show i i made an issue here that some of you i'm gonna dump this in chat
[03:00:09]  so again this is why um this is why i i wanted to mention this because i already kind of did a semi-public announcement for people in the know about this i
[03:00:24]  and i was talking about with this change um it's it's it is about rebasing the nitro adapters in vinci but it's part of a refactor
[03:00:35]  that uh will allow us to basically fix some of the fundamental architectural issues that we've had with start um and i go through each one point by point in here um in fact
[03:00:48]  you know i'm i'm probably gonna talk about this i was gonna talk about it right after you got off the stream but i thought i would announce the it at least
[03:00:58]  high level while you were still with us so we could uh you know celebrate i i so to speak yeah i'm gonna answer all these questions um and i'll i'll i
[03:01:10] 'll explain in two seconds i i don't know if we i i don't know if we want to keep huya for for much longer i just wanted to have him
[03:01:17]  here when we when i announced it so um anyway uh we we can continue this discussion afterwards um thank you for joining us today um i think very exciting stuff i i think everyone
[03:01:35]  would agree of course it was a pleasure to join with you and talk with you and uh yeah i hope what best happens we can also have another talk maybe later on a
[03:01:45]  pay programming so that when you want more in that stuff we can actually work on some projects it's so exciting for me tonight and thanks for having me yeah definitely it was a
[03:01:54]  lot of fun yeah i i think there's a lot of not hidden but there's knowledge that comes from your work in noxt and with njs that know how to best
[03:02:02]  leverage it where we're still kind of like figuring out best patterns so we can still learn a lot from you so i'm looking forward to those future conversations thank you so
[03:02:11]  much all right and have a nice rest of it bye yes see ya all right all right so let's let's talk about this all right um because people are asking about bl
[03:02:29] ing and stuff and as i said my vconf is going to be like the polished official announcement um but let's i've already getting people in the know on the dev
[03:02:40]  because there's there we have to plan for this stuff and while once i don't feel there's any point hiding this stuff because i want i want to get people involved i
[03:02:49]  want people to be working on the right stuff and you know us talk about this right so i don't i don't want to wait a month until the vconf comes
[03:02:58]  out i want to talk about this now yeah so the first question is is is bling also on hold no activity on that repo for seven months and no mention of it in
[03:03:12]  beta 2. okay um we learned a lot from bling and my understanding well actually let's let's open up the bling repo and see what's where it's at
[03:03:23]  because Tanner was just talking about the other day what bling represents i i don't think goes away let's see bling github um 10 stack bling there
[03:03:32] 's yeah i see what you're saying one of the challenges with bling is that we have with bling was that while it the the the this is very very very
[03:03:43]  powerful it's a compiler trick so i do mention bling in i while i don't mention bling directly in the solid start uh um issue here it is very much
[03:04:02]  related to 7 here because the challenge with the compiler based approach and the truth is we kind of need two approaches to this is a compiler based approach transforms what's local right so
[03:04:17]  it's like transforms what's in front of you so if it sees a server function it goes okay i need to hoist that and i need to register it essentially um
[03:04:25]  or like don't include it but it basically just uses this local knowledge to do something if it's a client component like an island or something it'll be like okay i need
[03:04:34]  to know that this island is its own entry point etc but the again it it will be it it it it it was handling that through like a lazy import convention kind of
[03:04:46]  thing the challenge is these local um compilation pieces don't make the ideal solution in this zone because for example picture you have a server function that you use and define inside a lazy
[03:05:04]  loaded component if you don't hit that component on the server like you don't import it then you never register that code and if someone in the client navigates to that
[03:05:16]  location it they will find the client version they'll try and call an endpoint that was never registered so like you're kind of left in this weird place with like what do i
[03:05:27]  do like not have lazy loading on the server no i mean that's not like we did that for the routes to a certain degree but in general this is not a good
[03:05:36]  pattern the bundler has to be aware and you almost have to pull the server functions completely out not just as a compiler trick but as a bundler entry you have to understand
[03:05:45]  that like you have to go search for all of them and actually make them a separate entry point similarly for islands having each one as a separate lazy loaded thing is fine but then
[03:05:53]  you load like hundreds of chunks if you know if depending on the size of your app where wouldn't it make sense if you know if you have a client component that has
[03:06:03]  other islands in it like client components in it all the way down you don't need a separate module for each one of those again it's a it's a graph problem it
[03:06:10] 's based on the bundler you want to say like these components are all part of the same tree chunk and put them together so a local compiled solution will never solve this completely
[03:06:24]  it's useful as part of it you know basically bling is like the compiler front end for the bundler problem that we don't solve in solid start and we don
[03:06:37] 't solve in bling you need both together to actually have the full solution otherwise it just like it's only half of it and today bling and solid start are only half
[03:06:45]  of it nikhil and vinci has been building the other side the bundler side the thing that works you know uh it's the same in you know react server components
[03:06:55]  as it works for solid islands or whatever the choice of syntax whether we use server dollar sign or use server use client that's the compiler bit that's the part that bling
[03:07:05]  brings to the picture so we've learned a lot through our process working on bling to the point that like and solid start before that which bling was based off of
[03:07:15]  but we need both pieces together so um the question what me and akil have been talking about when with tanner was can we generalize the bundling part like the the
[03:07:27]  compiler part's fine but we're not sure if we can generalize the bundler part um so it's this is the challenge for bling because the what bling does
[03:07:40]  we're just we could just reincorporate it with the bundler part but as a separate module that's generalizable it's a little bit trickier hopefully
[03:07:48]  that makes sense so in general um tanner is still very much aligned with uh there's a tweet where people are asking about stuff and tanner still very much aligned with what
[03:08:02]  we're doing we're still in working with tanner so like we're still building out that future framework base that tanner can use for tan stack that we can use
[03:08:12]  for solid start we're still all in the same loop um you know building stuff this version is the best version we've had yet right we we had the basic idea of solid
[03:08:23]  start we then tried you know to do bling try to do stuff with astro this new version with nitro and vinci um actually succeeds at some of those architectural
[03:08:35]  things actually addresses problems like client only mode not working because of the the bundler is now part of the equation yeah it's it's actually really cool what vinci accomplishes
[03:08:59]  like he he literally has uh um did did i post a link for it already he literally has like next js style router um like it's just configuration in terms of what
[03:09:10]  routing we could like have svelte kit if you want a bunch of pluses like routing is just a configure file system routing is just a configuration the uh detail like what
[03:09:18]  exports are special all that kind of stuff he basically has a mode where you can choose whether you care about the export at build time um at run time like like basically you
[03:09:31]  can you can choose by configuration how to do the analysis and basically configure the the rules on how you know like imp how to implement say solids route data pattern or get server
[03:09:44] -side products that's just a configuration object you know option so yeah basically i i i mean if you really want to know just just just look at the prs in
[03:10:16]  in in the solid start repo that where people start fixing issues i was having on the astro branch and they all involved like okay make astro not do this stop break m
[03:10:26] d but if you read between the lines it was all like like break mdx in astro break this in astro break this in astro and i was just
[03:10:33]  like why are we breaking stuff in astro if we want to like use astro it was basically hiding it anyways which is kind of unfortunate so i know this is a shift
[03:10:49]  because we publicly i mean we said we were exploring the possibility i spent during conference time building out these prototypes and stuff and got things in a you know a pretty decent place other
[03:11:07]  than i as i said this this is a very tough decision um especially because of other people have to kind of convince me a little bit and talk me into other options because i
[03:11:20]  was i was essentially just trying to will this to happen on the astro side because i'm such a big fan of astro and its position in the ecosystem um i
[03:11:29]  i was i was probably i i i was pushing this myself probably harder than anyone else even um astro guys themselves like when i talked to fred and i was like you
[03:11:41]  know the the astro's got a plan uh for how they want to approach this stuff in the future and how they approach stuff and i was like sitting there trying to pitch
[03:11:51]  completely off the cuff ideas like app directories and things like ways of like supporting meta frameworks inside astro and all this and it just it just wasn't like no there was
[03:12:01]  no buyers so to speak no one it would be an interesting project but it's it's not like i i was probably the most enthusiastic person for making solid start work on
[03:12:13]  astro um so um i i i i think resetting my expectations and looking there in terms of like what the technology is available the stuff with njs and nitro make
[03:12:26]  a ton of sense what the technology is available the stuff with njs i don't know what this means um but yeah i mean we're gonna continue working on on
[03:12:56]  start uh i my talk goes into more details but the the big win here like when i did the astro conversion i we just kept the same beat plugin and kind of
[03:13:09]  pushed it through astro and then changed the build step um this vinci rewrite is a little bit more significant with nitro and everything but like the end result is amazing um
[03:13:21]  like i mean we're not done yet but like right now we're sending about 1200 lines of code over 30 files versus if you go install start repo right now it's
[03:13:29]  like 10 700 lines of code across 150 files we're like one tenth the code for maintenance costs i'm very excited for like what this will mean for us to actually be able
[03:13:39]  to maintain this moving forward and having like you know all the all these pieces you know production ready pieces well tested pieces as a foundation well astrophysics i mean the thing
[03:14:01]  is we did implement mdx in solid start that's what the docs are done in um our problem was the docs broke because solids uh transform for mdx was
[03:14:13]  different so if you actually look the there's a pr again for fixing ask fixing solids uh docks involved breaking astro's mdx support like this is kind of thing
[03:14:26]  to be fair astro's solution for mdx is better than ours i'm pretty sure we in general but um i need to keep up on the discussion i i
[03:14:36]  do want people to come here and give their opinions and talk about this stuff because i think i think we've had some struggles here to maintain this with the um you know the
[03:14:47]  team of volunteers that we have you know working on this and i needed to look at what would get the project to 1.0 um in a way that lets us continue to
[03:14:57]  expand and experiment i think one of the biggest challenges is there was some conversation where people were talking about like v plugin ssr for example and v plugin ssr
[03:15:06]  is very opinionated about the router they want to control these pieces and someone's like oh i can move start to the v plugin ssr in a couple weeks but the
[03:15:14]  problem is it ties our hands for where we want to go we think routing is one of the most crucial pieces for experimentation development that's why that's like a lot of the
[03:15:23]  funding for chrome for the r d side is all around routing actually and data serialization and like the pieces that a lot of these meta framework builders do for you even nit
[03:15:33] ro the box kind of does it for you we needed to go a level lower and nitro just made it so easy just to get rid of that stuff so i think i
[03:15:44]  think this kind of has to be understood when you think balance between getting 1.0 out and getting like still being open to be able to accomplish this the stuff we want
[03:15:56]  to accomplish because the truth of the matter is i'm still very excited about by what solid start represents like what we can do with this api i spend a lot of
[03:16:10]  time looking at other meta frameworks to understand the details and while we might not have the smooth dx of say something like nuxt yet i'm convinced that mechanically the model we
[03:16:23] 're working on will give us the ability to do stuff that um that we really haven't seen in other in other frameworks in terms of making um that kind of isomorph
[03:16:38] ic um universal feeling application right in a way that's extensible um to be fair i haven't gone into nuxt as much i think nuxt is from what i'm
[03:16:48]  understanding is very extensible um but i i i think that we're really focusing on being minimal versus um you know where say nuxt is and i think that is a
[03:17:08]  bit of like puts the razor's edge on things um which makes gives us a lot of power um and i think this is how how we best leverage these things so we
[03:17:23]  can you know showcase that power yeah i mean it's it's a tricky balance i i actually don't care about a lot of levels when people come to me and tell
[03:17:46]  me that they're you know they need an isr change on the adapter i just like merge it and hope that it works you know like i i i want i just care
[03:17:55]  about you know i just care about uh the level you know at a different like a different point in the tree like what is a meta framework right um i don't know it
[03:18:08] 's it's kind of like a bunch of a bunch of layers right like i i would say like maybe let's like i can't remember if i've drawn this before
[03:18:25]  but i feel like i feel like like we've oh you know what actually i'm just gonna show i'm just gonna show you guys one slide from from vcomp essentially
[03:18:46]  meta framework is really the router the like the opinionated data fetching the the route resolution all that stuff um not the server router not the processor router but like the the
[03:19:03]  the like handling of the anchor tags client router kind of mentality sitting on top of a framework like a render framework like react or solid sitting on top of a bundler uh configuration
[03:19:15]  thing like this where the bling and the vinci comes in that sits on top of a server runtime and i i i layered it this way because i think it goes from
[03:19:25]  most opinionated to least opinionated i think the router ends up being the most opinionated part so if you think about it this way um then like this lets like in
[03:19:39]  terms of attacking this it was just a matter of thinking about like what's my responsibility what's someone else's responsibility so just like i drew the line here so solid only cares
[03:19:49]  about really what's above the line if the bundler can give us a generic solution for you know handling server functions or all those pieces server runtimes like nitro or
[03:19:59]  whatever behind this i only need to worry about the render framework i'm not even talking about the meta framework i'm talking about the render framework and the router basically you know something
[03:20:09]  like solid start almost disappears in the in the ether from that point most of the features are going to that are in there are going to fall into framework or router um which
[03:20:19]  is you know solid js router and the framework solid js so like this is why this is a huge win what's left for start is just configuration of wiring all this stuff together
[03:20:31]  so that that's the thinking here um i don't actually need full control of everything i just need to make sure that there's clear responsibility see that's why i'm
[03:20:51]  not really building a meta framework if if we succeed at what i'm talking about here it like let me go back to this issue here solid where where is it yeah if
[03:21:11]  we succeed picture if this was your entry point into solid start right here like here's your like your root or app tsx right there's a server entry with some document stuff
[03:21:22]  who cares but this was your entry point right here if if this was your entry point okay yeah and it worked for csr worked for server components work for whatever look look
[03:21:34]  what's here the routers here the meta provider if you could just switch out the router or the meta provider as long as the file routes are injectable see look what comes
[03:21:45]  from solid start the file routes come from solid start nothing else comes from solid start if if start goes oh here's the json for your file routes insert into the router of
[03:21:56]  your choice then the meta framework isn't it's not a meta framework it's nothing it's it's it's just a starter template like one day we could build this
[03:22:06]  in such a way that we like the cli and the templates for repo that's solid today is just the solid start templates like basically solid start is not is not even a
[03:22:16]  mono repo it's literally just a the one package of config that kind of serves as like the the the base code that you pull into our templates and then the docs or
[03:22:30]  whatever like i called it solid start which some people make fun of because of the baby food or whatever not because it like i was trying to build like a redwood or something
[03:22:38]  i was trying to build a starter um that was as minimal yet powerful so that people felt that they could do their own thing like so it's not like a framework but the
[03:22:49]  second the first time i saw or j devs like create jd app like you know there are t3 thing the fact that you can build something like t3 on
[03:22:59]  it solid start so easily that's where the power is people can go build frameworks i just needed to show people how to wire it together you know in a way that you could
[03:23:13]  just like get started out of the box ssr was not out of your reach you do not need a next js or remix or a meta framework to use solid js
[03:23:22]  even if you do server rendering or server components or whatever not necessary and that requires spending a bit of time to figure out where the proper ownership and responsibility falls in a way
[03:23:49]  that's what you're trying to do so yeah that's that's exactly what it is all right all right all right all right all right we we're ready for this week
[03:24:05]  in javascript i know that was a bit of a bomb watch my beat comp talk where i will give the more polished version of of what i'm talking about here
[03:24:14]  but this this this is i've i've been i've been trying stuff the last month or two i didn't want to get too excited to talk about this yet because i
[03:24:27]  want to make sure that it was the right decision i really really really love astro like you you don't you you guys don't understand how much um but i i
[03:24:38]  needed i needed to um kind of get us unlocked and part of this you know took required trusting in the core team of you know volunteers and contributors that we have working on solid
[03:24:55]  trusting in the work that nikil's been doing and alexis has been doing so like this is this is what makes sense for not just mechanically makes sense for
[03:25:06]  the community it makes sense for like the people working on it we've got a few big projects right now with the milo's work on solid 2.0 and the start
[03:25:16]  stuff that like they just i know what work has to be done we we just have to like get it out there and it it a lot of the stuff addresses a lot
[03:25:26]  of these kind of like where the boundaries the lines on the boundaries weren't drawn quite right we were almost we had the right idea we just our first shot at it the
[03:25:36]  pieces weren't aligned quite right and i'm i'm i feel like with these next couple releases um they will be in what i'm pretty stoked about mostly is this doesn't
[03:25:50]  feel like when i you know there's a time in the past where i like i didn't know the solution i was spending a lot of time like working through stuff and going
[03:26:00]  like how do i ever solve this thing how do we ever figure out how to you know accomplish this you know we'll try it and do trial and error you know like
[03:26:07]  for example if i was going to attack presumability be that kind of process i actually think most of the questions are answered we just have to implement it so this like we're
[03:26:18]  it just can't come soon enough um that that's that's kind of the scenario we're in astro still love me of course astro loves me and loves us
[03:26:37]  no astro astro is great we we have a great relationship with astro um that that doesn't that doesn't change um like as i said i do recommend watching my
[03:26:53]  stream in matthew phillips if you haven't checked it out uh the stuff that astro is working on right now is very exciting and very game changing but
[03:27:04]  see with solid start we weren't going to be leveraging any of that anyway like we're just kind of like two really good friends that we're like trying to this happens a
[03:27:11]  lot in our thing where we're like we should figure out a way that we can work together and you know leverage stuff because we really really want to um i've had
[03:27:20]  this happen so many times and and then it's like there there's those rare occasions where it works out but a lot of the times it's just like you're at different
[03:27:29]  stages in different places like you know not every time it doesn't work out like like tenor and us where we're like in the exact same place at the same time
[03:27:45]  right i mean the thing is it's the layers right like solid start with so that i could have a solid like client only can do like can basically just do the solid
[03:28:05]  thing throughout but every time we make improvements to solid like solid 2.0 stuff you know maybe this resumable hydration approach or every time we change the make improvements to the
[03:28:16]  core solid the astro solid story gets better right right so like there's just while the meta framework part is kind of like you know two sides of the same coin kind
[03:28:31]  of situation where you're kind of like maybe that's not the right metaphor but like we're like you might go okay i'm more content heavy i'm gonna use astro
[03:28:38]  i'm more app heavy i'm gonna use solid start the the shared pieces are still incredibly valuable on both sides as we optimize because there are those islands there are those um
[03:28:49]  interactive pieces and solids primitive approach you know on those fundamentals work really well with astro all right all right all right let's let's get ready for this week in javas
[03:29:07] cript okay let's let me close up a few things here um because i know everyone just loves talking about typescript um not saying that's what we're gonna do the
[03:29:21]  whole time like what i'm thinking was yeah i should turn off my my nitro app i'm just gonna be like streaming that app to everyone forever this weekend typescript skip
[03:29:37]  it yeah no i i honestly i'm like not the typescript spokesperson so it's like it's it's it's kind of one of those funny things where um i
[03:29:51]  don't know i guess we'll we'll talk about it um let's see what we got here ah just catching up on some messages here let's go here is there
[03:30:06]  much i i already did the big solid news i don't know if there was much to share from solid side yeah when was our last stream yeah our last stream was right
[03:30:26]  after alexis got the grant um so i think i already talked about that maybe i didn't okay let's let's just start there just in case i in case i
[03:30:35]  didn't and then just a second sounds like i got a lot of noise in the background i think the kids are talking to their grandparents on on the video call um let
[03:30:49] 's look at my bookmarks okay all right let's do this oh yeah i didn't stream last week no wonder i i didn't do any of this stuff okay yeah we
[03:31:01]  got we got we got double window yeah yeah yeah yeah okay okay let's let's let's go back what's two weeks go back to two weeks would have been the
[03:31:13]  first and then yeah i just did the dot media thing so then it would have been like okay cool cool i can hear the first fs jam yet like them running down the
[03:31:27]  hall if we try our best two weeks as three hours of content no all right all right all right okay let's let's let's get this going all right and talk
[03:31:45]  about this week in javascript and uh yeah there's been a lot going on there's obviously you know some people talking about typescript but before we get into that
[03:32:02]  um i just want to make it talk about a couple little other smaller topics perhaps um first of all i want to congratulate uh alexis as you know he's does a
[03:32:12]  lot of work for solid ecosystem he does uh worked on solid refresh that was his thing um zero valve which is called serializer he wrote um he's been working on the uh
[03:32:24]  chrome aurora project stuff on solid start so we've been looking at streaming serialization we've been looking at performance benchmark basically getting the real version of our island router server
[03:32:36]  components type thing going so very awesome to see him getting uh recognized he got a thousand dollar grant it looks like from uh futo for his work on solid headless one
[03:32:48]  of solid headless one assaults um many component libraries so very cool to see um all right yeah i love this teges code it's true i'm pretty convinced astro
[03:33:05]  build with solid gs islands is the best way to build webs app is the present it is a it for for stuff where the state preservation isn't well i guess you
[03:33:14]  don't need to use view transition api but like yeah i mean the the signals being built into solid giving you the automatic i mean nano stores are great but it's all
[03:33:23]  part of the framework so you just need those two pieces you don't need a third state library just have astro just have solid bang you know super powerful um a lot of
[03:33:31]  love for astro um this is coming out the astro release week very very very cool stuff um job offers in france you know we we don't get the most
[03:33:43]  job offers usually there's a new job offer post that i i'm a i'm aware of you know maybe once every uh couple months month or two you know they'll come
[03:33:51]  in bursts will be like three positions or this we're not you know i'm sure there's more out there but like the ones that come to my attention are far and
[03:33:58]  few but it's cool to see international uh solid uh hiring going on so you know it starts somewhere obviously um this is what tech twitter is for um okay i think i think
[03:34:14]  we're i think we're done with the solid bookmarks um uh let's go back this way because we can go back a little bit yeah um yeah first typescript
[03:34:37]  topic there is a typescript document documentary coming out um pretty soon september 21st actually um a lot of very knowledgeable people around typescript were involved and talked about how
[03:34:51]  um you know it's impacted them i was also interviewed for this one um as well for some reason it's kind of funny i i think theo recommended me he's like oh
[03:35:02]  you should talk to ryan he has an interesting opinion about typescript mostly um they they took the good parts out but i i've struggled with typescript a lot as
[03:35:11]  people know um i got a job offer literally with all start that's pretty cool unfortunately i didn't take it yeah well at least at least at least it's a it
[03:35:33] 's a start um um yeah obviously astro three came out and we we did the preview sneak peek of it before it came out to look at the technology really cool that it
[03:35:46] 's like a one-liner and you're like pretty much every existing astro site out there might just make this change just simply for like that little bit of smoothness
[03:35:59]  and it's like it's a one-liner it's it's if you like in your head pretend you still just have an mpa and just do that this is just
[03:36:09]  instant win i think it gets more complex if you are trying to build like this is like an app framework like a replacement for rscs but honestly this just instantly made every
[03:36:20]  you know astro site probably feel just like a tiny bit better in that like that way that it's i think it's going to open it i think there's a
[03:36:31]  whole category of sites where people were on the fence where this now it's just a no-brainer i i think simple even simple content sites where there's like more media
[03:36:41]  content um this could work actually really quite well so um yeah i i i think astro three is is a it's a a very big deal in this space uh ast
[03:36:54] ro has been blowing up about it rightly so um there's been a lot of attention they have a ton of followers on twitter um they i remember for the longest time astro
[03:37:05]  and solid were lockstep but um yeah no astro is astro three is is a big deal but it also opened up a lot of uh confusion and a lot of
[03:37:32]  questions right because i think this is a pretty fair question i'm glad people are talking about this they're like what is the difference between astro's islands solids islands remix
[03:37:47]  as full stack components server components and next and uh i don't think many people actually know the answer it's kind of like asking people what's the difference between a server
[03:38:05]  rendered single page app and an mpa a lot of people do not get that right they just assume that oh well it's server rendered so it's an mpa well not
[03:38:12]  really um so yeah what is it's a full stack this was a fun one this is from a kent c dodds article um which i like it it's a
[03:38:23]  it's a good pattern he's talking about this is actually kind of what i was doing when i designed solids router you know four or five years ago i was very i was
[03:38:31]  always hoisting the data fetching up to the route but then i was breaking it back in i was trying to remake graphql fragments essentially so each component would
[03:38:39]  have its data fetching mechanism and defined and then it would do its mutations locally and what this would do is let me split my code into these kind of modules that had the
[03:38:53]  um the information about what the data requirements were um in each piece and obviously with remix's case it's actually like server only kind of mentality but this is kind of what
[03:39:07]  i originally saw when i designed the router for solid those years ago um so it's a cool pattern the only thing is it is actually just the same as every single page app
[03:39:16]  like ultimately what you get out of it is the same as any single page app you've looked at for the last decade um it's it doesn't fundamentally change the architecture the
[03:39:26]  way that islands or uh react server components do in any case i don't know if i have to get too much into my my response to this one but i'm glad
[03:39:34]  people are asking questions it's just like we talked about this a lot in the previous stream about the difference between islands and rcs and how but how both of them are very
[03:39:45]  different than what we do in like next 12 or next sort of page directory and like svelte kit and normal start and all that stuff we're at a transition point between
[03:39:59]  these things so it is definitely good that people start asking the tough questions i have an article coming out next week um that answers this i haven't put the graphics in yet
[03:40:10]  but you can see it in the dashboards islands server components and resumability oh my where i actually explain the differences and the challenges not challenges but the mentality behind all
[03:40:23]  of these things so look look forward to that um coming out next week for my first article in months i'm pretty stoked about this one anyway now that's not that's
[03:40:42]  old news the bubble stuff was what we were working on before it just that that i was trying to push the press release through that one the signal like a couple weeks ago uh
[03:40:52]  but yeah bubble and solid have been working a lot together on a reactivity system that's what milo's work is based on we've we think we've solved async
[03:41:00]  and signals which is really cool what's bubble it's a it's it's a company that uses solid um but they also have their own reactivity system so that they
[03:41:09]  work together uh i'm trying to remember bubble i'm not going to get the this is the reactivity library which as you can see milo is a big implementer
[03:41:22]  of um but uh bubble group maybe i can get to their bubble io here we go it's it's like a low code no code kind of building tech is slow it's
[03:41:34]  one of the bubbles no code pro platform for creating digital products and build faster and basically they needed something like solid reactivity to get the performance that they want on like updates and
[03:41:46]  stuff so um yeah these guys are big reactivity guys and they have their own reactive system but we've been merging the effort with solid um so yeah uh milo's
[03:41:56]  research into reactivity in javascript is pretty much state-of-the-art at this point um what i i personally have enjoyed his as many of you know we
[03:42:05]  talked about a couple weeks ago with uh with uh anthony um when we're going over redwood towards the end we're talking about the signals uh in the browser standard mil
[03:42:15] o joined the last meeting and yeah you could tell his knowledge in the area is well exceeds pretty much most of the room um so like he is he he's a force
[03:42:26]  to be reckoned with um with his research and i'm i'm i'm can only wait to see uh you know how much further uh this goes yeah see it's
[03:42:40]  what's your thought about the resume model yeah one question to astro was felt or solid or react or select yourself yeah i mean this is this is this is really those kind
[03:42:50]  of questions are really hard because everyone's trying to trying to like bring the sides together so that the gaps are smaller like back in the day astro would be like yeah use
[03:43:02]  next.js you know for this other use case i feel like that should mostly still be their recommendation but every every release the the zone the area that these frameworks take up
[03:43:15]  is has is growing and they overlap more significantly which makes it harder means competition is also stiffer too um i love times like this because this is what we do best with solid
[03:43:27]  we thread the needle in the figure to find the the best way to optimize um the optimize the important pieces from uh to get the mechanical optimizations like for the benefits like
[03:43:44]  for performance but also at the same time keep the dx good right um that that is that's like the the thin the razor's edge we walk on and i i love it
[03:43:55]  when we're in this situation because that's usually where i get to play as i say that's when that's when my magic the gathering metagaming side comes out
[03:44:03]  where i very carefully look at how to weigh the different pieces to kind of strategically move around specific strategies anyway i mean these oh man the stream yard is being slow again i
[03:44:27]  was gonna say come on it's just like not coming out properly yeah if you got a single page app um type stuff i think we're a good choice i think our router
[03:44:41]  could be better here i i i want to work more with tanner and see what we can do on the client side routing side i think tan stacks router with solids conventions
[03:44:54]  and work for solid specifically like optimize for solid is would be basically the best solution for single page apps like not close for anything that's dashboard admini analytics anything of that side
[03:45:06]  we're just we kill it at that and there's no reason why we shouldn't have the router that fits with that um so to speak we've seen this with ag
[03:45:15]  grid like significant improvements over react um like the react version you can actually see it glitch like even when they try and do all the optimizations that uh they do like so
[03:45:26]  this is just why why you use solid um i've been trying to generalize everything which is kind of counterintuitive of building up on the specific uh single page app stuff
[03:45:40]  but i like once we know we have the right foundations we can do that building yeah so so yeah solid and next are more in the app lane definitely yeah yeah yeah
[03:46:10]  and to be fair you can use tan stack query with us anyways let's keep on going sorry stream yards being really terrible with the the comments like they show up when i hide
[03:46:19]  them and the hide when they show and i can't yeah it's it's brutal it's the first time i've had it be so glitchy on me anyway all
[03:46:33]  right let's keep on going um they got a pretty good clip for me for the for the typescript document tree but i realize now i i like this after i realized the
[03:46:57]  context so let's let's let's actually jump to the actual context of this whole thing um let's go here yeah we're done with solid news yeah okay okay actually one
[03:47:08]  more thing with the typescript one one one more thing um i thought this was an interesting post from aiden um we had him on stream talking about million.js he i
[03:47:20]  i if you're a fan of million.js i would definitely um i definitely read this post it is really a post in length but essentially what he was saying is people you
[03:47:33]  know and i think i myself have included this pointed to that he's like will react forget kill million.js um and it's mostly that he's like saying that rendering versus
[03:47:45]  reconciliation right that mil that that react forget helps react render less but it doesn't actually help reconciliation be faster so um million helps reconciliation be faster but doesn't help react render
[03:48:04]  less so he was basically saying that putting them together um would basically just be a really nice union because you get both benefits i think i think this is probably a good position
[03:48:26]  to be in for like the next three ish four ish years probably i think one of the challenges is is if react gets to a point that their compiler is like
[03:48:41]  react could have had a faster reconciler like five six seven years ago right they had dominic there from inferno the he inferno is a much faster reconciler
[03:48:52]  but they chose a different approach because they wanted to optimize their concurrent rendering and basically there's elements of what uh inferno did that didn't make sense my concern is that
[03:49:06]  any third party that hopes to um optimize on reconciliation at some point down the road not immediately not react forget itself we'll get to a point where react basically wants control of
[03:49:22]  that piece and basically will try and might make it difficult for others to get in because like if anything react forget is showing that react wants to control more right back in the day
[03:49:36]  react was just javascript react forget is like react is now svelte or something right it's it's it's they're basically trying to control the execution within
[03:49:47]  the component i would not be surprised with forget that if they once they get that working to actually break sub component boundaries right like if components aren't rerunning again anymore then
[03:50:03]  why would you bother with the same update model so to speak like this is just the launching point of a whole slew of of optimizations that they they they'll probably be
[03:50:16]  looking at and i think no one knows this but i think it might be a lot more challenging to get in the middle of them in reconciliation when they decide that they want
[03:50:27]  to i don't know do something crazy parallelize part of the jsx rendering within a single component or something who who knows what like what they're saying is reconciliation occurs after
[03:50:39]  render the virtual dom picks the v nodes and dips to figure out how to change real dom so from that side react's not touching anything right now but i do basically that the
[03:50:49]  challenge with this always is and i can't say that they will do that but at a certain point if react decides that they want to build a more optimal reconciler
[03:51:03]  like they will kind of deal which is good for react and obviously good for everyone if it basically aiden will have succeeded um at what he set out to do if they if
[03:51:15]  they actually if they actually do that so from from i think from the perspective on millions it's like you're kind of hedging that they won't but if they do
[03:51:27]  everyone wins anyways so i i think i think there's nothing wrong with that per se it's just like i think the conversation around forget isn't forget itself but the implications of
[03:51:39]  what react would think they could do in that scenario because i mean yes forget and millions solve different problems with the problem do you know do you know why i think that this
[03:52:00]  will come up immediately is because react's been selling everyone that forget is going to solve all their problems right and when the pr when it makes the d what it'll do
[03:52:10]  is it'll make the dx nicer when it makes the dx nicer where you don't have to worry about component re-renders and stuff it's like more optimal but and
[03:52:18]  it will help the performance of some really poorly re-rendered applications probably um so there'll be benefits but it's not the kind of performance that's going to show
[03:52:32]  up in benchmarks no one's going to like go oh ivry act forget it's faster and they they're not going to load into a javascript benchmark and then suddenly
[03:52:42]  get results and they're going to look at it and go you guys told me this was going to be faster but it's now slower than svelte view solid which are
[03:52:51]  you know svelte 5 view vapor like all these approaches that are you know right at the front of say the js framework benchmark right because everybody else has basically kept switching
[03:53:01]  their technology to be the same as solids so now we're all the same we're all the fastest right um so it's like the the gap is only actually growing and that
[03:53:13]  gap doesn't matter but for the silly like when people were i've had people come to me when they test performance i've told the story before and they like basically go look
[03:53:21]  solids really fast and they show me show updating a text node in a like they have a div and then they have like some text in and they just like update it as
[03:53:28]  many times a second or whatever they can update it that's the kind of stupid test people do or they they look at um the the the paint or the js time in the
[03:53:38]  browser when they perform an action and you know they look at like how deep the stack traces are and that's these are the things that react forget probably isn't actually going to
[03:53:48]  solve so like the visible easy wins which aren't like i think there's value in non-blocking and the concurrency and the and you know like these other pieces
[03:53:57]  auto memoization like but people kind of like in current mode aren't going to probably be able to observe it they're not going to notice the speed up and all their simple
[03:54:07]  ways of measuring aren't going to get it which means that reacts it's going to unless react unless the dx wins people or but see people aren't asking react for better dx
[03:54:17]  at this point they're like going like please give me performance or something unless it actually succeeds in some kind of performance type thing people are going to see it as a bit
[03:54:26]  of a failure perhaps which means even if it's like a mixed thing because i mean it's a big trade-off to change from react being just javascript to being
[03:54:35]  basically svelte um they're going to like this something here is probably going to be the logical way to get it like a quick win so yeah anyway yeah yeah
[03:54:59]  someone's calling it here they'll hire aiden to work on react maybe i mean the truth of the matter is this mechanism for rendering existed you know two three years before um
[03:55:13]  million came out and honestly i'm pretty sure something very similar to this is what dominic ganaway showed internally at meta seven years ago like my i don't think
[03:55:26]  it was exactly the same but very similar idea because dom always said yeah v dom the way i think about is the holes and if you understand that metaphor he was basically talking about
[03:55:36]  a block v dom and he he joined the react team in 2016. basically he was there going okay we can do block dom or and he was like blocked on versus concurrent
[03:55:46]  rendering current mode and the team chose concurrent mode over block dom seven seven years ago that's i think they know how to implement it i just think they're intentionally not implementing it
[03:55:58]  part of it also comes to the difference between creation versus re-render this is something very important to the react team and like because i was saying this is how we optimize and
[03:56:08]  solve it and dan went like completely off saying like this is what react solved i think they think that approaches like this to optimize are basically like in principle just the wrong thing
[03:56:19]  to do so from that side million might be safe because the react team you know you it's it's kind of similar to what they think about signals right it's like a
[03:56:29]  philosophical thing so from that perspective the challenge is if react gets in the way of it like the like the like with signals they they basically told everyone don't use the preact
[03:56:40]  signals package in react with that special h function because like there's like there's no guarantee it'll work in the future they like don't like you messing with the reconciliation
[03:56:48]  side yeah yeah and now he's on spelt adding signals and fine-grained updates to spelt um so we're talking about dominic it's it's kind of
[03:57:01]  crazy when you think about you know how many frameworks work the way solid did you know six years ago are i guess seven years ago when i got started and how many frameworks
[03:57:18]  are going to work like solid next year or you know in the future thinking even angular is trying to get more fine-grained so like it's it's it's very
[03:57:27]  weird place to be to not have the like google or meta backing to like have that power force of like developers and like to push it in the marketing but to know that
[03:57:40]  basically every javascript framework is now built on the same technology that the you know library popularized yeah he was working on he he dominic basically built react forget version
[03:58:01]  like he he before he joined felt team he basically was like hey react team here's react with signals doing fine-grained updates and and then he ended up going to
[03:58:12]  spelt after that because i i for various reasons that didn't that didn't fly anyway oh god it's so annoying stream yard like having these ghost comments okay it'll disappear
[03:58:27]  all right i think we're ready for the typescript conversation is everyone ready for the typescript conversation all those people who stayed honestly if i was watching this stream this is
[03:58:42]  probably where i'd leave i'd be like i don't want to hear about this for the nth time but let's let's let's look at this article why not
[03:58:53]  i actually haven't read the article i've just seen so many people talk about it so i just want to understand okay typescript's been a big success for microsoft
[03:59:00]  culture okay some of those people sparkle with joy blah blah blah i've never been a fan not after five minutes not after giving it five years i agree i am in the same
[03:59:12]  boat as dhh here i have never been a fan okay how long have i been using typescript yeah it's been about five years so i'm just like him with
[03:59:26]  great pleasure i can downspur dropping types what okay fact is i rather like javascript i like javascript as well i'd go as far say it's my
[03:59:35]  second favorite language after ruby okay as i said dhh closet coffee script fan yes a distant second but a second nonetheless this wasn't always the case but after we got
[03:59:47]  proper classes in javascript yeah honest and pro and flow through esas become real joy to write okay don't think javascript will flow for the server which is perfectly fair
[03:59:57]  perspective to have um definitely it's unfortunate that it can never be as optimal from like an isomorphic hydration side otherwise but i can respect that typescript just gets in the
[04:00:10]  way for me it's interesting though because typescript on the server is actually quite nice compile step i guess that's why he doesn't like it i guess he doesn't
[04:00:19]  use it on the server but you have to because it pollutes the code type to have an access that add ever so little joy to my development experience okay sure he doesn't
[04:00:26]  like it i have to agree with him here i don't enjoy typescript either things that can easily become hard become any no thanks yeah okay full credit to typescript game
[04:00:41]  for realize the full takeover was never going to happen so complete compatibility had to be baked in from the start just because turbo 8 is dropping typescript doesn't mean you can
[04:00:50] 't write your client code in it or use any other library that enjoys it the mix matches wonderful okay see i don't see anything controversial here but i i want to understand
[04:01:06]  what he means by dropping typescript this is the this is the controversial part so he's dropping it from the library okay yeah yeah i mean this is weird i mean this
[04:01:37]  is weird on on two accounts because like okay is he are there external types still like like you as a consumer get types right the the the the the reason that i'm
[04:01:59]  asking about this is that that ghost on the no they got rid of they got rid of them there are no consumer types oh that's okay that's that's that's that
[04:02:16] 's just stupid i i i agree with everything he said i don't if i open up projects i often i'm like i don't want to use typescript i like
[04:02:24]  pain the you know i but on the other hand would would you removing types from the library has two problems okay removing it for contributors is i'd say misguided because you
[04:02:40]  want to like it it makes people coloring the lines better right it's kind of like the ultimate linting tool so it's like i think there's a lot of benefit
[04:02:49]  from having a library that's managed in typescript i do see a trade-off there where it's like like solid start i kind of didn't want to do a
[04:02:57]  lot like there's a lot of runtime stuff a lot of stuff like i kind of didn't like doing the typescript as much for it but you know i patch with js
[04:03:05]  doc where it makes sense you know the end but external types is is non-negotiable i mean why would you just he says you can still use the library with your
[04:03:15]  type script but what you do you just like write your own types star any it keep them into things like the library's got to have types otherwise like what are you doing
[04:03:24]  right um like i may dislike typescript and agree with everything he said in that post but this is just stupid like why it's like it's like it's like here
[04:03:44]  community let me you know kick you in the balls you know like uh this is like yeah okay yeah removing touching your own coding is clownish epically misguided behavior
[04:04:06]  yeah but forever to each their own removing types from a library that other people have to use however is just user hostile dick watery yeah yeah i mean that's that's that's
[04:04:15]  what i'm saying it's it's literally like going around and telling all your users to get in a line so you can kick them in the balls one at a time just
[04:04:27]  yeah i don't agree with the first half but the second half like there's there's just different use cases i can dislike typescript as much as i as i want
[04:04:39]  but like this is yeah i feel he must be doing some kind of publicity stunt or something because i i don't even i mean some of dhh's stuff is controversial but
[04:04:51]  i always feel like there's like a business angle to it because otherwise this just seems like just moronic like like it's not even like questionably so yeah i mean
[04:05:06]  this makes more sense why people were talking about this same obvious that it was like my responsibility as a library writer to embrace typescript because a little work on my side and
[04:05:17]  every one of my users could benefit so solid almost from when it was first open sourced has been built on typescript exactly same ob exactly yeah i think i saw somewhere someone
[04:05:31]  said he was releasing a new product like maybe this is how he gets attention for product releases he does something like that is like unquestionably stupid so everyone can compile
[04:05:43]  on and be like why are you so dumb dhh right and then he then he's like come check out my new version of um what was it what was their stupid email
[04:05:53]  client yo or something no hello okay yeah it's almost certainly a marketing stuff yeah because it's like hey it's hey yeah okay yeah like yeah i i it's the
[04:06:14]  only thing that makes sense because like no one it's like i he's probably taking plays out of like the elon musk playbook where you like as i said
[04:06:28]  oh when i said i don't like typescript uh yeah so sorry sorry i'm gonna refresh my page one more time it's just pissing me off again one sec
[04:06:58]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Sorry, I've been like gone
[04:10:29]  for like three minutes, haven't I? Okay, let me try answering this question. Okay, sorry about that. Okay, I was trying to find, I was
[04:10:44]  going through my notifications trying to find my answer to this question. But the gist of this, but the gist of it was TypeScript isn't perfect, but
[04:10:56]  the gist of it was TypeScript isn't perfect and it's okay that it's not perfect because JavaScript is a weird language. So knowing that sometimes I'm like
[04:11:06] , you know, so knowing that sometimes I just don't like fighting it because I'm like, you know, it's a hint, it's a better linter.
[04:11:11]  And if I'm going to have to work a bunch to fight it, it's just not worth it. I'll try and I'll try and I'll try and
[04:11:17]  I'll try and I'll try and I'll try and be as strict as I can be for code that needs to be used by other people, but I'm in a
[04:11:24]  position where outside of my library work, I don't actually have to use it for other people a lot. Like most of the code I do is either library, which
[04:11:32]  everyone uses, which should always be TypeScript or it's, um, or it's, uh, like prototypes and demos and stuff like that, which in those cases,
[04:11:43]  I don't feel like using it most of the time. The challenge is that because TypeScript is flawed, um, it's a, it gets a little bit annoying
[04:11:52]  when dealing with like what I'd call TypeScript fans or purists, because it's like, they never recognize that TypeScript's flawed because it like undermines their like
[04:12:03]  sense of reality. So it kind of adds this kind of extra layer to it because it's like, if you try and treat TypeScript as more than a linter and
[04:12:11]  like as the truth, well, it's going to fail on you. Like there's things that it can't handle that JavaScript can handle. So like, you know
[04:12:19] , it's kind of like, it's kind of like the stuff that made led solid to having those like type narrowed control flows. Like it's basically an impossible problem
[04:12:30]  to solve. And in the end, you're probably should just use the non-null operator and move on with your day or, you know, set up some kind
[04:12:37]  of type guard where you need to. But instead we're going to jump through like a dozen hoops just to like, make it kind of not work, you know
[04:12:45] , like it works well enough, except, you know, there's edge cases. Like basically it's impossible for TypeScript to do things. So we can cater to
[04:12:56]  it the best we can. But when the fact that you have to like write extra stuff to get it to obey you is, it's just something that I could never really
[04:13:08]  stand behind. Right. Like, it's just, it's, it would be crazy for a library not to have types, but I mean, I think we'd
[04:13:17]  just be in a much better place as everyone just acknowledges how flawed TypeScript is. Like, yeah, I was like talking the whole time too, you guys.
[04:13:38]  I gave a longer explanation of that. Okay, well, I mean, that, that, that changes things a little bit, right? Because the scenario here is like
[04:14:02] , like Rich moved, removed a lot of TypeScript from Svelte for JS docs. Like he didn't, he didn't want to deal with a compile stuff,
[04:14:09]  build stuff, but everything Svelte is still typed, right? And especially for external users, it's definitely typed. I think from a contributor standpoint, it's
[04:14:21]  not great, but it's not, it's not this, you know, you, if there's no external API that people interface with, then like, it's just
[04:14:34]  sloppy. But I mean, then I guess from marketing standpoint, he's, he's, he's got there thing is, I think at a certain popularity, it
[04:14:43] 's not about how trustworthy the project is. Because like people will stand behind DHH stuff regardless, so like, he, people just sit there to kind of see what
[04:14:57]  happens. So I think, I think he's actually perfectly fine doing this if this is just a marketing move. I mean, it's, it's dumb, but
[04:15:07]  as I said, so is a lot of stuff. Yeah. I mean, again, internal stuff, right? Well, you know what the problem, the problem is
[04:15:29]  that JavaScript can express stuff that, and was used intentionally in many cases in ways that other type languages like don't allow. So it's like, it's, it's
[04:15:42] , it's like, if I was using C sharp, then I would use C sharp and I'd accept it. But I'm using JavaScript, accepting, this is
[04:15:51] , this is part of DHH, DHH's argument, like JavaScript is kind of, even with its warts kind of beautiful in the stuff that doesn't work with
[04:16:01]  types properly, because it doesn't work with types that like JavaScript was created, as like, back in the day, everything was typed. And then JavaScript and these like Ruby
[04:16:10]  ish kind of looser, like the scripting type languages kind of came out as a, as a, like a pushback against it. Like we wanted more
[04:16:18]  dynamicism in our coding and be able to do more, you know, like easier, kind of like less rigid stuff. And that's what makes JavaScript great. So it
[04:16:30] 's, it's the fact that it's kind of impossible to close the gap. It's perfectly fine that we want types. Now JavaScript is used everywhere. It's not
[04:16:39]  just like the scripting language. So like, it's good that we have TypeScript, we should use it. I'm just saying it's like, as long
[04:16:47]  as you understand that it's not JavaScript, that it's a subset of JavaScript, not a superset, then you're like, again, you're fine. Just,
[04:16:53]  this is the kind of thing that TS people will never generally acknowledge though. Like, I, as I said, I think it's what we need is like, I
[04:17:04]  think it's good, but I also think that you have to acknowledge that it's like imperfect in a way that in some cases, you're reconcilable. So
[04:17:15]  like, don't even try. You can't write them still in templates. I thought they fixed that kind of stuff. Well, JSX. Yeah. I mean
[04:17:44] , it, I'm, I am, I am sold on that people should be using TypeScript and, you know, use it at your job, use it for any
[04:17:55]  code that anyone else uses. Definitely use it for your library. If it's open source and want people to contribute to it, you know, definitely give people types. Like
[04:18:04]  TypeScript is one, this is not debatable. It's just like, I can personally agree with a lot of the feelings that DHH has. You just,
[04:18:13]  you don't, except for publicity, you don't do this. You just, you don't, except for publicity. You just, you don't, except for
[04:18:17]  publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You
[04:18:18]  don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don't,
[04:18:21]  except for publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity
[04:18:26] . You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don't, except for publicity. You don
[04:18:30] 't, except for publicity. You don't, except for publicity. Yeah, I mean, people like hot takes, right? But basically, typescript incredibly helpful,
[04:18:52]  and also pretty fundamentally flawed, right? People get dogmatic about these things, yeah. People talk about the fact that, like, didn't DHH create Ruby,
[04:19:05]  and yeah, or, yeah. So, yeah, this is, this is, this is a topic. Um, it's all good. I don't know if I
[04:19:16]  have much more to say with this. If you go through this, you'll see tons of people quote tweeting quote tweets. "Accessible." Yeah, I,
[04:19:27]  this is a great, great tweet from Rich, though, yeah. I mean, it is, it is just, yeah. I don't know if this is actually the
[04:19:44]  case with Turbo, as we talked about, but, yeah. "This is the best take, by the way." Okay. Let's, let's see what we
[04:19:50]  got parasocial. Alright. "Remove DHH for code of contact violations." Oh, man. Well, I mean, it worked. People are, people
[04:19:55]  are heated. People are, people are heated. Okay. Oh, man. Oh, man. Oh, man. Oh, man. Well, I mean
[04:19:58] , it worked. People are, people are heated. Oh, man. Oh, man. Oh, man. Oh, man. Oh, man. Oh
[04:20:01] , man. Oh, man. remove DHH for code of contact violations oh man well I mean it worked people are people are heated dhh close the issue this
[04:20:36]  issue probably needs more attention only six thumbs up so far I don't know I'm not involved in the community so I don't have much to say but that's that's
[04:20:51]  hilarious yeah I mean there will be at some point a pushback probably but we're very much on the type retro phase right everyone rejoiced that javascript in these
[04:21:17]  languages didn't have types in the 90s paid the price through the 90s in the 2000s by the time 2010 came out it was like enough is enough there there
[04:21:27] 's got to be something else but I think it's going to take about another decade but 2030 we can talk about what comes next oh they blocked thumbs up yeah this is just
[04:21:41]  like so I guess the original issue just shows like how overwhelmingly negative the opinion is on here yeah it's just it's all good okay let's keep on going list returns
[04:22:04]  maybe I'm an optimist I don't know or does that make me a pessimist I'm not sure okay a couple more things we already talked about vcomp check
[04:22:20]  it out amazing I'm pretty stoked about this one because I know the people personally on this but Sunil is one of those personalities that you really got to experience firsthand to really
[04:22:34]  you know fully appreciate he's just a genuinely great guy who has really good energy um and is kind but honest at just the the right kind of level he uh one of
[04:22:48]  my favorite things was um back when I was looking at uh cloudflare for a while um and he he basically was trying to convince me to join the cloudflare team
[04:23:02]  um and he was like look it you know it's one of those situations again I was talking about passing ships where it's like you want these opportunities to work with people
[04:23:10]  and you're like it would be amazing if you know we're at the right place in the right time right obviously I ended up going to Netlify working on solid and
[04:23:16]  open source but he was like look I'm working on Wrangler 2 I love it what I did was when I I was using Wrangler 2 or so using Wr
[04:23:25] angler was so frustrated that that I needed to fix it so I applied for cloudflare so just so I could rewrite Wrangler so I could be like less
[04:23:34]  annoyed with it he basically joined cloudflare and he's like that's why I'm here you know these things come and go you know project project you know just it's
[04:23:42]  it's about like being there at a moment in time and making things happen he's like come join us we're doing really exciting stuff and he's like he he basically made
[04:23:52]  a joke but I don't know if he was serious but the he shipped angular to or so Wrangler 2 the CLI and then he put in his papers he
[04:24:00]  resigned basically the following week like he came to do what he said he was going to do and I don't know I as I just love that about him and it's like
[04:24:11]  very representative of his personality anyway he started a startup for doing real-time stuff I was at Future Front Ends Finland and they did a demo where they're doing some
[04:24:23]  like drawing thing with all this like real-time interactive stuff and I've spent the whole 30 minutes of his talk even though it's like very interesting just playing with this drawing
[04:24:31]  app like doing shading and different kind of texturing it was I'm super into it but what I'm getting at is that he's pulled together an amazing team of people
[04:24:43]  for for PartyKit and I wish him every success I love the slogan to everything's better with friends right this is it's about real-time like WebSocket style like
[04:24:55]  communication with interactive applications but yeah Silvia Vargas as many of you know worked at StackBlitz and we got Yanni as well around a lot of stuff around the
[04:25:11]  React ecosystem and AI company he's been working on the last few years this this is a great team and I'm I'm I got to hang out with them in Finland and
[04:25:24]  we and I got I actually somehow ended up at one of their team kind of dinners um that they they put in the bill for so very again thank you Sunil
[04:25:34]  um but yeah just a great group of people building something really exciting so I I wish them the best all right funny funny yeah Sunil did work on the React core team for
[04:25:53]  a while as well um and what else we got here that's so that's big news what other big news oh yeah bun 1.0 um somehow this got oversh
[04:26:14] adowed by the typescript conversation and uh that's a real shame because uh this has been this been coming for the last little while um we've known it Jared is a
[04:26:26]  machine I'm excited to try this now that it's 1.0 to be fair I looked at some of those early beta I think I pulled down I had some issue and
[04:26:36]  then I just gave up you know me I'm not very text savvy sometimes on the configuration stuff I have low patience but um it's it's 1.0 um I don
[04:26:46] 't know how they make that judgment Jared's kind of a madman even when I we were like trying to figure out you know when he was going to open source it
[04:26:56]  it was unclear I wasn't sure what the criteria was why that was a moment but it doesn't matter bun does amazing things um very very cool uh he goes over the whole
[04:27:06]  thing in this article where he talks about how bun's a bundler a transpiler um package manager basically it does all the the pieces it's kind of like what Rome
[04:27:16]  plus like was meant to be and it's all written in zig it's super fast um it's really quite incredible what he he and the team have accomplished um uh he has
[04:27:29]  full he has support now for all the full stack frameworks he's got solid start now you can run that in bun i haven't tried this yet but um we were talking
[04:27:38]  about it i said vinci which i talked about earlier in the stream was inspired by bun app basically it's that app level built on buns bundler that's what vinci
[04:27:49]  is it's a javascript port of it so like this is just yeah where he puts his focus on performance nothing touches it i i remember i as i said i
[04:28:05]  just don't don't bet against this guy because when it comes to these kind of things he's going to he's going to always just throw in but yeah what do
[04:28:15]  we got esm and common gs compatibility web apis hot reloading plugins yeah i i think one of the most interesting things is how he has to juggle bun specific
[04:28:30]  optimized versions with node compat because everyone is getting to a point where they kind of want to build towards a common standard but some of those apis are just in like they're
[04:28:39]  slow because the api shape like jared jared's complained a lot about this uh over various channels where he's like he like i remember talking about the streaming stuff
[04:28:49]  he's like it's just the design of the api and how extensible it is in node makes it very hard to optimize so i think bun has a lot of its
[04:28:57]  own apis built in so that it can have better performance but it's it's a challenge of like the standard falling around node largely even with stuff like winter cg
[04:29:09]  so it's like it's an interesting piece because maybe at some point when you know bun gets to a certain level of adoption you know people can just make the make the make
[04:29:22]  the move right i mean it's just it's just fast at you know a lot of things sure these are benchmark fast we were talking about this earlier where we're seeing
[04:29:34]  i've seen benchmarks are you know but benchmark fast is usually the things that people can just observe very easily so it does make a difference um when you can just go test something
[04:29:46]  and just feel that speed ultimately is it as big of a jump over some of its competitors hard to say but it definitely tests well so um yeah i mean you know at
[04:30:01]  some point you just wonder why webpacks even still here um native build see he never stops eh bun provides native builds for mac os and linux windows so now yeah
[04:30:16]  uh congrats jared i know you've worked very hard on this very very very cool stuff yeah he didn't actually highlight it here um if you're using by before
[04:30:33]  one part there's a few changes since bun zero one basically he uh solid missed 0.8 as well i he didn't put solid start in here but we we got released
[04:30:44]  also in between this shift so yeah apparently you can go use solid start with bun so exciting yes i i remember as i said back then i i think that might have been
[04:31:00]  not uh not the smartest use of resources dino already has like a first well second mover but like first person to change the thing advantage um but yeah yeah yeah no exactly especially
[04:31:18]  especially for things like what i was getting at is like dino and bun did a lot of benchmark comparisons where each were faster at certain operations and certain scenarios and i think
[04:31:30]  like like i talked a lot with luca and i think like logically speaking some of the decisions that dino made that might have made it slower and some of these benchmarks made
[04:31:41]  more sense for an application architecture but like it wasn't like bun wasn't faster than node and right up there anyway so it's like it was just one of those things
[04:31:49]  where it's like button is especially good at benchmarks i didn't see this what is the next js beat stuff did i miss did i miss the next js beat stuff what
[04:32:14]  is what is this what did how did how did i miss what am i looking for here someone share a link no what am i doing uh veet i was thinking of
[04:32:35]  it because veet and solid have that same underscore js is he trolling oh i see what he's yeah yeah yeah yeah yeah yeah yeah yeah because we're talking about
[04:32:56]  we're talking about bundling yeah because i mean they wouldn't use veet anyways because they they have uh turbo pack or whatever and um i'm not convinced that the
[04:33:11]  react um how should i put it i'm not i'm not convinced that the react ecosystem like certain key uh players are very much into veet because of the maybe because the
[04:33:27]  view background you know like it came out of the view ecosystem i mean i'm i'm happy the comp this year has kent c dodds as i said react was
[04:33:37]  not very represented um i've actually kind of used that in my past in my talks where i can get away with being a little bit more inflammatory towards react generally just because the
[04:33:47]  you know the audience but um oh how to update from veet to nex that's hilarious oh okay yeah okay okay well that's that's funny um i let's
[04:34:15]  see let's see if i can grab that oh yeah i i i saw this uh i saw nexles i never fully appreciate veet until i use next js honestly
[04:34:35]  the approach that the view community has done with like the veet nitro on js kind of stuff is it's tricky because sometimes the proprietary solution or not even proprietary but
[04:34:55]  like the popular solution but that's not as reproducible usually ends up winning because you know like next built it and it's their thing but this might be a case where we
[04:35:09]  can really bring up the bottom bar right because the way i see this is all part of a bigger narrative to say that meta frameworks aren't necessary like our aren't it
[04:35:21] 's more like our definition of frameworks are shifting rather than that like you need to use next js that's that's where where i'm at at least i'm i think with
[04:35:34]  tools like veet you know that's possible yeah i mean react is the most react is the most popular framework it would be most most uh agnostic projects the react
[04:35:55]  should be um the highest unless it's like a weirdly disportional thing like i i i've heard in the past that in astros solid and react numbers are a
[04:36:08]  lot closer than you'd expect but like i think that um yeah okay lee rob is this the other piece of it okay here it is moving from a beat app you can
[04:36:33]  see clients would react okay i mean this is a fair this is a fair position it's like how do you i i i mean i i was critical of this right now people
[04:36:46]  are trying to move from client-side only apps to next and they just don't know how to get there um so i i think this is this is fair but let
[04:36:53] 's see what what did evan have to say about this they removed their cra to next guide that's interesting i wonder why see i feel like there'd be a lot of
[04:37:05]  people still on cra or you can switch to a meta frame or build on top of it get the ssr benefits and still enjoy the vtx did he get ray
[04:37:19]  showed he so did well evan well anyway yeah this the the this is the middle of like the david and goliath story it's just this is the problem
[04:37:37]  when you have the most popular like if all the most popular solutions across the different categories all align there's like more people are going to want to like tear it down yeah
[04:37:53]  i yeah it's kind of interesting being in the like the eye of that storm anyway yeah this is this is interesting yeah okay yeah that's that's more of what i
[04:38:24]  would expect right to be fair that's only uh uh what is that 8x versus like 2000x or whatever our regular solid downloads are right called it an upgrade okay well
[04:38:51]  there you go yeah it's all good just another blip on the old javascript radar anyway i think we're we're good for today i don't know what i
[04:39:03] 'm streaming next week yet i i'm i i know that i got some guests coming up that i'm pretty excited about but i haven't actually locked anything in for next
[04:39:15]  week so uh we'll we'll see how it goes i've been working on a lot of stuff so maybe some good content um but to kind of get into but i've
[04:39:25]  been also doing i've been in presentation mode the last week getting ready for vconf so it's like i need a little bit more time to do some actual programming so
[04:39:35]  anyway oh i i i next week do we doing tailwind drama possibly okay what what's this oh did he write a did he write a response oh okay sorry typescript
[04:40:04]  drama not quite over one second last thing see i'm i'm like out of the loop oh there you go see i was trying to do something this week instead all right you
[04:40:19] 're like obviously he did right yeah part two all right so literally is actually virtue of their favorite paradigms yeah once i look at people with passionate preference and smile it
[04:40:34]  isn't great that people care so much about their craft that they volunteer to extol the benefits of their least favorite tools yeah blah blah blah that's fine now yeah active
[04:40:53]  contributors users of the framework yeah those people have legitimate concern uh oh interesting yeah so he he actually that's good press theo and uh theo and uh rich got got
[04:41:30]  uh got mentions uh wow adding typescript back pull request for deleting the repo considerably new variety type script is javis sprinkles the appearance of type safety you
[04:42:34]  can see yeah it is funny though because with rich being one of the people to say this if you if you know about rich and what svelte's done with types and
[04:42:50]  stuff you can actually like it's not he's trying to point this out as being like typescript purists or whatever like zealots but the truth of matter is
[04:43:01]  no like even people who dislike typescript to a certain degree this is kind of not a smart move it's it's fine i think in time maybe he'll realize that
[04:43:19]  maybe he'll realize that maybe not so what what was what's what was theo's pr adding back typescript yeah okay uh yeah so yeah this is how you get in
[04:44:00]  the middle of things uh oh man i mean reading this makes it sound like it wasn't a publicity stunt he just really doesn't get it uh all right it's
[04:44:28]  all good okay i think i've seen enough you all uh have have a good weekend i'm i will as well um see you all next week all right bye