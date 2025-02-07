---
showLink: "https://www.youtube.com/watch?v=N-QwFFqI8aQ"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Musing on HTML Partials"
description: ""
publishDate: "2024-01-20"
coverImage: "https://i.ytimg.com/vi/N-QwFFqI8aQ/maxresdefault.jpg"
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

[00:00:00]  All right. Hello, everyone, and welcome to my stream today. I'm going to take a moment here to get started, but the gist of it is, last
[00:00:12]  time I had a stream, I was intending originally to do this topic, but I realized I probably should do my yearly review of JavaScript frameworks, and then the topic
[00:00:28]  kind of bled into it, maybe a little bit too hard, and then I was trying to rush to get through all the frameworks, so I didn't really spend as
[00:00:34]  much time as I would have liked on this topic of HTML and HTML partials. Hey, Dave, thanks for the sub. Yeah, 11 months, almost a year.
[00:00:48]  That's awesome. I'm happy to see that. I appreciate your support. Yeah, I usually don't push really hard on the follows and the subs and the likes
[00:01:01]  and all that kind of stuff, but it actually does really help the visibility of the video, especially when you come in and like it. People remind me, like, every
[00:01:11]  video, like, in the comments, remind people to like it, like, likes are free, so um, yeah, you know, do it. It helps me
[00:01:19]  out, helps more people see the content. If you think this is good content, um, like it. All right, how's everyone doing? Hey, yeah, let
[00:01:35] 's get this starting to roll out here. We've got some people coming in from YouTube and uh, Twitch. Yeah, I mean, to be fair, um,
[00:01:50]  I'm not, I, I, I will spend some more time talking about what I was working on with my, um, updated kind of islands routing stuff that I've
[00:02:00]  been playing around with, but I mean, this is all part of it, right? You guys will find that when, that the stream reflects whatever I'm currently working on
[00:02:08] , you know, maybe slightly removed from it, but usually barely. Um, so even though there's like stuff happening in the JS world and I kind of try and
[00:02:15]  cover that and new releases of frameworks and stuff, there's this overlying tone, you know, um, we got the episodic bit and then we got the thing that
[00:02:22]  lasts the whole season. And for me, it's been the last couple of years has really been about wrapping my head around what people see in meta frameworks and looking at these
[00:02:35]  kind of newer patterns here because it's something that I didn't understand. I basically never wanted to touch even like CRA. I was like, why wouldn't I just
[00:02:45]  make my own webpack config? It seems terrible. And then like, everyone's like, you know, we've got to use stuff like Next.js. And I
[00:02:50] 'm like, well, we don't have Next.js in solid. Is there anything here that that's valuable? And my initial take was like, no, you
[00:02:58]  know, in fact, CSR solid is just running circles around their SSR stuff. But you know, you look a little deeper, you see some of the developer experience
[00:03:10]  involvement, and you can also see, uh, actual things that impact the end user and customer when, when SSR is involved. And my time with the Marco team
[00:03:18]  really helped, um, illuminate that for me a lot. Um, and working at eBay, but yeah, I mean, it's, it's, there's like
[00:03:26]  a difference between having say server capability and like the whole meta framework, or like how much this needs to be bundled for you question. But in, in general, I
[00:03:38] 've used the stream as a chance to learn and as a chance to kind of figure out, you know, explore these ideas, you know, with an audience. And
[00:03:49]  so other people learn along with me, but also, so I can get really early feedback. Sometimes I have really dumb ideas, and I throw them out here, and people
[00:03:57]  are just like, Ryan, that doesn't work. You know, like, I was like, trying to serialize functions or something at one point, and hash them up
[00:04:05]  to get a unique ID, you know, it's like not going to work, Ryan. But I think that ultimately, um, the benefit for me, even though
[00:04:16]  it's a big time, um, user is, uh, is there, right? Because, uh, it helps build a community and it helps, um, it helps
[00:04:25]  getting us on a common language, right? I think when you kind of can find the right phrasing and the right way to learn about these things, you know, and
[00:04:33]  this feeds back into articles and vice versa, you start being able to interpret new things under a similar lens or focus and understand the value of them, because you have the
[00:04:45]  categorization, you have the framework, so to speak, the mental framework, not the JavaScript framework, um, to kind of work through these problems. All right, so
[00:04:57]  yeah, that's me just killing some time to give a speech. Nice. 70 people already on YouTube get in this rolling. Um, only 15 on Twitch, right
[00:05:04] ? We, we got to get there again. Last week, we actually had really good numbers. I guess a lot of people interested in JS frameworks. Um, we had
[00:05:10] , we had something like 70 people on Twitch and like 130 on you, on YouTube. So yeah, I don't expect every stream to be like that. They use,
[00:05:22]  they, things have been a little bit slower recently, but I, I, I'm ready to kick it back up again. Uh, okay. How are we doing
[00:05:28]  chat? Yeah. Yeah. I mean, it just takes so much time and yeah, I mean, is it, I wonder if I like, we talked about using open
[00:05:40]  collective funds to pay for some of this, but it's like, or do I put that into R and D? I mean, it's hard to say. I feel
[00:05:46]  like there's value here, but I also feel like the, like money, you know, I, I'm already so thankful for work. People like Jesse do to
[00:05:56]  actually go through and timestamp everything so people can find it, but they like taking it to that next level, splitting up the videos would be a whole other thing. And
[00:06:03]  actually kind of tricky because I'm not, it's funny cause I attempt it sometimes with this week in JavaScript, but I'm not like really segment oriented, you know
[00:06:13] , like if you ever watched a Theo stream for the most part, he's in there chatting with chat, just going through the topics here, there. And then he's
[00:06:20]  like, okay, guys, it's go time. And then he whips out something 20 minutes, maybe the final video will only be eight, but it's,
[00:06:27]  you know, there's a, there's like a topic and it goes, we tend to kind of just roll through it all. Like to actually find beginnings and ends is
[00:06:35]  a heroic effort in itself. You know, again, thank you, Jesse. But like, uh, it's generally, this just keeps on flowing wherever it's going to
[00:06:44]  go. It's very organic. Um, but we keep with the content, you know, we roll off the chat and we keep on digging and trying to find the answer
[00:06:51]  to our questions. And I don't know how much that will lend to shorter streams. It's these good little clips. You know, I can definitely see there being
[00:06:57]  like good, like minute, minute and a half, but it's all raw. You know, I don't re say my sentence when I realized that I rephrased
[00:07:04]  it poorly. It's actually kind of funny. Sometimes we get clips on Twitter. Like I think Rich Harris did a clip the other day where he, where I was calling
[00:07:12]  Svelte 5 a game changer and the main sentence was good. And like the way I said it and the stuff was good. But then when you listen to my
[00:07:20]  explanation, it's, it's like Ryan speak, it's Yoda. You know, I'm like my, my sentences are formed backwards and it's like, man,
[00:07:28]  it's just like not quite what it's supposed to be. The, the intent and the, the passion are there, but it's like, it's not smooth.
[00:07:37]  It doesn't make a good clip. I probably make the worst clips anyways. Sorry. Uh, hello, AJ or Anthony. Sorry. ADC also throws me off
[00:07:48] . It's like, it's fine. Uh, yeah. Cobalt is sweet. I, I, I, I'm really happy to see like that ecosystem pieces,
[00:07:59]  you know, like can layer on. I never understood before how much CSS and component libraries are this like layering thing, you know, like where people, okay, you got
[00:08:06]  a headless solution and then you like have, you know, snippet libraries that aren't actually component libraries, but just put things together. And it all kind of just
[00:08:14]  comes together. Like somebody was trying to explain what, uh, was it shad CDN was or whatever to me a while ago. And I'm just like, I
[00:08:20] , what? So like bootstrap UI, like, I don't even, I couldn't even wrap my head around these layers, but I'm glad to see that
[00:08:29]  people are building that and finding the best patterns. I have to admit when, back when I was doing a lot of like product work, I would just make the mechanics of
[00:08:37]  like, okay, we need infinite scroll. Okay. Let's figure out how to do this. We need drag and drop with a justified grid. You know, like
[00:08:44]  I'd figure out the math and I'd figure out how to optimally do the updates. Someone else would style it or work the CSS into it. Um, and we
[00:08:52]  had our own design system. So I never had the build, like we, we kind of built our own components. Um, but it was very low level, like
[00:09:01]  button designs and stuff like this wasn't something that I was really concerned with. Marco mentioned new record. Oh, well, I'm talking in past tense, like what I
[00:09:18]  was going for. Yeah. Yeah. Yeah. Yeah. Server functions work because the compiler, a compiler can produce a, uh, uh, stable hash because it can
[00:09:34]  use like the code location. It's like aware of that, but bundlers will morph the code. So the difference in client and server won't be stable. Anyways,
[00:09:47]  I know that's referring to something like 10 years, 10 minutes ago. Anyways, my mind is a JavaScript framework. See, I'm catching up way too late here
[00:09:55] . All right. Yeah. And I sound like it's late here, but it's actually only lunchtime. All right. Yoda, Ryan. Yeah. All right
[00:10:12] . Oh, oh no. Um, yeah, I guess that's the difference. Did you ever use Bower? I'm just messing with you guys. Um,
[00:10:33]  signals, am I dreaming or something? Signals and WASM already exist, um, in a, in a few different, uh, a few different forms. Um,
[00:10:39]  we'll talk a little bit more, I guess, this week in JavaScript when we get there, which is gonna be more than this week in JavaScript because I didn't really
[00:10:46]  do this week last week. So we need to do some catch up. Is there new Imba stuff? Like kind of making me want to check. Cause like
[00:11:00]  I, I'm, Imba 2 was the last thing I remember. Imba 2 release. Imba is really interesting from like a language perspective. Um
[00:11:13] , people don't know Imba. They, they use a different kind of diffing that is, pushes things right to the end. And they're big claim
[00:11:26]  to fame that they were much faster than virtual DOM libraries. As it turned out on the JS framework benchmark, they weren't, but they, they, they, they showed
[00:11:35]  this thing where they're like way faster. And then it was gonna point out that the benchmark was kind of contrived. Um, not enough to stop Rich Harris from
[00:11:44]  using that benchmark to show Svelte performance, even though, anyway, not in, but the, the cool thing about Imba is it's like a copy script
[00:11:56]  it's, it's kind of got Marco in that it has some really interesting syntax, um, so to speak. Right. It's like a white space matters, um
[00:12:05] , type like indent based language with it. It's pretty short in a Marco would probably have fun going back and forth to see who can like express ideas in the least amount
[00:12:15]  of text. Um, but one thing that I never got from Imba necessarily was, um, like it was more ambitious. I think like it wanted the,
[00:12:25]  because it's a language, it likes like, we're going to control that language all over here. Here's like an express server in Imba. Like their idea
[00:12:31]  was not just to do your UI in it. Like you can literally just replace all your JS with it. So just live Imba, you know, and in a
[00:12:38]  sense where we've been heading recently, you know, with server components and stuff where you're just like, Oh yeah, here's a JSX thing. And the random
[00:12:44]  response, it kind of got that feel except we're talking Inba came out in 2015 originally. So, um, anyways, yes, I'm not doing an In
[00:12:52] ba episode, but that's, this is probably the most I've talked about Inba in like five years. Yeah. I mean, someone should do it. I have
[00:13:06]  no clue about the solid ecosystem. I hear about good libraries and I'm impressed, but I'm not the person to probably do it. I spent a lot of time
[00:13:13]  working on mechanics. There's people like Dave, if Dave streamed, then he could kind of bring this stuff together. We have community packages. We have a whole bunch
[00:13:21]  of stuff on that. It's just the truth of the matter is I only hear about the ecosystem libraries when they don't work, right? Like when there's a bug
[00:13:28]  and then it's like, Oh, that's a solid bug, you know? And I worked through it backwards from there. Oh man. Now we, those are
[00:13:36]  some old words. Everyone, I don't even know the context of this, but I remember that honestly, uh, the memories anyways. Wait, was this a trick
[00:14:01]  thing? Does Remix even do SSG? You guys are messing with me, aren't you? Okay. Scrimba, Scrimba. Yeah. Yeah.
[00:14:13]  Scrimba. That's like the learning platform that's built all completely on Emba. Yeah. Sorry. I didn't cover Emba in the, uh,
[00:14:22]  in my, in my article, best of JS. Um, cause I think it's a UI framework by categorization. We did hype ordering, right? Of the last
[00:14:34]  12 months. Right. Which kind of, yeah. Okay. Emba gets less than one star a day. So it didn't hit my thing. Another interesting framework
[00:14:45] . You know, if we're going to talk about frameworks for a minute, so that I can like, honestly, today I'm here just to talk the crap, you
[00:14:51]  know, I will talk the topic, but I'm, I've got, you know, I've got some time. Neo MJS. I, I saw a bunch
[00:14:58]  of tweets on Twitter or going back and forth. I think it was Matthew Phillips and Benton and like a few other people, you know, talking about web workers and all
[00:15:05]  this like stuff. And I was like, people like, it's not like people haven't tried that. If you have an idea for a JavaScript framework, someone's already
[00:15:11]  made it like a hundred percent. They, there might be missing a key piece and then you can like take it all away if you really want to be a framework author
[00:15:18] . But generally speaking, someone has already tried this idea. And sometimes multiple people timed it. The worker thing was actually very heavily worked on when React was looking at its concurrent
[00:15:31]  model back in 2016 time period. Dominic from Svelte, Inferno was kind of relating some of those performance things to me. Generally, you don't use
[00:15:40]  web workers if you care about performance. So like, it's interesting because different architectural models offline first, like there's, there's, there's things that can be
[00:15:48]  benefit from them, but because it doesn't get the raw wins, it's never going to win a benchmark. People don't notice it. It's, it's kind
[00:15:56]  of tricky. Like there's people, when they talk about performance, like the things they can observe, as I said, that works very well for solid. Cause like nothing
[00:16:04]  is faster than updating a text node. You know what I mean? Like, but it's like, doesn't tell the full story. Um, you can also go
[00:16:11]  backwards on people as you know, concurrent mode, not really a performance improvement. So people don't really like, not in the basic sense, people can't really observe it
[00:16:18] . If you put React and make the root concurrent, well, guess what? You just slow down your app. So yeah, I mean, NEO is really interesting in
[00:16:27]  that they like to show how they can distribute work and they do really cool demos, like, like crazy 3d demos. Um, I don't, no one else
[00:16:37]  has bothered to make these demos. Part of me wonders if it would be possible to remake these demos fine grained and actually have pretty good performance in them because their idea is
[00:16:47]  still kind of beat Amish, right? The idea is if you can diff off thread and then only send the relevant updates to the main thread, you know, you
[00:16:55]  can basically offload the work, but there, there's a serialization cost. Anyway, sorry. We weren't here to talk about different JavaScript frameworks. That was last
[00:17:02]  week, but I just keep on getting reminded of like frameworks I missed on this. Another one that someone mentioned that I missed was Rackus, uh, React, uh
[00:17:11] , meta framework. And, um, Rackus, actually, I just dropped a message with 50 today. So like, uh, like they did a bunch of
[00:17:23]  stuff that I paid attention to back in 2020, because it's funny us and them were actually developing a lot of similar patterns, like basically stuff like server functions before react or
[00:17:33]  had them or others had them. Um, Rackus had their own kind of version of server functions and, um, you know, kind of on that same wavelength
[00:17:42] . Um, but I hadn't actually seen very much, uh, uh, from Rackus in almost a year, except until today when they look like they're bringing
[00:17:49]  a, async local storage, um, which will make their APIs a lot slimmer and nicer. Anyway. Is there a remix headline? Is there, is there news
[00:18:03] ? I'll bookmark it and we can talk about it later. Send me a link somewhere like drop it on in Twitch chat would probably be the best. You could
[00:18:11]  try to YouTube. I just can't copy out of YouTube. Um, and, but I, um, Remix headline, no lowers, but now with different model,
[00:18:27]  eventually with RC, we'll get them back. Yeah. I don't, I need to know more about that. Angular. Yeah. I mean, Angular is kind
[00:18:36]  of interesting that way in that from a support standpoint of, of a lot of ideas, they're sometimes like really ahead of the curve, but then it's like the stuff
[00:18:43]  that no one cares about, like traditionally speaking. So it's like, it's, they, they moved into that space before people were ready for it, which is good
[00:18:51]  because it means that they can support people who have, you know, these different use cases. It's tricky though, because it's like, everyone seems to be rather than
[00:19:00]  like trying to solve some problems and like looking at the different ways they can solve it. People tend to be like, what's my silver bullet. They want to find
[00:19:06]  the thing that solves everything. They're there. Everyone's looking for that hammer. Right. Um, from like a architectural standpoint, which is interesting, right? Cause you
[00:19:18]  like there's that doesn't necessarily mean the thing that supports the most things. It means the thing that takes as many possible ideas and just wraps them into one. Anyway
[00:19:28] , I miss good old spas. It was kind of easier back then. The truth of the matter is like at a certain point you realize like in horror that you're
[00:19:39]  responsible for like stuff that just isn't good. Like single page apps are such a leap forward, but it's also like, we kind of did some bad stuff.
[00:19:51]  Funnily enough. Yeah. But I mean, it works both ways, right? If you can't make a benchmark for it. Yeah. I mean, it
[00:20:10] 's, it's, it's kind of interesting if it might, it will be easy. It'd be interesting to see if like it's visibly noticeable in, in
[00:20:20]  some kind of scenario, right? That isn't again, contrived because you know, whenever someone rewrites something, they tend to rewrite it better. It
[00:20:30] 's always tricky. If you can't on one hand, I say, don't trust the benchmarks, but if you can't make a benchmark that shows its benefit, then
[00:20:38]  it's also difficult to trust that it's actually improving performance. You need to find a metric somewhere. Meteor JS. Yeah. I mean, should I get in on
[00:20:53]  this? I missed knockout JS. Some ways it was just so easy. You just kind of go like, Oh, connect the dots. I remember it was like
[00:21:00]  every app I made felt like making my own Sudoku or Sudoku or whatever game. I essentially, I just like went in and I was just like, here's the
[00:21:10]  rules, click, click, click, put it all together. Everything updates automatically. The end. That wasn't the end, unfortunately. If we have time, we might
[00:21:20]  even talk about that. I wrote an article today that I released all about drive state. Knockout JS is a good reason why we had to solve solutions like drive state
[00:21:30] . Spa mode doesn't have loaders. Don't they like use client loaders? It's Oh, maybe you know what? We will look at spa mode later
[00:21:45] . If that's the case, you know, let me just grab this link before I lose it. because I'm interested in what they do here. Obviously, solid
[00:22:00]  and spell kit both have spa modes, as far as I'm aware. So we'll, we'll, we'll, we'll get back to here. I'm just
[00:22:06]  going to puck that away for later. Yeah. I saw Dan tweet. Yeah, yeah, exactly. This makes a lot of sense. And this exact same reason why
[00:22:38]  solid start is designed to handle spa mode as well. There's just a lot of users out there. And the start case was really important because we're also vetting it
[00:22:46]  for tan stack, right? Like assuming that we can get like a tan stack framework built on top of the same basis, solid start having a good story for this is
[00:22:55]  important because then yeah, there's a difference between taking your CRA type app or beat client app and just moving it into one of these meta frameworks and just having it work initially
[00:23:07]  and then kind of, you know, working your way towards it, you know, getting SSR or doing what you want to do with it versus like trying to migrate it
[00:23:16]  in SSR, but then reflecting everything back to client. Like, to be fair, when you hit the switch, it's always like that, but they're like
[00:23:23]  getting them all like off CRA is the first step. So reduce that friction. Next doesn't have that mode. So this is a very interesting avenue for them, but we
[00:23:34]  talked about that before. Yeah. This article, we will talk about it probably later. Yeah. Yeah. I thought it would have client loader. I don't
[00:23:45]  know. This is where things start scratching your head because the model starts getting really hard. And I think this is, this is almost the right topic or place to actually start
[00:23:54]  a conversation today. Not because I want to talk about remix, um, uh, in terms of like SPA mode, but because we have loader and client load
[00:24:04] er, there's this friction between data loading paradigms often. Like, like, why do we load stuff in the client? Why do we load stuff in the
[00:24:17] , on the server? Why does, why can't we load stuff in a single place? Like we know that on initial SSR generally loading everything on the server is a
[00:24:27]  benefit. It has to be, you're closer to the machine. Sorry. Uh, I've got the stupid, uh, let me get my windows back. Um
[00:24:41] , I haven't updated this Mac for a little while. So it's like bugging me. But what I was getting at is like, God, I lost my train
[00:24:51]  of thought. I hate that. Um, when, geez, where was I going with that? I was trying to say something along the lines though, that when you
[00:25:05]  have the client and this, and the, like these separate server pieces, the difference doesn't seem to make a huge sense when you're going to SSR it in the
[00:25:13]  first place. Jerry, I was going to streaming. Right. And I was gonna say like streaming lets you start the request and finish it later. Obviously there's downsides
[00:25:19]  of streaming as well. But if you know what things are streamed and maybe don't stream everything, then like, you're okay. You know, like that's
[00:25:28]  the, like that all works fine. So, uh, you know, I'm kind of, this is kind of the source of a lot of my tension here because when
[00:25:38]  we break things apart, we're almost forced to have two different fetching models. And if we try and get the same model together, somebody's paying the price.
[00:25:47]  And I want to talk about that. Um, really someone, sorry, I'm just seeing the comments. Did someone say react as a library or something? Oh yeah.
[00:25:57]  We're talking about that. Yeah. The incremental stuff. I don't know if this should be the goal actually to be fair. You could, you could doing that
[00:26:07]  incrementally is actually not that hard because you put the whole, I mean, first you get the spa over, then you put the whole spa in an Island and then you
[00:26:18]  start breaking it out. It's a little bit because then you have two routers kind of, I don't know. Anyway, sorry. I'm, it's way
[00:26:25]  too easy to get shot all over here. Yeah. And yeah, all the, that's the other thing too. Right. Um, there are applications that just don
[00:26:37] 't need a server kind of model, like app models, you know, where they're don't get me wrong. Server components don't need a server. We can talk
[00:26:44]  about that today as well. Um, but sometimes like, uh, SSR mode is kind of nice there. Right. Uh, things like Tori, uh,
[00:27:01]  yeah, you're right. I saw this tweet. I should, let me just grab it too. We can talk about this later. I mean, they're trying to
[00:27:10]  do that with react. That's why they're creating these APIs. The problem is react next itself. Isn't the place that wants to disappear. Next, next is
[00:27:18]  a product. Um, anyways, let's keep on going. Oh, I didn't tell everyone I'm streaming yet. Did I, geez, I'm so slow here
[00:27:28] . Let's quote tweet it. Maybe more people will join. Live now. All right. And then Twitch TV slash Ryan solid. This is why no one's on
[00:27:40]  Twitch. Oh, are we going to talk about these equations? Well, we should talk about these equations too, at some point too. Cause I think, I think this
[00:27:54]  is the, this is one of those funny things. I actually was playing on it in my article cover my, for my latest article because, uh, move this over
[00:28:04]  here. Um, because let's see here, let's go. Not so HTMX. Where's my profile? Um, you know, is it because people have
[00:28:16]  been showing a lot of this stuff and I sure, um, this, this covers actually a little bit of play on the fact that like I'm talking about derived state
[00:28:30] , but in react, um, deriving, like most things in react, like most of the stuff you touch in react is derived, um, state in a sense anyway
[00:28:40] . So anyway, why, why do I want to talk about that in the context of this conversation? Why do I want to talk about that? Because I think,
[00:28:59]  let me see if you, can we find it overreacted? I, I love Dan Abramoff articles. Um, he showed this little equation here,
[00:29:08]  UI equals a function, a data state. And this is, this is nice, right? Let's, let's just draw it here so we can like soak in,
[00:29:19]  soak in this, this beautiful equation. Because like my understanding of this equation is that font kind of bleeds together. I'm going to function so you can see that
[00:29:33]  is that like, what he's saying is like, you take your data, you feed it into something, and then the return thing of that you feed state into, and
[00:29:43]  that's ultimately your UI. And this is a good story when you're talking about getting to UI, like you like this, the going the one direction, right? Which
[00:29:55]  is a big thing about a lot of modern tools, frameworks, whatever. It's, it's about this idea of like, can you take data and can then,
[00:30:07]  or state or whatever, and then get a UI, we make this separation so that we have a, like a simpler mental model to work with that it's declarative in
[00:30:21]  the sense that we know that UI from a rendering perspective is a transformation, right? You have some sort of data data that you need to display, some kind of state
[00:30:33]  that gets updated by the end user, but ultimately, instead of having stuff come in from all sides, right? Like essentially just be like, instead of, you know,
[00:30:42]  the drawing looking something like UI, and then being like, a whole bunch of arrows being like, all being like spearing it, you know, instead of this being
[00:31:02]  your model, you know, because I think there's like an old Jing Chen talk that, that does this thing, but like, instead of having basically a bunch of
[00:31:15]  arrows in, and then like a bunch of arrows out to, you know, because obviously they're the, you know, this is from data sources and let's switch our
[00:31:29]  arrows now to a red arrows for going out. And then we're like, someone presses a button, someone, you know, this is kind of chaotic, timer goes
[00:31:46]  off, you know, instead of a model like this, you know, and I'm just talking, this is what data, this is just talking about state at this point
[00:31:53] , but I mean, you can kind of apply it. Instead of having a model like this, where you're just like, what's going on here. You know
[00:32:01] , the kind of react mentality that you should be thinking about, starting in from UI, is that if we align these arrows I can put them all together. Making them
[00:32:30]  kind of like one big bad arrow, like this. Let go. You let go. Then like, it's a lot easier to reason about like, what's going on
[00:32:49]  if we can go, you know, you get my point, right? So you can, you know, handle all this stuff coming in, something out here is making
[00:33:07]  sure that this flows into this, and now this chaos turns into something organized. That's kind of like the whole premise between this. So like, having declarative unified stuff
[00:33:21]  is good. It's why all UI frameworks are designed this way. Yeah, but the funny thing is I'll, I will, I will, I will accept that
[00:33:38]  as a starting point of our conversation, but I won't accept that as a, as the ending point of the, of our conversation. The state can live in more
[00:33:54]  than one place, right. We didn't have, we didn't, we don't have this problem in single page apps. And this is why people talk about complexity considerations
[00:34:06]  in that the state, the client is stateful, right? So what that, what I mean by that is like we, as you change stuff in the UI in
[00:34:17]  a single page app, you know, you have all the state, you're holding all the pieces, right? If you're not, you go defer, grab some
[00:34:27]  data from the server, process it into state, but then you're holding all the pieces, you modify that state. So someone does an event, someone does an event
[00:34:36] , you have it all, you update that state, it shows someone click something, you figure out what you need to do, update that state. And it goes,
[00:34:44]  and it's this like tight loop, but there's, there's also, you know, stateful backends, right? So you could use the tricky part is this
[00:34:57]  is like a kind of slippery slope, right? Because like, it's not slippery slope. That's not the right term, but it's like, it's, it
[00:35:04] 's a range because like a classic example of data would be data from your database. It's fairly persistent, doesn't update as often, you know, but like a
[00:35:15]  difference in state that we often talk about, especially on like UI state is like, let's say you use that data. So you go fetch 100 rows with 12 items of
[00:35:28]  data in each. And then in the client, you're like, I want to swap the order of a couple of those columns, right? Do I need to go
[00:35:39]  back to the server to swap the order of a couple of those columns, right? It's similar things in forms like drop down states. Do you need to go back to
[00:35:48]  the server and have the server, like if you already have the data, do you need to go back to the server to kind of update it, right? There is
[00:35:55]  a whole level of, you know, ephemeral date, it can, it can last actually a long time, it doesn't have to be like instantly gone. But
[00:36:05]  there's a whole level of like maybe state that has varying degrees of persistence. You know, do you lose that information when you refresh the page, you might, maybe
[00:36:17]  you reflected into it back into the URL, and you don't. But what we're getting at is like, where the state lives, is probably the oldest, like
[00:36:32]  struggle since the beginning of web dev, right, any kind of server client relationship has this right, because there's benefits to putting the state as close to your end user as
[00:36:44]  possible. I mean, you can think about it right off the off the bat. The biggest benefit of putting the state closest to your end user is that they can have
[00:36:55]  the most immediate feedback, right, we want things to be interactive, they don't have to wait. You know, you don't have to be like, okay, you
[00:37:04]  drag this column, go server. Okay, give me the new thing. The challenge is, I drew this nice aligned little picture here. Right. And this is this
[00:37:16]  works, as I said, pretty well, when we go, you know, client server. Right? Like, if you if you're thinking about a single page app.
[00:37:39]  This might trigger some like, additional arrows, let's make them blue, you know, for fun, like this over here might trigger some like cross the board, kind
[00:37:49]  of stuff. And we can make one that in reverse as well, you know, you know, we can do a little bit of this kind of feeding it back in.
[00:37:56]  But for the most part, this is a pretty tight cycle that occasionally has to do this. Don't get me wrong, this is this is a source of a ton
[00:38:05]  of pain. Like this fact, like if everything was synchronous, and everything just worked immediately, developing web applications would be dirt simple. This delay, this latency going
[00:38:17]  across this boundary is like, why we've had so many different approaches to state management. Since the beginning of react, for example, like Redux, Redux was like
[00:38:27] , we're all synchronous, we're perfect, you know, we just do this loop. And it's like, Oh, crap, there's async stuff. What
[00:38:32]  the hell. Thunks were pretty good. But some people are like, well, from a purity standpoint, I think we should be using generators, or we should be
[00:38:42]  using observables, because these pieces are something that synchronize, they don't happen at a single point in time, you know, a lot of discussions there. But
[00:38:51]  essentially, the complexity all came in once we added this like async piece. But things get a little bit more interesting when this line moves. Like, forget about these blue
[00:39:17]  things for a second. Let's move them again. What happens if I move this line like, like right here, like? Mac in the middle. Like. What
[00:39:29]  if what if the the boundaries here are asynchronous? But that makes the cycle a lot less tight. I mean, don't get me wrong, this is probably way better than
[00:39:45]  trying to do. Actually, I should just copy it. Like trying to do this. Like. Like. Like, I don't want to even think about one just
[00:40:04]  selected. Okay. I don't even want to think about like, what what what this means. But. But, but like, there, my, my, my
[00:40:16]  whole point is that where the state is in proximity to both the user and the output, the UI actually makes a fundamental difference in, in like, the perceived complexity of and
[00:40:35]  optimization optimize. Optimize. Optimize. Optimize. Optimizable. Like, these solutions can be. See. Because the one thing that we don't talk about
[00:40:45]  much. Um, with the react model. I mean, when I say, of course, we've been talking about a lot recently because of signals, but one thing
[00:40:54]  they don't talk much about this aligning of stuff. Is that like. Is that like. How. If, if, if, if, if you, if
[00:41:01]  this is a single code path that you have to go through, like this whole thing. Which runs through this code path, so to speak. You're doing a lot
[00:41:12]  more work than if you just were following one of these. You know what I mean? Like. Now you're like. Going through all of this, going through all of
[00:41:21]  this every time and like deciding at each point, like. Hey. What's changed? Diff. What's changed? Diff. Because you have. Because you
[00:41:31]  group stuff together. You actually have no idea what, what, what's changed. And as I said, my article about derivation might talk about this a bit more,
[00:41:37]  but. It's. But it doesn't have to be that way. Right. As we've seen with stuff like a fine grain reactivity and signals. Like when
[00:41:45]  you're, when you have all the state in your hand, all the data, all the ability to render something. Then. And you have that thing, which you're
[00:42:00]  rendering like the current version of it. It is very easy to mutate or change parts of what they're in a fine grained way. You don't need to
[00:42:11]  diff because you have all the pieces. And this is true both. When the image looks like, like this, like when it's on the client. So I'm going
[00:42:24]  to get these blue ones out of the way. They aren't in or. When it's, it's almost like reversed. I'm trying to think of how to draw
[00:42:34]  a server one. Because the server one is like, it's actually upside down. Upside down. I don't know how to, I don't know how to
[00:42:39]  make stuff upside down in Excalibur. Is there a way to like. Copy it. And then like rotate it. Yeah. Well. Rotate that one back
[00:42:50]  up. Because like. There are frameworks that were kind of like this. Sorry. Should. Should stop like. I need the copy rather than. Told you.
[00:43:10]  My Excalibur skills are really what are going to get us in trouble most of the time here. Like. There are frameworks that were kind of like this.
[00:43:27]  And you might be like. How are the. The end user. Because the UI kind of goes over the over the wire. Right. But the end user can like.
[00:43:37]  Do some action. And that action gets sent immediately to the server. And then the server kind of. Puts it in here. And in this world. Where the
[00:43:46]  server owns the state. Which is. The state is this like. Box that I haven't. Drawn in here. Right. It's. No. What color should
[00:43:55]  state be. Should be green on the inside. Should be. Full. I don't know. But. Should we call it state. Should we just go. State.
[00:44:09]  Both these models might be kind of reversed. From each other. But. When you live in this world. This cycle can be tight. You know. What the state
[00:44:29]  of things are. You know. Like oh. This swap. You hold it. These updates can be fine grained. At least on this side. They can be
[00:44:40]  fine grained. At least on this side. They can be fine grained. Because. Like. You. Know. What's changed. And. This is actually true
[00:44:49] . Of. Data too. Right. I mean. No one really does this. Per se. But if you. Had. A database. A database. You know
[00:45:00] . That fed into this whole. Puzzle. Down here. Let's say. Let's. Do. Should we add a database. Or data. We'll make
[00:45:13]  it. Blue. Blue. To make that white. Make. This blue. Whatever. Let's. Call that. This one data. In theory. I. Again
[00:45:28] . People don't usually do this. But in theory. You could. Know. What the data. Was like. When you grabbed. Your. What. The state
[00:45:39] . Like. When you grabbed. What you drew. And then. Only. Every time. The database updates. Incrementally. Invalidate. This stuff.
[00:45:50]  Essentially be like. No. You don't need to fetch. All the users again. I know this one user. Change that you're displaying. Or this one poster change
[00:45:57] . The database could. Know that information. Right. And then. This could update. Just the one user. Throw it across the wire. And so on. Basically
[00:46:12] . When you have. The pieces. All on one side. You can do the most optimal things with it. Because as I said. It's not like. We
[00:46:28]  talk about state. You know. Because of like. UI state and stuff. That's like. Very ephemeral. Or like. Very. You know. Like.
[00:46:38]  Close to the user interaction. But data does. Change. Right. Like data. Data can be. Stateful. Just like. State is stateful. Day.
[00:46:48]  Day. Day. When like. Data was. Always over here. So like. These arrows. Were a big deal. The ones that I had. The one that I
[00:46:58]  had. Drawn before. Like. This was. This was a big deal. You know. Going between these. These. But. In this world. In this
[00:47:08]  world. It's just a matter of persistence. They could be basically the same thing. Okay. Where am I going with this? I'm already losing people here.
[00:47:19]  I can tell. Yeah. Everyone's like thinking that I'm proposing a solution or signals. No, no, no. I'm actually trying to do all of this.
[00:47:32]  To get. To a point. Where. We can actually understand what the problem is. With HTML partials. all right um just checking that people are still alive here
[00:47:55]  actually my visitor was questioning someone's opinion on why using gs and database stored procedures with babit rc was good uh no i'm not gonna touch that the fact
[00:48:10]  that state comes from the server is just a side effect of client apps it's not part of the model well i mean i'm just saying like it depends on like live view
[00:48:22]  stateful servers like this could be part of the model right but this is actually the most fundamental question as i was getting at on the last stream right this is the most fundamental
[00:48:36]  question about your architecture right because as i said using live view uh js was pretty smooth like this model is really simple it reminded me of a single page app once we get
[00:48:47]  to ssr stuff gets a lot um nastier so to speak and it seems like there's always like two conflicts one you know like two schools of thought when it comes
[00:48:59]  to figuring out how to how to continue along this divide i guess i guess i'm supposed to like title these diagrams in a way that's meaningful i like to just keep
[00:49:12]  on drawing and confusing people but like what's this one this is spa or stateless server stateless server stateful whatever okay but like now like we can recognize that
[00:49:50]  there's some problems here because every app starts its life on the server so this these arrows here this first back and forth that happens on the blue here unfortunately stalls out this
[00:50:16]  white section so to speak so like when you first load an app from the server in a you know stateless single page app and if you try if you're if the data
[00:50:28]  is not coming with you you're doing a whole round trip before you do anything right the data did come with you like ssr then at least you're in an
[00:50:39]  okay state the the the pun but the the challenger problem is is that these apps weren't originally designed to run here the model while it can be isomorphic isn
[00:51:00] 't optimized for that platform and and the actual nature of declarative data is a large reason for the pain what i mean by that is that like hydration let's talk about hydration
[00:51:20]  for a minute are most people on the stream familiar with hydration you can like tell me in chat if you're you're familiar with the hydration are you talking about drinking water
[00:51:44]  yes i have a lovely cucumber water with lemon today hmm all right yeah well you're right so let's let's talk about it for a second because again like the tricky
[00:52:07]  part about these topics is they require so much foundation to get to where we actually need to get to because you have to both appreciate how we got there to appreciate what the problems
[00:52:20]  are so that when when you are looking at new spaces or solutions you have to understand both what they solve and what they don't solve okay so yeah so talking talking about
[00:52:37]  hydration the the the the the the rough definition is like the code that's required to take a server rendered page and have it interact interact in the client the same way it
[00:52:55]  would have if it as if it would had been originally rendered in the client that's that's my favorite definition because it's very general it doesn't say very much but
[00:53:03]  but this idea that it's whatever code needs to run to make the app behave as if it had been client rendered when it had been server rendered and i like using this kind
[00:53:15]  of uh this kind of uh definition because it gets around like people trying to duck loopholes like the quick and resumability or whatever i'm going to call res
[00:53:26] umability hydration in the stream and i'll explain why for two reasons and as i continue my explanation here but the thing is hydration of some form is inevitable in any kind
[00:53:43]  of declarative uh framework and you can actually see it right in these drawings that i've already done here and and the reason for that is we read from state to know
[00:53:59]  what to render and then we update state to then render it again like it's a cycle at no point do we look at the dom these frameworks don't use the dom directly
[00:54:18]  generally they're not aware of the dom i mean that's like one of the fun like jokes right because like solid abstraction is thin enough that people can like literally go doc
[00:54:29]  me and create element and just like append it and it like works inside a solid component sorry uh this is i every half an hour i get reminded i need to restart my mac
[00:54:39]  like update it but what i'm what i'm getting at is so yeah hydration equals yes rendering elements no hydration is like taking something that it had previously been rendered with the
[00:54:58]  framework in a different environment say the server and then making it interactive again without re-rendering it i saw a clip of dev suffering hydration errors because last pass was injecting
[00:55:10]  widgets in ui yeah and again it's because we never look at the dom not really we don't want to look at the dom because when we're rendering when you're
[00:55:19]  doing the cycle and you look at the dom that can cause repaints and reflows it's expensive every time you look at the dom it's actually kind of it
[00:55:28] 's expensive like even in solid which you know has that low abstraction layer where you can go document create element and like insert into the jsx okay you make the element but we
[00:55:38]  only get around to actually dipping the elements right at the end of the freaking cycle like like it's it's it's it's it's over everything else is updated everything else
[00:55:46]  is has kind of shifted the state we actually have already like if you have a list and it you know updated you add an item we've we've updated the reactive representation
[00:55:55]  the list and then we've mapped it to a dom element and then we only actually look at the dom elements afterwards when we're actually doing like our side effects and yeah because
[00:56:08]  looking at the dom touching the dom is slow you don't want to do it pretty much you you want to touch the dom the least amount as possible most a lot of
[00:56:18]  ui frameworks like react basically have no idea what the dom is and this is this is very fundamental to the clear design because state you want a single source of truth you can
[00:56:28] 't have like you don't want this being the source of truth over here you know and this being the source of truth and arguing with each other like the thing that i didn
[00:56:35] 't show in this diagram was all the state all over the place but it it's even more confusing when the dom is like thinks it knows what's up and the library
[00:56:45]  thinks it knows what's up and those things don't agree in the case of like our modern declarative frameworks we just go the library is right the dom doesn't know what
[00:56:52]  it's talking about just override it diff it do whatever it needs just force your way we are right losing the hydration is my thing but that and that and this is the
[00:57:10]  thing resumability doesn't need to execute the hydration code it doesn't like it doesn't need to go through like most frameworks most libraries are declarative well how do
[00:57:25]  you restore the state to to the to the the application well if your program is ui equals function of state you know we have this extra data in here but if your program
[00:57:40] 's ui equals function state well i hate to break it to you there's no intercepting it you know like you have state you have ui like you you call
[00:57:51]  the function again right like this is kind of the like the the fundamental thing resumability goes okay no we don't have to uh call the function we can use reactivity
[00:58:05]  we can split it down to such a point that the first time we do anything is when we change something and then because we're not running the whole function we're only
[00:58:15]  applying the change using our knowledge of the reactivity but the thing is even with resumability you ran it the only reason resumability works is because you ran it on
[00:58:23]  the server the first time and got all the initial state and then serialized across it basically you did your trial run which means that you still have the state this this this
[00:58:35]  hasn't actually changed that you actually have the state and you don't look at the dom you might like pull the state initially from the dom as like the transfer mechanism that like
[00:58:49]  you encoded it as dom instead of json or whatever like that that's an implementation detail fundamentally the whole basis of this is the dom has to manage the state or
[00:59:01]  stuff goes really badly right all those hydration errors you've seen in react or maybe solid quick still has the equivalent of hydration errors if someone goes and messes with the dom elements
[00:59:13]  it can't like it still has to attach the listeners in a way it still has to know you know where these things are which puts it in that this camp you know generalized
[00:59:25]  hydration camp and it has to match because we never look at the dom and a declarative library will not look at the dom so essentially jquery is a little different
[00:59:36]  right because in jquery you weren't you weren't concerned with being declarative or looking at state you'd be like okay like pretend you had a method that when you
[00:59:47]  clicked a button it updated some part of the dom you can picture that right like button over here update some part of the dom over there like sorry my hands went on there
[00:59:54]  so button here thing over there okay separate now if the other thing hasn't been displayed like some other logic prevented from being displayed in a jquery routine when you click the
[01:00:09]  button or you know did that it would go oh is that element there oh it's not there i can't do when i'm this operation and it would act appropriately like you
[01:00:18] 'd you'd look be because you need to grab the element to go insert it in the dom in a stateful declarative framework if you thought it was there and it
[01:00:27]  wasn't there the framework's just going to like choke on you because like state is wrong i can't trust anything so while execution wise we could say that theoretically the best
[01:00:43]  resumable system has the same performance characters to characteristics as jquery when it comes to hydration it doesn't actually jquery doesn't actually require um the state
[01:01:01]  to match because it's not like it's not stateful it's imperative it's so that that's kind of the difference from my book hydration is our fault because we came
[01:01:13]  up with declarative frameworks but it's inherent to declarative frameworks we can come up with ways to solve the expense of it we can come up with ways to you know
[01:01:21]  defer it and do a whole bunch of fun stuff with it but it's our it's our problem and even the smartest solutions here if they're going to be optimal and declar
[01:01:33] ative and give you you know this control and predictability that you want they rely on knowing the state and have that like the dom match it okay that sounds like vdom
[01:01:54]  with extra steps i mean what this is the this is this is the this is the the fun part about this is that like serializing stuff across the wire like once you
[01:02:08]  leave the source place of where these these things live you do have a virtual representation right if you do a good enough job and you encode enough information you still don't have
[01:02:22]  to diff right that's a beautiful thing about quick quick right they are able to resume the reactive graph they can keep the granularity but that's because they're not kind
[01:02:31]  of passing back and forth that's just because like they just do the initial thing pick it up and move it right things get a lot messier if this relationship is one that
[01:02:40] 's constantly going back and forth right a lot of times people try and compare react server components too quick and back and forth and they're not comparable because they do not solve
[01:02:48]  the same problems no don't make eye contact with the dom pretend it's not there uh thank you guys i'm like six minutes behind on the chat again i'm trying to
[01:03:01]  keep up with your own but i missed the final one's hydration i always thought it was when the markup was generated by the js package where can i find the basics i
[01:03:09]  need to understand this were you an angular dev just i i i just want to kind of um put that out there because angular did a very long time basically misinforming the
[01:03:24]  community what hydration was and they finally added uh hydration in 2023 i think like last year um but they did not have hydration until last year but they they had something else that
[01:03:38]  they called hydration in in modern terms the uh a js package generating markup is called um rendering that's the term we use um hydration is the term for when something was previously
[01:03:59]  server rendered and we basically try and upgrade it that's that's that's the key piece here okay yeah unless you talk about html that's not against ht
[01:04:22] mx i just we can talk about html partials all day and not even mention htmx it's just not relevant right like it's it's
[01:04:29]  like it's like the specifics of htmx just don't matter for the point of this conversation it doesn't really matter what the tool is i'm talking very much
[01:04:37]  on fundamentals here right it's funny though i mentioned jquery right i could have said vanilla javascript so i guess there's like still value to a library like
[01:04:50]  is this is a good comparison like htmx is kind of like if you invented jquery in 2023 like if jquery hadn't existed and then you're
[01:04:59]  like look new library jquery like there's definitely value there right because it makes it easier to use the dom apis but it's also kind of like hmm yeah
[01:05:12]  i don't maybe maybe maybe that's a bad comparison yeah i this is the simplest thing but it's the hydration involves so much more than that like because of this what
[01:05:32]  i'm talking about because adding an event listener can't be the end of the story um and if you look at like the resumability thing uh at all like we see
[01:05:45]  these examples all the time just because i i can draw it really quick here in a simple playground let's just trash what i had last time you can already see it here
[01:05:57]  look i have a button that when i click it it updates we've all seen this code before if i what if i was like okay i'll just server render this markup
[01:06:10]  and then i'll add this event handler i'm gonna have a a pretty hard time because this event handler set state so if i literally just was like okay button run this
[01:06:19]  it's like it won't be able to find the state right like if i just take this and put it out here and go okay now we have a button you know dom
[01:06:32]  find by id whatever you get my point document i i'm just query selector i don't care what it is what my point is if if i find the element and
[01:06:47]  then went like okay l equals this and then i went like l dot on click increment this doesn't work fundamentally besides effectively like i i i i really don't want to
[01:07:09]  finish typing the rest of this out it just doesn't matter get what a get element what i just i'm sorry i i i it's it's get element why is it
[01:07:22]  why am i just like blind right now get element by id it's like at the bottom of my like it's an undocumented body it's whatever my point is this doesn
[01:07:37] 't work because count doesn't have any meaning outside of the scope of the component so in order to get to a point where you can attach event handlers you actually have to
[01:07:50]  rerun the components that's basically the crux of what i've been trying to say the dom isn't that slow but sometimes reading stuff is is actually way more
[01:08:14]  expensive than you'd expect like stupidly slow like if you know how to use the dom effectively it isn't slow but like there's a danger there it's like same reason
[01:08:25]  we have frameworks and stuff so that people can do stuff in optimal ways because people don't realize the stuff the real question is will you do a stream on jquery
[01:08:38]  when it comes before when it comes out oh okay so greg liked my comparison that's awesome that makes me happy it seems like i'm not crazy you guys are making
[01:09:03]  fun of me yeah fine the funniest thing is like literally the code was on the same page like signals come to jquery yes yeah yeah so like we have ways to
[01:09:25]  improve hydration my point is even in frameworks that were designed that way generally speaking you need to you you basically need the the state on the server to match the state on the client
[01:09:41]  to get to boot these things up someone can't like go in like google translate your page and add a bunch of like extra elements in there because you're not going to
[01:09:55]  find anything anyway good people are still with me everyone's still alive yeah i mean i'm talking real fundamentals here today because like this has kind of been the the struggle um
[01:10:18]  with this stuff because on one hand we really want the state to be as close to the client as possible because like in this definition of state and data because then we can be
[01:10:32]  as interactive and responsive as possible like but then on the other hand the a lot of problems with ui frameworks is that this problem here starts happening on the data side because
[01:10:49]  i mean i'm showing these like nice little funnels here but like we end up with we can end up with like many different calls you can have component like this could be
[01:10:59]  per component and suddenly like each component is doing waterfall data fetching you know like component fetches like the classic example is you have a big app with the router and code
[01:11:09]  split so every page has its own bundle good idea right you don't want to load everything up front so you go to the next route unfortunately you don't have the js
[01:11:25]  yet that's fine so you go to the server and get the js and then when you load the code the first line is fetch some data so you go to the server again
[01:11:33]  to fetch some data it's a little bit awkward because you're like well if i'm gonna go to the server at the beginning there why didn't i just go fetch the
[01:11:42]  data at the same time like i know i'm going there right and this is what a lot of like remix solves or svelte kit or solid start like we we
[01:11:50]  all have these data loader route level data loader things so because we're building single page apps we code split our app we need the ability to basically parallelize that data
[01:12:01]  fetching but you know there can still be cascades and it pushes us generally to hoist the data fetching up if you could do all of if if instead
[01:12:18]  of loading the code and doing the data fetching you know in parallel like what if you actually rendered the page also on the server and return part of it back not the whole
[01:12:29]  page maybe maybe just like a swap section then suddenly like you're removing all of these cascades and if the waterfalls exist still which they can they can still very much
[01:12:43]  exist in the client even when you hoist the data fetching you know uh because there are natural waterfalls you have to fetch this and that you can just do it
[01:12:53]  all in a single flight and it's so powerful to the to the point that the react team has gone as far as saying like yeah don't worry about waterfalls on the
[01:13:02]  server i mean i don't completely trust them on that because before i was building javascript frameworks i was building orms and trust me i did all the work possible to
[01:13:11]  avoid server waterfalls that i could like imagine that was like literally the type of optimization work i did so i'm not i'm not buying that for a moment but comparatively
[01:13:22]  it's an order of magnitude right this is the same argument i make about like why you should put javascript on your back end because the difference you can make in terms
[01:13:31]  of you know once your app is you know has a bunch of javascript in the front end the difference you can make in terms of hydration cost is an order of magnitude
[01:13:40]  different than you accomplish by doing stuff on the server right like network cost 10x cpu cost like on a per user on an individual user basis um you know like an
[01:13:54]  individual request basis obviously there's a trade-off here because you have millions of users and they take the end user takes the brunt of the network cost where you take the
[01:14:06]  brunt of the cpu cost so i like i understand there but from a single user's perspective js on both sides will give you the best results right that argument in
[01:14:15]  reverse is basically what they're using for rscs in terms of waterfalls on the server not mattering as much sending htl on the route change is the
[01:14:28]  way well let's let's let's let's start looking at let's like this is all building up to where i'm trying to get to yeah json serialization is
[01:14:41]  is um is is definitely expensive compared to just rendering html so there's that but we we've already talked about here is that you're not rendering just ht
[01:14:53] ml like yes if you can get away with just rendering html and you have some jquery or some simple javascript manipulation logic that's not stateful then
[01:15:04]  you're fine but truth of the matter is if you are dealing with a declarative client-side framework you're going to be serializing json anyways and and if
[01:15:13]  you haven't kind of like the kind of if your stuff's resumable guess what you're going to be serializing more um of that internal state as well instead of
[01:15:25]  recreating it so like not clear right now obviously i'm talking about html partials and getting there from the perspective of of declared javascript frameworks so i
[01:15:39]  maybe like that is the starting point because my assumption here is that regardless of of um how we do our navigation because i as i said i've worked on mpa frameworks
[01:15:55]  things that basically deal in in in html marco um marco turns 10 this year i think yeah marco's 10 10 10 this year so we've had
[01:16:11]  like we basically had islands in js land mpa style for a decade and what i'm what i'm trying to get at is that at a certain scale and complexity i'm
[01:16:27]  arguing that not scale of users scale complexity your app marketing that a declarative solution javascript and the client side is probably unavoidable probably that that that's that
[01:16:40] 's the base premise that that i'm taking into this thing like the the problem is there's all the one case where it might be avoidable is if you have a state
[01:16:55] ful backend if you have a stateful backend there's some startup cost you know getting that web socket on we kind of we're testing it a bit when we're playing
[01:17:04]  with live view js it definitely definitely took a hit but generally speaking what i'm getting at is if you have a stateful client you will inevitably get to a javascript
[01:17:24]  framework whether it's an existing one or one you built yourself because you were trying not to use one double digits hey marco okay at the end of time of pars
[01:17:50] ing existing js and essence here with hydration is the same without counting the render time and the parsing the yes and ssr and csr hydration is the same okay this
[01:18:01]  is a fair question i imagine it's slightly faster to hydrate than it is to actually client render even not counting the painting time slightly um just because you're not like
[01:18:26]  like when you say render time you're talking pain time because you're actually like creating dom elements that does have a some amount of cost to it um the the tricky part
[01:18:37]  obviously is the the render time when it shows up actually is uh is actually considerable difference and oh actually sorry you said csr versus ssr data fetching is going to
[01:18:52]  be huge huge huge difference see the problem is if you don't get me wrong the reason in in some cases what will happen okay i don't know if i want to
[01:19:04]  show this graph right now it is kind of relevant i've talked about this before but classically with ssr um what time is it yeah i can show it um
[01:19:16]  maybe i actually have an article that shows and then i don't have to draw the stuff myself um uh server render y ssr oh god i can't remember my old
[01:19:36]  article names maybe because they're on page two they're that old server rendering javascript yeah okay optimizing performance yeah that was the last one why ssr these are
[01:19:48]  a while ago um let's just really show what i want to show the the the big problem with classically with server rendering was that you'd have to wait for all the
[01:20:03]  data to show up so if the data latency is is more impactful than your network latency um because you have a fast internet and you're in you know silicon valley close to
[01:20:13]  where they do it or the wherever the you know edge network or whatever like if if that is is smaller then the the fact that you wait for the data before sending any of
[01:20:24]  the html means that the javascript can't load to hydrate which means that csr can actually sneak out even with client-side data fetching better
[01:20:34]  metrics than ssr because it shoots the page back immediately goes to fetch it um but it's also loading the javascript at that point whereas ssr has to
[01:20:46]  wait to load the javascript so then csr can like can like start like executing some of the code you know uh sooner so like there's like a bit of
[01:20:58]  a trade-off streaming basically levels this playing field close enough that even if csr um yeah stream basically levels the the playing field to the point that this like that they
[01:21:12] 're basically the same um but without streaming it's actually it actually the answer is it depends you misheard i i i said i said rendering is more expensive than hydration you
[01:21:36]  have to count the data fetching like otherwise if you don't count the data fetching then like the server is not data fetching either so then they're both sending
[01:21:54]  it so then yes the server ssr is definitely faster because like they both respond with the page immediately and then they both request their javascript in fact ssr
[01:22:06]  can be better this because again do you have routes on your app csr you don't know what page you're going to be at so if you have page specific code
[01:22:17]  splitting you actually have to go fetch that code with ssr you know what page you're on so you can actually pre-fetch all the like the the bundle pieces
[01:22:26]  that you need if you code split so like yeah i mean with no data fetching involved see that kind of like pre-fetching thing gets kind of over kind
[01:22:38]  of gets evened out because like you get the js starting earlier with cs when there's data fetching but with no data fetching at all involved ssr is like
[01:22:49]  clear win like not even it's it's pretty much no i'm saying csr is is is is it's the other way around i don't know why you guys
[01:23:08]  keep on thinking i'm saying the opposite well the hydration doesn't have to create any dom elements the javascript code like like for example in the way solids hydration works
[01:23:35]  is we look at the dom we grab a reference like we just go get me all the elements with a specific id key and then we run the code and then when we get
[01:23:44]  to that piece of code that that goes you know we would render this we go oh there's that key from the set do a set lookup you know o of one
[01:23:54]  or whatever here use this element don't create dom elements don't attach them to the page you know is pre-rendering really ssr if it hydrates sure
[01:24:15]  like i've always considered that first load is not my maker started reloads or if i miss yeah yeah well the biggest thing with ssr is you're inherently in a
[01:24:30]  world of double data right sorry and it did it again it's like on half an hour less than half an hour intervals dom is csr minus the domination gotcha and
[01:24:47]  that's extensor okay well hydration creating allocating the memory of the framework starting up is also expensive but yes the rule of thumb here always is dom expensive just take that mentality
[01:25:00]  with you like don't get me wrong some people earlier were like the dom isn't that expensive it is not that expensive but it is more expensive like these things add up that
[01:25:09] 's the thing these are the accumulated costs it actually makes a difference Benton is the new someone. Sorry, J. Larkey. Or parasocial, whatever you
[01:25:31]  want to go by. Anyways. Ah. Thank you for the compliment. I think it's a compliment. Alright. So, I hope we're getting somewhere here
[01:26:05]  in that, okay, we've clarified that client rendering is more expensive than hydration, generally speaking. Like, SSR definitely has a benefit. Like, when you consider,
[01:26:21]  like, it's interesting, right? Because I've seen some people looking at some hybrids recently, like, data fetching, which I presume means they know
[01:26:33]  what route they're going to be on, right? Like, they've hoisted the data fetching. Like, they at least run the route data kind of level stuff
[01:26:41] , and they know what JavaScript is to stick into the preload. So, they kind of, like, render a shell, and then they client render. And maybe they
[01:26:49]  stream that data to you. Like, I can picture a world where you could do as much optimally on the server except render the application, like, the actual stuff
[01:27:01]  in the server, where the performance would be close. But, like, you'd probably see the difference, you know? Like, whether it's just, like, a
[01:27:12]  quick flicker for a second or whatever. But, like, all the classes are better than CSR stuff would be gone mostly, other than just the pure cost of
[01:27:23]  rendering. But, yeah, generally speaking, SSR is going to have an advantage on page load, assuming that the server isn't blocking the client's ability to load resources
[01:27:35] . Which, as I said, is significant. Because I used to use that to just fry every SSR demo. Like, I remember back in the day, there
[01:27:43] 's, like, a real world demo. What's real world comparison? A real character, front of frameworks 2020. You know, like, there used to be this one
[01:27:55] , you know, that came out every year with a real world demo. And I remember I did a solid version of it. And the funniest thing about the solid version is
[01:28:04] , you realize, kind of, after the fact is, solid is actually using client rendering, and most of the other top frameworks here are actually using server rendering. And
[01:28:13]  solid was, this is Lighthouse, you know, the thing that, you know, is very picky about initial load. Basically, the whole thing is initial load. Solid
[01:28:22]  basically outperformed all the server rendering frameworks. This is Svelte, but it was actually sapper. Um, uh, like, where is it? Yeah
[01:28:33] , where's, where's our, and you could tell even when you looked at the page, the, how much nicer it was using the CSR. So don't
[01:28:43]  get me wrong, you can, you can definitely screw up SSR. And to be fair, I feel like, like, the best practices of, like, Next.
[01:28:50] js, like, until a couple years ago, basically ensured that you were probably going to be worse than someone who knew what they were doing with CSR. But
[01:28:58] , like, times have changed. I think people are better with SSR. I think frameworks are better with SSR. This isn't, like, using Next.js
[01:29:08]  in 2019, so to, so to speak. Like, this isn't like shooting fish in a barrel. Anyway. Yeah, I care about the fact that these solutions
[01:29:23]  scale, right? That's interesting. Walmart is just, like, the page you go to if you want to see what it, like, go turn down your network
[01:29:38]  stuff. If you want an example of what, of React performing poorly, go to Walmart. Kill the art. SSR's path, because if it wasn't,
[01:30:05]  I would be roasting SSR to death now. Yeah, because I was, I was, like, guy. I see, I see where you guys are, like,
[01:30:10]  coming from here, you know, trying to, like, change the flow, avoid the complexity. I was the guy, I was, I was you, I was that
[01:30:16]  guy. I, I was very smug about, about CSR toasting SSR frameworks. I wasn't completely correct, though. Yeah, I mean, and
[01:30:33]  yeah, solid attracts a lot of, a lot of those people right now. Because the problem is cookie cutter solutions rarely give you the best performance. And, like,
[01:30:51]  there's just so many opportunities. Because people, we design stuff so people can actually release products. So, like, when I complain about waterfalls in, in RSC
[01:31:02] s or whatever, yeah, it's a, it's the performance concern. But, like, the React team, you know, quite rightly, probably, is, like
[01:31:10] , saying, like, look, think about how much easier this is logically. This will help you just build the app and not worry about that stuff. There is enough
[01:31:21]  studies, you know, Alex Russell type stuff to show that if you build something without taking performance in mind in the first place, it'll probably never be optimized. Like,
[01:31:28]  that's generally how these things work. But, you know, push comes to shove, it's about getting features out the door, not how performant it is, usually
[01:31:36] . So, I get it. I'd, I'd like to hope that sometimes the patterns that we push forward can actually lead to more performant apps. Like,
[01:31:44]  a perfect example of that is React, moving to hooks, I think, made the average React app more performant. I have no numbers to prove that. But I know
[01:31:53]  that, like, some people use effect terribly with the re-render, but the actual main life cycle of React, the way they push the effects after render and all this
[01:32:03]  kind of stuff actually is more performant, right? Like, from a baseline of how you should organize your code. They kind of guided you to doing stuff in a
[01:32:14]  better way. That being said, people really prefer synchronization over derivation. So, it's like, it's really hard to kind of break them of that.
[01:32:24]  Yeah, Alex Russell's awesome. I've met him a few times. Yeah, we'll, we'll see, because it's interesting, because I do technology, and
[01:32:39]  he does, he actually says that, like, he's, he stopped trying to fight React with technology. He actually thinks it's a management problem and, like, an
[01:32:46]  organizational problem, where, like, he's trying to attack it at the hiring level. If you develop, it's been DX hiring. Yeah, it's so funny
[01:33:04] . Sometimes, I am terrible in that, like, even though I'm aware of DX, and I care about DX in terms of leading people to the most performant
[01:33:14]  patterns to make sure that it's easy to, I, like, beyond that, I could care so little about it. Like, I am, I'm much UX over
[01:33:21]  DX, like, completely, like, on my prioritization side of things. So, like, it makes it really hard. I have to, like, everyone has their
[01:33:30]  own, like, biases and stuff. And this is one of those ones I have to keep in check. Like, when I write articles, and I'm, like,
[01:33:35]  talking about stuff and get excited about stuff, I have to, like, remember to be, like, talk about solutions that don't push in that direction, that maybe
[01:33:42]  push on the DX side. You know, like, that was, like, very intentional part of my stream last week. Like, the frameworks that I had to do research
[01:33:49]  before the stream on versus the ones that I just knew everything off the top of my head, it was very clear pattern there. That being said, Reacts changes to
[01:34:02]  RSCs do have positive performance benefits, even if I'm struggling with them. The problem is, and where I'm getting to here is, is the silver bullet.
[01:34:12]  This is the thing. We, we're trying to find that one pattern fits all, and it's not quite working. I was hopeful, but then I keep on
[01:34:21] , like, getting slightly let down, you know, and I keep on shifting my perspective as I go, which is why I wanted to talk more about this today. Okay
[01:34:28] , sorry. We're, like, an hour and a half in, and I'm, like, we're just getting to HTML. But it's important. We need
[01:34:35]  to understand state. We need to understand hydration. And we need to understand the base idea that if you have a stateful client, then, like, as a baseline
[01:34:49] , you're probably going to need a declarative JavaScript framework, probably. If you have a stateful client, and you feel you do not need a declarative JavaScript framework
[01:34:58] , that's a different conversation. And again, that's why we're probably not going to focus too much on, like, say something like HTML specifically, because,
[01:35:06]  like, I think they called me out this week a little bit after my last stream, because, I mean, not call out. It was just, like, a shout
[01:35:15]  out. But, like, they're, where did he say it? "HTX generalized hypermedia controls. That's it. And since I agree with Ryan
[01:35:23] , where I disagree is how powerful the simple extension is, I think people underestimate hypermedia controls generally. Online debates are generally pointless. People will build and we will
[01:35:32]  see." Right. Right. So that's the right sentiment to hear. Because my whole argument is that, is that I think hypermedia, I think these controls are
[01:35:46]  powerful, but if you have stateful client, you have these things kind of butting up against each other. Right. So, like, you can use them together
[01:36:02] , perhaps. But if we're in that zone where we're using them together, I could also be talking about Astro view page transitions. I can be talking about React
[01:36:10]  server components. These are other solutions that involve combining HTML partials with stateful declarative client libraries. Okay. Yeah, yeah, definitely. Right. Well, but
[01:36:35]  see that this, and this is a lot of times what quick's argument is here a bit is came from the exit, make it so that the creating good UX is easy
[01:36:46] . Exactly. But someone figured out what the, what the good user experience is in the first place could get there. So, like, for me, that's still
[01:36:53]  UX leading DX. And in a sense, when server components, I believe they were trying to find a replacement for GraphQL. And I don't think it was just on
[01:37:08]  a DX standpoint, because obviously there's a lot of complexity in Relay. But I think it was actually GraphQL requires you to base, not requires, but to
[01:37:17]  fully benefit it. You basically have this giant client side library, right? To be fair, the React team didn't care as much about that. But it is one of
[01:37:24]  those lists of concerns where, like, GraphQL client is as big as React DOM itself, like 10 preacts easily, right? So you grab GraphQL client, you
[01:37:37]  grab React DOM and React, and you're at something like 25 preacts. And for those who don't know, preact is a unit of measurement in JS frameworks
[01:37:46] . It's four kilobytes, essentially. So when talking about JS framework sizes, I generally use preacts. Anyway, so there is like, and that's
[01:38:06]  without adding like, GraphQL client libraries are useless post with fetch. I don't know. I don't know if I can agree with that. Like, I would
[01:38:23]  say that maybe you don't need it until you're like, super enterprise or something. Sorry, my screen just flickered for a second. But like, like,
[01:38:48]  it's part of the thing where everyone got sold in GraphQL when they didn't need GraphQL. Like, from that perspective, you can say that they're useless.
[01:38:56]  But there is no solution that is so effective at applying granular change across the network from a stateful client's type. It's like, it's like the live view
[01:39:08]  stateless server edition kind of thing. It's like the, and I'm not talking about subscriptions and web stocks. I just mean the fact that like, with a normalized
[01:39:15]  cache, it is possible to know down to fields, what has, you know, what data has updated. Anyway. So, yeah, I'm making some assumptions here
[01:39:45] . I'm assuming that you have stateless servers. I'm assuming that you have stateful clients. And I'm assuming that, yeah, that you want to try
[01:39:57]  and improve the situation somewhat. So with, with, with those kind of assumptions in place, then we can have a conversation about HTML partials. Are, is it
[01:40:22]  though? I'm, I'm, I'm, I'm just very curious if anyone with stateful servers has any customers. The reason I asked this is just like
[01:40:40]  the move from stateful servers was so anonymous, you know, a decade, 15 years ago that like, it just, maybe it's like the spot, maybe it's
[01:40:53]  like the spa movement, but this one is kind of obvious. So we're now we're saying like single page apps are a zero interest rate phenomenon. I feel like
[01:41:02]  any move to stateful servers is kind of like, like, especially with the move of serverless functions and a lot of the push out of like these kinds of new distributed
[01:41:12]  architectures and stuff. It just, stateful servers don't seem on the future from a trajectory part. I don't know enough about backend preferences, you know,
[01:41:25]  to actually make this call, but just like where I'm sitting, the, I feel like me making that call is kind of similar to someone telling someone on the backend side
[01:41:33] , informing you that like offline first PWAs were a thing, but everyone decided that wasn't a good idea. The more nuanced take, as I know as a client
[01:41:43]  dev is that they are completely out of fashion right now and not really a thing, but I would not be surprised if give it like two or three years that they bounce back
[01:41:54] . I, you know, to, you know, there'll be a situation for them, but stateful servers. I don't, I don't have enough insight
[01:42:03]  to know why anyone would ever choose them unless they have a very specific need. You don't have to, but would you, I don't know, would you want to
[01:42:21] ? I mean, well, we're going to stateful servers for cart sessions. I guess like there's different degrees of staples servers. There's a difference between
[01:42:33]  keeping your session and like keeping an active connection with every single user on your website. I don't know if you want to do that. To be fair. I was
[01:42:55]  hot on serverless years before I used Netlify or even was really aware of Netlify. I was, I was right on AWS, um, through the mid
[01:43:06]  2000. I've realized Netlify existed at that time, but honestly, I was not as connected to the dev, that part of the dev world. I was writing
[01:43:15]  knockout and doing serverless AWS. Yeah, exactly. I, yeah, I, I know Netlify existed, I just was not like paying attention.
[01:43:41]  Okay, sorry, I get pulled into chat too easily. Anyway, so getting, getting, getting kind of more on the HTML partial side, let's try and move this
[01:43:54]  forward a bit. Now let's define what I mean by HTML partial. HTML partial. I, I am talking about the act of swapping HTML, um,
[01:44:19]  in basically, I would say client-routed app, but it doesn't even have to be client-routed. Like literally you have a web page
[01:44:24]  and instead of like doing a full page navigation where you basically replace everything, unload, you know, all the JavaScript, you know, we are in a place where we can
[01:44:36]  swap. Part of the HTML, right. That's, I think everyone can kind of agree on, on that. What's interesting though, is that. This
[01:44:57]  can happen in many different forms. Obviously we're aware of HTMX, right? We've talked about this, um, and, but also a couple other scenarios where
[01:45:10]  you might want to consider HTML partials off the bat. Obviously RCs aren't HTML, but it's close enough that it fits our discussion. But actually the, the
[01:45:18]  first one that I actually think about from a declarative side is actually islands. It is possible to render something, not all islands frameworks support this actually, but they should
[01:45:32] . I think Astro actually might be one of the few ones that actually does. I know Marco doesn't, but it should be possible to render your island and pass it
[01:45:46]  a prop that is not initially rendered. So picture your island switches between two panels based on some kind of state change. So you have a button in your island and then
[01:46:06]  it switches between panel A and panel B. Toggle. When you render on the server, you always show panel A, but when you press the button, it switches
[01:46:15]  to panel B. You should be able to switch to panel B without going back to the server. And this is something that Astro supports, which is awesome. As
[01:46:33]  I said, I think all like from a completeness sense, all islands framework should support this. That to me is also can fall into this zone of HTML partials to
[01:46:46]  a certain degree. It's, it's less of a, you know, like trip, so to speak, like you're not going back to the server and sw
[01:46:55] apping a piece. But if you think about it, you're taking a piece of HTML that has never, that wasn't there initially, wasn't part of the DOM necessarily
[01:47:04] , and you're inserting it. And this has all the same, you know, considerations or characteristics that you would probably have if you navigated, you know, like
[01:47:19]  maybe did a few transition API or used HTML or whatnot. So if you insert, if you throw HTML on a page, and then you call hydrate in your favorite
[01:47:31]  framework. It's only going to touch what's there. It's not going to touch some piece that's not connected. That's like, it's not even aware
[01:47:41]  of, right? So from that perspective, this is also an HTML partial because it's not there at, at the immediate hydration time or beginning of your app. So that
[01:47:52] 's kind of like how I'm defining this. When I'm talking about HTML partials, I'm talking about insertion of HTML outside of, well, it doesn't
[01:48:01]  have to be outside of the JavaScript framework. But basically, that is outside of the hydration scope of initial page load. So these are all examples of HTML partials.
[01:48:09]  Chat's getting away from me. I'm sorry. I'm just like talking about stuff and they're like, oh, let's talk about Phoenix Live View. But yes
[01:48:21] , TurboLynx or Turbo is HTML partials. Flamethrower is HTML partials. Basically anything which seeks to render part of the page on the server
[01:48:36] . And insert that part of the page at any point after initial page loader hydration. I see Dan said that the client is also a server. I'm going to
[01:49:02]  want to. You guys are like getting into live view. Yeah. So what I'm talking about. Yeah. I'm talking about like when you send a prop, a
[01:49:21]  server prop into. Yes. This counts too. If you have a client component and it's that same switch I was just telling you about. And you pass props
[01:49:31]  in and they're more JSX so they're actually server children. When you insert or remove that prop, you know, like on that toggle button. It hasn't been
[01:49:43]  processed before. You know, React hydrated the visible tree. It's not going to hydrate the islands or client components that are in the non-visible tree, right
[01:49:53] ? This all in my book is what I'm talking about when I'm talking about HTML partials. As opposed to the client is creating creating the HTML. Because the
[01:50:03]  difference is that the client. Creates it. It runs. The function. It sets up and it basically renders it based on. all the information it has because
[01:50:14]  it has that information in the client. It's a very different. When you have the server client divide. And if you have decided. Sorry. I'm just. If
[01:50:30]  you've decided that. State is here. And data is here. Okay. We've this. This is all I'm assuming at this point. you've made this
[01:50:42]  decision. Okay. Yeah, I know. I'm spending like a lot of time on definitions. I like lost 20 people talking about definitions. Yes, exactly. But the
[01:51:05]  thing is like. There's a big difference between the props that you rent like that are SSR across like when you're just doing normal SSR without all the server component
[01:51:17]  stuff because there's no serialization boundary there. So it's literally the code. You just send the code to render the thing. Whereas server components that are. Props
[01:51:27]  to client components get rendered at server render time, not on the client. So we're no longer talking about shipping code. We're talking about shipping. Partials.
[01:51:40]  Okay, so. Yeah, this is this is where, you know, there's two different considerations here because we're. I think we can break this down and talking about
[01:51:55]  like the get side like the the rendering side and we can talk about the mutation side. Because they both have like implications. I just don't know what you're getting
[01:52:09]  at. I think we're agreeing. I'm, I'm, I'm just categorizing this as. As, as a, as a partial. So. The
[01:52:23] , the first consideration is. That at any time. After initial hydration. Because we already talked about the definition of hydration. Hydration involves. the state matching. The
[01:52:42]  state matching. Even if you don't run the hydration code. You expect the state of the DOM. To be in. The state that. The server. Handed it
[01:52:50]  to you. So you expect that. You don't have to look at the DOM. You can look at the state and know what's going on. So. The second
[01:52:58] . That. State has updated. In the client. Any HTML. Or any partial. Cannot be server rendered. That's, that's my first thing I'm
[01:53:18]  going to. Put here as a constraint. Once. Date. Is updated. Partials. Can't. Hydrate. And. Or rather. Client. What
[01:53:45]  do I call them? Islands. Can't hydrate. And. Can. No longer. Be. Server rendered. That's what I meant to say. Once state is
[01:54:01]  updated. Islands can't hydrate. And can no longer be server rendered. I. Following so far. I guess a similar thing is. Previous. Server rendered
[01:54:24] . Islands. Can. Can not. Can not. Be. Inserted. And by islands. I'm just referring to. Client components. So these are
[01:54:56]  actually two points. It's actually more like this. Islands can't hydrate. So. They can't be server. Cannot be. Cannot be server rendered.
[01:55:20]  and previously rendered cannot be inserted. Could you describe the benefits? Is it not just running less JavaScript on the client? You're right. Okay, we need maybe a
[01:55:45]  little bit more background here. The benefit of doing HTML partials is a lot of the same benefits you get from using multi-MPAs type frameworks. If you know
[01:56:01] , yes, that you never need to render this JavaScript in the client, you can not ship the JavaScript, you can avoid running the JavaScript, and even in a lot of
[01:56:11]  cases, you can avoid serializing the data that would be needed to hydrate said JavaScript. So it's actually a triple win. So if you have pages that are
[01:56:20]  fairly uninteractive, you can basically disappear the JSON, disappear the JS, and disappear the CPU time. It's basically win, win, win, win, win
[01:56:29] . Except for some of the fun complexity here. To be fair, you could argue that those pieces only matter on first load. But there are DX considerations. If you
[01:56:46]  can force things into a single model, then you can make certain assumptions that can make it easier to reason about the work of your app. You're not just like... I
[01:57:01]  think one of the hardest parts about Qwik for some people, even though I don't think it's a wrong assumption, is if you look at any Qw
[01:57:07] ik code, other than where there's a server function, which is like an RPC call, you probably aren't going to be able to say what runs on the client
[01:57:16]  or what runs on the server. You will be like... For some people, that makes it harder to reason about, right? This is part of that split where between
[01:57:26]  always keeping a client-like mentality versus not. But there's trade-offs. If you do, you have to be aware of serialization boundaries. One of the very
[01:57:38]  nice things about the server component design and islands design is that use client or this is an island is the serialization boundary. You know 100% like that's where things
[01:57:52]  are going to be serialized. And it's a defined point that is pretty easy to control. It's not all over the place. And it's like, this is
[01:58:03]  this is the spot. Right. The thing is, it's ranges. The thing is, SSR is still fine because basically all SSR apps turn into the client
[01:58:24]  rendered apps. It's only when we get into these new partials type, I don't know what to call them, infrastructures, that we actually get to a point
[01:58:34]  where there's an argument. Because an SSR single page app has all the capability of a single page app, except for it might be more complicated to deal with libraries
[01:58:46]  that were designed only to work on the client to put them on the server. But other than that, it's fully capable. The challenge we've been having is, can
[01:58:55]  we make fully featured applications in other architectures? Now, if you have a stateless backend, the answer to that question becomes kind of hard. Because like, if
[01:59:15]  you have an MPA multi-page app, you are throwing away the state every single time you navigate. So like, it doesn't lend particularly well. But if you
[01:59:25] , the whole premise of the RSCs, and I think some people are exploring this also with islands and stuff, I mean, we were with SolidStart and Solid
[01:59:34] Islands routing, is that if we can keep the client state, can we bridge the gap with these kind of models so that we can get the benefits that MPAs
[01:59:44]  already enjoy in terms of initial load, less JavaScript execution, the win-win-win I just talked about. Yet make applications. Because like, I think when you
[01:59:59]  start looking at this premise, looking at these definitions, you can start understanding why I'm like, why usually, you know, I'm not like, oh yeah, this
[02:00:08]  HTMX is like big. I don't really care how the HTML partials come. I don't care if you put partial in a fresh component, or whatever
[02:00:17] , they have partials in fresh, or use HTMX, or, you know, I care about what the complete package is that can tell a consistent story. Yes
[02:00:29] . Well, this is, I mean, I'm putting these rules out here, but I, like, this would apply to Astro here. You're saying that
[02:00:55] , like, the case of trying, of coming up with a solution that serves everyone is very niche? Sorry, I'm not, I'm not quite following. Oh
[02:01:14] , UI, where we say mostly static UI and interaction. Um, yeah, yeah, good examples of this. Um, probably content sites, um, but those don't
[02:01:30]  even interact that much. E-commerce is right on the side where I'd say, like, the, because they care about performance, this is like the sweet spot
[02:01:38] . Um, cause a lot of times there's just the cart. I always wonder why frameworks like next couldn't do without data needed to hydrate it. It always
[02:01:56]  had to use. I mean, that's what they do do. I always wondered why frameworks like next couldn't do without the data it needs to hydrate. And I
[02:02:09]  always had to Jason street by this data and printed the document. Oh yeah. Okay. Yeah. Well, because if you, if you rerun this function, you need
[02:02:16]  state essentially, or data. Like you basically need the data you need as a starting point. Okay. What's RSC not to derail react server components. Sorry
[02:02:26] . Uh, yeah, that's not derailing. That's core information. React server components are very important. If I say RSC is a bunch, you don't
[02:02:32]  know what we're talking about. Then this conversation probably will not make very much sense. Yes. All right. Well, it comes down to where I'm getting to
[02:02:52]  these pieces because. An MPA. Isn't a state full. Like it's not a persistent state full. Client app is the best way I can put it.
[02:03:08]  Like it just swaps us out. Every page is a new application. ASTRO gets a lot of love because it's simple because you just go, you put
[02:03:20]  your stuff on it. You have no expectations. There's no partials, no weird rules. And just flip, flip, flip, flip. Each island is already kind
[02:03:28]  of set up not to communicate with each other. Like to be fair, you could have shared state. I think if people were commonly sharing state, they would have perhaps
[02:03:39]  more complaints. But then like the other fun part about this is like. Because of MPAs, you sort of have the like it resets every five minutes scenario
[02:03:51] . Like basically you never get into like. Weirdness. Like what's the worst thing that happens? Do you navigate the next page and all is forgiven? Right?
[02:04:03]  Next is trying to do the same thing, but persist client state. It's trying to build applications with an ASTRO like architecture. And that's where all the complexity
[02:04:15]  comes in and why we're talking about it today. Let's hit though, do we get. No, but it's like. Okay, now we're talking the
[02:04:34]  other side. But before we had the defend from the CSR people. Now we're talking MPA side. It's like. Do you serialize all that state every
[02:04:44]  time? Like someone collapses a navigation bar or someone changes like. You could probably put it in the URL and then have it server render properly. But what I'm getting
[02:04:53]  at is like. Go build tan stack table. And then every time you. Try and do an operation on that table. It's a form post. Like or like
[02:05:05]  that's like it does a full page reload. Like I'm using extreme here, but I'm just trying to like show that like. Reloading in all that data
[02:05:13] . Resetting the state back to the right way. You know, I guess you can server render in that case, but like. I mean at that point you
[02:05:23]  wouldn't hydrate either. But like what every interaction now is like a full trip, right? Like basically if you think that you can get away. Without client state.
[02:05:35]  Then this whole discussion is mute. I'm saying that because you people want responsive UIs, you can't. Oh, niche in the case of a term. Something
[02:05:51]  only happens to serve. It doesn't have state or infrastructure. It's actually a large portion of like certain types of pages, right? Like. Maybe you don't
[02:06:00]  need that spa. Here's here's some light reading for everyone from. From. From. Oh, no, what happened? These tweets are gone. Is Twitter changed
[02:06:28]  their tweet format or something? I got to look into that. That's sad. Anyways, this is Michael Rawlings thing. But like you. These are kind of.
[02:06:38]  Maybe not the obvious things, but you can take this in scale. Like if you go. To like. Let's go to eBay.com. How much interaction do we
[02:06:48]  actually have here? We have search. We have these bar. The header bar on the top. Most of these are links. I guess the cart. Is. Something
[02:06:58] . Because when you. I hover it. It actually shows my cart. Notifications. Link. Hmm. None of this is really interactive. I can like this. Put
[02:07:08]  a heart on it. link. Link. Link. Link. Link, link, link, link. Language. Probably a link actually. Although this popover is interactive
[02:07:24] . like. Like at eBay. We reduced the size of this. The difference between partial hydration and not partial hydration on this page was an 80% code reduction. We
[02:07:39] . It. To. It. To move the core code from being close to 500 kilobytes of JavaScript. Down to. About 80 kilobytes of JavaScript.
[02:07:49]  That was back in 2017. Or 18. But. Yeah. Those were Dan tweets. Already. Oh yeah. That's no fun. We should stay from my article
[02:08:09]  about drive state when we talk about this. But trust me. Synchronization is always worse than derivation. Um. But getting back to. To this. Hopefully.
[02:08:30]  You can understand that. I mean. People who watch my streams know this. I can take. The same. Mostly static site. Like a hacker. Like the hacker
[02:08:41]  news demo. If I load this in Marco. And I load it in. Any. SPA framework. SSR solution. The. And. You know. Load a
[02:08:51]  nice hefty page. With a. Several hundred comments. Or whatever. The Marco solution is going to be like. Double the speed. Like it actually makes a significant
[02:09:01]  difference. When there's heavy data serialization. You know. When there's lots of. Uh. When there's lots of. Uh. CPU execution. In that case
[02:09:11] . There's not a lot of code. But it can also make a difference. When there's a lot of code as well. In fact. Start. Solidjs
[02:09:18] .com. I made this an MPA. Um. Just. To test our stuff out. And. Our lighthouse. Score. Improved. By. Seven points
[02:09:29] . Which isn't a big deal. You might be going like. Okay. Like. Why even bother with this? Like. Who needs an MPA? Right?
[02:09:37]  It was fun. This page. Because of like. All the. And markdown processing. And all this stuff. Even with SSR. Was about a hundred kilob
[02:09:44] ytes. Um. That includes this 30 kilobytes search. Now. It's 40 kilobytes. Including this. Or. Sorry. 35 kilobytes search
[02:09:54] . Now it's 40 kilobytes. Including this 35 kilobytes search. So like. There are. Sites. You know. Where. You just need.
[02:10:03]  A search bar. Or a tool tip. Or. You know. Stuff. Anyways. I know. I know. I know. I know. I. I should have
[02:10:14]  been more clear. I'm not going to talk about. Marco 6. Marco's history. Is still very important. Because. Marco. Yeah. I'm just not
[02:10:21]  talking about Marco 6. Yeah. I meant. I meant Marco 6. Anyway. Sorry. I haven't kept up on Twitch. Have I missed some. Oh. I
[02:10:37]  did. Wow. Seven gift subs. This like never happens. People don't sub on my channel. I. Very. Very much appreciate it. Um. Thank you
[02:10:46] . Um. Thank you very much. The leg. The leg. Om. That's. Uh. That's very cool. Okay. Um. And also. Uh.
[02:11:05]  I can't pronounce names. Blalan. O5. Subscribe with Prime. Oh. And there's more six gift subs before that. I think there's like 14
[02:11:18]  gift subs altogether. I'm just like catching up here. I'm. This is. Thank you very much. No. I know. Dave. You subbed at the
[02:11:25]  beginning of the channel. It just. I don't have very many subs. I'm not keeping a sub count. Oh. There's a hype train. Level two
[02:11:38] . I. I. I. I don't even think. I think the last time we saw a hype train on this. On this channel for Twitch subs was almost eight
[02:11:46]  months ago. So. Thank you. What are we doing on eBay? We're talking about where MPAs make sense. But we're going to get. We
[02:12:09] 're going to get back here. Because. We're talking about. HTML partials. And. Basically. What I'm calling the rules of HTML partials. Something
[02:12:22]  else happen. Angular is the best. Gifting. 10 gift subs. Thank you. Very much. Seriously. Pan that username. You guys aren't being very nice.
[02:12:47]  Thank you. Also. I mean. This seems like a good moment. As ever. To remind people to like the video. Likes are free. I was told
[02:12:58] . Theo says that. So. I should say that. Have fun with it. The funny. Yeah. Anyway. So. All right. This is. This
[02:13:29]  is very cool. Oh wow. What. They're still coming. How many gift subs are there? Sorry guys. I'm not used to stopping the stream. But I
[02:13:37] . 10. Is this another. They've gifted a total. 51 gift subs to the channel. Yes. No. Thank you very much. Angular is the best.
[02:13:50]  What. They're still coming in. Another 10. 61. Okay. I gotta. I don't know. Yeah. Yeah. Yeah. That's crazy. Sorry.
[02:14:04]  I'm just like. Trying to catch up with. With the chat here. And I'm just like. It just keeps on rolling. This is not. Usual.
[02:14:12]  Thank you. And I'm sure all these people. Appreciate the subs. See. That's the problem. I don't have like. A special place. In the
[02:14:27]  solid discord. For you. No. T3. Secret club. Or whatever. That signals first. Thank you. Angular is the best. That's funny. Anyway
[02:14:48] . So. Where are we? I don't know. If people follow. Why these rules exist. But. This is real. I'm not making this up.
[02:15:08]  And it doesn't take much. To think about it. You have a client component. That has a condition. That says. State. If it is true. Render
[02:15:24]  something. Else. If it's false. Render something else. If you render your page. And the state matches. And when I say state. I don't
[02:15:42]  mean like. In the component. I mean like. In a context provider. Or a global state. Or something that lives outside. Of whatever scope. We're talking about
[02:15:49] . Somewhere that's reachable. So it's persistent. Client state. That lives outside. Of the component. Once you update it. And you switch your view
[02:15:58] . And your client's state. It doesn't matter. If those children. Are more server children. Or more client's children. You'll see the new stuff. And
[02:16:05]  everything works. Because you have the code. For the client to render that. And you have any silver. Any server children. That already have already been rendered. So you
[02:16:11]  can insert those. You're good. Right. Except. What if. One of those server children. Was rendered on the client. Sorry. Was rendered on the server
[02:16:25] . And was hidden initially. And. It also had a switch like that. Well. It would have been rendered. With you know. The initial value of false. The
[02:16:37]  same as the original one. So. When you switched it to true. And go to hydrate that island. When it reads the state of true. And tries to hyd
[02:16:46] rate. It will see the wrong DOM nodes. And the hydration will fail. Right. And this is just from toggling. A navigation. This isn't from going back
[02:16:59] . To the server at all. It's simply the fact. That the state has changed. And when it was originally rendered. The state was different. That's the.
[02:17:09]  That's the second one here. Which really. Should. I guess. For our sake. Be the first one. Right. The more. The next stage of this
[02:17:24]  is. If I'm navigating. And doing an HTML partial. You know. Swapping something. And I go to. Render my island. On the server. Again
[02:17:37] . It's going to read some. Some like. Initial copy of that client state. That shows it false. It doesn't know. That I clicked the thing
[02:17:46]  in the client. And updated it. So when. The HTML comes in. The island will. Again. Have the wrong state. And fail the hydrate. It
[02:18:03]  says. It cannot longer. Can no longer be. So. Are you guys following? Sorry. Everyone's like. Arguing who had signals first. Right. I
[02:18:23]  mean. You could just fail. And bail out. But the thing is like. It is an interesting. Thing. Right. So. This is the first. Complexity
[02:18:36] . That comes with. Any HTML partial solution. Basically. The. The. The. Version. Essentially. That is serialized. Into props. Or. Comes.
[02:18:54]  From. The server. Later. Like. From an HTMX. Or wherever you're getting your partial from. From your fresh. Whatever. Or your. It has
[02:19:07]  to. Not. Client render. Essentially. You want it. Or. Not server render the client. Components of the islands. It's okay. If they do
[02:19:16] . Initially. Because. We're making hydration guarantees. To be fair. You could always. Just client render. These little pieces. But. That's not going to
[02:19:27]  help us. With our. Our solution. I don't know. Have you ever been. To a. Login page. That's built. With a. Single page
[02:19:34] . App framework. It's really. It still makes me laugh. Sometimes. Because you load the page. You see the card. In the background. And then the login
[02:19:43] . Controls. Snap into the page. And you're just like. Seriously. You're going to. All this phase does. Is do a single post. Like
[02:19:51] . Why. Like. You're probably going to do a full page. Uh. Post anyways. Because you need to like. Like. I guess it depends on the
[02:19:59]  architecture. But. Often. Like. To do the proper. Like. OAuth handshakes and stuff. It involves actual redirects. I know there's client versions
[02:20:06] . But then you have. Like. A different key. You need in the client. I mean. It's fine. But like. My point is like. Basically.
[02:20:12]  To post a form. You just went. And like. Like. Load it in. So obviously. If you're using a framework. Like Astro. Or HTM
[02:20:19] X. Or whatever thing. You're going to just like. Be like. Screw this. I'm just going to treat this. Like it's server anyways. And just
[02:20:25]  do the post. And I'm not going to bother with any client islands. But my. Because that is not a very stateful app. So to speak. But
[02:20:31]  my point is. We wouldn't be here in the first place. If we weren't trying to actually server render. These client components. Like. That makes the difference.
[02:20:40]  When you load the page. When you want to see it. We already talked about why CSR is. Is not. You know. The best. Like. Especially when
[02:20:47]  most of your content. Has to be loaded dynamically. Because. You know. Well. I mean. We'll get to that with a mutation story. It doesn't
[02:21:00] . That's what I'm. Okay. Okay. So you're talking to cyber. Who's. Ugh. But. Yeah. Yeah. VHDL is the winner
[02:21:12] . Actually. Let's go back to LAN par. In like 1969. Like inventing the spreadsheet. Or whatever. But like. You get the. The biggest premise
[02:21:31] . Like it doesn't matter. If you can. Persist the island. So to speak. Or whatever. Like the. The core piece. Of HTML partials.
[02:21:40]  On the get side. That are tricky. Is. It's not even that hard. Like you can just be like. Oh. This is one of those two conditions.
[02:21:46]  Just make sure that. We. We. All. You know. The islands from now. Are client load. Right. You know. That. I mean. It
[02:21:58] 's not. It's not hard. To solve that piece of the puzzle. I just wanted to kind of like. Throw that out there. I mean. It is a
[02:22:03]  little bit hard. Depending on the architecture. That. It makes it harder. If you have to serialize. Okay. Here's. Here's. Here's a little
[02:22:11]  food for thought. If the. If the. If the. If the form of. The. HTML. You insert. Is different. Than the form of the prop
[02:22:21] . You have to serialize. It. Does become a little bit. More interesting. When it comes to life cycles. Right. Like. Picture. Picture this scenario.
[02:22:32]  You have an island. That. Has. Our. Our switch again. Right. And. When you. Render the. Initial. HTML. You render the
[02:22:49]  page. And it has some islands. And in some. You know. Staple little. Interactions. And okay. That's fine. And. You. Did
[02:23:00]  the right thing. When you serialize. The prop. You know. Like the one that's not shown. You. You. You didn't render the client island.
[02:23:09]  You. You did that right. So now when. It shows it. It's actually going to. Client only it. Right. So that works. When you
[02:23:14]  switch. And then you switch back. When you switch back. Should you get. The thing you originally inserted. That will work. Because you never disconnected it. So to
[02:23:29]  speak. Or. Should you actually. Render it again. And I mean. And I mean. This is a debate. I think. I think. I think
[02:23:37]  in Astro. For us right now. It actually. Never. Like things that get uninserted. Never get released. So to speak. I think. I
[02:23:43]  could be wrong. But my point is. The format of the thing that you insert in the HTML. Is not the same format as the prop. And if you needed
[02:23:55]  to. Go from the rendered thing. Back to the serialized format for the prop. The one that doesn't render the islands. Like that would also be an extra step
[02:24:04] . If you wanted it. So that like. Every time you inserted it. It was new again. Which. Might actually be the correct behavior. Because people might want
[02:24:13]  to like. Release or free up the resource. Of the thing that was already inserted. So if you're not just. Taking the exact same DOM node. Already hydrated node
[02:24:20] . Just detaching it. And attaching it again. If you're actually like. Tearing it down. And rendering it again. It means that like. One of the
[02:24:28]  reasons that. Islands frameworks can avoid. The double data problem. Of serializing. Is because. They've already rendered it into the HTML. And they don't need
[02:24:40]  to hydrate it. Well. If you're rendering the HTML. And you're. Rendering a different prop. Version. Of the same HTML. So you can reins
[02:24:49] ert it a second time. You. Just reset the double data problem. Like it's not. You didn't solve the double data problem. In fact. React server components
[02:24:56] . Don't solve the double data problem. Because. Even if something's inserted in the DOM. They still send it serialized as props. Which means they send it.
[02:25:05]  Twice. So like. This is. This is kind of the challenge. Going from islands right now. Where. You can always trust to hydrate. Or you know
[02:25:14] . You always have. You know. The DOM. And to a place where. You. Like. Are trying to persist the state. That lives outside. You. You
[02:25:27] . If. Unless you have. Solutions that. Basically. What did I say? The three things you have to do. Are to solve this. Yeah. Because I
[02:25:37] 'm giving a list here. But this is more of like. This is more of just like a rule. And then like. The things you do to solve it is.
[02:25:44]  Client. Client. Load. After. Client load. In. In. Props. Slots. That aren't. Show. Shown. And
[02:26:02]  then. To. Reverse. Inserted. Templates. Into. Client load. Essentially. If you can do those two things. Then. An island solution.
[02:26:24]  Basically. Can. Can. Can. Handle. State. That's persisted. Outside of it. This is basically how react server components work. For people trying
[02:26:35]  to. Jump from islands to server components. But it also means for stuff like htmx as well. You would. You would also have to. Do this yourself
[02:26:42] . Because otherwise. If you don't do number two. You actually don't solve the double data problem. At which point. I mean. It's fine. But.
[02:26:50]  This is actually why. When we do stuff like. The hacker news. Benchmark. You'll see. Client side spas. 48. Lighthouse
[02:26:59]  scores. You'll see. Marco islands. Astro islands. Quick. 85. These are all MPAs. And then you'll see react server components. Like.
[02:27:13]  62. Like in the middle. It's because. They don't solve the double data. And you don't solve it unless you solve this. Okay. So.
[02:27:23]  Just. Just kind of like. Talking about. From the. What do I want to call this. From the render. Perspective. The get. So to speak
[02:27:37] . Kind of. Thinking about partials here. Solve by. Okay. Right. Is basically the only way of solving the double data problem. Reading the domination health
[02:27:58] . Yeah. Except that's impossible as well. I mean you're. I talked about this a while ago in a hydration article. But like. You. The. The
[02:28:06]  final. I mean. This is relevant. Here. Because it's. It's. It's probably the second point is. Yeah. Let me. Let me explain this
[02:28:13] . Yeah. Let me explain this. Okay. Because like. One of the coolest things about. This stateless approach that we're talking about right now. That makes
[02:28:27]  it different than ASP.NET and like update panels. And. One of the reasons I like HTMX versus like. ASP.NET. Is it doesn't
[02:28:36]  presume. That you need a stateful server. And it doesn't presume that you transfer stuff and back. In fact this architecture doesn't. It's assuming that you're
[02:28:43]  not sending all the client state back to the server each time. Because if you could. Then these rules wouldn't apply. But then you'd be back in view state hell
[02:28:50] . Where you're like literally trying to serialize the app back and forth on all the requests. You don't want to do that. This model assumes that the client is
[02:28:57]  the only thing that is stateful. And that you don't want to pay that serialization cost both directions. It's. Yeah. But now you're doubling it.
[02:29:11]  Right. Like what. My next point. Because this was. This was my first point. Once state is updated. You guys can hydrate. The next point that
[02:29:19]  I want to put on get here. It's like. So maybe I should be like. I don't even know. I can partially color code stuff. No. I
[02:29:28]  put this all part of the same text blocks. Unfortunately. It's fine. Whatever. Let's continue going. The next thing that I want to talk about here is.
[02:29:36]  HTML is lossy. Okay. Which is right on point. It is the final output. It is the final output. Yeah. I mean. The problem here is
[02:30:02]  that. If we. If web sockets. Like. Well web sockets. Stateful back end. Right. So then. Yeah. Yeah. So then. That
[02:30:11] 's already been kind of discounted from the discussion here. I'm assuming you can't get a stateful back end. Okay. What I mean by this is in
[02:30:21]  two. Two forms. What is it? Sorry. I'm going to pull one of my other articles. Hydration. Why is efficient hydration jobs for frameworks so
[02:30:34]  challenging? Okay. Drop this one in. Okay. So. There's a really cool library from the guy who's working on Esno. Where. I love the
[02:30:48]  compiler work. Um. He does. And. He. Thought. Well. Let's. Where is it? Yeah. Yeah. What if we could extract data from HTML
[02:30:59]  before? He came up with the new TypeScript compiler he's been working on. He came up with a compiler whose point was to try and pull the data back from the
[02:31:08]  HTML to solve the double data problem. But if you have derived data trying to get it back to the original source to re-derive in many cases impossible. Basically
[02:31:20]  the thing is like what if you show date in the UI that's formatted for a specific user preference a certain locale or something and you need to change the date.
[02:31:33]  Essentially you only have the final data object. You don't have the original date. You might have you might not have the seconds or milliseconds. What. The way he
[02:31:46]  approached this was that he also like in places where data was derived put the data as special attributes on the elements so then he could kind of like get the base data again.
[02:31:57]  But my point is. If you if your compiler handles every detail enough that you can do that smartly maybe that works but generally speaking. All those locations you still need
[02:32:08]  double data you're now weaving them into the HTML and I mean that has its own complexity because like who owns the initial source state versus the drive state. It's clear that
[02:32:17]  the drive state shows up here but what if it's like you have the date in five different places. Like this is this is this is this is one of those problems
[02:32:26]  that's like you can maybe solve it in like 70% of the cases but then like you spend eternity getting like the next 10 or 15% and you can never get to
[02:32:38]  the end. Right like this is like a fool's errand like it's interesting because like obviously with stuff like resumability we get a very granular level of looking at
[02:33:01]  this kind of stuff. You know like going into the markup and figuring out what belongs to what and making those data connections but like I think this is like this is
[02:33:13]  even beyond anything that you know say quicks attempting. So I just want to throw this out here it's it is a little bit difficult to reverse derivations when you HTML
[02:33:26]  is lossy. HTML actually is trickier than that because it's also structurally lossy to I talked about this on my stream last week, but like if you
[02:33:36]  have a for loop or like you return. 10 divs from one HT with with each of the island in it right and used to sort the order like change the order,
[02:33:49]  you know, of the models, so to speak on the server so like you send it back with a different order again. The client doesn't know which is which it
[02:34:00]  could match it, but then you're basically replace your you're you're you're replaced by index it's like if you forget your key in react that's essentially what the
[02:34:09]  behavior would be because it wouldn't even like most of the time we're not worried about this because the DOM. In the DOM can be stateful like with animations which makes
[02:34:19]  it hard but most people running DOM morphing like HTML morphing stuff isn't worried about this. Like the state of the DOM elements as much because they're
[02:34:28]  like they're treating it like a veto on they're trying to like dip it and it turns out the HTML outside of say the islands is not stateful like you're not
[02:34:36]  interacting with it. so in that case a very dumb diff works right like you can just like if it's a div the net and stays a div like who cares you
[02:34:47]  swap an attribute or whatever probably not a big deal, but it's more interesting when you have like an input or when. like you know basically you have these client components
[02:34:59]  that have state in them and now the you know the first time you did the list the order is 1234 now the next time it's 4321 and you're instead of
[02:35:09]  swapping the elements you're actually morphing the first into the fourth the second into the third the third into the second. And and so on so on so you
[02:35:19]  know there's a reason that the React team went with intermediate format because like now they have their VDOM which tells them like how to dip it's like okay this is
[02:35:30]  this has this key right you know you have those keys in React. So in fact we understand that this is a whole in the structure right HTML doesn't hold you could
[02:35:38]  put comments in there but like you know I think I'm hoping I'm kind of impressing that generally speaking HTML diffing is non keyed it doesn't keep model data
[02:35:52]  in sync with the elements it's associated with it. So between data being lossy and non keyed this is this is a consideration when designing these solutions when you're
[02:36:07]  using HTML partials right. Well I mean. I'm explaining to you how I'm actually solving this right. There's there's there are solutions to. Not aware
[02:36:32] . Of. Code structure. I mean. Astro solves this. Right. One way Astro solves it is that you can explicit keys. You can do right and put
[02:36:51]  them in the DOM like they have like what asked Astro. It will persist whatever like you can give it a name and then it will sing. So it's a
[02:37:00]  keys. But I do want to import. Oh yeah. I do want to import. And. And the other thing you can do is. Because islands are the only thing
[02:37:15]  you care about. It's possible. It's possible to do like. You can do. For most cases. You can. You can. Use. Use like he
[02:37:31] uristics. Because you know the type of island. Like it's only when you literally have. Siblings. That you kind of have this kind of problem. Like when
[02:37:40]  you have like. The same type of thing next to each other. But like. If. If someone has. An island and you insert a few elements in front of
[02:37:47]  it. And there's still just the one island. You kind of know it's the same island. Right. It's not impossible. It's also not the most
[02:37:56]  important detail. But I just wanted to. Talk a bit about this. Because. You know. If you think you're going to build this yourself. With Astro.
[02:38:06]  Or. HTMX. Maybe. You have to think about this. Okay. I think I made this one like a little bit too big. Okay. So.
[02:38:26]  These are just some things to think about here. This is on the get side. Right. So. You start kind of understanding a bit. Why. React. Design server
[02:38:37]  components. The way they have. Right. They might start with something. That's kind of simple. Like an HTML swap. But then. They needed to solve. These
[02:38:47] . Problems. Although the second one is probably less of a big deal. But they did need to solve these problems. To get to RSCs. Right.
[02:38:56]  This is the. This is what it takes to go from. Astro. To RSCs. With a view transition API. Or. To. Try and make your
[02:39:05]  HTMX work in a way that's predictable. With client side. Stuff. Or. Take your fresh. Partials. And make them work. Again. Similar.
[02:39:15]  Kind of. Kind of consideration. Okay. But. So the. React. Actually did a really good job. On the get side. But let's talk about mutations
[02:39:29]  now. Because. Like. On this side. You can kind of picture that. If you do everything right. You kind of get this best of both worlds. You
[02:39:37]  get. Quick loads. You get client side routing. You get. You know. You get. Persisted state. You get. A really. So you get good performance
[02:39:48] . You get. You know. You have your data. Everything works. And you're pretty happy. But. This is not the end of the story. Let's
[02:39:57]  talk about mutation. You guys want to talk about mutation? I. I want to talk about mutation. Or post. Or whatever. Because. This is kind of. Where
[02:40:07]  I. I was struggling a bit. This past week. So you don't have any water left. I went. On Twitter. Like I. Often. I'm
[02:40:21] . Off to do. And. I posted something. Mutation is a source of complexity. And server component. As models. Without mutation. Diffing isn't required
[02:40:32] . You could just swap HTML navigation. Nested router style. There's nothing to persist. Or diff. But to update the data on the same page. Now you need
[02:40:38]  to re-render everything. Okay. Let's talk about this. What I mean. Here is. Funnily enough. With everything. That we've talked about
[02:40:48] . So far. On the stream. You don't need. I did talk about. Lossy and diffing here. You know. But the truth of the matter
[02:40:56] . Is you don't need to. Like. Why am I even worried about. Keys and diffing. Why am I persisting islands. Is there actually. Like.
[02:41:04]  In. On the get side. If something. Wasn't inserted initially. And then you insert it. Well. In a client side library. You already know what's going
[02:41:14]  to happen. It gets rendered. And gets put in. There's no. You don't need to diff. Right. You're. The operation is. Replace
[02:41:20] . If you have a router. A nested router. Like the one. That they have so nicely. Grace. On the. On the. Remixed docs page
[02:41:32] . This one. That does everything by section. If I switch between. Subscriptions and invoices here. Do I need to diff. What's here? No.
[02:41:40]  I just replace it. With something new. If I. If I switch between. These invoices. In the list. I just swap this. In fact.
[02:41:50]  Even though. I was talking about the diffing. Being a little bit problematic. The diffing. Actually. Isn't needed. For just navigating around. While.
[02:42:03]  These rules up here. About the state updated. Islands can't hydrate. Client load. After all. All this stuff. Has to be preserved. We can.
[02:42:12]  Just ignore dipping. And just swap. And in fact. You know. If you're doing. These partial swaps. Do you have any. Like. Do these islands
[02:42:22] . Need to persist. Not. When you're navigating. To a new location. Now. If you're. In this location. Already. And there's an option.
[02:42:31]  To do something here. Like. Refresh. The. This list here. Or something. Maybe not the. You know. Or like. Update. One of these
[02:42:40] . Or something. Well. That's a different case. Because. You might. Have. You might have. Client state. That lives in that. In that component
[02:42:51] . And you don't want to. Like. Reset it. Like. If. If the client state. Was out here. Sure. But what if it actually.
[02:42:58]  Lives in this component. Because it doesn't need. Anything. Above here. You don't. In that case. You do want to persist the island. Right.
[02:43:05]  What if. I mean. The silly example. It's not silly. But like. The example people. Often give. Might be. Like. Picture you're playing a
[02:43:12]  video. And writing a comment. Right. Like. Often those. Will be in different sections. But pretend they were in the same section. From a router perspective.
[02:43:22]  Adding a comment. Shouldn't make the video. Restart. Right. But when you first. Navigate to the page. You're safe to just. Swap
[02:43:32]  it. That in. You don't have to worry about the video. Persisting. And I think. I think. That. That's why. I'm
[02:43:39]  talking about mutation. Because. If. You. You wouldn't actually need. To. Like. All the. Like. Fancy stuff. If you were just. Nav
[02:43:47] igating around. You know. Okay. And. Yeah. I have to admit. Diffing. VDOMs. Are very much. You know.
[02:44:03]  Set up for. You know. It. It. It makes a lot of sense. Why. React. Kind of. Arrived. At this model. Of course.
[02:44:11]  You can do really simple persistence. Right. You can like. Find all the islands. Replace the HTML. And insert them in. Restore it. And put focus
[02:44:19] . You know. After the fact. You know. Basically grab the focus. You know. And you can do a pretty good. Decent job. That's what Ast
[02:44:25] ro does. That's how we started our stuff. Before we. We're doing diffs. In the island router. Doing diffs. Is a bit better.
[02:44:32]  Obviously. Obviously. A full key diff. Would be best. But. Short of that. Even a non key diff. Is actually still pretty good. You know. Ele
[02:44:42] ments kind of. Basically stay where they are. But I just wanted to point out that the only reason we're in diff territory is that, see, picture, if this
[02:44:52]  was any other system, and it was, like, dealing with client state, you might not have to diff. It's because everything's kind of tied together on the server
[02:45:06] . Once you do a change, like, that whole panel is getting replaced. We're talking about only loaders for a while, and it's very minimal, but
[02:45:18]  also not very useful actions either. I disagree. I mean, maybe with Remix's loader design, it wasn't very useful because they didn't – Remix has
[02:45:27]  no – yeah, okay. It's because Remix had no way to invalidate, essentially. They just have to, like, call the granular, like, the coarse
[02:45:36] -grain loader function. The thing was, like, we had load our data functions in the router for a few – for several years now. Like, I
[02:45:48]  guess it was four years-ish, a little less. But I've seen these patterns elsewhere, so it's hard for me to put a date on it. But
[02:45:56]  the thing is, if you put, like, resources in it or tan-stack queries in it where you actually have invalidable data, then, yeah, you don
[02:46:05] 't need actions. But, yes, without the invalidation story, it's tricky. This is sort of where the challenge comes with RSCs and whatnot because it
[02:46:15]  makes sense to load all the data on the server. We decided that, like, half an hour ago, right? Let's load all the data on the server. But
[02:46:24]  – and arguably, let's load in a server component, I guess, right? Because, like, we're always loading on the server. But the problem is,
[02:46:34]  if you want the mutation story, you've got to complete the loop. So, data you load on the server – in the server components – has to be invalidated through
[02:46:45]  a server component flow where it redraws the server component. If you don't want your data to trigger the whole server component to go, then you need to put it
[02:46:53]  in the client component and load the data in the client component, which leads you to two different data-fetching models, essentially. Even though they both go back
[02:47:02]  to the server, the reason is, like, it's impractical from a very stateful, interactive, whatever situation – big table, swap-the-column
[02:47:11]  scenario – to, you know, do one small change that's not even related to redo everything, right? There's a reason why, you know, we use key-
[02:47:22] based invalidation these days and stuff like TanStack and why, like, the guy who, you know, Tanner, you know, promoted that pattern to work really good
[02:47:30]  in his – his applications. I'm going to see if I can find – I wrote a HackMD, like I often do. Sign in with GitHub.
[02:47:49]  And I talk again about something that I've talked about a lot on this stream. And we talked about it a bit earlier today when we talked about GraphQL. when
[02:48:08]  you start, like, if you look at the history of a mutation in client-side specific apps, not talking about the history in server, we've kind of backed out
[02:48:22]  from the most optimal approach and kind of tried to figure out, like, where we land. As I said, you can tell that server components work really well from the
[02:48:35]  get side. But mutations, we, you know, let's see if they fit our patterns as well there. It's kind of what I'm getting at because I
[02:48:43]  think this is the friction, not just for server components. I think this is the friction for Remix, too, because the Remix guys are all like, look,
[02:48:50]  our patterns, you can basically do everything you can do with a single page app. Why are people like, not feeling like they can build an app with Remix and
[02:49:00]  now they have even load level, route section level, like, should it, should it reload, like should route reload. But I think the problem is the types of apps
[02:49:11]  we're talking about here, which putting that pressure is they would never want to run the whole route section again. They would never want to reload all the data, not
[02:49:20]  just for the whole page, but not even for a particular route section. And in fact, they might want to reload data that's used in multiple route sections. So let
[02:49:32] 's talk about the slippery, the mutation, slippery slope. Direct mutation is where this starts. When you update a to do in a list, simply return the updated to do
[02:49:47]  and you're responsible for that. find the update yourself. So this is like when you go like, you know, you basically do a fetch to like put a new
[02:49:55]  title on a to do in a list, you know, you could be displaying the list, but then you, you like update it, the text, you know, and
[02:50:04]  then you click out and it triggers the save. So you'd probably just do a simple fetch and then set the state. essentially you might patch it yourself. You might
[02:50:13]  take the list of to do's and then go, okay, find the to do with this ID, update the data, you know, like we're talking maybe in Red
[02:50:21] ux and just set the new state and then your component will update. And the pros of this approach is a complete control of how the change happens. change happens. It
[02:50:30] 's a single flight mutation. You basically do a post, get the data back in the same request. You don't need caching for this and mutation or arbitrary. You
[02:50:38]  don't need to, they don't need to be a thing. They don't need to be like an action. You just like literally call it, you know, I
[02:50:41]  think we've all done this before. Yeah, I, I, I sometimes wonder though, if anyone tried to build the expectation, the type of apps we did today
[02:51:14]  with jQuery, see, I was building social media apps type things just coming straight out of jQuery. And I, I definitely did not feel like jQuery was
[02:51:25]  simple at that point. But I mean, everyone's done this before. And the pros, obviously, I just talked about, the cons are you always require manual mutation to
[02:51:37]  apply changes, at least some cases, even with defined schemas like GraphQL, what I was talking about is like, in a sense, even the normalized cache or Graph
[02:51:46] QL has a sort of thing to it. I realized that that's more automated. But like, generally, when you are doing this level of granularity on your updates
[02:51:59] , you almost always need to directly know like, where I'm updating it. And sometimes that's not in a single location, right? Difficult to apply changes that
[02:52:07]  pack more than one resource. Like, if you have a REST API. Like, sometimes that's not like a good fit. GraphQL is better, obviously,
[02:52:16]  because like, your mutations are like a defined series, but like picture, like, like, they're like an R, they're like an RPC, basically.
[02:52:22]  But like, picture, like, you have to do something that actually affects multiple resources, multiple places on a page, gets a little complicated. And obviously, all data is
[02:52:31]  required in the browser, as you need to manually update it, right? Like, that's kind of a given. I'm not saying we can stick on GraphQL
[02:52:43] . But let's, let's, let's continue going key based revalidation or query cache based thing, I kind of skipped over GraphQL, because it
[02:52:51] 's like an optimized version of the first one where we automate it. This is where you just kind of go, you loosen up a little bit, you're just like,
[02:52:58]  if a to do changes, I'm just gonna update to do's, I'm not going to worry, maybe I'll update to do ID one, but I'm not
[02:53:06]  going to like, get to the level where I'm like, automatically diffing this based on the schema or whatever. I'm just going to be like, okay,
[02:53:16]  this thing, updates, revalidates, example, tan stack query. Well, the thing is, GraphQL is like the most optimal, inclined perspective, but I
[02:53:29]  have a very hard time justifying, like the, the initial bundle costs that like, if I'm if like picture, I mean, obviously, I'm using react to
[02:53:38]  really hyper hyperbolate this situation. And next, if I had react plus next, yes, plus GraphQL is my baseline. I'm at 120 kilobytes
[02:53:48]  before I even started. Like, it's, it's just, it's, it's, it's nuts. Right, but like, if you're not going
[02:54:07]  to do that, then yeah, use Urkel. And if you're using Urkel, Urkel is basically this, but then you also lose, you're basically as
[02:54:15]  good as tan stack query. You actually lose, you're not in category one anymore. Yeah. So what I'm saying, pros, no need, stupid thing.
[02:54:33]  Give me a second. Give me a second. No need to manually update logic anymore. It automatically goes in the right place, propagates, right? Because you just
[02:54:41]  go trigger this key. Everything propagates, right? You can invalidate or revalidate as many resources off a single mutation as needed, right? You can
[02:54:48]  just go like to do's all the places, right? Caching is optional, at least with reactivity and that's, or is very easy to add. What I
[02:54:57]  mean is to be fair, almost all these solutions that work like this have a cache, but technically, like I did this when I built the original create route data for solid
[02:55:04]  start. You don't need a cache to do key based revalidation. Like if you build a UI renders once and you put everything there and then you
[02:55:14] 're like update to do's reactively, it's just going to re-trigger the fetch of the, you know, to do resource and then automatically propagate the data
[02:55:25]  out. There's no actual cache mechanism here. Like they use caches to do requests and all that kind of stuff. Like, but you don't need a cache for
[02:55:33]  this. Good thing. Same, same with this. Cons. So it's generally multi-flight first you request does a mutation and then it indicates revalidation
[02:55:44] . And then the second request does their invalidation. So like you might go, I'm going to update this to do now. Don't get me wrong. People do
[02:55:52]  cache manipulation directly in react query. I'm just saying like the pattern I'm talking about here is where a lot of people fell into after a while, which is simply like
[02:56:00] , I don't want to deal with the cache. So I literally update to do and then say invalidate to do's. And then it does a second request to
[02:56:07]  go fetch all the to do's and make sure it's up to date. This does help keep things in sync everywhere. But you know, like this is the magic
[02:56:14]  of it. Now you're not manually writing the cache. And again, all data is required in the browser. Right? So you can see how this dealt with. This
[02:56:21]  really solved was it made it a lot easier to impact more than one resource. So like this, the direct manipulation without like a crazy, you know, with a very
[02:56:32]  involved client generally ended up leading to it easy to tear stuff. Right? Because you have the manually patched up. You missed things. Multiple resources. Complexly grew as
[02:56:43]  a number of different types of queries and different places those places touched. This made wiring that super easy. Solves that. But in trades off gives it multi flight.
[02:56:53]  Essentially. So then we got route based revalidation. Or remix, right? It's on each route loader action as a way the mere traditional MPA website
[02:57:05]  will still maintain, you know, single page app architecture. Again, no need to manually, you can invalidate many less resources off single mutation. And actually don't
[02:57:14]  have it here, but there's no, like, there's no client side cache. So that's kind of a pro and it can actually, because they built in the
[02:57:23]  whole, uh, server part of it is less data fetching logic required in the browser. To be fair, if you're using react router with client actions right now,
[02:57:32]  like we're just using actions without it. Like this isn't true. This is, I'm, I'm talking about specifically remix implementation using server stuff because, um
[02:57:43] , it's part of the, it's, it's more along the slope where I want to get to. There's, there's obviously the, you could kind of
[02:57:49]  think of react routers stuff kind of in the middle. Um, but yeah, cons again, still generally multi flight, right? Use remix. When you do mutation
[02:58:00] , you do the change and then you redirect to the next page, which then goes back to the client. And then the client router goes and requests the next page and does
[02:58:07]  the next set of actions. So it does two requests again. Right. Um, there's a bit of a loss of granularity at best. It's a route section
[02:58:16]  level, but it could also be full page level. Right. Right. Cause mutation generally in remix, um, you, the, if you just don't do anything
[02:58:26]  and you just do like, you know, you have all your loaders and then you're like, do an action. It actually refreshes all the data on the
[02:58:34]  current page. That's like the default. And to get around it, you need to go like, should blank happen? Like, should this update? And, and that
[02:58:41] 's not too hard to do, but like, basically this doesn't really care about the routing level. They, and the granularity is like slices through your app, like
[02:58:53]  a different way. This way is like route section. And then obviously still all data required in the browser hydrated, which is for all of these, right? Essentially.
[02:59:03]  It's just another one of those, like where you're kind of like being half serious. Even with, yeah, yeah, sorry. I was talking about, uh
[02:59:27] , Apollo. I don't know what real, what relay looks like. Urkel is not that bad. Urkel is like 10, nine kilobytes. So your
[02:59:36]  next page with Urkel is only going to be like 81 when you get started. 82. Yeah. I mean, it is, but mechanically that makes a difference for
[02:59:50]  the sake of my comparison. Um, okay. So let's go to server components. And in a sense, I think this is true of generally all the partial,
[03:00:08]  uh, HTML partial solutions that we were thinking about here. Um, but like, this doesn't have to just be related to react server components. So again, no
[03:00:20]  need to manually update. Check. Can invalidate as many resources. Good. Single flight mutations. Single flight mutations. So this is the biggest difference. While these are
[03:00:30]  multi flight, we finally get the single flight mutations back, right? You get single flight mutation out next page in, so to speak, or the replacement page. And
[03:00:42]  then again, still like remix less data logic rendering, even more so in the browser. This actually makes code. It's not just removing the fetch logic. You can actually
[03:00:53]  reduce code size here because you don't need the code for rendering the components. And I put the cons loss of granularity, generally full page, cache recurrent on
[03:01:02]  a server issue, which is safe work. What I mean by that is there, there's basically no way. No way. And this is kind of what I was
[03:01:18]  trying to get to with this tweet thing I was doing. I just want to think of how to explain this if, if you load your page and your page has,
[03:01:38]  I don't know, three route section levels. The top most level doesn't really have any data in it, except for maybe the current logged in user information. The second
[03:01:50]  level has, has, I don't know, let's maybe some, let's say we're in an admin panel or something. So it has some organizational data about
[03:02:01]  the, about the current organization that you're on. Maybe it has some specific departments, categories, maybe five or six different data sources. And then the, then the next
[03:02:14]  level down is when you're getting into like actually showing stuff where you're actually showing specific data, whether it, maybe it's some statistics, some charts, some user information
[03:02:25] . You've got some like statistical data about some kind of product usage. You have some data about, I don't know, sales dates, order inventory. So
[03:02:39]  let's say another eight or so different data sources. Right. you're talking about the nested. Yeah. I mean, you're right. I, I visually
[03:02:56] , I'm, I'm, I'm, I'm basically talking about something like this. Right. Thanks. Um, but you can get the idea. Like there's
[03:03:01] , there's, there's, I'm talking about something even more complicated though. Instead of going to a fourth level, maybe there's like this page scrolls and
[03:03:07]  there's like a few different charts and panels on it. You know, what I'm trying to get at is if you update. one piece of data anywhere on that
[03:03:22]  page, you end up refetching all the data for the whole page. It's, it's helpful. Nested routing is so funny. It's been around
[03:03:39]  for like, again, like 12 years to my knowledge and client side framework since 2012, I think, or 2011. But like, this is still like my favorite example to
[03:03:47]  try and teach people. I even use this on a slide in a presentation. Once I like took a video of this of me scrolling it. And then I like put
[03:03:55]  a GIF in my, my slides anyways, but what I'm, what I'm trying to get at is, uh, not spa mode. So I'm trying to
[03:04:09]  remember where, where was I back on this? Is that like, you, you, if you're in a spa, like a single page app and you decided to update
[03:04:21]  some, a single data field. You would send like in a direct mode, you would just like go, okay, update this data and you get that piece of data
[03:04:31]  back. And then you go update the model and it might in react cause a bunch of re-renders, but you're not actually sending much over the wire and you
[03:04:37] 're actually updating one little thing. If you're using can stack, you know, do it like, yeah, you replace that user. And then like, it might do
[03:04:45]  a bit more of a work, but essentially when you go to the server, you're only getting that user's information. But once you hit remix or next JS,
[03:04:56]  like with RSCs or whatever, you are like both the loader pattern and the RC pattern. You're basically just saying, yeah, I'm blowing up the
[03:05:08]  whole thing. I'm going to refetch everything now to be fair. The RSCs might be, are the, you might be on route based revalidation
[03:05:16] . You might be like per route section. And don't get me wrong. I think with an RSC, you could probably do it. Not if you fetch inside
[03:05:23]  the components, mind you, wouldn't be easy to do it there. But if you hoisted the loader style with server components, you could probably, you know,
[03:05:31]  at least narrow it a bit. But you have to understand some of the challenges with this stuff is like that organizational data that I was talking about in my example, where I
[03:05:39] 'd like the three levels. You also might be using it in the third section. You might be showing the organization's name. So like, even though the, what
[03:05:48]  I was talking about where there was like one data source, five data sources, six data sources, that last six is usually actually more like 10 because it's overlaps with
[03:06:01]  the number of the ones from the previous section above. Right. So like all it takes is one of those to invalidate and at any given level, like if it
[03:06:14] , if, if, if the, and you have to refetch everything. So like if you update the organization information in that second level, like some piece there, that
[03:06:27] 's also in the third level, you're fetching all of the second level and all of the third level. Again, um, basically the only solution is to cache
[03:06:41]  it aggressively. Like next.js is looking at doing almost like a key based cache on the server so that like, you can basically, um, not have to worry about
[03:06:53]  this, but the challenge with this, or it's not a challenge. It's the thing is I'm sure someone's going to tell me, it's like,
[03:06:59]  Brian, we always use memcaches on the server. Like what, why are you complaining? Right. Like it's standard practice to use Reddit or sort of Redis
[03:07:07]  or some kind of memcache, you know? And yeah, I've, I've used tons of memcaches over the years. Um, you know,
[03:07:13]  to optimize queries, I've used it to, you know, basically like we used to keep in memory the, the initial feed page for the most logged in users.
[03:07:24]  Um, so that like when they visited the site, they always had their feeds like immediately. Um, we used it to, um, optimize, uh, stuff around logged
[03:07:35]  in users. Um, like we had different cache lives, LRUs, done tons of optimization around the memcache. Um, right, Ryan, yeah
[03:07:52] , thank you for putting that out there. What I'm getting at is yes, you did that. We all do that. Right. If there's some performance things
[03:08:10] , the key heavy traffic area, but this isn't like that. This is like, I don't know. I depends on the permission model of your application. How much
[03:08:19]  is this tailored to what like each user can see? Like I dealt with stuff that was very organizational, very, very private, very secure. Um, you, it
[03:08:30] 's a whole different thing from optimizing common queries in a few places, especially stuff related to like common use users and basically caching every single thing that comes into your system.
[03:08:43]  Because this architecture is just, let's always like, whenever anything changes, let's do it all. And don't get me wrong. In a sense, you could say
[03:08:53]  MPAs like that, but MPAs never had the expectation of apps. And that's like when the split happened, right? Like if we had to do
[03:09:03]  everything every time, you know, I mean, you remember MBC on rails and stuff and splitting off model view controller. And I, I, yeah, I know you
[03:09:20]  guys are just being trolls at this point. And I, yeah, I think that's the, yeah. I think that's the, yeah. I think that's
[03:09:32]  the, yeah. I think that's the, yeah. I think that's the, yeah. I think that's the, yeah. I think that's the, yeah
[03:09:36] . Responding mutation node invalidation pushes local source. Yeah. Yeah. Yeah. But I think that requires a staple server if you want that to happen on the
[03:09:42]  server side. I think. Yeah. Right. Yeah. Right. So. Yeah. So like. Like this is what I was going here. Moreover, I
[03:09:52]  talk about a stateless, the driving part of JS framework design. It's acknowledging infrastructure constraints, but unless my understanding is wrong, server-side cache is a must
[03:09:57]  for performance RSC mutations as your app scales with complexity irrespective to usage. I mean, it's, you're not going to the mem cache because you're
[03:10:02]  hitting performance. You're going to the mem cache because it's the architecture. Yes. Any mutation goes to server, but when you get there, save, save having a
[03:10:05]  cache. It will need to refetch all the data to render the pager card. So what's updated? But a cache that persists, is, is, is
[03:10:08] , is, is, is. Yeah. Yeah. Yeah. Yeah. So like, like, like this is what I was going here. Yeah. So like. Like
[03:10:15] , this is what I was going here. Moreover, I talk about a stateless, the driving part of JS framework design. It's acknowledging infrastructure constraints. But unless my
[03:10:19]  understanding is wrong. Server-side cache is a must for performance RSC mutations. I'm going to the mem cache because it's the architecture. Yes. Any mutation
[03:10:23]  goes to server. But when you get there, save, save having a cache. It will need to refetch all the data to render the pager card. So what
[03:10:29] 's updated, but a cache that persists across quest needs to live in a centralized place to serve multiple deployed functions. Sounds like infrastructure constraint, right? I I'm less
[03:10:38]  worried about that. This was just kind of a realization that I sit out loud on Twitter. I, I, I, I, it's just like architecturally, it
[03:10:46] 's a consideration. And I started trying to think if there's other ways to solve it. And it's, it's tricky in the spa world. The biggest thing
[03:10:53]  that RSCs bring is single flight mutations. And it occurred to me that if you had a route aware key based revalidation, well, guess what? That
[03:11:06]  could actually be single flight because your actions. Could basically trigger reeve like tell the server which data needs to be reloaded. And it knows what route it's going
[03:11:21]  to. So from that perspective, it could just send the data back instead of the view code back. And then the client can apply the data changes and then do the updates
[03:11:31] . Um, do it single flight. Okay. Okay. Essentially. So. I'm not suggesting this the way to go because I'm fortunately, this does not solve
[03:11:46]  what we came here to do HTML partials for because you need all the data and code in the browser. So you didn't actually solve partial serialization. You did
[03:11:52]  not solve, um, partial, uh, hydro, uh, execution. You didn't solve partial codes being sent. Okay. What else can we do? Talk
[03:12:06]  a bunch about resumability. It doesn't really matter because resumability also doesn't solve this completely. Cause I was sitting here and I was like, just,
[03:12:13]  it's, you know, things aren't, I'm not completely happy with it. And then some people responded to me, um, trying to find devs response
[03:12:23]  in specific because we started another thread that I think is actually really relevant. Yeah. If you look at my list here, I tried to come up with an impossible list.
[03:12:46]  Yeah. Okay. You guys are still talking. I wonder if you build state graph where the nodes are on the server and some are on the client. So for consumers
[03:13:04] , it feels like it's all local. Yeah. I mean, I know some people working on similar problems. Um, that's actually, yeah. I put it
[03:13:15]  back on the table. Yeah. So you guys are saying like, we need staple servers. I don't, the whole move in infrastructure is not suggesting we're going that
[03:13:23]  way. But the reason I want to pull this list out is because I think it's relevant. I want routing with persistent client state. I want an initial serialization
[03:13:33]  savings that I find in islands. I want granular invalidation. I've come to expect in client apps. I want hydration savings of resumability or raising any of the
[03:13:39]  partial solutions. I don't need, like, they're all kind of good enough at this point compared to what we have today. I want all three. I want
[03:13:45]  all three. And the funny thing is if you actually look at this list, every solution that attacks us doesn't solve all four. For example, if I'd say R
[03:13:55] SCs, which is probably the closest I get persisted client state. I get initial serialization savings of islands and, and I get hydration savings of resumability
[03:14:07] . Oh, no, I don't get that. Actually, nevermind. I don't get the instance. Yeah. So, so right now RSCs get,
[03:14:13]  get persisted client state and the hydration savings of resumability or other partial solutions. It does not give me initial serialization savings of islands or granular invalidation. If
[03:14:22]  I look at Astro, I'm going to argue. that I don't get the right routing I want right now. Um, but I guess we could, but
[03:14:39]  yeah, granular invalidation becomes tricky. If we get to like, I can't speak on it because Astro isn't an actual solution. So I shouldn't use that
[03:14:49]  on there. Like I I'm trying to pick a solution. I can build an Astro that would do all these things. Um, so I, I shouldn't really
[03:14:56]  include this in the list, but because whatever I could build, Astro presumably I'd be building with solid start. So that's like the same thing. So,
[03:15:03]  but yeah, basically right now that the current solution that we're thinking with these partials, the HTML does not give us a granular invalidation. I think that what I
[03:15:12]  described for RSCs applies to this whole category. So the one benefit is you get the over RSCs that potentially get that initial serialization savings. It,
[03:15:22]  but if I look at quick, I don't get client side routing. If I get all these three, and then if I get client side routing from quick, I don
[03:15:33] 't get this one. So basically it can do both modes, but it can't do all four at the same time. So like this is kind of big right
[03:15:50]  now. There's basically, you don't get, I don't think you get this and this. Maybe this is innate and it should be obvious, but you don't
[03:15:57]  get both of these. You don't get the initial serialization savings violence and the granular invalidation. That you've come to expect in the client in a single.
[03:16:07]  Yeah, I guess it's, it's actually this in a client rent client app page. Cause you can get these two things. Oh, actually. Hmm. It's
[03:16:18]  arguable. My point is that nothing does all four. Okay. Okay. Okay. I'll talk about that in this week in JavaScript. It's actually. All
[03:16:38]  he's saying is that RSCs are essentially just a way of breaking two trees apart. Essentially. I mean, that's my interpretation. He'd probably have a slightly
[03:16:48]  different one, but it's about weaving two trees together. It's not about where those trees are run. Yeah. Partials. I mean, it's, it
[03:16:58] 's all this. It's, it's all the same thing, right? Like fresh is, uh, does not like, it's just, I think it's inherent
[03:17:05]  that, that from, I mean, okay. The argument is if you have partials, I mean, this is the room where there's, where there's the
[03:17:15]  most space here is if you have partials, is it possible to organize them in such a way that you can get relatively granular invalidation in a way that isn't prohibited
[03:17:27]  from an API sense. Okay. And then we continue talking, talking here because dev was like, Oh, so you're saying with like cache, you can't,
[03:17:35]  not really. And, but then eventually we get to a point where he shows me parallelized routes, um, from next and view has these as well. And in
[03:17:47]  a sense, react still with circuits insisting, you can fetch anywhere in the component kind of gets in the way of like this idea. But if you had parallel routes
[03:17:58]  with hoisted data fetching at each of those like separate slots, now suddenly, potentially you can reduce some of that weaving I was talking about where, you know, you
[03:18:11]  hit a point and there's six things or 10 things at that level. Now you can actually, perhaps only, uh, you know. Like weave, um, like
[03:18:28] , like less than them can be separated. I still think these things get entangled a lot, but there is a question that if you could somehow tie the portions of the
[03:18:38]  page specifically to the data in a way that wasn't prohibitive, maybe there's something on this model. The other, that's one thought. The other approach would be
[03:18:51]  don't loosen one of the constraints that you have when designing these things. Like say you don't care about how much JavaScript you send to the page. Then it's
[03:19:00]  possible to do, uh, HTML partials on new navigation and do client updates on after the fact or something. You know what I mean? Like there's a few different
[03:19:11]  options. Both of them are very complicated when you consider what it would mean for API or bundling. So people would have expectations. Cause like, if you did what
[03:19:18]  I just said there, where you navigated with HTML partials, but then did all updates on the client for mutation, then, then, uh, like people would have
[03:19:31]  that problem. Like, is this server, is this like picture you had, you still need the, the, like the separation that I talked about, like with the
[03:19:36]  islands, but then you'd have like things that they thought were outside the islands running on the client. That doesn't make sense. Right? Like use client is more
[03:19:44]  of a suggestion than a rule. It's just telling you where the serialization boundaries are. I mean, it's kind of quick, like, right. Obviously if you
[03:19:50]  had reasonability, you might not care about the size of code as much cause you wouldn't need to run it. But like, this is kind of a zone where
[03:19:56]  like something needs to give and the pieces aren't quite aligning. Right? If it's app versus site again, you start wondering why you're doing all this.
[03:20:14]  The, the, the hope is that it's not. That's a, I thought Alex Lowe wrote this. I'll start GitHub pages tutorial, the routing.
[03:20:44]  I think Alex Lowe wrote this. I, sorry. This, this is just a complete aside. I shouldn't put this on the screen. Second. Let me see
[03:21:02] . Um, I'm just looking for article section. I feel like this article actually literally exists that it was published last week. Yeah. I am not imagining things.
[03:21:17]  Deploy a solid start app to GitHub pages. I don't know. Does this example not have routing in it or something? Let's. Nope. Looks good.
[03:21:33]  Configuring the router. Yep. Okay. Here we go. Problem solved. Yep. And eBay is an MPA as well. Yeah. Yeah. Yeah. I
[03:22:00] . So. This was written January 11th. It's already out of date. Probably slightly. Yeah. Anyways. That's just, that's a starting point at
[03:22:23]  least. Yeah. I don't know. I, I, what I'm trying to get at here is that. There is a definite trade off here. Like I think
[03:22:35]  we can take client routing. Or sorry. Spa mentality. If you forget the code stuff. Like even today we can take it to a point. This is like in
[03:22:45]  a zone where I think Tanner and I have been living recently where we can get like a lot of the benefits of RSCs without RSCs, but not get,
[03:22:56]  but again, you don't get the actual core three savings or partials that are, that it was why we're doing all of this. It's just like spa
[03:23:06]  development has never been better. There's a path here. That's actually quite. Basically. If you don't care about that page load performance, I think single page app
[03:23:16]  SSR actually has more room to grow, to be even better than it is today. You don't have, like, it doesn't have to go to RSCs
[03:23:25] . That being said, I think I want, I've been trying to solve the problem that RSCs solve for the last couple of years because I think it's
[03:23:35]  worth it. I'm just pointing out that there is a whole zone of SSR spa that is, is even better than it is today. Yeah. We sneeze and
[03:23:55]  it's key change what UI needs to re re re render. Right. So we're talking like data dependency kind of graph thing. If we did that, that it becomes
[03:24:02]  a little bit more interesting, but it's harder because these things get kind of entangled and then trying to mix the partials back together. But I mean, it's
[03:24:10]  not impossible. Like if you made rules, I was going to sketch something out, but I didn't have a chance to this morning. I was working on some bugs,
[03:24:15]  but like, if you think about it, the one state that persists across both sides of the router state. So if you basically had a rule that within the server
[03:24:24]  tree, you could have fragments that could only take the router status props. Like you can't pass props to them. It's possible that you could tie those to data keys
[03:24:34] . Okay. Okay. Sorry. And then essentially send back response, which sends all those little pieces that update based on the invalidation key and then replace them into the
[03:24:49]  client. And if you'd have to collect all the existing ones, because some of them that are even children might not have gotten re rendered, but that's fine because you
[03:24:56]  can't pass props. So you can't trigger the re rendering. And then like, essentially you could just like piece it back together. Like I haven't worked through
[03:25:04]  it, but like, it might be possible to do that. I just can't picture what the API would be. That would be like pleasing to look at. But,
[03:25:11]  you know, I started being like, huh, it'd be funny if there's like use partial, right? Like, like, like use client or it seems like
[03:25:19]  we're, we might be still missing one of the core primitives to this and you want to stitch it together. This is why I'm like, it's funny.
[03:25:29]  Fresh offers both the single render partial scenario and the like HTMX style. Having it distributed is a new version, like, like having a different endpoint for each part of
[03:25:39]  the UI, you know, like, like the, like the way the HTMX, like endpoints work. You know, obviously you can set them up the
[03:25:46]  right way or whatever, but it's a new version of this, right? We need to get, do what I'm saying and get back to something like this, but
[03:25:54]  separate kind of the same thing signals did for react, you know, where we kept the lines, but we made the pipe smaller. So, is it doable? I
[03:26:06]  don't know. But you know, this is why I'm talking through to you all because HTML partials do have some real trade offs here. You could like stick
[03:26:22]  an old school client app, like a Tanstack app, you know, on, inside your server component or whatever, inside your island. But the thing that's really
[03:26:31]  challenging here with not unifying the data model is like, you almost don't get the benefits in the same sort of way. It'd be really nice if it could
[03:26:40]  be the same data model. Yeah, I mean, it also gives the end user a better experience at the cost of that. So it's like, it's
[03:27:21] , it's tricky. I don't think this is just like a, like a, the provider is trying to like, get you to buy stuff. Although I, as
[03:27:30]  I said, it's, it's a little bit awkward that like, suddenly this architecture, you're not just deploying a function. You need like a bunch of memc
[03:27:36] ache. I mean, that's a little bit awkward, but like the ultimate UX should be better. Right. This is what I was talking about before. It's
[03:27:51]  a lot of the similar arguments to JS on both sides, giving us the ability to per user, give them a better experience at the cost of obviously server resources. But on
[03:28:03]  the other hand, like stateful servers is the extreme of it. And I see a lot of backend people being very pro stateful servers. So like, I,
[03:28:13]  I, you know what I mean? Like, you know, if, if, if you think you can just sit there and keep web sockets with all your customers,
[03:28:19]  then I think anything react is, or anyone's kind of suggesting here is probably fine. if you want to talk about scaling stuff. Oh yeah. Let's make
[03:28:39]  hydration faster. Hydration. I'm not actually worried. Like, I feel like we, we know how we can, like, we have multiple ways to solve hydration at
[03:28:57]  this point. Um, like the initial page load, it's solvable, but the mutation problem is less. I hate that we keep on recovering, uncovering
[03:29:10]  new, new problems, but I mean, I guess this is the nature. Otherwise we'd already be here. Oh yeah. Yeah. Sorry. Yeah. This is,
[03:29:27]  if you ever go on the solid discord in the next channel, I post stuff like this occasionally. It's really rough thinking of mine. I just wanted to kind of talk
[03:29:33]  about it. Cause there's a big inspiration here. Okay. It's 3:30. I don't know if I want to say anything more about HTML partials
[03:29:40]  here. I just wanted to show people that this is why I'm rarely satisfied when people are like, Oh yeah, just, you know, put HTMLX in there.
[03:29:49]  And it's like, and you know what I mean? Like, like you basically have to come off different assumptions. And now you could argue that my assumptions are wrong.
[03:29:58]  And I think that might be an interesting conversation, but like when we're talking apps, I don't think they are. All right. How are we doing peoples?
[03:30:08]  Okay. I want to let's, let's, uh, yeah. Wow. Level seven hype train emote. This is. Thank you guys for earlier. Very
[03:30:14]  much appreciate it. Anyway. Okay. Okay. Okay. Okay. Okay. I want to let's, let's, uh, yeah. Wow. Level seven hype train
[03:30:24]  emote. Level seven hype train emote. This is. Thank you guys for earlier. Very much appreciate it. Anyway. Okay. Hopefully this was worth something.
[03:30:34]  I, I didn't show off my demo again, but it doesn't really matter. It's just my early HTML diffing work. I, I, I
[03:30:55]  don't know if it's actually that interesting in its current state. Um, because I don't think it actually, it's, it's where it's, I
[03:31:10]  feel like I already described how to build this when I was going over the Excalibur when I was talking here, like basically how to make these rules work. So
[03:31:20]  yeah, let's, let's skip that. Let's, let's just continue onwards. Um, let's talk about, I think we should probably get into this week
[03:31:27]  in JavaScript pretty soon. I could talk about my article as part of it. No, actually, no, let's do the article first because it, it, it
[03:31:35] , it deserves its own. It's a own section topic here. Um, again, like the stream where everything requires a little bit of prior knowledge. This article is actually
[03:31:48]  just the prequel to the article that I was actually intending to write. This happens all the time. I want to, I want to write an article about a topic
[03:31:55]  that I think is important or relevant. And then I end up in a zone where, um, essentially I realized that I haven't set enough basis. So I accept
[03:32:09]  the right article before the article. So what was this article? Derivations in reactivity. And before I start, um, and kind of get into a bit about
[03:32:18]  this topic, I want people to understand that this affects every one of you, every single one of you who use a JavaScript framework. This article is as relevant about react
[03:32:28]  as it is about, um, about, uh, you know, view or angular or whatever. Uh, there's actually a comment here where someone was like, still
[03:32:40]  need to crank through this, but dang it. This is why I like react plain values derived value to just assignment. Const derived equals a plus B. Yeah. Yeah
[03:32:50] . Um, yeah. I mean, and, and this is no slight innate because this is, this is generally what the react team's message is. Right. About why
[03:33:00]  this is, why this is like, you know, what, you know, I saw a whole conversation about this the last week. I think they were, they were
[03:33:08]  like talking about like how they keep playing values and why they use, why they're looking at forget and all this stuff. And I'm just like, the problem is if
[03:33:14]  you understand how these things work, you know, it's like, it's not necessarily the case. You know, especially when talking about stuff like forget, because when we
[03:33:24]  talk about drives values and the reason I'm saying it applies to react, this is actually kind of a play a bit on Dan's, uh, thing we were looking at
[03:33:32]  earlier. Um, sure. It's not the same context, but. Oh, I like, I could probably write it in a solid playground to show you what,
[03:33:40]  what react is, but. In a sense. Yeah. Let's just do this. Let's. In a sense. React is this. Cont. Date equals create signal
[03:33:53] . And then what do we want? Cont. V Dom. Equals. Create memo. Um. Render. State. Create. Effect. And yeah, we
[03:34:07] 're missing it. Let. I mean, it's funny. Solid syntax lets me do this. Yeah. Okay. Yeah. Okay. Yeah. We're missing it.
[03:34:17]  Let. I mean, it's funny. Solid syntax lets me do this. But like not everyone probably aware of this, but it's, it's along the lines
[03:34:37]  of this diff. V Dom. Actually, let's go. Next. V Dom. Previous. V Dom. Return. Next. V Dom. And. Const
[03:34:52] . Next. V Dom. Equals. V Dom. I. Does this make sense. No, this doesn't make sense. I always talk about reactivity being
[03:35:20]  a control of how granular something is. We don't return. Solid doesn't return cleanup functions from effects. Solid returns previous values. It makes it easier to do diff
[03:35:32] ing. Because you can call on cleanup everywhere. So yeah, our solids. I'm using solid syntax here. Okay. So this doesn't make sense. Okay, good
[03:35:43] . Then I'm glad I did this. I, I. Yeah. What I'm trying to say here is that like. Essentially. There's state, which could
[03:35:58]  be whatever you want it to be. Whatever. And then when that state changes. You run the derived. Thing. And in react. V Dom is derived state.
[03:36:15]  There might be other state in it. But technically here. There's. No. Side effects. Right. So. Essentially. You're creating. Something. I know creation
[03:36:30]  is not supposed to be like. Like. Effectless. But like what I mean is like. In theory. What you're doing here is you're doing the pure part
[03:36:38] . Doing the calculation. And then the effect grabs that. Diffs it against the previous. And then stores the. It's so that the next time around. And
[03:36:46]  every time the state changes. You then do the pure render. So what I'm. I'm basically trying to say is. V Dom is derived state. It's.
[03:36:53]  It's. This is like a fundamental difference between. Like a V Dom library. Like react. And like a signals library. When trying to come across. Is that the
[03:37:01]  actual V Dom. The thing that the output of your components. Is actually derived. It's like a transformation. And then. The actual side effects happen. When you
[03:37:11]  diff. Between the two different V Dom's. That's when you actually do. The actual rendering. Even though. React likes to call this render. So. I
[03:37:24]  was just trying to say like. This is. This is kind of like a really. It's not like showing components. Aspect of it. But this is react.
[03:37:30]  Kind of. Essentially. So when we talked about. Derived state. We're also talking about. Um. The whole rendering process. Of react. So technically.
[03:37:42]  Memoization. Use memo. Um. React dot memo. Use callback. Are all forms of like. Sub derivations. Within the. The main derivation.
[03:37:52]  Here. Of the V Dom. So. Technically speaking. React is just. Like this big. Like transform. Like derivation machine. So. Technically speaking. React is
[03:38:03]  just. Like this big. Like transform. Like derivation machine. That runs into. An. Effectful diff. That's. That's. Kind of. I
[03:38:11]  mean. I guess. If I'm using. Solve syntax. Let's make this. A render effect. But like. I hope. That's. Somewhat clear
[03:38:21] . Anyways. Hence. What I'm trying to say. Here is. Derivations. Are relevant. To. Everyone. And I actually. Saw. A little.
[03:38:34]  C. Dodds. Actually. Did something about. Like run an article. Don't sync. State. Derive it. And this is. This is all about
[03:38:44] . How to use. Like don't use. Use effect. And all this kind of stuff. The like. Not framework. Authors. Version of this article.
[03:38:52]  I found this. After I published. Because he was. He was trying to explain. Like how. All the patterns. You should use. To derive. Instead. Of
[03:39:01] . Sync. No matter. Which framework. You use. Derive. Don't sync. No one. Wants to sync. Yet. Every user. First
[03:39:12] . Inkling. Is to sync. All right. Okay. I did look at it. Um. So. Getting back. To the. Topic. At hand
[03:39:38] . Here. What I'm trying to say. Is. That. I wrote. What is it? Introduction. To. Fine-grained. I wrote.
[03:39:50]  One of my favorite articles. Probably ever. Was this article series. Where I wrote the two parts. About. What is. Signals. Fine-grained reactivity
[03:39:58] . And how to build a reactive library. From scratch. And the thing I do. That we always do. It's so funny. I basically took the example. From
[03:40:04]  this article. And used that as my starting point. Because when. When I asked. When asked. How to. Uh. Yeah sorry. This explains the behavior.
[03:40:12]  But if I go into like. Building a reactive library. From scratch. We get to a point. Where we're like. Explaining how all the updates happen. I
[03:40:18]  do this in every conference talk. You know. Explaining how. You know. In 40 lines of code. You can write your own reactive library. But then when I
[03:40:25]  get to. Derivations. And go. Okay. Well. How do I. Create. A memo. I go. Single. Create effect. Set. As.
[03:40:36]  And I'm like. In reality. It's harder than this. And call it a day. Right. So. What. I. The thing is. Because.
[03:40:46]  This is kind of. Where I started here. Because. Every time. Someone teaches you reactivity. It's usually like. Here I have a state. Hello world
[03:40:54] . You know what I mean. Like. State. Effect. No one talks about. Derivations. Even though they are. By far. The most important part.
[03:41:03]  Because they are. Incredibly complicated. So. This is. Really. My intro. Article. Essentially. To this topic. So. I. Want to talk about
[03:41:14]  this a bit. Just to see if anyone has any questions. Or points. Because as I said. Like. I'm gathering. No one expected me to do this.
[03:41:20]  So. I. Want to talk about this a bit. Just to see if anyone has any questions. Or points. Because as I said. Like. I'm gathering
[03:41:28] . No one expected me to do this. So. I. Could have used my pseudo code. That I used in the article. I suppose. To make it. But
[03:41:36] . Essentially. I chose. For this article. To just. Use. No frameworks. Actual syntax. Not use dependency arrays. Just like. Come up with like.
[03:41:46]  A simple language. Of state. Effect. And. I think. I use. I use memo. For. Computed state. Process. Or. Derivations
[03:41:58] . And. The. The whole point of this article. Is that. Essentially. This. Which is what I just showed there. Is not. How memos. Could
[03:42:11]  ever work. And. That's because we care about consistency. And. And. You can see it. Actually. Again. In that playground. Because what I'm saying
[03:42:23]  is. In terms of reactivity. The. The cycle. Goes. You update the state. Then the framework. Runs some pure calculations. And then it runs
[03:42:31]  the side effects. Like updating the DOM. This cycle. Is. Actually. The. The three primitives. In solid. But in a sense. A lot like
[03:42:39]  the hooks API as well. But this is. This is like. Uno dos tres. Like. Here we go. And. This. Cycle. Is what. Every
[03:42:50] . JavaScript framework. Does. Essentially. We need the UI to be consistent. We have to make sure that. We have all the information from the state update. To
[03:42:57]  be able to run the side effects. This is. This is that drawing I did. Again. You know. This is. Cycle. Essentially. Yeah. And
[03:43:12]  the. Do you know why they can remove. Memos. In react forget. I guess. It's because. Again. Because of this. Because the whole thing's
[03:43:22] . Wrapped in. One. Big. Pure. Calculation. So to speak. What they're doing is. They're not actually removing memos. I
[03:43:30]  know you're being facetious there. They're just. Photo generating memos. For you. Essentially. Yes. This. There are. Exceptions. And
[03:43:49]  this is actually. Important. Because. Different. Types. Of. Tools. Can't actually. Aren't capable. Basically. Different types of. Different. Project
[03:44:01]  derived state. Can accomplish this. Better or not. Essentially. Which is part of what I want to talk about. In the article. Because. Because. Essentially. The
[03:44:10]  guarantees. We want. For the parts that we care about. The effects. Apply all at the same time. So you don't like. See something different than what
[03:44:17] 's behind the scenes. So everything is consistent. It'd be terrible. Like. If. The user thinks they're performing one action. But they're actually performing a different
[03:44:25]  action. Because what they see is not what they get. You know what I mean. Because you always trust the user to be right. But what if. Like.
[03:44:32]  Your. Framework's inconsistent. And the user thinks they're doing. Something that they're not doing. Like. Something toggled. But didn't update in the UI
[03:44:38] . And then they press the button. And it's the wrong state. You get the idea. Um. So. I mean. It came down to the difference between.
[03:44:46]  What's the difference between. Driving upper name here. And using the effect to synchronize it. So here. We have two pieces of state. Here we have one.
[03:44:54]  One. This is actually. Even slightly. More code in this case. But a lot of times. People like. Their first inkling is to do. This.
[03:45:02]  Right. Which is like. Okay. When name change sets. Upper name. Right. It's very imperative. It's very like. This then this and this. Whereas
[03:45:11]  this is like saying. Name is this. Memo is. The upper case of said name. And so on. Right. And. These two things. Well. Very
[03:45:20]  simple. Can have fairly different behavior. Because. The first example here. Is what I call. Derivation. The second is synchronization. And the second example
[03:45:28] . Depending on your reactivity model. Like. Basically. Depending when this effect runs. Does it run before or after rendering. Could actually. Drastically change. The.
[03:45:38]  The impact of what happens here. You can. You can kind of see it too. Even in the code. Right. Because. This has to. Like. This is
[03:45:48]  being. Is a dependency of this. Being passed in. This. Is. Completely separate. This. This. This function could be called at any time. Right.
[03:45:57]  Where. Like. You're actually passing. Upper name in. You can kind of already see. The impact here. But the. The key is. In react. This
[03:46:06]  will cause your component to render. Twice. It might. It might act. It will see. Name. As. John. And upper name. As. Blank
[03:46:17] . And then. Then when it. Finishes. It will then see. Oh. Capital. John. It didn't. It didn't do two renders.
[03:46:27]  There's. There's. There's. There's a chance that. Like. This rendering. Essentially. Or whatever listens to these things. Has to render twice. Because
[03:46:37] . Of the. You know. It applying the change. Right. To be running. The effect. Inside this update. Thing. Twice. Like. Even if you
[03:46:48]  were able. To synchronize. All the values. Before. You went in. To do the. The. Like. Rendering. Or the. Like. Framework
[03:46:59]  effects. Even if you were able. To do this all first. It's still not great. Right. So. I actually came up. With a cool example. In
[03:47:06]  this article. This. This one is one of my favorite examples. We always use this. It's basically. It's not quite the diamond problem. It's the
[03:47:14]  diamond problem. With one node in the middle. Yeah. Yes. To answer your question. Yes. No. It can't be. Because you break the chain. Right
[03:47:27] . Like. If you were. Like. I didn't do it. I didn't do it. Here in this example. But. The effect version of this. Has
[03:47:36]  no clue. What the dependency graph is. Because it'll be like. State. A, B, C, D, E. And then like. Effect. Right
[03:47:44] . A. You know. Effect of A. Right. B and C. Like. The right. Dependencies are known. But if you're looking at E.
[03:47:53]  You have no clue. What rights to it. Right. Like. You can see it right here. Like. Upper name. You need to know that it depends on
[03:48:01]  name. But here. Upper name. What does. What. Like. What does it depend on? It. This effect is registered here. Maybe another effect is registered somewhere
[03:48:11] . You know. Way. Far away. Upper name is. Well. Like. You basically don't. Know. All the potential things. That. That impact.
[03:48:22]  Make it. Upper name. Upper case is kind of like. A trivial example. But. In general. You don't know this. Where. Here. You know
[03:48:32] . That. Hey. C. By definition depends on C. Which depends on A. Like. Whether it's explicit dependency raised or not. You can tell by the actual
[03:48:41]  formal definition of. Of. Of this. What these. Like. How they relate to each other. So. Yes. And. The thing is. We. If our
[03:48:53]  goal. Which is. It generally is. With glitchless. Consistence APIs. Is. We only want to run. Each one of these nodes once. And
[03:49:01] . We want to make sure that the values. Are up to date. You don't want to. Like. Run. E. Down here. The first time. And
[03:49:09]  be like. Oh. B's. Updated. But D. Isn't. And then have to run it again. Because. That ways work. Especially if. Like
[03:49:20] . It's a higher node. Like. Bouncing around. Like. Even. Without. Doing effects. A. Bad. Algorithm. Here. Can
[03:49:32]  cause. A lot of bouncing. Back in the day. When Knockout was around. They did not solve this problem. Knockout was basically. A pure. Push based
[03:49:40]  system. And I'll explain that. In a minute here. But. So. This is a good topic. I. I don't think I've ever. Covered
[03:49:46]  this on stream. Um. I was tempted to do like. A whole stream on this. But. I can tell already by the viewership. You guys will probably
[03:49:53]  get kind of bored. But. This is very. Important distinction. And. It's the. Thing that ties. All. The frameworks. Together. As I mentioned.
[03:50:04]  React is just a big. Derivation. Essentially. For it's rendering. With a diff as an effect. Well. There's a reason for that. Right.
[03:50:12]  If you. Had a graph like this. And you were trying to decide. How to make sure that like. On a given change. To a. That. It
[03:50:22]  had those properties. How would you approach it? A lot of people probably would go with push. But I started with pull. Because it's the simplest. Right. Basically
[03:50:36] . You'd either. Say. Hey. I'm going to schedule. Sometime in the future. To kind of. Look. And see. That everything. Has
[03:50:45]  changed. Has changed. Right. That's what pushes. It's like. Basically saying like. Okay. I know something's changed. In some cases. Pushed.
[03:50:55]  Or sorry. Pull doesn't. Sorry. I meant. That's what pull is. Sometimes pull doesn't even know. If anything's changed. It could be a set
[03:51:03]  interval. Like every. Second. Check. Has anything changed. You know. But usually. In modern libraries. That's why they have zone JS. Essentially. Something
[03:51:12]  changes. And then you're like. Okay. I don't know what changes. Like. Has changed yet. But I'm just going to. Let it. Propag
[03:51:20] ate. Like do its thing. And then I'm going to look. And figure out what changed. That's what pull is. You just schedule it later. Give it
[03:51:26]  enough time to. So the change. Kind of like. Is set. Like all the changes. Need to be made. You make sure things are consistent. Because.
[03:51:34]  One of the challenges here. Obviously. Is. Is that. To run things. Consistently. Um. You have to make sure. That like.
[03:51:43]  All the changes. Have been applied. To be fair. You're right. I did cover this. On those streams. Didn't I? Did I? Did we
[03:51:50]  talk about. Push pull? Yeah. You're right. It's like over a year ago. Request animation. Frame everything. There you go. Yeah. Yeah.
[03:52:00]  That's fair. We did do it on. Milo's. Stream. But. I'm trying to get. Better at explaining this. So. Bear with me
[03:52:10] . Because. I think. I didn't talk about. Pull nearly enough. I talked a lot about. Push pull. And. I'm not going to get into the
[03:52:18]  details. You're right. Watch Milo's stream. If you want the details on push pull. But. The idea here. On the. Like. It's funny
[03:52:27] . This is. I feel like Milo's stream. Was too. Advanced. For. For. To. To. To. Advanced. For a lot of people
[03:52:38] . There was like. Too. Like. We went too deep. I'm trying to get to the very. Like. Base part of it. Which is essentially. Pull
[03:52:47] . You start from. The goal. The side effect. The update of the DOM. And then you ask for values. As they come across them. Right. So.
[03:52:55]  React. Is a pull based system. Right. You update state. It schedules. Some changes. In the. It schedules. Some work to be done. Or to check
[03:53:04]  if work needs to be done. Like. How could it. Because. You just set something. And it goes. Okay. So this updated. But what does that
[03:53:13]  mean? Like. It doesn't know. What depends on that. What depends on it downstream. React. Does something pretty. Simple. And a little bit clever. They
[03:53:22]  go. Okay. Well. You have components. Right. So. If your state. Is owned. By a component. Like. We have no clue what changed.
[03:53:32]  We know something changed. We're just going to rerun your component. Because. The state is owned by the component. That state could change nothing in the component itself.
[03:53:42]  It could. Change nothing in its. A child component. component. And maybe change something down. Three components from there. But. Because. That changes in this
[03:53:52]  component. And. You know. It's owned. And you can only pass them downwards. We can be fairly. You know. Assured that. Our system. Will
[03:54:01]  at least be consistent. If we rerun. The component. Potentially every single descendant. So. State. Tied to component. Right. And. For
[03:54:19]  this reason. Poll based systems are generally coarse grained. They rely on replaying everything top down. Because they have no idea what has changed. Right. Because. I
[03:54:26]  started trying to think. I was like. Can we make a granular. Poll based system. Like one. Kind of like that works. Backwards. Where. You know
[03:54:35] . Yeah. This is. This is. But like. It's an interesting result. Of the react pattern. Isn't it. What. What's kind of interesting
[03:54:57] . Is from a poll based system. Is like. If you wanted it to like. Be more granular. Because. The problem with this. Is. You can have like
[03:55:04] . Ten pieces of state. In that component. And a bunch of dry state. And all that stuff. And the second you go. One of them updated. To
[03:55:10]  change the color. And something. You're. You're off the races. Re-rendering the whole to-do list. You know what I mean. Like.
[03:55:17]  It has no clue. Other than this component. Needs to rerun. It has no clue. Like. What. How these things are related. So. If you
[03:55:25] 're trying to do. A granular system. You could. Right. You could go. Okay. Let's collect. All the. Side effects. All the. You know
[03:55:36] . Things. You know. Effect at the bottom. Here. Let's collect. All of these. Right. So. First time. We run it. We.
[03:55:47]  We. It runs once. Because. The first time. These things run. They almost run the same. No matter what. The reactive system is. Like. There might
[03:55:56]  be. Some differences. But ultimately. You're going to sum a five. Right. One. And then one plus one is two. This is two. This is three
[03:56:04] . So two plus three is five. Okay. So. They all have to. And finally it happens. So. We already know. All of the. The graph
[03:56:12] . So. In theory. If we were trying to do a more granular. Pull based system. We could. Set. We could do a change. Like. And then
[03:56:21]  go. Okay. Let's run all the effects. In this. You know. Scope. Component. Whatever. Now. If the changes to. F. Which
[03:56:30]  isn't in this graph. You're not going to know. You. You just queue up. E. You queue up. G. And. Then you're like
[03:56:39] . Okay. The first thing. If you look at here. E. Like you queue the effect. And then you go. Okay. Let's look at E. Has
[03:56:46]  E changed? You're like. I have no clue. So you have to run. E. Perhaps. And then you go. Oh wait. But has B changed
[03:56:55] ? You see. You have to go back up. Up this. Up the graph. And. That. Would be really expensive. Because you. You could never. You
[03:57:04]  basically have to get all the way up. To. To. To find out. That basically. A. Has. A. A. Hasn't changed. Perhaps.
[03:57:15]  A way to transfer the graph. Without doing the work. Might be to have dependency arrays. Right. You could basically. Know. What it depends on. So when
[03:57:22]  you get to the. Effect. You go. Oh. Effect depends on E. Let's go to E. E depends on the. On B and D. Let's
[03:57:30]  go to B. Like. And you could walk up. And essentially. You get all the way. To the end of the graph. And then. Go. Okay.
[03:57:37]  Has it changed? But once you realize it changed. You would then. Execute. Downwards. Or not. But the problem with this approach. Is. Why would
[03:57:45]  you waste your time. Doing all this. Walk all the way up here. To realize nothing has changed. And then walk all the way up here. To realize.
[03:57:52]  Okay. This one did change. When. You could have just. Ran them. Top down again. In the first place. Cause you. You're not saving any work
[03:58:00] . You're. Everything in this component. Is going to run again. You might as well go. Okay. A. Did you change? Okay. Well then.
[03:58:07]  Short circuit. Memo. You know. You're done. F. Did you change? Yes. Okay. Then I'm going to keep on going. With a
[03:58:16]  pull based system. With a pull based system. Because. Ultimately. You're going to. You're going to rerun it all anyways. So the. That extra travers
[03:58:25] al up. Is not saving you. Anything. It's cool. That you could kind of like. Figure it out. Perhaps. To like. Go back up to
[03:58:33]  the top. And then run it back down. But it's. All wasted work. And. You're going to use. You're going to shortcut anyways. With your
[03:58:40] . Like. Memoization. Basically. Derived state. Would let you shortcut. You'd go. Okay. This. You look at the dependency array. And go
[03:58:48] . Hey. Has B or D changed? No. Then don't run this. So. It's kind of interesting. That. That generally. With pull based systems.
[03:58:57]  There's no benefit of. Actually. It's just like. Extra work. To try and like. Break things up smaller. You just. Depend on memoization
[03:59:05] . You just run top down. And go. Okay. I remembered the value. I know that. I can stop here. Essentially. So. What's cool. Is
[03:59:14]  this is. Consistent. Like. If you run something top down. You have to run all the stuff. So you know. That. You what you get out.
[03:59:22]  The other side. Is going to be the full picture. The only problem is. It's like. Fundamentally inefficient. Right. So. Well. If you
[03:59:30]  want to make. We all know. Learned that since. Redux time. Well. Yes. Exactly. Because. You. You. You. You. You
[03:59:42] . The funny thing is. Redux itself. Has the same. Inefficiencies. As. React. But if you poise. The state out. At least
[03:59:49] . You can kind of. Almost subscribe. It's almost like a mini push. On the end. I realize it's selectors. But it's. They're
[03:59:57]  just isolating. They're basically hoisting this. Like. They're not even pushing. Really. They're just hoisting the state above. To do all
[04:00:04]  the. To do the memoization for you. At various nodes in the tree. Because one of the tricky parts about memoization is. Once you stop. You stop.
[04:00:10]  You can't. Like. Get to keep on going. You have to like. Start from a new location. Right. Like. You have to set a new change
[04:00:18] . Because. This is. This is the problem. Like. If you update. State. In that. Parent component. And it affects the component. Three levels down.
[04:00:28]  And it affects the component. Three levels down. And then. You have to set a new change. Because. This is. This is the problem. Like. If you
[04:00:36]  update. State. In that. Parent component. And it affects the component. Three levels down. You can't stop it. With a memo. Like. You have
[04:00:44]  to run your. That component. You have to run the children. You have to run the next child. And to get there. To run it. Because it's not
[04:00:51]  going to just. Jump there. Because the second you memoize. And go. Yeah. I'm not. I don't change. Or. My direct child doesn't
[04:00:57]  change. Like. If you could know that. It would never get to the. To the. Lower source. Memoization. Would prevent it. Like. If.
[04:01:07]  Like. If. You could never memoize. To optimize that way. You have to pull the data out. That's one of the challenges for. Forget. Because
[04:01:14] . Even if you remove. The writing of the memo. Technically speaking. Memoization. Can't give the same. Like. As long as it's inside the component
[04:01:21] . It can't give the same. Characteristics. techniques. That like signals do. Or. Pulling your external. State library out. Like Jotai can
[04:01:29] . You have to have a way of. Almost. Pushing back in. Or just. Restarting it. From further down. Like below where the memoization.
[04:01:36]  Cuts it off. You know. This is kind of like what relay does. Or. You know. Jotai or whatnot. So I'm very interested to
[04:01:43]  see how the React compiler handles it. Because just like the naive approach. Doesn't work. Right. Misko wrote an article about this a while ago. But basically why
[04:01:54]  he didn't. He didn't. He didn't have much hope in the React compiler. I assume. That they're going to solve this. Because if they weren
[04:01:59] 't. Then like. The compiler is pretty much a waste of time. So I. Now. That's. I think this is why they started calling it. Auto react
[04:02:05] ivity compiler. Instead of an auto memoizing compiler. Because it gave people the wrong impression. Because if you're. Just. Putting the memos in. And cutting off
[04:02:13]  short. Won't. Won't actually solve the problem. No. It's not even that. The dependence. They can know that. You give them the. The
[04:02:26]  arrays. And everything renders once anyways. In all cases. So. It's not that. It's just that their render model. It's such. That. There
[04:02:35]  is no subscriptions. There's no. It's just pull. It's literally like. We schedule. And. Like. Essentially. Like. As I said. Walking back
[04:02:51]  up. To the change is a waste of time. Like. Like. They just have to run out the. Coarseness. Of what their updates are. Like
[04:02:56] . There's just. They would have to. Propagate. Which they don't. They'd have to propagate the change. To know. Like. If the end
[04:03:06]  result changed. Right. They. This is just a choice. Of being pull based. Oh. That's good. That's. That's pretty cool. For them
[04:03:14] . We just removed. Like. All the reactivity. From the server. Yeah. I mean. A lot of the. tricks. tricks. I imagine
[04:03:21] . That they're going to. Like. It has to be more than memoization. Though. Otherwise. You're not going to get the same characteristics. With depth.
[04:03:26]  Is what I'm trying to say. Let's get there. The other side is push. Right. The other simple idea is like. RxJS. And
[04:03:31]  this we talked about more. I think on the angular stream. Because I feel like on the pull side. We all say pull. But we don't really like. Think
[04:03:36]  about why it has to be the way it is. The other simple idea is like. The other simple idea is like. RxJS. And this we talked about
[04:03:41]  more. I think on the angular stream. Because I feel like on the pull side. We all say pull. But we don't really like. Think about why it has
[04:03:47]  to be the way it is. And it's large. I don't think. I don't think it's like. I don't think it's like. I don
[04:03:52] 't think it's like. I don't think it's like. We all say pull. But we don't really like. Think about why it has to be the
[04:03:57]  way it is. And it's largely because. There's no point. In being any more granular. Than the scope. Of. The ownership of the state. Or the
[04:04:07]  thing that triggers the check. Because. It has no choice. But to run it anyways. Where a push base system. Is like. Everything subscribes. And travels down
[04:04:15] . This is. RxJS. But in a sense. This is what. What knockout JS was. It was signals API. But it was essentially. Pure
[04:04:22] ly push base. So. You know. In this kind of system. You know. You would just go. Okay. You start here. Fan out. The change
[04:04:32] . Like. Like. Consider a depth first propagation. Right. So. How would you do depth first. You go. A. And then you go to B. And
[04:04:41] . And then go. Okay. Let's update. See if we change. Oh yeah. We change. Okay. Let's go to E. Okay. E changed.
[04:04:51]  But the problem is. Again. So then. E would go. Run the console log. And then. Then we go to C. And then. To D.
[04:05:00]  And then. Run E again. And then run console log. Once a log. You'd log twice. If you did. Depth first. Because you. You
[04:05:08]  basically. Would get the. Like. The wrong value. Okay. So. How about breadth first. Breath first. Is kind of weird. Because like. Think about this
[04:05:18] . When you actually created the graph. You went depth. You. You kind of went. As I'm saying. Here. We went. We went. Sort of
[04:05:27] . Breath first. But. It was kind of like a breadth. It was more depth first. Like. Yes. In. In a sense. Like. It's
[04:05:36]  in the middle. Because. You knew. That E. Had to come after D. So. I guess. This is not a good comparison. Fine. I was going
[04:05:46]  to say. You went. Depth first. You usually go more depth first. But. Technically speaking. As long as. The dependencies are there. Before the. Final
[04:05:55]  thing. But. If we went. Breath first. For this particular. This particular. Example. You go. A. Then you go. B. Then you go
[04:06:05] . A. B. C. E. D. E. Effect. I guess. You'd only console log. It's hard to say. To know. If
[04:06:16]  you'd console log. Twice. You might. You might actually. Still console log. Twice. But my point is. You'd end up. Running the E node.
[04:06:25]  Twice again. Because again. The depth. Isn't correct. Because. E and D. Are at the same depth. And because of the shape. Of this graph.
[04:06:34]  And. Of this graph. This graph. And. It's hard to say. To see. To see. It's hard to say. To see. It's
[04:06:40]  hard to say. To see. It's hard to say. To see. It's hard to say. To see. It's hard to say. To see.
[04:06:47]  To see. To see. To see. To see. To see. To see. It's not. It's not. It's not just like. It's
[04:06:55]  not just like. Sorting initially. Or whatever. It's like literally. Sorting it like. On every time. You hit a new. Dependency change.
[04:07:03]  Because these dependencies. Can be dynamic. As you execute. So like. You're just constantly. Sorting. Every time. You realize. Something's happening. It
[04:07:12] 's. It's. It's very slow. I. We played with this. So. Luckily. This is a third option. This is why. Our solution is to
[04:07:22]  build. Different versions of the push graph. Yeah. But. It's because of. They're trying to be declarative. Right. The thing about signals. Or.
[04:07:29]  You know. This kind of reactivity. Like. The actual. Like. I don't know what to call. This kind of reactivity. Is that. Inside
[04:07:35]  these expressions. It's actually kind of. Not declarative. It's. Imperative. So. They have to. Rx has an operator. For every single thing
[04:07:44] . You could do. Inside this memo. Essentially. Right. Like. Add. Multiply. Like. Whatever kind of combination. Of thing. You can do there.
[04:07:55]  Or in every way. Of wiring. Each thing together. They need a separate operator for. That's what's great about. This kind of. Like. Simplified
[04:08:03]  reactivity. Like. It's literally. The links. Can be. Just put together. Dynamically. Simply by reference. Right. In reacts case. I don
[04:08:12] 't care. Cause they run the whole thing again. In the case. Of. Signals. It's a little bit. Different. Right. Because. Their push pull
[04:08:22] . Which. Is like. If you do both. And. If you do both. It changes the math a bit. Because yeah. The trick is. You push
[04:08:31] . Out. The notification. That something could change. But you don't. Run the node yet. You just. Tell the whole rest of the graph. That hey.
[04:08:37]  I could have changed. There's still like. Possibility. That things exit out early. But you. Give it the possibility. To know it's changed. And
[04:08:45]  then. On the other side. When you pull. You can actually now. Do that pulling. The way we were talking about. Before. Because with. You know.
[04:08:54]  The react. Pull system. There's no point. Being granular. Because. Like. You're gonna run it all anyways. But with the push pull system. You only
[04:09:03]  queued. The effects. That actually. Could change. So like. All the stuff. That's unrelated. Doesn't end up in the queue. So then. When
[04:09:10]  you walk up. You can actually. You know. Find where the changes. And exit out. And it's consistent. Because. You actually. Follow that. Dep
[04:09:19] endency. Graph. You know what. Can change. And you know. Because you're pulling it. You know what. Did change. So in a sense. You
[04:09:28]  know. Where. You know. The problem. With the pull system. Is that. You know. It's consistent. But. Kind of. Inefficient. Because
[04:09:40]  it has no clue. What changes. And a push system. Knows exactly. What changes. But has no idea. Of the impact. Of its change. So
[04:09:48]  it has a hard time. Like. Handling the system. In a whole. Push pull. Actually. Knows both. What changes. And the impact. Of the
[04:09:57]  changes. much more optimal. That's what the whole. Signals thing is. Right? Like. That's why people. Care about signals. It's not just
[04:10:04]  an event system. Most event systems. Are kind of push based. And. And as I said. Simple. Naive. Kind of like. Just pull the value.
[04:10:11]  Schedule it on a timer. Is this. It's. This is. Both. Essentially. Described a very simple. Algorithm here. Right? Which
[04:10:20]  is. You know. Push all the way down. And then. Pull. Back. So then you get up to here. Then run. And then run. And it
[04:10:28]  works. I think. If you want more detail. Watch the milestone. Read this article. I'm not getting into. Push pull today. I just wanted to say
[04:10:36] . That like. This whole thing. Is only possible. Because of. Like the. This concept. Of deriving. Versus synchronization. Otherwise. We wouldn't
[04:10:46]  be doing. Any of this walking. And. Every change. Would just be like. Bam. Bam. Bam. Bam. And the sad thing. Is like. This
[04:10:56]  is the trap. Right? A lot of React developers. Do that. That's why React component. Renders 17 times. People would. Probably do the same. In
[04:11:04]  solid as well. If it was as. Because. It wouldn't like. Cause the components. To re-render on a whole. It's not as like.
[04:11:10]  The pole problem. Right? It's a more granular. But. Um. You know. It's still. It's still this problem. Of. Essentially. Like.
[04:11:21]  Starting the cycle. Over and over. And over again. You need. To know those. Dependency arrays. Ultimately. It's the way. To stay consistent.
[04:11:30]  I love this. This is from. The old MobX. Blog. I think it was. It was Facebook. I can't even remember. Back then. Um
[04:11:39] . But. Um. As I said. This article. Is kind of just like. A precursor. To what I want to talk about. Because I want to.
[04:11:47]  Take this next. To talk about. The difference between. Eager. And lazy. Evaluation. Of derived state. And talk about. Async. Because.
[04:11:55]  This is. All based off. The idea. That like. Stuff can be resolved. Synchronously. I think. I think. In this case. Push is
[04:12:04] . Eager. And pull. Is lazy. And push pull. That I'm describing. Is kind of. Um. I. I call this. A lazy. Push
[04:12:14]  pull system. Is the one that. Is getting implemented. In most frameworks. Ironically. Solid. Is an eager. Push pull system. Which is. Interesting.
[04:12:24]  Because we are. Looking at going. To being a lazy. Push pull system. But. There are. Trade offs there. Um. As I said. Solid's kind
[04:12:34]  of. In this weird. Middle ground. Where like. Angular. Preact. Um. Even view. Um. I'm not sure. About quick. Um. I
[04:12:43]  wouldn't be surprised. Some of them. Use lazy. Push pull. Um. I don't know. If. I don't even know. If quick. Uh
[04:12:53] . Svelte ruins. Lazy. I don't know. If quick actually. Follows through. The guarantees. I haven't seen. Their implementation yet. Um
[04:13:02] . But. Essentially. Solid is a. Odd man out. Because. We do. Eager push pull. Which has. Which is. Interesting dynamics. Because. In
[04:13:13]  my opinion. Eager. Especially. When you consider. Async. So. I think. That'll be a good. Topping itself. We'll cover it
[04:13:21] . In a future stream. But. This is only the baseline. I think. Of. That's. that. That's. That's. That's.
[04:13:30]  That's. That's. That's. That's. That's. That's. like. Like. Like. Like. Like. Like. Like. Sign
[04:13:37] als. Are interesting. Perhaps. This kind of puts it all in perspective. Yeah. Yeah. But. enforcing the dependency graph to be static is kind of miserable.
[04:13:44]  And to be fair. Compilers. Are one way. People are doing it. Like. So that you don't have to write dependency graphs. Because if.
[04:13:51]  But like. It's. Oh. None of the runtime ones are static. Because. Like. Essentially. Anytime you run in the dependencies could change. And then the
[04:14:00]  expectation would be weird if you forced it to be static. Like. The only first one. I think the fact that dependencies are dynamic is. Is. Is the reason that
[04:14:08]  this is. So. Powerful. It's funny. RxJS. Actually. Kind of. I think the fact that dependencies are dynamic is. Is the reason
[04:14:16]  that this is. So. Powerful. It's funny. RxJS. Kind of. Has. Like. The way you wire it makes it more static
[04:14:24]  than what we do. Like. I'm trying to. Pull back to the code example here. Um. But like. You can have conditional dependencies in these things. And
[04:14:33]  those conditions can even exist in code you can't see. Like. You can call a function which has conditions that are downstream in a runtime system. So like. Yes.
[04:14:42]  If. If the dependencies were static. You could. But I. I think this is why this is so powerful for templating. Like. In general. Like.
[04:14:50]  The. The power of like. Signals and stuff. Is the fact that these are dynamic. Like. You can. Like. We use. The stuff in solid to
[04:14:59]  render every part of the DOM. All updates. When you have a conditional in your template. It's just. A conditional in a memo. Essentially. derived value.
[04:15:05]  Like. The. You're just branching. You're doing. Allocation. And. And cleanup. All along the reactive graph. Yeah. If you're.
[04:15:14]  If you're. If you're. If you're going to. Uh. If you're going to be. Doing. Something. Uh. Like. More. Considerable
[04:15:25] . Uh. I would definitely consider. More advanced. This is like. This. This. This article. Was designed to be like. The follow up to like.
[04:15:33]  What is signals. You know. It's a little bit more general. So I'm putting in its own category. But like. This is very much like. Beginner
[04:15:41] . Intermediate. Not. You know. It's a little bit more general. So I'm putting in its own category. But like. This is very much like
[04:15:48] . Beginner. Intermediate. Not. Like. Uh. Beginner. Intermediate. Not. Enough for someone to actually write the stuff. Yeah.
[04:15:59]  My stream with Milo is great. And. And. Honestly. His article. It. That's. In this article. Is also great. That's what we talked
[04:16:10]  about in the stream mostly. But. You know. We answered the. The tough questions. It might even be worth watching the angular stream. Not the one I did with
[04:16:18]  Minko. But the one that I did with. Um. Pavel. And. Uh. And Alex. Because we talked a lot about Angular's. System
[04:16:26] . Um. To be fair. They. They backed off. Some of the features that they were talking about. They didn't end up implementing in the end. Like they
[04:16:32]  had this really. Crazy. Smart. Uh. Garbage collection. Thing that they were doing. That they. I think they got rid of. Um. Where is it
[04:16:42] ? Uh. Yeah. Signals and Angular. It's a good one. And then. Future. Fine-grained. Mac. And they were very. They
[04:16:51]  were very good. Um. Sources. Like. In-depth. Yeah. Milo's article is very good. Because he actually shows the difference between like. Mob
[04:17:01] X. Preact. Reactively. Talks through the algorithms of each of them. Yeah. It's funny. Because. I did it. Two Angular streams within
[04:17:10]  a couple months. Right. Because I did this one with. Pavel and Alex. And then I did. Uh. Learning Angular with Minko. Like the basics
[04:17:17] . Yeah. This is. This is. This is a very. Yeah. I'm just gonna post it again. I keep on mentioning it. But let's actually
[04:17:25]  just post. Uh. Milo's article. Um. You guys will be all happy. Milo is probably the main. representative solid. In the. Uh.
[04:17:33]  In the TC39 signals proposal. Um. I. I. Try and join in when I can. But Milo's on it. Yeah. This. This is just
[04:17:41]  a good article. Reactively. Is. The basis of what solid 2.0's reactivity is based on. But. Yeah. This. This is just a good
[04:17:49]  article. Reactively. Is. The basis of what solid 2.0's reactivity is based on. But. This is just a good article. Yeah. This is
[04:17:55]  just a good article. Reactively. Is. The basis of what solid 2.0's reactivity is based on. But. I'm. I'm still.
[04:18:02]  I'm kind of learning. We're learning some. Some really interesting stuff. As we're going on. Which will come up in future streams. Um. I mean.
[04:18:19]  Oh. You mean for like the proposal? No. I mean. There's. In the GitHub. There's like a. Mock. Prototype of the implementation.
[04:18:28]  That. It hasn't been released public. If you're talking about. Uh. Framework independent. Signal libraries in general. There's lots of them. I.
[04:18:39]  I didn't. Make it separate and solid. But like. Almost every signals library. Can be just used on its own. It's pretty commonplace. View. Pre
[04:18:46] act. View. Preact. I mean. Most of them can be. Um. Okay. Yeah. So let's get to this week in JavaScript. I think
[04:18:57] . That's all I wanted to talk about. I think it's a good. I think it's a good topic. But let's. Let's. Let's.
[04:19:03]  Let's see. Let's see. Let's see. Let's see. Let's see. What are we doing here? Okay. So there. There's
[04:19:11]  70 people watching right now. And there's. 63. Thumbs up. Which means. Oh no. There's 68. Which means that. Not everyone. Who's
[04:19:20]  watching us. Like the video yet. So. We can. We can. We can do something about that. That also means that I have. Wow. This is like
[04:19:29] . More people on Twitch than YouTube. That. That like. Never happens. I don't know what's up. I guess everyone was trying to get in. On those
[04:19:36]  free subs. Usually it's like. Double YouTube. Over. Over Twitch. Anyway. Um. Which reminds me of. Code Sandbox is probably like. Going to
[04:19:53]  shut down. All my sandboxes. Which can be really awkward. For these articles. It's all good. I mean. That bell. Smash that like. Yeah
[04:20:08] . Exactly. Yeah. It. Honestly. It really helps. Yeah. I'm not going to tell you guys. All how to use prime subs. But they are a
[04:20:16]  thing. All right. I never noticed this. This image. This image from this article. Actually has copyright across it. Do you see this? I wonder if they
[04:20:22]  added it later. I swear it wasn't there originally. No. They couldn't. It had to be there. Otherwise. Because this uploads to a different source.
[04:20:29]  I literally just like. Didn't notice the copyright. This one's fine. Well I mean. I guess I should see what the pricing plan is. But
[04:20:35]  it's like. It's. It's. originally no they couldn't it had to be there otherwise because this uploads to a different source i literally just like didn't
[04:20:43]  notice the copyright this one's fine well i mean i guess i should see what the pricing plan is but it's like it's i i i i have like so many
[04:21:07]  if it we'll see okay well that's good because you know the answer it's because react used an atom and i that was what i did for reactivity anyway let
[04:21:30] 's let's get ready here for for this week in javascript i'm gonna zoom out of here and look at my wonderful room for a moment while i get this all
[04:21:38]  set up everyone having a good week let's see all right let's see here it's it's been a while but we've covered a lot of the stuff on
[04:22:09]  here so i'm hopeful that we can do this in a reasonable amount of time i wasn't sure how far how long the stream would go so i guess we'll we'll
[04:22:17]  find out let's scroll this back oh yeah there is some spicy ones okay i'm gonna be make sure not to skip over to skip over stuff we've already talked about
[04:22:35]  okay yeah cool that's good i gotta go back to like december 21st i think actually looking at the solids feed yeah it's fine and then good and then
[04:23:03]  good okay i think i'm good i got about 40 minutes so let's let's let's get this rolling because i think we i did beta 2 yeah i did the
[04:23:22]  stream on the 20th so basically everything and then i talked about my article okay cool done oh you guys are asking what the solid community what is it what was the question here
[04:23:48]  oh it's having a fun week i see that would be interesting to hear what what the perspective is so i have a feeling i already know what all the arguments are
[04:24:05]  yeah okay yeah okay cool okay let's let's let's let's get this around you can use one of these this week in javascript oh sorry and let's
[04:24:39]  get started on this week in javascript okay so it's been more than a week to be fair um although i did do a stream last week i didn't talk about
[04:24:52]  you know everything so i'm gonna be picking up pieces from all over the place um i would start with solid news i think we already talked about the big news 30 000
[04:25:03]  stars we talked about solid start release um talked you know about they're just a lot of these integrations keep on popping up solid's on a little bit of a hype wave
[04:25:14]  right now um which is really exciting i already mentioned that i think we've talked a ton about you know solid i mean this is cool alexis is showing off the
[04:25:31]  streaming you know stuff one line at a time demo the capability of server functions but generally generally speaking i don't think there's anything i don't think there's anything that
[04:25:41]  i'm going to show you here a lot of mobile stuff um that you haven't seen before um cobalt yeah so those guys wanting staple backends in js this is
[04:25:56]  kind of this is kind of cool um jamie i believe he's ceo of yeah of convex they do reactive databases so if you are the kind of person who wants
[04:26:08]  to have that like you you know you're picturing that someone goes and they update a field in your database and then somehow it updates a single field in the in your u
[04:26:19] i without re-rendering anything this is a solution for you because essentially we can take fine-grained patch if updates from your database because they know exactly what changed
[04:26:30]  reactively pass it through to solid where it knows exactly what's changed and then solid again doesn't re-render and just diffs it's end-to-end react
[04:26:39] ivity with fine-grained reactivity it takes less than 50 lines of code i haven't looked at this too closely i've seen him play it he did a youtube video
[04:26:48]  about a year ago very cool stuff on that other side when we were talking about how you could do um you know state full servers with solid yeah okay so yeah a lot
[04:27:16]  of solid start hype but it looks like there's other meta framework options in the solid ecosystem they added some nice data fetching apis for uh vike which is another
[04:27:27]  v based system but let's move on all right um where do i want to go next i think this is forever going to be something that haunts us um i don't
[04:27:43]  want to get too much on rasmus because he's he's he's legit he uses sinuous he's so um him and fabio are probably best buddies that
[04:27:52]  i don't know if they know that um but purest react p reactive people signals i have a lot of respect for people who are that principled in terms of their approach
[04:28:04]  one thing that they all hate about solid is the jsx transform they want to use less of it even though it's kind of one of the in my opinion one of the
[04:28:14]  clinchers here i did want to talk about this briefly because i think the compiler for the jsx transform is actually really good um really good and really important um
[04:28:28]  his complaints were basically along the lines of like look um he three perfectly normal js patents three linter complaints this feels like rules of hooks it's not spark joy static analysis of
[04:28:40]  a language like js is a bad idea the language is not suitable for hocus pocus so i'm trying to remember what the issue was here he's talking okay he
[04:28:49] 's saying that the linter com basically the linter complains about a bunch of stuff um yeah it's basically we have a linter that that basically makes it easier to
[04:29:02]  succeed with solid and not lose reactivity and not lose reactivity and it's basically complaining at a bunch of places where where you could argue that this is like the l
[04:29:12] inter could get smarter um but i think this is just kind of the reality of where we're at right now where we can only do our best estimation but this basically a lot
[04:29:22]  of this comes down to dislike of the compiler um and and a lot of the this this concern of like why you can just call a function like this and not have to
[04:29:36]  wrap it in an expression like you do when you use like tag template literals or something that doesn't use a compiler because like it's like why why why are why can
[04:29:45]  you just call it you aren't you passing the value you're not passing the signal and i have a whole article about this obviously uh we talked about a while ago um
[04:29:53]  which was about uh the react principle of uh locality of thinking which is good checking out why do they hit the jsx transform let me see if i can the gist
[04:30:09]  of it is like they don't feel like it's javascript in the sense though jsx has no defined semantics if you check it they just essentially all the
[04:30:19]  tooling was built for reacts jsx so it's really odd to them that like you know you wrap things and functions when you're using solid but then when you go to the
[04:30:26]  jsx you can just like pass values in anyone i think i feel like people who used a lot of like knockout or view or any of like the reactive libraries that like
[04:30:35]  you know existed in the in the past like and especially if they use them before using react this this is kind of like a no-brainer but for people who kind
[04:30:48]  of came in after after react and then they're kind of going backwards like from that side it's not like the there's like why would it act this way i'm like
[04:30:59]  well jsx can do whatever we feel like it right but it's like the concept of what jsx is is kind of different yeah i mean the thing is the he
[04:31:12]  asked he's like he used sinuous which was just a and i think volby's like this as well he wanted to know very specifically why is a compiler beneficial and i
[04:31:26]  think this is the best answer i've given it it takes 10 tweets but i think that's by far the best answer because he says that he sees no upside and i'm
[04:31:31]  like no no okay let's talk about this first of all spreads with dynamic object shapes is a big one where the existence of properties and props can change and need to be
[04:31:40]  introspective potentially reactive independent of change think about it if you don't have the compiler how do you do spreads right you can do spreads of you can do spreads of uh
[04:31:56]  signals potentially right you could go like spread like how do you do granular spreads a better question because you could go like okay let's spread count i mean i don't know
[04:32:06]  why you spread count sure but what if you only want to update certain things based on specific values what if you're spreading props and each of those props are like different keys
[04:32:18]  i mean you can call counter with any number of arguments you can basically change if if if you have a store and you went store right what properties are available on on store can
[04:32:41]  literally change at any given time like what exists or not if you want to be able to go granular where you can spread like this and you can update one property on the
[04:32:52]  store and have it reflect on one property here and not like every single prop re-render you need to be able to basically handle a couple situations and one of them that
[04:33:09] 's tricky is obviously working between spreads of signals so each property is separate signals and spreads of objects but the other challenge is like even if we did some different kind of transform where
[04:33:24]  we like created function on the other side how do you do like something in props it would always be true like or false like if the shape can change like like i mean
[04:33:46]  it's kind of interesting right because you could have like props something right and would it always be defined like if this they they would need to be able to ask for the
[04:33:57]  existence of any property and they'd have to run it like because it's not just it's not just it's not enough that it's there potentially you'd have to like
[04:34:08]  pseudo make it a function like if someone pretend they it's like made up property that because it doesn't exist yet you wouldn't just make a property you'd actually have to
[04:34:19]  return a function accessor to make it work like dynamic spreads are are actually very problematic um none of the frameworks that actually um don't do the transform actually handle them properly
[04:34:36]  we don't handle them 100 properly but they don't really handle them most of this comes down to the existing proxies for nested reactivity once you start using these
[04:34:43]  potential opens up but it makes everything else clunkier like now you're manually wrapping with functions everywhere if you've ever seen any of my code sandbox hyper script examples you
[04:34:52]  can i can show you what i'm talking about because let's go to my dashboard and i think i have i forget where it is is it in my i have this one
[04:35:03]  example that's like um that i basically just like did everything in it i made like a whole app with solid router that like gets home it's got counter profile it even
[04:35:24]  has a tic-tac-toe game in it if i remember correctly yeah with suspense that's using transitions and suspense so this app is made using tagged template liter
[04:35:34] als it has it has all the the nice fix-ins but i mean it's kind of interesting because the router i'm using element i'm doing this on purpose because
[04:35:45]  i i need to wrap it in a function that call html like if you if we're doing something with stores let's see what's tic-tac-
[04:35:51] toe look like yeah tic-tac-toe looks lovely right because now i mean to be fair if this was a function then we could pass it through but
[04:36:01]  you start getting into i guess if you were writing this way these would all be functions of functions like it doesn't i'm like trying to remember the example i had a
[04:36:17]  few examples where like you're just like why the hell do i have to do all this crap like props is obvious but if you change props the argument goes away but if you
[04:36:25] 're actually using or state is there state what is state is there any stores in this example yeah crate store like even this basic scenario state let's get back to the bottom
[04:36:39]  of this component okay so that's interesting state history move like i don't know forget to wrap one of these you know guess what it won't work properly but you will
[04:37:01]  never know right like this not to mention the problem of like okay let's continue let's continue okay non-compiler ultimately misses some nice d's like div isn't
[04:37:26]  just a div right you have to wrap it in a function since elements need to be wrapped into your context execution order and you need to detect is function unless you force props
[04:37:34]  to always be functions which to determine like is it a function not you could you can provide your own unwrap function to be fair um you know like you could basically like instead
[04:37:45]  of calling signals as functions always go unwrap thing and then if it's a value or a function it could it could do it but like generally speaking if if you give it
[04:37:55]  either or the types also get a little bit more interesting maybe they're more informative but like as essentially like now your your types are a number or function of number right um
[04:38:09]  and as i said this is about the locality thing where now you're like thinking of like am i getting a signal or not okay many solutions don't untrack components
[04:38:19]  to be fair bobe does classically people didn't so which is nuts when you consider like any execution could trigger the upper context i'm not i this is a weaker
[04:38:28]  argument but this is something that like when people always go oh i remember the good old days of blank and i'm like no no um i think i don't think sinuous
[04:38:38]  did i think that um sjs or surplus definitely did not untrack um so you know this whole trigger impression the parents i will say this typescript has made this
[04:38:51]  approach more manageable in recent years in the past without typescript this was like in my opinion a non-starter because like as i told you like oh forgot to wrap something like
[04:39:01]  do to do to do right pass by value from the transform actually eliminates this whole category of thinking and gives us both superpowers a react mentality and locality for me to actually
[04:39:13]  come together fruits of superior developer experience tooling destructuring i thought i had more about spreads i thought i i thought i found something there's another problem with spreads later on
[04:39:23]  yeah i i can see why people would grand new spreads are a problem in general even static shapes a naive spread with a function won't fall through properly it will obey js but
[04:39:36]  it won't be helpful damn it i wish i i had the example of that in my head i i knew what i was writing at the time i was like playing there
[04:39:44]  with the spread and i was like man what was i trying to say there damn it that was another good one i think spreads are probably the thing although we have to address our
[04:40:01]  spreads in the next version so they're kind of awkward this is fair right but like for me the important part is trying to keep the the impact of compiler localized right so
[04:40:26]  like svelte doesn't have svelte's compiler this is like the difference between svelte ruins they they extend this outwards to like every file that i
[04:40:34]  guess has a svelte extension this is one of those like things where like the scope of this is where it gets challenging um jsx the arguably best thing about it was
[04:40:45]  it allowed us to lean into this without um without touching the js side of things anyway um yeah i guess looking back at this i had two points about spreads i had some
[04:41:03]  points about ergonomics and mostly um mostly about locality of thinking which i had an article about i think those three probably cover cover it yeah this this is an argument for
[04:41:18]  why don't you do it like spelled which i think is a whole other scenario yeah all right guys all right let's go back it was interesting though because um forever open
[04:41:44]  source actually did all the changes that the that that they proposed auto called signals destructured props tracking and components no build um ironically like they purposely took solid forked it to change
[04:42:03]  it to be the way like basically address all the stuff and then they decided that they were completely wrong um it's fine this is this is one of those um ones that
[04:42:14]  are that it's tricky you know how like companies have money back guarantees i i i i feel like like there's going to be people who are very skilled who do not like
[04:42:28]  the this decision but for most people it's one of those ones where i'd be comfortable enough to be like money back guarantee like i'm confident enough not that this is
[04:42:38]  the right position to take i'm confident enough that you will think it's the right position to take if you actually tried to do it the other way so i i i that
[04:42:48]  that that probably puts us in a fairly decent place there's just the anecdotal thing has just been way too heavy like the i we had we had a bunch of m
[04:43:01] ithril developers who came over and they're trying to use solid with the hyperscript and they're just like i give up like it's fine but and i hope i
[04:43:11]  i see you don't mind writing it have you built anything significant with it like my concern is like it gets it it just takes one little thing and then stuff gets kind
[04:43:21]  of nasty um i have to think about what to do in the future because there's a lot of people who are really interested in this no build path even if it's kind
[04:43:30]  of like what's the term paddling up a river or something or that's the term when you when you do something that's really like a lot of work to and
[04:43:39]  it's pointless what's i i forgot there's a term for that anyway so but um yeah i i don't know i yeah uh so let's just move on from that
[04:43:56]  one um i do think it's interesting though i think that for people in community know this will continue to come up i'm i'm positive of it right i think it's
[04:44:06]  i think it's good that because there are places where we've made sacrifices uh around these kind of decisions where like from the purest sense i probably wouldn't be that
[04:44:18]  happy about it so like i get it but on the other hand like yeah it's it's it's a tricky place the most important part when you have these kind of slippery
[04:44:29]  places where your position kind of makes you almost like a hypocrite is to find a line like a a boundary that you decide not to cross because honestly that's been a
[04:44:40]  lot of the complaints with react recently like there's some react grammar which we're going to get to in a minute is the fact that react has changed and the question is have
[04:44:49]  they crossed that line you know okay um oh yeah this is a cool one i don't know if everyone saw this or understood what it meant but i want to talk about
[04:45:01]  this for a minute i misunderstood it so you can ignore the rest of my post because i read something that um andrew said where he said like he he described it kind of
[04:45:12]  in a really sloppy way but essentially this does exactly what you'd hope it would do they're figuring a way to use use to push back into the graph remember when i was
[04:45:21]  talking about derived state and saying that memorization stops the the flow well they're going to use use as a way of triggering downstream basically joetai built in to react
[04:45:30]  which is freaking cool especially when you consider that this use memo will probably go away and with forget so at that point i imagine you'll have a lot of like use state
[04:45:47]  use effect and use essentially for global state which um feels kind of good that being said even if forget lets you write like crazy spaghetti code like just let's not local mutation is
[04:46:06]  like the dumbest thing i'm sorry it just i just yeah i don't know i mean obviously i'm not suggesting i don't get me wrong pushing to an array
[04:46:17]  is fine or something i mean like reassigning variables and stuff like almost all the complex scenarios that they try and like talk about with forget involve someone doing something that you wouldn't
[04:46:28]  actually write anyways um i'm talking like reassigning variables and stuff i i'm interested in what the implementation is because selectors are usually a little bit less efficient but yes
[04:46:45]  i because they yes because what you do is you trigger this and then use the return value and then see if it changes so yes they're using the dependency array um or so
[04:46:56]  they're using the return value of of of the memo to decide if it's changed whether to run the component so this is pretty cool yeah i and i think with forget
[04:47:12]  like i i see the picture it looks really cool um i think we talked about this we showed dan's latest articles he's written two recently which is cool i think i showed
[04:47:21]  this i figured if i showed this last stream but he he hadn't written an article in like two years so like very excited about this um yeah i started about the 30k
[04:47:32]  star it was big for me because i've been waiting i was going to start solid at 10 000 stars but i missed it i was gonna do it at 20 000 stars
[04:47:41]  but i missed it 30 000 stars i almost missed it you can watch the video on my profile um for a laugh when i hit two factor authentication and i think all hope is
[04:47:51]  gone anyway it's at the top of my feed so we won't go there yet what do we got here remix i love this example i don't know if you guys
[04:48:04]  saw this they make like a kanban he makes a kanban board and and like he's got optimistic ui updates going while he's dragging with optimistic ui um it
[04:48:16] 's such a cool demo i i love ryan's demos on this stuff you should be able to do the exact same stuff in solid start because we have similar optimistic updates but
[04:48:25]  this is the power of remix before remix like i remember there's a lot of like fight around like oh who did nested routing in the react ecosystem you know blah blah
[04:48:33]  blah you know the copies and this and next copies and all this and a lot of times you could look outside of react and be like yeah people are doing this before but this
[04:48:42]  sort of optimistic update that remix introduced i feel like is a remix original i never saw this in any other framework and regardless of what happens with remix over the years i i feel
[04:48:54]  like this is the thing that should be attributed to them it's absolutely genius to avoid cache writing and then have the ability to have fluent optimistic apis in a very intuitive
[04:49:05]  way this is this is remix's gift to the world all you know you know other frameworks might have even the progressive enhancement thing with the form i think svelte kit might
[04:49:17]  have even got i don't know who implemented first but they demoed it before remix did um this is just yeah amazing i i love this demo that's funny right
[04:49:42]  yeah exactly yeah i don't know why they're like focusing so much on like picking like the worst possible code ever and be like look how we optimize anyone so it's like
[04:49:54]  just why are people writing that like really why yeah react server quotes to not require server never has i get that this is confusing but i'm lost what to do people keep
[04:50:10]  repeating it doesn't speak about it for a true fact can someone spread the word please yeah do you guys remember the very first react server components demo it was that notes app and
[04:50:21]  there was no ssr so just putting it out there the whole thing with server components is the two trees as i said i think we talked about this already so i don
[04:50:30] 't need to dwell on it but um it's a way of weaving them in a way that like is consistent which is quite impressive i don't know i talked about that
[04:50:44]  talked about this i think i already mentioned i'm excited to see what tanner does with vinci um i'll take a moment here and uh i'd like thank a
[04:50:58] iden for this shout out um he he told the story of when he first made that benchmark that stirred up a bunch of controversy um but i i didn't realize how much it
[04:51:16]  actually impacted him i didn't realize how much people are on his case i kind of kept out of it at first because i was just like i didn't want to draw
[04:51:24]  attention to it but um quietly reached out um and i think so did uh marvin from pre-act but it's it's yeah he's very close millions community is fairly
[04:51:37]  close to the solid community so um i want to thank you for the recognition aiden you give me too much credit um um your conversations have helped me just as much especially
[04:51:49]  uh you know getting perspective on how to you know sharing ideas like how to like improve integrating with react and whatnot um so um i did not realize that's how we found block
[04:52:03]  dom so i mean that's that's very cool i'm i'm glad like that we have million and that we have you aiden so thank you very much for for this
[04:52:13]  uh for this shout out message why not thank you uh yeah dioxis adding um signals which is exciting although it's still react but also signals hooks and context re-rend
[04:52:34] ering and diffing early returns and regular control flows but stays now entirely signal based effect so basically it's like building it's unlike like view of preact and i think they
[04:52:43]  clarified removing new state yeah no control flow it's like strip down preact and only use signals and then built million inches by default that's interesting this approach would be good
[04:52:55]  for benchmarks i'm i'm actually thinking that i say this a lot that the structural value of of signals is actually more important like technically the million diffing is kind of like
[04:53:09]  what we do for templates anyways my gut i guess we'll have to see this guy is crazy with the rust performance thing but my gut is architecturally um the because signals
[04:53:23]  add overhead yeah i don't know my gut is architecturally this is less efficient than what like the approach we do with solid or i think leptos is similar but seeing
[04:53:33]  more people using signals is still good yes although it's blocked on but i mean the funny thing is like at that point a block dom is essentially see because the block dom
[04:53:52]  is essentially the same as uh like the the template diffing stuff that like the template cloning stuff we do so i guess the question is they it means they bear the difference
[04:54:04]  with the block dom it's supposed to be done on control flow is more aggressively um grouping you know how we group effects blocked on would be like grouping more which is good
[04:54:16]  until you hit insert points like control flow so yeah it's interesting i wonder if through compiler optimizations they can work stuff in a certain case like something just framework will never see
[04:54:29]  it because the state just updates and the triggers but it's more interesting when you actually get to something a little bit more involved as i said my gut is that the v
[04:54:37] dom at that point is not giving doing you any favors um but you know i it's it's probably not that different yeah i've seen some people combine vdom with signals
[04:54:53]  in this sort of way just i don't i don't yeah yeah we'll have to see it'd be interesting if someone actually showed in a way that this actually scaled
[04:55:02]  better it would be something to consider but so far uh every attempt i've seen hasn't i don't know greg could probably fill in the details on that okay done
[04:55:20]  done let's talk bookmarks i actually like this ben lesch tweet quite a bit because he was saying i've always loved ui function state but it's incomplete u
[04:55:34] i is just another side effect f is a determined by a development process skill and time and constraint side effect equals f of state evil yeah i don't know he's getting getting
[04:55:45]  kind of crazy on on on this stuff but i i i do the only thing that reason why i picked this on this one is because reacts ui's function state is very
[04:55:54]  much over i understand the idea is be simple but it like it is very incomplete compared to the model but we talked about that a ton today um obviously our man aiden
[04:56:05]  and why combinator um 24 group that is awesome for him oh i i forgot i actually like this well trash i just answered your question on stream um for like an hour when
[04:56:24]  i was talking about my article i love this west boss made a typo brian carneau inventor of react.js discovered the most prop drilling 90 levels deep i don
[04:56:36] 't that should be just my story this is this is how i invented signals it's interesting a signal update that is in json just still re-renders the component
[04:56:53]  but the component we re-render is blocked out not my thing but they're doing good work yeah no vdom needed you just call out to js there you go um
[04:57:04]  okay let's keep on going we talked about the leaking server functions i think last stream spa mode yeah i want to look at that and then that yeah i got so those are
[04:57:22]  the last two things before that this sub tweet is very much true your your experience may vary but almost every time i've looked into perf issue with a customer throughout my career
[04:57:36]  has always been mainly due to a timing sequence of resource loading either data font css or js is loaded too late or due to a client waterfall yes for page load performance i
[04:57:46] 've dealt with a ton of other update performance issues so i don't know if he's trying to suggest that no one cares about update load performance but page load is almost
[04:57:57]  all about waterfalls and all about scheduling and race conditions so anyways okay let's let's move fast here let's look at spa mode i think here uh built on the web
[04:58:11]  fetch api blah blah blah blah migrate react router what is spa mode it's basically you get if you react router plus feet create browser router router provider file-based routing
[04:58:23]  config routes automatic file-based splitting road out lazy link prefetch okay this sounds all standard usage blah blah blah unstable ssr false production yeah i guess this the beautiful thing
[04:58:41]  about this is all the docs and features are just going to be the the ones that are in react router right this is rename all loader and action functions to client load
[04:58:52] er client action yeah okay nice done okay the interesting about the split is because like the the in solid we only have client load and client action and to make it server you use
[04:59:08]  server so i guess this is one of the interesting results of this kind of thing right um but generally speaking it's pretty good actually i think someone uh say someone don't
[04:59:20]  know if i should go into my private messages here but i saw this really cool comparison i don't know if this should be shared on stream but he basically made a simple
[04:59:33]  optimistic uh api example in both next remix and solid start to show what like this equivalent server function code looks like and i thought it was really cool because like you can go
[04:59:46]  i went into this example and i looked at like you know here simple index solid start so he's got a couple cache functions with the user server and then he just calls
[04:59:55]  create async he's not using our route loader it's fine i guess it's top level you submission does a simple optimistic update puts in nice and clean types flow beautifully
[05:00:05]  because the way the functions blow throw through no string matching pretty cool you go into the remix example and you're like okay cool cool let's let's check it out app
[05:00:17]  routes almost the same thing go into index um this time you've got async functions there but now they're in the loader so it's a little bit more verbose
[05:00:26]  the action a couple more things but basically the same kind of thing um so it's kind of cool to see like the parallels there um little type script fun you know type
[05:00:39]  of whatever um and then you go into the next uh server component uh example for this and okay just second so what why is there a babe icon in here okay what sorry
[05:01:05]  it could take me a second to figure out what files i need to go to okay there's page which i just like index and that's css so ignore the css
[05:01:13]  so page layout pending component okay i got it this reminds me like the first time i went into angular right okay because like it's funny i remember doing to do mbc
[05:01:26]  examples and then you go into a couple framers and be like that to do and then you go into like angular and be like here's the folder of 26 files but
[05:01:35]  uh yeah anyways okay so then we use server we await and then we use form component why are we using form component oh i know this isn't fair it's because form promote
[05:01:45]  the client component isn't it aha and then use form state form state and then pending why is pending component a different component tell us that's weird can't you put the
[05:02:01]  pending component inside the do do what it's inside the okay next as people can you only show optimistic updates inside the form like this is this very odd api choice oh
[05:02:31]  what but it's not even a component okay that's oh right because yeah yeah yeah because the lookup yeah yeah okay so this yeah like this this i'm following here
[05:02:45]  because use is i thought this maybe was global but it's for the form itself okay that's really an interesting api because what we did was kind of like remix where we
[05:02:55]  detached it except then i ended up using the reference to the action everywhere so you can actually put optimistic updates anywhere in your app as long as you can reference the action and the
[05:03:06]  types flow throughs sweet i think i get what he was looking at this is good validation that we have like one of the sweetest data fetching apis okay that
[05:03:19]  is cool so i i get it it the weirdest thing for me actually on this api like i don't hate the the approach it's just like at that point why don
[05:03:29] 't you just make this capital f form because like what how is this magically a context provider i i copied this because i thought it was really cool but like this is this
[05:03:42]  is doing a lot of stuff okay well i i think we'll all get used to the patterns and kind of figure out what works and what doesn't um but yeah uh
[05:04:01]  i was just um yeah i hope he doesn't mind me putting that on stream i was just i was just kind of curious uh i'm thinking about remix patterns and stuff
[05:04:13]  what it would look like okay fine last last thing of today what's going on with this react backlash let's let's start with uh with cassidy here um i read both
[05:04:27]  um this blob and i read tanner and i i think we've had tanner on stream enough to know how he feels he feels like i i did talk to him
[05:04:41]  and he was like felt like he got something off his chest with this um but i feel like he's been echoing bits of this all along right because i i think they
[05:04:51]  have different complaints slightly tenor saying since hook in the early conception of suspense i personally felt the react is obsessed with just a handful of concepts both technically impressive and doubly pushing
[05:04:59]  the limits these new concepts have very little impact on what i do day to day all right okay i want value between client side focus client performance obsessed retail i originally loved is
[05:05:08]  it ever performance obsessed i don't know if react i felt like react was like good enough tm but i think it was a consistency that we liked react it's painful to
[05:05:21]  see other frameworks getting to deliver on the same motivation let me do the reacting to one that's fair i forget it's ground up some old excitement but it's easy to get
[05:05:28]  caught in a new feature that reality is a reactionary answer to a deeper issue the most brief i can be on this topic is that i really wish we could drop this
[05:05:34]  obsession with immutability and address too reactively whether that's through signals i'm fine most of numbers well i'm sorry most like casting i'm using right here heavily i
[05:05:42] 'm reaching for it regular but increasing resentment that's challenging okay let's see what cassidy has to say i think it's interesting because i feel like the performance argument actually came
[05:05:56]  early days with stuff like the work ryan florence did um you know like the dbmon comparison and all that i i feel like the original team like you
[05:06:04]  you watch jordan walk talk about react with like some of the stuff with tomo you can tell he was like an engineer's engineer because he was like he was he basically
[05:06:13]  was just trying to justify that the trade-off wasn't that bad especially when you compare it to angular it's actually kind of better you know that's what he was trying
[05:06:20]  to like say he never claimed that the vdom or anything was like all out on the performance side he was very level-headed but i feel like the the next wave
[05:06:28]  of like developers are like look how you react does this case really good and i think that's great because that's what like influencers do and that's why like there are cases
[05:06:36]  where especially the way we used to develop apps like you know react lose stuff out of the water but it's just interesting because i remember the core team being much more like
[05:06:47]  level-headed on on the performance side less so on the like we're functional programming you know dsl all the like ergonomic philosophical stuff they were you know like kvo
[05:07:03]  is bad no signals all that kind of stuff they were hard line on but on the performance side they were like yeah you know pretty good okay i'm kind of annoyed with
[05:07:14]  react lately i still use it regularly in them but somewhat friendly with folks still work on it it's first library i reached for but it's kind of confusing frustrating not the boast
[05:07:22]  but i like really no react i've used it for almost a decade i was in the react 18 working group taught react full-time okay i think these are good credentials
[05:07:36]  reacts gone really hard to understand i feel not from community probably the community blah blah blah it's not surprising that there hasn't been a release in june does this matter i
[05:07:43]  mean i guess they had somewhat regular releases up to june 2022 but i feel like they like they released hooks in 16.8 and then they released 17 that no one cared
[05:07:55]  about i feel like like four years before that they didn't release anything that anyone really cared about like between like say january between like what february march 2019 to
[05:08:05]  like 2000 to basically 2022 and i don't know if any of those releases on three years actually made a difference um to like the to most people so like the fact that they
[05:08:18] 're they've been doing these canary releases probably just a better process around what they've been we're doing over that period but yeah and what i'm trying to get
[05:08:30]  at is like they they did that for like three years before that too so it's it's been five years all together if that's the frustration but you know but actually 2022
[05:08:41]  actually it hasn't been five years because 2022 brought a bunch of stuff like suspense react 18 was huge release i i i have to imagine even without um next.js i
[05:08:55]  don't know this a hundred percent but like suspense on the server suggests streaming is possible with the rscs and i'm pretty sure remix implemented it so like and then yeah
[05:09:04]  so i feel like at least react 18 was a pretty big release even without next i'm yeah i mean but like does it matter like it isn't stable i i just
[05:09:21]  want to like just put it out there like is there a big difference between the last year and the three years before that like they just that's how long the release took
[05:09:31]  yeah i i like there's lots of things that aren't where they need to be but i'm saying like it wasn't the last three years like like before that like that
[05:09:42]  as well this is going back to the tanner comment but suspense is actually really valuable yeah and and transitions they were actually good api but i can understand why like even
[05:10:00]  myself i'm having a hard time keeping track of the hooks and that i'm fully i'm fully i thought i was fully up to react i was fully up to react in
[05:10:09]  2019 around the time that they said these are new experimental apis and they did that like first look at resources like they never released that api but when they did the first
[05:10:17]  experimental suspense release i was fully up to date and then since then i haven't been but i'm pretty good with rscs it's frustrating there's two react now
[05:10:29]  did she link dan's article as yeah not that there shouldn't be but that is clear easily understandable for most people yeah but i mean that's because stuff's changing it's
[05:10:42]  a frustrating that diversity efforts physically i don't know what i mean that's an interesting thing i don't it's interesting i don't get i i guess i don't
[05:11:04]  know enough about this i never got this impression especially with some of the great women working on the react team and meta that i met at the conferences this year um but i
[05:11:12]  think i think maybe this is just in general women the children were the friendly routes for whatever i see i don't know if three acts fault per se interesting visible i
[05:11:37]  don't know i don't know she didn't actually say very much she just i mean i i agree the canary thing is a little bit hard but it's like they
[05:12:00] 're they're figuring it out i guess i have more patience on this because i'm not building with it took so long the right new documentation because it was a huge effort
[05:12:17]  yeah i don't know it's tricky like when you consider the effort that went into the documentation effort it's it's harder with frameworks like they set the bar um now
[05:12:30]  it's like the amount of work that goes into this stuff continues to spread i guess with the resources of meta you'd think that maybe things could be different but i don't
[05:12:48]  know if she thinks the communication has gone better i'm optimistic for the future kind of interesting the thing is does any of this impact i'm trying to connect how any
[05:13:25]  of this impacts wanting to use react in a project this is the difference between tanner's thing where he's talking about technical reasons i guess this is just the impression of the
[05:13:36]  whole ecosystem and and stuff i guess two reacts and there's not that there shouldn't be it's like this struggling with the rsc mental model kind of thing yeah i
[05:13:49]  don't know it's it's tricky i shouldn't read too much into it i'm just this kind of i guess because it came from cassidy this was kind of a
[05:13:59]  you know a blow from people's perspectives i think there's a lot of like fair complaints i'm just it's interesting trying to connect the dots back to like actual usage
[05:14:09]  of react like there's i guess there's the framework in what it makes you like feel about it because of all the surrounding stuff i mean there is this user framework and
[05:14:24]  then everyone going for a cell but yeah i mean this is just collecting a lot of the issues kind of together and throwing there i'm i'm really interested personally how this impacts
[05:14:41]  people's day-to-day thing like did the use a framework thing change the way you have to develop your apps or how you get started with a react project and
[05:14:49]  that feels bad in a negative way did did um the canary releases impact a project that you're working on because you tried to adopt some stuff and then other stuff broke is
[05:15:00]  did the documentation no i mean i guess talking is already there so i can't come up with them there does the fact that rcs exist impact how you approach creating new projects
[05:15:14]  and making it more difficult like i i'm trying to i'm trying to think of like from a practical standpoint what all the stuff uh like how the impact is because like
[05:15:26]  for the most part like the reason i have an interest in this office is a framework author and i think in some ways react has done well i think the other ways it hasn
[05:15:35] 't but the the it's rarely the surface level implications that have caused this thing like the reason we have a tanner here is because of what was focused on and versus
[05:15:45]  what his use case it was kind of downstream of it the actual issues themselves i'm kind of interested if like the controversies actually had a direct impact on people's daily development
[05:15:58]  life that's that's that's what i'm curious about or is it just that they feel like they failed them okay so i'm just going to catch up with chat
[05:16:11]  because i think i've said everything i said i i want to hear but let's see here um imagine if someone had this complaint about marco yeah i mean to
[05:16:39]  be fair there there was a communication gap but i feel like that was a couple years ago i felt like the problem was they they announced suspense too eagerly like between 19 and
[05:16:48]  2022 there was a problem they've improved since then it took the problem is they promised so much in 18 19 everyone's like expecting it the next day and it or maybe in
[05:16:57]  the next month or two and it took three years you know four years maybe but like like i feel like they've done better but like do the does the complexity impact you
[05:17:12]  is what i'm getting at like who cares if okay if we have to make a life easier for devs they won't be complaining it's just because everything else has
[05:17:23]  moved on i'm taking it hmm common product developer doesn't get our season what they're scared of it maybe they should be scared i don't know it's possible that the
[05:17:39]  average react developer is out of touch probably but like i mean that's what happens when you have a frame rate that's popular but like i always assume that if you're out
[05:17:49]  of touch with what's going on it didn't matter because you you're just you know how there's the curve early adopters and the therapies you fit where you fit
[05:17:56]  in nothing they're doing is forcing you along that path yeah i would kill for uh for react stocks i mean we're we're getting actually cool solid solid stocks are actually
[05:18:22]  like getting there i'm pretty i'm pretty stoked about this on a side note and i we have to thank the react docs for the inspiration honestly you feel less comfortable building
[05:18:50]  a long-running business fund practice than two years ago because you're worried about the direction so that's where it comes in you're like are these guys doing the right stuff
[05:18:57]  i think sometimes people think they spend as much on x that i don't need when they could have been improving y instead but sometimes why is just done it's complete cs
[05:19:08] r react is its thing yeah yes meta frameworks do you need a meta framework for csr i i mean that's part of the thing i think it's fair i i
[05:19:41] 'm pushing people towards starting with csr i mean when we get to the good release point i think starts going to be quite nice you know so i guess that's that's
[05:19:50]  fair you know file system routing some things to wire up do you know do help when you have templates for status career reasons rather than ten words so they prefer things the same
[05:20:06]  when they're not yeah i think that's an interesting point i think you're right when when you're basically being told that you like have to buy into next essentially if you
[05:20:12]  want to stay at the head of the curve it sits with people wrong because they're like okay i want to be ahead of the curve i want to do the latest thing it
[05:20:17] 's like no you have to use next like i think that is i think that is like where the really awkward pieces here's someone i don't trust or like versell
[05:20:29]  and the fact that blessed framework makes me uneasy yeah so this is this is like politics right like kind of a bit in the scenes even if there's like nothing malicious there necessarily
[05:20:39]  like people keep on looking for stuff and it's it's essentially like like there's this kind of like you you i said a while ago that i was worried that they
[05:20:49]  were aligning too many things all together that it feels like you know like almost like a monopoly like the old ie or something where they just too many pieces are just in perfect
[05:20:58]  alignment it makes people uncomfortable because it only takes one you know bad player but i to be fair i don't think there is one but it's it's still there's
[05:21:08]  a comfort thing yeah i did see um thanks to i don't know is this like a versell specific feature i i hope not i i don't this is probably just out
[05:21:23]  of context um yeah i think maybe it is the meta framework thing v plus your rudder seems fine that's where i think we aren't moving fast enough just down the
[05:21:48]  wrong direction well it's interesting i'd love to hear where people think the right direction is i've been watching some of the conversations you have a lot of these directions were explored
[05:22:00]  at some point and kind of given up on maybe prematurely um that's why i think react's not like there's parts of the solution i don't like but i
[05:22:11]  i know where they've exhausted other approaches this one okay quickly okay yeah react postgres server components sure okay okay okay fun fun inside postgres i'm i'm glad
[05:22:57]  they're having fun with what they can do here like why not right now it's like for cell postgres obviously this is the challenge here i mean this is an inevitability
[05:23:11]  when you come up with stuff like like this like you're gonna maybe fall down into like specific implementations because like it's too tempting to take this power right and and
[05:23:27]  basically use it you know like you have the infrastructure you have the framework that can do these things like let's just you know this is in a sense they should be able to
[05:23:37]  innovate much quicker here which is good for everyone um even if you think they're working on the wrong stuff because then maybe they can get to the right stuff it is interesting
[05:23:46]  though because people are sitting and watching feeling like they're on the outside yeah good for remix good for tanner i i guess closing thought was is this post from dan in
[05:24:05]  my opinion learning framework first is better when you want to add a route you should be able to just add a file and not learn another library when you want to listen to it
[05:24:12]  you just see there are first things that learners actually want to do interesting so it's task oriented but for this work the framework should disappear it shouldn't feel like you're learning
[05:24:23]  a hard for different libraries that happen to be moving to a single character box needs to feel needed to react the funny thing about this is someone said that solid start is like
[05:24:29]  this but he's actually kind of saying the opposite thing he's he's actually saying like he's he's just explaining why react should should become a should become a meta framework
[05:24:40]  essentially like i i'm actually in some ways it's interesting because i'm suggesting that the like i can see this kind of going both ways because like on one side on
[05:24:56]  the start side we could say like like the conventions of making the framework work the pieces are static in start like the file system writing whereas like which writer you choose is up to
[05:25:09]  you so in a sense like start is the framework that has these features and then you can imp like choose the library you want to actually implement them um in that sense it
[05:25:20]  kind of disappears so maybe we succeeded it it was just it's he's talking he's talking about like not feeling like a hodgepodge of different libraries but like i
[05:25:29]  kind of like reacts hodgepodge of different libraries i guess not everyone does but all i'm hearing is like like the framework should disappear like does he just wish that
[05:25:42]  react was angular like it's all just part of the like the it's just like the features i don't know yeah rcp have a lot of reacting with a
[05:25:59]  lot of api's dpi's just feel yeah yeah that's true yeah we can we go from yeah so that's what dave was saying yeah in a sense yeah
[05:26:14]  although as i said i don't i agree in the sentiment i don't think we actually capture exactly what dan's going for react as a library that's hilarious uh it
[05:26:29] 's funny now like at one point it was like an argument and now it's like yeah it's almost it's almost funny to consider it that yeah so this is like
[05:26:56]  a lot of the fear here because i i get it next has never really shown that it's that open because it feels like it favors herself like how could it not yeah i
[05:27:05]  guess we'll just time will tell when we just keep on watching this um but yeah and more people get slightly disillusioned okay fine last tweet hopefully this is a
[05:27:20]  quick one oh yeah yeah we literally announced server component a year before sav left to go to vercel yes to people i don't think anyone believes this anymore right i
[05:27:40] 'll just part it anyways but i like no one thinks that vercel informed the design decision of next like that's not really the problem here right it's it's that
[05:27:52]  like like it's it's it's more of that like where all the f the time is being spent like react wanted to go this way it's just like they need
[05:28:08]  remix and others to to to pick up and like for this to kind of get rolling and if it doesn't or it drags it hurts react more than anything more servers
[05:28:24]  even more money for zilla okay yeah i i i i wish people understood that the ux actually improves in this scenario at least in theory i'm the implementation details might be
[05:28:47]  still in question but i i hope people understand that this is like a ux improvement right we're not i i don't i don't i don't think that's
[05:28:57]  the malicious intent here anyway i think we are done i'm so i'm happy that 120 of you are still with me this is your last chance to like this stream until you
[05:29:09]  watch the replay so i actually ignore the funny comments in chat but uh yeah i hope you all have a great weekend and uh i'll see you next week