---
showLink: "https://www.youtube.com/watch?v=s4Rd2snXSr0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Looking at Nuxt3"
description: ""
publishDate: "2022-07-29"
coverImage: "https://i.ytimg.com/vi/s4Rd2snXSr0/maxresdefault.jpg"
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

[00:00:00]  Today I'm excited to take a look at Nuxt, Nuxt 3 specifically, and Vue. I have a long history of winding in and out of Vue
[00:00:16] , trying a bit here, and then moving on, and seeing some new changes, and coming back, and whatnot. I played around in Vue a bit at the very
[00:00:26] , very beginning. It reminded me a lot of Knockout. It had a lot of similarities. Then Vue 2 options API, for some reason that didn't speak
[00:00:37]  to me so much, and I did look at it a bit, and I built apps. If you guys know, the Hacker News demo that I make on all the
[00:00:48]  different streams was actually originally made by Evan Yu. It was actually a Hacker News demo from Vue that I ported into Solid, and then I ported into
[00:00:58]  every other framework for a little bit of history. I have to admit, over time, I've gone farther and farther away from Vue, even though the Composition API
[00:01:10]  came out. Honestly, that's what I've been waiting for since the very first day I ever saw Vue. I wanted the Composition API. And I've
[00:01:17]  been so stoked to see the kind of transformation that's happened in that ecosystem. And I know it's been a challenge, you know, as people get accustomed to this stuff
[00:01:30] . So, and I know it's caused a bit of, you know, some work to be done. I know it was a big move, heavy lift to go
[00:01:37]  from Nuxt 2 to Nuxt 3, for example, and I'm kind of interested to see where this all lands. Because I think things on the Vue side have
[00:01:48]  been going in a great direction, and I'm really stoked to learn more about it. I do have my hacker demo example ready. But yeah, so we're going
[00:02:00]  to get started up here in just a minute. Again, I'm going to try to push this week in JavaScript to the end of the stream. I'm just going to
[00:02:07]  go shout out on socials, so that people will come and join the stream for a minute here. Let's see, let's see here, let's do stream starting
[00:02:19]  now. Yeah, I'm a little bit behind schedule. I was a little rushed, because I picked up my old Vue 2 demo, and I realized just how
[00:02:29]  out of date it is, honestly. And basically, I tried in the last hour to rapidly upgrade it to Vue 3 while learning Vue 3 in the process.
[00:02:48]  It's not 100% working, but I managed to basically be right down to the last minute before the stream started doing this. So let's see here. I'm just
[00:03:00]  going to get this going out on social. All right, there we go. Cool. All right. Well, now that we're done just wasting everybody's time while
[00:03:15]  people join the stream. Yeah, hey. Let me... It's so funny, because I was like literally developing, working on this like two minutes ago. So I'm
[00:03:27]  just cleaning up a little bit of extra stuff, so I don't show too much on the stream, so to speak. Let's invite Daniel on the stream. Well
[00:03:41] , I'm very fortunate to have. He's been working on Nuxt for the last couple of years, getting Nuxt 3 out the door. And let's welcome Daniel
[00:03:50]  on the stream right here. Hey, Daniel. Hey, Ryan. How are you? I am doing pretty good. As I said, a little bit of hectic
[00:03:59]  morning. I do this to myself, though, because I'm always trying to cram in as much stuff as possible. So I'm just stoked to be able to
[00:04:09]  actually put this time aside and actually catch up on Nuxt to view all the stuff that I've been missing out on for the last couple of years, to be fair.
[00:04:18]  I can't believe you've learned it in the last hour. That's phenomenal. Sort of, yeah, just picked up Vue 3 in the last couple of minutes and
[00:04:27]  migrated an app. That's just what I've done with my day so far. Yeah, I mean, I've looked at the Vue 3, like, I
[00:04:35] 've read the release announcements. And I kind of like, when I saw it, I've written about it a bit. Like, I was just like, yeah, okay
[00:04:43] . There's like in a kind of mapping between composition, API, hooks, solid reactivity, salt reactivity. They have like the similar kind of language pieces. And
[00:04:55]  this app was fairly simple. So the biggest thing for me was kind of like, I think the templating hasn't actually changed very much. So that was actually kind
[00:05:04]  of a benefit that I was able to grab the old Vue templating. But yeah, it was definitely, I created my first Vue app, just, you know
[00:05:12] , just did the CLI, went through that, made a TypeScript project. First time using TypeScript and Volair with Vue. So that was really cool.
[00:05:21]  And as I said, that's all new for me. So I was like, oh, wow, the types are working. I pulled in the types and I was
[00:05:28]  like, okay. Uh, you know, a lot of work has gone into this stuff clearly. Uh, and a lot is, a lot has changed. And honestly,
[00:05:35]  that is the thing that for me makes you feel sort of welcome in a new programming language or framework when you're typing and you start getting hints, like this thing can take
[00:05:44]  these props and it's like this, and this is what you do. It feels like you're somehow caught up and Johnson has done an amazing job with Volair.
[00:05:54]  Just making sure that things in the template, like your act, like your events are typed. So you can type, you know, at, um, whatever at click.
[00:06:03]  And actually the, the method that you pass to it has to be of the right type. So it has to expect the right kind of thing. That's the, I
[00:06:10]  just love it. I think that's, that's amazing. Whenever, whenever someone's taken the time to do that, um, it just makes all the difference.
[00:06:17]  Yeah. And like TypeScript historically has been a challenge for like, if you, if you're making a custom language, templating DSL, I mean, that's
[00:06:28]  on you now. So you can't like rely on the built-in JavaScript tools and that you, you have to do some really creative stuff. Um, I worked on
[00:06:36]  Marco, uh, you know, and they actually have a custom templating language and, uh, don't have TypeScript support, but we started working towards it.
[00:06:43]  And that was the one thing I started, we looked a bit at views, uh, language server stuff and the Svelte. And we were just like, oh wow
[00:06:49] . Like you co you actually compile it to something different. Oh, it was like JavaScript. And then it, the type, like it knows the TypeScript so it can
[00:06:57]  do it. But like, it's like a whole, it's like a different compilation just specifically to get the types working. And then suddenly, you know, your
[00:07:06]  ID can just map it all together. I mean, this is a really clever work and really, really useful work. Sometimes I do think that that, that kind of
[00:07:14]  work it's, it's almost, um, as you say, it, it, it, whenever you create types for something, particularly complex types, you want them to
[00:07:23]  match the reality. So they, they have to look like they are the real thing, but actually the, what's behind it and the code that's behind it can be
[00:07:32]  far, far removed from that. That the, the, it's a, it's a, it's a, I think probably a kind of, um, good
[00:07:42]  hearted lying TypeScript often library authors resort to good hearted lying. They're, they're, they're representing something that's true, but that the way they're
[00:07:50]  doing it is maybe not, it can't be in, um, in exactly the way that thing is. Yeah. I mean, it is difficult. I, I,
[00:07:58]  I've, I've worked like someone, uh, has said, um, that basically. TypeScript pushed a lot of the complexity and difficulties from the developer onto the
[00:08:08]  library maintainer and, and, and like, that's, it's a, it's a true story. You sit there and you're like working through these things and
[00:08:13]  you're like, oh man, how am I going to type this? Cause JavaScript in some places, like sometimes this will kind of push you to like maybe build APIs that
[00:08:20]  are more friendly or thought out in a certain way. But on the other hand, you're just like JavaScript is still JavaScript. So you're like using these things and you
[00:08:26] 're like kind of stepping back and you're like, okay, this is the, what we want to represent and so people can use it. But this is like what
[00:08:33] 's happening in the background. So sometimes it's actually very useful to actually separate those things and have like, maybe it's funny, even code bases where the intern there's
[00:08:42]  internal types to help the core, the library maintainers write their code and external types to help people use the, use the code. And those two things don't have to
[00:08:51]  be the same thing. Totally not exactly. So yeah, yeah, precisely. And often they, they are quite different because you might be doing some, some more complex
[00:09:01]  things. We recently implemented a magic keys feature. So we, we have these keyed functions that have to have a unique key and they, they match data between server and
[00:09:11]  client. So we generate a key and we pass it by a, a transform to the function and the fun and obviously internally in the function. How do you type that
[00:09:22]  you're, you're receiving something. It might receive any number of arguments and they might be a various different types, depending on whether the user is passing it or whether the
[00:09:31]  compiler is sticking. Uh, like a string in what a user user could pass an option, like a, an object that a compiler might pass a string in, in
[00:09:40]  that case. So how do you, how do you have type safety? You don't just want to say as any and just know as the developer, what it should be
[00:09:48] . You have to have some type safety, right? TypeScript is meant to actually help us write better and more less fragile code, but, um, figuring out how to
[00:09:57]  do it. It has runtime consequences of course, how you choose to architect that. Yeah, no, and, and that's the thing, I love this conversation.
[00:10:04]  Cause this is something again, uh, people maintaining work on libraries and understand very, very well and go through this and we just jumped straight into it. This is like one
[00:10:12]  of those topics, you know, like you're just like sharing a war stories and you're like, oh yeah, TypeScript. Yeah. There was that time. Um
[00:10:20] , but yeah, let's, let's circle back around to, to, to Nuxt for a minute and, and, uh, you know, view three and that
[00:10:26]  that kind of focus. Can you tell me a little bit about how you first got involved in the project and, uh, like, like you, I think you mentioned
[00:10:34]  to me before the show that you in, you were a user of, of Nuxt before all of this. Yeah. So I guess, um, so it's
[00:10:42] , it's been a bit of a, I could take you back to, to, um, ancient, ancient times, but, um, I was, I was running
[00:10:51]  a small creative agency. Um, and then we pivoted into a software service. We used Nuxt for that. So I was a very happy user of Nuxt
[00:10:58]  and my whole team, I, I basically forced it on them. I think it was, uh, we were sort of using some, some prehistoric tech at the
[00:11:06]  time. And I said, we're using Nuxt from now on. Uh, we, so we built the whole tech stack and, uh, we really loved Nuxt
[00:11:13]  and I started helping out contributing. And, uh, and that was really my route into, into, uh, being more involved on the framework. So it's probably
[00:11:22]  been about a year and a half now that I've been sort of full time, uh, working on, on Nuxt as, as a framework. Uh, and
[00:11:29] , uh, and all of that time has been focusing on Nuxt three and we've been working on that project for quite some time because it's, it's motivated.
[00:11:39]  I think that obviously the big change, the big move is between view two and view three that mandated a, an update. Um, and at the same time, there was
[00:11:50]  a move from web pack four, web pack four came end of life. Um, but at the same time, you can't upgrade from web pack four to a pack
[00:11:58]  five in a minor release. There are far too many breaking changes to an entire ecosystem. And then obviously there's post CSS seven to eight. So lots and lots of things
[00:12:07]  meant there was a little bit of a cliff edge between, in terms of breaking changes for an ecosystem between Nuxt two and Nuxt three. Um, and that's not
[00:12:16]  even mentioning, um, what we came to do with it. There were, there were a lot of dependency pushes to say this is, there's a big break here
[00:12:25] . There's a bit of a, um, an opportunity to do something new. Um, and at the same time, I think for a while we had been working on
[00:12:35]  thinking about serverless with Nuxt and what, like, what's the future? Because Nuxt was built as a, a node build tool, um, with a
[00:12:46]  node runtime server and then a view, uh, client. So the idea was, and you know, we, we had a, a static, um, generation output,
[00:12:57]  which was sort of purely the client and even a more advanced full static generation, which was similarly only the client. Uh, but that was, I mean, that's
[00:13:08]  a paradigm that is, that's, um, that's we're moving away from, right? More and more. We're thinking about microservices. We're thinking about
[00:13:16]  edge. We're thinking about different ways of rendering, thinking about more complex and more interesting kinds of things. So islands and partial hydration, and how can we squeeze the best
[00:13:26]  performance out of, um, you know, that's right. So it's, uh, it must've been really, it must've been a really interesting time period
[00:13:35]  to kind of like, like go through that transformation. Cause Nuxt, uh, I'm trying to remember when the project first started. Uh, uh, but I have
[00:13:41]  to imagine it, it dates back to like 2016, 17 time period. I don't know exactly, but I have to, it has to go back there somewhere. I
[00:13:49]  imagine. Like the beginning of Nuxt itself. Yeah. Yeah, exactly. Yeah. Yeah. Yeah. Because I mean, that, that was when all the,
[00:13:58]  it was the same time, uh, very close to Simon Next came out and all, like all the kind of like, let's actually make it easy. Doing server side
[00:14:05]  rendering for, um, uh, JavaScript framework was never just like an easy task. It required, um, like specific configuration and like, you had to kind of know
[00:14:16]  what you were doing. And yet like, it was the, in my mind, the one place where you could actually be like, look, we have one solution. Like
[00:14:24]  here's the whole package because there's all these different use cases. You have to kind of envelop them all. And, and something like, uh, next or Nu
[00:14:34] xt was like, look, now you can, you have a one-stop shop. Like this, this is you building an app with view. This is a way you
[00:14:40]  can, you can do that. Uh, you know, we can talk about the different trade-offs and stuff, but this is your starting point. And, uh,
[00:14:46]  it's interesting because I maybe, I wonder if it was different at the beginning. I don't know, but like over time, the whole, everything else is kind of
[00:14:56]  caught up to that mentality. And, and, and, and now it's been actually in the last couple of years, uh, space and a lot of movement,
[00:15:03]  a lot of, uh, like innovation things pushing for different partial static ISG, whatever techniques things, ways to hook into the infrastructure ways to, uh, um, different
[00:15:16] , as you mentioned, all those different rendering modes and stuff. And I mean, it's kind of interesting because you start a project going, okay, we know we're
[00:15:23]  going to make a big migration. We know view two to view three is a big deal. And then while you're in the process of doing that, everything else starts
[00:15:29]  changing. Suddenly everybody's like, yes, the edge. What do you mean? Oh, haven't you always been on the edge? Like, like, and this whole
[00:15:36] , this whole kind of game of like, you know, as soon as you commit to doing something large, um, you know, everything else is going to change at the
[00:15:45]  exact same time on you. Yeah. Yeah. Yeah, totally. Like it's, it's, um, and, and I mean, there's always the danger
[00:15:52]  with that, right? That you, um, you pivot too many times. Um, and so you're always playing catch up. But it feels like we just managed to
[00:16:02] , um, to hit the wave. So I think what we're, what we're building now, what we have been building with say Nitro, um, as
[00:16:09]  the, the server rendering engine for Nux, that feels like we haven't had to change the, the purpose and the philosophy. Like it feels like we've,
[00:16:17]  we've managed that. So it's now about shipping it, uh, you know, getting our, our stable version out. Yeah. Um, you're, you're
[00:16:26]  an RC right now, right? Uh, it's, it's like, it's getting there. It's getting pretty close. I mean, it's getting, getting
[00:16:31]  close. People ask me, um, at, we, we, we, we put summer, we put actually, we put mid summer, mid summer. Um, but
[00:16:38]  someone figured out that was actually an astronomical date, uh, which was not the intent. Um, and, but yes, this summer it's, it's, uh
[00:16:46] , it's, it's, it's stable. Okay. Yeah. I mean, yeah, I, I, I, I didn't check out. You, you
[00:16:53] , you're, you're definitely a few RCs in, so it looks like stuff is very close to, to the final place. I, mind you, this is
[00:16:58]  just me looking at the website. I, as I said, I have not tried Nuxt yet. Um, I, I, I, I started playing with Vue
[00:17:06]  a bit again, very recently, uh, a week, no, a week and a half ago or so. I was trying to update some benchmarks and I had this
[00:17:14]  really old view to the thing. And I was like, I, I tried everything, a server rendered thing. And it wasn't using like a framework or beat or anything
[00:17:21] . It was just like some handwritten server rendered stuff. And then like, okay, move to view three. And I just, I couldn't figure it out. I
[00:17:27]  was like, okay, this became this package. This became this package. Why doesn't this work? And yeah, I, I, I managed to get like one
[00:17:35]  of the benchmarks working and I just posted the results. Cause it, it was so important to me. Cause I want to show, I was working on some small little thing
[00:17:42]  for solid, some like, like thing. I was like, Oh, I think I improved the performance, like a small bit. And like, it was like, it
[00:17:47]  was small as like, maybe do like a two or 3% improvement on this benchmark. Not a big deal. And while I was in the process, I was like
[00:17:54] , Oh, I should bump the version of react and Svelte and whatever. And I hadn't touched view. Cause I, I tried to bump view and I didn
[00:18:00] 't know how to do it. And I was just like, okay, I'm not, I'm not going to touch view. So I did, I did react and
[00:18:05]  Svelte and both of those libraries had actually made substantial improvements in their last major versions. Like Svelte Svelte had actually doubled the server side rendering speed in
[00:18:15]  just the last couple of releases. And react 18 actually had a, was almost a, almost a, like a 50% improvement over react 17. I was just like
[00:18:25] , Holy crap. Okay. I'm like, I can't post these results and not update view. And cause people are just gonna be like, this is showing favorit
[00:18:31] ism. So I, I tried very hard and I got one, but the benchmarks to update, uh, and I managed to get there. And sure enough, view two
[00:18:39]  overview three was like, uh, it wasn't as big of a jump that Svelte, but it was about a 67, 70%. improvement just, just by
[00:18:48]  simply switching the, the, the back, the library time. So I can tell that a lot of focus, even view core has gone into making the SSR, uh
[00:18:56] , you know, even, even better. And, um, I can only imagine like the, the, the, the, like it starts from those little pieces there,
[00:19:03]  you know, improve there and then kind of branches out. And then you get to knocks and like, it's just the whole package coming together. Um, yeah.
[00:19:10]  I mean, view is really interesting. So there, there's some, there's been a lot of focus, I think, on performance, uh, even behind the scenes
[00:19:18] . So things like, uh, memo, um, use sort of memoizing, uh, bits of things, which is often only relevant in, in benchmarks with vast quantities
[00:19:29]  of, of, uh, dom notes. Um, but, but things like that, uh, have been optimized. And there's also some, some really interesting talk
[00:19:37]  about different, different rendering modes in future. So for view to have, um, you, for, for users to be able to opt into different kinds of what does
[00:19:47]  it look like to have reactivity? Um, so, you know, there's the traditional view, uh, react, reactive dom. Yeah. There's something more like
[00:19:57]  Svelte or, um, who knows what framework, but the idea that you would be able to pick. Yeah. What, how you want it to compile. So
[00:20:04]  obviously compile time. Um, what does it look like? What does it do? What does it do? And that I think is very interesting. I mean, that
[00:20:11] 's not that that's more at a level of conceptual and let's think, let's see what happens. Well, I mean, I mean, it's gotta come up
[00:20:18]  on this stream. Evan, you announced view vapor as kind of that, that compiler thing. And I mean, I mean, I'm, I'm, I'm,
[00:20:25]  I'm, I obviously take notice cause that is basically solids output. Um, like straight up solid. Uh, so I I'm not surprised by that because our reactive
[00:20:33]  systems are almost identical. So for you to be exploring the same sort of compilation that we do, I am not at all surprised. So I I'm, I'm looking
[00:20:41]  forward to see where those kinds of different pieces can blend together and how the ecosystem looks at it or can play with it. Because, uh, essentially it's interesting.
[00:20:51]  I've talked about that a bit on stream that there, there's a lot of changes going on. Someone in the chats talking about like server components and stuff with react.
[00:20:58]  Uh, these are, these are where the point it's, it's funny. I'm glad Nux got in at this point because I think it's like,
[00:21:04]  it's a good place. Uh, but I think there's, I think these things are just rolling. Like they just keep on rolling because, um, trying new things
[00:21:13] , pushing new boundaries. And I mean, there's a ripple effect. It starts from the core and then it kind of comes out. But like some of the stuff that
[00:21:20]  we're seeing right now is actually sort of breaking, not breaking backwards compatibility, but causing us to rethink how we look at the ecosystem. And how, how it works
[00:21:29] . And this is the much more general discussion, I guess, like the wider discussion. And I, and I am trying to keep things mostly on the Nux side of
[00:21:35]  things, uh, and like the meta framework, SSR side of things. But just like when you step back and you look at this kind of stuff and these kinds of
[00:21:42]  trends, it is very, very interesting to see like, cause like something like vapor just offhand, you can, you can offer all these different options, but like it
[00:21:53] , it would be very difficult. I think to have seamless vapor and normal view component interoperability. You could, you could have view with vapor leaves, but I
[00:22:02]  like, there's like details there. It's the same reason why solid doesn't have compatibility with react. Like, and, and, and, and there's so
[00:22:09]  many things cause you're, and then you're like, okay, well, do you do this? Do you build your app with this approach? How do you weave them
[00:22:16]  together? And server components are in the same category where they kind of work together with react today. But then when you look at them, you're like, oh,
[00:22:22]  if I'm doing it this way, then I don't need half the libraries that already exist in the ecosystem. These are huge shifts. And I, I, I saying
[00:22:28]  this stuff is kind of maybe controversial, but it's, it, I think this is all the reason why things are getting handled in certain ways, whether they're experimental.
[00:22:37]  Like we're just trying this out or whether the features are being released and not actually being pushed, but more of like, we're just going to be working with our
[00:22:47]  close library friends to see how they work. Like go pick a meta framework. Don't play with this yourself because there's some interesting stuff going on, but that's,
[00:22:57]  that's my hot take because I, I understand mechanically how this stuff works. You guys don't have to worry about it yet, but there is, there is
[00:23:04]  there. We're not slowing down. There's this constant bit of change going on. And, uh, but at a certain point, you got to build real apps.
[00:23:13]  And when you got to build real apps, you need solutions that help you do that. And that's the, you know, where they've taken some of those decisions,
[00:23:21]  um, and made them for you. So you don't have to worry about them and they've made good defaults and let you build and extend on it. And
[00:23:27]  that's, that's what the importance of having a good starter, having good meta framework is. And for the most, for a certain part, even though, as I
[00:23:36]  said, a lot of people in this channel specifically like picking into those details I was talking about. I think that a more realistic take and look at it is just looking at
[00:23:46] , you know, end of day, we're building stuff and we want tools to let us do that. So yeah, enough of my crazy future ecosystem growth, innovation
[00:23:58] , rolling, uh, topic. Let's, let's, let's get back to net knocks. I I'm, I'm terrible at this. I will go off
[00:24:03]  topic over and over and over again, because someone will like say something in the chat. They'll be like, they'll be like, what's this? What? Oh
[00:24:10]  yeah. Here's a great one. Why framework authors love to talk about SSR real world apps are all client side. Yeah. Okay. I guess they're new
[00:24:18]  to the stream. Um, but, um, anyway, um, yeah, so I'm not gonna worry too much about that. Let's, uh, let's keep
[00:24:29]  on moving. And, uh, yeah, where, where are we here? Yeah. So view three next, uh, big change, very close to release. Um
[00:24:38] , okay. Before one last thing, before we kind of like start digging into the stuff that I love digging into and just kind of playing around with it. Um, what
[00:24:46]  would you say having worked on it? What, what, what are the, what's like the big thing that you're really excited about? And this can be a little
[00:24:52]  geeky, a little bit, you know, more on the technical side, but you think really sets Nuxt apart in, you know, and that you've been involved
[00:24:59]  in here and like, like makes it really impressive and like, kind of, you feel really helps the developer get to where they need to be. Ooh, that's
[00:25:07]  interesting because as you said that sentence, like, as you were going through it, I went to, from one thing to another, just based on what you were saying.
[00:25:14]  So I'll say two things. So one is the, the, um, the, what I really like is that we've been able to do some cool things that we
[00:25:25] 've matched with TypeScript. So the, basically the experience you get in the editor matches what we are able to offer. So for example, we're able to auto
[00:25:35]  import components and composables libraries and things like that into your environment and your editor knows about it. It knows specifically what is available based on the modules that you have. Um
[00:25:45] , that what, what modules you install changes the type of your config file, for example, and you can configure those modules there with type support. Um, and so
[00:25:53] , so a lot of the, the interesting things that we've done would otherwise be a bit of a black box sort of magic that we just hope works. So we
[00:26:02]  are not really sure the fact that we've been able to marry it with TypeScript means that you actually get a bit of a confirmation from your editor and you actually get type
[00:26:12] , um, checking of that. So, you know, you, you, you're using the auto imported, um, composable or whatever. And I actually,
[00:26:19]  actually, you, you know, that it, it is there, you know, what type it is, you know, what it returns and, and all of that.
[00:26:24]  I think that really makes a difference for me. And I actually struggle cause I, I, I do reproductions on pure view, uh, without, without next all the
[00:26:33]  time, because I have to check. Um, I, I deeply want, wanna, um, look into the core itself and make sure that, um, when,
[00:26:41]  when I, I encounter something, I know where, where it's coming from. Right. Is this a bug in view or not? Um, and I really struggle actually
[00:26:48]  when I, and I have to import everything manually and I have to sort of step back from some of these, these practices. They are amazing as a developer. And the
[00:26:57]  second thing that I really love is the server integration. And I'm obviously viewers is, is, is not a server framework. Obviously we have server side rendering. That
[00:27:07] 's, that's one thing where it's, it's the ability to put, to turn components into HTML, but the server side bit of Nuxt is completely new and
[00:27:16]  different. And it, it just doesn't exist in any other kind of, um, view framework. So it's, it is a separate thing. And actually it is
[00:27:26]  entirely a separate thing. We've released it as its own, um, own framework or you can use it without Nuxt. Um, called, called Nitro.
[00:27:34]  And I really love it. Um, and some of the things that we've been able to do there and in that bit of the ecosystem. So some of the libraries we
[00:27:42] 've released on, on the back of that are amazing as a developer. Okay. Okay. So, um, just changing how data fetching works and how a server
[00:27:50]  endpoint returning data works, even things like storage, uh, how, how you interact with readers or S3 or, um, whatever. It feels, it's really nice
[00:27:59] . Interesting. So you're like, you've taken the, to the, down to that level. And one of the, I guess, uh, thing is,
[00:28:05]  and you kind of touched on it for a second is, and this is part of my just lack of knowledge on the view side. View has a, uh, has always
[00:28:13]  been a little closer. Like they keep their libraries closer things like a lot of core stuff like routing and all that. Like view has like, this is the view router
[00:28:21] . This is the view blank, you know? And one thing that I'd seen and I didn't know how to compare is like, there's also stuff like view press
[00:28:28]  and beat press. I guess those are for more like doc site type stuff. Uh, but there's both of those. And that always confused me a little bit what
[00:28:36]  the difference was and how Nuxt fits into the, like that. I, I, I always knew Nuxt was like the, the one that does the most, but
[00:28:44]  like. You have to say nice things about Nuxt cause I'm not. But like, yeah. Is there a logical divide there? Or is it like, like what
[00:28:54]  are, what, what, where do these projects fit? Yeah. So I think, um, increasingly my personal guess, I'm not speaking for anybody is that I
[00:29:04]  think we'll see more and more, uh, move from view press to beat press. Um, that would be my, my guess. I think, uh, because the
[00:29:11]  focus is on static site generation and I'm thinking about doc sites, you're able to make decisions as a framework that, um, are, that are, that are optimized
[00:29:21]  for that. So, which are really cool. Um, so if you, if you think with a static site, um, you generate HTML. I mean, you
[00:29:35]  hydrate it. And when you hydrate it often frameworks need all the original data in order to hydrate the HTML. So imagine it, it's got lots of
[00:29:46]  text. You need it for the original. Um, and then you need it also in order to match up so that the client side, I, I know, you
[00:29:54]  know, all this, right? Um, I'm, I'm, but like when the client side JavaScript, um, comes around, like you look at the bundle and
[00:30:00]  it's just pages of text, but you have that in HTML. Um, and V, V press has done some really interesting things with optimizing that app. So you
[00:30:07]  don't need it in the bundle. So actually you have it in, in the page and we're able to actually extract it from the page and then, um, match
[00:30:17]  that up on the hydration side. So the, the data can actually be the HTML itself. I love that. I love that direction. Yeah, no, I,
[00:30:24]  I saw, I saw Evan first talk about it. Cause I, I, you know, I've been playing with this stuff and it hits, I believe, uh,
[00:30:31]  V press is still basically a single page app though. So they managed to do that while still keeping client side navigation. So like I got my attention because that is a tricky
[00:30:40]  problem. And to be fair, the V press use case is probably the S the most restricted and the simplest one. which means that you can make that, those kinds
[00:30:49]  of assumptions and do that. I am very much looking forward to when we can see those kinds of optimizations, make it into more general purpose, wider kind of frameworks.
[00:30:59]  I mean, that's what I, that's what I do. I, that's exactly the area that I've been looking at. So, um, yeah, no
[00:31:05] , that's, that's, that's good to know. So yeah. Okay. And that helps me kind of get a picture of where V press and view press is
[00:31:12] . Um, because at first it was V press is kind of like, Oh, this is kind of like a smaller version. or whatever, but I guess eventually it
[00:31:17] 'll be like the successor. If I know you're not saying officially, that's the case. You're just saying that's your impression of, of how, how things
[00:31:24]  are moving. Yeah. But I mean, we all need this. Right. So, I mean, what you're saying about different frameworks. I, I totally like
[00:31:32]  we all, we're moving together in a direction. Um, and we're all coming up with interesting ideas, uh, like sparks off the fire and hopefully that catches.
[00:31:41]  Right. And you get a bit of a, um, well, just change the metaphor, a bit of a cross pollination. So you, you get some,
[00:31:48]  some interesting things and it, it, it, we move each other, not entirely. So we don't never become clones of each other, but the idea that we're
[00:31:56]  pushing in this direction, I really like. Um, so Vipress can serve, um, in some ways to pull Nuxt. So I actually built that feature
[00:32:04]  in Vipress into my, um, sort of demo site in Nuxt. Nice. So that it can do the same kind of thing. So it doesn't need
[00:32:10]  to ship around a payload. It can actually pull it out of the HTML because I find that really interesting, pretty cool. And I'll be looking to try and put
[00:32:17]  that back into Nuxt and an interesting PR. Um, but I would never have even thought of that if it hadn't been for that kind of direction, um, and
[00:32:25]  experimentation in, in Vipress itself. And equally the kinds of interesting things with resumability and, um, thinking a little bit about, you know, what a
[00:32:35]  component is and what interactivity is and, and how you expect. I mean, the people are exploring new, new frontiers here. And actually sometimes the only way
[00:32:45]  to do that is to completely wipe the slate clean and start fresh. Yeah. And actually just say, well, let's try this different paradigm. Um, I don't
[00:32:54]  know. I think, I think we all have to, have to, to adapt, pick up interesting. And, and I, I mean, I, I don't
[00:33:02]  know about you, but that is what makes me, that, that's what makes me love web tech. It's magic that you can do and it's interesting ideas
[00:33:10] . Um, and the whole thing is about pushing boundaries and thinking, well, what could we do? Yeah. I mean, you've made the point that it's about
[00:33:19]  building real stuff. I guess that's true as well. Like, um, I mean, that's, that's, you're getting at like why the library authors keep
[00:33:28]  on coming back to it, why they keep on building on it. Yeah. I mean, the thing is, what's really cool about this is it's, it
[00:33:36] 's out in the open. If you look for it, you can find it. And I mean, I, I, this is part of the reason I do these streams
[00:33:44]  too. I mean, obviously I like showing casing stuff off, but I learn every time I do one of these things. I, it gives me a reason to look
[00:33:50]  into another framework, understand their thinking. And, you know, and I get the opportunity to have experts talk to me about it, which is awesome. Because then suddenly
[00:34:00]  I'm like, okay, I might've not seen that, but not quite thought of it the same way. And suddenly this opens, expands what I can think of about
[00:34:09]  doing. People in chat are talking about this. Like someone's like, oh yeah, this feature install. Oh, you got that from SvelteKit. I'm
[00:34:14]  like, yep. I, I, I most definitely did or, or remix or like, you know, and, and just being able to walk around and look at that
[00:34:22] . And that's, that's actually, as I said, view has been a little bit of a blind spot for me. I need to remedy that because otherwise I
[00:34:28] 'm not seeing the full picture. I, I go very much out of my way to make sure that I see what everyone else is doing. And I, I think,
[00:34:34]  I think from what you just said, it should be obvious why I do that. Because this is, this is, there's so much little things going on. Um,
[00:34:41]  and they, I do feel there's a general direction, a general push going on. And, uh, everyone's just attacking a little bit different. It's, it
[00:34:51] 's, it's, it's, it's very, very exciting. Yeah, I totally agree. And yeah, and yeah, that's, that's, you
[00:34:58]  know, it's, it's, it's about standing on each other's shoulders and, and, um, yeah. So very cool. Um, okay. Yeah.
[00:35:05]  So yeah, I'm just looking at the chat to see if there's anything. Uh, I don't know. I, I, I, I'm not going to
[00:35:10]  jump into what is great about react 18 or not. I think I've talked about it a bit before or, or, or yeah, no, you know, this
[00:35:17]  is, this is good enough for now. Let's. I'm going to, I'm going to, I'm going to share my screen and we're going to,
[00:35:23]  we're going to actually, I guess. Yeah. I keep on saying, but before we do that, um, and before we do that, I keep on doing that
[00:35:30] . But part of the one thing I do want to know a bit about is just getting started with Nuxt. And maybe I will just share my screen because, uh
[00:35:39] , then I can like do the classic, like, let's, uh, pull up the docs and see what's, what's, what's going on and see how
[00:35:48] , how good I am at it. Cause you said Nuxt 3 is in, uh, uh, uh, where is my screen share is, is in a release
[00:35:56]  candidate stage and let's share my screen. Um, let's see, here we go. And I'm gathering. Yeah. That means that we are, we are at
[00:36:09]  a stage where, uh, um, the doc site is generally available. So if I look here, I will be looking at Nuxt 3 docs or. Um,
[00:36:17]  I think if you click that link, uh, the preview on the previous page, the one that said, um, yeah, that's it. Uh, yeah. So
[00:36:25]  the V3 docs are out there. Um, and we've, we've, we've got a bit of a migration guide, uh, as well as API docs and
[00:36:34] , um, or general, general, uh, conceptual docs for, for Nuxt 3. Okay. Perfect. Yeah. Because, uh, cause yeah, I'm,
[00:36:43]  uh, that's going to help any of the existing devs, but we're, we're treating me. Kind of like a new dev because I kind of am
[00:36:48] , I just, I played with view before. I got a little bit of an idea of a view and now I want to build my first site on Nuxt. So
[00:36:56]  I, I'm, I'm, I, I probably want to click here on this getting started guide and kind of look at what's going on. And I can play
[00:37:04]  right in stack blitz or code sandbox. I love, I love this stuff too. Um, so. Yeah. So. Stack blitz is amazing. I don
[00:37:10] 't know if you use it. I use it every day in terms of, uh, pulling up little, um, tests for different concepts, whatever. Yeah. I got
[00:37:18] , I got, I got to get used to using stack blitz more. I got a really embarrassing story. I like telling people this stuff because it makes them like
[00:37:25]  not feel as intimidated about stuff. But I was, I was like using stack blitz and I was like, Oh, this is kind of cool. And I was impressed
[00:37:32]  about how fast it boots up. If you ever use like full stack stuff on code sandboxes, not as fast, but I was very used to using code sandbox.
[00:37:38]  Cause they're pre-made client side only templates are actually not bad then they load pretty quick. But if you try and do like a full stack thing, it's very
[00:37:44] , very slow. So I opened stack blitz a number of times. I was very impressed. As soon as VEAT got in there, you know, I was
[00:37:49]  in there. Cause also, uh, what we do have in common for the, I don't, uh, with most of you stuff is like all our stuff is built
[00:37:56]  on VEAT with solid. And, um, I get in there and I'm doing stuff and I keep on seeing examples and I'm playing with them. Like,
[00:38:02]  Oh man, this is great. And then people like bug report in the shirt and I go to debug it and the whole thing crashes. And every time I try and
[00:38:09]  debug stack blitz, I can't get it to work. And I'm just like, what the hell is going on here? Like, I'm like, this is
[00:38:14]  useless. I'm like, this is really nice, but I, I use this for debugging and stuff. I can't debug or anything. Well, as it turned off
[00:38:21] , turns out because I'm so used to benchmarking all the time and I don't want to like, like mess with it. I like impermanently turned service worker
[00:38:28]  off mode. Cause I, I never want, I never want, I never want the service worker, um, to mess with like service worker. Like serving assets and
[00:38:38]  deal with like, to color my benchmarks. So essentially, um, yeah, I had the service worker off, which if you don't have the dev, uh, tools
[00:38:47]  open, they'll just run as default. But the second you open the dev tools, service worker is off. So I just kept on, and this is such an
[00:38:53]  obvious thing, but it took, I'm not kidding you. People were like mentioning the stack blitz and trying to get me to use it like three, four months before
[00:39:00]  I figured this out. My, my, my, my silly, uh, my silly mistake. So there you go, guys. Uh, Ryan didn't figure out that
[00:39:09]  he had the service workers, uh, turned off, which if anyone knows where the, the way these, uh, um, stack blitz and stuff work, they all
[00:39:16] , the whole, the whole things in the worker. Like it's basically, of course it doesn't work without the worker, but, uh, man, incidentally
[00:39:23] , we actually have a next preset where we can deploy to a worker. So we have server side rendering, but the server is in a service worker in your browser.
[00:39:32]  Just pretty much like stack blitz, which, um, anyway, that's, that's, that's, I mean, definitely don't deploy next that way, but
[00:39:40]  it was more of a cool experiment. Well, that's cool that you have to have done that. I mean, when we were working in Marco, we talked about that
[00:39:46]  forever and I'm pretty sure I I've talked to, you know, I, I, there was an experiment I saw like that on Astro. And I know
[00:39:52]  that a lot of, I know that a lot of the, uh, frameworks now, because they have all these adapters that basically work for Cloudflare workers or work
[00:40:00]  for all the work. The worker APIs are kind of the same. I haven't done the experiment yet with solid, but I, it seems really cool. I, I
[00:40:06]  can't actually wait to do it. It just, it's on my list. I'm, I'm, I'm happy to hear that you've done it with N
[00:40:10] ux. How was it? What, what did it feel like to have, have that, have that work? Well, I, I think, I think basically,
[00:40:18]  I mean, it feels super cool. Right. So the, and the idea of this sort of central worker can serve multiple tabs and, you know, that there's,
[00:40:27]  that feels cool. But service workers are seriously limited as anything other than a, than a sort of, uh, one option with a, you have to have a fall
[00:40:36] back, right? Because they don't work in incognito mode. You know, as you, uh, shared, you know, you might have service workers turned off
[00:40:42]  for any number of reasons. You can't have your, your, your site just failing, uh, because of the user's browser settings. Um, I guess that
[00:40:51] , that is the big, big downside. Um, and, and there are, are also brought the entire browsers that will not, um, load responses from service workers in
[00:41:01]  certain situations. Um, like, I think it has to, I mean, certainly has to be, um, SSL. Uh, I dunno, there's just a
[00:41:08]  lot of limitations that would, that mean at the moment, it's nothing. It it's, it's a, it's a fun project. Um, and you're
[00:41:15]  right. It's because it, it, it has a work. It has a worker target. Yeah. And the main use case for a worker target is obviously for
[00:41:24]  something like Cloudflare or Netlify's, um, edge, you know, that, that, that, that kind of thing is, is what you're building
[00:41:34]  it for. Yeah. The idea that it works in the browser service work is a bit of a, it's a bit of a cool side effect. Yeah. I,
[00:41:40]  I, I guess I, the thing that's interesting and appealing, and it probably matters less to like a single page app framework oriented, kind of like view react and
[00:41:49]  that, but it was really interesting to like Marco and Astro mores that, um, they, they, they don't. I mean, Marco's a bit more
[00:41:58]  so, but let's talk about like Astro. Um, they have, they're an MPA framework that lets you inject interactive JavaScript. And you could just make
[00:42:05]  your whole app in the JavaScript, like pull in like whatever framework you want, like react, view, spell, and actually like make the full thing if you want an Ast
[00:42:13] ro. But it, but you get the best optimization of Astro by making those islands really, really small. So I guess at a certain point you're like,
[00:42:19]  okay, so you go to the server and the server renders these pages and on every page navigation, you go back to the server. And it's kind of interesting that
[00:42:25]  if you had this kind of hybrid approach where you go to the server, but if possible could use the service worker. The, they could have almost like a single page
[00:42:34]  app like experience, uh, without any fancy stuff when you have something that was originally basically an MPA. Um, it's interesting cause they can keep the exact same paradigm
[00:42:45]  on both sides and it is actually like a level up. Um, so it, it, it, it, it, it's interesting to see if, uh,
[00:42:53]  certain solutions will actually start pushing that further, even before it's ready, just because of like, this could be a new way to, to like, it could actually make
[00:43:03]  a big difference for them. Um, so it's, it's not exactly, um, service worker, but I actually have a PR in to Nuxt to add server
[00:43:12]  components. Um, and basically do some like the, the, the kind of idea. So they're in, they're interactive and they, they actually, at the
[00:43:21]  moment current implementation, they both share and affect the state, uh, in the browser. So, um, you can not only be rendering the HTML in the page, but
[00:43:31]  you're also affecting obviously the CSS. Um, and also the, the, the short shared state and store of the app that you're rendering. Um, and there
[00:43:41]  are lots of questions there and that, that PR is not going to be much tomorrow, but, um, but it is a very, very interesting and very fun thing to
[00:43:49]  be thinking about and exploring. You're making me want to tangent just a couple of questions there. Cause I, I mean, I hadn't heard anything along these lines from
[00:43:56] , uh, from the view side of things. So now I'm like, Oh man. So that's, that's a thing because like, uh, cause like
[00:44:04]  obviously server components architecturally are very similar to islands. They have the same kind of rules. You have like the, the, the static, the server tree that weaves
[00:44:11]  around the client tree. But the interesting thing about, uh, at least the, like the react implementation. And I, I don't know about you doing view is
[00:44:18]  not about the islands, but about what happens outside of the islands. The fact that you could say, be on a page, update some data on that page, and then
[00:44:27]  go back to the, and only ship the components for the interactive parts. Like say the input that you're typing in, but then go back to the update, the
[00:44:34]  data in that input, go back to the server and essentially, um, have the, where that say data you updated now show up in the server rendered part portion of the
[00:44:46]  page. Um, and the benefit of, and the reason you do that is because you don't want to serialize all that data outside of the HTML and then do all
[00:44:54]  that while your input doesn't lose focus. Um, right. That's the, that's the, that's the, that's the, the, the crazy kind
[00:45:02]  of server component thing. Cause you can do that with islands frameworks, but, but you can't, it's, it's hard to retain the, the state on the
[00:45:10]  page. So yeah, I, I didn't realize you guys are, were playing around with stuff there. That's, that's really, really cool. I, you
[00:45:17] , maybe you have to link me to the PR if it's out in the public at some point. I, I'm very, very curious now. Yeah, totally.
[00:45:25]  I mean, it, I'll, yeah, I'll send it, send it your way. Um, we're doing it in, in, in two, two
[00:45:30]  stages. So first we're, we're, so there are two PRs. Um, the first is this concept of, uh, of island of server islands. So
[00:45:40]  rendering something, um, that is, uh, that has this sort of, um, state. Um, but we have these, these server islands. Um, and
[00:45:53] , and so how, how do you do it? We just return JSON with, um, with state, with CSS, with scripts, uh, even, uh, and
[00:46:03]  then HTML. Uh, and we actually have the capacity to batch batch that, although we haven't implemented the batching. I mean, hey, this is, this
[00:46:10]  is, this cutting edge stuff, right? Right. We're just, we're just working this out at the moment. Um, and then we also have a, uh
[00:46:17] , the sort of using that, um, to implement server only components. So, um, using that, the islands, uh, mechanism, um, you can actually
[00:46:26]  see a little, little demo. Basically it reactive props, making network requests, getting back HTML that, that renders. Um, and view is in charge of, I
[00:46:35]  mean, view view is, is able to do it. It's, it's all the view reactivity that ensures things like you don't lose focus, um, with
[00:46:44]  the input you're typing in, um, even as you're updating HTML. So that that's, you know, we're not having to reinvent that, which is great
[00:46:51] . Well, I would have thought, and the challenge there is it's actually, it's, it's, if when you, when the thing around it is getting
[00:46:59]  replaced and the thing stays in, not just the reactivity, but it's actually the V DOM that it's actually might be the thing. Because if you can actually diff
[00:47:07]  the changes, um, then, then you're not like losing the elements. I think that's the biggest difference. Um, if you just go, okay, I'm
[00:47:14]  going to send some HTML, I'm going to send some data. Um, if you go and replace that HTML, then like, you're like, you're losing
[00:47:22]  the DOM state where if you dip it, you actually, it's, it works just the way view normally updates the stuff. So, um, I, I'm very
[00:47:29] , uh, uh, uh, aware of this sort of thing because, uh, I work in a framework when they'll beat them. So like, it's like
[00:47:36] , it's like, how can I do this in a way where I don't need to diff? So that's, that's, that's a whole other question,
[00:47:43]  but yeah, that's why this stuff is interesting. And I'm, I'm not terribly surprised there, but I, I was expecting a little bit more waves.
[00:47:50]  You know, I wanted to, I'm, I'm, this is the first time I'm hearing it. I'm not connected or close to the view community. So
[00:47:55]  that's probably why I haven't seen this, but this is actually very, very interesting to me as you can imagine. Absolutely. Well, I mean, it's early
[00:48:02]  days, any thoughts you've got, I'm totally going to steal. And, um, try and make this a bit, um, because I, I think, you
[00:48:11]  know, it, it pains me when I see duplicates. Like, I mean, it, it, I guess we're all trained to hate that, right?
[00:48:20]  We don't like duplicated data or stuff that is doing the same thing twice. Yeah. And yet when you have a server rendered framework that is hydrating it,
[00:48:28]  we duplicate things all the time. So how do we cut that down? And how, how do you, like, if you imagine you have stuff like a CMS and it
[00:48:36] 's rendering, rendering things for you, um, or you have, um, I don't know, bits of the page that really don't, change. They don
[00:48:46] 't have interactivity. Um, we like at, at the moment we have this sort of one size fits well. Actually, everything has to be hydrated and viewed view does
[00:48:55]  great work. It, it hoists things out of the tree. So you don't have to, um, there's no, no reactivity for static DOMs.
[00:49:02]  They don't change. They're not part of any kind of diff. Like they're, they're just, they exist. Um, once is enough, but, um
[00:49:09] , maybe we can actually make that better. Like one is once too many times. Yeah. Um, you know, how, how do we improve that on the,
[00:49:17]  on the client side? Yeah. So I, while you were talking, I just linked one of my articles just for more context for people, uh, which is, uh
[00:49:24] , I wrote an article a couple, a few months ago called why efficient hydration JavaScript frameworks is so challenging. Um, and it just goes over all the random different techniques
[00:49:34]  people. And it talks about the data duplication problem. And then talks about all the different techniques. Uh, people might go to try and solve the data duplication.
[00:49:41]  And I pull from a whole bunch of different libraries and stuff, probably not enough from view. Cause I'm, as I said, I'm not as fluent in view
[00:49:48] , but I know view does do a lot of similar techniques that certain other ones do. I know that on the one area for partiality and a single plate Jap view is
[00:49:55]  actually one of the furthest along. But, um, yeah, uh, in any case, uh, if, if you, if you have more questions, I also
[00:50:02]  did a stream all about, all about, I've been actually multiple streams all about hydration, but I, I either, if you look for, uh, look back
[00:50:10]  a bit, there's a stream that's titled partial hydration where I, uh, kind of break it down and explain how it works. So, um, yeah, no
[00:50:16] , this, this is super interesting. Uh, um, this is all news to me. This is, as I said, this is why I do this stuff so I
[00:50:24]  can learn and, and see what everyone else is doing. So this is, this is awesome. Um, okay. Ooh, how's chat doing? I mean,
[00:50:33]  I feel like, Whoa, what's going on? What do you guys got to do? A lot of, let's some, some questions about how to use Nuxt
[00:50:41] . Well, we'll, we'll, maybe we'll get there. Uh, okay. I will look into the blog post. Yeah. Yeah. I mean, uh
[00:50:50] , there's been a lot of definitions for hydration. Um, my favorite was actually one that, uh, my coworker, um, Michael Rawlings, um, from
[00:51:01]  the Marco team said, which, which described hydration as the work that happens in the browser. So that, um, so that, oh man, I should, sorry
[00:51:12] . Give me two seconds. I want to actually pull it, pull it out. If I think hydration is the wrong word, isn't it? It should be something like
[00:51:18]  reanimation. Yeah. Yeah. Like the idea, if you have, if you've like got a corpse sitting there, um, how do you put life in it
[00:51:25]  again? Um, it needs to breathe and react to the environment around it. And it needs JavaScript to do that because JavaScript is the stuff of life. I think that
[00:51:35] , that is, that is what hydration is. Yeah. I'm hoping that this is, oh yeah, here it is. Hydration is a work done in the browser
[00:51:44]  to get the server rendered app page into the same state as if it had been client rendered. That, I mean, he, he, he was being very broad in
[00:51:53]  general, but because the point is you need to like, there, there's a lot of techniques that are happening now, which are lazy loading stuff and doing different things at
[00:52:05]  different times and cut slicing up the work different ways. Because the, the truth of the matter is hydration or this process of getting, uh, stuff to where it needs
[00:52:14]  to be is expensive enough that it can impact your page scores or, you know, on, on lighthouse and it can impact, you know, uh, user experience.
[00:52:22]  And because, especially on mobile devices and slow networks. So essentially people have been coming up with lots of ways to battle it and push it off and defer it and do,
[00:52:33]  do some of it now and some of it later. And that, so we were trying to like, think of a way of explaining that, like, like it's not
[00:52:40]  just how long it takes for the page load to become interactive, um, in, in our minds. That is the thing that the, the, the, those lighthouse
[00:52:49]  scores will, will get on you. Oh man, I'm getting spammed, I think. Um, but, uh, it's, it's actually the, uh
[00:52:59] , it's more than that. It's like, it's not just until interaction. It's, it's to the full thing that the interaction does what you would expect
[00:53:07]  as if it had been client rendered, like to the point that you, when you press the button, I still consider hydration on to the point that it actually runs the specific
[00:53:15]  code. That the button would have done. If you'd client rendered it, if you press that button means now I'm going to load that script and I'm going
[00:53:22]  to run some code and then hydrate this component and then press the button. Well, everything up until the, the, what doing what the button did, I still consider
[00:53:29]  hydration, even if it didn't happen on initial page load. So yeah, I mean, that's me getting more technical on it, but I think the problem is
[00:53:37]  hydration is becoming a harder and harder term to nail down because we're, we're, we're really trying to destroy it. We're really trying to get rid of it
[00:53:46]  and kind of spread it out. We're, we're missing the fact that hydration is magic. Like hydration is a great thing. The idea that you can have a
[00:53:54]  client side app that only has to hit the server once for HTML, like, but, and then after that things happen in the browser. I don't know when the first
[00:54:03]  time you hit, you first experienced that. Um, I'm guessing there was a moment when you first experienced that, you know, just always experienced client side apps,
[00:54:12]  but genuinely that, that, that is, that is, that was a sort of a milestone in terms of this thing is, is here on my computer and is responding to
[00:54:23]  me. It's not like I, I click a button and wait for something that, you know, some massive round trip and a flash of white, and then some new
[00:54:32]  page that loads gradually in a, like. I mean, it's, it's magical. You want hydration. Hydration is brilliant. Right. I mean, if
[00:54:40] , if you go, if you go back to the early single page app days, uh, and the first server rendered single page app days, um, once it was kind
[00:54:48]  of this awkward tension because at the beginning of the day, uh, we had most stuff server rendered. And then the, maybe the client said stuff was these little pieces and
[00:54:54] , and then you'd be okay. You'd be like, okay, I'll, I'll stick up. Like I'm going back to you one time here. I
[00:54:59] 'll, I'll render my backend in rails and I'm going to stick a view component here and a view component there. And we didn't even bother server rendering at
[00:55:05]  that point on the view component. We would just like, I mean, server rendered so that you could read the template out of the HTML, but like essentially you could kind
[00:55:14]  of view it as like a placeholders place where you render on the server. And then view takes over and does its little pieces at certain point where like those apps got
[00:55:22]  bigger and bigger. And next thing you know, we're, we're basically like, okay, screw the server thing. We're going to show a white page at first
[00:55:29]  and, and we're going to do it all and make a single app. And then at a certain point we added SSR and the very earliest approaches to SSR
[00:55:36] . Um, you know, once people realized like the white on their page was getting too big in was still not the best because what we did was we server rendered it.
[00:55:44]  Then we got the client and I, I don't know if there was ever a stage in view specifically, but it was in other places where we would just re-render
[00:55:53]  it on the, on the client. So then we would just like basically server render it and then, uh, like flicker it white for a second and then re
[00:56:02] -render it on the, on the, on the client. Cause we couldn't, we couldn't reuse the tree. Um, and this is server rendering circa 2012,
[00:56:10]  2013, essentially on client side apps. Like people wanted to do that push state existed. We had the ability to do it from the routing, but we didn't have a
[00:56:17]  way of like diffing against the current DOM. And then yeah, hydration, when it first showed up, it was like, it was it, I mean, coming
[00:56:25]  from that mindset, not from the old mindset. Cause obviously back in the day, you can always serve HTML with JavaScript and have it work. But it was like, suddenly
[00:56:31]  it was like the page would load and you, after a few years of being conditioned by single page apps, you're like, you know, I I'm a view user
[00:56:38] . I'm a react user, whatever. And, and you're kind of used to these flickers and stuff. You, you, as you said, you, you
[00:56:43]  server rendered isomorphic hydrate the first time. And you go there and you're like, Oh, did, is the page actually working? Oh wait, it
[00:56:49]  is actually working. Cause you, you're like looking for that indicator that, that something had changed. And it's funny because we, uh, single page apps still get
[00:56:58]  like, it's fun. Everybody who's like on the opposite sides of the argument or like people, cause people talk about MPA and white flickers. Uh,
[00:57:04]  and white flickers, people talk about single page apps and white flickers on hydration. Um, I think that we've all actually moved past that stage. Um, the
[00:57:12]  browser does this cool holding trick for MPAs, uh, single page apps now hydrate, you know, but it's funny. Some, everyone keeps on like,
[00:57:20]  I, not everyone, but this argument still kind of comes up to this day when everyone accuses the other party of, of doing the white flicker thing. And
[00:57:27]  actually we are mostly past the days of white flickering. I, as long as you are using the tools in the, in the right way, we have, I think
[00:57:36]  the, between the browser solving it for multi-page apps and the framework solving it with hydration, we are mostly past the, the, like the full white flicker.
[00:57:44]  I mean, obviously we have loading states and skeleton screens and you know, all that kind of stuff, but I am very happy to report the, the end of the
[00:57:53]  white flicker. Um, I mean, not on every site, but if you go and make a new site today, you, there are options. Yeah. I mean
[00:58:01] , you're absolutely, I mean, you're right, but the, the pain and the trauma doesn't go away. Right. I think that's, that's the
[00:58:09]  key thing. Yeah. It never does. It never does. Oh man. Uh, okay. Yeah. So yeah, I, this, I told you I'm
[00:58:17]  terrible. This is why I booked so much time, Daniel, cause I'm just going to tangent like at every possible moment. So let's, let's get, let
[00:58:23] 's, let's keep on going. Okay. So I guess my question with Nuxt is getting past the stack blitz and the code sandbox and whatnot, we are presumably
[00:58:32] , uh, okay. I guess my first question is if, if I want to. Actually, in my respect that the new pro project bit should probably go above the
[00:58:43]  configuring typescript bit. That's probably my reflection on looking at the docs on your screen. You would think that, but you probably did it in the right order.
[00:58:53]  Because if you didn't do that, all the typescript people would be like yelling at you and, and they're like, yeah, we didn't see it in
[00:58:59]  the docs. Um, because like typescript is like super, super, super, super important to the point that it might've well just been the first thing. because
[00:59:09]  like, uh, I'm sorry, that's my commentary. This is partially hazened by my, our conversation earlier as a library maintainer doing typescript being different
[00:59:20]  than the application developer doing typescript. Um, it sounds like you might've had some experiences there, right? And that, that doesn't sound like made up out of
[00:59:27]  thin air. Yeah. Yeah. Um, but, but, uh, generally speaking. Okay. So I guess my first question is before I even get into the stall
[00:59:36] , cause sometimes I need to know this, do I have to be concerned with where I'm eventually going to deploy this app before I do the install? Or is that something
[00:59:43]  that I can worry about later? And in terms of deployment options today for nuxt, uh, w w what pl are there platforms that I can use? Uh,
[00:59:55]  pretty much, um, any platform, um, that you want to go to, you should be able to deploy nuxt to. So, uh, you should be able
[01:00:04]  to deploy. So obviously static is one thing. So anything that, that produce static files, you can deploy that. Um, in terms of things that have a,
[01:00:13]  uh, a hybrid or a server side rendering component to them. So you can mix static and, um, so you can do, uh, uh, Versal and notify
[01:00:24]  and Azure static web apps, uh, cloud flare, um, storm kit, um, AWS Lambda supported, um, like Heroku and digital ocean. Pretty much anywhere.
[01:00:38]  Right. Um, I mean, that that's the aim. The aim is that you should be able to, it should be a completely agnostic experience from your
[01:00:46]  point of view in terms of where you deploy it. Right. Okay. Well, that's good. I'm gonna, I'm gonna do dynamic just because we're,
[01:00:53]  we're, we're, we're doing hacker news and we're getting fresh data and I wanna do server rendering. Cause that's, you know, it's server data
[01:00:59]  fetching. I wanna see the patterns. So we're gonna do that. But what that tells me though, is that, um, that's what you want. Yeah
[01:01:07] . Yeah. Okay. This is, this is the only thing that I'm going to do. And I'm when I'm, I'm, I'm basically,
[01:01:13]  this is my weakness more than anything else. Um, yeah, copy, copy that. But I want you to add like a little thing to the end of it. Gotcha
[01:01:22] . Okay. Um, okay. I got, I got, I'm gonna open a new code window. See, this is my, my port right now of my
[01:01:28]  old view app into, into it. And I, I'm, I'm getting the hang of, uh, hang of it again. So I, as I said
[01:01:35] , I, I, I managed to, to get, get through stuff. Okay. But we're gonna, we're gonna make a new, actually, before we make
[01:01:42]  the new window, we're just gonna open a new terminal and we're gonna, we're gonna go back and we're gonna, I don't need to make the folder
[01:01:49]  first, right? I can just like straight up run this and it'll give me all the prompts. Okay. So the last bit, the Nuxt app thing,
[01:01:54]  that's the name of the folder. So you can call it Nuxt Hacker News or whatever you want to call it. Yeah. Perfect. Um, and then,
[01:02:01]  uh, just add one more, uh, line space dash T, um, T lowercase capital. Yeah. Space, uh, V3 dash edge. Um, because
[01:02:11]  I, I want you to have the latest, like the latest and greatest. If you did, if you dropped that, you'd just get the last release candidate.
[01:02:18]  Um, but, um, okay. Yeah. Yeah. I just, I just went, yeah, you should, you should have the, the, the up to date
[01:02:27] . Let's go. All right. Okay. Okay. Okay. So I'm, I'm just straight in. Okay. Then what I'm gonna do is I'm
[01:02:35]  gonna make a new window and we're going to open our new example, which is development examples. I always love seeing how people organize their, like their code. this
[01:02:46]  is so S like, so lean and sparse. Like if you saw the, the number of like sandboxes I've got open. Yeah. The, the, the
[01:02:56] , the, the, here's the thing. This is my newer computer. I guess I've kind of revealed it. I don't know if I should be streaming for
[01:03:01]  my work computer, but it's just, it has better specs. So this, the reason there's so little on here is because it's my, my new,
[01:03:10]  my new, I just got this computer from when I started up with Netlify. And yeah, my other computer, I have a reproductions folder. That's just
[01:03:18]  endlessly deep. Um, but this one I is still pretty new. And I actually, when I first started, I was like more worried about getting the streaming and taking
[01:03:28]  advantage of this pro processor and doing all that stuff. And I, I kept on still doing most of my dev work on my, uh, on my, uh, my
[01:03:34]  error. It's supposed to, cause I was going on vacation. So I actually only started doing the actual dev work on this computer. Um, when I came back
[01:03:41]  from vacation two weeks ago, so, uh, yes, it's still very sparse. Uh, that's my, that's my reasoning. Okay, cool. So
[01:03:49] . Okay. Here we are. The only, the only way I survive at all on my computer with the number of reproductions I have is by using PNPM.
[01:03:57]  That is honestly the best thing for my disk space that I've, uh, I've encountered so far. Sorry, you were saying, how do you install? Whatever you
[01:04:05]  want. So if you use PNPM, you should use a shamefully hoist, or you can use PNPM. Or you can use NPM or
[01:04:10]  on or whatever. Yeah. It's funny. I'm, I am new to PNPM. I use it now. We've migrated. Uh, solid start is
[01:04:20]  on PNPM with turbo repo and the solid repo on the next branches on it. We've made the move to turbo and PNPM. Uh, but I,
[01:04:27]  it, this was not my doing. This is people in the community. I am like the last person to do this stuff. I I'm like the guy with the not
[01:04:34] epad plus plus. Like that's, that's, that's me. I got dragged into every single tooling piece, uh, because people like, Oh, you
[01:04:40]  got to use these tools. And I'm like, they'll make you more productive. Uh, okay. So you're telling me you don't actually use VS code.
[01:04:46]  Like this is only here for the stream. Like under the hood, you're, you're them in the terminal. Yeah. Almost. No. I do. I
[01:04:56]  do use VS code. I, it, it, it, it was easy. Vim has, you got to learn a bunch of stuff. That's also like too
[01:05:01]  much. Um, but yeah, okay. Shamefully hoist. I, I'm just, I'm just very slow to, to change, to change essentially. But
[01:05:08]  once, once I get there, I'm happy enough with it. It was okay. Shamefully not shameful. Shamefully. They really want you to feel shameful about this
[01:05:15] . Like, it's like fully. Uh, oh, you need. Yes. I, the install part of it is, is, is, is very important.
[01:05:25]  Okay, cool. So I'm just looking at the project here. First thing I notice is, and I wasn't sure where I was coming from is, is there,
[01:05:33]  is VEET here anywhere under the hood or is this your complete own build system or how, how, how, how, what's going on here? Yeah, it
[01:05:40] 's VEET. It's VEET. It's, I mean, if you want a web pack, you can have web pack too, but you'll need
[01:05:44]  to install a separate dependency, but basically it's. Yeah. Yeah. VEET. Oh yeah. There it is right there. I'm at pure. Okay
[01:05:53] . Perfect. Yeah. That's, that's, that's. I understand. Yeah. Yeah. So yeah, no, that's cool. That's, that's
[01:06:00]  what I figured as much, but you, you have actually hidden the, the, the VEETness until I actually saw this and because I was looking at this,
[01:06:03]  I was like, okay. Okay. All right. So then, and the CLI was very, I was, I was almost expecting a bunch of options and choices,
[01:06:09]  but this was just like straight up. So we, we, uh, we have what we need. We have our first view here. And next welcome is a,
[01:06:16]  see this is what you're talking about. Like I I'm like, where is this coming from? And you're telling me that it's. I'm telling you that
[01:06:23]  as soon as you start the dev server, some magic stuff will start happening. But like if you have a look at that TS config. Yeah. Um, it extends
[01:06:33]  a TS config that has not yet been generated. So as soon as you start the dev server, there's also a separate command called Nuxy prepare that will just generate
[01:06:41]  the magic. Um, it will generate this folder and all the types that are specific to your project. Okay. Okay. Okay. Okay. Okay. Um, so I
[01:06:52] , I don't, I don't know if you love that or not. You might hate it, but basically we're going to, we're going to see,
[01:06:58]  I, you, you should have seen me when I, when I took, uh, first time using Deno and I did, I use fresh and I was like trying
[01:07:04] , there was some missing docs cause like brand new. And I was trying to figure it out. I'm like trying to find search in the code and I'm like,
[01:07:09]  oh, right. Nothing gets installed. And then I, I was like debugging something later. And then I was like, oh, there's no output folder. So
[01:07:16]  sometimes the magic does, uh, does kind of, you know, make it, uh, change my perception on how I should be approaching these problems. I, I managed
[01:07:25]  to figure it out eventually with Deno and how, how to kind of, they still link the code, which is cool. You can still use VS code to get to
[01:07:32]  the code. Um, even though it's not like in a node modules folder, but okay. Uh, okay. You, okay. So should I just start the server
[01:07:39]  and see what we, what we're dealing with? Yeah, go for it. PNPM. Oh, you can write. Yeah. I mean, it doesn
[01:07:45] 't really matter. Right. PNPM. It doesn't. Yeah. And then no, it's shorter. I don't have to use bun. Like that's
[01:07:52]  the, yeah. I, I, I, I saw a great talk on bun last night. I was speaking at a react, uh, event and Jared was speaking there
[01:07:58]  as well. So there was great chance to meet him and, uh, and, and get a little introduction on, on what he's been thinking with bun. He's
[01:08:06] , he's, he's quite a character. Um, I would love to actually, because I think you have to be a character to do what he's done.
[01:08:13]  And basically what is it? The 90 hour weeks that he's put in, like, I, I, I have, I have no idea what that's going to do
[01:08:19]  to like the framework going forward. This thing was built off the back of 90 hour weeks for, you know, a year or whatever. Yeah. Um, well,
[01:08:28]  I mean, maybe character wasn't fair. It's more of like, um, you, you, in my career, I've met, uh, several of them,
[01:08:35]  but there's different, there's people who sit in different parts of the spectrum in terms of where they, like, where they feel most comfortable doing the work and the,
[01:08:40]  and what motivates them to develop and how they kind of approach, um, the problems and the thinking. Right. And you can tell Jared where, like, where he
[01:08:48]  is in terms of engineering mindset and stuff. He's just like one of like, I mean, this might take just one of those like pure engineers who just like, he
[01:08:57] , he loves the problem. He always thinks deeply. Um, and you know, that's why he can do what he, he does. And, um, I
[01:09:04] , it, it was, it was really awesome to see that in person because like, you know, like a bit of a less filter, more just like straight engineering kind
[01:09:13]  of thing. Someone asked a question and he's just like, he just like went straight into it. And I, it was actually Lee Rob, uh, um, from
[01:09:20]  Bursell was there. And he, he asked the question, he just went straight into it. And like, uh, you could tell at first, like Lee was like
[01:09:27] , Oh, okay. You know what? Just keep on going. It's get to the thing is it, because he had a very good point, but it was
[01:09:32]  like, we, we got into the, the, the, the, a bit into the weeds of like, uh, uh, uh, stringing coding, uh,
[01:09:38]  and the file system and how JavaScript, uh, different, uh, UTF eight and UTF 16. And I don't think that was the intention of the question,
[01:09:47]  but I, I learned something, you know, really interesting, uh, from that conversation. So I, I, I, you know, I, I love that kind
[01:09:54]  of. Uh, you know, I see it in everybody bits of it, but he, he, he, he is a great example of like one of those,
[01:10:00]  like engineers, engineers. I, I, yeah. Uh, sorry. I, this is loaded in. You don't have to, you don't have to participate.
[01:10:07]  I mean, you can participate, but not right now, maybe later. Uh, okay. Nitro built in 200 milliseconds. Here we go. All right. So
[01:10:15] , um, are we on local hosts something or other, or is this good? Yeah. I think if you scroll up, you'll see it, but it's local
[01:10:24]  has 3000 by default. Okay. So we're still on V 2.9. And I know we're on V three, we're V three, but we just,
[01:10:31]  we just forced it. Um, we, we actually are in control. Yeah. Yeah. So V is running in middleware mode, uh, and nuxt it
[01:10:40] 's actually a nuxt server, which is running, um, and processing the requests because I told you a little bit about nitro. Yeah. Nitro isn't just
[01:10:48]  in production. It's also in, in development. Um, and, uh, so yeah, you get, you get nitro running and doing the server. Okay.
[01:11:00]  So, okay. You, you're still gonna have to explain to me this whole nuxt welcome thing. Cause I'm seeing a page and this page is it,
[01:11:08]  this, like what? It's a component. It's a component. If you go back into your editor and hover over that next welcome thing. Yeah. Um, are
[01:11:18]  you running volar? I, I maybe I, uh, okay. Well, maybe you're not, if you're not, that is, what is that view language
[01:11:27]  server? It might be volar. Yeah. I think you're running it. That's great. That's fine. Yeah. Yeah. Okay. Cool. Yeah
[01:11:38] . Cause I, but I just installed it this morning while I was like trying to desperately get my hacker news demo up today. My biggest problem I've had sometimes with VS
[01:11:43]  code is it's just kind of slow, but you tell me I can go to maybe go to definition. Okay. That's not what you would be able to, but
[01:11:51]  I don't know. I don't know. I don't know why not. Um, okay. Yeah. Wake up. No. Okay. Okay. Um,
[01:11:59]  this is, this is why I do these streams. Cause I, I, I, I, I hit this stuff, you know? Um, okay. Okay.
[01:12:05]  So this is a experimental features for Knox. This is okay. This, there's some interesting stuff that's been added to my, to my console here anyways, and I
[01:12:11] 'm not used to. Um, so I'm. So to start. Yeah, exactly. So what do you want to do? What, what, what, what
[01:12:17] , what? So, um, uh, next welcome is an internal component. So it's within node modules. Um, what you should, what you should have. Um
[01:12:25] , and what I have on my screen when I run a new project, um, is that when I hover over next welcome, it takes me, I can press, uh
[01:12:33] , option click and it takes me to the component. So I'm not entirely sure why that's not working for you, but, um, okay. That's fine.
[01:12:43]  Um, yeah. Um, yeah, as I said, I, I find it's trample over that stuff, but what you're telling me is that somewhere maybe
[01:12:51]  in an at Nux folder or something somewhere or somewhere in Nux. Um, it, and I can tell you, um, actually I can, I can, uh
[01:12:58] , take you to, to do it a different way if you want. This is totally under the hood. This is not like the ideal dev experience, but if you go
[01:13:06]  in dot Nux and you open, uh, there should be a file called components dot D dot TS. Yeah. So that tells you all of the, um,
[01:13:14]  the underlying things that are made available to you in your template. Um, so if you were to, uh, hover over that top one, next welcome, and you should
[01:13:23]  see there's that dot dot node modules, P and PM, whatever. Oh, if you hover over default option click should take you to it. Right. Okay.
[01:13:31]  Um, and, uh, that would actually then show you the source code of the, or actually it probably wouldn't show you the source code. It would show you the
[01:13:37]  shim. That's the pain about TypeScript. There is a new extension in, in TypeScript that will take you directly to the actual file rather than the, the
[01:13:44]  shim. Ah, okay. Okay. Well, Vola also has a mode where it, it does that. It's called takeover mode. I, I,
[01:13:50]  I believe you though. I see what's happening. We have auto code gen in the background, which finds everything and builds it into your build folder and you don't
[01:13:58]  have to worry about it. Yeah. If you were, if you were to create a components folder and stick something in it now, it would get added to this file and
[01:14:06]  it would then be available to you in your, um, in your template, not only to use, but also you would get type support for it. Right. And is
[01:14:13]  that a specific quality of the components folder? We actually have this sort of auto, not as advanced with the TypeScript stuff, but we had the auto detection and marker.
[01:14:20]  this is one of the things I think was single file components. It's really nice, uh, feature to be able to have all the, uh, component detection.
[01:14:28]  So this is, I I'm somewhat familiar with like developing this way, but it is interesting. Is it, is it tied to the fact that it's the components folder
[01:14:37] ? Is that, is that how? Okay. So you can create your, so basically you can add more folders and modules that you're using can add their own as well
[01:14:45] . So for example, I have, uh, so there's a, like, um, any number of, so I, I maintain a, um, integration for
[01:14:51]  the sanity CMS. Um, you add that it injects some components that are specific for use with sanity. So those then get put into the mix as a user. You
[01:15:01]  don't see them show up in your project. Right. But you, you, you, you know that they're there and you get type support when you're using them
[01:15:07]  in your, in your templates. That's great. Yeah. Like I, I, I can see all the different stuff already. We got the lazy loading components.
[01:15:13]  We have the error boundaries. We have like all the typical stuff. That's probably wrapping your whole app to make sure that you're, you know, if someone just randomly
[01:15:20]  throws something, Nux shows a nice screen or like all that, all that stuff is kind of handled here in the background. Oh, that's beautiful. Uh, okay
[01:15:28] . Okay. That's cool. Um, so, okay. That's that part. We're not gonna hit too much today because we're just going to build our own
[01:15:35]  app with our own components, but this is our starting point. Yeah. Yeah. Yeah. I guess my, my question here is I'm, I'm coming from
[01:15:45]  like a, an HTML kind of background here. Like if the first question I, I, I would have when I come in here is how do I, uh, set
[01:15:58]  like the page title or something like that. Um, so, um, you can do it in several ways. But if you're wanting HTML, then you can actually
[01:16:07]  just stick a component in there called title, um, capitalize it, um, and stick the title in the middle of it. Right. You can also use a hook.
[01:16:17]  Um, I mean, that's what I would do. Uh, like if in, I, I would probably create a script block. Okay. You can create something called
[01:16:25]  script, script setup. Um, that, that, that thing that that's hovering over when you hover over that type template thing, uh, super weird. Okay.
[01:16:36]  Anyway, it. It's funny. I wonder if it's the version of Ola that you have. Um, that's the only thing I can think of. It
[01:16:42] 's disabled on template to enable configure JSX for server and compile arts. Why is it even thinking JSX when I'm on app view? Okay. Um, what
[01:16:52]  the B okay. Maybe before I get to that, I guess my question is how does the routing work? Because I'm going to have a few pages too. Like,
[01:17:01]  is this app, like the route that's above all the routing or. Okay. Okay. Perfect. So for apps that don't have routing, um, we have
[01:17:10]  a, a minimal and universal router. So you can access like a dollar sign route object. You can still call use router, but all it does is give you information about
[01:17:20]  the current route in the, in the, in the current URL. Um, except it does it in a past way, but it's super minimal. Okay. Um
[01:17:28] , if you want to use view router, which you probably do, which you do, because you have multiple pages, you just create a pages folder and you stick things in
[01:17:37]  there. Okay. Um, and the app dot view is like your, it's the frame. Yeah. And your pages are going to appear in your app dot view.
[01:17:46]  Okay. So, uh, did you create a page? Not yet, but let's, we'll get there in a second. Actually, now that I know what app
[01:17:52]  dot view, which is the question thing may, I still feel like that's the starting point before I put any pages actually in. As long as that me making the
[01:17:59]  folder doesn't cause any issues, uh, well, because. It will, but I'll, we can get to that when we come to it. I mean, I
[01:18:06] , I, I, I, it's fine. You can create the folder, but if you create the folder and don't have any pages, then your app will 40
[01:18:12] 4, uh, on like, uh, anything that doesn't exist. It's like there's no, no roots in your app. Right. But what I want,
[01:18:20]  what I'm looking at right now. Okay. So this is my old site and this is a beat site. I basically I'm thinking, how do I get the
[01:18:28]  equivalent to just like, you know, like this kind of stuff. Okay. So just, I would, I would start by copying that. Um, that the fastest way
[01:18:37]  is to just copy all of that stuff in the head. Yeah. Okay. Yeah. And then take it across and paste it in your app dot view in the template in
[01:18:48]  the div. It's fine. It does. Well, you, I guess you can probably do that, but do it, do it in the div. I would
[01:18:53] , I would, um, it actually doesn't matter. Yes. To get in there. Uh, and just capitalize each one. So, um, the only thing is
[01:19:01]  that, uh, char set is set by default, so you don't need to set it separately. Okay. Uh, and view port is also set by default and
[01:19:08]  you don't need to set it separately. Beautiful. Uh, but the other ones, uh, yeah, just capitalize matter and capitalize title. And those will just, um
[01:19:16] , to be fair, I don't, I don't have a fav icon. So I, unless next is giving me one, it's not going to give you a
[01:19:23]  fav icon. Yeah. I mean, the, the, the weird thing is browsers will try and get that fav icon anyway. Right. The first thing you'll notice
[01:19:30]  if you open a, uh, an, like a next app in a browser, you'll be like, there's an error in the console. Yeah. There's a
[01:19:35]  404 on fav icon. So, uh, yeah, always put a fav icon yourself. So. Okay. Well, I mean. And the one thing you'll,
[01:19:43]  you'll need to capitalize the other title as well. Um, but that should do it. You should now get, if you were to hit that with a, um,
[01:19:50]  like a coral or whatever, you should, you should see that the tags in there. Yeah. Did I, did I, we were, we're messing with stuff
[01:19:56]  here now. So now we should see the view, view hacker news. Sorry. We're time to update. We're Nux hacker news. And you're changing it
[01:20:08]  in the view app. I think. I am changing the view app. Thank you. Uh, yes, this is, I've done that on stream a few times too
[01:20:18] . People in the chat going, what are you doing? Okay. Um, okay. It's Nux hacker news. And if I inspect this, I am sure
[01:20:26]  I will see my, my head and because they're capitalized, it will know to put in the description and there's some other stuff going on, which makes sense pre
[01:20:35] loading and all that. Um, but it looks some of our components style sheet and we're in dev mode. So this all makes sense. Uh, okay.
[01:20:42]  So that's, that's cool. And I, I just closed it for no reason. Let me open that up again. Uh, okay. Let's, let's
[01:20:49]  continue on our way. Okay. So this is our base in here. And I guess the, the thing is we will want to specify where to insert our content.
[01:21:07]  I guess. There's a component called next page for that. Okay. So if you just, um, uh, like after the title or whatever, just insert a
[01:21:16]  component called next page. This is, this is, this is why you have this auto import thing. I was like going to like import and then you're like, no
[01:21:23] , no, no, no, no. Just, just, just, just go just next. Uh, sorry. Is it next page like this? Yeah. Now
[01:21:31]  your editor, like you're not getting any auto completion and I think it's all associated. Can you, you couldn't just restart your VS code? Could you just in
[01:21:39]  case it shouldn't be that, but just in case like, um, yeah. Yeah. Let's, let's, let's just quit everything. It's a,
[01:21:45]  it's a total pain. You should be like, you should be all the, all the stuff that I've stuck in there and, uh, slaved over.
[01:21:54]  Okay. Uh, so what did I, what did I reopen? Solid hacker news, view hacker news, Astro hacker news. Where am I? Okay. Goodness me
[01:22:03] . You've got a lot of hacker news is I've built it in abuse. Like the last one on my list. And so like, uh, yeah, no,
[01:22:09]  I've, I've built it in fresh, quick Astro solid, uh, remix next. Um, you, you name it. Okay. So where was I?
[01:22:20]  Okay. Yeah. Okay. Okay. And let's get it. Let's full screen this one. And then let's full screen this one. No, let's
[01:22:30]  do it the other way around. Cause this. Okay. I think you're getting some, there's like an improvement. Those things are colors. Yes. The link is
[01:22:39]  giving you something like this is slightly better. It's not. It's. Nuxt page. Look, next pages is, is, is not. Do you know why
[01:22:47] ? Why? Because you have no pages folder. So it is not actually available in your app yet. It's not being auto injected. If you try and reload your
[01:22:54]  thing right now, it will give you an error because it's only injected conditionally. If you have a pages folder. Okay. Gotcha. So someone in chat to
[01:23:03]  not SvelteKit. No, of course I've, I've built SvelteKit as well. Sorry. I, I've definitely have built Svelte
[01:23:09] Kit of Hacker News. Um, there's a stream on that. I did it. When did I do that? I want to, it was a while ago.
[01:23:15]  I think it was like in January. Okay. Um, so now we have a pages folder and I guess I'm porting my, my almost working view three of
[01:23:27]  the app over to this pages folder. I can, I can, I can just get straight to it. I want, do you got it's you, do you do
[01:23:34]  file based routing? If, if, if I, if I, if I write this, um, and you'll tell me the proper, uh, thing this, like
[01:23:42] , does this, is this something that I can do? Yeah. You can do that. That's a, that's like a catch all that will cover every possible
[01:23:49] , um, thing. If you drop the dot, dot, dot, it will only cover that param. Yeah. Um, but to be honest, it seems like you
[01:23:57] 've, you've totally got this, the handle on this. Yeah. The reason that I do this is, um, unless you have a shortcut for redirects or something
[01:24:06] , essentially slash has to go to top. And usually I keep top, uh, as slash anyways, in my examples, which means that, um, generally, I
[01:24:15]  use the catch all because I have to actually catch slash as well. And usually when you just put the prams, you don't collect, you don't catch slash.
[01:24:21]  Yeah. Yeah. You're right. I think if you just want the top, you would do index dot, uh, view. Um, but if you want one page
[01:24:29]  that handles everything, then dot, dot, dot stories is fine. Yeah. I mean, you must have other pages, right? Not just that. Yeah. I
[01:24:36]  mean, uh, the, yeah, the other pages that I have, um, and I don't know if I need to make a folder structure for it, but I
[01:24:43] 'm going to have a stories, um, new file, uh, ID. Yeah. View. And I'm going to have a, eventually, although maybe not on time
[01:24:53]  for stream today, a users, because I didn't actually port that one yet in my one hour marathon ID. And that one's the least important dot view. So
[01:25:03]  that that's essentially the structure of the hacker news app. There are three pages and three components. So it's, it's, it's something, something we can make
[01:25:14] , uh, relatively easy. I mean, I guess I can make a components folder if we're going to just kind of put this all in. And I guess the
[01:25:22]  first thing I actually, even before I got too far on the pages here is actually, um, there is one other piece that I actually want to put in here outside of
[01:25:33]  the pages, which is the navigation because the navigation, uh, stays the same on every page. We have that top hacker news bar. Um, so, uh, I
[01:25:42] , I have an old, uh, comment dot view component. Um, not comment, sorry, nav dot view component, which is using view router. And it,
[01:25:51]  and it looks like this. Um, yep. So, so you can just grab that and, um, copy and paste it into components. Um, I think the,
[01:25:59]  the view, um, pattern is to name thing. Well, you can call it whatever you want. No, no, tell me like the, the, um,
[01:26:07]  like the style guide recommendation. Where is it? Like these things are totally personal, but, um, is to call it the, if it's like one thing that is
[01:26:15]  only used one place in your app, like the nav. I don't know whether that you like that or not. This is complete personal reference. Yeah. Like this.
[01:26:23]  Yeah. The nav. That's right. Oh man. I know. I mean, I, I, I, when in Rome, no, I let's,
[01:26:30]  let's, let's do this. Um, so, I mean, to be honest, this will work. Uh, there's no need to make any changes to it
[01:26:37] , but if you wanted to, you can remove for the script setup. Uh, do, um, is view, do I have to add view router to my,
[01:26:47]  no, it's, it's here already. Um, if you add pages, then view router is, is there. If you don't add pages folder, it's
[01:26:55]  not. So it's, it's entirely conditional and you can replace, you can do a search and replace on those router links and make them next links. If you want
[01:27:02] , um, next links adds a couple of features, but you don't have to. Um, tell me about the features. So, um, it it's an
[01:27:10]  isomorphic component. It can handle external as well as internal links. So you can, uh, link to, to something else. Um, we also have a PR
[01:27:18] N that adds prefetching to these routes so that when they come into the viewport, we prefetch the bundle, like the JavaScript needed to render the page. Yeah
[01:27:26] . So that when you, so if you, by default, a view router app, um, like not next will bundle split all of your pages. So there's no
[01:27:33]  need if you learn on the index page to land the about page and all the stories, whatever you only need the JavaScript for that page. But in order to render the
[01:27:40]  next page, you need another bit of bundle. So the prefetching will make sure that when that is in the viewport, or maybe if you hover over it or
[01:27:49]  even sometimes on mouse down. Yeah. Before you click it fetches so that it's as fast as possible. Um, so yeah, you should be able to do that
[01:27:58]  by the way. I think the reason you're not getting at this point, um, any type support is that the dev server isn't running. Oh yeah. Yeah
[01:28:06] . I'm guessing. Cause you've, um, Oh, wow. This is the, it makes sense. And I know this conceptually it's because the, you
[01:28:13]  need the, the, the, okay. Yeah. Yeah. Hopefully. Yeah. the nav. Did we get there? Did I screw it up? Maybe. No
[01:28:23] , I don't think you've screwed it up. Um, it, it'll, it'll, it'll filter in basically it, it will depend just on how quickly
[01:28:31]  your idea catches up, but you should find the dot next components is, uh, has the nav in it. Yeah. Right. Okay. That's the main thing
[01:28:38] . Yeah. Yeah. Well, but okay. So beautiful. Okay. Now this, this app is a bit of a hack, um, so to speak, cause it
[01:28:47] 's not like, like, you know, it's, it's a demo app. So I just need to dump some global CSS somewhere. Yeah. So, um,
[01:28:54]  it's up to you where you do it, but, um, I create an assets folder. So an assets folder and then like main notes, whatever you want to call
[01:29:02]  it. Yeah. Uh, what did I grab this? From an view example. So I think main is kind of, uh, thing. So, so far going
[01:29:12]  from beat to next has been very easy and what people should see, hopefully now, uh, you will need to specify. So if you go into app.view, you
[01:29:22]  can import it. Right. Um, so you can create a script setup, uh, block and just say import. Um, yeah. Yeah. Uh, and then you
[01:29:34] 'll do. Actually. Probably. Uh, we use aliases. So just, um, like tilde assets, main dot CSS. Yeah. You get, you should
[01:29:45] , um, tilde dash, uh, forward slash. Um, and you should actually get type support. Yeah. Forward slash. And then main dot CSS. Uh, all
[01:29:54]  right. All right. Okay. Okay. So now you should have some stuff. Okay. So now we have our, our classic hacker news bar in view green.
[01:30:07]  Um, I love it. Yeah. Okay. So, okay. So then this is coming together and, um, yeah, this is, I just said, I
[01:30:17] , I very quickly scraped the example together going from options API. So the, the one thing that I didn't get to actually do, uh, was actually make
[01:30:25]  sure the reactivity all worked properly because I was like, just like letting, like putting stuff in. So we're going to, we're going to, we're
[01:30:32]  going to see how that goes, but, uh, I, I, I'm, I'm pretty confident here. Um, yeah. Okay. So yeah, people get
[01:30:39] , I just caught up with chat. People tell me that I didn't have to restart VS code and there's a way that I could just reload using a bunch of shortcut
[01:30:45]  keys. As I told you, I'm the worst person with tools. So I did not know about that command shift P and typing reload. Okay. Yeah. Okay.
[01:30:55]  Um, yes, this, the thing is just, I, I, I, I don't know what the thing is. I don't know what the thing yet
[01:31:00] , but I'm, I'm just, I'm, there's going to be a lot of, there's going to be a couple of us. I think, no
[01:31:05] , maybe not. No, I think that's the only the, there's the, the nav and then there'll be comments and story. Okay. So what I got
[01:31:12]  to do now is I w I'm going to show you my old story page and we're going to stories page. Um, and we're going to see if we can
[01:31:19]  actually move this over because essentially, um, there's a template. it depends on a story that it loops over. There's a couple of links. And then the
[01:31:31]  key thing that I'm doing here is I just made an async, uh, uh, set up script tag essentially where I grabbed some stuff from the router and then doing
[01:31:40]  a weight on it. So actually I need to do two things here to begin with, and maybe it will organize the project better later, but I'm going to keep the
[01:31:47]  structure here for now. I'm going to bring across my, uh, my, my, my types for the, for, for this. And I'm going to
[01:31:58]  bring across my, um, my, uh, my, my, my API, which is just wrapping some fetch calls. Do I have to do anything special with fetch or
[01:32:06]  can I just use fetch on the server? Like does. Um, so you can use fetch on the server, but I'm going to tell you a couple of things.
[01:32:12]  So one is, uh, move that API into, um, composables into a composables folder. Okay. That's going to make it available to be used everywhere
[01:32:23]  in your app without needing to import it. Okay. Composables. Um, the second thing is, um, instead of fetch, replace those with dollar sign fetch.
[01:32:37]  Okay. All right. So there should be, actually there's only one. It might just be one. Okay. So dollar sign fetch and then remove the, then
[01:32:46]  our, our JSON. So you can just, yeah, precisely. And that, what that will do is it will do that. It will make the request and then it
[01:32:55]  will, um, pass the JSON for you. Beautiful. Okay. Yeah. As you can see, I've abstracted this out. This has made it very easy for
[01:33:02]  me to move between all the frameworks. Just copy and paste this one file and we get, we get, we go to town. Okay. So this is, this
[01:33:10]  is fine. I'm, I. I mean, to be honest, you could have kept it exactly as it was. It would have worked fine. Yeah. So it
[01:33:16] 's, it's not that, um, you have had to make that change. Uh, fetch without the dollar sign would work exactly as you were expecting. And you could
[01:33:23]  do then r.r.json. But this honestly is a nice thing. Yeah. I, I feel like I, I, I feel like I'm,
[01:33:29]  I've typed so many times in my life then r.r.json that I could basically name, name. Like a loved one that. Yeah. Yeah. Yeah
[01:33:40] . I know. It's one of those pieces of the API that you understand why it exists because obviously fetch can do everything, but you're just like, why do I
[01:33:47]  have to like type this every fricking time? Um, you know, and you start coming up with short ways of doing it. You're like, Oh, if
[01:33:55]  I'm using async await, can I like chain the awaits and enough brackets and make it shorter? But you know, conceptually you're like, ah, this like
[01:34:01]  sometimes, you know, you're just adding extra promise resolutions that you don't need just so that you can. Yeah. Anyway. Yeah. Sorry. Weird tangent. Um
[01:34:12] , but, um, yeah, so let's, let's, let's look here. Okay. So now we have our API in the composables. We have
[01:34:20]  the, the, the nicer fetch and, um, I, yeah. Okay. I'm, I'm, I'm, I'm good with this. I don't
[01:34:27]  know if I actually wired the types up properly. Let's not worry about that for the moment. Um, now. Okay. Going back. I'm going to bring over
[01:34:35] , I guess the first component I'm going to, I'm going to bring over the internal component first. Um, yeah. Yeah. So let's take a look
[01:34:43]  at story and make sure that this still looks good. Um, I imported I story from a types file I was telling you about. Yeah. And then I, uh,
[01:34:52]  so then I just defined prop story of type I story, and then it's more of the, of the same stuff, uh, that, that we were seeing before.
[01:35:03]  Um, I think I can keep almost all of. You can, you can keep, you can keep all of it. Um, like that if you, if you
[01:35:11]  want the, like the Nuxt native way to do it, um, you would change that to, um, the, oh yeah, types. That's not in
[01:35:21]  your pages directory, is it? I can't quite tell. No, no, no. It's outside. Um, let me just go paste. If it is,
[01:35:29]  if it is in your pages directory, it would be made into a page called types, which you don't want. No, uh, it's top. It's top
[01:35:36]  level. Uh, it should be. Yeah. So which means I need to actually go up one more level or use a something. Where did I put types? I call
[01:35:43]  it. I have this really odd feeling that it might be in the pages directory. It just like. Yeah. That's hilarious. It's VS code. It's
[01:35:50]  like, it is impossible to tell what level it, the thing is on app. Um, so you can, you can import it just with an alias, uh,
[01:35:57]  tilde, which means like the, the, the, um, source directory of your, your app. I personally, I, or you can use relative. It's totally
[01:36:05]  fine. Whatever you like. Okay. Beautiful. And the router link can also be Nux link. Again, if you, if you want, it's let's do
[01:36:12]  it. Let's do it. The router link will also work. But, um, but if you, if you, if you want to make it all Nux
[01:36:17] . Yeah. That's, that's my intention. Yeah. Beautiful. All right. You could tell probably that I might not be using the latest syntax and all this.
[01:36:26]  This is like Evan, this is copied straight from Evan, but as I said, Evan hasn't touched this, uh, repo in five years. Um, so he's
[01:36:34]  made, he's remade this. Like in like, I went to the link for, for, for everyone who doesn't actually know, I'll give you a
[01:36:41]  little quick history here. Uh, a long time ago, there was something called HNPWA. Um, and it was a site and it just put every single hacker
[01:36:51]  news demo that anyone wanted to post up on here for pages and pages and pages and pages and pages and pages and pages. But the, no, the problem is none
[01:36:59]  of these work. They're all unmaintained. You got to go for miles. And like the first, I didn't have to go too far, but you gotta
[01:37:06] , you gotta understand, like, I was looking for one that was kind of like a good style and fit with like what I wanted to do and stuff. And, and
[01:37:13]  the thing is you can't even, I went through a bunch of them and they're broken. And it's, and then I got the view and this, you can
[01:37:18]  see, I, I mean, I'm not using the, the view V here, but you can see that this is, this is our, our hacker news demo.
[01:37:24]  But if you click view app now, this is, this is what's there. This is, this is like now a completely different. Different thing. Someone's grabbed
[01:37:32]  the, um, the, the sub domain. Yeah. So, but the source code is, is still intact. And as I said, this is like, I'm
[01:37:41]  burying a relic, but you can see this is, this is the foundation of, of the hacker news demo that I've been making over and over again. So
[01:37:47]  big thanks to Evan for that one. Um, but, uh, yeah, I just wanted to quickly show that off. Okay. So yes, this is like,
[01:37:58]  this is, this is straight Evan code from like ages ago. So, um, this, um, I'm going to leave as is because we're going to assume that
[01:38:07]  everything is good. And then we're going to get to the, the, the fun part, which is we're going to, um, we're going to figure
[01:38:18]  out how to do data loading in, in the next. I guess my first question is, is it any, like, yeah. What, what, what, what are
[01:38:26]  we doing here? Cause should I just copy paste this up? Yeah. Just copy the content there. Exactly. All that content can go in that. I'm guessing
[01:38:34]  it's the dot dot dot stories, uh, page. Yeah. Um, and basically we'll, we'll make a couple of changes. So yeah, the next links
[01:38:43] , like we're, we're on board here. Uh, you can remove the import from view router, uh, and remove the import from component story and remove the
[01:38:52]  import from get stories. Um, and everything else should like, that should work. So if you hit that. I have to ask how, is it just like, how
[01:39:03]  do you deal with conflicts and stuff? Cause I'm just thinking I have a file in composables that literally just exports some random stuff that I chose to name it. As
[01:39:11]  long as I don't name something else, get story in a different file, then we're good. Like, is that. Yeah. If you do, it will tell
[01:39:19]  you. Yeah. So it will say, Hey, we're not overriding get stories. Cause there's already a get stories. So it will tell you that
[01:39:27]  there is a conflict, but, um, so let's just check. Hover over get stories for me. Is that, is that like typed? No, I,
[01:39:35]  that, yeah. I mean, this is what I was saying. The problem with the, this API is I, I might've copied it from one of my non typed
[01:39:43]  ones. So it is semi typed, but what I'm missing here is I actually need this to be an eye story. I, I, I, I, I
[01:39:53] , I, I, I, I, I, I, I, I, I. And in fact, you probably could do that on. Yeah. Yeah.
[01:40:04]  Perfect. Um, what is, what is it complaining about? Oh, it's saying that the array isn't a promise and that it's saying that. I, I
[01:40:12] , I. Okay. Like we're, we're in type script. Like, uh, oh, what do you know? Okay. It's mysterious. Um,
[01:40:19]  yeah, I, I don't know. I, I mean, it's fine. I, we're, I'm not worried too much of those. I'm just
[01:40:23]  making a demo. I, why is this not get? It's because I didn't. It's because fetch is typed. Um, and if you don't pass the
[01:40:28]  type to it, it's unknown, which to be honest, we had a, a debate about that and I, um, I'm afraid I, uh, yeah
[01:40:42] , there you go. Beautiful as just trust me, believe it. And there we go. Yeah. I mean, this is how I type script when I'm not writing
[01:40:52]  my library code. This is, this is like my, in my mind, the difference between a library author and an app author. App author, you're like, this
[01:40:57]  is what you, this is how you app author. When you're a library author, you're just like, no, you can't do that. Do you want to
[01:41:03]  see something cool? Like, I don't know if it will help your app or not. But if you create a folder called server API and stick something in there,
[01:41:10]  like an, like an end point, you might not want to know that. Yeah, that's fine. You don't have to know. You don't have to see
[01:41:17]  something cool. You can build that. We can build that app. I'll tell you, show you another day. Okay. Yeah. I mean, are you talking about
[01:41:23]  making API endpoints? Essentially? I'm talking about making automatically typed API endpoints. Yes. Oh man. The people in chat are probably gonna be like, Ryan,
[01:41:32]  make him show you the cool stuff. Get him to show you the cool stuff. You're keenly aware of the fact that like, you haven't booked five hours
[01:41:41] . Yeah. Yeah. Yeah. Yeah. You weren't originally planning on a stream that was five hours, but yeah. Yeah. So, okay. Let's, let
[01:41:48] 's just keep on going. So now that's fine. And I'm not going to worry about this. Cause I, for some reason it thinks it could be an
[01:41:53]  array. I'm very confused by that, but I don't care. And if, I mean, I don't. Oh, the reason it thinks it's might be
[01:42:01]  an array is that param, like the stories param is an array. Uh, it's like an array of chunks of, um, no, it's, it's
[01:42:10] , it's fine. Cause you're looking for, actually, why are you looking for page? Uh, maybe this is what we need to. Oh, oh. Where
[01:42:16] 's right. Age and type. Right, right, right, right. It's because in the old app that, that, that can, can I use query params
[01:42:24]  here in, in the old app that, that, that, that Evan did, he did a double combo. He did like, uh, he did like, he
[01:42:30]  did, uh, he did, he did slash, he did slash, uh, sorry. He did slash new slash two. And most, most of my apps, I
[01:42:40]  actually do this, but I, I, I could go there or it's up to you. So basically, um, which do you want? Um, since I wrote
[01:42:52]  the app using the other one and I'm copying the templates, I'd rather probably just do. page slash two. So we probably should. Okay. So can I
[01:43:02]  just rename this? No, no, you can keep it as you want. I mean, it's up to you. Can I do this? Ooh. Uh, but
[01:43:09]  there's no slash. Like you could do that if you put a slash in. Right. Okay. But, um, but you can have complex file names, but sl
[01:43:18] ashes have to be directories. So if, if you want like, um, like a Twitter style at username, you could just put at the beginning. And then
[01:43:26]  have a square brackets. Do you know the challenge here? This, the one argument for using pages, uh, actually not maybe we should use it the other way because there
[01:43:35] 's a whole bunch of optional parameter considerations here. And maybe that gets complicated because you can also have, um, you can also have like, you know what I mean?
[01:43:43]  Like, like, cause then, then you have one, like, you know, can we do query params? Um, maybe that's just. Yeah, totally
[01:43:53] . So, I mean, it's easy enough. Like the thing page is the thing that should be a query program. Right. So make that root dot query dot page
[01:44:00] . Oh, query dot page. Oh, okay. Yeah. No, no, no. That's not a lot changed. Right. So, um, and then
[01:44:08]  type is going to be now. How many, um, segments are there going to be in this URL? Cause we have dot, dot, dot, but it sounds like
[01:44:14]  it might just be one. Yeah. So you, oh, but I see you also want to get the, uh, like if it's empty. Well, anyway
[01:44:22] , that's going to be stories root dot params dot stories. Um, and yes, you can probably destruct, uh, like not type, but stories. Did
[01:44:32]  it? Oh yeah. Yeah. Yes. Yes. You can call it type if you want, but it would be double type then. You're right. You're right
[01:44:39] . This is, this is what happens when you port the stuff back and forth. Um, yeah, exactly. How many times is it? No, surely that. Yeah
[01:44:44] . It's already displaying stuff. Yeah. That's super cool. Yes. Amazing. So, okay. We, we, we have, we've, uh,
[01:44:52]  okay. Now this isn't reactive yet because as I told you, I didn't actually make it reactive properly. And I was hoping you could help me fix that right here
[01:44:59] . Um, because. Okay. Well, a couple of things. First we, there's one improvement we can make on the data fetching. Yeah. So at the
[01:45:06]  moment this, the way this data fetching is work works is on the server. It will fetch the data. And then on the client, when it hydrates, it
[01:45:11]  will fetch the data. Oh, okay. Yeah. Like we don't want that. So what we can use is a next helper called use async data. So
[01:45:19] , um, it's just a little bit, you'll insert. You're not going to change it hugely. Okay. So just say const, um, uh, const
[01:45:27] , uh, and then destructured curly braces. I wish there was a better like hand signal for curly braces. Yeah. Um, data, uh, colon stories.
[01:45:36]  Gotcha. Uh, equals await use async data. Uh, and then just say, um, like arrow function, uh, get stories type page. Sweet. Sweet
[01:45:56] . Yeah. I, I, I'm. So that should basically mean you'll have to check, uh, just in the network tab. So that should mean that what
[01:46:08]  happens. Now. Okay. Yeah. Is, is this a tracking context in here? Um, yeah. What do you mean? Uh, yeah. Let me see
[01:46:18]  here. So, okay. First network tab. Let's make sure that we aren't doing any, uh, no, we are no longer doing any fetch. Uh
[01:46:27] , HR this is only happening on the server, I believe. Perfect. Okay. And then, so what I meant was, I mean, this is me solid is super
[01:46:38]  fine grain. So I'm super used to thinking about where reactivity happens. So like part of me is like this whole setup function is, is in, is probably in
[01:46:47]  a non track zone. So you need to like put the access to the, of the reactive parameters inside a place that is actually tracking like a computed or a. Or
[01:46:56]  something. So, um, actually I can't recall off the top of my head. If you go back to the, uh, the browser and you click a link to
[01:47:04]  see what it does. Yeah. It's not, it's not updating the state. I think what's happening is this component's being reused and we're just changing
[01:47:14]  the props coming up. Exactly. So what we want to do in that case is if you go into the, um, now that there, there are a couple of things
[01:47:23]  here. So one, the let, um, because the script setup gets run once it gets run when the component is. Yeah. Run the first time. So,
[01:47:33]  um, you can do this in two ways. Yeah. Yeah. So one is that, oh, I see you're using the page in the app. Okay.
[01:47:41]  So, um. I, I, I mean, this is my theory. If you, oh no, okay. That didn't. No, you're, you're
[01:47:46]  right. Absolutely. But just gonna wrap it in a, in something called computed. Yeah. So if you say, uh, const page equals computed and then keep the
[01:47:53]  arrow function that you're exactly right there. Yeah. Um, so it's like, um, computed and then that's a method and inside it is that, uh,
[01:48:02]  that function. Yeah. Yeah. Um, and then the same with type. Uh, and then in your, uh, in that use async data, we're gonna
[01:48:11]  make type.value and page.value. You don't need to make any changes to the template because it's, and obviously. Yeah. The template will automatically unw
[01:48:20] rap them. And actually there's a, it's a experimental reactivity thing in, in view, which would let's use something called like dollar sign compute computed that would
[01:48:29]  unwrap them for you in, in the, um, in the script setup as well. Is it, you have to enable it. Um, there is an option in
[01:48:35]  next config. If you want, you want to use that. Yeah. Yeah. Okay. I'm familiar with the syntax. I've looked into ref sugar or whatever it
[01:48:41] 's called these days. Yeah. So great. Go into the next config. Yeah. Um, and type, uh, exp the, the key is experimental. Uh
[01:48:52] , and then it's an object. And, uh, if you, I think it's like reactivity transform. Uh, yeah, that's it. Just let that
[01:49:00]  to true. Okay. Yeah. Computer, do I think important? Do I have to restart everything again? Why would it, is it? Experimental feature changes.
[01:49:21]  It is. Oh no. The only thing is that you, um, yeah, I might, the restart has, you can, you can import it from, oh,
[01:49:31]  is it, is it fine when you restart? I think we made a big enough change that, that it was just like, what are you doing to me here?
[01:49:37]  Okay. So what am I not doing right? Okay. So the neck, no, you're doing everything fine so far. The one thing that we need to do now
[01:49:44]  is actually, this is a bit ingrained. So yeah, we're going to tell use async data. Yeah. Uh, we have, we have two decisions
[01:49:51]  to make. Um, so how we want to cache the data. Do we want to store the cache based on the type in the page, whether we just want to always
[01:50:00]  to refresh, um, probably it's going to be more performant to store the cache. Anyway, either way, what we're going to do is we're going to
[01:50:07]  pass a second, a second parameter to use async data, which is an object. And it's going to have some keys in it. Um, there is some
[01:50:14]  properties. So the first one is key. So we can actually set and the importance of key. If you don't pass one, it will cache it for the instance.
[01:50:24]  So this line where it says use async data will be assigned a key. So the data can be matched up between server and client. And that means that even if
[01:50:34]  the data change, like it's the, still the same instance of data, but if you want it to be, um, well, we, we can ignore the key
[01:50:44]  for now. Um, but if you want, you can specify a key that is to do with the, um, the, the content, um, of say page
[01:50:53]  and type, but all we really need to make this work is type watch. Um, so this is that this is what's going to trigger the rerunning of the use
[01:51:03]  async data. And you should just be able to type, um, an array and put page and type in there. Okay. So yeah. Okay. Okay.
[01:51:11]  So yeah. Okay. It isn't a tracking context. I'm just, you know, like when I say tracking context, I mean like a computer or a watch expression
[01:51:16]  is a tracking context in that you like it's inside this function. It will automatically detect that page or stories or whatever, like query parameters or whatever change. Um, so
[01:51:28]  just, okay. Oh, one minute. Why is that not working? That is super weird. Okay. Part of it is I am going to have to actually go around
[01:51:37]  and update some of the URLs here, but that the, even with that, with that, with that into consideration, I would think that the top level one would change
[01:51:47] . Right. Uh, so. Okay. So we have page type. This gives us stories, stories fetch based on type and page. Hopefully this, I got that right
[01:51:58] . And then in here. So. Yeah. Set. Um, there's one more option just to change, but honestly, um, there's set, uh, initial
[01:52:08]  cash false. Um, after watch. Yeah. Okay. Yeah. Like this is, um, yeah. Okay. This is, this is interesting. Cause to be
[01:52:25]  fair. Oh, uh, no, this is the next one to be fair. The, the view. Check your console. Uh, uh, Oh, the issue
[01:52:35]  is our reactivity transform. So we're passing in a, um, what we want to be, uh, reactive, but it's being transformed. So it's non
[01:52:46] -reactive. Do we have to do something weird like this? I'm sorry. Yeah. Is it that, or I don't even. I think you're
[01:52:52]  right. Um, so I think a single dollar sign. Yeah. Single dot. Is it a single dollar sign? Okay. Or. No, you're right. It
[01:53:01] 's double. It's double. Uh, okay. Uh, what am I doing? Okay. Uh, what am I doing? Okay. New show. Oh,
[01:53:10]  damn it. Sorry. Just a second. I got spammed in chat. All right. There we go. Gone. Okay. Um, maybe, maybe, maybe we
[01:53:20]  should just go the other way. Um, let's, because I, I mean, I was. Okay. Yeah. That's interesting. Um, it's not complaining
[01:53:29]  anymore, but maybe I don't have the syntax right. Right. So, um, you can, yeah, no, I think it's the, the double is
[01:53:39]  right. Um, if I, oh, it's cause I could, you could, you could, you could do like, um, a function, like arrow function to
[01:53:47]  page or arrow function to type. I think the double dollar sign was, was correct though. I think you were right there. Um, but the, the, there's
[01:53:55]  one more thing we can try. Okay. Although I, I suspect that there is something else going on here that we need to look at. Right. Um, but
[01:54:04]  there's one more thing that we can try, which is we can try, um, uh, actually defining the page. Um, so if you, if you, um
[01:54:14] , type a, add another line here, uh, before the end of, of the script tag, uh, and you type define page meta, we can actually specify
[01:54:24]  a key to ensure that this page is going to re-render, um, and pass it an object. And we weren't going to want to pass a key in
[01:54:32] , um, and that key should be a function. So key, uh, is going to be, is going to take root, um, as its, um, object
[01:54:40] . And so what, uh, like, uh, um, for like use root, like, like it's going to, is like route. It's taking route as
[01:54:49]  an object. Um, and, uh, sort of like this sort of like, like, yeah, that's exactly. And what we're going to do is we
[01:54:57] 're going to say, um, I don't know, root dot, uh, params dot stories. Okay. Um, what, like whatever we, what we want
[01:55:10]  is to give it a key. That's going to force us to re re render. Um, so that's going to be an array. I guess it will probably convert
[01:55:19]  to a string. We could also do this. Yeah. Oh, I, oh, I guess it's actually trickier than that. Cause it can be also an
[01:55:27]  empty array. Um, so that might be undefined. I'm just going to take this logic that we have here anyways, and just, you know, same logic
[01:55:37] . So this is going to be a unique, uh, key. Um, but yeah, I, I feel like, I feel like maybe we were, we're already
[01:55:46]  like, there's something else that I'm missing here. Uh, okay. I know the page isn't working cause I'm not getting the right link, but the
[01:55:53]  question, it should be, it's actually this one. Why aren't we getting the top? I think to be honest, all that we've done so far, we
[01:56:01]  shouldn't need to do. So I think there's something else going on here in terms of let's look at the nav. What is actually the. Can I look
[01:56:09]  at this? Can I just look at what story? Yeah. Look at some stuff. Look at some data. and, and, uh, uh, page type and
[01:56:18]  see what it's actually getting here on the. Okay. So this, okay. It's fine. And okay. There's, there's nothing here. Top. Now
[01:56:31]  let's try and actually navigate somewhere. Okay. So what I'm not actually seeing. Stick something. Like the point is you're pressing more and the page number isn't
[01:56:43]  even changing in the nav. this isn't about data fetching this is about there's some reactivity somewhere in the in the component um that is the like so let
[01:56:53] 's look at the um let's see if we can actually look like at the nav like what what's going on there well the navigation that you're seeing that we're that
[01:57:02]  we're showing the page number is is actually oh is that is this page which should be this page which um which should be directly porting what we're getting from the
[01:57:14]  query but we're not doing the page let's not the type sorry it's type that we care about um well i mean the page is simple right it's a query parameter
[01:57:24]  and we're appending it okay what's going okay we're not yeah well if that's the case uh sorry i need to fix the links i hadn't done that yet
[01:57:31]  so let's go into the story and actually uh uh is it story no let's go into the it's in the nav sorry not the nav it's it's in this
[01:57:38]  nav we actually have to change it from slash to um page equals and we need to change it from uh where is it type type type colon page equals um you can actually
[01:57:58]  do this a little simpler by using an object syntax with um yeah okay so great so we get actually why is it all working oh i bet it was because the page was
[01:58:11]  undefined and when you pressed it the first time it switched from undefined or one to one the thing is the page works the uh the the the this one doesn
[01:58:26] 't work now the pram one doesn't work now so that fixed our page that's what the so the page was always working i guess okay so then it just didn
[01:58:35] 't have the question mark so yeah what's going on with root param stories i guess that's the question right right because yeah because story are so it's type the type one
[01:58:47]  is the one that that that isn't that isn't updating because page is updating but the type is not um and that's interesting because the type yeah there's there's
[01:59:00]  nothing that's but interesting okay so let's try to type so at the moment we've got um top yeah so click another link newer show uh yeah let's go to
[01:59:17]  back and do yeah still it's not okay it's not updating at all um well that's fine because we weren't expecting it to it's not rerunning the setup um
[01:59:27]  if you go back to um to your your app um let's change the key okay now it actually should be rerunning that setup honestly because the um oh i see you
[01:59:38] 're trying to get it there just actually rerun the whole thing let's let's have a look at the nav uh i mean like the nav component or no the actual one
[01:59:49]  the nav um because this one is just statically doing this um um let's change do you mind let's just change the stories to um shouldn't make a difference to
[02:00:07]  this and then totally not make a difference yeah and then not worry about the the base route and just hope that uh it's just okay uh what uh it's um maybe
[02:00:20]  maybe because i'm sorry let's just do that okay yeah uh let's try that view writer because we didn't actually oh no we're destructuring it we're um
[02:00:32]  looking for a um an array it's not an array anymore it should just be a um strength yeah to be fair the the funny thing about the about the uh the the
[02:00:45]  dot dot dot catch l route is i have actually um okay okay yeah i've had issues with this like it's like 50 50 in all the frameworks that i've done this
[02:01:01]  example and yeah obviously can't do slash but um i've i'm not above just putting an index in to no i think no no no it's like honestly we're
[02:01:09]  entertaining them so much um i i do to apologize everybody we do we do actually know what we're we're doing here some sometimes but that's true of everybody right every we
[02:01:19]  all experience this is my live code i i like constantly showing people what i don't know exactly well like i i it's uh okay so well we know we know so
[02:01:30]  the the issue is the um this uh catch all yeah so let's let's go back to the catch all um because we do want it to take index um and the uh
[02:01:39]  i probably need to restart again if that was the the issue there yeah um so what is the the deal here so that the key to be honest we shouldn't need to rer
[02:01:51] un we shouldn't need to key the root like rerunning the setup function is a um yeah you as you said like it it wouldn't actually probably need to be necessary
[02:02:05]  anyways right um like all of this stuff all of this should because it's computed right um and we we're specifically telling saying use async data that we we watch we were
[02:02:16]  watching these things and therefore it should re-run um i mean you can force it so uh we again drop the defined page meta uh yeah a bit um and just type
[02:02:29]  watch um so we're going to destructure another parameter out of use async data it exposes something called refresh um which is a method which you can call to force it
[02:02:41]  to refresh so what we're going to do here is pass a um an array uh to watch as the as the first thing the array is going to be dollar sign dollar
[02:02:52]  sign page comma dollar sign dollar sign type yeah and the same thing uh and then the next thing is just going to be refresh actually you can just i think we haven't dest
[02:03:02] ructured it yet but but we would you will just be able to type refresh it's a method and so what watch will do is it will um you're probably right it
[02:03:11] 's probably safer to do an error function so we don't accidentally pass it the uh the values of those things which it's probably not expecting um so that should i say that
[02:03:30]  this is the weirdest thing in the world at the moment i get off the skull i'm going to be like deep in it so i don't know whether it's this
[02:03:36]  experimental reactivity transform that's sort of messing with our ability to watch or something um instead of refreshing console log it yeah let's see what what on earth is going on and
[02:03:48]  why why we're not actually getting um this will give me what i want i think yeah that will totally i'd better give you what you want um okay and then or
[02:04:00]  okay this is weird um and at this point i'm starting to feel slightly vindicated because that's view view should jolly well be doing this if it's not what is
[02:04:14]  the double dollar sign yeah you know what you know we're we're just we're just we're just like we're we'll come back to the transform another day i
[02:04:23]  i want let's let's just let's just get rid of the transform and do this the good old fashion way i'm i'm i'm i'm fine with that uh
[02:04:31]  the hardest thing about compiler stuff sometimes like compiler magic is if when it doesn't work it's the hardest thing in the world to actually debug usually like let's let's just
[02:04:41]  get not the hardest thing in the world but let's just go straight into it so what i want to do here is for these i do have to actually reference type.value
[02:04:49]  but for all my watch stuff um yeah i won't have to and then let's just restart the server because you know to purge purge the the the shade of
[02:05:02]  a reactivity transformation no okay so there's something okay so the pages were still it's just it's just not listening like did i screw up this is this the problem route
[02:05:14] .prams is this just is this is this a real thing is it always top is it always question mark dot um like what is param stories in this case i bet
[02:05:25]  it's always top that's always top which means what have we done is it it's it's this this is just never um like it's just never finding this okay
[02:05:42]  console log root params and this is going to be the most embarrassing thing in the world for me but console log it what is root params yeah because one thing is for
[02:05:52]  sure it is not it's probably not what i'm expecting it to be yeah i think that's that's that's that's that's what we're gonna see here
[02:06:01]  i think uh okay i okay that's fine uh that one's top and oh id what what why is id there's no id here okay show let's jump id okay
[02:06:17]  all right let's i'm not expecting it to be id but i'm not it either but did we just no what okay yeah and if we're at show and we
[02:06:32]  go next page yeah we can and we go to ask go next page next page yeah we're we're in business oh i'm okay i i guess yeah i guess we
[02:06:45]  we yeah i i'm going to say i believe that to be a bug because it should not be id there is no way that should be id i think what we have is
[02:06:55]  this blank stories um brackets id thing going on that's the only thing i can think of why there's this id going on okay watch is necessary i just i just double checking
[02:07:06]  to see what i can delete here um yeah so the the watch expression is necessary and this is that and bang okay yeah um well we're not gonna worry about that it
[02:07:22]  works um i believe yeah yeah yeah yeah yeah yeah yeah yeah okay and root yeah okay beautiful so we're we're doing good i got one more uh i got one more page
[02:07:36]  i want to do though because uh it's it's i i wanted to this one is the landing page i just want to do the stories page and then we will be
[02:07:45]  in good good shape but yeah okay yeah i mean stupid okay so yeah uh yeah so this is a four loop and everything works good so then um i got one the do the
[02:07:58]  do the story page um it's gonna be the same thing again this time this one's gonna be a little simpler um and i think we can actually again one thing that i
[02:08:06] 've noticed so far in this process is that we uh we can pretty much just straight out grab um grab these templates from like from where i was doing before and just delete
[02:08:21]  stuff nuxt is just like you know it's fine you can you can do you can do your thing but we we can do even less um and get the same results so
[02:08:31]  i'm gonna paste this in here and if i've learned anything from here i can almost just delete like uh do any the imp is ref auto imported too like is it
[02:08:41]  just that smart i guess compute computed was everything is yeah everything should be there yeah so then uh uh where was i okay then essentially what i wanted to do here was replace all
[02:08:54]  the router links that's with nuxt links and link and then i think that's that's this component let's format it right and then we got a pluralized function
[02:09:11]  and this is actually our first piece of uh like actual like user triggered state yeah exactly and then we can just kind of throw this in here and uh um yeah i mean
[02:09:25]  i think that's should just look and then if we go into our stories idv we will look at our story view page and this should be almost the same pattern as last
[02:09:39]  time i'm going to copy start here except that we're going to this is our second time doing it so we'll just know exactly what we need to do and luckily
[02:09:47]  for us the parameter is called id this time by default so we won't it'll just it'll just it'll just be it'll be ready for us um so first thing
[02:09:56]  is we don't even need this or this which is amazing i think that's really cool or this just all of this stuff just disappears melts away um and let's see what
[02:10:08]  else we got we got router links see now now i know what i'm doing i i don't even uh i don't even uh i don't even and then uh
[02:10:15]  we got to do a couple little things first of all we're going to go back to our api and we're going to make it a promise of a story um and
[02:10:25]  we know how to do that because we know how to make typescript do what we tell it to and this is probably a real good fix for this but i'm too
[02:10:37]  lazy to do it and then essentially now we have our story and then we just need to copy this stuff so this is this is the trick um and we can put this
[02:10:54]  right here so i think i think i'm getting the hang of this now and then story and then this one's easy it will just be um route.params.id
[02:11:08]  which i'm going to add to here as well route.params.id hopefully that's all i need to do uh what is it complaining about uh okay remove this
[02:11:21]  because it's a duplicate and that's probably what it's complaining about um object of decoded params is it do i enter so it's not it's not it's
[02:11:33]  not a computer but you can you don't have to make it a computer computer you could just pass it off an arrow function so um like basically an arrow function can i
[02:11:41]  just do returning oh sorry it's still an array but one of the objects in the array is an arrow function returning root params.id beautiful right and then that will automatically
[02:11:51]  track within that context because you're making a tracking context and then it's still uh because this one's actually needs to be now get story singular params id needs and
[02:12:04]  it thinks yeah yeah and then uh i know this is wrong and i didn't get a chance to update it before the stream it should be user and like nice when you have
[02:12:15]  a little bit of a something to to catch you up on that okay uh all right we okay let's go let's go back what's our um two things to check
[02:12:30]  um so one is what is our um our page yeah yeah let's if you go back to the yeah code yeah so the the yeah exactly the code always the code so
[02:12:48]  we have we're getting a single story yeah um what is the length is there anything it's checking for length yeah that's the thing i don't i don't think so
[02:13:02]  what i think it happened was it matched against the wrong route let's look at what this was it still let's look what the the pattern is here because this is going to
[02:13:12]  go to stories basically we need to make sure that the priority is higher that um that i think the is this getting into the catch-all maybe honestly honestly i'm let
[02:13:26]  that's it must be that i this is the same thing that's coming back to bite us i'm i'm sure um so i think if we what do we do could
[02:13:34]  rename the catch-all um maybe not stories but something else so dot dot dot um okay oh do you think it's like playing that game or nested routing or something
[02:13:47]  i think it must be and honestly i i have a uh i'm i i will totally be trying to figure out what that thing jolly well is doing so okay then uh
[02:13:59]  what i need is instead of where was it yeah routes params okay now our theory is if i do this i've actually just in another window verified the bug um and
[02:14:13]  it is in the the routing and i'm i'm amazed we've never encountered it before but basically if a catch-all route is named the same thing as a as a
[02:14:23]  folder it pulls the folder in as a nested child yeah it's going to be dead easy to fix and i promise it will be done like then well i mean and then
[02:14:31]  it's after getting off this call um the thing is for uh for certain cases that is how you do nested routing i just i'm not used to it being applied
[02:14:41]  to the the wild card characters like if this was called stories dot view without the dot dot dot and there's a stories folder that's exactly what you'd want it to do
[02:14:50]  um yeah but yeah but still it's it's it's it's weird and uh yeah this this is what i i do i accidentally trip into bugs um so but this
[02:15:02]  is great though this works now and this works now uh and this works now and we have we have our working hacker news demo um and we have a spammer in the chat
[02:15:17]  block user okay sorry i've been so focused that i haven't looked at it looked looked in the chat and see if they've been screaming at us for the last 10
[02:15:24]  minutes i'm going to scroll up for a minute and just see if they had anything doing try index one react is great until you lose it yeah that's that's like my
[02:15:31]  motto i like i hope no i'm not i'm not a stranger to all this stuff people suggesting using watch people saying look at prams yeah yeah yeah yeah yeah collision id
[02:15:42]  of the stories directory okay yeah someone said that eight eight minutes ago so this is why you listen to chat um and that's right like listen listen to me it's straightforward
[02:15:55]  this is the problem honestly it's it's it's true uh yeah someone's asking me to help evan i to implement the way solid updates a dom i i think he
[02:16:07] 's already got a a prototype he doesn't need any help um there uh uh let me see stories square brackets view is yeah a story gets rid of the weird bug blah
[02:16:17]  blah more adult content that didn't get deleted um can i submit okay yeah can i submit the pr yeah yeah yeah it raced me okay cool we're up to date okay
[02:16:30]  let's okay so we got a hacker news um i'm i'm happy with this for now i mean i'll push up the repo at some point i can push it
[02:16:38]  up in a moment can i just is it can i am i better to try and do something like github integration type thing or can i just like like choose a target
[02:16:49]  for deployment and just uh so um do you have a favorite deployment target um i vessel netlify i'm i'm recently it's been netlify um okay so
[02:17:05]  you can do it in a couple of ways so when you can like put uh you can either use the you can use the netlify github repo like create a
[02:17:12]  repo link it to netlify there's another faster way if you want to yeah yeah like can i just faster or repo faster i i think it's fine it's
[02:17:23]  a cli okay and like we're talking millisecond milliseconds like setting up the repo is what you're going to want to do long term but it's also so if you
[02:17:30]  if you just want to stick it up immediately type nitro underscore preset equals netlify i'm sorry all caps okay okay sorry it's a environment variable so nitro underscore
[02:17:41]  preset equals netlify space uh pnpm build i don't like i don't install anything this is just gonna just okay okay and so build it for netl
[02:17:58] ify yep and then when that's done you'll just type ntl deploy okay um yeah so create ink of your new site um on the ryan carnietto
[02:18:16]  team and the site name will be uh nuxt hacker news and yeah this is all familiar and then where's the public directory is it dist is it uh dist uh yeah that
[02:18:31]  would be uh no yeah yeah yeah i guess it probably is um yeah just yeah just just okay that's what you want this whatever let's go netlify and i
[02:18:54] 'm gathering this is this a netlify function that we're deploying to um so um what it does if you're um lots of ways of doing this and by the
[02:19:03]  way this is not like there are some more improvements you can probably make um that i can as take you through but um but yeah you can go to it so it's deploying
[02:19:11]  a netlify function and it's going to be server-side rendered um every page yeah that's that's fine and then it'll server-side render page but then
[02:19:20]  client client routing takes over right when i'm i've already loaded it beautiful after that point client routing do you know there's there's one thing i actually forgot to do
[02:19:28]  uh when i think about the examples i didn't write suspense anywhere um and you don't have to do that it's done for you with pages okay yeah okay yeah yeah all
[02:19:39]  right um yeah okay so this is our working demo we got this prod build and you know what let's let's just go all the way you know what let's just give
[02:19:49]  a give it a good old netlify deploy dash dash prod you know let's go to production um dist yeah i mean i'd make a netlify tom will
[02:20:01]  the deal with that if i was so inclined but um that that's perfect yeah okay nux hacker news netlify app somehow i got that that's hilarious that's amazing
[02:20:13]  now now i have it forever after yeah i will i will uh i will finish out the app you have that promise me i'll make the user page work as well i
[02:20:25]  just wanted to get it out there because you know you know what i do i i like i i like i like i like you know uh yeah this this this is it and
[02:20:35]  it seems good it seems fine yeah let's let's let's let's let's just see something because yeah what i like to do is get get myself in a completely
[02:20:44]  open environment and just take a look at it you know okay length of null are we still there is still a length of null there is okay let's okay let's let's
[02:20:58]  i want to i want to do that first um where is my what did we what did we change it to so i changed it oh it's because i it's back
[02:21:08]  to being an array uh i bet you it's yeah that'll be it right yeah and then if we do this then we build for netlify and we we believe in
[02:21:21]  our in our fix so we're just going to go straight to prod um this is this is how how this is this this way brings brings tears but uh yeah we believe
[02:21:35]  in our fix yeah um and yeah i mean i've learned a lot i feel much more comfortable this is one of the things uh that's been challenging always when you kind of
[02:21:46]  enter in different uh zones and trying stuff okay so like uh let's let's let's open up our next hacker news netlify app one more time and hopefully it
[02:22:00] 's deployed yet this is this is this is what i get for going fast because then i don't actually fix the problem let me let me see if uh 3000 i gotta run
[02:22:10]  dev let's let's let's let's do that p pmdev because i thought that was all we needed to do it's hoping at least that's all we need to
[02:22:21]  do oh this is even better okay maybe it just hasn't deployed yet like there's a delay because i was gonna like we don't we don't have it here um
[02:22:31]  weird i did oh there is there is currently this this might be my fault for making use an edge release there is currently a um an issue with only two platforms so it's
[02:22:47]  not it's not deploying anywhere else but just these two platforms versatile netlify have a an issue and which i haven't yet tracked down so it could be that all
[02:22:57]  right um yeah okay i mean it's it's the error is like unfortunate but it does seem to be working at least um so i can i i mean i i i let
[02:23:08] 's let's i mean it's you know me i like doing this right so i just want to i just want to see i want to see what kind of timelines you
[02:23:19]  know there there isn't actually a ton to see to be fair this is pretty typical uh setup where we we can see our initial first paint script loading uh we don't we
[02:23:29]  aren't doing the api calls again on the on the client hopefully uh unless we are oh no so something happened yeah basically that's happened that's because that that's
[02:23:44]  what the bug is so that the error you're seeing in the message is that the payload isn't there if you have a look at the html if it's the
[02:23:51]  same one that i've seen reported um if you look at the html what you should see um is there should be there the entire um content of that initial ap
[02:24:02] i call and it's not there for some reason okay so it's it's it's saying oh there's some error it's not there can't read the length it's
[02:24:11]  just null and then it's performing a refetch to get the data which is why you're getting the both the error and the fetch right that makes sense and that that actually
[02:24:22]  that's very that means i can't i that's just not fair to check um check uh if if you want another platform um zero config have you ever tried storm kit
[02:24:34]  um storm kit.io no yeah see yeah here here we go this is what i was expecting yeah that's what it should be and that's that's a very strange thing
[02:24:43]  um yeah anyway other than i mean i could does our cell have this problem too because i i can do for cell if we want to yeah give it a go okay so
[02:24:53]  then is do i get to do the same little trick where i do for cell um i don't think so because i think the vessel will actually build it um so i think
[02:25:04]  if you just type vc okay yeah you don't need to build uh just type vc um i'm pretty sure vessel will build it and deploy it oh do you have
[02:25:17]  the vessel cli oh yeah new computer uh uh sorry uh was it npm dasha just g what is it just for cell cli i'm just npx vessel
[02:25:27]  probably is it just for cell uh yeah it's just just so oh yeah because like i haven't like that i haven't been logged into for cell in here uh so so
[02:25:38]  yeah it mpx i could i could is it if it's just for cell then we're probably fine um all right so but this means i haven't logged in
[02:25:50]  and i have to do all that stuff don't i uh continue with github sorry i'm gonna open this in another uh another another screen that's funny but just
[02:26:12]  to be clear i don't think the problem is with either of these platforms i think there's there's a bug in i think in maybe one of our dependencies that's
[02:26:20]  causing this issue not versatile or netlify just before i trash talk any platform yeah uh no not linking to an existing project my project name is nux hacker news is it
[02:26:34]  yep disk or just slash just just just here because it's going to take the whole thing build it um all right um nux generate nux nux output director disk
[02:26:48]  no uh these that's actually not right you because you don't want to generate you want to build it so just say yes modify it and change it from nux generate to
[02:26:55]  nux build build i think that's that yeah it's the only thing you'll need to change is the build command oh did i slide i have you got to use space
[02:27:06]  var on these down there uh it's it's now i think it's probably going to build and crawl the whole thing so you're going to get a full full hacker
[02:27:15]  news static site okay let's try this again oh right i have to okay we're gonna we're gonna make it forget everything it knows we're just gonna do this dot for
[02:27:28]  cell file there okay now it's gonna be like uh set up and deploy um yes brian do you want to link it yes but ask me the questions again no no
[02:27:45]  it didn't ask me the questions again oh no because it's pro it's set on the the um project on their side oh man okay we're gonna make uh no i
[02:27:55]  uh i remember when versa used to be um like almost fully on your site so it was all in the config file that you had in the project and now it's very
[02:28:05]  much the other yeah i'm quickly logging into versell right now so that i can see if i can do something on the project side um uh yeah so i'm in here
[02:28:14]  i have my next hacker news example and then i want to go to uh uh okay deployment error beautiful and then how how are we at looking at for cell clis let
[02:28:28] 's see here um so it's settings oh you've made the change no change no i haven't made it yet i just i just opened it so okay it's settings um
[02:28:39]  and then you want to run the uh build command um click the override to the right yeah and then type nuxt build and everything else should be fine just click save okay
[02:28:53]  and then uh with a there's some things you can do by the way to um improve the yeah i is that the one to improve the so so um we've not del
[02:29:11] ved at all into the server side piece yeah but one thing you can do that will improve performance um almost always is to enable swr on the server side um so if
[02:29:23]  you were to go into your uh nuxt config yeah you might not want to do this if you're trying to yeah i i compare it uh next bug for cell logs oh
[02:29:35]  okay i think if you just open that same browser you had a oh yeah you can click that door yeah oh yeah you're right i'm i'm literally right right right
[02:29:45]  there let's see what what what i am not doing right okay uh error error error oh it's probably could it be pnpm it's pnpm because we installed
[02:30:01]  it with a shamefully hoist but we haven't created a dot npmrc um so what you want to do is run um do you want me to give
[02:30:11]  you the yeah that would be like this okay echo shamefully dash hoist equals true well you can just actually create a dot npmrc input shamefully dash hoist
[02:30:23]  equals true okay yeah that's it and then redeploy that should be fine okay i'm i mean you were talking about stuff but i'm all i'm glad you know this
[02:30:33]  stuff because can you picture if i was i was doing this on my own i i would i might have had some fun although i wouldn't have been on the edge build
[02:30:41]  so i guess we kind of we kind of we kind of we kind of did this a bit i did this to myself that's what you're saying it's true but um
[02:30:51]  all right yeah this is my last little piece here i didn't i didn't want to keep you all afternoon um so let's let's see what we can we we
[02:31:01]  got going here uh okay well this builds going um yes okay yeah yeah and let's let's let's hope that okay uh let's go over here and i'm gonna assume
[02:31:18]  that we won't ever need to go there again because we're stuff just works magically it's all good we open this up there is no console error it's five favor
[02:31:31]  icon yep that's beautiful our app uh works although is it okay i got a question for you is is it this feels this feels the second okay no it's fine it
[02:31:47] 's funny it's it's requesting the i wasn't expecting it to request the fav icon on every navigation i was like for a second i was like are we doing are we
[02:32:00]  doing are we doing server routing here because it's what is it asking for a favicon every like on every navigation yeah which makes me think that it's actually not client
[02:32:13]  routing here uh oh interest i mean don't worry about that that's just the the api being crap um sometimes it gives me a blank page uh when you run out of
[02:32:23]  stories no what i'm what i'm looking at here is let's go back to interest okay so we're here we know it's not making a um why is it
[02:32:33]  requesting a fav icon okay that's interesting like it's fine that it's it's returning a interesting okay so netlify these are like slightly different scenarios um let me go
[02:32:52]  back to here okay okay localhost isn't running sorry that's my bad um okay so this one's netlify this one's for sell okay i'm on the
[02:33:07]  main page i go to this page if you um you probably already have it turned on but um that the if you if you have a look i bet it's if you
[02:33:22]  if you um go to the um cog on the far right of your dev tools at the top uh not that one but the one below it yeah yeah yeah sorry uh can i
[02:33:30]  get back out of here um this one uh and click uh preserve log yeah let's do that will um preserve fresh requests to the page so if it now if if you go
[02:33:41]  back to console and hit that ah interesting so uh so we're on we're we're on if you would just go to console yeah and or all will do it as
[02:33:53]  well we'll do it as well um then we can actually see okay so well the point is that it's it's um not making a fresh request no so um but for
[02:34:07]  some reason the favor icon is being requested either by uh the app or by the browser yeah and it might be the browser is weirdly requesting the fav icon because it's not
[02:34:19]  got it so far so maybe it it does it every time yeah yeah it's it seems like but the one thing i am noticing is that we are oh no we should be
[02:34:26]  doing the client side requests after the fact so yes sorry my bad the client side requests are happening uh yeah that you you will expect there to be client side requests as you
[02:34:39]  make subsequent navigations yeah yeah so that's fine um yeah okay the 500 errors because um we don't we haven't created one we actually have an open pr to create a
[02:34:48]  default favor icon okay um so so this doesn't happen um and users can always overwrite it but because it doesn't exist and you have a catch-all um it's
[02:34:59]  it's saying um there is no it's it's looking at favicon and it's trying to perform an api request to hacker news uh with not uh news or
[02:35:09]  show but favicon yeah yeah like it's passing that as as the uh the category um okay yeah interesting uh i wonder if that what that means is it's trying to um
[02:35:27]  uh like it's looking at the slug yeah yeah which is an array but it's undefined at the point where that was running but which is weird because i
[02:35:39]  was actually clicking on uh a different link like i was actually trying to get away from the from the the page it's it's matching it's matching the page when i
[02:35:50]  client route if i refresh the page it's it's fine if you go back to the code yeah um you might be able to change the watch mode um yeah okay so so
[02:36:04]  actually this was a recent change in view itself and like as to when the watch effect runs um does it run um before everything is reconciled or afterwards so uh at
[02:36:18]  this point um bear in mind this watch is going to run when page or type go to null so like when you navigate away from the page this is still going to run oh
[02:36:31]  so okay um which i think is the issue because it lists now no is no longer defined and yet we're still trying to get so i think what you would want is say
[02:36:40]  let type uh and then do it put an optional chaining in there before the zero so root params dot list question mark dot bracket zero um because at some point that
[02:36:51]  is going to be and then a dot as well um because at some point that's going to be null yeah um and honestly this will this will now be fine because it will
[02:37:00]  it will default to top and it will perform a request um which is not ideal like in a real app we'll we would um yeah yeah yeah stop that but but it's
[02:37:09]  not going to error and i think that that was what the thing was you were navigating away from the page it was no longer an array and um the computer was assuming it
[02:37:18]  would always be okay yeah that's it's interesting because we i didn't i didn't we didn't see that in dev that was the one thing that i the kind of
[02:37:28]  interesting here because when we we went here but we didn't look too closely um that's the story and then man interesting yeah but it is it actually yeah okay cool so
[02:37:45]  like first one nothing i moved to new as i moved around here there's no issue then i go to a story and it it did it it did request it again just
[02:38:00]  like you said it did and then and yeah did them both and you got the and then when i go back here it's going to do a nan because there's no
[02:38:07]  id and it's going to do them both okay okay yeah yeah i see so we actually want to somehow guard the guard here yeah so um you can just do that by um
[02:38:20]  you know chaining them in front of get stories so you could do what um type dot value and page dot value and actually you can't because um type and page are
[02:38:32]  always going to be defined uh no it won't in fact plus root query page or one is never going to right because um the plus is always going to coerce that
[02:38:42]  into a number um so i don't think that that will only work with zero or i guess a string yeah yeah the other one was was was this one um because they both
[02:38:56]  have the same kind of interesting situation because the one that was nannying was this was this one we left this oh no you're right absolutely that one that one is
[02:39:06]  gone but i guess what how what's interesting here is is there i less about the error but like how do you get it to not try to run this function again when it
[02:39:17]  like what's like it sets the criteria like so um i think i mean i'll i'll i'll look look so it's basically the um that there are a raft
[02:39:30]  of um refinements that are about to be made in view core itself around suspense in view 3.3 we're going to see some really nice things happening and this kind of
[02:39:43]  issue going away so at the moment um the way data fetching happens and the way that uh root blocking happens is via this mechanism called suspense which you know all about because you
[02:39:54]  were asking about the um the idea is you have two trees of dom sorry if i'm making this far too simplistic but so like you have two trees so there's one
[02:40:06]  on the screen and then there's one like in memory and what you want to do is wait until the one in memory is ready before swapping it out with one right screen
[02:40:15]  so like it's it is rendering those components exist they're running their life cycle functions that things are happening but it's not on it's not on screen um and then
[02:40:23]  only once it's ready does it switch now at the moment there's some interesting uh weirdness that you can sometimes happen because if the stuff that is happening with the new root
[02:40:35]  um so the root in a sense has changed but it's not reflected on the screen but if you have things on your page like use async data that refer to the root
[02:40:45]  the root has changed it's still on the screen because it's still on the screen it's still going to be reactive right right so and i that's the interesting thing
[02:40:56]  because i i am familiar with this in in react like are you familiar with it yes i should think so in react have you come across reactivity right i'm just wondering yeah
[02:41:06]  well in react the the way that they they they would have this problem too what they do is they they use something called uh transition or start transition and what that does is
[02:41:16]  it isolates the change um in so it can change on i mean i guess i'm explaining concurrent rendering it they they they isolate the change so that it can occur and the
[02:41:24]  current version that's on the page can be updated into independently um yeah but it's an opt-in because if you as you can imagine otherwise as you're staying any
[02:41:34]  state change is going to affect both trees um immediately yeah yeah we have a workaround at the moment in nuxt called use active root um and use active root will only uh
[02:41:46]  update after the transition is finished um but it's therefore it's not always suitable because sometimes you actually do want to render the the current root the one that's changing um
[02:41:57]  that's quite an advanced thing but yeah i think basically at the moment the one solution is so the way that view root or communicates root is it it uses this in provide
[02:42:09]  inject pattern so it provides a root object to all children um so those like children of the component can access this root object if we had a mechanism of injecting separate things to
[02:42:23]  the different trees it would all be fine because as far as one tree is concerned it's still on the previous route as far as the other tree is consistent on the new
[02:42:32]  one um and i mean basically so eduardo and evan are spending quite a lot of time working on this problem um and i'm spending quite a lot of time thinking
[02:42:43]  about it um but but that's the issue that you're experiencing here the the thing is and maybe the reason it didn't always occur on dev uh like locally it's it
[02:42:52] 's partly to do with speed so how quickly does the transition happen because if it happens immediately you're not going to end up with an issue but the longer it takes for
[02:43:03]  the um one page to transition to the other page the more time you have for the what's being displayed on screen to react to the change and perform its own action you might
[02:43:15]  also notice on the way you're rendering it there it's a flicker yeah that flicker is for the same reason because what's on screen is updating and anyway so
[02:43:28]  i would um okay i think uh i would use some i would use something called use lazy async data um which allows you to render a spinner or something like that in between
[02:43:41]  um and basically gets rid of the issue for you um and there are there are a couple of other other other okay yeah solutions to that but i i i was going to
[02:43:50]  ask you if the suspense foundry had a fallback when i was asking about suspense i was actually wondering if like obviously that's not always the best experience to keep on going
[02:43:59]  back to the fallback but it's it's still maybe something but yeah i look i mean are you saying that there's just like another method here that's like this
[02:44:08]  basically um yeah um and you don't wait you don't need to await it because they will not be resolved within the setup um so what it means is what will happen is
[02:44:19]  you have to handle and you do the case where there is no story yeah we're nothing it's still null yeah um and uh you would then display a that your load
[02:44:30] er at that point right okay yeah and obviously this is fast enough that i don't really actually care because i right but okay yeah yeah uh yeah i mean i saw it there
[02:44:43]  for a second but right and then you're basically like if story else or whatever do the thing okay and well does this change the dynamic of our of our of our of
[02:44:57]  our fetching thing no it did fetch on the way out again okay that's yeah that's interesting um okay i so i mean either the here or there are on that
[02:45:12]  that's yeah okay um okay um yeah i'm trying to think of what what i want to do here because we are getting a time i will kind of want to wrap wrap
[02:45:23]  up the the pages themselves individually work it was just the there's as i said just the double fetching thing is a little bit unusual which as i said if i do if
[02:45:32]  i'm just doing my normal like you know looking at a page low uh thing i'm not it's not going to affect me at all right like just kind of like
[02:45:39]  sitting here and being like okay uh what are where we uh the for someone if i just reload this page and kind of give myself a little uh uh profile i'm not gonna
[02:45:48]  i'm not gonna see the impact it's not going to affect that no yeah so just simply put here you know this is pretty pretty standard kind of stuff we yeah there we
[02:46:00]  go and and then this just out of curiosity because i always like to look in the in the in the browser yeah i will say nuxt and next are very very very
[02:46:09]  comparable on uh on size um uh just interesting little tidbit uh they're both about 70 kb in the browser for this for this page um the first page is a
[02:46:24]  little bit smaller always um as we already saw uh the way hydration works is we get our nice serialized uh data blob and this is some of the stuff that you were talking
[02:46:31]  about at the beginning of the stream that you guys are playing with some interesting ways to avoid having to do that i'm i'm gonna look forward to seeing how that shapes up
[02:46:39]  in the future um and what else do i want to look at here let's let's uh let's look at uh one of these pages again right this it's funny
[02:46:51]  there's like a slight difference like the netlify page works one way and then the versell page works a slightly different ways and then local works a little bit different so
[02:47:02]  um yeah i mean this is also uh yeah there's a couple little interesting things maybe as you said issues with the uh the adapter like the specific layer for the deployment uh
[02:47:14]  partner um but yeah okay yeah this kind of gives me an idea um yeah i don't know if if i want to do anything anything else specifically here i could i could put
[02:47:26]  this page through the death test if we really wanted to but uh i i i don't think it'll illustrate much one thing that i haven't uh been telling people recently is
[02:47:35]  uh page insights has got a meaner i i recently when i when i when i was testing stuff i saw the page insights got got kind of mean uh uh i was
[02:47:45]  i was trying to remember which which page i was on uh uh i was i was sitting here and i was like playing around with it like i always do and um and i
[02:47:54]  i found that it actually had uh had had gotten uh significantly um um meaner on the scoring of uh the there's this one it's funny that there's this grab
[02:48:10]  grab versal because then at left i will make a second yeah right right right right uh wrong one right wrong one i don't i i i'm not expecting much of anything
[02:48:18]  here but this is what i do on this show and i i i always kind of play around with this anyways um i wonder if i actually have um i'm gonna open
[02:48:27]  another tab this is my new computer so you know what i might not even remember the the the number no i have it here this is the the cursed number here this is the
[02:48:38]  this is this is the this is the terrible terrible one so we're gonna we're gonna give this a second um and just and just see yeah uh where are we doing
[02:48:49]  nuks for cell oh did i did i get the url wrong or is this just page just evil um it's it's it's i have experienced that um before i
[02:49:00]  guess page speed might be a robot that occasionally yeah yeah yeah okay so i got the right url sometimes it sometimes it does that yeah and there but oh now now now it
[02:49:11] 's now it's something i know that's the wrong one that's astro solid uh let's do this one um yeah and then it's it's actually doing the
[02:49:19]  the thing this time but yeah honestly this is the the i i did a bunch of streams and we progressively over time like saw different solutions kind of slot into this silly uh loading
[02:49:29]  test and this this is this this one is pigeoned against us uh a single page of app authors um because this page is so freaking mean um but yeah i mean the
[02:49:41]  thing is uh um uh uh essentially essentially it doesn't really matter which framework you put it into this stupid thing um unless you you're doing those new islands techniques you're basically
[02:50:00]  going to end up in the same kind of kind of boat um essentially oh do they cache stuff now like what's this look yeah here's a change and they are oh
[02:50:09]  that's going to ruin my my debugging techniques yeah yeah yeah like what what is this this is see like the first go is all you get out of it that's that's
[02:50:18]  lame maybe maybe we can go back and forth that's that's that's lame i it's probably um probably unfair of me to say but we actually have a nuxt hacker
[02:50:26]  news app i don't know if you you know no i i i i don't i i the thing is i this this is this is like the spa killer yeah yeah
[02:50:37]  that's what that's what i was expecting it used to be i couldn't get a spa above 50 it looks like i can't get a spa above 40 now essentially this
[02:50:44]  is the they they've they've tightened down their scores so yeah as on unsurprising nuxt next uh remix um are all basically in the same boat here on on
[02:50:55]  on this stuff i don't need to do any more highlighting on on on this side of things we we kind of get a uh feel for this that's not the advantage of
[02:51:02]  using something like nuxt but obviously this is uh this is just uh one of those things that i do and people in my stream expect me to do so um as i said
[02:51:11]  it's it's it's all in the same ballpark the single page apps um and where things are heading is a place where we're still going to do a lot
[02:51:20]  of work um so well but the reason i mention it is that the the score for that is quite a lot higher so i don't know i mean obviously the the fair thing
[02:51:28]  is to compare with the exact same yeah equal like so it's not about comparing next to the other um but if you check out hn dot uh nuxtjs.
[02:51:38] org yeah dot nuxtjs.org keep in mind this i am doing this on purpose with a very very mean page because yeah item yeah so this is a yeah that's
[02:51:50]  probably a good point i didn't test the the individual item yeah this this is this is this is why this is the evil one yeah this is what i was getting at
[02:52:00]  because uh yeah there it is three zero one it's not the the worst one in the world but it just happened to be the story that that showed up the the the day
[02:52:11]  that ryan florence was like the partial hydration that doesn't do anything real and like there's no real world there's no example of where partial hydration is beneficial and
[02:52:20]  i was like give me like give me give me give me a second um so uh yeah it was some facebook story but yeah i i mean this this test has kind of
[02:52:32]  over done its use i've managed to illustrate that the data serialization and hydration have expense but um and the funny thing is i bet i wouldn't even be yeah okay there
[02:52:44]  we go nice so we do nice it doesn't feel nice but yeah yeah but because we you know you know you know you know what i'm talking about right because like
[02:52:54]  this is this is basically one of those like stupidly difficult uh yeah you know what i mean as i said what is going on there what what kind of page is that do
[02:53:04]  you want to see what this page is this this i do do you know why i like this example i'll show you why uh sorry this is the next one where's
[02:53:11]  the next one this one um the reason i i play with this example is because this is this is this is designed to show one really specific thing okay so we're waiting here
[02:53:22]  it's it's a page okay oh do you know what okay i wonder why they they're reporting 123 comments here maybe it's the way you guys count the comments only the
[02:53:33]  top level ones this this page has 1400 comments on it and and the the lovely thing about this page is the comments are recursive so like they they layer in with each
[02:53:44]  other yeah so it's actually not the you could do it vanilla js like with a select or something but it's actually not easy to kind of cheat around this from a hydration
[02:53:52]  standpoint because the way that it's hierarchical like it it actually like the islands frameworks can do this cool uh thing where they pass static you know server components can pass the static
[02:54:04]  through and actually not serialize any of the data but but if you just take a single page app framework and try and solve this like by various forms of lazy loading you
[02:54:13]  you will fail so that's that that's that's essentially why i i chose this page um so yeah as i said this is uh this is this is just evil i but
[02:54:24]  i i as i said like and yeah i have i have no qualms here like people people are like oh yeah you're just trying to you know kind of think look uh
[02:54:32]  solid hacker news netlify edge here you go there everyone who wants me to drag it through the dirt we're gonna we're gonna we're gonna see the same kind
[02:54:39]  of this thing this is not this isn't this is not something that's specific to the framework that's specific to the architecture and i this isn't for you this more for
[02:54:49]  the chat just because i i i need to actually clarify that for people who haven't no this is not right this is because i don't have the stories on the end
[02:54:57]  that's that's that's the okay let's just try this again um yeah okay so let's let's fix that up okay yeah all right and actually that's a dip
[02:55:11]  i have not seen that page actually do less than an in the 90s before so i think i think there's yeah there we go 48 so i i just said it
[02:55:21] 's i i one thing that i i want to look into the lighthouse and the reason i want to run it again is my suspicion is that all our hacker news demos are 48
[02:55:30]  like you got 48 when you did the next again i i feel like if i was able to rerun the next app we made today hacker news we would make it because
[02:55:39]  my my gut feeling is the hacker news that you showed me this one that we're looking at yeah do you notice something this was built off the same shell like oh yeah it
[02:55:51]  was yeah this is the same app just you guys built it so uh yes that like this is actually because evan was the one who originally originated the hacker news demo and i
[02:56:04] 'm pretty sure that this is actually like the evolution of the same template that i've been using and we used on stream today so from that perspective i think we're all
[02:56:14]  still stuck uh at about 50 on that test which is where i like to do it because but the as you guys as everyone knows the the interesting part is that it gives me
[02:56:27]  a a kind of a a place to try and you know look at look at you know partial hydrated frameworks um you know like like quick and marco although uh and just
[02:56:39]  see the different kinds of uh uh scoring or the the impact on page scores at least of some of those things this is what i was talking about the beginning i need a better
[02:56:48]  benchmark because we need to be able to actually uh see the impact uh more than just uh or actually yes the funniest thing is i didn't actually this is one that i
[02:57:00]  actually didn't build so i think the url is wrong it is it's story singular but it's the same template uh there we go yeah this just to see the impact
[02:57:10]  of these things you know like your experiment would be a perfect kind of thing to kind of play around with with with this kind of stuff because um i want a better benchmark
[02:57:19]  so we can actually see the impact the lazy loading and stuff but like this is this has just been kind of so far the only way like i really it's it's
[02:57:27]  kind of like you know the old thing was like if you want to know how like fast something is one way to do it is like is like put ten thousand of them on
[02:57:35]  the page this is like that version this is like this version of that um so yeah like you can see you know like a subtle difference that comes from using island frameworks um it
[02:57:47] 's as i said lights uh the page scores are starting to pay attention to stuff and they've gotten harsher i remember i brought fred from astro on stream and
[02:57:55]  we spiked a 94 on this page i and that was the scores back then i can't get a 94 anymore on this page with any with any framework so uh it
[02:58:06] 's just kind of this anyways this is just me talking nonsense that i do at the end of uh most streams i actually i'm going to switch gears here does anyone have any
[02:58:15]  more questions for um for daniel in the chat before i actually got one more segment that i'm going to do but as i said i don't want to keep you for
[02:58:23]  forever so uh yeah will you be uploading the demo yes i will definitely finish up and upload it to github but i've got a number of them on my um
[02:58:30]  on my uh under my profile on github so definitely um we'll be doing that um any any other questions for daniel while we got him here uh i know there
[02:58:40] 's some nox specific questions at the beginning maybe i can get up to them because i was just kind of breezing over them uh because they were kind of technical uh
[02:58:50]  yeah but uh yeah let me see here i've it might take me a second is there pinya support in nux3 yes yes there is awesome um so in fact uh
[02:59:05]  puya um uh recently updated the uh the pinya module um so it's yeah there's a pinya module so just at pinya forward slash nux is pretty
[02:59:16]  much all you need to install and stick in the modules um field of your your config nice nice yeah and just look another one someone's asking about data fetching we actually did
[02:59:26]  that on stream uh i really like some of the features of um the auto imports typing of server endpoints pick fetch okay yeah yeah some people just giving compliments uh let's
[02:59:36]  see any new comments come in while i was checking one question okay what are what are the chances that nuxt uh becomes framework independent and support solid sorry i even laugh well r
[02:59:50] yan let's talk yeah i i mean hey at first start um if you want use nitro the um the uh it's it's meant to to work with different frameworks
[03:00:04]  and we'd love to have some collaboration on it um that's interesting so it's it's that's the underlying thing right the like that's the thing and actually i should
[03:00:14]  have told you because we have we can deploy to netlify edge as well as netlify um for example we could could have done that um but yeah so it's
[03:00:22]  the thing that's that's powering the the deployment bit um if you go to nitro.unjs.io um um uh unjs.io all right that
[03:00:40]  is so unjs is a whole uh github organization which is all about universal javascript so lots of things like re-implementing um uh so so
[03:00:52]  uh right writing code that can work on workers on node on dino um on bun um so and nitro is is one of the projects there um so that's interesting because
[03:01:07]  we've not explored any of these features um on this stream um but there's some really interesting ones um like framework agnostic uh storage so you can use readers or
[03:01:19]  memory or file system um in an agnostic way the same kind of thing with the next pages folder but with api roots um caching and being able even to to
[03:01:33]  generate um statically api roots so you can have json files generated for some things but other things can be dynamic it's there's a lot to talk about yeah
[03:01:42]  yeah i guess my interesting question here is because i every meta framework is recreating that a deployment adapter thing like every single one of them it's even funnier when they're
[03:01:54]  all in beat um because obviously like like it's like it's like i it's the code's almost identical um is nitro at all it's like completely universal right it
[03:02:03] 's not connected to beat at all or it's not beat is not involved in in nitro okay okay then yeah okay that's interesting because yeah a lot of these things
[03:02:13]  i i now associate with v plugins like file system routing and that but uh i guess if you this is like a universal uh layer that kind of sits on top i i'm
[03:02:22]  interested i'm actually going to probably take a look at this um pretty soon here then because i mean to be fair i'm one of the biggest skeptics of universal solutions
[03:02:33]  generally speaking um i just i've had bad uh track record with them but generally i i do think i do see the fact that some of this stuff this stuff is far enough
[03:02:44]  removed like where i have had success with universal solutions it's been when it's like been far enough removed from the framework like like astro and you when you you the island
[03:02:53]  is completely isolated for the most part and i don't have to worry about things when someone's trying to tell me that they've got a client-side router that like
[03:03:00]  can stitch all the frameworks together then then i'm like okay yeah it's not going to work for solid i just i just know that but when it when it when it's
[03:03:06]  far enough removed and at the build system level i think that's definitely a possibility so this this does actually interest me quite a bit cool yeah um nux typed api
[03:03:19]  routes uh we we're not going to get the showing that i he you mentioned that daniel but that's a whole nother thing uh you are about limit yeah i unfortunately
[03:03:30]  i'm probably not going to really get to anything that any chance that's inherent something similar to remix is use loader data pattern are you familiar with that one it's
[03:03:38]  more likely that that is going to come to view itself um right than nuxt specific well as in and therefore to nuxt right like the router yeah yeah yeah so so that
[03:03:51]  is totally within the bounds of possibility um but uh but yes um it it's probably not something i mean i'm not ruling anything out it's possible basically i'm saying
[03:04:07]  it's possible right right yeah no it's incredible there's so many uh different projects and people working on view and nux and all the different ecosystem uh i yeah i would
[03:04:17]  not be surprised if we we see something uh what do we got here the hardest part here what what's the hardest part in convincing someone to upgrade from next two to next
[03:04:27]  three the um i haven't found that that hard honestly the um upgrading from next two to next three okay i think i i think i so i i would say if if you
[03:04:44]  feel like you don't if you don't want to upgrade from next two to next three that is okay you're welcome um don't feel don't feel any pressure to
[03:04:53]  do so but i think next three does have a lot of um great features so i think often it's more that people want to upgrade and we have to make it as easy
[03:05:02]  as possible yeah no that that makes sense i think i think because there was some reservation maybe the view two to view three upgrade question might be a little bit of a bigger one
[03:05:12]  that might project onto nux on that uh with is with nux three is it i guess the thing with view three is you can still have the options api right
[03:05:21]  like like it's not like it just disappeared so there there's like for the most part you can keep your components and it's just like other tertiary pieces right yeah yeah
[03:05:31]  nothing stopping you from from using the options api at all um although honestly once you view so it's not that using setup by itself um because there's still some boiler
[03:05:43]  port uh plate you still export default and then you have a object and it has a key called setup but using script setup blocks is so much simpler and so many less levels of
[03:05:55]  indentation and it just feels really clean yeah i i found that almost immediately it's funny because i i poured the templates across and then i went to go like do the logic
[03:06:03]  and i just i just was like i don't really even i mean i had really simple components but i'm like i don't really even care what i'm looking at
[03:06:08]  in this options ap i'm just going to rewrite it because like like the the stuff just lays out in from where i stand it just lays out like so much easier i don
[03:06:17] 't know it's yeah yeah it it feels nice doesn't it yeah and i mean that the sort of the hook approach it's not it's not hooks it's not react
[03:06:26]  hooks no they're not the same thing at all but the idea of encapsulating logic well encapsulating logic that's the big part of what we do right yeah when you're
[03:06:36]  trying to write something write something that makes sense and is reusable in the right way um it's a nice way of writing it's a nice discipline to be be working in
[03:06:48]  so that feels really pleasant as well yeah no i i i i i think it might have also made my jump even easier because like i'm more used to those patterns these
[03:07:01]  days now so i think i think there's been this kind of api convergence uh a little bit as i mentioned at the beginning where like it's very easy for me to
[03:07:09]  take concepts i mean especially view and solid because they're like so similar out of actually all of them view and solid are actually the most similar when it comes to like we name
[03:07:17]  our stuff's a little different but it's the same idea of runtime reactivity we both use proxies for deep nested stuff we like everything is very familiar to me
[03:07:26]  um it's only the rendering that's a little bit different but like but even to a certain degree with hooks felt all of them you start like i've been i've
[03:07:35]  been porting everything back and forth between different apps with this hacker news example and yes they're the basic things but it includes data fetching and you know like some of those
[03:07:44]  pieces and it's surprising how no maybe it shouldn't be surprising it's how easy stuff was and different like here's an example a few weeks ago i went to make
[03:07:53]  something in preact because i was using fresh and i was able to copy and paste the templates out of astro um to do that and i wanted to use astro because
[03:08:00]  astro was doing islands and it was like and it was an mpa so i was like i didn't feel like renaming all the link tags essentially was like the thing
[03:08:06]  and when you're doing an mpa you can just use anchor so i was like i'm just gonna use that one and astro isn't exactly jsx but like close
[03:08:13]  enough and then i you know i i was able to just move across and then like you know concept of like state you know in a lot of the frameworks it's just like
[03:08:21]  it's like okay this was called a signal that's called a state this one's called a ref that's like it's been very very very easy for for for me
[03:08:28]  it's interesting because there's still interesting details on the implementations and capabilities but for the most part there is this huge uh like this big api convergence now and uh yeah
[03:08:40]  i mean i'm i'm i i'm liking it because i i think it feels like we're we're all kind of on this getting towards the same page i mean there
[03:08:48] 's still details and stuff but like it's kind of under we're we're getting better at defining like what the language of uis looks like um and yeah i think
[03:09:00]  so and um and also what some and and some of those abstractions and the way they're they're working as well um i think that's that's a good abstraction
[03:09:10]  right when it is hiding implementation details that are details that don't matter yeah um and i i mean for view the key thing has been the fact that um the the idea of
[03:09:22]  this global context like the component context the global context that you can have something that you don't pass anything to you it's not chucking context and information at it but it
[03:09:33]  can get what it needs which is about the implementation so it can do something that is very specific and very um it can register hooks and mounted hooks and things like it can
[03:09:44]  do what it needs to do it can access whatever it needs to access but that is not something you need to deal with when you get when you're looking at api docs
[03:09:52]  you're like okay we have to add this thing to this bit of the your template and you have to then pass that to this other helper function which has got to do this
[03:10:00]  you've got to register this i mean that that's not a pleasant api to work on yeah yeah no yeah no this this is uh this has been uh this is
[03:10:10]  as i said why i love this stuff because i i i get i get a little slice of each piece and uh i'm glad that i was able to spend some time with
[03:10:17]  someone who knows view and can help me kind of like see a bit more to views uh future even i mean that's really what what i'm i'm always interested in i
[03:10:26] 'm always like uh that that's why early before we even got the hacker news i was just like you you started dropping stuff and i was like give me more but uh
[03:10:33]  we'd be here forever and it's already been three hours i'm i'm so i i think i think we're gonna we're going to uh let daniel go on
[03:10:41]  with the rest of his day and uh thank you so much so much for joining me is there anything else you want to say anything you want to plug before before uh we
[03:10:48]  wrap up um it has been so much fun honestly um so thanks for inviting me um the only only thing that i've done that is sort of uh different from nuxt recently
[03:11:00]  is i built a new regex library um called magic regex and it's nothing nothing really to do with this but i would be uh anyway i i it's
[03:11:09]  been been fun to do it basically it's uh human readable regex and it compiles to regex so um you get the performance improvement but it's hopefully
[03:11:20]  readable um yeah check it out magic regex yeah if you if you want you can probably just post it if you have the link post it right in the chat and then
[03:11:27]  everyone will actually be able to go right to it um if you if you got that handy um yeah cool okay uh yeah do you have the link or yeah it's re
[03:11:40] gex.dev okay okay yeah i was i was being like okay i'm just gonna i'm actually gonna load it right now just so i can see it but rege
[03:11:51] x oh yeah but also i fully implemented the whole regex builder in typescript as well so you get when you hover over the regex that you're building you
[03:12:00]  actually see a preview of the regex that it will compile to um okay sorry is it just regex.dev am i yeah there's a p in there
[03:12:09]  regex.dev oh right okay that's why okay sorry i was loading it off screen let me just drop this in here for everyone there you go okay twitch youtube you
[03:12:22] 've got it all right um well then in that case uh thank you uh thank you daniel for joining us today i'm going to continue on to do my this week
[03:12:32]  in javascript but uh you were awesome guest i learned so much thank you thank you so much um have a have a good one thanks all right that was daniel
[03:12:45]  uh from nuxt core team awesome learning a lot of stuff about view and nuxt uh we did obviously hit a couple of snags in there but that's that's why
[03:12:54]  we test the software uh it's not the first time on the stream this is why i i what happens when you test the stuff that's uh in rc hasn't
[03:13:01]  even been released yet um so you got it here first um but now we we're going to continue on to a different part of our of our of our show today something that
[03:13:12]  i i love doing and let me kind of scroll back a bit here because uh when did this week start um this week in javascript started oh uh okay yeah i
[03:13:25]  see yeah let's yeah i don't yeah let's let's let's let me get the banner up uh and let's talk about this week in javascript i i
[03:13:36]  know at the end of streams a little bit different now but i i i think it's better to be able to focus on on the guests and um to be fair as
[03:13:45]  you as you all know i uh if you were here at the beginning of the stream which actually might be a big ask after three hour mark i uh i did not um come
[03:13:55]  as prepared as i usually do because i was building or updating a view um uh the view app before i came in just to hope hope hoping that it would actually uh uh
[03:14:09]  get there but i actually what i found out when i was looking at the stuff for this week in javascript uh was that i actually missed some of the stuff that i
[03:14:19]  had flagged um last week when i got into quick because i we were you know that last week's session for this week in javascript went like over an hour it
[03:14:28]  was kind of crazy um so i i actually just want to start there uh if it makes sense too so let me get back to my my screen and we can we can
[03:14:37]  we can talk about some stuff first thing i actually want to talk about is is this um this kind of went under the radar for some people but not everyone's you see on
[03:14:48]  the 76 760 likes um simon h um joined up ever sell to work on svelte so he is the second full-time uh developer working on on s
[03:14:58] velte and to my understanding he'll be contributing big to get svelte kit out the door essentially but um versell has now shown their investment in svelte and
[03:15:08]  actually has hired two developers not just rich harris to work on svelte and i think this this is interesting because i think we're still kind of looking out at the
[03:15:15]  ecosystem of open source and trying to figure out what different models are uh sustainable right from people starting companies you know bc funded stuff um to you know uh benet i
[03:15:27] 'm gonna say benevolent companies um you know hiring up talented devs and open source to just support their projects so they don't die um so this is this is interesting uh
[03:15:39]  it was always a little unclear you know how that all works but it's it shows that uh versell is committed to making sure that svelte and svelte
[03:15:49]  kit is a success so i thought this was actually really interesting news i i had actually bookmarked it to talk about it last week but um it didn't it it uh
[03:15:56]  just didn't come out uh because i was so busy talking about uh you know different types of hydration and um also around uh same time period i actually grabbed this little clip um
[03:16:12]  and i think this is kind of interesting because we we this is talking about the nature of competition in open source you can't innovate in a space including open source by accepting
[03:16:20]  the same constraints as the entrenched competitors this is exactly what most people do try to do the same thing but slightly differently and win on being better so i mean this is an
[03:16:28]  interesting thing i don't know who he's talking to directly um but i thought this was kind of interesting your competitor that's doing the same thing has a head start you
[03:16:37] 'll never catch up with this can work but it's fairly rare however you can force yourself just with the knowledge of constraints analyze your competitors are doing why figure out which parts of
[03:16:46]  the wire really required and which can be changed then when you change the constraints the head start advantage vanishes it doesn't matter they have a head start because they're no
[03:16:55]  longer playing the same game the hard part is convincing people the new way of thinking this takes time and evidence that your new way is better um yeah um so i i just
[03:17:07]  wanted to pull this out i think i think he's kind of he matthew works on astro as you guys know and i think uh it's it's definitely been
[03:17:17]  a challenge for the a lot of the frameworks like astro like quick kind of showing themselves in a world of next and nuxt what the actual difference is um when people like
[03:17:27]  oh you make websites right so you know even if they find the angle and do stuff differently you there's this whole other side of it anyways i i i thought this was
[03:17:39]  just a neat observation but um oh right uh i don't know why i bookmarked this one but i gotta thank dylan marco team for this one um yeah there
[03:17:51] 's a conversation right now and i think this was sparked by what happened remember last week when we kind of called out aws for not having streaming right um uh it was actually
[03:18:04]  uh kensie dodds that started that whole conversation um some people related aws i got got a little bit defensive and saying that the initial stream htl is a
[03:18:13]  band-aid for crummy databases or worse render blocked by api calls it's a nice feature but won't solve the root cause it is possible to build web apps without
[03:18:21]  piling up hacks we can approach things with empiricism and address problems and i mean i guess if you live in an aws world where you know you have mong
[03:18:34] odb and this is your whole architecture and it's all under aws you're not going to like hit you know the situations that people who have distributed services don't completely
[03:18:43]  work under aws hit because like what dylan was just pointing out is like wouldn't you just rather remove the bottlenecks like who cares if you if you don't need
[03:18:52]  it if if if there's no additional cost so i i it was interesting i i guess those conversations are going to keep on going kind of like the react native ones which
[03:19:03]  i'm not going to talk about because i have no opinion on the whole react native being the worst thing on the dev versus ios that was also a hot topic this week
[03:19:11]  but yeah as someone mentioned um uh this week started with the uh tanner lindsley uh react uh do announcing more stuff about you know uh the um agn
[03:19:24] osticism of tan stack and if you did not see this i highly recommend checking out this thread where um hasan uh kind of goes over how the um the agnostic
[03:19:38]  this works because a lot of people have confusion here they think oh was it like web components are doing this no it's just a really smart way of of packaging up the
[03:19:46]  specific reactive pieces right um like so that it doesn't work it can work in any framework whether views felt it's all and actually he goes on to show all the only things
[03:19:56]  you need to bring in for react and shows how you can implement it um with just this amount of code so basically you can import that make a couple components here and and
[03:20:08]  and basically took these two code snippets and he's like that's it now you have like now you have react table and um and when he when he pointed out which i
[03:20:19]  thought was really cool was um you know he showed the full react implementation like how you take the generic stuff and implement it and put it in but then he's like you know
[03:20:30]  just for fun here's the same thing in solid so like he just took uh you know and you can see we were talking earlier with daniel about the comparisons on language
[03:20:40]  you can see you can see the reflection on the look use react table and the code written here and then you have a use state and then this thing and there's a ref
[03:20:50]  that's keeping track of the initial state and some very react type things all these spreads and the updaters and all that and then you go down to the solid version and
[03:20:58]  there's almost like the same uh it's funny clicking on it didn't actually make it bigger you you you actually get the same sort of code again um in this case we
[03:21:07] 're using merge props instead of doing those spreads and then you know we're calling a create store and then doing it computed to set the options there's an analog between this this
[03:21:16]  stuff and i i thought this was just really interesting and he was just talking about like what kind of thinking goes into actually making stuff that is actually successfully framework agnostic
[03:21:26]  because the thing is i'm i'm actually really excited about the potential here uh of this kind of free agnosticsism because it doesn't it doesn't get in the
[03:21:38]  way of your framework being able to do stuff as well as you can when you bring out bring in like sometimes like third-party state libraries and stuff like the internal state management
[03:21:45]  and change management inside the framework is always going to be more efficient um and when trying to bring in stuff like web components there's always like this extra overhead now you have
[03:21:52]  to like reconcile the dom the past updates through like whereas and but it's still hard when you have like different libraries that have different outputs like v doms versus real dom nodes
[03:22:02]  and stuff you can't just like plug them in directly this is an approach that lets us do this and i i'm really excited to see what else tanner does and what
[03:22:10]  if others start actually taking uh generic solutions in the same way um it's really cool that you can have components that feel first party and solid and in react and share the
[03:22:21]  same code i mean it's kind of obvious visiting green you're like of course you can do that you can just like extract the library code but doing it in a way that
[03:22:27] 's consistent takes a bit of knowledge of how the frameworks work so i i was pretty happy with that um yeah i talked at the conference call yesterday um a couple other updates
[03:22:38]  i said this this one's going to be pretty short but we're working towards solid 2.0 and uh started a great conversation about reactivity um which i i'm actually
[03:22:48]  been quite stoked on honestly uh i i we pulled in some people like the guy who works on small framework uh jin gave some great feedback um people from the community um this
[03:23:01]  this being able to facilitate these types of conversations um i got the idea of obviously from the react working group but i'm i'm it makes me very hopeful for the future because
[03:23:09]  um being able to gather all this feedback is going to be really helpful to decide what matters to people right yeah actually this is a great good great point a lot of the
[03:23:21]  headless stuff does do things very similar this is basically a headless uh approach to uh agnostic things usually the with headless um i i don't know i guess
[03:23:33]  i shouldn't speak too much i it's interesting to see how that scales when you get to more complicated and composite uh components right and that's that's sort of what i
[03:23:44]  feel like the the example of some of the like react tables or tan stack table stuff the tans are doing is kind of taking that headless thing and going like what
[03:23:53]  if we actually um made bigger more composite components uh setups in that if you've ever used react table you know that you can let you actually you make the table yourself but there
[03:24:04] 's like multiple injection points inside your code um so it's like not it's like it's like not a single component but it's like a headless system um so to
[03:24:13]  speak yeah yeah i guess that's the best way to put it um astro is getting very close to 1.0 um so that's that is that that's that
[03:24:24] 's pretty exciting um we're like a week away uh we already had fred on the stream previously it's funny i i clicked on this and i was like oh sweet because
[03:24:33]  they're talking about all these great things but they actually don't mention the fact like the headline because a lot of people like oh astro 1.0 and someone's like
[03:24:39]  oh does it still have server side rendering they don't actually mention it anywhere but the big thing of astro 1.0 is it's not just static gen anymore it
[03:24:46]  does server side rendering so um i i'm sure when the official announcement comes up it'll kind of have it kind of handle that um yeah i mean the the last topic i
[03:24:58]  want to talk about today um i believe is i mean actually there's two more uh one one thing that was kind of also cool i don't anyone out there in the
[03:25:08]  chat uh fans of web assembly rust you know they're like this hope um of basically being able to do frameworks uh in in you know some back-end language uh traditional back
[03:25:20] -end language that they like and what was interesting about this is it's something that i kind of know about but i'm not close enough to actually make how should i
[03:25:27]  put it like judgments on it like i can't i can't definitively say i can just talk about my opinion but he talks a little bit about the challenges um and he
[03:25:35]  was saying that there was a proposal that would address some of these challenges and look it's utf-8 versus ust-16 what jared was talking about all over again
[03:25:43]  um uh that that make it harder because the one thing that i had noticed when i looked at the benchmarks was that if you take the fastest rust implementation and the fastest vanilla
[03:25:55]  you can understand that why because the dominant stuff that the fastest vanilla javascript is going to be faster than the fastest rust but what's interesting to me although maybe not depicted
[03:26:03]  for the longest time solid was actually um faster than the fastest rust implementation like the vanilla version just because of the the proximity like solid was only like five or six or seven percent
[03:26:15]  slower than in like the benchmark than vanilla but the the next closest rust framework was like was something like 16 to 20 percent slower than the base rust implementation and this kind of
[03:26:29]  talks about the challenges beyond just the dom um the dom connection um but yeah as meant as you mentioned here also the other interaction with just other pieces of javascript in
[03:26:43]  general um like except for startup time wasm byte code is more compact than js source code and js needs to be parsing file blah blah blah startup time is actually kind of
[03:26:52]  important um i so their conclusion was i don't think performance is a compelling reason to use what wasm in the front end and that's why rewriting reacts filter solid and
[03:27:03]  wasm won't amount to significant performance gains if any and my suspicion is actually would it would actually make it less performant um we are exploring some options with pulling react
[03:27:16] ivity off the main thread but um that's for probably another time um but i think the only comfortable reason to use wasm for web framework right now is if you want to
[03:27:27]  write code in another language which is valid but don't expect you to be any faster yeah this is as i said this this thread is is is is i think it's
[03:27:38]  pretty good uh yeah okay someone's asking the question right and then they're making that point here where they're saying you outperforms react on just about every benchmark like
[03:27:57]  miss wasm binded outperforms solid um on every metric that's recent it didn't before but that's that's recent it has been getting faster but the the problem
[03:28:06]  is the gap between what this is what i was trying to point out i didn't get that the gap between wasm bindgen and the fastest uh wasm framework is much
[03:28:16]  bigger than the gap between solid and the and the fastest uh like javascript vanilla implementation so i i think essentially there's something native to that which suggests that it will
[03:28:32]  it's not not only the gap between salt uh between vanilla and uh and like the baseline uh rust is a thing there's a further overhead that the the framework uh takes on
[03:28:46]  um so yeah anyway there's a bunch more conversation in the chat if you want to check it out but i i think i think the wasm topic and the same thing
[03:28:57]  i said when i was on primogen stream is like it's just it's just a little bit too early uh this guy actually talks about a proposal that would improve um the
[03:29:06]  wasm bridge but he's like it was put on hold for a different proposal um so like don't expect any change here anytime soon like it's gonna it's it
[03:29:15] 's gonna be years before we might even get to performance parity you know so like it's it's like if you have a reason do it if you're a mad scientist
[03:29:28]  you want to experiment with stuff you know you never know right you you see what jared's done with zig and bun you know maybe maybe you'll crack it but for most
[03:29:38]  people you it's probably a little bit too early to be really thinking about it or like you know let's write react in in rust um i i it's probably not
[03:29:49]  going to do what you you hope um yeah theo did his first conference talk i did my first in-person conference talk yeah what i what i wanted the the last topic that
[03:30:00]  i wanted to talk about oh i mean oh sorry actually i keep on finding more topics um versell build output api um i think i told some people this story um
[03:30:16]  if you if you all remember back to uh i guess it was maybe november 2021 uh versell launched next 12 and they showed off this new server component demo which they
[03:30:34]  chose to do a hacker news of all of all things and they released it and the thing was the hacker news demo was showing off the new react 18 features in a very visual
[03:30:44]  way like cascade loading the stories and all this stuff but it wasn't very performant and some people were kind of confused about it because a lot of people were like this is
[03:30:52]  the first example of react server coins they've seen since that original demo in 2020 the uh um that that the react core team put out so you know i mean there's
[03:31:02]  hydrogen during it but at that point people like like this is what server components are so they were looking at it and at the same time that versell launches their edge functions and
[03:31:15]  um i i remember this because i i i don't follow that much and it just showed up one day and i was like oh i i originally like like okay i want to
[03:31:23]  see how this works so i i i got into it and saw that you need to use next but i'm what i managed to do was take next.js and hij
[03:31:32] ack it um essentially and use a middleware function and load solid into the middleware function so i deployed i did a next deploy on on on versell put solid the whole
[03:31:44]  thing and rendering so i'll start basically uh right into the middleware function um and then deployed an edge streaming demo the same day they announced it it was actually the next
[03:31:58]  day because it was like 2 a.m um but uh essentially got a streaming solid start hacker news demo that was like super fast on versell edge the day it came
[03:32:09]  out and i didn't realize i i thought that that's what they were demoing with but they hadn't successfully moved next to the edge completely just for these small middlewa
[03:32:18] res they weren't intending someone to just come in and basically just like brute force my way in i just i saw the apis once i looked at them like oh this
[03:32:27]  is cloudflare so i knew how to i knew how to kind of play with it looked at some of their other examples and hacked solid into it um so immediately like the
[03:32:36]  the next day or a couple days later uh lee rob reaches out and he's like okay um how about join uh the private group let's get a solid integration for real
[03:32:44]  um and uh essentially uh what that experimenting came in is what eventually became the build api they were already working on this before like this was their intention but i was just like
[03:32:57]  i kind of forced myself in because i was making these bad examples so myself and a few others uh especially other framework providers have been providing feedback on this build api that
[03:33:07]  versus cells been making for the last like i it's too close to probably close to the year like that they were doing in a couple months before i even started in um and
[03:33:17]  it's finally just got released and it's kind of a big deal because um it's a file system based thing so all the niceties that you're used to from next
[03:33:27]  in terms of the file system like how you can just like put stuff in a folder and deploys here this goes static this goes goes that like before we were trying to like
[03:33:34]  emulate what next generated like that's why i told you i was like compiling stuff so that it would like put in next format now they've standardized this in a way
[03:33:40]  that any framework can come in and leverage fully leverage for cells infrastructure simply by compile like simply by just following uh this this file system thing and i went through version one two and
[03:33:52]  three and the third version yeah that's the that's the one that tipped it they they kind of bridged the gap between like serverless and normal functions uh streamlined
[03:34:00]  it removed some of the extra config files and um i gotta say it's quite nice um so this is really cool because it'll allow frameworks uh especially to kind of make that
[03:34:11]  feel like for cell is their home almost the same way like it is for next um next still probably got some first priority and stuff but i i still gotta you know congratulate them
[03:34:20]  for the bravery of kind of putting it out there because if any framework can uh can leverage these tools and get this experience you know that puts pressure on next to make sure
[03:34:30]  that they're they're the they're the best you know at what they do um so you know that's that's brave yeah yeah i've twisted because i mean historically uh
[03:34:43]  uh versell and next destiny but you already saw they invested they they've got a second person working on spell kits so i mean obviously next is a completely different thing but
[03:34:53]  you know i i think i think this is kind of a movement towards the future i'm actually very excited about this space um nothing i i really want to share or can share
[03:35:02]  right now but i i know like um with the edge it's opening up a lot of new functionality and capability and new experimentation and um you know we're the providers you
[03:35:13]  know like the verselles or netlify for that matter are doing some really interesting work to see how they can work with the framework uh pro um providers to kind of come
[03:35:25]  up with a a way to best leverage the tools and um maybe maybe this kind of move to be agnostic uh will help make versell more attractive uh to to
[03:35:37]  framework authors um i'm it definitely makes it more attractive from my perspective you know you don't feel like as much as like your second tier to next always right um so it
[03:35:46] 's an interesting choice because yeah as i said uh it is it falls in a sort of different zone right like um that's one of the things that you guys all know i
[03:35:55]  work at netlify now um i was very stoked about netlify because they didn't show any of that kind of favoritism they they treat they treat everyone
[03:36:04]  equally and you know when new features come out they try and work with all the frameworks to get them in you know and and and do it together so um yeah i guess we
[03:36:13] 'll have to see if if if her cell is going to follow suit or not um but this is a really good step um and that leaves me with uh partial hydration um
[03:36:28]  two projects uh two things can happen simultaneously and it's so funny because it was like under my radar how many of you you got you all been like bugging me about like
[03:36:39]  when it's all gonna get partial hydration you know or just all do partial hydration and i just like no no no use astro no no no like and honestly that's
[03:36:46]  still the right answer right now uh probably you know uh in terms of uh if you want flexibility of using different islands uh you want the maturity and the time spent on it but
[03:36:57]  something kind of came aware um and this is what i love about open source and love about um like the sort of uh i don't know what the term is but like worth
[03:37:07]  you you all working on different pieces and then things just start kind of naturally coalescing and what was kind of realized several months ago i guess um by alexis
[03:37:18]  who's part of our community um and he uh and was and he started these experiments where he's building full solid frameworks think fresh but with solid essentially uh for doing islands and
[03:37:30]  he it was just an experiment but recently actually uh last week he actually released his meta framework which supports islands in a fully solid rendered app so you can actually render the whole
[03:37:41]  thing as a single app on the server in solid write all your code in jsx and then just have islands like small hydration points um uh you know similar to the advantages we
[03:37:51] 've seen in astro and marco 5 or whatnot um all written completely in solid and uh it's funny because nakil solid start you know not uh about a couple
[03:38:03]  weeks ago completely independently started doing he's i guess he spent a night and he was just like i he talked to me he's like i want to try this and i'm
[03:38:12]  like oh sure but we we got to work on that release and he's like no no just just give me just give me a day i i will just throw something together
[03:38:18]  and sure enough he was able to whip it up really quickly and what we realized was that incidentally through other features i added for other reasons i basically built all the pieces you
[03:38:27]  need to do partial hydration and solid into the core um and i chronicled a little bit here but just so so you guys understand um that essentially uh yeah oh someone's
[03:38:41]  mentioning about fresh yeah that's fine yeah we we actually i i i think seeing fresh is what inspired people to kind of pick this up again um but that's the thing we
[03:38:52]  basically he was able to take solid start and build build fresh in about uh in one evening and the the reason for that was that we'd already solved the problems months ago
[03:39:04]  and i just did not realize it and it comes down to two things um i don't know if you've ever seen a solid app but uh like it's hydrated but i
[03:39:15]  mean we can we can look at what a solid hacker news edge notify it does this funny thing that you guys probably have seen and you're just like what the hell are these
[03:39:24]  stupid data hk things right you you're like we're a data hk there's a lot of these and they gzip really nice actually because uh you notice they
[03:39:32] 're mostly duplicated strings it was actually bigger in size for me to actually try and like hash them up so i just didn't bother and it slowed down the rendering time
[03:39:39]  but what i'm getting at is these ids are hierarchical okay um and they're and they're and they're all you know on the top of the templates of any
[03:39:49]  element and what i this is just something we need in solid because our jsx you could create jx any jsx anywhere a lot of frameworks when you do like a
[03:39:57]  template dsl you can like basically go okay the components are created in this order and so you can basically know that this comes before this comes before this and you might just have
[03:40:04]  to mark some boundaries so you know like when where component ends are stopped but the problem with jsx is someone can like up here create something and then insert it down here order
[03:40:14]  in the dom it has no correlation to order um in like order that you actually created things so actually matching things up on both sides i need to come up with a hierarch
[03:40:24] ical system of looking at components and stuff and figure out essentially how to map that so this is a problem that i had a few years ago so i came up with a solution
[03:40:34]  and then another problem i had was uh in the head in the header here we actually needed uh the ability to uh we used to hydrate the head we don't do
[03:40:43]  it anymore uh but we used to hydrate the head and i need the way to skip over like like inserting like the style sheet stuff and the preloads because uh sure
[03:40:51]  the server needed to render it but if you use components then you'd be getting like hydration ids and like on the client you kind of want to skip over this because you
[03:40:59]  don't do that work and you didn't want it to mess up these ids so i came up with a way something called no hydrate which is just a way
[03:41:05]  of just saying like from here down just don't do the hydration um and just skip it and we we won't we won't mess with things and some people point out to
[03:41:16]  me at one point they're like oh with no hydrate does that mean you kind of have islands and solid i'm like no no hydrate works the opposite way it's
[03:41:21]  like if you have client-side thing you can just stop at that point but it doesn't actually give us like code splitting benefits well what i didn't take into consideration was
[03:41:31]  that back in december um i was working with astro guys uh and the thing is astro each of their client components has an id so if you have like 10
[03:41:41]  counters on the page they each have a unique astro id so they know how to map them up and one of the problems that i was having was i was i wanted to
[03:41:49]  do async rendering and i actually think that islands don't normally actually need to be async for most cases synchronous islands are actually better because you want to pull the data loading
[03:41:59]  out of the islands so you can save on the serialization cost just a side note generally speaking i i think islands probably should be synchronous um if you want to make the
[03:42:08]  savings but i was trying to make it work and the problem with async hydration is that stuff's going to like come in and finish at different times so if i have the
[03:42:15]  same counter on the page 10 times and i mean not a counter something i have async data and they're all like stopping and resuming hydration at different times they're
[03:42:24]  going to clobber um and especially the way we serialize resources because in solid like where does this id come from well it only knows to come from like the the root
[03:42:34]  like the because a server has many requests the server takes a ton of requests you the only place you get to reset it is like when you actually start a render right otherwise you
[03:42:46]  don't know like there's no other baseline to use for this id um and on this client we don't care because the client there's a generally a single hydration point
[03:42:56]  if you're making a single page app but what i i realized was like um i was like okay well we got to namespace it so as long as we get the same
[03:43:05]  id on the server and on the client astro can do its work so instead of just being zeros or one it you could be like astro id zero zero or whatever
[03:43:13]  right and then as long as astro takes its id on when it server renders and client renders we can namespace and all the hydration won't clash with each other
[03:43:20]  and everything will work perfect in the async case as a synchronous is fine because you can expect it to just run and there's no interruption but with async there's
[03:43:26]  a problem um and i added that and i was like oh simple i'll just prefix the id so when you call render i mean you can picture it you just you just now
[03:43:34]  prefix it and as long as you send the same thing on hydrate it works but there's a funny little side effect of this that didn't occur to me at the time
[03:43:41]  and that side effect is that what if the prefix is just one of solid's own data hk keys so what if you just server render the whole page like normal and generate
[03:43:55]  these things and then you go um i'm actually going to prefix i'm going to get this element and i'm going to prefix it with this id and then the 
[03:44:05] ids are going to generate from normal from that point well as it turns out what that means is it is really really simple to hydrate part of a solid page by just using
[03:44:15]  that prefix as long as you know what the prefix is you need and the element you know that's attached to which is pretty clear because the element has the prefix on it um
[03:44:23]  you know you can literally just go hydrate render id this prefix and solid will hydrate from just that point down so then the only problem was well how do you stop
[03:44:35]  hydrating like if the parent passes in children essentially that are supposed to be static from the server well then that's what no hydrate does and if you put those two things
[03:44:45]  together um essentially you you you get islands for for basically nothing all you have the only challenges left is like how to bundle the separate entry points but as long as you can server
[03:44:58]  render as normal nothing has to change on the server render on the client side all you have to do is just identify and like write a script that's like you know look
[03:45:07]  for all the elements that have the word island on them grab their ids and call hydrate with that id and bang you have islands and solid um so this this was
[03:45:19]  this was a kind of funny thing because i didn't actually attempt to do this um at all i was just i like this was just for a different use case but the both
[03:45:31]  alexis i guess had realized to a certain degree and and uh and nakil that we could just do the island thing uh but but with just a little bit of code
[03:45:42]  um and nakil took it another level he actually grabbed ryan turnquist's router that i showed on the previous streams um which did does that hybrid nested server
[03:45:51]  routing where it reloads the page it loads the page from the server nested so whenever you navigate um it will swap out part of the page and and then essentially he just
[03:46:05]  he he just inlined again we use the server router essentially the one that we always did to do the ssr and then he just inline the client router script
[03:46:16]  with that and he was able to get client-side routing with partial hydration working i'm sorry he did that all in that same evening um nakil's kind of a wizard
[03:46:27]  um and so like it's super rough like anyone who's looked at this problem you know including our good man dylan here who uh works on marco knows that like there
[03:46:40] 's a bunch of edge cases when it comes to the routing solution um and i actually if you if you want to understand this more i go into much detail about the hybrid
[03:46:48]  routing and talk a little bit about uh our plans for resume ability um but what what i'm getting at is that uh uh this is just the start of something this is not
[03:46:59]  something that we're gonna like release um you know and be like a feature or something right now this is just experiments but if you do want to try something like fresh um
[03:47:10]  alexis's uh library rigidity does exist um and i did uh actually link it on my feed and let me let me see if i can uh let's see if
[03:47:22]  he actually let's just drop this in chat for everyone to check out uh his meta framework um for solid and yeah i mean the the the race is on so to speak
[03:47:37]  um we're you know people are going to start exploring these different areas and i i'm pretty stoked that we were able to actually uh find a a solution to this that was
[03:47:46]  actually didn't require really much work at all um so um we're gonna continue the exploration and actually um the plan is next week i'm gonna have nakil on and
[03:47:57]  we're gonna talk about solid start um and uh you know talk about how we're heading towards beta um beta release is not quite yet but i think we're at a good
[03:48:06]  point where we can actually start sharing uh some of the work we're doing and i'm plan is to get that stuff all merged in um in the next week or two
[03:48:14]  so um it will be a good place to kind of um start gearing up for for this for a solid start and as i said there's so much cool stuff i've
[03:48:23]  been waiting to show you all and uh um next week uh i'm gonna have a chance so pretty excited about that um assuming it assuming everything goes goes well but uh yeah
[03:48:35]  and that i believe is this week in javascript um i don't i think that is the that is the end of what i of all i have to to say to
[03:48:48]  say today yeah all right um i don't know if anyone has any more questions or anything before we drop off the stream um if it's still going you should probably check out
[03:49:00]  the o stream he was talking with mishko hevery on quick today i believe um actually let's let's see if let's see if that's still going on
[03:49:08]  uh give me a second twitch slash theo um i think i think he's done with mishko but it looks like he's still streaming so everybody should should go should
[03:49:23]  go check him out oh yeah how is learning nux so far um yeah uh it was it was interesting because we didn't really dig into like the view syntax type stuff um
[03:49:35]  and it's it was one of those things where like i've had a lot of challenges with the view docs and stuff so i i knew that i didn't wasn't gonna
[03:49:44]  go there and i we had daniel just to be like use this function use this function um i will say the view three part that i did before the stream i i
[03:49:51]  surprised myself i'm like this is a pipe dream i'm not gonna be able to convert this app so quickly and actually be able to pull it off and i did for the
[03:49:58]  most part i mean obviously i had some issues with the reactivity i didn't know the like the correct apis but generally speaking um the that part was pretty easy i think
[03:50:09]  nux3 is is getting close we we are uh as you mentioned rc there's some like gotchas with the deployment adapters but in dev it was it was
[03:50:20]  good once i figured out how to get my bolar set up working and stuff we like the dev experience was great uh the auto the auto import stuff was really cool you know
[03:50:29]  once you got used to it um uh and the fact that you could just make your own auto imports to not just components but codes and apis like it just it makes a
[03:50:37]  development experience like i see once you get set up like it just hyper accelerates that um thank you guys all for pointing out how close we are to four hours um uh
[03:50:54]  yeah and uh yeah yeah we should definitely go raid theo in in two seconds here i'm just i'm just wrapping up uh and uh how can we contribute to the partial hydration
[03:51:07]  experimentation um yeah i mean we're gonna be merging some stuff where it's gonna be kind of hidden but we reach out on discord talk to nakil uh we are actually
[03:51:18]  like solid start has the ability to kind of swap modes and play with it so it could be a good experiment reach out and we're definitely interested in kind of you know running
[03:51:27]  some experiments through solid start um so yeah definitely reach out on the discord okay anyway um what i think that's it for us today so yeah as i said uh i actually
[03:51:40]  don't know how to officially raid people from my streamer but if you guys want to like is there a setting on twitch where you can actually like go and raid people like
[03:51:49]  if i go to my twitch channel is there a way i can do it does anyone know um this is this i i'm i'm still very new to twitch um let
[03:51:59] 's see i got no idea how to do it yeah haha me too uh yeah i'm looking at my channel right now and seriously if you guys haven't followed yet do please
[03:52:13]  follow subscribe or whatever uh on on the twitch here um yeah i mean i just i don't know how to do this maybe it's because i'm doing it from stream
[03:52:21]  yard at least you have a good mic now yeah yeah type type raid what what does well what does that slash raid but then do i go to his stream and type that or
[03:52:41]  how does that work because i can put that in my chat but what does that do see or do i go to yeah oh well maybe with something for someone to tell
[03:52:57]  me next time oh just it's funny i literally said what you guys said you guys just said to do this and then put the channel in okay i got you yeah yeah yeah
[03:53:10]  yeah yeah yeah all right guys i'm gonna ditch you all now and end the stream thanks for joining me today all right all right all right all right let's let's
[03:53:23]  do this all right good night