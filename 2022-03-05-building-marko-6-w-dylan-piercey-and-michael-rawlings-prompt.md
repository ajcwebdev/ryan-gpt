---
showLink: "https://www.youtube.com/watch?v=Y22xf8EjioE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Marko 6 w/ Dylan Piercey, and Michael Rawlings"
description: ""
publishDate: "2022-03-05"
coverImage: "https://i.ytimg.com/vi/Y22xf8EjioE/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, HH:MM:SS, which means the transcript is HH hours and MM minutes).
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

[00:00:00]  Hello. Welcome to my stream tonight. I'm very excited to be talking again about Marco. Obviously, there's a little bias there. I work on the Marco team
[00:00:10] . But, you know, I would say maybe a month or so, maybe a month and a half back, I did a Marco-specific stream where I can introduce people
[00:00:20]  to kind of like the basic concept behind Marco. And it kind of kicked off like the next several streams that I did over the following weeks. We looked into React server
[00:00:30]  components. We looked into Quick. And yeah, I'm not going to lie. This partially was all just to kind of establish the kind of knowledge base I wanted to have
[00:00:41]  to actually talk about the next version of Marco, Marco 6, which I'm very excited about because I think it brings a lot of really neat innovations beyond what Marco has already
[00:00:52]  been doing. The stuff that I was talking about before was largely Marco has been doing since I think 2017 with Marco 4. So it's going to be really cool to
[00:01:02]  kind of take a first look at, I mean, I've already given some kind of previews, but actually look at Marco 6 in action. But yeah, before we
[00:01:11]  kind of go there, I'm going to give it a minute or so before we get into the whole This Week in JavaScript. If you're here, how do you
[00:01:20]  say hi in the chat? Let me see who's here. Hello. Yeah, I'm actually just playing with some different banner styles this week because the old ones are
[00:01:42]  taking up the whole screen. So give that kind of a little go. Okay. Look, looking better. Hi. Thanks. Thanks for joining me today. As I said
[00:01:53] , this one is a little bit special for me because we've been really working on what I think is really interesting stuff. And I've been talking about it, but
[00:02:07]  I haven't been able to showcase it. So I think it's going to be a lot of fun. So we're going to get started here in a minute. But
[00:02:15]  yeah, I don't know. You know what? Let's just do it. Let's get into this this week in JavaScript. Because honestly, it's been this
[00:02:24]  last two weeks. I missed this. I skipped this stream last week. And it was for a couple of reasons. But honestly, I just I didn't want to add
[00:02:34]  to the noise that was going on. Unfortunately, and it looks like it's gonna last a while. But you know, there is that the conflict going on with Russia and
[00:02:42]  Ukraine. And I really didn't feel right streaming last week when that was just unfolding. Unfortunately, it seems like situations only getting worse. So here we are. But
[00:02:53]  you know, we're going to do what we do. And you know, our best wishes go out to them. Okay, so yeah, let me show some stuff
[00:03:07] . So kind of going back about two weeks, this really kind of started a lot of solid news. As I mentioned previously, we stated JavaScript survey happened. And the other
[00:03:20]  big thing was right around the last stream, we actually opened the submissions to Solid Hack. And we've already seen the first several submissions coming in. It's really cool to
[00:03:29]  kind of see what people have been building. I've been trying to retweet stuff as people submit it. So if any of you like have projects, you know,
[00:03:35]  go ahead, share them on Twitter, tag us hashtag Solid Hack. And I'll look for them and try and retweet them and get more visibility on them. Really cool
[00:03:44]  stuff going on different different projects was another thing. Yeah, I mean, a lot of solid news. Vercel sponsorship. A lot of people seem really excited about
[00:03:54]  that. It's definitely cool to have them. Now we have all the big cloud providers behind us, Netlify, Cloudflare and Vercel. A lot
[00:04:05]  of real interest in Solid. So I'm looking forward to see how I can work with them, you know, and how the team can work with them in the future to
[00:04:13]  make Solid even better. You know, some teasers from Capacitor for some mobile Solid. Honestly, I'm just so stoked at all these projects coming in.
[00:04:22]  And you're gonna see a ton of these Shacker UI and even some Web3 stuff going on. So a lot of really cool projects been kind of going on with Solid
[00:04:34] . Another thing is we were on Hacker News. Our article went to number one, which was kind of a funny article. I'm going to say, I mean
[00:04:46] , it's very similar to the talks that I gave previously, but if you didn't see it, it's kind of kicked off this whole discussion again about signals versus hooks
[00:04:59] . And it's all about like all the pitfalls of trying to do a set interval, you know, and how much more straightforward it is with a reactive library. Like
[00:05:08]  this isn't Solid only that acts like this, but it did stir up a lot of conversations. I thought, I thought, I thought there was a lot of interesting
[00:05:16]  talk. I was actually kind of surprised about the response from it because I said it was number one Hacker News, a lot of attention and people were generally really positive.
[00:05:26]  Like it's even spawned people in the industry, like Andrew Stoltz, CritterCycle.js, you know, comparing stuff. And even Adam R
[00:05:34] ackis had some nice stuff to say about Solid, which isn't always that common, which spawned out pretty much every single framework, um, to, you know
[00:05:44] , give their example. And God, this meme came back again. Everyone knows how much I love this meme. Just put the script tag in, you know, if you
[00:05:53] , whatever, make things even, you know, we got this felt version. Now we got, um, you know, we just, so, so many people just sharing
[00:06:02] , sharing their stuff. Right. I think, I think there's a, a view version in here. View is almost identical to this. There's a view version
[00:06:10] . And then Rich is being cheeky as always telling everyone how it's literally 60 more percent more characters than the spell version, which meant, you know, what happens whenever
[00:06:21]  someone gets cocky about line numbers. I have to pull out Marco because if you want to write less code and we'll see more of this tonight, it's,
[00:06:30]  it's, it's difficult to write less code than Marco. In fact, you guys even made me pull out the, the concise mode version. I mean, I,
[00:06:41]  you, you can say what you want, but Marco's tag syntax with concise mode, which is our kind of pug syntax is incredibly, incredibly terse. Um,
[00:06:51]  so if that's your cup of tea, I don't know. It's mine. I think I prefer the tags. Look, um, this is, this is,
[00:06:57]  this is, this is, this is definitely less characters than pretty much anything out there. Just it was, it was, it was an interesting little conversation. Um, definitely
[00:07:06]  to kind of have that attention on syntax again, it's funny because usually that's not where I put my focus. I care more about performance and whatnot, but,
[00:07:14]  uh, you know, it definitely, it definitely was a good, you know, solid hit 15,000 stars on GitHub due to this kind of attention, got more,
[00:07:23]  more likes. And I think we're at 15.3, we're already up another 300 stars in the last couple of days from that, just continuing growing interest. And
[00:07:30]  it's been really awesome to see. Um, it also, we also had some interesting com conversations with Ryan Florence and the remix guys. It seems that's where my conversations
[00:07:41]  go. this week are in general recently. Um, just talking about the differences between routing. And I think we're going to get into that tonight because basically there's
[00:07:50]  this whole idea of like, he's completely right. One of the biggest problems we have in the web architecture, um, especially with single page apps is waterfalls and when
[00:08:00]  to fetch. And these things are solvable, even without server rendering, they're, they're solvable without suspense to a certain degree, although that makes certain things easier
[00:08:09] , but there are lots of ways to solve these problems. And, but a lot of naive approaches to data fetching, um, make them very unoptimal.
[00:08:18]  So good conversation, good thoughts there. Um, and yeah, I mean, there's, there's a lot of conversations. I think that's really what this week in
[00:08:30]  JavaScript was about. Um, the, the last one I kind of want to bring up here for a moment is this hacker news story. This one had even more points and
[00:08:39]  comments than the, than the solid one, um, which was single page apps were a mistake. And this is a, this is a pretty crazy one because I mean
[00:08:50] , it wasn't a badly written article. And the author was just saying that there's a time and a place and they shouldn't be the default. Um, but generally
[00:08:58]  speaking, they kind of have become the de facto default. People do want them to, to, for building stuff. And as much as a lot of people on the
[00:09:07]  MPA side, um, want to return to that history. We're just not quite going back there. Don't get me wrong. We are going back to MPA
[00:09:15] s, but like, I'll show you something. What I mean, I'm going to search in this article and put it in the word Marco. You're going to
[00:09:20]  find it zero times. I'm going to put in the word Astro. You're going to find it zero times quite quick. And the reason that you don't
[00:09:28]  see any of that, even though there's fricking 580 comments is because most of the MPA side is sort of, uh, not JavaScript on the backend. Like
[00:09:43] , that's why they, they want it. It isn't about because they care about MPAs necessarily, they do. But this kind of mentality that maybe JavaScript
[00:09:51]  doesn't like belong on the server or whatnot. And that's why it's kind of interesting that even in the MPA conversation, and I mentioned this in our previous stream
[00:10:00] , Marco's kind of been, been the odd man out. Now there's more frameworks that are doing MPAs in JavaScript. And it's, it's, it
[00:10:06] 's kind of unfortunate because MPAs, in my opinion, within JavaScript are the secret to how you actually unlock sending less JavaScript. Because yes, sure. You can
[00:10:15]  send less JavaScript with your Rails app or PHP, but you're managing two apps. It's a different thing. If you actually want a chance at getting that best of both
[00:10:24]  worlds experience, it's only happening today. I think with, with JavaScript on the server, WebAssembly in the client is the other option, but that hasn't been
[00:10:34]  really proven viable yet. We've looked into that in the past too. So I think it's, it's, it's interesting because they're talking past each other
[00:10:42] . And I I've talked about this before in the past, but I think, I think we, I think these arguments are going nowhere. I think we need to focus
[00:10:53]  on the future. And in order to do that, we have to actually embrace the benefits and the, you know, the good parts of each side and understand what the
[00:11:04]  trade-offs are and having people go on and on about the return to the rails backends or whatever. It's just, it's, it's the same thing.
[00:11:13]  It's not like they don't have a point, but as I said, it's, we're not meeting anywhere in the middle. And as I said, it's
[00:11:20]  unfortunate because I think solutions that potentially offer these solutions on JavaScript side are kind of getting overlooked by the MPA crowd that would otherwise probably be pretty into this. It's
[00:11:31]  it's, they've kind of aligned themselves more with web components and low build and that side. And I'm, I'm sorry, but that's probably like, that
[00:11:40]  doesn't change anything. That's just a sure way to end up being in the same mentality we were in, you know, yeah, a decade ago. Right.
[00:11:50]  Cause sure, we didn't have web components, but it's, it's that same, that same thinking of almost underwriting JavaScript. No, you gotta, if you
[00:12:00]  want to embrace MPAs, if you want to get away from sending too much JavaScript to the browser, your best bet is to actually embrace JavaScript. I know crazy,
[00:12:08]  but that's, that's what we've seen. You've been exploring it with me the last several weeks on the stream. And tonight is no different. We're
[00:12:15]  going to bring in the guys from Marco to actually talk about that. I'm super excited about it because you have to understand if you put this in context, I've been
[00:12:23]  talking about this a lot on my stream, obviously I'm, I'm, I'm, I'm big on, you know, partial hydration and, you know,
[00:12:31]  the different technologies that, that we have potentially have here to, to work on, to work with, you know, multi-page apps and, and whatnot, but picture
[00:12:42]  the difference that is for the guys working in Marco. They've been doing this years longer than really anyone else in the field. I mean, Mishko on the last
[00:12:54]  stream was telling us how he'd been looking into this stuff, you know, for quite some time. And he did a talk in 2019, basically laying out quick.
[00:13:02]  And the thing is Marco has been doing this, these sort of techniques, maybe not as advanced as we got today since 2014, like, and, um, both my guests
[00:13:14]  today have been actively working on the Marco project for, I think five years and six years respectively. So this is a, this is some of the best expertise we have
[00:13:24]  in the industry on this hydration problem and MPAs and whatnot. So it's, it's gonna, it's a real treat for me to introduce, um, both
[00:13:32]  Michael Rawlings and, uh, Dylan Piercy, um, to add them to the stream here tonight. So welcome both of you guys. I am so stoked to
[00:13:40]  have you on the stream. Obviously I get to work with you every day. So yeah, I'm excited. That's awesome. Yeah, no, this, this
[00:13:53]  is, this is gonna be a lot of fun because I, I want, I want you guys to actually, um, in the, in the audience to, as we
[00:14:01]  go along and do this, ask your questions, ask the controversial stuff, because honestly, these guests will give you some of the best answers you see. And honestly,
[00:14:08]  they'll probably argue with each other. Like this is, this is how it goes. Um, seriously, they, they work so awesome together. And a lot of that
[00:14:18]  comes in the form of disagreement. Um, which is funny because, um, I, I think you guys will probably witness this a bit, but it really gives a level
[00:14:27] ed look at the whole perspective when you have, uh, both sides of the argument coming through. And, um, as I said, don't feel free to ask questions
[00:14:34]  as we go along because I think it's gonna be a lot of fun and there's a lot of potential to, to learn here. Um, but yeah, before
[00:14:41]  we go to that, actually I was, I figured the easiest way for us to actually get started on this conversation before we even talk too much more about Marco, um,
[00:14:50]  is like, I, I want to ask the question, um, how did you both get into Marco? Like how, how, how did, how did, how did
[00:15:01]  you find yourselves working on Marco? So I don't know if you want to go first, Michael, but just give us a little background. Sure. Um, so
[00:15:10]  I kind of randomly found Marco. I was looking for, um, a, a templating language really that supported, uh, streaming, um, and basically turned out
[00:15:23]  that there was dust and Marco, um, for, for no JS. Um, and so I started playing around with Marco, um, a little bit. I was,
[00:15:36]  um, on a windows PC at the time and found a bug related to the windows line ending. So my first PR was to, um, to fix that. It
[00:15:48] 's always, um, it's always windows. We've had many more, especially since I switched away from windows. Um, and yeah, uh, I got talking
[00:15:59]  to Patrick who was the original author of, uh, Marco and eventually, um, joined the, the Marco team. The, the thing that actually I really enjoyed about Marco
[00:16:12]  from the start. Um, and I think what Patrick kind of saw and was, um, kind of interested in was the, the compiler because, um, before I
[00:16:26]  even jumped into any of the like client side aspect of it, um, I was trying to build like a visual CMS where you could kind of annotate the HTML and then
[00:16:40]  it would swap it out for like editable, um, components of, so you could just like type on, you know, as you're writing the HTML, you
[00:16:49]  could annotate it, be like this title's editable and it would swap it out with a component that would like talk back to the database and that, that CMS never
[00:16:59]  got released, but a lot of that was done through compile time transforms that you could just put an attribute on there and it would actually like do a bunch of, um,
[00:17:07]  stuff through the compiler to transform things. Cool. Cool. No, that's, that's, and then when Patrick just poached you at that point, he's
[00:17:16]  like come work on my project or. Yeah. Um, it, it happened to be really good timing. Um, so it worked out. That's awesome. And Dylan
[00:17:26] , how about you give a little background for yourself? Yeah. So for me, um, really before I joined Marco, I was working on a different framework that was a
[00:17:37]  router that was designed to essentially, um, act as an isomorphic router. So it would pick up where the server left off kind of thing. And my whole
[00:17:47]  kick at that point in time was progressively enhance everything because I had to support older browsers, including I nine. And I really just didn't want to do that. And progressive
[00:17:56]  enhancement seemed like a good way to do it. And then the other thing is I was kind of on the same train as, um, the remix guys are today where
[00:18:03]  it's like, if the experience is progressively enhanced, who cares how much JavaScript I'm sending, I'm sending a whole router, um, to the browser. But anyways
[00:18:11] , through that router, I ended up, um, looking into Marco as I was adding integrations to the router. Um, and it was mostly a react framework.
[00:18:18]  Uh, it was a, a framework agnostic router, but I was using it with react at the time. And then I realized react was too large. Cause I
[00:18:26]  started going down the path of like, okay, this is too much JavaScript for the browser. Um, and then eventually kind of landed on Mark or, uh, learned about
[00:18:33]  Marco and tried to integrate it and got talking with, uh, Michael and Patrick and rest kind of history there. Okay. Cool. Yeah. So that, and when
[00:18:41]  was that? That was back in what? 2016 time period? 15, 16, 17, I think. Yeah. In 2016, Dylan actually sent me a message, uh
[00:18:52] , about Rill and I totally ignored him. Rill being my router. Yeah. Um, cause, uh, I had worked on a, a similar project. It
[00:19:03]  was funny cause I had actually used some of, uh, Dylan's open source projects even, uh, a year or two before that. So we'd had this like
[00:19:12] , kind of like never actually interacted with each other, but we had like looked at, you know, each other's projects and like even used some of the same ideas.
[00:19:22]  So it was kind of, um, interesting. Yeah. I was obsessed with routers at the time. Um, and in my brain, a lot of the things
[00:19:34]  that were put into that router, uh, are ideas that are similar in concept to what Remix is doing today. Um, but we've never been able to crack a
[00:19:43]  router that works, uh, in the same way with Marco. So yeah, I'm really excited to talk about that particular piece today. I hope that. Yeah, we
[00:19:52] 'll get to that definitely a bit later on, but I mean, where we probably should start is cause hopefully some people watched the previous stream where I dug into Marco, talked
[00:19:59]  about some of the benefits. Um, I can't remember if I showed that great partial hydration demo with Remix and Marco where Marco is like twice the speed. Um
[00:20:07] , it, it, yeah, it was just the partial hydration has a huge impact, not only on JavaScript execution, but it has, it can have a huge impact on
[00:20:18] , um, uh, uh, data serialization. And I think we're going to come into that a bit today. So how about we, we're going to talk
[00:20:25]  a minute about, um, let's I'm trying to think about how the order I want to do, but we probably should just kind of introduce the main topic today.
[00:20:31]  Cause we're talking about Marcos Marco six and how it goes in the future. So if, if, if either of you, I know you guys will probably fight
[00:20:38]  for it. Um, can you, can you talk a little bit about Marco six and what the high level goals are with it? Yeah, I can take it. Um
[00:20:46] , yeah. So Marco six is really, uh, it's a huge release for us, but I mean, ultimately our two goals kind of from the beginning is how do
[00:20:55]  we deliver like the best DX while maintaining the performance characteristics of a multi-page app that is sending like as little JavaScript as possible and having, you know, as fast
[00:21:06]  as an experience as possible. And that's quite challenging to do. And obviously, you know, Marco is kind of in its niche. Um, but so specifically what's
[00:21:14]  gone into, um, Marco six is sort of a rethinking of our API to, uh, make it so that a whole bunch of things are possible. And I
[00:21:23]  think without showing it, it's hard to explain, but it allows for things like aggressive co-location and also much greater, um, compile time static analysis, which
[00:21:34]  will allow us to do crazy things like aggressive tree shaking, um, and a whole bunch more. So that's really what it is for us. It's a two pr
[00:21:42] onged approach of let's make the DX as good as we can. And, um, let's send as little as little JavaScript to the browser as possible. And
[00:21:49]  the really interesting thing about this current iteration of Marco is that it's really, really piecemeal. Like it's, it's going to be splitting hairs going past this level
[00:22:00]  of, uh, enhancement, which is, which is really cool. And the architecture that we've kind of landed on, um, has opened some other doors that I think
[00:22:08]  is really interesting as well. Right. Yeah, no, that, that makes a lot of sense. And we've been looking on the stream about some, you know
[00:22:16] , perhaps similar technologies. And the, one of the, I guess things is how we achieve that with Marco six. I think we almost, I think we were looking at
[00:22:25]  it almost bullet pointed it down to maybe two or three specific types of technological approaches. Can you, can you speak to that? Um, maybe to Dylan or. Um
[00:22:37] , yeah, so you, you mean as far as like the actual optimization side of things? Yeah. Yeah. Okay. So, I mean, there's really one core
[00:22:46]  thing, um, as far as Marco is concerned, related to sending his little JavaScript to the browser today, which is partial hydration. Obviously, that's been talked about
[00:22:54]  on this stream before and really all it is, is, you know, Marco being the, being a compiler can look at the tree and determine what the top level components are
[00:23:03] . And so we're able and by top level components, I mean, those that have, you know, client side behaviors, um, anything that doesn't have a client
[00:23:10]  client side behavior stays on the server. That's the goal, right? So we want to rebranding this concept islands. Uh, yeah. So, so islands is
[00:23:19] , is a part of it. Um, So with that, I mean, essentially what we're doing is, you know, sending these little islands, we automatically determine
[00:23:28]  what they are to the browser, re-execute just those. We have the JavaScript for just those. And you know, it's a, it's a pretty
[00:23:35]  big, significant improvement, but what we're doing in Marco six, which is, um, pretty awesome actually is dividing up your application instead of by these, like, you
[00:23:44]  know, this is a client side component, this is a server component and telling what that is. Instead, we're splitting things up based off of, um, the
[00:23:51]  reactive graph at compile time. So looking at, um, all of the dependencies for any expression that's within the template and we split up your, um, the output component
[00:24:01]  into all of these different functions that can be independently tree shakable. So what that ends up meaning is that instead of looking at things on a per component basis, is
[00:24:08]  this one sent to the browser? Is this one on the server? Um, we're able to actually look at, okay, you've defined some state here. It's
[00:24:14]  used over here. It's used over here as derived here, and it ultimately makes it into this place. And we can actually send if, if it's necessary,
[00:24:21]  if that part can re-render, we can send just those chunks of functions to the browser, which is actually huge because you can imagine a really simple component that, you
[00:24:31]  know, has some state in it nonetheless. Um, but maybe it has like some icons, some big SVGs. Like, who knows what? There's lots of
[00:24:38]  static stuff in our, in our components. And all of that can now be tree shaken automatically without you having to, to think about it. And, and that's huge
[00:24:46] . So that's one of the, um, optimizations is really just breaking things up into a million different pieces based off of the, their dependencies. Um, and then
[00:24:56]  the other piece of it is, uh, basically the resume ability side of things. And so, you know, obviously if you think about hydration and this has been talked about
[00:25:05]  in Ryan's stream before with quick and so on, the ideal world for hydration is pick up where the server left off. Don't redo work that the server did.
[00:25:14]  So what did the server do? The server rendered a bunch of HTML. What can't the server do? The server can't add event listeners and the server can't run
[00:25:20]  your life cycles or event or, uh, uh, your like effects and stuff like that. And so how do we get to a system where essentially the browser is just running
[00:25:29]  the effects and attaching event handlers. And essentially one of the other things we've done with the compiler is it has knowledge, not only of their, uh, like
[00:25:39]  all of the dependencies, it also knows which expressions, um, should run in the browser versus can be executed only on the server. And so we split things up in that
[00:25:49]  way as well. I think showing the actual like compiled output for that might make things make more sense, but essentially what happens is you render on the server. We,
[00:25:58]  um, instead of like tracking, these are the top level components for like, here are some functions that you need to execute once we get to the browser. And here is
[00:26:06]  some serialized scope information for those functions. Okay. Then the browser loads, it gets that bootstrap. It we've automatically just bundled the appropriate functions and it
[00:26:15]  executes them. Um, and so instead of doing this, like re-render dance, Marco guarantees that your components never re-render even across the transition from server
[00:26:24]  to browser, which means that, you know, time to interactive is a bunch faster. And we're just overall doing less work, uh, during hydration on top of this
[00:26:32]  whole sending a whole bunch less code. So those are really the two pillars of our performance side of things. No, that's, that's really cool to hear.
[00:26:39]  And, uh, I mean, some of that stuff will sound familiar to some people because it's almost like making an isomorphic version of the, some of the philosophy
[00:26:48]  that we had with solid where components run only once, except this time it's on the server and on the client. And the reason you can do this is really similar idea
[00:26:56] . It's, it's the knowledge of the reactive graph. And I think that's really powerful here, but before we, we're going to demo this in a minute
[00:27:04]  and just kind of play around with it before that it's there's going to be this inevitable comparison to quick. And I actually, as you guys know, I had
[00:27:11]  Mishko on, uh, two weeks ago and he kind of came up with this list of things that he felt, um, were essential. And I, I mean
[00:27:20] , these are important pieces of the puzzle and and they're definitely essential to, for, uh, the solution that quick has done, like to make it resumable and
[00:27:29]  progressive. Although we're talking about resumable and partial instead of maybe necessarily progressive, does that change this list at all in terms of what needs to happen? Does
[00:27:38]  it change any, any kind of the rules here or how do you guys feel about this? Yeah. I mean, when I was looking at this list, um, when
[00:27:48]  you guys were going through it, it's like, yeah, there's some of these things that feel a little quick specific, but there is like the overwhelming majority of these
[00:27:54]  things are applicable to sort of both solves, which is cool. I think we're working on, you know, sort of similar problems, but like, as you said,
[00:28:01]  one of the things that we aren't doing out of the box is this whole, like, um, uh, progressive hydration. Uh, we still will have like as
[00:28:09] ync and lazy hydration and all that stuff. But anyway, so I think it's probably makes sense to just go through the list real quick, breaking up code into chunks.
[00:28:18]  I think comparing it to quick, you know, quick is breaking things up based off of those, you know, dollar sign functions, essentially. Um, and organizing your code
[00:28:25]  that way. The Marco compiler automatically breaks up your code based off of its like actual dependencies, which is going to be a bit smaller than what quick is able to do
[00:28:33] . Right. Um, you know, quick is going to send a template when it needs to re-render. Marco is going to send just the expressions that are related to
[00:28:40]  the actual, um, change or state that you, uh, updated. So that's, uh, one difference there. Um, no centralized bootstrap. That's
[00:28:48]  something that Marco has, you know, not had pretty much since the beginning with partial hydration, you don't need centralized bootstraps or pretty much any partial hydration.
[00:28:56]  Yeah. So any partially hydration. So yeah, we've got that serializing event handlers is important. Um, like I said, in my explanation of resume ability,
[00:29:04]  we actually need the ability for the server to say, Hey, here's some functions that I need you to, uh, serialize and execute. Um, and so the
[00:29:11] , the way that kind of works in, in our solution is all of these functions that we know are possible to make it to the browser, essentially get their own ID and
[00:29:18]  the server knows what those IDs are. And so we can say like when we're outputting our Sierra, we have a custom serializer and when we're serializing
[00:29:25]  stuff, we'll be like, okay, this is a function and its idea is this, and this is what its scope is. So yeah, that's definitely something you
[00:29:30]  have to solve. And then restoring app state, uh, definitely. Um, if you want to continue where the server left off, um, validating on state change that
[00:29:39]  comes back to the reactive system, right? So yeah, definitely, um, out of order rendering is important. Um, but I don't know that it's necessarily
[00:29:48]  like critical to it because the key to the out of order rendering, the importance there is because that's when you want to break up stuff in terms of, uh, like
[00:29:55]  when it loads in the browser, like that's the progressive part. Like, can you load something further down the tree rather than higher up the tree? But if, if
[00:30:03]  you, what, one of the key differences here with, with the partial hydration mentality is if you know something will never run, um, in the client, like if
[00:30:11]  you just know that a hundred percent, you've already eliminated such a majority of the code that like, we, we've seen this at eBay where, you know, it
[00:30:21] 's easy, like pages vary from like 60 to 80% code reduction. Um, and with this, these new optimizations, we, we might even be able to e
[00:30:29] ke out another five to 10% on, on, in some of those cases. So, um, it, it does put less pressure on this. This is imp
[00:30:37] , this is important if you want, if you, if you're unclear, like stuff could be client side. So once you get into that, like the stateful stuff
[00:30:46]  out of orderism is basically the key to being able to load stateful stuff, um, break it apart further. But if you're not as rude about that, then
[00:30:54]  this might not be as important. Okay. Right. And I think this is a key differentiator between quick and what Marco is doing because quick doesn't really know what
[00:31:03]  server only they have to assume that any code could potentially be loaded, um, in the browser. And so they get around that by essentially lazy loading everything at every step of
[00:31:13]  the, um, every step of the way. So the difference with Marco is we, you know, at compile time, determine what all of the things that could possibly update
[00:31:21]  in the browser is. And so you're getting a much smaller subset of things like the JavaScript bundle is just way smaller, um, right out of the gate because we
[00:31:28]  know there's so much that doesn't need to be sent to the browser. Right. And this, this rule is probably one of the most restrictive ones too, because this
[00:31:36]  is the reason why there's no render props or you have to eagerly evaluate. It's funny. It's interesting because Marco does analyze that, right? When it can
[00:31:44]  tell when something is a render prop or when it's static, so it can make a call. So it's Marco still breaks things out that way if it's able
[00:31:53]  to, but it doesn't force the developer to write their code that way. Right. Right. Right. Yeah. And again, it's like aligning with our goals
[00:32:00] . We don't want to have necessarily this like crippled language that you can't do X, Y, or Z. And we really want to have a language that's
[00:32:09]  like, wow, this feels like I'm writing a spa. And these optimizations just happen without, you know, having to think about it. Um, and so
[00:32:15] , yeah, that's kind of a mentality difference. And in general, I would say, as far as, um, this out of order rendering thing goes with Marco,
[00:32:24]  because we're able to make the bundles so small, um, I think it probably makes more sense to move the control over when and how things get loaded into explicit user
[00:32:35]  land. Um, yeah. And so like, you know, if, if you're already at the point where you're splitting hairs, as far as bundle size goes
[00:32:45] , like, you know, Misko said, like make 20 KB bundles and all that stuff. It's like, okay, well, if our bundles are
[00:32:50]  on average going to be 20 KB, cause we're sending so little, it's like, okay, well, is there really a point in, um, splitting
[00:32:56]  it out? Um, the biggest app at Google, I mean, I, I believe there are real apps out there that are in that state, but interestingly enough, maybe
[00:33:06]  not even in large scale e-commerce. I mean, even, even in eBay's use case, we might not even necessarily hit that scale. Right. And so
[00:33:15] , um, I think that it is like, we're going to have the application basically split up so much that it's going to be simpler to just be like, okay
[00:33:24] , you know, this section, I'm going to hydrate, um, independently and lazy load this section, which is going to, when we get into the router,
[00:33:31]  we can talk more about what that kind of looks like. But essentially, um, I think it's going to be small enough that it's going to be easier for
[00:33:37]  the developer to reason about like, yeah, this section could be loaded async. I know it's a bit expensive in my profiling or whatever, but the default that
[00:33:44]  Marco is going to give you is a app that is literally only the things that are necessary for the browser. Right. Whereas, um, again, quick by default assumes that
[00:33:54]  everything could make it to the browser and it tries to lazy load stuff. So it's a difference of mentality there. And that probably affects a few of the, a couple
[00:34:02]  more here, we have observing side effects, which I think is still just reactivity. Um, and then idealizing bundles, right? That's a big part
[00:34:10]  of the quick, uh, solution because, because it's so mix and match and it's kind of cool because using that those analytics lets them kind of shape it for the
[00:34:20]  network or for the device. Like depending on what the end user has, you have a little bit more play. Um, but I'm gathering the, the, because of
[00:34:28]  partial hydration, there's just less pressure there. Yeah. I mean, that's kind of the way I would see it. I'm not going to say that like
[00:34:35]  some applications would be better loaded through, you know, this analysis and, and all that, or like analyzing your analytics and putting that into your build system and all that stuff
[00:34:45] . It's just in general, you know, we're taking a different approach in that we know a certain amount of stuff doesn't need to be there. Um, and
[00:34:52]  so we're just working with a smaller problem really. And we can still give developers the tools to be able to split stuff up, um, on top of that.
[00:35:01]  And maybe in the future, it makes sense to, you know, automate some aspects of it. But, um, in general, uh, you know, there's,
[00:35:08]  there's different challenges that come up when you start automating, lazy loading of everything. Right. Because a lot of it comes down to intent and your analytics is probably a
[00:35:18]  good measure for it, but like, that's still not going to be perfect for necessarily every user. Right. Like if I, if I go and interact with some
[00:35:26]  infrequently used thing and it's like, okay, now I've got a bunch of jank because that wasn't bundled because of the analytics, because of how
[00:35:33]  other people use the application. It's like, yeah. Um, you know, it's not a guaranteed win, right. It's not an absolute win. Whereas with
[00:35:41]  partial hydration and, you know, just looking at it from stuff that only needs to make it to the browser. That is just a straight up. There's no point to
[00:35:49]  have sent that code. Right. And the user experience isn't made better by having that code, um, there eagerly. That's it. That's a,
[00:35:56]  that's a good point. Yeah. Partial hydration is like an absolute optimization, like regardless of scenario, you know, a hundred percent, this code isn't going to
[00:36:05]  the browser. So you know, a hundred percent, no one needs to pay that cost and a hundred percent that you've made that JavaScript smaller. So yeah, it's
[00:36:13]  interesting. Obviously that varies with how the degree of dynamicism, like something that would be a single page app, that's a dynamic all over the place. Maybe,
[00:36:21]  um, can't partially hydrate, um, as much, but for a lot of things, especially like e-commerce and stuff, you know, 90% of your
[00:36:30]  page is static. Like, right. That's the other thing that I would add, um, to that. And Qwik and what Qwik is doing
[00:36:39] , I think is super interesting. Um, and I think there is going to certainly be use cases where this level of granularity is, um, maybe not quite this level
[00:36:52]  of granularity, but having the ability to go this granular is going to be, um, useful. But, so one of the things things that having the compiler analysis
[00:37:04]  that does for us, um, on again, an absolute level, um, is, is also on the, um, the hydration data that we're sending. Right.
[00:37:15]  Um, because Qwik is sending, it could potentially load any component on the page, even those components that won't, um, load necessarily. Uh, and
[00:37:29]  I'm sure you could write your app in such a way that this is not, um, the case, but you're gonna need to send data for things that maybe
[00:37:40]  it doesn't make sense for data to be sent for, if that makes any sense. Yeah. Yeah. I, I, I, this, this is the only reason
[00:37:52]  I'm pulling this example out again, because this is the whole reason this is so quick is because the Marco page is literally half the size of the remix page. Like the
[00:38:00]  HTML is because we don't serialize the data in this scenario because we know that these comments never need to come to the browser, even though I've shown this demo
[00:38:08]  a billion times, like, like, uh, like, uh, you know, you can go in here and you can shrink these comments and interact with them. But we
[00:38:18]  know because of the type of interaction, you never need to serialize this data. And that knowledge only comes from knowing what's exactly on the server and what's to
[00:38:26]  be fair, to be fair. Um, because the, the way that that is accomplished in Marco five, um, is not something that's really, you know, magic
[00:38:40]  of the compiler, right? Like the original hacker news that we had actually sent all the, the comments, right. And we refactored it so that the components were
[00:38:52]  split such that the, um, the comments were actually like content that were passed to a stateful component, right? Right. Yeah. And reaction. And so you
[00:39:03]  have the same optimization too, right? It's a, it's like kind of same idea of just using the. Maybe. Yeah. So it, it, it should
[00:39:11]  be possible to do something like that with server components. Um, I'm not totally convinced, um, because of the way that the diffing algorithm would have to handle
[00:39:21]  that, that, that actually will be the case when it comes out, but we'll have to wait, um, and see, but, but something like quick could do
[00:39:29]  the same sort of thing that they could write their components in such a way that that data doesn't get sent. Well, whereas with, with Marco six, the analysis
[00:39:40]  will actually take care of this for you. Right. Yeah. So you could write, you know, we actually had to go in and like change the way that we were
[00:39:50]  writing the components in order to have it hydrate more efficiently. Whereas Marco six is going to be able to do like, at least in this case, be able to do
[00:39:57]  that for you automatically. That's really cool. Um, and this all just lends to developer experience, which is that last point. The reason you do all this stuff
[00:40:06]  is because you don't want to sacrifice on that developer experience. That's why relying on the compiler is a big part of the, of it. And we've seen
[00:40:13]  that be a success story in other frameworks felt is notorious for it's the kind of developer experience. And it's part of relying on that compiler. I'm, I'm
[00:40:22]  excited when we actually look at Marco here, because there's a lot of similarities to, to Svelte, not maybe in syntax necessarily, but in the way the reactive
[00:40:31]  system works, except Marco has kind of taken that reactive, uh, compiled reactive approach and made it work cross templates and stuff. I'm, I'm really excited to
[00:40:40]  dig into it. So maybe, maybe it's, maybe is it time to kind of pull out the demo and, uh, kind of see what we're, we're
[00:40:47]  dealing with. Um, so speak. Yeah, no, it's yeah, it is definitely really cool stuff, right? Yeah. Yeah, no, definitely. V
[00:40:56]  six is really cool. V V four in 2017 was really cool too. We we've just, we've seen a lot of other solutions like, you know, do parts
[00:41:06]  of it, right? Like Astro does, you know, a bit of that same kind of, uh, tree inclusion, but it doesn't have, it doesn't
[00:41:13] , uh, the data stuff, I'm not sure if they actually build that in and, uh, you know, reacts over components of elements of it and streaming is
[00:41:21]  another one of the big things that Marco pioneered. Um, and we're seeing different, uh, a lot of different libraries, um, kind of go in now and
[00:41:30]  add, um, a lot of those features. I mean, I, I keep, I keep this around and I I've shown everyone on the stream before, but
[00:41:39]  this is just, this, this was just one of my kind of favorite old quotes here. If I can find it, if I can find it again in, in,
[00:41:48]  in my bookmarks, but, um, it was, uh, like Marco's, even if it hasn't directly influenced it, it's had kind of an impact
[00:41:59]  in terms of, uh, you know, you know, the way solutions are going, where things are heading. So I I'm, I'm really excited because Marco six
[00:42:07] , this is talking about like Marco four or five. Marco six, um, is, is, is taking this even further. You guys plan on extending the docs. I
[00:42:18] 'm just gonna throw this out of here. I know the small team, it's quite difficult to throw a pile of boxes mark from the docs. Yeah. To be
[00:42:24]  fair, there there's a reason for this. We've, we've been working on Marco six for like two years and it was like, do you go back and like
[00:42:31] , we did clean up the docs around the time when I first started to kind of came in, cause it was kind of like, uh, what's going on that fast
[00:42:37] ify integration doesn't work anymore, but we, we would like to do more here. Um, and I, I think, I think part of it is like, it
[00:42:47] 's changing again with Marco six. So it didn't make a ton of sense, but you're right. We, we, we, we've been selling it.
[00:42:52]  Um, you know, the, the new homepage redesign and that you can see the, the, the, you can see kind of some of the concepts, but we don
[00:42:59] 't really mechanically explain it too much. Right. We've got this great streaming example, you know, on the homepage and the, the partial hydration story, but I
[00:43:07] , it's connecting to the code is a bit more effort and I, I expect with post six, we're gonna kind of focus on this again. The truth of matters
[00:43:14] , most of the stuff came out around Marco four, and to be fair, stuff hasn't changed a ton on that side. So maybe the docs are never that good
[00:43:23] . They're more on the syntax, but I, I feel like when we went to go do it again, we're like, ah, you know, it's so
[00:43:30]  hard when you know something big is coming around the corner. And I feel like that was similar with react. They were, they were sitting there and like, okay, we
[00:43:36]  know we need to rewrite the docs and they, they worked on the beta docs and Rachel neighbors did a great job with that before she, she left, but essentially they
[00:43:44]  knew like with hooks and everything, like everything's just around the corner and you keep on pushing it off because it's a, it's a lot of work, especially for
[00:43:52]  a small team. And you know, the next great thing is right on the corner and things are getting closer now. So yeah, I, this will be, this will
[00:44:00]  be a big focus, especially as we get Marco six beta out, um, hopefully, uh, sometime this summer. Yeah. There's definitely that, that tension there
[00:44:07] . Like I, I want to go back and rewrite things, but I want to use like the tags API, you know, that's, um, you know, really
[00:44:14]  just kind of in preview right now. So I don't think that makes sense for the, the main docs, but like, that's what I would want to use to
[00:44:21] , um, kind of explain some of these concepts and everything. So, um, yeah. And there's a few things that's like, you know, a few
[00:44:30]  places where like, here's a, like the, there's a split component mechanism where you can opt out of sending a template to the browser and stuff like that. But
[00:44:37]  like things like that, these optimizations just go away. Like there's several, you know, parts of the docs that's highlighting optimizations that are going to be irrelevant
[00:44:45]  because of the changes that we're making. And part of the reason we made those changes is because we know not everyone's reading the docs or not everyone's following those best
[00:44:52]  practices, or sometimes they're hard to do. And I think this does come back to the DX side of things because, you know, essentially if performance is an issue
[00:45:01] , usually the way to resolve performance ends up impacting DX. Like I think of reacts hooks, actually like, you know, the effects and memoizing and like all that stuff
[00:45:11] , the fact that you have to think about that and the dependencies array arrays and like all that stuff partially comes down to performance and like, you know, back before, like
[00:45:18]  should component update and all that stuff kind of comes down to performance. But as soon as you have a system where performance is not an issue, you can usually make the
[00:45:27]  API a lot simpler as well. And I think solid is actually a good example of that, right? Because, you know, it's got this reactive system that makes a
[00:45:33]  lot of sense. And because it's performative, like you don't have to think about memos and stuff as much. And also, yeah, there's lots of
[00:45:40]  nice characteristics of being performance first, especially when it aligns with the DX. And that's kind of what we're trying to do. So yeah, there's a
[00:45:48]  number of reasons we haven't tackled the docs, but it is something that we're going to obviously have to think through a lot of. Speaker 2: Yeah,
[00:45:56]  I mean, and to be fair, we have lots of examples of people use the CLI. I mean, it is maybe I should throw this back on the screen for
[00:46:05]  just a moment. But if you go in and go to the get started and follow kind of the like installation guide or whatever, like the Marco create, we have lots of
[00:46:17]  examples in there from, you know, Cloudflare deploys to like, to do MVC apps and whatnot. So there, there are a ton of examples in
[00:46:26]  the examples repo to play with with different types of integration. So docs need work, but there are, there are things to reference, but yeah, let's, let's
[00:46:36]  move on. Let's move on to the demo of this stuff. I think, I think it'd be really cool to take a look at that. So I don't
[00:46:43]  know, Michael, if you want to share your screen, we can, we can kind of start looking at this stuff. All right. I'm going to add that
[00:46:55]  in. Here we go. All right. So this is our playground and I've modified it so that we're able to see the compiled output from, from V6.
[00:47:08]  We're, we're still in an alpha phase. I do want to, or pre alpha phase, actually. I do want to stress that. And yeah. So
[00:47:19]  not every feature is like currently handled by the, the compiler yet. But for those that aren't, we can talk a little bit about how it's going to work and
[00:47:32]  we can, I could maybe even pull up some of the hand compiled examples. Um, if that would be useful. Um, but yeah, so this is the button
[00:47:44]  you click it, the number goes up. We talk about the tags API for a second. Cause yeah, we can talk about the tags API. That would, I
[00:47:52]  think that would be good. Cause if you just showed this code example and I'm, I'm, I'm, I'm looking on the screen and some people might go
[00:47:59] , this is kind of alien, but the whole concept here, right. Is that everything's a tag, right? Everything's a tag. Yeah. And so,
[00:48:07]  um, that has kind of been one of our like driving principles, uh, of the, the tags API and really whatever the API for Marco six was going to be.
[00:48:24]  We wanted you to be able to build upon the primitives in a way that allowed you to expose APIs similar to what the primitives themselves expose. Um, and I
[00:48:37]  don't know if that makes total sense. Um, just like, what's the term that potent is that the term it's it's when it's when like you,
[00:48:47]  you, it's possible to recreate any of the primitives. You can recreate any of the base primitives, right? Like if I want to create my own, um
[00:48:55] , let's say, call it my lap, right? Like this is kind of stupid, but, um, like we have the ability to return, um, uh,
[00:49:05]  a bound value here. I can't type. Um, and then I can say I let I probably should receive that value there. so that attributes like our, is
[00:49:27]  the, the equivalent of the props or and in, um, yeah. So it's like a, yeah. Yeah. So, um, we, we have this concept
[00:49:38]  of a default attribute and that's just kind of an unnamed attribute that comes through as default, which does mean that you have to alias it. Um, we
[00:49:47] 're hoping that that actually discourages the use of it for cases where you shouldn't be doing it. Cause in, in most cases we would recommend that you, you do
[00:49:56]  need these, but it would be kind of, I think, annoying if like your let made you assign like value equals or initial equals for like every usage when this is going
[00:50:06]  to be such a common tag, but yeah. Yes. But this just works. Like I've created basically just a wrapper around the let tag. But so, I mean
[00:50:14] , this means I could do a lot more in here. I could sync this to local storage. I could have this be an animated, um, value. You know
[00:50:21] , I, I set the one and, um, I could have it like go by 10th. So you see. So 1.1, 1.2, 1
[00:50:29] .3, 1.4 up until two. Right. This is pretty cool. Cause this is like react hooks. And I know because I, internally, but this is
[00:50:39] , this is like some, the, the, the compiler and stuff is very similar to spelt, but you just made a composable hook. This is something that
[00:50:47] 's, you can't do in spelt on the compiler. You have to bring in like spelt stores. You, you just simply just pulled it out of the file
[00:50:53]  and pressed it. Right. And, and that's something that we, um, there there's trade-offs there. Right. And, and this is, uh,
[00:51:00]  we're using a compiler based reactive system. And, and what that means is that, um, our reactive system can't really leave the Marco tags, right? Like
[00:51:18]  with solid, your, your reactive system isn't really bound to the components. The, the components work off the reactive system, but like you can just like outside of a
[00:51:26]  component, just create a signal. Right. And then use it. Um, and spelt and, and the API that they have set up, you, you kind
[00:51:37]  of feel that limitation because if you wanted to create an animated value like this, you, you can no longer use like just the, the let in the script tag, uh
[00:51:46] , right? Like you can't create your own light. You do have to reach out to stores and the stores are just kind of like runtime, you know, reactivity
[00:51:55] . Um, but the, the tags API is set up in such a way that like, yes, you can't break this out into, um, JavaScript land.
[00:52:03]  You like still have to, you know, write a, a Marco tag. Um, but you can actually break out that logic and, and compose these behaviors as you're
[00:52:13]  building components. Um, and so, and you can still import JavaScript too, right? Like, yeah, you can still import JavaScript. Yeah. If I wanted to
[00:52:23] , um, this is stupid, but Yeah, it's just regular JavaScript imports, um, there. Right. They go create that. Yeah. So, I mean
[00:52:48] , I think there's a few interesting things about all of this coming from a tag. Cause I mean, really one of the goals for, for Marco is to make all
[00:52:59]  of this describable in a language that feels like it's built on top of HTML. Like we want you to be able to take some HTML and like add some state
[00:53:07]  to it right there, right where it's needed. Right. Um, so like if you have, you know, sort of like a list or something like that, and
[00:53:16]  you're going through, and you decide that you want to make that list into an accordion, you can add state right inside the for loop that you're using to
[00:53:24]  render your list and like toggle each things. You can just put it right where it's needed. Um, and then obviously that makes it since everything's kind of co-
[00:53:31] located or able to be co-located, it makes it easier to factor things, throw them out into separate files. Um, yeah. And yeah, like here
[00:53:40] , you know, this is actually pretty interesting because Michael has essentially in a for loop created a whole bunch of independent states that are tied to the for loop iteration, right
[00:53:51] ? Like any other framework, pretty much, pretty much is going to have like forced you into making a new component for something like this. I mean, so the example that
[00:54:02]  Michael's showing is a bit contrived. And so I hope that it's coming across where this could be useful, but like really the cases where you're going to
[00:54:09]  run into stuff like this is like, I've got some existing markup. I want to add some new functionality to it. How can I work with the markup
[00:54:16]  that I have? Is your framework going to cause you to have to refactor before you can actually like, you know, add state because, you know, state has to
[00:54:23]  be at the top level in this use hook or something like that. Um, with Marco, we want to make it so you can just, you know, put these tags
[00:54:28]  and, you know, we're, we're only showing the let tag and this, like my let that just reflects the let tag. Um, but these tags are a
[00:54:35]  lot like hooks in, in other frameworks, except they're a little bit more powerful and they're more powerful in a couple of ways. One of them is, you
[00:54:44]  know, that they are tree aware, right? Like you can put this anywhere in the tree and it's just going to work fine. If it's under an if statement
[00:54:52] , that's fine. Um, which means you can do the collocation and all that stuff, but it also means that you can do stuff like, um, have a
[00:54:59]  tag that tells you whether or not the element that that tag is in is in the viewport and stuff like that, um, without having to pass around anything. Um
[00:55:06] , and there is one other thing I was going to bring up that I'm now blanking on, but yeah, the collocation. Oh, um, and you know
[00:55:17] , it, it makes it really easy to not just, you know, extract out really behaviors like hooks in many frameworks allow you to do, but it also allows you to
[00:55:27] , you know, extract out markup and behaviors put together, right? Um, because it's all just in the template. So like, if you have, you
[00:55:35]  know, a dialogue component that wants to also expose in a hook, like way, some state about the dialogue, like that's totally possible. Um, and really easy.
[00:55:43]  You don't have to, yeah, you had a good example actually that you mentioned to me earlier and people here might be familiar with that example because we did remix on stream
[00:55:52] , but the forms in remix actually were a good example, weren't they? Yeah. So like in remix, um, you know, they've got essentially APIs for
[00:55:59]  like use form data. And then they've also got a component that's like capital F form. Right. Um, and these are kind of separated because presumably you want to
[00:56:10]  be able to access the form data, um, anywhere, but it is still tied to this form. So it'd be kind of nice if you could, you know,
[00:56:15]  say this is the form data from this form that I'm writing. And with the tags API, you can literally just have your, you know, capital F form with a
[00:56:22]  tag variable after it, that's giving you the current form data. And so you can express it all from one place. Um, yeah, which just makes it easier
[00:56:30]  to write. Uh, you're not having to, you know, I add a new form to the page. Okay. That means that I have to put the form here
[00:56:37]  and I have to scroll to the top of my function and add a use form, whatever. And so now maybe I've got two forms on the page. So I've
[00:56:43]  got two use form things. And if I want to extract out one of those forms, you know, it's the whole story that most, many people have probably seen with
[00:56:49] , you know, Dan's original thing on hooks. It's like, how many places do I have to go into the code to extract something out into a new,
[00:56:56]  um, component or refactor it or whatever? How many lines am I touching to add functionality? And with this API, essentially, you know, we've been trying to
[00:57:05]  make it so that that is very few, um, lines because everything is able to be essentially put into your template. Um, and so you're not having to repeat
[00:57:16]  things like, you know, conditions or the structure or hoist things in weird ways, just so you have access to a variable, the tag variables, um, are just
[00:57:23]  there in your markup. Yeah. Cause like, even in this example, you could start building this giant component and adding more and more functionality. And then at some point
[00:57:31]  in the future, be like, oh, I want to extract that out. And then like, just cut it out. And there's, there's like no imports or
[00:57:38]  anything you have to worry about here. You just like snatch, cut it, paste it, which is, which is really quite, quite cool. I know that the
[00:57:45]  imports from the helper, um, was from the, from the other thing. I mean, yes, you killed that for me because of that one thing, although imports,
[00:57:55]  like if we want to take it all the way, we could probably nest the imports, but essentially you can kind of already see that with this co-location, you
[00:58:03]  just, this, this frees up the editing side. I, they, they said almost earlier because they, they, they're treading carefully a little bit because they
[00:58:11]  know that I'd interrupt and go, you can do that in solid. Um, but that's because on the technical side, there's nothing mechanical that stops you from
[00:58:18]  nesting state and solid because the components are nothing. They're just, they're just function calls. Right. I mean, it really comes down to reactivity and whether
[00:58:26]  or not it's tied to the component level. Right. And in a lot of frameworks, um, react and svelte, um, it definitely is view.
[00:58:36]  I'm not totally clear on because it's a fine grain reactive system feeding into components, but then solid, right? Like the, the reactive system is, is kind of
[00:58:46]  outside the components and, and, uh, like the four component creates a new route that the, the reactive values created under that route are assigned to. So you can
[00:58:56]  do this in solid and actually, because it uses, um, like a, a render profits, you're already in JavaScript land. So it's not so bad to do
[00:59:05]  that. It's a little bit awkward if you wanted to do like this under an, if in solid, cause you'd need to. Yeah. Yeah. I mean
[00:59:13] , it's, it's interesting because when you look at this, it's like some frameworks just couldn't represent something like this and other framers could represent something like this
[00:59:22] . But I think part, and one of the things that I appreciate about the tags API is that not only can you represent this, but also it doesn't require you having
[00:59:30]  to touch multiple parts of the file, right? Like a lot, like even in solid, if you were to just try and, you know, create a signal inside
[00:59:38]  some random div or something like that, like you could maybe put an iffy in there. And then you're also going to have to go and put like a let somewhere
[00:59:46]  like above so that you have the variable. Like, it's just not something that's representable. The JSX. Exactly. Yeah. So like part of our goal
[00:59:55]  is making it so that these primitives that we bring into what is the Marco language makes sense for a templating language. And one of those things here is that the,
[01:00:04]  like the, the tag variables, you, they can actually be hoisted. So like, if you have a div, so I guess we haven't shown this,
[01:00:11]  but you know, one of the ways, or one of the things you probably have to do is get, you know, a ref to some elements. And so any native
[01:00:18]  element gives you a tag variable that gives you its ref. So you like, you know, on this button, you could go slash BTN and you would have a JavaScript
[01:00:25]  variable that is a ref to that button. And you can add an effect that reads that ref, but the effect could be, you know, anywhere, um, in
[01:00:33]  the template, it's automatically going to get hoisted because, you know, we don't want you to have to think about the way that things are, um, you
[01:00:41]  know, placed in the template to be able to use these variables and there's stuff in place to handle like conflicts and all that stuff. But in general, we're trying
[01:00:48]  to approach it from the perspective of what is the most useful from a templating language in terms of the scoping, in terms of uh, how you can define variables and
[01:00:56]  where they can be defined and, and all that stuff. So having the language gives us a little bit of a superpower there. Yeah, for sure. And that's
[01:01:02]  the whole, that's the whole thing. Even if, as I said, solid has the mechanical ability to do to JSX is not suitable for this. Like basically this
[01:01:09]  is the part of the power here. And part of the reason the templating language is this is this templating language. Some people kind of look, sometimes they're like
[01:01:17] , eh, what do you, what's going on here? But everything is built with purpose and it has, it's, I've, I've looked at a lot
[01:01:24]  of SFC templates languages. You, you all have, it's one of the only ones that has almost, it's, it has 95% of the flexibility of
[01:01:32]  JSX. Like not, not there, there's a couple little bits, but the, where the restrictions are makes it more animalizable for the hydration case. And when
[01:01:41]  you add this ability with the tag variables in here, it's actually opens up a type of co-location that goes beyond, right. We saw the class components to
[01:01:50]  hooks, you know, where the colors went together, like in that, in that old graphic. I've talked about this before. This is like the next step because
[01:01:57]  even with hooks, stuff is still in two locations. Um, and now, now we're, we're, now we're basically in, we've merged into one.
[01:02:06]  We lost Michael there for a second. Let's see if, can we get back? Yeah. Sorry. Yeah. Um, yeah. Your screen disappeared. So I
[01:02:19]  don't know if you're, uh, Oh, I can, I can switch back to sharing if that's, yeah. Yeah. Let's, let's see if
[01:02:28]  we can get back to it. Cause you pulled up to do NBC and I think that's like, that's a demo that people probably want to see. Yeah.
[01:02:34]  The, the reason I had pulled this up, I don't know if we want to hop over here yet, but like, I felt like, I mean, probably you
[01:02:41]  don't want to write the entire to do NBC app in one file. Um, but you know, that's what we're kind of looking at here, but it's
[01:02:50]  like, it's 78 lines of code for the to do NBC app. I mean, that's pretty purse. We're, we're missing a little bit of functionality.
[01:02:58]  Cause this is the version that doesn't have the editing. Um, but I mean, I thought this was a pretty reasonable use of, even though it's not like
[01:03:08]  under a for loop or in a different context or anything, you know, being able to, um, to have this filter down here in the footer, because it's
[01:03:17]  just used, you know, by the footer to say there's two items left and then we want to set it to those two items when we click clear. I
[01:03:26]  mean, that's pretty nice that, you know, I'm not forced to hoist this up to the, the top level, like where the to do's themselves are
[01:03:34] . Right. Like I can put it closer to where it's actually used. That's all. What's cool about that. So one of the challenges, I mean,
[01:03:43]  we've seen single file, uh, component files and when you, it's funny, cause if you tie the change management to the single file components, you, you
[01:03:52]  don't want to break out a new file all the time, right? Like, like, like us react users know, like I don't say us, but also like
[01:04:00]  solid users know, like it's nice to be able to like have all the functions, right. And kind of play around with ideas and refactor and Marco has a macro
[01:04:09]  tag, which has done that forever. But I think it's actually interesting in this version, but you're just like, well, yeah, sure. You do the macro
[01:04:15] , but forget the macro even yet. Let's just build this out where it makes sense. We're like, we got some state down here. We'll just put
[01:04:20]  some state down here and then we're like, oh, this is too much. Then we'll, we'll cut it out. And it's, you could probably little
[01:04:26]  literally highlight that section and move it into a separate file at that point. Definitely. Yeah. Yeah. I've never seen editing like this in any JavaScript framework. Yeah.
[01:04:37]  Especially with single file components, right? Because typically single file component, it's like, we're going to break up your styles. We're going to break up your behavior
[01:04:46] . We're going to break up the, you know, the, the templating logic, but having it all be able to be defined. Like you can define the
[01:04:52]  styles anywhere. You can write a style tag. You can define your behaviors anywhere. You can have the let, the const effects, like they can be right where they're
[01:04:59]  used. And that just makes so many things easier. Like, you know, they're a simple case is you've got something it's conditional on the screen. And when
[01:05:10]  it's visible, you want to have an effect that runs that, you know, does something, maybe it runs an animation or whatever. If you want to have a
[01:05:16]  conditional effect in a lot of frameworks, you've got to make another component, right? And then react that's and solid, that's, you know, fairly simple.
[01:05:25]  Cause you can go and create another function. Like at least it's in the same file. Right. But with, with the tags API, not only can you do it
[01:05:32]  in the same file, but you can just do it right there. You don't have to go and like hoist something out and like, think about what this refactor
[01:05:37]  is going to look like, what variables I have to move and all that stuff. Right. Like you can just put a, put an effect, right, right next
[01:05:43]  to where it's necessary. Right. And when that if statement gets removed, the effect gets cleaned up. When the if statement comes back, the effect runs again. Right
[01:05:51] . Yeah. So can we do something concrete here? Because we've, we've been kind of nailing this home. And I think, I think, I think no
[01:05:58]  one's said anything yet in the comments. I don't know. People are just kind of going, okay. Okay. But let's like, this is a bit of
[01:06:06]  a departure, you know, from what people are used to. So you know, it takes a little bit. But yeah, can we can we do something a little
[01:06:15]  bit more concrete? Yeah, I think maybe I could share my screen for a second. And unless Michael had something to go into. No, I mean, I'm
[01:06:27]  just kind of showing what Brian was talking about, or you were talking about. Yeah. Okay. Let me take over for a sec, if that's easy. You just
[01:06:38]  share it. Yeah. Okay. Is that working? Yeah. Here you go, Dylan. Yeah. So I mean, here is just some basic markup. Essentially
[01:06:50] , we've got a const that is an array of items that are in a cart, we've got a UL, we're iterating over the items, displaying a
[01:06:56]  title, and then a description. Right. And so this is actually I kind of brought up a bit earlier, like, you know, you're iterating over a list
[01:07:06] . Now you've got a requirement, how do we make it so that each item in this list is toggleable. Like we want to turn this into an accordion
[01:07:12] , right? We don't want to see, we only want to see iPhone 13 and MacBook Pro here. And then we want to be able to expand it to show the
[01:07:18]  other stuff. So like I said, in a lot of frameworks, it's going to cause you to have to think about, okay, well, now I've got to
[01:07:24]  go and build my item component. Now I've got to create the item.jsx or whatever, and all that stuff. Or I can do it, you know,
[01:07:31]  in a function that's in the same file, if it's JSX, which is not as bad. But with Marco, we can literally go in here and just be
[01:07:37]  like, okay, is this thing closed? So we're going to default it to false. And then we want to toggle it when we click this guy. So we
[01:07:45] 'll just do, you know, closed equals not closed. And then we're just going to make it so that this guy is hidden. If it's not closed, right
[01:07:58] . And so there it is, like I added the functionality right here. And the great thing about this is now I want to go and extract this out, like,
[01:08:07]  I can just take this section, move it into a file, I have to add like an attribute to receive, you know, the item because I'm going to have,
[01:08:16]  like, essentially, I could refactor this into, you know, item, item equals item kind of thing or whatever, but item item item item item, which is,
[01:08:25]  you know, great. But anyways, the key is that I didn't touch anything else here, right? Like I didn't have to jump around this file and be like
[01:08:31] , okay, I'm going to copy this piece of state from here. And I'm going to copy, you know, X from here and whatever. And like,
[01:08:38]  you could have an effect that's like doing something like closing the tab after a certain amount of time, like you could put the effect right here as well. Right. And
[01:08:46]  that's super nice. As far as, you know, I'm writing this, I know exactly what needs to happen. I don't have to think about refactoring
[01:08:54]  it before I finish my job. Right. And in this case, it's such such simple logic that we don't even need to refactor it. Right. It
[01:09:00]  like, there's no reason for this to require multiple components or multiple functions even. Now, if it was something that was reused across multiple templates, then sure, yeah
[01:09:11] , extract it out into another Marco file. Or if it's something that's just like overwhelmingly large, or you want to test it independently, or like some valid reason to
[01:09:19]  extract it out into another file, then that's great. But we don't have to do that. In this case, it doesn't make sense. Right. So
[01:09:26]  yeah, hopefully that hammers home that piece. And then I've got, I just threw up like a couple examples that maybe illustrate some of the points. So like,
[01:09:35]  you know, here, I have a component that's basically inserting a node just that I can get a reference to it so that I can give the height and width of the
[01:09:43]  current container. So like here, and I could have a different API, there's a million ways to like implement this. But you know, I just got this quick little
[01:09:51]  tag, that's like, give me the height and width of the container that I'm in this div happens to be, you know, 110 by whatever right now.
[01:09:59]  And if I add a few break points that it gets, you know, a little bit larger, like, it's, it's super easy to do that stuff. And
[01:10:06]  I'm able to have it co located, right. So I can, again, just, you know, extract that out. And then to like, a little bit
[01:10:14]  more of a complex example, If you can move back to that for one second, I just appreciate that example for a second, because what, if I understand it, it
[01:10:21] , this is kind of like, you think it's like a kind of a hook, but you're actually using a ref, in order to find the size of the
[01:10:29]  parent. So there's actually DOM elements in Yeah, like this thing is rendering a kind of like a WBR, which is like a word break, like nothing element could
[01:10:38]  be a no script could be a comment could be whatever, but I just did a WBR there. Just so that it can put something in the DOM, just that it
[01:10:44]  can get a reference to the current location that we're at in the DOM, so that it could return the height and width. And like another example, you could think
[01:10:51]  of with this is, you know, an element that's like, am I in the viewport? Right? So I could build something, I'm not gonna build it
[01:10:57]  right now. But you know, we could have something like intersection in viewport, right? And we can just have that right here, it can know, okay, is
[01:11:10]  this element in the viewport? Because it can be tree aware, like, that's super easy. And then we can just have an if statement here, that's like
[01:11:15] , if we're in the viewport, then we're gonna do something crazy, we could actually run some JavaScript, right? Like we could run an effect here,
[01:11:24]  and we have an effect that executes whenever we're in the viewport, or we could render something whenever we're in the viewport, right? So it's super
[01:11:33] , super powerful to be able to co locate what is effectively hooked right into the markup, because it gives you these kinds of superpowers, but also just because it's
[01:11:42]  easier to refactor and like, work on existing code and that kind of stuff. Okay, this came up, and we have to address it, because this is everyone
[01:11:50] 's favorite. Why the slash? Like, why do tag variables to a slash? Why can't we just use a space? And this, this actually is a bit more
[01:12:00]  obvious with a different example, but go for it. Yeah, it's tricky. I mean, we fought this is probably, man, probably three years ago, or more
[01:12:10] , probably more, we realized we needed something like tag variables in the language. And that's what these are, they're tag variables. And the right hand side is
[01:12:18]  a JavaScript expression, right? So like, if I have an object here, and I'm like destructuring, you know, that's, that's fine. Although
[01:12:27]  let's can't be destructured, because they're signals and whatever. But like, essentially, the left hand side here, it's just any JavaScript expression. So we
[01:12:35]  knew we needed something like that. Now, this symbol, so tricky, obviously, it can't be a space, because now we're in attributes, right? It
[01:12:43]  could be any attribute, you could have more attributes on it, like you could have close, false, key equals, slash doesn't mean that you can't have other attributes
[01:12:53]  after it. Yeah. And so it's tricky. I mean, there's not a lot of like, it could have been exclamation mark, it could have been
[01:13:01]  whatever. And so we kind of landed on slash, it seemed like the least off putting. I think it's one of those things where, you know, once you're
[01:13:11]  using it for a little bit, like, it's just gone, like, it's just a syntax, you know, the power of it ends up shining above We
[01:13:18] , we all kind of hated it. I think at the beginning, we're like, there's, there's no good choice here. Let's just put slash here,
[01:13:26]  maybe we'll come up with something better. And it's one of those things that it's like, it's a character, like, it's gotten to the point now
[01:13:34] , because we've been looking at this, you know, code every day for probably a year now, since we, you know, decided that it was going to be
[01:13:44]  slash that it's like, it just seems normal. This, you know, and one of the things Dylan said, which I think is true is, you can make things
[01:13:55]  like correct and consistent, consistent, not correct, you can make things consistent. You can become more familiar with things, but you can't like, make something more consistent
[01:14:14]  without like, changing it. Right? Yeah, I'm totally messing up your quote. Do you want to say it better? Oh, boy. I think I need more
[01:14:22]  coffee as well. But what was it? Yeah, essentially, like, if you've got a consistent system, but it's unfamiliar, you can learn it and appreciate
[01:14:30]  the consistency of it, right? But if you've got this inconsistent system, even if you know it, you hate it. And that inconsistent system is JavaScript, basically.
[01:14:39]  I'm just kidding. But, you know, essentially, we're trying to make it so that this is a language that is super consistent and that in the user land side
[01:14:48]  of things, you can do all the stuff that we're exposing through the language. And then there's also things we're considering, like, like I said before,
[01:14:57]  this is this is a language, what is it? When should you be able to see this variable? When does it make sense like this? So this is the tag parameter
[01:15:04]  syntax. So basically, there's two ways to get data out of a tag, you can pass data into the body of the tag, or you can expose data out of
[01:15:13]  the tag. So it becomes available, like, you know, outside of the scope. And so those are two scoping mechanisms that we realized were like, necessary to
[01:15:22]  implement some of the things that people are doing in other frameworks. But like, in general, they also are easier to write than in other frameworks. And you don't have
[01:15:32]  limitations of like, yeah, okay, like, think about refs. I think refs are in general, and every framework are kind of annoying, like, you have
[01:15:41]  to go, okay, I'm going to scroll to the top of this function. I've got this list of all these hooks. And I've got, you know,
[01:15:46]  a few other wraps, and I'll put I'll put this one in here. And maybe I'll sort it right, right there. And then I'm going to
[01:15:51]  pass that down. And we're going to, like, pass it to this element that's in the markup here. No, we have it so that tags can expose
[01:15:58]  variables. And it just so happens that the native tags expose a variable that is their reference. And so it's just a lot easier to, yeah. But the slash,
[01:16:08]  though, everyone, everyone is going to Yeah, this is one of those things in solid too. Like, technically, you don't need refs in solid, right
[01:16:16] ? Like, yeah, it's a let somewhere. You do need a let somewhere. That is true. Yeah, yeah. I mean, but the thing with the with
[01:16:25]  the, yeah, it's important to differentiate, we didn't focus on the for loop and this, these pipes around it. But that it's basically like a render
[01:16:35]  prop, it's like a it's like a function scope. So every it is the children where the slash is is for siblings. So this is just kind of a,
[01:16:43]  it's important that we need both syntaxes. But if you don't want to see what this looks like in svelte or view, it is nasty actually put a
[01:16:50]  Twitter tweet, I tried to find it just now, but I wasn't going to find it fast enough. But like, there there's a reason, you know,
[01:16:58]  I make a big deal about JSX and composability, because you can literally make that for my four and follow the same thing. And JSX is the same way,
[01:17:05]  like props on that. But when you go to a lot of template DSLs, you don't get to turn hashtag each into, you know, hashtag paginated list
[01:17:17] , you have to go to a completely different thing, because and that different if you want to make it, people just don't do it in those frameworks. Because if
[01:17:26]  you want to make it a different thing, it's nasty, they use attributes with like, namespaces for each thing, like bind, colon, this or let colon
[01:17:35]  this, it just pollutes whole thing. And it changes the semantics of attributes. What Marco has done here is invent a couple syntaxes for purpose, but actually kept
[01:17:46]  the semantic meaning of existing things instead of trying to overload them. So you know, this is one of those funny things where people like, oh, it's just HTML
[01:17:53] . It kind of is annoying for me when I hear that, because it isn't just HTML, when you use HTML attributes to change the semantics of how it executes
[01:18:04] . And then you're like, oh, but it looks like HTML. Like, people can argue about that. But like, this stuff all compiles to JavaScript anyways.
[01:18:12]  So it isn't just HTML. But I mean, yeah, I mean, Marco is like a declarative, reactive framework for building trees. And, you know,
[01:18:24]  like, it's got the control flow in it and all that stuff. I think going back to, you know, the fact that the four tag is something you can build
[01:18:31]  in user land, like you can have a paginated, like Ryan said, you can have a paginated four where you're like, obviously, I'd have to
[01:18:38]  change the closing there. Closing is optional in Marco. But you know, I could have a paginated four where it's like, limit five, it's like show
[01:18:46]  five at a time, right? And look at how little code I had to change to do that. Now, if I was in spelt or something similar, you know
[01:18:55] , I'm going to have to go from my fancy little each thing to some something that you don't want to show your children. Yeah. It is nasty. That
[01:19:06]  kind of those kind of projections in those. Yeah. So, so in a way, part of the reason I don't know if it was highlighted at the beginning that we
[01:19:15]  wanted to make us that all of our core tags use the same syntax as something you can build yourself is to kind of keep us honest, let's let's make that
[01:19:22]  syntax nice. And let's make it easy when people decide to add functionality to these core tags, which is super common for, you know, let there's tons of examples
[01:19:31] . And then there's four and the paginated things like you, there's lots of types of experiences or tags that you'd want to build that iterate over stuff. And
[01:19:40]  so, yeah, that's partly one of our design goals of the language is to make it so that it's like very easy to go from A to B. Yeah,
[01:19:49]  yeah, yeah, you just stop seeing it after a while because it just your brain connects the dots. Sorry, I'm just talking to this comment. Yeah. So
[01:19:58] , yeah, where do we want to go to next? We have a couple more examples. Do we want to talk about getting more into the hydration story and more into the
[01:20:07]  compiler? People have been pretty quiet. I think they're just taking this in because it's pretty, it's been pretty big. It's a big difference in syntax and
[01:20:16]  developer experience. But that's not the only reason we're doing this. Obviously, it's a big part of it. We actually believe that this is this is incredible
[01:20:25]  for the refactor story and the maintainability story. But this compiler and this reactivity have other benefits. Yeah. Dylan, do you have the the branch that I saw
[01:20:37]  you? I do not. So it's probably going to make the most sense for you to share your screen. Unless you have any more examples, Dylan, but I mean
[01:20:44] , I didn't actually show this one. But you know, it's kind of cool that you can just take like I built a tween tag that just takes in
[01:20:52]  some state and you say like how long the thing should tween for. And you know, I'm printing out both the tween version and the actual version. And you
[01:21:00]  can see like the actual state is updating immediately. And then the tween version is like catching up. Right. And it's not that crazy to build that much code.
[01:21:09]  Like I have, you know, an effect that's doing a repressed animation frame and it's returning some of the current tween value and all that stuff. But
[01:21:15]  like you can extract out some complex things and now, you know, this tag has the same benefits as the let tag. I can put it wherever it's needed, all
[01:21:22]  the co-location and all that stuff. So I just think it's cool. But yeah, we can go to Michael now. Let me get Michael back on the
[01:21:29]  screen here. You sharing something, Michael, for us? Actually, I think I just stopped by accident. So let me. But yeah, let's transition into this
[01:21:41]  because people are really stoked about like the unique piece of the Marco, like the hydration that and we I did this kind of on purpose. I wanted to start here because I
[01:21:51]  don't think people realize because people like get hung up. There's a lot of value that comes in the compilation. It comes from the from the syntax, even if people
[01:21:59]  kind of are perhaps want to reject it at first. This is not just because we like weird symbols. Yeah. Yeah. It's literally like, you know, we
[01:22:11] 're looking at common types of things that people are building. We're realizing that you're going to use a template to build those things. And how do we make the template
[01:22:18]  able to express those things in a way that is easier than writing vanilla JavaScript? Like, you don't I know people initially when react first came out were like, oh
[01:22:28] , I have to use a map to or I have to use a ternary to map stuff. And obviously, we're used to that now. But you know,
[01:22:34]  solid bringing back like a show tag and the mapping and all that stuff. It's like, yeah, being able to represent it as HTML is nice because it's it's
[01:22:43]  a declarative way. You're not having to take this, you know, JavaScript imperative escape hatch to get there. Oh, yeah. So interesting. Let's see
[01:22:53]  if we can get Michael's screen here. So I'm back to are we seeing my screen now? I think it's my screen. Yeah, I you have to share
[01:23:05]  first and then I share it. Oh, it says that I'm sharing my screen. Okay, there we go. Okay, so back to our basic button example,
[01:23:16]  and we can play with this to see what happens. But so I'm going to pull up the compiled output for for Marco six. And it's not a whole lot of
[01:23:31]  code. So can everyone see this? I want to make sure that the text is big enough. I know. And maybe zoom in a little bit, Michael. Okay
[01:23:37] . Okay. Yeah. That's fine. Yeah. So because we've got a this actually doesn't scroll. Oh, fine. No. You could go one out.
[01:23:54]  You could. Oh, I could do that. Yeah. That's fair. That's fair. I could do that. This is this is our new try to online.
[01:24:01]  Yeah, this is something I hacked together, like in a couple nights. And then like two nights ago, I added the the Marco six output to it. So yeah
[01:24:14] , this, this still needs a little bit of work. We actually do have this kind of like hidden on the website. If you go to Marco js.com/play
[01:24:24] ground, you can get to it, but there's no links to it anywhere yet. Anyways. So this is the like we said, we're breaking apart your template
[01:24:39]  into like a bunch of little pieces. And that's so that we can do a number of things. One, it's what powers the fine grained reactivity.
[01:24:49]  It's all driven by the compiler. And then two, so that we can eliminate code in a more fine grained rate way rather than just this component goes to the browser
[01:25:02]  and this component stays on the server. So yeah, it's not a whole lot of code. So I'm going to walk through this counter example and then we can
[01:25:10]  start changing this code and we'll, we'll point out some things in the compiled output. But so the, the first thing in here besides the imports. One more thing
[01:25:20] , Michael, you can press hide at the bottom and it gets rid of that little stream yard thing that's walking. Oh, I didn't realize you all could see that
[01:25:27] . Okay. Yep. So the, the template here is the static parts of the, the HTML. And so in this case, it's the button element. And
[01:25:44]  then this is a marker representing where the dynamic text is going to go. We also have this walks string. Um, which is, uh, it's a little bit
[01:25:58]  interesting. Um, but if you look at like the, the compiled output for solid or, um, Svelte or, uh, I guess those are probably the two
[01:26:14] , the two big ones that, um, do this kind of thing that create the, the elements, um, upfront and then find them. You're, you're
[01:26:23]  actually like Svelte actually builds the tree manually. Solid does a similar cloning thing, um, to what, uh, Marco's doing, but you, you guys
[01:26:34]  do like a first child and like, actually like you, you have first child in the template, um, in the compiled code. Whereas what we're doing here is we
[01:26:45] 're actually encoding instructions to actually go find this button and go find, um, the, the text node. And so, um, I'll actually decode this real
[01:26:55]  quick, just for fun. So, uh, we start, the walker starts on the first element. This space represents a git. Um, and so we're using
[01:27:06]  a tree walker. Uh, the D represents a next. So that actually walks into the button, into its first child. this percent side represents a replace saying we
[01:27:18] 're going to replace this with a text node. Um, and then this L represents like, leave the button and go to the next sibling of the button. Um, and
[01:27:30]  so if this is the top level template, this actually doesn't ever get used, but this becomes important. Um, we'll talk about components a little bit more later
[01:27:39] , but it does become important for that. Yeah. This is probably one of the less interesting things of, of what's compiled, but it is important to know that,
[01:27:48]  you know, we've except extracted out the static content, uh, into the, the template string. And then we also have these walks. And so, you know,
[01:27:57]  this, this walk string is a little bit more dense than, you know, next sibling, next sibling, skip, whatever. And we have some codes in there to
[01:28:04]  make it, uh, shorter and so on. But this also is skipped or, or not bundled when this component isn't necessary, uh, in the browser. Right
[01:28:12] . So that's why it's its own separate sort of export and having it be a string also makes it so that it's easier to merge with other components and so on
[01:28:21] . But yeah, not a, not a particularly interesting thing, but. Right. And then apply is our, so we apply is just kind of a random verb that
[01:28:34]  we've, uh, chosen, but the, the base apply function is what's used to apply like the static values, um, in the template. So in this case
[01:28:44] , the initial value of zero is, um, is the only static value, um, in the template. So we have the static nodes up here, static values are
[01:28:54]  in this applied, and then we have apply functions for every reactive value in the, in the template as well. Um, and so in this case, it's just,
[01:29:04]  um, apply count and for, uh, for both cases. So we don't have any static hydration, um, logic in this case, but, um, every
[01:29:16]  value is that, um, every value and also all the static values, um, get split into an apply and a hydrate. Um, and so in the apply case
[01:29:26] , um, and this is something that we actually are thrilled about, um, um, defer that, um, but it will be optimized, um, away, but
[01:29:39]  this is binding this click handler. Um, and this actually happens every time, um, um, count changes, uh, since the click handler actually is reading the value of
[01:29:51]  count. Um, the, then we update the, the data node, and then we call hydrate count, which, um, ensures that we have the click handler
[01:30:00] , um, on the button, and then the click handler is right here. This actually gets hoisted out, and this is kind of one of the other interesting things.
[01:30:12]  So we've closed over this value of count, um, in the, the template, but we actually hoist pretty much every function out to the, the top level
[01:30:21]  of the compiled output. So there, there really aren't like any closures, um, that you can see in this template. Um, and we are actually reading this
[01:30:35]  value from an internal scope that, um, you know, is this template. It actually, the scopes actually span across, um, templates, um, but you
[01:30:49] , you kind of operate on your subsection of the, the scope here. Um, and so count is stored at two. So when we need count, we read
[01:30:58]  it. Um, and then we're, when we're updating count, we write to that, uh, that offset of two. Um, and then the, the dom
[01:31:09]  nodes that are walked to are actually also stored in this scope. So, um, that text node is stored at one and the button is stored at zero. So when you
[01:31:19]  see these numbers, um, and then the, the event handler, uh, shouldn't need to be stored in that scope, but currently is it's stored at three
[01:31:26] . Yeah, I think the kind of the simple walkthrough of what this is and it isn't really showing that it's broken up by, you know, the sources.
[01:31:36]  Cause in this case, there's only one, uh, state really the, the count, but essentially all the apply functions are what needs to happen to render the function,
[01:31:44]  right? So the default apply is saying, okay, if I'm rendering this from scratch, I'm calling this apply. Um, apply count is saying, Oh,
[01:31:52]  if count changes, I'm doing this stuff, but that is like essentially work, the server can do all of these other things like hydrate count. So there can be
[01:32:01]  hydrate for any state you, you, you see in this case, there isn't a default hydrate cause there isn't anything that doesn't have dependencies that needs to
[01:32:08]  be hydrated. But anyways, so all the hydrate stuff is stuff that needs to run in the browser. So when the server is rendering this template, it's going to
[01:32:16]  be like, okay, yeah, I know this, I rendered this thing. I know it's got a hydrate count. I'm going to call that. And
[01:32:20]  so in this case, you can see when it calls that it's going to register that click handler, which is exactly what we want to happen during the hydration process. So
[01:32:29]  the interesting thing here is if we took this template, say it's at the top level, our compiler is going to know that, you know, essentially half of this template
[01:32:38]  is unnecessary in the browser because the only little bit of re-rendering that can actually happen is in this apply count section because when the click handler, you know,
[01:32:47]  is executed, which is one of those things that needs to be sent to the browser, then it's going to call apply count so that it can, you know, update
[01:32:53]  that text node that's there. That's the client side rendering, but everything else doesn't need to be sent to the browser. So in this case, that means,
[01:32:59]  you know, we're not sending that, that top level apply function. We're not sending the template, the walks, like all of those exports, none of that gets
[01:33:07]  sent to the browser. And I mean, this is a component that looks like it's pretty much entirely reactive and we've still been able to like strip out half of
[01:33:16]  the code, right? So you can imagine that becoming much more pronounced in real examples. Yeah, just give me a second here. Just kind of iterate over it. Basically
[01:33:27] , when this first hydrates in the browser, it doesn't need to run anything but that hydrate function, right? Essentially, the apply stuff doesn't run. Like
[01:33:37]  the only thing we actually need is the hydrate. So, it comes in and it goes, add the click handler. Hydration done. Then when someone clicks it
[01:33:46] , because the click handler is on it, it then calls apply count, as you see inside the click handler, and then it runs the code in here. And that means
[01:33:57]  that that's all the code you need for the component when it's just a toggle and not staple outside. Because essentially, you just get to tree shake the rest of
[01:34:10]  this. Right. So, we don't actually have the export in here. But what would happen if this was being used for hydration? This is all running in the browser
[01:34:24] , obviously. But if this were being used for hydration, we would export this. And we would tree shake based on exports, right? So, these exports would not
[01:34:34]  be used. This one would be. And so, we, I mean, and this isn't even we. Like we get to rely on the, you know, the
[01:34:45]  bundlers to tree shake this for us. Like Rollup just, you know, eliminates all this code for us, because from, from walking the one export that's
[01:34:55]  used, we're like, okay, so, um, this one click, uh, is referenced and, and then the supply count is referenced from that. And so like
[01:35:09] , we're, we're able to just get rid of, um, the rest of this code. So, so that's kind of nice. Yeah. And the
[01:35:16]  other thing is, you know, Michael pointed out that essentially there's this scope that is outside of your component here. Like there's all these numbers that are referencing things in
[01:35:26]  a scope and that's super intentional. Um, because one of the things we need to be able to do is essentially say, okay, here are relevant things in the scope
[01:35:35]  that is going to be necessary when we go to the browser. Right. Um, so in this case, let's think about what needs to happen when we run that
[01:35:44]  event handler, right? So that on click, what does the browser need to have available to, to execute that? It actually needs to know what the current value of click
[01:35:53]  is because a plus plus is really, you know, count plus one. So it's reading count. And so we know that count actually needs to be serialized in
[01:36:01]  this case. Um, so what the server would do is it would be like, okay, I'm going to serialize that count. You know, it's that scope
[01:36:08]  position one. I know that's the only thing you need serialized. Maybe there's other stuff in here. That's like constant stuff like that, that only makes it
[01:36:13]  to the, the dom nodes. It's not used in an effect or an event handler. Those just don't get serialized. Um, so essentially we're able to
[01:36:20]  look at the template, look at the effects and event handlers, look at the things that are referenced in those scopes and just mark those as being serialized.
[01:36:28]  Whereas, you know, if we were looking at quick, um, like we talked about before, it's going to be like, Oh, this is a section that could
[01:36:34]  maybe, uh, re render. And so, well, it doesn't know that it can maybe render. It assumes everything could maybe render. So it's going to have
[01:36:40]  to send essentially everything, um, that is related to that. Whereas we're able to work backwards from the functions that we know we're going to execute. Um, if
[01:36:49]  that makes sense. So like, we know, like if this button here's a, maybe a better example, if this button was receiving some data, like let's
[01:36:58]  imagine it was receiving, um, like a multiplier or something like that as a, um, color. Sure. It's receiving color. I don't know why it's
[01:37:07]  using color. Maybe it's like a color wheel or something like that. Sure. Yeah. This is a decent example. So we've got color it's coming in,
[01:37:15]  it's going into a style. And then this is a top level component. We know style is never going to update. We don't need to serialize style.
[01:37:21]  We don't need to run any of the apply code related to color, right? Like all of that gets to be tree shaken and this is across components as well. Um
[01:37:29] , so yeah, so even though we added some code to this component, it's still just these same three functions that get serialized to the browser, unless the parent is
[01:37:39]  actually sending in a stateful color and then the parent would cause that to be pulled in. Yeah. How, how does that work? Because this, this, if
[01:37:48]  you go up here, sorry, this apply color, who, who calls it? Yeah. So this is also not exported. We, we're, we're still,
[01:37:56]  um, this is something that actually does not fully work yet. Um, attributes, which is, you know, kind of a fundamental thing. Um, that's also why
[01:38:07]  a lot of our demos are all in one file right now. Um, but this is a function that can be exported. And so the parent can, uh, just
[01:38:16]  pass the, the color in, um, just like we're passing in apply count. So if you have a click handler that changes, um, the color that's passed
[01:38:25]  in, you know, you can call this function and if that's stateful and that click handler, you know, like is calling it, then that's gonna cause
[01:38:33]  this to be included in the bundle and it'll be available. If the parent just passed, you know, just use this, like my button color red, you know,
[01:38:44]  that's gonna be called, um, that would be called from its apply function, which doesn't get included. And so this apply color wouldn't get included because big
[01:38:53] , just so I follow if, if, if, if they just put that static value in the parent never needs to import the apply color function, because we know that it
[01:39:02]  would have already been rendered on the server. It does import it. Um, but it would only use it from within its apply function. Cause this is where all the static
[01:39:11]  stuff goes, right? So it would call apply color, um, from its own, uh, And if it was not stateful, then it's apply function went
[01:39:23]  to made it to the browser, which would then tree shake out the rest of it. Right. Well, it's apply function will never make it to the, the browser
[01:39:31]  unless it's like actually needing to be rendered from scratch in the browser. Right. Right. Which is the case if it's like under a stateful control flow. So
[01:39:42]  under a stateful, uh, loop or under a stateful, uh, if statement basically, cause that's the only case where you need to render something from scratch
[01:39:51]  in the browser with an MPA. Um, and this isn't just like static values to be clear, like Michael put a, you know, a string literal red there
[01:40:00] . It's not because this is a static value. It could be a dynamic value that's calculated based off of, you know, the input or calculate, like it could
[01:40:07]  be new date or something like that. As long as it's not derived from state, it does not make it to the browser. Yeah. So we, we've
[01:40:13]  kind of coined a term for this just to help us talking, uh, about it. So we have static values, which, you know, this is obviously a static value
[01:40:24] . And then we have dynamic values like the count, which actually do change. Um, but then we also have inert values is what we've been calling them. Um,
[01:40:35]  and they are essentially static values, but they're kind of like dynamics values if that makes sense. Basically they need to be something that, yeah, it's something that
[01:40:46] 's, it is dynamic on the server. Like not every user would necessarily receive the same value. Maybe it's based on the URL, but it's something that will not
[01:40:55]  change once it gets to the browser. And so both, both, um, values or, uh, you know, reactive applicators that, uh, have to do
[01:41:04]  with static and inert values can be, um, eliminated from the bundle. Yeah, it's probably a little bit like new terminology if people kind of, but basically the
[01:41:18]  compiler using the reactor graph, using the reactive language knows what is stateful fine-grained, like right down to the signals and knows their dependencies. So we can trace
[01:41:31]  that whole graph and go, these are the things that actually can change in the browser and the rest of the stuff can't. And in so you can take these components
[01:41:40]  and maybe sub trees of components that look like they're pretty stateful, which would be included. If you're using Astro would be included as islands. Um, and
[01:41:51]  basically go, no, actually we don't need half this code. Maybe, maybe we don't need three quarters of this code still within these stateful looking components, simply
[01:42:01]  from the fact, um, that we know what can change. Right. So, yeah, I mean this, this, this, I don't know if this is
[01:42:09]  coming across. I don't know if anyone wants to throw something in the comments or the chat, if they, if this is making sense, it's a little bit technical
[01:42:15] . We knew we'd, we'd get here and yes, we wanted to focus on the DX part, but essentially the same thing that allows us to have, you know
[01:42:23] , really interesting, you know, powerful development experience actually informs, um, the templating, right. Because there is a clear syntax around these tag variables around, um
[01:42:35] , because like they, they all derive from each other, you know, like the, the fact that you can have my let has a specific syntax. So we know
[01:42:44]  that it, it could be stateful and Marco's compiler walks through files into other files, cross modules boundaries. That's definitely something that's probably the most unique thing about
[01:42:59]  the Marco compiler itself. I don't, I'm not aware of another framework compiler that is actually going across templates and like, you know, like, okay, how
[01:43:08]  is my child set up? Um, okay, if my child is this, then I'm going to merge stuff and like, you know, we're actually looking across templates
[01:43:16]  to produce more. Right. TypeScript looks across templates, but it actually doesn't change any of the like compiled code with the knowledge that it gains. Yeah. From that
[01:43:26] . Like, just as an example, you know, Marco, so if you're this apply color thing, so we're receiving a color attribute, the parent component needs
[01:43:36]  to know that this thing receives a color attribute and that it's called apply color, right? If this thing didn't receive a color attribute, say it received no attributes,
[01:43:45]  the parent would just not even call that function. It knows that the, you know, the child component has nothing to do with it. Um, so yeah, the,
[01:43:54]  the parent needs to also like, there's also stuff around like scope merging and the data serialization that, um, uh, requires a little bit of analysis across components
[01:44:05] , but that's getting into the technical and like, ultimately it doesn't really matter. Like for the most part, all we want to do is guarantee that we're only
[01:44:15]  sending code that is necessary for the browser. And we want you to be able to write in this nice language and not really look under the hood, right? Cause in
[01:44:23]  Marco four and five right now, we have a tags API preview that allows you to use like all the same syntax. It doesn't have the same performance characteristics, but,
[01:44:31]  um, you know, you're able to not even think about how it's working under the hood. And that's part of the benefit of it being a language as
[01:44:38]  well. Right? Like we get to optimize things for you. Um, yeah. So in general, like you probably like, maybe in the future, we come up with
[01:44:48]  something that's like 10% smaller and it's like totally different or something like that. This seems like a pretty, like we're getting pretty close to the metal at this
[01:44:56]  point. Like where's the reactive runtime here? Um, there's a Q function that's important. Yeah. Yeah. So you guys aren't like, there isn
[01:45:05] 't a reactive, the reactive system is you compile the way that's worth pointing out, even though the language is reacting, when you see the, the, the language react
[01:45:13] ivity that our knowledge of signals and effects and derivations, even though it's there, this like, uh, Svelte kind of compiles it away. Um,
[01:45:22]  not even into primitives, but literally topologically sorted functions that have, uh, dirty checking wrappers around it. Um, if you notice in the template, there
[01:45:33] 's some ifs, um, and that's, that's what's going on when it's like, right. It's like, if right, it's just saying
[01:45:39]  like, did, did this change? Right. Yeah. I think this is a key differentiator from Svelte. Maybe I missed what you were just saying, but
[01:45:45]  like essentially, you know, Svelte has this function of all your stuff with a whole bunch of dirty checks in it. Right. Marco breaks up those functions into
[01:45:55]  as many as are needed to describe the dependency graph with a single dirty check in each one, right? It's fine grained. Yeah. Yeah, I think you
[01:46:05]  said at one point, what was it like? Svelte is like if you took a compile time react, and Marco six is like if you took a compile time solid
[01:46:16] , basically, right? Yeah. So, and the bundle size, I mean, we haven't mentioned it on stream, I don't know if we've even shared
[01:46:27]  it publicly. But like right now, it's sitting around 5kb all in. And that's, that's a little large. I mean, compared to like react
[01:46:38]  or something like that. But I mean, that's that's literally all in with all of the features. Yeah, because you use preact with hooks, it's about
[01:46:48]  4.3 kilobytes. So not too far off that Svelte is sitting at two kilobytes. So they, the thing is, you know,
[01:46:56]  the component scale is a whole other conversation to help. Right. And that's honestly, like, the 5kb Marco right now is like 16kb or something like
[01:47:04]  that. Like, that's not really been our focus as far as how can we get this runtime small, it's because we have this giant other problem over here of all
[01:47:11]  of the code that you're bringing into your application in general, right? Like, that's where we're going to save hundreds of kilobytes of, of JavaScript.
[01:47:18]  And this, yeah, the scaling and the way you look at the JavaScript bundle size. Yeah, it's a completely different scenario, when you're looking at things from
[01:47:26]  this way. Yeah, I think having these two values that intertwine might be helpful to look at as well, if we want to do that real quick. So,
[01:47:42]  so we, we've got the initial values coming in and apply, but what you'll notice is that apply count and apply multiplier, both cue this apply with with count
[01:47:53]  and multiplier. And, and that function is what actually updates this text node. So you can get here from both apply count and apply multiplier. And yeah, I mean,
[01:48:09]  this is just like what you expect from fine grained reactivity, right? But like, if you change count and you don't change multiplier, then just the count
[01:48:19]  stuff runs and then it calls this function and updates this, but apply multiplier never has to be called. Right. Um, and so the, this cue function is kind of
[01:48:32]  the, like, like we said, the only piece of the runtime that ensures, um, and you see, it's actually got a cue priority here. And if
[01:48:42]  we go to apply count, like this also has a cue priority as its second argument. So, you know, this ensures that apply count is gonna run before apply with count
[01:48:53] , uh, multiplier in case like both of these were to, to update, um, at the same time. Cueing is still important because it's, it's
[01:49:03]  like any kind of reactive graph. At a certain point, you're gonna have these diamond shapes and these, like, large, like chains of derivations and you want
[01:49:11]  to make sure that everything runs in the right order and runs once. Right. And we, we went through a number of different, uh, scenarios where like, can we
[01:49:22]  do this, you know, purely compile time. And it's like for a lot of scenarios, yes, you can, but there's always cases that exist that like,
[01:49:30]  you have to do some kind of runtime sorting. Uh, so we, we, we do have, you know, that little bit of, um, of a priority
[01:49:41]  queue in order to enable like cross, um, cross value, uh, like intersections. Yeah. We've got like a handful, a big, big, actually a scoop
[01:49:57] ing handful of optimizations that we can apply on top of this model that we're going to be, um, tackling and getting rid of queues in some cases and
[01:50:06]  merging things such that the execution order is defined within the actual compiled functions is one of those. Um, it's just not something we've tackled yet. Cause we're
[01:50:13]  trying to flush out like the base case unoptimized, which is kind of funny because this whole thing is like already quite optimized. Um, we want to actually
[01:50:22]  share how we've been doing so far in the JS framework benchmark. Sure. If Michael has the. Do you have the results? What port is this on? I think
[01:50:32]  it might be running on port 80, 80 already still like still running from earlier. Yeah. Cause I mean, we, we, we, we, we, we,
[01:50:39]  this is, we, as you mentioned, we don't have multiple components. We haven't like there's features missing, but we have enough features to, to make it
[01:50:46]  to do NBC and we have enough features to make the JS framework benchmark and, um, you know, there, there's still room for optimization here. This is just
[01:50:53]  really preliminary. You know, this is like, this is not happy about this. Yeah. We were not happy about select row, but no, one's ever happy about
[01:51:01]  select row unless there's frameworks named solid. So uses, you know, that some people might consider cheating, but it's, it's legit. Cause it's not
[01:51:12]  using the Dom, you know, it is actually using the reactive system, but right. Yeah. I want to be clear that there has been basically zero tuning, um,
[01:51:23]  of this as well. It's just like, yeah. So it's something that might go a little bit in either direction. Cause we're not totally done either. Like
[01:51:32]  with the feature set, maybe there's something we find and we need to make performance slower, but we are trying to stick to like within this range. Um, so
[01:51:40]  yeah. And if you look at, I don't, we have the Marco four on here. You can see one of the benefits of this approach. I always tell people
[01:51:48]  that solid has one weakness. It's that the nodes require memory because of just like the reactive system has a cost. And that's why if you look, if when the
[01:51:58]  competitors sent a flirt, which is the code name for Marco six, you can see that solids clear rose is red compared to it. Cause that is the one benchmark that
[01:52:07]  I can't bring down. And this, this, if you look at this, this overhead, because it's just vanilla, you've compiled out the reactive system has basically
[01:52:17]  the same clear rose or memory characteristics, very similar to vanilla JS. It look, it's way better than any other framework in terms of clear rose. Um, and
[01:52:27]  even make solid look red in comparison. Um, other than that, it is significantly faster than pretty much most of the other ones here. Right now, it's sitting very
[01:52:39]  similar to Inferno on performance, but we were kind of just grabbing some of the, like the big ones. Uh, we actually grabbed this for a presentation the other
[01:52:46]  day internally. And we, you know, you can see the common players like lit, svelte, view, preact, react, and old Marco. This
[01:52:53]  is, this is, this is basically miles ahead. I said right now we're sitting around Inferno level performance, and we're going to kind of figure out where
[01:53:01]  we go from, from here. If you look at it, other than select rows is the only thing killing us here. The rest of the numbers are actually would stick other
[01:53:09]  than select rows would stick flirt, probably right up in the same range as solid. Like if you look at the rest of the numbers, they are actually like almost identical,
[01:53:20]  like tiniest bit bigger on create, um, tiniest bit better on partial. Yeah. So my, my guess is this would go from a 115 down
[01:53:29]  if, if, if, if the partial could like, wasn't part of our select rows and part of the equation easily into the sub one, the subtends or whatever
[01:53:36] , you know, like, but yeah, we'll have to see what we can do with this approach. Yeah. But I think the, you know, the age old
[01:53:42] , the fastest code is the code that never runs is the part that, uh, obviously we care a little bit more, more, um, about in the aggressive tree
[01:53:49]  shaking and all that stuff. We just don't want your JavaScript running in the browser. Like if you have to hydrate 10,000 rows, you lost. Um,
[01:53:56]  Yeah. Yeah. Yeah. Like, yeah. Like this is the client side rendering. This is like in ideal world, Marco isn't even going to be doing most of
[01:54:04]  this work. Um, because it's a partially hydrated framework. This is, this is like, this is, this is just what happens when it happens to do the state
[01:54:11] ful stuff. So, you know, you know, this is pretty fast, you know? Um, yeah. Um, you know, again, the, the idea
[01:54:20]  is that we, we obviously want it to be fast and like within the ballpark of these things, but this is just like kind of a secondary benefit of the, um
[01:54:27] , you know, the, the way we're splitting stuff up and trying to make the components themselves small and tree shakable and all that stuff. It's just,
[01:54:35]  um, obviously we care about the client side, uh, rendering performance and, you know, maybe once we have everything else fleshed out, we'll come back here
[01:54:42]  and I hope someday that we'll be able to, uh, you know, knock solid off the throne. Um, but it isn't really our focus. Yeah. But
[01:54:52]  yeah. No, yeah. So this, this is just some client performance. I don't know if we want to demo on this. I want to talk a little bit
[01:55:00]  about resumability. We introduced it at the beginning, but we haven't really impacted and talked about what that effect is on async data or, or like anything
[01:55:09] . I want to, I want to talk about resumability and how it actually, because it's not just about hydration. When, when we know what's on the
[01:55:18]  server and what's on the client, it actually changes because if the one thing that we haven't really highlighted here so much is we saw those lexical scopes arrays
[01:55:27] , right. When we were looking at it, like all those read one, read two, read three, and, uh, quick has a very similar mechanism to,
[01:55:34]  uh, that less that's hoisted, get rid of the closures and keep great event handlers apart from the, um, the rest of the running code. But
[01:55:43]  it means that we serialize potentially if we were naive and we thought everything could run in the browser. Well, we've actually upped our serialization. We, we
[01:55:51]  serialized everything aggressively. That actually makes our load larger, um, potentially, and our HTML even bigger. And that's actually really quite bad. Um, again,
[01:56:01]  I could pull up that remix example where the data serialization is basically the, the crippling difference between remix and Marco. So I I'm just kind of knowing what's
[01:56:11]  on the server and what's on the client, how does that change the equation? Well, I think it's, you know, kind of like I was describing before,
[01:56:19]  um, it, in an ideal world, you want to know exactly what's necessary to be serialized for the stuff that is going to run in the browser. Okay
[01:56:29] . So then you have to walk back on that. What is the stuff that needs to run in the browser? Uh, and we've kind of solved that problem to these
[01:56:35] , you know, hydrate functions, right? And so we're able to look at just those hydrate functions, what are those, what do they use? Um
[01:56:41] , let's, let's, let's just serialize that. Um, which means that anything that is used to initially render a template is never, um, serialized
[01:56:52] . If you don't know that a template, uh, could re-render or something like that, if you're not doing this analysis, well then, okay, maybe
[01:57:01]  it could re-render. So you have to serialize its input or you have to serialize, you know, all, all the other things that you would need
[01:57:07]  to serialize. So I think the only way you really get around that is by knowing, Hey, this is the code that is going to execute in the browser. And
[01:57:15]  this is, you know, um, and we have that. So yeah, I could go into other benefits to that, but as far as like the raw, um,
[01:57:24]  what needs to be serialized to continue in the browser? I think it does just come down to figure out what needs to run in the browser. These hydrate things
[01:57:32]  that add events. It's the things, it's the things that need to run in effects and the things that need to run in event handlers, right? Basically you
[01:57:41]  can load like picture are an example where you load a bunch of data on the server in the kind of server land where, and then you go and render your page with
[01:57:50]  this data. We own that data could be a user with first name, last name and an address or something, right? Like a bunch of information and we could display all
[01:58:03]  that information on the page about the user. But we, we also have this piece of information. We also only have one button on the page that lets you, let's
[01:58:15]  say it's your own profile. Let's pretend you can't edit everything. I don't know why you do this, but pretend you can just only edit the first
[01:58:21]  name in this location. Um, in, in that scenario, look, actually, no, that's not even a good one. A better example would be a list of
[01:58:29]  users, like a table of users where you have a for loop and you're, and you're, and you're basically showing a whole list of users and pretend all you
[01:58:37]  can do is change the first name of any user in that list. even though we show all the user's data, um, because there's only a event or click
[01:58:49]  handler that interacts with that, uh, you know, that, you know, person's first name, we can choose to only serialize the first name of every entry rather
[01:58:58]  than serialize the whole list of data. And we know this because of the reactive graph and how, and where things are used. Um, I don't know. And
[01:59:06]  actually, actually depending on how it's implemented, like, if you're just, if you could read that value from the, like an input itself, right? Like
[01:59:16]  if you had server rendered and the, the editable input, you don't even need to serialize it in that case. Yeah. It's like you read stuff from
[01:59:24]  scope. Yeah. That's kind of messing up your example, but yeah, but what I'm trying to say is it's not as simple as like all or nothing
[01:59:33] . Right. Right. It's not like you, if you load a list of users and you need some data from those users, you're not just like, you're
[01:59:41]  not just like in this condition where you're like, oh, well now I need these users. It's like literally Marco will automatically figure out which fields within that nest
[01:59:52] ed data need to be serialized simply from the usage. They don't, won't send the whole user. We'll only send the pieces and you might be like,
[01:59:59]  well, is that unsafe? What if the view changes to depend on that data or whatever, but it's all reactive stateful graphs. And because you know that data is
[02:00:08]  fetched outside, like in the non-state area, like in the server area, you know that nothing on the client could cause it to, to render again,
[02:00:16]  like to cause it to fetch again. So, and, and actually even in the case that you could say, say that async fetching is something that could, it
[02:00:25] 's driven by a piece of state. Right. Um, even in that case, we don't necessarily, we don't need to send it down except for where it's
[02:00:37]  actually needed because what's presumably going to happen, you know, say, say, say this is all from a fetch call, right? You've got this piece of
[02:00:46]  state that's like, maybe it's a, a call to like a get user API in this instance. Um, so when the state changes, we go make a
[02:00:58]  call to that API and we get a whole new user object, right? And so we didn't need the old user object in the browser. And we, we would actually
[02:01:13] , depending on how you're using it, right? Maybe we need parts of the old user object because you can, you know, do certain things with it. Maybe
[02:01:23]  there's an effect that like logs the name. Well, maybe an example would be like to be sent down here. If you're, if you're doing this, like
[02:01:31]  hit on the database and you didn't need to serialize any of the additional data, you're just sending a new data. That's from the form. Presumably
[02:01:37] , you still need like the user ID or something like that to actually do the fetch request to that specific user. And so that user ID is probably going to be read in
[02:01:45]  your effect that does the fetch. Right. And so that's what Mark was going to serialize, but nothing about the user necessarily. It's just totally what you
[02:01:51] 're using in the, um, effects and event handlers. Um, yeah. And so I think along the same vein, I mean, it's interesting that Marco's
[02:02:00]  serializing things, um, hopefully the minimal amount compared to other frameworks, I think we're definitely approaching that and it automatically dedupes stuff and whatever, but there is
[02:02:10]  a developer experience side of this as well, like most kind of performance things. But, um, so like, you know, we said at the beginning, sort of
[02:02:20]  Marco's promise in Marco six is that we only render your component once be it on the server or in the browser. Um, and that actually is huge because there's a
[02:02:30]  number of cases where if you have a framework that does this like restart slash re-render style hydration that you don't actually want to redo work, like it, sometimes
[02:02:41]  it feels really bad. If you're doing like an async task on the server, like say you're doing that fetch on the server. Okay. Well, you probably
[02:02:48]  don't want to redo the fetch when you client side render. Right. So, okay. Now you've got to build a cache and you've got to serialize this
[02:02:53]  cache and like all that stuff, but you just don't have to think about that with Marco six, right? Like you're able to just do the fetch, the server
[02:02:59]  did the work. Okay. We serialize anything that's necessary in these event handlers and effects. Um, if the state changed and caused that fetch to happen again
[02:03:06] , okay, now we're doing the fetch in the browser, but like for that hydration process, it just doesn't do it again. Right. Right. Because the,
[02:03:13]  yeah, because essentially if you view that async data as like, uh, um, uh, async memo or computation or whatever, like review it as, uh,
[02:03:23]  some kind of derived states. So like you, you're fetching users by ID and essentially whenever the ID changes, then you fetch the user. Right. If,
[02:03:34]  if, if, if, if Marco does that work on the server and gets the user and, and, and finishes that and renders it in it, we know because
[02:03:45]  we don't rerun any, uh, derivations on the, you know, like any of these kind of computations on the client, we're safe. We
[02:03:54]  know that we don't like, it's not going to rerun. Right. I'm just reiterating what you're saying again. I just want to use the reactive
[02:03:59]  terms. Um, because simply the fact is it, it looks at where, where we use it. So grab the couple fields that are used, you know, in the
[02:04:08]  effects, but it's default because it's not in that hydrate function is not to run it again, which yeah, as I'm just. Yeah. Like a
[02:04:17]  whole, a whole level of things and caching and serialization and, uh, like query related stuff becomes so much simpler. It's it's. And in general,
[02:04:28]  like those kinds of things you want to be doing on the server anyways, and not repeating the work. And so you're going to end up serializing it in some way
[02:04:35] . Um, yeah. So it ends up just like eliminating a class of problems. Right. Like, like all the like special kind of query, uh, libraries,
[02:04:43]  you know, that have come sprung out on the single page app side where they're like doing SWR and like doing all these like Apollo and like a lot of,
[02:04:50]  a lot of those kinds of things where the, the whole way, the trick they have to do is when you do that initial run, you load all the data from the
[02:04:59]  server into, uh, into, um, you know, this cache on the client so that when the client replays it and does it, it goes, oh,
[02:05:07]  I don't have to hit the server again. I've already got it in the cache and that that's the process. And it's, it's actually a pain in
[02:05:12]  the ass for streaming. I mean, this is what I hit when I was working on GraphQL for Marco, uh, because everyone assumed like picture it, if you're
[02:05:18]  sending the page in chunks and you're doing the query and you know, queries and chunks on like different queries on your page and you, you, the first section finishes,
[02:05:27]  you know, like that async fragment or suspense boundary, depending on what your viewpoint is finishes. And you, you, you, you can send its data, but
[02:05:36]  maybe something else hasn't finished yet. And almost all the existing solutions assume that the server's done serializes all the data into the page and that all that data is present
[02:05:45]  before the client can start hydrating. And they build these whole libraries around this. Whereas what's cool about the Marco six approach is that part is just abstracted right
[02:05:55]  out. You, you don't, you don't care. You just do the fetch. You don't have to let Urkel or something necessarily like do the serial
[02:06:02] ization. If, if, if, especially if it's something in the server side, or you're not like triggering the cache, but like essentially what's, what ends
[02:06:09]  up happening is it just serializes Marco automatically serializes only the fields you use and what you actually need. And then it does a piecewise because it's built right into
[02:06:18]  the, into the system. You don't have to worry about these weird cache inconsistencies. It's just, it's just how. Right. And yeah. And
[02:06:25]  that's key. Like if you're doing a request with SWR, anything like that and it's getting serialized, you have to serialize all of it because
[02:06:32]  you are running all of it again in the browser. We aren't right. And we're only attaching the stuff that is actually necessary to hydrate the page. And so
[02:06:41]  we serialize what's necessary for those things and nothing more automatically. Right. Um, so it ends up serializing less and it's automated. Uh, and you don
[02:06:51] 't need these like crazy wrapping libraries that are doing weird things, especially like once react starts and some of these solutions start actually supporting streaming, they're going to hit so
[02:07:01]  many, uh, roadblocks and, and issues. Like it's a different, uh, challenge when you're trying to stream stuff out and also create this like buff
[02:07:10] ered cache things that we can replace stuff back when it like gets to the browser and this async. Yeah. Anyway. So that's going to be an interesting challenge for
[02:07:16]  the react ecosystem. Yeah. I mean, yeah, I mean, this is one of the interesting things here is because these pieces all start playing nicely together when you start
[02:07:24]  realizing it, because that knowledge for partial hydration and, you know, reduces the serialization costs, which, and this resumability reduces the caching. And suddenly you
[02:07:34] 're just pulling all the stuff out of the browser, which is de facto what you think you need for a single page app. Like when you come in and you're like
[02:07:41] , I need these libraries. And it's like, no, maybe you don't need these libraries because these just aren't even problems. And there's this sort of
[02:07:51]  kind of simplification here in terms of the model there. But obviously this is something that we enjoy because we work out, we're working here on a multi-page app
[02:07:59]  and we, we know, you know, I, I think Ryan threw it up here at one point, MPA will limit the lifetime of the components before the server would
[02:08:06]  be involved again. So essentially we, we just know that this stuff will never be rendered again. So like we can just optimize a way because we know on the next
[02:08:15]  page load, well, we're starting from scratch again. And just that whole class of libraries, you know, suddenly go away. Like remix has been enjoying playing this game
[02:08:24]  on a very light level in that they've been like, oh, look, you know, you move everything to the server, suddenly you remove a whole class of libraries you
[02:08:30]  need to use. But the remix story is, isn't, isn't the complete story because it's still assuming that everything renders the client. So there's still
[02:08:39]  this song and a dance. They've solved the fetching problem. Like the loading problem for the most part, other than the serialization and the double data problem, which
[02:08:47]  again, is why Marco and those examples look good, but they, they've got rid of the waterfalls, but they haven't like for mutations, it's, it
[02:08:54] 's not like that because like, if you mutate and then you redirect to a new location, like you play that, you do this kind of in single page apps,
[02:09:02]  you just kind of dance where you do the mutation and then you get the result back and then you migrate to the new place and then you fetch the data for the new
[02:09:08]  location and then you get the result. Whereas with an MPA mentality, where you're not playing around with like updating the caches and kind of doing the stance, you
[02:09:17]  just go mutate, server respond with the new location. You just, you've cut out the middle man and that's really what's kind of powerful in terms of
[02:09:24]  simplifying the model. Um, and I think, I think this kind of, uh, ties into, um, you know, uh, other frameworks, you know,
[02:09:33]  like Astro have kind of come in and slinkity and they're, they're kind of enjoying this on the static side, but they're only just getting to the
[02:09:39]  dynamic parts. They haven't got the point where they're leveraging stuff, um, like, uh, streaming or to kind of leverage these other aspects of, of things.
[02:09:48]  And I think it's interesting because React is actively looking into this. Like they, they, if you've ever seen React server components, hopefully you saw it on my
[02:09:57]  stream, maybe it's very similar to the Marco four or Marco five mentality of, of how things work. It's like, it's actually a lot like Astro.
[02:10:05]  It's people think at first that, oh, React server components is about rendering some components on the server. It's not, it's actually a complete architectural change that resembles
[02:10:14]  Island's architecture, except they have a smart-ish way of re-rendering the server portions, but you still route full pages and then they, you know,
[02:10:27]  do like the work on the server and kind of ship it back as if, as if it's an MPA. It's just the client's smart enough not to unload
[02:10:35]  the state and do some smart diffing there. And to be fair, React's looking at ways to make it not full page anyways. Um, so it is, it
[02:10:43]  is, it is definitely, um, one of those things where good work is being done in this space. Um, and, but it's interesting for me mostly is
[02:10:54]  because Qwik and Marco are kind of like, that's not good enough. Like we, we want to go beyond Marco four or Astro or, or React server
[02:11:04]  components. And at first this seems like just an optimization, but I hope from the conversation, what we've covered here, you can kind of see that this is actually a
[02:11:13]  DX win because you're not going like dot server dot Astro over the, all over the place. And hopefully you can see that's a performance win because of the
[02:11:21]  granularity of the change. And basically, and it saves on today's organization. It literally saves them every single aspect. I wrote an article a while ago about the challenges
[02:11:31]  of hydration and, um, you know, and boiling down to like this duplication, like you're duplicating either view code or sorry, you're duplicating either
[02:11:40]  data or you're, or you're duplicating like the view code essentially, right? Like either you're, you're shipping your components and your HTML and you're duplic
[02:11:49] ating your data and the data serialized into that HTML. And Marco's approach here is removing that duplication across the board in a way that's performant on the client
[02:12:00]  10 server. So it's very powerful, but we're still an MPA, right? So we're still, you know, some, some people are like,
[02:12:07]  well, you know, that's, you know, my app is more interactive. I want those client side transitions. And I think, I think what's interesting about what
[02:12:18]  we're doing here is it's opening up the ability for us to kind of look beyond the MPAs of today. And I want to, I think maybe it's
[02:12:26]  time we actually talk a bit about this because I know we've been talking about Marcos 6 and if people have any questions about Marcos 6, maybe now's a
[02:12:34]  good time to kind of throw them in the chat because otherwise I want to move on to talking about some more interesting stuff because I think Marcos 6, even though it's
[02:12:43]  the realization of work that's been going on for a couple of years now, and even longer when I look at some of the articles that where Michael was like hinting at
[02:12:52]  reactivity in like with observables, like back in 2018, like background, the hooks were announced and stuff, even though this has been like, you know, three
[02:13:01] , maybe three, four years in the, in the making, in terms of getting to this point, it's still a bridge to where we're heading. And I think
[02:13:09] , I think we should talk about that. Cause I think that vision is really powerful because sure Marco seems really good for its use cases, you build e-commerce.
[02:13:18]  I mean, it's a no brainer, but can Marco be the framework for the future? And I think the answer for that could definitely be yes, but we should
[02:13:28]  talk about and kind of share some of our ideas, I think. And also, as I said, anyone got any more questions in the chat, feel free to fire them
[02:13:35] . But yeah, let's, let's, let's launch into this because we talked a bit about remix and we talked about routing and we talked about react server components
[02:13:44] . Um, should we just dive right in? Do you, so we, we talked a little bit about how we're serializing the hydration data. Do we want to
[02:13:54]  look at, um, maybe just a simple example, like the, the counter example that we have in the repo, just to see what that hydration data looks like,
[02:14:05]  or if people are interested, I would say, yeah, but at the same time, it's like kind of, it's a serialization format and it's based off
[02:14:12]  of these scopes and like, you know, so it is kind of an implementation detail. Um, we do think it's a pretty, I think it's helpful.
[02:14:20]  Yeah. Well, cause it might be helpful to show the full vision. Yeah. So maybe have it ready to go, but I think we should, uh, ease ourselves
[02:14:28]  into this a little bit. Okay. Um, so like, to me, looking at Marco, it's always, how can you strike the balance between the MPA performance
[02:14:41]  and the, you know, the DX of what is now mostly spa applications. Um, and it's tricky. And with Marco four, you know, I, I think
[02:14:50]  it kind of leaned more on the DX of trying to make it so that you could write components that did client side rendering with partial hydration, but it wasn't necessarily as
[02:14:59]  performance as you could get an MPA. Right. Um, and so I think with, with, uh, with Marco six, we've really gotten pretty darn close to
[02:15:08] , yeah, this is nearing peak, uh, peak MPA performance with those interactive updates, where you define a lab, like essentially where you define your state determines how
[02:15:19]  much code gets sent to the browser, which is, uh, pretty great. But I mean, on the DX side, going back to the DX, it's like
[02:15:26] , what are we missing from spas? What, like, like Ryan said, you want to be able to add an animation when you're transitioning pages, or you just
[02:15:33]  want to be able to preserve state when you're transitioning pages. Like, um, you know, you've got a video player and you want it to continue playing when
[02:15:39]  you go to the next page, like things like that are not possible with an MPA. Um, and that's not great. You can build a spa with Marco and
[02:15:46]  you know, that's fine. Like, especially with Marco six, it's going to have good performance characteristics, a good API and all that stuff. You could build a
[02:15:53]  spa with it, but you're going to lose all of that, uh, resume ability from the server and, um, the tree shaking and all that stuff, because
[02:16:00]  you're going to need everything. Right. And so this is our question is how do we maintain the performance characteristics that, that we want while also giving that, that last
[02:16:10]  little bit, the, the spa like, um, behavior and also not making it so that you have to like jump through hoops and feel like you're in a completely
[02:16:17]  different world. And like, this is a frame over here that's HTML and like kind of doesn't stay in sync and like all that stuff we want to have an actual
[02:16:23]  solution. So that's what we've been thinking about really for years. Um, and we think we're with, with the current implementation of Marco six, we think
[02:16:32]  we're on a track to, um, get there. So yes. Um, Ryan, what do you think is the, uh, the first step in describing this,
[02:16:42]  this future? Yeah. I mean, it's, it's interesting because the problem that, well, I mean, it starts with routing. I, I think,
[02:16:53]  I think that that is the key part, uh, there, how that routing works is complicated. And that's why Dylan's asking this question because, um, there,
[02:17:02]  there's a lot of elements to it, but we need a new type of router or a new type of router. Yeah. Maybe it's important to think of like,
[02:17:09]  why this starts with routing. Um, and it's because the main thing that we're missing right now from Marco with, with MPA is how do you persist state
[02:17:21]  across pages, right? And if it's across pages or sections of pages, what is doing that transition, right? It's a router that's in front of that that
[02:17:30]  knows that it's, um, changed. Um, so I think one key is that we want to, again, avoid sending everything to the browser. Okay. So we
[02:17:40]  want to have the server involved, um, to some extent, and certainly we, we, we probably don't want to send a router to the browser. Like rout
[02:17:48] ers typically end up being quite, quite a bit of, um, code anyways, like you've got all your routes and how to load all these things. Like, we
[02:17:55]  don't want that. We don't want to have it. Like you start with Marco and you know, it's resumable. And then later we download your spa
[02:18:02] . That's not what we want, right? What we want is to have a router that lives on the server. That is smart enough to give us an update that
[02:18:11]  can be streamed in and preserves as much state as possible. Um, so I could get into the details of sort of what we're imagining that looks like. Uh
[02:18:22] , we, we, questions are also obviously welcome at any point in time. I don't know if I, should I just drive this like from start to finish or how
[02:18:32]  do you want to do this, Ryan? It's, it's fine. You can, you can keep on talking. I'm, I'm trying to pull some
[02:18:36]  stuff up in the background that'll help, uh, you with your explanation, but yeah, just, just, yeah, I think showing, uh, what Michael was talking
[02:18:44]  about earlier with, uh, what our scopes look like might help. But so essentially the core idea is this, we've got a page we've described how you can
[02:18:55]  do the optimal, um, you know, add the hydration to, to the page. Okay. So what, what happens when we go to another page? Um,
[02:19:03]  well, if it's a, if it's a brand new page full with like totally different content and components, it's actually going to be faster to just send the new
[02:19:11]  HTML for the page and stream that in. I, but the, the, the, the case that you actually care about is when there is stuff that is similar.
[02:19:21]  So imagine that we've got a router that looks kind of similar to what a spa like router has today, a nested router where you've got this top level, um
[02:19:31] , you know, page that has some content that's persisted across, uh, different views. Like, you know, it's got this side nav and this is the
[02:19:39] , the example Ryan's showing is from remix, which illustrates, you know, nested routing quite well. But I think looking at this from a nested router, uh
[02:19:45] , makes a lot of sense. So let's just imagine, okay, we've got this top level, uh, page, um, that has a router inside of
[02:19:51]  it. And it's got, you know, in the outer shell of the router, it's got this, this nav. Um, and then there's an inner shell
[02:19:57]  one level deep that has a different nav in this case. And then there's some other, another shell inside there. Um, okay. So now this let's, let
[02:20:05] 's take this as the starting point. Okay. So what happens if we navigate to, you know, from sales to expenses in this case, what do we want to
[02:20:17]  persist on the page? We need, we want that left side nav to persist, but we're going to an, an entirely different component when we go to the expenses page
[02:20:26] . So what we actually want is the server to stream us the new HTML for the expenses page. Okay. And then just pause. Yeah. Yeah. Yeah. The reason
[02:20:34]  we want that, and just to be absolutely clear, and this is something that Mishko was in complete agreement with, even if you can progressively load is that we
[02:20:43]  don't want to suddenly have to load all the JavaScript to render said page. When you're in a single page app and you go to there, you need to load the
[02:20:52]  whole thing. Like it's just necessary. Whereas we want to keep our partial hydration. We want to only load, we want the HTML obviously for the whole section,
[02:21:03]  but then we only want to load the JavaScript that you can interact with. Maybe it's only, maybe there's only like a couple of things on this page you can actually
[02:21:10]  do. Like this page looks like it has almost no interactivity that I'm looking at here on the sales page. Like what, what can you do here? Like you
[02:21:17]  don't want to send all the JavaScript to render this where any client side single page app, that would be exactly what you're doing. Okay. Right. Yeah.
[02:21:25]  So I mean, continuing essentially, you know, if you're navigating to what is entirely new components, it is going to be more efficient to leave as much on the server
[02:21:34]  as possible and just get the new HTML for those sections. And in a lot of ways, it's like, oh, we're talking about like iframes and nest
[02:21:41] ed iframes. But no, there's the other piece of this. And this is the piece that's actually challenging because you could do what I just described, like
[02:21:49]  swapping out the HTML for these nested sections using something like turbo links or whatever, where it's just, you know, there's a server and you get some
[02:21:55]  HTML and you put it there, but like nothing's actually in sync and there's weird DX and like all that stuff. But what about the part that actually persists?
[02:22:01]  That's the interesting part. How can we know in this case, in the top level, I'm assuming when you navigate from sales to expenses, it's going to change
[02:22:10]  what's actually selected there, right? Maybe that's rendered on the server. And we're saying when we hit this page, what we actually want is the if it
[02:22:19] 's a new nested route, we're going to get the HTML for that. If it's an existing route higher up in the tree, what we actually want is the
[02:22:28]  server to give us essentially just the values of everything that's in the scope that should update, which is where going into Michael's thing might make more sense. But in
[02:22:42]  essence, what you actually want is there's going to be like a class on sales and, you know, on these on these allies. And that class is going to be
[02:22:54]  tied to something that the server is aware of, like the server is going to know that this is a server only component, and I can render this class using like the
[02:23:05]  apply like mechanism. And essentially, what we want is when we ask the server for the new page, okay, we knew we were on this page already. Ideally, just
[02:23:15]  tell me that that class changed. And so that's kind of what we're going through. Do you want to take it over, Michael? I sent it to Brian
[02:23:23] , so he's got it pulled up there. Okay. Talk about this. This is the scope. Yeah. So, I mean, again, this data format probably doesn
[02:23:36] 't make tons of sense. But like there's a scope, there's a whole bunch of stuff that's unnecessary in the scope. That's why we have a sparse
[02:23:43]  array here. So the Marco compiler figures out what's necessary to go into these scopes. But the key is that if you opt into this router, it's going
[02:23:56]  to mark things that are what Michael called inert. So dynamic on the server, but stateless. It's going to mark those with something that says, Okay, you can
[02:24:10]  update this at a specific scope. If you give me a scope in the runtime, we can go and just update that property directly. So in this case, reactive graph
[02:24:19]  again. Yes. Yes. So essentially, on the server, we know the reactive graph of all of the things that couldn't change in the client, but can change on
[02:24:29]  the server. And so what we are going to do is send back a response format for subsequent requests that essentially is, okay, what are the reactive graph pinpoint updates for the
[02:24:42]  stuff that was persisted across the pages, and stream me the HTML for any new nested routers that were swapped out. And in general, we believe that's
[02:24:54]  going to be like the best of both worlds kind of thing. Because you know, if you want to have an experience where you've got something like this video player, just
[02:25:01]  move it up higher in the route hierarchy like you would do in a spa, the authoring experience is going to be very, very close, if not identical to a spa
[02:25:10] . But now you don't need to ship the router to the browser, you don't need to ship any of these nested routes to the browser to render like hol
[02:25:21] istically, each of these nested routes actually becomes their own little hydration bubble where we can do this partial hydration stuff, right? Like we tree shake the top thing,
[02:25:32]  we tree shake the sales section, we tree shake this invoices section. So like all across the board, we're essentially saying, let's do as much work on
[02:25:41]  the server as possible when we navigate. But if there's something that was already in the browser, we'll just update it for you. Yeah, so just just so
[02:25:49]  to visualize it, because this is this, this, this issue, sort of this example from Remix is really awkward, because they show you how they dynamically import the JS
[02:25:58]  and fetch the data at the exact same time. This is not what we were talking about here. What would happen in these sort of navigations, I guess I should go
[02:26:09]  back to this one is like, the same response, you know, in a streamed format, maybe, you know, where there's a bunch of keys, and
[02:26:19]  values would be able to pass in JSON, sorry, data and pass in HTML as needed. And essentially, because we know our location, and we know where we're going
[02:26:32]  to, and we have some data that we can send on the initial request, we can, you know, send maybe a bit of extra data on our request to the server
[02:26:41] . And it can basically do the diff for us on the server, and then return the chunks of data that need to be updated. And it's just like, okay
[02:26:52] , slot that into the reactive graph and do all the fine grain updates, essentially, is the gist of it. So this isn't zero kilobyte components,
[02:27:00]  necessarily, like it's not like, because now suddenly, because this sales highlight can change in the browser, this is no longer a zero kilobyte component, but it
[02:27:13]  needs literally just the code to update the one field. So while this is technically heavier, perhaps, than a pure MPA, in the slightest sense, on the component
[02:27:26]  skill side, what you're actually talking about here is very, most of the savings still completely persisting, and most of the work being done on the server, even the
[02:27:38]  diff, so you don't need the full React runtime, or the extra, like, I think we were playing with the React server components demo, and we saw that it
[02:27:46]  was React plus an extra 10k. This probably requires, like, I don't know how big, but my guess is like a two kilobyte, maybe,
[02:27:55]  like, like, like, like, like, little bit of extra code on top of what maybe Marco's four kilobyte, depending what features you use, like runtime
[02:28:07] , like, we're talking sub 10 kilobytes. And then the components are still going to only be shipped mostly, like, based on interactivity, like starting
[02:28:17]  components anymore, it's subgrained. So we're talking, like, we're talking about the smallest amount of cost in the browser, while being able to keep the
[02:28:26]  this single page, like persistence and navigation and transitions. Yeah, right. And I think it's probably clear from what you're saying here. But like, if for
[02:28:38]  like, updating this sales to expenses or something, like, what we're going to send is like, that final class value that needs to be updated there. Like, maybe
[02:28:50]  for some reason, you decided to use like, Lodash to figure out like, which classes need to apply, like, none of the it's just those final
[02:29:00] , like, end values that need to be reflected in the DOM that are going to actually be serialized across the wire. For these, because, yeah, because there's
[02:29:10]  two types of updates that you can get from a server on a section that is persisted across navigations. One is stuff for stuff that was actually rendered on the server
[02:29:21] . And for those, we would send updates. That's just like, okay, walk to the like, where the sales is basically an update its class to this, right
[02:29:30] , like the upgrade or the update from the server would say that then the other piece is when you've got this like mix of client side rendered stuff, and basically some scope
[02:29:39]  information that was only on the server. And so in that case, it would actually serialize and say, Oh, we have an update to this scope that was sent to
[02:29:48]  the browser, like, maybe you have an effect that is, wow, what's what's a good example, like an effect that relies on some input that's only
[02:30:00]  available from the server, like maybe, you know, from the URL state or something like that. When you navigate, you actually want to have that effect re execute, right
[02:30:09] . And so what would happen in that case is the server would be like, Okay, I know that, you know, this section here depends on this scope index,
[02:30:22]  and I serialize this value to this scope index. So I'll send this scope to the browser. And then when we receive that, we'll be like, Oh,
[02:30:29]  that scope changed. Okay, fire the reactive graph to execute that effect, ultimately, again. And so, yeah, it's, it's, in a lot of ways
[02:30:39] , like fine grained updates over the wire. With the assumption that if you're just building stuff from scratch, receive the raw HTML stream from the server. So yeah
[02:30:50] , I mean, we have on the screen here, this like import and fetch, right? Like you said, that's not what we're doing. But like, there
[02:31:00] 's a fetch call that needs to be happening here regardless, right? Because we're getting data from an API, what we're talking about is instead of sending that data
[02:31:12]  back in the format that like the API chose to use, and then having some JavaScript client side to like, get that into the UI that we actually want, just ask the
[02:31:24]  server for the UI that we want, right? And so the server takes on the brunt of that work. If you could cache that JSON data, you should be
[02:31:34]  able to cache that HTML response as well, right? So yeah, I mean, typically, we're asking the server for two things. We're saying, give me new
[02:31:43]  UI as HTML, give me updates to old UI as this like scope object that knows how to propagate through the reactive system. Yeah. Yeah. Yeah. Should we show
[02:31:57]  this for a moment? This is really cool. Someone in our, this is actually built on top of solid start as a quick demo. But it was Ryan's probably maybe
[02:32:06]  still in this in the stream, he just told us to give, give, give us your secrets. But he's already aware of some of these secrets. And he was
[02:32:14]  just, he, he hasn't, we haven't done the JSON part or the hydration part, but we were playing around with this idea of how to do nested
[02:32:21]  routing on the, on the server. As I said, this piece is fairly framework agnostic and understanding. I'm trying to, I think it's easiest to see
[02:32:32]  it here, but you can picture that there's this home component. And when we go to posts, you can see that it's just doing nested routing, like
[02:32:42]  you'd expect. And if we go to post number one, we're still nesting more stuff in here. And if I go post one comments, it's just changing
[02:32:50]  the little bits that we need. This isn't the JSON changing this, if we go to post two, then, you know, more like a bigger chunk of it changed
[02:32:58] . But, you know, this is just doing a really simple format. Let's see if I can, I know I can't pretty hear this one, but essentially
[02:33:06]  you're just seeing the HTML being sent in kind of like a serialized format. So the server is actually rendering these portions of the page in a nested way. And
[02:33:15]  then essentially, as we're nabbing or getting around here, it's actually the server that's rendering these. And if you want proof of this, and I
[02:33:23]  was talking about size, like, let's, let's just look at this quickly hobbled together example in terms of like, JavaScript, let's reload this page. See
[02:33:34] , I mean, this isn't hydrating. So if there's hydration code, you'd be, this is 1.3 kilobytes. And as I'm moving
[02:33:43]  around and stuff's updating, there's no more JavaScript being loaded here. Obviously, if we were partially hydrating, we would have to load a bit of JavaScript,
[02:33:50]  but this is just showing that the actual routing mechanism and the rendering is just happening on the server. And this is clients, this is like client routing. Like we could do
[02:34:01]  transitions and stuff like this. We're not redrawing the outer portions of the page. This root element here never gets redrawn, even as we are going through here
[02:34:11] . And that's, that's kind of really powerful example in terms of understanding how you basically, you know, all you have to do is take, I mean,
[02:34:23]  this is the easy part of the equation, right? The more challenging part is updating the stuff outside of here, but you can kind of see that you've stopped it at
[02:34:34]  zero. Like you, this is all the JavaScript, sorry, this was, this is just the, the JavaScript that we have initially loaded here. Sorry. It's
[02:34:43]  this one here. This is all the JavaScript that we needed to pull off this. We just need a little bit more JavaScript, obviously like the runtime to actually do the fine
[02:34:52]  grain updates, but you can see that you're kind of, you're not taking that cost a hundred percent for sure. Like if you didn't go to a page
[02:35:00] , nothing interactive on it, you didn't need to do partial hydration. Well, you wouldn't load any more JavaScript there, but you would still seamlessly come in out of
[02:35:10]  that experience. And that's a huge, huge difference from how like static routes work today in Svelte or Remix because they're like, oh yeah, or next
[02:35:19]  they're like, okay, sure. You could make this page static. But then, then you're like basically opting into doing the full page reload to get into
[02:35:26]  it and to do the full page reload out of it. Like it's not, you, you, you're suddenly in like temporary MPA mode. It's not this
[02:35:34]  transition. It's binary. It's like no code. It's like no JS. It's moving the script tag or adding the script tag. And this is doing it
[02:35:42] , you know, incrementally as you need it. And this, as I said, this is part, this nesting is part of the key here of not needing
[02:35:51]  to like, it lets you reset where you're thinking. You're like, oh, we know everything below this part is rendered on the server. Generally having control flow,
[02:36:01]  like switching sections of page means that's stateful. And by using nested routing, we're kind of opting back into like, no, this is on the server
[02:36:10] . And we get to kind of reset our islands. We get to start that again, inside of, you know, another island perhaps. Yeah. And I think the
[02:36:20]  implications of it are actually pretty crazy. Like essentially with what we're planning, if you want to have something be client rendered, you just use the let tag, right?
[02:36:31]  Like that's going to be a state that's going to bring in the hydration code. That's going to do a client side render. If you want something to render on
[02:36:36]  the server, just don't use the let tag, drive it through input, drive it through the URL that you're going to get information about from the router. Right
[02:36:43] . But it's, you're not really going to be able to tell from the user's perspective, what's rendering on the server, what's rendering in the browser.
[02:36:51]  It's just up to you and how you want the code to execute. Yeah. It's really cool how automatic this is, right? Because one of the, one of
[02:37:01]  the things that, you know, we've been noticing, and I mean, it's more obvious when we were talking about Marco earlier and talking about Marco six API was
[02:37:08]  that like, essentially like there isn't like, oh no, you can't do render props or, oh no, you need to mark this special thing. It's literally
[02:37:17] , you just write the code the way, like there is nothing in any examples that we're doing on the user part where you're writing the code, where you were worrying
[02:37:26]  about the server client thing. And sometimes today Marco four or five, we admit that's a trap because if you don't project data in the right way, you might
[02:37:34]  be including too much on the browser and stuff, but with the smarts of Marco sixes compiler and fine granularity, you could, you can basically start that your top
[02:37:44]  of a page and like, like you can't do this today in Marco today, if you put a class on the top of the page, it's like, well,
[02:37:50]  that page must be run in the browser and bad things happen because Marco assumes that the, the root is server component. But if, if, if with, with Marco
[02:37:59]  six, like essentially suddenly you, you just start adding state because you want to, or need to, and everything will just derive from there. I mean, to be fair
[02:38:09]  with this routing paradigm, you probably have to be like a little bit wise. Like you might have to be like, oh, okay, well, we're not going to
[02:38:16]  introduce state here. If we don't need it, we're just going to drive stuff off the URL or whatnot. But it is really cool that like there is no
[02:38:27]  need for like this, these special kind of distinctions. Yeah. It's like drive it from the URL. You're, you're rendering on the server, drive it
[02:38:33]  from state. You're doing a client side render. It's like that that simple, right? Yeah. So to, to Ryan's point here, um, I
[02:38:44]  mean, yeah, let's talk about the, the challenges with this approach. Cause there's, there's definitely some things that we need to, to figure out. I
[02:38:53]  think there's two big challenges, like the, the route outlets and just sending the HTML and the hydration data for those pieces is like, yeah, fairly, um,
[02:39:05]  fairly straight forward. Um, so there's the, the first piece that I think is kind of interesting is, um, is what Ryan's, you know, mentioning here
[02:39:19]  about how do you update content that's already there? Um, and we can come back to that in a second. And then the second piece that I think is also
[02:39:29]  interesting and challenging is how do we say you have some component on, uh, on the outside. So, cause, cause routes are essentially, you know, uh, an
[02:39:44] , an if statement, right. Um, or switch or switch. Yeah. Um, and so if you, um, it, you can write the API in such
[02:39:57]  a way that you can limit this and actually react server components is right. Is it creating their API in a, in such a way that this isn't, um, something
[02:40:08]  that you can do, but you may want to have a component, um, or context, right. Or, or something like that, where you have some client side
[02:40:18]  state higher in the tree that then provides that data, um, to something lower in the tree. So I guess react does actually have that with, with context. Um,
[02:40:31]  but so you, you need to wire that up such that components that already existed on the client can cause components that just recently hydrated, um, from the server to,
[02:40:47]  to update. Right. So you've got that. And then also the, how do you update these existing things that are already, um, on the client and, uh
[02:41:00] , we, we have some ideas. Um, but I don't. Yeah. I mean, in general, we don't have any code written for this right now
[02:41:11] . Um, but it's just, you know, since we, like the compiler does know this is a thing that is possible to change. Like, you know, in
[02:41:20]  the template that was compiled, we know what's static, right. It gets hoisted out into that string beyond that. We know that things are dynamic and they're either
[02:41:28]  like dynamic and that they're derived from state or there's something that could be rendered on the server. And we know where we know where they slot in as well. Um
[02:41:38] , and so at the very least we already know when we re-render on the server, a page or a section of the page that was there before that we don
[02:41:49] 't need all that static HTML again, right? Like we can, at the very least, just send, you know, this was the class that was dynamic for this node
[02:41:57]  at index, whatever it was. Um, so, I mean, that's, that's one piece. And then the other piece, like I was saying before is
[02:42:05]  how do you get scope information into the JavaScript? And we've kind of already solved that too. And that we have the scopes already outside of all of your code and
[02:42:15]  we can mutate them as we see fit and trigger, um, things. So that piece has a vague solve as well. And then obviously there's like the whole
[02:42:26]  new page thing, um, which is the simple one as you, um, say. So in a sense, it all comes back to, oh, we've, we
[02:42:36] 've broken everything up such that we know that it's fine grained and how like, we've already like labeled all these things and we can have markers on these things.
[02:42:42]  And these markers can be rendered only on the servers that we can walk to them without sending the walks away. And there's all like these technical details of it and all that
[02:42:48]  stuff that just seems to be lining up in such a way that it looks like we're going to be able to approach the server, just sending you the updates to the
[02:42:57]  dynamic stuff that it rendered. And also any scope information for things that are going to be re-renderable in the browser that was calculated on the server. I think,
[02:43:07]  I think lists are particularly interesting, which is probably the thing because I think conditionals and stuff are actually fairly straightforward and people can picture that and routing falls into that category
[02:43:17]  because you're kind of like, oh, okay, well, it's this branch or this branch and you can kind of make that call. Lists are interesting, but
[02:43:24] , um, I guess Markle, uh, four components do have the key by index or key by key, right? So technically if we sent the key information along with
[02:43:38]  the request to the server, then, you know, we could diff the keys on the server and know what new sections need to. And I think, I mean,
[02:43:49]  pagination isn't bad because it's kind of obvious because it's like, you're going to new sections generally, you're not reusing it, but it might be
[02:43:56]  interesting case where you're actually like reloading data that may or may not be the same entries and stuff. So I, I do think there's some, some interesting
[02:44:06] , uh, ability to do that. I think lists are probably actually one of the tricky ones. Most of the things I don't think you actually, as long as you
[02:44:15]  have, um, basically the scopes and you have their locations in most cases, that's sufficient to know like, oh, something changed here. And to be clear,
[02:44:24]  it's not just, even though we use the nested router, which is very obvious in terms of like, here's the new section, HTML, it might be
[02:44:31]  partials in, in a sense where like, if you, I mean, if you, if let's pretend you're on a page and have a list of users and
[02:44:39]  then you add a new user, you know, we, we might be like, okay, well, here's the users that were currently showing the list. Here's their
[02:44:47]  IDs. Like here's the key. And then we go, oh, we only needed to add this one user to the end of the list. So that one actually
[02:44:55]  gets the new HTML. Like the, the HTML partials aren't limited to the router level. They're actually can be done at any conditional branch, which now was rendered
[02:45:06]  on the server for the first time. Yeah. The big thing that the nested router gives us is a simple, um, location to do code splitting, um, for
[02:45:16] , uh, you know, the different sections, um, like set the partial hydration. Yeah. We've reset the partial hydration there, but as far as like asking
[02:45:24]  the server for new data, conceptually, whenever there is something that would go through the apply stage again, that's when we want the server to send HTML. And that
[02:45:34]  can be, you know, an if statement got toggled, or that can be in for loop iteration changed in some way. Um, I mean, ideally with the for
[02:45:41]  loop, we would actually even be able to do like, like Ryan said, a diff on the server to know, okay, we can just do that reconciling hard
[02:45:48]  work for you on the server and send you back the reconcile. If you move an item, um, in the list and stuff like that. Right. Um, and
[02:45:56]  actually this ties a bit into the conversation I was having with Ryan Florence earlier. I didn't dig into it because they, you know, it kind of went on a,
[02:46:03]  you know, a thing about whether remix did this or not or whatever. And I don't, I don't want to get into that, but essentially the whole thing
[02:46:11]  about when to fetch, like the key truth here is the router is what's driving it. Like regardless of whatever async data or whatever other pieces come into us deciding that
[02:46:21]  initial state, the route is the piece of information that gets serialized. It's the day or the request is that maybe do not just throughout the request, the stuff that
[02:46:29] 's sent on the request is the piece that is that source of truth. And that's how we can get away with not using a bunch of lets. Cause we know that
[02:46:36]  stuff coming from the request isn't stateful and, but it's the only place where that data can come from. There's no other source. Like if you have
[02:46:44]  a stateless backend, it's the request where all the data actually comes from. And that's where the route is the logical place because without it being reflected in the URL
[02:46:53] , there's no, there's no change. Like essentially all change in, in, in, in the website from a server client thing has to be derived from that request
[02:47:03] . So the route, the route is just the logical place and making it the URL, using it to nest and subdivide the page is just a really powerful way that
[02:47:13]  we've enjoyed for years on the client side. So why not bring it onto the server side? Right. Um, so like it, it's just, it's just
[02:47:20] , it's just kind of, um, a very, it makes a lot of sense because it's like the route is the, the router is the backbone of your application
[02:47:29] . It is the, it is what defines the paradigm, right? When we went from server to single page app, it was the routing that led the way. And
[02:47:39]  to whatever we're heading now into this new hybrid place, I think it's an interesting place because I'm not sure the, the old school MPA people or the new
[02:47:49] , you know, single page people. I don't know. We'll take them all with us. Even though we're trying to merge the things, I don't know
[02:47:55]  if they all come with us, but the key is routing again, is going to be the backbone of, of, of the, of these mechanisms. It's just
[02:48:04] , it is what defines the web. Yeah. I mean, we want a spa like routing experience with as much code running on the server as, uh, as possible
[02:48:13]  essentially, or at least like as makes sense in terms of the way you opt into using state in your application. Um, yeah. Yeah. I'm just reading some comments
[02:48:24]  here. Maybe filtering table would be interesting. Having scope choice is super convenient. Definitely seems like this is solvable, which is exciting. Yeah. There's details here to
[02:48:31]  work through. Um, and you know, they're on the end of a list that we've been kind of working through, but, um, it does seem like
[02:48:38]  the pieces are here. I think, I think that's really what take away from this. You've already seen it when looking at Marco six that like we either have the
[02:48:46]  pieces or they're kind of a logical extension of what we've been doing. So like this, this is just very congruent with the, all the pieces of serializing
[02:48:54]  scopes, um, with the fine grain informing, um, how updates happen. It's all really extension of the same stuff. Um, yeah. So yeah,
[02:49:04]  I, yeah, it's pretty interesting. Oh, hip here. Uh, how's it going? Um, so yeah. Yeah. I, I, I will say
[02:49:16]  that like, it's pretty cool to me that, um, like you, you navigate when you're doing a navigation in most applications, like in a lot of scenarios,
[02:49:27]  if you're doing a navigation, you're probably fetching some data and all that stuff. Right. But like, there's, there's the whole waterfall problem.
[02:49:35]  Like you don't want to, um, like if you're doing well, there's several things, but one, one issue is, you know, if you're doing
[02:49:41]  all these requests from the browser, well, now the browser is having to, first of all, get like all the unfiltered data in some cases, depending on how
[02:49:50]  you've optimized your APIs, you're using GraphQL and like all that stuff. Um, but it's also doing potentially multiple concurrent requests and all that stuff, doing
[02:49:58]  it from the server and having the server send you essentially the finalized little chunk of HTML that you actually need is typically going to be like, you know, less bandwidth used
[02:50:09]  by the user. Um, and then your servers typically, like if you're communicating within the same dentist data center, have like faster access to whatever your underlying data stores
[02:50:20]  are and stuff like that. So like in general, it seems like a big win. Um, like I imagine scenarios that like, if you use Marco six with this special
[02:50:33]  router, and you're rendering like a list of users or something like that, and it's sortable, right? Um, you could implement it such that the sorting
[02:50:44]  happens in the server or the sorting happens in the browser. And if it's a million users, maybe you want to have this sorting happen in the server, right? Um
[02:50:53] , so anyways, I just think it's going to be crazy to think about, um, that you'll have the flexibility to be like, yeah, this is, this
[02:51:02]  is server rendered and that's where it makes sense. Or I can client render the section because, um, I, it's fine to send this little bit of JavaScript and
[02:51:08]  so on. So yeah. Brian's asking all the fun questions. Yeah. I mean, it does naturally go here. This is my conversation with Dan Abramoff
[02:51:26] . This is, this is where, this is where the React guys heads are at right now. They've been trying to figure out how to re-simulate the cache
[02:51:32]  behavior. That's why they're looking into caches. It's not because they're trying to make React query. It's because they're trying to, um,
[02:51:39]  get this, get this back. Um, which is interesting because this is, this is, this is one of those trade-offs that comes with this approach. And this
[02:51:46]  is one of the challenge. And it's not this approach. This is single page app approach. This is what you gave in order to get those smooth transitions. Um,
[02:51:54]  right. Yeah. And it'll be an opt-in thing. Like there is going to be some overhead. Like Ryan said, we're going to have to serial
[02:52:01] ize additional markers and the output HTML to know this is the thing that can update in the browser, whereas before it could not have. So there will be like a little bit
[02:52:07]  of overhead, but the thing is, it's not going to be much and kind of, it'll be up to you to decide the, the trade-offs, whether
[02:52:13]  or not you want to build, um, an MPA, which is a little bit more optimized. Maybe you don't care about those transitions or persisting state across pages
[02:52:19] . Maybe that doesn't make sense for your application. And then so MPAs is going to be, um, the right choice, but we really want to have
[02:52:26]  a solution for people who, um, you know, do have a spa use case. Um, and I think this solution has very limited compromise compared to our MPA setup
[02:52:37] . Yeah. It's, it's, it's, it's, this is an interesting one for me, honestly, because if you think about it for a minute,
[02:52:44]  um, it's, we're talking single page app benefits, but the mindset. Oh, did we lose Ryan? You can hear me, Michael. I can hear
[02:53:02]  you. Yeah. Okay. I think we may have lost Ryan. I, I, I, I lost it for a second. Sorry. I was gonna say mindset.
[02:53:09]  Yeah. Yeah. Yeah. I say that the mindset is closer to that of an MPA because maybe like the architecture now becomes more shared route because of the, because
[02:53:21]  of the nested router. You actually author the structure of your app a bit more like a single page app, but you like, we're not like the client, um
[02:53:30] , caches and all the, like, like this cache we're talking about here for the back forward routing is a different type of cache. Like that is all the type
[02:53:38]  of the ecosystem libraries like that you need for this stuff are closer to the MPAs. They're not the, they're not the client client side libraries. You
[02:53:47]  know what I mean? Like it's, it's not like, I mean, routing is the obvious one for the single page apps, but just even like, like you
[02:53:54] 're probably like, you could use Apollo, but you might just not use Apollo, you know, because you don't need a heavy caching query client for, for what
[02:54:05]  you're doing. Like it changes things dramatically. And it's interesting because as you mentioned, it's like MPA plus, like it's just, it's just
[02:54:16]  additive on top of the, the kind of MPA thing. And I, it makes sense when you, when, whenever you're faced with a situation where you kind of
[02:54:26]  have to reset your baseline, you, you tend to, what you do is you go back to the beginning and the basics and build up from that foundation. It's very
[02:54:34]  difficult to start from the, like the having gone far down a road and then kind of backpedal a bit to kind of reposition. And I think this does
[02:54:45]  make for frameworks that are coming out right now with this in mind, like quick and Marco, um, in a very unique place. And it's, it's funny because
[02:54:53]  in some ways, even if Marco hasn't really realized, no, one's realized Marco has been sitting in this zone a little bit for ages, just purely from the aspect
[02:55:03]  of being a JavaScript framework that does MPA. It's like, it's, it's almost unheard of. Um, and I think it's, it's
[02:55:10]  kind of interesting. I'm hoping that as people try this stuff, you know, we can learn and we can find what, what people like here. It's just,
[02:55:19]  it, this is very powerful because what we're saying essentially is that you can build a website, like it's static HTML because Marco is just HTML. Then you can
[02:55:33]  add something stateful on top of it, like some interactive form or, I mean, I'm forming the terrible example, because you could have just left that form as
[02:55:42]  being, you know, you know, server, but you know, I, I made a demo the other day where I used a form, uh, look for the server
[02:55:50]  for like a blog site where, you know, I just posted it and then redirected back to the listing. But when I was on the page, I was like,
[02:55:57]  okay, I've got comments here. I don't want to reload the page every time I add a comment. So let's just, you know, you know, add
[02:56:03]  that nice little bit of, you know, functionality, you know, but now you'll still get to choose to be able to have that little, you know, the
[02:56:11]  comments persist in our ideal world, this will progressively enhanced or whatever. So then you just add that little bit and you're like, okay, I'm doing that. And
[02:56:18]  then at a certain point, you're like, well, now I actually want to route on the client. And then you just add that little bit again, it keeps an
[02:56:26]  extension of this and it's, it's built on the same foundation. And from that point of view, like what Marco is doing here, it makes a ton of sense
[02:56:36]  because it is, it just, it's just this incremental step up to it. I mean, people have been talking about transitional apps and transitioning and stuff, but like
[02:56:44] , as I said, it's much easier to tell a story where you're coming up from the base. I mean, if you, if you think about it, like
[02:56:54]  React server components, like they, they kind of built a whole new framework around React. Right. I mean, this may not be obvious to everyone in the ecosystem yet
[02:57:05] . Like the, the server components aren't the React components we know today. Right. They have a bunch of rules, like they can't have state, like essentially the
[02:57:14] , the, what I call the Marco rules, you know, like, uh, like essentially the, the partial hydration rules. And, um, once you start falling
[02:57:23]  through that dilemma, well, they're like, okay, well we have React fetch DB. And like, if you watch the video, you you'll, you'll see
[02:57:30]  that they, they introduced a bunch of libraries for data fetching that are React server component specific. Like, and if you start like kind of connecting the dots, you
[02:57:39]  realize that in server component land, the React's current ecosystem doesn't live. It doesn't exist. It exists only in the client components. It exists only in the,
[02:57:50]  in like classic React now just lives in the islands of this thing. And maybe not everyone's going to adopt this mentality, but like it takes a, it seems like
[02:57:59]  it's going to, it takes a fairly extreme shift to actually reset the expectations and build up from it. So I think this is going to be interesting because I think like
[02:58:09] , I think React server components, for example, are a legitimate competitor or like different approach to this problem. That's legit. I think QUIC is going to come up
[02:58:17]  with something in the next year or so when they kind of get here too, that's going to be legit and going to be a real, you know, kind of,
[02:58:24]  um, consideration in this sort of zone. But what's interesting for me, especially on the React side is I think we're, we're talking about like a whole
[02:58:35]  different ecosystem. Like sure, the existing React ecosystem will exist for those stateful components, but if they only make up 20% of your page, maybe even less,
[02:58:47]  you're not going to pull in Redux or, I mean, we already know what Danny Romov thinks of Redux. No, I, but like, you're
[02:58:54]  not going to, you're not going to pull in some of these other libraries that you're kind of accustomed to. Like it's, it's actually really interesting, um
[02:59:03] , to, to think of what the implications are and yeah, I mean, I don't know where this goes completely, but like it's not too far to kind
[02:59:13]  of see that if this is a new paradigm, you know, based around this new routing kind of consideration, like that we are in for something very different than just, it
[02:59:26] 's not single page app plus, you know what I mean? It's, it's, it's, it's something else. Um, and I mean, yeah
[02:59:35] , I can't wait to see what that looks like obviously for me personally, but I just wanted to kind of establish here, like you can, you can already see that
[02:59:43]  what we're talking about is going to be quite different. Um, and I think it's really interesting, as I said, and why I wanted to get my co-
[02:59:52] workers here and Marco kind of talk about this is because they've lived, worked in this MPA zone in JavaScript for ages, you know, longer than most others.
[03:00:02]  And that's actually probably closer in mentality to what this looks like than, than basically anything that the, at least on the JavaScript side, we've seen a while. I
[03:00:13]  think if we go back and we look at some of the techniques and stuff that they're doing on, you know, the, the rails or like the PHP side of
[03:00:21]  things, we might also learn, you know, there might be some secrets still from the past that can come back, but for the most part, this is relatively new ground
[03:00:32] . And I, I, I do want to separate us from some of those other technologies here, because we're not talking about rendering everything on the server all the time,
[03:00:40]  necessarily. This isn't HTMX. This isn't like that situation where you're like, oh, I like go back to the update panels of the, of
[03:00:50]  the nineties where, or not nineties, sorry, the mid two thousands where like you have three cascading dropdowns in a row and you switch the first one
[03:00:58] . And then they go to the server and they load it in. And then you switch the next one and they go to the server and load it. And I'm not
[03:01:03]  talking about full page refreshes during this, like mid.net period. We got the ability to swap out just that one section of the page. There are similarities to
[03:01:12]  this, but with a JavaScript first thing, like you could do that. You could definitely write your app that way, but you might, you just might not. And because
[03:01:23]  you're already in JavaScript, you're already, you just have the tool. You're just like, oh, well, screw this. I'm just gonna go.
[03:01:31]  Um, when I, when I load this, I'm just gonna let right there. Like, yeah, I think it's super interesting that, I mean, there's
[03:01:40]  two sides of it. Yeah. You could write a let now it's doing client side. Cool. You decided that makes sense for your experience. But even in the case
[03:01:47]  where you didn't use a let, it's still way more efficient than, you know, doing the whole page request again and like getting the HTML that you didn't necessarily
[03:01:55]  need because it's already there. Um, instead you're hopefully going to get, you know, in that case, just a JSON format that has just the new data
[03:02:02]  that came in. So in theory, even that should be more efficient. Um, but it's up to you like where the processing happens. Is it on the server that
[03:02:11]  this makes sense? And I mean, in my mind, it's like, are you doing some, uh, service call or a fetch or like data loading kind of things
[03:02:20] ? Like if you're doing that kind of stuff, probably it should live on the server. Cause it's going to be async anyways, right. The user is
[03:02:26]  going to have to see some loading indicator. The loading indicator can be client side render. You could show that right away. Right. But then it could do essentially a server
[03:02:34]  side render to get the update for stuff that was going to be async anyways. Right. Um, yes. Which I think is pretty, pretty cool actually. How does
[03:02:42]  streaming play into this? Cause I mean, it's, it's a fair question. We haven't, you know, and you've done some stuff with micro frame,
[03:02:49]  eBay's, um, kind of like now micro front end solution, which streams these panels in, but which has similarities, but like this, how does streaming play into
[03:02:58]  this? Is it important or? Uh, I think it is still important. So, I mean, obviously for the sections where, um, it is just like an HTML
[03:03:07]  swap, I think streaming is going to be pretty similar to the way that it, uh, works now for those sections. Um, right. Non-blocking. Like
[03:03:16]  we can have async sections inside those sections. You can essentially have that whole suspense like experience where you're like, okay, I navigated to a new page.
[03:03:25]  I showed the main content as soon as I could, but I'm actually still fetching and sliding in place holders. You can, you can start doing it. Yeah.
[03:03:34]  So I imagine when you navigate to a new page that it would have basically invalidate the Marco equivalent of those suspense boundaries so that you could know like, Oh, this
[03:03:43]  part of the page is actually stale. It's waiting for stuff from the server. Um, so you could still have like immediate, um, responses to say like,
[03:03:52]  Oh yeah, this is loading. Like I clicked delete user. Maybe it doesn't delete right away. Maybe you do an optimistic update where it does delete right away, but
[03:03:59]  you could show like it grayed out for a little bit until it goes away or something like once the server comes back, you have that kind of ability as well.
[03:04:05]  Um, I mean, you could do all the stuff that you could do with the spa. It's just is, is the update happening from the server in a fine gra
[03:04:14] ined way, or did you control it via a let and effects and like client side logic and you get to choose that, which I think is, um, super, super
[03:04:22]  powerful. Yeah. And actually now that I think about it more like one of the, one of the reasons that we like, it's funny, I I've been
[03:04:30]  using streaming recently in single page apps. Um, obviously, um, uh, other than react solids, I think the only one that does it on the single page app side
[03:04:38] . Um, and it's, it's great because you get that initial loading thing. And if it's a fast network, you're like, this feels like Jam
[03:04:46] stack, like it feels like the page was statically, you loaded them initially. And then the data was fetched in the client, except, you know, the
[03:04:53]  data was fetched sooner. So the experience is just even smoother. It's so much better than walking in that space. But if the network's slower, you have stuff
[03:05:00]  and it just comes in when it comes in and it is, and it's no worse than doing like a block render, like a next or a remix. Um, but
[03:05:06] , but what's interesting is when Marco, this is really felt because like when I switched to the next page in hacker news, I don't notice it because I just do
[03:05:15]  a transition. It's stale in my single page app and then it's smooth. It goes across. But when I do this in Marco, when I go to
[03:05:21]  the next page and I, it loads the header so fast, I don't even notice that, that there was a navigation, like a full page unload. And then I
[03:05:29]  see that loading state. So even though I'm clicking around in this MPA, I feel like I'm in a single page app because of how the fragments and the lazy
[03:05:38]  loading, the placeholders all works are not lazy, the placeholders and the fragments. And one of the things that's going to be different. Yeah. What I
[03:05:46] 'm getting at is now with the client side routing, you'll get the ability to hold the transitions the same way the single page apps are doing. But then if you do
[03:05:57]  opt into the nested suspense boundaries with the fallbacks, like I said suspense again, but whatever the Marco equivalent is, you're, it's going to feel very similar
[03:06:06]  to that client render at the nested level because you're like, oh, there's the immediate response and here's the placeholder again. It's actually, it
[03:06:15] 's the same thing again, except it's nested. Which makes it even more. I think it will be very difficult with well architected apps in with this.
[03:06:28]  Oh, lost him again. My internet is dying. I'm sorry. It's okay. With well architected apps. Are you still there? I hear his fan
[03:06:46] . Yeah. Maybe his fans competing for bandwidth or something. Smart fan. Yeah. Yeah. I am sorry about that. Yeah. Sorry. Yeah. You lost me
[03:07:01]  again. It seems like when my fan kicks in and the heater, it just like kills the internet somewhat. That's unfortunate. We'll have to get to the end
[03:07:08] . But what I was saying is, um, obviously I lost my train of thought because I was just ranting on in this tirade, but essentially, uh, yeah
[03:07:16] , honestly, this is the worst when you, when you go all in and then it disappears. Yeah. I've, I've lost it. I'm sorry. It
[03:07:23] 's fine. It's in it. It like, yeah, it, to me, it's when I think of transitional apps, right. And this is maybe not the
[03:07:35]  right way to put it. And I really want a different word for this kind of thing, but I see how do we get, you know, how do we send
[03:07:43]  as little initial JavaScript to the browser, like MPA benefits? How do we make it so that we're not redoing any of the work? Like those are things that
[03:07:52]  I kind of want to take for granted. Um, and then, okay, so we've done all that. How do we receive the fine grade upgrades, updates for stuff
[03:08:02]  that, you know, the server can render. Um, and I think this is approximating, approximating that. And that's why I see it as transitional because
[03:08:12]  you're actually like transitioning from the server rendered HTML, hydrating it to a tiny little router that can receive additional updates and fine grain update. Or, you know, you
[03:08:24]  have your manual little states that can do client, pure client side, um, rendering as well. And like from your code perspective, like transitioning from client side render to
[03:08:36]  a server side rendered thing is as simple as like, I'm going to use the URL state or I'm going to use a let. Right. Um, and there'll
[03:08:43]  probably be, you know, a tag variable that's exposed that gives you the URL state in a way that you can tweak, or you could use forms and like all that
[03:08:51]  kind of stuff. So. Yeah. I mean, yeah, it is really incredible when you think about it that both on the authoring side and the experience side,
[03:08:58]  you, you, you'd have a hard time telling the difference. That's what I was trying to say when I was in that long tirade that I was basically that
[03:09:05]  I don't, I think it'd be very hard to tell the difference between like our single page apps today experience and this, even though it's authored and mechanically
[03:09:14]  in a completely different way. And we're, we're actually saying that the authoring will also be as, as transitional. So yeah, this is really quite exciting
[03:09:24]  stuff. And I'm interested to see, like, obviously Marco has optimized things to the like nth degree here and kind of showed how this stuff is possible. I'm
[03:09:36] , I, I just want to, I want to see, I want to see more of this. I'm like, I'm getting so excited by this potential because the
[03:09:42]  more I hear about it and think about it, like, it does seem like if, if it's solvable that we're that much closer to, to that whole
[03:09:53]  concept of like the, you know, the, the universal app, like screw transitional, let's call it the universal app. Yeah. Something like, like, like,
[03:10:01]  you know, that was talked about ages ago when they didn't want to use isomorphic, they started using universal. I mean, the actual universal app, because
[03:10:11]  we we've had them make sacrifices or trade-offs along the way. And it seems like this is an avenue where most of those trade-offs, um, can go
[03:10:20]  away. To be fair, there are a few, I think the, the key ones that we have to consider is we are basically hijacking the browser still in the way
[03:10:29]  that single page apps hijack the browser. I kind of, it's, it's just so much more blatant in this sense because you are using the server that
[03:10:37]  it feels like you've just reinvented a VM inside the, inside the browser. I choose react of it. Even our version here, which is much more lighter and fine
[03:10:46]  grained. Like we are definitely in this model kind of going like browser. We're not, we're not trusting you completely to handle navigation. We're going to have
[03:10:55]  a little navigation. We'll use all your protocols, but we're, we're, we're, we're going to handle it. Um, so I think that
[03:11:01] 's going to be the thing here, but I mean, we're used to that. It's been, you know, I think in general, like a remix style approach
[03:11:10]  where you're using web APIs that could work with or without JavaScript and the progressive enhancement, all that stuff is a key piece of this also in terms of like making it easy
[03:11:19]  to progressively enhance those experiences so that you don't feel like you're stepping into a totally different world when you bring in a let or something, you know what I mean
[03:11:27] ? Um, cause yeah, in general for a lot of experiences, keeping as much as possible on the server, um, makes a lot of sense. And I think it
[03:11:37] 's really one of the key strengths of the web in general, right. That you have an experience that can be delivered kind of on the fly. Um, at like
[03:11:49]  basically, you know, the browser is just receiving raw, like display information kind of, and like some scripts and all that stuff. Um, and there's always going to
[03:12:02]  be the balance of trying to figure out like, how am I sending, should I be sending new view information or should I be sending the code to render that new view
[03:12:12]  information? And I feel like Marco six and this router is giving you the ability to make those decisions like throughout your app. Um, so anyways, I mean, on that
[03:12:22]  note, I think we're getting close to the end here. Um, we did go longer than I wanted to, uh, initially, but I mean, this has
[03:12:29]  been a great conversation. I think, I think I hinted at this a little bit in some articles and some previous streams, but we haven't dug in as far as
[03:12:37]  we have tonight. And honestly, uh, this is still an area where we're working through ideas. We're getting a better understanding, but I mean, right now is
[03:12:45]  your chance. You've, you've got Michael and Dylan here. I've said this a few times, you know, if there's any more questions, definitely shoot it
[03:12:53]  our way here. You have opportunity to kind of look and stuff. I realized we've talked about a lot of stuff today. That's kind of out there. And
[03:12:59]  some of you probably will like rewatch parts of the video and try and figure out what was like deep re dissect what was said, because admittedly, um, there's
[03:13:08] , there's a lot of content and it's pretty thick, but, um, yeah, if there, if there's any questions or anything, you know, now
[03:13:15] , now, now is your chance, um, so to speak, but yeah, no, I, this has been great. I I'm, I'm so stoked,
[03:13:22]  uh, that you guys should join me so we could talk about this stuff because I've been, as I said, I've been hinting at this on articles, uh
[03:13:28] , for a while now and on some other streams. And it's really awesome to see Marco six start starting to come together. Um, as there's still work to be
[03:13:37]  also done in the compiler and whatnot, but we're, we're actually like, we're actually seeing, you know, that output work. We're seeing the optim
[03:13:45] izations, you know, happen. Yeah. Um, yeah, it's exciting on kind of two fronts in my mind. It's, you know, we're kind of
[03:13:56]  on one hand building this like MPA experience that, um, is sending that sprinkling of JavaScript that we keep promising, right? Like finally, we're getting to
[03:14:07]  that sprinkling of JavaScript, not, oh yeah, we, we trimmed, you know, all the fat off the top. That's what Marco four and partially hydrated things
[03:14:15]  are doing. This is like actually getting really close to sending just the necessary JavaScript. So that's one thing and that's awesome. But the fact that this approach and the
[03:14:25] , you know, the analysis around the reactive graph and all that stuff is giving us potential solutions for solving this generic problem of how do you bridge the gap between MPA
[03:14:35] s and spas, I think is super exciting. Yeah, no, definitely. And actually there's a question along, sorry, there's a question along those lines.
[03:14:43]  And I, I, you said that you just won't be able to tell the difference between spa and MPA, but there's one difference. You can't go over
[03:14:48]  MPAs. Spa, some pages load immediately. Is that, but I mean, maybe, and I can picture that. I would say that's not true even
[03:14:56]  without this transitional app stuff. This is not true because what it, the, the immediate loading is really about prefetching, right? Um, so like if you have
[03:15:08]  a code split spa and you're navigating to a page that isn't, you don't already have in cache, then you're going to have some load time there unless you
[03:15:18]  prefetch, right? Or if you've already cached that page, then you're going to have immediate navigation, but you would also have the same immediate navigation if
[03:15:27]  you had gotten an HTML response that was able to be cached, right? Um, so it's, to me, it's more about prefetching the pages that
[03:15:37]  you can transition to, uh, which you can do with a, you know, traditional MPA, SPA, um, today, um, today, um,
[03:15:46]  you would be able to do with this, uh, not traditional kind of MPA spa hybrid. Um, and this is something I, I think probably we see more in
[03:15:58]  spas. The, the browser APIs, um, for, for prefetching, um, are probably usable right now. Um, they, um, had kind of
[03:16:11] , they're, they're more hints, um, than anything. I think pretty much all the browsers are doing a pretty good job of respecting them. Um, but
[03:16:23]  there, the, the spec is kind of somewhat that, like, eh, the browsers can kind of ignore this if they, they want to. Yeah. I was
[03:16:30]  gonna say the pages that a spot can load immediately are the ones where they don't load data. And in any, in the case where you're not loading data, then
[03:16:40]  you're also could just cache static HTML. It's like, it's like, like you preload the HTML, uh, the turbo, the guys who, uh,
[03:16:48]  uh, this is the experiment that the builder guys were doing actually at first and the IELTS as well, the guy from IELTS where they didn't even
[03:16:56]  get to turbo links. They just started prefetching the HTML pages in their MPAs. Um, because like, again, maybe not on a quick side, but
[03:17:03]  on the, well, actually on the builder side, it's true too, because they, they, they both static generation, but, uh, and, you know,
[03:17:08]  Astro is the same case. They do static gen. You just literally request the HTML for the, the next page. And then when the browser actually navigates to it
[03:17:18] , it's, it's, it's, it's right there already. Um, right. And, and so, I mean, actually talking about that, there
[03:17:24] 's also some, um, specs that are, uh, you know, coming to the browser, maybe if they, um, but there's portals, there's shared
[03:17:35]  element transitions, right. And so these are going to bring to traditional MPAs, the ability to, to do some of these things, um, as well.
[03:17:46]  And so I don't know, maybe the future looks a little bit different than we described. I don't know. Um, there's, there's certainly trade-offs
[03:17:57]  with, with all of these, um, uh, approaches. Yeah. But, but if you can preserve an element across navigation and let the browser handle that, then
[03:18:09]  like, yes, you're having to send more HTML. Cause you're going to have to send basically a full page, but if you can tell it how to actually preserve
[03:18:19]  some of those things across, like maybe you can keep a video playing as you navigate around or, or some of those things that gives you a lot of the same benefits.
[03:18:29]  You still get to leverage like the, the back forward cache that the browser has. Um, so there may be alternative, um, routes here. I don't know
[03:18:41] . Um, the browser may, uh, make some of these things easier for us, but there's definitely trade-offs as well, right? Cause you're sending data
[03:18:50]  for things that you already have in the browser, even if it's HTML, which is probably not the, the greatest overhead, but yeah, I mean, there's
[03:19:05]  nothing stopping us as well from having some parts, even if they update the URL to be driven by state and do like a client side update. So you could have something that
[03:19:15]  is immediate driven by state. And another thing that could be interesting to explore, um, is actually nested routing with prefetches, which I'm not a hundred
[03:19:23]  percent sure. Remix might do something similar to that prefetching. Yeah. Yeah. So, you know, with the nested route, you could say, I
[03:19:30] 'm going to prefetch the next page in this set of tabs that's in this hierarchy, but I don't need to prefetch the outer stuff, right? Like we
[03:19:38]  could do that kind of, um, thing as well, which would be pretty interesting. Yeah. Yeah. I just saw on Twitter today, that thing of Steve Jobs
[03:19:52]  being like the Safari is in the iPhone and that is how like web 2.0 and, uh, Ajax, that is how apps are going to be built and all
[03:20:02]  that stuff. And, uh, boy, yeah, that didn't pan out, but, um, I think this architecture truly is going to make it possible to build
[03:20:13]  performance, like web experiences that wouldn't have been easily possible before. Like you probably would have reached for a spa and now you've got this janky, um,
[03:20:22]  you know, amount of like, especially the loading performance. Um, so yeah, anyways, I think the future is bright for the web. If this all pans out,
[03:20:32]  um, hopefully. Okay. No, that's not the one I was looking for. I was looking for this one. Did you mention when Marco six beta was coming
[03:20:41]  up? Um, let me be political on that one. I'll handle this for a second. Uh, we, we, we, we are, we, we are
[03:20:47]  working on stuff right now. We we've set up a bunch of milestones. I've talked about this a bit externally, but I think only in our discord, uh,
[03:20:56]  essentially our milestones are pre alpha alpha beta, and then release. Um, at least there'll probably be an RC candidate range too, but that's not that we'll
[03:21:05]  probably spend the least amount of time in there. Essentially right now, what you're seeing was what we call the pre alpha. We wanted to make it work for to do
[03:21:13]  MVC and for JS framework benchmark. And that's what we're demoing today. Um, so we just wrap that up. Um, the next stage we call alpha
[03:21:23]  is when we're going to pull in the hydration stuff. Um, our expectation there is that that this is still going to take us a couple months to kind of work
[03:21:31]  through a lot of details. This isn't the only stuff we're working on right now. We're actually also looking at TypeScript support, which I know some people care
[03:21:39]  about for some reason, haven't really figured out why, but they seem to like, it's a good thing. Yeah. Yeah. So TypeScript supporting the templates,
[03:21:46]  obviously. So like there's some, there's some kind of play there in terms of time, but generally speaking, we figure it's a, it's a couple
[03:21:54]  months effort on top of where we're at right now, although everything's taking longer than we expected. So take that with a grain of salt, which points us to,
[03:22:03]  to, to, you know, early some summertime period, you know, late, I guess. Yeah. Early summertime period. Um, our hope there is that,
[03:22:13]  um, from, from that, we're going to kind of build up the new async model, um, which will be like our version of suspense and whatnot, and
[03:22:20]  that, that will hopefully kind of complete the feature set for Marco six. And again, these, these things are all kind of, you know, a couple months, couple
[03:22:31]  months, couple months. And then from there, stabilization, migration, documentation, everything for the release of Marco six. So that's really rough. You can kind of project
[03:22:39]  where that falls, um, you know, give or take an extra month here or there, but that's essentially what the timeline is. We, we were working on
[03:22:46]  prototypes for a very long time. We're doing a lot of experiments. Um, now we're building for real, we're still hitting a few snags, but generally
[03:22:53]  speaking, uh, the design seems consistent. So, uh, I'm pretty optimistic about our ability to get stuff in people's hands. Even when we get to alpha,
[03:23:02]  I, we're going to start doing some kind of closed trial stuff. Um, and then beta should, as I said, hopefully, um, do you like mid
[03:23:09]  end of the summer, we'll have beta that people can get their wider use and people get their hands on. Um, does this new version where it's called? Yeah
[03:23:24] . I mean, I don't know if you caught the beginning of the stream. That was basically the whole focus of it. Um, because the way that the tags
[03:23:33]  API and the stuff, uh, works in terms of, um, you know, both composite composition, um, in terms of the way that, uh, it just kind
[03:23:45]  of extends and augments the existing HTML. Um, and it lends to a lot of the objectives here, both the simplicity in terms of just starting from some step
[03:23:56] , you know, markup and enhancing it. Um, but also, uh, just the way that it lets us break templates apart and it lets us like refactor.
[03:24:06]  I think the refactoring story is going to be really good. I think the, I think like the authoring story is going to be really good. And then when
[03:24:12]  we, you know, add stuff like TypeScript and ES Lint, you know, we, we've got, you know, most of the other stuff like prettier
[03:24:18]  and storybook and all that kind of stuff. But once we, we kind of finish up on the TypeScript and the sling side, um, you should have the
[03:24:24]  kind of completion of the story, uh, so to speak, you know, have those auto completions and stuff. People like we've been using VEAT a lot
[03:24:30] . Um, that's a big part of the, that we have, uh, isomorphic, uh, uh, SSR or some HM, HMR in
[03:24:38] , in that, at least with the current Marco five. So we continue building on top of that kind of foundation. We've been using it for quick deploys and
[03:24:44]  things like Cloudflare workers and, you know, fast integration and different stuff like that. I expect that, um, we'll, we'll kind of build up more
[03:24:53]  on top of VEAT, uh, you know, more plugins, more like built-in capabilities. Um, right now, our Marco serve is something that we built
[03:25:00]  on top of web pack. I wouldn't be surprised in the future if we once, you know, a few more things get ironed out there that we can look at
[03:25:08]  moving things, um, um, to the VEAT side as well. So like a lot of developer experience considerations, uh, going into this work because the key
[03:25:16]  part, as you said, like we didn't go the dot server approach or the, you know, is like, we really see a future where you can just naturally author
[03:25:27]  your apps and that kind of piece isn't too much of an ex, uh, consideration there. It might be like an advanced, a slightly more advanced topic in terms
[03:25:36]  of like how to optimize what goes on client server. But the base experience is just write some HTML, add some behavior and let Marco take care of the rest. Um,
[03:25:52]  yeah. Then the router stuff probably next year. Yeah. Realistically with everything else, I'm, I'm, yeah, I think this is a 2023 kind of
[03:26:00]  thing. I mean, it'd be sweet to work on it and see how stuff goes while we're, you know, doing other stuff, but it's going to come
[03:26:06]  down to timing and resources. Um, I don't know if Dylan wants to do that. Yeah. Maybe. We've been, we've been trying VEAT
[03:26:20]  is very future facing future thinking, which is great. And I've enjoyed it, especially on solid on Marco. We've hit a few other things and it's harder for
[03:26:30]  eBay too. It's just some, some code bases have this, uh, module format called CJS. Um, you may have heard of it before and VE
[03:26:39] AT kind of doesn't like, if you have some non-standard format, like a template, like a Marco or Svelte file, uh, once you try
[03:26:48]  and go back out to CJS, everything, just the world breaks. And I think it has to do with the way ES build fits into the build system and all that
[03:26:56]  stuff. But essentially, there's just some awkwardness is and some of the other frameworks that are newer and jumped in beat like solid and even Svelte or synergy
[03:27:05] , they're like, ah, it's fine. No one uses CJS. Um, that's, that's not true for eBay. And that's not true for
[03:27:11]  any large organization with the legacy code base. So we're, we're trying to find ways to work around it. The Svelte guys, to give them credit,
[03:27:18]  have actually been working on this and come up with some really interesting hacks around it to make it work. And we might be able to emulate some of that. They're doing
[03:27:25]  it for different reasons, but it does have the side effect that, um, you can use CJS from the, this help file. So if we're, um
[03:27:32] , ideally VEEP would add APIs so that we could do this without all the, the hacks that they're doing. Um, but yeah, it should be possible to,
[03:27:45]  to get it working in a way that we could use it within eBay, but that is not the, the state of things right now. Yeah. Yeah. I mean
[03:27:54] , we would love to, to be fair. Like, um, as many, you know, there's the, uh, we Marco team actually supported their own bundler
[03:28:02] , uh, lasso, which did, um, like real time bundling, like on request, which is incredibly capable and it makes great for dev environment. And it
[03:28:13] 's really powerful, but it's also something that was only, like, it was used in various places supported by the Marco team, supported by eBay. And it does
[03:28:22] , a lot of eBay still uses it. Um, majority, uh, eBay's Marco still uses it. And truth and matters until recently and previewed, like web pack
[03:28:34]  didn't really fit, you know, where we, where we need to be. We have moved to do using web pack and web pack five and stuff. Uh,
[03:28:44]  um, but generally speaking, something B would be very well welcomed if we could figure out how to get it to work. Cause it, it kind of can carries on some
[03:28:52]  of the ideas and legacy that lasso had lasso again, was a really, really ahead of its time technology that, you know, that you build it and then you
[03:29:02] 're supporting it forever. Right. Yeah. Veet is like one of the first bundlers in a, maybe the first bundler in a long time besides lasso
[03:29:11]  to acknowledge that there's a server. Right. So there's a lot of nice things about it. And actually some aspects of using it, if you didn't have to
[03:29:21]  consider legacy, like we love the developer experience of using V with Marco, but, uh, yeah, for, for, for, because of a few issues, it
[03:29:32]  makes it hard for us to bring into eBay, but eventually we probably will. I mean, if, if, if, if fun gives good hooks to actually make it so
[03:29:43]  that we can compile to what we want with Marco. Cause I mean, the thing with Marco is because we decide what ultimately goes in the bundles and the bundles
[03:29:51]  we need control over, um, the more, more control over the bundlers than a lot of other, uh, frameworks do. Um, but if we get the right
[03:29:58]  hooks and bun, I am definitely excited to try it out. Yeah. Uh, I'm glad some questions, uh, came in, uh, guys were pretty quiet on
[03:30:08]  the stream altogether. Maybe it was just a lot to take in, but, um, it's good to have a little bit of conversation going, but I am,
[03:30:16]  I, I last called it before I am last calling it right now to people's knowledge. Just so you guys understand, you know, I do my streams late because of
[03:30:25]  just the work hours and stuff, and maybe I should have considered pulling this forward, but, um, all three of us are in different time zones. Um, yeah.
[03:30:33]  Or, and just woke up, but, uh, to put this in perspective, uh, yeah. Dylan's an hour ahead of me and Michael is East coast.
[03:30:41]  It's 2:30 AM here. Yeah. So I was, I was tired before the stream began. Yeah. Yeah. So I think we're going to call it
[03:30:49]  here. I I'm just chatting a bit just to give you guys that last moment to type in your question. Um, but yeah, I think, I think we are
[03:30:59]  done here. Thank you so much for everyone who joined the stream. Thank you, Michael and Dylan for staying up so late to talk about this stuff. I think it
[03:31:07] 's really compelling stuff and I hope people go back and rewatch parts of the stream and kind of, kind of let some of the stuff sink in. I think it,
[03:31:14]  I think, I think a lot of the hints of what the future web dev, uh, could be exist in the stream. And it's really awesome. How Marco has
[03:31:23]  kind of incorporated a lot of, you know, has a lot of original ideas. We, we, you know, we incorporated, you know, some of the other stuff
[03:31:31]  that we've been seeing around the ecosystem and kind of bring it all into this cohesive package. So, um, yeah, I, I think this was a really exciting
[03:31:39]  one for me and, um, thank you all for joining. All right. Thanks everyone. It was fun. All right. Now I need to go to bed. Goodbye
[03:31:52] .