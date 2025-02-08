---
showLink: "https://www.youtube.com/watch?v=veKm9MDVVg8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Functions & Server Actions"
description: ""
publishDate: "2023-12-02"
coverImage: "https://i.ytimg.com/vi/veKm9MDVVg8/maxresdefault.jpg"
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

[00:00:00]  Hello everyone, and welcome to my stream today. I'm not going to lie, I wasn't sure if I was actually going to stream today. This is pretty much
[00:00:13]  last minute. I've been working pretty hard on the new Solid Start stuff, a lot of it related to the topic that we're covering today. Sorry, wait a
[00:00:27]  second, I'm having a weird audio delay. Come say hi in the chat if you can hear what's going on. Just a second, sorry, this is very odd
[00:00:51] . I don't want to hear what's going on, I don't want to hear what's going on, I don't want to hear what's going on.
[00:01:06]  I don't want to hear what's going on, I don't want to hear what's going on. It's weird, I'm hearing an echo of myself,
[00:01:22]  but the echo of myself is really random, because it's only coming through my mic. And it's delayed like three or four seconds, which is really odd. It
[00:01:39] 's very distracting, sorry, I'm just going to see if I can change my audio device and if that's going to do something. I don't want to hear
[00:01:53]  what's going on, I don't want to hear what's going on. I don't want to hear what's going on. I don't want to hear what's
[00:02:02]  going on, I don't want to hear what's going on. I don't want to hear what's going on. I don't want to hear what's going on
[00:02:07] . I don't want to hear what's going on. Hello, how's this? Oh, this is really weird. It's never done this before. You guys
[00:02:27]  can't hear the echo, but I can hear the echo. Yeah, it's fine, I will just shut myself off in my own mic. Oh no, it
[00:02:45] 's not, it's not myself listening to my mic, it's actually my audio coming back. Okay, I mean, that's fine, I can. Well,
[00:02:57]  I'm just going to turn off my volume then and yeah. Nah, I mean, it's never done this before. You guys can hear me fine still, right?
[00:03:09]  I can't hear myself, but you can hear me fine still, right? Okay, yeah, we'll just do this. I'll just mute myself. It's
[00:03:19]  weird. It's like going back. It's getting fed back through into the mics output, which is unusual. Okay, we're just going to play this way today.
[00:03:30]  All right, that was not so fun. Give me a second here. It's all because I don't have orange juice today. So I'm drinking this coconut water.
[00:03:44]  You might be like, why is this pink? I don't know, this is a harmless harvest. Apparently coconut water naturally goes pink if you don't do anything to
[00:03:51]  it. Yeah, I thought this was the case, but I didn't have any other windows open. It's weird. Like I opened Twitch afterwards, but like this was
[00:04:06]  just in here. There's no other, as far as I can tell, unless there's like a hidden window somewhere. But no, it doesn't look like it
[00:04:17] . No, no hidden. Wait. Oh, man. You guys are so on it. I had a hidden video of me on YouTube. Okay. I'm so dumb
[00:04:30] . It is all good. Let's get some volume back. Okay. Thank God. All right. It was like a separate window tab that when I went to share
[00:04:41]  my screen on both screens, it like disappeared. It wasn't on either screen. It was like off the, it was like off the invisible screen. All right. All
[00:04:50]  right. All right. All right. All right. We're here. We're here. We're here. We're here. Let's, let's get ready to
[00:04:53]  get started here. I need to, um, tell people that we're live on Twitter. Um, see how things are going. But yeah. Anyways, um
[00:05:07] , yeah, I was not originally going to stream today. Yeah. Long Island iced tea. No, no, no, just coconut water from harmless harvest. It's called
[00:05:22] . Yeah. No. Why is this screen dimensions are like completely off right now? This is just, okay. Let's just get somewhere sane. Okay. Um,
[00:05:37]  I was, I was, I was working on commits like right up to that. Cause I hope the stuff that I demo today actually works. Whether that actually works is,
[00:05:46]  is going to remain to be seen. But yeah, I'm, I'm, yeah, we're live, uh, which TV slash around solid. You can also do
[00:05:59]  this too. If you prefer Twitch. All right. All right. All right. All right. All right. All right. Um, okay. How are we doing
[00:06:07]  on time? I don't know. I'm still well in the pre rolls. Hmm. Yeah. No, I had orange juice in the fridge, but I don't
[00:06:18]  know if you ever look at orange juice, it lasts pretty long. Like it'll say like something along the lines of, uh, you know, it'll be good for
[00:06:26]  three weeks or a month or something. But once you open the container really, it's hard to push it even two weeks. And I didn't stream last week and
[00:06:34]  didn't. Yeah. So I, I, I had a bottle of orange juice in the fridge that was open about maybe two weeks and two days ago, 16, 18
[00:06:42]  days ago. And I was like, yeah, it looks pretty sketchy. Cause there's just like the little bit at the bottom. So you could see the,
[00:06:46]  the stuff kind of like, I don't want to call it pulp, but kind of like, it didn't look right. Yeah. I mean, we could,
[00:06:59]  we could talk a bit about this. I'm not going to like show his video or go on that, but like, yes, uh, the stuff is RPC.
[00:07:05]  Um, and RPC going out of fashion, um, had a lot of good reasons, but I think, I think, I think there's something we have to understand
[00:07:15]  here, um, a bit about where we're at. Okay. Okay. Okay. So we, we got some people coming in the chat now. We're about
[00:07:28]  80, which is probably good enough for me to get started. So, um, yeah, actually I, I got, you, you all have, like, I had
[00:07:35]  some stuff to talk about. I thought maybe I'd just do like it this week in JavaScript, um, or something, but then I saw a tweet, um, this
[00:07:44]  morning and I, I forget where it got shown to me from. It's my bookmarks and, um, It wasn't this tweet that was shared with me,
[00:07:56]  but it was one of the responses. Um, and it was Ryan Florence going, I sometimes chuckle when I think about the people who decide not to use remix because nobody
[00:08:05]  is using it. We don't actually ship code to the remix package. That's from our preview license. We're going to fix the package names as soon as though.
[00:08:12]  And this graph might mean something. So I know this is like a this week in JavaScript topic, but it's, it's very relevant to what the stream today,
[00:08:20]  because he showed this picture and he's like, what remix, you know, about 20,000 downloads kind of mediocre. And then he shows remix router 4.5 million
[00:08:31]  downloads. Now, you might be thinking, wait a second. Why is there this huge discrepancy? Why do so many people, more people use remix router
[00:08:47]  than remix? Yes, dev. Yes, remix router is react router. So, um, there is a bit of that going on. And I think it was the
[00:09:06] , the, uh, said, right. He was like, this is crazy. Right. Cause if you look at Gatsby and all those decline doc, you saw
[00:09:18]  just getting off the ground on NPM downloads. Obviously react in total is gigantic. He's like, that would put remix as much as next JS. Right. So
[00:09:30] . Yeah. I mean. I, I, this, this isn't the first time this joke is going to come up. Uh, Michael Jackson back in March 25th
[00:09:42] , 2022 said, I have a hunch that remix is going to be big. And I, if it was from a blog post that he'd written and I kind of p
[00:09:49] oked fun at something they've suggested. I hope you aren't talking bundle size. There are solutions for that. But, but in all seriousness, remix will be celebrating
[00:09:55]  50,000 stars on GitHub in no time. And this was a comment based on, well, let's find react router on GitHub. Right. Um, was that,
[00:10:07]  uh, yeah, react router is at 51.3, but it was, it was about 50,000 stars at the time. Um, oh, that's,
[00:10:17]  oh, I have to be signed in. I'm not signed in on this page. I'm like, I definitely started react router before. It was one of my big
[00:10:22]  influences about 10 years ago. Um, but yeah, uh, 51 because remix at the time had about, uh, 1500 stars. And so I was like joking that
[00:10:36]  when they switched, uh, over to the new packaging, they could say that remix has 50,000 stars. This is the download version of this. So yeah,
[00:10:51]  I mean, why did, why did this get me to do a stream today? Cause obviously this is amusing, right? It's like, honestly, if someone just wrote
[00:11:04]  this, you know, made the comment about, uh, you know, about this and it wasn't Ryan Florence putting it out there first. Um, you know,
[00:11:12]  but Ryan was basically trying to suggest that remix router or react router was remix. He actually replies and such. He goes, I don't see a difference. We spend most
[00:11:24]  of our time in react router code for remix. Remix is pretty much at the beat plugin that makes a server build. Our package names are just dumb. So there
[00:11:39]  is a lot of truth to this as much as like, you could be like, this is not reflecting how many people actually use remix even remotely. This number is kind of
[00:11:53]  low. Cause you clearly see that it like they've made a change in April, um, or something like there's other ways to tell what remix is actual download numbers are
[00:12:03] . It's not either of these packages because either neither of them are actually accurate. Uh, but, but it's definitely not react router. But why would Ryan Florence
[00:12:15]  say this? Yeah. Yeah. Oh, sorry. I'm just. Yeah. Yeah. But it is actually kind of true because that is how this stuff works.
[00:12:38]  And I'm going to talk about that today because we're going to be talking about server functions and server actions and talking about where the code, what code belongs to solid start
[00:12:46]  and what code belongs to say solid router. And it's, it's the same kind of tension here with, uh, remix and react router. And it's still,
[00:12:55]  and it's also tied to that whole conversation about, you know, you have to use a meta framework and then meta framework comes with a router. And then you can
[00:13:03] 't use TAN stack router because you have to use the meta frameworks router. These topics are all very, very closely related to each other. So on one hand, you
[00:13:14]  can say, this is kind of funny. Like they're kind of trying to pull the wool over your eyes. On the other hand, mechanically, this is actually
[00:13:21]  very accurate way of looking at things. So I think this is, this is one of those places where we understand from the spirit of it. It doesn't seem like it
[00:13:34]  should be right, but the battle isn't about. Meta frameworks, the battles about routers. That's why routing is so important. Is anyone using CRA anymore
[00:13:47] ? Um, I hope not, but I guess we can find out in chat, can't we? Anyone using CRA? Let me know. I'm already using a meta
[00:13:59]  framework. I'm using react. No, meta framework is a router. React is, I, I, what, what, what are we calling react these days?
[00:14:09]  I think we went through this. Some people were like, oh, it's like a spec, but like, that's too. React, a library, I guess is
[00:14:16]  still fair because it just includes a lot of the pieces, but it's like a library with a lot of very specific opinionated pieces that the new ones are designed in such
[00:14:24]  a way that seemed to today only work in next.js. So I don't know if there's a term for that. I think, I think the purpose is still
[00:14:31]  library. Cause it's still, I mean, that's the goal, even with, um, what we've been doing, you know, with solid as well.
[00:14:38]  But I think that we're in a zone right now where, um, the whole focus of everything is around routing. This is like, someone was asking me if I could
[00:14:52]  deprecate, uh, solid start and this, and we can all just use astro. And I'm like, uh, and even Fred himself has been like,
[00:14:59]  I just wish this was how it could work. And I'm like, yeah, in a lot of ways I would, I'd like that a lot, but routing
[00:15:06]  is way, way, way, way too important, which is why we did a whole stream on it last week. Why this continues to be kind of a thing. Okay
[00:15:12] . But. Yeah. Yeah. There's Daniel, you're going, someone asked, can, can you do a demo like RC with. And the answer is no
[00:15:25] , it needs to be a router built for RCs. Right. Which is a lot of the work I've been doing, um, is kind of setting the foundation for
[00:15:32]  that with solid router. And I think. This is why me and Ryan Florence have been having a lot of tweets recently that are where I'm like, man, I really
[00:15:38]  agree with what he's been talking about. Um, is because we've been in this space where we're both like looking at our routers, which have very similar
[00:15:48]  patterns, um, influenced by the same source, right. Ember router. And, and then being like, damn, what are we going to do here? Like
[00:15:58]  there's just certain things that don't work with RFC type patterns in their cases, because react told them that way, but there is a certain fundamental truth to the way
[00:16:07]  react server components work that do actually make you have to change the way the routing works. So, um, I think there's been a lot of like parallels on his journey
[00:16:15]  that I've been watching on Twitter and a lot of the stuff we've been talking about on the stream, but. I, I think there's still a balance to
[00:16:26]  be found there where there are pieces that belong core. There's pieces that belong in the router and there's pieces that belong in the final opinionated layer. And this,
[00:16:35]  again, you're probably like, what does this have to do with server functions and server actions? Well, it's an important piece of the vehicle that makes us everything possible
[00:16:46] . And. I mean, I don't think today's an Excalibur stream. Although I feel like I need to do a little bit of talking and explanation
[00:16:57] . I want chat to be active if you can be, because it'll, it'll help us get kind of through this a bit because. I guess it starts a little
[00:17:05]  history, right? And I'm not going to talk about the full history of RPCs. RPCs were like really, really popular coming out of the eighties
[00:17:15]  and into the nineties. But the problem is that when the, the web kind of started out, like people used RPCs before the web. And, but
[00:17:25]  the, you know, but when the web came out, we suddenly had this like standard protocol for how we serve pages, you know, TCP port, port 80, all
[00:17:32]  this kind of stuff. And. You know, that's kind of made for a big change. I don't know too much. I was not in professional development at
[00:17:40]  that time period. I was just a kid, but you know, I was making some websites or whatever, but I wasn't like doing anything like this. I
[00:17:48]  never touched RPC back then, but essentially I was listening to a stream recently, JavaScript Jabber with Dan Shapir. And he was talking about how like a sys
[00:18:02]  admins had gone to a point where they're just like closing all the ports, but port 80 or port 443 for SSL. And then like, basically all
[00:18:10]  the other ports were no longer like standardly open. So it was like a pain to set up these RPC processes that didn't communicate over, you know, the standard
[00:18:18]  web protocols. I don't know anything about that, honestly. For me, my first introduction to RPC like stuff though, not completely. It was a bit later.
[00:18:29]  Right. When I'm talking about, I mean, it wasn't RPC like completely, but like, if you look at soap and XML, like from the Microsoft
[00:18:40]  stack, late nineties, early two thousands, it was basically like these chained, this dot, this dot, this kind of path things like typical like Microsoft DLL
[00:18:51]  looking soup of stuff. But then you'd like make these calls and pass and get these XML responses on the standard format or whatever. And it, this was definitely not
[00:19:01]  rest. Okay. Like it was, it was definitely like named function calls, you know, remote like RPCs. It's not, it's not as like clean
[00:19:10]  or nice of what we did today. And this kind of pattern was really kind of common throughout the, like the early two thousands. Uh, and, and essentially the whole
[00:19:24]  restful thing kind of came back again when we got into like rubies on rail MVC kind of time period. Like it was around 2005 Ajax calls finally being
[00:19:35]  enabled in the browser, you know, this, this whole time period. And yeah, by that point, in the same way we wanted to throw away those like horrendous
[00:19:44]  backend, crazy update panel things. We also wanted to throw away these RPC calls because everything was so tightly coupled that it was basically impossible to do anything, break anything
[00:19:56]  apart to change to the new, you know, JavaScript centric APIs, you know, do the stuff in the browser that we needed to do in a really efficient, nice
[00:20:04]  way. So is it ironic that we're back here again? So, um, I mean, there's, there's, there's, there's a key
[00:20:12]  difference, right? Right? So, um, last time we had these, you know, remote procedure calls and they were in this backend language that couldn't really make it
[00:20:22]  to the front end. Now we're here because we've taken our front end language and put it on the backend and this is a small distinction, but it's a
[00:20:32]  funny distinction because we're like, yeah, you know, it's like that meme where like, maybe it'll work for us. Um, you know, like the
[00:20:40] , like we know that doesn't work, but maybe, maybe it'll work, maybe it'll work for us this time. And I think what's the difference is,
[00:20:50]  is when it came from the backend to go to the front end, they had no choice for JavaScript. I mean, they tried stuff, but it all sucked. And
[00:21:02]  the, the front end, the browser being the limiting factor, the end user's device, you could never just know that you had what you needed in their browser. But
[00:21:12]  putting JavaScript on the backend, I mean, don't get me wrong, there's trade-offs and people will lament it forever. But like, if you're already at
[00:21:18]  a point where you've decided to do that, RPC calls are logical extension of this, right? I'm just catching up with chat, a little history through, I
[00:21:30]  was like, no, it won't be that long. Um, yeah, yeah, I was, yeah, I'm talking, yeah, I was talking about soap
[00:21:35] . Yeah. Uh, duh, duh, duh. Yeah. Browsers just weren't good enough. Yeah. And this, yeah, this is, this is an
[00:21:58]  important fact, right? I get reminded of this because, you know, the, the react team, when they thought they solved signals, um, you know, the
[00:22:08]  problem is that you always have to understand or look at things when they come back again to understand what's different, fundamentally different this time. You have to understand that some things
[00:22:16]  are the same. Some of those trade-offs or considerations are always going to exist. It's inherent to the design, but sometimes some other fundamental piece has changed,
[00:22:26]  which changes the equation, um, considerably. What soap? I hope you know, like if it's all caps, I think. So, you don't, you don
[00:22:37] 't want to know about soap. No. So let's try XML. Simple object access protocol. Can we see an image that shows the terror, the loveliness
[00:22:50]  of soap in one, one image? And don't get me wrong. It's not just a response format instead of using XML instead of JSON for both their requests and the
[00:22:59]  responses. It's just like this, this, I think this image does enough. Like here, here, here's your API. Anyway, um, dude, you
[00:23:09]  know, I mean, we make fun of it now, but okay. There is a huge benefit to having standard interfaces across different backends. You can use different languages.
[00:23:20]  You can use different, you know, you can be, you're basically creating a standard for a protocol, right? Um, similar to, you know, like what we
[00:23:25] 've done with GraphQL, right? Um, it's just that when you don't have to do that, things become a billion times simpler, but it is narrow
[00:23:37] ing the scope of what it can apply to, right? Um, so that's like why, you know, good engineering is where soap was originated. You know, same
[00:23:47]  good engineering, which created micro frontends and probably web components. Like the problem is, you know, it's like the, it's like the design for the future problem
[00:23:59]  where you take everything to consideration and then like go, okay, these are the avenues and go and you leave room to design for it where, I mean, people hate
[00:24:10]  this because I mean, and this is obviously, you know, in reality, we have to stay on our solutions for a very long time anyway. So this is good thinking
[00:24:17] , but like the, the alternative side is like design small pieces that are very good at what they do. And then when those pieces stop doing what you need for them,
[00:24:27]  throw them away. of course there's a balance point when that will work for you, but I'm just saying like soap, we can make fun of and, and
[00:24:35]  stuff and obviously a lot of solutions. And it did have its flaws, but like understanding where the mentality, um, these things came from is actually very important. Yeah
[00:24:49] . Yeah. Sam, yeah, definitely done that. I worked, I worked in enterprise. I worked in education. Like it's the, it's the, it's
[00:24:57]  the, the, that's where all these protocols go. They have protocols for freaking everything. Like, and then they're standardized and they're put to the test so they
[00:25:06]  can be certified. And then you walk into the company and they're like, do you support, like we, we complain about three letter acronyms in JavaScript.
[00:25:14]  Um, I feel like enterprise, they're not three letter, their acronyms are a little bit longer, but like four to five letter acronyms and enterprise stuff
[00:25:21] . It's like, you can just like pull up your checklist box and it's like, you know what I mean? Like there's a reason it's all standardized to
[00:25:29]  make sure that everyone's compliant and to make sure that everyone can be like, each piece can be held accountable, like, and have responsibility. Right. This, this is
[00:25:37]  how you build stuff at a large scale and put it all together. It's just, if you can own a smaller part of the world and do it as optimally
[00:25:48]  as you can for that one area, it's very tempting to move away from this stuff. Maybe that's not future-proofing enough, but there's a trade-
[00:25:58] off here. And, and I don't know, maybe, maybe our software will get to a point where the patterns are good enough that it's stable enough and mature enough
[00:26:04]  that it lasts a long time. But I, I still live in a world where most apps get rewritten every seven years. So yeah. Yeah. I mean,
[00:26:21]  these are, these are little differences here, right? Like that, that, that, that are important to understand. Like, and the reason again, is it's
[00:26:32]  because we live in this environment. There's, there's, there's other differences. The reason I gave us this nice little history lesson was because I was reflecting the other
[00:26:43]  day and I thought I was going to do a tweet. And I was like, maybe I should tweet it now. Um, I was just thinking, and I was like
[00:26:48] , when I started building on the web, everything was HTML, um, APIs basically, right? Like you build a page, you send it, you get the next
[00:26:57]  page. And then I watched that become XML APIs, right? Stuff like soap. And then it was JSON, which is a nicer format to deal with. But the,
[00:27:09]  the web responses that we're doing now, I mean, I, JSON got, you know, more powerful, like super JSON, GraphQL, whatever. But what
[00:27:17]  we're doing now is our APIs are JavaScript, like actually returning executable JavaScript. And that is quite the progression. I'll show you what I mean as we continue through
[00:27:33]  this stream, but there's something that comes when you have control of both sides, right? Part of it is you can, you know, I mean, obviously you
[00:27:45]  could standardize this protocol, but it'd be harder, but like, you can basically like run JavaScript on the server that communicates directly with JavaScript, but still running on
[00:27:52]  the client at both sides, kind of like, you know, the server drive the client, right? You know, talking to it, you know, streaming the response back
[00:27:59] . You can have TypeScript. You can have types that travel across both sides, right? This is, this is very powerful stuff. Right? Like back in languages
[00:28:14]  class, we had all these types and you know, you, they build these RPC calls or whatever, and then you go to JavaScript land and then it'd be like
[00:28:20] , yeah, right? Well, I mean, it's fine. GraphQL has TypeScript generators, but why did TRPC, you know, get, get so popular
[00:28:29] , right? It's, it was leveraging the fact of the type information on both sides. And this, where we've hit with the current, you know, meta
[00:28:38]  frameworks is, it's really just an extension of that same idea. I personally was not really inspired by TRPC. I don't think I even looked at it before we
[00:28:47]  started working. I worked on my first version of server functions. It was, I mean, I think TRPC was out, but my first version of server functions,
[00:28:56]  I think dates back to maybe April, 2022. Almost. Yeah. I guess like a year and a half ago, two years ago. It was, it was right after
[00:29:05]  it was about a month after V2 came out. I built all start on it. And I was like sitting there using these data loader APIs. And I was just
[00:29:12]  like looking at it and I was like, why the hell? Like, cause you have to understand solid, um, has reactivity, right? And that meant that
[00:29:23] , um, like if you go on remix, you guys, you guys all seen remix around before, like their stuff is kind of, and kind of a long, um
[00:29:31] , I use remix example though. I don't even think I had really looked much at remix at that time period. Cause it's still closed source. Um, but
[00:29:39]  let me see, they have, where's, where's the, I just want to see the, sorry, I went to the wrong place. I want to see the
[00:29:46] , the loader APIs, right? Like loader, right? They have this idea that they have this async function, right? And that async function runs on
[00:29:54]  the server. The problem in a reactive library is if that async function requires some kind of props, like, um, ID or whatever, like we don't want to
[00:30:04] , uh, like disco, whenever any parameter changes on the router, go to the server and then re-render everything. Cause like, like that's what react does
[00:30:14]  as a re-render model. It doesn't care. Something updates, rerun all the loaders. We want to have reactive properties that we specifically update. So like
[00:30:22]  if one parameter changer, one search query change, then we can update that one data that does that one fetch that pulls it back in. And that could never work if you
[00:30:30]  wrap the whole thing. So solid router, when I created about four years ago, um, and it's continuing a pattern that I used back in the day knockout
[00:30:37] . We had these load loader functions, but they are data functions. We call them, but they weren't just one async function. They were like a launching point
[00:30:45]  where you'd create all your reactive primitives in the client and wrap over the reactive values. So you'd have, they'd be reactive because they're in the browser.
[00:30:53]  And then they would, you know, do the specific data fetching, but hoisted. So they would happen at the route level. And I was looking at these
[00:31:01]  data functions and, you know, like, and looking at the, the, the actual fetching part. And I'm like, I'm like right here. Why the
[00:31:09]  hell am I like making another API endpoint to do it? I just want to call the function. Like I've been doing in the client, you know? And that was
[00:31:16]  the start of it. I was, I did something with proxies and like, uh, uh, like using solves like is server split. So that like on
[00:31:26]  the server, we'd return a function, um, that would call via the proxy path. And on the client, we, if we followed that path, we'd return
[00:31:36]  a fetcher that would hit a URL that was based on the path. So like, if you went like API dot users dot, um, yeah, API dot users
[00:31:46] , and then called that function with an ID, then it would go slash API slash users on those client. And on the server, it would just find the, it'd
[00:31:59]  use that path to find, um, a server function that was like in the file system routing, like in that location. Like, so in the, like, uh
[00:32:09] , essentially I built this first version of it, um, back in April, 2022. Uh, I mean, I could pull up the code for it, but I don
[00:32:17] 't, I don't think it really matters. Cause at a certain point, Nikhil popped in about two months later and he's like, why don't we just use
[00:32:23]  a compiler for this? And that's where our server functions came from back in, I'd say, June, uh, 2022. And what, what I'm getting
[00:32:34]  at is. This was kind of my motivation because I wanted to make sure that, um, I could keep the reactivity while, and separate from the actual server running,
[00:32:47]  uh, data fetching. But I've kind of realized over time. Like things evolved from, from, from this history because I went and we did the release of
[00:32:58]  solid start, uh, beta did the V comp talk. And next thing I know. Quick next. They all, they're all adding their own versions of server functions.
[00:33:10]  And, and it makes a lot of sense. Right before we did the release of server functions on solid, I decided to add a dollar sign to the end because I
[00:33:21]  wanted to make sure that people could tell that it's compiled thing. Right. And this is a lot of people's concern, right? You can picture it. If you
[00:33:27] , if you, if you go into, I'm just going to like make a thing. It doesn't really matter what this is. Um, let's reset this.
[00:33:33]  But if you, if you went in here and someone went like server this, I mean, this doesn't make any sense because the closure or whatever, but someone did
[00:33:45]  this, you, you can't really tell that anything special is going on. So I was, I, I, we were trying to come up with namings and I
[00:33:52]  was like, you know, this is how quick tells people that the names are different. So I added a server dollar sign to it. Yeah. I mean, the
[00:34:10]  funny thing is this dollar sign convention at the end was what observables used to use in, uh, RxJS as well. And I'm sure others use it
[00:34:18] . There we go. I mean, I, I was even debating this for a while. We could do capital server. I was like, like, how do we make
[00:34:24]  this more obvious? This is kind of PHP feeling, you know, um, like, but I mean, I mean, as it turns out, I'm not gonna
[00:34:40]  lie, this is actually pretty good as well, because it like, yeah, it doesn't have the server wrapper, but it's like, this is actually fairly blatant
[00:34:55] . Um, so I got to give them some, some props credit there in, in terms of, of you, of these views directives, um, on the
[00:35:03]  next side, but at its base, what I saw was that once we recognized that RPCs were what we wanted, um, instead of like remixes, like
[00:35:20]  router based stuff, um, why did I open this in a new tab? I have no idea. It's back in here. Um, it kind of opened stuff up
[00:35:30]  because actually on the fetch side, the loaders make a lot of sense. You're, you're, you're rendering a whole page and you're grabbing a lot of
[00:35:35]  data from different sources and you're amalgamating them in a single place, but on the mutation side, it was weird to map it to a single URL.
[00:35:42]  And from the reason that I went this kind of action thing, uh, you know, and it's so funny. My first commit did call them actions for some reason.
[00:35:51]  I don't know why I chose the term action. I was like trying to figure out the right verb. It had nothing to do with form actions. I, um,
[00:35:56]  remix hadn't done that thing with the progressive enhancement demo. I don't think yet at that point. Um, when I was working on it and so I wasn't
[00:36:06]  thinking that I just like, I was just doing, uh, I was just like looking for a word I think or actions, what the use directives are called in a
[00:36:15]  stealth. Like there's a lot of places where, where that can kind of kind of conflict and, um, sorry, I diverged a little bit, but, um
[00:36:26] , my point is like having to go to a different route seemed weird or like having been part of the route system. And I, I, GraphQL is a huge
[00:36:36]  influence for, for me on that side, because in GraphQL, your data is a graph where you fetch, where you get all the nodes. You ask for what you
[00:36:43]  want, but it's across a bunch of nodes, but the mutations are RPC calls, right? You go, you sure you can get back that graph data back,
[00:36:50]  but the mutations each, like on the get side, you just call query, you know, essentially like everything's off the query interface, but on the mutation side,
[00:36:58]  there's a bunch of like named functions that you use and this sort of split command query request, whatever segregation make a lot of sense for this kind of solution. Yeah
[00:37:13] . Yeah, exactly. Right. Well, and yeah, the thing was for us, they did run on both sides. I think Sapper had that same pattern running on
[00:37:28]  both sides of the data loader. Um, I, I, people don't, people don't give it credit, um, enough, but I think Sapper
[00:37:34]  was one of the first, um, nested routers that did, uh, parallelized data fetching, um, as a released product. Um, the router,
[00:37:46]  I was doing this pattern in my like real world demo. If you go look at the real world demo right now for solid, it doesn't even have a router in it
[00:37:53] . I like literally built a router kind of by hand and I used, uh, I used this pattern of parallelized data fetching, um, and with hoist
[00:38:01] ing, but I think Sapper was the first one that did it and, uh, they did it on both sides. Um, and, uh, we did as well
[00:38:08] . What was interesting about remix is they built it for remix. They didn't build it for the client side case. So they basically were just like, okay, loader
[00:38:16]  server, like right off, off the top. You haven't, you haven't missed too much. I'm just talking about the past being nostalgic. Um, but
[00:38:26]  what I'm getting at is these pieces were why I kind of went for server functions. What I didn't recognize or respect at the time was, um, was things that
[00:38:42]  were added by, um, that both quick and, uh, next ended up doing, which is that, and this is where I get into the JS APIs. I
[00:38:52]  was still returning JSON, um, with my, uh, server functions basically. Right. I was like, okay, this is like an API endpoint. You know, you
[00:39:01]  can return whatever you want really, but let's face it. I was JSON stringifying it, you know, and then we're like, okay, well, you know
[00:39:09] , can we return something more interesting? Maybe, I don't know. We had the standard request response object. So people could always just return a response and like send
[00:39:18]  what they want, but like, I wasn't really supporting much. There is like, whatever you can send in a response, you can, you can do, but,
[00:39:26]  uh, the interesting thing is quick, who is already doing crazy, you know, like chopping things up. Their stuff was the other way, right. Server functions were
[00:39:40]  like, how do I split out code from my client code that I can get back to on the server. Whereas at the time, quick was all the other direction. It
[00:39:47]  was like, how do I like split out, um, the, the, the client code from the server code that would only go on the client. They were worried about
[00:39:55]  that initial render, not after the fact, they'd created a whole bunch of mechanisms for how to serialize crazy different types of objects, things that like you shouldn't
[00:40:06]  be able to serialize. Like, obviously everyone who has suspense and streaming serializes promises, but like we'd special case that quick was like, Oh yeah, I just
[00:40:13]  threw a promise here. You could basically do whatever serialize, whatever you want, serialize the stream, serialize like any kind of object that you could throw at
[00:40:22]  it. And on the react side, part of this, anything you could throw at it is JSX. So, you know, cause they saw this thing where they're
[00:40:31]  like, we can really listically, because we control the JavaScript on both sides, we can actually now send something across the wire to execute essentially, even though like, like
[00:40:44]  a JSON API can't do that. Like there's only so much, you can like come up with a data representation and send it across, but then the client's
[00:40:51]  not going to get the exact same data on the other side, because like you turn a data into an object with these keys, you need something on the client side to go
[00:40:58] , okay, now return this object back into a data object. And that sort of back and forth play is when you know you control both sides gives you incredible amount of
[00:41:14]  power. Yeah, slightly off. How do you do with version change when your client code runs an old version than the server code? Yeah, yeah. And this, this
[00:41:30]  is like one of the things, like this is a classic RPC shortcoming, like 100%. Like when people design APIs for RPCs and stuff, and then
[00:41:42]  you end up with like, it's funny because the versioning starts becoming like changing function names. Like you start going like, I don't know, mutate users one
[00:41:51] , mutate users two. Well, there's a couple of things. I want to keep the whole concept of like, the get and the mutation as separate zones.
[00:42:02]  Because I think this is part of what makes things different this time is that like, an example of it is, versioning is definitely a concern, but I'm going to
[00:42:16]  loop back to it in two seconds. What I want to say first is, picture if like this, this is why it's things like server components come into the picture
[00:42:26] . Because if you are creating, you have these RPCs, and you can fetch things literally anywhere, you just like call a function. And at a certain point,
[00:42:34]  you're like, man, you don't even know which functions you're calling. You're just like, okay, I'm going to call this function, this function all
[00:42:38]  over the place. Maybe like, it's almost a good thing you can't await inside the components, you know, because then like, you know, people just like awaiting
[00:42:46]  all over the place. Well, creating these crazy waterfalls. There, there is basically stuff like RPCs push most of that stuff to happen on the server.
[00:43:04]  So, you know, if you did have a bunch of separate calls, then they, they're not going to like, overload your network with a bunch of things.
[00:43:15]  Uh, at least your client to server network. The thing that I wanted to kind of point out there and Greg pointed out earlier is our server functions aren't necessarily network calls
[00:43:27]  on the server. Like they don't like they're just function calls. So like they're not RPCs on the server. So if you have, if you,
[00:43:34]  if you wrap something in a server function, and then call it on the server, I mean, you'd be like, why you're doing that. But like,
[00:43:42]  if you're calling it during SSR, it doesn't necessarily have to be um, a remote call, so to speak. So it's just a function call. So
[00:43:50]  like that whole, like all over the place thing, like obviously designing your app around all these async awaiting patterns is dangerous. And we've had, we have a solution
[00:43:58]  for that on the client. We've been doing it for years. It's called hoisting. Like there's a reason why there's route data, loader patterns
[00:44:04]  and all this stuff. The client's always suffered the, this risk does making it so easy to fetch data, um, or communicate with the server increases risk probably.
[00:44:15]  But I mean, on the other hand, like you were going to get it from another source anyways. So like architecturally, it probably just changed it. Like if you
[00:44:23]  need to go get the user, it doesn't matter whether I'm using RPC or fetch, like I'm going to need to go get the user. like what
[00:44:28] , what this ties into versioning is yes. These mechanisms are very tied to each other to the point that, um, like long live client considerations are definitely, um,
[00:44:44]  you know, a concern. It's like, it's, it's like people, well, I mean, it's like people who version their JSON APIs internally,
[00:44:50]  right? Like I understand there's that time period where you do the update. I think, I think in terms of this, we need to consider solutions outside the RPC
[00:45:00] s, RPC zone completely, because this has always been the, it's, it's like the PWA problem. Like this has always been the problem with the client
[00:45:07]  where you basically have, um, some, a long live session that outlives the, the backend that it's talking to, or, and this is true with
[00:45:16]  code splitting or like any kind of kind of server request where you're like looking for assets. Like maybe you can get the old version, but for how long, um,
[00:45:23]  so to speak. So yes, this is a lot of this is very much assuming, um, this very tight coupling. So because we control both sides that the client and
[00:45:35]  the server will match, I doubt very much people are literally going to be like making get user to get user three in these kind of scenarios for versioning. Um,
[00:45:43]  so it does, it does, it is a, it is a trade-off. Um, but I mean, I mean, GraphQL was kind of like that too
[00:45:52] . They used to say don't version GraphQL APIs, but again, I mean, the trade-off there was like, you would be adding, you know, new
[00:45:58]  fields, new imports. Cause like their whole mentality was like, you just ask for more each time. I think that from the get side, especially with stuff like, uh
[00:46:12] , uh, like server components, you're a little bit more protected from the mutation side. It's yeah, it could definitely be a thing, right? Because,
[00:46:21]  um, you go hit the mutation, there's a new version. It's different. Whereas then you go re-render most of the page on the, on the server
[00:46:30] . The client isn't the thing that gets out of date. Anyways, that's why I gave the roundabout, um, response. I hope that kind of answers
[00:46:38]  it a little bit. Okay. We'll see how we do in chat. Just keep old versus running lambdas. Yeah. But yeah, I mean, yeah,
[00:46:53]  I mean, it's interesting. Yeah. Yeah. Yeah. Embers by code. I remember that. Um, to be fair, um, there's trade-
[00:47:09] offs in performance. So like, but there, there are similarities. I definitely, like their compiled templates are very smart. RPC from server to server runs into so
[00:47:32]  many issues. Cookie auth. Okay. Just reading this. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Cause I guess if you assume that the
[00:47:43]  servers are longer lived than the clients, RPC server to server would definitely be a bigger issue because most people's sessions on their client, like don't last nearly as long
[00:47:52] . Whereas like, this is a real concern when you have like these long lived servers. That's interesting. Do I think so? This is happening already. Do you
[00:48:13]  know what I mean? Like this is what I'm kind of getting at people looking at this are already using remix, next JS, solid starts, felt kit, whatever.
[00:48:21]  Like you're, you're already doing all your stuff in JavaScript anyways. Like this is the assumption here. Like it doesn't work otherwise. So like you, you've
[00:48:31]  already bought that ticket. Right. I, I, yeah. He's going the back and too much cheaper. Yeah. I mean, the interesting thing is, yeah
[00:48:49] , I mean, I think it, it's definitely possible to create this protocol in a, you know, a different language, so to say, as long as you can
[00:48:59]  like generate the JavaScript, so to speak, I, it's just the, the fact that the client understands JavaScript makes JavaScript, the best language to talk to it in
[00:49:09] . That's, that's essentially where we're at right now. Yeah. The obvious leptos kind of, um, reference. So what do I even mean by
[00:49:24]  us, uh, you know, communicating in JavaScript, so to speak, because this, this is something that I, I, I, I honestly don't know if
[00:49:32]  this is going to work. I was committing stuff, uh, maybe later, like right up to the, to the last minute here, I'm actually going to pull the
[00:49:40]  latest in the Vinci branch and we're just going to play for a bit. Uh, let me see. What do I have unmerged here? Not solid
[00:49:51] . Do I still have this open? No. Where is it? Solid, solid start. What am I doing here. Oh, right. I was trying to get
[00:50:06]  the client stuff working last time. Why am I doing Let's just abort this for a second. Sorry. Um, like, why am I doing emerge? Okay.
[00:50:20]  This looks clean now. Okay. Yay. Okay. Nice. Cause I'm, I'm just going to solve an example. Cause let's, let's start a
[00:50:31]  little first, little first thing. Is there a difference between server functions and server actions? I'm, I'm just, let's chat about that while I, while I
[00:50:38]  do my install here. And the answer is actually yes, but, but it's a, it's, it's a more subtle, uh, difference than you probably
[00:50:50]  realize. Right. Um, and this, this could be my distinguishing difference, but when I was working on server functions, server functions are just that literally the protocol,
[00:51:02]  like the RPC style functions, you, you make a function, you call it, you know, returns result. But actions have specific semantics in terms of routing
[00:51:18] . Right. And this is coming back to Ryan Florence and, and his whole thing, right. Because for actions to work, like they need to, you know, do
[00:51:28]  something like, look, there's some special stuff going on. Like, uh, you, you can do a redirect. Right. I mean, you could in theory do
[00:51:36]  a redirect say with a server function itself. And almost in all cases, you probably want to be able to handle that, but like, there's this question of who
[00:51:46]  and what's handling the redirect then, because if you, it implies a router, doesn't it? Like, because if you return a redirect, um, like, I
[00:51:59]  don't know how many people know this, but if, if you open a browser and you return, uh, like a 302 redirect with a location header, even
[00:52:08]  from a JSON API, like I'm not talking about from like a full form post full navigation, I'm talking about, um, like, even from a JSON API,
[00:52:18]  you're just like calling using fetch and you, you, and you return at the 302 status, it actually redirects the browser on, on you. Um, which
[00:52:18]  is, you know, not what you want when you, when you're doing client side routing. So like it's, it's, it's like just returning a
[00:52:35]  redirect isn't enough to tell like the whole story because you, you, you, you assume there's a router on the other side that knows how to handle that piece.
[00:52:38]  And I think that for me is at least what separates the pure, um, you know, the pure server function mechanism from the, say, action mechanism. So
[00:53:06]  like going back to my silly playground here, whatever syntax I chose to use here for use server or whatever, this, this is where the confusing part comes in doesn't necessarily
[00:53:19]  imply to me, at least action or not, right? Like in, in react, I know that their server functions, they treat them all as actions, which assumes something
[00:53:30]  about routing. Um, but generally speaking, um, this doesn't have to mean anything different from this, it's like, how do you wrap the function? There
[00:53:55]  are differences in this API. Um, couple really obvious ones is this is right now. This doesn't think it's an async function, right? It should be
[00:54:07]  because if we went to the server, this should be an async function. It should be a promise of whatever, like, uh, set counts, a terrible example,
[00:54:15]  return. Hi, right, right now, it's a promise of string, but before I added async here typescript incorrectly thought it was string, whereas if you
[00:54:24]  know server function, this server dollar sign could ensure that even if you didn't put async here that it actually ends up being async minor thing, but just just something
[00:54:38]  to be aware of. So there are like differences and other interesting differences. If, if I make a convention here that like the first thing I pass to the server dollar
[00:54:48]  signs is, is say a function, then I can also pass like options here and you know, configure it. There's no real configuration with user server. Um,
[00:55:01]  but then there's another difference. I can also put user server at the top of the file. I can define it at different levels of block scope. So there,
[00:55:11]  there, there, there, there are differences that come from the, um, syntax, um, that do impact what you can do with it mechanically, but it doesn
[00:55:25] 't actually necessarily have to change the semantics of it. Yeah. It probably needs a location header. Otherwise it doesn't know where to redirect to. Yeah. That
[00:55:42] 's a bad way. Well, okay. I mean, the reason that next is, is talking about invalidating routes is because their get is. A page or a
[00:56:01]  page partial. Like they're actually returning. It's not HTML, but we can pretend that the JSX is serialized back is HTML and that they like dip it and
[00:56:15]  do stuff, but like essentially they return the markup. So for them, it is the page, you know what I mean? Like the client no longer sees what the
[00:56:22]  separate data fetches are. They just see the page. I think this is a very powerful model because it does reduce the, from the client perspective, like all the
[00:56:33]  touch points. It does reduce the potential for waterfalls on the client. It doesn't ensure performance. The downside obviously is that it alone doesn't prevent waterfalls on
[00:56:43]  the server, which is why you should still be very strict and use really good patterns for data fetching on the server. Just because you use server components doesn't mean
[00:56:52]  you don't have to worry about waterfalls, for example. Right? So I do understand why they're using path based, right? Like a lot of the stuff that
[00:57:02]  I've been working on solid has been about bridging the gap. Um, but it's starting from a place of where we are today and not just jumping to where
[00:57:08]  we want to get to. So invalidating a long path is, is fair. Um, and I think a generic enough in validation, a process should be able to
[00:57:21]  handle both. Um, yes, that, that is how we've been doing it in solid start. Um, so far, the only thing that I really didn't
[00:57:36]  like about this was that like, I was making these custom dollar signs. I didn't talk about this as, as like a bad trade off, but these dollar signs
[00:57:48]  do require compilation and while create server action dollar sign just compiled down to server dollar sign with a wrapper. I got to a point where I realized that we just hit more
[00:58:03]  and more and more permutations to the point that I basically wanted to get rid of all those special dollar signs, like keep server dollar sign, but get rid of the
[00:58:11]  rest. I, I, I, I realized that almost like a month after release beta, like almost immediately, I was just like, yeah, I know that all those
[00:58:18]  like dollar sign APIs are too much. Like, is it really that painful to ask, to be explicit and ask someone to wrap the server dollar sign? It makes it
[00:58:26]  explicit for them. I'm sure the crate does, but then the creates a reaction, the problem was the same thing. We, we had this convention where we, you
[00:58:32]  were like, okay, well, it has to be the first argument. So there were cases where, um, you want in a, in a, in a, like
[00:58:40] , in solid case or creates a reaction where we wanted to do the reactive tracking, kind of make it a resource. Like I had to change the order of the arguments to
[00:58:47]  follow the convention and it was not intuitive. So, um, yes and no. Yeah, I mean, one, one of the interesting things that people don't realize
[00:59:08]  about these APIs, and I'm not sure I follow your questions completely, is that it doesn't matter on either of these APIs is that it has to wrap the end user
[00:59:20]  code here. You can't make APIs around this. Like if I wanted to like, do like make increment. Let me explain. Like, yeah, let me,
[00:59:32]  let me do this. Like this is, this is fine. This example, like if I kind of did like, you know, like whatever, I don't really
[00:59:51]  care about the arguments. Like, this is fine, but if you wanted to like, like just, it's, it's hard to, to like, you can
[01:00:10] 't do this. And then like, I think of the best way to explain this, you can't like, like call the function. Like with, you know
[01:00:28] , the best way to, I'm trying to think of the best way to try and explain this. Like, there's this composition problem where essentially with all the server
[01:00:42]  functions, the end user has to be the one who, who actually passes the function. These don't compose in the classic sense, when you try and like make your own
[01:00:53]  incrementer or whatever, because these all become a single server function. So like, I mean, obviously I'm passing this stuff as options, which then, yeah,
[01:01:08]  I'm doing a terrible job of explaining this. I'm sorry. Um, like, you're not, unless you know, to, to transform something like these basically have
[01:01:19]  to sit at the level that they're wrapping. Um, I wish I had a better, if I was more prepared, I would have had a better example of this.
[01:01:26]  We saw this with like PRPC trying to add Zod validation. And he originally was trying to just wrap, um, a server function. And then like, you
[01:01:37]  know, basically have the, like the client, like get the validation in. So he could just like make the call and then have the server do the validation. And I
[01:01:47] 'm like, you're, you're now serializing Zod schemas across the wire for no reason. Like there was no way that he could put the Zod
[01:01:55]  schema inside the end user server function without the end user doing it. Does that make any more sense? Like, you, you, you like, yeah, yeah.
[01:02:11]  You can't do this very easily. Cause now this function needs to be serializable. Like the closure here, right? Like you might as well, like, we
[01:02:27]  don't do closure extraction, but for, for, for sake of argument here, like it's, it's kind of, it's kind of doing this. Like
[01:02:37]  this now needs to be serializable, which means that the reference to the instance of the function you create somewhere needs to now, you know, be its own dollar sign,
[01:02:50]  essentially like its own export. And you can do this with quick and make custom dollar sign things and do this. But this was like a zone that's like a lot
[01:02:59] . Right. So I just, I, I do think it's important to point out right now that like, while you can wrap the inside of a server function, so
[01:03:09]  you can make add behavior, you can, you know, and same with the use server. Right. You can, you can technically like wrap something here. You know
[01:03:17] , you can like call a function around whatever you're doing inside the server function. You can also, you know, sorry. It's funny. Cause this one doesn't
[01:03:27]  need to use server. My bad. And I guess you can also like do like a wrap here on the inside. You can wrap outside, you know, and you
[01:03:47]  can wrap outside. The one thing that you can't do is like inject it in like, like this really, because serializing arbitrary functions requires like its own reference system.
[01:04:05]  It's as I said, you could try and do it automatically, but in quick case, they actually force you to have another dollar sign. Essentially. Like you have
[01:04:16]  a dollar sign within a dollar sign and then like do this kind of thing. You need a generic system that can handle that. And I, uh, next does not do
[01:04:23]  that. We don't do that. Like it's doable, but I honestly, I'm, I'm trying to explain all this to say that, like, you don
[01:04:31] 't even really necessarily want to get into this zone necessarily. Um, it might be nice from a composition and this is one property that I do kind of envy on that
[01:04:40] . And that, and it's a good point of why, where server dollar sign, um, is, or the dollar sign operator in general is more generic than using
[01:04:50]  these use server, but it's like, it's this very specific case. Um, I think anyway. So catching up with chat here. How are we doing?
[01:05:00]  Server dollars. I can go inside node modules, but, but like, yes. What would it, what would it be doing? Like you, my initial example was a
[01:05:04]  better example. Like you could put, instead of thinking of it like this, you could think of it. Like you can, you can, you can be like,
[01:05:13]  you can, you can be like, you take like whatever you like, instead of passing this function through, you can be like, here's my API passing in some options
[01:05:24] . And then you could be like, like this is fine. So to speak, right? Because I'm assuming that the module creates the server function, the function
[01:05:49] , and then the person calling it is just going to pass like the thing. This is fine. It's the idea that the end user supplies the function that becomes the server
[01:06:00]  function. And then you, as the consumer can inject stuff into it. Okay. The challenge part with, with doing keywords is then you like what parser is going
[01:06:20]  to support that for you. Like a lot of this stuff comes from the fact that like, we get to still use Acorn or like whatever parser beyond Babel or
[01:06:27]  all the other tooling. We didn't have to invent a language for it. Inventing a language. I have a whole stream about it. It's something you've
[01:06:33]  got, you're going to be a maniac if you want to do that. Like kudos to those, but like even Svelte. which kind of invented a
[01:06:42]  language, keeps that in a very like specific scope of how they like process it. Like you, you, they have like a kind of SFC, but then you,
[01:06:52]  then you have JavaScript in that SFC. They're not just like changing JavaScript syntax in the, in the middle of their code. Like, so they, they don't
[01:07:00]  even do it. That's like, like, this is like Marco, Marco level stuff. I think. Yeah, no, I hard disagree on this. This,
[01:07:16]  this, this isn't true. Um, I think it's fine for a lot of things, but you'll never convince the huge e-commerce market that this, this
[01:07:25]  is the case. Yeah. But as I said, this goes beyond even what Svelte does. Yeah. I mean, it depends on if you doing world
[01:07:48]  markets, honestly, the thing is we're getting to a point with, I mean, it basically, if you believe that the SSR thing isn't worth it, the
[01:07:58]  whole stream today is probably a waste of time too. because we are, if the, the, we're leveraging the part, the fact that both code, both pieces
[01:08:08]  of code are kind of running on the both sides. Like, don't get me wrong. We can use these server functions with a client only bundle with a JavaScript backend
[01:08:14] . And so I'll start will support that obviously does support that. Um, not in conversion, but in it supports it in beta too. Um, but like,
[01:08:25]  and I guess that makes it a little easier than API endpoints, but like, it's kind of like, we're only here. Cause we're already here.
[01:08:48]  Does Marco have no, no. Marco is an MPA framework, kind of like Astro. Um, it's kind of funny. Astro has really like become the
[01:08:55]  hallmark for it now, but like picture. Marco is like other, like Astro has gone really hard. hard on the content side and stuff. And then they
[01:09:04]  have like features like the content collections, but like the core mechanics of Astro, just pretend like the version that's like from 10 years ago. And that's what Marco
[01:09:12]  is. I don't know. I don't know. It depends. There is a branch difference between like. I don't know. I don't know. I
[01:09:30]  don't know. no no the the server component stuff is set as marco and the client state is serialized as props so then it updates so in a sense yes
[01:09:45]  the the props coming in are um it but like i don't know it depends there is a branch difference between like yeah i don't know you could be the answer could
[01:10:00]  be yes or no depending what part of it you're talking about specifically but generally speaking just so i can say mechanically you hit a refresh on on it it will render all
[01:10:08]  the server components and those server components part of rendering them is rendering the props for the client components then it will diff the result of that against what's already there and then that
[01:10:22]  diffing will show that the props have changed which will trigger the client components to re-render um you see quick's astronaut no i haven't looked closely at it seem
[01:10:40]  to learn today since the compiler server actions if i'm yeah yeah they probably i mean quick city had um server actions so i can understand um like i i would imagine it
[01:10:51] 's the same thing so quick has you know a but like a lot of these features for i told you for us or for me personally it started as a proxy mechanism then it
[01:11:01]  went to a compiler mechanism but ultimately to wake these features work properly it's a bundler mechanism you actually want to separate the code and use server um at least on the server
[01:11:12]  or sorry at least in the client because it's not in the server into like a separate endpoint a separate thing because then it's not impacted by where it's declared it
[01:11:21] 'd be very very awkward if you use server somewhere and then only call the function from like page that that you didn't initially load then you client navigate to that page and then
[01:11:32]  find out that when you try to go use it because the server never loaded the code to register the server function that the endpoint isn't there uh we hit this since i
[01:11:43] 'll start that's why i'm talking about this in real real story so it has to be a bundler consideration for for generating these server functions um that being said the my
[01:11:54]  understanding of the quick astro integration is it's mostly like little like quick works is basically islands and astro handling the router um i can see server functions working i don
[01:12:04] 't know if server actions work which is an interesting thing um if they hooked into the astro's new view transition api i guess they could do something but then again ast
[01:12:13] ro doesn't really do diffing it does persistence of islands but there's there's a difference especially when it comes to global state in the client which we talked about so yeah
[01:12:21]  it's funny because a lot of people use these terms interchangeably but i never have so for me there is a distinct difference between server actions and server functions i i think
[01:12:31]  i'm classifying what's in quicks astro integration of server functions not server actions but i could be i could be wrong what's this astro thing is this mat
[01:12:47] thew phillips with a different username i don't know uh yeah i mean yes co-location does make tree shaking difficult i actually love his example there because
[01:13:05]  if you can make the assumption that stuff is side effect free tree shaking is actually completely simple right and the ironic thing is most client libraries are written in such a way that they
[01:13:18] 're they're side effect free what i mean by that is if i have a server function top i'm just gonna put a top level to make it really obvious what i
[01:13:24]  mean so i'm gonna i'm gonna use i'm i don't care let's just call this server function okay and then i'm gonna i'm just gonna use this used
[01:13:32]  server mechanism it doesn't matter but then i go like await and we'll put async here and i go await database dot update user with these options whatever and it's
[01:13:50]  inside like a client component thing the funny thing is import you know db from server only thing it is really easy for bundler to be like oh yeah yeah and they
[01:14:06]  do this all the time they go okay because the bundling process pulls this thing out you basically get two versions of the file you get a version of the file that is just
[01:14:19]  this i'm gonna remove this user over here and you get a version of the file that doesn't have this and in the version that just has this so this disappears you
[01:14:28]  know none of this is here it goes okay render no symbol remove it create signal no signal remove it db db keep it and it becomes just this and then in the
[01:14:41]  thing where this is a masked and not here it goes okay not there so then it goes count it glows create signal yes render yes db no and it removes this
[01:14:55]  and the same thing for constants same thing like even like this const my secret la la la la la again same thing like you know you notice how until i used this it
[01:15:14]  was like this but bundlers can tell that super easily again not a problem however even though almost every client library is written side effect free you find almost no server libraries are side
[01:15:31]  effect free so this database thing is probably unless it's like wrapped in your module that is side effect free they go oh i don't know if this side effect free i
[01:15:39]  don't know if you can assume this see rich harris did something really smart in early versions of roll up where he said well if if the symbol isn't here like there
[01:15:50]  as that or there i'm gonna i'm gonna just very just tree shake it out and i'm only going to keep it if someone does it like this then i'll be
[01:15:59]  like okay clearly if like they're importing this and there's no symbol involved and this thing has side effects and early roll up it's so funny i actually stayed on old
[01:16:11]  versions of roll up way past when i should have because of these kind of optimizations um because uh i for benchmarks and stuff because roll up i guess they hit some crazy edge
[01:16:23]  case where they couldn't do this one thing and me as a user roll up didn't want them to fix that edge case like i i relied on this kind of behavior
[01:16:32]  but they had to fix it for one very specific case and i think this is rich going through the pain of watching the perfect tree shaking thing break apart because of these edge cases
[01:16:45]  is why he's he's skeptical of it now because he was like man you know i had the perfect thing it worked perfectly and now because these edge cases i know that
[01:16:54]  it it could never easily be solved even though it makes like the one percent case not even so i i i can respect where rich is coming from but like on the other hand
[01:17:07]  and this is what nikil's i believe has been doing we we can we can do the same thing roll up used to do just i'm just throwing it out there
[01:17:18]  it like this this already works in a lot of cases it's just in those like specific cases that it doesn't and yeah i mean it's tricky because i wonder how much
[01:17:31]  of that is legacy code versus like like the way things should work i don't know i mean the answer always is you can always pull into another file i'm just but
[01:17:45]  like this is the crux of the of the this whole um tree shaking issue since server comes there how about a server real-time components like would it describe the events
[01:18:11]  of the server and we need to request some data i mean you talk about like setting up a web socket connection i mean it's it's an interesting idea um the biggest thing
[01:18:18]  is i don't feel like that's the right use for server components let me explain server components generally are for when you want to you're like i'm going to the server
[01:18:27]  i'm going to do everything anyways it's like a navigation thing this is routing consideration it's when you do the big changes if you set up a web socket and you
[01:18:36] 're sitting there and you're sending these server component diffs all the time like unless you optimize the diffs which is hard to do in the server component case let me explain
[01:18:45]  because the client owns a state not the server i mean there is a kind of hybrid but it's like ultimately global like the client actually becomes a source of truth even though it
[01:18:56] 's still react like even in this model because of you know because of like the like the presence like don't get me wrong server can't read that global state so you
[01:19:06]  could be sending back these diffs but like if you're interacting and updating the client in small piecewise portions you're better to use client components right i mean people can go
[01:19:15]  build this stuff but then it's a completely different expectation on the back end if you're gonna have a persistent back end like i was playing with phoenix live view you
[01:19:23]  know or not phoenix uh the live.js the you know a little while back and i was amazed at how simple and nice the model was but like the prere
[01:19:31] quisite of like oh yeah and you need a server that's persistent with web sockets that's a big prerequisite so like my gut is in this zone you would actually set
[01:19:42]  up client components to do the website socket connection but i there's no way this would be built into the core part of the mechanism i don't think like you could view
[01:19:50]  the server function calls as a way to trigger that i i'll show what i talk about like i mean i server functions can return lots but you could also just set up a
[01:19:59]  web socket and like that's fine too i see that i like that sort of a real browser well i mean this this aligns with what i've been saying for a
[01:20:17]  while now that react has been trying to reinvent the browser right like yeah i mean we all have been to a certain degree with our client rendering stuff right we took over the routing
[01:20:30]  you know like it's it's just like every piece of it even the dom like it's a virtual dom like it's it's funny because the dom itself is a
[01:20:39]  retained mode mutatable thing and react likes to pretend it's not so it's like like they are kind of just like taking their like mental model and just forcing it on everything
[01:20:52]  else um so you don't have to deal with what's underneath so i i can buy i can buy this thing yeah i guess it came from me originally i'm not
[01:21:09]  surprised yeah i mean you can as i said that that's always a solution but it's like also kind of a bit like like why can't i do a lot of
[01:21:26]  things if i could like just do them right anyway anyway um i i'm kind of i lost my train of thought here for a moment um we were we were talking about
[01:21:48]  um some of the semantic differences between the different syntaxes but like sorry they don't actually have to have semantic differences but they they do have mechanical differences between the different syntaxes
[01:21:59]  um and we're talking about tree shaking i'm just trying to get back where it was okay oh you might have to film it today that sounds fun okay so again check
[01:22:20]  out uh code in life um uh it sounds like uh theo will be there okay okay so yeah one of the biggest things that we've kind of seen while i've been
[01:22:33]  talking about this is like when you put everything in a react server component kind of mindset like all the pieces kind of lay together um together you can kind of see like they all
[01:22:44]  kind of work in tandem but one of the challenges and stuff i was thinking about was like how does it go beyond like that into what we're doing today right and that
[01:22:55] 's that's why i was installing and employing the project but yeah i i wanted to kind of it's been a while i've been i've been working like crazy on
[01:23:04]  the router and i think this stuff should all be implemented but i wanted to kind of talk a bit about let's just start with server functions i'm just going to open um
[01:23:16]  is this is this client side ssr false right now uh it doesn't really matter let's let's just see if this actually works let's open the bear example
[01:23:26]  um i call it this doesn't oh right i need the router never mind actually for this i don't need the router sorry i'm talking to myself a little bit um because
[01:23:34]  we're just gonna play with server functions for a minute okay so i'm gonna show off this uh bear example and uh spoiler for people who aren't aware of this solid
[01:23:46]  is using use server now i switched off server dollar sign i know you guys really liked server dollar sign but the bundling consideration and alignment with react is great so i the reason
[01:23:56]  i'm showing this example because it's it's ssr false okay so this is let me just show the the the setup here it's oh it's so small because
[01:24:05]  i'm so blown up but essentially this is our create react app ssr false this is all start still but it's basically i put a counter inside a component this
[01:24:16]  is a whole app there's no router i think it's like five kilobytes this is literally create react app it's not even server rendered so if i go back here
[01:24:23]  and i open localhost uh 3000 we have this and it's yeah this this page is nothing but we're gonna play with server functions um because we can so let's
[01:24:38]  just um make a server function here uh now i'm trusting that nakil has fixed some bugs because inlining them was hard before but let's make a function uh let's
[01:24:50]  what do we want it to do greeting yeah we'll make a greeting function and then we'll go use server and we'll what would we want we want us name actually
[01:25:04]  we don't we'll just say it's a string and then we'll return hello yeah i don't have copilot on this computer i've become very reliant on cop
[01:25:15] ilot recently i didn't realize how much it's really fun to get rid of monotonous stuff okay so what are we going to do now we're going to add
[01:25:23]  another button um that i think we add another button and then on click now i don't really want to serialize the event across the wire and that's why there's a
[01:25:37]  different api there so we aren't just going to replace the on click directly like like my stream pedal we're just going to go um console dot log await which means
[01:25:50]  i'll need a sync greeting okay so we'll just do this now keep in mind i have not tested stuff like this i've been like doing the more targeted stuff oh right
[01:26:00]  i'm missing a name um i'm gonna say world for now i know that's really late so if if if i'm oh right and my button actually needs text doesn
[01:26:10] 't it i mean i saw it there you saw it there too but let's actually put something in here so we want to be like click all right so hopefully if i open
[01:26:21]  the console here and i click this this actually works okay yeah so we get we get our hello world unsurprisingly we said a bunch of stuff right and we can now i
[01:26:31] 'm not doing any crazy closure extraction stuff so we can we can we can do i haven't added by bind yet but we can add bind um but i mean i think
[01:26:44]  you guys get the idea here and now this is going to error because it needs a number and we're just going to count in here this is just so i can sanity check
[01:26:54]  that we are doing different things right we go click hello world zero a bunch of times click this now it's hello world three okay this is this is not rocket scientist but
[01:27:06]  what what is cool is let's let's actually look over this network about what uh about what's actually getting sent here when i do this um am i filtering something what what
[01:27:19]  am i doing here let's let's actually see i must be filtering something what am i what am i filtering so it's so weird because this is clearly doing stuff but
[01:27:35]  it's not that i'm not seeing the the fetch xhr request let's refresh the page this is this is weird like like i i wonder okay well let's confirm
[01:27:50]  that this is actually on the server right that's that's probably the the first problem we have here isn't it because yeah see this this this this tells me it's
[01:28:03]  not on the server so strike one on our on our on our on our on our little experiment here okay all right so let's let's go back here again and let's
[01:28:19]  let's let's assume that the problem is this and let's ssr the app all right let's try this again no just straight up broken that's that's
[01:28:36]  that's what i want to see in the stream straight up broken all right let's let's let's uh let's let's make sure that i am not missing anything
[01:28:50]  very obvious here but i don't think i am this it's so funny because this is like one of those like used on my computer kind of scenarios let's let's open
[01:29:00]  up a different example one that has working server functions and and actually see if the bear example is just cursed or if in fact um let's let's look here um okay
[01:29:27]  interesting yeah see okay this is interesting it it might be that in dev you see both versions do you know what i mean because here i'm seeing the server functions like what
[01:29:43]  the the the the the that's interesting yeah it's this is a dev versus bundler build kind of thing that's going to be confusing the demo okay how can i show
[01:29:58]  that it's actually happening on the server or not is a good question i never i never thought that the uh that okay yeah let me think here because yeah this is this
[01:30:18]  is actually a little bit annoying to the demo here this is this was the danger of me of me uh oh not i can do i can use solids is server let's let
[01:30:32] 's just sanity check here whether whether whether the stuff is actually doing what we think it's doing um let's go import is server from solid js web okay okay let
[01:30:56] 's just let's see what's going on here it'd be hilarious if i i know it works because the auth example that attaches the sessions would never work otherwise but it's
[01:31:09]  just it's just it's amusing to me that because of dev mode and beat i i can't actually show you guys what i'm talking about let's see let's see
[01:31:18]  if this works please say true okay so the bare example is is is is broken it is clearly client side um what what happens when i bundle it let's just let's
[01:31:32]  just let's just let's just let's humor me here build this is this is why you try stuff before you node samples there because that here yeah it is definitely client
[01:32:00]  side yeah yeah the problem is i need to get past this point because what i need to actually show is the response is coming in right like now that we know well i
[01:32:14]  mean okay let's let's sanity check hacker news too there's a very high chance that this is something that broke in like literally the last the last uh the last update that
[01:32:29]  was done um network fetch xvr okay those are server functions yeah okay so so yeah okay very interesting i wonder i wonder if this is like something really stupid like
[01:32:58]  it's because it's not using the file system routing that seems really dumb though so it's it's definitely working in the hacker news example okay let's just continue on what
[01:33:19]  i want to show you is actually the serialized output from the hacker news example because if you look at this this is not json i mean it's json but
[01:33:26]  it's not just json this actually has deduping capabilities in the response but we're actually seeing it construct code i wanted to show something really cool here which is that
[01:33:37]  this is what i mean by javascript apis um this serialization is very much the same as this serialization that we use for when we initially render the page
[01:33:52]  so this this this stuff has superpowers the fact this this bear example is just cursed i'm i'm just i'm just not okay we're gonna we're gonna try
[01:34:05]  one more thing because i i have no clue why the bear example doesn't work we're gonna go now to the basic example which you're like what's the basic example well
[01:34:15]  it's the one that brings the router in and so it actually has a routes folder with a router and we're gonna try we could try the same thing essentially we're gonna
[01:34:26]  just oh right not the right thing okay why did i delete what i did already see i have this terrible thing that tendency that like when i uh when i something doesn't
[01:34:39]  work i just delete it immediately and that's probably like the worst thing you could do a lot of the times because it's like you learned something from what you were doing before
[01:34:50]  maybe but okay right and it was uh we're not gonna have to count this time we're just gonna prove this thing actually runs on the server so we're just gonna
[01:34:59]  return hello name and then because yeah we're just getting started this would be very sad if we can't get past just getting started here um because it yeah i mean okay
[01:35:20]  sanity check first greeting hi okay let's do basic now what we should see is when we load this page it should console log on both sides because we're we're
[01:35:47]  literally calling it from both sides i like not on the right app in the right route i'm just this is just odd basic example in dev in the basic example routes index
[01:36:11]  page definitely loaded greeting oh you have the console log you guys are probably like all telling me this right now in the chat and i'm not looking at you sorry yes yes
[01:36:34]  yes yes yes i'm i'm i'm hello hi hi hello hi thank you okay so it's running on both sides the question is the the million dollar question well actually i
[01:36:48]  don't need to go as far as like this i can literally just look at the network tab and we should see a fetch if this is working properly um yeah so my
[01:37:01]  there's something wrong with the inline server functions right off the bat so we're going to take this another we're going to take this to another level here we are going
[01:37:13]  to for the sake of this even though i have examples with working inline server functions we are now going to make a new file um why am i just not here okay
[01:37:26]  and we're going to call this api.ts we're just going to use use server right along the top and we're going to we're going to we're going
[01:37:39]  to do this we're just going to put this in here export export and then we are going to import greeting slash api we're going to spell it properly as well
[01:38:15]  i must be just doing something stupidly wrong and i don't know what what what's going on here this is this is this is this is like so so weird this
[01:38:25]  is like i like we have examples working with server functions am i like spelling it wrong like hacker news example works routes routes or start lib api use server oh oh oh
[01:38:46]  oh oh oh my god i'm going to be on the kill's case like crazy if this is a quotes problem like like i was using i'm going to be on
[01:39:06]  the kill's case like crazy if this is a quotes problem like i'm going to be on the the kill's case i'm going to be on the kill's case but
[01:39:11]  i'm going to be on the kill's case i'm going to be on the kill's case i'm going to be on the kill's case i'm going to be
[01:39:14]  on the kill's case i'm going to be on the kill's case oh man we can probably clean up the output for the no return but okay we're back
[01:39:32]  on schedule okay okay okay okay so was that everything is it really just because i like being stylish with my quotes let's let's go back here bring back this version and
[01:39:53]  change this to double quotes let's change this to double quotes okay all right yeah i'm going to delete this api all right see and if if i added a button
[01:40:19]  here that was like click on click equals greeting and then i click here yeah we found it there we go you leak secrets by by uh yeah to be fair most of the
[01:41:03]  time if it doesn't work you're going to get a failure anyways because you're using some server specific module and you're suddenly it's going to be like the browser's
[01:41:10]  going to be immediately like what the hell are you trying to do loading node apis oh no we will we will we will just we will just fix it and look for
[01:41:24]  different shapes of quotes oh man okay okay okay okay so right now we're not doing anything too interesting we're just console logging okay now now we're back at our starting point
[01:41:37]  okay i'm not insane i actually kind of want to try this with client only mode now i wish i could like go all the way back but i don't i'm
[01:41:47]  also too lazy to well let let me see here this is basic if i go back to bearer and i click undone a bunch of times will it work yeah all
[01:41:58]  right okay let's do bearer because i actually i want to prove to myself at least that this works with client-side routing like csr mode okay okay so do
[01:42:21]  we see the page flicker like is this yeah the apps in there but if i look at the source over the network and i look at what i served from the page
[01:42:34]  um localhost i am not going to see a rendered app i am going to see some stuff from the index page and yes div active is empty so this is a client rendered
[01:42:47]  page this is this is c this is csr page and when i go to my fetch request and i click it okay it's still wait i'm i'm just not
[01:43:02]  i gotta apply the fix first right there we go bam okay is this a is this a thing are you not allowed to use the other quotes i thought that this was yeah
[01:43:28]  i mean i don't i don't know yeah okay so like nikil was basing his work on next the same vinci thing that we use under solid start here to
[01:43:42]  do the server bundling works in the keel's react framework which is basically a next clone he he did all he hasn't loved us he came on stream to tell us
[01:43:50]  this but he did this all because next built too slow for him he literally just like was like okay next is building too slow i'm going to build it on beat instead
[01:43:58]  like so yes we not he doesn't have all the versell features but like he has a working server component jit framework uh on beat anyway yeah so yes we can have
[01:44:15]  csr with server-side actions yes anyways this well this is part of the story right like today you have create react app and now you can just do this yeah use
[01:44:27]  strict doesn't allow yeah okay so nikil isn't wrong i'm just an idiot okay this is how you learn that you're an idiot on live stream all right all right
[01:44:43]  okay and actually our console oh and it's also how you learn that there's bugs in the implementation too that's interesting what's wrong with this what's what's what
[01:45:04] 's going wrong here this this is new this wasn't bugging out on me before oh do you know what it is i know what it is uh damn it it's
[01:45:21]  gonna have to do another release uh saraval here uh right before the stream i updated solid uh uh i'm hoping that this is the problem i think um alexis
[01:45:42]  did a update to saraval like just now into the 15s and i did this actually update anything i'm hoping that this is it otherwise like i don't want to
[01:45:56]  go back to a version that that was actually working properly that make me sad damn it okay i'm just gonna double check it's funny because the hacker news example was
[01:46:17]  working right like it was not doing this it's like this is i i so i basically just go on stream to basically do you know what it is okay we're
[01:46:45]  done with the basic example the basic example is cursed i'm i'm willing to bet that it's because it doesn't flush those helpers until you start streaming response and the
[01:46:55]  basic example or actually maybe maybe maybe if i turn off uh sorry bear maybe if i turn maybe if i turn on ssr or just remove this it will probably work
[01:47:20]  i think i think it's i think there's a high likelihood that the that the the the missing helpers for this to work or are serialized into the page during s
[01:47:33] sr and aren't there nope okay so that's just broken let's let's move on let's go back to basic because i think basic was working right all right
[01:47:59]  let's go basic and why why am i just having like such a good time here oh yeah because it's only server because it's only console logging on the server funny
[01:48:20]  the the basic example uh not the bear example the basic example that i was doing here was console logging instead of returning so we want to return and we want to console dot
[01:48:34]  log reading that we have to await in a async function okay yeah we're just going with the bear examples cursed okay now it's console logging in the client it's
[01:49:04]  coming in over the network beautifully yeah we're done with you i'm not even going to be tempted by you again bear example you've messed me up multiple times on the stream
[01:49:16]  it's like you are done bye bye okay all right let's the the difference between the bear and the basic example is basically um i had ssr true and false
[01:49:31]  but it's also that it doesn't have the router and i don't know what the router has to do with it but i'm gathering there's no suspense boundary in the
[01:49:37]  bear example which means that it's not serializing the stuff that alexis is expecting and i need to talk to him about that um basically requiring suspense to exist to
[01:49:48]  use server functions is a bug that we should be able to fix um anyway okay so what i wanted to show here in this example is that this response is kind of interesting right
[01:50:00]  so what if i did something like this new promise um was it uh what why am i i'm just like brain done now resolve yeah resolve resolve resolve actually you know
[01:50:33]  what let's let's make this more fun let's put a set timeout on this and let's say it resolves um after three seconds okay format this okay
[01:50:57]  so i'm gonna click it now that work let me let me just see here so i'm gonna click it again that wasn't really interesting though eh because it like literally just
[01:51:19]  broke the whole thing it's and i think it's because the way promise chaining works what what what if like it just held the whole thing so i mean that's
[01:51:27]  not too interesting i just faked the slower response but what if i did something like this what if i returned an object that had like uh something on it like uh it's
[01:51:36]  because you know how promise changing chaining works like promise and then it resolves them all but the new object is like it's delayed let's return an object that has a
[01:51:48]  new promise on it let's let's let's make this more fun now now now it'll happen i'm just curious okay that responded really fast oh what what you guys
[01:51:57]  see that let's do it again nothing oh there it is huh a bunch of more code is serialized here to do this but let's let's let's change our
[01:52:20]  code in here inside our greeting the reason i'm demoing this as i said i haven't come up with a good demo for this yet is i i i want to show
[01:52:33]  just how this works um mechanically because if we have response our res here and we console dot blog what this res is and let's add something else here oh sorry
[01:53:09]  it's not waiting it's immediate i love typescript in these kind of cases right the the it knew that i made a code mistake here and let's try this again
[01:53:29]  let's look what happens when i click loading hello world that's kind of interesting it so it's it's interesting because the preview here doesn't show it till it completely comes
[01:53:50]  in but these are actually like this expression gets sent down in the first chunk and then this expression gets sent down in the next chunk right so like like this this is this
[01:54:09]  is why i'm trying to get to the the the this per the point of like the benefit of of basically like don't get me wrong we could have just waited for the
[01:54:18]  whole thing but we're serializing an object that has another promise in it and chaining the the promises right we could we could make an async iterator and go
[01:54:30]  through and then every time the server does an update like um you know basically stream in those results can you call something like postman no like i mean yes but what like
[01:54:52]  what's postman gonna do with it you can call it with postman you're you're gonna get you're gonna get this it'll be streamed in but the the
[01:55:02]  what what's postman gonna do with this i like this all prettier fried obviously what we actually send looks more like this right but but but like you you you can send
[01:55:18]  it with postman but this is what i'm talking about these are not json apis these these are javascript apis is that promise result in the server
[01:55:32]  yes yes that's that's what i'm saying like like this is kind of how solids rendering works with suspense right we just we send a promise uh and then it has
[01:55:44]  another promise on it and then as they finish the stream just keeps on sending this the stuff in right but this this is also you know it can be nested it can be
[01:55:58]  deep this automatically the dupes as well um i i mean string is a terrible example but i wonder if i want to try this do you want to try this let
[01:56:12] 's i mean we're not going to get much satisfaction on the loading thing but i want to see what the i want to see i mean a string is a string so i
[01:56:20]  don't know will it will it um um let me click this let's see what this response looks like okay so string did not end up doing it because i see loading
[01:56:35]  here twice but what if i have my response be an object like um const b i i'm testing this stuff i have not tried it myself and i'm going to put
[01:56:50]  id one let's just put something on here and then we go immediate b resolve b what's gonna happen do we know see reference yeah it's because you can't it doesn
[01:57:12] 't do a reference for string so r1 is the r object and then the second promise is resolved again with r1 so it actually only serialized the object once okay
[01:57:36]  yeah you you want me to log the timestamps sure sure yeah let's let's let's do this um so console dot log um let's just do date now and let
[01:57:53] 's go start and then inside resolve b should we return it we go okay so first thing we should notice here is that when i go to my console you're not
[01:58:30]  getting the start end you're getting them on the server and you can see that this is roughly three seconds later right 47 thousand to fifty thousand so yeah yeah so like it
[01:58:53] 's funny misco does these kind of demos like all the time with quick this is this is how react actions like mechanically like they they also do stuff like this is how
[01:59:04]  they like do the jsx over the wire and like stream it it's like the same as the initial render essentially this is why like these are not api endpoints like
[01:59:14]  these are kind of proprietary um but they they are super powerful when you consider that you can like you know do this kind of stuff um so this is what i meant but
[01:59:28]  i'm saying that all the pieces of wine for rscs because it's like they knew that for updates they were going to need the super protocol they've been working on
[01:59:37]  react flight so this just like exposes that superpower right i haven't showed you anything that i consider actions to me this is just bread and butter um server server functions except
[01:59:49]  well maybe not bread and butter when we're using uh serival which is solid's internal um serializer for both initial render and for server functions so i think we're all
[02:00:03]  on the same page now make it show the stream as it's coming in i mean we we can see the stream i i've i've only got two points right like
[02:00:19]  the these two console logs is a stream coming in this was the first shot and that was the second shot like we saw them come in here and then we saw them come in
[02:00:27]  here yeah i mean any kind of behavior like this should be handled by the serializer but yeah i mean this this this is this is like the the bread and butter thing
[02:00:56]  once you have a primitive like this as i said i didn't recognize the serialization potential um initially but once you have a primitive like this like you the sky's the limits
[02:01:07]  because it just uses readable stream ultimately to kind of respond to these things so this is why i'm focused first on server functions because like this is already super powerful right i
[02:01:26]  uh like i i you can serialize a lot of really interesting stuff i mean i haven't i mean i haven't this is gonna break if i change yeah i don
[02:01:38] 't care let's go back to just console logging our uh our our response here right let's just go back to this we'll just go back to console on your response for
[02:01:48]  a minute i'm gonna go back to something a little simpler and what i wanted to show is that like we can we can do we can we can do interesting stuff we
[02:01:57]  can we can like we can even like send a response um what's the body um b i guess it's got to be what jason string if i be and then
[02:02:14]  uh what is it console dot law console dot log res dot json await it yeah wait it i mean this is just i'm getting into a zone of silliness here because
[02:02:34]  it's a response that's serializing a response um why am i making response serializer response see this is actually a response in that it worked we look at the network
[02:02:44]  call for this what you can see is it actually created a new response object new readable stream like okay this is a bunch of code here but it's actually yeah i mean
[02:03:05]  i don't know why i would want to do this but yes i can send a response over a response and then call dot json on it i mean this stuff is stupid
[02:03:16]  um is is this a solid feature no it's it's a well yeah yes sort of this is a serial valve feature this is all about responsibility benchy creates the server function
[02:03:28]  the serialization and i'll show you how that works in just a second here is something that we chose how to handle it um essentially so um like vinci gives us
[02:03:41]  the control over how we handle our server functions which makes it easy and i just happen to choose the same uh serialization that solid uses internally for like its uh resources yeah
[02:03:55]  this is this is what solid 1.8 was for people who are trying to figure out what 1.8 it was it was to support stupid stuff like this um can i
[02:04:04]  call it no serializing functions is very very hard and i know quick has has a way of doing it but that's because they actually keep references of of the function in
[02:04:19]  the code they don't like just stringify and send it over um serializing functions because of closures and stuff is very very hard if you if you really are interested in
[02:04:31]  this topic just send a message to misco maybe publicly on twitter and he'll he'll tell you all about what goes into serializing functions um like quick you will do
[02:04:44]  a demo where they serialize functions because that function reference has its own dollar sign and gets hoisted out and then becomes part of the code that can be lazy loaded via the
[02:04:52]  quick engine so like you can go really far in this direction i'm happy where we're at in that yes i don't expect people to do this but it enables things
[02:05:05]  that we need to do right and that that's that's the key part as a foundation this enables a bunch of stuff that that we need to do um you know like streaming
[02:05:16]  more html you know for like server actions you know now there's a difference in my opinion again i'm gonna and maybe i'm i'm splitting hairs here between
[02:05:28]  server actions even and what server actions are do for rscs you can have server actions without rscs just so like you can have suspense without rscs and streaming
[02:05:38]  without rscs react made it that all these things are part of the same solution which i can respect because it's like when i build my new framework you know like when
[02:05:47]  i like like how should i put it like if i was building a product i would just make all the pieces work for it right so like if the react team's building
[02:05:55]  next js and then they're like okay well let's just build all the pieces we need for next js then like i you know that is you know respectable because then it's
[02:06:05]  like we have all we need and we have a full solution but i i think there's like like it wasn't working today in our little simple example but wouldn't it
[02:06:21]  be cool if csr had server actions right i think so because i i've showed you why server functions are cool let's start talking about server actions oh sorry i hate
[02:06:40]  it seems like every two hours on stream yard it gets like really gummed down give me two seconds i'm just gonna refresh the page i'll be gone for 30 seconds i
[02:06:48] 'm not killing the stream just two seconds sorry stream yard dies after about two hours it just gets in this really yucky place um let's get in here okay yeah we
[02:07:19]  lost six people okay it happens no seven people okay let's keep on going um what i wanted to say and the reason i did the refresh is that i wanted to uh
[02:07:35]  where is it someone wrote why is it not even here anymore oh now i'm just mad at stream yard there was a comment that i specifically wanted to reply to and i
[02:07:50]  can't find it anymore it's it's this is this is very oh yeah it disappeared it's dev wrote so all we have to do is serialize signals yes yeah it
[02:08:03] 's funny stream yard deleted that comment this one for some reason i don't know why stream yard is yeah thanks for sending it again um yeah i mean this is one uh
[02:08:21]  what uh uh alexis was joking he made a post on twitter about um resumability and he was and like yeah i mean that that's that's the question i
[02:08:36]  think it's a little more complicated than that but having a powerful serializer as a core piece of your framework is a big benefit now when you consider ssr a
[02:08:48]  important piece of it okay so um yeah let's talk server actions a bit because i just want to show like server functions gonna do crazy crazy stuff so i already showed i'm
[02:09:03]  going to show the hacker news example first because before we get into actions um i wanted to show um that this can integrate into actual applications um and yeah yeah yeah i i
[02:09:20]  i think i might have shown this on stream already last time the new load apis for salt start where um this lets you do pre-loading in the client um and
[02:09:32]  it also like does hoisted fetching to make sure that like you um you you don't um get any waterfalls so it's it's like my new loader
[02:09:41]  pattern but the trick for this one um is not to put the reactive primitives in it but to use the cache api which um we talked a bit about this last stream
[02:09:53]  i went in here and i just took my cache api functions that i'd already created and i just dropped you server in each of them and called it a day which means
[02:10:04]  that yeah we're talking about tree shaking being good this gets tree shaked out because it's only used in here this whole thing gets fetch api gets tree shaked
[02:10:14]  out basically um yeah i actually did a test the other day when i was playing with this i went to hacker news and i went uh build and of course this isn't
[02:10:26]  going to work because i'm on stream but um if i go to node examples what is it hacker news i need to get better commands and in the mono repo for for getting
[02:10:44]  to the the node preview version of this stuff um obviously we already saw i think last time i was on stream i showed all the like pre-fetching behavior and
[02:10:55]  stuff but um what i didn't let's look at the source code here um refresh the page because i don't think we need we need all the stuff api.js
[02:11:13]  yeah you can actually see them even in the minified code um there's there's there's the way it got bundled has more stuff in it that's like hasn
[02:11:21] 't this isn't all the api this is actually has like i think the router gets pulled in on in this chunk or something and then it also has all the serialization
[02:11:29]  stuff that we need for the client-side serialization but what i want to show is that you can see the these are the wrappers around like those cash calls stories
[02:11:40]  users users and that that's it for that file like the this file that i was showing here with like all of this code becomes just these three cash calls right see stories story
[02:11:59]  user is just this it's like it's like cache function server function here's the keys that we need for the server function here's the key for the cache function right
[02:12:14]  like rest the code disappears um so yeah this way i can actually show it working with the tree shaking anyway so but my point was i still like this idea um we talked
[02:12:31]  about before with we have cache and action api wrappers it kind of pushes people into making this data layer because you want this get stories in multiple places like sure i want
[02:12:42]  it in my loader but then i can put it inside my component with my created sync call i can also put it in another component somewhere else and these are all going
[02:12:52]  to get deduped so that when we render um we don't double fetch like um they're tied to the cache so they automatically do invalidation um we're we're
[02:13:03]  back to mbc yeah um you know like basically these all kind of hi this this is what i love about the pen i mentioned last week is that this is tan stack
[02:13:16]  query right if you instead of doing this and using our cache apis you like tan stack you just go ensure query here create query here you are basically in the exact same
[02:13:25]  boat i the apis i'm showing today around actions are showing what i decided to do for the router as a base implementation you can choose not to use to use these
[02:13:38]  actions you can choose not to use our router you can just can put and stack router here if you really wanted to assuming it supports ssr like like solid start isn't
[02:13:50]  tied to a router with the next version but what i'm getting at is that this is why actions and server functions are different because um actions are something that the router adds
[02:14:09]  if you want to use tan stack query with solid you can still use server functions so you can go you can go you know whatever create query and call a server function there
[02:14:24] 's there's no reason for us not being able to just use our server functions directly um right and that has like independent i know recently um i think with the the release with
[02:14:38]  next you can kind of do the same thing um but i just kind of wanted to point this out because the action bit um doesn't necessarily have to do that it has
[02:14:48]  to do with the cat like because we need to support client side here there's like cache invalidation considerations which i don't think next worries about because they're only rsc
[02:14:58] s where this actually will invalidate client-side caches like react query so but i just wanted to kind of point out here that this pattern works very well in fact
[02:15:10]  tan stack router it uses the same load mechanism but the truth matter is this export const route that we have here could be any router config you want the only reason that it knows
[02:15:21]  that it wants load is it satisfies solid router but you could literally gut this and and put tan stack router and then basically say satisfies whatever the tan stack router route definition is um
[02:15:33]  as long as you have a way of taking a config object of routes i know tan stack router specifically needs to convert those into objects so it's like a little bit different
[02:15:42]  but essentially any router that can take a config object of routes can work in solid start um because this route config is just passed transparently to the the router it's like a
[02:15:55]  hybrid between file system routing and config based routing anyways um not what i'm talking about today what i wanted to show though is that this is basically the the pattern as applied
[02:16:10]  to what i demoed last week around routing what's a good use case for streaming over server functions well one of them is streaming the next like rsc content like for example
[02:16:23]  like in the same way we stream in our page and do like the suspense and the swaps you can stream in the next routed section with the suspense and swaps
[02:16:32]  instead of waiting for the whole thing now they're good use for streams um people like stuff like chat gpd you know um things where there's uh slower progress i have
[02:16:42]  to admit i don't think like outside of those kind of cases there's there's like a bunch but there are like i i do see that it's very powerful to
[02:16:50]  be able to even handle those kind of cases alone like slow data requests that require streams and obviously rendering the next page of content um i know people probably think of other uses
[02:17:05]  um i i haven't looked at their serialization format but they do have a special like you wouldn't be like they str they have streaming js responses so they they have to
[02:17:22]  be they have to they have stream responses they have to be doing something with the the their serialized vdom code like it might i i don't know exactly what
[02:17:33]  it looks like but if you look at it you're not getting json back when you do server you know when you're doing like these like jsx returns with server actions
[02:17:54]  server doing optics ui i mean yeah it's not just it's less that because it's more about just like the same reason why you stream an initial response right like
[02:18:04]  it the streams like you still have to go to the server to get the stream so it's not very optimistic um but it is good for um like the same reason you stream
[02:18:15]  their initial response like you still have to do the full round trip in the first place i mean server functions are just a mechanism i mean you could still use context or you
[02:18:34]  know this cache api thing like server functions are just like pretend from a client side perspective pretend they're a fetch call so how do we redirect you guys i'm i'm
[02:18:45]  this is what i'm trying to get to right there's no way this well it's interesting um i haven't added this because i told you the direct function calls on
[02:19:04]  the server but technically speaking if wherever you're doing a request you're gonna you're gonna hit the middleware so you you still can go through the middleware setup i
[02:19:15]  i don't have it here uh in the any examples maybe it's an experimental one but there there's a new middleware set up for for solid um i haven't standardized
[02:19:27]  it completely but it's based on uh h3 or nitro's middleware so it is possible that every time you go through the middleware you can do this kind of
[02:19:38]  logging stuff it is handled like an api endpoint um yeah um we moved the middleware out of the main handler now so that you can set global middleware that works
[02:19:54]  uh for every request on the server api endpoints server functions um and yeah it just helped unwind stuff a little bit anyway um let me get to my next example because
[02:20:08]  i think the most basic server action example is not to do mvc it's what we call with off and example with with off um is dev okay let's let
[02:20:23] 's open up example with off is a cool little example it is literally an api endpoint and then a routes endpoint and what does the api endpoint have uh so it
[02:20:40] 's not api endpoint it's really just routes and an eight so i didn't mean endpoint i mean folders there's an api section and a route section and what i
[02:20:48] 've done here is i i need to i haven't refactored this since the better inlining of the server functions but essentially what i've done here is i created
[02:21:00]  a file that's like the api interface essentially which just has our cache and action wrappers so this is git user which gets the logged in user and then login and register
[02:21:09]  and log out are our two actions i gave them a name which is important identifier it's actually not necessary for server actions so technically speaking i think this example now works if i
[02:21:21]  get rid of this of course i say that and it's going to break but essentially we our actions that we're pulling in are coming in from the servers thing which is
[02:21:30]  basically there's a few ones there's log in a register which works off form data gets a username password checks if it's a log in a register does the appropriate action and
[02:21:41]  then the these are a bunch of awaits and then it returns an error or throws a redirect uh this one just tries to do it or throws a redirect and then this one throws
[02:21:51]  a log out and you're probably looking at me here like throw redirect but you know do you know what's cool about this what is the type okay this is of git
[02:21:58]  user it isn't it never thinks it's a response it's type of user what's the type of log out it's a promise of void what's the type of log
[02:22:08]  in a register it's a promise of error now that might seem weird to you but if you think about it this is actually really useful to have really good type information because
[02:22:20]  and sorry i didn't show up the db one is just like a fake it's not a real db i probably should use on storage or something for it doesn't
[02:22:26]  matter it's just like i made a fake in memory thing but the reason i'm pointing this out is that when we go into our login page and we do our stuff
[02:22:36]  what we're going to do here is we're going to import our action login or register we're going to assign it to our form and then we're going to use the
[02:22:46]  submission so that we can see the state and this result is it's either undefined or type error which is exactly what we want so that we can show the stuff
[02:22:56]  if we throw things they don't end up in the type script so like like essentially like if you throw an error you're telling the application that hey i don't know what
[02:23:09]  this is right in this case and like the error boundary will catch it but if you're returning an error and i could have returned just a plain object then now because we're
[02:23:20]  importing this directly which has the right types passing it through use submission which has the right types we we can type our our optimistic updates this is essentially our optimistic updates mechanism or
[02:23:33]  error mechanism um the result is the error mechanism but this also has the optimistic updates and essentially um i talked about this before this is using my the the two string mechanism um
[02:23:49]  for the actions that i was talking about where um essentially i made it so that action and form action support serializable attribute value which is a special class or type uh interface or
[02:24:03]  something that essentially if something implements it then it will accept that object as a jsx attribute because it knows it can be stringified to the proper value so in this
[02:24:17]  case the action becomes the url of the uh the action and this means that well i think you can start seeing where i'm going here because this action wraps a server function
[02:24:32]  directly and then gets passed to a form directly which means that if i start this example which i think i have first of all when i log in it's going to redirect
[02:24:46]  me to log in why is or when i refresh you know why because i didn't show this yet if i go into index and this has preload i i guess i set
[02:24:54]  up but this create async is based on getting this user and if if we go back to our server thing here if when we get user we get it from the session
[02:25:09]  and if there is no session we throw login so you're not logged in so we're gonna we're gonna throw the redirect to go to the login page so instantly this stuff
[02:25:20]  works you know um and then obviously those errors i was talking about you know username must be at least three the password needs to be at least six it's an invalid login
[02:25:35]  like these are all errors that we threw so let's actually do a proper one where it will redirect us to the proper page and now we're signed in now over the
[02:25:47]  network this isn't rscs where we're doing single trip when we have the hybrid routing with solid it will but right now this is very much a client routed client
[02:26:01]  setup so what you're seeing here is literally one response which i can't see one's response which is a redirect i think we we have to use not 302 because
[02:26:14]  of what we talked about before about the browser doing a full refresh but we should see if we look at the headers we should see a redirect what's this one the other one
[02:26:27]  here is the data fetch right this is the error coming in more errors more errors there's the redirect for when we successfully logged in um you can actually see the the form
[02:26:46]  data posts here um i'm trying to see i see the response why why am i not seeing the response headers properly oh yeah i'm like dumb location slash where this one
[02:27:06]  location login i'm just sorry sorry guys um and then what we will see is the user serialized back in as well to show their name here when we do the successful facts
[02:27:21]  and when i log out we'll log out again but what i was getting out of here is if we if we look at this form and we inspect it what you're
[02:27:27]  going to see is that the action it's actually the server action serialized here and what this means is that if i go in here and i go something like disable javas
[02:27:40] cript there's no javascript on the page full page reload full page reload won't let me get in there because i'm not logged in but we can still you
[02:27:52]  know do stuff right wrong wrong wrong password you notice that the fields are clearing and this is you know simply because of like it's not perfect with the progressive enhancement but you can
[02:28:14]  at least see that we actually have the same behavior with no javascript running right this is not a new new trick at this point we've seen this a long a
[02:28:22]  long time i have thought about doing this so that that is fine it as long as people know to return. The one problem with this API that I found is if people
[02:28:42] , maybe it's enough that they know to return, it'll be fine, is that I was looking at the next docs, right? I was going to next, next
[02:28:51]  app directory. And I was looking at them and I was like, what is it, cache? There's some, maybe not cache, or is it routing? No
[02:29:05] , I want data fetching, yeah. They had an example somewhere in here that had revalidate calls and redirect calls, and they weren't returning them. They
[02:29:30]  were just sitting there. And I was like, if it through, and it does not get to the next line of code, that would be quite alarming. But I
[02:29:39]  suppose people would prefer return. So I'll take that into consideration, definitely. We can definitely make the function throw instead of that. that it's just, if the
[02:29:50]  person doesn't return, it also throws, right? So. Like, I, I, for me, it wasn't clear, but if, if people are used to
[02:30:04]  that, maybe that's a really clever thing. We can just put the throw inside. if you try to put a try catch, you have no idea what throw.
[02:30:12]  That, that, that is, that is honestly an issue with this in general. I, I, I do want to point this out for people kind of thinking about this
[02:30:21]  stuff is, there is a difference between a action that calls a server function and a server action in this case. Because, um, if, if, if someone has
[02:30:35]  client side code wrapping, like in our case here, we were just taking this directly in, right? Um, we're, we were just like, this whole file's
[02:30:45]  a used server and the whole thing is so like, there's no client code, but if we had, you know, a function in here that was calling GU,
[02:30:53]  you know, you know, went like this, you know, if we did this now, this has to be a client action because I mean, this is cashless,
[02:31:07]  a bad example, but you know what I mean? Because there has to be JavaScript that runs to call the function. Um, and like the, there, so there
[02:31:19]  is a slight distinction here. Um, let me see if I, like, I'm pretty sure if I even tried to do this, I'd complain about not having a
[02:31:28]  name because server rendered client actions need to have a name. Otherwise, um, there's nothing to put here. I I'm not showing it in this example, but if
[02:31:37]  we aren't dealing with a server action, what the form actually ends up, uh, let's turn JavaScript back on. It is funny. Sometimes I forget when using
[02:31:46]  solid start that, that, that there's, there's JavaScript, uh, disabled because like it works relatively good without JavaScript enabled. So when you're just playing around,
[02:31:58]  you might not notice, but, um, what I wanted to point out was that this form, if it's not a server action, it won't have the server action
[02:32:09]  URL. It will instead have action colon something kind of like mail to colon something. And that's what the thing picks up, um, to figure out what server action
[02:32:19]  to do, because this is based on a, a, a delegation technique. What I ended up doing with the, with it, with this is because some people were worried
[02:32:27]  about catching all the forms. I basically said, if it doesn't follow the protocol, like the action colon, or it doesn't start with a prefix that you define for
[02:32:34]  your server actions and the form doesn't handle it. So it's very easy not to handle all form submits, um, with this approach, um, without the
[02:32:43]  user having to do much config at all. Um, so like, like meta framework, like this knows all its server functions are underscore server. Then the, any form
[02:32:51]  post that doesn't post a underscore server or doesn't have action colon, the action name will not be handled by it. And this is something the router can do without the
[02:33:01]  framework, even being aware of it. Like I haven't mentioned it's all the action and cache code. I mean, you can see it. It's coming from
[02:33:13]  the router. It's not coming from solid start. Um, if one thing you're going to notice if moving around here a lot is solid start actually doesn't really have
[02:33:24]  many exports. Um, it has wrappers over h3, which I think I need to improve the API for a bit here. Um, but like it's,
[02:33:36]  it's basically the h3 or nitro type stuff, which I think. Vinci might just take the role of, of abstracting over that. Solid start itself doesn
[02:33:45] 't do much. It has like three features, which is kind of exactly. what Ryan Florence was saying at the beginning, because I'll show you how the dance works
[02:34:09] . Yeah. People commenting on the whole thing about, so yeah, so this is what next does. Yeah, I, it, it's funny. Like I,
[02:34:23]  it has to work this way, but like, I struggled with it a lot. Cause I was like working through all this stuff and I'm like, I want to know
[02:34:31]  that it's thrown. I don't know. This is, this is one of those things that I struggle with. Sometimes you've got to just go with the easy,
[02:34:36]  simple APIs for people's sake, not to be transparent. I just really like being transparent. I hate when the stuff is like, like too clever. I'm also
[02:34:47]  a green red player in magic. The gathering, if that tells you anything about my personality. So I didn't mean avid like competitive green, red player. so
[02:34:57]  if that means something to you, you'll know what I mean. I feel like, I feel like sometimes the react team is kind of like. blue, black or
[02:35:13]  blue, white. Yeah. I know they're blue, white. They're definitely blue, white. Yeah. Reacts blue, white. All right. Yeah. Ret
[02:35:28] urning errors is smart though. It's like the distinction between 400 and 500. And I think, I think this has always been kind of the, the, the thing
[02:35:36] . So, I mean, this is the server functions themselves. If you want to see, and the actions, how they implement, like I could show another example with the
[02:35:48]  JavaScript off, but I think you guys have all seen the to do MVC example, right? It's, I love how, like, don't get me wrong.
[02:35:58]  I think the to do MVC example from a code standpoint, this is like 30% more code than just doing it without actions, but I've gotten it to,
[02:36:09]  but it has optimistic updates. I've gone to a pretty nice place where I'm at the top of my file here. I'm doing cash action, action, action,
[02:36:17]  all the different actions. And then create a sync to get the stuff. And then you see a lot of this to first stream too, right now, because I have solid
[02:36:25]  start setting set up to always stream. So it's quite common for me to put the first stream on a lot of the resources if I don't want it to stream
[02:36:32]  initially. But then I'm using the submissions to get the lists that I use for the optimistic updates. And then there's a bunch of this optimistic update calculation, like remaining
[02:36:43]  count is to do's length, plus at adding to do length minus the ones that are completed and the ones that are pending completion. Like there's a lot of math
[02:36:52]  sort of do with the optimistic updates. But the end result is that I can just go in and kind of just put forms in like natural, put the actions in. Here
[02:37:05] 's the per row version. These have their own submission that they care about, like for the current row. So if the form data equals this, honestly, doing this
[02:37:15]  example without all the form stuff is much nicer. But this works when JavaScript is turned off. But yeah, you can kind of see that that's basically it. It
[02:37:35] 's incredible how much functionality with optimistic updates and everything is just piled into this simple example. Where's the optimistic updates? I'm going to show that. For each adding
[02:37:43]  to do, show the pending to do while it's going. There's even the ability to, I don't know if this one has the error ability. No, this
[02:37:52]  one doesn't have the errors in it. But yeah, anyway. I think it's probably more interesting to actually see the API behind it. I used un-st
[02:38:05] orage with the file system persistence to do this example. But you can see that these are just form casting. I would love, you know, we put some stuff in there
[02:38:19] . But it is, again, very cool that you can see, whereas, you know, you get the right types. I don't know. I think this was always
[02:38:27]  what bugged me about all starts old thing. You'd use server data and then, or use route data. And then, like, the types would be lost.
[02:38:35]  Now you just import everything. And because you have these kind of action and, which I showed here, sorry, these action and cache wrappers, this symbol can be used
[02:38:49]  all over the place, right? And because you want to wrap and import it in different locations for optimistic updates, it kind of encourages you not to put server functions inside
[02:38:58]  your components. Like, it just naturally happens from the API standpoint. Because quite often, I mean, you could still do it. But quite often, like, you might
[02:39:07]  have a component which does the action that, like, two components, one that submits the action and another one that wants to show the optimistic updates. And you just
[02:39:17]  import the action in both locations. One just passes it to the form or calls use action and the other one uses use submission. And then you basically have this ability to,
[02:39:28]  you know, just take the action and get what else you need. Like, you know, depending on what the, you know, like this one, a submission array
[02:39:40]  or, you know, whatever you need. It just types pass all the way through. All right. Why server though? Can you make it post the same URL and distinguish
[02:40:00]  that on the server side? Why would I, I mean, because we just, they, they all are going to this, all the server functions are going to the
[02:40:09]  same URL. This actually creates one actual endpoint, the way this works. So we're not, this is what I was talking about. The whole like post versus get,
[02:40:17]  like actions don't live in a certain location. They actually just have one endpoint that the server chooses, which, which handler to call with it. Yeah, exactly.
[02:40:36]  Well, the reason next does it with the thing is they, they put the hidden fields. They actually transform it. I forgot to mention this, this mechanism doesn't
[02:40:51]  use any custom compilation on the actions side of things. Because the action piece belongs to the router. It has nothing to do with solid start. So like, like
[02:41:12]  we're not looking for form things. This is a normal form. Every mechanism here, there is no special transformation. We don't generate hidden fields, which may, you
[02:41:20]  start going, okay, well then how does closure extraction work? We don't, I, I still, I'm fairly anti closure extraction. My intention is to support
[02:41:29]  the bind syntax. It's still shipping all the closing components. Yes. Yes. This is not, it's important to understand that these are all different pieces of the puzzle
[02:41:43] . So like, like I can go in the Hacker News example, I can turn on islands true and not ship all the component code. But this has nothing to
[02:42:00]  do with the, the, the, the server function mechanism. Now, do actions need to be aware that, that they have the ability to send back JSX?
[02:42:13]  Definitely. When you get into the RRC type mode. But as I said, this will be a new balance between the router and between the action handlers, which I
[02:42:23]  haven't showed you yet. Like one big thing about Sol Beta 2 is we did have a server component solution in Beta 1. But because of the, the re moving
[02:42:34]  stuff around and pulling the router, like start does not have a router. We, we're going to have to implement that in, in Solids router. For example,
[02:42:46]  if we want to get server component type, like navigation back, it has nothing to do with Solids start. It might have something to do with solid, but it has
[02:42:54]  nothing to do with Solids start specifically. So, um, Beta 2 is going to have CSR, normal SSR with, you know, and it's going
[02:43:06]  to have most likely, um, islands mode without, uh, client side routing. So like the Astro type situation, it's not going to have, um,
[02:43:16]  the server function stuff immediately, but you can tell every piece is being built in a way that anticipates and makes the migration between CSR straight to server components, the same
[02:43:28]  API basically. Like, so that whole spectrum collapses. Um, I knew we wouldn't be ready with the solution, um, because of features we had to make,
[02:43:41]  like our prototype for hybrid islands routing makes assumptions, which I don't feel comfortable calling a 1.0 yet, but that can't block solid start and, you know,
[02:43:50]  solid 2.0 also in the wings. We have multiple things, we have multiple things flying. So, um, our, our, our server component equivalent won't
[02:43:59]  be there immediately for solid start, probably not even for 1.0, but it's, you know, it's what Alexis is kind of working on and working towards,
[02:44:08]  um, first the islands and then building the router. Yeah, I, I, I suppose so, but someone could add a, like a, a view transition router
[02:44:24]  to start, I guess, if they wanted to, it's tricky because like old solid start was a lot like their view transition API, but it doesn't actually solve the
[02:44:34]  server component problem. So I, I need to step back. I basically went as far as I could with something similar to the, the like Astro view transition thing.
[02:44:41]  And I realized it was a dead end. So then I had the kind of backpedal, um, it's, it's tricky. It needs a bigger change
[02:44:49] . And at the same time, um, breaking stuff out into its own responsibility makes it a little bit trickier. But I think in the end, the pieces, I
[02:44:59]  already see them, you know, you can already see them fall together. Yes. No, resumability and islands have nothing to do with each other again. Sorry.
[02:45:13]  You can make resumable islands, for example. In fact, quick and Astro is an example of making resumable islands. Um, islands are a mechanism
[02:45:21]  for. Doing partial hydra, like partial hydration. I hate to call it because resumability isn't hydration, but it's a way of shrinking down. The size
[02:45:30]  of the code or the range that the client's responsible for. So instead of being responsible for the whole page, it's only responsible for, um, these little areas.
[02:45:39]  Resumability is just the ability to not run hydration when hydration happens. And then server components is just recognizing that the stuff outside of the islands can be still updated
[02:45:56]  without reloading the whole page. So it's a routing problem. Basically three things. All related, not the same. Uh, it did it manually and it uses
[02:46:13]  used client essentially. Okay. So, um, yeah, I, I think. I, the, the, the, there was a question that came in that was like
[02:46:30] , can I still manually get the URL? Yes, you can. We need to get the types for this working, but I want to actually show you where all this code
[02:46:37]  is. So I'll start to see a few, a few months ago. Um, I did a couple months ago, I guess I did that beat talk and I
[02:46:47]  told everyone how I deleted. Like 90% of the code of solid start dropped us down to 30 files and. Like 1200 lines of code from 10,000 lines of code
[02:46:59] . Well, now that I've finished implementing the rest of the features for the most part. For the beta two, like we're getting very close. I'm literally
[02:47:06]  dragging on docs. At this point. I haven't shown you the revalidation. We'll talk about the invalidation in a few minutes. Um. We're
[02:47:14]  only at 1300 lines of code and 32 files. So essentially. The, it looks like where we're getting to is actually going to be a split. It's not significantly
[02:47:28]  larger. That it's because I, it's, it's kind of like what Ryan Florence said. I've been spending all my time in the router. So is
[02:47:35]  it fair to say that, that remix is its router? I don't know. But that's where the, as a developer, I've been spending all my time.
[02:47:45]  Some time installs itself, right? Solid 1.8. These are all pieces that need to come. So when people are looking at solid start and they're like.
[02:47:53]  Man, there isn't much movement on the repo, you know, until recently. It's because all the other pieces are actually where the work's happening. Which is
[02:48:00]  great because in the end, solid start disappears. Like it doesn't completely disappear, but it's not a thing really. It's like just our starter template. It's
[02:48:07]  funny. Ironically named wrap. No, intentionally named. Okay. So the answer to this question is. In this config, this is all the Vinci stuff.
[02:48:20]  And there is not much of it. This is like the craziest file we're doing the config. I don't expect you to look at this, but we have these three
[02:48:28]  lovely files. Server runtime, server handler, server functions, runtime. And all we do is with the compiler wrapper. This is on the server side. We take the function
[02:48:39]  and we wrap it in a proxy. Essentially. I mean, I could probably get rid of this proxy and just add like a getter or something. But essentially,
[02:48:49]  if prop equals URL, return the URL. When you call apply, apply it. This is essentially like, it was just a simple thing that Nikhil whipped up. So
[02:49:02]  yes, that .url is how we serialize it into the form. And it's also available to anyone. They can take the server function, go .ur
[02:49:11] l and they will have the URL, assuming they type it right. Because obviously, without server dollar sign, it's not aware that it's a server function. That's
[02:49:18]  like the one downside of the use server approach. And if this is the server side version, well, the client side version is basically the same thing. See, look
[02:49:36] , here it is. Get URL apply. Now, these are each on each side. And basically, there's some stuff that's considered for handling islands. But most
[02:49:46]  of the code in this file is actually about how we actually do the fetch from the client. So when someone calls the server function, it looks if it's a form
[02:49:57] . So that does the form data thing. Or it sees if it's JSON. So right now, we're only serializing to the server JSON or form data.
[02:50:06]  We're not doing any of that crazy stuff. But the response is, they can be more crazy. And then, if that response is a redirect, we throw it to
[02:50:16]  continue that trend. If it has a revalidated header, we throw it with a custom body for deserialization. I'll explain why we have to do
[02:50:25]  that a bit later. And otherwise, we just do the crazy deserialized stream, which is the stuff you were seeing before. This is the thing that allows
[02:50:36]  us to have the promise, returning promise craziness that we were doing before. So there's a little code involved here. But this is all the code that makes it to
[02:50:47]  the client for that side. And then, this is basically all the server function needs to know about. It needs to know that we needed to set a convention for setting
[02:50:59]  headers for revalidation. And we needed to know that throwing a response is a thing, right? But if you remove this and do completely client-side stuff,
[02:51:09]  it still works. Because the action knows how to handle response objects. This has very little responsibility here. On the server side, the server call is looking for posts.
[02:51:24]  We can talk about expanding the get in the future. But it essentially either tries to get a header which has the information it needs to figure out what the right server file is
[02:51:37]  that it wants to grab. Or it grabs it from the URL, like in the case of the form submit when the JS is turned off. And that gives it what
[02:51:45]  it needs to actually import the right function to run. And then parse it appropriately. Like if it's form data or JSON. And then essentially inject async local storage
[02:52:06] , which is how we get the context, like the request into your server functions. And then call your action. Call your action. I don't know what it's
[02:52:19]  called action. I should call it something else. That's fine. This is just server function. It has nothing to do with actions. And then basically handle the Node.
[02:52:26] js case. Handle the. Yeah, I guess that's the coolest thing about the. The way, like the serialization of the errors when there's no JS
[02:52:37] . I didn't really focus on that when we were doing the. I mean, is that example still on this one? I never actually showed. I think there might be
[02:52:46]  better ways to do it, but I never showed when the JavaScript's turned off. Where am I going to be? Disable. Disable JavaScript. When the JavaScript's
[02:53:00]  turned off here. And you get the error. We're actually sending it on the URL. There might be better ways to do it, but that's how we're getting
[02:53:10]  these flash messages. Just an aside. So that's what you're seeing here. It sends the submission back. And then. Then it handles, you know. Handles
[02:53:23]  the redirect case. What else do we have here? Yes, that's a normal redirect case. And then, yeah, here. This is where we handle those throws
[02:53:35] . If it's a redirect. Do that. Otherwise. Send an error. Send an error response. Anyways. You know, we're actually using text JavaScript as the M
[02:53:48] IME type for these. So. Yeah. Basically serialize the stream. Deserialize the stream. And again, this is Sarah Bell's stream. Cross
[02:53:59]  serialized stream management. Is wired up. I will basically take these functions from Sarah Bell. And because I have these hooks for the server function of Vinci, we just
[02:54:10]  wire them together. And these pieces just work. Okay. So. Yeah. I mean, I wasn't sure. This is a tricky one. Because they said
[02:54:34]  to stop doing the X prefix. But they meant that for public headers. Like, it's deprecated. Like, because it eventually becomes the header. So, like
[02:54:40] , just don't do it. But it's like, there's always a desire to, like, namespace it. Just, like, be like, it's
[02:54:46]  not. Like, indicate. Like, I don't have to use X. I could use something else. But X, you know. If you. I don't know
[02:54:55] . If it feels like. It's kind of like. Yeah. I don't know. I don't know. Someone should make a gadget. answer your requirements.
[02:55:11]  And make an architect approach. Affirmacy can implement it. I mean, I tried to do that with. All the patterns. What was it? That article. Dev
[02:55:21]  two. But I realize it's a little out of date now. I, it was like. Did I release everything? Yeah. I think it was single. What was
[02:55:30]  it? Twenty. Twenty two. Oh, that's terrible. Because it's literally. Building patterns for websites. But I mean. This is a very hard topic.
[02:55:43]  Anyway. But yeah. I've been spending all my time in the router. Because if you look at it. This just handles a very basic amount. Amount of
[02:56:01]  stuff. Like it. Like essentially. I think this was the best example of it. Like it just. Does a fetch request. Does some deserialization. Th
[02:56:10] rows a response. It doesn't know on the client. What else to do with this. And that's where the router has to pick up. Right. I
[02:56:21]  don't know. I'm not even signed in on this one. Let me see. Do I have the router locally? Um. Probably don't even have the router locally
[02:56:33] . My luck. It's fine. I can get it. Or I can just. I can just actually just sign in on the client. I'm going to
[02:56:46]  get up. I can just. I can just actually just sign in on the client. Uh. I'm going to get up. Give me two seconds. It's funny
[02:57:06] . The login. Oh. It's because I'm like. I'm zoomed in so far. That the login screen. Um. Oh. They're making me two
[02:57:13] -factor. I'm glad I have my phone right here beside me. I feel like I did this like last stream too. Doesn't it feel like I just
[02:57:20]  did this? I don't think it matters if I put my authentication code here, right? Okay. All right. Um. Because. 35. Yeah. All in
[02:57:54]  the last. Couple of weeks. Um. What did I want to show here? Um. Yeah. It's just because I only finished this. This morning. Essentially.
[02:58:05]  But as I realized that there was this challenge that we faced. Um. Where. Data. Data loading. Load function. Use submission. Validation. Where are
[02:58:21]  we? That. It's difficult to get. The. Okay. There's a tension right now. There's a tension right now. And there's a difference between
[02:58:31]  like. There's a difference between like. Remixes defaults. And nexus defaults. And remixes defaults make a lot of sense. When you have
[02:58:44]  client. Duh. Which is why it's more interesting. But what. For. What. What. I'm trying to look at here. When it's like universal
[02:58:51] . But like. If you. Don't call. Revalidate. I don't think next. Clears everything. Because the cache is really like. For
[02:59:03]  the most part. Only on the server. Right. You. You use the cache function. With your async components. And then. It lasts the life cycle. The
[02:59:11]  request. So like. What are you revalidating? I mean. You're. Revalidating the page. Um. So. Like. They don't
[02:59:19]  have the key. You're generally not doing like. The same sort of. Key based validation. To my knowledge. And. Oh. Why am I not seeing this?
[02:59:27]  Solid tree. Create a sync action. I. I'm. I've been. This is what. I. Where I ended up. I wasn't really sure. A
[02:59:36]  hundred percent. If I want to end up here. I tried calling separate. Revalidate calls. But those have nothing to do. With the redirect. That happens
[02:59:42]  after it. I need to get. That. Into the thing. So what I. Start. Basically. I could have used headers. But. What. I. Did
[02:59:53] . Was it. Gave in an extra option. Which shortcuts. It getting added. To the headers. Because it basically. Just adds. The x. Reval
[02:59:58] idate header. And then. Any. Cache. Like. Function. You can call it. You can get the key. Which is just like. The overall
[03:00:06]  key. For the whole function. So like. Forget user. You can just get. User. But you can also get. The specific key. For the specific. Arg
[03:00:14] ument. element. So like. Like. If you go. User ID. Then you can invalidate. Either. All. Every user. Or just. The single
[03:00:21]  user. Um. You. It's a string. So you could. You can kind of. Figure it out. Yourself. What. What the encoding is.
[03:00:28]  But. Um. These helper functions. Um. Essentially built into. The cache API. Let us just. Do this. And for that reason. It'll either be a
[03:00:36]  redirect. And actually. Let me open up. Discord here. For a second. Because. I. I. I went and explained this all. In Discord chat. When
[03:00:46]  I was trying to get feedback. Before the stream. I don't know if anyone actually. Saw it at this point. Where is it? To do. Technology. To
[03:00:52]  do. Next. I just. Yeah. No one. I just wrote. Blobs and blobs. Blobs and blobs. Blobs of stuff. Trying
[03:00:59]  to decide. What this API was this morning. And then I implemented it. All within the two hours. Before the stream. Um. I've not. Tried this
[03:01:08] . Yet. But. Essentially. The. It's. It came down to like. This disconnect. Which is very tricky. So. I'm just going to tell you
[03:01:16] . Where I landed. And if there's questions. We can get there. But essentially. The redirect case. We just saw. You know. If you do something.
[03:01:23]  You throw a redirect. If you don't. Redirect. But you want to revalidate something. you call reload with the re revalidate options
[03:01:30]  this allows you to pass headers and other response niche stuff if you want to status whatever you know and then if you don't care and you just sorry if you don't care
[03:01:43]  and you don't send anything back it's going to do like what remix does and reload everything currently on the page and then if you really want to send some kind of
[03:01:55]  response body back and do invalidation then like this is very uncommon case like most of the time you can see like if you're updating something and it fails you're probably not
[03:02:06]  going to revalidate because it erred you're going to like have to do your operation again right so usually just throw reload um only a success or throw redirect only
[03:02:17]  in success whereas most of the time for someone just doing stuff that you it's the remix scenario you just reload all the data um for that current page you can just do
[03:02:30]  this and not worry about it and it's only in this i don't know what this case is i think this case is if you want to return a success message from the
[03:02:39]  server and not do a redirect that's when you use this i haven't made this easy i just don't like this because this sucks for uh from a a type perspective
[03:02:56]  because you understand the problem with this from a type perspective is even if i made a helper that through here you wouldn't ever know that it returns this this this breaks the
[03:03:09]  illusion what's really cool about all these other ones is like this update users i mean it doesn't return anything but it well it knows that it returns error right these ones all
[03:03:21]  return error this one returns error or response and even if i could make it throw um like it could never know that it also returns this so i don't have a great
[03:03:35]  solution to this i admit but this was the only way i could figure out how to make it work on client and server um so to speak this is i feel is like the
[03:03:46]  very rare super rare case but i could be wrong but essentially it means that the the reason this all works is i showed you the server function side of things but the the
[03:04:01]  action side um i love how this file is only like 100 lines of code um essentially is all in this handle response thing it's like if it's an instance of a
[03:04:17]  response if it has the revalidate headers then get those keys if it has a custom body that needs to be you know serialized it'll await that and get that
[03:04:30]  if it has a redirect then it will redirect the new location either if it's not a local redirect it will actually redirect the whole browser otherwise it'll navigate using the client
[03:04:41]  side router um if it's not a response it'll just set the response with the data and then it will take the keys that you got here from the response header and re
[03:04:51] validate it if that's undefined revalidate just uh runs over the whole thing instead of the specific keys so you don't see that code here because
[03:05:03]  that's part of cache which does the revalidate right checks if the array or not um but handles it in a transition but that's basically the logic we can
[03:05:16]  keep the default like update what's on the page while giving the ability to do granular revalidation cross-server client um and this code is all in the router
[03:05:29]  right the router just knows as i showed you like cache where's the handle response on this side um it just it just looks at how it can handle response responses and then
[03:05:42]  does the correct routing right so in this way we decouple the server functions from the actions and the caching and the the routing problem the routing essentially because otherwise the
[03:05:54]  server functions would have to know about the router which creates a pretty tight coupling i think but anyway that that's where i'm at um as i said this is a lot
[03:06:10]  of solid specific stuff but i i think you can start seeing with the design implementations a lot of the the the kind of considerations like the biggest difference um from the we implemented
[03:06:23]  like rsc style server actions in sol beta 1 and all it was was just putting an extra header on the on the request so that the server would know that hey don
[03:06:35] 't do an actual redirect internally redirect and render the new page and send that so like again by using headers as like a mechanism on a response object we can keep the server and
[03:06:50]  the router kind of decoupled like don't get me wrong there's definitely special standardized headers that have to be standardized between libraries but another router or another you know meta framework
[03:07:04]  could implement these and play with each other because it's just using headers to to do the communication funny thing is i've always liked typescript on the server i've just hated
[03:07:20]  it in the browser with client side libraries like um there i think like jsx and stuff has turned me off more than stuff typescript on the server is actually quite nice
[03:07:48]  um well that's a good question the because i don't know all the use cases but closure extraction is the first thing that i that that i think of when i come
[03:08:03]  to this because next is that encryption thing where they encrypt the stuff that you send to the browser and with the solution i'm i'm i'm doing here we don't
[03:08:10]  secretly send anything to the browser everything we send to the browser is explicit so like there's no closure extraction you either pass it to the server function or you bind it to
[03:08:21]  the server function so in a sense i mean you can tell me if this is necessary or not it's kind of like on you like if you are going to bind something
[03:08:31]  or send it to the client like very explicitly then like um like you could probably also handle the encryption like it doesn't have to be a detail that we have to be aware
[03:08:47]  of um i think now is there other use cases where we do need should be using encryption for security i imagine and i think some people should vet what i'm doing to
[03:08:57]  make sure that i'm not missing stuff i've i'm mostly taking this from a perspective that all our stuff is very explicit so like you don't have to worry about us
[03:09:08]  secretly sending stuff to the client that you know it can happen if tree shaking fails but it can't happen because you're using the code properly like like look like like if
[03:09:22]  tree shaking fails there's a good chance the whole thing your app's gonna like be crashed it's not because like everything's working and you didn't realize something went across the
[03:09:31]  serialization boundary i'll use the same payload format for initial ssr data in an embedded htm like you do for action to loaders yes that was what i
[03:09:46]  was showing earlier we actually use the same streaming format for both the embedded script stuff and for the stuff we stream so like that that's how we can support sending this stuff
[03:09:57]  across it's just cereviles serialization yeah i mean but it's kind of like that's a utility that someone can choose to use it's not something that like
[03:10:13]  i i the biggest thing okay and and then maybe you can you guys can view this an opportunity is my interest of solid start has always been a starter i don't like meta
[03:10:23]  frameworks i'm i'm very happy that the bear example when it finally works is like five kilobytes like because then i can just go into the template repo and say okay
[03:10:34]  these are all solid start templates essentially like i i just i've made a better create react app that's all i really cared about if if if you if your goal is
[03:10:45]  to make this i don't know what there's some really good javascript like i'm not gonna use next example like but like full stack back-end considered solutions
[03:10:57]  with all these features and utilities and have everything you need to build an app then it's all start is not quite that it's a starting point like people could use all start
[03:11:10]  to build that on it to actually do it like i love create p3 app i love the way that like they opinionated chose a usable stack for um for next js
[03:11:23]  and the thing is when i saw create t3 app that was one of those moments where i decided that like where we think the levels of abstraction should be should be lower essentially
[03:11:35]  like you know people like nexel and chris or whatever could benefit from having more access to the underlying primitives perhaps than they get in next while at the same
[03:11:47]  time delivering the exact same end user experience for those end users that don't care for any of that stuff like it's okay to offer much less than next and still end up
[03:11:56]  with the create t3 apps of the world in fact you might enable them to do even more so like that is where my thing is like i i'm not building a
[03:12:07]  product i'm not building like a like a next js thing i am building a foundation that you know can do any of your meta frameworks or whatever like if you know there's
[03:12:21]  a specific need you specific utilities these things should be worked together go for it because that's your opinion and it might change in six months but maybe it doesn't maybe everyone
[03:12:30]  you know it's always hard when you're on that level like create t3 app when it goes but it might be every two years or so you know it goes through a
[03:12:39]  pretty drastic change right you know trpc changed version 9 and 10 server functions like you're always going to be in the danger of the real opinionated stuff when you go
[03:12:49]  that far out um i'm hoping my goal here is that if i make the primitives the right way and do it low enough level those swaps will be easier for
[03:13:00]  those people but that's for the developers of like create t3 app not for the end users the end users will probably change feel the pain if the architecture you know changes enough
[03:13:11]  on them but the they're not really my focus my focus is either the very beginning people who are using solid who just want to go i just want to ssr
[03:13:24]  i just want to be able to create solid apps and the people who build the the meta frameworks right like in the same way the beat enabled and vinci like i just know
[03:13:41]  that i don't actually you know like there's a limit of the stuff i i care you'll people will build really good stuff when you give them really good tools to
[03:13:53]  build with if i knew more about the ruby rails or sinatra yeah i don't even know it's like it's more like i'm building like the underlying thing
[03:14:20]  and then like adding a sinatra on top just so that i can like say like look it does everything right sinatra is a lighter weight one right someone else can build
[03:14:34]  rails i don't want to build rails the thing is you can you can do people have been able to do an incredible lot on create act react app over the years and yes
[03:14:48]  it's a big mess and but if you look at what beat did people could do an incredible lot on that as well the biggest gap has been that even though beat supports server
[03:14:57]  it doesn't like quite do enough for server it doesn't finish the picture i think vinci is a very good level like of being able to basically do beat in a
[03:15:08]  way that like everyone can just server render you know and just have that it's like the right abstraction level and it's so right that solid start basically has to add a thousand
[03:15:18]  lines of code on top of it to make it work for solid that's that's that that's what we're talking about here like that is you know and this stuff
[03:15:29]  does shift over time but i think that that's the mindset i want people to kind of get into i'm solid start is more opinionated than solid it does consider server rendering
[03:15:43]  it does consider bundling it does consider all these things but it frees us up to actually just worry about everything above it and those things may be different for a wider
[03:15:56]  range of users when you keep the level at a certain level as i said like people making toy demos won't find a difference between felt kit solid start next or whatever except for
[03:16:11]  maybe you know i think we've we've made some really good design decisions in terms of like you know apis and features but i think that i already know next with
[03:16:27]  yourself they're offering more things you know i and people in the solid community do that there's something called i think media kit or something coming out for solid start that's
[03:16:36]  essentially going to offer all the next features you know for solid start that's great that can be the framework they they can brand everyone makes fun of me for solid starting the baby
[03:16:46]  food but first of all i just wanted start essentially like a solid start just an indicator but for me it's always been start it's just start and that is really what it
[03:16:58]  what it is people can make their fully featured framework stuff i just i don't care about frameworks i have not seen that yet but i mean these things are inevitable you know
[03:17:17]  i don't know i svelte and solid are getting closer and closer other than this like little compiler convenience thing that i mean this is where our opinions thing i think
[03:17:30]  the closer they get solid the less that compiler thing actually matters like i think it's just like it's like a like compared to like the amount of gain you get like it
[03:17:40] 's kind of like it's kind of like when you were over here and we were over here you're like wow look at this is but as you get closer you're kind
[03:17:47]  of like oh you're actually like trading this little thing for this huge amount of like work right so yeah i don't know i i should probably check it out but i
[03:17:57]  think proxies this is inevitable they're going to need deep nested state updates like these are all part of the puzzle of getting into fine grain okay maybe i do
[03:18:16]  need to see this um find me a link i'll look at it in a little bit you're gonna be working on media kit there you go yeah exactly that's that's
[03:18:29]  that's yeah orj devs in there with you too right yeah yeah that's the thing i'm i'm the good news for you guys is solid start beta 2 is
[03:18:37]  at that point where i need you guys like you can now i think i have all the pieces we can now build media kit on the on the new future i'm i
[03:18:46] 'm very excited about it i think my biggest fear right now is that everything works perfectly locally and then like because of like us not deploying to like 10 billion places we don't
[03:18:56]  realize like which specific apis vinci or someone's using in the middle that don't work on all the different environments because vinci is not as tested as the other layers
[03:19:06]  even if it's the perfect abstraction level so yeah we'll get there though um i'm much more confident about how this is broken out now compared to where we were before
[03:19:21]  yeah i mean this is this is kind of the funniest thing but it's like what's really interesting to me about about this thing is like is that language that much nicer
[03:19:37]  than just using javascript like is it it like i i think the if if this is the result the dimensioning returns are are start coming in it already is actually that
[03:19:52] 's fair with svelte 5 it is a bit okay okay okay okay so um yeah someone give me that link on the on the proxy stuff i i want to talk
[03:20:08]  about it all right are we done with this topic i i just want to make sure before we move on i think i think we are i side note gotta think tan stack query
[03:20:26]  that's how i came up with the cache key mechanism it's this this is almost lifted off them um so yeah this this is i mean i'm still looking for feedback
[03:20:39]  but i think the router is basically basically done for this version it's not a version that supports server components or our hybrid routing yet but you can understand going back to ryan
[03:20:54]  florence yet again because of the way we do export config route or whatever and we just do it my hunch and i'm it won't be 100 is when we
[03:21:06]  add hybrid you know islands routing 95 of the code is going to be in the router and five percent in solid start like don't get me wrong the mechanism for actually doing the
[03:21:21]  islands and the island serialization is but that's not even going in start that's going in solid so like start really you know what i mean like it watch in i
[03:21:34] 'm hoping in the next year it's not even a mono repo it's literally just like a single package because like at a certain point i had this problem with docs start
[03:21:47]  doesn't even have features most of the docs for solid start like salts are had less features in the router most of the docs for solid start are going to be um essentially
[03:21:59]  uh like best practice guides right so yeah i i think i think that's i think that that pretty much thumbs up my feelings on this stuff i i just said if anyone watches
[03:22:14]  the stream has feedback you know let me know um i'm i think the best feedback i got so far was about having redirect and reload throw internally so people don't have
[03:22:26]  to throw it themselves and then they could like fake return or fake throw it but i'm i also think it's less clear so i'm kind of 50 50 on it but
[03:22:34]  if people have opinions i want to hear it um i think that was probably the biggest piece but i think we'll just have to build and play with it and try it to
[03:22:42]  see this is a big change right this is the this is the biggest change i've made to the router since i introduced it four years ago this is like this is like
[03:22:51]  the like breaking one version one to version two of course i'm on uh sember minor releases so i can just act like uh i don't care so you know this is
[03:23:04]  why i'm careful i'm hoping that this version of the router does become the the 1.0 router like this is the actual solid router but i basically what's holding
[03:23:16]  off is i didn't have all the features i wanted and i think with this version i finally have all the features i want like pre-loading and and whatnot i think
[03:23:24]  there's a couple other features um jesse who does our timestamps has offered to help out a bit with this stuff so um you know that's the other thing you want
[03:23:32]  to get involved with some of these projects i'm talking about let me know um uh discord like you can see where the work's happening now it's actually not in solid
[03:23:42]  start i i i do have an interesting question though i mean how do you guys feel about like when salt when i do beta 2 release just like closing all the issues and pull
[03:23:56]  requests and just like starting over again i know this is like kind of terrible for people but like honestly so much of this stuff is just like not doesn't have anything nope
[03:24:08]  you know like so much of the stuff is just not relevant again like i can't nope nope like almost every one of these bugs this is why i haven't been attacking
[03:24:25]  them and i'm sorry people this will i'm not using these issues it's just like almost all of these have nothing to do like i think maybe like 20 or 30
[03:24:34]  of them actually are real bugs but they almost have nothing to like we won't be able to detect them because they have a lot to do with like hustle starters today and not
[03:24:42]  how it is tomorrow okay so yeah let's let's let's look let's flip this around again let's get ready for this week in javascript and let's
[03:24:58]  let me before we do that let's look at this pr i want to i want to see let's talk about this pr also i should thank people for subs i've been
[03:25:10]  been i've been very um slow on it here coca-cola thank you for the prime sub um i don't know if anyone else subbed today i don't
[03:25:20]  think i i don't think i do as much twitch shoutouts as i should to get more subs i don't really care about that honestly i'm this is not how
[03:25:29]  i'm funding very much stuff um but i just want to have more people aware and viewing the channel and learning i uh education is my best weapon all right let's get going
[03:25:44]  here proxy state all right general fever rune states will be very positive blah blah blah blah blah blah we'd like to nudge solve the universe away from object array mutation
[03:26:02]  to save problematic insofar they mutate yeah yeah that sucks yeah yeah anytime ever mess up earlier right also heard a cloning object definitely oh they're making it nest
[03:26:17] ed by default huh like view they did it just because of this yes yeah yeah exactly that like that's how solids stores work well yeah i mean i see the so
[03:27:01]  what yes okay yeah because i thought about this for a while the biggest problem is going between a store and not a store is tricky because like the dot value problem view sucks
[03:27:18]  but like once you have an object or an array as your base object you know that you can do reactive properties but if you have a primitive you can't do that you need
[03:27:27]  the the the the you need the actual top level thing to change so you need it to be it's only the top level thing you need it to be a function so
[03:27:36]  like i thought about universalizing signals and stores but i didn't do that because um first of all uh the setter would work differently and secondly because you know mutation um you
[03:27:54]  know maybe i got maybe i can show this but the the where's the playground because like like in our case we have you know count that count right and you could picture
[03:28:11]  that this create signal store thing could be real right like so they in this in this world you know we would need to go count and then we could do this this this this
[03:28:23]  this essentially so like as long as the first thing is a function call because you need to be able to track the thing itself changing like if you change between a five and
[03:28:32]  then set it to an array like you need to be able to handle the top level change but the other the other challenge here is that um the set the setter right
[03:28:47]  because generally speaking if you if you if you if you set count um to new value you can just go set count four um but if you set count it's funny we're
[03:29:06]  talking about what the benefit of having a compiled language is this is probably one of one of the better ones if i want to set push to an array i need to do
[03:29:15]  this you know what i mean because because i i don't want to allow mutation outside of the the the standing for uh for read write so it's kind of odd you don
[03:29:28] 't want to make it so that everyone has to do this essentially every time they set you know like if i wanted to just set it to five you don't want to
[03:29:36]  do this now it's possible that you could just say that like right now we do this right we do if you if you wanted to do an incrementer you do b plus
[03:29:45]  one right so it's possible that you could say like if you return a new top level reference but you understand there's a difference between return semantics and mutation semantics
[03:29:54]  like set like like what if i do instead v dot prop plus plus right i'm actually returning five not not the you know what i mean am i setting v to five or
[03:30:21]  am i setting it like there there is a i hit this early on with the because i used to solid originally used to support both produce and immutable in the same callback
[03:30:33]  function like it would support both ways so it's actually really tricky to to do this from a javascript api standpoint if you want to keep read write segregation see that
[03:30:36]  the danger of of proxies is that a nested proxies is that if you pass the thing around like so if you have like count right and i go
[03:30:57]  like props dot prop like i pass a prop and i go like i don't know like i don't care what the prop is and i go count something right and this is
[03:31:09]  a proxy now i'm inside my component and i have props prop sorry terrible naming and it's also a proxy like i you get to a point where like unexpected mutation completely
[03:31:24]  detected like separated could cause an issue now you can solve this by saying like make props read only or that but like you someone could you know prop other equals like someone could do
[03:31:40]  something like this and impact something completely detached this is why two-way by like this gets this this is a way of sneaking past two-way binding if you think about it
[03:31:49]  because if you pass something that's deeply mutable down to another component and then like someone decides to mutate it the parent didn't make that decision like because you basically
[03:32:02]  have to read only the whole freaking tree this is why we have set count because we we keep the writing different so this is one of the challenges with these apis let's
[03:32:12]  continue seeing here because even with their compiler they'd have to make sure that exit points leaving the component are read only if they don't want to cause implicit two-way
[03:32:24]  binding and that read only change is usually costly yeah yeah yeah yeah yeah but yeah they are right because in the sense he's right that because he doesn't have to worry
[03:32:41]  about this count versus count you know because they can always just go count v like they don't have to worry about like in solid you have to you'd have to access the
[03:32:52]  first one as a function and then access these nested property they can always do it like this so it's kind of transparent and because they don't have the setter
[03:33:01]  they don't notice this problem however i i'm interested how they keep the read read write segregation without having to basically like freeze objects all the time prevent child components from mut
[03:33:21] ing state without permission yeah that's a big one that's a big one that's a big one that's a big one that's a big one that's a big
[03:33:40]  one that's a big one yeah the impact for proxies is not huge if you've ever wondered about that you can see in the js framework benchmark solid proxies
[03:33:46]  are actually in the js framework benchmark um it makes solid about 10 slower but it's not actually it's not actually a huge deal i don't think proxies are a
[03:33:57]  deal breaker like if you look here i forget where we are today solids right here solid with proxies is right here so it makes it slower than spelt without proxy
[03:34:09]  so i imagine spelt will then move over here essentially yes felt will probably end up in the lit area for performance which is not bad at all but honestly you i think
[03:34:25]  for any real app for data stores you're going to use proxies anyways like you're going to you the benefits are i think this is a fine default like the benefits
[03:34:34]  are too great like you're not gonna you're not gonna like make nested signals like we do in this example like that's what i used to do when i use knock
[03:34:43] out proxies are what made me decide that like hey this is doable you know i when i first created solid i called our create store create state and made it a proxy
[03:34:53]  i thought that no one would use signals directly so even even though i get a lot of credit on the signal side of things i actually didn't expect end users to use
[03:35:01]  signals when i first really saw it i thought everyone would be using our state object which became our store object to be using proxies so there's that the thing that isn
[03:35:14] 't cheap is preventing child component mutation without permission i think this is the thing that i'm most interested in if they make the end user opt-in then that sucks if
[03:35:28]  they can handle it automatically it could be expensive um i think this is the that's like i'm actually a little surprised this is out here because maybe they want to do it
[03:35:38]  from an api standpoint but i think an api standpoint is the win i i feel like i won't know if this is viable until they implement this this is actually
[03:35:46]  going to be the most telling part because this is absolutely essential um view doesn't think so but i it's not i mean i disagree with view quite often okay here we
[03:36:06]  are if you under the components both have branches and tear state the mutation one calls on switch happens the other that's fine planning categories and reactive object read only channel component yeah yeah
[03:36:14]  okay so the front of the characters make the reactive object read only in the channel yeah so but they have to always okay at dev time i see and maybe broad depending on whether
[03:36:28]  there's no performance overhead to creating read-only view the data i think there is okay it's fair enough so what they're saying is in dev they they they make
[03:36:37]  stuff read only and then prod they don't of course you want to still have the two-way binding huh oh and inspect ruin okay fair enough i'm interested to see what
[03:36:56]  they do with map and set people always tell me they want these but i actually don't know if there's a single good behavior for map and set in terms of fine
[03:37:10] -grained updates i know mobx has some stuff here but it's it's interesting yeah so the the this is what mobx and solid does we basically ignore classes yeah
[03:37:30]  it's not immutable it's not immutable everything is mutable it invents everything downstream yep exactly you can't yes exactly you can so they're saying their
[03:37:58]  decision made sense basically immutability doesn't give you fine-grained updates yeah exactly yeah fine grounds it goes it's not much better if we can just ignore the things
[03:38:12]  that things that haven't changed exactly it's syntax and mutation but i know that it's really more like what he's what he's saying is something i've been saying
[03:38:27]  for a long time it's that signals are immutable like what i mean is that you have to replace the whole value like you control the change so a proxy is just
[03:38:37]  a bunch of signals like you don't mutate an existing object you're always replacing with signals so it's just a bunch of i think what you nested it's hard
[03:38:48]  to call it immutable but you're doing a bunch of nested replacements so that's interesting to see him explain it it's cool i think this is actually one
[03:39:00]  of the better uses of the language feature because this is always something and i think with the compiler they can optimize it a bit i i just did i've always been very conscious
[03:39:10]  of this stores in our new version they've gotten smaller than the 2.0 beta but like they add like 2 kilobytes of code so like it's it's
[03:39:19]  hard to for me just to go like every app is it's a store like i didn't want to add 2 kilobytes i know that seems silly perhaps but like that
[03:39:29]  that's the kind of mentality there what they're basically saying is that they don't actually need signals and i you know like expose the end user and i think that's probably
[03:39:38]  fine when when you can you know keep the i api consistent like this from a language standpoint okay beta 2 will be a feature freeze yeah i mean i'm hoping
[03:40:09]  we just go straight to rc after beta 2. i'm hoping we can do this in short order sorry now i'm getting to the comments about this i don't think
[03:40:19]  so mob ex uses decorators this is much closer to our stores where you're not like trying to like be descriptive on how you on how you build the stuff you literally just
[03:40:30]  go like here's a reactive object go with it no but our stores are yeah yeah i think that is the difference i was just arguing that the simplicity is basically as they
[03:40:53]  approach solid the simplicity mostly goes away that they've been kind of moving towards but i i actually think this is actually this is the this is this is actually the place um
[03:41:06]  the fact that we've always had to deal with these two primitives is very annoying to say the least um in fact um like our crate um like our cache apis
[03:41:23]  the in solid i showed them early but the the router's cache apis are proxies in the sense they actually do fine-grained updates like this um where you
[03:41:38]  get the resource back with the function call and then everything's dot property after that and they're all reactive independently um because there's no mutation api because the fetching
[03:41:48]  and diffing happens from the server i don't have to worry about this problem so it's actually very easy for me to update um the our async primitive the support stores
[03:41:59]  um just it's it's actually i i i think i showed on stream a few weeks ago i just literally take the promise it gets back and then go then reconcile and then
[03:42:09]  it's then you put that inside an async function and return the result and you're like it's a store so um i think i i i i think it's the
[03:42:18]  read write segregation which um is probably the biggest motivator um biggest motivator here it is interesting to say the least if the compiler removes that need um it it it definitely
[03:42:42]  has some it does help people a bit with on the simplification side of things of course you know you have to really acknowledge that it's not javascript which i think
[03:42:52]  people are fine with at this point it's just it's tricky for me as always because i can see that this isn't javascript but somewhere else down the chain
[03:43:03]  um i can't so if someone just mutates a value but again they're gonna block it with freeze or whatever like yes this is the other option do an action but
[03:43:21]  i don't think svelte will go for that in the sense um that is what our set state does the the only slight difference with what we're doing here is we
[03:43:33] 're saying that even though it's not true probably like i i could go the action direction like previously this was very much keyed now it's not so technically you could update
[03:43:45]  any store inside any action but that's not in detail i want to really expose to people like i don't think that's really like the way it's supposed to be
[03:43:51]  um that this is we we this is basically the same as action in mob x like this the the setter basically turns the proxy in so that it can actually mutate otherwise
[03:44:02]  you can't proxies let you do deep reactivity without having to do all the construction of signals and nested signals it's it it is a game changer that's
[03:44:13]  that's one of the big reasons why i wanted to stay in fine-grained reactivity world yeah yeah yeah yeah yeah exactly yeah that that's that's that's
[03:44:30]  their plan and i think it's it's it's probably pretty smart that you just error out i see if i was them i would air out hard in dev in this case
[03:44:41]  because you don't want people to ever accept that code the challenge with these kind of things is it's code paths right it's like the thing you don't hit when
[03:44:48]  you're in dev or when you're testing and then you release it and then goes down right like essentially these kind of solutions at first seem like the like the solution but they
[03:45:02] 're they can never actually account for like the things you don't test like you you can feel more confident in the stuff you do test but it means the gap there is
[03:45:12]  bigger if that makes any sense so like bit weary on that approach but it's it's it if you basically tell people never to mutate props then it's fine except because
[03:45:26]  then people hopefully won't get in the pattern of doing so you can also like make type script tell you that all props are read only like you can do stuff like that
[03:45:36]  which will also like dis encourage it um but yeah i've actually wondered in the past why we didn't do that um but on the other hand um it what where the
[03:45:56]  gaps happen like there's there's no protection yeah no it's it's it's it's not it yeah yeah to be fair there's still proxies in this
[03:46:18]  case um when even in prod it's they're just saying that they're they're basically um they could they could keep the warning there so i think that's i think that
[03:46:28] 's i think that's fine like but i would it's just one of those things where it's like you kind of never want to fail and fraud with something you don
[03:46:37] 't catch and yeah i don't know yes that's correct yeah and that was that was that was a monumental thing for me you got to understand when i first submitted to the
[03:46:51]  js framework benchmark back in 2018 i didn't use the signals version i actually used the the proxy version this just kind of shows you how much faster other libraries have gone inferno
[03:47:01]  was not here for some reason inferno back then was like over here and the solid store version was faster proxies used to be faster in the browser i don't
[03:47:09]  know why um maybe solids proxies inflation got a little bit slower but um and i was sitting there trying to figure out how to make the fastest library at the time and
[03:47:22]  the lazily creating the signals unless they mutated was like one of those key pieces um that that led me to when i first open source library in 2018 when i figured
[03:47:34]  out that um i could do that essentially i did a lot of work on stores and proxies and early on because i nobody was into signals or hook looking apis they
[03:47:42]  didn't exist yet so i was like trying to make stuff look like plain objects and like i also want to beat virtual don libraries that dipping things like the dbmon example
[03:47:52]  so i spent a lot of time on proxies the other cool thing about proxies is it's a lot easier to diff state um deeply and have them do fine
[03:47:58]  grain updates so like if you get new data from a server instead of just replacing it diff the data and then send the fine grain triggers out that's a whole trick like
[03:48:08]  i've been talking about the action apis i didn't really show it in detail but if if if the one thing that i didn't explain is if you were on a
[03:48:16]  to-do list thing and you add a new to-do and the server sends you back the the full to-do list again um you know on refresh reval
[03:48:25] idation has all the updates you know maybe someone else updated to do in a different browser than you and it comes in solid stores under the hood won't re-render the
[03:48:36]  whole list again it'll just go okay these are the same objects diff on the proxy and then it'll be like oh this one was changed to complete and it'll just update
[03:48:44]  the one textile it doesn't re-render anything um and proxies give you the ability to do that very easily even within like a a collection of say to-
[03:48:53] dos or whatever you can basically end up just updating a single field even though you fetch for all the data so this is all good stuff for for positionally getting felt to where
[03:49:06]  it needs to be in terms of performance like these are all the secrets and tricks that we've learned in solid over the years um yeah i i i'm not surprised by
[03:49:20]  this progression or that we're here in any sort of way it's it's fine what year are we in now i feel like i've been talking about this stuff for forever
[03:49:35]  like five six years now it's just like finally you know um anyways i'm i'm i'm excited for the future right because it's not just about the signals and
[03:49:47]  the reactive um updates of components it's actually the fine-grained rendering model that's really what what we've been pushing um the envelope on people have had signals forever like
[03:50:00]  view and you know uh knockout and all that but the actual modern rendering techniques that you're seeing in svelte 5 that's um you know what really started with
[03:50:10]  um stuff like um sj surplus and you know we spent a ton of time on with solid in terms of like all the proxies that surplus didn't have proxies
[03:50:22]  um all that stuff was largely what the work was during their first couple years of solid um anyway sorry that's that's a long thing um let's let's continue into
[03:50:35]  this week in javascript shall we um let me have a second here to get myself set up and i still have a a tiny bit of coconut water good good good
[03:50:51]  stuff um yeah uh for a stream that i didn't think that i was going to uh get into oh i didn't talk about the module stuff that matthew ph
[03:51:09] ilips wanted me to talk about not a big deal i i i will i i'll talk about in a minute um all right let me just get set up i'm sorry
[03:51:23]  give me two seconds here i haven't lost many viewers yet people can you know remember we have a chat so we can we can definitely talk in chat um just getting myself
[03:51:38]  all set up here all right and then my bookmarks i don't know i feel tired but i think it's just because i've been working at this stuff like non
[03:51:57] -stop so much so that i literally didn't post anything from the solid account for two weeks god i feel bad about that i'm just like looking at twitter and it's
[03:52:07]  like i i mean obviously i've been gone for two weeks because of thanksgiving and whatnot but our last stream would have been what like the like november 18th or something
[03:52:19]  and yeah i'm what day is it today i don't even look at a calendar one of these days i i will admit i i've been working the last couple nights
[03:52:36]  i told myself that i'd try not to but i'm i feel like we're so so so very close on um on uh yeah 17th with the last stream on
[03:52:49]  where we're heading to install start so yeah 17th that's there and let's go let's go let's go let's go let's go okay actually i think
[03:53:09]  my first we can carry on with svelte stuff i think my first actual uh um tweet that i saw was felt actually maybe we'll go somewhere else first okay but all
[03:53:24]  right let's talk about this week in javascript um as you know i collect different tweets i see over time and uh in contrast to what we just talked about in
[03:53:42]  with the the proxy stuff that i'm very excited about um i saw this tweet and i was i was almost horrified yeah i i sorry just side note on this i i
[03:53:57] 'm actually i have a couple people before maybe not that much because dan isn't around anymore i'm actually the only person who does the solid account right now um i i i
[03:54:06]  used to be so on top of it it's not a problem maybe i should delegate it to other people but uh but yeah i i i've i've been the solid account
[03:54:15]  uh since since dan moved on so um and before obviously so you know it is what it is you can tell when i'm busy will you ever scream alive play of a
[03:54:31]  solid song oh man uh do you ever want to see solid or some music stuff look up north fan rumblers on youtube yeah this i thought anyways get back to this
[03:54:55]  i'm super stoked for the proxy thing i am less stoked for this i i'm trying to remember the context someone's saying about classes react had to come with the arb
[03:55:04] iter use prefix to know that they own specific functions felt came up with swinging out the door with a new class and bam hijacked another js feature convenient for them i don't
[03:55:13]  think that's fair i think use is the same as dollar sign here like if we're talking about syntax felt comes up with lots of new syntax i don't think that
[03:55:27] 's actually and use actually isn't that important um comparatively unless i mean unless they use that for compiler things because there's so many users just so all the markets reactive in
[03:55:40]  the mind no but they're automatically marking it because of the dollar sign okay sorry never mind that what what i'm getting at is yes you can do this with classes but
[03:55:53]  this is like this is why like this is exactly i mean i know some people still like this but this is like why i got so into functions with solid knockout was kind
[03:56:03]  of like this except this code was in the constructor but essentially all if you move this code back in the constructor which you have here anyways like literally like this this count count like
[03:56:14]  if you just move this back in the constructor what you will see it's with a fine grained reactive library 90 the code is in the constructor and then all the other
[03:56:23]  code you have are just these methods that use this and if you just hoisted them into here you wouldn't need this i i am honestly this is not an argument for classes
[03:56:35]  i think classes still are not where i want to be um yeah let's let's move on from that anyway so very stoked about proxies not stoked about whatever this
[03:56:51]  is um just but yeah i mean i don't know some people love classes and there's nothing we can do about it uh let's go on no it's so funny
[03:57:03]  how most of the stuff actually happened in the last week let's move on i'm gonna stay on bookmarks for a minute um that's 27th yeah i don't care
[03:57:13]  about the chronological quote that one's heavier though so let's give it a minute let's let's um i don't know if anyone saw but november 26 solid was
[03:57:21]  the wordle word of the day um unfortunately i didn't see this till way too late in the day um it was like already passed in eastern uh or sort of like
[03:57:30]  in europe so people are like what are you talking about but i'm i'm glad at least one person managed to things like nope i this is what my probably favorite response was
[03:57:40]  react was a bit more helpful but i i didn't make this up it's just i didn't get to it till i'm pacific time i'm like the last time
[03:57:50]  zone that anyone's ever uh doing stuff so if if if we actually look sarah managed to get in just in time she's the brains behind our docs now and yes
[03:58:03]  i also got that but anyways just just fun bit here um yeah see that was all the solid news i've been so heads down we talked about on the stream but let's
[03:58:17]  let's let's continue on here state of js survey is up now um they did something this year that i like and don't like they they they stopped shortlisting
[03:58:31]  names in like the choose people kind of side of things i guess they didn't last year it was just a big blob but i feel like i didn't end up spending nearly
[03:58:38]  as much time typing in people's names as i did last year last year i just like it took me forever i just kept on going back and adding like hundreds and hundreds
[03:58:47]  of people's names to like you know the the the best you know categories at the end to vote for them so it's really tricky because you gotta like it's actually beneficial
[03:58:56]  i think for people to actually um promote it on twitter because then it like that person's on their mind when they go to fill out the survey if they if you want to
[03:59:03]  like push like um you know show up on like best video creator and stuff and all that good stuff in either case from a framework standpoint i'd love to get a little
[03:59:13]  representation if you guys are all solid users or svelte users go go in fill it out give us a good word um as you know solid and svelte have been
[03:59:24]  uh enjoying the top of the list for the last couple years let's keep that train going all right i'm i'm glad there's been a lot of talk and stuff
[03:59:41]  coming out of the server component thing and about suspense this always seemed obvious to me but and this is i talked about this before one of the challenges of react why the file
[03:59:55] -based routing in next has to use separate files you see what he had to do he had to move the await call from where he thought logically he would do it to
[04:00:06]  inside the component for suspense to trigger because suspense is here so you have to wait inside here and well in this example they're in the same file and this is simple this is
[04:00:20]  actually kind of pushes your thinking a bit from a mental standpoint now there is other ways to solve this one easy way to solve this how to solve this is take this instead
[04:00:32]  of awaiting here just fetch and make this movie promise and then pass movie promise to random movie and then awaited in here but like this is such a subtle obvious thing but i
[04:00:47]  bet people get hit by this all the time right ironically again and this is why i i posted this in my infamous uh what does solid solve without saying it thread is the first
[04:01:01]  example in solid works because we don't await promises we create signals which are read lazily and when you have fine-grained reactivity if you push the read of that
[04:01:10]  movie under the suspense boundary guess what suspense works you don't have to push inside the component so i the the this just works automatically in solid given the reactive model so i
[04:01:23]  i i felt this was deserving of it especially because it's non-blocking this await is like it's clear that this won't work because you're it's a weight
[04:01:32]  like you're literally like if this has no weight in it too you're there's your waterfalls right this is why react went through all the effort of doing this like server
[04:01:41]  components are good anyways but this is why they didn't release a data fetching primitive until server components or you know there's no weight in the browser because like this is
[04:01:49]  kind of terrible for the reactory render model and even in any render model where you have to wait to do the whole thing by moving to signals you um you basically remove this
[04:02:02]  concern so yeah that's my tip i'm sure you'll be getting this feature in svelte 6. so you know sorry that that jab was probably not necessary but
[04:02:16]  i i think it's important like there's incredible things that that um are enabled when you when you inverse the pattern like that it's like what rich was talking about we really
[04:02:29]  need people keep up like we really need to like think change our thinking here it's you know i i think this is solid similarity to react in terms of syntax it probably hurt
[04:02:40]  people understanding they're just like oh it's just like a smaller react like react no no the revolution's already happening get on board all right let's keep on going no
[04:02:51]  i mean it's i don't even have to say get in svelte 6 like i think these things are just inevitable the async patterns that we're working on solid
[04:03:03] point 2.0 i would wouldn't be surprised if you see them show up in every signals framework in the next couple years i uh the i think like there's clearly
[04:03:16]  once you go through the effort of changing the thinking there's clearly a trajectory it's not something i'm inventing it's or like it's kind of like how you discover
[04:03:27]  science like it exists in like it's something that's already out there like you you can already see how the pieces are fitting together and um like i i think these things
[04:03:38]  are fairly inevitable at this point all right um yeah it's funny i didn't tweet much this week um okay so let's let's so basically this was this is this
[04:03:57]  was just me playing my greatest hits um honestly this is this let's i i think the only other discussions i got in were were here yeah i want i wanted to highlight this
[04:04:11]  one um i i i love that in how in one tweet this developer on lit exemplified everything i just like about lit now don't get me wrong i like lit and
[04:04:28]  in the sense that i think that technology wise the tag template literals are basically the fastest way to render dom nodes i think um i think that the i mean it's not
[04:04:43]  the fastest way to update and that's what where reactivity comes in i think that they've been working on new compiled templates i think that they are one of the fastest
[04:04:53]  one of the lightest weight frameworks um i think that their alignment in terms of no build is really beneficial for a lot of use cases i think that web components um fit a
[04:05:06]  lot of scenarios and lit being you know a strong like it's if you compare lit and polymer it's like night and day lit is a good framework but i sit it
[04:05:17]  there lit is a framework or you know as much of a framework as um solid is you know like we can we can talk about semantics there and i this comment just
[04:05:41]  like lit it up for me i work on lit which i hesitate to call a framework but gives a framework like dx for building web components while trying to keep opinions to a minimum
[04:05:48]  and walk from those possible that's fair okay it's got reactivity declarative templates great performance ssr typescript support native scss complicated context tasks and more it's
[04:05:56]  built on materially designed blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah i just love youtube's comment this is beyond ridiculous you know
[04:06:04]  i i hesitate to call a framework a minimal lock-in here's a list of of it's lit only things that all make it a framework like that's that's pretty
[04:06:15]  good um i might have took it slightly out of context lit html is and that was a part i was talking about that i liked um this is there it's
[04:06:29]  not completely exemplified here though that's a good example of it this is where my biggest fear web components come in it's that people trusting in it assume that it it's
[04:06:42]  like a future proofing mechanism like i've seen this people say this a lot they're like oh i'm building for the platform you know like like like other solutions aren
[04:06:53] 't using the path platform you know and i mean a lot of naysayers spend a bunch of time saying oh web components aren't stable up they don't have all
[04:07:00]  the features i'm you can get it done i worked on web components in production app from 2014 to 2020 i spent six years in a web component only solution building production level apps
[04:07:18]  using you know like you can build that you can do stuff i hit challenges with forms and hidden fields like but work around it and web components are in way better place than it
[04:07:31]  was when i was writing all the polyfills by hand myself like that's why i used to write web component polyfills um and that's all fine but at the
[04:07:42]  end of the day i don't like the expectation that people think that just because they're using web components they're better set up for the future like they're because they
[04:07:53] 're playing more to the platform the biggest biggest flaw with this thinking is that web components are a necessary piece like what i mean by that is web components are a tool they are
[04:08:15]  a custom element with functionality but the assumption that web components are like where we end up like all our components will be web components is ridiculous of course all our components won't
[04:08:28]  be web components do all your components need to be native dom elements why would you there's so many reasons why that's not the case you wouldn't want it for performance for
[04:08:36]  one that's obvious like why putting extra dom elements a page why are you doing the overhead of attribute serialization what like why do any of that stuff so like right off
[04:08:45]  the bat you know that we're not like when you think of like the way say like a library like react uses components these are not the same thing now could web components be
[04:08:55]  the ultimate output of what you build definitely but are they necessary they're about as necessary as micro frontends so like this is this is the thing like if you work on
[04:09:12]  a huge team across a lot of space with lots of teams working together all the same things that leads to micro frontends i've given this rant before that maybe we're about
[04:09:21]  the solution but the problem here is just by picking web components doesn't mean you're better set up for the future in any way in fact there's a whole world of
[04:09:30]  patterns that have nothing to do with web components and you might be by choosing solutions that are focused too narrowly on them like as in what components are their components you might be
[04:09:41]  actually giving up on a lot and and it's it's like the lock-in as talked out here is is still real like ssr is not a dom spec
[04:09:55]  or uh you know w3 spec it's a lit spec you know because ssr was not it was something beyond that functionality if a different solution has more performant and
[04:10:07]  better ssr the choice of using lit or with web components didn't actually better set you up for the future it actually made it work like basically locked you into a
[04:10:19]  solution what about resumability presumably with web components is very difficult as misco again will tell you if that's where things are heading well guess what you didn't you didn
[04:10:29] 't save yourself for the future there either there's so many examples of this lit is and web components frameworks are fine solution but they don't they're they're just a
[04:10:41]  different one it's like i i could choose i don't know something views felt reacts all whatever and it not have certain features that i need in the future and be like yeah
[04:10:50]  you know that's just the way things went you know things progress in different ways i chose react in the virtual dom and everyone went to signals you know like it it is what
[04:11:00]  it is but acting like a web component solution or is it any different well here's the thing it's like well i can always replace my web components with other web components
[04:11:10]  so i don't have to use lit i can use whatever the new thing is but the assumption is that the container the interface point of a dom element is the right interface between
[04:11:21]  these pieces and maybe in some cases it is but in other cases javascript is do you know i mean like i think there's a reply here where someone is like what
[04:11:35] 's your take on html components customers without shadow dom sure um is there more replies no no maybe it's more replies to the original tweet depends on how you use
[04:11:49]  them sure they are different though right you trade off some expressivity only string attributes for the ability to use them wherever you can use html.js with better sets of
[04:11:59]  yeah i think a lot of people are like sure web components you can i think there's an example where you can use them on the server yeah because you're not server
[04:12:05]  rendering them right you yeah i i think the thing is for javascript libraries html doesn't need to be part of the interface i'm just putting out there like
[04:12:25]  the the biggest difference between putting a web component on a on a server rendered page so that you can like client render the web component and server render the rest of the mark
[04:12:34] up is that in a web component you put the web code on the page and you import the javascript with a script tag for that web component with if that was a
[04:12:44]  react component you'd put you'd put you'd put the reference div on the page and then you would import the react script and have to call um render on it essentially
[04:12:58]  so like you could say oh it's a no build thing but then you could use preact like like it's not you know which with this tag temple literals so it
[04:13:07]  i don't think it's any more difficult to like embed something it's more like if if it i think it's really good for stuff like widgets things you don't
[04:13:22]  really want to worry about but internally for you know it might be really good for large teams that need to keep that isolation of reusable pieces because if you had to do those interface
[04:13:33]  points like i was just talking about all over the place maybe that would be more hard but if you actually had a system like that you would actually probably have a build system that
[04:13:40]  was handling all the bundling all the web components for you like you you you wouldn't really be any different than any modern framework you're using so like the whole argument
[04:13:49]  like sometimes setting a strict interface is what lets you be more interoperable and change things up so from that point it's it's definitely positive but on the other hand like
[04:14:02]  if someone just chose a strict interface of their choosing instead of what web components have decided they could also achieve the same thing right yeah yeah i i mean this i once
[04:14:34]  joked about that that the web components are the best migration tool but the problem is then you don't end up migrating off the web components but it does make it a
[04:14:43]  little bit easier to go back and forth um but i think you could do it with the js api but web components do make it like it like easier because you can
[04:14:54]  just like put the element in but yeah as you said you now you have two frameworks maybe three frameworks you know huh no ssr yeah the accessibility issues are tricky because i
[04:15:12]  understand when the challenge exists but it's hard when the platform which has accessibility in mind or should be the like primary like champion here and they are like you talk to just
[04:15:23] in or anyone like involved they really care about this stuff and try to do it but they understand that like the challenges in the way of it yeah yeah i mean when i
[04:15:39]  first saw mitosis i was like this is probably a better way of doing it the only challenge there is like mitosis is also another it's another language thing i mean i
[04:15:51]  like the language it's basically like react with solids rules but if you start i mean what you really need is like you know there's speltosis you need to be
[04:16:03]  able to get the source from different frameworks and output the only challenge there is a lot of time with the features of these things you end up with lowest common denominator unfortunately at a
[04:16:11]  certain point like you don't want to depend on this because you want your solution to have multiple things it's kind of like uh don't use micro front ends so every
[04:16:20]  team can use a different language but it's a good tool um if you want to say um you know you have a set of components and you want to be able to like
[04:16:35]  move them across and like you're moving from one to the other i i'm i i as i said it's funny how similar a lot of these agnostic solutions
[04:16:45]  and web components kind of and micro friend it's kind of align well that's what everybody actually wanted they wanted css isolation they didn't want web components they wanted file sc
[04:16:58] oped or whatever the fact that it's baked into like a shadow dom which has projection rules and all that stuff is not it that's like that's exactly why people will use
[04:17:09]  the shadow dom right now but if if you ask someone what the best design they could think of that was strictly only for scoping css i doubt very much the shadow
[04:17:24]  dom is what they'd end up with yeah i mean yeah it makes the interfacing a little bit easier but it also comes at its own expense and it's like you
[04:17:41] 're already in a situation where you wish you weren't anyways that's that's only a comment there and i think it's fine like if you pick up lit as a green
[04:17:51] field project and you're like i'm just going to build a lit and go all in on it good stuff it'll be great i it's just i i'm just
[04:18:01]  pointing out that it's it is and i think to be pointing out it is still a framework like like essentially like you you haven't made yourself better to the platform in
[04:18:16]  any sort of way with an increasing amount of framework supporting tools i wonder if there'll be a simpler mitosis that only straps over them and not and also not all saw you
[04:18:28]  well the funniest thing is everyone who knows the history of uh mitosis it's so cool to be involved in this project in that um jsx light which is mitosis
[04:18:36]  predecessor was developed by steve the ceo builder almost like this is before misco and the quick guys and all that joined on he did it himself and me and him
[04:18:47]  were in talks at that time and he based the api off solid essentially we i told we were talking about he's like could we do a jsx you know framework thing
[04:18:56]  and i'm like you could but the update model would have to change reacts update model is weird in a sense with all the re-rendering and the refs and all
[04:19:03]  this stuff that could like account for that in the hook rules but i'm like i if you flip it around and you make everything signals based i positive i could have it
[04:19:12]  behave in every single library fairly close either going to their native stuff which is a little bit different and you'd have to like fix the difference in timing behavior or using it as
[04:19:24]  a driver like using mobx to drive react like you could definitely do it and i but i'm like but those are the differences like i showed them that old consistency article
[04:19:34]  where i showed all four firmers doing different stuff would probably be the death of you so i don't know it seems like a lot of work and then he went and created
[04:19:41]  jsx lite and it was basically solid it had four component it had like all the solid syntax and it worked pretty well but around that time they they started uh working on quick
[04:19:53]  and they got to that point and they're like well i don't i don't need to migrate from solid components to uh to uh quick components i need to migrate from
[04:20:03]  react right and i and the problem is for the work they had to keep solid semantics like you know early returns and what they actually do is like look at stuff like
[04:20:14]  map functions and go okay that's a map i'm i need to like internally turn into a like a v4 ng4 or solids 4 component whatever like essentially they they they
[04:20:24]  kind of cheat it like it's probably fairly easy to break it in that like if you don't follow like you know the you have a function called dot map or whatever it
[04:20:33] 's not going to work kind of scenario they went with more fragile transforms but the result is you get to use more react like syntax um to to do it but like yes
[04:20:45]  it's the cool thing is when you have a primitive like signals reactivity you can model any other system with it so yeah and and you know hopefully less work for uh what
[04:20:56] 's his name again he's the guy who works on mitosis i always feel like he's doing it tirelessly because he has to interact with like every framework and every
[04:21:03]  framework is like whatever it's not us it's you and then he's like gotta like dig you know like there's a performance issue or something you know and it's like
[04:21:11]  you know he works tirelessly i can't remember his name at the second right now but uh it's a good guy um i think anyone who goes with any solution always talks
[04:21:23]  about the problems they have with it right i i was on web components for like what six seven years i think people on react for six seven years are probably you know lament
[04:21:34] ing the same kind of stuff but yeah maybe web components more than other it it's it wasn't it wasn't that it was necessarily bad and i'm even talking back in
[04:21:42]  the day it was just like it just felt in the end i was like this was just unnecessary because we built with framework stuff anyways like it's like using lit and saying lit
[04:21:50]  html is actually what we built with the web components didn't really matter and like for me at a certain point i had to step back from it sammy yes
[04:22:10]  sammy yeah that's exactly who i mean all right anyways this is a fun conversation someone flagged me with this i don't think i have time to watch this video
[04:22:23]  on stream they're like they wanted me to react to i don't even think i have the right audio device set up right now but they wanted me to react to theo reacting
[04:22:34]  to prime reacting to the professor reacting to theo like this is like this crazy thing it was about object oriented i did watch a bit of it it's about object-oriented programming
[04:22:44]  versus functional programming and what's better and why theo puts his react angle on it where he's talking about um you know react functional programming stuff and i agree completely one of
[04:22:54]  my least read articles um ever let me see if i can find it um is let me go all the way back published um a medium was i like where is it to
[04:23:16]  do why react hooks a whole p with functions in javascript 55 class um i i basically showed how to reimplement every single um i'll just post this in here but
[04:23:35]  i i this um yeah i i i mean i i should also post the original source video that i'm talking about here um but essentially this whole thing is i i
[04:24:13]  i i i've just showed how you get all the principles of oop basically using javascript and functional programming like you know the only one that i didn't um encaps
[04:24:25] ulation i think i was actually arguing that oh um that functional programming was better for encapsulation um like inheritance polymorphism i did kind of try to explain that like
[04:24:39]  the way that it it works like like there are rough things about the inheritance i don't actually like the inheritance very much but this this whole thing was just like a mental
[04:24:54]  exercise to say like you can kind of do oop with functions if you want to but like maybe you won't um oh this is a member only story why did i do
[04:25:06]  that i'm sorry about that yeah that's probably more than enough than i did than i need i i i i i was looking at this video and it just i don
[04:25:24] 't care enough i i'm sorry guys like i don't like classes i think you can use functions to do most of the stuff i think it's cleaner so yeah i
[04:25:38]  don't even know who i agree with the truth of the matter is when you want to use these certain tools you can do it like oh i think people um spend too much
[04:25:50]  time like these are patterns they're not even tools necessarily like these are actually like they're they're a way of applying um pieces of code together it's not it's
[04:26:05]  not really tied to a specific language it's not really tied to a specific tool you know putting these best practices together it becomes a mythology but like i don't know you
[04:26:21] 'll probably have to watch the original video and know what i'm talking about i i i've watched enough of it to know that i would not be uh um would not be
[04:26:32]  uh hovering it uh here no i didn't there's a question if i did prototype chaining no i actually did not do prototype chaining i mean some of the stuff i
[04:26:45]  did here was not very performant um i was purely using like functional approaches to to derive behavior and composition like dog type can bark can eat has name name this is just
[04:27:00]  like this could be just reduced left or whatever you know or reduce right but like this doesn't actually use prototypes at all um oh yeah i do use reduce anyways it's fine
[04:27:18]  yeah and i think you all shouldn't either oh i'm just talking about my article about that i wrote a long time ago um in 2019 how you could do oop
[04:27:38]  with functions in javascript which is a which is me reacting to theo reacting to prime reacting to whoever whoever whoever this guy is and the yeah there we go i have
[04:27:53]  the screenshot where i have all us all in the same screen did i say did i say did i say mythology methodology methodology methodology yeah oh it's all good uh all
[04:28:23]  right let's continue um okay yeah yeah okay that's a good one next.js live helped us to prove two hypotheses bundleless dev server is viable it's not it doesn
[04:28:47] 't scale web api only winter cg is viable it's not node is the true standard i don't know if i agree with either of these like i'll say
[04:28:55]  with a with a bit of a caveat but this dev server is not really viable it's kind of uh it's kind of like serverless i mean it's kind of like
[04:29:04]  a well it's it's like a lie a little bit like even beat bundles underneath the hood there's just you need to bundle some stuff um and i had a
[04:29:14]  good long talk with tobias um webpack um when uh and turbo pack when i was at in amsterdam and we were all we're talking about cache invalidation and he
[04:29:24]  wanted to know if he could use reactive patterns as a mechanism but he didn't want to two-way link the stuff like he didn't want to do the two pass notification
[04:29:33]  and to be fair something like angular's approach of versioning the edges would work for him and i mentioned that but i don't know where he ended up but he was
[04:29:43]  definitely having a problem with trying to figure out how to do uh granular cache invalidation um with you know with the the the bundle of stuff they're doing i still think like
[04:29:56]  this is nuanced in that like it's a hybrid kind of thing right you don't i i think i i think what do you whether you want to call it the second
[04:30:09]  you bundle something it being bundles not being bundles anymore is is uh arguable but i i just kind of wanted to kind of put that out there yeah i mean i
[04:30:17]  i keep on hearing a lot of things another one is isr style invalidation i was i don't i think i talked about this before on stream but like i was
[04:30:28]  talking to some people in uh netlify with all our you know new features we've been working on to standardize isr without proprietary stuff we jump right back into like
[04:30:37]  can we recreate gatsby without gatsby in a more primitive way by using data proxy signals kind of essentially to do fine-grained invalidation and partial re-
[04:30:47] rendering of apps let's say in solid so you know like build system ties to fine-grained data dependencies because they knew on their side exactly what data changed we
[04:30:57]  could know from our side exactly what data is read and then it's like this match made in paradise so to speak so yeah i mean it's interesting i think i think i
[04:31:12]  i i i i think it's it's this doesn't scale part because i think the problem is they need to like go check every other like there's a there's
[04:31:26]  a lot of unnecessary checking of what actually changed because something else changed um problem i i actually have less expertise on why it isn't i just from talking to people and seeing in
[04:31:40]  life i can anecdotally say that i understand that why it doesn't scale but generally on the other side there's benefits to bundle listen especially in terms of being able to
[04:31:49]  uh like get up fast running on dev so it's like yeah i mean i trust guillermo on the on like that it's definitely more nuanced on this and they
[04:32:02]  worked through through this stuff like no one's purely bundle-less yeah i mean it's basically i mean it's it's it's it's funny because i mean i
[04:32:21]  didn't show this earlier uh do i have an example with solid start is it open right now the dev server yeah we're with off yeah let's just do this local
[04:32:33]  if you go with the network and you look at the javascript sent down on this page when we load the page there is a lot of freaking crap because it look these
[04:32:44]  are all the like the the separate files here right like they don't actually like they do some transforms on them because this this ts sx has definitely been transformed but these
[04:32:57]  are these these aren't in like a bundle these are all mapped one for one except for where they're not because these whole optimized def things if you go into this chunk this
[04:33:07]  chunk is actually a little bit more significant uh what's another chunk this is i think this is just all solid js in this chunk yeah i think it's about a thousand
[04:33:17]  lines of code maybe a little bit longer is there anything else in this chunk yeah it's like solid yeah this is solid js in a chunk without the tree shaking because it's
[04:33:29]  in dev mode um yeah i i i yeah i i basically um they they try their best not to actually generate it's funny because the transform generates kind of virtual files in a
[04:33:53]  sense but they try to not not to like bundle everything to a file so they have to like the thing is with bundled dev server every time you change you go and remake
[04:34:03]  the whole bundle again and that takes some time because you pull it all in but i think what what they're talking about from their thing is that doing the invalidation on
[04:34:13]  a granular level was also hard to scale to decide like what needs to be re-updated i i'm i'm interested to see if more people agree or disagree with this
[04:34:25]  completely a v perspective like as i said i think a hybrid is kind of where we're at yeah no this is not bundle list like no build um that we're talking
[04:34:34]  about this is like bundles dev server there's no versell anyone who's ever used javascript in a serious way or whatever disagrees with dhh like you could
[04:34:44]  actually i can't say that there's those like web component people again but like build lists and bundle lists are completely different things faster startup times in dev that when v first
[04:34:58]  came out that was the whole thing like you literally just like like you turned on and it just popped up instead of like making this giant bundle and then you'd have to like
[04:35:07]  put together and then load you just have everything it just like shoots up a lot of the files maybe don't get transformed and you just request them as you need them and they
[04:35:14]  all just come in you don't um you don't need to necessarily initially grab all the javascript and all the pages you know like obviously code splitting helps with that
[04:35:25]  anyways um but like yeah essentially the dev startup time was way quicker i'm i'm not sure um that's that's a good question i i think it's the overall code
[04:35:48]  right but i i guess the the the lib code would be eventually where it got really bad because you you know peering into the depths of node modules you know probably probably
[04:36:00]  is where yeah i think that's i mean if your app got large enough it'd be consideration but i imagine it's all the lib code that gets pulled in i i i
[04:36:08]  said i i don't want to speak um as uh representative on this part completely because i i don't know the nuance of these details but i do want to talk about
[04:36:22]  the second one here web api only winter cg is viable it's not node is the true standard this is this is lazy i'm sorry it's it's like
[04:36:47]  thing like and kind of unexpected it's like saying x javascript framework isn't viable react is the true standard like i i think i think i think the reason for
[04:37:09]  this and it i it's probably fair is that node has been building on this stuff for like what 15 years now something like that it's a little less and like we're
[04:37:22]  trying to apply web apis to areas where the web apis are still being developed and designed where the gaps are and for that reason like we can't just rely on
[04:37:33]  them completely so like someone in versell's place needs to ship something today they can go look the web apis are missing this and i think in practice the winter c
[04:37:45] g ended up not delivering what they wanted to in the sense that uh as i said jared subner summed it up best when he said it's where we all get
[04:37:57]  to meet and decide what our favorite node apis are that i mean that's that's how he described it to me and so from this perspective it's accurate and then
[04:38:06]  i know this is funny for me because i always kind of criticize standards a little bit um you know web component type stuff but like if the web apis could be viable across
[04:38:23]  the board we would be in a much better place because then we wouldn't have to deal with the legacy today of node apis don't get me wrong any standard based
[04:38:33]  thing becomes legacy like um the web that we're talking about right now in you know five ten years will be like oh those legacy web responses i say whatever like so it's
[04:38:46]  just that maybe making anything as standard is dangerous because um we lose the ability to just like shove it off a cliff but there's a lot that i i was also talking
[04:39:06]  to jared and he he came up with his own custom implementations of stuff because like node apis directed the way these things have to work just from an api design
[04:39:17]  standpoint that were innately in performance so like they they basically just made some assumptions on the interface that they exposed to people and now it's impossible for jared to optimize
[04:39:29]  it basically and like the streaming apis are a perfect example of that and i i think that there's a lot of potential here on the web apis being the thing it
[04:39:42]  wasn't shippable today which is why you know i'm pretty sure necks and them they're just like oh yeah async local storage slap you know they just
[04:39:50]  basically gave up and to be fair everyone followed suit and added async local storage to all their cloud providers which is why we can use it today in solid start um but
[04:40:03]  i don't think this should be the takeaway i think that like it's true that that's where we are today but i am still pretty optimistic that in time the node ap
[04:40:24] is do not need to like as having started from a position of web apis and slowly added node apis back in um you know as needed you know as time goes
[04:40:36]  on we need less and less of those node apis that being said we're probably too far away winter cg maybe was good timing from like you know where people were
[04:40:49]  in their solutions but too early for us actually to be able to deliver on it standards move and the move too slow and maybe that's that's really what uh guillermo
[04:40:58] 's point is you know in the same way like we basically can't wait on standards that being said i also don't think we can i guess to operate today you have
[04:41:15]  to treat node as a true standard but i like i don't think that's something to um what's the term like try to like work towards like i i think that's
[04:41:29]  like a harsh reality kind of like i don't know but maybe you just apply that to my my earlier comparison i actually said let me mix the true standard uh yeah i
[04:41:47]  think i think i want to yet on the second one yeah that's the interesting thing about this on the on the scaling side because i there is some amount of hybr
[04:42:06] iding that's why there's an optimized depth thing where beat will actually free like bundle certain things but it seems like and maybe it's the size of apps that the next side
[04:42:17]  has had way more issues on performance and bundling than we've seen on the beat side and funnily enough um you know they realized this i guess maybe they were
[04:42:32]  doing this bundle list thing in a way and then they they did improve performance recently with the last releases so i i take it whatever they were doing before wasn't scaling but you
[04:42:44] 're right we haven't seen the same complaint as much on the beat side yeah you think that's yeah the partial pre-rendering because basically they're saying like don
[04:42:59] 't render on the edge just use the like we'll serve the static part from the edge and then you'd render the rest of stuff from the server yeah it's nice right
[04:43:09]  now working in these zones where we're using mostly smaller apps and stuff so we can basically render from the edge whenever we feel like it but yeah so yeah maybe that's
[04:43:25]  what it is but i yeah i don't think people should be working for it like if i'm making a new blank orm or whatever like whatever i'm making now don
[04:43:33] 't make node the only target yeah okay yeah so yeah i think the other funny thing is the initial load time with the bundle list piece feels so much faster that people like
[04:43:55]  aren't suffering the rest of it as much like i always talk about benchmark bias on this kind of stuff because like one of the things that solid does really well is that if
[04:44:04]  someone does some stupid demo that's not real where they just like update a text note as many times as they can they'll be faster than spell everyone else but this is not
[04:44:12]  a real test like when you it's just the thing that's easiest to verify and i feel like um this is one of those examples where the the easiest to verify thing
[04:44:22]  is definitely um benefits bundle list yeah well it's going to be interesting to see how this goes um it's funny because we we weren't talking about ppr as much
[04:44:44]  on the netlify side but i'm sure it's part of the part of the discussion now um a lot of stuff has been about invalidation i'm i'm looking
[04:44:53]  i'm looking forward to get past the next part of solid start i've been pushing all the people back and be like let me get the new solid start out then we can
[04:45:00]  talk about how we can implement these kind of features so um yeah i think uh i i i i do want to see i mean there is a lot of things where people
[04:45:12]  do hit issues and like our adapter swap was easy enough but they go deploy with edge false or edge true have it fail and then switch to edge false it happened a lot they
[04:45:23] 're like my prisma doesn't work or whatever you know so i get it they have a build step in fresh now i almost want to look in that but i don
[04:45:35] 't i don't and i don't want to all right anyways interesting stuff i wonder i really want to listen yeah the problem is where this the rest of the server ecosystem
[04:46:03]  is today but it's like not a reason not to try and push the ecosystem over there anyway i'm happy for the standardization the fact that i can just use web
[04:46:34]  responses and like that in node now makes my life you know a million times easier well anyway i think that's it we're back to brian florence's run
[04:46:45] away remix router um downloads and i guess that means remix has 50 000 stars in github so we full circled and in good time they call it ahead of time compilation
[04:47:06]  oh man i i really this build this stuff in that sense is just complete bs like if you're converting typescript files to js files if you're doing tailwind
[04:47:22]  like you're doing a build you're it's like config list build is that what it is it's probably even config in the i i don't get it i mean
[04:47:37]  it's fine if something's actually buildless i think this is just the the old swix um left shift thing right we're just moving stuff down the line if our builds
[04:47:48]  can be built into our tools in a way that we don't have to interface with them it just makes our lives seem easier optional build is an optimization step and that's
[04:47:59]  always the thing just like the lit templates that do that optimal compile it's just that and which is nice about that is you can just kind of just do it or not do
[04:48:08]  it sorry and just like do your thing and then be like actually i want to optimize it now i can do it like having that kind of graduation seems reasonable to me it
[04:48:17] 's just one of those things where it's like i know i'm always going to hit the check box so why do i care you can tell me that i can optimize
[04:48:27]  something for my end users i'm going to do it every time forget it's an optimization step yeah yeah that's that's definitely one way of putting it i'm just pict
[04:48:49] uring the the code that react forget would allow you to write and then turn react forget off like just like how like unoptimal that code would be no not really i
[04:49:06]  talked about web components a whole crap ton i taught i the only thing that i i thought was kind of funny was that uh and it was the start of the stream was that
[04:49:22]  that essentially um this is react router so right in florence was basically seeing that remix um has 4.5 million users instead of you know 20 000 or whatever like
[04:49:36]  this is downloads so i mean a week or whatever like um or is it downloads a month yeah in any case and it's because they just like move the package over you know
[04:49:48]  remix i guess also has 50 000 stars that was the funniest drama today it's not even really drama uh oh i need to go okay fine fine yeah so let's see
[04:49:57]  evan's response uh someone shared this earlier in the chat let me let me see that where where is that where's evan's response why can't i find it
[04:50:08]  someone share it again yeah let's let's it wasn't that long ago was it where's evan's response okay someone share it again i mean i could try and go
[04:50:24]  looking for it but i guess he would have reached did he retweet it let me try you yuck see however you say that okay here we go did i find
[04:50:55]  it is this the right stuff did i find it is this the right stuff i see so he's actually going further because like even though beat has a way to bundle some
[04:51:28]  stuff for performance optimization he's actually saying like bundle list mostly works as is oh that's that's that's that's that's that might be fair sometimes oh that means
[04:51:53]  i think i just have a really fast machine well i'm glad he uh he got in the fray here i've been just always entertaining oh we got time for one
[04:52:28]  more spicy one before i go let's see here but i just like that in general that's why you should never fix any issues on github no do you think
[04:52:41]  nextjs is not living up to expectations remakes being the only other real option out there is an opportunity for a new react firmware that's a bit simpler and traditional is remix
[04:52:56]  a problem i mean i think remix is already capturing a bit of that that zone if next isn't doing it for you i guess people don't like the loaders and
[04:53:06]  actions what you're asking like if that gamble is the play then i guess that's i think the solution would have to be something very client side friendly mentally wise i think it
[04:53:21] 's basically tan stack router it's tan stack start that's that's basically something that looked like that is basically where that would fit it could support ssr but be
[04:53:32]  very client centric in its data patterns you'd use like tan stack query you wouldn't have loaders and actions i don't know if there's a space for it but
[04:53:45]  that's definitely where where things are at tenor i don't think cares about the metaphor he's lost that thing interest but the stuff we're building on vinci is
[04:53:56]  going to make that very easy for to come about um we're like 90 of the way there anyways so yeah i i don't know i don't know if there's room
[04:54:07]  i think there's the next is just kind of the thing so it's like hard to find room they're gonna put react core team decisions that kind of pushing out other
[04:54:16]  meta frameworks but i don't know if if i was looking for a path like that i do think it would have to be very csr to ssr friendly which next
[04:54:30]  and remix kind of actually aren't all right let's see oh yeah yeah yeah i mean evan's the master of like not subtle sub tweeting or whatever yeah so
[04:55:04]  everything's killed if you wanted to i trust this man he knows what he's talking about he's a react user v comes out better yeah no i mean yeah anyway i
[04:55:48]  think i'm calling it a stream i think i have sushi today so i am stoked for that um i don't know what i'm doing next week but hopefully we've
[04:55:59]  got some uh some releases in the pipeline i don't know if i can get start solid start beta 2 out next week um be simply from the fact of the uh docs dragging
[04:56:09]  but i'm you could definitely try it you might even be able to try it right now if you in npm and it solid at beta you can probably see see where
[04:56:18]  things are at but yeah i really wanted to get out um this last month november because i would i feel like once we get rolling on this um the the beta period
[04:56:32]  rc period should only be a couple of months right i mean it's christmas break that's hard but i'm real i was really hoping i'm not gonna lie that
[04:56:38]  by like end of february beginning of march we'd have 1.0 for start um and that over this next couple months i could actually start working on solid 2.
[04:56:46] 0 as we're just kind of squashing out the bugs and issues and building out and vetting solid start i'm i'm i'm ready to be like i've
[04:56:55]  done a lot of the work now i feel like we just need to you know take it to the next stage all right have a good one so hopefully next week see ya