---
showLink: "https://www.youtube.com/watch?v=8ObxzMSIqKA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Evolving Isomorphic Data-Fetching"
description: ""
publishDate: "2023-09-16"
coverImage: "https://i.ytimg.com/vi/8ObxzMSIqKA/maxresdefault.jpg"
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

[00:00:00]  Hello everyone and welcome to my stream today. How's everyone doing? It's been, it took me a bit to figure out what I wanted to cover this week. It
[00:00:13]  wasn't particularly obvious, but yeah, we're going to try something a little bit different here. I mean, yes and no. This is, I wanted to look
[00:00:26]  at some problems I've been kind of working through the last little while with designing future features for Solid, but in general just looking at this whole kind of space. So this
[00:00:42]  stream will depend a lot on audience participation, hopefully, so I can explain stuff clear enough. I think we're going to do a lot of Excalibur. But
[00:00:51]  yeah, I want to kind of present this problem because it's a, it's a tricky problem. It's the reason why React appeared externally to release no features for
[00:01:01]  five years. They were working on this very difficult problem of data fetching and it touches on really every aspect of everything. But yeah, before we get started, let
[00:01:14] 's just welcome everyone to the chat, come say hi. Yeah, thank you. Yeah, what time is it in India right now? No, now it's, it
[00:01:26]  should be 12:30. I think India is 12 and a half hours ahead of me. Yeah. Thanks, everyone for coming along. I'm rewriting my React
[00:01:40]  up to Solid since around a week. Cool. Well, you're still in the honeymoon period right now. I hope it's going good. Hey, Kelvin. Hey.
[00:01:47]  Surprising number of people. See, I honestly wasn't sure what the reception for this kind of stream would be, but this has had the highest, like pre-
[00:01:56] watch signup rate of any stream that I've done in the last few months. I think I've had a couple that were around the same number, but this is,
[00:02:03]  it seems people are, are stoked for this. So let's, let, let's not to try and not disappoint. 9:00 PM in Denmark. Yeah, I
[00:02:10]  know it's always hard for Europe, but at least this is better than when I used to stream at 8:00 PM Pacific time. 9:00 PM Pacific time
[00:02:16] . Cause that was like, basically, if you weren't in North America, you weren't watching it. And even then, if you're in the East coast, you
[00:02:23] 're like, why am I watching this at midnight? Nah, um, I've got a couple of good guests coming up, uh, in the future too. Um,
[00:02:39]  I love my guest streams. I always get to learn a lot of stuff in those streams from other people. I I'm actually a little bit disappointed. Um, the
[00:02:47]  viewership on my last stream isn't as high. I look back and I was like, wow, this is actually, I liked the stream a lot. One of the
[00:02:53]  better streams in a long time. Um, and the viewership really isn't reflecting that. Uh, the, I guess not as many people are familiar with NJS
[00:03:02]  or maybe Puya himself. Good stuff in that stream from my perspective, if you're like interested in like understanding the building blocks or framework and like what pieces are available
[00:03:12]  to you. Very intriguing thumbnail image. Yeah. I feel like maybe I took a bit out of Theo's book, you know, lead with the get server side props,
[00:03:21]  stay for the real stuff. It's not isomorphism. I do Pascal that time here. Well, maybe I should have said isomorphic JavaScript. Uh,
[00:03:36]  I'm, I'm still, I will, I will prefix it there. I am still very much, um, in a zone because of the hydration problem, which we
[00:03:46]  might touch on a bit today. Um, where you basically only can have to run for these declarative frameworks to work on both sides efficiently. You need to have JavaScript on
[00:03:55]  both sides. I'm not saying your whole backend has to be JavaScript, but you need it. You need to be, to be able to render the component, whether
[00:04:03]  it's only once on the server, like in resumability's case, or, you know, have a good hydration, but both of these require an application to get
[00:04:12]  bootstrapped at least once. Um, and that means you need JavaScript on the server at a minimum, which is hard. Um, Um, cause I understand the
[00:04:23] , the, the complexity there or the thing. And that's why, you know, people talk about stuff like HTMX, like, unfortunately, like from my perspective
[00:04:32] , like, I mean, it's fine, but it also, it just is like, it doesn't solve anything that I care about. Um, I understand that there
[00:04:40] 's this real tension here because not everyone has the ability to run JavaScript everywhere. Did the stream die? I hope not. Did the stream die? Someone, someone tell
[00:04:57]  me if the stream's dead. I'm still getting comments, at least for now. Something up with Twitch? Let me, let me go to Twitch. It's
[00:05:12]  confusing Parasocial because you have like both logins right now. One on, right? One on, uh, Twitch and one on, uh, YouTube. Okay.
[00:05:24]  Okay. Well, I'm glad people are here. Yeah, no, the NJS stream was good. Um, I, I quite liked it. Uh, yeah
[00:05:38] , I guess that's the European schedule. I, uh, you're a trooper. Yeah, I, I'll see when we have, when's a good time
[00:05:52] . I mean, obviously I talked a little bit in my beat talk, but, um, also next week we do have a guest. Um, Nikhil Sarraf,
[00:06:04]  uh, will be joining us again to talk about precisely this. So I think next week is when you're going to get the, the goods. Very interesting. Yeah
[00:06:14] . Well, I released an article this week and that's not unrelated to the topic that we were covering today. Um, well, yeah, we're doing good with chat
[00:06:25]  here. I should actually tell people that were live. Um, just a second, but yes, good job chat. I want to, uh, I keep this talking
[00:06:36]  up because then, you know, I won't the greatest danger of a stream. Like the, what we're doing right now is that I just get lost in my own
[00:06:43]  train of thought and no one is following, or maybe I forgot the, to turn the audio on like last time. Um, so when I came back, so yeah
[00:06:52] , let's, let's see here. Let me quote treat and I'm live and then I'm going to say Twitch TV slash Ryan solid. All right. All
[00:07:10]  right. Cool. That should be good. Um, well, okay. Okay. Yeah. Greg's got a good point. When I was saying about JavaScript on the backend
[00:07:27] , you just need to have the same language on the server in the browser. So wasm is another way for us to escape, um, the, the state we
[00:07:38] 're in, so to speak. Um, there's challenges for wasm as a universal solution, but I mean, hopefully we find a solution there because honestly, like,
[00:07:52]  I feel like that's part of the point of wasm. We've been locked in on JavaScript in an undeniable way. Like I, it's so much
[00:08:00]  to the point that I understand why people have other needs, but it's at, you know, and like you have other setups and there's people reasons and organizational reasons.
[00:08:10]  And I've seen it, um, you know, maybe security reasons, maybe all that, but from like a pure, like, like end user impacting efficiency standpoint,
[00:08:23]  you need JavaScript on your backend right now. So, I mean, it's, it's, it's this unfortunate truth. Um, there's no point pretending that isn
[00:08:38] 't the case, but, um, I think it's a problem. I wrote an article last year about that actually. Um, what was it called? Uh, the
[00:08:46] , uh, the JavaScript paradox, like the only way to actually use less JavaScript is to write more stuff in JavaScript. Um, that's how inbred JavaScript has
[00:08:56]  gotten. I'm just posting this down to chat so you can see that if you haven't. Don't feel a framed, uh, so ashamed about that Friday night
[00:09:18] , but yeah, no, I'm glad. I'm glad people are here. Okay. Yeah. I mean, and, and some large companies do this, um,
[00:09:31]  part of the whiz solution at Google, um, for those who don't know, whiz is like the super performant, the thing that powers Google search and
[00:09:42]  Google photos, um, you know, it's an internal framework, but it's like, it's, it's resumable. It's partial hydrating. It
[00:09:49] 's very smart, a little bit clunky to use it. So I hear, but they, they, part of their, um, pipeline includes compiling Java to JavaScript
[00:09:58] . So like there are large companies looking in this zone. I know eBay also had a Java backend and was looking at this kind of stuff too. Um, but largely
[00:10:08]  eBay ended up moving completely to Marco, but what about stuff like Astro? I mean, I don't mind talking about this for a few minutes before we get started on
[00:10:23]  the main topic, but I, yeah, I, I've thought about stuff like this. Like you're saying like the wrapper could have been written in a different language
[00:10:31] . And, um, as, uh, I think, who is it tipped me onto it? Kelvin, um, tipped me off to something called, uh,
[00:10:38]  inertia. And there are, um, frameworks that are kind of Astro like where you write your back, like the outside in a different language. Um, but then still
[00:10:48]  use your reactor view components or whatever, Svelte components or whatever. We were talking about doing a solid integration. So you kind of get that kind of thing. And
[00:10:56]  that kind of makes sense. The thing is what makes Astro good, isn't that it can embed some client components inside a template. Like I'm at everybody on the
[00:11:06]  server can do that to a certain degree. Um, it's that those components also render on the server, which needs JavaScript. Otherwise, like, you know, throw a
[00:11:14]  web component on the page and call it a day. Like we've been doing that for a decade, um, with polyfill set to be fair, but like you
[00:11:23]  could do it other ways, right? Once we, the problem is once we had declarative JavaScript, we suddenly have this kind of fighting, you know, nature of it
[00:11:32] . Right. I think I showed in a previous stream, the double templating dueling, we don't have to go back there again. So like the big part about
[00:11:39]  Astro was that it did run this JavaScript on the server. I know nurse has been looking at, um, doing that where they can have like a PHP back end
[00:11:48]  and then do kind of like what's the term, but like, um, delegate to a JavaScript process to render the islands. Cause what's cool about this and in a
[00:11:58]  server component world is you almost never need to go to that JavaScript thread, except for on that initial render. We'll talk about that today. Cause it is very impactful
[00:12:07] , um, for the solution that we're looking at here and the problem we're looking at here. Hey, all right. Remix deployed V2 on Friday night.
[00:12:21]  Yeah. I, I didn't, was there a release post, um, uh, this week. I didn't actually see it. I, I, I kept
[00:12:27]  on seeing like the, like migrating to two references in their docs, but I haven't actually seen the, the big release drop TS from solid. We, we did
[00:12:36]  that. We talked about that last week. Yeah. Back to coffee script. Yeah. I mean, if you saw my talk, you know, maybe that's why me
[00:12:45]  and DHH can relate a bit, right? He loves Ruby. I really loved coffee script. They're coffee script and Ruby are like best friends. They're like
[00:12:54] , they're almost like what JavaScript would have been if it was more Ruby like, um, and I get his dislike and preferences, but I don't get like, yeah
[00:13:07] , that's what mentioned before. I don't think it's reasonable as an API or library author to expose, you know, like just, make your own preferences override
[00:13:20]  the general benefit to the wider community. This only works if you want Jason serialized props in the islands. Yeah. Yeah. I mean, we have to serialize that
[00:13:35]  anyways to, for hydration in the client. So yeah. Um, the serialization is, is, is real. Have I seen the Leptos, the UI
[00:13:45]  rust framework? I guess you'd like it. Yeah, definitely. Um, and here's the author of Leptos right, right here. Um, yeah, we
[00:13:55] , I had a great stream with Greg, um, Ooh, almost a year ago. And, uh, he, he taught me rust in the process. So that was
[00:14:04]  a lot of fun and obviously I love the reactivity bits. I love the solid star dish bits. It was, it's honestly my most successful stream to date.
[00:14:14]  I think we ha it has over 35,000 views. Um, I don't know. I'm not, I'm like not Theo. I'm not usually like watching
[00:14:22]  that like a hawk. Let's see if I can, let me share entire screen, whatever, like trying to remember. Yeah. This, where are we?
[00:14:41]  Um, popular. There we go. Yeah. Almost 40,000 views here. You should definitely check this out. If this is, if, if this is your interest
[00:14:50]  area, Greg has some other, uh, streams explaining how wasm and rust work, um, with Leptos and I, they're all worth watching. He
[00:14:59]  is an amazing teacher. So I'm just going to throw a link in here. Um, all right. Do you know how, yeah. Um, I was again,
[00:15:14]  very lucky. I don't know why I keep on closing this down. I had Matthew Phillips from Astro on two weeks ago. Um, and he explained exactly how
[00:15:25]  this worked. Let me go to my channel again, uh, live right here. Um, building Astro with, and again, I'll drop a link, but,
[00:15:35]  um, hopefully for the beginning of the stream, why does it got a timestamp on it? Um, anyway, uh, Matthew Phillips explained exactly how this works.
[00:15:45]  Um, the basic part of it, and I actually talked a little bit about it in my article today, uh, or that I released yesterday rather is that, um,
[00:15:54]  when the new HTML comes in, it's very much like turbo or, uh, like, uh, like, uh, hyper, um, what's a flamet
[00:16:06] hrower where it swaps in the, the content. Um, but then because they have matching IDs, anything that was in the page previously that matches the ID, it
[00:16:16]  uses a query selector all and literally just like replaces the element. Um, very simple mechanism, um, based purely off being able to generate unique IDs at render time
[00:16:36] . Uh, here. Yeah. Kelvin's got the, the scoop on inertia. It makes the boring JavaScript stack possible. It's JavaScript in the back end with sales in
[00:16:45]  the front end with you. Yeah. So yeah, it's kind of, uh, allows this, uh, place where you can have, um, kind of like
[00:16:58]  client islands more or less. Um, I haven't looked at it too closely. I think one of the challenges here is the exact same challenge that something like Astro faces
[00:17:10]  when adds, when adding client side transitions. Like, in fact, my understanding is while you have these clients like components, the framework still generally performs like a MPA
[00:17:18]  framework. It's just a matter of making that smoother. It's like Astro before 3.0 essentially, except you get to use a non JavaScript backend. The problem
[00:17:28]  is like, it's hard for something like this to keep on catching up when the innovation's happening so quickly on the JavaScript side of the space. Um, and the boundaries
[00:17:37]  are hard. Um, yeah, but it's an option. Okay. Yeah. We can, we can look at the V2 remix on this week in JavaScript later
[00:17:50] . Yeah. Yeah. Benton, you hit it on the head. The challenge is state management that that's actually very related to the topic today as well. Like
[00:18:12]  this, this is the, if you want to keep the, the client see stuff like Phoenix, um, live view, or, you know, these web socket solutions do
[00:18:25]  have this kind of mental, like if you keep the state on the server, it is consistent as well. Like that is one option where you can essentially have, you
[00:18:35]  know, a consistent model that works, um, that's backend based, but you need a persistent connection. Like it's nice. Uh, even using live view JS,
[00:18:44]  I could see that, but it requires a different, a very different, uh, sort of backend system for that to work. Otherwise the state kind of, you want
[00:18:57]  it to be in one place or it belongs to the client. I think the state that actually belongs in the compliant, that that's the RSC model as well. It
[00:19:04] 's the hybrid solutions where things get really complicated. Like when the state, when you're passing state back and forth and that's basically what killed like .net update panels
[00:19:14]  and a lot of the solutions in this space. Yeah. It's funny. I'm actually having a hard time keeping up with chat. This is good chat. Keep this
[00:19:30]  going. Yeah. Greg will come back and teach me more rust. I'm, I'm pretty stoked. Oh, this is cool. I just wanted to thank you
[00:19:39]  for JSX DOM expressions. I'm doing my bachelor's thesis based on and employing my own version of solid. It's been really fun. That's awesome. I
[00:19:44] , I, I'm, I'm very happy to see the work that we've been doing feedback into academia. Um, recently as like this, recently Fabian's been
[00:19:56]  working on, uh, he just submitted his thesis for a Valabot, which is the validator, um, talking about modularity. And again, a lot of
[00:20:05]  the, um, inspiration and for these kind of approaches was, you know, wanting to work with these small libraries, stuff like solid or quick and looking at how code
[00:20:13]  splitting and smart bundling can work, um, tree shaking. One of the cool things about solid that I didn't realize until working with Fabian that we got kind of
[00:20:21]  for free was you can't split a module across multiple chunks because it's like, it has to come together. But funnily enough, because of the way solid
[00:20:33]  ships source code, um, uh, generally speaking. So, so the people are actually building the project, um, in place, we actually get a finer level of tree
[00:20:43]  shaking that you, then you find in a lot of libraries just because our libraries are, are, um, even third-party libraries are basically, you know, broken up
[00:20:52]  into more files, um, because we promote shipping the source. Um, so, uh, cause we were in this discussion, myself, Misko and Fabian,
[00:21:00]  and he was like, no, I'm like, we're, we're like, this is the problem with the modules. This is why RxJS has like
[00:21:05]  all those like RxJS operators slash whatever, slash whatever, like all these sub packages, because just while you could pull in a specific operator in one chunk and a
[00:21:15]  super specific operator in another, another chunk, they would have to package the whole RxJS together with both operators. Um, generally speaking, the way that bund
[00:21:24] ling works, um, when you have these, you know, pre-packaged libraries, but because we shipped source, um, it didn't work like that. And
[00:21:31]  Fabian wasn't a re didn't realize this because he was building a solid project. So he's like, no, no, I'm getting exactly the code I need
[00:21:37] . So anyways, just, it's cool to kind of see this kind of come back in even, even some of the work, especially on the reactivity side that Mil
[00:21:45] o has been working on, which is influencing the design of the signals and the standard is just amazing, uh, application of taking real kind of experience with, you know
[00:21:56] , building stuff out in the wild and funneling them back into academia. All right. Hi Ryan, what will a modern template engine look like also support narrative linking?
[00:22:22]  I don't know. I, I'm, I'm, I, I know this is very much the back end kind of thinking. And when I think about this
[00:22:30] , I'm like, why are we doing this weird kind of extra layer on top of our templating? If you want to know what a modern templating language looks like
[00:22:37] , you've seen it already. It's called JSX. So yeah, I, I mean, there's issues with JSX, but I mean, there's
[00:22:51]  also benefits. JSX is kind of dead, which is the problem where it's like the standard doesn't move forward, but like something like JSX, I think actually
[00:22:59]  has a lot of, um, a lot of, you know, benefit. I'm playing with producing RSC payloads with Go so I can use React to hyd
[00:23:12] rate the whole route. So no, we should run it with like, okay. So you, but you're just making RSCs because RSCs solve the solution
[00:23:19] . But my question for you there is how do you client, how do you server render the client components? Like you, like you can do the, the RSC part
[00:23:28]  in Go, arguably, but the client components for initial render still need to be done on the server and they have to be in JavaScript. Right. I think unless you
[00:23:37]  make like go react, I mean, it'd be interesting if you could just literally emulate react at every level, but like how would even end user code, you know,
[00:23:48]  huh? You got to tell me more about this sometime. Yeah. This is interesting. We're going to talk about some fundamentals today just because of what this data fetch
[00:24:07] ing thing actually touches on state routing events, data fetching. The only thing it doesn't really touch on in styling. Well, I mean, it can, but
[00:24:16]  yeah, yeah, it, the, these pieces actually are very much related. That's why this is like a very holistic look at architecture. Um, Oh, another bachelor
[00:24:28]  thesis. Very cool. Yeah. I'm glad, like I'm glad to see this early days in solid. I did a lot of research, right. I did
[00:24:39]  a, I wrote a lot of articles on this research, especially on DOM rendering techniques. And I, it was very cool to see that influence more stuff coming out. Like
[00:24:48]  even, even to a degree that, that rent the, the work that we did to measure rendering performance influenced designs of things like block DOM. Right. Um, so it
[00:24:57] 's, it's, uh, it's, it's nice to see, see that the funny thing is this kind of work is good gets done at large companies all
[00:25:06]  the time. They're always like looking for performance, especially ones that run their own frameworks, things like Google, places like meta, places like eBay, they, they do
[00:25:13]  this kind of work in this kind of testing and they do it to cater to their metrics and their like goals, but very rarely does the data around this ever, you know
[00:25:24] , come out. I, I, I was talking about my rendering techniques and I was sitting there with Dominic Ganaway and you know, he, I didn
[00:25:31] 't mention maybe about five years ago, he was telling me about basically block DOM. Um, and it, you know what I mean? Like it was an idea that he
[00:25:43]  was playing around with internally at Facebook, but he, you know, there was no article about it, no one talking about it. And you know, it had to get
[00:25:49]  rediscovered again externally, you know, a few years later. And I think, I think it's interesting. Um, a lot of this stuff isn't new
[00:25:58] . It's not, it's not hard, but to, you know, kind of get to these conclusions, it's just, we don't have as much external,
[00:26:07]  you know, people exploring this in real time. So if anything, if I can help on that side, I'd love to, because like, that's why we do
[00:26:13]  streams. Like we're going to do into doing today. Cause yeah, I'm sure the engineers at meta already figured this out like six months, a year ago,
[00:26:21]  whatever. But there's like a gap between the common knowledge and people going and going, well, how, why? Like it's not obvious anymore. Um, things have
[00:26:32]  gotten complicated. Yeah. Yeah. Uh, this is going back to the code splitting thing. Yeah. I love that rollup has that degree. But the thing is
[00:26:47]  I said, shipping the source, just a little secret to get even more sub sub level. Uh, still talking about the templating. Um, yeah, I don't
[00:27:02]  know. Uh, do you know what I don't like about view style templates? It per the, okay. The one benefit of view style templates is that you can
[00:27:11]  ship them as HTML and they can be valid HTML, but which is kind of interesting, you know, when you have like, you know, backend centric approach and you
[00:27:20] 're like, okay, well I can just like ship this HTML and it works. But the problem is like the way that used to work in the back in the day was
[00:27:26]  actually grab the elements out of the dom and then like render with those and stuff. Like we did this with knockout, you know, view one did this, but
[00:27:33]  no one does that. They precompile it down to JavaScript now. Like no one actually sends them markup. So like the syntax is basically there for the sake of
[00:27:42]  that. And what bugs me about it is it, it actually changes the semantics of attributes. Like it makes attributes special. And it's like, I realized that they
[00:27:55]  have keywords. I mean, in a sense, our directives are like that, but I don't even like directives really. It's like this, like making
[00:28:06]  the fact that you suddenly have a VIF on a DOM element changing what the descendants do is weird. Like it's not semantic from even an HTML standpoint. So like,
[00:28:16]  I feel very conflicted about this. I much prefer something like Svelte's templating language, but you know, at a certain point, why introduce another language
[00:28:27]  if you already have JavaScript and then hence you get to JSX. The reason to introduce another language is if you want, uh, another target, like you like, okay
[00:28:35] , well, we're not going to bring all of JavaScript in. The fact that Svelte only has a limited syntax is actually a benefit if you want to be able
[00:28:42]  to compile those templates in a different language. That's not JavaScript. It's just very hard when you there's this like rocking up. It's very interesting when,
[00:28:52]  as I said earlier, you basically have to be using JavaScript to get the most optimal stuff. And then it's like, so why don't you just leverage it? Like
[00:28:58]  it's, it's, it's about the, you know, the balance between catering to the lowest common denominator and then just making the most powerful optimal stuff.
[00:29:05]  So it's like, I'm not too attached to, you know, like a specific thing that I can't just always choose the most powerful stuff, so to speak.
[00:29:19]  So I understand like server stuff is faster on the server, but the impact on the end user client starts from the client back. So you can make bigger wins closer to the
[00:29:30]  end user than you can further from them. All right. Honestly, um, this is, this is, this is, uh, Twitch, this is because I use Stream
[00:29:48] Yard, I think. I tell it, oh yeah, yeah. Why am I in this category? I have no freaking clue. Um, StreamYard goes
[00:29:59]  basically something along the lines is like choose your latest category and then they always screw it up. Um, so they automatically set this up. So, uh, I, I
[00:30:09] , I hate, how do I, I don't even know Twitch UI well enough to actually change an ongoing stream from what category it's in. Um, let's
[00:30:20]  see, talk shows and podcasts. Can I just edit this somewhere? Edit. You can edit the title. Can I edit the category? Yes, I can. Um
[00:30:34] , yeah, it's funny cause I've set it on software and game development before. That's the right category. And it just like comes back because of, uh
[00:30:44] , good old, uh, StreamYard. So thank you. Thank you very much, Malky. Um, can, you know, you're talking about
[00:31:05]  something I was derailed. Can you quickly comment on the difference between using solid with versus react with Astro? I mean, very little. One is smaller and faster,
[00:31:13]  but otherwise Astro should be doing most of the lifting. One has more compatibility with third party libraries out there too. So, you know, that's the consideration and
[00:31:25]  more people know how to program with it. So, uh, using the big, okay. The biggest difference is solid has signals built in, which means you have a state
[00:31:34]  solution, which means it's easier for islands to communicate with each other built in the box. If you use react with Astro, you're going to have to like also
[00:31:41]  bring in another state solution. That's basically the, the only real difference I would say. Yeah. Okay. Yes. Didn't Astro make a custom template and
[00:31:58]  found JSX to be better? Yeah. They played with some stuff. Honestly, their templating language for the longest time has been very JSX. Like it was funny
[00:32:04]  because some people thought it was like, not. And I was like, it's because you guys aren't doing anything complicated with it. Like back in the day when Ast
[00:32:11] ro first came out and they weren't doing SSR and people making static sites. Yeah. I mean, it was just like JSX and HTML kind of look very
[00:32:16]  similar when you have no wrapping function. So, you know, you're just passing values in like even Svelte, it looks kind of all the same, but the
[00:32:23]  second you try to make like SSR demos, like, you know, my hacker news where there's wild cards and variables and conditional rendering, it looks, I was,
[00:32:32]  it was easier for me to port between Astro and say like solid JSX, then it was the port to React just because it was more of a pain in the
[00:32:40]  ass. Let's just switch all the class names around. Like it wasn't even like Astro's JSX is JSX. Limiting syntax is a very, very
[00:32:53]  powerful tool, right? That's, that's why Svelte is like, you know, can it's, they're like, it's some simplicity here, right
[00:33:02] ? It's a two-way street though, right? Cause composition then suddenly breaks out of that mold. I think this is the problem with even React for Git to
[00:33:12]  a certain degree. I mean, React doesn't keep the composition. It's important to them, but like in the component really becomes something meaningful. Luckily for React's render
[00:33:22]  model in the component has always been something meaningful for them because of their re-render stuff. I mean, you have to really think about how that works, but in other
[00:33:29]  systems, you know, like solid components are not special. So it's like, it's weird to make the component be anything but a function call. All right.
[00:33:45]  I am five minutes behind. Okay. Do you think React has longevity with server components? Yep. I think it's complicated. I think people like, it's complicated for
[00:33:56]  people to get from A to B, but I mean, it's a natural evolution as I talked about in my article. Like the unfortunate thing is like React just like
[00:34:05]  jumps straight to the solution, maybe not the most optimal version of it, but they jump straight to the solution. And then we're going to spend like the next like three
[00:34:10]  years where people are like trying to build really crazy stuff with say Astro and then go, oh, it doesn't do this. And then, or they'll, they
[00:34:16] 'll grab HTMX and be like, oh crap, this doesn't do anything. And then they'll, they'll grab, they'll try all these things and
[00:34:22]  they'll basically end up at server components. I'm, I'm, I'm, I'm actually fairly confident of that. If the desire is there, if the desire
[00:34:33]  is there, people might be fine just keeping apps over here and sites over there. Maybe the complexity is too large. Like there's always a threshold here. Like this is
[00:34:41]  just the only logical conclusion currently, if you're looking without the platform itself changing, if you're looking at, um, trying to the goal of merging apps with sites
[00:34:52] , I think you're going to see more, more exploration this way. All right. I've caught up with chat. Hmm. Orange juice is so good. Okay
[00:35:16] . Okay. Um, yeah, Vue does JSX. Yeah. I like Vue's JSX. In a sense, Vue's JSX actually makes it
[00:35:27]  almost more clear for people when they like come to solid. If we did JSX the way that Vue did, people would get it because Vue makes you return a
[00:35:36]  function wrapping the JSX. Um, thank you because reasons. And the reason is resumability is not something specific to quick. Um, as I said, I
[00:35:46]  first came across it, even though, again, big props to Misko for going out in public. He went to an ng comp and like main stage was like 2019 going
[00:35:56] , wouldn't it be really cool if we had this thing called resumability, like years behind before anyone else, of course, I was not paying no attention to
[00:36:04]  angular. So my first, um, introduction to resumability was actually, um, work that Michael Rawlings was doing with Marco. Um, so, uh, yeah
[00:36:14] , I, I, I resumability plus because exploration I did a, you know, a month or so back it, I think it is a real thing that e
[00:36:22] clipses clip, uh, quick in, in practical, in, um, practice or non-practice in theory. I think it's, I think it's
[00:36:30]  hard to get there. I think there's a lot more to figure out, but I think we can approach this as a system rather than a specific implementation. Yeah.
[00:36:42]  All right. All right. All right. Um, okay. So we should probably get started on something today. Um, okay. So all that being said, I
[00:36:58]  wanted to talk today about, um, isomorphic data fetching and the reason for that maybe I should, no, I don't need banners. Jesse is a
[00:37:10]  machine. Um, I thought I had come up with the ideal solution. Honestly, I've, I've been doing this for a while and really what we do in
[00:37:23]  solid and in solid start is the culmination of like a decade's worth of thinking to where I thought, um, we got to like the optimal pattern. And I'll
[00:37:35]  talk a bit about that in a minute, but I just want to say server components completely through a wrench in that, like not even close, just completely destroyed my whole
[00:37:46]  model. I spent months trying to think around it, but essentially server components cannot work with this model that I've been, you know, building up for the last 10
[00:38:00]  years, which means I needed to look, um, back to the, to the fundamentals. And there's a, there's a reason that I care about this. It
[00:38:12] 's because I'm not satisfied that we have to like make a specific, you know, like, you know, app directory, but now we're in the new world
[00:38:24] . I think while we are moving to a new world, I think it's a backwards compatible world. That's the compelling part about this. And I want to see what
[00:38:35]  the right pattern is. So I, I started my exploration. Where we're going, we don't need banners. Yeah, no, I shouldn't depend on
[00:38:51]  you like that. I have not, have you ever read standout of our light? Yeah, I haven't read that. I'm not familiar. Um, but
[00:39:09]  let, let me, let me, let me share my screen again. And yeah, I remember this, this is from the other day. I'm not gonna,
[00:39:22]  let's not start there though. Um, let's start somewhere else. I've talked a bit about some of this subject, um, on a few other streams, but
[00:39:32]  data fetching really starts with us understanding, you know, the history of APIs. So I'm, I'm just gonna kind of bear with me here a little bit,
[00:39:45]  because I feel like I need to give some background for people in the audience. If you have any questions, please, uh, please, you know, uh, ask
[00:39:53] , make sure no one gets lost. So if, if, if I was to, um, oh, I see, I see, I see. Yeah. Yeah.
[00:40:05]  So that, and then I want to, okay. And then we go back here. Okay. So APIs in the web started as I'd say, what, like
[00:40:16]  API as HTML. Everyone understand what I mean by that? Like essentially at the beginning of the web, the only way to actually update data on your page was to go get
[00:40:25]  a new page. Right. I'm going all the way back to the beginning here. And then at a certain point, we were lucky enough that our APIs could be
[00:40:45]  done as XML or JSON, which, you know, Ajax, you know, was the, was the thing. And it's so funny because Ajax, no one
[00:41:00]  even uses this term anymore because, well, what was it asynchronous JavaScript and XML. I mean, pardon the name. It's also just kind of obvious that we can do
[00:41:11]  asynchronous, uh, fetching in the browser. It's been that way for like 20 years now, but before 2005, that was not the case. So we, this
[00:41:22]  data fetching basically unlocked our ability to have data fetching libraries that could replace part of the DOM. Sometimes people sent some HTML, some people sent some Java or sent
[00:41:34]  some data that they can, you know, update the HTML with JavaScript. This is like the jQuery age, right? Like, so, you know, at this point
[00:41:47] , you know, there's terrible stuff like soap. Let's not dwell on this is, you know, we, I mean, this is still the foundation of what we
[00:41:55]  build on today. I just want to say like, there's been a progression on how we view APIs, because at this point, we hadn't really got JAMst
[00:42:02] ack, so to speak. Um, the next extension of this was API as a state. Um, um, and if you don't know what I mean by this
[00:42:17] , I mean that our, as our frameworks got more declarative, we needed, we wanted a way of actually propagating those changes through the render library. It was
[00:42:26]  no longer just like if you, if you jQuery something, yeah, sure. You could like render a new string and enter HTML it or something. But if you actually
[00:42:33]  want like update a framework, you needed more, your API wasn't, you know, you weren't writing to clear, uh, sorry, you weren't writing imperative DOM
[00:42:42]  update API. So you actually needed it to impact state and then state to update your UI. So like, um, yeah, people in chat have already guessed what my
[00:42:52]  primary example of this, um, Redux. Yeah, this is, this is, this is sort of the idea. I mean, Redux was synchronous and it tried
[00:43:01]  to keep the, you know, the data, uh, async their city outside of itself. But for the longest time, like the pattern was just like dump your data
[00:43:12]  into a Redux store and then Redux kind of handles the state propagation from that. Um, right. I I'm, I'm, I'm going a little
[00:43:19]  fast forward on this. There's other solutions during this time period, but I don't want to mirror everyone into the history, but I want to get the context of this
[00:43:27]  because you, Deb, you, you jumped, uh, two steps. We'll, we'll, we'll get there. Um, cause the next thing is, I
[00:43:40]  don't know what to call this category, but we hit something called GraphQL. Um, because essentially we realized that most of our state was based off the data fetch
[00:43:57] ing. So it made sense that we would basically, maybe it's like API as, um, normalized cache. Maybe, maybe this is the, the, the,
[00:44:12]  the, the, the, the category here, right? What's cool about this is actually separated a bit from the frameworks more, but it was kind of understanding that most
[00:44:24]  of our stuff was actually based on the data driving it. It should have been obvious. Um, there, there are parallel improvements in other areas that we'll talk about
[00:44:35]  in a few minutes, but, uh, this is kind of how things progressed. We actually jumped to almost the pinnacle here. When you think of things like
[00:44:45]  Relay, um, we'll talk about why a bit later, but I, I did this very similar, uh, table, I think in a stream about six months
[00:44:55]  ago. Um, but it's still relevant here. So it's a good refresher. So, okay. Now, now the next one was APIs as a query
[00:45:17]  cache. I mean, this probably existed before, but, um, it was never as popular as when React query, um, did it. So the reason for this kind
[00:45:33]  of like the state with Redux wasn't the right solution, um, for this, it, it was, it was, whereas the, the caching solutions for
[00:45:43]  GraphQL gave us way more control. Problem is no one actually wanted to update the caches. The caches were way too complicated and you fancy systems. It was a
[00:45:51]  pain in the ass. It's funny. You go ask Apollo users, you know, a lot of places they should be updating the cache, but they just don't bother
[00:45:57] . And if you don't bother updating the cache and your answer to mutations is like, invalidate it, you might as well using something much smaller and simpler. And
[00:46:06]  that's where React query really took off because essentially we gone to the super optimal system, but it was like pulling like, you know, half of MPM onto, into
[00:46:15]  your browser is huge. And it, you know, was kind of clunky from that perspective. And it was overkill for a lot of people's stuff. Right.
[00:46:23]  It's kind of funny because API is HTML. The cache was the browser here. The cache could be as well, the browser, like we're talking about like cache
[00:46:32]  headers at this point, you could kind of combine it, but now you're starting to kind of cache in the client using state here is like, this is too simple.
[00:46:41]  This is way overkill. This scales it back again. Right. This is kind of the, the, yeah. Where does H, where does HTMX fall
[00:46:57]  in all of this? It's, it's arguably one, but just, just bear with me a second. We'll get here. There's a reason why people
[00:47:09]  are talking about HTMX now as misguided as it is. It's, it's still actually relevant to this, to this kind of progression because we,
[00:47:19]  as I was saying before, I mean, I'll fill it in a minute, but like the next thing we hit is a GSSP loaders. They're basically
[00:47:29]  the same thing. This kind of idea of what if we had server defined APIs, like in our, um, it's like, it's the remix kind of pattern
[00:47:41] . Um, and I don't know, this is like, I don't even know what to call this one. It's, it's, it's back to using
[00:47:51]  the browser cache again, but it's like, uh, yeah. It's almost API as RPC, to be fair. Um, I mean, the query c
[00:48:07] aches, we used RPCs too, but it's like, it's like you have specific designated functions that, that basically run some code on the server and some
[00:48:20]  the, to you and you're, I mean, it's, it's an evolution. What I want to point out here is we actually were going up a hill and
[00:48:30]  then from the peak at number four, we start going down, back down the hill. Do you see how this is actually kind of similar to like this again, right?
[00:48:39]  It works better than, you know, for our purposes than what two did, but we, we did this kind of up the hill, down the hill thing, right
[00:48:48] ? In a sense, going to the query cache is like going back to Redux. Not really. This is why it was fair that Dave was thinking I was talking about
[00:48:56]  React query here. It was on the wrong side of the hill, so to speak, but it's the same kind of thing. Um, I don't know what to
[00:49:02]  call this. I, I'll take suggestions from, from the chat, but I was getting to number seven, which is if we're talking about stuff like server components,
[00:49:14]  as a, API is JSX, wait, or HTML. Um, so I'm talking about RSCs or, um, you know, we could argue that HT
[00:49:29] MX fits, fits here, but we've basically full circled. Right. Yeah. Yeah. I like this as a page cache. Yeah. It's yeah
[00:49:43] . API is double data. Thank you for that one. That, that means something to me. And if it doesn't mean anything to you yet, continue watching the stream
[00:49:55]  and I'll explain. Um, but yeah, API is chaos. Note the remix pattern is actually pretty good. And it's actually the closest on this, uh,
[00:50:04]  page to where I was sitting as my sweet spot. Um, basically between five and six. Um, because once you go back this way, it becomes increasingly harder.
[00:50:19]  Like the, the last two again are basically servers. So like, if we had, um, you know, some bars that are colored, we could be like,
[00:50:28]  we could say blue, let's use blue. This is like, and then like trying to line this up. Let's use green. What I'm trying to
[00:50:53]  say here is client cache server cache, but I mean, it's, it's, it's the browser cache. When I, what I'm trying to say is like
[00:51:07]  one of these, like you need like JavaScript on the, in the client to, to basically manage the caching system here from, I mean, it's a little bit
[00:51:17]  lower. It's like that from, for one and two. And then, yeah, this, this is kind of where we've, where, where this evolution is
[00:51:31]  gone. We kind of went up the hill and back down the hill. Now the complete state is back on server. Well, almost, it's not completely back on
[00:51:56]  server. If we assume that the state is completely back on the server, then HTMX is something that could be considered valid. Um, and like, if you
[00:52:04]  take it to that extreme, something like live view makes sense. But unless you actually move all the state to the server, then this is not true. Router is
[00:52:28]  a better name because mutations can be mimicked by router while page does not convey that idea. Okay. Yeah. Router cache. Yeah. There's different types of router
[00:52:41] . I'm going to leave it like this for now, but I see what you're saying. Data from the server. Well, it depends what you can call state
[00:52:51] , right? Data, as much as you can, you want the truth to be the server, but there's ephemeral state, right? And what, in that
[00:52:59]  case, that's what I actually call state. I don't refer to the data that's from the, like, for me, the world lives in a world of react
[00:53:06] ivity. So I, I see a source data and I see derived data. Right? And I care about the sources here and you're right. A lot, most
[00:53:14]  of the data is coming from a backend, like a database or something. So from that source, it is server, but the ephemeral state, the thing that happens
[00:53:23]  that captured in the user interface, um, definitely belongs in the client. When you try and put in the server, you end up with a lot of complications and too
[00:53:31]  many back and forths, right? Websockets can kind of help with this, but Websockets also cost something to get in the startup. Right? So
[00:53:39]  like, and you need the persistent backend more. So, so like there, there is, and you could say that, you know, most of your state is data.
[00:53:46]  That's what this progression showed us. Right. Um, which is why we move back to a lot of this kind of data, you know, being server based, but
[00:53:55]  there is still client state, um, which is why react server components exist, which is why, um, there's these complications here is because I, I, I put
[00:54:03] , I did this on a previous stream over here, but. Um, where I was trying to, you know, split this out and I said, look, what
[00:54:09]  render, where state, where router, where, and the thing you'll notice about server components is it renders on the server, but the state and the router are like
[00:54:18]  client based essentially. And the state where on the client is the biggest difference between hybrid, like these hybrids, server component solutions and typical MPA or, um,
[00:54:29]  you know, turbo, like, uh, you know, so in a sense, we're, what Astro is right now is it's gone. It's sitting
[00:54:38]  here and it's like, can I peek into here? And it's, it's, it's, it's a question of like, do, is it worth the
[00:54:46]  complexity of managing that state on the client? And for some things like that are app, like the answer has to be yes. Anyway, what do you get maybe a
[00:54:57]  bit more into this? Um, but yeah, that's the gist of it. Okay. So continuing kind of through this progression here. Um, there is a bit
[00:55:16]  of a full circle, um, to be, to be fair. Um, there is, this is only really talking about the API and the cache though, as I
[00:55:25]  just mentioned, state is a secondary concern. So let's talk. I want, I wanted to like start this as my starting point. I will get into the specific
[00:55:37]  problem in a few minutes, but let's continue forward a bit. Cause I want to talk about routing for a second. Cause I think we got a grasp on the progression
[00:55:46]  on, um, on, um, on caches routing, um, in the client, uh, has a slightly different story. Um, I'm just going to
[00:55:58]  copy this cause I can, we're doing some lists today. We'll do some diagrams as well, but let's start, let's start here. Okay. Beautiful
[00:56:12] . So routing. I said CSR, but it's like, it's not, it's, it's client, not rendering client side routing. I'm going to
[00:56:27]  talk about more than, than anything else. Okay, cool. So how did this start? Um, I don't want that. I want to wait. Okay.
[00:56:41]  How did, how did we get into the client side routing? Um, well, it started at the beginning of single page apps. And the reason I'm talking about routing
[00:56:51] , uh, as it applies to data fetching, cause when we got started, I don't know if these exist anymore. I could go look for them. Is,
[00:56:57]  is page JS still a thing, but simple client router, right? Um, you don't even need a package. Is page JS still a thing? Vision media.
[00:57:10]  Yeah. This, this is, this is, this is the kind of stuff that I'm talking about. What ever happened to TJ Holloway chick? The guy was
[00:57:17]  like a, I know he went to go or something, but then I never heard about him again, but yeah. Yeah. Backbone is another example of this kind
[00:57:29]  of router, although the backbone, they had like a whole framework system, like, but basically, yeah. Express inspired router. So essentially it matched on a URL,
[00:57:39]  um, maybe hash date. And then it said here, run this function more or less. And all we do for these kind of routers was basically unmount the
[00:57:54]  current, you know, page and then run that function to render the next page. Um, so these routes were routers are really quite simple. And if you wanted to
[00:58:06]  have data fetching, well, the first thing you might do is await some data in this function that you pass in, but it would mean that your page, um
[00:58:18] , didn't show anything. didn't show anything. So maybe you would also define like, uh, like a wrap around this that had like a, a loading.
[00:58:27]  So you might have like when loading show this HTML. Um, and then a lot of times people started taking this mechanism. They're like, okay, well we can add
[00:58:38] , um, uh, maybe like a on route or on Mount kind of hook, and then we'll do data fetching. And then when it's done, we
[00:58:48]  can show the new page. Um, but like the basic routing did not have much built in. Oh, that sounds like fun and official. Yeah, they did. They
[00:59:07]  had a couple of routers. I it's funny. I actually built, uh, client side hacker news on one of their routers. And it, it was
[00:59:15]  such a weird convention that when I went to go swap it to, I think it was felt kit. Um, I didn't notice. And that was like, I couldn
[00:59:23] 't get felt kit to work. I'm like, what am I doing? And then I realized it wasn't felt kits fault. It was just the router was that I
[00:59:28]  used like one of the only like two recommended routers was so weird that like, it just didn't port felt kit directly. Um, anyway, and that was in
[00:59:37]  2020. I think that was like, or 2021. It's kind of crazy. The routing situations felt pre felt kit. Yes, exactly. We didn't have a
[00:59:51]  wait. So these APIs had callbacks. Yes. A hundred percent. This is important to understand because you call back. Callbacks didn't give you any guarantees whether
[01:00:03]  things are asynchronous or not. You could just call them synchronously. Um, but then like, if you got in there and you never called the callback. Well
[01:00:11] , this is the thing like promises are great. Cause they're promises. There's like a guaranteed resolution. It's going to fail or it's going to, you know
[01:00:18] , like hopefully like the API suggests that things will complete callbacks. You know, who knows? Someone could call the callback like 10 times. They shouldn't, but
[01:00:26]  like, there was no guarantees. So people build APIs around this. And one of my earliest routers, um, was kind of built on, on, on, on
[01:00:35]  this kind of stuff. Right. Because you could, if you added like an eight, like a data loading. Like a data loading step, you could like call this
[01:00:43]  show component or page with that data. But like, this is clunky. Cause like trying to feed into loading states was actually kind of painful. You had to hoist
[01:00:51]  all the data fetching up. It was inefficient. If your page had layouts, like, you know, this part of the page, this part of the page, you
[01:01:03]  know, this didn't change, you know, here, this didn't change. But like, you're just going to remount the whole thing. So the,
[01:01:17]  this is the start, but this is by no means where this ends. Right. So data fetching just wasn't really part of the question that, so this was like
[01:01:29] , sorry, no data consideration. Okay. Then came Ember router, MVC for the browser. And I'm just gonna call it Ember router singularly because
[01:01:48]  it basically redefined how all routing worked. It had influence from Rails, but it was, it was just a game changer for client-side routing. It was way
[01:02:01]  better than what everyone else was doing by a mile. Um, I think I, on stream, I tried to look for Ember router like the other day and like
[01:02:11] , they've changed it so much that I can't like find the old like system. It was Rails based that like, you know, you had these scaffolding generators
[01:02:19]  and then like, if you include certain functions, it would do stuff. But essentially the big thing about Ember router was, yeah, they had this thing where you could
[01:02:27]  like lay out your routes, which doesn't look like express. And the reason for that partially was that you can nest the routes. You could go inside posts, there
[01:02:37] 's new, and you can basically lay out layouts in this router. Um, so you can essentially say like, I can go to posts and posts have slash new and each
[01:02:49]  of these would be given their own component. Um, they would also, uh, uh, you know, the way you'd inject them is you do something called an
[01:03:01]  outlet. So Ember was also kind of responsible for the original link component. This wasn't the original syntax to be fair. They used a more handlebars, the syntax
[01:03:11] , but they also used like, like, like the two ideas. So like, um, they, they introduced nested routing. They introduced, um, like partial
[01:03:25]  layouts. They introduced, uh, what else I want to see if I can find it. See, here's an example where you have an index path and then you can
[01:03:32]  have posts index and then post slash favorites. So you get multiple nested routes. Um, wild cards. Everyone has wild cards. I'm trying to see if I,
[01:03:43]  if they'll give me like an, uh, an example here. Um, yeah, transition to is their declarative API. Maybe the linking specific routes model. Yeah
[01:03:56] . So this would be how you would like, um, connect it to your data model. Um, but basically they had all these like preventing and retrying transitions.
[01:04:07]  So they could be like on route will change. Yeah. They, they added, they were the first ones to add, like, uh, one of the fees. They
[01:04:13] , they had a whole system for route prevention, loading error states. Um, you know, and their routing could do a sync. Uh, this is still callbacks
[01:04:25] . Yeah. Fulfill, I guess promises here, but I wonder if they kept their, like, this is callback API time. Okay. So they do have
[01:04:33]  promises now, but essentially they're, they added actual like hooks that when the route changed, you could fetch the data. Um, this also support things like animations,
[01:04:53]  like this router was honestly just insane. Okay. But give you an idea. Ember router came out in 2011, 2012, like the, like it, it was
[01:05:12]  just way ahead of its time. So much so that a couple individuals, um, Ryan Florence and, um, Michael Jackson, who I believe Ryan Florence was an Ember
[01:05:26]  developer when he saw react and decided to switch to react, decided he wanted to port Ember router into react almost verbatim really. Um, in version one.
[01:05:36]  And that was how react router came around. It was essentially, uh, it didn't have all the features, but it was basically a port of Ember router. I
[01:05:46]  don't know if Michael was involved right at the beginning. Um, but yes. Um, but anyways, um, the, the, the, the whole, sorry
[01:06:08] . I'm not, I'm not going to focus on the async stuff here. Um, but the gist of it is this had specific hooks in nested
[01:06:15]  routing. So that like, as certain route sections change, you could keep your layouts and then only fetch data at specific, um, like parts of the app that changed.
[01:06:26]  If this sounds familiar to you, as I said, it's because react router was basically built on this. Um, and this for me, I was an Ember
[01:06:35]  developer back in 2011, 2012 as well. This is what started the path. Um, you know, I rebuilt my own web component router cause I was a big web
[01:06:45]  component person. Don't tell anyone. Um, web component router. Uh, let's try MPM cause I'm web component router. It's not a cop popular package
[01:07:01]  enough. Even though technically speaking, I actually have the actual web component router on MPM. Let's see, no one uses this package. I can't even get
[01:07:12]  in search results. Let's just go. Let's just go to MPM. MPM web component router. There we go. You can see this. This, this
[01:07:28]  is like full on Ember map index, not found route path tag on enter. You could do lazy. Like this is more updated, but you could do lazy code
[01:07:38]  splitting for dynamic imports. You could do things transition to this. And then I use slots as my outlet, but essentially this, um, framework agnostic web component router
[01:07:51]  that used the shadow DOM injection, all this stuff was my port. And I use it in knockout. So I, I also completely straight up ported Ember
[01:07:59]  router, um, into, into, um, my framework of choice. So yeah, this is the next step. And this one actually had, had, uh, you
[01:08:14]  know, had data fetching. The only problem with this was we didn't have promises back then. So it was really hard to like, be like pseudo pseudo as
[01:08:26] ync. Um, but you could, you definitely had patterns for loading data. Um, then the next step on the path, everyone's still with me. Right.
[01:08:36]  the power. Yeah. Yeah. I know. Except for like Marco didn't have a client side router. Um, but yeah, I mean, when you go back
[01:08:50]  to like 2013, you know, two technologies that were just way ahead of their time. Okay. So where did we go to next? Um, react router for,
[01:09:06]  I have to mention this stage. Um, because I'm going to call it the react router for regression, react router for, um, uh, guys count on Marco
[01:09:26]  to show up. Um, react, react router for was basically re they, they decided to streamline and get rid of a lot of the clunky bits of Ember router
[01:09:39] . They got rid of like all the past stuff. They just used href. They, they smoothed it out. Um, but they also got rid of all these
[01:09:46] , like on wheel transition, all that kind of stuff. They did it a slightly different way for some of the cases, but the idea was they no longer. Uh
[01:09:53] , we're based on having all the routes fed in at the top of the app. Um, to do this hoisted data fetching. Cause the thing I didn't
[01:10:00]  mention about the Ember router there is the nested routes. Um, even though there was like this callback block problem where you, you would have like a data fetch
[01:10:10] ing waterfall. Um, they did like essentially do this, uh, it was possible to basically fetch, define all the routes in one place. And then on a route
[01:10:25]  change, you know, code split and data fetch, um, independently. So you could like fetch your data while you're fetching your code for your, for your
[01:10:33]  page and parallelize all the data fetching. So that everything would render fairly reasonably when all the code had arrived. React router for kind of like removed this. Like the
[01:10:42]  problem was there's always awkward with the pseudo async stuff. So react router for is like, no, no, just fetch inside your component. Don't care.
[01:10:49]  Um, kind of scenario. And you can just define your routes anywhere in your app and let them do really cool patterns, like recursive routes and like stuff that was a
[01:10:57]  lot harder to do with the Ember style router. But it also, um, basically was like, we're not responsible for data fetching anymore. Yeah. Yeah.
[01:11:13]  Pretty much. Right. And there, there, it was fine for the time. You have to remember this is like 2015, right? Or 16. It, no
[01:11:24]  one was caring about the size of your JavaScript or stuff. Um, but, and we didn't like, we were just starting to get ESM promises. So like this
[01:11:33]  simplification just made life so much nicer, but the problem then came in was code splitting. So if you're fetching in your components, like no one was code splitting
[01:11:43]  back then. You have to understand up until this point, no one was actually really code splitting. So when code splitting suddenly started becoming a thing where people didn't want
[01:11:50]  to send all their JavaScript down on the page because it's getting too large. Um, it was really awkward because you could do it, but then you would be loading the
[01:11:58]  code that you needed for the data. So essentially when you went to the next page, you would load the code for that page first, then run the code and then
[01:12:06]  fetch the data you needed. So you, you, it was a double cascade waterfall basically on every single navigation. Um, this is not good. And this was very
[01:12:17] , everyone loved it because they could like co-locate the fetching and react, but the performance went through the toilet basically. And honestly, this like was a
[01:12:27]  large time period when solid started coming out and I was just demolishing benchmark, not because solid render speeds necessarily. Like that was for the pure render, but like demos,
[01:12:37]  we were demolishing them because our routing data fetching, which is so much more efficient. Cause we kept with the ember like pattern of hoisting, um
[01:12:43] , which worked beautifully with code splitting. Um, so how did they solve this? They solved this through link preloading. And again, I hope you understand. I
[01:12:54] 'm trying to lay the foundation here. Still, um, link preloading meant that like, if you could hover a link state or just click, you could start loading
[01:13:03]  that code ahead of time. Um, link preload usually did not mean. Data preloading. It just meant that the code would be present. Um, and
[01:13:15]  then when you, you know, immediately went to the page, you were able to data fetch. There were some tricks for some things like where you'd like fetch the HTML
[01:13:22] . If you need like the, like hit the page outside and then like warm, maybe a server cache or something. But wiring the data back into the router was actually non
[01:13:32] -existent. It was hard to do, right? Because like, you don't know what data is going to be fetched somewhere down in a component somewhere.
[01:13:39]  Short of just running the page in the client, like in a pre pass or something. You're not going to know what data is loaded and you can't pre pass the
[01:13:47]  code until you load the code already anyways. So like, basically this is why I call it the React for, uh, React router for regression. There, there wasn
[01:13:55] 't really a great solution here. Right? Yes. And people, you know, we're doing stuff like graph QL and all that stuff. Right? So yeah
[01:14:06] , this is definitely, you can see how the API and the routing, um, stuff is kind of aligned here. Don't get me wrong. Link preloading is
[01:14:19]  good. It's just, it wasn't able to be done very efficiently. Um, but as I mentioned, everyone else didn't go through this phase. So
[01:14:30] , in fact, when promises showed up and code splitting and all these things started happening, a couple routers in the outside of the reactor ecosystem, like sappers router,
[01:14:45]  um, nux router, um, solids router. Um, combine these things quite effectively. Um, I guess it was solids app routers. The first one I
[01:14:58]  wrote and didn't basic because they kept the route definitions top level. Eventually react router six came out, which returned to this pattern. Um, and I should ask before that
[01:15:13] , actually, before reactor six, I think 10 stack location should get a shutout. Just simply because I, I'm not sure the react ecosystem would have got there
[01:15:25]  as quick if Tanner hadn't pushed them on the right path. Anyway, eventually we, the, we, the, the remix guys and the reactor router guys corrected their mistake
[01:15:39] . The thing is Ryan Florence and Michael Jackson knew this, but they kind of use their own patterns to avoid this. But I think they realized over the years that people
[01:15:48]  didn't get it and they were doing stuff terribly. So they, they changed the router to actually fit the pattern. And they basically did this while they made remix. They
[01:15:58] 're like, look, this is how you should be doing it. And they basically reversed most of the decisions they made in react router four. Okay. Okay. Okay
[01:16:05] . Okay. I think this is sort of six. What did five go? Okay. Oh, it's, it's reactor router six. My bad. Um,
[01:16:22]  this is basically, oh, it's funny. Let me get out of this. Scroll a little bit. Um, client side routing hasn't actually changed a whole ton from
[01:16:38]  this stuff. I think suspense makes it more powerful, but we'll talk about that later when I talk about some solid specific stuff. But this basically, all I'm
[01:16:48]  trying to say is again, we, we, we started like somewhere, we went somewhere kind of crazy. And then we went back to Ember, but same pattern again
[01:16:58] . Okay. Let's talk about server side rendering for a moment. Okay. Are people still with me? I know this is a lot of, a lot of stuff
[01:17:10]  before we actually, I haven't even laid out my exact problem yet, but, um, we let's do, let's do some server side routing rendering. Yeah.
[01:17:23]  Let's talk server side. I'm, I want to, I want to do this a little bit differently than what we've been talking about so far, because I
[01:17:35] , instead I want to, I want to demonstrate this in the form of an example. Okay. And good. At least, at least I know that two of you are
[01:17:48]  still here. because my, my example is pretty straightforward in that I want to pretend that there is a double waterfall scenario on, on the server. And I'm going
[01:18:11]  to, I'm going to create two lanes. So I'm going to create a render lane and I'm going to create a data, data lane. Cause I want
[01:18:16]  to talk. I think it's easier to see this next thing visually. So render lane, data lane, and then we're going to get a strict thick line like this
[01:18:32] . And actually let's make this medium. Let's make this medium. Cause server rendering in JavaScript has been kind of funny. And what I mean by that is,
[01:18:46]  um, part of the, some people will talk about like how JavaScript on the server sucks. And they're kind of right because unfortunately, um, we did kind of
[01:18:57] , kind of stupid stuff originally because it was like we're taking a client side model and took it to the server. Okay. Kind of. Okay. Um, well
[01:19:17] , hopefully that's next part is, is better. Okay. There's a question here. Uh, how running base work, does it render ahead of time and just call
[01:19:26]  react on render? Okay, cool. If we're talking about client routing still, um, the way client side routing works is it's basically a state change. Um
[01:19:37] , basically picture somewhere high up in your application, you have a ternary operator. And when the, when you, when you click a link, instead of the anchor
[01:19:52]  tag redirecting to a new page, the router provides its own anchor wrapper that intercepts that click, prevents the default action and tells the router, Hey, the state has
[01:20:05]  changed. And that state change will then trigger some ternary, some decision point higher up in the react tree or declared a tree and just swap what, what component
[01:20:19]  it is. It isn't unlike this where it will test, say the, the, the, the anchor URL that it intended. So when you clicked a link to
[01:20:30]  user one, it will go, okay, now I am changing that state. So now the current location is a new location. And for that location, you know, it
[01:20:39]  has that registry. It'll find the right component. It has to render. And, uh, when it renders that component, it just ends up getting inserted at that
[01:20:48]  point in the Dom. That's, that's the basic of it. We intercept the anchor tags and then just do a state update that swaps out part of the
[01:20:56]  view. Um, very similar to how, if you had a button that swapped part of the view, when you click on it, um, works. That's, that
[01:21:03] 's essentially it. The, the router hook-ins is that we use browser APIs. So like we say, um, push the new state on. So if someone
[01:21:13]  clicks the link, it's not just enough to update the state. We have to also say like, tell the browser that, Hey, push state this new URL. And
[01:21:23]  then the URL will also update in the browser. That way, if you refresh the page, you'll start on that new page. And if you're like have a client
[01:21:30]  rendered app, that decision points for very early on. So when you start rendering the app and you get to the, that state where, what the location is, it
[01:21:40]  reads it, you know, initially from the URL, let's say, and then it'll go, okay. I know from my lookup what component to render. And
[01:21:46]  then it renders the component. Um, does that make sense? The, the react render call is actually above it. Essentially it's, it's the routing is just
[01:21:55]  a swap inside the, like a state swap inside the application. Okay. So how does it maintain for an input field when we change the page input field state per search
[01:22:16] ? Yeah. Okay. The funny thing is, um, reacts reconciler might have something to do with it, but actually most of the time, uh, if it
[01:22:26]  can't match the element, it doesn't. Um, this is why there's nested routing. Um, I'm going to see the remix example for a bit
[01:22:33]  here, but like, this is like, see, I was showing Twitter. It means that if example.com changes, well then the whole site changes. If you
[01:22:43]  switch between sales and accounts, only this part changes. If you change between invoices and subscriptions, only this part changes. And I guess if you change between the different
[01:22:55]  invoices, only this part changes. Like when you click on these different invoices, only this part changes. So like an imp, an input inside the
[01:23:04]  change zone probably wouldn't be persisted anyways. Um, the, the, the, the JSX or like the, the diffing would have to match exactly for
[01:23:16]  it to be able to persist. So generally speaking, it isn't actually, it is just a state change. Okay. Yes. Uh, the, the, the special
[01:23:26]  anchor tag, um, wrapper is what all client side routing uses to kind of intercept. You can also intercept all route clicks and then you could make lowercase anchor work
[01:23:38]  for everything. Um, but yes, usually we use a special component for it. Okay, cool. I'm glad you you're with me. As I said, don
[01:23:50] 't feel free, feel free to, uh, feel free to ask questions like that. I'll, I'll decide if they're suitable to answer in course the stream.
[01:24:00]  But if you do have questions like this, shoot. Okay, cool. So yeah, I, I know I sometimes get ahead of myself. It's just because I
[01:24:09] 'm trying to get to the, all the way, but if we don't have the, the understanding, then we can't get there. Right. So, um,
[01:24:16]  yeah, let's, let's, let's, let's go. Um, yeah, I mean, we, we can, we can, we can, we can
[01:24:33]  make sure that. We can, we can map the URL to whatever we want. It's, it's, it's just a very, the, the URL is
[01:24:39]  the, you know, how I was saying I viewed everything as being derived. The URL is the most primary source of data in an application because the whole web, I always
[01:24:51]  say that router is like the core of any architecture, any architectural change historically that's happened in the web has been based off a routing change. But it's because the
[01:24:59]  web itself is a router. So like, there, there's nothing more fundamental to the web than the idea of, uh, like a route, like a resource, some
[01:25:07] , something that, you know, uh, yeah, basically a resource available at a certain location. Okay. So suicide rendering, um, is, how should I put
[01:25:20]  it? It's not fun. It's, it, it, it makes things a little bit, um, challenging because early frameworks didn't know what to do with it
[01:25:28]  because they're like, how the most primary question that happened right at the beginning of frameworks is how do you know when you're done rendering? Right. Right. You
[01:25:41]  have a declarative framework that lets people write code all over the place. Right. And, um, you, you basically don't know when you're done rendering because people
[01:25:52]  could inject anything anywhere down in the tree. Like if they, if they fetch something async and you get a request in and you go render the page, when is it
[01:26:01]  done? See a client is never done. So you never have to worry about this. You can assume that something async happens in the future. It'll impact some
[01:26:06]  state. Something will change later and you can, you know, always be there to anticipate it. But on server, the request has got to finish. You got to send
[01:26:14]  the HTML to the browser. So the earliest versions of, you know, the backend here all revolve around this idea of like synchronous render to string. Like you
[01:26:28]  essentially call the render and at the end of that render call, it's done all synchronously. Yes, exactly. Synchronous render to string. So how do
[01:26:37]  you handle data, uh, data fetching in this kind of model? Right. It doesn't actually make a ton of sense. And the answer to that in the earliest
[01:26:47]  days. Okay. Actually, I'm going to, I'm going to, I'm going to give myself a little bit more space here. Let's move this down a
[01:26:55]  bit. Let's make another header. Let's go. Was a technique called pre-pass. Okay. And what pre-pass would do is it would render the
[01:27:09]  app twice. It would render it once to basically, um, collect all the data. And I don't, I'm, this part isn't historical. Um, this
[01:27:19]  is just, yeah, this is server side. This is like SSR specifically I'm talking about. I'm not like there's other server technologies. I'm just talking
[01:27:26]  about JavaScript frameworks, right? SSR in JS frameworks. Like the, the, the simplest thing you can do is just like, the problem is if you want your
[01:27:38]  data fetching to be isomorphic, like you want it to be in your app. You like, you could obviously hoist it all the way up and then fetch
[01:27:45]  stuff ahead of time. But if you, if, if, if you want to write the code, the same as the client in the server, you actually have to basically
[01:27:52]  figure out what's being fetched. Yeah. And I'm going to talk about that in, in, in, in a minute. I wanted to do pre-
[01:28:03] pass first because it is, it might not have even been the first approach, but it's definitely the most primitive of approaches. Fully in react. Um, so the
[01:28:15]  reason I wanted to do, I think most SSR GraphQL clients still pre-pass. Yeah. Okay. This is good. Cause I'm going to, let
[01:28:25] 's do an example where there are two pieces of data. Okay. Um, and let's get a little bit thinner of a line. Yeah. We'll do this and
[01:28:36]  let's fill it. Data is going to use a brown background. Hopefully everyone can see that. I know it's not maybe, maybe that, yeah, that'll
[01:28:43]  emphasize it a bit more. So we're going to, we're going to make our data fetching lanes and data fetching. I'm going to put a score on
[01:28:51]  this so we can do a little bit of math. Right. But let's say data fetching costs 80. Okay. I'm going to make two of these. Um
[01:29:02] , and let's put something in here. Let's put, I want to do medium, small, 80. Oh, defer. So I want to, there we
[01:29:14]  go. Let's go back to this. Small. 80. Okay. Give it. We're, we're, we're scoring the 80. Let's pretend it's
[01:29:23]  like 80 milliseconds to our database. Okay. Right. So we're assuming that you can collect this stuff. So the way pre-pass would work is, and let
[01:29:39] 's pretend that our page has three evenly, um, scored sections. So let's, let's make, let's make, uh, some, some more squares. Let
[01:29:52] 's, we'll do them green, I guess. These ones are going to be smaller. They're going to be like 10. Beautiful. Yeah. Uh, this
[01:29:57]  is probably fine. Yeah. And these are all going to have, I probably should just put the number in before, before I copied it. Okay. Let's copy
[01:30:15]  this again. Okay. Okay. So what, what a pre-pass would do is in this scenario, because you can only render so far when you have a waterfall type
[01:30:22]  situation, like I'm going to assume in this example that the data is not actually dependent on each other, but the view is dependent on it. Right. So like
[01:30:30] , even though, let's say we're getting a user and we're getting user, uh, like some details posts about them, whatever. We can load them both
[01:30:49]  based on knowing the user ID, but because of the waterfall, um, like you, you won't show the comments until you show the user section. There's a waterfall
[01:31:01] . So what pre-pass will do is it will render. Um, yeah, I'm going to, I'm actually going to copy this whole thing so that I can
[01:31:13]  copy it for some more examples down here. Beautiful. Okay. So what pre-pass was going to do here is it's going to render 10, um, basically
[01:31:26] . And then it's going to hit that first. Um, let's pretend that like, it's, I'm trying to make this equivalent with something that would have suspense
[01:31:36]  later. Um, so that's why I said there's three sections, but let's pretend it, it's going to render 12. Actually, you know what? Let
[01:31:45] 's, I'm going to do something a little different here. I'm going to actually color code, um, each of these sections differently. Um, so that I
[01:31:54]  can actually do what I'm trying to do here, which is essentially it will render the first section, which doesn't depend on any data. It will get to the
[01:32:04] , into rendering the second section, which does depend on some data. Um, but it's only going to get to, let's change this up. Maybe let's
[01:32:17]  say 20% in like, let's say it has to do, you can't do all the work because it depends on some data that isn't there. So we're
[01:32:24]  going to do that. We're going to make it two. Then it's realizes that it's going to have to fetch. So we're going to line that up
[01:32:30]  roughly. So we're going to line that up roughly. And then when it's done fetching, it's going to render this again. It's going to be
[01:32:43]  able to render all of this. All right. See, I can't even make this big enough. And then it's going to realize it's going to start rendering
[01:32:59]  part of this. And it's going to realize that it can't render it all. It can only render two. And then it's going to fetch this. And
[01:33:15]  then it's going to finally be able to, I mean, this one's just going off the screen. I'm sorry about that. Future ones will be better. This
[01:33:30]  is, this is the worst case scenario. Uh, render this and then finish the rendering and respond. Does, does this make sense? Yeah. Well, it's
[01:33:45]  basically doesn't know what data fetching it needs to do till it hits it. So it starts rendering the first section completes it. Cause it doesn't need any thing.
[01:33:51]  Starts running the section section, which like nested section, which does actually need some data. Um, bails out before it finishes. It fetches, waits,
[01:34:00]  the full data fetch. So it can continue rendering renders the whole thing again, gets to the, that's part of that section. And then renders the whole thing
[01:34:09]  again. So short form of this is essentially two, two, two, two, two. We're going to say this one scores, what? 12. Let's
[01:34:18]  go get 80 times two. So it's 160. Plus actually, we don't care about the data. Actually we should, because it it's in line. So
[01:34:25]  this one takes what? 160. Plus. Uh, 34. Plus. 30. So was that 164? For this example. Yeah. So this is, this is
[01:34:34]  waterfall on the server. I mean, this is just very basic render to string prepass style. Um, yeah. So this is, this is waterfall on the
[01:34:46]  server. I mean, this is just very basic render to string prepass style. Um, it's not even about moving the waterfall to, I mean, yes,
[01:35:00]  you did just move the waterfall to the server. The funny thing is if you client rendered this, um, you would actually do the exact, you basically do the same
[01:35:10]  thing, except you, you wouldn't actually re-render the green part. You'd actually save 30. So client rendering for this approach would actually only cost you ironically,
[01:35:21]  um, 132, but you have the latency of going back and forth between the server. So maybe it's a wash, but this is, this is, this is
[01:35:29]  pretty fast. Does it, does this make sense? Like it has to render as far as it can hit something async, then render as far as it can again
[01:35:39] , hit something async, wait for that. And then finally finished the rendering respond. Okay. So we obviously decided that this was not a great solution. So actually I
[01:35:55]  already got one down here. Let's copy this one. Actually, before I copy it, I'm going to get our, our buddies here. So we drop one
[01:36:13]  here and drop one here. All right. Okay. Okay. Actually. I should just pull this all the way somewhere else where it's not going to impact us.
[01:36:28]  Okay. Cool. Okay. Pre-pass. And then drop one here. Let's try this again. Okay. Next time. Let's do. The. G
[01:36:43] . G. G. S. S. P. R. G. S. S. P. G. S. P. The reason I'm going to go
[01:36:58] . We're going to morph this one over time, but G. G. G. S. S. P. Didn't support nested routing, but if it did
[01:37:13] , it would be identical to what remix loaders do. Did I do the wrong math? 160 plus 60 plus 4. What? What? Or. What?
[01:37:42]  Yes. Okay. Yeah. Yeah. You're right. I'm just dumb. I don't know why I didn't. 160. It couldn't be 164.
[01:37:51]  Plus 60 plus 4. Yeah. Okay. 224. Yes. And then there's React rendering, which is a visual sensor, so we did caching anyways,
[01:38:15]  but when we could. Yeah. I missed the beginning of that, but yes. Let me. The thing is, if GSSP supported nested routing, you now
[01:38:25]  have. This lovely benefit that both of these data fetches actually happen first. And then you do this. Okay. Which is, which is not bad because now for
[01:38:42]  this one, that total time is 110. Oh, there we go. We solved the problem. Okay. Because you could basically parallelize the data fetching and do
[01:39:10]  it before any of the page rendering. the thing is, why are we still talking about that? If we did, if like, if this solved the problem, why
[01:39:20]  are we still talking about this? Well, this number up here is, is basically when, when we respond on the page, right? The, the problem with this
[01:39:41]  is it kind of locked you in because these are framework specific, non isomorphic, like, like loaders. Like they're basically, you have a different pattern for
[01:39:55]  the server and the client. You basically say the server has this data loading function and it's specific to remix or next. And this still makes you wait till the end
[01:40:07] , essentially of it. Streaming changes the math here considerably, right? Because it's very hard to stream with this sort of API, which, I mean, rem
[01:40:22] ixes added an API would defer to do it. But generally speaking, there's a lot of shortcomings here that are very, as I say, framework specific and they don
[01:40:32] 't manage streaming. Why do you care about streaming? Well, let's, let's just really quickly take this example. Take this example and add a streaming version under
[01:40:42]  it. It looks almost identical, except you can do this. Do. Because in this case, the data isn't actually, um, isn't, in this case,
[01:40:59]  the data isn't actually, uh, what's the term? Uh, a waterfall. If it was an actual waterfall streaming would be even faster. But the difference between
[01:41:09]  this is, yeah, the total time only went down now to 100. 100, but the actual hidden response time. Um, I'm going to add another little text
[01:41:27]  box here that I'm going to make large. the hidden response time here is actually 10. It's not, the client can start loading other assets when it gets a
[01:41:40]  response from the 10. Like it actually gets sent back, start sending back at 10, instead of starting to send back at 110. So like streaming, but streaming with
[01:41:56]  this was not easy. Um, I say streaming with GCP, but this is, this, this basically didn't exist. Um, in GCP. Yeah.
[01:42:06]  If the, you don't always know the title metadata of the page until you rendered two thirds of the page. Right. So this is, this is an extreme,
[01:42:21]  uh, case. Usually you'll have to wait for at least some of the data fetching. Um, I, I, I think it's an interesting trade-off
[01:42:32]  to make. Um, in the simple cases, yeah, you might not make as much benefit. It does decouple the data fetching anyways. Um, so
[01:42:40]  if you have one particular request that's slow versus other ones, you can get benefits, but you have to understand that. This is essentially. Yeah. Yeah. I'm
[01:42:54]  gonna get the whole bar in, but. Do, do, do, do, do. Okay. All right. Very good. So. I, I, the
[01:43:07] , be fair, this, this, this, this is also kind of hard to do in any system that's blocking. Like, do you understand? You can't actually
[01:43:28]  do this. Like this works with synchronous because it does pre-pass. This works with synchronous because, um, because you, you pre-pass and then you render
[01:43:41] . This doesn't work with synchronous. It has to know when it's done, like, cause it's doing everything parallel. So I said loader with streaming. This
[01:43:50]  is actually just straight up suspense, right? This is what suspense did. Streaming is an output of it. But if you, if you're not even worried about
[01:44:00]  when you actually respond, um, on the page, this is, this is actually what, what suspense did for us on the server. Um, yes, you could
[01:44:18] , um, but not, the, that update has to happen on the, um, on the client side. Yes. Uh, server coins do use HTML streaming behind the
[01:44:32]  scenes. Okay. Okay. So see, when I saw this, I got really excited, um, with suspense because it occurred to me that like, you could see
[01:44:49]  the impact of the data fetching being actually the biggest thing. thing, but like the thing that's, that's not obvious here, this, this, this drawing
[01:44:59]  for suspense is actually a little bit inaccurate because suspense actually, this is what suspense looks like with, with hoisting. Right. Right. Right. Like with the
[01:45:15]  GSP, like this is basically like using suspense with, um, say solid. It looks like this. Right. Okay. But actually it doesn't quite look like
[01:45:25]  this suspense actually, sorry, looks more like, like this because it needs to render past it until it hits that suspense boundary. And then it goes, okay, well,
[01:45:43]  I know I can flush this. And then it, you know, when it's done renders this and because this data is an actual waterfall, then it does this
[01:45:53] . If you did not hoist. Right. So this is like solid start pattern. Right. But if you did not hoist. And by hoisting, I
[01:46:05]  mean, pull it into the router. That was weird. I mean, yeah, pull into the router. If you, if you, if you didn't hoist
[01:46:26] . Like, you know, do the remix style type pattern suspense naively would. Yeah. So it's sorry. It's actually. It's. It's suspense na
[01:46:41] ively would actually look like this. Sorry. Let me see if I can do this. Could delete that for a second. I mean, technically streaming. 10 is still
[01:47:00]  kind of true. It's actually streaming 12. 12. Yeah, this is. It. This is kind of a lie because it has to run synchronously before it
[01:47:09]  realizes. So it's streaming 12. Sorry. Yeah. But a naive implementation of suspense. Actually looks slightly more like pre-pass. Because. You fetch there
[01:47:29] . You don't have to do the part that you already flushed. But you need to go here. And then you need to go. Here. This is what
[01:47:44]  would happen if you didn't fetch at the top. If you basically fetched in your components. So. This is. Yeah. What do we got here? 34 plus
[01:47:56]  160. So one. One 94. Four. Okay. So. I. I did kind of jump ahead. Um. Because I was kind of combining. Um.
[01:48:14]  Suspense with hoisting. Um. Which is like. I'm trying to think of who does this. Um. Remix. Uh. Defer. And
[01:48:25]  solid start. I think are the only two that actually do this. Um. You can achieve this other ways. Hoisting. If you use like a cache API and
[01:48:33]  call the functions yourself. But. Um. Suspense naively. Is actually 194. It's actually worse. Just doing it. Than say using GSP with
[01:48:44]  a loader. But it's better than pre-pass. Okay. Am I still making sense? What I mean? Um. I'm sorry. I know this can
[01:48:56]  sometimes be a lot. Basically. If you don't start the data fetching up front. Like you do with remix loaders. Like route based data loading solutions.
[01:49:08]  And you just put it in the component. You. You essentially risk this waterfall. Um. So to speak. React. Took this one more step further. Cause they added
[01:49:25]  async components. If you notice that this is a rerender model. Um. And solids. Server rendering is a rerender model. Which is why. With suspense
[01:49:35] . Which is why it works exactly like this. But. If you go here. Sorry. And you. If you now have async components. Instead. With suspense
[01:49:47] . Uh. Sorry. It's a little bit hard to. Just grab. Everything. There we go. If you have async components. If you have async
[01:49:57]  components. With suspense. Let's put it here. And by async components. It's reacts like new server component API. Async components. Suspense.
[01:50:12]  They can pause and resume. Where they left off. Mostly. So. Um. It. This becomes eight. And this becomes eight. Because. They don't really have
[01:50:29]  to redo work. Ironically. Reacts. Client model. Is multi render. Like. It renders over and over again. But their server model. Renders
[01:50:37]  once. Um. Because it blocks. It's blocking. Blocking. But. Uh. Solid. Our client model. Renders once. And our server model.
[01:50:48]  Um. Re-renders. But. It's. It actually has implications. On API design. Which. I'll get to in a little bit. But. Essentially
[01:50:58] . Now. It's what. 30 plus. Um. 30 plus. 160. So. Yes. It's. 190. So. If you look at this.
[01:51:10]  You can actually understand. Why. The remix guys. When talking. To. The react. Team. Like. When they're like. No. Just. You know.
[01:51:21]  Use. RSCs. Don't use. Uh. You know. Data loaders. The remix guys are like. When. I can have. A hundred.
[01:51:31]  Right. Like. Remix. When it came out. Was like this. It. They added streaming. So. They got the sync capabilities. That's solid. And
[01:51:42] . They got. To. To this. Right. Why the hell. Would they want to go back. To this. Well. There's one. There's probably
[01:51:55]  one more way. To make. This. More optimal. Which is. Hoist. Hoist. The data loading. Like. Use a cache. API. And
[01:52:06]  fetch it. Top level. Um. You have to do this manually. Um. And if you did that. In theory. You would be able to do. Um.
[01:52:16]  You have to do this manually. Um. And if you did that. In theory. You would be able to do. Um. And if you did that. In theory
[01:52:25] . You would be able to do. Well. This would just become ten. Wouldn't it? You would be able to do this. Alright. So. Ninety
[01:52:33] -eight. So. This. Seems. Like. The optimal. You would be able to do. Well. This would just become ten. Wouldn't it? Be able
[01:52:43]  to do this. Alright. So. Ninety-eight. So. This. Seems. Like. The optimal. So. This. Seems. Like. The optimal
[01:52:57] . Solution. Right? Um. But. It. It. It. It. It has. Impacts. On API. Because. Now. Your. Like.
[01:53:09]  Components. Can be async. And. React. For example. Does not. Allow. Async. Components. In. The browser. Because. It
[01:53:20] . It's. It's. Over and over again. So. Like. This isn't. Isomorphic. It's not. Framework specific. But. It
[01:53:31] 's not really. Isomorphic. Svelte. I don't. Know. If. They've. Added. Streaming. Support. But. S
[01:53:42] velte. Essentially. Works. The same. As. Us. And. I don't. They don't. They don't. Have suspense. So. They
[01:53:54] . They. They might. Actually. Erase. This. Two. So. To speak. Cause. They. Like. You. Might. Actually. The. I
[01:54:08]  don't. Know. If. I haven't. Seen. So. I don't know. If. If. They. That. They. Get. Similar
[01:54:21] . Kind of. Performance. Here. For this. Piece. See. The. Part of. The reason. That. I. Didn't care. About the. R
[01:54:34] ender. Model. Was. First of all. At the time. I created it. Everyone was doing this. Right. And. Then. I did some. Measurement
[01:54:46] . Of solids. So. Under that. Scope. It. Like. The number. Like. If this. Is. A solid. Solution. Even.
[01:54:59]  With. The. Render. And. Suspense. In this. Scenario. Is. Is. Is. 1.2. If. We. Div
[01:55:10] ide. By. 10. Plus. Which. So. We'd. Be. Streaming. After. 1.2. Let's say. And then. Our.
[01:55:19]  Total. Time. Would be. 82. So. Like. To get that like. Extra two points. Was less significant. Than the increase in rendering speed. Due
[01:55:31]  to solids performance. If that makes sense. So. Yeah. Like. This. This. Is. Pretending all things are equal. But if they weren't.
[01:55:42]  Like. Equal. You know. Like. If. A framework. Could. Render. 10 times. Faster. Then. Yeah. We. We'd be in
[01:55:54]  a slightly different. State. Like. This is still the bottleneck. For most systems. If. This was not. The. The bottleneck. If this was
[01:56:03]  not. The bottleneck. If this was smaller. Um. This. Impacted difference. Would be significant. But the one thing that's clear is. Prepass.
[01:56:12]  Sucks. And. GSP. Doesn't give you any control. Over. When it gets flushed. So it's much later than the others. In terms of
[01:56:20]  loading resources. And. Async components are. Kind of proprietary. Right now. They're not proprietary. But they're kind of limiting. Because they're not. They
[01:56:29] 're kind of not isomorphic. In the current state of things. So. Where I'm sitting. Kind of thinking through this. Is. Suspense with
[01:56:39]  hoisting. Is okay. That. That's where. Like. As I said. Our score here would be. 82. Which is faster. Than any of the
[01:56:49]  react examples. Okay. If. Sorry. The. The. Stream yards. Bugging out on me again. Where it's not showing the comments. In the right
[01:56:58]  time. Um. If. Sorry. The. Stream yards. Bugging out on me again. Where it's not showing the comments. In the right time.
[01:57:06]  Um. If you load all the data. At the top level component. Even if you don't use it. Until down the tree. Can you not stream anything
[01:57:12] . No. You. You. You can't. Well. It depends on what. The framework is. The framework has to know. What sections of the view.
[01:57:21]  It's like an onion. Without a border. Streaming. It has to like. Break the component. It's like the remix sections. Almost. Where you like.
[01:57:29]  The nested routing sections. It doesn't have to align with the router. But. It has to be able to run in sections. And it's like. It can
[01:57:34]  go so far. And stream the shell. And then it inserts. The pieces. And then it's like. It can go so far. And stream the shell. And
[01:57:41]  then it inserts. The pieces in. As they finish. It kind of goes. Outside in. Based on suspense boundaries. So. If. You have suspense. And
[01:57:52]  you. Hoist the data fetching. Then you can stream. Svelte has an await tag. Which is kind of like suspense. So I suspect. That they
[01:58:01]  can do it. I just haven't seen it. Okay. All right. Any other questions along these lines. I just want to kind of lay this out. You
[01:58:12]  can see that. Async components might. In theory. Be the. The fastest approach. But there's. Big trade-offs here. That come from them. Being
[01:58:20]  blocking. And. The API. Like the. The mental model. Not matching with the client side. Mental model. That's. It works fine. For server components.
[01:58:30]  Because. They have no client side. Mental model. It's not. Isomorphic. It's like. Not a universal solution. Is there any. Fundamental
[01:58:47]  reason. Why react. Can't surrender times it faster. Than today. Um. Most of it is. Is that they don't use strings. They make a V
[01:58:54]  DOM. On the server. And. Again. It's. Also important. For the serialization. For. For. Server components. Svelte. And.
[01:59:05]  View. All. Use strings. We just. Concat strings. Nothing's faster. Than just. Concatting strings. And. Nowadays. I think. Solid.
[01:59:17]  And. Svelte. Serendering. Are. Pretty close. And views about. Half the speed of us. But for the longest time. And that's because
[01:59:26] . Svelte. Implemented some of the same. Optimizations. That solid. There was a big PR. That was open for like. Two years.
[01:59:32]  Yeah. I think. Views. Three times slower. And Svelte. Two times slower. But. Like. They. They. They used to be like.
[01:59:43]  Six times. Slower. As well. So. Mostly. It's. It's. Memory management. On the server. Memory is actually. Your enemy. In terms
[01:59:54]  of performance. Benefits. We don't run reactivity. On the server. Which is going to be important. When talking about. Where I'm getting. Because
[02:00:01] . Reactivity. On the server. Is. More expensive. Maybe. Than even the VDOM. On the server. Hard to say. But like. The memory
[02:00:08]  overhead. Is. Significant. Solid. Does. Uses. It's. It's. It's. I think. It's. It's. if
[02:00:19]  we just used reactivity as normal, it would be much slower, maybe like close to as slow as react is. Um, so memory is a big part of it.
[02:00:29]  Does million help with server rendering? I don't know. You're gonna have to ask Aiden. I don't think so. I think, I mean, it depends
[02:00:39]  on what the reconciliation, maybe he can make a server rendering reconciler, but no, but like if he improves the equivalent for million on the server would be improving
[02:00:49] . No, it'd be like removing the JSX and changing it to a string output. I think that would be, but that could still be consumed by other JSX
[02:01:00]  components. I don't know how that would work to be fair. Um, but, uh, the biggest optimization that Aiden does is he takes our template cloning mechanism
[02:01:10]  that we do in solid so that like the static parts can be optimally created. And then he only updates the holes. Whereas on the server, we don't even
[02:01:18]  build that structure in the first place. We just can go string, string, string, string, string, plus, plus, plus, plus, you know? Oh,
[02:01:25]  sorry. Um, yeah, you're, you're right. Uh, I should change this. It's with, um, hoisting. It's like,
[02:01:41]  if you call the, the functions up front, um, yourself manually because, or if you have an API that does it, but just like next doesn't next has a
[02:01:54]  mat. You can use the cache of the manual mechanism, but next router doesn't have like a data loader. So he can't do this yourself. If you manually
[02:02:02]  do this, this is your result. Like if you go and figure out if you kind of bring it up to the router level, then, um, you can get
[02:02:09]  this. Whereas this is what naive async components work. If you just go, I have suspense and server components, I can just fetch data anywhere and not care. I
[02:02:18]  was just, there, there was this time period where the react, everyone around next kind of ecosystem was like, Oh yeah, some waterfalls are good waterfalls. And
[02:02:27]  it's like, no, like, look at this. Waterfalls are not good. Like yeah, but I mean, VDOM is VDOM, right
[02:02:49] ? Uh, like million would like have to not use a VDOM yet somehow have their stuff insert into the reacts VDOM and still work. Like if,
[02:02:59]  if, if they had a representation that could still work in react, like, I think it's possible if the, like, if the, like, it's, yeah
[02:03:08] , yeah, yeah, yeah. This is the difference between loading the data inside and outside the component. Exactly. So, yeah, it's funny. This, I,
[02:03:22]  I'm, I'm getting there. I know we're two hours in and you're probably like, what? He hasn't even talked about it. Okay. So
[02:03:30]  this is actually it for the historical background here. I just wanted to kind of put this in place. put this in place. Because I wanted to get to the point
[02:03:39]  where I was mentioning, I'm, I was very proud of what we did with solid. And the reason is we did this. We have data loaders, which
[02:03:55] , sorry, we did this. We have data loaders, which automatically hoisted it up. And this is the same pattern of hoisting. That's beneficial on
[02:04:04]  the client. Because here's the thing. And even if you pretend like this is okay on the server, because it's, you know, short on the client,
[02:04:12]  this would never work because you want to fetch. You don't want to do have the code splitting waterfall. You want to fetch when you grab the code. You don't
[02:04:21]  want to wait for the code. To come in. I did. Yeah, like this would be even more exaggerated waterfall if it's on the client. So,
[02:04:31]  while you could say that this is good enough, you could never say that's the case on the client. So, there's some tension here. So, I was very
[02:04:44]  happy that with solid's implementation, we did this. And it works the same way on the client and the server. So, the reason is we don't have data
[02:04:54]  loaders. We just have the router call a, like a route data function on the client and the server, both sides. And then instead of that being like an as
[02:05:06] ync function, like GSP, you can put in any reactive data fetching thing you want, like resources. And the reason this is so powerful is, um,
[02:05:17]  let me see, see if I can find, I might, I told you I wasn't prepped for this, but essentially you could stick, if you watch my V
[02:05:27] Conf last year at all, like you can stick TanStack router right inside solid's, uh, data. Let me, let me go. Solid, solid router.
[02:05:35]  Let's go here. Like, okay. Let me, let me pull this out. Do, do, do, do, do, do. And I want data
[02:05:44] , data functions. You could just go inside a data function that you, a thing here, and you can return as many of these resources or TanStack queries or whatever
[02:05:58]  the hell you want. And on the server, as long as they built with a resource under the hood, they're going to track, handle suspense automatically. Do streaming
[02:06:07]  data serialization. It all happens automatically. And then it's the exact same pattern on the client. It's hoisted above works with code splitting, and then it can
[02:06:16]  be invalidated argument by argument. Like if a query parameter changes, it can just update one piece up and fetch one piece of data that's needed without reloading the whole
[02:06:26]  thing. It's fine grained, hyper optimal, completely extensible, and works the same in the client and the server. And yeah, I mean, I'm
[02:06:36]  still proud of this one. You can tell, like, I don't think any framework has a data loading story as good as us because of that. Like where third party
[02:06:46]  works like first party, where you have complete fine grained control over every update, right down to like, you, you can, you can do, you know, resource
[02:06:57]  for the store. You can fetch in some data here. You can have one field from the database update, one field in the UI without reloading, rerendering.
[02:07:03]  There's basically nothing more optimal or extensible. And it's not specific to solid start. It works in any app that uses this router. Works, you know,
[02:07:19]  client only server only. It even works in our islands demo mode. Like this automatically handles all the data for you. Serialization. You don't have to worry about
[02:07:28]  like where to write it. Like, you don't have to like, you know, sometimes use frameworks with like, you know, You know, sometimes use frameworks with
[02:07:32]  like GSP so that they know where to serialize the stuff into the DOM. Like this just automatically works with all your libraries. So why am I here? If
[02:07:39]  I've already, you know, through solid created the best data loading pattern in all frameworks. Yeah. I have a whole talk about suspense and stuff. Um, uh,
[02:07:39]  uh, that's probably maybe worth checking out where I give some examples to show how powerful these primitives are. Um, let me see if I can find the talk.
[02:07:40]  Why all the suspense future front ends. This one. Yeah. Yeah. Yeah. Yeah. Yeah. Let's just drop this in here. Yeah. Yeah
[02:07:51] . Yeah. Yeah. Yeah. that's probably maybe worth checking out where I give some examples to show how powerful these primitives are. Let me see if
[02:08:04]  I can find the talk. Why all the suspense, future friend ends, this one. Yeah, let's just drop this in here. Well, yeah. Why am
[02:08:17]  I still here is because there's a problem. Server components don't work with this model. They work at first, like our islands routing demo. You'll see server
[02:08:37]  component like demos that work like this out there, like our movies demo. But this kind of brings me to my article this week that I wanted to talk a little bit about
[02:08:52] . Let me go to my profile and pull it up. Did anyone get a chance to read this article just out of curiosity? I'm honestly just testing if chat
[02:09:11] 's still alive. The stream counts down a little bit. I know it's getting late for some of you. I also know that this is pretty heavy content. This article
[02:09:25]  did not get picked up by Google, so it does not have the great numbers. But it's probably it's a pretty relevant article. So I'm going to talk
[02:09:34]  a little bit about it because the gist of this article talks about obviously the three technologies of violence, server components, and resumability. But more so, it talks
[02:09:49]  about what it means to be interactive, which I think is a good point in its own. But it's kind of outside of what we're talking about today. The
[02:09:58]  interaction argument is the fact that, like, what people think means interactive means different things. And not all these things are equal. It's mostly my counter argument against resum
[02:10:14] ability on the interactivity side, because a lot of solutions are interactive by that definition. But what I want to talk about is primarily Oh, yeah, did I not
[02:10:30] ? I didn't drop the link in here. Silly me. How can I? How can we talk about it? And I not drop the link? Okay.
[02:10:40]  And I should thank some people if they're still here. Mitchell Stoon subscribed to tier one. It's nice to get subs. Also remember to like the YouTube stream.
[02:10:53]  It'll help me later. Okay. So I'm going to assume a lot and assume that people are somewhat familiar with islands. Tell me if I'm off base here
[02:11:12] . I've talked about some of the content of this article on the stream before, but I never want to make this assumption for people. The huge thing with islands is
[02:11:13]  the stuff outside the islands doesn't need to come to the client. And this has two huge impacts. First, the non interactive parts of the page don't get need to
[02:11:21]  ship. These are real numbers from an internal don't get any shipped these are real numbers from an internal um audit by the ebay team back in about 2018 um they
[02:11:46]  told me afterwards that this wasn't supposed to actually go out but we'd already published it in a few places so i don't i don't i don't care anymore but
[02:11:58]  you know the the results were significant right like they they basically like to keep in mind marco's always islands but they basically turned it off and then something like it was
[02:12:14]  like you know like huge savings also your home page for ebay ever been to ebay.com i mean there's ads and stuff they're talking about the core ebay
[02:12:24]  experience the home page for ebay.com is not the most interactive thing it's a bunch of links to other products these things kind of show in there's these ad
[02:12:32]  widgets but these don't load until afterwards generally lazy the main content for the home page is is just a bunch of product listings with not not much interactivity just click to go
[02:12:42]  to the next link so you can understand how i'm almost completely static page other than the global header the header is probably the most you know expensive part on this page but like
[02:12:51]  you can you can kind of see that like yeah there's a reason why the javascript interacting went down search a little bit more interactive view item where you actually do
[02:13:04]  purchases yeah i mean that's that's got more javascript right there's a whole bidding system on there you know all that stuff so like you can see that the mileage
[02:13:14]  will vary on on the on the reduction due to islands right how is solid and solid star sorry just quick question came in here god there we go um i actually talked about
[02:13:35]  this last week um towards the end of the stream uh in terms of uh development i i actually released an announcement on the github uh talking about the next stage of
[02:13:49]  solid starts beta um let me i just i know this is a little bit off topic i just wanted to where is it yeah it's just gonna post this for people just in
[02:14:07]  case i know a little off topic but let's just okay a lot of work's been going on i'll talk about it a lot more next week with uh nikil
[02:14:27]  all right thought you understood islands but how would this affect gsis well let me see if i can find uh uh jason miller's original article because he's got
[02:14:47]  a nice picture in here from for everyone the reason is on a normal like this is big islands people don't understand you can use small islands but even so like on a on
[02:15:00]  a large page where there's a lot of static content from the server that doesn't really update just like links and stuff you don't like in a react app you would
[02:15:09]  literally render the whole page solid app even you'd render this whole page on the server and then hydrate this whole page with islands you can skip sending the javascript for
[02:15:18]  all these white things that that's basically the gist of it yeah i mean i can share this link for people who haven't read the original um post from jason
[02:15:41]  miller um but like the difference between islands and like the old put the web page on the laravel back end is that the server server render and hydrate so
[02:15:54]  you don't get like the pieces flashing in it looks like a consistent server rendered page and then only need to hydrate the pieces you want so this reduces js size it reduces
[02:16:04]  execution all together um yeah it's it's it can be significant okay stream yard is like dying on me terribly okay so back to where i was was which was not
[02:16:33]  the ebay home page although that's a great example is they also have a second huge impact which is that they shrink the hml document size because it reduced the amount of
[02:16:45]  data needed to be serialized um basically if you've ever seen the ssr page because it needs to hydrate it needs like it needs the data you fetched on
[02:16:54]  the server to get there like if you client rendered you are and client fetched you'd have all that data you grab in the in the client afterwards and get it as
[02:17:02]  an api but that would like slow down you you know the whole page loading server you've already fetched that data but you need to get it into the page so um
[02:17:12]  we obviously i took my hacker news demo took solid um spa ssr version took the islands version of a comment page with like three or 400 comments it's not the
[02:17:25]  biggest page but just to give you an idea the page size double like was half the size with islands because like the json it's funny i was trying to make a picture
[02:17:35]  in in the article and i was like okay well this shouldn't be hard i'll just do like hacker news ryan solid workers dab okay that's sweet i'll find one
[02:17:42]  with like a lot of comments and then you know i'll just go in here and i'll refresh the page and then i'll like look here and you know kind of
[02:17:50]  take a screenshot you know if i zoom way out i should be able to take a screenshot and the truth of the matter is um okay this one isn't bad most of
[02:18:03]  the time this stuff is so long like this is too long because it's spread out but most of the views like if you go in the elements and stuff and look at the
[02:18:11]  script tag here where they're truncated i couldn't find and like i was trying to find versions that weren't truncated and where i could put the
[02:18:20]  islands version and the non-islands version side by side so you could see and the problem is i would have to shrink it so much to fit in the image size
[02:18:30]  like on my screen so i could take a screenshot that like you couldn't even read the data difference anymore even with a couple hundred comments like this one's got 132 comments
[02:18:41]  um but if i took the same story and went to solid hn islands which is like our server component version i went to you know this one and we and we look
[02:18:50]  for our same json blob here you'll see it's this big it's it's this it's just like an island map register there's like literally no um like the
[02:18:58]  blob is much much much much smaller um so this is the double data problem essentially it's like when you have a spa and i've showed this on stream before if if
[02:19:14]  if you look for any specific piece of data like you can go like i remember specific file there we go and you go into the network and you go into this and you and
[02:19:24]  you search and you go i remember specific file it's going to show up twice you're going to see it in the html and you're going to see it in
[02:19:31]  this json blob that you put on the end of the page so islands solve this problem all right okay let's see so our stream art is is going so slow that
[02:20:04]  it's hard for me to to like tell if my stuff registers um i'm going to do a quick refresh of my page and remember to add myself back in again just
[02:20:27]  give me a moment okay okay let me share my screen again yes so this is what i have a question i was could you automatically detect if a component can change j
[02:21:07] avascript so you can only optimize to be or not an island component well that's actually what marco does um marco has been kind of the original island framework did does
[02:21:17]  it by auto detection they've been doing it that way for about 10 years um most others don't especially in a post hooks age because it's not it's not just j
[02:21:26] avascript because like our frameworks are completely javascript like you have to determine if it's stateful javascript in marco's case they had class components so
[02:21:35]  they can go like oh if it has a class then it's stateful um and then it's a little more complicated because they have to consider all like state full components underneath
[02:21:45]  like it are non-stateful components underneath it are also stateful components so it's it's it's like a the the once you hit an island anything you import
[02:21:57]  into an island it also becomes part of that island so it's like a graph consideration so you can do this at a bundler compiler time but yeah you need to know it
[02:22:05]  it's it's basically where the state is um it's a lot obviously simpler like this is something i still consider about at times but it's a lot simpler just to
[02:22:16]  market because like the heuristics are imperfect because like what makes something stateful it has a function call in it like like if your components are a function like there's j
[02:22:26] avascript so it's like you have to decide what makes it stateful okay so the problem is that router data function doesn't need to fetch data for islands they need
[02:22:41]  some no uh this actually works fine like you can fetch the data and pass it like if you have the same framework or even with astro like you can fetch the data above
[02:22:50]  and then pass it into the into the components and then only the the props that that like have to be serialized so like the reason this hacker news demo on the comment page
[02:23:02]  is so small is because there's no state being passed in this is all server rendered and then this toggle which is interactive just is server projected code into the toggle switch so
[02:23:11]  no props get passed through because you never need to hydrate anything that actually has static text the only interactive part of the page is a is a toggle show hide wrapper so the
[02:23:21]  problem i'm almost there it's not actually with islands it's with the next step okay so anyway uh just this is this is this makes this can make a significant difference
[02:23:48]  is all that i'm trying to say it's like if you notice even when i was loading the page for this example it took half this the data serialization savings actually improved
[02:23:58]  the time for the document to show up um even though this one has streaming by the time like it finished you know i think i think the islands demo has i think they
[02:24:08]  both have streaming anyways like this time is the total time like for the stream to finish anyways um the the reason this works and i mentioned here is like this it's this example
[02:24:21]  right toggle visible island this stuff that you pass through so like if it if you can pretend this is the comments component that's on the server it gets the comments and then
[02:24:32]  it draw it wraps them in a visibility toggle and passes through the comment title and description as this prop but this is still server rendered essentially between the server and client boundaries this ends
[02:24:46]  up still being a server rendered so it sends like the html through and server components work the same way too except it's their jsx format but this gets server
[02:24:57]  rendered so you render this stuff once on the server you don't need comment dot title or comment dot description to make this island work so you drastically can save on data serialization
[02:25:09]  costs because you only need to send the template through this only works though is if you only if you can handle visibility properly like if it's showing don't double serialize
[02:25:22]  otherwise you get double data again like if if it's visible you don't want to also send it through as a prop um if it's not visible like so you like what
[02:25:31]  astro does is they actually render the invisible slots as they call them into templates and the visible ones get rendered in place and that way they can reverse engineer basically like grab
[02:25:46]  the rendered ones back into the props like consume them and grab the templates and consume those into the island and then the island can control it's not possible inserting and removing it
[02:25:59]  but they only sent it either as visible or not visible not both they basically check if it was rendered and if the slot was never rendered they they render it in as a template
[02:26:09]  if it was rendered they don't render it a second time but this is actually complicated react doesn't bother doing that they actually send everything twice which is why even with react server
[02:26:19]  components the data is huge um but server component architecture is very very very similar to islands except it adds client-side routing okay okay so i this whole section here i
[02:26:51]  talk about i mean i mean let's just skip the thinking the question here is look if if we have islands can't we just you know add like a turbo like ht
[02:27:03] ml swap maybe even make it nested like we did with uh solid and then you know basically just like do do persistence the same way you know astro did that we showed
[02:27:14]  on the stream and that's actually exactly what we did when we created our server component solution for solid we basically swapped in the html uh found anything that had the
[02:27:26]  same island id you know and then just swapped it and it kind of worked we lost things like input focus because when we swapped the page and like it had the same like island
[02:27:40]  that was persisted because it was removed and then added again we kind of faked it by like always looking for things like focus before we did the swap and then tried
[02:27:50]  to you know our best to resume it eventually we just moved to html diffing using the same library uh that astro uses for hmr um from nate
[02:27:58]  more where we diffed the html and that way we didn't uninsert it ever and in so we actually were able to persist the state a little bit more
[02:28:06]  expensive but it worked but barely it was like a kilobyte javascript cost so again didn't matter right like the impact here is significant right if you've seen
[02:28:15]  the movies demo i think i've shown it before like the solid version is 13 kilobytes and the next js version is 190 kilobytes like the savings here and
[02:28:25]  that's even with island or with server components like the savings here are are real but the problem is what i showed on the island with the astro stream a little while ago
[02:28:38]  it's that global state it is problematic because if you have some global state in the client that impacts the rendering of a future component forgettable persistence for a second pretend you
[02:28:54] 're just going to another page that depends on that same global state the server does not know that you've updated the client state so when you go render the next page the server
[02:29:04]  is going to see the initial value of that client state and essentially render the wrong thing and then when it goes to like hydrate in the in the client it's going to
[02:29:12]  fail because the data doesn't match so like i have the silly example here was like count is bigger than five show one component versus show another component in some island if you
[02:29:22]  had this thing i'm using context here it could be any global state it you have this problem where if you switch um you know like go up to seven in the browser then
[02:29:37]  go to a new page and this component shows up it's on the server it's going to go oh i'm not bigger than five i'm going to show some other
[02:29:46]  component but then when it gets the client it goes to hydrate it's going to see that global states at seven and think that it has to hydrate some components that have
[02:29:54]  some other component and this problem isn't limited to just routing it's like limited to any lazy insertion of hydratable content like if you started with an island not showing
[02:30:07]  like like with like some server content not showing and then you update the state without initializing it then you inject it and hydrate for the first time it's going to
[02:30:16]  break hydration yeah i i don't want to completely like rehash the the astro stream where i kind of worked through this but i i want to understand is the the takeaway
[02:30:32]  from all this was that i realized and i think other people realized too is that you can't render client components on the server after the initial render it just doesn't work
[02:30:43]  if you assume that global stake it only applies to client components you can keep on rendering the server components but you can't render the client components after the initial render you can do
[02:30:53]  the first time you can render them but every other time when you navigate to a new page you send the server portions and then the client will client render the the islands instead of
[02:31:03]  server rendering the islands on all future swap navigations that is the secret that avoids you having to serialize all the data back and forth which is a nightmare and you
[02:31:12]  don't want to do that either which gets me to the actual problem hopefully people are still with me two and a a half hours later server components can't have context like
[02:31:26]  the server rendering like they could have their own context but they can't share context with the client so this makes things very awkward because basically like even even how should i put it
[02:31:45]  let's pretend you do something smart like you nested routing like my remix you could in theory just only render on the server the part of the page that like the partial
[02:31:55]  you don't need to render the whole page you could just render the part that's changed right like picture i'm going to go back to the remix home page because in solid
[02:32:04]  start we actually only send that little piece we do more rendering today than we should but like i'm pretty sure next does this if you're on this page and you click
[02:32:15]  over to customers here you don't need to send this again you only need to send this so you can actually reduce the server rendering on the rs like the rscs
[02:32:26]  um but the problem then is you can't have server context because if you had like something wrapping the whole app on the server like between requests you don't get to persist
[02:32:36]  the server context right so it doesn't exist when you get here like if you don't run through here it doesn't if you don't run the whole thing it doesn't
[02:32:46]  persist and you can't i just explained why you can't have client context on the server after the initial render because you're not going to send all that data back the
[02:32:56]  only way you could possibly have server context is after the first render send it to the client and then send it back to the server on the next navigation um like basically you're
[02:33:06]  in these kind of zones where you're serializing a bunch of data back and forth this is not a pattern you want to depend on and if we weren't there we would
[02:33:14]  be just going back to how things were in the mid-2000s with update panels and dotnet so we need a different solution for a server that doesn't involve context
[02:33:25]  okay but you start seeing why this is a problem because let's look well let's just look at solids router for example how many of these things use context um let's let
[02:33:45] 's i mean let's just look at look at this um okay routes that's fine that's fine route route route okay nothing too weird so far let's get into dynamic
[02:34:01]  routes okay that's fine i i want to try and find like okay create resource that's fine okay first one first one use route data all things use context right you use
[02:34:23]  route data is is is is an example of where you're using context yeah i mean to be fair server functions are are are um are related to this problem but they don
[02:34:46] 't yeah like it's more than just explicit apis i i'll show this a minute i i should have mentioned server functions earlier when i was talking about how great solid solution
[02:34:58]  was i i didn't even include server functions as part of that solution because i mean that's the real cream of the crop when you grab that tan stack query query thing
[02:35:07]  you stick it in a route data it works isomorphically it streams and you fetched directly from the database inside your tan stack uh query call and it all just works that
[02:35:19]  i missed that part i was saying i was explaining why our pattern was really good it's even better than i was saying earlier anyways sorry um my but yeah use route data that
[02:35:28] 's one place we use context let me show you another place we use context outlet how does outlet know like what to insert here it has to use the router's context use
[02:35:40]  layout use i i mean i basically every freaking api use location um use navigate um use search parameters you uses routing uh use match you can tell because in solid most of
[02:35:58]  our primitives are create because they build something we only use use when we're something's based on context for the most part um like something exists but my key point is basically
[02:36:12]  every api in a router uses context right so this is tricky because i mean you can do some things right you can use props dot children instead of outlet you can pass
[02:36:42]  the parameters into the page components instead of using used location you can just just go like props dot location and props dot prams so they're suddenly not available everywhere but you
[02:36:54]  can pass them in to the components and you can use raw anchors yeah um we the raw anchor is something that i keep on going back and forth we we went to
[02:37:20]  big anchors but we technically could go back to raw anchors um and have it work the same way because the way we bubble stuff up i just i thought i wanted to
[02:37:29]  make it explicit but anyway anyways just this is a problem because while most of the route apis could be passed in at the page level and then like if an island needs
[02:37:47]  them an island could like you could add your own context providers like you can make it a context island right so like you could take the page information stick it into a context
[02:37:57]  provider inside a route section and then the rest of the islands would be able to access it right doesn't seem terribly bad you could like you could basically even top level maybe pass
[02:38:09]  the the like router provider to the client so the client could in the islands make use of the context api to get this stuff but as i said as a primary universal
[02:38:22]  api context can't be depended on so the biggest problem here is use route data or use loader or whatever in these frameworks because that one actually you know you
[02:38:46]  want to push the data through and i think this has been kind of like one of those those things where like you could also pass the data straight through as a as a prop
[02:39:00]  but i the the the loader pattern in general um it how should i put this the challenge i've been looking at here is that like if we're getting to a
[02:39:17]  point where we're basically discouraging um you know context and um hoisting up the data what other option is there something that we can do so that we don't have
[02:39:33]  to prop drill through the whole application and the the thing is react's already been here because they already knew this was the problem so they they've been looking at um cache ap
[02:39:51] is but as i as i said previously you don't really want um you don't really want to end up in where is it suspense async yeah you don't end
[02:40:09]  up in this async suspense 190 case right you want to still end up in this case so i'm kind of toying with this idea that what would it look like
[02:40:24]  to use a cache like api essentially is is where i where where my thinking and thinking is because what what i mean by that is if you ever use react query if
[02:40:39]  you make the same query lower down in the tree the next does that for fetch themselves like in react was doing it for fetch itself but there's like what if you hit
[02:41:01]  a database that doesn't work you need actually an api that works um for any potential promise data loading function at the same time we've been getting a lot of criticism
[02:41:18]  on solid of having crate resource being like this super vehicle that just does too much so this is what where i'm kind of getting to right now and where my thinking is
[02:41:32]  and where i've been trying to kind of like work through this problem is hypothetically what if instead of loaders we had preloaders right this this this this is
[02:41:49]  this is sort of where my thinking is at if you the if you saw um did i close not where's the router did i close the router i did not close the router
[02:42:03]  good if you saw my my my data function example this is fine but like you're in this pattern where you're trying to pass reactive resources through it's too much if
[02:42:20]  you could instead of using context if instead there was an option instead of data to preload that see one of the things solids router doesn't have preloading right now
[02:42:33]  because it's kind of awkward to like recreate these primitives and there's like no guarantee that these primitives have caching solids resource doesn't have caching if you call
[02:42:44]  it again like no one's saving it so like if you use a caching solution and you have preload api yeah maybe that works but it doesn't make sense when
[02:42:54]  i add it to the router because there's no guaranteeing that it even works you'd have to also use a primitive that has caching and it's like overloading
[02:43:03]  this data idea but if instead the preload function was designed to run over and over again it didn't actually create resources it just warmed a cache and was completely optional that changes
[02:43:15]  things a bit right because then you could basically have a fetch api or if not fetch like a cache api and basically anything you need to hoist you you could
[02:43:27]  basically call based on the router the route information once where you can preload it and then again down the tree you could there create the resource that you actually use downside of that
[02:43:42]  obviously is you're like fetching it in two places essentially like you have to treat caching as an optimization step but it's the tricky part is there's no context
[02:43:51]  so this is kind of like it's this is what the react solution is but it kind of leaves you in a weird place like okay let's look let's look at
[02:44:01]  next js i i saw something next cache like let me see if i can find it react react shipped this interesting cache function i don't know if people have seen this this is
[02:44:21]  this is actually pretty cool where you can wrap any function it's basically a memo function as base you can wrap any function you know in this cache and then as every anytime
[02:44:33]  you call it during the same request with the same arguments it just returns the previous results so you end up with getting the same promise so like at its base like they use this
[02:44:45]  because they what the idea is you wrap your api rather than than wrap where you use in the components and then in the components you will you would just call get item
[02:44:59]  and then they had a note that they're like oh you should also you know call get item if you want to preload it that that was basically like the idea so basically
[02:45:10]  you you basically implement in two places it's not it's less than ideal but this is this is an example of how you can isolate it because the the problem is with
[02:45:21]  it pretend you have a nested router like this right and everything like this is a good example because it's like unrelated records but if you had twitter okay and when i'm
[02:45:35]  on my profile yes this loads my profile data but presumably down here we also need my profile data as well even though this is a separate route section so if i just swap
[02:45:49]  this section and only render this section i still need the route data that i would have got for this section now if i'm rendering the whole page i don't want to
[02:46:04]  fetch it here and fetch it here and the pattern currently in solid is well you can just pass it down using the data functions and then you can like chain it off it and
[02:46:14]  go okay i have this data you know as well but without context you can't do that so you actually start authoring your route sections so they fetch all the data they
[02:46:25]  that they need as essentially so you will fetch the same thing here and fetch it again here and the cache will account for it that's that's basically the design that's
[02:46:40]  basically what's the best way of passing data from islands to outside of them for example to the server you can't right that's the whole like you can do a mutation but
[02:47:02]  you have to understand if you pass something from an island to the server then it would have to go over a network boundary so like from this is why there's the rules
[02:47:12]  where you can you can't import server components inside a client component and it's the same for astro or any islands thing it's like the these you need to be if
[02:47:22]  you're going to go back to the server you have to ensure that you go back to the server in a single round trip like you don't want to be like doing this
[02:47:28]  weird like server to client to server to client like waterfall game so usually it involves some kind of mutation or navigation which tells the server to re-render from a certain portion
[02:47:40]  of the page and then obviously we can persist the islands in between if we can but essentially like you're you're asking for as a chunk of the page back that's
[02:47:52]  kind of the model here so this kind of ensures that um like you only do a single you only go to the server once for the whole thing yeah like yeah it's
[02:48:09]  a reload or a partial reload yeah but like there's a reason why the react team's giving people a hard time about this mentality as i said if people start doing stuff this
[02:48:24]  way i don't call it islands anymore i call it lakes and it's like the backwards um approach it's kind of interesting because nuxt said oh yeah we have server components
[02:48:33]  but their implementation was basically a lakes uh implementation which is cool but also kind of like it's not like it doesn't give you the benefits lakes don't help you with
[02:48:43]  the serialization double data problem because you can't know like once you're in a zone where you're importing certain components into into the client components you can't know that you
[02:48:52]  don't need it for hydration okay so but yeah so i i start playing with something i got another hack md uh just kind of run through um oh let's see
[02:49:07]  if i can just sign in with github and not have to worry about any of this crap i'm this is hot off the presses you guys get to see the rough
[02:49:20]  work for an rfc here but i'm trying i'm trying to figure out if if this makes sense um essentially which is how to isolate like both keep things simple
[02:49:38]  and extensible but also be able to serve both these worlds why not async dollar sign we got to be careful with those if anything that i've learned working on the bl
[02:49:50] ing stuff is like having too many dollar sign functions is bad um like it's basically like it mushrooms out your api with a lot of like unexpected things like it's
[02:50:04]  okay if you mark some very clear boundaries but if it's everywhere it's it's craziness i'd want to backpedal a lot um there to find the right
[02:50:15]  balance and i think i yeah async what i'm talking about create async here is actually create resource i was like what if we got rid of create resource for a much
[02:50:26]  much simpler primitive you could build create resource with the primitives that i'm going to show today but the idea is like what if we could build this more fundamentally especially with
[02:50:38]  a cash in mind use dollar sign you you all are the best right so here's a bit of a proposal here um you know what i'll share this right now so
[02:50:54]  people follow around but this document is hardly um ready um okay create resource is not too simple i get a lot of flack on create resource but yeah maybe this is like
[02:51:27]  way too framework author kind of mindset here but what if we just had create async and what create async does is it takes an async function and turns it into
[02:51:39]  a signal okay it looks a lot like create memo um because it because it is tracking on the top level but the idea is is that it takes an async it just takes
[02:51:52]  a promise like this could just be it's a function that returns a promise so this could be an async function itself i use this example because um there's benefit it
[02:52:02]  can also not take a promise because it can resolve synchronously so like if you make it top level async function it will always receive receive async but this is the idea
[02:52:14]  yeah create promise was an idea um but it doesn't create a promise it actually turns a promise into a signal it's right so you you know i was i was just showing
[02:52:24]  the shorthand unlike a memo i wasn't going to feed the previous value in because of the asynchronously i think it makes it hard but basically you could just go
[02:52:32]  like create async fetch users and then get the data out and this would be a signal like you just call as a function and um yeah what's going on did did we
[02:52:41]  just get a did we just get a raid node haters raid wow that's a lot of people oh it's a primogen haha i see how are you doing well i
[02:52:58]  don't know how interesting my stuff will be to you all i'm i'm going over a new proposal that i'm working on here um for how to handle async data
[02:53:10]  fetching the future in solid um i just spent two hours going over the history of isomorphic data fetching um from everything from you know html as an
[02:53:21]  api you know stuff like htmx all the way to stuff like react server components um and now i've i you know with armed with this knowledge i'm i
[02:53:30] 'm looking at uh what we can actually build here all right now prime has a lot of people uh yeah no i'm sorry i'm not i'm not very loud it
[02:53:54] 's so funny because prime himself is such a you know gentle soul so to speak but then like you put them in front of a camera solid it's bigger than ht
[02:54:06] mx thank thank you i haven't i honestly haven't seen much of prime's coverage on solid recently he was talking all about how he was using it at uh netflix
[02:54:17]  for a little bit but then uh um i don't know he seems like he maybe rich harris swept him off his feet a little bit with svelte and then now
[02:54:26]  everyone seems to be talking about um uh what do you call it uh htmx and stuff yeah you think htmx got them yeah i don't know
[02:54:42]  htmx is it does something it's nothing that i really care to do but it does something the problem is like it's a good solution for like a certain
[02:54:57]  space of problems but it's like a space that i like i don't care about remotely i feel like if you wanted to solve that you could have done that 20 years ago
[02:55:06]  and like have basically the same solution as htmx today so yeah yeah bun talking about bun actually you know what let's just check right now i think after i
[02:55:22]  get past the baby food yeah um i think if i go to github let me check this pull request i got to do the release i haven't done the release yet
[02:55:33]  yeah i i did merge it good to know i just haven't it was like earlier i didn't get to it we just got a bun adapter for solid start um so
[02:55:42]  yeah great work by pan nine three four one two um i just merged it i just didn't get a chance to do to check it out but yeah bun is is incredible right
[02:55:54]  compared to node like double our requests per second reduced 33 off the top of our ram usage too 33 yeah i mean that's that's pretty good i didn't try the
[02:56:10]  bench i have to say um yeah to be fair they they they were so close jared reached out to me and he's like i've got bun in for 0.
[02:56:27] 8 and then he's like are so solid in for bun 0.8 and then he's like actually no i don't he was like so so so close and then we
[02:56:32]  got in 1.0 but it kind of snuck under the radar we didn't actually have an adapter yeah but it looks like we're good to good to go to the
[02:56:39]  races yeah now i understand why why why people like prime and theo don't don't keep up with chat i like usually try to respond to every single person but that just
[02:56:52]  does not work here yeah fun x salt solid start dev there you go okay okay that's good to know yeah no that's that's that's definitely interesting um i'm
[02:57:19]  i'm i'm obviously excited by any runtime that's that fast i mean because you start getting these pictures in your mind right like i've done some benchmarks in the past where
[02:57:28]  let's say solids like 10 times faster server rendering than react right so then you're like if bun is twice as fast or three times faster the node does that like make
[02:57:37]  it you know you know but performance doesn't multiply like that that's not how it works it's it's always the next bottleneck that gets you um just because something's
[02:57:47]  x faster and something's x faster putting them together doesn't just multiply unfortunately yeah yeah run time bun time yeah no there's endless puns on that okay i haven't
[02:58:07]  given my bun take i saw the o's i saw a bit of you know what prime was talking about i have no hardship towards people on node so you know i'm actually
[02:58:16]  very grateful for the people on node so i'm not going to say anything on that side i think it's on one side i i think it's really cool i'm
[02:58:23]  really glad to see people get really stoked about bun and excited about new technology it feels like in the framework space we don't get that same kind of thing you know like we
[02:58:31]  get a bit of it but like it still feels like you know most people are like oh i'm just going to keep on using react it can be you know whatever but you
[02:58:38]  know i'm going to keep on using it where bun people are like yeah let's go and but the thing is benchmarks and i know this because i do lots of benchmark
[02:58:51] ing like it's the death by a thousand cuts approach like you you can make every little piece faster but not the piece that matters so like it you know there's there's
[02:59:03]  a thing that calls test well i know this pretty well myself because solid is also a very much test well kind of framework right if if someone goes out and goes hey how
[02:59:12]  fast can i update this text node i've seen people give me benchmarks and they're like literally like sitting there going like like without a limit just smashing how fast can i update
[02:59:21]  this text node in the dom and it's like it's all the fastest obviously but like that's that's not what like an application is right um bun has a bit of
[02:59:32]  that vibe to it where you can find like a specific simple test and run it and bun just kills it you know and then you know times that by a hundred or a
[02:59:44]  thousand and that's the experience you want the hope is you do enough of that stuff and put it together you know you just end up with on average a better faster experience my
[02:59:54]  experience is that is actually true but it's never as you know exaggerated as the specific uh benchmark you know will show without node we wouldn't be here yeah that that that
[03:00:13]  that that is definitely the thing no like when you think about what node did in the first place it's kind of crazy right like this is a time period when like no
[03:00:22]  one would let like no one even like javascript in their browser like like i was i was a developer back then i'm you know reveal my age a little bit but
[03:00:32]  like i worked on teams where we were doing like c sharp you know and dot net and stuff and people would be like no no no you know i don't touch the j
[03:00:39] avascript like you you you were working just so that you could do like the most unoptimal stuff in the browser just so you could keep on writing c sharp or j
[03:00:48] ava or rails or whatever the hell and then then it was like you know like no one even wanted to like see that javascript existed and we did the clun
[03:00:56] kiest solutions like these weird update panels and all that stuff that's why it's always funny when i see stuff like htmx because like i i get those vibes
[03:01:03]  from it but the problem is like we've learned stuff since then but this is kind of you know node was an insane idea and it almost worked unfortunately you know we're
[03:01:19]  kind of maybe stuck with it on that side but like you know even ryan doll himself came back with dino and was like i i didn't do a bunch of stuff
[03:01:26]  right and it makes it hard because like there's a lot of back-end people security oriented who are just like no node will will never suffice for our scenario but
[03:01:33]  like without node like this is a very very different story yeah see it's funny with this audience um which obviously came and just completely sidetracked what i was talking about
[03:01:58]  we'll get back to it in a few um i mean this is where you know my kind of hot takes are which probably bug a bunch of you guys a bit but if
[03:02:06]  you're not using javascript on the server you're doing it wrong but that's basically it like the problem is there okay i guess it depends on your scale to
[03:02:20]  a certain degree because obviously server is money but if you care about end user experience you can make more significant improvements by running javascript on your server than anything you can
[03:02:32]  do on the server with any language you choose right like the problem is we need to have certain like the cost of the network is more expensive than the cost of the you know
[03:02:52]  the the the hard drive you know so to speak or even like the internal network you're running off you know your protobufs or whatever like essentially like the the
[03:03:02]  the separation between client server is so much more impactful than you know the lowering the latency that you're doing during your server rendering generally don't get me wrong it's expensive like
[03:03:14]  every every millisecond costs money bottlenecks more servers more things but up to a certain scale your end users will pay more for the network um cost which means that the only
[03:03:27]  way to actually accomplish this stuff you know get low hydration reduce javascript bundles improve load sizes all this stuff is actually by having frameworks that can initialize the the framework
[03:03:40]  on the server right at extremes you have stuff like resumability where you don't have to run the stuff again on the client but islands partial hydration server components all all
[03:03:49]  these technologies basically rely on the fact that javascript runs on the server right not that all solutions are great right like there are big bloated meta frameworks built on javas
[03:04:05] cript that really haven't improved the situation much at all but it it it it it is where it has to start from actually yeah is this this is built in bun ap
[03:04:24] is um what we're looking at here no i i think this is just i think an adapter is just yeah this is just some javascript yeah this this is this is
[03:04:36]  just a way of mapping like the runtime stuff the build is still like bun supports veet which supports solid start and that's like we're not using yeah this is just
[03:04:45]  using beat yeah see wasm is is your other way out but unfortunately like don't like don't get me wrong like i think it's a problem that javascript
[03:04:59]  has such a strong arm but it's because it's the only language that can load and run effectively uh efficiently in the browser right from initial startup on a page you've never
[03:05:10]  been to before like wasm still has that overhead not performance overhead as you've seen with leptos um greg is a regular on the stream here we always talk react
[03:05:20] ivity i love leptos um it's more of just like the the overhead of like getting started i i love every time though that we come up with new techniques to
[03:05:32]  improve javascript actually improves wasm progressive enhancement uh we you know did this whole strategy with solid in javascript greg went and implemented it in leptos and
[03:05:44]  then he had progressive enhancement which made his pages interactive before the wasm loaded he i showed it recently on stream i don't think i have it in front of me right
[03:05:52]  now but he did an islands demo uh using similar techno technique that solid used to doing islands and again he shrunk his wasm package down for his hacker news demo down to
[03:06:04]  49 kilobytes do you know what that do you know how small that is like yes that's way bigger than solids versions or astro's version or you know but
[03:06:13]  that's still half the size of next js and 20 to 30 smaller than remix so like if you're talking performance on both load and execution and react or react frameworks are what
[03:06:27]  you're comparing it to leptos looks pretty good right if you're looking against other javascript frameworks that are more performant you know there's still a big
[03:06:38]  gap but if reacts the benchmark i mean yeah the the big thing too is like obviously when you have rust on the back end doing rendering i was talking about how solid is like
[03:06:55]  roughly like eight to ten times faster than react server rendering leptos is like 30 times faster right so even this is where the whole comparison i was talking about going to
[03:07:07]  i was like if i took bun and i took solid could i catch up the leptos on the server as i said that that's not how things work but that was
[03:07:16]  where the comparison came to my mind you know bun 3x solid 10x leptos 30x okay isomorphic data fetching um that's that is uh the
[03:07:33]  idea that you can have the same data model both on the server and the client like that's again something react doesn't have right now with the server components that you use as
[03:07:41] ync functions and then you use tan stack query on the client the thing is a lot of these frameworks that get service side props they have these very framework specific solutions that weren't
[03:07:51]  that didn't like work the same way you like if you had to do something on the server you do it one way and then like a data loader like remix and
[03:07:59]  the client you do the other way solid actually solved this and i was like really happy that we came up with a solution that lets you use stuff like react query almost first party
[03:08:10]  like and serialization streaming ssr all works automatically by just you just put it in hoisting like all the stuff even server functions which is our mechanism for like quer
[03:08:23] ying the database directly inside like a tan stack query call all works perfect but then server components came out and just threw a huge wrench in things because you can't have context
[03:08:33]  in server components and i am very interested in server components i wrote an article this week um basically about this kind of stuff yes uh svelte's solution is similar other than
[03:08:48]  it's not as extensible right svelte has the same i see svelte's has like loaders like remix where you can say like this is a server
[03:08:56]  loader or this is an isomorphic loader the pattern that we developed in solid is a bit like where svelte kit started where we have an isomorphic
[03:09:04]  pattern and then we i can actually grab something here as a like a code example yeah like um yeah i mean this is this is kind of a simple example but we our router
[03:09:18]  takes like a data function that runs on the client and the server and inside this data function you can literally make as many like things you want like solid has this thing called
[03:09:27]  a resource which auto serializes auto handles streaming suspense all that stuff so it's like a data fetching primitive that works on both sides and you can just tan stack query for
[03:09:36]  example is built on this primitive so you can just like for every route set up your data plan essentially and then use route data to basically insert into your component and what's
[03:09:46]  cool about this is you can if you want this fetch user can actually be a server function so it always runs on the server even if it's like x triggered from the client
[03:09:54]  or the server that's kind of like the pattern here and because it's fine-grained reactivity you can listen to certain parameters from search queries in each of these queries
[03:10:02]  and actually have them you know initially all run but then as things update trigger independently to do fine-grained pinpoint updates in your app without re-rendering anything so
[03:10:12]  like you could like you know change the search query parameter it affect one resource in your route data um in fact that resource might be a tan stack query thing that has a cache
[03:10:21]  on it or something that you invalidated whatever it doesn't matter and then that signal is used somewhere down your tree somewhere where you pulled it out through use route data and
[03:10:30]  you basically do the fetch get the data back and update the one place in the dom no re-render that's that's basically like the solution isomorphic works on the
[03:10:39]  server works on both sides as i said i was very happy with the solution until i started trying to work on server component stuff um yeah the the problem is the tricky part with
[03:10:55]  the loaders is like this is kind of like the loader pattern except it's not async it's non-blocking essentially like remix came up with this whole
[03:11:02]  like deferred thing so that they could like say wait for these don't wait for these in our case we can configure our resources to do that kind of thing but the key
[03:11:11]  part about being non-blocking is you can start the data fetching and start rendering and then like have suspense fill in the holes as you go and start streaming stuff as
[03:11:20]  it goes um so that was like a big part of this it's not just like a blocking async function it's actually each one of these resources is its own as
[03:11:27] ync function basically um it's a it's one layer removed so it's a little bit more complicated but it's incredibly powerful but yeah so yeah the the tan stack people were
[03:11:42]  like out of their mind when they saw it because like like the guy who's working on the solid query thing literally came into solid start and like into the router and like
[03:11:50]  this isn't even solid start specific this is just our the router i made and he went in and he just like put a create query instead of use query and solid to create
[03:12:00]  you just stuck it in there and and then like he we he did a database call inside a server function that he passed to the query function and then it just worked the page
[03:12:11]  streamed it auto serialized the data he didn't have to go like register anything it literally just worked immediately automatically so yeah yeah i should thank some people for subbing
[03:12:22]  i've been i've been getting subs uh a bunch just just now um uh we got ivan liz i mean i gotta just go back there's so many comments i can
[03:12:32] 't do it this problem you can tell how amateur i am um because i'm on stream yard which means i miss all the subs unless i go back into uh twitch um
[03:12:41]  sir guivara honestly there's too many of you um thank you so much for for for subbing the channel algebraic effects said hello yeah no um yeah yeah i mean
[03:12:57]  this this this is a lot of the research that we're doing right now into future reactivity is playing around with this sort of um injection pattern uh without coloration um
[03:13:09]  i mean that's a whole other topic my stream is actually gets very technical i lose people a lot because of that because um i'm a framework author i can't help
[03:13:21]  it but yeah yeah yeah how should i put it like i i wrote i i did mention this earlier i wrote an article this yesterday um and i'll drop it in here for
[03:13:38]  new people um but like the gist of it is islands are sweet server components are the natural extension of islands when you want client-side routing just like slapping a
[03:13:50]  view transition api on top of islands does not give you server components just using htmx to swap out some html does not give you server components like there
[03:14:01] 's a there's a challenge with hydrating uh global state when doing these kind of partial swap outs because the server is not aware of the state that's updated in the client
[03:14:11]  which can cause mismatches on what gets rendered on the server which basically completely breaks hydration react actually solves that problem by being very smart about where they render stuff and they
[03:14:21]  can handle it automatically and um what this means though is that yeah like you you can global state or like client context has to stay in client components right the server can have a
[03:14:36]  sort of context if you want but the only way that works is you have to actually serialize that data to the client and then send it back again on the request you know
[03:14:43]  the old like asp.net days of view state kind of problems you don't really want to go there the url is significant enough but the impact of not having a
[03:14:53]  shareable context between client server components on the server makes data fetching patterns harder you can't just like use route data um yeah i'm almost caught back to where i was
[03:15:04]  going here you see like everything in a router these days uses context it's like use route data outlets all these things use context and essentially while the client components could still leverage
[03:15:16]  this server component type architecture can't and the reason i'm looking at universal is i believe that the split between client server component can be automated i worked on at ebay um
[03:15:26]  before uh you know before i worked full-time netlify on uh um on solid and ebay's framework has had automated islands for almost a decade compiler driven so
[03:15:39]  you don't have to use client it just knows and i think there's a future potentially where that is a thing so i'm very interested in keeping the apis the same
[03:15:49]  i don't want like you can use async functions here can't use async functions here all these weird rules if you can keep it the same you can you can
[03:15:56]  basically smooth out the automation between that as long as you find a good pattern no bundler required server components you need the reason you need it i mean they'd be just wrapping
[03:16:19]  their bundling piece you need bundler for server components and islands because otherwise i mean you don't need me need it but the problem is the client components end up being
[03:16:27]  like each island ends up being an individual package the benefit of being able to use a bundler to do the analysis is you can actually pull the islands of stuff together into single
[03:16:39]  chunks and instead of spamming your browser loading situation um people might solid start was largely created by myself and another developer nikhil serif who's actually gonna be a guest
[03:16:52]  on my stream next week and he's also responsible for bringing server components to veat um so he did the react server component bundler implementation for veat and he's building
[03:17:01]  a lot of the foundational stuff for solid start and yeah we it's our opinion that part is actually pretty important i i could see yeah i wonder how much this is marketing
[03:17:11]  we're gonna have to see what that looks like what i don't understand is how caching creating some solves the issue of server not knowing about client-side context um okay
[03:17:24]  you're we're we're we're getting there just two seconds does solids have anything for mobile we don't have react native but people have been using stuff like tori
[03:17:35] 's been working on a mobile compatible thing we have good tori integration native script they love us as well um but like uh it's in the ecosystem right now well i
[03:17:59]  mean when i say about that yeah i'm actually not sure um yeah i actually not too familiar with astro's bundling to be fair ebay uses marco um their
[03:18:17]  own framework which basically was the pioneer of like islands and out of order streaming they've been basically doing this island out of order streaming thing for about a decade uh um they
[03:18:33]  can't we use react on the checkout but generally speaking the position at ebay is react is too slow like it will like the page load matters too much even yeah so
[03:18:51]  yeah sorry yeah i would where i was getting to was i i was working on this kind of proposal here on these data fetching primitives which which leads back to this uh
[03:19:05]  where where was it uh so hard to keep up with chat okay i got i got a couple other questions before i get back to this technical thing well this here i have
[03:19:18]  non-technical question using framework adds an insane amount of abstraction to the software development process which is great but how do you grow as a developer without doing this yeah i i
[03:19:25]  i'm very aware of the complexity that's why every once in a while we do need a bit of a reset so that we can like back up and like start over again
[03:19:36]  it's i mean that that's if i have any interest in htmx it's like maybe there's like something remotely there i i doubt it highly but like i
[03:19:48] 'm always looking for that two steps backwards before or one step backwards before two steps forwards when we pivot because like complexity is very concerning you hope your new abstractions fit as nicely
[03:20:00]  as you're old one of the challenges of server components is the fact that like it changes stuff on people um like their expectations if you come as the hope is if you come
[03:20:08]  in something server component in the first place then you're actually okay but like i don't know that's i we've we haven't seen that successful in migration it's
[03:20:18]  it's it's hard when you attack things at the root of what they do instead of attacking at the leaves anyway um so yeah i mean what what i've been working on
[03:20:34]  here is a new async primitive and solid the idea is that it it basically turns any promise into a signal so you could just go like take an async function like
[03:20:46]  fetch users this one has no argument so i just showed like this for example and then it'd be a signal um and we already have something like this called create resource but the
[03:20:56]  idea with solid 2.0 is that we're going to try and do something very similar to what react does more so than we did before but only along the reactive graphs
[03:21:06]  i.e this data where it is read if it's not ready it will throw but because in solid everything is reactive wrappers like memos and reactive expressions and jsx
[03:21:20]  what will happen is we only throw along the reactive graph so you can actually render the page past where you create this thing you can render other parts of the page but then
[03:21:31]  when you get to the part that reads it like the effect and it goes you know maybe maybe you took the user and you grabbed their name off it like use so this is
[03:21:41]  user you know i said data here but whatever data is actually terrible let's just call it user and you went user you you did something like user dot name somewhere when we
[03:21:54]  read user in the effect or whatever we could throw and then when it resolves continue from just inserting that text in that one place if we derive something like capital create memo
[03:22:06]  we can actually chain the throwing through the reactive graph and the end user never has to null check but essentially um it's like it's blocking but it doesn't feel like blocking
[03:22:17]  because it doesn't block at a component level it only blocks along the graph to where it's ultimately used you can render six components pass this through as a prop and not be
[03:22:26]  blocked up here you can get all that rendering done and then like where it gets consumed down at the bottom like that's the the laser point um you know bullseye
[03:22:36]  of where the dom gets updated through async that's that's that's kind of the idea with the reactivity in solid 2.0 and the error boundaries are still going
[03:22:50]  to play around like the the like the effects essentially because memos are going to be completely lazy so on pull these ones aren't to be fair because we need to avoid
[03:23:02]  the diamond problem so data fetching like async has to run eagerly to start the fetching process but when you pull it through that's when it throws if it's
[03:23:12]  not ready um and it when it basically throws all the way down to the effect that like asks for the question like can i have this value and then in the our case
[03:23:21]  we'll handle that with suspense but if it was like an actual error the idea is reactivity if you had an error somewhere higher in the reactor graph and you threw then you
[03:23:28]  throw up to the you throw down to the effect the effect and then the effect would use something like context to look up to where the error boundary is so it's the data
[03:23:38]  is somewhere over wherever it is it lives it pro the effect where that consumes it ends up pulling the data it needs to and then if it errors or hits like a susp
[03:23:51] enseful situation it then looks back up the tree um for error boundaries or suspense boundaries but that's completely it's it's all read based and it's completely independent of um where
[03:24:04]  the data is initiated uh solid does have error boundaries on the server we do something kind of funny right now i don't know if it's like the best because it might
[03:24:17]  not work as well as server components so what we actually do is if the reason it's hard to do error boundaries on the server is because of outdoor streaming right if you if
[03:24:24]  you're inside suspense and you have an error boundary inside and it catches it that's pretty easy because you can always just like inside the suspense boundary handle the error and change it
[03:24:34]  there but what if the error boundary has already been flushed to the client so like you have an error boundary wrapping suspense so you can go there you render the outside the
[03:24:43]  app you render the error boundary to get into suspense it suspends that's fine so you flush the top up to the suspense boundary and then the the request fails what happens in
[03:24:56]  solid is it throws the error and goes up looking for the error boundary but if it hits a suspense boundary and it realizes that its parents already flushed like if it hasn't
[03:25:05]  flushed it just keeps on going up but if it realizes its parents already flushed it it goes okay that's fine and it throws the error across the network and then
[03:25:14]  the client catches the error boundary and does the the re-render there so yeah it's kind of an interesting pattern but yeah we basically throw the error across the network to do
[03:25:24]  error boundaries on the server so yeah like the basic premise here is we'll be able to create these async reactive graphs um using this mechanism um and it'll propagate through
[03:25:43]  the rest of the graph um this is a very simple approach if you've ever seen create resource today we have a lot more features we have all these like loading and error states
[03:25:52]  but i want to leave that for the most part like you can ask the question but really on anything because if you think about it if something consumes this uh this async
[03:26:04]  signal it's possible for a memo to be suspended to you know like a computed value so like technically anything in the reactor tree could be waiting so to speak but i'd rather
[03:26:17]  defer to stuff like error boundaries and suspense where possible um and the sapi doesn't have a mutate or refetch event because it's very pure based it's just
[03:26:28]  based on the input and the output i did it on purpose if you want to mutate this i what i'm going to suggest is we have a new primitive coming solid 2
[03:26:38] .0 which adds it's it adds a layer on top of immutable instead of making things mutable which is not good it actually uses uh immutable thing as a
[03:26:48]  source and then having has the ability to override it the reason this has a lot to do with how reactivity propagates the graph i'm not going into details with it probably
[03:26:58]  right now but it's it's it's valuable to not just like have people mutating stuff left right and center um we we want to push people to derive values as much
[03:27:09]  as possible most of the time when you do mutation it's temporary it's like i'm working on something and then i'm going to commit it back and get the source to
[03:27:17]  update like so you know if you update the user's name you might need to temporarily change it but ultimately what you're going to do is you're going to post it
[03:27:26]  to the server and then the source of truth is updated and it and the data comes through derived update the user user gets refetched writable gets reset to match actually the
[03:27:37]  current value and because the name that you just saved is still the name it doesn't update anything in the dom you we're trying to force these drive cycles it's just
[03:27:47]  better that way um but the big change here that i'm thinking about is create resources like super powered and what i'm what i'm trying to what i'm thinking about right
[03:27:58]  now is actually defer that automation of serialization and stuff to a cache api very similar to what react does um where you could basically just use a memoized function um
[03:28:13]  it in the case of ssr it could just be you know for the life of the request but the idea is we could basically use a take this kind of cache ap
[03:28:27] i and give it a cache key and then use that as the auto hydration mechanism it kind of splits create resource in half there's basically this cache which you can fetch anywhere
[03:28:36]  outside of the reactive graph you can do it in a preload stage you can do this anywhere then warm your cache and then you just call the same function later in your create
[03:28:46]  async call and it'll recognize it's the same promise and resolve through so you this way we can isolate this data fetching we can only we can with server components or
[03:28:55]  type stuff only render partials of the page you know like i always use a remix page you know if you switch um you know between subscriptions and invoices we can
[03:29:05]  only we only have to render this part we don't have to render the whole thing um that's hard to do when you have these hierarchical data dependencies but if you have
[03:29:15]  a a cache above it's like when you do the initial render they hit the same cache key so they don't double fetch but when you do the specific render yeah this
[03:29:24]  section does need the data from the section above like this is a terrible example i just said but twitter is a better example right i'm on my user page you know there's
[03:29:33]  the universal nav i have this section that's all my user stuff but in here i have tabs right and these tabs um might still require user information that i loaded up here
[03:29:47]  from above so that that's that's general the thing you reset a cache that's a default behavior right the cache is actually just it's not even reset it's just literally
[03:29:57]  tied to the request so like using something like async local storage kind of idea um you it just goes away it lives the life cycle the request would be interesting if you could
[03:30:08]  store the cache on the session as well that's another option kind of because the cache api is pretty flexible right as long as the arguments are serializable you just need
[03:30:15]  to basically have an options object i was thinking about in the browser you could also set like max age and then have a way of serializing it's basically like honestly it's
[03:30:24]  a it's tan stack query largely this cache api um but by pulling it out we can define you know the behavior we want on our api requests independent of this really
[03:30:38]  powerful async primitive the sad part you know that i like to create resources it auto puts it together but a lot of people want more control and this means that like what
[03:30:47]  you're going to do a lot of with these two apis is essentially define an api somewhere wrap it in the cache set up the right cache keys and then call then
[03:30:57]  pass that fetch user that you set up the cache version pass it to your create async so there is two wrappers here it is a little bit more involved but then when
[03:31:05]  you look at any framework you know i guess react is proposing the same involvement because instead of create async they would just have a wait or use the difference here is this
[03:31:14]  is so much more powerful than something that suspends at a component level because if you think about it in those solutions that kind of block you like get there and you're like
[03:31:23]  stuck like in solid you can get to the top level page create your async stuff write the suspense boundary below it right and then use the async value below that suspense
[03:31:35]  boundary i think the reason that next app directory has like you know that crazy file system routing with all the different files is if you started each route section you would have to write
[03:31:47]  like five nested or like three nested components just to get started on every page because your suspense can't be the same component that fetches the data it has to be
[03:31:57]  above it and you have to put your error boundary above that you know what i mean like so like your they they do this so they can wire it where in the case
[03:32:04]  of solid you can literally just open up a file and just type it all in and it all works so i think this is like one of those goals create route data does
[03:32:17]  have a deduping cache but i am i i'm just kind of getting to this point where like the whole reason we have create route data is so that we can like
[03:32:27]  invalidate the cache for all the routes on the current um like currently being routed and i feel like there's other options here where we could just put the router could have
[03:32:37]  a preload function this will make preloading work in solid properly finally i mean i could have done it before but there's a lot of like reactive side effects to it
[03:32:46]  this keeps it pure the route data stuff is all about just hit warming the cache and then the you you can just use the cache you know calls like inside your components wherever
[03:32:58]  you want right you basically set the rules i this is kind of the pattern that i that i like from the react cache stuff is you could set the rules for the cache where
[03:33:09]  you define the function right i put cache id fetch whatever but like nothing stops this from being server dollar sign you know or what or what's the other what does react do
[03:33:23]  use server right like you can basically and then this fetch could be like a database call you know this actually should have a return statement on it whatever like you can basically set
[03:33:39]  up your apis and your caching rules all in one place and then consume them uh in over here that that's i still need to work through some details as i said
[03:33:50]  this is really rough when i showed i haven't even finished the section on how how hydration works but that's that's sort of the thinking i see there's a crazy
[03:34:06]  divergent effect conversation going on in chat you don't right that's that's basically the the other challenge okay like we can only we can you can only fetch up to
[03:34:28]  the first away you track up the first to wait that is fine for the majority of things i mean somebody could get trapped by it but if you think about if you have a
[03:34:39]  process that has like multiple awaits in it and you're trying to like fetch all the data yeah you could obviously hoist all the signal accesses to above like there but
[03:34:52]  more than anything it means that any single change would cause the whole chain to start over again right and throw away everything that in progress so for the most part like it might not
[03:35:04]  be obvious but like there's no there's nothing you can't represent with with uh there's nothing you can't represent by simply moving the signal reads to the top of
[03:35:16]  the the async await function and for the most part if they were separate signal reads like and you wanted them to chain and have these separate read rules then i would suggest making
[03:35:27]  a separate effect it's just better like it'll be more fine-grained in how it updates i don't see the benefit message i mean if you have islands with
[03:35:34]  the benefit layouts well not to re-render right like why if if only let's go here if only this section changes why re-render this whole thing islands might save us
[03:35:48]  on the javascript and the render cost of these like specific little pieces let's say but there's just no point in re-rendering the whole the whole thing like
[03:35:57]  islands happen all over the place right they uh where is it i had jason miller's thing but like an island might be like a specific widget here or widget here
[03:36:10]  the the nested routing hierarchy key is different than the island hierarchy so to speak so like there's basically no even with islands there's still no point in re-rendering
[03:36:22]  the stuff you don't need to re-render what will router prefetching code look like well yeah let's let's go back here what i'm what i'm
[03:36:37]  suggesting is if you write your cache like this like the router prefetching code where instead of having route data it could literally be just like um okay let's let me
[03:36:48]  just open maybe a playground something where the text a little bit larger but i'm picturing like function pre preload and then in here you would get stuff like uh par
[03:37:05] ams you know uh location query whatever you get all the react all the router based stuff and then you just do like you'd have your like in wherever you define your api
[03:37:19]  you know where was my client example here somewhere you know different file you have this right and then you would just be like okay for this route um i want i need this
[03:37:35]  user so what i'm going to do is i'm going to fetch user um params dot id and then somewhere else in your like the preload there's duplication here
[03:37:55]  which makes me a bit sad but like generally speaking the preload here would um would just warm it so this would run in parallel top of the route before anything happens and
[03:38:08]  then later on nested in something else you have your create async and then you'll just call fetch you know fetch user uh here with props dot id or user id by
[03:38:23]  the time it gets down there and this will actually just find the same promise that you did here from the router preload and it will it yeah it'll already be like
[03:38:37]  in flight how do you mentally clean the cache well yeah this i i my thinking is that we have an api kind of like tan stack where it's just like cache
[03:38:58]  invalidate do to do i don't know user i i like can stack stuff we could you like you could just do this okay so does this make sense it i
[03:39:31]  this still has some rough edges um but like the gist of it is we separate the cache apis from the async apis keeps the async apis easy and
[03:39:40]  clear because what i love about the async apis you can use them for anything we do data fetching but they could be browser apis like this is just a pure
[03:39:47]  promise to uh to to signal kind of thing and i think it would be really interesting like if i i had a lot of problems like injecting stuff like store like behavior
[03:40:01]  and stuff this will make it a lot simpler we just need a way of like if you want your async um thing to like do deep diffing so like if you get
[03:40:11]  a huge blob of json and it only notices the two little things change and update those things dom it's just another wrapper on top of the create async right you like
[03:40:20]  maybe like like if you need to do data diffing you could do like const um uh i don't know sorry this is user we could do like i don't know
[03:40:33]  something like user data and then we can do something like user equals like i don't know it's like it'd be some kind of derive store thing but like i could
[03:40:51]  easily see a wrapper taking user data and then being able to give you something like almost like a store back that does fine-grained um like diffed updates like it's
[03:41:02]  it's all opt-in a bowl right um anyway it's not crate store but it's like crate derived store but yeah i'm i've definitely lost track of
[03:41:20]  whatever is going on in chat about that um is preload config something you would manually need to do at the route level are there cases where you wouldn't want to preload
[03:41:30]  yeah it would be something manually you'd have to do at the route level the because um yeah that like right now i did a diagram earlier for everyone in escala draw um
[03:41:43]  let me pull it up again where i i talk about data fetching on the server and i was showing that like i gave each thing a score like roughly a millisecond
[03:41:53]  say how long it took and i might this case involves two waterfalls essentially but they're not necessary waterfalls they just happen because the view basically picture if you had that twitter
[03:42:03]  page where you had your user details and then you had your tweets and because of the view hierarchy there's a waterfall but there doesn't have to be from a data perspective
[03:42:14]  because they both just are fetched off user id the thing is the naive approach back when we used to only have synchronous running react with something called prepass where we would essentially
[03:42:23]  like each of these sections like there's a green section that's static there's a red section that depends on the first piece of data and a blue section that depends on the
[03:42:31]  second piece of data you'd basically render as much as you could hit something async wait for the data load re-render again until you hit something else wait for the
[03:42:39]  day to load and render again it so the whole total time was 224. um then we got stuff like gs get server side props and loaders where we just data
[03:42:47]  fetch all ahead parallelize it then run the thing in chain then i talked about suspense and streaming this is kind of like like what solid and remix and then maybe svel
[03:42:56] te kit not sure do today where you can like render what you can and then fetch the data at the same time um and then you know respond with the stream at that point
[03:43:08]  and then kind of like re-render the rest and finish um but if you use suspense naively without hoisting the data fetching like the way that remix and
[03:43:16]  solid start does and are you know uh i think svelte kit does you would still end up with a really long time because you'd have this chain you go as far
[03:43:24]  until you hit something async go as far and you still have something you know even with streaming your total response would be really long and similarly async components for react server components
[03:43:35]  without hoisting at the top level and they don't give you a router that does this and they don't recommend you even do this the default behavior is still pretty
[03:43:44]  bad because of this like they they have the ability to pause start so they don't waste any work so it's like 190 instead of 194 here but it's like it's
[03:43:54]  still not great to have waterfalls anywhere that are avoidable but you know obviously you can put them together but my point is that like you need to do something at the route
[03:44:06]  level the problem with async components is it's not universal between client and server which is why i've been looking at other options i mean i was debating even for a
[03:44:15]  while that i could compile an async await in a component to a create async call like this more sense and like use a compiler because async await colors the function so
[03:44:27]  you could actually see it it's completely analyzable like it's not you don't have this problem of like out of file which is one of my concerns like things
[03:44:34]  like svelte kind of suck for comp composition with their native language because they can't see outside of the component right like you have to use some kind of special syntax like
[03:44:43]  a dollar sign or something and then they see it but like the problem is like their whole reactivity is based on their model that you can see so like there's this like
[03:44:52]  they they don't have cross-file analysis you have to like tell it it's reactive that's why they don't have hooks you know like the dawson operator
[03:44:59]  is something that doesn't escape the file reactivity doesn't skip the file there's positives to that from a hierarchical standpoint but there's also other ways to solve that so
[03:45:07]  like compiling like that has benefits but it changes the semantics of async await um the end user might not use care but i mean i feel we're entering a really
[03:45:20]  weird territory especially the stuff that react forget where it seems like these things are okay until you realize that you have no clue what the javascript in front of you is
[03:45:30]  running like how it runs but yeah so what i'm saying long way about it is that you would have to you could skip doing the preload function and just pay the full
[03:45:42]  price but you could also just do this it as i said it it hurts a little bit because our current patterns basically force you or encourage you to use the loaders up
[03:45:56]  top um which means that most people who develop and remix or solid um you know end up with an app that does this instead of an app that does this which you know if
[03:46:10]  data fetching is your bottleneck which often is client server rendering isn't that big is usually a lot faster um we're talking like in this single waterfall case or i
[03:46:23]  guess double waterfall case we're talking about doubling this length of the takes to respond which is kind of unacceptable from my perspective i i don't know it sounds like they have their
[03:46:36]  own use oh yeah that's cool yeah if we can anchor on the anchor on the function yeah yeah i like that yeah that's kind of that's clever i i i
[03:46:49]  these are the kind of details that i have to work through because the one reason that i've been playing around the key stuff is because um um just figuring out how to
[03:47:03]  do hydration across the wire serialization the perfect solution yeah yeah yeah these would run in parallel they like they basically do today in solid as well the only thing is it's a
[03:47:23]  loader pattern and that's non-blocking so it's like nothing's truly parallel you know i mean like they they basically just run immediately and nothing blocks which is
[03:47:32]  close enough um but i think because of no context for like on the server we have to switch from a loader pattern to a preload pattern essentially yeah yeah yeah there
[03:47:52]  there there is async is definitely a slowdown i've benchmarked and i've seen it um my benchmarks where i talk about solid being 10 times faster than react generally was
[03:48:03]  synchronous rendering once you add async the things aren't they get muddled a lot um i was even looking at using generators as a mechanism for propagating reactivity on the
[03:48:15]  server again performance was a consideration async local storage actually scares me historically it was very very slow but it's like it's very hard to like have all these async
[03:48:26]  contexts and be able to preserve the request when those async contexts are in user space like right now with solid we can pause and resume with suspense and i do this thing where
[03:48:35]  since we control all the entry exit points because we have resources i can like resume a context and then like it works because we have these wrappers but when end users are just
[03:48:45]  writing async all over the place kind of like you know async functions and react server components you don't have a choice right you have to use something like async
[03:48:52]  local storage otherwise like the user won't have a consistent access to that context and it is slow like my understanding it used to be 10x slower my understanding now is it's
[03:49:04]  more like 50 slower but like if it scares me as a benchmarking kind of person but i honestly no other api accomplishes it and um it's async local
[03:49:16]  storage thanks to next js basically strong arming everyone now is available in every single server runtime it's so funny it's zone js basically angular did this 12 14 years ago whatever
[03:49:29]  and everyone's like no what a terrible idea react does it and next js and every single runtime adds it in less than three months anyway yeah the the big benefit of not
[03:49:46]  using strings and just using the function reference is that like for the simple case for deduping you don't need any key it's just automatic um so like that's
[03:50:03]  where a lot of these and this is why i put out there this kind of feedback can understand what people are comfortable with in terms of cache apis it's not my specialty
[03:50:13]  i reactivity is like a pseudo cache so i've never needed a cache api fetch user returns a promise the data that you don't think the way this is going to
[03:50:29]  work is going to be adding properties to a promise um because i kind of hiding i think i might mention it in here for this to work properly you don't want the
[03:50:40]  thing to keep on suspending when it hits the promise again so we actually need access to the resolved data synchronously for like re-render times so the two things that i
[03:50:52] 'm thinking about modifying the prompt those promises that come out of the cache are like a dot value or something where you can read the value synchronously once it's been resolved
[03:51:01]  and the other thing maybe for invalidation is a almost a way for the crate async to to listen to cache invalidation through the promise i know this is kind of weird
[03:51:16]  but i think it's okay it's not like i'm patching some global thing that's given i'm basically modifying something that you you give to a wrapper maybe returning
[03:51:29]  its own version of it so i think that i think that i think that checks although i imagine that was part of a different conversation that has nothing to do with what i'm
[03:51:38]  talking about if you come to solid and you've never used this stuff before i strongly i'm torn on this because some ways solids model is almost simpler for people who
[03:52:10]  haven't been react brained um so like you could just like do something very basic and it's actually very similar to react um so you could just like teach people jsx
[03:52:23]  and how to insert values in jsx but signals are really the core of it i have a good introduction article that i share with people um quite often not building a reactive
[03:52:35]  library from scratch the first part to be fair i built solid in such a way that my whole point was that i wanted to make it feel that anyone could go home and write
[03:52:46]  the framework themselves a lot of our introductory contents like that the problem with that is it's like slightly more higher level slightly harder um to uh to explain stuff to people you
[03:53:01]  know to get started but on the other hand once they get past that like first jump it's like they feel like they understand everything about the framework that's that's that's
[03:53:12]  what appeals people to people solid it's the transparency um and the control very very nice uh features to people like senior devs like because it's like they're they're
[03:53:22]  less trusting than other people they've been burned too many times yeah it's still going conversation yeah cash as a dollar sign operator is like a or hoisted thing is interesting
[03:53:54]  it's tricky we did actually play with this for a while in solid that our crate route data actually just like hoisted it up to the route like just registered it um
[03:54:05]  that's it's interesting right because we can actually tell because we're pretty good with bundler graphs we can basically tell which which funk like if you gave it a wrapper we
[03:54:16]  can tell which like routes like what components are under it so we could like basically prematurely fetch i always thought that was weird with like conditional renders but like i felt
[03:54:26]  like this something had to be explicit or manual but maybe i'm like overthinking it you a compiler could definitely do it that's what relay does to a certain degree um it
[03:54:36] 's still possible automating that preloading step and because we have special syntax we we could definitely do this we could definitely do this it's just it's an interesting
[03:54:55]  take react solid react looking at us but it might say traditional javascript yeah okay so yeah i mean i don't know if anyone has had more specific questions along this
[03:55:25]  line this is still very much a work in progress but you can kind of see that like this is an alternative reality where we separate the cache from the async primitive it gets
[03:55:35]  rid of the complicated crate resource um and it you know could give us power superpowers but it all depends on the execution of this cache this is very early but it's
[03:55:46]  a big shift um from the routing side to move to preload pattern i'm not sure i love it because in some ways as i said our current solution is perfect but but
[03:55:58]  not having access to context is the driving decision here i i still believe that server component like solutions are um you know important to where things are heading so yeah all right i
[03:56:13]  think it's time for this week in javascript not that i have a ton for this week in javascript because i already went over to my article but you
[03:56:26]  know we could we could we could run with this week in javascript we can look at a couple things i think someone shared the remix v2 release so let me let
[03:56:36]  me get prepped here for a second so we can talk about the nonsense um need a drink of water i've been going for four hours now have you tried to toy
[03:56:58]  with async generators for suspense instead of throwing to have lighter resumability um no the thing is i don't think anyone wants to write generators like if i compiled to
[03:57:16]  them it'd be acceptable but i don't think anyone actually wants to write generator code when people look at generator code they have no clue what it's doing and this could be
[03:57:24]  a learning thing but i think it's a learning thing it's a step too far for most people i've looked at using async generators like marco's compiler you can
[03:57:34]  literally like do awaits a fine-grained and for marco 6 like inside like expressions and the best one of the things we were looking at was doing generators as a
[03:57:44]  way of like pause and stopping like at that degree but like the compiler output not as something someone would write and i think yeah i think we'd have to get to like pseudo
[03:57:56]  async components before we get there um right now i'm mostly looking at mechanical signals kind of type stuff why why do we always have to mix and match back in front
[03:58:11]  of which is convenient just end up creating more non-sync complex sensors yeah i mean this is this is this is fair i i get it um the thing is like
[03:58:24]  i were you developing when we didn't have these declarative solutions like we used to have these two things side by side i mean this is one of my biggest criticisms of stuff
[03:58:35]  like htmx like you're in this kind of zone where it's like like putting two template languages on top of each other like i knock out on top of rails
[03:58:44]  and stuff like there is a need for javascript interactivity and if you want declarative systems they don't play nicely with each other so you almost want to really
[03:58:51]  try hard to get a single model something like phoenix has a single model states owned on the server something like rscs are trying to get to a single model uh
[03:58:59]  state owned on the client but like the stuff in the middle is about the worst um obviously a single page app like a spa is as far on the client as possible but we
[03:59:11]  know that's not acceptable so we we end up being a bit in the middle anyways like having a server under page with little islands or spas in them um that are only
[03:59:21]  client rendered um doesn't you know like i can go around this argument in circles and i keep on ending up the same place yeah yeah possibly i i i i'm still
[03:59:48]  working through it i think there's trade-offs definitely with reacts implementation i want to do better when we get there i i will understand it better we are actually working on
[04:00:00]  it that's what the google chrome money is going into we we got a bunch of funding like thirty thousand dollars from the chrome team to work on our original server components basically so
[04:00:10]  we'll see we're we're we're we're a couple months in anyways i jumped way back to answer some questions that i missed before okay let's let's
[04:00:28]  let's get this week in javascript lined up here all right do i have anything this week i say that but like there's literally there's almost nothing it's
[04:00:48]  fine it's fine i just need to close like a billion tabs button came out last week so all the all the fun stuff that people reacting to it and i i don't
[04:01:01]  need to react to people reacting to stuff that's just not my style let's just close up a bunch of crap okay um let's get this going i'm just gonna
[04:01:20]  i'm just pulling there we go okay cool two seconds do i even have any bookmarks this week like tell me anything interesting happened that was actually new this week it looks
[04:01:36]  like my last bookmark was dha's dropping typescript v0 from versell okay send me a link do you know why sets like eBay don't offer offline web
[04:01:56]  support does SW affect performance should frame yourself from versus it's an interesting question i wouldn't want offline for any like i guess you could be offline to like view stuff that you
[04:02:15] 've viewed before but like you you don't want to do purchasing offline i think it's just a lot of effort for what they consider minimal gains i think that's often
[04:02:27]  the case like a lot of setups just don't benefit as much i don't think it's an overhead thing i mean i know the web frameworks used in in that sense like
[04:02:39]  marco is a server first framework i i think it's possible to run marco in a service worker um but then like you can't get to the apis the same
[04:02:48]  way like everything in apis is locked down right you have to run through the service yeah i don't know i think it's it's probably one of those like more
[04:02:57]  complicated than it's worth kind of things i think there's certain types of apps that might consider it but i don't think like a storefront is probably one of them or
[04:03:03]  it's a live auction site uh yeah what is v0 from vercell sorry i'm just gonna see if i can look this up v0 vercell uh huh
[04:03:37]  okay yeah so this is like what everybody wanted chat gpd to do i've not seen this but can we try it i'm worth it i'll put the link in
[04:03:51]  there okay cool i think i think i got i got some stuff now i know i'm not sure my screen yet i i was just putting some stuff in the background um
[04:04:02]  i have nothing yeah i was kind of talking to myself almost here just trying to see if there's anything new what's the 15th yeah it's been a week i've
[04:04:14]  been so head down working on stuff programming actually doing work it's it's been hurting my this week in javascript recently because i used to like spend a lot of
[04:04:23]  time on twitter but then ever since i got back from vacation i was just like i realized how much time i was spending on twitter and i was like screw this i'm gonna
[04:04:29]  do more programming um and do more designing and leading you know actually important stuff and it's it's been actually crippling by this week in javascript because i just i
[04:04:38]  i'm just not on top of things anymore um anyway let's let's get this started here um yeah there isn't even anything interesting on the solid side other than what
[04:04:49]  i talked about last week yeah no it's just been a heads down week i'm looking forward to next week okay um all right all right cool let's do this all
[04:05:10]  right it's time to talk about this week in javascript i can't say i'm the most connected on what's been going on this week but um you know
[04:05:17]  we'll take we'll take a run at it um there there was um at least a couple releases and you know a little bit of controversy like there always is so um let
[04:05:28] 's just go right into it um for me this week really started with the whole attack on node thing in response to the bun release last week um honestly i didn't see
[04:05:45]  where it started i know there's been some controversial videos and everyone hyping stuff up to be fair um number of us are friends with jared um and want to see him
[04:05:57]  succeed and it's you know there's a combination of that uh you know with the influencers kind of pushing that stuff to like you know when the masses all come come in
[04:06:08]  the thing that actually really stood out to me personally was there's this chain of tweets from james m snell um and i i i i it felt spot on for
[04:06:21]  me so i just i just wanted to kind of uh look at these for a moment uh talk about it basically he was saying as a whole devs need to get out of
[04:06:33]  this mindset because engineers have a new tool introduced and the older existing tools somehow deserve to be replaced um or killed off or worse attack the folks that work on them the funniest thing
[04:06:45]  is a lot of people working like open source it's not like it's like a big paying job you know so to speak like these things are barely stringing together and
[04:06:53]  we're in a weird world where we have vc funded projects like i can relate with this a little bit because i i've i've had the temptation there's multiple times
[04:07:03]  in my history solid where vcs have come to me and been like hey are you interested and i've said no every time um because i never saw the business side and
[04:07:11]  i never really because i i'm built a framework for everyone i never really wanted to prioritize the monetization of a business over what i could give to the you know the to
[04:07:22]  everyone but sometimes you look and go if you have the money you can do a lot especially if there's a product that can be commercialized out of it um so like
[04:07:35]  there's other routes to to having money without taking vc like i think at a certain point you take the money you might have some runway you might have some room for the
[04:07:47]  first couple years but then at a certain point they come knocking to see what the business plan is and i never went that way but the people who have can pay developers to actually
[04:07:56]  do work instead of rely on the incredible generosity of the community so you have to understand it's a very different thing when these two kinds of environments are put right next to
[04:08:06]  each other because you know node might be part of you know open js foundation all these like great things but like what does that actually translate to you have situations like babel where
[04:08:14]  there's like one guy working on it you know like it's it's tricky software is just like any android engineering profession new tools come along all the time if a newer tool
[04:08:21]  works better than for you than the older tools use a newer tool if an old tool works fine you keep on using it you don't have to insult the person making or or
[04:08:29]  using hammers if screwdrivers get the job done for you right and i i think i think this is really just on point it's kind of obvious advice um uh
[04:08:40]  a corollary to this is if a new tool gets a job done better and faster engineers should absolutely consider it just don't be a jackass about it i think this
[04:08:52]  is also an important point i've seen this in the framework space the people i i'm very happy for svelte that they're finally getting out of that zone there
[04:09:03] 's this zone where people like some people aren't gonna like sell because of syntax or because of the composition stuff or because of like the mental model like there's lots of reasons
[04:09:13]  not to like svelte necessarily but there's also but the whole reason of being like oh it's you know immature or whatever like at a certain point there's like
[04:09:25]  this chicken and egg problem and i feel like svelte after seven years now has kind of proven itself like it's funny to hear people who picked up react after like a
[04:09:35]  year like between 2013 and 14 criticize something that's been around for seven years and acting like and acting like oh well it's the new kid on the block you know like
[04:09:44]  obviously being the author solid i have a similar kind of mindset but like at this point it's kind of silly whole projects live and die during a five to seven years standpoint that
[04:10:00]  like it's not you know nothing happens unless people actually try it you know so people should definitely consider different tools if they do the job better let's see here i want
[04:10:25]  to see what the the prime twitter tweet is all right i don't think bun is 1.0 i don't think it's prod ready but it's close and i
[04:10:38]  love it yeah it's hard when you build a project with this wide of a api surface like like where you're trying to do so many things it's going to have
[04:10:49]  bugs it's going to have edge cases things you don't expect um at a certain point you just got to pull the trigger and move forward um so yeah i yeah i
[04:11:00]  i think i think i think this is i this is probably the right time i don't know how buggy it is it's it's a judgment i'm i'm pretty
[04:11:12]  buggy adverse so like i i take forever to go to 1.0 like solid took four years no i mean i'm three years open sourced to go 1.
[04:11:24] 0 and five years all together i guess roughly before i went 1.0 it's all starts taking a little while i'm pretty picky about the 1.0 label but i
[04:11:32]  think at a certain point you just go with it and ride with the flow and i guess it was time i when i used one last it was not very stable but it changes
[04:11:42]  so fast over like a couple month period yeah yeah to be fair i wasn't trying to insult felt i was saying for people who wanted to be haters like they're they
[04:12:13]  have they can have plenty uh of of reasons for doing it um but don't use that as the reason so to speak right some some people like the html
[04:12:28]  in in uh single file component stuff like it keeps their mind focused on what they need to get focused on i'm i'm a very mechanical person so all i see is limitations
[04:12:40]  when i look at tools even my own so um there's certain design things for me that like were just unacceptable um like baseline when looking at svelte i just would
[04:12:50]  wouldn't there's things i love about svelte though like it's hard to make abstractions that don't leak because people don't want to give something up they're
[04:12:59]  like they're like oh but if we do this and this a perfect example is view went on this like tried to copy something very similar svelte's api with ref
[04:13:08]  sugar but they didn't want to give up composition and the end result was horrendous it was terrible i'm glad they canned it but it like felt unapologetically
[04:13:19]  accepts its limitations and that's something to respect right so anyway getting back on here but yeah so yeah i mean if he saw i i saw theo released what two bun uh
[04:13:45]  videos this week i'm not going to watch them right now but if i'm sure if i look uh apple movie okay so i'm not even getting this right the truth about
[04:13:56]  bun and then i think he also released like a very like thing i think people have to step back from their their hype cycle um but anyways it's all good uh i
[04:14:06]  i i don't know if i have much else to say i just don't like when open source stuff gets bashed for no apparent reason um yeah are there no full-
[04:14:17] time maintainers on node anymore is it all volunteer a person or two funded by the foundation to handle security vulnerability parts but that's about it there's no one that i'm
[04:14:26]  aware of that's paid to work full-time on node yeah i mean this becomes the problem it's hard i am so lucky i think rich is so lucky to be
[04:14:41]  able to work on frameworks at companies that support them even though they're not like the primary like product like a hosting company like netlify or versell funding development on solid
[04:14:54]  or svelte is amazing because it's the only way this happens right like how else do you have alternatives to react when you have like meta you know teams of meta
[04:15:07]  working on it all this stuff and you you come up with a good idea and then you try and get volunteers like it's it's more than david versus goliath
[04:15:15]  it's like an ant versus freaking i don't i don't know so um but the problem is when you these are packages that are novel with the potential to change how
[04:15:30]  the things are done in the future it's different when you're you have these long tail on these projects that have been around forever um that everyone uses and they're just not
[04:15:39]  supported i mean what can you do yeah and but dino dino and uh and bun both are vc funded right like they're companies so like yeah i mean
[04:16:08]  this this is this is the challenge i've talked a lot of open source maintainers about like different funding models and stuff we don't all get patrons so to speak um i
[04:16:20]  i'd be interesting to pick evan use brain about this stuff view is probably the best funded um open source pro like community that i've ever seen that's how he
[04:16:30]  he's got like a system he gets so many different developers and different projects running he he's a machine things like beat you know like to like like it's not view but
[04:16:40]  it has its own you know group like that they are they've kind of got it nailed in a way that i think the rest of us need to figure out but that works
[04:16:49]  on like the smallest framework scale i think something like node is from like a different era and it's much harder to get back from that do we have any examples of v
[04:17:03] c funding do we have of languages older than 10 years i don't know that's what i'm saying like we're in a very different age it's it's weird to
[04:17:13]  me the kind of stuff that gets funded now even like when you talk about like frameworks and stuff in javascript like where's the money gonna be like they're trying
[04:17:22]  to find tools that align with an actual paid product that actually were something like is the astro team gonna start doing hosting of some sort or like i don't know like this
[04:17:31]  is kind of you know like that was the gatsby story i don't know how well that worked for them right like languages another thing runtimes os's the problem
[04:17:43]  is good work is happening all the time out in the open and how do you actually make sure that it has the the money succeed this is interesting i wonder if this is actually
[04:17:56]  something over time that like we do actually really have to worry about because it's like i don't see this changing anytime in the short term and it's it's almost
[04:18:07]  like building a city on on rotting infrastructure like like we're building this huge machine of stuff that eventually no one knows how to maintain and no one was paid to maintain it
[04:18:23]  it's like a different type of collapse i don't know hmm this is a good question yeah is ruby considered it like when you consider dhh and like the whole
[04:18:43]  like his his whole company and that whole thing if my if my company wants to support solid team how would they want to do it that's interesting i we've been talking
[04:19:00]  about this a bit we we were thinking because there's a few you know prominent companies that are using solid right now that are um they want to see solid succeed because they they
[04:19:11] 're using it and kind of depend on it we should get a bunch of there there's there's you know there's at least you know a couple dozen you know that
[04:19:20]  i could see we could get together maybe create some kind of fund you know nothing too big but maybe like a tier where you could get you know direct access support something like that
[04:19:32]  but and it would be a nominal amount for the company but it would give us incredible amount to bring in more people from the ecosystem to like we can basically train people to
[04:19:44]  support these teams while doing development on solid at a part-time capacity for basically no money for for these companies but it would make such a huge difference to who could work on
[04:19:58]  the work on solid isn't it it's an interesting idea right because then everyone would see each other putting in you know 500 000 whatever kind of money a month and they
[04:20:09] 'd feel more you know confident about solid's future because there is this fund or this like special program i don't know it's an interesting idea yeah we should talk more
[04:20:20]  later anyway um yeah i don't know if i have much more than the node stuff i i did post this article earlier they explained the difference between islands or points and resum
[04:20:38] ability i talked all about the islands and server component stuff earlier uh as the course of the stream um i i think this is a good take also on resumability because
[04:20:50]  a lot of people misunderstand it i think probably the most interesting thing and the reason i end up writing this article in the first place i want to talk about just briefly is this
[04:20:59]  first part about interactivity um which is simply the fact that like what make when does the site become interactive i keep on hearing you know the quick guys talk about you know
[04:21:13]  because of they don't run any javascript initially then they must be the fastest to interactive and to be fair the work that quick does after the fact is actually um less
[04:21:24]  so that there is benefit but i was i i was arguing that i don't think the site becomes interactive faster necessarily with something like quick than it does with any other modern
[04:21:36]  framework um and if quick does that lazy loading thing then it actually doesn't is what my my argument is so they have to preload the code just like the rest of us
[04:21:48]  if they actually want the the immediate interaction speed which they do so really the biggest difference is what happens after the fact which i believe should be faster but my the my whole argument
[04:21:59]  here is most frameworks now whether through progressive enhancement kind of like what remix does basically when you see the page you can interact with it what happens afterwards is a different question so like
[04:22:12]  remix has been pushing you know and svelte kit we have progressive enhancement if you click on a button or an anchor tag or something and the javascript haven't loaded
[04:22:22]  well don't worry it still works it'll just go back to server and reload a full page that's kind of brutal if waiting for like you know 50 milliseconds more meant
[04:22:33]  that it would just do a client-side thing like picture if you have like a page with like my stupid hacker news demo where you're like switching comments and you click to
[04:22:41]  compress the comments and because you click too quickly the whole page reloads and you're the reason that the hydration took so long or the javascript took so long in the
[04:22:49]  first place is because you're on a really slow network and now you have to wait for that whole slow network to happen again you're in the subway whatever you know you
[04:22:57]  and so like in a sense i don't know if that's a good thing it's a good thing from the sense that it's a good fallback but it's
[04:23:05]  not like it's interactive in the sense like i don't think we should be measuring that as interactivity it's it's like if stuff fails it's good to have a
[04:23:13]  fallback you know but it's not actually the experience you expect so it's no replacement for hydration similarly solid does this react 18 does this like with their selective hydration if reacts
[04:23:27]  streaming stuff in react framework hasn't even loaded yet and you're typing in an input field they like capture or you click a button they capture the input events before uh it
[04:23:39] 's loaded and basically have the ability to prioritize hydration i believe synchronously immediately to respond to your input events even before the stuff's hydrated so in a sense the browser doesn't
[04:23:54]  miss these end user events even while the page is loading but it might take a moment to respond while the code is loading you know and as i said that's in a
[04:24:04]  way not unlike quick you know where that's lazy loading stuff like is that considered interactive i that experience might be considerably better than what i just explained in the remix scenario but basically
[04:24:14]  we're getting to a point where the page is quote interactive in a classic sense almost immediately but is that actually the desired experience and i think that's an interesting observation because
[04:24:29]  i was sitting there with jack harrington and uh amishko um having a having a beer in los gatos in san jose area and we were talking about this
[04:24:40]  thing because you know there's this contention about what you know quick makes your site interactive faster and it's like well what is interactive if everyone's doing these kind of
[04:24:52]  tricks anyway so i don't know i i the section about resumability is talks a lot about these kind of trade-offs because i think resumability is a
[04:25:06]  good thing but it's like i it doesn't actually solve the same stuff that server components solve it doesn't actually solve the the routing thing like in a resumable framework
[04:25:16]  that auto detects it sees that this is stateful that's fine sees that this is a stateful decision right here and then real then because these could be rendered from
[04:25:27]  that stateful decision it pulls this stuff into the client as it's needed it might not pull it right away but it'll pull it later if depending on the path you go
[04:25:36]  whereas with server components you could because of the rules of projections these would always be server rendered so you'd never send the javascript where resumability without any other
[04:25:49]  mechanism could always send the javascript it just depends on what you need so they these actually are not like solutions that are like competing at solving the same thing server components is
[04:26:02]  about routing resumability is is about i think it's in the conclusion here yeah i actually didn't yeah okay islands are architecture that aim to reduce javascript footprint
[04:26:15]  by up to 90 by explicitly denoting what goes into the client and also like by like reducing double data problem server components architecture extends islands with client-side routing and proper state
[04:26:26]  preservation resumability instead of focusing on how to reduce the amount of is that is hydrated looks instead to remove the execution cost of hydration itself so like these are just all not
[04:26:37]  solving the same things server components might be kind of an extension of islands but they are completely concerned with routing and state preservation and as i said resumability has nothing to
[04:26:47]  do with code loading and has everything to do with not running hydration what's as quick as kind of the opposite of live view yeah it's like it's funny like like
[04:27:07]  what it streams i i i mean we because all server state is lost yeah i guess it's an interesting way of looking at it i mean we try it's because at the
[04:27:26]  moment of transfer the client owns it owns everything which is the same for basically all of these solutions just because rcs are more explicit about it we have a better idea of
[04:27:39]  like what and what you know so to speak like we just know there's a guarantee this goes here there's something nice about that for a while i was even looking at ast
[04:27:49] ro like syntax because like those are completely different templating languages sometimes server components and kind components look too similar it was like i was like astro's different syntax is enough
[04:27:59]  that it's like very clear but there is a certain permissive thing on shared components which makes me like stuff like server components anyways that's that's really all i have
[04:28:08]  to say about that article sorry let me get back into here um um okay big news we got a couple more things we got versell v0 i'd not seen this
[04:28:23]  generate ui with simple text prompts so we're using ai here to look at hmm to to basically generate what you're shipping it's so funny i made a joke like this
[04:28:37]  in one of my uh slide presentations a couple months ago i was saying this uh recently never make jokes about the capability of api or of ai because in a couple months
[04:28:47]  like someone will actually do it like for solid's april fool's joke we we made the create hook because react just released the use hook like they'd made it they they
[04:29:00]  were like use you know you can use for context you use it for async it doesn't have hook rules and we're like the create hook you can just pass in
[04:29:08]  you know any string and the app will be generate like it will be generated for you so like it was the joke was like create a storefront that sells ryan carni
[04:29:19] ado branded socks and then it returned app yeah i guess here we are so a sas admin dashboard is that what i'm seeing already here discover unique features an online uh
[04:29:47]  auction site just because we're talking about ebay earlier uh i have to sign to versell does this cost me anything i'm not author i'm not authorizing verse
[04:30:02] ll to get from netlify uh it's invite only okay well that's no fun let's try this again um an online auction site okay that's no fun i
[04:30:32] 'm not surprised from a designer stand-up point and i'm sure it generates lovely um react components i think it's interesting i actually saw a tweet let me see if
[04:30:42]  i can find this tweet this uh the builder guys have been working on something let me see let me let me let me see if i can find this because this suddenly becomes much
[04:30:51]  more interesting builder was it was it steve who posted it let's look at our friend steve here he was talking about yeah he was talking about something along the lines
[04:31:09]  of like taking fig note designs and having them work in every framework um figma to quick to react to tailwind to solid to view to hmail will never be the
[04:31:21]  same here it is first velocity dot builder dot io interesting okay so this is what these guys have been up to i'm not surprised they mitosis is an incredible tool um
[04:31:42]  i always say uh trying to reach the lowest common denominator is hard but these guys have enough experience in this field that i could see them being able to build these kind of universal
[04:31:53]  um solutions and honestly sammy is a machine so invite only if you work at netlify oh that's that's fine it's it's funny there was a i
[04:32:15]  felt i felt that way sometimes about the server component stuff um like the server actions you know you know that that stuff was like floating around versell for like three four months but
[04:32:26]  like anyone else who hosts next do you think they got access to it no no so like percel gets to do a big launch you know with with uh next you know
[04:32:39]  and be like look we have this new server action fund and any of the other supporting um frameworks you know platforms you know have no clue and then have to go you know spend
[04:32:49]  the next amount of time supporting it's there it is funny they they it's open source but if if you talk to basically anybody who works on any of the platforms that
[04:33:02]  run next the the difference between next in a docker instance and next number cell is considerable so yeah and it makes sense why it is there's there's direct ties to what
[04:33:16]  you can do with the infrastructure so it is oh wow this is news i did not realize that nick was leaving hmm i should talk to him anyway um remix v2 what
[04:33:45] 's going on i've been seeing hints of this like the flat routing for ages now but let's let's see what what's going on here views on semantic versioning
[04:34:02]  and building stable software and scrub approach moving remix forward without causing you to rewrite your app when new major versions yeah i think that's kind of one of the funny things i find
[04:34:13]  quite often and it's something we're experiencing right now with solid different projects take different approaches but ones that care about semver generally the move to v1 take some time
[04:34:24]  but then you release it the move to v2 the move to v1 is like is a production ready the move to v2 is like how do i make this so that
[04:34:33]  v3 and v4 and v5 um transitions are smooth because usually v1 so focused on production isn't focused on what v2 is going to be like and then once
[04:34:44]  you get to v2 you're like oh you're like oh man i can't put everything that i want to put in v2 into into v2 just because of
[04:34:50]  like how big of a shift it is so i can relate to that yeah if you want 8 and 10 aligned with rack router 11 added streaming flat routing okay what about r
[04:35:04] cs if you're playing for will go best against answer tdlrs we are optimistic about adding support for rcs and remix version 3 okay so this is not now
[04:35:18]  v2 relies on current stable react features yeah it's interesting because i've talked to these guys before they especially because they're like hydrogen was an early rc um users
[04:35:32]  so there's there's definitely some pessimism around rcs around that camp you know so i i've i've i they have things that show the issues they didn't want
[04:35:45]  to publish it because they like and it's good that they didn't because i think it was rocky relationship with react i think it had to heal the thing is if if remix
[04:35:54]  doesn't get on board alongside next there's a chance of fracturing the react ecosystem which hurts react which hurts remix it's a very weird um tension uh there's a
[04:36:08]  while there that i was like oh this might actually turn into like almost like a fork kind of scenario but i don't think i i i i think we're past that point
[04:36:17]  even if they have personal feelings they'll support the react features because they want to support react yeah see they're talking about like supporting hooks gave us a different way courage on
[04:36:30]  the change we've seen rcs since we initially evaluated and particularly rcs async components look a lot like remix loader married a component decided to ditch the obnoxious
[04:36:39]  third wheel use loader data yeah so you're right yeah so that question i'm sure the remix guys are thinking about similar stuff that i've been thinking about moving your
[04:36:50]  loader code into your async components but watch out for data dependency waterfalls did i already mentioned this should be its own post it really should yeah see this is this is
[04:36:58]  the sticking point i mentioned this before the remix guys are very aware because of the mistakes made in react router 4 that they do not want to go from this to this right
[04:37:16]  this this remix today was streaming react server comments tomorrow was dreaming this is not what remix wants and the default patterns that versell has kind of been pushing with next basically point
[04:37:37]  at that yeah the yeah the pound destruction this was a good one the pound discussion someone asked about signals in react and i thought that was pretty funny anyways that's it yeah
[04:37:53]  so really let's look at the upgrade guide because we built something in remix previously um okay so change some package stuff change the entry slightly change the flat routing convention i kind
[04:38:22]  of like it i also kind of hate it but i i i i think this is it's a lot more visible and it's alphabetical which is key this is probably my
[04:38:31]  second favorite routing convention it's funny i actually like the old v1 version i don't know why people have such a hard time with it i think it might be that
[04:38:41]  people are just used to like myself are used to like the v1 remix pattern which the same as nuxt same as solid start like we've been using these patterns for years
[04:38:49]  because it mirrors how it actually works in the router mechanically but i can i obviously the feedback led there so i should pay attention to that headers and meta this is something that
[04:39:03]  i'm interesting in because i was using a lot of tags and i think that pushing it into the router is smart they okay so they wrap it for v1 what
[04:39:23] 's what's what does v2 meta look like for meta you will now return an array of descriptors and manage the merge yourself oh man these this is kind of smart
[04:39:45]  this this has been kind of the challenge here um because i honestly have no idea how to merge this stuff properly because it doesn't it doesn't really work there's a few
[04:40:00]  situations like this where like any you can choose something reasonable but it just doesn't actually like it's just not foolproof putting the user's hand is smart okay okay
[04:40:18]  meta matches arguments catch an error boundary so they got rid of the catch boundary and now using air boundaries good that aligns us a lot more okay we're gonna use
[04:40:54]  navigation they have to change from the honestly transition api has the worst name ever i think we're gonna change this in solid to get away from react remix has actually changed their
[04:41:05]  api to use navigation instead of use transition yeah mostly minor stuff it looks pretty good route links properties should all be react camel case values instead of h1 lowercase values
[04:41:24]  these two values snuck in as lowercase and b1 oh i see whatever all right this is this is good it sounds like this they just they did a lot of like
[04:41:41]  the the like hard changes here in terms of like doing the migration like stuff for the routing and stuff while keeping a backwards compatible path but they didn't it's a line this
[04:41:55]  isn't an alignment release it's not like a new features release but that's good i like it very cool all right people still live out there honestly i think this is
[04:42:15]  all i got this week as i said it was a short one i've been working really hard on solid start um the vinci branch is coming along quite nicely with the new
[04:42:27]  nitro underpinnings um we're making good progress uh alexis has been working on the some core stuff for first for i think a solid 1.8 release
[04:42:41]  coming up uh which will help with the some of the island stuff we're going to do we he's been working on a streaming capable serializer um we already do streaming with
[04:42:51]  our with our like built-in mechanisms i built installed solid but he he's generalized our serializer so that basically any place that you write data to the serializer can handle
[04:43:02]  streaming promises even nested it's very cool stuff um that's going to open up a lot more capability in terms of what we can serialize and what what we can
[04:43:12]  stream including um we're looking at a format of of serializing jsx essentially it's still to html as templates essentially but um being able to kind of like send
[04:43:23]  that over the wire um we could do it already but this but actually making it part of the core mechanism so that like it just works so this is all foundational pieces for
[04:43:36]  our island routing solution so i'm looking forward to that so as i said next week we're gonna have nakil kind of bring us up to date with some of the work
[04:43:49]  that we've been doing to build the the underpinnings for solid start all right i think that's the stream so uh thank you all for joining me today and uh
[04:44:09]  yeah till next week see ya