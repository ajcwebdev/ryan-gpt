---
showLink: "https://www.youtube.com/watch?v=bvWCyGsKOXY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Hydrogen & React Server Components w/ Bret Little"
description: ""
publishDate: "2022-05-27"
coverImage: "https://i.ytimg.com/vi/bvWCyGsKOXY/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 02:36:33, which means the transcript is two hours and thirty six minutes).
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

[00:00:00]  Hello, welcome to my stream today at a new earlier time. I'm giving this a try. Streaming in my office today, so I should have a better internet
[00:00:14]  connection, less chance of it dropping off. If you have never seen my stream before, I'm going to apologize right away. This is not a great setup I have.
[00:00:25]  I'm literally streaming off my laptop, which is a M1 MacBook Air. Sorry for the lack of good production and off the bat, but if you're here,
[00:00:35]  why don't you say hi in the chat? Let's get this started here in a minute. All right. There we go. Yeah. For a lot of people,
[00:00:48]  this is probably the first time they got to see a stream live because I usually stream at 8 p.m. Pacific time, which is pretty much the worst possible time
[00:00:56]  to stream for everyone unless you are in the Asian Pacific Islands. Hey, great to see people here. All right. I'm pretty excited about this one. It's been
[00:01:12]  three weeks since I've done any streaming, so it's going to be great to kind of catch up. It definitely feels like it's been a while, and a
[00:01:21]  lot's happened. And we have a guest today. We have Brett. We're going to talk about React and Hydrogen and React server components. So I probably shouldn't
[00:01:33]  waste too much time here dawdling at the beginning, but just giving people a chance to join on the stream here for a minute while I just meander about nothing.
[00:01:45]  And for those wondering, this is just orange juice with ice. I haven't taken up day drinking. All right. All right. So, yeah, let's get started
[00:02:00]  here. I think I've given people enough time. This week in JavaScript, the movie. Well, it's been a while. It's been three weeks. So
[00:02:14]  it isn't really this week in JavaScript, this thing. I mean, it's more like this month in JavaScript, as I was joking. Some people who wanted to ask
[00:02:21]  me if I was going to do the segment today. And yeah, I am. So I'm going to share my screen here for a minute. And we're going to
[00:02:27]  catch up and see what's been going on, which takes us all the way back to, oh, I want to say May 6th was the last time I did
[00:02:35]  a stream. I think my last stream was all about, yeah, the winners of the solid hack had just been announced. But yeah, a lot of really cool stuff happened
[00:02:46]  that Monday. And I really, really wanted to talk about it. But obviously, wasn't in the cards because I needed to take the next two Fridays off. But
[00:02:58]  this is huge news. If you, if anyone missed it, cloud, I mean, it feels weird talking about something that happened a couple of weeks ago. But I mean
[00:03:07] , honestly, I've been waiting for this for months, Cloudflare and Dino decided to actually talk and standardize the platform APIs that they're working on,
[00:03:18]  right? This is the stuff you find in all the serverless functions. And obviously, they've taken different approaches to Node as well. And right now, when you're
[00:03:25]  running these meta frameworks, it feels like you're like target like a billion different things. Being able to consolidate on this is huge. And part of this message, actually,
[00:03:33]  I think, did I retweet it? Cloudflare is open sourcing their workers runtime. So you could run it on like other platforms, potentially. I mean,
[00:03:42]  this is just, this is big. Which, yeah, what do we got here? Like, I know, I'm pretty sure most of you probably did not miss
[00:03:56]  this at the time. But I just I just want to point out like, like, this is this is this is huge news. And I really wanted to cover it
[00:04:03] . But yeah, I mean, yeah, I mean, Netlify Edge isn't really part of this yet. But I don't. Well, I mean, to
[00:04:12]  be fair, Netlify Edge uses Dino Deploy. So like, maybe not part of this conversations here going on, but like, it's all part of
[00:04:22]  the same, these same platforms, we only actually have a few of these runtimes. And, you know, a few of these platforms underlying the infrastructure, right? A
[00:04:32]  lot of the infrastructure runs on one of the bigger providers, like an AWS or Google Cloud, Cloudflare has their own infrastructure, that's really cool. But, you
[00:04:41]  know, it'd be really awesome as a developer to just be able to, like, build for the platform, so to speak, also on the server. Right.
[00:04:50]  So yeah, I mean, that's how it started. For me, basically, a month back, I'm trying to do these, talk about the stuff in a logical
[00:04:59]  order, but I am a little bit all over the place. Also, right at the beginning of this was some more interesting feedback, you know, about react, and
[00:05:12]  people having fun with React 18 strict mode, double calling everything. I think this kind of just set the atmosphere for what was going to come in the next couple of weeks.
[00:05:26]  And it's one of those kind of things where, like, this makes a lot of sense. A lot of react has to be very conscious of the purity of the
[00:05:38]  functions you're running, and they can execute things arbitrarily, and they're getting you prepared for that. But it did confuse and trip up a lot of people. And
[00:05:45]  I think this is part of the kind of atmosphere that we're walking into what that will be relevant in some of the other conversations that we're going to be talking about
[00:05:54]  when we go over what's been happening the last few weeks. I just want to put this out here right at the beginning, just to kind of, you know, this
[00:06:00]  double execute that's been going on is definitely something, you know, and strict mode in React 18, it's definitely something that's been felt by the community. And I
[00:06:09]  think, I think there is this kind of interesting tension in the air, in terms of React's future, but let's leave that for now and continue. What else
[00:06:19]  was there? I mean, do I want to get into solid stuff? No, let's carry this on a bit. Yeah, obviously, for me, big news is
[00:06:32] , was that I changed jobs. Basically, I announced in on May 9, that I that are not May 9, but this week, that week that I was leaving
[00:06:47]  eBay, at the exact same time that Taylor joined on the Marco team. So pretty stoked, honestly, to be able to get him in. I'm a little sad that
[00:06:55]  we basically just, whether cross ships, but Marco is still going well on the path to V6. But, you know, it was news for me, at least
[00:07:10] . Oh, yeah. Yeah. Oh, man. We can get into this later. There's a lot of subtweeting going on. And this, yeah,
[00:07:25]  let's not worry about that for now. So yeah, tomorrow's my last day at eBay. Okay, so what else happened? Okay, so that was basically the first
[00:07:38]  week, right? Then the Google conference, like, this is the beginning of conference time for everyone. And they introduced another really big thing. I mean, I've
[00:07:52]  seen pieces of previews of this before. But if for those of you who aren't familiar, they've been working on a page transition API. Unfortunately, it's mostly
[00:08:03]  for single page apps, not for multi page apps. But giving a way to be able to control the navigation in a single page app, at least be able to kind
[00:08:12]  of like, freeze pieces be able to navigate smoothly forward and back is such a missing piece. Like, we try and develop ourselves all the time when we make client side rout
[00:08:22] ers, to have this built into the platform is absolutely, is absolutely huge. I always make such a big deal about routing, and routing will play into some more conversations coming
[00:08:32]  up here. But that to have this kind of piece really does make a huge difference. I mean, I saw someone who went like, even as far that the,
[00:08:43]  that, like, essentially, they're like, declaring that, like, they wouldn't need frameworks for single page apps anymore, that basically, they could just use web components
[00:08:56] , some events, and this new transition API, and just like, bye bye front end frameworks. I don't completely agree with that take completely. But I do think
[00:09:11]  it's interesting that there are the pieces around that we can do a lot of this stuff without venturing out. And this could serve as new foundations for, for,
[00:09:23]  for, you know, new development. Yeah. Yeah, I think Jake said that it would probably work on me. Yeah, I mean, obviously, MPA side,
[00:09:36]  we're really excited about this, but it's actually a challenging piece, because we want to be able to do things like animations and make the make the experience better.
[00:09:50]  But there is, like, tricky things like streaming is one of the key pieces that makes multi page apps really performant, because you can get that shell out right away.
[00:09:58]  And I've shown this before on stream, where it feels almost like client side, because you can get that placeholder in and have the shell not even flicker.
[00:10:06]  And you actually get that immediate responsiveness, like you do with with a single page app, and handle the loading state. And it looks and it works really well. But
[00:10:14] , you know, you also want to kind of leverage, you know, these kind of API's and figure out like, at what point do you do the page transition to
[00:10:21]  have that kind of control? And that might be harder to dial. So I understand why they haven't got all the way to MPAs yet. Yeah, yeah
[00:10:30] . When when when MPAs actually get consideration, I think like, like, that's, in a sense, that's what some people would argue, that's the
[00:10:39]  whole point of single page apps, like, what we've been trying to solve is this whole navigation thing. So yeah, I think it's I think it's interesting.
[00:10:47]  I do like that people are getting excited about this stuff, whenever, like, the platform is the tools that we all use, we don't have to opt into using
[00:10:55]  all pieces of the platform. But it is really nice that we have these options to choose from, and be able to, like, pick the best parts and make take advantage
[00:11:03]  of them. So more is always good in this case. All right, not yet. Okay, where are we? Let's see. Not there. Yeah, I guess
[00:11:14]  I guess now is not a bad time to talk about some solid stuff. We released 1.4, which was pretty sweet. There's there's a few features.
[00:11:29]  And I did talk about them on my previous stream before the release went out. So if anyone's really interested, they can look at my last stream and see all the details
[00:11:39] . But yeah, I mean, top level arrays are really nice. They just make all our examples and everything nicer, feel so much more natural when you're going from like
[00:11:48] , a signal and you've got a simple thing. And then you're like, Oh, you know, I need to do some more have some more performance, nest
[00:11:53] ed reactivity, you just switch from from, you can basically switch from signal to store as a first step. And it just works, which is which is huge. And
[00:12:03]  then obviously, then you can apply all the next nested optimizations, as you you know, as you want. But essentially, it's just a really nice way
[00:12:11]  to just you. This was just missing and very painful. All the resource stuff was really cool, too. And I think just these these nice niceties. Oh, yeah
[00:12:22] , here I have the whole list of stuff are just the kind of things that people would expect. And I'm getting a lot happier. Like these later minor releases, this
[00:12:31]  solid one are really about just kind of smoothing out those rough edges, you know, in preparation, the more bigger changes coming in 2.0. So I
[00:12:41]  think I'm pretty stoked about this. And it feels better than ever to use solid, which is great, honestly, like, this is where these kind of attention things
[00:12:52]  are coming in, like, Ken Wheeler had a really nice thread, which, you know, tipped off a bunch of conference conversations, and he just kept on
[00:13:03]  go, he just kept on talking and going about, like, every time he found features, and I think another similar bunch of threads were, were also from, let me
[00:13:17]  see if I can find them now. Duplicate. Sorry, I didn't actually pull this one out before. But search. Basically, a whole series of like
[00:13:34]  discovering solid online. And it was a lot of fun. Kind of, I probably have to go back a little bit to find these ones. But why am I not finding
[00:13:46]  them right now? This is what happens when you don't prepare. You know, I'm not touching solid until solid has an ecosystem, I would never make an app without
[00:13:54]  something like chakra, you goddamn, he basically just was going, basically going on for a few days, just reading the docs and being like, how does this exist in a
[00:14:06]  framework, I obviously enjoyed that a whole lot. I'm sorry, solid yes, but makes too much sense. Yeah, like, this, this, this was fun to
[00:14:18]  watch. It was great watching people talk about this. And a a large part of this happened because, as it turned out, basically, right after I went on vacation
[00:14:32] , after, you know, these conversations, you know, we ended up with the fire ship video, which I'll bring up in a second. But this was a particularly
[00:14:42]  nice quote, Dom from Inferno, give us a nice shout out about how react team might consider looking at what we're doing here. I imagine that isn't
[00:14:51]  really a thing. But you know, it is what it is. But yeah, for those of you not living under a rock. Yeah, this fire ship video went
[00:15:01]  up. And it just, it blew things up. I was on vacation, you know, and I was not expecting this. I had no heads up. I woke up
[00:15:08]  one morning, someone was like, fire ship made a solo video. And it was like 7am. And I go and, and I see the notification at 720. And
[00:15:17]  I opened up the video and it already had 20,000 views. And I was like, Whoa, what's going on here? Yeah, I, I honestly,
[00:15:26]  thank you. I don't I don't know what else to say. But yeah, I mean, this is what triggered a whole bunch of conversations. This was a huge
[00:15:40]  week for solid in general. And it did bring up some good discussions that are, that are working good pointing out. Okay, yeah, some people are asking about,
[00:15:52]  am I full time on solid? Let me get into that in a minute. I will talk about that when I get to it. I'm just trying to keep the timeline
[00:15:59]  relatively in order here. Even though there's a lot of stuff going on. But essentially, some people discovered solid for the first time because of the fire ship video. And
[00:16:11]  one of them is Sean, I think he's on the react core team now. But he responsible for the react compiler, very, very much confused by why this switch
[00:16:23]  wasn't working with this if statement. And and yeah, this one, this one, I have to admit, confused me a little bit. I'm not not the example
[00:16:31] , I understand exactly what's going on. But that what people thought this is a big deal. And I realized it's just coming to solid is a huge mind shift
[00:16:38] . You mentioned it, someone mentioned before about the turning the handlebars around, you know, on a bike while riding it. You know, it takes a bit to kind
[00:16:51]  of get wrap your head around. From our model and our perspective, this, this example makes perfect sense. Like, if something runs once, why would you expect this
[00:17:01]  to ever do anything differently? But for people who are like, Oh, that's a red mark. And it's like, I don't even, it's very difficult
[00:17:08]  to even picture what this would do or could do in in sol's model. It just doesn't, it just doesn't make sense. It just doesn't make
[00:17:17]  sense. Um, which those kinds of things actually, I don't, I don't mind as much because, you know, there, there, there, there is a
[00:17:25]  conversation a while back. And I remember someone said one of the best things about react was that they're very, very clear about like, what works and what doesn't work
[00:17:34] , like where the shortcomings are. And I think that's more important because when you hit the unexpected stuff, that's when you hit problems. Anyone who's used solid
[00:17:42]  for more than like an hour or like 20 minutes, like who's done the tutorials pretty much can probably tell you why this could never work. And that's once you
[00:17:52] 're there, this isn't even like an accidental trap. It's literally just the most like basic part of the framework. And, um, yeah, this was, there
[00:18:03]  is a lot of good discussion in this thread, um, about this because I obviously, I got a little bit heated and people think it's funny. like, this
[00:18:12]  is my version of heated where I was like, oh, come on, what's, are you going to tell me either one of these is, is, is stranger than
[00:18:18]  the other? Is it strange to expect that a JavaScript function that runs once doesn't execute multiple branches of a conditional or that a function that rebounds multiple times has stable references
[00:18:27] ? Um. Yeah. I mean, I understand. Yeah, this, this, I was really happy for whoever pointed this out in chat. I think it was probably
[00:18:42]  Sunil, former React core member and from Cloudflare who actually, who actually did that. And yeah, it is a change. And that's the thing. It
[00:18:50] 's funny from Solvus docs and Solvus teaching. We never try and hide this fact, you know, we never go like we're a React clone,
[00:18:57]  but that's the narrative I guess people were hoping for, but I'm, we've, we've had React clones. Solid is not a React clone. Um, but
[00:19:06]  yeah, I mean, there is a lot of discussion here. This one was interesting from David. I just pointed this out where he's like, I wish there's just
[00:19:14]  like a simple framework that didn't do all this stuff. I honestly I've seen, I don't think there's any simple, I've seen like multiple ways to
[00:19:22]  do this stuff and they all have trade-offs. I feel like you pick the best trade-offs and what, but this is, this is like a brushing of imperative
[00:19:31]  versus declarative against, you know, what people consider natural, which is generally imperative and what people want, which is declarative because it simplifies things. And I think
[00:19:40]  walking those lines, we're always going to have issues, unless you yeah, I mean, unless you just give up on performance. We can come up with better abstractions
[00:19:53] , but those abstractions have some potential leaks, and we're just going to keep on shifting things around a little bit, but I don't think we fundamentally just find that
[00:20:02] , I don't know, simplification people are looking for, perhaps, I don't know. Rich Harris, luckily, see, I told you I was on vacation at
[00:19:46]  this time, trying to like not respond. Rich Harris actually did me a solid, sorry, I'm playing on the pun as well. He actually explained how solid's
[00:20:25]  compiler works. If you want to actually like come from like a third-party perspective, like without getting into too many details, for someone who's just like coming in and
[00:20:36]  has doesn't really get it, he actually does a pretty decent job of explaining how solid's compiler works. Later on the thread somewhere, I thank him so much because
[00:20:45]  like, I just, I was like trying to do stuff and like I'm with my family and I'm like trying not to respond to the craziness on Twitter. I
[00:20:53]  probably shouldn't have been posted in the first place, given how much of a storm it would kick up. But actually, I'm glad I did. There was great discussion
[00:21:00]  in here, right, saying looking like React is a double-edged sword. This is, yeah, and I was like, I was like, definitely, but
[00:21:07]  our, but given our goals and values, it could only look different than React in the most superficial ways. That's my belief. Like we would have arrived at the same
[00:21:16]  API regardless of React. So yeah, it's, this, this is great. Honestly, I can dig into here forever, but we're, we got, we
[00:21:25]  got a guest today, but I mean, this is just, yeah, I mean, if, if you want to get lost in, in conversations about abstractions and frameworks
[00:21:37] , just keep on digging into this one. All right. Okay. Um, and yeah, Dan calmed it down, as I told you, this is, this
[00:21:50]  is, this is me getting a little bit heated. He was like, cue the moment in which we, restraining judgment, marvel at how similar looking code can mean completely
[00:21:59]  different things depending on the mindset we apply. Code is special, sorry, code is social, language to speak, inspire many languages that there have been are, or will
[00:22:07]  be. Yeah. Profound Dan Abramoff style. Um, this is why Dan is so awesome. Um, I think the thing that I understand is, which is
[00:22:19]  interesting, is I think that we are, there's a certain convergence on the language in which we describe UIs, the stuff that I call the reactive language stuff, you
[00:22:26]  know, like the idea of that there's these state signals, that there's these derived values and that there's these side effects. We're actually, we are actually
[00:22:33]  arriving here a bit on kind of convergence in terms of language, but yeah, I mean, there's different mental models still present here and, and like completely different ways to
[00:22:46]  do things. So I think this is, I think this is really interesting observation. And I think that, um, I think we're in for some fun, especially when
[00:22:56]  you, when you consider the role of compilers and templating DSLs like in one sense, react and solider very much on this one side where we
[00:23:05]  try and keep that stuff to a minimal. So it's really interesting to see two different pieces of code with almost pure runtime semantics actually run differently. Um, but think
[00:23:15]  about how chaotic, perhaps it gets when you consider that now you can start applying compiler stuff like spelt all over and like where that whole spectrum lies. Um, it
[00:23:26] 's, it's, it's very interesting to me. Um, like at some point, do we figure out a language of UI essentially? That's the question.
[00:23:35]  Yeah. Yeah. I mean, yeah, it's funny. It's, it's just, as I always love the dance level headed there. Cause like, this isn
[00:23:46] 't really an issue, but actually makes sense from the way it works if you know that. So yeah, you know, but it's good. Sometimes we have these
[00:23:56]  discussions and it starts as something that's a little bit confrontational and then it turns, I mean, this isn't even confrontational that much. I mean, maybe,
[00:24:04]  maybe a little bit, I mean, he, I mean, this is just maybe fair feedback. Yes. Also goes like weird, you know, and calling things foot
[00:24:14]  guns. Uh, I, um, I'll leave that at where it is that, that tweet didn't explode. If it had, I might've had to address that
[00:24:22]  more, but I think, I think it's cool that we can start from that and actually get into real discussion. I think that's, that's an important thing.
[00:24:30]  And I, um, I do, even if Twitter doesn't let deep discussion, it does let the culmination of lots of opinions kind of come together, whether that's
[00:24:38]  good or bad, but I actually like this aspect. Um, uh, you know, um, what do we got here? Oh yeah. Gotta love some astro
[00:24:51]  news. Um, they got the Russell build up and going. Um, but let's, let's see here. Yeah. Are we, are we here yet? I
[00:24:58]  think we might be here yet. Let me just double check. Cause yeah, we're here yet. Yeah. Everything is. Yeah. Perfect. Sorry. There's
[00:25:09]  just so much to go over and it's hard for me to keep organized, but here we go. Yeah. I, I'm starting Netlify, um, this
[00:25:15]  week, which is huge. Uh, people come on asking like, are you full-time on solid? And the, the, the answer is it kind of depends.
[00:25:25]  Uh, I can be full-time on solid if that's what I want. But if you guys know anything about me, I am never satisfied with just the one
[00:25:36]  thing I, I, I need to me being full-time on solid, so to speak involves me exploring what everything else is doing. And we're like, we're
[00:25:44]  doing today. We're going to, we're going to look at react server components again. Um, and I want to know about the edge and I want to know,
[00:25:51]  uh, about, you know, how Dino and Netlify are doing these things. And I think it's really interesting. I had conversations in this process before I
[00:25:59]  got hired to Netlify where I did talk to Guillermo, um, from Vercel and I talked to Matias from Netlify and had conversations with
[00:26:07]  them. And, um, I even talked to people at Cloudflare and I got a real sense of, uh, like all the different ways that, that they're
[00:26:18]  approaching the problem and the similarities and the differences. And it, as I said, I'm really stoked in seeing the way that a bunch of them are getting together on the
[00:26:25]  runtime platform, but it goes more than that when you think of at a framework level, when you talk about things from micro front ends to different caching layers, like
[00:26:33]  how, you know, everyone kind of knows that the edge has this great potential, but we know that there's latency to databases. We know that there is, you know
[00:26:42] , so like caching is still important. It's like a new type of CDN almost like, you know, you know, I, you know, I believe
[00:26:51]  like next has been experimenting, uh, with caching at a suspense level and doing analytics, like on a per suspense layer level with react, you know, and what else
[00:27:01]  can we do like that? Can, how do we best combine our immediately available static experiences with our dynamic experiences? This is a whole area of exploration. And obviously I
[00:27:15] 've been working really hard with teams because of my work in Marco and, you know, you know, working closely with quick and astro to understand stuff on the hydration side
[00:27:22] . Um, but that's only part of this puzzle. I think it's a very important piece because ultimately everything gets to the client, but I, I'm very excited
[00:27:31]  to have the means to, to do that. So for me working at Netlify is working on solid, but it's also continuing my relationships with these other open source
[00:27:41]  projects, figuring out what they need. Like routing is something that's been talking about. I would love to kind of look at seeing what we can do on routing side,
[00:27:48]  maybe in a more universal sense, if we can get this client server hybrid router, um, you know, work across the board. I'm not sure if that's,
[00:27:55]  if that's in our, in our future, but that's something I want to look at. I want to look at how we benchmark, how hydration performance and SSR
[00:28:03]  work. I think we need improvements there. I think everyone could bet fit from better understanding what the performance profiles and trade-offs are for things like resumability.
[00:28:12]  Like these things aren't free. You can imagine if you, if you have to serialize a bunch of data now to, so it can resume that probably has a cost
[00:28:20] , a different cost. You're trading CPU for bandwidth. If you have to lazily load chunks of the code, what's the right amount of code to lazily load
[00:28:28] ? You know, how does that affect our load time? Obviously, if you don't load anything, you're going to get a good page score, but it's
[00:28:35] , it's our, is the user being impacted by that later? Like these are things we need to understand. And, um, I feel like being at Netlify
[00:28:44]  is the place where I can do that. So yes, I get to work on solid, but, but there's more too. Just catching up with chat here for
[00:28:54]  a second. Yeah. A bunch of, a bunch of celebration, things. I thought if you had a video to get paid fat, uh, for me, it
[00:29:13] 's about the passion. Um, it wasn't, it wasn't just about money. Um, to be fair there, there may have been options out there where I
[00:29:20]  could have even been paid more, but, um, the, the, I, I believe I, I, a lot of, I had a lot of choices ahead of
[00:29:29]  me. Um, if, if that makes any sense, uh, in terms of where it can go and what degree I could focus on solid and open source and what it
[00:29:37]  would mean for the project. It's tricky to navigate. Uh, one day I want to talk to Evan, you, I think about that. Cause he, he
[00:29:43] 's managed to stay mostly independent and this type of role keeps me relatively independent, but there, there's options where you can like join a company and then it kind of envelop
[00:29:52] s your community. And that can be good. Another thing because now I can pay people to work on it, or you could start a company like Astro or remix.
[00:29:58]  And I had a lot of choices like that to consider. And I went with the one where I'm kind of betting on you guys. If you think about it,
[00:30:07]  I can't pay anyone to work on solid where I, where I, where I am. I'm betting on the community. I'm betting on open source. I'm
[00:30:16] , I, I being able to work myself and at my job and be able to work on this is amazing because I, I get to, I get to, you know
[00:30:24] , dedicate more time and I'm not staying up all night, but the truth of the matter is, you know, it, it's different than eBay where they're
[00:30:31]  paying people to work on, on Marco. You know what I mean? So there is certain realities and trade-offs, but as I said, I'm, I mean
[00:30:38] , maybe I'm an idiot. I'm betting on you. Um, so let's see how that, that goes. Yeah, this, this is, this is a
[00:30:49]  fair question. Um, we're going to see how that relationship goes. Obviously I'm like incredibly busy right now. Like anytime you switch a job, I was like,
[00:30:57]  and I have conference talks and stuff to prep for and all that stuff. But I'm very much still in the conversation with that. We spend a lot of time designing
[00:31:04]  these things, working through the problems, challenges, understanding it, figuring out how to articulate them, document them. Um, you know, it always hurts me a little bit
[00:31:13]  because I get mentioned sometimes in articles and stuff, um, and my work on solid because salt's really pop getting more popular and stuff. And, and, and, you
[00:31:23]  know, people have that association and then they'll talk about hydration and stuff. And they'll be like, Ryan from solid. And, you know, I make,
[00:31:28]  it makes sense why they do this, but Marco gets mentioned way fewer times than it should when it's kind of like, not only the pioneer of all this stuff, but
[00:31:40]  still today, basically leading the charge, people kind of just glaze over it. Um, so, I mean, this, I, I'm going to, I'm going
[00:31:52]  to continue to do what I was doing with Marco, at least, um, in terms of promoting it, writing, educating people, helping with design. We, we
[00:32:02] , we still have more work to do on async, um, queuing scheduling. Um, I don't, we'll see how much time I have to work on
[00:32:10]  writing code and how that fits in, but I'm very much still investing in the project. I think, I think what Marco is doing, especially with Marco six now
[00:32:18]  is it's, it's just, it's the right things, the things that people, we should be doing. I think there are still, um, uh, different
[00:32:29]  philosophies here and different pieces. And I've actually read about that in an article a little while back, but I, I think, I think it's actually kind
[00:32:37]  of interesting because, uh, like you, you, you do end up like it's generational, um, which is kind of funny because Marco kind of maybe is so far
[00:32:47]  ahead of its time that in a sense where you have react angular, and then you have, maybe people were talking about solid felt. It's kind of quick Marco.
[00:33:01]  If you understand what I mean, I'm not saying any of these aren't going to like combine and have the same features and kind of get there and that there won
[00:33:10] 't be competition and that these are just locked in their generation. I'm just saying for me, it's, it's, it's, it's like that sort of
[00:33:19]  thing. Right. Um, so yeah, I, I very much want to see Marco succeed and I'm going to do everything possible I can to, to help with that
[00:33:25]  as well. Yeah. Thank you. Sure. But lots of money too. I mean, maybe, maybe I should have just gone and worked on the angular team at
[00:33:38]  Google. I'm, I'm, I'm pretty positive. That probably would have been my, the route where I could have cashed in the most money, but,
[00:33:46]  um, you know, we, we do what we love. Okay. Well, um, yeah, I mean, I'm not going to get into comparisons there. I
[00:33:57]  mean, miss go did lay out most of quick back in 2019. Um, or, and, but Marco obviously has been doing a lot of the stuff, a lot
[00:34:05]  of stuff since 2013. I'm not going to get who came first, but I like they, but they didn't have that piece of resumability and all like,
[00:34:11]  let's just say that they're different philosophies slightly, but very close and that we're, we're just attacking, you know, it's the two things attacking the
[00:34:19]  same kind of problems. Okay. So I'm going to move forward. Cause we, we, we need to, we need to think to go on. I mean
[00:34:24] , there was so much great stuff like Alexis adding two-way binding to solid, you know, my, my, my absolute favorite thing, but I'm not, I
[00:34:33]  have a whole stream about two-way binding, so I'm not going to talk about that. Sorry. It looked like I lost the stream there for a second.
[00:34:51]  I hope, I hope you all, uh, uh, didn't lose me there. I was just saying that quick SSR performances, uh, improvement is probably very much
[00:35:00]  welcomed. Um, and that kind of gets us mostly up to today. I only have one more topic that I want to kind of bridge over. Um, and it's
[00:35:10]  unfortunate. I was talking about how sometimes being a bit aggressive on Twitter can actually promote good discussion. Well, that discussion never happened on Twitter, but it happened off of Twitter
[00:35:23] . And I want to, I want to, I want to show you, show, show everyone this. Um, this was deleted. Um, it was original Twitter post
[00:35:31] . And I mean, there's been a few of these where Remix team actually like write something, then they delete it later. And then everyone's like, what the
[00:35:40]  hell are you talking about? And like, I'm not making this stuff up. Um, th th this, this is kind of important, um, because it's
[00:35:48]  not about what this means. Cause, uh, uh, we, we obviously there, there is a, an announcement, um, and, and what, what,
[00:36:01]  what had happened was, um, um, they, where is it? Did I skip over it? No, it's maybe it's my bookmarks. Yeah. They
[00:36:07] , they announced the next yes, nested routing layouts, RFC and, and whatnot. And it, it talked about how they're going to handle routing. And I
[00:36:19] , I think it's really cool. I think, I think this is really important. Um, and we're probably might, I might can talk more about this again
[00:36:26]  in the future. It was a big one, um, this week and what caught me wasn't this about not giving them credit because Remix has had no problem, uh
[00:36:38] , you know, taking credit for whatever gets built on the web. You know, that, that, that has not been a problem for them. I think this felt more
[00:36:47]  like a blow because you have basically the visionary of react for the last few years working at next. And I, we've been talking about this routing on stream for,
[00:36:58]  for months and, and, and, uh, and then they kind of let's go ahead on their own kind of vision and do this stuff. And they do want to
[00:37:13]  include more of the community and make that work, but it's, it's, it's challenging because like you're building something like Remix where maybe you don't
[00:37:25]  quite have the same inside track and you're building all the same stuff. And then react has like their official version. And now are you at odds with react? And like
[00:37:33] , it's like, how many times does this happen before you feel like you're getting pushed out of it? I feel like that's where the pain is here. It
[00:37:41] 's not about what's being written here. This is, this is about a concern about, you know, for cell owning react future. Not, not that anyone believes
[00:37:51]  that's exactly what's intentionally happening, but just react like, let's connect some dots here for a minute. React with react 18 basically launches a whole bunch of features that
[00:38:03]  you can't use unless you're using some third party library. Right. Like they're like, don't look for us for it. Use a third party. And
[00:38:11]  then, then they start rolling these features out as part of like next.js, which vision, you know, basically the visionary behind react is actually developing in their way.
[00:38:23]  And Remix kind of developed a bunch of stuff themselves. They have like their own transition model. They're not using suspense. They've created their own error boundaries. And
[00:38:29]  suddenly then reacts like our next is like, this is the way this is, this is, this is hard after a while. It feels like kind of getting gut punched
[00:38:39]  a little bit, even a call out or like in the influence, you kind of feel a little bit better about what you're doing in the work you're doing. And
[00:38:48]  don't get me wrong. I actually think Remix had very little to do with this addition to next. This is all about server components. Let's not kid ourselves.
[00:38:56]  like they've had this request for nested routing forever. I mean, react router one had nested routing back in 2014. Ember had it back 2012. S
[00:39:04] apper in 2016. I can go back. Everyone keeps on trying to claim who created nested routing first. It's been here forever. I wrote my first nested router
[00:39:12]  in 2014 for web components. Like this is not about who came first or giving credit. This is just, this is, this is, this is about a future that
[00:39:23]  react is building and trying to figure out how to balance including the community and the ecosystem. That's, that's why this is a topical subject and why this is important
[00:39:33] . Um, right. I really, at least I hope that's why he's like, well, sure. But I mean, this is my problem here. I mean
[00:39:42] , people have to go back to my streams and check, check this stuff out. There's been a lot of conversations that have gotten deleted here. I like sometimes when
[00:39:51]  these lead to good conversation, this one did not, there was a lot of harsh bashing here. And I, I, I feel like it's probably right to delete
[00:39:59]  this one. You know, we, we had our own little tiff with Michael, uh, Jackson earlier, uh, you know, but I mean, like,
[00:40:06]  it got deleted too. Like who, who cares about what someone thinks about solids control flow, like just move on. But I think that the, I, I feel,
[00:40:17]  I feel the pain here, like as an empathetic person, I feel this. And I, I, even if it deleted, I think this was important and I,
[00:40:25]  I hope, I hope others can get that. And maybe this is just my outsider view. I'm, I'm not part of Remix. I haven't felt that
[00:40:33] , but that that's, that's what I see. And I'm interested about what others think about how React's developing and React serve components, right? That's
[00:40:40] , that's a bit where we get bread on stream today, because this is, this is a, this is a, this is a, this is a, this is
[00:40:45]  an interesting thing about the future of, of, of React, right? So yeah, I, I mean, this is a complicated subject and this is kind of by
[00:40:57]  my whole lead in here to actually talking about today's topic. I, I went a little bit over time than I wanted to, but there was just so much to,
[00:41:06]  to, to go on here. Let me see here just a second. See if we, we do have bread around. We do have bread around. Yes, no,
[00:41:13]  that's perfect. So we, we are going to get Brett on stream. I'm going to switch ourselves over and let's, let's, let's welcome Brett
[00:41:25] . Hi. Hello. How are you doing today? Good. I'm just trying to, I've just been listening on, hearing all the hot takes and it's been
[00:41:34]  fun. Yeah. I mean, this is a pretty heavy message to kind of lead into this, but I, I think this is why this is a topical conversation.
[00:41:42]  I've, I've, I've wanted to talk to you about hydrogen and about react server components forever. I did my own little dig in on stream back in January
[00:41:49]  into just react server components and you know, that demo like a year late, but you know, better late than never. But I, you know, I, I,
[00:41:56]  I think it's really interesting because there are a lot of perceptions from the outside trying to just figure out, you know, are we getting word in and reacts future? Like
[00:42:07] , I think there's a comment about, you know, should react via foundation and, you know, luckily, you know, Shopify saw the potential server components almost immediately
[00:42:17]  and we're like, this is what we want. And I, I, I'd love to just like know a little bit more about that. And, you know,
[00:42:24]  we just, how, how's it been like, how, how, how are you doing? You know? Good. Uh, yeah. So I'm, so I
[00:42:31] 'm an engineer at Shopify. I work on the hydrogen team. Um, I based off on the East coast. So thank you for, you know, this time instead
[00:42:39]  of your usual time. Um, but yeah, there's, there's a long history, I think, um, at Shopify, that's kind of led up to,
[00:42:47]  um, you know, the adoption of server components, the framework that we're building, there's, there's, I think it's a big thing, honestly, for
[00:42:56]  a company like Shopify to say, Hey, we're going to build our own own framework, uh, instead of given what else is out there in the ecosystem, you
[00:43:04]  know, there's next there's, there's a lot of things out there. So the decision to build a framework, it's a big decision. Um, I think
[00:43:11]  it's yet to play out for Shopify, you know, is that a good decision or a bad decision? I mean, I'm on the team, so I'm excited
[00:43:17]  about it. I I'm, I'm really excited about what we're working on, but you know, it's, you can't predict the future. So we'll
[00:43:23] , we'll see what we can to make it though. Yeah. I mean, I think it is interesting because it feels like this is a realm that where a lot
[00:43:31]  of, someone mentioned a lot of innovations happening on the meta framework side. I, I actually think that a lot of innovation is also happening on the framework side, as you
[00:43:38]  know, but I can understand where a lot of that perspective is coming from. And, but on the other hand, are we seeing consolidation as well? Like, you
[00:43:46]  know, when, when the Svelte makes Svelte kit, like when it's actually the core members working on that and, you know, some people might,
[00:43:54]  you know, obviously I've been working on solid start, but some people might also perceive next being that extension for react. What does that mean for everyone else? You know
[00:44:06] , it feels like there should be more room and reacting does seem like they're trying to approach this in a very general way in getting feedback, but like, again,
[00:44:13]  what do I know? I feel like they are. I feel like, I mean, that's kind of even been the mentality of, you know, I mean, that
[00:44:22] 's one of the criticisms of react. There isn't necessarily a router in core. There isn't like some, like, I don't know, sanctioned state management library
[00:44:32] . I mean, that, that is a complaint, but a lot of people come to react compared to Svelte and other frameworks where batteries included. There's a
[00:44:40]  way to do styles. There's a way to do routing. There's a way to do lots of things out of the box, whereas react, they're kind of an
[00:44:46]  opinionated with a lot of it. And so I think, you know, that's a double-edged sword. Yeah. I have to say, I like that
[00:44:53]  part about react. I've always, that's like one of the pieces I wanted to emulate when I created solid was, was that element of it. But yeah,
[00:45:00]  it is interesting because there, I think there's a feeling right now because, especially the way the language has changed and stuff that they are, this is an interesting choice,
[00:45:09]  right? They want to keep it open, but at the same time, it's, it's hard to now. So there's like this, like, it feels like
[00:45:16]  a lot of the features are layering on top of each other in a way that's actually almost like, here's the building blocks for meta framework. You can build it however
[00:45:24]  you want, except we're going to guide you to how we think you should do it. And it's, it's an interesting challenge because that isn't targeting the
[00:45:35]  average developer anymore. It's targeting people like yourself working on, on the framework. So that's where the tools and the, you know, kind of come in. And
[00:45:42]  I think that's, I think that's, yeah, it's interesting. Obviously I'd probably, that's, I'd have to get down on stream or something
[00:45:50]  there and actually get right into their reasoning. But it is obviously yourself and a few others being on the other side of it. Obviously interesting to see, kind of understand how
[00:46:01]  that feels for you. But I'm glad so far that that seems like that's what it feels like at least. I mean, I mean, we aren't without our
[00:46:10]  own complaints. So we work pretty closely with meta on, on React. And especially when it comes to server components, we're, we're very, very early adop
[00:46:20] ter. And there's, there's pains with being an early adopter. I mean, we've, we encounter bugs, we report bugs, we fixed bugs, we
[00:46:29] 're, we're very actively involved. But at the same time, meta has been fairly open that server components for them, I think is still a little bit more experimental.
[00:46:40]  And it's not as big of a priority to move it out of experimental as it might be for us, and also for, for Vercel. Vercel
[00:46:47]  is definitely pushing more to move it out of experimental just as we are. Whereas, whereas meta, maybe not as much, I don't know, I can't speak for
[00:46:57]  them necessarily, but it doesn't seem at least as priority. It makes sense to me because I mean, I'm sure there's developer experience pieces and there's parts
[00:47:09]  of their app where, and they're going to run their stuff internally in their own way anyways. But Shopify, as you mentioned, has a history and a reason why they
[00:47:17] , this was attractive. And as I said, right away, like you guys, like before I even like next, like next probably knew that they were going to do
[00:47:26]  some of the stuff. Shopify was just like, we're using server components, like, like straight up. You clearly saw a benefit, like right from the beginning.
[00:47:35]  Mike Barrett: Well, so the, so the benefits we're really going for is I think, I think in the last few years, I think a lot of people
[00:47:43]  got really excited about Jamstack. This idea of, oh, I can serve out stuff really quickly if it's static. If I pre-generate a ton of
[00:47:51]  content, I can put it on the edge. I can put it really wherever I want, and it can be super duper fast. But honestly, for, for us
[00:47:59]  at Shopify, static content is not interesting. Like when we talk about like an interesting storefront or an e-commerce site, we're talking about something that is extremely
[00:48:14]  dynamic. So if you compare going to maybe walmart.com or going to an Amazon e-commerce website, you go to a product page that shows a product that you
[00:48:24] 're going to buy. There's actually a ton of content that's on that page that is very, very, very dynamic. Like if you think about like, say
[00:48:32]  maybe it's Walmart, there's maybe in-store pickup. In-store pickup, whether it says it's available, depends upon your location, depends upon the stock in
[00:48:41]  the store. Like there's so many different variables of things on any given product page that are unique to you, your location, product, like what your interests are, related
[00:48:53]  products, all sorts of things. And for, for us as Shopify to compete, uh, to provide the best e-commerce experience for our customers, we have to
[00:49:03]  like provide a framework that from the get-go can be super duper duper dynamic, not static, but also super duper performant. And so server components
[00:49:15]  are interesting for, from our perspective because, um, you can do very dynamic things on the server, never ship that stuff to the client at all. Um, and
[00:49:29]  where that serve, that server logic is living. Also, if that can exist on the edge and close to the user, um, it can be performant. And,
[00:49:38]  um, so if you go back a year, you know, maybe when, when Shopify, maybe over a year, year and a half ago, probably when we were
[00:49:46]  first researching, um, you know, should we build this new framework hydrogen or should we use something off the shelf? Like again, that the initial sort of thing we're
[00:49:54]  looking for is we want something very, very dynamic. And you, I, I, I, you know, Next.js, at least at the time, I
[00:50:01]  think Next.js has some good primitives for building more dynamic sites, but it feels like when you use the framework primarily, like at least the, the first generation Next
[00:50:13] .js is more static focused or more, uh, SSG sort of, um, Jamstack focused. This new approach, especially with what they're doing now,
[00:50:23]  this recent announcement is very different. Also remix wasn't around a year, year and a half ago, when we were first researching this. So, you know, you
[00:50:31]  put us in the whole situation, like a year and a half later and say, okay, we need this dynamic framework. I don't know if we would, would invest
[00:50:40]  in the same or not. Um, whether we would have picked Remix or Next or something else, I don't know, but just given the time and the place,
[00:50:48]  um, with the expertise we have here with reactives, we decided to invest heavily in server components and building out hydrogen. And that's, kind of the reasoning behind
[00:50:59]  it. Like, again, um, we haven't, we haven't reached a 1.0 release with hydrogen. And so it's not, uh, not really,
[00:51:07]  it's still dev preview. I wouldn't like necessarily build an e-commerce site yet in production with it and ship it. Um, as Ryan, just yesterday, you
[00:51:17] , uh, you discovered a bug that we, we fixed, but there's still bugs in the framework. Yeah. Yeah, no, that, and I, yeah
[00:51:25] , I, I was kind of pushing in that way because one thing that kind of, you mentioned the dynamicism, but you also, cause when I think of react,
[00:51:31]  I think of dynamic anyway, like react in itself is very dynamic and maybe the, some of the frameworks were catering to SSD, but like you could it's react.
[00:51:40]  So you could use it to be fairly dynamic if you wanted to kind of force it a little bit, but I, I like performance is what I was kind of more
[00:51:50]  hinting at, but I, I mean, I don't know how, how much that plays into kids like e-commerce has those kind of performance considerations. Definitely.
[00:51:59]  And, um, I worked, as you know, I worked at eBay. Um, and you know, eBay was interesting too, because obviously there's all those little pieces
[00:52:07]  and we're also an auction site. So keeping, you have that dynamicism and actually keeping the bidding and the, like, like the status of stuff, you know
[00:52:16] , um, up to date. And it's, it's, it is interesting people, sometimes I do talk to a lot of people at e-commerce and they,
[00:52:24]  they, a lot of them are assume, oh, it's mostly static. And it, it depends. It's, you know, this is why there's been a
[00:52:29]  lot of talk about islands and other technologies, but like for React itself, um, like the, it was, they, they, things weren't actually branching out
[00:52:40]  in that direction. Um, you know, and I, I think RSCs or maybe, uh, React server components are maybe just like, uh, like, Hey
[00:52:48] , we can live in this world as well. And I think, I think that's interesting because it opens up potential. You mentioned people had experience that with Shopify with
[00:52:56]  react and it's, you know, everybody has experience with react as it's kind of industry standard. Um, so having this option of something that could potentially cater to e
[00:53:06] -commerce seems like a no brainer, you know, I, I mean, there's this promise here that with server points, I believe that, you know, you
[00:53:16]  can cut down on shipping huge amounts of JavaScript and focus just on the parts that need to be in the browser that need to be in the browser. I think that feels like
[00:53:24]  stuff that would be very important for an e-commerce, uh, site because that performance is important. Yeah. And, and like, I don't know, like
[00:53:35]  it, like it's the same paradigm too. So what these components that you're building on the server that only ever execute on the server that don't ever ship code to
[00:53:43]  the client, it's still, it's still react components. There's restrictions around that, but at least it's, it's the same paradigm. Um, right.
[00:53:52]  Most ways. Right. Because that's the thing. There's been some question about that. There's a DX kind of consideration here in developer experiences because there, there
[00:54:00]  are ways to get performance and get some amount of dynamicism, but they usually involve you maintaining like two apps historically, like you being like, here's my fast backend.
[00:54:12]  And then here's my intercepted JavaScript layers. And there's been a bunch of companies that have played around with those kind of things. And, and, you know,
[00:54:19]  been like, oh, we can't actually run a full react app in the browser. It's too expensive. I think Netlify had a study, something where
[00:54:26]  they showed that where they were actually using react just on the server and then doing their own custom thing in the front. Um, you know, Amazon had their own kind of
[00:54:34]  sort of not sort of Netflix, not left fly to Netflix had something like that, where they were, where they were using react just on the server and not in the client
[00:54:44] . And then there's, uh, Amazon a while ago posted a big thing where they're saying on Amazon.com, they couldn't actually further performance budgets couldn't
[00:54:51] , and the way they're architect, they couldn't actually use react, um, at all. Um, and I'm, I'm, this is, I think very
[00:54:57]  much coming from, uh, pre-reactive component world. Um, I don't even know if reacts are most completely can for everyone can fill that gap, but it
[00:55:06]  is interesting that it does seem to open up a new potential opportunity that might have not been there before. Yeah. Yeah. Okay. But a question in the, just
[00:55:18]  to answer a question that somebody posted regarding, uh, in production. So we don't have, uh, like, um, we're working with a number of partners kind
[00:55:27]  of just, uh, to kind of, um, preview hydrogen. Uh, we don't have anything to announce at the moment of anybody using it in production, but
[00:55:38]  we hope to have a 1.0 release within the near future. Um, we're just working with a number of people to, uh, to, you know, uh
[00:55:46] , validate, uh, the API, but also, um, just, just make sure we're actually ready for, for final production use. There's, there's a
[00:55:56]  number of things we want to make sure it's hardened and resilient and really ready to go. Cool. Yeah, no, I, I, I did get a chance
[00:56:04]  to play with it a little bit. And as you mentioned, found a little bug and, but I, I could already see the incredible potential here. Maybe it's,
[00:56:12]  wouldn't be a bad time now to actually kind of see hydrogen and see what it's, what it's all about. Do you have the demo or should I? Yeah
[00:56:20] . Okay. Yeah, I can, I can share. So if you want to get started with a hydrogen, um, you go to hydrogen.shopify.dev
[00:56:32] , um, kind of a fun little website that kind of helps you get started, but really like getting started is pretty simple. Um, just MPX create hydrogen app latest
[00:56:44] . Um, if, if I run that, let's just create a hydrogen app real quick. Here we are startup, build studio code right here and just kind of
[00:57:00]  show you what it looks like. Let's, it's all the dependencies here before we get going. And while that's installing, I can just kind of show you a
[00:57:10]  little bit around, um, what it looks like. Um, yeah, always fun to readjust all the sizes for streaming. Cause you end up blowing up all your
[00:57:26] , all the windows just don't look as nice. And then you're like, uh, how do I get around? But people who are trying to watch this from their
[00:57:32]  mobile phones will thank you. That's right. Uh, so here we are. Let's, uh, let's actually, before you show, I show around the code
[00:57:40] , let's just start it up. It's just yarn dev to start it up and should fire up. So let's go to localhost. Here we are.
[00:57:51]  Here is the, just this. So this is just this, the sample application that we distribute with hydrogen just out of the box. Um, like this, this is not
[00:58:01]  like, clearly this is meant to be something that is very customizable. You can change it to whatever you want. Um, but if, if you already have, so,
[00:58:09]  and this, maybe this is something we didn't mention at the start, Ryan, but like hydrogen isn't necessarily, we're not trying to compete with next. We
[00:58:17] 're not really trying to compete with remix. We're not trying to compete necessarily with these other frameworks. We don't believe in the zero sum game as far as the winners
[00:58:26]  and the losers. Really? This is an opinionated framework around commerce. So if you're not doing commerce, e-commerce, even if you're not, if you
[00:58:36] 're not building a Shopify website itself, the, I don't know if I would, I would recommend using hydrogen. Like hydrogen is really tailored for the Shopify use cases
[00:58:47] , building on top of Shopify's APIs. Um, so in that case, um, like there's a config file inside here and there is a storefront token storefront
[00:58:59]  domain. So this is just the, the preview, um, site that we're using right here. If you have a Shopify storefront and you are to rotate out
[00:59:09]  the storefront token and domain for your, um, own site, then when you'd load this, instead of seeing these awesome snowboards and such, you'd see the
[00:59:18]  products that you have defined inside your, um, Shopify storefront. That's kind of an initial thing just to, to, to realize again, we don't believe
[00:59:26]  necessarily in the zero sum game of one framework, one winner, one loser sort of thing, or many losers. Um, we're working actually actively with the remix folks to
[00:59:38]  build a remix stack that is using hydrogen react components that works really well with remix. Uh, we also want to work really closely with next as well. Like this is
[00:59:50]  not like really at the end of the day for us at Shopify, we want you to succeed as a software engineer in building a storefront quickly and easily on top of our
[01:00:00]  API. So you can ship something awesome for your customers. If that means using remix, cause you know, remix really well, and you're excited about remix, like
[01:00:09] , why should we like discourage that? Or if you know, view or Svelte or whatever it may be like, we're, we want to actively encourage the
[01:00:18]  community, uh, to, to build awesome stuff on top of, uh, Shopify's ecosystem. Nice. Yeah. No, I mean, that makes sense. I mean
[01:00:26] , ultimately you're here to make stores and sell things. So it's not a, yeah. Yeah. It's, I mean, it's, it's in our
[01:00:33]  business interest to be as open as possible and not be like use hydrogen or, or like, I don't know, like it'd be silly. Um, if we kind
[01:00:42]  of look at the nuts and bolts of what a hydrogen app looks like though. So this is the main app dot server JSX. So this is the main entry point of
[01:00:50]  the, the application. So inside here, a lot of this stuff maybe would be is, is familiar, um, if you know, react pretty well, uh,
[01:00:58]  maybe it wouldn't be if you don't know react. So kind of some of the key things inside here is there's suspense, suspense boundaries. Um, suspense is the
[01:01:07]  new feature that's been added in react 18. Um, and essentially what resistance allows you to do is the components inside here. They could dynamically fetch data at runtime.
[01:01:21]  And when that happens, they will fall back and inside the suspense boundary, this, whatever is in this fallback prop is going to get rendered while, um, data is
[01:01:32]  being fetched somewhere inside this hierarchy of components. Um, and kind of, so that that's react 18 with, uh, suspense and streaming where this whole page will
[01:01:44]  get streamed to the browser and initially what's going to get, or go ahead. You guys use the streaming APIs by default. Is that how that works? Okay.
[01:01:55]  Which, which is like something sometimes that people get confused a little bit about because, um, um, um, streaming's kind of, it's a little bit different.
[01:02:07]  And like, so one of the biggest questions we get when it comes to streaming is what about, uh, what about bots? What about, uh, search engines and
[01:02:13]  such, if you're streaming, um, how can, uh, can a search engine deal with a streaming, uh, a streamed response from the server? And the
[01:02:23]  answer is we'll actually not stream for bots. Instead, we will buffer the response for this entire app for a bot and send down a complete server side rendered, um,
[01:02:36]  uh, page. So, yeah, so, so there's some things in here though. So, so that's the, the first sort of thing, the suspense
[01:02:46]  boundary. So this, this helps us stream. There's other things inside here. So the Shopify provider, this is just a provider component that allows us to get, uh
[01:02:55] , Shopify specific stuff, like works with our, our API. Um, and then there's the cart provider. So this is more setting up a cart context because at
[01:03:05]  the top of the page here, we have a cart. So if I come and add something to the cart, um, that's, it's, it's a
[01:03:13]  global context that's available, uh, for the cart. And so a lot of these as well, these are helper components so that you can use hooks and components within them
[01:03:23]  that make things a little bit easier. Um, and then, uh, we have a router. So right now our router is a custom built router. Um, chances
[01:03:33]  are we might, uh, adopt react router or remix router as their new version is, uh, is called, but at this moment in time, we're using our
[01:03:42]  own custom router. And there, there's a number of reasons for that. Primarily, um, Primarily. So again, we're using server components and we should
[01:03:54]  talk about server components here in a second, but the current version of react router is not compatible with server components. So we're working with the remix folks and talking to people
[01:04:03]  and just seeing if we can make a change and actually get this more standard with react router, but the API is, is, is somewhat similar as to what you might
[01:04:11]  expect. Um, so kind of a key difference here though, is, is a well, similar to remix. Um, we have file routes. So this is the default
[01:04:21]  sort of file routes that are going to be in the application. And then you can have custom routes inside here too. And the only custom route is just a wild card that
[01:04:28]  if nothing's matched in the file routes, we're just going to fall back to a not found. Makes sense. Um, but by default, everything is going to
[01:04:38]  be all the file routes are defined inside this routes directory. Um, we could pass in a prop inside here to customize that and put into a different directory if you wanted,
[01:04:49]  but by default, um, all the files are, are represent all the files in this directory represent a route. And I'm noticing right off the bat, although this
[01:04:58]  might not be required is that the entry of the app is a server component and every route that I'm looking at right now is a server component. It looks like they
[01:05:08] 're all done right now. Um, every route has to be a server component. There are no client component based routes at the moment. That is something that is different with
[01:05:18]  Next.js with their recent announcement. It sounds like you can have client and server components as routes. Um, let's talk a little bit about really what is a server
[01:05:27]  component though, and what's different about a client component versus a server component. So in a server component, um, you, you can do more things that maybe you
[01:05:39]  wouldn't be able to do in a normal component, but then there's other things that you can't do. So you have restrictions, but also you have new capabilities
[01:05:47] . Um, so some of the new capabilities that you might have inside a server component is this is only ever going to execute on the server. So everything inside this component,
[01:06:00]  um, again, is only, only ever going to execute on the server. So you could do stuff like from the file system. Right. Right. No, nothing interesting
[01:06:11]  to me about this. And I, I mean, cause a lot of people who fall in the stream, we, we, we dig pretty deep into this kind of
[01:06:17]  stuff. One thing that we know as a rule of server components is you can't use state because state is a statefulness is a client side concept. Um, but it
[01:06:27] 's interesting for me, cause I'm looking at this use session in front of me right now. And this means that use session doesn't use state underneath, but, but
[01:06:35]  you're using a hook like a naming convention. And I was wondering, is this like, uh, how, how did that kind of play into things? Cause I
[01:06:42]  imagine there's probably situations where things could be server, like APIs could be used on the server or server and client or all that. Like, is this like a way of
[01:06:51]  uniforming the interface or whatever? It just, it is interesting to me because I know that you session can't have you stayed in it, but like, is that a
[01:07:00]  distinction? That's a good question. So we have, uh, we have, um, a linter that, uh, runs by default inside this. So if
[01:07:08]  I use, um, if I do use state inside here, I should get a, um, uh, a warning. Yes. Do not use use state and react server
[01:07:22]  components. Right. But you, but you, you, you get what I'm getting at. Cause it's, technically the whole beauty of hooks is that, um
[01:07:29] , the composable. So, so like tech, like I, I know that you state is not even used inside you session somewhere else, like technically deeply nested is
[01:07:41] , is what's interesting to me. So like when someone presents an API, it's, it's probably like, how do you like, is there, I'm
[01:07:50]  wondering, it's an interesting thing. Like, do you differentiate between like, this can only be used on the server or this can be used on the client or like it
[01:07:58]  can be used on both. And the, yeah, it was just, it was just kind of an interesting thing. Cause when I saw use session immediately, I was like
[01:08:05] , oh, that's a hook. And then I'm like, wait, that's not a hook. Yeah. That's a good, that's a good question.
[01:08:10]  And honestly, I, I, whether or not this should be named use session or something else, uh, is, is interesting. The thing is though, there are
[01:08:21] , um, I'm having a, um, there are things used on both sides, right? Yeah. There are hooks that can be used inside server components in the
[01:08:33]  react land itself. Really? Okay. Yeah. For example, use context. Um, huh? So like the, there, there are cooks, hooks that are available,
[01:08:45]  but the stateful hooks are not. So like, when I say stateful of hooks, but also the hooks that like use effect. And so like, and I think
[01:08:52]  kind of the, the point is when you're thinking about a server component, it has, it doesn't have the same life cycle as something that's on the client
[01:09:01] . A client has potentially could live for a long time. It can rerun kind of like what you were talking about earlier. Like it can rerun multiple times in,
[01:09:10]  in a server component context, like really, you're just trying to build a response to send down to the browser. Yeah. Yeah. The state doesn't really make sense
[01:09:20]  and effect doesn't really make sense. Um, those, the, so those, those sorts of things like, um, where you, where you, I don't
[01:09:30]  know, I'm not saying this right. Like where, where you're actually going to be, um, using state and effects in a way that like is going to long
[01:09:40]  last on an actual site. Like you're not, it's, right. Like the, the, the only amount of updating that we care about here is that when asynchronous
[01:09:51]  data resolves that we can render something. It's the, there's, there's no interactivity here or interaction here. So other than things that are driven that
[01:09:59]  we know initially, like the URL, so to speak, or the request and stuff that happens due to async data, which is derived from, again, the request in
[01:10:10]  a sense, nothing else is, you can interact with. So there's, there's no need for any statefulness because nothing can possibly change. Um, yeah,
[01:10:20]  it's a, it's request response. It's just the request. And we're delivering the response. Yeah. Someone's asking about context, but I think the whole
[01:10:27]  thing is context here works in a simpler mechanism and that it's just a way of injecting data or variables. Like if you're going to write an app that has
[01:10:36]  some shared data, um, you know, higher up, then essentially this is just, I'm gathering this is just a way of getting that into your components, right.
[01:10:46]  Instead of prop drilling, like context is just the container, not necessarily the stateful mechanism. there. Yeah, exactly. And there, there's lots of tricky things
[01:10:58]  that come with context, uh, that we won't go into, but like, that's, that's in a nutshell, kind of the way it works. But this
[01:11:05]  is, this is one of the, probably the downsides of server components is like, what you're getting at is, it can be a little bit confusing like,
[01:11:13]  what you can and can't do inside a server component. Like, like inside a server component, a, I'm not going to be using, um, you know,
[01:11:21]  um, stateful and, um, like APIs that might have like effects and such inside them, but I can directly query a database if I wanted to, I can read
[01:11:32]  from a file system if I wanted to, I can do all sorts of privileged stuff. And for, for commerce that becomes interesting too, because say, um, say
[01:11:42]  we have an API token, that's a privileged API token. We don't want that to show up in the browser. We don't want that ever to be delivered down
[01:11:50]  to the client. Um, we can put that in a server component easy. And because the server component is only ever going to execute on the server. It doesn't matter
[01:11:58]  what tokens and what sorts of things are, are put inside there. Yeah. And that's, that's, it's interesting. Cause right now I know there's some
[01:12:05]  conversation on the react side, like how they denote server components, where they use the file extension, whether other things, I think in that sense, this file extension is
[01:12:12]  like, here is the contract. Like, you don't, you don't go and accidentally retype the, the, the file name. Usually like, like it would
[01:12:20]  be terrible if someone accidentally let a server component get to the client by, by, by doing something react the way this is set up with using the file system naming convention.
[01:12:32]  And the fact that the server components have this, like, you can't be nested under client component stuff, probably actually safeguards things a little bit too,
[01:12:40]  because like the, that tree needs to stay intact on the server. Like if someone does try and met or someone does accidentally mess something up, you'll pro it'll probably
[01:12:49]  get caught actually in a sense, because you'll probably breaking one of the rules, um, through the hierarchy. I I'm getting a little more tactical. I'm just
[01:12:56] , this is seeing it described this way as getting me, getting me thinking. So I'm just thinking out loud. And I, I should also like, um
[01:13:04] , maybe, um, put a caveat when I say using context inside server components. There are, uh, there's, you can't use context the same way inside server
[01:13:16]  components as you can normally inside a client component. And there's specifically at the moment, hydrogen as well, doesn't support it at the moment in a way that you can
[01:13:25]  see. There is a, it's, it's recently been added to React the experimental version of React, like a, uh, a server context concept. But,
[01:13:37]  uh, my point is, though, is still largely the same though. There are, are hooks that can execute on server components and some that can't. Um, that
[01:13:45]  said though, at the same time that what we've, we've found heavily is there's a lot of confusion around client components. If I were to pull all the people
[01:13:55]  in here and ask, do client components execute on the server? Most people probably would say, no, they don't. Because inherently it's a client component. Why
[01:14:08]  would a client component execute on the server? But in actuality it does because a client component, all a client component is, is a traditional React component. And a traditional
[01:14:18]  React component in an e-commerce, um, website, you're probably going to want a server render that. Yeah. Because you actually want that to be delivered to
[01:14:28]  the client in a more optimized, uh, quickly rendered way. And so, yes, client components are going to be rendered on the server as well, though they still have
[01:14:38]  restrictions as to what you should be doing inside those client components. Which actually brings up an interesting question on a more technical side for me because the original React demo didn't
[01:14:47]  have this. These, like the original React aspect. Yeah. They had the, they, they, they did the server components all on the client. Are, are you
[01:14:55]  are SSRing the server components then, uh, with Hydra? Or we are SSRing the client components. So the, the server components render on the
[01:15:04]  server and never on the client. Okay. Okay. Sorry. Yeah. Client, but then also we are server side rendering them as well. If you don't want
[01:15:13]  to render like something inside a client component on the server, it's the same sort of way we've done that for years with React. Yeah. So, but to be
[01:15:22]  clear then. Like at the point of that initial request, um, we are, I know we're not calling it SSR, but we are rendering the server components
[01:15:34]  and interleaving the client components all on the server. Cause as I said, the original React demo, they hadn't done that. They literally loaded a client side app
[01:15:42]  and then loaded the server components from the client side app rather than actually have everything pre-rendered. So with hydrogen, we have the full pre-rendering happening.
[01:15:51]  Okay. Yeah. And this, this is one of those things where we've, uh, we're kind of a little bit ahead as far as what meta has actually
[01:15:59]  demonstrated and actually like, uh, put out as examples. Like they have no example that I've seen where they're actually server side rendering client components. And that kind of
[01:16:10]  like, um, yeah, some people jumped on their demo, like, I don't know, uh, six months ago when they were saying that, you know,
[01:16:18]  the performance of this sucks, um, uh, like, and, and just kind of negatively bashing react server components from a perf perspective, when in reality, they,
[01:16:29]  it was never complete. They were like for performance ornaments, you're going to want to server side render those client components. And they just never built it out. And I
[01:16:38]  think they put a caveat now at the top of their demo saying this hasn't been complete. We don't server side render this stuff yet. And, um, but
[01:16:48]  we're, we're trying to push this forward a lot faster. And so we are, we're, we're, we're, we're making it happen.
[01:16:54]  Yeah. That is interesting. Cause I, I, I believe Shopify even more than next is probably incentivized on this. Like, cause like next can kind of get away
[01:17:03]  with what they're doing and they've been doing it. You guys have a real need. And as I said, I, I can, I, I empathize with
[01:17:10]  the e-commerce need. Marco was built because of the e-commerce need quick was built because of the e-commerce need like this in performance, this kind of
[01:17:22]  partial hydration, these are real things that are important and, um, react server components for the first time, give react a real ability to be part of this. And you
[01:17:34] 're like, you can't get them soon enough. Like this, you get to, you get to, you get to what, you know, make your cake and
[01:17:40]  eat it too. You get to actually still use react and still get the, you know, the benefits of this nature. Um, so yeah, no, I, I
[01:17:49]  can, I can understand why, like, they were first introduced in 2020 to the public. I don't know if you Shopify might've known about them before, uh,
[01:17:58]  December, 2020. And now we're, um, May, 2022. Um, so, you know, we don't know when server components are going to get public
[01:18:08]  release, but I'm sure Shopify is getting closer and closer to wanting to be like, here we are, here's the future, you know? Um, yeah. And
[01:18:16] , uh, I think it's interesting that you said kind of, I feel like e-commerce, a lot of ways has pushed the web forward a lot throughout the
[01:18:24]  history of the web and a lot of people at least i talk to sometimes think that like e-commerce sites are relatively simple and maybe this is this this example probably is pretty
[01:18:36]  simple in actuality i mean this is just a simple pretty dumb product page a few variations of the product you add to a carton you check out there's not that much
[01:18:45]  here but like you when you actually look at an ebay page or a walmart page or an amazon page there is a ton of stuff going on and it's it
[01:18:54] 's actually pretty difficult and complicated to to build it in a performance way especially when you have to reconcile with the reality that more than one team is working on that page um like
[01:19:07]  that's a whole other angle of it but yeah i i know this firsthand right it's just it's it's it's it's it's a it's a it's
[01:19:14]  a whole other amount of complexity because there's the stuff that you need from the raw performance angle and then there's the stuff you need to because uh conway's law
[01:19:24]  right so like yeah so yeah i'm i had a friend uh once say essentially um feature and team scale is way more difficult than uh than data scale and most people are going
[01:19:41]  to deal with the feature and the team scale a lot sooner than they're going to deal with data scale yeah and uh i i found that to be true in my my
[01:19:51]  career 100 yeah that's cool let me show let me show a few more things going on here um so like we said every route is a server component so when you transition between
[01:20:03]  pages so we're on this this snowboard page right here uh the hydrogen snowboard if we go to a collection um at the top of the page like the freestyle collection
[01:20:14]  yeah now we're rendering a new route but like i said each route is a server component and and that means as well and i just want to be really clear about this
[01:20:25]  we can't transition between these pages purely on the client like we can't render this whole page on the client if it's a server component we actually have to call out to
[01:20:39]  the server to say server re-render these client components or i mean these server components so that we can render this new page but i mean i know because i've looked
[01:20:51]  into hydrogen that that felt lightning fast even though it went and did the full thing and there's there's a couple reasons for for for that one is that you guys are
[01:21:01]  prefetching on hover i'm pretty sure on the links and the second thing is that uh server components which are are pretty cool in that they uh um they when the uh
[01:21:13]  when when we switch the page react sends back some data and we'll look at this in a minute again and it actually dips it into this client more like morphs the old
[01:21:23]  page into the new page which is which is actually um pretty cool so like between the prefetching and all that yeah i'm i'm definitely going to be looking yeah
[01:21:33]  there the the we get this really cool json format and then the the hover the link prefetch and then click it and morph and you're like you're right there yeah
[01:21:47]  let's see yeah rsc so there's this endpoint i love looking actually at when you click on this if you go at the payload actually even just to start there it
[01:22:02] 's kind of like a router right but it doesn't have to be tied directly to the url but essentially the the input like what you're send is essentially uh some kind
[01:22:11]  of advanced router you're like i guess this is what your router is doing it's it's passing a basically a url in the search parameters like its own router format and
[01:22:19]  then yeah sorry continue i just yeah so um that's good that's kind of what's happening here exactly what you said you've got uh as we navigate over this we
[01:22:29]  hover over it we're sending this this um this request the server with path name and search that's inside here this is just kind of the default stuff this route underscore underscore r
[01:22:41] sc is this privileged route like for hydrogen app or like a built-in route i should say and uh that's where we're we're going to rerun the server
[01:22:50]  components with some data like this is the data we do for routing but you can actually define your own sort of data that you might want to send up and rerunder re-
[01:23:00] render the server components and we call them server props so if you want to like rerun the server component and pass in new data that data is going to be passed into your
[01:23:10]  server component as a prop and it really just gets serialized up uh through here and so now when i click on this um let's look at the response yeah this is
[01:23:24]  the response this so this is kind of uh a lot of this is the meat of what the actual rfc is for server components is like what is the um the
[01:23:37]  spec that defines essentially all of this data that comes back from the server because the server essentially re-renders the server components and then it sends this weird sort of markup
[01:23:49]  back to the browser and this is how react in the browser is going to reconcile and uh essentially re-render the page with the results of the what the server has said yeah
[01:24:01]  what's really cool about this is the server tree is actually one whole connected tree here from my understanding so when you go to the new route it's like almost like re
[01:24:12] -rendering a whole page with client holes i guess i guess what's interesting about this and maybe you can actually answer one of my questions is because we hadn't seen the
[01:24:23]  client rendering on the server because of uh because of obviously the old demos didn't do this when we do an initial page load now and we server render or sorry we render
[01:24:34]  the server components and server render the client components get my terminology right and then we show that and then basically the server components don't need to do anything at that point the client
[01:24:43]  components hydrate and your page is set up now you navigate to the next page you get a new bunch of server components but the client components don't render on the server
[01:24:57]  presumably at this point so at this i'm gathering at the same time that you make this request you parallel request for the j the code split javascript for the client components
[01:25:09]  that will be on that page and then the server components run and then when it hits the holes in the server components where the client components are it somehow initializes those client
[01:25:24]  components with that javascript that we loaded in parallel and this all gets handled by suspense so we don't have to worry about any of the details there in terms of what
[01:25:34]  the end user sees because if any piece of that isn't ready yet we'll just show the fallback and then once everything is in place it'll just show up yep
[01:25:42]  that's that's largely what's happening so like you can kind of even tell what the the format that's inside here the m yeah the m stand for modules so these are
[01:25:53]  actually like javascript module references right and m1 m2 m3 m5 m6 j this is like um this is a tree of components that have rendered on the
[01:26:07]  server and this is the output from the output from them inside deep inside these if we go through here somewhere search for i don't know m2 that's it nope that
[01:26:20] 's like a anyway the the point is inside here is going to references in the tree inside here is going to reference these modules right and so the point is is essentially like
[01:26:38]  that's the tree here are the modules that are dependent upon and if i clear out um um the filter here and re-render the page um you'll you'll actually see
[01:26:51]  that those those javascript modules are downloaded uh at runtime uh because now they're necessary the the client when i say those are modules those are client modules client components that
[01:27:03]  need to be uh loaded for the page to the new page to render right okay that then that makes sense yeah i i'm i'm very interested in this mechanism personally because i
[01:27:13] 've wanted to kind of reverse engineer it and see what's going on like i've done a lot of mpa work with islands you know like stuff like astro or
[01:27:20]  marco does but this is like a slight there's there's tons of similarities but it's it is slightly different like the the the the funny thing is the rules between the
[01:27:30]  server and client components are identical in the mpa frameworks like the actual like stateful and the whole understanding of state is actually almost the same um but the because the outside never
[01:27:42]  updates it's different where in the react server components the outside of the islands like the server components can actually update without uh doing a full page reload so that's that's
[01:27:51]  like the key difference here um but it's it's cool the the data difference well and it gets tricky too so like there's there's one thing and so next js has
[01:28:03]  this in their new rfc proposal but uh at the moment kind of like what you said we when you do any transition inside the page uh inside the app it's a
[01:28:14]  full rerun of all the server components yeah um but ideally like what what next js has proposed and we we have some similar work that we have yet to announce but ideally
[01:28:28]  you could trigger sub trees to render on the server sub trees of components so you know i mean that that clearly makes sense with nested routing um but even outside of nest
[01:28:41] ed routing if you could just say essentially like i don't want to rerun render everything on um on the server components if i just want to re-render a specific nest
[01:28:52] ed um tree inside the bigger bigger tree of components um that has a lot of value and part of the reason that has value is because usually server components are fetching data or
[01:29:03]  they're doing asynchronous stuff so if you're re-running everything um constantly you have to heavily rely on caching and such to keep it performant because like all of
[01:29:17]  your server components are probably going to be fetching data and doing asynchronous stuff which is going to be slow on transitions so then you have to rely upon um on caching
[01:29:29]  to make that work work successfully right yeah no that yeah that this that all makes sense which is why this is actually a very complicated problem and it's not like the routing one
[01:29:40]  especially i i actually uh looking at that rfc was a lot of fun because this is something i've been actually kind of struggling with this is because if you think of
[01:29:48]  nested routing the thing is yes you swap out nested sections um but there's always the thing outside of the nested section that updates and when you have a client
[01:29:59]  app you're just like whatever i just update the state it's actually a much more interesting thing if you have like you're swapping out server sections and then it's like
[01:30:11]  but how do i change the nav so that it knows that the different thing has changed i guess that's the whole idea with this layout component thing they're actually they're
[01:30:19]  they're even though that you could they can all be server i think this is a way of standardizing a pattern where you're like wrapping even though it's the tree is
[01:30:27]  kind of using child projections to pass it down it's giving you an opportunity at each layer to have a child wrapper to handle the kind of like navigation type stuff while swapping
[01:30:39]  out the the actual majority of the page content so this kind of get this kind of onion feel where you can have your tab bar be a client component that swaps out
[01:30:48]  a server rendered page that so you can actually have yeah it's interesting i i i want to see where that goes because it's it's at a very different granularity than
[01:30:58]  like what we're talking about with quicker marco where we're doing everything at a fine grain level um but we are trying to solve these same problems so it is interesting to
[01:31:08]  actually see that do well and the granularity gets tricky i'll give you one example of where it gets tricky is in context if you define a server context for your server
[01:31:20]  components and now you're going to re-render a portion of the subtree of your server components you probably want to make sure that you're using the same context that it
[01:31:31]  first rendered in otherwise you might get some non-deterministic sort of like uh oddities in the output rendering so that's that's a whole portion of of the
[01:31:41]  uh the rfc with react when it comes to server context is like serializing the context to the client so that subsequently when the client makes uh these uh server component
[01:31:54]  requests at runtime that it can send back up the same context so that you can guarantee that it's rendered the same way when you're doing yeah i mean yeah yeah i didn
[01:32:03] 't even think about that but a perfect example of this is like when you have like a user page and then you have like you're showing like a specific thing like i
[01:32:13]  would use twitter as an example but you have like the user page and then the nested section is their feeds and uh it's an interesting game you got to play like what
[01:32:24]  if navigating to your mentions actually has impact on like i don't know why that would but like what if something there actually impacts something that you're not actually reloading that's
[01:32:33]  above it in the server render tree and you like suddenly don't have that part of the user that you need or something like yeah it's like it's like a common
[01:32:42]  it's even just the pure front-end world where you're not even thinking about server components like it's where you put your state like if you you know like where you
[01:32:50]  put it in the tree is going to affect what re-renders um and such and like it just makes it all the more tricky once you have this boundary of server components
[01:32:59]  and client components uh yeah it makes it tricky i want to catch up for some quick questions that came from the chat and see if we can knock them out really quick uh
[01:33:08]  dumb question about transitions where concurred features gonna help there um this is going back actually quite far um i think all brett meant was that you you are going to the server
[01:33:19]  when you're switching pages suspense and transitions still can help with the end user effect to make it look smooth but there's no way you go from page one to page two without
[01:33:28]  going to the server the server am i correct that's yep that's all i was trying to say is like you a lot of like a traditional react application or single page
[01:33:38]  app you might server-side render it but then once you're in the client like once it's server-side rendered you never necessarily need to go back to the server except
[01:33:46]  to request data by apis yeah like that's the only reason to go back to the server like you're never going to go back to the server to render something because you
[01:33:53] 're rendering entirely in the browser with server components the paradigm is shifted where you might need to go back to the server just to render anything at all if the new page is
[01:34:04]  purely server components like you can't do anything on the client you have to completely go back to the server and so this this is a trade-off like and some people have
[01:34:13]  like you know um i think you can easily knock server components in the sense that like you might say well you might have a quick initial load but now all of your subsequent
[01:34:25]  page transitions are slower because you always have to go back to the server because it's like almost like a multi-page app at that point in time yeah i mean but again
[01:34:34]  it's a trade-off like so like it depends on how they're like like it's easy to over simplify that um like you want it fast initial page load but
[01:34:44]  then you also want fast transitions and so like you can deal with solving those in a variety of ways and server components is one lever that you can pull uh to help but you
[01:34:55]  can also do things really bad with server components and have really crappy transitions where things are really slow so but that's that's true of anything like most of the time you
[01:35:06] 're going to be hitting an api call when you go there anyway like like maybe not always and maybe client caches or thing i think this is actually an interesting thing on
[01:35:15]  the model which i wasn't sure we would actually get there and where this does feel more mpa like like caching is a very important part of the story but it's
[01:35:25]  not quite like the client caching might be used to in react query so to speak like like we're talking almost like close to the browser's cache like page level c
[01:35:34] aching almost like it's it's it's a it's a slightly different thing i think it actually simplifies things ultimately but maybe it might feel like you're giving up some
[01:35:43]  control um it like and maybe that's why there's a lot of research into how to give that back or what that consideration is because like in a typical like react query kind
[01:35:53]  of model you know you you're worried about keys and invalidating those keys and stuff and where you know server components you're kind of like i'm navigating to a page
[01:36:02]  is a cached or not like it's i think it's kind of like a slightly different mentality and i and i think it's a it's a good change in the
[01:36:10]  sense you're now you're not thinking about like a proprietary library's way of doing caching like with keys and such really the way you cache in hydrogen is just standard browser
[01:36:21]  sort of stuff so this is the rsc response for rerunning the server components on a page transition the page that you're transitioning to you can set whatever cache headers you
[01:36:32]  want on those and those are going to apply if you just hard hit the page with the refresh but they're also going to apply um to this rsc response itself right
[01:36:43]  talking about the rsc uh someone mentioned it seems to be a single route that handles all this uh certain components um i guess that's is that a choice or that just a
[01:36:53]  good design or is like how does it um yeah that that's uh that's a choice that's something that we've i don't know whether it's a good design or
[01:37:01]  not you can you can make fun of us and say we're we're idiots i guess but like that it's just a it's just a route that's underneath the
[01:37:08]  hood that expects um you know some some state that comes up with that route that's going to rerunder the the server components with right and it's a it's a get
[01:37:20]  request and it has again all the cache headers and things that you would normally expect on it i got one more question here and i i don't know i think the answer
[01:37:30]  to this question about subtree is like we're still figuring this out i'm this is getting us back to where we were we're talking about server components to render based on
[01:37:37]  what page you're going to and like how to do the subtree nesting thing i think i think that's just a lot of work you have this url essentially to
[01:37:45]  tell the server what to do so as long as you have a way of indicating from the client what you want what you pass in that request presumably there's some way that you
[01:37:53]  can get the right server components to render right yeah so like right now there's no um right now the framework has no way to specifically say i want a a subtree
[01:38:05]  to render but not the rest of the tree whenever you navigate the whole tree is going to re-render including the header so and then that's potentially not ideal honestly is like
[01:38:17]  this header stays the same on transitions from page to page but it will be re-rendered in the server component response right now no that's not ideal um you can
[01:38:27] 't just say i want the content below it to re-render um but even outside of like navigation and such with routing we do give you a mechanism and let me uh
[01:38:41]  let me pull up the api so you can see what it looks like um should have had this up probably there is a hook called your server props this is only uh this
[01:39:03]  is available only inside client components all right what you're trying to do inside a client component is based upon some action the user takes and that's why this should only be
[01:39:14]  in a client component because it's responded to an action or something that's like an event something has happened which is not going to happen inside a server component it's going to
[01:39:23]  be in a client component that you're going to have events like on clicks things like that but the point is is um you might want to set the server props a key
[01:39:32]  and a value just be something else and when you do that essentially you are saying re-render the all this like re-render the the server components for this current route that
[01:39:45]  i'm on right put up some new data a key and a value and then that data will be part of a prop that's passed to the the root route of the
[01:39:54]  page that you're on it's funny that this is is also kind of like a navigate um essentially it's like a well kind of because it does it doesn't persist across
[01:40:05]  navigation so if you refresh the page right this actually isn't represented in the url so it will be lost oh interesting i mean that's giving me interesting flashbacks to
[01:40:15]  the difference between url state and view state and dot net when i was a programmer in the mid-2000s but i mentioned that i there are parallels here um where that
[01:40:26]  was a very server client hybrid model um and we're kind of going back here again where you there's this game of what you serialize what you can execute and access from
[01:40:35]  both sides and and what you know what you can do there okay and you could like really abuse this like and essentially like do it for things things that should be represented in
[01:40:46]  the url um like say you do this with i don't know um you have you have a product page and you can select a variant of the product and this is like
[01:40:56]  the the the key and the value that you're representing to change the variant that might seem like a good way to do it but now you pick a red snowboard instead of
[01:41:05]  a blue snowboard and you try to share that with your your i don't know your significant other and it's not represented in the url so the one that you've
[01:41:13]  selected would be lost yeah and i mean that's kind of the problem we always have with client-side routing client so you always have to be kind of aware of that
[01:41:21]  i think a lot of times to page apps we don't always do as well as reflecting that stuff back to the url mpas you're kind of geared that way to
[01:41:28]  begin with um so it's funny you have that same ability to do the to kind of do the wrong thing but it's still a very powerful mechanism yeah okay is there
[01:41:38]  anything else you want to showcase all this app or should we kind of switch gears here a bit and i i can uh pull out a little what i've been working on sure
[01:41:48]  let's do it like unless anybody has any other questions like we we could like talk all day of on like all sorts of specifics inside the api of like and some of
[01:41:58]  the pros and cons some of what's coming next some of the challenges we have but like um if you're if you're if you're into this if you want to
[01:42:06]  if you want to get involved like we're we're very active on github and discord and we'd love to come talk to us yeah no i yeah because i yeah
[01:42:14]  i i think we're gonna we're gonna we're gonna look at something a little specific you mentioned earlier that you you figured you know maybe you're not gonna use hydrogen um
[01:42:22]  for like a generic app and it's kind of geared for shopify and all that but you know that doesn't really stop me from making a hacker news demo that um
[01:42:31]  maybe isn't that accessible i i'm realizing right now shopify green against white text is probably terrible but um i i made it anyways i mean and and actually this was a
[01:42:44]  lot of fun because as everyone knows i make hacker news demos in lots of different frameworks i just pulled up the ones that i have that are from react and um before we
[01:42:56]  kind of look at that too much i want to i want to i want to actually talk a bit about on the code what the developer experience was because because this this was this
[01:43:04]  was this was fun for me because um yeah i mean right off the bat i mean you guys a lot of people who watch machine seem to do this with remix before and next
[01:43:15]  as i mentioned there's this app server but in a sense i kept the shopify provider i don't even know if i need it i assume i need it for some of
[01:43:21]  the custom hooks and i use the file routes but other than that this is your pretty typical entry point we just set a suspense you know we set our router up and it
[01:43:30]  was you know all i had to do was sneak in my nav um which is fun because i put it outside of the router initially and caused lots of trouble but now that i
[01:43:37]  have it inside everything is working nicely but once you get past this the nav server component i made it server you're going to notice something here link at shopify hydrogen and
[01:43:51]  then built with hydrogen but if i go over to remix it doesn't say server but link from remix like like maybe format document yeah there you go i just copied the the
[01:44:11]  component straight over um right like that that that's that's all it took right it was just like i added server because i knew i wanted the server i probably could have made
[01:44:26]  it a shared component for something like this because literally no one cares there's no state there's no anything this isn't breaking any rules but i i was able to just
[01:44:34]  kind of take the stuff like the layout style components and just copy them over right the which again shouldn't be that surprising in in um in a react framework it's just react
[01:44:44]  i think the only time i ever got tripped up on this was i didn't realize that next needed the anchor tags um which they they surprisingly fixed exactly a week after
[01:44:54]  my stream which is cool um but uh this this part was actually pretty straightforward but if you look like entry server or entry client where is it entry client yeah actually there's nothing
[01:45:07]  there was it root god actually remix has a lot of other stuff in here but my point was that you you essentially have this route which is essentially um this right file routes
[01:45:22]  outlet potato potato um and then you know i was able to just kind of copy over some of my stuff i named it server but like story component you know this this stuff i
[01:45:33]  kept it all the same you know and i probably could have um yeah you know this this part is all just react even though it's server components and the thing is the
[01:45:52]  reason i like the tack news demo and i use a lot is because it's an app that is mostly static it's one that is basically all server components i made this in
[01:45:58]  astro using islands i made it with marco as well and we kind of saw this kind of same pattern because the whole thing is built off um the pages which are basically
[01:46:07]  static and what i loved about this although i did actually hit one thing but the funny thing is it's the exact same thing i hit in remix um which is fun is
[01:46:16]  that having a top level catch-all route is actually tricky i didn't actually figure out how to do it because the problem with the hacker news demo is slash and top are
[01:46:28]  the same like i can do new obviously but like slash and top are essentially the same thing so i both a single parameter and everything i'm basically a star route top level
[01:46:41]  and i didn't figure it out it's not it's not it's probably not a big thing um but essentially uh you know this was just a very easy kind of uh
[01:46:52]  what i love about this example and i'll show you here is some people i was working with next and i worked with remix and whether this is called loader or called
[01:47:02]  get suicide props basically the same thing um you you kind of set this up and then you do this stuff and then you use some kind of what either comes in through crops or
[01:47:13]  comes in through the use loader data and then you get your data and you feed it into your page i kind of honestly when i went in and did this in uh took
[01:47:23]  this page and did it hydrogen it just i just went straight to my component and then i was like okay i am going to get my url stuff off the request because
[01:47:32]  server components just give me the request right here you know which isn't like unlike the loader but then i was just like okay i'm just gonna grab my pram to
[01:47:41]  my router and then fetch api i'm just calling it right here there's no async there's no wait i just called this fetch api and you might be going
[01:47:48]  what is this fetch api well it's the same api that i've been moving around in all our examples from solid to astro to whatever except i just provided
[01:47:59]  a different fetch as it turned out shopify hydrogen gave me this fetch sync and i just i didn't even bother doing it in the component i just i just went straight to
[01:48:09]  my like separated out api and just replaced fetch with fetch think like literally this like i mean you can see if i'm going to go back to remix and pull out
[01:48:18]  this document it's it's it's like the it's the same thing and i just went fetch sync and then suddenly as if magic i was able to just go into my
[01:48:28]  index and just go fetch stories there there is no git server side props no uh loader no nothing i just have this in in in the context of it of course i
[01:48:38]  actually built this in jsx instead of typescript um maybe because i'm a coward also because the example was in jsx so this would actually could have really positive benefits for
[01:48:48]  typescript i just on not having to deal with context in the same way but um i wasn't going to chance it how is typescript support by the way i forgot
[01:48:58]  to we that's uh that's that's a good question um so actually all of the framework itself underneath the hood is built with typescript um initially we the the starter template
[01:49:10]  is built in just pure javascript but there's been a lot of requests to to move to typescript instead um it shouldn't it should be easy to use typescript
[01:49:19]  because we're using vete underneath the hood right you should just be able to rename the files and use typescript just fine um but the current starter template does not use
[01:49:29]  typescript uh we probably are going to change that or at least provide the option to use typescript and then strip out the types or something for those that don't know types
[01:49:37] cript we just we just don't want to like a high barrier of entry like like yeah sometimes people overestimate how easy typescript is for new new people getting started
[01:49:51]  it can be really difficult um yeah definitely and i but as you can see this i mean this was a really easy port because i was able to just like take the content and
[01:50:01]  put it in but after i did the first one i was like this is this is one of the more complicated ones because i'm getting stuff off the url and the search
[01:50:07]  params and i'm still just doing the you know using some native browser stuff search programs get you know doing all that stuff but when i went to other pages like the
[01:50:15]  specific story page it was just like really compact i just got into my story and i was like okay get me the parameter to the route fetch the data story and then uh let
[01:50:24] 's use it in here and because i have a suspense wrapping the router i wasn't even really worried about that you know like basically the way the page layout works you know it
[01:50:34] 's i don't worry about that actually i probably if i was going to make it more the same as my other ones i actually would probably remove remove the suspense boundary around
[01:50:44]  the router and then not around the nav that's interesting i actually is there any reason that shopify provider needs suspense actually i don't need shopify provider i think something you
[01:50:54]  don't yeah you don't need the shopify provider the suspense boundary is there for the shopper by provider because it actually does uh request some details about the uh how
[01:51:03]  about for the router itself i don't think it's necessary because what i want to do is this because i i mean i just have a curiosity here and my idea yes but
[01:51:18]  i'm i'm just like what happens if we do this because then okay i i just said this beats so this is good although i don't know if dev mode will
[01:51:26]  give me like let's see what it does and of course it's opening stuff on the wrong pay window let me just pull that across all right um okay so did that change
[01:51:44]  anything yes yes okay cool this is what i wanted i wanted i wanted to see the streaming i mean we don't need the stream but because i had the suspense boundary around
[01:51:52]  the whole app i actually didn't see the streaming before see this this just doesn't look amazing because we had there's immediate but and honestly i'm not going to make this
[01:52:02]  look amazing either i mean what i didn't actually do streaming in okay well let's let's let's see what i did just to make this more consistent uh okay let
[01:52:12] 's let's go file new window file open recent um hydrogen astro next yeah so people were watching kind of understand what happens there because the suspense boundary was moved outside of
[01:52:28]  the top nav the top nav is immediately streamed um immediately streamed to the browser so it seems instant and then everything else below the nav um is is getting loaded slowly um
[01:52:42]  and the reason it's getting loaded slowly is because we're making a network request to actually get the content uh an api request so i'm just grabbing the suspense from
[01:52:54]  solid hack news demo has suspense on the server and streaming and all the same stuff so this should be able to just jsx just be a straight port boarded and now if
[01:53:03]  everything worked well oh yeah that's that other bug you said you said the bug was yeah see there we go i mean this is this is a silly placeholder it's not
[01:53:14]  great but you can you can you can see the streaming happen basically this gets sent immediately and it renders the placeholder and then at when the rest of this content comes in
[01:53:24]  it finishes it sends it across so yeah there we go streaming very basic usage of it it'd be nice to have a nicer stylized placeholder but as everyone knows all
[01:53:34]  my uh hacker news uh i mean it doesn't really matter which one i choose they they all or actually this i chose the one that doesn't use streaming because this is this
[01:53:44]  isn't uh uh netlify not not yeah let's use the edge functions oh there you go same thing right obviously right now i'm in dev mode so it's
[01:53:56]  it's a little bit slower here on the hydrogen side but yeah cool cool cool um yeah and actually on a side note you said that did the issue we find get deployed or
[01:54:05]  is that still in the deployment uh that has not gotten deployed yet like so it's it was merged this morning and um it uh hasn't shipped a new version yet yeah
[01:54:16]  yeah no that's that's cool yeah that's that's fine yeah so all the the the issues so we yeah we had a a text encoding issue that he discovered yeah i
[01:54:28]  mean i i i love this example everyone knows why i love this example and it was the example that that broke it because what we're doing here everyone knows you go to
[01:54:40]  this page and we have these recursive comments but the thing is we don't want to client render any of this because then we'd have to serialize all the the data
[01:54:51]  i i've gone over this a few times on stream and i mean it's true that i can't do the refresh because then i could actually see it the way i want
[01:55:01]  to see it maybe try a different one i know the top one breaks or actually maybe try it let's see if it works is it depends upon the string that's on
[01:55:09]  the page okay yeah this has a string that's bad yeah i i i i like probably found one that might work not that one yeah so yeah it's okay we'll get
[01:55:20]  there i want to show what what what i'm doing here and show that this is actually just like what i did with the marco example i did with the astro
[01:55:30]  example um and i did with the quick example and they all use islands essentially and the thing is everything here on this demo is server right so this first page there's nothing dynamic
[01:55:43]  here because all we have is the links so we don't actually need um very much here and actually i'm not going to use my dev mode version because you know i
[01:55:52] 'm going to go back here to my my my my production version but my my point is that um that essentially uh i mean we need to let's see if i can find
[01:56:05]  it here yeah this is interesting do you know what this is on a side note it looks like this is the server component information serialized into the page yep so are they
[01:56:20]  client rendered or server rendered that that's that's that's interesting yeah like that so this is it's essentially that flight request is embedded in the page and this is necessary to
[01:56:35]  hydrate uh the application oh interesting and this is this is stream rendered as well so these meta flight things will also be streamed into the page right but that's that
[01:56:47] 's interesting because what i was looking for here was what i call solving the double data problem and i was thinking i was like well if you've already rendered the server components on
[01:56:56]  the server and they don't really really hydrate then like maybe you don't have to send it twice essentially right because there's there's there's there's the there
[01:57:09] 's obviously the the uh um where am i here main is obviously this right our list of items and this is everything serialized as html so we're going to send
[01:57:23]  that 100 because we want to see it in the view and then there's this it it doesn't matter which one you use right like let's use remix um generally speaking
[01:57:34]  um you again we have our main section where we have all our html but then down here somewhere i'm going to find a script and it's going to show me
[01:57:45]  all the json data right so because it needs it to hydrate yeah so it's it's not so the the content that you're seeing there isn't uh is
[01:57:57]  it isn't the data as much as it's representing the markup right i just what i was noticing is some of the result the result fields are in here like i can
[01:58:09]  see nikon for infringing on it's video compression i realize it's more than the data it's markup but i see class name next page so yeah so this
[01:58:16]  is intertwined with the markup here so those will be those are like so essentially what this is is the when you have a server component that passes data to a client component
[01:58:27]  this is that data that's getting serialized from a server component to a client component so if you um yeah so so does that kind of make sense well except this page
[01:58:42]  has zero client components which is what i'm which is what oh well yeah yeah okay yeah so yes so yeah it's the serialization of the props uh from all of those
[01:58:55]  yeah yeah so yeah yeah i mean sorry to put you on the spot i was just i'm just trying to think about this because i was half expecting not to see this on
[01:59:04]  a page with no client because like as you said i would think that you'd need it for any client components like boundaries for client components you need to serialize the data
[01:59:13]  but i wasn't sure that you would need it on like the stuff that's like server rendered okay well there definitely are some client components on the page whether or not you rendered
[01:59:26]  them or not oh really example um the link component is a client component oh right and the other other ones based out just like that are just out of box provided by hydrogen
[01:59:37]  are going to be great and i didn't deploy this since i made my change um to the thing you know let's let's actually do that for a second just because i
[01:59:46]  i want to get our i think that the change we made to the the the top level is actually important enough so let's just quickly do that let's go it's
[01:59:53]  very simple you just go npm run bill and then it'll do its build and then i actually netlify i think for server functions you have to there's a there
[02:00:09] 's i want to go deploy but then there's a little fun piece where i have to go prod but as well i need to add build because otherwise the server function won
[02:00:19] 't uh the netlify edge functions require build to actually build it um which is something that doesn't always get documented but it's something that i noticed because obviously i've
[02:00:29]  been deploying to all the edge providers and playing with this stuff a ton so yeah i i think i think it's kind of hard to get away from any client component i
[02:00:42]  mean like um you need some stuff to execute like in the client at least if you don't want a full page navigation like if you could have everything as a server component then
[02:00:53]  it's essentially just server templating and then every time you click on a link it's not doing this rsc sort of thing right actually like doing a full page multi-
[02:01:02] page navigation across right and the thing is i i would i'm expecting javascript obviously but one of the things that i thought was interesting let me see it oh yeah
[02:01:13]  i'm in the deployment cycle here um yeah okay so that that actually didn't change anything but now we have our lightning speed loading thing that's probably not even necessarily better but
[02:01:27]  it shows what i want to show yeah it's more it's just an interesting one because like for this is something that actually i've been debating about a bunch of my
[02:01:35]  myself and it's one of those things and this is just more like a brainy framework author kind of thought is we actually change the way our anchor tags work in solid to
[02:01:44]  future allow for this and svelte it works this way where we actually don't need the anchors to be client components and we delegate them so that we can put the
[02:01:54]  router on the page but not have to go through the client server component uh prop handoff and that way suddenly everything below the app entry point basically doesn't need to be
[02:02:05]  client components um so then we don't have to worry about like dealing with all the anchors we essentially we just delegate so this is a real anchor and then clicking on it
[02:02:15]  tells something at the top to do something without actually having to embed a bunch of client components um that's a good idea yeah it's it's yeah this is this is
[02:02:24]  just interesting because but yeah it helps me for now know where the state of things are this as i said this is much exploratory for me as anything to try to understand how
[02:02:33]  how these things are um these work so okay this is cool and that's a good idea though i think that's something we could uh we could experiment with on our end
[02:02:42]  like because because we own the link component in the framework um we we like you said could uh essentially just purely render html out of it and not do any client component
[02:02:56]  and instead have uh event delegation attached at the top and and just manually do it ourselves like you definitely need javascript to to make that stuff work but it's just a
[02:03:06]  question of like all the touch points because i mean the truth matters regardless of who you're using this is a react library like let's let's let's like this is
[02:03:16]  the reality here when i load this page here and i am in like we load oh not bad 59.5 kilobytes of javascript for for this page um which
[02:03:27]  means that i believe you are the new react winner i mean if there are winners in this yeah if i go to remix we get 62.7 kilobytes of j
[02:03:39] avascript again same range and i believe next is going to be the biggest if i double check here 84 kilobytes so 50 kilobytes of that is basically react is
[02:03:53]  taking off the shelf right off the beginning right i believe that well actually it's 40 it's 40 but i think server components add about 10 so but essentially hydrogen is actually
[02:04:03]  i mean not not that works three kilobytes is not gonna make a difference but the hydrogen version is the smallest uh javascript payload of any of the react versions that
[02:04:13]  we've that we that i've tested on stream so just kind of side thing but what i'm getting at is you you're already going to be bringing this javascript
[02:04:21]  no matter what you do right so um there there is that consideration but um yeah no uh just as josh mentions in the in the comments as well so josh is
[02:04:32]  also on the hydrogen team uh you've probably met him um but uh there's definitely room to optimize that like you said there's this double data thing there was some of
[02:04:43]  the stuff in there and whether or not it's a mistake in you building the app or it does it shouldn't like it should be easy to do the right thing to optimize
[02:04:55]  uh the data that's actually sent to the browser or the ideally the lack of data that's getting sent to the browser because you it's rendered on the server right yeah the
[02:05:04]  reason i was starting here though was because this was the this is the easy page this is the page where you have it or you don't and it's kind of like
[02:05:12]  the litmus test you know uh you because essentially in theory we don't need this but it is not what i have fun with is this page because this page is a mean
[02:05:25]  page because and i'll show you how i developed it in this page we don't want to send any of this data perceptually but we are doing some stateful stuff around
[02:05:37]  here and and it's recursive so this is you don't get the cheat very easily and at least on the pattern side um i'm sorry this is solid i don
[02:05:48] 't need solid anymore um at least on the pattern side here i can make my favorite pattern for this which is server components wrapped with a client component so if people want to understand
[02:06:02]  what this looks like if you if you go to render a comment we render the comment on the server so this is part of the server tree this this is all getting rendered
[02:06:10]  as server components in the server tree and then we get to our funny little toggle component which is a client component but you can pass children from a server component into the client component
[02:06:23]  and these still be server components so this is another common component so this is recursive so we're actually rendering a whole tree on the server and wrapping each level with a
[02:06:34]  client side toggle to to close and expand it but the actual content under those toggles is always server rendered and in fact the way i made the toggle here in our client component
[02:06:46]  is it's just playing with the display of it so in fact we never unmount it so it never needs to go back to the server on that initial load we render
[02:06:55]  the whole page and then we client toggle it and what this means is you know you get that benefit from like the the hydration story and from the code size story because we don
[02:07:11] 't need to send in theory the data for those comments or the code to render the comments and this client component is the only client this is all the code we need like
[02:07:24]  to do that i mean plus the react overhead but this is all the code we need to make that page interactive and the whole rest of it can be done on the server this
[02:07:32]  is what i love about server components that you can do clever little things like like this where you can just this is the old hoist state like pull it out and use
[02:07:41]  the fact that you can use child's uh conclusion to do this and the funny thing is this trick works in all the islands frameworks this is the secret so to speak and react
[02:07:53]  server components are no different so that's why when i got the chance to play with hydrate and i'm like finally i'm gonna be able to make this demo in in
[02:08:00]  react server components and show it because it's cool um this this this is this is this is this is the one where you don't get to you don't cheat this
[02:08:09]  right like if your framework doesn't support partial hydration or like react server components you need to send everything or you need to like hydrate everything and this little trick here let's
[02:08:21]  like this is it you know you can do this marco you can do this quick you can do this react server components which is why i was sort of hoping that i would
[02:08:29]  see the double data elimination because then i could visually do it but i i didn't get a chance yeah well and and the thing is with with passing children like server components
[02:08:40]  as children to a client component that's supported but like essentially it's not like um it's not like html it's actually like data that's kind of going in
[02:08:51]  as that and and then maybe that's a bit of a limitation on react in the way that server components and hydration is built and that you you have to almost double send
[02:09:00]  the data down if it's also sent as children um which kind of is is is maybe unideal yeah because because my thinking here is do i use props or anything yeah
[02:09:13]  oh it's just props children so children are considered a prop that's getting serialized right that's the reason why you can't also with server components like have uh um like
[02:09:24]  render props like children as as functions because it has to be serializable right so this is already serialized which means the benefit the thing is like i would expect some amount
[02:09:34]  of data because let's face it when you go in here you know those m's you were pointing out to me before like it needs those m's it needs to know where
[02:09:43]  the those nested things so you definitely have to serialize some amount of data to for all the insertion points but my my in our idealized world here which i
[02:09:52]  think is possible maybe this has been on the react side more than the shopify side is i'm i'm picturing a world where besides knowing that it has to serialize
[02:10:02]  where toggle is since we're passing no props to toggle and this is already pre-serialized we don't actually need any of this stuff that that's that's
[02:10:12]  that's that's my the challenge i think react has is like that still that children is a tree of react stuff uh when when and and right at least on the server it
[02:10:27] 's like oh it's still a tree that react understands so the actual tree is still part of that rsc stuff yeah is this like a top-down issue is this
[02:10:40]  like the fact that react like i'm picturing my head like it just goes like gets to that point and goes like oh i know this is a server i don't have
[02:10:46]  to do anything but it's probably more complicated than that yeah it's it's not like it's not actually just dropping html in there that the actual quote unquote
[02:10:57]  html is like that uh um um that uh inside uh that rsc response the there was the m's but there was the j's the j is actually a tree
[02:11:09]  of like of of markup and that is the the actual representation um it's not actually sending just like html down and this is kind of maybe like honestly a
[02:11:21]  downside of react to something like quick where quick has enough like attributes and such in the the markup itself that it can recreate and understand everything about the tree whereas react doesn't
[02:11:35]  react has to have this like proprietary sort of like uh format of the the html markup just updating the link that came in through the chat uh yeah no and
[02:11:50]  that that's interesting because there's trade-offs obviously you can diff it which makes it nice but yeah i mean i think i showed this on stream a few weeks ago uh
[02:11:58]  what was it was uh was it hn or what is it uh yeah i i it's yeah this one uh let's hope it's still up yeah if you if
[02:12:13]  you don't have that limit like that thing like uh yeah this is a the because it just needs to serialize that one comment and do that the code for that one thing
[02:12:25]  uh this is actually the smallest one i've ever seen the marco six version of this actually sends down 1.6 kilobytes of javascript just to just
[02:12:35]  a serial just to the comment here and then the serialization looks like this it has all the entry points but that's it that's what all this this weird encoded stuff
[02:12:47]  99 106 123 it's just pinpointing all those entry points um honestly i wonder if this is more something that like is um because right now we're looking at an
[02:12:57]  experimental version of server components in in in react land uh the 1.0 or like gen ga sort of release of it is going to be probably different than what we see right
[02:13:09]  now yeah but even i imagine there's going to be evolution of this down the road and i'm wondering if down the road they can somehow be smarter with what is delivered um
[02:13:21]  and in hydrating what's already in the browser to not need to have at least from the from the server markups like like not needing to duplicate things as much um
[02:13:33]  optimistic that it's possible but at the same time like the the quick folks talk about like you know quick and probably marco from the ground up bolt where the markup is
[02:13:45]  is easy to like hydrate and and like in and interpret without having all of the data duplicated react really i don't think was i don't know maybe i
[02:13:55] 'm wrong you'd have to talk to sebastian and other like react folks have been around a long time but it doesn't feel like it was built from that ground up with
[02:14:02]  that yeah yeah yeah and yeah it definitely makes a difference actually this version i don't think i have the the serialization oh let me see here if this version of quick has
[02:14:12]  the serialization thing it's not bad yeah yeah yeah yeah here we go right open comment comment like essentially the same thing they they basically only need they don't need to serial
[02:14:20] ize all the data just the entry points so yeah i i think it's a completely different game when you're doing it this is what i love though because as you can
[02:14:28]  see here i've i've built the same demo in like every framework i get to compare and contrast here let's like quick okay here it is marco and it's it
[02:14:36] 's kind of the future of the web though that i'm seeing is like the hydration is becoming a big deal time to interactivity is a big deal uh not just time to
[02:14:45]  first bite like this stuff this stuff matters and i think web frameworks are are adapting to it if react is going to stay relevant it's going to need to like solve some
[02:14:56]  of these problems better down the road and helen helen had an interesting comment too um like like i know you've you're you're really trying to like uh flex the
[02:15:09]  the the difficulty of hydrating and this double duplication problem um but with react service components suspense it becomes really easy to build a user interface where um you don't send
[02:15:23]  you don't render it all at once and when you click the little uh plus plus icons um those components themselves just suspense stream in um the actual content when you actually open it
[02:15:38]  up yeah yeah but i know you're not trying to like that's not that's not what you're trying to show on this you're trying to show a freaking ton of
[02:15:46]  data and the issue when it comes to the well and the thing is the thing is this is one of the strengths i actually think even with this data and even with the
[02:15:56]  javascript side of react my suspicion is because of the hydration cost even this early demo will outscore remix on a page load score that is my suspicion and i i
[02:16:09]  i know i'm being a bit sensationalist here but um that's that i think that already what we're seeing here is the ability to reduce real um load costs even
[02:16:21]  though this stuff like this might be unfortunate i don't think like i don't think this like this data here might not be necessary but i don't think it's needed right
[02:16:31]  now like i think this is it's useful for later it's not like the page loads and suddenly it has to hydrate i think it's like like this is so
[02:16:38]  that for updates in the future it has what it needs that that that that's my theory here at least um so i mean with with regards to remix like i don't know
[02:16:48]  honestly i i wasn't trying to call out any individual one i'm i'm talking about just the rsc technology versus the the standard client side react well 100 i think and
[02:17:02]  that's the whole point is if you're rendering more stuff on the server you should be delivering less javascript to the client um overall uh at least especially for the
[02:17:11]  initial page load somebody from remix or um you know maybe more other non-server component frameworks can argue well in the long term on the application are you going to be sending
[02:17:25]  more bytes over the wire because every page navigation you have to re-render stuff on the server um maybe uh maybe not it depends on how it's built it also depends
[02:17:37]  upon um you know how uh the performance of those those server component requests yeah um now for those of you who follow my stream i have a terrible death test page i'm not
[02:17:53]  running that right now because for two reasons first of all i like to at least test it first before putting someone on the spot when they come onto my stream and and be like
[02:18:01]  and the second reason is because the page that's broken is the page that i do the death test on so i can't actually do it right now with hydrogen because of
[02:18:08]  the bug but if you just if you just take the front page which is just a nothing page which basically has no js and anything i think this is the first time i've
[02:18:17]  ever seen react at 100. um to be fair so you know this is maybe setting a little bar but look look at this time to interact look at this look at this
[02:18:30]  this looks like marco or quick like i test them on harder pages i'm sure from what we saw it's not gonna it's gonna scale a little bit worse until those
[02:18:40]  other optimizations come in but from like the simple page you don't see react with zero hydration cost yeah right like regardless of the extra data being sent like that that's
[02:18:52]  not at a critical point where it's gonna hurt us when the page gets larger yes it will but but when when it's a simple page and it's mostly server and
[02:19:00]  we don't have to hydrate we're already winning um yeah i mean maybe there's some stuff going on here in time well part of this is streaming maybe yes we're
[02:19:10]  streaming so we get the first content and then the second thing that's different here is you know so maybe there's some stuff with the cloud flare deploy but the hydration cost is
[02:19:18]  what and the blocking time is what i want to emphasize here right look at this right this is standard react stuff it's still a good performing page because it's a nothing
[02:19:29]  page but like it like this stuff is already making uh waves or making improvements let me let's just grab next um because it's it's basically going to be it's the
[02:19:42]  same thing i'm uh yeah i mean and honestly there's a there's a lot of things that we we still can do um i think there's a there's definitely
[02:19:55]  there's room for improvement that we definitely have next confuses me and i i'm gonna have to look at the timeline i keep on telling people i do because next gets scores
[02:20:04]  similar again it can't get that hundred uh and if i run remix enough time i'll get a 99 as well like this is this like the remix and next are interchangeable
[02:20:13]  but it has a different loading profile that always confused me because this this makes the hydration look like it's less but this makes no sense because there's no streaming why how can
[02:20:23]  the first contemplative paint and the largest contemplative paint be so different and my guess is that there's something in next that triggers the paint early like i was observing a
[02:20:32]  few weeks back and there's just some kind of something weird going on i don't know how to explain it in the end it doesn't end up making that much of a
[02:20:41]  difference the total time is in the same range as as as remix but hydrogen nice yeah like this this is this is why we're doing this as i said maybe the maybe
[02:20:57]  the the there's still places to improve but this autumn already is showing us like now to be fair this is a page that has no client components which is not a realistic page
[02:21:08]  we already talked about how in e-commerce you need dynamicism so this will take a hit but what i'm just trying to show is that the baseline is this and
[02:21:16]  the powerful thing about this is that now from this baseline you add what you need to be dynamic you're not priced into the whole thing like this here you like you you're
[02:21:30]  always priced into the whole thing it's all the javascript and none of the javascript static route not static crowd here you get that incrementality and a really
[02:21:39]  nice baseline i yeah this is this is this is great you know um i'll throw out kind of uh kind of as we're probably wrapping up soon but i'll throw out
[02:21:48]  another thing that i haven't heard many people talk about this might be more islands-ish architecture sort of pro of something like server components but like when you work at a company
[02:21:58]  like shopify like i've previously kind of i worked at salesforce worked at a number of big companies a lot of times you'll build platforms you where you want to
[02:22:10]  embed third-party things inside a page um like third-party plugins extensions apps etc kind of the cool thing about a server component is a component is still like a composable
[02:22:24]  thing that you can easily render in some markup on a page but what's cool about it is it has this concept of server and client stuff that can be inside of
[02:22:36]  it so you can package up imagine like a shopify sort of app store where you could install a third-party app or component or sort of island sort of thing drop
[02:22:48]  it on the page when i say drop it on the page it could even be drag and dropped with some sort of whizzy wig editor or you just you know put it inside
[02:22:55]  your components and you render it somewhere that's now like this sort of self-contained sort of island that can have server functionality fetching something on the server rendering stuff on
[02:23:06]  the server and rendering stuff from the client right so what you're yeah which is very cool because what you're saying is it can still hit your endpoint because this or even
[02:23:14]  a point yeah it can do all sorts of stuff right because the server portion of it is just an api and that was that was funny that when i first saw server components
[02:23:23]  i'm like okay so react found a new way to writing apis it's like graphql 2.0 or something like that that was what what i was thinking but
[02:23:30]  then i realized that the island thing was more similar to like i was seeing that it was actually a hydration solving thing and i started understanding that better but what you're saying is
[02:23:40]  it's packageable because um like it's just it's just like it's just a component like so sure if you're if it's not a component like you can
[02:23:50]  come up with all sorts of weird apis to maybe do like i don't know make a graphql request or a third party request and then render this other client component
[02:23:58]  that some third party provides this is like wrapping it up potentially all in one yeah only piece that wouldn't be easy to wrap up is if there's an app you you
[02:24:09]  don't get the i mean and this is the same with client components and stuff today you don't get the ssr story necessarily right like well it could still ss
[02:24:17] r so like again like you just have this server component like so if i'm a third party if i'm a person that's building apps for shopify okay um i build
[02:24:27]  a server component and this server component renders also client components that i own and now when you embed this inside your shopify store um it's going to render that server
[02:24:40]  component also it's going to server-side render the client components inside it as well unless i unless i as the developer say i don't want it to be server-side
[02:24:53]  rendered and i put some sort of like right but this is because it's part of i feel like there's there needs to be some specific back-end piece here like
[02:25:03]  like they need to be part of this what shopify is doing or something right because this ability to do this server rendering that we talked about was something that you guys added that
[02:25:12]  wasn't something that was what you're saying is that my ecosystem can share this very well yeah i'm saying so that what we've added for server rendering applies to any
[02:25:22]  component like any client component that you bring inside your hydrogen app is going to be server-side rendered by default automatically yeah unless you specifically write some sort of code to say you
[02:25:35]  don't want it to be server-side rendered so that's where i see a third-party sort of server component that you're putting inside your page if it's also
[02:25:43]  rendering client components already automatically they're going to get server rendered as well right right no i follow you sorry i was i was thinking like the opposite way like that makes sense
[02:25:52]  we're bringing it into this the platform for the hydrogen um and in shopify handles this already and you can bring anything in and it's portable it's really nice story i
[02:26:00]  was like thinking about like the opposite way where it's like if i wrote something with a server component client component and then i like took it somewhere else that wasn't but yeah
[02:26:09]  like that's a different story it's it's the capability of the platform but yeah no i understand what you're getting at and that's a really cool story i think
[02:26:16]  especially um for hydrogen as the framework because it gives you the same kind of modularity and composability and like kind of like like uh sub ecosystem so to speak where you people
[02:26:28]  can build with this all in mind and essentially create a really rich uh capabilities of components and plugins and whatnot on top of this platform and they'll all kind of just slot in
[02:26:39]  really nicely yep yeah like you could have this little hacker news sort of component you embed into my shopify storefront and your server component reaches out to your your hacker news
[02:26:50]  api and does all sorts of stuff on the server and then it uh eventually renders some client components like it i as the consumer of your component would have no idea or
[02:27:00]  i wouldn't even necessarily need to know what apis it's calling underneath the hood on the server yeah yeah no uh this this this this this is really cool and i
[02:27:11]  i can see building towards that future um yeah i i had a lot of fun just playing with this anyways because like getting rid of the separate loader like you kind of have
[02:27:20]  this dream when you build it you can just like fetch your data and just use it and you don't have to worry about async and i should do the code here
[02:27:27]  like uh when i was playing with this for the first time i was just like i was just like oh you know like do i care that this is this is async like
[02:27:35]  i'm just just writing my experience it is interesting um that with something like the rfc for the for next we still have good service side props and stuff and it makes
[02:27:45]  sense because that's how you parallelize stuff um nested routing kind of brings that back so we have this kind of push and pull um that's that actually is it
[02:27:53] 's kind of interesting from from my perspective because um to be fair i wonder if it is like i i said it i i forget who i started i think oh yeah theo i
[02:28:03]  was i was talking to him and i was like i was like you know you you don't get all of it like essentially if you want this you either if you if you
[02:28:12]  have want this co-location you're going to get waterfalls when you nest unless you you know use a compiler is is what i was getting at because like you
[02:28:22]  there's this kind of weird dance that you don't get you don't get nesting parallelized fetching or you don't get co-location or you have waterfall
[02:28:32]  like or you need to use a compiler and me as a framework author i'm always trying to play with this tension i mean you're not 100 but i'm just saying a
[02:28:41]  lot of times the views are nested which will turn those waterfalls right yeah and that that's uh that's an interesting area we've tried to sort of think about
[02:28:49]  so like if if this index page is rendering another component that has a fetch api inside of it what what you're saying is like the first the index one needs to run
[02:29:00]  it's going to wait for that to finish and then eventually the nested sort of one's going to run and then that needs to finish that's the waterfall right we kind
[02:29:09]  of uh solved at least for hydrogen like is yes you can either compile up front like you said or you know remix solves that by saying we'll pull everything to the top
[02:29:19]  and it's a top loader loader exactly we've kind of solved it with um uh an idea of we control this sort of this fetch api or if this
[02:29:31]  this this sort of uh querying this this data um we provide you with a helper api to do it so when a route loads we know eventually once the route finishes loading
[02:29:45]  we know all of the sort of requests that went into rendering that route after it loads so if we maintain inside the framework a cache where the key essentially is the route where
[02:29:58]  the route is given this route i know that these three requests need to happen so we have the route loading at the framework level we can initially kick off immediately those three requests
[02:30:13]  and even though in the code there's a waterfall there as far as they're defined we can immediately start the request going right a caching sort of thing where you have to
[02:30:24]  like yeah it's every time after essentially yeah yeah yeah yeah so like uh the first time you get the waterfall and then it learns yeah that's that's interesting that's
[02:30:36]  a that that is a different a different tactic but i said it is something definitely on our minds when designing this thing as i said because i i was i was playing with this
[02:30:44]  myself or these kind of ideas myself and uh the keel from the solid start uh team who's building our meta framer he he he was like he's pretty proud of
[02:30:51]  himself he's like showed me he's like he pulled the stuff into the component and then used a compiler to hoist it back out like remix loaders so he like
[02:30:59]  you write it like hydrogen but it's actually doing remix style loaders in the background and i was like man this is so cool but i i think we might need to pause
[02:31:07]  on that for a moment and think about this because i think it's like confusing because people might not understand well well there's edge cases the world yeah if this is the world
[02:31:16]  that people live in though maybe this starts feeling natural because you just kind of go oh yeah of course it's a server component you just you just you can just fetch right
[02:31:25]  here and then people just like if we get to a world where people aren't thinking about those kind of details you know maybe maybe this is a future but this is the first
[02:31:33]  time i got to actually do that and it just worked in such a long time well it it honestly part of me is like am i just a jaded software developer that's
[02:31:43]  been around so long that this feels weird to me and if somebody new coming into the field like and they're learning this for the first time would this make so much more sense
[02:31:51]  i'd be like oh yeah of course i just fetch it and it comes here like i don't i don't know part of me is like this this is weird i
[02:31:58]  don't i feel uncomfortable with this because it's like what's what's really going on and i think it's the same thing with server components versus client components like we have
[02:32:07]  debates on our team like this is confusing it's confusing to us sometimes where we're like going back and forth on this paradigm and part of me is like well is it because
[02:32:15]  i've got baggage like if somebody knew you know i like coming out of a boot camp or right out of school if you throw them into this like is it going to
[02:32:25]  be more intuitive honestly i don't know and i i'd love to meet up and talk with some more junior software developers and really get their feedback on this because a lot of
[02:32:35]  the people we work with are very senior have framework experience you know i've been around for a long time but i'm really also curious to to know uh i want to
[02:32:45]  get the feedback from people who really are new who really are just just learning web development and get their response to these paradigms yeah yeah no exactly i it's funny how
[02:32:57]  much that mind shift things and even like semi-generational in the sense that like four years or five years in a javascript framework land is like is like it's
[02:33:07]  like a full generation has happened like it's like the boomers or whatever because like i like like it's a funny thing because i i'm this makes me incredibly old
[02:33:14]  school because like even other related topics i didn't get into it because you know i wanted to skip it for time and things but like the two-way binding conversation that i
[02:33:22]  brought up during the beginning of the stream you know there's a but like they it was kind of it was in fashion and then went out of fashion because people having real pain
[02:33:30]  with it and anyone who lived through 2012 web dev in the front end when react came and like got rid of it everyone was just like oh my god this is this is
[02:33:39]  i never want to go back there again they have they have like war scars and stuff like it was just two-way binding was so terrible like unimaginably so and then
[02:33:49]  it kind of stopped popping up again and then i haven't talked to new developers who are like yeah my first framework self i picked it up because it looked really easy and they
[02:33:57] 're not worried about what's going on under the hood or whatever they just go yeah let variable and then i got this two-way binding thing and they're like what
[02:34:02] 's wrong with two-way binding and i'm like oh if you only knew but they just maybe they never hit that they felt solves it in a slightly different way that maybe
[02:34:10]  doesn't make it as painful and you know times have changed but you try and convince someone who worked with you know highly reactive frameworks for two-way binding like like the like
[02:34:19]  it's just like it's like battle scars so maybe maybe maybe the next gen who picks up this stuff will just kind of be like oh yeah like what are you talking
[02:34:28]  about yeah well honestly that's that's why i like the javascript ecosystem is it's it's always felt a little wild wild west and there's there the change is
[02:34:39]  rapid but then it makes it fun i think it makes it exciting you get to be part of these sort of uh these framework decisions these like um like there's so much changing
[02:34:50]  like four years from now one year from now like who knows what the ecosystem is going to be like and it's going to be fun to to be a part of it
[02:34:59]  and and see how it changes and that's why i like it i know some people hate that but i think it's it's it's fun it is definitely the best part
[02:35:07]  and honestly that's a perfect note for us to end our show today because that's that's what i positive for the future i'm very excited where hydrogen's going very excited
[02:35:15]  where the web is going um thank you brett so much for coming on and talking to us about these things i think i think this is so awesome um is there any
[02:35:23]  one thing else you want to give a shout out to any links or any uh you know um i just give us you know the the main the main page for hydrogen that i
[02:35:31]  shared at the beginning um maybe we'll share that out um also github if you've got questions or you want to like get involved we're excited to have people involved
[02:35:42]  in the community come chat with us on discord etc um yeah like uh thank you ryan as well it's really fun to chat with you i love your positive attitude on all
[02:35:50]  this stuff too you're not uh i don't know it's great to chat with you yeah no it's so much fun i i i learned something i love learning stuff
[02:35:58]  and to be able to like talk to people working on these problems and kind of seeing that and it just influenced my whole mindset and gets me excited for the future which is the
[02:36:06]  thing that i like drives me i now work at nullify so i get to like work on my stuff and do it but when i was doing late nights and i had to
[02:36:13]  remind myself you know why i'm doing this and stuff it was talking to individuals like yourself who are working on great things and and keeping me excited um that kept me going
[02:36:23]  so i i i'm super stoked to have you on and uh thanks everyone for coming to chat asking questions and uh yeah i i will be doing another stream next week i'm
[02:36:33]  not 100 sure what it's on um but uh we'll see you on um next friday all right thanks ryan yeah see ya bye