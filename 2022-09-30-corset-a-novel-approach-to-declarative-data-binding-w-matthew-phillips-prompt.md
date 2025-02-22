---
showLink: "https://www.youtube.com/watch?v=0cmj4S8K_6c"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Corset: A Novel Approach to Declarative Data-Binding w/ Matthew Phillips"
description: ""
publishDate: "2022-09-30"
coverImage: "https://i.ytimg.com/vi/0cmj4S8K_6c/maxresdefault.jpg"
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

[00:00:00]  Hey, hey everyone. Welcome to my stream today. I'm just gonna kind of push some stuff out on the socials while you people are all witnessing the pre-roll
[00:00:11]  on Twitch if that's your thing. And where are we here? Sorry just a second. Come say hi and hi in the chat if you're if you're here.
[00:00:24]  Hey. Yeah, now this is another fun week. Let's see if I can get the socials going. Let's just find this. This was actually kind of
[00:00:49]  fun. I wasn't sure what I was gonna do for a cover for the stream and I thought it would be kind of fun to do like a... Right, I
[00:01:00]  don't need that link. We are live with Philips. Alright, there we go. Tweet, Discord, general. Hopefully people are getting past that pre-roll
[00:01:01]  on Twitch. I don't even know if I want to push Twitch anymore. It's kind of fun. I signed up to be an affiliate and now I'm kind
[00:01:25]  of like, regretting it kind of. Um, I don't know if I want to push Twitch anymore. It's kind of funny. I signed up to be an
[00:01:28]  affiliate and now I'm kind of like regretting it. Kind of. Um, I don't know. I don't really care about the money. Hey, good
[00:01:35] . Some people joining on. Hello. Hey, finally a CSS stream. Yeah, this is what you've been waiting for, right? Stream all on on CSS. Um
[00:01:45] , yeah, no, this is fun because as you as you all know, like I love to talk about JavaScript frameworks and declarative data structures and all that all the fun
[00:01:56]  stuff. And, um, we've kind of been going for a while, I guess on a certain pattern, I'd say like the, like, I mean,
[00:02:08]  people know how solid looks like react, but it's more than just solid looks like react. Like it predates react. We've been kind of like on this trend ever
[00:02:15]  since we kind of got into single page app land really. And, um, at a certain point, you got to kind of like question, like, are we doing all
[00:02:23]  we could? Like, like, is this the only way of doing things? Right? Like, you can't deny the benefits and the positive, you know, pieces
[00:02:33] . Well, I don't think you can deny it that that are going to come through the approach and the developer experiences we've been building. But, you know, quite
[00:02:39]  often, I find like, I'm looking to some kind of technology. And then, you know, I think that we're as far as we can get in, you
[00:02:46]  find some, some older, maybe slightly different technique, and it completely changes the game. Um, you know, that's how I felt about reactivity. It's how
[00:02:52]  I felt about, like, streaming and partial hydration stuff from Marco. So I think there's a lot of opportunities here to learn, um, different stuff to kind of
[00:03:01]  challenge, um, our preconceptions of like, how these things should work. Is my audio coming fine? Something just doesn't sound right for me. Just a second
[00:03:09] . Give me two seconds here. System preferences, system preferences, where am I? Sound. Good. Input. Yeah, okay. Yeah, I don't know
[00:03:23] . It's fine. It's just me. CSS is fine-grained reactivity. Hey. Yeah. The audio's fine. Okay, yeah. So I
[00:03:37] 'm just, I'm just being hyper paranoid about nothing. Okay. Well, that's, that's, it's all good. Um, yeah. So, I've
[00:03:44]  seen some people coming from Twitch, which means you, you've, you, you all have gone past the pre-roll, I'm assuming. Actually, I got
[00:03:51]  one more Discord share that I want to do before we get started, just to maximize it. Um, Lunch Dev is a really cool Discord. A lot of, um,
[00:04:01]  people who work on, um, um, who are content creators themselves. So I like, I like getting that in there. So I'm just gonna drop that in
[00:04:11] . Starting now. How long can Ryan just ramble to himself, right? That's the question. Well, always a bit longer. If any of you caught my last
[00:04:23]  six hour stream, um, I'm hoping not to go that long this time. You know, even if there's no sushi, um, dinner incentive at the end.
[00:04:31]  All right, here we go. On the road, joining mobile. Cool, cool. Hey. All right. Okay, cool. Yeah. So we, we can
[00:04:39] , I think I've, I've wasted enough time pre-roll. This is why people who like put on good shows actually like have like a nice pre-roll screen
[00:04:46]  where like, you know, it's got like some kind of animation and me looking really smart or something and, and some cool music playing in the background. It's a
[00:04:56]  lot less awkward than, um, what I'm doing right now. All right. All right. All right. Cool. Cool. Cool. Okay. Okay. I
[00:05:08]  think, I think I've bleeded out enough time. Okay. So, um, anyways, today the plan is to, as I said, look at another new approach
[00:05:16] , um, to, I say new, but like there's elements of it that feel old and we'll talk a bit about that, but like a different approach to how
[00:05:24]  we approach, um, how should I put it? Um, making interactive JavaScript applications. So I think that's really exciting. And fortunately we have, we're going
[00:05:38]  to have Matthew Phillips on who, as many know is the, uh, maintainer of Astro. Um, and he wrote a new JavaScript library framework. I can
[00:05:48]  never tell the distinction these days. Um, that kind of really challenges the common thinking of how we were building stuff these days. So, I mean, I think that's
[00:05:57]  pretty cool. I think you all will think that's pretty cool. So, um, be sure to be active in the chat. Let's ask questions. Let's keep
[00:06:04]  these things rolling. We'll do some talk. We'll do some code demos and I think it's gonna be a lot of fun. So let's welcome Matthew onto
[00:06:09]  the stream. Okay. Welcome Matthew. Hello. How's it going? It's going great. Very good. I, I think I managed to kill all the pre-
[00:06:18] roll timing and we're gonna actually get some, we got some people in here now. So, uh, how are you doing today? I'm doing great. Doing
[00:06:26]  fantastic. That's awesome. That's awesome. Uh, for those who are less familiar with you, um, maybe you could just start by telling us a little bit about
[00:06:33]  yourself and what you do. Uh, yeah, Matthew Phillips. Um, I work for. Oh, weird. Your audio just dropped, I think, unless it's just
[00:06:48]  me. It was like good. And then it just dropped. Oh, sound gone. Is it my, is all sound gone or just for Matt? Yeah. Okay
[00:06:59] . Yeah. So you can hear me. Okay. Yeah. It's just you. Um, it's funny. We did the sound check ahead of time. I just
[00:07:07]  testing the mute, unmute. Yeah. Say something. No, just dropped off. Weird. Um, okay. That's fun. See, this, this, this
[00:07:20] , this, this is cause Matthew also enjoys my rambling at the beginning. So we, we, we, we can, we can, oh, yeah, I hear
[00:07:31]  something. Yes. Yeah. Yes. We're back. Yeah. Weird. Whatever. You know, computers. Uh, all right, cool. Yeah. So work
[00:07:40] , work, work, work for Astro, work on the Astro framework. Uh, I've been in like framework world for a very long time. I used to
[00:07:48]  work for, uh, Betovi who, they built CanJS. I don't know if you remember that, but it was kind of a little bit like after
[00:07:55] , before React became popular, it was kind of a day day. Uh, worked on that for, for quite a long while. Ken, Ken, Ken, Ken
[00:08:02] , KenJS was like, if I remember right, it was kind of reactive too, right? Was it kind of like knockout a little bit? Yeah. Yeah
[00:08:09] . Yeah. Uh, yeah. Yeah. It was like, yeah. If you took the reactivity of knockout and, um, it was kind of like, I
[00:08:16]  like to think about it was, it was kind of like, uh, backbone plus. It had a lot of the, it was very backbone like, but, uh,
[00:08:23]  the views were reactive. Okay. Um, so yeah, worked on that for awhile, um, came to work with Fred on, um, on Skypack. Uh
[00:08:33] , so the, the CDN layer, uh, pretty, pretty soon after I joined, we started playing around with the Astro idea, what became Astro. Um
[00:08:44] , basically we were just trying to find a way to, uh, bring the power, kind of what, at the time, what we saw. Uh, Skypack
[00:08:54]  being as, as this, this, you know, hosting platform for, for code, uh, first as a CDN for like your libraries, but eventually like your own
[00:09:04]  code could run there. And kind of when the idea that we were playing around with is that, you know, what if we hosted your code? Um, like,
[00:09:10]  you know, if you're a snowpack user, our idea was like, you're, you're a snowpack user. We could compile this thing. We know what
[00:09:16]  your application is like at build time. We can kind of optimize this. And so one of our ideas is like, what if like, you know, what if you could
[00:09:24]  put components, like you're, you're already building stuff with components. What if like in your HTML, you put your components there, like we could enable partial hydration
[00:09:31] , uh, that way. So it's kind of one angle that Astro came from was this idea. It's kind of like a, uh, a hosting provider thing
[00:09:40] . That's kind of, I've always wondered about that. Cause it sounds like you were with Fred almost from the beginning of the, what became the Astro company
[00:09:49] . Cause Skypack was the first thing, right. And then snowpack and then Astro came a bit later. Um, I never quite understood how those all tied together
[00:09:58] , but I guess, I guess there is actually some kind of, there was some kind of thinking that. So yes, Fred raised money on Pika, uh,
[00:10:07]  which Pika was a way to, to, uh, like build libraries essentially. And then snowpack kind of came from that. He worked on that. I wasn't
[00:10:17]  part of that. Uh, skypack came next and that's when I joined around skypack. Yeah. Yeah. See, I kind of, uh, I think
[00:10:24] , I think Fred was thinking about static site generation before that. Cause when he was working on the snowpack docs, uh, that we were built in Eleventy.
[00:10:32]  Um, and I think he didn't, I don't want to speak for him, but as I recall, he didn't really like nunjucks. So I think
[00:10:39]  he was kind of thinking about a different, uh, different language for stacks like generation, even before Astro. Uh, but anyways, yeah, Astro kind of spun
[00:10:49]  out of, out of skypack in a way as well. We were like, what, what, what do we do next? Like, let's, let's
[00:10:54]  actually host people's files. Well, how do we do that? Well, maybe snowpack users would like to, you know, have a host. Um, and they
[00:11:01]  became a stack site generator instead. So that's, that's how we got here. Yeah, no, that's, that's interesting. Yeah. Sorry. The sky
[00:11:07] pack was something that's funny. I never actually talked to Fred about, and now I'm like, I'm thinking all about it. Cause, um, yeah, I
[00:11:13]  mean, there's, there's been a few of those like code CDNs out there. Um, uh, you know, what unpackage and a couple others and
[00:11:20]  skypack felt really fresh at the time. I remember like when, when it first went up, it had like metrics to say like how modern your framework was. And
[00:11:28]  then like, people were trying to get a hundred percent on that. And, um, it was, it was one of the first, one of those, uh,
[00:11:35]  what I call them code CDNs or whatever that actually, uh, that I could use a solid most, I'd built a little on modern technology. technology.
[00:11:43]  And then unpackage just like, it was like, nope. Um, and, and it was pretty cool. Like I just, I, I, we don't talk
[00:11:49]  about skypack as much anymore. And I'm just, I, I'm not the hijack the whole thing. I'm just curious. People like, well, where
[00:11:55] , where, where that end up, but just, you, you know, where, where's that at? Yeah. Uh, I don't know. I think
[00:12:03] , I don't, I, I better not say too much. I think, you know, we've been thinking about where to take skypack next and we'll see
[00:12:10] . I mean, skypack was cool because it actually built the, it built the library. Um, so you didn't have to work. Cause like with unpackage
[00:12:17] , at least at the time you had to like, you had to pre-build it. So it could only, it really only hosted files, which is good in some
[00:12:22]  respects, but skypack was cool. Cause it actually built everything with snowpack. Um, but yes, snowpack is deprecated and skypack is like using snow
[00:12:30] pack and that's kind of an issue. Um, so. Right. Yeah. I mean, we're focused on astro, I guess makes, makes sense. And
[00:12:40]  yeah, as you said, astro came on the scenes as a static, uh, site generator. And, uh, which is interesting cause it's, it's
[00:12:48]  become much, much more than that. Um, yeah. Yeah. I mean, I, I guess, I guess I'm trying to tie this together a bit cause essentially
[00:12:57] . So astro is doing static site generation, working on stuff like SSR, pushing things forward. Um, was it sometime while working with astro that you kind of
[00:13:07]  like came up with the idea for corset or that? Yeah. Uh, I, I mean, I don't know if they're directly related other than like,
[00:13:15]  you know, obviously like working in, in this stuff makes you think about, think about these things, but you know, I, I've had this, I've had
[00:13:25]  this, like, not the idea of corset, but I've always had this like, kind of, I don't know. I've had this dislike of the
[00:13:32]  way that frameworks work in, in the fact that they couple the back end and the front end. I've never liked. Um, I always found myself in the past,
[00:13:42]  like, if I like start a new project, I would tell, I tell myself, all right, don't, don't like just use something off the shelf.
[00:13:48]  Like I want to focus on, on this app I'm building and I don't want to like get into the weeds of like building the library, but I always wind up
[00:13:54]  building the library anyways. Cause I'm like. Natural advice. Annoyed by something. Yeah. And so I would kind of fluctuate between like, all right,
[00:14:02]  I'm gonna use something like super declarative, like, you know, preact or something like that. And that's great until like something I didn't like.
[00:14:09]  Right. And then they're like, all right, screw it. I'm just going to go like full vanilla, like do everything from scratch, like best possible performance,
[00:14:17]  like all that. And that's cool. Like I know how to do that pretty well, but, um, you know, obviously just everything takes a lot longer doing it
[00:14:24]  that way. Uh, so you're just not actually very productive. So, yeah, that makes sense. Yeah. Cause like, I, I, I guess you
[00:14:33]  were already kind of already in this zone and thinking about it even like at the beginning when you're making Astro and stuff, but like for a lot of people, I
[00:14:38]  feel like, um, so locked in single page app world for so long. It's the last year or so has been kind of a, like, Oh, what else
[00:14:48]  is out there? Kind of, kind of thing. We started to see the kind of the cracks or whatever, like, and, um, it's interesting because as I
[00:14:58] 've been talking to a lot of people who've been working on a lot of these new, these newer projects, uh, on the side, this is something that's
[00:15:05]  actually sat with them for several years. You know, just like kind of watching things evolve and be like, we could do something else maybe, you know? Yeah. Well
[00:15:15] , I mean, I've always like built like what I would call websites. Like that's like any like side project of mine is always something that's multi-page.
[00:15:22]  It's something where like I'm showing information is the main thing. Like I never built, like, I'm not doing slack on the side or anything like that.
[00:15:29]  So I've always been, I think, thinking about the problems of websites more, more so than apps. So like the single page app model has just never been a great
[00:15:40]  fit for that. Um, that's one reason why it's just, like I said, bothered me for a long time. Right. No, that, yeah.
[00:15:47]  And I mean, I think it's great now that people are listening and actually checking this kind of stuff out. So, um, let's, let's, let
[00:15:54] 's like, let's, I'm going to actually share my screen for two seconds here and, and let's actually, where is it? Oh yeah, here we go
[00:16:02] . I just, Corset, the library. What, what, what is Corset? Maybe you can just speak to it to kind of give us a high
[00:16:08]  level of what, what it is that we're, what we're talking about today. I mean, in its essence, Corset is a library that's very much
[00:16:16]  like Vue and React and, and Solid. Its job is to allow you to bind, uh, bind to the Dom, your JavaScript to the Dom, right?
[00:16:25]  It kind of acts as a bridge between JavaScript, the JavaScript that you're running and Dom. Now what's unique about Corset is, uh, that it's not
[00:16:36]  template based. Well, I say, I say template, maybe you know a better word because people think when I say template. They get offended. Yeah. It's JS
[00:16:46] X a template. Yeah, no. Uh, and, and the other time I, I, I, I, I think I once called, I didn't know
[00:16:53]  what to call like the other side, like the view or Svelte templates. And I just like string templates or whatever, like, and, and like, then the
[00:16:59]  people got like super offended about that too. And I was just like, they're like, call it custom DSL. And then I'm okay. Well, is JS
[00:17:07] X a custom DSL? Like, it's just silly. Like, it's just silly. Anyways, sorry. Tangent. But yeah. No, I,
[00:17:13]  I don't like the strings. Cause sometimes I see that influencer types saying string template. And I'm like, that's not really been, I don't know. Like
[00:17:21]  it's like, it's its own language. Like that really has not been true for a very long time. Like backbone was string templates. Like it was literally just
[00:17:29] , you know, concatenation, but, uh, yeah. It hasn't been true for quite a long time. When, when, yeah. I just like,
[00:17:34]  I didn't know what else to call them. Like, I guess one of the shift happened is when people went from parsing it at runtime to ahead of time, because
[00:17:43]  like, you know what I mean? Like knock out data bind, like inside the HTML and then you had like, uh, you know, even like, I guess
[00:17:52]  some of that like view one time period when people are using that, they were like, you know, like it's interesting cause views current compiled syntax still has throwbacks to
[00:18:02]  that. But, but like, yeah, I mean, the way they work now is like very different. And like, if someone called, I can understand why rich
[00:18:10]  when someone called like, uh, or like, uh, spelled a string template, that'd be like, like, it's not, it's not really any different than
[00:18:18]  JSX or anything. You have full JavaScript capability in those expressions and it's not quite the same thing. Yeah. But anyways. Yeah. So core set is a string
[00:18:29]  template, I guess you could say, uh, except what, what, what makes looks like, yeah. Get back to template. Yeah. Well, CSS is not
[00:18:37]  a template. Sometimes I've said like XML shaped, uh, declare declarative XML shape. But people don't like that either. Cause XML is slightly different than HTML.
[00:18:46]  It's really like HTML shaped declarative syntax, like templating, whatever it is. Right. So that's, that's the major difference with core set is that is
[00:18:57]  more, it is intended to be like CSS where, uh, instead of seeing the shape of what, of the thing to produce, you say what it is that you want
[00:19:05]  to find to. So you kind of skip the layer of like describing the look of the thing and just go directly to the parts that you want to modify. Yeah
[00:19:12] . Like just sort of just absorbing it from the example right here on the, on the landing page. Cause it's a little different. I've seen, I've,
[00:19:21]  I've seen, I've seen some like hybrid approaches where like they don't put very much in the HTML and then you get like something in the JavaScript. Like it
[00:19:30] 's almost like jQuery S where you just have identifiers and pull it out this HTML. Like I can't tell that there's any framework or like, it's not
[00:19:41] . Yeah. It's like, it is just the HTML. There is no semblance of that. There's anything else going on here or any, any pieces that
[00:19:50]  hook into it. That is all handled on, on, on this side. Yeah. So that's the key thing is that, you know, core set is 100
[00:20:01] % does not care whatsoever what your backend is. Like, you know, you can use handwritten HTML. Uh, you can use cold fusion or PHP or it doesn
[00:20:09] 't matter. Like react. It does not matter. Like what produces your HTML. Um, core set is only a front end library framework that, you know, upgrades your
[00:20:20]  HTML. It's, that was kind of a key thing. Like when I was thinking about this, this problem, I was like, you know, cause I forever I
[00:20:27]  was, uh, I kind of just felt like the only way to do declarative was with templates. You know, I never even had it in my head that you
[00:20:33]  could do it another, you could possibly do it another way. Um, I think when I actually decided to, to, to, to start working on this project, I
[00:20:44]  had kind of, I was working again as it usually comes out of like some side project, these ideas. Um, and I just, I really, I, one thing
[00:20:51]  I don't like about like the, the traditional hydration approach is the fact that like, you have to, you know, replay your app in the browser. You gotta
[00:21:00] , you gotta do it on the server. You gotta shove the Jason into a blob in your, in your HTML somewhere. And then you just gotta replay it. Um,
[00:21:08]  which, which stinks. Yeah. Um, so, so what I always wanted was I wanted like the data is already in the DOM. Like I think in an ideal world
[00:21:18] , and we'll kind of get into how, you know, of course that doesn't solve this, but that this is kind of one of its aims is that like the
[00:21:24]  DOM should be really the source of your data. And the way I think about poor set is like, you have like, you know, you do like concentric circles
[00:21:33]  where you have like your, your state that you have in JavaScript and the state that's in a DOM. And like those overlap, right? Yeah. They're like,
[00:21:42]  you, you always have some state in JavaScript. That's not in a DOM. Um, yeah. Assuming, go for it. Um. Yeah. Yeah.
[00:21:48]  Assuming, assuming your server side rendering and not just. Oh shit. Hold on. My headphones are like also hooked up to like, um, a phone or something.
[00:21:53]  And like, if I tap it, it starts playing music. I hope you can't hear that. No, no. The audience is saved from that. Okay.
[00:21:56]  Yeah. So there's, there's DOM state and there's JavaScript state. Okay. Oh, shit. Hold on. My headphones are, like, also hooked up
[00:22:03]  to, like, a phone or something. And, like, if I tap it, it starts playing music. I hope you can't hear that. No, no.
[00:22:10]  The audience is saved from that. Okay. Dom state. So there's Dom state and there's JavaScript state. Okay. Am I drawing this right? Yeah, sure.
[00:22:24]  Like, this is not about Corset. This is just the reality, right? Like, assuming you're doing SSR, at least, if you're just
[00:22:32]  doing purely client, then I guess you could say that all Dom state derives from JavaScript state and they, you know, they're the same. But if you're doing
[00:22:41]  SSR, you're going to render some stuff that you never have to touch again in the client. Now, it might still be in the client, I guess, with
[00:22:49] , like, a, you know, like, in React or something. Right, right. I mean, this. Server components. Right. I mean, this,
[00:22:57]  this all comes down to, like, we've been told for a while that view equals function of state. Yes. And, and view equals function of state basically is,
[00:23:05]  like, right out the bat saying that it's not this. It's like, oh, this is, like, where my drawing skills get put to the test. That
[00:23:15]  view as a function of state basically is more like, I mean, it's not necessarily that it's a subset, but that it should be derived from it. So
[00:23:25]  it's like, yeah, it's like, it's like, I don't even know a good drawing of it, but that this, this should actually completely, the
[00:23:32]  JS state should encompass all the DOM state and it should be kept in sync. But the reality is, this has a problem because you don't, this implies that you
[00:23:43]  need all this JavaScript. Yeah, you can't even, you can't even, you can't derive the view until you already have the JavaScript, right? It's like
[00:23:51] , what I think you really want is you want, you want them to, like, be able to, you know, you want state to flow both ways. And
[00:24:01]  that's really what I want to achieve, of course, that it's one of the things I want to achieve is that allowing, allowing state to flow in both directions.
[00:24:13]  Because what you really want to do is you want, you want, you know, when you render your server, like, it contains, like, most of the state
[00:24:19]  that you need to resume. So why not just pull it straight out of the DOM rather than, you know, having to get it back into the JavaScript first? All
[00:24:29]  right, so this is, this is, this is, this is me illustrating while Matthew talks. So, yeah. Yeah, so core set, in this case,
[00:24:38]  like, the sheet, the, that, the DSL is the thing, is the thing that sets kind of in the middle. And, um, you'll, you
[00:24:45] 'll see some of the warts that's come from, you know, me, my JavaScript background, and when I started working on this, and, like, even this
[00:24:53]  example, like, the count is in JavaScript, right? Like, it's not actually pulling it from the DOM here. Um, so I, I need to,
[00:25:01]  I need to fix this example at some point. But, uh, we, we don't start with zero, uh, from the DOM. If, let's say we
[00:25:09]  render 20 or something, right? Right. Well, we're starting from zero, because JavaScript is actually the source of truth here, uh, and not the DOM. Right
[00:25:17] , but just, just very quickly, so people just, I just, I know we'll probably, like, build something and do some example. But, just so
[00:25:25]  I can quickly grok what I'm seeing in this example, it looks like these are class selectors, like I'd find with CSS. Um, right. So,
[00:25:33]  so this means the counter, which is this. This refers to this div. Yes. And then count is going to be down here, where the strong is, where
[00:25:42]  our actual count is, and the incrementer, decrementer associating to the button. So this is how we find the stuff. And then, there is, I
[00:25:50]  mean, I'm just going to, like, try and explain it from what I see. Um, counter, okay, so we have counter. I actually haven't
[00:25:59]  looked at core sets. So, dash, dash, count, dash, dash, ink, and dash, dash, deck. Those are usually CSS variables, but in this
[00:26:08]  case, there's something else. Okay, maybe this is as far as I can go. What, what am I looking at? I mean, they are, uh
[00:26:14] , not CSS variables, obviously, it's not CSS, but they are variables. It's the same, it's the same way. Uh, so what we're doing
[00:26:21]  here is we're setting, we're setting count on the counter, um, and then whenever we want to use that in any nested DOM, you can just refer to
[00:26:30]  it using var. Uh, so, yeah, so one of the major differences of core set is that it's property-based. So, all on the left-
[00:26:38] hand side, on the left-hand side of, uh, the declaration, so, like, you know, so for some CSS terminology, like, the selector there
[00:26:46]  is called a role, and, uh, each, each, like, uh, key value there is, is a declaration. Uh, so you have a, they have
[00:26:54]  the property name, and then you have the property value. Okay. So, yeah, what's happening on the right-hand side is that we are getting the var,
[00:27:00]  which is the count, and setting it to the text. Uh, so one thing that's really cool, we can talk about this later, but one thing I really
[00:27:09]  like about core set is that its properties map directly to, to, like, DOM API calls, um, a little better, in my opinion, than, than templating
[00:27:19]  frameworks. Like, one problem with, with, with XML shaped or HTML shaped is that you only have two dimensions, right? You have attributes, and you have children
[00:27:30] , and so we have to shove events, and attributes, and props, um, all within, all within that, right? And that's, and then there's various
[00:27:40] , you know, things people do, but what's really nice about core set is that it's a little, it's lower level, at least in that regard, is
[00:27:48]  that, you know, you can directly set an attribute, and that, that's just a set attribute call. Uh, text is just text content call, a prop
[00:27:55]  is just setting a property on an object, uh, et cetera. Uh, these, these, these, uh, sorry, what would we call them, property names
[00:28:05] , are specific, um, uh, core set identifiers, which basically inform, like, this is a, in, this is a text, like, replace the text
[00:28:15] . Yes. This is an event handler, yeah. Those all have special meaning, yeah, that's, yeah, those are event handlers, yeah. Got you
[00:28:23] , and then, and then something like, event takes the event name, and the, yeah, the callback, which is something that, right. So you basically
[00:28:35]  declare all your variables, including your, your, uh, functions and stuff, kind of, you know, it makes sense to, I mean, I'm sure you could
[00:28:43]  actually distribute it, but it makes sense for this case, like, be like, okay, this is my component, so to speak. And then be like, here
[00:28:50] 's all the, the data, like, so here's the data, here's the data manipulation, here's the event handlers, and then here you can, like
[00:28:59] , okay, find the count, find it to the text, find the increment button, set the click event to that handler, decrement to that handler, and look,
[00:29:09]  this is pretty cool. You can actually disable, you can actually disable the, the, the, um, sorry, toggle the disabled attribute based on what the count is
[00:29:20] , um, yeah, okay, I think, I think people, people are, uh, sorry, I was just saying, I think, I think I follow along,
[00:29:28]  uh, people, people in the chat, you guys following along? There's some comments here, let me see here, actually, this looks like a fairly smart approach,
[00:29:38]  how's the CSS story? That's funny, I guess they're wondering, how do you do CSS and CSS? You don't do CSS, no, uh,
[00:29:46]  this, this does not, I mean, you can set style attributes, you can, you can toggle classes, that's, that's how you do CSS, I guess
[00:29:54] , is what I would say, um, could be used for a substitute for jQuery, yeah, sure, that's perfect, perfect, perfect, perfect use case for
[00:30:02]  it. Yeah, yeah, yeah, I, I, so, so just to be clear, like, uh, values are, you can put values anywhere, so
[00:30:11]  you could put, you could put those functions directly where, um, the var is used, I, obviously, I wanted to show the power of, of variables in this
[00:30:19]  case, but, um, those, those values could be anywhere, I think, a lot of times in CSS, you kind of group your variables, and kind of,
[00:30:26]  uh, you know, in a specific selector, and then use them, it's just a little bit cleaner to write it that way, I think, yeah, yeah
[00:30:33] , just, just to be clear, like, once you have a value and a variable, you can do anything with it, you can, like, use it here
[00:30:39] , you can derive new values from variables, that's, like, that's one of the cool things about CSS variables, is, like, they are a reactive primitive,
[00:30:46]  naturally, right, like, CSS variables are reactive, so, uh, using, using CSS as the basis for this DSL, it's, like, I didn't
[00:30:56]  have to invent, you know, every framework has, you know, Svelte has the dollar syntax, and Svelte stores, and you have signals, and
[00:31:03]  React has hooks, and, like, you have to invent the, these reactive primitives, where you kind of get that, uh, at least, you know, one
[00:31:09] , the compute, the compute primitive, right, in CSS. Well, and, or another way of looking at this is, CSS is a purely declarative language, which
[00:31:18]  means that any relationship has to hold through time, like, it is reactive in that sense, um, and that's actually the, the whole freaking challenge, um,
[00:31:25]  on the reactive side, I mean, I talk about this, people who follow my stream, they know that, it's, like, JavaScript is not declarative, it
[00:31:31] 's, like, all our UI frameworks are trying to, like, add these declarative levels, and we're, even if we're using runtime, or compilers
[00:31:39] , or whatever, we're, like, kind of morphing the language, like, like, for our purposes, to try and make it more declarative, where
[00:31:49]  this is just, like, look, the DSL is declarative, you don't have to worry about losing reactivity, because, like, it, it can
[00:31:56] 't, it's literally the language, and similar, like, uh, I don't know if you saw, uh, seen any of the work we've been doing with
[00:32:02]  Marco recently, it's, it's, it's an HTML language, where everything is HTML, or XML tags, even the state, and in that sense, it's
[00:32:10]  because of the mechanism, I mean, we had to introduce a little bit of a mechanism there, but because of how strictly, like, the syntax is, like, it
[00:32:18]  has to be declarative, there's no, there's no, because there's no way to, it not to be, you don't have to worry about a
[00:32:25]  whole degree of problem, like, hook rules, or losing reactivity when you access it in the wrong place, yeah, that, that's cool. Yeah, yeah,
[00:32:33]  that's, that's the challenge, like, that's the, the benefit of, like, what you're doing is that, you know, you have the full power
[00:32:39]  of a general purpose programming language, like, right there, um, but the problem is to, like, actually compile that, or to do whatever you need to do
[00:32:47] , like, you have to, you have to subset that, you know, like, hooks is the same way, even though hooks is not, you know, there's
[00:32:55]  no compilation there, but, like, the rule of hooks, you have to follow the rule of hooks, it's, it's basically the same thing, right?
[00:33:02]  Yeah, yeah, yeah, I always pull the analogs, right, because, like, there's so many similarities, and I, like, what we do quite often
[00:33:08]  on this stream or channel is we look at all the frameworks and do comparison, that's why I was really excited to talk about this, because, um, uh, in
[00:33:15]  one sense, this is, like, when I, like, playing extreme, like, we did a stream about two weeks ago, all on Marco's syntax, and
[00:33:22]  showed, like, how, like, the language constrained, but at the same time, it was incredibly powerful. Um, this is a little bit different, um, but
[00:33:30] , uh, but, so in some ways, this is very different than anything I've ever shown on stream, but on the other way is, like, this isn't
[00:33:37]  so far of a stretch for people could picture what those benefits would look like and what it could mean for authoring. Um, so that's why I think it's
[00:33:44]  really interesting, because maybe this idea that, you know, we're, like, some people, someone's like, like, here we go, Jack, this is sorcer
[00:33:50] y, um, maybe, maybe, maybe it's, maybe it's not, maybe, maybe this is, like, not that far of a natural extension to the conversations
[00:33:56]  we've been having here, so, um, I think, I think it's interesting, um, for sure. Well, I mean, you think about, like,
[00:34:03]  the, the problem I think we're all trying to solve, which is, like, how do you make, how do you make HTML progressive, like, well, CSS
[00:34:10]  already is that, like, CSS is, you know, a layer on top of HTML. Right. And the templating approach forces a layer underneath HTML that then also
[00:34:22]  has to be the same layer on top of it, but CSS already kind of has this, right, like, CSS doesn't care how you render your HTML, like,
[00:34:30]  it, it grabs the parts that it needs, and it, like, gives, it gives your DOM element shape and color and all that stuff, and, like, the
[00:34:37]  idea, of course, that is, like, I want to be that, but instead of, you know, giving it a shape and color, instead of styling it
[00:34:43] , it, it binds to it, it allows it to morph it over time. Yeah. To be that kind of layer for it. Yeah. That's, that's
[00:34:50]  really cool. Okay. And this is already coming up in chat, because, you know, and you probably get this, every time you show someone this demo, they're
[00:34:56]  like, or, like, this kind of example, they're like, that's pretty cool, now how do I do a for loop? You know, like,
[00:35:01]  like, what, what, what, what is like, like, what else can we do with this? Because, yeah, there's, there's a lot of questions
[00:35:09]  that kind of come in, because, like, it seems powerful, it seems simple on the surface, but let, maybe we should get into a little bit more involved example
[00:35:19] . cool. Just reading chat, sorry. Okay. Yeah. We can do for loops. As far as I'm aware, there's no, there's no capabilities
[00:35:27] . CoreSet is, like, early, early-ish development. Like, let's say, like, do not rewrite your, your company's apps in CoreSet.
[00:35:35]  Like, there are performance issues, which we can, we can talk about. The performance characteristics of CoreSet are, like, very different from traditional frameworks, because it's
[00:35:45] , like, an inversion of what, of how frameworks work in a way. Yeah. But anyways, yeah. I mean. There's lots of bugs. But concept
[00:35:54] ually, there's not anything that you can really do. The only thing you can't do in CoreSet is you can't, like, modify a substring. You
[00:36:03]  know how, you know, like, in JSX, you can, you can target a text node, right? You can't target a text node because CSS has no
[00:36:10]  selectors for text node. Right. That's why, in this example, the count is a, is a strong. So that's really the only thing is you
[00:36:18]  can't, like, you know, if you want to, if you want to modify a substring in a text, well, you use a span is essentially what I
[00:36:25]  do. Yeah. Yeah, that's, that's really the only thing you can't do. Okay. Yeah, that makes sense. And it's interesting. I
[00:36:32]  talk to framework authors who are optimizing stuff like crazy all the time. And you might find this amusing because it's, it's different than this and obviously further away from like
[00:36:41]  the strong span thing. But I was, I was actually, it was a discussion recently with a, what's it, Dom, a creator of Inferno. And
[00:36:50]  he was actually playing off this idea of like a new sort of JavaScript framework. Maybe I'll talk to people about that in a, in a bit, but he was
[00:36:56]  like, he, he wanted that all text had to be in a text JSX element. So that like his compiler could be smart enough to do the thing, but it
[00:37:05]  was just kind of funny. He had no qualms at all saying that, no, if you want to do text, you, you need to wrap it in an element
[00:37:12] , which is obviously different motivation than this, but it was just kind of, whenever I see stuff like that, I always kind of think about it. Cause if anyone
[00:37:20] 's used Inferno, you know, optimized to the max and Inferno had like stuff like dollar sign text only child. Like it had a bunch of like direct
[00:37:29] ives you could add to the JSX so that the compiler could optimize it. And it was like the secret hidden language. And I guess at a certain point he's like
[00:37:36] , okay, no, I just want, we're just going to say this is text. So this is kind of interesting. I know it's a little bit further away
[00:37:43] , but I mean, I don't, I don't see this as actually particularly problematic. Um, but yeah, but the, of course that superpower and it's
[00:37:52] , uh, the downsides is all CSS. Like that, that is like, that is what I continue to learn over time is like the more I make it like CSS
[00:37:59] , like you get, cause I always issue with, with, uh, abstractions is always just familiarity, right? Like that's a lot of, I would assume Marco
[00:38:09] 's, uh, problem trying to sell it is that, you know, it's a little bit different. Um, it's not that far off. Like there's
[00:38:15]  other things like, um, uh, what was that? That. Emba. Emba. Yeah. Yeah. That, that, that, that's cool. But
[00:38:25]  that's a little bit further out. Yeah. So when I was kind of, you know, thinking about this problem, I really like, I came to the conclusion
[00:38:31]  that I'd love to talk about this with you is that like, I see template like templates is kind of a dead end in a way. there's certain problems that
[00:38:39]  we can just never solve that way. Um, and they force you down this, like isomorphism thing. Like you're kind of forced into it. Um, so
[00:38:48]  I just saw, at least for, for why the, the things that I care a lot about, I saw that as a dead end. And so I knew I was
[00:38:55]  like, well, we need a different DSL. We need something different. Um, and so at first I was like, well, you know, I was thinking
[00:39:02]  something completely different, uh, but that's really, really hard to sell. Um, so anyways, core set target CSS because people already know CSS. It's very familiar
[00:39:14] . Yeah. And that familiarity is such a huge benefit. And to your other point, um, yeah, it's, it's interesting. This is, this is what
[00:39:22]  I've been commenting on, especially my articles the last few months. I keep on going, like, like we're, we're getting to a point where we're
[00:39:29]  fighting JavaScript. We're fighting templating so hard with our compilers. Like if you, if you ever listened to Mishko Hevery talk about quick, he
[00:39:37] 's, he just goes on up, you know, about like how he has to do all this work to undo the closures of JavaScript. Um, and like break apart
[00:39:47]  the components and like just basically what we're doing these days in frameworks and it's not limited to quick Marco six is like right up there on that. Um, and
[00:39:59]  if you look at it, it's, it's partially even extension of some of the fine grain reactivity stuff I've been doing with solid is trying to author like react
[00:40:08]  and then output like jQuery. Like that, that's like what we're doing. Like we're letting people like all like make the components and all that. But
[00:40:16]  what we're trying to do is like fine grain updates and like, uh, no components that have to run, like run, like run the component once. Maybe only on
[00:40:24]  the server, only ship the code you need to do those fine grain updates. And to do all that stuff, you have to like unwrap all the closures and do
[00:40:32]  all this kind of crazy stuff. And it it's interesting if the authoring experience can get closer to the output, you have less complication, like, like less
[00:40:42]  concern about like, like abstraction leaks. I think that's one of the hardest things because in a sense, a compiler is like the equalizing effect, like the way of
[00:40:51]  kind of getting around that. But at a certain point, every framework, every library has escape hatches because you need to get, you need, you need to give
[00:40:59]  people flexibility to do what they need to do. And I am very concerned when those escape hatches get far enough that people can't recognize the underlying model. In fact,
[00:41:11]  yeah, my, my, my hot take is that's what the problem is with use effect. Because people like in react because what people, people use like effects in
[00:41:19]  reactive libraries all the time, like in Svelte or Solid, and no one complains about it. Like if they're just like, okay. And that's because
[00:41:25]  the model and the rendering model is like every render, like rendering is a side effect. We have some pure reactive drive state, and then you render a side effect. But
[00:41:33]  in react, the rendering is pure and use effect is like an example of where you have to like blow a hole through the abstraction and people no longer recognize what's on
[00:41:44]  the other side. That's, that's, that's my hot take. But I'm, I'm, we're here for your hot takes, not just my hot
[00:41:50]  takes. I do this every week. I like, I like that one. Yeah, I have some thoughts on use effects. Sometimes I wonder, like, I go like
[00:41:58]  too far with things I think in my head. Like I see these problems as like fundamental component architecture itself is bad. And like maybe we shouldn't be using components at all
[00:42:09] . Like that, that's how far I go with these things. Right. But that's, that's probably too far. But yeah, that's one, that
[00:42:18] 's one thing that worries me with the compiler approach is this. Like what happens when you need to debug? Like maybe I'm the last person in the world that like pulls
[00:42:27]  up an inspector and looks at stuff. But like I do that all the time. I, I'm just curious, like with, with something that's a compiler approach
[00:42:34] , like I stick a debugger and like, well, what am I even looking at? Is it, um, even with source maps, I, I can't imagine
[00:42:42] , you know, what that is. Yeah, I mean, this is, and the, well, here, here's the interesting part. And I think, again
[00:42:51] , I love this kind of conversation and I'm, I'm, everyone in the chat knows I love these kind of conversations. So we get sidetracked all the time
[00:42:57]  and we're all good. Um, but is that, um, here's my, my theory is while a dec, this, okay. This is interesting. And
[00:43:09]  I, you see how this fits into a core set as well. But while declarative systems generally are easier to reason about, they're much, much, much, much
[00:43:19]  harder to debug. Like essentially, the, as you go off more declarative, you're trying to tell people like to describe what something is, whether, rather than
[00:43:28]  how to do it. So at that point, we've lost the how, largely. Yeah, it's the inversion of control issue, right? Right, so. Is
[00:43:37]  that, is that the right term? I think so. Probably, yeah. So I, I, I'm thinking like, what, what's happening is like, yeah
[00:43:45] , I mean, it's the same extent of the example I was giving you for with React, right? Like their, their mechanism is getting, you know, if
[00:43:53] , say React gets a compiler that looks like Svelte, you're like getting even further from what the actual runtime mechanism is from the declarative. And the answer could
[00:44:04]  be just like, make a better abstraction, never, never show people the cracks. Never, never, yeah. No leaks. Yeah, yeah. But, I mean
[00:44:12] , and, and Dan pretty much said as much, because I actually asked him on one, he had one of those, like Danny Roth had one of those, like,
[00:44:18]  ask me anything. That was my question for him, because like, everywhere I look. I think I saw that. Yeah, everywhere I look. He thinks the abstraction needs
[00:44:25]  to go further, right? Yeah, yeah, exactly. And he's like, I think he's actually, I think he's right, because like, maybe it
[00:44:31] 's because, maybe it's what I do for my job, but like, isomorphism is like this constant agitation in my brain. And like, the only
[00:44:40]  way I can think to like, fix the problems of isomorphism is by just fully abstracting, you know, isomorphism is essentially like, you know, we
[00:44:49]  take, we take the server and the client and we make them look the same, you know, you like to say, you like to say the one app model.
[00:44:56]  And, but there's lots of leaks within that. There's like very small leaks, which is like, you know, undefined is not a function or, you
[00:45:04]  know, window is not defined or whatever. And then there's like, there's, there's bigger leaks, even like within that. There's stuff like, you know
[00:45:12] , a lot of libraries are not written to run on the server and you try to run on the server and you run into issues or, you know, and then what you
[00:45:20]  do is you try to patch the server to be more like the client most of the time. Yeah. But that there's always leaks. There's like, you know
[00:45:27] , you try to use fetch and like in the browser, you can use fetch slash API. We can't do that on the server. You have to give it the domain
[00:45:33] , all that kind of stuff. It's why we have meta frameworks. This is really, really complicated. And that's why like, like, we're getting to a
[00:45:39]  point right now where people are like, yeah, you can't use React SSR really without next or remix or like, like, and Svelte's like, this
[00:45:47]  is important enough that we want SvelteKit to be like the way and solid start, we took a similar thing. Like whether we're doing client or server,
[00:45:53]  just like, this is too many details for people to wrap their head about around. We need to actually take care of it for them. And this is part of that
[00:46:01]  complexity. I lived during like, watch, I was a developer for doing .NET through the 2000s. And I watched like something that seemed like started from something relatively simple
[00:46:14] , like PHP-esque, get to the most colossal model, like big blob of like terrible, like, because at a certain point where we started doing like all these
[00:46:23]  partial updates and like to improve performance and we're serializing all this data back and forth. It was an isomorphic model. Like, it was a server based
[00:46:31]  isomorphic model, but you'd write all your code in C sharp or whatever. And then it would generate the JavaScript. And then all the pieces connected to each other
[00:46:39] . And like, whenever you did any work, it went back to the server and serialized the state and went back and it handled this for you all automatically. But
[00:46:47]  I mean, there, I felt like there really was a reason that when like, single page apps came out, people were just like, Oh my God, thank you.
[00:46:54]  Like jump on this ship. It was actually, it's funny now going back because obviously there's a huge complexity and consideration when you build to scale single page apps, you
[00:47:06]  have all these certain concerns around caching, state management, all this kind of stuff. But there was a time period because of like the state of art of isomorph
[00:47:13] ism on server stuff that single page apps being like a single app that you just have in the client was a drastic simplification. And I think we're getting to a
[00:47:22]  point right now where people are looking for drastic simplifications. Now. I mean, I, I'm going to credit that's a big part of Astro's success right
[00:47:30]  now is actually just like people going like, it's like, like WTF, like, what the fuck are we doing here? Like, like, let's, let
[00:47:37] 's, let's get simple again. Let's just like build a website. Yeah. So getting back to, you know, Dan's point, I think he's,
[00:47:44]  I think he's absolutely right because, you know, you know, a client is a single user. There's one person in the client and a server handles multiple users
[00:47:53] , right? So there's always like this, like they're different worlds. And I think he's right that you really need, if you're going to fix it this
[00:48:01]  way, if you're going to try to fix isomorphism, like I think you need just a completely different abstraction that, that just papers over all the differences, but
[00:48:09]  that's not really what people are doing. People are, are, are making the server look more like the client. Like every time Dino ships something it's like
[00:48:17] , Hey, a browser API is now available. Things like that. I don't know. Maybe, maybe a lot of it comes from my background and working in this space
[00:48:24]  and just seeing bugs that everybody runs into. Like maybe there, maybe that will succeed into like making the server so much like the client that like, you know, the,
[00:48:34]  the differences aren't as, aren't as massive. And like, they're not as, you know, a big of a problem. Yeah. I, but yeah
[00:48:42] , as I said, like, I like looking wide right now. Cause like I've been, I, yeah, this has been my message. I keep on telling everyone
[00:48:49]  how the, how the client JavaScript isomorphic story, how we're solving MPAs versus single page apps and static sites versus SSR. And we're all
[00:48:56]  finding the solution and it's all meeting in the middle and we'll get, but like at the same time, the complexity is real. And we have to be very conscious
[00:49:06]  of that. Cause like we, we, it shouldn't, we may get there. We might not like what we see when we get there. We might like succeed in
[00:49:13]  that the same time, completely fail. Um, that's what I'm always concerned about. It's not like failing in terms of being able to actually do it. I
[00:49:19]  think we completely do it. It's more of like, is it actually something that's good? I mean this, a lot of ideas, you try them and then
[00:49:27]  you're like, Oh, actually this was not a good idea. Um, and the problem is we have to do so much. We're getting to a point where the
[00:49:33]  complexity is so high that we have to do so much work, spend years of effort, let's say to actually prove in R and D that this is even something worth doing
[00:49:41] . And then dog feed it to early or sorry, not dog feed the wrong word, but get it out to early adopters and, and like try and figure out if
[00:49:48]  it's viable. Um, it's a huge, huge investment on something that might just fall flat. Um, that's, that's actually kind of how I feel
[00:49:55]  about all of front end right now. It's just like, we're making huge, huge bets. Um, hoping that like, if we push the solution far enough,
[00:50:04]  we'll just find this the right answer. Um, that's not always the case. So, yeah. So there's a good tweet. I saw the other day
[00:50:11] , I bookmarked it, uh, talking about this problem. They said that compilers increase complexity and decrease flexibility, which I really like that. Um, you
[00:50:21]  know, you brought up the complexity part, but they decrease flexibility as well. Right. And it's like, you can use a subset of the language in certain parts
[00:50:31] . Um, yeah. Yeah. I mean, it's, it's my favorite meme right now. Actually. Um, I, I, the people, people who saw
[00:50:38]  my react Finland talk will, will know this one, but I, I showed like a, I did the, you know, the here's something, here's something kind
[00:50:44]  of meme, where it's like, I showed solid local state and then I showed global state, you know, just the pulling the state out. And the whole kind
[00:50:52]  of the flip side of the meme was I, I just went to, I showed a Svelte example and said local state. And then I was like global. They
[00:50:58] , because like, they, they do have a different mechanism for, but you know, like if you, if, if your whole world say is a component, then how
[00:51:05]  do you express with the language, what's not in the component? Like you've already, you've already like remove, removed the language to actually describe something. And,
[00:51:13]  and that's always the kind of risk. I mean, this is a, that's a, kind of silly thing. Cause obviously someone can go like build it,
[00:51:18]  bring in like some external store or something. But with compilers, we always like in streamlining stuff, we actually cut out a lot of like what, like what
[00:51:29]  we can do with it. Yeah. Right. I don't know. Yeah. Yeah, no, it's all good. So yeah. I mean, we could just
[00:51:39]  keep on chatting about this for ages. And I think, I think some people are into it, but I, I'm also seeing some, some questions here. I
[00:51:45] 've not even questions, but some, some, some, some, some, yeah, actually I'm going to go back a little bit. Uh, but then I
[00:51:50]  want to actually play with this. Someone, Fabio was mentioning that CSS. Yeah. But for, I was just like CSS is kind of impossible to debug, especially with
[00:52:00]  regards to performance. It's an interesting thing. this is when we were talking about the abstraction thing, right. And, but declarative, I, I, I
[00:52:07]  do wonder if our need. I, I do wonder just before we leave this point permanently here, I'm probably not permanently, but, um, when we go, like
[00:52:17]  we, we have, we, regardless, we have this desire for declarativeness, right? Like there was jQuery. We remember jQuery and vanilla JavaScript.
[00:52:26]  We're, we're still trying to find DSLs and the perfect fit on the declarative side. And it seems like inevitable that there is going to be that gap
[00:52:35] . So I, I was talking to someone and they said like, if you want to like revolutionize front-end, revolutionize like debug and dev tools, because
[00:52:44]  like, like, it was, it was actually Jay Phelps, I think. Um, cause he, he, he basically decided that we were all designing these declar
[00:52:52] ative languages and that what's going to differentiate them is how like actually like usable they are. Um, I don't know. It's, it's interesting to take.
[00:53:01]  No, I, I mean, of course that a hundred percent has this problem, like debugging and we might even run into it. I mean, a lot of that
[00:53:09]  is just, you know, it, it is a DSL. So it's like, there don't, there don't, there don't, language tools don't
[00:53:14]  exist for this at all. So like, you know, if, if you forget a semi-colon or something like you, you might be scratching your head for a
[00:53:20]  minute. Um, but yeah, the debugging is, that's an, a natural state of declarativeness is it's harder to debug because like you're no longer in
[00:53:29]  control. That's why we always, that's why sometimes I go back to vanilla JS. Cause like, like I want to be at the bottom of the stack,
[00:53:34]  right? Like I want the first thing that happens after a, uh, an event runs is, is, is my code. Um, declarative kind of ruins that.
[00:53:44]  Yeah. But it, but it is interesting cause we still want it. Cause we declarative gives us like this, you know, productivity superpower where we can just like have
[00:53:51]  an idea and go like, what is my idea? Realize the idea. Realize the idea. And in theory it works. It, it translates from like,
[00:53:59]  like what do I want to accomplish? I'll just write down what I want to accomplish in computer building an app or so to speak. Um, it's interesting.
[00:54:08]  Uh, yeah. Yeah. One of the goals of Corset is to try to be a, like, I really believe in layering. Like you, you have
[00:54:15] , you know, you have your core primitives, you layer things on top of it, you layer abstractions on top until you kind of finally have the high level abstraction
[00:54:23] . One of the goals of Corset is like to try to be a layer on top of Dom and kind of limit, you know, limit the leap up, like
[00:54:31]  just actually be a small layer. Okay. Yeah. No, that, that makes sense. Um, I think we're actually getting at the time where we should actually,
[00:54:39]  um, build something with Corset. What have I got here? I put up a banner so I can get a timestamp later. So we can, I
[00:54:44]  said writing Corset, but I don't know if I mean writing. I mean, writing something with Corset, not actually creating Corset. So,
[00:54:52]  um, Do you want me to share? Yeah. I think, I think if you want to drive for a bit and just because that, yeah, I keep on getting
[00:54:58]  a whole bunch of questions to chat. Like how do you break things apart? How do you, how do you do it? Yeah. Let's do all that stuff.
[00:55:04]  So it's, it's, it's, it's different. Um, right. It's, it's going to be different. If you, if you,
[00:55:11]  if you want to, you could probably, yeah, we, we, we want to make VS code a little bit bigger and maybe just full, can you like full screen
[00:55:26]  the VS code? Like the green, like, like Mac window. Cause right now we can see like, yeah. Uh, we're going to flip back and forth
[00:55:33]  too. Gotcha. Okay. Gotcha. Okay. Fair enough. So, okay. How about, I know this is painful. One more size up. I should've got
[00:55:42]  you to do this before. Zoom one more. Perfect. Okay. I can go up. I feel like this is probably there. Yeah. All right. So I
[00:55:51]  think let's see the world. All right. Let's, let's go. Oh, we don't want to see that. Um, here we go. Is that
[00:56:00]  as vanilla as we can get? Um, all right. So you're familiar with like the, um, the, uh, which examples should, should be first. Um
[00:56:11] , I'm going to do, you, you, you've seen like the first name, last name example, right? Yeah. Yeah. Yeah. Yeah. Keep
[00:56:20]  creating a full name. Um, let's do that. So like we have an input type equals text. Um, we'll call it when this first, I don't
[00:56:28]  know why, why the editor is doing that. And then actually let me do this. I'm gonna do this in a code pen. And this would be better. That
[00:56:40]  way you can see everything at the same time. All right, cool. This should be better. Um, I might, I might flip back this. If I need
[00:56:48]  to pull this stuff up more too. Uh, this way we can, we can see both at the same time. Okay. Yeah, no, that makes it easy.
[00:56:58]  All right. I'm going to say placeholder equals first name. And one of the cool things is you can use code pen for, with core set because you don't
[00:57:08]  have, um, there's no compilation and stuff necessary. So it's, it's pretty nice. Anyways. All right. First name, last name. And so
[00:57:18]  what we want to do here is we want to have an output. Um, and so we want to render, we want this to be the first name plus the last
[00:57:25]  name. It's the last. All right. So, uh, core set has kind of two main things, two main exports that you use. Um, the sheet,
[00:57:37]  which that is the thing that takes the tag template literal. Yeah. There's a function called Mount. All right. Um, it keeps asking me to do this.
[00:57:49]  Um, okay. Okay. All right. So a sheet by itself can be used. So we can do our sheet and we can say name, just get something on the
[00:58:01]  screen. It's a text or world. We can put strings directly in the template. And nothing's going to happen because it's not mounted. Um, so this
[00:58:15]  returns a function and then we can like, we can update a root element. So this could be, let me do the document body. Okay. Uh, oh, we
[00:58:25]  have an error. What is our error? Uh, don't, don't not do that. Yeah. That's the problem. Oh, you missed the comma. Yeah
[00:58:34] . Oh yeah. Yeah. Yeah. Yeah. Missed the comma. Wait, did that? Yeah. Okay. Sorry. Maybe it was. Oh, I did
[00:58:46]  something bad. What did I do? Re-selector all on name. Ah, see, this is, this is one of the downsides currently. Oh,
[00:58:54]  I mean, uh, yeah. So there we go. So now we got that. All right. We add a long break. All right. So yeah. Like
[00:59:01] , like we were saying, you can, you can, you can manipulate any selector. So update is like a Mount, right? Like it's not Mount though.
[00:59:10]  Update's not a Mount. Yeah. Update's not a Mount. This is just a one-time operation. Uh, so if you want to do this again, like
[00:59:16]  if we had an event listener, it's not going to actually do anything because we're not, we're not mounted. Uh, so this is the lowest level API
[00:59:24] . You probably never really use this instead. What you want to do is Mount and you can do the document body. I usually just do the document itself and this takes a
[00:59:36]  class. And we're going to move the sheet into here. We can just run the sheet outside of, outside of like, uh, I call these behave, these called
[00:59:48] , call these behaviors. You can think of it as kind of like a component. Okay. Um, so now, now, now it's going to be reactive.
[00:59:56]  So let's see. Um, except I did not return the sheet. Now, now, now, uh, now if we listen to events, this function is going to
[01:00:07]  rerun. This is basically, you can think about this. It's essentially, uh, a react class component. Yeah. Instead of being called render, the function is
[01:00:17]  called bind. Yeah. Um, I, I try to change the terminology. Like I don't consider these to be components because a component to me is dom plus,
[01:00:27]  uh, interactivity together. Uh, and this does not include the dom part. Right. It doesn't, or it doesn't, it's not a componentization
[01:00:35]  of a thing. You can't, I mean, you could, I could like create a template here and you can create a template and use your template. Now you kind
[01:00:42]  of have a component. So you can do component like stuff. Uh, but I, I changed the terminology cause this is actually, it's a little bit of a
[01:00:48]  different mindset. Um, we're not rendering, we're binding. So that's kind of like all different. Okay. So in this example, you want to, when
[01:00:57]  someone writes their first name, you want, you want it to show up here. Right. So let's just add a variable, uh, first last. Right.
[01:01:10]  And this is going to be, so we can use insertion points here. Um, I call them insertions. I don't know what they're technically called, but
[01:01:18] . Is it interpolation? Yeah. Okay. Interpolations. Yeah. Okay. Interpolations. Yeah. Sure. Okay. So still, so we got
[01:01:29]  that set up. Right. Now we actually want to, we want to listen to events here. So I'm going to create a selector. Right. Equals first
[01:01:40] , um, input event or. Yeah. I'm going to listen. I'm going to listen to key up. Okay. And then I'm just going to move
[01:01:50]  this over here. So we've got more space. So what we, what we just going to do here is pass it a callback. It gets the event. Then
[01:01:59]  we can say this dot first equals event target value. Now we go. Now that works. Right. Um, so actually, so you'd be interested. So these
[01:02:14]  are not reactive. Like this is just a ordinary class. Um, we do not, there's no proxy on this. There's, there's nothing. These are not
[01:02:23]  actually reactive. Right. Uh, course set. Whatever an event occurs. It, it just calls bind again, essentially. Uh, it rebines. Uh, it
[01:02:32]  rebines. So you can think about the performance. Well, we'll get into performance later, but. That's funny. That takes me back to like angular JS.
[01:02:42]  Like, uh, like old, old school. Angular was kind of like that too, where they, that's how they ended up with zone. I think actually the
[01:02:48]  idea that they only need to ever trigger things when certain types of events happened. Anyway. Yeah. I'm not sure if that's the right model. Like a lot of
[01:02:57]  the JavaScript side of course set or is I'm not, I was just, just, I just need to do something. Like it's really the, the DSL has
[01:03:06]  been the main focus. Um, so I'm not sure if classes and like, I'm not sure if this is the right model, but this is just kind of
[01:03:13]  what it is today. Someone was asking if it has to be a class or if it could be a plain object. Um, it's a, yeah, it's a
[01:03:19]  class right now. Yeah. Um, I know some people don't like classes. I might change it. Um, but yeah, then this is just what it is at
[01:03:28]  the moment. Okay. Um, I mean like literally it would, it would look the exact same. Yeah. Yeah. If it was not a class, but people
[01:03:36]  just really dislike like those, those six characters that I typed in there. They just don't want to do it. It does let you do stuff like, uh, what
[01:03:43]  is it called? Like, uh, what's the term for the, the initializers you there you're doing? I mean, I guess you could do those as object
[01:03:50]  properties. Yeah. Yeah. Exactly. Yeah. Yeah. Anyways. Okay. So now we have a good, we have, we got the full thing. So we can
[01:03:59]  do all of our things. It revinds. That's the basic example. All right. Yeah. Cool. So, all right. So let's, let
[01:04:07] 's take this further. So like this, we, we can take this further. So like, first thing I don't like is I don't like that the fact that
[01:04:15]  we, we have to like the same thing basically. Yeah. Um, now in like in a templating approach, you maybe would make a component out of this or something
[01:04:26]  like that. But we don't really need components for the most part in core set because we have selectors and a selector is a lot like a component. Um
[01:04:35] , so we have an input so we can just group this here. We can move our event down here. Uh, but now we need to make this be dynamic.
[01:04:48]  So one thing we can do is we can use variables. So let me say key is first. He is last. Um, and now this is where it gets kind
[01:05:00]  of weird. Uh, but this is, this is what's really cool about core set. So, um, up to now we've been passing data from JavaScript into
[01:05:12]  the sheet. Call this a sheet, you know, style sheet. I call this is a binding sheet. We pass data from JavaScript, uh, into the sheet, which
[01:05:20]  the sheet then passes it back to the Dom. Right. Uh, so now we're gonna have data or we're gonna have state that's kind of in the sheet first
[01:05:28] . Um, and it's gonna stay in the sheet. And so when, where of course that kind of gets weird is like you have data that's in the sheet
[01:05:37]  that you want to get back out to JavaScript and use it in JavaScript. Um, but that's kind of, it's, it's also kind of cool. So we
[01:05:45]  have a built in function called bind, and this is basically function prototype bind. Okay. So what I can do is I can pass the key variable into this. And
[01:05:57]  so this is going to get the key as the first argument. Okay. Um, so then it, now this should work as well. So what's happening there is that
[01:06:08]  we've able to group our event binding into just one selector, but still make it dynamic based on the key that we do here. Okay. And in terms of
[01:06:18]  scope, just so I can like wrap my head around this, like you said, it's like, it's binding to the sheet. So any very, like any,
[01:06:26]  like a key, like whatever key is here is it's basically scope to the, to the sheet. The, the, the, the, no, the key is
[01:06:33]  scoped to the selector. Okay. So this is, it's, it's added to the name goes first. So the key is actually on this input. So
[01:06:42]  if we bring up the, the Dom, we can peek at what's actually happening under the hood here. Okay. Let's see the results. Yeah. Cause I
[01:06:52]  was thinking like, wait, first and last both have key. So like they have their, their different keys yet we know. So this is, this is applying like CSS
[01:06:59]  rules almost because you're, you're using the fact that you have input and then you have more specific selector on the like name equals whatever. Yeah. So what,
[01:07:10]  what's see how CSS works is whenever you use var, it kind of, it starts from the element you're on, which were on the input and it checks.
[01:07:20]  It checks, it checks there. And then it walks up the tree to find, does anybody else have a key? Right. And wherever the first time it finds key that
[01:07:27]  that's the value it uses. Right. So for like in, in, for example, in CSS, you can define like a color name on your HTML element, but
[01:07:39]  then, and then you use it and you'll get it from that. But then if you redefine that same variable name lower in the Dom, like on a header or
[01:07:45]  something, it's going to use that. Yeah. Yeah. Of course that works the same way. Yeah. It's like shadowing. You can see, you
[01:07:53]  can see here is that the way that we actually implement this is that there's a special data prop. Yeah. And this is going to have a space separated list of all
[01:08:02]  of our variables. Yeah. And then when we go look for it, we just basically, are you familiar with element dot closest? Sure. Element closest is like query
[01:08:12]  selector, but in reverse. It goes up the tree. Yeah. Every sector goes down the tree. So that's all this actually does under the hood is it
[01:08:20]  uses, uses closest to find the closest element with, with that property, with that selector. That's, that's cool. Yeah. Yeah. No, this
[01:08:30] , this is, this is very cool. Yeah. Cause I, I saw like the declarative benefit of CSS and doing this, but you're, you're actually not
[01:08:36]  just using like CSS variable, like you're, you're, you're actually like, like fully taking on the cascading nature. And I, I know it
[01:08:44]  was in the headline and I wasn't, I wasn't not appreciating it until this exact moment. It's the, yeah, it's, it is attempting to be
[01:08:52]  like the semantics of CSS. Not, not just the, not just, not just the look of it, but the actual same semantics. Okay. So what,
[01:09:01]  one thing I don't like about this is I don't like that we have data in the sheet. Right. So we talked about, you know, that concentric circle
[01:09:10]  that you were showing, like. Yeah. In a, in a JavaScript, in a templating approach, like your data is in JavaScript and it flows down to the
[01:09:18]  DOM from there. Uh, in my opinion, it's better for the data to be as close to like where it's actually used as possible. So when data is in
[01:09:27]  the DOM, like I would prefer the DOM to be the source of the truth rather than JavaScript. Uh, and here we've, I think improved it where the data is
[01:09:36]  in, I mean, it's in JavaScript, but it's in the sheet. It's not in JavaScript anymore. Um, so I think we can take this further
[01:09:45] . Yeah. We can do data. Um, yeah, data key was first. Now this isn't good for some other reasons we'll talk about, but we can put
[01:09:57]  it here. So we can actually get rid of these selectors. Right. Right. And we can do data. There's another built in function called data and that
[01:10:06]  gets the data attribute. Now we, we, we, now we have that. Okay. Um, couple more things that we can go here. Oh, interesting.
[01:10:13]  So is, is that it's like the second argument to bind if I'm like seeing it properly in the templating. Yeah. Okay. Yeah. Okay. This
[01:10:25]  is, you can think of buying is basically it's, it's function prototype buying, except you don't have to pass the, there's no this value. Right.
[01:10:34]  Uh, this big, this becomes like the first argument, which is this. Gotcha. Okay. And we're using data. Data is a function that gets a data
[01:10:44]  attribute. So basically data looks up the, it looks up data dash key on this input. Yeah. Um, and it grabs it from there. All right. So this
[01:10:55] , I still don't like this because we're, we're doing, we're adding, we're adding information that's for the Dom or excuse me, information that
[01:11:03] 's for JavaScript to the Dom to, or to HTML. Yeah. Uh, we, we already have this information here. So we don't have a adder, which
[01:11:13]  we had this. I, I have not, I could, you know, we can add this, but we don't have this right now. Uh, so we can
[01:11:19]  actually register a custom or rather custom functions. So a custom function is just a, it starts with dashes like this. Okay. So we're going to register custom
[01:11:32]  function called adder. This also takes a class with a, a call function. And this is just, this is basically what gets called here. So the, this first
[01:11:45]  argument is our keys and do a passing name here. So it's passing this, this is a, so data types in core set say kind of the same as in
[01:12:03]  CSS. So like this is called a, this is an identifier, custom identifier. You can also pass strings like this. Okay. You can pass numbers. You can
[01:12:14]  pass booleans. Uh, I think that's basically it right now. Okay. Uh, but in this case we're passing an identifier when it, when you
[01:12:23]  get it from JavaScript, it's going to be a string. Um, uh, functions can take props which we're not going to use here. But then the last is
[01:12:31]  the actual element. Um, so we can say element dot get attributes. Right. Name. Um, and now, now we've reduced it further. That's cool
[01:12:46] . So yeah, you, it's funny cause it's in reverse, but like, that's like a custom directive except you don't actually write anything in the HTML.
[01:12:54]  Like it, it's like the reverse. Yeah. Yeah. Yeah. So we can take this one, one step further if you'll, if you'll humor me
[01:13:02]  for a second. All right. Um, so we still have stuff in JavaScript, in JavaScript. So I'd, I'd really like to get as much state out of
[01:13:09]  JavaScript as I can. I just find that it, uh, it makes things a little bit more flexible. Yeah. So there's one primitive that we have called stores.
[01:13:20]  And basically all a store is, is a, a key value observable. This is essentially what it is. It's a, it's a map. It's
[01:13:29]  a JavaScript map, but it gives us like observability. So there's a, another thing called store route. What this property does is it creates a store named app on
[01:13:42]  this element. And again, again, that's just a, it's a JavaScript map essentially. So we can say store set app first. We can like set,
[01:13:56]  we're basically setting, uh, properties on a, on an object essentially. Okay. Okay. Um, so we've removed the state from there. So instead of
[01:14:09]  passing this here, what I want to do is I want to store it on the store. Uh, so the reason I should probably back up for a second. Okay.
[01:14:19]  The reason for store, the reason for stores to exist is that, uh, properties, custom properties can't be modified. Like you can't set the custom property.
[01:14:27]  They're, they're one way. Um, you can think about them. They're like one way computed values. Okay. Yeah. So you can't, you
[01:14:35]  can't mutate a custom property. So we need a primitive for doing that. And, uh, stores, stores like the kind of the primitive, the other, the
[01:14:45]  other issue with, with custom properties is that they're, uh, they're top down. That is like, you set a property like on the body, like anything underneath
[01:14:54]  it can access it, but any elements like sibling elements can access it. Anything above it can access it. So if you want to like lift data up in the dom
[01:15:03] , um, there's really two ways to do that. One is an event and, and in corset, we also have stores, which, which allow that. Yeah
[01:15:12] . It's, it's, it's, it's funny. People don't realize this, but like in declarative systems, the derivations are like the given,
[01:15:21]  like they're the thing that like, like that all, like they just wire everything straight through. It's actually the source of change, the mutation, the let that's
[01:15:28]  actually the special one. And I always laugh about this. Cause when people see, when they think in imperative terms, you're always like, you look at Svel
[01:15:35] te and you're like, it's that dollar sign that's special. But the most special thing in my opinion in Svelte is the let, um, which is
[01:15:41]  really ironic. Cause it's the syntax that looks the most familiar, but I guess it's kind of similar consideration here. Um, yeah, the, the writing is
[01:15:50]  like the most important part. Right. That's stores are, um, like they're not fully baked yet. Like a lot of corset is like kind of half baked
[01:16:00]  and stores are definitely part of that. But like, I feel like it's the right, it's the right primitive sort of, uh, but anyways, so in
[01:16:09]  order to keep stuff in, so you always kind of get this weird thing. Like I said before in corset where like you have data in the sheet, like we have
[01:16:16]  this attribute name to get that back out of JavaScript. Like you can use buying this one mechanism. Um, so I'm gonna do the same thing here is I can
[01:16:26]  pass this store into this function. Okay. So I'm just gonna move this function up here. Let's say, uh, what I'm gonna say, set, um
[01:16:37] , set input value, I guess. Sure. And actually I'm gonna pass the store as the first argument. Let's get to the store. So then we could
[01:17:00]  just say, the store is just a JavaScript map. Store set key is ev target dot value. Gotcha. So now, uh, oh, undefined. Oh yeah
[01:17:12] . Okay. So here, we wanna grab the value out of the store. There's a store get. Okay. And then you could just say space. Store get
[01:17:23] . It's interesting. I like how that's the syntax ends up working. But like, yeah. Okay. Yeah. I understand what you have to do. You have
[01:17:30]  to put the state in this, but it's like inverse. Yeah. Yeah. Yeah. All right. So at this point we had now have, we have like
[01:17:40] , you know, a fully working first name, last name example, like almost everything is just purely within machine. Yeah. Or within the Dom. Uh, the only
[01:17:51]  thing, the only JavaScript we need is the actual function. Very. Yeah. That is, that is that example. That, that's pretty cool. Um, um,
[01:18:01]  so I, I, I got, there's, I mean, I, maybe this is a little too early to ask the question. I don't know where it
[01:18:07]  fits in the demo point, but this keeps on coming up. People are like in the chatter to keep on asking, like how, but like back to what you said at
[01:18:14]  the beginning, how do I get like this? What if the, the HTML already had a name in it? Can we, can we like start the HTML with a name
[01:18:21]  in it and have that wire in? Or is that a little bit more complicated or are we going to get there? Um, uh, so this is, we don't
[01:18:29]  have a lot of primitives for that. Really data is the main primitive. Like I invented, I just, I just wrote adder. Right. Um, here
[01:18:38]  to get the data out. Are you saying that like, if like the outputs add a name or something like that? Yeah. Yeah. Like that kind of stuff. Um
[01:18:48] , or no, you would see, you wouldn't do it that way. So that what you're, this is like reversing. So you're saying like, if
[01:18:54] , if we had this, we can do this. Yeah. Yeah. Yeah. I, I think I'm sort of indirectly asking you about hydration. Um, they
[01:19:03] , this just keeps, I'm like jumping way ahead here, which probably isn't necessary, but it just keeps on coming up on the, in the chat. People like
[01:19:10]  speculating on how this could like wake up with the values already in it. Um, yeah, I can. So we have, we have hello world. So, uh
[01:19:18] , let's do this. So now, but here we're setting the, the, the first name to empty string. So what if we could pass it adder
[01:19:28] ? Um, I'm not sure if this is going to work. Uh, okay. Uh, okay. Adder select. Name equals first. Value. Let's
[01:19:44]  see if this works. All right. So I'm making it so that adder takes two arguments. So I'm just going to say, um, no. So
[01:19:58]  I'm going to say, so this is going to receive, hopefully if this works, this is going to receive an element. So I'm going to say, if
[01:20:08]  args dot length is two. Okay. And name is equal to args dot length. All right. Let's see if that works. Um, this should be
[01:20:49]  last. Hello world. Oh, it did not work. Why didn't that work? Huh? Let's debug it for a second. Why not? Here, people
[01:21:13]  getting what they, what, what they, what they wanted. Right. There is very, it's very possible that there's just a bug here. This code looks okay
[01:21:20] . Let's see. Uh, functions running. The element is the input in this case. And we're getting the value of world. Um, and it's
[01:21:35]  running a second time. Oh, is the first one. Name is name. Uh, I think I've encountered a bug. Okay. Uh, exceptually, yes
[01:21:51] , it should work. Right. Okay. Um, so you're, yeah, we're, we're basically pulling it from the pre-rendered input fields. And
[01:22:06]  then, uh, essentially saying like, that's the source of truth. Cause you were saying like, no, we wouldn't take it from the output. Yeah.
[01:22:14]  Because you wouldn't take it from that. But even if it was rendered in the output, you don't care that it's in the output. What you would do is
[01:22:17]  you'd, you'd grab it from the source of truth, which is the input, which has it rendered into the value. And then you'd run it back through
[01:22:23]  and then it wouldn't really change the output. So you'd be all good. And hence you'd, you'd be hydrated because, um, what, like, would
[01:22:32]  it even need to run anything at first until you actually. We don't even, we don't even need this. Right. Like actually, like we don't even need
[01:22:38]  this cause this, it already is in the DOM. And once we get going. Yeah. Once you type. Yeah, exactly. Yeah. You see. You're already
[01:22:49]  deriving. So yeah. Well, I guess, I guess here's the question. If you make output hello world as well. Like if you, if you,
[01:22:58]  if you put it in, now we're pretending this is server rendered and, or capital W. Yeah. Essentially. This is our thing. If we start, if we
[01:23:08]  refresh. Oh, interesting. Okay. So maybe a little bit. Oh, is this supposed to be value? Oh, maybe. Yeah. I never use this. Do
[01:23:16]  I? I don't either. Uh, I bet that this is messing it up. Right. But then you'd have this interesting. You'd still need to set
[01:23:28]  the rule. And I know we're just, we're just like messing with stuff. People are, people are telling me, Ryan, stop for trying to break beta
[01:23:36]  frameworks. Because initially it's, it's blank. Right. Which is why this was, was blanking it out, I guess on refresh. Yeah. That's
[01:23:41]  going to blank it out because we don't have the original values. So we do actually, we do actually, we do actually have to, to do the thing you
[01:23:48] , you just deleted. Yeah. The thing that I tried that, that did not work. Okay. But I can see. Exceptually it should work. It might
[01:23:55]  just be a bug here. Yeah. I can see, I can see the story here. That's, that's, that's. Yeah. So, uh, one
[01:24:01]  thing that's interesting is like, yeah, you never want to rotate. Yeah. But I can see, I can see the story here. That's, that's,
[01:24:06]  that's. Yeah. So, uh, one thing that's interesting is like, yeah, you never want to rotate it. Yeah. Yeah. Yeah. Yeah. I
[01:24:14]  can see, I can see the story here. Yeah. Yeah. Yeah. So, uh, one thing that's interesting is like, yeah, you never want to rotate
[01:24:22]  it. Right. Like that's impossible. Right. Cause the, the algorithm that produces this is a one way JavaScript function essentially. Right. So there, there is
[01:24:32]  no reversing this. You can never do that. Yeah. So only thing you can do is like, have the data like in the Dom. So that might mean like
[01:24:41] , sometimes, you know, if you have derived values, like it's possible that you don't have the source values anywhere in your Dom. Yeah. But you can
[01:24:50]  use data attributes for that. Yeah. In this case, I'm using, you know, just a regular attribute that already, you know, has purpose. Uh, but
[01:24:58]  you know, I, I don't think there's anything wrong with like using data attributes and that kind of thing to like, you know, add source values into the Dom
[01:25:06] . I don't know if you ever saw the prism compiler. Um, uh, Ben, uh, collide a wave. He's the guy who made that as
[01:25:14]  no announcement last week. Yeah. Two, two years ago when he was 19, he actually made a compiler that was built to try and reverse the data out of the HTML
[01:25:23] . Oh, he's kind of bugged me because I'm like, this is an impossible task. Essentially. You can't reverse it all. And he's like
[01:25:29] , it's like, no, it's fine. Like I know what I don't put in the Dom so I can actually add attributes. So he actually like looks
[01:25:35]  at what he does, serializes the attributes for the things that he can't drive from the Dom and then pull the rest out of the Dom. So he actually made a
[01:25:42]  compiler that, that did it. It was really cool. It was, it was very, I'd say alpha ish, but, um, yeah, I mean,
[01:25:48]  it's completely reasonable. Like you, you need the data regardless. There's nothing you can do about that. Um, well, sometimes you don't need the data.
[01:25:56]  So let me show you another word example. Uh, this is one of my favorite parts about for a set. Um, so let's just do a new thing.
[01:26:06]  No, sorry. It's a question asking. No, no, no. This, this, this, I think part of the whole point of this framework is it's
[01:26:12]  actually good, very good potentially for, for, uh, doing SSR because you can write the backend and essentially anything you could, I don't know, rails, PHP
[01:26:20] , whatever you want. And then you have the HTML, as long as you encode the right information in the HTML. Um, of course that can basically just wake up
[01:26:29]  with it. It doesn't need to like run a bunch of components or anything. It just literally needs to like find the elements it needs. It just like, it
[01:26:36]  basically runs a sheet, which is like essentially like finding all the references in the DOM that matters. Done. Um, right. Uh, all right. Let me, let
[01:26:43]  me show you another example. Like, so let's just do, this is just to show off like one, one feature. Um, I'm gonna do input type
[01:26:53]  equals, uh, check. Yeah. Um, uh, oh, check box. Mine doesn't work for me. Uh, I'm gonna stuff a lot here.
[01:27:09]  Okay. So what I'm gonna do is I, I'm gonna have this toggle thing. And let's say, um, for Nate, when, when toggle is true
[01:27:23] , it's going to change the text to Matthew. Okay. Let's just do input event change. We'll say this.toggle is equal to this.
[01:27:39] toggle. Um, and then we're also going to say, this is gonna sort of just name. We're gonna, so there's a, there's
[01:27:57]  a property called class toggle. This, this is a way to toggle classes on and off. Nice. Okay. So we're gonna, we're gonna toggle the class toggle
[01:28:08] . Uh, whenever toggle is true. Toggle, toggle, toggle, toggle. Um, all right. So, so whenever, so whenever we click this,
[01:28:22]  do not, not do it. This, or do I have wrong here? I have something wrong. I really need to like, it's interesting. The casc
[01:28:44] ading is not how I think I'm not typically doing CSS work. I'm just like wiring it together in my head, like seeing the name and the toggle attach.
[01:28:53]  Like it's, it's very interesting. Yeah. Yeah. Let's see. I'm, I'm probably doing something wrong here. Uh, let's just debug this
[01:29:04]  real quick too. I'm saying console log. The best way to debug. It works usually. Um, all right, cool. Let's just see what happens.
[01:29:14]  Shouldn't change be a function. That, that was one of the comments. Um, from the chat. This is a, oh yeah, you're right. Yeah.
[01:29:19]  Should the event list can be a function. This is why chat's great for live coding. Yeah. So this is, this is a downside of, of, uh
[01:29:34] , of course that, of the hat of DSLs in general, is that you kind of debugging stuff goes out the window. So what's cool about this?
[01:29:44]  Um, so you notice like it just, you know, it's just, it's just adding, it's just overwriting the text whenever toggle is true. But like
[01:29:53] , I'm not, there is no, there is no, Ryan does not exist in my sheet. Right? Like that's not, that's not a variable.
[01:30:03]  And I'm also, I'm not pulling that out. I'm not, I'm not grabbing Ryan from the Dom and then like setting text. Like that's one cool
[01:30:10]  thing about CSS is that like selectors override other selectors. Uh, and so when there are no selectors, you kind of get, you kind of get, um
[01:30:21] , you get the default value, which in corsets default value for most things is like whatever the original value was when we bound to it. So when we bind to
[01:30:30]  the sheet, we already had Ryan in the Dom. Right. So corset remembers the, the initial value until it can always go back to that. Um, so that
[01:30:40] 's like, that is, that is like the essence of like, you don't have to hydrate because the data is already there. And like, we just restore the
[01:30:48]  data. So everything that we do is like additive, you know, it's just like, it's, it's taking something that didn't exist in, in layering it
[01:30:55]  on top. Yeah, no, no, exactly. Like you start seeing the picture here because this is like, in a sense, you're, you're doing a
[01:31:03]  super, super fine-grained partial hydration because like the Dom has a state this like, you know, people watch quick on my stream. Like obviously quick is doing a
[01:31:12]  bunch of much more complicated things. much more complicated things. But in a sense, um, I was talking earlier about how you just want to generate the jQuery.
[01:31:18]  Like you, you're, you're, you basically go like, look, this is in the Dom. I know I don't need to do anything with JavaScript. So
[01:31:23]  I don't need anything extra. I can just leave it in the Dom. That's, that's where it is. And this just works. Yeah. So,
[01:31:30]  uh, do you want to, you want, you want to get into like how this stuff is actually working? Do you want to talk about that? Or would you rather
[01:31:39] , um, talk about something else? Okay. Yeah. We have a couple options here because we can look at mechanically how this works. Um, we can also
[01:31:48] , I, I think, uh, look, can we pull up, you, you have a more single page app type example. Like the, you have the to do
[01:31:56]  MVC example. Can we, I, I think we just, I, I think, I think we could talk a bit more about how it works, but I think
[01:32:03]  what people have been asking for is they just want to see like one example of something just a little bit more complicated to kind of like. Okay. Let's, let
[01:32:11] 's, let's, let's, let's convince them. Um, but, uh, yeah, so, so, you know, corset is obviously like, it
[01:32:20] 's, it's intended for progressive enhancement. So what you do MVC is, is not, so corset can do spas as well. Um, I would say
[01:32:30]  that the only thing, the only thing like, you know, removing like performance issues that I have right now and stuff like that, like conceptually, the only thing that
[01:32:41]  doesn't really fit super well, in my opinion with corset is like a, a multi-page spa where like, where you actually SSR it. Cause the
[01:32:50] , the only thing, the only thing, um, that the only downside of corset is that it doesn't run in the server, you know, like you have to
[01:32:59] , you have to create the HTML before corset comes in. Right. So if you ask, if you have a multi-page SSR that, then like
[01:33:10]  you already have to do that work on the server. And like, now you're going to also have to have those templates in your HTML as well. so that cors
[01:33:19] et can use them. Right. Right. So then it becomes, then it becomes more of a, you're duplicating work. Right. It's the double, the
[01:33:28]  double app concern. Okay. So, okay. Yeah. But I mean, I still want to see this and actually, can we blow up the text a little bit on
[01:33:35]  this one? Cause the, I mean, obviously this isn't the primary use case, but I, I always like, like this, I think this should be pretty
[01:33:42]  illustrative of like what you can do here. Cause we, yeah, we have a working to do app. Um, I see the count updating. Yeah. Count updates
[01:33:49] , clear, complete that, that goes away. Yeah. Um, yeah, add stuff. And actually can, can we share the link in chat? Um, for,
[01:33:59]  for this in case people want to play with it themselves, we can just. Yeah. Do we go extreme yard? Yeah. Yeah. Close your eyes. Yeah. I
[01:34:08]  could also share it. Sorry. I just drop it. Yeah. There you go. Uh, okay. Yeah. All right. So how do I explain how this
[01:34:18]  works? I'm not even sure where to start. Um, I just, I created this pretty quickly. Uh, okay. So we do have each here, right?
[01:34:28]  Yeah. Um, so this filtered is a list. In this case, it's, it's a, it's a getter. So this is like our,
[01:34:39]  our, our, our list of to dues. This is our state of to dues. Yeah. Uh, filter filters them, uh, depending on if we have a filter
[01:34:46]  set. Yeah. So if we go to this, um, you can do that. Uh, so each, each, like, so, uh, CSS has shorth
[01:34:57] and syntax and longhand syntax. So in, so does core set. So you can also say each stop filtered. Right. You can do that. This is like
[01:35:07] , these two are the same thing. Um, and you'll see that often in core set. And it's actually, it's actually kind of, uh, it
[01:35:20] 's, it's really cool. Um, because like you've in JavaScript to do conditionals, like you in JSX, like you do terrain areas. Um, some
[01:35:32]  stuff like must mustache and handlebars have like actual if statements. Yeah. Uh, in core set, like selector is really your conditional, like either a selector
[01:35:42]  matches or it doesn't. So like one thing you can do, this is kind of unrelated to dues, but you can say adder, um, who are something like
[01:35:52]  that. And that, that this sets the foo attribute. Yeah. Uh, and there's a third act, there's a third thing, which is the toggle.
[01:36:01]  Uh, so if you want to remove the attribute and toggle it to false, if you want to show the attribute, you toggle it to true. Uh, so one
[01:36:07]  thing that you can do, again, this is all because of CSS is that you can have like a default value in a selector and then you can put your conditionals
[01:36:16]  in another selector. So you say to do list, um, the bar, I don't know, then you can say adder toggle to false. And that will
[01:36:29]  remove this attribute, uh, whenever the selector matches. So you can kind of control your attributes using multiple selectors. Right. Okay. Yeah, no, that
[01:36:40]  makes sense. It's interesting. Cause the conditionals are actually built in from matching, um, loops. You have a, yeah. And loops, you have a special
[01:36:50]  syntax for handling properties. Yeah. Each items, each template. So template is a, just, it's a template element. You could, this could be like,
[01:37:00]  you could create a template element in JavaScript and pass it here as well. Uh, there's a built-in function called select that you can give it a. Okay.
[01:37:10]  So you're saying it's in the HTML. If we look at the HTML, there's a template element in here. Oh, interesting. Yeah. So this is
[01:37:16]  like, what's cool about this. As you said, like it is, there is like the, it's, it's like the, the server app, like literally
[01:37:27]  just prepares everything that client's going to need. Like it's like, okay, here's all the templates you have. Um, here's, yeah, I can
[01:37:33]  see what you, what you're getting at. This is, this, this has a lot of low level control. Um, yeah. So the, that's why I
[01:37:40]  say like, if you're doing like an SSR multi-page app, you would have to, you'd have to, you'd have to render on the server,
[01:37:47]  but then you also would need to like render a bunch of templates for the client for like, so that when you switch page. So basically the, the, I mean
[01:37:57] , you already know it's, it's the, it's the, it's the multi-app issue that becomes a problem. Um, if you actually are recreating
[01:38:06]  lots of DOM all the time, then there becomes a lot of duplication or there can become duplication. Right. Okay. But for stuff like this, it's just
[01:38:15] , you know, it's just a little template. And okay. Let's, let's just, I just want to kind of like holistically look at this again.
[01:38:22]  Let's scroll to the top and just run down for just a second. Cause I just, just so I can kind of make sense. So it's this whole thing
[01:38:29]  is a single sheet. Um, the whole app. Yeah. Um, no, there's also, there's also a behavior. Uh, we can get into that.
[01:38:37]  Okay. Yeah. One sec. Yeah. We'll get that one sec. Okay. So we start our sheet, we declare our, our variables. And if anyone
[01:38:46] 's written to do MVC, this is very familiar. Um, this is how we, these are all like computed. It's essentially like how many are completed, how
[01:38:54]  many uncompleted or remaining. And then you have, um, you're, then you're declaring your top input. You're pushing the new to do's on.
[01:39:04]  Um, let's scroll a little bit more and then your cave main footer. You're showing whether the toggle, the, like the bottom bar based on if there
[01:39:14] 's any to do's there. Um, and then we have toggle all to do list each, which takes the filter. I think I didn't implement this. I
[01:39:23]  don't know what this feature is. I didn't implement this. I put a placeholder comment for me to do. It's if, if, if you click the
[01:39:29]  arrow, it should check all the boxes. Yeah. It's that one. Yeah. Yeah. And then, yeah, it's funny. I'm very familiar with to
[01:39:37]  do MVC. I've built it in multiple frameworks too. I don't only, my, my, my only hacker news is not my only skill set. Um,
[01:39:45]  I also have some to do MVC skills. Um, and then what do we got here? And then, okay, we're going to talk about behavior in a
[01:39:53]  second. And so this is, so like, uh, this is our loop. Yeah. And to do is, is one is, is this L I. So there
[01:40:04] 's a special functions with inside the loop item and index. So if I also say index. And this, this is going to give me my, my numeral index inside
[01:40:15]  of the loop. And item is the item in the loop. Does that make sense? Like item is, is one of these objects. This is an item. This
[01:40:27]  is an item. Right. Index is the, is the numeral index. So this is like a special function that, that like, it allows us to have,
[01:40:34]  to get context. Like where we are within a list within each loop. Yeah. Yeah. Yeah. Yeah. No. Okay. Um, so yeah, I mean,
[01:40:47]  it's very common when you make a to do list that each iteration, each item ends up getting its own components to update separately. I'm trying to. Yeah.
[01:40:56]  I, yeah. So how does, okay. This is how we're defining the items in the index. So this is how the loop variables get injected into scope,
[01:41:04]  so to speak. Um, yeah. Yeah. And then sort of behaviors. So you want to get into that? I think, I think we're, we're
[01:41:13]  at that point now, aren't we? Because we've, we've passed down, we, we've got the items, we've got the loop variables injected in.
[01:41:21]  So we have the event bindings being passed into this to do and we have whatever behavior is. Yeah. So basically behavior, you can think of behavior like a component
[01:41:32] . Um, like I said before, like all the JavaScript parts of Gorset are like kind of half baked and behaviors are, are one of those things. Um,
[01:41:41]  so a behavior, it's kind of like a component, um, except, you know, it doesn't create any Dom or it doesn't, it can't create
[01:41:50]  Dom, but it doesn't, you know, it, it just basically allows you to have a scope within your document. Okay. Um, so you do it mostly.
[01:42:00]  The main reason to do that is to have localized state. Um, so I'm able to, in this case, I actually don't have any like localized state. I
[01:42:07] 'm just receiving the item. Um, let me show that again. Okay. So I don't know if you're, if you, if you like look at the H
[01:42:15] oudini APIs at all. Uh, there is like a way to register paint functions. Okay. Yeah. I have not. Uh, so this is, this
[01:42:25]  is based on that idea kind of. So it's kind of funky looking if you're not familiar, but with like, with, with, with register paint, you can
[01:42:31]  pass it variables. Right. Uh, basically you, you, you say you declare a list of variables that you depend on. So this behavior says it depends on the
[01:42:42]  item variable. Yeah. Um, and it's basically a way to pass props to, to a behavior. Uh, but from there, this is just like that, that
[01:42:51]  app, that other, uh, class that we were looking at before. So this. It has its own like update loop. Right. That's what I'm saying.
[01:42:59]  So we're actually, that's what I mean. It's kind of like a, I was mentioning to do apps very common for the to do item to have its own
[01:43:03]  component. this is kind of similar ish, except it doesn't do rendering, which is why you don't call it a component because it doesn't actually make the
[01:43:10]  HTML. Um, someone's asking, why do you need scope if you already have CSS scope? I guess that's a joke. Um, but I, I don't
[01:43:17]  know how serious I'm going to take the question. Um, yeah, I mean, I think to me, like to me, the ideal is like everything gets put into
[01:43:28]  the sheet. So, I mean, I'm not even sure like if we really need behaviors. Uh, because you know, we, like we showed stores, uh
[01:43:36] , before, so you can kind of have localized state within the sheet anyways, just by creating a store. Like I, I could create a store on that, uh,
[01:43:46]  within this main sheet and kind of do the same thing. Um, yeah, you know, it's just, it's just another way of doing it. Uh, yeah
[01:43:53] , I'm kind of, I'm cheating here a little bit. Uh, what's happening is so there, so a, in core set, a behavior. Uh
[01:44:03] , doesn't affect its parent unless, unless either you trigger an event or you modify a store. So like, uh, for example, uh, a parent behavior could pass
[01:44:13]  in a store to its child and the child could manipulate that store. Um, that's one way to pass data up. The other way is, is event. Uh
[01:44:21] , so I, I, I'm using events here. Uh, so that's why there's a couple of like custom events. Right. Okay. Whenever you,
[01:44:30]  you toggle, it triggers a change event. Um, and this listens to a change event. I, I, I guess we're not doing anything. Yeah. I guess
[01:44:39]  where I'm, I'm thinking here is you're, you're, I mean, there's convenience in, in being able to break things apart and a sense, like
[01:44:45]  these aren't components, but the components like, like essentially like for breaking apart and you're saying like, it doesn't really matter. You could have just inline
[01:44:51]  it if you really wanted to. Like, this is just like, uh, it's convenience for breaking apart. Does, does this split have any kind of other runtime implications
[01:45:00] ? Um, I'm, I'm just kind of curious. Yeah. Well, it, there is, I mean, there is the implication in that, like, um
[01:45:11] , if you were to have localized state within this behavior and you were listening to events and you were like modifying like local variables. Doesn't trigger the parent. Right.
[01:45:22]  Doesn't trigger the parent. Yes. Okay. Okay. That makes sense. It's very much like a component. Yeah. Yeah. Okay. Yeah. Okay. Yeah
[01:45:33] . So it's, it's still actually, it's funny cause it is actually, the key thing is the separation between the, the view and the controller view model or
[01:45:44]  whatever you want to call it. Like that's the key part here. The, the actual execution in a sense is actually still very similar to component, uh, component
[01:45:56]  architecture, like, uh, like, uh, Svelte or, or, or react. They actually have basically the same sort of rules. Um, yeah. Okay
[01:46:03] . That's okay. That's, that's interesting. Um, yeah. Yeah. Um, yeah. Okay. Um, yeah. Okay. Yeah. Okay
[01:46:13] . Okay. Yeah. Okay. Okay. Yeah. Okay. Okay. Okay. Yeah. Okay. Okay. Okay. That, that makes sense to me. I don
[01:46:25] 't know if, if we've lost the audience at some point here or the chat, but I I'm following along still this, this, this, this, this
[01:46:31] , this, this makes sense to me. Um, I wanted to show this example cause everyone in chat kept on going like, Oh, but can you do a for loop
[01:46:38] ? Oh, but can you do this stuff? Can you do this stuff? So the answer to all these questions is yes. Like, um, yeah, you could
[01:46:46] , because of how, like, first of all, there's first class helpers here, like things like each and because of how low level you are, you can literally
[01:46:56]  just kind of like make it do what you want to do. Some people talking like about making comparisons to quick because you know, quick just as the event handlers and doesn
[01:47:03] 't do anything else. And it's like, well, yeah, I mean, uh, you can do that with corset because literally you just have the Dom and
[01:47:09]  you just be like, yes, put the event handler here. Like that's, that's, that's all you're doing. I often, we talked about this earlier
[01:47:16]  in the stream where I was like, quick wants you to be able to write react and get like jQuery out. And this is, this is, this is kind of
[01:47:25] , or this is kind of jQuery ish. Someone was actually asking a bit earlier. They're like, they're kind of wondering, um, it's like a
[01:47:33]  declarative jQuery. Like that's, that's very much intentional. They're, they're, they're like trying to like step kind of make sense in their
[01:47:39]  mind. They're like, Oh, well, how would you like, why would this be the kind of like the approach you take over, say Alpine, which is
[01:47:45]  like the old school, like that, like knockout or view petite or whatever, where you, where you put the bindings in the Dom, um, or something like
[01:47:54] , what was the other example? Like, I guess stimulus, stimulus, stimulus still has bindings of the Dom. I think, I think that's actually, I
[01:48:03] 'm trying to see if I can find the question here because almost that's, I think that's the key thing. Almost all the other ones require you to put something in
[01:48:10]  the Dom. That's actually the difference here. jQuery didn't require you to put in the Dom, but it wasn't declarative. This is actually declarative
[01:48:18]  without requiring you, like you can, you leverage the Dom for state if you want to, but that's not like, you know, like. Yeah. It's like
[01:48:28] , it's the bridge. It's a bridge between the Dom and JavaScript is how I think about it. Yeah. Yeah. Okay. So yeah, that, that
[01:48:36] , that, that makes, that makes sense to me. So what we, what we've been doing here is basically showing the, the range of capability, but I guess
[01:48:43]  it's not necessarily how one would typically use, use core set. I think, I think when I think core set, I actually, I do actually think about SS
[01:48:55] R and, and hydration, but more in like the, like what's smaller than an island kind of perspective. Do you think that's fair or? I'm not sure
[01:49:06]  I understand what you mean by that, but smaller than an island. Yeah. Like, like, like, let's say you're using Astro and then you make,
[01:49:19]  you write some components and react. Like your islands only going to get so small is, is what I'm getting at. And I'm saying like, like, like
[01:49:27]  I was like, when I think about this, I'm, I'm thinking about like what's smaller than an island. That's, that's kind of like, like
[01:49:33] , but I guess maybe that's still me coming from such a single page app kind of framework, mental model. How did like, how does this fit for you? Like
[01:49:43]  where, where, where, where do you kind of like, we talked about where you, you're very like humbleness that you keep on telling about, oh
[01:49:49] , it's, it's not good here. And we have this issue here. Where is Corset really good? I mean today, or you just mean like concept
[01:49:57] ually, like, yes, aspirationally. Yeah. Yeah. I mean, I, I would build a spa with it as crazy as that sounds. Um, cause
[01:50:05]  I, I do think that the syntax is very uniquely adept for dom manipulation. I think, you know, I think CSS have, has evolved. Like all these
[01:50:16]  features that Corset takes advantage of exist in CSS. Cause CSS is actually attempting to do a very similar thing. Um, it's just not trying to do it by
[01:50:25]  manipulating the dom. So, uh, I think it actually is very well suited for a single page app. Um, I mean, today it's very suited for like
[01:50:35] , I want to like create a dark mode toggle on my blog, like small things like that. You can use it very well. Um, I, I, I
[01:50:47]  conceptually, I think it could be used almost, almost everywhere. Um, you know, performance. Like, I don't know if I could ever like catch up with
[01:50:56] , with, with you and quick on performance and like fine grain. Cause like, this is, you know, all running in the browser. It's all, this is
[01:51:03]  basically an interpreter. You can think about it. It's like a CSS interpreter. Right. So, um, I think, I think it will compete pretty well performance wise
[01:51:11]  eventually. Um, I don't think it's, like I said, it's like, it's not going to compete with you all. Uh, but I think
[01:51:16]  it will be good enough for a lot of animations and stuff like that. Yeah. Like I said, the only thing that really, I don't think it's a good
[01:51:22]  fit is, is if you really are doing something that has to be SSR, it has to be like a spa. If it has to be both those things, then
[01:51:30]  you're going to wind up duplicating work. Right. That's kind of the main disadvantage is that, yeah, is that it assumes that you've already rendered.
[01:51:39]  But it assumes either you've already rendered or you, or you're never going to render. Right. Right. Cause if, if it was a, just like an M
[01:51:46] PA where you're doing most of the heavy lifting on the server, this works pretty well too. I, the, the duplication you're talking about is the code
[01:51:54]  that's needed to generate the server HTML views and the templates that are needed to generate the, the client navigated views. And, but if, if you're like
[01:52:04] , if you're heavily server, this is good. And if you're heavily client, this is good. Um, so, okay. Yeah. Yeah, exactly. Yeah
[01:52:11] . So that's kind of like the, the middle ground there where it becomes a little bit, uh, less so. So, um, just going to ask a question
[01:52:18]  here before we got, I think we have one more example, I think. Um, but I want to ask a question before we go, go there. I,
[01:52:25]  which was like, just trying to like, um, and this is more into like how you went about this. How did you, how did you come up with this
[01:52:34] ? Like, uh, like, like this is kind of craziness. And obviously you, you understand the rules of modern CSS a lot better than I do. Cause,
[01:52:44]  um, but like, like what, how did you figure out that this could be a thing? Like, like you were like, like, yeah, I just, I
[01:52:53] 'm just interested. Like, uh, I mean, I, I don't, I don't know how to answer that really. But by the way, I,
[01:53:01]  I don't really know, like I've learned so much about CSS from building this. Um, that I just did not know at all. Like, like variables are like
[01:53:10]  kind of these insane thing. Like a variable is really almost like a macro. When you use a VAR, like it, like variables expand at a different time than like
[01:53:22]  when the code actually runs. So like variables can have multiple values within it. So you can do things like, like, um, it's almost like a spread operator of
[01:53:29]  VAR. Like I didn't know that at the beginning. Uh, but anyways, like, how did I come up with this? Like I said, like I
[01:53:36]  said earlier, like I really, I, I got to the point where I thought to solve this problem. Like it all comes from me for the, for, from
[01:53:44] , uh, the desire to decouple number one, and then the desire to like have the dom or the HTML be the source of truth. And so I came
[01:53:52]  to a belief and like, maybe, maybe like quick and you and other people like, like cross that bridge. But I just became the belief that like there, you couldn
[01:54:01] 't get there with, with templates because templates force you to use them on the server, which means you've now coupled the client in the server. So, you know
[01:54:10] , like, I don't know one thing I've learned over time is just like, when you think about constraints, like, I feel like we're so like, we
[01:54:20] 're so used to the way things work that we don't, we can't envision another way. Like me just as much as everybody else. Uh, but if you
[01:54:28]  like, can like force yourself to like whatever constraints you think exist, just, just remove them. Like, and don't worry about the implications. Just like pretend like they
[01:54:39]  don't exist. Just force yourself to pretend like exist. They don't exist. Then you kind of, kind of, you're forced to think of something different. Um
[01:54:46] , yeah. So that's basically it. I mean, I started to think like, how else can you do this without having templates? Uh, was it, was
[01:54:55]  it hard, was it hard to, was it hard to like implement? Cause you're like designing a whole DSL. So, I mean, this isn't quite,
[01:55:04]  I mean, it's kind of like a compiler, but like, not like, you know what I mean? Like it's a runtime. I'm gathering it's like
[01:55:09]  a runtime mechanism. Yeah. It's interpreter. So like, I don't know. Did you want to talk to that for a few minutes? I mean, we're
[01:55:18] , we're, we're, you know, like I wouldn't, I wouldn't mind seeing a little bit or at least a really high level. Just so I
[01:55:23]  can understand what the project is. Cause this is, this is so, um, foreign, um, to me. So like. Yeah. Yeah. I've written
[01:55:33]  lots of like DOM libraries. I've written several of them. Like I, I understand how they work. Uh, so I, I came at it from that perspective,
[01:55:43]  like knowing how, you know, how, how templating engines work and stuff like that. So like when I built it, I very much came from that perspective.
[01:55:53]  So I built it kind of like that. Right. Um, and you, you know, I further got into it, the more I realized like kind of the differences and
[01:56:01] , um, you know, just how you had to do things differently. Like the, the most complicated part of corset is like just resolving which, um, which
[01:56:12] , uh, which declaration to use. Cause it has to like, you have to, you start from an element and you have in number of declarations, which potentially match
[01:56:21] . And so you got to find the one that's the right one. Right. So you kind of have to walk. And so there's like all these performance,
[01:56:28]  like the, the root problem with, with corsets performance at the moment is that it doesn't know about selectors. Like basically it parses, parses a sheet
[01:56:38] . It keeps these selectors just as a string to do query selector on. Um, but it doesn't, it doesn't know the meaning of them, which
[01:56:46]  means that if you do something like class toggle, uh, toggle all false, it's like, well, it's, it's not, let's say true. Let
[01:56:59] 's pretend like this did not match. Um, it doesn't know that this potentially matches again. So in order to actually figure out if there are any new elements to
[01:57:12] , to target, it has to continually call query selector all basically on every update. Right. It has to like for, for every rule, it's tries to find
[01:57:21]  a match, tries to find a match. Um, and that has other performance implications as well, where, um, for like vars have the same issue, like vars are
[01:57:33]  affected by other selectors. So it was like a, there's like a, there's this like dependency graph that exists within a sheet, um, where there's
[01:57:42]  like explicit dependencies, which is like this property. Let's go to like one of these, this property depends on the value of this, right? Yeah. This property depends
[01:57:54]  on this variable and this function call. And so like, you know, everything's kind of like acute inside core set. Um, but vars are, there's like
[01:58:05]  this implicit dependency where this actually depends on the variable here, but there also could be another variable somewhere else defined in the tree. And it depends on that as well.
[01:58:16]  So anytime a selector, anytime like a class changes or something like that, there's potential for this variable value to change. Right. So it, it halts.
[01:58:27]  So we constantly, we have to call closest to see if we can find the closest element, um, over and over again. Um, I, I started talking about
[01:58:36]  performance. I don't, I don't know how I know, but it is, it is interesting when I'm looking at this and you mentioned like all these, I
[01:58:43]  mean, obviously there's a ton of runtime stuff because of the rules of CSS and cascading, which is causing all this. I'm also looking at the DS
[01:58:49] L and the sheet DSL and part of me goes, I know you're like, always been a big fan of DSLs and stuff. Like, have you,
[01:58:53]  did you ever think of just like make .core set file for .sheet essentially, like whatever that is. And like, would that work? I noticed there's code
[01:59:01]  outside of the, of it. I wonder if like that would be too restrictive to get the JavaScript code in, but I just like, sometimes it's the silliest stuff
[01:59:09]  like the syntax highlighting and the, like the thing that, that, I mean, tons of work. I, I had to stream all about how much work it is
[01:59:18]  to, to do a language thing like that, but I just, it's just kind of. Yeah. Well, um, yeah. So like core sets, not the
[01:59:26]  first project that's, that's taken this approach. Like I'm not aware of any other like kind of modern libraries that do this, but there are some older libraries where
[01:59:37]  people have tried this sort of thing. And I know of one, I can't remember the name of it, that actually did put stuff in a separate sheet. Uh
[01:59:45] , but like that was before tag template literals. Um, so I don't know how like you inject, like how do you, if this was in a different file
[01:59:54] , like how would you inject stuff in JavaScript? Like I've definitely thought about it. Um, but yeah, I mean, you couldn't do it today because like syntax
[02:00:02]  highlighting is not going to work. Yeah. With like variable, like you're going to have actual injections and stuff. Uh, yeah. Tooling is a big problem
[02:00:11] , but I mean, that's, that's a, like, I think that stuff comes along with, with popularity is like, if, if, if course that ever
[02:00:20]  becomes popular, then like people will naturally build, you know, DS code highlighting into it and stuff like that. Yeah, definitely. It was, I mean, just
[02:00:30]  kind of just thinking of elements and places that take it, like looking, looking at the example and kind of understanding it. Cause like it's the city, this,
[02:00:38]  this, this, I looked at like the landing page and I was like, okay, yeah, CSSF. But like the, the, the way the cascading
[02:00:45]  works is actually like something that's like, oh, okay, that's interesting. Yeah. But it's also very, very powerful. Um, yeah, it's
[02:00:53]  kind of like, like CSS itself. Yeah. It's like, it's like, it's, it's brought up angular directives. I never used angular directives
[02:01:00] . So I'm only like vaguely aware, but that's kind of what, that's kind of the power of corset is like each selector is, is kind
[02:01:08]  of like a directive. And you can take like one value, like I showed that adder example where you just want to manipulate one attribute and you can kind of divide
[02:01:17]  it between multiple selectors. And you can use, um, you know, turning those selectors on and off, uh, you know, through booleans or through
[02:01:26]  whatever, like you can kind of manipulate different parts with multiple selectors. It's kind of an interesting thing. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah
[02:01:37] . No, no, it's super powerful. Okay. What I want to do now is because, uh, I think, I think we're going to go to,
[02:01:42]  uh, one more example, because this wouldn't be one of my streams if we didn't actually do hacker news. Um, yeah, you guys, you guys, you
[02:01:49]  guys all knew that this was coming and actually, I'm going to, I'm going to, I'm going to, I'm going to steal the screen for a second
[02:01:54]  because I don't get me wrong. Matthew created this. I just, I just, I just, I just helped me internalize it myself. Cause again, this
[02:02:02]  is a demo that I am very, very familiar with. So I'm just going to, I mean, we're going to talk through this for a minute. And this
[02:02:09]  one, this one might actually be really simple, but I think, I think it kind of also show cases. Again, we showed this, how of course that can be
[02:02:16]  used to do client rendering. Well, what else can we do with it? Right. And the other one who's here. So I've got our, I got,
[02:02:23]  I got our hacker news example, and this is actually, I've got our hacker news example. And this is actually, I believe a fork of the solid hacker news
[02:02:29]  astro, like solid astro hacker news example. Um, and let's see here. Okay. So this is all the same kind of stuff. And then I
[02:02:41] 'm just going to like looking here. Um, we have, let's see scripts. Okay. We're going to look at that in a minute. Pages looks the
[02:02:48]  same. This is, this is the same astro setup that we've done on previous streams where we have the stories page, the specific story page and the user page.
[02:02:59]  Um, and then we have the lib where my trusty API lives. And then the components folder. The difference here is they're all astro files this time.
[02:03:10]  Um, because obviously comments and layout is just all astro, astro, astro. Astro, astro, astro. The big difference is toggle was
[02:03:19] , that's where we do our fancy partial hydration, recursive partial hydration trick, um, with all the islands frameworks. But in this case, with, um, cors
[02:03:28] et, it is still just an astro file. Um, so like, I'm, I'm looking here and it, it's funny. Yeah. Cause this
[02:03:38]  is, this is one of the simplest ones. Cause if you look in here, I've got, I'm doing like crazy JSX stuff. This is, this is
[02:03:42]  the demo where I, I bug all the astro people who think that they're like, people like, oh no, astro's like this. I'm like,
[02:03:49]  no astro's JSX. Um, cause this, this is very complicated, like much more, like there's a lot of logic and stuff on the server rendering
[02:03:57]  part. And I, I, I, I, my prediction was one once, uh, guys moved from static generation to SSR, you'd see a lot more complicated
[02:04:04]  logic on the server rendering. Maybe I'm, I'm not completely on it, but like, it's interesting. Cause like we're doing all this stuff and then we
[02:04:12]  get to the toggle and now the toggle is actually the most static piece on it. because this is the, this has got to be the piece where the magic happens because
[02:04:19]  where we're going to add our interactivity. And I actually, I'm going to pop open the app here for a second. Um, I think, uh, uh
[02:04:27] , I mean, I've got, I've got tons of them. Actually, I'm just gonna use a solid one for a second now, but we'll pull the
[02:04:32]  other one later. Anyone who's seen this demo, um, from me before us, we go in here, we got some comments and we go to this page, right
[02:04:40] ? And in this page, you can collapse the comments. This is the only interactivity on, on this page, right? Um, but it's recursive.
[02:04:49]  Um, the reason that I, well, that recursiveness won't matter, I guess, to Corset particularly, but in JavaScript frameworks that are declarative, you
[02:04:58]  have to notice that the comments in the comment, that's in the comment, that's in the comment. And if you're thinking like really naively, you're like
[02:05:02] , well, if this stayed up here, how do you save yourself from like sending all this data? Well, you can do some cool stuff with islands and I've
[02:05:09]  showed that in previous streams. But in Corset, this is more like a vanilla JS kind of approach, right? Because in a sense, or jQuery where this
[02:05:17]  is now, the toggle is now just static HTML. Um, we probably could even collapse it into our comment, uh, Astro file if we really wanted to.
[02:05:26]  It probably doesn't do a ton of anything special, but I'm gathering the, our new addition is the scripts, right? This is, this is, this is,
[02:05:35]  so if, if, if you've all seen the hacker news examples previously, I usually do a bunch of work in the framework and we do all that. But in
[02:05:41]  this case, it's all just like the, the, the core Astro projects and basically HTML and then we have our sheet, right? So what are we looking at
[02:05:54]  here? Um, toggler, this is actually, this is a little tricky because of the, uh, because of the recursion. Uh, remember like Cors
[02:06:03] et, uh, so you, you buy like here, I'm binding to the document. So a selector selects everything, right? Like there's no, like
[02:06:12]  in a component you're limited to the part that you're building. Uh, but this is targeting the full document. So we're getting with that one selector, we
[02:06:23] 're getting all of those on the inside. Yeah. I wanted to see if I could show it easier. Um, cause maybe, uh, it's probably less good
[02:06:33]  on the solid examples cause the islands are in the middle. Um, let's see if I can actually open the Astro core set example directly. Um, flame on the
[02:06:46] , yeah. Okay. Cool. Okay. Um, yeah. If I open this one directly and I kind of go partially down the page, you're going to see like
[02:06:56] , there's like, where are we? We do comment, comment, comment, toggler, and then toggler again. And if we keep on going, togg
[02:07:06] ler again. It's all nested. Yeah, yeah. So you see the comments there, the data core set, data attributes? Yeah. The data attributes. That
[02:07:18] 's kind of where our state, that's how variables and stuff work, is that these exist, and then we use a selector to define the right one. Yeah
[02:07:29] , this is pretty minimal on extra HTML, though. Like, you know, there's no, like, astro fragments or anything going on here. We're literally just
[02:07:35]  adding a couple attributes and going, like, our state, I guess you need to know that you pass the open through. That's the key, right? Yeah. Because
[02:07:42] , okay, cool. Okay, so following this, we have store root is app, store set app, property open, true. So I've been paying attention. And
[02:07:53]  then the open variable is a get from the store at app open. Okay. And then our toggle just literally calls, what is this? So class toggle, like,
[02:08:08]  you know, the API class list dot or whatever. Like, yeah, it sets and removes the class. Right. Right, based on the, whether this is true or
[02:08:20]  false. That's boolean value. Exactly. So boolean, open, and then A, we add the click handler, which sets the store, just
[02:08:28]  toggles it, not. And then we bind it to the store by passing through the event. It's funny. I, I, I, yeah, we were
[02:08:35]  paying attention here. And when it's not open, change the text. Yeah. So this is one of the, this is, this is kind of like the, the
[02:08:42]  Matthew Ryan example again, where you didn't actually need to ever, because it always renders in the minus state. You don't ever actually need to put the plus
[02:08:49]  state in the core set code. So you are certain minus state in the core set code. You just go, okay, switch it to plus. And then, uh
[02:08:58] , use, use display none block to hide the comments. So we, we get to, yeah, it just comes back when it comes back without ever serializing it.
[02:09:11]  That's, that's very, very, very, very, very cool stuff. When I first, when I was working on this, I try to, I try to
[02:09:18]  use a behavior to like isolate, uh, you know, one toddler or whatever. But like, that's very hard to do a CSS. It's very hard to
[02:09:26]  say, like, like, I want you to target this, but only this one. Like, don't, don't, don't go down the tree, you know
[02:09:33] ? Um, so stores are kind of a way, way around that. It's funny. I forgot them. I missed updating the header from solid. It's still says
[02:09:44]  course. This is solid. Yeah. Yeah. Oh, well, um, yeah. Yeah. Yeah. That's all right. Uh, but yeah, okay.
[02:09:54]  That's, yeah, no, that's, that's, that's cool. And as I said, this is a perfect example because this page is all HTML. You
[02:10:00]  don't want, like, you don't want all this fricking data, JSON serialization. It's a static page. All you're doing is adding some simple interact
[02:10:09] ivity and that's all you're adding here. Simple interactivity. You just write one little script. That's like, Hey, um, collapse this thing. And
[02:10:17]  like, yeah, I mean that, that, that works pretty easily here. Uh, I, I, I, I remember when we were talking about this, you were
[02:10:25]  like, okay, maybe I'll like make it all spa. Like, and then, and then you're just like, no, actually, no, this is just kind
[02:10:29]  of just what you would do. Like, well, let's not force it. Um, yeah, I was, I was thinking we needed a lot more, but
[02:10:36]  yeah, no. And yeah, I mean, let's, I'm going to, let me do what I, what I do just to kind of look, look at
[02:10:44]  this in a, in a, in a zone where people might be, um, more from, where is it here? Uh, I'm just going to throw this up
[02:10:53]  here. I don't know what the hashtag at the end is, um, but just to kind of like, just, just you're mentioning about, yeah. Okay
[02:11:06] . So yeah, first of all, when we, we land on the main page here, because there's nothing interactive here and it's astro and there's nothing,
[02:11:14]  there's no, there's no JavaScript. This is zero JavaScript. This is your page MPA style. We navigate to the next page. We just do MPA.
[02:11:21]  This is just stock astro here. We go to our comments page, which is one of these giant sounds pretty sizable. And at that point we load the JavaScript
[02:11:30] , which is about nine kilobytes, which, as you mentioned, you, because you're bringing the whole CSS parser in there, it's not going to be
[02:11:36]  like islands necessarily for one component. Like this isn't like, you know, like you, it's a heavy cost for the one component. You add a bunch of components
[02:11:45] . Basically, I imagine the course that scales better per component than even an islands framework does. But there's that one little bump at first, just for reference for people
[02:11:55]  like this page which for AstroSolid is 4.8 kilobytes or something. But to give other people a reference here even further, Solid Start
[02:12:07]  is like, I want to say 13 kilobytes and SvelteKit is 18 kilobytes and, and like... What is Solid Start ad? Solid Start
[02:12:17]  is actually doing like full client-side like SvelteKit in my, in my, in my example. I, I do... Yeah. But yeah, router
[02:12:26]  does all the rendering, client rendering. It's a complete single page app approach. Um, but you know, uh, but like fresh was actually, uh, fresh
[02:12:35]  was 8.8 kilobytes. It's about the same size as this actually. So just, just kind of, uh, ballpark. And I'm,
[02:12:44]  this is a very simple demo, but the thing is just kind of like, you can already see that I'm actually, what I'm actually interested in a little bit because
[02:12:52]  we're both, we're both sitting on Astro, right? Um, with, with these demos, both deployed to Netlify. Um, I just like
[02:13:00]  to get a kind of idea here of like, well, is there a difference in terms of like what the page load, like, like how, how it runs, like
[02:13:11] , just, I haven't tested this yet, so I always put people on the spot, but I, it just like kind of an idea of like, what the,
[02:13:18]  what the kind of... There's gonna be a, go ahead. So there's gonna be a, what there's gonna be a little waterfall. Cause, uh,
[02:13:29]  Corset, the parser is WASM. Um, so it's probably not gonna, it's not gonna start downloading that. Yeah. So what you can do
[02:13:37]  is you can add, you can add a preload in the, in the head to preload that. And then that helps. Um, okay. Yeah. That's
[02:13:48]  kind of interesting. Actually, it's not, not super easy to do, but okay. There might be something wrong with my deploy to, I wouldn't expect Ast
[02:13:57] ro's rendering time to be any different between the two. And it is for some reason, um, which is strange to me. The server rendering is actually coming back slower
[02:14:06]  on this example, which wasn't what I was focusing on. I wanted to focus on the startup, like the hydration side of things. No, did you, did
[02:14:13]  you find a regression in Astro? I mean, this is... Is your solid start out or is it, did you deploy that wildfire? Oh yeah. No,
[02:14:22]  I haven't deployed this one since April. So yeah, that, that might be, uh, because no, like, because yeah, this is like 400. Is
[02:14:32]  it taking 400 milliseconds for it to come back? Yeah. Yeah. Yeah. Because we're doing islands, so we don't have to serialize any of the comments.
[02:14:40]  So like when we go in here, actually let's, let's look at the network. Wait, is that, is that 400 for the full thing or is that first
[02:14:45]  byte? No, that's like the, that's like the, that's for the whole, all the HTML, 440 for the... We added streaming since April
[02:14:54] , I think. Yeah. Okay. Let's see what we do in our network here. Maybe I go look at the HTML and see what's going on. Okay.
[02:15:02]  No, it's the document size. No, document size is comparable. Interesting. Sorry. Cancel that. Size. Waterfall. No. Okay. Yeah. Okay
[02:15:13] . So yeah, that's interesting. I wonder what's up. But, uh, because of the, uh, you can actually see that the HTML is smaller with
[02:15:20]  core set. Um, solid adds a bunch of like other tags and stuff. So it's like, this is still astro though. This is like 95% astro
[02:15:28] , like 5% solid. Um, this is super simple demo. So that's interesting. Yeah. Astro, astro adds the astro island element. And that
[02:15:38]  contains the props. Yeah. Yeah. What I wanted to see though, wasn't this like, so I'm going to try and ignore that, that initial load thing
[02:15:46] . So wasm is an interesting timeline thing that I didn't realize. And then I was just trying to, I was kind of curious what the JavaScript thing does because do
[02:15:55] , do, does, does, uh, Corset hydrate isn't my thing. Cause what you see, what do you see here with solid is we use first
[02:16:03]  paint and it's, is this is non-streaming version, by the way. This is the Netlify, um, functions are on AWS, which don
[02:16:09] 't support streaming. The edge functions do, but this one I just did the normal functions. Um, cause it's close to the API. The API responses are usually quicker
[02:16:17] . Um, uh, but you can see that like there's, this is, this is where, well actually, yeah, this is where the main chunk comes in
[02:16:26]  doing all this. It looks like, yeah, without streaming, it's interesting. the timing, like this, the, the secondary chunks come in later. But,
[02:16:34]  um, if I look at this, just kind of understand. Yeah. Okay. Yeah. Here we go. Yeah. This is, this is a very, this is
[02:16:44]  very diminished timeline here. Right. Cause, um, like this, this, this runs some stuff is 40 milliseconds and, um, 12, I, I'm like
[02:17:00] , how do I add all of this up? Cause it's a lot of micro cut 5 million hydrations, but yeah, I mean, well, let's see first
[02:17:09]  paint in this example is at 449 and then we're kind of done everything document content loaded at 499. So it's okay. So maybe it's a scale
[02:17:21]  thing. So it's still 50. I've just, you could see a whole lot more script running by comparison than when on, on this, where we have, uh
[02:17:29] , what's pink again? Pink is, uh, cause usually scripts are yellow. I'm trying to pink is. Um, I'm not sure, you know what
[02:17:43] , of course now it's solid, solid doing like full, full hydration. This, this one isn't solid start. I'm, I, I want to use the
[02:17:51]  astro and this is doing islands where every single one of these things is an island. So there's like, I don't know, there's 280 comments. So let
[02:17:59] 's say there's, there's about 50, no, but let's say there's about a hundred islands on this page. So that's why that's like cut
[02:18:06]  by a bunch of slices and then that's testing our nested hydration support pretty, pretty strongly. And, and, and it's pretty good. This, this demo is
[02:18:16]  still my fastest hacker news demo out of all them faster than quick, um, scores, or at least the lighthouse is better. Even, even Marco six is like toe
[02:18:25]  to toe. This one is very close. This is still the, the, the, the highest performing hacker news demo. Um, and we did, we did very little
[02:18:35]  to try to make astro fast. Honestly, we did, we have spent invested not a lot of time. It was essentially just, you know, making things lazy.
[02:18:44]  It's like 95% of it. Right. And, and the idle thing works really well, but, and, but the thing is what you like end up seeing
[02:18:50] , um, sometimes when you do these kind of page speed insight kind of type stuff is that like, uh, I mean, I don't know if I'm going to
[02:18:58]  be able to show this here. I don't know why the interesting hashtag, you know, man, this isn't the biggest one either. This one's like 280 or
[02:19:06]  something comments. We've done like 1400 comment ones on stream. Um, this, this is hopefully big enough. Like this is probably so small Astro is going to
[02:19:15]  be like, Oh, this is easy hunt, hundred, you know? Um, but it's, it's kind of, yeah. Astro is just like, yeah
[02:19:22] , whatever. Like this is, this is nothing. Right. But like, I imagine that even with a page like this, if I took, well, let's see
[02:19:33]  something like, uh, sorry to solve it. a hacker. No, which one I want to do. Netlify. Is that one? The right one?
[02:19:44]  Nope. That is not the right one. Oh, I have so many of these. I almost, you don't have to do to actually get through all this stuff.
[02:19:51]  I have to like, go to my GitHub and like, uh, let's try. Find your, find the right hacker news. Yeah. Cause I, I need to
[02:19:59]  make a website where I put them all in the one place. Uh, but like I, I, right now how branches. So I'm like, okay, let
[02:20:05] 's go Netlify. Uh, view it here. Okay. Beautiful. That one. And then switch. And then. Yeah. Let's do this. Um,
[02:20:20]  yeah. Although this, oh, actually maybe I should do versell, even though versell is slower. It's just, this is out of date. I actually
[02:20:27] , actually, you know what? Yeah. This one's out of date. I want to do someone. I want to do one that's slightly faster. Um, because
[02:20:34] , but, uh, switch, um, back. Um, let's do, let's do versell function. Maybe. I feel like I just updated this.
[02:20:55]  Um, click it here. It should basically be AWS. It should basically be the same thing. Um, uh, do, do, do switch. What, what I
[02:21:08] , what, what I was getting at is like, I imagine even for a page like this, um, it probably would stress a single page app, even though it
[02:21:20] 's not even like the biggest page in the world. Um, right. And this is, this is, I mean, we're talking about Astro again, but I
[02:21:29] , yeah, like it's not terrible, but it's, it's stressed a little bit. Right. Like if you like. Which one was that? That, that
[02:21:37]  was solid start on that page. Right. Um, you know, uh, I don't know. Let's. Let's start. Does it, is it lazy
[02:21:45]  at all? Or is it startup like on page load? It starts up on page load. So this is the thing. It's a single, it's a spa.
[02:21:51]  So I, I think that's probably partially where this kind of stuff comes in. But like if you took, I don't know if I got one more. Yeah
[02:21:59] . Oh, let's even use cloud flare. I know. Let's, you know, uh, let's just do one last one here. Just kind of.
[02:22:08]  Um, the problem is I w I w I wanted to actually try, um, corset, but the initial render thing, I think it's going to hurt us too
[02:22:17] , too badly on here, but I, but you can kind of get, I'm trying to like extra, extrapolate from, from, from other things so we can
[02:22:26]  go, we, we, we have. Yeah. You know, uh, let's see here. Is that the corset one running on, on, uh, on
[02:22:34]  AWS? Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. These should be like the, almost the same. Um, and you can definitely see that like,
[02:22:45]  there's a, this is like a 400 response and this is like something so large. I don't under, I don't understand what. Yeah. This that's,
[02:22:57]  I didn't catch that earlier because this is only, the reason is this is a stupidly large page because it's like, but that's, that's where the fun
[02:23:06]  is, right? You get a stupidly large page. Yeah. Um, yeah. Right. And then you can kind of see, okay. And then like,
[02:23:13]  yeah, like Astro does this without a sweat. Right. Um, which is because, you know, the, the laziness, the hydration, which we already showed
[02:23:22]  core set actually continues that further. That further, it does even less hydration. Um, but yeah, that's, yeah. Cause, ah, man, I wish
[02:23:33]  I knew. I wish. Don't redeploy. Don't redeploy your Astro solid. I'm worried. I'm worried. I'm going to have to
[02:23:39] , I'm going to have to look, I'm going to have to look into it. Uh, uh, we'll, I won't, I won't redeploy
[02:23:45]  it on prod right away, but yeah, I'm, I'm, I'm in the, we're in the process with solid start of like refining it down and
[02:23:51]  we're getting to like, like beta releases imminent. As soon as the docs are finished, we've actually moved to beta release numbers, like inversioning and stuff.
[02:24:00]  So it's coming very, very soon. Yeah. But yeah, no, it's, I was, it's interesting. What you talking at some point that, uh
[02:24:09] , I can't remember what, what the context, but you were saying that, I don't know if it was in solid start, but just like using like response
[02:24:16]  and like using these APIs, like actually adds, uh, quite a bit of performance to it. Yeah. Yeah. We're doing that too. Now. I wonder if
[02:24:28]  that's part. Yeah. I don't, I don't, I don't think it would scale like this, but like as a baseline using the request response objects,
[02:24:35]  like we were sitting there and we're like, why is like, why? I was like trying to sit there. Cause I know solid has one of the fastest string rend
[02:24:40] ers. So I was like, why, why saw it start getting hit? And like, there was a few things that I had to work on. Um, but
[02:24:45]  one of the ones was, I just noticed that like a lot of that kind of like take for granted overhead, like the request response stuff, the SvelteKit remix
[02:24:51] , you know, that we're all doing was actually just for like a slow, I don't know how they determined it, but like the lighthouse, like metrics, Steve
[02:25:01]  was, uh, Steve from builder was doing what is it frameworks, frameworks benchmark, maybe, maybe I should do it in my other window, but he, he was working
[02:25:13] . Yeah. It was like something like framework benchmark or something. And I, uh, not this one. Yeah. I think I might've shown it on stream previously
[02:25:25] . The Steve from builder was working on it. And I was like, I was like curious. And I've like started looking at like just messing with stuff. So I
[02:25:31]  was like hacking solid start in the benchmark and being like, okay, let's pretend we don't do request response. Let's not convert stuff from streams. Let's
[02:25:37]  not like cut out a bunch of stuff. And it, it like, it, it, we didn't get the Marco speed, but like it doubled the performance on the
[02:25:44] , on the benchmark by, by doing that. So like so much in the meta framework versus like what the actual render is doing. But again, that scales with the
[02:25:54]  size of the page. I mean, the benchmark was barely doing, it was probably doing like a two MC, like it was barely doing more than a, than a hello
[02:26:02]  world. So like there's different aspects of scale there. Benchmarking this stuff's hard, but it's something that we need to, we need to do more
[02:26:09]  of. So just to kind of figure out where these things are, because there's a lot of technologies going on right now. Right. Like, um, and a
[02:26:18]  lot of like exploration, right. Uh, like that, that, that, that's part of what's interesting with this stuff because like people are trying to find ways to
[02:26:27]  make less JavaScript or make it easier to author stuff with less JavaScript, solve hydration, server rendering. Um, you know, how do you do Astro? We get
[02:26:38]  all the benefits of, uh, a single page app. Are they even actually benefits or is this actually, we've just been like so warped in a terrible direction?
[02:26:47]  Like, um, really interesting questions for, from my perspective. All right. Yeah. So we do some weird, like an Astro, especially when we, when we
[02:26:55]  added streaming, like we were using like readable stream now and I'm sure there's overhead there. I think we, we subclass it in node because there are some
[02:27:05]  parts where readable stream, like the node fetch implementation is not the standard or something. So, uh, I'm gonna, I'm gonna take a look at myself. Cause
[02:27:16]  I, yeah, I wouldn't, I expect it to be that slow though. Yeah. Yeah. This is, this is, sorry. I found the benchmark I was
[02:27:24] , I was talking about now and these numbers are probably a little bit slow, but we were like, like, I, I, I, these are real lighthouse scores
[02:27:33] . Like Steve is trying his best, but you, you stop, you start asking yourself, like how are frameworks getting, um, faster timed interactives than lowest, than
[02:27:45]  largest contemptful paint. When these are async rendered without streaming, like literally first contemptful paint and largest contemptful paint should be the same, except for, I guess
[02:27:52] , the progression of the CPU on the device. And this is like a slow device propagated. But if you're showing this basically the same HTML elements, you wouldn
[02:28:00] 't expect like, like this kind of gap, right? Like you wouldn't expect it to go like 0.8 to 2.2 seconds. And it's being tracked
[02:28:11]  like this, this looks like something's being client rendered. I looked and it's not being client rendered. It's like, there's, there's, we, we
[02:28:19]  need to, I think that's why that's kind of been on pause for a bit. We, we need to work on benchmarks and see what we can do.
[02:28:25]  It's not being client rendered at all. It's not rehydrating. Well, it's, it's, sorry, it's hydrating, but the hydrating
[02:28:31]  should affect TTI. It's not timed interactive. It shouldn't impact largest contemptful paint. Um, you know, yeah, I mean, and then, look,
[02:28:41]  this is like some simple react demo he made. And then this is not our next, which is like the opposite. It's first conflict paint is fast. Like the
[02:28:50]  react one is pretty fast, but then the time to interact is really slow. But the largest conflict, maybe this one is client rendered. Maybe that's my mistake. Maybe
[02:28:58]  this is client rendered, but it's kind of funny. Sometimes, uh, lighthouse will reward you for client rendering that, that, that silly hacker news demo. Um
[02:29:07] , yeah, the client rendered version of solid outscores the server rendered version of solid because just how fast that first paint gets there skews the rest of the results that
[02:29:19]  they don't even care if it takes like twice as long to finish. It's like, it's like the metrics are, are need work. Um, yeah,
[02:29:31]  I rarely even look at lighthouse anymore. Yeah. The problem is Google SEO looks at lighthouse. So there's an incentive for it. Right. Um, yeah. And those
[02:29:42]  are the, yeah. So these are the lighthouse tests. And then he actually started doing like auto cannon. And this is where I like, or doing like throughput,
[02:29:50]  like pure render speeds and throughput. And this is where we realized that we're like, Hey, there's an overhead, like solid and SvelteKit are almost,
[02:29:59]  are basically a neck and neck here, which makes sense. But, um, but when we were, when, and this is all start when I like, see how pre
[02:30:08] act, preacts, pure render is faster and solids, pure render is faster though. It hasn't been merged into this, but like, essentially this is when I started
[02:30:15] . Like, this is when I started realizing like, like the request response thing. Like, look, look who's at the top of the list. Marco, who
[02:30:22]  I believe is just doing no directly and not doing request response. Fresh, who's completely keyed only to Dino. Right. They're not doing any conversions. Yeah
[02:30:33] . Hydrogen might be doing something pretty good. I got, I got, I got, this is, this is one looking, but the rest of us are kind
[02:30:40]  of, even hydrogen's kind of in this range with the rest of, with the rest of us. And then, yeah, I don't know what's, you know
[02:30:47] , maybe there's some overhead in the Astro. Then you get remix next and then whatever angular universal is doing, probably don't do that. So, uh,
[02:30:56]  Astro uses, I use generators a lot. I know there's overhead with generators. Yeah. Um, Astro creates lots of promises. Like we should probably strip all
[02:31:06]  that stuff out and not do it. And that might help quite a bit too. Yeah. But I, I mean, I don't even know how much I,
[02:31:14]  I trust this. This is good though. Like he, he, I think this is a start, right? We need to like do, do stuff. Like he was
[02:31:20] , how about bun versus Dino versus node, um, for react SSR. Um, you know, he, you know, these kinds of things, maybe I think
[02:31:33]  Chrome made generators faster recently. Dylan speaks. Um, Oh yes. Oops. I hope you're right Dylan. I don't want to have to refactor that code
[02:31:41] . Yeah. Anyways. Whoa. This, this repo already, already has 326 stars. I remember how hard it was to get the first 326 stars. Anyways.
[02:31:51]  Um, there's, there's a lot of work to be done in this area. And sorry, we were talking about performance and I ended up veering right off into
[02:31:57]  benchmarks. Um, but you know, it's, it's, it's interesting because I think a lot of, you know, people don't always realize that the
[02:32:07] , the bottlenecks are like often, um, like it's, it's, it's about going, chasing performances, like chasing bottlenecks. Um, it's not
[02:32:16]  like, it's like you just made it 10% faster and now everything's 10% faster. It's like you made something, you change something that when you micro
[02:32:24]  benchmark that you realize, okay, this should be a 20% improvement. And then you go measure it and it's like a 5% improvement. Cause you just unlock the
[02:32:30]  next bottleneck. Like you, in theory, you, you made that piece 20% faster, but now it's not the slowest piece. So the next thing
[02:32:39]  is the thing that's, you can chase that forever. Um, yeah. Okay. Sorry. Um, let's, let's, let's see, let's get
[02:32:47]  some questions for what we got. We got Matthew here. We should get some questions in the chat. Chat's been relatively quiet. They just been letting us talk here.
[02:32:53]  And I was hoping that people would have some interesting comments about core set or astro. and, uh, and we could, we could chat. Um, so I
[02:33:02] 'm, I'm putting out there, this is your chance, you know? Um, we'll give them a blown away. They're speechless. Yeah, exactly. I
[02:33:10]  mean, that's, that's definitely what I felt when I was looking, looking at a course out there. It's just like, wow. Um, so I was
[02:33:18]  going to go ahead. No, go ahead. Yeah. Yeah. I mean, I mean, I think it is, there is like, you've come from a very
[02:33:26]  traditional engineering background. Like it is a bit foreign. And that's like one thing that's hard with core set is that like HTML, CSS is extremely popular. You
[02:33:36]  know, it's like one of the most popular programming languages that there are people building like brilliant, crazy, awesome things just with regular pure CSS. But like the overlap between
[02:33:46]  like, I don't know, I don't know what you call us, but like traditional JavaScript engineers and like CSS engineers is like smaller than you think. Like people
[02:33:55]  who operate in both worlds a lot. Like it's kind of a, there, it's a, you know, there's not a huge overlap. So, um,
[02:34:02]  you know, I probably really need to target. Like really the audience when I announced core set I was going for is number one, people like kind of the audience the
[02:34:13]  same way for like Alpine people who want to write their back ends in a non known environment. I thought those people would be interested. And then potentially CSS people. Um
[02:34:24] , you know, cause, cause with the familiarity, familiarity there. It just breaks all my mental bottles. I'm way too deep in my thoughts. Can you come
[02:34:31]  back with another time? I might have some questions then. Oh man. Uh, but there are some good questions here. Uh, uh, have you, did you ever
[02:34:39]  consider just getting rid of JavaScript completely kind of like XHTML does? I guess that's a huge dependence on the server. I don't know what you answer.
[02:34:46]  Do you, what is, are you familiar with that? I don't know. I don't think I know. Okay. Uh, XHTML is like
[02:34:53] , well, you know, we could, uh, Is it like Alpine? Is it like one of those kinds of things? It's, uh, it's,
[02:35:02]  uh, the syntax is like Alpine a little bit that it goes in, but the thing with our, or it's not XHTML. I think was it
[02:35:08]  XHTML or are we talking about HTMLX? Cause XHTML was. Oh, yeah. XHTML is. Yeah. Actually, I
[02:35:16]  don't know which one they're asking for because what, I think there was actually a browser standard about something years ago that was XHTML and I'm not remembering
[02:35:22] . But HTMX, uh, I think also fits this question, right? That's the thing where you like literally like put the stuff in and then there's no
[02:35:31]  JavaScript. I, I, I have to imagine this is the, the, what was meant here. Um, did you ever, did you ever think about like, it
[02:35:40] 's a lot like Alpine. I, I mean, no, no, not really. I got, I've built stuff. I've built stuff like that in
[02:35:48]  the past. It's, it's fine. But you're, then you're, you're limited. Like with, you can only live within the DSL, right
[02:35:53] ? That's, you know, that's the problem is that you don't have a power of JavaScript, you know, unless you just go completely, uh, do manual
[02:36:02]  DOM operations. Like you can't live in that world where like you're in the DSL, but then you get to pull back out. Yeah. No.
[02:36:11]  Yeah. And I think this does also like HTMX, like everything is server. Like in less. Okay. Here's, here's another one. I was thinking
[02:36:19]  about moving core set into workers and off the main thread declared models. Seems like it might, any thought on work on workers at all, or? Oh, I thought they
[02:36:28]  were offering to move it to do that work. You're just like, yeah, sounds good. I was thinking about moving it. So yeah. So do you think
[02:36:34]  that's a good idea? Should they, should they consider doing this work? Uh, I don't, I don't know. Like, I don't know. But
[02:36:42]  making things async in, in DOM frameworks is, is kind of a weird thing to do. I, I've built a few, uh, web worker frameworks in the
[02:36:50]  past and I really, I really like the idea of doing stuff. Um, but this is definitely intended to be more low level. So we gotta be sync. Yeah.
[02:36:59]  No, that's fair. Um, I, I think we talked about this a little bit already. but was there like, I, I got the, you're
[02:37:06] , you're, you're kind of like, as it, as it comes sort of thing. They're just a question about tooling completions, probably types. Yeah.
[02:37:16]  I guess you have, I guess are typescripts with tag template literals a fun game too, I guess. Yeah. You can't really, I don't know
[02:37:23] . I don't think I'm good enough for typescript to pull that off. Uh, no, I, I don't, I don't know. I,
[02:37:28]  I had another DSL for, for SFMs called Lucy and I spent some time working on a DS code extension for that, for that. It's a lot of work
[02:37:36] . Uh, I think I'd have to wait, have to wait until it's a little bit more popular to take on that work, but I think it could be cool
[02:37:43] . There's lots of stuff you could do. I was trying to remember about this. Yes. This is the thing I, when I was talking about how you,
[02:37:51]  how you liked, uh, how you liked, uh, DSLs. This is the thing that was coming to my head. Yes. This, and it compiles
[02:37:56]  down to X state. Yeah. Yeah. Yeah. Yeah. So what's that? So yeah, lots of fun. Uh, yeah. Okay. That's cool.
[02:38:09]  Yeah. I, it's yeah. I haven't, I, I remember this. I was really curious if like, I feel like if it's, it's
[02:38:16] , I guess this is always one of those things, right? Where people go, Oh, you're not gonna need a state machine. And then, you know, people
[02:38:22]  like, okay, well actually maybe you could use a state machine. And then you start going, okay, I'm just a model stuff of state machines anyways. And I
[02:38:27]  guess it gets to a certain point where like, maybe you feel like the state machine has to be large enough or complex enough to, or you have enough of them to make
[02:38:37]  a DSL out of it. It's interesting though. Sorry. I'm tangenting again, but I'm, I'm actually curious also like, what, like
[02:38:45] , what, like, what were you doing at that time to be like, Oh, I'm gonna make a DSL for S, uh, finite state machines. Like
[02:38:51] , cause this also seems like very out there compared to say working on Skypack at I gathering was what was going on around that time. Right. Uh, yeah.
[02:39:02]  I think, I think, I think we're working. I think it's Skypack. Um, no. I mean, I, I, I would always like,
[02:39:07]  uh, finite state machines and use them and stuff. I just like the, like the object options, object API thing. Um, is, I think that's,
[02:39:17]  to me, that was always one of the difficult things with FSM. It's just, it, again, it is like a different mental model, you know,
[02:39:26]  like FSM's make things declarative as well. They like, they make your runtime logic declarative. Um, so I, you know, I felt like a
[02:39:33]  DSL was needed. Right. But like Lucy, Lucy has the problem where Lucy is in a separate file. So like your mind has to be in two different worlds.
[02:39:43]  Um, that's a nice thing about, you know, technical, literal is you get to embed your DSL inside of JavaScript. So like, you're still, you
[02:39:51] 're still within the JavaScript world and you're just kind of plugging into the DSL. That's like still a problem with Lucy though, is like being a different kind of
[02:39:58]  have to do this like switch. Right. So I'm just, I'm picturing okay. Is there a world where you, my, no, they were,
[02:40:08]  I don't, I don't know how they fit together. Cause I was, I was thinking about, so Lucy is like making your runtime logic declarative, right?
[02:40:19]  Like all of your possible states. So like my idea was kind of going like, could, could you create like a really nice compiler on Lucy to compile your Dom?
[02:40:31]  Like what if Lucy knew about your view? What if like you were to put a template in Lucy? Well, Lucy knows all of the possible states of your application, right
[02:40:40] ? So it knows what states can change. It knows like what parts of your template, if it had templates, it would know what parts of your template could possibly change.
[02:40:49]  So my idea was that Lucy could actually compile down to optimize use for the client because it would only have to include the parts that, that changed over time. Does that
[02:40:59]  make sense? Yeah. Yeah. That's. And how is that, how is that connected to, to, to corset? It's not really connected other than
[02:41:09] , you know, I was, I was thinking about that problem when, when I started working on corset. No, that's, that's cool. Yeah. I
[02:41:17] 'm sure as we go through your GitHub here, we can find lots of interesting projects, but we'd be here forever. Um, I, I think we should probably
[02:41:24]  let Matthew go. It's been like two hours and 40 minutes at this point. He's getting on the three hour mark, which is very long to have a guest on
[02:41:31]  your stream. Uh, Learn With Jason only does 90 minutes doing 120 is a lot. And we're like at, I don't know, what have we, I can
[02:41:38] 't even do the math anymore. That's how long it's been. So, um, uh, thank you all for your questions. Um, thank you Matthew,
[02:41:47]  uh, for, for joining me today, um, and talking about the stuff. Is there anything at the end you want to like shout out or any projects or anything you
[02:41:55]  want to like give a shout out here before we let you go? Yeah. There's this project called Astro. Everybody should check out. We just released one four zero
[02:42:04]  yesterday, uh, which added, um, a bunch of cool stuff. It added Astro cookies, which is an API for like manipulating cookies in Astro. That
[02:42:13] 's easier than like modifying headers and stuff. Um, lots, lots of cool stuff there. So yeah, check out Astro. Cool. We need to, we need
[02:42:22]  to do, you've already done with Fred, right? You've done, you've done a stream with the thread. Yeah. Yeah. I've had Fred on,
[02:42:28]  that was an awesome stream by the way. That was the one when we like, I, I'd, I'd never tried client idle. I'd only tried like eager
[02:42:34]  stuff and he's like, Oh, you should just try the client idle. And it like, everyone on the stream was used to the, my hacker news demos,
[02:42:41]  like scoring like fifties or if they were partially hydrated, maybe like 70. And then we got like a 94 and it was like green. And like, it was
[02:42:47]  just like a, yeah, no, that was like, that was a great time. Um, and I also covered Astro on a previous stream too, when I was
[02:42:55]  just exploring on my own. Yeah, no. Um, so yeah, people who were on the stream pretty familiar with, with, with Astro. And oh,
[02:43:01]  here we are 1.4 release. Nice. So I missed this announcement. I was too busy co-tweeting with Astro, but, um, this looks
[02:43:11] , this looks cool. GSX supporting Vue. That's, that's, that's exciting. Yeah. Do you, do you know, do you know Bjorn
[02:43:18]  for the, from the, uh, Vite? He works on Vite. Bjorn. Um, I haven't met him. Like blue, blue WI.
[02:43:26]  I don't know. You, you, you, you probably recognize him if you saw him. He, he works with us now. Oh, okay. Uh,
[02:43:31]  so he did a lot of this stuff. He, he got like PMPM to, to work correctly. Like he used to have to use a shameful hoisting
[02:43:38] , uh, with, with Astro. Uh, he fixed that for us. So. Yeah. There's, I mean, you could probably speak to it and probably
[02:43:45]  shouldn't get into it too much on the stream, but there's, there's, there are some common things that every view meta-framework hits and there's
[02:43:53]  still some edges that are, that's awesome to have someone so close to Vite. Yeah. Uh, so close to Vite working with you on this stuff. Uh
[02:44:02] , yeah. For sure. Uh, okay. Yeah. Anyway. Uh, good stuff. Thank you so much for joining us today. Um, so we're going
[02:44:11]  to let you go. You have a good rest of your day and we're going to continue the stream. The stream's not over at all. All right. Bye,
[02:44:16]  Matt. All right. Bye everybody. Oh, that was great. Um, honestly, core set is so mind bending. I, I was trying to like, the thing
[02:44:27]  was, I'm not, I'm not the best person at CSS as many you probably imagine. And I like, I wasn't expected to, at first to be
[02:44:36]  like, so into the CSS of it. And that makes it even more clever, like, because it like actually follows the cascading rules and it uses like future syntax
[02:44:45]  and stuff, which is, I think just incredible. Um, to kind of see like how to approach this problem in such a different way. Um, some, some
[02:44:54]  people are pointing out like, yeah, it's the double app problem. And even, uh, Matthew kind of agreed on terms of like, there's like, there's
[02:45:04] , if you take either extreme, it's a good choice in the middle, it's a little bit cloudier, but it's, it makes sense because this is almost
[02:45:11]  the purest version of like the opposite of the isomorphic. The isomorphic has the other problem. It's like kind of good in the middle zone and isn
[02:45:18] 't good on the edges. Right. That's, that's essentially, um, the challenge there. So anyway, yeah. So how are we doing? I guess
[02:45:27]  we're going to get into this week in JavaScript soon. All right, Ryan, are you saying two apps is okay? I, I, I, I, I,
[02:45:34]  I, I'm, I, I, I'm, I, I'm, I, I'm, I am generally, I think there's a reason we were here
[02:45:41]  and I do, I am trying everything possible to make us not have the two app, but I am not convinced that what we're doing is like, like at a
[02:45:52]  certain point in the complexity, like, are you actually making people's lives better? I do. It's, it's, it's, it's a, it's
[02:46:00]  a hard one. I think, I think I don't want to be in that middle zone. If, if, if I have to do the two app thing, I
[02:46:05]  think there's a whole ton of content sites and different types of sites that don't need to worry about that. And they're probably like, part of this is like
[02:46:13]  the same way reacts getting the server components. And we're getting like, we're going into that zone where we're like, like trying to do more than we intended.
[02:46:21]  Like you have a single page app framework now that you're expecting to do everything. So yes. In that sense, like, why aren't you just using the JavaScript you
[02:46:30]  can? So I, from that perspective, it's not even two apps at that point. You're, you're just doing what you need to do. I,
[02:46:37]  it's hard to tell where those boundaries are and where the scale. And it's interesting is that we are trying on the isomorphic side to do everything. And that
[02:46:46] 's often folly. So yes, I'm not saying two apps is okay necessarily. I'm just saying like there is a whole zone of, and it covers a
[02:46:56]  large number of apps where like, yeah, it's, it's probably not a concern. I'm just very interested in whether we can actually just like not do that at
[02:47:04]  all. But I don't know if, if, if, if I like, I'm not convinced yet that we're going to love that. I've been crying
[02:47:14]  about that comment about excellence. She said, yeah, I mean, it's why we're working on some slightly different problems, right? Um, so like, like,
[02:47:24]  yeah, I mean, this is a big space. And I, we're going to talk about that a little bit today on this week in JavaScript to be fair. Um
[02:47:30] , because, uh, yeah, I, I've got some windows ready here so that we can kind of get into that conversation. Give me a second as I kind of
[02:47:38]  prep that. But, um, let's see if I can get that all into where I want to be. Okay. By the way, I've, I've
[02:47:47]  been watching, um, some other streamers and apparently I don't tell you all to like my videos or subscribe or follow nearly enough. Um, and I, and I
[02:47:56]  was looking at the stats and I was like, yeah, yeah, this is, this, this is definitely true. I've, there's, there's way more people
[02:48:04] , you know, who are watching at any given time than people who actually go and like, hit the like on the YouTube. So please hit the like on the YouTube
[02:48:10] . I know this is shameless self-promotion, but that's, that's what I'm doing here. Unsubscribe. There you go. It's hard to fall
[02:48:19]  into the, yeah, avoid falling into ideology cap around these topics. We tend to want to create one perfect solution rather than realizing that there are many factors to choose from a
[02:48:27]  particular problem. Yeah. I like that. And, but like people are going to try, right? That's, that's the thing. Right. And man,
[02:48:35]  we're in such react and everything. It just, it's warped and maybe not for everyone. Like web dev is a wide open place, but it has war
[02:48:45] ped the mindshare centers where people come and discuss these ideas that like we want on a certain level that there would be just this one tool that can do everything.
[02:48:59]  Sometimes, you know, it's the classic thing. Like don't give the customer what they want. They don't realize what they're asking. But yeah. Okay.
[02:49:06]  Sure. And it could also be, you know, us as humans too, right? We want to, we want to, and as engineers, we want to solve a
[02:49:14]  problem. Uh, so, you know, like we're, we're, we have no choice smash that like button. Yeah. Thank you. Um, I need
[02:49:24]  to do better on that side. Um, definitely. Especially when, when we have like large groups of followers, I was going to miss that. Um, but yeah,
[02:49:32]  I, I think, I think that the reason it's, it's, it's been pressing on me a little bit is be just simply because of. Um,
[02:49:45]  how should I put it? Because like how much of an investment we're putting into stuff right now? It is big investment, like years long investment into things that we think
[02:49:55]  will play out. As I've been hinting at, I think react is very close to doing something with server components. Like they're fine. Like the next stage is
[02:50:03]  happening imminently. So like, I think in quick release beta, which has been, I mean, we should just get into this week in JavaScript because we're going to
[02:50:12]  talk about all this stuff and it's going to be awesome. Sorry. Oh, now I think about why is there no client side multi-page app rendering inside the
[02:50:18]  service worker should be possible. Yeah. Um, people played with it, but like, is there any benefit of that model over having like, because the thing is MPA
[02:50:33]  in post, it kind of suggests that immediately that you have a client server model. So it's like, if you were going to have everything in the browser anyways,
[02:50:42]  do you want a client server model or do you just want like an app model? And then the answer for the last several years has been, I want an app model.
[02:50:48]  And I want an app model. It's interesting though, is if you decide that the client server model is a better model, that's actually scalable with the web,
[02:50:54]  which might be actually the true statement. Then having the ability to just port it into the service worker makes it a lot more attractive because then you're like, not really losing
[02:51:02]  anything. But as like a starting point when you're like, I have a single platform, you're like, well, I'm going to write it like an app
[02:51:08] , not like a client server model. So I think that's basically it. Okay. Okay. All right. Let me see here. Give me two more seconds.
[02:51:21]  Feel free to ask me any more questions in the chat before we get started. But I'm just going to get everything lined up for this week in JavaScript. Yeah. And
[02:51:28]  it really is a continuation of the last couple of weeks to be fair. Okay, cool. I think I'm in a good place. Let's get ourselves going and
[02:51:41]  let's share our screen. All right. All right. Let's talk about this week in JavaScript. There's been a lot of chatter still kind of continuing on from last
[02:52:02]  week. people talking about signals. And that's going to be a theme throughout this week. Reactivity is spreading like wildfire, at least in the kind of mind
[02:52:12] share on Twitter. And obviously, that's something that I find really exciting. I've been obviously a big fan of reactivity. I feel like some of my efforts
[02:52:20]  have contributed to that spread. Not that these are things that I created. Reactivity of this nature has been around for quite some time. And it's even been popular
[02:52:32]  in the mainstream. Vue is a reactive library. They kind of hid elements of it. But they've always been a reactive library. So why now? There's a
[02:52:45]  lot of ways to answer that question. We've talked about it before. But for me, this kind of started this week with this whole thing. Powell Kozl
[02:52:56] owski, sorry if I screwed up his name. He's actually a member of the Angular team at Google. And the Angular team is very interested in looking at how to design
[02:53:07]  signals and reactivity. I've actually been talking to Powell for two and a half years, maybe three years, about reactivity. And it's kind of been like
[02:53:16]  a long-term charting of the potential direction to take Angular. And he was like, signals are the new VDOM. Which is a pretty big statement.
[02:53:24]  But yeah, if anyone remembers when the VDOM came out, there's like dozens of different libraries coming out with their own version. And benchmarks. And trying to differentiate
[02:53:36]  and figure out the best way to do stuff. And it feels like that is completely what's been happening with signals and reactivity. Which is really weird to me because
[02:53:44]  the VDOM, at least maybe I was out of the loop, felt like a relatively new concept, right? At the time. Like there was some virtualization before
[02:53:57] , but people didn't have a virtual DOM. And reactivity is like as old as, like, it's very old in the academic world. And even in JavaScript
[02:54:07] , it was, you know, there were libraries, like we talked about Knockout, we talked about CanJS today. That were doing this like 2010. So like
[02:54:14]  12 years ago. So, and I did get into it at that time. So for me, I'm like, it's hard for me to remove the baggage of 12
[02:54:23]  years of developing with signals, so to speak. But it is interesting to see the exploration, right? So, this is just more people talking in synchronous nature, how it
[02:54:34] 's not like RxJS. You know, signals existed before the VDOM. This is a great, great comment. And it's true. MobX
[02:54:42] , there's just so much of this. But right now, everyone's trying to place it again. And I think that's really exciting, obviously, from my perspective.
[02:54:52]  We're going to talk about signals more in a minute. Well, actually, no, it continues right on. I'm actually going to highlight this article for a minute
[02:54:59] . Because I actually, this is probably my choice of pick an article of the week. That isn't a topic that I have. But like, like, Fabio
[02:55:11] , who often comes in and dominates the chat on here with his knowledge, is a framework author of a framework called Vobi. I hope I pronounced it right,
[02:55:25]  which is basically another fine-grained reactive system that doesn't use our JSX compiler, but instead kind of does it something kind of similar to our Hyperscript version
[02:55:39]  of Solid, except he's added a lot of like small things that makes it a lot nicer to use. He wrote an article where he's just like, there's
[02:55:47]  a lot of things that I do differently from Solid, right? He's definitely so close into it that he's like, I think he said there's 30 things. He
[02:55:53]  has a list of 30 things. So there could be 30 more of these articles, which is kind of exciting. But he spent the whole article talking about the difference between Solid
[02:56:03]  and Solid's, like, basically not using a custom transform. And his point was that the performance is basically untouched. And he is kind of right. That was
[02:56:14]  one of his points right here. That like, Vobi, Solid, Inferno in the middle, like, this is a very tight little loop. The performance is
[02:56:23]  not, you know, like, no compiler compiler. That's not like this. There's small performance improvements you can make, but 90% of the performance comes from the
[02:56:32]  runtime. But what was interesting for me, especially with this article, was he talked a lot about, like, what kind of affordances and choices he made in order
[02:56:43]  to, you know, they, you know, he passes things by function instead of calling the function and little details like this. And for some people that will read this
[02:56:52] , they'll really respect how he simplified the model or that the model maybe was originally simplified. To be fair, reactivity like this has existed for a while. I added
[02:57:02]  the transform. That was actually one of the, like, a lot of the things I added the transform were my additions. Like, there were already libraries like this before
[02:57:12]  I did that. But it, but seeing both sides, side to side, really juxtaposes those trade-offs. And it's, for some people, they
[02:57:18] 'll, they'll actually walk away from this article and appreciate what Solid does more. So I think it's, I think this is a really great deep dive on an
[02:57:24]  area that I don't document as well as I should. So, do check it out if you're really into, like, the guts of reactivity and reactive rendering.
[02:57:34]  Super, super, super good article. And it talks about, like, some of the shortcomings of the compiler we have today. Like, some of the, like,
[02:57:43]  DOM, component spreads are good, but some DOM element spreads have some limitations. These are all things we're working on, but this, this goes very in detail.
[02:57:52]  Really, if this is an area of interest for you, I'd definitely check it out. So yeah, reactivity, reactivity, right? Yeah, this core set
[02:58:01]  announcement. Let's get to that in a, in a, in a minute. Do, do, do, do, do, do. What do I want to talk
[02:58:11]  about? We're going to talk about QUIC again today, this week. Um, QUIC, um, has announced that they are working on a fine grained
[02:58:23]  update system. Um, basically, basically something, essentially it's like the same reactivity as solid. For those who don't know, QUIC today uses a virtual DOM
[02:58:34] . So even if they kind of like are smart about when they download stuff, when it's time to go, they suddenly need the component to be there. And this
[02:58:45]  changes that. That's why I've been bugging Michiko for months and months and months. I was like, you know, this is how you actually solve hydration.
[02:58:52]  You, it's the components. You gotta, you, if you really want to get sizes down, do that. And, uh, Manu, uh, from
[02:59:00]  the builder team does an incredible demo on the stream where he shows off, uh, how this would work, which is really cool. Cause this is a large part of
[02:59:08]  what I wanted to work towards also in solid, uh, 2.0. So, um, they are showing that it's possible. Um, what I've, what
[02:59:15]  I, what we were, we've talked about on a few of our previous streams, uh, about how one could go about doing resume ability with fine grained, uh
[02:59:24] , runtime reactivity. So, um, I'm definitely keep a closer watch on this as we continue to build out solid 2.0. Um, but really interesting
[02:59:32]  stuff. Uh, and again, this is all about signals. They, um, I did quite enjoy that. They had a segment in this video that was exactly, um
[02:59:42] , they recognize some of the design qualities about solid. They, they did go with the dot value, um, instead of the function calls, which, uh, you know
[02:59:50] , I have an opinion about, but they did recognize that calling the thing from the outside in the syntax instead of passing signals through, um, actually makes the developer experience
[03:00:00]  a lot nicer. And this is kind of interesting. They actually, you know, read and talked about that article I just shared in terms of influence influencing them to go that
[03:00:09]  direction that from by Fabio. They actually read it and they're like, Oh, actually like what solid is doing here. Um, and they're like, we should
[03:00:15]  do that in quick. So, uh, very interesting, um, thing. Yeah. I mean, there, there's been just some discussion about dot value and it
[03:00:24] 's so obvious to me why that's not the way to go. But a lot of people, you know, have different opinions on it. And I, I can respect
[03:00:33]  those opinions, but the, the big thing with the functions is that it's like the same, same sort of pattern, right? Like, like, like this,
[03:00:42]  not this, but like, like if, if we want to count to be double, double count, they just think, and this is such a simple example, but the
[03:00:51]  second you want to make count double count, um, like, like, or any kind of drive data, whether it's a memo or whatever. The second you do
[03:01:03]  that, even like, it's just, it's just double count, right? Like this is, this sort of derivation doesn't force it. And people talk
[03:01:15]  about the JSX and like, well, it's fine. Cause you know this, but picture if this was now dot value and your findings expected dot value, are you
[03:01:23] , are you going to go and be like, okay, I'm going to write, uh, get this return. Like, are you are, is this what you
[03:01:33] 're doing? Right? Like what, like, you're not going to do this yourself. You're probably just gonna be like, screw this. Um, you know,
[03:01:40]  create computed or whatever you want to call in your framework and just do this. And this is one of those things that I really wanted to actually avoid. It's called over
[03:01:50]  wrapping. The expense of computation is actually expensive, right? Like, like essentially like you, if you, sure we can do fancy stuff with the JSX compilation,
[03:02:06]  but what if you want to make like an API, like, um, something like, uh, you know, like, uh, something that updates a counter. So you
[03:02:14]  may, you want to make a custom, like, uh, um, count equals like, uh, create interval interval API, right? Which is like a custom composed
[03:02:26]  hook that you define anything. I'm stealing this from, from, uh, like the Dan Abramoff counter example, where you want to like run some kind of code
[03:02:37]  here. Um, or like basic compose up more advanced behavior. What are your API is going to take objects that have dot value on it, or are they going to take
[03:02:47]  functions? It just like, this is sort of a, uh, a mess from my perspective, because you're for you, you start, people start just writing,
[03:02:56]  wrapping everything in computers just so that they can get the same signature. Right? Like this is, this is a very non-friendly to composition sort of pattern because like
[03:03:08] , you can't just, you can't just like build, you can't just like call some functions. I mean, you could, but like, like, there's
[03:03:18]  two arguments on this side, right? There's this one that I'm talking about, about why you want to call, do the function. And then there's a
[03:03:25]  second one of like, why you always want to do this instead of, uh, instead of doing this, right? Because if you do this, if your framework expects
[03:03:38]  this, and then you want to do like this, you now have to do dot this or call the function, like you're making it inconsistent. Um, and if
[03:03:47] , and if, and if this is button, you, inside here, when you make a button component, should you be like, do you want people to be like,
[03:04:00]  um, if is signal props dot double count? Like you start getting people to have to guard against the, like, whether you pass an expression with the dot value or
[03:04:19]  whether you pass like just a string or like that, like this whole zone on composition kind of gets into this like weird thing that just evaporates to a certain degree.
[03:04:31]  If you just use functions, right? And I mean, I feel like some, like view has always been mutable and they, and they had their, their whole setup
[03:04:44]  with like the, the objects before they went to the primitives. So I understand views heritage and like, they should keep, it feels like view to be like that,
[03:04:52]  but it was weird to me. It was like when preact and, um, even quick went with the dot value signature because it's like, like preact is
[03:05:01]  a, is like a VDOM library. They understand unidirectional flow, right? Do you want like, okay. Like here's an example that I can
[03:05:12]  think of in order to get the, the, the superpower with preact. So let's like get, get some text here that we're, we're going to
[03:05:19]  do here in order to get the superpower where you're actually, um, I'm just going to do something like this, where we actually like get the text node to update
[03:05:28]  and only the text node to update, you have to pass the signal all the way through. So actually you have to, um, uh, let's make this,
[03:05:35]  let's make this children. It doesn't really matter. You actually have to pass this signal all the way through. So this actually has to be count like this. If
[03:05:43]  you want, if you want, um, preact to essentially get the magic. Right. But what happens, I mean, for something direct like this, this isn't
[03:05:55]  a problem because like you go straight into the DOM and it's going to work. But like, what happens if like someone was like doing something else here and like,
[03:06:03]  do you know, like, do you have to check if they like, what if they didn't pass count? What if they passed four? Like, do you have to
[03:06:12]  know whether you have to call it as a value or not? If you have, uh, uh, some kind of, I don't know, what do we call it
[03:06:18]  computed or something in here, you're going to have to be like, okay, is this, is this props dot children dot value? Or is it props dot dot
[03:06:29]  children? So it's kind of funny. Like they're actually pushing you to pass the signal through to get the performance. But then the, like you're kind of left
[03:06:39] , like the, the author, the component has to make the decisions. Right. And like, yeah, I mean, I see, here's the thing. I
[03:06:50]  was talking about as no the other day. Right. And I was saying types could be our way out of this. I think if we had a perfectly sound typed library where
[03:06:58]  we could use the types to inform the compilation, I'd be okay with this and be like, this is type signal or whatever. But, but like we would,
[03:07:07]  yeah, I, as an end user piece, I don't, this is not the, what I'd want to be dealing with at all. And I feel like these
[03:07:17]  things all compound when you actually put the whole picture together. Right. So it's both of those issues, both the, the idea of passing signals through and the idea
[03:07:31]  of how should I put it? The, the idea of like being able to compose very easily, just using functions. It just, everything is consistent at that point.
[03:07:44]  It's very, it's very clean. Once you, once you, once you treat it like that, I mean, don't get me wrong. This is why we
[03:07:50]  have the destructure rule, but like, I wouldn't back off of that for the, for the world. It's like the difference between being able to like not dest
[03:07:58] ructure versus having to deal with this is just, it's not even close from my perspective, but I know some people will feel differently. Yeah. Yeah. Signals
[03:08:12]  can be hoisted globally. Definitely. Like you can be like, it doesn't matter. I mean, if, if I understand what you mean, you're, you
[03:08:19] 're, you're just talking about like, like, can, can we actually, let's, can we just go back to the original? Are you talking about like,
[03:08:29]  like, can I do this? Right. Right. Yeah. It's, it's, it's interesting, but some people suggested this to me and I'm also
[03:08:49]  not a fan of this because I get why, where it's coming from, but like, it's, and this is again, the thing is like, is count the
[03:09:01]  value of count or is count the accessor? The accessor. And for me, count is the accessor. Um, I, I, I, it's
[03:09:10] , yeah. I mean, it's a subtle thing, but that the, that's it's, I don't view it as a getter. I view it as
[03:09:16]  the thing, which is probably really weird, but it's just kind of, I know from a learning standpoint, we do this because then people go, Oh, I get
[03:09:22]  it. It's a get and a set function. You make it really clear to people. But when you start like back to my silly example here, when you start
[03:09:31]  doing this and you go, okay, let's make double count. Like, like how far do you go down this rabbit hole? Get double count. I mean,
[03:09:42]  I guess it makes it really explicit, but at a certain point. Yeah. I mean, maybe, maybe that like gives a nice code uniformity. It's,
[03:09:50]  then you know, like know where all the getters are. I don't know. I, I've never been a huge fan of this because things can mix and match
[03:10:01] . I, it's interesting. Then you just like have a bunch of gets everywhere. Hmm. That's yeah. I mean, this is the whole point. We
[03:10:16]  don't, we don't care. That's, that's what's so beautiful about, about the approach we do. We don't care. You author your components.
[03:10:25]  If, if it's something that you think can change, because I feel like it's the component author who decides the capability of their component. So if it's something that
[03:10:33]  can change, wire it like it can change. If it doesn't change, who cares? Right. Yeah. I haven't seen this, but maybe drop a link
[03:10:58]  in the chat. Um, that's interesting, but yeah, I'm kind of going on a tangent here. I have, I have too many years of bias behind
[03:11:06]  me for why I'm, I'm, I'm just not, I'm kind of surprised by this choice, but we'll, we'll see. Cause I feel like
[03:11:13]  we learned stuff from react. Like we learned of that. Um, we learned that like unidirectional flow is good. And I didn't show this earlier when
[03:11:22]  I did our button, but if we start passing the components or the, if we, if we put it together, like we, we, we pass the getter and
[03:11:29]  setter through. We're basically tying our whole tree. Like any point of the tree could subscribe to this getter setter. And then any point of the tree
[03:11:37]  could update it and impact any part of the tree above it. Right. You're like you, you, the, the, this is what I call the butterfly effect
[03:11:45] . When some make some state, you pass it through three, four components and component three and some weird edge case, write something that causes component one to rerender. And
[03:11:56]  you're just like, what the hell's going on here? I hit it a bunch back in the knockout days. And when you're passing the getter set
[03:12:02] ter together and you're not enforcing the unidirectional flow, like this is, this is why talks exist. Like, uh, the, you know, the
[03:12:10] , the re like rethinking react, rethinking UI at Facebook talk. I I've showed this talk multiple times. The one I was at Jin Yang who talked about like
[03:12:20]  flux and control flow. Like I'm, I'm very surprised that, that like frameworks that came out and work through immutability, explicitness, unidire
[03:12:32] ctional flow. Like all the keystones of how we build UIs today would be like, oh yeah. And then we're just going to freely mutate stuff. Let
[03:12:39] 's go. Like it's, it's, it's, it's, it's surprising to me. I just wonder if, if, if we're just at this
[03:12:46]  point where there's like such a desire to get away from react, to differentiate, to be like, get away from the, like the heaviness and be like,
[03:12:55]  we're just making things easy and simple, you know, like get rid of the dependency raise and all this stuff. Like there's such a desire to go that direction that
[03:13:02]  we're like, we're, we're just like overcompensating a little bit. I mean, if some people were trying to figure out what I meant, I
[03:13:09] , I wrote a kind of cryptic, um, tweet, uh, the, the other day where I said, when we strike out from Kim before we tend to
[03:13:18]  overcompensate, put too much emphasis on differences, even if they aren't as important. This seems wasteful to me because the uncom, then is, is so
[03:13:25]  for a good reason. But if we don't make big enough gestures, are we doomed to go unnoticed? The pragmatist in me prefers to keep the
[03:13:31]  cycles tighter, saves overcorrection. It's like being on the inside track of a circle race, but maybe it's, that's just a lack of imagination. It
[03:13:38]  could also be that acknowledgement, everything stands on the shoulders of what Kim before. This actually is partially me talking about the fact that solid doesn't stand out when you compare it
[03:13:46]  to things like Svelte. You know, like people see solid, they see React, it's the same. And it was also me talking about the signals thing
[03:13:52] , because like, it's just like, how hard do we have to pull away from React to get noticed? When like, React's philosophies and stuff is, are
[03:14:01]  actually kind of good. We shouldn't forget that when we kind of like, step back to change our direction. Right? That's awesome. I'm glad like,
[03:14:18]  other people's experience matches mine. It's not going to be everyone's experience, but I, you know. Yeah, yeah, we get MobX. It was
[03:14:31]  interesting. Well, this is because people really wanted it. This is, I've talked about this before in articles too. Like a bunch of people saw React and saw the
[03:14:38]  technology, saw the BDOM and was like, yes, this is what we do. But like, that wasn't the part. I shared that Dan Abramoff
[03:14:44]  article when I did the React stream. It's like the good parts of React, aren't the technologies. That's what I've incorporated and brought into solid. React has
[03:14:54]  good, some good technology, I guess, but that was never what excited me about React. I mean, I have to admit, I saw what they're doing.
[03:15:01]  I'm like, it has to be slower. Yeah, I mean, every, I always joke about this that, you know, everyone can do whatever the hell they want
[03:15:14] . They can, they can do, they can take these primitives and use them the thing. But this is why I look at the defaults. To be fair
[03:15:22] , someone pointed out that .value has a performance improvement on the getter because you can use the object prototype instead of binding this to the function, which actually helps with memory
[03:15:33]  allocation, which helps with creation time. So, but I mean, there's so many things you can pick apart on that, right? I think I showed the Pre
[03:15:45] act benchmarks last stream, possibly. And I showed like the, there was like, like, I mean, I don't even, do I, do I have it
[03:15:53]  here? Do, do, do, do, do, do, do, do, do, do. Just from benchmark. Um, are we running? We might even
[03:16:01]  be running right now. We are right. Like just because something theoretically can, can be faster, doesn't always pan out there that way. Like this is like the
[03:16:13]  highest memory on this whole benchmark of the libraries I chose was the Preact signals. Um, because like, even if they have that optimization, there's other places to improve
[03:16:21]  and stuff. So I'm sure this stuff will all just get better as, as time goes on. Um, but like, yeah, I mean, it's, it
[03:16:30] 's never that simple. Like, like, like this is, this has been the challenge with, with the benchmarks and stuff. Um, and, and tech talk on
[03:16:40]  Twitter, cause people, people like to come in and talk about how they make something X times faster. And I just haven't had that experience in so many years and never
[03:16:51]  did. Everything was, you know, inch by inch, small piece by small piece. Like you only get to make the big savings. I feel like when you make an
[03:16:59]  architectural change, like, it's not like something that you just magically come across. Like, um, I know a month back, a few of you were all like
[03:17:07] , Oh, what's up with, um, what was it? Like, what's that framework? The, the fast feed on one million JS was a million. Uh
[03:17:18] , I can't search. Millions. Millions. Add millions. Millions. Millions. Millions. Millions. Yes. Right. I mean,
[03:17:33]  again, a 17 year old kid doing some amazing work. You go on the really slick website, probably slicker than any website I've ever made. Um, 11
[03:17:42]  times faster, blah, blah, blah. You know, all this kind of stuff. And you found this tangent. And then like, when push comes to shove, you
[03:17:51]  know, the keyed implementation wasn't there yet. So you dropped it. It finally did a non keyed implementation. And like this benchmarks on everything, but it gives
[03:18:02]  you an indicator here. Here is react. Here is millions use react. And here is millions itself. I have no concern with like, it's, it's okay
[03:18:16] . People like benchmark and find their own ways to measure and decide how performance matters. But like, when you go and go, I'm going to advertise. I'm 11
[03:18:26]  times faster than react. You got to like, put it on a balance on this. Like I like no individual metric here is 11 times faster than react. Um,
[03:18:40]  and on average, it's actually quite a bit slower than react with react and slower on its own. But I want to be clear. I want to be clear this
[03:18:54]  might be like a heavy handed look at this, but like, I, you see this all the time, right? Well, people kind of post, kind of post on
[03:19:04]  Twitter. And if it's like, Oh yeah, I did this performance thing. And then like in, in, it never kind of comes to fruition or when it does
[03:19:11] , you know, you know, strangely absent from the, from, from benchmarks, you know, which is fine. Like, again, you don't need to enter
[03:19:18]  it because maybe, maybe, maybe, maybe this is what happens. You claim performance a whole bunch and then you don't actually deliver on it. Right. Um, you
[03:19:27]  know, like things are always improving. So you can't like just hold it to what the standards today, but like, this is, this is a big part of
[03:19:34]  the signals conversation, right? Cause everyone's, everyone's like talking about how they use signals. Um, and things, I hate to break it to people, but react
[03:19:44] ivity is pure overhead. Reactivity is when you add reactivity to a system, you make it slower. That's how this works. What, what's compelling about
[03:19:58]  reactivity is it's a different kind of change model that lets you not do other things. So you, if you use reactivity, you can like not use a
[03:20:09]  VDOM, like that's why it's like solid benefits from signals way more than preact does. Like it's not, it's not even comparable because simply because
[03:20:19]  of what you, we don't do. And you know, um, quick is going to benefit from signals incredibly because what they can do with, with, with the
[03:20:29]  hydration, right? It it's, it's like the reactivity is incredibly powerful, but it is always going to be more expensive than the thing without reactivity, putting
[03:20:42]  them together. You can come up with like good compromises and good ergonomics and like make things nicer and stuff. But it is always going to be an overhead.
[03:20:53]  Right. But the, the thing is after the framework is more fun than efficiency. Yeah, exactly. You know, you want to make, you talk about ergonomics and
[03:21:07]  that's why we don't talk about performance very much with solid and talks and marketing stuff. We just, we, we, I talk about control. I talk about how
[03:21:15]  transparent is about how you can just kind of do what you expect. You know, which is, you know, a super powerful message and not talk about performance, but
[03:21:25]  it's, it's challenging because you get to a certain plateau where the performance is plateau. And you're like, it's not good enough. And you're like
[03:21:29] , it's not good enough. This is the challenge quick has been hitting. Right. Because like here, here, let's kind of put ourselves in Mishko's
[03:21:37]  headset phase here. He's come up with an architectural approach. Um, and there's others kind of playing around in this area too. You know, you have Marco
[03:21:46]  six, you have react server components, you know, some of the research stuff we've been doing in solid start and all that. And fresh sort of on the fringe.
[03:21:52]  We're all kind of playing around on the fringe stuff, but he's actually gone to a point where he's kind of going like, look, I, I can prove
[03:21:58]  it. I've, I've, I've gone a little further than everyone else. I, I, I've, I've got the stuff, but then like
[03:22:05]  people are like, like basically like, la, la, la. I don't care about performance. And it's like, well, what, what other angle do you
[03:22:13]  push at it? You're like, okay, well, the ergonomics are very similar to react and you get the performance. Is that enough? It's you'd think
[03:22:18]  it would be, but you know, people are still like, la, la, la, you know, like it, it's, it's a very hard sell on
[03:22:25]  performance, but sometimes it's a thing you got to hear. So like, but the problem is performance is such a muddled zone because like, if you took quick
[03:22:38]  today and put it in the JS framework benchmark, right? Like if you went, if you went there and you were like, okay, I'm going to go to JS
[03:22:44]  framework benchmark and I'm going to make a version of quick. I, I have an inside track cause I actually did this myself, but I'm not sharing results. They
[03:22:52] 're going to be official results. But I'm saying is roughly speaking, your, your quick, quick in the JS framework benchmark is going to probably be somewhere around,
[03:23:04]  around here-ish I'd say. And the challenge is like, this benchmark does not matter at all to what quick's doing. Like quick's like, look,
[03:23:16]  we can scale JavaScript and load and solve this problem that literally every large enterprise and e-commerce site deals with. But if you, as a developer go like someone,
[03:23:25]  someone approached me today and they're like, okay, I'm going to, I'm going to make a, I've got a benchmark. And they're like, I
[03:23:33] , in my benchmark, I show that Imba is nine times faster than Svelte and React. And, and I looked at the benchmark and I was like
[03:23:42] , okay, well, you're just measuring scripting time, not rendering time. Um, which is fine because people like look at JavaScript, but I'm like, no
[03:23:49] , let's measure the whole rendering time. Cause that's actually the experience the end user feels. And we, in the end Svelte and React are actually almost the
[03:23:54]  same. They actually got closer. And, and Imba's percentage went, instead of being nine times faster. Now, when you normalize it, when you
[03:24:02]  consider vanilla new stuff, it's like 15% faster or whatever in this specific benchmark. In fact, I cooperated. I went here, I went partial update and I
[03:24:12]  was like, oh, look, uh, Imba's right here. It's number three for this one specific benchmark. Imba is very, very impressive.
[03:24:18]  Like, look, solid's actually all the way over here. Like this is actually a very impressive number, but when you kind of holistically look at this, and
[03:24:25]  you go find Imba, it's like next to view, I think somewhere over here. Yeah. Right. It's still decent, but it's like, it
[03:24:36] 's, you know, you know what I mean? Like the thing is you can always focus in on it, like a single metric or a single thing and miss the full
[03:24:46]  story. So whether or not like quick is somewhere over here on performance or actually a little further. Um, it, it, it doesn't actually matter for what,
[03:24:58]  what they're kind of getting at. And I think this is a challenge with performance because performance is a meme. So if people do pay attention to you, they're going
[03:25:05]  to do something they can easily verify. And the problem with that easy verify and the same problem, actually, I got another example for you. React concurrent rendering is in here
[03:25:13]  now. Useless for this benchmark, but like, let's, let's do it. So we have react. Um, where are we react hooks somewhere around
[03:25:24]  here? React hooks. Yeah. So let's remember this react hooks here around one 76. And if we scroll this way, we will find react use transition over here
[03:25:40] . Here we go. So there there's, there's concurrent rendering. It's like when we moved from single core to multi-core CPUs, like, like
[03:25:52] , like some processes are only optimized for single core. Cause that's the way they're written today. And I think that like the performance conversation, we talked about the
[03:26:01]  gaps in the server rendering performance thing. Like all the benchmarks right now, like this is a pretty good benchmark for client performance, but it doesn't tell the whole story.
[03:26:11]  We need to get ventured for server thing. So it's only one piece of the puzzle. And, um, but it's still like a piece. I feel like
[03:26:20]  this is the, the, why, why there's this dread, right? Cause if you like work on something that maybe doesn't do well here, it gets over
[03:26:31]  amplified compared to the things that you do do good. So this is, this is a challenging balance for me because on one hand, um, I do like to micro optimize
[03:26:46]  and look at how like through a very, like a wide set of tests, you know, through different common interactions, how we could optimize for it. On the other
[03:26:55]  hand, you know, like this doesn't tell the whole story. Yeah, exactly. Yes. This is what I, yeah. The, and I feel like this is
[03:27:07]  kind of the problem we're going to hit with concurrent rendering and whatnot. So like, okay, you know, I, I, I, I'm just trying to
[03:27:16]  like, kind of put this in that perspective here because like signals have kind of become part of that conversation. And like, I already talked before how like the benchmark that
[03:27:28]  was used to, uh, around the signals, um, was really, really quite poor. But the thing is like, has anyone published a better benchmark? There, there
[03:27:36]  actually are a couple, but then they got pulled down. So like this is, we, we have to not only evolve our frameworks, but evolve the way we measure
[03:27:44]  them. Otherwise we'll just like only build towards a certain target. Um, sometimes I comment that the JS framework benchmark is kind of hit the end of its usefulness
[03:27:54] . Um, and I think it, it has on the, the hyper optimized level, anything like anything over here, essentially, you like, you know, there, there
[03:28:07] 's nothing to complain about. But I do think there's still value in understanding the cost of trade-offs and how that affects design. It's especially for the framework
[03:28:16]  developers themselves. So, eh, okay. So that was a little rant on, on that, but I honestly do watch this demo for quick. It is the coolest thing
[03:28:28] . Um, I wasn't sure they were going to go here. I wasn't sure they're going to drop the VDOM. This is what I always pictured
[03:28:34]  for, um, for, for how this technology to work. I have to admit, like, I saw this and I'm like, oh man, they're sniping
[03:28:41]  solid 2.0. Um, but you know, this, this, this, this is really cool. It's so cool that I can't not talk about it.
[03:28:49]  I forget someone in the chat here was like, you were the first one to explore this territory and materialize it into a library. Yet you were quite secure and hyping
[03:28:55]  others who mimic solids approach in their library. It's rare as everyone here is like this tool is creative and it's the best solution for everything. I mean, that
[03:29:01] 's a lot of pressure to try and be the best solution for everything. Um, I, I, I, I mean, that is the goal right now, as I
[03:29:09]  mentioned, this kind of MPA, SPA split, but like, that's, that's too much for, for one person. I'm, I'm very excited
[03:29:16]  to see progress here. I, I, I'm very excited what this means for solid, but like, um, this is really quite cool. All right. All
[03:29:27]  right. Um, yeah. Talking about multi-framework love. This, this tweet was a lot of fun too. Uh, finally got to do the Astro solid
[03:29:37]  co-tweet. Um, this, I don't know if anyone saw the Astro, uh, like, uh, your, how you know your teenagers talking about
[03:29:46]  Astro tweet, but, um, there, there was no BFF. So, uh, definitely was a lot of fun. Uh, okay. Where are we
[03:29:59]  going here? Uh, we are going to talk about the react thing in a minute. Uh, just want to make sure that I, that I've put some other stuff
[03:30:06]  away before we go there. Right. I'll talk about that. Yeah. I mean this, yeah, the answer your, your question here, quick, basically the
[03:30:17]  next day was like, yeah, we're ending the debate about MPA versus spa. These, uh, concepts lose all their meaning with resume ability. Um, and
[03:30:26]  I said, this is going to be a theme theme. We're going to see a lot in the next months. Last year we saw SSG and SSR collapse together
[03:30:35] . Thanks to edge functions and smarter caching. Resumability, hybrid routing, partial hydration, and react server components are all efforts to close the SBA MPA divide
[03:30:43] . Right. So like, I think this is part of a, a very big conversation and this is going to tie into some of our react conversations, but I just
[03:30:54]  want to put this out here that like, this is not just quick in a sense. It's not just react server components. There's a reason. Everyone is biting at
[03:31:03]  the bit here. I was, Suneel was talking about like the comeback of MPAs. We're already seeing that right now. Cause of Astro. Ast
[03:31:09] ro should be way more popular. Still like Astro is that like reset fresh air that we've been waiting for. You want to get rid of the complexity, use
[03:31:17]  Astro. You just, you just, that's how you, you know, reset expectations and get out of where we are today. I think we can do more than
[03:31:26]  what Astro is doing today. Astro might do more than what Astro is doing today in the future, but I know we can definitely do more than what Astro
[03:31:31]  is doing today, but we need that reset. And there's so many sites, so many things out there that they should just be using Astro. End of story
[03:31:40]  or Marco to be fair. Marco's had a harder time on the marketing thing. And I've actually told people that so many people should have been using Marco five that all
[03:31:47]  this time. But Astro's interrupt story with other existing frameworks and stuff makes it a little bit easier for me to just say that whole thing, even though like Marco is
[03:31:56]  very much and has been that way for like eight years. That technology, it's time for that reset, but that's not where the stops. And yeah, that
[03:32:07] 's going to be great conversation. Yeah, I mean, no one's actually there yet. I mean, this is this is all about hype building and vision stuff.
[03:32:20]  And I think there's a good balance to be had. I don't like I don't like vapor wearing it. I don't like demos that like show something and then
[03:32:27]  you never release it. But I think it's good to talk about the future so people understand where things are heading. You know, the same way we've been talking
[03:32:33]  about resumability and solid. You know, I don't have that yet. You know, it. Right. So like I think I think this is really exciting
[03:32:45] . But yeah, before I continue, actually, I got like a couple solid announcements. I just want to sneak in here. Solid query. Bam. I love them over
[03:32:56]  at Tanstack. You know, solid was the first other than react library to get that. And honestly, I don't know if you all have noticed. Let's
[03:33:06]  see if I can find the official website here. Yeah. Tanstack's query powerful async state management for TypeScript, JavaScript, React, Solid, View,
[03:33:17]  and Svelte. React, Solid, View, and Svelte. Yeah, I mean, I'm just. Yeah. You'll notice this theme here, but
[03:33:36]  big fans of Tanstack and what they've been doing for solid. And they give us they give us some nice props there. Props there. So I.
[03:33:43]  Yeah. This is this is really big for us. The reason I'm excited about this. I haven't talked about it much. Is that. Like. Solid start.
[03:33:52]  We have our own actions and server stuff, you know, our actions and server data and server actions, which is super powerful. Gives you that like remix style thing
[03:34:02] , but like with a little bit more power behind it. But like. The thing is, some people are still not going to do that. They're going to be like
[03:34:10] , I'm not doing progressive enhancement. I have this crazy app. I need. I need. I need. I need react query and I needed a full capability because
[03:34:15]  create resource is a great primitive, but it's not the full story. We needed to build something on it. So we built something that's like a good, happy.
[03:34:22]  I'm building a, you know, app like, like, as I mentioned, like a remix plus kind of scenario, but some people are going to still need the
[03:34:30]  heavy guns. They'll need GraphQL. That's fine. They're going to need a solid query. And because we built our primitive as server, not like a get
[03:34:39] , not create server props, not loader, all that solid query is going to feel first party in solid start. It's literally going to feel like we built the framework
[03:34:48]  for it. Like we're like, like people are going to come in and be like, oh yeah. Yeah. Like, isn't that how solid start works?
[03:34:54]  Like that's, that's how primitives make these other third party libraries feel like they are like, like the framework was built with them in mind. And I am super
[03:35:04]  stoked for this one because I have a feeling that some people will just come up with opinionated stacks around solid start where they just like, this is just installed. And
[03:35:13]  that's the way it is, you know, like the T3 stack equivalent for, for, for solid start. It's going to be like, oh yeah. Yeah
[03:35:19] . This is the query thing. And no one will even bat an eyelash because it's going to work as nicely as all of our native methods. It's going to
[03:35:25]  be just as smooth. You're going to be like, oh yeah. Yeah. We just don't do it that way. And it works just as good. And that
[03:35:30] 's just, that's just the experience. So I am like, this is, this is so awesome. Yeah. I mean, for some people, what's all
[03:35:39]  starts going to do is actually more than enough and it's incredibly powerful and simple and stuff. But what I'm getting at is like, this is for those who need that
[03:35:50]  next step. This just fits seamlessly. It can actually fit seamlessly side by side because we do granular things. You can literally have a route section and because it's not
[03:35:58]  like, like a data loader or whatever, you can literally go one. I'm going to do one of my data sets with, with a solid query. And I
[03:36:06] 'm going to do my other data set with, with a server data. And you can have solid query use a server function and they can both always fetch on the server and
[03:36:14]  they can just use their own system. Like if you want to, I don't know necessarily why you'd want that scenario, but you can literally mix and match and it
[03:36:20]  works. It will just feel like native solid start. That's, that's like the power of, of, of what we're doing here. And I, I
[03:36:29] , this, this plays into this plan so nicely. So yeah, this, this is awesome. Jack's back to making some awesome solid content, 60 frames per second audio
[03:36:42]  thing. This is a cool little demo showing like how you can like get like flawless animation performance with solid and how audio kind of visualizer controls work. I think he
[03:36:52]  pulls D3 in and stuff. Definitely check it out. Um, yeah, I got to plug this while we're going. Um, if you're Canadian, I guess
[03:37:00]  East coast, come, come see us in Montreal. Um, I won't be there, but David's going to be there. That's October 5th. Uh,
[03:37:08]  I believe. So yeah, it's, uh, we're going to have our, I guess this is our third meetup. We're, we're, we
[03:37:15] 're still planning some ones. I think there's a, there might be a Miami meetup in the works. Um, a lot of really cool projects like this Kan
[03:37:23] ban board. Um, I like that David did this. He finally shone some light on solid primitives, which is an amazing library. People talk about lack of ecosystem
[03:37:32] , but they don't like, we don't do a good time. I was good enough job advertising it. We, we, we, we show people's projects
[03:37:38]  and stuff, but solid primitives is like react use or view use. It has about 140 primitives. Um, and it like, it's actually like, this is
[03:37:47]  like your tool belt. Like you could, when you pick up solid, you might not have every ecosystem library. And you know, we got smattering of component libraries
[03:37:56] , smattering thing, but all those kind of like glue pieces, like, I don't know, internationalization, all these like little pieces, um, are in this
[03:38:03] , in this repo. Right. Um, yeah, talking about this cool stuff. Mechabricks is rebuilding their homepage and solid. And how about this native
[03:38:17]  script solid? We already saw, I think Tori and we saw capacitor. There's, there's just getting so many ways to build like mobile or native apps using,
[03:38:27]  using solid. It's really like, this is just not a, this is not the boundary. It was in the past. Um, I haven't used this one yet
[03:38:35] , but I think this is very cool that we, we have legit ways to actually building mobile. Yep. So, okay, there, there's my little solid plug
[03:38:46]  in the middle. Let's get, let's get back on, let's get back on topic. Um, so yeah, I, just to make sure, um,
[03:38:57]  here, should we start here or should we start here? Um, I feel like actually we, we should probably start here. Um, Dan had a kind of big
[03:39:13]  talk about the layout RFCs and the, the, he was, he was kind of comparing Gatsby released a partial hydration RFC, which I'm gathering.
[03:39:27]  I didn't read it too closely. Actually, you know what? Should we look right now and see what this is? Cause you're like, what, why is
[03:39:32]  Gatsby working on partial hydration? Aren't they just going to use server components? Like the rest of us. We're happy to announce partial hydration in Gatsby
[03:39:38]  five. You gain the ability to mark specific parts of your site as interactive while the rest is default. No. So they're, they're literally adding their own islands
[03:39:46]  framework. Are they using server components? Let's find out server. Okay. Okay. No, it is powered by server components. We implant the latest draft spec.
[03:39:58]  Maybe they're just like doing it in a constrained way. Okay. Okay. Anyway, this, this conversation about Gatsby and partial hydration ended up kind of getting
[03:40:11]  over to here and Dan starts talking about how partial hydration and react server components are different. Right. And he's like, Oh, I know everyone loves partial hydration terminology,
[03:40:24]  but it always breaks my brain because in our model, the entire tree gets hydrated, not partial. It's just the server prebuilt ones have no code. I dislike
[03:40:31]  that people think of it like isolated islands, which is kind of funny because this is exactly the opposite of what Seb was saying last week. Um, and then someone talks about
[03:40:43]  how I differentiate selective and partial, but he's like that threat isn't about server components, right? It's, it's about hydration. Blah, blah, blah
[03:40:50] , blah, blah. Okay. So the point is that it's roughly the same characteristics as partial solutions people are excited about, but without the artificial constraint of isolated parts,
[03:40:59]  we're actually tied to a tree. It's just that the tree only exists on the server. And I was like, well, he's like another way to see
[03:41:04]  is like fractal islands. You can nest them as much as you want to have static parts in between. And the client parts can still communicate because they're one tree concept
[03:41:11] ually. They're not like jQuery widgets. And I was like, Hmm, everything I've seen suggests that the trees are similar. I was going to say like everyone
[03:41:19]  who's been watching my demos knows my, my silly partial hydration example, right? Like we, we, we saw this earlier on stream, um, where if you
[03:41:28]  go here, these are static parts because we don't serialize or send any of that between tree tree rendered on server static parts in between still works. So I,
[03:41:42]  I, I kind of got into a discussion with Dan about this. Um, the key to me is the ability to refetch and have the server be reconciled.
[03:41:50]  Yes. Server components are different because you can re render the server stuff. And he's like, by nesting, I don't mean nesting server includes, but in
[03:41:56]  the ability to pass server includes into client components. I, a client tab bar can receive several tabs of children and each tabs content is, is from the server. And
[03:42:07]  yeah, I was like, yeah, yeah, yeah, yeah, yeah. This is exactly this. If you saw the authoring each toggle component gets past, or sorry
[03:42:16] , each client toggle component gets past server rendered, uh, uh, uh, comic components that have toggle components in them. And then they get past server rendered thing.
[03:42:27]  It's like, it's crazy recursive math, but you can see that it's actually very similar to what, what he's describing. Um, so we, yeah
[03:42:38] , it's always hard with these things after the fact, cause you can like go, where did this conversation fork? Where did it fork? Yeah, here it is.
[03:42:47]  Cause you can recursively nest islands through the child projections. I've tested every islands implementation and only fresh didn't support them at the time. And I'm sure fresh
[03:42:54]  probably supports them now. We should actually revisit those broken betas for hacker news and see if we can actually make an updated version and have them all working. Remember quick city
[03:43:03]  didn't deploy fresh. Couldn't do recursive partial hydration. Um, we hit some other interesting problems. I think nuxt had a small bug. Um, many frameworks
[03:43:13]  treat the top level non Island component as separate pages, but that isn't necessary. They can be, have a shared route. There isn't much incentive today, but
[03:43:20]  I expect that to involve in some cases. So basically I'm saying like every islands framer can actually do this thing that Dan considered a differentiator for react server components.
[03:43:30]  Um, and I think that's interesting because Dan was like, Oh, it's an example. Cause like, he's like, he, he wasn't expecting that,
[03:43:39]  which is good. Cause I I'm hoping this is where the conversation's going, right? People generally don't have time to look in depth and know everyone else's
[03:43:47]  solution. So it's fine that Dan from react is working on react problems and not like dissecting Astro, but, but essentially, um, he did identify something that
[03:43:59]  I think is actually kind of interesting. He identified that we don't pass context through and I realized that it was actually something really easy for us to do. Um,
[03:44:05]  and I was like, I've actually kind of pinged Nate from Astro and I was like, Hey, can, can we make a demo for this? Um,
[03:44:11]  but essentially react expecting the tree to be like that is geared up that way that they pass context through the islands where, where we don't do that. Because most like
[03:44:23]  the right now Astro is set up to be like, how should I put it? It's Astro set up to be, um, like multi framework. It like
[03:44:32] , doesn't care about those kind of communicate communication, but it's completely possible. So like I've definitely was going to make an Astro demo for it and possibly with
[03:44:40]  solid start, um, show how we can pass context through the islands. So you can do hierarchical thing back. I think it's interesting because people aren't authoring
[03:44:47] , um, apps like that today, but it's again, why I like the hacker news thing. Cause I think it's inevitable with islands that you end up author
[03:44:55] ing apps this way. If you want to get the best partial hydration. So like, I think, I think, I think a certain point in this conversation, I'm
[03:45:13]  not sure I'm going to find it, but eventually we get to this point where, where Dan goes, okay, like lay it to me straight. Are you guys
[03:45:20]  at least considering the fact of like getting rid of the page reloads? And, and essentially I'm like, yeah, everyone is looking at it. And I think at
[03:45:32]  that point, yeah, here we go. Do you envision ever supporting refreshes from the server? I feel like without that insight, it's unclear how far it's worth
[03:45:38]  going down this road. And I'm like, you know what? Completely. And I talked to him about some of the techniques and stuff that we're doing right now
[03:45:44] . Um, I'm actually going to demo a little bit of that at ViteConf. Um, but it's similar to the demo we already did for the solid start
[03:45:52]  stream. But I felt very good about this conversation because I think at the end people start realizing that we're working on the same problems. You know, it's not
[03:46:01]  about evolutionary ends. You pick up from last stream. Um, so yeah, I, I, I think this, this was, this was a good conversation because Dan
[03:46:12]  pointed out a real gap and something that I want to address in, um, kind of more partial hydration solutions. Things like Marco and quick obviously are that mindset and they
[03:46:21]  do it, but stuff like Astro and like our solid start demos don't do this kind of stuff yet. And on the same time, I think we, we helped
[03:46:26]  him gain a better appreciation for what we're working on. So, um, that's always a plus. Um, okay. I might've kicked up a little, we
[03:46:37] 'll, we'll come back to react in a minute. I might've kicked up a little bit of dirt or stuff in here. I, I, I was actually being
[03:46:45]  completely honest. Um, this, someone made this like very simple login app with Svelte and it was like so simple. You went in and you're like,
[03:46:53]  okay, this is Svelte kit, like with the new routes and everything. And the app basically shell, nothing in it. Right. You go in, you have
[03:47:02]  your routes and you have your like main page, and then you have a login page and a signup page. Right. So this is like, you're logged in and
[03:47:11]  then this is how you log in. This is how you sign up. It's a very simple app. Right. You know, like, okay, simple app,
[03:47:17]  whatever if it's the link. But then when you go into something like login, it has a page server and a page Svelte. And I looked at this
[03:47:23]  and I was like, there's like no JavaScript in here. It's just like, get me the types for the action and then pass it to this form. And then
[03:47:32]  on the server, you have all the JavaScript code that does all the form handling. So this is progressive hands. So this is Svelte kits version of the remix
[03:47:39]  thing or the solid start thing that we've been doing. Like they're building in as a nice primitive, very simple pattern. And then when I go back into signup
[03:47:45] , it's the same kind of pattern. And we have a dot server and a dot Svelte. And you can, you know, this is the Svel
[03:47:52] te kit routing. And I said to Rich, I'm like, when I looked at this, I mean, you can really appreciate this even in GitHub with my view blown
[03:48:01]  up. When you go here and you go, okay, and you get in, you're like, okay, here's my page. This is my view like code
[03:48:08]  because there's basically no JavaScript in it. And then like, here is my stuff. And basically in an IDE, you could see all the code in a single screen.
[03:48:17]  Like there isn't that much code. And I was like, the lack of boilerplate, almost no client JS and the push of logic to a server and separate JS file
[03:48:25]  really brings back MVC vibes. That like looking back and forth between two files written in completely different technologies to complete the picture. And what did I say here? Like
[03:48:35]  looking at the Svelte file and then you look at the, you know, look at the form in there. And then what's the action. Then you look at
[03:48:40]  the JS code and you can go back and forth. And it's a different boundary, but I remember creating dozens of folders, you know, back in the day for MV
[03:48:46] C where I had like an index JS or is actually index coffee. I had to shorten it because Twitter length, view.pug and style.stylus. And seeing
[03:48:53]  the unified folder structure felt very reminiscent. You just had these folders that all had files with the exact same name in it. And each one was split by technology. Like
[03:49:02] , like, yeah, it was like coffee script pug stylus. All files with the same, same name, right? Index.coffee, view.pug,
[03:49:12]  style.style or whatever. And then just a billion folders of that. That is what Svelte, I mean, that, that is basically what SvelteKit
[03:49:22]  is, right? Open the folder, page.server, page.svelte, you know, and you're actually incentivized to go this way when you
[03:49:32]  have stuff like Svelte language. It's so terse that you like, like coffee script or all those white space languages that it actually, if you develop like this
[03:49:40] , you almost never need to scroll. Obviously, if the size of this maybe gets too large, you need to scroll. But generally speaking, with the terse enough
[03:49:48]  languages, you almost never need to scroll. And this is a legit development experience. I thought it was like really interesting, honestly, because like on one hand, I am
[03:49:58]  all about co-location and everything I've been doing has been about like making the co-location thing because it's like how I unlock what I want to accomplish
[03:50:05] . But it's interesting because he was like, he's like, this is very deliberate. Our experience has been co-locating, client server, data fetching
[03:50:11] , render code, leaves considerable confusion about what's happening and what code goes where. Reasonable people can disagree about where the boundaries lie. But our design is empirically based
[03:50:19] . So he's done the studies, so to speak. And some people are like, you know, this is interesting. Other people are like, I don't know about
[03:50:27]  that. But, you know, how did you measure it? But I mean, I'm probably not going to find it, but someone further in the thing thought it
[03:50:38]  was really interesting how solid prioritizes flexibility where Svelte prioritizes restriction to streamline developer experience. Like it's a very deliberate choice because like, as Nikhil explains here
[03:50:51] , he's like the cool thing about what solid does with the co-location is you can always just not co-locate. So you can actually do either
[03:50:57]  and it's, it's not much overhead and you literally can, the team can choose how they want to do it and you can maximize it for your use case. And
[03:51:04]  you can start together and then build out and do this and it's dynamic. And, you know, these are all things that we like for people who don't use S
[03:51:10] FCs. This is like why we love having multiple components in the same file. Um, why one of the reasons I love component lists. I like the fact that we
[03:51:17]  can like kind of just build stuff as we go and those boundaries don't matter. And then we learn and we build and like, that was my experience. And I
[03:51:23]  loved that because I worked in startups and I worked in things where, you know, the, that kind of basis where things are dynamic. And you're like, you,
[03:51:31]  you, things grow, things change. But on the other hand, if you're working enterprise, you know, the angular thing, you know, and like literally you just
[03:51:39]  go, go in this folder. There's three files in it, put this here, put this here, put this here. It's attractive. It's probably why
[03:51:45]  Next.js has gone the way of having like their folder based routing too, where they're just like fallback goes here. Placeholder goes here, do this. Like
[03:51:52]  I, I honestly think that it's terrible, but like, I wouldn't want to use that, but you got a team of 200 people like, and you're just
[03:52:04]  like, you know, put this in bin A, put this in bin B and put in bin C. Like it makes a lot of sense. Um, and to
[03:52:11]  be fair on the Svelte side, there is like, once you're already in single file components, you're doing that kind of split. If you're terse
[03:52:18]  enough and you get in the single file, like it is actually a really enjoyable developer experience to, to be able to never scroll and just like switch between files. Um,
[03:52:28]  it, it, it's different. And maybe because of the way, like we can go through code now with a VS code, you know, like trace through definitions,
[03:52:37]  all that. It's not as powerful as it was for me back 10 years ago or whatever, or 12 years ago, but like, I can see positives on that
[03:52:44]  side. But it, so it was just interesting, like how deliberate these kinds of framework choices come in. Yeah. Yeah. I mean, don't get me wrong
[03:52:53] . I think file system routing is important. Although there's some friction against that too. Uh, TanStack router is, uh, doing some incredible typing on parameters that
[03:53:07]  you just can't really easily do with file system routing. You'd have to use like type gen and stuff. I, I don't think we can give up type
[03:53:14] . Uh, I give up file system routing for that, but it is interesting. I mean, uh, there was a tweet where people calling like the new hidden spa
[03:53:23]  mode of Astro where they're like, people are like building TanStack apps as like a page in Astro. And I think it's interesting because like on
[03:53:31]  one side, I'm like, you're not really giving like, the thing is TanStack is so powerful that it could be just a meta framework itself. It's
[03:53:37]  built on very good primitives, but like on the other hand, you're like the, the framework isn't really helping you here. Like in a sense, a
[03:53:44]  next or a remix or whatever, like, or whatever, it's like a streamline your experience and be able to like leverage it more for the spa case. Um, but
[03:53:51]  it is interesting that there are definitely people who are going to put a non file system router inside of server file system router. So anyway, um, yeah, I think
[03:54:06]  I thought that was an interesting interaction. Um, and you know, the, it, it, it touches on a lot of, uh, highly opinionated places, but
[03:54:23]  I, it is interesting to see the, what I couldn't call the isomorphic MVC. Um, essentially because, you know, classic MVC, you
[03:54:33]  know, things are all like either on the client or on the server. And now we have an MVC where it's split across client and server. So, you know
[03:54:40] , that's interesting to me. Um, yeah, I don't know how much I want to talk about performance here because we already talked about performance, but this did come
[03:54:50]  up. Um, people were asking about the cost of closures and this feels very tied in to, um, the discussion we had about. Like the dot value performance
[03:54:59] . And, uh, I, I thought it was really interesting. Cause the, the, for those who don't know Matus, uh, he, he works on
[03:55:10]  like X state. Um, he's been working tirelessly to get the solid X state integration. And it's probably like the craziest solid integration I've ever seen, but
[03:55:19] , uh, it's amazing. And he's like, well, should I be worried about closures? When are closures? Okay. And the thing is,
[03:55:25]  it's hard to answer the general terms beyond. They're kind of okay, but not for using them, but, but not using them is probably faster. I love this
[03:55:31]  response. Um, if you get a chance, uh, maybe I should just post this in chat. This is like the, one of the best performance conversations I've
[03:55:40]  ever had because it's so noncommittal, but yeah, maybe this is the real tweet we want. Amdahl's law hits hard when looking for hot
[03:55:49]  paths and all of those little, well, it doesn't really matter here. Perf pessimists, pessimizations. I love it. It's the opposite of optimizations
[03:55:57]  really do add up the most. It mostly applies to working on mature projects, of course, where the low hanging fruit are already picked. Looking at hot paths certainly makes sense
[03:56:05]  for first optimizations of a prototype. Like basically he's saying, it's like not even worth trying to optimize for the hot path. Um, and he's talking
[03:56:14]  about like cuts by a million daggers and stuff. It, you know, so to speak, I, this just reflects a lot of the conversation we've had about performance
[03:56:24]  on the stream. So I found it really cool. Um, yeah. Yeah. For, for those of you who didn't know, we've been working on X state
[03:56:32] , uh, solid integration for months now. And it's, it's crazy because it's going to have fine grained X state updates. I don't know.
[03:56:41]  No other library would like right now they all do just like redux style. Like, you know, just swap out the state kind of like selector poll based kind of
[03:56:48]  stuff. But solid obviously wants that fine grain, like really leverages it. So, um, Austin, who's working on it with Matusa and they're going through
[03:56:54]  it. They're actually, you're going to have an X state where when you do the state changes, it can trigger just the pieces of state fine grain that update.
[03:57:02]  It's the, it's one of the coolest. Yeah. I mean this, in my opinion, maybe they'll bring stuff like this to view in the future or
[03:57:08]  whatever, but that's the coolest X state integration to date. Um, from that perspective, I, it's really, really awesome. Um, fine grained X state
[03:57:17] . Okay. Uh, one more react topic. It's so funny cause I, I wasn't, I I've been following this issue about use event. Um
[03:57:32] , and do you know why I've been following this issue about use event? I'll tell you why I've been following this issue about use event. Maybe cause I
[03:57:41] 'm too lazy to not follow it, but someone June 22nd decided to tag me and be like, Ryan, could you comment about this one in one of your streams?
[03:57:49]  Which means that every time anyone else got into this crazy discussion, I got notified and I probably could have just unnotified myself, but it was just funny. I just
[03:57:57]  like, I got right in there. Um, essentially, uh, use event was really exciting for, for folks, uh, in the react client. Cause it finally
[03:58:12]  gave like the, maybe the opposite to use effect and made it very clear, uh, way of like basically getting rid of a lot of the really weirdness you had around
[03:58:21]  a referential parody. Um, when you're like, like doing things that you wouldn't expect to cause re-renders. Um, and basically it caused a
[03:58:36]  bit of contention. First of all, on the naming react likes to pick naming. That is contextual. I like this about them. They don't just go like,
[03:58:46]  they didn't make like use effect and then made like a bunch of options on it to be like layout effect, uh, immediate effects. In fact, like, like I
[03:58:54]  hate those kinds of APIs. If I can avoid them and no use resources or create resources, one of those kinds of APIs to a certain degree. Um, and that
[03:59:01] 's why I've struggled with it so much because I like, there are too many pieces to it still even to get the base functionality. But use event is a very clean
[03:59:11] , um, kind of function. And we've only talked on stream because of Fabio's hilarious joke where he implanted use event in solid and it was literally just
[03:59:20]  a function calling itself. Um, but I think it was really compelling for people on the, on the, on the, on the react side because like it finally like
[03:59:32] , oh, this is like the directed way of how to do this thing without doing some crazy stuff. And people were already kind of doing this out in, out in
[03:59:40]  nature or whatever, out in the ecosystem. But like react having a primitive definitely drew the focus. Then, um, I, I remember getting a notification or whatever that
[03:59:48]  wouldn't, and Dan's edited this now. So I can't get back to the original text, but he basically said that like, Hey, we realized that we were
[04:00:00]  trying to solve two problems here. And we probably were wrong because people are going to abuse this thing. Like we realized as soon as we give them that they're just
[04:00:09]  going to use it for everything. And it's just going to be like, not the way we want them to develop apps because basically use event is kind of like on track
[04:00:17]  in, um, in reactivity or whatever. Like it just, it kind of like, it's just like this super powerful thing. And it, I mean,
[04:00:24]  I've had conversations in the past where, um, uh, like essentially, um, like Evan, you like, let's see if I can find this on track view
[04:00:41]  three. Let's try to get hub. I don't know if I can find the issue or view reactivity. I basically, someone asked for on track in view
[04:00:50]  three and I was like, no, no, you're not getting on track. Like they had like an underlying, like, like stop and start. And someone's like
[04:00:57] , well, can we get a nicer API? And he was like, and Evan's like, no, I don't even want to expose this. He's like,
[04:01:01]  if you want to explicit dependencies, like make explicit dependencies. We don't want to use on track. And I could get the argument there because, um, on track is
[04:01:11]  like, just like, screw you. I'm going to like a lot of times you shouldn't be on tracking when you think you should. It's easy to abuse
[04:01:20]  it. Right. And essentially, um, Oh, interesting. So we can actually see the original. He came in and was just like, you know what? This is
[04:01:35] , this seems like we're like getting ahead of ourselves. We should figure some stuff out. And he's like for, so he's like for the optimization size, we
[04:01:41] 're doing the compiler. It's not clear if this optimization describing this RFC would still be impactful when the compiler's there. Like basically we wouldn't even need it
[04:01:48]  anymore. And so he's like for now, we're just going to shelve it and maybe do something a little more scope down in the future that supersedes it.
[04:01:58]  Actually, why is this, this text doesn't seem that different. this text doesn't seem that different. Hmm. Edited two days ago. Can I not get
[04:02:07]  the three days ago version? Huh. Okay. This is. Okay. This is just, okay, whatever. I'm not, I'm not going to look. Whatever
[04:02:14] . Okay. So, um, he basically said, but like, he basically was at the time was just like, Hey, we're, we're like, we
[04:02:34] 're probably done with this. We'll figure out how to do it a different way. So like most like, I like, that's, this is why when I
[04:02:44]  saw the tweet from, uh, uh, where is it? This tweet, I was just like, I, what I've picked up on was not this. I was
[04:02:53]  like, this is, they're, they're doubling down in public about the compiler. Last time they told us about the compiler, they were like, um, this
[04:02:59]  is something we're looking into. It might not work. And then in June, they did the kind of like a little update on like a kind of side article that I
[04:03:05]  don't think a lot of people paid attention to. And this, they're just like, yeah, don't worry. The compiler is going to take care of it.
[04:03:10]  Like that, that's quite an evolution on the messaging around the compiler. Of course, like if you go look, you'll find like Theo tweeted use event is canceled.
[04:03:18]  And then like, you know, two hundreds of people are like, well, blah, blah, blah. That was like the best part of react. Solid suddenly looks
[04:03:25]  better. You know, like a whole bunch of tweets, like silly stuff like that. And, um, yeah, I mean, yeah, I, I've got to
[04:03:35]  say like, they've changed the language. And I guess, cause then being like, no, no, we're going to like review it in the future. When the
[04:03:42]  compiler gets further along. Yeah. Probably means they have a car for years internally. I don't think for years. I know that they give the impression that they're like
[04:03:48]  way ahead on it. I do believe that last December when they showed the effort, that was pretty current. I, that was like, like, we've, we
[04:03:55] 've got an idea. We're prototyping it. I'd say the timeline there. I don't think they, they wouldn't have, the tone of the talk would
[04:04:02]  have been a little bit different if otherwise, but yes, I met, they've been working on it and probably, and not just the one guy. Like, I'm
[04:04:09]  sure they have a, like a small team working on it. I mean, I, it's really interesting to know how face, uh, react works at meta these
[04:04:16]  days, because like the core team has kind of, if you notice there's less of them now and they didn't really replace themselves. I think there might be like four
[04:04:23]  people now on the core team, but they're still turning stuff out super fast. And they're, and they have people working in other companies that might be still core team
[04:04:31] , but they're like not working at meta. So I, I, I've got the impression that the, they've got like, I'm, I mean,
[04:04:38]  I did talk to one meta engineering. He was kind of like a little peripheral more on like the native side and talking about like, there are second tier, not core team
[04:04:45]  teams working on these kind of initiatives. And I wouldn't be surprised if the compiler was one of them. Like they, I'm sure they have like a, at
[04:04:51]  least a small team working specifically on the compiler that isn't like Andrew or Dan or, or Jesse or whatnot, or, um, I think it's Jesse. Anyways,
[04:05:02]  like, uh, like there is, there is work being done here and it's clearly real work. Um, so yeah, compiler, um, which is super, super
[04:05:14]  interesting. super interesting um obviously because like there's multiple things sort of lining up um there's a comment here about how like react is changing what it is but i think
[04:05:28]  that the writing is on the wall that if you read any of the new beta docs you know that you're coming up with new ways to explain how reactivity works but yeah
[04:05:39]  this this is this is this is this is this is you know like things are changing and they're you know i mentioned last week that the conversation got been getting a little
[04:05:50]  bit spicier more recently i feel like uh we're gonna see some big announcements coming pretty soon yeah so um yeah i mean i think i think that pretty much um covers most
[04:06:08]  of what we've been doing this week in javascript um a lot of stuff on signals react is always pushing the boundaries and causing some interesting conversation quick had a really
[04:06:18]  good week and uh i'm i'm looking forward to what we do next week uh let's catch up on some comments here remember you can use react for a
[04:06:45]  cdn yeah yeah we're gonna have the standard jsx transform i mean these things all change come it it's one of those funny things and i think we talked about
[04:06:58]  previously where like standard jsx transform isn't even like the standard one that was before these things keep on changing like tools that kind of like lock into like that specific opinion
[04:07:15] ated path aren't going to be able to keep up with innovation everyone's going to have their own custom jsx transform at some point my opinion we'll we'll see
[04:07:24]  but i think so um yeah i mean this is this is super interesting zone i mean this is why i was looking at the type stuff with uh esno and all that like
[04:07:37]  we've kind of all decided that compilers are what we have to do but even if you decide what compilers have to do you don't have to get
[04:07:45]  to that zone where you like the authoring experience gets too far from it like we we use compilers as fabio's pointing mostly for ergonomics not as much for
[04:07:56]  performance except for when we do use it for performance like the hydration stuff that quick and marco are doing but a certain question is like could you build an authoring experience closer
[04:08:06]  to what you want the compiler to output and would that be like nicer because of transparency it's hard to say like solid in a sense is an example of that where you
[04:08:15]  we write a little bit closer to what the idealized compiler would would output like we we we say these are the things that updates and they update fine grain and because of how
[04:08:25]  much closer it is to like how things are going to end up in that idealized model of how those updates work it's simpler in a sense like it's it's more
[04:08:34]  transparent but like where we're going for with quick and you know marco's hydration to a certain point we're getting away from we might be getting away from that again
[04:08:46]  and resumability because we were like we we need to undo closures and like you're undoing a lot of people's code what like what if you could write components
[04:08:53]  that didn't have closures um i was talking to someone the other day and they showed me an idea they had for that and i was like oh that's interesting like i
[04:09:01]  don't know if people go for it like like solid it's been a long uphill battle to make sure the ergonomics are just right and and tweak that and i mean quick
[04:09:08]  has gone through that to a certain degree um as well like they've gone through huge actually on the ergonomics side but there is a question you know again about if are
[04:09:17]  we okay with the abstraction or do we need to get closer to what the final output is like if you could write and author your javascript components without closures like res
[04:09:27] umability would be a lot easier and the mental model would be perhaps a lot easier as well so like i'm not saying i'm gonna just like change the way people author
[04:09:38]  stuff i'm just i'm just pointing out there that like it's it's not as simple as just like compiler solve my problem compiler build me an app that's not
[04:09:49]  that's not a real thing at least not today um so we we need to kind of like consider what the costs are and how they affect us today magic should be just
[04:10:04]  if it's crockable in the way that we use the hand waving exactly i feel like that's something that we do actually really well on with solid that's like one
[04:10:12]  of the strengths is is is is that aspect which is why i think you know i talked to mishko and he's and he's like well how do i convince people
[04:10:21]  quick and i'm like it's not about performance the reason that solid has kind of jumped off isn't just because it looks like react because quick looks like react it's
[04:10:27]  also because we've presented a very simple mental model um and like it just it's not people who are familiar with react don't get me wrong it's like freaking mind warp
[04:10:41]  but it's more of like once you get it it's so consistent and just like make like it just follows that you're just like oh like of course it does that and
[04:10:50]  i and like it doesn't do that much heavy compilation it actually just runs the way that you'd expect it to run so yeah i i think uh yeah i i i
[04:11:07]  do think that like this is a difficult line to balance right and i i've been trying to balance it myself uh a lot as of late to kind of get a feel
[04:11:23]  of um where we should go you know and it's it's not so cut and dry i'm still researching it um i'm i'm hoping that uh you know we
[04:11:39]  find the right balance um i think we are um i think i every time i see new improvements um that that have kind of been going on in this ecosystem i'm convinced that
[04:11:57]  we are actually um like i see i see a path forward again i don't know if it's the path forward that everyone's going to like but i see a path
[04:12:04]  forward but you know what i don't have to stream six hours today i think we're actually pretty good on everything we had a great guest we had a great conversation we had
[04:12:13]  a great this week in javascript you know maybe we save some stuff for uh for next week um next week um our stream we're actually going to be covering ag
[04:12:23]  grid a solid ag grid a big enterprise thing obviously i've been talking about how we've been getting like some really good key integrations like most of the tan stack stuff we
[04:12:32] 've been getting like uh um uh sorry like all these like native platforms like a lot of really interesting things that i didn't even know about stuff like fable and i
[04:12:45]  think reason ml and like f sharp compilers and just like there's just been a lot of expansion on what you can do with solid um more than i could ever imagine
[04:12:55]  and um i think a lot of the you know between solid primitives and and you know these key ecosystem pieces it's becoming more and more of a compelling story so yeah
[04:13:06]  we're gonna take a look at ag grid um next week uh on stream so i think it'll be a lot of fun anyway uh what should we do here uh theo
[04:13:16]  is still running he had to go interview ben awad though i think that's actually done now um so let's let's just look the the 10 of you on twitch let
[04:13:24] 's just go raid theo i think he's actually on break at the moment but um let's and let's wrap that up for tonight or this afternoon or wherever it is where
[04:13:35]  you are so thank you all for uh for joining me today and uh see you all next week all right just doing the raid